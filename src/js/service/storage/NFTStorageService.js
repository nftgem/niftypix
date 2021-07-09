(function () {
  var ns = $.namespace('pskl.service.storage');

  ns.NFTStorageService = function (piskelController) {
    this.piskelController = piskelController;
  };

  ns.NFTStorageService.prototype.init = function () {
  };

  ns.NFTStorageService.prototype.save = function (piskel) {
    var descriptor = piskel.getDescriptor();
    var deferred = Q.defer();

    var serialized = pskl.utils.serialization.Serializer.serialize(piskel);
    console.log('NFTStorageService.save()', serialized.length);

    var data = {
      framesheet: serialized,
      fps: this.piskelController.getFPS(),
      name: descriptor.name,
      description: descriptor.description,
      frames: this.piskelController.getFrameCount()
    };

    if (serialized.length > Constants.APPENGINE_SAVE_LIMIT) {
      deferred.reject(
        'This sprite is too big to be saved on the gallery. Try saving it as a .piskel file.'
      );
    }
    data.public = true;

    var successCallback = function (response) {
      deferred.resolve();
    };

    var errorCallback = function (response) {
      deferred.reject(this.getErrorMessage_(response));
    };

    if (window.ethereum) {
      return window.ethereum
        .send('eth_requestAccounts')
        .then(function (provider) {
          window.provider = new ethers.providers.Web3Provider(window.ethereum);
          window.signer = window.provider.getSigner();
          window.multiTokenContract = new ethers.Contract(
            '0x496FEC70974870dD7c2905E25cAd4BDE802938C7',
            window.abis.INFTGemMultiToken,
            window.signer
          );
          window.niftyPixContract = new ethers.Contract(
            '0xdE1FbE40980238652029C72a473930c473Aad25e',
            window.abis.INiftyPixContract,
            window.signer
          );
          window.canvasGemPoolContract = new ethers.Contract(
            '0x6A7a28fD9B590ad24be7B3830b10d8990Fad849d',
            window.abis.INFTComplexGemPoolData,
            window.signer
          );
          return window.multiTokenContract.allHeldTokensLength(
            window.signer.getAddress()
          );
        })
        .then(function (tokensLen) {
          var htData = [];
          for (var i = 0; i < tokensLen.toNumber(); i++) {
            htData.push(
              window.multiTokenContract.allHeldTokens(
                window.signer.getAddress(),
                i
              )
            );
          }
          return Promise.all(htData);
        })
        .then(function (tokenHashes) {
          tokenHashes = tokenHashes.filter(function (th) {
            return !th.eq(0);
          });
          var tokenData = tokenHashes.map(function (th) {
            return window.canvasGemPoolContract.tokenType(th);
          });
          return Promise.all(tokenData).then(function (td) {
            return Promise.resolve({ tokenHashes: tokenHashes, tokenData: td });
          });
        })
        .then(function (tokenResult) {
          var filteredTokenList = [];
          tokenResult.tokenData.forEach(function (th, ndx) {
            if (th === 2) {
              filteredTokenList.push(tokenResult.tokenHashes[ndx]);
            }
          });
          return Promise.resolve(filteredTokenList);
        })
        .then(function (filteredTokenList) {
          return window.niftyPixContract
            .hasNiftyPixData(filteredTokenList)
            .then(function (hasListData) {
              return Promise.resolve(
                filteredTokenList.filter(function (el, ndx) {
                  return hasListData[ndx] === false;
                })
              );
            });
        })
        .then(function (filteredTokenList) {
          if (filteredTokenList.length === 0) {
            return Promise.reject(
              'You don\'t have any available Canvas Gems to mint on'
            );
          } else {
            var raw = btoa(JSON.stringify(data));
            console.log('uncompressed', raw.length);
            var compressed = Base64String.compress(raw);
            console.log('compressed', compressed.length);

            return window.niftyPixContract.setNiftyPixData(
              filteredTokenList[0],
              compressed,
              { value: ethers.utils.parseEther('5') }
            )
            .then(function(tx) {
              return tx.wait()
                .then(function() {
                  alert('Successfully minted to NFT with hash: ' + filteredTokenList[0]);
                });
            })
            .catch(function(err) {
              alert('Error: ' + err);
            });
            
          }
        });
    }

    return deferred.promise;
  };

  ns.NFTStorageService.prototype.load = function(name) {

    if (window.ethereum) {
      return window.ethereum
        .send('eth_requestAccounts')
        .then(function (provider) {
          window.provider = new ethers.providers.Web3Provider(window.ethereum);
          window.signer = window.provider.getSigner();
          window.niftyPixContract = new ethers.Contract(
            '0xdE1FbE40980238652029C72a473930c473Aad25e',
            window.abis.INiftyPixContract,
            window.signer
          );
          return window.niftyPixContract.getNiftyPixData(
            name
          );
        })
        .then(function (encoded) {
          var decodedToken = JSON.parse(atob(Base64String.decompress(encoded)));
          pskl.utils.serialization.Deserializer.deserialize(JSON.parse(decodedToken.framesheet), function (piskel) {
            pskl.app.piskelController.setPiskel(piskel);
          });
        });
    }
  };

  ns.NFTStorageService.prototype.getErrorMessage_ = function (response) {
    var errorMessage = '';
    if (response.status === 401) {
      errorMessage = 'Session expired, please log in again.';
    } else if (response.status === 403) {
      errorMessage =
        'Unauthorized action, this sprite belongs to another account.';
    } else if (response.status === 500) {
      errorMessage =
        'Unexpected server error, please contact us on Github (piskel) or Twitter (@piskelapp)';
    } else {
      errorMessage = 'Unknown error';
    }
    return errorMessage;
  };
})();

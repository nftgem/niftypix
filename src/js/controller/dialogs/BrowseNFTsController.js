(function () {
  var ns = $.namespace('pskl.controller.dialogs');

  ns.BrowseNFTsController = function (piskelController) {};

  pskl.utils.inherit(ns.BrowseNFTsController, ns.AbstractDialogController);

  ns.BrowseNFTsController.prototype.init = function () {
    this.superclass.init.call(this);

    this.nftsItemTemplate_ = pskl.utils.Template.get('nfts-item-template');

    this.service_ = pskl.app.nftStorageService;
    this.piskelList = document.querySelector('.nft-piskel-list');

    this.fillNFTPiskelsList_();

    this.piskelList.addEventListener('click', this.onPiskelsListClick_.bind(this));
  };

  ns.BrowseNFTsController.prototype.onPiskelsListClick_ = function (evt) {
    var action = evt.target.getAttribute('data-action');
    var name = evt.target.getAttribute('data-name');
    if (action === 'load') {
      if (window.confirm('This will erase your current piskel. Continue ?')) {
        this.service_.load(name);
        this.closeDialog();
      }
    }
  };

  ns.BrowseNFTsController.prototype.fillNFTPiskelsList_ = function () {
    var controller = this;
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
              return hasListData[ndx] === true;
            })
          );
        });
    })
    .then(function (filteredTokenList) {
      var html = '';
      filteredTokenList.forEach(function (tokenHash) {
        html += pskl.utils.Template.replace(controller.nftsItemTemplate_, {
          name : tokenHash.toHexString(),
        });
      });
      var tableBody_ = controller.piskelList.tBodies[0];
      tableBody_.innerHTML = html;
    });
  };
})();

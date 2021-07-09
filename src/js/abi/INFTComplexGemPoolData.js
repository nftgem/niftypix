if (!window.abis) {
  window.abis = {};
}
window.abis.INFTComplexGemPoolData = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "converter",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "pool",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "oldPool",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "oldToken",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "gemHash",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "quantity",
        type: "uint256",
      },
    ],
    name: "NFTGemImported",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tkn",
        type: "address",
      },
    ],
    name: "addAllowedToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "allowedToken",
        type: "address",
      },
    ],
    name: "addAllowedTokenSource",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "theToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "pool",
        type: "address",
      },
      {
        internalType: "enum INFTComplexGemPool.RequirementType",
        name: "inputType",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "theTokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minAmount",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "takeCustody",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "burn",
        type: "bool",
      },
    ],
    name: "addInputRequirement",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "ndx",
        type: "uint256",
      },
    ],
    name: "allInputRequirements",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "enum INFTComplexGemPool.RequirementType",
        name: "",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "allInputRequirementsLength",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "ndx",
        type: "uint256",
      },
    ],
    name: "allTokenHashes",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "allTokenHashesLength",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "allowPurchase",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "allowedTokenSources",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "idx",
        type: "uint256",
      },
    ],
    name: "allowedTokens",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "allowedTokensLength",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "category",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "claimHash",
        type: "uint256",
      },
    ],
    name: "claim",
    outputs: [
      {
        internalType: "uint256",
        name: "claimClaimAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "claimClaimQuantity",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "claimClaimUnlockTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "claimClaimTokenAmount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "claimStakedToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "claimNNextClaimId",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "claimId",
        type: "uint256",
      },
    ],
    name: "claimAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "claimId",
        type: "uint256",
      },
    ],
    name: "claimQuantity",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "claimId",
        type: "uint256",
      },
    ],
    name: "claimTokenAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "claimId",
        type: "uint256",
      },
    ],
    name: "claimUnlockTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "claimedCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "description",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "enabled",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ethPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "gemHash",
        type: "uint256",
      },
    ],
    name: "gemClaimHash",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pool",
        type: "address",
      },
      {
        internalType: "address",
        name: "legacyToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenHash",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
    ],
    name: "importLegacyGem",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenhash",
        type: "uint256",
      },
    ],
    name: "isLegacyGemImported",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tkn",
        type: "address",
      },
    ],
    name: "isTokenAllowed",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "maxClaimsPerAccount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "maxQuantityPerClaim",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "mintedCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nextClaimHash",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nextClaimId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nextGemHash",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nextGemId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "priceIncrementType",
    outputs: [
      {
        internalType: "enum INFTComplexGemPoolData.PriceIncrementType",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tkn",
        type: "address",
      },
    ],
    name: "removeAllowedToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "allowedToken",
        type: "address",
      },
    ],
    name: "removeAllowedTokenSource",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "allow",
        type: "bool",
      },
    ],
    name: "setAllowPurchase",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "theCategory",
        type: "uint256",
      },
    ],
    name: "setCategory",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "desc",
        type: "string",
      },
    ],
    name: "setDescription",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "enable",
        type: "bool",
      },
    ],
    name: "setEnabled",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "claimId",
        type: "uint256",
      },
    ],
    name: "setMaxClaimsPerAccount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "claimId",
        type: "uint256",
      },
    ],
    name: "setMaxQuantityPerClaim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_nextClaimId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_nextGemId",
        type: "uint256",
      },
    ],
    name: "setNextIds",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "enum INFTComplexGemPoolData.PriceIncrementType",
        name: "incrementType",
        type: "uint8",
      },
    ],
    name: "setPriceIncrementType",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "inTokenHashes",
        type: "uint256[]",
      },
    ],
    name: "setTokenHashes",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    name: "setValidateErc20",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "isVisible",
        type: "bool",
      },
    ],
    name: "setVisible",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "settings",
    outputs: [
      {
        internalType: "string",
        name: "settingsSymbol",
        type: "string",
      },
      {
        internalType: "string",
        name: "settingsName",
        type: "string",
      },
      {
        internalType: "string",
        name: "settingsDescription",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "settingsCategory",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "settingsEthPrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "settingsMinTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "settingsMaxTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "settingsDiffStep",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "settingsMacClaims",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "settingsMaxQuantityPerClaim",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "settingsMaxClaimsPerAccount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "claimId",
        type: "uint256",
      },
    ],
    name: "stakedToken",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "stats",
    outputs: [
      {
        internalType: "bool",
        name: "statsVisible",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "statsClaimedCount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "statsMintedCount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "statsTotalStakedEth",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "statsNextClaimHash",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "statsNextGemHash",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "statsNextClaimId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "statsNextGemId",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenHash",
        type: "uint256",
      },
    ],
    name: "token",
    outputs: [
      {
        internalType: "enum INFTGemMultiToken.TokenType",
        name: "tokenTokenType",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "tokenTokenId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "tokenTokenSource",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenHashes",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenHash",
        type: "uint256",
      },
    ],
    name: "tokenId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenHash",
        type: "uint256",
      },
    ],
    name: "tokenType",
    outputs: [
      {
        internalType: "enum INFTGemMultiToken.TokenType",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalStakedEth",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "ndx",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "theToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "pool",
        type: "address",
      },
      {
        internalType: "enum INFTComplexGemPool.RequirementType",
        name: "inputType",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "tid",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minAmount",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "takeCustody",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "burn",
        type: "bool",
      },
    ],
    name: "updateInputRequirement",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "validateErc20",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "visible",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

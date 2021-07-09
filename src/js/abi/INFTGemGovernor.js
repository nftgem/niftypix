if (!window.abis) {
  window.abis = {};
}
window.abis.INFTGemGovernor = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "proposal",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isBanned",
        type: "bool",
      },
    ],
    name: "AllowList",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "proposal",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newFee",
        type: "uint256",
      },
    ],
    name: "FeeUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "GovernanceTokenIssued",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "proposal",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "received",
        type: "uint256",
      },
    ],
    name: "ProjectFunded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "proposal",
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
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "ethPrice",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "minTime",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "maxTime",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "diffStep",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "maxClaims",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "alllowedToken",
        type: "address",
      },
    ],
    name: "StakingPoolCreated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "createChangeFeeProposal",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "createFundProjectProposal",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "ethPrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "diffstep",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxClaims",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "allowedToken",
        type: "address",
      },
    ],
    name: "createPool",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "proposalHash",
        type: "uint256",
      },
    ],
    name: "createProposalVoteTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "ethPrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "diffstep",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxClaims",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "allowedToken",
        type: "address",
      },
    ],
    name: "createSystemPool",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
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
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    name: "createUpdateAllowlistProposal",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "proposalHash",
        type: "uint256",
      },
    ],
    name: "destroyProposalVoteTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "propAddress",
        type: "address",
      },
    ],
    name: "executeProposal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_multitoken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_factory",
        type: "address",
      },
      {
        internalType: "address",
        name: "_feeTracker",
        type: "address",
      },
      {
        internalType: "address",
        name: "_proposalFactory",
        type: "address",
      },
      {
        internalType: "address",
        name: "_swapHelper",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "initialized",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "issueInitialGovernanceTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

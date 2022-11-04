export const deployments = {
  name: "mumbai",
  chainId: "80001",
  contracts: {
    fDAI: {
      address: "0x10055ef62E88eF68b5011F4c7b5Ab9B99f00BB40",
      abi: [
        {
          inputs: [],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "spender",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "Approval",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "Transfer",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              internalType: "address",
              name: "spender",
              type: "address",
            },
          ],
          name: "allowance",
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
              name: "spender",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "approve",
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
              name: "account",
              type: "address",
            },
          ],
          name: "balanceOf",
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
          name: "decimals",
          outputs: [
            {
              internalType: "uint8",
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
              name: "spender",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "subtractedValue",
              type: "uint256",
            },
          ],
          name: "decreaseAllowance",
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
              name: "spender",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "addedValue",
              type: "uint256",
            },
          ],
          name: "increaseAllowance",
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
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "mint",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "name",
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
          inputs: [],
          name: "totalSupply",
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
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "transfer",
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
              name: "from",
              type: "address",
            },
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "transferFrom",
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
      ],
    },
    Manager_Implementation: {
      address: "0x757371aFe154C97914b79B194d5215E0e2eda049",
      abi: [
        {
          inputs: [],
          name: "MG_ACCEPTANCE_PERIOD_EXPIRED",
          type: "error",
        },
        {
          inputs: [],
          name: "MG_ADDRESS_ZERO",
          type: "error",
        },
        {
          inputs: [],
          name: "MG_AGREEMENT_INACTIVE",
          type: "error",
        },
        {
          inputs: [],
          name: "MG_AGREEMENT_NOT_PENDING",
          type: "error",
        },
        {
          inputs: [],
          name: "MG_AMOUNT_TOO_HIGH",
          type: "error",
        },
        {
          inputs: [],
          name: "MG_CONTRACTOR_EQUALS_CONTRACTEE",
          type: "error",
        },
        {
          inputs: [],
          name: "MG_FUNDS_ALREADY_SECURED",
          type: "error",
        },
        {
          inputs: [],
          name: "MG_INVALID_MATURITY_DATE",
          type: "error",
        },
        {
          inputs: [],
          name: "MG_INVALID_MIGRATION_PERIOD",
          type: "error",
        },
        {
          inputs: [],
          name: "MG_INVALID_TOKEN",
          type: "error",
        },
        {
          inputs: [],
          name: "MG_UNAUTHORIZED",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256",
              name: "agreementID",
              type: "uint256",
            },
          ],
          name: "AgreementActivated",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256",
              name: "agreementID",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "address",
              name: "contractor",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "contractee",
              type: "address",
            },
          ],
          name: "AgreementCreated",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256",
              name: "agreement",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint128",
              name: "amount",
              type: "uint128",
            },
          ],
          name: "FundsDeposited",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256",
              name: "agreement",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint128",
              name: "amount",
              type: "uint128",
            },
          ],
          name: "FundsMigrated",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint8",
              name: "version",
              type: "uint8",
            },
          ],
          name: "Initialized",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "account",
              type: "address",
            },
          ],
          name: "Paused",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bytes32",
              name: "role",
              type: "bytes32",
            },
            {
              indexed: true,
              internalType: "bytes32",
              name: "previousAdminRole",
              type: "bytes32",
            },
            {
              indexed: true,
              internalType: "bytes32",
              name: "newAdminRole",
              type: "bytes32",
            },
          ],
          name: "RoleAdminChanged",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bytes32",
              name: "role",
              type: "bytes32",
            },
            {
              indexed: true,
              internalType: "address",
              name: "account",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "sender",
              type: "address",
            },
          ],
          name: "RoleGranted",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bytes32",
              name: "role",
              type: "bytes32",
            },
            {
              indexed: true,
              internalType: "address",
              name: "account",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "sender",
              type: "address",
            },
          ],
          name: "RoleRevoked",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "account",
              type: "address",
            },
          ],
          name: "Unpaused",
          type: "event",
        },
        {
          inputs: [],
          name: "DEFAULT_ADMIN_ROLE",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "DOMAIN_SEPARATOR",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "agreementID",
              type: "uint256",
            },
          ],
          name: "activateAgreement",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "agreementNonce",
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
              name: "",
              type: "uint256",
            },
          ],
          name: "agreements",
          outputs: [
            {
              components: [
                {
                  internalType: "uint256",
                  name: "AGREEMENT_ID",
                  type: "uint256",
                },
                {
                  internalType: "uint128",
                  name: "BEGINNING_DATE",
                  type: "uint128",
                },
                {
                  internalType: "uint128",
                  name: "ACCEPTANCE_DEADLINE",
                  type: "uint128",
                },
                {
                  internalType: "uint128",
                  name: "MATURITY_DATE",
                  type: "uint128",
                },
                {
                  internalType: "uint128",
                  name: "PAYMENT_CYCLE_DURATION",
                  type: "uint128",
                },
                {
                  internalType: "uint128",
                  name: "PAYMENT_CYCLE_AMOUNT",
                  type: "uint128",
                },
                {
                  internalType: "uint128",
                  name: "ESTABLISHMENT_FEE_RATE",
                  type: "uint128",
                },
                {
                  internalType: "uint128",
                  name: "PENALIZATION_AMOUNT",
                  type: "uint128",
                },
                {
                  internalType: "address",
                  name: "UNDERLAYING_TOKEN",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "CONTRACTOR",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "CONTRACTEE",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "DESCRIPTION_URI",
                  type: "string",
                },
              ],
              internalType: "struct Types.AgreementParameters",
              name: "parameters",
              type: "tuple",
            },
            {
              components: [
                {
                  internalType: "uint128",
                  name: "escrowedFunds",
                  type: "uint128",
                },
                {
                  internalType: "bool",
                  name: "active",
                  type: "bool",
                },
                {
                  internalType: "bool",
                  name: "closed",
                  type: "bool",
                },
              ],
              internalType: "struct Types.AgreementState",
              name: "state",
              type: "tuple",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "challengeDuration",
          outputs: [
            {
              internalType: "uint128",
              name: "",
              type: "uint128",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "agreementID",
              type: "uint256",
            },
            {
              internalType: "uint128",
              name: "amount",
              type: "uint128",
            },
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
          ],
          name: "claimProtocolFees",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                {
                  internalType: "uint128",
                  name: "beginningDate",
                  type: "uint128",
                },
                {
                  internalType: "uint128",
                  name: "acceptanceDeadline",
                  type: "uint128",
                },
                {
                  internalType: "uint128",
                  name: "maturityDate",
                  type: "uint128",
                },
                {
                  internalType: "uint128",
                  name: "paymentCycleDuration",
                  type: "uint128",
                },
                {
                  internalType: "uint128",
                  name: "paymentCycleAmount",
                  type: "uint128",
                },
                {
                  internalType: "address",
                  name: "underlayingToken",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "contractor",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "descriptionURI",
                  type: "string",
                },
              ],
              internalType: "struct IManager.AgreementCreationParams",
              name: "params",
              type: "tuple",
            },
          ],
          name: "createAgreement",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "agreementID",
              type: "uint256",
            },
          ],
          name: "depositFundsForNextCycle",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "establishmentFeeRate",
          outputs: [
            {
              internalType: "uint128",
              name: "",
              type: "uint128",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "freezeAgreements",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "agreementID",
              type: "uint256",
            },
          ],
          name: "getAgreementParameters",
          outputs: [
            {
              internalType: "uint128",
              name: "beginningDate",
              type: "uint128",
            },
            {
              internalType: "uint128",
              name: "acceptanceDeadline",
              type: "uint128",
            },
            {
              internalType: "uint128",
              name: "maturityDate",
              type: "uint128",
            },
            {
              internalType: "uint128",
              name: "paymentCycleDuration",
              type: "uint128",
            },
            {
              internalType: "uint128",
              name: "paymentCycleAmount",
              type: "uint128",
            },
            {
              internalType: "uint128",
              name: "establishmentFeeRate_",
              type: "uint128",
            },
            {
              internalType: "uint128",
              name: "penalizationAmount_",
              type: "uint128",
            },
            {
              internalType: "address",
              name: "underlayingToken",
              type: "address",
            },
            {
              internalType: "address",
              name: "contractor",
              type: "address",
            },
            {
              internalType: "address",
              name: "contractee",
              type: "address",
            },
            {
              internalType: "string",
              name: "descriptionURI",
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
              name: "agreementID",
              type: "uint256",
            },
          ],
          name: "getAgreementState",
          outputs: [
            {
              internalType: "uint128",
              name: "escrowedFunds",
              type: "uint128",
            },
            {
              internalType: "bool",
              name: "active",
              type: "bool",
            },
            {
              internalType: "bool",
              name: "closed",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "role",
              type: "bytes32",
            },
          ],
          name: "getRoleAdmin",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "user",
              type: "address",
            },
          ],
          name: "getUserAgreements",
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
              internalType: "bytes32",
              name: "role",
              type: "bytes32",
            },
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
          ],
          name: "grantRole",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "role",
              type: "bytes32",
            },
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
          ],
          name: "hasRole",
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
              internalType: "uint128",
              name: "challengeDuration_",
              type: "uint128",
            },
            {
              internalType: "address",
              name: "governance_",
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
          name: "initialize_",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "agreementID",
              type: "uint256",
            },
          ],
          name: "migrateFunds",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "name",
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
          name: "paused",
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
          name: "penalizationAmount",
          outputs: [
            {
              internalType: "uint128",
              name: "",
              type: "uint128",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "role",
              type: "bytes32",
            },
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
          ],
          name: "renounceRole",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "role",
              type: "bytes32",
            },
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
          ],
          name: "revokeRole",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint128",
              name: "challengeDuration_",
              type: "uint128",
            },
          ],
          name: "setChallengeDuration",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint128",
              name: "establishmentFeeRate_",
              type: "uint128",
            },
          ],
          name: "setEstablishmentFeeRate",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint128",
              name: "penalizationAmount_",
              type: "uint128",
            },
          ],
          name: "setPenalizationAmount",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes4",
              name: "interfaceId",
              type: "bytes4",
            },
          ],
          name: "supportsInterface",
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
          name: "unfreezeAgreements",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          name: "usedNonces",
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
              name: "",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          name: "userAgreements",
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
              name: "signer",
              type: "address",
            },
            {
              internalType: "uint8",
              name: "v",
              type: "uint8",
            },
            {
              internalType: "bytes32",
              name: "r",
              type: "bytes32",
            },
            {
              internalType: "bytes32",
              name: "s",
              type: "bytes32",
            },
            {
              internalType: "string",
              name: "description",
              type: "string",
            },
            {
              internalType: "uint256",
              name: "nonce",
              type: "uint256",
            },
          ],
          name: "validateDescription",
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
      ],
    },
    Manager_Proxy: {
      address: "0x271ecC5C07A80891ec552156675Ecc4260B3B0dE",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "implementationAddress",
              type: "address",
            },
            {
              internalType: "address",
              name: "ownerAddress",
              type: "address",
            },
            {
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
          ],
          stateMutability: "payable",
          type: "constructor",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "previousOwner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "OwnershipTransferred",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "previousImplementation",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "newImplementation",
              type: "address",
            },
          ],
          name: "ProxyImplementationUpdated",
          type: "event",
        },
        {
          stateMutability: "payable",
          type: "fallback",
        },
        {
          inputs: [],
          name: "owner",
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
          inputs: [
            {
              internalType: "bytes4",
              name: "id",
              type: "bytes4",
            },
          ],
          name: "supportsInterface",
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
              name: "newOwner",
              type: "address",
            },
          ],
          name: "transferOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newImplementation",
              type: "address",
            },
          ],
          name: "upgradeTo",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newImplementation",
              type: "address",
            },
            {
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
          ],
          name: "upgradeToAndCall",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          stateMutability: "payable",
          type: "receive",
        },
      ],
    },
    Manager: {
      address: "0x271ecC5C07A80891ec552156675Ecc4260B3B0dE",
      abi: [
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "previousOwner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "OwnershipTransferred",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "previousImplementation",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "newImplementation",
              type: "address",
            },
          ],
          name: "ProxyImplementationUpdated",
          type: "event",
        },
        {
          stateMutability: "payable",
          type: "fallback",
        },
        {
          inputs: [],
          name: "owner",
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
          inputs: [
            {
              internalType: "bytes4",
              name: "id",
              type: "bytes4",
            },
          ],
          name: "supportsInterface",
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
              name: "newOwner",
              type: "address",
            },
          ],
          name: "transferOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newImplementation",
              type: "address",
            },
          ],
          name: "upgradeTo",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newImplementation",
              type: "address",
            },
            {
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
          ],
          name: "upgradeToAndCall",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          stateMutability: "payable",
          type: "receive",
        },
        {
          inputs: [],
          name: "MG_ACCEPTANCE_PERIOD_EXPIRED",
          type: "error",
        },
        {
          inputs: [],
          name: "MG_ADDRESS_ZERO",
          type: "error",
        },
        {
          inputs: [],
          name: "MG_AGREEMENT_INACTIVE",
          type: "error",
        },
        {
          inputs: [],
          name: "MG_AGREEMENT_NOT_PENDING",
          type: "error",
        },
        {
          inputs: [],
          name: "MG_AMOUNT_TOO_HIGH",
          type: "error",
        },
        {
          inputs: [],
          name: "MG_CONTRACTOR_EQUALS_CONTRACTEE",
          type: "error",
        },
        {
          inputs: [],
          name: "MG_FUNDS_ALREADY_SECURED",
          type: "error",
        },
        {
          inputs: [],
          name: "MG_INVALID_MATURITY_DATE",
          type: "error",
        },
        {
          inputs: [],
          name: "MG_INVALID_MIGRATION_PERIOD",
          type: "error",
        },
        {
          inputs: [],
          name: "MG_INVALID_TOKEN",
          type: "error",
        },
        {
          inputs: [],
          name: "MG_UNAUTHORIZED",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256",
              name: "agreementID",
              type: "uint256",
            },
          ],
          name: "AgreementActivated",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256",
              name: "agreementID",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "address",
              name: "contractor",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "contractee",
              type: "address",
            },
          ],
          name: "AgreementCreated",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256",
              name: "agreement",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint128",
              name: "amount",
              type: "uint128",
            },
          ],
          name: "FundsDeposited",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256",
              name: "agreement",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint128",
              name: "amount",
              type: "uint128",
            },
          ],
          name: "FundsMigrated",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint8",
              name: "version",
              type: "uint8",
            },
          ],
          name: "Initialized",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "account",
              type: "address",
            },
          ],
          name: "Paused",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bytes32",
              name: "role",
              type: "bytes32",
            },
            {
              indexed: true,
              internalType: "bytes32",
              name: "previousAdminRole",
              type: "bytes32",
            },
            {
              indexed: true,
              internalType: "bytes32",
              name: "newAdminRole",
              type: "bytes32",
            },
          ],
          name: "RoleAdminChanged",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bytes32",
              name: "role",
              type: "bytes32",
            },
            {
              indexed: true,
              internalType: "address",
              name: "account",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "sender",
              type: "address",
            },
          ],
          name: "RoleGranted",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bytes32",
              name: "role",
              type: "bytes32",
            },
            {
              indexed: true,
              internalType: "address",
              name: "account",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "sender",
              type: "address",
            },
          ],
          name: "RoleRevoked",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "account",
              type: "address",
            },
          ],
          name: "Unpaused",
          type: "event",
        },
        {
          inputs: [],
          name: "DEFAULT_ADMIN_ROLE",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "DOMAIN_SEPARATOR",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "agreementID",
              type: "uint256",
            },
          ],
          name: "activateAgreement",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "agreementNonce",
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
              name: "",
              type: "uint256",
            },
          ],
          name: "agreements",
          outputs: [
            {
              components: [
                {
                  internalType: "uint256",
                  name: "AGREEMENT_ID",
                  type: "uint256",
                },
                {
                  internalType: "uint128",
                  name: "BEGINNING_DATE",
                  type: "uint128",
                },
                {
                  internalType: "uint128",
                  name: "ACCEPTANCE_DEADLINE",
                  type: "uint128",
                },
                {
                  internalType: "uint128",
                  name: "MATURITY_DATE",
                  type: "uint128",
                },
                {
                  internalType: "uint128",
                  name: "PAYMENT_CYCLE_DURATION",
                  type: "uint128",
                },
                {
                  internalType: "uint128",
                  name: "PAYMENT_CYCLE_AMOUNT",
                  type: "uint128",
                },
                {
                  internalType: "uint128",
                  name: "ESTABLISHMENT_FEE_RATE",
                  type: "uint128",
                },
                {
                  internalType: "uint128",
                  name: "PENALIZATION_AMOUNT",
                  type: "uint128",
                },
                {
                  internalType: "address",
                  name: "UNDERLAYING_TOKEN",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "CONTRACTOR",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "CONTRACTEE",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "DESCRIPTION_URI",
                  type: "string",
                },
              ],
              internalType: "struct Types.AgreementParameters",
              name: "parameters",
              type: "tuple",
            },
            {
              components: [
                {
                  internalType: "uint128",
                  name: "escrowedFunds",
                  type: "uint128",
                },
                {
                  internalType: "bool",
                  name: "active",
                  type: "bool",
                },
                {
                  internalType: "bool",
                  name: "closed",
                  type: "bool",
                },
              ],
              internalType: "struct Types.AgreementState",
              name: "state",
              type: "tuple",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "challengeDuration",
          outputs: [
            {
              internalType: "uint128",
              name: "",
              type: "uint128",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "agreementID",
              type: "uint256",
            },
            {
              internalType: "uint128",
              name: "amount",
              type: "uint128",
            },
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
          ],
          name: "claimProtocolFees",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                {
                  internalType: "uint128",
                  name: "beginningDate",
                  type: "uint128",
                },
                {
                  internalType: "uint128",
                  name: "acceptanceDeadline",
                  type: "uint128",
                },
                {
                  internalType: "uint128",
                  name: "maturityDate",
                  type: "uint128",
                },
                {
                  internalType: "uint128",
                  name: "paymentCycleDuration",
                  type: "uint128",
                },
                {
                  internalType: "uint128",
                  name: "paymentCycleAmount",
                  type: "uint128",
                },
                {
                  internalType: "address",
                  name: "underlayingToken",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "contractor",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "descriptionURI",
                  type: "string",
                },
              ],
              internalType: "struct IManager.AgreementCreationParams",
              name: "params",
              type: "tuple",
            },
          ],
          name: "createAgreement",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "agreementID",
              type: "uint256",
            },
          ],
          name: "depositFundsForNextCycle",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "establishmentFeeRate",
          outputs: [
            {
              internalType: "uint128",
              name: "",
              type: "uint128",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "freezeAgreements",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "agreementID",
              type: "uint256",
            },
          ],
          name: "getAgreementParameters",
          outputs: [
            {
              internalType: "uint128",
              name: "beginningDate",
              type: "uint128",
            },
            {
              internalType: "uint128",
              name: "acceptanceDeadline",
              type: "uint128",
            },
            {
              internalType: "uint128",
              name: "maturityDate",
              type: "uint128",
            },
            {
              internalType: "uint128",
              name: "paymentCycleDuration",
              type: "uint128",
            },
            {
              internalType: "uint128",
              name: "paymentCycleAmount",
              type: "uint128",
            },
            {
              internalType: "uint128",
              name: "establishmentFeeRate_",
              type: "uint128",
            },
            {
              internalType: "uint128",
              name: "penalizationAmount_",
              type: "uint128",
            },
            {
              internalType: "address",
              name: "underlayingToken",
              type: "address",
            },
            {
              internalType: "address",
              name: "contractor",
              type: "address",
            },
            {
              internalType: "address",
              name: "contractee",
              type: "address",
            },
            {
              internalType: "string",
              name: "descriptionURI",
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
              name: "agreementID",
              type: "uint256",
            },
          ],
          name: "getAgreementState",
          outputs: [
            {
              internalType: "uint128",
              name: "escrowedFunds",
              type: "uint128",
            },
            {
              internalType: "bool",
              name: "active",
              type: "bool",
            },
            {
              internalType: "bool",
              name: "closed",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "role",
              type: "bytes32",
            },
          ],
          name: "getRoleAdmin",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "user",
              type: "address",
            },
          ],
          name: "getUserAgreements",
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
              internalType: "bytes32",
              name: "role",
              type: "bytes32",
            },
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
          ],
          name: "grantRole",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "role",
              type: "bytes32",
            },
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
          ],
          name: "hasRole",
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
              internalType: "uint128",
              name: "challengeDuration_",
              type: "uint128",
            },
            {
              internalType: "address",
              name: "governance_",
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
          name: "initialize_",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "agreementID",
              type: "uint256",
            },
          ],
          name: "migrateFunds",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "name",
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
          name: "paused",
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
          name: "penalizationAmount",
          outputs: [
            {
              internalType: "uint128",
              name: "",
              type: "uint128",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "role",
              type: "bytes32",
            },
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
          ],
          name: "renounceRole",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "role",
              type: "bytes32",
            },
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
          ],
          name: "revokeRole",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint128",
              name: "challengeDuration_",
              type: "uint128",
            },
          ],
          name: "setChallengeDuration",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint128",
              name: "establishmentFeeRate_",
              type: "uint128",
            },
          ],
          name: "setEstablishmentFeeRate",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint128",
              name: "penalizationAmount_",
              type: "uint128",
            },
          ],
          name: "setPenalizationAmount",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "unfreezeAgreements",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          name: "usedNonces",
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
              name: "",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          name: "userAgreements",
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
              name: "signer",
              type: "address",
            },
            {
              internalType: "uint8",
              name: "v",
              type: "uint8",
            },
            {
              internalType: "bytes32",
              name: "r",
              type: "bytes32",
            },
            {
              internalType: "bytes32",
              name: "s",
              type: "bytes32",
            },
            {
              internalType: "string",
              name: "description",
              type: "string",
            },
            {
              internalType: "uint256",
              name: "nonce",
              type: "uint256",
            },
          ],
          name: "validateDescription",
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
              name: "implementationAddress",
              type: "address",
            },
            {
              internalType: "address",
              name: "ownerAddress",
              type: "address",
            },
            {
              internalType: "bytes",
              name: "data",
              type: "bytes",
            },
          ],
          stateMutability: "payable",
          type: "constructor",
        },
      ],
    },
  },
} as const;

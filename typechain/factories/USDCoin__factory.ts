/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { USDCoin } from "../USDCoin";

export class USDCoin__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<USDCoin> {
    return super.deploy(overrides || {}) as Promise<USDCoin>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): USDCoin {
    return super.attach(address) as USDCoin;
  }
  connect(signer: Signer): USDCoin__factory {
    return super.connect(signer) as USDCoin__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): USDCoin {
    return new Contract(address, _abi, signerOrProvider) as USDCoin;
  }
}

const _abi = [
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
        name: "delegator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "fromDelegate",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "toDelegate",
        type: "address",
      },
    ],
    name: "DelegateChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "delegate",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "previousBalance",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newBalance",
        type: "uint256",
      },
    ],
    name: "DelegateVotesChanged",
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
    inputs: [],
    name: "DELEGATION_TYPEHASH",
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
    name: "DOMAIN_TYPEHASH",
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
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
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
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    name: "checkpoints",
    outputs: [
      {
        internalType: "uint32",
        name: "fromBlock",
        type: "uint32",
      },
      {
        internalType: "uint256",
        name: "votes",
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
        name: "delegatee",
        type: "address",
      },
    ],
    name: "delegate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "delegatee",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "expiry",
        type: "uint256",
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
    ],
    name: "delegateBySig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "delegator",
        type: "address",
      },
    ],
    name: "delegates",
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
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "getCurrentVotes",
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
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
    ],
    name: "getPriorVotes",
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
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "nonces",
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
        name: "",
        type: "address",
      },
    ],
    name: "numCheckpoints",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
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
        name: "recipient",
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
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
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
];

const _bytecode =
  "0x60806040526509184e72a0006006553480156200001b57600080fd5b5060408051808201825260088152672aa9a21021b7b4b760c11b6020808301918252835180850190945260048452635553444360e01b908401528151919291620000689160039162000624565b5080516200007e90600490602084019062000624565b50506005805460ff19166006908117909155546200009f91503390620000bb565b620000b5600033600654620001c960201b60201c565b620007fd565b6001600160a01b038216620001175760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064015b60405180910390fd5b620001256000838362000361565b62000141816002546200037960201b62000ba31790919060201c565b6002556001600160a01b038216600090815260208181526040909120546200017491839062000ba362000379821b17901c565b6001600160a01b038316600081815260208181526040808320949094559251848152919290917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a35050565b816001600160a01b0316836001600160a01b031614158015620001ec5750600081115b156200035c576001600160a01b03831615620002a7576001600160a01b03831660009081526009602052604081205463ffffffff1690816200023057600062000275565b6001600160a01b0385166000908152600860205260408120906200025660018562000782565b63ffffffff1663ffffffff168152602001908152602001600020600101545b90506000620002938483620003e360201b62000c021790919060201c565b9050620002a38684848462000443565b5050505b6001600160a01b038216156200035c576001600160a01b03821660009081526009602052604081205463ffffffff169081620002e55760006200032a565b6001600160a01b0384166000908152600860205260408120906200030b60018562000782565b63ffffffff1663ffffffff168152602001908152602001600020600101545b905060006200034884836200037960201b62000ba31790919060201c565b9050620003588584848462000443565b5050505b505050565b6200035c8383836200035c60201b62000c5e1760201c565b60008062000388838562000722565b905083811015620003dc5760405162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f77000000000060448201526064016200010e565b9392505050565b600082821115620004375760405162461bcd60e51b815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f77000060448201526064016200010e565b620003dc828462000768565b60006200046a436040518060600160405280602e81526020016200210f602e9139620005f1565b905060008463ffffffff16118015620004c757506001600160a01b038516600090815260086020526040812063ffffffff831691620004ab60018862000782565b63ffffffff908116825260208201929092526040016000205416145b1562000514576001600160a01b03851660009081526008602052604081208391620004f460018862000782565b63ffffffff168152602081019190915260400160002060010155620005a6565b60408051808201825263ffffffff838116825260208083018681526001600160a01b038a166000908152600883528581208a851682529092529390209151825463ffffffff191691161781559051600191820155620005759085906200073d565b6001600160a01b0386166000908152600960205260409020805463ffffffff191663ffffffff929092169190911790555b60408051848152602081018490526001600160a01b038716917fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a724910160405180910390a25050505050565b60008164010000000084106200061c5760405162461bcd60e51b81526004016200010e9190620006ca565b509192915050565b8280546200063290620007aa565b90600052602060002090601f016020900481019282620006565760008555620006a1565b82601f106200067157805160ff1916838001178555620006a1565b82800160010185558215620006a1579182015b82811115620006a157825182559160200191906001019062000684565b50620006af929150620006b3565b5090565b5b80821115620006af5760008155600101620006b4565b600060208083528351808285015260005b81811015620006f957858101830151858201604001528201620006db565b818111156200070c576000604083870101525b50601f01601f1916929092016040019392505050565b60008219821115620007385762000738620007e7565b500190565b600063ffffffff8083168185168083038211156200075f576200075f620007e7565b01949350505050565b6000828210156200077d576200077d620007e7565b500390565b600063ffffffff83811690831681811015620007a257620007a2620007e7565b039392505050565b600181811c90821680620007bf57607f821691505b60208210811415620007e157634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b611902806200080d6000396000f3fe608060405234801561001057600080fd5b506004361061014d5760003560e01c80636fcfff45116100c3578063a9059cbb1161007c578063a9059cbb14610338578063b4b5ea571461034b578063c3cda5201461035e578063dd62ed3e14610371578063e7a324dc146103aa578063f1127ed8146103d157600080fd5b80636fcfff451461028657806370a08231146102c1578063782d6fe1146102ea5780637ecebe00146102fd57806395d89b411461031d578063a457c2d71461032557600080fd5b8063313ce56711610115578063313ce567146101df57806339509351146101f457806340c10f191461020757806342966c681461021c578063587cde1e1461022f5780635c19a95c1461027357600080fd5b806306fdde0314610152578063095ea7b31461017057806318160ddd1461019357806320606b70146101a557806323b872dd146101cc575b600080fd5b61015a610428565b604051610167919061169b565b60405180910390f35b61018361017e3660046115b8565b6104ba565b6040519015158152602001610167565b6002545b604051908152602001610167565b6101977f8cad95687ba82c2ce50e74f7b754645e5117c3a5bec8151c0726d5857980a86681565b6101836101da36600461157c565b6104d1565b60055460405160ff9091168152602001610167565b6101836102023660046115b8565b61053a565b61021a6102153660046115b8565b610570565b005b61021a61022a366004611682565b6105a3565b61025b61023d36600461152e565b6001600160a01b039081166000908152600760205260409020541690565b6040516001600160a01b039091168152602001610167565b61021a61028136600461152e565b6105b0565b6102ac61029436600461152e565b60096020526000908152604090205463ffffffff1681565b60405163ffffffff9091168152602001610167565b6101976102cf36600461152e565b6001600160a01b031660009081526020819052604090205490565b6101976102f83660046115b8565b6105ba565b61019761030b36600461152e565b600a6020526000908152604090205481565b61015a61081e565b6101836103333660046115b8565b61082d565b6101836103463660046115b8565b61087c565b61019761035936600461152e565b610889565b61021a61036c3660046115e2565b6108fe565b61019761037f366004611549565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6101977fe48329057bfd03d55e49b547132e39cffd9c1820ad7b9d4c5307691425d15adf81565b61040c6103df366004611642565b60086020908152600092835260408084209091529082529020805460019091015463ffffffff9091169082565b6040805163ffffffff9093168352602083019190915201610167565b6060600380546104379061179d565b80601f01602080910402602001604051908101604052809291908181526020018280546104639061179d565b80156104b05780601f10610485576101008083540402835291602001916104b0565b820191906000526020600020905b81548152906001019060200180831161049357829003601f168201915b5050505050905090565b60006104c7338484610c63565b5060015b92915050565b60006104de848484610d88565b610530843361052b85604051806060016040528060288152602001611852602891396001600160a01b038a1660009081526001602090815260408083203384529091529020549190610dc5565b610c63565b5060019392505050565b3360008181526001602090815260408083206001600160a01b038716845290915281205490916104c791859061052b9086610ba3565b61057a8282610dfc565b6001600160a01b0380831660009081526007602052604081205461059f921683610edb565b5050565b6105ad338261103a565b50565b6105ad338261113e565b600043821061061a5760405162461bcd60e51b815260206004820152602160248201527f6765745072696f72566f7465733a206e6f74207965742064657465726d696e656044820152601960fa1b60648201526084015b60405180910390fd5b6001600160a01b03831660009081526009602052604090205463ffffffff16806106485760009150506104cb565b6001600160a01b0384166000908152600860205260408120849161066d600185611778565b63ffffffff908116825260208201929092526040016000205416116106d6576001600160a01b0384166000908152600860205260408120906106b0600184611778565b63ffffffff1663ffffffff168152602001908152602001600020600101549150506104cb565b6001600160a01b038416600090815260086020908152604080832083805290915290205463ffffffff168310156107115760009150506104cb565b60008061071f600184611778565b90505b8163ffffffff168163ffffffff1611156107e757600060026107448484611778565b61074e9190611730565b6107589083611778565b6001600160a01b038816600090815260086020908152604080832063ffffffff80861685529083529281902081518083019092528054909316808252600190930154918101919091529192508714156107bb576020015194506104cb9350505050565b805163ffffffff168711156107d2578193506107e0565b6107dd600183611778565b92505b5050610722565b506001600160a01b038516600090815260086020908152604080832063ffffffff9094168352929052206001015491505092915050565b6060600480546104379061179d565b60006104c7338461052b856040518060600160405280602581526020016118a8602591393360009081526001602090815260408083206001600160a01b038d1684529091529020549190610dc5565b60006104c7338484610d88565b6001600160a01b03811660009081526009602052604081205463ffffffff16806108b45760006108f7565b6001600160a01b0383166000908152600860205260408120906108d8600184611778565b63ffffffff1663ffffffff168152602001908152602001600020600101545b9392505050565b60007f8cad95687ba82c2ce50e74f7b754645e5117c3a5bec8151c0726d5857980a866610929610428565b805190602001206109374690565b60408051602080820195909552808201939093526060830191909152306080808401919091528151808403909101815260a0830182528051908401207fe48329057bfd03d55e49b547132e39cffd9c1820ad7b9d4c5307691425d15adf60c08401526001600160a01b038b1660e084015261010083018a90526101208084018a90528251808503909101815261014084019092528151919093012061190160f01b610160830152610162820183905261018282018190529192506000906101a20160408051601f198184030181528282528051602091820120600080855291840180845281905260ff8a169284019290925260608301889052608083018790529092509060019060a0016020604051602081039080840390855afa158015610a63573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116610ac65760405162461bcd60e51b815260206004820181905260248201527f64656c656761746542795369673a20696e76616c6964207369676e61747572656044820152606401610611565b6001600160a01b0381166000908152600a60205260408120805491610aea836117d8565b919050558914610b3c5760405162461bcd60e51b815260206004820152601c60248201527f64656c656761746542795369673a20696e76616c6964206e6f6e6365000000006044820152606401610611565b87421115610b8c5760405162461bcd60e51b815260206004820181905260248201527f64656c656761746542795369673a207369676e617475726520657870697265646044820152606401610611565b610b96818b61113e565b505050505b505050505050565b600080610bb083856116f0565b9050838110156108f75760405162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f7700000000006044820152606401610611565b600082821115610c545760405162461bcd60e51b815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f7700006044820152606401610611565b6108f78284611761565b505050565b6001600160a01b038316610cc55760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610611565b6001600160a01b038216610d265760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610611565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b610d938383836111bd565b6001600160a01b03808416600090815260076020526040808220548584168352912054610c5e92918216911683610edb565b60008184841115610de95760405162461bcd60e51b8152600401610611919061169b565b50610df48385611761565b949350505050565b6001600160a01b038216610e525760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610611565b600254610e5f9082610ba3565b6002556001600160a01b038216600090815260208190526040902054610e859082610ba3565b6001600160a01b038316600081815260208181526040808320949094559251848152919290917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91015b60405180910390a35050565b816001600160a01b0316836001600160a01b031614158015610efd5750600081115b15610c5e576001600160a01b03831615610fa0576001600160a01b03831660009081526009602052604081205463ffffffff169081610f3d576000610f80565b6001600160a01b038516600090815260086020526040812090610f61600185611778565b63ffffffff1663ffffffff168152602001908152602001600020600101545b90506000610f8e8285610c02565b9050610f9c86848484611340565b5050505b6001600160a01b03821615610c5e576001600160a01b03821660009081526009602052604081205463ffffffff169081610fdb57600061101e565b6001600160a01b038416600090815260086020526040812090610fff600185611778565b63ffffffff1663ffffffff168152602001908152602001600020600101545b9050600061102c8285610ba3565b9050610b9b85848484611340565b6001600160a01b03821661109a5760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b6064820152608401610611565b6110d78160405180606001604052806022815260200161180a602291396001600160a01b0385166000908152602081905260409020549190610dc5565b6001600160a01b0383166000908152602081905260409020556002546110fd9082610c02565b6002556040518181526000906001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602001610ecf565b6001600160a01b038281166000818152600760208181526040808420805485845282862054949093528787166001600160a01b03198416811790915590519190951694919391928592917f3134e8a2e6d97e929a7e54011ea5485d7d196dd5f0ba4d4ef95803e8e3fc257f9190a46111b7828483610edb565b50505050565b6001600160a01b0383166112215760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610611565b6001600160a01b0382166112835760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610611565b6112c08160405180606001604052806026815260200161182c602691396001600160a01b0386166000908152602081905260409020549190610dc5565b6001600160a01b0380851660009081526020819052604080822093909355908416815220546112ef9082610ba3565b6001600160a01b038381166000818152602081815260409182902094909455518481529092918616917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9101610d7b565b6000611364436040518060600160405280602e815260200161187a602e91396114e2565b905060008463ffffffff161180156113be57506001600160a01b038516600090815260086020526040812063ffffffff8316916113a2600188611778565b63ffffffff908116825260208201929092526040016000205416145b15611407576001600160a01b038516600090815260086020526040812083916113e8600188611778565b63ffffffff168152602081019190915260400160002060010155611497565b60408051808201825263ffffffff838116825260208083018681526001600160a01b038a166000908152600883528581208a851682529092529390209151825463ffffffff191691161781559051600191820155611466908590611708565b6001600160a01b0386166000908152600960205260409020805463ffffffff191663ffffffff929092169190911790555b60408051848152602081018490526001600160a01b038716917fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a724910160405180910390a25050505050565b600081640100000000841061150a5760405162461bcd60e51b8152600401610611919061169b565b509192915050565b80356001600160a01b038116811461152957600080fd5b919050565b60006020828403121561154057600080fd5b6108f782611512565b6000806040838503121561155c57600080fd5b61156583611512565b915061157360208401611512565b90509250929050565b60008060006060848603121561159157600080fd5b61159a84611512565b92506115a860208501611512565b9150604084013590509250925092565b600080604083850312156115cb57600080fd5b6115d483611512565b946020939093013593505050565b60008060008060008060c087890312156115fb57600080fd5b61160487611512565b95506020870135945060408701359350606087013560ff8116811461162857600080fd5b9598949750929560808101359460a0909101359350915050565b6000806040838503121561165557600080fd5b61165e83611512565b9150602083013563ffffffff8116811461167757600080fd5b809150509250929050565b60006020828403121561169457600080fd5b5035919050565b600060208083528351808285015260005b818110156116c8578581018301518582016040015282016116ac565b818111156116da576000604083870101525b50601f01601f1916929092016040019392505050565b60008219821115611703576117036117f3565b500190565b600063ffffffff808316818516808303821115611727576117276117f3565b01949350505050565b600063ffffffff8084168061175557634e487b7160e01b600052601260045260246000fd5b92169190910492915050565b600082821015611773576117736117f3565b500390565b600063ffffffff83811690831681811015611795576117956117f3565b039392505050565b600181811c908216806117b157607f821691505b602082108114156117d257634e487b7160e01b600052602260045260246000fd5b50919050565b60006000198214156117ec576117ec6117f3565b5060010190565b634e487b7160e01b600052601160045260246000fdfe45524332303a206275726e20616d6f756e7420657863656564732062616c616e636545524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636545524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e63655f7772697465436865636b706f696e743a20626c6f636b206e756d6265722065786365656473203332206269747345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa26469706673582212206c0d8f2bc54f3ef86af9b802db6dc528a2884195129d0e755a1a4b37c70cafe764736f6c634300080700335f7772697465436865636b706f696e743a20626c6f636b206e756d62657220657863656564732033322062697473";
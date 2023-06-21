/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { Mora } from "../Mora";

export class Mora__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<Mora> {
    return super.deploy(overrides || {}) as Promise<Mora>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Mora {
    return super.attach(address) as Mora;
  }
  connect(signer: Signer): Mora__factory {
    return super.connect(signer) as Mora__factory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Mora {
    return new Contract(address, _abi, signerOrProvider) as Mora;
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
    inputs: [],
    name: "maxSupply",
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
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
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
];

const _bytecode =
  "0x60806040526b033b2e3c9fd0803ce80000006006556b019d971e4fe8401e740000006007553480156200003157600080fd5b50604051806040016040528060048152602001634d6f726160e01b815250604051806040016040528060048152602001634d4f524160e01b81525081600390805190602001906200008492919062000732565b5080516200009a90600490602084019062000732565b50506005805460ff19166012179055506000620000b66200013c565b60058054610100600160a81b0319166101006001600160a01b03841690810291909117909155604051919250906000907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a35062000120336007546200014060201b60201c565b620001366000336007546200024f60201b60201c565b620007ce565b3390565b6001600160a01b0382166200019c576040805162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b620001aa60008383620003c1565b620001c6816002546200046260201b6200115f1790919060201c565b6002556001600160a01b03821660009081526020818152604090912054620001f99183906200115f62000462821b17901c565b6001600160a01b0383166000818152602081815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b816001600160a01b0316836001600160a01b031614158015620002725750600081115b15620003bc576001600160a01b038316156200031a576001600160a01b0383166000908152600a602052604081205463ffffffff169081620002b6576000620002e8565b6001600160a01b038516600090815260096020908152604080832063ffffffff60001987011684529091529020600101545b90506000620003068483620004c460201b620011b91790919060201c565b9050620003168684848462000522565b5050505b6001600160a01b03821615620003bc576001600160a01b0382166000908152600a602052604081205463ffffffff169081620003585760006200038a565b6001600160a01b038416600090815260096020908152604080832063ffffffff60001987011684529091529020600101545b90506000620003a884836200046260201b6200115f1790919060201c565b9050620003b88584848462000522565b5050505b505050565b620003d9838383620003bc60201b620012161760201c565b6001600160a01b038316620003bc576006546200040e82620003fa6200068d565b6200046260201b6200115f1790919060201c565b1115620003bc576040805162461bcd60e51b815260206004820181905260248201527f45524332304361707065643a204d617820737570706c79206578636565646564604482015290519081900360640190fd5b600082820183811015620004bd576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b6000828211156200051c576040805162461bcd60e51b815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b50900390565b600062000549436040518060600160405280602e815260200162002524602e913962000693565b905060008463ffffffff161180156200059357506001600160a01b038516600090815260096020908152604080832063ffffffff6000198901811685529252909120548282169116145b15620005d2576001600160a01b038516600090815260096020908152604080832063ffffffff6000198901168452909152902060010182905562000643565b60408051808201825263ffffffff808416825260208083018681526001600160a01b038a166000818152600984528681208b8616825284528681209551865490861663ffffffff199182161787559251600196870155908152600a9092529390208054928801909116919092161790555b604080518481526020810184905281516001600160a01b038816927fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a724928290030190a25050505050565b60025490565b60008164010000000084106200072a5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015620006ee578181015183820152602001620006d4565b50505050905090810190601f1680156200071c5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b509192915050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200077557805160ff1916838001178555620007a5565b82800160010185558215620007a5579182015b82811115620007a557825182559160200191906001019062000788565b50620007b3929150620007b7565b5090565b5b80821115620007b35760008155600101620007b8565b611d4680620007de6000396000f3fe608060405234801561001057600080fd5b50600436106101a95760003560e01c8063715018a6116100f9578063b4b5ea5711610097578063dd62ed3e11610071578063dd62ed3e1461055c578063e7a324dc1461058a578063f1127ed814610592578063f2fde38b146105e4576101a9565b8063b4b5ea57146104e7578063c3cda5201461050d578063d5abeb0114610554576101a9565b80638da5cb5b116100d35780638da5cb5b1461047f57806395d89b4114610487578063a457c2d71461048f578063a9059cbb146104bb576101a9565b8063715018a614610425578063782d6fe11461042d5780637ecebe0014610459576101a9565b80633950935111610166578063587cde1e11610140578063587cde1e146103585780635c19a95c1461039a5780636fcfff45146103c057806370a08231146103ff576101a9565b806339509351146102e157806340c10f191461030d57806342966c681461033b576101a9565b806306fdde03146101ae578063095ea7b31461022b57806318160ddd1461026b57806320606b701461028557806323b872dd1461028d578063313ce567146102c3575b600080fd5b6101b661060a565b6040805160208082528351818301528351919283929083019185019080838360005b838110156101f05781810151838201526020016101d8565b50505050905090810190601f16801561021d5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102576004803603604081101561024157600080fd5b506001600160a01b0381351690602001356106a0565b604080519115158252519081900360200190f35b6102736106be565b60408051918252519081900360200190f35b6102736106c4565b610257600480360360608110156102a357600080fd5b506001600160a01b038135811691602081013590911690604001356106e8565b6102cb61076f565b6040805160ff9092168252519081900360200190f35b610257600480360360408110156102f757600080fd5b506001600160a01b038135169060200135610778565b6103396004803603604081101561032357600080fd5b506001600160a01b0381351690602001356107c6565b005b6103396004803603602081101561035157600080fd5b503561086d565b61037e6004803603602081101561036e57600080fd5b50356001600160a01b031661087a565b604080516001600160a01b039092168252519081900360200190f35b610339600480360360208110156103b057600080fd5b50356001600160a01b0316610898565b6103e6600480360360208110156103d657600080fd5b50356001600160a01b03166108a2565b6040805163ffffffff9092168252519081900360200190f35b6102736004803603602081101561041557600080fd5b50356001600160a01b03166108ba565b6103396108d5565b6102736004803603604081101561044357600080fd5b506001600160a01b038135169060200135610999565b6102736004803603602081101561046f57600080fd5b50356001600160a01b0316610ba1565b61037e610bb3565b6101b6610bc7565b610257600480360360408110156104a557600080fd5b506001600160a01b038135169060200135610c28565b610257600480360360408110156104d157600080fd5b506001600160a01b038135169060200135610c90565b610273600480360360208110156104fd57600080fd5b50356001600160a01b0316610ca4565b610339600480360360c081101561052357600080fd5b506001600160a01b038135169060208101359060408101359060ff6060820135169060808101359060a00135610d08565b610273610fbd565b6102736004803603604081101561057257600080fd5b506001600160a01b0381358116916020013516610fc3565b610273610fee565b6105c4600480360360408110156105a857600080fd5b5080356001600160a01b0316906020013563ffffffff16611012565b6040805163ffffffff909316835260208301919091528051918290030190f35b610339600480360360208110156105fa57600080fd5b50356001600160a01b031661103f565b60038054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156106965780601f1061066b57610100808354040283529160200191610696565b820191906000526020600020905b81548152906001019060200180831161067957829003601f168201915b5050505050905090565b60006106b46106ad61121b565b848461121f565b5060015b92915050565b60025490565b7f797cfab58fcb15f590eb8e4252d5c228ff88f94f907e119e80c4393a946e8f3581565b60006106f584848461130b565b6107658461070161121b565b61076085604051806060016040528060288152602001611c2c602891396001600160a01b038a1660009081526001602052604081209061073f61121b565b6001600160a01b031681526020810191909152604001600020549190611348565b61121f565b5060019392505050565b60055460ff1690565b60006106b461078561121b565b84610760856001600061079661121b565b6001600160a01b03908116825260208083019390935260409182016000908120918c16815292529020549061115f565b6107ce61121b565b6001600160a01b03166107df610bb3565b6001600160a01b03161461083a576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b61084482826113df565b6001600160a01b038083166000908152600860205260408120546108699216836114cf565b5050565b610877338261160c565b50565b6001600160a01b039081166000908152600860205260409020541690565b6108773382611708565b600a6020526000908152604090205463ffffffff1681565b6001600160a01b031660009081526020819052604090205490565b6108dd61121b565b6001600160a01b03166108ee610bb3565b6001600160a01b031614610949576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b60055460405160009161010090046001600160a01b0316907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a360058054610100600160a81b0319169055565b60004382106109d95760405162461bcd60e51b8152600401808060200182810382526021815260200180611b586021913960400191505060405180910390fd5b6001600160a01b0383166000908152600a602052604090205463ffffffff1680610a075760009150506106b8565b6001600160a01b038416600090815260096020908152604080832063ffffffff600019860181168552925290912054168310610a76576001600160a01b03841660009081526009602090815260408083206000199490940163ffffffff168352929052206001015490506106b8565b6001600160a01b038416600090815260096020908152604080832083805290915290205463ffffffff16831015610ab15760009150506106b8565b600060001982015b8163ffffffff168163ffffffff161115610b6a57600282820363ffffffff16048103610ae3611b40565b506001600160a01b038716600090815260096020908152604080832063ffffffff808616855290835292819020815180830190925280549093168082526001909301549181019190915290871415610b45576020015194506106b89350505050565b805163ffffffff16871115610b5c57819350610b63565b6001820392505b5050610ab9565b506001600160a01b038516600090815260096020908152604080832063ffffffff9094168352929052206001015491505092915050565b600b6020526000908152604090205481565b60055461010090046001600160a01b031690565b60048054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156106965780601f1061066b57610100808354040283529160200191610696565b60006106b4610c3561121b565b8461076085604051806060016040528060258152602001611cec6025913960016000610c5f61121b565b6001600160a01b03908116825260208083019390935260409182016000908120918d16815292529020549190611348565b60006106b4610c9d61121b565b848461130b565b6001600160a01b0381166000908152600a602052604081205463ffffffff1680610ccf576000610d01565b6001600160a01b038316600090815260096020908152604080832063ffffffff60001986011684529091529020600101545b9392505050565b60007f797cfab58fcb15f590eb8e4252d5c228ff88f94f907e119e80c4393a946e8f35610d3361060a565b80519060200120610d4261179d565b60408051602080820195909552808201939093526060830191909152306080808401919091528151808403909101815260a0830182528051908401207f1ac861a6a8532f3704e1768564a53a32774f00d6cf20ccbbdf60ab61378302bc60c08401526001600160a01b038b1660e084015261010083018a90526101208084018a9052825180850390910181526101408401835280519085012061190160f01b6101608501526101628401829052610182808501829052835180860390910181526101a285018085528151918701919091206000918290526101c2860180865281905260ff8b166101e287015261020286018a90526102228601899052935192965090949293909260019261024280840193601f198301929081900390910190855afa158015610e75573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116610edd576040805162461bcd60e51b815260206004820181905260248201527f64656c656761746542795369673a20696e76616c6964207369676e6174757265604482015290519081900360640190fd5b6001600160a01b0381166000908152600b602052604090208054600181019091558914610f51576040805162461bcd60e51b815260206004820152601c60248201527f64656c656761746542795369673a20696e76616c6964206e6f6e636500000000604482015290519081900360640190fd5b87421115610fa6576040805162461bcd60e51b815260206004820181905260248201527f64656c656761746542795369673a207369676e61747572652065787069726564604482015290519081900360640190fd5b610fb0818b611708565b505050505b505050505050565b60065490565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b7f1ac861a6a8532f3704e1768564a53a32774f00d6cf20ccbbdf60ab61378302bc81565b60096020908152600092835260408084209091529082529020805460019091015463ffffffff9091169082565b61104761121b565b6001600160a01b0316611058610bb3565b6001600160a01b0316146110b3576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b6001600160a01b0381166110f85760405162461bcd60e51b8152600401808060200182810382526026815260200180611bbe6026913960400191505060405180910390fd5b6005546040516001600160a01b0380841692610100900416907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3600580546001600160a01b0390921661010002610100600160a81b0319909216919091179055565b600082820183811015610d01576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b600082821115611210576040805162461bcd60e51b815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b50900390565b505050565b3390565b6001600160a01b0383166112645760405162461bcd60e51b8152600401808060200182810382526024815260200180611cc86024913960400191505060405180910390fd5b6001600160a01b0382166112a95760405162461bcd60e51b8152600401808060200182810382526022815260200180611be46022913960400191505060405180910390fd5b6001600160a01b03808416600081815260016020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6113168383836117a1565b6001600160a01b03808416600090815260086020526040808220548584168352912054611216929182169116836114cf565b600081848411156113d75760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561139c578181015183820152602001611384565b50505050905090810190601f1680156113c95780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b6001600160a01b03821661143a576040805162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b611446600083836118fc565b600254611453908261115f565b6002556001600160a01b038216600090815260208190526040902054611479908261115f565b6001600160a01b0383166000818152602081815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b816001600160a01b0316836001600160a01b0316141580156114f15750600081115b15611216576001600160a01b03831615611583576001600160a01b0383166000908152600a602052604081205463ffffffff169081611531576000611563565b6001600160a01b038516600090815260096020908152604080832063ffffffff60001987011684529091529020600101545b9050600061157182856111b9565b905061157f8684848461197d565b5050505b6001600160a01b03821615611216576001600160a01b0382166000908152600a602052604081205463ffffffff1690816115be5760006115f0565b6001600160a01b038416600090815260096020908152604080832063ffffffff60001987011684529091529020600101545b905060006115fe828561115f565b9050610fb58584848461197d565b6001600160a01b0382166116515760405162461bcd60e51b8152600401808060200182810382526021815260200180611c826021913960400191505060405180910390fd5b61165d826000836118fc565b61169a81604051806060016040528060228152602001611b9c602291396001600160a01b0385166000908152602081905260409020549190611348565b6001600160a01b0383166000908152602081905260409020556002546116c090826111b9565b6002556040805182815290516000916001600160a01b038516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a35050565b6001600160a01b038083166000908152600860205260408120549091169061172f846108ba565b6001600160a01b0385811660008181526008602052604080822080546001600160a01b031916898616908117909155905194955093928616927f3134e8a2e6d97e929a7e54011ea5485d7d196dd5f0ba4d4ef95803e8e3fc257f9190a46117978284836114cf565b50505050565b4690565b6001600160a01b0383166117e65760405162461bcd60e51b8152600401808060200182810382526025815260200180611ca36025913960400191505060405180910390fd5b6001600160a01b03821661182b5760405162461bcd60e51b8152600401808060200182810382526023815260200180611b796023913960400191505060405180910390fd5b6118368383836118fc565b61187381604051806060016040528060268152602001611c06602691396001600160a01b0386166000908152602081905260409020549190611348565b6001600160a01b0380851660009081526020819052604080822093909355908416815220546118a2908261115f565b6001600160a01b038084166000818152602081815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b611907838383611216565b6001600160a01b0383166112165760065461192a826119246106be565b9061115f565b1115611216576040805162461bcd60e51b815260206004820181905260248201527f45524332304361707065643a204d617820737570706c79206578636565646564604482015290519081900360640190fd5b60006119a1436040518060600160405280602e8152602001611c54602e9139611ae2565b905060008463ffffffff161180156119ea57506001600160a01b038516600090815260096020908152604080832063ffffffff6000198901811685529252909120548282169116145b15611a27576001600160a01b038516600090815260096020908152604080832063ffffffff60001989011684529091529020600101829055611a98565b60408051808201825263ffffffff808416825260208083018681526001600160a01b038a166000818152600984528681208b8616825284528681209551865490861663ffffffff199182161787559251600196870155908152600a9092529390208054928801909116919092161790555b604080518481526020810184905281516001600160a01b038816927fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a724928290030190a25050505050565b6000816401000000008410611b385760405162461bcd60e51b815260206004820181815283516024840152835190928392604490910191908501908083836000831561139c578181015183820152602001611384565b509192915050565b60408051808201909152600080825260208201529056fe6765745072696f72566f7465733a206e6f74207965742064657465726d696e656445524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a206275726e20616d6f756e7420657863656564732062616c616e63654f776e61626c653a206e6577206f776e657220697320746865207a65726f206164647265737345524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636545524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e63655f7772697465436865636b706f696e743a20626c6f636b206e756d6265722065786365656473203332206269747345524332303a206275726e2066726f6d20746865207a65726f206164647265737345524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa2646970667358221220327f2c84ea2f62b8f491ec6bc7fcea621efb1810ef0db1e32bc364c7bf5f0d5264736f6c634300060c00335f7772697465436865636b706f696e743a20626c6f636b206e756d62657220657863656564732033322062697473";
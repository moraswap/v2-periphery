/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { Multicall } from "../Multicall";

export class Multicall__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<Multicall> {
    return super.deploy(overrides || {}) as Promise<Multicall>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Multicall {
    return super.attach(address) as Multicall;
  }
  connect(signer: Signer): Multicall__factory {
    return super.connect(signer) as Multicall__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Multicall {
    return new Contract(address, _abi, signerOrProvider) as Multicall;
  }
}

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "target",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
        ],
        internalType: "struct Multicall.Call[]",
        name: "calls",
        type: "tuple[]",
      },
    ],
    name: "aggregate",
    outputs: [
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
      {
        internalType: "bytes[]",
        name: "returnData",
        type: "bytes[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
    ],
    name: "getBlockHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "blockHash",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCurrentBlockCoinbase",
    outputs: [
      {
        internalType: "address",
        name: "coinbase",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCurrentBlockDifficulty",
    outputs: [
      {
        internalType: "uint256",
        name: "difficulty",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCurrentBlockGasLimit",
    outputs: [
      {
        internalType: "uint256",
        name: "gaslimit",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCurrentBlockTimestamp",
    outputs: [
      {
        internalType: "uint256",
        name: "timestamp",
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
        name: "addr",
        type: "address",
      },
    ],
    name: "getEthBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getLastBlockHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "blockHash",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506105ee806100206000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c806372425d9d1161005b57806372425d9d146100e657806386d516e8146100ec578063a8b0574e146100f2578063ee82ac5e1461010057600080fd5b80630f28c97d1461008d578063252dba42146100a257806327e86d6e146100c35780634d2301cc146100cb575b600080fd5b425b6040519081526020015b60405180910390f35b6100b56100b03660046102a3565b610112565b604051610099929190610438565b61008f610252565b61008f6100d9366004610281565b6001600160a01b03163190565b4461008f565b4561008f565b604051418152602001610099565b61008f61010e366004610403565b4090565b8051439060609067ffffffffffffffff811115610131576101316105a2565b60405190808252806020026020018201604052801561016457816020015b606081526020019060019003908161014f5790505b50905060005b835181101561024c576000808583815181106101885761018861058c565b6020026020010151600001516001600160a01b03168684815181106101af576101af61058c565b6020026020010151602001516040516101c8919061041c565b6000604051808303816000865af19150503d8060008114610205576040519150601f19603f3d011682016040523d82523d6000602084013e61020a565b606091505b50915091508161021957600080fd5b8084848151811061022c5761022c61058c565b6020026020010181905250505080806102449061055b565b91505061016a565b50915091565b600061025f600143610514565b40905090565b80356001600160a01b038116811461027c57600080fd5b919050565b60006020828403121561029357600080fd5b61029c82610265565b9392505050565b600060208083850312156102b657600080fd5b823567ffffffffffffffff808211156102ce57600080fd5b818501915085601f8301126102e257600080fd5b8135818111156102f4576102f46105a2565b8060051b6103038582016104e3565b8281528581019085870183870188018b101561031e57600080fd5b600093505b848410156103f55780358681111561033a57600080fd5b8701601f196040828e038201121561035157600080fd5b6103596104ba565b6103648b8401610265565b815260408301358981111561037857600080fd5b8084019350508d603f84011261038d57600080fd5b8a830135898111156103a1576103a16105a2565b6103b18c84601f840116016104e3565b92508083528e60408286010111156103c857600080fd5b80604085018d85013760009083018c0152808b019190915284525060019390930192918701918701610323565b509998505050505050505050565b60006020828403121561041557600080fd5b5035919050565b6000825161042e81846020870161052b565b9190910192915050565b600060408201848352602060408185015281855180845260608601915060608160051b870101935082870160005b828110156104ac57878603605f190184528151805180885261048d81888a0189850161052b565b601f01601f191696909601850195509284019290840190600101610466565b509398975050505050505050565b6040805190810167ffffffffffffffff811182821017156104dd576104dd6105a2565b60405290565b604051601f8201601f1916810167ffffffffffffffff8111828210171561050c5761050c6105a2565b604052919050565b60008282101561052657610526610576565b500390565b60005b8381101561054657818101518382015260200161052e565b83811115610555576000848401525b50505050565b600060001982141561056f5761056f610576565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fdfea26469706673582212203585a5dce59ba1fa8c13ab7fdc6c7c2879676e71ed95129e543e2e8c0a7a14de64736f6c63430008070033";

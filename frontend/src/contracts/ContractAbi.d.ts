/* Autogenerated file. Do not edit manually. */

/* tslint:disable */
/* eslint-disable */

/*
  Fuels version: 0.35.0
  Forc version: 0.35.3
  Fuel-Core version: 0.17.3
*/

import type {
  BigNumberish,
  BN,
  BytesLike,
  Contract,
  DecodedValue,
  FunctionFragment,
  Interface,
  InvokeFunction,
} from 'fuels';

interface ContractAbiInterface extends Interface {
  functions: {
    count: FunctionFragment;
    count_length: FunctionFragment;
    decrement: FunctionFragment;
    get_from_storage_map: FunctionFragment;
    increment: FunctionFragment;
    insert_into_storage_map: FunctionFragment;
  };

  encodeFunctionData(functionFragment: 'count', values: []): Uint8Array;
  encodeFunctionData(functionFragment: 'count_length', values: []): Uint8Array;
  encodeFunctionData(functionFragment: 'decrement', values: []): Uint8Array;
  encodeFunctionData(functionFragment: 'get_from_storage_map', values: [BigNumberish]): Uint8Array;
  encodeFunctionData(functionFragment: 'increment', values: []): Uint8Array;
  encodeFunctionData(functionFragment: 'insert_into_storage_map', values: []): Uint8Array;

  decodeFunctionData(functionFragment: 'count', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'count_length', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'decrement', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'get_from_storage_map', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'increment', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'insert_into_storage_map', data: BytesLike): DecodedValue;
}

export class ContractAbi extends Contract {
  interface: ContractAbiInterface;
  functions: {
    count: InvokeFunction<[], BN>;
    count_length: InvokeFunction<[], BN>;
    decrement: InvokeFunction<[], void>;
    get_from_storage_map: InvokeFunction<[index: BigNumberish], BN>;
    increment: InvokeFunction<[], void>;
    insert_into_storage_map: InvokeFunction<[], void>;
  };
}

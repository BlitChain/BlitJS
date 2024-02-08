//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Task, TaskAmino, TaskSDKType } from "./task";
import { FutureTask, FutureTaskAmino, FutureTaskSDKType } from "./future_task";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
export const protobufPackage = "blit.blit";
/** GenesisState defines the blit module's genesis state. */
export interface GenesisState {
  /** params defines all the parameters of the module. */
  params: Params;
  task_list: Task[];
  future_task_list: FutureTask[];
  starting_task_id: bigint;
}
export interface GenesisStateProtoMsg {
  type_url: "/blit.blit.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the blit module's genesis state. */
export interface GenesisStateAmino {
  /** params defines all the parameters of the module. */
  params?: ParamsAmino;
  task_list: TaskAmino[];
  future_task_list: FutureTaskAmino[];
  starting_task_id: string;
}
export interface GenesisStateAminoMsg {
  type: "/blit.blit.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the blit module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  task_list: TaskSDKType[];
  future_task_list: FutureTaskSDKType[];
  starting_task_id: bigint;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    task_list: [],
    future_task_list: [],
    starting_task_id: BigInt(0)
  };
}
export const GenesisState = {
  typeUrl: "/blit.blit.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.task_list) {
      Task.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.future_task_list) {
      FutureTask.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.starting_task_id !== BigInt(0)) {
      writer.uint32(40).uint64(message.starting_task_id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.task_list.push(Task.decode(reader, reader.uint32()));
          break;
        case 4:
          message.future_task_list.push(FutureTask.decode(reader, reader.uint32()));
          break;
        case 5:
          message.starting_task_id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      task_list: Array.isArray(object?.task_list) ? object.task_list.map((e: any) => Task.fromJSON(e)) : [],
      future_task_list: Array.isArray(object?.future_task_list) ? object.future_task_list.map((e: any) => FutureTask.fromJSON(e)) : [],
      starting_task_id: isSet(object.starting_task_id) ? BigInt(object.starting_task_id.toString()) : BigInt(0)
    };
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.task_list) {
      obj.task_list = message.task_list.map(e => e ? Task.toJSON(e) : undefined);
    } else {
      obj.task_list = [];
    }
    if (message.future_task_list) {
      obj.future_task_list = message.future_task_list.map(e => e ? FutureTask.toJSON(e) : undefined);
    } else {
      obj.future_task_list = [];
    }
    message.starting_task_id !== undefined && (obj.starting_task_id = (message.starting_task_id || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.task_list = object.task_list?.map(e => Task.fromPartial(e)) || [];
    message.future_task_list = object.future_task_list?.map(e => FutureTask.fromPartial(e)) || [];
    message.starting_task_id = object.starting_task_id !== undefined && object.starting_task_id !== null ? BigInt(object.starting_task_id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined,
      task_list: Array.isArray(object?.task_list) ? object.task_list.map((e: any) => Task.fromAmino(e)) : [],
      future_task_list: Array.isArray(object?.future_task_list) ? object.future_task_list.map((e: any) => FutureTask.fromAmino(e)) : [],
      starting_task_id: BigInt(object.starting_task_id)
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.task_list) {
      obj.task_list = message.task_list.map(e => e ? Task.toAmino(e) : undefined);
    } else {
      obj.task_list = [];
    }
    if (message.future_task_list) {
      obj.future_task_list = message.future_task_list.map(e => e ? FutureTask.toAmino(e) : undefined);
    } else {
      obj.future_task_list = [];
    }
    obj.starting_task_id = message.starting_task_id ? message.starting_task_id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/blit.blit.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
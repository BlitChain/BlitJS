//@ts-nocheck
import { RequestFinalizeBlock, RequestFinalizeBlockAmino, RequestFinalizeBlockSDKType, ResponseFinalizeBlock, ResponseFinalizeBlockAmino, ResponseFinalizeBlockSDKType, ResponseCommit, ResponseCommitAmino, ResponseCommitSDKType } from "../../../../tendermint/abci/types";
import { StoreKVPair, StoreKVPairAmino, StoreKVPairSDKType } from "../../v1beta1/listening";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet } from "../../../../helpers";
export const protobufPackage = "cosmos.store.streaming.abci";
/** ListenEndBlockRequest is the request type for the ListenEndBlock RPC method */
export interface ListenFinalizeBlockRequest {
  req?: RequestFinalizeBlock;
  res?: ResponseFinalizeBlock;
}
export interface ListenFinalizeBlockRequestProtoMsg {
  type_url: "/cosmos.store.streaming.abci.ListenFinalizeBlockRequest";
  value: Uint8Array;
}
/** ListenEndBlockRequest is the request type for the ListenEndBlock RPC method */
export interface ListenFinalizeBlockRequestAmino {
  req?: RequestFinalizeBlockAmino;
  res?: ResponseFinalizeBlockAmino;
}
export interface ListenFinalizeBlockRequestAminoMsg {
  type: "cosmos-sdk/ListenFinalizeBlockRequest";
  value: ListenFinalizeBlockRequestAmino;
}
/** ListenEndBlockRequest is the request type for the ListenEndBlock RPC method */
export interface ListenFinalizeBlockRequestSDKType {
  req?: RequestFinalizeBlockSDKType;
  res?: ResponseFinalizeBlockSDKType;
}
/** ListenEndBlockResponse is the response type for the ListenEndBlock RPC method */
export interface ListenFinalizeBlockResponse {}
export interface ListenFinalizeBlockResponseProtoMsg {
  type_url: "/cosmos.store.streaming.abci.ListenFinalizeBlockResponse";
  value: Uint8Array;
}
/** ListenEndBlockResponse is the response type for the ListenEndBlock RPC method */
export interface ListenFinalizeBlockResponseAmino {}
export interface ListenFinalizeBlockResponseAminoMsg {
  type: "cosmos-sdk/ListenFinalizeBlockResponse";
  value: ListenFinalizeBlockResponseAmino;
}
/** ListenEndBlockResponse is the response type for the ListenEndBlock RPC method */
export interface ListenFinalizeBlockResponseSDKType {}
/** ListenCommitRequest is the request type for the ListenCommit RPC method */
export interface ListenCommitRequest {
  /** explicitly pass in block height as ResponseCommit does not contain this info */
  block_height: bigint;
  res?: ResponseCommit;
  change_set: StoreKVPair[];
}
export interface ListenCommitRequestProtoMsg {
  type_url: "/cosmos.store.streaming.abci.ListenCommitRequest";
  value: Uint8Array;
}
/** ListenCommitRequest is the request type for the ListenCommit RPC method */
export interface ListenCommitRequestAmino {
  /** explicitly pass in block height as ResponseCommit does not contain this info */
  block_height: string;
  res?: ResponseCommitAmino;
  change_set: StoreKVPairAmino[];
}
export interface ListenCommitRequestAminoMsg {
  type: "cosmos-sdk/ListenCommitRequest";
  value: ListenCommitRequestAmino;
}
/** ListenCommitRequest is the request type for the ListenCommit RPC method */
export interface ListenCommitRequestSDKType {
  block_height: bigint;
  res?: ResponseCommitSDKType;
  change_set: StoreKVPairSDKType[];
}
/** ListenCommitResponse is the response type for the ListenCommit RPC method */
export interface ListenCommitResponse {}
export interface ListenCommitResponseProtoMsg {
  type_url: "/cosmos.store.streaming.abci.ListenCommitResponse";
  value: Uint8Array;
}
/** ListenCommitResponse is the response type for the ListenCommit RPC method */
export interface ListenCommitResponseAmino {}
export interface ListenCommitResponseAminoMsg {
  type: "cosmos-sdk/ListenCommitResponse";
  value: ListenCommitResponseAmino;
}
/** ListenCommitResponse is the response type for the ListenCommit RPC method */
export interface ListenCommitResponseSDKType {}
function createBaseListenFinalizeBlockRequest(): ListenFinalizeBlockRequest {
  return {
    req: undefined,
    res: undefined
  };
}
export const ListenFinalizeBlockRequest = {
  typeUrl: "/cosmos.store.streaming.abci.ListenFinalizeBlockRequest",
  encode(message: ListenFinalizeBlockRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.req !== undefined) {
      RequestFinalizeBlock.encode(message.req, writer.uint32(10).fork()).ldelim();
    }
    if (message.res !== undefined) {
      ResponseFinalizeBlock.encode(message.res, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ListenFinalizeBlockRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListenFinalizeBlockRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.req = RequestFinalizeBlock.decode(reader, reader.uint32());
          break;
        case 2:
          message.res = ResponseFinalizeBlock.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ListenFinalizeBlockRequest {
    return {
      req: isSet(object.req) ? RequestFinalizeBlock.fromJSON(object.req) : undefined,
      res: isSet(object.res) ? ResponseFinalizeBlock.fromJSON(object.res) : undefined
    };
  },
  toJSON(message: ListenFinalizeBlockRequest): unknown {
    const obj: any = {};
    message.req !== undefined && (obj.req = message.req ? RequestFinalizeBlock.toJSON(message.req) : undefined);
    message.res !== undefined && (obj.res = message.res ? ResponseFinalizeBlock.toJSON(message.res) : undefined);
    return obj;
  },
  fromPartial(object: Partial<ListenFinalizeBlockRequest>): ListenFinalizeBlockRequest {
    const message = createBaseListenFinalizeBlockRequest();
    message.req = object.req !== undefined && object.req !== null ? RequestFinalizeBlock.fromPartial(object.req) : undefined;
    message.res = object.res !== undefined && object.res !== null ? ResponseFinalizeBlock.fromPartial(object.res) : undefined;
    return message;
  },
  fromAmino(object: ListenFinalizeBlockRequestAmino): ListenFinalizeBlockRequest {
    return {
      req: object?.req ? RequestFinalizeBlock.fromAmino(object.req) : undefined,
      res: object?.res ? ResponseFinalizeBlock.fromAmino(object.res) : undefined
    };
  },
  toAmino(message: ListenFinalizeBlockRequest): ListenFinalizeBlockRequestAmino {
    const obj: any = {};
    obj.req = message.req ? RequestFinalizeBlock.toAmino(message.req) : undefined;
    obj.res = message.res ? ResponseFinalizeBlock.toAmino(message.res) : undefined;
    return obj;
  },
  fromAminoMsg(object: ListenFinalizeBlockRequestAminoMsg): ListenFinalizeBlockRequest {
    return ListenFinalizeBlockRequest.fromAmino(object.value);
  },
  toAminoMsg(message: ListenFinalizeBlockRequest): ListenFinalizeBlockRequestAminoMsg {
    return {
      type: "cosmos-sdk/ListenFinalizeBlockRequest",
      value: ListenFinalizeBlockRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: ListenFinalizeBlockRequestProtoMsg): ListenFinalizeBlockRequest {
    return ListenFinalizeBlockRequest.decode(message.value);
  },
  toProto(message: ListenFinalizeBlockRequest): Uint8Array {
    return ListenFinalizeBlockRequest.encode(message).finish();
  },
  toProtoMsg(message: ListenFinalizeBlockRequest): ListenFinalizeBlockRequestProtoMsg {
    return {
      typeUrl: "/cosmos.store.streaming.abci.ListenFinalizeBlockRequest",
      value: ListenFinalizeBlockRequest.encode(message).finish()
    };
  }
};
function createBaseListenFinalizeBlockResponse(): ListenFinalizeBlockResponse {
  return {};
}
export const ListenFinalizeBlockResponse = {
  typeUrl: "/cosmos.store.streaming.abci.ListenFinalizeBlockResponse",
  encode(_: ListenFinalizeBlockResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ListenFinalizeBlockResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListenFinalizeBlockResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): ListenFinalizeBlockResponse {
    return {};
  },
  toJSON(_: ListenFinalizeBlockResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<ListenFinalizeBlockResponse>): ListenFinalizeBlockResponse {
    const message = createBaseListenFinalizeBlockResponse();
    return message;
  },
  fromAmino(_: ListenFinalizeBlockResponseAmino): ListenFinalizeBlockResponse {
    return {};
  },
  toAmino(_: ListenFinalizeBlockResponse): ListenFinalizeBlockResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: ListenFinalizeBlockResponseAminoMsg): ListenFinalizeBlockResponse {
    return ListenFinalizeBlockResponse.fromAmino(object.value);
  },
  toAminoMsg(message: ListenFinalizeBlockResponse): ListenFinalizeBlockResponseAminoMsg {
    return {
      type: "cosmos-sdk/ListenFinalizeBlockResponse",
      value: ListenFinalizeBlockResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: ListenFinalizeBlockResponseProtoMsg): ListenFinalizeBlockResponse {
    return ListenFinalizeBlockResponse.decode(message.value);
  },
  toProto(message: ListenFinalizeBlockResponse): Uint8Array {
    return ListenFinalizeBlockResponse.encode(message).finish();
  },
  toProtoMsg(message: ListenFinalizeBlockResponse): ListenFinalizeBlockResponseProtoMsg {
    return {
      typeUrl: "/cosmos.store.streaming.abci.ListenFinalizeBlockResponse",
      value: ListenFinalizeBlockResponse.encode(message).finish()
    };
  }
};
function createBaseListenCommitRequest(): ListenCommitRequest {
  return {
    block_height: BigInt(0),
    res: undefined,
    change_set: []
  };
}
export const ListenCommitRequest = {
  typeUrl: "/cosmos.store.streaming.abci.ListenCommitRequest",
  encode(message: ListenCommitRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.block_height !== BigInt(0)) {
      writer.uint32(8).int64(message.block_height);
    }
    if (message.res !== undefined) {
      ResponseCommit.encode(message.res, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.change_set) {
      StoreKVPair.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ListenCommitRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListenCommitRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.block_height = reader.int64();
          break;
        case 2:
          message.res = ResponseCommit.decode(reader, reader.uint32());
          break;
        case 3:
          message.change_set.push(StoreKVPair.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ListenCommitRequest {
    return {
      block_height: isSet(object.block_height) ? BigInt(object.block_height.toString()) : BigInt(0),
      res: isSet(object.res) ? ResponseCommit.fromJSON(object.res) : undefined,
      change_set: Array.isArray(object?.change_set) ? object.change_set.map((e: any) => StoreKVPair.fromJSON(e)) : []
    };
  },
  toJSON(message: ListenCommitRequest): unknown {
    const obj: any = {};
    message.block_height !== undefined && (obj.block_height = (message.block_height || BigInt(0)).toString());
    message.res !== undefined && (obj.res = message.res ? ResponseCommit.toJSON(message.res) : undefined);
    if (message.change_set) {
      obj.change_set = message.change_set.map(e => e ? StoreKVPair.toJSON(e) : undefined);
    } else {
      obj.change_set = [];
    }
    return obj;
  },
  fromPartial(object: Partial<ListenCommitRequest>): ListenCommitRequest {
    const message = createBaseListenCommitRequest();
    message.block_height = object.block_height !== undefined && object.block_height !== null ? BigInt(object.block_height.toString()) : BigInt(0);
    message.res = object.res !== undefined && object.res !== null ? ResponseCommit.fromPartial(object.res) : undefined;
    message.change_set = object.change_set?.map(e => StoreKVPair.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ListenCommitRequestAmino): ListenCommitRequest {
    return {
      block_height: BigInt(object.block_height),
      res: object?.res ? ResponseCommit.fromAmino(object.res) : undefined,
      change_set: Array.isArray(object?.change_set) ? object.change_set.map((e: any) => StoreKVPair.fromAmino(e)) : []
    };
  },
  toAmino(message: ListenCommitRequest): ListenCommitRequestAmino {
    const obj: any = {};
    obj.block_height = message.block_height ? message.block_height.toString() : undefined;
    obj.res = message.res ? ResponseCommit.toAmino(message.res) : undefined;
    if (message.change_set) {
      obj.change_set = message.change_set.map(e => e ? StoreKVPair.toAmino(e) : undefined);
    } else {
      obj.change_set = [];
    }
    return obj;
  },
  fromAminoMsg(object: ListenCommitRequestAminoMsg): ListenCommitRequest {
    return ListenCommitRequest.fromAmino(object.value);
  },
  toAminoMsg(message: ListenCommitRequest): ListenCommitRequestAminoMsg {
    return {
      type: "cosmos-sdk/ListenCommitRequest",
      value: ListenCommitRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: ListenCommitRequestProtoMsg): ListenCommitRequest {
    return ListenCommitRequest.decode(message.value);
  },
  toProto(message: ListenCommitRequest): Uint8Array {
    return ListenCommitRequest.encode(message).finish();
  },
  toProtoMsg(message: ListenCommitRequest): ListenCommitRequestProtoMsg {
    return {
      typeUrl: "/cosmos.store.streaming.abci.ListenCommitRequest",
      value: ListenCommitRequest.encode(message).finish()
    };
  }
};
function createBaseListenCommitResponse(): ListenCommitResponse {
  return {};
}
export const ListenCommitResponse = {
  typeUrl: "/cosmos.store.streaming.abci.ListenCommitResponse",
  encode(_: ListenCommitResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ListenCommitResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListenCommitResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): ListenCommitResponse {
    return {};
  },
  toJSON(_: ListenCommitResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<ListenCommitResponse>): ListenCommitResponse {
    const message = createBaseListenCommitResponse();
    return message;
  },
  fromAmino(_: ListenCommitResponseAmino): ListenCommitResponse {
    return {};
  },
  toAmino(_: ListenCommitResponse): ListenCommitResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: ListenCommitResponseAminoMsg): ListenCommitResponse {
    return ListenCommitResponse.fromAmino(object.value);
  },
  toAminoMsg(message: ListenCommitResponse): ListenCommitResponseAminoMsg {
    return {
      type: "cosmos-sdk/ListenCommitResponse",
      value: ListenCommitResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: ListenCommitResponseProtoMsg): ListenCommitResponse {
    return ListenCommitResponse.decode(message.value);
  },
  toProto(message: ListenCommitResponse): Uint8Array {
    return ListenCommitResponse.encode(message).finish();
  },
  toProtoMsg(message: ListenCommitResponse): ListenCommitResponseProtoMsg {
    return {
      typeUrl: "/cosmos.store.streaming.abci.ListenCommitResponse",
      value: ListenCommitResponse.encode(message).finish()
    };
  }
};
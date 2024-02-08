//@ts-nocheck
import { RequestFinalizeBlock, ResponseFinalizeBlock, ResponseCommit } from "../../../../tendermint/abci/types";
import { StoreKVPair } from "../../v1beta1/listening";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet } from "../../../../helpers";
import { GlobalDecoderRegistry } from "../../../../registry";
export const protobufPackage = "cosmos.store.streaming.abci";
function createBaseListenFinalizeBlockRequest() {
    return {
        req: undefined,
        res: undefined
    };
}
export const ListenFinalizeBlockRequest = {
    typeUrl: "/cosmos.store.streaming.abci.ListenFinalizeBlockRequest",
    aminoType: "cosmos-sdk/ListenFinalizeBlockRequest",
    is(o) {
        return o && o.$typeUrl === ListenFinalizeBlockRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === ListenFinalizeBlockRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === ListenFinalizeBlockRequest.typeUrl;
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.req !== undefined) {
            RequestFinalizeBlock.encode(message.req, writer.uint32(10).fork()).ldelim();
        }
        if (message.res !== undefined) {
            ResponseFinalizeBlock.encode(message.res, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return {
            req: isSet(object.req) ? RequestFinalizeBlock.fromJSON(object.req) : undefined,
            res: isSet(object.res) ? ResponseFinalizeBlock.fromJSON(object.res) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.req !== undefined && (obj.req = message.req ? RequestFinalizeBlock.toJSON(message.req) : undefined);
        message.res !== undefined && (obj.res = message.res ? ResponseFinalizeBlock.toJSON(message.res) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseListenFinalizeBlockRequest();
        message.req = object.req !== undefined && object.req !== null ? RequestFinalizeBlock.fromPartial(object.req) : undefined;
        message.res = object.res !== undefined && object.res !== null ? ResponseFinalizeBlock.fromPartial(object.res) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseListenFinalizeBlockRequest();
        if (object.req !== undefined && object.req !== null) {
            message.req = RequestFinalizeBlock.fromAmino(object.req);
        }
        if (object.res !== undefined && object.res !== null) {
            message.res = ResponseFinalizeBlock.fromAmino(object.res);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.req = message.req ? RequestFinalizeBlock.toAmino(message.req) : undefined;
        obj.res = message.res ? ResponseFinalizeBlock.toAmino(message.res) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ListenFinalizeBlockRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ListenFinalizeBlockRequest",
            value: ListenFinalizeBlockRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ListenFinalizeBlockRequest.decode(message.value);
    },
    toProto(message) {
        return ListenFinalizeBlockRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.store.streaming.abci.ListenFinalizeBlockRequest",
            value: ListenFinalizeBlockRequest.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(ListenFinalizeBlockRequest.typeUrl, ListenFinalizeBlockRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(ListenFinalizeBlockRequest.aminoType, ListenFinalizeBlockRequest.typeUrl);
function createBaseListenFinalizeBlockResponse() {
    return {};
}
export const ListenFinalizeBlockResponse = {
    typeUrl: "/cosmos.store.streaming.abci.ListenFinalizeBlockResponse",
    aminoType: "cosmos-sdk/ListenFinalizeBlockResponse",
    is(o) {
        return o && o.$typeUrl === ListenFinalizeBlockResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === ListenFinalizeBlockResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === ListenFinalizeBlockResponse.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
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
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseListenFinalizeBlockResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseListenFinalizeBlockResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return ListenFinalizeBlockResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ListenFinalizeBlockResponse",
            value: ListenFinalizeBlockResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ListenFinalizeBlockResponse.decode(message.value);
    },
    toProto(message) {
        return ListenFinalizeBlockResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.store.streaming.abci.ListenFinalizeBlockResponse",
            value: ListenFinalizeBlockResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(ListenFinalizeBlockResponse.typeUrl, ListenFinalizeBlockResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(ListenFinalizeBlockResponse.aminoType, ListenFinalizeBlockResponse.typeUrl);
function createBaseListenCommitRequest() {
    return {
        block_height: BigInt(0),
        res: undefined,
        change_set: []
    };
}
export const ListenCommitRequest = {
    typeUrl: "/cosmos.store.streaming.abci.ListenCommitRequest",
    aminoType: "cosmos-sdk/ListenCommitRequest",
    is(o) {
        return o && (o.$typeUrl === ListenCommitRequest.typeUrl || typeof o.block_height === "bigint" && Array.isArray(o.change_set) && (!o.change_set.length || StoreKVPair.is(o.change_set[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === ListenCommitRequest.typeUrl || typeof o.block_height === "bigint" && Array.isArray(o.change_set) && (!o.change_set.length || StoreKVPair.isSDK(o.change_set[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === ListenCommitRequest.typeUrl || typeof o.block_height === "bigint" && Array.isArray(o.change_set) && (!o.change_set.length || StoreKVPair.isAmino(o.change_set[0])));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.block_height !== BigInt(0)) {
            writer.uint32(8).int64(message.block_height);
        }
        if (message.res !== undefined) {
            ResponseCommit.encode(message.res, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.change_set) {
            StoreKVPair.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return {
            block_height: isSet(object.block_height) ? BigInt(object.block_height.toString()) : BigInt(0),
            res: isSet(object.res) ? ResponseCommit.fromJSON(object.res) : undefined,
            change_set: Array.isArray(object?.change_set) ? object.change_set.map((e) => StoreKVPair.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.block_height !== undefined && (obj.block_height = (message.block_height || BigInt(0)).toString());
        message.res !== undefined && (obj.res = message.res ? ResponseCommit.toJSON(message.res) : undefined);
        if (message.change_set) {
            obj.change_set = message.change_set.map(e => e ? StoreKVPair.toJSON(e) : undefined);
        }
        else {
            obj.change_set = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseListenCommitRequest();
        message.block_height = object.block_height !== undefined && object.block_height !== null ? BigInt(object.block_height.toString()) : BigInt(0);
        message.res = object.res !== undefined && object.res !== null ? ResponseCommit.fromPartial(object.res) : undefined;
        message.change_set = object.change_set?.map(e => StoreKVPair.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseListenCommitRequest();
        if (object.block_height !== undefined && object.block_height !== null) {
            message.block_height = BigInt(object.block_height);
        }
        if (object.res !== undefined && object.res !== null) {
            message.res = ResponseCommit.fromAmino(object.res);
        }
        message.change_set = object.change_set?.map(e => StoreKVPair.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.block_height = message.block_height ? message.block_height.toString() : undefined;
        obj.res = message.res ? ResponseCommit.toAmino(message.res) : undefined;
        if (message.change_set) {
            obj.change_set = message.change_set.map(e => e ? StoreKVPair.toAmino(e) : undefined);
        }
        else {
            obj.change_set = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return ListenCommitRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ListenCommitRequest",
            value: ListenCommitRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ListenCommitRequest.decode(message.value);
    },
    toProto(message) {
        return ListenCommitRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.store.streaming.abci.ListenCommitRequest",
            value: ListenCommitRequest.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(ListenCommitRequest.typeUrl, ListenCommitRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(ListenCommitRequest.aminoType, ListenCommitRequest.typeUrl);
function createBaseListenCommitResponse() {
    return {};
}
export const ListenCommitResponse = {
    typeUrl: "/cosmos.store.streaming.abci.ListenCommitResponse",
    aminoType: "cosmos-sdk/ListenCommitResponse",
    is(o) {
        return o && o.$typeUrl === ListenCommitResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === ListenCommitResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === ListenCommitResponse.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
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
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseListenCommitResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseListenCommitResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return ListenCommitResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ListenCommitResponse",
            value: ListenCommitResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ListenCommitResponse.decode(message.value);
    },
    toProto(message) {
        return ListenCommitResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.store.streaming.abci.ListenCommitResponse",
            value: ListenCommitResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(ListenCommitResponse.typeUrl, ListenCommitResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(ListenCommitResponse.aminoType, ListenCommitResponse.typeUrl);
//# sourceMappingURL=grpc.js.map
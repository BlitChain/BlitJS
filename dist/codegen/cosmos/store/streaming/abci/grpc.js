"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListenCommitResponse = exports.ListenCommitRequest = exports.ListenFinalizeBlockResponse = exports.ListenFinalizeBlockRequest = exports.protobufPackage = void 0;
//@ts-nocheck
const types_1 = require("../../../../tendermint/abci/types");
const listening_1 = require("../../v1beta1/listening");
const binary_1 = require("../../../../binary");
const helpers_1 = require("../../../../helpers");
exports.protobufPackage = "cosmos.store.streaming.abci";
function createBaseListenFinalizeBlockRequest() {
    return {
        req: undefined,
        res: undefined
    };
}
exports.ListenFinalizeBlockRequest = {
    typeUrl: "/cosmos.store.streaming.abci.ListenFinalizeBlockRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.req !== undefined) {
            types_1.RequestFinalizeBlock.encode(message.req, writer.uint32(10).fork()).ldelim();
        }
        if (message.res !== undefined) {
            types_1.ResponseFinalizeBlock.encode(message.res, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListenFinalizeBlockRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.req = types_1.RequestFinalizeBlock.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.res = types_1.ResponseFinalizeBlock.decode(reader, reader.uint32());
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
            req: (0, helpers_1.isSet)(object.req) ? types_1.RequestFinalizeBlock.fromJSON(object.req) : undefined,
            res: (0, helpers_1.isSet)(object.res) ? types_1.ResponseFinalizeBlock.fromJSON(object.res) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.req !== undefined && (obj.req = message.req ? types_1.RequestFinalizeBlock.toJSON(message.req) : undefined);
        message.res !== undefined && (obj.res = message.res ? types_1.ResponseFinalizeBlock.toJSON(message.res) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseListenFinalizeBlockRequest();
        message.req = object.req !== undefined && object.req !== null ? types_1.RequestFinalizeBlock.fromPartial(object.req) : undefined;
        message.res = object.res !== undefined && object.res !== null ? types_1.ResponseFinalizeBlock.fromPartial(object.res) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            req: object?.req ? types_1.RequestFinalizeBlock.fromAmino(object.req) : undefined,
            res: object?.res ? types_1.ResponseFinalizeBlock.fromAmino(object.res) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.req = message.req ? types_1.RequestFinalizeBlock.toAmino(message.req) : undefined;
        obj.res = message.res ? types_1.ResponseFinalizeBlock.toAmino(message.res) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ListenFinalizeBlockRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ListenFinalizeBlockRequest",
            value: exports.ListenFinalizeBlockRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ListenFinalizeBlockRequest.decode(message.value);
    },
    toProto(message) {
        return exports.ListenFinalizeBlockRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.store.streaming.abci.ListenFinalizeBlockRequest",
            value: exports.ListenFinalizeBlockRequest.encode(message).finish()
        };
    }
};
function createBaseListenFinalizeBlockResponse() {
    return {};
}
exports.ListenFinalizeBlockResponse = {
    typeUrl: "/cosmos.store.streaming.abci.ListenFinalizeBlockResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return {};
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ListenFinalizeBlockResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ListenFinalizeBlockResponse",
            value: exports.ListenFinalizeBlockResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ListenFinalizeBlockResponse.decode(message.value);
    },
    toProto(message) {
        return exports.ListenFinalizeBlockResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.store.streaming.abci.ListenFinalizeBlockResponse",
            value: exports.ListenFinalizeBlockResponse.encode(message).finish()
        };
    }
};
function createBaseListenCommitRequest() {
    return {
        block_height: BigInt(0),
        res: undefined,
        change_set: []
    };
}
exports.ListenCommitRequest = {
    typeUrl: "/cosmos.store.streaming.abci.ListenCommitRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.block_height !== BigInt(0)) {
            writer.uint32(8).int64(message.block_height);
        }
        if (message.res !== undefined) {
            types_1.ResponseCommit.encode(message.res, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.change_set) {
            listening_1.StoreKVPair.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListenCommitRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.block_height = reader.int64();
                    break;
                case 2:
                    message.res = types_1.ResponseCommit.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.change_set.push(listening_1.StoreKVPair.decode(reader, reader.uint32()));
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
            block_height: (0, helpers_1.isSet)(object.block_height) ? BigInt(object.block_height.toString()) : BigInt(0),
            res: (0, helpers_1.isSet)(object.res) ? types_1.ResponseCommit.fromJSON(object.res) : undefined,
            change_set: Array.isArray(object?.change_set) ? object.change_set.map((e) => listening_1.StoreKVPair.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.block_height !== undefined && (obj.block_height = (message.block_height || BigInt(0)).toString());
        message.res !== undefined && (obj.res = message.res ? types_1.ResponseCommit.toJSON(message.res) : undefined);
        if (message.change_set) {
            obj.change_set = message.change_set.map(e => e ? listening_1.StoreKVPair.toJSON(e) : undefined);
        }
        else {
            obj.change_set = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseListenCommitRequest();
        message.block_height = object.block_height !== undefined && object.block_height !== null ? BigInt(object.block_height.toString()) : BigInt(0);
        message.res = object.res !== undefined && object.res !== null ? types_1.ResponseCommit.fromPartial(object.res) : undefined;
        message.change_set = object.change_set?.map(e => listening_1.StoreKVPair.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            block_height: BigInt(object.block_height),
            res: object?.res ? types_1.ResponseCommit.fromAmino(object.res) : undefined,
            change_set: Array.isArray(object?.change_set) ? object.change_set.map((e) => listening_1.StoreKVPair.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.block_height = message.block_height ? message.block_height.toString() : undefined;
        obj.res = message.res ? types_1.ResponseCommit.toAmino(message.res) : undefined;
        if (message.change_set) {
            obj.change_set = message.change_set.map(e => e ? listening_1.StoreKVPair.toAmino(e) : undefined);
        }
        else {
            obj.change_set = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ListenCommitRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ListenCommitRequest",
            value: exports.ListenCommitRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ListenCommitRequest.decode(message.value);
    },
    toProto(message) {
        return exports.ListenCommitRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.store.streaming.abci.ListenCommitRequest",
            value: exports.ListenCommitRequest.encode(message).finish()
        };
    }
};
function createBaseListenCommitResponse() {
    return {};
}
exports.ListenCommitResponse = {
    typeUrl: "/cosmos.store.streaming.abci.ListenCommitResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return {};
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ListenCommitResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ListenCommitResponse",
            value: exports.ListenCommitResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ListenCommitResponse.decode(message.value);
    },
    toProto(message) {
        return exports.ListenCommitResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.store.streaming.abci.ListenCommitResponse",
            value: exports.ListenCommitResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=grpc.js.map
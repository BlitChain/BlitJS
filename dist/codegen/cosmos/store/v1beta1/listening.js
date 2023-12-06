"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockMetadata = exports.StoreKVPair = exports.protobufPackage = void 0;
//@ts-nocheck
const types_1 = require("../../../tendermint/abci/types");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "cosmos.store.v1beta1";
function createBaseStoreKVPair() {
    return {
        store_key: "",
        delete: false,
        key: new Uint8Array(),
        value: new Uint8Array()
    };
}
exports.StoreKVPair = {
    typeUrl: "/cosmos.store.v1beta1.StoreKVPair",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.store_key !== "") {
            writer.uint32(10).string(message.store_key);
        }
        if (message.delete === true) {
            writer.uint32(16).bool(message.delete);
        }
        if (message.key.length !== 0) {
            writer.uint32(26).bytes(message.key);
        }
        if (message.value.length !== 0) {
            writer.uint32(34).bytes(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStoreKVPair();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.store_key = reader.string();
                    break;
                case 2:
                    message.delete = reader.bool();
                    break;
                case 3:
                    message.key = reader.bytes();
                    break;
                case 4:
                    message.value = reader.bytes();
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
            store_key: (0, helpers_1.isSet)(object.store_key) ? String(object.store_key) : "",
            delete: (0, helpers_1.isSet)(object.delete) ? Boolean(object.delete) : false,
            key: (0, helpers_1.isSet)(object.key) ? (0, helpers_1.bytesFromBase64)(object.key) : new Uint8Array(),
            value: (0, helpers_1.isSet)(object.value) ? (0, helpers_1.bytesFromBase64)(object.value) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.store_key !== undefined && (obj.store_key = message.store_key);
        message.delete !== undefined && (obj.delete = message.delete);
        message.key !== undefined && (obj.key = (0, helpers_1.base64FromBytes)(message.key !== undefined ? message.key : new Uint8Array()));
        message.value !== undefined && (obj.value = (0, helpers_1.base64FromBytes)(message.value !== undefined ? message.value : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseStoreKVPair();
        message.store_key = object.store_key ?? "";
        message.delete = object.delete ?? false;
        message.key = object.key ?? new Uint8Array();
        message.value = object.value ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        return {
            store_key: object.store_key,
            delete: object.delete,
            key: object.key,
            value: object.value
        };
    },
    toAmino(message) {
        const obj = {};
        obj.store_key = message.store_key;
        obj.delete = message.delete;
        obj.key = message.key;
        obj.value = message.value;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.StoreKVPair.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/StoreKVPair",
            value: exports.StoreKVPair.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.StoreKVPair.decode(message.value);
    },
    toProto(message) {
        return exports.StoreKVPair.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.store.v1beta1.StoreKVPair",
            value: exports.StoreKVPair.encode(message).finish()
        };
    }
};
function createBaseBlockMetadata() {
    return {
        response_commit: undefined,
        request_finalize_block: undefined,
        response_finalize_block: undefined
    };
}
exports.BlockMetadata = {
    typeUrl: "/cosmos.store.v1beta1.BlockMetadata",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.response_commit !== undefined) {
            types_1.ResponseCommit.encode(message.response_commit, writer.uint32(50).fork()).ldelim();
        }
        if (message.request_finalize_block !== undefined) {
            types_1.RequestFinalizeBlock.encode(message.request_finalize_block, writer.uint32(58).fork()).ldelim();
        }
        if (message.response_finalize_block !== undefined) {
            types_1.ResponseFinalizeBlock.encode(message.response_finalize_block, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBlockMetadata();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 6:
                    message.response_commit = types_1.ResponseCommit.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.request_finalize_block = types_1.RequestFinalizeBlock.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.response_finalize_block = types_1.ResponseFinalizeBlock.decode(reader, reader.uint32());
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
            response_commit: (0, helpers_1.isSet)(object.response_commit) ? types_1.ResponseCommit.fromJSON(object.response_commit) : undefined,
            request_finalize_block: (0, helpers_1.isSet)(object.request_finalize_block) ? types_1.RequestFinalizeBlock.fromJSON(object.request_finalize_block) : undefined,
            response_finalize_block: (0, helpers_1.isSet)(object.response_finalize_block) ? types_1.ResponseFinalizeBlock.fromJSON(object.response_finalize_block) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.response_commit !== undefined && (obj.response_commit = message.response_commit ? types_1.ResponseCommit.toJSON(message.response_commit) : undefined);
        message.request_finalize_block !== undefined && (obj.request_finalize_block = message.request_finalize_block ? types_1.RequestFinalizeBlock.toJSON(message.request_finalize_block) : undefined);
        message.response_finalize_block !== undefined && (obj.response_finalize_block = message.response_finalize_block ? types_1.ResponseFinalizeBlock.toJSON(message.response_finalize_block) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseBlockMetadata();
        message.response_commit = object.response_commit !== undefined && object.response_commit !== null ? types_1.ResponseCommit.fromPartial(object.response_commit) : undefined;
        message.request_finalize_block = object.request_finalize_block !== undefined && object.request_finalize_block !== null ? types_1.RequestFinalizeBlock.fromPartial(object.request_finalize_block) : undefined;
        message.response_finalize_block = object.response_finalize_block !== undefined && object.response_finalize_block !== null ? types_1.ResponseFinalizeBlock.fromPartial(object.response_finalize_block) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            response_commit: object?.response_commit ? types_1.ResponseCommit.fromAmino(object.response_commit) : undefined,
            request_finalize_block: object?.request_finalize_block ? types_1.RequestFinalizeBlock.fromAmino(object.request_finalize_block) : undefined,
            response_finalize_block: object?.response_finalize_block ? types_1.ResponseFinalizeBlock.fromAmino(object.response_finalize_block) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.response_commit = message.response_commit ? types_1.ResponseCommit.toAmino(message.response_commit) : undefined;
        obj.request_finalize_block = message.request_finalize_block ? types_1.RequestFinalizeBlock.toAmino(message.request_finalize_block) : undefined;
        obj.response_finalize_block = message.response_finalize_block ? types_1.ResponseFinalizeBlock.toAmino(message.response_finalize_block) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.BlockMetadata.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/BlockMetadata",
            value: exports.BlockMetadata.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.BlockMetadata.decode(message.value);
    },
    toProto(message) {
        return exports.BlockMetadata.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.store.v1beta1.BlockMetadata",
            value: exports.BlockMetadata.encode(message).finish()
        };
    }
};
//# sourceMappingURL=listening.js.map
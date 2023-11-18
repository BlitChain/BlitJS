"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommitID = exports.StoreInfo = exports.CommitInfo = exports.protobufPackage = void 0;
//@ts-nocheck
const timestamp_1 = require("../../../google/protobuf/timestamp");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "cosmos.store.v1beta1";
function createBaseCommitInfo() {
    return {
        version: BigInt(0),
        store_infos: [],
        timestamp: new Date()
    };
}
exports.CommitInfo = {
    typeUrl: "/cosmos.store.v1beta1.CommitInfo",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.version !== BigInt(0)) {
            writer.uint32(8).int64(message.version);
        }
        for (const v of message.store_infos) {
            exports.StoreInfo.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.timestamp !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.timestamp), writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCommitInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.version = reader.int64();
                    break;
                case 2:
                    message.store_infos.push(exports.StoreInfo.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.timestamp = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
            version: (0, helpers_1.isSet)(object.version) ? BigInt(object.version.toString()) : BigInt(0),
            store_infos: Array.isArray(object?.store_infos) ? object.store_infos.map((e) => exports.StoreInfo.fromJSON(e)) : [],
            timestamp: (0, helpers_1.isSet)(object.timestamp) ? (0, helpers_1.fromJsonTimestamp)(object.timestamp) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.version !== undefined && (obj.version = (message.version || BigInt(0)).toString());
        if (message.store_infos) {
            obj.store_infos = message.store_infos.map(e => e ? exports.StoreInfo.toJSON(e) : undefined);
        }
        else {
            obj.store_infos = [];
        }
        message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseCommitInfo();
        message.version = object.version !== undefined && object.version !== null ? BigInt(object.version.toString()) : BigInt(0);
        message.store_infos = object.store_infos?.map(e => exports.StoreInfo.fromPartial(e)) || [];
        message.timestamp = object.timestamp ?? undefined;
        return message;
    },
    fromSDK(object) {
        return {
            version: object?.version,
            store_infos: Array.isArray(object?.store_infos) ? object.store_infos.map((e) => exports.StoreInfo.fromSDK(e)) : [],
            timestamp: object.timestamp ? timestamp_1.Timestamp.fromSDK(object.timestamp) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.version = message.version;
        if (message.store_infos) {
            obj.store_infos = message.store_infos.map(e => e ? exports.StoreInfo.toSDK(e) : undefined);
        }
        else {
            obj.store_infos = [];
        }
        message.timestamp !== undefined && (obj.timestamp = message.timestamp ? timestamp_1.Timestamp.toSDK(message.timestamp) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            version: BigInt(object.version),
            store_infos: Array.isArray(object?.store_infos) ? object.store_infos.map((e) => exports.StoreInfo.fromAmino(e)) : [],
            timestamp: object.timestamp
        };
    },
    toAmino(message) {
        const obj = {};
        obj.version = message.version ? message.version.toString() : undefined;
        if (message.store_infos) {
            obj.store_infos = message.store_infos.map(e => e ? exports.StoreInfo.toAmino(e) : undefined);
        }
        else {
            obj.store_infos = [];
        }
        obj.timestamp = message.timestamp;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.CommitInfo.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/CommitInfo",
            value: exports.CommitInfo.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.CommitInfo.decode(message.value);
    },
    toProto(message) {
        return exports.CommitInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.store.v1beta1.CommitInfo",
            value: exports.CommitInfo.encode(message).finish()
        };
    }
};
function createBaseStoreInfo() {
    return {
        name: "",
        commit_id: exports.CommitID.fromPartial({})
    };
}
exports.StoreInfo = {
    typeUrl: "/cosmos.store.v1beta1.StoreInfo",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.commit_id !== undefined) {
            exports.CommitID.encode(message.commit_id, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStoreInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.commit_id = exports.CommitID.decode(reader, reader.uint32());
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
            name: (0, helpers_1.isSet)(object.name) ? String(object.name) : "",
            commit_id: (0, helpers_1.isSet)(object.commit_id) ? exports.CommitID.fromJSON(object.commit_id) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.commit_id !== undefined && (obj.commit_id = message.commit_id ? exports.CommitID.toJSON(message.commit_id) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseStoreInfo();
        message.name = object.name ?? "";
        message.commit_id = object.commit_id !== undefined && object.commit_id !== null ? exports.CommitID.fromPartial(object.commit_id) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            name: object?.name,
            commit_id: object.commit_id ? exports.CommitID.fromSDK(object.commit_id) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.name = message.name;
        message.commit_id !== undefined && (obj.commit_id = message.commit_id ? exports.CommitID.toSDK(message.commit_id) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            name: object.name,
            commit_id: object?.commit_id ? exports.CommitID.fromAmino(object.commit_id) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.name = message.name;
        obj.commit_id = message.commit_id ? exports.CommitID.toAmino(message.commit_id) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.StoreInfo.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/StoreInfo",
            value: exports.StoreInfo.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.StoreInfo.decode(message.value);
    },
    toProto(message) {
        return exports.StoreInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.store.v1beta1.StoreInfo",
            value: exports.StoreInfo.encode(message).finish()
        };
    }
};
function createBaseCommitID() {
    return {
        version: BigInt(0),
        hash: new Uint8Array()
    };
}
exports.CommitID = {
    typeUrl: "/cosmos.store.v1beta1.CommitID",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.version !== BigInt(0)) {
            writer.uint32(8).int64(message.version);
        }
        if (message.hash.length !== 0) {
            writer.uint32(18).bytes(message.hash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCommitID();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.version = reader.int64();
                    break;
                case 2:
                    message.hash = reader.bytes();
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
            version: (0, helpers_1.isSet)(object.version) ? BigInt(object.version.toString()) : BigInt(0),
            hash: (0, helpers_1.isSet)(object.hash) ? (0, helpers_1.bytesFromBase64)(object.hash) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.version !== undefined && (obj.version = (message.version || BigInt(0)).toString());
        message.hash !== undefined && (obj.hash = (0, helpers_1.base64FromBytes)(message.hash !== undefined ? message.hash : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseCommitID();
        message.version = object.version !== undefined && object.version !== null ? BigInt(object.version.toString()) : BigInt(0);
        message.hash = object.hash ?? new Uint8Array();
        return message;
    },
    fromSDK(object) {
        return {
            version: object?.version,
            hash: object?.hash
        };
    },
    toSDK(message) {
        const obj = {};
        obj.version = message.version;
        obj.hash = message.hash;
        return obj;
    },
    fromAmino(object) {
        return {
            version: BigInt(object.version),
            hash: object.hash
        };
    },
    toAmino(message) {
        const obj = {};
        obj.version = message.version ? message.version.toString() : undefined;
        obj.hash = message.hash;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.CommitID.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/CommitID",
            value: exports.CommitID.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.CommitID.decode(message.value);
    },
    toProto(message) {
        return exports.CommitID.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.store.v1beta1.CommitID",
            value: exports.CommitID.encode(message).finish()
        };
    }
};
//# sourceMappingURL=commit_info.js.map
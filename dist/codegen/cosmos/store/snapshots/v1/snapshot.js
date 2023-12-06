"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SnapshotExtensionPayload = exports.SnapshotExtensionMeta = exports.SnapshotIAVLItem = exports.SnapshotStoreItem = exports.SnapshotItem = exports.Metadata = exports.Snapshot = exports.protobufPackage = void 0;
//@ts-nocheck
const binary_1 = require("../../../../binary");
const helpers_1 = require("../../../../helpers");
exports.protobufPackage = "cosmos.store.snapshots.v1";
function createBaseSnapshot() {
    return {
        height: BigInt(0),
        format: 0,
        chunks: 0,
        hash: new Uint8Array(),
        metadata: exports.Metadata.fromPartial({})
    };
}
exports.Snapshot = {
    typeUrl: "/cosmos.store.snapshots.v1.Snapshot",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.height !== BigInt(0)) {
            writer.uint32(8).uint64(message.height);
        }
        if (message.format !== 0) {
            writer.uint32(16).uint32(message.format);
        }
        if (message.chunks !== 0) {
            writer.uint32(24).uint32(message.chunks);
        }
        if (message.hash.length !== 0) {
            writer.uint32(34).bytes(message.hash);
        }
        if (message.metadata !== undefined) {
            exports.Metadata.encode(message.metadata, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSnapshot();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = reader.uint64();
                    break;
                case 2:
                    message.format = reader.uint32();
                    break;
                case 3:
                    message.chunks = reader.uint32();
                    break;
                case 4:
                    message.hash = reader.bytes();
                    break;
                case 5:
                    message.metadata = exports.Metadata.decode(reader, reader.uint32());
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
            height: (0, helpers_1.isSet)(object.height) ? BigInt(object.height.toString()) : BigInt(0),
            format: (0, helpers_1.isSet)(object.format) ? Number(object.format) : 0,
            chunks: (0, helpers_1.isSet)(object.chunks) ? Number(object.chunks) : 0,
            hash: (0, helpers_1.isSet)(object.hash) ? (0, helpers_1.bytesFromBase64)(object.hash) : new Uint8Array(),
            metadata: (0, helpers_1.isSet)(object.metadata) ? exports.Metadata.fromJSON(object.metadata) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
        message.format !== undefined && (obj.format = Math.round(message.format));
        message.chunks !== undefined && (obj.chunks = Math.round(message.chunks));
        message.hash !== undefined && (obj.hash = (0, helpers_1.base64FromBytes)(message.hash !== undefined ? message.hash : new Uint8Array()));
        message.metadata !== undefined && (obj.metadata = message.metadata ? exports.Metadata.toJSON(message.metadata) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSnapshot();
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        message.format = object.format ?? 0;
        message.chunks = object.chunks ?? 0;
        message.hash = object.hash ?? new Uint8Array();
        message.metadata = object.metadata !== undefined && object.metadata !== null ? exports.Metadata.fromPartial(object.metadata) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            height: BigInt(object.height),
            format: object.format,
            chunks: object.chunks,
            hash: object.hash,
            metadata: object?.metadata ? exports.Metadata.fromAmino(object.metadata) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.height = message.height ? message.height.toString() : undefined;
        obj.format = message.format;
        obj.chunks = message.chunks;
        obj.hash = message.hash;
        obj.metadata = message.metadata ? exports.Metadata.toAmino(message.metadata) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Snapshot.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Snapshot",
            value: exports.Snapshot.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Snapshot.decode(message.value);
    },
    toProto(message) {
        return exports.Snapshot.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.store.snapshots.v1.Snapshot",
            value: exports.Snapshot.encode(message).finish()
        };
    }
};
function createBaseMetadata() {
    return {
        chunk_hashes: []
    };
}
exports.Metadata = {
    typeUrl: "/cosmos.store.snapshots.v1.Metadata",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.chunk_hashes) {
            writer.uint32(10).bytes(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMetadata();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chunk_hashes.push(reader.bytes());
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
            chunk_hashes: Array.isArray(object?.chunk_hashes) ? object.chunk_hashes.map((e) => (0, helpers_1.bytesFromBase64)(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.chunk_hashes) {
            obj.chunk_hashes = message.chunk_hashes.map(e => (0, helpers_1.base64FromBytes)(e !== undefined ? e : new Uint8Array()));
        }
        else {
            obj.chunk_hashes = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMetadata();
        message.chunk_hashes = object.chunk_hashes?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        return {
            chunk_hashes: Array.isArray(object?.chunk_hashes) ? object.chunk_hashes.map((e) => e) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.chunk_hashes) {
            obj.chunk_hashes = message.chunk_hashes.map(e => e);
        }
        else {
            obj.chunk_hashes = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Metadata.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Metadata",
            value: exports.Metadata.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Metadata.decode(message.value);
    },
    toProto(message) {
        return exports.Metadata.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.store.snapshots.v1.Metadata",
            value: exports.Metadata.encode(message).finish()
        };
    }
};
function createBaseSnapshotItem() {
    return {
        store: undefined,
        iavl: undefined,
        extension: undefined,
        extension_payload: undefined
    };
}
exports.SnapshotItem = {
    typeUrl: "/cosmos.store.snapshots.v1.SnapshotItem",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.store !== undefined) {
            exports.SnapshotStoreItem.encode(message.store, writer.uint32(10).fork()).ldelim();
        }
        if (message.iavl !== undefined) {
            exports.SnapshotIAVLItem.encode(message.iavl, writer.uint32(18).fork()).ldelim();
        }
        if (message.extension !== undefined) {
            exports.SnapshotExtensionMeta.encode(message.extension, writer.uint32(26).fork()).ldelim();
        }
        if (message.extension_payload !== undefined) {
            exports.SnapshotExtensionPayload.encode(message.extension_payload, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSnapshotItem();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.store = exports.SnapshotStoreItem.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.iavl = exports.SnapshotIAVLItem.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.extension = exports.SnapshotExtensionMeta.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.extension_payload = exports.SnapshotExtensionPayload.decode(reader, reader.uint32());
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
            store: (0, helpers_1.isSet)(object.store) ? exports.SnapshotStoreItem.fromJSON(object.store) : undefined,
            iavl: (0, helpers_1.isSet)(object.iavl) ? exports.SnapshotIAVLItem.fromJSON(object.iavl) : undefined,
            extension: (0, helpers_1.isSet)(object.extension) ? exports.SnapshotExtensionMeta.fromJSON(object.extension) : undefined,
            extension_payload: (0, helpers_1.isSet)(object.extension_payload) ? exports.SnapshotExtensionPayload.fromJSON(object.extension_payload) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.store !== undefined && (obj.store = message.store ? exports.SnapshotStoreItem.toJSON(message.store) : undefined);
        message.iavl !== undefined && (obj.iavl = message.iavl ? exports.SnapshotIAVLItem.toJSON(message.iavl) : undefined);
        message.extension !== undefined && (obj.extension = message.extension ? exports.SnapshotExtensionMeta.toJSON(message.extension) : undefined);
        message.extension_payload !== undefined && (obj.extension_payload = message.extension_payload ? exports.SnapshotExtensionPayload.toJSON(message.extension_payload) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSnapshotItem();
        message.store = object.store !== undefined && object.store !== null ? exports.SnapshotStoreItem.fromPartial(object.store) : undefined;
        message.iavl = object.iavl !== undefined && object.iavl !== null ? exports.SnapshotIAVLItem.fromPartial(object.iavl) : undefined;
        message.extension = object.extension !== undefined && object.extension !== null ? exports.SnapshotExtensionMeta.fromPartial(object.extension) : undefined;
        message.extension_payload = object.extension_payload !== undefined && object.extension_payload !== null ? exports.SnapshotExtensionPayload.fromPartial(object.extension_payload) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            store: object?.store ? exports.SnapshotStoreItem.fromAmino(object.store) : undefined,
            iavl: object?.iavl ? exports.SnapshotIAVLItem.fromAmino(object.iavl) : undefined,
            extension: object?.extension ? exports.SnapshotExtensionMeta.fromAmino(object.extension) : undefined,
            extension_payload: object?.extension_payload ? exports.SnapshotExtensionPayload.fromAmino(object.extension_payload) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.store = message.store ? exports.SnapshotStoreItem.toAmino(message.store) : undefined;
        obj.iavl = message.iavl ? exports.SnapshotIAVLItem.toAmino(message.iavl) : undefined;
        obj.extension = message.extension ? exports.SnapshotExtensionMeta.toAmino(message.extension) : undefined;
        obj.extension_payload = message.extension_payload ? exports.SnapshotExtensionPayload.toAmino(message.extension_payload) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SnapshotItem.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/SnapshotItem",
            value: exports.SnapshotItem.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.SnapshotItem.decode(message.value);
    },
    toProto(message) {
        return exports.SnapshotItem.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.store.snapshots.v1.SnapshotItem",
            value: exports.SnapshotItem.encode(message).finish()
        };
    }
};
function createBaseSnapshotStoreItem() {
    return {
        name: ""
    };
}
exports.SnapshotStoreItem = {
    typeUrl: "/cosmos.store.snapshots.v1.SnapshotStoreItem",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSnapshotStoreItem();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
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
            name: (0, helpers_1.isSet)(object.name) ? String(object.name) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSnapshotStoreItem();
        message.name = object.name ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            name: object.name
        };
    },
    toAmino(message) {
        const obj = {};
        obj.name = message.name;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SnapshotStoreItem.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/SnapshotStoreItem",
            value: exports.SnapshotStoreItem.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.SnapshotStoreItem.decode(message.value);
    },
    toProto(message) {
        return exports.SnapshotStoreItem.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.store.snapshots.v1.SnapshotStoreItem",
            value: exports.SnapshotStoreItem.encode(message).finish()
        };
    }
};
function createBaseSnapshotIAVLItem() {
    return {
        key: new Uint8Array(),
        value: new Uint8Array(),
        version: BigInt(0),
        height: 0
    };
}
exports.SnapshotIAVLItem = {
    typeUrl: "/cosmos.store.snapshots.v1.SnapshotIAVLItem",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.key.length !== 0) {
            writer.uint32(10).bytes(message.key);
        }
        if (message.value.length !== 0) {
            writer.uint32(18).bytes(message.value);
        }
        if (message.version !== BigInt(0)) {
            writer.uint32(24).int64(message.version);
        }
        if (message.height !== 0) {
            writer.uint32(32).int32(message.height);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSnapshotIAVLItem();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.bytes();
                    break;
                case 2:
                    message.value = reader.bytes();
                    break;
                case 3:
                    message.version = reader.int64();
                    break;
                case 4:
                    message.height = reader.int32();
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
            key: (0, helpers_1.isSet)(object.key) ? (0, helpers_1.bytesFromBase64)(object.key) : new Uint8Array(),
            value: (0, helpers_1.isSet)(object.value) ? (0, helpers_1.bytesFromBase64)(object.value) : new Uint8Array(),
            version: (0, helpers_1.isSet)(object.version) ? BigInt(object.version.toString()) : BigInt(0),
            height: (0, helpers_1.isSet)(object.height) ? Number(object.height) : 0
        };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = (0, helpers_1.base64FromBytes)(message.key !== undefined ? message.key : new Uint8Array()));
        message.value !== undefined && (obj.value = (0, helpers_1.base64FromBytes)(message.value !== undefined ? message.value : new Uint8Array()));
        message.version !== undefined && (obj.version = (message.version || BigInt(0)).toString());
        message.height !== undefined && (obj.height = Math.round(message.height));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSnapshotIAVLItem();
        message.key = object.key ?? new Uint8Array();
        message.value = object.value ?? new Uint8Array();
        message.version = object.version !== undefined && object.version !== null ? BigInt(object.version.toString()) : BigInt(0);
        message.height = object.height ?? 0;
        return message;
    },
    fromAmino(object) {
        return {
            key: object.key,
            value: object.value,
            version: BigInt(object.version),
            height: object.height
        };
    },
    toAmino(message) {
        const obj = {};
        obj.key = message.key;
        obj.value = message.value;
        obj.version = message.version ? message.version.toString() : undefined;
        obj.height = message.height;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SnapshotIAVLItem.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/SnapshotIAVLItem",
            value: exports.SnapshotIAVLItem.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.SnapshotIAVLItem.decode(message.value);
    },
    toProto(message) {
        return exports.SnapshotIAVLItem.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.store.snapshots.v1.SnapshotIAVLItem",
            value: exports.SnapshotIAVLItem.encode(message).finish()
        };
    }
};
function createBaseSnapshotExtensionMeta() {
    return {
        name: "",
        format: 0
    };
}
exports.SnapshotExtensionMeta = {
    typeUrl: "/cosmos.store.snapshots.v1.SnapshotExtensionMeta",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.format !== 0) {
            writer.uint32(16).uint32(message.format);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSnapshotExtensionMeta();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.format = reader.uint32();
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
            format: (0, helpers_1.isSet)(object.format) ? Number(object.format) : 0
        };
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.format !== undefined && (obj.format = Math.round(message.format));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSnapshotExtensionMeta();
        message.name = object.name ?? "";
        message.format = object.format ?? 0;
        return message;
    },
    fromAmino(object) {
        return {
            name: object.name,
            format: object.format
        };
    },
    toAmino(message) {
        const obj = {};
        obj.name = message.name;
        obj.format = message.format;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SnapshotExtensionMeta.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/SnapshotExtensionMeta",
            value: exports.SnapshotExtensionMeta.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.SnapshotExtensionMeta.decode(message.value);
    },
    toProto(message) {
        return exports.SnapshotExtensionMeta.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.store.snapshots.v1.SnapshotExtensionMeta",
            value: exports.SnapshotExtensionMeta.encode(message).finish()
        };
    }
};
function createBaseSnapshotExtensionPayload() {
    return {
        payload: new Uint8Array()
    };
}
exports.SnapshotExtensionPayload = {
    typeUrl: "/cosmos.store.snapshots.v1.SnapshotExtensionPayload",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.payload.length !== 0) {
            writer.uint32(10).bytes(message.payload);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSnapshotExtensionPayload();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.payload = reader.bytes();
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
            payload: (0, helpers_1.isSet)(object.payload) ? (0, helpers_1.bytesFromBase64)(object.payload) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.payload !== undefined && (obj.payload = (0, helpers_1.base64FromBytes)(message.payload !== undefined ? message.payload : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSnapshotExtensionPayload();
        message.payload = object.payload ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        return {
            payload: object.payload
        };
    },
    toAmino(message) {
        const obj = {};
        obj.payload = message.payload;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SnapshotExtensionPayload.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/SnapshotExtensionPayload",
            value: exports.SnapshotExtensionPayload.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.SnapshotExtensionPayload.decode(message.value);
    },
    toProto(message) {
        return exports.SnapshotExtensionPayload.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.store.snapshots.v1.SnapshotExtensionPayload",
            value: exports.SnapshotExtensionPayload.encode(message).finish()
        };
    }
};
//# sourceMappingURL=snapshot.js.map
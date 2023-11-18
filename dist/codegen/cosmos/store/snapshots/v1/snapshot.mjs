//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../../helpers";
export const protobufPackage = "cosmos.store.snapshots.v1";
function createBaseSnapshot() {
    return {
        height: BigInt(0),
        format: 0,
        chunks: 0,
        hash: new Uint8Array(),
        metadata: Metadata.fromPartial({})
    };
}
export const Snapshot = {
    typeUrl: "/cosmos.store.snapshots.v1.Snapshot",
    encode(message, writer = BinaryWriter.create()) {
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
            Metadata.encode(message.metadata, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
                    message.metadata = Metadata.decode(reader, reader.uint32());
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
            height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0),
            format: isSet(object.format) ? Number(object.format) : 0,
            chunks: isSet(object.chunks) ? Number(object.chunks) : 0,
            hash: isSet(object.hash) ? bytesFromBase64(object.hash) : new Uint8Array(),
            metadata: isSet(object.metadata) ? Metadata.fromJSON(object.metadata) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
        message.format !== undefined && (obj.format = Math.round(message.format));
        message.chunks !== undefined && (obj.chunks = Math.round(message.chunks));
        message.hash !== undefined && (obj.hash = base64FromBytes(message.hash !== undefined ? message.hash : new Uint8Array()));
        message.metadata !== undefined && (obj.metadata = message.metadata ? Metadata.toJSON(message.metadata) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSnapshot();
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        message.format = object.format ?? 0;
        message.chunks = object.chunks ?? 0;
        message.hash = object.hash ?? new Uint8Array();
        message.metadata = object.metadata !== undefined && object.metadata !== null ? Metadata.fromPartial(object.metadata) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            height: object?.height,
            format: object?.format,
            chunks: object?.chunks,
            hash: object?.hash,
            metadata: object.metadata ? Metadata.fromSDK(object.metadata) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.height = message.height;
        obj.format = message.format;
        obj.chunks = message.chunks;
        obj.hash = message.hash;
        message.metadata !== undefined && (obj.metadata = message.metadata ? Metadata.toSDK(message.metadata) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            height: BigInt(object.height),
            format: object.format,
            chunks: object.chunks,
            hash: object.hash,
            metadata: object?.metadata ? Metadata.fromAmino(object.metadata) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.height = message.height ? message.height.toString() : undefined;
        obj.format = message.format;
        obj.chunks = message.chunks;
        obj.hash = message.hash;
        obj.metadata = message.metadata ? Metadata.toAmino(message.metadata) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Snapshot.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Snapshot",
            value: Snapshot.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Snapshot.decode(message.value);
    },
    toProto(message) {
        return Snapshot.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.store.snapshots.v1.Snapshot",
            value: Snapshot.encode(message).finish()
        };
    }
};
function createBaseMetadata() {
    return {
        chunk_hashes: []
    };
}
export const Metadata = {
    typeUrl: "/cosmos.store.snapshots.v1.Metadata",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.chunk_hashes) {
            writer.uint32(10).bytes(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            chunk_hashes: Array.isArray(object?.chunk_hashes) ? object.chunk_hashes.map((e) => bytesFromBase64(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.chunk_hashes) {
            obj.chunk_hashes = message.chunk_hashes.map(e => base64FromBytes(e !== undefined ? e : new Uint8Array()));
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
    fromSDK(object) {
        return {
            chunk_hashes: Array.isArray(object?.chunk_hashes) ? object.chunk_hashes.map((e) => e) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.chunk_hashes) {
            obj.chunk_hashes = message.chunk_hashes.map(e => e);
        }
        else {
            obj.chunk_hashes = [];
        }
        return obj;
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
        return Metadata.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Metadata",
            value: Metadata.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Metadata.decode(message.value);
    },
    toProto(message) {
        return Metadata.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.store.snapshots.v1.Metadata",
            value: Metadata.encode(message).finish()
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
export const SnapshotItem = {
    typeUrl: "/cosmos.store.snapshots.v1.SnapshotItem",
    encode(message, writer = BinaryWriter.create()) {
        if (message.store !== undefined) {
            SnapshotStoreItem.encode(message.store, writer.uint32(10).fork()).ldelim();
        }
        if (message.iavl !== undefined) {
            SnapshotIAVLItem.encode(message.iavl, writer.uint32(18).fork()).ldelim();
        }
        if (message.extension !== undefined) {
            SnapshotExtensionMeta.encode(message.extension, writer.uint32(26).fork()).ldelim();
        }
        if (message.extension_payload !== undefined) {
            SnapshotExtensionPayload.encode(message.extension_payload, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSnapshotItem();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.store = SnapshotStoreItem.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.iavl = SnapshotIAVLItem.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.extension = SnapshotExtensionMeta.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.extension_payload = SnapshotExtensionPayload.decode(reader, reader.uint32());
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
            store: isSet(object.store) ? SnapshotStoreItem.fromJSON(object.store) : undefined,
            iavl: isSet(object.iavl) ? SnapshotIAVLItem.fromJSON(object.iavl) : undefined,
            extension: isSet(object.extension) ? SnapshotExtensionMeta.fromJSON(object.extension) : undefined,
            extension_payload: isSet(object.extension_payload) ? SnapshotExtensionPayload.fromJSON(object.extension_payload) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.store !== undefined && (obj.store = message.store ? SnapshotStoreItem.toJSON(message.store) : undefined);
        message.iavl !== undefined && (obj.iavl = message.iavl ? SnapshotIAVLItem.toJSON(message.iavl) : undefined);
        message.extension !== undefined && (obj.extension = message.extension ? SnapshotExtensionMeta.toJSON(message.extension) : undefined);
        message.extension_payload !== undefined && (obj.extension_payload = message.extension_payload ? SnapshotExtensionPayload.toJSON(message.extension_payload) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSnapshotItem();
        message.store = object.store !== undefined && object.store !== null ? SnapshotStoreItem.fromPartial(object.store) : undefined;
        message.iavl = object.iavl !== undefined && object.iavl !== null ? SnapshotIAVLItem.fromPartial(object.iavl) : undefined;
        message.extension = object.extension !== undefined && object.extension !== null ? SnapshotExtensionMeta.fromPartial(object.extension) : undefined;
        message.extension_payload = object.extension_payload !== undefined && object.extension_payload !== null ? SnapshotExtensionPayload.fromPartial(object.extension_payload) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            store: object.store ? SnapshotStoreItem.fromSDK(object.store) : undefined,
            iavl: object.iavl ? SnapshotIAVLItem.fromSDK(object.iavl) : undefined,
            extension: object.extension ? SnapshotExtensionMeta.fromSDK(object.extension) : undefined,
            extension_payload: object.extension_payload ? SnapshotExtensionPayload.fromSDK(object.extension_payload) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.store !== undefined && (obj.store = message.store ? SnapshotStoreItem.toSDK(message.store) : undefined);
        message.iavl !== undefined && (obj.iavl = message.iavl ? SnapshotIAVLItem.toSDK(message.iavl) : undefined);
        message.extension !== undefined && (obj.extension = message.extension ? SnapshotExtensionMeta.toSDK(message.extension) : undefined);
        message.extension_payload !== undefined && (obj.extension_payload = message.extension_payload ? SnapshotExtensionPayload.toSDK(message.extension_payload) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            store: object?.store ? SnapshotStoreItem.fromAmino(object.store) : undefined,
            iavl: object?.iavl ? SnapshotIAVLItem.fromAmino(object.iavl) : undefined,
            extension: object?.extension ? SnapshotExtensionMeta.fromAmino(object.extension) : undefined,
            extension_payload: object?.extension_payload ? SnapshotExtensionPayload.fromAmino(object.extension_payload) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.store = message.store ? SnapshotStoreItem.toAmino(message.store) : undefined;
        obj.iavl = message.iavl ? SnapshotIAVLItem.toAmino(message.iavl) : undefined;
        obj.extension = message.extension ? SnapshotExtensionMeta.toAmino(message.extension) : undefined;
        obj.extension_payload = message.extension_payload ? SnapshotExtensionPayload.toAmino(message.extension_payload) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return SnapshotItem.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/SnapshotItem",
            value: SnapshotItem.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return SnapshotItem.decode(message.value);
    },
    toProto(message) {
        return SnapshotItem.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.store.snapshots.v1.SnapshotItem",
            value: SnapshotItem.encode(message).finish()
        };
    }
};
function createBaseSnapshotStoreItem() {
    return {
        name: ""
    };
}
export const SnapshotStoreItem = {
    typeUrl: "/cosmos.store.snapshots.v1.SnapshotStoreItem",
    encode(message, writer = BinaryWriter.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            name: isSet(object.name) ? String(object.name) : ""
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
    fromSDK(object) {
        return {
            name: object?.name
        };
    },
    toSDK(message) {
        const obj = {};
        obj.name = message.name;
        return obj;
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
        return SnapshotStoreItem.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/SnapshotStoreItem",
            value: SnapshotStoreItem.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return SnapshotStoreItem.decode(message.value);
    },
    toProto(message) {
        return SnapshotStoreItem.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.store.snapshots.v1.SnapshotStoreItem",
            value: SnapshotStoreItem.encode(message).finish()
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
export const SnapshotIAVLItem = {
    typeUrl: "/cosmos.store.snapshots.v1.SnapshotIAVLItem",
    encode(message, writer = BinaryWriter.create()) {
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
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(),
            value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(),
            version: isSet(object.version) ? BigInt(object.version.toString()) : BigInt(0),
            height: isSet(object.height) ? Number(object.height) : 0
        };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
        message.value !== undefined && (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
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
    fromSDK(object) {
        return {
            key: object?.key,
            value: object?.value,
            version: object?.version,
            height: object?.height
        };
    },
    toSDK(message) {
        const obj = {};
        obj.key = message.key;
        obj.value = message.value;
        obj.version = message.version;
        obj.height = message.height;
        return obj;
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
        return SnapshotIAVLItem.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/SnapshotIAVLItem",
            value: SnapshotIAVLItem.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return SnapshotIAVLItem.decode(message.value);
    },
    toProto(message) {
        return SnapshotIAVLItem.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.store.snapshots.v1.SnapshotIAVLItem",
            value: SnapshotIAVLItem.encode(message).finish()
        };
    }
};
function createBaseSnapshotExtensionMeta() {
    return {
        name: "",
        format: 0
    };
}
export const SnapshotExtensionMeta = {
    typeUrl: "/cosmos.store.snapshots.v1.SnapshotExtensionMeta",
    encode(message, writer = BinaryWriter.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.format !== 0) {
            writer.uint32(16).uint32(message.format);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            name: isSet(object.name) ? String(object.name) : "",
            format: isSet(object.format) ? Number(object.format) : 0
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
    fromSDK(object) {
        return {
            name: object?.name,
            format: object?.format
        };
    },
    toSDK(message) {
        const obj = {};
        obj.name = message.name;
        obj.format = message.format;
        return obj;
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
        return SnapshotExtensionMeta.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/SnapshotExtensionMeta",
            value: SnapshotExtensionMeta.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return SnapshotExtensionMeta.decode(message.value);
    },
    toProto(message) {
        return SnapshotExtensionMeta.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.store.snapshots.v1.SnapshotExtensionMeta",
            value: SnapshotExtensionMeta.encode(message).finish()
        };
    }
};
function createBaseSnapshotExtensionPayload() {
    return {
        payload: new Uint8Array()
    };
}
export const SnapshotExtensionPayload = {
    typeUrl: "/cosmos.store.snapshots.v1.SnapshotExtensionPayload",
    encode(message, writer = BinaryWriter.create()) {
        if (message.payload.length !== 0) {
            writer.uint32(10).bytes(message.payload);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            payload: isSet(object.payload) ? bytesFromBase64(object.payload) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.payload !== undefined && (obj.payload = base64FromBytes(message.payload !== undefined ? message.payload : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSnapshotExtensionPayload();
        message.payload = object.payload ?? new Uint8Array();
        return message;
    },
    fromSDK(object) {
        return {
            payload: object?.payload
        };
    },
    toSDK(message) {
        const obj = {};
        obj.payload = message.payload;
        return obj;
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
        return SnapshotExtensionPayload.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/SnapshotExtensionPayload",
            value: SnapshotExtensionPayload.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return SnapshotExtensionPayload.decode(message.value);
    },
    toProto(message) {
        return SnapshotExtensionPayload.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.store.snapshots.v1.SnapshotExtensionPayload",
            value: SnapshotExtensionPayload.encode(message).finish()
        };
    }
};
//# sourceMappingURL=snapshot.js.map
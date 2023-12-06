//@ts-nocheck
import { Timestamp } from "../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { toTimestamp, fromTimestamp, isSet, fromJsonTimestamp, bytesFromBase64, base64FromBytes } from "../../../helpers";
export const protobufPackage = "cosmos.store.v1beta1";
function createBaseCommitInfo() {
    return {
        version: BigInt(0),
        store_infos: [],
        timestamp: new Date()
    };
}
export const CommitInfo = {
    typeUrl: "/cosmos.store.v1beta1.CommitInfo",
    encode(message, writer = BinaryWriter.create()) {
        if (message.version !== BigInt(0)) {
            writer.uint32(8).int64(message.version);
        }
        for (const v of message.store_infos) {
            StoreInfo.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.timestamp !== undefined) {
            Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCommitInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.version = reader.int64();
                    break;
                case 2:
                    message.store_infos.push(StoreInfo.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
            version: isSet(object.version) ? BigInt(object.version.toString()) : BigInt(0),
            store_infos: Array.isArray(object?.store_infos) ? object.store_infos.map((e) => StoreInfo.fromJSON(e)) : [],
            timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.version !== undefined && (obj.version = (message.version || BigInt(0)).toString());
        if (message.store_infos) {
            obj.store_infos = message.store_infos.map(e => e ? StoreInfo.toJSON(e) : undefined);
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
        message.store_infos = object.store_infos?.map(e => StoreInfo.fromPartial(e)) || [];
        message.timestamp = object.timestamp ?? undefined;
        return message;
    },
    fromAmino(object) {
        return {
            version: BigInt(object.version),
            store_infos: Array.isArray(object?.store_infos) ? object.store_infos.map((e) => StoreInfo.fromAmino(e)) : [],
            timestamp: object?.timestamp ? fromTimestamp(Timestamp.fromAmino(object.timestamp)) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.version = message.version ? message.version.toString() : undefined;
        if (message.store_infos) {
            obj.store_infos = message.store_infos.map(e => e ? StoreInfo.toAmino(e) : undefined);
        }
        else {
            obj.store_infos = [];
        }
        obj.timestamp = message.timestamp ? Timestamp.toAmino(toTimestamp(message.timestamp)) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return CommitInfo.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/CommitInfo",
            value: CommitInfo.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return CommitInfo.decode(message.value);
    },
    toProto(message) {
        return CommitInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.store.v1beta1.CommitInfo",
            value: CommitInfo.encode(message).finish()
        };
    }
};
function createBaseStoreInfo() {
    return {
        name: "",
        commit_id: CommitID.fromPartial({})
    };
}
export const StoreInfo = {
    typeUrl: "/cosmos.store.v1beta1.StoreInfo",
    encode(message, writer = BinaryWriter.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.commit_id !== undefined) {
            CommitID.encode(message.commit_id, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStoreInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.commit_id = CommitID.decode(reader, reader.uint32());
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
            commit_id: isSet(object.commit_id) ? CommitID.fromJSON(object.commit_id) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.commit_id !== undefined && (obj.commit_id = message.commit_id ? CommitID.toJSON(message.commit_id) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseStoreInfo();
        message.name = object.name ?? "";
        message.commit_id = object.commit_id !== undefined && object.commit_id !== null ? CommitID.fromPartial(object.commit_id) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            name: object.name,
            commit_id: object?.commit_id ? CommitID.fromAmino(object.commit_id) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.name = message.name;
        obj.commit_id = message.commit_id ? CommitID.toAmino(message.commit_id) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return StoreInfo.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/StoreInfo",
            value: StoreInfo.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return StoreInfo.decode(message.value);
    },
    toProto(message) {
        return StoreInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.store.v1beta1.StoreInfo",
            value: StoreInfo.encode(message).finish()
        };
    }
};
function createBaseCommitID() {
    return {
        version: BigInt(0),
        hash: new Uint8Array()
    };
}
export const CommitID = {
    typeUrl: "/cosmos.store.v1beta1.CommitID",
    encode(message, writer = BinaryWriter.create()) {
        if (message.version !== BigInt(0)) {
            writer.uint32(8).int64(message.version);
        }
        if (message.hash.length !== 0) {
            writer.uint32(18).bytes(message.hash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            version: isSet(object.version) ? BigInt(object.version.toString()) : BigInt(0),
            hash: isSet(object.hash) ? bytesFromBase64(object.hash) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.version !== undefined && (obj.version = (message.version || BigInt(0)).toString());
        message.hash !== undefined && (obj.hash = base64FromBytes(message.hash !== undefined ? message.hash : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseCommitID();
        message.version = object.version !== undefined && object.version !== null ? BigInt(object.version.toString()) : BigInt(0);
        message.hash = object.hash ?? new Uint8Array();
        return message;
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
        return CommitID.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/CommitID",
            value: CommitID.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return CommitID.decode(message.value);
    },
    toProto(message) {
        return CommitID.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.store.v1beta1.CommitID",
            value: CommitID.encode(message).finish()
        };
    }
};
//# sourceMappingURL=commit_info.js.map
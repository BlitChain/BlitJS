//@ts-nocheck
import { Any } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export const protobufPackage = "cosmos.nft.v1beta1";
function createBaseClass() {
    return {
        id: "",
        name: "",
        symbol: "",
        description: "",
        uri: "",
        uri_hash: "",
        data: undefined
    };
}
export const Class = {
    typeUrl: "/cosmos.nft.v1beta1.Class",
    encode(message, writer = BinaryWriter.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.symbol !== "") {
            writer.uint32(26).string(message.symbol);
        }
        if (message.description !== "") {
            writer.uint32(34).string(message.description);
        }
        if (message.uri !== "") {
            writer.uint32(42).string(message.uri);
        }
        if (message.uri_hash !== "") {
            writer.uint32(50).string(message.uri_hash);
        }
        if (message.data !== undefined) {
            Any.encode(message.data, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseClass();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.symbol = reader.string();
                    break;
                case 4:
                    message.description = reader.string();
                    break;
                case 5:
                    message.uri = reader.string();
                    break;
                case 6:
                    message.uri_hash = reader.string();
                    break;
                case 7:
                    message.data = Any.decode(reader, reader.uint32());
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
            id: isSet(object.id) ? String(object.id) : "",
            name: isSet(object.name) ? String(object.name) : "",
            symbol: isSet(object.symbol) ? String(object.symbol) : "",
            description: isSet(object.description) ? String(object.description) : "",
            uri: isSet(object.uri) ? String(object.uri) : "",
            uri_hash: isSet(object.uri_hash) ? String(object.uri_hash) : "",
            data: isSet(object.data) ? Any.fromJSON(object.data) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.name !== undefined && (obj.name = message.name);
        message.symbol !== undefined && (obj.symbol = message.symbol);
        message.description !== undefined && (obj.description = message.description);
        message.uri !== undefined && (obj.uri = message.uri);
        message.uri_hash !== undefined && (obj.uri_hash = message.uri_hash);
        message.data !== undefined && (obj.data = message.data ? Any.toJSON(message.data) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseClass();
        message.id = object.id ?? "";
        message.name = object.name ?? "";
        message.symbol = object.symbol ?? "";
        message.description = object.description ?? "";
        message.uri = object.uri ?? "";
        message.uri_hash = object.uri_hash ?? "";
        message.data = object.data !== undefined && object.data !== null ? Any.fromPartial(object.data) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseClass();
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        if (object.symbol !== undefined && object.symbol !== null) {
            message.symbol = object.symbol;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        if (object.uri !== undefined && object.uri !== null) {
            message.uri = object.uri;
        }
        if (object.uri_hash !== undefined && object.uri_hash !== null) {
            message.uri_hash = object.uri_hash;
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = Any.fromAmino(object.data);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id;
        obj.name = message.name;
        obj.symbol = message.symbol;
        obj.description = message.description;
        obj.uri = message.uri;
        obj.uri_hash = message.uri_hash;
        obj.data = message.data ? Any.toAmino(message.data) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Class.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Class",
            value: Class.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Class.decode(message.value);
    },
    toProto(message) {
        return Class.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.nft.v1beta1.Class",
            value: Class.encode(message).finish()
        };
    }
};
function createBaseNFT() {
    return {
        class_id: "",
        id: "",
        uri: "",
        uri_hash: "",
        data: undefined
    };
}
export const NFT = {
    typeUrl: "/cosmos.nft.v1beta1.NFT",
    encode(message, writer = BinaryWriter.create()) {
        if (message.class_id !== "") {
            writer.uint32(10).string(message.class_id);
        }
        if (message.id !== "") {
            writer.uint32(18).string(message.id);
        }
        if (message.uri !== "") {
            writer.uint32(26).string(message.uri);
        }
        if (message.uri_hash !== "") {
            writer.uint32(34).string(message.uri_hash);
        }
        if (message.data !== undefined) {
            Any.encode(message.data, writer.uint32(82).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseNFT();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.class_id = reader.string();
                    break;
                case 2:
                    message.id = reader.string();
                    break;
                case 3:
                    message.uri = reader.string();
                    break;
                case 4:
                    message.uri_hash = reader.string();
                    break;
                case 10:
                    message.data = Any.decode(reader, reader.uint32());
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
            class_id: isSet(object.class_id) ? String(object.class_id) : "",
            id: isSet(object.id) ? String(object.id) : "",
            uri: isSet(object.uri) ? String(object.uri) : "",
            uri_hash: isSet(object.uri_hash) ? String(object.uri_hash) : "",
            data: isSet(object.data) ? Any.fromJSON(object.data) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.class_id !== undefined && (obj.class_id = message.class_id);
        message.id !== undefined && (obj.id = message.id);
        message.uri !== undefined && (obj.uri = message.uri);
        message.uri_hash !== undefined && (obj.uri_hash = message.uri_hash);
        message.data !== undefined && (obj.data = message.data ? Any.toJSON(message.data) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseNFT();
        message.class_id = object.class_id ?? "";
        message.id = object.id ?? "";
        message.uri = object.uri ?? "";
        message.uri_hash = object.uri_hash ?? "";
        message.data = object.data !== undefined && object.data !== null ? Any.fromPartial(object.data) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseNFT();
        if (object.class_id !== undefined && object.class_id !== null) {
            message.class_id = object.class_id;
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        if (object.uri !== undefined && object.uri !== null) {
            message.uri = object.uri;
        }
        if (object.uri_hash !== undefined && object.uri_hash !== null) {
            message.uri_hash = object.uri_hash;
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = Any.fromAmino(object.data);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.class_id = message.class_id;
        obj.id = message.id;
        obj.uri = message.uri;
        obj.uri_hash = message.uri_hash;
        obj.data = message.data ? Any.toAmino(message.data) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return NFT.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/NFT",
            value: NFT.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return NFT.decode(message.value);
    },
    toProto(message) {
        return NFT.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.nft.v1beta1.NFT",
            value: NFT.encode(message).finish()
        };
    }
};
//# sourceMappingURL=nft.js.map
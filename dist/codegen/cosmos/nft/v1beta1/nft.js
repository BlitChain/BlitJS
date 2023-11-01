"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NFT = exports.Class = exports.protobufPackage = void 0;
//@ts-nocheck
const any_1 = require("../../../google/protobuf/any");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "cosmos.nft.v1beta1";
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
exports.Class = {
    typeUrl: "/cosmos.nft.v1beta1.Class",
    encode(message, writer = binary_1.BinaryWriter.create()) {
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
            any_1.Any.encode(message.data, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
                    message.data = any_1.Any.decode(reader, reader.uint32());
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
            id: (0, helpers_1.isSet)(object.id) ? String(object.id) : "",
            name: (0, helpers_1.isSet)(object.name) ? String(object.name) : "",
            symbol: (0, helpers_1.isSet)(object.symbol) ? String(object.symbol) : "",
            description: (0, helpers_1.isSet)(object.description) ? String(object.description) : "",
            uri: (0, helpers_1.isSet)(object.uri) ? String(object.uri) : "",
            uri_hash: (0, helpers_1.isSet)(object.uri_hash) ? String(object.uri_hash) : "",
            data: (0, helpers_1.isSet)(object.data) ? any_1.Any.fromJSON(object.data) : undefined
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
        message.data !== undefined && (obj.data = message.data ? any_1.Any.toJSON(message.data) : undefined);
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
        message.data = object.data !== undefined && object.data !== null ? any_1.Any.fromPartial(object.data) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            id: object?.id,
            name: object?.name,
            symbol: object?.symbol,
            description: object?.description,
            uri: object?.uri,
            uri_hash: object?.uri_hash,
            data: object.data ? any_1.Any.fromSDK(object.data) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.id = message.id;
        obj.name = message.name;
        obj.symbol = message.symbol;
        obj.description = message.description;
        obj.uri = message.uri;
        obj.uri_hash = message.uri_hash;
        message.data !== undefined && (obj.data = message.data ? any_1.Any.toSDK(message.data) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            id: object.id,
            name: object.name,
            symbol: object.symbol,
            description: object.description,
            uri: object.uri,
            uri_hash: object.uri_hash,
            data: object?.data ? any_1.Any.fromAmino(object.data) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id;
        obj.name = message.name;
        obj.symbol = message.symbol;
        obj.description = message.description;
        obj.uri = message.uri;
        obj.uri_hash = message.uri_hash;
        obj.data = message.data ? any_1.Any.toAmino(message.data) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Class.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Class",
            value: exports.Class.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Class.decode(message.value);
    },
    toProto(message) {
        return exports.Class.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.nft.v1beta1.Class",
            value: exports.Class.encode(message).finish()
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
exports.NFT = {
    typeUrl: "/cosmos.nft.v1beta1.NFT",
    encode(message, writer = binary_1.BinaryWriter.create()) {
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
            any_1.Any.encode(message.data, writer.uint32(82).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
                    message.data = any_1.Any.decode(reader, reader.uint32());
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
            class_id: (0, helpers_1.isSet)(object.class_id) ? String(object.class_id) : "",
            id: (0, helpers_1.isSet)(object.id) ? String(object.id) : "",
            uri: (0, helpers_1.isSet)(object.uri) ? String(object.uri) : "",
            uri_hash: (0, helpers_1.isSet)(object.uri_hash) ? String(object.uri_hash) : "",
            data: (0, helpers_1.isSet)(object.data) ? any_1.Any.fromJSON(object.data) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.class_id !== undefined && (obj.class_id = message.class_id);
        message.id !== undefined && (obj.id = message.id);
        message.uri !== undefined && (obj.uri = message.uri);
        message.uri_hash !== undefined && (obj.uri_hash = message.uri_hash);
        message.data !== undefined && (obj.data = message.data ? any_1.Any.toJSON(message.data) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseNFT();
        message.class_id = object.class_id ?? "";
        message.id = object.id ?? "";
        message.uri = object.uri ?? "";
        message.uri_hash = object.uri_hash ?? "";
        message.data = object.data !== undefined && object.data !== null ? any_1.Any.fromPartial(object.data) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            class_id: object?.class_id,
            id: object?.id,
            uri: object?.uri,
            uri_hash: object?.uri_hash,
            data: object.data ? any_1.Any.fromSDK(object.data) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.class_id = message.class_id;
        obj.id = message.id;
        obj.uri = message.uri;
        obj.uri_hash = message.uri_hash;
        message.data !== undefined && (obj.data = message.data ? any_1.Any.toSDK(message.data) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            class_id: object.class_id,
            id: object.id,
            uri: object.uri,
            uri_hash: object.uri_hash,
            data: object?.data ? any_1.Any.fromAmino(object.data) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.class_id = message.class_id;
        obj.id = message.id;
        obj.uri = message.uri;
        obj.uri_hash = message.uri_hash;
        obj.data = message.data ? any_1.Any.toAmino(message.data) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.NFT.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/NFT",
            value: exports.NFT.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.NFT.decode(message.value);
    },
    toProto(message) {
        return exports.NFT.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.nft.v1beta1.NFT",
            value: exports.NFT.encode(message).finish()
        };
    }
};
//# sourceMappingURL=nft.js.map
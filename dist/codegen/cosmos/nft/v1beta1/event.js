"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventBurn = exports.EventMint = exports.EventSend = exports.protobufPackage = void 0;
//@ts-nocheck
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "cosmos.nft.v1beta1";
function createBaseEventSend() {
    return {
        class_id: "",
        id: "",
        sender: "",
        receiver: ""
    };
}
exports.EventSend = {
    typeUrl: "/cosmos.nft.v1beta1.EventSend",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.class_id !== "") {
            writer.uint32(10).string(message.class_id);
        }
        if (message.id !== "") {
            writer.uint32(18).string(message.id);
        }
        if (message.sender !== "") {
            writer.uint32(26).string(message.sender);
        }
        if (message.receiver !== "") {
            writer.uint32(34).string(message.receiver);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventSend();
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
                    message.sender = reader.string();
                    break;
                case 4:
                    message.receiver = reader.string();
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
            sender: (0, helpers_1.isSet)(object.sender) ? String(object.sender) : "",
            receiver: (0, helpers_1.isSet)(object.receiver) ? String(object.receiver) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.class_id !== undefined && (obj.class_id = message.class_id);
        message.id !== undefined && (obj.id = message.id);
        message.sender !== undefined && (obj.sender = message.sender);
        message.receiver !== undefined && (obj.receiver = message.receiver);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEventSend();
        message.class_id = object.class_id ?? "";
        message.id = object.id ?? "";
        message.sender = object.sender ?? "";
        message.receiver = object.receiver ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            class_id: object.class_id,
            id: object.id,
            sender: object.sender,
            receiver: object.receiver
        };
    },
    toAmino(message) {
        const obj = {};
        obj.class_id = message.class_id;
        obj.id = message.id;
        obj.sender = message.sender;
        obj.receiver = message.receiver;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EventSend.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/EventSend",
            value: exports.EventSend.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.EventSend.decode(message.value);
    },
    toProto(message) {
        return exports.EventSend.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.nft.v1beta1.EventSend",
            value: exports.EventSend.encode(message).finish()
        };
    }
};
function createBaseEventMint() {
    return {
        class_id: "",
        id: "",
        owner: ""
    };
}
exports.EventMint = {
    typeUrl: "/cosmos.nft.v1beta1.EventMint",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.class_id !== "") {
            writer.uint32(10).string(message.class_id);
        }
        if (message.id !== "") {
            writer.uint32(18).string(message.id);
        }
        if (message.owner !== "") {
            writer.uint32(26).string(message.owner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventMint();
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
                    message.owner = reader.string();
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
            owner: (0, helpers_1.isSet)(object.owner) ? String(object.owner) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.class_id !== undefined && (obj.class_id = message.class_id);
        message.id !== undefined && (obj.id = message.id);
        message.owner !== undefined && (obj.owner = message.owner);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEventMint();
        message.class_id = object.class_id ?? "";
        message.id = object.id ?? "";
        message.owner = object.owner ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            class_id: object.class_id,
            id: object.id,
            owner: object.owner
        };
    },
    toAmino(message) {
        const obj = {};
        obj.class_id = message.class_id;
        obj.id = message.id;
        obj.owner = message.owner;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EventMint.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/EventMint",
            value: exports.EventMint.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.EventMint.decode(message.value);
    },
    toProto(message) {
        return exports.EventMint.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.nft.v1beta1.EventMint",
            value: exports.EventMint.encode(message).finish()
        };
    }
};
function createBaseEventBurn() {
    return {
        class_id: "",
        id: "",
        owner: ""
    };
}
exports.EventBurn = {
    typeUrl: "/cosmos.nft.v1beta1.EventBurn",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.class_id !== "") {
            writer.uint32(10).string(message.class_id);
        }
        if (message.id !== "") {
            writer.uint32(18).string(message.id);
        }
        if (message.owner !== "") {
            writer.uint32(26).string(message.owner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventBurn();
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
                    message.owner = reader.string();
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
            owner: (0, helpers_1.isSet)(object.owner) ? String(object.owner) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.class_id !== undefined && (obj.class_id = message.class_id);
        message.id !== undefined && (obj.id = message.id);
        message.owner !== undefined && (obj.owner = message.owner);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEventBurn();
        message.class_id = object.class_id ?? "";
        message.id = object.id ?? "";
        message.owner = object.owner ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            class_id: object.class_id,
            id: object.id,
            owner: object.owner
        };
    },
    toAmino(message) {
        const obj = {};
        obj.class_id = message.class_id;
        obj.id = message.id;
        obj.owner = message.owner;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EventBurn.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/EventBurn",
            value: exports.EventBurn.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.EventBurn.decode(message.value);
    },
    toProto(message) {
        return exports.EventBurn.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.nft.v1beta1.EventBurn",
            value: exports.EventBurn.encode(message).finish()
        };
    }
};
//# sourceMappingURL=event.js.map
//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export const protobufPackage = "cosmos.nft.v1beta1";
function createBaseEventSend() {
    return {
        class_id: "",
        id: "",
        sender: "",
        receiver: ""
    };
}
export const EventSend = {
    typeUrl: "/cosmos.nft.v1beta1.EventSend",
    aminoType: "cosmos-sdk/EventSend",
    is(o) {
        return o && (o.$typeUrl === EventSend.typeUrl || typeof o.class_id === "string" && typeof o.id === "string" && typeof o.sender === "string" && typeof o.receiver === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === EventSend.typeUrl || typeof o.class_id === "string" && typeof o.id === "string" && typeof o.sender === "string" && typeof o.receiver === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === EventSend.typeUrl || typeof o.class_id === "string" && typeof o.id === "string" && typeof o.sender === "string" && typeof o.receiver === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
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
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            class_id: isSet(object.class_id) ? String(object.class_id) : "",
            id: isSet(object.id) ? String(object.id) : "",
            sender: isSet(object.sender) ? String(object.sender) : "",
            receiver: isSet(object.receiver) ? String(object.receiver) : ""
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
        const message = createBaseEventSend();
        if (object.class_id !== undefined && object.class_id !== null) {
            message.class_id = object.class_id;
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.receiver !== undefined && object.receiver !== null) {
            message.receiver = object.receiver;
        }
        return message;
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
        return EventSend.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/EventSend",
            value: EventSend.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return EventSend.decode(message.value);
    },
    toProto(message) {
        return EventSend.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.nft.v1beta1.EventSend",
            value: EventSend.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(EventSend.typeUrl, EventSend);
GlobalDecoderRegistry.registerAminoProtoMapping(EventSend.aminoType, EventSend.typeUrl);
function createBaseEventMint() {
    return {
        class_id: "",
        id: "",
        owner: ""
    };
}
export const EventMint = {
    typeUrl: "/cosmos.nft.v1beta1.EventMint",
    aminoType: "cosmos-sdk/EventMint",
    is(o) {
        return o && (o.$typeUrl === EventMint.typeUrl || typeof o.class_id === "string" && typeof o.id === "string" && typeof o.owner === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === EventMint.typeUrl || typeof o.class_id === "string" && typeof o.id === "string" && typeof o.owner === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === EventMint.typeUrl || typeof o.class_id === "string" && typeof o.id === "string" && typeof o.owner === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
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
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            class_id: isSet(object.class_id) ? String(object.class_id) : "",
            id: isSet(object.id) ? String(object.id) : "",
            owner: isSet(object.owner) ? String(object.owner) : ""
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
        const message = createBaseEventMint();
        if (object.class_id !== undefined && object.class_id !== null) {
            message.class_id = object.class_id;
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.class_id = message.class_id;
        obj.id = message.id;
        obj.owner = message.owner;
        return obj;
    },
    fromAminoMsg(object) {
        return EventMint.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/EventMint",
            value: EventMint.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return EventMint.decode(message.value);
    },
    toProto(message) {
        return EventMint.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.nft.v1beta1.EventMint",
            value: EventMint.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(EventMint.typeUrl, EventMint);
GlobalDecoderRegistry.registerAminoProtoMapping(EventMint.aminoType, EventMint.typeUrl);
function createBaseEventBurn() {
    return {
        class_id: "",
        id: "",
        owner: ""
    };
}
export const EventBurn = {
    typeUrl: "/cosmos.nft.v1beta1.EventBurn",
    aminoType: "cosmos-sdk/EventBurn",
    is(o) {
        return o && (o.$typeUrl === EventBurn.typeUrl || typeof o.class_id === "string" && typeof o.id === "string" && typeof o.owner === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === EventBurn.typeUrl || typeof o.class_id === "string" && typeof o.id === "string" && typeof o.owner === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === EventBurn.typeUrl || typeof o.class_id === "string" && typeof o.id === "string" && typeof o.owner === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
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
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            class_id: isSet(object.class_id) ? String(object.class_id) : "",
            id: isSet(object.id) ? String(object.id) : "",
            owner: isSet(object.owner) ? String(object.owner) : ""
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
        const message = createBaseEventBurn();
        if (object.class_id !== undefined && object.class_id !== null) {
            message.class_id = object.class_id;
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.class_id = message.class_id;
        obj.id = message.id;
        obj.owner = message.owner;
        return obj;
    },
    fromAminoMsg(object) {
        return EventBurn.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/EventBurn",
            value: EventBurn.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return EventBurn.decode(message.value);
    },
    toProto(message) {
        return EventBurn.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.nft.v1beta1.EventBurn",
            value: EventBurn.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(EventBurn.typeUrl, EventBurn);
GlobalDecoderRegistry.registerAminoProtoMapping(EventBurn.aminoType, EventBurn.typeUrl);
//# sourceMappingURL=event.js.map
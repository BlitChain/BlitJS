//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export const protobufPackage = "cosmos.nft.v1beta1";
function createBaseMsgSend() {
    return {
        class_id: "",
        id: "",
        sender: "",
        receiver: ""
    };
}
export const MsgSend = {
    typeUrl: "/cosmos.nft.v1beta1.MsgSend",
    aminoType: "cosmos-sdk/MsgNFTSend",
    is(o) {
        return o && (o.$typeUrl === MsgSend.typeUrl || typeof o.class_id === "string" && typeof o.id === "string" && typeof o.sender === "string" && typeof o.receiver === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === MsgSend.typeUrl || typeof o.class_id === "string" && typeof o.id === "string" && typeof o.sender === "string" && typeof o.receiver === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === MsgSend.typeUrl || typeof o.class_id === "string" && typeof o.id === "string" && typeof o.sender === "string" && typeof o.receiver === "string");
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
        const message = createBaseMsgSend();
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
        const message = createBaseMsgSend();
        message.class_id = object.class_id ?? "";
        message.id = object.id ?? "";
        message.sender = object.sender ?? "";
        message.receiver = object.receiver ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgSend();
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
        return MsgSend.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgNFTSend",
            value: MsgSend.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgSend.decode(message.value);
    },
    toProto(message) {
        return MsgSend.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.nft.v1beta1.MsgSend",
            value: MsgSend.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgSend.typeUrl, MsgSend);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgSend.aminoType, MsgSend.typeUrl);
function createBaseMsgSendResponse() {
    return {};
}
export const MsgSendResponse = {
    typeUrl: "/cosmos.nft.v1beta1.MsgSendResponse",
    aminoType: "cosmos-sdk/MsgSendResponse",
    is(o) {
        return o && o.$typeUrl === MsgSendResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === MsgSendResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === MsgSendResponse.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSendResponse();
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
        const message = createBaseMsgSendResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgSendResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgSendResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgSendResponse",
            value: MsgSendResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgSendResponse.decode(message.value);
    },
    toProto(message) {
        return MsgSendResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.nft.v1beta1.MsgSendResponse",
            value: MsgSendResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgSendResponse.typeUrl, MsgSendResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgSendResponse.aminoType, MsgSendResponse.typeUrl);
//# sourceMappingURL=tx.js.map
//@ts-nocheck
import { Channel, Packet } from "./channel";
import { Height } from "../../client/v1/client";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../../helpers";
import { GlobalDecoderRegistry } from "../../../../registry";
export const protobufPackage = "ibc.core.channel.v1";
/** ResponseResultType defines the possible outcomes of the execution of a message */
export var ResponseResultType;
(function (ResponseResultType) {
    /** RESPONSE_RESULT_TYPE_UNSPECIFIED - Default zero value enumeration */
    ResponseResultType[ResponseResultType["RESPONSE_RESULT_TYPE_UNSPECIFIED"] = 0] = "RESPONSE_RESULT_TYPE_UNSPECIFIED";
    /** RESPONSE_RESULT_TYPE_NOOP - The message did not call the IBC application callbacks (because, for example, the packet had already been relayed) */
    ResponseResultType[ResponseResultType["RESPONSE_RESULT_TYPE_NOOP"] = 1] = "RESPONSE_RESULT_TYPE_NOOP";
    /** RESPONSE_RESULT_TYPE_SUCCESS - The message was executed successfully */
    ResponseResultType[ResponseResultType["RESPONSE_RESULT_TYPE_SUCCESS"] = 2] = "RESPONSE_RESULT_TYPE_SUCCESS";
    ResponseResultType[ResponseResultType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ResponseResultType || (ResponseResultType = {}));
export const ResponseResultTypeSDKType = ResponseResultType;
export const ResponseResultTypeAmino = ResponseResultType;
export function responseResultTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "RESPONSE_RESULT_TYPE_UNSPECIFIED":
            return ResponseResultType.RESPONSE_RESULT_TYPE_UNSPECIFIED;
        case 1:
        case "RESPONSE_RESULT_TYPE_NOOP":
            return ResponseResultType.RESPONSE_RESULT_TYPE_NOOP;
        case 2:
        case "RESPONSE_RESULT_TYPE_SUCCESS":
            return ResponseResultType.RESPONSE_RESULT_TYPE_SUCCESS;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ResponseResultType.UNRECOGNIZED;
    }
}
export function responseResultTypeToJSON(object) {
    switch (object) {
        case ResponseResultType.RESPONSE_RESULT_TYPE_UNSPECIFIED:
            return "RESPONSE_RESULT_TYPE_UNSPECIFIED";
        case ResponseResultType.RESPONSE_RESULT_TYPE_NOOP:
            return "RESPONSE_RESULT_TYPE_NOOP";
        case ResponseResultType.RESPONSE_RESULT_TYPE_SUCCESS:
            return "RESPONSE_RESULT_TYPE_SUCCESS";
        case ResponseResultType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseMsgChannelOpenInit() {
    return {
        port_id: "",
        channel: Channel.fromPartial({}),
        signer: ""
    };
}
export const MsgChannelOpenInit = {
    typeUrl: "/ibc.core.channel.v1.MsgChannelOpenInit",
    aminoType: "cosmos-sdk/MsgChannelOpenInit",
    is(o) {
        return o && (o.$typeUrl === MsgChannelOpenInit.typeUrl || typeof o.port_id === "string" && Channel.is(o.channel) && typeof o.signer === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === MsgChannelOpenInit.typeUrl || typeof o.port_id === "string" && Channel.isSDK(o.channel) && typeof o.signer === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === MsgChannelOpenInit.typeUrl || typeof o.port_id === "string" && Channel.isAmino(o.channel) && typeof o.signer === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.port_id !== "") {
            writer.uint32(10).string(message.port_id);
        }
        if (message.channel !== undefined) {
            Channel.encode(message.channel, writer.uint32(18).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(26).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelOpenInit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.port_id = reader.string();
                    break;
                case 2:
                    message.channel = Channel.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.signer = reader.string();
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
            port_id: isSet(object.port_id) ? String(object.port_id) : "",
            channel: isSet(object.channel) ? Channel.fromJSON(object.channel) : undefined,
            signer: isSet(object.signer) ? String(object.signer) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.port_id !== undefined && (obj.port_id = message.port_id);
        message.channel !== undefined && (obj.channel = message.channel ? Channel.toJSON(message.channel) : undefined);
        message.signer !== undefined && (obj.signer = message.signer);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgChannelOpenInit();
        message.port_id = object.port_id ?? "";
        message.channel = object.channel !== undefined && object.channel !== null ? Channel.fromPartial(object.channel) : undefined;
        message.signer = object.signer ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgChannelOpenInit();
        if (object.port_id !== undefined && object.port_id !== null) {
            message.port_id = object.port_id;
        }
        if (object.channel !== undefined && object.channel !== null) {
            message.channel = Channel.fromAmino(object.channel);
        }
        if (object.signer !== undefined && object.signer !== null) {
            message.signer = object.signer;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.port_id = message.port_id;
        obj.channel = message.channel ? Channel.toAmino(message.channel) : undefined;
        obj.signer = message.signer;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgChannelOpenInit.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgChannelOpenInit",
            value: MsgChannelOpenInit.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgChannelOpenInit.decode(message.value);
    },
    toProto(message) {
        return MsgChannelOpenInit.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgChannelOpenInit",
            value: MsgChannelOpenInit.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgChannelOpenInit.typeUrl, MsgChannelOpenInit);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgChannelOpenInit.aminoType, MsgChannelOpenInit.typeUrl);
function createBaseMsgChannelOpenInitResponse() {
    return {
        channel_id: "",
        version: ""
    };
}
export const MsgChannelOpenInitResponse = {
    typeUrl: "/ibc.core.channel.v1.MsgChannelOpenInitResponse",
    aminoType: "cosmos-sdk/MsgChannelOpenInitResponse",
    is(o) {
        return o && (o.$typeUrl === MsgChannelOpenInitResponse.typeUrl || typeof o.channel_id === "string" && typeof o.version === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === MsgChannelOpenInitResponse.typeUrl || typeof o.channel_id === "string" && typeof o.version === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === MsgChannelOpenInitResponse.typeUrl || typeof o.channel_id === "string" && typeof o.version === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.channel_id !== "") {
            writer.uint32(10).string(message.channel_id);
        }
        if (message.version !== "") {
            writer.uint32(18).string(message.version);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelOpenInitResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.channel_id = reader.string();
                    break;
                case 2:
                    message.version = reader.string();
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
            channel_id: isSet(object.channel_id) ? String(object.channel_id) : "",
            version: isSet(object.version) ? String(object.version) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.channel_id !== undefined && (obj.channel_id = message.channel_id);
        message.version !== undefined && (obj.version = message.version);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgChannelOpenInitResponse();
        message.channel_id = object.channel_id ?? "";
        message.version = object.version ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgChannelOpenInitResponse();
        if (object.channel_id !== undefined && object.channel_id !== null) {
            message.channel_id = object.channel_id;
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = object.version;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.channel_id = message.channel_id;
        obj.version = message.version;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgChannelOpenInitResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgChannelOpenInitResponse",
            value: MsgChannelOpenInitResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgChannelOpenInitResponse.decode(message.value);
    },
    toProto(message) {
        return MsgChannelOpenInitResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgChannelOpenInitResponse",
            value: MsgChannelOpenInitResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgChannelOpenInitResponse.typeUrl, MsgChannelOpenInitResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgChannelOpenInitResponse.aminoType, MsgChannelOpenInitResponse.typeUrl);
function createBaseMsgChannelOpenTry() {
    return {
        port_id: "",
        previous_channel_id: "",
        channel: Channel.fromPartial({}),
        counterparty_version: "",
        proof_init: new Uint8Array(),
        proof_height: Height.fromPartial({}),
        signer: ""
    };
}
export const MsgChannelOpenTry = {
    typeUrl: "/ibc.core.channel.v1.MsgChannelOpenTry",
    aminoType: "cosmos-sdk/MsgChannelOpenTry",
    is(o) {
        return o && (o.$typeUrl === MsgChannelOpenTry.typeUrl || typeof o.port_id === "string" && typeof o.previous_channel_id === "string" && Channel.is(o.channel) && typeof o.counterparty_version === "string" && (o.proof_init instanceof Uint8Array || typeof o.proof_init === "string") && Height.is(o.proof_height) && typeof o.signer === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === MsgChannelOpenTry.typeUrl || typeof o.port_id === "string" && typeof o.previous_channel_id === "string" && Channel.isSDK(o.channel) && typeof o.counterparty_version === "string" && (o.proof_init instanceof Uint8Array || typeof o.proof_init === "string") && Height.isSDK(o.proof_height) && typeof o.signer === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === MsgChannelOpenTry.typeUrl || typeof o.port_id === "string" && typeof o.previous_channel_id === "string" && Channel.isAmino(o.channel) && typeof o.counterparty_version === "string" && (o.proof_init instanceof Uint8Array || typeof o.proof_init === "string") && Height.isAmino(o.proof_height) && typeof o.signer === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.port_id !== "") {
            writer.uint32(10).string(message.port_id);
        }
        if (message.previous_channel_id !== "") {
            writer.uint32(18).string(message.previous_channel_id);
        }
        if (message.channel !== undefined) {
            Channel.encode(message.channel, writer.uint32(26).fork()).ldelim();
        }
        if (message.counterparty_version !== "") {
            writer.uint32(34).string(message.counterparty_version);
        }
        if (message.proof_init.length !== 0) {
            writer.uint32(42).bytes(message.proof_init);
        }
        if (message.proof_height !== undefined) {
            Height.encode(message.proof_height, writer.uint32(50).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(58).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelOpenTry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.port_id = reader.string();
                    break;
                case 2:
                    message.previous_channel_id = reader.string();
                    break;
                case 3:
                    message.channel = Channel.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.counterparty_version = reader.string();
                    break;
                case 5:
                    message.proof_init = reader.bytes();
                    break;
                case 6:
                    message.proof_height = Height.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.signer = reader.string();
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
            port_id: isSet(object.port_id) ? String(object.port_id) : "",
            previous_channel_id: isSet(object.previous_channel_id) ? String(object.previous_channel_id) : "",
            channel: isSet(object.channel) ? Channel.fromJSON(object.channel) : undefined,
            counterparty_version: isSet(object.counterparty_version) ? String(object.counterparty_version) : "",
            proof_init: isSet(object.proof_init) ? bytesFromBase64(object.proof_init) : new Uint8Array(),
            proof_height: isSet(object.proof_height) ? Height.fromJSON(object.proof_height) : undefined,
            signer: isSet(object.signer) ? String(object.signer) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.port_id !== undefined && (obj.port_id = message.port_id);
        message.previous_channel_id !== undefined && (obj.previous_channel_id = message.previous_channel_id);
        message.channel !== undefined && (obj.channel = message.channel ? Channel.toJSON(message.channel) : undefined);
        message.counterparty_version !== undefined && (obj.counterparty_version = message.counterparty_version);
        message.proof_init !== undefined && (obj.proof_init = base64FromBytes(message.proof_init !== undefined ? message.proof_init : new Uint8Array()));
        message.proof_height !== undefined && (obj.proof_height = message.proof_height ? Height.toJSON(message.proof_height) : undefined);
        message.signer !== undefined && (obj.signer = message.signer);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgChannelOpenTry();
        message.port_id = object.port_id ?? "";
        message.previous_channel_id = object.previous_channel_id ?? "";
        message.channel = object.channel !== undefined && object.channel !== null ? Channel.fromPartial(object.channel) : undefined;
        message.counterparty_version = object.counterparty_version ?? "";
        message.proof_init = object.proof_init ?? new Uint8Array();
        message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? Height.fromPartial(object.proof_height) : undefined;
        message.signer = object.signer ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgChannelOpenTry();
        if (object.port_id !== undefined && object.port_id !== null) {
            message.port_id = object.port_id;
        }
        if (object.previous_channel_id !== undefined && object.previous_channel_id !== null) {
            message.previous_channel_id = object.previous_channel_id;
        }
        if (object.channel !== undefined && object.channel !== null) {
            message.channel = Channel.fromAmino(object.channel);
        }
        if (object.counterparty_version !== undefined && object.counterparty_version !== null) {
            message.counterparty_version = object.counterparty_version;
        }
        if (object.proof_init !== undefined && object.proof_init !== null) {
            message.proof_init = bytesFromBase64(object.proof_init);
        }
        if (object.proof_height !== undefined && object.proof_height !== null) {
            message.proof_height = Height.fromAmino(object.proof_height);
        }
        if (object.signer !== undefined && object.signer !== null) {
            message.signer = object.signer;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.port_id = message.port_id;
        obj.previous_channel_id = message.previous_channel_id;
        obj.channel = message.channel ? Channel.toAmino(message.channel) : undefined;
        obj.counterparty_version = message.counterparty_version;
        obj.proof_init = message.proof_init ? base64FromBytes(message.proof_init) : undefined;
        obj.proof_height = message.proof_height ? Height.toAmino(message.proof_height) : {};
        obj.signer = message.signer;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgChannelOpenTry.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgChannelOpenTry",
            value: MsgChannelOpenTry.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgChannelOpenTry.decode(message.value);
    },
    toProto(message) {
        return MsgChannelOpenTry.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgChannelOpenTry",
            value: MsgChannelOpenTry.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgChannelOpenTry.typeUrl, MsgChannelOpenTry);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgChannelOpenTry.aminoType, MsgChannelOpenTry.typeUrl);
function createBaseMsgChannelOpenTryResponse() {
    return {
        version: "",
        channel_id: ""
    };
}
export const MsgChannelOpenTryResponse = {
    typeUrl: "/ibc.core.channel.v1.MsgChannelOpenTryResponse",
    aminoType: "cosmos-sdk/MsgChannelOpenTryResponse",
    is(o) {
        return o && (o.$typeUrl === MsgChannelOpenTryResponse.typeUrl || typeof o.version === "string" && typeof o.channel_id === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === MsgChannelOpenTryResponse.typeUrl || typeof o.version === "string" && typeof o.channel_id === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === MsgChannelOpenTryResponse.typeUrl || typeof o.version === "string" && typeof o.channel_id === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.version !== "") {
            writer.uint32(10).string(message.version);
        }
        if (message.channel_id !== "") {
            writer.uint32(18).string(message.channel_id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelOpenTryResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.version = reader.string();
                    break;
                case 2:
                    message.channel_id = reader.string();
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
            version: isSet(object.version) ? String(object.version) : "",
            channel_id: isSet(object.channel_id) ? String(object.channel_id) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.version !== undefined && (obj.version = message.version);
        message.channel_id !== undefined && (obj.channel_id = message.channel_id);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgChannelOpenTryResponse();
        message.version = object.version ?? "";
        message.channel_id = object.channel_id ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgChannelOpenTryResponse();
        if (object.version !== undefined && object.version !== null) {
            message.version = object.version;
        }
        if (object.channel_id !== undefined && object.channel_id !== null) {
            message.channel_id = object.channel_id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.version = message.version;
        obj.channel_id = message.channel_id;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgChannelOpenTryResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgChannelOpenTryResponse",
            value: MsgChannelOpenTryResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgChannelOpenTryResponse.decode(message.value);
    },
    toProto(message) {
        return MsgChannelOpenTryResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgChannelOpenTryResponse",
            value: MsgChannelOpenTryResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgChannelOpenTryResponse.typeUrl, MsgChannelOpenTryResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgChannelOpenTryResponse.aminoType, MsgChannelOpenTryResponse.typeUrl);
function createBaseMsgChannelOpenAck() {
    return {
        port_id: "",
        channel_id: "",
        counterparty_channel_id: "",
        counterparty_version: "",
        proof_try: new Uint8Array(),
        proof_height: Height.fromPartial({}),
        signer: ""
    };
}
export const MsgChannelOpenAck = {
    typeUrl: "/ibc.core.channel.v1.MsgChannelOpenAck",
    aminoType: "cosmos-sdk/MsgChannelOpenAck",
    is(o) {
        return o && (o.$typeUrl === MsgChannelOpenAck.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && typeof o.counterparty_channel_id === "string" && typeof o.counterparty_version === "string" && (o.proof_try instanceof Uint8Array || typeof o.proof_try === "string") && Height.is(o.proof_height) && typeof o.signer === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === MsgChannelOpenAck.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && typeof o.counterparty_channel_id === "string" && typeof o.counterparty_version === "string" && (o.proof_try instanceof Uint8Array || typeof o.proof_try === "string") && Height.isSDK(o.proof_height) && typeof o.signer === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === MsgChannelOpenAck.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && typeof o.counterparty_channel_id === "string" && typeof o.counterparty_version === "string" && (o.proof_try instanceof Uint8Array || typeof o.proof_try === "string") && Height.isAmino(o.proof_height) && typeof o.signer === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.port_id !== "") {
            writer.uint32(10).string(message.port_id);
        }
        if (message.channel_id !== "") {
            writer.uint32(18).string(message.channel_id);
        }
        if (message.counterparty_channel_id !== "") {
            writer.uint32(26).string(message.counterparty_channel_id);
        }
        if (message.counterparty_version !== "") {
            writer.uint32(34).string(message.counterparty_version);
        }
        if (message.proof_try.length !== 0) {
            writer.uint32(42).bytes(message.proof_try);
        }
        if (message.proof_height !== undefined) {
            Height.encode(message.proof_height, writer.uint32(50).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(58).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelOpenAck();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.port_id = reader.string();
                    break;
                case 2:
                    message.channel_id = reader.string();
                    break;
                case 3:
                    message.counterparty_channel_id = reader.string();
                    break;
                case 4:
                    message.counterparty_version = reader.string();
                    break;
                case 5:
                    message.proof_try = reader.bytes();
                    break;
                case 6:
                    message.proof_height = Height.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.signer = reader.string();
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
            port_id: isSet(object.port_id) ? String(object.port_id) : "",
            channel_id: isSet(object.channel_id) ? String(object.channel_id) : "",
            counterparty_channel_id: isSet(object.counterparty_channel_id) ? String(object.counterparty_channel_id) : "",
            counterparty_version: isSet(object.counterparty_version) ? String(object.counterparty_version) : "",
            proof_try: isSet(object.proof_try) ? bytesFromBase64(object.proof_try) : new Uint8Array(),
            proof_height: isSet(object.proof_height) ? Height.fromJSON(object.proof_height) : undefined,
            signer: isSet(object.signer) ? String(object.signer) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.port_id !== undefined && (obj.port_id = message.port_id);
        message.channel_id !== undefined && (obj.channel_id = message.channel_id);
        message.counterparty_channel_id !== undefined && (obj.counterparty_channel_id = message.counterparty_channel_id);
        message.counterparty_version !== undefined && (obj.counterparty_version = message.counterparty_version);
        message.proof_try !== undefined && (obj.proof_try = base64FromBytes(message.proof_try !== undefined ? message.proof_try : new Uint8Array()));
        message.proof_height !== undefined && (obj.proof_height = message.proof_height ? Height.toJSON(message.proof_height) : undefined);
        message.signer !== undefined && (obj.signer = message.signer);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgChannelOpenAck();
        message.port_id = object.port_id ?? "";
        message.channel_id = object.channel_id ?? "";
        message.counterparty_channel_id = object.counterparty_channel_id ?? "";
        message.counterparty_version = object.counterparty_version ?? "";
        message.proof_try = object.proof_try ?? new Uint8Array();
        message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? Height.fromPartial(object.proof_height) : undefined;
        message.signer = object.signer ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgChannelOpenAck();
        if (object.port_id !== undefined && object.port_id !== null) {
            message.port_id = object.port_id;
        }
        if (object.channel_id !== undefined && object.channel_id !== null) {
            message.channel_id = object.channel_id;
        }
        if (object.counterparty_channel_id !== undefined && object.counterparty_channel_id !== null) {
            message.counterparty_channel_id = object.counterparty_channel_id;
        }
        if (object.counterparty_version !== undefined && object.counterparty_version !== null) {
            message.counterparty_version = object.counterparty_version;
        }
        if (object.proof_try !== undefined && object.proof_try !== null) {
            message.proof_try = bytesFromBase64(object.proof_try);
        }
        if (object.proof_height !== undefined && object.proof_height !== null) {
            message.proof_height = Height.fromAmino(object.proof_height);
        }
        if (object.signer !== undefined && object.signer !== null) {
            message.signer = object.signer;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.port_id = message.port_id;
        obj.channel_id = message.channel_id;
        obj.counterparty_channel_id = message.counterparty_channel_id;
        obj.counterparty_version = message.counterparty_version;
        obj.proof_try = message.proof_try ? base64FromBytes(message.proof_try) : undefined;
        obj.proof_height = message.proof_height ? Height.toAmino(message.proof_height) : {};
        obj.signer = message.signer;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgChannelOpenAck.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgChannelOpenAck",
            value: MsgChannelOpenAck.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgChannelOpenAck.decode(message.value);
    },
    toProto(message) {
        return MsgChannelOpenAck.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgChannelOpenAck",
            value: MsgChannelOpenAck.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgChannelOpenAck.typeUrl, MsgChannelOpenAck);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgChannelOpenAck.aminoType, MsgChannelOpenAck.typeUrl);
function createBaseMsgChannelOpenAckResponse() {
    return {};
}
export const MsgChannelOpenAckResponse = {
    typeUrl: "/ibc.core.channel.v1.MsgChannelOpenAckResponse",
    aminoType: "cosmos-sdk/MsgChannelOpenAckResponse",
    is(o) {
        return o && o.$typeUrl === MsgChannelOpenAckResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === MsgChannelOpenAckResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === MsgChannelOpenAckResponse.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelOpenAckResponse();
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
        const message = createBaseMsgChannelOpenAckResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgChannelOpenAckResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgChannelOpenAckResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgChannelOpenAckResponse",
            value: MsgChannelOpenAckResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgChannelOpenAckResponse.decode(message.value);
    },
    toProto(message) {
        return MsgChannelOpenAckResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgChannelOpenAckResponse",
            value: MsgChannelOpenAckResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgChannelOpenAckResponse.typeUrl, MsgChannelOpenAckResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgChannelOpenAckResponse.aminoType, MsgChannelOpenAckResponse.typeUrl);
function createBaseMsgChannelOpenConfirm() {
    return {
        port_id: "",
        channel_id: "",
        proof_ack: new Uint8Array(),
        proof_height: Height.fromPartial({}),
        signer: ""
    };
}
export const MsgChannelOpenConfirm = {
    typeUrl: "/ibc.core.channel.v1.MsgChannelOpenConfirm",
    aminoType: "cosmos-sdk/MsgChannelOpenConfirm",
    is(o) {
        return o && (o.$typeUrl === MsgChannelOpenConfirm.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && (o.proof_ack instanceof Uint8Array || typeof o.proof_ack === "string") && Height.is(o.proof_height) && typeof o.signer === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === MsgChannelOpenConfirm.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && (o.proof_ack instanceof Uint8Array || typeof o.proof_ack === "string") && Height.isSDK(o.proof_height) && typeof o.signer === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === MsgChannelOpenConfirm.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && (o.proof_ack instanceof Uint8Array || typeof o.proof_ack === "string") && Height.isAmino(o.proof_height) && typeof o.signer === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.port_id !== "") {
            writer.uint32(10).string(message.port_id);
        }
        if (message.channel_id !== "") {
            writer.uint32(18).string(message.channel_id);
        }
        if (message.proof_ack.length !== 0) {
            writer.uint32(26).bytes(message.proof_ack);
        }
        if (message.proof_height !== undefined) {
            Height.encode(message.proof_height, writer.uint32(34).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(42).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelOpenConfirm();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.port_id = reader.string();
                    break;
                case 2:
                    message.channel_id = reader.string();
                    break;
                case 3:
                    message.proof_ack = reader.bytes();
                    break;
                case 4:
                    message.proof_height = Height.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.signer = reader.string();
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
            port_id: isSet(object.port_id) ? String(object.port_id) : "",
            channel_id: isSet(object.channel_id) ? String(object.channel_id) : "",
            proof_ack: isSet(object.proof_ack) ? bytesFromBase64(object.proof_ack) : new Uint8Array(),
            proof_height: isSet(object.proof_height) ? Height.fromJSON(object.proof_height) : undefined,
            signer: isSet(object.signer) ? String(object.signer) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.port_id !== undefined && (obj.port_id = message.port_id);
        message.channel_id !== undefined && (obj.channel_id = message.channel_id);
        message.proof_ack !== undefined && (obj.proof_ack = base64FromBytes(message.proof_ack !== undefined ? message.proof_ack : new Uint8Array()));
        message.proof_height !== undefined && (obj.proof_height = message.proof_height ? Height.toJSON(message.proof_height) : undefined);
        message.signer !== undefined && (obj.signer = message.signer);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgChannelOpenConfirm();
        message.port_id = object.port_id ?? "";
        message.channel_id = object.channel_id ?? "";
        message.proof_ack = object.proof_ack ?? new Uint8Array();
        message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? Height.fromPartial(object.proof_height) : undefined;
        message.signer = object.signer ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgChannelOpenConfirm();
        if (object.port_id !== undefined && object.port_id !== null) {
            message.port_id = object.port_id;
        }
        if (object.channel_id !== undefined && object.channel_id !== null) {
            message.channel_id = object.channel_id;
        }
        if (object.proof_ack !== undefined && object.proof_ack !== null) {
            message.proof_ack = bytesFromBase64(object.proof_ack);
        }
        if (object.proof_height !== undefined && object.proof_height !== null) {
            message.proof_height = Height.fromAmino(object.proof_height);
        }
        if (object.signer !== undefined && object.signer !== null) {
            message.signer = object.signer;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.port_id = message.port_id;
        obj.channel_id = message.channel_id;
        obj.proof_ack = message.proof_ack ? base64FromBytes(message.proof_ack) : undefined;
        obj.proof_height = message.proof_height ? Height.toAmino(message.proof_height) : {};
        obj.signer = message.signer;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgChannelOpenConfirm.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgChannelOpenConfirm",
            value: MsgChannelOpenConfirm.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgChannelOpenConfirm.decode(message.value);
    },
    toProto(message) {
        return MsgChannelOpenConfirm.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgChannelOpenConfirm",
            value: MsgChannelOpenConfirm.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgChannelOpenConfirm.typeUrl, MsgChannelOpenConfirm);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgChannelOpenConfirm.aminoType, MsgChannelOpenConfirm.typeUrl);
function createBaseMsgChannelOpenConfirmResponse() {
    return {};
}
export const MsgChannelOpenConfirmResponse = {
    typeUrl: "/ibc.core.channel.v1.MsgChannelOpenConfirmResponse",
    aminoType: "cosmos-sdk/MsgChannelOpenConfirmResponse",
    is(o) {
        return o && o.$typeUrl === MsgChannelOpenConfirmResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === MsgChannelOpenConfirmResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === MsgChannelOpenConfirmResponse.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelOpenConfirmResponse();
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
        const message = createBaseMsgChannelOpenConfirmResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgChannelOpenConfirmResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgChannelOpenConfirmResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgChannelOpenConfirmResponse",
            value: MsgChannelOpenConfirmResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgChannelOpenConfirmResponse.decode(message.value);
    },
    toProto(message) {
        return MsgChannelOpenConfirmResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgChannelOpenConfirmResponse",
            value: MsgChannelOpenConfirmResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgChannelOpenConfirmResponse.typeUrl, MsgChannelOpenConfirmResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgChannelOpenConfirmResponse.aminoType, MsgChannelOpenConfirmResponse.typeUrl);
function createBaseMsgChannelCloseInit() {
    return {
        port_id: "",
        channel_id: "",
        signer: ""
    };
}
export const MsgChannelCloseInit = {
    typeUrl: "/ibc.core.channel.v1.MsgChannelCloseInit",
    aminoType: "cosmos-sdk/MsgChannelCloseInit",
    is(o) {
        return o && (o.$typeUrl === MsgChannelCloseInit.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && typeof o.signer === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === MsgChannelCloseInit.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && typeof o.signer === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === MsgChannelCloseInit.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && typeof o.signer === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.port_id !== "") {
            writer.uint32(10).string(message.port_id);
        }
        if (message.channel_id !== "") {
            writer.uint32(18).string(message.channel_id);
        }
        if (message.signer !== "") {
            writer.uint32(26).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelCloseInit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.port_id = reader.string();
                    break;
                case 2:
                    message.channel_id = reader.string();
                    break;
                case 3:
                    message.signer = reader.string();
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
            port_id: isSet(object.port_id) ? String(object.port_id) : "",
            channel_id: isSet(object.channel_id) ? String(object.channel_id) : "",
            signer: isSet(object.signer) ? String(object.signer) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.port_id !== undefined && (obj.port_id = message.port_id);
        message.channel_id !== undefined && (obj.channel_id = message.channel_id);
        message.signer !== undefined && (obj.signer = message.signer);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgChannelCloseInit();
        message.port_id = object.port_id ?? "";
        message.channel_id = object.channel_id ?? "";
        message.signer = object.signer ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgChannelCloseInit();
        if (object.port_id !== undefined && object.port_id !== null) {
            message.port_id = object.port_id;
        }
        if (object.channel_id !== undefined && object.channel_id !== null) {
            message.channel_id = object.channel_id;
        }
        if (object.signer !== undefined && object.signer !== null) {
            message.signer = object.signer;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.port_id = message.port_id;
        obj.channel_id = message.channel_id;
        obj.signer = message.signer;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgChannelCloseInit.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgChannelCloseInit",
            value: MsgChannelCloseInit.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgChannelCloseInit.decode(message.value);
    },
    toProto(message) {
        return MsgChannelCloseInit.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgChannelCloseInit",
            value: MsgChannelCloseInit.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgChannelCloseInit.typeUrl, MsgChannelCloseInit);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgChannelCloseInit.aminoType, MsgChannelCloseInit.typeUrl);
function createBaseMsgChannelCloseInitResponse() {
    return {};
}
export const MsgChannelCloseInitResponse = {
    typeUrl: "/ibc.core.channel.v1.MsgChannelCloseInitResponse",
    aminoType: "cosmos-sdk/MsgChannelCloseInitResponse",
    is(o) {
        return o && o.$typeUrl === MsgChannelCloseInitResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === MsgChannelCloseInitResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === MsgChannelCloseInitResponse.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelCloseInitResponse();
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
        const message = createBaseMsgChannelCloseInitResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgChannelCloseInitResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgChannelCloseInitResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgChannelCloseInitResponse",
            value: MsgChannelCloseInitResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgChannelCloseInitResponse.decode(message.value);
    },
    toProto(message) {
        return MsgChannelCloseInitResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgChannelCloseInitResponse",
            value: MsgChannelCloseInitResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgChannelCloseInitResponse.typeUrl, MsgChannelCloseInitResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgChannelCloseInitResponse.aminoType, MsgChannelCloseInitResponse.typeUrl);
function createBaseMsgChannelCloseConfirm() {
    return {
        port_id: "",
        channel_id: "",
        proof_init: new Uint8Array(),
        proof_height: Height.fromPartial({}),
        signer: ""
    };
}
export const MsgChannelCloseConfirm = {
    typeUrl: "/ibc.core.channel.v1.MsgChannelCloseConfirm",
    aminoType: "cosmos-sdk/MsgChannelCloseConfirm",
    is(o) {
        return o && (o.$typeUrl === MsgChannelCloseConfirm.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && (o.proof_init instanceof Uint8Array || typeof o.proof_init === "string") && Height.is(o.proof_height) && typeof o.signer === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === MsgChannelCloseConfirm.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && (o.proof_init instanceof Uint8Array || typeof o.proof_init === "string") && Height.isSDK(o.proof_height) && typeof o.signer === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === MsgChannelCloseConfirm.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && (o.proof_init instanceof Uint8Array || typeof o.proof_init === "string") && Height.isAmino(o.proof_height) && typeof o.signer === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.port_id !== "") {
            writer.uint32(10).string(message.port_id);
        }
        if (message.channel_id !== "") {
            writer.uint32(18).string(message.channel_id);
        }
        if (message.proof_init.length !== 0) {
            writer.uint32(26).bytes(message.proof_init);
        }
        if (message.proof_height !== undefined) {
            Height.encode(message.proof_height, writer.uint32(34).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(42).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelCloseConfirm();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.port_id = reader.string();
                    break;
                case 2:
                    message.channel_id = reader.string();
                    break;
                case 3:
                    message.proof_init = reader.bytes();
                    break;
                case 4:
                    message.proof_height = Height.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.signer = reader.string();
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
            port_id: isSet(object.port_id) ? String(object.port_id) : "",
            channel_id: isSet(object.channel_id) ? String(object.channel_id) : "",
            proof_init: isSet(object.proof_init) ? bytesFromBase64(object.proof_init) : new Uint8Array(),
            proof_height: isSet(object.proof_height) ? Height.fromJSON(object.proof_height) : undefined,
            signer: isSet(object.signer) ? String(object.signer) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.port_id !== undefined && (obj.port_id = message.port_id);
        message.channel_id !== undefined && (obj.channel_id = message.channel_id);
        message.proof_init !== undefined && (obj.proof_init = base64FromBytes(message.proof_init !== undefined ? message.proof_init : new Uint8Array()));
        message.proof_height !== undefined && (obj.proof_height = message.proof_height ? Height.toJSON(message.proof_height) : undefined);
        message.signer !== undefined && (obj.signer = message.signer);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgChannelCloseConfirm();
        message.port_id = object.port_id ?? "";
        message.channel_id = object.channel_id ?? "";
        message.proof_init = object.proof_init ?? new Uint8Array();
        message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? Height.fromPartial(object.proof_height) : undefined;
        message.signer = object.signer ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgChannelCloseConfirm();
        if (object.port_id !== undefined && object.port_id !== null) {
            message.port_id = object.port_id;
        }
        if (object.channel_id !== undefined && object.channel_id !== null) {
            message.channel_id = object.channel_id;
        }
        if (object.proof_init !== undefined && object.proof_init !== null) {
            message.proof_init = bytesFromBase64(object.proof_init);
        }
        if (object.proof_height !== undefined && object.proof_height !== null) {
            message.proof_height = Height.fromAmino(object.proof_height);
        }
        if (object.signer !== undefined && object.signer !== null) {
            message.signer = object.signer;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.port_id = message.port_id;
        obj.channel_id = message.channel_id;
        obj.proof_init = message.proof_init ? base64FromBytes(message.proof_init) : undefined;
        obj.proof_height = message.proof_height ? Height.toAmino(message.proof_height) : {};
        obj.signer = message.signer;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgChannelCloseConfirm.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgChannelCloseConfirm",
            value: MsgChannelCloseConfirm.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgChannelCloseConfirm.decode(message.value);
    },
    toProto(message) {
        return MsgChannelCloseConfirm.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgChannelCloseConfirm",
            value: MsgChannelCloseConfirm.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgChannelCloseConfirm.typeUrl, MsgChannelCloseConfirm);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgChannelCloseConfirm.aminoType, MsgChannelCloseConfirm.typeUrl);
function createBaseMsgChannelCloseConfirmResponse() {
    return {};
}
export const MsgChannelCloseConfirmResponse = {
    typeUrl: "/ibc.core.channel.v1.MsgChannelCloseConfirmResponse",
    aminoType: "cosmos-sdk/MsgChannelCloseConfirmResponse",
    is(o) {
        return o && o.$typeUrl === MsgChannelCloseConfirmResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === MsgChannelCloseConfirmResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === MsgChannelCloseConfirmResponse.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelCloseConfirmResponse();
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
        const message = createBaseMsgChannelCloseConfirmResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgChannelCloseConfirmResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgChannelCloseConfirmResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgChannelCloseConfirmResponse",
            value: MsgChannelCloseConfirmResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgChannelCloseConfirmResponse.decode(message.value);
    },
    toProto(message) {
        return MsgChannelCloseConfirmResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgChannelCloseConfirmResponse",
            value: MsgChannelCloseConfirmResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgChannelCloseConfirmResponse.typeUrl, MsgChannelCloseConfirmResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgChannelCloseConfirmResponse.aminoType, MsgChannelCloseConfirmResponse.typeUrl);
function createBaseMsgRecvPacket() {
    return {
        packet: Packet.fromPartial({}),
        proof_commitment: new Uint8Array(),
        proof_height: Height.fromPartial({}),
        signer: ""
    };
}
export const MsgRecvPacket = {
    typeUrl: "/ibc.core.channel.v1.MsgRecvPacket",
    aminoType: "cosmos-sdk/MsgRecvPacket",
    is(o) {
        return o && (o.$typeUrl === MsgRecvPacket.typeUrl || Packet.is(o.packet) && (o.proof_commitment instanceof Uint8Array || typeof o.proof_commitment === "string") && Height.is(o.proof_height) && typeof o.signer === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === MsgRecvPacket.typeUrl || Packet.isSDK(o.packet) && (o.proof_commitment instanceof Uint8Array || typeof o.proof_commitment === "string") && Height.isSDK(o.proof_height) && typeof o.signer === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === MsgRecvPacket.typeUrl || Packet.isAmino(o.packet) && (o.proof_commitment instanceof Uint8Array || typeof o.proof_commitment === "string") && Height.isAmino(o.proof_height) && typeof o.signer === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.packet !== undefined) {
            Packet.encode(message.packet, writer.uint32(10).fork()).ldelim();
        }
        if (message.proof_commitment.length !== 0) {
            writer.uint32(18).bytes(message.proof_commitment);
        }
        if (message.proof_height !== undefined) {
            Height.encode(message.proof_height, writer.uint32(26).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(34).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRecvPacket();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.packet = Packet.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.proof_commitment = reader.bytes();
                    break;
                case 3:
                    message.proof_height = Height.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.signer = reader.string();
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
            packet: isSet(object.packet) ? Packet.fromJSON(object.packet) : undefined,
            proof_commitment: isSet(object.proof_commitment) ? bytesFromBase64(object.proof_commitment) : new Uint8Array(),
            proof_height: isSet(object.proof_height) ? Height.fromJSON(object.proof_height) : undefined,
            signer: isSet(object.signer) ? String(object.signer) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.packet !== undefined && (obj.packet = message.packet ? Packet.toJSON(message.packet) : undefined);
        message.proof_commitment !== undefined && (obj.proof_commitment = base64FromBytes(message.proof_commitment !== undefined ? message.proof_commitment : new Uint8Array()));
        message.proof_height !== undefined && (obj.proof_height = message.proof_height ? Height.toJSON(message.proof_height) : undefined);
        message.signer !== undefined && (obj.signer = message.signer);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgRecvPacket();
        message.packet = object.packet !== undefined && object.packet !== null ? Packet.fromPartial(object.packet) : undefined;
        message.proof_commitment = object.proof_commitment ?? new Uint8Array();
        message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? Height.fromPartial(object.proof_height) : undefined;
        message.signer = object.signer ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgRecvPacket();
        if (object.packet !== undefined && object.packet !== null) {
            message.packet = Packet.fromAmino(object.packet);
        }
        if (object.proof_commitment !== undefined && object.proof_commitment !== null) {
            message.proof_commitment = bytesFromBase64(object.proof_commitment);
        }
        if (object.proof_height !== undefined && object.proof_height !== null) {
            message.proof_height = Height.fromAmino(object.proof_height);
        }
        if (object.signer !== undefined && object.signer !== null) {
            message.signer = object.signer;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.packet = message.packet ? Packet.toAmino(message.packet) : undefined;
        obj.proof_commitment = message.proof_commitment ? base64FromBytes(message.proof_commitment) : undefined;
        obj.proof_height = message.proof_height ? Height.toAmino(message.proof_height) : {};
        obj.signer = message.signer;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgRecvPacket.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgRecvPacket",
            value: MsgRecvPacket.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgRecvPacket.decode(message.value);
    },
    toProto(message) {
        return MsgRecvPacket.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgRecvPacket",
            value: MsgRecvPacket.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgRecvPacket.typeUrl, MsgRecvPacket);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgRecvPacket.aminoType, MsgRecvPacket.typeUrl);
function createBaseMsgRecvPacketResponse() {
    return {
        result: 0
    };
}
export const MsgRecvPacketResponse = {
    typeUrl: "/ibc.core.channel.v1.MsgRecvPacketResponse",
    aminoType: "cosmos-sdk/MsgRecvPacketResponse",
    is(o) {
        return o && (o.$typeUrl === MsgRecvPacketResponse.typeUrl || isSet(o.result));
    },
    isSDK(o) {
        return o && (o.$typeUrl === MsgRecvPacketResponse.typeUrl || isSet(o.result));
    },
    isAmino(o) {
        return o && (o.$typeUrl === MsgRecvPacketResponse.typeUrl || isSet(o.result));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.result !== 0) {
            writer.uint32(8).int32(message.result);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRecvPacketResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.result = reader.int32();
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
            result: isSet(object.result) ? responseResultTypeFromJSON(object.result) : -1
        };
    },
    toJSON(message) {
        const obj = {};
        message.result !== undefined && (obj.result = responseResultTypeToJSON(message.result));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgRecvPacketResponse();
        message.result = object.result ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgRecvPacketResponse();
        if (object.result !== undefined && object.result !== null) {
            message.result = responseResultTypeFromJSON(object.result);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.result = message.result;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgRecvPacketResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgRecvPacketResponse",
            value: MsgRecvPacketResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgRecvPacketResponse.decode(message.value);
    },
    toProto(message) {
        return MsgRecvPacketResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgRecvPacketResponse",
            value: MsgRecvPacketResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgRecvPacketResponse.typeUrl, MsgRecvPacketResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgRecvPacketResponse.aminoType, MsgRecvPacketResponse.typeUrl);
function createBaseMsgTimeout() {
    return {
        packet: Packet.fromPartial({}),
        proof_unreceived: new Uint8Array(),
        proof_height: Height.fromPartial({}),
        next_sequence_recv: BigInt(0),
        signer: ""
    };
}
export const MsgTimeout = {
    typeUrl: "/ibc.core.channel.v1.MsgTimeout",
    aminoType: "cosmos-sdk/MsgTimeout",
    is(o) {
        return o && (o.$typeUrl === MsgTimeout.typeUrl || Packet.is(o.packet) && (o.proof_unreceived instanceof Uint8Array || typeof o.proof_unreceived === "string") && Height.is(o.proof_height) && typeof o.next_sequence_recv === "bigint" && typeof o.signer === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === MsgTimeout.typeUrl || Packet.isSDK(o.packet) && (o.proof_unreceived instanceof Uint8Array || typeof o.proof_unreceived === "string") && Height.isSDK(o.proof_height) && typeof o.next_sequence_recv === "bigint" && typeof o.signer === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === MsgTimeout.typeUrl || Packet.isAmino(o.packet) && (o.proof_unreceived instanceof Uint8Array || typeof o.proof_unreceived === "string") && Height.isAmino(o.proof_height) && typeof o.next_sequence_recv === "bigint" && typeof o.signer === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.packet !== undefined) {
            Packet.encode(message.packet, writer.uint32(10).fork()).ldelim();
        }
        if (message.proof_unreceived.length !== 0) {
            writer.uint32(18).bytes(message.proof_unreceived);
        }
        if (message.proof_height !== undefined) {
            Height.encode(message.proof_height, writer.uint32(26).fork()).ldelim();
        }
        if (message.next_sequence_recv !== BigInt(0)) {
            writer.uint32(32).uint64(message.next_sequence_recv);
        }
        if (message.signer !== "") {
            writer.uint32(42).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgTimeout();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.packet = Packet.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.proof_unreceived = reader.bytes();
                    break;
                case 3:
                    message.proof_height = Height.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.next_sequence_recv = reader.uint64();
                    break;
                case 5:
                    message.signer = reader.string();
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
            packet: isSet(object.packet) ? Packet.fromJSON(object.packet) : undefined,
            proof_unreceived: isSet(object.proof_unreceived) ? bytesFromBase64(object.proof_unreceived) : new Uint8Array(),
            proof_height: isSet(object.proof_height) ? Height.fromJSON(object.proof_height) : undefined,
            next_sequence_recv: isSet(object.next_sequence_recv) ? BigInt(object.next_sequence_recv.toString()) : BigInt(0),
            signer: isSet(object.signer) ? String(object.signer) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.packet !== undefined && (obj.packet = message.packet ? Packet.toJSON(message.packet) : undefined);
        message.proof_unreceived !== undefined && (obj.proof_unreceived = base64FromBytes(message.proof_unreceived !== undefined ? message.proof_unreceived : new Uint8Array()));
        message.proof_height !== undefined && (obj.proof_height = message.proof_height ? Height.toJSON(message.proof_height) : undefined);
        message.next_sequence_recv !== undefined && (obj.next_sequence_recv = (message.next_sequence_recv || BigInt(0)).toString());
        message.signer !== undefined && (obj.signer = message.signer);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgTimeout();
        message.packet = object.packet !== undefined && object.packet !== null ? Packet.fromPartial(object.packet) : undefined;
        message.proof_unreceived = object.proof_unreceived ?? new Uint8Array();
        message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? Height.fromPartial(object.proof_height) : undefined;
        message.next_sequence_recv = object.next_sequence_recv !== undefined && object.next_sequence_recv !== null ? BigInt(object.next_sequence_recv.toString()) : BigInt(0);
        message.signer = object.signer ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgTimeout();
        if (object.packet !== undefined && object.packet !== null) {
            message.packet = Packet.fromAmino(object.packet);
        }
        if (object.proof_unreceived !== undefined && object.proof_unreceived !== null) {
            message.proof_unreceived = bytesFromBase64(object.proof_unreceived);
        }
        if (object.proof_height !== undefined && object.proof_height !== null) {
            message.proof_height = Height.fromAmino(object.proof_height);
        }
        if (object.next_sequence_recv !== undefined && object.next_sequence_recv !== null) {
            message.next_sequence_recv = BigInt(object.next_sequence_recv);
        }
        if (object.signer !== undefined && object.signer !== null) {
            message.signer = object.signer;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.packet = message.packet ? Packet.toAmino(message.packet) : undefined;
        obj.proof_unreceived = message.proof_unreceived ? base64FromBytes(message.proof_unreceived) : undefined;
        obj.proof_height = message.proof_height ? Height.toAmino(message.proof_height) : {};
        obj.next_sequence_recv = message.next_sequence_recv ? message.next_sequence_recv.toString() : undefined;
        obj.signer = message.signer;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgTimeout.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgTimeout",
            value: MsgTimeout.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgTimeout.decode(message.value);
    },
    toProto(message) {
        return MsgTimeout.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgTimeout",
            value: MsgTimeout.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgTimeout.typeUrl, MsgTimeout);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgTimeout.aminoType, MsgTimeout.typeUrl);
function createBaseMsgTimeoutResponse() {
    return {
        result: 0
    };
}
export const MsgTimeoutResponse = {
    typeUrl: "/ibc.core.channel.v1.MsgTimeoutResponse",
    aminoType: "cosmos-sdk/MsgTimeoutResponse",
    is(o) {
        return o && (o.$typeUrl === MsgTimeoutResponse.typeUrl || isSet(o.result));
    },
    isSDK(o) {
        return o && (o.$typeUrl === MsgTimeoutResponse.typeUrl || isSet(o.result));
    },
    isAmino(o) {
        return o && (o.$typeUrl === MsgTimeoutResponse.typeUrl || isSet(o.result));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.result !== 0) {
            writer.uint32(8).int32(message.result);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgTimeoutResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.result = reader.int32();
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
            result: isSet(object.result) ? responseResultTypeFromJSON(object.result) : -1
        };
    },
    toJSON(message) {
        const obj = {};
        message.result !== undefined && (obj.result = responseResultTypeToJSON(message.result));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgTimeoutResponse();
        message.result = object.result ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgTimeoutResponse();
        if (object.result !== undefined && object.result !== null) {
            message.result = responseResultTypeFromJSON(object.result);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.result = message.result;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgTimeoutResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgTimeoutResponse",
            value: MsgTimeoutResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgTimeoutResponse.decode(message.value);
    },
    toProto(message) {
        return MsgTimeoutResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgTimeoutResponse",
            value: MsgTimeoutResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgTimeoutResponse.typeUrl, MsgTimeoutResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgTimeoutResponse.aminoType, MsgTimeoutResponse.typeUrl);
function createBaseMsgTimeoutOnClose() {
    return {
        packet: Packet.fromPartial({}),
        proof_unreceived: new Uint8Array(),
        proof_close: new Uint8Array(),
        proof_height: Height.fromPartial({}),
        next_sequence_recv: BigInt(0),
        signer: ""
    };
}
export const MsgTimeoutOnClose = {
    typeUrl: "/ibc.core.channel.v1.MsgTimeoutOnClose",
    aminoType: "cosmos-sdk/MsgTimeoutOnClose",
    is(o) {
        return o && (o.$typeUrl === MsgTimeoutOnClose.typeUrl || Packet.is(o.packet) && (o.proof_unreceived instanceof Uint8Array || typeof o.proof_unreceived === "string") && (o.proof_close instanceof Uint8Array || typeof o.proof_close === "string") && Height.is(o.proof_height) && typeof o.next_sequence_recv === "bigint" && typeof o.signer === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === MsgTimeoutOnClose.typeUrl || Packet.isSDK(o.packet) && (o.proof_unreceived instanceof Uint8Array || typeof o.proof_unreceived === "string") && (o.proof_close instanceof Uint8Array || typeof o.proof_close === "string") && Height.isSDK(o.proof_height) && typeof o.next_sequence_recv === "bigint" && typeof o.signer === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === MsgTimeoutOnClose.typeUrl || Packet.isAmino(o.packet) && (o.proof_unreceived instanceof Uint8Array || typeof o.proof_unreceived === "string") && (o.proof_close instanceof Uint8Array || typeof o.proof_close === "string") && Height.isAmino(o.proof_height) && typeof o.next_sequence_recv === "bigint" && typeof o.signer === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.packet !== undefined) {
            Packet.encode(message.packet, writer.uint32(10).fork()).ldelim();
        }
        if (message.proof_unreceived.length !== 0) {
            writer.uint32(18).bytes(message.proof_unreceived);
        }
        if (message.proof_close.length !== 0) {
            writer.uint32(26).bytes(message.proof_close);
        }
        if (message.proof_height !== undefined) {
            Height.encode(message.proof_height, writer.uint32(34).fork()).ldelim();
        }
        if (message.next_sequence_recv !== BigInt(0)) {
            writer.uint32(40).uint64(message.next_sequence_recv);
        }
        if (message.signer !== "") {
            writer.uint32(50).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgTimeoutOnClose();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.packet = Packet.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.proof_unreceived = reader.bytes();
                    break;
                case 3:
                    message.proof_close = reader.bytes();
                    break;
                case 4:
                    message.proof_height = Height.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.next_sequence_recv = reader.uint64();
                    break;
                case 6:
                    message.signer = reader.string();
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
            packet: isSet(object.packet) ? Packet.fromJSON(object.packet) : undefined,
            proof_unreceived: isSet(object.proof_unreceived) ? bytesFromBase64(object.proof_unreceived) : new Uint8Array(),
            proof_close: isSet(object.proof_close) ? bytesFromBase64(object.proof_close) : new Uint8Array(),
            proof_height: isSet(object.proof_height) ? Height.fromJSON(object.proof_height) : undefined,
            next_sequence_recv: isSet(object.next_sequence_recv) ? BigInt(object.next_sequence_recv.toString()) : BigInt(0),
            signer: isSet(object.signer) ? String(object.signer) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.packet !== undefined && (obj.packet = message.packet ? Packet.toJSON(message.packet) : undefined);
        message.proof_unreceived !== undefined && (obj.proof_unreceived = base64FromBytes(message.proof_unreceived !== undefined ? message.proof_unreceived : new Uint8Array()));
        message.proof_close !== undefined && (obj.proof_close = base64FromBytes(message.proof_close !== undefined ? message.proof_close : new Uint8Array()));
        message.proof_height !== undefined && (obj.proof_height = message.proof_height ? Height.toJSON(message.proof_height) : undefined);
        message.next_sequence_recv !== undefined && (obj.next_sequence_recv = (message.next_sequence_recv || BigInt(0)).toString());
        message.signer !== undefined && (obj.signer = message.signer);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgTimeoutOnClose();
        message.packet = object.packet !== undefined && object.packet !== null ? Packet.fromPartial(object.packet) : undefined;
        message.proof_unreceived = object.proof_unreceived ?? new Uint8Array();
        message.proof_close = object.proof_close ?? new Uint8Array();
        message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? Height.fromPartial(object.proof_height) : undefined;
        message.next_sequence_recv = object.next_sequence_recv !== undefined && object.next_sequence_recv !== null ? BigInt(object.next_sequence_recv.toString()) : BigInt(0);
        message.signer = object.signer ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgTimeoutOnClose();
        if (object.packet !== undefined && object.packet !== null) {
            message.packet = Packet.fromAmino(object.packet);
        }
        if (object.proof_unreceived !== undefined && object.proof_unreceived !== null) {
            message.proof_unreceived = bytesFromBase64(object.proof_unreceived);
        }
        if (object.proof_close !== undefined && object.proof_close !== null) {
            message.proof_close = bytesFromBase64(object.proof_close);
        }
        if (object.proof_height !== undefined && object.proof_height !== null) {
            message.proof_height = Height.fromAmino(object.proof_height);
        }
        if (object.next_sequence_recv !== undefined && object.next_sequence_recv !== null) {
            message.next_sequence_recv = BigInt(object.next_sequence_recv);
        }
        if (object.signer !== undefined && object.signer !== null) {
            message.signer = object.signer;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.packet = message.packet ? Packet.toAmino(message.packet) : undefined;
        obj.proof_unreceived = message.proof_unreceived ? base64FromBytes(message.proof_unreceived) : undefined;
        obj.proof_close = message.proof_close ? base64FromBytes(message.proof_close) : undefined;
        obj.proof_height = message.proof_height ? Height.toAmino(message.proof_height) : {};
        obj.next_sequence_recv = message.next_sequence_recv ? message.next_sequence_recv.toString() : undefined;
        obj.signer = message.signer;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgTimeoutOnClose.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgTimeoutOnClose",
            value: MsgTimeoutOnClose.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgTimeoutOnClose.decode(message.value);
    },
    toProto(message) {
        return MsgTimeoutOnClose.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgTimeoutOnClose",
            value: MsgTimeoutOnClose.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgTimeoutOnClose.typeUrl, MsgTimeoutOnClose);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgTimeoutOnClose.aminoType, MsgTimeoutOnClose.typeUrl);
function createBaseMsgTimeoutOnCloseResponse() {
    return {
        result: 0
    };
}
export const MsgTimeoutOnCloseResponse = {
    typeUrl: "/ibc.core.channel.v1.MsgTimeoutOnCloseResponse",
    aminoType: "cosmos-sdk/MsgTimeoutOnCloseResponse",
    is(o) {
        return o && (o.$typeUrl === MsgTimeoutOnCloseResponse.typeUrl || isSet(o.result));
    },
    isSDK(o) {
        return o && (o.$typeUrl === MsgTimeoutOnCloseResponse.typeUrl || isSet(o.result));
    },
    isAmino(o) {
        return o && (o.$typeUrl === MsgTimeoutOnCloseResponse.typeUrl || isSet(o.result));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.result !== 0) {
            writer.uint32(8).int32(message.result);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgTimeoutOnCloseResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.result = reader.int32();
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
            result: isSet(object.result) ? responseResultTypeFromJSON(object.result) : -1
        };
    },
    toJSON(message) {
        const obj = {};
        message.result !== undefined && (obj.result = responseResultTypeToJSON(message.result));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgTimeoutOnCloseResponse();
        message.result = object.result ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgTimeoutOnCloseResponse();
        if (object.result !== undefined && object.result !== null) {
            message.result = responseResultTypeFromJSON(object.result);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.result = message.result;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgTimeoutOnCloseResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgTimeoutOnCloseResponse",
            value: MsgTimeoutOnCloseResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgTimeoutOnCloseResponse.decode(message.value);
    },
    toProto(message) {
        return MsgTimeoutOnCloseResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgTimeoutOnCloseResponse",
            value: MsgTimeoutOnCloseResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgTimeoutOnCloseResponse.typeUrl, MsgTimeoutOnCloseResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgTimeoutOnCloseResponse.aminoType, MsgTimeoutOnCloseResponse.typeUrl);
function createBaseMsgAcknowledgement() {
    return {
        packet: Packet.fromPartial({}),
        acknowledgement: new Uint8Array(),
        proof_acked: new Uint8Array(),
        proof_height: Height.fromPartial({}),
        signer: ""
    };
}
export const MsgAcknowledgement = {
    typeUrl: "/ibc.core.channel.v1.MsgAcknowledgement",
    aminoType: "cosmos-sdk/MsgAcknowledgement",
    is(o) {
        return o && (o.$typeUrl === MsgAcknowledgement.typeUrl || Packet.is(o.packet) && (o.acknowledgement instanceof Uint8Array || typeof o.acknowledgement === "string") && (o.proof_acked instanceof Uint8Array || typeof o.proof_acked === "string") && Height.is(o.proof_height) && typeof o.signer === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === MsgAcknowledgement.typeUrl || Packet.isSDK(o.packet) && (o.acknowledgement instanceof Uint8Array || typeof o.acknowledgement === "string") && (o.proof_acked instanceof Uint8Array || typeof o.proof_acked === "string") && Height.isSDK(o.proof_height) && typeof o.signer === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === MsgAcknowledgement.typeUrl || Packet.isAmino(o.packet) && (o.acknowledgement instanceof Uint8Array || typeof o.acknowledgement === "string") && (o.proof_acked instanceof Uint8Array || typeof o.proof_acked === "string") && Height.isAmino(o.proof_height) && typeof o.signer === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.packet !== undefined) {
            Packet.encode(message.packet, writer.uint32(10).fork()).ldelim();
        }
        if (message.acknowledgement.length !== 0) {
            writer.uint32(18).bytes(message.acknowledgement);
        }
        if (message.proof_acked.length !== 0) {
            writer.uint32(26).bytes(message.proof_acked);
        }
        if (message.proof_height !== undefined) {
            Height.encode(message.proof_height, writer.uint32(34).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(42).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAcknowledgement();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.packet = Packet.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.acknowledgement = reader.bytes();
                    break;
                case 3:
                    message.proof_acked = reader.bytes();
                    break;
                case 4:
                    message.proof_height = Height.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.signer = reader.string();
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
            packet: isSet(object.packet) ? Packet.fromJSON(object.packet) : undefined,
            acknowledgement: isSet(object.acknowledgement) ? bytesFromBase64(object.acknowledgement) : new Uint8Array(),
            proof_acked: isSet(object.proof_acked) ? bytesFromBase64(object.proof_acked) : new Uint8Array(),
            proof_height: isSet(object.proof_height) ? Height.fromJSON(object.proof_height) : undefined,
            signer: isSet(object.signer) ? String(object.signer) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.packet !== undefined && (obj.packet = message.packet ? Packet.toJSON(message.packet) : undefined);
        message.acknowledgement !== undefined && (obj.acknowledgement = base64FromBytes(message.acknowledgement !== undefined ? message.acknowledgement : new Uint8Array()));
        message.proof_acked !== undefined && (obj.proof_acked = base64FromBytes(message.proof_acked !== undefined ? message.proof_acked : new Uint8Array()));
        message.proof_height !== undefined && (obj.proof_height = message.proof_height ? Height.toJSON(message.proof_height) : undefined);
        message.signer !== undefined && (obj.signer = message.signer);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgAcknowledgement();
        message.packet = object.packet !== undefined && object.packet !== null ? Packet.fromPartial(object.packet) : undefined;
        message.acknowledgement = object.acknowledgement ?? new Uint8Array();
        message.proof_acked = object.proof_acked ?? new Uint8Array();
        message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? Height.fromPartial(object.proof_height) : undefined;
        message.signer = object.signer ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgAcknowledgement();
        if (object.packet !== undefined && object.packet !== null) {
            message.packet = Packet.fromAmino(object.packet);
        }
        if (object.acknowledgement !== undefined && object.acknowledgement !== null) {
            message.acknowledgement = bytesFromBase64(object.acknowledgement);
        }
        if (object.proof_acked !== undefined && object.proof_acked !== null) {
            message.proof_acked = bytesFromBase64(object.proof_acked);
        }
        if (object.proof_height !== undefined && object.proof_height !== null) {
            message.proof_height = Height.fromAmino(object.proof_height);
        }
        if (object.signer !== undefined && object.signer !== null) {
            message.signer = object.signer;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.packet = message.packet ? Packet.toAmino(message.packet) : undefined;
        obj.acknowledgement = message.acknowledgement ? base64FromBytes(message.acknowledgement) : undefined;
        obj.proof_acked = message.proof_acked ? base64FromBytes(message.proof_acked) : undefined;
        obj.proof_height = message.proof_height ? Height.toAmino(message.proof_height) : {};
        obj.signer = message.signer;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgAcknowledgement.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgAcknowledgement",
            value: MsgAcknowledgement.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgAcknowledgement.decode(message.value);
    },
    toProto(message) {
        return MsgAcknowledgement.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgAcknowledgement",
            value: MsgAcknowledgement.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgAcknowledgement.typeUrl, MsgAcknowledgement);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgAcknowledgement.aminoType, MsgAcknowledgement.typeUrl);
function createBaseMsgAcknowledgementResponse() {
    return {
        result: 0
    };
}
export const MsgAcknowledgementResponse = {
    typeUrl: "/ibc.core.channel.v1.MsgAcknowledgementResponse",
    aminoType: "cosmos-sdk/MsgAcknowledgementResponse",
    is(o) {
        return o && (o.$typeUrl === MsgAcknowledgementResponse.typeUrl || isSet(o.result));
    },
    isSDK(o) {
        return o && (o.$typeUrl === MsgAcknowledgementResponse.typeUrl || isSet(o.result));
    },
    isAmino(o) {
        return o && (o.$typeUrl === MsgAcknowledgementResponse.typeUrl || isSet(o.result));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.result !== 0) {
            writer.uint32(8).int32(message.result);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAcknowledgementResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.result = reader.int32();
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
            result: isSet(object.result) ? responseResultTypeFromJSON(object.result) : -1
        };
    },
    toJSON(message) {
        const obj = {};
        message.result !== undefined && (obj.result = responseResultTypeToJSON(message.result));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgAcknowledgementResponse();
        message.result = object.result ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgAcknowledgementResponse();
        if (object.result !== undefined && object.result !== null) {
            message.result = responseResultTypeFromJSON(object.result);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.result = message.result;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgAcknowledgementResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgAcknowledgementResponse",
            value: MsgAcknowledgementResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgAcknowledgementResponse.decode(message.value);
    },
    toProto(message) {
        return MsgAcknowledgementResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgAcknowledgementResponse",
            value: MsgAcknowledgementResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgAcknowledgementResponse.typeUrl, MsgAcknowledgementResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgAcknowledgementResponse.aminoType, MsgAcknowledgementResponse.typeUrl);
//# sourceMappingURL=tx.js.map
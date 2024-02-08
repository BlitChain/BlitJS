"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgAcknowledgementResponse = exports.MsgAcknowledgement = exports.MsgTimeoutOnCloseResponse = exports.MsgTimeoutOnClose = exports.MsgTimeoutResponse = exports.MsgTimeout = exports.MsgRecvPacketResponse = exports.MsgRecvPacket = exports.MsgChannelCloseConfirmResponse = exports.MsgChannelCloseConfirm = exports.MsgChannelCloseInitResponse = exports.MsgChannelCloseInit = exports.MsgChannelOpenConfirmResponse = exports.MsgChannelOpenConfirm = exports.MsgChannelOpenAckResponse = exports.MsgChannelOpenAck = exports.MsgChannelOpenTryResponse = exports.MsgChannelOpenTry = exports.MsgChannelOpenInitResponse = exports.MsgChannelOpenInit = exports.responseResultTypeToJSON = exports.responseResultTypeFromJSON = exports.ResponseResultTypeAmino = exports.ResponseResultTypeSDKType = exports.ResponseResultType = exports.protobufPackage = void 0;
//@ts-nocheck
const channel_1 = require("./channel");
const client_1 = require("../../client/v1/client");
const binary_1 = require("../../../../binary");
const helpers_1 = require("../../../../helpers");
exports.protobufPackage = "ibc.core.channel.v1";
/** ResponseResultType defines the possible outcomes of the execution of a message */
var ResponseResultType;
(function (ResponseResultType) {
    /** RESPONSE_RESULT_TYPE_UNSPECIFIED - Default zero value enumeration */
    ResponseResultType[ResponseResultType["RESPONSE_RESULT_TYPE_UNSPECIFIED"] = 0] = "RESPONSE_RESULT_TYPE_UNSPECIFIED";
    /** RESPONSE_RESULT_TYPE_NOOP - The message did not call the IBC application callbacks (because, for example, the packet had already been relayed) */
    ResponseResultType[ResponseResultType["RESPONSE_RESULT_TYPE_NOOP"] = 1] = "RESPONSE_RESULT_TYPE_NOOP";
    /** RESPONSE_RESULT_TYPE_SUCCESS - The message was executed successfully */
    ResponseResultType[ResponseResultType["RESPONSE_RESULT_TYPE_SUCCESS"] = 2] = "RESPONSE_RESULT_TYPE_SUCCESS";
    ResponseResultType[ResponseResultType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ResponseResultType || (exports.ResponseResultType = ResponseResultType = {}));
exports.ResponseResultTypeSDKType = ResponseResultType;
exports.ResponseResultTypeAmino = ResponseResultType;
function responseResultTypeFromJSON(object) {
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
exports.responseResultTypeFromJSON = responseResultTypeFromJSON;
function responseResultTypeToJSON(object) {
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
exports.responseResultTypeToJSON = responseResultTypeToJSON;
function createBaseMsgChannelOpenInit() {
    return {
        port_id: "",
        channel: channel_1.Channel.fromPartial({}),
        signer: ""
    };
}
exports.MsgChannelOpenInit = {
    typeUrl: "/ibc.core.channel.v1.MsgChannelOpenInit",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.port_id !== "") {
            writer.uint32(10).string(message.port_id);
        }
        if (message.channel !== undefined) {
            channel_1.Channel.encode(message.channel, writer.uint32(18).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(26).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelOpenInit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.port_id = reader.string();
                    break;
                case 2:
                    message.channel = channel_1.Channel.decode(reader, reader.uint32());
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
            port_id: (0, helpers_1.isSet)(object.port_id) ? String(object.port_id) : "",
            channel: (0, helpers_1.isSet)(object.channel) ? channel_1.Channel.fromJSON(object.channel) : undefined,
            signer: (0, helpers_1.isSet)(object.signer) ? String(object.signer) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.port_id !== undefined && (obj.port_id = message.port_id);
        message.channel !== undefined && (obj.channel = message.channel ? channel_1.Channel.toJSON(message.channel) : undefined);
        message.signer !== undefined && (obj.signer = message.signer);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgChannelOpenInit();
        message.port_id = object.port_id ?? "";
        message.channel = object.channel !== undefined && object.channel !== null ? channel_1.Channel.fromPartial(object.channel) : undefined;
        message.signer = object.signer ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgChannelOpenInit();
        if (object.port_id !== undefined && object.port_id !== null) {
            message.port_id = object.port_id;
        }
        if (object.channel !== undefined && object.channel !== null) {
            message.channel = channel_1.Channel.fromAmino(object.channel);
        }
        if (object.signer !== undefined && object.signer !== null) {
            message.signer = object.signer;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.port_id = message.port_id;
        obj.channel = message.channel ? channel_1.Channel.toAmino(message.channel) : undefined;
        obj.signer = message.signer;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgChannelOpenInit.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgChannelOpenInit",
            value: exports.MsgChannelOpenInit.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgChannelOpenInit.decode(message.value);
    },
    toProto(message) {
        return exports.MsgChannelOpenInit.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgChannelOpenInit",
            value: exports.MsgChannelOpenInit.encode(message).finish()
        };
    }
};
function createBaseMsgChannelOpenInitResponse() {
    return {
        channel_id: "",
        version: ""
    };
}
exports.MsgChannelOpenInitResponse = {
    typeUrl: "/ibc.core.channel.v1.MsgChannelOpenInitResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.channel_id !== "") {
            writer.uint32(10).string(message.channel_id);
        }
        if (message.version !== "") {
            writer.uint32(18).string(message.version);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
            channel_id: (0, helpers_1.isSet)(object.channel_id) ? String(object.channel_id) : "",
            version: (0, helpers_1.isSet)(object.version) ? String(object.version) : ""
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
        return exports.MsgChannelOpenInitResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgChannelOpenInitResponse",
            value: exports.MsgChannelOpenInitResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgChannelOpenInitResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgChannelOpenInitResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgChannelOpenInitResponse",
            value: exports.MsgChannelOpenInitResponse.encode(message).finish()
        };
    }
};
function createBaseMsgChannelOpenTry() {
    return {
        port_id: "",
        previous_channel_id: "",
        channel: channel_1.Channel.fromPartial({}),
        counterparty_version: "",
        proof_init: new Uint8Array(),
        proof_height: client_1.Height.fromPartial({}),
        signer: ""
    };
}
exports.MsgChannelOpenTry = {
    typeUrl: "/ibc.core.channel.v1.MsgChannelOpenTry",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.port_id !== "") {
            writer.uint32(10).string(message.port_id);
        }
        if (message.previous_channel_id !== "") {
            writer.uint32(18).string(message.previous_channel_id);
        }
        if (message.channel !== undefined) {
            channel_1.Channel.encode(message.channel, writer.uint32(26).fork()).ldelim();
        }
        if (message.counterparty_version !== "") {
            writer.uint32(34).string(message.counterparty_version);
        }
        if (message.proof_init.length !== 0) {
            writer.uint32(42).bytes(message.proof_init);
        }
        if (message.proof_height !== undefined) {
            client_1.Height.encode(message.proof_height, writer.uint32(50).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(58).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
                    message.channel = channel_1.Channel.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.counterparty_version = reader.string();
                    break;
                case 5:
                    message.proof_init = reader.bytes();
                    break;
                case 6:
                    message.proof_height = client_1.Height.decode(reader, reader.uint32());
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
            port_id: (0, helpers_1.isSet)(object.port_id) ? String(object.port_id) : "",
            previous_channel_id: (0, helpers_1.isSet)(object.previous_channel_id) ? String(object.previous_channel_id) : "",
            channel: (0, helpers_1.isSet)(object.channel) ? channel_1.Channel.fromJSON(object.channel) : undefined,
            counterparty_version: (0, helpers_1.isSet)(object.counterparty_version) ? String(object.counterparty_version) : "",
            proof_init: (0, helpers_1.isSet)(object.proof_init) ? (0, helpers_1.bytesFromBase64)(object.proof_init) : new Uint8Array(),
            proof_height: (0, helpers_1.isSet)(object.proof_height) ? client_1.Height.fromJSON(object.proof_height) : undefined,
            signer: (0, helpers_1.isSet)(object.signer) ? String(object.signer) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.port_id !== undefined && (obj.port_id = message.port_id);
        message.previous_channel_id !== undefined && (obj.previous_channel_id = message.previous_channel_id);
        message.channel !== undefined && (obj.channel = message.channel ? channel_1.Channel.toJSON(message.channel) : undefined);
        message.counterparty_version !== undefined && (obj.counterparty_version = message.counterparty_version);
        message.proof_init !== undefined && (obj.proof_init = (0, helpers_1.base64FromBytes)(message.proof_init !== undefined ? message.proof_init : new Uint8Array()));
        message.proof_height !== undefined && (obj.proof_height = message.proof_height ? client_1.Height.toJSON(message.proof_height) : undefined);
        message.signer !== undefined && (obj.signer = message.signer);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgChannelOpenTry();
        message.port_id = object.port_id ?? "";
        message.previous_channel_id = object.previous_channel_id ?? "";
        message.channel = object.channel !== undefined && object.channel !== null ? channel_1.Channel.fromPartial(object.channel) : undefined;
        message.counterparty_version = object.counterparty_version ?? "";
        message.proof_init = object.proof_init ?? new Uint8Array();
        message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? client_1.Height.fromPartial(object.proof_height) : undefined;
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
            message.channel = channel_1.Channel.fromAmino(object.channel);
        }
        if (object.counterparty_version !== undefined && object.counterparty_version !== null) {
            message.counterparty_version = object.counterparty_version;
        }
        if (object.proof_init !== undefined && object.proof_init !== null) {
            message.proof_init = (0, helpers_1.bytesFromBase64)(object.proof_init);
        }
        if (object.proof_height !== undefined && object.proof_height !== null) {
            message.proof_height = client_1.Height.fromAmino(object.proof_height);
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
        obj.channel = message.channel ? channel_1.Channel.toAmino(message.channel) : undefined;
        obj.counterparty_version = message.counterparty_version;
        obj.proof_init = message.proof_init ? (0, helpers_1.base64FromBytes)(message.proof_init) : undefined;
        obj.proof_height = message.proof_height ? client_1.Height.toAmino(message.proof_height) : {};
        obj.signer = message.signer;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgChannelOpenTry.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgChannelOpenTry",
            value: exports.MsgChannelOpenTry.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgChannelOpenTry.decode(message.value);
    },
    toProto(message) {
        return exports.MsgChannelOpenTry.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgChannelOpenTry",
            value: exports.MsgChannelOpenTry.encode(message).finish()
        };
    }
};
function createBaseMsgChannelOpenTryResponse() {
    return {
        version: "",
        channel_id: ""
    };
}
exports.MsgChannelOpenTryResponse = {
    typeUrl: "/ibc.core.channel.v1.MsgChannelOpenTryResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.version !== "") {
            writer.uint32(10).string(message.version);
        }
        if (message.channel_id !== "") {
            writer.uint32(18).string(message.channel_id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
            version: (0, helpers_1.isSet)(object.version) ? String(object.version) : "",
            channel_id: (0, helpers_1.isSet)(object.channel_id) ? String(object.channel_id) : ""
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
        return exports.MsgChannelOpenTryResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgChannelOpenTryResponse",
            value: exports.MsgChannelOpenTryResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgChannelOpenTryResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgChannelOpenTryResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgChannelOpenTryResponse",
            value: exports.MsgChannelOpenTryResponse.encode(message).finish()
        };
    }
};
function createBaseMsgChannelOpenAck() {
    return {
        port_id: "",
        channel_id: "",
        counterparty_channel_id: "",
        counterparty_version: "",
        proof_try: new Uint8Array(),
        proof_height: client_1.Height.fromPartial({}),
        signer: ""
    };
}
exports.MsgChannelOpenAck = {
    typeUrl: "/ibc.core.channel.v1.MsgChannelOpenAck",
    encode(message, writer = binary_1.BinaryWriter.create()) {
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
            client_1.Height.encode(message.proof_height, writer.uint32(50).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(58).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
                    message.proof_height = client_1.Height.decode(reader, reader.uint32());
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
            port_id: (0, helpers_1.isSet)(object.port_id) ? String(object.port_id) : "",
            channel_id: (0, helpers_1.isSet)(object.channel_id) ? String(object.channel_id) : "",
            counterparty_channel_id: (0, helpers_1.isSet)(object.counterparty_channel_id) ? String(object.counterparty_channel_id) : "",
            counterparty_version: (0, helpers_1.isSet)(object.counterparty_version) ? String(object.counterparty_version) : "",
            proof_try: (0, helpers_1.isSet)(object.proof_try) ? (0, helpers_1.bytesFromBase64)(object.proof_try) : new Uint8Array(),
            proof_height: (0, helpers_1.isSet)(object.proof_height) ? client_1.Height.fromJSON(object.proof_height) : undefined,
            signer: (0, helpers_1.isSet)(object.signer) ? String(object.signer) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.port_id !== undefined && (obj.port_id = message.port_id);
        message.channel_id !== undefined && (obj.channel_id = message.channel_id);
        message.counterparty_channel_id !== undefined && (obj.counterparty_channel_id = message.counterparty_channel_id);
        message.counterparty_version !== undefined && (obj.counterparty_version = message.counterparty_version);
        message.proof_try !== undefined && (obj.proof_try = (0, helpers_1.base64FromBytes)(message.proof_try !== undefined ? message.proof_try : new Uint8Array()));
        message.proof_height !== undefined && (obj.proof_height = message.proof_height ? client_1.Height.toJSON(message.proof_height) : undefined);
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
        message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? client_1.Height.fromPartial(object.proof_height) : undefined;
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
            message.proof_try = (0, helpers_1.bytesFromBase64)(object.proof_try);
        }
        if (object.proof_height !== undefined && object.proof_height !== null) {
            message.proof_height = client_1.Height.fromAmino(object.proof_height);
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
        obj.proof_try = message.proof_try ? (0, helpers_1.base64FromBytes)(message.proof_try) : undefined;
        obj.proof_height = message.proof_height ? client_1.Height.toAmino(message.proof_height) : {};
        obj.signer = message.signer;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgChannelOpenAck.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgChannelOpenAck",
            value: exports.MsgChannelOpenAck.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgChannelOpenAck.decode(message.value);
    },
    toProto(message) {
        return exports.MsgChannelOpenAck.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgChannelOpenAck",
            value: exports.MsgChannelOpenAck.encode(message).finish()
        };
    }
};
function createBaseMsgChannelOpenAckResponse() {
    return {};
}
exports.MsgChannelOpenAckResponse = {
    typeUrl: "/ibc.core.channel.v1.MsgChannelOpenAckResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgChannelOpenAckResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgChannelOpenAckResponse",
            value: exports.MsgChannelOpenAckResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgChannelOpenAckResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgChannelOpenAckResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgChannelOpenAckResponse",
            value: exports.MsgChannelOpenAckResponse.encode(message).finish()
        };
    }
};
function createBaseMsgChannelOpenConfirm() {
    return {
        port_id: "",
        channel_id: "",
        proof_ack: new Uint8Array(),
        proof_height: client_1.Height.fromPartial({}),
        signer: ""
    };
}
exports.MsgChannelOpenConfirm = {
    typeUrl: "/ibc.core.channel.v1.MsgChannelOpenConfirm",
    encode(message, writer = binary_1.BinaryWriter.create()) {
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
            client_1.Height.encode(message.proof_height, writer.uint32(34).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(42).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
                    message.proof_height = client_1.Height.decode(reader, reader.uint32());
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
            port_id: (0, helpers_1.isSet)(object.port_id) ? String(object.port_id) : "",
            channel_id: (0, helpers_1.isSet)(object.channel_id) ? String(object.channel_id) : "",
            proof_ack: (0, helpers_1.isSet)(object.proof_ack) ? (0, helpers_1.bytesFromBase64)(object.proof_ack) : new Uint8Array(),
            proof_height: (0, helpers_1.isSet)(object.proof_height) ? client_1.Height.fromJSON(object.proof_height) : undefined,
            signer: (0, helpers_1.isSet)(object.signer) ? String(object.signer) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.port_id !== undefined && (obj.port_id = message.port_id);
        message.channel_id !== undefined && (obj.channel_id = message.channel_id);
        message.proof_ack !== undefined && (obj.proof_ack = (0, helpers_1.base64FromBytes)(message.proof_ack !== undefined ? message.proof_ack : new Uint8Array()));
        message.proof_height !== undefined && (obj.proof_height = message.proof_height ? client_1.Height.toJSON(message.proof_height) : undefined);
        message.signer !== undefined && (obj.signer = message.signer);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgChannelOpenConfirm();
        message.port_id = object.port_id ?? "";
        message.channel_id = object.channel_id ?? "";
        message.proof_ack = object.proof_ack ?? new Uint8Array();
        message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? client_1.Height.fromPartial(object.proof_height) : undefined;
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
            message.proof_ack = (0, helpers_1.bytesFromBase64)(object.proof_ack);
        }
        if (object.proof_height !== undefined && object.proof_height !== null) {
            message.proof_height = client_1.Height.fromAmino(object.proof_height);
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
        obj.proof_ack = message.proof_ack ? (0, helpers_1.base64FromBytes)(message.proof_ack) : undefined;
        obj.proof_height = message.proof_height ? client_1.Height.toAmino(message.proof_height) : {};
        obj.signer = message.signer;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgChannelOpenConfirm.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgChannelOpenConfirm",
            value: exports.MsgChannelOpenConfirm.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgChannelOpenConfirm.decode(message.value);
    },
    toProto(message) {
        return exports.MsgChannelOpenConfirm.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgChannelOpenConfirm",
            value: exports.MsgChannelOpenConfirm.encode(message).finish()
        };
    }
};
function createBaseMsgChannelOpenConfirmResponse() {
    return {};
}
exports.MsgChannelOpenConfirmResponse = {
    typeUrl: "/ibc.core.channel.v1.MsgChannelOpenConfirmResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgChannelOpenConfirmResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgChannelOpenConfirmResponse",
            value: exports.MsgChannelOpenConfirmResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgChannelOpenConfirmResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgChannelOpenConfirmResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgChannelOpenConfirmResponse",
            value: exports.MsgChannelOpenConfirmResponse.encode(message).finish()
        };
    }
};
function createBaseMsgChannelCloseInit() {
    return {
        port_id: "",
        channel_id: "",
        signer: ""
    };
}
exports.MsgChannelCloseInit = {
    typeUrl: "/ibc.core.channel.v1.MsgChannelCloseInit",
    encode(message, writer = binary_1.BinaryWriter.create()) {
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
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
            port_id: (0, helpers_1.isSet)(object.port_id) ? String(object.port_id) : "",
            channel_id: (0, helpers_1.isSet)(object.channel_id) ? String(object.channel_id) : "",
            signer: (0, helpers_1.isSet)(object.signer) ? String(object.signer) : ""
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
        return exports.MsgChannelCloseInit.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgChannelCloseInit",
            value: exports.MsgChannelCloseInit.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgChannelCloseInit.decode(message.value);
    },
    toProto(message) {
        return exports.MsgChannelCloseInit.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgChannelCloseInit",
            value: exports.MsgChannelCloseInit.encode(message).finish()
        };
    }
};
function createBaseMsgChannelCloseInitResponse() {
    return {};
}
exports.MsgChannelCloseInitResponse = {
    typeUrl: "/ibc.core.channel.v1.MsgChannelCloseInitResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgChannelCloseInitResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgChannelCloseInitResponse",
            value: exports.MsgChannelCloseInitResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgChannelCloseInitResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgChannelCloseInitResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgChannelCloseInitResponse",
            value: exports.MsgChannelCloseInitResponse.encode(message).finish()
        };
    }
};
function createBaseMsgChannelCloseConfirm() {
    return {
        port_id: "",
        channel_id: "",
        proof_init: new Uint8Array(),
        proof_height: client_1.Height.fromPartial({}),
        signer: ""
    };
}
exports.MsgChannelCloseConfirm = {
    typeUrl: "/ibc.core.channel.v1.MsgChannelCloseConfirm",
    encode(message, writer = binary_1.BinaryWriter.create()) {
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
            client_1.Height.encode(message.proof_height, writer.uint32(34).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(42).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
                    message.proof_height = client_1.Height.decode(reader, reader.uint32());
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
            port_id: (0, helpers_1.isSet)(object.port_id) ? String(object.port_id) : "",
            channel_id: (0, helpers_1.isSet)(object.channel_id) ? String(object.channel_id) : "",
            proof_init: (0, helpers_1.isSet)(object.proof_init) ? (0, helpers_1.bytesFromBase64)(object.proof_init) : new Uint8Array(),
            proof_height: (0, helpers_1.isSet)(object.proof_height) ? client_1.Height.fromJSON(object.proof_height) : undefined,
            signer: (0, helpers_1.isSet)(object.signer) ? String(object.signer) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.port_id !== undefined && (obj.port_id = message.port_id);
        message.channel_id !== undefined && (obj.channel_id = message.channel_id);
        message.proof_init !== undefined && (obj.proof_init = (0, helpers_1.base64FromBytes)(message.proof_init !== undefined ? message.proof_init : new Uint8Array()));
        message.proof_height !== undefined && (obj.proof_height = message.proof_height ? client_1.Height.toJSON(message.proof_height) : undefined);
        message.signer !== undefined && (obj.signer = message.signer);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgChannelCloseConfirm();
        message.port_id = object.port_id ?? "";
        message.channel_id = object.channel_id ?? "";
        message.proof_init = object.proof_init ?? new Uint8Array();
        message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? client_1.Height.fromPartial(object.proof_height) : undefined;
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
            message.proof_init = (0, helpers_1.bytesFromBase64)(object.proof_init);
        }
        if (object.proof_height !== undefined && object.proof_height !== null) {
            message.proof_height = client_1.Height.fromAmino(object.proof_height);
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
        obj.proof_init = message.proof_init ? (0, helpers_1.base64FromBytes)(message.proof_init) : undefined;
        obj.proof_height = message.proof_height ? client_1.Height.toAmino(message.proof_height) : {};
        obj.signer = message.signer;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgChannelCloseConfirm.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgChannelCloseConfirm",
            value: exports.MsgChannelCloseConfirm.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgChannelCloseConfirm.decode(message.value);
    },
    toProto(message) {
        return exports.MsgChannelCloseConfirm.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgChannelCloseConfirm",
            value: exports.MsgChannelCloseConfirm.encode(message).finish()
        };
    }
};
function createBaseMsgChannelCloseConfirmResponse() {
    return {};
}
exports.MsgChannelCloseConfirmResponse = {
    typeUrl: "/ibc.core.channel.v1.MsgChannelCloseConfirmResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgChannelCloseConfirmResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgChannelCloseConfirmResponse",
            value: exports.MsgChannelCloseConfirmResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgChannelCloseConfirmResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgChannelCloseConfirmResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgChannelCloseConfirmResponse",
            value: exports.MsgChannelCloseConfirmResponse.encode(message).finish()
        };
    }
};
function createBaseMsgRecvPacket() {
    return {
        packet: channel_1.Packet.fromPartial({}),
        proof_commitment: new Uint8Array(),
        proof_height: client_1.Height.fromPartial({}),
        signer: ""
    };
}
exports.MsgRecvPacket = {
    typeUrl: "/ibc.core.channel.v1.MsgRecvPacket",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.packet !== undefined) {
            channel_1.Packet.encode(message.packet, writer.uint32(10).fork()).ldelim();
        }
        if (message.proof_commitment.length !== 0) {
            writer.uint32(18).bytes(message.proof_commitment);
        }
        if (message.proof_height !== undefined) {
            client_1.Height.encode(message.proof_height, writer.uint32(26).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(34).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRecvPacket();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.packet = channel_1.Packet.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.proof_commitment = reader.bytes();
                    break;
                case 3:
                    message.proof_height = client_1.Height.decode(reader, reader.uint32());
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
            packet: (0, helpers_1.isSet)(object.packet) ? channel_1.Packet.fromJSON(object.packet) : undefined,
            proof_commitment: (0, helpers_1.isSet)(object.proof_commitment) ? (0, helpers_1.bytesFromBase64)(object.proof_commitment) : new Uint8Array(),
            proof_height: (0, helpers_1.isSet)(object.proof_height) ? client_1.Height.fromJSON(object.proof_height) : undefined,
            signer: (0, helpers_1.isSet)(object.signer) ? String(object.signer) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.packet !== undefined && (obj.packet = message.packet ? channel_1.Packet.toJSON(message.packet) : undefined);
        message.proof_commitment !== undefined && (obj.proof_commitment = (0, helpers_1.base64FromBytes)(message.proof_commitment !== undefined ? message.proof_commitment : new Uint8Array()));
        message.proof_height !== undefined && (obj.proof_height = message.proof_height ? client_1.Height.toJSON(message.proof_height) : undefined);
        message.signer !== undefined && (obj.signer = message.signer);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgRecvPacket();
        message.packet = object.packet !== undefined && object.packet !== null ? channel_1.Packet.fromPartial(object.packet) : undefined;
        message.proof_commitment = object.proof_commitment ?? new Uint8Array();
        message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? client_1.Height.fromPartial(object.proof_height) : undefined;
        message.signer = object.signer ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgRecvPacket();
        if (object.packet !== undefined && object.packet !== null) {
            message.packet = channel_1.Packet.fromAmino(object.packet);
        }
        if (object.proof_commitment !== undefined && object.proof_commitment !== null) {
            message.proof_commitment = (0, helpers_1.bytesFromBase64)(object.proof_commitment);
        }
        if (object.proof_height !== undefined && object.proof_height !== null) {
            message.proof_height = client_1.Height.fromAmino(object.proof_height);
        }
        if (object.signer !== undefined && object.signer !== null) {
            message.signer = object.signer;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.packet = message.packet ? channel_1.Packet.toAmino(message.packet) : undefined;
        obj.proof_commitment = message.proof_commitment ? (0, helpers_1.base64FromBytes)(message.proof_commitment) : undefined;
        obj.proof_height = message.proof_height ? client_1.Height.toAmino(message.proof_height) : {};
        obj.signer = message.signer;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgRecvPacket.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgRecvPacket",
            value: exports.MsgRecvPacket.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgRecvPacket.decode(message.value);
    },
    toProto(message) {
        return exports.MsgRecvPacket.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgRecvPacket",
            value: exports.MsgRecvPacket.encode(message).finish()
        };
    }
};
function createBaseMsgRecvPacketResponse() {
    return {
        result: 0
    };
}
exports.MsgRecvPacketResponse = {
    typeUrl: "/ibc.core.channel.v1.MsgRecvPacketResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.result !== 0) {
            writer.uint32(8).int32(message.result);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
            result: (0, helpers_1.isSet)(object.result) ? responseResultTypeFromJSON(object.result) : -1
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
        return exports.MsgRecvPacketResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgRecvPacketResponse",
            value: exports.MsgRecvPacketResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgRecvPacketResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgRecvPacketResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgRecvPacketResponse",
            value: exports.MsgRecvPacketResponse.encode(message).finish()
        };
    }
};
function createBaseMsgTimeout() {
    return {
        packet: channel_1.Packet.fromPartial({}),
        proof_unreceived: new Uint8Array(),
        proof_height: client_1.Height.fromPartial({}),
        next_sequence_recv: BigInt(0),
        signer: ""
    };
}
exports.MsgTimeout = {
    typeUrl: "/ibc.core.channel.v1.MsgTimeout",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.packet !== undefined) {
            channel_1.Packet.encode(message.packet, writer.uint32(10).fork()).ldelim();
        }
        if (message.proof_unreceived.length !== 0) {
            writer.uint32(18).bytes(message.proof_unreceived);
        }
        if (message.proof_height !== undefined) {
            client_1.Height.encode(message.proof_height, writer.uint32(26).fork()).ldelim();
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
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgTimeout();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.packet = channel_1.Packet.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.proof_unreceived = reader.bytes();
                    break;
                case 3:
                    message.proof_height = client_1.Height.decode(reader, reader.uint32());
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
            packet: (0, helpers_1.isSet)(object.packet) ? channel_1.Packet.fromJSON(object.packet) : undefined,
            proof_unreceived: (0, helpers_1.isSet)(object.proof_unreceived) ? (0, helpers_1.bytesFromBase64)(object.proof_unreceived) : new Uint8Array(),
            proof_height: (0, helpers_1.isSet)(object.proof_height) ? client_1.Height.fromJSON(object.proof_height) : undefined,
            next_sequence_recv: (0, helpers_1.isSet)(object.next_sequence_recv) ? BigInt(object.next_sequence_recv.toString()) : BigInt(0),
            signer: (0, helpers_1.isSet)(object.signer) ? String(object.signer) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.packet !== undefined && (obj.packet = message.packet ? channel_1.Packet.toJSON(message.packet) : undefined);
        message.proof_unreceived !== undefined && (obj.proof_unreceived = (0, helpers_1.base64FromBytes)(message.proof_unreceived !== undefined ? message.proof_unreceived : new Uint8Array()));
        message.proof_height !== undefined && (obj.proof_height = message.proof_height ? client_1.Height.toJSON(message.proof_height) : undefined);
        message.next_sequence_recv !== undefined && (obj.next_sequence_recv = (message.next_sequence_recv || BigInt(0)).toString());
        message.signer !== undefined && (obj.signer = message.signer);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgTimeout();
        message.packet = object.packet !== undefined && object.packet !== null ? channel_1.Packet.fromPartial(object.packet) : undefined;
        message.proof_unreceived = object.proof_unreceived ?? new Uint8Array();
        message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? client_1.Height.fromPartial(object.proof_height) : undefined;
        message.next_sequence_recv = object.next_sequence_recv !== undefined && object.next_sequence_recv !== null ? BigInt(object.next_sequence_recv.toString()) : BigInt(0);
        message.signer = object.signer ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgTimeout();
        if (object.packet !== undefined && object.packet !== null) {
            message.packet = channel_1.Packet.fromAmino(object.packet);
        }
        if (object.proof_unreceived !== undefined && object.proof_unreceived !== null) {
            message.proof_unreceived = (0, helpers_1.bytesFromBase64)(object.proof_unreceived);
        }
        if (object.proof_height !== undefined && object.proof_height !== null) {
            message.proof_height = client_1.Height.fromAmino(object.proof_height);
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
        obj.packet = message.packet ? channel_1.Packet.toAmino(message.packet) : undefined;
        obj.proof_unreceived = message.proof_unreceived ? (0, helpers_1.base64FromBytes)(message.proof_unreceived) : undefined;
        obj.proof_height = message.proof_height ? client_1.Height.toAmino(message.proof_height) : {};
        obj.next_sequence_recv = message.next_sequence_recv ? message.next_sequence_recv.toString() : undefined;
        obj.signer = message.signer;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgTimeout.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgTimeout",
            value: exports.MsgTimeout.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgTimeout.decode(message.value);
    },
    toProto(message) {
        return exports.MsgTimeout.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgTimeout",
            value: exports.MsgTimeout.encode(message).finish()
        };
    }
};
function createBaseMsgTimeoutResponse() {
    return {
        result: 0
    };
}
exports.MsgTimeoutResponse = {
    typeUrl: "/ibc.core.channel.v1.MsgTimeoutResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.result !== 0) {
            writer.uint32(8).int32(message.result);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
            result: (0, helpers_1.isSet)(object.result) ? responseResultTypeFromJSON(object.result) : -1
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
        return exports.MsgTimeoutResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgTimeoutResponse",
            value: exports.MsgTimeoutResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgTimeoutResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgTimeoutResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgTimeoutResponse",
            value: exports.MsgTimeoutResponse.encode(message).finish()
        };
    }
};
function createBaseMsgTimeoutOnClose() {
    return {
        packet: channel_1.Packet.fromPartial({}),
        proof_unreceived: new Uint8Array(),
        proof_close: new Uint8Array(),
        proof_height: client_1.Height.fromPartial({}),
        next_sequence_recv: BigInt(0),
        signer: ""
    };
}
exports.MsgTimeoutOnClose = {
    typeUrl: "/ibc.core.channel.v1.MsgTimeoutOnClose",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.packet !== undefined) {
            channel_1.Packet.encode(message.packet, writer.uint32(10).fork()).ldelim();
        }
        if (message.proof_unreceived.length !== 0) {
            writer.uint32(18).bytes(message.proof_unreceived);
        }
        if (message.proof_close.length !== 0) {
            writer.uint32(26).bytes(message.proof_close);
        }
        if (message.proof_height !== undefined) {
            client_1.Height.encode(message.proof_height, writer.uint32(34).fork()).ldelim();
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
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgTimeoutOnClose();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.packet = channel_1.Packet.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.proof_unreceived = reader.bytes();
                    break;
                case 3:
                    message.proof_close = reader.bytes();
                    break;
                case 4:
                    message.proof_height = client_1.Height.decode(reader, reader.uint32());
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
            packet: (0, helpers_1.isSet)(object.packet) ? channel_1.Packet.fromJSON(object.packet) : undefined,
            proof_unreceived: (0, helpers_1.isSet)(object.proof_unreceived) ? (0, helpers_1.bytesFromBase64)(object.proof_unreceived) : new Uint8Array(),
            proof_close: (0, helpers_1.isSet)(object.proof_close) ? (0, helpers_1.bytesFromBase64)(object.proof_close) : new Uint8Array(),
            proof_height: (0, helpers_1.isSet)(object.proof_height) ? client_1.Height.fromJSON(object.proof_height) : undefined,
            next_sequence_recv: (0, helpers_1.isSet)(object.next_sequence_recv) ? BigInt(object.next_sequence_recv.toString()) : BigInt(0),
            signer: (0, helpers_1.isSet)(object.signer) ? String(object.signer) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.packet !== undefined && (obj.packet = message.packet ? channel_1.Packet.toJSON(message.packet) : undefined);
        message.proof_unreceived !== undefined && (obj.proof_unreceived = (0, helpers_1.base64FromBytes)(message.proof_unreceived !== undefined ? message.proof_unreceived : new Uint8Array()));
        message.proof_close !== undefined && (obj.proof_close = (0, helpers_1.base64FromBytes)(message.proof_close !== undefined ? message.proof_close : new Uint8Array()));
        message.proof_height !== undefined && (obj.proof_height = message.proof_height ? client_1.Height.toJSON(message.proof_height) : undefined);
        message.next_sequence_recv !== undefined && (obj.next_sequence_recv = (message.next_sequence_recv || BigInt(0)).toString());
        message.signer !== undefined && (obj.signer = message.signer);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgTimeoutOnClose();
        message.packet = object.packet !== undefined && object.packet !== null ? channel_1.Packet.fromPartial(object.packet) : undefined;
        message.proof_unreceived = object.proof_unreceived ?? new Uint8Array();
        message.proof_close = object.proof_close ?? new Uint8Array();
        message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? client_1.Height.fromPartial(object.proof_height) : undefined;
        message.next_sequence_recv = object.next_sequence_recv !== undefined && object.next_sequence_recv !== null ? BigInt(object.next_sequence_recv.toString()) : BigInt(0);
        message.signer = object.signer ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgTimeoutOnClose();
        if (object.packet !== undefined && object.packet !== null) {
            message.packet = channel_1.Packet.fromAmino(object.packet);
        }
        if (object.proof_unreceived !== undefined && object.proof_unreceived !== null) {
            message.proof_unreceived = (0, helpers_1.bytesFromBase64)(object.proof_unreceived);
        }
        if (object.proof_close !== undefined && object.proof_close !== null) {
            message.proof_close = (0, helpers_1.bytesFromBase64)(object.proof_close);
        }
        if (object.proof_height !== undefined && object.proof_height !== null) {
            message.proof_height = client_1.Height.fromAmino(object.proof_height);
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
        obj.packet = message.packet ? channel_1.Packet.toAmino(message.packet) : undefined;
        obj.proof_unreceived = message.proof_unreceived ? (0, helpers_1.base64FromBytes)(message.proof_unreceived) : undefined;
        obj.proof_close = message.proof_close ? (0, helpers_1.base64FromBytes)(message.proof_close) : undefined;
        obj.proof_height = message.proof_height ? client_1.Height.toAmino(message.proof_height) : {};
        obj.next_sequence_recv = message.next_sequence_recv ? message.next_sequence_recv.toString() : undefined;
        obj.signer = message.signer;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgTimeoutOnClose.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgTimeoutOnClose",
            value: exports.MsgTimeoutOnClose.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgTimeoutOnClose.decode(message.value);
    },
    toProto(message) {
        return exports.MsgTimeoutOnClose.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgTimeoutOnClose",
            value: exports.MsgTimeoutOnClose.encode(message).finish()
        };
    }
};
function createBaseMsgTimeoutOnCloseResponse() {
    return {
        result: 0
    };
}
exports.MsgTimeoutOnCloseResponse = {
    typeUrl: "/ibc.core.channel.v1.MsgTimeoutOnCloseResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.result !== 0) {
            writer.uint32(8).int32(message.result);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
            result: (0, helpers_1.isSet)(object.result) ? responseResultTypeFromJSON(object.result) : -1
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
        return exports.MsgTimeoutOnCloseResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgTimeoutOnCloseResponse",
            value: exports.MsgTimeoutOnCloseResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgTimeoutOnCloseResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgTimeoutOnCloseResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgTimeoutOnCloseResponse",
            value: exports.MsgTimeoutOnCloseResponse.encode(message).finish()
        };
    }
};
function createBaseMsgAcknowledgement() {
    return {
        packet: channel_1.Packet.fromPartial({}),
        acknowledgement: new Uint8Array(),
        proof_acked: new Uint8Array(),
        proof_height: client_1.Height.fromPartial({}),
        signer: ""
    };
}
exports.MsgAcknowledgement = {
    typeUrl: "/ibc.core.channel.v1.MsgAcknowledgement",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.packet !== undefined) {
            channel_1.Packet.encode(message.packet, writer.uint32(10).fork()).ldelim();
        }
        if (message.acknowledgement.length !== 0) {
            writer.uint32(18).bytes(message.acknowledgement);
        }
        if (message.proof_acked.length !== 0) {
            writer.uint32(26).bytes(message.proof_acked);
        }
        if (message.proof_height !== undefined) {
            client_1.Height.encode(message.proof_height, writer.uint32(34).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(42).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAcknowledgement();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.packet = channel_1.Packet.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.acknowledgement = reader.bytes();
                    break;
                case 3:
                    message.proof_acked = reader.bytes();
                    break;
                case 4:
                    message.proof_height = client_1.Height.decode(reader, reader.uint32());
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
            packet: (0, helpers_1.isSet)(object.packet) ? channel_1.Packet.fromJSON(object.packet) : undefined,
            acknowledgement: (0, helpers_1.isSet)(object.acknowledgement) ? (0, helpers_1.bytesFromBase64)(object.acknowledgement) : new Uint8Array(),
            proof_acked: (0, helpers_1.isSet)(object.proof_acked) ? (0, helpers_1.bytesFromBase64)(object.proof_acked) : new Uint8Array(),
            proof_height: (0, helpers_1.isSet)(object.proof_height) ? client_1.Height.fromJSON(object.proof_height) : undefined,
            signer: (0, helpers_1.isSet)(object.signer) ? String(object.signer) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.packet !== undefined && (obj.packet = message.packet ? channel_1.Packet.toJSON(message.packet) : undefined);
        message.acknowledgement !== undefined && (obj.acknowledgement = (0, helpers_1.base64FromBytes)(message.acknowledgement !== undefined ? message.acknowledgement : new Uint8Array()));
        message.proof_acked !== undefined && (obj.proof_acked = (0, helpers_1.base64FromBytes)(message.proof_acked !== undefined ? message.proof_acked : new Uint8Array()));
        message.proof_height !== undefined && (obj.proof_height = message.proof_height ? client_1.Height.toJSON(message.proof_height) : undefined);
        message.signer !== undefined && (obj.signer = message.signer);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgAcknowledgement();
        message.packet = object.packet !== undefined && object.packet !== null ? channel_1.Packet.fromPartial(object.packet) : undefined;
        message.acknowledgement = object.acknowledgement ?? new Uint8Array();
        message.proof_acked = object.proof_acked ?? new Uint8Array();
        message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? client_1.Height.fromPartial(object.proof_height) : undefined;
        message.signer = object.signer ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgAcknowledgement();
        if (object.packet !== undefined && object.packet !== null) {
            message.packet = channel_1.Packet.fromAmino(object.packet);
        }
        if (object.acknowledgement !== undefined && object.acknowledgement !== null) {
            message.acknowledgement = (0, helpers_1.bytesFromBase64)(object.acknowledgement);
        }
        if (object.proof_acked !== undefined && object.proof_acked !== null) {
            message.proof_acked = (0, helpers_1.bytesFromBase64)(object.proof_acked);
        }
        if (object.proof_height !== undefined && object.proof_height !== null) {
            message.proof_height = client_1.Height.fromAmino(object.proof_height);
        }
        if (object.signer !== undefined && object.signer !== null) {
            message.signer = object.signer;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.packet = message.packet ? channel_1.Packet.toAmino(message.packet) : undefined;
        obj.acknowledgement = message.acknowledgement ? (0, helpers_1.base64FromBytes)(message.acknowledgement) : undefined;
        obj.proof_acked = message.proof_acked ? (0, helpers_1.base64FromBytes)(message.proof_acked) : undefined;
        obj.proof_height = message.proof_height ? client_1.Height.toAmino(message.proof_height) : {};
        obj.signer = message.signer;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgAcknowledgement.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgAcknowledgement",
            value: exports.MsgAcknowledgement.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgAcknowledgement.decode(message.value);
    },
    toProto(message) {
        return exports.MsgAcknowledgement.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgAcknowledgement",
            value: exports.MsgAcknowledgement.encode(message).finish()
        };
    }
};
function createBaseMsgAcknowledgementResponse() {
    return {
        result: 0
    };
}
exports.MsgAcknowledgementResponse = {
    typeUrl: "/ibc.core.channel.v1.MsgAcknowledgementResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.result !== 0) {
            writer.uint32(8).int32(message.result);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
            result: (0, helpers_1.isSet)(object.result) ? responseResultTypeFromJSON(object.result) : -1
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
        return exports.MsgAcknowledgementResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgAcknowledgementResponse",
            value: exports.MsgAcknowledgementResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgAcknowledgementResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgAcknowledgementResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgAcknowledgementResponse",
            value: exports.MsgAcknowledgementResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=tx.js.map
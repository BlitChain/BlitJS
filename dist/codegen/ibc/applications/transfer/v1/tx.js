"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgUpdateParamsResponse = exports.MsgUpdateParams = exports.MsgTransferResponse = exports.MsgTransfer = exports.protobufPackage = void 0;
//@ts-nocheck
const coin_1 = require("../../../../cosmos/base/v1beta1/coin");
const client_1 = require("../../../core/client/v1/client");
const binary_1 = require("../../../../binary");
const helpers_1 = require("../../../../helpers");
const registry_1 = require("../../../../registry");
exports.protobufPackage = "ibc.applications.transfer.v1";
function createBaseMsgTransfer() {
    return {
        source_port: "",
        source_channel: "",
        token: coin_1.Coin.fromPartial({}),
        sender: "",
        receiver: "",
        timeout_height: client_1.Height.fromPartial({}),
        timeout_timestamp: BigInt(0),
        memo: ""
    };
}
exports.MsgTransfer = {
    typeUrl: "/ibc.applications.transfer.v1.MsgTransfer",
    aminoType: "cosmos-sdk/MsgTransfer",
    is(o) {
        return o && (o.$typeUrl === exports.MsgTransfer.typeUrl || typeof o.source_port === "string" && typeof o.source_channel === "string" && coin_1.Coin.is(o.token) && typeof o.sender === "string" && typeof o.receiver === "string" && client_1.Height.is(o.timeout_height) && typeof o.timeout_timestamp === "bigint" && typeof o.memo === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgTransfer.typeUrl || typeof o.source_port === "string" && typeof o.source_channel === "string" && coin_1.Coin.isSDK(o.token) && typeof o.sender === "string" && typeof o.receiver === "string" && client_1.Height.isSDK(o.timeout_height) && typeof o.timeout_timestamp === "bigint" && typeof o.memo === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgTransfer.typeUrl || typeof o.source_port === "string" && typeof o.source_channel === "string" && coin_1.Coin.isAmino(o.token) && typeof o.sender === "string" && typeof o.receiver === "string" && client_1.Height.isAmino(o.timeout_height) && typeof o.timeout_timestamp === "bigint" && typeof o.memo === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.source_port !== "") {
            writer.uint32(10).string(message.source_port);
        }
        if (message.source_channel !== "") {
            writer.uint32(18).string(message.source_channel);
        }
        if (message.token !== undefined) {
            coin_1.Coin.encode(message.token, writer.uint32(26).fork()).ldelim();
        }
        if (message.sender !== "") {
            writer.uint32(34).string(message.sender);
        }
        if (message.receiver !== "") {
            writer.uint32(42).string(message.receiver);
        }
        if (message.timeout_height !== undefined) {
            client_1.Height.encode(message.timeout_height, writer.uint32(50).fork()).ldelim();
        }
        if (message.timeout_timestamp !== BigInt(0)) {
            writer.uint32(56).uint64(message.timeout_timestamp);
        }
        if (message.memo !== "") {
            writer.uint32(66).string(message.memo);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgTransfer();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.source_port = reader.string();
                    break;
                case 2:
                    message.source_channel = reader.string();
                    break;
                case 3:
                    message.token = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.sender = reader.string();
                    break;
                case 5:
                    message.receiver = reader.string();
                    break;
                case 6:
                    message.timeout_height = client_1.Height.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.timeout_timestamp = reader.uint64();
                    break;
                case 8:
                    message.memo = reader.string();
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
            source_port: (0, helpers_1.isSet)(object.source_port) ? String(object.source_port) : "",
            source_channel: (0, helpers_1.isSet)(object.source_channel) ? String(object.source_channel) : "",
            token: (0, helpers_1.isSet)(object.token) ? coin_1.Coin.fromJSON(object.token) : undefined,
            sender: (0, helpers_1.isSet)(object.sender) ? String(object.sender) : "",
            receiver: (0, helpers_1.isSet)(object.receiver) ? String(object.receiver) : "",
            timeout_height: (0, helpers_1.isSet)(object.timeout_height) ? client_1.Height.fromJSON(object.timeout_height) : undefined,
            timeout_timestamp: (0, helpers_1.isSet)(object.timeout_timestamp) ? BigInt(object.timeout_timestamp.toString()) : BigInt(0),
            memo: (0, helpers_1.isSet)(object.memo) ? String(object.memo) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.source_port !== undefined && (obj.source_port = message.source_port);
        message.source_channel !== undefined && (obj.source_channel = message.source_channel);
        message.token !== undefined && (obj.token = message.token ? coin_1.Coin.toJSON(message.token) : undefined);
        message.sender !== undefined && (obj.sender = message.sender);
        message.receiver !== undefined && (obj.receiver = message.receiver);
        message.timeout_height !== undefined && (obj.timeout_height = message.timeout_height ? client_1.Height.toJSON(message.timeout_height) : undefined);
        message.timeout_timestamp !== undefined && (obj.timeout_timestamp = (message.timeout_timestamp || BigInt(0)).toString());
        message.memo !== undefined && (obj.memo = message.memo);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgTransfer();
        message.source_port = object.source_port ?? "";
        message.source_channel = object.source_channel ?? "";
        message.token = object.token !== undefined && object.token !== null ? coin_1.Coin.fromPartial(object.token) : undefined;
        message.sender = object.sender ?? "";
        message.receiver = object.receiver ?? "";
        message.timeout_height = object.timeout_height !== undefined && object.timeout_height !== null ? client_1.Height.fromPartial(object.timeout_height) : undefined;
        message.timeout_timestamp = object.timeout_timestamp !== undefined && object.timeout_timestamp !== null ? BigInt(object.timeout_timestamp.toString()) : BigInt(0);
        message.memo = object.memo ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgTransfer();
        if (object.source_port !== undefined && object.source_port !== null) {
            message.source_port = object.source_port;
        }
        if (object.source_channel !== undefined && object.source_channel !== null) {
            message.source_channel = object.source_channel;
        }
        if (object.token !== undefined && object.token !== null) {
            message.token = coin_1.Coin.fromAmino(object.token);
        }
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.receiver !== undefined && object.receiver !== null) {
            message.receiver = object.receiver;
        }
        if (object.timeout_height !== undefined && object.timeout_height !== null) {
            message.timeout_height = client_1.Height.fromAmino(object.timeout_height);
        }
        if (object.timeout_timestamp !== undefined && object.timeout_timestamp !== null) {
            message.timeout_timestamp = BigInt(object.timeout_timestamp);
        }
        if (object.memo !== undefined && object.memo !== null) {
            message.memo = object.memo;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.source_port = message.source_port;
        obj.source_channel = message.source_channel;
        obj.token = message.token ? coin_1.Coin.toAmino(message.token) : coin_1.Coin.fromPartial({});
        obj.sender = message.sender;
        obj.receiver = message.receiver;
        obj.timeout_height = message.timeout_height ? client_1.Height.toAmino(message.timeout_height) : {};
        obj.timeout_timestamp = message.timeout_timestamp ? message.timeout_timestamp.toString() : undefined;
        obj.memo = message.memo;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgTransfer.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgTransfer",
            value: exports.MsgTransfer.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgTransfer.decode(message.value);
    },
    toProto(message) {
        return exports.MsgTransfer.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.transfer.v1.MsgTransfer",
            value: exports.MsgTransfer.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgTransfer.typeUrl, exports.MsgTransfer);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgTransfer.aminoType, exports.MsgTransfer.typeUrl);
function createBaseMsgTransferResponse() {
    return {
        sequence: BigInt(0)
    };
}
exports.MsgTransferResponse = {
    typeUrl: "/ibc.applications.transfer.v1.MsgTransferResponse",
    aminoType: "cosmos-sdk/MsgTransferResponse",
    is(o) {
        return o && (o.$typeUrl === exports.MsgTransferResponse.typeUrl || typeof o.sequence === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgTransferResponse.typeUrl || typeof o.sequence === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgTransferResponse.typeUrl || typeof o.sequence === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sequence !== BigInt(0)) {
            writer.uint32(8).uint64(message.sequence);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgTransferResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sequence = reader.uint64();
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
            sequence: (0, helpers_1.isSet)(object.sequence) ? BigInt(object.sequence.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.sequence !== undefined && (obj.sequence = (message.sequence || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgTransferResponse();
        message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgTransferResponse();
        if (object.sequence !== undefined && object.sequence !== null) {
            message.sequence = BigInt(object.sequence);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sequence = message.sequence ? message.sequence.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgTransferResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgTransferResponse",
            value: exports.MsgTransferResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgTransferResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgTransferResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.transfer.v1.MsgTransferResponse",
            value: exports.MsgTransferResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgTransferResponse.typeUrl, exports.MsgTransferResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgTransferResponse.aminoType, exports.MsgTransferResponse.typeUrl);
function createBaseMsgUpdateParams() {
    return {
        signer: "",
        params: client_1.Params.fromPartial({})
    };
}
exports.MsgUpdateParams = {
    typeUrl: "/ibc.applications.transfer.v1.MsgUpdateParams",
    aminoType: "cosmos-sdk/MsgUpdateParams",
    is(o) {
        return o && (o.$typeUrl === exports.MsgUpdateParams.typeUrl || typeof o.signer === "string" && client_1.Params.is(o.params));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgUpdateParams.typeUrl || typeof o.signer === "string" && client_1.Params.isSDK(o.params));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgUpdateParams.typeUrl || typeof o.signer === "string" && client_1.Params.isAmino(o.params));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.signer !== "") {
            writer.uint32(10).string(message.signer);
        }
        if (message.params !== undefined) {
            client_1.Params.encode(message.params, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.signer = reader.string();
                    break;
                case 2:
                    message.params = client_1.Params.decode(reader, reader.uint32());
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
            signer: (0, helpers_1.isSet)(object.signer) ? String(object.signer) : "",
            params: (0, helpers_1.isSet)(object.params) ? client_1.Params.fromJSON(object.params) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.signer !== undefined && (obj.signer = message.signer);
        message.params !== undefined && (obj.params = message.params ? client_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateParams();
        message.signer = object.signer ?? "";
        message.params = object.params !== undefined && object.params !== null ? client_1.Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUpdateParams();
        if (object.signer !== undefined && object.signer !== null) {
            message.signer = object.signer;
        }
        if (object.params !== undefined && object.params !== null) {
            message.params = client_1.Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.signer = message.signer;
        obj.params = message.params ? client_1.Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUpdateParams.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgUpdateParams",
            value: exports.MsgUpdateParams.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateParams.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.transfer.v1.MsgUpdateParams",
            value: exports.MsgUpdateParams.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgUpdateParams.typeUrl, exports.MsgUpdateParams);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgUpdateParams.aminoType, exports.MsgUpdateParams.typeUrl);
function createBaseMsgUpdateParamsResponse() {
    return {};
}
exports.MsgUpdateParamsResponse = {
    typeUrl: "/ibc.applications.transfer.v1.MsgUpdateParamsResponse",
    aminoType: "cosmos-sdk/MsgUpdateParamsResponse",
    is(o) {
        return o && o.$typeUrl === exports.MsgUpdateParamsResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.MsgUpdateParamsResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.MsgUpdateParamsResponse.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateParamsResponse();
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
        const message = createBaseMsgUpdateParamsResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgUpdateParamsResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUpdateParamsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgUpdateParamsResponse",
            value: exports.MsgUpdateParamsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateParamsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.transfer.v1.MsgUpdateParamsResponse",
            value: exports.MsgUpdateParamsResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgUpdateParamsResponse.typeUrl, exports.MsgUpdateParamsResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgUpdateParamsResponse.aminoType, exports.MsgUpdateParamsResponse.typeUrl);
//# sourceMappingURL=tx.js.map
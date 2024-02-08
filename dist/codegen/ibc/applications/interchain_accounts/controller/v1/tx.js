"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgUpdateParamsResponse = exports.MsgUpdateParams = exports.MsgSendTxResponse = exports.MsgSendTx = exports.MsgRegisterInterchainAccountResponse = exports.MsgRegisterInterchainAccount = exports.protobufPackage = void 0;
//@ts-nocheck
const packet_1 = require("../../v1/packet");
const controller_1 = require("./controller");
const binary_1 = require("../../../../../binary");
const helpers_1 = require("../../../../../helpers");
const registry_1 = require("../../../../../registry");
exports.protobufPackage = "ibc.applications.interchain_accounts.controller.v1";
function createBaseMsgRegisterInterchainAccount() {
    return {
        owner: "",
        connection_id: "",
        version: ""
    };
}
exports.MsgRegisterInterchainAccount = {
    typeUrl: "/ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccount",
    aminoType: "cosmos-sdk/MsgRegisterInterchainAccount",
    is(o) {
        return o && (o.$typeUrl === exports.MsgRegisterInterchainAccount.typeUrl || typeof o.owner === "string" && typeof o.connection_id === "string" && typeof o.version === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgRegisterInterchainAccount.typeUrl || typeof o.owner === "string" && typeof o.connection_id === "string" && typeof o.version === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgRegisterInterchainAccount.typeUrl || typeof o.owner === "string" && typeof o.connection_id === "string" && typeof o.version === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.connection_id !== "") {
            writer.uint32(18).string(message.connection_id);
        }
        if (message.version !== "") {
            writer.uint32(26).string(message.version);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRegisterInterchainAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.connection_id = reader.string();
                    break;
                case 3:
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
            owner: (0, helpers_1.isSet)(object.owner) ? String(object.owner) : "",
            connection_id: (0, helpers_1.isSet)(object.connection_id) ? String(object.connection_id) : "",
            version: (0, helpers_1.isSet)(object.version) ? String(object.version) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.connection_id !== undefined && (obj.connection_id = message.connection_id);
        message.version !== undefined && (obj.version = message.version);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgRegisterInterchainAccount();
        message.owner = object.owner ?? "";
        message.connection_id = object.connection_id ?? "";
        message.version = object.version ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgRegisterInterchainAccount();
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        if (object.connection_id !== undefined && object.connection_id !== null) {
            message.connection_id = object.connection_id;
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = object.version;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner;
        obj.connection_id = message.connection_id;
        obj.version = message.version;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgRegisterInterchainAccount.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgRegisterInterchainAccount",
            value: exports.MsgRegisterInterchainAccount.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgRegisterInterchainAccount.decode(message.value);
    },
    toProto(message) {
        return exports.MsgRegisterInterchainAccount.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccount",
            value: exports.MsgRegisterInterchainAccount.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgRegisterInterchainAccount.typeUrl, exports.MsgRegisterInterchainAccount);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgRegisterInterchainAccount.aminoType, exports.MsgRegisterInterchainAccount.typeUrl);
function createBaseMsgRegisterInterchainAccountResponse() {
    return {
        channel_id: "",
        port_id: ""
    };
}
exports.MsgRegisterInterchainAccountResponse = {
    typeUrl: "/ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccountResponse",
    aminoType: "cosmos-sdk/MsgRegisterInterchainAccountResponse",
    is(o) {
        return o && (o.$typeUrl === exports.MsgRegisterInterchainAccountResponse.typeUrl || typeof o.channel_id === "string" && typeof o.port_id === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgRegisterInterchainAccountResponse.typeUrl || typeof o.channel_id === "string" && typeof o.port_id === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgRegisterInterchainAccountResponse.typeUrl || typeof o.channel_id === "string" && typeof o.port_id === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.channel_id !== "") {
            writer.uint32(10).string(message.channel_id);
        }
        if (message.port_id !== "") {
            writer.uint32(18).string(message.port_id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRegisterInterchainAccountResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.channel_id = reader.string();
                    break;
                case 2:
                    message.port_id = reader.string();
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
            port_id: (0, helpers_1.isSet)(object.port_id) ? String(object.port_id) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.channel_id !== undefined && (obj.channel_id = message.channel_id);
        message.port_id !== undefined && (obj.port_id = message.port_id);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgRegisterInterchainAccountResponse();
        message.channel_id = object.channel_id ?? "";
        message.port_id = object.port_id ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgRegisterInterchainAccountResponse();
        if (object.channel_id !== undefined && object.channel_id !== null) {
            message.channel_id = object.channel_id;
        }
        if (object.port_id !== undefined && object.port_id !== null) {
            message.port_id = object.port_id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.channel_id = message.channel_id;
        obj.port_id = message.port_id;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgRegisterInterchainAccountResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgRegisterInterchainAccountResponse",
            value: exports.MsgRegisterInterchainAccountResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgRegisterInterchainAccountResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgRegisterInterchainAccountResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccountResponse",
            value: exports.MsgRegisterInterchainAccountResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgRegisterInterchainAccountResponse.typeUrl, exports.MsgRegisterInterchainAccountResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgRegisterInterchainAccountResponse.aminoType, exports.MsgRegisterInterchainAccountResponse.typeUrl);
function createBaseMsgSendTx() {
    return {
        owner: "",
        connection_id: "",
        packet_data: packet_1.InterchainAccountPacketData.fromPartial({}),
        relative_timeout: BigInt(0)
    };
}
exports.MsgSendTx = {
    typeUrl: "/ibc.applications.interchain_accounts.controller.v1.MsgSendTx",
    aminoType: "cosmos-sdk/MsgSendTx",
    is(o) {
        return o && (o.$typeUrl === exports.MsgSendTx.typeUrl || typeof o.owner === "string" && typeof o.connection_id === "string" && packet_1.InterchainAccountPacketData.is(o.packet_data) && typeof o.relative_timeout === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgSendTx.typeUrl || typeof o.owner === "string" && typeof o.connection_id === "string" && packet_1.InterchainAccountPacketData.isSDK(o.packet_data) && typeof o.relative_timeout === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgSendTx.typeUrl || typeof o.owner === "string" && typeof o.connection_id === "string" && packet_1.InterchainAccountPacketData.isAmino(o.packet_data) && typeof o.relative_timeout === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.connection_id !== "") {
            writer.uint32(18).string(message.connection_id);
        }
        if (message.packet_data !== undefined) {
            packet_1.InterchainAccountPacketData.encode(message.packet_data, writer.uint32(26).fork()).ldelim();
        }
        if (message.relative_timeout !== BigInt(0)) {
            writer.uint32(32).uint64(message.relative_timeout);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSendTx();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.connection_id = reader.string();
                    break;
                case 3:
                    message.packet_data = packet_1.InterchainAccountPacketData.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.relative_timeout = reader.uint64();
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
            owner: (0, helpers_1.isSet)(object.owner) ? String(object.owner) : "",
            connection_id: (0, helpers_1.isSet)(object.connection_id) ? String(object.connection_id) : "",
            packet_data: (0, helpers_1.isSet)(object.packet_data) ? packet_1.InterchainAccountPacketData.fromJSON(object.packet_data) : undefined,
            relative_timeout: (0, helpers_1.isSet)(object.relative_timeout) ? BigInt(object.relative_timeout.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.connection_id !== undefined && (obj.connection_id = message.connection_id);
        message.packet_data !== undefined && (obj.packet_data = message.packet_data ? packet_1.InterchainAccountPacketData.toJSON(message.packet_data) : undefined);
        message.relative_timeout !== undefined && (obj.relative_timeout = (message.relative_timeout || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSendTx();
        message.owner = object.owner ?? "";
        message.connection_id = object.connection_id ?? "";
        message.packet_data = object.packet_data !== undefined && object.packet_data !== null ? packet_1.InterchainAccountPacketData.fromPartial(object.packet_data) : undefined;
        message.relative_timeout = object.relative_timeout !== undefined && object.relative_timeout !== null ? BigInt(object.relative_timeout.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgSendTx();
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        if (object.connection_id !== undefined && object.connection_id !== null) {
            message.connection_id = object.connection_id;
        }
        if (object.packet_data !== undefined && object.packet_data !== null) {
            message.packet_data = packet_1.InterchainAccountPacketData.fromAmino(object.packet_data);
        }
        if (object.relative_timeout !== undefined && object.relative_timeout !== null) {
            message.relative_timeout = BigInt(object.relative_timeout);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner;
        obj.connection_id = message.connection_id;
        obj.packet_data = message.packet_data ? packet_1.InterchainAccountPacketData.toAmino(message.packet_data) : undefined;
        obj.relative_timeout = message.relative_timeout ? message.relative_timeout.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSendTx.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgSendTx",
            value: exports.MsgSendTx.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgSendTx.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSendTx.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.interchain_accounts.controller.v1.MsgSendTx",
            value: exports.MsgSendTx.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgSendTx.typeUrl, exports.MsgSendTx);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgSendTx.aminoType, exports.MsgSendTx.typeUrl);
function createBaseMsgSendTxResponse() {
    return {
        sequence: BigInt(0)
    };
}
exports.MsgSendTxResponse = {
    typeUrl: "/ibc.applications.interchain_accounts.controller.v1.MsgSendTxResponse",
    aminoType: "cosmos-sdk/MsgSendTxResponse",
    is(o) {
        return o && (o.$typeUrl === exports.MsgSendTxResponse.typeUrl || typeof o.sequence === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgSendTxResponse.typeUrl || typeof o.sequence === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgSendTxResponse.typeUrl || typeof o.sequence === "bigint");
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
        const message = createBaseMsgSendTxResponse();
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
        const message = createBaseMsgSendTxResponse();
        message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgSendTxResponse();
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
        return exports.MsgSendTxResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgSendTxResponse",
            value: exports.MsgSendTxResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgSendTxResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSendTxResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.interchain_accounts.controller.v1.MsgSendTxResponse",
            value: exports.MsgSendTxResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgSendTxResponse.typeUrl, exports.MsgSendTxResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgSendTxResponse.aminoType, exports.MsgSendTxResponse.typeUrl);
function createBaseMsgUpdateParams() {
    return {
        signer: "",
        params: controller_1.Params.fromPartial({})
    };
}
exports.MsgUpdateParams = {
    typeUrl: "/ibc.applications.interchain_accounts.controller.v1.MsgUpdateParams",
    aminoType: "cosmos-sdk/MsgUpdateParams",
    is(o) {
        return o && (o.$typeUrl === exports.MsgUpdateParams.typeUrl || typeof o.signer === "string" && controller_1.Params.is(o.params));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgUpdateParams.typeUrl || typeof o.signer === "string" && controller_1.Params.isSDK(o.params));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgUpdateParams.typeUrl || typeof o.signer === "string" && controller_1.Params.isAmino(o.params));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.signer !== "") {
            writer.uint32(10).string(message.signer);
        }
        if (message.params !== undefined) {
            controller_1.Params.encode(message.params, writer.uint32(18).fork()).ldelim();
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
                    message.params = controller_1.Params.decode(reader, reader.uint32());
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
            params: (0, helpers_1.isSet)(object.params) ? controller_1.Params.fromJSON(object.params) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.signer !== undefined && (obj.signer = message.signer);
        message.params !== undefined && (obj.params = message.params ? controller_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateParams();
        message.signer = object.signer ?? "";
        message.params = object.params !== undefined && object.params !== null ? controller_1.Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUpdateParams();
        if (object.signer !== undefined && object.signer !== null) {
            message.signer = object.signer;
        }
        if (object.params !== undefined && object.params !== null) {
            message.params = controller_1.Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.signer = message.signer;
        obj.params = message.params ? controller_1.Params.toAmino(message.params) : undefined;
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
            typeUrl: "/ibc.applications.interchain_accounts.controller.v1.MsgUpdateParams",
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
    typeUrl: "/ibc.applications.interchain_accounts.controller.v1.MsgUpdateParamsResponse",
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
            typeUrl: "/ibc.applications.interchain_accounts.controller.v1.MsgUpdateParamsResponse",
            value: exports.MsgUpdateParamsResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgUpdateParamsResponse.typeUrl, exports.MsgUpdateParamsResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgUpdateParamsResponse.aminoType, exports.MsgUpdateParamsResponse.typeUrl);
//# sourceMappingURL=tx.js.map
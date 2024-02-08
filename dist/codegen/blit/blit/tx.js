"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cosmos_basev1beta1Msg_ToAmino = exports.Cosmos_basev1beta1Msg_FromAmino = exports.Cosmos_basev1beta1Msg_InterfaceDecoder = exports.MsgDeleteTaskResponse = exports.MsgDeleteTask = exports.MsgCreateTaskResponse = exports.MsgCreateTask = exports.MsgSetDenomMetadataResponse = exports.MsgSetDenomMetadata = exports.MsgForceTransferCoinsResponse = exports.MsgForceTransferCoins = exports.MsgBurnCoinsResponse = exports.MsgBurnCoins = exports.MsgMintCoinsResponse = exports.MsgMintCoins = exports.MsgUpdateParamsResponse = exports.MsgUpdateParams = exports.protobufPackage = void 0;
//@ts-nocheck
const params_1 = require("./params");
const coin_1 = require("../../cosmos/base/v1beta1/coin");
const timestamp_1 = require("../../google/protobuf/timestamp");
const duration_1 = require("../../google/protobuf/duration");
const any_1 = require("../../google/protobuf/any");
const binary_1 = require("../../binary");
const helpers_1 = require("../../helpers");
exports.protobufPackage = "blit.blit";
function createBaseMsgUpdateParams() {
    return {
        authority: "",
        params: params_1.Params.fromPartial({})
    };
}
exports.MsgUpdateParams = {
    typeUrl: "/blit.blit.MsgUpdateParams",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(18).fork()).ldelim();
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
                    message.authority = reader.string();
                    break;
                case 2:
                    message.params = params_1.Params.decode(reader, reader.uint32());
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
            authority: (0, helpers_1.isSet)(object.authority) ? String(object.authority) : "",
            params: (0, helpers_1.isSet)(object.params) ? params_1.Params.fromJSON(object.params) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.authority !== undefined && (obj.authority = message.authority);
        message.params !== undefined && (obj.params = message.params ? params_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateParams();
        message.authority = object.authority ?? "";
        message.params = object.params !== undefined && object.params !== null ? params_1.Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            authority: object.authority,
            params: object?.params ? params_1.Params.fromAmino(object.params) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.authority = message.authority;
        obj.params = message.params ? params_1.Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUpdateParams.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "blit/x/blit/MsgUpdateParams",
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
            typeUrl: "/blit.blit.MsgUpdateParams",
            value: exports.MsgUpdateParams.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateParamsResponse() {
    return {};
}
exports.MsgUpdateParamsResponse = {
    typeUrl: "/blit.blit.MsgUpdateParamsResponse",
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
        return {};
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUpdateParamsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateParamsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.blit.MsgUpdateParamsResponse",
            value: exports.MsgUpdateParamsResponse.encode(message).finish()
        };
    }
};
function createBaseMsgMintCoins() {
    return {
        amount: coin_1.Coin.fromPartial({}),
        grantee: ""
    };
}
exports.MsgMintCoins = {
    typeUrl: "/blit.blit.MsgMintCoins",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.amount !== undefined) {
            coin_1.Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
        }
        if (message.grantee !== "") {
            writer.uint32(26).string(message.grantee);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgMintCoins();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.grantee = reader.string();
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
            amount: (0, helpers_1.isSet)(object.amount) ? coin_1.Coin.fromJSON(object.amount) : undefined,
            grantee: (0, helpers_1.isSet)(object.grantee) ? String(object.grantee) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.amount !== undefined && (obj.amount = message.amount ? coin_1.Coin.toJSON(message.amount) : undefined);
        message.grantee !== undefined && (obj.grantee = message.grantee);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgMintCoins();
        message.amount = object.amount !== undefined && object.amount !== null ? coin_1.Coin.fromPartial(object.amount) : undefined;
        message.grantee = object.grantee ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            amount: object?.amount ? coin_1.Coin.fromAmino(object.amount) : undefined,
            grantee: object.grantee
        };
    },
    toAmino(message) {
        const obj = {};
        obj.amount = message.amount ? coin_1.Coin.toAmino(message.amount) : undefined;
        obj.grantee = message.grantee;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgMintCoins.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgMintCoins.decode(message.value);
    },
    toProto(message) {
        return exports.MsgMintCoins.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.blit.MsgMintCoins",
            value: exports.MsgMintCoins.encode(message).finish()
        };
    }
};
function createBaseMsgMintCoinsResponse() {
    return {};
}
exports.MsgMintCoinsResponse = {
    typeUrl: "/blit.blit.MsgMintCoinsResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgMintCoinsResponse();
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
        const message = createBaseMsgMintCoinsResponse();
        return message;
    },
    fromAmino(_) {
        return {};
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgMintCoinsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgMintCoinsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgMintCoinsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.blit.MsgMintCoinsResponse",
            value: exports.MsgMintCoinsResponse.encode(message).finish()
        };
    }
};
function createBaseMsgBurnCoins() {
    return {
        amount: coin_1.Coin.fromPartial({}),
        grantee: ""
    };
}
exports.MsgBurnCoins = {
    typeUrl: "/blit.blit.MsgBurnCoins",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.amount !== undefined) {
            coin_1.Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
        }
        if (message.grantee !== "") {
            writer.uint32(26).string(message.grantee);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBurnCoins();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.grantee = reader.string();
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
            amount: (0, helpers_1.isSet)(object.amount) ? coin_1.Coin.fromJSON(object.amount) : undefined,
            grantee: (0, helpers_1.isSet)(object.grantee) ? String(object.grantee) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.amount !== undefined && (obj.amount = message.amount ? coin_1.Coin.toJSON(message.amount) : undefined);
        message.grantee !== undefined && (obj.grantee = message.grantee);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgBurnCoins();
        message.amount = object.amount !== undefined && object.amount !== null ? coin_1.Coin.fromPartial(object.amount) : undefined;
        message.grantee = object.grantee ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            amount: object?.amount ? coin_1.Coin.fromAmino(object.amount) : undefined,
            grantee: object.grantee
        };
    },
    toAmino(message) {
        const obj = {};
        obj.amount = message.amount ? coin_1.Coin.toAmino(message.amount) : undefined;
        obj.grantee = message.grantee;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgBurnCoins.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgBurnCoins.decode(message.value);
    },
    toProto(message) {
        return exports.MsgBurnCoins.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.blit.MsgBurnCoins",
            value: exports.MsgBurnCoins.encode(message).finish()
        };
    }
};
function createBaseMsgBurnCoinsResponse() {
    return {};
}
exports.MsgBurnCoinsResponse = {
    typeUrl: "/blit.blit.MsgBurnCoinsResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBurnCoinsResponse();
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
        const message = createBaseMsgBurnCoinsResponse();
        return message;
    },
    fromAmino(_) {
        return {};
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgBurnCoinsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgBurnCoinsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgBurnCoinsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.blit.MsgBurnCoinsResponse",
            value: exports.MsgBurnCoinsResponse.encode(message).finish()
        };
    }
};
function createBaseMsgForceTransferCoins() {
    return {
        amount: coin_1.Coin.fromPartial({}),
        from_address: "",
        to_address: "",
        grantee: ""
    };
}
exports.MsgForceTransferCoins = {
    typeUrl: "/blit.blit.MsgForceTransferCoins",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.amount !== undefined) {
            coin_1.Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
        }
        if (message.from_address !== "") {
            writer.uint32(18).string(message.from_address);
        }
        if (message.to_address !== "") {
            writer.uint32(26).string(message.to_address);
        }
        if (message.grantee !== "") {
            writer.uint32(34).string(message.grantee);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgForceTransferCoins();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.from_address = reader.string();
                    break;
                case 3:
                    message.to_address = reader.string();
                    break;
                case 4:
                    message.grantee = reader.string();
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
            amount: (0, helpers_1.isSet)(object.amount) ? coin_1.Coin.fromJSON(object.amount) : undefined,
            from_address: (0, helpers_1.isSet)(object.from_address) ? String(object.from_address) : "",
            to_address: (0, helpers_1.isSet)(object.to_address) ? String(object.to_address) : "",
            grantee: (0, helpers_1.isSet)(object.grantee) ? String(object.grantee) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.amount !== undefined && (obj.amount = message.amount ? coin_1.Coin.toJSON(message.amount) : undefined);
        message.from_address !== undefined && (obj.from_address = message.from_address);
        message.to_address !== undefined && (obj.to_address = message.to_address);
        message.grantee !== undefined && (obj.grantee = message.grantee);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgForceTransferCoins();
        message.amount = object.amount !== undefined && object.amount !== null ? coin_1.Coin.fromPartial(object.amount) : undefined;
        message.from_address = object.from_address ?? "";
        message.to_address = object.to_address ?? "";
        message.grantee = object.grantee ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            amount: object?.amount ? coin_1.Coin.fromAmino(object.amount) : undefined,
            from_address: object.from_address,
            to_address: object.to_address,
            grantee: object.grantee
        };
    },
    toAmino(message) {
        const obj = {};
        obj.amount = message.amount ? coin_1.Coin.toAmino(message.amount) : undefined;
        obj.from_address = message.from_address;
        obj.to_address = message.to_address;
        obj.grantee = message.grantee;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgForceTransferCoins.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgForceTransferCoins.decode(message.value);
    },
    toProto(message) {
        return exports.MsgForceTransferCoins.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.blit.MsgForceTransferCoins",
            value: exports.MsgForceTransferCoins.encode(message).finish()
        };
    }
};
function createBaseMsgForceTransferCoinsResponse() {
    return {};
}
exports.MsgForceTransferCoinsResponse = {
    typeUrl: "/blit.blit.MsgForceTransferCoinsResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgForceTransferCoinsResponse();
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
        const message = createBaseMsgForceTransferCoinsResponse();
        return message;
    },
    fromAmino(_) {
        return {};
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgForceTransferCoinsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgForceTransferCoinsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgForceTransferCoinsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.blit.MsgForceTransferCoinsResponse",
            value: exports.MsgForceTransferCoinsResponse.encode(message).finish()
        };
    }
};
function createBaseMsgSetDenomMetadata() {
    return {
        authority: "",
        base: "",
        display: "",
        name: "",
        symbol: "",
        uri: "",
        uri_hash: "",
        exponent: 0,
        description: ""
    };
}
exports.MsgSetDenomMetadata = {
    typeUrl: "/blit.blit.MsgSetDenomMetadata",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.base !== "") {
            writer.uint32(18).string(message.base);
        }
        if (message.display !== "") {
            writer.uint32(26).string(message.display);
        }
        if (message.name !== "") {
            writer.uint32(34).string(message.name);
        }
        if (message.symbol !== "") {
            writer.uint32(42).string(message.symbol);
        }
        if (message.uri !== "") {
            writer.uint32(50).string(message.uri);
        }
        if (message.uri_hash !== "") {
            writer.uint32(58).string(message.uri_hash);
        }
        if (message.exponent !== 0) {
            writer.uint32(64).uint32(message.exponent);
        }
        if (message.description !== "") {
            writer.uint32(74).string(message.description);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetDenomMetadata();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                case 2:
                    message.base = reader.string();
                    break;
                case 3:
                    message.display = reader.string();
                    break;
                case 4:
                    message.name = reader.string();
                    break;
                case 5:
                    message.symbol = reader.string();
                    break;
                case 6:
                    message.uri = reader.string();
                    break;
                case 7:
                    message.uri_hash = reader.string();
                    break;
                case 8:
                    message.exponent = reader.uint32();
                    break;
                case 9:
                    message.description = reader.string();
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
            authority: (0, helpers_1.isSet)(object.authority) ? String(object.authority) : "",
            base: (0, helpers_1.isSet)(object.base) ? String(object.base) : "",
            display: (0, helpers_1.isSet)(object.display) ? String(object.display) : "",
            name: (0, helpers_1.isSet)(object.name) ? String(object.name) : "",
            symbol: (0, helpers_1.isSet)(object.symbol) ? String(object.symbol) : "",
            uri: (0, helpers_1.isSet)(object.uri) ? String(object.uri) : "",
            uri_hash: (0, helpers_1.isSet)(object.uri_hash) ? String(object.uri_hash) : "",
            exponent: (0, helpers_1.isSet)(object.exponent) ? Number(object.exponent) : 0,
            description: (0, helpers_1.isSet)(object.description) ? String(object.description) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.authority !== undefined && (obj.authority = message.authority);
        message.base !== undefined && (obj.base = message.base);
        message.display !== undefined && (obj.display = message.display);
        message.name !== undefined && (obj.name = message.name);
        message.symbol !== undefined && (obj.symbol = message.symbol);
        message.uri !== undefined && (obj.uri = message.uri);
        message.uri_hash !== undefined && (obj.uri_hash = message.uri_hash);
        message.exponent !== undefined && (obj.exponent = Math.round(message.exponent));
        message.description !== undefined && (obj.description = message.description);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSetDenomMetadata();
        message.authority = object.authority ?? "";
        message.base = object.base ?? "";
        message.display = object.display ?? "";
        message.name = object.name ?? "";
        message.symbol = object.symbol ?? "";
        message.uri = object.uri ?? "";
        message.uri_hash = object.uri_hash ?? "";
        message.exponent = object.exponent ?? 0;
        message.description = object.description ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            authority: object.authority,
            base: object.base,
            display: object.display,
            name: object.name,
            symbol: object.symbol,
            uri: object.uri,
            uri_hash: object.uri_hash,
            exponent: object.exponent,
            description: object.description
        };
    },
    toAmino(message) {
        const obj = {};
        obj.authority = message.authority;
        obj.base = message.base;
        obj.display = message.display;
        obj.name = message.name;
        obj.symbol = message.symbol;
        obj.uri = message.uri;
        obj.uri_hash = message.uri_hash;
        obj.exponent = message.exponent;
        obj.description = message.description;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSetDenomMetadata.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgSetDenomMetadata.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSetDenomMetadata.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.blit.MsgSetDenomMetadata",
            value: exports.MsgSetDenomMetadata.encode(message).finish()
        };
    }
};
function createBaseMsgSetDenomMetadataResponse() {
    return {};
}
exports.MsgSetDenomMetadataResponse = {
    typeUrl: "/blit.blit.MsgSetDenomMetadataResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetDenomMetadataResponse();
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
        const message = createBaseMsgSetDenomMetadataResponse();
        return message;
    },
    fromAmino(_) {
        return {};
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSetDenomMetadataResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgSetDenomMetadataResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSetDenomMetadataResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.blit.MsgSetDenomMetadataResponse",
            value: exports.MsgSetDenomMetadataResponse.encode(message).finish()
        };
    }
};
function createBaseMsgCreateTask() {
    return {
        creator: "",
        activate_after: new Date(),
        expire_after: new Date(),
        minimum_interval: undefined,
        max_runs: BigInt(0),
        disable_on_error: false,
        enabled: false,
        task_gas_limit: BigInt(0),
        task_gas_fee: coin_1.Coin.fromPartial({}),
        messages: []
    };
}
exports.MsgCreateTask = {
    typeUrl: "/blit.blit.MsgCreateTask",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.activate_after !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.activate_after), writer.uint32(18).fork()).ldelim();
        }
        if (message.expire_after !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.expire_after), writer.uint32(26).fork()).ldelim();
        }
        if (message.minimum_interval !== undefined) {
            duration_1.Duration.encode(message.minimum_interval, writer.uint32(34).fork()).ldelim();
        }
        if (message.max_runs !== BigInt(0)) {
            writer.uint32(48).uint64(message.max_runs);
        }
        if (message.disable_on_error === true) {
            writer.uint32(56).bool(message.disable_on_error);
        }
        if (message.enabled === true) {
            writer.uint32(64).bool(message.enabled);
        }
        if (message.task_gas_limit !== BigInt(0)) {
            writer.uint32(72).uint64(message.task_gas_limit);
        }
        if (message.task_gas_fee !== undefined) {
            coin_1.Coin.encode(message.task_gas_fee, writer.uint32(82).fork()).ldelim();
        }
        for (const v of message.messages) {
            any_1.Any.encode(v, writer.uint32(90).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateTask();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.activate_after = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.expire_after = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.minimum_interval = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.max_runs = reader.uint64();
                    break;
                case 7:
                    message.disable_on_error = reader.bool();
                    break;
                case 8:
                    message.enabled = reader.bool();
                    break;
                case 9:
                    message.task_gas_limit = reader.uint64();
                    break;
                case 10:
                    message.task_gas_fee = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.messages.push((0, any_1.Any)(reader));
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
            creator: (0, helpers_1.isSet)(object.creator) ? String(object.creator) : "",
            activate_after: (0, helpers_1.isSet)(object.activate_after) ? (0, helpers_1.fromJsonTimestamp)(object.activate_after) : undefined,
            expire_after: (0, helpers_1.isSet)(object.expire_after) ? (0, helpers_1.fromJsonTimestamp)(object.expire_after) : undefined,
            minimum_interval: (0, helpers_1.isSet)(object.minimum_interval) ? duration_1.Duration.fromJSON(object.minimum_interval) : undefined,
            max_runs: (0, helpers_1.isSet)(object.max_runs) ? BigInt(object.max_runs.toString()) : BigInt(0),
            disable_on_error: (0, helpers_1.isSet)(object.disable_on_error) ? Boolean(object.disable_on_error) : false,
            enabled: (0, helpers_1.isSet)(object.enabled) ? Boolean(object.enabled) : false,
            task_gas_limit: (0, helpers_1.isSet)(object.task_gas_limit) ? BigInt(object.task_gas_limit.toString()) : BigInt(0),
            task_gas_fee: (0, helpers_1.isSet)(object.task_gas_fee) ? coin_1.Coin.fromJSON(object.task_gas_fee) : undefined,
            messages: Array.isArray(object?.messages) ? object.messages.map((e) => any_1.Any.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.activate_after !== undefined && (obj.activate_after = message.activate_after.toISOString());
        message.expire_after !== undefined && (obj.expire_after = message.expire_after.toISOString());
        message.minimum_interval !== undefined && (obj.minimum_interval = message.minimum_interval ? duration_1.Duration.toJSON(message.minimum_interval) : undefined);
        message.max_runs !== undefined && (obj.max_runs = (message.max_runs || BigInt(0)).toString());
        message.disable_on_error !== undefined && (obj.disable_on_error = message.disable_on_error);
        message.enabled !== undefined && (obj.enabled = message.enabled);
        message.task_gas_limit !== undefined && (obj.task_gas_limit = (message.task_gas_limit || BigInt(0)).toString());
        message.task_gas_fee !== undefined && (obj.task_gas_fee = message.task_gas_fee ? coin_1.Coin.toJSON(message.task_gas_fee) : undefined);
        if (message.messages) {
            obj.messages = message.messages.map(e => e ? any_1.Any.toJSON(e) : undefined);
        }
        else {
            obj.messages = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateTask();
        message.creator = object.creator ?? "";
        message.activate_after = object.activate_after ?? undefined;
        message.expire_after = object.expire_after ?? undefined;
        message.minimum_interval = object.minimum_interval !== undefined && object.minimum_interval !== null ? duration_1.Duration.fromPartial(object.minimum_interval) : undefined;
        message.max_runs = object.max_runs !== undefined && object.max_runs !== null ? BigInt(object.max_runs.toString()) : BigInt(0);
        message.disable_on_error = object.disable_on_error ?? false;
        message.enabled = object.enabled ?? false;
        message.task_gas_limit = object.task_gas_limit !== undefined && object.task_gas_limit !== null ? BigInt(object.task_gas_limit.toString()) : BigInt(0);
        message.task_gas_fee = object.task_gas_fee !== undefined && object.task_gas_fee !== null ? coin_1.Coin.fromPartial(object.task_gas_fee) : undefined;
        message.messages = object.messages?.map(e => any_1.Any.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            creator: object.creator,
            activate_after: object?.activate_after ? (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.activate_after)) : undefined,
            expire_after: object?.expire_after ? (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.expire_after)) : undefined,
            minimum_interval: object?.minimum_interval ? duration_1.Duration.fromAmino(object.minimum_interval) : undefined,
            max_runs: BigInt(object.max_runs),
            disable_on_error: object.disable_on_error,
            enabled: object.enabled,
            task_gas_limit: BigInt(object.task_gas_limit),
            task_gas_fee: object?.task_gas_fee ? coin_1.Coin.fromAmino(object.task_gas_fee) : undefined,
            messages: Array.isArray(object?.messages) ? object.messages.map((e) => (0, exports.Cosmos_basev1beta1Msg_FromAmino)(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.creator = message.creator;
        obj.activate_after = message.activate_after ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.activate_after)) : undefined;
        obj.expire_after = message.expire_after ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.expire_after)) : undefined;
        obj.minimum_interval = message.minimum_interval ? duration_1.Duration.toAmino(message.minimum_interval) : undefined;
        obj.max_runs = message.max_runs ? message.max_runs.toString() : undefined;
        obj.disable_on_error = message.disable_on_error;
        obj.enabled = message.enabled;
        obj.task_gas_limit = message.task_gas_limit ? message.task_gas_limit.toString() : undefined;
        obj.task_gas_fee = message.task_gas_fee ? coin_1.Coin.toAmino(message.task_gas_fee) : undefined;
        if (message.messages) {
            obj.messages = message.messages.map(e => e ? (0, exports.Cosmos_basev1beta1Msg_ToAmino)(e) : undefined);
        }
        else {
            obj.messages = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCreateTask.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgCreateTask.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreateTask.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.blit.MsgCreateTask",
            value: exports.MsgCreateTask.encode(message).finish()
        };
    }
};
function createBaseMsgCreateTaskResponse() {
    return {
        id: BigInt(0)
    };
}
exports.MsgCreateTaskResponse = {
    typeUrl: "/blit.blit.MsgCreateTaskResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.id !== BigInt(0)) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateTaskResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
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
            id: (0, helpers_1.isSet)(object.id) ? BigInt(object.id.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateTaskResponse();
        message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        return {
            id: BigInt(object.id)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id ? message.id.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCreateTaskResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgCreateTaskResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreateTaskResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.blit.MsgCreateTaskResponse",
            value: exports.MsgCreateTaskResponse.encode(message).finish()
        };
    }
};
function createBaseMsgDeleteTask() {
    return {
        creator: "",
        id: BigInt(0)
    };
}
exports.MsgDeleteTask = {
    typeUrl: "/blit.blit.MsgDeleteTask",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== BigInt(0)) {
            writer.uint32(16).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDeleteTask();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.id = reader.uint64();
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
            creator: (0, helpers_1.isSet)(object.creator) ? String(object.creator) : "",
            id: (0, helpers_1.isSet)(object.id) ? BigInt(object.id.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgDeleteTask();
        message.creator = object.creator ?? "";
        message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        return {
            creator: object.creator,
            id: BigInt(object.id)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.creator = message.creator;
        obj.id = message.id ? message.id.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgDeleteTask.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgDeleteTask.decode(message.value);
    },
    toProto(message) {
        return exports.MsgDeleteTask.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.blit.MsgDeleteTask",
            value: exports.MsgDeleteTask.encode(message).finish()
        };
    }
};
function createBaseMsgDeleteTaskResponse() {
    return {};
}
exports.MsgDeleteTaskResponse = {
    typeUrl: "/blit.blit.MsgDeleteTaskResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDeleteTaskResponse();
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
        const message = createBaseMsgDeleteTaskResponse();
        return message;
    },
    fromAmino(_) {
        return {};
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgDeleteTaskResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgDeleteTaskResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgDeleteTaskResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.blit.MsgDeleteTaskResponse",
            value: exports.MsgDeleteTaskResponse.encode(message).finish()
        };
    }
};
const Cosmos_basev1beta1Msg_InterfaceDecoder = (input) => {
    const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
    const data = any_1.Any.decode(reader, reader.uint32(), true);
    switch (data.typeUrl) {
        default:
            return data;
    }
};
exports.Cosmos_basev1beta1Msg_InterfaceDecoder = Cosmos_basev1beta1Msg_InterfaceDecoder;
const Cosmos_basev1beta1Msg_FromAmino = (content) => {
    return any_1.Any.fromAmino(content);
};
exports.Cosmos_basev1beta1Msg_FromAmino = Cosmos_basev1beta1Msg_FromAmino;
const Cosmos_basev1beta1Msg_ToAmino = (content) => {
    return any_1.Any.toAmino(content);
};
exports.Cosmos_basev1beta1Msg_ToAmino = Cosmos_basev1beta1Msg_ToAmino;
//# sourceMappingURL=tx.js.map
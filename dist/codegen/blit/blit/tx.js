"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgSetDenomMetadataResponse = exports.MsgSetDenomMetadata = exports.MsgForceTransferCoinsResponse = exports.MsgForceTransferCoins = exports.MsgBurnCoinsResponse = exports.MsgBurnCoins = exports.MsgMintCoinsResponse = exports.MsgMintCoins = exports.MsgUpdateParamsResponse = exports.MsgUpdateParams = exports.protobufPackage = void 0;
//@ts-nocheck
const params_1 = require("./params");
const coin_1 = require("../../cosmos/base/v1beta1/coin");
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
//# sourceMappingURL=tx.js.map
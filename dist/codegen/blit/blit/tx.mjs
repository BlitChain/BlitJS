//@ts-nocheck
import { Params } from "./params";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
export const protobufPackage = "blit.blit";
function createBaseMsgUpdateParams() {
    return {
        authority: "",
        params: Params.fromPartial({})
    };
}
export const MsgUpdateParams = {
    typeUrl: "/blit.blit.MsgUpdateParams",
    encode(message, writer = BinaryWriter.create()) {
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                case 2:
                    message.params = Params.decode(reader, reader.uint32());
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
            authority: isSet(object.authority) ? String(object.authority) : "",
            params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.authority !== undefined && (obj.authority = message.authority);
        message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateParams();
        message.authority = object.authority ?? "";
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            authority: object.authority,
            params: object?.params ? Params.fromAmino(object.params) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.authority = message.authority;
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdateParams.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "blit/x/blit/MsgUpdateParams",
            value: MsgUpdateParams.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgUpdateParams.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.blit.MsgUpdateParams",
            value: MsgUpdateParams.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateParamsResponse() {
    return {};
}
export const MsgUpdateParamsResponse = {
    typeUrl: "/blit.blit.MsgUpdateParamsResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return MsgUpdateParamsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgUpdateParamsResponse.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.blit.MsgUpdateParamsResponse",
            value: MsgUpdateParamsResponse.encode(message).finish()
        };
    }
};
function createBaseMsgMintCoins() {
    return {
        amount: Coin.fromPartial({}),
        grantee: ""
    };
}
export const MsgMintCoins = {
    typeUrl: "/blit.blit.MsgMintCoins",
    encode(message, writer = BinaryWriter.create()) {
        if (message.amount !== undefined) {
            Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
        }
        if (message.grantee !== "") {
            writer.uint32(26).string(message.grantee);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgMintCoins();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount = Coin.decode(reader, reader.uint32());
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
            amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
            grantee: isSet(object.grantee) ? String(object.grantee) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
        message.grantee !== undefined && (obj.grantee = message.grantee);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgMintCoins();
        message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
        message.grantee = object.grantee ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            amount: object?.amount ? Coin.fromAmino(object.amount) : undefined,
            grantee: object.grantee
        };
    },
    toAmino(message) {
        const obj = {};
        obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
        obj.grantee = message.grantee;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgMintCoins.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgMintCoins.decode(message.value);
    },
    toProto(message) {
        return MsgMintCoins.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.blit.MsgMintCoins",
            value: MsgMintCoins.encode(message).finish()
        };
    }
};
function createBaseMsgMintCoinsResponse() {
    return {};
}
export const MsgMintCoinsResponse = {
    typeUrl: "/blit.blit.MsgMintCoinsResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return MsgMintCoinsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgMintCoinsResponse.decode(message.value);
    },
    toProto(message) {
        return MsgMintCoinsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.blit.MsgMintCoinsResponse",
            value: MsgMintCoinsResponse.encode(message).finish()
        };
    }
};
function createBaseMsgBurnCoins() {
    return {
        amount: Coin.fromPartial({}),
        grantee: ""
    };
}
export const MsgBurnCoins = {
    typeUrl: "/blit.blit.MsgBurnCoins",
    encode(message, writer = BinaryWriter.create()) {
        if (message.amount !== undefined) {
            Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
        }
        if (message.grantee !== "") {
            writer.uint32(26).string(message.grantee);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBurnCoins();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount = Coin.decode(reader, reader.uint32());
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
            amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
            grantee: isSet(object.grantee) ? String(object.grantee) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
        message.grantee !== undefined && (obj.grantee = message.grantee);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgBurnCoins();
        message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
        message.grantee = object.grantee ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            amount: object?.amount ? Coin.fromAmino(object.amount) : undefined,
            grantee: object.grantee
        };
    },
    toAmino(message) {
        const obj = {};
        obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
        obj.grantee = message.grantee;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgBurnCoins.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgBurnCoins.decode(message.value);
    },
    toProto(message) {
        return MsgBurnCoins.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.blit.MsgBurnCoins",
            value: MsgBurnCoins.encode(message).finish()
        };
    }
};
function createBaseMsgBurnCoinsResponse() {
    return {};
}
export const MsgBurnCoinsResponse = {
    typeUrl: "/blit.blit.MsgBurnCoinsResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return MsgBurnCoinsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgBurnCoinsResponse.decode(message.value);
    },
    toProto(message) {
        return MsgBurnCoinsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.blit.MsgBurnCoinsResponse",
            value: MsgBurnCoinsResponse.encode(message).finish()
        };
    }
};
function createBaseMsgForceTransferCoins() {
    return {
        amount: Coin.fromPartial({}),
        from_address: "",
        to_address: "",
        grantee: ""
    };
}
export const MsgForceTransferCoins = {
    typeUrl: "/blit.blit.MsgForceTransferCoins",
    encode(message, writer = BinaryWriter.create()) {
        if (message.amount !== undefined) {
            Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
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
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgForceTransferCoins();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount = Coin.decode(reader, reader.uint32());
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
            amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
            from_address: isSet(object.from_address) ? String(object.from_address) : "",
            to_address: isSet(object.to_address) ? String(object.to_address) : "",
            grantee: isSet(object.grantee) ? String(object.grantee) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
        message.from_address !== undefined && (obj.from_address = message.from_address);
        message.to_address !== undefined && (obj.to_address = message.to_address);
        message.grantee !== undefined && (obj.grantee = message.grantee);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgForceTransferCoins();
        message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
        message.from_address = object.from_address ?? "";
        message.to_address = object.to_address ?? "";
        message.grantee = object.grantee ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            amount: object?.amount ? Coin.fromAmino(object.amount) : undefined,
            from_address: object.from_address,
            to_address: object.to_address,
            grantee: object.grantee
        };
    },
    toAmino(message) {
        const obj = {};
        obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
        obj.from_address = message.from_address;
        obj.to_address = message.to_address;
        obj.grantee = message.grantee;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgForceTransferCoins.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgForceTransferCoins.decode(message.value);
    },
    toProto(message) {
        return MsgForceTransferCoins.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.blit.MsgForceTransferCoins",
            value: MsgForceTransferCoins.encode(message).finish()
        };
    }
};
function createBaseMsgForceTransferCoinsResponse() {
    return {};
}
export const MsgForceTransferCoinsResponse = {
    typeUrl: "/blit.blit.MsgForceTransferCoinsResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return MsgForceTransferCoinsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgForceTransferCoinsResponse.decode(message.value);
    },
    toProto(message) {
        return MsgForceTransferCoinsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.blit.MsgForceTransferCoinsResponse",
            value: MsgForceTransferCoinsResponse.encode(message).finish()
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
export const MsgSetDenomMetadata = {
    typeUrl: "/blit.blit.MsgSetDenomMetadata",
    encode(message, writer = BinaryWriter.create()) {
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
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            authority: isSet(object.authority) ? String(object.authority) : "",
            base: isSet(object.base) ? String(object.base) : "",
            display: isSet(object.display) ? String(object.display) : "",
            name: isSet(object.name) ? String(object.name) : "",
            symbol: isSet(object.symbol) ? String(object.symbol) : "",
            uri: isSet(object.uri) ? String(object.uri) : "",
            uri_hash: isSet(object.uri_hash) ? String(object.uri_hash) : "",
            exponent: isSet(object.exponent) ? Number(object.exponent) : 0,
            description: isSet(object.description) ? String(object.description) : ""
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
        return MsgSetDenomMetadata.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgSetDenomMetadata.decode(message.value);
    },
    toProto(message) {
        return MsgSetDenomMetadata.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.blit.MsgSetDenomMetadata",
            value: MsgSetDenomMetadata.encode(message).finish()
        };
    }
};
function createBaseMsgSetDenomMetadataResponse() {
    return {};
}
export const MsgSetDenomMetadataResponse = {
    typeUrl: "/blit.blit.MsgSetDenomMetadataResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return MsgSetDenomMetadataResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgSetDenomMetadataResponse.decode(message.value);
    },
    toProto(message) {
        return MsgSetDenomMetadataResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.blit.MsgSetDenomMetadataResponse",
            value: MsgSetDenomMetadataResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=tx.js.map
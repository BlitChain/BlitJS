//@ts-nocheck
import { Params } from "./params";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../google/protobuf/timestamp";
import { Duration } from "../../google/protobuf/duration";
import { Any } from "../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, toTimestamp, fromTimestamp, fromJsonTimestamp } from "../../helpers";
import { GlobalDecoderRegistry } from "../../registry";
export const protobufPackage = "blit.blit";
function createBaseMsgUpdateParams() {
    return {
        authority: "",
        params: Params.fromPartial({})
    };
}
export const MsgUpdateParams = {
    typeUrl: "/blit.blit.MsgUpdateParams",
    aminoType: "blit/x/blit/MsgUpdateParams",
    is(o) {
        return o && (o.$typeUrl === MsgUpdateParams.typeUrl || typeof o.authority === "string" && Params.is(o.params));
    },
    isSDK(o) {
        return o && (o.$typeUrl === MsgUpdateParams.typeUrl || typeof o.authority === "string" && Params.isSDK(o.params));
    },
    isAmino(o) {
        return o && (o.$typeUrl === MsgUpdateParams.typeUrl || typeof o.authority === "string" && Params.isAmino(o.params));
    },
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
        const message = createBaseMsgUpdateParams();
        if (object.authority !== undefined && object.authority !== null) {
            message.authority = object.authority;
        }
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.authority = message.authority;
        obj.params = message.params ? Params.toAmino(message.params) : Params.fromPartial({});
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
GlobalDecoderRegistry.register(MsgUpdateParams.typeUrl, MsgUpdateParams);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUpdateParams.aminoType, MsgUpdateParams.typeUrl);
function createBaseMsgUpdateParamsResponse() {
    return {};
}
export const MsgUpdateParamsResponse = {
    typeUrl: "/blit.blit.MsgUpdateParamsResponse",
    is(o) {
        return o && o.$typeUrl === MsgUpdateParamsResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === MsgUpdateParamsResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === MsgUpdateParamsResponse.typeUrl;
    },
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
        const message = createBaseMsgUpdateParamsResponse();
        return message;
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
GlobalDecoderRegistry.register(MsgUpdateParamsResponse.typeUrl, MsgUpdateParamsResponse);
function createBaseMsgMintCoins() {
    return {
        amount: Coin.fromPartial({}),
        grantee: ""
    };
}
export const MsgMintCoins = {
    typeUrl: "/blit.blit.MsgMintCoins",
    is(o) {
        return o && (o.$typeUrl === MsgMintCoins.typeUrl || Coin.is(o.amount) && typeof o.grantee === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === MsgMintCoins.typeUrl || Coin.isSDK(o.amount) && typeof o.grantee === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === MsgMintCoins.typeUrl || Coin.isAmino(o.amount) && typeof o.grantee === "string");
    },
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
        const message = createBaseMsgMintCoins();
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = Coin.fromAmino(object.amount);
        }
        if (object.grantee !== undefined && object.grantee !== null) {
            message.grantee = object.grantee;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.amount = message.amount ? Coin.toAmino(message.amount) : Coin.fromPartial({});
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
GlobalDecoderRegistry.register(MsgMintCoins.typeUrl, MsgMintCoins);
function createBaseMsgMintCoinsResponse() {
    return {};
}
export const MsgMintCoinsResponse = {
    typeUrl: "/blit.blit.MsgMintCoinsResponse",
    is(o) {
        return o && o.$typeUrl === MsgMintCoinsResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === MsgMintCoinsResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === MsgMintCoinsResponse.typeUrl;
    },
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
        const message = createBaseMsgMintCoinsResponse();
        return message;
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
GlobalDecoderRegistry.register(MsgMintCoinsResponse.typeUrl, MsgMintCoinsResponse);
function createBaseMsgBurnCoins() {
    return {
        amount: Coin.fromPartial({}),
        grantee: ""
    };
}
export const MsgBurnCoins = {
    typeUrl: "/blit.blit.MsgBurnCoins",
    is(o) {
        return o && (o.$typeUrl === MsgBurnCoins.typeUrl || Coin.is(o.amount) && typeof o.grantee === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === MsgBurnCoins.typeUrl || Coin.isSDK(o.amount) && typeof o.grantee === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === MsgBurnCoins.typeUrl || Coin.isAmino(o.amount) && typeof o.grantee === "string");
    },
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
        const message = createBaseMsgBurnCoins();
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = Coin.fromAmino(object.amount);
        }
        if (object.grantee !== undefined && object.grantee !== null) {
            message.grantee = object.grantee;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.amount = message.amount ? Coin.toAmino(message.amount) : Coin.fromPartial({});
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
GlobalDecoderRegistry.register(MsgBurnCoins.typeUrl, MsgBurnCoins);
function createBaseMsgBurnCoinsResponse() {
    return {};
}
export const MsgBurnCoinsResponse = {
    typeUrl: "/blit.blit.MsgBurnCoinsResponse",
    is(o) {
        return o && o.$typeUrl === MsgBurnCoinsResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === MsgBurnCoinsResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === MsgBurnCoinsResponse.typeUrl;
    },
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
        const message = createBaseMsgBurnCoinsResponse();
        return message;
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
GlobalDecoderRegistry.register(MsgBurnCoinsResponse.typeUrl, MsgBurnCoinsResponse);
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
    is(o) {
        return o && (o.$typeUrl === MsgForceTransferCoins.typeUrl || Coin.is(o.amount) && typeof o.from_address === "string" && typeof o.to_address === "string" && typeof o.grantee === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === MsgForceTransferCoins.typeUrl || Coin.isSDK(o.amount) && typeof o.from_address === "string" && typeof o.to_address === "string" && typeof o.grantee === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === MsgForceTransferCoins.typeUrl || Coin.isAmino(o.amount) && typeof o.from_address === "string" && typeof o.to_address === "string" && typeof o.grantee === "string");
    },
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
        const message = createBaseMsgForceTransferCoins();
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = Coin.fromAmino(object.amount);
        }
        if (object.from_address !== undefined && object.from_address !== null) {
            message.from_address = object.from_address;
        }
        if (object.to_address !== undefined && object.to_address !== null) {
            message.to_address = object.to_address;
        }
        if (object.grantee !== undefined && object.grantee !== null) {
            message.grantee = object.grantee;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.amount = message.amount ? Coin.toAmino(message.amount) : Coin.fromPartial({});
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
GlobalDecoderRegistry.register(MsgForceTransferCoins.typeUrl, MsgForceTransferCoins);
function createBaseMsgForceTransferCoinsResponse() {
    return {};
}
export const MsgForceTransferCoinsResponse = {
    typeUrl: "/blit.blit.MsgForceTransferCoinsResponse",
    is(o) {
        return o && o.$typeUrl === MsgForceTransferCoinsResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === MsgForceTransferCoinsResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === MsgForceTransferCoinsResponse.typeUrl;
    },
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
        const message = createBaseMsgForceTransferCoinsResponse();
        return message;
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
GlobalDecoderRegistry.register(MsgForceTransferCoinsResponse.typeUrl, MsgForceTransferCoinsResponse);
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
    is(o) {
        return o && (o.$typeUrl === MsgSetDenomMetadata.typeUrl || typeof o.authority === "string" && typeof o.base === "string" && typeof o.display === "string" && typeof o.name === "string" && typeof o.symbol === "string" && typeof o.uri === "string" && typeof o.uri_hash === "string" && typeof o.exponent === "number" && typeof o.description === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === MsgSetDenomMetadata.typeUrl || typeof o.authority === "string" && typeof o.base === "string" && typeof o.display === "string" && typeof o.name === "string" && typeof o.symbol === "string" && typeof o.uri === "string" && typeof o.uri_hash === "string" && typeof o.exponent === "number" && typeof o.description === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === MsgSetDenomMetadata.typeUrl || typeof o.authority === "string" && typeof o.base === "string" && typeof o.display === "string" && typeof o.name === "string" && typeof o.symbol === "string" && typeof o.uri === "string" && typeof o.uri_hash === "string" && typeof o.exponent === "number" && typeof o.description === "string");
    },
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
        const message = createBaseMsgSetDenomMetadata();
        if (object.authority !== undefined && object.authority !== null) {
            message.authority = object.authority;
        }
        if (object.base !== undefined && object.base !== null) {
            message.base = object.base;
        }
        if (object.display !== undefined && object.display !== null) {
            message.display = object.display;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        if (object.symbol !== undefined && object.symbol !== null) {
            message.symbol = object.symbol;
        }
        if (object.uri !== undefined && object.uri !== null) {
            message.uri = object.uri;
        }
        if (object.uri_hash !== undefined && object.uri_hash !== null) {
            message.uri_hash = object.uri_hash;
        }
        if (object.exponent !== undefined && object.exponent !== null) {
            message.exponent = object.exponent;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        return message;
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
GlobalDecoderRegistry.register(MsgSetDenomMetadata.typeUrl, MsgSetDenomMetadata);
function createBaseMsgSetDenomMetadataResponse() {
    return {};
}
export const MsgSetDenomMetadataResponse = {
    typeUrl: "/blit.blit.MsgSetDenomMetadataResponse",
    is(o) {
        return o && o.$typeUrl === MsgSetDenomMetadataResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === MsgSetDenomMetadataResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === MsgSetDenomMetadataResponse.typeUrl;
    },
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
        const message = createBaseMsgSetDenomMetadataResponse();
        return message;
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
GlobalDecoderRegistry.register(MsgSetDenomMetadataResponse.typeUrl, MsgSetDenomMetadataResponse);
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
        task_gas_fee: Coin.fromPartial({}),
        messages: []
    };
}
export const MsgCreateTask = {
    typeUrl: "/blit.blit.MsgCreateTask",
    is(o) {
        return o && (o.$typeUrl === MsgCreateTask.typeUrl || typeof o.creator === "string" && Timestamp.is(o.activate_after) && Timestamp.is(o.expire_after) && typeof o.max_runs === "bigint" && typeof o.disable_on_error === "boolean" && typeof o.enabled === "boolean" && typeof o.task_gas_limit === "bigint" && Coin.is(o.task_gas_fee) && Array.isArray(o.messages) && (!o.messages.length || Any.is(o.messages[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === MsgCreateTask.typeUrl || typeof o.creator === "string" && Timestamp.isSDK(o.activate_after) && Timestamp.isSDK(o.expire_after) && typeof o.max_runs === "bigint" && typeof o.disable_on_error === "boolean" && typeof o.enabled === "boolean" && typeof o.task_gas_limit === "bigint" && Coin.isSDK(o.task_gas_fee) && Array.isArray(o.messages) && (!o.messages.length || Any.isSDK(o.messages[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === MsgCreateTask.typeUrl || typeof o.creator === "string" && Timestamp.isAmino(o.activate_after) && Timestamp.isAmino(o.expire_after) && typeof o.max_runs === "bigint" && typeof o.disable_on_error === "boolean" && typeof o.enabled === "boolean" && typeof o.task_gas_limit === "bigint" && Coin.isAmino(o.task_gas_fee) && Array.isArray(o.messages) && (!o.messages.length || Any.isAmino(o.messages[0])));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.activate_after !== undefined) {
            Timestamp.encode(toTimestamp(message.activate_after), writer.uint32(18).fork()).ldelim();
        }
        if (message.expire_after !== undefined) {
            Timestamp.encode(toTimestamp(message.expire_after), writer.uint32(26).fork()).ldelim();
        }
        if (message.minimum_interval !== undefined) {
            Duration.encode(message.minimum_interval, writer.uint32(34).fork()).ldelim();
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
            Coin.encode(message.task_gas_fee, writer.uint32(82).fork()).ldelim();
        }
        for (const v of message.messages) {
            Any.encode(GlobalDecoderRegistry.wrapAny(v), writer.uint32(90).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateTask();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.activate_after = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.expire_after = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.minimum_interval = Duration.decode(reader, reader.uint32());
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
                    message.task_gas_fee = Coin.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.messages.push(GlobalDecoderRegistry.unwrapAny(reader));
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
            creator: isSet(object.creator) ? String(object.creator) : "",
            activate_after: isSet(object.activate_after) ? fromJsonTimestamp(object.activate_after) : undefined,
            expire_after: isSet(object.expire_after) ? fromJsonTimestamp(object.expire_after) : undefined,
            minimum_interval: isSet(object.minimum_interval) ? Duration.fromJSON(object.minimum_interval) : undefined,
            max_runs: isSet(object.max_runs) ? BigInt(object.max_runs.toString()) : BigInt(0),
            disable_on_error: isSet(object.disable_on_error) ? Boolean(object.disable_on_error) : false,
            enabled: isSet(object.enabled) ? Boolean(object.enabled) : false,
            task_gas_limit: isSet(object.task_gas_limit) ? BigInt(object.task_gas_limit.toString()) : BigInt(0),
            task_gas_fee: isSet(object.task_gas_fee) ? Coin.fromJSON(object.task_gas_fee) : undefined,
            messages: Array.isArray(object?.messages) ? object.messages.map((e) => GlobalDecoderRegistry.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.activate_after !== undefined && (obj.activate_after = message.activate_after.toISOString());
        message.expire_after !== undefined && (obj.expire_after = message.expire_after.toISOString());
        message.minimum_interval !== undefined && (obj.minimum_interval = message.minimum_interval ? Duration.toJSON(message.minimum_interval) : undefined);
        message.max_runs !== undefined && (obj.max_runs = (message.max_runs || BigInt(0)).toString());
        message.disable_on_error !== undefined && (obj.disable_on_error = message.disable_on_error);
        message.enabled !== undefined && (obj.enabled = message.enabled);
        message.task_gas_limit !== undefined && (obj.task_gas_limit = (message.task_gas_limit || BigInt(0)).toString());
        message.task_gas_fee !== undefined && (obj.task_gas_fee = message.task_gas_fee ? Coin.toJSON(message.task_gas_fee) : undefined);
        if (message.messages) {
            obj.messages = message.messages.map(e => e ? GlobalDecoderRegistry.toJSON(e) : undefined);
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
        message.minimum_interval = object.minimum_interval !== undefined && object.minimum_interval !== null ? Duration.fromPartial(object.minimum_interval) : undefined;
        message.max_runs = object.max_runs !== undefined && object.max_runs !== null ? BigInt(object.max_runs.toString()) : BigInt(0);
        message.disable_on_error = object.disable_on_error ?? false;
        message.enabled = object.enabled ?? false;
        message.task_gas_limit = object.task_gas_limit !== undefined && object.task_gas_limit !== null ? BigInt(object.task_gas_limit.toString()) : BigInt(0);
        message.task_gas_fee = object.task_gas_fee !== undefined && object.task_gas_fee !== null ? Coin.fromPartial(object.task_gas_fee) : undefined;
        message.messages = object.messages?.map(e => GlobalDecoderRegistry.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateTask();
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        if (object.activate_after !== undefined && object.activate_after !== null) {
            message.activate_after = fromTimestamp(Timestamp.fromAmino(object.activate_after));
        }
        if (object.expire_after !== undefined && object.expire_after !== null) {
            message.expire_after = fromTimestamp(Timestamp.fromAmino(object.expire_after));
        }
        if (object.minimum_interval !== undefined && object.minimum_interval !== null) {
            message.minimum_interval = Duration.fromAmino(object.minimum_interval);
        }
        if (object.max_runs !== undefined && object.max_runs !== null) {
            message.max_runs = BigInt(object.max_runs);
        }
        if (object.disable_on_error !== undefined && object.disable_on_error !== null) {
            message.disable_on_error = object.disable_on_error;
        }
        if (object.enabled !== undefined && object.enabled !== null) {
            message.enabled = object.enabled;
        }
        if (object.task_gas_limit !== undefined && object.task_gas_limit !== null) {
            message.task_gas_limit = BigInt(object.task_gas_limit);
        }
        if (object.task_gas_fee !== undefined && object.task_gas_fee !== null) {
            message.task_gas_fee = Coin.fromAmino(object.task_gas_fee);
        }
        message.messages = object.messages?.map(e => GlobalDecoderRegistry.fromAminoMsg(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.creator = message.creator;
        obj.activate_after = message.activate_after ? Timestamp.toAmino(toTimestamp(message.activate_after)) : new Date();
        obj.expire_after = message.expire_after ? Timestamp.toAmino(toTimestamp(message.expire_after)) : new Date();
        obj.minimum_interval = message.minimum_interval ? Duration.toAmino(message.minimum_interval) : undefined;
        obj.max_runs = message.max_runs ? message.max_runs.toString() : undefined;
        obj.disable_on_error = message.disable_on_error;
        obj.enabled = message.enabled;
        obj.task_gas_limit = message.task_gas_limit ? message.task_gas_limit.toString() : undefined;
        obj.task_gas_fee = message.task_gas_fee ? Coin.toAmino(message.task_gas_fee) : undefined;
        if (message.messages) {
            obj.messages = message.messages.map(e => e ? GlobalDecoderRegistry.toAminoMsg(e) : undefined);
        }
        else {
            obj.messages = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCreateTask.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgCreateTask.decode(message.value);
    },
    toProto(message) {
        return MsgCreateTask.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.blit.MsgCreateTask",
            value: MsgCreateTask.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgCreateTask.typeUrl, MsgCreateTask);
function createBaseMsgCreateTaskResponse() {
    return {
        id: BigInt(0)
    };
}
export const MsgCreateTaskResponse = {
    typeUrl: "/blit.blit.MsgCreateTaskResponse",
    is(o) {
        return o && (o.$typeUrl === MsgCreateTaskResponse.typeUrl || typeof o.id === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === MsgCreateTaskResponse.typeUrl || typeof o.id === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === MsgCreateTaskResponse.typeUrl || typeof o.id === "bigint");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.id !== BigInt(0)) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0)
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
        const message = createBaseMsgCreateTaskResponse();
        if (object.id !== undefined && object.id !== null) {
            message.id = BigInt(object.id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id ? message.id.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCreateTaskResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgCreateTaskResponse.decode(message.value);
    },
    toProto(message) {
        return MsgCreateTaskResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.blit.MsgCreateTaskResponse",
            value: MsgCreateTaskResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgCreateTaskResponse.typeUrl, MsgCreateTaskResponse);
function createBaseMsgDeleteTask() {
    return {
        creator: "",
        id: BigInt(0)
    };
}
export const MsgDeleteTask = {
    typeUrl: "/blit.blit.MsgDeleteTask",
    is(o) {
        return o && (o.$typeUrl === MsgDeleteTask.typeUrl || typeof o.creator === "string" && typeof o.id === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === MsgDeleteTask.typeUrl || typeof o.creator === "string" && typeof o.id === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === MsgDeleteTask.typeUrl || typeof o.creator === "string" && typeof o.id === "bigint");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== BigInt(0)) {
            writer.uint32(16).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            creator: isSet(object.creator) ? String(object.creator) : "",
            id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0)
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
        const message = createBaseMsgDeleteTask();
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = BigInt(object.id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.creator = message.creator;
        obj.id = message.id ? message.id.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgDeleteTask.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgDeleteTask.decode(message.value);
    },
    toProto(message) {
        return MsgDeleteTask.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.blit.MsgDeleteTask",
            value: MsgDeleteTask.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgDeleteTask.typeUrl, MsgDeleteTask);
function createBaseMsgDeleteTaskResponse() {
    return {};
}
export const MsgDeleteTaskResponse = {
    typeUrl: "/blit.blit.MsgDeleteTaskResponse",
    is(o) {
        return o && o.$typeUrl === MsgDeleteTaskResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === MsgDeleteTaskResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === MsgDeleteTaskResponse.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        const message = createBaseMsgDeleteTaskResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgDeleteTaskResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgDeleteTaskResponse.decode(message.value);
    },
    toProto(message) {
        return MsgDeleteTaskResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.blit.MsgDeleteTaskResponse",
            value: MsgDeleteTaskResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgDeleteTaskResponse.typeUrl, MsgDeleteTaskResponse);
//# sourceMappingURL=tx.js.map
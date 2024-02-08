//@ts-nocheck
import { Coin } from "../../base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Duration } from "../../../google/protobuf/duration";
import { Any } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { toTimestamp, fromTimestamp, isSet, fromJsonTimestamp } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export const protobufPackage = "cosmos.feegrant.v1beta1";
function createBaseBasicAllowance() {
    return {
        $typeUrl: "/cosmos.feegrant.v1beta1.BasicAllowance",
        spend_limit: [],
        expiration: undefined
    };
}
export const BasicAllowance = {
    typeUrl: "/cosmos.feegrant.v1beta1.BasicAllowance",
    aminoType: "cosmos-sdk/BasicAllowance",
    is(o) {
        return o && (o.$typeUrl === BasicAllowance.typeUrl || Array.isArray(o.spend_limit) && (!o.spend_limit.length || Coin.is(o.spend_limit[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === BasicAllowance.typeUrl || Array.isArray(o.spend_limit) && (!o.spend_limit.length || Coin.isSDK(o.spend_limit[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === BasicAllowance.typeUrl || Array.isArray(o.spend_limit) && (!o.spend_limit.length || Coin.isAmino(o.spend_limit[0])));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.spend_limit) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.expiration !== undefined) {
            Timestamp.encode(toTimestamp(message.expiration), writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBasicAllowance();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.spend_limit.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.expiration = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
            spend_limit: Array.isArray(object?.spend_limit) ? object.spend_limit.map((e) => Coin.fromJSON(e)) : [],
            expiration: isSet(object.expiration) ? fromJsonTimestamp(object.expiration) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.spend_limit) {
            obj.spend_limit = message.spend_limit.map(e => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.spend_limit = [];
        }
        message.expiration !== undefined && (obj.expiration = message.expiration.toISOString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseBasicAllowance();
        message.spend_limit = object.spend_limit?.map(e => Coin.fromPartial(e)) || [];
        message.expiration = object.expiration ?? undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseBasicAllowance();
        message.spend_limit = object.spend_limit?.map(e => Coin.fromAmino(e)) || [];
        if (object.expiration !== undefined && object.expiration !== null) {
            message.expiration = fromTimestamp(Timestamp.fromAmino(object.expiration));
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.spend_limit) {
            obj.spend_limit = message.spend_limit.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.spend_limit = [];
        }
        obj.expiration = message.expiration ? Timestamp.toAmino(toTimestamp(message.expiration)) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return BasicAllowance.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/BasicAllowance",
            value: BasicAllowance.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return BasicAllowance.decode(message.value);
    },
    toProto(message) {
        return BasicAllowance.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.feegrant.v1beta1.BasicAllowance",
            value: BasicAllowance.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(BasicAllowance.typeUrl, BasicAllowance);
GlobalDecoderRegistry.registerAminoProtoMapping(BasicAllowance.aminoType, BasicAllowance.typeUrl);
function createBasePeriodicAllowance() {
    return {
        $typeUrl: "/cosmos.feegrant.v1beta1.PeriodicAllowance",
        basic: BasicAllowance.fromPartial({}),
        period: Duration.fromPartial({}),
        period_spend_limit: [],
        period_can_spend: [],
        period_reset: new Date()
    };
}
export const PeriodicAllowance = {
    typeUrl: "/cosmos.feegrant.v1beta1.PeriodicAllowance",
    aminoType: "cosmos-sdk/PeriodicAllowance",
    is(o) {
        return o && (o.$typeUrl === PeriodicAllowance.typeUrl || BasicAllowance.is(o.basic) && Duration.is(o.period) && Array.isArray(o.period_spend_limit) && (!o.period_spend_limit.length || Coin.is(o.period_spend_limit[0])) && Array.isArray(o.period_can_spend) && (!o.period_can_spend.length || Coin.is(o.period_can_spend[0])) && Timestamp.is(o.period_reset));
    },
    isSDK(o) {
        return o && (o.$typeUrl === PeriodicAllowance.typeUrl || BasicAllowance.isSDK(o.basic) && Duration.isSDK(o.period) && Array.isArray(o.period_spend_limit) && (!o.period_spend_limit.length || Coin.isSDK(o.period_spend_limit[0])) && Array.isArray(o.period_can_spend) && (!o.period_can_spend.length || Coin.isSDK(o.period_can_spend[0])) && Timestamp.isSDK(o.period_reset));
    },
    isAmino(o) {
        return o && (o.$typeUrl === PeriodicAllowance.typeUrl || BasicAllowance.isAmino(o.basic) && Duration.isAmino(o.period) && Array.isArray(o.period_spend_limit) && (!o.period_spend_limit.length || Coin.isAmino(o.period_spend_limit[0])) && Array.isArray(o.period_can_spend) && (!o.period_can_spend.length || Coin.isAmino(o.period_can_spend[0])) && Timestamp.isAmino(o.period_reset));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.basic !== undefined) {
            BasicAllowance.encode(message.basic, writer.uint32(10).fork()).ldelim();
        }
        if (message.period !== undefined) {
            Duration.encode(message.period, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.period_spend_limit) {
            Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.period_can_spend) {
            Coin.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.period_reset !== undefined) {
            Timestamp.encode(toTimestamp(message.period_reset), writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePeriodicAllowance();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.basic = BasicAllowance.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.period = Duration.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.period_spend_limit.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.period_can_spend.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.period_reset = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
            basic: isSet(object.basic) ? BasicAllowance.fromJSON(object.basic) : undefined,
            period: isSet(object.period) ? Duration.fromJSON(object.period) : undefined,
            period_spend_limit: Array.isArray(object?.period_spend_limit) ? object.period_spend_limit.map((e) => Coin.fromJSON(e)) : [],
            period_can_spend: Array.isArray(object?.period_can_spend) ? object.period_can_spend.map((e) => Coin.fromJSON(e)) : [],
            period_reset: isSet(object.period_reset) ? fromJsonTimestamp(object.period_reset) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.basic !== undefined && (obj.basic = message.basic ? BasicAllowance.toJSON(message.basic) : undefined);
        message.period !== undefined && (obj.period = message.period ? Duration.toJSON(message.period) : undefined);
        if (message.period_spend_limit) {
            obj.period_spend_limit = message.period_spend_limit.map(e => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.period_spend_limit = [];
        }
        if (message.period_can_spend) {
            obj.period_can_spend = message.period_can_spend.map(e => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.period_can_spend = [];
        }
        message.period_reset !== undefined && (obj.period_reset = message.period_reset.toISOString());
        return obj;
    },
    fromPartial(object) {
        const message = createBasePeriodicAllowance();
        message.basic = object.basic !== undefined && object.basic !== null ? BasicAllowance.fromPartial(object.basic) : undefined;
        message.period = object.period !== undefined && object.period !== null ? Duration.fromPartial(object.period) : undefined;
        message.period_spend_limit = object.period_spend_limit?.map(e => Coin.fromPartial(e)) || [];
        message.period_can_spend = object.period_can_spend?.map(e => Coin.fromPartial(e)) || [];
        message.period_reset = object.period_reset ?? undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBasePeriodicAllowance();
        if (object.basic !== undefined && object.basic !== null) {
            message.basic = BasicAllowance.fromAmino(object.basic);
        }
        if (object.period !== undefined && object.period !== null) {
            message.period = Duration.fromAmino(object.period);
        }
        message.period_spend_limit = object.period_spend_limit?.map(e => Coin.fromAmino(e)) || [];
        message.period_can_spend = object.period_can_spend?.map(e => Coin.fromAmino(e)) || [];
        if (object.period_reset !== undefined && object.period_reset !== null) {
            message.period_reset = fromTimestamp(Timestamp.fromAmino(object.period_reset));
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.basic = message.basic ? BasicAllowance.toAmino(message.basic) : BasicAllowance.fromPartial({});
        obj.period = message.period ? Duration.toAmino(message.period) : Duration.fromPartial({});
        if (message.period_spend_limit) {
            obj.period_spend_limit = message.period_spend_limit.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.period_spend_limit = [];
        }
        if (message.period_can_spend) {
            obj.period_can_spend = message.period_can_spend.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.period_can_spend = [];
        }
        obj.period_reset = message.period_reset ? Timestamp.toAmino(toTimestamp(message.period_reset)) : new Date();
        return obj;
    },
    fromAminoMsg(object) {
        return PeriodicAllowance.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/PeriodicAllowance",
            value: PeriodicAllowance.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return PeriodicAllowance.decode(message.value);
    },
    toProto(message) {
        return PeriodicAllowance.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.feegrant.v1beta1.PeriodicAllowance",
            value: PeriodicAllowance.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(PeriodicAllowance.typeUrl, PeriodicAllowance);
GlobalDecoderRegistry.registerAminoProtoMapping(PeriodicAllowance.aminoType, PeriodicAllowance.typeUrl);
function createBaseAllowedMsgAllowance() {
    return {
        $typeUrl: "/cosmos.feegrant.v1beta1.AllowedMsgAllowance",
        allowance: undefined,
        allowed_messages: []
    };
}
export const AllowedMsgAllowance = {
    typeUrl: "/cosmos.feegrant.v1beta1.AllowedMsgAllowance",
    aminoType: "cosmos-sdk/AllowedMsgAllowance",
    is(o) {
        return o && (o.$typeUrl === AllowedMsgAllowance.typeUrl || Array.isArray(o.allowed_messages) && (!o.allowed_messages.length || typeof o.allowed_messages[0] === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === AllowedMsgAllowance.typeUrl || Array.isArray(o.allowed_messages) && (!o.allowed_messages.length || typeof o.allowed_messages[0] === "string"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === AllowedMsgAllowance.typeUrl || Array.isArray(o.allowed_messages) && (!o.allowed_messages.length || typeof o.allowed_messages[0] === "string"));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.allowance !== undefined) {
            Any.encode(GlobalDecoderRegistry.wrapAny(message.allowance), writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.allowed_messages) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAllowedMsgAllowance();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.allowance = GlobalDecoderRegistry.unwrapAny(reader);
                    break;
                case 2:
                    message.allowed_messages.push(reader.string());
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
            allowance: isSet(object.allowance) ? GlobalDecoderRegistry.fromJSON(object.allowance) : undefined,
            allowed_messages: Array.isArray(object?.allowed_messages) ? object.allowed_messages.map((e) => String(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.allowance !== undefined && (obj.allowance = message.allowance ? GlobalDecoderRegistry.toJSON(message.allowance) : undefined);
        if (message.allowed_messages) {
            obj.allowed_messages = message.allowed_messages.map(e => e);
        }
        else {
            obj.allowed_messages = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAllowedMsgAllowance();
        message.allowance = object.allowance !== undefined && object.allowance !== null ? GlobalDecoderRegistry.fromPartial(object.allowance) : undefined;
        message.allowed_messages = object.allowed_messages?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseAllowedMsgAllowance();
        if (object.allowance !== undefined && object.allowance !== null) {
            message.allowance = GlobalDecoderRegistry.fromAminoMsg(object.allowance);
        }
        message.allowed_messages = object.allowed_messages?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.allowance = message.allowance ? GlobalDecoderRegistry.toAminoMsg(message.allowance) : undefined;
        if (message.allowed_messages) {
            obj.allowed_messages = message.allowed_messages.map(e => e);
        }
        else {
            obj.allowed_messages = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return AllowedMsgAllowance.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/AllowedMsgAllowance",
            value: AllowedMsgAllowance.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return AllowedMsgAllowance.decode(message.value);
    },
    toProto(message) {
        return AllowedMsgAllowance.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.feegrant.v1beta1.AllowedMsgAllowance",
            value: AllowedMsgAllowance.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(AllowedMsgAllowance.typeUrl, AllowedMsgAllowance);
GlobalDecoderRegistry.registerAminoProtoMapping(AllowedMsgAllowance.aminoType, AllowedMsgAllowance.typeUrl);
function createBaseGrant() {
    return {
        granter: "",
        grantee: "",
        allowance: undefined
    };
}
export const Grant = {
    typeUrl: "/cosmos.feegrant.v1beta1.Grant",
    aminoType: "cosmos-sdk/Grant",
    is(o) {
        return o && (o.$typeUrl === Grant.typeUrl || typeof o.granter === "string" && typeof o.grantee === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === Grant.typeUrl || typeof o.granter === "string" && typeof o.grantee === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === Grant.typeUrl || typeof o.granter === "string" && typeof o.grantee === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.granter !== "") {
            writer.uint32(10).string(message.granter);
        }
        if (message.grantee !== "") {
            writer.uint32(18).string(message.grantee);
        }
        if (message.allowance !== undefined) {
            Any.encode(GlobalDecoderRegistry.wrapAny(message.allowance), writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGrant();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.granter = reader.string();
                    break;
                case 2:
                    message.grantee = reader.string();
                    break;
                case 3:
                    message.allowance = GlobalDecoderRegistry.unwrapAny(reader);
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
            granter: isSet(object.granter) ? String(object.granter) : "",
            grantee: isSet(object.grantee) ? String(object.grantee) : "",
            allowance: isSet(object.allowance) ? GlobalDecoderRegistry.fromJSON(object.allowance) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.granter !== undefined && (obj.granter = message.granter);
        message.grantee !== undefined && (obj.grantee = message.grantee);
        message.allowance !== undefined && (obj.allowance = message.allowance ? GlobalDecoderRegistry.toJSON(message.allowance) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGrant();
        message.granter = object.granter ?? "";
        message.grantee = object.grantee ?? "";
        message.allowance = object.allowance !== undefined && object.allowance !== null ? GlobalDecoderRegistry.fromPartial(object.allowance) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseGrant();
        if (object.granter !== undefined && object.granter !== null) {
            message.granter = object.granter;
        }
        if (object.grantee !== undefined && object.grantee !== null) {
            message.grantee = object.grantee;
        }
        if (object.allowance !== undefined && object.allowance !== null) {
            message.allowance = GlobalDecoderRegistry.fromAminoMsg(object.allowance);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.granter = message.granter;
        obj.grantee = message.grantee;
        obj.allowance = message.allowance ? GlobalDecoderRegistry.toAminoMsg(message.allowance) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Grant.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Grant",
            value: Grant.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Grant.decode(message.value);
    },
    toProto(message) {
        return Grant.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.feegrant.v1beta1.Grant",
            value: Grant.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(Grant.typeUrl, Grant);
GlobalDecoderRegistry.registerAminoProtoMapping(Grant.aminoType, Grant.typeUrl);
//# sourceMappingURL=feegrant.js.map
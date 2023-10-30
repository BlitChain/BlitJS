//@ts-nocheck
import { Coin } from "../../base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Duration } from "../../../google/protobuf/duration";
import { Any } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { toTimestamp, fromTimestamp, isSet, fromJsonTimestamp } from "../../../helpers";
function createBaseBasicAllowance() {
    return {
        $typeUrl: "/cosmos.feegrant.v1beta1.BasicAllowance",
        spend_limit: [],
        expiration: undefined
    };
}
export const BasicAllowance = {
    typeUrl: "/cosmos.feegrant.v1beta1.BasicAllowance",
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
    fromSDK(object) {
        return {
            spend_limit: Array.isArray(object?.spend_limit) ? object.spend_limit.map((e) => Coin.fromSDK(e)) : [],
            expiration: object.expiration ? Timestamp.fromSDK(object.expiration) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.spend_limit) {
            obj.spend_limit = message.spend_limit.map(e => e ? Coin.toSDK(e) : undefined);
        }
        else {
            obj.spend_limit = [];
        }
        message.expiration !== undefined && (obj.expiration = message.expiration ? Timestamp.toSDK(message.expiration) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            spend_limit: Array.isArray(object?.spend_limit) ? object.spend_limit.map((e) => Coin.fromAmino(e)) : [],
            expiration: object?.expiration
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.spend_limit) {
            obj.spend_limit = message.spend_limit.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.spend_limit = [];
        }
        obj.expiration = message.expiration;
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
    fromSDK(object) {
        return {
            basic: object.basic ? BasicAllowance.fromSDK(object.basic) : undefined,
            period: object.period ? Duration.fromSDK(object.period) : undefined,
            period_spend_limit: Array.isArray(object?.period_spend_limit) ? object.period_spend_limit.map((e) => Coin.fromSDK(e)) : [],
            period_can_spend: Array.isArray(object?.period_can_spend) ? object.period_can_spend.map((e) => Coin.fromSDK(e)) : [],
            period_reset: object.period_reset ? Timestamp.fromSDK(object.period_reset) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.basic !== undefined && (obj.basic = message.basic ? BasicAllowance.toSDK(message.basic) : undefined);
        message.period !== undefined && (obj.period = message.period ? Duration.toSDK(message.period) : undefined);
        if (message.period_spend_limit) {
            obj.period_spend_limit = message.period_spend_limit.map(e => e ? Coin.toSDK(e) : undefined);
        }
        else {
            obj.period_spend_limit = [];
        }
        if (message.period_can_spend) {
            obj.period_can_spend = message.period_can_spend.map(e => e ? Coin.toSDK(e) : undefined);
        }
        else {
            obj.period_can_spend = [];
        }
        message.period_reset !== undefined && (obj.period_reset = message.period_reset ? Timestamp.toSDK(message.period_reset) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            basic: object?.basic ? BasicAllowance.fromAmino(object.basic) : undefined,
            period: object?.period ? Duration.fromAmino(object.period) : undefined,
            period_spend_limit: Array.isArray(object?.period_spend_limit) ? object.period_spend_limit.map((e) => Coin.fromAmino(e)) : [],
            period_can_spend: Array.isArray(object?.period_can_spend) ? object.period_can_spend.map((e) => Coin.fromAmino(e)) : [],
            period_reset: object.period_reset
        };
    },
    toAmino(message) {
        const obj = {};
        obj.basic = message.basic ? BasicAllowance.toAmino(message.basic) : undefined;
        obj.period = message.period ? Duration.toAmino(message.period) : undefined;
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
        obj.period_reset = message.period_reset;
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
function createBaseAllowedMsgAllowance() {
    return {
        $typeUrl: "/cosmos.feegrant.v1beta1.AllowedMsgAllowance",
        allowance: undefined,
        allowed_messages: []
    };
}
export const AllowedMsgAllowance = {
    typeUrl: "/cosmos.feegrant.v1beta1.AllowedMsgAllowance",
    encode(message, writer = BinaryWriter.create()) {
        if (message.allowance !== undefined) {
            Any.encode(message.allowance, writer.uint32(10).fork()).ldelim();
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
                    message.allowance = Cosmos_feegrantFeeAllowanceI_InterfaceDecoder(reader);
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
            allowance: isSet(object.allowance) ? Any.fromJSON(object.allowance) : undefined,
            allowed_messages: Array.isArray(object?.allowed_messages) ? object.allowed_messages.map((e) => String(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.allowance !== undefined && (obj.allowance = message.allowance ? Any.toJSON(message.allowance) : undefined);
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
        message.allowance = object.allowance !== undefined && object.allowance !== null ? Any.fromPartial(object.allowance) : undefined;
        message.allowed_messages = object.allowed_messages?.map(e => e) || [];
        return message;
    },
    fromSDK(object) {
        return {
            allowance: object.allowance ? Any.fromSDK(object.allowance) : undefined,
            allowed_messages: Array.isArray(object?.allowed_messages) ? object.allowed_messages.map((e) => e) : []
        };
    },
    toSDK(message) {
        const obj = {};
        message.allowance !== undefined && (obj.allowance = message.allowance ? Any.toSDK(message.allowance) : undefined);
        if (message.allowed_messages) {
            obj.allowed_messages = message.allowed_messages.map(e => e);
        }
        else {
            obj.allowed_messages = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            allowance: object?.allowance ? Cosmos_feegrantFeeAllowanceI_FromAmino(object.allowance) : undefined,
            allowed_messages: Array.isArray(object?.allowed_messages) ? object.allowed_messages.map((e) => e) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.allowance = message.allowance ? Cosmos_feegrantFeeAllowanceI_ToAmino(message.allowance) : undefined;
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
function createBaseGrant() {
    return {
        granter: "",
        grantee: "",
        allowance: undefined
    };
}
export const Grant = {
    typeUrl: "/cosmos.feegrant.v1beta1.Grant",
    encode(message, writer = BinaryWriter.create()) {
        if (message.granter !== "") {
            writer.uint32(10).string(message.granter);
        }
        if (message.grantee !== "") {
            writer.uint32(18).string(message.grantee);
        }
        if (message.allowance !== undefined) {
            Any.encode(message.allowance, writer.uint32(26).fork()).ldelim();
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
                    message.allowance = Cosmos_feegrantFeeAllowanceI_InterfaceDecoder(reader);
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
            allowance: isSet(object.allowance) ? Any.fromJSON(object.allowance) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.granter !== undefined && (obj.granter = message.granter);
        message.grantee !== undefined && (obj.grantee = message.grantee);
        message.allowance !== undefined && (obj.allowance = message.allowance ? Any.toJSON(message.allowance) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGrant();
        message.granter = object.granter ?? "";
        message.grantee = object.grantee ?? "";
        message.allowance = object.allowance !== undefined && object.allowance !== null ? Any.fromPartial(object.allowance) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            granter: object?.granter,
            grantee: object?.grantee,
            allowance: object.allowance ? Any.fromSDK(object.allowance) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.granter = message.granter;
        obj.grantee = message.grantee;
        message.allowance !== undefined && (obj.allowance = message.allowance ? Any.toSDK(message.allowance) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            granter: object.granter,
            grantee: object.grantee,
            allowance: object?.allowance ? Cosmos_feegrantFeeAllowanceI_FromAmino(object.allowance) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.granter = message.granter;
        obj.grantee = message.grantee;
        obj.allowance = message.allowance ? Cosmos_feegrantFeeAllowanceI_ToAmino(message.allowance) : undefined;
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
export const Cosmos_feegrantFeeAllowanceI_InterfaceDecoder = (input) => {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const data = Any.decode(reader, reader.uint32());
    switch (data.typeUrl) {
        case "/cosmos.feegrant.v1beta1.BasicAllowance":
            return BasicAllowance.decode(data.value);
        case "/cosmos.feegrant.v1beta1.PeriodicAllowance":
            return PeriodicAllowance.decode(data.value);
        case "/cosmos.feegrant.v1beta1.AllowedMsgAllowance":
            return AllowedMsgAllowance.decode(data.value);
        default:
            return data;
    }
};
export const Cosmos_feegrantFeeAllowanceI_FromAmino = (content) => {
    switch (content.type) {
        case "cosmos-sdk/BasicAllowance":
            return Any.fromPartial({
                typeUrl: "/cosmos.feegrant.v1beta1.BasicAllowance",
                value: BasicAllowance.encode(BasicAllowance.fromPartial(BasicAllowance.fromAmino(content.value))).finish()
            });
        case "cosmos-sdk/PeriodicAllowance":
            return Any.fromPartial({
                typeUrl: "/cosmos.feegrant.v1beta1.PeriodicAllowance",
                value: PeriodicAllowance.encode(PeriodicAllowance.fromPartial(PeriodicAllowance.fromAmino(content.value))).finish()
            });
        case "cosmos-sdk/AllowedMsgAllowance":
            return Any.fromPartial({
                typeUrl: "/cosmos.feegrant.v1beta1.AllowedMsgAllowance",
                value: AllowedMsgAllowance.encode(AllowedMsgAllowance.fromPartial(AllowedMsgAllowance.fromAmino(content.value))).finish()
            });
        default:
            return Any.fromAmino(content);
    }
};
export const Cosmos_feegrantFeeAllowanceI_ToAmino = (content) => {
    switch (content.typeUrl) {
        case "/cosmos.feegrant.v1beta1.BasicAllowance":
            return {
                type: "cosmos-sdk/BasicAllowance",
                value: BasicAllowance.toAmino(BasicAllowance.decode(content.value))
            };
        case "/cosmos.feegrant.v1beta1.PeriodicAllowance":
            return {
                type: "cosmos-sdk/PeriodicAllowance",
                value: PeriodicAllowance.toAmino(PeriodicAllowance.decode(content.value))
            };
        case "/cosmos.feegrant.v1beta1.AllowedMsgAllowance":
            return {
                type: "cosmos-sdk/AllowedMsgAllowance",
                value: AllowedMsgAllowance.toAmino(AllowedMsgAllowance.decode(content.value))
            };
        default:
            return Any.toAmino(content);
    }
};
//# sourceMappingURL=feegrant.js.map
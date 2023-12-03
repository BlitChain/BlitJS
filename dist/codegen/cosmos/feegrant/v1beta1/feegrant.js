"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cosmos_feegrantFeeAllowanceI_ToAmino = exports.Cosmos_feegrantFeeAllowanceI_FromAmino = exports.Cosmos_feegrantFeeAllowanceI_InterfaceDecoder = exports.Grant = exports.AllowedMsgAllowance = exports.PeriodicAllowance = exports.BasicAllowance = exports.protobufPackage = void 0;
//@ts-nocheck
const coin_1 = require("../../base/v1beta1/coin");
const timestamp_1 = require("../../../google/protobuf/timestamp");
const duration_1 = require("../../../google/protobuf/duration");
const any_1 = require("../../../google/protobuf/any");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "cosmos.feegrant.v1beta1";
function createBaseBasicAllowance() {
    return {
        $typeUrl: "/cosmos.feegrant.v1beta1.BasicAllowance",
        spend_limit: [],
        expiration: undefined
    };
}
exports.BasicAllowance = {
    typeUrl: "/cosmos.feegrant.v1beta1.BasicAllowance",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.spend_limit) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.expiration !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.expiration), writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBasicAllowance();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.spend_limit.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.expiration = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
            spend_limit: Array.isArray(object?.spend_limit) ? object.spend_limit.map((e) => coin_1.Coin.fromJSON(e)) : [],
            expiration: (0, helpers_1.isSet)(object.expiration) ? (0, helpers_1.fromJsonTimestamp)(object.expiration) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.spend_limit) {
            obj.spend_limit = message.spend_limit.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.spend_limit = [];
        }
        message.expiration !== undefined && (obj.expiration = message.expiration.toISOString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseBasicAllowance();
        message.spend_limit = object.spend_limit?.map(e => coin_1.Coin.fromPartial(e)) || [];
        message.expiration = object.expiration ?? undefined;
        return message;
    },
    fromSDK(object) {
        return {
            spend_limit: Array.isArray(object?.spend_limit) ? object.spend_limit.map((e) => coin_1.Coin.fromSDK(e)) : [],
            expiration: object.expiration ? timestamp_1.Timestamp.fromSDK(object.expiration) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.spend_limit) {
            obj.spend_limit = message.spend_limit.map(e => e ? coin_1.Coin.toSDK(e) : undefined);
        }
        else {
            obj.spend_limit = [];
        }
        message.expiration !== undefined && (obj.expiration = message.expiration ? timestamp_1.Timestamp.toSDK(message.expiration) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            spend_limit: Array.isArray(object?.spend_limit) ? object.spend_limit.map((e) => coin_1.Coin.fromAmino(e)) : [],
            expiration: object?.expiration ? (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.expiration)) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.spend_limit) {
            obj.spend_limit = message.spend_limit.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.spend_limit = [];
        }
        obj.expiration = message.expiration ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.expiration)) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.BasicAllowance.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/BasicAllowance",
            value: exports.BasicAllowance.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.BasicAllowance.decode(message.value);
    },
    toProto(message) {
        return exports.BasicAllowance.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.feegrant.v1beta1.BasicAllowance",
            value: exports.BasicAllowance.encode(message).finish()
        };
    }
};
function createBasePeriodicAllowance() {
    return {
        $typeUrl: "/cosmos.feegrant.v1beta1.PeriodicAllowance",
        basic: exports.BasicAllowance.fromPartial({}),
        period: duration_1.Duration.fromPartial({}),
        period_spend_limit: [],
        period_can_spend: [],
        period_reset: new Date()
    };
}
exports.PeriodicAllowance = {
    typeUrl: "/cosmos.feegrant.v1beta1.PeriodicAllowance",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.basic !== undefined) {
            exports.BasicAllowance.encode(message.basic, writer.uint32(10).fork()).ldelim();
        }
        if (message.period !== undefined) {
            duration_1.Duration.encode(message.period, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.period_spend_limit) {
            coin_1.Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.period_can_spend) {
            coin_1.Coin.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.period_reset !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.period_reset), writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePeriodicAllowance();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.basic = exports.BasicAllowance.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.period = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.period_spend_limit.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.period_can_spend.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.period_reset = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
            basic: (0, helpers_1.isSet)(object.basic) ? exports.BasicAllowance.fromJSON(object.basic) : undefined,
            period: (0, helpers_1.isSet)(object.period) ? duration_1.Duration.fromJSON(object.period) : undefined,
            period_spend_limit: Array.isArray(object?.period_spend_limit) ? object.period_spend_limit.map((e) => coin_1.Coin.fromJSON(e)) : [],
            period_can_spend: Array.isArray(object?.period_can_spend) ? object.period_can_spend.map((e) => coin_1.Coin.fromJSON(e)) : [],
            period_reset: (0, helpers_1.isSet)(object.period_reset) ? (0, helpers_1.fromJsonTimestamp)(object.period_reset) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.basic !== undefined && (obj.basic = message.basic ? exports.BasicAllowance.toJSON(message.basic) : undefined);
        message.period !== undefined && (obj.period = message.period ? duration_1.Duration.toJSON(message.period) : undefined);
        if (message.period_spend_limit) {
            obj.period_spend_limit = message.period_spend_limit.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.period_spend_limit = [];
        }
        if (message.period_can_spend) {
            obj.period_can_spend = message.period_can_spend.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.period_can_spend = [];
        }
        message.period_reset !== undefined && (obj.period_reset = message.period_reset.toISOString());
        return obj;
    },
    fromPartial(object) {
        const message = createBasePeriodicAllowance();
        message.basic = object.basic !== undefined && object.basic !== null ? exports.BasicAllowance.fromPartial(object.basic) : undefined;
        message.period = object.period !== undefined && object.period !== null ? duration_1.Duration.fromPartial(object.period) : undefined;
        message.period_spend_limit = object.period_spend_limit?.map(e => coin_1.Coin.fromPartial(e)) || [];
        message.period_can_spend = object.period_can_spend?.map(e => coin_1.Coin.fromPartial(e)) || [];
        message.period_reset = object.period_reset ?? undefined;
        return message;
    },
    fromSDK(object) {
        return {
            basic: object.basic ? exports.BasicAllowance.fromSDK(object.basic) : undefined,
            period: object.period ? duration_1.Duration.fromSDK(object.period) : undefined,
            period_spend_limit: Array.isArray(object?.period_spend_limit) ? object.period_spend_limit.map((e) => coin_1.Coin.fromSDK(e)) : [],
            period_can_spend: Array.isArray(object?.period_can_spend) ? object.period_can_spend.map((e) => coin_1.Coin.fromSDK(e)) : [],
            period_reset: object.period_reset ? timestamp_1.Timestamp.fromSDK(object.period_reset) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.basic !== undefined && (obj.basic = message.basic ? exports.BasicAllowance.toSDK(message.basic) : undefined);
        message.period !== undefined && (obj.period = message.period ? duration_1.Duration.toSDK(message.period) : undefined);
        if (message.period_spend_limit) {
            obj.period_spend_limit = message.period_spend_limit.map(e => e ? coin_1.Coin.toSDK(e) : undefined);
        }
        else {
            obj.period_spend_limit = [];
        }
        if (message.period_can_spend) {
            obj.period_can_spend = message.period_can_spend.map(e => e ? coin_1.Coin.toSDK(e) : undefined);
        }
        else {
            obj.period_can_spend = [];
        }
        message.period_reset !== undefined && (obj.period_reset = message.period_reset ? timestamp_1.Timestamp.toSDK(message.period_reset) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            basic: object?.basic ? exports.BasicAllowance.fromAmino(object.basic) : undefined,
            period: object?.period ? duration_1.Duration.fromAmino(object.period) : undefined,
            period_spend_limit: Array.isArray(object?.period_spend_limit) ? object.period_spend_limit.map((e) => coin_1.Coin.fromAmino(e)) : [],
            period_can_spend: Array.isArray(object?.period_can_spend) ? object.period_can_spend.map((e) => coin_1.Coin.fromAmino(e)) : [],
            period_reset: object?.period_reset ? (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.period_reset)) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.basic = message.basic ? exports.BasicAllowance.toAmino(message.basic) : undefined;
        obj.period = message.period ? duration_1.Duration.toAmino(message.period) : undefined;
        if (message.period_spend_limit) {
            obj.period_spend_limit = message.period_spend_limit.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.period_spend_limit = [];
        }
        if (message.period_can_spend) {
            obj.period_can_spend = message.period_can_spend.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.period_can_spend = [];
        }
        obj.period_reset = message.period_reset ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.period_reset)) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.PeriodicAllowance.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/PeriodicAllowance",
            value: exports.PeriodicAllowance.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.PeriodicAllowance.decode(message.value);
    },
    toProto(message) {
        return exports.PeriodicAllowance.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.feegrant.v1beta1.PeriodicAllowance",
            value: exports.PeriodicAllowance.encode(message).finish()
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
exports.AllowedMsgAllowance = {
    typeUrl: "/cosmos.feegrant.v1beta1.AllowedMsgAllowance",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.allowance !== undefined) {
            any_1.Any.encode(message.allowance, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.allowed_messages) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAllowedMsgAllowance();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.allowance = (0, exports.Cosmos_feegrantFeeAllowanceI_InterfaceDecoder)(reader);
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
            allowance: (0, helpers_1.isSet)(object.allowance) ? any_1.Any.fromJSON(object.allowance) : undefined,
            allowed_messages: Array.isArray(object?.allowed_messages) ? object.allowed_messages.map((e) => String(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.allowance !== undefined && (obj.allowance = message.allowance ? any_1.Any.toJSON(message.allowance) : undefined);
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
        message.allowance = object.allowance !== undefined && object.allowance !== null ? any_1.Any.fromPartial(object.allowance) : undefined;
        message.allowed_messages = object.allowed_messages?.map(e => e) || [];
        return message;
    },
    fromSDK(object) {
        return {
            allowance: object.allowance ? any_1.Any.fromSDK(object.allowance) : undefined,
            allowed_messages: Array.isArray(object?.allowed_messages) ? object.allowed_messages.map((e) => e) : []
        };
    },
    toSDK(message) {
        const obj = {};
        message.allowance !== undefined && (obj.allowance = message.allowance ? any_1.Any.toSDK(message.allowance) : undefined);
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
            allowance: object?.allowance ? (0, exports.Cosmos_feegrantFeeAllowanceI_FromAmino)(object.allowance) : undefined,
            allowed_messages: Array.isArray(object?.allowed_messages) ? object.allowed_messages.map((e) => e) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.allowance = message.allowance ? (0, exports.Cosmos_feegrantFeeAllowanceI_ToAmino)(message.allowance) : undefined;
        if (message.allowed_messages) {
            obj.allowed_messages = message.allowed_messages.map(e => e);
        }
        else {
            obj.allowed_messages = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.AllowedMsgAllowance.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/AllowedMsgAllowance",
            value: exports.AllowedMsgAllowance.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.AllowedMsgAllowance.decode(message.value);
    },
    toProto(message) {
        return exports.AllowedMsgAllowance.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.feegrant.v1beta1.AllowedMsgAllowance",
            value: exports.AllowedMsgAllowance.encode(message).finish()
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
exports.Grant = {
    typeUrl: "/cosmos.feegrant.v1beta1.Grant",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.granter !== "") {
            writer.uint32(10).string(message.granter);
        }
        if (message.grantee !== "") {
            writer.uint32(18).string(message.grantee);
        }
        if (message.allowance !== undefined) {
            any_1.Any.encode(message.allowance, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
                    message.allowance = (0, exports.Cosmos_feegrantFeeAllowanceI_InterfaceDecoder)(reader);
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
            granter: (0, helpers_1.isSet)(object.granter) ? String(object.granter) : "",
            grantee: (0, helpers_1.isSet)(object.grantee) ? String(object.grantee) : "",
            allowance: (0, helpers_1.isSet)(object.allowance) ? any_1.Any.fromJSON(object.allowance) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.granter !== undefined && (obj.granter = message.granter);
        message.grantee !== undefined && (obj.grantee = message.grantee);
        message.allowance !== undefined && (obj.allowance = message.allowance ? any_1.Any.toJSON(message.allowance) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGrant();
        message.granter = object.granter ?? "";
        message.grantee = object.grantee ?? "";
        message.allowance = object.allowance !== undefined && object.allowance !== null ? any_1.Any.fromPartial(object.allowance) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            granter: object?.granter,
            grantee: object?.grantee,
            allowance: object.allowance ? any_1.Any.fromSDK(object.allowance) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.granter = message.granter;
        obj.grantee = message.grantee;
        message.allowance !== undefined && (obj.allowance = message.allowance ? any_1.Any.toSDK(message.allowance) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            granter: object.granter,
            grantee: object.grantee,
            allowance: object?.allowance ? (0, exports.Cosmos_feegrantFeeAllowanceI_FromAmino)(object.allowance) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.granter = message.granter;
        obj.grantee = message.grantee;
        obj.allowance = message.allowance ? (0, exports.Cosmos_feegrantFeeAllowanceI_ToAmino)(message.allowance) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Grant.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Grant",
            value: exports.Grant.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Grant.decode(message.value);
    },
    toProto(message) {
        return exports.Grant.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.feegrant.v1beta1.Grant",
            value: exports.Grant.encode(message).finish()
        };
    }
};
const Cosmos_feegrantFeeAllowanceI_InterfaceDecoder = (input) => {
    const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
    const data = any_1.Any.decode(reader, reader.uint32(), true);
    switch (data.typeUrl) {
        case "/cosmos.feegrant.v1beta1.BasicAllowance":
            return exports.BasicAllowance.decode(data.value, undefined, true);
        case "/cosmos.feegrant.v1beta1.PeriodicAllowance":
            return exports.PeriodicAllowance.decode(data.value, undefined, true);
        case "/cosmos.feegrant.v1beta1.AllowedMsgAllowance":
            return exports.AllowedMsgAllowance.decode(data.value, undefined, true);
        default:
            return data;
    }
};
exports.Cosmos_feegrantFeeAllowanceI_InterfaceDecoder = Cosmos_feegrantFeeAllowanceI_InterfaceDecoder;
const Cosmos_feegrantFeeAllowanceI_FromAmino = (content) => {
    switch (content.type) {
        case "cosmos-sdk/BasicAllowance":
            return any_1.Any.fromPartial({
                typeUrl: "/cosmos.feegrant.v1beta1.BasicAllowance",
                value: exports.BasicAllowance.encode(exports.BasicAllowance.fromPartial(exports.BasicAllowance.fromAmino(content.value))).finish()
            });
        case "cosmos-sdk/PeriodicAllowance":
            return any_1.Any.fromPartial({
                typeUrl: "/cosmos.feegrant.v1beta1.PeriodicAllowance",
                value: exports.PeriodicAllowance.encode(exports.PeriodicAllowance.fromPartial(exports.PeriodicAllowance.fromAmino(content.value))).finish()
            });
        case "cosmos-sdk/AllowedMsgAllowance":
            return any_1.Any.fromPartial({
                typeUrl: "/cosmos.feegrant.v1beta1.AllowedMsgAllowance",
                value: exports.AllowedMsgAllowance.encode(exports.AllowedMsgAllowance.fromPartial(exports.AllowedMsgAllowance.fromAmino(content.value))).finish()
            });
        default:
            return any_1.Any.fromAmino(content);
    }
};
exports.Cosmos_feegrantFeeAllowanceI_FromAmino = Cosmos_feegrantFeeAllowanceI_FromAmino;
const Cosmos_feegrantFeeAllowanceI_ToAmino = (content) => {
    switch (content.typeUrl) {
        case "/cosmos.feegrant.v1beta1.BasicAllowance":
            return {
                type: "cosmos-sdk/BasicAllowance",
                value: exports.BasicAllowance.toAmino(exports.BasicAllowance.decode(content.value, undefined))
            };
        case "/cosmos.feegrant.v1beta1.PeriodicAllowance":
            return {
                type: "cosmos-sdk/PeriodicAllowance",
                value: exports.PeriodicAllowance.toAmino(exports.PeriodicAllowance.decode(content.value, undefined))
            };
        case "/cosmos.feegrant.v1beta1.AllowedMsgAllowance":
            return {
                type: "cosmos-sdk/AllowedMsgAllowance",
                value: exports.AllowedMsgAllowance.toAmino(exports.AllowedMsgAllowance.decode(content.value, undefined))
            };
        default:
            return any_1.Any.toAmino(content);
    }
};
exports.Cosmos_feegrantFeeAllowanceI_ToAmino = Cosmos_feegrantFeeAllowanceI_ToAmino;
//# sourceMappingURL=feegrant.js.map
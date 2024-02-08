"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommunityPoolSpendProposalWithDeposit = exports.DelegationDelegatorReward = exports.DelegatorStartingInfo = exports.CommunityPoolSpendProposal = exports.FeePool = exports.ValidatorSlashEvents = exports.ValidatorSlashEvent = exports.ValidatorOutstandingRewards = exports.ValidatorAccumulatedCommission = exports.ValidatorCurrentRewards = exports.ValidatorHistoricalRewards = exports.Params = exports.protobufPackage = void 0;
//@ts-nocheck
const coin_1 = require("../../base/v1beta1/coin");
const binary_1 = require("../../../binary");
const math_1 = require("@cosmjs/math");
const helpers_1 = require("../../../helpers");
const registry_1 = require("../../../registry");
exports.protobufPackage = "cosmos.distribution.v1beta1";
function createBaseParams() {
    return {
        community_tax: "",
        base_proposer_reward: "",
        bonus_proposer_reward: "",
        withdraw_addr_enabled: false
    };
}
exports.Params = {
    typeUrl: "/cosmos.distribution.v1beta1.Params",
    aminoType: "cosmos-sdk/x/distribution/Params",
    is(o) {
        return o && (o.$typeUrl === exports.Params.typeUrl || typeof o.community_tax === "string" && typeof o.base_proposer_reward === "string" && typeof o.bonus_proposer_reward === "string" && typeof o.withdraw_addr_enabled === "boolean");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.Params.typeUrl || typeof o.community_tax === "string" && typeof o.base_proposer_reward === "string" && typeof o.bonus_proposer_reward === "string" && typeof o.withdraw_addr_enabled === "boolean");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Params.typeUrl || typeof o.community_tax === "string" && typeof o.base_proposer_reward === "string" && typeof o.bonus_proposer_reward === "string" && typeof o.withdraw_addr_enabled === "boolean");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.community_tax !== "") {
            writer.uint32(10).string(math_1.Decimal.fromUserInput(message.community_tax, 18).atomics);
        }
        if (message.base_proposer_reward !== "") {
            writer.uint32(18).string(math_1.Decimal.fromUserInput(message.base_proposer_reward, 18).atomics);
        }
        if (message.bonus_proposer_reward !== "") {
            writer.uint32(26).string(math_1.Decimal.fromUserInput(message.bonus_proposer_reward, 18).atomics);
        }
        if (message.withdraw_addr_enabled === true) {
            writer.uint32(32).bool(message.withdraw_addr_enabled);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.community_tax = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 2:
                    message.base_proposer_reward = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 3:
                    message.bonus_proposer_reward = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 4:
                    message.withdraw_addr_enabled = reader.bool();
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
            community_tax: (0, helpers_1.isSet)(object.community_tax) ? String(object.community_tax) : "",
            base_proposer_reward: (0, helpers_1.isSet)(object.base_proposer_reward) ? String(object.base_proposer_reward) : "",
            bonus_proposer_reward: (0, helpers_1.isSet)(object.bonus_proposer_reward) ? String(object.bonus_proposer_reward) : "",
            withdraw_addr_enabled: (0, helpers_1.isSet)(object.withdraw_addr_enabled) ? Boolean(object.withdraw_addr_enabled) : false
        };
    },
    toJSON(message) {
        const obj = {};
        message.community_tax !== undefined && (obj.community_tax = message.community_tax);
        message.base_proposer_reward !== undefined && (obj.base_proposer_reward = message.base_proposer_reward);
        message.bonus_proposer_reward !== undefined && (obj.bonus_proposer_reward = message.bonus_proposer_reward);
        message.withdraw_addr_enabled !== undefined && (obj.withdraw_addr_enabled = message.withdraw_addr_enabled);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.community_tax = object.community_tax ?? "";
        message.base_proposer_reward = object.base_proposer_reward ?? "";
        message.bonus_proposer_reward = object.bonus_proposer_reward ?? "";
        message.withdraw_addr_enabled = object.withdraw_addr_enabled ?? false;
        return message;
    },
    fromAmino(object) {
        const message = createBaseParams();
        if (object.community_tax !== undefined && object.community_tax !== null) {
            message.community_tax = object.community_tax;
        }
        if (object.base_proposer_reward !== undefined && object.base_proposer_reward !== null) {
            message.base_proposer_reward = object.base_proposer_reward;
        }
        if (object.bonus_proposer_reward !== undefined && object.bonus_proposer_reward !== null) {
            message.bonus_proposer_reward = object.bonus_proposer_reward;
        }
        if (object.withdraw_addr_enabled !== undefined && object.withdraw_addr_enabled !== null) {
            message.withdraw_addr_enabled = object.withdraw_addr_enabled;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.community_tax = message.community_tax ?? "";
        obj.base_proposer_reward = message.base_proposer_reward ?? "";
        obj.bonus_proposer_reward = message.bonus_proposer_reward ?? "";
        obj.withdraw_addr_enabled = message.withdraw_addr_enabled;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Params.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/x/distribution/Params",
            value: exports.Params.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Params.decode(message.value);
    },
    toProto(message) {
        return exports.Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.Params",
            value: exports.Params.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Params.typeUrl, exports.Params);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.Params.aminoType, exports.Params.typeUrl);
function createBaseValidatorHistoricalRewards() {
    return {
        cumulative_reward_ratio: [],
        reference_count: 0
    };
}
exports.ValidatorHistoricalRewards = {
    typeUrl: "/cosmos.distribution.v1beta1.ValidatorHistoricalRewards",
    aminoType: "cosmos-sdk/ValidatorHistoricalRewards",
    is(o) {
        return o && (o.$typeUrl === exports.ValidatorHistoricalRewards.typeUrl || Array.isArray(o.cumulative_reward_ratio) && (!o.cumulative_reward_ratio.length || coin_1.DecCoin.is(o.cumulative_reward_ratio[0])) && typeof o.reference_count === "number");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.ValidatorHistoricalRewards.typeUrl || Array.isArray(o.cumulative_reward_ratio) && (!o.cumulative_reward_ratio.length || coin_1.DecCoin.isSDK(o.cumulative_reward_ratio[0])) && typeof o.reference_count === "number");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.ValidatorHistoricalRewards.typeUrl || Array.isArray(o.cumulative_reward_ratio) && (!o.cumulative_reward_ratio.length || coin_1.DecCoin.isAmino(o.cumulative_reward_ratio[0])) && typeof o.reference_count === "number");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.cumulative_reward_ratio) {
            coin_1.DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.reference_count !== 0) {
            writer.uint32(16).uint32(message.reference_count);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorHistoricalRewards();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cumulative_reward_ratio.push(coin_1.DecCoin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.reference_count = reader.uint32();
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
            cumulative_reward_ratio: Array.isArray(object?.cumulative_reward_ratio) ? object.cumulative_reward_ratio.map((e) => coin_1.DecCoin.fromJSON(e)) : [],
            reference_count: (0, helpers_1.isSet)(object.reference_count) ? Number(object.reference_count) : 0
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.cumulative_reward_ratio) {
            obj.cumulative_reward_ratio = message.cumulative_reward_ratio.map(e => e ? coin_1.DecCoin.toJSON(e) : undefined);
        }
        else {
            obj.cumulative_reward_ratio = [];
        }
        message.reference_count !== undefined && (obj.reference_count = Math.round(message.reference_count));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseValidatorHistoricalRewards();
        message.cumulative_reward_ratio = object.cumulative_reward_ratio?.map(e => coin_1.DecCoin.fromPartial(e)) || [];
        message.reference_count = object.reference_count ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseValidatorHistoricalRewards();
        message.cumulative_reward_ratio = object.cumulative_reward_ratio?.map(e => coin_1.DecCoin.fromAmino(e)) || [];
        if (object.reference_count !== undefined && object.reference_count !== null) {
            message.reference_count = object.reference_count;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.cumulative_reward_ratio) {
            obj.cumulative_reward_ratio = message.cumulative_reward_ratio.map(e => e ? coin_1.DecCoin.toAmino(e) : undefined);
        }
        else {
            obj.cumulative_reward_ratio = [];
        }
        obj.reference_count = message.reference_count;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ValidatorHistoricalRewards.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ValidatorHistoricalRewards",
            value: exports.ValidatorHistoricalRewards.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ValidatorHistoricalRewards.decode(message.value);
    },
    toProto(message) {
        return exports.ValidatorHistoricalRewards.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.ValidatorHistoricalRewards",
            value: exports.ValidatorHistoricalRewards.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.ValidatorHistoricalRewards.typeUrl, exports.ValidatorHistoricalRewards);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.ValidatorHistoricalRewards.aminoType, exports.ValidatorHistoricalRewards.typeUrl);
function createBaseValidatorCurrentRewards() {
    return {
        rewards: [],
        period: BigInt(0)
    };
}
exports.ValidatorCurrentRewards = {
    typeUrl: "/cosmos.distribution.v1beta1.ValidatorCurrentRewards",
    aminoType: "cosmos-sdk/ValidatorCurrentRewards",
    is(o) {
        return o && (o.$typeUrl === exports.ValidatorCurrentRewards.typeUrl || Array.isArray(o.rewards) && (!o.rewards.length || coin_1.DecCoin.is(o.rewards[0])) && typeof o.period === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.ValidatorCurrentRewards.typeUrl || Array.isArray(o.rewards) && (!o.rewards.length || coin_1.DecCoin.isSDK(o.rewards[0])) && typeof o.period === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.ValidatorCurrentRewards.typeUrl || Array.isArray(o.rewards) && (!o.rewards.length || coin_1.DecCoin.isAmino(o.rewards[0])) && typeof o.period === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.rewards) {
            coin_1.DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.period !== BigInt(0)) {
            writer.uint32(16).uint64(message.period);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorCurrentRewards();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rewards.push(coin_1.DecCoin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.period = reader.uint64();
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
            rewards: Array.isArray(object?.rewards) ? object.rewards.map((e) => coin_1.DecCoin.fromJSON(e)) : [],
            period: (0, helpers_1.isSet)(object.period) ? BigInt(object.period.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.rewards) {
            obj.rewards = message.rewards.map(e => e ? coin_1.DecCoin.toJSON(e) : undefined);
        }
        else {
            obj.rewards = [];
        }
        message.period !== undefined && (obj.period = (message.period || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseValidatorCurrentRewards();
        message.rewards = object.rewards?.map(e => coin_1.DecCoin.fromPartial(e)) || [];
        message.period = object.period !== undefined && object.period !== null ? BigInt(object.period.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseValidatorCurrentRewards();
        message.rewards = object.rewards?.map(e => coin_1.DecCoin.fromAmino(e)) || [];
        if (object.period !== undefined && object.period !== null) {
            message.period = BigInt(object.period);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.rewards) {
            obj.rewards = message.rewards.map(e => e ? coin_1.DecCoin.toAmino(e) : undefined);
        }
        else {
            obj.rewards = [];
        }
        obj.period = message.period ? message.period.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ValidatorCurrentRewards.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ValidatorCurrentRewards",
            value: exports.ValidatorCurrentRewards.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ValidatorCurrentRewards.decode(message.value);
    },
    toProto(message) {
        return exports.ValidatorCurrentRewards.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.ValidatorCurrentRewards",
            value: exports.ValidatorCurrentRewards.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.ValidatorCurrentRewards.typeUrl, exports.ValidatorCurrentRewards);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.ValidatorCurrentRewards.aminoType, exports.ValidatorCurrentRewards.typeUrl);
function createBaseValidatorAccumulatedCommission() {
    return {
        commission: []
    };
}
exports.ValidatorAccumulatedCommission = {
    typeUrl: "/cosmos.distribution.v1beta1.ValidatorAccumulatedCommission",
    aminoType: "cosmos-sdk/ValidatorAccumulatedCommission",
    is(o) {
        return o && (o.$typeUrl === exports.ValidatorAccumulatedCommission.typeUrl || Array.isArray(o.commission) && (!o.commission.length || coin_1.DecCoin.is(o.commission[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.ValidatorAccumulatedCommission.typeUrl || Array.isArray(o.commission) && (!o.commission.length || coin_1.DecCoin.isSDK(o.commission[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.ValidatorAccumulatedCommission.typeUrl || Array.isArray(o.commission) && (!o.commission.length || coin_1.DecCoin.isAmino(o.commission[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.commission) {
            coin_1.DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorAccumulatedCommission();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.commission.push(coin_1.DecCoin.decode(reader, reader.uint32()));
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
            commission: Array.isArray(object?.commission) ? object.commission.map((e) => coin_1.DecCoin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.commission) {
            obj.commission = message.commission.map(e => e ? coin_1.DecCoin.toJSON(e) : undefined);
        }
        else {
            obj.commission = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseValidatorAccumulatedCommission();
        message.commission = object.commission?.map(e => coin_1.DecCoin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseValidatorAccumulatedCommission();
        message.commission = object.commission?.map(e => coin_1.DecCoin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.commission) {
            obj.commission = message.commission.map(e => e ? coin_1.DecCoin.toAmino(e) : undefined);
        }
        else {
            obj.commission = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ValidatorAccumulatedCommission.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ValidatorAccumulatedCommission",
            value: exports.ValidatorAccumulatedCommission.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ValidatorAccumulatedCommission.decode(message.value);
    },
    toProto(message) {
        return exports.ValidatorAccumulatedCommission.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.ValidatorAccumulatedCommission",
            value: exports.ValidatorAccumulatedCommission.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.ValidatorAccumulatedCommission.typeUrl, exports.ValidatorAccumulatedCommission);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.ValidatorAccumulatedCommission.aminoType, exports.ValidatorAccumulatedCommission.typeUrl);
function createBaseValidatorOutstandingRewards() {
    return {
        rewards: []
    };
}
exports.ValidatorOutstandingRewards = {
    typeUrl: "/cosmos.distribution.v1beta1.ValidatorOutstandingRewards",
    aminoType: "cosmos-sdk/ValidatorOutstandingRewards",
    is(o) {
        return o && (o.$typeUrl === exports.ValidatorOutstandingRewards.typeUrl || Array.isArray(o.rewards) && (!o.rewards.length || coin_1.DecCoin.is(o.rewards[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.ValidatorOutstandingRewards.typeUrl || Array.isArray(o.rewards) && (!o.rewards.length || coin_1.DecCoin.isSDK(o.rewards[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.ValidatorOutstandingRewards.typeUrl || Array.isArray(o.rewards) && (!o.rewards.length || coin_1.DecCoin.isAmino(o.rewards[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.rewards) {
            coin_1.DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorOutstandingRewards();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rewards.push(coin_1.DecCoin.decode(reader, reader.uint32()));
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
            rewards: Array.isArray(object?.rewards) ? object.rewards.map((e) => coin_1.DecCoin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.rewards) {
            obj.rewards = message.rewards.map(e => e ? coin_1.DecCoin.toJSON(e) : undefined);
        }
        else {
            obj.rewards = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseValidatorOutstandingRewards();
        message.rewards = object.rewards?.map(e => coin_1.DecCoin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseValidatorOutstandingRewards();
        message.rewards = object.rewards?.map(e => coin_1.DecCoin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.rewards) {
            obj.rewards = message.rewards.map(e => e ? coin_1.DecCoin.toAmino(e) : undefined);
        }
        else {
            obj.rewards = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ValidatorOutstandingRewards.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ValidatorOutstandingRewards",
            value: exports.ValidatorOutstandingRewards.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ValidatorOutstandingRewards.decode(message.value);
    },
    toProto(message) {
        return exports.ValidatorOutstandingRewards.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.ValidatorOutstandingRewards",
            value: exports.ValidatorOutstandingRewards.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.ValidatorOutstandingRewards.typeUrl, exports.ValidatorOutstandingRewards);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.ValidatorOutstandingRewards.aminoType, exports.ValidatorOutstandingRewards.typeUrl);
function createBaseValidatorSlashEvent() {
    return {
        validator_period: BigInt(0),
        fraction: ""
    };
}
exports.ValidatorSlashEvent = {
    typeUrl: "/cosmos.distribution.v1beta1.ValidatorSlashEvent",
    aminoType: "cosmos-sdk/ValidatorSlashEvent",
    is(o) {
        return o && (o.$typeUrl === exports.ValidatorSlashEvent.typeUrl || typeof o.validator_period === "bigint" && typeof o.fraction === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.ValidatorSlashEvent.typeUrl || typeof o.validator_period === "bigint" && typeof o.fraction === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.ValidatorSlashEvent.typeUrl || typeof o.validator_period === "bigint" && typeof o.fraction === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.validator_period !== BigInt(0)) {
            writer.uint32(8).uint64(message.validator_period);
        }
        if (message.fraction !== "") {
            writer.uint32(18).string(math_1.Decimal.fromUserInput(message.fraction, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorSlashEvent();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator_period = reader.uint64();
                    break;
                case 2:
                    message.fraction = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
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
            validator_period: (0, helpers_1.isSet)(object.validator_period) ? BigInt(object.validator_period.toString()) : BigInt(0),
            fraction: (0, helpers_1.isSet)(object.fraction) ? String(object.fraction) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.validator_period !== undefined && (obj.validator_period = (message.validator_period || BigInt(0)).toString());
        message.fraction !== undefined && (obj.fraction = message.fraction);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseValidatorSlashEvent();
        message.validator_period = object.validator_period !== undefined && object.validator_period !== null ? BigInt(object.validator_period.toString()) : BigInt(0);
        message.fraction = object.fraction ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseValidatorSlashEvent();
        if (object.validator_period !== undefined && object.validator_period !== null) {
            message.validator_period = BigInt(object.validator_period);
        }
        if (object.fraction !== undefined && object.fraction !== null) {
            message.fraction = object.fraction;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.validator_period = message.validator_period ? message.validator_period.toString() : undefined;
        obj.fraction = message.fraction;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ValidatorSlashEvent.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ValidatorSlashEvent",
            value: exports.ValidatorSlashEvent.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ValidatorSlashEvent.decode(message.value);
    },
    toProto(message) {
        return exports.ValidatorSlashEvent.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.ValidatorSlashEvent",
            value: exports.ValidatorSlashEvent.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.ValidatorSlashEvent.typeUrl, exports.ValidatorSlashEvent);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.ValidatorSlashEvent.aminoType, exports.ValidatorSlashEvent.typeUrl);
function createBaseValidatorSlashEvents() {
    return {
        validator_slash_events: []
    };
}
exports.ValidatorSlashEvents = {
    typeUrl: "/cosmos.distribution.v1beta1.ValidatorSlashEvents",
    aminoType: "cosmos-sdk/ValidatorSlashEvents",
    is(o) {
        return o && (o.$typeUrl === exports.ValidatorSlashEvents.typeUrl || Array.isArray(o.validator_slash_events) && (!o.validator_slash_events.length || exports.ValidatorSlashEvent.is(o.validator_slash_events[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.ValidatorSlashEvents.typeUrl || Array.isArray(o.validator_slash_events) && (!o.validator_slash_events.length || exports.ValidatorSlashEvent.isSDK(o.validator_slash_events[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.ValidatorSlashEvents.typeUrl || Array.isArray(o.validator_slash_events) && (!o.validator_slash_events.length || exports.ValidatorSlashEvent.isAmino(o.validator_slash_events[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.validator_slash_events) {
            exports.ValidatorSlashEvent.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorSlashEvents();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator_slash_events.push(exports.ValidatorSlashEvent.decode(reader, reader.uint32()));
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
            validator_slash_events: Array.isArray(object?.validator_slash_events) ? object.validator_slash_events.map((e) => exports.ValidatorSlashEvent.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.validator_slash_events) {
            obj.validator_slash_events = message.validator_slash_events.map(e => e ? exports.ValidatorSlashEvent.toJSON(e) : undefined);
        }
        else {
            obj.validator_slash_events = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseValidatorSlashEvents();
        message.validator_slash_events = object.validator_slash_events?.map(e => exports.ValidatorSlashEvent.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseValidatorSlashEvents();
        message.validator_slash_events = object.validator_slash_events?.map(e => exports.ValidatorSlashEvent.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.validator_slash_events) {
            obj.validator_slash_events = message.validator_slash_events.map(e => e ? exports.ValidatorSlashEvent.toAmino(e) : undefined);
        }
        else {
            obj.validator_slash_events = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ValidatorSlashEvents.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ValidatorSlashEvents",
            value: exports.ValidatorSlashEvents.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ValidatorSlashEvents.decode(message.value);
    },
    toProto(message) {
        return exports.ValidatorSlashEvents.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.ValidatorSlashEvents",
            value: exports.ValidatorSlashEvents.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.ValidatorSlashEvents.typeUrl, exports.ValidatorSlashEvents);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.ValidatorSlashEvents.aminoType, exports.ValidatorSlashEvents.typeUrl);
function createBaseFeePool() {
    return {
        community_pool: []
    };
}
exports.FeePool = {
    typeUrl: "/cosmos.distribution.v1beta1.FeePool",
    aminoType: "cosmos-sdk/FeePool",
    is(o) {
        return o && (o.$typeUrl === exports.FeePool.typeUrl || Array.isArray(o.community_pool) && (!o.community_pool.length || coin_1.DecCoin.is(o.community_pool[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.FeePool.typeUrl || Array.isArray(o.community_pool) && (!o.community_pool.length || coin_1.DecCoin.isSDK(o.community_pool[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.FeePool.typeUrl || Array.isArray(o.community_pool) && (!o.community_pool.length || coin_1.DecCoin.isAmino(o.community_pool[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.community_pool) {
            coin_1.DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFeePool();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.community_pool.push(coin_1.DecCoin.decode(reader, reader.uint32()));
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
            community_pool: Array.isArray(object?.community_pool) ? object.community_pool.map((e) => coin_1.DecCoin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.community_pool) {
            obj.community_pool = message.community_pool.map(e => e ? coin_1.DecCoin.toJSON(e) : undefined);
        }
        else {
            obj.community_pool = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseFeePool();
        message.community_pool = object.community_pool?.map(e => coin_1.DecCoin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseFeePool();
        message.community_pool = object.community_pool?.map(e => coin_1.DecCoin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.community_pool) {
            obj.community_pool = message.community_pool.map(e => e ? coin_1.DecCoin.toAmino(e) : undefined);
        }
        else {
            obj.community_pool = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.FeePool.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/FeePool",
            value: exports.FeePool.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.FeePool.decode(message.value);
    },
    toProto(message) {
        return exports.FeePool.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.FeePool",
            value: exports.FeePool.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.FeePool.typeUrl, exports.FeePool);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.FeePool.aminoType, exports.FeePool.typeUrl);
function createBaseCommunityPoolSpendProposal() {
    return {
        $typeUrl: "/cosmos.distribution.v1beta1.CommunityPoolSpendProposal",
        title: "",
        description: "",
        recipient: "",
        amount: []
    };
}
exports.CommunityPoolSpendProposal = {
    typeUrl: "/cosmos.distribution.v1beta1.CommunityPoolSpendProposal",
    aminoType: "cosmos-sdk/CommunityPoolSpendProposal",
    is(o) {
        return o && (o.$typeUrl === exports.CommunityPoolSpendProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.recipient === "string" && Array.isArray(o.amount) && (!o.amount.length || coin_1.Coin.is(o.amount[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.CommunityPoolSpendProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.recipient === "string" && Array.isArray(o.amount) && (!o.amount.length || coin_1.Coin.isSDK(o.amount[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.CommunityPoolSpendProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.recipient === "string" && Array.isArray(o.amount) && (!o.amount.length || coin_1.Coin.isAmino(o.amount[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.recipient !== "") {
            writer.uint32(26).string(message.recipient);
        }
        for (const v of message.amount) {
            coin_1.Coin.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCommunityPoolSpendProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.recipient = reader.string();
                    break;
                case 4:
                    message.amount.push(coin_1.Coin.decode(reader, reader.uint32()));
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
            title: (0, helpers_1.isSet)(object.title) ? String(object.title) : "",
            description: (0, helpers_1.isSet)(object.description) ? String(object.description) : "",
            recipient: (0, helpers_1.isSet)(object.recipient) ? String(object.recipient) : "",
            amount: Array.isArray(object?.amount) ? object.amount.map((e) => coin_1.Coin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.recipient !== undefined && (obj.recipient = message.recipient);
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.amount = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseCommunityPoolSpendProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.recipient = object.recipient ?? "";
        message.amount = object.amount?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseCommunityPoolSpendProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        if (object.recipient !== undefined && object.recipient !== null) {
            message.recipient = object.recipient;
        }
        message.amount = object.amount?.map(e => coin_1.Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        obj.recipient = message.recipient;
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.amount = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.CommunityPoolSpendProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/CommunityPoolSpendProposal",
            value: exports.CommunityPoolSpendProposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.CommunityPoolSpendProposal.decode(message.value);
    },
    toProto(message) {
        return exports.CommunityPoolSpendProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.CommunityPoolSpendProposal",
            value: exports.CommunityPoolSpendProposal.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.CommunityPoolSpendProposal.typeUrl, exports.CommunityPoolSpendProposal);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.CommunityPoolSpendProposal.aminoType, exports.CommunityPoolSpendProposal.typeUrl);
function createBaseDelegatorStartingInfo() {
    return {
        previous_period: BigInt(0),
        stake: "",
        height: BigInt(0)
    };
}
exports.DelegatorStartingInfo = {
    typeUrl: "/cosmos.distribution.v1beta1.DelegatorStartingInfo",
    aminoType: "cosmos-sdk/DelegatorStartingInfo",
    is(o) {
        return o && (o.$typeUrl === exports.DelegatorStartingInfo.typeUrl || typeof o.previous_period === "bigint" && typeof o.stake === "string" && typeof o.height === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.DelegatorStartingInfo.typeUrl || typeof o.previous_period === "bigint" && typeof o.stake === "string" && typeof o.height === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.DelegatorStartingInfo.typeUrl || typeof o.previous_period === "bigint" && typeof o.stake === "string" && typeof o.height === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.previous_period !== BigInt(0)) {
            writer.uint32(8).uint64(message.previous_period);
        }
        if (message.stake !== "") {
            writer.uint32(18).string(math_1.Decimal.fromUserInput(message.stake, 18).atomics);
        }
        if (message.height !== BigInt(0)) {
            writer.uint32(24).uint64(message.height);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDelegatorStartingInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.previous_period = reader.uint64();
                    break;
                case 2:
                    message.stake = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 3:
                    message.height = reader.uint64();
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
            previous_period: (0, helpers_1.isSet)(object.previous_period) ? BigInt(object.previous_period.toString()) : BigInt(0),
            stake: (0, helpers_1.isSet)(object.stake) ? String(object.stake) : "",
            height: (0, helpers_1.isSet)(object.height) ? BigInt(object.height.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.previous_period !== undefined && (obj.previous_period = (message.previous_period || BigInt(0)).toString());
        message.stake !== undefined && (obj.stake = message.stake);
        message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDelegatorStartingInfo();
        message.previous_period = object.previous_period !== undefined && object.previous_period !== null ? BigInt(object.previous_period.toString()) : BigInt(0);
        message.stake = object.stake ?? "";
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseDelegatorStartingInfo();
        if (object.previous_period !== undefined && object.previous_period !== null) {
            message.previous_period = BigInt(object.previous_period);
        }
        if (object.stake !== undefined && object.stake !== null) {
            message.stake = object.stake;
        }
        if (object.height !== undefined && object.height !== null) {
            message.height = BigInt(object.height);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.previous_period = message.previous_period ? message.previous_period.toString() : undefined;
        obj.stake = message.stake ?? "";
        obj.height = message.height ? message.height.toString() : "0";
        return obj;
    },
    fromAminoMsg(object) {
        return exports.DelegatorStartingInfo.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/DelegatorStartingInfo",
            value: exports.DelegatorStartingInfo.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.DelegatorStartingInfo.decode(message.value);
    },
    toProto(message) {
        return exports.DelegatorStartingInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.DelegatorStartingInfo",
            value: exports.DelegatorStartingInfo.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.DelegatorStartingInfo.typeUrl, exports.DelegatorStartingInfo);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.DelegatorStartingInfo.aminoType, exports.DelegatorStartingInfo.typeUrl);
function createBaseDelegationDelegatorReward() {
    return {
        validator_address: "",
        reward: []
    };
}
exports.DelegationDelegatorReward = {
    typeUrl: "/cosmos.distribution.v1beta1.DelegationDelegatorReward",
    aminoType: "cosmos-sdk/DelegationDelegatorReward",
    is(o) {
        return o && (o.$typeUrl === exports.DelegationDelegatorReward.typeUrl || typeof o.validator_address === "string" && Array.isArray(o.reward) && (!o.reward.length || coin_1.DecCoin.is(o.reward[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.DelegationDelegatorReward.typeUrl || typeof o.validator_address === "string" && Array.isArray(o.reward) && (!o.reward.length || coin_1.DecCoin.isSDK(o.reward[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.DelegationDelegatorReward.typeUrl || typeof o.validator_address === "string" && Array.isArray(o.reward) && (!o.reward.length || coin_1.DecCoin.isAmino(o.reward[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.validator_address !== "") {
            writer.uint32(10).string(message.validator_address);
        }
        for (const v of message.reward) {
            coin_1.DecCoin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDelegationDelegatorReward();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator_address = reader.string();
                    break;
                case 2:
                    message.reward.push(coin_1.DecCoin.decode(reader, reader.uint32()));
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
            validator_address: (0, helpers_1.isSet)(object.validator_address) ? String(object.validator_address) : "",
            reward: Array.isArray(object?.reward) ? object.reward.map((e) => coin_1.DecCoin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.validator_address !== undefined && (obj.validator_address = message.validator_address);
        if (message.reward) {
            obj.reward = message.reward.map(e => e ? coin_1.DecCoin.toJSON(e) : undefined);
        }
        else {
            obj.reward = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDelegationDelegatorReward();
        message.validator_address = object.validator_address ?? "";
        message.reward = object.reward?.map(e => coin_1.DecCoin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseDelegationDelegatorReward();
        if (object.validator_address !== undefined && object.validator_address !== null) {
            message.validator_address = object.validator_address;
        }
        message.reward = object.reward?.map(e => coin_1.DecCoin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.validator_address = message.validator_address;
        if (message.reward) {
            obj.reward = message.reward.map(e => e ? coin_1.DecCoin.toAmino(e) : undefined);
        }
        else {
            obj.reward = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.DelegationDelegatorReward.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/DelegationDelegatorReward",
            value: exports.DelegationDelegatorReward.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.DelegationDelegatorReward.decode(message.value);
    },
    toProto(message) {
        return exports.DelegationDelegatorReward.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.DelegationDelegatorReward",
            value: exports.DelegationDelegatorReward.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.DelegationDelegatorReward.typeUrl, exports.DelegationDelegatorReward);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.DelegationDelegatorReward.aminoType, exports.DelegationDelegatorReward.typeUrl);
function createBaseCommunityPoolSpendProposalWithDeposit() {
    return {
        $typeUrl: "/cosmos.distribution.v1beta1.CommunityPoolSpendProposalWithDeposit",
        title: "",
        description: "",
        recipient: "",
        amount: "",
        deposit: ""
    };
}
exports.CommunityPoolSpendProposalWithDeposit = {
    typeUrl: "/cosmos.distribution.v1beta1.CommunityPoolSpendProposalWithDeposit",
    aminoType: "cosmos-sdk/CommunityPoolSpendProposalWithDeposit",
    is(o) {
        return o && (o.$typeUrl === exports.CommunityPoolSpendProposalWithDeposit.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.recipient === "string" && typeof o.amount === "string" && typeof o.deposit === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.CommunityPoolSpendProposalWithDeposit.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.recipient === "string" && typeof o.amount === "string" && typeof o.deposit === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.CommunityPoolSpendProposalWithDeposit.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.recipient === "string" && typeof o.amount === "string" && typeof o.deposit === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.recipient !== "") {
            writer.uint32(26).string(message.recipient);
        }
        if (message.amount !== "") {
            writer.uint32(34).string(message.amount);
        }
        if (message.deposit !== "") {
            writer.uint32(42).string(message.deposit);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCommunityPoolSpendProposalWithDeposit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.recipient = reader.string();
                    break;
                case 4:
                    message.amount = reader.string();
                    break;
                case 5:
                    message.deposit = reader.string();
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
            title: (0, helpers_1.isSet)(object.title) ? String(object.title) : "",
            description: (0, helpers_1.isSet)(object.description) ? String(object.description) : "",
            recipient: (0, helpers_1.isSet)(object.recipient) ? String(object.recipient) : "",
            amount: (0, helpers_1.isSet)(object.amount) ? String(object.amount) : "",
            deposit: (0, helpers_1.isSet)(object.deposit) ? String(object.deposit) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.recipient !== undefined && (obj.recipient = message.recipient);
        message.amount !== undefined && (obj.amount = message.amount);
        message.deposit !== undefined && (obj.deposit = message.deposit);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseCommunityPoolSpendProposalWithDeposit();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.recipient = object.recipient ?? "";
        message.amount = object.amount ?? "";
        message.deposit = object.deposit ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseCommunityPoolSpendProposalWithDeposit();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        if (object.recipient !== undefined && object.recipient !== null) {
            message.recipient = object.recipient;
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount;
        }
        if (object.deposit !== undefined && object.deposit !== null) {
            message.deposit = object.deposit;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        obj.recipient = message.recipient;
        obj.amount = message.amount;
        obj.deposit = message.deposit;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.CommunityPoolSpendProposalWithDeposit.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/CommunityPoolSpendProposalWithDeposit",
            value: exports.CommunityPoolSpendProposalWithDeposit.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.CommunityPoolSpendProposalWithDeposit.decode(message.value);
    },
    toProto(message) {
        return exports.CommunityPoolSpendProposalWithDeposit.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.CommunityPoolSpendProposalWithDeposit",
            value: exports.CommunityPoolSpendProposalWithDeposit.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.CommunityPoolSpendProposalWithDeposit.typeUrl, exports.CommunityPoolSpendProposalWithDeposit);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.CommunityPoolSpendProposalWithDeposit.aminoType, exports.CommunityPoolSpendProposalWithDeposit.typeUrl);
//# sourceMappingURL=distribution.js.map
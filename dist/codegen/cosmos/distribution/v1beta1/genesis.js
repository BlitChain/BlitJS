"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = exports.ValidatorSlashEventRecord = exports.DelegatorStartingInfoRecord = exports.ValidatorCurrentRewardsRecord = exports.ValidatorHistoricalRewardsRecord = exports.ValidatorAccumulatedCommissionRecord = exports.ValidatorOutstandingRewardsRecord = exports.DelegatorWithdrawInfo = exports.protobufPackage = void 0;
//@ts-nocheck
const coin_1 = require("../../base/v1beta1/coin");
const distribution_1 = require("./distribution");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
const registry_1 = require("../../../registry");
exports.protobufPackage = "cosmos.distribution.v1beta1";
function createBaseDelegatorWithdrawInfo() {
    return {
        delegator_address: "",
        withdraw_address: ""
    };
}
exports.DelegatorWithdrawInfo = {
    typeUrl: "/cosmos.distribution.v1beta1.DelegatorWithdrawInfo",
    aminoType: "cosmos-sdk/DelegatorWithdrawInfo",
    is(o) {
        return o && (o.$typeUrl === exports.DelegatorWithdrawInfo.typeUrl || typeof o.delegator_address === "string" && typeof o.withdraw_address === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.DelegatorWithdrawInfo.typeUrl || typeof o.delegator_address === "string" && typeof o.withdraw_address === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.DelegatorWithdrawInfo.typeUrl || typeof o.delegator_address === "string" && typeof o.withdraw_address === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.delegator_address !== "") {
            writer.uint32(10).string(message.delegator_address);
        }
        if (message.withdraw_address !== "") {
            writer.uint32(18).string(message.withdraw_address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDelegatorWithdrawInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegator_address = reader.string();
                    break;
                case 2:
                    message.withdraw_address = reader.string();
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
            delegator_address: (0, helpers_1.isSet)(object.delegator_address) ? String(object.delegator_address) : "",
            withdraw_address: (0, helpers_1.isSet)(object.withdraw_address) ? String(object.withdraw_address) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegator_address !== undefined && (obj.delegator_address = message.delegator_address);
        message.withdraw_address !== undefined && (obj.withdraw_address = message.withdraw_address);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDelegatorWithdrawInfo();
        message.delegator_address = object.delegator_address ?? "";
        message.withdraw_address = object.withdraw_address ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseDelegatorWithdrawInfo();
        if (object.delegator_address !== undefined && object.delegator_address !== null) {
            message.delegator_address = object.delegator_address;
        }
        if (object.withdraw_address !== undefined && object.withdraw_address !== null) {
            message.withdraw_address = object.withdraw_address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_address = message.delegator_address;
        obj.withdraw_address = message.withdraw_address;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.DelegatorWithdrawInfo.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/DelegatorWithdrawInfo",
            value: exports.DelegatorWithdrawInfo.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.DelegatorWithdrawInfo.decode(message.value);
    },
    toProto(message) {
        return exports.DelegatorWithdrawInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.DelegatorWithdrawInfo",
            value: exports.DelegatorWithdrawInfo.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.DelegatorWithdrawInfo.typeUrl, exports.DelegatorWithdrawInfo);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.DelegatorWithdrawInfo.aminoType, exports.DelegatorWithdrawInfo.typeUrl);
function createBaseValidatorOutstandingRewardsRecord() {
    return {
        validator_address: "",
        outstanding_rewards: []
    };
}
exports.ValidatorOutstandingRewardsRecord = {
    typeUrl: "/cosmos.distribution.v1beta1.ValidatorOutstandingRewardsRecord",
    aminoType: "cosmos-sdk/ValidatorOutstandingRewardsRecord",
    is(o) {
        return o && (o.$typeUrl === exports.ValidatorOutstandingRewardsRecord.typeUrl || typeof o.validator_address === "string" && Array.isArray(o.outstanding_rewards) && (!o.outstanding_rewards.length || coin_1.DecCoin.is(o.outstanding_rewards[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.ValidatorOutstandingRewardsRecord.typeUrl || typeof o.validator_address === "string" && Array.isArray(o.outstanding_rewards) && (!o.outstanding_rewards.length || coin_1.DecCoin.isSDK(o.outstanding_rewards[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.ValidatorOutstandingRewardsRecord.typeUrl || typeof o.validator_address === "string" && Array.isArray(o.outstanding_rewards) && (!o.outstanding_rewards.length || coin_1.DecCoin.isAmino(o.outstanding_rewards[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.validator_address !== "") {
            writer.uint32(10).string(message.validator_address);
        }
        for (const v of message.outstanding_rewards) {
            coin_1.DecCoin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorOutstandingRewardsRecord();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator_address = reader.string();
                    break;
                case 2:
                    message.outstanding_rewards.push(coin_1.DecCoin.decode(reader, reader.uint32()));
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
            outstanding_rewards: Array.isArray(object?.outstanding_rewards) ? object.outstanding_rewards.map((e) => coin_1.DecCoin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.validator_address !== undefined && (obj.validator_address = message.validator_address);
        if (message.outstanding_rewards) {
            obj.outstanding_rewards = message.outstanding_rewards.map(e => e ? coin_1.DecCoin.toJSON(e) : undefined);
        }
        else {
            obj.outstanding_rewards = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseValidatorOutstandingRewardsRecord();
        message.validator_address = object.validator_address ?? "";
        message.outstanding_rewards = object.outstanding_rewards?.map(e => coin_1.DecCoin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseValidatorOutstandingRewardsRecord();
        if (object.validator_address !== undefined && object.validator_address !== null) {
            message.validator_address = object.validator_address;
        }
        message.outstanding_rewards = object.outstanding_rewards?.map(e => coin_1.DecCoin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.validator_address = message.validator_address;
        if (message.outstanding_rewards) {
            obj.outstanding_rewards = message.outstanding_rewards.map(e => e ? coin_1.DecCoin.toAmino(e) : undefined);
        }
        else {
            obj.outstanding_rewards = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ValidatorOutstandingRewardsRecord.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ValidatorOutstandingRewardsRecord",
            value: exports.ValidatorOutstandingRewardsRecord.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ValidatorOutstandingRewardsRecord.decode(message.value);
    },
    toProto(message) {
        return exports.ValidatorOutstandingRewardsRecord.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.ValidatorOutstandingRewardsRecord",
            value: exports.ValidatorOutstandingRewardsRecord.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.ValidatorOutstandingRewardsRecord.typeUrl, exports.ValidatorOutstandingRewardsRecord);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.ValidatorOutstandingRewardsRecord.aminoType, exports.ValidatorOutstandingRewardsRecord.typeUrl);
function createBaseValidatorAccumulatedCommissionRecord() {
    return {
        validator_address: "",
        accumulated: distribution_1.ValidatorAccumulatedCommission.fromPartial({})
    };
}
exports.ValidatorAccumulatedCommissionRecord = {
    typeUrl: "/cosmos.distribution.v1beta1.ValidatorAccumulatedCommissionRecord",
    aminoType: "cosmos-sdk/ValidatorAccumulatedCommissionRecord",
    is(o) {
        return o && (o.$typeUrl === exports.ValidatorAccumulatedCommissionRecord.typeUrl || typeof o.validator_address === "string" && distribution_1.ValidatorAccumulatedCommission.is(o.accumulated));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.ValidatorAccumulatedCommissionRecord.typeUrl || typeof o.validator_address === "string" && distribution_1.ValidatorAccumulatedCommission.isSDK(o.accumulated));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.ValidatorAccumulatedCommissionRecord.typeUrl || typeof o.validator_address === "string" && distribution_1.ValidatorAccumulatedCommission.isAmino(o.accumulated));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.validator_address !== "") {
            writer.uint32(10).string(message.validator_address);
        }
        if (message.accumulated !== undefined) {
            distribution_1.ValidatorAccumulatedCommission.encode(message.accumulated, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorAccumulatedCommissionRecord();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator_address = reader.string();
                    break;
                case 2:
                    message.accumulated = distribution_1.ValidatorAccumulatedCommission.decode(reader, reader.uint32());
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
            accumulated: (0, helpers_1.isSet)(object.accumulated) ? distribution_1.ValidatorAccumulatedCommission.fromJSON(object.accumulated) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.validator_address !== undefined && (obj.validator_address = message.validator_address);
        message.accumulated !== undefined && (obj.accumulated = message.accumulated ? distribution_1.ValidatorAccumulatedCommission.toJSON(message.accumulated) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseValidatorAccumulatedCommissionRecord();
        message.validator_address = object.validator_address ?? "";
        message.accumulated = object.accumulated !== undefined && object.accumulated !== null ? distribution_1.ValidatorAccumulatedCommission.fromPartial(object.accumulated) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseValidatorAccumulatedCommissionRecord();
        if (object.validator_address !== undefined && object.validator_address !== null) {
            message.validator_address = object.validator_address;
        }
        if (object.accumulated !== undefined && object.accumulated !== null) {
            message.accumulated = distribution_1.ValidatorAccumulatedCommission.fromAmino(object.accumulated);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.validator_address = message.validator_address;
        obj.accumulated = message.accumulated ? distribution_1.ValidatorAccumulatedCommission.toAmino(message.accumulated) : distribution_1.ValidatorAccumulatedCommission.fromPartial({});
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ValidatorAccumulatedCommissionRecord.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ValidatorAccumulatedCommissionRecord",
            value: exports.ValidatorAccumulatedCommissionRecord.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ValidatorAccumulatedCommissionRecord.decode(message.value);
    },
    toProto(message) {
        return exports.ValidatorAccumulatedCommissionRecord.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.ValidatorAccumulatedCommissionRecord",
            value: exports.ValidatorAccumulatedCommissionRecord.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.ValidatorAccumulatedCommissionRecord.typeUrl, exports.ValidatorAccumulatedCommissionRecord);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.ValidatorAccumulatedCommissionRecord.aminoType, exports.ValidatorAccumulatedCommissionRecord.typeUrl);
function createBaseValidatorHistoricalRewardsRecord() {
    return {
        validator_address: "",
        period: BigInt(0),
        rewards: distribution_1.ValidatorHistoricalRewards.fromPartial({})
    };
}
exports.ValidatorHistoricalRewardsRecord = {
    typeUrl: "/cosmos.distribution.v1beta1.ValidatorHistoricalRewardsRecord",
    aminoType: "cosmos-sdk/ValidatorHistoricalRewardsRecord",
    is(o) {
        return o && (o.$typeUrl === exports.ValidatorHistoricalRewardsRecord.typeUrl || typeof o.validator_address === "string" && typeof o.period === "bigint" && distribution_1.ValidatorHistoricalRewards.is(o.rewards));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.ValidatorHistoricalRewardsRecord.typeUrl || typeof o.validator_address === "string" && typeof o.period === "bigint" && distribution_1.ValidatorHistoricalRewards.isSDK(o.rewards));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.ValidatorHistoricalRewardsRecord.typeUrl || typeof o.validator_address === "string" && typeof o.period === "bigint" && distribution_1.ValidatorHistoricalRewards.isAmino(o.rewards));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.validator_address !== "") {
            writer.uint32(10).string(message.validator_address);
        }
        if (message.period !== BigInt(0)) {
            writer.uint32(16).uint64(message.period);
        }
        if (message.rewards !== undefined) {
            distribution_1.ValidatorHistoricalRewards.encode(message.rewards, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorHistoricalRewardsRecord();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator_address = reader.string();
                    break;
                case 2:
                    message.period = reader.uint64();
                    break;
                case 3:
                    message.rewards = distribution_1.ValidatorHistoricalRewards.decode(reader, reader.uint32());
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
            period: (0, helpers_1.isSet)(object.period) ? BigInt(object.period.toString()) : BigInt(0),
            rewards: (0, helpers_1.isSet)(object.rewards) ? distribution_1.ValidatorHistoricalRewards.fromJSON(object.rewards) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.validator_address !== undefined && (obj.validator_address = message.validator_address);
        message.period !== undefined && (obj.period = (message.period || BigInt(0)).toString());
        message.rewards !== undefined && (obj.rewards = message.rewards ? distribution_1.ValidatorHistoricalRewards.toJSON(message.rewards) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseValidatorHistoricalRewardsRecord();
        message.validator_address = object.validator_address ?? "";
        message.period = object.period !== undefined && object.period !== null ? BigInt(object.period.toString()) : BigInt(0);
        message.rewards = object.rewards !== undefined && object.rewards !== null ? distribution_1.ValidatorHistoricalRewards.fromPartial(object.rewards) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseValidatorHistoricalRewardsRecord();
        if (object.validator_address !== undefined && object.validator_address !== null) {
            message.validator_address = object.validator_address;
        }
        if (object.period !== undefined && object.period !== null) {
            message.period = BigInt(object.period);
        }
        if (object.rewards !== undefined && object.rewards !== null) {
            message.rewards = distribution_1.ValidatorHistoricalRewards.fromAmino(object.rewards);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.validator_address = message.validator_address;
        obj.period = message.period ? message.period.toString() : undefined;
        obj.rewards = message.rewards ? distribution_1.ValidatorHistoricalRewards.toAmino(message.rewards) : distribution_1.ValidatorHistoricalRewards.fromPartial({});
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ValidatorHistoricalRewardsRecord.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ValidatorHistoricalRewardsRecord",
            value: exports.ValidatorHistoricalRewardsRecord.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ValidatorHistoricalRewardsRecord.decode(message.value);
    },
    toProto(message) {
        return exports.ValidatorHistoricalRewardsRecord.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.ValidatorHistoricalRewardsRecord",
            value: exports.ValidatorHistoricalRewardsRecord.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.ValidatorHistoricalRewardsRecord.typeUrl, exports.ValidatorHistoricalRewardsRecord);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.ValidatorHistoricalRewardsRecord.aminoType, exports.ValidatorHistoricalRewardsRecord.typeUrl);
function createBaseValidatorCurrentRewardsRecord() {
    return {
        validator_address: "",
        rewards: distribution_1.ValidatorCurrentRewards.fromPartial({})
    };
}
exports.ValidatorCurrentRewardsRecord = {
    typeUrl: "/cosmos.distribution.v1beta1.ValidatorCurrentRewardsRecord",
    aminoType: "cosmos-sdk/ValidatorCurrentRewardsRecord",
    is(o) {
        return o && (o.$typeUrl === exports.ValidatorCurrentRewardsRecord.typeUrl || typeof o.validator_address === "string" && distribution_1.ValidatorCurrentRewards.is(o.rewards));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.ValidatorCurrentRewardsRecord.typeUrl || typeof o.validator_address === "string" && distribution_1.ValidatorCurrentRewards.isSDK(o.rewards));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.ValidatorCurrentRewardsRecord.typeUrl || typeof o.validator_address === "string" && distribution_1.ValidatorCurrentRewards.isAmino(o.rewards));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.validator_address !== "") {
            writer.uint32(10).string(message.validator_address);
        }
        if (message.rewards !== undefined) {
            distribution_1.ValidatorCurrentRewards.encode(message.rewards, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorCurrentRewardsRecord();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator_address = reader.string();
                    break;
                case 2:
                    message.rewards = distribution_1.ValidatorCurrentRewards.decode(reader, reader.uint32());
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
            rewards: (0, helpers_1.isSet)(object.rewards) ? distribution_1.ValidatorCurrentRewards.fromJSON(object.rewards) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.validator_address !== undefined && (obj.validator_address = message.validator_address);
        message.rewards !== undefined && (obj.rewards = message.rewards ? distribution_1.ValidatorCurrentRewards.toJSON(message.rewards) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseValidatorCurrentRewardsRecord();
        message.validator_address = object.validator_address ?? "";
        message.rewards = object.rewards !== undefined && object.rewards !== null ? distribution_1.ValidatorCurrentRewards.fromPartial(object.rewards) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseValidatorCurrentRewardsRecord();
        if (object.validator_address !== undefined && object.validator_address !== null) {
            message.validator_address = object.validator_address;
        }
        if (object.rewards !== undefined && object.rewards !== null) {
            message.rewards = distribution_1.ValidatorCurrentRewards.fromAmino(object.rewards);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.validator_address = message.validator_address;
        obj.rewards = message.rewards ? distribution_1.ValidatorCurrentRewards.toAmino(message.rewards) : distribution_1.ValidatorCurrentRewards.fromPartial({});
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ValidatorCurrentRewardsRecord.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ValidatorCurrentRewardsRecord",
            value: exports.ValidatorCurrentRewardsRecord.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ValidatorCurrentRewardsRecord.decode(message.value);
    },
    toProto(message) {
        return exports.ValidatorCurrentRewardsRecord.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.ValidatorCurrentRewardsRecord",
            value: exports.ValidatorCurrentRewardsRecord.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.ValidatorCurrentRewardsRecord.typeUrl, exports.ValidatorCurrentRewardsRecord);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.ValidatorCurrentRewardsRecord.aminoType, exports.ValidatorCurrentRewardsRecord.typeUrl);
function createBaseDelegatorStartingInfoRecord() {
    return {
        delegator_address: "",
        validator_address: "",
        starting_info: distribution_1.DelegatorStartingInfo.fromPartial({})
    };
}
exports.DelegatorStartingInfoRecord = {
    typeUrl: "/cosmos.distribution.v1beta1.DelegatorStartingInfoRecord",
    aminoType: "cosmos-sdk/DelegatorStartingInfoRecord",
    is(o) {
        return o && (o.$typeUrl === exports.DelegatorStartingInfoRecord.typeUrl || typeof o.delegator_address === "string" && typeof o.validator_address === "string" && distribution_1.DelegatorStartingInfo.is(o.starting_info));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.DelegatorStartingInfoRecord.typeUrl || typeof o.delegator_address === "string" && typeof o.validator_address === "string" && distribution_1.DelegatorStartingInfo.isSDK(o.starting_info));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.DelegatorStartingInfoRecord.typeUrl || typeof o.delegator_address === "string" && typeof o.validator_address === "string" && distribution_1.DelegatorStartingInfo.isAmino(o.starting_info));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.delegator_address !== "") {
            writer.uint32(10).string(message.delegator_address);
        }
        if (message.validator_address !== "") {
            writer.uint32(18).string(message.validator_address);
        }
        if (message.starting_info !== undefined) {
            distribution_1.DelegatorStartingInfo.encode(message.starting_info, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDelegatorStartingInfoRecord();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegator_address = reader.string();
                    break;
                case 2:
                    message.validator_address = reader.string();
                    break;
                case 3:
                    message.starting_info = distribution_1.DelegatorStartingInfo.decode(reader, reader.uint32());
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
            delegator_address: (0, helpers_1.isSet)(object.delegator_address) ? String(object.delegator_address) : "",
            validator_address: (0, helpers_1.isSet)(object.validator_address) ? String(object.validator_address) : "",
            starting_info: (0, helpers_1.isSet)(object.starting_info) ? distribution_1.DelegatorStartingInfo.fromJSON(object.starting_info) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegator_address !== undefined && (obj.delegator_address = message.delegator_address);
        message.validator_address !== undefined && (obj.validator_address = message.validator_address);
        message.starting_info !== undefined && (obj.starting_info = message.starting_info ? distribution_1.DelegatorStartingInfo.toJSON(message.starting_info) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDelegatorStartingInfoRecord();
        message.delegator_address = object.delegator_address ?? "";
        message.validator_address = object.validator_address ?? "";
        message.starting_info = object.starting_info !== undefined && object.starting_info !== null ? distribution_1.DelegatorStartingInfo.fromPartial(object.starting_info) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseDelegatorStartingInfoRecord();
        if (object.delegator_address !== undefined && object.delegator_address !== null) {
            message.delegator_address = object.delegator_address;
        }
        if (object.validator_address !== undefined && object.validator_address !== null) {
            message.validator_address = object.validator_address;
        }
        if (object.starting_info !== undefined && object.starting_info !== null) {
            message.starting_info = distribution_1.DelegatorStartingInfo.fromAmino(object.starting_info);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_address = message.delegator_address;
        obj.validator_address = message.validator_address;
        obj.starting_info = message.starting_info ? distribution_1.DelegatorStartingInfo.toAmino(message.starting_info) : distribution_1.DelegatorStartingInfo.fromPartial({});
        return obj;
    },
    fromAminoMsg(object) {
        return exports.DelegatorStartingInfoRecord.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/DelegatorStartingInfoRecord",
            value: exports.DelegatorStartingInfoRecord.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.DelegatorStartingInfoRecord.decode(message.value);
    },
    toProto(message) {
        return exports.DelegatorStartingInfoRecord.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.DelegatorStartingInfoRecord",
            value: exports.DelegatorStartingInfoRecord.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.DelegatorStartingInfoRecord.typeUrl, exports.DelegatorStartingInfoRecord);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.DelegatorStartingInfoRecord.aminoType, exports.DelegatorStartingInfoRecord.typeUrl);
function createBaseValidatorSlashEventRecord() {
    return {
        validator_address: "",
        height: BigInt(0),
        period: BigInt(0),
        validator_slash_event: distribution_1.ValidatorSlashEvent.fromPartial({})
    };
}
exports.ValidatorSlashEventRecord = {
    typeUrl: "/cosmos.distribution.v1beta1.ValidatorSlashEventRecord",
    aminoType: "cosmos-sdk/ValidatorSlashEventRecord",
    is(o) {
        return o && (o.$typeUrl === exports.ValidatorSlashEventRecord.typeUrl || typeof o.validator_address === "string" && typeof o.height === "bigint" && typeof o.period === "bigint" && distribution_1.ValidatorSlashEvent.is(o.validator_slash_event));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.ValidatorSlashEventRecord.typeUrl || typeof o.validator_address === "string" && typeof o.height === "bigint" && typeof o.period === "bigint" && distribution_1.ValidatorSlashEvent.isSDK(o.validator_slash_event));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.ValidatorSlashEventRecord.typeUrl || typeof o.validator_address === "string" && typeof o.height === "bigint" && typeof o.period === "bigint" && distribution_1.ValidatorSlashEvent.isAmino(o.validator_slash_event));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.validator_address !== "") {
            writer.uint32(10).string(message.validator_address);
        }
        if (message.height !== BigInt(0)) {
            writer.uint32(16).uint64(message.height);
        }
        if (message.period !== BigInt(0)) {
            writer.uint32(24).uint64(message.period);
        }
        if (message.validator_slash_event !== undefined) {
            distribution_1.ValidatorSlashEvent.encode(message.validator_slash_event, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorSlashEventRecord();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator_address = reader.string();
                    break;
                case 2:
                    message.height = reader.uint64();
                    break;
                case 3:
                    message.period = reader.uint64();
                    break;
                case 4:
                    message.validator_slash_event = distribution_1.ValidatorSlashEvent.decode(reader, reader.uint32());
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
            height: (0, helpers_1.isSet)(object.height) ? BigInt(object.height.toString()) : BigInt(0),
            period: (0, helpers_1.isSet)(object.period) ? BigInt(object.period.toString()) : BigInt(0),
            validator_slash_event: (0, helpers_1.isSet)(object.validator_slash_event) ? distribution_1.ValidatorSlashEvent.fromJSON(object.validator_slash_event) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.validator_address !== undefined && (obj.validator_address = message.validator_address);
        message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
        message.period !== undefined && (obj.period = (message.period || BigInt(0)).toString());
        message.validator_slash_event !== undefined && (obj.validator_slash_event = message.validator_slash_event ? distribution_1.ValidatorSlashEvent.toJSON(message.validator_slash_event) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseValidatorSlashEventRecord();
        message.validator_address = object.validator_address ?? "";
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        message.period = object.period !== undefined && object.period !== null ? BigInt(object.period.toString()) : BigInt(0);
        message.validator_slash_event = object.validator_slash_event !== undefined && object.validator_slash_event !== null ? distribution_1.ValidatorSlashEvent.fromPartial(object.validator_slash_event) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseValidatorSlashEventRecord();
        if (object.validator_address !== undefined && object.validator_address !== null) {
            message.validator_address = object.validator_address;
        }
        if (object.height !== undefined && object.height !== null) {
            message.height = BigInt(object.height);
        }
        if (object.period !== undefined && object.period !== null) {
            message.period = BigInt(object.period);
        }
        if (object.validator_slash_event !== undefined && object.validator_slash_event !== null) {
            message.validator_slash_event = distribution_1.ValidatorSlashEvent.fromAmino(object.validator_slash_event);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.validator_address = message.validator_address;
        obj.height = message.height ? message.height.toString() : undefined;
        obj.period = message.period ? message.period.toString() : undefined;
        obj.validator_slash_event = message.validator_slash_event ? distribution_1.ValidatorSlashEvent.toAmino(message.validator_slash_event) : distribution_1.ValidatorSlashEvent.fromPartial({});
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ValidatorSlashEventRecord.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ValidatorSlashEventRecord",
            value: exports.ValidatorSlashEventRecord.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ValidatorSlashEventRecord.decode(message.value);
    },
    toProto(message) {
        return exports.ValidatorSlashEventRecord.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.ValidatorSlashEventRecord",
            value: exports.ValidatorSlashEventRecord.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.ValidatorSlashEventRecord.typeUrl, exports.ValidatorSlashEventRecord);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.ValidatorSlashEventRecord.aminoType, exports.ValidatorSlashEventRecord.typeUrl);
function createBaseGenesisState() {
    return {
        params: distribution_1.Params.fromPartial({}),
        fee_pool: distribution_1.FeePool.fromPartial({}),
        delegator_withdraw_infos: [],
        previous_proposer: "",
        outstanding_rewards: [],
        validator_accumulated_commissions: [],
        validator_historical_rewards: [],
        validator_current_rewards: [],
        delegator_starting_infos: [],
        validator_slash_events: []
    };
}
exports.GenesisState = {
    typeUrl: "/cosmos.distribution.v1beta1.GenesisState",
    aminoType: "cosmos-sdk/GenesisState",
    is(o) {
        return o && (o.$typeUrl === exports.GenesisState.typeUrl || distribution_1.Params.is(o.params) && distribution_1.FeePool.is(o.fee_pool) && Array.isArray(o.delegator_withdraw_infos) && (!o.delegator_withdraw_infos.length || exports.DelegatorWithdrawInfo.is(o.delegator_withdraw_infos[0])) && typeof o.previous_proposer === "string" && Array.isArray(o.outstanding_rewards) && (!o.outstanding_rewards.length || exports.ValidatorOutstandingRewardsRecord.is(o.outstanding_rewards[0])) && Array.isArray(o.validator_accumulated_commissions) && (!o.validator_accumulated_commissions.length || exports.ValidatorAccumulatedCommissionRecord.is(o.validator_accumulated_commissions[0])) && Array.isArray(o.validator_historical_rewards) && (!o.validator_historical_rewards.length || exports.ValidatorHistoricalRewardsRecord.is(o.validator_historical_rewards[0])) && Array.isArray(o.validator_current_rewards) && (!o.validator_current_rewards.length || exports.ValidatorCurrentRewardsRecord.is(o.validator_current_rewards[0])) && Array.isArray(o.delegator_starting_infos) && (!o.delegator_starting_infos.length || exports.DelegatorStartingInfoRecord.is(o.delegator_starting_infos[0])) && Array.isArray(o.validator_slash_events) && (!o.validator_slash_events.length || exports.ValidatorSlashEventRecord.is(o.validator_slash_events[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.GenesisState.typeUrl || distribution_1.Params.isSDK(o.params) && distribution_1.FeePool.isSDK(o.fee_pool) && Array.isArray(o.delegator_withdraw_infos) && (!o.delegator_withdraw_infos.length || exports.DelegatorWithdrawInfo.isSDK(o.delegator_withdraw_infos[0])) && typeof o.previous_proposer === "string" && Array.isArray(o.outstanding_rewards) && (!o.outstanding_rewards.length || exports.ValidatorOutstandingRewardsRecord.isSDK(o.outstanding_rewards[0])) && Array.isArray(o.validator_accumulated_commissions) && (!o.validator_accumulated_commissions.length || exports.ValidatorAccumulatedCommissionRecord.isSDK(o.validator_accumulated_commissions[0])) && Array.isArray(o.validator_historical_rewards) && (!o.validator_historical_rewards.length || exports.ValidatorHistoricalRewardsRecord.isSDK(o.validator_historical_rewards[0])) && Array.isArray(o.validator_current_rewards) && (!o.validator_current_rewards.length || exports.ValidatorCurrentRewardsRecord.isSDK(o.validator_current_rewards[0])) && Array.isArray(o.delegator_starting_infos) && (!o.delegator_starting_infos.length || exports.DelegatorStartingInfoRecord.isSDK(o.delegator_starting_infos[0])) && Array.isArray(o.validator_slash_events) && (!o.validator_slash_events.length || exports.ValidatorSlashEventRecord.isSDK(o.validator_slash_events[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.GenesisState.typeUrl || distribution_1.Params.isAmino(o.params) && distribution_1.FeePool.isAmino(o.fee_pool) && Array.isArray(o.delegator_withdraw_infos) && (!o.delegator_withdraw_infos.length || exports.DelegatorWithdrawInfo.isAmino(o.delegator_withdraw_infos[0])) && typeof o.previous_proposer === "string" && Array.isArray(o.outstanding_rewards) && (!o.outstanding_rewards.length || exports.ValidatorOutstandingRewardsRecord.isAmino(o.outstanding_rewards[0])) && Array.isArray(o.validator_accumulated_commissions) && (!o.validator_accumulated_commissions.length || exports.ValidatorAccumulatedCommissionRecord.isAmino(o.validator_accumulated_commissions[0])) && Array.isArray(o.validator_historical_rewards) && (!o.validator_historical_rewards.length || exports.ValidatorHistoricalRewardsRecord.isAmino(o.validator_historical_rewards[0])) && Array.isArray(o.validator_current_rewards) && (!o.validator_current_rewards.length || exports.ValidatorCurrentRewardsRecord.isAmino(o.validator_current_rewards[0])) && Array.isArray(o.delegator_starting_infos) && (!o.delegator_starting_infos.length || exports.DelegatorStartingInfoRecord.isAmino(o.delegator_starting_infos[0])) && Array.isArray(o.validator_slash_events) && (!o.validator_slash_events.length || exports.ValidatorSlashEventRecord.isAmino(o.validator_slash_events[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            distribution_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        if (message.fee_pool !== undefined) {
            distribution_1.FeePool.encode(message.fee_pool, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.delegator_withdraw_infos) {
            exports.DelegatorWithdrawInfo.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.previous_proposer !== "") {
            writer.uint32(34).string(message.previous_proposer);
        }
        for (const v of message.outstanding_rewards) {
            exports.ValidatorOutstandingRewardsRecord.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.validator_accumulated_commissions) {
            exports.ValidatorAccumulatedCommissionRecord.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.validator_historical_rewards) {
            exports.ValidatorHistoricalRewardsRecord.encode(v, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.validator_current_rewards) {
            exports.ValidatorCurrentRewardsRecord.encode(v, writer.uint32(66).fork()).ldelim();
        }
        for (const v of message.delegator_starting_infos) {
            exports.DelegatorStartingInfoRecord.encode(v, writer.uint32(74).fork()).ldelim();
        }
        for (const v of message.validator_slash_events) {
            exports.ValidatorSlashEventRecord.encode(v, writer.uint32(82).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = distribution_1.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.fee_pool = distribution_1.FeePool.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.delegator_withdraw_infos.push(exports.DelegatorWithdrawInfo.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.previous_proposer = reader.string();
                    break;
                case 5:
                    message.outstanding_rewards.push(exports.ValidatorOutstandingRewardsRecord.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.validator_accumulated_commissions.push(exports.ValidatorAccumulatedCommissionRecord.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.validator_historical_rewards.push(exports.ValidatorHistoricalRewardsRecord.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.validator_current_rewards.push(exports.ValidatorCurrentRewardsRecord.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.delegator_starting_infos.push(exports.DelegatorStartingInfoRecord.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.validator_slash_events.push(exports.ValidatorSlashEventRecord.decode(reader, reader.uint32()));
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
            params: (0, helpers_1.isSet)(object.params) ? distribution_1.Params.fromJSON(object.params) : undefined,
            fee_pool: (0, helpers_1.isSet)(object.fee_pool) ? distribution_1.FeePool.fromJSON(object.fee_pool) : undefined,
            delegator_withdraw_infos: Array.isArray(object?.delegator_withdraw_infos) ? object.delegator_withdraw_infos.map((e) => exports.DelegatorWithdrawInfo.fromJSON(e)) : [],
            previous_proposer: (0, helpers_1.isSet)(object.previous_proposer) ? String(object.previous_proposer) : "",
            outstanding_rewards: Array.isArray(object?.outstanding_rewards) ? object.outstanding_rewards.map((e) => exports.ValidatorOutstandingRewardsRecord.fromJSON(e)) : [],
            validator_accumulated_commissions: Array.isArray(object?.validator_accumulated_commissions) ? object.validator_accumulated_commissions.map((e) => exports.ValidatorAccumulatedCommissionRecord.fromJSON(e)) : [],
            validator_historical_rewards: Array.isArray(object?.validator_historical_rewards) ? object.validator_historical_rewards.map((e) => exports.ValidatorHistoricalRewardsRecord.fromJSON(e)) : [],
            validator_current_rewards: Array.isArray(object?.validator_current_rewards) ? object.validator_current_rewards.map((e) => exports.ValidatorCurrentRewardsRecord.fromJSON(e)) : [],
            delegator_starting_infos: Array.isArray(object?.delegator_starting_infos) ? object.delegator_starting_infos.map((e) => exports.DelegatorStartingInfoRecord.fromJSON(e)) : [],
            validator_slash_events: Array.isArray(object?.validator_slash_events) ? object.validator_slash_events.map((e) => exports.ValidatorSlashEventRecord.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? distribution_1.Params.toJSON(message.params) : undefined);
        message.fee_pool !== undefined && (obj.fee_pool = message.fee_pool ? distribution_1.FeePool.toJSON(message.fee_pool) : undefined);
        if (message.delegator_withdraw_infos) {
            obj.delegator_withdraw_infos = message.delegator_withdraw_infos.map(e => e ? exports.DelegatorWithdrawInfo.toJSON(e) : undefined);
        }
        else {
            obj.delegator_withdraw_infos = [];
        }
        message.previous_proposer !== undefined && (obj.previous_proposer = message.previous_proposer);
        if (message.outstanding_rewards) {
            obj.outstanding_rewards = message.outstanding_rewards.map(e => e ? exports.ValidatorOutstandingRewardsRecord.toJSON(e) : undefined);
        }
        else {
            obj.outstanding_rewards = [];
        }
        if (message.validator_accumulated_commissions) {
            obj.validator_accumulated_commissions = message.validator_accumulated_commissions.map(e => e ? exports.ValidatorAccumulatedCommissionRecord.toJSON(e) : undefined);
        }
        else {
            obj.validator_accumulated_commissions = [];
        }
        if (message.validator_historical_rewards) {
            obj.validator_historical_rewards = message.validator_historical_rewards.map(e => e ? exports.ValidatorHistoricalRewardsRecord.toJSON(e) : undefined);
        }
        else {
            obj.validator_historical_rewards = [];
        }
        if (message.validator_current_rewards) {
            obj.validator_current_rewards = message.validator_current_rewards.map(e => e ? exports.ValidatorCurrentRewardsRecord.toJSON(e) : undefined);
        }
        else {
            obj.validator_current_rewards = [];
        }
        if (message.delegator_starting_infos) {
            obj.delegator_starting_infos = message.delegator_starting_infos.map(e => e ? exports.DelegatorStartingInfoRecord.toJSON(e) : undefined);
        }
        else {
            obj.delegator_starting_infos = [];
        }
        if (message.validator_slash_events) {
            obj.validator_slash_events = message.validator_slash_events.map(e => e ? exports.ValidatorSlashEventRecord.toJSON(e) : undefined);
        }
        else {
            obj.validator_slash_events = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.params = object.params !== undefined && object.params !== null ? distribution_1.Params.fromPartial(object.params) : undefined;
        message.fee_pool = object.fee_pool !== undefined && object.fee_pool !== null ? distribution_1.FeePool.fromPartial(object.fee_pool) : undefined;
        message.delegator_withdraw_infos = object.delegator_withdraw_infos?.map(e => exports.DelegatorWithdrawInfo.fromPartial(e)) || [];
        message.previous_proposer = object.previous_proposer ?? "";
        message.outstanding_rewards = object.outstanding_rewards?.map(e => exports.ValidatorOutstandingRewardsRecord.fromPartial(e)) || [];
        message.validator_accumulated_commissions = object.validator_accumulated_commissions?.map(e => exports.ValidatorAccumulatedCommissionRecord.fromPartial(e)) || [];
        message.validator_historical_rewards = object.validator_historical_rewards?.map(e => exports.ValidatorHistoricalRewardsRecord.fromPartial(e)) || [];
        message.validator_current_rewards = object.validator_current_rewards?.map(e => exports.ValidatorCurrentRewardsRecord.fromPartial(e)) || [];
        message.delegator_starting_infos = object.delegator_starting_infos?.map(e => exports.DelegatorStartingInfoRecord.fromPartial(e)) || [];
        message.validator_slash_events = object.validator_slash_events?.map(e => exports.ValidatorSlashEventRecord.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        if (object.params !== undefined && object.params !== null) {
            message.params = distribution_1.Params.fromAmino(object.params);
        }
        if (object.fee_pool !== undefined && object.fee_pool !== null) {
            message.fee_pool = distribution_1.FeePool.fromAmino(object.fee_pool);
        }
        message.delegator_withdraw_infos = object.delegator_withdraw_infos?.map(e => exports.DelegatorWithdrawInfo.fromAmino(e)) || [];
        if (object.previous_proposer !== undefined && object.previous_proposer !== null) {
            message.previous_proposer = object.previous_proposer;
        }
        message.outstanding_rewards = object.outstanding_rewards?.map(e => exports.ValidatorOutstandingRewardsRecord.fromAmino(e)) || [];
        message.validator_accumulated_commissions = object.validator_accumulated_commissions?.map(e => exports.ValidatorAccumulatedCommissionRecord.fromAmino(e)) || [];
        message.validator_historical_rewards = object.validator_historical_rewards?.map(e => exports.ValidatorHistoricalRewardsRecord.fromAmino(e)) || [];
        message.validator_current_rewards = object.validator_current_rewards?.map(e => exports.ValidatorCurrentRewardsRecord.fromAmino(e)) || [];
        message.delegator_starting_infos = object.delegator_starting_infos?.map(e => exports.DelegatorStartingInfoRecord.fromAmino(e)) || [];
        message.validator_slash_events = object.validator_slash_events?.map(e => exports.ValidatorSlashEventRecord.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? distribution_1.Params.toAmino(message.params) : distribution_1.Params.fromPartial({});
        obj.fee_pool = message.fee_pool ? distribution_1.FeePool.toAmino(message.fee_pool) : distribution_1.FeePool.fromPartial({});
        if (message.delegator_withdraw_infos) {
            obj.delegator_withdraw_infos = message.delegator_withdraw_infos.map(e => e ? exports.DelegatorWithdrawInfo.toAmino(e) : undefined);
        }
        else {
            obj.delegator_withdraw_infos = [];
        }
        obj.previous_proposer = message.previous_proposer;
        if (message.outstanding_rewards) {
            obj.outstanding_rewards = message.outstanding_rewards.map(e => e ? exports.ValidatorOutstandingRewardsRecord.toAmino(e) : undefined);
        }
        else {
            obj.outstanding_rewards = [];
        }
        if (message.validator_accumulated_commissions) {
            obj.validator_accumulated_commissions = message.validator_accumulated_commissions.map(e => e ? exports.ValidatorAccumulatedCommissionRecord.toAmino(e) : undefined);
        }
        else {
            obj.validator_accumulated_commissions = [];
        }
        if (message.validator_historical_rewards) {
            obj.validator_historical_rewards = message.validator_historical_rewards.map(e => e ? exports.ValidatorHistoricalRewardsRecord.toAmino(e) : undefined);
        }
        else {
            obj.validator_historical_rewards = [];
        }
        if (message.validator_current_rewards) {
            obj.validator_current_rewards = message.validator_current_rewards.map(e => e ? exports.ValidatorCurrentRewardsRecord.toAmino(e) : undefined);
        }
        else {
            obj.validator_current_rewards = [];
        }
        if (message.delegator_starting_infos) {
            obj.delegator_starting_infos = message.delegator_starting_infos.map(e => e ? exports.DelegatorStartingInfoRecord.toAmino(e) : undefined);
        }
        else {
            obj.delegator_starting_infos = [];
        }
        if (message.validator_slash_events) {
            obj.validator_slash_events = message.validator_slash_events.map(e => e ? exports.ValidatorSlashEventRecord.toAmino(e) : undefined);
        }
        else {
            obj.validator_slash_events = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GenesisState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GenesisState",
            value: exports.GenesisState.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GenesisState.decode(message.value);
    },
    toProto(message) {
        return exports.GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.GenesisState.typeUrl, exports.GenesisState);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.GenesisState.aminoType, exports.GenesisState.typeUrl);
//# sourceMappingURL=genesis.js.map
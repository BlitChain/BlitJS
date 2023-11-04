"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryCommunityPoolResponse = exports.QueryCommunityPoolRequest = exports.QueryDelegatorWithdrawAddressResponse = exports.QueryDelegatorWithdrawAddressRequest = exports.QueryDelegatorValidatorsResponse = exports.QueryDelegatorValidatorsRequest = exports.QueryDelegationTotalRewardsResponse = exports.QueryDelegationTotalRewardsRequest = exports.QueryDelegationRewardsResponse = exports.QueryDelegationRewardsRequest = exports.QueryValidatorSlashesResponse = exports.QueryValidatorSlashesRequest = exports.QueryValidatorCommissionResponse = exports.QueryValidatorCommissionRequest = exports.QueryValidatorOutstandingRewardsResponse = exports.QueryValidatorOutstandingRewardsRequest = exports.QueryValidatorDistributionInfoResponse = exports.QueryValidatorDistributionInfoRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.protobufPackage = void 0;
//@ts-nocheck
const pagination_1 = require("../../base/query/v1beta1/pagination");
const distribution_1 = require("./distribution");
const coin_1 = require("../../base/v1beta1/coin");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "cosmos.distribution.v1beta1";
function createBaseQueryParamsRequest() {
    return {};
}
exports.QueryParamsRequest = {
    typeUrl: "/cosmos.distribution.v1beta1.QueryParamsRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsRequest();
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
        const message = createBaseQueryParamsRequest();
        return message;
    },
    fromSDK(_) {
        return {};
    },
    toSDK(_) {
        const obj = {};
        return obj;
    },
    fromAmino(_) {
        return {};
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryParamsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryParamsRequest",
            value: exports.QueryParamsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryParamsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.QueryParamsRequest",
            value: exports.QueryParamsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryParamsResponse() {
    return {
        params: distribution_1.Params.fromPartial({})
    };
}
exports.QueryParamsResponse = {
    typeUrl: "/cosmos.distribution.v1beta1.QueryParamsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            distribution_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = distribution_1.Params.decode(reader, reader.uint32());
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
            params: (0, helpers_1.isSet)(object.params) ? distribution_1.Params.fromJSON(object.params) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? distribution_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        message.params = object.params !== undefined && object.params !== null ? distribution_1.Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            params: object.params ? distribution_1.Params.fromSDK(object.params) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? distribution_1.Params.toSDK(message.params) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            params: object?.params ? distribution_1.Params.fromAmino(object.params) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? distribution_1.Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryParamsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryParamsResponse",
            value: exports.QueryParamsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryParamsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.QueryParamsResponse",
            value: exports.QueryParamsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryValidatorDistributionInfoRequest() {
    return {
        validator_address: ""
    };
}
exports.QueryValidatorDistributionInfoRequest = {
    typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorDistributionInfoRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.validator_address !== "") {
            writer.uint32(10).string(message.validator_address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValidatorDistributionInfoRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator_address = reader.string();
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
            validator_address: (0, helpers_1.isSet)(object.validator_address) ? String(object.validator_address) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.validator_address !== undefined && (obj.validator_address = message.validator_address);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryValidatorDistributionInfoRequest();
        message.validator_address = object.validator_address ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            validator_address: object?.validator_address
        };
    },
    toSDK(message) {
        const obj = {};
        obj.validator_address = message.validator_address;
        return obj;
    },
    fromAmino(object) {
        return {
            validator_address: object.validator_address
        };
    },
    toAmino(message) {
        const obj = {};
        obj.validator_address = message.validator_address;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryValidatorDistributionInfoRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryValidatorDistributionInfoRequest",
            value: exports.QueryValidatorDistributionInfoRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryValidatorDistributionInfoRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryValidatorDistributionInfoRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorDistributionInfoRequest",
            value: exports.QueryValidatorDistributionInfoRequest.encode(message).finish()
        };
    }
};
function createBaseQueryValidatorDistributionInfoResponse() {
    return {
        operator_address: "",
        self_bond_rewards: [],
        commission: []
    };
}
exports.QueryValidatorDistributionInfoResponse = {
    typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorDistributionInfoResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.operator_address !== "") {
            writer.uint32(10).string(message.operator_address);
        }
        for (const v of message.self_bond_rewards) {
            coin_1.DecCoin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.commission) {
            coin_1.DecCoin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValidatorDistributionInfoResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.operator_address = reader.string();
                    break;
                case 2:
                    message.self_bond_rewards.push(coin_1.DecCoin.decode(reader, reader.uint32()));
                    break;
                case 3:
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
            operator_address: (0, helpers_1.isSet)(object.operator_address) ? String(object.operator_address) : "",
            self_bond_rewards: Array.isArray(object?.self_bond_rewards) ? object.self_bond_rewards.map((e) => coin_1.DecCoin.fromJSON(e)) : [],
            commission: Array.isArray(object?.commission) ? object.commission.map((e) => coin_1.DecCoin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.operator_address !== undefined && (obj.operator_address = message.operator_address);
        if (message.self_bond_rewards) {
            obj.self_bond_rewards = message.self_bond_rewards.map(e => e ? coin_1.DecCoin.toJSON(e) : undefined);
        }
        else {
            obj.self_bond_rewards = [];
        }
        if (message.commission) {
            obj.commission = message.commission.map(e => e ? coin_1.DecCoin.toJSON(e) : undefined);
        }
        else {
            obj.commission = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryValidatorDistributionInfoResponse();
        message.operator_address = object.operator_address ?? "";
        message.self_bond_rewards = object.self_bond_rewards?.map(e => coin_1.DecCoin.fromPartial(e)) || [];
        message.commission = object.commission?.map(e => coin_1.DecCoin.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            operator_address: object?.operator_address,
            self_bond_rewards: Array.isArray(object?.self_bond_rewards) ? object.self_bond_rewards.map((e) => coin_1.DecCoin.fromSDK(e)) : [],
            commission: Array.isArray(object?.commission) ? object.commission.map((e) => coin_1.DecCoin.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.operator_address = message.operator_address;
        if (message.self_bond_rewards) {
            obj.self_bond_rewards = message.self_bond_rewards.map(e => e ? coin_1.DecCoin.toSDK(e) : undefined);
        }
        else {
            obj.self_bond_rewards = [];
        }
        if (message.commission) {
            obj.commission = message.commission.map(e => e ? coin_1.DecCoin.toSDK(e) : undefined);
        }
        else {
            obj.commission = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            operator_address: object.operator_address,
            self_bond_rewards: Array.isArray(object?.self_bond_rewards) ? object.self_bond_rewards.map((e) => coin_1.DecCoin.fromAmino(e)) : [],
            commission: Array.isArray(object?.commission) ? object.commission.map((e) => coin_1.DecCoin.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.operator_address = message.operator_address;
        if (message.self_bond_rewards) {
            obj.self_bond_rewards = message.self_bond_rewards.map(e => e ? coin_1.DecCoin.toAmino(e) : undefined);
        }
        else {
            obj.self_bond_rewards = [];
        }
        if (message.commission) {
            obj.commission = message.commission.map(e => e ? coin_1.DecCoin.toAmino(e) : undefined);
        }
        else {
            obj.commission = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryValidatorDistributionInfoResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryValidatorDistributionInfoResponse",
            value: exports.QueryValidatorDistributionInfoResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryValidatorDistributionInfoResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryValidatorDistributionInfoResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorDistributionInfoResponse",
            value: exports.QueryValidatorDistributionInfoResponse.encode(message).finish()
        };
    }
};
function createBaseQueryValidatorOutstandingRewardsRequest() {
    return {
        validator_address: ""
    };
}
exports.QueryValidatorOutstandingRewardsRequest = {
    typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.validator_address !== "") {
            writer.uint32(10).string(message.validator_address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValidatorOutstandingRewardsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator_address = reader.string();
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
            validator_address: (0, helpers_1.isSet)(object.validator_address) ? String(object.validator_address) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.validator_address !== undefined && (obj.validator_address = message.validator_address);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryValidatorOutstandingRewardsRequest();
        message.validator_address = object.validator_address ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            validator_address: object?.validator_address
        };
    },
    toSDK(message) {
        const obj = {};
        obj.validator_address = message.validator_address;
        return obj;
    },
    fromAmino(object) {
        return {
            validator_address: object.validator_address
        };
    },
    toAmino(message) {
        const obj = {};
        obj.validator_address = message.validator_address;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryValidatorOutstandingRewardsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryValidatorOutstandingRewardsRequest",
            value: exports.QueryValidatorOutstandingRewardsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryValidatorOutstandingRewardsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryValidatorOutstandingRewardsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsRequest",
            value: exports.QueryValidatorOutstandingRewardsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryValidatorOutstandingRewardsResponse() {
    return {
        rewards: distribution_1.ValidatorOutstandingRewards.fromPartial({})
    };
}
exports.QueryValidatorOutstandingRewardsResponse = {
    typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.rewards !== undefined) {
            distribution_1.ValidatorOutstandingRewards.encode(message.rewards, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValidatorOutstandingRewardsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rewards = distribution_1.ValidatorOutstandingRewards.decode(reader, reader.uint32());
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
            rewards: (0, helpers_1.isSet)(object.rewards) ? distribution_1.ValidatorOutstandingRewards.fromJSON(object.rewards) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.rewards !== undefined && (obj.rewards = message.rewards ? distribution_1.ValidatorOutstandingRewards.toJSON(message.rewards) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryValidatorOutstandingRewardsResponse();
        message.rewards = object.rewards !== undefined && object.rewards !== null ? distribution_1.ValidatorOutstandingRewards.fromPartial(object.rewards) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            rewards: object.rewards ? distribution_1.ValidatorOutstandingRewards.fromSDK(object.rewards) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.rewards !== undefined && (obj.rewards = message.rewards ? distribution_1.ValidatorOutstandingRewards.toSDK(message.rewards) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            rewards: object?.rewards ? distribution_1.ValidatorOutstandingRewards.fromAmino(object.rewards) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.rewards = message.rewards ? distribution_1.ValidatorOutstandingRewards.toAmino(message.rewards) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryValidatorOutstandingRewardsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryValidatorOutstandingRewardsResponse",
            value: exports.QueryValidatorOutstandingRewardsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryValidatorOutstandingRewardsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryValidatorOutstandingRewardsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsResponse",
            value: exports.QueryValidatorOutstandingRewardsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryValidatorCommissionRequest() {
    return {
        validator_address: ""
    };
}
exports.QueryValidatorCommissionRequest = {
    typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorCommissionRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.validator_address !== "") {
            writer.uint32(10).string(message.validator_address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValidatorCommissionRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator_address = reader.string();
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
            validator_address: (0, helpers_1.isSet)(object.validator_address) ? String(object.validator_address) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.validator_address !== undefined && (obj.validator_address = message.validator_address);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryValidatorCommissionRequest();
        message.validator_address = object.validator_address ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            validator_address: object?.validator_address
        };
    },
    toSDK(message) {
        const obj = {};
        obj.validator_address = message.validator_address;
        return obj;
    },
    fromAmino(object) {
        return {
            validator_address: object.validator_address
        };
    },
    toAmino(message) {
        const obj = {};
        obj.validator_address = message.validator_address;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryValidatorCommissionRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryValidatorCommissionRequest",
            value: exports.QueryValidatorCommissionRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryValidatorCommissionRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryValidatorCommissionRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorCommissionRequest",
            value: exports.QueryValidatorCommissionRequest.encode(message).finish()
        };
    }
};
function createBaseQueryValidatorCommissionResponse() {
    return {
        commission: distribution_1.ValidatorAccumulatedCommission.fromPartial({})
    };
}
exports.QueryValidatorCommissionResponse = {
    typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorCommissionResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.commission !== undefined) {
            distribution_1.ValidatorAccumulatedCommission.encode(message.commission, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValidatorCommissionResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.commission = distribution_1.ValidatorAccumulatedCommission.decode(reader, reader.uint32());
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
            commission: (0, helpers_1.isSet)(object.commission) ? distribution_1.ValidatorAccumulatedCommission.fromJSON(object.commission) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.commission !== undefined && (obj.commission = message.commission ? distribution_1.ValidatorAccumulatedCommission.toJSON(message.commission) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryValidatorCommissionResponse();
        message.commission = object.commission !== undefined && object.commission !== null ? distribution_1.ValidatorAccumulatedCommission.fromPartial(object.commission) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            commission: object.commission ? distribution_1.ValidatorAccumulatedCommission.fromSDK(object.commission) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.commission !== undefined && (obj.commission = message.commission ? distribution_1.ValidatorAccumulatedCommission.toSDK(message.commission) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            commission: object?.commission ? distribution_1.ValidatorAccumulatedCommission.fromAmino(object.commission) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.commission = message.commission ? distribution_1.ValidatorAccumulatedCommission.toAmino(message.commission) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryValidatorCommissionResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryValidatorCommissionResponse",
            value: exports.QueryValidatorCommissionResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryValidatorCommissionResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryValidatorCommissionResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorCommissionResponse",
            value: exports.QueryValidatorCommissionResponse.encode(message).finish()
        };
    }
};
function createBaseQueryValidatorSlashesRequest() {
    return {
        validator_address: "",
        starting_height: BigInt(0),
        ending_height: BigInt(0),
        pagination: undefined
    };
}
exports.QueryValidatorSlashesRequest = {
    typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorSlashesRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.validator_address !== "") {
            writer.uint32(10).string(message.validator_address);
        }
        if (message.starting_height !== BigInt(0)) {
            writer.uint32(16).uint64(message.starting_height);
        }
        if (message.ending_height !== BigInt(0)) {
            writer.uint32(24).uint64(message.ending_height);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValidatorSlashesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator_address = reader.string();
                    break;
                case 2:
                    message.starting_height = reader.uint64();
                    break;
                case 3:
                    message.ending_height = reader.uint64();
                    break;
                case 4:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
            starting_height: (0, helpers_1.isSet)(object.starting_height) ? BigInt(object.starting_height.toString()) : BigInt(0),
            ending_height: (0, helpers_1.isSet)(object.ending_height) ? BigInt(object.ending_height.toString()) : BigInt(0),
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.validator_address !== undefined && (obj.validator_address = message.validator_address);
        message.starting_height !== undefined && (obj.starting_height = (message.starting_height || BigInt(0)).toString());
        message.ending_height !== undefined && (obj.ending_height = (message.ending_height || BigInt(0)).toString());
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryValidatorSlashesRequest();
        message.validator_address = object.validator_address ?? "";
        message.starting_height = object.starting_height !== undefined && object.starting_height !== null ? BigInt(object.starting_height.toString()) : BigInt(0);
        message.ending_height = object.ending_height !== undefined && object.ending_height !== null ? BigInt(object.ending_height.toString()) : BigInt(0);
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            validator_address: object?.validator_address,
            starting_height: object?.starting_height,
            ending_height: object?.ending_height,
            pagination: object.pagination ? pagination_1.PageRequest.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.validator_address = message.validator_address;
        obj.starting_height = message.starting_height;
        obj.ending_height = message.ending_height;
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            validator_address: object.validator_address,
            starting_height: BigInt(object.starting_height),
            ending_height: BigInt(object.ending_height),
            pagination: object?.pagination ? pagination_1.PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.validator_address = message.validator_address;
        obj.starting_height = message.starting_height ? message.starting_height.toString() : undefined;
        obj.ending_height = message.ending_height ? message.ending_height.toString() : undefined;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryValidatorSlashesRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryValidatorSlashesRequest",
            value: exports.QueryValidatorSlashesRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryValidatorSlashesRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryValidatorSlashesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorSlashesRequest",
            value: exports.QueryValidatorSlashesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryValidatorSlashesResponse() {
    return {
        slashes: [],
        pagination: undefined
    };
}
exports.QueryValidatorSlashesResponse = {
    typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorSlashesResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.slashes) {
            distribution_1.ValidatorSlashEvent.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValidatorSlashesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.slashes.push(distribution_1.ValidatorSlashEvent.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
            slashes: Array.isArray(object?.slashes) ? object.slashes.map((e) => distribution_1.ValidatorSlashEvent.fromJSON(e)) : [],
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.slashes) {
            obj.slashes = message.slashes.map(e => e ? distribution_1.ValidatorSlashEvent.toJSON(e) : undefined);
        }
        else {
            obj.slashes = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryValidatorSlashesResponse();
        message.slashes = object.slashes?.map(e => distribution_1.ValidatorSlashEvent.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            slashes: Array.isArray(object?.slashes) ? object.slashes.map((e) => distribution_1.ValidatorSlashEvent.fromSDK(e)) : [],
            pagination: object.pagination ? pagination_1.PageResponse.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.slashes) {
            obj.slashes = message.slashes.map(e => e ? distribution_1.ValidatorSlashEvent.toSDK(e) : undefined);
        }
        else {
            obj.slashes = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            slashes: Array.isArray(object?.slashes) ? object.slashes.map((e) => distribution_1.ValidatorSlashEvent.fromAmino(e)) : [],
            pagination: object?.pagination ? pagination_1.PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.slashes) {
            obj.slashes = message.slashes.map(e => e ? distribution_1.ValidatorSlashEvent.toAmino(e) : undefined);
        }
        else {
            obj.slashes = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryValidatorSlashesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryValidatorSlashesResponse",
            value: exports.QueryValidatorSlashesResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryValidatorSlashesResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryValidatorSlashesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorSlashesResponse",
            value: exports.QueryValidatorSlashesResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDelegationRewardsRequest() {
    return {
        delegator_address: "",
        validator_address: ""
    };
}
exports.QueryDelegationRewardsRequest = {
    typeUrl: "/cosmos.distribution.v1beta1.QueryDelegationRewardsRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.delegator_address !== "") {
            writer.uint32(10).string(message.delegator_address);
        }
        if (message.validator_address !== "") {
            writer.uint32(18).string(message.validator_address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDelegationRewardsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegator_address = reader.string();
                    break;
                case 2:
                    message.validator_address = reader.string();
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
            validator_address: (0, helpers_1.isSet)(object.validator_address) ? String(object.validator_address) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegator_address !== undefined && (obj.delegator_address = message.delegator_address);
        message.validator_address !== undefined && (obj.validator_address = message.validator_address);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryDelegationRewardsRequest();
        message.delegator_address = object.delegator_address ?? "";
        message.validator_address = object.validator_address ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            delegator_address: object?.delegator_address,
            validator_address: object?.validator_address
        };
    },
    toSDK(message) {
        const obj = {};
        obj.delegator_address = message.delegator_address;
        obj.validator_address = message.validator_address;
        return obj;
    },
    fromAmino(object) {
        return {
            delegator_address: object.delegator_address,
            validator_address: object.validator_address
        };
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_address = message.delegator_address;
        obj.validator_address = message.validator_address;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryDelegationRewardsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryDelegationRewardsRequest",
            value: exports.QueryDelegationRewardsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryDelegationRewardsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDelegationRewardsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.QueryDelegationRewardsRequest",
            value: exports.QueryDelegationRewardsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryDelegationRewardsResponse() {
    return {
        rewards: []
    };
}
exports.QueryDelegationRewardsResponse = {
    typeUrl: "/cosmos.distribution.v1beta1.QueryDelegationRewardsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.rewards) {
            coin_1.DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDelegationRewardsResponse();
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
        const message = createBaseQueryDelegationRewardsResponse();
        message.rewards = object.rewards?.map(e => coin_1.DecCoin.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            rewards: Array.isArray(object?.rewards) ? object.rewards.map((e) => coin_1.DecCoin.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.rewards) {
            obj.rewards = message.rewards.map(e => e ? coin_1.DecCoin.toSDK(e) : undefined);
        }
        else {
            obj.rewards = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            rewards: Array.isArray(object?.rewards) ? object.rewards.map((e) => coin_1.DecCoin.fromAmino(e)) : []
        };
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
        return exports.QueryDelegationRewardsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryDelegationRewardsResponse",
            value: exports.QueryDelegationRewardsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryDelegationRewardsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDelegationRewardsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.QueryDelegationRewardsResponse",
            value: exports.QueryDelegationRewardsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDelegationTotalRewardsRequest() {
    return {
        delegator_address: ""
    };
}
exports.QueryDelegationTotalRewardsRequest = {
    typeUrl: "/cosmos.distribution.v1beta1.QueryDelegationTotalRewardsRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.delegator_address !== "") {
            writer.uint32(10).string(message.delegator_address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDelegationTotalRewardsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegator_address = reader.string();
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
            delegator_address: (0, helpers_1.isSet)(object.delegator_address) ? String(object.delegator_address) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegator_address !== undefined && (obj.delegator_address = message.delegator_address);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryDelegationTotalRewardsRequest();
        message.delegator_address = object.delegator_address ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            delegator_address: object?.delegator_address
        };
    },
    toSDK(message) {
        const obj = {};
        obj.delegator_address = message.delegator_address;
        return obj;
    },
    fromAmino(object) {
        return {
            delegator_address: object.delegator_address
        };
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_address = message.delegator_address;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryDelegationTotalRewardsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryDelegationTotalRewardsRequest",
            value: exports.QueryDelegationTotalRewardsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryDelegationTotalRewardsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDelegationTotalRewardsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.QueryDelegationTotalRewardsRequest",
            value: exports.QueryDelegationTotalRewardsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryDelegationTotalRewardsResponse() {
    return {
        rewards: [],
        total: []
    };
}
exports.QueryDelegationTotalRewardsResponse = {
    typeUrl: "/cosmos.distribution.v1beta1.QueryDelegationTotalRewardsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.rewards) {
            distribution_1.DelegationDelegatorReward.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.total) {
            coin_1.DecCoin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDelegationTotalRewardsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rewards.push(distribution_1.DelegationDelegatorReward.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.total.push(coin_1.DecCoin.decode(reader, reader.uint32()));
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
            rewards: Array.isArray(object?.rewards) ? object.rewards.map((e) => distribution_1.DelegationDelegatorReward.fromJSON(e)) : [],
            total: Array.isArray(object?.total) ? object.total.map((e) => coin_1.DecCoin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.rewards) {
            obj.rewards = message.rewards.map(e => e ? distribution_1.DelegationDelegatorReward.toJSON(e) : undefined);
        }
        else {
            obj.rewards = [];
        }
        if (message.total) {
            obj.total = message.total.map(e => e ? coin_1.DecCoin.toJSON(e) : undefined);
        }
        else {
            obj.total = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryDelegationTotalRewardsResponse();
        message.rewards = object.rewards?.map(e => distribution_1.DelegationDelegatorReward.fromPartial(e)) || [];
        message.total = object.total?.map(e => coin_1.DecCoin.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            rewards: Array.isArray(object?.rewards) ? object.rewards.map((e) => distribution_1.DelegationDelegatorReward.fromSDK(e)) : [],
            total: Array.isArray(object?.total) ? object.total.map((e) => coin_1.DecCoin.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.rewards) {
            obj.rewards = message.rewards.map(e => e ? distribution_1.DelegationDelegatorReward.toSDK(e) : undefined);
        }
        else {
            obj.rewards = [];
        }
        if (message.total) {
            obj.total = message.total.map(e => e ? coin_1.DecCoin.toSDK(e) : undefined);
        }
        else {
            obj.total = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            rewards: Array.isArray(object?.rewards) ? object.rewards.map((e) => distribution_1.DelegationDelegatorReward.fromAmino(e)) : [],
            total: Array.isArray(object?.total) ? object.total.map((e) => coin_1.DecCoin.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.rewards) {
            obj.rewards = message.rewards.map(e => e ? distribution_1.DelegationDelegatorReward.toAmino(e) : undefined);
        }
        else {
            obj.rewards = [];
        }
        if (message.total) {
            obj.total = message.total.map(e => e ? coin_1.DecCoin.toAmino(e) : undefined);
        }
        else {
            obj.total = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryDelegationTotalRewardsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryDelegationTotalRewardsResponse",
            value: exports.QueryDelegationTotalRewardsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryDelegationTotalRewardsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDelegationTotalRewardsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.QueryDelegationTotalRewardsResponse",
            value: exports.QueryDelegationTotalRewardsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDelegatorValidatorsRequest() {
    return {
        delegator_address: ""
    };
}
exports.QueryDelegatorValidatorsRequest = {
    typeUrl: "/cosmos.distribution.v1beta1.QueryDelegatorValidatorsRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.delegator_address !== "") {
            writer.uint32(10).string(message.delegator_address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDelegatorValidatorsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegator_address = reader.string();
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
            delegator_address: (0, helpers_1.isSet)(object.delegator_address) ? String(object.delegator_address) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegator_address !== undefined && (obj.delegator_address = message.delegator_address);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryDelegatorValidatorsRequest();
        message.delegator_address = object.delegator_address ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            delegator_address: object?.delegator_address
        };
    },
    toSDK(message) {
        const obj = {};
        obj.delegator_address = message.delegator_address;
        return obj;
    },
    fromAmino(object) {
        return {
            delegator_address: object.delegator_address
        };
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_address = message.delegator_address;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryDelegatorValidatorsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryDelegatorValidatorsRequest",
            value: exports.QueryDelegatorValidatorsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryDelegatorValidatorsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDelegatorValidatorsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.QueryDelegatorValidatorsRequest",
            value: exports.QueryDelegatorValidatorsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryDelegatorValidatorsResponse() {
    return {
        validators: []
    };
}
exports.QueryDelegatorValidatorsResponse = {
    typeUrl: "/cosmos.distribution.v1beta1.QueryDelegatorValidatorsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.validators) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDelegatorValidatorsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validators.push(reader.string());
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
            validators: Array.isArray(object?.validators) ? object.validators.map((e) => String(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.validators) {
            obj.validators = message.validators.map(e => e);
        }
        else {
            obj.validators = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryDelegatorValidatorsResponse();
        message.validators = object.validators?.map(e => e) || [];
        return message;
    },
    fromSDK(object) {
        return {
            validators: Array.isArray(object?.validators) ? object.validators.map((e) => e) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.validators) {
            obj.validators = message.validators.map(e => e);
        }
        else {
            obj.validators = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            validators: Array.isArray(object?.validators) ? object.validators.map((e) => e) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.validators) {
            obj.validators = message.validators.map(e => e);
        }
        else {
            obj.validators = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryDelegatorValidatorsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryDelegatorValidatorsResponse",
            value: exports.QueryDelegatorValidatorsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryDelegatorValidatorsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDelegatorValidatorsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.QueryDelegatorValidatorsResponse",
            value: exports.QueryDelegatorValidatorsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDelegatorWithdrawAddressRequest() {
    return {
        delegator_address: ""
    };
}
exports.QueryDelegatorWithdrawAddressRequest = {
    typeUrl: "/cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.delegator_address !== "") {
            writer.uint32(10).string(message.delegator_address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDelegatorWithdrawAddressRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegator_address = reader.string();
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
            delegator_address: (0, helpers_1.isSet)(object.delegator_address) ? String(object.delegator_address) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegator_address !== undefined && (obj.delegator_address = message.delegator_address);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryDelegatorWithdrawAddressRequest();
        message.delegator_address = object.delegator_address ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            delegator_address: object?.delegator_address
        };
    },
    toSDK(message) {
        const obj = {};
        obj.delegator_address = message.delegator_address;
        return obj;
    },
    fromAmino(object) {
        return {
            delegator_address: object.delegator_address
        };
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_address = message.delegator_address;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryDelegatorWithdrawAddressRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryDelegatorWithdrawAddressRequest",
            value: exports.QueryDelegatorWithdrawAddressRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryDelegatorWithdrawAddressRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDelegatorWithdrawAddressRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressRequest",
            value: exports.QueryDelegatorWithdrawAddressRequest.encode(message).finish()
        };
    }
};
function createBaseQueryDelegatorWithdrawAddressResponse() {
    return {
        withdraw_address: ""
    };
}
exports.QueryDelegatorWithdrawAddressResponse = {
    typeUrl: "/cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.withdraw_address !== "") {
            writer.uint32(10).string(message.withdraw_address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDelegatorWithdrawAddressResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
            withdraw_address: (0, helpers_1.isSet)(object.withdraw_address) ? String(object.withdraw_address) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.withdraw_address !== undefined && (obj.withdraw_address = message.withdraw_address);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryDelegatorWithdrawAddressResponse();
        message.withdraw_address = object.withdraw_address ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            withdraw_address: object?.withdraw_address
        };
    },
    toSDK(message) {
        const obj = {};
        obj.withdraw_address = message.withdraw_address;
        return obj;
    },
    fromAmino(object) {
        return {
            withdraw_address: object.withdraw_address
        };
    },
    toAmino(message) {
        const obj = {};
        obj.withdraw_address = message.withdraw_address;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryDelegatorWithdrawAddressResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryDelegatorWithdrawAddressResponse",
            value: exports.QueryDelegatorWithdrawAddressResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryDelegatorWithdrawAddressResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDelegatorWithdrawAddressResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressResponse",
            value: exports.QueryDelegatorWithdrawAddressResponse.encode(message).finish()
        };
    }
};
function createBaseQueryCommunityPoolRequest() {
    return {};
}
exports.QueryCommunityPoolRequest = {
    typeUrl: "/cosmos.distribution.v1beta1.QueryCommunityPoolRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCommunityPoolRequest();
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
        const message = createBaseQueryCommunityPoolRequest();
        return message;
    },
    fromSDK(_) {
        return {};
    },
    toSDK(_) {
        const obj = {};
        return obj;
    },
    fromAmino(_) {
        return {};
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryCommunityPoolRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryCommunityPoolRequest",
            value: exports.QueryCommunityPoolRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryCommunityPoolRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryCommunityPoolRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.QueryCommunityPoolRequest",
            value: exports.QueryCommunityPoolRequest.encode(message).finish()
        };
    }
};
function createBaseQueryCommunityPoolResponse() {
    return {
        pool: []
    };
}
exports.QueryCommunityPoolResponse = {
    typeUrl: "/cosmos.distribution.v1beta1.QueryCommunityPoolResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.pool) {
            coin_1.DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCommunityPoolResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pool.push(coin_1.DecCoin.decode(reader, reader.uint32()));
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
            pool: Array.isArray(object?.pool) ? object.pool.map((e) => coin_1.DecCoin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.pool) {
            obj.pool = message.pool.map(e => e ? coin_1.DecCoin.toJSON(e) : undefined);
        }
        else {
            obj.pool = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryCommunityPoolResponse();
        message.pool = object.pool?.map(e => coin_1.DecCoin.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            pool: Array.isArray(object?.pool) ? object.pool.map((e) => coin_1.DecCoin.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.pool) {
            obj.pool = message.pool.map(e => e ? coin_1.DecCoin.toSDK(e) : undefined);
        }
        else {
            obj.pool = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            pool: Array.isArray(object?.pool) ? object.pool.map((e) => coin_1.DecCoin.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.pool) {
            obj.pool = message.pool.map(e => e ? coin_1.DecCoin.toAmino(e) : undefined);
        }
        else {
            obj.pool = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryCommunityPoolResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryCommunityPoolResponse",
            value: exports.QueryCommunityPoolResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryCommunityPoolResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryCommunityPoolResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.QueryCommunityPoolResponse",
            value: exports.QueryCommunityPoolResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=query.js.map
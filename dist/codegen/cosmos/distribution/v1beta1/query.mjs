//@ts-nocheck
import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { Params, ValidatorOutstandingRewards, ValidatorAccumulatedCommission, ValidatorSlashEvent, DelegationDelegatorReward } from "./distribution";
import { DecCoin } from "../../base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export const protobufPackage = "cosmos.distribution.v1beta1";
function createBaseQueryParamsRequest() {
    return {};
}
export const QueryParamsRequest = {
    typeUrl: "/cosmos.distribution.v1beta1.QueryParamsRequest",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    fromAmino(_) {
        const message = createBaseQueryParamsRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryParamsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryParamsRequest",
            value: QueryParamsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryParamsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.QueryParamsRequest",
            value: QueryParamsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryParamsResponse() {
    return {
        params: Params.fromPartial({})
    };
}
export const QueryParamsResponse = {
    typeUrl: "/cosmos.distribution.v1beta1.QueryParamsResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
            params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? Params.toAmino(message.params) : Params.fromPartial({});
        return obj;
    },
    fromAminoMsg(object) {
        return QueryParamsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryParamsResponse",
            value: QueryParamsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryParamsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.QueryParamsResponse",
            value: QueryParamsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryValidatorDistributionInfoRequest() {
    return {
        validator_address: ""
    };
}
export const QueryValidatorDistributionInfoRequest = {
    typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorDistributionInfoRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.validator_address !== "") {
            writer.uint32(10).string(message.validator_address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            validator_address: isSet(object.validator_address) ? String(object.validator_address) : ""
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
    fromAmino(object) {
        const message = createBaseQueryValidatorDistributionInfoRequest();
        if (object.validator_address !== undefined && object.validator_address !== null) {
            message.validator_address = object.validator_address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.validator_address = message.validator_address;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryValidatorDistributionInfoRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryValidatorDistributionInfoRequest",
            value: QueryValidatorDistributionInfoRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryValidatorDistributionInfoRequest.decode(message.value);
    },
    toProto(message) {
        return QueryValidatorDistributionInfoRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorDistributionInfoRequest",
            value: QueryValidatorDistributionInfoRequest.encode(message).finish()
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
export const QueryValidatorDistributionInfoResponse = {
    typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorDistributionInfoResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.operator_address !== "") {
            writer.uint32(10).string(message.operator_address);
        }
        for (const v of message.self_bond_rewards) {
            DecCoin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.commission) {
            DecCoin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValidatorDistributionInfoResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.operator_address = reader.string();
                    break;
                case 2:
                    message.self_bond_rewards.push(DecCoin.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.commission.push(DecCoin.decode(reader, reader.uint32()));
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
            operator_address: isSet(object.operator_address) ? String(object.operator_address) : "",
            self_bond_rewards: Array.isArray(object?.self_bond_rewards) ? object.self_bond_rewards.map((e) => DecCoin.fromJSON(e)) : [],
            commission: Array.isArray(object?.commission) ? object.commission.map((e) => DecCoin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.operator_address !== undefined && (obj.operator_address = message.operator_address);
        if (message.self_bond_rewards) {
            obj.self_bond_rewards = message.self_bond_rewards.map(e => e ? DecCoin.toJSON(e) : undefined);
        }
        else {
            obj.self_bond_rewards = [];
        }
        if (message.commission) {
            obj.commission = message.commission.map(e => e ? DecCoin.toJSON(e) : undefined);
        }
        else {
            obj.commission = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryValidatorDistributionInfoResponse();
        message.operator_address = object.operator_address ?? "";
        message.self_bond_rewards = object.self_bond_rewards?.map(e => DecCoin.fromPartial(e)) || [];
        message.commission = object.commission?.map(e => DecCoin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryValidatorDistributionInfoResponse();
        if (object.operator_address !== undefined && object.operator_address !== null) {
            message.operator_address = object.operator_address;
        }
        message.self_bond_rewards = object.self_bond_rewards?.map(e => DecCoin.fromAmino(e)) || [];
        message.commission = object.commission?.map(e => DecCoin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.operator_address = message.operator_address;
        if (message.self_bond_rewards) {
            obj.self_bond_rewards = message.self_bond_rewards.map(e => e ? DecCoin.toAmino(e) : undefined);
        }
        else {
            obj.self_bond_rewards = [];
        }
        if (message.commission) {
            obj.commission = message.commission.map(e => e ? DecCoin.toAmino(e) : undefined);
        }
        else {
            obj.commission = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryValidatorDistributionInfoResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryValidatorDistributionInfoResponse",
            value: QueryValidatorDistributionInfoResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryValidatorDistributionInfoResponse.decode(message.value);
    },
    toProto(message) {
        return QueryValidatorDistributionInfoResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorDistributionInfoResponse",
            value: QueryValidatorDistributionInfoResponse.encode(message).finish()
        };
    }
};
function createBaseQueryValidatorOutstandingRewardsRequest() {
    return {
        validator_address: ""
    };
}
export const QueryValidatorOutstandingRewardsRequest = {
    typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.validator_address !== "") {
            writer.uint32(10).string(message.validator_address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            validator_address: isSet(object.validator_address) ? String(object.validator_address) : ""
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
    fromAmino(object) {
        const message = createBaseQueryValidatorOutstandingRewardsRequest();
        if (object.validator_address !== undefined && object.validator_address !== null) {
            message.validator_address = object.validator_address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.validator_address = message.validator_address;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryValidatorOutstandingRewardsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryValidatorOutstandingRewardsRequest",
            value: QueryValidatorOutstandingRewardsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryValidatorOutstandingRewardsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryValidatorOutstandingRewardsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsRequest",
            value: QueryValidatorOutstandingRewardsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryValidatorOutstandingRewardsResponse() {
    return {
        rewards: ValidatorOutstandingRewards.fromPartial({})
    };
}
export const QueryValidatorOutstandingRewardsResponse = {
    typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.rewards !== undefined) {
            ValidatorOutstandingRewards.encode(message.rewards, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValidatorOutstandingRewardsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rewards = ValidatorOutstandingRewards.decode(reader, reader.uint32());
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
            rewards: isSet(object.rewards) ? ValidatorOutstandingRewards.fromJSON(object.rewards) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.rewards !== undefined && (obj.rewards = message.rewards ? ValidatorOutstandingRewards.toJSON(message.rewards) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryValidatorOutstandingRewardsResponse();
        message.rewards = object.rewards !== undefined && object.rewards !== null ? ValidatorOutstandingRewards.fromPartial(object.rewards) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryValidatorOutstandingRewardsResponse();
        if (object.rewards !== undefined && object.rewards !== null) {
            message.rewards = ValidatorOutstandingRewards.fromAmino(object.rewards);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.rewards = message.rewards ? ValidatorOutstandingRewards.toAmino(message.rewards) : ValidatorOutstandingRewards.fromPartial({});
        return obj;
    },
    fromAminoMsg(object) {
        return QueryValidatorOutstandingRewardsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryValidatorOutstandingRewardsResponse",
            value: QueryValidatorOutstandingRewardsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryValidatorOutstandingRewardsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryValidatorOutstandingRewardsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsResponse",
            value: QueryValidatorOutstandingRewardsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryValidatorCommissionRequest() {
    return {
        validator_address: ""
    };
}
export const QueryValidatorCommissionRequest = {
    typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorCommissionRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.validator_address !== "") {
            writer.uint32(10).string(message.validator_address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            validator_address: isSet(object.validator_address) ? String(object.validator_address) : ""
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
    fromAmino(object) {
        const message = createBaseQueryValidatorCommissionRequest();
        if (object.validator_address !== undefined && object.validator_address !== null) {
            message.validator_address = object.validator_address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.validator_address = message.validator_address;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryValidatorCommissionRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryValidatorCommissionRequest",
            value: QueryValidatorCommissionRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryValidatorCommissionRequest.decode(message.value);
    },
    toProto(message) {
        return QueryValidatorCommissionRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorCommissionRequest",
            value: QueryValidatorCommissionRequest.encode(message).finish()
        };
    }
};
function createBaseQueryValidatorCommissionResponse() {
    return {
        commission: ValidatorAccumulatedCommission.fromPartial({})
    };
}
export const QueryValidatorCommissionResponse = {
    typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorCommissionResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.commission !== undefined) {
            ValidatorAccumulatedCommission.encode(message.commission, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValidatorCommissionResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.commission = ValidatorAccumulatedCommission.decode(reader, reader.uint32());
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
            commission: isSet(object.commission) ? ValidatorAccumulatedCommission.fromJSON(object.commission) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.commission !== undefined && (obj.commission = message.commission ? ValidatorAccumulatedCommission.toJSON(message.commission) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryValidatorCommissionResponse();
        message.commission = object.commission !== undefined && object.commission !== null ? ValidatorAccumulatedCommission.fromPartial(object.commission) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryValidatorCommissionResponse();
        if (object.commission !== undefined && object.commission !== null) {
            message.commission = ValidatorAccumulatedCommission.fromAmino(object.commission);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.commission = message.commission ? ValidatorAccumulatedCommission.toAmino(message.commission) : ValidatorAccumulatedCommission.fromPartial({});
        return obj;
    },
    fromAminoMsg(object) {
        return QueryValidatorCommissionResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryValidatorCommissionResponse",
            value: QueryValidatorCommissionResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryValidatorCommissionResponse.decode(message.value);
    },
    toProto(message) {
        return QueryValidatorCommissionResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorCommissionResponse",
            value: QueryValidatorCommissionResponse.encode(message).finish()
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
export const QueryValidatorSlashesRequest = {
    typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorSlashesRequest",
    encode(message, writer = BinaryWriter.create()) {
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
            PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
            validator_address: isSet(object.validator_address) ? String(object.validator_address) : "",
            starting_height: isSet(object.starting_height) ? BigInt(object.starting_height.toString()) : BigInt(0),
            ending_height: isSet(object.ending_height) ? BigInt(object.ending_height.toString()) : BigInt(0),
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.validator_address !== undefined && (obj.validator_address = message.validator_address);
        message.starting_height !== undefined && (obj.starting_height = (message.starting_height || BigInt(0)).toString());
        message.ending_height !== undefined && (obj.ending_height = (message.ending_height || BigInt(0)).toString());
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryValidatorSlashesRequest();
        message.validator_address = object.validator_address ?? "";
        message.starting_height = object.starting_height !== undefined && object.starting_height !== null ? BigInt(object.starting_height.toString()) : BigInt(0);
        message.ending_height = object.ending_height !== undefined && object.ending_height !== null ? BigInt(object.ending_height.toString()) : BigInt(0);
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryValidatorSlashesRequest();
        if (object.validator_address !== undefined && object.validator_address !== null) {
            message.validator_address = object.validator_address;
        }
        if (object.starting_height !== undefined && object.starting_height !== null) {
            message.starting_height = BigInt(object.starting_height);
        }
        if (object.ending_height !== undefined && object.ending_height !== null) {
            message.ending_height = BigInt(object.ending_height);
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.validator_address = message.validator_address;
        obj.starting_height = message.starting_height ? message.starting_height.toString() : undefined;
        obj.ending_height = message.ending_height ? message.ending_height.toString() : undefined;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryValidatorSlashesRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryValidatorSlashesRequest",
            value: QueryValidatorSlashesRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryValidatorSlashesRequest.decode(message.value);
    },
    toProto(message) {
        return QueryValidatorSlashesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorSlashesRequest",
            value: QueryValidatorSlashesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryValidatorSlashesResponse() {
    return {
        slashes: [],
        pagination: undefined
    };
}
export const QueryValidatorSlashesResponse = {
    typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorSlashesResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.slashes) {
            ValidatorSlashEvent.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValidatorSlashesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.slashes.push(ValidatorSlashEvent.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
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
            slashes: Array.isArray(object?.slashes) ? object.slashes.map((e) => ValidatorSlashEvent.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.slashes) {
            obj.slashes = message.slashes.map(e => e ? ValidatorSlashEvent.toJSON(e) : undefined);
        }
        else {
            obj.slashes = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryValidatorSlashesResponse();
        message.slashes = object.slashes?.map(e => ValidatorSlashEvent.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryValidatorSlashesResponse();
        message.slashes = object.slashes?.map(e => ValidatorSlashEvent.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.slashes) {
            obj.slashes = message.slashes.map(e => e ? ValidatorSlashEvent.toAmino(e) : undefined);
        }
        else {
            obj.slashes = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryValidatorSlashesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryValidatorSlashesResponse",
            value: QueryValidatorSlashesResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryValidatorSlashesResponse.decode(message.value);
    },
    toProto(message) {
        return QueryValidatorSlashesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorSlashesResponse",
            value: QueryValidatorSlashesResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDelegationRewardsRequest() {
    return {
        delegator_address: "",
        validator_address: ""
    };
}
export const QueryDelegationRewardsRequest = {
    typeUrl: "/cosmos.distribution.v1beta1.QueryDelegationRewardsRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.delegator_address !== "") {
            writer.uint32(10).string(message.delegator_address);
        }
        if (message.validator_address !== "") {
            writer.uint32(18).string(message.validator_address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            delegator_address: isSet(object.delegator_address) ? String(object.delegator_address) : "",
            validator_address: isSet(object.validator_address) ? String(object.validator_address) : ""
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
    fromAmino(object) {
        const message = createBaseQueryDelegationRewardsRequest();
        if (object.delegator_address !== undefined && object.delegator_address !== null) {
            message.delegator_address = object.delegator_address;
        }
        if (object.validator_address !== undefined && object.validator_address !== null) {
            message.validator_address = object.validator_address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_address = message.delegator_address;
        obj.validator_address = message.validator_address;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDelegationRewardsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryDelegationRewardsRequest",
            value: QueryDelegationRewardsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryDelegationRewardsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryDelegationRewardsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.QueryDelegationRewardsRequest",
            value: QueryDelegationRewardsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryDelegationRewardsResponse() {
    return {
        rewards: []
    };
}
export const QueryDelegationRewardsResponse = {
    typeUrl: "/cosmos.distribution.v1beta1.QueryDelegationRewardsResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.rewards) {
            DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDelegationRewardsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rewards.push(DecCoin.decode(reader, reader.uint32()));
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
            rewards: Array.isArray(object?.rewards) ? object.rewards.map((e) => DecCoin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.rewards) {
            obj.rewards = message.rewards.map(e => e ? DecCoin.toJSON(e) : undefined);
        }
        else {
            obj.rewards = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryDelegationRewardsResponse();
        message.rewards = object.rewards?.map(e => DecCoin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryDelegationRewardsResponse();
        message.rewards = object.rewards?.map(e => DecCoin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.rewards) {
            obj.rewards = message.rewards.map(e => e ? DecCoin.toAmino(e) : undefined);
        }
        else {
            obj.rewards = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDelegationRewardsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryDelegationRewardsResponse",
            value: QueryDelegationRewardsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryDelegationRewardsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryDelegationRewardsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.QueryDelegationRewardsResponse",
            value: QueryDelegationRewardsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDelegationTotalRewardsRequest() {
    return {
        delegator_address: ""
    };
}
export const QueryDelegationTotalRewardsRequest = {
    typeUrl: "/cosmos.distribution.v1beta1.QueryDelegationTotalRewardsRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.delegator_address !== "") {
            writer.uint32(10).string(message.delegator_address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            delegator_address: isSet(object.delegator_address) ? String(object.delegator_address) : ""
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
    fromAmino(object) {
        const message = createBaseQueryDelegationTotalRewardsRequest();
        if (object.delegator_address !== undefined && object.delegator_address !== null) {
            message.delegator_address = object.delegator_address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_address = message.delegator_address;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDelegationTotalRewardsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryDelegationTotalRewardsRequest",
            value: QueryDelegationTotalRewardsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryDelegationTotalRewardsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryDelegationTotalRewardsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.QueryDelegationTotalRewardsRequest",
            value: QueryDelegationTotalRewardsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryDelegationTotalRewardsResponse() {
    return {
        rewards: [],
        total: []
    };
}
export const QueryDelegationTotalRewardsResponse = {
    typeUrl: "/cosmos.distribution.v1beta1.QueryDelegationTotalRewardsResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.rewards) {
            DelegationDelegatorReward.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.total) {
            DecCoin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDelegationTotalRewardsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rewards.push(DelegationDelegatorReward.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.total.push(DecCoin.decode(reader, reader.uint32()));
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
            rewards: Array.isArray(object?.rewards) ? object.rewards.map((e) => DelegationDelegatorReward.fromJSON(e)) : [],
            total: Array.isArray(object?.total) ? object.total.map((e) => DecCoin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.rewards) {
            obj.rewards = message.rewards.map(e => e ? DelegationDelegatorReward.toJSON(e) : undefined);
        }
        else {
            obj.rewards = [];
        }
        if (message.total) {
            obj.total = message.total.map(e => e ? DecCoin.toJSON(e) : undefined);
        }
        else {
            obj.total = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryDelegationTotalRewardsResponse();
        message.rewards = object.rewards?.map(e => DelegationDelegatorReward.fromPartial(e)) || [];
        message.total = object.total?.map(e => DecCoin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryDelegationTotalRewardsResponse();
        message.rewards = object.rewards?.map(e => DelegationDelegatorReward.fromAmino(e)) || [];
        message.total = object.total?.map(e => DecCoin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.rewards) {
            obj.rewards = message.rewards.map(e => e ? DelegationDelegatorReward.toAmino(e) : undefined);
        }
        else {
            obj.rewards = [];
        }
        if (message.total) {
            obj.total = message.total.map(e => e ? DecCoin.toAmino(e) : undefined);
        }
        else {
            obj.total = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDelegationTotalRewardsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryDelegationTotalRewardsResponse",
            value: QueryDelegationTotalRewardsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryDelegationTotalRewardsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryDelegationTotalRewardsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.QueryDelegationTotalRewardsResponse",
            value: QueryDelegationTotalRewardsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDelegatorValidatorsRequest() {
    return {
        delegator_address: ""
    };
}
export const QueryDelegatorValidatorsRequest = {
    typeUrl: "/cosmos.distribution.v1beta1.QueryDelegatorValidatorsRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.delegator_address !== "") {
            writer.uint32(10).string(message.delegator_address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            delegator_address: isSet(object.delegator_address) ? String(object.delegator_address) : ""
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
    fromAmino(object) {
        const message = createBaseQueryDelegatorValidatorsRequest();
        if (object.delegator_address !== undefined && object.delegator_address !== null) {
            message.delegator_address = object.delegator_address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_address = message.delegator_address;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDelegatorValidatorsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryDelegatorValidatorsRequest",
            value: QueryDelegatorValidatorsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryDelegatorValidatorsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryDelegatorValidatorsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.QueryDelegatorValidatorsRequest",
            value: QueryDelegatorValidatorsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryDelegatorValidatorsResponse() {
    return {
        validators: []
    };
}
export const QueryDelegatorValidatorsResponse = {
    typeUrl: "/cosmos.distribution.v1beta1.QueryDelegatorValidatorsResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.validators) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    fromAmino(object) {
        const message = createBaseQueryDelegatorValidatorsResponse();
        message.validators = object.validators?.map(e => e) || [];
        return message;
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
        return QueryDelegatorValidatorsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryDelegatorValidatorsResponse",
            value: QueryDelegatorValidatorsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryDelegatorValidatorsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryDelegatorValidatorsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.QueryDelegatorValidatorsResponse",
            value: QueryDelegatorValidatorsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDelegatorWithdrawAddressRequest() {
    return {
        delegator_address: ""
    };
}
export const QueryDelegatorWithdrawAddressRequest = {
    typeUrl: "/cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.delegator_address !== "") {
            writer.uint32(10).string(message.delegator_address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            delegator_address: isSet(object.delegator_address) ? String(object.delegator_address) : ""
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
    fromAmino(object) {
        const message = createBaseQueryDelegatorWithdrawAddressRequest();
        if (object.delegator_address !== undefined && object.delegator_address !== null) {
            message.delegator_address = object.delegator_address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_address = message.delegator_address;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDelegatorWithdrawAddressRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryDelegatorWithdrawAddressRequest",
            value: QueryDelegatorWithdrawAddressRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryDelegatorWithdrawAddressRequest.decode(message.value);
    },
    toProto(message) {
        return QueryDelegatorWithdrawAddressRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressRequest",
            value: QueryDelegatorWithdrawAddressRequest.encode(message).finish()
        };
    }
};
function createBaseQueryDelegatorWithdrawAddressResponse() {
    return {
        withdraw_address: ""
    };
}
export const QueryDelegatorWithdrawAddressResponse = {
    typeUrl: "/cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.withdraw_address !== "") {
            writer.uint32(10).string(message.withdraw_address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            withdraw_address: isSet(object.withdraw_address) ? String(object.withdraw_address) : ""
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
    fromAmino(object) {
        const message = createBaseQueryDelegatorWithdrawAddressResponse();
        if (object.withdraw_address !== undefined && object.withdraw_address !== null) {
            message.withdraw_address = object.withdraw_address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.withdraw_address = message.withdraw_address;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDelegatorWithdrawAddressResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryDelegatorWithdrawAddressResponse",
            value: QueryDelegatorWithdrawAddressResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryDelegatorWithdrawAddressResponse.decode(message.value);
    },
    toProto(message) {
        return QueryDelegatorWithdrawAddressResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressResponse",
            value: QueryDelegatorWithdrawAddressResponse.encode(message).finish()
        };
    }
};
function createBaseQueryCommunityPoolRequest() {
    return {};
}
export const QueryCommunityPoolRequest = {
    typeUrl: "/cosmos.distribution.v1beta1.QueryCommunityPoolRequest",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    fromAmino(_) {
        const message = createBaseQueryCommunityPoolRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryCommunityPoolRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryCommunityPoolRequest",
            value: QueryCommunityPoolRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryCommunityPoolRequest.decode(message.value);
    },
    toProto(message) {
        return QueryCommunityPoolRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.QueryCommunityPoolRequest",
            value: QueryCommunityPoolRequest.encode(message).finish()
        };
    }
};
function createBaseQueryCommunityPoolResponse() {
    return {
        pool: []
    };
}
export const QueryCommunityPoolResponse = {
    typeUrl: "/cosmos.distribution.v1beta1.QueryCommunityPoolResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.pool) {
            DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCommunityPoolResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pool.push(DecCoin.decode(reader, reader.uint32()));
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
            pool: Array.isArray(object?.pool) ? object.pool.map((e) => DecCoin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.pool) {
            obj.pool = message.pool.map(e => e ? DecCoin.toJSON(e) : undefined);
        }
        else {
            obj.pool = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryCommunityPoolResponse();
        message.pool = object.pool?.map(e => DecCoin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryCommunityPoolResponse();
        message.pool = object.pool?.map(e => DecCoin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.pool) {
            obj.pool = message.pool.map(e => e ? DecCoin.toAmino(e) : undefined);
        }
        else {
            obj.pool = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryCommunityPoolResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryCommunityPoolResponse",
            value: QueryCommunityPoolResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryCommunityPoolResponse.decode(message.value);
    },
    toProto(message) {
        return QueryCommunityPoolResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.QueryCommunityPoolResponse",
            value: QueryCommunityPoolResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=query.js.map
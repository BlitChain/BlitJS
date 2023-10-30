"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryParamsResponse = exports.QueryParamsRequest = exports.QueryPoolResponse = exports.QueryPoolRequest = exports.QueryHistoricalInfoResponse = exports.QueryHistoricalInfoRequest = exports.QueryDelegatorValidatorResponse = exports.QueryDelegatorValidatorRequest = exports.QueryDelegatorValidatorsResponse = exports.QueryDelegatorValidatorsRequest = exports.QueryRedelegationsResponse = exports.QueryRedelegationsRequest = exports.QueryDelegatorUnbondingDelegationsResponse = exports.QueryDelegatorUnbondingDelegationsRequest = exports.QueryDelegatorDelegationsResponse = exports.QueryDelegatorDelegationsRequest = exports.QueryUnbondingDelegationResponse = exports.QueryUnbondingDelegationRequest = exports.QueryDelegationResponse = exports.QueryDelegationRequest = exports.QueryValidatorUnbondingDelegationsResponse = exports.QueryValidatorUnbondingDelegationsRequest = exports.QueryValidatorDelegationsResponse = exports.QueryValidatorDelegationsRequest = exports.QueryValidatorResponse = exports.QueryValidatorRequest = exports.QueryValidatorsResponse = exports.QueryValidatorsRequest = void 0;
//@ts-nocheck
const pagination_1 = require("../../base/query/v1beta1/pagination");
const staking_1 = require("./staking");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
function createBaseQueryValidatorsRequest() {
    return {
        status: "",
        pagination: undefined
    };
}
exports.QueryValidatorsRequest = {
    typeUrl: "/cosmos.staking.v1beta1.QueryValidatorsRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.status !== "") {
            writer.uint32(10).string(message.status);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValidatorsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.status = reader.string();
                    break;
                case 2:
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
            status: (0, helpers_1.isSet)(object.status) ? String(object.status) : "",
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.status !== undefined && (obj.status = message.status);
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryValidatorsRequest();
        message.status = object.status ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            status: object?.status,
            pagination: object.pagination ? pagination_1.PageRequest.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.status = message.status;
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            status: object.status,
            pagination: object?.pagination ? pagination_1.PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.status = message.status;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryValidatorsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryValidatorsRequest",
            value: exports.QueryValidatorsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryValidatorsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryValidatorsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.QueryValidatorsRequest",
            value: exports.QueryValidatorsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryValidatorsResponse() {
    return {
        validators: [],
        pagination: undefined
    };
}
exports.QueryValidatorsResponse = {
    typeUrl: "/cosmos.staking.v1beta1.QueryValidatorsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.validators) {
            staking_1.Validator.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValidatorsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validators.push(staking_1.Validator.decode(reader, reader.uint32()));
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
            validators: Array.isArray(object?.validators) ? object.validators.map((e) => staking_1.Validator.fromJSON(e)) : [],
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.validators) {
            obj.validators = message.validators.map(e => e ? staking_1.Validator.toJSON(e) : undefined);
        }
        else {
            obj.validators = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryValidatorsResponse();
        message.validators = object.validators?.map(e => staking_1.Validator.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            validators: Array.isArray(object?.validators) ? object.validators.map((e) => staking_1.Validator.fromSDK(e)) : [],
            pagination: object.pagination ? pagination_1.PageResponse.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.validators) {
            obj.validators = message.validators.map(e => e ? staking_1.Validator.toSDK(e) : undefined);
        }
        else {
            obj.validators = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            validators: Array.isArray(object?.validators) ? object.validators.map((e) => staking_1.Validator.fromAmino(e)) : [],
            pagination: object?.pagination ? pagination_1.PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.validators) {
            obj.validators = message.validators.map(e => e ? staking_1.Validator.toAmino(e) : undefined);
        }
        else {
            obj.validators = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryValidatorsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryValidatorsResponse",
            value: exports.QueryValidatorsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryValidatorsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryValidatorsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.QueryValidatorsResponse",
            value: exports.QueryValidatorsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryValidatorRequest() {
    return {
        validator_addr: ""
    };
}
exports.QueryValidatorRequest = {
    typeUrl: "/cosmos.staking.v1beta1.QueryValidatorRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.validator_addr !== "") {
            writer.uint32(10).string(message.validator_addr);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValidatorRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator_addr = reader.string();
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
            validator_addr: (0, helpers_1.isSet)(object.validator_addr) ? String(object.validator_addr) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.validator_addr !== undefined && (obj.validator_addr = message.validator_addr);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryValidatorRequest();
        message.validator_addr = object.validator_addr ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            validator_addr: object?.validator_addr
        };
    },
    toSDK(message) {
        const obj = {};
        obj.validator_addr = message.validator_addr;
        return obj;
    },
    fromAmino(object) {
        return {
            validator_addr: object.validator_addr
        };
    },
    toAmino(message) {
        const obj = {};
        obj.validator_addr = message.validator_addr;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryValidatorRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryValidatorRequest",
            value: exports.QueryValidatorRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryValidatorRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryValidatorRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.QueryValidatorRequest",
            value: exports.QueryValidatorRequest.encode(message).finish()
        };
    }
};
function createBaseQueryValidatorResponse() {
    return {
        validator: staking_1.Validator.fromPartial({})
    };
}
exports.QueryValidatorResponse = {
    typeUrl: "/cosmos.staking.v1beta1.QueryValidatorResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.validator !== undefined) {
            staking_1.Validator.encode(message.validator, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValidatorResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator = staking_1.Validator.decode(reader, reader.uint32());
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
            validator: (0, helpers_1.isSet)(object.validator) ? staking_1.Validator.fromJSON(object.validator) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.validator !== undefined && (obj.validator = message.validator ? staking_1.Validator.toJSON(message.validator) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryValidatorResponse();
        message.validator = object.validator !== undefined && object.validator !== null ? staking_1.Validator.fromPartial(object.validator) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            validator: object.validator ? staking_1.Validator.fromSDK(object.validator) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.validator !== undefined && (obj.validator = message.validator ? staking_1.Validator.toSDK(message.validator) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            validator: object?.validator ? staking_1.Validator.fromAmino(object.validator) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.validator = message.validator ? staking_1.Validator.toAmino(message.validator) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryValidatorResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryValidatorResponse",
            value: exports.QueryValidatorResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryValidatorResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryValidatorResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.QueryValidatorResponse",
            value: exports.QueryValidatorResponse.encode(message).finish()
        };
    }
};
function createBaseQueryValidatorDelegationsRequest() {
    return {
        validator_addr: "",
        pagination: undefined
    };
}
exports.QueryValidatorDelegationsRequest = {
    typeUrl: "/cosmos.staking.v1beta1.QueryValidatorDelegationsRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.validator_addr !== "") {
            writer.uint32(10).string(message.validator_addr);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValidatorDelegationsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator_addr = reader.string();
                    break;
                case 2:
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
            validator_addr: (0, helpers_1.isSet)(object.validator_addr) ? String(object.validator_addr) : "",
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.validator_addr !== undefined && (obj.validator_addr = message.validator_addr);
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryValidatorDelegationsRequest();
        message.validator_addr = object.validator_addr ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            validator_addr: object?.validator_addr,
            pagination: object.pagination ? pagination_1.PageRequest.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.validator_addr = message.validator_addr;
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            validator_addr: object.validator_addr,
            pagination: object?.pagination ? pagination_1.PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.validator_addr = message.validator_addr;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryValidatorDelegationsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryValidatorDelegationsRequest",
            value: exports.QueryValidatorDelegationsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryValidatorDelegationsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryValidatorDelegationsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.QueryValidatorDelegationsRequest",
            value: exports.QueryValidatorDelegationsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryValidatorDelegationsResponse() {
    return {
        delegation_responses: [],
        pagination: undefined
    };
}
exports.QueryValidatorDelegationsResponse = {
    typeUrl: "/cosmos.staking.v1beta1.QueryValidatorDelegationsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.delegation_responses) {
            staking_1.DelegationResponse.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValidatorDelegationsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegation_responses.push(staking_1.DelegationResponse.decode(reader, reader.uint32()));
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
            delegation_responses: Array.isArray(object?.delegation_responses) ? object.delegation_responses.map((e) => staking_1.DelegationResponse.fromJSON(e)) : [],
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.delegation_responses) {
            obj.delegation_responses = message.delegation_responses.map(e => e ? staking_1.DelegationResponse.toJSON(e) : undefined);
        }
        else {
            obj.delegation_responses = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryValidatorDelegationsResponse();
        message.delegation_responses = object.delegation_responses?.map(e => staking_1.DelegationResponse.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            delegation_responses: Array.isArray(object?.delegation_responses) ? object.delegation_responses.map((e) => staking_1.DelegationResponse.fromSDK(e)) : [],
            pagination: object.pagination ? pagination_1.PageResponse.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.delegation_responses) {
            obj.delegation_responses = message.delegation_responses.map(e => e ? staking_1.DelegationResponse.toSDK(e) : undefined);
        }
        else {
            obj.delegation_responses = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            delegation_responses: Array.isArray(object?.delegation_responses) ? object.delegation_responses.map((e) => staking_1.DelegationResponse.fromAmino(e)) : [],
            pagination: object?.pagination ? pagination_1.PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.delegation_responses) {
            obj.delegation_responses = message.delegation_responses.map(e => e ? staking_1.DelegationResponse.toAmino(e) : undefined);
        }
        else {
            obj.delegation_responses = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryValidatorDelegationsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryValidatorDelegationsResponse",
            value: exports.QueryValidatorDelegationsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryValidatorDelegationsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryValidatorDelegationsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.QueryValidatorDelegationsResponse",
            value: exports.QueryValidatorDelegationsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryValidatorUnbondingDelegationsRequest() {
    return {
        validator_addr: "",
        pagination: undefined
    };
}
exports.QueryValidatorUnbondingDelegationsRequest = {
    typeUrl: "/cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.validator_addr !== "") {
            writer.uint32(10).string(message.validator_addr);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValidatorUnbondingDelegationsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator_addr = reader.string();
                    break;
                case 2:
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
            validator_addr: (0, helpers_1.isSet)(object.validator_addr) ? String(object.validator_addr) : "",
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.validator_addr !== undefined && (obj.validator_addr = message.validator_addr);
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryValidatorUnbondingDelegationsRequest();
        message.validator_addr = object.validator_addr ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            validator_addr: object?.validator_addr,
            pagination: object.pagination ? pagination_1.PageRequest.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.validator_addr = message.validator_addr;
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            validator_addr: object.validator_addr,
            pagination: object?.pagination ? pagination_1.PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.validator_addr = message.validator_addr;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryValidatorUnbondingDelegationsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryValidatorUnbondingDelegationsRequest",
            value: exports.QueryValidatorUnbondingDelegationsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryValidatorUnbondingDelegationsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryValidatorUnbondingDelegationsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsRequest",
            value: exports.QueryValidatorUnbondingDelegationsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryValidatorUnbondingDelegationsResponse() {
    return {
        unbonding_responses: [],
        pagination: undefined
    };
}
exports.QueryValidatorUnbondingDelegationsResponse = {
    typeUrl: "/cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.unbonding_responses) {
            staking_1.UnbondingDelegation.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValidatorUnbondingDelegationsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.unbonding_responses.push(staking_1.UnbondingDelegation.decode(reader, reader.uint32()));
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
            unbonding_responses: Array.isArray(object?.unbonding_responses) ? object.unbonding_responses.map((e) => staking_1.UnbondingDelegation.fromJSON(e)) : [],
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.unbonding_responses) {
            obj.unbonding_responses = message.unbonding_responses.map(e => e ? staking_1.UnbondingDelegation.toJSON(e) : undefined);
        }
        else {
            obj.unbonding_responses = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryValidatorUnbondingDelegationsResponse();
        message.unbonding_responses = object.unbonding_responses?.map(e => staking_1.UnbondingDelegation.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            unbonding_responses: Array.isArray(object?.unbonding_responses) ? object.unbonding_responses.map((e) => staking_1.UnbondingDelegation.fromSDK(e)) : [],
            pagination: object.pagination ? pagination_1.PageResponse.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.unbonding_responses) {
            obj.unbonding_responses = message.unbonding_responses.map(e => e ? staking_1.UnbondingDelegation.toSDK(e) : undefined);
        }
        else {
            obj.unbonding_responses = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            unbonding_responses: Array.isArray(object?.unbonding_responses) ? object.unbonding_responses.map((e) => staking_1.UnbondingDelegation.fromAmino(e)) : [],
            pagination: object?.pagination ? pagination_1.PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.unbonding_responses) {
            obj.unbonding_responses = message.unbonding_responses.map(e => e ? staking_1.UnbondingDelegation.toAmino(e) : undefined);
        }
        else {
            obj.unbonding_responses = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryValidatorUnbondingDelegationsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryValidatorUnbondingDelegationsResponse",
            value: exports.QueryValidatorUnbondingDelegationsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryValidatorUnbondingDelegationsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryValidatorUnbondingDelegationsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsResponse",
            value: exports.QueryValidatorUnbondingDelegationsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDelegationRequest() {
    return {
        delegator_addr: "",
        validator_addr: ""
    };
}
exports.QueryDelegationRequest = {
    typeUrl: "/cosmos.staking.v1beta1.QueryDelegationRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.delegator_addr !== "") {
            writer.uint32(10).string(message.delegator_addr);
        }
        if (message.validator_addr !== "") {
            writer.uint32(18).string(message.validator_addr);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDelegationRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegator_addr = reader.string();
                    break;
                case 2:
                    message.validator_addr = reader.string();
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
            delegator_addr: (0, helpers_1.isSet)(object.delegator_addr) ? String(object.delegator_addr) : "",
            validator_addr: (0, helpers_1.isSet)(object.validator_addr) ? String(object.validator_addr) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegator_addr !== undefined && (obj.delegator_addr = message.delegator_addr);
        message.validator_addr !== undefined && (obj.validator_addr = message.validator_addr);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryDelegationRequest();
        message.delegator_addr = object.delegator_addr ?? "";
        message.validator_addr = object.validator_addr ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            delegator_addr: object?.delegator_addr,
            validator_addr: object?.validator_addr
        };
    },
    toSDK(message) {
        const obj = {};
        obj.delegator_addr = message.delegator_addr;
        obj.validator_addr = message.validator_addr;
        return obj;
    },
    fromAmino(object) {
        return {
            delegator_addr: object.delegator_addr,
            validator_addr: object.validator_addr
        };
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_addr = message.delegator_addr;
        obj.validator_addr = message.validator_addr;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryDelegationRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryDelegationRequest",
            value: exports.QueryDelegationRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryDelegationRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDelegationRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.QueryDelegationRequest",
            value: exports.QueryDelegationRequest.encode(message).finish()
        };
    }
};
function createBaseQueryDelegationResponse() {
    return {
        delegation_response: undefined
    };
}
exports.QueryDelegationResponse = {
    typeUrl: "/cosmos.staking.v1beta1.QueryDelegationResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.delegation_response !== undefined) {
            staking_1.DelegationResponse.encode(message.delegation_response, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDelegationResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegation_response = staking_1.DelegationResponse.decode(reader, reader.uint32());
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
            delegation_response: (0, helpers_1.isSet)(object.delegation_response) ? staking_1.DelegationResponse.fromJSON(object.delegation_response) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegation_response !== undefined && (obj.delegation_response = message.delegation_response ? staking_1.DelegationResponse.toJSON(message.delegation_response) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryDelegationResponse();
        message.delegation_response = object.delegation_response !== undefined && object.delegation_response !== null ? staking_1.DelegationResponse.fromPartial(object.delegation_response) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            delegation_response: object.delegation_response ? staking_1.DelegationResponse.fromSDK(object.delegation_response) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.delegation_response !== undefined && (obj.delegation_response = message.delegation_response ? staking_1.DelegationResponse.toSDK(message.delegation_response) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            delegation_response: object?.delegation_response ? staking_1.DelegationResponse.fromAmino(object.delegation_response) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.delegation_response = message.delegation_response ? staking_1.DelegationResponse.toAmino(message.delegation_response) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryDelegationResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryDelegationResponse",
            value: exports.QueryDelegationResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryDelegationResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDelegationResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.QueryDelegationResponse",
            value: exports.QueryDelegationResponse.encode(message).finish()
        };
    }
};
function createBaseQueryUnbondingDelegationRequest() {
    return {
        delegator_addr: "",
        validator_addr: ""
    };
}
exports.QueryUnbondingDelegationRequest = {
    typeUrl: "/cosmos.staking.v1beta1.QueryUnbondingDelegationRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.delegator_addr !== "") {
            writer.uint32(10).string(message.delegator_addr);
        }
        if (message.validator_addr !== "") {
            writer.uint32(18).string(message.validator_addr);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryUnbondingDelegationRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegator_addr = reader.string();
                    break;
                case 2:
                    message.validator_addr = reader.string();
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
            delegator_addr: (0, helpers_1.isSet)(object.delegator_addr) ? String(object.delegator_addr) : "",
            validator_addr: (0, helpers_1.isSet)(object.validator_addr) ? String(object.validator_addr) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegator_addr !== undefined && (obj.delegator_addr = message.delegator_addr);
        message.validator_addr !== undefined && (obj.validator_addr = message.validator_addr);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryUnbondingDelegationRequest();
        message.delegator_addr = object.delegator_addr ?? "";
        message.validator_addr = object.validator_addr ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            delegator_addr: object?.delegator_addr,
            validator_addr: object?.validator_addr
        };
    },
    toSDK(message) {
        const obj = {};
        obj.delegator_addr = message.delegator_addr;
        obj.validator_addr = message.validator_addr;
        return obj;
    },
    fromAmino(object) {
        return {
            delegator_addr: object.delegator_addr,
            validator_addr: object.validator_addr
        };
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_addr = message.delegator_addr;
        obj.validator_addr = message.validator_addr;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryUnbondingDelegationRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryUnbondingDelegationRequest",
            value: exports.QueryUnbondingDelegationRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryUnbondingDelegationRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryUnbondingDelegationRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.QueryUnbondingDelegationRequest",
            value: exports.QueryUnbondingDelegationRequest.encode(message).finish()
        };
    }
};
function createBaseQueryUnbondingDelegationResponse() {
    return {
        unbond: staking_1.UnbondingDelegation.fromPartial({})
    };
}
exports.QueryUnbondingDelegationResponse = {
    typeUrl: "/cosmos.staking.v1beta1.QueryUnbondingDelegationResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.unbond !== undefined) {
            staking_1.UnbondingDelegation.encode(message.unbond, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryUnbondingDelegationResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.unbond = staking_1.UnbondingDelegation.decode(reader, reader.uint32());
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
            unbond: (0, helpers_1.isSet)(object.unbond) ? staking_1.UnbondingDelegation.fromJSON(object.unbond) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.unbond !== undefined && (obj.unbond = message.unbond ? staking_1.UnbondingDelegation.toJSON(message.unbond) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryUnbondingDelegationResponse();
        message.unbond = object.unbond !== undefined && object.unbond !== null ? staking_1.UnbondingDelegation.fromPartial(object.unbond) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            unbond: object.unbond ? staking_1.UnbondingDelegation.fromSDK(object.unbond) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.unbond !== undefined && (obj.unbond = message.unbond ? staking_1.UnbondingDelegation.toSDK(message.unbond) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            unbond: object?.unbond ? staking_1.UnbondingDelegation.fromAmino(object.unbond) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.unbond = message.unbond ? staking_1.UnbondingDelegation.toAmino(message.unbond) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryUnbondingDelegationResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryUnbondingDelegationResponse",
            value: exports.QueryUnbondingDelegationResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryUnbondingDelegationResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryUnbondingDelegationResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.QueryUnbondingDelegationResponse",
            value: exports.QueryUnbondingDelegationResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDelegatorDelegationsRequest() {
    return {
        delegator_addr: "",
        pagination: undefined
    };
}
exports.QueryDelegatorDelegationsRequest = {
    typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorDelegationsRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.delegator_addr !== "") {
            writer.uint32(10).string(message.delegator_addr);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDelegatorDelegationsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegator_addr = reader.string();
                    break;
                case 2:
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
            delegator_addr: (0, helpers_1.isSet)(object.delegator_addr) ? String(object.delegator_addr) : "",
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegator_addr !== undefined && (obj.delegator_addr = message.delegator_addr);
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryDelegatorDelegationsRequest();
        message.delegator_addr = object.delegator_addr ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            delegator_addr: object?.delegator_addr,
            pagination: object.pagination ? pagination_1.PageRequest.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.delegator_addr = message.delegator_addr;
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            delegator_addr: object.delegator_addr,
            pagination: object?.pagination ? pagination_1.PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_addr = message.delegator_addr;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryDelegatorDelegationsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryDelegatorDelegationsRequest",
            value: exports.QueryDelegatorDelegationsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryDelegatorDelegationsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDelegatorDelegationsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorDelegationsRequest",
            value: exports.QueryDelegatorDelegationsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryDelegatorDelegationsResponse() {
    return {
        delegation_responses: [],
        pagination: undefined
    };
}
exports.QueryDelegatorDelegationsResponse = {
    typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorDelegationsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.delegation_responses) {
            staking_1.DelegationResponse.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDelegatorDelegationsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegation_responses.push(staking_1.DelegationResponse.decode(reader, reader.uint32()));
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
            delegation_responses: Array.isArray(object?.delegation_responses) ? object.delegation_responses.map((e) => staking_1.DelegationResponse.fromJSON(e)) : [],
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.delegation_responses) {
            obj.delegation_responses = message.delegation_responses.map(e => e ? staking_1.DelegationResponse.toJSON(e) : undefined);
        }
        else {
            obj.delegation_responses = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryDelegatorDelegationsResponse();
        message.delegation_responses = object.delegation_responses?.map(e => staking_1.DelegationResponse.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            delegation_responses: Array.isArray(object?.delegation_responses) ? object.delegation_responses.map((e) => staking_1.DelegationResponse.fromSDK(e)) : [],
            pagination: object.pagination ? pagination_1.PageResponse.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.delegation_responses) {
            obj.delegation_responses = message.delegation_responses.map(e => e ? staking_1.DelegationResponse.toSDK(e) : undefined);
        }
        else {
            obj.delegation_responses = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            delegation_responses: Array.isArray(object?.delegation_responses) ? object.delegation_responses.map((e) => staking_1.DelegationResponse.fromAmino(e)) : [],
            pagination: object?.pagination ? pagination_1.PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.delegation_responses) {
            obj.delegation_responses = message.delegation_responses.map(e => e ? staking_1.DelegationResponse.toAmino(e) : undefined);
        }
        else {
            obj.delegation_responses = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryDelegatorDelegationsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryDelegatorDelegationsResponse",
            value: exports.QueryDelegatorDelegationsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryDelegatorDelegationsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDelegatorDelegationsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorDelegationsResponse",
            value: exports.QueryDelegatorDelegationsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDelegatorUnbondingDelegationsRequest() {
    return {
        delegator_addr: "",
        pagination: undefined
    };
}
exports.QueryDelegatorUnbondingDelegationsRequest = {
    typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.delegator_addr !== "") {
            writer.uint32(10).string(message.delegator_addr);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDelegatorUnbondingDelegationsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegator_addr = reader.string();
                    break;
                case 2:
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
            delegator_addr: (0, helpers_1.isSet)(object.delegator_addr) ? String(object.delegator_addr) : "",
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegator_addr !== undefined && (obj.delegator_addr = message.delegator_addr);
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryDelegatorUnbondingDelegationsRequest();
        message.delegator_addr = object.delegator_addr ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            delegator_addr: object?.delegator_addr,
            pagination: object.pagination ? pagination_1.PageRequest.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.delegator_addr = message.delegator_addr;
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            delegator_addr: object.delegator_addr,
            pagination: object?.pagination ? pagination_1.PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_addr = message.delegator_addr;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryDelegatorUnbondingDelegationsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryDelegatorUnbondingDelegationsRequest",
            value: exports.QueryDelegatorUnbondingDelegationsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryDelegatorUnbondingDelegationsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDelegatorUnbondingDelegationsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsRequest",
            value: exports.QueryDelegatorUnbondingDelegationsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryDelegatorUnbondingDelegationsResponse() {
    return {
        unbonding_responses: [],
        pagination: undefined
    };
}
exports.QueryDelegatorUnbondingDelegationsResponse = {
    typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.unbonding_responses) {
            staking_1.UnbondingDelegation.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDelegatorUnbondingDelegationsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.unbonding_responses.push(staking_1.UnbondingDelegation.decode(reader, reader.uint32()));
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
            unbonding_responses: Array.isArray(object?.unbonding_responses) ? object.unbonding_responses.map((e) => staking_1.UnbondingDelegation.fromJSON(e)) : [],
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.unbonding_responses) {
            obj.unbonding_responses = message.unbonding_responses.map(e => e ? staking_1.UnbondingDelegation.toJSON(e) : undefined);
        }
        else {
            obj.unbonding_responses = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryDelegatorUnbondingDelegationsResponse();
        message.unbonding_responses = object.unbonding_responses?.map(e => staking_1.UnbondingDelegation.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            unbonding_responses: Array.isArray(object?.unbonding_responses) ? object.unbonding_responses.map((e) => staking_1.UnbondingDelegation.fromSDK(e)) : [],
            pagination: object.pagination ? pagination_1.PageResponse.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.unbonding_responses) {
            obj.unbonding_responses = message.unbonding_responses.map(e => e ? staking_1.UnbondingDelegation.toSDK(e) : undefined);
        }
        else {
            obj.unbonding_responses = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            unbonding_responses: Array.isArray(object?.unbonding_responses) ? object.unbonding_responses.map((e) => staking_1.UnbondingDelegation.fromAmino(e)) : [],
            pagination: object?.pagination ? pagination_1.PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.unbonding_responses) {
            obj.unbonding_responses = message.unbonding_responses.map(e => e ? staking_1.UnbondingDelegation.toAmino(e) : undefined);
        }
        else {
            obj.unbonding_responses = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryDelegatorUnbondingDelegationsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryDelegatorUnbondingDelegationsResponse",
            value: exports.QueryDelegatorUnbondingDelegationsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryDelegatorUnbondingDelegationsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDelegatorUnbondingDelegationsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsResponse",
            value: exports.QueryDelegatorUnbondingDelegationsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryRedelegationsRequest() {
    return {
        delegator_addr: "",
        src_validator_addr: "",
        dst_validator_addr: "",
        pagination: undefined
    };
}
exports.QueryRedelegationsRequest = {
    typeUrl: "/cosmos.staking.v1beta1.QueryRedelegationsRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.delegator_addr !== "") {
            writer.uint32(10).string(message.delegator_addr);
        }
        if (message.src_validator_addr !== "") {
            writer.uint32(18).string(message.src_validator_addr);
        }
        if (message.dst_validator_addr !== "") {
            writer.uint32(26).string(message.dst_validator_addr);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryRedelegationsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegator_addr = reader.string();
                    break;
                case 2:
                    message.src_validator_addr = reader.string();
                    break;
                case 3:
                    message.dst_validator_addr = reader.string();
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
            delegator_addr: (0, helpers_1.isSet)(object.delegator_addr) ? String(object.delegator_addr) : "",
            src_validator_addr: (0, helpers_1.isSet)(object.src_validator_addr) ? String(object.src_validator_addr) : "",
            dst_validator_addr: (0, helpers_1.isSet)(object.dst_validator_addr) ? String(object.dst_validator_addr) : "",
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegator_addr !== undefined && (obj.delegator_addr = message.delegator_addr);
        message.src_validator_addr !== undefined && (obj.src_validator_addr = message.src_validator_addr);
        message.dst_validator_addr !== undefined && (obj.dst_validator_addr = message.dst_validator_addr);
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryRedelegationsRequest();
        message.delegator_addr = object.delegator_addr ?? "";
        message.src_validator_addr = object.src_validator_addr ?? "";
        message.dst_validator_addr = object.dst_validator_addr ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            delegator_addr: object?.delegator_addr,
            src_validator_addr: object?.src_validator_addr,
            dst_validator_addr: object?.dst_validator_addr,
            pagination: object.pagination ? pagination_1.PageRequest.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.delegator_addr = message.delegator_addr;
        obj.src_validator_addr = message.src_validator_addr;
        obj.dst_validator_addr = message.dst_validator_addr;
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            delegator_addr: object.delegator_addr,
            src_validator_addr: object.src_validator_addr,
            dst_validator_addr: object.dst_validator_addr,
            pagination: object?.pagination ? pagination_1.PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_addr = message.delegator_addr;
        obj.src_validator_addr = message.src_validator_addr;
        obj.dst_validator_addr = message.dst_validator_addr;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryRedelegationsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryRedelegationsRequest",
            value: exports.QueryRedelegationsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryRedelegationsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryRedelegationsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.QueryRedelegationsRequest",
            value: exports.QueryRedelegationsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryRedelegationsResponse() {
    return {
        redelegation_responses: [],
        pagination: undefined
    };
}
exports.QueryRedelegationsResponse = {
    typeUrl: "/cosmos.staking.v1beta1.QueryRedelegationsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.redelegation_responses) {
            staking_1.RedelegationResponse.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryRedelegationsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.redelegation_responses.push(staking_1.RedelegationResponse.decode(reader, reader.uint32()));
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
            redelegation_responses: Array.isArray(object?.redelegation_responses) ? object.redelegation_responses.map((e) => staking_1.RedelegationResponse.fromJSON(e)) : [],
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.redelegation_responses) {
            obj.redelegation_responses = message.redelegation_responses.map(e => e ? staking_1.RedelegationResponse.toJSON(e) : undefined);
        }
        else {
            obj.redelegation_responses = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryRedelegationsResponse();
        message.redelegation_responses = object.redelegation_responses?.map(e => staking_1.RedelegationResponse.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            redelegation_responses: Array.isArray(object?.redelegation_responses) ? object.redelegation_responses.map((e) => staking_1.RedelegationResponse.fromSDK(e)) : [],
            pagination: object.pagination ? pagination_1.PageResponse.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.redelegation_responses) {
            obj.redelegation_responses = message.redelegation_responses.map(e => e ? staking_1.RedelegationResponse.toSDK(e) : undefined);
        }
        else {
            obj.redelegation_responses = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            redelegation_responses: Array.isArray(object?.redelegation_responses) ? object.redelegation_responses.map((e) => staking_1.RedelegationResponse.fromAmino(e)) : [],
            pagination: object?.pagination ? pagination_1.PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.redelegation_responses) {
            obj.redelegation_responses = message.redelegation_responses.map(e => e ? staking_1.RedelegationResponse.toAmino(e) : undefined);
        }
        else {
            obj.redelegation_responses = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryRedelegationsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryRedelegationsResponse",
            value: exports.QueryRedelegationsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryRedelegationsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryRedelegationsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.QueryRedelegationsResponse",
            value: exports.QueryRedelegationsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDelegatorValidatorsRequest() {
    return {
        delegator_addr: "",
        pagination: undefined
    };
}
exports.QueryDelegatorValidatorsRequest = {
    typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorValidatorsRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.delegator_addr !== "") {
            writer.uint32(10).string(message.delegator_addr);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
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
                    message.delegator_addr = reader.string();
                    break;
                case 2:
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
            delegator_addr: (0, helpers_1.isSet)(object.delegator_addr) ? String(object.delegator_addr) : "",
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegator_addr !== undefined && (obj.delegator_addr = message.delegator_addr);
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryDelegatorValidatorsRequest();
        message.delegator_addr = object.delegator_addr ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            delegator_addr: object?.delegator_addr,
            pagination: object.pagination ? pagination_1.PageRequest.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.delegator_addr = message.delegator_addr;
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            delegator_addr: object.delegator_addr,
            pagination: object?.pagination ? pagination_1.PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_addr = message.delegator_addr;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
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
            typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorValidatorsRequest",
            value: exports.QueryDelegatorValidatorsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryDelegatorValidatorsResponse() {
    return {
        validators: [],
        pagination: undefined
    };
}
exports.QueryDelegatorValidatorsResponse = {
    typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorValidatorsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.validators) {
            staking_1.Validator.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
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
                    message.validators.push(staking_1.Validator.decode(reader, reader.uint32()));
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
            validators: Array.isArray(object?.validators) ? object.validators.map((e) => staking_1.Validator.fromJSON(e)) : [],
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.validators) {
            obj.validators = message.validators.map(e => e ? staking_1.Validator.toJSON(e) : undefined);
        }
        else {
            obj.validators = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryDelegatorValidatorsResponse();
        message.validators = object.validators?.map(e => staking_1.Validator.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            validators: Array.isArray(object?.validators) ? object.validators.map((e) => staking_1.Validator.fromSDK(e)) : [],
            pagination: object.pagination ? pagination_1.PageResponse.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.validators) {
            obj.validators = message.validators.map(e => e ? staking_1.Validator.toSDK(e) : undefined);
        }
        else {
            obj.validators = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            validators: Array.isArray(object?.validators) ? object.validators.map((e) => staking_1.Validator.fromAmino(e)) : [],
            pagination: object?.pagination ? pagination_1.PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.validators) {
            obj.validators = message.validators.map(e => e ? staking_1.Validator.toAmino(e) : undefined);
        }
        else {
            obj.validators = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
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
            typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorValidatorsResponse",
            value: exports.QueryDelegatorValidatorsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDelegatorValidatorRequest() {
    return {
        delegator_addr: "",
        validator_addr: ""
    };
}
exports.QueryDelegatorValidatorRequest = {
    typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorValidatorRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.delegator_addr !== "") {
            writer.uint32(10).string(message.delegator_addr);
        }
        if (message.validator_addr !== "") {
            writer.uint32(18).string(message.validator_addr);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDelegatorValidatorRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegator_addr = reader.string();
                    break;
                case 2:
                    message.validator_addr = reader.string();
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
            delegator_addr: (0, helpers_1.isSet)(object.delegator_addr) ? String(object.delegator_addr) : "",
            validator_addr: (0, helpers_1.isSet)(object.validator_addr) ? String(object.validator_addr) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegator_addr !== undefined && (obj.delegator_addr = message.delegator_addr);
        message.validator_addr !== undefined && (obj.validator_addr = message.validator_addr);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryDelegatorValidatorRequest();
        message.delegator_addr = object.delegator_addr ?? "";
        message.validator_addr = object.validator_addr ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            delegator_addr: object?.delegator_addr,
            validator_addr: object?.validator_addr
        };
    },
    toSDK(message) {
        const obj = {};
        obj.delegator_addr = message.delegator_addr;
        obj.validator_addr = message.validator_addr;
        return obj;
    },
    fromAmino(object) {
        return {
            delegator_addr: object.delegator_addr,
            validator_addr: object.validator_addr
        };
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_addr = message.delegator_addr;
        obj.validator_addr = message.validator_addr;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryDelegatorValidatorRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryDelegatorValidatorRequest",
            value: exports.QueryDelegatorValidatorRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryDelegatorValidatorRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDelegatorValidatorRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorValidatorRequest",
            value: exports.QueryDelegatorValidatorRequest.encode(message).finish()
        };
    }
};
function createBaseQueryDelegatorValidatorResponse() {
    return {
        validator: staking_1.Validator.fromPartial({})
    };
}
exports.QueryDelegatorValidatorResponse = {
    typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorValidatorResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.validator !== undefined) {
            staking_1.Validator.encode(message.validator, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDelegatorValidatorResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator = staking_1.Validator.decode(reader, reader.uint32());
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
            validator: (0, helpers_1.isSet)(object.validator) ? staking_1.Validator.fromJSON(object.validator) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.validator !== undefined && (obj.validator = message.validator ? staking_1.Validator.toJSON(message.validator) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryDelegatorValidatorResponse();
        message.validator = object.validator !== undefined && object.validator !== null ? staking_1.Validator.fromPartial(object.validator) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            validator: object.validator ? staking_1.Validator.fromSDK(object.validator) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.validator !== undefined && (obj.validator = message.validator ? staking_1.Validator.toSDK(message.validator) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            validator: object?.validator ? staking_1.Validator.fromAmino(object.validator) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.validator = message.validator ? staking_1.Validator.toAmino(message.validator) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryDelegatorValidatorResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryDelegatorValidatorResponse",
            value: exports.QueryDelegatorValidatorResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryDelegatorValidatorResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDelegatorValidatorResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorValidatorResponse",
            value: exports.QueryDelegatorValidatorResponse.encode(message).finish()
        };
    }
};
function createBaseQueryHistoricalInfoRequest() {
    return {
        height: BigInt(0)
    };
}
exports.QueryHistoricalInfoRequest = {
    typeUrl: "/cosmos.staking.v1beta1.QueryHistoricalInfoRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.height !== BigInt(0)) {
            writer.uint32(8).int64(message.height);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryHistoricalInfoRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = reader.int64();
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
            height: (0, helpers_1.isSet)(object.height) ? BigInt(object.height.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryHistoricalInfoRequest();
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            height: object?.height
        };
    },
    toSDK(message) {
        const obj = {};
        obj.height = message.height;
        return obj;
    },
    fromAmino(object) {
        return {
            height: BigInt(object.height)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.height = message.height ? message.height.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryHistoricalInfoRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryHistoricalInfoRequest",
            value: exports.QueryHistoricalInfoRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryHistoricalInfoRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryHistoricalInfoRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.QueryHistoricalInfoRequest",
            value: exports.QueryHistoricalInfoRequest.encode(message).finish()
        };
    }
};
function createBaseQueryHistoricalInfoResponse() {
    return {
        hist: undefined
    };
}
exports.QueryHistoricalInfoResponse = {
    typeUrl: "/cosmos.staking.v1beta1.QueryHistoricalInfoResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.hist !== undefined) {
            staking_1.HistoricalInfo.encode(message.hist, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryHistoricalInfoResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hist = staking_1.HistoricalInfo.decode(reader, reader.uint32());
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
            hist: (0, helpers_1.isSet)(object.hist) ? staking_1.HistoricalInfo.fromJSON(object.hist) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.hist !== undefined && (obj.hist = message.hist ? staking_1.HistoricalInfo.toJSON(message.hist) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryHistoricalInfoResponse();
        message.hist = object.hist !== undefined && object.hist !== null ? staking_1.HistoricalInfo.fromPartial(object.hist) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            hist: object.hist ? staking_1.HistoricalInfo.fromSDK(object.hist) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.hist !== undefined && (obj.hist = message.hist ? staking_1.HistoricalInfo.toSDK(message.hist) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            hist: object?.hist ? staking_1.HistoricalInfo.fromAmino(object.hist) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.hist = message.hist ? staking_1.HistoricalInfo.toAmino(message.hist) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryHistoricalInfoResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryHistoricalInfoResponse",
            value: exports.QueryHistoricalInfoResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryHistoricalInfoResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryHistoricalInfoResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.QueryHistoricalInfoResponse",
            value: exports.QueryHistoricalInfoResponse.encode(message).finish()
        };
    }
};
function createBaseQueryPoolRequest() {
    return {};
}
exports.QueryPoolRequest = {
    typeUrl: "/cosmos.staking.v1beta1.QueryPoolRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolRequest();
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
        const message = createBaseQueryPoolRequest();
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
        return exports.QueryPoolRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryPoolRequest",
            value: exports.QueryPoolRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryPoolRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryPoolRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.QueryPoolRequest",
            value: exports.QueryPoolRequest.encode(message).finish()
        };
    }
};
function createBaseQueryPoolResponse() {
    return {
        pool: staking_1.Pool.fromPartial({})
    };
}
exports.QueryPoolResponse = {
    typeUrl: "/cosmos.staking.v1beta1.QueryPoolResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.pool !== undefined) {
            staking_1.Pool.encode(message.pool, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pool = staking_1.Pool.decode(reader, reader.uint32());
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
            pool: (0, helpers_1.isSet)(object.pool) ? staking_1.Pool.fromJSON(object.pool) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.pool !== undefined && (obj.pool = message.pool ? staking_1.Pool.toJSON(message.pool) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryPoolResponse();
        message.pool = object.pool !== undefined && object.pool !== null ? staking_1.Pool.fromPartial(object.pool) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            pool: object.pool ? staking_1.Pool.fromSDK(object.pool) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.pool !== undefined && (obj.pool = message.pool ? staking_1.Pool.toSDK(message.pool) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            pool: object?.pool ? staking_1.Pool.fromAmino(object.pool) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pool = message.pool ? staking_1.Pool.toAmino(message.pool) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryPoolResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryPoolResponse",
            value: exports.QueryPoolResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryPoolResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryPoolResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.QueryPoolResponse",
            value: exports.QueryPoolResponse.encode(message).finish()
        };
    }
};
function createBaseQueryParamsRequest() {
    return {};
}
exports.QueryParamsRequest = {
    typeUrl: "/cosmos.staking.v1beta1.QueryParamsRequest",
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
            typeUrl: "/cosmos.staking.v1beta1.QueryParamsRequest",
            value: exports.QueryParamsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryParamsResponse() {
    return {
        params: staking_1.Params.fromPartial({})
    };
}
exports.QueryParamsResponse = {
    typeUrl: "/cosmos.staking.v1beta1.QueryParamsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            staking_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
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
                    message.params = staking_1.Params.decode(reader, reader.uint32());
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
            params: (0, helpers_1.isSet)(object.params) ? staking_1.Params.fromJSON(object.params) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? staking_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        message.params = object.params !== undefined && object.params !== null ? staking_1.Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            params: object.params ? staking_1.Params.fromSDK(object.params) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? staking_1.Params.toSDK(message.params) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            params: object?.params ? staking_1.Params.fromAmino(object.params) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? staking_1.Params.toAmino(message.params) : undefined;
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
            typeUrl: "/cosmos.staking.v1beta1.QueryParamsResponse",
            value: exports.QueryParamsResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=query.js.map
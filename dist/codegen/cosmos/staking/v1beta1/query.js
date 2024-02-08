"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryParamsResponse = exports.QueryParamsRequest = exports.QueryPoolResponse = exports.QueryPoolRequest = exports.QueryHistoricalInfoResponse = exports.QueryHistoricalInfoRequest = exports.QueryDelegatorValidatorResponse = exports.QueryDelegatorValidatorRequest = exports.QueryDelegatorValidatorsResponse = exports.QueryDelegatorValidatorsRequest = exports.QueryRedelegationsResponse = exports.QueryRedelegationsRequest = exports.QueryDelegatorUnbondingDelegationsResponse = exports.QueryDelegatorUnbondingDelegationsRequest = exports.QueryDelegatorDelegationsResponse = exports.QueryDelegatorDelegationsRequest = exports.QueryUnbondingDelegationResponse = exports.QueryUnbondingDelegationRequest = exports.QueryDelegationResponse = exports.QueryDelegationRequest = exports.QueryValidatorUnbondingDelegationsResponse = exports.QueryValidatorUnbondingDelegationsRequest = exports.QueryValidatorDelegationsResponse = exports.QueryValidatorDelegationsRequest = exports.QueryValidatorResponse = exports.QueryValidatorRequest = exports.QueryValidatorsResponse = exports.QueryValidatorsRequest = exports.protobufPackage = void 0;
//@ts-nocheck
const pagination_1 = require("../../base/query/v1beta1/pagination");
const staking_1 = require("./staking");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
const registry_1 = require("../../../registry");
exports.protobufPackage = "cosmos.staking.v1beta1";
function createBaseQueryValidatorsRequest() {
    return {
        status: "",
        pagination: undefined
    };
}
exports.QueryValidatorsRequest = {
    typeUrl: "/cosmos.staking.v1beta1.QueryValidatorsRequest",
    aminoType: "cosmos-sdk/QueryValidatorsRequest",
    is(o) {
        return o && (o.$typeUrl === exports.QueryValidatorsRequest.typeUrl || typeof o.status === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryValidatorsRequest.typeUrl || typeof o.status === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryValidatorsRequest.typeUrl || typeof o.status === "string");
    },
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
    fromAmino(object) {
        const message = createBaseQueryValidatorsRequest();
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
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
registry_1.GlobalDecoderRegistry.register(exports.QueryValidatorsRequest.typeUrl, exports.QueryValidatorsRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryValidatorsRequest.aminoType, exports.QueryValidatorsRequest.typeUrl);
function createBaseQueryValidatorsResponse() {
    return {
        validators: [],
        pagination: undefined
    };
}
exports.QueryValidatorsResponse = {
    typeUrl: "/cosmos.staking.v1beta1.QueryValidatorsResponse",
    aminoType: "cosmos-sdk/QueryValidatorsResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryValidatorsResponse.typeUrl || Array.isArray(o.validators) && (!o.validators.length || staking_1.Validator.is(o.validators[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryValidatorsResponse.typeUrl || Array.isArray(o.validators) && (!o.validators.length || staking_1.Validator.isSDK(o.validators[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryValidatorsResponse.typeUrl || Array.isArray(o.validators) && (!o.validators.length || staking_1.Validator.isAmino(o.validators[0])));
    },
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
    fromAmino(object) {
        const message = createBaseQueryValidatorsResponse();
        message.validators = object.validators?.map(e => staking_1.Validator.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
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
registry_1.GlobalDecoderRegistry.register(exports.QueryValidatorsResponse.typeUrl, exports.QueryValidatorsResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryValidatorsResponse.aminoType, exports.QueryValidatorsResponse.typeUrl);
function createBaseQueryValidatorRequest() {
    return {
        validator_addr: ""
    };
}
exports.QueryValidatorRequest = {
    typeUrl: "/cosmos.staking.v1beta1.QueryValidatorRequest",
    aminoType: "cosmos-sdk/QueryValidatorRequest",
    is(o) {
        return o && (o.$typeUrl === exports.QueryValidatorRequest.typeUrl || typeof o.validator_addr === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryValidatorRequest.typeUrl || typeof o.validator_addr === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryValidatorRequest.typeUrl || typeof o.validator_addr === "string");
    },
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
    fromAmino(object) {
        const message = createBaseQueryValidatorRequest();
        if (object.validator_addr !== undefined && object.validator_addr !== null) {
            message.validator_addr = object.validator_addr;
        }
        return message;
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
registry_1.GlobalDecoderRegistry.register(exports.QueryValidatorRequest.typeUrl, exports.QueryValidatorRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryValidatorRequest.aminoType, exports.QueryValidatorRequest.typeUrl);
function createBaseQueryValidatorResponse() {
    return {
        validator: staking_1.Validator.fromPartial({})
    };
}
exports.QueryValidatorResponse = {
    typeUrl: "/cosmos.staking.v1beta1.QueryValidatorResponse",
    aminoType: "cosmos-sdk/QueryValidatorResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryValidatorResponse.typeUrl || staking_1.Validator.is(o.validator));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryValidatorResponse.typeUrl || staking_1.Validator.isSDK(o.validator));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryValidatorResponse.typeUrl || staking_1.Validator.isAmino(o.validator));
    },
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
    fromAmino(object) {
        const message = createBaseQueryValidatorResponse();
        if (object.validator !== undefined && object.validator !== null) {
            message.validator = staking_1.Validator.fromAmino(object.validator);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.validator = message.validator ? staking_1.Validator.toAmino(message.validator) : staking_1.Validator.fromPartial({});
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
registry_1.GlobalDecoderRegistry.register(exports.QueryValidatorResponse.typeUrl, exports.QueryValidatorResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryValidatorResponse.aminoType, exports.QueryValidatorResponse.typeUrl);
function createBaseQueryValidatorDelegationsRequest() {
    return {
        validator_addr: "",
        pagination: undefined
    };
}
exports.QueryValidatorDelegationsRequest = {
    typeUrl: "/cosmos.staking.v1beta1.QueryValidatorDelegationsRequest",
    aminoType: "cosmos-sdk/QueryValidatorDelegationsRequest",
    is(o) {
        return o && (o.$typeUrl === exports.QueryValidatorDelegationsRequest.typeUrl || typeof o.validator_addr === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryValidatorDelegationsRequest.typeUrl || typeof o.validator_addr === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryValidatorDelegationsRequest.typeUrl || typeof o.validator_addr === "string");
    },
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
    fromAmino(object) {
        const message = createBaseQueryValidatorDelegationsRequest();
        if (object.validator_addr !== undefined && object.validator_addr !== null) {
            message.validator_addr = object.validator_addr;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
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
registry_1.GlobalDecoderRegistry.register(exports.QueryValidatorDelegationsRequest.typeUrl, exports.QueryValidatorDelegationsRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryValidatorDelegationsRequest.aminoType, exports.QueryValidatorDelegationsRequest.typeUrl);
function createBaseQueryValidatorDelegationsResponse() {
    return {
        delegation_responses: [],
        pagination: undefined
    };
}
exports.QueryValidatorDelegationsResponse = {
    typeUrl: "/cosmos.staking.v1beta1.QueryValidatorDelegationsResponse",
    aminoType: "cosmos-sdk/QueryValidatorDelegationsResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryValidatorDelegationsResponse.typeUrl || Array.isArray(o.delegation_responses) && (!o.delegation_responses.length || staking_1.DelegationResponse.is(o.delegation_responses[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryValidatorDelegationsResponse.typeUrl || Array.isArray(o.delegation_responses) && (!o.delegation_responses.length || staking_1.DelegationResponse.isSDK(o.delegation_responses[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryValidatorDelegationsResponse.typeUrl || Array.isArray(o.delegation_responses) && (!o.delegation_responses.length || staking_1.DelegationResponse.isAmino(o.delegation_responses[0])));
    },
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
    fromAmino(object) {
        const message = createBaseQueryValidatorDelegationsResponse();
        message.delegation_responses = object.delegation_responses?.map(e => staking_1.DelegationResponse.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
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
registry_1.GlobalDecoderRegistry.register(exports.QueryValidatorDelegationsResponse.typeUrl, exports.QueryValidatorDelegationsResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryValidatorDelegationsResponse.aminoType, exports.QueryValidatorDelegationsResponse.typeUrl);
function createBaseQueryValidatorUnbondingDelegationsRequest() {
    return {
        validator_addr: "",
        pagination: undefined
    };
}
exports.QueryValidatorUnbondingDelegationsRequest = {
    typeUrl: "/cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsRequest",
    aminoType: "cosmos-sdk/QueryValidatorUnbondingDelegationsRequest",
    is(o) {
        return o && (o.$typeUrl === exports.QueryValidatorUnbondingDelegationsRequest.typeUrl || typeof o.validator_addr === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryValidatorUnbondingDelegationsRequest.typeUrl || typeof o.validator_addr === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryValidatorUnbondingDelegationsRequest.typeUrl || typeof o.validator_addr === "string");
    },
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
    fromAmino(object) {
        const message = createBaseQueryValidatorUnbondingDelegationsRequest();
        if (object.validator_addr !== undefined && object.validator_addr !== null) {
            message.validator_addr = object.validator_addr;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
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
registry_1.GlobalDecoderRegistry.register(exports.QueryValidatorUnbondingDelegationsRequest.typeUrl, exports.QueryValidatorUnbondingDelegationsRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryValidatorUnbondingDelegationsRequest.aminoType, exports.QueryValidatorUnbondingDelegationsRequest.typeUrl);
function createBaseQueryValidatorUnbondingDelegationsResponse() {
    return {
        unbonding_responses: [],
        pagination: undefined
    };
}
exports.QueryValidatorUnbondingDelegationsResponse = {
    typeUrl: "/cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsResponse",
    aminoType: "cosmos-sdk/QueryValidatorUnbondingDelegationsResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryValidatorUnbondingDelegationsResponse.typeUrl || Array.isArray(o.unbonding_responses) && (!o.unbonding_responses.length || staking_1.UnbondingDelegation.is(o.unbonding_responses[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryValidatorUnbondingDelegationsResponse.typeUrl || Array.isArray(o.unbonding_responses) && (!o.unbonding_responses.length || staking_1.UnbondingDelegation.isSDK(o.unbonding_responses[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryValidatorUnbondingDelegationsResponse.typeUrl || Array.isArray(o.unbonding_responses) && (!o.unbonding_responses.length || staking_1.UnbondingDelegation.isAmino(o.unbonding_responses[0])));
    },
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
    fromAmino(object) {
        const message = createBaseQueryValidatorUnbondingDelegationsResponse();
        message.unbonding_responses = object.unbonding_responses?.map(e => staking_1.UnbondingDelegation.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
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
registry_1.GlobalDecoderRegistry.register(exports.QueryValidatorUnbondingDelegationsResponse.typeUrl, exports.QueryValidatorUnbondingDelegationsResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryValidatorUnbondingDelegationsResponse.aminoType, exports.QueryValidatorUnbondingDelegationsResponse.typeUrl);
function createBaseQueryDelegationRequest() {
    return {
        delegator_addr: "",
        validator_addr: ""
    };
}
exports.QueryDelegationRequest = {
    typeUrl: "/cosmos.staking.v1beta1.QueryDelegationRequest",
    aminoType: "cosmos-sdk/QueryDelegationRequest",
    is(o) {
        return o && (o.$typeUrl === exports.QueryDelegationRequest.typeUrl || typeof o.delegator_addr === "string" && typeof o.validator_addr === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryDelegationRequest.typeUrl || typeof o.delegator_addr === "string" && typeof o.validator_addr === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryDelegationRequest.typeUrl || typeof o.delegator_addr === "string" && typeof o.validator_addr === "string");
    },
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
    fromAmino(object) {
        const message = createBaseQueryDelegationRequest();
        if (object.delegator_addr !== undefined && object.delegator_addr !== null) {
            message.delegator_addr = object.delegator_addr;
        }
        if (object.validator_addr !== undefined && object.validator_addr !== null) {
            message.validator_addr = object.validator_addr;
        }
        return message;
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
registry_1.GlobalDecoderRegistry.register(exports.QueryDelegationRequest.typeUrl, exports.QueryDelegationRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryDelegationRequest.aminoType, exports.QueryDelegationRequest.typeUrl);
function createBaseQueryDelegationResponse() {
    return {
        delegation_response: undefined
    };
}
exports.QueryDelegationResponse = {
    typeUrl: "/cosmos.staking.v1beta1.QueryDelegationResponse",
    aminoType: "cosmos-sdk/QueryDelegationResponse",
    is(o) {
        return o && o.$typeUrl === exports.QueryDelegationResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.QueryDelegationResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.QueryDelegationResponse.typeUrl;
    },
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
    fromAmino(object) {
        const message = createBaseQueryDelegationResponse();
        if (object.delegation_response !== undefined && object.delegation_response !== null) {
            message.delegation_response = staking_1.DelegationResponse.fromAmino(object.delegation_response);
        }
        return message;
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
registry_1.GlobalDecoderRegistry.register(exports.QueryDelegationResponse.typeUrl, exports.QueryDelegationResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryDelegationResponse.aminoType, exports.QueryDelegationResponse.typeUrl);
function createBaseQueryUnbondingDelegationRequest() {
    return {
        delegator_addr: "",
        validator_addr: ""
    };
}
exports.QueryUnbondingDelegationRequest = {
    typeUrl: "/cosmos.staking.v1beta1.QueryUnbondingDelegationRequest",
    aminoType: "cosmos-sdk/QueryUnbondingDelegationRequest",
    is(o) {
        return o && (o.$typeUrl === exports.QueryUnbondingDelegationRequest.typeUrl || typeof o.delegator_addr === "string" && typeof o.validator_addr === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryUnbondingDelegationRequest.typeUrl || typeof o.delegator_addr === "string" && typeof o.validator_addr === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryUnbondingDelegationRequest.typeUrl || typeof o.delegator_addr === "string" && typeof o.validator_addr === "string");
    },
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
    fromAmino(object) {
        const message = createBaseQueryUnbondingDelegationRequest();
        if (object.delegator_addr !== undefined && object.delegator_addr !== null) {
            message.delegator_addr = object.delegator_addr;
        }
        if (object.validator_addr !== undefined && object.validator_addr !== null) {
            message.validator_addr = object.validator_addr;
        }
        return message;
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
registry_1.GlobalDecoderRegistry.register(exports.QueryUnbondingDelegationRequest.typeUrl, exports.QueryUnbondingDelegationRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryUnbondingDelegationRequest.aminoType, exports.QueryUnbondingDelegationRequest.typeUrl);
function createBaseQueryUnbondingDelegationResponse() {
    return {
        unbond: staking_1.UnbondingDelegation.fromPartial({})
    };
}
exports.QueryUnbondingDelegationResponse = {
    typeUrl: "/cosmos.staking.v1beta1.QueryUnbondingDelegationResponse",
    aminoType: "cosmos-sdk/QueryUnbondingDelegationResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryUnbondingDelegationResponse.typeUrl || staking_1.UnbondingDelegation.is(o.unbond));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryUnbondingDelegationResponse.typeUrl || staking_1.UnbondingDelegation.isSDK(o.unbond));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryUnbondingDelegationResponse.typeUrl || staking_1.UnbondingDelegation.isAmino(o.unbond));
    },
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
    fromAmino(object) {
        const message = createBaseQueryUnbondingDelegationResponse();
        if (object.unbond !== undefined && object.unbond !== null) {
            message.unbond = staking_1.UnbondingDelegation.fromAmino(object.unbond);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.unbond = message.unbond ? staking_1.UnbondingDelegation.toAmino(message.unbond) : staking_1.UnbondingDelegation.fromPartial({});
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
registry_1.GlobalDecoderRegistry.register(exports.QueryUnbondingDelegationResponse.typeUrl, exports.QueryUnbondingDelegationResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryUnbondingDelegationResponse.aminoType, exports.QueryUnbondingDelegationResponse.typeUrl);
function createBaseQueryDelegatorDelegationsRequest() {
    return {
        delegator_addr: "",
        pagination: undefined
    };
}
exports.QueryDelegatorDelegationsRequest = {
    typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorDelegationsRequest",
    aminoType: "cosmos-sdk/QueryDelegatorDelegationsRequest",
    is(o) {
        return o && (o.$typeUrl === exports.QueryDelegatorDelegationsRequest.typeUrl || typeof o.delegator_addr === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryDelegatorDelegationsRequest.typeUrl || typeof o.delegator_addr === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryDelegatorDelegationsRequest.typeUrl || typeof o.delegator_addr === "string");
    },
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
    fromAmino(object) {
        const message = createBaseQueryDelegatorDelegationsRequest();
        if (object.delegator_addr !== undefined && object.delegator_addr !== null) {
            message.delegator_addr = object.delegator_addr;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
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
registry_1.GlobalDecoderRegistry.register(exports.QueryDelegatorDelegationsRequest.typeUrl, exports.QueryDelegatorDelegationsRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryDelegatorDelegationsRequest.aminoType, exports.QueryDelegatorDelegationsRequest.typeUrl);
function createBaseQueryDelegatorDelegationsResponse() {
    return {
        delegation_responses: [],
        pagination: undefined
    };
}
exports.QueryDelegatorDelegationsResponse = {
    typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorDelegationsResponse",
    aminoType: "cosmos-sdk/QueryDelegatorDelegationsResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryDelegatorDelegationsResponse.typeUrl || Array.isArray(o.delegation_responses) && (!o.delegation_responses.length || staking_1.DelegationResponse.is(o.delegation_responses[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryDelegatorDelegationsResponse.typeUrl || Array.isArray(o.delegation_responses) && (!o.delegation_responses.length || staking_1.DelegationResponse.isSDK(o.delegation_responses[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryDelegatorDelegationsResponse.typeUrl || Array.isArray(o.delegation_responses) && (!o.delegation_responses.length || staking_1.DelegationResponse.isAmino(o.delegation_responses[0])));
    },
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
    fromAmino(object) {
        const message = createBaseQueryDelegatorDelegationsResponse();
        message.delegation_responses = object.delegation_responses?.map(e => staking_1.DelegationResponse.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
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
registry_1.GlobalDecoderRegistry.register(exports.QueryDelegatorDelegationsResponse.typeUrl, exports.QueryDelegatorDelegationsResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryDelegatorDelegationsResponse.aminoType, exports.QueryDelegatorDelegationsResponse.typeUrl);
function createBaseQueryDelegatorUnbondingDelegationsRequest() {
    return {
        delegator_addr: "",
        pagination: undefined
    };
}
exports.QueryDelegatorUnbondingDelegationsRequest = {
    typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsRequest",
    aminoType: "cosmos-sdk/QueryDelegatorUnbondingDelegationsRequest",
    is(o) {
        return o && (o.$typeUrl === exports.QueryDelegatorUnbondingDelegationsRequest.typeUrl || typeof o.delegator_addr === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryDelegatorUnbondingDelegationsRequest.typeUrl || typeof o.delegator_addr === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryDelegatorUnbondingDelegationsRequest.typeUrl || typeof o.delegator_addr === "string");
    },
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
    fromAmino(object) {
        const message = createBaseQueryDelegatorUnbondingDelegationsRequest();
        if (object.delegator_addr !== undefined && object.delegator_addr !== null) {
            message.delegator_addr = object.delegator_addr;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
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
registry_1.GlobalDecoderRegistry.register(exports.QueryDelegatorUnbondingDelegationsRequest.typeUrl, exports.QueryDelegatorUnbondingDelegationsRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryDelegatorUnbondingDelegationsRequest.aminoType, exports.QueryDelegatorUnbondingDelegationsRequest.typeUrl);
function createBaseQueryDelegatorUnbondingDelegationsResponse() {
    return {
        unbonding_responses: [],
        pagination: undefined
    };
}
exports.QueryDelegatorUnbondingDelegationsResponse = {
    typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsResponse",
    aminoType: "cosmos-sdk/QueryDelegatorUnbondingDelegationsResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryDelegatorUnbondingDelegationsResponse.typeUrl || Array.isArray(o.unbonding_responses) && (!o.unbonding_responses.length || staking_1.UnbondingDelegation.is(o.unbonding_responses[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryDelegatorUnbondingDelegationsResponse.typeUrl || Array.isArray(o.unbonding_responses) && (!o.unbonding_responses.length || staking_1.UnbondingDelegation.isSDK(o.unbonding_responses[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryDelegatorUnbondingDelegationsResponse.typeUrl || Array.isArray(o.unbonding_responses) && (!o.unbonding_responses.length || staking_1.UnbondingDelegation.isAmino(o.unbonding_responses[0])));
    },
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
    fromAmino(object) {
        const message = createBaseQueryDelegatorUnbondingDelegationsResponse();
        message.unbonding_responses = object.unbonding_responses?.map(e => staking_1.UnbondingDelegation.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
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
registry_1.GlobalDecoderRegistry.register(exports.QueryDelegatorUnbondingDelegationsResponse.typeUrl, exports.QueryDelegatorUnbondingDelegationsResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryDelegatorUnbondingDelegationsResponse.aminoType, exports.QueryDelegatorUnbondingDelegationsResponse.typeUrl);
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
    aminoType: "cosmos-sdk/QueryRedelegationsRequest",
    is(o) {
        return o && (o.$typeUrl === exports.QueryRedelegationsRequest.typeUrl || typeof o.delegator_addr === "string" && typeof o.src_validator_addr === "string" && typeof o.dst_validator_addr === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryRedelegationsRequest.typeUrl || typeof o.delegator_addr === "string" && typeof o.src_validator_addr === "string" && typeof o.dst_validator_addr === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryRedelegationsRequest.typeUrl || typeof o.delegator_addr === "string" && typeof o.src_validator_addr === "string" && typeof o.dst_validator_addr === "string");
    },
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
    fromAmino(object) {
        const message = createBaseQueryRedelegationsRequest();
        if (object.delegator_addr !== undefined && object.delegator_addr !== null) {
            message.delegator_addr = object.delegator_addr;
        }
        if (object.src_validator_addr !== undefined && object.src_validator_addr !== null) {
            message.src_validator_addr = object.src_validator_addr;
        }
        if (object.dst_validator_addr !== undefined && object.dst_validator_addr !== null) {
            message.dst_validator_addr = object.dst_validator_addr;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
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
registry_1.GlobalDecoderRegistry.register(exports.QueryRedelegationsRequest.typeUrl, exports.QueryRedelegationsRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryRedelegationsRequest.aminoType, exports.QueryRedelegationsRequest.typeUrl);
function createBaseQueryRedelegationsResponse() {
    return {
        redelegation_responses: [],
        pagination: undefined
    };
}
exports.QueryRedelegationsResponse = {
    typeUrl: "/cosmos.staking.v1beta1.QueryRedelegationsResponse",
    aminoType: "cosmos-sdk/QueryRedelegationsResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryRedelegationsResponse.typeUrl || Array.isArray(o.redelegation_responses) && (!o.redelegation_responses.length || staking_1.RedelegationResponse.is(o.redelegation_responses[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryRedelegationsResponse.typeUrl || Array.isArray(o.redelegation_responses) && (!o.redelegation_responses.length || staking_1.RedelegationResponse.isSDK(o.redelegation_responses[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryRedelegationsResponse.typeUrl || Array.isArray(o.redelegation_responses) && (!o.redelegation_responses.length || staking_1.RedelegationResponse.isAmino(o.redelegation_responses[0])));
    },
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
    fromAmino(object) {
        const message = createBaseQueryRedelegationsResponse();
        message.redelegation_responses = object.redelegation_responses?.map(e => staking_1.RedelegationResponse.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
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
registry_1.GlobalDecoderRegistry.register(exports.QueryRedelegationsResponse.typeUrl, exports.QueryRedelegationsResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryRedelegationsResponse.aminoType, exports.QueryRedelegationsResponse.typeUrl);
function createBaseQueryDelegatorValidatorsRequest() {
    return {
        delegator_addr: "",
        pagination: undefined
    };
}
exports.QueryDelegatorValidatorsRequest = {
    typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorValidatorsRequest",
    aminoType: "cosmos-sdk/QueryDelegatorValidatorsRequest",
    is(o) {
        return o && (o.$typeUrl === exports.QueryDelegatorValidatorsRequest.typeUrl || typeof o.delegator_addr === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryDelegatorValidatorsRequest.typeUrl || typeof o.delegator_addr === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryDelegatorValidatorsRequest.typeUrl || typeof o.delegator_addr === "string");
    },
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
    fromAmino(object) {
        const message = createBaseQueryDelegatorValidatorsRequest();
        if (object.delegator_addr !== undefined && object.delegator_addr !== null) {
            message.delegator_addr = object.delegator_addr;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
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
registry_1.GlobalDecoderRegistry.register(exports.QueryDelegatorValidatorsRequest.typeUrl, exports.QueryDelegatorValidatorsRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryDelegatorValidatorsRequest.aminoType, exports.QueryDelegatorValidatorsRequest.typeUrl);
function createBaseQueryDelegatorValidatorsResponse() {
    return {
        validators: [],
        pagination: undefined
    };
}
exports.QueryDelegatorValidatorsResponse = {
    typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorValidatorsResponse",
    aminoType: "cosmos-sdk/QueryDelegatorValidatorsResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryDelegatorValidatorsResponse.typeUrl || Array.isArray(o.validators) && (!o.validators.length || staking_1.Validator.is(o.validators[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryDelegatorValidatorsResponse.typeUrl || Array.isArray(o.validators) && (!o.validators.length || staking_1.Validator.isSDK(o.validators[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryDelegatorValidatorsResponse.typeUrl || Array.isArray(o.validators) && (!o.validators.length || staking_1.Validator.isAmino(o.validators[0])));
    },
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
    fromAmino(object) {
        const message = createBaseQueryDelegatorValidatorsResponse();
        message.validators = object.validators?.map(e => staking_1.Validator.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
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
registry_1.GlobalDecoderRegistry.register(exports.QueryDelegatorValidatorsResponse.typeUrl, exports.QueryDelegatorValidatorsResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryDelegatorValidatorsResponse.aminoType, exports.QueryDelegatorValidatorsResponse.typeUrl);
function createBaseQueryDelegatorValidatorRequest() {
    return {
        delegator_addr: "",
        validator_addr: ""
    };
}
exports.QueryDelegatorValidatorRequest = {
    typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorValidatorRequest",
    aminoType: "cosmos-sdk/QueryDelegatorValidatorRequest",
    is(o) {
        return o && (o.$typeUrl === exports.QueryDelegatorValidatorRequest.typeUrl || typeof o.delegator_addr === "string" && typeof o.validator_addr === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryDelegatorValidatorRequest.typeUrl || typeof o.delegator_addr === "string" && typeof o.validator_addr === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryDelegatorValidatorRequest.typeUrl || typeof o.delegator_addr === "string" && typeof o.validator_addr === "string");
    },
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
    fromAmino(object) {
        const message = createBaseQueryDelegatorValidatorRequest();
        if (object.delegator_addr !== undefined && object.delegator_addr !== null) {
            message.delegator_addr = object.delegator_addr;
        }
        if (object.validator_addr !== undefined && object.validator_addr !== null) {
            message.validator_addr = object.validator_addr;
        }
        return message;
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
registry_1.GlobalDecoderRegistry.register(exports.QueryDelegatorValidatorRequest.typeUrl, exports.QueryDelegatorValidatorRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryDelegatorValidatorRequest.aminoType, exports.QueryDelegatorValidatorRequest.typeUrl);
function createBaseQueryDelegatorValidatorResponse() {
    return {
        validator: staking_1.Validator.fromPartial({})
    };
}
exports.QueryDelegatorValidatorResponse = {
    typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorValidatorResponse",
    aminoType: "cosmos-sdk/QueryDelegatorValidatorResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryDelegatorValidatorResponse.typeUrl || staking_1.Validator.is(o.validator));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryDelegatorValidatorResponse.typeUrl || staking_1.Validator.isSDK(o.validator));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryDelegatorValidatorResponse.typeUrl || staking_1.Validator.isAmino(o.validator));
    },
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
    fromAmino(object) {
        const message = createBaseQueryDelegatorValidatorResponse();
        if (object.validator !== undefined && object.validator !== null) {
            message.validator = staking_1.Validator.fromAmino(object.validator);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.validator = message.validator ? staking_1.Validator.toAmino(message.validator) : staking_1.Validator.fromPartial({});
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
registry_1.GlobalDecoderRegistry.register(exports.QueryDelegatorValidatorResponse.typeUrl, exports.QueryDelegatorValidatorResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryDelegatorValidatorResponse.aminoType, exports.QueryDelegatorValidatorResponse.typeUrl);
function createBaseQueryHistoricalInfoRequest() {
    return {
        height: BigInt(0)
    };
}
exports.QueryHistoricalInfoRequest = {
    typeUrl: "/cosmos.staking.v1beta1.QueryHistoricalInfoRequest",
    aminoType: "cosmos-sdk/QueryHistoricalInfoRequest",
    is(o) {
        return o && (o.$typeUrl === exports.QueryHistoricalInfoRequest.typeUrl || typeof o.height === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryHistoricalInfoRequest.typeUrl || typeof o.height === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryHistoricalInfoRequest.typeUrl || typeof o.height === "bigint");
    },
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
    fromAmino(object) {
        const message = createBaseQueryHistoricalInfoRequest();
        if (object.height !== undefined && object.height !== null) {
            message.height = BigInt(object.height);
        }
        return message;
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
registry_1.GlobalDecoderRegistry.register(exports.QueryHistoricalInfoRequest.typeUrl, exports.QueryHistoricalInfoRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryHistoricalInfoRequest.aminoType, exports.QueryHistoricalInfoRequest.typeUrl);
function createBaseQueryHistoricalInfoResponse() {
    return {
        hist: undefined
    };
}
exports.QueryHistoricalInfoResponse = {
    typeUrl: "/cosmos.staking.v1beta1.QueryHistoricalInfoResponse",
    aminoType: "cosmos-sdk/QueryHistoricalInfoResponse",
    is(o) {
        return o && o.$typeUrl === exports.QueryHistoricalInfoResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.QueryHistoricalInfoResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.QueryHistoricalInfoResponse.typeUrl;
    },
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
    fromAmino(object) {
        const message = createBaseQueryHistoricalInfoResponse();
        if (object.hist !== undefined && object.hist !== null) {
            message.hist = staking_1.HistoricalInfo.fromAmino(object.hist);
        }
        return message;
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
registry_1.GlobalDecoderRegistry.register(exports.QueryHistoricalInfoResponse.typeUrl, exports.QueryHistoricalInfoResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryHistoricalInfoResponse.aminoType, exports.QueryHistoricalInfoResponse.typeUrl);
function createBaseQueryPoolRequest() {
    return {};
}
exports.QueryPoolRequest = {
    typeUrl: "/cosmos.staking.v1beta1.QueryPoolRequest",
    aminoType: "cosmos-sdk/QueryPoolRequest",
    is(o) {
        return o && o.$typeUrl === exports.QueryPoolRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.QueryPoolRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.QueryPoolRequest.typeUrl;
    },
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
    fromAmino(_) {
        const message = createBaseQueryPoolRequest();
        return message;
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
registry_1.GlobalDecoderRegistry.register(exports.QueryPoolRequest.typeUrl, exports.QueryPoolRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryPoolRequest.aminoType, exports.QueryPoolRequest.typeUrl);
function createBaseQueryPoolResponse() {
    return {
        pool: staking_1.Pool.fromPartial({})
    };
}
exports.QueryPoolResponse = {
    typeUrl: "/cosmos.staking.v1beta1.QueryPoolResponse",
    aminoType: "cosmos-sdk/QueryPoolResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryPoolResponse.typeUrl || staking_1.Pool.is(o.pool));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryPoolResponse.typeUrl || staking_1.Pool.isSDK(o.pool));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryPoolResponse.typeUrl || staking_1.Pool.isAmino(o.pool));
    },
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
    fromAmino(object) {
        const message = createBaseQueryPoolResponse();
        if (object.pool !== undefined && object.pool !== null) {
            message.pool = staking_1.Pool.fromAmino(object.pool);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pool = message.pool ? staking_1.Pool.toAmino(message.pool) : staking_1.Pool.fromPartial({});
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
registry_1.GlobalDecoderRegistry.register(exports.QueryPoolResponse.typeUrl, exports.QueryPoolResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryPoolResponse.aminoType, exports.QueryPoolResponse.typeUrl);
function createBaseQueryParamsRequest() {
    return {};
}
exports.QueryParamsRequest = {
    typeUrl: "/cosmos.staking.v1beta1.QueryParamsRequest",
    aminoType: "cosmos-sdk/QueryParamsRequest",
    is(o) {
        return o && o.$typeUrl === exports.QueryParamsRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.QueryParamsRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.QueryParamsRequest.typeUrl;
    },
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
    fromAmino(_) {
        const message = createBaseQueryParamsRequest();
        return message;
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
registry_1.GlobalDecoderRegistry.register(exports.QueryParamsRequest.typeUrl, exports.QueryParamsRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryParamsRequest.aminoType, exports.QueryParamsRequest.typeUrl);
function createBaseQueryParamsResponse() {
    return {
        params: staking_1.Params.fromPartial({})
    };
}
exports.QueryParamsResponse = {
    typeUrl: "/cosmos.staking.v1beta1.QueryParamsResponse",
    aminoType: "cosmos-sdk/QueryParamsResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryParamsResponse.typeUrl || staking_1.Params.is(o.params));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryParamsResponse.typeUrl || staking_1.Params.isSDK(o.params));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryParamsResponse.typeUrl || staking_1.Params.isAmino(o.params));
    },
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
    fromAmino(object) {
        const message = createBaseQueryParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = staking_1.Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? staking_1.Params.toAmino(message.params) : staking_1.Params.fromPartial({});
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
registry_1.GlobalDecoderRegistry.register(exports.QueryParamsResponse.typeUrl, exports.QueryParamsResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryParamsResponse.aminoType, exports.QueryParamsResponse.typeUrl);
//# sourceMappingURL=query.js.map
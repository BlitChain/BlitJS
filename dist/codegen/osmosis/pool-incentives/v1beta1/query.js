"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryExternalIncentiveGaugesResponse = exports.QueryExternalIncentiveGaugesRequest = exports.QueryIncentivizedPoolsResponse = exports.IncentivizedPool = exports.QueryIncentivizedPoolsRequest = exports.QueryLockableDurationsResponse = exports.QueryLockableDurationsRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.QueryDistrInfoResponse = exports.QueryDistrInfoRequest = exports.QueryGaugeIdsResponse_GaugeIdWithDuration = exports.QueryGaugeIdsResponse = exports.QueryGaugeIdsRequest = void 0;
//@ts-nocheck
const duration_1 = require("../../../google/protobuf/duration");
const incentives_1 = require("./incentives");
const gauge_1 = require("../../incentives/gauge");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
function createBaseQueryGaugeIdsRequest() {
    return {
        pool_id: BigInt(0)
    };
}
exports.QueryGaugeIdsRequest = {
    typeUrl: "/osmosis.poolincentives.v1beta1.QueryGaugeIdsRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.pool_id !== BigInt(0)) {
            writer.uint32(8).uint64(message.pool_id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGaugeIdsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pool_id = reader.uint64();
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
            pool_id: (0, helpers_1.isSet)(object.pool_id) ? BigInt(object.pool_id.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.pool_id !== undefined && (obj.pool_id = (message.pool_id || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGaugeIdsRequest();
        message.pool_id = object.pool_id !== undefined && object.pool_id !== null ? BigInt(object.pool_id.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            pool_id: object?.pool_id
        };
    },
    toSDK(message) {
        const obj = {};
        obj.pool_id = message.pool_id;
        return obj;
    },
    fromAmino(object) {
        return {
            pool_id: BigInt(object.pool_id)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id = message.pool_id ? message.pool_id.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryGaugeIdsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/poolincentives/query-gauge-ids-request",
            value: exports.QueryGaugeIdsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryGaugeIdsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGaugeIdsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.poolincentives.v1beta1.QueryGaugeIdsRequest",
            value: exports.QueryGaugeIdsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryGaugeIdsResponse() {
    return {
        gauge_ids_with_duration: []
    };
}
exports.QueryGaugeIdsResponse = {
    typeUrl: "/osmosis.poolincentives.v1beta1.QueryGaugeIdsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.gauge_ids_with_duration) {
            exports.QueryGaugeIdsResponse_GaugeIdWithDuration.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGaugeIdsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.gauge_ids_with_duration.push(exports.QueryGaugeIdsResponse_GaugeIdWithDuration.decode(reader, reader.uint32()));
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
            gauge_ids_with_duration: Array.isArray(object?.gauge_ids_with_duration) ? object.gauge_ids_with_duration.map((e) => exports.QueryGaugeIdsResponse_GaugeIdWithDuration.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.gauge_ids_with_duration) {
            obj.gauge_ids_with_duration = message.gauge_ids_with_duration.map(e => e ? exports.QueryGaugeIdsResponse_GaugeIdWithDuration.toJSON(e) : undefined);
        }
        else {
            obj.gauge_ids_with_duration = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGaugeIdsResponse();
        message.gauge_ids_with_duration = object.gauge_ids_with_duration?.map(e => exports.QueryGaugeIdsResponse_GaugeIdWithDuration.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            gauge_ids_with_duration: Array.isArray(object?.gauge_ids_with_duration) ? object.gauge_ids_with_duration.map((e) => exports.QueryGaugeIdsResponse_GaugeIdWithDuration.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.gauge_ids_with_duration) {
            obj.gauge_ids_with_duration = message.gauge_ids_with_duration.map(e => e ? exports.QueryGaugeIdsResponse_GaugeIdWithDuration.toSDK(e) : undefined);
        }
        else {
            obj.gauge_ids_with_duration = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            gauge_ids_with_duration: Array.isArray(object?.gauge_ids_with_duration) ? object.gauge_ids_with_duration.map((e) => exports.QueryGaugeIdsResponse_GaugeIdWithDuration.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.gauge_ids_with_duration) {
            obj.gauge_ids_with_duration = message.gauge_ids_with_duration.map(e => e ? exports.QueryGaugeIdsResponse_GaugeIdWithDuration.toAmino(e) : undefined);
        }
        else {
            obj.gauge_ids_with_duration = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryGaugeIdsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/poolincentives/query-gauge-ids-response",
            value: exports.QueryGaugeIdsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryGaugeIdsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGaugeIdsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.poolincentives.v1beta1.QueryGaugeIdsResponse",
            value: exports.QueryGaugeIdsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryGaugeIdsResponse_GaugeIdWithDuration() {
    return {
        gauge_id: BigInt(0),
        duration: duration_1.Duration.fromPartial({}),
        gauge_incentive_percentage: ""
    };
}
exports.QueryGaugeIdsResponse_GaugeIdWithDuration = {
    typeUrl: "/osmosis.poolincentives.v1beta1.GaugeIdWithDuration",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.gauge_id !== BigInt(0)) {
            writer.uint32(8).uint64(message.gauge_id);
        }
        if (message.duration !== undefined) {
            duration_1.Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
        }
        if (message.gauge_incentive_percentage !== "") {
            writer.uint32(26).string(message.gauge_incentive_percentage);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGaugeIdsResponse_GaugeIdWithDuration();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.gauge_id = reader.uint64();
                    break;
                case 2:
                    message.duration = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.gauge_incentive_percentage = reader.string();
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
            gauge_id: (0, helpers_1.isSet)(object.gauge_id) ? BigInt(object.gauge_id.toString()) : BigInt(0),
            duration: (0, helpers_1.isSet)(object.duration) ? duration_1.Duration.fromJSON(object.duration) : undefined,
            gauge_incentive_percentage: (0, helpers_1.isSet)(object.gauge_incentive_percentage) ? String(object.gauge_incentive_percentage) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.gauge_id !== undefined && (obj.gauge_id = (message.gauge_id || BigInt(0)).toString());
        message.duration !== undefined && (obj.duration = message.duration ? duration_1.Duration.toJSON(message.duration) : undefined);
        message.gauge_incentive_percentage !== undefined && (obj.gauge_incentive_percentage = message.gauge_incentive_percentage);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGaugeIdsResponse_GaugeIdWithDuration();
        message.gauge_id = object.gauge_id !== undefined && object.gauge_id !== null ? BigInt(object.gauge_id.toString()) : BigInt(0);
        message.duration = object.duration !== undefined && object.duration !== null ? duration_1.Duration.fromPartial(object.duration) : undefined;
        message.gauge_incentive_percentage = object.gauge_incentive_percentage ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            gauge_id: object?.gauge_id,
            duration: object.duration ? duration_1.Duration.fromSDK(object.duration) : undefined,
            gauge_incentive_percentage: object?.gauge_incentive_percentage
        };
    },
    toSDK(message) {
        const obj = {};
        obj.gauge_id = message.gauge_id;
        message.duration !== undefined && (obj.duration = message.duration ? duration_1.Duration.toSDK(message.duration) : undefined);
        obj.gauge_incentive_percentage = message.gauge_incentive_percentage;
        return obj;
    },
    fromAmino(object) {
        return {
            gauge_id: BigInt(object.gauge_id),
            duration: object?.duration ? duration_1.Duration.fromAmino(object.duration) : undefined,
            gauge_incentive_percentage: object.gauge_incentive_percentage
        };
    },
    toAmino(message) {
        const obj = {};
        obj.gauge_id = message.gauge_id ? message.gauge_id.toString() : undefined;
        obj.duration = message.duration ? duration_1.Duration.toAmino(message.duration) : undefined;
        obj.gauge_incentive_percentage = message.gauge_incentive_percentage;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryGaugeIdsResponse_GaugeIdWithDuration.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/poolincentives/gauge-id-with-duration",
            value: exports.QueryGaugeIdsResponse_GaugeIdWithDuration.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryGaugeIdsResponse_GaugeIdWithDuration.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGaugeIdsResponse_GaugeIdWithDuration.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.poolincentives.v1beta1.GaugeIdWithDuration",
            value: exports.QueryGaugeIdsResponse_GaugeIdWithDuration.encode(message).finish()
        };
    }
};
function createBaseQueryDistrInfoRequest() {
    return {};
}
exports.QueryDistrInfoRequest = {
    typeUrl: "/osmosis.poolincentives.v1beta1.QueryDistrInfoRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDistrInfoRequest();
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
        const message = createBaseQueryDistrInfoRequest();
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
        return exports.QueryDistrInfoRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/poolincentives/query-distr-info-request",
            value: exports.QueryDistrInfoRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryDistrInfoRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDistrInfoRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.poolincentives.v1beta1.QueryDistrInfoRequest",
            value: exports.QueryDistrInfoRequest.encode(message).finish()
        };
    }
};
function createBaseQueryDistrInfoResponse() {
    return {
        distr_info: incentives_1.DistrInfo.fromPartial({})
    };
}
exports.QueryDistrInfoResponse = {
    typeUrl: "/osmosis.poolincentives.v1beta1.QueryDistrInfoResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.distr_info !== undefined) {
            incentives_1.DistrInfo.encode(message.distr_info, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDistrInfoResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.distr_info = incentives_1.DistrInfo.decode(reader, reader.uint32());
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
            distr_info: (0, helpers_1.isSet)(object.distr_info) ? incentives_1.DistrInfo.fromJSON(object.distr_info) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.distr_info !== undefined && (obj.distr_info = message.distr_info ? incentives_1.DistrInfo.toJSON(message.distr_info) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryDistrInfoResponse();
        message.distr_info = object.distr_info !== undefined && object.distr_info !== null ? incentives_1.DistrInfo.fromPartial(object.distr_info) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            distr_info: object.distr_info ? incentives_1.DistrInfo.fromSDK(object.distr_info) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.distr_info !== undefined && (obj.distr_info = message.distr_info ? incentives_1.DistrInfo.toSDK(message.distr_info) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            distr_info: object?.distr_info ? incentives_1.DistrInfo.fromAmino(object.distr_info) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.distr_info = message.distr_info ? incentives_1.DistrInfo.toAmino(message.distr_info) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryDistrInfoResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/poolincentives/query-distr-info-response",
            value: exports.QueryDistrInfoResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryDistrInfoResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDistrInfoResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.poolincentives.v1beta1.QueryDistrInfoResponse",
            value: exports.QueryDistrInfoResponse.encode(message).finish()
        };
    }
};
function createBaseQueryParamsRequest() {
    return {};
}
exports.QueryParamsRequest = {
    typeUrl: "/osmosis.poolincentives.v1beta1.QueryParamsRequest",
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
            type: "osmosis/poolincentives/query-params-request",
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
            typeUrl: "/osmosis.poolincentives.v1beta1.QueryParamsRequest",
            value: exports.QueryParamsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryParamsResponse() {
    return {
        params: incentives_1.Params.fromPartial({})
    };
}
exports.QueryParamsResponse = {
    typeUrl: "/osmosis.poolincentives.v1beta1.QueryParamsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            incentives_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
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
                    message.params = incentives_1.Params.decode(reader, reader.uint32());
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
            params: (0, helpers_1.isSet)(object.params) ? incentives_1.Params.fromJSON(object.params) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? incentives_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        message.params = object.params !== undefined && object.params !== null ? incentives_1.Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            params: object.params ? incentives_1.Params.fromSDK(object.params) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? incentives_1.Params.toSDK(message.params) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            params: object?.params ? incentives_1.Params.fromAmino(object.params) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? incentives_1.Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryParamsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/poolincentives/query-params-response",
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
            typeUrl: "/osmosis.poolincentives.v1beta1.QueryParamsResponse",
            value: exports.QueryParamsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryLockableDurationsRequest() {
    return {};
}
exports.QueryLockableDurationsRequest = {
    typeUrl: "/osmosis.poolincentives.v1beta1.QueryLockableDurationsRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLockableDurationsRequest();
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
        const message = createBaseQueryLockableDurationsRequest();
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
        return exports.QueryLockableDurationsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/poolincentives/query-lockable-durations-request",
            value: exports.QueryLockableDurationsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryLockableDurationsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryLockableDurationsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.poolincentives.v1beta1.QueryLockableDurationsRequest",
            value: exports.QueryLockableDurationsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryLockableDurationsResponse() {
    return {
        lockable_durations: []
    };
}
exports.QueryLockableDurationsResponse = {
    typeUrl: "/osmosis.poolincentives.v1beta1.QueryLockableDurationsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.lockable_durations) {
            duration_1.Duration.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLockableDurationsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lockable_durations.push(duration_1.Duration.decode(reader, reader.uint32()));
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
            lockable_durations: Array.isArray(object?.lockable_durations) ? object.lockable_durations.map((e) => duration_1.Duration.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.lockable_durations) {
            obj.lockable_durations = message.lockable_durations.map(e => e ? duration_1.Duration.toJSON(e) : undefined);
        }
        else {
            obj.lockable_durations = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryLockableDurationsResponse();
        message.lockable_durations = object.lockable_durations?.map(e => duration_1.Duration.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            lockable_durations: Array.isArray(object?.lockable_durations) ? object.lockable_durations.map((e) => duration_1.Duration.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.lockable_durations) {
            obj.lockable_durations = message.lockable_durations.map(e => e ? duration_1.Duration.toSDK(e) : undefined);
        }
        else {
            obj.lockable_durations = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            lockable_durations: Array.isArray(object?.lockable_durations) ? object.lockable_durations.map((e) => duration_1.Duration.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.lockable_durations) {
            obj.lockable_durations = message.lockable_durations.map(e => e ? duration_1.Duration.toAmino(e) : undefined);
        }
        else {
            obj.lockable_durations = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryLockableDurationsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/poolincentives/query-lockable-durations-response",
            value: exports.QueryLockableDurationsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryLockableDurationsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryLockableDurationsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.poolincentives.v1beta1.QueryLockableDurationsResponse",
            value: exports.QueryLockableDurationsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryIncentivizedPoolsRequest() {
    return {};
}
exports.QueryIncentivizedPoolsRequest = {
    typeUrl: "/osmosis.poolincentives.v1beta1.QueryIncentivizedPoolsRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryIncentivizedPoolsRequest();
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
        const message = createBaseQueryIncentivizedPoolsRequest();
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
        return exports.QueryIncentivizedPoolsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/poolincentives/query-incentivized-pools-request",
            value: exports.QueryIncentivizedPoolsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryIncentivizedPoolsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryIncentivizedPoolsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.poolincentives.v1beta1.QueryIncentivizedPoolsRequest",
            value: exports.QueryIncentivizedPoolsRequest.encode(message).finish()
        };
    }
};
function createBaseIncentivizedPool() {
    return {
        pool_id: BigInt(0),
        lockable_duration: duration_1.Duration.fromPartial({}),
        gauge_id: BigInt(0)
    };
}
exports.IncentivizedPool = {
    typeUrl: "/osmosis.poolincentives.v1beta1.IncentivizedPool",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.pool_id !== BigInt(0)) {
            writer.uint32(8).uint64(message.pool_id);
        }
        if (message.lockable_duration !== undefined) {
            duration_1.Duration.encode(message.lockable_duration, writer.uint32(18).fork()).ldelim();
        }
        if (message.gauge_id !== BigInt(0)) {
            writer.uint32(24).uint64(message.gauge_id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIncentivizedPool();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pool_id = reader.uint64();
                    break;
                case 2:
                    message.lockable_duration = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.gauge_id = reader.uint64();
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
            pool_id: (0, helpers_1.isSet)(object.pool_id) ? BigInt(object.pool_id.toString()) : BigInt(0),
            lockable_duration: (0, helpers_1.isSet)(object.lockable_duration) ? duration_1.Duration.fromJSON(object.lockable_duration) : undefined,
            gauge_id: (0, helpers_1.isSet)(object.gauge_id) ? BigInt(object.gauge_id.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.pool_id !== undefined && (obj.pool_id = (message.pool_id || BigInt(0)).toString());
        message.lockable_duration !== undefined && (obj.lockable_duration = message.lockable_duration ? duration_1.Duration.toJSON(message.lockable_duration) : undefined);
        message.gauge_id !== undefined && (obj.gauge_id = (message.gauge_id || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseIncentivizedPool();
        message.pool_id = object.pool_id !== undefined && object.pool_id !== null ? BigInt(object.pool_id.toString()) : BigInt(0);
        message.lockable_duration = object.lockable_duration !== undefined && object.lockable_duration !== null ? duration_1.Duration.fromPartial(object.lockable_duration) : undefined;
        message.gauge_id = object.gauge_id !== undefined && object.gauge_id !== null ? BigInt(object.gauge_id.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            pool_id: object?.pool_id,
            lockable_duration: object.lockable_duration ? duration_1.Duration.fromSDK(object.lockable_duration) : undefined,
            gauge_id: object?.gauge_id
        };
    },
    toSDK(message) {
        const obj = {};
        obj.pool_id = message.pool_id;
        message.lockable_duration !== undefined && (obj.lockable_duration = message.lockable_duration ? duration_1.Duration.toSDK(message.lockable_duration) : undefined);
        obj.gauge_id = message.gauge_id;
        return obj;
    },
    fromAmino(object) {
        return {
            pool_id: BigInt(object.pool_id),
            lockable_duration: object?.lockable_duration ? duration_1.Duration.fromAmino(object.lockable_duration) : undefined,
            gauge_id: BigInt(object.gauge_id)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id = message.pool_id ? message.pool_id.toString() : undefined;
        obj.lockable_duration = message.lockable_duration ? duration_1.Duration.toAmino(message.lockable_duration) : undefined;
        obj.gauge_id = message.gauge_id ? message.gauge_id.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.IncentivizedPool.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/poolincentives/incentivized-pool",
            value: exports.IncentivizedPool.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.IncentivizedPool.decode(message.value);
    },
    toProto(message) {
        return exports.IncentivizedPool.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.poolincentives.v1beta1.IncentivizedPool",
            value: exports.IncentivizedPool.encode(message).finish()
        };
    }
};
function createBaseQueryIncentivizedPoolsResponse() {
    return {
        incentivized_pools: []
    };
}
exports.QueryIncentivizedPoolsResponse = {
    typeUrl: "/osmosis.poolincentives.v1beta1.QueryIncentivizedPoolsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.incentivized_pools) {
            exports.IncentivizedPool.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryIncentivizedPoolsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.incentivized_pools.push(exports.IncentivizedPool.decode(reader, reader.uint32()));
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
            incentivized_pools: Array.isArray(object?.incentivized_pools) ? object.incentivized_pools.map((e) => exports.IncentivizedPool.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.incentivized_pools) {
            obj.incentivized_pools = message.incentivized_pools.map(e => e ? exports.IncentivizedPool.toJSON(e) : undefined);
        }
        else {
            obj.incentivized_pools = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryIncentivizedPoolsResponse();
        message.incentivized_pools = object.incentivized_pools?.map(e => exports.IncentivizedPool.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            incentivized_pools: Array.isArray(object?.incentivized_pools) ? object.incentivized_pools.map((e) => exports.IncentivizedPool.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.incentivized_pools) {
            obj.incentivized_pools = message.incentivized_pools.map(e => e ? exports.IncentivizedPool.toSDK(e) : undefined);
        }
        else {
            obj.incentivized_pools = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            incentivized_pools: Array.isArray(object?.incentivized_pools) ? object.incentivized_pools.map((e) => exports.IncentivizedPool.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.incentivized_pools) {
            obj.incentivized_pools = message.incentivized_pools.map(e => e ? exports.IncentivizedPool.toAmino(e) : undefined);
        }
        else {
            obj.incentivized_pools = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryIncentivizedPoolsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/poolincentives/query-incentivized-pools-response",
            value: exports.QueryIncentivizedPoolsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryIncentivizedPoolsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryIncentivizedPoolsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.poolincentives.v1beta1.QueryIncentivizedPoolsResponse",
            value: exports.QueryIncentivizedPoolsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryExternalIncentiveGaugesRequest() {
    return {};
}
exports.QueryExternalIncentiveGaugesRequest = {
    typeUrl: "/osmosis.poolincentives.v1beta1.QueryExternalIncentiveGaugesRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryExternalIncentiveGaugesRequest();
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
        const message = createBaseQueryExternalIncentiveGaugesRequest();
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
        return exports.QueryExternalIncentiveGaugesRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/poolincentives/query-external-incentive-gauges-request",
            value: exports.QueryExternalIncentiveGaugesRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryExternalIncentiveGaugesRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryExternalIncentiveGaugesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.poolincentives.v1beta1.QueryExternalIncentiveGaugesRequest",
            value: exports.QueryExternalIncentiveGaugesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryExternalIncentiveGaugesResponse() {
    return {
        data: []
    };
}
exports.QueryExternalIncentiveGaugesResponse = {
    typeUrl: "/osmosis.poolincentives.v1beta1.QueryExternalIncentiveGaugesResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.data) {
            gauge_1.Gauge.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryExternalIncentiveGaugesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data.push(gauge_1.Gauge.decode(reader, reader.uint32()));
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
            data: Array.isArray(object?.data) ? object.data.map((e) => gauge_1.Gauge.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.data) {
            obj.data = message.data.map(e => e ? gauge_1.Gauge.toJSON(e) : undefined);
        }
        else {
            obj.data = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryExternalIncentiveGaugesResponse();
        message.data = object.data?.map(e => gauge_1.Gauge.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            data: Array.isArray(object?.data) ? object.data.map((e) => gauge_1.Gauge.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.data) {
            obj.data = message.data.map(e => e ? gauge_1.Gauge.toSDK(e) : undefined);
        }
        else {
            obj.data = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            data: Array.isArray(object?.data) ? object.data.map((e) => gauge_1.Gauge.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.data) {
            obj.data = message.data.map(e => e ? gauge_1.Gauge.toAmino(e) : undefined);
        }
        else {
            obj.data = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryExternalIncentiveGaugesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/poolincentives/query-external-incentive-gauges-response",
            value: exports.QueryExternalIncentiveGaugesResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryExternalIncentiveGaugesResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryExternalIncentiveGaugesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.poolincentives.v1beta1.QueryExternalIncentiveGaugesResponse",
            value: exports.QueryExternalIncentiveGaugesResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=query.js.map
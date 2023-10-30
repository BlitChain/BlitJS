//@ts-nocheck
import { Duration } from "../../../google/protobuf/duration";
import { DistrInfo, Params } from "./incentives";
import { Gauge } from "../../incentives/gauge";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
function createBaseQueryGaugeIdsRequest() {
    return {
        pool_id: BigInt(0)
    };
}
export const QueryGaugeIdsRequest = {
    typeUrl: "/osmosis.poolincentives.v1beta1.QueryGaugeIdsRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.pool_id !== BigInt(0)) {
            writer.uint32(8).uint64(message.pool_id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            pool_id: isSet(object.pool_id) ? BigInt(object.pool_id.toString()) : BigInt(0)
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
        return QueryGaugeIdsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/poolincentives/query-gauge-ids-request",
            value: QueryGaugeIdsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryGaugeIdsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryGaugeIdsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.poolincentives.v1beta1.QueryGaugeIdsRequest",
            value: QueryGaugeIdsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryGaugeIdsResponse() {
    return {
        gauge_ids_with_duration: []
    };
}
export const QueryGaugeIdsResponse = {
    typeUrl: "/osmosis.poolincentives.v1beta1.QueryGaugeIdsResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.gauge_ids_with_duration) {
            QueryGaugeIdsResponse_GaugeIdWithDuration.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGaugeIdsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.gauge_ids_with_duration.push(QueryGaugeIdsResponse_GaugeIdWithDuration.decode(reader, reader.uint32()));
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
            gauge_ids_with_duration: Array.isArray(object?.gauge_ids_with_duration) ? object.gauge_ids_with_duration.map((e) => QueryGaugeIdsResponse_GaugeIdWithDuration.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.gauge_ids_with_duration) {
            obj.gauge_ids_with_duration = message.gauge_ids_with_duration.map(e => e ? QueryGaugeIdsResponse_GaugeIdWithDuration.toJSON(e) : undefined);
        }
        else {
            obj.gauge_ids_with_duration = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGaugeIdsResponse();
        message.gauge_ids_with_duration = object.gauge_ids_with_duration?.map(e => QueryGaugeIdsResponse_GaugeIdWithDuration.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            gauge_ids_with_duration: Array.isArray(object?.gauge_ids_with_duration) ? object.gauge_ids_with_duration.map((e) => QueryGaugeIdsResponse_GaugeIdWithDuration.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.gauge_ids_with_duration) {
            obj.gauge_ids_with_duration = message.gauge_ids_with_duration.map(e => e ? QueryGaugeIdsResponse_GaugeIdWithDuration.toSDK(e) : undefined);
        }
        else {
            obj.gauge_ids_with_duration = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            gauge_ids_with_duration: Array.isArray(object?.gauge_ids_with_duration) ? object.gauge_ids_with_duration.map((e) => QueryGaugeIdsResponse_GaugeIdWithDuration.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.gauge_ids_with_duration) {
            obj.gauge_ids_with_duration = message.gauge_ids_with_duration.map(e => e ? QueryGaugeIdsResponse_GaugeIdWithDuration.toAmino(e) : undefined);
        }
        else {
            obj.gauge_ids_with_duration = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryGaugeIdsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/poolincentives/query-gauge-ids-response",
            value: QueryGaugeIdsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryGaugeIdsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryGaugeIdsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.poolincentives.v1beta1.QueryGaugeIdsResponse",
            value: QueryGaugeIdsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryGaugeIdsResponse_GaugeIdWithDuration() {
    return {
        gauge_id: BigInt(0),
        duration: Duration.fromPartial({}),
        gauge_incentive_percentage: ""
    };
}
export const QueryGaugeIdsResponse_GaugeIdWithDuration = {
    typeUrl: "/osmosis.poolincentives.v1beta1.GaugeIdWithDuration",
    encode(message, writer = BinaryWriter.create()) {
        if (message.gauge_id !== BigInt(0)) {
            writer.uint32(8).uint64(message.gauge_id);
        }
        if (message.duration !== undefined) {
            Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
        }
        if (message.gauge_incentive_percentage !== "") {
            writer.uint32(26).string(message.gauge_incentive_percentage);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGaugeIdsResponse_GaugeIdWithDuration();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.gauge_id = reader.uint64();
                    break;
                case 2:
                    message.duration = Duration.decode(reader, reader.uint32());
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
            gauge_id: isSet(object.gauge_id) ? BigInt(object.gauge_id.toString()) : BigInt(0),
            duration: isSet(object.duration) ? Duration.fromJSON(object.duration) : undefined,
            gauge_incentive_percentage: isSet(object.gauge_incentive_percentage) ? String(object.gauge_incentive_percentage) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.gauge_id !== undefined && (obj.gauge_id = (message.gauge_id || BigInt(0)).toString());
        message.duration !== undefined && (obj.duration = message.duration ? Duration.toJSON(message.duration) : undefined);
        message.gauge_incentive_percentage !== undefined && (obj.gauge_incentive_percentage = message.gauge_incentive_percentage);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGaugeIdsResponse_GaugeIdWithDuration();
        message.gauge_id = object.gauge_id !== undefined && object.gauge_id !== null ? BigInt(object.gauge_id.toString()) : BigInt(0);
        message.duration = object.duration !== undefined && object.duration !== null ? Duration.fromPartial(object.duration) : undefined;
        message.gauge_incentive_percentage = object.gauge_incentive_percentage ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            gauge_id: object?.gauge_id,
            duration: object.duration ? Duration.fromSDK(object.duration) : undefined,
            gauge_incentive_percentage: object?.gauge_incentive_percentage
        };
    },
    toSDK(message) {
        const obj = {};
        obj.gauge_id = message.gauge_id;
        message.duration !== undefined && (obj.duration = message.duration ? Duration.toSDK(message.duration) : undefined);
        obj.gauge_incentive_percentage = message.gauge_incentive_percentage;
        return obj;
    },
    fromAmino(object) {
        return {
            gauge_id: BigInt(object.gauge_id),
            duration: object?.duration ? Duration.fromAmino(object.duration) : undefined,
            gauge_incentive_percentage: object.gauge_incentive_percentage
        };
    },
    toAmino(message) {
        const obj = {};
        obj.gauge_id = message.gauge_id ? message.gauge_id.toString() : undefined;
        obj.duration = message.duration ? Duration.toAmino(message.duration) : undefined;
        obj.gauge_incentive_percentage = message.gauge_incentive_percentage;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryGaugeIdsResponse_GaugeIdWithDuration.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/poolincentives/gauge-id-with-duration",
            value: QueryGaugeIdsResponse_GaugeIdWithDuration.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryGaugeIdsResponse_GaugeIdWithDuration.decode(message.value);
    },
    toProto(message) {
        return QueryGaugeIdsResponse_GaugeIdWithDuration.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.poolincentives.v1beta1.GaugeIdWithDuration",
            value: QueryGaugeIdsResponse_GaugeIdWithDuration.encode(message).finish()
        };
    }
};
function createBaseQueryDistrInfoRequest() {
    return {};
}
export const QueryDistrInfoRequest = {
    typeUrl: "/osmosis.poolincentives.v1beta1.QueryDistrInfoRequest",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryDistrInfoRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/poolincentives/query-distr-info-request",
            value: QueryDistrInfoRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryDistrInfoRequest.decode(message.value);
    },
    toProto(message) {
        return QueryDistrInfoRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.poolincentives.v1beta1.QueryDistrInfoRequest",
            value: QueryDistrInfoRequest.encode(message).finish()
        };
    }
};
function createBaseQueryDistrInfoResponse() {
    return {
        distr_info: DistrInfo.fromPartial({})
    };
}
export const QueryDistrInfoResponse = {
    typeUrl: "/osmosis.poolincentives.v1beta1.QueryDistrInfoResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.distr_info !== undefined) {
            DistrInfo.encode(message.distr_info, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDistrInfoResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.distr_info = DistrInfo.decode(reader, reader.uint32());
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
            distr_info: isSet(object.distr_info) ? DistrInfo.fromJSON(object.distr_info) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.distr_info !== undefined && (obj.distr_info = message.distr_info ? DistrInfo.toJSON(message.distr_info) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryDistrInfoResponse();
        message.distr_info = object.distr_info !== undefined && object.distr_info !== null ? DistrInfo.fromPartial(object.distr_info) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            distr_info: object.distr_info ? DistrInfo.fromSDK(object.distr_info) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.distr_info !== undefined && (obj.distr_info = message.distr_info ? DistrInfo.toSDK(message.distr_info) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            distr_info: object?.distr_info ? DistrInfo.fromAmino(object.distr_info) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.distr_info = message.distr_info ? DistrInfo.toAmino(message.distr_info) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDistrInfoResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/poolincentives/query-distr-info-response",
            value: QueryDistrInfoResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryDistrInfoResponse.decode(message.value);
    },
    toProto(message) {
        return QueryDistrInfoResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.poolincentives.v1beta1.QueryDistrInfoResponse",
            value: QueryDistrInfoResponse.encode(message).finish()
        };
    }
};
function createBaseQueryParamsRequest() {
    return {};
}
export const QueryParamsRequest = {
    typeUrl: "/osmosis.poolincentives.v1beta1.QueryParamsRequest",
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
        return QueryParamsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/poolincentives/query-params-request",
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
            typeUrl: "/osmosis.poolincentives.v1beta1.QueryParamsRequest",
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
    typeUrl: "/osmosis.poolincentives.v1beta1.QueryParamsResponse",
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
    fromSDK(object) {
        return {
            params: object.params ? Params.fromSDK(object.params) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            params: object?.params ? Params.fromAmino(object.params) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryParamsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/poolincentives/query-params-response",
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
            typeUrl: "/osmosis.poolincentives.v1beta1.QueryParamsResponse",
            value: QueryParamsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryLockableDurationsRequest() {
    return {};
}
export const QueryLockableDurationsRequest = {
    typeUrl: "/osmosis.poolincentives.v1beta1.QueryLockableDurationsRequest",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryLockableDurationsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/poolincentives/query-lockable-durations-request",
            value: QueryLockableDurationsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryLockableDurationsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryLockableDurationsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.poolincentives.v1beta1.QueryLockableDurationsRequest",
            value: QueryLockableDurationsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryLockableDurationsResponse() {
    return {
        lockable_durations: []
    };
}
export const QueryLockableDurationsResponse = {
    typeUrl: "/osmosis.poolincentives.v1beta1.QueryLockableDurationsResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.lockable_durations) {
            Duration.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLockableDurationsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lockable_durations.push(Duration.decode(reader, reader.uint32()));
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
            lockable_durations: Array.isArray(object?.lockable_durations) ? object.lockable_durations.map((e) => Duration.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.lockable_durations) {
            obj.lockable_durations = message.lockable_durations.map(e => e ? Duration.toJSON(e) : undefined);
        }
        else {
            obj.lockable_durations = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryLockableDurationsResponse();
        message.lockable_durations = object.lockable_durations?.map(e => Duration.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            lockable_durations: Array.isArray(object?.lockable_durations) ? object.lockable_durations.map((e) => Duration.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.lockable_durations) {
            obj.lockable_durations = message.lockable_durations.map(e => e ? Duration.toSDK(e) : undefined);
        }
        else {
            obj.lockable_durations = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            lockable_durations: Array.isArray(object?.lockable_durations) ? object.lockable_durations.map((e) => Duration.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.lockable_durations) {
            obj.lockable_durations = message.lockable_durations.map(e => e ? Duration.toAmino(e) : undefined);
        }
        else {
            obj.lockable_durations = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryLockableDurationsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/poolincentives/query-lockable-durations-response",
            value: QueryLockableDurationsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryLockableDurationsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryLockableDurationsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.poolincentives.v1beta1.QueryLockableDurationsResponse",
            value: QueryLockableDurationsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryIncentivizedPoolsRequest() {
    return {};
}
export const QueryIncentivizedPoolsRequest = {
    typeUrl: "/osmosis.poolincentives.v1beta1.QueryIncentivizedPoolsRequest",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryIncentivizedPoolsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/poolincentives/query-incentivized-pools-request",
            value: QueryIncentivizedPoolsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryIncentivizedPoolsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryIncentivizedPoolsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.poolincentives.v1beta1.QueryIncentivizedPoolsRequest",
            value: QueryIncentivizedPoolsRequest.encode(message).finish()
        };
    }
};
function createBaseIncentivizedPool() {
    return {
        pool_id: BigInt(0),
        lockable_duration: Duration.fromPartial({}),
        gauge_id: BigInt(0)
    };
}
export const IncentivizedPool = {
    typeUrl: "/osmosis.poolincentives.v1beta1.IncentivizedPool",
    encode(message, writer = BinaryWriter.create()) {
        if (message.pool_id !== BigInt(0)) {
            writer.uint32(8).uint64(message.pool_id);
        }
        if (message.lockable_duration !== undefined) {
            Duration.encode(message.lockable_duration, writer.uint32(18).fork()).ldelim();
        }
        if (message.gauge_id !== BigInt(0)) {
            writer.uint32(24).uint64(message.gauge_id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIncentivizedPool();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pool_id = reader.uint64();
                    break;
                case 2:
                    message.lockable_duration = Duration.decode(reader, reader.uint32());
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
            pool_id: isSet(object.pool_id) ? BigInt(object.pool_id.toString()) : BigInt(0),
            lockable_duration: isSet(object.lockable_duration) ? Duration.fromJSON(object.lockable_duration) : undefined,
            gauge_id: isSet(object.gauge_id) ? BigInt(object.gauge_id.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.pool_id !== undefined && (obj.pool_id = (message.pool_id || BigInt(0)).toString());
        message.lockable_duration !== undefined && (obj.lockable_duration = message.lockable_duration ? Duration.toJSON(message.lockable_duration) : undefined);
        message.gauge_id !== undefined && (obj.gauge_id = (message.gauge_id || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseIncentivizedPool();
        message.pool_id = object.pool_id !== undefined && object.pool_id !== null ? BigInt(object.pool_id.toString()) : BigInt(0);
        message.lockable_duration = object.lockable_duration !== undefined && object.lockable_duration !== null ? Duration.fromPartial(object.lockable_duration) : undefined;
        message.gauge_id = object.gauge_id !== undefined && object.gauge_id !== null ? BigInt(object.gauge_id.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            pool_id: object?.pool_id,
            lockable_duration: object.lockable_duration ? Duration.fromSDK(object.lockable_duration) : undefined,
            gauge_id: object?.gauge_id
        };
    },
    toSDK(message) {
        const obj = {};
        obj.pool_id = message.pool_id;
        message.lockable_duration !== undefined && (obj.lockable_duration = message.lockable_duration ? Duration.toSDK(message.lockable_duration) : undefined);
        obj.gauge_id = message.gauge_id;
        return obj;
    },
    fromAmino(object) {
        return {
            pool_id: BigInt(object.pool_id),
            lockable_duration: object?.lockable_duration ? Duration.fromAmino(object.lockable_duration) : undefined,
            gauge_id: BigInt(object.gauge_id)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id = message.pool_id ? message.pool_id.toString() : undefined;
        obj.lockable_duration = message.lockable_duration ? Duration.toAmino(message.lockable_duration) : undefined;
        obj.gauge_id = message.gauge_id ? message.gauge_id.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return IncentivizedPool.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/poolincentives/incentivized-pool",
            value: IncentivizedPool.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return IncentivizedPool.decode(message.value);
    },
    toProto(message) {
        return IncentivizedPool.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.poolincentives.v1beta1.IncentivizedPool",
            value: IncentivizedPool.encode(message).finish()
        };
    }
};
function createBaseQueryIncentivizedPoolsResponse() {
    return {
        incentivized_pools: []
    };
}
export const QueryIncentivizedPoolsResponse = {
    typeUrl: "/osmosis.poolincentives.v1beta1.QueryIncentivizedPoolsResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.incentivized_pools) {
            IncentivizedPool.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryIncentivizedPoolsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.incentivized_pools.push(IncentivizedPool.decode(reader, reader.uint32()));
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
            incentivized_pools: Array.isArray(object?.incentivized_pools) ? object.incentivized_pools.map((e) => IncentivizedPool.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.incentivized_pools) {
            obj.incentivized_pools = message.incentivized_pools.map(e => e ? IncentivizedPool.toJSON(e) : undefined);
        }
        else {
            obj.incentivized_pools = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryIncentivizedPoolsResponse();
        message.incentivized_pools = object.incentivized_pools?.map(e => IncentivizedPool.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            incentivized_pools: Array.isArray(object?.incentivized_pools) ? object.incentivized_pools.map((e) => IncentivizedPool.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.incentivized_pools) {
            obj.incentivized_pools = message.incentivized_pools.map(e => e ? IncentivizedPool.toSDK(e) : undefined);
        }
        else {
            obj.incentivized_pools = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            incentivized_pools: Array.isArray(object?.incentivized_pools) ? object.incentivized_pools.map((e) => IncentivizedPool.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.incentivized_pools) {
            obj.incentivized_pools = message.incentivized_pools.map(e => e ? IncentivizedPool.toAmino(e) : undefined);
        }
        else {
            obj.incentivized_pools = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryIncentivizedPoolsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/poolincentives/query-incentivized-pools-response",
            value: QueryIncentivizedPoolsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryIncentivizedPoolsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryIncentivizedPoolsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.poolincentives.v1beta1.QueryIncentivizedPoolsResponse",
            value: QueryIncentivizedPoolsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryExternalIncentiveGaugesRequest() {
    return {};
}
export const QueryExternalIncentiveGaugesRequest = {
    typeUrl: "/osmosis.poolincentives.v1beta1.QueryExternalIncentiveGaugesRequest",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return QueryExternalIncentiveGaugesRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/poolincentives/query-external-incentive-gauges-request",
            value: QueryExternalIncentiveGaugesRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryExternalIncentiveGaugesRequest.decode(message.value);
    },
    toProto(message) {
        return QueryExternalIncentiveGaugesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.poolincentives.v1beta1.QueryExternalIncentiveGaugesRequest",
            value: QueryExternalIncentiveGaugesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryExternalIncentiveGaugesResponse() {
    return {
        data: []
    };
}
export const QueryExternalIncentiveGaugesResponse = {
    typeUrl: "/osmosis.poolincentives.v1beta1.QueryExternalIncentiveGaugesResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.data) {
            Gauge.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryExternalIncentiveGaugesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data.push(Gauge.decode(reader, reader.uint32()));
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
            data: Array.isArray(object?.data) ? object.data.map((e) => Gauge.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.data) {
            obj.data = message.data.map(e => e ? Gauge.toJSON(e) : undefined);
        }
        else {
            obj.data = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryExternalIncentiveGaugesResponse();
        message.data = object.data?.map(e => Gauge.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            data: Array.isArray(object?.data) ? object.data.map((e) => Gauge.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.data) {
            obj.data = message.data.map(e => e ? Gauge.toSDK(e) : undefined);
        }
        else {
            obj.data = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            data: Array.isArray(object?.data) ? object.data.map((e) => Gauge.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.data) {
            obj.data = message.data.map(e => e ? Gauge.toAmino(e) : undefined);
        }
        else {
            obj.data = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryExternalIncentiveGaugesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/poolincentives/query-external-incentive-gauges-response",
            value: QueryExternalIncentiveGaugesResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryExternalIncentiveGaugesResponse.decode(message.value);
    },
    toProto(message) {
        return QueryExternalIncentiveGaugesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.poolincentives.v1beta1.QueryExternalIncentiveGaugesResponse",
            value: QueryExternalIncentiveGaugesResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=query.js.map
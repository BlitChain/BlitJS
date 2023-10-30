"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PoolToGauges = exports.PoolToGauge = exports.DistrRecord = exports.DistrInfo = exports.LockableDurationsInfo = exports.Params = void 0;
//@ts-nocheck
const duration_1 = require("../../../google/protobuf/duration");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
function createBaseParams() {
    return {
        minted_denom: ""
    };
}
exports.Params = {
    typeUrl: "/osmosis.poolincentives.v1beta1.Params",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.minted_denom !== "") {
            writer.uint32(10).string(message.minted_denom);
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
                    message.minted_denom = reader.string();
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
            minted_denom: (0, helpers_1.isSet)(object.minted_denom) ? String(object.minted_denom) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.minted_denom !== undefined && (obj.minted_denom = message.minted_denom);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.minted_denom = object.minted_denom ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            minted_denom: object?.minted_denom
        };
    },
    toSDK(message) {
        const obj = {};
        obj.minted_denom = message.minted_denom;
        return obj;
    },
    fromAmino(object) {
        return {
            minted_denom: object.minted_denom
        };
    },
    toAmino(message) {
        const obj = {};
        obj.minted_denom = message.minted_denom;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Params.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/poolincentives/params",
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
            typeUrl: "/osmosis.poolincentives.v1beta1.Params",
            value: exports.Params.encode(message).finish()
        };
    }
};
function createBaseLockableDurationsInfo() {
    return {
        lockable_durations: []
    };
}
exports.LockableDurationsInfo = {
    typeUrl: "/osmosis.poolincentives.v1beta1.LockableDurationsInfo",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.lockable_durations) {
            duration_1.Duration.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLockableDurationsInfo();
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
        const message = createBaseLockableDurationsInfo();
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
        return exports.LockableDurationsInfo.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/poolincentives/lockable-durations-info",
            value: exports.LockableDurationsInfo.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.LockableDurationsInfo.decode(message.value);
    },
    toProto(message) {
        return exports.LockableDurationsInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.poolincentives.v1beta1.LockableDurationsInfo",
            value: exports.LockableDurationsInfo.encode(message).finish()
        };
    }
};
function createBaseDistrInfo() {
    return {
        total_weight: "",
        records: []
    };
}
exports.DistrInfo = {
    typeUrl: "/osmosis.poolincentives.v1beta1.DistrInfo",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.total_weight !== "") {
            writer.uint32(10).string(message.total_weight);
        }
        for (const v of message.records) {
            exports.DistrRecord.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDistrInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.total_weight = reader.string();
                    break;
                case 2:
                    message.records.push(exports.DistrRecord.decode(reader, reader.uint32()));
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
            total_weight: (0, helpers_1.isSet)(object.total_weight) ? String(object.total_weight) : "",
            records: Array.isArray(object?.records) ? object.records.map((e) => exports.DistrRecord.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.total_weight !== undefined && (obj.total_weight = message.total_weight);
        if (message.records) {
            obj.records = message.records.map(e => e ? exports.DistrRecord.toJSON(e) : undefined);
        }
        else {
            obj.records = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDistrInfo();
        message.total_weight = object.total_weight ?? "";
        message.records = object.records?.map(e => exports.DistrRecord.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            total_weight: object?.total_weight,
            records: Array.isArray(object?.records) ? object.records.map((e) => exports.DistrRecord.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.total_weight = message.total_weight;
        if (message.records) {
            obj.records = message.records.map(e => e ? exports.DistrRecord.toSDK(e) : undefined);
        }
        else {
            obj.records = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            total_weight: object.total_weight,
            records: Array.isArray(object?.records) ? object.records.map((e) => exports.DistrRecord.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.total_weight = message.total_weight;
        if (message.records) {
            obj.records = message.records.map(e => e ? exports.DistrRecord.toAmino(e) : undefined);
        }
        else {
            obj.records = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.DistrInfo.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/poolincentives/distr-info",
            value: exports.DistrInfo.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.DistrInfo.decode(message.value);
    },
    toProto(message) {
        return exports.DistrInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.poolincentives.v1beta1.DistrInfo",
            value: exports.DistrInfo.encode(message).finish()
        };
    }
};
function createBaseDistrRecord() {
    return {
        gauge_id: BigInt(0),
        weight: ""
    };
}
exports.DistrRecord = {
    typeUrl: "/osmosis.poolincentives.v1beta1.DistrRecord",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.gauge_id !== BigInt(0)) {
            writer.uint32(8).uint64(message.gauge_id);
        }
        if (message.weight !== "") {
            writer.uint32(18).string(message.weight);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDistrRecord();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.gauge_id = reader.uint64();
                    break;
                case 2:
                    message.weight = reader.string();
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
            weight: (0, helpers_1.isSet)(object.weight) ? String(object.weight) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.gauge_id !== undefined && (obj.gauge_id = (message.gauge_id || BigInt(0)).toString());
        message.weight !== undefined && (obj.weight = message.weight);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDistrRecord();
        message.gauge_id = object.gauge_id !== undefined && object.gauge_id !== null ? BigInt(object.gauge_id.toString()) : BigInt(0);
        message.weight = object.weight ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            gauge_id: object?.gauge_id,
            weight: object?.weight
        };
    },
    toSDK(message) {
        const obj = {};
        obj.gauge_id = message.gauge_id;
        obj.weight = message.weight;
        return obj;
    },
    fromAmino(object) {
        return {
            gauge_id: BigInt(object.gauge_id),
            weight: object.weight
        };
    },
    toAmino(message) {
        const obj = {};
        obj.gauge_id = message.gauge_id ? message.gauge_id.toString() : undefined;
        obj.weight = message.weight;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.DistrRecord.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/poolincentives/distr-record",
            value: exports.DistrRecord.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.DistrRecord.decode(message.value);
    },
    toProto(message) {
        return exports.DistrRecord.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.poolincentives.v1beta1.DistrRecord",
            value: exports.DistrRecord.encode(message).finish()
        };
    }
};
function createBasePoolToGauge() {
    return {
        pool_id: BigInt(0),
        gauge_id: BigInt(0),
        duration: duration_1.Duration.fromPartial({})
    };
}
exports.PoolToGauge = {
    typeUrl: "/osmosis.poolincentives.v1beta1.PoolToGauge",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.pool_id !== BigInt(0)) {
            writer.uint32(8).uint64(message.pool_id);
        }
        if (message.gauge_id !== BigInt(0)) {
            writer.uint32(16).uint64(message.gauge_id);
        }
        if (message.duration !== undefined) {
            duration_1.Duration.encode(message.duration, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePoolToGauge();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pool_id = reader.uint64();
                    break;
                case 2:
                    message.gauge_id = reader.uint64();
                    break;
                case 3:
                    message.duration = duration_1.Duration.decode(reader, reader.uint32());
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
            gauge_id: (0, helpers_1.isSet)(object.gauge_id) ? BigInt(object.gauge_id.toString()) : BigInt(0),
            duration: (0, helpers_1.isSet)(object.duration) ? duration_1.Duration.fromJSON(object.duration) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.pool_id !== undefined && (obj.pool_id = (message.pool_id || BigInt(0)).toString());
        message.gauge_id !== undefined && (obj.gauge_id = (message.gauge_id || BigInt(0)).toString());
        message.duration !== undefined && (obj.duration = message.duration ? duration_1.Duration.toJSON(message.duration) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBasePoolToGauge();
        message.pool_id = object.pool_id !== undefined && object.pool_id !== null ? BigInt(object.pool_id.toString()) : BigInt(0);
        message.gauge_id = object.gauge_id !== undefined && object.gauge_id !== null ? BigInt(object.gauge_id.toString()) : BigInt(0);
        message.duration = object.duration !== undefined && object.duration !== null ? duration_1.Duration.fromPartial(object.duration) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            pool_id: object?.pool_id,
            gauge_id: object?.gauge_id,
            duration: object.duration ? duration_1.Duration.fromSDK(object.duration) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.pool_id = message.pool_id;
        obj.gauge_id = message.gauge_id;
        message.duration !== undefined && (obj.duration = message.duration ? duration_1.Duration.toSDK(message.duration) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            pool_id: BigInt(object.pool_id),
            gauge_id: BigInt(object.gauge_id),
            duration: object?.duration ? duration_1.Duration.fromAmino(object.duration) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id = message.pool_id ? message.pool_id.toString() : undefined;
        obj.gauge_id = message.gauge_id ? message.gauge_id.toString() : undefined;
        obj.duration = message.duration ? duration_1.Duration.toAmino(message.duration) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.PoolToGauge.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/poolincentives/pool-to-gauge",
            value: exports.PoolToGauge.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.PoolToGauge.decode(message.value);
    },
    toProto(message) {
        return exports.PoolToGauge.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.poolincentives.v1beta1.PoolToGauge",
            value: exports.PoolToGauge.encode(message).finish()
        };
    }
};
function createBasePoolToGauges() {
    return {
        pool_to_gauge: []
    };
}
exports.PoolToGauges = {
    typeUrl: "/osmosis.poolincentives.v1beta1.PoolToGauges",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.pool_to_gauge) {
            exports.PoolToGauge.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePoolToGauges();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.pool_to_gauge.push(exports.PoolToGauge.decode(reader, reader.uint32()));
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
            pool_to_gauge: Array.isArray(object?.pool_to_gauge) ? object.pool_to_gauge.map((e) => exports.PoolToGauge.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.pool_to_gauge) {
            obj.pool_to_gauge = message.pool_to_gauge.map(e => e ? exports.PoolToGauge.toJSON(e) : undefined);
        }
        else {
            obj.pool_to_gauge = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBasePoolToGauges();
        message.pool_to_gauge = object.pool_to_gauge?.map(e => exports.PoolToGauge.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            pool_to_gauge: Array.isArray(object?.pool_to_gauge) ? object.pool_to_gauge.map((e) => exports.PoolToGauge.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.pool_to_gauge) {
            obj.pool_to_gauge = message.pool_to_gauge.map(e => e ? exports.PoolToGauge.toSDK(e) : undefined);
        }
        else {
            obj.pool_to_gauge = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            pool_to_gauge: Array.isArray(object?.pool_to_gauge) ? object.pool_to_gauge.map((e) => exports.PoolToGauge.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.pool_to_gauge) {
            obj.pool_to_gauge = message.pool_to_gauge.map(e => e ? exports.PoolToGauge.toAmino(e) : undefined);
        }
        else {
            obj.pool_to_gauge = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.PoolToGauges.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/poolincentives/pool-to-gauges",
            value: exports.PoolToGauges.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.PoolToGauges.decode(message.value);
    },
    toProto(message) {
        return exports.PoolToGauges.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.poolincentives.v1beta1.PoolToGauges",
            value: exports.PoolToGauges.encode(message).finish()
        };
    }
};
//# sourceMappingURL=incentives.js.map
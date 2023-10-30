"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = void 0;
//@ts-nocheck
const params_1 = require("./params");
const gauge_1 = require("./gauge");
const duration_1 = require("../../google/protobuf/duration");
const binary_1 = require("../../binary");
const helpers_1 = require("../../helpers");
function createBaseGenesisState() {
    return {
        params: params_1.Params.fromPartial({}),
        gauges: [],
        lockable_durations: [],
        last_gauge_id: BigInt(0)
    };
}
exports.GenesisState = {
    typeUrl: "/osmosis.incentives.GenesisState",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.gauges) {
            gauge_1.Gauge.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.lockable_durations) {
            duration_1.Duration.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.last_gauge_id !== BigInt(0)) {
            writer.uint32(32).uint64(message.last_gauge_id);
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
                    message.params = params_1.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.gauges.push(gauge_1.Gauge.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.lockable_durations.push(duration_1.Duration.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.last_gauge_id = reader.uint64();
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
            params: (0, helpers_1.isSet)(object.params) ? params_1.Params.fromJSON(object.params) : undefined,
            gauges: Array.isArray(object?.gauges) ? object.gauges.map((e) => gauge_1.Gauge.fromJSON(e)) : [],
            lockable_durations: Array.isArray(object?.lockable_durations) ? object.lockable_durations.map((e) => duration_1.Duration.fromJSON(e)) : [],
            last_gauge_id: (0, helpers_1.isSet)(object.last_gauge_id) ? BigInt(object.last_gauge_id.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? params_1.Params.toJSON(message.params) : undefined);
        if (message.gauges) {
            obj.gauges = message.gauges.map(e => e ? gauge_1.Gauge.toJSON(e) : undefined);
        }
        else {
            obj.gauges = [];
        }
        if (message.lockable_durations) {
            obj.lockable_durations = message.lockable_durations.map(e => e ? duration_1.Duration.toJSON(e) : undefined);
        }
        else {
            obj.lockable_durations = [];
        }
        message.last_gauge_id !== undefined && (obj.last_gauge_id = (message.last_gauge_id || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.params = object.params !== undefined && object.params !== null ? params_1.Params.fromPartial(object.params) : undefined;
        message.gauges = object.gauges?.map(e => gauge_1.Gauge.fromPartial(e)) || [];
        message.lockable_durations = object.lockable_durations?.map(e => duration_1.Duration.fromPartial(e)) || [];
        message.last_gauge_id = object.last_gauge_id !== undefined && object.last_gauge_id !== null ? BigInt(object.last_gauge_id.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            params: object.params ? params_1.Params.fromSDK(object.params) : undefined,
            gauges: Array.isArray(object?.gauges) ? object.gauges.map((e) => gauge_1.Gauge.fromSDK(e)) : [],
            lockable_durations: Array.isArray(object?.lockable_durations) ? object.lockable_durations.map((e) => duration_1.Duration.fromSDK(e)) : [],
            last_gauge_id: object?.last_gauge_id
        };
    },
    toSDK(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? params_1.Params.toSDK(message.params) : undefined);
        if (message.gauges) {
            obj.gauges = message.gauges.map(e => e ? gauge_1.Gauge.toSDK(e) : undefined);
        }
        else {
            obj.gauges = [];
        }
        if (message.lockable_durations) {
            obj.lockable_durations = message.lockable_durations.map(e => e ? duration_1.Duration.toSDK(e) : undefined);
        }
        else {
            obj.lockable_durations = [];
        }
        obj.last_gauge_id = message.last_gauge_id;
        return obj;
    },
    fromAmino(object) {
        return {
            params: object?.params ? params_1.Params.fromAmino(object.params) : undefined,
            gauges: Array.isArray(object?.gauges) ? object.gauges.map((e) => gauge_1.Gauge.fromAmino(e)) : [],
            lockable_durations: Array.isArray(object?.lockable_durations) ? object.lockable_durations.map((e) => duration_1.Duration.fromAmino(e)) : [],
            last_gauge_id: BigInt(object.last_gauge_id)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? params_1.Params.toAmino(message.params) : undefined;
        if (message.gauges) {
            obj.gauges = message.gauges.map(e => e ? gauge_1.Gauge.toAmino(e) : undefined);
        }
        else {
            obj.gauges = [];
        }
        if (message.lockable_durations) {
            obj.lockable_durations = message.lockable_durations.map(e => e ? duration_1.Duration.toAmino(e) : undefined);
        }
        else {
            obj.lockable_durations = [];
        }
        obj.last_gauge_id = message.last_gauge_id ? message.last_gauge_id.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GenesisState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/incentives/genesis-state",
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
            typeUrl: "/osmosis.incentives.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
//# sourceMappingURL=genesis.js.map
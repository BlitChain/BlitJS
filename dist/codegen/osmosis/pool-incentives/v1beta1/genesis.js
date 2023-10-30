"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = void 0;
//@ts-nocheck
const incentives_1 = require("./incentives");
const duration_1 = require("../../../google/protobuf/duration");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
function createBaseGenesisState() {
    return {
        params: incentives_1.Params.fromPartial({}),
        lockable_durations: [],
        distr_info: undefined,
        pool_to_gauges: undefined
    };
}
exports.GenesisState = {
    typeUrl: "/osmosis.poolincentives.v1beta1.GenesisState",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            incentives_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.lockable_durations) {
            duration_1.Duration.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.distr_info !== undefined) {
            incentives_1.DistrInfo.encode(message.distr_info, writer.uint32(26).fork()).ldelim();
        }
        if (message.pool_to_gauges !== undefined) {
            incentives_1.PoolToGauges.encode(message.pool_to_gauges, writer.uint32(34).fork()).ldelim();
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
                    message.params = incentives_1.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.lockable_durations.push(duration_1.Duration.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.distr_info = incentives_1.DistrInfo.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.pool_to_gauges = incentives_1.PoolToGauges.decode(reader, reader.uint32());
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
            params: (0, helpers_1.isSet)(object.params) ? incentives_1.Params.fromJSON(object.params) : undefined,
            lockable_durations: Array.isArray(object?.lockable_durations) ? object.lockable_durations.map((e) => duration_1.Duration.fromJSON(e)) : [],
            distr_info: (0, helpers_1.isSet)(object.distr_info) ? incentives_1.DistrInfo.fromJSON(object.distr_info) : undefined,
            pool_to_gauges: (0, helpers_1.isSet)(object.pool_to_gauges) ? incentives_1.PoolToGauges.fromJSON(object.pool_to_gauges) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? incentives_1.Params.toJSON(message.params) : undefined);
        if (message.lockable_durations) {
            obj.lockable_durations = message.lockable_durations.map(e => e ? duration_1.Duration.toJSON(e) : undefined);
        }
        else {
            obj.lockable_durations = [];
        }
        message.distr_info !== undefined && (obj.distr_info = message.distr_info ? incentives_1.DistrInfo.toJSON(message.distr_info) : undefined);
        message.pool_to_gauges !== undefined && (obj.pool_to_gauges = message.pool_to_gauges ? incentives_1.PoolToGauges.toJSON(message.pool_to_gauges) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.params = object.params !== undefined && object.params !== null ? incentives_1.Params.fromPartial(object.params) : undefined;
        message.lockable_durations = object.lockable_durations?.map(e => duration_1.Duration.fromPartial(e)) || [];
        message.distr_info = object.distr_info !== undefined && object.distr_info !== null ? incentives_1.DistrInfo.fromPartial(object.distr_info) : undefined;
        message.pool_to_gauges = object.pool_to_gauges !== undefined && object.pool_to_gauges !== null ? incentives_1.PoolToGauges.fromPartial(object.pool_to_gauges) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            params: object.params ? incentives_1.Params.fromSDK(object.params) : undefined,
            lockable_durations: Array.isArray(object?.lockable_durations) ? object.lockable_durations.map((e) => duration_1.Duration.fromSDK(e)) : [],
            distr_info: object.distr_info ? incentives_1.DistrInfo.fromSDK(object.distr_info) : undefined,
            pool_to_gauges: object.pool_to_gauges ? incentives_1.PoolToGauges.fromSDK(object.pool_to_gauges) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? incentives_1.Params.toSDK(message.params) : undefined);
        if (message.lockable_durations) {
            obj.lockable_durations = message.lockable_durations.map(e => e ? duration_1.Duration.toSDK(e) : undefined);
        }
        else {
            obj.lockable_durations = [];
        }
        message.distr_info !== undefined && (obj.distr_info = message.distr_info ? incentives_1.DistrInfo.toSDK(message.distr_info) : undefined);
        message.pool_to_gauges !== undefined && (obj.pool_to_gauges = message.pool_to_gauges ? incentives_1.PoolToGauges.toSDK(message.pool_to_gauges) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            params: object?.params ? incentives_1.Params.fromAmino(object.params) : undefined,
            lockable_durations: Array.isArray(object?.lockable_durations) ? object.lockable_durations.map((e) => duration_1.Duration.fromAmino(e)) : [],
            distr_info: object?.distr_info ? incentives_1.DistrInfo.fromAmino(object.distr_info) : undefined,
            pool_to_gauges: object?.pool_to_gauges ? incentives_1.PoolToGauges.fromAmino(object.pool_to_gauges) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? incentives_1.Params.toAmino(message.params) : undefined;
        if (message.lockable_durations) {
            obj.lockable_durations = message.lockable_durations.map(e => e ? duration_1.Duration.toAmino(e) : undefined);
        }
        else {
            obj.lockable_durations = [];
        }
        obj.distr_info = message.distr_info ? incentives_1.DistrInfo.toAmino(message.distr_info) : undefined;
        obj.pool_to_gauges = message.pool_to_gauges ? incentives_1.PoolToGauges.toAmino(message.pool_to_gauges) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GenesisState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/poolincentives/genesis-state",
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
            typeUrl: "/osmosis.poolincentives.v1beta1.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
//# sourceMappingURL=genesis.js.map
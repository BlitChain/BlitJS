"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = exports.GenesisDowntimeEntry = void 0;
//@ts-nocheck
const downtime_duration_1 = require("./downtime_duration");
const timestamp_1 = require("../../../google/protobuf/timestamp");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
function createBaseGenesisDowntimeEntry() {
    return {
        duration: 0,
        last_downtime: new Date()
    };
}
exports.GenesisDowntimeEntry = {
    typeUrl: "/osmosis.downtimedetector.v1beta1.GenesisDowntimeEntry",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.duration !== 0) {
            writer.uint32(8).int32(message.duration);
        }
        if (message.last_downtime !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.last_downtime), writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisDowntimeEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.duration = reader.int32();
                    break;
                case 2:
                    message.last_downtime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
            duration: (0, helpers_1.isSet)(object.duration) ? (0, downtime_duration_1.downtimeFromJSON)(object.duration) : -1,
            last_downtime: (0, helpers_1.isSet)(object.last_downtime) ? (0, helpers_1.fromJsonTimestamp)(object.last_downtime) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.duration !== undefined && (obj.duration = (0, downtime_duration_1.downtimeToJSON)(message.duration));
        message.last_downtime !== undefined && (obj.last_downtime = message.last_downtime.toISOString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisDowntimeEntry();
        message.duration = object.duration ?? 0;
        message.last_downtime = object.last_downtime ?? undefined;
        return message;
    },
    fromSDK(object) {
        return {
            duration: (0, helpers_1.isSet)(object.duration) ? (0, downtime_duration_1.downtimeFromJSON)(object.duration) : -1,
            last_downtime: object.last_downtime ? timestamp_1.Timestamp.fromSDK(object.last_downtime) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.duration !== undefined && (obj.duration = (0, downtime_duration_1.downtimeToJSON)(message.duration));
        message.last_downtime !== undefined && (obj.last_downtime = message.last_downtime ? timestamp_1.Timestamp.toSDK(message.last_downtime) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            duration: (0, helpers_1.isSet)(object.duration) ? (0, downtime_duration_1.downtimeFromJSON)(object.duration) : -1,
            last_downtime: object.last_downtime
        };
    },
    toAmino(message) {
        const obj = {};
        obj.duration = message.duration;
        obj.last_downtime = message.last_downtime;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GenesisDowntimeEntry.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/downtimedetector/genesis-downtime-entry",
            value: exports.GenesisDowntimeEntry.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GenesisDowntimeEntry.decode(message.value);
    },
    toProto(message) {
        return exports.GenesisDowntimeEntry.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.downtimedetector.v1beta1.GenesisDowntimeEntry",
            value: exports.GenesisDowntimeEntry.encode(message).finish()
        };
    }
};
function createBaseGenesisState() {
    return {
        downtimes: [],
        last_block_time: new Date()
    };
}
exports.GenesisState = {
    typeUrl: "/osmosis.downtimedetector.v1beta1.GenesisState",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.downtimes) {
            exports.GenesisDowntimeEntry.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.last_block_time !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.last_block_time), writer.uint32(18).fork()).ldelim();
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
                    message.downtimes.push(exports.GenesisDowntimeEntry.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.last_block_time = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
            downtimes: Array.isArray(object?.downtimes) ? object.downtimes.map((e) => exports.GenesisDowntimeEntry.fromJSON(e)) : [],
            last_block_time: (0, helpers_1.isSet)(object.last_block_time) ? (0, helpers_1.fromJsonTimestamp)(object.last_block_time) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.downtimes) {
            obj.downtimes = message.downtimes.map(e => e ? exports.GenesisDowntimeEntry.toJSON(e) : undefined);
        }
        else {
            obj.downtimes = [];
        }
        message.last_block_time !== undefined && (obj.last_block_time = message.last_block_time.toISOString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.downtimes = object.downtimes?.map(e => exports.GenesisDowntimeEntry.fromPartial(e)) || [];
        message.last_block_time = object.last_block_time ?? undefined;
        return message;
    },
    fromSDK(object) {
        return {
            downtimes: Array.isArray(object?.downtimes) ? object.downtimes.map((e) => exports.GenesisDowntimeEntry.fromSDK(e)) : [],
            last_block_time: object.last_block_time ? timestamp_1.Timestamp.fromSDK(object.last_block_time) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.downtimes) {
            obj.downtimes = message.downtimes.map(e => e ? exports.GenesisDowntimeEntry.toSDK(e) : undefined);
        }
        else {
            obj.downtimes = [];
        }
        message.last_block_time !== undefined && (obj.last_block_time = message.last_block_time ? timestamp_1.Timestamp.toSDK(message.last_block_time) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            downtimes: Array.isArray(object?.downtimes) ? object.downtimes.map((e) => exports.GenesisDowntimeEntry.fromAmino(e)) : [],
            last_block_time: object.last_block_time
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.downtimes) {
            obj.downtimes = message.downtimes.map(e => e ? exports.GenesisDowntimeEntry.toAmino(e) : undefined);
        }
        else {
            obj.downtimes = [];
        }
        obj.last_block_time = message.last_block_time;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GenesisState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/downtimedetector/genesis-state",
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
            typeUrl: "/osmosis.downtimedetector.v1beta1.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
//# sourceMappingURL=genesis.js.map
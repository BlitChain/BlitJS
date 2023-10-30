//@ts-nocheck
import { downtimeFromJSON, downtimeToJSON } from "./downtime_duration";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { toTimestamp, fromTimestamp, isSet, fromJsonTimestamp } from "../../../helpers";
function createBaseGenesisDowntimeEntry() {
    return {
        duration: 0,
        last_downtime: new Date()
    };
}
export const GenesisDowntimeEntry = {
    typeUrl: "/osmosis.downtimedetector.v1beta1.GenesisDowntimeEntry",
    encode(message, writer = BinaryWriter.create()) {
        if (message.duration !== 0) {
            writer.uint32(8).int32(message.duration);
        }
        if (message.last_downtime !== undefined) {
            Timestamp.encode(toTimestamp(message.last_downtime), writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisDowntimeEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.duration = reader.int32();
                    break;
                case 2:
                    message.last_downtime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
            duration: isSet(object.duration) ? downtimeFromJSON(object.duration) : -1,
            last_downtime: isSet(object.last_downtime) ? fromJsonTimestamp(object.last_downtime) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.duration !== undefined && (obj.duration = downtimeToJSON(message.duration));
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
            duration: isSet(object.duration) ? downtimeFromJSON(object.duration) : -1,
            last_downtime: object.last_downtime ? Timestamp.fromSDK(object.last_downtime) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.duration !== undefined && (obj.duration = downtimeToJSON(message.duration));
        message.last_downtime !== undefined && (obj.last_downtime = message.last_downtime ? Timestamp.toSDK(message.last_downtime) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            duration: isSet(object.duration) ? downtimeFromJSON(object.duration) : -1,
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
        return GenesisDowntimeEntry.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/downtimedetector/genesis-downtime-entry",
            value: GenesisDowntimeEntry.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GenesisDowntimeEntry.decode(message.value);
    },
    toProto(message) {
        return GenesisDowntimeEntry.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.downtimedetector.v1beta1.GenesisDowntimeEntry",
            value: GenesisDowntimeEntry.encode(message).finish()
        };
    }
};
function createBaseGenesisState() {
    return {
        downtimes: [],
        last_block_time: new Date()
    };
}
export const GenesisState = {
    typeUrl: "/osmosis.downtimedetector.v1beta1.GenesisState",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.downtimes) {
            GenesisDowntimeEntry.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.last_block_time !== undefined) {
            Timestamp.encode(toTimestamp(message.last_block_time), writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.downtimes.push(GenesisDowntimeEntry.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.last_block_time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
            downtimes: Array.isArray(object?.downtimes) ? object.downtimes.map((e) => GenesisDowntimeEntry.fromJSON(e)) : [],
            last_block_time: isSet(object.last_block_time) ? fromJsonTimestamp(object.last_block_time) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.downtimes) {
            obj.downtimes = message.downtimes.map(e => e ? GenesisDowntimeEntry.toJSON(e) : undefined);
        }
        else {
            obj.downtimes = [];
        }
        message.last_block_time !== undefined && (obj.last_block_time = message.last_block_time.toISOString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.downtimes = object.downtimes?.map(e => GenesisDowntimeEntry.fromPartial(e)) || [];
        message.last_block_time = object.last_block_time ?? undefined;
        return message;
    },
    fromSDK(object) {
        return {
            downtimes: Array.isArray(object?.downtimes) ? object.downtimes.map((e) => GenesisDowntimeEntry.fromSDK(e)) : [],
            last_block_time: object.last_block_time ? Timestamp.fromSDK(object.last_block_time) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.downtimes) {
            obj.downtimes = message.downtimes.map(e => e ? GenesisDowntimeEntry.toSDK(e) : undefined);
        }
        else {
            obj.downtimes = [];
        }
        message.last_block_time !== undefined && (obj.last_block_time = message.last_block_time ? Timestamp.toSDK(message.last_block_time) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            downtimes: Array.isArray(object?.downtimes) ? object.downtimes.map((e) => GenesisDowntimeEntry.fromAmino(e)) : [],
            last_block_time: object.last_block_time
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.downtimes) {
            obj.downtimes = message.downtimes.map(e => e ? GenesisDowntimeEntry.toAmino(e) : undefined);
        }
        else {
            obj.downtimes = [];
        }
        obj.last_block_time = message.last_block_time;
        return obj;
    },
    fromAminoMsg(object) {
        return GenesisState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/downtimedetector/genesis-state",
            value: GenesisState.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GenesisState.decode(message.value);
    },
    toProto(message) {
        return GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.downtimedetector.v1beta1.GenesisState",
            value: GenesisState.encode(message).finish()
        };
    }
};
//# sourceMappingURL=genesis.js.map
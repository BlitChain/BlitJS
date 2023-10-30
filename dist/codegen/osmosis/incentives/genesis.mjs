//@ts-nocheck
import { Params } from "./params";
import { Gauge } from "./gauge";
import { Duration } from "../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
function createBaseGenesisState() {
    return {
        params: Params.fromPartial({}),
        gauges: [],
        lockable_durations: [],
        last_gauge_id: BigInt(0)
    };
}
export const GenesisState = {
    typeUrl: "/osmosis.incentives.GenesisState",
    encode(message, writer = BinaryWriter.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.gauges) {
            Gauge.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.lockable_durations) {
            Duration.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.last_gauge_id !== BigInt(0)) {
            writer.uint32(32).uint64(message.last_gauge_id);
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
                    message.params = Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.gauges.push(Gauge.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.lockable_durations.push(Duration.decode(reader, reader.uint32()));
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
            params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
            gauges: Array.isArray(object?.gauges) ? object.gauges.map((e) => Gauge.fromJSON(e)) : [],
            lockable_durations: Array.isArray(object?.lockable_durations) ? object.lockable_durations.map((e) => Duration.fromJSON(e)) : [],
            last_gauge_id: isSet(object.last_gauge_id) ? BigInt(object.last_gauge_id.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        if (message.gauges) {
            obj.gauges = message.gauges.map(e => e ? Gauge.toJSON(e) : undefined);
        }
        else {
            obj.gauges = [];
        }
        if (message.lockable_durations) {
            obj.lockable_durations = message.lockable_durations.map(e => e ? Duration.toJSON(e) : undefined);
        }
        else {
            obj.lockable_durations = [];
        }
        message.last_gauge_id !== undefined && (obj.last_gauge_id = (message.last_gauge_id || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        message.gauges = object.gauges?.map(e => Gauge.fromPartial(e)) || [];
        message.lockable_durations = object.lockable_durations?.map(e => Duration.fromPartial(e)) || [];
        message.last_gauge_id = object.last_gauge_id !== undefined && object.last_gauge_id !== null ? BigInt(object.last_gauge_id.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            params: object.params ? Params.fromSDK(object.params) : undefined,
            gauges: Array.isArray(object?.gauges) ? object.gauges.map((e) => Gauge.fromSDK(e)) : [],
            lockable_durations: Array.isArray(object?.lockable_durations) ? object.lockable_durations.map((e) => Duration.fromSDK(e)) : [],
            last_gauge_id: object?.last_gauge_id
        };
    },
    toSDK(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
        if (message.gauges) {
            obj.gauges = message.gauges.map(e => e ? Gauge.toSDK(e) : undefined);
        }
        else {
            obj.gauges = [];
        }
        if (message.lockable_durations) {
            obj.lockable_durations = message.lockable_durations.map(e => e ? Duration.toSDK(e) : undefined);
        }
        else {
            obj.lockable_durations = [];
        }
        obj.last_gauge_id = message.last_gauge_id;
        return obj;
    },
    fromAmino(object) {
        return {
            params: object?.params ? Params.fromAmino(object.params) : undefined,
            gauges: Array.isArray(object?.gauges) ? object.gauges.map((e) => Gauge.fromAmino(e)) : [],
            lockable_durations: Array.isArray(object?.lockable_durations) ? object.lockable_durations.map((e) => Duration.fromAmino(e)) : [],
            last_gauge_id: BigInt(object.last_gauge_id)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        if (message.gauges) {
            obj.gauges = message.gauges.map(e => e ? Gauge.toAmino(e) : undefined);
        }
        else {
            obj.gauges = [];
        }
        if (message.lockable_durations) {
            obj.lockable_durations = message.lockable_durations.map(e => e ? Duration.toAmino(e) : undefined);
        }
        else {
            obj.lockable_durations = [];
        }
        obj.last_gauge_id = message.last_gauge_id ? message.last_gauge_id.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return GenesisState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/incentives/genesis-state",
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
            typeUrl: "/osmosis.incentives.GenesisState",
            value: GenesisState.encode(message).finish()
        };
    }
};
//# sourceMappingURL=genesis.js.map
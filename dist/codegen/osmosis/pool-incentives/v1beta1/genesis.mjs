//@ts-nocheck
import { Params, DistrInfo, PoolToGauges } from "./incentives";
import { Duration } from "../../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
function createBaseGenesisState() {
    return {
        params: Params.fromPartial({}),
        lockable_durations: [],
        distr_info: undefined,
        pool_to_gauges: undefined
    };
}
export const GenesisState = {
    typeUrl: "/osmosis.poolincentives.v1beta1.GenesisState",
    encode(message, writer = BinaryWriter.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.lockable_durations) {
            Duration.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.distr_info !== undefined) {
            DistrInfo.encode(message.distr_info, writer.uint32(26).fork()).ldelim();
        }
        if (message.pool_to_gauges !== undefined) {
            PoolToGauges.encode(message.pool_to_gauges, writer.uint32(34).fork()).ldelim();
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
                    message.lockable_durations.push(Duration.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.distr_info = DistrInfo.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.pool_to_gauges = PoolToGauges.decode(reader, reader.uint32());
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
            lockable_durations: Array.isArray(object?.lockable_durations) ? object.lockable_durations.map((e) => Duration.fromJSON(e)) : [],
            distr_info: isSet(object.distr_info) ? DistrInfo.fromJSON(object.distr_info) : undefined,
            pool_to_gauges: isSet(object.pool_to_gauges) ? PoolToGauges.fromJSON(object.pool_to_gauges) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        if (message.lockable_durations) {
            obj.lockable_durations = message.lockable_durations.map(e => e ? Duration.toJSON(e) : undefined);
        }
        else {
            obj.lockable_durations = [];
        }
        message.distr_info !== undefined && (obj.distr_info = message.distr_info ? DistrInfo.toJSON(message.distr_info) : undefined);
        message.pool_to_gauges !== undefined && (obj.pool_to_gauges = message.pool_to_gauges ? PoolToGauges.toJSON(message.pool_to_gauges) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        message.lockable_durations = object.lockable_durations?.map(e => Duration.fromPartial(e)) || [];
        message.distr_info = object.distr_info !== undefined && object.distr_info !== null ? DistrInfo.fromPartial(object.distr_info) : undefined;
        message.pool_to_gauges = object.pool_to_gauges !== undefined && object.pool_to_gauges !== null ? PoolToGauges.fromPartial(object.pool_to_gauges) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            params: object.params ? Params.fromSDK(object.params) : undefined,
            lockable_durations: Array.isArray(object?.lockable_durations) ? object.lockable_durations.map((e) => Duration.fromSDK(e)) : [],
            distr_info: object.distr_info ? DistrInfo.fromSDK(object.distr_info) : undefined,
            pool_to_gauges: object.pool_to_gauges ? PoolToGauges.fromSDK(object.pool_to_gauges) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
        if (message.lockable_durations) {
            obj.lockable_durations = message.lockable_durations.map(e => e ? Duration.toSDK(e) : undefined);
        }
        else {
            obj.lockable_durations = [];
        }
        message.distr_info !== undefined && (obj.distr_info = message.distr_info ? DistrInfo.toSDK(message.distr_info) : undefined);
        message.pool_to_gauges !== undefined && (obj.pool_to_gauges = message.pool_to_gauges ? PoolToGauges.toSDK(message.pool_to_gauges) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            params: object?.params ? Params.fromAmino(object.params) : undefined,
            lockable_durations: Array.isArray(object?.lockable_durations) ? object.lockable_durations.map((e) => Duration.fromAmino(e)) : [],
            distr_info: object?.distr_info ? DistrInfo.fromAmino(object.distr_info) : undefined,
            pool_to_gauges: object?.pool_to_gauges ? PoolToGauges.fromAmino(object.pool_to_gauges) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        if (message.lockable_durations) {
            obj.lockable_durations = message.lockable_durations.map(e => e ? Duration.toAmino(e) : undefined);
        }
        else {
            obj.lockable_durations = [];
        }
        obj.distr_info = message.distr_info ? DistrInfo.toAmino(message.distr_info) : undefined;
        obj.pool_to_gauges = message.pool_to_gauges ? PoolToGauges.toAmino(message.pool_to_gauges) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return GenesisState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/poolincentives/genesis-state",
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
            typeUrl: "/osmosis.poolincentives.v1beta1.GenesisState",
            value: GenesisState.encode(message).finish()
        };
    }
};
//# sourceMappingURL=genesis.js.map
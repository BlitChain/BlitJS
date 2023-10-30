//@ts-nocheck
import { QueryCondition } from "../lockup/lock";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../google/protobuf/timestamp";
import { Duration } from "../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../binary";
import { toTimestamp, fromTimestamp, isSet, fromJsonTimestamp } from "../../helpers";
function createBaseGauge() {
    return {
        id: BigInt(0),
        is_perpetual: false,
        distribute_to: QueryCondition.fromPartial({}),
        coins: [],
        start_time: new Date(),
        num_epochs_paid_over: BigInt(0),
        filled_epochs: BigInt(0),
        distributed_coins: []
    };
}
export const Gauge = {
    typeUrl: "/osmosis.incentives.Gauge",
    encode(message, writer = BinaryWriter.create()) {
        if (message.id !== BigInt(0)) {
            writer.uint32(8).uint64(message.id);
        }
        if (message.is_perpetual === true) {
            writer.uint32(16).bool(message.is_perpetual);
        }
        if (message.distribute_to !== undefined) {
            QueryCondition.encode(message.distribute_to, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.coins) {
            Coin.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.start_time !== undefined) {
            Timestamp.encode(toTimestamp(message.start_time), writer.uint32(42).fork()).ldelim();
        }
        if (message.num_epochs_paid_over !== BigInt(0)) {
            writer.uint32(48).uint64(message.num_epochs_paid_over);
        }
        if (message.filled_epochs !== BigInt(0)) {
            writer.uint32(56).uint64(message.filled_epochs);
        }
        for (const v of message.distributed_coins) {
            Coin.encode(v, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGauge();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
                    break;
                case 2:
                    message.is_perpetual = reader.bool();
                    break;
                case 3:
                    message.distribute_to = QueryCondition.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.coins.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.start_time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.num_epochs_paid_over = reader.uint64();
                    break;
                case 7:
                    message.filled_epochs = reader.uint64();
                    break;
                case 8:
                    message.distributed_coins.push(Coin.decode(reader, reader.uint32()));
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
            id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
            is_perpetual: isSet(object.is_perpetual) ? Boolean(object.is_perpetual) : false,
            distribute_to: isSet(object.distribute_to) ? QueryCondition.fromJSON(object.distribute_to) : undefined,
            coins: Array.isArray(object?.coins) ? object.coins.map((e) => Coin.fromJSON(e)) : [],
            start_time: isSet(object.start_time) ? fromJsonTimestamp(object.start_time) : undefined,
            num_epochs_paid_over: isSet(object.num_epochs_paid_over) ? BigInt(object.num_epochs_paid_over.toString()) : BigInt(0),
            filled_epochs: isSet(object.filled_epochs) ? BigInt(object.filled_epochs.toString()) : BigInt(0),
            distributed_coins: Array.isArray(object?.distributed_coins) ? object.distributed_coins.map((e) => Coin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
        message.is_perpetual !== undefined && (obj.is_perpetual = message.is_perpetual);
        message.distribute_to !== undefined && (obj.distribute_to = message.distribute_to ? QueryCondition.toJSON(message.distribute_to) : undefined);
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.coins = [];
        }
        message.start_time !== undefined && (obj.start_time = message.start_time.toISOString());
        message.num_epochs_paid_over !== undefined && (obj.num_epochs_paid_over = (message.num_epochs_paid_over || BigInt(0)).toString());
        message.filled_epochs !== undefined && (obj.filled_epochs = (message.filled_epochs || BigInt(0)).toString());
        if (message.distributed_coins) {
            obj.distributed_coins = message.distributed_coins.map(e => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.distributed_coins = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGauge();
        message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
        message.is_perpetual = object.is_perpetual ?? false;
        message.distribute_to = object.distribute_to !== undefined && object.distribute_to !== null ? QueryCondition.fromPartial(object.distribute_to) : undefined;
        message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
        message.start_time = object.start_time ?? undefined;
        message.num_epochs_paid_over = object.num_epochs_paid_over !== undefined && object.num_epochs_paid_over !== null ? BigInt(object.num_epochs_paid_over.toString()) : BigInt(0);
        message.filled_epochs = object.filled_epochs !== undefined && object.filled_epochs !== null ? BigInt(object.filled_epochs.toString()) : BigInt(0);
        message.distributed_coins = object.distributed_coins?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            id: object?.id,
            is_perpetual: object?.is_perpetual,
            distribute_to: object.distribute_to ? QueryCondition.fromSDK(object.distribute_to) : undefined,
            coins: Array.isArray(object?.coins) ? object.coins.map((e) => Coin.fromSDK(e)) : [],
            start_time: object.start_time ? Timestamp.fromSDK(object.start_time) : undefined,
            num_epochs_paid_over: object?.num_epochs_paid_over,
            filled_epochs: object?.filled_epochs,
            distributed_coins: Array.isArray(object?.distributed_coins) ? object.distributed_coins.map((e) => Coin.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.id = message.id;
        obj.is_perpetual = message.is_perpetual;
        message.distribute_to !== undefined && (obj.distribute_to = message.distribute_to ? QueryCondition.toSDK(message.distribute_to) : undefined);
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? Coin.toSDK(e) : undefined);
        }
        else {
            obj.coins = [];
        }
        message.start_time !== undefined && (obj.start_time = message.start_time ? Timestamp.toSDK(message.start_time) : undefined);
        obj.num_epochs_paid_over = message.num_epochs_paid_over;
        obj.filled_epochs = message.filled_epochs;
        if (message.distributed_coins) {
            obj.distributed_coins = message.distributed_coins.map(e => e ? Coin.toSDK(e) : undefined);
        }
        else {
            obj.distributed_coins = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            id: BigInt(object.id),
            is_perpetual: object.is_perpetual,
            distribute_to: object?.distribute_to ? QueryCondition.fromAmino(object.distribute_to) : undefined,
            coins: Array.isArray(object?.coins) ? object.coins.map((e) => Coin.fromAmino(e)) : [],
            start_time: object.start_time,
            num_epochs_paid_over: BigInt(object.num_epochs_paid_over),
            filled_epochs: BigInt(object.filled_epochs),
            distributed_coins: Array.isArray(object?.distributed_coins) ? object.distributed_coins.map((e) => Coin.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id ? message.id.toString() : undefined;
        obj.is_perpetual = message.is_perpetual;
        obj.distribute_to = message.distribute_to ? QueryCondition.toAmino(message.distribute_to) : undefined;
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.coins = [];
        }
        obj.start_time = message.start_time;
        obj.num_epochs_paid_over = message.num_epochs_paid_over ? message.num_epochs_paid_over.toString() : undefined;
        obj.filled_epochs = message.filled_epochs ? message.filled_epochs.toString() : undefined;
        if (message.distributed_coins) {
            obj.distributed_coins = message.distributed_coins.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.distributed_coins = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return Gauge.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/incentives/gauge",
            value: Gauge.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Gauge.decode(message.value);
    },
    toProto(message) {
        return Gauge.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.incentives.Gauge",
            value: Gauge.encode(message).finish()
        };
    }
};
function createBaseLockableDurationsInfo() {
    return {
        lockable_durations: []
    };
}
export const LockableDurationsInfo = {
    typeUrl: "/osmosis.incentives.LockableDurationsInfo",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.lockable_durations) {
            Duration.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLockableDurationsInfo();
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
        const message = createBaseLockableDurationsInfo();
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
        return LockableDurationsInfo.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/incentives/lockable-durations-info",
            value: LockableDurationsInfo.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return LockableDurationsInfo.decode(message.value);
    },
    toProto(message) {
        return LockableDurationsInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.incentives.LockableDurationsInfo",
            value: LockableDurationsInfo.encode(message).finish()
        };
    }
};
//# sourceMappingURL=gauge.js.map
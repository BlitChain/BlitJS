//@ts-nocheck
import { Duration } from "../../google/protobuf/duration";
import { Timestamp } from "../../google/protobuf/timestamp";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
import { toTimestamp, fromTimestamp, isSet, fromJsonTimestamp } from "../../helpers";
/**
 * LockQueryType defines the type of the lock query that can
 * either be by duration or start time of the lock.
 */
export var LockQueryType;
(function (LockQueryType) {
    LockQueryType[LockQueryType["ByDuration"] = 0] = "ByDuration";
    LockQueryType[LockQueryType["ByTime"] = 1] = "ByTime";
    LockQueryType[LockQueryType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(LockQueryType || (LockQueryType = {}));
export const LockQueryTypeSDKType = LockQueryType;
export const LockQueryTypeAmino = LockQueryType;
export function lockQueryTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "ByDuration":
            return LockQueryType.ByDuration;
        case 1:
        case "ByTime":
            return LockQueryType.ByTime;
        case -1:
        case "UNRECOGNIZED":
        default:
            return LockQueryType.UNRECOGNIZED;
    }
}
export function lockQueryTypeToJSON(object) {
    switch (object) {
        case LockQueryType.ByDuration:
            return "ByDuration";
        case LockQueryType.ByTime:
            return "ByTime";
        case LockQueryType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBasePeriodLock() {
    return {
        ID: BigInt(0),
        owner: "",
        duration: Duration.fromPartial({}),
        end_time: new Date(),
        coins: []
    };
}
export const PeriodLock = {
    typeUrl: "/osmosis.lockup.PeriodLock",
    encode(message, writer = BinaryWriter.create()) {
        if (message.ID !== BigInt(0)) {
            writer.uint32(8).uint64(message.ID);
        }
        if (message.owner !== "") {
            writer.uint32(18).string(message.owner);
        }
        if (message.duration !== undefined) {
            Duration.encode(message.duration, writer.uint32(26).fork()).ldelim();
        }
        if (message.end_time !== undefined) {
            Timestamp.encode(toTimestamp(message.end_time), writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.coins) {
            Coin.encode(v, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePeriodLock();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ID = reader.uint64();
                    break;
                case 2:
                    message.owner = reader.string();
                    break;
                case 3:
                    message.duration = Duration.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.end_time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.coins.push(Coin.decode(reader, reader.uint32()));
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
            ID: isSet(object.ID) ? BigInt(object.ID.toString()) : BigInt(0),
            owner: isSet(object.owner) ? String(object.owner) : "",
            duration: isSet(object.duration) ? Duration.fromJSON(object.duration) : undefined,
            end_time: isSet(object.end_time) ? fromJsonTimestamp(object.end_time) : undefined,
            coins: Array.isArray(object?.coins) ? object.coins.map((e) => Coin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.ID !== undefined && (obj.ID = (message.ID || BigInt(0)).toString());
        message.owner !== undefined && (obj.owner = message.owner);
        message.duration !== undefined && (obj.duration = message.duration ? Duration.toJSON(message.duration) : undefined);
        message.end_time !== undefined && (obj.end_time = message.end_time.toISOString());
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.coins = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBasePeriodLock();
        message.ID = object.ID !== undefined && object.ID !== null ? BigInt(object.ID.toString()) : BigInt(0);
        message.owner = object.owner ?? "";
        message.duration = object.duration !== undefined && object.duration !== null ? Duration.fromPartial(object.duration) : undefined;
        message.end_time = object.end_time ?? undefined;
        message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            ID: object?.ID,
            owner: object?.owner,
            duration: object.duration ? Duration.fromSDK(object.duration) : undefined,
            end_time: object.end_time ? Timestamp.fromSDK(object.end_time) : undefined,
            coins: Array.isArray(object?.coins) ? object.coins.map((e) => Coin.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.ID = message.ID;
        obj.owner = message.owner;
        message.duration !== undefined && (obj.duration = message.duration ? Duration.toSDK(message.duration) : undefined);
        message.end_time !== undefined && (obj.end_time = message.end_time ? Timestamp.toSDK(message.end_time) : undefined);
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? Coin.toSDK(e) : undefined);
        }
        else {
            obj.coins = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            ID: BigInt(object.ID),
            owner: object.owner,
            duration: object?.duration ? Duration.fromAmino(object.duration) : undefined,
            end_time: object.end_time,
            coins: Array.isArray(object?.coins) ? object.coins.map((e) => Coin.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.ID = message.ID ? message.ID.toString() : undefined;
        obj.owner = message.owner;
        obj.duration = message.duration ? Duration.toAmino(message.duration) : undefined;
        obj.end_time = message.end_time;
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.coins = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return PeriodLock.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/period-lock",
            value: PeriodLock.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return PeriodLock.decode(message.value);
    },
    toProto(message) {
        return PeriodLock.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.PeriodLock",
            value: PeriodLock.encode(message).finish()
        };
    }
};
function createBaseQueryCondition() {
    return {
        lock_query_type: 0,
        denom: "",
        duration: Duration.fromPartial({}),
        timestamp: new Date()
    };
}
export const QueryCondition = {
    typeUrl: "/osmosis.lockup.QueryCondition",
    encode(message, writer = BinaryWriter.create()) {
        if (message.lock_query_type !== 0) {
            writer.uint32(8).int32(message.lock_query_type);
        }
        if (message.denom !== "") {
            writer.uint32(18).string(message.denom);
        }
        if (message.duration !== undefined) {
            Duration.encode(message.duration, writer.uint32(26).fork()).ldelim();
        }
        if (message.timestamp !== undefined) {
            Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCondition();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lock_query_type = reader.int32();
                    break;
                case 2:
                    message.denom = reader.string();
                    break;
                case 3:
                    message.duration = Duration.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
            lock_query_type: isSet(object.lock_query_type) ? lockQueryTypeFromJSON(object.lock_query_type) : -1,
            denom: isSet(object.denom) ? String(object.denom) : "",
            duration: isSet(object.duration) ? Duration.fromJSON(object.duration) : undefined,
            timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.lock_query_type !== undefined && (obj.lock_query_type = lockQueryTypeToJSON(message.lock_query_type));
        message.denom !== undefined && (obj.denom = message.denom);
        message.duration !== undefined && (obj.duration = message.duration ? Duration.toJSON(message.duration) : undefined);
        message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryCondition();
        message.lock_query_type = object.lock_query_type ?? 0;
        message.denom = object.denom ?? "";
        message.duration = object.duration !== undefined && object.duration !== null ? Duration.fromPartial(object.duration) : undefined;
        message.timestamp = object.timestamp ?? undefined;
        return message;
    },
    fromSDK(object) {
        return {
            lock_query_type: isSet(object.lock_query_type) ? lockQueryTypeFromJSON(object.lock_query_type) : -1,
            denom: object?.denom,
            duration: object.duration ? Duration.fromSDK(object.duration) : undefined,
            timestamp: object.timestamp ? Timestamp.fromSDK(object.timestamp) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.lock_query_type !== undefined && (obj.lock_query_type = lockQueryTypeToJSON(message.lock_query_type));
        obj.denom = message.denom;
        message.duration !== undefined && (obj.duration = message.duration ? Duration.toSDK(message.duration) : undefined);
        message.timestamp !== undefined && (obj.timestamp = message.timestamp ? Timestamp.toSDK(message.timestamp) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            lock_query_type: isSet(object.lock_query_type) ? lockQueryTypeFromJSON(object.lock_query_type) : -1,
            denom: object.denom,
            duration: object?.duration ? Duration.fromAmino(object.duration) : undefined,
            timestamp: object.timestamp
        };
    },
    toAmino(message) {
        const obj = {};
        obj.lock_query_type = message.lock_query_type;
        obj.denom = message.denom;
        obj.duration = message.duration ? Duration.toAmino(message.duration) : undefined;
        obj.timestamp = message.timestamp;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryCondition.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/query-condition",
            value: QueryCondition.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryCondition.decode(message.value);
    },
    toProto(message) {
        return QueryCondition.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.QueryCondition",
            value: QueryCondition.encode(message).finish()
        };
    }
};
function createBaseSyntheticLock() {
    return {
        underlying_lock_id: BigInt(0),
        synth_denom: "",
        end_time: new Date(),
        duration: Duration.fromPartial({})
    };
}
export const SyntheticLock = {
    typeUrl: "/osmosis.lockup.SyntheticLock",
    encode(message, writer = BinaryWriter.create()) {
        if (message.underlying_lock_id !== BigInt(0)) {
            writer.uint32(8).uint64(message.underlying_lock_id);
        }
        if (message.synth_denom !== "") {
            writer.uint32(18).string(message.synth_denom);
        }
        if (message.end_time !== undefined) {
            Timestamp.encode(toTimestamp(message.end_time), writer.uint32(26).fork()).ldelim();
        }
        if (message.duration !== undefined) {
            Duration.encode(message.duration, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSyntheticLock();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.underlying_lock_id = reader.uint64();
                    break;
                case 2:
                    message.synth_denom = reader.string();
                    break;
                case 3:
                    message.end_time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.duration = Duration.decode(reader, reader.uint32());
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
            underlying_lock_id: isSet(object.underlying_lock_id) ? BigInt(object.underlying_lock_id.toString()) : BigInt(0),
            synth_denom: isSet(object.synth_denom) ? String(object.synth_denom) : "",
            end_time: isSet(object.end_time) ? fromJsonTimestamp(object.end_time) : undefined,
            duration: isSet(object.duration) ? Duration.fromJSON(object.duration) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.underlying_lock_id !== undefined && (obj.underlying_lock_id = (message.underlying_lock_id || BigInt(0)).toString());
        message.synth_denom !== undefined && (obj.synth_denom = message.synth_denom);
        message.end_time !== undefined && (obj.end_time = message.end_time.toISOString());
        message.duration !== undefined && (obj.duration = message.duration ? Duration.toJSON(message.duration) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSyntheticLock();
        message.underlying_lock_id = object.underlying_lock_id !== undefined && object.underlying_lock_id !== null ? BigInt(object.underlying_lock_id.toString()) : BigInt(0);
        message.synth_denom = object.synth_denom ?? "";
        message.end_time = object.end_time ?? undefined;
        message.duration = object.duration !== undefined && object.duration !== null ? Duration.fromPartial(object.duration) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            underlying_lock_id: object?.underlying_lock_id,
            synth_denom: object?.synth_denom,
            end_time: object.end_time ? Timestamp.fromSDK(object.end_time) : undefined,
            duration: object.duration ? Duration.fromSDK(object.duration) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.underlying_lock_id = message.underlying_lock_id;
        obj.synth_denom = message.synth_denom;
        message.end_time !== undefined && (obj.end_time = message.end_time ? Timestamp.toSDK(message.end_time) : undefined);
        message.duration !== undefined && (obj.duration = message.duration ? Duration.toSDK(message.duration) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            underlying_lock_id: BigInt(object.underlying_lock_id),
            synth_denom: object.synth_denom,
            end_time: object.end_time,
            duration: object?.duration ? Duration.fromAmino(object.duration) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.underlying_lock_id = message.underlying_lock_id ? message.underlying_lock_id.toString() : undefined;
        obj.synth_denom = message.synth_denom;
        obj.end_time = message.end_time;
        obj.duration = message.duration ? Duration.toAmino(message.duration) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return SyntheticLock.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/synthetic-lock",
            value: SyntheticLock.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return SyntheticLock.decode(message.value);
    },
    toProto(message) {
        return SyntheticLock.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.SyntheticLock",
            value: SyntheticLock.encode(message).finish()
        };
    }
};
//# sourceMappingURL=lock.js.map
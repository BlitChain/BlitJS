//@ts-nocheck
import { PeriodLock, SyntheticLock } from "./lock";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
function createBaseGenesisState() {
    return {
        last_lock_id: BigInt(0),
        locks: [],
        synthetic_locks: []
    };
}
export const GenesisState = {
    typeUrl: "/osmosis.lockup.GenesisState",
    encode(message, writer = BinaryWriter.create()) {
        if (message.last_lock_id !== BigInt(0)) {
            writer.uint32(8).uint64(message.last_lock_id);
        }
        for (const v of message.locks) {
            PeriodLock.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.synthetic_locks) {
            SyntheticLock.encode(v, writer.uint32(26).fork()).ldelim();
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
                    message.last_lock_id = reader.uint64();
                    break;
                case 2:
                    message.locks.push(PeriodLock.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.synthetic_locks.push(SyntheticLock.decode(reader, reader.uint32()));
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
            last_lock_id: isSet(object.last_lock_id) ? BigInt(object.last_lock_id.toString()) : BigInt(0),
            locks: Array.isArray(object?.locks) ? object.locks.map((e) => PeriodLock.fromJSON(e)) : [],
            synthetic_locks: Array.isArray(object?.synthetic_locks) ? object.synthetic_locks.map((e) => SyntheticLock.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.last_lock_id !== undefined && (obj.last_lock_id = (message.last_lock_id || BigInt(0)).toString());
        if (message.locks) {
            obj.locks = message.locks.map(e => e ? PeriodLock.toJSON(e) : undefined);
        }
        else {
            obj.locks = [];
        }
        if (message.synthetic_locks) {
            obj.synthetic_locks = message.synthetic_locks.map(e => e ? SyntheticLock.toJSON(e) : undefined);
        }
        else {
            obj.synthetic_locks = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.last_lock_id = object.last_lock_id !== undefined && object.last_lock_id !== null ? BigInt(object.last_lock_id.toString()) : BigInt(0);
        message.locks = object.locks?.map(e => PeriodLock.fromPartial(e)) || [];
        message.synthetic_locks = object.synthetic_locks?.map(e => SyntheticLock.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            last_lock_id: object?.last_lock_id,
            locks: Array.isArray(object?.locks) ? object.locks.map((e) => PeriodLock.fromSDK(e)) : [],
            synthetic_locks: Array.isArray(object?.synthetic_locks) ? object.synthetic_locks.map((e) => SyntheticLock.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.last_lock_id = message.last_lock_id;
        if (message.locks) {
            obj.locks = message.locks.map(e => e ? PeriodLock.toSDK(e) : undefined);
        }
        else {
            obj.locks = [];
        }
        if (message.synthetic_locks) {
            obj.synthetic_locks = message.synthetic_locks.map(e => e ? SyntheticLock.toSDK(e) : undefined);
        }
        else {
            obj.synthetic_locks = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            last_lock_id: BigInt(object.last_lock_id),
            locks: Array.isArray(object?.locks) ? object.locks.map((e) => PeriodLock.fromAmino(e)) : [],
            synthetic_locks: Array.isArray(object?.synthetic_locks) ? object.synthetic_locks.map((e) => SyntheticLock.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.last_lock_id = message.last_lock_id ? message.last_lock_id.toString() : undefined;
        if (message.locks) {
            obj.locks = message.locks.map(e => e ? PeriodLock.toAmino(e) : undefined);
        }
        else {
            obj.locks = [];
        }
        if (message.synthetic_locks) {
            obj.synthetic_locks = message.synthetic_locks.map(e => e ? SyntheticLock.toAmino(e) : undefined);
        }
        else {
            obj.synthetic_locks = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return GenesisState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/genesis-state",
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
            typeUrl: "/osmosis.lockup.GenesisState",
            value: GenesisState.encode(message).finish()
        };
    }
};
//# sourceMappingURL=genesis.js.map
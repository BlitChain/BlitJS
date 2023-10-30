"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = void 0;
//@ts-nocheck
const lock_1 = require("./lock");
const binary_1 = require("../../binary");
const helpers_1 = require("../../helpers");
function createBaseGenesisState() {
    return {
        last_lock_id: BigInt(0),
        locks: [],
        synthetic_locks: []
    };
}
exports.GenesisState = {
    typeUrl: "/osmosis.lockup.GenesisState",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.last_lock_id !== BigInt(0)) {
            writer.uint32(8).uint64(message.last_lock_id);
        }
        for (const v of message.locks) {
            lock_1.PeriodLock.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.synthetic_locks) {
            lock_1.SyntheticLock.encode(v, writer.uint32(26).fork()).ldelim();
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
                    message.last_lock_id = reader.uint64();
                    break;
                case 2:
                    message.locks.push(lock_1.PeriodLock.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.synthetic_locks.push(lock_1.SyntheticLock.decode(reader, reader.uint32()));
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
            last_lock_id: (0, helpers_1.isSet)(object.last_lock_id) ? BigInt(object.last_lock_id.toString()) : BigInt(0),
            locks: Array.isArray(object?.locks) ? object.locks.map((e) => lock_1.PeriodLock.fromJSON(e)) : [],
            synthetic_locks: Array.isArray(object?.synthetic_locks) ? object.synthetic_locks.map((e) => lock_1.SyntheticLock.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.last_lock_id !== undefined && (obj.last_lock_id = (message.last_lock_id || BigInt(0)).toString());
        if (message.locks) {
            obj.locks = message.locks.map(e => e ? lock_1.PeriodLock.toJSON(e) : undefined);
        }
        else {
            obj.locks = [];
        }
        if (message.synthetic_locks) {
            obj.synthetic_locks = message.synthetic_locks.map(e => e ? lock_1.SyntheticLock.toJSON(e) : undefined);
        }
        else {
            obj.synthetic_locks = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.last_lock_id = object.last_lock_id !== undefined && object.last_lock_id !== null ? BigInt(object.last_lock_id.toString()) : BigInt(0);
        message.locks = object.locks?.map(e => lock_1.PeriodLock.fromPartial(e)) || [];
        message.synthetic_locks = object.synthetic_locks?.map(e => lock_1.SyntheticLock.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            last_lock_id: object?.last_lock_id,
            locks: Array.isArray(object?.locks) ? object.locks.map((e) => lock_1.PeriodLock.fromSDK(e)) : [],
            synthetic_locks: Array.isArray(object?.synthetic_locks) ? object.synthetic_locks.map((e) => lock_1.SyntheticLock.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.last_lock_id = message.last_lock_id;
        if (message.locks) {
            obj.locks = message.locks.map(e => e ? lock_1.PeriodLock.toSDK(e) : undefined);
        }
        else {
            obj.locks = [];
        }
        if (message.synthetic_locks) {
            obj.synthetic_locks = message.synthetic_locks.map(e => e ? lock_1.SyntheticLock.toSDK(e) : undefined);
        }
        else {
            obj.synthetic_locks = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            last_lock_id: BigInt(object.last_lock_id),
            locks: Array.isArray(object?.locks) ? object.locks.map((e) => lock_1.PeriodLock.fromAmino(e)) : [],
            synthetic_locks: Array.isArray(object?.synthetic_locks) ? object.synthetic_locks.map((e) => lock_1.SyntheticLock.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.last_lock_id = message.last_lock_id ? message.last_lock_id.toString() : undefined;
        if (message.locks) {
            obj.locks = message.locks.map(e => e ? lock_1.PeriodLock.toAmino(e) : undefined);
        }
        else {
            obj.locks = [];
        }
        if (message.synthetic_locks) {
            obj.synthetic_locks = message.synthetic_locks.map(e => e ? lock_1.SyntheticLock.toAmino(e) : undefined);
        }
        else {
            obj.synthetic_locks = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GenesisState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/genesis-state",
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
            typeUrl: "/osmosis.lockup.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
//# sourceMappingURL=genesis.js.map
//@ts-nocheck
import { PeriodLock, PeriodLockAmino, PeriodLockSDKType, SyntheticLock, SyntheticLockAmino, SyntheticLockSDKType } from "./lock";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
/** GenesisState defines the lockup module's genesis state. */
export interface GenesisState {
  last_lock_id: bigint;
  locks: PeriodLock[];
  synthetic_locks: SyntheticLock[];
}
export interface GenesisStateProtoMsg {
  type_url: "/osmosis.lockup.GenesisState";
  value: Uint8Array;
}
export interface GenesisStateProtoMsg {
  type_url: "/osmosis.lockup.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the lockup module's genesis state. */
export interface GenesisStateAmino {
  last_lock_id: string;
  locks: PeriodLockAmino[];
  synthetic_locks: SyntheticLockAmino[];
}
export interface GenesisStateAminoMsg {
  type: "osmosis/lockup/genesis-state";
  value: GenesisStateAmino;
}
/** GenesisState defines the lockup module's genesis state. */
export interface GenesisStateSDKType {
  last_lock_id: bigint;
  locks: PeriodLockSDKType[];
  synthetic_locks: SyntheticLockSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    last_lock_id: BigInt(0),
    locks: [],
    synthetic_locks: []
  };
}
export const GenesisState = {
  typeUrl: "/osmosis.lockup.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.last_lock_id !== BigInt(0)) {
      writer.uint32(8).uint64(message.last_lock_id);
    }
    for (const v of message.locks) {
      PeriodLock.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.synthetic_locks) {
      SyntheticLock.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
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
  fromJSON(object: any): GenesisState {
    return {
      last_lock_id: isSet(object.last_lock_id) ? BigInt(object.last_lock_id.toString()) : BigInt(0),
      locks: Array.isArray(object?.locks) ? object.locks.map((e: any) => PeriodLock.fromJSON(e)) : [],
      synthetic_locks: Array.isArray(object?.synthetic_locks) ? object.synthetic_locks.map((e: any) => SyntheticLock.fromJSON(e)) : []
    };
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.last_lock_id !== undefined && (obj.last_lock_id = (message.last_lock_id || BigInt(0)).toString());
    if (message.locks) {
      obj.locks = message.locks.map(e => e ? PeriodLock.toJSON(e) : undefined);
    } else {
      obj.locks = [];
    }
    if (message.synthetic_locks) {
      obj.synthetic_locks = message.synthetic_locks.map(e => e ? SyntheticLock.toJSON(e) : undefined);
    } else {
      obj.synthetic_locks = [];
    }
    return obj;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.last_lock_id = object.last_lock_id !== undefined && object.last_lock_id !== null ? BigInt(object.last_lock_id.toString()) : BigInt(0);
    message.locks = object.locks?.map(e => PeriodLock.fromPartial(e)) || [];
    message.synthetic_locks = object.synthetic_locks?.map(e => SyntheticLock.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: GenesisStateSDKType): GenesisState {
    return {
      last_lock_id: object?.last_lock_id,
      locks: Array.isArray(object?.locks) ? object.locks.map((e: any) => PeriodLock.fromSDK(e)) : [],
      synthetic_locks: Array.isArray(object?.synthetic_locks) ? object.synthetic_locks.map((e: any) => SyntheticLock.fromSDK(e)) : []
    };
  },
  toSDK(message: GenesisState): GenesisStateSDKType {
    const obj: any = {};
    obj.last_lock_id = message.last_lock_id;
    if (message.locks) {
      obj.locks = message.locks.map(e => e ? PeriodLock.toSDK(e) : undefined);
    } else {
      obj.locks = [];
    }
    if (message.synthetic_locks) {
      obj.synthetic_locks = message.synthetic_locks.map(e => e ? SyntheticLock.toSDK(e) : undefined);
    } else {
      obj.synthetic_locks = [];
    }
    return obj;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      last_lock_id: BigInt(object.last_lock_id),
      locks: Array.isArray(object?.locks) ? object.locks.map((e: any) => PeriodLock.fromAmino(e)) : [],
      synthetic_locks: Array.isArray(object?.synthetic_locks) ? object.synthetic_locks.map((e: any) => SyntheticLock.fromAmino(e)) : []
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.last_lock_id = message.last_lock_id ? message.last_lock_id.toString() : undefined;
    if (message.locks) {
      obj.locks = message.locks.map(e => e ? PeriodLock.toAmino(e) : undefined);
    } else {
      obj.locks = [];
    }
    if (message.synthetic_locks) {
      obj.synthetic_locks = message.synthetic_locks.map(e => e ? SyntheticLock.toAmino(e) : undefined);
    } else {
      obj.synthetic_locks = [];
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  toAminoMsg(message: GenesisState): GenesisStateAminoMsg {
    return {
      type: "osmosis/lockup/genesis-state",
      value: GenesisState.toAmino(message)
    };
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/osmosis.lockup.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
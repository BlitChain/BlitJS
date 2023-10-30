//@ts-nocheck
import { Downtime, downtimeFromJSON, downtimeToJSON } from "./downtime_duration";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { toTimestamp, fromTimestamp, isSet, fromJsonTimestamp } from "../../../helpers";
export interface GenesisDowntimeEntry {
  duration: Downtime;
  last_downtime: Date;
}
export interface GenesisDowntimeEntryProtoMsg {
  type_url: "/osmosis.downtimedetector.v1beta1.GenesisDowntimeEntry";
  value: Uint8Array;
}
export interface GenesisDowntimeEntryProtoMsg {
  type_url: "/osmosis.downtimedetector.v1beta1.GenesisDowntimeEntry";
  value: Uint8Array;
}
export interface GenesisDowntimeEntryAmino {
  duration: Downtime;
  last_downtime?: Date;
}
export interface GenesisDowntimeEntryAminoMsg {
  type: "osmosis/downtimedetector/genesis-downtime-entry";
  value: GenesisDowntimeEntryAmino;
}
export interface GenesisDowntimeEntrySDKType {
  duration: Downtime;
  last_downtime: Date;
}
/** GenesisState defines the twap module's genesis state. */
export interface GenesisState {
  downtimes: GenesisDowntimeEntry[];
  last_block_time: Date;
}
export interface GenesisStateProtoMsg {
  type_url: "/osmosis.downtimedetector.v1beta1.GenesisState";
  value: Uint8Array;
}
export interface GenesisStateProtoMsg {
  type_url: "/osmosis.downtimedetector.v1beta1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the twap module's genesis state. */
export interface GenesisStateAmino {
  downtimes: GenesisDowntimeEntryAmino[];
  last_block_time?: Date;
}
export interface GenesisStateAminoMsg {
  type: "osmosis/downtimedetector/genesis-state";
  value: GenesisStateAmino;
}
/** GenesisState defines the twap module's genesis state. */
export interface GenesisStateSDKType {
  downtimes: GenesisDowntimeEntrySDKType[];
  last_block_time: Date;
}
function createBaseGenesisDowntimeEntry(): GenesisDowntimeEntry {
  return {
    duration: 0,
    last_downtime: new Date()
  };
}
export const GenesisDowntimeEntry = {
  typeUrl: "/osmosis.downtimedetector.v1beta1.GenesisDowntimeEntry",
  encode(message: GenesisDowntimeEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.duration !== 0) {
      writer.uint32(8).int32(message.duration);
    }
    if (message.last_downtime !== undefined) {
      Timestamp.encode(toTimestamp(message.last_downtime), writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisDowntimeEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisDowntimeEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.duration = (reader.int32() as any);
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
  fromJSON(object: any): GenesisDowntimeEntry {
    return {
      duration: isSet(object.duration) ? downtimeFromJSON(object.duration) : -1,
      last_downtime: isSet(object.last_downtime) ? fromJsonTimestamp(object.last_downtime) : undefined
    };
  },
  toJSON(message: GenesisDowntimeEntry): unknown {
    const obj: any = {};
    message.duration !== undefined && (obj.duration = downtimeToJSON(message.duration));
    message.last_downtime !== undefined && (obj.last_downtime = message.last_downtime.toISOString());
    return obj;
  },
  fromPartial(object: Partial<GenesisDowntimeEntry>): GenesisDowntimeEntry {
    const message = createBaseGenesisDowntimeEntry();
    message.duration = object.duration ?? 0;
    message.last_downtime = object.last_downtime ?? undefined;
    return message;
  },
  fromSDK(object: GenesisDowntimeEntrySDKType): GenesisDowntimeEntry {
    return {
      duration: isSet(object.duration) ? downtimeFromJSON(object.duration) : -1,
      last_downtime: object.last_downtime ? Timestamp.fromSDK(object.last_downtime) : undefined
    };
  },
  toSDK(message: GenesisDowntimeEntry): GenesisDowntimeEntrySDKType {
    const obj: any = {};
    message.duration !== undefined && (obj.duration = downtimeToJSON(message.duration));
    message.last_downtime !== undefined && (obj.last_downtime = message.last_downtime ? Timestamp.toSDK(message.last_downtime) : undefined);
    return obj;
  },
  fromAmino(object: GenesisDowntimeEntryAmino): GenesisDowntimeEntry {
    return {
      duration: isSet(object.duration) ? downtimeFromJSON(object.duration) : -1,
      last_downtime: object.last_downtime
    };
  },
  toAmino(message: GenesisDowntimeEntry): GenesisDowntimeEntryAmino {
    const obj: any = {};
    obj.duration = message.duration;
    obj.last_downtime = message.last_downtime;
    return obj;
  },
  fromAminoMsg(object: GenesisDowntimeEntryAminoMsg): GenesisDowntimeEntry {
    return GenesisDowntimeEntry.fromAmino(object.value);
  },
  toAminoMsg(message: GenesisDowntimeEntry): GenesisDowntimeEntryAminoMsg {
    return {
      type: "osmosis/downtimedetector/genesis-downtime-entry",
      value: GenesisDowntimeEntry.toAmino(message)
    };
  },
  fromProtoMsg(message: GenesisDowntimeEntryProtoMsg): GenesisDowntimeEntry {
    return GenesisDowntimeEntry.decode(message.value);
  },
  toProto(message: GenesisDowntimeEntry): Uint8Array {
    return GenesisDowntimeEntry.encode(message).finish();
  },
  toProtoMsg(message: GenesisDowntimeEntry): GenesisDowntimeEntryProtoMsg {
    return {
      typeUrl: "/osmosis.downtimedetector.v1beta1.GenesisDowntimeEntry",
      value: GenesisDowntimeEntry.encode(message).finish()
    };
  }
};
function createBaseGenesisState(): GenesisState {
  return {
    downtimes: [],
    last_block_time: new Date()
  };
}
export const GenesisState = {
  typeUrl: "/osmosis.downtimedetector.v1beta1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.downtimes) {
      GenesisDowntimeEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.last_block_time !== undefined) {
      Timestamp.encode(toTimestamp(message.last_block_time), writer.uint32(18).fork()).ldelim();
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
  fromJSON(object: any): GenesisState {
    return {
      downtimes: Array.isArray(object?.downtimes) ? object.downtimes.map((e: any) => GenesisDowntimeEntry.fromJSON(e)) : [],
      last_block_time: isSet(object.last_block_time) ? fromJsonTimestamp(object.last_block_time) : undefined
    };
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.downtimes) {
      obj.downtimes = message.downtimes.map(e => e ? GenesisDowntimeEntry.toJSON(e) : undefined);
    } else {
      obj.downtimes = [];
    }
    message.last_block_time !== undefined && (obj.last_block_time = message.last_block_time.toISOString());
    return obj;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.downtimes = object.downtimes?.map(e => GenesisDowntimeEntry.fromPartial(e)) || [];
    message.last_block_time = object.last_block_time ?? undefined;
    return message;
  },
  fromSDK(object: GenesisStateSDKType): GenesisState {
    return {
      downtimes: Array.isArray(object?.downtimes) ? object.downtimes.map((e: any) => GenesisDowntimeEntry.fromSDK(e)) : [],
      last_block_time: object.last_block_time ? Timestamp.fromSDK(object.last_block_time) : undefined
    };
  },
  toSDK(message: GenesisState): GenesisStateSDKType {
    const obj: any = {};
    if (message.downtimes) {
      obj.downtimes = message.downtimes.map(e => e ? GenesisDowntimeEntry.toSDK(e) : undefined);
    } else {
      obj.downtimes = [];
    }
    message.last_block_time !== undefined && (obj.last_block_time = message.last_block_time ? Timestamp.toSDK(message.last_block_time) : undefined);
    return obj;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      downtimes: Array.isArray(object?.downtimes) ? object.downtimes.map((e: any) => GenesisDowntimeEntry.fromAmino(e)) : [],
      last_block_time: object.last_block_time
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.downtimes) {
      obj.downtimes = message.downtimes.map(e => e ? GenesisDowntimeEntry.toAmino(e) : undefined);
    } else {
      obj.downtimes = [];
    }
    obj.last_block_time = message.last_block_time;
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  toAminoMsg(message: GenesisState): GenesisStateAminoMsg {
    return {
      type: "osmosis/downtimedetector/genesis-state",
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
      typeUrl: "/osmosis.downtimedetector.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
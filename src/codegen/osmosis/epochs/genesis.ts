//@ts-nocheck
import { Timestamp } from "../../google/protobuf/timestamp";
import { Duration, DurationAmino, DurationSDKType } from "../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../binary";
import { toTimestamp, fromTimestamp, isSet, fromJsonTimestamp } from "../../helpers";
/**
 * EpochInfo is a struct that describes the data going into
 * a timer defined by the x/epochs module.
 */
export interface EpochInfo {
  /** identifier is a unique reference to this particular timer. */
  identifier: string;
  /**
   * start_time is the time at which the timer first ever ticks.
   * If start_time is in the future, the epoch will not begin until the start
   * time.
   */
  start_time: Date;
  /**
   * duration is the time in between epoch ticks.
   * In order for intended behavior to be met, duration should
   * be greater than the chains expected block time.
   * Duration must be non-zero.
   */
  duration: Duration;
  /**
   * current_epoch is the current epoch number, or in other words,
   * how many times has the timer 'ticked'.
   * The first tick (current_epoch=1) is defined as
   * the first block whose blocktime is greater than the EpochInfo start_time.
   */
  current_epoch: bigint;
  /**
   * current_epoch_start_time describes the start time of the current timer
   * interval. The interval is (current_epoch_start_time,
   * current_epoch_start_time + duration] When the timer ticks, this is set to
   * current_epoch_start_time = last_epoch_start_time + duration only one timer
   * tick for a given identifier can occur per block.
   * 
   * NOTE! The current_epoch_start_time may diverge significantly from the
   * wall-clock time the epoch began at. Wall-clock time of epoch start may be
   * >> current_epoch_start_time. Suppose current_epoch_start_time = 10,
   * duration = 5. Suppose the chain goes offline at t=14, and comes back online
   * at t=30, and produces blocks at every successive time. (t=31, 32, etc.)
   * * The t=30 block will start the epoch for (10, 15]
   * * The t=31 block will start the epoch for (15, 20]
   * * The t=32 block will start the epoch for (20, 25]
   * * The t=33 block will start the epoch for (25, 30]
   * * The t=34 block will start the epoch for (30, 35]
   * * The **t=36** block will start the epoch for (35, 40]
   */
  current_epoch_start_time: Date;
  /**
   * epoch_counting_started is a boolean, that indicates whether this
   * epoch timer has began yet.
   */
  epoch_counting_started: boolean;
  /**
   * current_epoch_start_height is the block height at which the current epoch
   * started. (The block height at which the timer last ticked)
   */
  current_epoch_start_height: bigint;
}
export interface EpochInfoProtoMsg {
  type_url: "/osmosis.epochs.v1beta1.EpochInfo";
  value: Uint8Array;
}
export interface EpochInfoProtoMsg {
  type_url: "/osmosis.epochs.v1beta1.EpochInfo";
  value: Uint8Array;
}
/**
 * EpochInfo is a struct that describes the data going into
 * a timer defined by the x/epochs module.
 */
export interface EpochInfoAmino {
  /** identifier is a unique reference to this particular timer. */
  identifier: string;
  /**
   * start_time is the time at which the timer first ever ticks.
   * If start_time is in the future, the epoch will not begin until the start
   * time.
   */
  start_time?: Date;
  /**
   * duration is the time in between epoch ticks.
   * In order for intended behavior to be met, duration should
   * be greater than the chains expected block time.
   * Duration must be non-zero.
   */
  duration?: DurationAmino;
  /**
   * current_epoch is the current epoch number, or in other words,
   * how many times has the timer 'ticked'.
   * The first tick (current_epoch=1) is defined as
   * the first block whose blocktime is greater than the EpochInfo start_time.
   */
  current_epoch: string;
  /**
   * current_epoch_start_time describes the start time of the current timer
   * interval. The interval is (current_epoch_start_time,
   * current_epoch_start_time + duration] When the timer ticks, this is set to
   * current_epoch_start_time = last_epoch_start_time + duration only one timer
   * tick for a given identifier can occur per block.
   * 
   * NOTE! The current_epoch_start_time may diverge significantly from the
   * wall-clock time the epoch began at. Wall-clock time of epoch start may be
   * >> current_epoch_start_time. Suppose current_epoch_start_time = 10,
   * duration = 5. Suppose the chain goes offline at t=14, and comes back online
   * at t=30, and produces blocks at every successive time. (t=31, 32, etc.)
   * * The t=30 block will start the epoch for (10, 15]
   * * The t=31 block will start the epoch for (15, 20]
   * * The t=32 block will start the epoch for (20, 25]
   * * The t=33 block will start the epoch for (25, 30]
   * * The t=34 block will start the epoch for (30, 35]
   * * The **t=36** block will start the epoch for (35, 40]
   */
  current_epoch_start_time?: Date;
  /**
   * epoch_counting_started is a boolean, that indicates whether this
   * epoch timer has began yet.
   */
  epoch_counting_started: boolean;
  /**
   * current_epoch_start_height is the block height at which the current epoch
   * started. (The block height at which the timer last ticked)
   */
  current_epoch_start_height: string;
}
export interface EpochInfoAminoMsg {
  type: "osmosis/epochs/epoch-info";
  value: EpochInfoAmino;
}
/**
 * EpochInfo is a struct that describes the data going into
 * a timer defined by the x/epochs module.
 */
export interface EpochInfoSDKType {
  identifier: string;
  start_time: Date;
  duration: DurationSDKType;
  current_epoch: bigint;
  current_epoch_start_time: Date;
  epoch_counting_started: boolean;
  current_epoch_start_height: bigint;
}
/** GenesisState defines the epochs module's genesis state. */
export interface GenesisState {
  epochs: EpochInfo[];
}
export interface GenesisStateProtoMsg {
  type_url: "/osmosis.epochs.v1beta1.GenesisState";
  value: Uint8Array;
}
export interface GenesisStateProtoMsg {
  type_url: "/osmosis.epochs.v1beta1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the epochs module's genesis state. */
export interface GenesisStateAmino {
  epochs: EpochInfoAmino[];
}
export interface GenesisStateAminoMsg {
  type: "osmosis/epochs/genesis-state";
  value: GenesisStateAmino;
}
/** GenesisState defines the epochs module's genesis state. */
export interface GenesisStateSDKType {
  epochs: EpochInfoSDKType[];
}
function createBaseEpochInfo(): EpochInfo {
  return {
    identifier: "",
    start_time: new Date(),
    duration: Duration.fromPartial({}),
    current_epoch: BigInt(0),
    current_epoch_start_time: new Date(),
    epoch_counting_started: false,
    current_epoch_start_height: BigInt(0)
  };
}
export const EpochInfo = {
  typeUrl: "/osmosis.epochs.v1beta1.EpochInfo",
  encode(message: EpochInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.identifier !== "") {
      writer.uint32(10).string(message.identifier);
    }
    if (message.start_time !== undefined) {
      Timestamp.encode(toTimestamp(message.start_time), writer.uint32(18).fork()).ldelim();
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(26).fork()).ldelim();
    }
    if (message.current_epoch !== BigInt(0)) {
      writer.uint32(32).int64(message.current_epoch);
    }
    if (message.current_epoch_start_time !== undefined) {
      Timestamp.encode(toTimestamp(message.current_epoch_start_time), writer.uint32(42).fork()).ldelim();
    }
    if (message.epoch_counting_started === true) {
      writer.uint32(48).bool(message.epoch_counting_started);
    }
    if (message.current_epoch_start_height !== BigInt(0)) {
      writer.uint32(64).int64(message.current_epoch_start_height);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EpochInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEpochInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.identifier = reader.string();
          break;
        case 2:
          message.start_time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 3:
          message.duration = Duration.decode(reader, reader.uint32());
          break;
        case 4:
          message.current_epoch = reader.int64();
          break;
        case 5:
          message.current_epoch_start_time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 6:
          message.epoch_counting_started = reader.bool();
          break;
        case 8:
          message.current_epoch_start_height = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EpochInfo {
    return {
      identifier: isSet(object.identifier) ? String(object.identifier) : "",
      start_time: isSet(object.start_time) ? fromJsonTimestamp(object.start_time) : undefined,
      duration: isSet(object.duration) ? Duration.fromJSON(object.duration) : undefined,
      current_epoch: isSet(object.current_epoch) ? BigInt(object.current_epoch.toString()) : BigInt(0),
      current_epoch_start_time: isSet(object.current_epoch_start_time) ? fromJsonTimestamp(object.current_epoch_start_time) : undefined,
      epoch_counting_started: isSet(object.epoch_counting_started) ? Boolean(object.epoch_counting_started) : false,
      current_epoch_start_height: isSet(object.current_epoch_start_height) ? BigInt(object.current_epoch_start_height.toString()) : BigInt(0)
    };
  },
  toJSON(message: EpochInfo): unknown {
    const obj: any = {};
    message.identifier !== undefined && (obj.identifier = message.identifier);
    message.start_time !== undefined && (obj.start_time = message.start_time.toISOString());
    message.duration !== undefined && (obj.duration = message.duration ? Duration.toJSON(message.duration) : undefined);
    message.current_epoch !== undefined && (obj.current_epoch = (message.current_epoch || BigInt(0)).toString());
    message.current_epoch_start_time !== undefined && (obj.current_epoch_start_time = message.current_epoch_start_time.toISOString());
    message.epoch_counting_started !== undefined && (obj.epoch_counting_started = message.epoch_counting_started);
    message.current_epoch_start_height !== undefined && (obj.current_epoch_start_height = (message.current_epoch_start_height || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<EpochInfo>): EpochInfo {
    const message = createBaseEpochInfo();
    message.identifier = object.identifier ?? "";
    message.start_time = object.start_time ?? undefined;
    message.duration = object.duration !== undefined && object.duration !== null ? Duration.fromPartial(object.duration) : undefined;
    message.current_epoch = object.current_epoch !== undefined && object.current_epoch !== null ? BigInt(object.current_epoch.toString()) : BigInt(0);
    message.current_epoch_start_time = object.current_epoch_start_time ?? undefined;
    message.epoch_counting_started = object.epoch_counting_started ?? false;
    message.current_epoch_start_height = object.current_epoch_start_height !== undefined && object.current_epoch_start_height !== null ? BigInt(object.current_epoch_start_height.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: EpochInfoSDKType): EpochInfo {
    return {
      identifier: object?.identifier,
      start_time: object.start_time ? Timestamp.fromSDK(object.start_time) : undefined,
      duration: object.duration ? Duration.fromSDK(object.duration) : undefined,
      current_epoch: object?.current_epoch,
      current_epoch_start_time: object.current_epoch_start_time ? Timestamp.fromSDK(object.current_epoch_start_time) : undefined,
      epoch_counting_started: object?.epoch_counting_started,
      current_epoch_start_height: object?.current_epoch_start_height
    };
  },
  toSDK(message: EpochInfo): EpochInfoSDKType {
    const obj: any = {};
    obj.identifier = message.identifier;
    message.start_time !== undefined && (obj.start_time = message.start_time ? Timestamp.toSDK(message.start_time) : undefined);
    message.duration !== undefined && (obj.duration = message.duration ? Duration.toSDK(message.duration) : undefined);
    obj.current_epoch = message.current_epoch;
    message.current_epoch_start_time !== undefined && (obj.current_epoch_start_time = message.current_epoch_start_time ? Timestamp.toSDK(message.current_epoch_start_time) : undefined);
    obj.epoch_counting_started = message.epoch_counting_started;
    obj.current_epoch_start_height = message.current_epoch_start_height;
    return obj;
  },
  fromAmino(object: EpochInfoAmino): EpochInfo {
    return {
      identifier: object.identifier,
      start_time: object.start_time,
      duration: object?.duration ? Duration.fromAmino(object.duration) : undefined,
      current_epoch: BigInt(object.current_epoch),
      current_epoch_start_time: object.current_epoch_start_time,
      epoch_counting_started: object.epoch_counting_started,
      current_epoch_start_height: BigInt(object.current_epoch_start_height)
    };
  },
  toAmino(message: EpochInfo): EpochInfoAmino {
    const obj: any = {};
    obj.identifier = message.identifier;
    obj.start_time = message.start_time;
    obj.duration = message.duration ? Duration.toAmino(message.duration) : undefined;
    obj.current_epoch = message.current_epoch ? message.current_epoch.toString() : undefined;
    obj.current_epoch_start_time = message.current_epoch_start_time;
    obj.epoch_counting_started = message.epoch_counting_started;
    obj.current_epoch_start_height = message.current_epoch_start_height ? message.current_epoch_start_height.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EpochInfoAminoMsg): EpochInfo {
    return EpochInfo.fromAmino(object.value);
  },
  toAminoMsg(message: EpochInfo): EpochInfoAminoMsg {
    return {
      type: "osmosis/epochs/epoch-info",
      value: EpochInfo.toAmino(message)
    };
  },
  fromProtoMsg(message: EpochInfoProtoMsg): EpochInfo {
    return EpochInfo.decode(message.value);
  },
  toProto(message: EpochInfo): Uint8Array {
    return EpochInfo.encode(message).finish();
  },
  toProtoMsg(message: EpochInfo): EpochInfoProtoMsg {
    return {
      typeUrl: "/osmosis.epochs.v1beta1.EpochInfo",
      value: EpochInfo.encode(message).finish()
    };
  }
};
function createBaseGenesisState(): GenesisState {
  return {
    epochs: []
  };
}
export const GenesisState = {
  typeUrl: "/osmosis.epochs.v1beta1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.epochs) {
      EpochInfo.encode(v!, writer.uint32(10).fork()).ldelim();
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
          message.epochs.push(EpochInfo.decode(reader, reader.uint32()));
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
      epochs: Array.isArray(object?.epochs) ? object.epochs.map((e: any) => EpochInfo.fromJSON(e)) : []
    };
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.epochs) {
      obj.epochs = message.epochs.map(e => e ? EpochInfo.toJSON(e) : undefined);
    } else {
      obj.epochs = [];
    }
    return obj;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.epochs = object.epochs?.map(e => EpochInfo.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: GenesisStateSDKType): GenesisState {
    return {
      epochs: Array.isArray(object?.epochs) ? object.epochs.map((e: any) => EpochInfo.fromSDK(e)) : []
    };
  },
  toSDK(message: GenesisState): GenesisStateSDKType {
    const obj: any = {};
    if (message.epochs) {
      obj.epochs = message.epochs.map(e => e ? EpochInfo.toSDK(e) : undefined);
    } else {
      obj.epochs = [];
    }
    return obj;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      epochs: Array.isArray(object?.epochs) ? object.epochs.map((e: any) => EpochInfo.fromAmino(e)) : []
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.epochs) {
      obj.epochs = message.epochs.map(e => e ? EpochInfo.toAmino(e) : undefined);
    } else {
      obj.epochs = [];
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  toAminoMsg(message: GenesisState): GenesisStateAminoMsg {
    return {
      type: "osmosis/epochs/genesis-state",
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
      typeUrl: "/osmosis.epochs.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
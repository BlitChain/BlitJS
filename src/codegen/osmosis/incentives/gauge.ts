//@ts-nocheck
import { QueryCondition, QueryConditionAmino, QueryConditionSDKType } from "../lockup/lock";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../google/protobuf/timestamp";
import { Duration, DurationAmino, DurationSDKType } from "../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../binary";
import { toTimestamp, fromTimestamp, isSet, fromJsonTimestamp } from "../../helpers";
/**
 * Gauge is an object that stores and distributes yields to recipients who
 * satisfy certain conditions. Currently gauges support conditions around the
 * duration for which a given denom is locked.
 */
export interface Gauge {
  /** id is the unique ID of a Gauge */
  id: bigint;
  /**
   * is_perpetual is a flag to show if it's a perpetual or non-perpetual gauge
   * Non-perpetual gauges distribute their tokens equally per epoch while the
   * gauge is in the active period. Perpetual gauges distribute all their tokens
   * at a single time and only distribute their tokens again once the gauge is
   * refilled, Intended for use with incentives that get refilled daily.
   */
  is_perpetual: boolean;
  /**
   * distribute_to is where the gauge rewards are distributed to.
   * This is queried via lock duration or by timestamp
   */
  distribute_to: QueryCondition;
  /**
   * coins is the total amount of coins that have been in the gauge
   * Can distribute multiple coin denoms
   */
  coins: Coin[];
  /** start_time is the distribution start time */
  start_time: Date;
  /**
   * num_epochs_paid_over is the number of total epochs distribution will be
   * completed over
   */
  num_epochs_paid_over: bigint;
  /**
   * filled_epochs is the number of epochs distribution has been completed on
   * already
   */
  filled_epochs: bigint;
  /** distributed_coins are coins that have been distributed already */
  distributed_coins: Coin[];
}
export interface GaugeProtoMsg {
  type_url: "/osmosis.incentives.Gauge";
  value: Uint8Array;
}
export interface GaugeProtoMsg {
  type_url: "/osmosis.incentives.Gauge";
  value: Uint8Array;
}
/**
 * Gauge is an object that stores and distributes yields to recipients who
 * satisfy certain conditions. Currently gauges support conditions around the
 * duration for which a given denom is locked.
 */
export interface GaugeAmino {
  /** id is the unique ID of a Gauge */
  id: string;
  /**
   * is_perpetual is a flag to show if it's a perpetual or non-perpetual gauge
   * Non-perpetual gauges distribute their tokens equally per epoch while the
   * gauge is in the active period. Perpetual gauges distribute all their tokens
   * at a single time and only distribute their tokens again once the gauge is
   * refilled, Intended for use with incentives that get refilled daily.
   */
  is_perpetual: boolean;
  /**
   * distribute_to is where the gauge rewards are distributed to.
   * This is queried via lock duration or by timestamp
   */
  distribute_to?: QueryConditionAmino;
  /**
   * coins is the total amount of coins that have been in the gauge
   * Can distribute multiple coin denoms
   */
  coins: CoinAmino[];
  /** start_time is the distribution start time */
  start_time?: Date;
  /**
   * num_epochs_paid_over is the number of total epochs distribution will be
   * completed over
   */
  num_epochs_paid_over: string;
  /**
   * filled_epochs is the number of epochs distribution has been completed on
   * already
   */
  filled_epochs: string;
  /** distributed_coins are coins that have been distributed already */
  distributed_coins: CoinAmino[];
}
export interface GaugeAminoMsg {
  type: "osmosis/incentives/gauge";
  value: GaugeAmino;
}
/**
 * Gauge is an object that stores and distributes yields to recipients who
 * satisfy certain conditions. Currently gauges support conditions around the
 * duration for which a given denom is locked.
 */
export interface GaugeSDKType {
  id: bigint;
  is_perpetual: boolean;
  distribute_to: QueryConditionSDKType;
  coins: CoinSDKType[];
  start_time: Date;
  num_epochs_paid_over: bigint;
  filled_epochs: bigint;
  distributed_coins: CoinSDKType[];
}
export interface LockableDurationsInfo {
  /** List of incentivised durations that gauges will pay out to */
  lockable_durations: Duration[];
}
export interface LockableDurationsInfoProtoMsg {
  type_url: "/osmosis.incentives.LockableDurationsInfo";
  value: Uint8Array;
}
export interface LockableDurationsInfoProtoMsg {
  type_url: "/osmosis.incentives.LockableDurationsInfo";
  value: Uint8Array;
}
export interface LockableDurationsInfoAmino {
  /** List of incentivised durations that gauges will pay out to */
  lockable_durations: DurationAmino[];
}
export interface LockableDurationsInfoAminoMsg {
  type: "osmosis/incentives/lockable-durations-info";
  value: LockableDurationsInfoAmino;
}
export interface LockableDurationsInfoSDKType {
  lockable_durations: DurationSDKType[];
}
function createBaseGauge(): Gauge {
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
  encode(message: Gauge, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
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
      Coin.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Gauge {
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
  fromJSON(object: any): Gauge {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      is_perpetual: isSet(object.is_perpetual) ? Boolean(object.is_perpetual) : false,
      distribute_to: isSet(object.distribute_to) ? QueryCondition.fromJSON(object.distribute_to) : undefined,
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromJSON(e)) : [],
      start_time: isSet(object.start_time) ? fromJsonTimestamp(object.start_time) : undefined,
      num_epochs_paid_over: isSet(object.num_epochs_paid_over) ? BigInt(object.num_epochs_paid_over.toString()) : BigInt(0),
      filled_epochs: isSet(object.filled_epochs) ? BigInt(object.filled_epochs.toString()) : BigInt(0),
      distributed_coins: Array.isArray(object?.distributed_coins) ? object.distributed_coins.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: Gauge): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    message.is_perpetual !== undefined && (obj.is_perpetual = message.is_perpetual);
    message.distribute_to !== undefined && (obj.distribute_to = message.distribute_to ? QueryCondition.toJSON(message.distribute_to) : undefined);
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.coins = [];
    }
    message.start_time !== undefined && (obj.start_time = message.start_time.toISOString());
    message.num_epochs_paid_over !== undefined && (obj.num_epochs_paid_over = (message.num_epochs_paid_over || BigInt(0)).toString());
    message.filled_epochs !== undefined && (obj.filled_epochs = (message.filled_epochs || BigInt(0)).toString());
    if (message.distributed_coins) {
      obj.distributed_coins = message.distributed_coins.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.distributed_coins = [];
    }
    return obj;
  },
  fromPartial(object: Partial<Gauge>): Gauge {
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
  fromSDK(object: GaugeSDKType): Gauge {
    return {
      id: object?.id,
      is_perpetual: object?.is_perpetual,
      distribute_to: object.distribute_to ? QueryCondition.fromSDK(object.distribute_to) : undefined,
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromSDK(e)) : [],
      start_time: object.start_time ? Timestamp.fromSDK(object.start_time) : undefined,
      num_epochs_paid_over: object?.num_epochs_paid_over,
      filled_epochs: object?.filled_epochs,
      distributed_coins: Array.isArray(object?.distributed_coins) ? object.distributed_coins.map((e: any) => Coin.fromSDK(e)) : []
    };
  },
  toSDK(message: Gauge): GaugeSDKType {
    const obj: any = {};
    obj.id = message.id;
    obj.is_perpetual = message.is_perpetual;
    message.distribute_to !== undefined && (obj.distribute_to = message.distribute_to ? QueryCondition.toSDK(message.distribute_to) : undefined);
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.coins = [];
    }
    message.start_time !== undefined && (obj.start_time = message.start_time ? Timestamp.toSDK(message.start_time) : undefined);
    obj.num_epochs_paid_over = message.num_epochs_paid_over;
    obj.filled_epochs = message.filled_epochs;
    if (message.distributed_coins) {
      obj.distributed_coins = message.distributed_coins.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.distributed_coins = [];
    }
    return obj;
  },
  fromAmino(object: GaugeAmino): Gauge {
    return {
      id: BigInt(object.id),
      is_perpetual: object.is_perpetual,
      distribute_to: object?.distribute_to ? QueryCondition.fromAmino(object.distribute_to) : undefined,
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromAmino(e)) : [],
      start_time: object.start_time,
      num_epochs_paid_over: BigInt(object.num_epochs_paid_over),
      filled_epochs: BigInt(object.filled_epochs),
      distributed_coins: Array.isArray(object?.distributed_coins) ? object.distributed_coins.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: Gauge): GaugeAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    obj.is_perpetual = message.is_perpetual;
    obj.distribute_to = message.distribute_to ? QueryCondition.toAmino(message.distribute_to) : undefined;
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.coins = [];
    }
    obj.start_time = message.start_time;
    obj.num_epochs_paid_over = message.num_epochs_paid_over ? message.num_epochs_paid_over.toString() : undefined;
    obj.filled_epochs = message.filled_epochs ? message.filled_epochs.toString() : undefined;
    if (message.distributed_coins) {
      obj.distributed_coins = message.distributed_coins.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.distributed_coins = [];
    }
    return obj;
  },
  fromAminoMsg(object: GaugeAminoMsg): Gauge {
    return Gauge.fromAmino(object.value);
  },
  toAminoMsg(message: Gauge): GaugeAminoMsg {
    return {
      type: "osmosis/incentives/gauge",
      value: Gauge.toAmino(message)
    };
  },
  fromProtoMsg(message: GaugeProtoMsg): Gauge {
    return Gauge.decode(message.value);
  },
  toProto(message: Gauge): Uint8Array {
    return Gauge.encode(message).finish();
  },
  toProtoMsg(message: Gauge): GaugeProtoMsg {
    return {
      typeUrl: "/osmosis.incentives.Gauge",
      value: Gauge.encode(message).finish()
    };
  }
};
function createBaseLockableDurationsInfo(): LockableDurationsInfo {
  return {
    lockable_durations: []
  };
}
export const LockableDurationsInfo = {
  typeUrl: "/osmosis.incentives.LockableDurationsInfo",
  encode(message: LockableDurationsInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.lockable_durations) {
      Duration.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LockableDurationsInfo {
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
  fromJSON(object: any): LockableDurationsInfo {
    return {
      lockable_durations: Array.isArray(object?.lockable_durations) ? object.lockable_durations.map((e: any) => Duration.fromJSON(e)) : []
    };
  },
  toJSON(message: LockableDurationsInfo): unknown {
    const obj: any = {};
    if (message.lockable_durations) {
      obj.lockable_durations = message.lockable_durations.map(e => e ? Duration.toJSON(e) : undefined);
    } else {
      obj.lockable_durations = [];
    }
    return obj;
  },
  fromPartial(object: Partial<LockableDurationsInfo>): LockableDurationsInfo {
    const message = createBaseLockableDurationsInfo();
    message.lockable_durations = object.lockable_durations?.map(e => Duration.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: LockableDurationsInfoSDKType): LockableDurationsInfo {
    return {
      lockable_durations: Array.isArray(object?.lockable_durations) ? object.lockable_durations.map((e: any) => Duration.fromSDK(e)) : []
    };
  },
  toSDK(message: LockableDurationsInfo): LockableDurationsInfoSDKType {
    const obj: any = {};
    if (message.lockable_durations) {
      obj.lockable_durations = message.lockable_durations.map(e => e ? Duration.toSDK(e) : undefined);
    } else {
      obj.lockable_durations = [];
    }
    return obj;
  },
  fromAmino(object: LockableDurationsInfoAmino): LockableDurationsInfo {
    return {
      lockable_durations: Array.isArray(object?.lockable_durations) ? object.lockable_durations.map((e: any) => Duration.fromAmino(e)) : []
    };
  },
  toAmino(message: LockableDurationsInfo): LockableDurationsInfoAmino {
    const obj: any = {};
    if (message.lockable_durations) {
      obj.lockable_durations = message.lockable_durations.map(e => e ? Duration.toAmino(e) : undefined);
    } else {
      obj.lockable_durations = [];
    }
    return obj;
  },
  fromAminoMsg(object: LockableDurationsInfoAminoMsg): LockableDurationsInfo {
    return LockableDurationsInfo.fromAmino(object.value);
  },
  toAminoMsg(message: LockableDurationsInfo): LockableDurationsInfoAminoMsg {
    return {
      type: "osmosis/incentives/lockable-durations-info",
      value: LockableDurationsInfo.toAmino(message)
    };
  },
  fromProtoMsg(message: LockableDurationsInfoProtoMsg): LockableDurationsInfo {
    return LockableDurationsInfo.decode(message.value);
  },
  toProto(message: LockableDurationsInfo): Uint8Array {
    return LockableDurationsInfo.encode(message).finish();
  },
  toProtoMsg(message: LockableDurationsInfo): LockableDurationsInfoProtoMsg {
    return {
      typeUrl: "/osmosis.incentives.LockableDurationsInfo",
      value: LockableDurationsInfo.encode(message).finish()
    };
  }
};
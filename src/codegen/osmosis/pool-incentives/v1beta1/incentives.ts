//@ts-nocheck
import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface Params {
  /**
   * minted_denom is the denomination of the coin expected to be minted by the
   * minting module. Pool-incentives module doesn’t actually mint the coin
   * itself, but rather manages the distribution of coins that matches the
   * defined minted_denom.
   */
  minted_denom: string;
}
export interface ParamsProtoMsg {
  type_url: "/osmosis.poolincentives.v1beta1.Params";
  value: Uint8Array;
}
export interface ParamsProtoMsg {
  type_url: "/osmosis.poolincentives.v1beta1.Params";
  value: Uint8Array;
}
export interface ParamsAmino {
  /**
   * minted_denom is the denomination of the coin expected to be minted by the
   * minting module. Pool-incentives module doesn’t actually mint the coin
   * itself, but rather manages the distribution of coins that matches the
   * defined minted_denom.
   */
  minted_denom: string;
}
export interface ParamsAminoMsg {
  type: "osmosis/poolincentives/params";
  value: ParamsAmino;
}
export interface ParamsSDKType {
  minted_denom: string;
}
export interface LockableDurationsInfo {
  lockable_durations: Duration[];
}
export interface LockableDurationsInfoProtoMsg {
  type_url: "/osmosis.poolincentives.v1beta1.LockableDurationsInfo";
  value: Uint8Array;
}
export interface LockableDurationsInfoProtoMsg {
  type_url: "/osmosis.poolincentives.v1beta1.LockableDurationsInfo";
  value: Uint8Array;
}
export interface LockableDurationsInfoAmino {
  lockable_durations: DurationAmino[];
}
export interface LockableDurationsInfoAminoMsg {
  type: "osmosis/poolincentives/lockable-durations-info";
  value: LockableDurationsInfoAmino;
}
export interface LockableDurationsInfoSDKType {
  lockable_durations: DurationSDKType[];
}
export interface DistrInfo {
  total_weight: string;
  records: DistrRecord[];
}
export interface DistrInfoProtoMsg {
  type_url: "/osmosis.poolincentives.v1beta1.DistrInfo";
  value: Uint8Array;
}
export interface DistrInfoProtoMsg {
  type_url: "/osmosis.poolincentives.v1beta1.DistrInfo";
  value: Uint8Array;
}
export interface DistrInfoAmino {
  total_weight: string;
  records: DistrRecordAmino[];
}
export interface DistrInfoAminoMsg {
  type: "osmosis/poolincentives/distr-info";
  value: DistrInfoAmino;
}
export interface DistrInfoSDKType {
  total_weight: string;
  records: DistrRecordSDKType[];
}
export interface DistrRecord {
  gauge_id: bigint;
  weight: string;
}
export interface DistrRecordProtoMsg {
  type_url: "/osmosis.poolincentives.v1beta1.DistrRecord";
  value: Uint8Array;
}
export interface DistrRecordProtoMsg {
  type_url: "/osmosis.poolincentives.v1beta1.DistrRecord";
  value: Uint8Array;
}
export interface DistrRecordAmino {
  gauge_id: string;
  weight: string;
}
export interface DistrRecordAminoMsg {
  type: "osmosis/poolincentives/distr-record";
  value: DistrRecordAmino;
}
export interface DistrRecordSDKType {
  gauge_id: bigint;
  weight: string;
}
export interface PoolToGauge {
  pool_id: bigint;
  gauge_id: bigint;
  duration: Duration;
}
export interface PoolToGaugeProtoMsg {
  type_url: "/osmosis.poolincentives.v1beta1.PoolToGauge";
  value: Uint8Array;
}
export interface PoolToGaugeProtoMsg {
  type_url: "/osmosis.poolincentives.v1beta1.PoolToGauge";
  value: Uint8Array;
}
export interface PoolToGaugeAmino {
  pool_id: string;
  gauge_id: string;
  duration?: DurationAmino;
}
export interface PoolToGaugeAminoMsg {
  type: "osmosis/poolincentives/pool-to-gauge";
  value: PoolToGaugeAmino;
}
export interface PoolToGaugeSDKType {
  pool_id: bigint;
  gauge_id: bigint;
  duration: DurationSDKType;
}
export interface PoolToGauges {
  pool_to_gauge: PoolToGauge[];
}
export interface PoolToGaugesProtoMsg {
  type_url: "/osmosis.poolincentives.v1beta1.PoolToGauges";
  value: Uint8Array;
}
export interface PoolToGaugesProtoMsg {
  type_url: "/osmosis.poolincentives.v1beta1.PoolToGauges";
  value: Uint8Array;
}
export interface PoolToGaugesAmino {
  pool_to_gauge: PoolToGaugeAmino[];
}
export interface PoolToGaugesAminoMsg {
  type: "osmosis/poolincentives/pool-to-gauges";
  value: PoolToGaugesAmino;
}
export interface PoolToGaugesSDKType {
  pool_to_gauge: PoolToGaugeSDKType[];
}
function createBaseParams(): Params {
  return {
    minted_denom: ""
  };
}
export const Params = {
  typeUrl: "/osmosis.poolincentives.v1beta1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.minted_denom !== "") {
      writer.uint32(10).string(message.minted_denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minted_denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Params {
    return {
      minted_denom: isSet(object.minted_denom) ? String(object.minted_denom) : ""
    };
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    message.minted_denom !== undefined && (obj.minted_denom = message.minted_denom);
    return obj;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.minted_denom = object.minted_denom ?? "";
    return message;
  },
  fromSDK(object: ParamsSDKType): Params {
    return {
      minted_denom: object?.minted_denom
    };
  },
  toSDK(message: Params): ParamsSDKType {
    const obj: any = {};
    obj.minted_denom = message.minted_denom;
    return obj;
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      minted_denom: object.minted_denom
    };
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.minted_denom = message.minted_denom;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "osmosis/poolincentives/params",
      value: Params.toAmino(message)
    };
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/osmosis.poolincentives.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};
function createBaseLockableDurationsInfo(): LockableDurationsInfo {
  return {
    lockable_durations: []
  };
}
export const LockableDurationsInfo = {
  typeUrl: "/osmosis.poolincentives.v1beta1.LockableDurationsInfo",
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
      type: "osmosis/poolincentives/lockable-durations-info",
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
      typeUrl: "/osmosis.poolincentives.v1beta1.LockableDurationsInfo",
      value: LockableDurationsInfo.encode(message).finish()
    };
  }
};
function createBaseDistrInfo(): DistrInfo {
  return {
    total_weight: "",
    records: []
  };
}
export const DistrInfo = {
  typeUrl: "/osmosis.poolincentives.v1beta1.DistrInfo",
  encode(message: DistrInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.total_weight !== "") {
      writer.uint32(10).string(message.total_weight);
    }
    for (const v of message.records) {
      DistrRecord.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DistrInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDistrInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.total_weight = reader.string();
          break;
        case 2:
          message.records.push(DistrRecord.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DistrInfo {
    return {
      total_weight: isSet(object.total_weight) ? String(object.total_weight) : "",
      records: Array.isArray(object?.records) ? object.records.map((e: any) => DistrRecord.fromJSON(e)) : []
    };
  },
  toJSON(message: DistrInfo): unknown {
    const obj: any = {};
    message.total_weight !== undefined && (obj.total_weight = message.total_weight);
    if (message.records) {
      obj.records = message.records.map(e => e ? DistrRecord.toJSON(e) : undefined);
    } else {
      obj.records = [];
    }
    return obj;
  },
  fromPartial(object: Partial<DistrInfo>): DistrInfo {
    const message = createBaseDistrInfo();
    message.total_weight = object.total_weight ?? "";
    message.records = object.records?.map(e => DistrRecord.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: DistrInfoSDKType): DistrInfo {
    return {
      total_weight: object?.total_weight,
      records: Array.isArray(object?.records) ? object.records.map((e: any) => DistrRecord.fromSDK(e)) : []
    };
  },
  toSDK(message: DistrInfo): DistrInfoSDKType {
    const obj: any = {};
    obj.total_weight = message.total_weight;
    if (message.records) {
      obj.records = message.records.map(e => e ? DistrRecord.toSDK(e) : undefined);
    } else {
      obj.records = [];
    }
    return obj;
  },
  fromAmino(object: DistrInfoAmino): DistrInfo {
    return {
      total_weight: object.total_weight,
      records: Array.isArray(object?.records) ? object.records.map((e: any) => DistrRecord.fromAmino(e)) : []
    };
  },
  toAmino(message: DistrInfo): DistrInfoAmino {
    const obj: any = {};
    obj.total_weight = message.total_weight;
    if (message.records) {
      obj.records = message.records.map(e => e ? DistrRecord.toAmino(e) : undefined);
    } else {
      obj.records = [];
    }
    return obj;
  },
  fromAminoMsg(object: DistrInfoAminoMsg): DistrInfo {
    return DistrInfo.fromAmino(object.value);
  },
  toAminoMsg(message: DistrInfo): DistrInfoAminoMsg {
    return {
      type: "osmosis/poolincentives/distr-info",
      value: DistrInfo.toAmino(message)
    };
  },
  fromProtoMsg(message: DistrInfoProtoMsg): DistrInfo {
    return DistrInfo.decode(message.value);
  },
  toProto(message: DistrInfo): Uint8Array {
    return DistrInfo.encode(message).finish();
  },
  toProtoMsg(message: DistrInfo): DistrInfoProtoMsg {
    return {
      typeUrl: "/osmosis.poolincentives.v1beta1.DistrInfo",
      value: DistrInfo.encode(message).finish()
    };
  }
};
function createBaseDistrRecord(): DistrRecord {
  return {
    gauge_id: BigInt(0),
    weight: ""
  };
}
export const DistrRecord = {
  typeUrl: "/osmosis.poolincentives.v1beta1.DistrRecord",
  encode(message: DistrRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.gauge_id !== BigInt(0)) {
      writer.uint32(8).uint64(message.gauge_id);
    }
    if (message.weight !== "") {
      writer.uint32(18).string(message.weight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DistrRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDistrRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gauge_id = reader.uint64();
          break;
        case 2:
          message.weight = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DistrRecord {
    return {
      gauge_id: isSet(object.gauge_id) ? BigInt(object.gauge_id.toString()) : BigInt(0),
      weight: isSet(object.weight) ? String(object.weight) : ""
    };
  },
  toJSON(message: DistrRecord): unknown {
    const obj: any = {};
    message.gauge_id !== undefined && (obj.gauge_id = (message.gauge_id || BigInt(0)).toString());
    message.weight !== undefined && (obj.weight = message.weight);
    return obj;
  },
  fromPartial(object: Partial<DistrRecord>): DistrRecord {
    const message = createBaseDistrRecord();
    message.gauge_id = object.gauge_id !== undefined && object.gauge_id !== null ? BigInt(object.gauge_id.toString()) : BigInt(0);
    message.weight = object.weight ?? "";
    return message;
  },
  fromSDK(object: DistrRecordSDKType): DistrRecord {
    return {
      gauge_id: object?.gauge_id,
      weight: object?.weight
    };
  },
  toSDK(message: DistrRecord): DistrRecordSDKType {
    const obj: any = {};
    obj.gauge_id = message.gauge_id;
    obj.weight = message.weight;
    return obj;
  },
  fromAmino(object: DistrRecordAmino): DistrRecord {
    return {
      gauge_id: BigInt(object.gauge_id),
      weight: object.weight
    };
  },
  toAmino(message: DistrRecord): DistrRecordAmino {
    const obj: any = {};
    obj.gauge_id = message.gauge_id ? message.gauge_id.toString() : undefined;
    obj.weight = message.weight;
    return obj;
  },
  fromAminoMsg(object: DistrRecordAminoMsg): DistrRecord {
    return DistrRecord.fromAmino(object.value);
  },
  toAminoMsg(message: DistrRecord): DistrRecordAminoMsg {
    return {
      type: "osmosis/poolincentives/distr-record",
      value: DistrRecord.toAmino(message)
    };
  },
  fromProtoMsg(message: DistrRecordProtoMsg): DistrRecord {
    return DistrRecord.decode(message.value);
  },
  toProto(message: DistrRecord): Uint8Array {
    return DistrRecord.encode(message).finish();
  },
  toProtoMsg(message: DistrRecord): DistrRecordProtoMsg {
    return {
      typeUrl: "/osmosis.poolincentives.v1beta1.DistrRecord",
      value: DistrRecord.encode(message).finish()
    };
  }
};
function createBasePoolToGauge(): PoolToGauge {
  return {
    pool_id: BigInt(0),
    gauge_id: BigInt(0),
    duration: Duration.fromPartial({})
  };
}
export const PoolToGauge = {
  typeUrl: "/osmosis.poolincentives.v1beta1.PoolToGauge",
  encode(message: PoolToGauge, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pool_id !== BigInt(0)) {
      writer.uint32(8).uint64(message.pool_id);
    }
    if (message.gauge_id !== BigInt(0)) {
      writer.uint32(16).uint64(message.gauge_id);
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PoolToGauge {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolToGauge();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool_id = reader.uint64();
          break;
        case 2:
          message.gauge_id = reader.uint64();
          break;
        case 3:
          message.duration = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PoolToGauge {
    return {
      pool_id: isSet(object.pool_id) ? BigInt(object.pool_id.toString()) : BigInt(0),
      gauge_id: isSet(object.gauge_id) ? BigInt(object.gauge_id.toString()) : BigInt(0),
      duration: isSet(object.duration) ? Duration.fromJSON(object.duration) : undefined
    };
  },
  toJSON(message: PoolToGauge): unknown {
    const obj: any = {};
    message.pool_id !== undefined && (obj.pool_id = (message.pool_id || BigInt(0)).toString());
    message.gauge_id !== undefined && (obj.gauge_id = (message.gauge_id || BigInt(0)).toString());
    message.duration !== undefined && (obj.duration = message.duration ? Duration.toJSON(message.duration) : undefined);
    return obj;
  },
  fromPartial(object: Partial<PoolToGauge>): PoolToGauge {
    const message = createBasePoolToGauge();
    message.pool_id = object.pool_id !== undefined && object.pool_id !== null ? BigInt(object.pool_id.toString()) : BigInt(0);
    message.gauge_id = object.gauge_id !== undefined && object.gauge_id !== null ? BigInt(object.gauge_id.toString()) : BigInt(0);
    message.duration = object.duration !== undefined && object.duration !== null ? Duration.fromPartial(object.duration) : undefined;
    return message;
  },
  fromSDK(object: PoolToGaugeSDKType): PoolToGauge {
    return {
      pool_id: object?.pool_id,
      gauge_id: object?.gauge_id,
      duration: object.duration ? Duration.fromSDK(object.duration) : undefined
    };
  },
  toSDK(message: PoolToGauge): PoolToGaugeSDKType {
    const obj: any = {};
    obj.pool_id = message.pool_id;
    obj.gauge_id = message.gauge_id;
    message.duration !== undefined && (obj.duration = message.duration ? Duration.toSDK(message.duration) : undefined);
    return obj;
  },
  fromAmino(object: PoolToGaugeAmino): PoolToGauge {
    return {
      pool_id: BigInt(object.pool_id),
      gauge_id: BigInt(object.gauge_id),
      duration: object?.duration ? Duration.fromAmino(object.duration) : undefined
    };
  },
  toAmino(message: PoolToGauge): PoolToGaugeAmino {
    const obj: any = {};
    obj.pool_id = message.pool_id ? message.pool_id.toString() : undefined;
    obj.gauge_id = message.gauge_id ? message.gauge_id.toString() : undefined;
    obj.duration = message.duration ? Duration.toAmino(message.duration) : undefined;
    return obj;
  },
  fromAminoMsg(object: PoolToGaugeAminoMsg): PoolToGauge {
    return PoolToGauge.fromAmino(object.value);
  },
  toAminoMsg(message: PoolToGauge): PoolToGaugeAminoMsg {
    return {
      type: "osmosis/poolincentives/pool-to-gauge",
      value: PoolToGauge.toAmino(message)
    };
  },
  fromProtoMsg(message: PoolToGaugeProtoMsg): PoolToGauge {
    return PoolToGauge.decode(message.value);
  },
  toProto(message: PoolToGauge): Uint8Array {
    return PoolToGauge.encode(message).finish();
  },
  toProtoMsg(message: PoolToGauge): PoolToGaugeProtoMsg {
    return {
      typeUrl: "/osmosis.poolincentives.v1beta1.PoolToGauge",
      value: PoolToGauge.encode(message).finish()
    };
  }
};
function createBasePoolToGauges(): PoolToGauges {
  return {
    pool_to_gauge: []
  };
}
export const PoolToGauges = {
  typeUrl: "/osmosis.poolincentives.v1beta1.PoolToGauges",
  encode(message: PoolToGauges, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.pool_to_gauge) {
      PoolToGauge.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PoolToGauges {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolToGauges();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.pool_to_gauge.push(PoolToGauge.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PoolToGauges {
    return {
      pool_to_gauge: Array.isArray(object?.pool_to_gauge) ? object.pool_to_gauge.map((e: any) => PoolToGauge.fromJSON(e)) : []
    };
  },
  toJSON(message: PoolToGauges): unknown {
    const obj: any = {};
    if (message.pool_to_gauge) {
      obj.pool_to_gauge = message.pool_to_gauge.map(e => e ? PoolToGauge.toJSON(e) : undefined);
    } else {
      obj.pool_to_gauge = [];
    }
    return obj;
  },
  fromPartial(object: Partial<PoolToGauges>): PoolToGauges {
    const message = createBasePoolToGauges();
    message.pool_to_gauge = object.pool_to_gauge?.map(e => PoolToGauge.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: PoolToGaugesSDKType): PoolToGauges {
    return {
      pool_to_gauge: Array.isArray(object?.pool_to_gauge) ? object.pool_to_gauge.map((e: any) => PoolToGauge.fromSDK(e)) : []
    };
  },
  toSDK(message: PoolToGauges): PoolToGaugesSDKType {
    const obj: any = {};
    if (message.pool_to_gauge) {
      obj.pool_to_gauge = message.pool_to_gauge.map(e => e ? PoolToGauge.toSDK(e) : undefined);
    } else {
      obj.pool_to_gauge = [];
    }
    return obj;
  },
  fromAmino(object: PoolToGaugesAmino): PoolToGauges {
    return {
      pool_to_gauge: Array.isArray(object?.pool_to_gauge) ? object.pool_to_gauge.map((e: any) => PoolToGauge.fromAmino(e)) : []
    };
  },
  toAmino(message: PoolToGauges): PoolToGaugesAmino {
    const obj: any = {};
    if (message.pool_to_gauge) {
      obj.pool_to_gauge = message.pool_to_gauge.map(e => e ? PoolToGauge.toAmino(e) : undefined);
    } else {
      obj.pool_to_gauge = [];
    }
    return obj;
  },
  fromAminoMsg(object: PoolToGaugesAminoMsg): PoolToGauges {
    return PoolToGauges.fromAmino(object.value);
  },
  toAminoMsg(message: PoolToGauges): PoolToGaugesAminoMsg {
    return {
      type: "osmosis/poolincentives/pool-to-gauges",
      value: PoolToGauges.toAmino(message)
    };
  },
  fromProtoMsg(message: PoolToGaugesProtoMsg): PoolToGauges {
    return PoolToGauges.decode(message.value);
  },
  toProto(message: PoolToGauges): Uint8Array {
    return PoolToGauges.encode(message).finish();
  },
  toProtoMsg(message: PoolToGauges): PoolToGaugesProtoMsg {
    return {
      typeUrl: "/osmosis.poolincentives.v1beta1.PoolToGauges",
      value: PoolToGauges.encode(message).finish()
    };
  }
};
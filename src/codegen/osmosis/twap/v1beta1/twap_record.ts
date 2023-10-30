//@ts-nocheck
import { Timestamp } from "../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { toTimestamp, fromTimestamp, isSet, fromJsonTimestamp } from "../../../helpers";
import { Decimal } from "@cosmjs/math";
/**
 * A TWAP record should be indexed in state by pool_id, (asset pair), timestamp
 * The asset pair assets should be lexicographically sorted.
 * Technically (pool_id, asset_0_denom, asset_1_denom, height) do not need to
 * appear in the struct however we view this as the wrong performance tradeoff
 * given SDK today. Would rather we optimize for readability and correctness,
 * than an optimal state storage format. The system bottleneck is elsewhere for
 * now.
 */
export interface TwapRecord {
  pool_id: bigint;
  /** Lexicographically smaller denom of the pair */
  asset0_denom: string;
  /** Lexicographically larger denom of the pair */
  asset1_denom: string;
  /** height this record corresponds to, for debugging purposes */
  height: bigint;
  /**
   * This field should only exist until we have a global registry in the state
   * machine, mapping prior block heights within {TIME RANGE} to times.
   */
  time: Date;
  /**
   * We store the last spot prices in the struct, so that we can interpolate
   * accumulator values for times between when accumulator records are stored.
   */
  p0_last_spot_price: string;
  p1_last_spot_price: string;
  p0_arithmetic_twap_accumulator: string;
  p1_arithmetic_twap_accumulator: string;
  geometric_twap_accumulator: string;
  /**
   * This field contains the time in which the last spot price error occured.
   * It is used to alert the caller if they are getting a potentially erroneous
   * TWAP, due to an unforeseen underlying error.
   */
  last_error_time: Date;
}
export interface TwapRecordProtoMsg {
  type_url: "/osmosis.twap.v1beta1.TwapRecord";
  value: Uint8Array;
}
export interface TwapRecordProtoMsg {
  type_url: "/osmosis.twap.v1beta1.TwapRecord";
  value: Uint8Array;
}
/**
 * A TWAP record should be indexed in state by pool_id, (asset pair), timestamp
 * The asset pair assets should be lexicographically sorted.
 * Technically (pool_id, asset_0_denom, asset_1_denom, height) do not need to
 * appear in the struct however we view this as the wrong performance tradeoff
 * given SDK today. Would rather we optimize for readability and correctness,
 * than an optimal state storage format. The system bottleneck is elsewhere for
 * now.
 */
export interface TwapRecordAmino {
  pool_id: string;
  /** Lexicographically smaller denom of the pair */
  asset0_denom: string;
  /** Lexicographically larger denom of the pair */
  asset1_denom: string;
  /** height this record corresponds to, for debugging purposes */
  height: string;
  /**
   * This field should only exist until we have a global registry in the state
   * machine, mapping prior block heights within {TIME RANGE} to times.
   */
  time?: Date;
  /**
   * We store the last spot prices in the struct, so that we can interpolate
   * accumulator values for times between when accumulator records are stored.
   */
  p0_last_spot_price: string;
  p1_last_spot_price: string;
  p0_arithmetic_twap_accumulator: string;
  p1_arithmetic_twap_accumulator: string;
  geometric_twap_accumulator: string;
  /**
   * This field contains the time in which the last spot price error occured.
   * It is used to alert the caller if they are getting a potentially erroneous
   * TWAP, due to an unforeseen underlying error.
   */
  last_error_time?: Date;
}
export interface TwapRecordAminoMsg {
  type: "osmosis/twap/twap-record";
  value: TwapRecordAmino;
}
/**
 * A TWAP record should be indexed in state by pool_id, (asset pair), timestamp
 * The asset pair assets should be lexicographically sorted.
 * Technically (pool_id, asset_0_denom, asset_1_denom, height) do not need to
 * appear in the struct however we view this as the wrong performance tradeoff
 * given SDK today. Would rather we optimize for readability and correctness,
 * than an optimal state storage format. The system bottleneck is elsewhere for
 * now.
 */
export interface TwapRecordSDKType {
  pool_id: bigint;
  asset0_denom: string;
  asset1_denom: string;
  height: bigint;
  time: Date;
  p0_last_spot_price: string;
  p1_last_spot_price: string;
  p0_arithmetic_twap_accumulator: string;
  p1_arithmetic_twap_accumulator: string;
  geometric_twap_accumulator: string;
  last_error_time: Date;
}
function createBaseTwapRecord(): TwapRecord {
  return {
    pool_id: BigInt(0),
    asset0_denom: "",
    asset1_denom: "",
    height: BigInt(0),
    time: new Date(),
    p0_last_spot_price: "",
    p1_last_spot_price: "",
    p0_arithmetic_twap_accumulator: "",
    p1_arithmetic_twap_accumulator: "",
    geometric_twap_accumulator: "",
    last_error_time: new Date()
  };
}
export const TwapRecord = {
  typeUrl: "/osmosis.twap.v1beta1.TwapRecord",
  encode(message: TwapRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pool_id !== BigInt(0)) {
      writer.uint32(8).uint64(message.pool_id);
    }
    if (message.asset0_denom !== "") {
      writer.uint32(18).string(message.asset0_denom);
    }
    if (message.asset1_denom !== "") {
      writer.uint32(26).string(message.asset1_denom);
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(32).int64(message.height);
    }
    if (message.time !== undefined) {
      Timestamp.encode(toTimestamp(message.time), writer.uint32(42).fork()).ldelim();
    }
    if (message.p0_last_spot_price !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.p0_last_spot_price, 18).atomics);
    }
    if (message.p1_last_spot_price !== "") {
      writer.uint32(58).string(Decimal.fromUserInput(message.p1_last_spot_price, 18).atomics);
    }
    if (message.p0_arithmetic_twap_accumulator !== "") {
      writer.uint32(66).string(Decimal.fromUserInput(message.p0_arithmetic_twap_accumulator, 18).atomics);
    }
    if (message.p1_arithmetic_twap_accumulator !== "") {
      writer.uint32(74).string(Decimal.fromUserInput(message.p1_arithmetic_twap_accumulator, 18).atomics);
    }
    if (message.geometric_twap_accumulator !== "") {
      writer.uint32(82).string(Decimal.fromUserInput(message.geometric_twap_accumulator, 18).atomics);
    }
    if (message.last_error_time !== undefined) {
      Timestamp.encode(toTimestamp(message.last_error_time), writer.uint32(90).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TwapRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTwapRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool_id = reader.uint64();
          break;
        case 2:
          message.asset0_denom = reader.string();
          break;
        case 3:
          message.asset1_denom = reader.string();
          break;
        case 4:
          message.height = reader.int64();
          break;
        case 5:
          message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 6:
          message.p0_last_spot_price = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 7:
          message.p1_last_spot_price = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 8:
          message.p0_arithmetic_twap_accumulator = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 9:
          message.p1_arithmetic_twap_accumulator = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 10:
          message.geometric_twap_accumulator = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 11:
          message.last_error_time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TwapRecord {
    return {
      pool_id: isSet(object.pool_id) ? BigInt(object.pool_id.toString()) : BigInt(0),
      asset0_denom: isSet(object.asset0_denom) ? String(object.asset0_denom) : "",
      asset1_denom: isSet(object.asset1_denom) ? String(object.asset1_denom) : "",
      height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0),
      time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
      p0_last_spot_price: isSet(object.p0_last_spot_price) ? String(object.p0_last_spot_price) : "",
      p1_last_spot_price: isSet(object.p1_last_spot_price) ? String(object.p1_last_spot_price) : "",
      p0_arithmetic_twap_accumulator: isSet(object.p0_arithmetic_twap_accumulator) ? String(object.p0_arithmetic_twap_accumulator) : "",
      p1_arithmetic_twap_accumulator: isSet(object.p1_arithmetic_twap_accumulator) ? String(object.p1_arithmetic_twap_accumulator) : "",
      geometric_twap_accumulator: isSet(object.geometric_twap_accumulator) ? String(object.geometric_twap_accumulator) : "",
      last_error_time: isSet(object.last_error_time) ? fromJsonTimestamp(object.last_error_time) : undefined
    };
  },
  toJSON(message: TwapRecord): unknown {
    const obj: any = {};
    message.pool_id !== undefined && (obj.pool_id = (message.pool_id || BigInt(0)).toString());
    message.asset0_denom !== undefined && (obj.asset0_denom = message.asset0_denom);
    message.asset1_denom !== undefined && (obj.asset1_denom = message.asset1_denom);
    message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
    message.time !== undefined && (obj.time = message.time.toISOString());
    message.p0_last_spot_price !== undefined && (obj.p0_last_spot_price = message.p0_last_spot_price);
    message.p1_last_spot_price !== undefined && (obj.p1_last_spot_price = message.p1_last_spot_price);
    message.p0_arithmetic_twap_accumulator !== undefined && (obj.p0_arithmetic_twap_accumulator = message.p0_arithmetic_twap_accumulator);
    message.p1_arithmetic_twap_accumulator !== undefined && (obj.p1_arithmetic_twap_accumulator = message.p1_arithmetic_twap_accumulator);
    message.geometric_twap_accumulator !== undefined && (obj.geometric_twap_accumulator = message.geometric_twap_accumulator);
    message.last_error_time !== undefined && (obj.last_error_time = message.last_error_time.toISOString());
    return obj;
  },
  fromPartial(object: Partial<TwapRecord>): TwapRecord {
    const message = createBaseTwapRecord();
    message.pool_id = object.pool_id !== undefined && object.pool_id !== null ? BigInt(object.pool_id.toString()) : BigInt(0);
    message.asset0_denom = object.asset0_denom ?? "";
    message.asset1_denom = object.asset1_denom ?? "";
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.time = object.time ?? undefined;
    message.p0_last_spot_price = object.p0_last_spot_price ?? "";
    message.p1_last_spot_price = object.p1_last_spot_price ?? "";
    message.p0_arithmetic_twap_accumulator = object.p0_arithmetic_twap_accumulator ?? "";
    message.p1_arithmetic_twap_accumulator = object.p1_arithmetic_twap_accumulator ?? "";
    message.geometric_twap_accumulator = object.geometric_twap_accumulator ?? "";
    message.last_error_time = object.last_error_time ?? undefined;
    return message;
  },
  fromSDK(object: TwapRecordSDKType): TwapRecord {
    return {
      pool_id: object?.pool_id,
      asset0_denom: object?.asset0_denom,
      asset1_denom: object?.asset1_denom,
      height: object?.height,
      time: object.time ? Timestamp.fromSDK(object.time) : undefined,
      p0_last_spot_price: object?.p0_last_spot_price,
      p1_last_spot_price: object?.p1_last_spot_price,
      p0_arithmetic_twap_accumulator: object?.p0_arithmetic_twap_accumulator,
      p1_arithmetic_twap_accumulator: object?.p1_arithmetic_twap_accumulator,
      geometric_twap_accumulator: object?.geometric_twap_accumulator,
      last_error_time: object.last_error_time ? Timestamp.fromSDK(object.last_error_time) : undefined
    };
  },
  toSDK(message: TwapRecord): TwapRecordSDKType {
    const obj: any = {};
    obj.pool_id = message.pool_id;
    obj.asset0_denom = message.asset0_denom;
    obj.asset1_denom = message.asset1_denom;
    obj.height = message.height;
    message.time !== undefined && (obj.time = message.time ? Timestamp.toSDK(message.time) : undefined);
    obj.p0_last_spot_price = message.p0_last_spot_price;
    obj.p1_last_spot_price = message.p1_last_spot_price;
    obj.p0_arithmetic_twap_accumulator = message.p0_arithmetic_twap_accumulator;
    obj.p1_arithmetic_twap_accumulator = message.p1_arithmetic_twap_accumulator;
    obj.geometric_twap_accumulator = message.geometric_twap_accumulator;
    message.last_error_time !== undefined && (obj.last_error_time = message.last_error_time ? Timestamp.toSDK(message.last_error_time) : undefined);
    return obj;
  },
  fromAmino(object: TwapRecordAmino): TwapRecord {
    return {
      pool_id: BigInt(object.pool_id),
      asset0_denom: object.asset0_denom,
      asset1_denom: object.asset1_denom,
      height: BigInt(object.height),
      time: object.time,
      p0_last_spot_price: object.p0_last_spot_price,
      p1_last_spot_price: object.p1_last_spot_price,
      p0_arithmetic_twap_accumulator: object.p0_arithmetic_twap_accumulator,
      p1_arithmetic_twap_accumulator: object.p1_arithmetic_twap_accumulator,
      geometric_twap_accumulator: object.geometric_twap_accumulator,
      last_error_time: object.last_error_time
    };
  },
  toAmino(message: TwapRecord): TwapRecordAmino {
    const obj: any = {};
    obj.pool_id = message.pool_id ? message.pool_id.toString() : undefined;
    obj.asset0_denom = message.asset0_denom;
    obj.asset1_denom = message.asset1_denom;
    obj.height = message.height ? message.height.toString() : undefined;
    obj.time = message.time;
    obj.p0_last_spot_price = message.p0_last_spot_price;
    obj.p1_last_spot_price = message.p1_last_spot_price;
    obj.p0_arithmetic_twap_accumulator = message.p0_arithmetic_twap_accumulator;
    obj.p1_arithmetic_twap_accumulator = message.p1_arithmetic_twap_accumulator;
    obj.geometric_twap_accumulator = message.geometric_twap_accumulator;
    obj.last_error_time = message.last_error_time;
    return obj;
  },
  fromAminoMsg(object: TwapRecordAminoMsg): TwapRecord {
    return TwapRecord.fromAmino(object.value);
  },
  toAminoMsg(message: TwapRecord): TwapRecordAminoMsg {
    return {
      type: "osmosis/twap/twap-record",
      value: TwapRecord.toAmino(message)
    };
  },
  fromProtoMsg(message: TwapRecordProtoMsg): TwapRecord {
    return TwapRecord.decode(message.value);
  },
  toProto(message: TwapRecord): Uint8Array {
    return TwapRecord.encode(message).finish();
  },
  toProtoMsg(message: TwapRecord): TwapRecordProtoMsg {
    return {
      typeUrl: "/osmosis.twap.v1beta1.TwapRecord",
      value: TwapRecord.encode(message).finish()
    };
  }
};
//@ts-nocheck
import { QueryCondition, QueryConditionAmino, QueryConditionSDKType } from "../lockup/lock";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../binary";
import { toTimestamp, fromTimestamp, isSet, fromJsonTimestamp } from "../../helpers";
/** MsgCreateGauge creates a gague to distribute rewards to users */
export interface MsgCreateGauge {
  /**
   * is_perpetual shows if it's a perpetual or non-perpetual gauge
   * Non-perpetual gauges distribute their tokens equally per epoch while the
   * gauge is in the active period. Perpetual gauges distribute all their tokens
   * at a single time and only distribute their tokens again once the gauge is
   * refilled
   */
  is_perpetual: boolean;
  /** owner is the address of gauge creator */
  owner: string;
  /**
   * distribute_to show which lock the gauge should distribute to by time
   * duration or by timestamp
   */
  distribute_to: QueryCondition;
  /** coins are coin(s) to be distributed by the gauge */
  coins: Coin[];
  /** start_time is the distribution start time */
  start_time: Date;
  /**
   * num_epochs_paid_over is the number of epochs distribution will be completed
   * over
   */
  num_epochs_paid_over: bigint;
}
export interface MsgCreateGaugeProtoMsg {
  type_url: "/osmosis.incentives.MsgCreateGauge";
  value: Uint8Array;
}
export interface MsgCreateGaugeProtoMsg {
  type_url: "/osmosis.incentives.MsgCreateGauge";
  value: Uint8Array;
}
/** MsgCreateGauge creates a gague to distribute rewards to users */
export interface MsgCreateGaugeAmino {
  /**
   * is_perpetual shows if it's a perpetual or non-perpetual gauge
   * Non-perpetual gauges distribute their tokens equally per epoch while the
   * gauge is in the active period. Perpetual gauges distribute all their tokens
   * at a single time and only distribute their tokens again once the gauge is
   * refilled
   */
  is_perpetual: boolean;
  /** owner is the address of gauge creator */
  owner: string;
  /**
   * distribute_to show which lock the gauge should distribute to by time
   * duration or by timestamp
   */
  distribute_to?: QueryConditionAmino;
  /** coins are coin(s) to be distributed by the gauge */
  coins: CoinAmino[];
  /** start_time is the distribution start time */
  start_time?: Date;
  /**
   * num_epochs_paid_over is the number of epochs distribution will be completed
   * over
   */
  num_epochs_paid_over: string;
}
export interface MsgCreateGaugeAminoMsg {
  type: "osmosis/incentives/create-gauge";
  value: MsgCreateGaugeAmino;
}
/** MsgCreateGauge creates a gague to distribute rewards to users */
export interface MsgCreateGaugeSDKType {
  is_perpetual: boolean;
  owner: string;
  distribute_to: QueryConditionSDKType;
  coins: CoinSDKType[];
  start_time: Date;
  num_epochs_paid_over: bigint;
}
export interface MsgCreateGaugeResponse {}
export interface MsgCreateGaugeResponseProtoMsg {
  type_url: "/osmosis.incentives.MsgCreateGaugeResponse";
  value: Uint8Array;
}
export interface MsgCreateGaugeResponseProtoMsg {
  type_url: "/osmosis.incentives.MsgCreateGaugeResponse";
  value: Uint8Array;
}
export interface MsgCreateGaugeResponseAmino {}
export interface MsgCreateGaugeResponseAminoMsg {
  type: "osmosis/incentives/create-gauge-response";
  value: MsgCreateGaugeResponseAmino;
}
export interface MsgCreateGaugeResponseSDKType {}
/** MsgAddToGauge adds coins to a previously created gauge */
export interface MsgAddToGauge {
  /** owner is the gauge owner's address */
  owner: string;
  /** gauge_id is the ID of gauge that rewards are getting added to */
  gauge_id: bigint;
  /** rewards are the coin(s) to add to gauge */
  rewards: Coin[];
}
export interface MsgAddToGaugeProtoMsg {
  type_url: "/osmosis.incentives.MsgAddToGauge";
  value: Uint8Array;
}
export interface MsgAddToGaugeProtoMsg {
  type_url: "/osmosis.incentives.MsgAddToGauge";
  value: Uint8Array;
}
/** MsgAddToGauge adds coins to a previously created gauge */
export interface MsgAddToGaugeAmino {
  /** owner is the gauge owner's address */
  owner: string;
  /** gauge_id is the ID of gauge that rewards are getting added to */
  gauge_id: string;
  /** rewards are the coin(s) to add to gauge */
  rewards: CoinAmino[];
}
export interface MsgAddToGaugeAminoMsg {
  type: "osmosis/incentives/add-to-gauge";
  value: MsgAddToGaugeAmino;
}
/** MsgAddToGauge adds coins to a previously created gauge */
export interface MsgAddToGaugeSDKType {
  owner: string;
  gauge_id: bigint;
  rewards: CoinSDKType[];
}
export interface MsgAddToGaugeResponse {}
export interface MsgAddToGaugeResponseProtoMsg {
  type_url: "/osmosis.incentives.MsgAddToGaugeResponse";
  value: Uint8Array;
}
export interface MsgAddToGaugeResponseProtoMsg {
  type_url: "/osmosis.incentives.MsgAddToGaugeResponse";
  value: Uint8Array;
}
export interface MsgAddToGaugeResponseAmino {}
export interface MsgAddToGaugeResponseAminoMsg {
  type: "osmosis/incentives/add-to-gauge-response";
  value: MsgAddToGaugeResponseAmino;
}
export interface MsgAddToGaugeResponseSDKType {}
function createBaseMsgCreateGauge(): MsgCreateGauge {
  return {
    is_perpetual: false,
    owner: "",
    distribute_to: QueryCondition.fromPartial({}),
    coins: [],
    start_time: new Date(),
    num_epochs_paid_over: BigInt(0)
  };
}
export const MsgCreateGauge = {
  typeUrl: "/osmosis.incentives.MsgCreateGauge",
  encode(message: MsgCreateGauge, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.is_perpetual === true) {
      writer.uint32(8).bool(message.is_perpetual);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
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
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateGauge {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateGauge();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.is_perpetual = reader.bool();
          break;
        case 2:
          message.owner = reader.string();
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateGauge {
    return {
      is_perpetual: isSet(object.is_perpetual) ? Boolean(object.is_perpetual) : false,
      owner: isSet(object.owner) ? String(object.owner) : "",
      distribute_to: isSet(object.distribute_to) ? QueryCondition.fromJSON(object.distribute_to) : undefined,
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromJSON(e)) : [],
      start_time: isSet(object.start_time) ? fromJsonTimestamp(object.start_time) : undefined,
      num_epochs_paid_over: isSet(object.num_epochs_paid_over) ? BigInt(object.num_epochs_paid_over.toString()) : BigInt(0)
    };
  },
  toJSON(message: MsgCreateGauge): unknown {
    const obj: any = {};
    message.is_perpetual !== undefined && (obj.is_perpetual = message.is_perpetual);
    message.owner !== undefined && (obj.owner = message.owner);
    message.distribute_to !== undefined && (obj.distribute_to = message.distribute_to ? QueryCondition.toJSON(message.distribute_to) : undefined);
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.coins = [];
    }
    message.start_time !== undefined && (obj.start_time = message.start_time.toISOString());
    message.num_epochs_paid_over !== undefined && (obj.num_epochs_paid_over = (message.num_epochs_paid_over || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<MsgCreateGauge>): MsgCreateGauge {
    const message = createBaseMsgCreateGauge();
    message.is_perpetual = object.is_perpetual ?? false;
    message.owner = object.owner ?? "";
    message.distribute_to = object.distribute_to !== undefined && object.distribute_to !== null ? QueryCondition.fromPartial(object.distribute_to) : undefined;
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    message.start_time = object.start_time ?? undefined;
    message.num_epochs_paid_over = object.num_epochs_paid_over !== undefined && object.num_epochs_paid_over !== null ? BigInt(object.num_epochs_paid_over.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: MsgCreateGaugeSDKType): MsgCreateGauge {
    return {
      is_perpetual: object?.is_perpetual,
      owner: object?.owner,
      distribute_to: object.distribute_to ? QueryCondition.fromSDK(object.distribute_to) : undefined,
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromSDK(e)) : [],
      start_time: object.start_time ? Timestamp.fromSDK(object.start_time) : undefined,
      num_epochs_paid_over: object?.num_epochs_paid_over
    };
  },
  toSDK(message: MsgCreateGauge): MsgCreateGaugeSDKType {
    const obj: any = {};
    obj.is_perpetual = message.is_perpetual;
    obj.owner = message.owner;
    message.distribute_to !== undefined && (obj.distribute_to = message.distribute_to ? QueryCondition.toSDK(message.distribute_to) : undefined);
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.coins = [];
    }
    message.start_time !== undefined && (obj.start_time = message.start_time ? Timestamp.toSDK(message.start_time) : undefined);
    obj.num_epochs_paid_over = message.num_epochs_paid_over;
    return obj;
  },
  fromAmino(object: MsgCreateGaugeAmino): MsgCreateGauge {
    return {
      is_perpetual: object.is_perpetual,
      owner: object.owner,
      distribute_to: object?.distribute_to ? QueryCondition.fromAmino(object.distribute_to) : undefined,
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromAmino(e)) : [],
      start_time: object.start_time,
      num_epochs_paid_over: BigInt(object.num_epochs_paid_over)
    };
  },
  toAmino(message: MsgCreateGauge): MsgCreateGaugeAmino {
    const obj: any = {};
    obj.is_perpetual = message.is_perpetual;
    obj.owner = message.owner;
    obj.distribute_to = message.distribute_to ? QueryCondition.toAmino(message.distribute_to) : undefined;
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.coins = [];
    }
    obj.start_time = message.start_time;
    obj.num_epochs_paid_over = message.num_epochs_paid_over ? message.num_epochs_paid_over.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateGaugeAminoMsg): MsgCreateGauge {
    return MsgCreateGauge.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateGauge): MsgCreateGaugeAminoMsg {
    return {
      type: "osmosis/incentives/create-gauge",
      value: MsgCreateGauge.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateGaugeProtoMsg): MsgCreateGauge {
    return MsgCreateGauge.decode(message.value);
  },
  toProto(message: MsgCreateGauge): Uint8Array {
    return MsgCreateGauge.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateGauge): MsgCreateGaugeProtoMsg {
    return {
      typeUrl: "/osmosis.incentives.MsgCreateGauge",
      value: MsgCreateGauge.encode(message).finish()
    };
  }
};
function createBaseMsgCreateGaugeResponse(): MsgCreateGaugeResponse {
  return {};
}
export const MsgCreateGaugeResponse = {
  typeUrl: "/osmosis.incentives.MsgCreateGaugeResponse",
  encode(_: MsgCreateGaugeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateGaugeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateGaugeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgCreateGaugeResponse {
    return {};
  },
  toJSON(_: MsgCreateGaugeResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgCreateGaugeResponse>): MsgCreateGaugeResponse {
    const message = createBaseMsgCreateGaugeResponse();
    return message;
  },
  fromSDK(_: MsgCreateGaugeResponseSDKType): MsgCreateGaugeResponse {
    return {};
  },
  toSDK(_: MsgCreateGaugeResponse): MsgCreateGaugeResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgCreateGaugeResponseAmino): MsgCreateGaugeResponse {
    return {};
  },
  toAmino(_: MsgCreateGaugeResponse): MsgCreateGaugeResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreateGaugeResponseAminoMsg): MsgCreateGaugeResponse {
    return MsgCreateGaugeResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateGaugeResponse): MsgCreateGaugeResponseAminoMsg {
    return {
      type: "osmosis/incentives/create-gauge-response",
      value: MsgCreateGaugeResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateGaugeResponseProtoMsg): MsgCreateGaugeResponse {
    return MsgCreateGaugeResponse.decode(message.value);
  },
  toProto(message: MsgCreateGaugeResponse): Uint8Array {
    return MsgCreateGaugeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateGaugeResponse): MsgCreateGaugeResponseProtoMsg {
    return {
      typeUrl: "/osmosis.incentives.MsgCreateGaugeResponse",
      value: MsgCreateGaugeResponse.encode(message).finish()
    };
  }
};
function createBaseMsgAddToGauge(): MsgAddToGauge {
  return {
    owner: "",
    gauge_id: BigInt(0),
    rewards: []
  };
}
export const MsgAddToGauge = {
  typeUrl: "/osmosis.incentives.MsgAddToGauge",
  encode(message: MsgAddToGauge, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.gauge_id !== BigInt(0)) {
      writer.uint32(16).uint64(message.gauge_id);
    }
    for (const v of message.rewards) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAddToGauge {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddToGauge();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.gauge_id = reader.uint64();
          break;
        case 3:
          message.rewards.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgAddToGauge {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      gauge_id: isSet(object.gauge_id) ? BigInt(object.gauge_id.toString()) : BigInt(0),
      rewards: Array.isArray(object?.rewards) ? object.rewards.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgAddToGauge): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.gauge_id !== undefined && (obj.gauge_id = (message.gauge_id || BigInt(0)).toString());
    if (message.rewards) {
      obj.rewards = message.rewards.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.rewards = [];
    }
    return obj;
  },
  fromPartial(object: Partial<MsgAddToGauge>): MsgAddToGauge {
    const message = createBaseMsgAddToGauge();
    message.owner = object.owner ?? "";
    message.gauge_id = object.gauge_id !== undefined && object.gauge_id !== null ? BigInt(object.gauge_id.toString()) : BigInt(0);
    message.rewards = object.rewards?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: MsgAddToGaugeSDKType): MsgAddToGauge {
    return {
      owner: object?.owner,
      gauge_id: object?.gauge_id,
      rewards: Array.isArray(object?.rewards) ? object.rewards.map((e: any) => Coin.fromSDK(e)) : []
    };
  },
  toSDK(message: MsgAddToGauge): MsgAddToGaugeSDKType {
    const obj: any = {};
    obj.owner = message.owner;
    obj.gauge_id = message.gauge_id;
    if (message.rewards) {
      obj.rewards = message.rewards.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.rewards = [];
    }
    return obj;
  },
  fromAmino(object: MsgAddToGaugeAmino): MsgAddToGauge {
    return {
      owner: object.owner,
      gauge_id: BigInt(object.gauge_id),
      rewards: Array.isArray(object?.rewards) ? object.rewards.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: MsgAddToGauge): MsgAddToGaugeAmino {
    const obj: any = {};
    obj.owner = message.owner;
    obj.gauge_id = message.gauge_id ? message.gauge_id.toString() : undefined;
    if (message.rewards) {
      obj.rewards = message.rewards.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.rewards = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgAddToGaugeAminoMsg): MsgAddToGauge {
    return MsgAddToGauge.fromAmino(object.value);
  },
  toAminoMsg(message: MsgAddToGauge): MsgAddToGaugeAminoMsg {
    return {
      type: "osmosis/incentives/add-to-gauge",
      value: MsgAddToGauge.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgAddToGaugeProtoMsg): MsgAddToGauge {
    return MsgAddToGauge.decode(message.value);
  },
  toProto(message: MsgAddToGauge): Uint8Array {
    return MsgAddToGauge.encode(message).finish();
  },
  toProtoMsg(message: MsgAddToGauge): MsgAddToGaugeProtoMsg {
    return {
      typeUrl: "/osmosis.incentives.MsgAddToGauge",
      value: MsgAddToGauge.encode(message).finish()
    };
  }
};
function createBaseMsgAddToGaugeResponse(): MsgAddToGaugeResponse {
  return {};
}
export const MsgAddToGaugeResponse = {
  typeUrl: "/osmosis.incentives.MsgAddToGaugeResponse",
  encode(_: MsgAddToGaugeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAddToGaugeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddToGaugeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgAddToGaugeResponse {
    return {};
  },
  toJSON(_: MsgAddToGaugeResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgAddToGaugeResponse>): MsgAddToGaugeResponse {
    const message = createBaseMsgAddToGaugeResponse();
    return message;
  },
  fromSDK(_: MsgAddToGaugeResponseSDKType): MsgAddToGaugeResponse {
    return {};
  },
  toSDK(_: MsgAddToGaugeResponse): MsgAddToGaugeResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgAddToGaugeResponseAmino): MsgAddToGaugeResponse {
    return {};
  },
  toAmino(_: MsgAddToGaugeResponse): MsgAddToGaugeResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgAddToGaugeResponseAminoMsg): MsgAddToGaugeResponse {
    return MsgAddToGaugeResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgAddToGaugeResponse): MsgAddToGaugeResponseAminoMsg {
    return {
      type: "osmosis/incentives/add-to-gauge-response",
      value: MsgAddToGaugeResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgAddToGaugeResponseProtoMsg): MsgAddToGaugeResponse {
    return MsgAddToGaugeResponse.decode(message.value);
  },
  toProto(message: MsgAddToGaugeResponse): Uint8Array {
    return MsgAddToGaugeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAddToGaugeResponse): MsgAddToGaugeResponseProtoMsg {
    return {
      typeUrl: "/osmosis.incentives.MsgAddToGaugeResponse",
      value: MsgAddToGaugeResponse.encode(message).finish()
    };
  }
};
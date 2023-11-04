//@ts-nocheck
import { Coin, CoinAmino, CoinSDKType } from "../../base/v1beta1/coin";
import { Period, PeriodAmino, PeriodSDKType } from "./vesting";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export const protobufPackage = "cosmos.vesting.v1beta1";
/**
 * MsgCreateVestingAccount defines a message that enables creating a vesting
 * account.
 */
export interface MsgCreateVestingAccount {
  from_address: string;
  to_address: string;
  amount: Coin[];
  /** end of vesting as unix time (in seconds). */
  end_time: bigint;
  delayed: boolean;
}
export interface MsgCreateVestingAccountProtoMsg {
  type_url: "/cosmos.vesting.v1beta1.MsgCreateVestingAccount";
  value: Uint8Array;
}
export interface MsgCreateVestingAccountProtoMsg {
  type_url: "/cosmos.vesting.v1beta1.MsgCreateVestingAccount";
  value: Uint8Array;
}
/**
 * MsgCreateVestingAccount defines a message that enables creating a vesting
 * account.
 */
export interface MsgCreateVestingAccountAmino {
  from_address: string;
  to_address: string;
  amount: CoinAmino[];
  /** end of vesting as unix time (in seconds). */
  end_time: string;
  delayed: boolean;
}
export interface MsgCreateVestingAccountAminoMsg {
  type: "cosmos-sdk/MsgCreateVestingAccount";
  value: MsgCreateVestingAccountAmino;
}
/**
 * MsgCreateVestingAccount defines a message that enables creating a vesting
 * account.
 */
export interface MsgCreateVestingAccountSDKType {
  from_address: string;
  to_address: string;
  amount: CoinSDKType[];
  end_time: bigint;
  delayed: boolean;
}
/** MsgCreateVestingAccountResponse defines the Msg/CreateVestingAccount response type. */
export interface MsgCreateVestingAccountResponse {}
export interface MsgCreateVestingAccountResponseProtoMsg {
  type_url: "/cosmos.vesting.v1beta1.MsgCreateVestingAccountResponse";
  value: Uint8Array;
}
export interface MsgCreateVestingAccountResponseProtoMsg {
  type_url: "/cosmos.vesting.v1beta1.MsgCreateVestingAccountResponse";
  value: Uint8Array;
}
/** MsgCreateVestingAccountResponse defines the Msg/CreateVestingAccount response type. */
export interface MsgCreateVestingAccountResponseAmino {}
export interface MsgCreateVestingAccountResponseAminoMsg {
  type: "cosmos-sdk/MsgCreateVestingAccountResponse";
  value: MsgCreateVestingAccountResponseAmino;
}
/** MsgCreateVestingAccountResponse defines the Msg/CreateVestingAccount response type. */
export interface MsgCreateVestingAccountResponseSDKType {}
/**
 * MsgCreatePermanentLockedAccount defines a message that enables creating a permanent
 * locked account.
 * 
 * Since: cosmos-sdk 0.46
 */
export interface MsgCreatePermanentLockedAccount {
  from_address: string;
  to_address: string;
  amount: Coin[];
}
export interface MsgCreatePermanentLockedAccountProtoMsg {
  type_url: "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount";
  value: Uint8Array;
}
export interface MsgCreatePermanentLockedAccountProtoMsg {
  type_url: "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount";
  value: Uint8Array;
}
/**
 * MsgCreatePermanentLockedAccount defines a message that enables creating a permanent
 * locked account.
 * 
 * Since: cosmos-sdk 0.46
 */
export interface MsgCreatePermanentLockedAccountAmino {
  from_address: string;
  to_address: string;
  amount: CoinAmino[];
}
export interface MsgCreatePermanentLockedAccountAminoMsg {
  type: "cosmos-sdk/MsgCreatePermLockedAccount";
  value: MsgCreatePermanentLockedAccountAmino;
}
/**
 * MsgCreatePermanentLockedAccount defines a message that enables creating a permanent
 * locked account.
 * 
 * Since: cosmos-sdk 0.46
 */
export interface MsgCreatePermanentLockedAccountSDKType {
  from_address: string;
  to_address: string;
  amount: CoinSDKType[];
}
/**
 * MsgCreatePermanentLockedAccountResponse defines the Msg/CreatePermanentLockedAccount response type.
 * 
 * Since: cosmos-sdk 0.46
 */
export interface MsgCreatePermanentLockedAccountResponse {}
export interface MsgCreatePermanentLockedAccountResponseProtoMsg {
  type_url: "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccountResponse";
  value: Uint8Array;
}
export interface MsgCreatePermanentLockedAccountResponseProtoMsg {
  type_url: "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccountResponse";
  value: Uint8Array;
}
/**
 * MsgCreatePermanentLockedAccountResponse defines the Msg/CreatePermanentLockedAccount response type.
 * 
 * Since: cosmos-sdk 0.46
 */
export interface MsgCreatePermanentLockedAccountResponseAmino {}
export interface MsgCreatePermanentLockedAccountResponseAminoMsg {
  type: "cosmos-sdk/MsgCreatePermanentLockedAccountResponse";
  value: MsgCreatePermanentLockedAccountResponseAmino;
}
/**
 * MsgCreatePermanentLockedAccountResponse defines the Msg/CreatePermanentLockedAccount response type.
 * 
 * Since: cosmos-sdk 0.46
 */
export interface MsgCreatePermanentLockedAccountResponseSDKType {}
/**
 * MsgCreateVestingAccount defines a message that enables creating a vesting
 * account.
 * 
 * Since: cosmos-sdk 0.46
 */
export interface MsgCreatePeriodicVestingAccount {
  from_address: string;
  to_address: string;
  /** start of vesting as unix time (in seconds). */
  start_time: bigint;
  vesting_periods: Period[];
}
export interface MsgCreatePeriodicVestingAccountProtoMsg {
  type_url: "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount";
  value: Uint8Array;
}
export interface MsgCreatePeriodicVestingAccountProtoMsg {
  type_url: "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount";
  value: Uint8Array;
}
/**
 * MsgCreateVestingAccount defines a message that enables creating a vesting
 * account.
 * 
 * Since: cosmos-sdk 0.46
 */
export interface MsgCreatePeriodicVestingAccountAmino {
  from_address: string;
  to_address: string;
  /** start of vesting as unix time (in seconds). */
  start_time: string;
  vesting_periods: PeriodAmino[];
}
export interface MsgCreatePeriodicVestingAccountAminoMsg {
  type: "cosmos-sdk/MsgCreatePeriodicVestingAccount";
  value: MsgCreatePeriodicVestingAccountAmino;
}
/**
 * MsgCreateVestingAccount defines a message that enables creating a vesting
 * account.
 * 
 * Since: cosmos-sdk 0.46
 */
export interface MsgCreatePeriodicVestingAccountSDKType {
  from_address: string;
  to_address: string;
  start_time: bigint;
  vesting_periods: PeriodSDKType[];
}
/**
 * MsgCreateVestingAccountResponse defines the Msg/CreatePeriodicVestingAccount
 * response type.
 * 
 * Since: cosmos-sdk 0.46
 */
export interface MsgCreatePeriodicVestingAccountResponse {}
export interface MsgCreatePeriodicVestingAccountResponseProtoMsg {
  type_url: "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccountResponse";
  value: Uint8Array;
}
export interface MsgCreatePeriodicVestingAccountResponseProtoMsg {
  type_url: "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccountResponse";
  value: Uint8Array;
}
/**
 * MsgCreateVestingAccountResponse defines the Msg/CreatePeriodicVestingAccount
 * response type.
 * 
 * Since: cosmos-sdk 0.46
 */
export interface MsgCreatePeriodicVestingAccountResponseAmino {}
export interface MsgCreatePeriodicVestingAccountResponseAminoMsg {
  type: "cosmos-sdk/MsgCreatePeriodicVestingAccountResponse";
  value: MsgCreatePeriodicVestingAccountResponseAmino;
}
/**
 * MsgCreateVestingAccountResponse defines the Msg/CreatePeriodicVestingAccount
 * response type.
 * 
 * Since: cosmos-sdk 0.46
 */
export interface MsgCreatePeriodicVestingAccountResponseSDKType {}
function createBaseMsgCreateVestingAccount(): MsgCreateVestingAccount {
  return {
    from_address: "",
    to_address: "",
    amount: [],
    end_time: BigInt(0),
    delayed: false
  };
}
export const MsgCreateVestingAccount = {
  typeUrl: "/cosmos.vesting.v1beta1.MsgCreateVestingAccount",
  encode(message: MsgCreateVestingAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.from_address !== "") {
      writer.uint32(10).string(message.from_address);
    }
    if (message.to_address !== "") {
      writer.uint32(18).string(message.to_address);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.end_time !== BigInt(0)) {
      writer.uint32(32).int64(message.end_time);
    }
    if (message.delayed === true) {
      writer.uint32(40).bool(message.delayed);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateVestingAccount {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateVestingAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.from_address = reader.string();
          break;
        case 2:
          message.to_address = reader.string();
          break;
        case 3:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.end_time = reader.int64();
          break;
        case 5:
          message.delayed = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateVestingAccount {
    return {
      from_address: isSet(object.from_address) ? String(object.from_address) : "",
      to_address: isSet(object.to_address) ? String(object.to_address) : "",
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : [],
      end_time: isSet(object.end_time) ? BigInt(object.end_time.toString()) : BigInt(0),
      delayed: isSet(object.delayed) ? Boolean(object.delayed) : false
    };
  },
  toJSON(message: MsgCreateVestingAccount): unknown {
    const obj: any = {};
    message.from_address !== undefined && (obj.from_address = message.from_address);
    message.to_address !== undefined && (obj.to_address = message.to_address);
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amount = [];
    }
    message.end_time !== undefined && (obj.end_time = (message.end_time || BigInt(0)).toString());
    message.delayed !== undefined && (obj.delayed = message.delayed);
    return obj;
  },
  fromPartial(object: Partial<MsgCreateVestingAccount>): MsgCreateVestingAccount {
    const message = createBaseMsgCreateVestingAccount();
    message.from_address = object.from_address ?? "";
    message.to_address = object.to_address ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    message.end_time = object.end_time !== undefined && object.end_time !== null ? BigInt(object.end_time.toString()) : BigInt(0);
    message.delayed = object.delayed ?? false;
    return message;
  },
  fromSDK(object: MsgCreateVestingAccountSDKType): MsgCreateVestingAccount {
    return {
      from_address: object?.from_address,
      to_address: object?.to_address,
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromSDK(e)) : [],
      end_time: object?.end_time,
      delayed: object?.delayed
    };
  },
  toSDK(message: MsgCreateVestingAccount): MsgCreateVestingAccountSDKType {
    const obj: any = {};
    obj.from_address = message.from_address;
    obj.to_address = message.to_address;
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.amount = [];
    }
    obj.end_time = message.end_time;
    obj.delayed = message.delayed;
    return obj;
  },
  fromAmino(object: MsgCreateVestingAccountAmino): MsgCreateVestingAccount {
    return {
      from_address: object.from_address,
      to_address: object.to_address,
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromAmino(e)) : [],
      end_time: BigInt(object.end_time),
      delayed: object.delayed
    };
  },
  toAmino(message: MsgCreateVestingAccount): MsgCreateVestingAccountAmino {
    const obj: any = {};
    obj.from_address = message.from_address;
    obj.to_address = message.to_address;
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = [];
    }
    obj.end_time = message.end_time ? message.end_time.toString() : undefined;
    obj.delayed = message.delayed;
    return obj;
  },
  fromAminoMsg(object: MsgCreateVestingAccountAminoMsg): MsgCreateVestingAccount {
    return MsgCreateVestingAccount.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateVestingAccount): MsgCreateVestingAccountAminoMsg {
    return {
      type: "cosmos-sdk/MsgCreateVestingAccount",
      value: MsgCreateVestingAccount.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateVestingAccountProtoMsg): MsgCreateVestingAccount {
    return MsgCreateVestingAccount.decode(message.value);
  },
  toProto(message: MsgCreateVestingAccount): Uint8Array {
    return MsgCreateVestingAccount.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateVestingAccount): MsgCreateVestingAccountProtoMsg {
    return {
      typeUrl: "/cosmos.vesting.v1beta1.MsgCreateVestingAccount",
      value: MsgCreateVestingAccount.encode(message).finish()
    };
  }
};
function createBaseMsgCreateVestingAccountResponse(): MsgCreateVestingAccountResponse {
  return {};
}
export const MsgCreateVestingAccountResponse = {
  typeUrl: "/cosmos.vesting.v1beta1.MsgCreateVestingAccountResponse",
  encode(_: MsgCreateVestingAccountResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateVestingAccountResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateVestingAccountResponse();
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
  fromJSON(_: any): MsgCreateVestingAccountResponse {
    return {};
  },
  toJSON(_: MsgCreateVestingAccountResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgCreateVestingAccountResponse>): MsgCreateVestingAccountResponse {
    const message = createBaseMsgCreateVestingAccountResponse();
    return message;
  },
  fromSDK(_: MsgCreateVestingAccountResponseSDKType): MsgCreateVestingAccountResponse {
    return {};
  },
  toSDK(_: MsgCreateVestingAccountResponse): MsgCreateVestingAccountResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgCreateVestingAccountResponseAmino): MsgCreateVestingAccountResponse {
    return {};
  },
  toAmino(_: MsgCreateVestingAccountResponse): MsgCreateVestingAccountResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreateVestingAccountResponseAminoMsg): MsgCreateVestingAccountResponse {
    return MsgCreateVestingAccountResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateVestingAccountResponse): MsgCreateVestingAccountResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgCreateVestingAccountResponse",
      value: MsgCreateVestingAccountResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateVestingAccountResponseProtoMsg): MsgCreateVestingAccountResponse {
    return MsgCreateVestingAccountResponse.decode(message.value);
  },
  toProto(message: MsgCreateVestingAccountResponse): Uint8Array {
    return MsgCreateVestingAccountResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateVestingAccountResponse): MsgCreateVestingAccountResponseProtoMsg {
    return {
      typeUrl: "/cosmos.vesting.v1beta1.MsgCreateVestingAccountResponse",
      value: MsgCreateVestingAccountResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreatePermanentLockedAccount(): MsgCreatePermanentLockedAccount {
  return {
    from_address: "",
    to_address: "",
    amount: []
  };
}
export const MsgCreatePermanentLockedAccount = {
  typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount",
  encode(message: MsgCreatePermanentLockedAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.from_address !== "") {
      writer.uint32(10).string(message.from_address);
    }
    if (message.to_address !== "") {
      writer.uint32(18).string(message.to_address);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreatePermanentLockedAccount {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePermanentLockedAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.from_address = reader.string();
          break;
        case 2:
          message.to_address = reader.string();
          break;
        case 3:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreatePermanentLockedAccount {
    return {
      from_address: isSet(object.from_address) ? String(object.from_address) : "",
      to_address: isSet(object.to_address) ? String(object.to_address) : "",
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgCreatePermanentLockedAccount): unknown {
    const obj: any = {};
    message.from_address !== undefined && (obj.from_address = message.from_address);
    message.to_address !== undefined && (obj.to_address = message.to_address);
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amount = [];
    }
    return obj;
  },
  fromPartial(object: Partial<MsgCreatePermanentLockedAccount>): MsgCreatePermanentLockedAccount {
    const message = createBaseMsgCreatePermanentLockedAccount();
    message.from_address = object.from_address ?? "";
    message.to_address = object.to_address ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: MsgCreatePermanentLockedAccountSDKType): MsgCreatePermanentLockedAccount {
    return {
      from_address: object?.from_address,
      to_address: object?.to_address,
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromSDK(e)) : []
    };
  },
  toSDK(message: MsgCreatePermanentLockedAccount): MsgCreatePermanentLockedAccountSDKType {
    const obj: any = {};
    obj.from_address = message.from_address;
    obj.to_address = message.to_address;
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.amount = [];
    }
    return obj;
  },
  fromAmino(object: MsgCreatePermanentLockedAccountAmino): MsgCreatePermanentLockedAccount {
    return {
      from_address: object.from_address,
      to_address: object.to_address,
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: MsgCreatePermanentLockedAccount): MsgCreatePermanentLockedAccountAmino {
    const obj: any = {};
    obj.from_address = message.from_address;
    obj.to_address = message.to_address;
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgCreatePermanentLockedAccountAminoMsg): MsgCreatePermanentLockedAccount {
    return MsgCreatePermanentLockedAccount.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreatePermanentLockedAccount): MsgCreatePermanentLockedAccountAminoMsg {
    return {
      type: "cosmos-sdk/MsgCreatePermLockedAccount",
      value: MsgCreatePermanentLockedAccount.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreatePermanentLockedAccountProtoMsg): MsgCreatePermanentLockedAccount {
    return MsgCreatePermanentLockedAccount.decode(message.value);
  },
  toProto(message: MsgCreatePermanentLockedAccount): Uint8Array {
    return MsgCreatePermanentLockedAccount.encode(message).finish();
  },
  toProtoMsg(message: MsgCreatePermanentLockedAccount): MsgCreatePermanentLockedAccountProtoMsg {
    return {
      typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount",
      value: MsgCreatePermanentLockedAccount.encode(message).finish()
    };
  }
};
function createBaseMsgCreatePermanentLockedAccountResponse(): MsgCreatePermanentLockedAccountResponse {
  return {};
}
export const MsgCreatePermanentLockedAccountResponse = {
  typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccountResponse",
  encode(_: MsgCreatePermanentLockedAccountResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreatePermanentLockedAccountResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePermanentLockedAccountResponse();
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
  fromJSON(_: any): MsgCreatePermanentLockedAccountResponse {
    return {};
  },
  toJSON(_: MsgCreatePermanentLockedAccountResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgCreatePermanentLockedAccountResponse>): MsgCreatePermanentLockedAccountResponse {
    const message = createBaseMsgCreatePermanentLockedAccountResponse();
    return message;
  },
  fromSDK(_: MsgCreatePermanentLockedAccountResponseSDKType): MsgCreatePermanentLockedAccountResponse {
    return {};
  },
  toSDK(_: MsgCreatePermanentLockedAccountResponse): MsgCreatePermanentLockedAccountResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgCreatePermanentLockedAccountResponseAmino): MsgCreatePermanentLockedAccountResponse {
    return {};
  },
  toAmino(_: MsgCreatePermanentLockedAccountResponse): MsgCreatePermanentLockedAccountResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreatePermanentLockedAccountResponseAminoMsg): MsgCreatePermanentLockedAccountResponse {
    return MsgCreatePermanentLockedAccountResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreatePermanentLockedAccountResponse): MsgCreatePermanentLockedAccountResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgCreatePermanentLockedAccountResponse",
      value: MsgCreatePermanentLockedAccountResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreatePermanentLockedAccountResponseProtoMsg): MsgCreatePermanentLockedAccountResponse {
    return MsgCreatePermanentLockedAccountResponse.decode(message.value);
  },
  toProto(message: MsgCreatePermanentLockedAccountResponse): Uint8Array {
    return MsgCreatePermanentLockedAccountResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreatePermanentLockedAccountResponse): MsgCreatePermanentLockedAccountResponseProtoMsg {
    return {
      typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccountResponse",
      value: MsgCreatePermanentLockedAccountResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreatePeriodicVestingAccount(): MsgCreatePeriodicVestingAccount {
  return {
    from_address: "",
    to_address: "",
    start_time: BigInt(0),
    vesting_periods: []
  };
}
export const MsgCreatePeriodicVestingAccount = {
  typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount",
  encode(message: MsgCreatePeriodicVestingAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.from_address !== "") {
      writer.uint32(10).string(message.from_address);
    }
    if (message.to_address !== "") {
      writer.uint32(18).string(message.to_address);
    }
    if (message.start_time !== BigInt(0)) {
      writer.uint32(24).int64(message.start_time);
    }
    for (const v of message.vesting_periods) {
      Period.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreatePeriodicVestingAccount {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePeriodicVestingAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.from_address = reader.string();
          break;
        case 2:
          message.to_address = reader.string();
          break;
        case 3:
          message.start_time = reader.int64();
          break;
        case 4:
          message.vesting_periods.push(Period.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreatePeriodicVestingAccount {
    return {
      from_address: isSet(object.from_address) ? String(object.from_address) : "",
      to_address: isSet(object.to_address) ? String(object.to_address) : "",
      start_time: isSet(object.start_time) ? BigInt(object.start_time.toString()) : BigInt(0),
      vesting_periods: Array.isArray(object?.vesting_periods) ? object.vesting_periods.map((e: any) => Period.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgCreatePeriodicVestingAccount): unknown {
    const obj: any = {};
    message.from_address !== undefined && (obj.from_address = message.from_address);
    message.to_address !== undefined && (obj.to_address = message.to_address);
    message.start_time !== undefined && (obj.start_time = (message.start_time || BigInt(0)).toString());
    if (message.vesting_periods) {
      obj.vesting_periods = message.vesting_periods.map(e => e ? Period.toJSON(e) : undefined);
    } else {
      obj.vesting_periods = [];
    }
    return obj;
  },
  fromPartial(object: Partial<MsgCreatePeriodicVestingAccount>): MsgCreatePeriodicVestingAccount {
    const message = createBaseMsgCreatePeriodicVestingAccount();
    message.from_address = object.from_address ?? "";
    message.to_address = object.to_address ?? "";
    message.start_time = object.start_time !== undefined && object.start_time !== null ? BigInt(object.start_time.toString()) : BigInt(0);
    message.vesting_periods = object.vesting_periods?.map(e => Period.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: MsgCreatePeriodicVestingAccountSDKType): MsgCreatePeriodicVestingAccount {
    return {
      from_address: object?.from_address,
      to_address: object?.to_address,
      start_time: object?.start_time,
      vesting_periods: Array.isArray(object?.vesting_periods) ? object.vesting_periods.map((e: any) => Period.fromSDK(e)) : []
    };
  },
  toSDK(message: MsgCreatePeriodicVestingAccount): MsgCreatePeriodicVestingAccountSDKType {
    const obj: any = {};
    obj.from_address = message.from_address;
    obj.to_address = message.to_address;
    obj.start_time = message.start_time;
    if (message.vesting_periods) {
      obj.vesting_periods = message.vesting_periods.map(e => e ? Period.toSDK(e) : undefined);
    } else {
      obj.vesting_periods = [];
    }
    return obj;
  },
  fromAmino(object: MsgCreatePeriodicVestingAccountAmino): MsgCreatePeriodicVestingAccount {
    return {
      from_address: object.from_address,
      to_address: object.to_address,
      start_time: BigInt(object.start_time),
      vesting_periods: Array.isArray(object?.vesting_periods) ? object.vesting_periods.map((e: any) => Period.fromAmino(e)) : []
    };
  },
  toAmino(message: MsgCreatePeriodicVestingAccount): MsgCreatePeriodicVestingAccountAmino {
    const obj: any = {};
    obj.from_address = message.from_address;
    obj.to_address = message.to_address;
    obj.start_time = message.start_time ? message.start_time.toString() : undefined;
    if (message.vesting_periods) {
      obj.vesting_periods = message.vesting_periods.map(e => e ? Period.toAmino(e) : undefined);
    } else {
      obj.vesting_periods = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgCreatePeriodicVestingAccountAminoMsg): MsgCreatePeriodicVestingAccount {
    return MsgCreatePeriodicVestingAccount.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreatePeriodicVestingAccount): MsgCreatePeriodicVestingAccountAminoMsg {
    return {
      type: "cosmos-sdk/MsgCreatePeriodicVestingAccount",
      value: MsgCreatePeriodicVestingAccount.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreatePeriodicVestingAccountProtoMsg): MsgCreatePeriodicVestingAccount {
    return MsgCreatePeriodicVestingAccount.decode(message.value);
  },
  toProto(message: MsgCreatePeriodicVestingAccount): Uint8Array {
    return MsgCreatePeriodicVestingAccount.encode(message).finish();
  },
  toProtoMsg(message: MsgCreatePeriodicVestingAccount): MsgCreatePeriodicVestingAccountProtoMsg {
    return {
      typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount",
      value: MsgCreatePeriodicVestingAccount.encode(message).finish()
    };
  }
};
function createBaseMsgCreatePeriodicVestingAccountResponse(): MsgCreatePeriodicVestingAccountResponse {
  return {};
}
export const MsgCreatePeriodicVestingAccountResponse = {
  typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccountResponse",
  encode(_: MsgCreatePeriodicVestingAccountResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreatePeriodicVestingAccountResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePeriodicVestingAccountResponse();
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
  fromJSON(_: any): MsgCreatePeriodicVestingAccountResponse {
    return {};
  },
  toJSON(_: MsgCreatePeriodicVestingAccountResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgCreatePeriodicVestingAccountResponse>): MsgCreatePeriodicVestingAccountResponse {
    const message = createBaseMsgCreatePeriodicVestingAccountResponse();
    return message;
  },
  fromSDK(_: MsgCreatePeriodicVestingAccountResponseSDKType): MsgCreatePeriodicVestingAccountResponse {
    return {};
  },
  toSDK(_: MsgCreatePeriodicVestingAccountResponse): MsgCreatePeriodicVestingAccountResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgCreatePeriodicVestingAccountResponseAmino): MsgCreatePeriodicVestingAccountResponse {
    return {};
  },
  toAmino(_: MsgCreatePeriodicVestingAccountResponse): MsgCreatePeriodicVestingAccountResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreatePeriodicVestingAccountResponseAminoMsg): MsgCreatePeriodicVestingAccountResponse {
    return MsgCreatePeriodicVestingAccountResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreatePeriodicVestingAccountResponse): MsgCreatePeriodicVestingAccountResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgCreatePeriodicVestingAccountResponse",
      value: MsgCreatePeriodicVestingAccountResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreatePeriodicVestingAccountResponseProtoMsg): MsgCreatePeriodicVestingAccountResponse {
    return MsgCreatePeriodicVestingAccountResponse.decode(message.value);
  },
  toProto(message: MsgCreatePeriodicVestingAccountResponse): Uint8Array {
    return MsgCreatePeriodicVestingAccountResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreatePeriodicVestingAccountResponse): MsgCreatePeriodicVestingAccountResponseProtoMsg {
    return {
      typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccountResponse",
      value: MsgCreatePeriodicVestingAccountResponse.encode(message).finish()
    };
  }
};
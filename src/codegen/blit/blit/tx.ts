//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
export const protobufPackage = "blit.blit";
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParams {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority: string;
  /** NOTE: All parameters must be supplied. */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  type_url: "/blit.blit.MsgUpdateParams";
  value: Uint8Array;
}
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParamsAmino {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority: string;
  /** NOTE: All parameters must be supplied. */
  params?: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "blit/x/blit/MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParamsSDKType {
  authority: string;
  params: ParamsSDKType;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  type_url: "/blit.blit.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/blit.blit.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponseSDKType {}
export interface MsgMintCoins {
  amount: Coin;
  grantee: string;
}
export interface MsgMintCoinsProtoMsg {
  type_url: "/blit.blit.MsgMintCoins";
  value: Uint8Array;
}
export interface MsgMintCoinsAmino {
  amount?: CoinAmino;
  grantee: string;
}
export interface MsgMintCoinsAminoMsg {
  type: "/blit.blit.MsgMintCoins";
  value: MsgMintCoinsAmino;
}
export interface MsgMintCoinsSDKType {
  amount: CoinSDKType;
  grantee: string;
}
export interface MsgMintCoinsResponse {}
export interface MsgMintCoinsResponseProtoMsg {
  type_url: "/blit.blit.MsgMintCoinsResponse";
  value: Uint8Array;
}
export interface MsgMintCoinsResponseAmino {}
export interface MsgMintCoinsResponseAminoMsg {
  type: "/blit.blit.MsgMintCoinsResponse";
  value: MsgMintCoinsResponseAmino;
}
export interface MsgMintCoinsResponseSDKType {}
export interface MsgBurnCoins {
  amount: Coin;
  grantee: string;
}
export interface MsgBurnCoinsProtoMsg {
  type_url: "/blit.blit.MsgBurnCoins";
  value: Uint8Array;
}
export interface MsgBurnCoinsAmino {
  amount?: CoinAmino;
  grantee: string;
}
export interface MsgBurnCoinsAminoMsg {
  type: "/blit.blit.MsgBurnCoins";
  value: MsgBurnCoinsAmino;
}
export interface MsgBurnCoinsSDKType {
  amount: CoinSDKType;
  grantee: string;
}
export interface MsgBurnCoinsResponse {}
export interface MsgBurnCoinsResponseProtoMsg {
  type_url: "/blit.blit.MsgBurnCoinsResponse";
  value: Uint8Array;
}
export interface MsgBurnCoinsResponseAmino {}
export interface MsgBurnCoinsResponseAminoMsg {
  type: "/blit.blit.MsgBurnCoinsResponse";
  value: MsgBurnCoinsResponseAmino;
}
export interface MsgBurnCoinsResponseSDKType {}
export interface MsgForceTransferCoins {
  amount: Coin;
  from_address: string;
  to_address: string;
  grantee: string;
}
export interface MsgForceTransferCoinsProtoMsg {
  type_url: "/blit.blit.MsgForceTransferCoins";
  value: Uint8Array;
}
export interface MsgForceTransferCoinsAmino {
  amount?: CoinAmino;
  from_address: string;
  to_address: string;
  grantee: string;
}
export interface MsgForceTransferCoinsAminoMsg {
  type: "/blit.blit.MsgForceTransferCoins";
  value: MsgForceTransferCoinsAmino;
}
export interface MsgForceTransferCoinsSDKType {
  amount: CoinSDKType;
  from_address: string;
  to_address: string;
  grantee: string;
}
export interface MsgForceTransferCoinsResponse {}
export interface MsgForceTransferCoinsResponseProtoMsg {
  type_url: "/blit.blit.MsgForceTransferCoinsResponse";
  value: Uint8Array;
}
export interface MsgForceTransferCoinsResponseAmino {}
export interface MsgForceTransferCoinsResponseAminoMsg {
  type: "/blit.blit.MsgForceTransferCoinsResponse";
  value: MsgForceTransferCoinsResponseAmino;
}
export interface MsgForceTransferCoinsResponseSDKType {}
export interface MsgSetDenomMetadata {
  authority: string;
  base: string;
  display: string;
  name: string;
  symbol: string;
  uri: string;
  uri_hash: string;
  exponent: number;
  description: string;
}
export interface MsgSetDenomMetadataProtoMsg {
  type_url: "/blit.blit.MsgSetDenomMetadata";
  value: Uint8Array;
}
export interface MsgSetDenomMetadataAmino {
  authority: string;
  base: string;
  display: string;
  name: string;
  symbol: string;
  uri: string;
  uri_hash: string;
  exponent: number;
  description: string;
}
export interface MsgSetDenomMetadataAminoMsg {
  type: "/blit.blit.MsgSetDenomMetadata";
  value: MsgSetDenomMetadataAmino;
}
export interface MsgSetDenomMetadataSDKType {
  authority: string;
  base: string;
  display: string;
  name: string;
  symbol: string;
  uri: string;
  uri_hash: string;
  exponent: number;
  description: string;
}
export interface MsgSetDenomMetadataResponse {}
export interface MsgSetDenomMetadataResponseProtoMsg {
  type_url: "/blit.blit.MsgSetDenomMetadataResponse";
  value: Uint8Array;
}
export interface MsgSetDenomMetadataResponseAmino {}
export interface MsgSetDenomMetadataResponseAminoMsg {
  type: "/blit.blit.MsgSetDenomMetadataResponse";
  value: MsgSetDenomMetadataResponseAmino;
}
export interface MsgSetDenomMetadataResponseSDKType {}
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
export const MsgUpdateParams = {
  typeUrl: "/blit.blit.MsgUpdateParams",
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateParams {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  toJSON(message: MsgUpdateParams): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    return {
      authority: object.authority,
      params: object?.params ? Params.fromAmino(object.params) : undefined
    };
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateParams): MsgUpdateParamsAminoMsg {
    return {
      type: "blit/x/blit/MsgUpdateParams",
      value: MsgUpdateParams.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/blit.blit.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/blit.blit.MsgUpdateParamsResponse",
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
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
  fromJSON(_: any): MsgUpdateParamsResponse {
    return {};
  },
  toJSON(_: MsgUpdateParamsResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse {
    return {};
  },
  toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/blit.blit.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgMintCoins(): MsgMintCoins {
  return {
    amount: Coin.fromPartial({}),
    grantee: ""
  };
}
export const MsgMintCoins = {
  typeUrl: "/blit.blit.MsgMintCoins",
  encode(message: MsgMintCoins, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
    }
    if (message.grantee !== "") {
      writer.uint32(26).string(message.grantee);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgMintCoins {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintCoins();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.grantee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgMintCoins {
    return {
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
      grantee: isSet(object.grantee) ? String(object.grantee) : ""
    };
  },
  toJSON(message: MsgMintCoins): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    message.grantee !== undefined && (obj.grantee = message.grantee);
    return obj;
  },
  fromPartial(object: Partial<MsgMintCoins>): MsgMintCoins {
    const message = createBaseMsgMintCoins();
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.grantee = object.grantee ?? "";
    return message;
  },
  fromAmino(object: MsgMintCoinsAmino): MsgMintCoins {
    return {
      amount: object?.amount ? Coin.fromAmino(object.amount) : undefined,
      grantee: object.grantee
    };
  },
  toAmino(message: MsgMintCoins): MsgMintCoinsAmino {
    const obj: any = {};
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    obj.grantee = message.grantee;
    return obj;
  },
  fromAminoMsg(object: MsgMintCoinsAminoMsg): MsgMintCoins {
    return MsgMintCoins.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgMintCoinsProtoMsg): MsgMintCoins {
    return MsgMintCoins.decode(message.value);
  },
  toProto(message: MsgMintCoins): Uint8Array {
    return MsgMintCoins.encode(message).finish();
  },
  toProtoMsg(message: MsgMintCoins): MsgMintCoinsProtoMsg {
    return {
      typeUrl: "/blit.blit.MsgMintCoins",
      value: MsgMintCoins.encode(message).finish()
    };
  }
};
function createBaseMsgMintCoinsResponse(): MsgMintCoinsResponse {
  return {};
}
export const MsgMintCoinsResponse = {
  typeUrl: "/blit.blit.MsgMintCoinsResponse",
  encode(_: MsgMintCoinsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgMintCoinsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintCoinsResponse();
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
  fromJSON(_: any): MsgMintCoinsResponse {
    return {};
  },
  toJSON(_: MsgMintCoinsResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgMintCoinsResponse>): MsgMintCoinsResponse {
    const message = createBaseMsgMintCoinsResponse();
    return message;
  },
  fromAmino(_: MsgMintCoinsResponseAmino): MsgMintCoinsResponse {
    return {};
  },
  toAmino(_: MsgMintCoinsResponse): MsgMintCoinsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgMintCoinsResponseAminoMsg): MsgMintCoinsResponse {
    return MsgMintCoinsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgMintCoinsResponseProtoMsg): MsgMintCoinsResponse {
    return MsgMintCoinsResponse.decode(message.value);
  },
  toProto(message: MsgMintCoinsResponse): Uint8Array {
    return MsgMintCoinsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgMintCoinsResponse): MsgMintCoinsResponseProtoMsg {
    return {
      typeUrl: "/blit.blit.MsgMintCoinsResponse",
      value: MsgMintCoinsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgBurnCoins(): MsgBurnCoins {
  return {
    amount: Coin.fromPartial({}),
    grantee: ""
  };
}
export const MsgBurnCoins = {
  typeUrl: "/blit.blit.MsgBurnCoins",
  encode(message: MsgBurnCoins, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
    }
    if (message.grantee !== "") {
      writer.uint32(26).string(message.grantee);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBurnCoins {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurnCoins();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.grantee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgBurnCoins {
    return {
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
      grantee: isSet(object.grantee) ? String(object.grantee) : ""
    };
  },
  toJSON(message: MsgBurnCoins): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    message.grantee !== undefined && (obj.grantee = message.grantee);
    return obj;
  },
  fromPartial(object: Partial<MsgBurnCoins>): MsgBurnCoins {
    const message = createBaseMsgBurnCoins();
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.grantee = object.grantee ?? "";
    return message;
  },
  fromAmino(object: MsgBurnCoinsAmino): MsgBurnCoins {
    return {
      amount: object?.amount ? Coin.fromAmino(object.amount) : undefined,
      grantee: object.grantee
    };
  },
  toAmino(message: MsgBurnCoins): MsgBurnCoinsAmino {
    const obj: any = {};
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    obj.grantee = message.grantee;
    return obj;
  },
  fromAminoMsg(object: MsgBurnCoinsAminoMsg): MsgBurnCoins {
    return MsgBurnCoins.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBurnCoinsProtoMsg): MsgBurnCoins {
    return MsgBurnCoins.decode(message.value);
  },
  toProto(message: MsgBurnCoins): Uint8Array {
    return MsgBurnCoins.encode(message).finish();
  },
  toProtoMsg(message: MsgBurnCoins): MsgBurnCoinsProtoMsg {
    return {
      typeUrl: "/blit.blit.MsgBurnCoins",
      value: MsgBurnCoins.encode(message).finish()
    };
  }
};
function createBaseMsgBurnCoinsResponse(): MsgBurnCoinsResponse {
  return {};
}
export const MsgBurnCoinsResponse = {
  typeUrl: "/blit.blit.MsgBurnCoinsResponse",
  encode(_: MsgBurnCoinsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBurnCoinsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurnCoinsResponse();
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
  fromJSON(_: any): MsgBurnCoinsResponse {
    return {};
  },
  toJSON(_: MsgBurnCoinsResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgBurnCoinsResponse>): MsgBurnCoinsResponse {
    const message = createBaseMsgBurnCoinsResponse();
    return message;
  },
  fromAmino(_: MsgBurnCoinsResponseAmino): MsgBurnCoinsResponse {
    return {};
  },
  toAmino(_: MsgBurnCoinsResponse): MsgBurnCoinsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgBurnCoinsResponseAminoMsg): MsgBurnCoinsResponse {
    return MsgBurnCoinsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBurnCoinsResponseProtoMsg): MsgBurnCoinsResponse {
    return MsgBurnCoinsResponse.decode(message.value);
  },
  toProto(message: MsgBurnCoinsResponse): Uint8Array {
    return MsgBurnCoinsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgBurnCoinsResponse): MsgBurnCoinsResponseProtoMsg {
    return {
      typeUrl: "/blit.blit.MsgBurnCoinsResponse",
      value: MsgBurnCoinsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgForceTransferCoins(): MsgForceTransferCoins {
  return {
    amount: Coin.fromPartial({}),
    from_address: "",
    to_address: "",
    grantee: ""
  };
}
export const MsgForceTransferCoins = {
  typeUrl: "/blit.blit.MsgForceTransferCoins",
  encode(message: MsgForceTransferCoins, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
    }
    if (message.from_address !== "") {
      writer.uint32(18).string(message.from_address);
    }
    if (message.to_address !== "") {
      writer.uint32(26).string(message.to_address);
    }
    if (message.grantee !== "") {
      writer.uint32(34).string(message.grantee);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgForceTransferCoins {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgForceTransferCoins();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.from_address = reader.string();
          break;
        case 3:
          message.to_address = reader.string();
          break;
        case 4:
          message.grantee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgForceTransferCoins {
    return {
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
      from_address: isSet(object.from_address) ? String(object.from_address) : "",
      to_address: isSet(object.to_address) ? String(object.to_address) : "",
      grantee: isSet(object.grantee) ? String(object.grantee) : ""
    };
  },
  toJSON(message: MsgForceTransferCoins): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    message.from_address !== undefined && (obj.from_address = message.from_address);
    message.to_address !== undefined && (obj.to_address = message.to_address);
    message.grantee !== undefined && (obj.grantee = message.grantee);
    return obj;
  },
  fromPartial(object: Partial<MsgForceTransferCoins>): MsgForceTransferCoins {
    const message = createBaseMsgForceTransferCoins();
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.from_address = object.from_address ?? "";
    message.to_address = object.to_address ?? "";
    message.grantee = object.grantee ?? "";
    return message;
  },
  fromAmino(object: MsgForceTransferCoinsAmino): MsgForceTransferCoins {
    return {
      amount: object?.amount ? Coin.fromAmino(object.amount) : undefined,
      from_address: object.from_address,
      to_address: object.to_address,
      grantee: object.grantee
    };
  },
  toAmino(message: MsgForceTransferCoins): MsgForceTransferCoinsAmino {
    const obj: any = {};
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    obj.from_address = message.from_address;
    obj.to_address = message.to_address;
    obj.grantee = message.grantee;
    return obj;
  },
  fromAminoMsg(object: MsgForceTransferCoinsAminoMsg): MsgForceTransferCoins {
    return MsgForceTransferCoins.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgForceTransferCoinsProtoMsg): MsgForceTransferCoins {
    return MsgForceTransferCoins.decode(message.value);
  },
  toProto(message: MsgForceTransferCoins): Uint8Array {
    return MsgForceTransferCoins.encode(message).finish();
  },
  toProtoMsg(message: MsgForceTransferCoins): MsgForceTransferCoinsProtoMsg {
    return {
      typeUrl: "/blit.blit.MsgForceTransferCoins",
      value: MsgForceTransferCoins.encode(message).finish()
    };
  }
};
function createBaseMsgForceTransferCoinsResponse(): MsgForceTransferCoinsResponse {
  return {};
}
export const MsgForceTransferCoinsResponse = {
  typeUrl: "/blit.blit.MsgForceTransferCoinsResponse",
  encode(_: MsgForceTransferCoinsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgForceTransferCoinsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgForceTransferCoinsResponse();
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
  fromJSON(_: any): MsgForceTransferCoinsResponse {
    return {};
  },
  toJSON(_: MsgForceTransferCoinsResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgForceTransferCoinsResponse>): MsgForceTransferCoinsResponse {
    const message = createBaseMsgForceTransferCoinsResponse();
    return message;
  },
  fromAmino(_: MsgForceTransferCoinsResponseAmino): MsgForceTransferCoinsResponse {
    return {};
  },
  toAmino(_: MsgForceTransferCoinsResponse): MsgForceTransferCoinsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgForceTransferCoinsResponseAminoMsg): MsgForceTransferCoinsResponse {
    return MsgForceTransferCoinsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgForceTransferCoinsResponseProtoMsg): MsgForceTransferCoinsResponse {
    return MsgForceTransferCoinsResponse.decode(message.value);
  },
  toProto(message: MsgForceTransferCoinsResponse): Uint8Array {
    return MsgForceTransferCoinsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgForceTransferCoinsResponse): MsgForceTransferCoinsResponseProtoMsg {
    return {
      typeUrl: "/blit.blit.MsgForceTransferCoinsResponse",
      value: MsgForceTransferCoinsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSetDenomMetadata(): MsgSetDenomMetadata {
  return {
    authority: "",
    base: "",
    display: "",
    name: "",
    symbol: "",
    uri: "",
    uri_hash: "",
    exponent: 0,
    description: ""
  };
}
export const MsgSetDenomMetadata = {
  typeUrl: "/blit.blit.MsgSetDenomMetadata",
  encode(message: MsgSetDenomMetadata, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.base !== "") {
      writer.uint32(18).string(message.base);
    }
    if (message.display !== "") {
      writer.uint32(26).string(message.display);
    }
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    if (message.symbol !== "") {
      writer.uint32(42).string(message.symbol);
    }
    if (message.uri !== "") {
      writer.uint32(50).string(message.uri);
    }
    if (message.uri_hash !== "") {
      writer.uint32(58).string(message.uri_hash);
    }
    if (message.exponent !== 0) {
      writer.uint32(64).uint32(message.exponent);
    }
    if (message.description !== "") {
      writer.uint32(74).string(message.description);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetDenomMetadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetDenomMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.base = reader.string();
          break;
        case 3:
          message.display = reader.string();
          break;
        case 4:
          message.name = reader.string();
          break;
        case 5:
          message.symbol = reader.string();
          break;
        case 6:
          message.uri = reader.string();
          break;
        case 7:
          message.uri_hash = reader.string();
          break;
        case 8:
          message.exponent = reader.uint32();
          break;
        case 9:
          message.description = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSetDenomMetadata {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      base: isSet(object.base) ? String(object.base) : "",
      display: isSet(object.display) ? String(object.display) : "",
      name: isSet(object.name) ? String(object.name) : "",
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      uri: isSet(object.uri) ? String(object.uri) : "",
      uri_hash: isSet(object.uri_hash) ? String(object.uri_hash) : "",
      exponent: isSet(object.exponent) ? Number(object.exponent) : 0,
      description: isSet(object.description) ? String(object.description) : ""
    };
  },
  toJSON(message: MsgSetDenomMetadata): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.base !== undefined && (obj.base = message.base);
    message.display !== undefined && (obj.display = message.display);
    message.name !== undefined && (obj.name = message.name);
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.uri !== undefined && (obj.uri = message.uri);
    message.uri_hash !== undefined && (obj.uri_hash = message.uri_hash);
    message.exponent !== undefined && (obj.exponent = Math.round(message.exponent));
    message.description !== undefined && (obj.description = message.description);
    return obj;
  },
  fromPartial(object: Partial<MsgSetDenomMetadata>): MsgSetDenomMetadata {
    const message = createBaseMsgSetDenomMetadata();
    message.authority = object.authority ?? "";
    message.base = object.base ?? "";
    message.display = object.display ?? "";
    message.name = object.name ?? "";
    message.symbol = object.symbol ?? "";
    message.uri = object.uri ?? "";
    message.uri_hash = object.uri_hash ?? "";
    message.exponent = object.exponent ?? 0;
    message.description = object.description ?? "";
    return message;
  },
  fromAmino(object: MsgSetDenomMetadataAmino): MsgSetDenomMetadata {
    return {
      authority: object.authority,
      base: object.base,
      display: object.display,
      name: object.name,
      symbol: object.symbol,
      uri: object.uri,
      uri_hash: object.uri_hash,
      exponent: object.exponent,
      description: object.description
    };
  },
  toAmino(message: MsgSetDenomMetadata): MsgSetDenomMetadataAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.base = message.base;
    obj.display = message.display;
    obj.name = message.name;
    obj.symbol = message.symbol;
    obj.uri = message.uri;
    obj.uri_hash = message.uri_hash;
    obj.exponent = message.exponent;
    obj.description = message.description;
    return obj;
  },
  fromAminoMsg(object: MsgSetDenomMetadataAminoMsg): MsgSetDenomMetadata {
    return MsgSetDenomMetadata.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetDenomMetadataProtoMsg): MsgSetDenomMetadata {
    return MsgSetDenomMetadata.decode(message.value);
  },
  toProto(message: MsgSetDenomMetadata): Uint8Array {
    return MsgSetDenomMetadata.encode(message).finish();
  },
  toProtoMsg(message: MsgSetDenomMetadata): MsgSetDenomMetadataProtoMsg {
    return {
      typeUrl: "/blit.blit.MsgSetDenomMetadata",
      value: MsgSetDenomMetadata.encode(message).finish()
    };
  }
};
function createBaseMsgSetDenomMetadataResponse(): MsgSetDenomMetadataResponse {
  return {};
}
export const MsgSetDenomMetadataResponse = {
  typeUrl: "/blit.blit.MsgSetDenomMetadataResponse",
  encode(_: MsgSetDenomMetadataResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetDenomMetadataResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetDenomMetadataResponse();
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
  fromJSON(_: any): MsgSetDenomMetadataResponse {
    return {};
  },
  toJSON(_: MsgSetDenomMetadataResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgSetDenomMetadataResponse>): MsgSetDenomMetadataResponse {
    const message = createBaseMsgSetDenomMetadataResponse();
    return message;
  },
  fromAmino(_: MsgSetDenomMetadataResponseAmino): MsgSetDenomMetadataResponse {
    return {};
  },
  toAmino(_: MsgSetDenomMetadataResponse): MsgSetDenomMetadataResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetDenomMetadataResponseAminoMsg): MsgSetDenomMetadataResponse {
    return MsgSetDenomMetadataResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetDenomMetadataResponseProtoMsg): MsgSetDenomMetadataResponse {
    return MsgSetDenomMetadataResponse.decode(message.value);
  },
  toProto(message: MsgSetDenomMetadataResponse): Uint8Array {
    return MsgSetDenomMetadataResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetDenomMetadataResponse): MsgSetDenomMetadataResponseProtoMsg {
    return {
      typeUrl: "/blit.blit.MsgSetDenomMetadataResponse",
      value: MsgSetDenomMetadataResponse.encode(message).finish()
    };
  }
};
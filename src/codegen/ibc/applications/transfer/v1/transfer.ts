//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet } from "../../../../helpers";
import { GlobalDecoderRegistry } from "../../../../registry";
export const protobufPackage = "ibc.applications.transfer.v1";
/**
 * DenomTrace contains the base denomination for ICS20 fungible tokens and the
 * source tracing information path.
 */
export interface DenomTrace {
  /**
   * path defines the chain of port/channel identifiers used for tracing the
   * source of the fungible token.
   */
  path: string;
  /** base denomination of the relayed fungible token. */
  base_denom: string;
}
export interface DenomTraceProtoMsg {
  type_url: "/ibc.applications.transfer.v1.DenomTrace";
  value: Uint8Array;
}
/**
 * DenomTrace contains the base denomination for ICS20 fungible tokens and the
 * source tracing information path.
 */
export interface DenomTraceAmino {
  /**
   * path defines the chain of port/channel identifiers used for tracing the
   * source of the fungible token.
   */
  path?: string;
  /** base denomination of the relayed fungible token. */
  base_denom?: string;
}
export interface DenomTraceAminoMsg {
  type: "cosmos-sdk/DenomTrace";
  value: DenomTraceAmino;
}
/**
 * DenomTrace contains the base denomination for ICS20 fungible tokens and the
 * source tracing information path.
 */
export interface DenomTraceSDKType {
  path: string;
  base_denom: string;
}
/**
 * Params defines the set of IBC transfer parameters.
 * NOTE: To prevent a single token from being transferred, set the
 * TransfersEnabled parameter to true and then set the bank module's SendEnabled
 * parameter for the denomination to false.
 */
export interface Params {
  /**
   * send_enabled enables or disables all cross-chain token transfers from this
   * chain.
   */
  send_enabled: boolean;
  /**
   * receive_enabled enables or disables all cross-chain token transfers to this
   * chain.
   */
  receive_enabled: boolean;
}
export interface ParamsProtoMsg {
  type_url: "/ibc.applications.transfer.v1.Params";
  value: Uint8Array;
}
/**
 * Params defines the set of IBC transfer parameters.
 * NOTE: To prevent a single token from being transferred, set the
 * TransfersEnabled parameter to true and then set the bank module's SendEnabled
 * parameter for the denomination to false.
 */
export interface ParamsAmino {
  /**
   * send_enabled enables or disables all cross-chain token transfers from this
   * chain.
   */
  send_enabled?: boolean;
  /**
   * receive_enabled enables or disables all cross-chain token transfers to this
   * chain.
   */
  receive_enabled?: boolean;
}
export interface ParamsAminoMsg {
  type: "cosmos-sdk/Params";
  value: ParamsAmino;
}
/**
 * Params defines the set of IBC transfer parameters.
 * NOTE: To prevent a single token from being transferred, set the
 * TransfersEnabled parameter to true and then set the bank module's SendEnabled
 * parameter for the denomination to false.
 */
export interface ParamsSDKType {
  send_enabled: boolean;
  receive_enabled: boolean;
}
function createBaseDenomTrace(): DenomTrace {
  return {
    path: "",
    base_denom: ""
  };
}
export const DenomTrace = {
  typeUrl: "/ibc.applications.transfer.v1.DenomTrace",
  aminoType: "cosmos-sdk/DenomTrace",
  is(o: any): o is DenomTrace {
    return o && (o.$typeUrl === DenomTrace.typeUrl || typeof o.path === "string" && typeof o.base_denom === "string");
  },
  isSDK(o: any): o is DenomTraceSDKType {
    return o && (o.$typeUrl === DenomTrace.typeUrl || typeof o.path === "string" && typeof o.base_denom === "string");
  },
  isAmino(o: any): o is DenomTraceAmino {
    return o && (o.$typeUrl === DenomTrace.typeUrl || typeof o.path === "string" && typeof o.base_denom === "string");
  },
  encode(message: DenomTrace, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.path !== "") {
      writer.uint32(10).string(message.path);
    }
    if (message.base_denom !== "") {
      writer.uint32(18).string(message.base_denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DenomTrace {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDenomTrace();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.path = reader.string();
          break;
        case 2:
          message.base_denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DenomTrace {
    return {
      path: isSet(object.path) ? String(object.path) : "",
      base_denom: isSet(object.base_denom) ? String(object.base_denom) : ""
    };
  },
  toJSON(message: DenomTrace): unknown {
    const obj: any = {};
    message.path !== undefined && (obj.path = message.path);
    message.base_denom !== undefined && (obj.base_denom = message.base_denom);
    return obj;
  },
  fromPartial(object: Partial<DenomTrace>): DenomTrace {
    const message = createBaseDenomTrace();
    message.path = object.path ?? "";
    message.base_denom = object.base_denom ?? "";
    return message;
  },
  fromAmino(object: DenomTraceAmino): DenomTrace {
    const message = createBaseDenomTrace();
    if (object.path !== undefined && object.path !== null) {
      message.path = object.path;
    }
    if (object.base_denom !== undefined && object.base_denom !== null) {
      message.base_denom = object.base_denom;
    }
    return message;
  },
  toAmino(message: DenomTrace): DenomTraceAmino {
    const obj: any = {};
    obj.path = message.path;
    obj.base_denom = message.base_denom;
    return obj;
  },
  fromAminoMsg(object: DenomTraceAminoMsg): DenomTrace {
    return DenomTrace.fromAmino(object.value);
  },
  toAminoMsg(message: DenomTrace): DenomTraceAminoMsg {
    return {
      type: "cosmos-sdk/DenomTrace",
      value: DenomTrace.toAmino(message)
    };
  },
  fromProtoMsg(message: DenomTraceProtoMsg): DenomTrace {
    return DenomTrace.decode(message.value);
  },
  toProto(message: DenomTrace): Uint8Array {
    return DenomTrace.encode(message).finish();
  },
  toProtoMsg(message: DenomTrace): DenomTraceProtoMsg {
    return {
      typeUrl: "/ibc.applications.transfer.v1.DenomTrace",
      value: DenomTrace.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(DenomTrace.typeUrl, DenomTrace);
GlobalDecoderRegistry.registerAminoProtoMapping(DenomTrace.aminoType, DenomTrace.typeUrl);
function createBaseParams(): Params {
  return {
    send_enabled: false,
    receive_enabled: false
  };
}
export const Params = {
  typeUrl: "/ibc.applications.transfer.v1.Params",
  aminoType: "cosmos-sdk/Params",
  is(o: any): o is Params {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.send_enabled === "boolean" && typeof o.receive_enabled === "boolean");
  },
  isSDK(o: any): o is ParamsSDKType {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.send_enabled === "boolean" && typeof o.receive_enabled === "boolean");
  },
  isAmino(o: any): o is ParamsAmino {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.send_enabled === "boolean" && typeof o.receive_enabled === "boolean");
  },
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.send_enabled === true) {
      writer.uint32(8).bool(message.send_enabled);
    }
    if (message.receive_enabled === true) {
      writer.uint32(16).bool(message.receive_enabled);
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
          message.send_enabled = reader.bool();
          break;
        case 2:
          message.receive_enabled = reader.bool();
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
      send_enabled: isSet(object.send_enabled) ? Boolean(object.send_enabled) : false,
      receive_enabled: isSet(object.receive_enabled) ? Boolean(object.receive_enabled) : false
    };
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    message.send_enabled !== undefined && (obj.send_enabled = message.send_enabled);
    message.receive_enabled !== undefined && (obj.receive_enabled = message.receive_enabled);
    return obj;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.send_enabled = object.send_enabled ?? false;
    message.receive_enabled = object.receive_enabled ?? false;
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.send_enabled !== undefined && object.send_enabled !== null) {
      message.send_enabled = object.send_enabled;
    }
    if (object.receive_enabled !== undefined && object.receive_enabled !== null) {
      message.receive_enabled = object.receive_enabled;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.send_enabled = message.send_enabled;
    obj.receive_enabled = message.receive_enabled;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "cosmos-sdk/Params",
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
      typeUrl: "/ibc.applications.transfer.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Params.typeUrl, Params);
GlobalDecoderRegistry.registerAminoProtoMapping(Params.aminoType, Params.typeUrl);
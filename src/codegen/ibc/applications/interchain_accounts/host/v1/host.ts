//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../../../binary";
import { isSet } from "../../../../../helpers";
export const protobufPackage = "ibc.applications.interchain_accounts.host.v1";
/**
 * Params defines the set of on-chain interchain accounts parameters.
 * The following parameters may be used to disable the host submodule.
 */
export interface Params {
  /** host_enabled enables or disables the host submodule. */
  host_enabled: boolean;
  /** allow_messages defines a list of sdk message typeURLs allowed to be executed on a host chain. */
  allow_messages: string[];
}
export interface ParamsProtoMsg {
  type_url: "/ibc.applications.interchain_accounts.host.v1.Params";
  value: Uint8Array;
}
/**
 * Params defines the set of on-chain interchain accounts parameters.
 * The following parameters may be used to disable the host submodule.
 */
export interface ParamsAmino {
  /** host_enabled enables or disables the host submodule. */
  host_enabled?: boolean;
  /** allow_messages defines a list of sdk message typeURLs allowed to be executed on a host chain. */
  allow_messages?: string[];
}
export interface ParamsAminoMsg {
  type: "cosmos-sdk/Params";
  value: ParamsAmino;
}
/**
 * Params defines the set of on-chain interchain accounts parameters.
 * The following parameters may be used to disable the host submodule.
 */
export interface ParamsSDKType {
  host_enabled: boolean;
  allow_messages: string[];
}
function createBaseParams(): Params {
  return {
    host_enabled: false,
    allow_messages: []
  };
}
export const Params = {
  typeUrl: "/ibc.applications.interchain_accounts.host.v1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.host_enabled === true) {
      writer.uint32(8).bool(message.host_enabled);
    }
    for (const v of message.allow_messages) {
      writer.uint32(18).string(v!);
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
          message.host_enabled = reader.bool();
          break;
        case 2:
          message.allow_messages.push(reader.string());
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
      host_enabled: isSet(object.host_enabled) ? Boolean(object.host_enabled) : false,
      allow_messages: Array.isArray(object?.allow_messages) ? object.allow_messages.map((e: any) => String(e)) : []
    };
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    message.host_enabled !== undefined && (obj.host_enabled = message.host_enabled);
    if (message.allow_messages) {
      obj.allow_messages = message.allow_messages.map(e => e);
    } else {
      obj.allow_messages = [];
    }
    return obj;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.host_enabled = object.host_enabled ?? false;
    message.allow_messages = object.allow_messages?.map(e => e) || [];
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.host_enabled !== undefined && object.host_enabled !== null) {
      message.host_enabled = object.host_enabled;
    }
    message.allow_messages = object.allow_messages?.map(e => e) || [];
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.host_enabled = message.host_enabled;
    if (message.allow_messages) {
      obj.allow_messages = message.allow_messages.map(e => e);
    } else {
      obj.allow_messages = [];
    }
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
      typeUrl: "/ibc.applications.interchain_accounts.host.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};
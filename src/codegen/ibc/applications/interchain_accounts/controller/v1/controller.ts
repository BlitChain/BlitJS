//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../../../binary";
import { isSet } from "../../../../../helpers";
export const protobufPackage = "ibc.applications.interchain_accounts.controller.v1";
/**
 * Params defines the set of on-chain interchain accounts parameters.
 * The following parameters may be used to disable the controller submodule.
 */
export interface Params {
  /** controller_enabled enables or disables the controller submodule. */
  controller_enabled: boolean;
}
export interface ParamsProtoMsg {
  type_url: "/ibc.applications.interchain_accounts.controller.v1.Params";
  value: Uint8Array;
}
/**
 * Params defines the set of on-chain interchain accounts parameters.
 * The following parameters may be used to disable the controller submodule.
 */
export interface ParamsAmino {
  /** controller_enabled enables or disables the controller submodule. */
  controller_enabled: boolean;
}
export interface ParamsAminoMsg {
  type: "cosmos-sdk/Params";
  value: ParamsAmino;
}
/**
 * Params defines the set of on-chain interchain accounts parameters.
 * The following parameters may be used to disable the controller submodule.
 */
export interface ParamsSDKType {
  controller_enabled: boolean;
}
function createBaseParams(): Params {
  return {
    controller_enabled: false
  };
}
export const Params = {
  typeUrl: "/ibc.applications.interchain_accounts.controller.v1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.controller_enabled === true) {
      writer.uint32(8).bool(message.controller_enabled);
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
          message.controller_enabled = reader.bool();
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
      controller_enabled: isSet(object.controller_enabled) ? Boolean(object.controller_enabled) : false
    };
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    message.controller_enabled !== undefined && (obj.controller_enabled = message.controller_enabled);
    return obj;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.controller_enabled = object.controller_enabled ?? false;
    return message;
  },
  fromSDK(object: ParamsSDKType): Params {
    return {
      controller_enabled: object?.controller_enabled
    };
  },
  toSDK(message: Params): ParamsSDKType {
    const obj: any = {};
    obj.controller_enabled = message.controller_enabled;
    return obj;
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      controller_enabled: object.controller_enabled
    };
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.controller_enabled = message.controller_enabled;
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
      typeUrl: "/ibc.applications.interchain_accounts.controller.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};
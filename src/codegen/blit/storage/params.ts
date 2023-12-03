//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
export const protobufPackage = "blit.storage";
/** Params defines the parameters for the module. */
export interface Params {
  gasPerChar: string;
}
export interface ParamsProtoMsg {
  type_url: "/blit.storage.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the module. */
export interface ParamsAmino {
  gasPerChar: string;
}
export interface ParamsAminoMsg {
  type: "blit/x/storage/Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  gasPerChar: string;
}
function createBaseParams(): Params {
  return {
    gasPerChar: ""
  };
}
export const Params = {
  typeUrl: "/blit.storage.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.gasPerChar !== "") {
      writer.uint32(10).string(message.gasPerChar);
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
          message.gasPerChar = reader.string();
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
      gasPerChar: isSet(object.gasPerChar) ? String(object.gasPerChar) : ""
    };
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    message.gasPerChar !== undefined && (obj.gasPerChar = message.gasPerChar);
    return obj;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.gasPerChar = object.gasPerChar ?? "";
    return message;
  },
  fromSDK(object: ParamsSDKType): Params {
    return {
      gasPerChar: object?.gasPerChar
    };
  },
  toSDK(message: Params): ParamsSDKType {
    const obj: any = {};
    obj.gasPerChar = message.gasPerChar;
    return obj;
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      gasPerChar: object.gasPerChar
    };
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.gasPerChar = message.gasPerChar;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "blit/x/storage/Params",
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
      typeUrl: "/blit.storage.Params",
      value: Params.encode(message).finish()
    };
  }
};
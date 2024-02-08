//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
export const protobufPackage = "blit.script";
export interface Script {
  address: string;
  code: string;
  version: bigint;
}
export interface ScriptProtoMsg {
  type_url: "/blit.script.Script";
  value: Uint8Array;
}
export interface ScriptAmino {
  address?: string;
  code?: string;
  version?: string;
}
export interface ScriptAminoMsg {
  type: "/blit.script.Script";
  value: ScriptAmino;
}
export interface ScriptSDKType {
  address: string;
  code: string;
  version: bigint;
}
function createBaseScript(): Script {
  return {
    address: "",
    code: "",
    version: BigInt(0)
  };
}
export const Script = {
  typeUrl: "/blit.script.Script",
  encode(message: Script, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.code !== "") {
      writer.uint32(18).string(message.code);
    }
    if (message.version !== BigInt(0)) {
      writer.uint32(24).int64(message.version);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Script {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseScript();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.code = reader.string();
          break;
        case 3:
          message.version = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Script {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      code: isSet(object.code) ? String(object.code) : "",
      version: isSet(object.version) ? BigInt(object.version.toString()) : BigInt(0)
    };
  },
  toJSON(message: Script): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.code !== undefined && (obj.code = message.code);
    message.version !== undefined && (obj.version = (message.version || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<Script>): Script {
    const message = createBaseScript();
    message.address = object.address ?? "";
    message.code = object.code ?? "";
    message.version = object.version !== undefined && object.version !== null ? BigInt(object.version.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ScriptAmino): Script {
    const message = createBaseScript();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.code !== undefined && object.code !== null) {
      message.code = object.code;
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = BigInt(object.version);
    }
    return message;
  },
  toAmino(message: Script): ScriptAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.code = message.code;
    obj.version = message.version ? message.version.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ScriptAminoMsg): Script {
    return Script.fromAmino(object.value);
  },
  fromProtoMsg(message: ScriptProtoMsg): Script {
    return Script.decode(message.value);
  },
  toProto(message: Script): Uint8Array {
    return Script.encode(message).finish();
  },
  toProtoMsg(message: Script): ScriptProtoMsg {
    return {
      typeUrl: "/blit.script.Script",
      value: Script.encode(message).finish()
    };
  }
};
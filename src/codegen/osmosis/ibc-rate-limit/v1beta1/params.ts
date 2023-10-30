//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** Params defines the parameters for the ibc-rate-limit module. */
export interface Params {
  contract_address: string;
}
export interface ParamsProtoMsg {
  type_url: "/osmosis.ibcratelimit.v1beta1.Params";
  value: Uint8Array;
}
export interface ParamsProtoMsg {
  type_url: "/osmosis.ibcratelimit.v1beta1.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the ibc-rate-limit module. */
export interface ParamsAmino {
  contract_address: string;
}
export interface ParamsAminoMsg {
  type: "osmosis/ibcratelimit/params";
  value: ParamsAmino;
}
/** Params defines the parameters for the ibc-rate-limit module. */
export interface ParamsSDKType {
  contract_address: string;
}
function createBaseParams(): Params {
  return {
    contract_address: ""
  };
}
export const Params = {
  typeUrl: "/osmosis.ibcratelimit.v1beta1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contract_address !== "") {
      writer.uint32(10).string(message.contract_address);
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
          message.contract_address = reader.string();
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
      contract_address: isSet(object.contract_address) ? String(object.contract_address) : ""
    };
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    message.contract_address !== undefined && (obj.contract_address = message.contract_address);
    return obj;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.contract_address = object.contract_address ?? "";
    return message;
  },
  fromSDK(object: ParamsSDKType): Params {
    return {
      contract_address: object?.contract_address
    };
  },
  toSDK(message: Params): ParamsSDKType {
    const obj: any = {};
    obj.contract_address = message.contract_address;
    return obj;
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      contract_address: object.contract_address
    };
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.contract_address = message.contract_address;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "osmosis/ibcratelimit/params",
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
      typeUrl: "/osmosis.ibcratelimit.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};
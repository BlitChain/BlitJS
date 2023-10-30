//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
/** Params holds parameters for the incentives module */
export interface Params {
  /**
   * distr_epoch_identifier is what epoch type distribution will be triggered by
   * (day, week, etc.)
   */
  distr_epoch_identifier: string;
}
export interface ParamsProtoMsg {
  type_url: "/osmosis.incentives.Params";
  value: Uint8Array;
}
export interface ParamsProtoMsg {
  type_url: "/osmosis.incentives.Params";
  value: Uint8Array;
}
/** Params holds parameters for the incentives module */
export interface ParamsAmino {
  /**
   * distr_epoch_identifier is what epoch type distribution will be triggered by
   * (day, week, etc.)
   */
  distr_epoch_identifier: string;
}
export interface ParamsAminoMsg {
  type: "osmosis/incentives/params";
  value: ParamsAmino;
}
/** Params holds parameters for the incentives module */
export interface ParamsSDKType {
  distr_epoch_identifier: string;
}
function createBaseParams(): Params {
  return {
    distr_epoch_identifier: ""
  };
}
export const Params = {
  typeUrl: "/osmosis.incentives.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.distr_epoch_identifier !== "") {
      writer.uint32(10).string(message.distr_epoch_identifier);
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
          message.distr_epoch_identifier = reader.string();
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
      distr_epoch_identifier: isSet(object.distr_epoch_identifier) ? String(object.distr_epoch_identifier) : ""
    };
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    message.distr_epoch_identifier !== undefined && (obj.distr_epoch_identifier = message.distr_epoch_identifier);
    return obj;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.distr_epoch_identifier = object.distr_epoch_identifier ?? "";
    return message;
  },
  fromSDK(object: ParamsSDKType): Params {
    return {
      distr_epoch_identifier: object?.distr_epoch_identifier
    };
  },
  toSDK(message: Params): ParamsSDKType {
    const obj: any = {};
    obj.distr_epoch_identifier = message.distr_epoch_identifier;
    return obj;
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      distr_epoch_identifier: object.distr_epoch_identifier
    };
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.distr_epoch_identifier = message.distr_epoch_identifier;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "osmosis/incentives/params",
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
      typeUrl: "/osmosis.incentives.Params",
      value: Params.encode(message).finish()
    };
  }
};
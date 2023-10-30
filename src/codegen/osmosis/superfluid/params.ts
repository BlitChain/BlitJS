//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet } from "../../helpers";
/** Params holds parameters for the superfluid module */
export interface Params {
  /**
   * minimum_risk_factor is to be cut on OSMO equivalent value of lp tokens for
   * superfluid staking, default: 5%. The minimum risk factor works
   * to counter-balance the staked amount on chain's exposure to various asset
   * volatilities, and have base staking be 'resistant' to volatility.
   */
  minimum_risk_factor: string;
}
export interface ParamsProtoMsg {
  type_url: "/osmosis.superfluid.Params";
  value: Uint8Array;
}
export interface ParamsProtoMsg {
  type_url: "/osmosis.superfluid.Params";
  value: Uint8Array;
}
/** Params holds parameters for the superfluid module */
export interface ParamsAmino {
  /**
   * minimum_risk_factor is to be cut on OSMO equivalent value of lp tokens for
   * superfluid staking, default: 5%. The minimum risk factor works
   * to counter-balance the staked amount on chain's exposure to various asset
   * volatilities, and have base staking be 'resistant' to volatility.
   */
  minimum_risk_factor: string;
}
export interface ParamsAminoMsg {
  type: "osmosis/params";
  value: ParamsAmino;
}
/** Params holds parameters for the superfluid module */
export interface ParamsSDKType {
  minimum_risk_factor: string;
}
function createBaseParams(): Params {
  return {
    minimum_risk_factor: ""
  };
}
export const Params = {
  typeUrl: "/osmosis.superfluid.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.minimum_risk_factor !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.minimum_risk_factor, 18).atomics);
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
          message.minimum_risk_factor = Decimal.fromAtomics(reader.string(), 18).toString();
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
      minimum_risk_factor: isSet(object.minimum_risk_factor) ? String(object.minimum_risk_factor) : ""
    };
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    message.minimum_risk_factor !== undefined && (obj.minimum_risk_factor = message.minimum_risk_factor);
    return obj;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.minimum_risk_factor = object.minimum_risk_factor ?? "";
    return message;
  },
  fromSDK(object: ParamsSDKType): Params {
    return {
      minimum_risk_factor: object?.minimum_risk_factor
    };
  },
  toSDK(message: Params): ParamsSDKType {
    const obj: any = {};
    obj.minimum_risk_factor = message.minimum_risk_factor;
    return obj;
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      minimum_risk_factor: object.minimum_risk_factor
    };
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.minimum_risk_factor = message.minimum_risk_factor;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "osmosis/params",
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
      typeUrl: "/osmosis.superfluid.Params",
      value: Params.encode(message).finish()
    };
  }
};
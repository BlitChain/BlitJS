//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet } from "../../../helpers";
export const protobufPackage = "cosmos.mint.v1beta1";
/** Minter represents the minting state. */
export interface Minter {
  /** current annual inflation rate */
  inflation: string;
  /** current annual expected provisions */
  annual_provisions: string;
}
export interface MinterProtoMsg {
  type_url: "/cosmos.mint.v1beta1.Minter";
  value: Uint8Array;
}
/** Minter represents the minting state. */
export interface MinterAmino {
  /** current annual inflation rate */
  inflation: string;
  /** current annual expected provisions */
  annual_provisions: string;
}
export interface MinterAminoMsg {
  type: "cosmos-sdk/Minter";
  value: MinterAmino;
}
/** Minter represents the minting state. */
export interface MinterSDKType {
  inflation: string;
  annual_provisions: string;
}
/** Params defines the parameters for the x/mint module. */
export interface Params {
  /** type of coin to mint */
  mint_denom: string;
  /** maximum annual change in inflation rate */
  inflation_rate_change: string;
  /** maximum inflation rate */
  inflation_max: string;
  /** minimum inflation rate */
  inflation_min: string;
  /** goal of percent bonded atoms */
  goal_bonded: string;
  /** expected blocks per year */
  blocks_per_year: bigint;
}
export interface ParamsProtoMsg {
  type_url: "/cosmos.mint.v1beta1.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the x/mint module. */
export interface ParamsAmino {
  /** type of coin to mint */
  mint_denom: string;
  /** maximum annual change in inflation rate */
  inflation_rate_change: string;
  /** maximum inflation rate */
  inflation_max: string;
  /** minimum inflation rate */
  inflation_min: string;
  /** goal of percent bonded atoms */
  goal_bonded: string;
  /** expected blocks per year */
  blocks_per_year: string;
}
export interface ParamsAminoMsg {
  type: "cosmos-sdk/x/mint/Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the x/mint module. */
export interface ParamsSDKType {
  mint_denom: string;
  inflation_rate_change: string;
  inflation_max: string;
  inflation_min: string;
  goal_bonded: string;
  blocks_per_year: bigint;
}
function createBaseMinter(): Minter {
  return {
    inflation: "",
    annual_provisions: ""
  };
}
export const Minter = {
  typeUrl: "/cosmos.mint.v1beta1.Minter",
  encode(message: Minter, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.inflation !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.inflation, 18).atomics);
    }
    if (message.annual_provisions !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.annual_provisions, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Minter {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMinter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inflation = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.annual_provisions = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Minter {
    return {
      inflation: isSet(object.inflation) ? String(object.inflation) : "",
      annual_provisions: isSet(object.annual_provisions) ? String(object.annual_provisions) : ""
    };
  },
  toJSON(message: Minter): unknown {
    const obj: any = {};
    message.inflation !== undefined && (obj.inflation = message.inflation);
    message.annual_provisions !== undefined && (obj.annual_provisions = message.annual_provisions);
    return obj;
  },
  fromPartial(object: Partial<Minter>): Minter {
    const message = createBaseMinter();
    message.inflation = object.inflation ?? "";
    message.annual_provisions = object.annual_provisions ?? "";
    return message;
  },
  fromAmino(object: MinterAmino): Minter {
    return {
      inflation: object.inflation,
      annual_provisions: object.annual_provisions
    };
  },
  toAmino(message: Minter): MinterAmino {
    const obj: any = {};
    obj.inflation = message.inflation;
    obj.annual_provisions = message.annual_provisions;
    return obj;
  },
  fromAminoMsg(object: MinterAminoMsg): Minter {
    return Minter.fromAmino(object.value);
  },
  toAminoMsg(message: Minter): MinterAminoMsg {
    return {
      type: "cosmos-sdk/Minter",
      value: Minter.toAmino(message)
    };
  },
  fromProtoMsg(message: MinterProtoMsg): Minter {
    return Minter.decode(message.value);
  },
  toProto(message: Minter): Uint8Array {
    return Minter.encode(message).finish();
  },
  toProtoMsg(message: Minter): MinterProtoMsg {
    return {
      typeUrl: "/cosmos.mint.v1beta1.Minter",
      value: Minter.encode(message).finish()
    };
  }
};
function createBaseParams(): Params {
  return {
    mint_denom: "",
    inflation_rate_change: "",
    inflation_max: "",
    inflation_min: "",
    goal_bonded: "",
    blocks_per_year: BigInt(0)
  };
}
export const Params = {
  typeUrl: "/cosmos.mint.v1beta1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.mint_denom !== "") {
      writer.uint32(10).string(message.mint_denom);
    }
    if (message.inflation_rate_change !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.inflation_rate_change, 18).atomics);
    }
    if (message.inflation_max !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.inflation_max, 18).atomics);
    }
    if (message.inflation_min !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.inflation_min, 18).atomics);
    }
    if (message.goal_bonded !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.goal_bonded, 18).atomics);
    }
    if (message.blocks_per_year !== BigInt(0)) {
      writer.uint32(48).uint64(message.blocks_per_year);
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
          message.mint_denom = reader.string();
          break;
        case 2:
          message.inflation_rate_change = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.inflation_max = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.inflation_min = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.goal_bonded = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.blocks_per_year = reader.uint64();
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
      mint_denom: isSet(object.mint_denom) ? String(object.mint_denom) : "",
      inflation_rate_change: isSet(object.inflation_rate_change) ? String(object.inflation_rate_change) : "",
      inflation_max: isSet(object.inflation_max) ? String(object.inflation_max) : "",
      inflation_min: isSet(object.inflation_min) ? String(object.inflation_min) : "",
      goal_bonded: isSet(object.goal_bonded) ? String(object.goal_bonded) : "",
      blocks_per_year: isSet(object.blocks_per_year) ? BigInt(object.blocks_per_year.toString()) : BigInt(0)
    };
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    message.mint_denom !== undefined && (obj.mint_denom = message.mint_denom);
    message.inflation_rate_change !== undefined && (obj.inflation_rate_change = message.inflation_rate_change);
    message.inflation_max !== undefined && (obj.inflation_max = message.inflation_max);
    message.inflation_min !== undefined && (obj.inflation_min = message.inflation_min);
    message.goal_bonded !== undefined && (obj.goal_bonded = message.goal_bonded);
    message.blocks_per_year !== undefined && (obj.blocks_per_year = (message.blocks_per_year || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.mint_denom = object.mint_denom ?? "";
    message.inflation_rate_change = object.inflation_rate_change ?? "";
    message.inflation_max = object.inflation_max ?? "";
    message.inflation_min = object.inflation_min ?? "";
    message.goal_bonded = object.goal_bonded ?? "";
    message.blocks_per_year = object.blocks_per_year !== undefined && object.blocks_per_year !== null ? BigInt(object.blocks_per_year.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      mint_denom: object.mint_denom,
      inflation_rate_change: object.inflation_rate_change,
      inflation_max: object.inflation_max,
      inflation_min: object.inflation_min,
      goal_bonded: object.goal_bonded,
      blocks_per_year: BigInt(object.blocks_per_year)
    };
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.mint_denom = message.mint_denom;
    obj.inflation_rate_change = message.inflation_rate_change;
    obj.inflation_max = message.inflation_max;
    obj.inflation_min = message.inflation_min;
    obj.goal_bonded = message.goal_bonded;
    obj.blocks_per_year = message.blocks_per_year ? message.blocks_per_year.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "cosmos-sdk/x/mint/Params",
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
      typeUrl: "/cosmos.mint.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};
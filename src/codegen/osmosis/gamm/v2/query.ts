//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/**
 * QuerySpotPriceRequest defines the gRPC request structure for a SpotPrice
 * query.
 */
export interface QuerySpotPriceRequest {
  pool_id: bigint;
  base_asset_denom: string;
  quote_asset_denom: string;
}
export interface QuerySpotPriceRequestProtoMsg {
  type_url: "/osmosis.gamm.v2.QuerySpotPriceRequest";
  value: Uint8Array;
}
export interface QuerySpotPriceRequestProtoMsg {
  type_url: "/osmosis.gamm.v2.QuerySpotPriceRequest";
  value: Uint8Array;
}
/**
 * QuerySpotPriceRequest defines the gRPC request structure for a SpotPrice
 * query.
 */
export interface QuerySpotPriceRequestAmino {
  pool_id: string;
  base_asset_denom: string;
  quote_asset_denom: string;
}
export interface QuerySpotPriceRequestAminoMsg {
  type: "osmosis/gamm/v2/query-spot-price-request";
  value: QuerySpotPriceRequestAmino;
}
/**
 * QuerySpotPriceRequest defines the gRPC request structure for a SpotPrice
 * query.
 */
export interface QuerySpotPriceRequestSDKType {
  pool_id: bigint;
  base_asset_denom: string;
  quote_asset_denom: string;
}
/**
 * QuerySpotPriceResponse defines the gRPC response structure for a SpotPrice
 * query.
 */
export interface QuerySpotPriceResponse {
  /** String of the Dec. Ex) 10.203uatom */
  spot_price: string;
}
export interface QuerySpotPriceResponseProtoMsg {
  type_url: "/osmosis.gamm.v2.QuerySpotPriceResponse";
  value: Uint8Array;
}
export interface QuerySpotPriceResponseProtoMsg {
  type_url: "/osmosis.gamm.v2.QuerySpotPriceResponse";
  value: Uint8Array;
}
/**
 * QuerySpotPriceResponse defines the gRPC response structure for a SpotPrice
 * query.
 */
export interface QuerySpotPriceResponseAmino {
  /** String of the Dec. Ex) 10.203uatom */
  spot_price: string;
}
export interface QuerySpotPriceResponseAminoMsg {
  type: "osmosis/gamm/v2/query-spot-price-response";
  value: QuerySpotPriceResponseAmino;
}
/**
 * QuerySpotPriceResponse defines the gRPC response structure for a SpotPrice
 * query.
 */
export interface QuerySpotPriceResponseSDKType {
  spot_price: string;
}
function createBaseQuerySpotPriceRequest(): QuerySpotPriceRequest {
  return {
    pool_id: BigInt(0),
    base_asset_denom: "",
    quote_asset_denom: ""
  };
}
export const QuerySpotPriceRequest = {
  typeUrl: "/osmosis.gamm.v2.QuerySpotPriceRequest",
  encode(message: QuerySpotPriceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pool_id !== BigInt(0)) {
      writer.uint32(8).uint64(message.pool_id);
    }
    if (message.base_asset_denom !== "") {
      writer.uint32(18).string(message.base_asset_denom);
    }
    if (message.quote_asset_denom !== "") {
      writer.uint32(26).string(message.quote_asset_denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySpotPriceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySpotPriceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool_id = reader.uint64();
          break;
        case 2:
          message.base_asset_denom = reader.string();
          break;
        case 3:
          message.quote_asset_denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySpotPriceRequest {
    return {
      pool_id: isSet(object.pool_id) ? BigInt(object.pool_id.toString()) : BigInt(0),
      base_asset_denom: isSet(object.base_asset_denom) ? String(object.base_asset_denom) : "",
      quote_asset_denom: isSet(object.quote_asset_denom) ? String(object.quote_asset_denom) : ""
    };
  },
  toJSON(message: QuerySpotPriceRequest): unknown {
    const obj: any = {};
    message.pool_id !== undefined && (obj.pool_id = (message.pool_id || BigInt(0)).toString());
    message.base_asset_denom !== undefined && (obj.base_asset_denom = message.base_asset_denom);
    message.quote_asset_denom !== undefined && (obj.quote_asset_denom = message.quote_asset_denom);
    return obj;
  },
  fromPartial(object: Partial<QuerySpotPriceRequest>): QuerySpotPriceRequest {
    const message = createBaseQuerySpotPriceRequest();
    message.pool_id = object.pool_id !== undefined && object.pool_id !== null ? BigInt(object.pool_id.toString()) : BigInt(0);
    message.base_asset_denom = object.base_asset_denom ?? "";
    message.quote_asset_denom = object.quote_asset_denom ?? "";
    return message;
  },
  fromSDK(object: QuerySpotPriceRequestSDKType): QuerySpotPriceRequest {
    return {
      pool_id: object?.pool_id,
      base_asset_denom: object?.base_asset_denom,
      quote_asset_denom: object?.quote_asset_denom
    };
  },
  toSDK(message: QuerySpotPriceRequest): QuerySpotPriceRequestSDKType {
    const obj: any = {};
    obj.pool_id = message.pool_id;
    obj.base_asset_denom = message.base_asset_denom;
    obj.quote_asset_denom = message.quote_asset_denom;
    return obj;
  },
  fromAmino(object: QuerySpotPriceRequestAmino): QuerySpotPriceRequest {
    return {
      pool_id: BigInt(object.pool_id),
      base_asset_denom: object.base_asset_denom,
      quote_asset_denom: object.quote_asset_denom
    };
  },
  toAmino(message: QuerySpotPriceRequest): QuerySpotPriceRequestAmino {
    const obj: any = {};
    obj.pool_id = message.pool_id ? message.pool_id.toString() : undefined;
    obj.base_asset_denom = message.base_asset_denom;
    obj.quote_asset_denom = message.quote_asset_denom;
    return obj;
  },
  fromAminoMsg(object: QuerySpotPriceRequestAminoMsg): QuerySpotPriceRequest {
    return QuerySpotPriceRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QuerySpotPriceRequest): QuerySpotPriceRequestAminoMsg {
    return {
      type: "osmosis/gamm/v2/query-spot-price-request",
      value: QuerySpotPriceRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QuerySpotPriceRequestProtoMsg): QuerySpotPriceRequest {
    return QuerySpotPriceRequest.decode(message.value);
  },
  toProto(message: QuerySpotPriceRequest): Uint8Array {
    return QuerySpotPriceRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySpotPriceRequest): QuerySpotPriceRequestProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v2.QuerySpotPriceRequest",
      value: QuerySpotPriceRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySpotPriceResponse(): QuerySpotPriceResponse {
  return {
    spot_price: ""
  };
}
export const QuerySpotPriceResponse = {
  typeUrl: "/osmosis.gamm.v2.QuerySpotPriceResponse",
  encode(message: QuerySpotPriceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.spot_price !== "") {
      writer.uint32(10).string(message.spot_price);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySpotPriceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySpotPriceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.spot_price = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySpotPriceResponse {
    return {
      spot_price: isSet(object.spot_price) ? String(object.spot_price) : ""
    };
  },
  toJSON(message: QuerySpotPriceResponse): unknown {
    const obj: any = {};
    message.spot_price !== undefined && (obj.spot_price = message.spot_price);
    return obj;
  },
  fromPartial(object: Partial<QuerySpotPriceResponse>): QuerySpotPriceResponse {
    const message = createBaseQuerySpotPriceResponse();
    message.spot_price = object.spot_price ?? "";
    return message;
  },
  fromSDK(object: QuerySpotPriceResponseSDKType): QuerySpotPriceResponse {
    return {
      spot_price: object?.spot_price
    };
  },
  toSDK(message: QuerySpotPriceResponse): QuerySpotPriceResponseSDKType {
    const obj: any = {};
    obj.spot_price = message.spot_price;
    return obj;
  },
  fromAmino(object: QuerySpotPriceResponseAmino): QuerySpotPriceResponse {
    return {
      spot_price: object.spot_price
    };
  },
  toAmino(message: QuerySpotPriceResponse): QuerySpotPriceResponseAmino {
    const obj: any = {};
    obj.spot_price = message.spot_price;
    return obj;
  },
  fromAminoMsg(object: QuerySpotPriceResponseAminoMsg): QuerySpotPriceResponse {
    return QuerySpotPriceResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QuerySpotPriceResponse): QuerySpotPriceResponseAminoMsg {
    return {
      type: "osmosis/gamm/v2/query-spot-price-response",
      value: QuerySpotPriceResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QuerySpotPriceResponseProtoMsg): QuerySpotPriceResponse {
    return QuerySpotPriceResponse.decode(message.value);
  },
  toProto(message: QuerySpotPriceResponse): Uint8Array {
    return QuerySpotPriceResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySpotPriceResponse): QuerySpotPriceResponseProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v2.QuerySpotPriceResponse",
      value: QuerySpotPriceResponse.encode(message).finish()
    };
  }
};
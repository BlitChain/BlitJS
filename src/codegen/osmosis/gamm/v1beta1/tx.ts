//@ts-nocheck
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/**
 * ===================== MsgJoinPool
 * This is really MsgJoinPoolNoSwap
 */
export interface MsgJoinPool {
  sender: string;
  pool_id: bigint;
  share_out_amount: string;
  token_in_maxs: Coin[];
}
export interface MsgJoinPoolProtoMsg {
  type_url: "/osmosis.gamm.v1beta1.MsgJoinPool";
  value: Uint8Array;
}
export interface MsgJoinPoolProtoMsg {
  type_url: "/osmosis.gamm.v1beta1.MsgJoinPool";
  value: Uint8Array;
}
/**
 * ===================== MsgJoinPool
 * This is really MsgJoinPoolNoSwap
 */
export interface MsgJoinPoolAmino {
  sender: string;
  pool_id: string;
  share_out_amount: string;
  token_in_maxs: CoinAmino[];
}
export interface MsgJoinPoolAminoMsg {
  type: "osmosis/gamm/join-pool";
  value: MsgJoinPoolAmino;
}
/**
 * ===================== MsgJoinPool
 * This is really MsgJoinPoolNoSwap
 */
export interface MsgJoinPoolSDKType {
  sender: string;
  pool_id: bigint;
  share_out_amount: string;
  token_in_maxs: CoinSDKType[];
}
export interface MsgJoinPoolResponse {
  share_out_amount: string;
  token_in: Coin[];
}
export interface MsgJoinPoolResponseProtoMsg {
  type_url: "/osmosis.gamm.v1beta1.MsgJoinPoolResponse";
  value: Uint8Array;
}
export interface MsgJoinPoolResponseProtoMsg {
  type_url: "/osmosis.gamm.v1beta1.MsgJoinPoolResponse";
  value: Uint8Array;
}
export interface MsgJoinPoolResponseAmino {
  share_out_amount: string;
  token_in: CoinAmino[];
}
export interface MsgJoinPoolResponseAminoMsg {
  type: "osmosis/gamm/join-pool-response";
  value: MsgJoinPoolResponseAmino;
}
export interface MsgJoinPoolResponseSDKType {
  share_out_amount: string;
  token_in: CoinSDKType[];
}
/** ===================== MsgExitPool */
export interface MsgExitPool {
  sender: string;
  pool_id: bigint;
  share_in_amount: string;
  token_out_mins: Coin[];
}
export interface MsgExitPoolProtoMsg {
  type_url: "/osmosis.gamm.v1beta1.MsgExitPool";
  value: Uint8Array;
}
export interface MsgExitPoolProtoMsg {
  type_url: "/osmosis.gamm.v1beta1.MsgExitPool";
  value: Uint8Array;
}
/** ===================== MsgExitPool */
export interface MsgExitPoolAmino {
  sender: string;
  pool_id: string;
  share_in_amount: string;
  token_out_mins: CoinAmino[];
}
export interface MsgExitPoolAminoMsg {
  type: "osmosis/gamm/exit-pool";
  value: MsgExitPoolAmino;
}
/** ===================== MsgExitPool */
export interface MsgExitPoolSDKType {
  sender: string;
  pool_id: bigint;
  share_in_amount: string;
  token_out_mins: CoinSDKType[];
}
export interface MsgExitPoolResponse {
  token_out: Coin[];
}
export interface MsgExitPoolResponseProtoMsg {
  type_url: "/osmosis.gamm.v1beta1.MsgExitPoolResponse";
  value: Uint8Array;
}
export interface MsgExitPoolResponseProtoMsg {
  type_url: "/osmosis.gamm.v1beta1.MsgExitPoolResponse";
  value: Uint8Array;
}
export interface MsgExitPoolResponseAmino {
  token_out: CoinAmino[];
}
export interface MsgExitPoolResponseAminoMsg {
  type: "osmosis/gamm/exit-pool-response";
  value: MsgExitPoolResponseAmino;
}
export interface MsgExitPoolResponseSDKType {
  token_out: CoinSDKType[];
}
/** ===================== MsgSwapExactAmountIn */
export interface SwapAmountInRoute {
  pool_id: bigint;
  token_out_denom: string;
}
export interface SwapAmountInRouteProtoMsg {
  type_url: "/osmosis.gamm.v1beta1.SwapAmountInRoute";
  value: Uint8Array;
}
export interface SwapAmountInRouteProtoMsg {
  type_url: "/osmosis.gamm.v1beta1.SwapAmountInRoute";
  value: Uint8Array;
}
/** ===================== MsgSwapExactAmountIn */
export interface SwapAmountInRouteAmino {
  pool_id: string;
  token_out_denom: string;
}
export interface SwapAmountInRouteAminoMsg {
  type: "osmosis/gamm/swap-amount-in-route";
  value: SwapAmountInRouteAmino;
}
/** ===================== MsgSwapExactAmountIn */
export interface SwapAmountInRouteSDKType {
  pool_id: bigint;
  token_out_denom: string;
}
export interface MsgSwapExactAmountIn {
  sender: string;
  routes: SwapAmountInRoute[];
  token_in: Coin;
  token_out_min_amount: string;
}
export interface MsgSwapExactAmountInProtoMsg {
  type_url: "/osmosis.gamm.v1beta1.MsgSwapExactAmountIn";
  value: Uint8Array;
}
export interface MsgSwapExactAmountInProtoMsg {
  type_url: "/osmosis.gamm.v1beta1.MsgSwapExactAmountIn";
  value: Uint8Array;
}
export interface MsgSwapExactAmountInAmino {
  sender: string;
  routes: SwapAmountInRouteAmino[];
  token_in?: CoinAmino;
  token_out_min_amount: string;
}
export interface MsgSwapExactAmountInAminoMsg {
  type: "osmosis/gamm/swap-exact-amount-in";
  value: MsgSwapExactAmountInAmino;
}
export interface MsgSwapExactAmountInSDKType {
  sender: string;
  routes: SwapAmountInRouteSDKType[];
  token_in: CoinSDKType;
  token_out_min_amount: string;
}
export interface MsgSwapExactAmountInResponse {
  token_out_amount: string;
}
export interface MsgSwapExactAmountInResponseProtoMsg {
  type_url: "/osmosis.gamm.v1beta1.MsgSwapExactAmountInResponse";
  value: Uint8Array;
}
export interface MsgSwapExactAmountInResponseProtoMsg {
  type_url: "/osmosis.gamm.v1beta1.MsgSwapExactAmountInResponse";
  value: Uint8Array;
}
export interface MsgSwapExactAmountInResponseAmino {
  token_out_amount: string;
}
export interface MsgSwapExactAmountInResponseAminoMsg {
  type: "osmosis/gamm/swap-exact-amount-in-response";
  value: MsgSwapExactAmountInResponseAmino;
}
export interface MsgSwapExactAmountInResponseSDKType {
  token_out_amount: string;
}
/** ===================== MsgSwapExactAmountOut */
export interface SwapAmountOutRoute {
  pool_id: bigint;
  token_in_denom: string;
}
export interface SwapAmountOutRouteProtoMsg {
  type_url: "/osmosis.gamm.v1beta1.SwapAmountOutRoute";
  value: Uint8Array;
}
export interface SwapAmountOutRouteProtoMsg {
  type_url: "/osmosis.gamm.v1beta1.SwapAmountOutRoute";
  value: Uint8Array;
}
/** ===================== MsgSwapExactAmountOut */
export interface SwapAmountOutRouteAmino {
  pool_id: string;
  token_in_denom: string;
}
export interface SwapAmountOutRouteAminoMsg {
  type: "osmosis/gamm/swap-amount-out-route";
  value: SwapAmountOutRouteAmino;
}
/** ===================== MsgSwapExactAmountOut */
export interface SwapAmountOutRouteSDKType {
  pool_id: bigint;
  token_in_denom: string;
}
export interface MsgSwapExactAmountOut {
  sender: string;
  routes: SwapAmountOutRoute[];
  token_in_max_amount: string;
  token_out: Coin;
}
export interface MsgSwapExactAmountOutProtoMsg {
  type_url: "/osmosis.gamm.v1beta1.MsgSwapExactAmountOut";
  value: Uint8Array;
}
export interface MsgSwapExactAmountOutProtoMsg {
  type_url: "/osmosis.gamm.v1beta1.MsgSwapExactAmountOut";
  value: Uint8Array;
}
export interface MsgSwapExactAmountOutAmino {
  sender: string;
  routes: SwapAmountOutRouteAmino[];
  token_in_max_amount: string;
  token_out?: CoinAmino;
}
export interface MsgSwapExactAmountOutAminoMsg {
  type: "osmosis/gamm/swap-exact-amount-out";
  value: MsgSwapExactAmountOutAmino;
}
export interface MsgSwapExactAmountOutSDKType {
  sender: string;
  routes: SwapAmountOutRouteSDKType[];
  token_in_max_amount: string;
  token_out: CoinSDKType;
}
export interface MsgSwapExactAmountOutResponse {
  token_in_amount: string;
}
export interface MsgSwapExactAmountOutResponseProtoMsg {
  type_url: "/osmosis.gamm.v1beta1.MsgSwapExactAmountOutResponse";
  value: Uint8Array;
}
export interface MsgSwapExactAmountOutResponseProtoMsg {
  type_url: "/osmosis.gamm.v1beta1.MsgSwapExactAmountOutResponse";
  value: Uint8Array;
}
export interface MsgSwapExactAmountOutResponseAmino {
  token_in_amount: string;
}
export interface MsgSwapExactAmountOutResponseAminoMsg {
  type: "osmosis/gamm/swap-exact-amount-out-response";
  value: MsgSwapExactAmountOutResponseAmino;
}
export interface MsgSwapExactAmountOutResponseSDKType {
  token_in_amount: string;
}
/**
 * ===================== MsgJoinSwapExternAmountIn
 * TODO: Rename to MsgJoinSwapExactAmountIn
 */
export interface MsgJoinSwapExternAmountIn {
  sender: string;
  pool_id: bigint;
  token_in: Coin;
  share_out_min_amount: string;
}
export interface MsgJoinSwapExternAmountInProtoMsg {
  type_url: "/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountIn";
  value: Uint8Array;
}
export interface MsgJoinSwapExternAmountInProtoMsg {
  type_url: "/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountIn";
  value: Uint8Array;
}
/**
 * ===================== MsgJoinSwapExternAmountIn
 * TODO: Rename to MsgJoinSwapExactAmountIn
 */
export interface MsgJoinSwapExternAmountInAmino {
  sender: string;
  pool_id: string;
  token_in?: CoinAmino;
  share_out_min_amount: string;
}
export interface MsgJoinSwapExternAmountInAminoMsg {
  type: "osmosis/gamm/join-swap-extern-amount-in";
  value: MsgJoinSwapExternAmountInAmino;
}
/**
 * ===================== MsgJoinSwapExternAmountIn
 * TODO: Rename to MsgJoinSwapExactAmountIn
 */
export interface MsgJoinSwapExternAmountInSDKType {
  sender: string;
  pool_id: bigint;
  token_in: CoinSDKType;
  share_out_min_amount: string;
}
export interface MsgJoinSwapExternAmountInResponse {
  share_out_amount: string;
}
export interface MsgJoinSwapExternAmountInResponseProtoMsg {
  type_url: "/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountInResponse";
  value: Uint8Array;
}
export interface MsgJoinSwapExternAmountInResponseProtoMsg {
  type_url: "/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountInResponse";
  value: Uint8Array;
}
export interface MsgJoinSwapExternAmountInResponseAmino {
  share_out_amount: string;
}
export interface MsgJoinSwapExternAmountInResponseAminoMsg {
  type: "osmosis/gamm/join-swap-extern-amount-in-response";
  value: MsgJoinSwapExternAmountInResponseAmino;
}
export interface MsgJoinSwapExternAmountInResponseSDKType {
  share_out_amount: string;
}
/** ===================== MsgJoinSwapShareAmountOut */
export interface MsgJoinSwapShareAmountOut {
  sender: string;
  pool_id: bigint;
  token_in_denom: string;
  share_out_amount: string;
  token_in_max_amount: string;
}
export interface MsgJoinSwapShareAmountOutProtoMsg {
  type_url: "/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOut";
  value: Uint8Array;
}
export interface MsgJoinSwapShareAmountOutProtoMsg {
  type_url: "/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOut";
  value: Uint8Array;
}
/** ===================== MsgJoinSwapShareAmountOut */
export interface MsgJoinSwapShareAmountOutAmino {
  sender: string;
  pool_id: string;
  token_in_denom: string;
  share_out_amount: string;
  token_in_max_amount: string;
}
export interface MsgJoinSwapShareAmountOutAminoMsg {
  type: "osmosis/gamm/join-swap-share-amount-out";
  value: MsgJoinSwapShareAmountOutAmino;
}
/** ===================== MsgJoinSwapShareAmountOut */
export interface MsgJoinSwapShareAmountOutSDKType {
  sender: string;
  pool_id: bigint;
  token_in_denom: string;
  share_out_amount: string;
  token_in_max_amount: string;
}
export interface MsgJoinSwapShareAmountOutResponse {
  token_in_amount: string;
}
export interface MsgJoinSwapShareAmountOutResponseProtoMsg {
  type_url: "/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOutResponse";
  value: Uint8Array;
}
export interface MsgJoinSwapShareAmountOutResponseProtoMsg {
  type_url: "/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOutResponse";
  value: Uint8Array;
}
export interface MsgJoinSwapShareAmountOutResponseAmino {
  token_in_amount: string;
}
export interface MsgJoinSwapShareAmountOutResponseAminoMsg {
  type: "osmosis/gamm/join-swap-share-amount-out-response";
  value: MsgJoinSwapShareAmountOutResponseAmino;
}
export interface MsgJoinSwapShareAmountOutResponseSDKType {
  token_in_amount: string;
}
/** ===================== MsgExitSwapShareAmountIn */
export interface MsgExitSwapShareAmountIn {
  sender: string;
  pool_id: bigint;
  token_out_denom: string;
  share_in_amount: string;
  token_out_min_amount: string;
}
export interface MsgExitSwapShareAmountInProtoMsg {
  type_url: "/osmosis.gamm.v1beta1.MsgExitSwapShareAmountIn";
  value: Uint8Array;
}
export interface MsgExitSwapShareAmountInProtoMsg {
  type_url: "/osmosis.gamm.v1beta1.MsgExitSwapShareAmountIn";
  value: Uint8Array;
}
/** ===================== MsgExitSwapShareAmountIn */
export interface MsgExitSwapShareAmountInAmino {
  sender: string;
  pool_id: string;
  token_out_denom: string;
  share_in_amount: string;
  token_out_min_amount: string;
}
export interface MsgExitSwapShareAmountInAminoMsg {
  type: "osmosis/gamm/exit-swap-share-amount-in";
  value: MsgExitSwapShareAmountInAmino;
}
/** ===================== MsgExitSwapShareAmountIn */
export interface MsgExitSwapShareAmountInSDKType {
  sender: string;
  pool_id: bigint;
  token_out_denom: string;
  share_in_amount: string;
  token_out_min_amount: string;
}
export interface MsgExitSwapShareAmountInResponse {
  token_out_amount: string;
}
export interface MsgExitSwapShareAmountInResponseProtoMsg {
  type_url: "/osmosis.gamm.v1beta1.MsgExitSwapShareAmountInResponse";
  value: Uint8Array;
}
export interface MsgExitSwapShareAmountInResponseProtoMsg {
  type_url: "/osmosis.gamm.v1beta1.MsgExitSwapShareAmountInResponse";
  value: Uint8Array;
}
export interface MsgExitSwapShareAmountInResponseAmino {
  token_out_amount: string;
}
export interface MsgExitSwapShareAmountInResponseAminoMsg {
  type: "osmosis/gamm/exit-swap-share-amount-in-response";
  value: MsgExitSwapShareAmountInResponseAmino;
}
export interface MsgExitSwapShareAmountInResponseSDKType {
  token_out_amount: string;
}
/** ===================== MsgExitSwapExternAmountOut */
export interface MsgExitSwapExternAmountOut {
  sender: string;
  pool_id: bigint;
  token_out: Coin;
  share_in_max_amount: string;
}
export interface MsgExitSwapExternAmountOutProtoMsg {
  type_url: "/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOut";
  value: Uint8Array;
}
export interface MsgExitSwapExternAmountOutProtoMsg {
  type_url: "/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOut";
  value: Uint8Array;
}
/** ===================== MsgExitSwapExternAmountOut */
export interface MsgExitSwapExternAmountOutAmino {
  sender: string;
  pool_id: string;
  token_out?: CoinAmino;
  share_in_max_amount: string;
}
export interface MsgExitSwapExternAmountOutAminoMsg {
  type: "osmosis/gamm/exit-swap-extern-amount-out";
  value: MsgExitSwapExternAmountOutAmino;
}
/** ===================== MsgExitSwapExternAmountOut */
export interface MsgExitSwapExternAmountOutSDKType {
  sender: string;
  pool_id: bigint;
  token_out: CoinSDKType;
  share_in_max_amount: string;
}
export interface MsgExitSwapExternAmountOutResponse {
  share_in_amount: string;
}
export interface MsgExitSwapExternAmountOutResponseProtoMsg {
  type_url: "/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOutResponse";
  value: Uint8Array;
}
export interface MsgExitSwapExternAmountOutResponseProtoMsg {
  type_url: "/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOutResponse";
  value: Uint8Array;
}
export interface MsgExitSwapExternAmountOutResponseAmino {
  share_in_amount: string;
}
export interface MsgExitSwapExternAmountOutResponseAminoMsg {
  type: "osmosis/gamm/exit-swap-extern-amount-out-response";
  value: MsgExitSwapExternAmountOutResponseAmino;
}
export interface MsgExitSwapExternAmountOutResponseSDKType {
  share_in_amount: string;
}
function createBaseMsgJoinPool(): MsgJoinPool {
  return {
    sender: "",
    pool_id: BigInt(0),
    share_out_amount: "",
    token_in_maxs: []
  };
}
export const MsgJoinPool = {
  typeUrl: "/osmosis.gamm.v1beta1.MsgJoinPool",
  encode(message: MsgJoinPool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.pool_id !== BigInt(0)) {
      writer.uint32(16).uint64(message.pool_id);
    }
    if (message.share_out_amount !== "") {
      writer.uint32(26).string(message.share_out_amount);
    }
    for (const v of message.token_in_maxs) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgJoinPool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgJoinPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.pool_id = reader.uint64();
          break;
        case 3:
          message.share_out_amount = reader.string();
          break;
        case 4:
          message.token_in_maxs.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgJoinPool {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      pool_id: isSet(object.pool_id) ? BigInt(object.pool_id.toString()) : BigInt(0),
      share_out_amount: isSet(object.share_out_amount) ? String(object.share_out_amount) : "",
      token_in_maxs: Array.isArray(object?.token_in_maxs) ? object.token_in_maxs.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgJoinPool): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.pool_id !== undefined && (obj.pool_id = (message.pool_id || BigInt(0)).toString());
    message.share_out_amount !== undefined && (obj.share_out_amount = message.share_out_amount);
    if (message.token_in_maxs) {
      obj.token_in_maxs = message.token_in_maxs.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.token_in_maxs = [];
    }
    return obj;
  },
  fromPartial(object: Partial<MsgJoinPool>): MsgJoinPool {
    const message = createBaseMsgJoinPool();
    message.sender = object.sender ?? "";
    message.pool_id = object.pool_id !== undefined && object.pool_id !== null ? BigInt(object.pool_id.toString()) : BigInt(0);
    message.share_out_amount = object.share_out_amount ?? "";
    message.token_in_maxs = object.token_in_maxs?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: MsgJoinPoolSDKType): MsgJoinPool {
    return {
      sender: object?.sender,
      pool_id: object?.pool_id,
      share_out_amount: object?.share_out_amount,
      token_in_maxs: Array.isArray(object?.token_in_maxs) ? object.token_in_maxs.map((e: any) => Coin.fromSDK(e)) : []
    };
  },
  toSDK(message: MsgJoinPool): MsgJoinPoolSDKType {
    const obj: any = {};
    obj.sender = message.sender;
    obj.pool_id = message.pool_id;
    obj.share_out_amount = message.share_out_amount;
    if (message.token_in_maxs) {
      obj.token_in_maxs = message.token_in_maxs.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.token_in_maxs = [];
    }
    return obj;
  },
  fromAmino(object: MsgJoinPoolAmino): MsgJoinPool {
    return {
      sender: object.sender,
      pool_id: BigInt(object.pool_id),
      share_out_amount: object.share_out_amount,
      token_in_maxs: Array.isArray(object?.token_in_maxs) ? object.token_in_maxs.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: MsgJoinPool): MsgJoinPoolAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.pool_id = message.pool_id ? message.pool_id.toString() : undefined;
    obj.share_out_amount = message.share_out_amount;
    if (message.token_in_maxs) {
      obj.token_in_maxs = message.token_in_maxs.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.token_in_maxs = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgJoinPoolAminoMsg): MsgJoinPool {
    return MsgJoinPool.fromAmino(object.value);
  },
  toAminoMsg(message: MsgJoinPool): MsgJoinPoolAminoMsg {
    return {
      type: "osmosis/gamm/join-pool",
      value: MsgJoinPool.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgJoinPoolProtoMsg): MsgJoinPool {
    return MsgJoinPool.decode(message.value);
  },
  toProto(message: MsgJoinPool): Uint8Array {
    return MsgJoinPool.encode(message).finish();
  },
  toProtoMsg(message: MsgJoinPool): MsgJoinPoolProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.MsgJoinPool",
      value: MsgJoinPool.encode(message).finish()
    };
  }
};
function createBaseMsgJoinPoolResponse(): MsgJoinPoolResponse {
  return {
    share_out_amount: "",
    token_in: []
  };
}
export const MsgJoinPoolResponse = {
  typeUrl: "/osmosis.gamm.v1beta1.MsgJoinPoolResponse",
  encode(message: MsgJoinPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.share_out_amount !== "") {
      writer.uint32(10).string(message.share_out_amount);
    }
    for (const v of message.token_in) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgJoinPoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgJoinPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.share_out_amount = reader.string();
          break;
        case 2:
          message.token_in.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgJoinPoolResponse {
    return {
      share_out_amount: isSet(object.share_out_amount) ? String(object.share_out_amount) : "",
      token_in: Array.isArray(object?.token_in) ? object.token_in.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgJoinPoolResponse): unknown {
    const obj: any = {};
    message.share_out_amount !== undefined && (obj.share_out_amount = message.share_out_amount);
    if (message.token_in) {
      obj.token_in = message.token_in.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.token_in = [];
    }
    return obj;
  },
  fromPartial(object: Partial<MsgJoinPoolResponse>): MsgJoinPoolResponse {
    const message = createBaseMsgJoinPoolResponse();
    message.share_out_amount = object.share_out_amount ?? "";
    message.token_in = object.token_in?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: MsgJoinPoolResponseSDKType): MsgJoinPoolResponse {
    return {
      share_out_amount: object?.share_out_amount,
      token_in: Array.isArray(object?.token_in) ? object.token_in.map((e: any) => Coin.fromSDK(e)) : []
    };
  },
  toSDK(message: MsgJoinPoolResponse): MsgJoinPoolResponseSDKType {
    const obj: any = {};
    obj.share_out_amount = message.share_out_amount;
    if (message.token_in) {
      obj.token_in = message.token_in.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.token_in = [];
    }
    return obj;
  },
  fromAmino(object: MsgJoinPoolResponseAmino): MsgJoinPoolResponse {
    return {
      share_out_amount: object.share_out_amount,
      token_in: Array.isArray(object?.token_in) ? object.token_in.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: MsgJoinPoolResponse): MsgJoinPoolResponseAmino {
    const obj: any = {};
    obj.share_out_amount = message.share_out_amount;
    if (message.token_in) {
      obj.token_in = message.token_in.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.token_in = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgJoinPoolResponseAminoMsg): MsgJoinPoolResponse {
    return MsgJoinPoolResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgJoinPoolResponse): MsgJoinPoolResponseAminoMsg {
    return {
      type: "osmosis/gamm/join-pool-response",
      value: MsgJoinPoolResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgJoinPoolResponseProtoMsg): MsgJoinPoolResponse {
    return MsgJoinPoolResponse.decode(message.value);
  },
  toProto(message: MsgJoinPoolResponse): Uint8Array {
    return MsgJoinPoolResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgJoinPoolResponse): MsgJoinPoolResponseProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.MsgJoinPoolResponse",
      value: MsgJoinPoolResponse.encode(message).finish()
    };
  }
};
function createBaseMsgExitPool(): MsgExitPool {
  return {
    sender: "",
    pool_id: BigInt(0),
    share_in_amount: "",
    token_out_mins: []
  };
}
export const MsgExitPool = {
  typeUrl: "/osmosis.gamm.v1beta1.MsgExitPool",
  encode(message: MsgExitPool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.pool_id !== BigInt(0)) {
      writer.uint32(16).uint64(message.pool_id);
    }
    if (message.share_in_amount !== "") {
      writer.uint32(26).string(message.share_in_amount);
    }
    for (const v of message.token_out_mins) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgExitPool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExitPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.pool_id = reader.uint64();
          break;
        case 3:
          message.share_in_amount = reader.string();
          break;
        case 4:
          message.token_out_mins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgExitPool {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      pool_id: isSet(object.pool_id) ? BigInt(object.pool_id.toString()) : BigInt(0),
      share_in_amount: isSet(object.share_in_amount) ? String(object.share_in_amount) : "",
      token_out_mins: Array.isArray(object?.token_out_mins) ? object.token_out_mins.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgExitPool): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.pool_id !== undefined && (obj.pool_id = (message.pool_id || BigInt(0)).toString());
    message.share_in_amount !== undefined && (obj.share_in_amount = message.share_in_amount);
    if (message.token_out_mins) {
      obj.token_out_mins = message.token_out_mins.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.token_out_mins = [];
    }
    return obj;
  },
  fromPartial(object: Partial<MsgExitPool>): MsgExitPool {
    const message = createBaseMsgExitPool();
    message.sender = object.sender ?? "";
    message.pool_id = object.pool_id !== undefined && object.pool_id !== null ? BigInt(object.pool_id.toString()) : BigInt(0);
    message.share_in_amount = object.share_in_amount ?? "";
    message.token_out_mins = object.token_out_mins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: MsgExitPoolSDKType): MsgExitPool {
    return {
      sender: object?.sender,
      pool_id: object?.pool_id,
      share_in_amount: object?.share_in_amount,
      token_out_mins: Array.isArray(object?.token_out_mins) ? object.token_out_mins.map((e: any) => Coin.fromSDK(e)) : []
    };
  },
  toSDK(message: MsgExitPool): MsgExitPoolSDKType {
    const obj: any = {};
    obj.sender = message.sender;
    obj.pool_id = message.pool_id;
    obj.share_in_amount = message.share_in_amount;
    if (message.token_out_mins) {
      obj.token_out_mins = message.token_out_mins.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.token_out_mins = [];
    }
    return obj;
  },
  fromAmino(object: MsgExitPoolAmino): MsgExitPool {
    return {
      sender: object.sender,
      pool_id: BigInt(object.pool_id),
      share_in_amount: object.share_in_amount,
      token_out_mins: Array.isArray(object?.token_out_mins) ? object.token_out_mins.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: MsgExitPool): MsgExitPoolAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.pool_id = message.pool_id ? message.pool_id.toString() : undefined;
    obj.share_in_amount = message.share_in_amount;
    if (message.token_out_mins) {
      obj.token_out_mins = message.token_out_mins.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.token_out_mins = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgExitPoolAminoMsg): MsgExitPool {
    return MsgExitPool.fromAmino(object.value);
  },
  toAminoMsg(message: MsgExitPool): MsgExitPoolAminoMsg {
    return {
      type: "osmosis/gamm/exit-pool",
      value: MsgExitPool.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgExitPoolProtoMsg): MsgExitPool {
    return MsgExitPool.decode(message.value);
  },
  toProto(message: MsgExitPool): Uint8Array {
    return MsgExitPool.encode(message).finish();
  },
  toProtoMsg(message: MsgExitPool): MsgExitPoolProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.MsgExitPool",
      value: MsgExitPool.encode(message).finish()
    };
  }
};
function createBaseMsgExitPoolResponse(): MsgExitPoolResponse {
  return {
    token_out: []
  };
}
export const MsgExitPoolResponse = {
  typeUrl: "/osmosis.gamm.v1beta1.MsgExitPoolResponse",
  encode(message: MsgExitPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.token_out) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgExitPoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExitPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.token_out.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgExitPoolResponse {
    return {
      token_out: Array.isArray(object?.token_out) ? object.token_out.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgExitPoolResponse): unknown {
    const obj: any = {};
    if (message.token_out) {
      obj.token_out = message.token_out.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.token_out = [];
    }
    return obj;
  },
  fromPartial(object: Partial<MsgExitPoolResponse>): MsgExitPoolResponse {
    const message = createBaseMsgExitPoolResponse();
    message.token_out = object.token_out?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: MsgExitPoolResponseSDKType): MsgExitPoolResponse {
    return {
      token_out: Array.isArray(object?.token_out) ? object.token_out.map((e: any) => Coin.fromSDK(e)) : []
    };
  },
  toSDK(message: MsgExitPoolResponse): MsgExitPoolResponseSDKType {
    const obj: any = {};
    if (message.token_out) {
      obj.token_out = message.token_out.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.token_out = [];
    }
    return obj;
  },
  fromAmino(object: MsgExitPoolResponseAmino): MsgExitPoolResponse {
    return {
      token_out: Array.isArray(object?.token_out) ? object.token_out.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: MsgExitPoolResponse): MsgExitPoolResponseAmino {
    const obj: any = {};
    if (message.token_out) {
      obj.token_out = message.token_out.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.token_out = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgExitPoolResponseAminoMsg): MsgExitPoolResponse {
    return MsgExitPoolResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgExitPoolResponse): MsgExitPoolResponseAminoMsg {
    return {
      type: "osmosis/gamm/exit-pool-response",
      value: MsgExitPoolResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgExitPoolResponseProtoMsg): MsgExitPoolResponse {
    return MsgExitPoolResponse.decode(message.value);
  },
  toProto(message: MsgExitPoolResponse): Uint8Array {
    return MsgExitPoolResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgExitPoolResponse): MsgExitPoolResponseProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.MsgExitPoolResponse",
      value: MsgExitPoolResponse.encode(message).finish()
    };
  }
};
function createBaseSwapAmountInRoute(): SwapAmountInRoute {
  return {
    pool_id: BigInt(0),
    token_out_denom: ""
  };
}
export const SwapAmountInRoute = {
  typeUrl: "/osmosis.gamm.v1beta1.SwapAmountInRoute",
  encode(message: SwapAmountInRoute, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pool_id !== BigInt(0)) {
      writer.uint32(8).uint64(message.pool_id);
    }
    if (message.token_out_denom !== "") {
      writer.uint32(18).string(message.token_out_denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SwapAmountInRoute {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSwapAmountInRoute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool_id = reader.uint64();
          break;
        case 2:
          message.token_out_denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SwapAmountInRoute {
    return {
      pool_id: isSet(object.pool_id) ? BigInt(object.pool_id.toString()) : BigInt(0),
      token_out_denom: isSet(object.token_out_denom) ? String(object.token_out_denom) : ""
    };
  },
  toJSON(message: SwapAmountInRoute): unknown {
    const obj: any = {};
    message.pool_id !== undefined && (obj.pool_id = (message.pool_id || BigInt(0)).toString());
    message.token_out_denom !== undefined && (obj.token_out_denom = message.token_out_denom);
    return obj;
  },
  fromPartial(object: Partial<SwapAmountInRoute>): SwapAmountInRoute {
    const message = createBaseSwapAmountInRoute();
    message.pool_id = object.pool_id !== undefined && object.pool_id !== null ? BigInt(object.pool_id.toString()) : BigInt(0);
    message.token_out_denom = object.token_out_denom ?? "";
    return message;
  },
  fromSDK(object: SwapAmountInRouteSDKType): SwapAmountInRoute {
    return {
      pool_id: object?.pool_id,
      token_out_denom: object?.token_out_denom
    };
  },
  toSDK(message: SwapAmountInRoute): SwapAmountInRouteSDKType {
    const obj: any = {};
    obj.pool_id = message.pool_id;
    obj.token_out_denom = message.token_out_denom;
    return obj;
  },
  fromAmino(object: SwapAmountInRouteAmino): SwapAmountInRoute {
    return {
      pool_id: BigInt(object.pool_id),
      token_out_denom: object.token_out_denom
    };
  },
  toAmino(message: SwapAmountInRoute): SwapAmountInRouteAmino {
    const obj: any = {};
    obj.pool_id = message.pool_id ? message.pool_id.toString() : undefined;
    obj.token_out_denom = message.token_out_denom;
    return obj;
  },
  fromAminoMsg(object: SwapAmountInRouteAminoMsg): SwapAmountInRoute {
    return SwapAmountInRoute.fromAmino(object.value);
  },
  toAminoMsg(message: SwapAmountInRoute): SwapAmountInRouteAminoMsg {
    return {
      type: "osmosis/gamm/swap-amount-in-route",
      value: SwapAmountInRoute.toAmino(message)
    };
  },
  fromProtoMsg(message: SwapAmountInRouteProtoMsg): SwapAmountInRoute {
    return SwapAmountInRoute.decode(message.value);
  },
  toProto(message: SwapAmountInRoute): Uint8Array {
    return SwapAmountInRoute.encode(message).finish();
  },
  toProtoMsg(message: SwapAmountInRoute): SwapAmountInRouteProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.SwapAmountInRoute",
      value: SwapAmountInRoute.encode(message).finish()
    };
  }
};
function createBaseMsgSwapExactAmountIn(): MsgSwapExactAmountIn {
  return {
    sender: "",
    routes: [],
    token_in: Coin.fromPartial({}),
    token_out_min_amount: ""
  };
}
export const MsgSwapExactAmountIn = {
  typeUrl: "/osmosis.gamm.v1beta1.MsgSwapExactAmountIn",
  encode(message: MsgSwapExactAmountIn, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    for (const v of message.routes) {
      SwapAmountInRoute.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.token_in !== undefined) {
      Coin.encode(message.token_in, writer.uint32(26).fork()).ldelim();
    }
    if (message.token_out_min_amount !== "") {
      writer.uint32(34).string(message.token_out_min_amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSwapExactAmountIn {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSwapExactAmountIn();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.routes.push(SwapAmountInRoute.decode(reader, reader.uint32()));
          break;
        case 3:
          message.token_in = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.token_out_min_amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSwapExactAmountIn {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      routes: Array.isArray(object?.routes) ? object.routes.map((e: any) => SwapAmountInRoute.fromJSON(e)) : [],
      token_in: isSet(object.token_in) ? Coin.fromJSON(object.token_in) : undefined,
      token_out_min_amount: isSet(object.token_out_min_amount) ? String(object.token_out_min_amount) : ""
    };
  },
  toJSON(message: MsgSwapExactAmountIn): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    if (message.routes) {
      obj.routes = message.routes.map(e => e ? SwapAmountInRoute.toJSON(e) : undefined);
    } else {
      obj.routes = [];
    }
    message.token_in !== undefined && (obj.token_in = message.token_in ? Coin.toJSON(message.token_in) : undefined);
    message.token_out_min_amount !== undefined && (obj.token_out_min_amount = message.token_out_min_amount);
    return obj;
  },
  fromPartial(object: Partial<MsgSwapExactAmountIn>): MsgSwapExactAmountIn {
    const message = createBaseMsgSwapExactAmountIn();
    message.sender = object.sender ?? "";
    message.routes = object.routes?.map(e => SwapAmountInRoute.fromPartial(e)) || [];
    message.token_in = object.token_in !== undefined && object.token_in !== null ? Coin.fromPartial(object.token_in) : undefined;
    message.token_out_min_amount = object.token_out_min_amount ?? "";
    return message;
  },
  fromSDK(object: MsgSwapExactAmountInSDKType): MsgSwapExactAmountIn {
    return {
      sender: object?.sender,
      routes: Array.isArray(object?.routes) ? object.routes.map((e: any) => SwapAmountInRoute.fromSDK(e)) : [],
      token_in: object.token_in ? Coin.fromSDK(object.token_in) : undefined,
      token_out_min_amount: object?.token_out_min_amount
    };
  },
  toSDK(message: MsgSwapExactAmountIn): MsgSwapExactAmountInSDKType {
    const obj: any = {};
    obj.sender = message.sender;
    if (message.routes) {
      obj.routes = message.routes.map(e => e ? SwapAmountInRoute.toSDK(e) : undefined);
    } else {
      obj.routes = [];
    }
    message.token_in !== undefined && (obj.token_in = message.token_in ? Coin.toSDK(message.token_in) : undefined);
    obj.token_out_min_amount = message.token_out_min_amount;
    return obj;
  },
  fromAmino(object: MsgSwapExactAmountInAmino): MsgSwapExactAmountIn {
    return {
      sender: object.sender,
      routes: Array.isArray(object?.routes) ? object.routes.map((e: any) => SwapAmountInRoute.fromAmino(e)) : [],
      token_in: object?.token_in ? Coin.fromAmino(object.token_in) : undefined,
      token_out_min_amount: object.token_out_min_amount
    };
  },
  toAmino(message: MsgSwapExactAmountIn): MsgSwapExactAmountInAmino {
    const obj: any = {};
    obj.sender = message.sender;
    if (message.routes) {
      obj.routes = message.routes.map(e => e ? SwapAmountInRoute.toAmino(e) : undefined);
    } else {
      obj.routes = [];
    }
    obj.token_in = message.token_in ? Coin.toAmino(message.token_in) : undefined;
    obj.token_out_min_amount = message.token_out_min_amount;
    return obj;
  },
  fromAminoMsg(object: MsgSwapExactAmountInAminoMsg): MsgSwapExactAmountIn {
    return MsgSwapExactAmountIn.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSwapExactAmountIn): MsgSwapExactAmountInAminoMsg {
    return {
      type: "osmosis/gamm/swap-exact-amount-in",
      value: MsgSwapExactAmountIn.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSwapExactAmountInProtoMsg): MsgSwapExactAmountIn {
    return MsgSwapExactAmountIn.decode(message.value);
  },
  toProto(message: MsgSwapExactAmountIn): Uint8Array {
    return MsgSwapExactAmountIn.encode(message).finish();
  },
  toProtoMsg(message: MsgSwapExactAmountIn): MsgSwapExactAmountInProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.MsgSwapExactAmountIn",
      value: MsgSwapExactAmountIn.encode(message).finish()
    };
  }
};
function createBaseMsgSwapExactAmountInResponse(): MsgSwapExactAmountInResponse {
  return {
    token_out_amount: ""
  };
}
export const MsgSwapExactAmountInResponse = {
  typeUrl: "/osmosis.gamm.v1beta1.MsgSwapExactAmountInResponse",
  encode(message: MsgSwapExactAmountInResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.token_out_amount !== "") {
      writer.uint32(10).string(message.token_out_amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSwapExactAmountInResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSwapExactAmountInResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.token_out_amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSwapExactAmountInResponse {
    return {
      token_out_amount: isSet(object.token_out_amount) ? String(object.token_out_amount) : ""
    };
  },
  toJSON(message: MsgSwapExactAmountInResponse): unknown {
    const obj: any = {};
    message.token_out_amount !== undefined && (obj.token_out_amount = message.token_out_amount);
    return obj;
  },
  fromPartial(object: Partial<MsgSwapExactAmountInResponse>): MsgSwapExactAmountInResponse {
    const message = createBaseMsgSwapExactAmountInResponse();
    message.token_out_amount = object.token_out_amount ?? "";
    return message;
  },
  fromSDK(object: MsgSwapExactAmountInResponseSDKType): MsgSwapExactAmountInResponse {
    return {
      token_out_amount: object?.token_out_amount
    };
  },
  toSDK(message: MsgSwapExactAmountInResponse): MsgSwapExactAmountInResponseSDKType {
    const obj: any = {};
    obj.token_out_amount = message.token_out_amount;
    return obj;
  },
  fromAmino(object: MsgSwapExactAmountInResponseAmino): MsgSwapExactAmountInResponse {
    return {
      token_out_amount: object.token_out_amount
    };
  },
  toAmino(message: MsgSwapExactAmountInResponse): MsgSwapExactAmountInResponseAmino {
    const obj: any = {};
    obj.token_out_amount = message.token_out_amount;
    return obj;
  },
  fromAminoMsg(object: MsgSwapExactAmountInResponseAminoMsg): MsgSwapExactAmountInResponse {
    return MsgSwapExactAmountInResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSwapExactAmountInResponse): MsgSwapExactAmountInResponseAminoMsg {
    return {
      type: "osmosis/gamm/swap-exact-amount-in-response",
      value: MsgSwapExactAmountInResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSwapExactAmountInResponseProtoMsg): MsgSwapExactAmountInResponse {
    return MsgSwapExactAmountInResponse.decode(message.value);
  },
  toProto(message: MsgSwapExactAmountInResponse): Uint8Array {
    return MsgSwapExactAmountInResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSwapExactAmountInResponse): MsgSwapExactAmountInResponseProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.MsgSwapExactAmountInResponse",
      value: MsgSwapExactAmountInResponse.encode(message).finish()
    };
  }
};
function createBaseSwapAmountOutRoute(): SwapAmountOutRoute {
  return {
    pool_id: BigInt(0),
    token_in_denom: ""
  };
}
export const SwapAmountOutRoute = {
  typeUrl: "/osmosis.gamm.v1beta1.SwapAmountOutRoute",
  encode(message: SwapAmountOutRoute, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pool_id !== BigInt(0)) {
      writer.uint32(8).uint64(message.pool_id);
    }
    if (message.token_in_denom !== "") {
      writer.uint32(18).string(message.token_in_denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SwapAmountOutRoute {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSwapAmountOutRoute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool_id = reader.uint64();
          break;
        case 2:
          message.token_in_denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SwapAmountOutRoute {
    return {
      pool_id: isSet(object.pool_id) ? BigInt(object.pool_id.toString()) : BigInt(0),
      token_in_denom: isSet(object.token_in_denom) ? String(object.token_in_denom) : ""
    };
  },
  toJSON(message: SwapAmountOutRoute): unknown {
    const obj: any = {};
    message.pool_id !== undefined && (obj.pool_id = (message.pool_id || BigInt(0)).toString());
    message.token_in_denom !== undefined && (obj.token_in_denom = message.token_in_denom);
    return obj;
  },
  fromPartial(object: Partial<SwapAmountOutRoute>): SwapAmountOutRoute {
    const message = createBaseSwapAmountOutRoute();
    message.pool_id = object.pool_id !== undefined && object.pool_id !== null ? BigInt(object.pool_id.toString()) : BigInt(0);
    message.token_in_denom = object.token_in_denom ?? "";
    return message;
  },
  fromSDK(object: SwapAmountOutRouteSDKType): SwapAmountOutRoute {
    return {
      pool_id: object?.pool_id,
      token_in_denom: object?.token_in_denom
    };
  },
  toSDK(message: SwapAmountOutRoute): SwapAmountOutRouteSDKType {
    const obj: any = {};
    obj.pool_id = message.pool_id;
    obj.token_in_denom = message.token_in_denom;
    return obj;
  },
  fromAmino(object: SwapAmountOutRouteAmino): SwapAmountOutRoute {
    return {
      pool_id: BigInt(object.pool_id),
      token_in_denom: object.token_in_denom
    };
  },
  toAmino(message: SwapAmountOutRoute): SwapAmountOutRouteAmino {
    const obj: any = {};
    obj.pool_id = message.pool_id ? message.pool_id.toString() : undefined;
    obj.token_in_denom = message.token_in_denom;
    return obj;
  },
  fromAminoMsg(object: SwapAmountOutRouteAminoMsg): SwapAmountOutRoute {
    return SwapAmountOutRoute.fromAmino(object.value);
  },
  toAminoMsg(message: SwapAmountOutRoute): SwapAmountOutRouteAminoMsg {
    return {
      type: "osmosis/gamm/swap-amount-out-route",
      value: SwapAmountOutRoute.toAmino(message)
    };
  },
  fromProtoMsg(message: SwapAmountOutRouteProtoMsg): SwapAmountOutRoute {
    return SwapAmountOutRoute.decode(message.value);
  },
  toProto(message: SwapAmountOutRoute): Uint8Array {
    return SwapAmountOutRoute.encode(message).finish();
  },
  toProtoMsg(message: SwapAmountOutRoute): SwapAmountOutRouteProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.SwapAmountOutRoute",
      value: SwapAmountOutRoute.encode(message).finish()
    };
  }
};
function createBaseMsgSwapExactAmountOut(): MsgSwapExactAmountOut {
  return {
    sender: "",
    routes: [],
    token_in_max_amount: "",
    token_out: Coin.fromPartial({})
  };
}
export const MsgSwapExactAmountOut = {
  typeUrl: "/osmosis.gamm.v1beta1.MsgSwapExactAmountOut",
  encode(message: MsgSwapExactAmountOut, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    for (const v of message.routes) {
      SwapAmountOutRoute.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.token_in_max_amount !== "") {
      writer.uint32(26).string(message.token_in_max_amount);
    }
    if (message.token_out !== undefined) {
      Coin.encode(message.token_out, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSwapExactAmountOut {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSwapExactAmountOut();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.routes.push(SwapAmountOutRoute.decode(reader, reader.uint32()));
          break;
        case 3:
          message.token_in_max_amount = reader.string();
          break;
        case 4:
          message.token_out = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSwapExactAmountOut {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      routes: Array.isArray(object?.routes) ? object.routes.map((e: any) => SwapAmountOutRoute.fromJSON(e)) : [],
      token_in_max_amount: isSet(object.token_in_max_amount) ? String(object.token_in_max_amount) : "",
      token_out: isSet(object.token_out) ? Coin.fromJSON(object.token_out) : undefined
    };
  },
  toJSON(message: MsgSwapExactAmountOut): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    if (message.routes) {
      obj.routes = message.routes.map(e => e ? SwapAmountOutRoute.toJSON(e) : undefined);
    } else {
      obj.routes = [];
    }
    message.token_in_max_amount !== undefined && (obj.token_in_max_amount = message.token_in_max_amount);
    message.token_out !== undefined && (obj.token_out = message.token_out ? Coin.toJSON(message.token_out) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgSwapExactAmountOut>): MsgSwapExactAmountOut {
    const message = createBaseMsgSwapExactAmountOut();
    message.sender = object.sender ?? "";
    message.routes = object.routes?.map(e => SwapAmountOutRoute.fromPartial(e)) || [];
    message.token_in_max_amount = object.token_in_max_amount ?? "";
    message.token_out = object.token_out !== undefined && object.token_out !== null ? Coin.fromPartial(object.token_out) : undefined;
    return message;
  },
  fromSDK(object: MsgSwapExactAmountOutSDKType): MsgSwapExactAmountOut {
    return {
      sender: object?.sender,
      routes: Array.isArray(object?.routes) ? object.routes.map((e: any) => SwapAmountOutRoute.fromSDK(e)) : [],
      token_in_max_amount: object?.token_in_max_amount,
      token_out: object.token_out ? Coin.fromSDK(object.token_out) : undefined
    };
  },
  toSDK(message: MsgSwapExactAmountOut): MsgSwapExactAmountOutSDKType {
    const obj: any = {};
    obj.sender = message.sender;
    if (message.routes) {
      obj.routes = message.routes.map(e => e ? SwapAmountOutRoute.toSDK(e) : undefined);
    } else {
      obj.routes = [];
    }
    obj.token_in_max_amount = message.token_in_max_amount;
    message.token_out !== undefined && (obj.token_out = message.token_out ? Coin.toSDK(message.token_out) : undefined);
    return obj;
  },
  fromAmino(object: MsgSwapExactAmountOutAmino): MsgSwapExactAmountOut {
    return {
      sender: object.sender,
      routes: Array.isArray(object?.routes) ? object.routes.map((e: any) => SwapAmountOutRoute.fromAmino(e)) : [],
      token_in_max_amount: object.token_in_max_amount,
      token_out: object?.token_out ? Coin.fromAmino(object.token_out) : undefined
    };
  },
  toAmino(message: MsgSwapExactAmountOut): MsgSwapExactAmountOutAmino {
    const obj: any = {};
    obj.sender = message.sender;
    if (message.routes) {
      obj.routes = message.routes.map(e => e ? SwapAmountOutRoute.toAmino(e) : undefined);
    } else {
      obj.routes = [];
    }
    obj.token_in_max_amount = message.token_in_max_amount;
    obj.token_out = message.token_out ? Coin.toAmino(message.token_out) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSwapExactAmountOutAminoMsg): MsgSwapExactAmountOut {
    return MsgSwapExactAmountOut.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSwapExactAmountOut): MsgSwapExactAmountOutAminoMsg {
    return {
      type: "osmosis/gamm/swap-exact-amount-out",
      value: MsgSwapExactAmountOut.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSwapExactAmountOutProtoMsg): MsgSwapExactAmountOut {
    return MsgSwapExactAmountOut.decode(message.value);
  },
  toProto(message: MsgSwapExactAmountOut): Uint8Array {
    return MsgSwapExactAmountOut.encode(message).finish();
  },
  toProtoMsg(message: MsgSwapExactAmountOut): MsgSwapExactAmountOutProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.MsgSwapExactAmountOut",
      value: MsgSwapExactAmountOut.encode(message).finish()
    };
  }
};
function createBaseMsgSwapExactAmountOutResponse(): MsgSwapExactAmountOutResponse {
  return {
    token_in_amount: ""
  };
}
export const MsgSwapExactAmountOutResponse = {
  typeUrl: "/osmosis.gamm.v1beta1.MsgSwapExactAmountOutResponse",
  encode(message: MsgSwapExactAmountOutResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.token_in_amount !== "") {
      writer.uint32(10).string(message.token_in_amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSwapExactAmountOutResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSwapExactAmountOutResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.token_in_amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSwapExactAmountOutResponse {
    return {
      token_in_amount: isSet(object.token_in_amount) ? String(object.token_in_amount) : ""
    };
  },
  toJSON(message: MsgSwapExactAmountOutResponse): unknown {
    const obj: any = {};
    message.token_in_amount !== undefined && (obj.token_in_amount = message.token_in_amount);
    return obj;
  },
  fromPartial(object: Partial<MsgSwapExactAmountOutResponse>): MsgSwapExactAmountOutResponse {
    const message = createBaseMsgSwapExactAmountOutResponse();
    message.token_in_amount = object.token_in_amount ?? "";
    return message;
  },
  fromSDK(object: MsgSwapExactAmountOutResponseSDKType): MsgSwapExactAmountOutResponse {
    return {
      token_in_amount: object?.token_in_amount
    };
  },
  toSDK(message: MsgSwapExactAmountOutResponse): MsgSwapExactAmountOutResponseSDKType {
    const obj: any = {};
    obj.token_in_amount = message.token_in_amount;
    return obj;
  },
  fromAmino(object: MsgSwapExactAmountOutResponseAmino): MsgSwapExactAmountOutResponse {
    return {
      token_in_amount: object.token_in_amount
    };
  },
  toAmino(message: MsgSwapExactAmountOutResponse): MsgSwapExactAmountOutResponseAmino {
    const obj: any = {};
    obj.token_in_amount = message.token_in_amount;
    return obj;
  },
  fromAminoMsg(object: MsgSwapExactAmountOutResponseAminoMsg): MsgSwapExactAmountOutResponse {
    return MsgSwapExactAmountOutResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSwapExactAmountOutResponse): MsgSwapExactAmountOutResponseAminoMsg {
    return {
      type: "osmosis/gamm/swap-exact-amount-out-response",
      value: MsgSwapExactAmountOutResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSwapExactAmountOutResponseProtoMsg): MsgSwapExactAmountOutResponse {
    return MsgSwapExactAmountOutResponse.decode(message.value);
  },
  toProto(message: MsgSwapExactAmountOutResponse): Uint8Array {
    return MsgSwapExactAmountOutResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSwapExactAmountOutResponse): MsgSwapExactAmountOutResponseProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.MsgSwapExactAmountOutResponse",
      value: MsgSwapExactAmountOutResponse.encode(message).finish()
    };
  }
};
function createBaseMsgJoinSwapExternAmountIn(): MsgJoinSwapExternAmountIn {
  return {
    sender: "",
    pool_id: BigInt(0),
    token_in: Coin.fromPartial({}),
    share_out_min_amount: ""
  };
}
export const MsgJoinSwapExternAmountIn = {
  typeUrl: "/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountIn",
  encode(message: MsgJoinSwapExternAmountIn, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.pool_id !== BigInt(0)) {
      writer.uint32(16).uint64(message.pool_id);
    }
    if (message.token_in !== undefined) {
      Coin.encode(message.token_in, writer.uint32(26).fork()).ldelim();
    }
    if (message.share_out_min_amount !== "") {
      writer.uint32(34).string(message.share_out_min_amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgJoinSwapExternAmountIn {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgJoinSwapExternAmountIn();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.pool_id = reader.uint64();
          break;
        case 3:
          message.token_in = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.share_out_min_amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgJoinSwapExternAmountIn {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      pool_id: isSet(object.pool_id) ? BigInt(object.pool_id.toString()) : BigInt(0),
      token_in: isSet(object.token_in) ? Coin.fromJSON(object.token_in) : undefined,
      share_out_min_amount: isSet(object.share_out_min_amount) ? String(object.share_out_min_amount) : ""
    };
  },
  toJSON(message: MsgJoinSwapExternAmountIn): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.pool_id !== undefined && (obj.pool_id = (message.pool_id || BigInt(0)).toString());
    message.token_in !== undefined && (obj.token_in = message.token_in ? Coin.toJSON(message.token_in) : undefined);
    message.share_out_min_amount !== undefined && (obj.share_out_min_amount = message.share_out_min_amount);
    return obj;
  },
  fromPartial(object: Partial<MsgJoinSwapExternAmountIn>): MsgJoinSwapExternAmountIn {
    const message = createBaseMsgJoinSwapExternAmountIn();
    message.sender = object.sender ?? "";
    message.pool_id = object.pool_id !== undefined && object.pool_id !== null ? BigInt(object.pool_id.toString()) : BigInt(0);
    message.token_in = object.token_in !== undefined && object.token_in !== null ? Coin.fromPartial(object.token_in) : undefined;
    message.share_out_min_amount = object.share_out_min_amount ?? "";
    return message;
  },
  fromSDK(object: MsgJoinSwapExternAmountInSDKType): MsgJoinSwapExternAmountIn {
    return {
      sender: object?.sender,
      pool_id: object?.pool_id,
      token_in: object.token_in ? Coin.fromSDK(object.token_in) : undefined,
      share_out_min_amount: object?.share_out_min_amount
    };
  },
  toSDK(message: MsgJoinSwapExternAmountIn): MsgJoinSwapExternAmountInSDKType {
    const obj: any = {};
    obj.sender = message.sender;
    obj.pool_id = message.pool_id;
    message.token_in !== undefined && (obj.token_in = message.token_in ? Coin.toSDK(message.token_in) : undefined);
    obj.share_out_min_amount = message.share_out_min_amount;
    return obj;
  },
  fromAmino(object: MsgJoinSwapExternAmountInAmino): MsgJoinSwapExternAmountIn {
    return {
      sender: object.sender,
      pool_id: BigInt(object.pool_id),
      token_in: object?.token_in ? Coin.fromAmino(object.token_in) : undefined,
      share_out_min_amount: object.share_out_min_amount
    };
  },
  toAmino(message: MsgJoinSwapExternAmountIn): MsgJoinSwapExternAmountInAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.pool_id = message.pool_id ? message.pool_id.toString() : undefined;
    obj.token_in = message.token_in ? Coin.toAmino(message.token_in) : undefined;
    obj.share_out_min_amount = message.share_out_min_amount;
    return obj;
  },
  fromAminoMsg(object: MsgJoinSwapExternAmountInAminoMsg): MsgJoinSwapExternAmountIn {
    return MsgJoinSwapExternAmountIn.fromAmino(object.value);
  },
  toAminoMsg(message: MsgJoinSwapExternAmountIn): MsgJoinSwapExternAmountInAminoMsg {
    return {
      type: "osmosis/gamm/join-swap-extern-amount-in",
      value: MsgJoinSwapExternAmountIn.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgJoinSwapExternAmountInProtoMsg): MsgJoinSwapExternAmountIn {
    return MsgJoinSwapExternAmountIn.decode(message.value);
  },
  toProto(message: MsgJoinSwapExternAmountIn): Uint8Array {
    return MsgJoinSwapExternAmountIn.encode(message).finish();
  },
  toProtoMsg(message: MsgJoinSwapExternAmountIn): MsgJoinSwapExternAmountInProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountIn",
      value: MsgJoinSwapExternAmountIn.encode(message).finish()
    };
  }
};
function createBaseMsgJoinSwapExternAmountInResponse(): MsgJoinSwapExternAmountInResponse {
  return {
    share_out_amount: ""
  };
}
export const MsgJoinSwapExternAmountInResponse = {
  typeUrl: "/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountInResponse",
  encode(message: MsgJoinSwapExternAmountInResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.share_out_amount !== "") {
      writer.uint32(10).string(message.share_out_amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgJoinSwapExternAmountInResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgJoinSwapExternAmountInResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.share_out_amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgJoinSwapExternAmountInResponse {
    return {
      share_out_amount: isSet(object.share_out_amount) ? String(object.share_out_amount) : ""
    };
  },
  toJSON(message: MsgJoinSwapExternAmountInResponse): unknown {
    const obj: any = {};
    message.share_out_amount !== undefined && (obj.share_out_amount = message.share_out_amount);
    return obj;
  },
  fromPartial(object: Partial<MsgJoinSwapExternAmountInResponse>): MsgJoinSwapExternAmountInResponse {
    const message = createBaseMsgJoinSwapExternAmountInResponse();
    message.share_out_amount = object.share_out_amount ?? "";
    return message;
  },
  fromSDK(object: MsgJoinSwapExternAmountInResponseSDKType): MsgJoinSwapExternAmountInResponse {
    return {
      share_out_amount: object?.share_out_amount
    };
  },
  toSDK(message: MsgJoinSwapExternAmountInResponse): MsgJoinSwapExternAmountInResponseSDKType {
    const obj: any = {};
    obj.share_out_amount = message.share_out_amount;
    return obj;
  },
  fromAmino(object: MsgJoinSwapExternAmountInResponseAmino): MsgJoinSwapExternAmountInResponse {
    return {
      share_out_amount: object.share_out_amount
    };
  },
  toAmino(message: MsgJoinSwapExternAmountInResponse): MsgJoinSwapExternAmountInResponseAmino {
    const obj: any = {};
    obj.share_out_amount = message.share_out_amount;
    return obj;
  },
  fromAminoMsg(object: MsgJoinSwapExternAmountInResponseAminoMsg): MsgJoinSwapExternAmountInResponse {
    return MsgJoinSwapExternAmountInResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgJoinSwapExternAmountInResponse): MsgJoinSwapExternAmountInResponseAminoMsg {
    return {
      type: "osmosis/gamm/join-swap-extern-amount-in-response",
      value: MsgJoinSwapExternAmountInResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgJoinSwapExternAmountInResponseProtoMsg): MsgJoinSwapExternAmountInResponse {
    return MsgJoinSwapExternAmountInResponse.decode(message.value);
  },
  toProto(message: MsgJoinSwapExternAmountInResponse): Uint8Array {
    return MsgJoinSwapExternAmountInResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgJoinSwapExternAmountInResponse): MsgJoinSwapExternAmountInResponseProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountInResponse",
      value: MsgJoinSwapExternAmountInResponse.encode(message).finish()
    };
  }
};
function createBaseMsgJoinSwapShareAmountOut(): MsgJoinSwapShareAmountOut {
  return {
    sender: "",
    pool_id: BigInt(0),
    token_in_denom: "",
    share_out_amount: "",
    token_in_max_amount: ""
  };
}
export const MsgJoinSwapShareAmountOut = {
  typeUrl: "/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOut",
  encode(message: MsgJoinSwapShareAmountOut, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.pool_id !== BigInt(0)) {
      writer.uint32(16).uint64(message.pool_id);
    }
    if (message.token_in_denom !== "") {
      writer.uint32(26).string(message.token_in_denom);
    }
    if (message.share_out_amount !== "") {
      writer.uint32(34).string(message.share_out_amount);
    }
    if (message.token_in_max_amount !== "") {
      writer.uint32(42).string(message.token_in_max_amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgJoinSwapShareAmountOut {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgJoinSwapShareAmountOut();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.pool_id = reader.uint64();
          break;
        case 3:
          message.token_in_denom = reader.string();
          break;
        case 4:
          message.share_out_amount = reader.string();
          break;
        case 5:
          message.token_in_max_amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgJoinSwapShareAmountOut {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      pool_id: isSet(object.pool_id) ? BigInt(object.pool_id.toString()) : BigInt(0),
      token_in_denom: isSet(object.token_in_denom) ? String(object.token_in_denom) : "",
      share_out_amount: isSet(object.share_out_amount) ? String(object.share_out_amount) : "",
      token_in_max_amount: isSet(object.token_in_max_amount) ? String(object.token_in_max_amount) : ""
    };
  },
  toJSON(message: MsgJoinSwapShareAmountOut): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.pool_id !== undefined && (obj.pool_id = (message.pool_id || BigInt(0)).toString());
    message.token_in_denom !== undefined && (obj.token_in_denom = message.token_in_denom);
    message.share_out_amount !== undefined && (obj.share_out_amount = message.share_out_amount);
    message.token_in_max_amount !== undefined && (obj.token_in_max_amount = message.token_in_max_amount);
    return obj;
  },
  fromPartial(object: Partial<MsgJoinSwapShareAmountOut>): MsgJoinSwapShareAmountOut {
    const message = createBaseMsgJoinSwapShareAmountOut();
    message.sender = object.sender ?? "";
    message.pool_id = object.pool_id !== undefined && object.pool_id !== null ? BigInt(object.pool_id.toString()) : BigInt(0);
    message.token_in_denom = object.token_in_denom ?? "";
    message.share_out_amount = object.share_out_amount ?? "";
    message.token_in_max_amount = object.token_in_max_amount ?? "";
    return message;
  },
  fromSDK(object: MsgJoinSwapShareAmountOutSDKType): MsgJoinSwapShareAmountOut {
    return {
      sender: object?.sender,
      pool_id: object?.pool_id,
      token_in_denom: object?.token_in_denom,
      share_out_amount: object?.share_out_amount,
      token_in_max_amount: object?.token_in_max_amount
    };
  },
  toSDK(message: MsgJoinSwapShareAmountOut): MsgJoinSwapShareAmountOutSDKType {
    const obj: any = {};
    obj.sender = message.sender;
    obj.pool_id = message.pool_id;
    obj.token_in_denom = message.token_in_denom;
    obj.share_out_amount = message.share_out_amount;
    obj.token_in_max_amount = message.token_in_max_amount;
    return obj;
  },
  fromAmino(object: MsgJoinSwapShareAmountOutAmino): MsgJoinSwapShareAmountOut {
    return {
      sender: object.sender,
      pool_id: BigInt(object.pool_id),
      token_in_denom: object.token_in_denom,
      share_out_amount: object.share_out_amount,
      token_in_max_amount: object.token_in_max_amount
    };
  },
  toAmino(message: MsgJoinSwapShareAmountOut): MsgJoinSwapShareAmountOutAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.pool_id = message.pool_id ? message.pool_id.toString() : undefined;
    obj.token_in_denom = message.token_in_denom;
    obj.share_out_amount = message.share_out_amount;
    obj.token_in_max_amount = message.token_in_max_amount;
    return obj;
  },
  fromAminoMsg(object: MsgJoinSwapShareAmountOutAminoMsg): MsgJoinSwapShareAmountOut {
    return MsgJoinSwapShareAmountOut.fromAmino(object.value);
  },
  toAminoMsg(message: MsgJoinSwapShareAmountOut): MsgJoinSwapShareAmountOutAminoMsg {
    return {
      type: "osmosis/gamm/join-swap-share-amount-out",
      value: MsgJoinSwapShareAmountOut.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgJoinSwapShareAmountOutProtoMsg): MsgJoinSwapShareAmountOut {
    return MsgJoinSwapShareAmountOut.decode(message.value);
  },
  toProto(message: MsgJoinSwapShareAmountOut): Uint8Array {
    return MsgJoinSwapShareAmountOut.encode(message).finish();
  },
  toProtoMsg(message: MsgJoinSwapShareAmountOut): MsgJoinSwapShareAmountOutProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOut",
      value: MsgJoinSwapShareAmountOut.encode(message).finish()
    };
  }
};
function createBaseMsgJoinSwapShareAmountOutResponse(): MsgJoinSwapShareAmountOutResponse {
  return {
    token_in_amount: ""
  };
}
export const MsgJoinSwapShareAmountOutResponse = {
  typeUrl: "/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOutResponse",
  encode(message: MsgJoinSwapShareAmountOutResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.token_in_amount !== "") {
      writer.uint32(10).string(message.token_in_amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgJoinSwapShareAmountOutResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgJoinSwapShareAmountOutResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.token_in_amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgJoinSwapShareAmountOutResponse {
    return {
      token_in_amount: isSet(object.token_in_amount) ? String(object.token_in_amount) : ""
    };
  },
  toJSON(message: MsgJoinSwapShareAmountOutResponse): unknown {
    const obj: any = {};
    message.token_in_amount !== undefined && (obj.token_in_amount = message.token_in_amount);
    return obj;
  },
  fromPartial(object: Partial<MsgJoinSwapShareAmountOutResponse>): MsgJoinSwapShareAmountOutResponse {
    const message = createBaseMsgJoinSwapShareAmountOutResponse();
    message.token_in_amount = object.token_in_amount ?? "";
    return message;
  },
  fromSDK(object: MsgJoinSwapShareAmountOutResponseSDKType): MsgJoinSwapShareAmountOutResponse {
    return {
      token_in_amount: object?.token_in_amount
    };
  },
  toSDK(message: MsgJoinSwapShareAmountOutResponse): MsgJoinSwapShareAmountOutResponseSDKType {
    const obj: any = {};
    obj.token_in_amount = message.token_in_amount;
    return obj;
  },
  fromAmino(object: MsgJoinSwapShareAmountOutResponseAmino): MsgJoinSwapShareAmountOutResponse {
    return {
      token_in_amount: object.token_in_amount
    };
  },
  toAmino(message: MsgJoinSwapShareAmountOutResponse): MsgJoinSwapShareAmountOutResponseAmino {
    const obj: any = {};
    obj.token_in_amount = message.token_in_amount;
    return obj;
  },
  fromAminoMsg(object: MsgJoinSwapShareAmountOutResponseAminoMsg): MsgJoinSwapShareAmountOutResponse {
    return MsgJoinSwapShareAmountOutResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgJoinSwapShareAmountOutResponse): MsgJoinSwapShareAmountOutResponseAminoMsg {
    return {
      type: "osmosis/gamm/join-swap-share-amount-out-response",
      value: MsgJoinSwapShareAmountOutResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgJoinSwapShareAmountOutResponseProtoMsg): MsgJoinSwapShareAmountOutResponse {
    return MsgJoinSwapShareAmountOutResponse.decode(message.value);
  },
  toProto(message: MsgJoinSwapShareAmountOutResponse): Uint8Array {
    return MsgJoinSwapShareAmountOutResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgJoinSwapShareAmountOutResponse): MsgJoinSwapShareAmountOutResponseProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOutResponse",
      value: MsgJoinSwapShareAmountOutResponse.encode(message).finish()
    };
  }
};
function createBaseMsgExitSwapShareAmountIn(): MsgExitSwapShareAmountIn {
  return {
    sender: "",
    pool_id: BigInt(0),
    token_out_denom: "",
    share_in_amount: "",
    token_out_min_amount: ""
  };
}
export const MsgExitSwapShareAmountIn = {
  typeUrl: "/osmosis.gamm.v1beta1.MsgExitSwapShareAmountIn",
  encode(message: MsgExitSwapShareAmountIn, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.pool_id !== BigInt(0)) {
      writer.uint32(16).uint64(message.pool_id);
    }
    if (message.token_out_denom !== "") {
      writer.uint32(26).string(message.token_out_denom);
    }
    if (message.share_in_amount !== "") {
      writer.uint32(34).string(message.share_in_amount);
    }
    if (message.token_out_min_amount !== "") {
      writer.uint32(42).string(message.token_out_min_amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgExitSwapShareAmountIn {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExitSwapShareAmountIn();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.pool_id = reader.uint64();
          break;
        case 3:
          message.token_out_denom = reader.string();
          break;
        case 4:
          message.share_in_amount = reader.string();
          break;
        case 5:
          message.token_out_min_amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgExitSwapShareAmountIn {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      pool_id: isSet(object.pool_id) ? BigInt(object.pool_id.toString()) : BigInt(0),
      token_out_denom: isSet(object.token_out_denom) ? String(object.token_out_denom) : "",
      share_in_amount: isSet(object.share_in_amount) ? String(object.share_in_amount) : "",
      token_out_min_amount: isSet(object.token_out_min_amount) ? String(object.token_out_min_amount) : ""
    };
  },
  toJSON(message: MsgExitSwapShareAmountIn): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.pool_id !== undefined && (obj.pool_id = (message.pool_id || BigInt(0)).toString());
    message.token_out_denom !== undefined && (obj.token_out_denom = message.token_out_denom);
    message.share_in_amount !== undefined && (obj.share_in_amount = message.share_in_amount);
    message.token_out_min_amount !== undefined && (obj.token_out_min_amount = message.token_out_min_amount);
    return obj;
  },
  fromPartial(object: Partial<MsgExitSwapShareAmountIn>): MsgExitSwapShareAmountIn {
    const message = createBaseMsgExitSwapShareAmountIn();
    message.sender = object.sender ?? "";
    message.pool_id = object.pool_id !== undefined && object.pool_id !== null ? BigInt(object.pool_id.toString()) : BigInt(0);
    message.token_out_denom = object.token_out_denom ?? "";
    message.share_in_amount = object.share_in_amount ?? "";
    message.token_out_min_amount = object.token_out_min_amount ?? "";
    return message;
  },
  fromSDK(object: MsgExitSwapShareAmountInSDKType): MsgExitSwapShareAmountIn {
    return {
      sender: object?.sender,
      pool_id: object?.pool_id,
      token_out_denom: object?.token_out_denom,
      share_in_amount: object?.share_in_amount,
      token_out_min_amount: object?.token_out_min_amount
    };
  },
  toSDK(message: MsgExitSwapShareAmountIn): MsgExitSwapShareAmountInSDKType {
    const obj: any = {};
    obj.sender = message.sender;
    obj.pool_id = message.pool_id;
    obj.token_out_denom = message.token_out_denom;
    obj.share_in_amount = message.share_in_amount;
    obj.token_out_min_amount = message.token_out_min_amount;
    return obj;
  },
  fromAmino(object: MsgExitSwapShareAmountInAmino): MsgExitSwapShareAmountIn {
    return {
      sender: object.sender,
      pool_id: BigInt(object.pool_id),
      token_out_denom: object.token_out_denom,
      share_in_amount: object.share_in_amount,
      token_out_min_amount: object.token_out_min_amount
    };
  },
  toAmino(message: MsgExitSwapShareAmountIn): MsgExitSwapShareAmountInAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.pool_id = message.pool_id ? message.pool_id.toString() : undefined;
    obj.token_out_denom = message.token_out_denom;
    obj.share_in_amount = message.share_in_amount;
    obj.token_out_min_amount = message.token_out_min_amount;
    return obj;
  },
  fromAminoMsg(object: MsgExitSwapShareAmountInAminoMsg): MsgExitSwapShareAmountIn {
    return MsgExitSwapShareAmountIn.fromAmino(object.value);
  },
  toAminoMsg(message: MsgExitSwapShareAmountIn): MsgExitSwapShareAmountInAminoMsg {
    return {
      type: "osmosis/gamm/exit-swap-share-amount-in",
      value: MsgExitSwapShareAmountIn.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgExitSwapShareAmountInProtoMsg): MsgExitSwapShareAmountIn {
    return MsgExitSwapShareAmountIn.decode(message.value);
  },
  toProto(message: MsgExitSwapShareAmountIn): Uint8Array {
    return MsgExitSwapShareAmountIn.encode(message).finish();
  },
  toProtoMsg(message: MsgExitSwapShareAmountIn): MsgExitSwapShareAmountInProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.MsgExitSwapShareAmountIn",
      value: MsgExitSwapShareAmountIn.encode(message).finish()
    };
  }
};
function createBaseMsgExitSwapShareAmountInResponse(): MsgExitSwapShareAmountInResponse {
  return {
    token_out_amount: ""
  };
}
export const MsgExitSwapShareAmountInResponse = {
  typeUrl: "/osmosis.gamm.v1beta1.MsgExitSwapShareAmountInResponse",
  encode(message: MsgExitSwapShareAmountInResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.token_out_amount !== "") {
      writer.uint32(10).string(message.token_out_amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgExitSwapShareAmountInResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExitSwapShareAmountInResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.token_out_amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgExitSwapShareAmountInResponse {
    return {
      token_out_amount: isSet(object.token_out_amount) ? String(object.token_out_amount) : ""
    };
  },
  toJSON(message: MsgExitSwapShareAmountInResponse): unknown {
    const obj: any = {};
    message.token_out_amount !== undefined && (obj.token_out_amount = message.token_out_amount);
    return obj;
  },
  fromPartial(object: Partial<MsgExitSwapShareAmountInResponse>): MsgExitSwapShareAmountInResponse {
    const message = createBaseMsgExitSwapShareAmountInResponse();
    message.token_out_amount = object.token_out_amount ?? "";
    return message;
  },
  fromSDK(object: MsgExitSwapShareAmountInResponseSDKType): MsgExitSwapShareAmountInResponse {
    return {
      token_out_amount: object?.token_out_amount
    };
  },
  toSDK(message: MsgExitSwapShareAmountInResponse): MsgExitSwapShareAmountInResponseSDKType {
    const obj: any = {};
    obj.token_out_amount = message.token_out_amount;
    return obj;
  },
  fromAmino(object: MsgExitSwapShareAmountInResponseAmino): MsgExitSwapShareAmountInResponse {
    return {
      token_out_amount: object.token_out_amount
    };
  },
  toAmino(message: MsgExitSwapShareAmountInResponse): MsgExitSwapShareAmountInResponseAmino {
    const obj: any = {};
    obj.token_out_amount = message.token_out_amount;
    return obj;
  },
  fromAminoMsg(object: MsgExitSwapShareAmountInResponseAminoMsg): MsgExitSwapShareAmountInResponse {
    return MsgExitSwapShareAmountInResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgExitSwapShareAmountInResponse): MsgExitSwapShareAmountInResponseAminoMsg {
    return {
      type: "osmosis/gamm/exit-swap-share-amount-in-response",
      value: MsgExitSwapShareAmountInResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgExitSwapShareAmountInResponseProtoMsg): MsgExitSwapShareAmountInResponse {
    return MsgExitSwapShareAmountInResponse.decode(message.value);
  },
  toProto(message: MsgExitSwapShareAmountInResponse): Uint8Array {
    return MsgExitSwapShareAmountInResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgExitSwapShareAmountInResponse): MsgExitSwapShareAmountInResponseProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.MsgExitSwapShareAmountInResponse",
      value: MsgExitSwapShareAmountInResponse.encode(message).finish()
    };
  }
};
function createBaseMsgExitSwapExternAmountOut(): MsgExitSwapExternAmountOut {
  return {
    sender: "",
    pool_id: BigInt(0),
    token_out: Coin.fromPartial({}),
    share_in_max_amount: ""
  };
}
export const MsgExitSwapExternAmountOut = {
  typeUrl: "/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOut",
  encode(message: MsgExitSwapExternAmountOut, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.pool_id !== BigInt(0)) {
      writer.uint32(16).uint64(message.pool_id);
    }
    if (message.token_out !== undefined) {
      Coin.encode(message.token_out, writer.uint32(26).fork()).ldelim();
    }
    if (message.share_in_max_amount !== "") {
      writer.uint32(34).string(message.share_in_max_amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgExitSwapExternAmountOut {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExitSwapExternAmountOut();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.pool_id = reader.uint64();
          break;
        case 3:
          message.token_out = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.share_in_max_amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgExitSwapExternAmountOut {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      pool_id: isSet(object.pool_id) ? BigInt(object.pool_id.toString()) : BigInt(0),
      token_out: isSet(object.token_out) ? Coin.fromJSON(object.token_out) : undefined,
      share_in_max_amount: isSet(object.share_in_max_amount) ? String(object.share_in_max_amount) : ""
    };
  },
  toJSON(message: MsgExitSwapExternAmountOut): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.pool_id !== undefined && (obj.pool_id = (message.pool_id || BigInt(0)).toString());
    message.token_out !== undefined && (obj.token_out = message.token_out ? Coin.toJSON(message.token_out) : undefined);
    message.share_in_max_amount !== undefined && (obj.share_in_max_amount = message.share_in_max_amount);
    return obj;
  },
  fromPartial(object: Partial<MsgExitSwapExternAmountOut>): MsgExitSwapExternAmountOut {
    const message = createBaseMsgExitSwapExternAmountOut();
    message.sender = object.sender ?? "";
    message.pool_id = object.pool_id !== undefined && object.pool_id !== null ? BigInt(object.pool_id.toString()) : BigInt(0);
    message.token_out = object.token_out !== undefined && object.token_out !== null ? Coin.fromPartial(object.token_out) : undefined;
    message.share_in_max_amount = object.share_in_max_amount ?? "";
    return message;
  },
  fromSDK(object: MsgExitSwapExternAmountOutSDKType): MsgExitSwapExternAmountOut {
    return {
      sender: object?.sender,
      pool_id: object?.pool_id,
      token_out: object.token_out ? Coin.fromSDK(object.token_out) : undefined,
      share_in_max_amount: object?.share_in_max_amount
    };
  },
  toSDK(message: MsgExitSwapExternAmountOut): MsgExitSwapExternAmountOutSDKType {
    const obj: any = {};
    obj.sender = message.sender;
    obj.pool_id = message.pool_id;
    message.token_out !== undefined && (obj.token_out = message.token_out ? Coin.toSDK(message.token_out) : undefined);
    obj.share_in_max_amount = message.share_in_max_amount;
    return obj;
  },
  fromAmino(object: MsgExitSwapExternAmountOutAmino): MsgExitSwapExternAmountOut {
    return {
      sender: object.sender,
      pool_id: BigInt(object.pool_id),
      token_out: object?.token_out ? Coin.fromAmino(object.token_out) : undefined,
      share_in_max_amount: object.share_in_max_amount
    };
  },
  toAmino(message: MsgExitSwapExternAmountOut): MsgExitSwapExternAmountOutAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.pool_id = message.pool_id ? message.pool_id.toString() : undefined;
    obj.token_out = message.token_out ? Coin.toAmino(message.token_out) : undefined;
    obj.share_in_max_amount = message.share_in_max_amount;
    return obj;
  },
  fromAminoMsg(object: MsgExitSwapExternAmountOutAminoMsg): MsgExitSwapExternAmountOut {
    return MsgExitSwapExternAmountOut.fromAmino(object.value);
  },
  toAminoMsg(message: MsgExitSwapExternAmountOut): MsgExitSwapExternAmountOutAminoMsg {
    return {
      type: "osmosis/gamm/exit-swap-extern-amount-out",
      value: MsgExitSwapExternAmountOut.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgExitSwapExternAmountOutProtoMsg): MsgExitSwapExternAmountOut {
    return MsgExitSwapExternAmountOut.decode(message.value);
  },
  toProto(message: MsgExitSwapExternAmountOut): Uint8Array {
    return MsgExitSwapExternAmountOut.encode(message).finish();
  },
  toProtoMsg(message: MsgExitSwapExternAmountOut): MsgExitSwapExternAmountOutProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOut",
      value: MsgExitSwapExternAmountOut.encode(message).finish()
    };
  }
};
function createBaseMsgExitSwapExternAmountOutResponse(): MsgExitSwapExternAmountOutResponse {
  return {
    share_in_amount: ""
  };
}
export const MsgExitSwapExternAmountOutResponse = {
  typeUrl: "/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOutResponse",
  encode(message: MsgExitSwapExternAmountOutResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.share_in_amount !== "") {
      writer.uint32(10).string(message.share_in_amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgExitSwapExternAmountOutResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExitSwapExternAmountOutResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.share_in_amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgExitSwapExternAmountOutResponse {
    return {
      share_in_amount: isSet(object.share_in_amount) ? String(object.share_in_amount) : ""
    };
  },
  toJSON(message: MsgExitSwapExternAmountOutResponse): unknown {
    const obj: any = {};
    message.share_in_amount !== undefined && (obj.share_in_amount = message.share_in_amount);
    return obj;
  },
  fromPartial(object: Partial<MsgExitSwapExternAmountOutResponse>): MsgExitSwapExternAmountOutResponse {
    const message = createBaseMsgExitSwapExternAmountOutResponse();
    message.share_in_amount = object.share_in_amount ?? "";
    return message;
  },
  fromSDK(object: MsgExitSwapExternAmountOutResponseSDKType): MsgExitSwapExternAmountOutResponse {
    return {
      share_in_amount: object?.share_in_amount
    };
  },
  toSDK(message: MsgExitSwapExternAmountOutResponse): MsgExitSwapExternAmountOutResponseSDKType {
    const obj: any = {};
    obj.share_in_amount = message.share_in_amount;
    return obj;
  },
  fromAmino(object: MsgExitSwapExternAmountOutResponseAmino): MsgExitSwapExternAmountOutResponse {
    return {
      share_in_amount: object.share_in_amount
    };
  },
  toAmino(message: MsgExitSwapExternAmountOutResponse): MsgExitSwapExternAmountOutResponseAmino {
    const obj: any = {};
    obj.share_in_amount = message.share_in_amount;
    return obj;
  },
  fromAminoMsg(object: MsgExitSwapExternAmountOutResponseAminoMsg): MsgExitSwapExternAmountOutResponse {
    return MsgExitSwapExternAmountOutResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgExitSwapExternAmountOutResponse): MsgExitSwapExternAmountOutResponseAminoMsg {
    return {
      type: "osmosis/gamm/exit-swap-extern-amount-out-response",
      value: MsgExitSwapExternAmountOutResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgExitSwapExternAmountOutResponseProtoMsg): MsgExitSwapExternAmountOutResponse {
    return MsgExitSwapExternAmountOutResponse.decode(message.value);
  },
  toProto(message: MsgExitSwapExternAmountOutResponse): Uint8Array {
    return MsgExitSwapExternAmountOutResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgExitSwapExternAmountOutResponse): MsgExitSwapExternAmountOutResponseProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOutResponse",
      value: MsgExitSwapExternAmountOutResponse.encode(message).finish()
    };
  }
};
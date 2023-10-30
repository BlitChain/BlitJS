//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** PoolType is an enumeration of all supported pool types. */
export enum PoolType {
  /** Balancer - Balancer is the standard xy=k curve. Its pool model is defined in x/gamm. */
  Balancer = 0,
  /**
   * Stableswap - Stableswap is the Solidly cfmm stable swap curve. Its pool model is defined
   * in x/gamm.
   */
  Stableswap = 1,
  /**
   * Concentrated - Concentrated is the pool model specific to concentrated liquidity. It is
   * defined in x/concentrated-liquidity.
   */
  Concentrated = 2,
  UNRECOGNIZED = -1,
}
export const PoolTypeSDKType = PoolType;
export const PoolTypeAmino = PoolType;
export function poolTypeFromJSON(object: any): PoolType {
  switch (object) {
    case 0:
    case "Balancer":
      return PoolType.Balancer;
    case 1:
    case "Stableswap":
      return PoolType.Stableswap;
    case 2:
    case "Concentrated":
      return PoolType.Concentrated;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PoolType.UNRECOGNIZED;
  }
}
export function poolTypeToJSON(object: PoolType): string {
  switch (object) {
    case PoolType.Balancer:
      return "Balancer";
    case PoolType.Stableswap:
      return "Stableswap";
    case PoolType.Concentrated:
      return "Concentrated";
    case PoolType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * ModuleRouter defines a route encapsulating pool type.
 * It is used as the value of a mapping from pool id to the pool type,
 * allowing the swap router to know which module to route swaps to given the
 * pool id.
 */
export interface ModuleRoute {
  /** pool_type specifies the type of the pool */
  pool_type: PoolType;
}
export interface ModuleRouteProtoMsg {
  type_url: "/osmosis.swaprouter.v1beta1.ModuleRoute";
  value: Uint8Array;
}
export interface ModuleRouteProtoMsg {
  type_url: "/osmosis.swaprouter.v1beta1.ModuleRoute";
  value: Uint8Array;
}
/**
 * ModuleRouter defines a route encapsulating pool type.
 * It is used as the value of a mapping from pool id to the pool type,
 * allowing the swap router to know which module to route swaps to given the
 * pool id.
 */
export interface ModuleRouteAmino {
  /** pool_type specifies the type of the pool */
  pool_type: PoolType;
}
export interface ModuleRouteAminoMsg {
  type: "osmosis/swaprouter/module-route";
  value: ModuleRouteAmino;
}
/**
 * ModuleRouter defines a route encapsulating pool type.
 * It is used as the value of a mapping from pool id to the pool type,
 * allowing the swap router to know which module to route swaps to given the
 * pool id.
 */
export interface ModuleRouteSDKType {
  pool_type: PoolType;
}
function createBaseModuleRoute(): ModuleRoute {
  return {
    pool_type: 0
  };
}
export const ModuleRoute = {
  typeUrl: "/osmosis.swaprouter.v1beta1.ModuleRoute",
  encode(message: ModuleRoute, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pool_type !== 0) {
      writer.uint32(8).int32(message.pool_type);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ModuleRoute {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModuleRoute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool_type = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ModuleRoute {
    return {
      pool_type: isSet(object.pool_type) ? poolTypeFromJSON(object.pool_type) : -1
    };
  },
  toJSON(message: ModuleRoute): unknown {
    const obj: any = {};
    message.pool_type !== undefined && (obj.pool_type = poolTypeToJSON(message.pool_type));
    return obj;
  },
  fromPartial(object: Partial<ModuleRoute>): ModuleRoute {
    const message = createBaseModuleRoute();
    message.pool_type = object.pool_type ?? 0;
    return message;
  },
  fromSDK(object: ModuleRouteSDKType): ModuleRoute {
    return {
      pool_type: isSet(object.pool_type) ? poolTypeFromJSON(object.pool_type) : -1
    };
  },
  toSDK(message: ModuleRoute): ModuleRouteSDKType {
    const obj: any = {};
    message.pool_type !== undefined && (obj.pool_type = poolTypeToJSON(message.pool_type));
    return obj;
  },
  fromAmino(object: ModuleRouteAmino): ModuleRoute {
    return {
      pool_type: isSet(object.pool_type) ? poolTypeFromJSON(object.pool_type) : -1
    };
  },
  toAmino(message: ModuleRoute): ModuleRouteAmino {
    const obj: any = {};
    obj.pool_type = message.pool_type;
    return obj;
  },
  fromAminoMsg(object: ModuleRouteAminoMsg): ModuleRoute {
    return ModuleRoute.fromAmino(object.value);
  },
  toAminoMsg(message: ModuleRoute): ModuleRouteAminoMsg {
    return {
      type: "osmosis/swaprouter/module-route",
      value: ModuleRoute.toAmino(message)
    };
  },
  fromProtoMsg(message: ModuleRouteProtoMsg): ModuleRoute {
    return ModuleRoute.decode(message.value);
  },
  toProto(message: ModuleRoute): Uint8Array {
    return ModuleRoute.encode(message).finish();
  },
  toProtoMsg(message: ModuleRoute): ModuleRouteProtoMsg {
    return {
      typeUrl: "/osmosis.swaprouter.v1beta1.ModuleRoute",
      value: ModuleRoute.encode(message).finish()
    };
  }
};
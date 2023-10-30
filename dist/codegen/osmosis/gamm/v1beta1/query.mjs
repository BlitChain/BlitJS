//@ts-nocheck
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { SwapAmountInRoute, SwapAmountOutRoute } from "./tx";
import { Any } from "../../../google/protobuf/any";
import { Pool as Pool1 } from "../pool-models/balancer/balancerPool";
import { Pool as Pool2 } from "../pool-models/stableswap/stableswap_pool";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
function createBaseQueryPoolRequest() {
    return {
        pool_id: BigInt(0)
    };
}
export const QueryPoolRequest = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryPoolRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.pool_id !== BigInt(0)) {
            writer.uint32(8).uint64(message.pool_id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pool_id = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            pool_id: isSet(object.pool_id) ? BigInt(object.pool_id.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.pool_id !== undefined && (obj.pool_id = (message.pool_id || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryPoolRequest();
        message.pool_id = object.pool_id !== undefined && object.pool_id !== null ? BigInt(object.pool_id.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            pool_id: object?.pool_id
        };
    },
    toSDK(message) {
        const obj = {};
        obj.pool_id = message.pool_id;
        return obj;
    },
    fromAmino(object) {
        return {
            pool_id: BigInt(object.pool_id)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id = message.pool_id ? message.pool_id.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryPoolRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-pool-request",
            value: QueryPoolRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryPoolRequest.decode(message.value);
    },
    toProto(message) {
        return QueryPoolRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QueryPoolRequest",
            value: QueryPoolRequest.encode(message).finish()
        };
    }
};
function createBaseQueryPoolResponse() {
    return {
        pool: undefined
    };
}
export const QueryPoolResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryPoolResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.pool !== undefined) {
            Any.encode(message.pool, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pool = PoolI_InterfaceDecoder(reader);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            pool: isSet(object.pool) ? Any.fromJSON(object.pool) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.pool !== undefined && (obj.pool = message.pool ? Any.toJSON(message.pool) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryPoolResponse();
        message.pool = object.pool !== undefined && object.pool !== null ? Any.fromPartial(object.pool) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            pool: object.pool ? Any.fromSDK(object.pool) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.pool !== undefined && (obj.pool = message.pool ? Any.toSDK(message.pool) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            pool: object?.pool ? PoolI_FromAmino(object.pool) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pool = message.pool ? PoolI_ToAmino(message.pool) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryPoolResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-pool-response",
            value: QueryPoolResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryPoolResponse.decode(message.value);
    },
    toProto(message) {
        return QueryPoolResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QueryPoolResponse",
            value: QueryPoolResponse.encode(message).finish()
        };
    }
};
function createBaseQueryPoolsRequest() {
    return {
        pagination: undefined
    };
}
export const QueryPoolsRequest = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryPoolsRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryPoolsRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryPoolsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-pools-request",
            value: QueryPoolsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryPoolsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryPoolsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QueryPoolsRequest",
            value: QueryPoolsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryPoolsResponse() {
    return {
        pools: [],
        pagination: undefined
    };
}
export const QueryPoolsResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryPoolsResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.pools) {
            Any.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pools.push(PoolI_InterfaceDecoder(reader));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            pools: Array.isArray(object?.pools) ? object.pools.map((e) => Any.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.pools) {
            obj.pools = message.pools.map(e => e ? Any.toJSON(e) : undefined);
        }
        else {
            obj.pools = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryPoolsResponse();
        message.pools = object.pools?.map(e => Any.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            pools: Array.isArray(object?.pools) ? object.pools.map((e) => Any.fromSDK(e)) : [],
            pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.pools) {
            obj.pools = message.pools.map(e => e ? Any.toSDK(e) : undefined);
        }
        else {
            obj.pools = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            pools: Array.isArray(object?.pools) ? object.pools.map((e) => PoolI_FromAmino(e)) : [],
            pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.pools) {
            obj.pools = message.pools.map(e => e ? PoolI_ToAmino(e) : undefined);
        }
        else {
            obj.pools = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryPoolsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-pools-response",
            value: QueryPoolsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryPoolsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryPoolsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QueryPoolsResponse",
            value: QueryPoolsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryNumPoolsRequest() {
    return {};
}
export const QueryNumPoolsRequest = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryNumPoolsRequest",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryNumPoolsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseQueryNumPoolsRequest();
        return message;
    },
    fromSDK(_) {
        return {};
    },
    toSDK(_) {
        const obj = {};
        return obj;
    },
    fromAmino(_) {
        return {};
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryNumPoolsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-num-pools-request",
            value: QueryNumPoolsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryNumPoolsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryNumPoolsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QueryNumPoolsRequest",
            value: QueryNumPoolsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryNumPoolsResponse() {
    return {
        num_pools: BigInt(0)
    };
}
export const QueryNumPoolsResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryNumPoolsResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.num_pools !== BigInt(0)) {
            writer.uint32(8).uint64(message.num_pools);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryNumPoolsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.num_pools = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            num_pools: isSet(object.num_pools) ? BigInt(object.num_pools.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.num_pools !== undefined && (obj.num_pools = (message.num_pools || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryNumPoolsResponse();
        message.num_pools = object.num_pools !== undefined && object.num_pools !== null ? BigInt(object.num_pools.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            num_pools: object?.num_pools
        };
    },
    toSDK(message) {
        const obj = {};
        obj.num_pools = message.num_pools;
        return obj;
    },
    fromAmino(object) {
        return {
            num_pools: BigInt(object.num_pools)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.num_pools = message.num_pools ? message.num_pools.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryNumPoolsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-num-pools-response",
            value: QueryNumPoolsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryNumPoolsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryNumPoolsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QueryNumPoolsResponse",
            value: QueryNumPoolsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryPoolTypeRequest() {
    return {
        pool_id: BigInt(0)
    };
}
export const QueryPoolTypeRequest = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryPoolTypeRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.pool_id !== BigInt(0)) {
            writer.uint32(8).uint64(message.pool_id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolTypeRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pool_id = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            pool_id: isSet(object.pool_id) ? BigInt(object.pool_id.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.pool_id !== undefined && (obj.pool_id = (message.pool_id || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryPoolTypeRequest();
        message.pool_id = object.pool_id !== undefined && object.pool_id !== null ? BigInt(object.pool_id.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            pool_id: object?.pool_id
        };
    },
    toSDK(message) {
        const obj = {};
        obj.pool_id = message.pool_id;
        return obj;
    },
    fromAmino(object) {
        return {
            pool_id: BigInt(object.pool_id)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id = message.pool_id ? message.pool_id.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryPoolTypeRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-pool-type-request",
            value: QueryPoolTypeRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryPoolTypeRequest.decode(message.value);
    },
    toProto(message) {
        return QueryPoolTypeRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QueryPoolTypeRequest",
            value: QueryPoolTypeRequest.encode(message).finish()
        };
    }
};
function createBaseQueryPoolTypeResponse() {
    return {
        pool_type: ""
    };
}
export const QueryPoolTypeResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryPoolTypeResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.pool_type !== "") {
            writer.uint32(10).string(message.pool_type);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolTypeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pool_type = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            pool_type: isSet(object.pool_type) ? String(object.pool_type) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.pool_type !== undefined && (obj.pool_type = message.pool_type);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryPoolTypeResponse();
        message.pool_type = object.pool_type ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            pool_type: object?.pool_type
        };
    },
    toSDK(message) {
        const obj = {};
        obj.pool_type = message.pool_type;
        return obj;
    },
    fromAmino(object) {
        return {
            pool_type: object.pool_type
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pool_type = message.pool_type;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryPoolTypeResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-pool-type-response",
            value: QueryPoolTypeResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryPoolTypeResponse.decode(message.value);
    },
    toProto(message) {
        return QueryPoolTypeResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QueryPoolTypeResponse",
            value: QueryPoolTypeResponse.encode(message).finish()
        };
    }
};
function createBaseQueryCalcJoinPoolSharesRequest() {
    return {
        pool_id: BigInt(0),
        tokens_in: []
    };
}
export const QueryCalcJoinPoolSharesRequest = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryCalcJoinPoolSharesRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.pool_id !== BigInt(0)) {
            writer.uint32(8).uint64(message.pool_id);
        }
        for (const v of message.tokens_in) {
            Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCalcJoinPoolSharesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pool_id = reader.uint64();
                    break;
                case 2:
                    message.tokens_in.push(Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            pool_id: isSet(object.pool_id) ? BigInt(object.pool_id.toString()) : BigInt(0),
            tokens_in: Array.isArray(object?.tokens_in) ? object.tokens_in.map((e) => Coin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.pool_id !== undefined && (obj.pool_id = (message.pool_id || BigInt(0)).toString());
        if (message.tokens_in) {
            obj.tokens_in = message.tokens_in.map(e => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.tokens_in = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryCalcJoinPoolSharesRequest();
        message.pool_id = object.pool_id !== undefined && object.pool_id !== null ? BigInt(object.pool_id.toString()) : BigInt(0);
        message.tokens_in = object.tokens_in?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            pool_id: object?.pool_id,
            tokens_in: Array.isArray(object?.tokens_in) ? object.tokens_in.map((e) => Coin.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.pool_id = message.pool_id;
        if (message.tokens_in) {
            obj.tokens_in = message.tokens_in.map(e => e ? Coin.toSDK(e) : undefined);
        }
        else {
            obj.tokens_in = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            pool_id: BigInt(object.pool_id),
            tokens_in: Array.isArray(object?.tokens_in) ? object.tokens_in.map((e) => Coin.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id = message.pool_id ? message.pool_id.toString() : undefined;
        if (message.tokens_in) {
            obj.tokens_in = message.tokens_in.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.tokens_in = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryCalcJoinPoolSharesRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-calc-join-pool-shares-request",
            value: QueryCalcJoinPoolSharesRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryCalcJoinPoolSharesRequest.decode(message.value);
    },
    toProto(message) {
        return QueryCalcJoinPoolSharesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QueryCalcJoinPoolSharesRequest",
            value: QueryCalcJoinPoolSharesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryCalcJoinPoolSharesResponse() {
    return {
        share_out_amount: "",
        tokens_out: []
    };
}
export const QueryCalcJoinPoolSharesResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryCalcJoinPoolSharesResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.share_out_amount !== "") {
            writer.uint32(10).string(message.share_out_amount);
        }
        for (const v of message.tokens_out) {
            Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCalcJoinPoolSharesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.share_out_amount = reader.string();
                    break;
                case 2:
                    message.tokens_out.push(Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            share_out_amount: isSet(object.share_out_amount) ? String(object.share_out_amount) : "",
            tokens_out: Array.isArray(object?.tokens_out) ? object.tokens_out.map((e) => Coin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.share_out_amount !== undefined && (obj.share_out_amount = message.share_out_amount);
        if (message.tokens_out) {
            obj.tokens_out = message.tokens_out.map(e => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.tokens_out = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryCalcJoinPoolSharesResponse();
        message.share_out_amount = object.share_out_amount ?? "";
        message.tokens_out = object.tokens_out?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            share_out_amount: object?.share_out_amount,
            tokens_out: Array.isArray(object?.tokens_out) ? object.tokens_out.map((e) => Coin.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.share_out_amount = message.share_out_amount;
        if (message.tokens_out) {
            obj.tokens_out = message.tokens_out.map(e => e ? Coin.toSDK(e) : undefined);
        }
        else {
            obj.tokens_out = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            share_out_amount: object.share_out_amount,
            tokens_out: Array.isArray(object?.tokens_out) ? object.tokens_out.map((e) => Coin.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.share_out_amount = message.share_out_amount;
        if (message.tokens_out) {
            obj.tokens_out = message.tokens_out.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.tokens_out = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryCalcJoinPoolSharesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-calc-join-pool-shares-response",
            value: QueryCalcJoinPoolSharesResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryCalcJoinPoolSharesResponse.decode(message.value);
    },
    toProto(message) {
        return QueryCalcJoinPoolSharesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QueryCalcJoinPoolSharesResponse",
            value: QueryCalcJoinPoolSharesResponse.encode(message).finish()
        };
    }
};
function createBaseQueryCalcExitPoolCoinsFromSharesRequest() {
    return {
        pool_id: BigInt(0),
        share_in_amount: ""
    };
}
export const QueryCalcExitPoolCoinsFromSharesRequest = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryCalcExitPoolCoinsFromSharesRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.pool_id !== BigInt(0)) {
            writer.uint32(8).uint64(message.pool_id);
        }
        if (message.share_in_amount !== "") {
            writer.uint32(18).string(message.share_in_amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCalcExitPoolCoinsFromSharesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pool_id = reader.uint64();
                    break;
                case 2:
                    message.share_in_amount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            pool_id: isSet(object.pool_id) ? BigInt(object.pool_id.toString()) : BigInt(0),
            share_in_amount: isSet(object.share_in_amount) ? String(object.share_in_amount) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.pool_id !== undefined && (obj.pool_id = (message.pool_id || BigInt(0)).toString());
        message.share_in_amount !== undefined && (obj.share_in_amount = message.share_in_amount);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryCalcExitPoolCoinsFromSharesRequest();
        message.pool_id = object.pool_id !== undefined && object.pool_id !== null ? BigInt(object.pool_id.toString()) : BigInt(0);
        message.share_in_amount = object.share_in_amount ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            pool_id: object?.pool_id,
            share_in_amount: object?.share_in_amount
        };
    },
    toSDK(message) {
        const obj = {};
        obj.pool_id = message.pool_id;
        obj.share_in_amount = message.share_in_amount;
        return obj;
    },
    fromAmino(object) {
        return {
            pool_id: BigInt(object.pool_id),
            share_in_amount: object.share_in_amount
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id = message.pool_id ? message.pool_id.toString() : undefined;
        obj.share_in_amount = message.share_in_amount;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryCalcExitPoolCoinsFromSharesRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-calc-exit-pool-coins-from-shares-request",
            value: QueryCalcExitPoolCoinsFromSharesRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryCalcExitPoolCoinsFromSharesRequest.decode(message.value);
    },
    toProto(message) {
        return QueryCalcExitPoolCoinsFromSharesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QueryCalcExitPoolCoinsFromSharesRequest",
            value: QueryCalcExitPoolCoinsFromSharesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryCalcExitPoolCoinsFromSharesResponse() {
    return {
        tokens_out: []
    };
}
export const QueryCalcExitPoolCoinsFromSharesResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryCalcExitPoolCoinsFromSharesResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.tokens_out) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCalcExitPoolCoinsFromSharesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tokens_out.push(Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            tokens_out: Array.isArray(object?.tokens_out) ? object.tokens_out.map((e) => Coin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.tokens_out) {
            obj.tokens_out = message.tokens_out.map(e => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.tokens_out = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryCalcExitPoolCoinsFromSharesResponse();
        message.tokens_out = object.tokens_out?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            tokens_out: Array.isArray(object?.tokens_out) ? object.tokens_out.map((e) => Coin.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.tokens_out) {
            obj.tokens_out = message.tokens_out.map(e => e ? Coin.toSDK(e) : undefined);
        }
        else {
            obj.tokens_out = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            tokens_out: Array.isArray(object?.tokens_out) ? object.tokens_out.map((e) => Coin.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.tokens_out) {
            obj.tokens_out = message.tokens_out.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.tokens_out = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryCalcExitPoolCoinsFromSharesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-calc-exit-pool-coins-from-shares-response",
            value: QueryCalcExitPoolCoinsFromSharesResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryCalcExitPoolCoinsFromSharesResponse.decode(message.value);
    },
    toProto(message) {
        return QueryCalcExitPoolCoinsFromSharesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QueryCalcExitPoolCoinsFromSharesResponse",
            value: QueryCalcExitPoolCoinsFromSharesResponse.encode(message).finish()
        };
    }
};
function createBaseQueryPoolParamsRequest() {
    return {
        pool_id: BigInt(0)
    };
}
export const QueryPoolParamsRequest = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryPoolParamsRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.pool_id !== BigInt(0)) {
            writer.uint32(8).uint64(message.pool_id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolParamsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pool_id = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            pool_id: isSet(object.pool_id) ? BigInt(object.pool_id.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.pool_id !== undefined && (obj.pool_id = (message.pool_id || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryPoolParamsRequest();
        message.pool_id = object.pool_id !== undefined && object.pool_id !== null ? BigInt(object.pool_id.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            pool_id: object?.pool_id
        };
    },
    toSDK(message) {
        const obj = {};
        obj.pool_id = message.pool_id;
        return obj;
    },
    fromAmino(object) {
        return {
            pool_id: BigInt(object.pool_id)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id = message.pool_id ? message.pool_id.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryPoolParamsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-pool-params-request",
            value: QueryPoolParamsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryPoolParamsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryPoolParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QueryPoolParamsRequest",
            value: QueryPoolParamsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryPoolParamsResponse() {
    return {
        params: undefined
    };
}
export const QueryPoolParamsResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryPoolParamsResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.params !== undefined) {
            Any.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = Any.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            params: isSet(object.params) ? Any.fromJSON(object.params) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? Any.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryPoolParamsResponse();
        message.params = object.params !== undefined && object.params !== null ? Any.fromPartial(object.params) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            params: object.params ? Any.fromSDK(object.params) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? Any.toSDK(message.params) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            params: object?.params ? Any.fromAmino(object.params) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? Any.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryPoolParamsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-pool-params-response",
            value: QueryPoolParamsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryPoolParamsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryPoolParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QueryPoolParamsResponse",
            value: QueryPoolParamsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryTotalPoolLiquidityRequest() {
    return {
        pool_id: BigInt(0)
    };
}
export const QueryTotalPoolLiquidityRequest = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryTotalPoolLiquidityRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.pool_id !== BigInt(0)) {
            writer.uint32(8).uint64(message.pool_id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTotalPoolLiquidityRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pool_id = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            pool_id: isSet(object.pool_id) ? BigInt(object.pool_id.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.pool_id !== undefined && (obj.pool_id = (message.pool_id || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryTotalPoolLiquidityRequest();
        message.pool_id = object.pool_id !== undefined && object.pool_id !== null ? BigInt(object.pool_id.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            pool_id: object?.pool_id
        };
    },
    toSDK(message) {
        const obj = {};
        obj.pool_id = message.pool_id;
        return obj;
    },
    fromAmino(object) {
        return {
            pool_id: BigInt(object.pool_id)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id = message.pool_id ? message.pool_id.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryTotalPoolLiquidityRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-total-pool-liquidity-request",
            value: QueryTotalPoolLiquidityRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryTotalPoolLiquidityRequest.decode(message.value);
    },
    toProto(message) {
        return QueryTotalPoolLiquidityRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QueryTotalPoolLiquidityRequest",
            value: QueryTotalPoolLiquidityRequest.encode(message).finish()
        };
    }
};
function createBaseQueryTotalPoolLiquidityResponse() {
    return {
        liquidity: []
    };
}
export const QueryTotalPoolLiquidityResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryTotalPoolLiquidityResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.liquidity) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTotalPoolLiquidityResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.liquidity.push(Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            liquidity: Array.isArray(object?.liquidity) ? object.liquidity.map((e) => Coin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.liquidity) {
            obj.liquidity = message.liquidity.map(e => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.liquidity = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryTotalPoolLiquidityResponse();
        message.liquidity = object.liquidity?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            liquidity: Array.isArray(object?.liquidity) ? object.liquidity.map((e) => Coin.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.liquidity) {
            obj.liquidity = message.liquidity.map(e => e ? Coin.toSDK(e) : undefined);
        }
        else {
            obj.liquidity = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            liquidity: Array.isArray(object?.liquidity) ? object.liquidity.map((e) => Coin.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.liquidity) {
            obj.liquidity = message.liquidity.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.liquidity = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryTotalPoolLiquidityResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-total-pool-liquidity-response",
            value: QueryTotalPoolLiquidityResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryTotalPoolLiquidityResponse.decode(message.value);
    },
    toProto(message) {
        return QueryTotalPoolLiquidityResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QueryTotalPoolLiquidityResponse",
            value: QueryTotalPoolLiquidityResponse.encode(message).finish()
        };
    }
};
function createBaseQueryTotalSharesRequest() {
    return {
        pool_id: BigInt(0)
    };
}
export const QueryTotalSharesRequest = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryTotalSharesRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.pool_id !== BigInt(0)) {
            writer.uint32(8).uint64(message.pool_id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTotalSharesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pool_id = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            pool_id: isSet(object.pool_id) ? BigInt(object.pool_id.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.pool_id !== undefined && (obj.pool_id = (message.pool_id || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryTotalSharesRequest();
        message.pool_id = object.pool_id !== undefined && object.pool_id !== null ? BigInt(object.pool_id.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            pool_id: object?.pool_id
        };
    },
    toSDK(message) {
        const obj = {};
        obj.pool_id = message.pool_id;
        return obj;
    },
    fromAmino(object) {
        return {
            pool_id: BigInt(object.pool_id)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id = message.pool_id ? message.pool_id.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryTotalSharesRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-total-shares-request",
            value: QueryTotalSharesRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryTotalSharesRequest.decode(message.value);
    },
    toProto(message) {
        return QueryTotalSharesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QueryTotalSharesRequest",
            value: QueryTotalSharesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryTotalSharesResponse() {
    return {
        total_shares: Coin.fromPartial({})
    };
}
export const QueryTotalSharesResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryTotalSharesResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.total_shares !== undefined) {
            Coin.encode(message.total_shares, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTotalSharesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.total_shares = Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            total_shares: isSet(object.total_shares) ? Coin.fromJSON(object.total_shares) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.total_shares !== undefined && (obj.total_shares = message.total_shares ? Coin.toJSON(message.total_shares) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryTotalSharesResponse();
        message.total_shares = object.total_shares !== undefined && object.total_shares !== null ? Coin.fromPartial(object.total_shares) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            total_shares: object.total_shares ? Coin.fromSDK(object.total_shares) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.total_shares !== undefined && (obj.total_shares = message.total_shares ? Coin.toSDK(message.total_shares) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            total_shares: object?.total_shares ? Coin.fromAmino(object.total_shares) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.total_shares = message.total_shares ? Coin.toAmino(message.total_shares) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryTotalSharesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-total-shares-response",
            value: QueryTotalSharesResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryTotalSharesResponse.decode(message.value);
    },
    toProto(message) {
        return QueryTotalSharesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QueryTotalSharesResponse",
            value: QueryTotalSharesResponse.encode(message).finish()
        };
    }
};
function createBaseQueryCalcJoinPoolNoSwapSharesRequest() {
    return {
        pool_id: BigInt(0),
        tokens_in: []
    };
}
export const QueryCalcJoinPoolNoSwapSharesRequest = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryCalcJoinPoolNoSwapSharesRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.pool_id !== BigInt(0)) {
            writer.uint32(8).uint64(message.pool_id);
        }
        for (const v of message.tokens_in) {
            Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCalcJoinPoolNoSwapSharesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pool_id = reader.uint64();
                    break;
                case 2:
                    message.tokens_in.push(Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            pool_id: isSet(object.pool_id) ? BigInt(object.pool_id.toString()) : BigInt(0),
            tokens_in: Array.isArray(object?.tokens_in) ? object.tokens_in.map((e) => Coin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.pool_id !== undefined && (obj.pool_id = (message.pool_id || BigInt(0)).toString());
        if (message.tokens_in) {
            obj.tokens_in = message.tokens_in.map(e => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.tokens_in = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryCalcJoinPoolNoSwapSharesRequest();
        message.pool_id = object.pool_id !== undefined && object.pool_id !== null ? BigInt(object.pool_id.toString()) : BigInt(0);
        message.tokens_in = object.tokens_in?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            pool_id: object?.pool_id,
            tokens_in: Array.isArray(object?.tokens_in) ? object.tokens_in.map((e) => Coin.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.pool_id = message.pool_id;
        if (message.tokens_in) {
            obj.tokens_in = message.tokens_in.map(e => e ? Coin.toSDK(e) : undefined);
        }
        else {
            obj.tokens_in = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            pool_id: BigInt(object.pool_id),
            tokens_in: Array.isArray(object?.tokens_in) ? object.tokens_in.map((e) => Coin.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id = message.pool_id ? message.pool_id.toString() : undefined;
        if (message.tokens_in) {
            obj.tokens_in = message.tokens_in.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.tokens_in = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryCalcJoinPoolNoSwapSharesRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-calc-join-pool-no-swap-shares-request",
            value: QueryCalcJoinPoolNoSwapSharesRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryCalcJoinPoolNoSwapSharesRequest.decode(message.value);
    },
    toProto(message) {
        return QueryCalcJoinPoolNoSwapSharesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QueryCalcJoinPoolNoSwapSharesRequest",
            value: QueryCalcJoinPoolNoSwapSharesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryCalcJoinPoolNoSwapSharesResponse() {
    return {
        tokens_out: [],
        shares_out: ""
    };
}
export const QueryCalcJoinPoolNoSwapSharesResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryCalcJoinPoolNoSwapSharesResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.tokens_out) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.shares_out !== "") {
            writer.uint32(18).string(message.shares_out);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCalcJoinPoolNoSwapSharesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tokens_out.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.shares_out = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            tokens_out: Array.isArray(object?.tokens_out) ? object.tokens_out.map((e) => Coin.fromJSON(e)) : [],
            shares_out: isSet(object.shares_out) ? String(object.shares_out) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.tokens_out) {
            obj.tokens_out = message.tokens_out.map(e => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.tokens_out = [];
        }
        message.shares_out !== undefined && (obj.shares_out = message.shares_out);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryCalcJoinPoolNoSwapSharesResponse();
        message.tokens_out = object.tokens_out?.map(e => Coin.fromPartial(e)) || [];
        message.shares_out = object.shares_out ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            tokens_out: Array.isArray(object?.tokens_out) ? object.tokens_out.map((e) => Coin.fromSDK(e)) : [],
            shares_out: object?.shares_out
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.tokens_out) {
            obj.tokens_out = message.tokens_out.map(e => e ? Coin.toSDK(e) : undefined);
        }
        else {
            obj.tokens_out = [];
        }
        obj.shares_out = message.shares_out;
        return obj;
    },
    fromAmino(object) {
        return {
            tokens_out: Array.isArray(object?.tokens_out) ? object.tokens_out.map((e) => Coin.fromAmino(e)) : [],
            shares_out: object.shares_out
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.tokens_out) {
            obj.tokens_out = message.tokens_out.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.tokens_out = [];
        }
        obj.shares_out = message.shares_out;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryCalcJoinPoolNoSwapSharesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-calc-join-pool-no-swap-shares-response",
            value: QueryCalcJoinPoolNoSwapSharesResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryCalcJoinPoolNoSwapSharesResponse.decode(message.value);
    },
    toProto(message) {
        return QueryCalcJoinPoolNoSwapSharesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QueryCalcJoinPoolNoSwapSharesResponse",
            value: QueryCalcJoinPoolNoSwapSharesResponse.encode(message).finish()
        };
    }
};
function createBaseQuerySpotPriceRequest() {
    return {
        pool_id: BigInt(0),
        base_asset_denom: "",
        quote_asset_denom: ""
    };
}
export const QuerySpotPriceRequest = {
    typeUrl: "/osmosis.gamm.v1beta1.QuerySpotPriceRequest",
    encode(message, writer = BinaryWriter.create()) {
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
    decode(input, length) {
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
    fromJSON(object) {
        return {
            pool_id: isSet(object.pool_id) ? BigInt(object.pool_id.toString()) : BigInt(0),
            base_asset_denom: isSet(object.base_asset_denom) ? String(object.base_asset_denom) : "",
            quote_asset_denom: isSet(object.quote_asset_denom) ? String(object.quote_asset_denom) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.pool_id !== undefined && (obj.pool_id = (message.pool_id || BigInt(0)).toString());
        message.base_asset_denom !== undefined && (obj.base_asset_denom = message.base_asset_denom);
        message.quote_asset_denom !== undefined && (obj.quote_asset_denom = message.quote_asset_denom);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQuerySpotPriceRequest();
        message.pool_id = object.pool_id !== undefined && object.pool_id !== null ? BigInt(object.pool_id.toString()) : BigInt(0);
        message.base_asset_denom = object.base_asset_denom ?? "";
        message.quote_asset_denom = object.quote_asset_denom ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            pool_id: object?.pool_id,
            base_asset_denom: object?.base_asset_denom,
            quote_asset_denom: object?.quote_asset_denom
        };
    },
    toSDK(message) {
        const obj = {};
        obj.pool_id = message.pool_id;
        obj.base_asset_denom = message.base_asset_denom;
        obj.quote_asset_denom = message.quote_asset_denom;
        return obj;
    },
    fromAmino(object) {
        return {
            pool_id: BigInt(object.pool_id),
            base_asset_denom: object.base_asset_denom,
            quote_asset_denom: object.quote_asset_denom
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id = message.pool_id ? message.pool_id.toString() : undefined;
        obj.base_asset_denom = message.base_asset_denom;
        obj.quote_asset_denom = message.quote_asset_denom;
        return obj;
    },
    fromAminoMsg(object) {
        return QuerySpotPriceRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-spot-price-request",
            value: QuerySpotPriceRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QuerySpotPriceRequest.decode(message.value);
    },
    toProto(message) {
        return QuerySpotPriceRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QuerySpotPriceRequest",
            value: QuerySpotPriceRequest.encode(message).finish()
        };
    }
};
function createBaseQueryPoolsWithFilterRequest() {
    return {
        min_liquidity: [],
        pool_type: "",
        pagination: undefined
    };
}
export const QueryPoolsWithFilterRequest = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryPoolsWithFilterRequest",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.min_liquidity) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pool_type !== "") {
            writer.uint32(18).string(message.pool_type);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolsWithFilterRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.min_liquidity.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pool_type = reader.string();
                    break;
                case 3:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            min_liquidity: Array.isArray(object?.min_liquidity) ? object.min_liquidity.map((e) => Coin.fromJSON(e)) : [],
            pool_type: isSet(object.pool_type) ? String(object.pool_type) : "",
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.min_liquidity) {
            obj.min_liquidity = message.min_liquidity.map(e => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.min_liquidity = [];
        }
        message.pool_type !== undefined && (obj.pool_type = message.pool_type);
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryPoolsWithFilterRequest();
        message.min_liquidity = object.min_liquidity?.map(e => Coin.fromPartial(e)) || [];
        message.pool_type = object.pool_type ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            min_liquidity: Array.isArray(object?.min_liquidity) ? object.min_liquidity.map((e) => Coin.fromSDK(e)) : [],
            pool_type: object?.pool_type,
            pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.min_liquidity) {
            obj.min_liquidity = message.min_liquidity.map(e => e ? Coin.toSDK(e) : undefined);
        }
        else {
            obj.min_liquidity = [];
        }
        obj.pool_type = message.pool_type;
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            min_liquidity: Array.isArray(object?.min_liquidity) ? object.min_liquidity.map((e) => Coin.fromAmino(e)) : [],
            pool_type: object.pool_type,
            pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.min_liquidity) {
            obj.min_liquidity = message.min_liquidity.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.min_liquidity = [];
        }
        obj.pool_type = message.pool_type;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryPoolsWithFilterRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-pools-with-filter-request",
            value: QueryPoolsWithFilterRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryPoolsWithFilterRequest.decode(message.value);
    },
    toProto(message) {
        return QueryPoolsWithFilterRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QueryPoolsWithFilterRequest",
            value: QueryPoolsWithFilterRequest.encode(message).finish()
        };
    }
};
function createBaseQueryPoolsWithFilterResponse() {
    return {
        pools: [],
        pagination: undefined
    };
}
export const QueryPoolsWithFilterResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryPoolsWithFilterResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.pools) {
            Any.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolsWithFilterResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pools.push(PoolI_InterfaceDecoder(reader));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            pools: Array.isArray(object?.pools) ? object.pools.map((e) => Any.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.pools) {
            obj.pools = message.pools.map(e => e ? Any.toJSON(e) : undefined);
        }
        else {
            obj.pools = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryPoolsWithFilterResponse();
        message.pools = object.pools?.map(e => Any.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            pools: Array.isArray(object?.pools) ? object.pools.map((e) => Any.fromSDK(e)) : [],
            pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.pools) {
            obj.pools = message.pools.map(e => e ? Any.toSDK(e) : undefined);
        }
        else {
            obj.pools = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            pools: Array.isArray(object?.pools) ? object.pools.map((e) => PoolI_FromAmino(e)) : [],
            pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.pools) {
            obj.pools = message.pools.map(e => e ? PoolI_ToAmino(e) : undefined);
        }
        else {
            obj.pools = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryPoolsWithFilterResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-pools-with-filter-response",
            value: QueryPoolsWithFilterResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryPoolsWithFilterResponse.decode(message.value);
    },
    toProto(message) {
        return QueryPoolsWithFilterResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QueryPoolsWithFilterResponse",
            value: QueryPoolsWithFilterResponse.encode(message).finish()
        };
    }
};
function createBaseQuerySpotPriceResponse() {
    return {
        spot_price: ""
    };
}
export const QuerySpotPriceResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.QuerySpotPriceResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.spot_price !== "") {
            writer.uint32(10).string(message.spot_price);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return {
            spot_price: isSet(object.spot_price) ? String(object.spot_price) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.spot_price !== undefined && (obj.spot_price = message.spot_price);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQuerySpotPriceResponse();
        message.spot_price = object.spot_price ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            spot_price: object?.spot_price
        };
    },
    toSDK(message) {
        const obj = {};
        obj.spot_price = message.spot_price;
        return obj;
    },
    fromAmino(object) {
        return {
            spot_price: object.spot_price
        };
    },
    toAmino(message) {
        const obj = {};
        obj.spot_price = message.spot_price;
        return obj;
    },
    fromAminoMsg(object) {
        return QuerySpotPriceResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-spot-price-response",
            value: QuerySpotPriceResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QuerySpotPriceResponse.decode(message.value);
    },
    toProto(message) {
        return QuerySpotPriceResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QuerySpotPriceResponse",
            value: QuerySpotPriceResponse.encode(message).finish()
        };
    }
};
function createBaseQuerySwapExactAmountInRequest() {
    return {
        sender: "",
        pool_id: BigInt(0),
        token_in: "",
        routes: []
    };
}
export const QuerySwapExactAmountInRequest = {
    typeUrl: "/osmosis.gamm.v1beta1.QuerySwapExactAmountInRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.pool_id !== BigInt(0)) {
            writer.uint32(16).uint64(message.pool_id);
        }
        if (message.token_in !== "") {
            writer.uint32(26).string(message.token_in);
        }
        for (const v of message.routes) {
            SwapAmountInRoute.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySwapExactAmountInRequest();
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
                    message.token_in = reader.string();
                    break;
                case 4:
                    message.routes.push(SwapAmountInRoute.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            sender: isSet(object.sender) ? String(object.sender) : "",
            pool_id: isSet(object.pool_id) ? BigInt(object.pool_id.toString()) : BigInt(0),
            token_in: isSet(object.token_in) ? String(object.token_in) : "",
            routes: Array.isArray(object?.routes) ? object.routes.map((e) => SwapAmountInRoute.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.pool_id !== undefined && (obj.pool_id = (message.pool_id || BigInt(0)).toString());
        message.token_in !== undefined && (obj.token_in = message.token_in);
        if (message.routes) {
            obj.routes = message.routes.map(e => e ? SwapAmountInRoute.toJSON(e) : undefined);
        }
        else {
            obj.routes = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQuerySwapExactAmountInRequest();
        message.sender = object.sender ?? "";
        message.pool_id = object.pool_id !== undefined && object.pool_id !== null ? BigInt(object.pool_id.toString()) : BigInt(0);
        message.token_in = object.token_in ?? "";
        message.routes = object.routes?.map(e => SwapAmountInRoute.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            sender: object?.sender,
            pool_id: object?.pool_id,
            token_in: object?.token_in,
            routes: Array.isArray(object?.routes) ? object.routes.map((e) => SwapAmountInRoute.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.pool_id = message.pool_id;
        obj.token_in = message.token_in;
        if (message.routes) {
            obj.routes = message.routes.map(e => e ? SwapAmountInRoute.toSDK(e) : undefined);
        }
        else {
            obj.routes = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            sender: object.sender,
            pool_id: BigInt(object.pool_id),
            token_in: object.token_in,
            routes: Array.isArray(object?.routes) ? object.routes.map((e) => SwapAmountInRoute.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.pool_id = message.pool_id ? message.pool_id.toString() : undefined;
        obj.token_in = message.token_in;
        if (message.routes) {
            obj.routes = message.routes.map(e => e ? SwapAmountInRoute.toAmino(e) : undefined);
        }
        else {
            obj.routes = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QuerySwapExactAmountInRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-swap-exact-amount-in-request",
            value: QuerySwapExactAmountInRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QuerySwapExactAmountInRequest.decode(message.value);
    },
    toProto(message) {
        return QuerySwapExactAmountInRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QuerySwapExactAmountInRequest",
            value: QuerySwapExactAmountInRequest.encode(message).finish()
        };
    }
};
function createBaseQuerySwapExactAmountInResponse() {
    return {
        token_out_amount: ""
    };
}
export const QuerySwapExactAmountInResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.QuerySwapExactAmountInResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.token_out_amount !== "") {
            writer.uint32(10).string(message.token_out_amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySwapExactAmountInResponse();
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
    fromJSON(object) {
        return {
            token_out_amount: isSet(object.token_out_amount) ? String(object.token_out_amount) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.token_out_amount !== undefined && (obj.token_out_amount = message.token_out_amount);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQuerySwapExactAmountInResponse();
        message.token_out_amount = object.token_out_amount ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            token_out_amount: object?.token_out_amount
        };
    },
    toSDK(message) {
        const obj = {};
        obj.token_out_amount = message.token_out_amount;
        return obj;
    },
    fromAmino(object) {
        return {
            token_out_amount: object.token_out_amount
        };
    },
    toAmino(message) {
        const obj = {};
        obj.token_out_amount = message.token_out_amount;
        return obj;
    },
    fromAminoMsg(object) {
        return QuerySwapExactAmountInResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-swap-exact-amount-in-response",
            value: QuerySwapExactAmountInResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QuerySwapExactAmountInResponse.decode(message.value);
    },
    toProto(message) {
        return QuerySwapExactAmountInResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QuerySwapExactAmountInResponse",
            value: QuerySwapExactAmountInResponse.encode(message).finish()
        };
    }
};
function createBaseQuerySwapExactAmountOutRequest() {
    return {
        sender: "",
        pool_id: BigInt(0),
        routes: [],
        token_out: ""
    };
}
export const QuerySwapExactAmountOutRequest = {
    typeUrl: "/osmosis.gamm.v1beta1.QuerySwapExactAmountOutRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.pool_id !== BigInt(0)) {
            writer.uint32(16).uint64(message.pool_id);
        }
        for (const v of message.routes) {
            SwapAmountOutRoute.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.token_out !== "") {
            writer.uint32(34).string(message.token_out);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySwapExactAmountOutRequest();
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
                    message.routes.push(SwapAmountOutRoute.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.token_out = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            sender: isSet(object.sender) ? String(object.sender) : "",
            pool_id: isSet(object.pool_id) ? BigInt(object.pool_id.toString()) : BigInt(0),
            routes: Array.isArray(object?.routes) ? object.routes.map((e) => SwapAmountOutRoute.fromJSON(e)) : [],
            token_out: isSet(object.token_out) ? String(object.token_out) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.pool_id !== undefined && (obj.pool_id = (message.pool_id || BigInt(0)).toString());
        if (message.routes) {
            obj.routes = message.routes.map(e => e ? SwapAmountOutRoute.toJSON(e) : undefined);
        }
        else {
            obj.routes = [];
        }
        message.token_out !== undefined && (obj.token_out = message.token_out);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQuerySwapExactAmountOutRequest();
        message.sender = object.sender ?? "";
        message.pool_id = object.pool_id !== undefined && object.pool_id !== null ? BigInt(object.pool_id.toString()) : BigInt(0);
        message.routes = object.routes?.map(e => SwapAmountOutRoute.fromPartial(e)) || [];
        message.token_out = object.token_out ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            sender: object?.sender,
            pool_id: object?.pool_id,
            routes: Array.isArray(object?.routes) ? object.routes.map((e) => SwapAmountOutRoute.fromSDK(e)) : [],
            token_out: object?.token_out
        };
    },
    toSDK(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.pool_id = message.pool_id;
        if (message.routes) {
            obj.routes = message.routes.map(e => e ? SwapAmountOutRoute.toSDK(e) : undefined);
        }
        else {
            obj.routes = [];
        }
        obj.token_out = message.token_out;
        return obj;
    },
    fromAmino(object) {
        return {
            sender: object.sender,
            pool_id: BigInt(object.pool_id),
            routes: Array.isArray(object?.routes) ? object.routes.map((e) => SwapAmountOutRoute.fromAmino(e)) : [],
            token_out: object.token_out
        };
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.pool_id = message.pool_id ? message.pool_id.toString() : undefined;
        if (message.routes) {
            obj.routes = message.routes.map(e => e ? SwapAmountOutRoute.toAmino(e) : undefined);
        }
        else {
            obj.routes = [];
        }
        obj.token_out = message.token_out;
        return obj;
    },
    fromAminoMsg(object) {
        return QuerySwapExactAmountOutRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-swap-exact-amount-out-request",
            value: QuerySwapExactAmountOutRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QuerySwapExactAmountOutRequest.decode(message.value);
    },
    toProto(message) {
        return QuerySwapExactAmountOutRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QuerySwapExactAmountOutRequest",
            value: QuerySwapExactAmountOutRequest.encode(message).finish()
        };
    }
};
function createBaseQuerySwapExactAmountOutResponse() {
    return {
        token_in_amount: ""
    };
}
export const QuerySwapExactAmountOutResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.QuerySwapExactAmountOutResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.token_in_amount !== "") {
            writer.uint32(10).string(message.token_in_amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySwapExactAmountOutResponse();
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
    fromJSON(object) {
        return {
            token_in_amount: isSet(object.token_in_amount) ? String(object.token_in_amount) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.token_in_amount !== undefined && (obj.token_in_amount = message.token_in_amount);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQuerySwapExactAmountOutResponse();
        message.token_in_amount = object.token_in_amount ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            token_in_amount: object?.token_in_amount
        };
    },
    toSDK(message) {
        const obj = {};
        obj.token_in_amount = message.token_in_amount;
        return obj;
    },
    fromAmino(object) {
        return {
            token_in_amount: object.token_in_amount
        };
    },
    toAmino(message) {
        const obj = {};
        obj.token_in_amount = message.token_in_amount;
        return obj;
    },
    fromAminoMsg(object) {
        return QuerySwapExactAmountOutResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-swap-exact-amount-out-response",
            value: QuerySwapExactAmountOutResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QuerySwapExactAmountOutResponse.decode(message.value);
    },
    toProto(message) {
        return QuerySwapExactAmountOutResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QuerySwapExactAmountOutResponse",
            value: QuerySwapExactAmountOutResponse.encode(message).finish()
        };
    }
};
function createBaseQueryTotalLiquidityRequest() {
    return {};
}
export const QueryTotalLiquidityRequest = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryTotalLiquidityRequest",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTotalLiquidityRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseQueryTotalLiquidityRequest();
        return message;
    },
    fromSDK(_) {
        return {};
    },
    toSDK(_) {
        const obj = {};
        return obj;
    },
    fromAmino(_) {
        return {};
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryTotalLiquidityRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-total-liquidity-request",
            value: QueryTotalLiquidityRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryTotalLiquidityRequest.decode(message.value);
    },
    toProto(message) {
        return QueryTotalLiquidityRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QueryTotalLiquidityRequest",
            value: QueryTotalLiquidityRequest.encode(message).finish()
        };
    }
};
function createBaseQueryTotalLiquidityResponse() {
    return {
        liquidity: []
    };
}
export const QueryTotalLiquidityResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryTotalLiquidityResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.liquidity) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTotalLiquidityResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.liquidity.push(Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            liquidity: Array.isArray(object?.liquidity) ? object.liquidity.map((e) => Coin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.liquidity) {
            obj.liquidity = message.liquidity.map(e => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.liquidity = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryTotalLiquidityResponse();
        message.liquidity = object.liquidity?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            liquidity: Array.isArray(object?.liquidity) ? object.liquidity.map((e) => Coin.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.liquidity) {
            obj.liquidity = message.liquidity.map(e => e ? Coin.toSDK(e) : undefined);
        }
        else {
            obj.liquidity = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            liquidity: Array.isArray(object?.liquidity) ? object.liquidity.map((e) => Coin.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.liquidity) {
            obj.liquidity = message.liquidity.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.liquidity = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryTotalLiquidityResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-total-liquidity-response",
            value: QueryTotalLiquidityResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryTotalLiquidityResponse.decode(message.value);
    },
    toProto(message) {
        return QueryTotalLiquidityResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QueryTotalLiquidityResponse",
            value: QueryTotalLiquidityResponse.encode(message).finish()
        };
    }
};
export const PoolI_InterfaceDecoder = (input) => {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const data = Any.decode(reader, reader.uint32());
    switch (data.typeUrl) {
        case "/osmosis.gamm.v1beta1.Pool":
            return Pool1.decode(data.value);
        case "/osmosis.gamm.poolmodels.stableswap.v1beta1.Pool":
            return Pool2.decode(data.value);
        default:
            return data;
    }
};
export const PoolI_FromAmino = (content) => {
    switch (content.type) {
        case "osmosis/gamm/BalancerPool":
            return Any.fromPartial({
                typeUrl: "/osmosis.gamm.v1beta1.Pool",
                value: Pool1.encode(Pool1.fromPartial(Pool1.fromAmino(content.value))).finish()
            });
        case "osmosis/gamm/StableswapPool":
            return Any.fromPartial({
                typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.Pool",
                value: Pool2.encode(Pool2.fromPartial(Pool2.fromAmino(content.value))).finish()
            });
        default:
            return Any.fromAmino(content);
    }
};
export const PoolI_ToAmino = (content) => {
    switch (content.typeUrl) {
        case "/osmosis.gamm.v1beta1.Pool":
            return {
                type: "osmosis/gamm/BalancerPool",
                value: Pool1.toAmino(Pool1.decode(content.value))
            };
        case "/osmosis.gamm.poolmodels.stableswap.v1beta1.Pool":
            return {
                type: "osmosis/gamm/StableswapPool",
                value: Pool2.toAmino(Pool2.decode(content.value))
            };
        default:
            return Any.toAmino(content);
    }
};
//# sourceMappingURL=query.js.map
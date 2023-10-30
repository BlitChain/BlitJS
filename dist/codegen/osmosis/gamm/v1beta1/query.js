"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PoolI_ToAmino = exports.PoolI_FromAmino = exports.PoolI_InterfaceDecoder = exports.QueryTotalLiquidityResponse = exports.QueryTotalLiquidityRequest = exports.QuerySwapExactAmountOutResponse = exports.QuerySwapExactAmountOutRequest = exports.QuerySwapExactAmountInResponse = exports.QuerySwapExactAmountInRequest = exports.QuerySpotPriceResponse = exports.QueryPoolsWithFilterResponse = exports.QueryPoolsWithFilterRequest = exports.QuerySpotPriceRequest = exports.QueryCalcJoinPoolNoSwapSharesResponse = exports.QueryCalcJoinPoolNoSwapSharesRequest = exports.QueryTotalSharesResponse = exports.QueryTotalSharesRequest = exports.QueryTotalPoolLiquidityResponse = exports.QueryTotalPoolLiquidityRequest = exports.QueryPoolParamsResponse = exports.QueryPoolParamsRequest = exports.QueryCalcExitPoolCoinsFromSharesResponse = exports.QueryCalcExitPoolCoinsFromSharesRequest = exports.QueryCalcJoinPoolSharesResponse = exports.QueryCalcJoinPoolSharesRequest = exports.QueryPoolTypeResponse = exports.QueryPoolTypeRequest = exports.QueryNumPoolsResponse = exports.QueryNumPoolsRequest = exports.QueryPoolsResponse = exports.QueryPoolsRequest = exports.QueryPoolResponse = exports.QueryPoolRequest = void 0;
//@ts-nocheck
const pagination_1 = require("../../../cosmos/base/query/v1beta1/pagination");
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const tx_1 = require("./tx");
const any_1 = require("../../../google/protobuf/any");
const balancerPool_1 = require("../pool-models/balancer/balancerPool");
const stableswap_pool_1 = require("../pool-models/stableswap/stableswap_pool");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
function createBaseQueryPoolRequest() {
    return {
        pool_id: BigInt(0)
    };
}
exports.QueryPoolRequest = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryPoolRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.pool_id !== BigInt(0)) {
            writer.uint32(8).uint64(message.pool_id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
            pool_id: (0, helpers_1.isSet)(object.pool_id) ? BigInt(object.pool_id.toString()) : BigInt(0)
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
        return exports.QueryPoolRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-pool-request",
            value: exports.QueryPoolRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryPoolRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryPoolRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QueryPoolRequest",
            value: exports.QueryPoolRequest.encode(message).finish()
        };
    }
};
function createBaseQueryPoolResponse() {
    return {
        pool: undefined
    };
}
exports.QueryPoolResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryPoolResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.pool !== undefined) {
            any_1.Any.encode(message.pool, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pool = (0, exports.PoolI_InterfaceDecoder)(reader);
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
            pool: (0, helpers_1.isSet)(object.pool) ? any_1.Any.fromJSON(object.pool) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.pool !== undefined && (obj.pool = message.pool ? any_1.Any.toJSON(message.pool) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryPoolResponse();
        message.pool = object.pool !== undefined && object.pool !== null ? any_1.Any.fromPartial(object.pool) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            pool: object.pool ? any_1.Any.fromSDK(object.pool) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.pool !== undefined && (obj.pool = message.pool ? any_1.Any.toSDK(message.pool) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            pool: object?.pool ? (0, exports.PoolI_FromAmino)(object.pool) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pool = message.pool ? (0, exports.PoolI_ToAmino)(message.pool) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryPoolResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-pool-response",
            value: exports.QueryPoolResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryPoolResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryPoolResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QueryPoolResponse",
            value: exports.QueryPoolResponse.encode(message).finish()
        };
    }
};
function createBaseQueryPoolsRequest() {
    return {
        pagination: undefined
    };
}
exports.QueryPoolsRequest = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryPoolsRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryPoolsRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            pagination: object.pagination ? pagination_1.PageRequest.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            pagination: object?.pagination ? pagination_1.PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryPoolsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-pools-request",
            value: exports.QueryPoolsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryPoolsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryPoolsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QueryPoolsRequest",
            value: exports.QueryPoolsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryPoolsResponse() {
    return {
        pools: [],
        pagination: undefined
    };
}
exports.QueryPoolsResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryPoolsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.pools) {
            any_1.Any.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pools.push((0, exports.PoolI_InterfaceDecoder)(reader));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
            pools: Array.isArray(object?.pools) ? object.pools.map((e) => any_1.Any.fromJSON(e)) : [],
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.pools) {
            obj.pools = message.pools.map(e => e ? any_1.Any.toJSON(e) : undefined);
        }
        else {
            obj.pools = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryPoolsResponse();
        message.pools = object.pools?.map(e => any_1.Any.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            pools: Array.isArray(object?.pools) ? object.pools.map((e) => any_1.Any.fromSDK(e)) : [],
            pagination: object.pagination ? pagination_1.PageResponse.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.pools) {
            obj.pools = message.pools.map(e => e ? any_1.Any.toSDK(e) : undefined);
        }
        else {
            obj.pools = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            pools: Array.isArray(object?.pools) ? object.pools.map((e) => (0, exports.PoolI_FromAmino)(e)) : [],
            pagination: object?.pagination ? pagination_1.PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.pools) {
            obj.pools = message.pools.map(e => e ? (0, exports.PoolI_ToAmino)(e) : undefined);
        }
        else {
            obj.pools = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryPoolsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-pools-response",
            value: exports.QueryPoolsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryPoolsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryPoolsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QueryPoolsResponse",
            value: exports.QueryPoolsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryNumPoolsRequest() {
    return {};
}
exports.QueryNumPoolsRequest = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryNumPoolsRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.QueryNumPoolsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-num-pools-request",
            value: exports.QueryNumPoolsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryNumPoolsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryNumPoolsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QueryNumPoolsRequest",
            value: exports.QueryNumPoolsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryNumPoolsResponse() {
    return {
        num_pools: BigInt(0)
    };
}
exports.QueryNumPoolsResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryNumPoolsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.num_pools !== BigInt(0)) {
            writer.uint32(8).uint64(message.num_pools);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
            num_pools: (0, helpers_1.isSet)(object.num_pools) ? BigInt(object.num_pools.toString()) : BigInt(0)
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
        return exports.QueryNumPoolsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-num-pools-response",
            value: exports.QueryNumPoolsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryNumPoolsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryNumPoolsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QueryNumPoolsResponse",
            value: exports.QueryNumPoolsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryPoolTypeRequest() {
    return {
        pool_id: BigInt(0)
    };
}
exports.QueryPoolTypeRequest = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryPoolTypeRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.pool_id !== BigInt(0)) {
            writer.uint32(8).uint64(message.pool_id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
            pool_id: (0, helpers_1.isSet)(object.pool_id) ? BigInt(object.pool_id.toString()) : BigInt(0)
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
        return exports.QueryPoolTypeRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-pool-type-request",
            value: exports.QueryPoolTypeRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryPoolTypeRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryPoolTypeRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QueryPoolTypeRequest",
            value: exports.QueryPoolTypeRequest.encode(message).finish()
        };
    }
};
function createBaseQueryPoolTypeResponse() {
    return {
        pool_type: ""
    };
}
exports.QueryPoolTypeResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryPoolTypeResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.pool_type !== "") {
            writer.uint32(10).string(message.pool_type);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
            pool_type: (0, helpers_1.isSet)(object.pool_type) ? String(object.pool_type) : ""
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
        return exports.QueryPoolTypeResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-pool-type-response",
            value: exports.QueryPoolTypeResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryPoolTypeResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryPoolTypeResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QueryPoolTypeResponse",
            value: exports.QueryPoolTypeResponse.encode(message).finish()
        };
    }
};
function createBaseQueryCalcJoinPoolSharesRequest() {
    return {
        pool_id: BigInt(0),
        tokens_in: []
    };
}
exports.QueryCalcJoinPoolSharesRequest = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryCalcJoinPoolSharesRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.pool_id !== BigInt(0)) {
            writer.uint32(8).uint64(message.pool_id);
        }
        for (const v of message.tokens_in) {
            coin_1.Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCalcJoinPoolSharesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pool_id = reader.uint64();
                    break;
                case 2:
                    message.tokens_in.push(coin_1.Coin.decode(reader, reader.uint32()));
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
            pool_id: (0, helpers_1.isSet)(object.pool_id) ? BigInt(object.pool_id.toString()) : BigInt(0),
            tokens_in: Array.isArray(object?.tokens_in) ? object.tokens_in.map((e) => coin_1.Coin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.pool_id !== undefined && (obj.pool_id = (message.pool_id || BigInt(0)).toString());
        if (message.tokens_in) {
            obj.tokens_in = message.tokens_in.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.tokens_in = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryCalcJoinPoolSharesRequest();
        message.pool_id = object.pool_id !== undefined && object.pool_id !== null ? BigInt(object.pool_id.toString()) : BigInt(0);
        message.tokens_in = object.tokens_in?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            pool_id: object?.pool_id,
            tokens_in: Array.isArray(object?.tokens_in) ? object.tokens_in.map((e) => coin_1.Coin.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.pool_id = message.pool_id;
        if (message.tokens_in) {
            obj.tokens_in = message.tokens_in.map(e => e ? coin_1.Coin.toSDK(e) : undefined);
        }
        else {
            obj.tokens_in = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            pool_id: BigInt(object.pool_id),
            tokens_in: Array.isArray(object?.tokens_in) ? object.tokens_in.map((e) => coin_1.Coin.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id = message.pool_id ? message.pool_id.toString() : undefined;
        if (message.tokens_in) {
            obj.tokens_in = message.tokens_in.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.tokens_in = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryCalcJoinPoolSharesRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-calc-join-pool-shares-request",
            value: exports.QueryCalcJoinPoolSharesRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryCalcJoinPoolSharesRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryCalcJoinPoolSharesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QueryCalcJoinPoolSharesRequest",
            value: exports.QueryCalcJoinPoolSharesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryCalcJoinPoolSharesResponse() {
    return {
        share_out_amount: "",
        tokens_out: []
    };
}
exports.QueryCalcJoinPoolSharesResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryCalcJoinPoolSharesResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.share_out_amount !== "") {
            writer.uint32(10).string(message.share_out_amount);
        }
        for (const v of message.tokens_out) {
            coin_1.Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCalcJoinPoolSharesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.share_out_amount = reader.string();
                    break;
                case 2:
                    message.tokens_out.push(coin_1.Coin.decode(reader, reader.uint32()));
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
            share_out_amount: (0, helpers_1.isSet)(object.share_out_amount) ? String(object.share_out_amount) : "",
            tokens_out: Array.isArray(object?.tokens_out) ? object.tokens_out.map((e) => coin_1.Coin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.share_out_amount !== undefined && (obj.share_out_amount = message.share_out_amount);
        if (message.tokens_out) {
            obj.tokens_out = message.tokens_out.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.tokens_out = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryCalcJoinPoolSharesResponse();
        message.share_out_amount = object.share_out_amount ?? "";
        message.tokens_out = object.tokens_out?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            share_out_amount: object?.share_out_amount,
            tokens_out: Array.isArray(object?.tokens_out) ? object.tokens_out.map((e) => coin_1.Coin.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.share_out_amount = message.share_out_amount;
        if (message.tokens_out) {
            obj.tokens_out = message.tokens_out.map(e => e ? coin_1.Coin.toSDK(e) : undefined);
        }
        else {
            obj.tokens_out = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            share_out_amount: object.share_out_amount,
            tokens_out: Array.isArray(object?.tokens_out) ? object.tokens_out.map((e) => coin_1.Coin.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.share_out_amount = message.share_out_amount;
        if (message.tokens_out) {
            obj.tokens_out = message.tokens_out.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.tokens_out = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryCalcJoinPoolSharesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-calc-join-pool-shares-response",
            value: exports.QueryCalcJoinPoolSharesResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryCalcJoinPoolSharesResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryCalcJoinPoolSharesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QueryCalcJoinPoolSharesResponse",
            value: exports.QueryCalcJoinPoolSharesResponse.encode(message).finish()
        };
    }
};
function createBaseQueryCalcExitPoolCoinsFromSharesRequest() {
    return {
        pool_id: BigInt(0),
        share_in_amount: ""
    };
}
exports.QueryCalcExitPoolCoinsFromSharesRequest = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryCalcExitPoolCoinsFromSharesRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.pool_id !== BigInt(0)) {
            writer.uint32(8).uint64(message.pool_id);
        }
        if (message.share_in_amount !== "") {
            writer.uint32(18).string(message.share_in_amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
            pool_id: (0, helpers_1.isSet)(object.pool_id) ? BigInt(object.pool_id.toString()) : BigInt(0),
            share_in_amount: (0, helpers_1.isSet)(object.share_in_amount) ? String(object.share_in_amount) : ""
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
        return exports.QueryCalcExitPoolCoinsFromSharesRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-calc-exit-pool-coins-from-shares-request",
            value: exports.QueryCalcExitPoolCoinsFromSharesRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryCalcExitPoolCoinsFromSharesRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryCalcExitPoolCoinsFromSharesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QueryCalcExitPoolCoinsFromSharesRequest",
            value: exports.QueryCalcExitPoolCoinsFromSharesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryCalcExitPoolCoinsFromSharesResponse() {
    return {
        tokens_out: []
    };
}
exports.QueryCalcExitPoolCoinsFromSharesResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryCalcExitPoolCoinsFromSharesResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.tokens_out) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCalcExitPoolCoinsFromSharesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tokens_out.push(coin_1.Coin.decode(reader, reader.uint32()));
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
            tokens_out: Array.isArray(object?.tokens_out) ? object.tokens_out.map((e) => coin_1.Coin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.tokens_out) {
            obj.tokens_out = message.tokens_out.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.tokens_out = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryCalcExitPoolCoinsFromSharesResponse();
        message.tokens_out = object.tokens_out?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            tokens_out: Array.isArray(object?.tokens_out) ? object.tokens_out.map((e) => coin_1.Coin.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.tokens_out) {
            obj.tokens_out = message.tokens_out.map(e => e ? coin_1.Coin.toSDK(e) : undefined);
        }
        else {
            obj.tokens_out = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            tokens_out: Array.isArray(object?.tokens_out) ? object.tokens_out.map((e) => coin_1.Coin.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.tokens_out) {
            obj.tokens_out = message.tokens_out.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.tokens_out = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryCalcExitPoolCoinsFromSharesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-calc-exit-pool-coins-from-shares-response",
            value: exports.QueryCalcExitPoolCoinsFromSharesResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryCalcExitPoolCoinsFromSharesResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryCalcExitPoolCoinsFromSharesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QueryCalcExitPoolCoinsFromSharesResponse",
            value: exports.QueryCalcExitPoolCoinsFromSharesResponse.encode(message).finish()
        };
    }
};
function createBaseQueryPoolParamsRequest() {
    return {
        pool_id: BigInt(0)
    };
}
exports.QueryPoolParamsRequest = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryPoolParamsRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.pool_id !== BigInt(0)) {
            writer.uint32(8).uint64(message.pool_id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
            pool_id: (0, helpers_1.isSet)(object.pool_id) ? BigInt(object.pool_id.toString()) : BigInt(0)
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
        return exports.QueryPoolParamsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-pool-params-request",
            value: exports.QueryPoolParamsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryPoolParamsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryPoolParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QueryPoolParamsRequest",
            value: exports.QueryPoolParamsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryPoolParamsResponse() {
    return {
        params: undefined
    };
}
exports.QueryPoolParamsResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryPoolParamsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            any_1.Any.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = any_1.Any.decode(reader, reader.uint32());
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
            params: (0, helpers_1.isSet)(object.params) ? any_1.Any.fromJSON(object.params) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? any_1.Any.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryPoolParamsResponse();
        message.params = object.params !== undefined && object.params !== null ? any_1.Any.fromPartial(object.params) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            params: object.params ? any_1.Any.fromSDK(object.params) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? any_1.Any.toSDK(message.params) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            params: object?.params ? any_1.Any.fromAmino(object.params) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? any_1.Any.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryPoolParamsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-pool-params-response",
            value: exports.QueryPoolParamsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryPoolParamsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryPoolParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QueryPoolParamsResponse",
            value: exports.QueryPoolParamsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryTotalPoolLiquidityRequest() {
    return {
        pool_id: BigInt(0)
    };
}
exports.QueryTotalPoolLiquidityRequest = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryTotalPoolLiquidityRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.pool_id !== BigInt(0)) {
            writer.uint32(8).uint64(message.pool_id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
            pool_id: (0, helpers_1.isSet)(object.pool_id) ? BigInt(object.pool_id.toString()) : BigInt(0)
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
        return exports.QueryTotalPoolLiquidityRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-total-pool-liquidity-request",
            value: exports.QueryTotalPoolLiquidityRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryTotalPoolLiquidityRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryTotalPoolLiquidityRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QueryTotalPoolLiquidityRequest",
            value: exports.QueryTotalPoolLiquidityRequest.encode(message).finish()
        };
    }
};
function createBaseQueryTotalPoolLiquidityResponse() {
    return {
        liquidity: []
    };
}
exports.QueryTotalPoolLiquidityResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryTotalPoolLiquidityResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.liquidity) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTotalPoolLiquidityResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.liquidity.push(coin_1.Coin.decode(reader, reader.uint32()));
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
            liquidity: Array.isArray(object?.liquidity) ? object.liquidity.map((e) => coin_1.Coin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.liquidity) {
            obj.liquidity = message.liquidity.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.liquidity = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryTotalPoolLiquidityResponse();
        message.liquidity = object.liquidity?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            liquidity: Array.isArray(object?.liquidity) ? object.liquidity.map((e) => coin_1.Coin.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.liquidity) {
            obj.liquidity = message.liquidity.map(e => e ? coin_1.Coin.toSDK(e) : undefined);
        }
        else {
            obj.liquidity = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            liquidity: Array.isArray(object?.liquidity) ? object.liquidity.map((e) => coin_1.Coin.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.liquidity) {
            obj.liquidity = message.liquidity.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.liquidity = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryTotalPoolLiquidityResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-total-pool-liquidity-response",
            value: exports.QueryTotalPoolLiquidityResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryTotalPoolLiquidityResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryTotalPoolLiquidityResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QueryTotalPoolLiquidityResponse",
            value: exports.QueryTotalPoolLiquidityResponse.encode(message).finish()
        };
    }
};
function createBaseQueryTotalSharesRequest() {
    return {
        pool_id: BigInt(0)
    };
}
exports.QueryTotalSharesRequest = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryTotalSharesRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.pool_id !== BigInt(0)) {
            writer.uint32(8).uint64(message.pool_id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
            pool_id: (0, helpers_1.isSet)(object.pool_id) ? BigInt(object.pool_id.toString()) : BigInt(0)
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
        return exports.QueryTotalSharesRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-total-shares-request",
            value: exports.QueryTotalSharesRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryTotalSharesRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryTotalSharesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QueryTotalSharesRequest",
            value: exports.QueryTotalSharesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryTotalSharesResponse() {
    return {
        total_shares: coin_1.Coin.fromPartial({})
    };
}
exports.QueryTotalSharesResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryTotalSharesResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.total_shares !== undefined) {
            coin_1.Coin.encode(message.total_shares, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTotalSharesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.total_shares = coin_1.Coin.decode(reader, reader.uint32());
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
            total_shares: (0, helpers_1.isSet)(object.total_shares) ? coin_1.Coin.fromJSON(object.total_shares) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.total_shares !== undefined && (obj.total_shares = message.total_shares ? coin_1.Coin.toJSON(message.total_shares) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryTotalSharesResponse();
        message.total_shares = object.total_shares !== undefined && object.total_shares !== null ? coin_1.Coin.fromPartial(object.total_shares) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            total_shares: object.total_shares ? coin_1.Coin.fromSDK(object.total_shares) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.total_shares !== undefined && (obj.total_shares = message.total_shares ? coin_1.Coin.toSDK(message.total_shares) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            total_shares: object?.total_shares ? coin_1.Coin.fromAmino(object.total_shares) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.total_shares = message.total_shares ? coin_1.Coin.toAmino(message.total_shares) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryTotalSharesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-total-shares-response",
            value: exports.QueryTotalSharesResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryTotalSharesResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryTotalSharesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QueryTotalSharesResponse",
            value: exports.QueryTotalSharesResponse.encode(message).finish()
        };
    }
};
function createBaseQueryCalcJoinPoolNoSwapSharesRequest() {
    return {
        pool_id: BigInt(0),
        tokens_in: []
    };
}
exports.QueryCalcJoinPoolNoSwapSharesRequest = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryCalcJoinPoolNoSwapSharesRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.pool_id !== BigInt(0)) {
            writer.uint32(8).uint64(message.pool_id);
        }
        for (const v of message.tokens_in) {
            coin_1.Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCalcJoinPoolNoSwapSharesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pool_id = reader.uint64();
                    break;
                case 2:
                    message.tokens_in.push(coin_1.Coin.decode(reader, reader.uint32()));
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
            pool_id: (0, helpers_1.isSet)(object.pool_id) ? BigInt(object.pool_id.toString()) : BigInt(0),
            tokens_in: Array.isArray(object?.tokens_in) ? object.tokens_in.map((e) => coin_1.Coin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.pool_id !== undefined && (obj.pool_id = (message.pool_id || BigInt(0)).toString());
        if (message.tokens_in) {
            obj.tokens_in = message.tokens_in.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.tokens_in = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryCalcJoinPoolNoSwapSharesRequest();
        message.pool_id = object.pool_id !== undefined && object.pool_id !== null ? BigInt(object.pool_id.toString()) : BigInt(0);
        message.tokens_in = object.tokens_in?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            pool_id: object?.pool_id,
            tokens_in: Array.isArray(object?.tokens_in) ? object.tokens_in.map((e) => coin_1.Coin.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.pool_id = message.pool_id;
        if (message.tokens_in) {
            obj.tokens_in = message.tokens_in.map(e => e ? coin_1.Coin.toSDK(e) : undefined);
        }
        else {
            obj.tokens_in = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            pool_id: BigInt(object.pool_id),
            tokens_in: Array.isArray(object?.tokens_in) ? object.tokens_in.map((e) => coin_1.Coin.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id = message.pool_id ? message.pool_id.toString() : undefined;
        if (message.tokens_in) {
            obj.tokens_in = message.tokens_in.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.tokens_in = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryCalcJoinPoolNoSwapSharesRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-calc-join-pool-no-swap-shares-request",
            value: exports.QueryCalcJoinPoolNoSwapSharesRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryCalcJoinPoolNoSwapSharesRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryCalcJoinPoolNoSwapSharesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QueryCalcJoinPoolNoSwapSharesRequest",
            value: exports.QueryCalcJoinPoolNoSwapSharesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryCalcJoinPoolNoSwapSharesResponse() {
    return {
        tokens_out: [],
        shares_out: ""
    };
}
exports.QueryCalcJoinPoolNoSwapSharesResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryCalcJoinPoolNoSwapSharesResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.tokens_out) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.shares_out !== "") {
            writer.uint32(18).string(message.shares_out);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCalcJoinPoolNoSwapSharesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tokens_out.push(coin_1.Coin.decode(reader, reader.uint32()));
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
            tokens_out: Array.isArray(object?.tokens_out) ? object.tokens_out.map((e) => coin_1.Coin.fromJSON(e)) : [],
            shares_out: (0, helpers_1.isSet)(object.shares_out) ? String(object.shares_out) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.tokens_out) {
            obj.tokens_out = message.tokens_out.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.tokens_out = [];
        }
        message.shares_out !== undefined && (obj.shares_out = message.shares_out);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryCalcJoinPoolNoSwapSharesResponse();
        message.tokens_out = object.tokens_out?.map(e => coin_1.Coin.fromPartial(e)) || [];
        message.shares_out = object.shares_out ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            tokens_out: Array.isArray(object?.tokens_out) ? object.tokens_out.map((e) => coin_1.Coin.fromSDK(e)) : [],
            shares_out: object?.shares_out
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.tokens_out) {
            obj.tokens_out = message.tokens_out.map(e => e ? coin_1.Coin.toSDK(e) : undefined);
        }
        else {
            obj.tokens_out = [];
        }
        obj.shares_out = message.shares_out;
        return obj;
    },
    fromAmino(object) {
        return {
            tokens_out: Array.isArray(object?.tokens_out) ? object.tokens_out.map((e) => coin_1.Coin.fromAmino(e)) : [],
            shares_out: object.shares_out
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.tokens_out) {
            obj.tokens_out = message.tokens_out.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.tokens_out = [];
        }
        obj.shares_out = message.shares_out;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryCalcJoinPoolNoSwapSharesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-calc-join-pool-no-swap-shares-response",
            value: exports.QueryCalcJoinPoolNoSwapSharesResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryCalcJoinPoolNoSwapSharesResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryCalcJoinPoolNoSwapSharesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QueryCalcJoinPoolNoSwapSharesResponse",
            value: exports.QueryCalcJoinPoolNoSwapSharesResponse.encode(message).finish()
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
exports.QuerySpotPriceRequest = {
    typeUrl: "/osmosis.gamm.v1beta1.QuerySpotPriceRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
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
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
            pool_id: (0, helpers_1.isSet)(object.pool_id) ? BigInt(object.pool_id.toString()) : BigInt(0),
            base_asset_denom: (0, helpers_1.isSet)(object.base_asset_denom) ? String(object.base_asset_denom) : "",
            quote_asset_denom: (0, helpers_1.isSet)(object.quote_asset_denom) ? String(object.quote_asset_denom) : ""
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
        return exports.QuerySpotPriceRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-spot-price-request",
            value: exports.QuerySpotPriceRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QuerySpotPriceRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QuerySpotPriceRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QuerySpotPriceRequest",
            value: exports.QuerySpotPriceRequest.encode(message).finish()
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
exports.QueryPoolsWithFilterRequest = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryPoolsWithFilterRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.min_liquidity) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pool_type !== "") {
            writer.uint32(18).string(message.pool_type);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolsWithFilterRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.min_liquidity.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pool_type = reader.string();
                    break;
                case 3:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
            min_liquidity: Array.isArray(object?.min_liquidity) ? object.min_liquidity.map((e) => coin_1.Coin.fromJSON(e)) : [],
            pool_type: (0, helpers_1.isSet)(object.pool_type) ? String(object.pool_type) : "",
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.min_liquidity) {
            obj.min_liquidity = message.min_liquidity.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.min_liquidity = [];
        }
        message.pool_type !== undefined && (obj.pool_type = message.pool_type);
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryPoolsWithFilterRequest();
        message.min_liquidity = object.min_liquidity?.map(e => coin_1.Coin.fromPartial(e)) || [];
        message.pool_type = object.pool_type ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            min_liquidity: Array.isArray(object?.min_liquidity) ? object.min_liquidity.map((e) => coin_1.Coin.fromSDK(e)) : [],
            pool_type: object?.pool_type,
            pagination: object.pagination ? pagination_1.PageRequest.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.min_liquidity) {
            obj.min_liquidity = message.min_liquidity.map(e => e ? coin_1.Coin.toSDK(e) : undefined);
        }
        else {
            obj.min_liquidity = [];
        }
        obj.pool_type = message.pool_type;
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            min_liquidity: Array.isArray(object?.min_liquidity) ? object.min_liquidity.map((e) => coin_1.Coin.fromAmino(e)) : [],
            pool_type: object.pool_type,
            pagination: object?.pagination ? pagination_1.PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.min_liquidity) {
            obj.min_liquidity = message.min_liquidity.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.min_liquidity = [];
        }
        obj.pool_type = message.pool_type;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryPoolsWithFilterRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-pools-with-filter-request",
            value: exports.QueryPoolsWithFilterRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryPoolsWithFilterRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryPoolsWithFilterRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QueryPoolsWithFilterRequest",
            value: exports.QueryPoolsWithFilterRequest.encode(message).finish()
        };
    }
};
function createBaseQueryPoolsWithFilterResponse() {
    return {
        pools: [],
        pagination: undefined
    };
}
exports.QueryPoolsWithFilterResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryPoolsWithFilterResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.pools) {
            any_1.Any.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolsWithFilterResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pools.push((0, exports.PoolI_InterfaceDecoder)(reader));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
            pools: Array.isArray(object?.pools) ? object.pools.map((e) => any_1.Any.fromJSON(e)) : [],
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.pools) {
            obj.pools = message.pools.map(e => e ? any_1.Any.toJSON(e) : undefined);
        }
        else {
            obj.pools = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryPoolsWithFilterResponse();
        message.pools = object.pools?.map(e => any_1.Any.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            pools: Array.isArray(object?.pools) ? object.pools.map((e) => any_1.Any.fromSDK(e)) : [],
            pagination: object.pagination ? pagination_1.PageResponse.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.pools) {
            obj.pools = message.pools.map(e => e ? any_1.Any.toSDK(e) : undefined);
        }
        else {
            obj.pools = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            pools: Array.isArray(object?.pools) ? object.pools.map((e) => (0, exports.PoolI_FromAmino)(e)) : [],
            pagination: object?.pagination ? pagination_1.PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.pools) {
            obj.pools = message.pools.map(e => e ? (0, exports.PoolI_ToAmino)(e) : undefined);
        }
        else {
            obj.pools = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryPoolsWithFilterResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-pools-with-filter-response",
            value: exports.QueryPoolsWithFilterResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryPoolsWithFilterResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryPoolsWithFilterResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QueryPoolsWithFilterResponse",
            value: exports.QueryPoolsWithFilterResponse.encode(message).finish()
        };
    }
};
function createBaseQuerySpotPriceResponse() {
    return {
        spot_price: ""
    };
}
exports.QuerySpotPriceResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.QuerySpotPriceResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.spot_price !== "") {
            writer.uint32(10).string(message.spot_price);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
            spot_price: (0, helpers_1.isSet)(object.spot_price) ? String(object.spot_price) : ""
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
        return exports.QuerySpotPriceResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-spot-price-response",
            value: exports.QuerySpotPriceResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QuerySpotPriceResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QuerySpotPriceResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QuerySpotPriceResponse",
            value: exports.QuerySpotPriceResponse.encode(message).finish()
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
exports.QuerySwapExactAmountInRequest = {
    typeUrl: "/osmosis.gamm.v1beta1.QuerySwapExactAmountInRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
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
            tx_1.SwapAmountInRoute.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
                    message.routes.push(tx_1.SwapAmountInRoute.decode(reader, reader.uint32()));
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
            sender: (0, helpers_1.isSet)(object.sender) ? String(object.sender) : "",
            pool_id: (0, helpers_1.isSet)(object.pool_id) ? BigInt(object.pool_id.toString()) : BigInt(0),
            token_in: (0, helpers_1.isSet)(object.token_in) ? String(object.token_in) : "",
            routes: Array.isArray(object?.routes) ? object.routes.map((e) => tx_1.SwapAmountInRoute.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.pool_id !== undefined && (obj.pool_id = (message.pool_id || BigInt(0)).toString());
        message.token_in !== undefined && (obj.token_in = message.token_in);
        if (message.routes) {
            obj.routes = message.routes.map(e => e ? tx_1.SwapAmountInRoute.toJSON(e) : undefined);
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
        message.routes = object.routes?.map(e => tx_1.SwapAmountInRoute.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            sender: object?.sender,
            pool_id: object?.pool_id,
            token_in: object?.token_in,
            routes: Array.isArray(object?.routes) ? object.routes.map((e) => tx_1.SwapAmountInRoute.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.pool_id = message.pool_id;
        obj.token_in = message.token_in;
        if (message.routes) {
            obj.routes = message.routes.map(e => e ? tx_1.SwapAmountInRoute.toSDK(e) : undefined);
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
            routes: Array.isArray(object?.routes) ? object.routes.map((e) => tx_1.SwapAmountInRoute.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.pool_id = message.pool_id ? message.pool_id.toString() : undefined;
        obj.token_in = message.token_in;
        if (message.routes) {
            obj.routes = message.routes.map(e => e ? tx_1.SwapAmountInRoute.toAmino(e) : undefined);
        }
        else {
            obj.routes = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QuerySwapExactAmountInRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-swap-exact-amount-in-request",
            value: exports.QuerySwapExactAmountInRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QuerySwapExactAmountInRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QuerySwapExactAmountInRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QuerySwapExactAmountInRequest",
            value: exports.QuerySwapExactAmountInRequest.encode(message).finish()
        };
    }
};
function createBaseQuerySwapExactAmountInResponse() {
    return {
        token_out_amount: ""
    };
}
exports.QuerySwapExactAmountInResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.QuerySwapExactAmountInResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.token_out_amount !== "") {
            writer.uint32(10).string(message.token_out_amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
            token_out_amount: (0, helpers_1.isSet)(object.token_out_amount) ? String(object.token_out_amount) : ""
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
        return exports.QuerySwapExactAmountInResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-swap-exact-amount-in-response",
            value: exports.QuerySwapExactAmountInResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QuerySwapExactAmountInResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QuerySwapExactAmountInResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QuerySwapExactAmountInResponse",
            value: exports.QuerySwapExactAmountInResponse.encode(message).finish()
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
exports.QuerySwapExactAmountOutRequest = {
    typeUrl: "/osmosis.gamm.v1beta1.QuerySwapExactAmountOutRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.pool_id !== BigInt(0)) {
            writer.uint32(16).uint64(message.pool_id);
        }
        for (const v of message.routes) {
            tx_1.SwapAmountOutRoute.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.token_out !== "") {
            writer.uint32(34).string(message.token_out);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
                    message.routes.push(tx_1.SwapAmountOutRoute.decode(reader, reader.uint32()));
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
            sender: (0, helpers_1.isSet)(object.sender) ? String(object.sender) : "",
            pool_id: (0, helpers_1.isSet)(object.pool_id) ? BigInt(object.pool_id.toString()) : BigInt(0),
            routes: Array.isArray(object?.routes) ? object.routes.map((e) => tx_1.SwapAmountOutRoute.fromJSON(e)) : [],
            token_out: (0, helpers_1.isSet)(object.token_out) ? String(object.token_out) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.pool_id !== undefined && (obj.pool_id = (message.pool_id || BigInt(0)).toString());
        if (message.routes) {
            obj.routes = message.routes.map(e => e ? tx_1.SwapAmountOutRoute.toJSON(e) : undefined);
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
        message.routes = object.routes?.map(e => tx_1.SwapAmountOutRoute.fromPartial(e)) || [];
        message.token_out = object.token_out ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            sender: object?.sender,
            pool_id: object?.pool_id,
            routes: Array.isArray(object?.routes) ? object.routes.map((e) => tx_1.SwapAmountOutRoute.fromSDK(e)) : [],
            token_out: object?.token_out
        };
    },
    toSDK(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.pool_id = message.pool_id;
        if (message.routes) {
            obj.routes = message.routes.map(e => e ? tx_1.SwapAmountOutRoute.toSDK(e) : undefined);
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
            routes: Array.isArray(object?.routes) ? object.routes.map((e) => tx_1.SwapAmountOutRoute.fromAmino(e)) : [],
            token_out: object.token_out
        };
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.pool_id = message.pool_id ? message.pool_id.toString() : undefined;
        if (message.routes) {
            obj.routes = message.routes.map(e => e ? tx_1.SwapAmountOutRoute.toAmino(e) : undefined);
        }
        else {
            obj.routes = [];
        }
        obj.token_out = message.token_out;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QuerySwapExactAmountOutRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-swap-exact-amount-out-request",
            value: exports.QuerySwapExactAmountOutRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QuerySwapExactAmountOutRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QuerySwapExactAmountOutRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QuerySwapExactAmountOutRequest",
            value: exports.QuerySwapExactAmountOutRequest.encode(message).finish()
        };
    }
};
function createBaseQuerySwapExactAmountOutResponse() {
    return {
        token_in_amount: ""
    };
}
exports.QuerySwapExactAmountOutResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.QuerySwapExactAmountOutResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.token_in_amount !== "") {
            writer.uint32(10).string(message.token_in_amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
            token_in_amount: (0, helpers_1.isSet)(object.token_in_amount) ? String(object.token_in_amount) : ""
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
        return exports.QuerySwapExactAmountOutResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-swap-exact-amount-out-response",
            value: exports.QuerySwapExactAmountOutResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QuerySwapExactAmountOutResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QuerySwapExactAmountOutResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QuerySwapExactAmountOutResponse",
            value: exports.QuerySwapExactAmountOutResponse.encode(message).finish()
        };
    }
};
function createBaseQueryTotalLiquidityRequest() {
    return {};
}
exports.QueryTotalLiquidityRequest = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryTotalLiquidityRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.QueryTotalLiquidityRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-total-liquidity-request",
            value: exports.QueryTotalLiquidityRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryTotalLiquidityRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryTotalLiquidityRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QueryTotalLiquidityRequest",
            value: exports.QueryTotalLiquidityRequest.encode(message).finish()
        };
    }
};
function createBaseQueryTotalLiquidityResponse() {
    return {
        liquidity: []
    };
}
exports.QueryTotalLiquidityResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.QueryTotalLiquidityResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.liquidity) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTotalLiquidityResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.liquidity.push(coin_1.Coin.decode(reader, reader.uint32()));
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
            liquidity: Array.isArray(object?.liquidity) ? object.liquidity.map((e) => coin_1.Coin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.liquidity) {
            obj.liquidity = message.liquidity.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.liquidity = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryTotalLiquidityResponse();
        message.liquidity = object.liquidity?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            liquidity: Array.isArray(object?.liquidity) ? object.liquidity.map((e) => coin_1.Coin.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.liquidity) {
            obj.liquidity = message.liquidity.map(e => e ? coin_1.Coin.toSDK(e) : undefined);
        }
        else {
            obj.liquidity = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            liquidity: Array.isArray(object?.liquidity) ? object.liquidity.map((e) => coin_1.Coin.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.liquidity) {
            obj.liquidity = message.liquidity.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.liquidity = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryTotalLiquidityResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/query-total-liquidity-response",
            value: exports.QueryTotalLiquidityResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryTotalLiquidityResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryTotalLiquidityResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.QueryTotalLiquidityResponse",
            value: exports.QueryTotalLiquidityResponse.encode(message).finish()
        };
    }
};
const PoolI_InterfaceDecoder = (input) => {
    const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
    const data = any_1.Any.decode(reader, reader.uint32());
    switch (data.typeUrl) {
        case "/osmosis.gamm.v1beta1.Pool":
            return balancerPool_1.Pool.decode(data.value);
        case "/osmosis.gamm.poolmodels.stableswap.v1beta1.Pool":
            return stableswap_pool_1.Pool.decode(data.value);
        default:
            return data;
    }
};
exports.PoolI_InterfaceDecoder = PoolI_InterfaceDecoder;
const PoolI_FromAmino = (content) => {
    switch (content.type) {
        case "osmosis/gamm/BalancerPool":
            return any_1.Any.fromPartial({
                typeUrl: "/osmosis.gamm.v1beta1.Pool",
                value: balancerPool_1.Pool.encode(balancerPool_1.Pool.fromPartial(balancerPool_1.Pool.fromAmino(content.value))).finish()
            });
        case "osmosis/gamm/StableswapPool":
            return any_1.Any.fromPartial({
                typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.Pool",
                value: stableswap_pool_1.Pool.encode(stableswap_pool_1.Pool.fromPartial(stableswap_pool_1.Pool.fromAmino(content.value))).finish()
            });
        default:
            return any_1.Any.fromAmino(content);
    }
};
exports.PoolI_FromAmino = PoolI_FromAmino;
const PoolI_ToAmino = (content) => {
    switch (content.typeUrl) {
        case "/osmosis.gamm.v1beta1.Pool":
            return {
                type: "osmosis/gamm/BalancerPool",
                value: balancerPool_1.Pool.toAmino(balancerPool_1.Pool.decode(content.value))
            };
        case "/osmosis.gamm.poolmodels.stableswap.v1beta1.Pool":
            return {
                type: "osmosis/gamm/StableswapPool",
                value: stableswap_pool_1.Pool.toAmino(stableswap_pool_1.Pool.decode(content.value))
            };
        default:
            return any_1.Any.toAmino(content);
    }
};
exports.PoolI_ToAmino = PoolI_ToAmino;
//# sourceMappingURL=query.js.map
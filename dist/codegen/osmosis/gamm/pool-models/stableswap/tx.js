"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgStableSwapAdjustScalingFactorsResponse = exports.MsgStableSwapAdjustScalingFactors = exports.MsgCreateStableswapPoolResponse = exports.MsgCreateStableswapPool = void 0;
//@ts-nocheck
const stableswap_pool_1 = require("./stableswap_pool");
const coin_1 = require("../../../../cosmos/base/v1beta1/coin");
const binary_1 = require("../../../../binary");
const helpers_1 = require("../../../../helpers");
function createBaseMsgCreateStableswapPool() {
    return {
        sender: "",
        pool_params: undefined,
        initial_pool_liquidity: [],
        scaling_factors: [],
        future_pool_governor: "",
        scaling_factor_controller: ""
    };
}
exports.MsgCreateStableswapPool = {
    typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgCreateStableswapPool",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.pool_params !== undefined) {
            stableswap_pool_1.PoolParams.encode(message.pool_params, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.initial_pool_liquidity) {
            coin_1.Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        writer.uint32(34).fork();
        for (const v of message.scaling_factors) {
            writer.uint64(v);
        }
        writer.ldelim();
        if (message.future_pool_governor !== "") {
            writer.uint32(42).string(message.future_pool_governor);
        }
        if (message.scaling_factor_controller !== "") {
            writer.uint32(50).string(message.scaling_factor_controller);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateStableswapPool();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.pool_params = stableswap_pool_1.PoolParams.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.initial_pool_liquidity.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 4:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.scaling_factors.push(reader.uint64());
                        }
                    }
                    else {
                        message.scaling_factors.push(reader.uint64());
                    }
                    break;
                case 5:
                    message.future_pool_governor = reader.string();
                    break;
                case 6:
                    message.scaling_factor_controller = reader.string();
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
            pool_params: (0, helpers_1.isSet)(object.pool_params) ? stableswap_pool_1.PoolParams.fromJSON(object.pool_params) : undefined,
            initial_pool_liquidity: Array.isArray(object?.initial_pool_liquidity) ? object.initial_pool_liquidity.map((e) => coin_1.Coin.fromJSON(e)) : [],
            scaling_factors: Array.isArray(object?.scaling_factors) ? object.scaling_factors.map((e) => BigInt(e.toString())) : [],
            future_pool_governor: (0, helpers_1.isSet)(object.future_pool_governor) ? String(object.future_pool_governor) : "",
            scaling_factor_controller: (0, helpers_1.isSet)(object.scaling_factor_controller) ? String(object.scaling_factor_controller) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.pool_params !== undefined && (obj.pool_params = message.pool_params ? stableswap_pool_1.PoolParams.toJSON(message.pool_params) : undefined);
        if (message.initial_pool_liquidity) {
            obj.initial_pool_liquidity = message.initial_pool_liquidity.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.initial_pool_liquidity = [];
        }
        if (message.scaling_factors) {
            obj.scaling_factors = message.scaling_factors.map(e => (e || BigInt(0)).toString());
        }
        else {
            obj.scaling_factors = [];
        }
        message.future_pool_governor !== undefined && (obj.future_pool_governor = message.future_pool_governor);
        message.scaling_factor_controller !== undefined && (obj.scaling_factor_controller = message.scaling_factor_controller);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateStableswapPool();
        message.sender = object.sender ?? "";
        message.pool_params = object.pool_params !== undefined && object.pool_params !== null ? stableswap_pool_1.PoolParams.fromPartial(object.pool_params) : undefined;
        message.initial_pool_liquidity = object.initial_pool_liquidity?.map(e => coin_1.Coin.fromPartial(e)) || [];
        message.scaling_factors = object.scaling_factors?.map(e => BigInt(e.toString())) || [];
        message.future_pool_governor = object.future_pool_governor ?? "";
        message.scaling_factor_controller = object.scaling_factor_controller ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            sender: object?.sender,
            pool_params: object.pool_params ? stableswap_pool_1.PoolParams.fromSDK(object.pool_params) : undefined,
            initial_pool_liquidity: Array.isArray(object?.initial_pool_liquidity) ? object.initial_pool_liquidity.map((e) => coin_1.Coin.fromSDK(e)) : [],
            scaling_factors: Array.isArray(object?.scaling_factors) ? object.scaling_factors.map((e) => e) : [],
            future_pool_governor: object?.future_pool_governor,
            scaling_factor_controller: object?.scaling_factor_controller
        };
    },
    toSDK(message) {
        const obj = {};
        obj.sender = message.sender;
        message.pool_params !== undefined && (obj.pool_params = message.pool_params ? stableswap_pool_1.PoolParams.toSDK(message.pool_params) : undefined);
        if (message.initial_pool_liquidity) {
            obj.initial_pool_liquidity = message.initial_pool_liquidity.map(e => e ? coin_1.Coin.toSDK(e) : undefined);
        }
        else {
            obj.initial_pool_liquidity = [];
        }
        if (message.scaling_factors) {
            obj.scaling_factors = message.scaling_factors.map(e => e);
        }
        else {
            obj.scaling_factors = [];
        }
        obj.future_pool_governor = message.future_pool_governor;
        obj.scaling_factor_controller = message.scaling_factor_controller;
        return obj;
    },
    fromAmino(object) {
        return {
            sender: object.sender,
            pool_params: object?.pool_params ? stableswap_pool_1.PoolParams.fromAmino(object.pool_params) : undefined,
            initial_pool_liquidity: Array.isArray(object?.initial_pool_liquidity) ? object.initial_pool_liquidity.map((e) => coin_1.Coin.fromAmino(e)) : [],
            scaling_factors: Array.isArray(object?.scaling_factors) ? object.scaling_factors.map((e) => BigInt(e)) : [],
            future_pool_governor: object.future_pool_governor,
            scaling_factor_controller: object.scaling_factor_controller
        };
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.pool_params = message.pool_params ? stableswap_pool_1.PoolParams.toAmino(message.pool_params) : undefined;
        if (message.initial_pool_liquidity) {
            obj.initial_pool_liquidity = message.initial_pool_liquidity.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.initial_pool_liquidity = [];
        }
        if (message.scaling_factors) {
            obj.scaling_factors = message.scaling_factors.map(e => e.toString());
        }
        else {
            obj.scaling_factors = [];
        }
        obj.future_pool_governor = message.future_pool_governor;
        obj.scaling_factor_controller = message.scaling_factor_controller;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCreateStableswapPool.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/create-stableswap-pool",
            value: exports.MsgCreateStableswapPool.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgCreateStableswapPool.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreateStableswapPool.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgCreateStableswapPool",
            value: exports.MsgCreateStableswapPool.encode(message).finish()
        };
    }
};
function createBaseMsgCreateStableswapPoolResponse() {
    return {
        pool_id: BigInt(0)
    };
}
exports.MsgCreateStableswapPoolResponse = {
    typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgCreateStableswapPoolResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.pool_id !== BigInt(0)) {
            writer.uint32(8).uint64(message.pool_id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateStableswapPoolResponse();
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
        const message = createBaseMsgCreateStableswapPoolResponse();
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
        return exports.MsgCreateStableswapPoolResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/create-stableswap-pool-response",
            value: exports.MsgCreateStableswapPoolResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgCreateStableswapPoolResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreateStableswapPoolResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgCreateStableswapPoolResponse",
            value: exports.MsgCreateStableswapPoolResponse.encode(message).finish()
        };
    }
};
function createBaseMsgStableSwapAdjustScalingFactors() {
    return {
        sender: "",
        pool_id: BigInt(0),
        scaling_factors: []
    };
}
exports.MsgStableSwapAdjustScalingFactors = {
    typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgStableSwapAdjustScalingFactors",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.pool_id !== BigInt(0)) {
            writer.uint32(16).uint64(message.pool_id);
        }
        writer.uint32(26).fork();
        for (const v of message.scaling_factors) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgStableSwapAdjustScalingFactors();
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
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.scaling_factors.push(reader.uint64());
                        }
                    }
                    else {
                        message.scaling_factors.push(reader.uint64());
                    }
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
            scaling_factors: Array.isArray(object?.scaling_factors) ? object.scaling_factors.map((e) => BigInt(e.toString())) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.pool_id !== undefined && (obj.pool_id = (message.pool_id || BigInt(0)).toString());
        if (message.scaling_factors) {
            obj.scaling_factors = message.scaling_factors.map(e => (e || BigInt(0)).toString());
        }
        else {
            obj.scaling_factors = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgStableSwapAdjustScalingFactors();
        message.sender = object.sender ?? "";
        message.pool_id = object.pool_id !== undefined && object.pool_id !== null ? BigInt(object.pool_id.toString()) : BigInt(0);
        message.scaling_factors = object.scaling_factors?.map(e => BigInt(e.toString())) || [];
        return message;
    },
    fromSDK(object) {
        return {
            sender: object?.sender,
            pool_id: object?.pool_id,
            scaling_factors: Array.isArray(object?.scaling_factors) ? object.scaling_factors.map((e) => e) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.pool_id = message.pool_id;
        if (message.scaling_factors) {
            obj.scaling_factors = message.scaling_factors.map(e => e);
        }
        else {
            obj.scaling_factors = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            sender: object.sender,
            pool_id: BigInt(object.pool_id),
            scaling_factors: Array.isArray(object?.scaling_factors) ? object.scaling_factors.map((e) => BigInt(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.pool_id = message.pool_id ? message.pool_id.toString() : undefined;
        if (message.scaling_factors) {
            obj.scaling_factors = message.scaling_factors.map(e => e.toString());
        }
        else {
            obj.scaling_factors = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgStableSwapAdjustScalingFactors.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/stableswap-adjust-scaling-factors",
            value: exports.MsgStableSwapAdjustScalingFactors.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgStableSwapAdjustScalingFactors.decode(message.value);
    },
    toProto(message) {
        return exports.MsgStableSwapAdjustScalingFactors.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgStableSwapAdjustScalingFactors",
            value: exports.MsgStableSwapAdjustScalingFactors.encode(message).finish()
        };
    }
};
function createBaseMsgStableSwapAdjustScalingFactorsResponse() {
    return {};
}
exports.MsgStableSwapAdjustScalingFactorsResponse = {
    typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgStableSwapAdjustScalingFactorsResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgStableSwapAdjustScalingFactorsResponse();
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
        const message = createBaseMsgStableSwapAdjustScalingFactorsResponse();
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
        return exports.MsgStableSwapAdjustScalingFactorsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/stable-swap-adjust-scaling-factors-response",
            value: exports.MsgStableSwapAdjustScalingFactorsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgStableSwapAdjustScalingFactorsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgStableSwapAdjustScalingFactorsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgStableSwapAdjustScalingFactorsResponse",
            value: exports.MsgStableSwapAdjustScalingFactorsResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=tx.js.map
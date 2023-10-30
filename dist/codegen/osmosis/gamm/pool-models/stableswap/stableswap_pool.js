"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pool = exports.PoolParams = void 0;
//@ts-nocheck
const coin_1 = require("../../../../cosmos/base/v1beta1/coin");
const binary_1 = require("../../../../binary");
const math_1 = require("@cosmjs/math");
const helpers_1 = require("../../../../helpers");
function createBasePoolParams() {
    return {
        swap_fee: "",
        exit_fee: ""
    };
}
exports.PoolParams = {
    typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.PoolParams",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.swap_fee !== "") {
            writer.uint32(10).string(math_1.Decimal.fromUserInput(message.swap_fee, 18).atomics);
        }
        if (message.exit_fee !== "") {
            writer.uint32(18).string(math_1.Decimal.fromUserInput(message.exit_fee, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePoolParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.swap_fee = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 2:
                    message.exit_fee = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
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
            swap_fee: (0, helpers_1.isSet)(object.swap_fee) ? String(object.swap_fee) : "",
            exit_fee: (0, helpers_1.isSet)(object.exit_fee) ? String(object.exit_fee) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.swap_fee !== undefined && (obj.swap_fee = message.swap_fee);
        message.exit_fee !== undefined && (obj.exit_fee = message.exit_fee);
        return obj;
    },
    fromPartial(object) {
        const message = createBasePoolParams();
        message.swap_fee = object.swap_fee ?? "";
        message.exit_fee = object.exit_fee ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            swap_fee: object?.swap_fee,
            exit_fee: object?.exit_fee
        };
    },
    toSDK(message) {
        const obj = {};
        obj.swap_fee = message.swap_fee;
        obj.exit_fee = message.exit_fee;
        return obj;
    },
    fromAmino(object) {
        return {
            swap_fee: object.swap_fee,
            exit_fee: object.exit_fee
        };
    },
    toAmino(message) {
        const obj = {};
        obj.swap_fee = message.swap_fee;
        obj.exit_fee = message.exit_fee;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.PoolParams.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/StableswapPoolParams",
            value: exports.PoolParams.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.PoolParams.decode(message.value);
    },
    toProto(message) {
        return exports.PoolParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.PoolParams",
            value: exports.PoolParams.encode(message).finish()
        };
    }
};
function createBasePool() {
    return {
        $typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.Pool",
        address: "",
        id: BigInt(0),
        pool_params: exports.PoolParams.fromPartial({}),
        future_pool_governor: "",
        total_shares: coin_1.Coin.fromPartial({}),
        pool_liquidity: [],
        scaling_factors: [],
        scaling_factor_controller: ""
    };
}
exports.Pool = {
    typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.Pool",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.id !== BigInt(0)) {
            writer.uint32(16).uint64(message.id);
        }
        if (message.pool_params !== undefined) {
            exports.PoolParams.encode(message.pool_params, writer.uint32(26).fork()).ldelim();
        }
        if (message.future_pool_governor !== "") {
            writer.uint32(34).string(message.future_pool_governor);
        }
        if (message.total_shares !== undefined) {
            coin_1.Coin.encode(message.total_shares, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.pool_liquidity) {
            coin_1.Coin.encode(v, writer.uint32(50).fork()).ldelim();
        }
        writer.uint32(58).fork();
        for (const v of message.scaling_factors) {
            writer.uint64(v);
        }
        writer.ldelim();
        if (message.scaling_factor_controller !== "") {
            writer.uint32(66).string(message.scaling_factor_controller);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePool();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.id = reader.uint64();
                    break;
                case 3:
                    message.pool_params = exports.PoolParams.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.future_pool_governor = reader.string();
                    break;
                case 5:
                    message.total_shares = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.pool_liquidity.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 7:
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
                case 8:
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
            address: (0, helpers_1.isSet)(object.address) ? String(object.address) : "",
            id: (0, helpers_1.isSet)(object.id) ? BigInt(object.id.toString()) : BigInt(0),
            pool_params: (0, helpers_1.isSet)(object.pool_params) ? exports.PoolParams.fromJSON(object.pool_params) : undefined,
            future_pool_governor: (0, helpers_1.isSet)(object.future_pool_governor) ? String(object.future_pool_governor) : "",
            total_shares: (0, helpers_1.isSet)(object.total_shares) ? coin_1.Coin.fromJSON(object.total_shares) : undefined,
            pool_liquidity: Array.isArray(object?.pool_liquidity) ? object.pool_liquidity.map((e) => coin_1.Coin.fromJSON(e)) : [],
            scaling_factors: Array.isArray(object?.scaling_factors) ? object.scaling_factors.map((e) => BigInt(e.toString())) : [],
            scaling_factor_controller: (0, helpers_1.isSet)(object.scaling_factor_controller) ? String(object.scaling_factor_controller) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
        message.pool_params !== undefined && (obj.pool_params = message.pool_params ? exports.PoolParams.toJSON(message.pool_params) : undefined);
        message.future_pool_governor !== undefined && (obj.future_pool_governor = message.future_pool_governor);
        message.total_shares !== undefined && (obj.total_shares = message.total_shares ? coin_1.Coin.toJSON(message.total_shares) : undefined);
        if (message.pool_liquidity) {
            obj.pool_liquidity = message.pool_liquidity.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.pool_liquidity = [];
        }
        if (message.scaling_factors) {
            obj.scaling_factors = message.scaling_factors.map(e => (e || BigInt(0)).toString());
        }
        else {
            obj.scaling_factors = [];
        }
        message.scaling_factor_controller !== undefined && (obj.scaling_factor_controller = message.scaling_factor_controller);
        return obj;
    },
    fromPartial(object) {
        const message = createBasePool();
        message.address = object.address ?? "";
        message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
        message.pool_params = object.pool_params !== undefined && object.pool_params !== null ? exports.PoolParams.fromPartial(object.pool_params) : undefined;
        message.future_pool_governor = object.future_pool_governor ?? "";
        message.total_shares = object.total_shares !== undefined && object.total_shares !== null ? coin_1.Coin.fromPartial(object.total_shares) : undefined;
        message.pool_liquidity = object.pool_liquidity?.map(e => coin_1.Coin.fromPartial(e)) || [];
        message.scaling_factors = object.scaling_factors?.map(e => BigInt(e.toString())) || [];
        message.scaling_factor_controller = object.scaling_factor_controller ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            address: object?.address,
            id: object?.id,
            pool_params: object.pool_params ? exports.PoolParams.fromSDK(object.pool_params) : undefined,
            future_pool_governor: object?.future_pool_governor,
            total_shares: object.total_shares ? coin_1.Coin.fromSDK(object.total_shares) : undefined,
            pool_liquidity: Array.isArray(object?.pool_liquidity) ? object.pool_liquidity.map((e) => coin_1.Coin.fromSDK(e)) : [],
            scaling_factors: Array.isArray(object?.scaling_factors) ? object.scaling_factors.map((e) => e) : [],
            scaling_factor_controller: object?.scaling_factor_controller
        };
    },
    toSDK(message) {
        const obj = {};
        obj.address = message.address;
        obj.id = message.id;
        message.pool_params !== undefined && (obj.pool_params = message.pool_params ? exports.PoolParams.toSDK(message.pool_params) : undefined);
        obj.future_pool_governor = message.future_pool_governor;
        message.total_shares !== undefined && (obj.total_shares = message.total_shares ? coin_1.Coin.toSDK(message.total_shares) : undefined);
        if (message.pool_liquidity) {
            obj.pool_liquidity = message.pool_liquidity.map(e => e ? coin_1.Coin.toSDK(e) : undefined);
        }
        else {
            obj.pool_liquidity = [];
        }
        if (message.scaling_factors) {
            obj.scaling_factors = message.scaling_factors.map(e => e);
        }
        else {
            obj.scaling_factors = [];
        }
        obj.scaling_factor_controller = message.scaling_factor_controller;
        return obj;
    },
    fromAmino(object) {
        return {
            address: object.address,
            id: BigInt(object.id),
            pool_params: object?.pool_params ? exports.PoolParams.fromAmino(object.pool_params) : undefined,
            future_pool_governor: object.future_pool_governor,
            total_shares: object?.total_shares ? coin_1.Coin.fromAmino(object.total_shares) : undefined,
            pool_liquidity: Array.isArray(object?.pool_liquidity) ? object.pool_liquidity.map((e) => coin_1.Coin.fromAmino(e)) : [],
            scaling_factors: Array.isArray(object?.scaling_factors) ? object.scaling_factors.map((e) => BigInt(e)) : [],
            scaling_factor_controller: object.scaling_factor_controller
        };
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        obj.id = message.id ? message.id.toString() : undefined;
        obj.pool_params = message.pool_params ? exports.PoolParams.toAmino(message.pool_params) : undefined;
        obj.future_pool_governor = message.future_pool_governor;
        obj.total_shares = message.total_shares ? coin_1.Coin.toAmino(message.total_shares) : undefined;
        if (message.pool_liquidity) {
            obj.pool_liquidity = message.pool_liquidity.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.pool_liquidity = [];
        }
        if (message.scaling_factors) {
            obj.scaling_factors = message.scaling_factors.map(e => e.toString());
        }
        else {
            obj.scaling_factors = [];
        }
        obj.scaling_factor_controller = message.scaling_factor_controller;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Pool.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/StableswapPool",
            value: exports.Pool.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Pool.decode(message.value);
    },
    toProto(message) {
        return exports.Pool.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.Pool",
            value: exports.Pool.encode(message).finish()
        };
    }
};
//# sourceMappingURL=stableswap_pool.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pool = exports.PoolAsset = exports.PoolParams = exports.SmoothWeightChangeParams = void 0;
//@ts-nocheck
const timestamp_1 = require("../../../../google/protobuf/timestamp");
const duration_1 = require("../../../../google/protobuf/duration");
const coin_1 = require("../../../../cosmos/base/v1beta1/coin");
const binary_1 = require("../../../../binary");
const helpers_1 = require("../../../../helpers");
const math_1 = require("@cosmjs/math");
function createBaseSmoothWeightChangeParams() {
    return {
        start_time: new Date(),
        duration: duration_1.Duration.fromPartial({}),
        initial_pool_weights: [],
        target_pool_weights: []
    };
}
exports.SmoothWeightChangeParams = {
    typeUrl: "/osmosis.gamm.v1beta1.SmoothWeightChangeParams",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.start_time !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.start_time), writer.uint32(10).fork()).ldelim();
        }
        if (message.duration !== undefined) {
            duration_1.Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.initial_pool_weights) {
            exports.PoolAsset.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.target_pool_weights) {
            exports.PoolAsset.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSmoothWeightChangeParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.start_time = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.duration = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.initial_pool_weights.push(exports.PoolAsset.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.target_pool_weights.push(exports.PoolAsset.decode(reader, reader.uint32()));
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
            start_time: (0, helpers_1.isSet)(object.start_time) ? (0, helpers_1.fromJsonTimestamp)(object.start_time) : undefined,
            duration: (0, helpers_1.isSet)(object.duration) ? duration_1.Duration.fromJSON(object.duration) : undefined,
            initial_pool_weights: Array.isArray(object?.initial_pool_weights) ? object.initial_pool_weights.map((e) => exports.PoolAsset.fromJSON(e)) : [],
            target_pool_weights: Array.isArray(object?.target_pool_weights) ? object.target_pool_weights.map((e) => exports.PoolAsset.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.start_time !== undefined && (obj.start_time = message.start_time.toISOString());
        message.duration !== undefined && (obj.duration = message.duration ? duration_1.Duration.toJSON(message.duration) : undefined);
        if (message.initial_pool_weights) {
            obj.initial_pool_weights = message.initial_pool_weights.map(e => e ? exports.PoolAsset.toJSON(e) : undefined);
        }
        else {
            obj.initial_pool_weights = [];
        }
        if (message.target_pool_weights) {
            obj.target_pool_weights = message.target_pool_weights.map(e => e ? exports.PoolAsset.toJSON(e) : undefined);
        }
        else {
            obj.target_pool_weights = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSmoothWeightChangeParams();
        message.start_time = object.start_time ?? undefined;
        message.duration = object.duration !== undefined && object.duration !== null ? duration_1.Duration.fromPartial(object.duration) : undefined;
        message.initial_pool_weights = object.initial_pool_weights?.map(e => exports.PoolAsset.fromPartial(e)) || [];
        message.target_pool_weights = object.target_pool_weights?.map(e => exports.PoolAsset.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            start_time: object.start_time ? timestamp_1.Timestamp.fromSDK(object.start_time) : undefined,
            duration: object.duration ? duration_1.Duration.fromSDK(object.duration) : undefined,
            initial_pool_weights: Array.isArray(object?.initial_pool_weights) ? object.initial_pool_weights.map((e) => exports.PoolAsset.fromSDK(e)) : [],
            target_pool_weights: Array.isArray(object?.target_pool_weights) ? object.target_pool_weights.map((e) => exports.PoolAsset.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        message.start_time !== undefined && (obj.start_time = message.start_time ? timestamp_1.Timestamp.toSDK(message.start_time) : undefined);
        message.duration !== undefined && (obj.duration = message.duration ? duration_1.Duration.toSDK(message.duration) : undefined);
        if (message.initial_pool_weights) {
            obj.initial_pool_weights = message.initial_pool_weights.map(e => e ? exports.PoolAsset.toSDK(e) : undefined);
        }
        else {
            obj.initial_pool_weights = [];
        }
        if (message.target_pool_weights) {
            obj.target_pool_weights = message.target_pool_weights.map(e => e ? exports.PoolAsset.toSDK(e) : undefined);
        }
        else {
            obj.target_pool_weights = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            start_time: object.start_time,
            duration: object?.duration ? duration_1.Duration.fromAmino(object.duration) : undefined,
            initial_pool_weights: Array.isArray(object?.initial_pool_weights) ? object.initial_pool_weights.map((e) => exports.PoolAsset.fromAmino(e)) : [],
            target_pool_weights: Array.isArray(object?.target_pool_weights) ? object.target_pool_weights.map((e) => exports.PoolAsset.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.start_time = message.start_time;
        obj.duration = message.duration ? duration_1.Duration.toAmino(message.duration) : undefined;
        if (message.initial_pool_weights) {
            obj.initial_pool_weights = message.initial_pool_weights.map(e => e ? exports.PoolAsset.toAmino(e) : undefined);
        }
        else {
            obj.initial_pool_weights = [];
        }
        if (message.target_pool_weights) {
            obj.target_pool_weights = message.target_pool_weights.map(e => e ? exports.PoolAsset.toAmino(e) : undefined);
        }
        else {
            obj.target_pool_weights = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SmoothWeightChangeParams.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/smooth-weight-change-params",
            value: exports.SmoothWeightChangeParams.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.SmoothWeightChangeParams.decode(message.value);
    },
    toProto(message) {
        return exports.SmoothWeightChangeParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.SmoothWeightChangeParams",
            value: exports.SmoothWeightChangeParams.encode(message).finish()
        };
    }
};
function createBasePoolParams() {
    return {
        swap_fee: "",
        exit_fee: "",
        smooth_weight_change_params: undefined
    };
}
exports.PoolParams = {
    typeUrl: "/osmosis.gamm.v1beta1.PoolParams",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.swap_fee !== "") {
            writer.uint32(10).string(math_1.Decimal.fromUserInput(message.swap_fee, 18).atomics);
        }
        if (message.exit_fee !== "") {
            writer.uint32(18).string(math_1.Decimal.fromUserInput(message.exit_fee, 18).atomics);
        }
        if (message.smooth_weight_change_params !== undefined) {
            exports.SmoothWeightChangeParams.encode(message.smooth_weight_change_params, writer.uint32(26).fork()).ldelim();
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
                case 3:
                    message.smooth_weight_change_params = exports.SmoothWeightChangeParams.decode(reader, reader.uint32());
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
            exit_fee: (0, helpers_1.isSet)(object.exit_fee) ? String(object.exit_fee) : "",
            smooth_weight_change_params: (0, helpers_1.isSet)(object.smooth_weight_change_params) ? exports.SmoothWeightChangeParams.fromJSON(object.smooth_weight_change_params) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.swap_fee !== undefined && (obj.swap_fee = message.swap_fee);
        message.exit_fee !== undefined && (obj.exit_fee = message.exit_fee);
        message.smooth_weight_change_params !== undefined && (obj.smooth_weight_change_params = message.smooth_weight_change_params ? exports.SmoothWeightChangeParams.toJSON(message.smooth_weight_change_params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBasePoolParams();
        message.swap_fee = object.swap_fee ?? "";
        message.exit_fee = object.exit_fee ?? "";
        message.smooth_weight_change_params = object.smooth_weight_change_params !== undefined && object.smooth_weight_change_params !== null ? exports.SmoothWeightChangeParams.fromPartial(object.smooth_weight_change_params) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            swap_fee: object?.swap_fee,
            exit_fee: object?.exit_fee,
            smooth_weight_change_params: object.smooth_weight_change_params ? exports.SmoothWeightChangeParams.fromSDK(object.smooth_weight_change_params) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.swap_fee = message.swap_fee;
        obj.exit_fee = message.exit_fee;
        message.smooth_weight_change_params !== undefined && (obj.smooth_weight_change_params = message.smooth_weight_change_params ? exports.SmoothWeightChangeParams.toSDK(message.smooth_weight_change_params) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            swap_fee: object.swap_fee,
            exit_fee: object.exit_fee,
            smooth_weight_change_params: object?.smooth_weight_change_params ? exports.SmoothWeightChangeParams.fromAmino(object.smooth_weight_change_params) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.swap_fee = message.swap_fee;
        obj.exit_fee = message.exit_fee;
        obj.smooth_weight_change_params = message.smooth_weight_change_params ? exports.SmoothWeightChangeParams.toAmino(message.smooth_weight_change_params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.PoolParams.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/BalancerPoolParams",
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
            typeUrl: "/osmosis.gamm.v1beta1.PoolParams",
            value: exports.PoolParams.encode(message).finish()
        };
    }
};
function createBasePoolAsset() {
    return {
        token: coin_1.Coin.fromPartial({}),
        weight: ""
    };
}
exports.PoolAsset = {
    typeUrl: "/osmosis.gamm.v1beta1.PoolAsset",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.token !== undefined) {
            coin_1.Coin.encode(message.token, writer.uint32(10).fork()).ldelim();
        }
        if (message.weight !== "") {
            writer.uint32(18).string(message.weight);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePoolAsset();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.token = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.weight = reader.string();
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
            token: (0, helpers_1.isSet)(object.token) ? coin_1.Coin.fromJSON(object.token) : undefined,
            weight: (0, helpers_1.isSet)(object.weight) ? String(object.weight) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.token !== undefined && (obj.token = message.token ? coin_1.Coin.toJSON(message.token) : undefined);
        message.weight !== undefined && (obj.weight = message.weight);
        return obj;
    },
    fromPartial(object) {
        const message = createBasePoolAsset();
        message.token = object.token !== undefined && object.token !== null ? coin_1.Coin.fromPartial(object.token) : undefined;
        message.weight = object.weight ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            token: object.token ? coin_1.Coin.fromSDK(object.token) : undefined,
            weight: object?.weight
        };
    },
    toSDK(message) {
        const obj = {};
        message.token !== undefined && (obj.token = message.token ? coin_1.Coin.toSDK(message.token) : undefined);
        obj.weight = message.weight;
        return obj;
    },
    fromAmino(object) {
        return {
            token: object?.token ? coin_1.Coin.fromAmino(object.token) : undefined,
            weight: object.weight
        };
    },
    toAmino(message) {
        const obj = {};
        obj.token = message.token ? coin_1.Coin.toAmino(message.token) : undefined;
        obj.weight = message.weight;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.PoolAsset.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/pool-asset",
            value: exports.PoolAsset.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.PoolAsset.decode(message.value);
    },
    toProto(message) {
        return exports.PoolAsset.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.PoolAsset",
            value: exports.PoolAsset.encode(message).finish()
        };
    }
};
function createBasePool() {
    return {
        $typeUrl: "/osmosis.gamm.v1beta1.Pool",
        address: "",
        id: BigInt(0),
        pool_params: exports.PoolParams.fromPartial({}),
        future_pool_governor: "",
        total_shares: coin_1.Coin.fromPartial({}),
        pool_assets: [],
        total_weight: ""
    };
}
exports.Pool = {
    typeUrl: "/osmosis.gamm.v1beta1.Pool",
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
        for (const v of message.pool_assets) {
            exports.PoolAsset.encode(v, writer.uint32(50).fork()).ldelim();
        }
        if (message.total_weight !== "") {
            writer.uint32(58).string(message.total_weight);
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
                    message.pool_assets.push(exports.PoolAsset.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.total_weight = reader.string();
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
            pool_assets: Array.isArray(object?.pool_assets) ? object.pool_assets.map((e) => exports.PoolAsset.fromJSON(e)) : [],
            total_weight: (0, helpers_1.isSet)(object.total_weight) ? String(object.total_weight) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
        message.pool_params !== undefined && (obj.pool_params = message.pool_params ? exports.PoolParams.toJSON(message.pool_params) : undefined);
        message.future_pool_governor !== undefined && (obj.future_pool_governor = message.future_pool_governor);
        message.total_shares !== undefined && (obj.total_shares = message.total_shares ? coin_1.Coin.toJSON(message.total_shares) : undefined);
        if (message.pool_assets) {
            obj.pool_assets = message.pool_assets.map(e => e ? exports.PoolAsset.toJSON(e) : undefined);
        }
        else {
            obj.pool_assets = [];
        }
        message.total_weight !== undefined && (obj.total_weight = message.total_weight);
        return obj;
    },
    fromPartial(object) {
        const message = createBasePool();
        message.address = object.address ?? "";
        message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
        message.pool_params = object.pool_params !== undefined && object.pool_params !== null ? exports.PoolParams.fromPartial(object.pool_params) : undefined;
        message.future_pool_governor = object.future_pool_governor ?? "";
        message.total_shares = object.total_shares !== undefined && object.total_shares !== null ? coin_1.Coin.fromPartial(object.total_shares) : undefined;
        message.pool_assets = object.pool_assets?.map(e => exports.PoolAsset.fromPartial(e)) || [];
        message.total_weight = object.total_weight ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            address: object?.address,
            id: object?.id,
            pool_params: object.pool_params ? exports.PoolParams.fromSDK(object.pool_params) : undefined,
            future_pool_governor: object?.future_pool_governor,
            total_shares: object.total_shares ? coin_1.Coin.fromSDK(object.total_shares) : undefined,
            pool_assets: Array.isArray(object?.pool_assets) ? object.pool_assets.map((e) => exports.PoolAsset.fromSDK(e)) : [],
            total_weight: object?.total_weight
        };
    },
    toSDK(message) {
        const obj = {};
        obj.address = message.address;
        obj.id = message.id;
        message.pool_params !== undefined && (obj.pool_params = message.pool_params ? exports.PoolParams.toSDK(message.pool_params) : undefined);
        obj.future_pool_governor = message.future_pool_governor;
        message.total_shares !== undefined && (obj.total_shares = message.total_shares ? coin_1.Coin.toSDK(message.total_shares) : undefined);
        if (message.pool_assets) {
            obj.pool_assets = message.pool_assets.map(e => e ? exports.PoolAsset.toSDK(e) : undefined);
        }
        else {
            obj.pool_assets = [];
        }
        obj.total_weight = message.total_weight;
        return obj;
    },
    fromAmino(object) {
        return {
            address: object.address,
            id: BigInt(object.id),
            pool_params: object?.pool_params ? exports.PoolParams.fromAmino(object.pool_params) : undefined,
            future_pool_governor: object.future_pool_governor,
            total_shares: object?.total_shares ? coin_1.Coin.fromAmino(object.total_shares) : undefined,
            pool_assets: Array.isArray(object?.pool_assets) ? object.pool_assets.map((e) => exports.PoolAsset.fromAmino(e)) : [],
            total_weight: object.total_weight
        };
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        obj.id = message.id ? message.id.toString() : undefined;
        obj.pool_params = message.pool_params ? exports.PoolParams.toAmino(message.pool_params) : undefined;
        obj.future_pool_governor = message.future_pool_governor;
        obj.total_shares = message.total_shares ? coin_1.Coin.toAmino(message.total_shares) : undefined;
        if (message.pool_assets) {
            obj.pool_assets = message.pool_assets.map(e => e ? exports.PoolAsset.toAmino(e) : undefined);
        }
        else {
            obj.pool_assets = [];
        }
        obj.total_weight = message.total_weight;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Pool.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/BalancerPool",
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
            typeUrl: "/osmosis.gamm.v1beta1.Pool",
            value: exports.Pool.encode(message).finish()
        };
    }
};
//# sourceMappingURL=balancerPool.js.map
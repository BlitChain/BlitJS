"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PoolI_ToAmino = exports.PoolI_FromAmino = exports.PoolI_InterfaceDecoder = exports.GenesisState = exports.Params = void 0;
//@ts-nocheck
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const any_1 = require("../../../google/protobuf/any");
const balancerPool_1 = require("../pool-models/balancer/balancerPool");
const stableswap_pool_1 = require("../pool-models/stableswap/stableswap_pool");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
function createBaseParams() {
    return {
        pool_creation_fee: []
    };
}
exports.Params = {
    typeUrl: "/osmosis.gamm.v1beta1.Params",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.pool_creation_fee) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pool_creation_fee.push(coin_1.Coin.decode(reader, reader.uint32()));
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
            pool_creation_fee: Array.isArray(object?.pool_creation_fee) ? object.pool_creation_fee.map((e) => coin_1.Coin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.pool_creation_fee) {
            obj.pool_creation_fee = message.pool_creation_fee.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.pool_creation_fee = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.pool_creation_fee = object.pool_creation_fee?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            pool_creation_fee: Array.isArray(object?.pool_creation_fee) ? object.pool_creation_fee.map((e) => coin_1.Coin.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.pool_creation_fee) {
            obj.pool_creation_fee = message.pool_creation_fee.map(e => e ? coin_1.Coin.toSDK(e) : undefined);
        }
        else {
            obj.pool_creation_fee = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            pool_creation_fee: Array.isArray(object?.pool_creation_fee) ? object.pool_creation_fee.map((e) => coin_1.Coin.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.pool_creation_fee) {
            obj.pool_creation_fee = message.pool_creation_fee.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.pool_creation_fee = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Params.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/params",
            value: exports.Params.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Params.decode(message.value);
    },
    toProto(message) {
        return exports.Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.Params",
            value: exports.Params.encode(message).finish()
        };
    }
};
function createBaseGenesisState() {
    return {
        pools: [],
        next_pool_number: BigInt(0),
        params: exports.Params.fromPartial({})
    };
}
exports.GenesisState = {
    typeUrl: "/osmosis.gamm.v1beta1.GenesisState",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.pools) {
            any_1.Any.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.next_pool_number !== BigInt(0)) {
            writer.uint32(16).uint64(message.next_pool_number);
        }
        if (message.params !== undefined) {
            exports.Params.encode(message.params, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pools.push((0, exports.PoolI_InterfaceDecoder)(reader));
                    break;
                case 2:
                    message.next_pool_number = reader.uint64();
                    break;
                case 3:
                    message.params = exports.Params.decode(reader, reader.uint32());
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
            next_pool_number: (0, helpers_1.isSet)(object.next_pool_number) ? BigInt(object.next_pool_number.toString()) : BigInt(0),
            params: (0, helpers_1.isSet)(object.params) ? exports.Params.fromJSON(object.params) : undefined
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
        message.next_pool_number !== undefined && (obj.next_pool_number = (message.next_pool_number || BigInt(0)).toString());
        message.params !== undefined && (obj.params = message.params ? exports.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.pools = object.pools?.map(e => any_1.Any.fromPartial(e)) || [];
        message.next_pool_number = object.next_pool_number !== undefined && object.next_pool_number !== null ? BigInt(object.next_pool_number.toString()) : BigInt(0);
        message.params = object.params !== undefined && object.params !== null ? exports.Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            pools: Array.isArray(object?.pools) ? object.pools.map((e) => any_1.Any.fromSDK(e)) : [],
            next_pool_number: object?.next_pool_number,
            params: object.params ? exports.Params.fromSDK(object.params) : undefined
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
        obj.next_pool_number = message.next_pool_number;
        message.params !== undefined && (obj.params = message.params ? exports.Params.toSDK(message.params) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            pools: Array.isArray(object?.pools) ? object.pools.map((e) => (0, exports.PoolI_FromAmino)(e)) : [],
            next_pool_number: BigInt(object.next_pool_number),
            params: object?.params ? exports.Params.fromAmino(object.params) : undefined
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
        obj.next_pool_number = message.next_pool_number ? message.next_pool_number.toString() : undefined;
        obj.params = message.params ? exports.Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GenesisState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/genesis-state",
            value: exports.GenesisState.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GenesisState.decode(message.value);
    },
    toProto(message) {
        return exports.GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.GenesisState",
            value: exports.GenesisState.encode(message).finish()
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
//# sourceMappingURL=genesis.js.map
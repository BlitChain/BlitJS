//@ts-nocheck
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Any } from "../../../google/protobuf/any";
import { Pool as Pool1 } from "../pool-models/balancer/balancerPool";
import { Pool as Pool2 } from "../pool-models/stableswap/stableswap_pool";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
function createBaseParams() {
    return {
        pool_creation_fee: []
    };
}
export const Params = {
    typeUrl: "/osmosis.gamm.v1beta1.Params",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.pool_creation_fee) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pool_creation_fee.push(Coin.decode(reader, reader.uint32()));
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
            pool_creation_fee: Array.isArray(object?.pool_creation_fee) ? object.pool_creation_fee.map((e) => Coin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.pool_creation_fee) {
            obj.pool_creation_fee = message.pool_creation_fee.map(e => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.pool_creation_fee = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.pool_creation_fee = object.pool_creation_fee?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            pool_creation_fee: Array.isArray(object?.pool_creation_fee) ? object.pool_creation_fee.map((e) => Coin.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.pool_creation_fee) {
            obj.pool_creation_fee = message.pool_creation_fee.map(e => e ? Coin.toSDK(e) : undefined);
        }
        else {
            obj.pool_creation_fee = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            pool_creation_fee: Array.isArray(object?.pool_creation_fee) ? object.pool_creation_fee.map((e) => Coin.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.pool_creation_fee) {
            obj.pool_creation_fee = message.pool_creation_fee.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.pool_creation_fee = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return Params.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/params",
            value: Params.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Params.decode(message.value);
    },
    toProto(message) {
        return Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.Params",
            value: Params.encode(message).finish()
        };
    }
};
function createBaseGenesisState() {
    return {
        pools: [],
        next_pool_number: BigInt(0),
        params: Params.fromPartial({})
    };
}
export const GenesisState = {
    typeUrl: "/osmosis.gamm.v1beta1.GenesisState",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.pools) {
            Any.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.next_pool_number !== BigInt(0)) {
            writer.uint32(16).uint64(message.next_pool_number);
        }
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pools.push(PoolI_InterfaceDecoder(reader));
                    break;
                case 2:
                    message.next_pool_number = reader.uint64();
                    break;
                case 3:
                    message.params = Params.decode(reader, reader.uint32());
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
            next_pool_number: isSet(object.next_pool_number) ? BigInt(object.next_pool_number.toString()) : BigInt(0),
            params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
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
        message.next_pool_number !== undefined && (obj.next_pool_number = (message.next_pool_number || BigInt(0)).toString());
        message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.pools = object.pools?.map(e => Any.fromPartial(e)) || [];
        message.next_pool_number = object.next_pool_number !== undefined && object.next_pool_number !== null ? BigInt(object.next_pool_number.toString()) : BigInt(0);
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            pools: Array.isArray(object?.pools) ? object.pools.map((e) => Any.fromSDK(e)) : [],
            next_pool_number: object?.next_pool_number,
            params: object.params ? Params.fromSDK(object.params) : undefined
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
        obj.next_pool_number = message.next_pool_number;
        message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            pools: Array.isArray(object?.pools) ? object.pools.map((e) => PoolI_FromAmino(e)) : [],
            next_pool_number: BigInt(object.next_pool_number),
            params: object?.params ? Params.fromAmino(object.params) : undefined
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
        obj.next_pool_number = message.next_pool_number ? message.next_pool_number.toString() : undefined;
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return GenesisState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/genesis-state",
            value: GenesisState.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GenesisState.decode(message.value);
    },
    toProto(message) {
        return GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.GenesisState",
            value: GenesisState.encode(message).finish()
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
//# sourceMappingURL=genesis.js.map
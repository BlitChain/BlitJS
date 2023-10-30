"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgCreateBalancerPoolResponse = exports.MsgCreateBalancerPool = void 0;
//@ts-nocheck
const balancerPool_1 = require("../balancerPool");
const binary_1 = require("../../../../../binary");
const helpers_1 = require("../../../../../helpers");
function createBaseMsgCreateBalancerPool() {
    return {
        sender: "",
        pool_params: undefined,
        pool_assets: [],
        future_pool_governor: ""
    };
}
exports.MsgCreateBalancerPool = {
    typeUrl: "/osmosis.gamm.poolmodels.balancer.v1beta1.MsgCreateBalancerPool",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.pool_params !== undefined) {
            balancerPool_1.PoolParams.encode(message.pool_params, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.pool_assets) {
            balancerPool_1.PoolAsset.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.future_pool_governor !== "") {
            writer.uint32(34).string(message.future_pool_governor);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateBalancerPool();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.pool_params = balancerPool_1.PoolParams.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.pool_assets.push(balancerPool_1.PoolAsset.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.future_pool_governor = reader.string();
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
            pool_params: (0, helpers_1.isSet)(object.pool_params) ? balancerPool_1.PoolParams.fromJSON(object.pool_params) : undefined,
            pool_assets: Array.isArray(object?.pool_assets) ? object.pool_assets.map((e) => balancerPool_1.PoolAsset.fromJSON(e)) : [],
            future_pool_governor: (0, helpers_1.isSet)(object.future_pool_governor) ? String(object.future_pool_governor) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.pool_params !== undefined && (obj.pool_params = message.pool_params ? balancerPool_1.PoolParams.toJSON(message.pool_params) : undefined);
        if (message.pool_assets) {
            obj.pool_assets = message.pool_assets.map(e => e ? balancerPool_1.PoolAsset.toJSON(e) : undefined);
        }
        else {
            obj.pool_assets = [];
        }
        message.future_pool_governor !== undefined && (obj.future_pool_governor = message.future_pool_governor);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateBalancerPool();
        message.sender = object.sender ?? "";
        message.pool_params = object.pool_params !== undefined && object.pool_params !== null ? balancerPool_1.PoolParams.fromPartial(object.pool_params) : undefined;
        message.pool_assets = object.pool_assets?.map(e => balancerPool_1.PoolAsset.fromPartial(e)) || [];
        message.future_pool_governor = object.future_pool_governor ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            sender: object?.sender,
            pool_params: object.pool_params ? balancerPool_1.PoolParams.fromSDK(object.pool_params) : undefined,
            pool_assets: Array.isArray(object?.pool_assets) ? object.pool_assets.map((e) => balancerPool_1.PoolAsset.fromSDK(e)) : [],
            future_pool_governor: object?.future_pool_governor
        };
    },
    toSDK(message) {
        const obj = {};
        obj.sender = message.sender;
        message.pool_params !== undefined && (obj.pool_params = message.pool_params ? balancerPool_1.PoolParams.toSDK(message.pool_params) : undefined);
        if (message.pool_assets) {
            obj.pool_assets = message.pool_assets.map(e => e ? balancerPool_1.PoolAsset.toSDK(e) : undefined);
        }
        else {
            obj.pool_assets = [];
        }
        obj.future_pool_governor = message.future_pool_governor;
        return obj;
    },
    fromAmino(object) {
        return {
            sender: object.sender,
            pool_params: object?.pool_params ? balancerPool_1.PoolParams.fromAmino(object.pool_params) : undefined,
            pool_assets: Array.isArray(object?.pool_assets) ? object.pool_assets.map((e) => balancerPool_1.PoolAsset.fromAmino(e)) : [],
            future_pool_governor: object.future_pool_governor
        };
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.pool_params = message.pool_params ? balancerPool_1.PoolParams.toAmino(message.pool_params) : undefined;
        if (message.pool_assets) {
            obj.pool_assets = message.pool_assets.map(e => e ? balancerPool_1.PoolAsset.toAmino(e) : undefined);
        }
        else {
            obj.pool_assets = [];
        }
        obj.future_pool_governor = message.future_pool_governor;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCreateBalancerPool.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/create-balancer-pool",
            value: exports.MsgCreateBalancerPool.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgCreateBalancerPool.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreateBalancerPool.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.poolmodels.balancer.v1beta1.MsgCreateBalancerPool",
            value: exports.MsgCreateBalancerPool.encode(message).finish()
        };
    }
};
function createBaseMsgCreateBalancerPoolResponse() {
    return {
        pool_id: BigInt(0)
    };
}
exports.MsgCreateBalancerPoolResponse = {
    typeUrl: "/osmosis.gamm.poolmodels.balancer.v1beta1.MsgCreateBalancerPoolResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.pool_id !== BigInt(0)) {
            writer.uint32(8).uint64(message.pool_id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateBalancerPoolResponse();
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
        const message = createBaseMsgCreateBalancerPoolResponse();
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
        return exports.MsgCreateBalancerPoolResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/poolmodels/balancer/create-balancer-pool-response",
            value: exports.MsgCreateBalancerPoolResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgCreateBalancerPoolResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreateBalancerPoolResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.poolmodels.balancer.v1beta1.MsgCreateBalancerPoolResponse",
            value: exports.MsgCreateBalancerPoolResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=tx.js.map
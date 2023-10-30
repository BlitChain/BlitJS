"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = exports.Params = void 0;
//@ts-nocheck
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
function createBaseParams() {
    return {
        pool_creation_fee: []
    };
}
exports.Params = {
    typeUrl: "/osmosis.swaprouter.v1beta1.Params",
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
            type: "osmosis/swaprouter/params",
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
            typeUrl: "/osmosis.swaprouter.v1beta1.Params",
            value: exports.Params.encode(message).finish()
        };
    }
};
function createBaseGenesisState() {
    return {
        next_pool_id: BigInt(0),
        params: exports.Params.fromPartial({})
    };
}
exports.GenesisState = {
    typeUrl: "/osmosis.swaprouter.v1beta1.GenesisState",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.next_pool_id !== BigInt(0)) {
            writer.uint32(8).uint64(message.next_pool_id);
        }
        if (message.params !== undefined) {
            exports.Params.encode(message.params, writer.uint32(18).fork()).ldelim();
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
                    message.next_pool_id = reader.uint64();
                    break;
                case 2:
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
            next_pool_id: (0, helpers_1.isSet)(object.next_pool_id) ? BigInt(object.next_pool_id.toString()) : BigInt(0),
            params: (0, helpers_1.isSet)(object.params) ? exports.Params.fromJSON(object.params) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.next_pool_id !== undefined && (obj.next_pool_id = (message.next_pool_id || BigInt(0)).toString());
        message.params !== undefined && (obj.params = message.params ? exports.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.next_pool_id = object.next_pool_id !== undefined && object.next_pool_id !== null ? BigInt(object.next_pool_id.toString()) : BigInt(0);
        message.params = object.params !== undefined && object.params !== null ? exports.Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            next_pool_id: object?.next_pool_id,
            params: object.params ? exports.Params.fromSDK(object.params) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.next_pool_id = message.next_pool_id;
        message.params !== undefined && (obj.params = message.params ? exports.Params.toSDK(message.params) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            next_pool_id: BigInt(object.next_pool_id),
            params: object?.params ? exports.Params.fromAmino(object.params) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.next_pool_id = message.next_pool_id ? message.next_pool_id.toString() : undefined;
        obj.params = message.params ? exports.Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GenesisState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/swaprouter/genesis-state",
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
            typeUrl: "/osmosis.swaprouter.v1beta1.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
//# sourceMappingURL=genesis.js.map
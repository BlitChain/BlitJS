"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PoolStatistics = exports.Trade = exports.Route = exports.TokenPairArbRoutes = void 0;
//@ts-nocheck
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
function createBaseTokenPairArbRoutes() {
    return {
        arb_routes: [],
        token_in: "",
        token_out: ""
    };
}
exports.TokenPairArbRoutes = {
    typeUrl: "/osmosis.protorev.v1beta1.TokenPairArbRoutes",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.arb_routes) {
            exports.Route.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.token_in !== "") {
            writer.uint32(18).string(message.token_in);
        }
        if (message.token_out !== "") {
            writer.uint32(26).string(message.token_out);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTokenPairArbRoutes();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.arb_routes.push(exports.Route.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.token_in = reader.string();
                    break;
                case 3:
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
            arb_routes: Array.isArray(object?.arb_routes) ? object.arb_routes.map((e) => exports.Route.fromJSON(e)) : [],
            token_in: (0, helpers_1.isSet)(object.token_in) ? String(object.token_in) : "",
            token_out: (0, helpers_1.isSet)(object.token_out) ? String(object.token_out) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.arb_routes) {
            obj.arb_routes = message.arb_routes.map(e => e ? exports.Route.toJSON(e) : undefined);
        }
        else {
            obj.arb_routes = [];
        }
        message.token_in !== undefined && (obj.token_in = message.token_in);
        message.token_out !== undefined && (obj.token_out = message.token_out);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTokenPairArbRoutes();
        message.arb_routes = object.arb_routes?.map(e => exports.Route.fromPartial(e)) || [];
        message.token_in = object.token_in ?? "";
        message.token_out = object.token_out ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            arb_routes: Array.isArray(object?.arb_routes) ? object.arb_routes.map((e) => exports.Route.fromSDK(e)) : [],
            token_in: object?.token_in,
            token_out: object?.token_out
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.arb_routes) {
            obj.arb_routes = message.arb_routes.map(e => e ? exports.Route.toSDK(e) : undefined);
        }
        else {
            obj.arb_routes = [];
        }
        obj.token_in = message.token_in;
        obj.token_out = message.token_out;
        return obj;
    },
    fromAmino(object) {
        return {
            arb_routes: Array.isArray(object?.arb_routes) ? object.arb_routes.map((e) => exports.Route.fromAmino(e)) : [],
            token_in: object.token_in,
            token_out: object.token_out
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.arb_routes) {
            obj.arb_routes = message.arb_routes.map(e => e ? exports.Route.toAmino(e) : undefined);
        }
        else {
            obj.arb_routes = [];
        }
        obj.token_in = message.token_in;
        obj.token_out = message.token_out;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.TokenPairArbRoutes.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/protorev/token-pair-arb-routes",
            value: exports.TokenPairArbRoutes.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.TokenPairArbRoutes.decode(message.value);
    },
    toProto(message) {
        return exports.TokenPairArbRoutes.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.protorev.v1beta1.TokenPairArbRoutes",
            value: exports.TokenPairArbRoutes.encode(message).finish()
        };
    }
};
function createBaseRoute() {
    return {
        trades: []
    };
}
exports.Route = {
    typeUrl: "/osmosis.protorev.v1beta1.Route",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.trades) {
            exports.Trade.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRoute();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.trades.push(exports.Trade.decode(reader, reader.uint32()));
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
            trades: Array.isArray(object?.trades) ? object.trades.map((e) => exports.Trade.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.trades) {
            obj.trades = message.trades.map(e => e ? exports.Trade.toJSON(e) : undefined);
        }
        else {
            obj.trades = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRoute();
        message.trades = object.trades?.map(e => exports.Trade.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            trades: Array.isArray(object?.trades) ? object.trades.map((e) => exports.Trade.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.trades) {
            obj.trades = message.trades.map(e => e ? exports.Trade.toSDK(e) : undefined);
        }
        else {
            obj.trades = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            trades: Array.isArray(object?.trades) ? object.trades.map((e) => exports.Trade.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.trades) {
            obj.trades = message.trades.map(e => e ? exports.Trade.toAmino(e) : undefined);
        }
        else {
            obj.trades = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Route.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/protorev/route",
            value: exports.Route.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Route.decode(message.value);
    },
    toProto(message) {
        return exports.Route.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.protorev.v1beta1.Route",
            value: exports.Route.encode(message).finish()
        };
    }
};
function createBaseTrade() {
    return {
        pool: BigInt(0),
        token_in: "",
        token_out: ""
    };
}
exports.Trade = {
    typeUrl: "/osmosis.protorev.v1beta1.Trade",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.pool !== BigInt(0)) {
            writer.uint32(8).uint64(message.pool);
        }
        if (message.token_in !== "") {
            writer.uint32(18).string(message.token_in);
        }
        if (message.token_out !== "") {
            writer.uint32(26).string(message.token_out);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTrade();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pool = reader.uint64();
                    break;
                case 2:
                    message.token_in = reader.string();
                    break;
                case 3:
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
            pool: (0, helpers_1.isSet)(object.pool) ? BigInt(object.pool.toString()) : BigInt(0),
            token_in: (0, helpers_1.isSet)(object.token_in) ? String(object.token_in) : "",
            token_out: (0, helpers_1.isSet)(object.token_out) ? String(object.token_out) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.pool !== undefined && (obj.pool = (message.pool || BigInt(0)).toString());
        message.token_in !== undefined && (obj.token_in = message.token_in);
        message.token_out !== undefined && (obj.token_out = message.token_out);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTrade();
        message.pool = object.pool !== undefined && object.pool !== null ? BigInt(object.pool.toString()) : BigInt(0);
        message.token_in = object.token_in ?? "";
        message.token_out = object.token_out ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            pool: object?.pool,
            token_in: object?.token_in,
            token_out: object?.token_out
        };
    },
    toSDK(message) {
        const obj = {};
        obj.pool = message.pool;
        obj.token_in = message.token_in;
        obj.token_out = message.token_out;
        return obj;
    },
    fromAmino(object) {
        return {
            pool: BigInt(object.pool),
            token_in: object.token_in,
            token_out: object.token_out
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pool = message.pool ? message.pool.toString() : undefined;
        obj.token_in = message.token_in;
        obj.token_out = message.token_out;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Trade.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/protorev/trade",
            value: exports.Trade.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Trade.decode(message.value);
    },
    toProto(message) {
        return exports.Trade.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.protorev.v1beta1.Trade",
            value: exports.Trade.encode(message).finish()
        };
    }
};
function createBasePoolStatistics() {
    return {
        profits: [],
        number_of_trades: "",
        pool_id: BigInt(0)
    };
}
exports.PoolStatistics = {
    typeUrl: "/osmosis.protorev.v1beta1.PoolStatistics",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.profits) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.number_of_trades !== "") {
            writer.uint32(18).string(message.number_of_trades);
        }
        if (message.pool_id !== BigInt(0)) {
            writer.uint32(24).uint64(message.pool_id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePoolStatistics();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.profits.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.number_of_trades = reader.string();
                    break;
                case 3:
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
            profits: Array.isArray(object?.profits) ? object.profits.map((e) => coin_1.Coin.fromJSON(e)) : [],
            number_of_trades: (0, helpers_1.isSet)(object.number_of_trades) ? String(object.number_of_trades) : "",
            pool_id: (0, helpers_1.isSet)(object.pool_id) ? BigInt(object.pool_id.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.profits) {
            obj.profits = message.profits.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.profits = [];
        }
        message.number_of_trades !== undefined && (obj.number_of_trades = message.number_of_trades);
        message.pool_id !== undefined && (obj.pool_id = (message.pool_id || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBasePoolStatistics();
        message.profits = object.profits?.map(e => coin_1.Coin.fromPartial(e)) || [];
        message.number_of_trades = object.number_of_trades ?? "";
        message.pool_id = object.pool_id !== undefined && object.pool_id !== null ? BigInt(object.pool_id.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            profits: Array.isArray(object?.profits) ? object.profits.map((e) => coin_1.Coin.fromSDK(e)) : [],
            number_of_trades: object?.number_of_trades,
            pool_id: object?.pool_id
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.profits) {
            obj.profits = message.profits.map(e => e ? coin_1.Coin.toSDK(e) : undefined);
        }
        else {
            obj.profits = [];
        }
        obj.number_of_trades = message.number_of_trades;
        obj.pool_id = message.pool_id;
        return obj;
    },
    fromAmino(object) {
        return {
            profits: Array.isArray(object?.profits) ? object.profits.map((e) => coin_1.Coin.fromAmino(e)) : [],
            number_of_trades: object.number_of_trades,
            pool_id: BigInt(object.pool_id)
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.profits) {
            obj.profits = message.profits.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.profits = [];
        }
        obj.number_of_trades = message.number_of_trades;
        obj.pool_id = message.pool_id ? message.pool_id.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.PoolStatistics.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/protorev/pool-statistics",
            value: exports.PoolStatistics.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.PoolStatistics.decode(message.value);
    },
    toProto(message) {
        return exports.PoolStatistics.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.protorev.v1beta1.PoolStatistics",
            value: exports.PoolStatistics.encode(message).finish()
        };
    }
};
//# sourceMappingURL=protorev.js.map
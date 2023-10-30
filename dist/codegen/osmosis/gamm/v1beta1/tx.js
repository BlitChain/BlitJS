"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgExitSwapExternAmountOutResponse = exports.MsgExitSwapExternAmountOut = exports.MsgExitSwapShareAmountInResponse = exports.MsgExitSwapShareAmountIn = exports.MsgJoinSwapShareAmountOutResponse = exports.MsgJoinSwapShareAmountOut = exports.MsgJoinSwapExternAmountInResponse = exports.MsgJoinSwapExternAmountIn = exports.MsgSwapExactAmountOutResponse = exports.MsgSwapExactAmountOut = exports.SwapAmountOutRoute = exports.MsgSwapExactAmountInResponse = exports.MsgSwapExactAmountIn = exports.SwapAmountInRoute = exports.MsgExitPoolResponse = exports.MsgExitPool = exports.MsgJoinPoolResponse = exports.MsgJoinPool = void 0;
//@ts-nocheck
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
function createBaseMsgJoinPool() {
    return {
        sender: "",
        pool_id: BigInt(0),
        share_out_amount: "",
        token_in_maxs: []
    };
}
exports.MsgJoinPool = {
    typeUrl: "/osmosis.gamm.v1beta1.MsgJoinPool",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.pool_id !== BigInt(0)) {
            writer.uint32(16).uint64(message.pool_id);
        }
        if (message.share_out_amount !== "") {
            writer.uint32(26).string(message.share_out_amount);
        }
        for (const v of message.token_in_maxs) {
            coin_1.Coin.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgJoinPool();
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
                    message.share_out_amount = reader.string();
                    break;
                case 4:
                    message.token_in_maxs.push(coin_1.Coin.decode(reader, reader.uint32()));
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
            share_out_amount: (0, helpers_1.isSet)(object.share_out_amount) ? String(object.share_out_amount) : "",
            token_in_maxs: Array.isArray(object?.token_in_maxs) ? object.token_in_maxs.map((e) => coin_1.Coin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.pool_id !== undefined && (obj.pool_id = (message.pool_id || BigInt(0)).toString());
        message.share_out_amount !== undefined && (obj.share_out_amount = message.share_out_amount);
        if (message.token_in_maxs) {
            obj.token_in_maxs = message.token_in_maxs.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.token_in_maxs = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgJoinPool();
        message.sender = object.sender ?? "";
        message.pool_id = object.pool_id !== undefined && object.pool_id !== null ? BigInt(object.pool_id.toString()) : BigInt(0);
        message.share_out_amount = object.share_out_amount ?? "";
        message.token_in_maxs = object.token_in_maxs?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            sender: object?.sender,
            pool_id: object?.pool_id,
            share_out_amount: object?.share_out_amount,
            token_in_maxs: Array.isArray(object?.token_in_maxs) ? object.token_in_maxs.map((e) => coin_1.Coin.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.pool_id = message.pool_id;
        obj.share_out_amount = message.share_out_amount;
        if (message.token_in_maxs) {
            obj.token_in_maxs = message.token_in_maxs.map(e => e ? coin_1.Coin.toSDK(e) : undefined);
        }
        else {
            obj.token_in_maxs = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            sender: object.sender,
            pool_id: BigInt(object.pool_id),
            share_out_amount: object.share_out_amount,
            token_in_maxs: Array.isArray(object?.token_in_maxs) ? object.token_in_maxs.map((e) => coin_1.Coin.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.pool_id = message.pool_id ? message.pool_id.toString() : undefined;
        obj.share_out_amount = message.share_out_amount;
        if (message.token_in_maxs) {
            obj.token_in_maxs = message.token_in_maxs.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.token_in_maxs = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgJoinPool.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/join-pool",
            value: exports.MsgJoinPool.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgJoinPool.decode(message.value);
    },
    toProto(message) {
        return exports.MsgJoinPool.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.MsgJoinPool",
            value: exports.MsgJoinPool.encode(message).finish()
        };
    }
};
function createBaseMsgJoinPoolResponse() {
    return {
        share_out_amount: "",
        token_in: []
    };
}
exports.MsgJoinPoolResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.MsgJoinPoolResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.share_out_amount !== "") {
            writer.uint32(10).string(message.share_out_amount);
        }
        for (const v of message.token_in) {
            coin_1.Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgJoinPoolResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.share_out_amount = reader.string();
                    break;
                case 2:
                    message.token_in.push(coin_1.Coin.decode(reader, reader.uint32()));
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
            token_in: Array.isArray(object?.token_in) ? object.token_in.map((e) => coin_1.Coin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.share_out_amount !== undefined && (obj.share_out_amount = message.share_out_amount);
        if (message.token_in) {
            obj.token_in = message.token_in.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.token_in = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgJoinPoolResponse();
        message.share_out_amount = object.share_out_amount ?? "";
        message.token_in = object.token_in?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            share_out_amount: object?.share_out_amount,
            token_in: Array.isArray(object?.token_in) ? object.token_in.map((e) => coin_1.Coin.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.share_out_amount = message.share_out_amount;
        if (message.token_in) {
            obj.token_in = message.token_in.map(e => e ? coin_1.Coin.toSDK(e) : undefined);
        }
        else {
            obj.token_in = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            share_out_amount: object.share_out_amount,
            token_in: Array.isArray(object?.token_in) ? object.token_in.map((e) => coin_1.Coin.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.share_out_amount = message.share_out_amount;
        if (message.token_in) {
            obj.token_in = message.token_in.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.token_in = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgJoinPoolResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/join-pool-response",
            value: exports.MsgJoinPoolResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgJoinPoolResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgJoinPoolResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.MsgJoinPoolResponse",
            value: exports.MsgJoinPoolResponse.encode(message).finish()
        };
    }
};
function createBaseMsgExitPool() {
    return {
        sender: "",
        pool_id: BigInt(0),
        share_in_amount: "",
        token_out_mins: []
    };
}
exports.MsgExitPool = {
    typeUrl: "/osmosis.gamm.v1beta1.MsgExitPool",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.pool_id !== BigInt(0)) {
            writer.uint32(16).uint64(message.pool_id);
        }
        if (message.share_in_amount !== "") {
            writer.uint32(26).string(message.share_in_amount);
        }
        for (const v of message.token_out_mins) {
            coin_1.Coin.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgExitPool();
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
                    message.share_in_amount = reader.string();
                    break;
                case 4:
                    message.token_out_mins.push(coin_1.Coin.decode(reader, reader.uint32()));
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
            share_in_amount: (0, helpers_1.isSet)(object.share_in_amount) ? String(object.share_in_amount) : "",
            token_out_mins: Array.isArray(object?.token_out_mins) ? object.token_out_mins.map((e) => coin_1.Coin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.pool_id !== undefined && (obj.pool_id = (message.pool_id || BigInt(0)).toString());
        message.share_in_amount !== undefined && (obj.share_in_amount = message.share_in_amount);
        if (message.token_out_mins) {
            obj.token_out_mins = message.token_out_mins.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.token_out_mins = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgExitPool();
        message.sender = object.sender ?? "";
        message.pool_id = object.pool_id !== undefined && object.pool_id !== null ? BigInt(object.pool_id.toString()) : BigInt(0);
        message.share_in_amount = object.share_in_amount ?? "";
        message.token_out_mins = object.token_out_mins?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            sender: object?.sender,
            pool_id: object?.pool_id,
            share_in_amount: object?.share_in_amount,
            token_out_mins: Array.isArray(object?.token_out_mins) ? object.token_out_mins.map((e) => coin_1.Coin.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.pool_id = message.pool_id;
        obj.share_in_amount = message.share_in_amount;
        if (message.token_out_mins) {
            obj.token_out_mins = message.token_out_mins.map(e => e ? coin_1.Coin.toSDK(e) : undefined);
        }
        else {
            obj.token_out_mins = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            sender: object.sender,
            pool_id: BigInt(object.pool_id),
            share_in_amount: object.share_in_amount,
            token_out_mins: Array.isArray(object?.token_out_mins) ? object.token_out_mins.map((e) => coin_1.Coin.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.pool_id = message.pool_id ? message.pool_id.toString() : undefined;
        obj.share_in_amount = message.share_in_amount;
        if (message.token_out_mins) {
            obj.token_out_mins = message.token_out_mins.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.token_out_mins = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgExitPool.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/exit-pool",
            value: exports.MsgExitPool.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgExitPool.decode(message.value);
    },
    toProto(message) {
        return exports.MsgExitPool.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.MsgExitPool",
            value: exports.MsgExitPool.encode(message).finish()
        };
    }
};
function createBaseMsgExitPoolResponse() {
    return {
        token_out: []
    };
}
exports.MsgExitPoolResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.MsgExitPoolResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.token_out) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgExitPoolResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.token_out.push(coin_1.Coin.decode(reader, reader.uint32()));
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
            token_out: Array.isArray(object?.token_out) ? object.token_out.map((e) => coin_1.Coin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.token_out) {
            obj.token_out = message.token_out.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.token_out = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgExitPoolResponse();
        message.token_out = object.token_out?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            token_out: Array.isArray(object?.token_out) ? object.token_out.map((e) => coin_1.Coin.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.token_out) {
            obj.token_out = message.token_out.map(e => e ? coin_1.Coin.toSDK(e) : undefined);
        }
        else {
            obj.token_out = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            token_out: Array.isArray(object?.token_out) ? object.token_out.map((e) => coin_1.Coin.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.token_out) {
            obj.token_out = message.token_out.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.token_out = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgExitPoolResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/exit-pool-response",
            value: exports.MsgExitPoolResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgExitPoolResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgExitPoolResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.MsgExitPoolResponse",
            value: exports.MsgExitPoolResponse.encode(message).finish()
        };
    }
};
function createBaseSwapAmountInRoute() {
    return {
        pool_id: BigInt(0),
        token_out_denom: ""
    };
}
exports.SwapAmountInRoute = {
    typeUrl: "/osmosis.gamm.v1beta1.SwapAmountInRoute",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.pool_id !== BigInt(0)) {
            writer.uint32(8).uint64(message.pool_id);
        }
        if (message.token_out_denom !== "") {
            writer.uint32(18).string(message.token_out_denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSwapAmountInRoute();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pool_id = reader.uint64();
                    break;
                case 2:
                    message.token_out_denom = reader.string();
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
            token_out_denom: (0, helpers_1.isSet)(object.token_out_denom) ? String(object.token_out_denom) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.pool_id !== undefined && (obj.pool_id = (message.pool_id || BigInt(0)).toString());
        message.token_out_denom !== undefined && (obj.token_out_denom = message.token_out_denom);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSwapAmountInRoute();
        message.pool_id = object.pool_id !== undefined && object.pool_id !== null ? BigInt(object.pool_id.toString()) : BigInt(0);
        message.token_out_denom = object.token_out_denom ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            pool_id: object?.pool_id,
            token_out_denom: object?.token_out_denom
        };
    },
    toSDK(message) {
        const obj = {};
        obj.pool_id = message.pool_id;
        obj.token_out_denom = message.token_out_denom;
        return obj;
    },
    fromAmino(object) {
        return {
            pool_id: BigInt(object.pool_id),
            token_out_denom: object.token_out_denom
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id = message.pool_id ? message.pool_id.toString() : undefined;
        obj.token_out_denom = message.token_out_denom;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SwapAmountInRoute.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/swap-amount-in-route",
            value: exports.SwapAmountInRoute.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.SwapAmountInRoute.decode(message.value);
    },
    toProto(message) {
        return exports.SwapAmountInRoute.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.SwapAmountInRoute",
            value: exports.SwapAmountInRoute.encode(message).finish()
        };
    }
};
function createBaseMsgSwapExactAmountIn() {
    return {
        sender: "",
        routes: [],
        token_in: coin_1.Coin.fromPartial({}),
        token_out_min_amount: ""
    };
}
exports.MsgSwapExactAmountIn = {
    typeUrl: "/osmosis.gamm.v1beta1.MsgSwapExactAmountIn",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        for (const v of message.routes) {
            exports.SwapAmountInRoute.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.token_in !== undefined) {
            coin_1.Coin.encode(message.token_in, writer.uint32(26).fork()).ldelim();
        }
        if (message.token_out_min_amount !== "") {
            writer.uint32(34).string(message.token_out_min_amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSwapExactAmountIn();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.routes.push(exports.SwapAmountInRoute.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.token_in = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.token_out_min_amount = reader.string();
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
            routes: Array.isArray(object?.routes) ? object.routes.map((e) => exports.SwapAmountInRoute.fromJSON(e)) : [],
            token_in: (0, helpers_1.isSet)(object.token_in) ? coin_1.Coin.fromJSON(object.token_in) : undefined,
            token_out_min_amount: (0, helpers_1.isSet)(object.token_out_min_amount) ? String(object.token_out_min_amount) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        if (message.routes) {
            obj.routes = message.routes.map(e => e ? exports.SwapAmountInRoute.toJSON(e) : undefined);
        }
        else {
            obj.routes = [];
        }
        message.token_in !== undefined && (obj.token_in = message.token_in ? coin_1.Coin.toJSON(message.token_in) : undefined);
        message.token_out_min_amount !== undefined && (obj.token_out_min_amount = message.token_out_min_amount);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSwapExactAmountIn();
        message.sender = object.sender ?? "";
        message.routes = object.routes?.map(e => exports.SwapAmountInRoute.fromPartial(e)) || [];
        message.token_in = object.token_in !== undefined && object.token_in !== null ? coin_1.Coin.fromPartial(object.token_in) : undefined;
        message.token_out_min_amount = object.token_out_min_amount ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            sender: object?.sender,
            routes: Array.isArray(object?.routes) ? object.routes.map((e) => exports.SwapAmountInRoute.fromSDK(e)) : [],
            token_in: object.token_in ? coin_1.Coin.fromSDK(object.token_in) : undefined,
            token_out_min_amount: object?.token_out_min_amount
        };
    },
    toSDK(message) {
        const obj = {};
        obj.sender = message.sender;
        if (message.routes) {
            obj.routes = message.routes.map(e => e ? exports.SwapAmountInRoute.toSDK(e) : undefined);
        }
        else {
            obj.routes = [];
        }
        message.token_in !== undefined && (obj.token_in = message.token_in ? coin_1.Coin.toSDK(message.token_in) : undefined);
        obj.token_out_min_amount = message.token_out_min_amount;
        return obj;
    },
    fromAmino(object) {
        return {
            sender: object.sender,
            routes: Array.isArray(object?.routes) ? object.routes.map((e) => exports.SwapAmountInRoute.fromAmino(e)) : [],
            token_in: object?.token_in ? coin_1.Coin.fromAmino(object.token_in) : undefined,
            token_out_min_amount: object.token_out_min_amount
        };
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender;
        if (message.routes) {
            obj.routes = message.routes.map(e => e ? exports.SwapAmountInRoute.toAmino(e) : undefined);
        }
        else {
            obj.routes = [];
        }
        obj.token_in = message.token_in ? coin_1.Coin.toAmino(message.token_in) : undefined;
        obj.token_out_min_amount = message.token_out_min_amount;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSwapExactAmountIn.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/swap-exact-amount-in",
            value: exports.MsgSwapExactAmountIn.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgSwapExactAmountIn.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSwapExactAmountIn.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.MsgSwapExactAmountIn",
            value: exports.MsgSwapExactAmountIn.encode(message).finish()
        };
    }
};
function createBaseMsgSwapExactAmountInResponse() {
    return {
        token_out_amount: ""
    };
}
exports.MsgSwapExactAmountInResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.MsgSwapExactAmountInResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.token_out_amount !== "") {
            writer.uint32(10).string(message.token_out_amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSwapExactAmountInResponse();
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
        const message = createBaseMsgSwapExactAmountInResponse();
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
        return exports.MsgSwapExactAmountInResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/swap-exact-amount-in-response",
            value: exports.MsgSwapExactAmountInResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgSwapExactAmountInResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSwapExactAmountInResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.MsgSwapExactAmountInResponse",
            value: exports.MsgSwapExactAmountInResponse.encode(message).finish()
        };
    }
};
function createBaseSwapAmountOutRoute() {
    return {
        pool_id: BigInt(0),
        token_in_denom: ""
    };
}
exports.SwapAmountOutRoute = {
    typeUrl: "/osmosis.gamm.v1beta1.SwapAmountOutRoute",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.pool_id !== BigInt(0)) {
            writer.uint32(8).uint64(message.pool_id);
        }
        if (message.token_in_denom !== "") {
            writer.uint32(18).string(message.token_in_denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSwapAmountOutRoute();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pool_id = reader.uint64();
                    break;
                case 2:
                    message.token_in_denom = reader.string();
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
            token_in_denom: (0, helpers_1.isSet)(object.token_in_denom) ? String(object.token_in_denom) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.pool_id !== undefined && (obj.pool_id = (message.pool_id || BigInt(0)).toString());
        message.token_in_denom !== undefined && (obj.token_in_denom = message.token_in_denom);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSwapAmountOutRoute();
        message.pool_id = object.pool_id !== undefined && object.pool_id !== null ? BigInt(object.pool_id.toString()) : BigInt(0);
        message.token_in_denom = object.token_in_denom ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            pool_id: object?.pool_id,
            token_in_denom: object?.token_in_denom
        };
    },
    toSDK(message) {
        const obj = {};
        obj.pool_id = message.pool_id;
        obj.token_in_denom = message.token_in_denom;
        return obj;
    },
    fromAmino(object) {
        return {
            pool_id: BigInt(object.pool_id),
            token_in_denom: object.token_in_denom
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id = message.pool_id ? message.pool_id.toString() : undefined;
        obj.token_in_denom = message.token_in_denom;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SwapAmountOutRoute.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/swap-amount-out-route",
            value: exports.SwapAmountOutRoute.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.SwapAmountOutRoute.decode(message.value);
    },
    toProto(message) {
        return exports.SwapAmountOutRoute.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.SwapAmountOutRoute",
            value: exports.SwapAmountOutRoute.encode(message).finish()
        };
    }
};
function createBaseMsgSwapExactAmountOut() {
    return {
        sender: "",
        routes: [],
        token_in_max_amount: "",
        token_out: coin_1.Coin.fromPartial({})
    };
}
exports.MsgSwapExactAmountOut = {
    typeUrl: "/osmosis.gamm.v1beta1.MsgSwapExactAmountOut",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        for (const v of message.routes) {
            exports.SwapAmountOutRoute.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.token_in_max_amount !== "") {
            writer.uint32(26).string(message.token_in_max_amount);
        }
        if (message.token_out !== undefined) {
            coin_1.Coin.encode(message.token_out, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSwapExactAmountOut();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.routes.push(exports.SwapAmountOutRoute.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.token_in_max_amount = reader.string();
                    break;
                case 4:
                    message.token_out = coin_1.Coin.decode(reader, reader.uint32());
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
            routes: Array.isArray(object?.routes) ? object.routes.map((e) => exports.SwapAmountOutRoute.fromJSON(e)) : [],
            token_in_max_amount: (0, helpers_1.isSet)(object.token_in_max_amount) ? String(object.token_in_max_amount) : "",
            token_out: (0, helpers_1.isSet)(object.token_out) ? coin_1.Coin.fromJSON(object.token_out) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        if (message.routes) {
            obj.routes = message.routes.map(e => e ? exports.SwapAmountOutRoute.toJSON(e) : undefined);
        }
        else {
            obj.routes = [];
        }
        message.token_in_max_amount !== undefined && (obj.token_in_max_amount = message.token_in_max_amount);
        message.token_out !== undefined && (obj.token_out = message.token_out ? coin_1.Coin.toJSON(message.token_out) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSwapExactAmountOut();
        message.sender = object.sender ?? "";
        message.routes = object.routes?.map(e => exports.SwapAmountOutRoute.fromPartial(e)) || [];
        message.token_in_max_amount = object.token_in_max_amount ?? "";
        message.token_out = object.token_out !== undefined && object.token_out !== null ? coin_1.Coin.fromPartial(object.token_out) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            sender: object?.sender,
            routes: Array.isArray(object?.routes) ? object.routes.map((e) => exports.SwapAmountOutRoute.fromSDK(e)) : [],
            token_in_max_amount: object?.token_in_max_amount,
            token_out: object.token_out ? coin_1.Coin.fromSDK(object.token_out) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.sender = message.sender;
        if (message.routes) {
            obj.routes = message.routes.map(e => e ? exports.SwapAmountOutRoute.toSDK(e) : undefined);
        }
        else {
            obj.routes = [];
        }
        obj.token_in_max_amount = message.token_in_max_amount;
        message.token_out !== undefined && (obj.token_out = message.token_out ? coin_1.Coin.toSDK(message.token_out) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            sender: object.sender,
            routes: Array.isArray(object?.routes) ? object.routes.map((e) => exports.SwapAmountOutRoute.fromAmino(e)) : [],
            token_in_max_amount: object.token_in_max_amount,
            token_out: object?.token_out ? coin_1.Coin.fromAmino(object.token_out) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender;
        if (message.routes) {
            obj.routes = message.routes.map(e => e ? exports.SwapAmountOutRoute.toAmino(e) : undefined);
        }
        else {
            obj.routes = [];
        }
        obj.token_in_max_amount = message.token_in_max_amount;
        obj.token_out = message.token_out ? coin_1.Coin.toAmino(message.token_out) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSwapExactAmountOut.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/swap-exact-amount-out",
            value: exports.MsgSwapExactAmountOut.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgSwapExactAmountOut.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSwapExactAmountOut.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.MsgSwapExactAmountOut",
            value: exports.MsgSwapExactAmountOut.encode(message).finish()
        };
    }
};
function createBaseMsgSwapExactAmountOutResponse() {
    return {
        token_in_amount: ""
    };
}
exports.MsgSwapExactAmountOutResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.MsgSwapExactAmountOutResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.token_in_amount !== "") {
            writer.uint32(10).string(message.token_in_amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSwapExactAmountOutResponse();
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
        const message = createBaseMsgSwapExactAmountOutResponse();
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
        return exports.MsgSwapExactAmountOutResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/swap-exact-amount-out-response",
            value: exports.MsgSwapExactAmountOutResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgSwapExactAmountOutResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSwapExactAmountOutResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.MsgSwapExactAmountOutResponse",
            value: exports.MsgSwapExactAmountOutResponse.encode(message).finish()
        };
    }
};
function createBaseMsgJoinSwapExternAmountIn() {
    return {
        sender: "",
        pool_id: BigInt(0),
        token_in: coin_1.Coin.fromPartial({}),
        share_out_min_amount: ""
    };
}
exports.MsgJoinSwapExternAmountIn = {
    typeUrl: "/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountIn",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.pool_id !== BigInt(0)) {
            writer.uint32(16).uint64(message.pool_id);
        }
        if (message.token_in !== undefined) {
            coin_1.Coin.encode(message.token_in, writer.uint32(26).fork()).ldelim();
        }
        if (message.share_out_min_amount !== "") {
            writer.uint32(34).string(message.share_out_min_amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgJoinSwapExternAmountIn();
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
                    message.token_in = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.share_out_min_amount = reader.string();
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
            token_in: (0, helpers_1.isSet)(object.token_in) ? coin_1.Coin.fromJSON(object.token_in) : undefined,
            share_out_min_amount: (0, helpers_1.isSet)(object.share_out_min_amount) ? String(object.share_out_min_amount) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.pool_id !== undefined && (obj.pool_id = (message.pool_id || BigInt(0)).toString());
        message.token_in !== undefined && (obj.token_in = message.token_in ? coin_1.Coin.toJSON(message.token_in) : undefined);
        message.share_out_min_amount !== undefined && (obj.share_out_min_amount = message.share_out_min_amount);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgJoinSwapExternAmountIn();
        message.sender = object.sender ?? "";
        message.pool_id = object.pool_id !== undefined && object.pool_id !== null ? BigInt(object.pool_id.toString()) : BigInt(0);
        message.token_in = object.token_in !== undefined && object.token_in !== null ? coin_1.Coin.fromPartial(object.token_in) : undefined;
        message.share_out_min_amount = object.share_out_min_amount ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            sender: object?.sender,
            pool_id: object?.pool_id,
            token_in: object.token_in ? coin_1.Coin.fromSDK(object.token_in) : undefined,
            share_out_min_amount: object?.share_out_min_amount
        };
    },
    toSDK(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.pool_id = message.pool_id;
        message.token_in !== undefined && (obj.token_in = message.token_in ? coin_1.Coin.toSDK(message.token_in) : undefined);
        obj.share_out_min_amount = message.share_out_min_amount;
        return obj;
    },
    fromAmino(object) {
        return {
            sender: object.sender,
            pool_id: BigInt(object.pool_id),
            token_in: object?.token_in ? coin_1.Coin.fromAmino(object.token_in) : undefined,
            share_out_min_amount: object.share_out_min_amount
        };
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.pool_id = message.pool_id ? message.pool_id.toString() : undefined;
        obj.token_in = message.token_in ? coin_1.Coin.toAmino(message.token_in) : undefined;
        obj.share_out_min_amount = message.share_out_min_amount;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgJoinSwapExternAmountIn.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/join-swap-extern-amount-in",
            value: exports.MsgJoinSwapExternAmountIn.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgJoinSwapExternAmountIn.decode(message.value);
    },
    toProto(message) {
        return exports.MsgJoinSwapExternAmountIn.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountIn",
            value: exports.MsgJoinSwapExternAmountIn.encode(message).finish()
        };
    }
};
function createBaseMsgJoinSwapExternAmountInResponse() {
    return {
        share_out_amount: ""
    };
}
exports.MsgJoinSwapExternAmountInResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountInResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.share_out_amount !== "") {
            writer.uint32(10).string(message.share_out_amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgJoinSwapExternAmountInResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.share_out_amount = reader.string();
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
            share_out_amount: (0, helpers_1.isSet)(object.share_out_amount) ? String(object.share_out_amount) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.share_out_amount !== undefined && (obj.share_out_amount = message.share_out_amount);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgJoinSwapExternAmountInResponse();
        message.share_out_amount = object.share_out_amount ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            share_out_amount: object?.share_out_amount
        };
    },
    toSDK(message) {
        const obj = {};
        obj.share_out_amount = message.share_out_amount;
        return obj;
    },
    fromAmino(object) {
        return {
            share_out_amount: object.share_out_amount
        };
    },
    toAmino(message) {
        const obj = {};
        obj.share_out_amount = message.share_out_amount;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgJoinSwapExternAmountInResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/join-swap-extern-amount-in-response",
            value: exports.MsgJoinSwapExternAmountInResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgJoinSwapExternAmountInResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgJoinSwapExternAmountInResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountInResponse",
            value: exports.MsgJoinSwapExternAmountInResponse.encode(message).finish()
        };
    }
};
function createBaseMsgJoinSwapShareAmountOut() {
    return {
        sender: "",
        pool_id: BigInt(0),
        token_in_denom: "",
        share_out_amount: "",
        token_in_max_amount: ""
    };
}
exports.MsgJoinSwapShareAmountOut = {
    typeUrl: "/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOut",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.pool_id !== BigInt(0)) {
            writer.uint32(16).uint64(message.pool_id);
        }
        if (message.token_in_denom !== "") {
            writer.uint32(26).string(message.token_in_denom);
        }
        if (message.share_out_amount !== "") {
            writer.uint32(34).string(message.share_out_amount);
        }
        if (message.token_in_max_amount !== "") {
            writer.uint32(42).string(message.token_in_max_amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgJoinSwapShareAmountOut();
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
                    message.token_in_denom = reader.string();
                    break;
                case 4:
                    message.share_out_amount = reader.string();
                    break;
                case 5:
                    message.token_in_max_amount = reader.string();
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
            token_in_denom: (0, helpers_1.isSet)(object.token_in_denom) ? String(object.token_in_denom) : "",
            share_out_amount: (0, helpers_1.isSet)(object.share_out_amount) ? String(object.share_out_amount) : "",
            token_in_max_amount: (0, helpers_1.isSet)(object.token_in_max_amount) ? String(object.token_in_max_amount) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.pool_id !== undefined && (obj.pool_id = (message.pool_id || BigInt(0)).toString());
        message.token_in_denom !== undefined && (obj.token_in_denom = message.token_in_denom);
        message.share_out_amount !== undefined && (obj.share_out_amount = message.share_out_amount);
        message.token_in_max_amount !== undefined && (obj.token_in_max_amount = message.token_in_max_amount);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgJoinSwapShareAmountOut();
        message.sender = object.sender ?? "";
        message.pool_id = object.pool_id !== undefined && object.pool_id !== null ? BigInt(object.pool_id.toString()) : BigInt(0);
        message.token_in_denom = object.token_in_denom ?? "";
        message.share_out_amount = object.share_out_amount ?? "";
        message.token_in_max_amount = object.token_in_max_amount ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            sender: object?.sender,
            pool_id: object?.pool_id,
            token_in_denom: object?.token_in_denom,
            share_out_amount: object?.share_out_amount,
            token_in_max_amount: object?.token_in_max_amount
        };
    },
    toSDK(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.pool_id = message.pool_id;
        obj.token_in_denom = message.token_in_denom;
        obj.share_out_amount = message.share_out_amount;
        obj.token_in_max_amount = message.token_in_max_amount;
        return obj;
    },
    fromAmino(object) {
        return {
            sender: object.sender,
            pool_id: BigInt(object.pool_id),
            token_in_denom: object.token_in_denom,
            share_out_amount: object.share_out_amount,
            token_in_max_amount: object.token_in_max_amount
        };
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.pool_id = message.pool_id ? message.pool_id.toString() : undefined;
        obj.token_in_denom = message.token_in_denom;
        obj.share_out_amount = message.share_out_amount;
        obj.token_in_max_amount = message.token_in_max_amount;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgJoinSwapShareAmountOut.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/join-swap-share-amount-out",
            value: exports.MsgJoinSwapShareAmountOut.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgJoinSwapShareAmountOut.decode(message.value);
    },
    toProto(message) {
        return exports.MsgJoinSwapShareAmountOut.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOut",
            value: exports.MsgJoinSwapShareAmountOut.encode(message).finish()
        };
    }
};
function createBaseMsgJoinSwapShareAmountOutResponse() {
    return {
        token_in_amount: ""
    };
}
exports.MsgJoinSwapShareAmountOutResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOutResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.token_in_amount !== "") {
            writer.uint32(10).string(message.token_in_amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgJoinSwapShareAmountOutResponse();
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
        const message = createBaseMsgJoinSwapShareAmountOutResponse();
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
        return exports.MsgJoinSwapShareAmountOutResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/join-swap-share-amount-out-response",
            value: exports.MsgJoinSwapShareAmountOutResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgJoinSwapShareAmountOutResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgJoinSwapShareAmountOutResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOutResponse",
            value: exports.MsgJoinSwapShareAmountOutResponse.encode(message).finish()
        };
    }
};
function createBaseMsgExitSwapShareAmountIn() {
    return {
        sender: "",
        pool_id: BigInt(0),
        token_out_denom: "",
        share_in_amount: "",
        token_out_min_amount: ""
    };
}
exports.MsgExitSwapShareAmountIn = {
    typeUrl: "/osmosis.gamm.v1beta1.MsgExitSwapShareAmountIn",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.pool_id !== BigInt(0)) {
            writer.uint32(16).uint64(message.pool_id);
        }
        if (message.token_out_denom !== "") {
            writer.uint32(26).string(message.token_out_denom);
        }
        if (message.share_in_amount !== "") {
            writer.uint32(34).string(message.share_in_amount);
        }
        if (message.token_out_min_amount !== "") {
            writer.uint32(42).string(message.token_out_min_amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgExitSwapShareAmountIn();
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
                    message.token_out_denom = reader.string();
                    break;
                case 4:
                    message.share_in_amount = reader.string();
                    break;
                case 5:
                    message.token_out_min_amount = reader.string();
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
            token_out_denom: (0, helpers_1.isSet)(object.token_out_denom) ? String(object.token_out_denom) : "",
            share_in_amount: (0, helpers_1.isSet)(object.share_in_amount) ? String(object.share_in_amount) : "",
            token_out_min_amount: (0, helpers_1.isSet)(object.token_out_min_amount) ? String(object.token_out_min_amount) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.pool_id !== undefined && (obj.pool_id = (message.pool_id || BigInt(0)).toString());
        message.token_out_denom !== undefined && (obj.token_out_denom = message.token_out_denom);
        message.share_in_amount !== undefined && (obj.share_in_amount = message.share_in_amount);
        message.token_out_min_amount !== undefined && (obj.token_out_min_amount = message.token_out_min_amount);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgExitSwapShareAmountIn();
        message.sender = object.sender ?? "";
        message.pool_id = object.pool_id !== undefined && object.pool_id !== null ? BigInt(object.pool_id.toString()) : BigInt(0);
        message.token_out_denom = object.token_out_denom ?? "";
        message.share_in_amount = object.share_in_amount ?? "";
        message.token_out_min_amount = object.token_out_min_amount ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            sender: object?.sender,
            pool_id: object?.pool_id,
            token_out_denom: object?.token_out_denom,
            share_in_amount: object?.share_in_amount,
            token_out_min_amount: object?.token_out_min_amount
        };
    },
    toSDK(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.pool_id = message.pool_id;
        obj.token_out_denom = message.token_out_denom;
        obj.share_in_amount = message.share_in_amount;
        obj.token_out_min_amount = message.token_out_min_amount;
        return obj;
    },
    fromAmino(object) {
        return {
            sender: object.sender,
            pool_id: BigInt(object.pool_id),
            token_out_denom: object.token_out_denom,
            share_in_amount: object.share_in_amount,
            token_out_min_amount: object.token_out_min_amount
        };
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.pool_id = message.pool_id ? message.pool_id.toString() : undefined;
        obj.token_out_denom = message.token_out_denom;
        obj.share_in_amount = message.share_in_amount;
        obj.token_out_min_amount = message.token_out_min_amount;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgExitSwapShareAmountIn.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/exit-swap-share-amount-in",
            value: exports.MsgExitSwapShareAmountIn.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgExitSwapShareAmountIn.decode(message.value);
    },
    toProto(message) {
        return exports.MsgExitSwapShareAmountIn.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.MsgExitSwapShareAmountIn",
            value: exports.MsgExitSwapShareAmountIn.encode(message).finish()
        };
    }
};
function createBaseMsgExitSwapShareAmountInResponse() {
    return {
        token_out_amount: ""
    };
}
exports.MsgExitSwapShareAmountInResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.MsgExitSwapShareAmountInResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.token_out_amount !== "") {
            writer.uint32(10).string(message.token_out_amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgExitSwapShareAmountInResponse();
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
        const message = createBaseMsgExitSwapShareAmountInResponse();
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
        return exports.MsgExitSwapShareAmountInResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/exit-swap-share-amount-in-response",
            value: exports.MsgExitSwapShareAmountInResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgExitSwapShareAmountInResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgExitSwapShareAmountInResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.MsgExitSwapShareAmountInResponse",
            value: exports.MsgExitSwapShareAmountInResponse.encode(message).finish()
        };
    }
};
function createBaseMsgExitSwapExternAmountOut() {
    return {
        sender: "",
        pool_id: BigInt(0),
        token_out: coin_1.Coin.fromPartial({}),
        share_in_max_amount: ""
    };
}
exports.MsgExitSwapExternAmountOut = {
    typeUrl: "/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOut",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.pool_id !== BigInt(0)) {
            writer.uint32(16).uint64(message.pool_id);
        }
        if (message.token_out !== undefined) {
            coin_1.Coin.encode(message.token_out, writer.uint32(26).fork()).ldelim();
        }
        if (message.share_in_max_amount !== "") {
            writer.uint32(34).string(message.share_in_max_amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgExitSwapExternAmountOut();
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
                    message.token_out = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.share_in_max_amount = reader.string();
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
            token_out: (0, helpers_1.isSet)(object.token_out) ? coin_1.Coin.fromJSON(object.token_out) : undefined,
            share_in_max_amount: (0, helpers_1.isSet)(object.share_in_max_amount) ? String(object.share_in_max_amount) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.pool_id !== undefined && (obj.pool_id = (message.pool_id || BigInt(0)).toString());
        message.token_out !== undefined && (obj.token_out = message.token_out ? coin_1.Coin.toJSON(message.token_out) : undefined);
        message.share_in_max_amount !== undefined && (obj.share_in_max_amount = message.share_in_max_amount);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgExitSwapExternAmountOut();
        message.sender = object.sender ?? "";
        message.pool_id = object.pool_id !== undefined && object.pool_id !== null ? BigInt(object.pool_id.toString()) : BigInt(0);
        message.token_out = object.token_out !== undefined && object.token_out !== null ? coin_1.Coin.fromPartial(object.token_out) : undefined;
        message.share_in_max_amount = object.share_in_max_amount ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            sender: object?.sender,
            pool_id: object?.pool_id,
            token_out: object.token_out ? coin_1.Coin.fromSDK(object.token_out) : undefined,
            share_in_max_amount: object?.share_in_max_amount
        };
    },
    toSDK(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.pool_id = message.pool_id;
        message.token_out !== undefined && (obj.token_out = message.token_out ? coin_1.Coin.toSDK(message.token_out) : undefined);
        obj.share_in_max_amount = message.share_in_max_amount;
        return obj;
    },
    fromAmino(object) {
        return {
            sender: object.sender,
            pool_id: BigInt(object.pool_id),
            token_out: object?.token_out ? coin_1.Coin.fromAmino(object.token_out) : undefined,
            share_in_max_amount: object.share_in_max_amount
        };
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.pool_id = message.pool_id ? message.pool_id.toString() : undefined;
        obj.token_out = message.token_out ? coin_1.Coin.toAmino(message.token_out) : undefined;
        obj.share_in_max_amount = message.share_in_max_amount;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgExitSwapExternAmountOut.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/exit-swap-extern-amount-out",
            value: exports.MsgExitSwapExternAmountOut.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgExitSwapExternAmountOut.decode(message.value);
    },
    toProto(message) {
        return exports.MsgExitSwapExternAmountOut.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOut",
            value: exports.MsgExitSwapExternAmountOut.encode(message).finish()
        };
    }
};
function createBaseMsgExitSwapExternAmountOutResponse() {
    return {
        share_in_amount: ""
    };
}
exports.MsgExitSwapExternAmountOutResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOutResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.share_in_amount !== "") {
            writer.uint32(10).string(message.share_in_amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgExitSwapExternAmountOutResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
            share_in_amount: (0, helpers_1.isSet)(object.share_in_amount) ? String(object.share_in_amount) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.share_in_amount !== undefined && (obj.share_in_amount = message.share_in_amount);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgExitSwapExternAmountOutResponse();
        message.share_in_amount = object.share_in_amount ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            share_in_amount: object?.share_in_amount
        };
    },
    toSDK(message) {
        const obj = {};
        obj.share_in_amount = message.share_in_amount;
        return obj;
    },
    fromAmino(object) {
        return {
            share_in_amount: object.share_in_amount
        };
    },
    toAmino(message) {
        const obj = {};
        obj.share_in_amount = message.share_in_amount;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgExitSwapExternAmountOutResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/exit-swap-extern-amount-out-response",
            value: exports.MsgExitSwapExternAmountOutResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgExitSwapExternAmountOutResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgExitSwapExternAmountOutResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOutResponse",
            value: exports.MsgExitSwapExternAmountOutResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=tx.js.map
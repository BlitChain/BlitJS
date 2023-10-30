"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgSwapExactAmountOutResponse = exports.MsgSwapExactAmountOut = exports.MsgSwapExactAmountInResponse = exports.MsgSwapExactAmountIn = void 0;
//@ts-nocheck
const swap_route_1 = require("./swap_route");
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
function createBaseMsgSwapExactAmountIn() {
    return {
        sender: "",
        routes: [],
        token_in: coin_1.Coin.fromPartial({}),
        token_out_min_amount: ""
    };
}
exports.MsgSwapExactAmountIn = {
    typeUrl: "/osmosis.swaprouter.v1beta1.MsgSwapExactAmountIn",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        for (const v of message.routes) {
            swap_route_1.SwapAmountInRoute.encode(v, writer.uint32(18).fork()).ldelim();
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
                    message.routes.push(swap_route_1.SwapAmountInRoute.decode(reader, reader.uint32()));
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
            routes: Array.isArray(object?.routes) ? object.routes.map((e) => swap_route_1.SwapAmountInRoute.fromJSON(e)) : [],
            token_in: (0, helpers_1.isSet)(object.token_in) ? coin_1.Coin.fromJSON(object.token_in) : undefined,
            token_out_min_amount: (0, helpers_1.isSet)(object.token_out_min_amount) ? String(object.token_out_min_amount) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        if (message.routes) {
            obj.routes = message.routes.map(e => e ? swap_route_1.SwapAmountInRoute.toJSON(e) : undefined);
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
        message.routes = object.routes?.map(e => swap_route_1.SwapAmountInRoute.fromPartial(e)) || [];
        message.token_in = object.token_in !== undefined && object.token_in !== null ? coin_1.Coin.fromPartial(object.token_in) : undefined;
        message.token_out_min_amount = object.token_out_min_amount ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            sender: object?.sender,
            routes: Array.isArray(object?.routes) ? object.routes.map((e) => swap_route_1.SwapAmountInRoute.fromSDK(e)) : [],
            token_in: object.token_in ? coin_1.Coin.fromSDK(object.token_in) : undefined,
            token_out_min_amount: object?.token_out_min_amount
        };
    },
    toSDK(message) {
        const obj = {};
        obj.sender = message.sender;
        if (message.routes) {
            obj.routes = message.routes.map(e => e ? swap_route_1.SwapAmountInRoute.toSDK(e) : undefined);
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
            routes: Array.isArray(object?.routes) ? object.routes.map((e) => swap_route_1.SwapAmountInRoute.fromAmino(e)) : [],
            token_in: object?.token_in ? coin_1.Coin.fromAmino(object.token_in) : undefined,
            token_out_min_amount: object.token_out_min_amount
        };
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender;
        if (message.routes) {
            obj.routes = message.routes.map(e => e ? swap_route_1.SwapAmountInRoute.toAmino(e) : undefined);
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
            type: "osmosis/swaprouter/swap-exact-amount-in",
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
            typeUrl: "/osmosis.swaprouter.v1beta1.MsgSwapExactAmountIn",
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
    typeUrl: "/osmosis.swaprouter.v1beta1.MsgSwapExactAmountInResponse",
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
            type: "osmosis/swaprouter/swap-exact-amount-in-response",
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
            typeUrl: "/osmosis.swaprouter.v1beta1.MsgSwapExactAmountInResponse",
            value: exports.MsgSwapExactAmountInResponse.encode(message).finish()
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
    typeUrl: "/osmosis.swaprouter.v1beta1.MsgSwapExactAmountOut",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        for (const v of message.routes) {
            swap_route_1.SwapAmountOutRoute.encode(v, writer.uint32(18).fork()).ldelim();
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
                    message.routes.push(swap_route_1.SwapAmountOutRoute.decode(reader, reader.uint32()));
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
            routes: Array.isArray(object?.routes) ? object.routes.map((e) => swap_route_1.SwapAmountOutRoute.fromJSON(e)) : [],
            token_in_max_amount: (0, helpers_1.isSet)(object.token_in_max_amount) ? String(object.token_in_max_amount) : "",
            token_out: (0, helpers_1.isSet)(object.token_out) ? coin_1.Coin.fromJSON(object.token_out) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        if (message.routes) {
            obj.routes = message.routes.map(e => e ? swap_route_1.SwapAmountOutRoute.toJSON(e) : undefined);
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
        message.routes = object.routes?.map(e => swap_route_1.SwapAmountOutRoute.fromPartial(e)) || [];
        message.token_in_max_amount = object.token_in_max_amount ?? "";
        message.token_out = object.token_out !== undefined && object.token_out !== null ? coin_1.Coin.fromPartial(object.token_out) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            sender: object?.sender,
            routes: Array.isArray(object?.routes) ? object.routes.map((e) => swap_route_1.SwapAmountOutRoute.fromSDK(e)) : [],
            token_in_max_amount: object?.token_in_max_amount,
            token_out: object.token_out ? coin_1.Coin.fromSDK(object.token_out) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.sender = message.sender;
        if (message.routes) {
            obj.routes = message.routes.map(e => e ? swap_route_1.SwapAmountOutRoute.toSDK(e) : undefined);
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
            routes: Array.isArray(object?.routes) ? object.routes.map((e) => swap_route_1.SwapAmountOutRoute.fromAmino(e)) : [],
            token_in_max_amount: object.token_in_max_amount,
            token_out: object?.token_out ? coin_1.Coin.fromAmino(object.token_out) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender;
        if (message.routes) {
            obj.routes = message.routes.map(e => e ? swap_route_1.SwapAmountOutRoute.toAmino(e) : undefined);
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
            type: "osmosis/swaprouter/swap-exact-amount-out",
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
            typeUrl: "/osmosis.swaprouter.v1beta1.MsgSwapExactAmountOut",
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
    typeUrl: "/osmosis.swaprouter.v1beta1.MsgSwapExactAmountOutResponse",
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
            type: "osmosis/swaprouter/swap-exact-amount-out-response",
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
            typeUrl: "/osmosis.swaprouter.v1beta1.MsgSwapExactAmountOutResponse",
            value: exports.MsgSwapExactAmountOutResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=tx.js.map
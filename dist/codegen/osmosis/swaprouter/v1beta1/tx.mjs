//@ts-nocheck
import { SwapAmountInRoute, SwapAmountOutRoute } from "./swap_route";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
function createBaseMsgSwapExactAmountIn() {
    return {
        sender: "",
        routes: [],
        token_in: Coin.fromPartial({}),
        token_out_min_amount: ""
    };
}
export const MsgSwapExactAmountIn = {
    typeUrl: "/osmosis.swaprouter.v1beta1.MsgSwapExactAmountIn",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        for (const v of message.routes) {
            SwapAmountInRoute.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.token_in !== undefined) {
            Coin.encode(message.token_in, writer.uint32(26).fork()).ldelim();
        }
        if (message.token_out_min_amount !== "") {
            writer.uint32(34).string(message.token_out_min_amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSwapExactAmountIn();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.routes.push(SwapAmountInRoute.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.token_in = Coin.decode(reader, reader.uint32());
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
            sender: isSet(object.sender) ? String(object.sender) : "",
            routes: Array.isArray(object?.routes) ? object.routes.map((e) => SwapAmountInRoute.fromJSON(e)) : [],
            token_in: isSet(object.token_in) ? Coin.fromJSON(object.token_in) : undefined,
            token_out_min_amount: isSet(object.token_out_min_amount) ? String(object.token_out_min_amount) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        if (message.routes) {
            obj.routes = message.routes.map(e => e ? SwapAmountInRoute.toJSON(e) : undefined);
        }
        else {
            obj.routes = [];
        }
        message.token_in !== undefined && (obj.token_in = message.token_in ? Coin.toJSON(message.token_in) : undefined);
        message.token_out_min_amount !== undefined && (obj.token_out_min_amount = message.token_out_min_amount);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSwapExactAmountIn();
        message.sender = object.sender ?? "";
        message.routes = object.routes?.map(e => SwapAmountInRoute.fromPartial(e)) || [];
        message.token_in = object.token_in !== undefined && object.token_in !== null ? Coin.fromPartial(object.token_in) : undefined;
        message.token_out_min_amount = object.token_out_min_amount ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            sender: object?.sender,
            routes: Array.isArray(object?.routes) ? object.routes.map((e) => SwapAmountInRoute.fromSDK(e)) : [],
            token_in: object.token_in ? Coin.fromSDK(object.token_in) : undefined,
            token_out_min_amount: object?.token_out_min_amount
        };
    },
    toSDK(message) {
        const obj = {};
        obj.sender = message.sender;
        if (message.routes) {
            obj.routes = message.routes.map(e => e ? SwapAmountInRoute.toSDK(e) : undefined);
        }
        else {
            obj.routes = [];
        }
        message.token_in !== undefined && (obj.token_in = message.token_in ? Coin.toSDK(message.token_in) : undefined);
        obj.token_out_min_amount = message.token_out_min_amount;
        return obj;
    },
    fromAmino(object) {
        return {
            sender: object.sender,
            routes: Array.isArray(object?.routes) ? object.routes.map((e) => SwapAmountInRoute.fromAmino(e)) : [],
            token_in: object?.token_in ? Coin.fromAmino(object.token_in) : undefined,
            token_out_min_amount: object.token_out_min_amount
        };
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender;
        if (message.routes) {
            obj.routes = message.routes.map(e => e ? SwapAmountInRoute.toAmino(e) : undefined);
        }
        else {
            obj.routes = [];
        }
        obj.token_in = message.token_in ? Coin.toAmino(message.token_in) : undefined;
        obj.token_out_min_amount = message.token_out_min_amount;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgSwapExactAmountIn.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/swaprouter/swap-exact-amount-in",
            value: MsgSwapExactAmountIn.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgSwapExactAmountIn.decode(message.value);
    },
    toProto(message) {
        return MsgSwapExactAmountIn.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.swaprouter.v1beta1.MsgSwapExactAmountIn",
            value: MsgSwapExactAmountIn.encode(message).finish()
        };
    }
};
function createBaseMsgSwapExactAmountInResponse() {
    return {
        token_out_amount: ""
    };
}
export const MsgSwapExactAmountInResponse = {
    typeUrl: "/osmosis.swaprouter.v1beta1.MsgSwapExactAmountInResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.token_out_amount !== "") {
            writer.uint32(10).string(message.token_out_amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            token_out_amount: isSet(object.token_out_amount) ? String(object.token_out_amount) : ""
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
        return MsgSwapExactAmountInResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/swaprouter/swap-exact-amount-in-response",
            value: MsgSwapExactAmountInResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgSwapExactAmountInResponse.decode(message.value);
    },
    toProto(message) {
        return MsgSwapExactAmountInResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.swaprouter.v1beta1.MsgSwapExactAmountInResponse",
            value: MsgSwapExactAmountInResponse.encode(message).finish()
        };
    }
};
function createBaseMsgSwapExactAmountOut() {
    return {
        sender: "",
        routes: [],
        token_in_max_amount: "",
        token_out: Coin.fromPartial({})
    };
}
export const MsgSwapExactAmountOut = {
    typeUrl: "/osmosis.swaprouter.v1beta1.MsgSwapExactAmountOut",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        for (const v of message.routes) {
            SwapAmountOutRoute.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.token_in_max_amount !== "") {
            writer.uint32(26).string(message.token_in_max_amount);
        }
        if (message.token_out !== undefined) {
            Coin.encode(message.token_out, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSwapExactAmountOut();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.routes.push(SwapAmountOutRoute.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.token_in_max_amount = reader.string();
                    break;
                case 4:
                    message.token_out = Coin.decode(reader, reader.uint32());
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
            sender: isSet(object.sender) ? String(object.sender) : "",
            routes: Array.isArray(object?.routes) ? object.routes.map((e) => SwapAmountOutRoute.fromJSON(e)) : [],
            token_in_max_amount: isSet(object.token_in_max_amount) ? String(object.token_in_max_amount) : "",
            token_out: isSet(object.token_out) ? Coin.fromJSON(object.token_out) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        if (message.routes) {
            obj.routes = message.routes.map(e => e ? SwapAmountOutRoute.toJSON(e) : undefined);
        }
        else {
            obj.routes = [];
        }
        message.token_in_max_amount !== undefined && (obj.token_in_max_amount = message.token_in_max_amount);
        message.token_out !== undefined && (obj.token_out = message.token_out ? Coin.toJSON(message.token_out) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSwapExactAmountOut();
        message.sender = object.sender ?? "";
        message.routes = object.routes?.map(e => SwapAmountOutRoute.fromPartial(e)) || [];
        message.token_in_max_amount = object.token_in_max_amount ?? "";
        message.token_out = object.token_out !== undefined && object.token_out !== null ? Coin.fromPartial(object.token_out) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            sender: object?.sender,
            routes: Array.isArray(object?.routes) ? object.routes.map((e) => SwapAmountOutRoute.fromSDK(e)) : [],
            token_in_max_amount: object?.token_in_max_amount,
            token_out: object.token_out ? Coin.fromSDK(object.token_out) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.sender = message.sender;
        if (message.routes) {
            obj.routes = message.routes.map(e => e ? SwapAmountOutRoute.toSDK(e) : undefined);
        }
        else {
            obj.routes = [];
        }
        obj.token_in_max_amount = message.token_in_max_amount;
        message.token_out !== undefined && (obj.token_out = message.token_out ? Coin.toSDK(message.token_out) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            sender: object.sender,
            routes: Array.isArray(object?.routes) ? object.routes.map((e) => SwapAmountOutRoute.fromAmino(e)) : [],
            token_in_max_amount: object.token_in_max_amount,
            token_out: object?.token_out ? Coin.fromAmino(object.token_out) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender;
        if (message.routes) {
            obj.routes = message.routes.map(e => e ? SwapAmountOutRoute.toAmino(e) : undefined);
        }
        else {
            obj.routes = [];
        }
        obj.token_in_max_amount = message.token_in_max_amount;
        obj.token_out = message.token_out ? Coin.toAmino(message.token_out) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgSwapExactAmountOut.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/swaprouter/swap-exact-amount-out",
            value: MsgSwapExactAmountOut.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgSwapExactAmountOut.decode(message.value);
    },
    toProto(message) {
        return MsgSwapExactAmountOut.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.swaprouter.v1beta1.MsgSwapExactAmountOut",
            value: MsgSwapExactAmountOut.encode(message).finish()
        };
    }
};
function createBaseMsgSwapExactAmountOutResponse() {
    return {
        token_in_amount: ""
    };
}
export const MsgSwapExactAmountOutResponse = {
    typeUrl: "/osmosis.swaprouter.v1beta1.MsgSwapExactAmountOutResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.token_in_amount !== "") {
            writer.uint32(10).string(message.token_in_amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            token_in_amount: isSet(object.token_in_amount) ? String(object.token_in_amount) : ""
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
        return MsgSwapExactAmountOutResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/swaprouter/swap-exact-amount-out-response",
            value: MsgSwapExactAmountOutResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgSwapExactAmountOutResponse.decode(message.value);
    },
    toProto(message) {
        return MsgSwapExactAmountOutResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.swaprouter.v1beta1.MsgSwapExactAmountOutResponse",
            value: MsgSwapExactAmountOutResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=tx.js.map
//@ts-nocheck
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
function createBaseMsgJoinPool() {
    return {
        sender: "",
        pool_id: BigInt(0),
        share_out_amount: "",
        token_in_maxs: []
    };
}
export const MsgJoinPool = {
    typeUrl: "/osmosis.gamm.v1beta1.MsgJoinPool",
    encode(message, writer = BinaryWriter.create()) {
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
            Coin.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
                    message.token_in_maxs.push(Coin.decode(reader, reader.uint32()));
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
            pool_id: isSet(object.pool_id) ? BigInt(object.pool_id.toString()) : BigInt(0),
            share_out_amount: isSet(object.share_out_amount) ? String(object.share_out_amount) : "",
            token_in_maxs: Array.isArray(object?.token_in_maxs) ? object.token_in_maxs.map((e) => Coin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.pool_id !== undefined && (obj.pool_id = (message.pool_id || BigInt(0)).toString());
        message.share_out_amount !== undefined && (obj.share_out_amount = message.share_out_amount);
        if (message.token_in_maxs) {
            obj.token_in_maxs = message.token_in_maxs.map(e => e ? Coin.toJSON(e) : undefined);
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
        message.token_in_maxs = object.token_in_maxs?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            sender: object?.sender,
            pool_id: object?.pool_id,
            share_out_amount: object?.share_out_amount,
            token_in_maxs: Array.isArray(object?.token_in_maxs) ? object.token_in_maxs.map((e) => Coin.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.pool_id = message.pool_id;
        obj.share_out_amount = message.share_out_amount;
        if (message.token_in_maxs) {
            obj.token_in_maxs = message.token_in_maxs.map(e => e ? Coin.toSDK(e) : undefined);
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
            token_in_maxs: Array.isArray(object?.token_in_maxs) ? object.token_in_maxs.map((e) => Coin.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.pool_id = message.pool_id ? message.pool_id.toString() : undefined;
        obj.share_out_amount = message.share_out_amount;
        if (message.token_in_maxs) {
            obj.token_in_maxs = message.token_in_maxs.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.token_in_maxs = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return MsgJoinPool.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/join-pool",
            value: MsgJoinPool.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgJoinPool.decode(message.value);
    },
    toProto(message) {
        return MsgJoinPool.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.MsgJoinPool",
            value: MsgJoinPool.encode(message).finish()
        };
    }
};
function createBaseMsgJoinPoolResponse() {
    return {
        share_out_amount: "",
        token_in: []
    };
}
export const MsgJoinPoolResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.MsgJoinPoolResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.share_out_amount !== "") {
            writer.uint32(10).string(message.share_out_amount);
        }
        for (const v of message.token_in) {
            Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgJoinPoolResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.share_out_amount = reader.string();
                    break;
                case 2:
                    message.token_in.push(Coin.decode(reader, reader.uint32()));
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
            share_out_amount: isSet(object.share_out_amount) ? String(object.share_out_amount) : "",
            token_in: Array.isArray(object?.token_in) ? object.token_in.map((e) => Coin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.share_out_amount !== undefined && (obj.share_out_amount = message.share_out_amount);
        if (message.token_in) {
            obj.token_in = message.token_in.map(e => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.token_in = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgJoinPoolResponse();
        message.share_out_amount = object.share_out_amount ?? "";
        message.token_in = object.token_in?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            share_out_amount: object?.share_out_amount,
            token_in: Array.isArray(object?.token_in) ? object.token_in.map((e) => Coin.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.share_out_amount = message.share_out_amount;
        if (message.token_in) {
            obj.token_in = message.token_in.map(e => e ? Coin.toSDK(e) : undefined);
        }
        else {
            obj.token_in = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            share_out_amount: object.share_out_amount,
            token_in: Array.isArray(object?.token_in) ? object.token_in.map((e) => Coin.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.share_out_amount = message.share_out_amount;
        if (message.token_in) {
            obj.token_in = message.token_in.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.token_in = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return MsgJoinPoolResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/join-pool-response",
            value: MsgJoinPoolResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgJoinPoolResponse.decode(message.value);
    },
    toProto(message) {
        return MsgJoinPoolResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.MsgJoinPoolResponse",
            value: MsgJoinPoolResponse.encode(message).finish()
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
export const MsgExitPool = {
    typeUrl: "/osmosis.gamm.v1beta1.MsgExitPool",
    encode(message, writer = BinaryWriter.create()) {
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
            Coin.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
                    message.token_out_mins.push(Coin.decode(reader, reader.uint32()));
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
            pool_id: isSet(object.pool_id) ? BigInt(object.pool_id.toString()) : BigInt(0),
            share_in_amount: isSet(object.share_in_amount) ? String(object.share_in_amount) : "",
            token_out_mins: Array.isArray(object?.token_out_mins) ? object.token_out_mins.map((e) => Coin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.pool_id !== undefined && (obj.pool_id = (message.pool_id || BigInt(0)).toString());
        message.share_in_amount !== undefined && (obj.share_in_amount = message.share_in_amount);
        if (message.token_out_mins) {
            obj.token_out_mins = message.token_out_mins.map(e => e ? Coin.toJSON(e) : undefined);
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
        message.token_out_mins = object.token_out_mins?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            sender: object?.sender,
            pool_id: object?.pool_id,
            share_in_amount: object?.share_in_amount,
            token_out_mins: Array.isArray(object?.token_out_mins) ? object.token_out_mins.map((e) => Coin.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.pool_id = message.pool_id;
        obj.share_in_amount = message.share_in_amount;
        if (message.token_out_mins) {
            obj.token_out_mins = message.token_out_mins.map(e => e ? Coin.toSDK(e) : undefined);
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
            token_out_mins: Array.isArray(object?.token_out_mins) ? object.token_out_mins.map((e) => Coin.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.pool_id = message.pool_id ? message.pool_id.toString() : undefined;
        obj.share_in_amount = message.share_in_amount;
        if (message.token_out_mins) {
            obj.token_out_mins = message.token_out_mins.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.token_out_mins = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return MsgExitPool.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/exit-pool",
            value: MsgExitPool.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgExitPool.decode(message.value);
    },
    toProto(message) {
        return MsgExitPool.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.MsgExitPool",
            value: MsgExitPool.encode(message).finish()
        };
    }
};
function createBaseMsgExitPoolResponse() {
    return {
        token_out: []
    };
}
export const MsgExitPoolResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.MsgExitPoolResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.token_out) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgExitPoolResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.token_out.push(Coin.decode(reader, reader.uint32()));
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
            token_out: Array.isArray(object?.token_out) ? object.token_out.map((e) => Coin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.token_out) {
            obj.token_out = message.token_out.map(e => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.token_out = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgExitPoolResponse();
        message.token_out = object.token_out?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            token_out: Array.isArray(object?.token_out) ? object.token_out.map((e) => Coin.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.token_out) {
            obj.token_out = message.token_out.map(e => e ? Coin.toSDK(e) : undefined);
        }
        else {
            obj.token_out = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            token_out: Array.isArray(object?.token_out) ? object.token_out.map((e) => Coin.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.token_out) {
            obj.token_out = message.token_out.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.token_out = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return MsgExitPoolResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/exit-pool-response",
            value: MsgExitPoolResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgExitPoolResponse.decode(message.value);
    },
    toProto(message) {
        return MsgExitPoolResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.MsgExitPoolResponse",
            value: MsgExitPoolResponse.encode(message).finish()
        };
    }
};
function createBaseSwapAmountInRoute() {
    return {
        pool_id: BigInt(0),
        token_out_denom: ""
    };
}
export const SwapAmountInRoute = {
    typeUrl: "/osmosis.gamm.v1beta1.SwapAmountInRoute",
    encode(message, writer = BinaryWriter.create()) {
        if (message.pool_id !== BigInt(0)) {
            writer.uint32(8).uint64(message.pool_id);
        }
        if (message.token_out_denom !== "") {
            writer.uint32(18).string(message.token_out_denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            pool_id: isSet(object.pool_id) ? BigInt(object.pool_id.toString()) : BigInt(0),
            token_out_denom: isSet(object.token_out_denom) ? String(object.token_out_denom) : ""
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
        return SwapAmountInRoute.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/swap-amount-in-route",
            value: SwapAmountInRoute.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return SwapAmountInRoute.decode(message.value);
    },
    toProto(message) {
        return SwapAmountInRoute.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.SwapAmountInRoute",
            value: SwapAmountInRoute.encode(message).finish()
        };
    }
};
function createBaseMsgSwapExactAmountIn() {
    return {
        sender: "",
        routes: [],
        token_in: Coin.fromPartial({}),
        token_out_min_amount: ""
    };
}
export const MsgSwapExactAmountIn = {
    typeUrl: "/osmosis.gamm.v1beta1.MsgSwapExactAmountIn",
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
            type: "osmosis/gamm/swap-exact-amount-in",
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
            typeUrl: "/osmosis.gamm.v1beta1.MsgSwapExactAmountIn",
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
    typeUrl: "/osmosis.gamm.v1beta1.MsgSwapExactAmountInResponse",
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
            type: "osmosis/gamm/swap-exact-amount-in-response",
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
            typeUrl: "/osmosis.gamm.v1beta1.MsgSwapExactAmountInResponse",
            value: MsgSwapExactAmountInResponse.encode(message).finish()
        };
    }
};
function createBaseSwapAmountOutRoute() {
    return {
        pool_id: BigInt(0),
        token_in_denom: ""
    };
}
export const SwapAmountOutRoute = {
    typeUrl: "/osmosis.gamm.v1beta1.SwapAmountOutRoute",
    encode(message, writer = BinaryWriter.create()) {
        if (message.pool_id !== BigInt(0)) {
            writer.uint32(8).uint64(message.pool_id);
        }
        if (message.token_in_denom !== "") {
            writer.uint32(18).string(message.token_in_denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            pool_id: isSet(object.pool_id) ? BigInt(object.pool_id.toString()) : BigInt(0),
            token_in_denom: isSet(object.token_in_denom) ? String(object.token_in_denom) : ""
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
        return SwapAmountOutRoute.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/swap-amount-out-route",
            value: SwapAmountOutRoute.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return SwapAmountOutRoute.decode(message.value);
    },
    toProto(message) {
        return SwapAmountOutRoute.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.SwapAmountOutRoute",
            value: SwapAmountOutRoute.encode(message).finish()
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
    typeUrl: "/osmosis.gamm.v1beta1.MsgSwapExactAmountOut",
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
            type: "osmosis/gamm/swap-exact-amount-out",
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
            typeUrl: "/osmosis.gamm.v1beta1.MsgSwapExactAmountOut",
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
    typeUrl: "/osmosis.gamm.v1beta1.MsgSwapExactAmountOutResponse",
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
            type: "osmosis/gamm/swap-exact-amount-out-response",
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
            typeUrl: "/osmosis.gamm.v1beta1.MsgSwapExactAmountOutResponse",
            value: MsgSwapExactAmountOutResponse.encode(message).finish()
        };
    }
};
function createBaseMsgJoinSwapExternAmountIn() {
    return {
        sender: "",
        pool_id: BigInt(0),
        token_in: Coin.fromPartial({}),
        share_out_min_amount: ""
    };
}
export const MsgJoinSwapExternAmountIn = {
    typeUrl: "/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountIn",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.pool_id !== BigInt(0)) {
            writer.uint32(16).uint64(message.pool_id);
        }
        if (message.token_in !== undefined) {
            Coin.encode(message.token_in, writer.uint32(26).fork()).ldelim();
        }
        if (message.share_out_min_amount !== "") {
            writer.uint32(34).string(message.share_out_min_amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
                    message.token_in = Coin.decode(reader, reader.uint32());
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
            sender: isSet(object.sender) ? String(object.sender) : "",
            pool_id: isSet(object.pool_id) ? BigInt(object.pool_id.toString()) : BigInt(0),
            token_in: isSet(object.token_in) ? Coin.fromJSON(object.token_in) : undefined,
            share_out_min_amount: isSet(object.share_out_min_amount) ? String(object.share_out_min_amount) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.pool_id !== undefined && (obj.pool_id = (message.pool_id || BigInt(0)).toString());
        message.token_in !== undefined && (obj.token_in = message.token_in ? Coin.toJSON(message.token_in) : undefined);
        message.share_out_min_amount !== undefined && (obj.share_out_min_amount = message.share_out_min_amount);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgJoinSwapExternAmountIn();
        message.sender = object.sender ?? "";
        message.pool_id = object.pool_id !== undefined && object.pool_id !== null ? BigInt(object.pool_id.toString()) : BigInt(0);
        message.token_in = object.token_in !== undefined && object.token_in !== null ? Coin.fromPartial(object.token_in) : undefined;
        message.share_out_min_amount = object.share_out_min_amount ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            sender: object?.sender,
            pool_id: object?.pool_id,
            token_in: object.token_in ? Coin.fromSDK(object.token_in) : undefined,
            share_out_min_amount: object?.share_out_min_amount
        };
    },
    toSDK(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.pool_id = message.pool_id;
        message.token_in !== undefined && (obj.token_in = message.token_in ? Coin.toSDK(message.token_in) : undefined);
        obj.share_out_min_amount = message.share_out_min_amount;
        return obj;
    },
    fromAmino(object) {
        return {
            sender: object.sender,
            pool_id: BigInt(object.pool_id),
            token_in: object?.token_in ? Coin.fromAmino(object.token_in) : undefined,
            share_out_min_amount: object.share_out_min_amount
        };
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.pool_id = message.pool_id ? message.pool_id.toString() : undefined;
        obj.token_in = message.token_in ? Coin.toAmino(message.token_in) : undefined;
        obj.share_out_min_amount = message.share_out_min_amount;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgJoinSwapExternAmountIn.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/join-swap-extern-amount-in",
            value: MsgJoinSwapExternAmountIn.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgJoinSwapExternAmountIn.decode(message.value);
    },
    toProto(message) {
        return MsgJoinSwapExternAmountIn.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountIn",
            value: MsgJoinSwapExternAmountIn.encode(message).finish()
        };
    }
};
function createBaseMsgJoinSwapExternAmountInResponse() {
    return {
        share_out_amount: ""
    };
}
export const MsgJoinSwapExternAmountInResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountInResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.share_out_amount !== "") {
            writer.uint32(10).string(message.share_out_amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            share_out_amount: isSet(object.share_out_amount) ? String(object.share_out_amount) : ""
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
        return MsgJoinSwapExternAmountInResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/join-swap-extern-amount-in-response",
            value: MsgJoinSwapExternAmountInResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgJoinSwapExternAmountInResponse.decode(message.value);
    },
    toProto(message) {
        return MsgJoinSwapExternAmountInResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountInResponse",
            value: MsgJoinSwapExternAmountInResponse.encode(message).finish()
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
export const MsgJoinSwapShareAmountOut = {
    typeUrl: "/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOut",
    encode(message, writer = BinaryWriter.create()) {
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
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            sender: isSet(object.sender) ? String(object.sender) : "",
            pool_id: isSet(object.pool_id) ? BigInt(object.pool_id.toString()) : BigInt(0),
            token_in_denom: isSet(object.token_in_denom) ? String(object.token_in_denom) : "",
            share_out_amount: isSet(object.share_out_amount) ? String(object.share_out_amount) : "",
            token_in_max_amount: isSet(object.token_in_max_amount) ? String(object.token_in_max_amount) : ""
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
        return MsgJoinSwapShareAmountOut.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/join-swap-share-amount-out",
            value: MsgJoinSwapShareAmountOut.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgJoinSwapShareAmountOut.decode(message.value);
    },
    toProto(message) {
        return MsgJoinSwapShareAmountOut.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOut",
            value: MsgJoinSwapShareAmountOut.encode(message).finish()
        };
    }
};
function createBaseMsgJoinSwapShareAmountOutResponse() {
    return {
        token_in_amount: ""
    };
}
export const MsgJoinSwapShareAmountOutResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOutResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.token_in_amount !== "") {
            writer.uint32(10).string(message.token_in_amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            token_in_amount: isSet(object.token_in_amount) ? String(object.token_in_amount) : ""
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
        return MsgJoinSwapShareAmountOutResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/join-swap-share-amount-out-response",
            value: MsgJoinSwapShareAmountOutResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgJoinSwapShareAmountOutResponse.decode(message.value);
    },
    toProto(message) {
        return MsgJoinSwapShareAmountOutResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOutResponse",
            value: MsgJoinSwapShareAmountOutResponse.encode(message).finish()
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
export const MsgExitSwapShareAmountIn = {
    typeUrl: "/osmosis.gamm.v1beta1.MsgExitSwapShareAmountIn",
    encode(message, writer = BinaryWriter.create()) {
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
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            sender: isSet(object.sender) ? String(object.sender) : "",
            pool_id: isSet(object.pool_id) ? BigInt(object.pool_id.toString()) : BigInt(0),
            token_out_denom: isSet(object.token_out_denom) ? String(object.token_out_denom) : "",
            share_in_amount: isSet(object.share_in_amount) ? String(object.share_in_amount) : "",
            token_out_min_amount: isSet(object.token_out_min_amount) ? String(object.token_out_min_amount) : ""
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
        return MsgExitSwapShareAmountIn.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/exit-swap-share-amount-in",
            value: MsgExitSwapShareAmountIn.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgExitSwapShareAmountIn.decode(message.value);
    },
    toProto(message) {
        return MsgExitSwapShareAmountIn.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.MsgExitSwapShareAmountIn",
            value: MsgExitSwapShareAmountIn.encode(message).finish()
        };
    }
};
function createBaseMsgExitSwapShareAmountInResponse() {
    return {
        token_out_amount: ""
    };
}
export const MsgExitSwapShareAmountInResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.MsgExitSwapShareAmountInResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.token_out_amount !== "") {
            writer.uint32(10).string(message.token_out_amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            token_out_amount: isSet(object.token_out_amount) ? String(object.token_out_amount) : ""
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
        return MsgExitSwapShareAmountInResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/exit-swap-share-amount-in-response",
            value: MsgExitSwapShareAmountInResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgExitSwapShareAmountInResponse.decode(message.value);
    },
    toProto(message) {
        return MsgExitSwapShareAmountInResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.MsgExitSwapShareAmountInResponse",
            value: MsgExitSwapShareAmountInResponse.encode(message).finish()
        };
    }
};
function createBaseMsgExitSwapExternAmountOut() {
    return {
        sender: "",
        pool_id: BigInt(0),
        token_out: Coin.fromPartial({}),
        share_in_max_amount: ""
    };
}
export const MsgExitSwapExternAmountOut = {
    typeUrl: "/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOut",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.pool_id !== BigInt(0)) {
            writer.uint32(16).uint64(message.pool_id);
        }
        if (message.token_out !== undefined) {
            Coin.encode(message.token_out, writer.uint32(26).fork()).ldelim();
        }
        if (message.share_in_max_amount !== "") {
            writer.uint32(34).string(message.share_in_max_amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
                    message.token_out = Coin.decode(reader, reader.uint32());
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
            sender: isSet(object.sender) ? String(object.sender) : "",
            pool_id: isSet(object.pool_id) ? BigInt(object.pool_id.toString()) : BigInt(0),
            token_out: isSet(object.token_out) ? Coin.fromJSON(object.token_out) : undefined,
            share_in_max_amount: isSet(object.share_in_max_amount) ? String(object.share_in_max_amount) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.pool_id !== undefined && (obj.pool_id = (message.pool_id || BigInt(0)).toString());
        message.token_out !== undefined && (obj.token_out = message.token_out ? Coin.toJSON(message.token_out) : undefined);
        message.share_in_max_amount !== undefined && (obj.share_in_max_amount = message.share_in_max_amount);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgExitSwapExternAmountOut();
        message.sender = object.sender ?? "";
        message.pool_id = object.pool_id !== undefined && object.pool_id !== null ? BigInt(object.pool_id.toString()) : BigInt(0);
        message.token_out = object.token_out !== undefined && object.token_out !== null ? Coin.fromPartial(object.token_out) : undefined;
        message.share_in_max_amount = object.share_in_max_amount ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            sender: object?.sender,
            pool_id: object?.pool_id,
            token_out: object.token_out ? Coin.fromSDK(object.token_out) : undefined,
            share_in_max_amount: object?.share_in_max_amount
        };
    },
    toSDK(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.pool_id = message.pool_id;
        message.token_out !== undefined && (obj.token_out = message.token_out ? Coin.toSDK(message.token_out) : undefined);
        obj.share_in_max_amount = message.share_in_max_amount;
        return obj;
    },
    fromAmino(object) {
        return {
            sender: object.sender,
            pool_id: BigInt(object.pool_id),
            token_out: object?.token_out ? Coin.fromAmino(object.token_out) : undefined,
            share_in_max_amount: object.share_in_max_amount
        };
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.pool_id = message.pool_id ? message.pool_id.toString() : undefined;
        obj.token_out = message.token_out ? Coin.toAmino(message.token_out) : undefined;
        obj.share_in_max_amount = message.share_in_max_amount;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgExitSwapExternAmountOut.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/exit-swap-extern-amount-out",
            value: MsgExitSwapExternAmountOut.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgExitSwapExternAmountOut.decode(message.value);
    },
    toProto(message) {
        return MsgExitSwapExternAmountOut.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOut",
            value: MsgExitSwapExternAmountOut.encode(message).finish()
        };
    }
};
function createBaseMsgExitSwapExternAmountOutResponse() {
    return {
        share_in_amount: ""
    };
}
export const MsgExitSwapExternAmountOutResponse = {
    typeUrl: "/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOutResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.share_in_amount !== "") {
            writer.uint32(10).string(message.share_in_amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            share_in_amount: isSet(object.share_in_amount) ? String(object.share_in_amount) : ""
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
        return MsgExitSwapExternAmountOutResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/exit-swap-extern-amount-out-response",
            value: MsgExitSwapExternAmountOutResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgExitSwapExternAmountOutResponse.decode(message.value);
    },
    toProto(message) {
        return MsgExitSwapExternAmountOutResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOutResponse",
            value: MsgExitSwapExternAmountOutResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=tx.js.map
//@ts-nocheck
import { SwapAmountInRoute, SwapAmountOutRoute } from "./swap_route";
import { Params } from "./genesis";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
function createBaseParamsRequest() {
    return {};
}
export const ParamsRequest = {
    typeUrl: "/osmosis.swaprouter.v1beta1.ParamsRequest",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParamsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseParamsRequest();
        return message;
    },
    fromSDK(_) {
        return {};
    },
    toSDK(_) {
        const obj = {};
        return obj;
    },
    fromAmino(_) {
        return {};
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return ParamsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/swaprouter/params-request",
            value: ParamsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ParamsRequest.decode(message.value);
    },
    toProto(message) {
        return ParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.swaprouter.v1beta1.ParamsRequest",
            value: ParamsRequest.encode(message).finish()
        };
    }
};
function createBaseParamsResponse() {
    return {
        params: Params.fromPartial({})
    };
}
export const ParamsResponse = {
    typeUrl: "/osmosis.swaprouter.v1beta1.ParamsResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
            params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParamsResponse();
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            params: object.params ? Params.fromSDK(object.params) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            params: object?.params ? Params.fromAmino(object.params) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ParamsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/swaprouter/params-response",
            value: ParamsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ParamsResponse.decode(message.value);
    },
    toProto(message) {
        return ParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.swaprouter.v1beta1.ParamsResponse",
            value: ParamsResponse.encode(message).finish()
        };
    }
};
function createBaseEstimateSwapExactAmountInRequest() {
    return {
        sender: "",
        pool_id: BigInt(0),
        token_in: "",
        routes: []
    };
}
export const EstimateSwapExactAmountInRequest = {
    typeUrl: "/osmosis.swaprouter.v1beta1.EstimateSwapExactAmountInRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.pool_id !== BigInt(0)) {
            writer.uint32(16).uint64(message.pool_id);
        }
        if (message.token_in !== "") {
            writer.uint32(26).string(message.token_in);
        }
        for (const v of message.routes) {
            SwapAmountInRoute.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEstimateSwapExactAmountInRequest();
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
                    message.token_in = reader.string();
                    break;
                case 4:
                    message.routes.push(SwapAmountInRoute.decode(reader, reader.uint32()));
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
            token_in: isSet(object.token_in) ? String(object.token_in) : "",
            routes: Array.isArray(object?.routes) ? object.routes.map((e) => SwapAmountInRoute.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.pool_id !== undefined && (obj.pool_id = (message.pool_id || BigInt(0)).toString());
        message.token_in !== undefined && (obj.token_in = message.token_in);
        if (message.routes) {
            obj.routes = message.routes.map(e => e ? SwapAmountInRoute.toJSON(e) : undefined);
        }
        else {
            obj.routes = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEstimateSwapExactAmountInRequest();
        message.sender = object.sender ?? "";
        message.pool_id = object.pool_id !== undefined && object.pool_id !== null ? BigInt(object.pool_id.toString()) : BigInt(0);
        message.token_in = object.token_in ?? "";
        message.routes = object.routes?.map(e => SwapAmountInRoute.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            sender: object?.sender,
            pool_id: object?.pool_id,
            token_in: object?.token_in,
            routes: Array.isArray(object?.routes) ? object.routes.map((e) => SwapAmountInRoute.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.pool_id = message.pool_id;
        obj.token_in = message.token_in;
        if (message.routes) {
            obj.routes = message.routes.map(e => e ? SwapAmountInRoute.toSDK(e) : undefined);
        }
        else {
            obj.routes = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            sender: object.sender,
            pool_id: BigInt(object.pool_id),
            token_in: object.token_in,
            routes: Array.isArray(object?.routes) ? object.routes.map((e) => SwapAmountInRoute.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.pool_id = message.pool_id ? message.pool_id.toString() : undefined;
        obj.token_in = message.token_in;
        if (message.routes) {
            obj.routes = message.routes.map(e => e ? SwapAmountInRoute.toAmino(e) : undefined);
        }
        else {
            obj.routes = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return EstimateSwapExactAmountInRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/swaprouter/estimate-swap-exact-amount-in-request",
            value: EstimateSwapExactAmountInRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return EstimateSwapExactAmountInRequest.decode(message.value);
    },
    toProto(message) {
        return EstimateSwapExactAmountInRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.swaprouter.v1beta1.EstimateSwapExactAmountInRequest",
            value: EstimateSwapExactAmountInRequest.encode(message).finish()
        };
    }
};
function createBaseEstimateSwapExactAmountInResponse() {
    return {
        token_out_amount: ""
    };
}
export const EstimateSwapExactAmountInResponse = {
    typeUrl: "/osmosis.swaprouter.v1beta1.EstimateSwapExactAmountInResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.token_out_amount !== "") {
            writer.uint32(10).string(message.token_out_amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEstimateSwapExactAmountInResponse();
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
        const message = createBaseEstimateSwapExactAmountInResponse();
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
        return EstimateSwapExactAmountInResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/swaprouter/estimate-swap-exact-amount-in-response",
            value: EstimateSwapExactAmountInResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return EstimateSwapExactAmountInResponse.decode(message.value);
    },
    toProto(message) {
        return EstimateSwapExactAmountInResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.swaprouter.v1beta1.EstimateSwapExactAmountInResponse",
            value: EstimateSwapExactAmountInResponse.encode(message).finish()
        };
    }
};
function createBaseEstimateSwapExactAmountOutRequest() {
    return {
        sender: "",
        pool_id: BigInt(0),
        routes: [],
        token_out: ""
    };
}
export const EstimateSwapExactAmountOutRequest = {
    typeUrl: "/osmosis.swaprouter.v1beta1.EstimateSwapExactAmountOutRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.pool_id !== BigInt(0)) {
            writer.uint32(16).uint64(message.pool_id);
        }
        for (const v of message.routes) {
            SwapAmountOutRoute.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.token_out !== "") {
            writer.uint32(34).string(message.token_out);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEstimateSwapExactAmountOutRequest();
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
                    message.routes.push(SwapAmountOutRoute.decode(reader, reader.uint32()));
                    break;
                case 4:
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
            sender: isSet(object.sender) ? String(object.sender) : "",
            pool_id: isSet(object.pool_id) ? BigInt(object.pool_id.toString()) : BigInt(0),
            routes: Array.isArray(object?.routes) ? object.routes.map((e) => SwapAmountOutRoute.fromJSON(e)) : [],
            token_out: isSet(object.token_out) ? String(object.token_out) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.pool_id !== undefined && (obj.pool_id = (message.pool_id || BigInt(0)).toString());
        if (message.routes) {
            obj.routes = message.routes.map(e => e ? SwapAmountOutRoute.toJSON(e) : undefined);
        }
        else {
            obj.routes = [];
        }
        message.token_out !== undefined && (obj.token_out = message.token_out);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEstimateSwapExactAmountOutRequest();
        message.sender = object.sender ?? "";
        message.pool_id = object.pool_id !== undefined && object.pool_id !== null ? BigInt(object.pool_id.toString()) : BigInt(0);
        message.routes = object.routes?.map(e => SwapAmountOutRoute.fromPartial(e)) || [];
        message.token_out = object.token_out ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            sender: object?.sender,
            pool_id: object?.pool_id,
            routes: Array.isArray(object?.routes) ? object.routes.map((e) => SwapAmountOutRoute.fromSDK(e)) : [],
            token_out: object?.token_out
        };
    },
    toSDK(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.pool_id = message.pool_id;
        if (message.routes) {
            obj.routes = message.routes.map(e => e ? SwapAmountOutRoute.toSDK(e) : undefined);
        }
        else {
            obj.routes = [];
        }
        obj.token_out = message.token_out;
        return obj;
    },
    fromAmino(object) {
        return {
            sender: object.sender,
            pool_id: BigInt(object.pool_id),
            routes: Array.isArray(object?.routes) ? object.routes.map((e) => SwapAmountOutRoute.fromAmino(e)) : [],
            token_out: object.token_out
        };
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.pool_id = message.pool_id ? message.pool_id.toString() : undefined;
        if (message.routes) {
            obj.routes = message.routes.map(e => e ? SwapAmountOutRoute.toAmino(e) : undefined);
        }
        else {
            obj.routes = [];
        }
        obj.token_out = message.token_out;
        return obj;
    },
    fromAminoMsg(object) {
        return EstimateSwapExactAmountOutRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/swaprouter/estimate-swap-exact-amount-out-request",
            value: EstimateSwapExactAmountOutRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return EstimateSwapExactAmountOutRequest.decode(message.value);
    },
    toProto(message) {
        return EstimateSwapExactAmountOutRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.swaprouter.v1beta1.EstimateSwapExactAmountOutRequest",
            value: EstimateSwapExactAmountOutRequest.encode(message).finish()
        };
    }
};
function createBaseEstimateSwapExactAmountOutResponse() {
    return {
        token_in_amount: ""
    };
}
export const EstimateSwapExactAmountOutResponse = {
    typeUrl: "/osmosis.swaprouter.v1beta1.EstimateSwapExactAmountOutResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.token_in_amount !== "") {
            writer.uint32(10).string(message.token_in_amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEstimateSwapExactAmountOutResponse();
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
        const message = createBaseEstimateSwapExactAmountOutResponse();
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
        return EstimateSwapExactAmountOutResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/swaprouter/estimate-swap-exact-amount-out-response",
            value: EstimateSwapExactAmountOutResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return EstimateSwapExactAmountOutResponse.decode(message.value);
    },
    toProto(message) {
        return EstimateSwapExactAmountOutResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.swaprouter.v1beta1.EstimateSwapExactAmountOutResponse",
            value: EstimateSwapExactAmountOutResponse.encode(message).finish()
        };
    }
};
function createBaseNumPoolsRequest() {
    return {};
}
export const NumPoolsRequest = {
    typeUrl: "/osmosis.swaprouter.v1beta1.NumPoolsRequest",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseNumPoolsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseNumPoolsRequest();
        return message;
    },
    fromSDK(_) {
        return {};
    },
    toSDK(_) {
        const obj = {};
        return obj;
    },
    fromAmino(_) {
        return {};
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return NumPoolsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/swaprouter/num-pools-request",
            value: NumPoolsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return NumPoolsRequest.decode(message.value);
    },
    toProto(message) {
        return NumPoolsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.swaprouter.v1beta1.NumPoolsRequest",
            value: NumPoolsRequest.encode(message).finish()
        };
    }
};
function createBaseNumPoolsResponse() {
    return {
        num_pools: BigInt(0)
    };
}
export const NumPoolsResponse = {
    typeUrl: "/osmosis.swaprouter.v1beta1.NumPoolsResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.num_pools !== BigInt(0)) {
            writer.uint32(8).uint64(message.num_pools);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseNumPoolsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.num_pools = reader.uint64();
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
            num_pools: isSet(object.num_pools) ? BigInt(object.num_pools.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.num_pools !== undefined && (obj.num_pools = (message.num_pools || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseNumPoolsResponse();
        message.num_pools = object.num_pools !== undefined && object.num_pools !== null ? BigInt(object.num_pools.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            num_pools: object?.num_pools
        };
    },
    toSDK(message) {
        const obj = {};
        obj.num_pools = message.num_pools;
        return obj;
    },
    fromAmino(object) {
        return {
            num_pools: BigInt(object.num_pools)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.num_pools = message.num_pools ? message.num_pools.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return NumPoolsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/swaprouter/num-pools-response",
            value: NumPoolsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return NumPoolsResponse.decode(message.value);
    },
    toProto(message) {
        return NumPoolsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.swaprouter.v1beta1.NumPoolsResponse",
            value: NumPoolsResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=query.js.map
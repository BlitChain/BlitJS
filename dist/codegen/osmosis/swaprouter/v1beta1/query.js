"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumPoolsResponse = exports.NumPoolsRequest = exports.EstimateSwapExactAmountOutResponse = exports.EstimateSwapExactAmountOutRequest = exports.EstimateSwapExactAmountInResponse = exports.EstimateSwapExactAmountInRequest = exports.ParamsResponse = exports.ParamsRequest = void 0;
//@ts-nocheck
const swap_route_1 = require("./swap_route");
const genesis_1 = require("./genesis");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
function createBaseParamsRequest() {
    return {};
}
exports.ParamsRequest = {
    typeUrl: "/osmosis.swaprouter.v1beta1.ParamsRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.ParamsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/swaprouter/params-request",
            value: exports.ParamsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ParamsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.ParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.swaprouter.v1beta1.ParamsRequest",
            value: exports.ParamsRequest.encode(message).finish()
        };
    }
};
function createBaseParamsResponse() {
    return {
        params: genesis_1.Params.fromPartial({})
    };
}
exports.ParamsResponse = {
    typeUrl: "/osmosis.swaprouter.v1beta1.ParamsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            genesis_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = genesis_1.Params.decode(reader, reader.uint32());
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
            params: (0, helpers_1.isSet)(object.params) ? genesis_1.Params.fromJSON(object.params) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? genesis_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParamsResponse();
        message.params = object.params !== undefined && object.params !== null ? genesis_1.Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            params: object.params ? genesis_1.Params.fromSDK(object.params) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? genesis_1.Params.toSDK(message.params) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            params: object?.params ? genesis_1.Params.fromAmino(object.params) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? genesis_1.Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ParamsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/swaprouter/params-response",
            value: exports.ParamsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ParamsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.ParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.swaprouter.v1beta1.ParamsResponse",
            value: exports.ParamsResponse.encode(message).finish()
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
exports.EstimateSwapExactAmountInRequest = {
    typeUrl: "/osmosis.swaprouter.v1beta1.EstimateSwapExactAmountInRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
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
            swap_route_1.SwapAmountInRoute.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
                    message.routes.push(swap_route_1.SwapAmountInRoute.decode(reader, reader.uint32()));
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
            token_in: (0, helpers_1.isSet)(object.token_in) ? String(object.token_in) : "",
            routes: Array.isArray(object?.routes) ? object.routes.map((e) => swap_route_1.SwapAmountInRoute.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.pool_id !== undefined && (obj.pool_id = (message.pool_id || BigInt(0)).toString());
        message.token_in !== undefined && (obj.token_in = message.token_in);
        if (message.routes) {
            obj.routes = message.routes.map(e => e ? swap_route_1.SwapAmountInRoute.toJSON(e) : undefined);
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
        message.routes = object.routes?.map(e => swap_route_1.SwapAmountInRoute.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            sender: object?.sender,
            pool_id: object?.pool_id,
            token_in: object?.token_in,
            routes: Array.isArray(object?.routes) ? object.routes.map((e) => swap_route_1.SwapAmountInRoute.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.pool_id = message.pool_id;
        obj.token_in = message.token_in;
        if (message.routes) {
            obj.routes = message.routes.map(e => e ? swap_route_1.SwapAmountInRoute.toSDK(e) : undefined);
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
            routes: Array.isArray(object?.routes) ? object.routes.map((e) => swap_route_1.SwapAmountInRoute.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.pool_id = message.pool_id ? message.pool_id.toString() : undefined;
        obj.token_in = message.token_in;
        if (message.routes) {
            obj.routes = message.routes.map(e => e ? swap_route_1.SwapAmountInRoute.toAmino(e) : undefined);
        }
        else {
            obj.routes = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EstimateSwapExactAmountInRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/swaprouter/estimate-swap-exact-amount-in-request",
            value: exports.EstimateSwapExactAmountInRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.EstimateSwapExactAmountInRequest.decode(message.value);
    },
    toProto(message) {
        return exports.EstimateSwapExactAmountInRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.swaprouter.v1beta1.EstimateSwapExactAmountInRequest",
            value: exports.EstimateSwapExactAmountInRequest.encode(message).finish()
        };
    }
};
function createBaseEstimateSwapExactAmountInResponse() {
    return {
        token_out_amount: ""
    };
}
exports.EstimateSwapExactAmountInResponse = {
    typeUrl: "/osmosis.swaprouter.v1beta1.EstimateSwapExactAmountInResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.token_out_amount !== "") {
            writer.uint32(10).string(message.token_out_amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
            token_out_amount: (0, helpers_1.isSet)(object.token_out_amount) ? String(object.token_out_amount) : ""
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
        return exports.EstimateSwapExactAmountInResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/swaprouter/estimate-swap-exact-amount-in-response",
            value: exports.EstimateSwapExactAmountInResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.EstimateSwapExactAmountInResponse.decode(message.value);
    },
    toProto(message) {
        return exports.EstimateSwapExactAmountInResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.swaprouter.v1beta1.EstimateSwapExactAmountInResponse",
            value: exports.EstimateSwapExactAmountInResponse.encode(message).finish()
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
exports.EstimateSwapExactAmountOutRequest = {
    typeUrl: "/osmosis.swaprouter.v1beta1.EstimateSwapExactAmountOutRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.pool_id !== BigInt(0)) {
            writer.uint32(16).uint64(message.pool_id);
        }
        for (const v of message.routes) {
            swap_route_1.SwapAmountOutRoute.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.token_out !== "") {
            writer.uint32(34).string(message.token_out);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
                    message.routes.push(swap_route_1.SwapAmountOutRoute.decode(reader, reader.uint32()));
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
            sender: (0, helpers_1.isSet)(object.sender) ? String(object.sender) : "",
            pool_id: (0, helpers_1.isSet)(object.pool_id) ? BigInt(object.pool_id.toString()) : BigInt(0),
            routes: Array.isArray(object?.routes) ? object.routes.map((e) => swap_route_1.SwapAmountOutRoute.fromJSON(e)) : [],
            token_out: (0, helpers_1.isSet)(object.token_out) ? String(object.token_out) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.pool_id !== undefined && (obj.pool_id = (message.pool_id || BigInt(0)).toString());
        if (message.routes) {
            obj.routes = message.routes.map(e => e ? swap_route_1.SwapAmountOutRoute.toJSON(e) : undefined);
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
        message.routes = object.routes?.map(e => swap_route_1.SwapAmountOutRoute.fromPartial(e)) || [];
        message.token_out = object.token_out ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            sender: object?.sender,
            pool_id: object?.pool_id,
            routes: Array.isArray(object?.routes) ? object.routes.map((e) => swap_route_1.SwapAmountOutRoute.fromSDK(e)) : [],
            token_out: object?.token_out
        };
    },
    toSDK(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.pool_id = message.pool_id;
        if (message.routes) {
            obj.routes = message.routes.map(e => e ? swap_route_1.SwapAmountOutRoute.toSDK(e) : undefined);
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
            routes: Array.isArray(object?.routes) ? object.routes.map((e) => swap_route_1.SwapAmountOutRoute.fromAmino(e)) : [],
            token_out: object.token_out
        };
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.pool_id = message.pool_id ? message.pool_id.toString() : undefined;
        if (message.routes) {
            obj.routes = message.routes.map(e => e ? swap_route_1.SwapAmountOutRoute.toAmino(e) : undefined);
        }
        else {
            obj.routes = [];
        }
        obj.token_out = message.token_out;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EstimateSwapExactAmountOutRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/swaprouter/estimate-swap-exact-amount-out-request",
            value: exports.EstimateSwapExactAmountOutRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.EstimateSwapExactAmountOutRequest.decode(message.value);
    },
    toProto(message) {
        return exports.EstimateSwapExactAmountOutRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.swaprouter.v1beta1.EstimateSwapExactAmountOutRequest",
            value: exports.EstimateSwapExactAmountOutRequest.encode(message).finish()
        };
    }
};
function createBaseEstimateSwapExactAmountOutResponse() {
    return {
        token_in_amount: ""
    };
}
exports.EstimateSwapExactAmountOutResponse = {
    typeUrl: "/osmosis.swaprouter.v1beta1.EstimateSwapExactAmountOutResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.token_in_amount !== "") {
            writer.uint32(10).string(message.token_in_amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
            token_in_amount: (0, helpers_1.isSet)(object.token_in_amount) ? String(object.token_in_amount) : ""
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
        return exports.EstimateSwapExactAmountOutResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/swaprouter/estimate-swap-exact-amount-out-response",
            value: exports.EstimateSwapExactAmountOutResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.EstimateSwapExactAmountOutResponse.decode(message.value);
    },
    toProto(message) {
        return exports.EstimateSwapExactAmountOutResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.swaprouter.v1beta1.EstimateSwapExactAmountOutResponse",
            value: exports.EstimateSwapExactAmountOutResponse.encode(message).finish()
        };
    }
};
function createBaseNumPoolsRequest() {
    return {};
}
exports.NumPoolsRequest = {
    typeUrl: "/osmosis.swaprouter.v1beta1.NumPoolsRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.NumPoolsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/swaprouter/num-pools-request",
            value: exports.NumPoolsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.NumPoolsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.NumPoolsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.swaprouter.v1beta1.NumPoolsRequest",
            value: exports.NumPoolsRequest.encode(message).finish()
        };
    }
};
function createBaseNumPoolsResponse() {
    return {
        num_pools: BigInt(0)
    };
}
exports.NumPoolsResponse = {
    typeUrl: "/osmosis.swaprouter.v1beta1.NumPoolsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.num_pools !== BigInt(0)) {
            writer.uint32(8).uint64(message.num_pools);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
            num_pools: (0, helpers_1.isSet)(object.num_pools) ? BigInt(object.num_pools.toString()) : BigInt(0)
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
        return exports.NumPoolsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/swaprouter/num-pools-response",
            value: exports.NumPoolsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.NumPoolsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.NumPoolsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.swaprouter.v1beta1.NumPoolsResponse",
            value: exports.NumPoolsResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=query.js.map
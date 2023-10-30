"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwapAmountOutRoute = exports.SwapAmountInRoute = void 0;
//@ts-nocheck
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
function createBaseSwapAmountInRoute() {
    return {
        pool_id: BigInt(0),
        token_out_denom: ""
    };
}
exports.SwapAmountInRoute = {
    typeUrl: "/osmosis.swaprouter.v1beta1.SwapAmountInRoute",
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
            type: "osmosis/swaprouter/swap-amount-in-route",
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
            typeUrl: "/osmosis.swaprouter.v1beta1.SwapAmountInRoute",
            value: exports.SwapAmountInRoute.encode(message).finish()
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
    typeUrl: "/osmosis.swaprouter.v1beta1.SwapAmountOutRoute",
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
            type: "osmosis/swaprouter/swap-amount-out-route",
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
            typeUrl: "/osmosis.swaprouter.v1beta1.SwapAmountOutRoute",
            value: exports.SwapAmountOutRoute.encode(message).finish()
        };
    }
};
//# sourceMappingURL=swap_route.js.map
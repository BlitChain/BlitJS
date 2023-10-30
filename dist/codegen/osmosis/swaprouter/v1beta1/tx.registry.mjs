import { MsgSwapExactAmountIn, MsgSwapExactAmountOut } from "./tx";
export const registry = [["/osmosis.swaprouter.v1beta1.MsgSwapExactAmountIn", MsgSwapExactAmountIn], ["/osmosis.swaprouter.v1beta1.MsgSwapExactAmountOut", MsgSwapExactAmountOut]];
export const load = (protoRegistry) => {
    registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
export const MessageComposer = {
    encoded: {
        swapExactAmountIn(value) {
            return {
                typeUrl: "/osmosis.swaprouter.v1beta1.MsgSwapExactAmountIn",
                value: MsgSwapExactAmountIn.encode(value).finish()
            };
        },
        swapExactAmountOut(value) {
            return {
                typeUrl: "/osmosis.swaprouter.v1beta1.MsgSwapExactAmountOut",
                value: MsgSwapExactAmountOut.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        swapExactAmountIn(value) {
            return {
                typeUrl: "/osmosis.swaprouter.v1beta1.MsgSwapExactAmountIn",
                value
            };
        },
        swapExactAmountOut(value) {
            return {
                typeUrl: "/osmosis.swaprouter.v1beta1.MsgSwapExactAmountOut",
                value
            };
        }
    },
    toJSON: {
        swapExactAmountIn(value) {
            return {
                typeUrl: "/osmosis.swaprouter.v1beta1.MsgSwapExactAmountIn",
                value: MsgSwapExactAmountIn.toJSON(value)
            };
        },
        swapExactAmountOut(value) {
            return {
                typeUrl: "/osmosis.swaprouter.v1beta1.MsgSwapExactAmountOut",
                value: MsgSwapExactAmountOut.toJSON(value)
            };
        }
    },
    fromJSON: {
        swapExactAmountIn(value) {
            return {
                typeUrl: "/osmosis.swaprouter.v1beta1.MsgSwapExactAmountIn",
                value: MsgSwapExactAmountIn.fromJSON(value)
            };
        },
        swapExactAmountOut(value) {
            return {
                typeUrl: "/osmosis.swaprouter.v1beta1.MsgSwapExactAmountOut",
                value: MsgSwapExactAmountOut.fromJSON(value)
            };
        }
    },
    fromPartial: {
        swapExactAmountIn(value) {
            return {
                typeUrl: "/osmosis.swaprouter.v1beta1.MsgSwapExactAmountIn",
                value: MsgSwapExactAmountIn.fromPartial(value)
            };
        },
        swapExactAmountOut(value) {
            return {
                typeUrl: "/osmosis.swaprouter.v1beta1.MsgSwapExactAmountOut",
                value: MsgSwapExactAmountOut.fromPartial(value)
            };
        }
    }
};
//# sourceMappingURL=tx.registry.js.map
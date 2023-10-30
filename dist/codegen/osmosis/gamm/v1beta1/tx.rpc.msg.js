"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Msg = void 0;
//@ts-nocheck
const fm = __importStar(require("../../../grpc-gateway"));
class Msg {
    static JoinPool(request, initRequest) {
        return fm.fetchReq(`/osmosis.gamm.v1beta1/JoinPool`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    static ExitPool(request, initRequest) {
        return fm.fetchReq(`/osmosis.gamm.v1beta1/ExitPool`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    static SwapExactAmountIn(request, initRequest) {
        return fm.fetchReq(`/osmosis.gamm.v1beta1/SwapExactAmountIn`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    static SwapExactAmountOut(request, initRequest) {
        return fm.fetchReq(`/osmosis.gamm.v1beta1/SwapExactAmountOut`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    static JoinSwapExternAmountIn(request, initRequest) {
        return fm.fetchReq(`/osmosis.gamm.v1beta1/JoinSwapExternAmountIn`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    static JoinSwapShareAmountOut(request, initRequest) {
        return fm.fetchReq(`/osmosis.gamm.v1beta1/JoinSwapShareAmountOut`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    static ExitSwapExternAmountOut(request, initRequest) {
        return fm.fetchReq(`/osmosis.gamm.v1beta1/ExitSwapExternAmountOut`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    static ExitSwapShareAmountIn(request, initRequest) {
        return fm.fetchReq(`/osmosis.gamm.v1beta1/ExitSwapShareAmountIn`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
}
exports.Msg = Msg;
//# sourceMappingURL=tx.rpc.msg.js.map
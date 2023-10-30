//@ts-nocheck
import * as fm from "../../../grpc-gateway";
export class Msg {
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
//# sourceMappingURL=tx.rpc.msg.js.map
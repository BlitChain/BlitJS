//@ts-nocheck
import * as fm from "../../../grpc-gateway";
export class Msg {
    static SwapExactAmountIn(request, initRequest) {
        return fm.fetchReq(`/osmosis.swaprouter.v1beta1/SwapExactAmountIn`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    static SwapExactAmountOut(request, initRequest) {
        return fm.fetchReq(`/osmosis.swaprouter.v1beta1/SwapExactAmountOut`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
}
//# sourceMappingURL=tx.rpc.msg.js.map
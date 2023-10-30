//@ts-nocheck
import * as fm from "../../../../grpc-gateway";
export class Msg {
    static CreateStableswapPool(request, initRequest) {
        return fm.fetchReq(`/osmosis.gamm.poolmodels.stableswap.v1beta1/CreateStableswapPool`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    static StableSwapAdjustScalingFactors(request, initRequest) {
        return fm.fetchReq(`/osmosis.gamm.poolmodels.stableswap.v1beta1/StableSwapAdjustScalingFactors`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
}
//# sourceMappingURL=tx.rpc.msg.js.map
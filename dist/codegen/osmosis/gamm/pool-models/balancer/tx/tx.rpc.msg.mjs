//@ts-nocheck
import * as fm from "../../../../../grpc-gateway";
export class Msg {
    static CreateBalancerPool(request, initRequest) {
        return fm.fetchReq(`/osmosis.gamm.poolmodels.balancer.v1beta1/CreateBalancerPool`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
}
//# sourceMappingURL=tx.rpc.msg.js.map
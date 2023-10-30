//@ts-nocheck
import * as fm from "../../grpc-gateway";
export class Msg {
    static CreateGauge(request, initRequest) {
        return fm.fetchReq(`/osmosis.incentives/CreateGauge`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    static AddToGauge(request, initRequest) {
        return fm.fetchReq(`/osmosis.incentives/AddToGauge`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
}
//# sourceMappingURL=tx.rpc.msg.js.map
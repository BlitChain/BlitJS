//@ts-nocheck
import * as fm from "../../../grpc-gateway";
export class Msg {
    /**
     * SoftwareUpgrade is a governance operation for initiating a software upgrade.
     *
     * Since: cosmos-sdk 0.46
     */
    static SoftwareUpgrade(request, initRequest) {
        return fm.fetchReq(`/cosmos.upgrade.v1beta1/SoftwareUpgrade`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /**
     * CancelUpgrade is a governance operation for cancelling a previously
     * approved software upgrade.
     *
     * Since: cosmos-sdk 0.46
     */
    static CancelUpgrade(request, initRequest) {
        return fm.fetchReq(`/cosmos.upgrade.v1beta1/CancelUpgrade`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
}
//# sourceMappingURL=tx.rpc.msg.js.map
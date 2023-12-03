//@ts-nocheck
import * as fm from "../../../../grpc-gateway";
export class Msg {
    /** Transfer defines a rpc handler method for MsgTransfer. */
    static Transfer(request, initRequest) {
        return fm.fetchReq(`/ibc.applications.transfer.v1/Transfer`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /** UpdateParams defines a rpc handler for MsgUpdateParams. */
    static UpdateParams(request, initRequest) {
        return fm.fetchReq(`/ibc.applications.transfer.v1/UpdateParams`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
}
//# sourceMappingURL=tx.rpc.msg.js.map
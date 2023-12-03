//@ts-nocheck
import * as fm from "../../../../../grpc-gateway";
export class Msg {
    /** UpdateParams defines a rpc handler for MsgUpdateParams. */
    static UpdateParams(request, initRequest) {
        return fm.fetchReq(`/ibc.applications.interchain_accounts.host.v1/UpdateParams`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
}
//# sourceMappingURL=tx.rpc.msg.js.map
//@ts-nocheck
import * as fm from "../../../../../grpc-gateway";
export class Msg {
    /** RegisterInterchainAccount defines a rpc handler for MsgRegisterInterchainAccount. */
    static RegisterInterchainAccount(request, initRequest) {
        return fm.fetchReq(`/ibc.applications.interchain_accounts.controller.v1/RegisterInterchainAccount`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /** SendTx defines a rpc handler for MsgSendTx. */
    static SendTx(request, initRequest) {
        return fm.fetchReq(`/ibc.applications.interchain_accounts.controller.v1/SendTx`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /** UpdateParams defines a rpc handler for MsgUpdateParams. */
    static UpdateParams(request, initRequest) {
        return fm.fetchReq(`/ibc.applications.interchain_accounts.controller.v1/UpdateParams`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
}
//# sourceMappingURL=tx.rpc.msg.js.map
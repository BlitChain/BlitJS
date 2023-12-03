//@ts-nocheck
import * as fm from "../../../grpc-gateway";
export class Msg {
    /** Send defines a method for sending coins from one account to another account. */
    static Send(request, initRequest) {
        return fm.fetchReq(`/cosmos.bank.v1beta1/Send`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /** MultiSend defines a method for sending coins from some accounts to other accounts. */
    static MultiSend(request, initRequest) {
        return fm.fetchReq(`/cosmos.bank.v1beta1/MultiSend`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
}
//# sourceMappingURL=tx.rpc.msg.js.map
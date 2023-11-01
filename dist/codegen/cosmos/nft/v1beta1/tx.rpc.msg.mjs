//@ts-nocheck
import * as fm from "../../../grpc-gateway";
export class Msg {
    /** Send defines a method to send a nft from one account to another account. */
    static Send(request, initRequest) {
        return fm.fetchReq(`/cosmos.nft.v1beta1/Send`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
}
//# sourceMappingURL=tx.rpc.msg.js.map
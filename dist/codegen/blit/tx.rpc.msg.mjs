//@ts-nocheck
import * as fm from "../grpc-gateway";
export class Msg {
    /** Since: cosmos-sdk 0.47 */
    static UpdateParams(request, initRequest) {
        return fm.fetchReq(`/blit.blit/UpdateParams`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
}
//# sourceMappingURL=tx.rpc.msg.js.map
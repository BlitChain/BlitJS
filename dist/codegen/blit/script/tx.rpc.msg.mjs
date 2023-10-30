//@ts-nocheck
import * as fm from "../../grpc-gateway";
export class Msg {
    /** Since: cosmos-sdk 0.47 */
    static UpdateParams(request, initRequest) {
        return fm.fetchReq(`/blit.script/UpdateParams`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    static CreateScript(request, initRequest) {
        return fm.fetchReq(`/blit.script/CreateScript`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    static UpdateScript(request, initRequest) {
        return fm.fetchReq(`/blit.script/UpdateScript`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    static Run(request, initRequest) {
        return fm.fetchReq(`/blit.script/Run`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
}
//# sourceMappingURL=tx.rpc.msg.js.map
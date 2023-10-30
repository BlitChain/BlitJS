//@ts-nocheck
import * as fm from "../../grpc-gateway";
export class Msg {
    /** Since: cosmos-sdk 0.47 */
    static UpdateParams(request, initRequest) {
        return fm.fetchReq(`/blit.storage/UpdateParams`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    static CreateStorage(request, initRequest) {
        return fm.fetchReq(`/blit.storage/CreateStorage`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    static UpdateStorage(request, initRequest) {
        return fm.fetchReq(`/blit.storage/UpdateStorage`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    static DeleteStorage(request, initRequest) {
        return fm.fetchReq(`/blit.storage/DeleteStorage`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
}
//# sourceMappingURL=tx.rpc.msg.js.map
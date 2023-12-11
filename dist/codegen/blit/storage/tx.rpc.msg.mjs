//@ts-nocheck
import * as fm from "../../grpc-gateway";
export class Msg {
    /**
     * UpdateParams defines a (governance) operation for updating the module
     * parameters. The authority defaults to the x/gov module account.
     */
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
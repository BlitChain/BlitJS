//@ts-nocheck
import * as fm from "../../grpc-gateway";
export class Msg {
    /**
     * UpdateParams defines a (governance) operation for updating the module
     * parameters. The authority defaults to the x/gov module account.
     */
    static UpdateParams(request, initRequest) {
        return fm.fetchReq(`/blit.blit/UpdateParams`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    static MintCoins(request, initRequest) {
        return fm.fetchReq(`/blit.blit/MintCoins`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    static BurnCoins(request, initRequest) {
        return fm.fetchReq(`/blit.blit/BurnCoins`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    static ForceTransferCoins(request, initRequest) {
        return fm.fetchReq(`/blit.blit/ForceTransferCoins`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    static SetDenomMetadata(request, initRequest) {
        return fm.fetchReq(`/blit.blit/SetDenomMetadata`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
}
//# sourceMappingURL=tx.rpc.msg.js.map
//@ts-nocheck
import * as fm from "../../../grpc-gateway";
export class Msg {
    static CreateDenom(request, initRequest) {
        return fm.fetchReq(`/osmosis.tokenfactory.v1beta1/CreateDenom`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    static Mint(request, initRequest) {
        return fm.fetchReq(`/osmosis.tokenfactory.v1beta1/Mint`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    static Burn(request, initRequest) {
        return fm.fetchReq(`/osmosis.tokenfactory.v1beta1/Burn`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    static ChangeAdmin(request, initRequest) {
        return fm.fetchReq(`/osmosis.tokenfactory.v1beta1/ChangeAdmin`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    static SetDenomMetadata(request, initRequest) {
        return fm.fetchReq(`/osmosis.tokenfactory.v1beta1/SetDenomMetadata`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
}
//# sourceMappingURL=tx.rpc.msg.js.map
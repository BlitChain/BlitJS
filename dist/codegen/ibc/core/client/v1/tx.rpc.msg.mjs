//@ts-nocheck
import * as fm from "../../../../grpc-gateway";
export class Msg {
    /** CreateClient defines a rpc handler method for MsgCreateClient. */
    static CreateClient(request, initRequest) {
        return fm.fetchReq(`/ibc.core.client.v1/CreateClient`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /** UpdateClient defines a rpc handler method for MsgUpdateClient. */
    static UpdateClient(request, initRequest) {
        return fm.fetchReq(`/ibc.core.client.v1/UpdateClient`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /** UpgradeClient defines a rpc handler method for MsgUpgradeClient. */
    static UpgradeClient(request, initRequest) {
        return fm.fetchReq(`/ibc.core.client.v1/UpgradeClient`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /** SubmitMisbehaviour defines a rpc handler method for MsgSubmitMisbehaviour. */
    static SubmitMisbehaviour(request, initRequest) {
        return fm.fetchReq(`/ibc.core.client.v1/SubmitMisbehaviour`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /** RecoverClient defines a rpc handler method for MsgRecoverClient. */
    static RecoverClient(request, initRequest) {
        return fm.fetchReq(`/ibc.core.client.v1/RecoverClient`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /** IBCSoftwareUpgrade defines a rpc handler method for MsgIBCSoftwareUpgrade. */
    static IBCSoftwareUpgrade(request, initRequest) {
        return fm.fetchReq(`/ibc.core.client.v1/IBCSoftwareUpgrade`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /** UpdateClientParams defines a rpc handler method for MsgUpdateParams. */
    static UpdateClientParams(request, initRequest) {
        return fm.fetchReq(`/ibc.core.client.v1/UpdateClientParams`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
}
//# sourceMappingURL=tx.rpc.msg.js.map
//@ts-nocheck
import * as fm from "../../../../grpc-gateway";
export class Msg {
    /** ConnectionOpenInit defines a rpc handler method for MsgConnectionOpenInit. */
    static ConnectionOpenInit(request, initRequest) {
        return fm.fetchReq(`/ibc.core.connection.v1/ConnectionOpenInit`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /** ConnectionOpenTry defines a rpc handler method for MsgConnectionOpenTry. */
    static ConnectionOpenTry(request, initRequest) {
        return fm.fetchReq(`/ibc.core.connection.v1/ConnectionOpenTry`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /** ConnectionOpenAck defines a rpc handler method for MsgConnectionOpenAck. */
    static ConnectionOpenAck(request, initRequest) {
        return fm.fetchReq(`/ibc.core.connection.v1/ConnectionOpenAck`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /**
     * ConnectionOpenConfirm defines a rpc handler method for
     * MsgConnectionOpenConfirm.
     */
    static ConnectionOpenConfirm(request, initRequest) {
        return fm.fetchReq(`/ibc.core.connection.v1/ConnectionOpenConfirm`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /**
     * UpdateConnectionParams defines a rpc handler method for
     * MsgUpdateParams.
     */
    static UpdateConnectionParams(request, initRequest) {
        return fm.fetchReq(`/ibc.core.connection.v1/UpdateConnectionParams`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
}
//# sourceMappingURL=tx.rpc.msg.js.map
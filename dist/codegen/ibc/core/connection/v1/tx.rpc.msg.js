"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Msg = void 0;
//@ts-nocheck
const fm = __importStar(require("../../../../grpc-gateway"));
class Msg {
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
exports.Msg = Msg;
//# sourceMappingURL=tx.rpc.msg.js.map
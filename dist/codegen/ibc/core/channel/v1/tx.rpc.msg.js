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
    /** ChannelOpenInit defines a rpc handler method for MsgChannelOpenInit. */
    static ChannelOpenInit(request, initRequest) {
        return fm.fetchReq(`/ibc.core.channel.v1/ChannelOpenInit`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /** ChannelOpenTry defines a rpc handler method for MsgChannelOpenTry. */
    static ChannelOpenTry(request, initRequest) {
        return fm.fetchReq(`/ibc.core.channel.v1/ChannelOpenTry`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /** ChannelOpenAck defines a rpc handler method for MsgChannelOpenAck. */
    static ChannelOpenAck(request, initRequest) {
        return fm.fetchReq(`/ibc.core.channel.v1/ChannelOpenAck`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /** ChannelOpenConfirm defines a rpc handler method for MsgChannelOpenConfirm. */
    static ChannelOpenConfirm(request, initRequest) {
        return fm.fetchReq(`/ibc.core.channel.v1/ChannelOpenConfirm`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /** ChannelCloseInit defines a rpc handler method for MsgChannelCloseInit. */
    static ChannelCloseInit(request, initRequest) {
        return fm.fetchReq(`/ibc.core.channel.v1/ChannelCloseInit`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /**
     * ChannelCloseConfirm defines a rpc handler method for
     * MsgChannelCloseConfirm.
     */
    static ChannelCloseConfirm(request, initRequest) {
        return fm.fetchReq(`/ibc.core.channel.v1/ChannelCloseConfirm`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /** RecvPacket defines a rpc handler method for MsgRecvPacket. */
    static RecvPacket(request, initRequest) {
        return fm.fetchReq(`/ibc.core.channel.v1/RecvPacket`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /** Timeout defines a rpc handler method for MsgTimeout. */
    static Timeout(request, initRequest) {
        return fm.fetchReq(`/ibc.core.channel.v1/Timeout`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /** TimeoutOnClose defines a rpc handler method for MsgTimeoutOnClose. */
    static TimeoutOnClose(request, initRequest) {
        return fm.fetchReq(`/ibc.core.channel.v1/TimeoutOnClose`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /** Acknowledgement defines a rpc handler method for MsgAcknowledgement. */
    static Acknowledgement(request, initRequest) {
        return fm.fetchReq(`/ibc.core.channel.v1/Acknowledgement`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
}
exports.Msg = Msg;
//# sourceMappingURL=tx.rpc.msg.js.map
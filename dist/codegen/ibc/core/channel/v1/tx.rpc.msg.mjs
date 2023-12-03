//@ts-nocheck
import * as fm from "../../../../grpc-gateway";
export class Msg {
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
//# sourceMappingURL=tx.rpc.msg.js.map
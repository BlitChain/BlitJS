//@ts-nocheck
import * as fm from "../../grpc-gateway";
export class Msg {
    /** LockTokens lock tokens */
    static LockTokens(request, initRequest) {
        return fm.fetchReq(`/osmosis.lockup/LockTokens`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /** BeginUnlockingAll begin unlocking all tokens */
    static BeginUnlockingAll(request, initRequest) {
        return fm.fetchReq(`/osmosis.lockup/BeginUnlockingAll`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /** MsgBeginUnlocking begins unlocking tokens by lock ID */
    static BeginUnlocking(request, initRequest) {
        return fm.fetchReq(`/osmosis.lockup/BeginUnlocking`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /** MsgEditLockup edits the existing lockups by lock ID */
    static ExtendLockup(request, initRequest) {
        return fm.fetchReq(`/osmosis.lockup/ExtendLockup`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    static ForceUnlock(request, initRequest) {
        return fm.fetchReq(`/osmosis.lockup/ForceUnlock`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
}
//# sourceMappingURL=tx.rpc.msg.js.map
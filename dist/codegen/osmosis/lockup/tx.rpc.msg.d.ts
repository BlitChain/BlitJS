import * as fm from "../../grpc-gateway";
import { MsgLockTokens, MsgLockTokensResponse, MsgBeginUnlockingAll, MsgBeginUnlockingAllResponse, MsgBeginUnlocking, MsgBeginUnlockingResponse, MsgExtendLockup, MsgExtendLockupResponse, MsgForceUnlock, MsgForceUnlockResponse } from "./tx";
export declare class Msg {
    /** LockTokens lock tokens */
    static LockTokens(request: MsgLockTokens, initRequest?: fm.InitReq): Promise<MsgLockTokensResponse>;
    /** BeginUnlockingAll begin unlocking all tokens */
    static BeginUnlockingAll(request: MsgBeginUnlockingAll, initRequest?: fm.InitReq): Promise<MsgBeginUnlockingAllResponse>;
    /** MsgBeginUnlocking begins unlocking tokens by lock ID */
    static BeginUnlocking(request: MsgBeginUnlocking, initRequest?: fm.InitReq): Promise<MsgBeginUnlockingResponse>;
    /** MsgEditLockup edits the existing lockups by lock ID */
    static ExtendLockup(request: MsgExtendLockup, initRequest?: fm.InitReq): Promise<MsgExtendLockupResponse>;
    static ForceUnlock(request: MsgForceUnlock, initRequest?: fm.InitReq): Promise<MsgForceUnlockResponse>;
}

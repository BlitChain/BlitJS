import * as fm from "../../grpc-gateway";
import { MsgSuperfluidDelegate, MsgSuperfluidDelegateResponse, MsgSuperfluidUndelegate, MsgSuperfluidUndelegateResponse, MsgSuperfluidUnbondLock, MsgSuperfluidUnbondLockResponse, MsgLockAndSuperfluidDelegate, MsgLockAndSuperfluidDelegateResponse, MsgUnPoolWhitelistedPool, MsgUnPoolWhitelistedPoolResponse } from "./tx";
export declare class Msg {
    /** Execute superfluid delegation for a lockup */
    static SuperfluidDelegate(request: MsgSuperfluidDelegate, initRequest?: fm.InitReq): Promise<MsgSuperfluidDelegateResponse>;
    /** Execute superfluid undelegation for a lockup */
    static SuperfluidUndelegate(request: MsgSuperfluidUndelegate, initRequest?: fm.InitReq): Promise<MsgSuperfluidUndelegateResponse>;
    /**
     * For a given lock that is being superfluidly undelegated,
     * also unbond the underlying lock.
     */
    static SuperfluidUnbondLock(request: MsgSuperfluidUnbondLock, initRequest?: fm.InitReq): Promise<MsgSuperfluidUnbondLockResponse>;
    /** Execute lockup lock and superfluid delegation in a single msg */
    static LockAndSuperfluidDelegate(request: MsgLockAndSuperfluidDelegate, initRequest?: fm.InitReq): Promise<MsgLockAndSuperfluidDelegateResponse>;
    static UnPoolWhitelistedPool(request: MsgUnPoolWhitelistedPool, initRequest?: fm.InitReq): Promise<MsgUnPoolWhitelistedPoolResponse>;
}

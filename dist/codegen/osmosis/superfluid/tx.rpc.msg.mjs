//@ts-nocheck
import * as fm from "../../grpc-gateway";
export class Msg {
    /** Execute superfluid delegation for a lockup */
    static SuperfluidDelegate(request, initRequest) {
        return fm.fetchReq(`/osmosis.superfluid/SuperfluidDelegate`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /** Execute superfluid undelegation for a lockup */
    static SuperfluidUndelegate(request, initRequest) {
        return fm.fetchReq(`/osmosis.superfluid/SuperfluidUndelegate`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /**
     * For a given lock that is being superfluidly undelegated,
     * also unbond the underlying lock.
     */
    static SuperfluidUnbondLock(request, initRequest) {
        return fm.fetchReq(`/osmosis.superfluid/SuperfluidUnbondLock`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /** Execute lockup lock and superfluid delegation in a single msg */
    static LockAndSuperfluidDelegate(request, initRequest) {
        return fm.fetchReq(`/osmosis.superfluid/LockAndSuperfluidDelegate`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    static UnPoolWhitelistedPool(request, initRequest) {
        return fm.fetchReq(`/osmosis.superfluid/UnPoolWhitelistedPool`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
}
//# sourceMappingURL=tx.rpc.msg.js.map
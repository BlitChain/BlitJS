//@ts-nocheck
import * as fm from "../../../grpc-gateway";
export class Msg {
    /** CreateValidator defines a method for creating a new validator. */
    static CreateValidator(request, initRequest) {
        return fm.fetchReq(`/cosmos.staking.v1beta1/CreateValidator`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /** EditValidator defines a method for editing an existing validator. */
    static EditValidator(request, initRequest) {
        return fm.fetchReq(`/cosmos.staking.v1beta1/EditValidator`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /**
     * Delegate defines a method for performing a delegation of coins
     * from a delegator to a validator.
     */
    static Delegate(request, initRequest) {
        return fm.fetchReq(`/cosmos.staking.v1beta1/Delegate`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /**
     * BeginRedelegate defines a method for performing a redelegation
     * of coins from a delegator and source validator to a destination validator.
     */
    static BeginRedelegate(request, initRequest) {
        return fm.fetchReq(`/cosmos.staking.v1beta1/BeginRedelegate`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /**
     * Undelegate defines a method for performing an undelegation from a
     * delegate and a validator.
     */
    static Undelegate(request, initRequest) {
        return fm.fetchReq(`/cosmos.staking.v1beta1/Undelegate`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /**
     * CancelUnbondingDelegation defines a method for performing canceling the unbonding delegation
     * and delegate back to previous validator.
     *
     * Since: cosmos-sdk 0.46
     */
    static CancelUnbondingDelegation(request, initRequest) {
        return fm.fetchReq(`/cosmos.staking.v1beta1/CancelUnbondingDelegation`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /**
     * UpdateParams defines an operation for updating the x/staking module
     * parameters.
     * Since: cosmos-sdk 0.47
     */
    static UpdateParams(request, initRequest) {
        return fm.fetchReq(`/cosmos.staking.v1beta1/UpdateParams`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
}
//# sourceMappingURL=tx.rpc.msg.js.map
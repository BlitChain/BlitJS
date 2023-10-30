//@ts-nocheck
import * as fm from "../../../grpc-gateway";
export class Msg {
    /**
     * SetWithdrawAddress defines a method to change the withdraw address
     * for a delegator (or validator self-delegation).
     */
    static SetWithdrawAddress(request, initRequest) {
        return fm.fetchReq(`/cosmos.distribution.v1beta1/SetWithdrawAddress`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /**
     * WithdrawDelegatorReward defines a method to withdraw rewards of delegator
     * from a single validator.
     */
    static WithdrawDelegatorReward(request, initRequest) {
        return fm.fetchReq(`/cosmos.distribution.v1beta1/WithdrawDelegatorReward`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /**
     * WithdrawValidatorCommission defines a method to withdraw the
     * full commission to the validator address.
     */
    static WithdrawValidatorCommission(request, initRequest) {
        return fm.fetchReq(`/cosmos.distribution.v1beta1/WithdrawValidatorCommission`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /**
     * FundCommunityPool defines a method to allow an account to directly
     * fund the community pool.
     */
    static FundCommunityPool(request, initRequest) {
        return fm.fetchReq(`/cosmos.distribution.v1beta1/FundCommunityPool`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
}
//# sourceMappingURL=tx.rpc.msg.js.map
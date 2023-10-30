//@ts-nocheck
import * as fm from "../../../grpc-gateway";
export class Msg {
    /**
     * SetValidatorSetPreference creates a set of validator preference.
     * This message will process both create + update request.
     */
    static SetValidatorSetPreference(request, initRequest) {
        return fm.fetchReq(`/osmosis.valsetpref.v1beta1/SetValidatorSetPreference`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /**
     * DelegateToValidatorSet gets the owner, coins and delegates to a
     * validator-set.
     */
    static DelegateToValidatorSet(request, initRequest) {
        return fm.fetchReq(`/osmosis.valsetpref.v1beta1/DelegateToValidatorSet`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /**
     * UndelegateFromValidatorSet gets the owner and coins and undelegates from
     * validator-set. The unbonding logic will follow the `Undelegate` logic from
     * the sdk.
     */
    static UndelegateFromValidatorSet(request, initRequest) {
        return fm.fetchReq(`/osmosis.valsetpref.v1beta1/UndelegateFromValidatorSet`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /**
     * RedelegateValidatorSet takes the existing validator set and redelegates to
     * a new set.
     */
    static RedelegateValidatorSet(request, initRequest) {
        return fm.fetchReq(`/osmosis.valsetpref.v1beta1/RedelegateValidatorSet`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
    /**
     * WithdrawDelegationRewards allows users to claim rewards from the
     * validator-set.
     */
    static WithdrawDelegationRewards(request, initRequest) {
        return fm.fetchReq(`/osmosis.valsetpref.v1beta1/WithdrawDelegationRewards`, {
            ...initRequest,
            method: "POST",
            body: JSON.stringify(request, fm.replacer)
        });
    }
}
//# sourceMappingURL=tx.rpc.msg.js.map
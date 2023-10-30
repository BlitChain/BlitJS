import * as fm from "../../../grpc-gateway";
import { MsgSetValidatorSetPreference, MsgSetValidatorSetPreferenceResponse, MsgDelegateToValidatorSet, MsgDelegateToValidatorSetResponse, MsgUndelegateFromValidatorSet, MsgUndelegateFromValidatorSetResponse, MsgRedelegateValidatorSet, MsgRedelegateValidatorSetResponse, MsgWithdrawDelegationRewards, MsgWithdrawDelegationRewardsResponse } from "./tx";
export declare class Msg {
    /**
     * SetValidatorSetPreference creates a set of validator preference.
     * This message will process both create + update request.
     */
    static SetValidatorSetPreference(request: MsgSetValidatorSetPreference, initRequest?: fm.InitReq): Promise<MsgSetValidatorSetPreferenceResponse>;
    /**
     * DelegateToValidatorSet gets the owner, coins and delegates to a
     * validator-set.
     */
    static DelegateToValidatorSet(request: MsgDelegateToValidatorSet, initRequest?: fm.InitReq): Promise<MsgDelegateToValidatorSetResponse>;
    /**
     * UndelegateFromValidatorSet gets the owner and coins and undelegates from
     * validator-set. The unbonding logic will follow the `Undelegate` logic from
     * the sdk.
     */
    static UndelegateFromValidatorSet(request: MsgUndelegateFromValidatorSet, initRequest?: fm.InitReq): Promise<MsgUndelegateFromValidatorSetResponse>;
    /**
     * RedelegateValidatorSet takes the existing validator set and redelegates to
     * a new set.
     */
    static RedelegateValidatorSet(request: MsgRedelegateValidatorSet, initRequest?: fm.InitReq): Promise<MsgRedelegateValidatorSetResponse>;
    /**
     * WithdrawDelegationRewards allows users to claim rewards from the
     * validator-set.
     */
    static WithdrawDelegationRewards(request: MsgWithdrawDelegationRewards, initRequest?: fm.InitReq): Promise<MsgWithdrawDelegationRewardsResponse>;
}

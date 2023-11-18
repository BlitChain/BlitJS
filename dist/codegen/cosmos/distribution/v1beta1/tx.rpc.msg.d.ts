import * as fm from "../../../grpc-gateway";
import { MsgSetWithdrawAddress, MsgSetWithdrawAddressResponse, MsgWithdrawDelegatorReward, MsgWithdrawDelegatorRewardResponse, MsgWithdrawValidatorCommission, MsgWithdrawValidatorCommissionResponse, MsgFundCommunityPool, MsgFundCommunityPoolResponse, MsgUpdateParams, MsgUpdateParamsResponse, MsgCommunityPoolSpend, MsgCommunityPoolSpendResponse, MsgDepositValidatorRewardsPool, MsgDepositValidatorRewardsPoolResponse } from "./tx";
export declare class Msg {
    /**
     * SetWithdrawAddress defines a method to change the withdraw address
     * for a delegator (or validator self-delegation).
     */
    static SetWithdrawAddress(request: MsgSetWithdrawAddress, initRequest?: fm.InitReq): Promise<MsgSetWithdrawAddressResponse>;
    /**
     * WithdrawDelegatorReward defines a method to withdraw rewards of delegator
     * from a single validator.
     */
    static WithdrawDelegatorReward(request: MsgWithdrawDelegatorReward, initRequest?: fm.InitReq): Promise<MsgWithdrawDelegatorRewardResponse>;
    /**
     * WithdrawValidatorCommission defines a method to withdraw the
     * full commission to the validator address.
     */
    static WithdrawValidatorCommission(request: MsgWithdrawValidatorCommission, initRequest?: fm.InitReq): Promise<MsgWithdrawValidatorCommissionResponse>;
    /**
     * FundCommunityPool defines a method to allow an account to directly
     * fund the community pool.
     */
    static FundCommunityPool(request: MsgFundCommunityPool, initRequest?: fm.InitReq): Promise<MsgFundCommunityPoolResponse>;
    /**
     * UpdateParams defines a governance operation for updating the x/distribution
     * module parameters. The authority is defined in the keeper.
     *
     * Since: cosmos-sdk 0.47
     */
    static UpdateParams(request: MsgUpdateParams, initRequest?: fm.InitReq): Promise<MsgUpdateParamsResponse>;
    /**
     * CommunityPoolSpend defines a governance operation for sending tokens from
     * the community pool in the x/distribution module to another account, which
     * could be the governance module itself. The authority is defined in the
     * keeper.
     *
     * Since: cosmos-sdk 0.47
     */
    static CommunityPoolSpend(request: MsgCommunityPoolSpend, initRequest?: fm.InitReq): Promise<MsgCommunityPoolSpendResponse>;
    /**
     * DepositValidatorRewardsPool defines a method to provide additional rewards
     * to delegators to a specific validator.
     *
     * Since: cosmos-sdk 0.50
     */
    static DepositValidatorRewardsPool(request: MsgDepositValidatorRewardsPool, initRequest?: fm.InitReq): Promise<MsgDepositValidatorRewardsPoolResponse>;
}

//@ts-nocheck
import * as fm from "../../../grpc-gateway";
import { MsgSetWithdrawAddress, MsgSetWithdrawAddressResponse, MsgWithdrawDelegatorReward, MsgWithdrawDelegatorRewardResponse, MsgWithdrawValidatorCommission, MsgWithdrawValidatorCommissionResponse, MsgFundCommunityPool, MsgFundCommunityPoolResponse, MsgUpdateParams, MsgUpdateParamsResponse, MsgCommunityPoolSpend, MsgCommunityPoolSpendResponse, MsgDepositValidatorRewardsPool, MsgDepositValidatorRewardsPoolResponse } from "./tx";
export class Msg {
  /**
   * SetWithdrawAddress defines a method to change the withdraw address
   * for a delegator (or validator self-delegation).
   */
  static SetWithdrawAddress(request: MsgSetWithdrawAddress, initRequest?: fm.InitReq): Promise<MsgSetWithdrawAddressResponse> {
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
  static WithdrawDelegatorReward(request: MsgWithdrawDelegatorReward, initRequest?: fm.InitReq): Promise<MsgWithdrawDelegatorRewardResponse> {
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
  static WithdrawValidatorCommission(request: MsgWithdrawValidatorCommission, initRequest?: fm.InitReq): Promise<MsgWithdrawValidatorCommissionResponse> {
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
  static FundCommunityPool(request: MsgFundCommunityPool, initRequest?: fm.InitReq): Promise<MsgFundCommunityPoolResponse> {
    return fm.fetchReq(`/cosmos.distribution.v1beta1/FundCommunityPool`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /**
   * UpdateParams defines a governance operation for updating the x/distribution
   * module parameters. The authority is defined in the keeper.
   * 
   * Since: cosmos-sdk 0.47
   */
  static UpdateParams(request: MsgUpdateParams, initRequest?: fm.InitReq): Promise<MsgUpdateParamsResponse> {
    return fm.fetchReq(`/cosmos.distribution.v1beta1/UpdateParams`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /**
   * CommunityPoolSpend defines a governance operation for sending tokens from
   * the community pool in the x/distribution module to another account, which
   * could be the governance module itself. The authority is defined in the
   * keeper.
   * 
   * Since: cosmos-sdk 0.47
   */
  static CommunityPoolSpend(request: MsgCommunityPoolSpend, initRequest?: fm.InitReq): Promise<MsgCommunityPoolSpendResponse> {
    return fm.fetchReq(`/cosmos.distribution.v1beta1/CommunityPoolSpend`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /**
   * DepositValidatorRewardsPool defines a method to provide additional rewards
   * to delegators to a specific validator.
   * 
   * Since: cosmos-sdk 0.50
   */
  static DepositValidatorRewardsPool(request: MsgDepositValidatorRewardsPool, initRequest?: fm.InitReq): Promise<MsgDepositValidatorRewardsPoolResponse> {
    return fm.fetchReq(`/cosmos.distribution.v1beta1/DepositValidatorRewardsPool`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
}
//@ts-nocheck
import * as fm from "../../../grpc-gateway";
import { MsgCreateVestingAccount, MsgCreateVestingAccountResponse, MsgCreatePermanentLockedAccount, MsgCreatePermanentLockedAccountResponse, MsgCreatePeriodicVestingAccount, MsgCreatePeriodicVestingAccountResponse } from "./tx";
export class Msg {
  /**
   * CreateVestingAccount defines a method that enables creating a vesting
   * account.
   */
  static CreateVestingAccount(request: MsgCreateVestingAccount, initRequest?: fm.InitReq): Promise<MsgCreateVestingAccountResponse> {
    return fm.fetchReq(`/cosmos.vesting.v1beta1/CreateVestingAccount`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /**
   * CreatePermanentLockedAccount defines a method that enables creating a permanent
   * locked account.
   * 
   * Since: cosmos-sdk 0.46
   */
  static CreatePermanentLockedAccount(request: MsgCreatePermanentLockedAccount, initRequest?: fm.InitReq): Promise<MsgCreatePermanentLockedAccountResponse> {
    return fm.fetchReq(`/cosmos.vesting.v1beta1/CreatePermanentLockedAccount`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /**
   * CreatePeriodicVestingAccount defines a method that enables creating a
   * periodic vesting account.
   * 
   * Since: cosmos-sdk 0.46
   */
  static CreatePeriodicVestingAccount(request: MsgCreatePeriodicVestingAccount, initRequest?: fm.InitReq): Promise<MsgCreatePeriodicVestingAccountResponse> {
    return fm.fetchReq(`/cosmos.vesting.v1beta1/CreatePeriodicVestingAccount`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
}
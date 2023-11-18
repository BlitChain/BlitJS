//@ts-nocheck
import * as fm from "../../../grpc-gateway";
import { MsgGrantAllowance, MsgGrantAllowanceResponse, MsgRevokeAllowance, MsgRevokeAllowanceResponse, MsgPruneAllowances, MsgPruneAllowancesResponse } from "./tx";
export class Msg {
  /**
   * GrantAllowance grants fee allowance to the grantee on the granter's
   * account with the provided expiration time.
   */
  static GrantAllowance(request: MsgGrantAllowance, initRequest?: fm.InitReq): Promise<MsgGrantAllowanceResponse> {
    return fm.fetchReq(`/cosmos.feegrant.v1beta1/GrantAllowance`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /**
   * RevokeAllowance revokes any fee allowance of granter's account that
   * has been granted to the grantee.
   */
  static RevokeAllowance(request: MsgRevokeAllowance, initRequest?: fm.InitReq): Promise<MsgRevokeAllowanceResponse> {
    return fm.fetchReq(`/cosmos.feegrant.v1beta1/RevokeAllowance`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /**
   * PruneAllowances prunes expired fee allowances, currently up to 75 at a time.
   * 
   * Since cosmos-sdk 0.50
   */
  static PruneAllowances(request: MsgPruneAllowances, initRequest?: fm.InitReq): Promise<MsgPruneAllowancesResponse> {
    return fm.fetchReq(`/cosmos.feegrant.v1beta1/PruneAllowances`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
}
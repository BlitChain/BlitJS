//@ts-nocheck
import * as fm from "../../../grpc-gateway";
import { MsgUpdateParams, MsgUpdateParamsResponse } from "./tx";
export class Msg {
  /**
   * UpdateParams defines a (governance) operation for updating the x/auth module
   * parameters. The authority defaults to the x/gov module account.
   * 
   * Since: cosmos-sdk 0.47
   */
  static UpdateParams(request: MsgUpdateParams, initRequest?: fm.InitReq): Promise<MsgUpdateParamsResponse> {
    return fm.fetchReq(`/cosmos.auth.v1beta1/UpdateParams`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
}
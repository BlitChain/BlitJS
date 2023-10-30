//@ts-nocheck
import * as fm from "../grpc-gateway";
import { MsgUpdateParams, MsgUpdateParamsResponse } from "./tx";
export class Msg {
  /** Since: cosmos-sdk 0.47 */
  static UpdateParams(request: MsgUpdateParams, initRequest?: fm.InitReq): Promise<MsgUpdateParamsResponse> {
    return fm.fetchReq(`/blit.blit/UpdateParams`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
}
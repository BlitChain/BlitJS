//@ts-nocheck
import * as fm from "../../grpc-gateway";
import { MsgUpdateParams, MsgUpdateParamsResponse, MsgCreateScript, MsgCreateScriptResponse, MsgUpdateScript, MsgUpdateScriptResponse } from "./tx";
import { MsgRun, MsgRunResponse } from "./msgrun";
export class Msg {
  /** Since: cosmos-sdk 0.47 */
  static UpdateParams(request: MsgUpdateParams, initRequest?: fm.InitReq): Promise<MsgUpdateParamsResponse> {
    return fm.fetchReq(`/blit.script/UpdateParams`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  static CreateScript(request: MsgCreateScript, initRequest?: fm.InitReq): Promise<MsgCreateScriptResponse> {
    return fm.fetchReq(`/blit.script/CreateScript`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  static UpdateScript(request: MsgUpdateScript, initRequest?: fm.InitReq): Promise<MsgUpdateScriptResponse> {
    return fm.fetchReq(`/blit.script/UpdateScript`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  static Run(request: MsgRun, initRequest?: fm.InitReq): Promise<MsgRunResponse> {
    return fm.fetchReq(`/blit.script/Run`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
}
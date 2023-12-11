//@ts-nocheck
import * as fm from "../../grpc-gateway";
import { MsgUpdateParams, MsgUpdateParamsResponse, MsgCreateScript, MsgCreateScriptResponse, MsgUpdateScript, MsgUpdateScriptResponse, MsgRun, MsgRunResponse } from "./tx";
export class Msg {
  /**
   * UpdateParams defines a (governance) operation for updating the module
   * parameters. The authority defaults to the x/gov module account.
   */
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
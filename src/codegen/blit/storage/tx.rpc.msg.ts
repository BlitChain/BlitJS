//@ts-nocheck
import * as fm from "../../grpc-gateway";
import { MsgUpdateParams, MsgUpdateParamsResponse, MsgCreateStorage, MsgCreateStorageResponse, MsgUpdateStorage, MsgUpdateStorageResponse, MsgDeleteStorage, MsgDeleteStorageResponse } from "./tx";
export class Msg {
  /**
   * UpdateParams defines a (governance) operation for updating the module
   * parameters. The authority defaults to the x/gov module account.
   */
  static UpdateParams(request: MsgUpdateParams, initRequest?: fm.InitReq): Promise<MsgUpdateParamsResponse> {
    return fm.fetchReq(`/blit.storage/UpdateParams`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  static CreateStorage(request: MsgCreateStorage, initRequest?: fm.InitReq): Promise<MsgCreateStorageResponse> {
    return fm.fetchReq(`/blit.storage/CreateStorage`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  static UpdateStorage(request: MsgUpdateStorage, initRequest?: fm.InitReq): Promise<MsgUpdateStorageResponse> {
    return fm.fetchReq(`/blit.storage/UpdateStorage`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  static DeleteStorage(request: MsgDeleteStorage, initRequest?: fm.InitReq): Promise<MsgDeleteStorageResponse> {
    return fm.fetchReq(`/blit.storage/DeleteStorage`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
}
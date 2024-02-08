//@ts-nocheck
import * as fm from "../../grpc-gateway";
import { MsgUpdateParams, MsgUpdateParamsResponse, MsgMintCoins, MsgMintCoinsResponse, MsgBurnCoins, MsgBurnCoinsResponse, MsgForceTransferCoins, MsgForceTransferCoinsResponse, MsgSetDenomMetadata, MsgSetDenomMetadataResponse, MsgCreateTask, MsgCreateTaskResponse, MsgDeleteTask, MsgDeleteTaskResponse } from "./tx";
export class Msg {
  /**
   * UpdateParams defines a (governance) operation for updating the module
   * parameters. The authority defaults to the x/gov module account.
   */
  static UpdateParams(request: MsgUpdateParams, initRequest?: fm.InitReq): Promise<MsgUpdateParamsResponse> {
    return fm.fetchReq(`/blit.blit/UpdateParams`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  static MintCoins(request: MsgMintCoins, initRequest?: fm.InitReq): Promise<MsgMintCoinsResponse> {
    return fm.fetchReq(`/blit.blit/MintCoins`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  static BurnCoins(request: MsgBurnCoins, initRequest?: fm.InitReq): Promise<MsgBurnCoinsResponse> {
    return fm.fetchReq(`/blit.blit/BurnCoins`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  static ForceTransferCoins(request: MsgForceTransferCoins, initRequest?: fm.InitReq): Promise<MsgForceTransferCoinsResponse> {
    return fm.fetchReq(`/blit.blit/ForceTransferCoins`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  static SetDenomMetadata(request: MsgSetDenomMetadata, initRequest?: fm.InitReq): Promise<MsgSetDenomMetadataResponse> {
    return fm.fetchReq(`/blit.blit/SetDenomMetadata`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  static CreateTask(request: MsgCreateTask, initRequest?: fm.InitReq): Promise<MsgCreateTaskResponse> {
    return fm.fetchReq(`/blit.blit/CreateTask`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  static DeleteTask(request: MsgDeleteTask, initRequest?: fm.InitReq): Promise<MsgDeleteTaskResponse> {
    return fm.fetchReq(`/blit.blit/DeleteTask`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
}
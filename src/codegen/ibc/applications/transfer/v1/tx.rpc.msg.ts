//@ts-nocheck
import * as fm from "../../../../grpc-gateway";
import { MsgTransfer, MsgTransferResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx";
export class Msg {
  /** Transfer defines a rpc handler method for MsgTransfer. */
  static Transfer(request: MsgTransfer, initRequest?: fm.InitReq): Promise<MsgTransferResponse> {
    return fm.fetchReq(`/ibc.applications.transfer.v1/Transfer`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /** UpdateParams defines a rpc handler for MsgUpdateParams. */
  static UpdateParams(request: MsgUpdateParams, initRequest?: fm.InitReq): Promise<MsgUpdateParamsResponse> {
    return fm.fetchReq(`/ibc.applications.transfer.v1/UpdateParams`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
}
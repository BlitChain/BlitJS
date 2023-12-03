//@ts-nocheck
import * as fm from "../../../../../grpc-gateway";
import { MsgRegisterInterchainAccount, MsgRegisterInterchainAccountResponse, MsgSendTx, MsgSendTxResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx";
export class Msg {
  /** RegisterInterchainAccount defines a rpc handler for MsgRegisterInterchainAccount. */
  static RegisterInterchainAccount(request: MsgRegisterInterchainAccount, initRequest?: fm.InitReq): Promise<MsgRegisterInterchainAccountResponse> {
    return fm.fetchReq(`/ibc.applications.interchain_accounts.controller.v1/RegisterInterchainAccount`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /** SendTx defines a rpc handler for MsgSendTx. */
  static SendTx(request: MsgSendTx, initRequest?: fm.InitReq): Promise<MsgSendTxResponse> {
    return fm.fetchReq(`/ibc.applications.interchain_accounts.controller.v1/SendTx`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /** UpdateParams defines a rpc handler for MsgUpdateParams. */
  static UpdateParams(request: MsgUpdateParams, initRequest?: fm.InitReq): Promise<MsgUpdateParamsResponse> {
    return fm.fetchReq(`/ibc.applications.interchain_accounts.controller.v1/UpdateParams`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
}
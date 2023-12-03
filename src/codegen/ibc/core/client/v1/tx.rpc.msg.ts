//@ts-nocheck
import * as fm from "../../../../grpc-gateway";
import { MsgCreateClient, MsgCreateClientResponse, MsgUpdateClient, MsgUpdateClientResponse, MsgUpgradeClient, MsgUpgradeClientResponse, MsgSubmitMisbehaviour, MsgSubmitMisbehaviourResponse, MsgRecoverClient, MsgRecoverClientResponse, MsgIBCSoftwareUpgrade, MsgIBCSoftwareUpgradeResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx";
export class Msg {
  /** CreateClient defines a rpc handler method for MsgCreateClient. */
  static CreateClient(request: MsgCreateClient, initRequest?: fm.InitReq): Promise<MsgCreateClientResponse> {
    return fm.fetchReq(`/ibc.core.client.v1/CreateClient`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /** UpdateClient defines a rpc handler method for MsgUpdateClient. */
  static UpdateClient(request: MsgUpdateClient, initRequest?: fm.InitReq): Promise<MsgUpdateClientResponse> {
    return fm.fetchReq(`/ibc.core.client.v1/UpdateClient`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /** UpgradeClient defines a rpc handler method for MsgUpgradeClient. */
  static UpgradeClient(request: MsgUpgradeClient, initRequest?: fm.InitReq): Promise<MsgUpgradeClientResponse> {
    return fm.fetchReq(`/ibc.core.client.v1/UpgradeClient`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /** SubmitMisbehaviour defines a rpc handler method for MsgSubmitMisbehaviour. */
  static SubmitMisbehaviour(request: MsgSubmitMisbehaviour, initRequest?: fm.InitReq): Promise<MsgSubmitMisbehaviourResponse> {
    return fm.fetchReq(`/ibc.core.client.v1/SubmitMisbehaviour`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /** RecoverClient defines a rpc handler method for MsgRecoverClient. */
  static RecoverClient(request: MsgRecoverClient, initRequest?: fm.InitReq): Promise<MsgRecoverClientResponse> {
    return fm.fetchReq(`/ibc.core.client.v1/RecoverClient`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /** IBCSoftwareUpgrade defines a rpc handler method for MsgIBCSoftwareUpgrade. */
  static IBCSoftwareUpgrade(request: MsgIBCSoftwareUpgrade, initRequest?: fm.InitReq): Promise<MsgIBCSoftwareUpgradeResponse> {
    return fm.fetchReq(`/ibc.core.client.v1/IBCSoftwareUpgrade`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /** UpdateClientParams defines a rpc handler method for MsgUpdateParams. */
  static UpdateClientParams(request: MsgUpdateParams, initRequest?: fm.InitReq): Promise<MsgUpdateParamsResponse> {
    return fm.fetchReq(`/ibc.core.client.v1/UpdateClientParams`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
}
import * as fm from "../../../../grpc-gateway";
import { MsgCreateClient, MsgCreateClientResponse, MsgUpdateClient, MsgUpdateClientResponse, MsgUpgradeClient, MsgUpgradeClientResponse, MsgSubmitMisbehaviour, MsgSubmitMisbehaviourResponse, MsgRecoverClient, MsgRecoverClientResponse, MsgIBCSoftwareUpgrade, MsgIBCSoftwareUpgradeResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx";
export declare class Msg {
    /** CreateClient defines a rpc handler method for MsgCreateClient. */
    static CreateClient(request: MsgCreateClient, initRequest?: fm.InitReq): Promise<MsgCreateClientResponse>;
    /** UpdateClient defines a rpc handler method for MsgUpdateClient. */
    static UpdateClient(request: MsgUpdateClient, initRequest?: fm.InitReq): Promise<MsgUpdateClientResponse>;
    /** UpgradeClient defines a rpc handler method for MsgUpgradeClient. */
    static UpgradeClient(request: MsgUpgradeClient, initRequest?: fm.InitReq): Promise<MsgUpgradeClientResponse>;
    /** SubmitMisbehaviour defines a rpc handler method for MsgSubmitMisbehaviour. */
    static SubmitMisbehaviour(request: MsgSubmitMisbehaviour, initRequest?: fm.InitReq): Promise<MsgSubmitMisbehaviourResponse>;
    /** RecoverClient defines a rpc handler method for MsgRecoverClient. */
    static RecoverClient(request: MsgRecoverClient, initRequest?: fm.InitReq): Promise<MsgRecoverClientResponse>;
    /** IBCSoftwareUpgrade defines a rpc handler method for MsgIBCSoftwareUpgrade. */
    static IBCSoftwareUpgrade(request: MsgIBCSoftwareUpgrade, initRequest?: fm.InitReq): Promise<MsgIBCSoftwareUpgradeResponse>;
    /** UpdateClientParams defines a rpc handler method for MsgUpdateParams. */
    static UpdateClientParams(request: MsgUpdateParams, initRequest?: fm.InitReq): Promise<MsgUpdateParamsResponse>;
}

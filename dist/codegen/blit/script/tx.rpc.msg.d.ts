import * as fm from "../../grpc-gateway";
import { MsgUpdateParams, MsgUpdateParamsResponse, MsgCreateScript, MsgCreateScriptResponse, MsgUpdateScript, MsgUpdateScriptResponse, MsgRun, MsgRunResponse } from "./tx";
export declare class Msg {
    /**
     * UpdateParams defines a (governance) operation for updating the module
     * parameters. The authority defaults to the x/gov module account.
     */
    static UpdateParams(request: MsgUpdateParams, initRequest?: fm.InitReq): Promise<MsgUpdateParamsResponse>;
    static CreateScript(request: MsgCreateScript, initRequest?: fm.InitReq): Promise<MsgCreateScriptResponse>;
    static UpdateScript(request: MsgUpdateScript, initRequest?: fm.InitReq): Promise<MsgUpdateScriptResponse>;
    static Run(request: MsgRun, initRequest?: fm.InitReq): Promise<MsgRunResponse>;
}

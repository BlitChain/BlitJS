import * as fm from "../../grpc-gateway";
import { MsgUpdateParams, MsgUpdateParamsResponse, MsgCreateScript, MsgCreateScriptResponse, MsgUpdateScript, MsgUpdateScriptResponse } from "./tx";
import { MsgRun, MsgRunResponse } from "./msgrun";
export declare class Msg {
    /** Since: cosmos-sdk 0.47 */
    static UpdateParams(request: MsgUpdateParams, initRequest?: fm.InitReq): Promise<MsgUpdateParamsResponse>;
    static CreateScript(request: MsgCreateScript, initRequest?: fm.InitReq): Promise<MsgCreateScriptResponse>;
    static UpdateScript(request: MsgUpdateScript, initRequest?: fm.InitReq): Promise<MsgUpdateScriptResponse>;
    static Run(request: MsgRun, initRequest?: fm.InitReq): Promise<MsgRunResponse>;
}

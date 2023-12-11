import * as fm from "../../grpc-gateway";
import { MsgUpdateParams, MsgUpdateParamsResponse, MsgCreateStorage, MsgCreateStorageResponse, MsgUpdateStorage, MsgUpdateStorageResponse, MsgDeleteStorage, MsgDeleteStorageResponse } from "./tx";
export declare class Msg {
    /**
     * UpdateParams defines a (governance) operation for updating the module
     * parameters. The authority defaults to the x/gov module account.
     */
    static UpdateParams(request: MsgUpdateParams, initRequest?: fm.InitReq): Promise<MsgUpdateParamsResponse>;
    static CreateStorage(request: MsgCreateStorage, initRequest?: fm.InitReq): Promise<MsgCreateStorageResponse>;
    static UpdateStorage(request: MsgUpdateStorage, initRequest?: fm.InitReq): Promise<MsgUpdateStorageResponse>;
    static DeleteStorage(request: MsgDeleteStorage, initRequest?: fm.InitReq): Promise<MsgDeleteStorageResponse>;
}

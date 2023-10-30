import * as fm from "../../grpc-gateway";
import { MsgUpdateParams, MsgUpdateParamsResponse, MsgCreateStorage, MsgCreateStorageResponse, MsgUpdateStorage, MsgUpdateStorageResponse, MsgDeleteStorage, MsgDeleteStorageResponse } from "./tx";
export declare class Msg {
    /** Since: cosmos-sdk 0.47 */
    static UpdateParams(request: MsgUpdateParams, initRequest?: fm.InitReq): Promise<MsgUpdateParamsResponse>;
    static CreateStorage(request: MsgCreateStorage, initRequest?: fm.InitReq): Promise<MsgCreateStorageResponse>;
    static UpdateStorage(request: MsgUpdateStorage, initRequest?: fm.InitReq): Promise<MsgUpdateStorageResponse>;
    static DeleteStorage(request: MsgDeleteStorage, initRequest?: fm.InitReq): Promise<MsgDeleteStorageResponse>;
}

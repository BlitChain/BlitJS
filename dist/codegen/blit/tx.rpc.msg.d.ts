import * as fm from "../grpc-gateway";
import { MsgUpdateParams, MsgUpdateParamsResponse } from "./tx";
export declare class Msg {
    /** Since: cosmos-sdk 0.47 */
    static UpdateParams(request: MsgUpdateParams, initRequest?: fm.InitReq): Promise<MsgUpdateParamsResponse>;
}

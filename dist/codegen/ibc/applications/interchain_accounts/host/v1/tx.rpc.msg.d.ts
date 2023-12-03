import * as fm from "../../../../../grpc-gateway";
import { MsgUpdateParams, MsgUpdateParamsResponse } from "./tx";
export declare class Msg {
    /** UpdateParams defines a rpc handler for MsgUpdateParams. */
    static UpdateParams(request: MsgUpdateParams, initRequest?: fm.InitReq): Promise<MsgUpdateParamsResponse>;
}

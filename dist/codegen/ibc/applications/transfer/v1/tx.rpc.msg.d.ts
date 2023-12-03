import * as fm from "../../../../grpc-gateway";
import { MsgTransfer, MsgTransferResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx";
export declare class Msg {
    /** Transfer defines a rpc handler method for MsgTransfer. */
    static Transfer(request: MsgTransfer, initRequest?: fm.InitReq): Promise<MsgTransferResponse>;
    /** UpdateParams defines a rpc handler for MsgUpdateParams. */
    static UpdateParams(request: MsgUpdateParams, initRequest?: fm.InitReq): Promise<MsgUpdateParamsResponse>;
}

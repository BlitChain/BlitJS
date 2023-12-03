import * as fm from "../../../../grpc-gateway";
import { MsgConnectionOpenInit, MsgConnectionOpenInitResponse, MsgConnectionOpenTry, MsgConnectionOpenTryResponse, MsgConnectionOpenAck, MsgConnectionOpenAckResponse, MsgConnectionOpenConfirm, MsgConnectionOpenConfirmResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx";
export declare class Msg {
    /** ConnectionOpenInit defines a rpc handler method for MsgConnectionOpenInit. */
    static ConnectionOpenInit(request: MsgConnectionOpenInit, initRequest?: fm.InitReq): Promise<MsgConnectionOpenInitResponse>;
    /** ConnectionOpenTry defines a rpc handler method for MsgConnectionOpenTry. */
    static ConnectionOpenTry(request: MsgConnectionOpenTry, initRequest?: fm.InitReq): Promise<MsgConnectionOpenTryResponse>;
    /** ConnectionOpenAck defines a rpc handler method for MsgConnectionOpenAck. */
    static ConnectionOpenAck(request: MsgConnectionOpenAck, initRequest?: fm.InitReq): Promise<MsgConnectionOpenAckResponse>;
    /**
     * ConnectionOpenConfirm defines a rpc handler method for
     * MsgConnectionOpenConfirm.
     */
    static ConnectionOpenConfirm(request: MsgConnectionOpenConfirm, initRequest?: fm.InitReq): Promise<MsgConnectionOpenConfirmResponse>;
    /**
     * UpdateConnectionParams defines a rpc handler method for
     * MsgUpdateParams.
     */
    static UpdateConnectionParams(request: MsgUpdateParams, initRequest?: fm.InitReq): Promise<MsgUpdateParamsResponse>;
}

import * as fm from "../../../grpc-gateway";
import { MsgSend, MsgSendResponse, MsgMultiSend, MsgMultiSendResponse, MsgUpdateParams, MsgUpdateParamsResponse, MsgSetSendEnabled, MsgSetSendEnabledResponse } from "./tx";
export declare class Msg {
    /** Send defines a method for sending coins from one account to another account. */
    static Send(request: MsgSend, initRequest?: fm.InitReq): Promise<MsgSendResponse>;
    /** MultiSend defines a method for sending coins from some accounts to other accounts. */
    static MultiSend(request: MsgMultiSend, initRequest?: fm.InitReq): Promise<MsgMultiSendResponse>;
    /**
     * UpdateParams defines a governance operation for updating the x/bank module parameters.
     * The authority is defined in the keeper.
     *
     * Since: cosmos-sdk 0.47
     */
    static UpdateParams(request: MsgUpdateParams, initRequest?: fm.InitReq): Promise<MsgUpdateParamsResponse>;
    /**
     * SetSendEnabled is a governance operation for setting the SendEnabled flag
     * on any number of Denoms. Only the entries to add or update should be
     * included. Entries that already exist in the store, but that aren't
     * included in this message, will be left unchanged.
     *
     * Since: cosmos-sdk 0.47
     */
    static SetSendEnabled(request: MsgSetSendEnabled, initRequest?: fm.InitReq): Promise<MsgSetSendEnabledResponse>;
}

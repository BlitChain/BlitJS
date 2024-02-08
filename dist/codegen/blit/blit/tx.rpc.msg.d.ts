import * as fm from "../../grpc-gateway";
import { MsgUpdateParams, MsgUpdateParamsResponse, MsgMintCoins, MsgMintCoinsResponse, MsgBurnCoins, MsgBurnCoinsResponse, MsgForceTransferCoins, MsgForceTransferCoinsResponse, MsgSetDenomMetadata, MsgSetDenomMetadataResponse, MsgCreateTask, MsgCreateTaskResponse, MsgDeleteTask, MsgDeleteTaskResponse } from "./tx";
export declare class Msg {
    /**
     * UpdateParams defines a (governance) operation for updating the module
     * parameters. The authority defaults to the x/gov module account.
     */
    static UpdateParams(request: MsgUpdateParams, initRequest?: fm.InitReq): Promise<MsgUpdateParamsResponse>;
    static MintCoins(request: MsgMintCoins, initRequest?: fm.InitReq): Promise<MsgMintCoinsResponse>;
    static BurnCoins(request: MsgBurnCoins, initRequest?: fm.InitReq): Promise<MsgBurnCoinsResponse>;
    static ForceTransferCoins(request: MsgForceTransferCoins, initRequest?: fm.InitReq): Promise<MsgForceTransferCoinsResponse>;
    static SetDenomMetadata(request: MsgSetDenomMetadata, initRequest?: fm.InitReq): Promise<MsgSetDenomMetadataResponse>;
    static CreateTask(request: MsgCreateTask, initRequest?: fm.InitReq): Promise<MsgCreateTaskResponse>;
    static DeleteTask(request: MsgDeleteTask, initRequest?: fm.InitReq): Promise<MsgDeleteTaskResponse>;
}

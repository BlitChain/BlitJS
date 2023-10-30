import * as fm from "../../../grpc-gateway";
import { MsgCreateDenom, MsgCreateDenomResponse, MsgMint, MsgMintResponse, MsgBurn, MsgBurnResponse, MsgChangeAdmin, MsgChangeAdminResponse, MsgSetDenomMetadata, MsgSetDenomMetadataResponse } from "./tx";
export declare class Msg {
    static CreateDenom(request: MsgCreateDenom, initRequest?: fm.InitReq): Promise<MsgCreateDenomResponse>;
    static Mint(request: MsgMint, initRequest?: fm.InitReq): Promise<MsgMintResponse>;
    static Burn(request: MsgBurn, initRequest?: fm.InitReq): Promise<MsgBurnResponse>;
    static ChangeAdmin(request: MsgChangeAdmin, initRequest?: fm.InitReq): Promise<MsgChangeAdminResponse>;
    static SetDenomMetadata(request: MsgSetDenomMetadata, initRequest?: fm.InitReq): Promise<MsgSetDenomMetadataResponse>;
}

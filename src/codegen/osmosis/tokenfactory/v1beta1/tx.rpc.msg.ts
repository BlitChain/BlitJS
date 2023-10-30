//@ts-nocheck
import * as fm from "../../../grpc-gateway";
import { MsgCreateDenom, MsgCreateDenomResponse, MsgMint, MsgMintResponse, MsgBurn, MsgBurnResponse, MsgChangeAdmin, MsgChangeAdminResponse, MsgSetDenomMetadata, MsgSetDenomMetadataResponse } from "./tx";
export class Msg {
  static CreateDenom(request: MsgCreateDenom, initRequest?: fm.InitReq): Promise<MsgCreateDenomResponse> {
    return fm.fetchReq(`/osmosis.tokenfactory.v1beta1/CreateDenom`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  static Mint(request: MsgMint, initRequest?: fm.InitReq): Promise<MsgMintResponse> {
    return fm.fetchReq(`/osmosis.tokenfactory.v1beta1/Mint`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  static Burn(request: MsgBurn, initRequest?: fm.InitReq): Promise<MsgBurnResponse> {
    return fm.fetchReq(`/osmosis.tokenfactory.v1beta1/Burn`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  static ChangeAdmin(request: MsgChangeAdmin, initRequest?: fm.InitReq): Promise<MsgChangeAdminResponse> {
    return fm.fetchReq(`/osmosis.tokenfactory.v1beta1/ChangeAdmin`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  static SetDenomMetadata(request: MsgSetDenomMetadata, initRequest?: fm.InitReq): Promise<MsgSetDenomMetadataResponse> {
    return fm.fetchReq(`/osmosis.tokenfactory.v1beta1/SetDenomMetadata`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
}
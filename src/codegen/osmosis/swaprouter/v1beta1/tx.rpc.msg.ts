//@ts-nocheck
import * as fm from "../../../grpc-gateway";
import { MsgSwapExactAmountIn, MsgSwapExactAmountInResponse, MsgSwapExactAmountOut, MsgSwapExactAmountOutResponse } from "./tx";
export class Msg {
  static SwapExactAmountIn(request: MsgSwapExactAmountIn, initRequest?: fm.InitReq): Promise<MsgSwapExactAmountInResponse> {
    return fm.fetchReq(`/osmosis.swaprouter.v1beta1/SwapExactAmountIn`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  static SwapExactAmountOut(request: MsgSwapExactAmountOut, initRequest?: fm.InitReq): Promise<MsgSwapExactAmountOutResponse> {
    return fm.fetchReq(`/osmosis.swaprouter.v1beta1/SwapExactAmountOut`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
}
import * as fm from "../../../grpc-gateway";
import { MsgSwapExactAmountIn, MsgSwapExactAmountInResponse, MsgSwapExactAmountOut, MsgSwapExactAmountOutResponse } from "./tx";
export declare class Msg {
    static SwapExactAmountIn(request: MsgSwapExactAmountIn, initRequest?: fm.InitReq): Promise<MsgSwapExactAmountInResponse>;
    static SwapExactAmountOut(request: MsgSwapExactAmountOut, initRequest?: fm.InitReq): Promise<MsgSwapExactAmountOutResponse>;
}

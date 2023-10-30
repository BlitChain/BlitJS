import * as fm from "../../../grpc-gateway";
import { MsgJoinPool, MsgJoinPoolResponse, MsgExitPool, MsgExitPoolResponse, MsgSwapExactAmountIn, MsgSwapExactAmountInResponse, MsgSwapExactAmountOut, MsgSwapExactAmountOutResponse, MsgJoinSwapExternAmountIn, MsgJoinSwapExternAmountInResponse, MsgJoinSwapShareAmountOut, MsgJoinSwapShareAmountOutResponse, MsgExitSwapExternAmountOut, MsgExitSwapExternAmountOutResponse, MsgExitSwapShareAmountIn, MsgExitSwapShareAmountInResponse } from "./tx";
export declare class Msg {
    static JoinPool(request: MsgJoinPool, initRequest?: fm.InitReq): Promise<MsgJoinPoolResponse>;
    static ExitPool(request: MsgExitPool, initRequest?: fm.InitReq): Promise<MsgExitPoolResponse>;
    static SwapExactAmountIn(request: MsgSwapExactAmountIn, initRequest?: fm.InitReq): Promise<MsgSwapExactAmountInResponse>;
    static SwapExactAmountOut(request: MsgSwapExactAmountOut, initRequest?: fm.InitReq): Promise<MsgSwapExactAmountOutResponse>;
    static JoinSwapExternAmountIn(request: MsgJoinSwapExternAmountIn, initRequest?: fm.InitReq): Promise<MsgJoinSwapExternAmountInResponse>;
    static JoinSwapShareAmountOut(request: MsgJoinSwapShareAmountOut, initRequest?: fm.InitReq): Promise<MsgJoinSwapShareAmountOutResponse>;
    static ExitSwapExternAmountOut(request: MsgExitSwapExternAmountOut, initRequest?: fm.InitReq): Promise<MsgExitSwapExternAmountOutResponse>;
    static ExitSwapShareAmountIn(request: MsgExitSwapShareAmountIn, initRequest?: fm.InitReq): Promise<MsgExitSwapShareAmountInResponse>;
}

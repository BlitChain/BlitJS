import * as fm from "../../../../grpc-gateway";
import { MsgCreateStableswapPool, MsgCreateStableswapPoolResponse, MsgStableSwapAdjustScalingFactors, MsgStableSwapAdjustScalingFactorsResponse } from "./tx";
export declare class Msg {
    static CreateStableswapPool(request: MsgCreateStableswapPool, initRequest?: fm.InitReq): Promise<MsgCreateStableswapPoolResponse>;
    static StableSwapAdjustScalingFactors(request: MsgStableSwapAdjustScalingFactors, initRequest?: fm.InitReq): Promise<MsgStableSwapAdjustScalingFactorsResponse>;
}

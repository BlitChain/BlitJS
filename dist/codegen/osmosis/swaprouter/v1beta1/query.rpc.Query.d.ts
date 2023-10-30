import * as fm from "../../../grpc-gateway";
import { ParamsRequest, ParamsResponse, EstimateSwapExactAmountInRequest, EstimateSwapExactAmountInResponse, EstimateSwapExactAmountOutRequest, EstimateSwapExactAmountOutResponse, NumPoolsRequest, NumPoolsResponse } from "./query";
export declare class Query {
    static Params(request: ParamsRequest, initRequest?: fm.InitReq): Promise<ParamsResponse>;
    /** Estimates swap amount out given in. */
    static EstimateSwapExactAmountIn(request: EstimateSwapExactAmountInRequest, initRequest?: fm.InitReq): Promise<EstimateSwapExactAmountInResponse>;
    /** Estimates swap amount in given out. */
    static EstimateSwapExactAmountOut(request: EstimateSwapExactAmountOutRequest, initRequest?: fm.InitReq): Promise<EstimateSwapExactAmountOutResponse>;
    static NumPools(request: NumPoolsRequest, initRequest?: fm.InitReq): Promise<NumPoolsResponse>;
}
export declare class QueryClientImpl {
    private readonly url;
    constructor(url: string);
    Params(req: ParamsRequest, headers?: HeadersInit): Promise<ParamsResponse>;
    /** Estimates swap amount out given in. */
    EstimateSwapExactAmountIn(req: EstimateSwapExactAmountInRequest, headers?: HeadersInit): Promise<EstimateSwapExactAmountInResponse>;
    /** Estimates swap amount in given out. */
    EstimateSwapExactAmountOut(req: EstimateSwapExactAmountOutRequest, headers?: HeadersInit): Promise<EstimateSwapExactAmountOutResponse>;
    NumPools(req: NumPoolsRequest, headers?: HeadersInit): Promise<NumPoolsResponse>;
}

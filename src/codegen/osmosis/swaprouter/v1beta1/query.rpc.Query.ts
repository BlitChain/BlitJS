//@ts-nocheck
import * as fm from "../../../grpc-gateway";
import { ParamsRequest, ParamsResponse, EstimateSwapExactAmountInRequest, EstimateSwapExactAmountInResponse, EstimateSwapExactAmountOutRequest, EstimateSwapExactAmountOutResponse, NumPoolsRequest, NumPoolsResponse } from "./query";
export class Query {
  static Params(request: ParamsRequest, initRequest?: fm.InitReq): Promise<ParamsResponse> {
    return fm.fetchReq(`/osmosis/swaprouter/v1beta1/Params?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Estimates swap amount out given in. */
  static EstimateSwapExactAmountIn(request: EstimateSwapExactAmountInRequest, initRequest?: fm.InitReq): Promise<EstimateSwapExactAmountInResponse> {
    return fm.fetchReq(`/osmosis/gamm/v1beta1/${request["pool_id"]}/estimate/swap_exact_amount_in?${fm.renderURLSearchParams({
      ...request
    }, ["pool_id"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Estimates swap amount in given out. */
  static EstimateSwapExactAmountOut(request: EstimateSwapExactAmountOutRequest, initRequest?: fm.InitReq): Promise<EstimateSwapExactAmountOutResponse> {
    return fm.fetchReq(`/osmosis/gamm/v1beta1/${request["pool_id"]}/estimate/swap_exact_amount_out?${fm.renderURLSearchParams({
      ...request
    }, ["pool_id"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  static NumPools(request: NumPoolsRequest, initRequest?: fm.InitReq): Promise<NumPoolsResponse> {
    return fm.fetchReq(`/osmosis/swaprouter/v1beta1/num_pools?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
}
export class QueryClientImpl {
  private readonly url: string;
  constructor(url: string) {
    this.url = url;
  }
  async Params(req: ParamsRequest, headers?: HeadersInit): Promise<ParamsResponse> {
    return Query.Params(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** Estimates swap amount out given in. */
  async EstimateSwapExactAmountIn(req: EstimateSwapExactAmountInRequest, headers?: HeadersInit): Promise<EstimateSwapExactAmountInResponse> {
    return Query.EstimateSwapExactAmountIn(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** Estimates swap amount in given out. */
  async EstimateSwapExactAmountOut(req: EstimateSwapExactAmountOutRequest, headers?: HeadersInit): Promise<EstimateSwapExactAmountOutResponse> {
    return Query.EstimateSwapExactAmountOut(req, {
      headers,
      pathPrefix: this.url
    });
  }
  async NumPools(req: NumPoolsRequest, headers?: HeadersInit): Promise<NumPoolsResponse> {
    return Query.NumPools(req, {
      headers,
      pathPrefix: this.url
    });
  }
}
//@ts-nocheck
import * as fm from "../../../grpc-gateway";
import { QueryParamsRequest, QueryParamsResponse } from "./query";
export class Query {
  /**
   * Params defines a gRPC query method that returns the ibc-rate-limit module's
   * parameters.
   */
  static Params(request: QueryParamsRequest, initRequest?: fm.InitReq): Promise<QueryParamsResponse> {
    return fm.fetchReq(`/osmosis/ibc-rate-limit/v1beta1/params?${fm.renderURLSearchParams({
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
  /**
   * Params defines a gRPC query method that returns the ibc-rate-limit module's
   * parameters.
   */
  async Params(req: QueryParamsRequest, headers?: HeadersInit): Promise<QueryParamsResponse> {
    return Query.Params(req, {
      headers,
      pathPrefix: this.url
    });
  }
}
//@ts-nocheck
import * as fm from "../../../grpc-gateway";
import { QueryParamsRequest, QueryParamsResponse } from "./query";
export class Query {
  /** Params queries the parameters of x/consensus_param module. */
  static Params(request: QueryParamsRequest, initRequest?: fm.InitReq): Promise<QueryParamsResponse> {
    return fm.fetchReq(`/cosmos/consensus/v1/params?${fm.renderURLSearchParams({
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
  /** Params queries the parameters of x/consensus_param module. */
  async Params(req: QueryParamsRequest, headers?: HeadersInit): Promise<QueryParamsResponse> {
    return Query.Params(req, {
      headers,
      pathPrefix: this.url
    });
  }
}
//@ts-nocheck
import * as fm from "../../grpc-gateway";
import { EndpointsRequest, EndpointsResponse } from "./query";
export class Query {
  /** Parameters queries the parameters of the module. */
  static Params(request: QueryParamsRequest, initRequest?: fm.InitReq): Promise<QueryParamsResponse> {
    return fm.fetchReq(`/blit/blit/params?${fm.renderURLSearchParams({
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
  /** Parameters queries the parameters of the module. */
  async Params(req: QueryParamsRequest, headers?: HeadersInit): Promise<QueryParamsResponse> {
    return Query.Params(req, {
      headers,
      pathPrefix: this.url
    });
  }
}
export class Service {
  /** Config queries for the operator configuration. */
  static Endpoints(request?: EndpointsRequest, initRequest?: fm.InitReq): Promise<EndpointsResponse> {
    return fm.fetchReq(`/blit/blit/Endpoints`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
}
export class ServiceClientImpl {
  private readonly url: string;
  constructor(url: string) {
    this.url = url;
  }
  /** Config queries for the operator configuration. */
  async Endpoints(req: EndpointsRequest, headers?: HeadersInit): Promise<EndpointsResponse> {
    return Service.Endpoints(req, {
      headers,
      pathPrefix: this.url
    });
  }
}
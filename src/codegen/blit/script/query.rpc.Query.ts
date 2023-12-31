//@ts-nocheck
import * as fm from "../../grpc-gateway";
import { QueryParamsRequest, QueryParamsResponse, QueryScriptRequest, QueryScriptResponse, QueryScriptsRequest, QueryScriptsResponse, QueryEvalRequest, QueryEvalResponse, QueryWebRequest, QueryWebResponse } from "./query";
export class Query {
  /** Parameters queries the parameters of the module. */
  static Params(request: QueryParamsRequest, initRequest?: fm.InitReq): Promise<QueryParamsResponse> {
    return fm.fetchReq(`/blit/script/params?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Queries a specific Script item. */
  static Script(request: QueryScriptRequest, initRequest?: fm.InitReq): Promise<QueryScriptResponse> {
    return fm.fetchReq(`/blit/script/script/${request["address"]}?${fm.renderURLSearchParams({
      ...request
    }, ["address"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Queries a list of Script items. */
  static Scripts(request: QueryScriptsRequest, initRequest?: fm.InitReq): Promise<QueryScriptsResponse> {
    return fm.fetchReq(`/blit/script/scripts?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Runs the function and returns the result. */
  static Eval(request: QueryEvalRequest, initRequest?: fm.InitReq): Promise<QueryEvalResponse> {
    return fm.fetchReq(`/blit/script/eval/${request["script_address"]}?${fm.renderURLSearchParams({
      ...request
    }, ["script_address"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Queries the WSGI web application function of a script. */
  static Web(request: QueryWebRequest, initRequest?: fm.InitReq): Promise<QueryWebResponse> {
    return fm.fetchReq(`/blit/script/web/${request["address"]}?${fm.renderURLSearchParams({
      ...request
    }, ["address"])}`, {
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
  /** Queries a specific Script item. */
  async Script(req: QueryScriptRequest, headers?: HeadersInit): Promise<QueryScriptResponse> {
    return Query.Script(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** Queries a list of Script items. */
  async Scripts(req: QueryScriptsRequest, headers?: HeadersInit): Promise<QueryScriptsResponse> {
    return Query.Scripts(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** Runs the function and returns the result. */
  async Eval(req: QueryEvalRequest, headers?: HeadersInit): Promise<QueryEvalResponse> {
    return Query.Eval(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** Queries the WSGI web application function of a script. */
  async Web(req: QueryWebRequest, headers?: HeadersInit): Promise<QueryWebResponse> {
    return Query.Web(req, {
      headers,
      pathPrefix: this.url
    });
  }
}
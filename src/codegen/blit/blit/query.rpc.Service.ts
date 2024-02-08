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
  /** Queries a list of Task items. */
  static Task(request: QueryGetTaskRequest, initRequest?: fm.InitReq): Promise<QueryGetTaskResponse> {
    return fm.fetchReq(`/blit/blit/task?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  static TaskAll(request: QueryAllTaskRequest, initRequest?: fm.InitReq): Promise<QueryAllTaskResponse> {
    return fm.fetchReq(`/blit/blit/all-tasks?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Queries a list of FutureTask items. */
  static FutureTask(request: QueryGetFutureTaskRequest, initRequest?: fm.InitReq): Promise<QueryGetFutureTaskResponse> {
    return fm.fetchReq(`/blit/blit/future-task?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  static FutureTaskAll(request: QueryAllFutureTaskRequest, initRequest?: fm.InitReq): Promise<QueryAllFutureTaskResponse> {
    return fm.fetchReq(`/blit/blit/all-future-tasks?${fm.renderURLSearchParams({
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
  /** Queries a list of Task items. */
  async Task(req: QueryGetTaskRequest, headers?: HeadersInit): Promise<QueryGetTaskResponse> {
    return Query.Task(req, {
      headers,
      pathPrefix: this.url
    });
  }
  async TaskAll(req: QueryAllTaskRequest, headers?: HeadersInit): Promise<QueryAllTaskResponse> {
    return Query.TaskAll(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** Queries a list of FutureTask items. */
  async FutureTask(req: QueryGetFutureTaskRequest, headers?: HeadersInit): Promise<QueryGetFutureTaskResponse> {
    return Query.FutureTask(req, {
      headers,
      pathPrefix: this.url
    });
  }
  async FutureTaskAll(req: QueryAllFutureTaskRequest, headers?: HeadersInit): Promise<QueryAllFutureTaskResponse> {
    return Query.FutureTaskAll(req, {
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
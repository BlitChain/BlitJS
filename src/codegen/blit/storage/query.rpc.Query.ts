//@ts-nocheck
import * as fm from "../../grpc-gateway";
import { QueryParamsRequest, QueryParamsResponse, QueryGetStorageRequest, QueryGetStorageResponse, QueryAllStorageRequest, QueryAllStorageResponse } from "./query";
export class Query {
  /** Parameters queries the parameters of the module. */
  static Params(request: QueryParamsRequest, initRequest?: fm.InitReq): Promise<QueryParamsResponse> {
    return fm.fetchReq(`/blit/storage/params?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Queries a list of Storage items. */
  static Storage(request: QueryGetStorageRequest, initRequest?: fm.InitReq): Promise<QueryGetStorageResponse> {
    return fm.fetchReq(`/blit/storage/storage/${request["address"]}/${request["index"]}?${fm.renderURLSearchParams({
      ...request
    }, ["address", "index"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  static StorageAll(request: QueryAllStorageRequest, initRequest?: fm.InitReq): Promise<QueryAllStorageResponse> {
    return fm.fetchReq(`/blit/storage/storage?${fm.renderURLSearchParams({
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
  /** Queries a list of Storage items. */
  async Storage(req: QueryGetStorageRequest, headers?: HeadersInit): Promise<QueryGetStorageResponse> {
    return Query.Storage(req, {
      headers,
      pathPrefix: this.url
    });
  }
  async StorageAll(req: QueryAllStorageRequest, headers?: HeadersInit): Promise<QueryAllStorageResponse> {
    return Query.StorageAll(req, {
      headers,
      pathPrefix: this.url
    });
  }
}
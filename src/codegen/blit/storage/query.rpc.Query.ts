//@ts-nocheck
import * as fm from "../../grpc-gateway";
import { QueryParamsRequest, QueryParamsResponse, QueryStorageDetailRequest, QueryStorageDetailResponse, QueryFilterStorageRequest, QueryFilterStorageResponse } from "./query";
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
  /** Get a specific Storage by addres and index */
  static StorageDetail(request: QueryStorageDetailRequest, initRequest?: fm.InitReq): Promise<QueryStorageDetailResponse> {
    return fm.fetchReq(`/blit/storage/storage?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Filters by address and index prefix. */
  static FilterStorage(request: QueryFilterStorageRequest, initRequest?: fm.InitReq): Promise<QueryFilterStorageResponse> {
    return fm.fetchReq(`/blit/storage/filter?${fm.renderURLSearchParams({
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
  /** Get a specific Storage by addres and index */
  async StorageDetail(req: QueryStorageDetailRequest, headers?: HeadersInit): Promise<QueryStorageDetailResponse> {
    return Query.StorageDetail(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** Filters by address and index prefix. */
  async FilterStorage(req: QueryFilterStorageRequest, headers?: HeadersInit): Promise<QueryFilterStorageResponse> {
    return Query.FilterStorage(req, {
      headers,
      pathPrefix: this.url
    });
  }
}
//@ts-nocheck
import * as fm from "../../../../grpc-gateway";
import { GetRequest, GetResponse, ListRequest, ListResponse } from "./query";
export class Query {
  /** Get queries an ORM table against an unique index. */
  static Get(request: GetRequest, initRequest?: fm.InitReq): Promise<GetResponse> {
    return fm.fetchReq(`cosmos.orm.query.v1alpha1.Get?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** List queries an ORM table against an index. */
  static List(request: ListRequest, initRequest?: fm.InitReq): Promise<ListResponse> {
    return fm.fetchReq(`cosmos.orm.query.v1alpha1.List?${fm.renderURLSearchParams({
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
  /** Get queries an ORM table against an unique index. */
  async Get(req: GetRequest, headers?: HeadersInit): Promise<GetResponse> {
    return Query.Get(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** List queries an ORM table against an index. */
  async List(req: ListRequest, headers?: HeadersInit): Promise<ListResponse> {
    return Query.List(req, {
      headers,
      pathPrefix: this.url
    });
  }
}
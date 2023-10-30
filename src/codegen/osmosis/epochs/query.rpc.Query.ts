//@ts-nocheck
import * as fm from "../../grpc-gateway";
import { QueryEpochsInfoRequest, QueryEpochsInfoResponse, QueryCurrentEpochRequest, QueryCurrentEpochResponse } from "./query";
export class Query {
  /** EpochInfos provide running epochInfos */
  static EpochInfos(request: QueryEpochsInfoRequest, initRequest?: fm.InitReq): Promise<QueryEpochsInfoResponse> {
    return fm.fetchReq(`/osmosis/epochs/v1beta1/epochs?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** CurrentEpoch provide current epoch of specified identifier */
  static CurrentEpoch(request: QueryCurrentEpochRequest, initRequest?: fm.InitReq): Promise<QueryCurrentEpochResponse> {
    return fm.fetchReq(`/osmosis/epochs/v1beta1/current_epoch?${fm.renderURLSearchParams({
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
  /** EpochInfos provide running epochInfos */
  async EpochInfos(req: QueryEpochsInfoRequest, headers?: HeadersInit): Promise<QueryEpochsInfoResponse> {
    return Query.EpochInfos(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** CurrentEpoch provide current epoch of specified identifier */
  async CurrentEpoch(req: QueryCurrentEpochRequest, headers?: HeadersInit): Promise<QueryCurrentEpochResponse> {
    return Query.CurrentEpoch(req, {
      headers,
      pathPrefix: this.url
    });
  }
}
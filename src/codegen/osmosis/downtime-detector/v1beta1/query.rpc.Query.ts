//@ts-nocheck
import * as fm from "../../../grpc-gateway";
import { RecoveredSinceDowntimeOfLengthRequest, RecoveredSinceDowntimeOfLengthResponse } from "./query";
export class Query {
  static RecoveredSinceDowntimeOfLength(request: RecoveredSinceDowntimeOfLengthRequest, initRequest?: fm.InitReq): Promise<RecoveredSinceDowntimeOfLengthResponse> {
    return fm.fetchReq(`/osmosis/downtime-detector/v1beta1/RecoveredSinceDowntimeOfLength?${fm.renderURLSearchParams({
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
  async RecoveredSinceDowntimeOfLength(req: RecoveredSinceDowntimeOfLengthRequest, headers?: HeadersInit): Promise<RecoveredSinceDowntimeOfLengthResponse> {
    return Query.RecoveredSinceDowntimeOfLength(req, {
      headers,
      pathPrefix: this.url
    });
  }
}
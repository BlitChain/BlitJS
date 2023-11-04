//@ts-nocheck
import * as fm from "../../../../grpc-gateway";
import { ConfigRequest, ConfigResponse } from "./query";
export class Service {
  /** Config queries for the operator configuration. */
  static Config(request?: ConfigRequest, initRequest?: fm.InitReq): Promise<ConfigResponse> {
    return fm.fetchReq(`/cosmos/base/node/v1beta1/Config`, {
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
  async Config(req: ConfigRequest, headers?: HeadersInit): Promise<ConfigResponse> {
    return Service.Config(req, {
      headers,
      pathPrefix: this.url
    });
  }
}
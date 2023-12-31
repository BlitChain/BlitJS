//@ts-nocheck
import * as fm from "../../../../grpc-gateway";
import { ConfigRequest, ConfigResponse, StatusRequest, StatusResponse } from "./query";
export class Service {
  /** Config queries for the operator configuration. */
  static Config(request?: ConfigRequest, initRequest?: fm.InitReq): Promise<ConfigResponse> {
    return fm.fetchReq(`/cosmos/base/node/v1beta1/Config`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /** Status queries for the node status. */
  static Status(request?: StatusRequest, initRequest?: fm.InitReq): Promise<StatusResponse> {
    return fm.fetchReq(`/cosmos/base/node/v1beta1/Status`, {
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
  /** Status queries for the node status. */
  async Status(req: StatusRequest, headers?: HeadersInit): Promise<StatusResponse> {
    return Service.Status(req, {
      headers,
      pathPrefix: this.url
    });
  }
}
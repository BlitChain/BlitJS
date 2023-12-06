import * as fm from "../../../../grpc-gateway";
import { ConfigRequest, ConfigResponse, StatusRequest, StatusResponse } from "./query";
export declare class Service {
    /** Config queries for the operator configuration. */
    static Config(request?: ConfigRequest, initRequest?: fm.InitReq): Promise<ConfigResponse>;
    /** Status queries for the node status. */
    static Status(request?: StatusRequest, initRequest?: fm.InitReq): Promise<StatusResponse>;
}
export declare class ServiceClientImpl {
    private readonly url;
    constructor(url: string);
    /** Config queries for the operator configuration. */
    Config(req: ConfigRequest, headers?: HeadersInit): Promise<ConfigResponse>;
    /** Status queries for the node status. */
    Status(req: StatusRequest, headers?: HeadersInit): Promise<StatusResponse>;
}

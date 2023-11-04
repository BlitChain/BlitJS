import * as fm from "../../../../grpc-gateway";
import { ConfigRequest, ConfigResponse } from "./query";
export declare class Service {
    /** Config queries for the operator configuration. */
    static Config(request?: ConfigRequest, initRequest?: fm.InitReq): Promise<ConfigResponse>;
}
export declare class ServiceClientImpl {
    private readonly url;
    constructor(url: string);
    /** Config queries for the operator configuration. */
    Config(req: ConfigRequest, headers?: HeadersInit): Promise<ConfigResponse>;
}

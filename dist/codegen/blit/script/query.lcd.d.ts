import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryScriptRequest, QueryScriptResponseSDKType, QueryScriptsRequest, QueryScriptsResponseSDKType, QueryEvalRequest, QueryEvalResponseSDKType, QueryWebRequest, QueryWebResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    script(params: QueryScriptRequest): Promise<QueryScriptResponseSDKType>;
    scripts(params?: QueryScriptsRequest): Promise<QueryScriptsResponseSDKType>;
    eval(params: QueryEvalRequest): Promise<QueryEvalResponseSDKType>;
    web(params: QueryWebRequest): Promise<QueryWebResponseSDKType>;
}

import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryGetScriptRequest, QueryGetScriptResponseSDKType, QueryAllScriptRequest, QueryAllScriptResponseSDKType, QueryEvalRequest, QueryEvalResponseSDKType, QueryWebRequest, QueryWebResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    script(params: QueryGetScriptRequest): Promise<QueryGetScriptResponseSDKType>;
    scriptAll(params?: QueryAllScriptRequest): Promise<QueryAllScriptResponseSDKType>;
    eval(params: QueryEvalRequest): Promise<QueryEvalResponseSDKType>;
    web(params: QueryWebRequest): Promise<QueryWebResponseSDKType>;
}

import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryGetScriptRequest, QueryGetScriptResponseSDKType, QueryAllScriptRequest, QueryAllScriptResponseSDKType, QueryWebRequest, QueryWebResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    script(params: QueryGetScriptRequest): Promise<QueryGetScriptResponseSDKType>;
    scriptAll(params?: QueryAllScriptRequest): Promise<QueryAllScriptResponseSDKType>;
    web(params: QueryWebRequest): Promise<QueryWebResponseSDKType>;
}

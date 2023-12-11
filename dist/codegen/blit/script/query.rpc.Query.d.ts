import * as fm from "../../grpc-gateway";
import { QueryParamsRequest, QueryParamsResponse, QueryScriptRequest, QueryScriptResponse, QueryScriptsRequest, QueryScriptsResponse, QueryEvalRequest, QueryEvalResponse, QueryWebRequest, QueryWebResponse } from "./query";
export declare class Query {
    /** Parameters queries the parameters of the module. */
    static Params(request: QueryParamsRequest, initRequest?: fm.InitReq): Promise<QueryParamsResponse>;
    /** Queries a specific Script item. */
    static Script(request: QueryScriptRequest, initRequest?: fm.InitReq): Promise<QueryScriptResponse>;
    /** Queries a list of Script items. */
    static Scripts(request: QueryScriptsRequest, initRequest?: fm.InitReq): Promise<QueryScriptsResponse>;
    /** Runs the function and returns the result. */
    static Eval(request: QueryEvalRequest, initRequest?: fm.InitReq): Promise<QueryEvalResponse>;
    /** Queries the WSGI web application function of a script. */
    static Web(request: QueryWebRequest, initRequest?: fm.InitReq): Promise<QueryWebResponse>;
}
export declare class QueryClientImpl {
    private readonly url;
    constructor(url: string);
    /** Parameters queries the parameters of the module. */
    Params(req: QueryParamsRequest, headers?: HeadersInit): Promise<QueryParamsResponse>;
    /** Queries a specific Script item. */
    Script(req: QueryScriptRequest, headers?: HeadersInit): Promise<QueryScriptResponse>;
    /** Queries a list of Script items. */
    Scripts(req: QueryScriptsRequest, headers?: HeadersInit): Promise<QueryScriptsResponse>;
    /** Runs the function and returns the result. */
    Eval(req: QueryEvalRequest, headers?: HeadersInit): Promise<QueryEvalResponse>;
    /** Queries the WSGI web application function of a script. */
    Web(req: QueryWebRequest, headers?: HeadersInit): Promise<QueryWebResponse>;
}

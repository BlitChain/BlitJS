import * as fm from "../../grpc-gateway";
import { QueryParamsRequest, QueryParamsResponse, QueryGetScriptRequest, QueryGetScriptResponse, QueryAllScriptRequest, QueryAllScriptResponse, QueryWebRequest, QueryWebResponse } from "./query";
import { MsgRun, MsgRunResponse } from "./msgrun";
export declare class Query {
    /** Parameters queries the parameters of the module. */
    static Params(request: QueryParamsRequest, initRequest?: fm.InitReq): Promise<QueryParamsResponse>;
    /** Queries a list of Script items. */
    static Script(request: QueryGetScriptRequest, initRequest?: fm.InitReq): Promise<QueryGetScriptResponse>;
    static ScriptAll(request: QueryAllScriptRequest, initRequest?: fm.InitReq): Promise<QueryAllScriptResponse>;
    /** Runs the function and returns the result. */
    static Eval(request: MsgRun, initRequest?: fm.InitReq): Promise<MsgRunResponse>;
    /** Queries the WSGI web application function of a script. */
    static Web(request: QueryWebRequest, initRequest?: fm.InitReq): Promise<QueryWebResponse>;
}
export declare class QueryClientImpl {
    private readonly url;
    constructor(url: string);
    /** Parameters queries the parameters of the module. */
    Params(req: QueryParamsRequest, headers?: HeadersInit): Promise<QueryParamsResponse>;
    /** Queries a list of Script items. */
    Script(req: QueryGetScriptRequest, headers?: HeadersInit): Promise<QueryGetScriptResponse>;
    ScriptAll(req: QueryAllScriptRequest, headers?: HeadersInit): Promise<QueryAllScriptResponse>;
    /** Runs the function and returns the result. */
    Eval(req: MsgRun, headers?: HeadersInit): Promise<MsgRunResponse>;
    /** Queries the WSGI web application function of a script. */
    Web(req: QueryWebRequest, headers?: HeadersInit): Promise<QueryWebResponse>;
}

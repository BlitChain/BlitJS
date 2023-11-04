import * as fm from "../../../../grpc-gateway";
import { GetRequest, GetResponse, ListRequest, ListResponse } from "./query";
export declare class Query {
    /** Get queries an ORM table against an unique index. */
    static Get(request: GetRequest, initRequest?: fm.InitReq): Promise<GetResponse>;
    /** List queries an ORM table against an index. */
    static List(request: ListRequest, initRequest?: fm.InitReq): Promise<ListResponse>;
}
export declare class QueryClientImpl {
    private readonly url;
    constructor(url: string);
    /** Get queries an ORM table against an unique index. */
    Get(req: GetRequest, headers?: HeadersInit): Promise<GetResponse>;
    /** List queries an ORM table against an index. */
    List(req: ListRequest, headers?: HeadersInit): Promise<ListResponse>;
}

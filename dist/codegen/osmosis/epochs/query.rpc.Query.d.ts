import * as fm from "../../grpc-gateway";
import { QueryEpochsInfoRequest, QueryEpochsInfoResponse, QueryCurrentEpochRequest, QueryCurrentEpochResponse } from "./query";
export declare class Query {
    /** EpochInfos provide running epochInfos */
    static EpochInfos(request: QueryEpochsInfoRequest, initRequest?: fm.InitReq): Promise<QueryEpochsInfoResponse>;
    /** CurrentEpoch provide current epoch of specified identifier */
    static CurrentEpoch(request: QueryCurrentEpochRequest, initRequest?: fm.InitReq): Promise<QueryCurrentEpochResponse>;
}
export declare class QueryClientImpl {
    private readonly url;
    constructor(url: string);
    /** EpochInfos provide running epochInfos */
    EpochInfos(req: QueryEpochsInfoRequest, headers?: HeadersInit): Promise<QueryEpochsInfoResponse>;
    /** CurrentEpoch provide current epoch of specified identifier */
    CurrentEpoch(req: QueryCurrentEpochRequest, headers?: HeadersInit): Promise<QueryCurrentEpochResponse>;
}

import * as fm from "../../../grpc-gateway";
import { QueryParamsRequest, QueryParamsResponse, QueryGetProtoRevNumberOfTradesRequest, QueryGetProtoRevNumberOfTradesResponse, QueryGetProtoRevProfitsByDenomRequest, QueryGetProtoRevProfitsByDenomResponse, QueryGetProtoRevAllProfitsRequest, QueryGetProtoRevAllProfitsResponse, QueryGetProtoRevStatisticsByPoolRequest, QueryGetProtoRevStatisticsByPoolResponse, QueryGetProtoRevAllStatisticsRequest, QueryGetProtoRevAllStatisticsResponse, QueryGetProtoRevTokenPairArbRoutesRequest, QueryGetProtoRevTokenPairArbRoutesResponse } from "./query";
export declare class Query {
    /** Params queries the parameters of the module. */
    static Params(request: QueryParamsRequest, initRequest?: fm.InitReq): Promise<QueryParamsResponse>;
    /**
     * GetProtoRevNumberOfTrades queries the number of arbitrage trades the module
     * has executed
     */
    static GetProtoRevNumberOfTrades(request: QueryGetProtoRevNumberOfTradesRequest, initRequest?: fm.InitReq): Promise<QueryGetProtoRevNumberOfTradesResponse>;
    /** GetProtoRevProfitsByDenom queries the profits of the module by denom */
    static GetProtoRevProfitsByDenom(request: QueryGetProtoRevProfitsByDenomRequest, initRequest?: fm.InitReq): Promise<QueryGetProtoRevProfitsByDenomResponse>;
    /** GetProtoRevAllProfits queries all of the profits from the module */
    static GetProtoRevAllProfits(request: QueryGetProtoRevAllProfitsRequest, initRequest?: fm.InitReq): Promise<QueryGetProtoRevAllProfitsResponse>;
    /**
     * GetProtoRevStatisticsByPool queries the number of arbitrages and profits
     * that have been executed for a given pool
     */
    static GetProtoRevStatisticsByPool(request: QueryGetProtoRevStatisticsByPoolRequest, initRequest?: fm.InitReq): Promise<QueryGetProtoRevStatisticsByPoolResponse>;
    /**
     * GetProtoRevAllStatistics queries all of pools that the module has arbitrage
     * against and the number of trades and profits that have been executed for
     * each pool
     */
    static GetProtoRevAllStatistics(request: QueryGetProtoRevAllStatisticsRequest, initRequest?: fm.InitReq): Promise<QueryGetProtoRevAllStatisticsResponse>;
    /**
     * GetProtoRevTokenPairArbRoutes queries all of the hot routes that the module
     * is currently arbitraging
     */
    static GetProtoRevTokenPairArbRoutes(request: QueryGetProtoRevTokenPairArbRoutesRequest, initRequest?: fm.InitReq): Promise<QueryGetProtoRevTokenPairArbRoutesResponse>;
}
export declare class QueryClientImpl {
    private readonly url;
    constructor(url: string);
    /** Params queries the parameters of the module. */
    Params(req: QueryParamsRequest, headers?: HeadersInit): Promise<QueryParamsResponse>;
    /**
     * GetProtoRevNumberOfTrades queries the number of arbitrage trades the module
     * has executed
     */
    GetProtoRevNumberOfTrades(req: QueryGetProtoRevNumberOfTradesRequest, headers?: HeadersInit): Promise<QueryGetProtoRevNumberOfTradesResponse>;
    /** GetProtoRevProfitsByDenom queries the profits of the module by denom */
    GetProtoRevProfitsByDenom(req: QueryGetProtoRevProfitsByDenomRequest, headers?: HeadersInit): Promise<QueryGetProtoRevProfitsByDenomResponse>;
    /** GetProtoRevAllProfits queries all of the profits from the module */
    GetProtoRevAllProfits(req: QueryGetProtoRevAllProfitsRequest, headers?: HeadersInit): Promise<QueryGetProtoRevAllProfitsResponse>;
    /**
     * GetProtoRevStatisticsByPool queries the number of arbitrages and profits
     * that have been executed for a given pool
     */
    GetProtoRevStatisticsByPool(req: QueryGetProtoRevStatisticsByPoolRequest, headers?: HeadersInit): Promise<QueryGetProtoRevStatisticsByPoolResponse>;
    /**
     * GetProtoRevAllStatistics queries all of pools that the module has arbitrage
     * against and the number of trades and profits that have been executed for
     * each pool
     */
    GetProtoRevAllStatistics(req: QueryGetProtoRevAllStatisticsRequest, headers?: HeadersInit): Promise<QueryGetProtoRevAllStatisticsResponse>;
    /**
     * GetProtoRevTokenPairArbRoutes queries all of the hot routes that the module
     * is currently arbitraging
     */
    GetProtoRevTokenPairArbRoutes(req: QueryGetProtoRevTokenPairArbRoutesRequest, headers?: HeadersInit): Promise<QueryGetProtoRevTokenPairArbRoutesResponse>;
}

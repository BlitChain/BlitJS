import * as fm from "../../../grpc-gateway";
import { QueryGaugeIdsRequest, QueryGaugeIdsResponse, QueryDistrInfoRequest, QueryDistrInfoResponse, QueryParamsRequest, QueryParamsResponse, QueryLockableDurationsRequest, QueryLockableDurationsResponse, QueryIncentivizedPoolsRequest, QueryIncentivizedPoolsResponse, QueryExternalIncentiveGaugesRequest, QueryExternalIncentiveGaugesResponse } from "./query";
export declare class Query {
    /** GaugeIds takes the pool id and returns the matching gauge ids and durations */
    static GaugeIds(request: QueryGaugeIdsRequest, initRequest?: fm.InitReq): Promise<QueryGaugeIdsResponse>;
    /** DistrInfo returns the pool's matching gauge ids and weights. */
    static DistrInfo(request: QueryDistrInfoRequest, initRequest?: fm.InitReq): Promise<QueryDistrInfoResponse>;
    /** Params returns pool incentives params. */
    static Params(request: QueryParamsRequest, initRequest?: fm.InitReq): Promise<QueryParamsResponse>;
    /** LockableDurations returns lock durations for pools. */
    static LockableDurations(request: QueryLockableDurationsRequest, initRequest?: fm.InitReq): Promise<QueryLockableDurationsResponse>;
    /** IncentivizedPools returns currently incentivized pools */
    static IncentivizedPools(request: QueryIncentivizedPoolsRequest, initRequest?: fm.InitReq): Promise<QueryIncentivizedPoolsResponse>;
    /** ExternalIncentiveGauges returns external incentive gauges. */
    static ExternalIncentiveGauges(request: QueryExternalIncentiveGaugesRequest, initRequest?: fm.InitReq): Promise<QueryExternalIncentiveGaugesResponse>;
}
export declare class QueryClientImpl {
    private readonly url;
    constructor(url: string);
    /** GaugeIds takes the pool id and returns the matching gauge ids and durations */
    GaugeIds(req: QueryGaugeIdsRequest, headers?: HeadersInit): Promise<QueryGaugeIdsResponse>;
    /** DistrInfo returns the pool's matching gauge ids and weights. */
    DistrInfo(req: QueryDistrInfoRequest, headers?: HeadersInit): Promise<QueryDistrInfoResponse>;
    /** Params returns pool incentives params. */
    Params(req: QueryParamsRequest, headers?: HeadersInit): Promise<QueryParamsResponse>;
    /** LockableDurations returns lock durations for pools. */
    LockableDurations(req: QueryLockableDurationsRequest, headers?: HeadersInit): Promise<QueryLockableDurationsResponse>;
    /** IncentivizedPools returns currently incentivized pools */
    IncentivizedPools(req: QueryIncentivizedPoolsRequest, headers?: HeadersInit): Promise<QueryIncentivizedPoolsResponse>;
    /** ExternalIncentiveGauges returns external incentive gauges. */
    ExternalIncentiveGauges(req: QueryExternalIncentiveGaugesRequest, headers?: HeadersInit): Promise<QueryExternalIncentiveGaugesResponse>;
}

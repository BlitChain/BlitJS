import * as fm from "../../grpc-gateway";
import { ModuleToDistributeCoinsRequest, ModuleToDistributeCoinsResponse, GaugeByIDRequest, GaugeByIDResponse, GaugesRequest, GaugesResponse, ActiveGaugesRequest, ActiveGaugesResponse, ActiveGaugesPerDenomRequest, ActiveGaugesPerDenomResponse, UpcomingGaugesRequest, UpcomingGaugesResponse, UpcomingGaugesPerDenomRequest, UpcomingGaugesPerDenomResponse, RewardsEstRequest, RewardsEstResponse, QueryLockableDurationsRequest, QueryLockableDurationsResponse } from "./query";
export declare class Query {
    /** ModuleToDistributeCoins returns coins that are going to be distributed */
    static ModuleToDistributeCoins(request: ModuleToDistributeCoinsRequest, initRequest?: fm.InitReq): Promise<ModuleToDistributeCoinsResponse>;
    /** GaugeByID returns gauges by their respective ID */
    static GaugeByID(request: GaugeByIDRequest, initRequest?: fm.InitReq): Promise<GaugeByIDResponse>;
    /** Gauges returns both upcoming and active gauges */
    static Gauges(request: GaugesRequest, initRequest?: fm.InitReq): Promise<GaugesResponse>;
    /** ActiveGauges returns active gauges */
    static ActiveGauges(request: ActiveGaugesRequest, initRequest?: fm.InitReq): Promise<ActiveGaugesResponse>;
    /** ActiveGaugesPerDenom returns active gauges by denom */
    static ActiveGaugesPerDenom(request: ActiveGaugesPerDenomRequest, initRequest?: fm.InitReq): Promise<ActiveGaugesPerDenomResponse>;
    /** Returns scheduled gauges that have not yet occured */
    static UpcomingGauges(request: UpcomingGaugesRequest, initRequest?: fm.InitReq): Promise<UpcomingGaugesResponse>;
    /**
     * UpcomingGaugesPerDenom returns scheduled gauges that have not yet occured
     * by denom
     */
    static UpcomingGaugesPerDenom(request: UpcomingGaugesPerDenomRequest, initRequest?: fm.InitReq): Promise<UpcomingGaugesPerDenomResponse>;
    /**
     * RewardsEst returns an estimate of the rewards from now until a specified
     * time in the future The querier either provides an address or a set of locks
     * for which they want to find the associated rewards
     */
    static RewardsEst(request: RewardsEstRequest, initRequest?: fm.InitReq): Promise<RewardsEstResponse>;
    /**
     * LockableDurations returns lockable durations that are valid to distribute
     * incentives for
     */
    static LockableDurations(request: QueryLockableDurationsRequest, initRequest?: fm.InitReq): Promise<QueryLockableDurationsResponse>;
}
export declare class QueryClientImpl {
    private readonly url;
    constructor(url: string);
    /** ModuleToDistributeCoins returns coins that are going to be distributed */
    ModuleToDistributeCoins(req: ModuleToDistributeCoinsRequest, headers?: HeadersInit): Promise<ModuleToDistributeCoinsResponse>;
    /** GaugeByID returns gauges by their respective ID */
    GaugeByID(req: GaugeByIDRequest, headers?: HeadersInit): Promise<GaugeByIDResponse>;
    /** Gauges returns both upcoming and active gauges */
    Gauges(req: GaugesRequest, headers?: HeadersInit): Promise<GaugesResponse>;
    /** ActiveGauges returns active gauges */
    ActiveGauges(req: ActiveGaugesRequest, headers?: HeadersInit): Promise<ActiveGaugesResponse>;
    /** ActiveGaugesPerDenom returns active gauges by denom */
    ActiveGaugesPerDenom(req: ActiveGaugesPerDenomRequest, headers?: HeadersInit): Promise<ActiveGaugesPerDenomResponse>;
    /** Returns scheduled gauges that have not yet occured */
    UpcomingGauges(req: UpcomingGaugesRequest, headers?: HeadersInit): Promise<UpcomingGaugesResponse>;
    /**
     * UpcomingGaugesPerDenom returns scheduled gauges that have not yet occured
     * by denom
     */
    UpcomingGaugesPerDenom(req: UpcomingGaugesPerDenomRequest, headers?: HeadersInit): Promise<UpcomingGaugesPerDenomResponse>;
    /**
     * RewardsEst returns an estimate of the rewards from now until a specified
     * time in the future The querier either provides an address or a set of locks
     * for which they want to find the associated rewards
     */
    RewardsEst(req: RewardsEstRequest, headers?: HeadersInit): Promise<RewardsEstResponse>;
    /**
     * LockableDurations returns lockable durations that are valid to distribute
     * incentives for
     */
    LockableDurations(req: QueryLockableDurationsRequest, headers?: HeadersInit): Promise<QueryLockableDurationsResponse>;
}

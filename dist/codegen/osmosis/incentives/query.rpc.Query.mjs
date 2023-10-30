//@ts-nocheck
import * as fm from "../../grpc-gateway";
export class Query {
    /** ModuleToDistributeCoins returns coins that are going to be distributed */
    static ModuleToDistributeCoins(request, initRequest) {
        return fm.fetchReq(`/osmosis/incentives/v1beta1/module_to_distribute_coins?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** GaugeByID returns gauges by their respective ID */
    static GaugeByID(request, initRequest) {
        return fm.fetchReq(`/osmosis/incentives/v1beta1/gauge_by_id/${request["id"]}?${fm.renderURLSearchParams({
            ...request
        }, ["id"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** Gauges returns both upcoming and active gauges */
    static Gauges(request, initRequest) {
        return fm.fetchReq(`/osmosis/incentives/v1beta1/gauges?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** ActiveGauges returns active gauges */
    static ActiveGauges(request, initRequest) {
        return fm.fetchReq(`/osmosis/incentives/v1beta1/active_gauges?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** ActiveGaugesPerDenom returns active gauges by denom */
    static ActiveGaugesPerDenom(request, initRequest) {
        return fm.fetchReq(`/osmosis/incentives/v1beta1/active_gauges_per_denom?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** Returns scheduled gauges that have not yet occured */
    static UpcomingGauges(request, initRequest) {
        return fm.fetchReq(`/osmosis/incentives/v1beta1/upcoming_gauges?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /**
     * UpcomingGaugesPerDenom returns scheduled gauges that have not yet occured
     * by denom
     */
    static UpcomingGaugesPerDenom(request, initRequest) {
        return fm.fetchReq(`/osmosis/incentives/v1beta1/upcoming_gauges_per_denom?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /**
     * RewardsEst returns an estimate of the rewards from now until a specified
     * time in the future The querier either provides an address or a set of locks
     * for which they want to find the associated rewards
     */
    static RewardsEst(request, initRequest) {
        return fm.fetchReq(`/osmosis/incentives/v1beta1/rewards_est/${request["owner"]}?${fm.renderURLSearchParams({
            ...request
        }, ["owner"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /**
     * LockableDurations returns lockable durations that are valid to distribute
     * incentives for
     */
    static LockableDurations(request, initRequest) {
        return fm.fetchReq(`/osmosis/incentives/v1beta1/lockable_durations?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
}
export class QueryClientImpl {
    url;
    constructor(url) {
        this.url = url;
    }
    /** ModuleToDistributeCoins returns coins that are going to be distributed */
    async ModuleToDistributeCoins(req, headers) {
        return Query.ModuleToDistributeCoins(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** GaugeByID returns gauges by their respective ID */
    async GaugeByID(req, headers) {
        return Query.GaugeByID(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** Gauges returns both upcoming and active gauges */
    async Gauges(req, headers) {
        return Query.Gauges(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** ActiveGauges returns active gauges */
    async ActiveGauges(req, headers) {
        return Query.ActiveGauges(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** ActiveGaugesPerDenom returns active gauges by denom */
    async ActiveGaugesPerDenom(req, headers) {
        return Query.ActiveGaugesPerDenom(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** Returns scheduled gauges that have not yet occured */
    async UpcomingGauges(req, headers) {
        return Query.UpcomingGauges(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /**
     * UpcomingGaugesPerDenom returns scheduled gauges that have not yet occured
     * by denom
     */
    async UpcomingGaugesPerDenom(req, headers) {
        return Query.UpcomingGaugesPerDenom(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /**
     * RewardsEst returns an estimate of the rewards from now until a specified
     * time in the future The querier either provides an address or a set of locks
     * for which they want to find the associated rewards
     */
    async RewardsEst(req, headers) {
        return Query.RewardsEst(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /**
     * LockableDurations returns lockable durations that are valid to distribute
     * incentives for
     */
    async LockableDurations(req, headers) {
        return Query.LockableDurations(req, {
            headers,
            pathPrefix: this.url
        });
    }
}
//# sourceMappingURL=query.rpc.Query.js.map
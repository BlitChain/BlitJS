//@ts-nocheck
import * as fm from "../../../grpc-gateway";
export class Query {
    /** GaugeIds takes the pool id and returns the matching gauge ids and durations */
    static GaugeIds(request, initRequest) {
        return fm.fetchReq(`/osmosis/pool-incentives/v1beta1/gauge-ids/${request["pool_id"]}?${fm.renderURLSearchParams({
            ...request
        }, ["pool_id"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** DistrInfo returns the pool's matching gauge ids and weights. */
    static DistrInfo(request, initRequest) {
        return fm.fetchReq(`/osmosis/pool-incentives/v1beta1/distr_info?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** Params returns pool incentives params. */
    static Params(request, initRequest) {
        return fm.fetchReq(`/osmosis/pool-incentives/v1beta1/params?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** LockableDurations returns lock durations for pools. */
    static LockableDurations(request, initRequest) {
        return fm.fetchReq(`/osmosis/pool-incentives/v1beta1/lockable_durations?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** IncentivizedPools returns currently incentivized pools */
    static IncentivizedPools(request, initRequest) {
        return fm.fetchReq(`/osmosis/pool-incentives/v1beta1/incentivized_pools?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** ExternalIncentiveGauges returns external incentive gauges. */
    static ExternalIncentiveGauges(request, initRequest) {
        return fm.fetchReq(`/osmosis/pool-incentives/v1beta1/external_incentive_gauges?${fm.renderURLSearchParams({
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
    /** GaugeIds takes the pool id and returns the matching gauge ids and durations */
    async GaugeIds(req, headers) {
        return Query.GaugeIds(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** DistrInfo returns the pool's matching gauge ids and weights. */
    async DistrInfo(req, headers) {
        return Query.DistrInfo(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** Params returns pool incentives params. */
    async Params(req, headers) {
        return Query.Params(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** LockableDurations returns lock durations for pools. */
    async LockableDurations(req, headers) {
        return Query.LockableDurations(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** IncentivizedPools returns currently incentivized pools */
    async IncentivizedPools(req, headers) {
        return Query.IncentivizedPools(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** ExternalIncentiveGauges returns external incentive gauges. */
    async ExternalIncentiveGauges(req, headers) {
        return Query.ExternalIncentiveGauges(req, {
            headers,
            pathPrefix: this.url
        });
    }
}
//# sourceMappingURL=query.rpc.Query.js.map
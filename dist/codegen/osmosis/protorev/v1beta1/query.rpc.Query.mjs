//@ts-nocheck
import * as fm from "../../../grpc-gateway";
export class Query {
    /** Params queries the parameters of the module. */
    static Params(request, initRequest) {
        return fm.fetchReq(`/osmosis/v13/protorev/params?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /**
     * GetProtoRevNumberOfTrades queries the number of arbitrage trades the module
     * has executed
     */
    static GetProtoRevNumberOfTrades(request, initRequest) {
        return fm.fetchReq(`/osmosis/v13/protorev/number_of_trades?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** GetProtoRevProfitsByDenom queries the profits of the module by denom */
    static GetProtoRevProfitsByDenom(request, initRequest) {
        return fm.fetchReq(`/osmosis/v13/protorev/profits_by_denom?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** GetProtoRevAllProfits queries all of the profits from the module */
    static GetProtoRevAllProfits(request, initRequest) {
        return fm.fetchReq(`/osmosis/v13/protorev/all_profits?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /**
     * GetProtoRevStatisticsByPool queries the number of arbitrages and profits
     * that have been executed for a given pool
     */
    static GetProtoRevStatisticsByPool(request, initRequest) {
        return fm.fetchReq(`/osmosis/v13/protorev/statistics_by_pool?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /**
     * GetProtoRevAllStatistics queries all of pools that the module has arbitrage
     * against and the number of trades and profits that have been executed for
     * each pool
     */
    static GetProtoRevAllStatistics(request, initRequest) {
        return fm.fetchReq(`/osmosis/v13/protorev/all_statistics?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /**
     * GetProtoRevTokenPairArbRoutes queries all of the hot routes that the module
     * is currently arbitraging
     */
    static GetProtoRevTokenPairArbRoutes(request, initRequest) {
        return fm.fetchReq(`/osmosis/v13/protorev/token_pair_arb_routes?${fm.renderURLSearchParams({
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
    /** Params queries the parameters of the module. */
    async Params(req, headers) {
        return Query.Params(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /**
     * GetProtoRevNumberOfTrades queries the number of arbitrage trades the module
     * has executed
     */
    async GetProtoRevNumberOfTrades(req, headers) {
        return Query.GetProtoRevNumberOfTrades(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** GetProtoRevProfitsByDenom queries the profits of the module by denom */
    async GetProtoRevProfitsByDenom(req, headers) {
        return Query.GetProtoRevProfitsByDenom(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** GetProtoRevAllProfits queries all of the profits from the module */
    async GetProtoRevAllProfits(req, headers) {
        return Query.GetProtoRevAllProfits(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /**
     * GetProtoRevStatisticsByPool queries the number of arbitrages and profits
     * that have been executed for a given pool
     */
    async GetProtoRevStatisticsByPool(req, headers) {
        return Query.GetProtoRevStatisticsByPool(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /**
     * GetProtoRevAllStatistics queries all of pools that the module has arbitrage
     * against and the number of trades and profits that have been executed for
     * each pool
     */
    async GetProtoRevAllStatistics(req, headers) {
        return Query.GetProtoRevAllStatistics(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /**
     * GetProtoRevTokenPairArbRoutes queries all of the hot routes that the module
     * is currently arbitraging
     */
    async GetProtoRevTokenPairArbRoutes(req, headers) {
        return Query.GetProtoRevTokenPairArbRoutes(req, {
            headers,
            pathPrefix: this.url
        });
    }
}
//# sourceMappingURL=query.rpc.Query.js.map
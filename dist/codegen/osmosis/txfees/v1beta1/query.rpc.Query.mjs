//@ts-nocheck
import * as fm from "../../../grpc-gateway";
export class Query {
    /**
     * FeeTokens returns a list of all the whitelisted fee tokens and their
     * corresponding pools. It does not include the BaseDenom, which has its own
     * query endpoint
     */
    static FeeTokens(request, initRequest) {
        return fm.fetchReq(`/osmosis/txfees/v1beta1/fee_tokens?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** DenomSpotPrice returns all spot prices by each registered token denom. */
    static DenomSpotPrice(request, initRequest) {
        return fm.fetchReq(`/osmosis/txfees/v1beta1/spot_price_by_denom?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** Returns the poolID for a specified denom input. */
    static DenomPoolId(request, initRequest) {
        return fm.fetchReq(`/osmosis/txfees/v1beta1/denom_pool_id/${request["denom"]}?${fm.renderURLSearchParams({
            ...request
        }, ["denom"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** Returns a list of all base denom tokens and their corresponding pools. */
    static BaseDenom(request, initRequest) {
        return fm.fetchReq(`/osmosis/txfees/v1beta1/base_denom?${fm.renderURLSearchParams({
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
    /**
     * FeeTokens returns a list of all the whitelisted fee tokens and their
     * corresponding pools. It does not include the BaseDenom, which has its own
     * query endpoint
     */
    async FeeTokens(req, headers) {
        return Query.FeeTokens(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** DenomSpotPrice returns all spot prices by each registered token denom. */
    async DenomSpotPrice(req, headers) {
        return Query.DenomSpotPrice(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** Returns the poolID for a specified denom input. */
    async DenomPoolId(req, headers) {
        return Query.DenomPoolId(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** Returns a list of all base denom tokens and their corresponding pools. */
    async BaseDenom(req, headers) {
        return Query.BaseDenom(req, {
            headers,
            pathPrefix: this.url
        });
    }
}
//# sourceMappingURL=query.rpc.Query.js.map
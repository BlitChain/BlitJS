//@ts-nocheck
import * as fm from "../../../grpc-gateway";
export class Query {
    /** Params returns the total set of minting parameters. */
    static Params(request, initRequest) {
        return fm.fetchReq(`/cosmos/mint/v1beta1/params?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** Inflation returns the current minting inflation value. */
    static Inflation(request, initRequest) {
        return fm.fetchReq(`/cosmos/mint/v1beta1/inflation?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** AnnualProvisions current minting annual provisions value. */
    static AnnualProvisions(request, initRequest) {
        return fm.fetchReq(`/cosmos/mint/v1beta1/annual_provisions?${fm.renderURLSearchParams({
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
    /** Params returns the total set of minting parameters. */
    async Params(req, headers) {
        return Query.Params(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** Inflation returns the current minting inflation value. */
    async Inflation(req, headers) {
        return Query.Inflation(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** AnnualProvisions current minting annual provisions value. */
    async AnnualProvisions(req, headers) {
        return Query.AnnualProvisions(req, {
            headers,
            pathPrefix: this.url
        });
    }
}
//# sourceMappingURL=query.rpc.Query.js.map
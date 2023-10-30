//@ts-nocheck
import * as fm from "../../../grpc-gateway";
export class Query {
    /**
     * Params defines a gRPC query method that returns the tokenfactory module's
     * parameters.
     */
    static Params(request, initRequest) {
        return fm.fetchReq(`/osmosis/tokenfactory/v1beta1/params?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /**
     * DenomAuthorityMetadata defines a gRPC query method for fetching
     * DenomAuthorityMetadata for a particular denom.
     */
    static DenomAuthorityMetadata(request, initRequest) {
        return fm.fetchReq(`/osmosis/tokenfactory/v1beta1/denoms/${request["denom"]}/authority_metadata?${fm.renderURLSearchParams({
            ...request
        }, ["denom"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /**
     * DenomsFromCreator defines a gRPC query method for fetching all
     * denominations created by a specific admin/creator.
     */
    static DenomsFromCreator(request, initRequest) {
        return fm.fetchReq(`/osmosis/tokenfactory/v1beta1/denoms_from_creator/${request["creator"]}?${fm.renderURLSearchParams({
            ...request
        }, ["creator"])}`, {
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
     * Params defines a gRPC query method that returns the tokenfactory module's
     * parameters.
     */
    async Params(req, headers) {
        return Query.Params(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /**
     * DenomAuthorityMetadata defines a gRPC query method for fetching
     * DenomAuthorityMetadata for a particular denom.
     */
    async DenomAuthorityMetadata(req, headers) {
        return Query.DenomAuthorityMetadata(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /**
     * DenomsFromCreator defines a gRPC query method for fetching all
     * denominations created by a specific admin/creator.
     */
    async DenomsFromCreator(req, headers) {
        return Query.DenomsFromCreator(req, {
            headers,
            pathPrefix: this.url
        });
    }
}
//# sourceMappingURL=query.rpc.Query.js.map
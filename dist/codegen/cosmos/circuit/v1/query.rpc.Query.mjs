//@ts-nocheck
import * as fm from "../../../grpc-gateway";
export class Query {
    /** Account returns account permissions. */
    static Account(request, initRequest) {
        return fm.fetchReq(`/cosmos/circuit/v1/accounts/${request["address"]}?${fm.renderURLSearchParams({
            ...request
        }, ["address"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** Account returns account permissions. */
    static Accounts(request, initRequest) {
        return fm.fetchReq(`/cosmos/circuit/v1/accounts?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** DisabledList returns a list of disabled message urls */
    static DisabledList(request, initRequest) {
        return fm.fetchReq(`/cosmos/circuit/v1/disable_list?${fm.renderURLSearchParams({
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
    /** Account returns account permissions. */
    async Account(req, headers) {
        return Query.Account(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** Account returns account permissions. */
    async Accounts(req, headers) {
        return Query.Accounts(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** DisabledList returns a list of disabled message urls */
    async DisabledList(req, headers) {
        return Query.DisabledList(req, {
            headers,
            pathPrefix: this.url
        });
    }
}
//# sourceMappingURL=query.rpc.Query.js.map
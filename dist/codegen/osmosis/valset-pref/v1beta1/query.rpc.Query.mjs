//@ts-nocheck
import * as fm from "../../../grpc-gateway";
export class Query {
    /** Returns the list of ValidatorPreferences for the user. */
    static UserValidatorPreferences(request, initRequest) {
        return fm.fetchReq(`/osmosis/valset-pref/v1beta1/${request["address"]}?${fm.renderURLSearchParams({
            ...request
        }, ["address"])}`, {
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
    /** Returns the list of ValidatorPreferences for the user. */
    async UserValidatorPreferences(req, headers) {
        return Query.UserValidatorPreferences(req, {
            headers,
            pathPrefix: this.url
        });
    }
}
//# sourceMappingURL=query.rpc.Query.js.map
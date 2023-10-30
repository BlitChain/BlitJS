//@ts-nocheck
import * as fm from "../../../grpc-gateway";
export class Query {
    static Params(request, initRequest) {
        return fm.fetchReq(`/osmosis/twap/v1beta1/Params?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    static ArithmeticTwap(request, initRequest) {
        return fm.fetchReq(`/osmosis/twap/v1beta1/ArithmeticTwap?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    static ArithmeticTwapToNow(request, initRequest) {
        return fm.fetchReq(`/osmosis/twap/v1beta1/ArithmeticTwapToNow?${fm.renderURLSearchParams({
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
    async Params(req, headers) {
        return Query.Params(req, {
            headers,
            pathPrefix: this.url
        });
    }
    async ArithmeticTwap(req, headers) {
        return Query.ArithmeticTwap(req, {
            headers,
            pathPrefix: this.url
        });
    }
    async ArithmeticTwapToNow(req, headers) {
        return Query.ArithmeticTwapToNow(req, {
            headers,
            pathPrefix: this.url
        });
    }
}
//# sourceMappingURL=query.rpc.Query.js.map
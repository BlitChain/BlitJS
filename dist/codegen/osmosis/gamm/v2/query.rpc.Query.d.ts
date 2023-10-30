import * as fm from "../../../grpc-gateway";
import { QuerySpotPriceRequest, QuerySpotPriceResponse } from "./query";
export declare class Query {
    /**
     * SpotPrice defines a gRPC query handler that returns the spot price given
     * a base denomination and a quote denomination.
     */
    static SpotPrice(request: QuerySpotPriceRequest, initRequest?: fm.InitReq): Promise<QuerySpotPriceResponse>;
}
export declare class QueryClientImpl {
    private readonly url;
    constructor(url: string);
    /**
     * SpotPrice defines a gRPC query handler that returns the spot price given
     * a base denomination and a quote denomination.
     */
    SpotPrice(req: QuerySpotPriceRequest, headers?: HeadersInit): Promise<QuerySpotPriceResponse>;
}

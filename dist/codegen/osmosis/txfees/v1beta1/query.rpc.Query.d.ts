import * as fm from "../../../grpc-gateway";
import { QueryFeeTokensRequest, QueryFeeTokensResponse, QueryDenomSpotPriceRequest, QueryDenomSpotPriceResponse, QueryDenomPoolIdRequest, QueryDenomPoolIdResponse, QueryBaseDenomRequest, QueryBaseDenomResponse } from "./query";
export declare class Query {
    /**
     * FeeTokens returns a list of all the whitelisted fee tokens and their
     * corresponding pools. It does not include the BaseDenom, which has its own
     * query endpoint
     */
    static FeeTokens(request: QueryFeeTokensRequest, initRequest?: fm.InitReq): Promise<QueryFeeTokensResponse>;
    /** DenomSpotPrice returns all spot prices by each registered token denom. */
    static DenomSpotPrice(request: QueryDenomSpotPriceRequest, initRequest?: fm.InitReq): Promise<QueryDenomSpotPriceResponse>;
    /** Returns the poolID for a specified denom input. */
    static DenomPoolId(request: QueryDenomPoolIdRequest, initRequest?: fm.InitReq): Promise<QueryDenomPoolIdResponse>;
    /** Returns a list of all base denom tokens and their corresponding pools. */
    static BaseDenom(request: QueryBaseDenomRequest, initRequest?: fm.InitReq): Promise<QueryBaseDenomResponse>;
}
export declare class QueryClientImpl {
    private readonly url;
    constructor(url: string);
    /**
     * FeeTokens returns a list of all the whitelisted fee tokens and their
     * corresponding pools. It does not include the BaseDenom, which has its own
     * query endpoint
     */
    FeeTokens(req: QueryFeeTokensRequest, headers?: HeadersInit): Promise<QueryFeeTokensResponse>;
    /** DenomSpotPrice returns all spot prices by each registered token denom. */
    DenomSpotPrice(req: QueryDenomSpotPriceRequest, headers?: HeadersInit): Promise<QueryDenomSpotPriceResponse>;
    /** Returns the poolID for a specified denom input. */
    DenomPoolId(req: QueryDenomPoolIdRequest, headers?: HeadersInit): Promise<QueryDenomPoolIdResponse>;
    /** Returns a list of all base denom tokens and their corresponding pools. */
    BaseDenom(req: QueryBaseDenomRequest, headers?: HeadersInit): Promise<QueryBaseDenomResponse>;
}

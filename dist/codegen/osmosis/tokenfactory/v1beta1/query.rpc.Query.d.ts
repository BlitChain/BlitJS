import * as fm from "../../../grpc-gateway";
import { QueryParamsRequest, QueryParamsResponse, QueryDenomAuthorityMetadataRequest, QueryDenomAuthorityMetadataResponse, QueryDenomsFromCreatorRequest, QueryDenomsFromCreatorResponse } from "./query";
export declare class Query {
    /**
     * Params defines a gRPC query method that returns the tokenfactory module's
     * parameters.
     */
    static Params(request: QueryParamsRequest, initRequest?: fm.InitReq): Promise<QueryParamsResponse>;
    /**
     * DenomAuthorityMetadata defines a gRPC query method for fetching
     * DenomAuthorityMetadata for a particular denom.
     */
    static DenomAuthorityMetadata(request: QueryDenomAuthorityMetadataRequest, initRequest?: fm.InitReq): Promise<QueryDenomAuthorityMetadataResponse>;
    /**
     * DenomsFromCreator defines a gRPC query method for fetching all
     * denominations created by a specific admin/creator.
     */
    static DenomsFromCreator(request: QueryDenomsFromCreatorRequest, initRequest?: fm.InitReq): Promise<QueryDenomsFromCreatorResponse>;
}
export declare class QueryClientImpl {
    private readonly url;
    constructor(url: string);
    /**
     * Params defines a gRPC query method that returns the tokenfactory module's
     * parameters.
     */
    Params(req: QueryParamsRequest, headers?: HeadersInit): Promise<QueryParamsResponse>;
    /**
     * DenomAuthorityMetadata defines a gRPC query method for fetching
     * DenomAuthorityMetadata for a particular denom.
     */
    DenomAuthorityMetadata(req: QueryDenomAuthorityMetadataRequest, headers?: HeadersInit): Promise<QueryDenomAuthorityMetadataResponse>;
    /**
     * DenomsFromCreator defines a gRPC query method for fetching all
     * denominations created by a specific admin/creator.
     */
    DenomsFromCreator(req: QueryDenomsFromCreatorRequest, headers?: HeadersInit): Promise<QueryDenomsFromCreatorResponse>;
}

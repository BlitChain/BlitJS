import * as fm from "../../../../grpc-gateway";
import { QueryDenomTracesRequest, QueryDenomTracesResponse, QueryDenomTraceRequest, QueryDenomTraceResponse, QueryParamsRequest, QueryParamsResponse, QueryDenomHashRequest, QueryDenomHashResponse, QueryEscrowAddressRequest, QueryEscrowAddressResponse, QueryTotalEscrowForDenomRequest, QueryTotalEscrowForDenomResponse } from "./query";
export declare class Query {
    /** DenomTraces queries all denomination traces. */
    static DenomTraces(request: QueryDenomTracesRequest, initRequest?: fm.InitReq): Promise<QueryDenomTracesResponse>;
    /** DenomTrace queries a denomination trace information. */
    static DenomTrace(request: QueryDenomTraceRequest, initRequest?: fm.InitReq): Promise<QueryDenomTraceResponse>;
    /** Params queries all parameters of the ibc-transfer module. */
    static Params(request: QueryParamsRequest, initRequest?: fm.InitReq): Promise<QueryParamsResponse>;
    /** DenomHash queries a denomination hash information. */
    static DenomHash(request: QueryDenomHashRequest, initRequest?: fm.InitReq): Promise<QueryDenomHashResponse>;
    /** EscrowAddress returns the escrow address for a particular port and channel id. */
    static EscrowAddress(request: QueryEscrowAddressRequest, initRequest?: fm.InitReq): Promise<QueryEscrowAddressResponse>;
    /** TotalEscrowForDenom returns the total amount of tokens in escrow based on the denom. */
    static TotalEscrowForDenom(request: QueryTotalEscrowForDenomRequest, initRequest?: fm.InitReq): Promise<QueryTotalEscrowForDenomResponse>;
}
export declare class QueryClientImpl {
    private readonly url;
    constructor(url: string);
    /** DenomTraces queries all denomination traces. */
    DenomTraces(req: QueryDenomTracesRequest, headers?: HeadersInit): Promise<QueryDenomTracesResponse>;
    /** DenomTrace queries a denomination trace information. */
    DenomTrace(req: QueryDenomTraceRequest, headers?: HeadersInit): Promise<QueryDenomTraceResponse>;
    /** Params queries all parameters of the ibc-transfer module. */
    Params(req: QueryParamsRequest, headers?: HeadersInit): Promise<QueryParamsResponse>;
    /** DenomHash queries a denomination hash information. */
    DenomHash(req: QueryDenomHashRequest, headers?: HeadersInit): Promise<QueryDenomHashResponse>;
    /** EscrowAddress returns the escrow address for a particular port and channel id. */
    EscrowAddress(req: QueryEscrowAddressRequest, headers?: HeadersInit): Promise<QueryEscrowAddressResponse>;
    /** TotalEscrowForDenom returns the total amount of tokens in escrow based on the denom. */
    TotalEscrowForDenom(req: QueryTotalEscrowForDenomRequest, headers?: HeadersInit): Promise<QueryTotalEscrowForDenomResponse>;
}

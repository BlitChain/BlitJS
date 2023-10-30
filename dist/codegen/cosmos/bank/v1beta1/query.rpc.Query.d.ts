import * as fm from "../../../grpc-gateway";
import { QueryBalanceRequest, QueryBalanceResponse, QueryAllBalancesRequest, QueryAllBalancesResponse, QuerySpendableBalancesRequest, QuerySpendableBalancesResponse, QueryTotalSupplyRequest, QueryTotalSupplyResponse, QuerySupplyOfRequest, QuerySupplyOfResponse, QueryParamsRequest, QueryParamsResponse, QueryDenomMetadataRequest, QueryDenomMetadataResponse, QueryDenomsMetadataRequest, QueryDenomsMetadataResponse, QueryDenomOwnersRequest, QueryDenomOwnersResponse } from "./query";
export declare class Query {
    /** Balance queries the balance of a single coin for a single account. */
    static Balance(request: QueryBalanceRequest, initRequest?: fm.InitReq): Promise<QueryBalanceResponse>;
    /** AllBalances queries the balance of all coins for a single account. */
    static AllBalances(request: QueryAllBalancesRequest, initRequest?: fm.InitReq): Promise<QueryAllBalancesResponse>;
    /**
     * SpendableBalances queries the spenable balance of all coins for a single
     * account.
     */
    static SpendableBalances(request: QuerySpendableBalancesRequest, initRequest?: fm.InitReq): Promise<QuerySpendableBalancesResponse>;
    /** TotalSupply queries the total supply of all coins. */
    static TotalSupply(request: QueryTotalSupplyRequest, initRequest?: fm.InitReq): Promise<QueryTotalSupplyResponse>;
    /** SupplyOf queries the supply of a single coin. */
    static SupplyOf(request: QuerySupplyOfRequest, initRequest?: fm.InitReq): Promise<QuerySupplyOfResponse>;
    /** Params queries the parameters of x/bank module. */
    static Params(request: QueryParamsRequest, initRequest?: fm.InitReq): Promise<QueryParamsResponse>;
    /** DenomsMetadata queries the client metadata of a given coin denomination. */
    static DenomMetadata(request: QueryDenomMetadataRequest, initRequest?: fm.InitReq): Promise<QueryDenomMetadataResponse>;
    /**
     * DenomsMetadata queries the client metadata for all registered coin
     * denominations.
     */
    static DenomsMetadata(request: QueryDenomsMetadataRequest, initRequest?: fm.InitReq): Promise<QueryDenomsMetadataResponse>;
    /**
     * DenomOwners queries for all account addresses that own a particular token
     * denomination.
     */
    static DenomOwners(request: QueryDenomOwnersRequest, initRequest?: fm.InitReq): Promise<QueryDenomOwnersResponse>;
}
export declare class QueryClientImpl {
    private readonly url;
    constructor(url: string);
    /** Balance queries the balance of a single coin for a single account. */
    Balance(req: QueryBalanceRequest, headers?: HeadersInit): Promise<QueryBalanceResponse>;
    /** AllBalances queries the balance of all coins for a single account. */
    AllBalances(req: QueryAllBalancesRequest, headers?: HeadersInit): Promise<QueryAllBalancesResponse>;
    /**
     * SpendableBalances queries the spenable balance of all coins for a single
     * account.
     */
    SpendableBalances(req: QuerySpendableBalancesRequest, headers?: HeadersInit): Promise<QuerySpendableBalancesResponse>;
    /** TotalSupply queries the total supply of all coins. */
    TotalSupply(req: QueryTotalSupplyRequest, headers?: HeadersInit): Promise<QueryTotalSupplyResponse>;
    /** SupplyOf queries the supply of a single coin. */
    SupplyOf(req: QuerySupplyOfRequest, headers?: HeadersInit): Promise<QuerySupplyOfResponse>;
    /** Params queries the parameters of x/bank module. */
    Params(req: QueryParamsRequest, headers?: HeadersInit): Promise<QueryParamsResponse>;
    /** DenomsMetadata queries the client metadata of a given coin denomination. */
    DenomMetadata(req: QueryDenomMetadataRequest, headers?: HeadersInit): Promise<QueryDenomMetadataResponse>;
    /**
     * DenomsMetadata queries the client metadata for all registered coin
     * denominations.
     */
    DenomsMetadata(req: QueryDenomsMetadataRequest, headers?: HeadersInit): Promise<QueryDenomsMetadataResponse>;
    /**
     * DenomOwners queries for all account addresses that own a particular token
     * denomination.
     */
    DenomOwners(req: QueryDenomOwnersRequest, headers?: HeadersInit): Promise<QueryDenomOwnersResponse>;
}

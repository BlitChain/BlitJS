import * as fm from "../../../grpc-gateway";
import { QueryBalanceRequest, QueryBalanceResponse, QueryAllBalancesRequest, QueryAllBalancesResponse, QuerySpendableBalancesRequest, QuerySpendableBalancesResponse, QuerySpendableBalanceByDenomRequest, QuerySpendableBalanceByDenomResponse, QueryTotalSupplyRequest, QueryTotalSupplyResponse, QuerySupplyOfRequest, QuerySupplyOfResponse, QueryParamsRequest, QueryParamsResponse, QueryDenomMetadataRequest, QueryDenomMetadataResponse, QueryDenomsMetadataRequest, QueryDenomsMetadataResponse, QueryDenomOwnersRequest, QueryDenomOwnersResponse, QuerySendEnabledRequest, QuerySendEnabledResponse } from "./query";
export declare class Query {
    /** Balance queries the balance of a single coin for a single account. */
    static Balance(request: QueryBalanceRequest, initRequest?: fm.InitReq): Promise<QueryBalanceResponse>;
    /**
     * AllBalances queries the balance of all coins for a single account.
     *
     * When called from another module, this query might consume a high amount of
     * gas if the pagination field is incorrectly set.
     */
    static AllBalances(request: QueryAllBalancesRequest, initRequest?: fm.InitReq): Promise<QueryAllBalancesResponse>;
    /**
     * SpendableBalances queries the spendable balance of all coins for a single
     * account.
     *
     * When called from another module, this query might consume a high amount of
     * gas if the pagination field is incorrectly set.
     *
     * Since: cosmos-sdk 0.46
     */
    static SpendableBalances(request: QuerySpendableBalancesRequest, initRequest?: fm.InitReq): Promise<QuerySpendableBalancesResponse>;
    /**
     * SpendableBalanceByDenom queries the spendable balance of a single denom for
     * a single account.
     *
     * When called from another module, this query might consume a high amount of
     * gas if the pagination field is incorrectly set.
     *
     * Since: cosmos-sdk 0.47
     */
    static SpendableBalanceByDenom(request: QuerySpendableBalanceByDenomRequest, initRequest?: fm.InitReq): Promise<QuerySpendableBalanceByDenomResponse>;
    /**
     * TotalSupply queries the total supply of all coins.
     *
     * When called from another module, this query might consume a high amount of
     * gas if the pagination field is incorrectly set.
     */
    static TotalSupply(request: QueryTotalSupplyRequest, initRequest?: fm.InitReq): Promise<QueryTotalSupplyResponse>;
    /**
     * SupplyOf queries the supply of a single coin.
     *
     * When called from another module, this query might consume a high amount of
     * gas if the pagination field is incorrectly set.
     */
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
     *
     * When called from another module, this query might consume a high amount of
     * gas if the pagination field is incorrectly set.
     *
     * Since: cosmos-sdk 0.46
     */
    static DenomOwners(request: QueryDenomOwnersRequest, initRequest?: fm.InitReq): Promise<QueryDenomOwnersResponse>;
    /**
     * SendEnabled queries for SendEnabled entries.
     *
     * This query only returns denominations that have specific SendEnabled settings.
     * Any denomination that does not have a specific setting will use the default
     * params.default_send_enabled, and will not be returned by this query.
     *
     * Since: cosmos-sdk 0.47
     */
    static SendEnabled(request: QuerySendEnabledRequest, initRequest?: fm.InitReq): Promise<QuerySendEnabledResponse>;
}
export declare class QueryClientImpl {
    private readonly url;
    constructor(url: string);
    /** Balance queries the balance of a single coin for a single account. */
    Balance(req: QueryBalanceRequest, headers?: HeadersInit): Promise<QueryBalanceResponse>;
    /**
     * AllBalances queries the balance of all coins for a single account.
     *
     * When called from another module, this query might consume a high amount of
     * gas if the pagination field is incorrectly set.
     */
    AllBalances(req: QueryAllBalancesRequest, headers?: HeadersInit): Promise<QueryAllBalancesResponse>;
    /**
     * SpendableBalances queries the spendable balance of all coins for a single
     * account.
     *
     * When called from another module, this query might consume a high amount of
     * gas if the pagination field is incorrectly set.
     *
     * Since: cosmos-sdk 0.46
     */
    SpendableBalances(req: QuerySpendableBalancesRequest, headers?: HeadersInit): Promise<QuerySpendableBalancesResponse>;
    /**
     * SpendableBalanceByDenom queries the spendable balance of a single denom for
     * a single account.
     *
     * When called from another module, this query might consume a high amount of
     * gas if the pagination field is incorrectly set.
     *
     * Since: cosmos-sdk 0.47
     */
    SpendableBalanceByDenom(req: QuerySpendableBalanceByDenomRequest, headers?: HeadersInit): Promise<QuerySpendableBalanceByDenomResponse>;
    /**
     * TotalSupply queries the total supply of all coins.
     *
     * When called from another module, this query might consume a high amount of
     * gas if the pagination field is incorrectly set.
     */
    TotalSupply(req: QueryTotalSupplyRequest, headers?: HeadersInit): Promise<QueryTotalSupplyResponse>;
    /**
     * SupplyOf queries the supply of a single coin.
     *
     * When called from another module, this query might consume a high amount of
     * gas if the pagination field is incorrectly set.
     */
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
     *
     * When called from another module, this query might consume a high amount of
     * gas if the pagination field is incorrectly set.
     *
     * Since: cosmos-sdk 0.46
     */
    DenomOwners(req: QueryDenomOwnersRequest, headers?: HeadersInit): Promise<QueryDenomOwnersResponse>;
    /**
     * SendEnabled queries for SendEnabled entries.
     *
     * This query only returns denominations that have specific SendEnabled settings.
     * Any denomination that does not have a specific setting will use the default
     * params.default_send_enabled, and will not be returned by this query.
     *
     * Since: cosmos-sdk 0.47
     */
    SendEnabled(req: QuerySendEnabledRequest, headers?: HeadersInit): Promise<QuerySendEnabledResponse>;
}

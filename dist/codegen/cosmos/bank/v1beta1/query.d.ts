import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Coin, CoinAmino, CoinSDKType } from "../../base/v1beta1/coin";
import { Params, ParamsAmino, ParamsSDKType, Metadata, MetadataAmino, MetadataSDKType, SendEnabled, SendEnabledAmino, SendEnabledSDKType } from "./bank";
import { BinaryReader, BinaryWriter } from "../../../binary";
export declare const protobufPackage = "cosmos.bank.v1beta1";
/** QueryBalanceRequest is the request type for the Query/Balance RPC method. */
export interface QueryBalanceRequest {
    /** address is the address to query balances for. */
    address: string;
    /** denom is the coin denom to query balances for. */
    denom: string;
}
export interface QueryBalanceRequestProtoMsg {
    type_url: "/cosmos.bank.v1beta1.QueryBalanceRequest";
    value: Uint8Array;
}
export interface QueryBalanceRequestProtoMsg {
    type_url: "/cosmos.bank.v1beta1.QueryBalanceRequest";
    value: Uint8Array;
}
/** QueryBalanceRequest is the request type for the Query/Balance RPC method. */
export interface QueryBalanceRequestAmino {
    /** address is the address to query balances for. */
    address: string;
    /** denom is the coin denom to query balances for. */
    denom: string;
}
export interface QueryBalanceRequestAminoMsg {
    type: "cosmos-sdk/QueryBalanceRequest";
    value: QueryBalanceRequestAmino;
}
/** QueryBalanceRequest is the request type for the Query/Balance RPC method. */
export interface QueryBalanceRequestSDKType {
    address: string;
    denom: string;
}
/** QueryBalanceResponse is the response type for the Query/Balance RPC method. */
export interface QueryBalanceResponse {
    /** balance is the balance of the coin. */
    balance?: Coin;
}
export interface QueryBalanceResponseProtoMsg {
    type_url: "/cosmos.bank.v1beta1.QueryBalanceResponse";
    value: Uint8Array;
}
export interface QueryBalanceResponseProtoMsg {
    type_url: "/cosmos.bank.v1beta1.QueryBalanceResponse";
    value: Uint8Array;
}
/** QueryBalanceResponse is the response type for the Query/Balance RPC method. */
export interface QueryBalanceResponseAmino {
    /** balance is the balance of the coin. */
    balance?: CoinAmino;
}
export interface QueryBalanceResponseAminoMsg {
    type: "cosmos-sdk/QueryBalanceResponse";
    value: QueryBalanceResponseAmino;
}
/** QueryBalanceResponse is the response type for the Query/Balance RPC method. */
export interface QueryBalanceResponseSDKType {
    balance?: CoinSDKType;
}
/** QueryBalanceRequest is the request type for the Query/AllBalances RPC method. */
export interface QueryAllBalancesRequest {
    /** address is the address to query balances for. */
    address: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
    /**
     * resolve_denom is the flag to resolve the denom into a human-readable form from the metadata.
     *
     * Since: cosmos-sdk 0.50
     */
    resolve_denom: boolean;
}
export interface QueryAllBalancesRequestProtoMsg {
    type_url: "/cosmos.bank.v1beta1.QueryAllBalancesRequest";
    value: Uint8Array;
}
export interface QueryAllBalancesRequestProtoMsg {
    type_url: "/cosmos.bank.v1beta1.QueryAllBalancesRequest";
    value: Uint8Array;
}
/** QueryBalanceRequest is the request type for the Query/AllBalances RPC method. */
export interface QueryAllBalancesRequestAmino {
    /** address is the address to query balances for. */
    address: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
    /**
     * resolve_denom is the flag to resolve the denom into a human-readable form from the metadata.
     *
     * Since: cosmos-sdk 0.50
     */
    resolve_denom: boolean;
}
export interface QueryAllBalancesRequestAminoMsg {
    type: "cosmos-sdk/QueryAllBalancesRequest";
    value: QueryAllBalancesRequestAmino;
}
/** QueryBalanceRequest is the request type for the Query/AllBalances RPC method. */
export interface QueryAllBalancesRequestSDKType {
    address: string;
    pagination?: PageRequestSDKType;
    resolve_denom: boolean;
}
/**
 * QueryAllBalancesResponse is the response type for the Query/AllBalances RPC
 * method.
 */
export interface QueryAllBalancesResponse {
    /** balances is the balances of all the coins. */
    balances: Coin[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
export interface QueryAllBalancesResponseProtoMsg {
    type_url: "/cosmos.bank.v1beta1.QueryAllBalancesResponse";
    value: Uint8Array;
}
export interface QueryAllBalancesResponseProtoMsg {
    type_url: "/cosmos.bank.v1beta1.QueryAllBalancesResponse";
    value: Uint8Array;
}
/**
 * QueryAllBalancesResponse is the response type for the Query/AllBalances RPC
 * method.
 */
export interface QueryAllBalancesResponseAmino {
    /** balances is the balances of all the coins. */
    balances: CoinAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QueryAllBalancesResponseAminoMsg {
    type: "cosmos-sdk/QueryAllBalancesResponse";
    value: QueryAllBalancesResponseAmino;
}
/**
 * QueryAllBalancesResponse is the response type for the Query/AllBalances RPC
 * method.
 */
export interface QueryAllBalancesResponseSDKType {
    balances: CoinSDKType[];
    pagination?: PageResponseSDKType;
}
/**
 * QuerySpendableBalancesRequest defines the gRPC request structure for querying
 * an account's spendable balances.
 *
 * Since: cosmos-sdk 0.46
 */
export interface QuerySpendableBalancesRequest {
    /** address is the address to query spendable balances for. */
    address: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
export interface QuerySpendableBalancesRequestProtoMsg {
    type_url: "/cosmos.bank.v1beta1.QuerySpendableBalancesRequest";
    value: Uint8Array;
}
export interface QuerySpendableBalancesRequestProtoMsg {
    type_url: "/cosmos.bank.v1beta1.QuerySpendableBalancesRequest";
    value: Uint8Array;
}
/**
 * QuerySpendableBalancesRequest defines the gRPC request structure for querying
 * an account's spendable balances.
 *
 * Since: cosmos-sdk 0.46
 */
export interface QuerySpendableBalancesRequestAmino {
    /** address is the address to query spendable balances for. */
    address: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
export interface QuerySpendableBalancesRequestAminoMsg {
    type: "cosmos-sdk/QuerySpendableBalancesRequest";
    value: QuerySpendableBalancesRequestAmino;
}
/**
 * QuerySpendableBalancesRequest defines the gRPC request structure for querying
 * an account's spendable balances.
 *
 * Since: cosmos-sdk 0.46
 */
export interface QuerySpendableBalancesRequestSDKType {
    address: string;
    pagination?: PageRequestSDKType;
}
/**
 * QuerySpendableBalancesResponse defines the gRPC response structure for querying
 * an account's spendable balances.
 *
 * Since: cosmos-sdk 0.46
 */
export interface QuerySpendableBalancesResponse {
    /** balances is the spendable balances of all the coins. */
    balances: Coin[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
export interface QuerySpendableBalancesResponseProtoMsg {
    type_url: "/cosmos.bank.v1beta1.QuerySpendableBalancesResponse";
    value: Uint8Array;
}
export interface QuerySpendableBalancesResponseProtoMsg {
    type_url: "/cosmos.bank.v1beta1.QuerySpendableBalancesResponse";
    value: Uint8Array;
}
/**
 * QuerySpendableBalancesResponse defines the gRPC response structure for querying
 * an account's spendable balances.
 *
 * Since: cosmos-sdk 0.46
 */
export interface QuerySpendableBalancesResponseAmino {
    /** balances is the spendable balances of all the coins. */
    balances: CoinAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QuerySpendableBalancesResponseAminoMsg {
    type: "cosmos-sdk/QuerySpendableBalancesResponse";
    value: QuerySpendableBalancesResponseAmino;
}
/**
 * QuerySpendableBalancesResponse defines the gRPC response structure for querying
 * an account's spendable balances.
 *
 * Since: cosmos-sdk 0.46
 */
export interface QuerySpendableBalancesResponseSDKType {
    balances: CoinSDKType[];
    pagination?: PageResponseSDKType;
}
/**
 * QuerySpendableBalanceByDenomRequest defines the gRPC request structure for
 * querying an account's spendable balance for a specific denom.
 *
 * Since: cosmos-sdk 0.47
 */
export interface QuerySpendableBalanceByDenomRequest {
    /** address is the address to query balances for. */
    address: string;
    /** denom is the coin denom to query balances for. */
    denom: string;
}
export interface QuerySpendableBalanceByDenomRequestProtoMsg {
    type_url: "/cosmos.bank.v1beta1.QuerySpendableBalanceByDenomRequest";
    value: Uint8Array;
}
export interface QuerySpendableBalanceByDenomRequestProtoMsg {
    type_url: "/cosmos.bank.v1beta1.QuerySpendableBalanceByDenomRequest";
    value: Uint8Array;
}
/**
 * QuerySpendableBalanceByDenomRequest defines the gRPC request structure for
 * querying an account's spendable balance for a specific denom.
 *
 * Since: cosmos-sdk 0.47
 */
export interface QuerySpendableBalanceByDenomRequestAmino {
    /** address is the address to query balances for. */
    address: string;
    /** denom is the coin denom to query balances for. */
    denom: string;
}
export interface QuerySpendableBalanceByDenomRequestAminoMsg {
    type: "cosmos-sdk/QuerySpendableBalanceByDenomRequest";
    value: QuerySpendableBalanceByDenomRequestAmino;
}
/**
 * QuerySpendableBalanceByDenomRequest defines the gRPC request structure for
 * querying an account's spendable balance for a specific denom.
 *
 * Since: cosmos-sdk 0.47
 */
export interface QuerySpendableBalanceByDenomRequestSDKType {
    address: string;
    denom: string;
}
/**
 * QuerySpendableBalanceByDenomResponse defines the gRPC response structure for
 * querying an account's spendable balance for a specific denom.
 *
 * Since: cosmos-sdk 0.47
 */
export interface QuerySpendableBalanceByDenomResponse {
    /** balance is the balance of the coin. */
    balance?: Coin;
}
export interface QuerySpendableBalanceByDenomResponseProtoMsg {
    type_url: "/cosmos.bank.v1beta1.QuerySpendableBalanceByDenomResponse";
    value: Uint8Array;
}
export interface QuerySpendableBalanceByDenomResponseProtoMsg {
    type_url: "/cosmos.bank.v1beta1.QuerySpendableBalanceByDenomResponse";
    value: Uint8Array;
}
/**
 * QuerySpendableBalanceByDenomResponse defines the gRPC response structure for
 * querying an account's spendable balance for a specific denom.
 *
 * Since: cosmos-sdk 0.47
 */
export interface QuerySpendableBalanceByDenomResponseAmino {
    /** balance is the balance of the coin. */
    balance?: CoinAmino;
}
export interface QuerySpendableBalanceByDenomResponseAminoMsg {
    type: "cosmos-sdk/QuerySpendableBalanceByDenomResponse";
    value: QuerySpendableBalanceByDenomResponseAmino;
}
/**
 * QuerySpendableBalanceByDenomResponse defines the gRPC response structure for
 * querying an account's spendable balance for a specific denom.
 *
 * Since: cosmos-sdk 0.47
 */
export interface QuerySpendableBalanceByDenomResponseSDKType {
    balance?: CoinSDKType;
}
/**
 * QueryTotalSupplyRequest is the request type for the Query/TotalSupply RPC
 * method.
 */
export interface QueryTotalSupplyRequest {
    /**
     * pagination defines an optional pagination for the request.
     *
     * Since: cosmos-sdk 0.43
     */
    pagination?: PageRequest;
}
export interface QueryTotalSupplyRequestProtoMsg {
    type_url: "/cosmos.bank.v1beta1.QueryTotalSupplyRequest";
    value: Uint8Array;
}
export interface QueryTotalSupplyRequestProtoMsg {
    type_url: "/cosmos.bank.v1beta1.QueryTotalSupplyRequest";
    value: Uint8Array;
}
/**
 * QueryTotalSupplyRequest is the request type for the Query/TotalSupply RPC
 * method.
 */
export interface QueryTotalSupplyRequestAmino {
    /**
     * pagination defines an optional pagination for the request.
     *
     * Since: cosmos-sdk 0.43
     */
    pagination?: PageRequestAmino;
}
export interface QueryTotalSupplyRequestAminoMsg {
    type: "cosmos-sdk/QueryTotalSupplyRequest";
    value: QueryTotalSupplyRequestAmino;
}
/**
 * QueryTotalSupplyRequest is the request type for the Query/TotalSupply RPC
 * method.
 */
export interface QueryTotalSupplyRequestSDKType {
    pagination?: PageRequestSDKType;
}
/**
 * QueryTotalSupplyResponse is the response type for the Query/TotalSupply RPC
 * method
 */
export interface QueryTotalSupplyResponse {
    /** supply is the supply of the coins */
    supply: Coin[];
    /**
     * pagination defines the pagination in the response.
     *
     * Since: cosmos-sdk 0.43
     */
    pagination?: PageResponse;
}
export interface QueryTotalSupplyResponseProtoMsg {
    type_url: "/cosmos.bank.v1beta1.QueryTotalSupplyResponse";
    value: Uint8Array;
}
export interface QueryTotalSupplyResponseProtoMsg {
    type_url: "/cosmos.bank.v1beta1.QueryTotalSupplyResponse";
    value: Uint8Array;
}
/**
 * QueryTotalSupplyResponse is the response type for the Query/TotalSupply RPC
 * method
 */
export interface QueryTotalSupplyResponseAmino {
    /** supply is the supply of the coins */
    supply: CoinAmino[];
    /**
     * pagination defines the pagination in the response.
     *
     * Since: cosmos-sdk 0.43
     */
    pagination?: PageResponseAmino;
}
export interface QueryTotalSupplyResponseAminoMsg {
    type: "cosmos-sdk/QueryTotalSupplyResponse";
    value: QueryTotalSupplyResponseAmino;
}
/**
 * QueryTotalSupplyResponse is the response type for the Query/TotalSupply RPC
 * method
 */
export interface QueryTotalSupplyResponseSDKType {
    supply: CoinSDKType[];
    pagination?: PageResponseSDKType;
}
/** QuerySupplyOfRequest is the request type for the Query/SupplyOf RPC method. */
export interface QuerySupplyOfRequest {
    /** denom is the coin denom to query balances for. */
    denom: string;
}
export interface QuerySupplyOfRequestProtoMsg {
    type_url: "/cosmos.bank.v1beta1.QuerySupplyOfRequest";
    value: Uint8Array;
}
export interface QuerySupplyOfRequestProtoMsg {
    type_url: "/cosmos.bank.v1beta1.QuerySupplyOfRequest";
    value: Uint8Array;
}
/** QuerySupplyOfRequest is the request type for the Query/SupplyOf RPC method. */
export interface QuerySupplyOfRequestAmino {
    /** denom is the coin denom to query balances for. */
    denom: string;
}
export interface QuerySupplyOfRequestAminoMsg {
    type: "cosmos-sdk/QuerySupplyOfRequest";
    value: QuerySupplyOfRequestAmino;
}
/** QuerySupplyOfRequest is the request type for the Query/SupplyOf RPC method. */
export interface QuerySupplyOfRequestSDKType {
    denom: string;
}
/** QuerySupplyOfResponse is the response type for the Query/SupplyOf RPC method. */
export interface QuerySupplyOfResponse {
    /** amount is the supply of the coin. */
    amount: Coin;
}
export interface QuerySupplyOfResponseProtoMsg {
    type_url: "/cosmos.bank.v1beta1.QuerySupplyOfResponse";
    value: Uint8Array;
}
export interface QuerySupplyOfResponseProtoMsg {
    type_url: "/cosmos.bank.v1beta1.QuerySupplyOfResponse";
    value: Uint8Array;
}
/** QuerySupplyOfResponse is the response type for the Query/SupplyOf RPC method. */
export interface QuerySupplyOfResponseAmino {
    /** amount is the supply of the coin. */
    amount?: CoinAmino;
}
export interface QuerySupplyOfResponseAminoMsg {
    type: "cosmos-sdk/QuerySupplyOfResponse";
    value: QuerySupplyOfResponseAmino;
}
/** QuerySupplyOfResponse is the response type for the Query/SupplyOf RPC method. */
export interface QuerySupplyOfResponseSDKType {
    amount: CoinSDKType;
}
/** QueryParamsRequest defines the request type for querying x/bank parameters. */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    type_url: "/cosmos.bank.v1beta1.QueryParamsRequest";
    value: Uint8Array;
}
export interface QueryParamsRequestProtoMsg {
    type_url: "/cosmos.bank.v1beta1.QueryParamsRequest";
    value: Uint8Array;
}
/** QueryParamsRequest defines the request type for querying x/bank parameters. */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "cosmos-sdk/QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
/** QueryParamsRequest defines the request type for querying x/bank parameters. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse defines the response type for querying x/bank parameters. */
export interface QueryParamsResponse {
    /** params provides the parameters of the bank module. */
    params: Params;
}
export interface QueryParamsResponseProtoMsg {
    type_url: "/cosmos.bank.v1beta1.QueryParamsResponse";
    value: Uint8Array;
}
export interface QueryParamsResponseProtoMsg {
    type_url: "/cosmos.bank.v1beta1.QueryParamsResponse";
    value: Uint8Array;
}
/** QueryParamsResponse defines the response type for querying x/bank parameters. */
export interface QueryParamsResponseAmino {
    /** params provides the parameters of the bank module. */
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "cosmos-sdk/QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
/** QueryParamsResponse defines the response type for querying x/bank parameters. */
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
}
/** QueryDenomsMetadataRequest is the request type for the Query/DenomsMetadata RPC method. */
export interface QueryDenomsMetadataRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
export interface QueryDenomsMetadataRequestProtoMsg {
    type_url: "/cosmos.bank.v1beta1.QueryDenomsMetadataRequest";
    value: Uint8Array;
}
export interface QueryDenomsMetadataRequestProtoMsg {
    type_url: "/cosmos.bank.v1beta1.QueryDenomsMetadataRequest";
    value: Uint8Array;
}
/** QueryDenomsMetadataRequest is the request type for the Query/DenomsMetadata RPC method. */
export interface QueryDenomsMetadataRequestAmino {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
export interface QueryDenomsMetadataRequestAminoMsg {
    type: "cosmos-sdk/QueryDenomsMetadataRequest";
    value: QueryDenomsMetadataRequestAmino;
}
/** QueryDenomsMetadataRequest is the request type for the Query/DenomsMetadata RPC method. */
export interface QueryDenomsMetadataRequestSDKType {
    pagination?: PageRequestSDKType;
}
/**
 * QueryDenomsMetadataResponse is the response type for the Query/DenomsMetadata RPC
 * method.
 */
export interface QueryDenomsMetadataResponse {
    /** metadata provides the client information for all the registered tokens. */
    metadatas: Metadata[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
export interface QueryDenomsMetadataResponseProtoMsg {
    type_url: "/cosmos.bank.v1beta1.QueryDenomsMetadataResponse";
    value: Uint8Array;
}
export interface QueryDenomsMetadataResponseProtoMsg {
    type_url: "/cosmos.bank.v1beta1.QueryDenomsMetadataResponse";
    value: Uint8Array;
}
/**
 * QueryDenomsMetadataResponse is the response type for the Query/DenomsMetadata RPC
 * method.
 */
export interface QueryDenomsMetadataResponseAmino {
    /** metadata provides the client information for all the registered tokens. */
    metadatas: MetadataAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QueryDenomsMetadataResponseAminoMsg {
    type: "cosmos-sdk/QueryDenomsMetadataResponse";
    value: QueryDenomsMetadataResponseAmino;
}
/**
 * QueryDenomsMetadataResponse is the response type for the Query/DenomsMetadata RPC
 * method.
 */
export interface QueryDenomsMetadataResponseSDKType {
    metadatas: MetadataSDKType[];
    pagination?: PageResponseSDKType;
}
/** QueryDenomMetadataRequest is the request type for the Query/DenomMetadata RPC method. */
export interface QueryDenomMetadataRequest {
    /** denom is the coin denom to query the metadata for. */
    denom: string;
}
export interface QueryDenomMetadataRequestProtoMsg {
    type_url: "/cosmos.bank.v1beta1.QueryDenomMetadataRequest";
    value: Uint8Array;
}
export interface QueryDenomMetadataRequestProtoMsg {
    type_url: "/cosmos.bank.v1beta1.QueryDenomMetadataRequest";
    value: Uint8Array;
}
/** QueryDenomMetadataRequest is the request type for the Query/DenomMetadata RPC method. */
export interface QueryDenomMetadataRequestAmino {
    /** denom is the coin denom to query the metadata for. */
    denom: string;
}
export interface QueryDenomMetadataRequestAminoMsg {
    type: "cosmos-sdk/QueryDenomMetadataRequest";
    value: QueryDenomMetadataRequestAmino;
}
/** QueryDenomMetadataRequest is the request type for the Query/DenomMetadata RPC method. */
export interface QueryDenomMetadataRequestSDKType {
    denom: string;
}
/**
 * QueryDenomMetadataResponse is the response type for the Query/DenomMetadata RPC
 * method.
 */
export interface QueryDenomMetadataResponse {
    /** metadata describes and provides all the client information for the requested token. */
    metadata: Metadata;
}
export interface QueryDenomMetadataResponseProtoMsg {
    type_url: "/cosmos.bank.v1beta1.QueryDenomMetadataResponse";
    value: Uint8Array;
}
export interface QueryDenomMetadataResponseProtoMsg {
    type_url: "/cosmos.bank.v1beta1.QueryDenomMetadataResponse";
    value: Uint8Array;
}
/**
 * QueryDenomMetadataResponse is the response type for the Query/DenomMetadata RPC
 * method.
 */
export interface QueryDenomMetadataResponseAmino {
    /** metadata describes and provides all the client information for the requested token. */
    metadata?: MetadataAmino;
}
export interface QueryDenomMetadataResponseAminoMsg {
    type: "cosmos-sdk/QueryDenomMetadataResponse";
    value: QueryDenomMetadataResponseAmino;
}
/**
 * QueryDenomMetadataResponse is the response type for the Query/DenomMetadata RPC
 * method.
 */
export interface QueryDenomMetadataResponseSDKType {
    metadata: MetadataSDKType;
}
/**
 * QueryDenomMetadataByQueryStringRequest is the request type for the Query/DenomMetadata RPC method.
 * Identical with QueryDenomMetadataRequest but receives denom as query string.
 */
export interface QueryDenomMetadataByQueryStringRequest {
    /** denom is the coin denom to query the metadata for. */
    denom: string;
}
export interface QueryDenomMetadataByQueryStringRequestProtoMsg {
    type_url: "/cosmos.bank.v1beta1.QueryDenomMetadataByQueryStringRequest";
    value: Uint8Array;
}
export interface QueryDenomMetadataByQueryStringRequestProtoMsg {
    type_url: "/cosmos.bank.v1beta1.QueryDenomMetadataByQueryStringRequest";
    value: Uint8Array;
}
/**
 * QueryDenomMetadataByQueryStringRequest is the request type for the Query/DenomMetadata RPC method.
 * Identical with QueryDenomMetadataRequest but receives denom as query string.
 */
export interface QueryDenomMetadataByQueryStringRequestAmino {
    /** denom is the coin denom to query the metadata for. */
    denom: string;
}
export interface QueryDenomMetadataByQueryStringRequestAminoMsg {
    type: "cosmos-sdk/QueryDenomMetadataByQueryStringRequest";
    value: QueryDenomMetadataByQueryStringRequestAmino;
}
/**
 * QueryDenomMetadataByQueryStringRequest is the request type for the Query/DenomMetadata RPC method.
 * Identical with QueryDenomMetadataRequest but receives denom as query string.
 */
export interface QueryDenomMetadataByQueryStringRequestSDKType {
    denom: string;
}
/**
 * QueryDenomMetadataByQueryStringResponse is the response type for the Query/DenomMetadata RPC
 * method. Identical with QueryDenomMetadataResponse but receives denom as query string in request.
 */
export interface QueryDenomMetadataByQueryStringResponse {
    /** metadata describes and provides all the client information for the requested token. */
    metadata: Metadata;
}
export interface QueryDenomMetadataByQueryStringResponseProtoMsg {
    type_url: "/cosmos.bank.v1beta1.QueryDenomMetadataByQueryStringResponse";
    value: Uint8Array;
}
export interface QueryDenomMetadataByQueryStringResponseProtoMsg {
    type_url: "/cosmos.bank.v1beta1.QueryDenomMetadataByQueryStringResponse";
    value: Uint8Array;
}
/**
 * QueryDenomMetadataByQueryStringResponse is the response type for the Query/DenomMetadata RPC
 * method. Identical with QueryDenomMetadataResponse but receives denom as query string in request.
 */
export interface QueryDenomMetadataByQueryStringResponseAmino {
    /** metadata describes and provides all the client information for the requested token. */
    metadata?: MetadataAmino;
}
export interface QueryDenomMetadataByQueryStringResponseAminoMsg {
    type: "cosmos-sdk/QueryDenomMetadataByQueryStringResponse";
    value: QueryDenomMetadataByQueryStringResponseAmino;
}
/**
 * QueryDenomMetadataByQueryStringResponse is the response type for the Query/DenomMetadata RPC
 * method. Identical with QueryDenomMetadataResponse but receives denom as query string in request.
 */
export interface QueryDenomMetadataByQueryStringResponseSDKType {
    metadata: MetadataSDKType;
}
/**
 * QueryDenomOwnersRequest defines the request type for the DenomOwners RPC query,
 * which queries for a paginated set of all account holders of a particular
 * denomination.
 */
export interface QueryDenomOwnersRequest {
    /** denom defines the coin denomination to query all account holders for. */
    denom: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
export interface QueryDenomOwnersRequestProtoMsg {
    type_url: "/cosmos.bank.v1beta1.QueryDenomOwnersRequest";
    value: Uint8Array;
}
export interface QueryDenomOwnersRequestProtoMsg {
    type_url: "/cosmos.bank.v1beta1.QueryDenomOwnersRequest";
    value: Uint8Array;
}
/**
 * QueryDenomOwnersRequest defines the request type for the DenomOwners RPC query,
 * which queries for a paginated set of all account holders of a particular
 * denomination.
 */
export interface QueryDenomOwnersRequestAmino {
    /** denom defines the coin denomination to query all account holders for. */
    denom: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
export interface QueryDenomOwnersRequestAminoMsg {
    type: "cosmos-sdk/QueryDenomOwnersRequest";
    value: QueryDenomOwnersRequestAmino;
}
/**
 * QueryDenomOwnersRequest defines the request type for the DenomOwners RPC query,
 * which queries for a paginated set of all account holders of a particular
 * denomination.
 */
export interface QueryDenomOwnersRequestSDKType {
    denom: string;
    pagination?: PageRequestSDKType;
}
/**
 * DenomOwner defines structure representing an account that owns or holds a
 * particular denominated token. It contains the account address and account
 * balance of the denominated token.
 *
 * Since: cosmos-sdk 0.46
 */
export interface DenomOwner {
    /** address defines the address that owns a particular denomination. */
    address: string;
    /** balance is the balance of the denominated coin for an account. */
    balance: Coin;
}
export interface DenomOwnerProtoMsg {
    type_url: "/cosmos.bank.v1beta1.DenomOwner";
    value: Uint8Array;
}
export interface DenomOwnerProtoMsg {
    type_url: "/cosmos.bank.v1beta1.DenomOwner";
    value: Uint8Array;
}
/**
 * DenomOwner defines structure representing an account that owns or holds a
 * particular denominated token. It contains the account address and account
 * balance of the denominated token.
 *
 * Since: cosmos-sdk 0.46
 */
export interface DenomOwnerAmino {
    /** address defines the address that owns a particular denomination. */
    address: string;
    /** balance is the balance of the denominated coin for an account. */
    balance?: CoinAmino;
}
export interface DenomOwnerAminoMsg {
    type: "cosmos-sdk/DenomOwner";
    value: DenomOwnerAmino;
}
/**
 * DenomOwner defines structure representing an account that owns or holds a
 * particular denominated token. It contains the account address and account
 * balance of the denominated token.
 *
 * Since: cosmos-sdk 0.46
 */
export interface DenomOwnerSDKType {
    address: string;
    balance: CoinSDKType;
}
/**
 * QueryDenomOwnersResponse defines the RPC response of a DenomOwners RPC query.
 *
 * Since: cosmos-sdk 0.46
 */
export interface QueryDenomOwnersResponse {
    denom_owners: DenomOwner[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
export interface QueryDenomOwnersResponseProtoMsg {
    type_url: "/cosmos.bank.v1beta1.QueryDenomOwnersResponse";
    value: Uint8Array;
}
export interface QueryDenomOwnersResponseProtoMsg {
    type_url: "/cosmos.bank.v1beta1.QueryDenomOwnersResponse";
    value: Uint8Array;
}
/**
 * QueryDenomOwnersResponse defines the RPC response of a DenomOwners RPC query.
 *
 * Since: cosmos-sdk 0.46
 */
export interface QueryDenomOwnersResponseAmino {
    denom_owners: DenomOwnerAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QueryDenomOwnersResponseAminoMsg {
    type: "cosmos-sdk/QueryDenomOwnersResponse";
    value: QueryDenomOwnersResponseAmino;
}
/**
 * QueryDenomOwnersResponse defines the RPC response of a DenomOwners RPC query.
 *
 * Since: cosmos-sdk 0.46
 */
export interface QueryDenomOwnersResponseSDKType {
    denom_owners: DenomOwnerSDKType[];
    pagination?: PageResponseSDKType;
}
/**
 * QuerySendEnabledRequest defines the RPC request for looking up SendEnabled entries.
 *
 * Since: cosmos-sdk 0.47
 */
export interface QuerySendEnabledRequest {
    /** denoms is the specific denoms you want look up. Leave empty to get all entries. */
    denoms: string[];
    /**
     * pagination defines an optional pagination for the request. This field is
     * only read if the denoms field is empty.
     */
    pagination?: PageRequest;
}
export interface QuerySendEnabledRequestProtoMsg {
    type_url: "/cosmos.bank.v1beta1.QuerySendEnabledRequest";
    value: Uint8Array;
}
export interface QuerySendEnabledRequestProtoMsg {
    type_url: "/cosmos.bank.v1beta1.QuerySendEnabledRequest";
    value: Uint8Array;
}
/**
 * QuerySendEnabledRequest defines the RPC request for looking up SendEnabled entries.
 *
 * Since: cosmos-sdk 0.47
 */
export interface QuerySendEnabledRequestAmino {
    /** denoms is the specific denoms you want look up. Leave empty to get all entries. */
    denoms: string[];
    /**
     * pagination defines an optional pagination for the request. This field is
     * only read if the denoms field is empty.
     */
    pagination?: PageRequestAmino;
}
export interface QuerySendEnabledRequestAminoMsg {
    type: "cosmos-sdk/QuerySendEnabledRequest";
    value: QuerySendEnabledRequestAmino;
}
/**
 * QuerySendEnabledRequest defines the RPC request for looking up SendEnabled entries.
 *
 * Since: cosmos-sdk 0.47
 */
export interface QuerySendEnabledRequestSDKType {
    denoms: string[];
    pagination?: PageRequestSDKType;
}
/**
 * QuerySendEnabledResponse defines the RPC response of a SendEnable query.
 *
 * Since: cosmos-sdk 0.47
 */
export interface QuerySendEnabledResponse {
    send_enabled: SendEnabled[];
    /**
     * pagination defines the pagination in the response. This field is only
     * populated if the denoms field in the request is empty.
     */
    pagination?: PageResponse;
}
export interface QuerySendEnabledResponseProtoMsg {
    type_url: "/cosmos.bank.v1beta1.QuerySendEnabledResponse";
    value: Uint8Array;
}
export interface QuerySendEnabledResponseProtoMsg {
    type_url: "/cosmos.bank.v1beta1.QuerySendEnabledResponse";
    value: Uint8Array;
}
/**
 * QuerySendEnabledResponse defines the RPC response of a SendEnable query.
 *
 * Since: cosmos-sdk 0.47
 */
export interface QuerySendEnabledResponseAmino {
    send_enabled: SendEnabledAmino[];
    /**
     * pagination defines the pagination in the response. This field is only
     * populated if the denoms field in the request is empty.
     */
    pagination?: PageResponseAmino;
}
export interface QuerySendEnabledResponseAminoMsg {
    type: "cosmos-sdk/QuerySendEnabledResponse";
    value: QuerySendEnabledResponseAmino;
}
/**
 * QuerySendEnabledResponse defines the RPC response of a SendEnable query.
 *
 * Since: cosmos-sdk 0.47
 */
export interface QuerySendEnabledResponseSDKType {
    send_enabled: SendEnabledSDKType[];
    pagination?: PageResponseSDKType;
}
export declare const QueryBalanceRequest: {
    typeUrl: string;
    encode(message: QueryBalanceRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryBalanceRequest;
    fromJSON(object: any): QueryBalanceRequest;
    toJSON(message: QueryBalanceRequest): unknown;
    fromPartial(object: Partial<QueryBalanceRequest>): QueryBalanceRequest;
    fromSDK(object: QueryBalanceRequestSDKType): QueryBalanceRequest;
    toSDK(message: QueryBalanceRequest): QueryBalanceRequestSDKType;
    fromAmino(object: QueryBalanceRequestAmino): QueryBalanceRequest;
    toAmino(message: QueryBalanceRequest): QueryBalanceRequestAmino;
    fromAminoMsg(object: QueryBalanceRequestAminoMsg): QueryBalanceRequest;
    toAminoMsg(message: QueryBalanceRequest): QueryBalanceRequestAminoMsg;
    fromProtoMsg(message: QueryBalanceRequestProtoMsg): QueryBalanceRequest;
    toProto(message: QueryBalanceRequest): Uint8Array;
    toProtoMsg(message: QueryBalanceRequest): QueryBalanceRequestProtoMsg;
};
export declare const QueryBalanceResponse: {
    typeUrl: string;
    encode(message: QueryBalanceResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryBalanceResponse;
    fromJSON(object: any): QueryBalanceResponse;
    toJSON(message: QueryBalanceResponse): unknown;
    fromPartial(object: Partial<QueryBalanceResponse>): QueryBalanceResponse;
    fromSDK(object: QueryBalanceResponseSDKType): QueryBalanceResponse;
    toSDK(message: QueryBalanceResponse): QueryBalanceResponseSDKType;
    fromAmino(object: QueryBalanceResponseAmino): QueryBalanceResponse;
    toAmino(message: QueryBalanceResponse): QueryBalanceResponseAmino;
    fromAminoMsg(object: QueryBalanceResponseAminoMsg): QueryBalanceResponse;
    toAminoMsg(message: QueryBalanceResponse): QueryBalanceResponseAminoMsg;
    fromProtoMsg(message: QueryBalanceResponseProtoMsg): QueryBalanceResponse;
    toProto(message: QueryBalanceResponse): Uint8Array;
    toProtoMsg(message: QueryBalanceResponse): QueryBalanceResponseProtoMsg;
};
export declare const QueryAllBalancesRequest: {
    typeUrl: string;
    encode(message: QueryAllBalancesRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAllBalancesRequest;
    fromJSON(object: any): QueryAllBalancesRequest;
    toJSON(message: QueryAllBalancesRequest): unknown;
    fromPartial(object: Partial<QueryAllBalancesRequest>): QueryAllBalancesRequest;
    fromSDK(object: QueryAllBalancesRequestSDKType): QueryAllBalancesRequest;
    toSDK(message: QueryAllBalancesRequest): QueryAllBalancesRequestSDKType;
    fromAmino(object: QueryAllBalancesRequestAmino): QueryAllBalancesRequest;
    toAmino(message: QueryAllBalancesRequest): QueryAllBalancesRequestAmino;
    fromAminoMsg(object: QueryAllBalancesRequestAminoMsg): QueryAllBalancesRequest;
    toAminoMsg(message: QueryAllBalancesRequest): QueryAllBalancesRequestAminoMsg;
    fromProtoMsg(message: QueryAllBalancesRequestProtoMsg): QueryAllBalancesRequest;
    toProto(message: QueryAllBalancesRequest): Uint8Array;
    toProtoMsg(message: QueryAllBalancesRequest): QueryAllBalancesRequestProtoMsg;
};
export declare const QueryAllBalancesResponse: {
    typeUrl: string;
    encode(message: QueryAllBalancesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAllBalancesResponse;
    fromJSON(object: any): QueryAllBalancesResponse;
    toJSON(message: QueryAllBalancesResponse): unknown;
    fromPartial(object: Partial<QueryAllBalancesResponse>): QueryAllBalancesResponse;
    fromSDK(object: QueryAllBalancesResponseSDKType): QueryAllBalancesResponse;
    toSDK(message: QueryAllBalancesResponse): QueryAllBalancesResponseSDKType;
    fromAmino(object: QueryAllBalancesResponseAmino): QueryAllBalancesResponse;
    toAmino(message: QueryAllBalancesResponse): QueryAllBalancesResponseAmino;
    fromAminoMsg(object: QueryAllBalancesResponseAminoMsg): QueryAllBalancesResponse;
    toAminoMsg(message: QueryAllBalancesResponse): QueryAllBalancesResponseAminoMsg;
    fromProtoMsg(message: QueryAllBalancesResponseProtoMsg): QueryAllBalancesResponse;
    toProto(message: QueryAllBalancesResponse): Uint8Array;
    toProtoMsg(message: QueryAllBalancesResponse): QueryAllBalancesResponseProtoMsg;
};
export declare const QuerySpendableBalancesRequest: {
    typeUrl: string;
    encode(message: QuerySpendableBalancesRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySpendableBalancesRequest;
    fromJSON(object: any): QuerySpendableBalancesRequest;
    toJSON(message: QuerySpendableBalancesRequest): unknown;
    fromPartial(object: Partial<QuerySpendableBalancesRequest>): QuerySpendableBalancesRequest;
    fromSDK(object: QuerySpendableBalancesRequestSDKType): QuerySpendableBalancesRequest;
    toSDK(message: QuerySpendableBalancesRequest): QuerySpendableBalancesRequestSDKType;
    fromAmino(object: QuerySpendableBalancesRequestAmino): QuerySpendableBalancesRequest;
    toAmino(message: QuerySpendableBalancesRequest): QuerySpendableBalancesRequestAmino;
    fromAminoMsg(object: QuerySpendableBalancesRequestAminoMsg): QuerySpendableBalancesRequest;
    toAminoMsg(message: QuerySpendableBalancesRequest): QuerySpendableBalancesRequestAminoMsg;
    fromProtoMsg(message: QuerySpendableBalancesRequestProtoMsg): QuerySpendableBalancesRequest;
    toProto(message: QuerySpendableBalancesRequest): Uint8Array;
    toProtoMsg(message: QuerySpendableBalancesRequest): QuerySpendableBalancesRequestProtoMsg;
};
export declare const QuerySpendableBalancesResponse: {
    typeUrl: string;
    encode(message: QuerySpendableBalancesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySpendableBalancesResponse;
    fromJSON(object: any): QuerySpendableBalancesResponse;
    toJSON(message: QuerySpendableBalancesResponse): unknown;
    fromPartial(object: Partial<QuerySpendableBalancesResponse>): QuerySpendableBalancesResponse;
    fromSDK(object: QuerySpendableBalancesResponseSDKType): QuerySpendableBalancesResponse;
    toSDK(message: QuerySpendableBalancesResponse): QuerySpendableBalancesResponseSDKType;
    fromAmino(object: QuerySpendableBalancesResponseAmino): QuerySpendableBalancesResponse;
    toAmino(message: QuerySpendableBalancesResponse): QuerySpendableBalancesResponseAmino;
    fromAminoMsg(object: QuerySpendableBalancesResponseAminoMsg): QuerySpendableBalancesResponse;
    toAminoMsg(message: QuerySpendableBalancesResponse): QuerySpendableBalancesResponseAminoMsg;
    fromProtoMsg(message: QuerySpendableBalancesResponseProtoMsg): QuerySpendableBalancesResponse;
    toProto(message: QuerySpendableBalancesResponse): Uint8Array;
    toProtoMsg(message: QuerySpendableBalancesResponse): QuerySpendableBalancesResponseProtoMsg;
};
export declare const QuerySpendableBalanceByDenomRequest: {
    typeUrl: string;
    encode(message: QuerySpendableBalanceByDenomRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySpendableBalanceByDenomRequest;
    fromJSON(object: any): QuerySpendableBalanceByDenomRequest;
    toJSON(message: QuerySpendableBalanceByDenomRequest): unknown;
    fromPartial(object: Partial<QuerySpendableBalanceByDenomRequest>): QuerySpendableBalanceByDenomRequest;
    fromSDK(object: QuerySpendableBalanceByDenomRequestSDKType): QuerySpendableBalanceByDenomRequest;
    toSDK(message: QuerySpendableBalanceByDenomRequest): QuerySpendableBalanceByDenomRequestSDKType;
    fromAmino(object: QuerySpendableBalanceByDenomRequestAmino): QuerySpendableBalanceByDenomRequest;
    toAmino(message: QuerySpendableBalanceByDenomRequest): QuerySpendableBalanceByDenomRequestAmino;
    fromAminoMsg(object: QuerySpendableBalanceByDenomRequestAminoMsg): QuerySpendableBalanceByDenomRequest;
    toAminoMsg(message: QuerySpendableBalanceByDenomRequest): QuerySpendableBalanceByDenomRequestAminoMsg;
    fromProtoMsg(message: QuerySpendableBalanceByDenomRequestProtoMsg): QuerySpendableBalanceByDenomRequest;
    toProto(message: QuerySpendableBalanceByDenomRequest): Uint8Array;
    toProtoMsg(message: QuerySpendableBalanceByDenomRequest): QuerySpendableBalanceByDenomRequestProtoMsg;
};
export declare const QuerySpendableBalanceByDenomResponse: {
    typeUrl: string;
    encode(message: QuerySpendableBalanceByDenomResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySpendableBalanceByDenomResponse;
    fromJSON(object: any): QuerySpendableBalanceByDenomResponse;
    toJSON(message: QuerySpendableBalanceByDenomResponse): unknown;
    fromPartial(object: Partial<QuerySpendableBalanceByDenomResponse>): QuerySpendableBalanceByDenomResponse;
    fromSDK(object: QuerySpendableBalanceByDenomResponseSDKType): QuerySpendableBalanceByDenomResponse;
    toSDK(message: QuerySpendableBalanceByDenomResponse): QuerySpendableBalanceByDenomResponseSDKType;
    fromAmino(object: QuerySpendableBalanceByDenomResponseAmino): QuerySpendableBalanceByDenomResponse;
    toAmino(message: QuerySpendableBalanceByDenomResponse): QuerySpendableBalanceByDenomResponseAmino;
    fromAminoMsg(object: QuerySpendableBalanceByDenomResponseAminoMsg): QuerySpendableBalanceByDenomResponse;
    toAminoMsg(message: QuerySpendableBalanceByDenomResponse): QuerySpendableBalanceByDenomResponseAminoMsg;
    fromProtoMsg(message: QuerySpendableBalanceByDenomResponseProtoMsg): QuerySpendableBalanceByDenomResponse;
    toProto(message: QuerySpendableBalanceByDenomResponse): Uint8Array;
    toProtoMsg(message: QuerySpendableBalanceByDenomResponse): QuerySpendableBalanceByDenomResponseProtoMsg;
};
export declare const QueryTotalSupplyRequest: {
    typeUrl: string;
    encode(message: QueryTotalSupplyRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalSupplyRequest;
    fromJSON(object: any): QueryTotalSupplyRequest;
    toJSON(message: QueryTotalSupplyRequest): unknown;
    fromPartial(object: Partial<QueryTotalSupplyRequest>): QueryTotalSupplyRequest;
    fromSDK(object: QueryTotalSupplyRequestSDKType): QueryTotalSupplyRequest;
    toSDK(message: QueryTotalSupplyRequest): QueryTotalSupplyRequestSDKType;
    fromAmino(object: QueryTotalSupplyRequestAmino): QueryTotalSupplyRequest;
    toAmino(message: QueryTotalSupplyRequest): QueryTotalSupplyRequestAmino;
    fromAminoMsg(object: QueryTotalSupplyRequestAminoMsg): QueryTotalSupplyRequest;
    toAminoMsg(message: QueryTotalSupplyRequest): QueryTotalSupplyRequestAminoMsg;
    fromProtoMsg(message: QueryTotalSupplyRequestProtoMsg): QueryTotalSupplyRequest;
    toProto(message: QueryTotalSupplyRequest): Uint8Array;
    toProtoMsg(message: QueryTotalSupplyRequest): QueryTotalSupplyRequestProtoMsg;
};
export declare const QueryTotalSupplyResponse: {
    typeUrl: string;
    encode(message: QueryTotalSupplyResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalSupplyResponse;
    fromJSON(object: any): QueryTotalSupplyResponse;
    toJSON(message: QueryTotalSupplyResponse): unknown;
    fromPartial(object: Partial<QueryTotalSupplyResponse>): QueryTotalSupplyResponse;
    fromSDK(object: QueryTotalSupplyResponseSDKType): QueryTotalSupplyResponse;
    toSDK(message: QueryTotalSupplyResponse): QueryTotalSupplyResponseSDKType;
    fromAmino(object: QueryTotalSupplyResponseAmino): QueryTotalSupplyResponse;
    toAmino(message: QueryTotalSupplyResponse): QueryTotalSupplyResponseAmino;
    fromAminoMsg(object: QueryTotalSupplyResponseAminoMsg): QueryTotalSupplyResponse;
    toAminoMsg(message: QueryTotalSupplyResponse): QueryTotalSupplyResponseAminoMsg;
    fromProtoMsg(message: QueryTotalSupplyResponseProtoMsg): QueryTotalSupplyResponse;
    toProto(message: QueryTotalSupplyResponse): Uint8Array;
    toProtoMsg(message: QueryTotalSupplyResponse): QueryTotalSupplyResponseProtoMsg;
};
export declare const QuerySupplyOfRequest: {
    typeUrl: string;
    encode(message: QuerySupplyOfRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySupplyOfRequest;
    fromJSON(object: any): QuerySupplyOfRequest;
    toJSON(message: QuerySupplyOfRequest): unknown;
    fromPartial(object: Partial<QuerySupplyOfRequest>): QuerySupplyOfRequest;
    fromSDK(object: QuerySupplyOfRequestSDKType): QuerySupplyOfRequest;
    toSDK(message: QuerySupplyOfRequest): QuerySupplyOfRequestSDKType;
    fromAmino(object: QuerySupplyOfRequestAmino): QuerySupplyOfRequest;
    toAmino(message: QuerySupplyOfRequest): QuerySupplyOfRequestAmino;
    fromAminoMsg(object: QuerySupplyOfRequestAminoMsg): QuerySupplyOfRequest;
    toAminoMsg(message: QuerySupplyOfRequest): QuerySupplyOfRequestAminoMsg;
    fromProtoMsg(message: QuerySupplyOfRequestProtoMsg): QuerySupplyOfRequest;
    toProto(message: QuerySupplyOfRequest): Uint8Array;
    toProtoMsg(message: QuerySupplyOfRequest): QuerySupplyOfRequestProtoMsg;
};
export declare const QuerySupplyOfResponse: {
    typeUrl: string;
    encode(message: QuerySupplyOfResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySupplyOfResponse;
    fromJSON(object: any): QuerySupplyOfResponse;
    toJSON(message: QuerySupplyOfResponse): unknown;
    fromPartial(object: Partial<QuerySupplyOfResponse>): QuerySupplyOfResponse;
    fromSDK(object: QuerySupplyOfResponseSDKType): QuerySupplyOfResponse;
    toSDK(message: QuerySupplyOfResponse): QuerySupplyOfResponseSDKType;
    fromAmino(object: QuerySupplyOfResponseAmino): QuerySupplyOfResponse;
    toAmino(message: QuerySupplyOfResponse): QuerySupplyOfResponseAmino;
    fromAminoMsg(object: QuerySupplyOfResponseAminoMsg): QuerySupplyOfResponse;
    toAminoMsg(message: QuerySupplyOfResponse): QuerySupplyOfResponseAminoMsg;
    fromProtoMsg(message: QuerySupplyOfResponseProtoMsg): QuerySupplyOfResponse;
    toProto(message: QuerySupplyOfResponse): Uint8Array;
    toProtoMsg(message: QuerySupplyOfResponse): QuerySupplyOfResponseProtoMsg;
};
export declare const QueryParamsRequest: {
    typeUrl: string;
    encode(_: QueryParamsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest;
    fromSDK(_: QueryParamsRequestSDKType): QueryParamsRequest;
    toSDK(_: QueryParamsRequest): QueryParamsRequestSDKType;
    fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest;
    toAmino(_: QueryParamsRequest): QueryParamsRequestAmino;
    fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest;
    toAminoMsg(message: QueryParamsRequest): QueryParamsRequestAminoMsg;
    fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest;
    toProto(message: QueryParamsRequest): Uint8Array;
    toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg;
};
export declare const QueryParamsResponse: {
    typeUrl: string;
    encode(message: QueryParamsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
    fromSDK(object: QueryParamsResponseSDKType): QueryParamsResponse;
    toSDK(message: QueryParamsResponse): QueryParamsResponseSDKType;
    fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse;
    toAmino(message: QueryParamsResponse): QueryParamsResponseAmino;
    fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse;
    toAminoMsg(message: QueryParamsResponse): QueryParamsResponseAminoMsg;
    fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse;
    toProto(message: QueryParamsResponse): Uint8Array;
    toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg;
};
export declare const QueryDenomsMetadataRequest: {
    typeUrl: string;
    encode(message: QueryDenomsMetadataRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomsMetadataRequest;
    fromJSON(object: any): QueryDenomsMetadataRequest;
    toJSON(message: QueryDenomsMetadataRequest): unknown;
    fromPartial(object: Partial<QueryDenomsMetadataRequest>): QueryDenomsMetadataRequest;
    fromSDK(object: QueryDenomsMetadataRequestSDKType): QueryDenomsMetadataRequest;
    toSDK(message: QueryDenomsMetadataRequest): QueryDenomsMetadataRequestSDKType;
    fromAmino(object: QueryDenomsMetadataRequestAmino): QueryDenomsMetadataRequest;
    toAmino(message: QueryDenomsMetadataRequest): QueryDenomsMetadataRequestAmino;
    fromAminoMsg(object: QueryDenomsMetadataRequestAminoMsg): QueryDenomsMetadataRequest;
    toAminoMsg(message: QueryDenomsMetadataRequest): QueryDenomsMetadataRequestAminoMsg;
    fromProtoMsg(message: QueryDenomsMetadataRequestProtoMsg): QueryDenomsMetadataRequest;
    toProto(message: QueryDenomsMetadataRequest): Uint8Array;
    toProtoMsg(message: QueryDenomsMetadataRequest): QueryDenomsMetadataRequestProtoMsg;
};
export declare const QueryDenomsMetadataResponse: {
    typeUrl: string;
    encode(message: QueryDenomsMetadataResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomsMetadataResponse;
    fromJSON(object: any): QueryDenomsMetadataResponse;
    toJSON(message: QueryDenomsMetadataResponse): unknown;
    fromPartial(object: Partial<QueryDenomsMetadataResponse>): QueryDenomsMetadataResponse;
    fromSDK(object: QueryDenomsMetadataResponseSDKType): QueryDenomsMetadataResponse;
    toSDK(message: QueryDenomsMetadataResponse): QueryDenomsMetadataResponseSDKType;
    fromAmino(object: QueryDenomsMetadataResponseAmino): QueryDenomsMetadataResponse;
    toAmino(message: QueryDenomsMetadataResponse): QueryDenomsMetadataResponseAmino;
    fromAminoMsg(object: QueryDenomsMetadataResponseAminoMsg): QueryDenomsMetadataResponse;
    toAminoMsg(message: QueryDenomsMetadataResponse): QueryDenomsMetadataResponseAminoMsg;
    fromProtoMsg(message: QueryDenomsMetadataResponseProtoMsg): QueryDenomsMetadataResponse;
    toProto(message: QueryDenomsMetadataResponse): Uint8Array;
    toProtoMsg(message: QueryDenomsMetadataResponse): QueryDenomsMetadataResponseProtoMsg;
};
export declare const QueryDenomMetadataRequest: {
    typeUrl: string;
    encode(message: QueryDenomMetadataRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomMetadataRequest;
    fromJSON(object: any): QueryDenomMetadataRequest;
    toJSON(message: QueryDenomMetadataRequest): unknown;
    fromPartial(object: Partial<QueryDenomMetadataRequest>): QueryDenomMetadataRequest;
    fromSDK(object: QueryDenomMetadataRequestSDKType): QueryDenomMetadataRequest;
    toSDK(message: QueryDenomMetadataRequest): QueryDenomMetadataRequestSDKType;
    fromAmino(object: QueryDenomMetadataRequestAmino): QueryDenomMetadataRequest;
    toAmino(message: QueryDenomMetadataRequest): QueryDenomMetadataRequestAmino;
    fromAminoMsg(object: QueryDenomMetadataRequestAminoMsg): QueryDenomMetadataRequest;
    toAminoMsg(message: QueryDenomMetadataRequest): QueryDenomMetadataRequestAminoMsg;
    fromProtoMsg(message: QueryDenomMetadataRequestProtoMsg): QueryDenomMetadataRequest;
    toProto(message: QueryDenomMetadataRequest): Uint8Array;
    toProtoMsg(message: QueryDenomMetadataRequest): QueryDenomMetadataRequestProtoMsg;
};
export declare const QueryDenomMetadataResponse: {
    typeUrl: string;
    encode(message: QueryDenomMetadataResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomMetadataResponse;
    fromJSON(object: any): QueryDenomMetadataResponse;
    toJSON(message: QueryDenomMetadataResponse): unknown;
    fromPartial(object: Partial<QueryDenomMetadataResponse>): QueryDenomMetadataResponse;
    fromSDK(object: QueryDenomMetadataResponseSDKType): QueryDenomMetadataResponse;
    toSDK(message: QueryDenomMetadataResponse): QueryDenomMetadataResponseSDKType;
    fromAmino(object: QueryDenomMetadataResponseAmino): QueryDenomMetadataResponse;
    toAmino(message: QueryDenomMetadataResponse): QueryDenomMetadataResponseAmino;
    fromAminoMsg(object: QueryDenomMetadataResponseAminoMsg): QueryDenomMetadataResponse;
    toAminoMsg(message: QueryDenomMetadataResponse): QueryDenomMetadataResponseAminoMsg;
    fromProtoMsg(message: QueryDenomMetadataResponseProtoMsg): QueryDenomMetadataResponse;
    toProto(message: QueryDenomMetadataResponse): Uint8Array;
    toProtoMsg(message: QueryDenomMetadataResponse): QueryDenomMetadataResponseProtoMsg;
};
export declare const QueryDenomMetadataByQueryStringRequest: {
    typeUrl: string;
    encode(message: QueryDenomMetadataByQueryStringRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomMetadataByQueryStringRequest;
    fromJSON(object: any): QueryDenomMetadataByQueryStringRequest;
    toJSON(message: QueryDenomMetadataByQueryStringRequest): unknown;
    fromPartial(object: Partial<QueryDenomMetadataByQueryStringRequest>): QueryDenomMetadataByQueryStringRequest;
    fromSDK(object: QueryDenomMetadataByQueryStringRequestSDKType): QueryDenomMetadataByQueryStringRequest;
    toSDK(message: QueryDenomMetadataByQueryStringRequest): QueryDenomMetadataByQueryStringRequestSDKType;
    fromAmino(object: QueryDenomMetadataByQueryStringRequestAmino): QueryDenomMetadataByQueryStringRequest;
    toAmino(message: QueryDenomMetadataByQueryStringRequest): QueryDenomMetadataByQueryStringRequestAmino;
    fromAminoMsg(object: QueryDenomMetadataByQueryStringRequestAminoMsg): QueryDenomMetadataByQueryStringRequest;
    toAminoMsg(message: QueryDenomMetadataByQueryStringRequest): QueryDenomMetadataByQueryStringRequestAminoMsg;
    fromProtoMsg(message: QueryDenomMetadataByQueryStringRequestProtoMsg): QueryDenomMetadataByQueryStringRequest;
    toProto(message: QueryDenomMetadataByQueryStringRequest): Uint8Array;
    toProtoMsg(message: QueryDenomMetadataByQueryStringRequest): QueryDenomMetadataByQueryStringRequestProtoMsg;
};
export declare const QueryDenomMetadataByQueryStringResponse: {
    typeUrl: string;
    encode(message: QueryDenomMetadataByQueryStringResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomMetadataByQueryStringResponse;
    fromJSON(object: any): QueryDenomMetadataByQueryStringResponse;
    toJSON(message: QueryDenomMetadataByQueryStringResponse): unknown;
    fromPartial(object: Partial<QueryDenomMetadataByQueryStringResponse>): QueryDenomMetadataByQueryStringResponse;
    fromSDK(object: QueryDenomMetadataByQueryStringResponseSDKType): QueryDenomMetadataByQueryStringResponse;
    toSDK(message: QueryDenomMetadataByQueryStringResponse): QueryDenomMetadataByQueryStringResponseSDKType;
    fromAmino(object: QueryDenomMetadataByQueryStringResponseAmino): QueryDenomMetadataByQueryStringResponse;
    toAmino(message: QueryDenomMetadataByQueryStringResponse): QueryDenomMetadataByQueryStringResponseAmino;
    fromAminoMsg(object: QueryDenomMetadataByQueryStringResponseAminoMsg): QueryDenomMetadataByQueryStringResponse;
    toAminoMsg(message: QueryDenomMetadataByQueryStringResponse): QueryDenomMetadataByQueryStringResponseAminoMsg;
    fromProtoMsg(message: QueryDenomMetadataByQueryStringResponseProtoMsg): QueryDenomMetadataByQueryStringResponse;
    toProto(message: QueryDenomMetadataByQueryStringResponse): Uint8Array;
    toProtoMsg(message: QueryDenomMetadataByQueryStringResponse): QueryDenomMetadataByQueryStringResponseProtoMsg;
};
export declare const QueryDenomOwnersRequest: {
    typeUrl: string;
    encode(message: QueryDenomOwnersRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomOwnersRequest;
    fromJSON(object: any): QueryDenomOwnersRequest;
    toJSON(message: QueryDenomOwnersRequest): unknown;
    fromPartial(object: Partial<QueryDenomOwnersRequest>): QueryDenomOwnersRequest;
    fromSDK(object: QueryDenomOwnersRequestSDKType): QueryDenomOwnersRequest;
    toSDK(message: QueryDenomOwnersRequest): QueryDenomOwnersRequestSDKType;
    fromAmino(object: QueryDenomOwnersRequestAmino): QueryDenomOwnersRequest;
    toAmino(message: QueryDenomOwnersRequest): QueryDenomOwnersRequestAmino;
    fromAminoMsg(object: QueryDenomOwnersRequestAminoMsg): QueryDenomOwnersRequest;
    toAminoMsg(message: QueryDenomOwnersRequest): QueryDenomOwnersRequestAminoMsg;
    fromProtoMsg(message: QueryDenomOwnersRequestProtoMsg): QueryDenomOwnersRequest;
    toProto(message: QueryDenomOwnersRequest): Uint8Array;
    toProtoMsg(message: QueryDenomOwnersRequest): QueryDenomOwnersRequestProtoMsg;
};
export declare const DenomOwner: {
    typeUrl: string;
    encode(message: DenomOwner, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): DenomOwner;
    fromJSON(object: any): DenomOwner;
    toJSON(message: DenomOwner): unknown;
    fromPartial(object: Partial<DenomOwner>): DenomOwner;
    fromSDK(object: DenomOwnerSDKType): DenomOwner;
    toSDK(message: DenomOwner): DenomOwnerSDKType;
    fromAmino(object: DenomOwnerAmino): DenomOwner;
    toAmino(message: DenomOwner): DenomOwnerAmino;
    fromAminoMsg(object: DenomOwnerAminoMsg): DenomOwner;
    toAminoMsg(message: DenomOwner): DenomOwnerAminoMsg;
    fromProtoMsg(message: DenomOwnerProtoMsg): DenomOwner;
    toProto(message: DenomOwner): Uint8Array;
    toProtoMsg(message: DenomOwner): DenomOwnerProtoMsg;
};
export declare const QueryDenomOwnersResponse: {
    typeUrl: string;
    encode(message: QueryDenomOwnersResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomOwnersResponse;
    fromJSON(object: any): QueryDenomOwnersResponse;
    toJSON(message: QueryDenomOwnersResponse): unknown;
    fromPartial(object: Partial<QueryDenomOwnersResponse>): QueryDenomOwnersResponse;
    fromSDK(object: QueryDenomOwnersResponseSDKType): QueryDenomOwnersResponse;
    toSDK(message: QueryDenomOwnersResponse): QueryDenomOwnersResponseSDKType;
    fromAmino(object: QueryDenomOwnersResponseAmino): QueryDenomOwnersResponse;
    toAmino(message: QueryDenomOwnersResponse): QueryDenomOwnersResponseAmino;
    fromAminoMsg(object: QueryDenomOwnersResponseAminoMsg): QueryDenomOwnersResponse;
    toAminoMsg(message: QueryDenomOwnersResponse): QueryDenomOwnersResponseAminoMsg;
    fromProtoMsg(message: QueryDenomOwnersResponseProtoMsg): QueryDenomOwnersResponse;
    toProto(message: QueryDenomOwnersResponse): Uint8Array;
    toProtoMsg(message: QueryDenomOwnersResponse): QueryDenomOwnersResponseProtoMsg;
};
export declare const QuerySendEnabledRequest: {
    typeUrl: string;
    encode(message: QuerySendEnabledRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySendEnabledRequest;
    fromJSON(object: any): QuerySendEnabledRequest;
    toJSON(message: QuerySendEnabledRequest): unknown;
    fromPartial(object: Partial<QuerySendEnabledRequest>): QuerySendEnabledRequest;
    fromSDK(object: QuerySendEnabledRequestSDKType): QuerySendEnabledRequest;
    toSDK(message: QuerySendEnabledRequest): QuerySendEnabledRequestSDKType;
    fromAmino(object: QuerySendEnabledRequestAmino): QuerySendEnabledRequest;
    toAmino(message: QuerySendEnabledRequest): QuerySendEnabledRequestAmino;
    fromAminoMsg(object: QuerySendEnabledRequestAminoMsg): QuerySendEnabledRequest;
    toAminoMsg(message: QuerySendEnabledRequest): QuerySendEnabledRequestAminoMsg;
    fromProtoMsg(message: QuerySendEnabledRequestProtoMsg): QuerySendEnabledRequest;
    toProto(message: QuerySendEnabledRequest): Uint8Array;
    toProtoMsg(message: QuerySendEnabledRequest): QuerySendEnabledRequestProtoMsg;
};
export declare const QuerySendEnabledResponse: {
    typeUrl: string;
    encode(message: QuerySendEnabledResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySendEnabledResponse;
    fromJSON(object: any): QuerySendEnabledResponse;
    toJSON(message: QuerySendEnabledResponse): unknown;
    fromPartial(object: Partial<QuerySendEnabledResponse>): QuerySendEnabledResponse;
    fromSDK(object: QuerySendEnabledResponseSDKType): QuerySendEnabledResponse;
    toSDK(message: QuerySendEnabledResponse): QuerySendEnabledResponseSDKType;
    fromAmino(object: QuerySendEnabledResponseAmino): QuerySendEnabledResponse;
    toAmino(message: QuerySendEnabledResponse): QuerySendEnabledResponseAmino;
    fromAminoMsg(object: QuerySendEnabledResponseAminoMsg): QuerySendEnabledResponse;
    toAminoMsg(message: QuerySendEnabledResponse): QuerySendEnabledResponseAminoMsg;
    fromProtoMsg(message: QuerySendEnabledResponseProtoMsg): QuerySendEnabledResponse;
    toProto(message: QuerySendEnabledResponse): Uint8Array;
    toProtoMsg(message: QuerySendEnabledResponse): QuerySendEnabledResponseProtoMsg;
};

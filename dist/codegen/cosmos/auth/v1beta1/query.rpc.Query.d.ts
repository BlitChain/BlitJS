import * as fm from "../../../grpc-gateway";
import { QueryAccountsRequest, QueryAccountsResponse, QueryAccountRequest, QueryAccountResponse, QueryAccountAddressByIDRequest, QueryAccountAddressByIDResponse, QueryParamsRequest, QueryParamsResponse, QueryModuleAccountsRequest, QueryModuleAccountsResponse, QueryModuleAccountByNameRequest, QueryModuleAccountByNameResponse, Bech32PrefixRequest, Bech32PrefixResponse, AddressBytesToStringRequest, AddressBytesToStringResponse, AddressStringToBytesRequest, AddressStringToBytesResponse, QueryAccountInfoRequest, QueryAccountInfoResponse } from "./query";
export declare class Query {
    /**
     * Accounts returns all the existing accounts.
     *
     * When called from another module, this query might consume a high amount of
     * gas if the pagination field is incorrectly set.
     *
     * Since: cosmos-sdk 0.43
     */
    static Accounts(request: QueryAccountsRequest, initRequest?: fm.InitReq): Promise<QueryAccountsResponse>;
    /** Account returns account details based on address. */
    static Account(request: QueryAccountRequest, initRequest?: fm.InitReq): Promise<QueryAccountResponse>;
    /**
     * AccountAddressByID returns account address based on account number.
     *
     * Since: cosmos-sdk 0.46.2
     */
    static AccountAddressByID(request: QueryAccountAddressByIDRequest, initRequest?: fm.InitReq): Promise<QueryAccountAddressByIDResponse>;
    /** Params queries all parameters. */
    static Params(request: QueryParamsRequest, initRequest?: fm.InitReq): Promise<QueryParamsResponse>;
    /**
     * ModuleAccounts returns all the existing module accounts.
     *
     * Since: cosmos-sdk 0.46
     */
    static ModuleAccounts(request: QueryModuleAccountsRequest, initRequest?: fm.InitReq): Promise<QueryModuleAccountsResponse>;
    /** ModuleAccountByName returns the module account info by module name */
    static ModuleAccountByName(request: QueryModuleAccountByNameRequest, initRequest?: fm.InitReq): Promise<QueryModuleAccountByNameResponse>;
    /**
     * Bech32Prefix queries bech32Prefix
     *
     * Since: cosmos-sdk 0.46
     */
    static Bech32Prefix(request: Bech32PrefixRequest, initRequest?: fm.InitReq): Promise<Bech32PrefixResponse>;
    /**
     * AddressBytesToString converts Account Address bytes to string
     *
     * Since: cosmos-sdk 0.46
     */
    static AddressBytesToString(request: AddressBytesToStringRequest, initRequest?: fm.InitReq): Promise<AddressBytesToStringResponse>;
    /**
     * AddressStringToBytes converts Address string to bytes
     *
     * Since: cosmos-sdk 0.46
     */
    static AddressStringToBytes(request: AddressStringToBytesRequest, initRequest?: fm.InitReq): Promise<AddressStringToBytesResponse>;
    /**
     * AccountInfo queries account info which is common to all account types.
     *
     * Since: cosmos-sdk 0.47
     */
    static AccountInfo(request: QueryAccountInfoRequest, initRequest?: fm.InitReq): Promise<QueryAccountInfoResponse>;
}
export declare class QueryClientImpl {
    private readonly url;
    constructor(url: string);
    /**
     * Accounts returns all the existing accounts.
     *
     * When called from another module, this query might consume a high amount of
     * gas if the pagination field is incorrectly set.
     *
     * Since: cosmos-sdk 0.43
     */
    Accounts(req: QueryAccountsRequest, headers?: HeadersInit): Promise<QueryAccountsResponse>;
    /** Account returns account details based on address. */
    Account(req: QueryAccountRequest, headers?: HeadersInit): Promise<QueryAccountResponse>;
    /**
     * AccountAddressByID returns account address based on account number.
     *
     * Since: cosmos-sdk 0.46.2
     */
    AccountAddressByID(req: QueryAccountAddressByIDRequest, headers?: HeadersInit): Promise<QueryAccountAddressByIDResponse>;
    /** Params queries all parameters. */
    Params(req: QueryParamsRequest, headers?: HeadersInit): Promise<QueryParamsResponse>;
    /**
     * ModuleAccounts returns all the existing module accounts.
     *
     * Since: cosmos-sdk 0.46
     */
    ModuleAccounts(req: QueryModuleAccountsRequest, headers?: HeadersInit): Promise<QueryModuleAccountsResponse>;
    /** ModuleAccountByName returns the module account info by module name */
    ModuleAccountByName(req: QueryModuleAccountByNameRequest, headers?: HeadersInit): Promise<QueryModuleAccountByNameResponse>;
    /**
     * Bech32Prefix queries bech32Prefix
     *
     * Since: cosmos-sdk 0.46
     */
    Bech32Prefix(req: Bech32PrefixRequest, headers?: HeadersInit): Promise<Bech32PrefixResponse>;
    /**
     * AddressBytesToString converts Account Address bytes to string
     *
     * Since: cosmos-sdk 0.46
     */
    AddressBytesToString(req: AddressBytesToStringRequest, headers?: HeadersInit): Promise<AddressBytesToStringResponse>;
    /**
     * AddressStringToBytes converts Address string to bytes
     *
     * Since: cosmos-sdk 0.46
     */
    AddressStringToBytes(req: AddressStringToBytesRequest, headers?: HeadersInit): Promise<AddressStringToBytesResponse>;
    /**
     * AccountInfo queries account info which is common to all account types.
     *
     * Since: cosmos-sdk 0.47
     */
    AccountInfo(req: QueryAccountInfoRequest, headers?: HeadersInit): Promise<QueryAccountInfoResponse>;
}

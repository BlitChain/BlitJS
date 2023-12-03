import * as fm from "../../../grpc-gateway";
import { QueryAccountsRequest, QueryAccountsResponse, QueryAccountRequest, QueryAccountResponse, QueryParamsRequest, QueryParamsResponse, QueryModuleAccountsRequest, QueryModuleAccountsResponse, Bech32PrefixRequest, Bech32PrefixResponse, AddressBytesToStringRequest, AddressBytesToStringResponse, AddressStringToBytesRequest, AddressStringToBytesResponse } from "./query";
export declare class Query {
    /**
     * Accounts returns all the existing accounts
     *
     * Since: cosmos-sdk 0.43
     */
    static Accounts(request: QueryAccountsRequest, initRequest?: fm.InitReq): Promise<QueryAccountsResponse>;
    /** Account returns account details based on address. */
    static Account(request: QueryAccountRequest, initRequest?: fm.InitReq): Promise<QueryAccountResponse>;
    /** Params queries all parameters. */
    static Params(request: QueryParamsRequest, initRequest?: fm.InitReq): Promise<QueryParamsResponse>;
    /** ModuleAccounts returns all the existing module accounts. */
    static ModuleAccounts(request: QueryModuleAccountsRequest, initRequest?: fm.InitReq): Promise<QueryModuleAccountsResponse>;
    /** Bech32 queries bech32Prefix */
    static Bech32Prefix(request: Bech32PrefixRequest, initRequest?: fm.InitReq): Promise<Bech32PrefixResponse>;
    /** AddressBytesToString converts Account Address bytes to string */
    static AddressBytesToString(request: AddressBytesToStringRequest, initRequest?: fm.InitReq): Promise<AddressBytesToStringResponse>;
    /** AddressStringToBytes converts Address string to bytes */
    static AddressStringToBytes(request: AddressStringToBytesRequest, initRequest?: fm.InitReq): Promise<AddressStringToBytesResponse>;
}
export declare class QueryClientImpl {
    private readonly url;
    constructor(url: string);
    /**
     * Accounts returns all the existing accounts
     *
     * Since: cosmos-sdk 0.43
     */
    Accounts(req: QueryAccountsRequest, headers?: HeadersInit): Promise<QueryAccountsResponse>;
    /** Account returns account details based on address. */
    Account(req: QueryAccountRequest, headers?: HeadersInit): Promise<QueryAccountResponse>;
    /** Params queries all parameters. */
    Params(req: QueryParamsRequest, headers?: HeadersInit): Promise<QueryParamsResponse>;
    /** ModuleAccounts returns all the existing module accounts. */
    ModuleAccounts(req: QueryModuleAccountsRequest, headers?: HeadersInit): Promise<QueryModuleAccountsResponse>;
    /** Bech32 queries bech32Prefix */
    Bech32Prefix(req: Bech32PrefixRequest, headers?: HeadersInit): Promise<Bech32PrefixResponse>;
    /** AddressBytesToString converts Account Address bytes to string */
    AddressBytesToString(req: AddressBytesToStringRequest, headers?: HeadersInit): Promise<AddressBytesToStringResponse>;
    /** AddressStringToBytes converts Address string to bytes */
    AddressStringToBytes(req: AddressStringToBytesRequest, headers?: HeadersInit): Promise<AddressStringToBytesResponse>;
}

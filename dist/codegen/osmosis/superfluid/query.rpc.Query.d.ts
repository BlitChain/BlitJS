import * as fm from "../../grpc-gateway";
import { QueryParamsRequest, QueryParamsResponse, AssetTypeRequest, AssetTypeResponse, AllAssetsRequest, AllAssetsResponse, AssetMultiplierRequest, AssetMultiplierResponse, AllIntermediaryAccountsRequest, AllIntermediaryAccountsResponse, ConnectedIntermediaryAccountRequest, ConnectedIntermediaryAccountResponse, QueryTotalDelegationByValidatorForDenomRequest, QueryTotalDelegationByValidatorForDenomResponse, TotalSuperfluidDelegationsRequest, TotalSuperfluidDelegationsResponse, SuperfluidDelegationAmountRequest, SuperfluidDelegationAmountResponse, SuperfluidDelegationsByDelegatorRequest, SuperfluidDelegationsByDelegatorResponse, SuperfluidUndelegationsByDelegatorRequest, SuperfluidUndelegationsByDelegatorResponse, SuperfluidDelegationsByValidatorDenomRequest, SuperfluidDelegationsByValidatorDenomResponse, EstimateSuperfluidDelegatedAmountByValidatorDenomRequest, EstimateSuperfluidDelegatedAmountByValidatorDenomResponse, QueryTotalDelegationByDelegatorRequest, QueryTotalDelegationByDelegatorResponse, QueryUnpoolWhitelistRequest, QueryUnpoolWhitelistResponse } from "./query";
export declare class Query {
    /** Params returns the total set of superfluid parameters. */
    static Params(request: QueryParamsRequest, initRequest?: fm.InitReq): Promise<QueryParamsResponse>;
    /**
     * Returns superfluid asset type, whether if it's a native asset or an lp
     * share.
     */
    static AssetType(request: AssetTypeRequest, initRequest?: fm.InitReq): Promise<AssetTypeResponse>;
    /** Returns all registered superfluid assets. */
    static AllAssets(request: AllAssetsRequest, initRequest?: fm.InitReq): Promise<AllAssetsResponse>;
    /** Returns the osmo equivalent multiplier used in the most recent epoch. */
    static AssetMultiplier(request: AssetMultiplierRequest, initRequest?: fm.InitReq): Promise<AssetMultiplierResponse>;
    /** Returns all superfluid intermediary accounts. */
    static AllIntermediaryAccounts(request: AllIntermediaryAccountsRequest, initRequest?: fm.InitReq): Promise<AllIntermediaryAccountsResponse>;
    /** Returns intermediary account connected to a superfluid staked lock by id */
    static ConnectedIntermediaryAccount(request: ConnectedIntermediaryAccountRequest, initRequest?: fm.InitReq): Promise<ConnectedIntermediaryAccountResponse>;
    /** Returns the amount of delegations of specific denom for all validators */
    static TotalDelegationByValidatorForDenom(request: QueryTotalDelegationByValidatorForDenomRequest, initRequest?: fm.InitReq): Promise<QueryTotalDelegationByValidatorForDenomResponse>;
    /**
     * Returns the total amount of osmo superfluidly staked.
     * Response is denominated in uosmo.
     */
    static TotalSuperfluidDelegations(request: TotalSuperfluidDelegationsRequest, initRequest?: fm.InitReq): Promise<TotalSuperfluidDelegationsResponse>;
    /**
     * Returns the coins superfluid delegated for the delegator, validator, denom
     * triplet
     */
    static SuperfluidDelegationAmount(request: SuperfluidDelegationAmountRequest, initRequest?: fm.InitReq): Promise<SuperfluidDelegationAmountResponse>;
    /** Returns all the delegated superfluid poistions for a specific delegator. */
    static SuperfluidDelegationsByDelegator(request: SuperfluidDelegationsByDelegatorRequest, initRequest?: fm.InitReq): Promise<SuperfluidDelegationsByDelegatorResponse>;
    /** Returns all the undelegating superfluid poistions for a specific delegator. */
    static SuperfluidUndelegationsByDelegator(request: SuperfluidUndelegationsByDelegatorRequest, initRequest?: fm.InitReq): Promise<SuperfluidUndelegationsByDelegatorResponse>;
    /**
     * Returns all the superfluid positions of a specific denom delegated to one
     * validator
     */
    static SuperfluidDelegationsByValidatorDenom(request: SuperfluidDelegationsByValidatorDenomRequest, initRequest?: fm.InitReq): Promise<SuperfluidDelegationsByValidatorDenomResponse>;
    /**
     * Returns the amount of a specific denom delegated to a specific validator
     * This is labeled an estimate, because the way it calculates the amount can
     * lead rounding errors from the true delegated amount
     */
    static EstimateSuperfluidDelegatedAmountByValidatorDenom(request: EstimateSuperfluidDelegatedAmountByValidatorDenomRequest, initRequest?: fm.InitReq): Promise<EstimateSuperfluidDelegatedAmountByValidatorDenomResponse>;
    /** Returns the specified delegations for a specific delegator */
    static TotalDelegationByDelegator(request: QueryTotalDelegationByDelegatorRequest, initRequest?: fm.InitReq): Promise<QueryTotalDelegationByDelegatorResponse>;
    /** Returns a list of whitelisted pool ids to unpool. */
    static UnpoolWhitelist(request: QueryUnpoolWhitelistRequest, initRequest?: fm.InitReq): Promise<QueryUnpoolWhitelistResponse>;
}
export declare class QueryClientImpl {
    private readonly url;
    constructor(url: string);
    /** Params returns the total set of superfluid parameters. */
    Params(req: QueryParamsRequest, headers?: HeadersInit): Promise<QueryParamsResponse>;
    /**
     * Returns superfluid asset type, whether if it's a native asset or an lp
     * share.
     */
    AssetType(req: AssetTypeRequest, headers?: HeadersInit): Promise<AssetTypeResponse>;
    /** Returns all registered superfluid assets. */
    AllAssets(req: AllAssetsRequest, headers?: HeadersInit): Promise<AllAssetsResponse>;
    /** Returns the osmo equivalent multiplier used in the most recent epoch. */
    AssetMultiplier(req: AssetMultiplierRequest, headers?: HeadersInit): Promise<AssetMultiplierResponse>;
    /** Returns all superfluid intermediary accounts. */
    AllIntermediaryAccounts(req: AllIntermediaryAccountsRequest, headers?: HeadersInit): Promise<AllIntermediaryAccountsResponse>;
    /** Returns intermediary account connected to a superfluid staked lock by id */
    ConnectedIntermediaryAccount(req: ConnectedIntermediaryAccountRequest, headers?: HeadersInit): Promise<ConnectedIntermediaryAccountResponse>;
    /** Returns the amount of delegations of specific denom for all validators */
    TotalDelegationByValidatorForDenom(req: QueryTotalDelegationByValidatorForDenomRequest, headers?: HeadersInit): Promise<QueryTotalDelegationByValidatorForDenomResponse>;
    /**
     * Returns the total amount of osmo superfluidly staked.
     * Response is denominated in uosmo.
     */
    TotalSuperfluidDelegations(req: TotalSuperfluidDelegationsRequest, headers?: HeadersInit): Promise<TotalSuperfluidDelegationsResponse>;
    /**
     * Returns the coins superfluid delegated for the delegator, validator, denom
     * triplet
     */
    SuperfluidDelegationAmount(req: SuperfluidDelegationAmountRequest, headers?: HeadersInit): Promise<SuperfluidDelegationAmountResponse>;
    /** Returns all the delegated superfluid poistions for a specific delegator. */
    SuperfluidDelegationsByDelegator(req: SuperfluidDelegationsByDelegatorRequest, headers?: HeadersInit): Promise<SuperfluidDelegationsByDelegatorResponse>;
    /** Returns all the undelegating superfluid poistions for a specific delegator. */
    SuperfluidUndelegationsByDelegator(req: SuperfluidUndelegationsByDelegatorRequest, headers?: HeadersInit): Promise<SuperfluidUndelegationsByDelegatorResponse>;
    /**
     * Returns all the superfluid positions of a specific denom delegated to one
     * validator
     */
    SuperfluidDelegationsByValidatorDenom(req: SuperfluidDelegationsByValidatorDenomRequest, headers?: HeadersInit): Promise<SuperfluidDelegationsByValidatorDenomResponse>;
    /**
     * Returns the amount of a specific denom delegated to a specific validator
     * This is labeled an estimate, because the way it calculates the amount can
     * lead rounding errors from the true delegated amount
     */
    EstimateSuperfluidDelegatedAmountByValidatorDenom(req: EstimateSuperfluidDelegatedAmountByValidatorDenomRequest, headers?: HeadersInit): Promise<EstimateSuperfluidDelegatedAmountByValidatorDenomResponse>;
    /** Returns the specified delegations for a specific delegator */
    TotalDelegationByDelegator(req: QueryTotalDelegationByDelegatorRequest, headers?: HeadersInit): Promise<QueryTotalDelegationByDelegatorResponse>;
    /** Returns a list of whitelisted pool ids to unpool. */
    UnpoolWhitelist(req: QueryUnpoolWhitelistRequest, headers?: HeadersInit): Promise<QueryUnpoolWhitelistResponse>;
}

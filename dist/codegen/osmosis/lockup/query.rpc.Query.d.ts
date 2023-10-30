import * as fm from "../../grpc-gateway";
import { ModuleBalanceRequest, ModuleBalanceResponse, ModuleLockedAmountRequest, ModuleLockedAmountResponse, AccountUnlockableCoinsRequest, AccountUnlockableCoinsResponse, AccountUnlockingCoinsRequest, AccountUnlockingCoinsResponse, AccountLockedCoinsRequest, AccountLockedCoinsResponse, AccountLockedPastTimeRequest, AccountLockedPastTimeResponse, AccountLockedPastTimeNotUnlockingOnlyRequest, AccountLockedPastTimeNotUnlockingOnlyResponse, AccountUnlockedBeforeTimeRequest, AccountUnlockedBeforeTimeResponse, AccountLockedPastTimeDenomRequest, AccountLockedPastTimeDenomResponse, LockedDenomRequest, LockedDenomResponse, LockedRequest, LockedResponse, SyntheticLockupsByLockupIDRequest, SyntheticLockupsByLockupIDResponse, AccountLockedLongerDurationRequest, AccountLockedLongerDurationResponse, AccountLockedDurationRequest, AccountLockedDurationResponse, AccountLockedLongerDurationNotUnlockingOnlyRequest, AccountLockedLongerDurationNotUnlockingOnlyResponse, AccountLockedLongerDurationDenomRequest, AccountLockedLongerDurationDenomResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
export declare class Query {
    /** Return full balance of the module */
    static ModuleBalance(request: ModuleBalanceRequest, initRequest?: fm.InitReq): Promise<ModuleBalanceResponse>;
    /** Return locked balance of the module */
    static ModuleLockedAmount(request: ModuleLockedAmountRequest, initRequest?: fm.InitReq): Promise<ModuleLockedAmountResponse>;
    /** Returns unlockable coins which are not withdrawn yet */
    static AccountUnlockableCoins(request: AccountUnlockableCoinsRequest, initRequest?: fm.InitReq): Promise<AccountUnlockableCoinsResponse>;
    /** Returns unlocking coins */
    static AccountUnlockingCoins(request: AccountUnlockingCoinsRequest, initRequest?: fm.InitReq): Promise<AccountUnlockingCoinsResponse>;
    /** Return a locked coins that can't be withdrawn */
    static AccountLockedCoins(request: AccountLockedCoinsRequest, initRequest?: fm.InitReq): Promise<AccountLockedCoinsResponse>;
    /** Returns locked records of an account with unlock time beyond timestamp */
    static AccountLockedPastTime(request: AccountLockedPastTimeRequest, initRequest?: fm.InitReq): Promise<AccountLockedPastTimeResponse>;
    /**
     * Returns locked records of an account with unlock time beyond timestamp
     * excluding tokens started unlocking
     */
    static AccountLockedPastTimeNotUnlockingOnly(request: AccountLockedPastTimeNotUnlockingOnlyRequest, initRequest?: fm.InitReq): Promise<AccountLockedPastTimeNotUnlockingOnlyResponse>;
    /** Returns unlocked records with unlock time before timestamp */
    static AccountUnlockedBeforeTime(request: AccountUnlockedBeforeTimeRequest, initRequest?: fm.InitReq): Promise<AccountUnlockedBeforeTimeResponse>;
    /** Returns lock records by address, timestamp, denom */
    static AccountLockedPastTimeDenom(request: AccountLockedPastTimeDenomRequest, initRequest?: fm.InitReq): Promise<AccountLockedPastTimeDenomResponse>;
    /** Returns total locked per denom with longer past given time */
    static LockedDenom(request: LockedDenomRequest, initRequest?: fm.InitReq): Promise<LockedDenomResponse>;
    /** Returns lock record by id */
    static LockedByID(request: LockedRequest, initRequest?: fm.InitReq): Promise<LockedResponse>;
    /** Returns synthetic lockups by native lockup id */
    static SyntheticLockupsByLockupID(request: SyntheticLockupsByLockupIDRequest, initRequest?: fm.InitReq): Promise<SyntheticLockupsByLockupIDResponse>;
    /** Returns account locked records with longer duration */
    static AccountLockedLongerDuration(request: AccountLockedLongerDurationRequest, initRequest?: fm.InitReq): Promise<AccountLockedLongerDurationResponse>;
    /** Returns account locked records with a specific duration */
    static AccountLockedDuration(request: AccountLockedDurationRequest, initRequest?: fm.InitReq): Promise<AccountLockedDurationResponse>;
    /**
     * Returns account locked records with longer duration excluding tokens
     * started unlocking
     */
    static AccountLockedLongerDurationNotUnlockingOnly(request: AccountLockedLongerDurationNotUnlockingOnlyRequest, initRequest?: fm.InitReq): Promise<AccountLockedLongerDurationNotUnlockingOnlyResponse>;
    /** Returns account's locked records for a denom with longer duration */
    static AccountLockedLongerDurationDenom(request: AccountLockedLongerDurationDenomRequest, initRequest?: fm.InitReq): Promise<AccountLockedLongerDurationDenomResponse>;
    /** Params returns lockup params. */
    static Params(request: QueryParamsRequest, initRequest?: fm.InitReq): Promise<QueryParamsResponse>;
}
export declare class QueryClientImpl {
    private readonly url;
    constructor(url: string);
    /** Return full balance of the module */
    ModuleBalance(req: ModuleBalanceRequest, headers?: HeadersInit): Promise<ModuleBalanceResponse>;
    /** Return locked balance of the module */
    ModuleLockedAmount(req: ModuleLockedAmountRequest, headers?: HeadersInit): Promise<ModuleLockedAmountResponse>;
    /** Returns unlockable coins which are not withdrawn yet */
    AccountUnlockableCoins(req: AccountUnlockableCoinsRequest, headers?: HeadersInit): Promise<AccountUnlockableCoinsResponse>;
    /** Returns unlocking coins */
    AccountUnlockingCoins(req: AccountUnlockingCoinsRequest, headers?: HeadersInit): Promise<AccountUnlockingCoinsResponse>;
    /** Return a locked coins that can't be withdrawn */
    AccountLockedCoins(req: AccountLockedCoinsRequest, headers?: HeadersInit): Promise<AccountLockedCoinsResponse>;
    /** Returns locked records of an account with unlock time beyond timestamp */
    AccountLockedPastTime(req: AccountLockedPastTimeRequest, headers?: HeadersInit): Promise<AccountLockedPastTimeResponse>;
    /**
     * Returns locked records of an account with unlock time beyond timestamp
     * excluding tokens started unlocking
     */
    AccountLockedPastTimeNotUnlockingOnly(req: AccountLockedPastTimeNotUnlockingOnlyRequest, headers?: HeadersInit): Promise<AccountLockedPastTimeNotUnlockingOnlyResponse>;
    /** Returns unlocked records with unlock time before timestamp */
    AccountUnlockedBeforeTime(req: AccountUnlockedBeforeTimeRequest, headers?: HeadersInit): Promise<AccountUnlockedBeforeTimeResponse>;
    /** Returns lock records by address, timestamp, denom */
    AccountLockedPastTimeDenom(req: AccountLockedPastTimeDenomRequest, headers?: HeadersInit): Promise<AccountLockedPastTimeDenomResponse>;
    /** Returns total locked per denom with longer past given time */
    LockedDenom(req: LockedDenomRequest, headers?: HeadersInit): Promise<LockedDenomResponse>;
    /** Returns lock record by id */
    LockedByID(req: LockedRequest, headers?: HeadersInit): Promise<LockedResponse>;
    /** Returns synthetic lockups by native lockup id */
    SyntheticLockupsByLockupID(req: SyntheticLockupsByLockupIDRequest, headers?: HeadersInit): Promise<SyntheticLockupsByLockupIDResponse>;
    /** Returns account locked records with longer duration */
    AccountLockedLongerDuration(req: AccountLockedLongerDurationRequest, headers?: HeadersInit): Promise<AccountLockedLongerDurationResponse>;
    /** Returns account locked records with a specific duration */
    AccountLockedDuration(req: AccountLockedDurationRequest, headers?: HeadersInit): Promise<AccountLockedDurationResponse>;
    /**
     * Returns account locked records with longer duration excluding tokens
     * started unlocking
     */
    AccountLockedLongerDurationNotUnlockingOnly(req: AccountLockedLongerDurationNotUnlockingOnlyRequest, headers?: HeadersInit): Promise<AccountLockedLongerDurationNotUnlockingOnlyResponse>;
    /** Returns account's locked records for a denom with longer duration */
    AccountLockedLongerDurationDenom(req: AccountLockedLongerDurationDenomRequest, headers?: HeadersInit): Promise<AccountLockedLongerDurationDenomResponse>;
    /** Params returns lockup params. */
    Params(req: QueryParamsRequest, headers?: HeadersInit): Promise<QueryParamsResponse>;
}

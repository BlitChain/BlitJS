//@ts-nocheck
import * as fm from "../../grpc-gateway";
import { ModuleBalanceRequest, ModuleBalanceResponse, ModuleLockedAmountRequest, ModuleLockedAmountResponse, AccountUnlockableCoinsRequest, AccountUnlockableCoinsResponse, AccountUnlockingCoinsRequest, AccountUnlockingCoinsResponse, AccountLockedCoinsRequest, AccountLockedCoinsResponse, AccountLockedPastTimeRequest, AccountLockedPastTimeResponse, AccountLockedPastTimeNotUnlockingOnlyRequest, AccountLockedPastTimeNotUnlockingOnlyResponse, AccountUnlockedBeforeTimeRequest, AccountUnlockedBeforeTimeResponse, AccountLockedPastTimeDenomRequest, AccountLockedPastTimeDenomResponse, LockedDenomRequest, LockedDenomResponse, LockedRequest, LockedResponse, SyntheticLockupsByLockupIDRequest, SyntheticLockupsByLockupIDResponse, AccountLockedLongerDurationRequest, AccountLockedLongerDurationResponse, AccountLockedDurationRequest, AccountLockedDurationResponse, AccountLockedLongerDurationNotUnlockingOnlyRequest, AccountLockedLongerDurationNotUnlockingOnlyResponse, AccountLockedLongerDurationDenomRequest, AccountLockedLongerDurationDenomResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
export class Query {
  /** Return full balance of the module */
  static ModuleBalance(request: ModuleBalanceRequest, initRequest?: fm.InitReq): Promise<ModuleBalanceResponse> {
    return fm.fetchReq(`/osmosis/lockup/v1beta1/module_balance?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Return locked balance of the module */
  static ModuleLockedAmount(request: ModuleLockedAmountRequest, initRequest?: fm.InitReq): Promise<ModuleLockedAmountResponse> {
    return fm.fetchReq(`/osmosis/lockup/v1beta1/module_locked_amount?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Returns unlockable coins which are not withdrawn yet */
  static AccountUnlockableCoins(request: AccountUnlockableCoinsRequest, initRequest?: fm.InitReq): Promise<AccountUnlockableCoinsResponse> {
    return fm.fetchReq(`/osmosis/lockup/v1beta1/account_unlockable_coins/${request["owner"]}?${fm.renderURLSearchParams({
      ...request
    }, ["owner"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Returns unlocking coins */
  static AccountUnlockingCoins(request: AccountUnlockingCoinsRequest, initRequest?: fm.InitReq): Promise<AccountUnlockingCoinsResponse> {
    return fm.fetchReq(`/osmosis/lockup/v1beta1/account_unlocking_coins/${request["owner"]}?${fm.renderURLSearchParams({
      ...request
    }, ["owner"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Return a locked coins that can't be withdrawn */
  static AccountLockedCoins(request: AccountLockedCoinsRequest, initRequest?: fm.InitReq): Promise<AccountLockedCoinsResponse> {
    return fm.fetchReq(`/osmosis/lockup/v1beta1/account_locked_coins/${request["owner"]}?${fm.renderURLSearchParams({
      ...request
    }, ["owner"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Returns locked records of an account with unlock time beyond timestamp */
  static AccountLockedPastTime(request: AccountLockedPastTimeRequest, initRequest?: fm.InitReq): Promise<AccountLockedPastTimeResponse> {
    return fm.fetchReq(`/osmosis/lockup/v1beta1/account_locked_pasttime/${request["owner"]}?${fm.renderURLSearchParams({
      ...request
    }, ["owner"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /**
   * Returns locked records of an account with unlock time beyond timestamp
   * excluding tokens started unlocking
   */
  static AccountLockedPastTimeNotUnlockingOnly(request: AccountLockedPastTimeNotUnlockingOnlyRequest, initRequest?: fm.InitReq): Promise<AccountLockedPastTimeNotUnlockingOnlyResponse> {
    return fm.fetchReq(`/osmosis/lockup/v1beta1/account_locked_pasttime_not_unlocking_only/${request["owner"]}?${fm.renderURLSearchParams({
      ...request
    }, ["owner"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Returns unlocked records with unlock time before timestamp */
  static AccountUnlockedBeforeTime(request: AccountUnlockedBeforeTimeRequest, initRequest?: fm.InitReq): Promise<AccountUnlockedBeforeTimeResponse> {
    return fm.fetchReq(`/osmosis/lockup/v1beta1/account_unlocked_before_time/${request["owner"]}?${fm.renderURLSearchParams({
      ...request
    }, ["owner"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Returns lock records by address, timestamp, denom */
  static AccountLockedPastTimeDenom(request: AccountLockedPastTimeDenomRequest, initRequest?: fm.InitReq): Promise<AccountLockedPastTimeDenomResponse> {
    return fm.fetchReq(`/osmosis/lockup/v1beta1/account_locked_pasttime_denom/${request["owner"]}?${fm.renderURLSearchParams({
      ...request
    }, ["owner"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Returns total locked per denom with longer past given time */
  static LockedDenom(request: LockedDenomRequest, initRequest?: fm.InitReq): Promise<LockedDenomResponse> {
    return fm.fetchReq(`/osmosis/lockup/v1beta1/locked_denom?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Returns lock record by id */
  static LockedByID(request: LockedRequest, initRequest?: fm.InitReq): Promise<LockedResponse> {
    return fm.fetchReq(`/osmosis/lockup/v1beta1/locked_by_id/${request["lock_id"]}?${fm.renderURLSearchParams({
      ...request
    }, ["lock_id"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Returns synthetic lockups by native lockup id */
  static SyntheticLockupsByLockupID(request: SyntheticLockupsByLockupIDRequest, initRequest?: fm.InitReq): Promise<SyntheticLockupsByLockupIDResponse> {
    return fm.fetchReq(`/osmosis/lockup/v1beta1/synthetic_lockups_by_lock_id/${request["lock_id"]}?${fm.renderURLSearchParams({
      ...request
    }, ["lock_id"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Returns account locked records with longer duration */
  static AccountLockedLongerDuration(request: AccountLockedLongerDurationRequest, initRequest?: fm.InitReq): Promise<AccountLockedLongerDurationResponse> {
    return fm.fetchReq(`/osmosis/lockup/v1beta1/account_locked_longer_duration/${request["owner"]}?${fm.renderURLSearchParams({
      ...request
    }, ["owner"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Returns account locked records with a specific duration */
  static AccountLockedDuration(request: AccountLockedDurationRequest, initRequest?: fm.InitReq): Promise<AccountLockedDurationResponse> {
    return fm.fetchReq(`/osmosis/lockup/v1beta1/account_locked_duration/${request["owner"]}?${fm.renderURLSearchParams({
      ...request
    }, ["owner"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /**
   * Returns account locked records with longer duration excluding tokens
   * started unlocking
   */
  static AccountLockedLongerDurationNotUnlockingOnly(request: AccountLockedLongerDurationNotUnlockingOnlyRequest, initRequest?: fm.InitReq): Promise<AccountLockedLongerDurationNotUnlockingOnlyResponse> {
    return fm.fetchReq(`/osmosis/lockup/v1beta1/account_locked_longer_duration_not_unlocking_only/${request["owner"]}?${fm.renderURLSearchParams({
      ...request
    }, ["owner"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Returns account's locked records for a denom with longer duration */
  static AccountLockedLongerDurationDenom(request: AccountLockedLongerDurationDenomRequest, initRequest?: fm.InitReq): Promise<AccountLockedLongerDurationDenomResponse> {
    return fm.fetchReq(`/osmosis/lockup/v1beta1/account_locked_longer_duration_denom/${request["owner"]}?${fm.renderURLSearchParams({
      ...request
    }, ["owner"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Params returns lockup params. */
  static Params(request: QueryParamsRequest, initRequest?: fm.InitReq): Promise<QueryParamsResponse> {
    return fm.fetchReq(`/osmosis/lockup/v1beta1/params?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
}
export class QueryClientImpl {
  private readonly url: string;
  constructor(url: string) {
    this.url = url;
  }
  /** Return full balance of the module */
  async ModuleBalance(req: ModuleBalanceRequest, headers?: HeadersInit): Promise<ModuleBalanceResponse> {
    return Query.ModuleBalance(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** Return locked balance of the module */
  async ModuleLockedAmount(req: ModuleLockedAmountRequest, headers?: HeadersInit): Promise<ModuleLockedAmountResponse> {
    return Query.ModuleLockedAmount(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** Returns unlockable coins which are not withdrawn yet */
  async AccountUnlockableCoins(req: AccountUnlockableCoinsRequest, headers?: HeadersInit): Promise<AccountUnlockableCoinsResponse> {
    return Query.AccountUnlockableCoins(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** Returns unlocking coins */
  async AccountUnlockingCoins(req: AccountUnlockingCoinsRequest, headers?: HeadersInit): Promise<AccountUnlockingCoinsResponse> {
    return Query.AccountUnlockingCoins(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** Return a locked coins that can't be withdrawn */
  async AccountLockedCoins(req: AccountLockedCoinsRequest, headers?: HeadersInit): Promise<AccountLockedCoinsResponse> {
    return Query.AccountLockedCoins(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** Returns locked records of an account with unlock time beyond timestamp */
  async AccountLockedPastTime(req: AccountLockedPastTimeRequest, headers?: HeadersInit): Promise<AccountLockedPastTimeResponse> {
    return Query.AccountLockedPastTime(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /**
   * Returns locked records of an account with unlock time beyond timestamp
   * excluding tokens started unlocking
   */
  async AccountLockedPastTimeNotUnlockingOnly(req: AccountLockedPastTimeNotUnlockingOnlyRequest, headers?: HeadersInit): Promise<AccountLockedPastTimeNotUnlockingOnlyResponse> {
    return Query.AccountLockedPastTimeNotUnlockingOnly(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** Returns unlocked records with unlock time before timestamp */
  async AccountUnlockedBeforeTime(req: AccountUnlockedBeforeTimeRequest, headers?: HeadersInit): Promise<AccountUnlockedBeforeTimeResponse> {
    return Query.AccountUnlockedBeforeTime(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** Returns lock records by address, timestamp, denom */
  async AccountLockedPastTimeDenom(req: AccountLockedPastTimeDenomRequest, headers?: HeadersInit): Promise<AccountLockedPastTimeDenomResponse> {
    return Query.AccountLockedPastTimeDenom(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** Returns total locked per denom with longer past given time */
  async LockedDenom(req: LockedDenomRequest, headers?: HeadersInit): Promise<LockedDenomResponse> {
    return Query.LockedDenom(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** Returns lock record by id */
  async LockedByID(req: LockedRequest, headers?: HeadersInit): Promise<LockedResponse> {
    return Query.LockedByID(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** Returns synthetic lockups by native lockup id */
  async SyntheticLockupsByLockupID(req: SyntheticLockupsByLockupIDRequest, headers?: HeadersInit): Promise<SyntheticLockupsByLockupIDResponse> {
    return Query.SyntheticLockupsByLockupID(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** Returns account locked records with longer duration */
  async AccountLockedLongerDuration(req: AccountLockedLongerDurationRequest, headers?: HeadersInit): Promise<AccountLockedLongerDurationResponse> {
    return Query.AccountLockedLongerDuration(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** Returns account locked records with a specific duration */
  async AccountLockedDuration(req: AccountLockedDurationRequest, headers?: HeadersInit): Promise<AccountLockedDurationResponse> {
    return Query.AccountLockedDuration(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /**
   * Returns account locked records with longer duration excluding tokens
   * started unlocking
   */
  async AccountLockedLongerDurationNotUnlockingOnly(req: AccountLockedLongerDurationNotUnlockingOnlyRequest, headers?: HeadersInit): Promise<AccountLockedLongerDurationNotUnlockingOnlyResponse> {
    return Query.AccountLockedLongerDurationNotUnlockingOnly(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** Returns account's locked records for a denom with longer duration */
  async AccountLockedLongerDurationDenom(req: AccountLockedLongerDurationDenomRequest, headers?: HeadersInit): Promise<AccountLockedLongerDurationDenomResponse> {
    return Query.AccountLockedLongerDurationDenom(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** Params returns lockup params. */
  async Params(req: QueryParamsRequest, headers?: HeadersInit): Promise<QueryParamsResponse> {
    return Query.Params(req, {
      headers,
      pathPrefix: this.url
    });
  }
}
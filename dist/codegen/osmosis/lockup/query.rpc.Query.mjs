//@ts-nocheck
import * as fm from "../../grpc-gateway";
export class Query {
    /** Return full balance of the module */
    static ModuleBalance(request, initRequest) {
        return fm.fetchReq(`/osmosis/lockup/v1beta1/module_balance?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** Return locked balance of the module */
    static ModuleLockedAmount(request, initRequest) {
        return fm.fetchReq(`/osmosis/lockup/v1beta1/module_locked_amount?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** Returns unlockable coins which are not withdrawn yet */
    static AccountUnlockableCoins(request, initRequest) {
        return fm.fetchReq(`/osmosis/lockup/v1beta1/account_unlockable_coins/${request["owner"]}?${fm.renderURLSearchParams({
            ...request
        }, ["owner"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** Returns unlocking coins */
    static AccountUnlockingCoins(request, initRequest) {
        return fm.fetchReq(`/osmosis/lockup/v1beta1/account_unlocking_coins/${request["owner"]}?${fm.renderURLSearchParams({
            ...request
        }, ["owner"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** Return a locked coins that can't be withdrawn */
    static AccountLockedCoins(request, initRequest) {
        return fm.fetchReq(`/osmosis/lockup/v1beta1/account_locked_coins/${request["owner"]}?${fm.renderURLSearchParams({
            ...request
        }, ["owner"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** Returns locked records of an account with unlock time beyond timestamp */
    static AccountLockedPastTime(request, initRequest) {
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
    static AccountLockedPastTimeNotUnlockingOnly(request, initRequest) {
        return fm.fetchReq(`/osmosis/lockup/v1beta1/account_locked_pasttime_not_unlocking_only/${request["owner"]}?${fm.renderURLSearchParams({
            ...request
        }, ["owner"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** Returns unlocked records with unlock time before timestamp */
    static AccountUnlockedBeforeTime(request, initRequest) {
        return fm.fetchReq(`/osmosis/lockup/v1beta1/account_unlocked_before_time/${request["owner"]}?${fm.renderURLSearchParams({
            ...request
        }, ["owner"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** Returns lock records by address, timestamp, denom */
    static AccountLockedPastTimeDenom(request, initRequest) {
        return fm.fetchReq(`/osmosis/lockup/v1beta1/account_locked_pasttime_denom/${request["owner"]}?${fm.renderURLSearchParams({
            ...request
        }, ["owner"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** Returns total locked per denom with longer past given time */
    static LockedDenom(request, initRequest) {
        return fm.fetchReq(`/osmosis/lockup/v1beta1/locked_denom?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** Returns lock record by id */
    static LockedByID(request, initRequest) {
        return fm.fetchReq(`/osmosis/lockup/v1beta1/locked_by_id/${request["lock_id"]}?${fm.renderURLSearchParams({
            ...request
        }, ["lock_id"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** Returns synthetic lockups by native lockup id */
    static SyntheticLockupsByLockupID(request, initRequest) {
        return fm.fetchReq(`/osmosis/lockup/v1beta1/synthetic_lockups_by_lock_id/${request["lock_id"]}?${fm.renderURLSearchParams({
            ...request
        }, ["lock_id"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** Returns account locked records with longer duration */
    static AccountLockedLongerDuration(request, initRequest) {
        return fm.fetchReq(`/osmosis/lockup/v1beta1/account_locked_longer_duration/${request["owner"]}?${fm.renderURLSearchParams({
            ...request
        }, ["owner"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** Returns account locked records with a specific duration */
    static AccountLockedDuration(request, initRequest) {
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
    static AccountLockedLongerDurationNotUnlockingOnly(request, initRequest) {
        return fm.fetchReq(`/osmosis/lockup/v1beta1/account_locked_longer_duration_not_unlocking_only/${request["owner"]}?${fm.renderURLSearchParams({
            ...request
        }, ["owner"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** Returns account's locked records for a denom with longer duration */
    static AccountLockedLongerDurationDenom(request, initRequest) {
        return fm.fetchReq(`/osmosis/lockup/v1beta1/account_locked_longer_duration_denom/${request["owner"]}?${fm.renderURLSearchParams({
            ...request
        }, ["owner"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** Params returns lockup params. */
    static Params(request, initRequest) {
        return fm.fetchReq(`/osmosis/lockup/v1beta1/params?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
}
export class QueryClientImpl {
    url;
    constructor(url) {
        this.url = url;
    }
    /** Return full balance of the module */
    async ModuleBalance(req, headers) {
        return Query.ModuleBalance(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** Return locked balance of the module */
    async ModuleLockedAmount(req, headers) {
        return Query.ModuleLockedAmount(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** Returns unlockable coins which are not withdrawn yet */
    async AccountUnlockableCoins(req, headers) {
        return Query.AccountUnlockableCoins(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** Returns unlocking coins */
    async AccountUnlockingCoins(req, headers) {
        return Query.AccountUnlockingCoins(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** Return a locked coins that can't be withdrawn */
    async AccountLockedCoins(req, headers) {
        return Query.AccountLockedCoins(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** Returns locked records of an account with unlock time beyond timestamp */
    async AccountLockedPastTime(req, headers) {
        return Query.AccountLockedPastTime(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /**
     * Returns locked records of an account with unlock time beyond timestamp
     * excluding tokens started unlocking
     */
    async AccountLockedPastTimeNotUnlockingOnly(req, headers) {
        return Query.AccountLockedPastTimeNotUnlockingOnly(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** Returns unlocked records with unlock time before timestamp */
    async AccountUnlockedBeforeTime(req, headers) {
        return Query.AccountUnlockedBeforeTime(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** Returns lock records by address, timestamp, denom */
    async AccountLockedPastTimeDenom(req, headers) {
        return Query.AccountLockedPastTimeDenom(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** Returns total locked per denom with longer past given time */
    async LockedDenom(req, headers) {
        return Query.LockedDenom(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** Returns lock record by id */
    async LockedByID(req, headers) {
        return Query.LockedByID(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** Returns synthetic lockups by native lockup id */
    async SyntheticLockupsByLockupID(req, headers) {
        return Query.SyntheticLockupsByLockupID(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** Returns account locked records with longer duration */
    async AccountLockedLongerDuration(req, headers) {
        return Query.AccountLockedLongerDuration(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** Returns account locked records with a specific duration */
    async AccountLockedDuration(req, headers) {
        return Query.AccountLockedDuration(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /**
     * Returns account locked records with longer duration excluding tokens
     * started unlocking
     */
    async AccountLockedLongerDurationNotUnlockingOnly(req, headers) {
        return Query.AccountLockedLongerDurationNotUnlockingOnly(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** Returns account's locked records for a denom with longer duration */
    async AccountLockedLongerDurationDenom(req, headers) {
        return Query.AccountLockedLongerDurationDenom(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** Params returns lockup params. */
    async Params(req, headers) {
        return Query.Params(req, {
            headers,
            pathPrefix: this.url
        });
    }
}
//# sourceMappingURL=query.rpc.Query.js.map
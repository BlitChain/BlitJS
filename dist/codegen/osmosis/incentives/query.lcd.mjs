//@ts-nocheck
import { setPaginationParams } from "../../helpers";
export class LCDQueryClient {
    req;
    constructor({ requestClient }) {
        this.req = requestClient;
        this.moduleToDistributeCoins = this.moduleToDistributeCoins.bind(this);
        this.gaugeByID = this.gaugeByID.bind(this);
        this.gauges = this.gauges.bind(this);
        this.activeGauges = this.activeGauges.bind(this);
        this.activeGaugesPerDenom = this.activeGaugesPerDenom.bind(this);
        this.upcomingGauges = this.upcomingGauges.bind(this);
        this.upcomingGaugesPerDenom = this.upcomingGaugesPerDenom.bind(this);
        this.rewardsEst = this.rewardsEst.bind(this);
        this.lockableDurations = this.lockableDurations.bind(this);
    }
    /* ModuleToDistributeCoins returns coins that are going to be distributed */
    async moduleToDistributeCoins(_params = {}) {
        const endpoint = `osmosis/incentives/v1beta1/module_to_distribute_coins`;
        return await this.req.get(endpoint);
    }
    /* GaugeByID returns gauges by their respective ID */
    async gaugeByID(params) {
        const endpoint = `osmosis/incentives/v1beta1/gauge_by_id/${params.id}`;
        return await this.req.get(endpoint);
    }
    /* Gauges returns both upcoming and active gauges */
    async gauges(params = {
        pagination: undefined
    }) {
        const options = {
            params: {}
        };
        if (typeof params?.pagination !== "undefined") {
            setPaginationParams(options, params.pagination);
        }
        const endpoint = `osmosis/incentives/v1beta1/gauges`;
        return await this.req.get(endpoint, options);
    }
    /* ActiveGauges returns active gauges */
    async activeGauges(params = {
        pagination: undefined
    }) {
        const options = {
            params: {}
        };
        if (typeof params?.pagination !== "undefined") {
            setPaginationParams(options, params.pagination);
        }
        const endpoint = `osmosis/incentives/v1beta1/active_gauges`;
        return await this.req.get(endpoint, options);
    }
    /* ActiveGaugesPerDenom returns active gauges by denom */
    async activeGaugesPerDenom(params) {
        const options = {
            params: {}
        };
        if (typeof params?.denom !== "undefined") {
            options.params.denom = params.denom;
        }
        if (typeof params?.pagination !== "undefined") {
            setPaginationParams(options, params.pagination);
        }
        const endpoint = `osmosis/incentives/v1beta1/active_gauges_per_denom`;
        return await this.req.get(endpoint, options);
    }
    /* Returns scheduled gauges that have not yet occured */
    async upcomingGauges(params = {
        pagination: undefined
    }) {
        const options = {
            params: {}
        };
        if (typeof params?.pagination !== "undefined") {
            setPaginationParams(options, params.pagination);
        }
        const endpoint = `osmosis/incentives/v1beta1/upcoming_gauges`;
        return await this.req.get(endpoint, options);
    }
    /* UpcomingGaugesPerDenom returns scheduled gauges that have not yet occured
     by denom */
    async upcomingGaugesPerDenom(params) {
        const options = {
            params: {}
        };
        if (typeof params?.denom !== "undefined") {
            options.params.denom = params.denom;
        }
        if (typeof params?.pagination !== "undefined") {
            setPaginationParams(options, params.pagination);
        }
        const endpoint = `osmosis/incentives/v1beta1/upcoming_gauges_per_denom`;
        return await this.req.get(endpoint, options);
    }
    /* RewardsEst returns an estimate of the rewards from now until a specified
     time in the future The querier either provides an address or a set of locks
     for which they want to find the associated rewards */
    async rewardsEst(params) {
        const options = {
            params: {}
        };
        if (typeof params?.lock_ids !== "undefined") {
            options.params.lock_ids = params.lock_ids;
        }
        if (typeof params?.end_epoch !== "undefined") {
            options.params.end_epoch = params.end_epoch;
        }
        const endpoint = `osmosis/incentives/v1beta1/rewards_est/${params.owner}`;
        return await this.req.get(endpoint, options);
    }
    /* LockableDurations returns lockable durations that are valid to distribute
     incentives for */
    async lockableDurations(_params = {}) {
        const endpoint = `osmosis/incentives/v1beta1/lockable_durations`;
        return await this.req.get(endpoint);
    }
}
//# sourceMappingURL=query.lcd.js.map
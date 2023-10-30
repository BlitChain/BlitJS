export class LCDQueryClient {
    req;
    constructor({ requestClient }) {
        this.req = requestClient;
        this.gaugeIds = this.gaugeIds.bind(this);
        this.distrInfo = this.distrInfo.bind(this);
        this.params = this.params.bind(this);
        this.lockableDurations = this.lockableDurations.bind(this);
        this.incentivizedPools = this.incentivizedPools.bind(this);
        this.externalIncentiveGauges = this.externalIncentiveGauges.bind(this);
    }
    /* GaugeIds takes the pool id and returns the matching gauge ids and durations */
    async gaugeIds(params) {
        const endpoint = `osmosis/pool-incentives/v1beta1/gauge-ids/${params.pool_id}`;
        return await this.req.get(endpoint);
    }
    /* DistrInfo returns the pool's matching gauge ids and weights. */
    async distrInfo(_params = {}) {
        const endpoint = `osmosis/pool-incentives/v1beta1/distr_info`;
        return await this.req.get(endpoint);
    }
    /* Params returns pool incentives params. */
    async params(_params = {}) {
        const endpoint = `osmosis/pool-incentives/v1beta1/params`;
        return await this.req.get(endpoint);
    }
    /* LockableDurations returns lock durations for pools. */
    async lockableDurations(_params = {}) {
        const endpoint = `osmosis/pool-incentives/v1beta1/lockable_durations`;
        return await this.req.get(endpoint);
    }
    /* IncentivizedPools returns currently incentivized pools */
    async incentivizedPools(_params = {}) {
        const endpoint = `osmosis/pool-incentives/v1beta1/incentivized_pools`;
        return await this.req.get(endpoint);
    }
    /* ExternalIncentiveGauges returns external incentive gauges. */
    async externalIncentiveGauges(_params = {}) {
        const endpoint = `osmosis/pool-incentives/v1beta1/external_incentive_gauges`;
        return await this.req.get(endpoint);
    }
}
//# sourceMappingURL=query.lcd.js.map
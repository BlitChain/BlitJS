"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LCDQueryClient = void 0;
class LCDQueryClient {
    req;
    constructor({ requestClient }) {
        this.req = requestClient;
        this.params = this.params.bind(this);
        this.estimateSwapExactAmountIn = this.estimateSwapExactAmountIn.bind(this);
        this.estimateSwapExactAmountOut = this.estimateSwapExactAmountOut.bind(this);
        this.numPools = this.numPools.bind(this);
    }
    /* Params */
    async params(_params = {}) {
        const endpoint = `osmosis/swaprouter/v1beta1/Params`;
        return await this.req.get(endpoint);
    }
    /* Estimates swap amount out given in. */
    async estimateSwapExactAmountIn(params) {
        const options = {
            params: {}
        };
        if (typeof params?.sender !== "undefined") {
            options.params.sender = params.sender;
        }
        if (typeof params?.token_in !== "undefined") {
            options.params.token_in = params.token_in;
        }
        if (typeof params?.routes !== "undefined") {
            options.params.routes = params.routes;
        }
        const endpoint = `osmosis/gamm/v1beta1/${params.pool_id}/estimate/swap_exact_amount_in`;
        return await this.req.get(endpoint, options);
    }
    /* Estimates swap amount in given out. */
    async estimateSwapExactAmountOut(params) {
        const options = {
            params: {}
        };
        if (typeof params?.sender !== "undefined") {
            options.params.sender = params.sender;
        }
        if (typeof params?.routes !== "undefined") {
            options.params.routes = params.routes;
        }
        if (typeof params?.token_out !== "undefined") {
            options.params.token_out = params.token_out;
        }
        const endpoint = `osmosis/gamm/v1beta1/${params.pool_id}/estimate/swap_exact_amount_out`;
        return await this.req.get(endpoint, options);
    }
    /* NumPools */
    async numPools(_params = {}) {
        const endpoint = `osmosis/swaprouter/v1beta1/num_pools`;
        return await this.req.get(endpoint);
    }
}
exports.LCDQueryClient = LCDQueryClient;
//# sourceMappingURL=query.lcd.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LCDQueryClient = void 0;
class LCDQueryClient {
    req;
    constructor({ requestClient }) {
        this.req = requestClient;
        this.params = this.params.bind(this);
        this.arithmeticTwap = this.arithmeticTwap.bind(this);
        this.arithmeticTwapToNow = this.arithmeticTwapToNow.bind(this);
    }
    /* Params */
    async params(_params = {}) {
        const endpoint = `osmosis/twap/v1beta1/Params`;
        return await this.req.get(endpoint);
    }
    /* ArithmeticTwap */
    async arithmeticTwap(params) {
        const options = {
            params: {}
        };
        if (typeof params?.pool_id !== "undefined") {
            options.params.pool_id = params.pool_id;
        }
        if (typeof params?.base_asset !== "undefined") {
            options.params.base_asset = params.base_asset;
        }
        if (typeof params?.quote_asset !== "undefined") {
            options.params.quote_asset = params.quote_asset;
        }
        if (typeof params?.start_time !== "undefined") {
            options.params.start_time = params.start_time;
        }
        if (typeof params?.end_time !== "undefined") {
            options.params.end_time = params.end_time;
        }
        const endpoint = `osmosis/twap/v1beta1/ArithmeticTwap`;
        return await this.req.get(endpoint, options);
    }
    /* ArithmeticTwapToNow */
    async arithmeticTwapToNow(params) {
        const options = {
            params: {}
        };
        if (typeof params?.pool_id !== "undefined") {
            options.params.pool_id = params.pool_id;
        }
        if (typeof params?.base_asset !== "undefined") {
            options.params.base_asset = params.base_asset;
        }
        if (typeof params?.quote_asset !== "undefined") {
            options.params.quote_asset = params.quote_asset;
        }
        if (typeof params?.start_time !== "undefined") {
            options.params.start_time = params.start_time;
        }
        const endpoint = `osmosis/twap/v1beta1/ArithmeticTwapToNow`;
        return await this.req.get(endpoint, options);
    }
}
exports.LCDQueryClient = LCDQueryClient;
//# sourceMappingURL=query.lcd.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LCDQueryClient = void 0;
class LCDQueryClient {
    req;
    constructor({ requestClient }) {
        this.req = requestClient;
        this.spotPrice = this.spotPrice.bind(this);
    }
    /* SpotPrice defines a gRPC query handler that returns the spot price given
     a base denomination and a quote denomination. */
    async spotPrice(params) {
        const options = {
            params: {}
        };
        if (typeof params?.base_asset_denom !== "undefined") {
            options.params.base_asset_denom = params.base_asset_denom;
        }
        if (typeof params?.quote_asset_denom !== "undefined") {
            options.params.quote_asset_denom = params.quote_asset_denom;
        }
        const endpoint = `osmosis/gamm/v2/pools/${params.pool_id}/prices`;
        return await this.req.get(endpoint, options);
    }
}
exports.LCDQueryClient = LCDQueryClient;
//# sourceMappingURL=query.lcd.js.map
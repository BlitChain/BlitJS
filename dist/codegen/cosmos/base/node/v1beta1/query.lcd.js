"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LCDQueryClient = void 0;
class LCDQueryClient {
    req;
    constructor({ requestClient }) {
        this.req = requestClient;
        this.config = this.config.bind(this);
        this.status = this.status.bind(this);
    }
    /* Config queries for the operator configuration. */
    async config(_params = {}) {
        const endpoint = `cosmos/base/node/v1beta1/config`;
        return await this.req.get(endpoint);
    }
    /* Status queries for the node status. */
    async status(_params = {}) {
        const endpoint = `cosmos/base/node/v1beta1/status`;
        return await this.req.get(endpoint);
    }
}
exports.LCDQueryClient = LCDQueryClient;
//# sourceMappingURL=query.lcd.js.map
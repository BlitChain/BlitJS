"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LCDQueryClient = void 0;
class LCDQueryClient {
    req;
    constructor({ requestClient }) {
        this.req = requestClient;
        this.endpoints = this.endpoints.bind(this);
    }
    /* Config queries for the operator configuration. */
    async endpoints(_params = {}) {
        const endpoint = `blit/services/endpoints`;
        return await this.req.get(endpoint);
    }
}
exports.LCDQueryClient = LCDQueryClient;
//# sourceMappingURL=query.lcd.js.map
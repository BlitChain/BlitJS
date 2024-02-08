export class LCDQueryClient {
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
//# sourceMappingURL=query.lcd.js.map
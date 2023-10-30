export class LCDQueryClient {
    req;
    constructor({ requestClient }) {
        this.req = requestClient;
        this.params = this.params.bind(this);
    }
    /* Parameters queries the parameters of the module. */
    async params(_params = {}) {
        const endpoint = `blit/blit/params`;
        return await this.req.get(endpoint);
    }
}
//# sourceMappingURL=query.lcd.js.map
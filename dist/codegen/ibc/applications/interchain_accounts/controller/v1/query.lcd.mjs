export class LCDQueryClient {
    req;
    constructor({ requestClient }) {
        this.req = requestClient;
        this.interchainAccount = this.interchainAccount.bind(this);
        this.params = this.params.bind(this);
    }
    /* InterchainAccount returns the interchain account address for a given owner address on a given connection */
    async interchainAccount(params) {
        const endpoint = `ibc/apps/interchain_accounts/controller/v1/owners/${params.owner}/connections/${params.connection_id}`;
        return await this.req.get(endpoint);
    }
    /* Params queries all parameters of the ICA controller submodule. */
    async params(_params = {}) {
        const endpoint = `ibc/apps/interchain_accounts/controller/v1/params`;
        return await this.req.get(endpoint);
    }
}
//# sourceMappingURL=query.lcd.js.map
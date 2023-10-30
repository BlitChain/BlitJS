"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LCDQueryClient = void 0;
//@ts-nocheck
const helpers_1 = require("../../helpers");
class LCDQueryClient {
    req;
    constructor({ requestClient }) {
        this.req = requestClient;
        this.params = this.params.bind(this);
        this.script = this.script.bind(this);
        this.scriptAll = this.scriptAll.bind(this);
        this.web = this.web.bind(this);
    }
    /* Parameters queries the parameters of the module. */
    async params(_params = {}) {
        const endpoint = `blit/script/params`;
        return await this.req.get(endpoint);
    }
    /* Queries a list of Script items. */
    async script(params) {
        const endpoint = `blit/script/script/${params.address}`;
        return await this.req.get(endpoint);
    }
    /* ScriptAll */
    async scriptAll(params = {
        pagination: undefined
    }) {
        const options = {
            params: {}
        };
        if (typeof params?.pagination !== "undefined") {
            (0, helpers_1.setPaginationParams)(options, params.pagination);
        }
        const endpoint = `blit/script/script`;
        return await this.req.get(endpoint, options);
    }
    /* Queries the WSGI web application function of a script. */
    async web(params) {
        const options = {
            params: {}
        };
        if (typeof params?.httprequest !== "undefined") {
            options.params.httprequest = params.httprequest;
        }
        const endpoint = `blit/script/web/${params.address}`;
        return await this.req.get(endpoint, options);
    }
}
exports.LCDQueryClient = LCDQueryClient;
//# sourceMappingURL=query.lcd.js.map
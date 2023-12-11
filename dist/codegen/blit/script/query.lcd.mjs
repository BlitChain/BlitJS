//@ts-nocheck
import { setPaginationParams } from "../../helpers";
export class LCDQueryClient {
    req;
    constructor({ requestClient }) {
        this.req = requestClient;
        this.params = this.params.bind(this);
        this.script = this.script.bind(this);
        this.scripts = this.scripts.bind(this);
        this.eval = this.eval.bind(this);
        this.web = this.web.bind(this);
    }
    /* Parameters queries the parameters of the module. */
    async params(_params = {}) {
        const endpoint = `blit/script/params`;
        return await this.req.get(endpoint);
    }
    /* Queries a specific Script item. */
    async script(params) {
        const endpoint = `blit/script/script/${params.address}`;
        return await this.req.get(endpoint);
    }
    /* Queries a list of Script items. */
    async scripts(params = {
        pagination: undefined
    }) {
        const options = {
            params: {}
        };
        if (typeof params?.pagination !== "undefined") {
            setPaginationParams(options, params.pagination);
        }
        const endpoint = `blit/script/scripts`;
        return await this.req.get(endpoint, options);
    }
    /* Runs the function and returns the result. */
    async eval(params) {
        const options = {
            params: {}
        };
        if (typeof params?.caller_address !== "undefined") {
            options.params.caller_address = params.caller_address;
        }
        if (typeof params?.extra_code !== "undefined") {
            options.params.extra_code = params.extra_code;
        }
        if (typeof params?.function_name !== "undefined") {
            options.params.function_name = params.function_name;
        }
        if (typeof params?.kwargs !== "undefined") {
            options.params.kwargs = params.kwargs;
        }
        if (typeof params?.grantee !== "undefined") {
            options.params.grantee = params.grantee;
        }
        if (typeof params?.attached_messages !== "undefined") {
            options.params.attached_messages = params.attached_messages;
        }
        const endpoint = `blit/script/eval/${params.script_address}`;
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
//# sourceMappingURL=query.lcd.js.map
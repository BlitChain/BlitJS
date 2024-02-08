//@ts-nocheck
import { setPaginationParams } from "../../helpers";
export class LCDQueryClient {
    req;
    constructor({ requestClient }) {
        this.req = requestClient;
        this.params = this.params.bind(this);
        this.task = this.task.bind(this);
        this.taskAll = this.taskAll.bind(this);
        this.futureTask = this.futureTask.bind(this);
        this.futureTaskAll = this.futureTaskAll.bind(this);
    }
    /* Parameters queries the parameters of the module. */
    async params(_params = {}) {
        const endpoint = `blit/blit/params`;
        return await this.req.get(endpoint);
    }
    /* Queries a list of Task items. */
    async task(params) {
        const options = {
            params: {}
        };
        if (typeof params?.id !== "undefined") {
            options.params.id = params.id;
        }
        const endpoint = `blit/blit/task`;
        return await this.req.get(endpoint, options);
    }
    /* TaskAll */
    async taskAll(params) {
        const options = {
            params: {}
        };
        if (typeof params?.address !== "undefined") {
            options.params.address = params.address;
        }
        if (typeof params?.pagination !== "undefined") {
            setPaginationParams(options, params.pagination);
        }
        const endpoint = `blit/blit/all-tasks`;
        return await this.req.get(endpoint, options);
    }
    /* Queries a list of FutureTask items. */
    async futureTask(params) {
        const options = {
            params: {}
        };
        if (typeof params?.index !== "undefined") {
            options.params.index = params.index;
        }
        const endpoint = `blit/blit/future-task`;
        return await this.req.get(endpoint, options);
    }
    /* FutureTaskAll */
    async futureTaskAll(params) {
        const options = {
            params: {}
        };
        if (typeof params?.prefix !== "undefined") {
            options.params.prefix = params.prefix;
        }
        if (typeof params?.pagination !== "undefined") {
            setPaginationParams(options, params.pagination);
        }
        const endpoint = `blit/blit/all-future-tasks`;
        return await this.req.get(endpoint, options);
    }
}
//# sourceMappingURL=query.lcd.js.map
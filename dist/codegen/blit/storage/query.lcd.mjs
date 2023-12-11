//@ts-nocheck
import { setPaginationParams } from "../../helpers";
export class LCDQueryClient {
    req;
    constructor({ requestClient }) {
        this.req = requestClient;
        this.params = this.params.bind(this);
        this.storageDetail = this.storageDetail.bind(this);
        this.filterStorage = this.filterStorage.bind(this);
    }
    /* Parameters queries the parameters of the module. */
    async params(_params = {}) {
        const endpoint = `blit/storage/params`;
        return await this.req.get(endpoint);
    }
    /* Get a specific Storage by addres and index */
    async storageDetail(params) {
        const options = {
            params: {}
        };
        if (typeof params?.address !== "undefined") {
            options.params.address = params.address;
        }
        if (typeof params?.index !== "undefined") {
            options.params.index = params.index;
        }
        const endpoint = `blit/storage/storage`;
        return await this.req.get(endpoint, options);
    }
    /* Filters by address and index prefix. */
    async filterStorage(params) {
        const options = {
            params: {}
        };
        if (typeof params?.filter_address !== "undefined") {
            options.params.filter_address = params.filter_address;
        }
        if (typeof params?.filter_index_prefix !== "undefined") {
            options.params.filter_index_prefix = params.filter_index_prefix;
        }
        if (typeof params?.pagination !== "undefined") {
            setPaginationParams(options, params.pagination);
        }
        const endpoint = `blit/storage/filter`;
        return await this.req.get(endpoint, options);
    }
}
//# sourceMappingURL=query.lcd.js.map
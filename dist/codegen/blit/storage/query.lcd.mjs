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
    /* StorageDetail */
    async storageDetail(params) {
        const endpoint = `blit/storage/storage/${params.address}/${params.index}`;
        return await this.req.get(endpoint);
    }
    /* Queries a list of Storage items. */
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
        const endpoint = `blit/storage/storage`;
        return await this.req.get(endpoint, options);
    }
}
//# sourceMappingURL=query.lcd.js.map
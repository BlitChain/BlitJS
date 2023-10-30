//@ts-nocheck
import { setPaginationParams } from "../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryGetStorageRequest, QueryGetStorageResponseSDKType, QueryAllStorageRequest, QueryAllStorageResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.storage = this.storage.bind(this);
    this.storageAll = this.storageAll.bind(this);
  }
  /* Parameters queries the parameters of the module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `blit/storage/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Queries a list of Storage items. */
  async storage(params: QueryGetStorageRequest): Promise<QueryGetStorageResponseSDKType> {
    const endpoint = `blit/storage/storage/${params.address}/${params.index}`;
    return await this.req.get<QueryGetStorageResponseSDKType>(endpoint);
  }
  /* StorageAll */
  async storageAll(params: QueryAllStorageRequest): Promise<QueryAllStorageResponseSDKType> {
    const options: any = {
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
    return await this.req.get<QueryAllStorageResponseSDKType>(endpoint, options);
  }
}
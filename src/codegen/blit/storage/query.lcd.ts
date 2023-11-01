//@ts-nocheck
import { setPaginationParams } from "../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryStorageDetailRequest, QueryStorageDetailResponseSDKType, QueryFilterStorageRequest, QueryFilterStorageResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.storageDetail = this.storageDetail.bind(this);
    this.filterStorage = this.filterStorage.bind(this);
  }
  /* Parameters queries the parameters of the module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `blit/storage/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* StorageDetail */
  async storageDetail(params: QueryStorageDetailRequest): Promise<QueryStorageDetailResponseSDKType> {
    const endpoint = `blit/storage/storage/${params.address}/${params.index}`;
    return await this.req.get<QueryStorageDetailResponseSDKType>(endpoint);
  }
  /* Queries a list of Storage items. */
  async filterStorage(params: QueryFilterStorageRequest): Promise<QueryFilterStorageResponseSDKType> {
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
    return await this.req.get<QueryFilterStorageResponseSDKType>(endpoint, options);
  }
}
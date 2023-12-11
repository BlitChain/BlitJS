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
  /* Get a specific Storage by addres and index */
  async storageDetail(params: QueryStorageDetailRequest): Promise<QueryStorageDetailResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.address !== "undefined") {
      options.params.address = params.address;
    }
    if (typeof params?.index !== "undefined") {
      options.params.index = params.index;
    }
    const endpoint = `blit/storage/storage`;
    return await this.req.get<QueryStorageDetailResponseSDKType>(endpoint, options);
  }
  /* Filters by address and index prefix. */
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
    const endpoint = `blit/storage/filter`;
    return await this.req.get<QueryFilterStorageResponseSDKType>(endpoint, options);
  }
}
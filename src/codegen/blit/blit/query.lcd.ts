//@ts-nocheck
import { setPaginationParams } from "../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryGetTaskRequest, QueryGetTaskResponseSDKType, QueryAllTaskRequest, QueryAllTaskResponseSDKType, QueryGetFutureTaskRequest, QueryGetFutureTaskResponseSDKType, QueryAllFutureTaskRequest, QueryAllFutureTaskResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.task = this.task.bind(this);
    this.taskAll = this.taskAll.bind(this);
    this.futureTask = this.futureTask.bind(this);
    this.futureTaskAll = this.futureTaskAll.bind(this);
  }
  /* Parameters queries the parameters of the module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `blit/blit/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Queries a list of Task items. */
  async task(params: QueryGetTaskRequest): Promise<QueryGetTaskResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.id !== "undefined") {
      options.params.id = params.id;
    }
    const endpoint = `blit/blit/task`;
    return await this.req.get<QueryGetTaskResponseSDKType>(endpoint, options);
  }
  /* TaskAll */
  async taskAll(params: QueryAllTaskRequest): Promise<QueryAllTaskResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.address !== "undefined") {
      options.params.address = params.address;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `blit/blit/all-tasks`;
    return await this.req.get<QueryAllTaskResponseSDKType>(endpoint, options);
  }
  /* Queries a list of FutureTask items. */
  async futureTask(params: QueryGetFutureTaskRequest): Promise<QueryGetFutureTaskResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.index !== "undefined") {
      options.params.index = params.index;
    }
    const endpoint = `blit/blit/future-task`;
    return await this.req.get<QueryGetFutureTaskResponseSDKType>(endpoint, options);
  }
  /* FutureTaskAll */
  async futureTaskAll(params: QueryAllFutureTaskRequest): Promise<QueryAllFutureTaskResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.prefix !== "undefined") {
      options.params.prefix = params.prefix;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `blit/blit/all-future-tasks`;
    return await this.req.get<QueryAllFutureTaskResponseSDKType>(endpoint, options);
  }
}
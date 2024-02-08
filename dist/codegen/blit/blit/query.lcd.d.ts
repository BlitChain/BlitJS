import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryGetTaskRequest, QueryGetTaskResponseSDKType, QueryAllTaskRequest, QueryAllTaskResponseSDKType, QueryGetFutureTaskRequest, QueryGetFutureTaskResponseSDKType, QueryAllFutureTaskRequest, QueryAllFutureTaskResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    task(params: QueryGetTaskRequest): Promise<QueryGetTaskResponseSDKType>;
    taskAll(params: QueryAllTaskRequest): Promise<QueryAllTaskResponseSDKType>;
    futureTask(params: QueryGetFutureTaskRequest): Promise<QueryGetFutureTaskResponseSDKType>;
    futureTaskAll(params: QueryAllFutureTaskRequest): Promise<QueryAllFutureTaskResponseSDKType>;
}

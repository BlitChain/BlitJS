import * as fm from "../../../grpc-gateway";
import { RecoveredSinceDowntimeOfLengthRequest, RecoveredSinceDowntimeOfLengthResponse } from "./query";
export declare class Query {
    static RecoveredSinceDowntimeOfLength(request: RecoveredSinceDowntimeOfLengthRequest, initRequest?: fm.InitReq): Promise<RecoveredSinceDowntimeOfLengthResponse>;
}
export declare class QueryClientImpl {
    private readonly url;
    constructor(url: string);
    RecoveredSinceDowntimeOfLength(req: RecoveredSinceDowntimeOfLengthRequest, headers?: HeadersInit): Promise<RecoveredSinceDowntimeOfLengthResponse>;
}

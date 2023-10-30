import * as fm from "../../../grpc-gateway";
import { ParamsRequest, ParamsResponse, ArithmeticTwapRequest, ArithmeticTwapResponse, ArithmeticTwapToNowRequest, ArithmeticTwapToNowResponse } from "./query";
export declare class Query {
    static Params(request: ParamsRequest, initRequest?: fm.InitReq): Promise<ParamsResponse>;
    static ArithmeticTwap(request: ArithmeticTwapRequest, initRequest?: fm.InitReq): Promise<ArithmeticTwapResponse>;
    static ArithmeticTwapToNow(request: ArithmeticTwapToNowRequest, initRequest?: fm.InitReq): Promise<ArithmeticTwapToNowResponse>;
}
export declare class QueryClientImpl {
    private readonly url;
    constructor(url: string);
    Params(req: ParamsRequest, headers?: HeadersInit): Promise<ParamsResponse>;
    ArithmeticTwap(req: ArithmeticTwapRequest, headers?: HeadersInit): Promise<ArithmeticTwapResponse>;
    ArithmeticTwapToNow(req: ArithmeticTwapToNowRequest, headers?: HeadersInit): Promise<ArithmeticTwapToNowResponse>;
}

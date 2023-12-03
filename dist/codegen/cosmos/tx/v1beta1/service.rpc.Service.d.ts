import * as fm from "../../../grpc-gateway";
import { SimulateRequest, SimulateResponse, GetTxRequest, GetTxResponse, BroadcastTxRequest, BroadcastTxResponse, GetTxsEventRequest, GetTxsEventResponse, GetBlockWithTxsRequest, GetBlockWithTxsResponse } from "./service";
export declare class Service {
    /** Simulate simulates executing a transaction for estimating gas usage. */
    static Simulate(request: SimulateRequest, initRequest?: fm.InitReq): Promise<SimulateResponse>;
    /** GetTx fetches a tx by hash. */
    static GetTx(request: GetTxRequest, initRequest?: fm.InitReq): Promise<GetTxResponse>;
    /** BroadcastTx broadcast transaction. */
    static BroadcastTx(request: BroadcastTxRequest, initRequest?: fm.InitReq): Promise<BroadcastTxResponse>;
    /** GetTxsEvent fetches txs by event. */
    static GetTxsEvent(request: GetTxsEventRequest, initRequest?: fm.InitReq): Promise<GetTxsEventResponse>;
    /**
     * GetBlockWithTxs fetches a block with decoded txs.
     *
     * Since: cosmos-sdk 0.45.2
     */
    static GetBlockWithTxs(request: GetBlockWithTxsRequest, initRequest?: fm.InitReq): Promise<GetBlockWithTxsResponse>;
}
export declare class ServiceClientImpl {
    private readonly url;
    constructor(url: string);
    /** Simulate simulates executing a transaction for estimating gas usage. */
    Simulate(req: SimulateRequest, headers?: HeadersInit): Promise<SimulateResponse>;
    /** GetTx fetches a tx by hash. */
    GetTx(req: GetTxRequest, headers?: HeadersInit): Promise<GetTxResponse>;
    /** BroadcastTx broadcast transaction. */
    BroadcastTx(req: BroadcastTxRequest, headers?: HeadersInit): Promise<BroadcastTxResponse>;
    /** GetTxsEvent fetches txs by event. */
    GetTxsEvent(req: GetTxsEventRequest, headers?: HeadersInit): Promise<GetTxsEventResponse>;
    /**
     * GetBlockWithTxs fetches a block with decoded txs.
     *
     * Since: cosmos-sdk 0.45.2
     */
    GetBlockWithTxs(req: GetBlockWithTxsRequest, headers?: HeadersInit): Promise<GetBlockWithTxsResponse>;
}

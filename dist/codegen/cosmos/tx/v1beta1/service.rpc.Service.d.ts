import * as fm from "../../../grpc-gateway";
import { SimulateRequest, SimulateResponse, GetTxRequest, GetTxResponse, BroadcastTxRequest, BroadcastTxResponse, GetTxsEventRequest, GetTxsEventResponse, GetBlockWithTxsRequest, GetBlockWithTxsResponse, TxDecodeRequest, TxDecodeResponse, TxEncodeRequest, TxEncodeResponse, TxEncodeAminoRequest, TxEncodeAminoResponse, TxDecodeAminoRequest, TxDecodeAminoResponse } from "./service";
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
    /**
     * TxDecode decodes the transaction.
     *
     * Since: cosmos-sdk 0.47
     */
    static TxDecode(request: TxDecodeRequest, initRequest?: fm.InitReq): Promise<TxDecodeResponse>;
    /**
     * TxEncode encodes the transaction.
     *
     * Since: cosmos-sdk 0.47
     */
    static TxEncode(request: TxEncodeRequest, initRequest?: fm.InitReq): Promise<TxEncodeResponse>;
    /**
     * TxEncodeAmino encodes an Amino transaction from JSON to encoded bytes.
     *
     * Since: cosmos-sdk 0.47
     */
    static TxEncodeAmino(request: TxEncodeAminoRequest, initRequest?: fm.InitReq): Promise<TxEncodeAminoResponse>;
    /**
     * TxDecodeAmino decodes an Amino transaction from encoded bytes to JSON.
     *
     * Since: cosmos-sdk 0.47
     */
    static TxDecodeAmino(request: TxDecodeAminoRequest, initRequest?: fm.InitReq): Promise<TxDecodeAminoResponse>;
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
    /**
     * TxDecode decodes the transaction.
     *
     * Since: cosmos-sdk 0.47
     */
    TxDecode(req: TxDecodeRequest, headers?: HeadersInit): Promise<TxDecodeResponse>;
    /**
     * TxEncode encodes the transaction.
     *
     * Since: cosmos-sdk 0.47
     */
    TxEncode(req: TxEncodeRequest, headers?: HeadersInit): Promise<TxEncodeResponse>;
    /**
     * TxEncodeAmino encodes an Amino transaction from JSON to encoded bytes.
     *
     * Since: cosmos-sdk 0.47
     */
    TxEncodeAmino(req: TxEncodeAminoRequest, headers?: HeadersInit): Promise<TxEncodeAminoResponse>;
    /**
     * TxDecodeAmino decodes an Amino transaction from encoded bytes to JSON.
     *
     * Since: cosmos-sdk 0.47
     */
    TxDecodeAmino(req: TxDecodeAminoRequest, headers?: HeadersInit): Promise<TxDecodeAminoResponse>;
}

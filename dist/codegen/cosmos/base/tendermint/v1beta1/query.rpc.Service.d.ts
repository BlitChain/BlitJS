import * as fm from "../../../../grpc-gateway";
import { GetNodeInfoRequest, GetNodeInfoResponse, GetSyncingRequest, GetSyncingResponse, GetLatestBlockRequest, GetLatestBlockResponse, GetBlockByHeightRequest, GetBlockByHeightResponse, GetLatestValidatorSetRequest, GetLatestValidatorSetResponse, GetValidatorSetByHeightRequest, GetValidatorSetByHeightResponse, ABCIQueryRequest, ABCIQueryResponse } from "./query";
export declare class Service {
    /** GetNodeInfo queries the current node info. */
    static GetNodeInfo(request: GetNodeInfoRequest, initRequest?: fm.InitReq): Promise<GetNodeInfoResponse>;
    /** GetSyncing queries node syncing. */
    static GetSyncing(request: GetSyncingRequest, initRequest?: fm.InitReq): Promise<GetSyncingResponse>;
    /** GetLatestBlock returns the latest block. */
    static GetLatestBlock(request: GetLatestBlockRequest, initRequest?: fm.InitReq): Promise<GetLatestBlockResponse>;
    /** GetBlockByHeight queries block for given height. */
    static GetBlockByHeight(request: GetBlockByHeightRequest, initRequest?: fm.InitReq): Promise<GetBlockByHeightResponse>;
    /** GetLatestValidatorSet queries latest validator-set. */
    static GetLatestValidatorSet(request: GetLatestValidatorSetRequest, initRequest?: fm.InitReq): Promise<GetLatestValidatorSetResponse>;
    /** GetValidatorSetByHeight queries validator-set at a given height. */
    static GetValidatorSetByHeight(request: GetValidatorSetByHeightRequest, initRequest?: fm.InitReq): Promise<GetValidatorSetByHeightResponse>;
    /**
     * ABCIQuery defines a query handler that supports ABCI queries directly to the
     * application, bypassing Tendermint completely. The ABCI query must contain
     * a valid and supported path, including app, custom, p2p, and store.
     *
     * Since: cosmos-sdk 0.46
     */
    static ABCIQuery(request: ABCIQueryRequest, initRequest?: fm.InitReq): Promise<ABCIQueryResponse>;
}
export declare class ServiceClientImpl {
    private readonly url;
    constructor(url: string);
    /** GetNodeInfo queries the current node info. */
    GetNodeInfo(req: GetNodeInfoRequest, headers?: HeadersInit): Promise<GetNodeInfoResponse>;
    /** GetSyncing queries node syncing. */
    GetSyncing(req: GetSyncingRequest, headers?: HeadersInit): Promise<GetSyncingResponse>;
    /** GetLatestBlock returns the latest block. */
    GetLatestBlock(req: GetLatestBlockRequest, headers?: HeadersInit): Promise<GetLatestBlockResponse>;
    /** GetBlockByHeight queries block for given height. */
    GetBlockByHeight(req: GetBlockByHeightRequest, headers?: HeadersInit): Promise<GetBlockByHeightResponse>;
    /** GetLatestValidatorSet queries latest validator-set. */
    GetLatestValidatorSet(req: GetLatestValidatorSetRequest, headers?: HeadersInit): Promise<GetLatestValidatorSetResponse>;
    /** GetValidatorSetByHeight queries validator-set at a given height. */
    GetValidatorSetByHeight(req: GetValidatorSetByHeightRequest, headers?: HeadersInit): Promise<GetValidatorSetByHeightResponse>;
    /**
     * ABCIQuery defines a query handler that supports ABCI queries directly to the
     * application, bypassing Tendermint completely. The ABCI query must contain
     * a valid and supported path, including app, custom, p2p, and store.
     *
     * Since: cosmos-sdk 0.46
     */
    ABCIQuery(req: ABCIQueryRequest, headers?: HeadersInit): Promise<ABCIQueryResponse>;
}

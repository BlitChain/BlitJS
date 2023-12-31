//@ts-nocheck
import * as fm from "../../../../grpc-gateway";
import { GetNodeInfoRequest, GetNodeInfoResponse, GetSyncingRequest, GetSyncingResponse, GetLatestBlockRequest, GetLatestBlockResponse, GetBlockByHeightRequest, GetBlockByHeightResponse, GetLatestValidatorSetRequest, GetLatestValidatorSetResponse, GetValidatorSetByHeightRequest, GetValidatorSetByHeightResponse, ABCIQueryRequest, ABCIQueryResponse } from "./query";
export class Service {
  /** GetNodeInfo queries the current node info. */
  static GetNodeInfo(request: GetNodeInfoRequest, initRequest?: fm.InitReq): Promise<GetNodeInfoResponse> {
    return fm.fetchReq(`/cosmos/base/tendermint/v1beta1/node_info?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** GetSyncing queries node syncing. */
  static GetSyncing(request: GetSyncingRequest, initRequest?: fm.InitReq): Promise<GetSyncingResponse> {
    return fm.fetchReq(`/cosmos/base/tendermint/v1beta1/syncing?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** GetLatestBlock returns the latest block. */
  static GetLatestBlock(request: GetLatestBlockRequest, initRequest?: fm.InitReq): Promise<GetLatestBlockResponse> {
    return fm.fetchReq(`/cosmos/base/tendermint/v1beta1/blocks/latest?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** GetBlockByHeight queries block for given height. */
  static GetBlockByHeight(request: GetBlockByHeightRequest, initRequest?: fm.InitReq): Promise<GetBlockByHeightResponse> {
    return fm.fetchReq(`/cosmos/base/tendermint/v1beta1/blocks/${request["height"]}?${fm.renderURLSearchParams({
      ...request
    }, ["height"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** GetLatestValidatorSet queries latest validator-set. */
  static GetLatestValidatorSet(request: GetLatestValidatorSetRequest, initRequest?: fm.InitReq): Promise<GetLatestValidatorSetResponse> {
    return fm.fetchReq(`/cosmos/base/tendermint/v1beta1/validatorsets/latest?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** GetValidatorSetByHeight queries validator-set at a given height. */
  static GetValidatorSetByHeight(request: GetValidatorSetByHeightRequest, initRequest?: fm.InitReq): Promise<GetValidatorSetByHeightResponse> {
    return fm.fetchReq(`/cosmos/base/tendermint/v1beta1/validatorsets/${request["height"]}?${fm.renderURLSearchParams({
      ...request
    }, ["height"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /**
   * ABCIQuery defines a query handler that supports ABCI queries directly to the
   * application, bypassing Tendermint completely. The ABCI query must contain
   * a valid and supported path, including app, custom, p2p, and store.
   * 
   * Since: cosmos-sdk 0.46
   */
  static ABCIQuery(request: ABCIQueryRequest, initRequest?: fm.InitReq): Promise<ABCIQueryResponse> {
    return fm.fetchReq(`/cosmos/base/tendermint/v1beta1/ABCIQuery`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
}
export class ServiceClientImpl {
  private readonly url: string;
  constructor(url: string) {
    this.url = url;
  }
  /** GetNodeInfo queries the current node info. */
  async GetNodeInfo(req: GetNodeInfoRequest, headers?: HeadersInit): Promise<GetNodeInfoResponse> {
    return Service.GetNodeInfo(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** GetSyncing queries node syncing. */
  async GetSyncing(req: GetSyncingRequest, headers?: HeadersInit): Promise<GetSyncingResponse> {
    return Service.GetSyncing(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** GetLatestBlock returns the latest block. */
  async GetLatestBlock(req: GetLatestBlockRequest, headers?: HeadersInit): Promise<GetLatestBlockResponse> {
    return Service.GetLatestBlock(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** GetBlockByHeight queries block for given height. */
  async GetBlockByHeight(req: GetBlockByHeightRequest, headers?: HeadersInit): Promise<GetBlockByHeightResponse> {
    return Service.GetBlockByHeight(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** GetLatestValidatorSet queries latest validator-set. */
  async GetLatestValidatorSet(req: GetLatestValidatorSetRequest, headers?: HeadersInit): Promise<GetLatestValidatorSetResponse> {
    return Service.GetLatestValidatorSet(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** GetValidatorSetByHeight queries validator-set at a given height. */
  async GetValidatorSetByHeight(req: GetValidatorSetByHeightRequest, headers?: HeadersInit): Promise<GetValidatorSetByHeightResponse> {
    return Service.GetValidatorSetByHeight(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /**
   * ABCIQuery defines a query handler that supports ABCI queries directly to the
   * application, bypassing Tendermint completely. The ABCI query must contain
   * a valid and supported path, including app, custom, p2p, and store.
   * 
   * Since: cosmos-sdk 0.46
   */
  async ABCIQuery(req: ABCIQueryRequest, headers?: HeadersInit): Promise<ABCIQueryResponse> {
    return Service.ABCIQuery(req, {
      headers,
      pathPrefix: this.url
    });
  }
}
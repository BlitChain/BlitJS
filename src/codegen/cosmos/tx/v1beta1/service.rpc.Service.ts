//@ts-nocheck
import * as fm from "../../../grpc-gateway";
import { SimulateRequest, SimulateResponse, GetTxRequest, GetTxResponse, BroadcastTxRequest, BroadcastTxResponse, GetTxsEventRequest, GetTxsEventResponse, GetBlockWithTxsRequest, GetBlockWithTxsResponse } from "./service";
export class Service {
  /** Simulate simulates executing a transaction for estimating gas usage. */
  static Simulate(request: SimulateRequest, initRequest?: fm.InitReq): Promise<SimulateResponse> {
    return fm.fetchReq(`/cosmos/tx/v1beta1/Simulate`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /** GetTx fetches a tx by hash. */
  static GetTx(request: GetTxRequest, initRequest?: fm.InitReq): Promise<GetTxResponse> {
    return fm.fetchReq(`/cosmos/tx/v1beta1/txs/${request["hash"]}?${fm.renderURLSearchParams({
      ...request
    }, ["hash"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** BroadcastTx broadcast transaction. */
  static BroadcastTx(request: BroadcastTxRequest, initRequest?: fm.InitReq): Promise<BroadcastTxResponse> {
    return fm.fetchReq(`/cosmos/tx/v1beta1/BroadcastTx`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /** GetTxsEvent fetches txs by event. */
  static GetTxsEvent(request: GetTxsEventRequest, initRequest?: fm.InitReq): Promise<GetTxsEventResponse> {
    return fm.fetchReq(`/cosmos/tx/v1beta1/txs?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /**
   * GetBlockWithTxs fetches a block with decoded txs.
   * 
   * Since: cosmos-sdk 0.45.2
   */
  static GetBlockWithTxs(request: GetBlockWithTxsRequest, initRequest?: fm.InitReq): Promise<GetBlockWithTxsResponse> {
    return fm.fetchReq(`/cosmos/tx/v1beta1/txs/block/${request["height"]}?${fm.renderURLSearchParams({
      ...request
    }, ["height"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
}
export class ServiceClientImpl {
  private readonly url: string;
  constructor(url: string) {
    this.url = url;
  }
  /** Simulate simulates executing a transaction for estimating gas usage. */
  async Simulate(req: SimulateRequest, headers?: HeadersInit): Promise<SimulateResponse> {
    return Service.Simulate(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** GetTx fetches a tx by hash. */
  async GetTx(req: GetTxRequest, headers?: HeadersInit): Promise<GetTxResponse> {
    return Service.GetTx(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** BroadcastTx broadcast transaction. */
  async BroadcastTx(req: BroadcastTxRequest, headers?: HeadersInit): Promise<BroadcastTxResponse> {
    return Service.BroadcastTx(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** GetTxsEvent fetches txs by event. */
  async GetTxsEvent(req: GetTxsEventRequest, headers?: HeadersInit): Promise<GetTxsEventResponse> {
    return Service.GetTxsEvent(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /**
   * GetBlockWithTxs fetches a block with decoded txs.
   * 
   * Since: cosmos-sdk 0.45.2
   */
  async GetBlockWithTxs(req: GetBlockWithTxsRequest, headers?: HeadersInit): Promise<GetBlockWithTxsResponse> {
    return Service.GetBlockWithTxs(req, {
      headers,
      pathPrefix: this.url
    });
  }
}
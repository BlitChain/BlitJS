//@ts-nocheck
import * as fm from "../../../../grpc-gateway";
import { QueryClientStateRequest, QueryClientStateResponse, QueryClientStatesRequest, QueryClientStatesResponse, QueryConsensusStateRequest, QueryConsensusStateResponse, QueryConsensusStatesRequest, QueryConsensusStatesResponse, QueryConsensusStateHeightsRequest, QueryConsensusStateHeightsResponse, QueryClientStatusRequest, QueryClientStatusResponse, QueryClientParamsRequest, QueryClientParamsResponse, QueryUpgradedClientStateRequest, QueryUpgradedClientStateResponse, QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateResponse } from "./query";
export class Query {
  /** ClientState queries an IBC light client. */
  static ClientState(request: QueryClientStateRequest, initRequest?: fm.InitReq): Promise<QueryClientStateResponse> {
    return fm.fetchReq(`/ibc/core/client/v1/client_states/${request["client_id"]}?${fm.renderURLSearchParams({
      ...request
    }, ["client_id"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** ClientStates queries all the IBC light clients of a chain. */
  static ClientStates(request: QueryClientStatesRequest, initRequest?: fm.InitReq): Promise<QueryClientStatesResponse> {
    return fm.fetchReq(`/ibc/core/client/v1/client_states?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /**
   * ConsensusState queries a consensus state associated with a client state at
   * a given height.
   */
  static ConsensusState(request: QueryConsensusStateRequest, initRequest?: fm.InitReq): Promise<QueryConsensusStateResponse> {
    return fm.fetchReq(`/ibc/core/client/v1/consensus_states/${request["client_id"]}/revision/${request["revision_number"]}/height/${request["revision_height"]}?${fm.renderURLSearchParams({
      ...request
    }, ["client_id", "revision_number", "revision_height"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /**
   * ConsensusStates queries all the consensus state associated with a given
   * client.
   */
  static ConsensusStates(request: QueryConsensusStatesRequest, initRequest?: fm.InitReq): Promise<QueryConsensusStatesResponse> {
    return fm.fetchReq(`/ibc/core/client/v1/consensus_states/${request["client_id"]}?${fm.renderURLSearchParams({
      ...request
    }, ["client_id"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** ConsensusStateHeights queries the height of every consensus states associated with a given client. */
  static ConsensusStateHeights(request: QueryConsensusStateHeightsRequest, initRequest?: fm.InitReq): Promise<QueryConsensusStateHeightsResponse> {
    return fm.fetchReq(`/ibc/core/client/v1/consensus_states/${request["client_id"]}/heights?${fm.renderURLSearchParams({
      ...request
    }, ["client_id"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Status queries the status of an IBC client. */
  static ClientStatus(request: QueryClientStatusRequest, initRequest?: fm.InitReq): Promise<QueryClientStatusResponse> {
    return fm.fetchReq(`/ibc/core/client/v1/client_status/${request["client_id"]}?${fm.renderURLSearchParams({
      ...request
    }, ["client_id"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** ClientParams queries all parameters of the ibc client submodule. */
  static ClientParams(request: QueryClientParamsRequest, initRequest?: fm.InitReq): Promise<QueryClientParamsResponse> {
    return fm.fetchReq(`/ibc/core/client/v1/params?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** UpgradedClientState queries an Upgraded IBC light client. */
  static UpgradedClientState(request: QueryUpgradedClientStateRequest, initRequest?: fm.InitReq): Promise<QueryUpgradedClientStateResponse> {
    return fm.fetchReq(`/ibc/core/client/v1/upgraded_client_states?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** UpgradedConsensusState queries an Upgraded IBC consensus state. */
  static UpgradedConsensusState(request: QueryUpgradedConsensusStateRequest, initRequest?: fm.InitReq): Promise<QueryUpgradedConsensusStateResponse> {
    return fm.fetchReq(`/ibc/core/client/v1/upgraded_consensus_states?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
}
export class QueryClientImpl {
  private readonly url: string;
  constructor(url: string) {
    this.url = url;
  }
  /** ClientState queries an IBC light client. */
  async ClientState(req: QueryClientStateRequest, headers?: HeadersInit): Promise<QueryClientStateResponse> {
    return Query.ClientState(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** ClientStates queries all the IBC light clients of a chain. */
  async ClientStates(req: QueryClientStatesRequest, headers?: HeadersInit): Promise<QueryClientStatesResponse> {
    return Query.ClientStates(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /**
   * ConsensusState queries a consensus state associated with a client state at
   * a given height.
   */
  async ConsensusState(req: QueryConsensusStateRequest, headers?: HeadersInit): Promise<QueryConsensusStateResponse> {
    return Query.ConsensusState(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /**
   * ConsensusStates queries all the consensus state associated with a given
   * client.
   */
  async ConsensusStates(req: QueryConsensusStatesRequest, headers?: HeadersInit): Promise<QueryConsensusStatesResponse> {
    return Query.ConsensusStates(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** ConsensusStateHeights queries the height of every consensus states associated with a given client. */
  async ConsensusStateHeights(req: QueryConsensusStateHeightsRequest, headers?: HeadersInit): Promise<QueryConsensusStateHeightsResponse> {
    return Query.ConsensusStateHeights(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** Status queries the status of an IBC client. */
  async ClientStatus(req: QueryClientStatusRequest, headers?: HeadersInit): Promise<QueryClientStatusResponse> {
    return Query.ClientStatus(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** ClientParams queries all parameters of the ibc client submodule. */
  async ClientParams(req: QueryClientParamsRequest, headers?: HeadersInit): Promise<QueryClientParamsResponse> {
    return Query.ClientParams(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** UpgradedClientState queries an Upgraded IBC light client. */
  async UpgradedClientState(req: QueryUpgradedClientStateRequest, headers?: HeadersInit): Promise<QueryUpgradedClientStateResponse> {
    return Query.UpgradedClientState(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** UpgradedConsensusState queries an Upgraded IBC consensus state. */
  async UpgradedConsensusState(req: QueryUpgradedConsensusStateRequest, headers?: HeadersInit): Promise<QueryUpgradedConsensusStateResponse> {
    return Query.UpgradedConsensusState(req, {
      headers,
      pathPrefix: this.url
    });
  }
}
//@ts-nocheck
import * as fm from "../../../../grpc-gateway";
import { QueryConnectionRequest, QueryConnectionResponse, QueryConnectionsRequest, QueryConnectionsResponse, QueryClientConnectionsRequest, QueryClientConnectionsResponse, QueryConnectionClientStateRequest, QueryConnectionClientStateResponse, QueryConnectionConsensusStateRequest, QueryConnectionConsensusStateResponse, QueryConnectionParamsRequest, QueryConnectionParamsResponse } from "./query";
export class Query {
  /** Connection queries an IBC connection end. */
  static Connection(request: QueryConnectionRequest, initRequest?: fm.InitReq): Promise<QueryConnectionResponse> {
    return fm.fetchReq(`/ibc/core/connection/v1/connections/${request["connection_id"]}?${fm.renderURLSearchParams({
      ...request
    }, ["connection_id"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Connections queries all the IBC connections of a chain. */
  static Connections(request: QueryConnectionsRequest, initRequest?: fm.InitReq): Promise<QueryConnectionsResponse> {
    return fm.fetchReq(`/ibc/core/connection/v1/connections?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /**
   * ClientConnections queries the connection paths associated with a client
   * state.
   */
  static ClientConnections(request: QueryClientConnectionsRequest, initRequest?: fm.InitReq): Promise<QueryClientConnectionsResponse> {
    return fm.fetchReq(`/ibc/core/connection/v1/client_connections/${request["client_id"]}?${fm.renderURLSearchParams({
      ...request
    }, ["client_id"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /**
   * ConnectionClientState queries the client state associated with the
   * connection.
   */
  static ConnectionClientState(request: QueryConnectionClientStateRequest, initRequest?: fm.InitReq): Promise<QueryConnectionClientStateResponse> {
    return fm.fetchReq(`/ibc/core/connection/v1/connections/${request["connection_id"]}/client_state?${fm.renderURLSearchParams({
      ...request
    }, ["connection_id"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /**
   * ConnectionConsensusState queries the consensus state associated with the
   * connection.
   */
  static ConnectionConsensusState(request: QueryConnectionConsensusStateRequest, initRequest?: fm.InitReq): Promise<QueryConnectionConsensusStateResponse> {
    return fm.fetchReq(`/ibc/core/connection/v1/connections/${request["connection_id"]}/consensus_state/revision/${request["revision_number"]}/height/${request["revision_height"]}?${fm.renderURLSearchParams({
      ...request
    }, ["connection_id", "revision_number", "revision_height"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** ConnectionParams queries all parameters of the ibc connection submodule. */
  static ConnectionParams(request: QueryConnectionParamsRequest, initRequest?: fm.InitReq): Promise<QueryConnectionParamsResponse> {
    return fm.fetchReq(`/ibc/core/connection/v1/params?${fm.renderURLSearchParams({
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
  /** Connection queries an IBC connection end. */
  async Connection(req: QueryConnectionRequest, headers?: HeadersInit): Promise<QueryConnectionResponse> {
    return Query.Connection(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** Connections queries all the IBC connections of a chain. */
  async Connections(req: QueryConnectionsRequest, headers?: HeadersInit): Promise<QueryConnectionsResponse> {
    return Query.Connections(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /**
   * ClientConnections queries the connection paths associated with a client
   * state.
   */
  async ClientConnections(req: QueryClientConnectionsRequest, headers?: HeadersInit): Promise<QueryClientConnectionsResponse> {
    return Query.ClientConnections(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /**
   * ConnectionClientState queries the client state associated with the
   * connection.
   */
  async ConnectionClientState(req: QueryConnectionClientStateRequest, headers?: HeadersInit): Promise<QueryConnectionClientStateResponse> {
    return Query.ConnectionClientState(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /**
   * ConnectionConsensusState queries the consensus state associated with the
   * connection.
   */
  async ConnectionConsensusState(req: QueryConnectionConsensusStateRequest, headers?: HeadersInit): Promise<QueryConnectionConsensusStateResponse> {
    return Query.ConnectionConsensusState(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** ConnectionParams queries all parameters of the ibc connection submodule. */
  async ConnectionParams(req: QueryConnectionParamsRequest, headers?: HeadersInit): Promise<QueryConnectionParamsResponse> {
    return Query.ConnectionParams(req, {
      headers,
      pathPrefix: this.url
    });
  }
}
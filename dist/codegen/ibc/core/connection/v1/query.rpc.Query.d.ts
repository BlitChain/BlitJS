import * as fm from "../../../../grpc-gateway";
import { QueryConnectionRequest, QueryConnectionResponse, QueryConnectionsRequest, QueryConnectionsResponse, QueryClientConnectionsRequest, QueryClientConnectionsResponse, QueryConnectionClientStateRequest, QueryConnectionClientStateResponse, QueryConnectionConsensusStateRequest, QueryConnectionConsensusStateResponse, QueryConnectionParamsRequest, QueryConnectionParamsResponse } from "./query";
export declare class Query {
    /** Connection queries an IBC connection end. */
    static Connection(request: QueryConnectionRequest, initRequest?: fm.InitReq): Promise<QueryConnectionResponse>;
    /** Connections queries all the IBC connections of a chain. */
    static Connections(request: QueryConnectionsRequest, initRequest?: fm.InitReq): Promise<QueryConnectionsResponse>;
    /**
     * ClientConnections queries the connection paths associated with a client
     * state.
     */
    static ClientConnections(request: QueryClientConnectionsRequest, initRequest?: fm.InitReq): Promise<QueryClientConnectionsResponse>;
    /**
     * ConnectionClientState queries the client state associated with the
     * connection.
     */
    static ConnectionClientState(request: QueryConnectionClientStateRequest, initRequest?: fm.InitReq): Promise<QueryConnectionClientStateResponse>;
    /**
     * ConnectionConsensusState queries the consensus state associated with the
     * connection.
     */
    static ConnectionConsensusState(request: QueryConnectionConsensusStateRequest, initRequest?: fm.InitReq): Promise<QueryConnectionConsensusStateResponse>;
    /** ConnectionParams queries all parameters of the ibc connection submodule. */
    static ConnectionParams(request: QueryConnectionParamsRequest, initRequest?: fm.InitReq): Promise<QueryConnectionParamsResponse>;
}
export declare class QueryClientImpl {
    private readonly url;
    constructor(url: string);
    /** Connection queries an IBC connection end. */
    Connection(req: QueryConnectionRequest, headers?: HeadersInit): Promise<QueryConnectionResponse>;
    /** Connections queries all the IBC connections of a chain. */
    Connections(req: QueryConnectionsRequest, headers?: HeadersInit): Promise<QueryConnectionsResponse>;
    /**
     * ClientConnections queries the connection paths associated with a client
     * state.
     */
    ClientConnections(req: QueryClientConnectionsRequest, headers?: HeadersInit): Promise<QueryClientConnectionsResponse>;
    /**
     * ConnectionClientState queries the client state associated with the
     * connection.
     */
    ConnectionClientState(req: QueryConnectionClientStateRequest, headers?: HeadersInit): Promise<QueryConnectionClientStateResponse>;
    /**
     * ConnectionConsensusState queries the consensus state associated with the
     * connection.
     */
    ConnectionConsensusState(req: QueryConnectionConsensusStateRequest, headers?: HeadersInit): Promise<QueryConnectionConsensusStateResponse>;
    /** ConnectionParams queries all parameters of the ibc connection submodule. */
    ConnectionParams(req: QueryConnectionParamsRequest, headers?: HeadersInit): Promise<QueryConnectionParamsResponse>;
}

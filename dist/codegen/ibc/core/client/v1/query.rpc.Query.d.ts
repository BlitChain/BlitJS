import * as fm from "../../../../grpc-gateway";
import { QueryClientStateRequest, QueryClientStateResponse, QueryClientStatesRequest, QueryClientStatesResponse, QueryConsensusStateRequest, QueryConsensusStateResponse, QueryConsensusStatesRequest, QueryConsensusStatesResponse, QueryConsensusStateHeightsRequest, QueryConsensusStateHeightsResponse, QueryClientStatusRequest, QueryClientStatusResponse, QueryClientParamsRequest, QueryClientParamsResponse, QueryUpgradedClientStateRequest, QueryUpgradedClientStateResponse, QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateResponse } from "./query";
export declare class Query {
    /** ClientState queries an IBC light client. */
    static ClientState(request: QueryClientStateRequest, initRequest?: fm.InitReq): Promise<QueryClientStateResponse>;
    /** ClientStates queries all the IBC light clients of a chain. */
    static ClientStates(request: QueryClientStatesRequest, initRequest?: fm.InitReq): Promise<QueryClientStatesResponse>;
    /**
     * ConsensusState queries a consensus state associated with a client state at
     * a given height.
     */
    static ConsensusState(request: QueryConsensusStateRequest, initRequest?: fm.InitReq): Promise<QueryConsensusStateResponse>;
    /**
     * ConsensusStates queries all the consensus state associated with a given
     * client.
     */
    static ConsensusStates(request: QueryConsensusStatesRequest, initRequest?: fm.InitReq): Promise<QueryConsensusStatesResponse>;
    /** ConsensusStateHeights queries the height of every consensus states associated with a given client. */
    static ConsensusStateHeights(request: QueryConsensusStateHeightsRequest, initRequest?: fm.InitReq): Promise<QueryConsensusStateHeightsResponse>;
    /** Status queries the status of an IBC client. */
    static ClientStatus(request: QueryClientStatusRequest, initRequest?: fm.InitReq): Promise<QueryClientStatusResponse>;
    /** ClientParams queries all parameters of the ibc client submodule. */
    static ClientParams(request: QueryClientParamsRequest, initRequest?: fm.InitReq): Promise<QueryClientParamsResponse>;
    /** UpgradedClientState queries an Upgraded IBC light client. */
    static UpgradedClientState(request: QueryUpgradedClientStateRequest, initRequest?: fm.InitReq): Promise<QueryUpgradedClientStateResponse>;
    /** UpgradedConsensusState queries an Upgraded IBC consensus state. */
    static UpgradedConsensusState(request: QueryUpgradedConsensusStateRequest, initRequest?: fm.InitReq): Promise<QueryUpgradedConsensusStateResponse>;
}
export declare class QueryClientImpl {
    private readonly url;
    constructor(url: string);
    /** ClientState queries an IBC light client. */
    ClientState(req: QueryClientStateRequest, headers?: HeadersInit): Promise<QueryClientStateResponse>;
    /** ClientStates queries all the IBC light clients of a chain. */
    ClientStates(req: QueryClientStatesRequest, headers?: HeadersInit): Promise<QueryClientStatesResponse>;
    /**
     * ConsensusState queries a consensus state associated with a client state at
     * a given height.
     */
    ConsensusState(req: QueryConsensusStateRequest, headers?: HeadersInit): Promise<QueryConsensusStateResponse>;
    /**
     * ConsensusStates queries all the consensus state associated with a given
     * client.
     */
    ConsensusStates(req: QueryConsensusStatesRequest, headers?: HeadersInit): Promise<QueryConsensusStatesResponse>;
    /** ConsensusStateHeights queries the height of every consensus states associated with a given client. */
    ConsensusStateHeights(req: QueryConsensusStateHeightsRequest, headers?: HeadersInit): Promise<QueryConsensusStateHeightsResponse>;
    /** Status queries the status of an IBC client. */
    ClientStatus(req: QueryClientStatusRequest, headers?: HeadersInit): Promise<QueryClientStatusResponse>;
    /** ClientParams queries all parameters of the ibc client submodule. */
    ClientParams(req: QueryClientParamsRequest, headers?: HeadersInit): Promise<QueryClientParamsResponse>;
    /** UpgradedClientState queries an Upgraded IBC light client. */
    UpgradedClientState(req: QueryUpgradedClientStateRequest, headers?: HeadersInit): Promise<QueryUpgradedClientStateResponse>;
    /** UpgradedConsensusState queries an Upgraded IBC consensus state. */
    UpgradedConsensusState(req: QueryUpgradedConsensusStateRequest, headers?: HeadersInit): Promise<QueryUpgradedConsensusStateResponse>;
}

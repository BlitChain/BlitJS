//@ts-nocheck
import * as fm from "../../../../grpc-gateway";
export class Query {
    /** Connection queries an IBC connection end. */
    static Connection(request, initRequest) {
        return fm.fetchReq(`/ibc/core/connection/v1/connections/${request["connection_id"]}?${fm.renderURLSearchParams({
            ...request
        }, ["connection_id"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** Connections queries all the IBC connections of a chain. */
    static Connections(request, initRequest) {
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
    static ClientConnections(request, initRequest) {
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
    static ConnectionClientState(request, initRequest) {
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
    static ConnectionConsensusState(request, initRequest) {
        return fm.fetchReq(`/ibc/core/connection/v1/connections/${request["connection_id"]}/consensus_state/revision/${request["revision_number"]}/height/${request["revision_height"]}?${fm.renderURLSearchParams({
            ...request
        }, ["connection_id", "revision_number", "revision_height"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** ConnectionParams queries all parameters of the ibc connection submodule. */
    static ConnectionParams(request, initRequest) {
        return fm.fetchReq(`/ibc/core/connection/v1/params?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
}
export class QueryClientImpl {
    url;
    constructor(url) {
        this.url = url;
    }
    /** Connection queries an IBC connection end. */
    async Connection(req, headers) {
        return Query.Connection(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** Connections queries all the IBC connections of a chain. */
    async Connections(req, headers) {
        return Query.Connections(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /**
     * ClientConnections queries the connection paths associated with a client
     * state.
     */
    async ClientConnections(req, headers) {
        return Query.ClientConnections(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /**
     * ConnectionClientState queries the client state associated with the
     * connection.
     */
    async ConnectionClientState(req, headers) {
        return Query.ConnectionClientState(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /**
     * ConnectionConsensusState queries the consensus state associated with the
     * connection.
     */
    async ConnectionConsensusState(req, headers) {
        return Query.ConnectionConsensusState(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** ConnectionParams queries all parameters of the ibc connection submodule. */
    async ConnectionParams(req, headers) {
        return Query.ConnectionParams(req, {
            headers,
            pathPrefix: this.url
        });
    }
}
//# sourceMappingURL=query.rpc.Query.js.map
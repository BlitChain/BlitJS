//@ts-nocheck
import * as fm from "../../../../grpc-gateway";
export class Query {
    /** ClientState queries an IBC light client. */
    static ClientState(request, initRequest) {
        return fm.fetchReq(`/ibc/core/client/v1/client_states/${request["client_id"]}?${fm.renderURLSearchParams({
            ...request
        }, ["client_id"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** ClientStates queries all the IBC light clients of a chain. */
    static ClientStates(request, initRequest) {
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
    static ConsensusState(request, initRequest) {
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
    static ConsensusStates(request, initRequest) {
        return fm.fetchReq(`/ibc/core/client/v1/consensus_states/${request["client_id"]}?${fm.renderURLSearchParams({
            ...request
        }, ["client_id"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** ConsensusStateHeights queries the height of every consensus states associated with a given client. */
    static ConsensusStateHeights(request, initRequest) {
        return fm.fetchReq(`/ibc/core/client/v1/consensus_states/${request["client_id"]}/heights?${fm.renderURLSearchParams({
            ...request
        }, ["client_id"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** Status queries the status of an IBC client. */
    static ClientStatus(request, initRequest) {
        return fm.fetchReq(`/ibc/core/client/v1/client_status/${request["client_id"]}?${fm.renderURLSearchParams({
            ...request
        }, ["client_id"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** ClientParams queries all parameters of the ibc client submodule. */
    static ClientParams(request, initRequest) {
        return fm.fetchReq(`/ibc/core/client/v1/params?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** UpgradedClientState queries an Upgraded IBC light client. */
    static UpgradedClientState(request, initRequest) {
        return fm.fetchReq(`/ibc/core/client/v1/upgraded_client_states?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** UpgradedConsensusState queries an Upgraded IBC consensus state. */
    static UpgradedConsensusState(request, initRequest) {
        return fm.fetchReq(`/ibc/core/client/v1/upgraded_consensus_states?${fm.renderURLSearchParams({
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
    /** ClientState queries an IBC light client. */
    async ClientState(req, headers) {
        return Query.ClientState(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** ClientStates queries all the IBC light clients of a chain. */
    async ClientStates(req, headers) {
        return Query.ClientStates(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /**
     * ConsensusState queries a consensus state associated with a client state at
     * a given height.
     */
    async ConsensusState(req, headers) {
        return Query.ConsensusState(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /**
     * ConsensusStates queries all the consensus state associated with a given
     * client.
     */
    async ConsensusStates(req, headers) {
        return Query.ConsensusStates(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** ConsensusStateHeights queries the height of every consensus states associated with a given client. */
    async ConsensusStateHeights(req, headers) {
        return Query.ConsensusStateHeights(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** Status queries the status of an IBC client. */
    async ClientStatus(req, headers) {
        return Query.ClientStatus(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** ClientParams queries all parameters of the ibc client submodule. */
    async ClientParams(req, headers) {
        return Query.ClientParams(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** UpgradedClientState queries an Upgraded IBC light client. */
    async UpgradedClientState(req, headers) {
        return Query.UpgradedClientState(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** UpgradedConsensusState queries an Upgraded IBC consensus state. */
    async UpgradedConsensusState(req, headers) {
        return Query.UpgradedConsensusState(req, {
            headers,
            pathPrefix: this.url
        });
    }
}
//# sourceMappingURL=query.rpc.Query.js.map
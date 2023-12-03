//@ts-nocheck
import * as fm from "../../../../grpc-gateway";
export class Query {
    /** Channel queries an IBC Channel. */
    static Channel(request, initRequest) {
        return fm.fetchReq(`/ibc/core/channel/v1/channels/${request["channel_id"]}/ports/${request["port_id"]}?${fm.renderURLSearchParams({
            ...request
        }, ["channel_id", "port_id"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** Channels queries all the IBC channels of a chain. */
    static Channels(request, initRequest) {
        return fm.fetchReq(`/ibc/core/channel/v1/channels?${fm.renderURLSearchParams({
            ...request
        }, [])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /**
     * ConnectionChannels queries all the channels associated with a connection
     * end.
     */
    static ConnectionChannels(request, initRequest) {
        return fm.fetchReq(`/ibc/core/channel/v1/connections/${request["connection"]}/channels?${fm.renderURLSearchParams({
            ...request
        }, ["connection"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /**
     * ChannelClientState queries for the client state for the channel associated
     * with the provided channel identifiers.
     */
    static ChannelClientState(request, initRequest) {
        return fm.fetchReq(`/ibc/core/channel/v1/channels/${request["channel_id"]}/ports/${request["port_id"]}/client_state?${fm.renderURLSearchParams({
            ...request
        }, ["channel_id", "port_id"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /**
     * ChannelConsensusState queries for the consensus state for the channel
     * associated with the provided channel identifiers.
     */
    static ChannelConsensusState(request, initRequest) {
        return fm.fetchReq(`/ibc/core/channel/v1/channels/${request["channel_id"]}/ports/${request["port_id"]}/consensus_state/revision/${request["revision_number"]}/height/${request["revision_height"]}?${fm.renderURLSearchParams({
            ...request
        }, ["channel_id", "port_id", "revision_number", "revision_height"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** PacketCommitment queries a stored packet commitment hash. */
    static PacketCommitment(request, initRequest) {
        return fm.fetchReq(`/ibc/core/channel/v1/channels/${request["channel_id"]}/ports/${request["port_id"]}/packet_commitments/${request["sequence"]}?${fm.renderURLSearchParams({
            ...request
        }, ["channel_id", "port_id", "sequence"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /**
     * PacketCommitments returns all the packet commitments hashes associated
     * with a channel.
     */
    static PacketCommitments(request, initRequest) {
        return fm.fetchReq(`/ibc/core/channel/v1/channels/${request["channel_id"]}/ports/${request["port_id"]}/packet_commitments?${fm.renderURLSearchParams({
            ...request
        }, ["channel_id", "port_id"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /**
     * PacketReceipt queries if a given packet sequence has been received on the
     * queried chain
     */
    static PacketReceipt(request, initRequest) {
        return fm.fetchReq(`/ibc/core/channel/v1/channels/${request["channel_id"]}/ports/${request["port_id"]}/packet_receipts/${request["sequence"]}?${fm.renderURLSearchParams({
            ...request
        }, ["channel_id", "port_id", "sequence"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** PacketAcknowledgement queries a stored packet acknowledgement hash. */
    static PacketAcknowledgement(request, initRequest) {
        return fm.fetchReq(`/ibc/core/channel/v1/channels/${request["channel_id"]}/ports/${request["port_id"]}/packet_acks/${request["sequence"]}?${fm.renderURLSearchParams({
            ...request
        }, ["channel_id", "port_id", "sequence"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /**
     * PacketAcknowledgements returns all the packet acknowledgements associated
     * with a channel.
     */
    static PacketAcknowledgements(request, initRequest) {
        return fm.fetchReq(`/ibc/core/channel/v1/channels/${request["channel_id"]}/ports/${request["port_id"]}/packet_acknowledgements?${fm.renderURLSearchParams({
            ...request
        }, ["channel_id", "port_id"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /**
     * UnreceivedPackets returns all the unreceived IBC packets associated with a
     * channel and sequences.
     */
    static UnreceivedPackets(request, initRequest) {
        return fm.fetchReq(`/ibc/core/channel/v1/channels/${request["channel_id"]}/ports/${request["port_id"]}/packet_commitments/${request["packet_commitment_sequences"]}/unreceived_packets?${fm.renderURLSearchParams({
            ...request
        }, ["channel_id", "port_id", "packet_commitment_sequences"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /**
     * UnreceivedAcks returns all the unreceived IBC acknowledgements associated
     * with a channel and sequences.
     */
    static UnreceivedAcks(request, initRequest) {
        return fm.fetchReq(`/ibc/core/channel/v1/channels/${request["channel_id"]}/ports/${request["port_id"]}/packet_commitments/${request["packet_ack_sequences"]}/unreceived_acks?${fm.renderURLSearchParams({
            ...request
        }, ["channel_id", "port_id", "packet_ack_sequences"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** NextSequenceReceive returns the next receive sequence for a given channel. */
    static NextSequenceReceive(request, initRequest) {
        return fm.fetchReq(`/ibc/core/channel/v1/channels/${request["channel_id"]}/ports/${request["port_id"]}/next_sequence?${fm.renderURLSearchParams({
            ...request
        }, ["channel_id", "port_id"])}`, {
            ...initRequest,
            method: "GET"
        });
    }
    /** NextSequenceSend returns the next send sequence for a given channel. */
    static NextSequenceSend(request, initRequest) {
        return fm.fetchReq(`/ibc/core/channel/v1/channels/${request["channel_id"]}/ports/${request["port_id"]}/next_sequence_send?${fm.renderURLSearchParams({
            ...request
        }, ["channel_id", "port_id"])}`, {
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
    /** Channel queries an IBC Channel. */
    async Channel(req, headers) {
        return Query.Channel(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** Channels queries all the IBC channels of a chain. */
    async Channels(req, headers) {
        return Query.Channels(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /**
     * ConnectionChannels queries all the channels associated with a connection
     * end.
     */
    async ConnectionChannels(req, headers) {
        return Query.ConnectionChannels(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /**
     * ChannelClientState queries for the client state for the channel associated
     * with the provided channel identifiers.
     */
    async ChannelClientState(req, headers) {
        return Query.ChannelClientState(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /**
     * ChannelConsensusState queries for the consensus state for the channel
     * associated with the provided channel identifiers.
     */
    async ChannelConsensusState(req, headers) {
        return Query.ChannelConsensusState(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** PacketCommitment queries a stored packet commitment hash. */
    async PacketCommitment(req, headers) {
        return Query.PacketCommitment(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /**
     * PacketCommitments returns all the packet commitments hashes associated
     * with a channel.
     */
    async PacketCommitments(req, headers) {
        return Query.PacketCommitments(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /**
     * PacketReceipt queries if a given packet sequence has been received on the
     * queried chain
     */
    async PacketReceipt(req, headers) {
        return Query.PacketReceipt(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** PacketAcknowledgement queries a stored packet acknowledgement hash. */
    async PacketAcknowledgement(req, headers) {
        return Query.PacketAcknowledgement(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /**
     * PacketAcknowledgements returns all the packet acknowledgements associated
     * with a channel.
     */
    async PacketAcknowledgements(req, headers) {
        return Query.PacketAcknowledgements(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /**
     * UnreceivedPackets returns all the unreceived IBC packets associated with a
     * channel and sequences.
     */
    async UnreceivedPackets(req, headers) {
        return Query.UnreceivedPackets(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /**
     * UnreceivedAcks returns all the unreceived IBC acknowledgements associated
     * with a channel and sequences.
     */
    async UnreceivedAcks(req, headers) {
        return Query.UnreceivedAcks(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** NextSequenceReceive returns the next receive sequence for a given channel. */
    async NextSequenceReceive(req, headers) {
        return Query.NextSequenceReceive(req, {
            headers,
            pathPrefix: this.url
        });
    }
    /** NextSequenceSend returns the next send sequence for a given channel. */
    async NextSequenceSend(req, headers) {
        return Query.NextSequenceSend(req, {
            headers,
            pathPrefix: this.url
        });
    }
}
//# sourceMappingURL=query.rpc.Query.js.map
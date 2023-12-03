import * as fm from "../../../../grpc-gateway";
import { QueryChannelRequest, QueryChannelResponse, QueryChannelsRequest, QueryChannelsResponse, QueryConnectionChannelsRequest, QueryConnectionChannelsResponse, QueryChannelClientStateRequest, QueryChannelClientStateResponse, QueryChannelConsensusStateRequest, QueryChannelConsensusStateResponse, QueryPacketCommitmentRequest, QueryPacketCommitmentResponse, QueryPacketCommitmentsRequest, QueryPacketCommitmentsResponse, QueryPacketReceiptRequest, QueryPacketReceiptResponse, QueryPacketAcknowledgementRequest, QueryPacketAcknowledgementResponse, QueryPacketAcknowledgementsRequest, QueryPacketAcknowledgementsResponse, QueryUnreceivedPacketsRequest, QueryUnreceivedPacketsResponse, QueryUnreceivedAcksRequest, QueryUnreceivedAcksResponse, QueryNextSequenceReceiveRequest, QueryNextSequenceReceiveResponse, QueryNextSequenceSendRequest, QueryNextSequenceSendResponse } from "./query";
export declare class Query {
    /** Channel queries an IBC Channel. */
    static Channel(request: QueryChannelRequest, initRequest?: fm.InitReq): Promise<QueryChannelResponse>;
    /** Channels queries all the IBC channels of a chain. */
    static Channels(request: QueryChannelsRequest, initRequest?: fm.InitReq): Promise<QueryChannelsResponse>;
    /**
     * ConnectionChannels queries all the channels associated with a connection
     * end.
     */
    static ConnectionChannels(request: QueryConnectionChannelsRequest, initRequest?: fm.InitReq): Promise<QueryConnectionChannelsResponse>;
    /**
     * ChannelClientState queries for the client state for the channel associated
     * with the provided channel identifiers.
     */
    static ChannelClientState(request: QueryChannelClientStateRequest, initRequest?: fm.InitReq): Promise<QueryChannelClientStateResponse>;
    /**
     * ChannelConsensusState queries for the consensus state for the channel
     * associated with the provided channel identifiers.
     */
    static ChannelConsensusState(request: QueryChannelConsensusStateRequest, initRequest?: fm.InitReq): Promise<QueryChannelConsensusStateResponse>;
    /** PacketCommitment queries a stored packet commitment hash. */
    static PacketCommitment(request: QueryPacketCommitmentRequest, initRequest?: fm.InitReq): Promise<QueryPacketCommitmentResponse>;
    /**
     * PacketCommitments returns all the packet commitments hashes associated
     * with a channel.
     */
    static PacketCommitments(request: QueryPacketCommitmentsRequest, initRequest?: fm.InitReq): Promise<QueryPacketCommitmentsResponse>;
    /**
     * PacketReceipt queries if a given packet sequence has been received on the
     * queried chain
     */
    static PacketReceipt(request: QueryPacketReceiptRequest, initRequest?: fm.InitReq): Promise<QueryPacketReceiptResponse>;
    /** PacketAcknowledgement queries a stored packet acknowledgement hash. */
    static PacketAcknowledgement(request: QueryPacketAcknowledgementRequest, initRequest?: fm.InitReq): Promise<QueryPacketAcknowledgementResponse>;
    /**
     * PacketAcknowledgements returns all the packet acknowledgements associated
     * with a channel.
     */
    static PacketAcknowledgements(request: QueryPacketAcknowledgementsRequest, initRequest?: fm.InitReq): Promise<QueryPacketAcknowledgementsResponse>;
    /**
     * UnreceivedPackets returns all the unreceived IBC packets associated with a
     * channel and sequences.
     */
    static UnreceivedPackets(request: QueryUnreceivedPacketsRequest, initRequest?: fm.InitReq): Promise<QueryUnreceivedPacketsResponse>;
    /**
     * UnreceivedAcks returns all the unreceived IBC acknowledgements associated
     * with a channel and sequences.
     */
    static UnreceivedAcks(request: QueryUnreceivedAcksRequest, initRequest?: fm.InitReq): Promise<QueryUnreceivedAcksResponse>;
    /** NextSequenceReceive returns the next receive sequence for a given channel. */
    static NextSequenceReceive(request: QueryNextSequenceReceiveRequest, initRequest?: fm.InitReq): Promise<QueryNextSequenceReceiveResponse>;
    /** NextSequenceSend returns the next send sequence for a given channel. */
    static NextSequenceSend(request: QueryNextSequenceSendRequest, initRequest?: fm.InitReq): Promise<QueryNextSequenceSendResponse>;
}
export declare class QueryClientImpl {
    private readonly url;
    constructor(url: string);
    /** Channel queries an IBC Channel. */
    Channel(req: QueryChannelRequest, headers?: HeadersInit): Promise<QueryChannelResponse>;
    /** Channels queries all the IBC channels of a chain. */
    Channels(req: QueryChannelsRequest, headers?: HeadersInit): Promise<QueryChannelsResponse>;
    /**
     * ConnectionChannels queries all the channels associated with a connection
     * end.
     */
    ConnectionChannels(req: QueryConnectionChannelsRequest, headers?: HeadersInit): Promise<QueryConnectionChannelsResponse>;
    /**
     * ChannelClientState queries for the client state for the channel associated
     * with the provided channel identifiers.
     */
    ChannelClientState(req: QueryChannelClientStateRequest, headers?: HeadersInit): Promise<QueryChannelClientStateResponse>;
    /**
     * ChannelConsensusState queries for the consensus state for the channel
     * associated with the provided channel identifiers.
     */
    ChannelConsensusState(req: QueryChannelConsensusStateRequest, headers?: HeadersInit): Promise<QueryChannelConsensusStateResponse>;
    /** PacketCommitment queries a stored packet commitment hash. */
    PacketCommitment(req: QueryPacketCommitmentRequest, headers?: HeadersInit): Promise<QueryPacketCommitmentResponse>;
    /**
     * PacketCommitments returns all the packet commitments hashes associated
     * with a channel.
     */
    PacketCommitments(req: QueryPacketCommitmentsRequest, headers?: HeadersInit): Promise<QueryPacketCommitmentsResponse>;
    /**
     * PacketReceipt queries if a given packet sequence has been received on the
     * queried chain
     */
    PacketReceipt(req: QueryPacketReceiptRequest, headers?: HeadersInit): Promise<QueryPacketReceiptResponse>;
    /** PacketAcknowledgement queries a stored packet acknowledgement hash. */
    PacketAcknowledgement(req: QueryPacketAcknowledgementRequest, headers?: HeadersInit): Promise<QueryPacketAcknowledgementResponse>;
    /**
     * PacketAcknowledgements returns all the packet acknowledgements associated
     * with a channel.
     */
    PacketAcknowledgements(req: QueryPacketAcknowledgementsRequest, headers?: HeadersInit): Promise<QueryPacketAcknowledgementsResponse>;
    /**
     * UnreceivedPackets returns all the unreceived IBC packets associated with a
     * channel and sequences.
     */
    UnreceivedPackets(req: QueryUnreceivedPacketsRequest, headers?: HeadersInit): Promise<QueryUnreceivedPacketsResponse>;
    /**
     * UnreceivedAcks returns all the unreceived IBC acknowledgements associated
     * with a channel and sequences.
     */
    UnreceivedAcks(req: QueryUnreceivedAcksRequest, headers?: HeadersInit): Promise<QueryUnreceivedAcksResponse>;
    /** NextSequenceReceive returns the next receive sequence for a given channel. */
    NextSequenceReceive(req: QueryNextSequenceReceiveRequest, headers?: HeadersInit): Promise<QueryNextSequenceReceiveResponse>;
    /** NextSequenceSend returns the next send sequence for a given channel. */
    NextSequenceSend(req: QueryNextSequenceSendRequest, headers?: HeadersInit): Promise<QueryNextSequenceSendResponse>;
}

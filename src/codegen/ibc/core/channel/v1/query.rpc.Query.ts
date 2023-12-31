//@ts-nocheck
import * as fm from "../../../../grpc-gateway";
import { QueryChannelRequest, QueryChannelResponse, QueryChannelsRequest, QueryChannelsResponse, QueryConnectionChannelsRequest, QueryConnectionChannelsResponse, QueryChannelClientStateRequest, QueryChannelClientStateResponse, QueryChannelConsensusStateRequest, QueryChannelConsensusStateResponse, QueryPacketCommitmentRequest, QueryPacketCommitmentResponse, QueryPacketCommitmentsRequest, QueryPacketCommitmentsResponse, QueryPacketReceiptRequest, QueryPacketReceiptResponse, QueryPacketAcknowledgementRequest, QueryPacketAcknowledgementResponse, QueryPacketAcknowledgementsRequest, QueryPacketAcknowledgementsResponse, QueryUnreceivedPacketsRequest, QueryUnreceivedPacketsResponse, QueryUnreceivedAcksRequest, QueryUnreceivedAcksResponse, QueryNextSequenceReceiveRequest, QueryNextSequenceReceiveResponse, QueryNextSequenceSendRequest, QueryNextSequenceSendResponse } from "./query";
export class Query {
  /** Channel queries an IBC Channel. */
  static Channel(request: QueryChannelRequest, initRequest?: fm.InitReq): Promise<QueryChannelResponse> {
    return fm.fetchReq(`/ibc/core/channel/v1/channels/${request["channel_id"]}/ports/${request["port_id"]}?${fm.renderURLSearchParams({
      ...request
    }, ["channel_id", "port_id"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Channels queries all the IBC channels of a chain. */
  static Channels(request: QueryChannelsRequest, initRequest?: fm.InitReq): Promise<QueryChannelsResponse> {
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
  static ConnectionChannels(request: QueryConnectionChannelsRequest, initRequest?: fm.InitReq): Promise<QueryConnectionChannelsResponse> {
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
  static ChannelClientState(request: QueryChannelClientStateRequest, initRequest?: fm.InitReq): Promise<QueryChannelClientStateResponse> {
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
  static ChannelConsensusState(request: QueryChannelConsensusStateRequest, initRequest?: fm.InitReq): Promise<QueryChannelConsensusStateResponse> {
    return fm.fetchReq(`/ibc/core/channel/v1/channels/${request["channel_id"]}/ports/${request["port_id"]}/consensus_state/revision/${request["revision_number"]}/height/${request["revision_height"]}?${fm.renderURLSearchParams({
      ...request
    }, ["channel_id", "port_id", "revision_number", "revision_height"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** PacketCommitment queries a stored packet commitment hash. */
  static PacketCommitment(request: QueryPacketCommitmentRequest, initRequest?: fm.InitReq): Promise<QueryPacketCommitmentResponse> {
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
  static PacketCommitments(request: QueryPacketCommitmentsRequest, initRequest?: fm.InitReq): Promise<QueryPacketCommitmentsResponse> {
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
  static PacketReceipt(request: QueryPacketReceiptRequest, initRequest?: fm.InitReq): Promise<QueryPacketReceiptResponse> {
    return fm.fetchReq(`/ibc/core/channel/v1/channels/${request["channel_id"]}/ports/${request["port_id"]}/packet_receipts/${request["sequence"]}?${fm.renderURLSearchParams({
      ...request
    }, ["channel_id", "port_id", "sequence"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** PacketAcknowledgement queries a stored packet acknowledgement hash. */
  static PacketAcknowledgement(request: QueryPacketAcknowledgementRequest, initRequest?: fm.InitReq): Promise<QueryPacketAcknowledgementResponse> {
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
  static PacketAcknowledgements(request: QueryPacketAcknowledgementsRequest, initRequest?: fm.InitReq): Promise<QueryPacketAcknowledgementsResponse> {
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
  static UnreceivedPackets(request: QueryUnreceivedPacketsRequest, initRequest?: fm.InitReq): Promise<QueryUnreceivedPacketsResponse> {
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
  static UnreceivedAcks(request: QueryUnreceivedAcksRequest, initRequest?: fm.InitReq): Promise<QueryUnreceivedAcksResponse> {
    return fm.fetchReq(`/ibc/core/channel/v1/channels/${request["channel_id"]}/ports/${request["port_id"]}/packet_commitments/${request["packet_ack_sequences"]}/unreceived_acks?${fm.renderURLSearchParams({
      ...request
    }, ["channel_id", "port_id", "packet_ack_sequences"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** NextSequenceReceive returns the next receive sequence for a given channel. */
  static NextSequenceReceive(request: QueryNextSequenceReceiveRequest, initRequest?: fm.InitReq): Promise<QueryNextSequenceReceiveResponse> {
    return fm.fetchReq(`/ibc/core/channel/v1/channels/${request["channel_id"]}/ports/${request["port_id"]}/next_sequence?${fm.renderURLSearchParams({
      ...request
    }, ["channel_id", "port_id"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** NextSequenceSend returns the next send sequence for a given channel. */
  static NextSequenceSend(request: QueryNextSequenceSendRequest, initRequest?: fm.InitReq): Promise<QueryNextSequenceSendResponse> {
    return fm.fetchReq(`/ibc/core/channel/v1/channels/${request["channel_id"]}/ports/${request["port_id"]}/next_sequence_send?${fm.renderURLSearchParams({
      ...request
    }, ["channel_id", "port_id"])}`, {
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
  /** Channel queries an IBC Channel. */
  async Channel(req: QueryChannelRequest, headers?: HeadersInit): Promise<QueryChannelResponse> {
    return Query.Channel(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** Channels queries all the IBC channels of a chain. */
  async Channels(req: QueryChannelsRequest, headers?: HeadersInit): Promise<QueryChannelsResponse> {
    return Query.Channels(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /**
   * ConnectionChannels queries all the channels associated with a connection
   * end.
   */
  async ConnectionChannels(req: QueryConnectionChannelsRequest, headers?: HeadersInit): Promise<QueryConnectionChannelsResponse> {
    return Query.ConnectionChannels(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /**
   * ChannelClientState queries for the client state for the channel associated
   * with the provided channel identifiers.
   */
  async ChannelClientState(req: QueryChannelClientStateRequest, headers?: HeadersInit): Promise<QueryChannelClientStateResponse> {
    return Query.ChannelClientState(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /**
   * ChannelConsensusState queries for the consensus state for the channel
   * associated with the provided channel identifiers.
   */
  async ChannelConsensusState(req: QueryChannelConsensusStateRequest, headers?: HeadersInit): Promise<QueryChannelConsensusStateResponse> {
    return Query.ChannelConsensusState(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** PacketCommitment queries a stored packet commitment hash. */
  async PacketCommitment(req: QueryPacketCommitmentRequest, headers?: HeadersInit): Promise<QueryPacketCommitmentResponse> {
    return Query.PacketCommitment(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /**
   * PacketCommitments returns all the packet commitments hashes associated
   * with a channel.
   */
  async PacketCommitments(req: QueryPacketCommitmentsRequest, headers?: HeadersInit): Promise<QueryPacketCommitmentsResponse> {
    return Query.PacketCommitments(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /**
   * PacketReceipt queries if a given packet sequence has been received on the
   * queried chain
   */
  async PacketReceipt(req: QueryPacketReceiptRequest, headers?: HeadersInit): Promise<QueryPacketReceiptResponse> {
    return Query.PacketReceipt(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** PacketAcknowledgement queries a stored packet acknowledgement hash. */
  async PacketAcknowledgement(req: QueryPacketAcknowledgementRequest, headers?: HeadersInit): Promise<QueryPacketAcknowledgementResponse> {
    return Query.PacketAcknowledgement(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /**
   * PacketAcknowledgements returns all the packet acknowledgements associated
   * with a channel.
   */
  async PacketAcknowledgements(req: QueryPacketAcknowledgementsRequest, headers?: HeadersInit): Promise<QueryPacketAcknowledgementsResponse> {
    return Query.PacketAcknowledgements(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /**
   * UnreceivedPackets returns all the unreceived IBC packets associated with a
   * channel and sequences.
   */
  async UnreceivedPackets(req: QueryUnreceivedPacketsRequest, headers?: HeadersInit): Promise<QueryUnreceivedPacketsResponse> {
    return Query.UnreceivedPackets(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /**
   * UnreceivedAcks returns all the unreceived IBC acknowledgements associated
   * with a channel and sequences.
   */
  async UnreceivedAcks(req: QueryUnreceivedAcksRequest, headers?: HeadersInit): Promise<QueryUnreceivedAcksResponse> {
    return Query.UnreceivedAcks(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** NextSequenceReceive returns the next receive sequence for a given channel. */
  async NextSequenceReceive(req: QueryNextSequenceReceiveRequest, headers?: HeadersInit): Promise<QueryNextSequenceReceiveResponse> {
    return Query.NextSequenceReceive(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** NextSequenceSend returns the next send sequence for a given channel. */
  async NextSequenceSend(req: QueryNextSequenceSendRequest, headers?: HeadersInit): Promise<QueryNextSequenceSendResponse> {
    return Query.NextSequenceSend(req, {
      headers,
      pathPrefix: this.url
    });
  }
}
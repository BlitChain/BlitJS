//@ts-nocheck
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../../cosmos/base/query/v1beta1/pagination";
import { Channel, ChannelAmino, ChannelSDKType, IdentifiedChannel, IdentifiedChannelAmino, IdentifiedChannelSDKType, PacketState, PacketStateAmino, PacketStateSDKType } from "./channel";
import { Height, HeightAmino, HeightSDKType, IdentifiedClientState, IdentifiedClientStateAmino, IdentifiedClientStateSDKType } from "../../client/v1/client";
import { Any, AnyAmino, AnySDKType } from "../../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../../helpers";
import { GlobalDecoderRegistry } from "../../../../registry";
export const protobufPackage = "ibc.core.channel.v1";
/** QueryChannelRequest is the request type for the Query/Channel RPC method */
export interface QueryChannelRequest {
  /** port unique identifier */
  port_id: string;
  /** channel unique identifier */
  channel_id: string;
}
export interface QueryChannelRequestProtoMsg {
  type_url: "/ibc.core.channel.v1.QueryChannelRequest";
  value: Uint8Array;
}
/** QueryChannelRequest is the request type for the Query/Channel RPC method */
export interface QueryChannelRequestAmino {
  /** port unique identifier */
  port_id?: string;
  /** channel unique identifier */
  channel_id?: string;
}
export interface QueryChannelRequestAminoMsg {
  type: "cosmos-sdk/QueryChannelRequest";
  value: QueryChannelRequestAmino;
}
/** QueryChannelRequest is the request type for the Query/Channel RPC method */
export interface QueryChannelRequestSDKType {
  port_id: string;
  channel_id: string;
}
/**
 * QueryChannelResponse is the response type for the Query/Channel RPC method.
 * Besides the Channel end, it includes a proof and the height from which the
 * proof was retrieved.
 */
export interface QueryChannelResponse {
  /** channel associated with the request identifiers */
  channel?: Channel;
  /** merkle proof of existence */
  proof: Uint8Array;
  /** height at which the proof was retrieved */
  proof_height: Height;
}
export interface QueryChannelResponseProtoMsg {
  type_url: "/ibc.core.channel.v1.QueryChannelResponse";
  value: Uint8Array;
}
/**
 * QueryChannelResponse is the response type for the Query/Channel RPC method.
 * Besides the Channel end, it includes a proof and the height from which the
 * proof was retrieved.
 */
export interface QueryChannelResponseAmino {
  /** channel associated with the request identifiers */
  channel?: ChannelAmino;
  /** merkle proof of existence */
  proof?: string;
  /** height at which the proof was retrieved */
  proof_height?: HeightAmino;
}
export interface QueryChannelResponseAminoMsg {
  type: "cosmos-sdk/QueryChannelResponse";
  value: QueryChannelResponseAmino;
}
/**
 * QueryChannelResponse is the response type for the Query/Channel RPC method.
 * Besides the Channel end, it includes a proof and the height from which the
 * proof was retrieved.
 */
export interface QueryChannelResponseSDKType {
  channel?: ChannelSDKType;
  proof: Uint8Array;
  proof_height: HeightSDKType;
}
/** QueryChannelsRequest is the request type for the Query/Channels RPC method */
export interface QueryChannelsRequest {
  /** pagination request */
  pagination?: PageRequest;
}
export interface QueryChannelsRequestProtoMsg {
  type_url: "/ibc.core.channel.v1.QueryChannelsRequest";
  value: Uint8Array;
}
/** QueryChannelsRequest is the request type for the Query/Channels RPC method */
export interface QueryChannelsRequestAmino {
  /** pagination request */
  pagination?: PageRequestAmino;
}
export interface QueryChannelsRequestAminoMsg {
  type: "cosmos-sdk/QueryChannelsRequest";
  value: QueryChannelsRequestAmino;
}
/** QueryChannelsRequest is the request type for the Query/Channels RPC method */
export interface QueryChannelsRequestSDKType {
  pagination?: PageRequestSDKType;
}
/** QueryChannelsResponse is the response type for the Query/Channels RPC method. */
export interface QueryChannelsResponse {
  /** list of stored channels of the chain. */
  channels: IdentifiedChannel[];
  /** pagination response */
  pagination?: PageResponse;
  /** query block height */
  height: Height;
}
export interface QueryChannelsResponseProtoMsg {
  type_url: "/ibc.core.channel.v1.QueryChannelsResponse";
  value: Uint8Array;
}
/** QueryChannelsResponse is the response type for the Query/Channels RPC method. */
export interface QueryChannelsResponseAmino {
  /** list of stored channels of the chain. */
  channels?: IdentifiedChannelAmino[];
  /** pagination response */
  pagination?: PageResponseAmino;
  /** query block height */
  height?: HeightAmino;
}
export interface QueryChannelsResponseAminoMsg {
  type: "cosmos-sdk/QueryChannelsResponse";
  value: QueryChannelsResponseAmino;
}
/** QueryChannelsResponse is the response type for the Query/Channels RPC method. */
export interface QueryChannelsResponseSDKType {
  channels: IdentifiedChannelSDKType[];
  pagination?: PageResponseSDKType;
  height: HeightSDKType;
}
/**
 * QueryConnectionChannelsRequest is the request type for the
 * Query/QueryConnectionChannels RPC method
 */
export interface QueryConnectionChannelsRequest {
  /** connection unique identifier */
  connection: string;
  /** pagination request */
  pagination?: PageRequest;
}
export interface QueryConnectionChannelsRequestProtoMsg {
  type_url: "/ibc.core.channel.v1.QueryConnectionChannelsRequest";
  value: Uint8Array;
}
/**
 * QueryConnectionChannelsRequest is the request type for the
 * Query/QueryConnectionChannels RPC method
 */
export interface QueryConnectionChannelsRequestAmino {
  /** connection unique identifier */
  connection?: string;
  /** pagination request */
  pagination?: PageRequestAmino;
}
export interface QueryConnectionChannelsRequestAminoMsg {
  type: "cosmos-sdk/QueryConnectionChannelsRequest";
  value: QueryConnectionChannelsRequestAmino;
}
/**
 * QueryConnectionChannelsRequest is the request type for the
 * Query/QueryConnectionChannels RPC method
 */
export interface QueryConnectionChannelsRequestSDKType {
  connection: string;
  pagination?: PageRequestSDKType;
}
/**
 * QueryConnectionChannelsResponse is the Response type for the
 * Query/QueryConnectionChannels RPC method
 */
export interface QueryConnectionChannelsResponse {
  /** list of channels associated with a connection. */
  channels: IdentifiedChannel[];
  /** pagination response */
  pagination?: PageResponse;
  /** query block height */
  height: Height;
}
export interface QueryConnectionChannelsResponseProtoMsg {
  type_url: "/ibc.core.channel.v1.QueryConnectionChannelsResponse";
  value: Uint8Array;
}
/**
 * QueryConnectionChannelsResponse is the Response type for the
 * Query/QueryConnectionChannels RPC method
 */
export interface QueryConnectionChannelsResponseAmino {
  /** list of channels associated with a connection. */
  channels?: IdentifiedChannelAmino[];
  /** pagination response */
  pagination?: PageResponseAmino;
  /** query block height */
  height?: HeightAmino;
}
export interface QueryConnectionChannelsResponseAminoMsg {
  type: "cosmos-sdk/QueryConnectionChannelsResponse";
  value: QueryConnectionChannelsResponseAmino;
}
/**
 * QueryConnectionChannelsResponse is the Response type for the
 * Query/QueryConnectionChannels RPC method
 */
export interface QueryConnectionChannelsResponseSDKType {
  channels: IdentifiedChannelSDKType[];
  pagination?: PageResponseSDKType;
  height: HeightSDKType;
}
/**
 * QueryChannelClientStateRequest is the request type for the Query/ClientState
 * RPC method
 */
export interface QueryChannelClientStateRequest {
  /** port unique identifier */
  port_id: string;
  /** channel unique identifier */
  channel_id: string;
}
export interface QueryChannelClientStateRequestProtoMsg {
  type_url: "/ibc.core.channel.v1.QueryChannelClientStateRequest";
  value: Uint8Array;
}
/**
 * QueryChannelClientStateRequest is the request type for the Query/ClientState
 * RPC method
 */
export interface QueryChannelClientStateRequestAmino {
  /** port unique identifier */
  port_id?: string;
  /** channel unique identifier */
  channel_id?: string;
}
export interface QueryChannelClientStateRequestAminoMsg {
  type: "cosmos-sdk/QueryChannelClientStateRequest";
  value: QueryChannelClientStateRequestAmino;
}
/**
 * QueryChannelClientStateRequest is the request type for the Query/ClientState
 * RPC method
 */
export interface QueryChannelClientStateRequestSDKType {
  port_id: string;
  channel_id: string;
}
/**
 * QueryChannelClientStateResponse is the Response type for the
 * Query/QueryChannelClientState RPC method
 */
export interface QueryChannelClientStateResponse {
  /** client state associated with the channel */
  identified_client_state?: IdentifiedClientState;
  /** merkle proof of existence */
  proof: Uint8Array;
  /** height at which the proof was retrieved */
  proof_height: Height;
}
export interface QueryChannelClientStateResponseProtoMsg {
  type_url: "/ibc.core.channel.v1.QueryChannelClientStateResponse";
  value: Uint8Array;
}
/**
 * QueryChannelClientStateResponse is the Response type for the
 * Query/QueryChannelClientState RPC method
 */
export interface QueryChannelClientStateResponseAmino {
  /** client state associated with the channel */
  identified_client_state?: IdentifiedClientStateAmino;
  /** merkle proof of existence */
  proof?: string;
  /** height at which the proof was retrieved */
  proof_height?: HeightAmino;
}
export interface QueryChannelClientStateResponseAminoMsg {
  type: "cosmos-sdk/QueryChannelClientStateResponse";
  value: QueryChannelClientStateResponseAmino;
}
/**
 * QueryChannelClientStateResponse is the Response type for the
 * Query/QueryChannelClientState RPC method
 */
export interface QueryChannelClientStateResponseSDKType {
  identified_client_state?: IdentifiedClientStateSDKType;
  proof: Uint8Array;
  proof_height: HeightSDKType;
}
/**
 * QueryChannelConsensusStateRequest is the request type for the
 * Query/ConsensusState RPC method
 */
export interface QueryChannelConsensusStateRequest {
  /** port unique identifier */
  port_id: string;
  /** channel unique identifier */
  channel_id: string;
  /** revision number of the consensus state */
  revision_number: bigint;
  /** revision height of the consensus state */
  revision_height: bigint;
}
export interface QueryChannelConsensusStateRequestProtoMsg {
  type_url: "/ibc.core.channel.v1.QueryChannelConsensusStateRequest";
  value: Uint8Array;
}
/**
 * QueryChannelConsensusStateRequest is the request type for the
 * Query/ConsensusState RPC method
 */
export interface QueryChannelConsensusStateRequestAmino {
  /** port unique identifier */
  port_id?: string;
  /** channel unique identifier */
  channel_id?: string;
  /** revision number of the consensus state */
  revision_number?: string;
  /** revision height of the consensus state */
  revision_height?: string;
}
export interface QueryChannelConsensusStateRequestAminoMsg {
  type: "cosmos-sdk/QueryChannelConsensusStateRequest";
  value: QueryChannelConsensusStateRequestAmino;
}
/**
 * QueryChannelConsensusStateRequest is the request type for the
 * Query/ConsensusState RPC method
 */
export interface QueryChannelConsensusStateRequestSDKType {
  port_id: string;
  channel_id: string;
  revision_number: bigint;
  revision_height: bigint;
}
/**
 * QueryChannelClientStateResponse is the Response type for the
 * Query/QueryChannelClientState RPC method
 */
export interface QueryChannelConsensusStateResponse {
  /** consensus state associated with the channel */
  consensus_state?: Any;
  /** client ID associated with the consensus state */
  client_id: string;
  /** merkle proof of existence */
  proof: Uint8Array;
  /** height at which the proof was retrieved */
  proof_height: Height;
}
export interface QueryChannelConsensusStateResponseProtoMsg {
  type_url: "/ibc.core.channel.v1.QueryChannelConsensusStateResponse";
  value: Uint8Array;
}
/**
 * QueryChannelClientStateResponse is the Response type for the
 * Query/QueryChannelClientState RPC method
 */
export interface QueryChannelConsensusStateResponseAmino {
  /** consensus state associated with the channel */
  consensus_state?: AnyAmino;
  /** client ID associated with the consensus state */
  client_id?: string;
  /** merkle proof of existence */
  proof?: string;
  /** height at which the proof was retrieved */
  proof_height?: HeightAmino;
}
export interface QueryChannelConsensusStateResponseAminoMsg {
  type: "cosmos-sdk/QueryChannelConsensusStateResponse";
  value: QueryChannelConsensusStateResponseAmino;
}
/**
 * QueryChannelClientStateResponse is the Response type for the
 * Query/QueryChannelClientState RPC method
 */
export interface QueryChannelConsensusStateResponseSDKType {
  consensus_state?: AnySDKType;
  client_id: string;
  proof: Uint8Array;
  proof_height: HeightSDKType;
}
/**
 * QueryPacketCommitmentRequest is the request type for the
 * Query/PacketCommitment RPC method
 */
export interface QueryPacketCommitmentRequest {
  /** port unique identifier */
  port_id: string;
  /** channel unique identifier */
  channel_id: string;
  /** packet sequence */
  sequence: bigint;
}
export interface QueryPacketCommitmentRequestProtoMsg {
  type_url: "/ibc.core.channel.v1.QueryPacketCommitmentRequest";
  value: Uint8Array;
}
/**
 * QueryPacketCommitmentRequest is the request type for the
 * Query/PacketCommitment RPC method
 */
export interface QueryPacketCommitmentRequestAmino {
  /** port unique identifier */
  port_id?: string;
  /** channel unique identifier */
  channel_id?: string;
  /** packet sequence */
  sequence?: string;
}
export interface QueryPacketCommitmentRequestAminoMsg {
  type: "cosmos-sdk/QueryPacketCommitmentRequest";
  value: QueryPacketCommitmentRequestAmino;
}
/**
 * QueryPacketCommitmentRequest is the request type for the
 * Query/PacketCommitment RPC method
 */
export interface QueryPacketCommitmentRequestSDKType {
  port_id: string;
  channel_id: string;
  sequence: bigint;
}
/**
 * QueryPacketCommitmentResponse defines the client query response for a packet
 * which also includes a proof and the height from which the proof was
 * retrieved
 */
export interface QueryPacketCommitmentResponse {
  /** packet associated with the request fields */
  commitment: Uint8Array;
  /** merkle proof of existence */
  proof: Uint8Array;
  /** height at which the proof was retrieved */
  proof_height: Height;
}
export interface QueryPacketCommitmentResponseProtoMsg {
  type_url: "/ibc.core.channel.v1.QueryPacketCommitmentResponse";
  value: Uint8Array;
}
/**
 * QueryPacketCommitmentResponse defines the client query response for a packet
 * which also includes a proof and the height from which the proof was
 * retrieved
 */
export interface QueryPacketCommitmentResponseAmino {
  /** packet associated with the request fields */
  commitment?: string;
  /** merkle proof of existence */
  proof?: string;
  /** height at which the proof was retrieved */
  proof_height?: HeightAmino;
}
export interface QueryPacketCommitmentResponseAminoMsg {
  type: "cosmos-sdk/QueryPacketCommitmentResponse";
  value: QueryPacketCommitmentResponseAmino;
}
/**
 * QueryPacketCommitmentResponse defines the client query response for a packet
 * which also includes a proof and the height from which the proof was
 * retrieved
 */
export interface QueryPacketCommitmentResponseSDKType {
  commitment: Uint8Array;
  proof: Uint8Array;
  proof_height: HeightSDKType;
}
/**
 * QueryPacketCommitmentsRequest is the request type for the
 * Query/QueryPacketCommitments RPC method
 */
export interface QueryPacketCommitmentsRequest {
  /** port unique identifier */
  port_id: string;
  /** channel unique identifier */
  channel_id: string;
  /** pagination request */
  pagination?: PageRequest;
}
export interface QueryPacketCommitmentsRequestProtoMsg {
  type_url: "/ibc.core.channel.v1.QueryPacketCommitmentsRequest";
  value: Uint8Array;
}
/**
 * QueryPacketCommitmentsRequest is the request type for the
 * Query/QueryPacketCommitments RPC method
 */
export interface QueryPacketCommitmentsRequestAmino {
  /** port unique identifier */
  port_id?: string;
  /** channel unique identifier */
  channel_id?: string;
  /** pagination request */
  pagination?: PageRequestAmino;
}
export interface QueryPacketCommitmentsRequestAminoMsg {
  type: "cosmos-sdk/QueryPacketCommitmentsRequest";
  value: QueryPacketCommitmentsRequestAmino;
}
/**
 * QueryPacketCommitmentsRequest is the request type for the
 * Query/QueryPacketCommitments RPC method
 */
export interface QueryPacketCommitmentsRequestSDKType {
  port_id: string;
  channel_id: string;
  pagination?: PageRequestSDKType;
}
/**
 * QueryPacketCommitmentsResponse is the request type for the
 * Query/QueryPacketCommitments RPC method
 */
export interface QueryPacketCommitmentsResponse {
  commitments: PacketState[];
  /** pagination response */
  pagination?: PageResponse;
  /** query block height */
  height: Height;
}
export interface QueryPacketCommitmentsResponseProtoMsg {
  type_url: "/ibc.core.channel.v1.QueryPacketCommitmentsResponse";
  value: Uint8Array;
}
/**
 * QueryPacketCommitmentsResponse is the request type for the
 * Query/QueryPacketCommitments RPC method
 */
export interface QueryPacketCommitmentsResponseAmino {
  commitments?: PacketStateAmino[];
  /** pagination response */
  pagination?: PageResponseAmino;
  /** query block height */
  height?: HeightAmino;
}
export interface QueryPacketCommitmentsResponseAminoMsg {
  type: "cosmos-sdk/QueryPacketCommitmentsResponse";
  value: QueryPacketCommitmentsResponseAmino;
}
/**
 * QueryPacketCommitmentsResponse is the request type for the
 * Query/QueryPacketCommitments RPC method
 */
export interface QueryPacketCommitmentsResponseSDKType {
  commitments: PacketStateSDKType[];
  pagination?: PageResponseSDKType;
  height: HeightSDKType;
}
/**
 * QueryPacketReceiptRequest is the request type for the
 * Query/PacketReceipt RPC method
 */
export interface QueryPacketReceiptRequest {
  /** port unique identifier */
  port_id: string;
  /** channel unique identifier */
  channel_id: string;
  /** packet sequence */
  sequence: bigint;
}
export interface QueryPacketReceiptRequestProtoMsg {
  type_url: "/ibc.core.channel.v1.QueryPacketReceiptRequest";
  value: Uint8Array;
}
/**
 * QueryPacketReceiptRequest is the request type for the
 * Query/PacketReceipt RPC method
 */
export interface QueryPacketReceiptRequestAmino {
  /** port unique identifier */
  port_id?: string;
  /** channel unique identifier */
  channel_id?: string;
  /** packet sequence */
  sequence?: string;
}
export interface QueryPacketReceiptRequestAminoMsg {
  type: "cosmos-sdk/QueryPacketReceiptRequest";
  value: QueryPacketReceiptRequestAmino;
}
/**
 * QueryPacketReceiptRequest is the request type for the
 * Query/PacketReceipt RPC method
 */
export interface QueryPacketReceiptRequestSDKType {
  port_id: string;
  channel_id: string;
  sequence: bigint;
}
/**
 * QueryPacketReceiptResponse defines the client query response for a packet
 * receipt which also includes a proof, and the height from which the proof was
 * retrieved
 */
export interface QueryPacketReceiptResponse {
  /** success flag for if receipt exists */
  received: boolean;
  /** merkle proof of existence */
  proof: Uint8Array;
  /** height at which the proof was retrieved */
  proof_height: Height;
}
export interface QueryPacketReceiptResponseProtoMsg {
  type_url: "/ibc.core.channel.v1.QueryPacketReceiptResponse";
  value: Uint8Array;
}
/**
 * QueryPacketReceiptResponse defines the client query response for a packet
 * receipt which also includes a proof, and the height from which the proof was
 * retrieved
 */
export interface QueryPacketReceiptResponseAmino {
  /** success flag for if receipt exists */
  received?: boolean;
  /** merkle proof of existence */
  proof?: string;
  /** height at which the proof was retrieved */
  proof_height?: HeightAmino;
}
export interface QueryPacketReceiptResponseAminoMsg {
  type: "cosmos-sdk/QueryPacketReceiptResponse";
  value: QueryPacketReceiptResponseAmino;
}
/**
 * QueryPacketReceiptResponse defines the client query response for a packet
 * receipt which also includes a proof, and the height from which the proof was
 * retrieved
 */
export interface QueryPacketReceiptResponseSDKType {
  received: boolean;
  proof: Uint8Array;
  proof_height: HeightSDKType;
}
/**
 * QueryPacketAcknowledgementRequest is the request type for the
 * Query/PacketAcknowledgement RPC method
 */
export interface QueryPacketAcknowledgementRequest {
  /** port unique identifier */
  port_id: string;
  /** channel unique identifier */
  channel_id: string;
  /** packet sequence */
  sequence: bigint;
}
export interface QueryPacketAcknowledgementRequestProtoMsg {
  type_url: "/ibc.core.channel.v1.QueryPacketAcknowledgementRequest";
  value: Uint8Array;
}
/**
 * QueryPacketAcknowledgementRequest is the request type for the
 * Query/PacketAcknowledgement RPC method
 */
export interface QueryPacketAcknowledgementRequestAmino {
  /** port unique identifier */
  port_id?: string;
  /** channel unique identifier */
  channel_id?: string;
  /** packet sequence */
  sequence?: string;
}
export interface QueryPacketAcknowledgementRequestAminoMsg {
  type: "cosmos-sdk/QueryPacketAcknowledgementRequest";
  value: QueryPacketAcknowledgementRequestAmino;
}
/**
 * QueryPacketAcknowledgementRequest is the request type for the
 * Query/PacketAcknowledgement RPC method
 */
export interface QueryPacketAcknowledgementRequestSDKType {
  port_id: string;
  channel_id: string;
  sequence: bigint;
}
/**
 * QueryPacketAcknowledgementResponse defines the client query response for a
 * packet which also includes a proof and the height from which the
 * proof was retrieved
 */
export interface QueryPacketAcknowledgementResponse {
  /** packet associated with the request fields */
  acknowledgement: Uint8Array;
  /** merkle proof of existence */
  proof: Uint8Array;
  /** height at which the proof was retrieved */
  proof_height: Height;
}
export interface QueryPacketAcknowledgementResponseProtoMsg {
  type_url: "/ibc.core.channel.v1.QueryPacketAcknowledgementResponse";
  value: Uint8Array;
}
/**
 * QueryPacketAcknowledgementResponse defines the client query response for a
 * packet which also includes a proof and the height from which the
 * proof was retrieved
 */
export interface QueryPacketAcknowledgementResponseAmino {
  /** packet associated with the request fields */
  acknowledgement?: string;
  /** merkle proof of existence */
  proof?: string;
  /** height at which the proof was retrieved */
  proof_height?: HeightAmino;
}
export interface QueryPacketAcknowledgementResponseAminoMsg {
  type: "cosmos-sdk/QueryPacketAcknowledgementResponse";
  value: QueryPacketAcknowledgementResponseAmino;
}
/**
 * QueryPacketAcknowledgementResponse defines the client query response for a
 * packet which also includes a proof and the height from which the
 * proof was retrieved
 */
export interface QueryPacketAcknowledgementResponseSDKType {
  acknowledgement: Uint8Array;
  proof: Uint8Array;
  proof_height: HeightSDKType;
}
/**
 * QueryPacketAcknowledgementsRequest is the request type for the
 * Query/QueryPacketCommitments RPC method
 */
export interface QueryPacketAcknowledgementsRequest {
  /** port unique identifier */
  port_id: string;
  /** channel unique identifier */
  channel_id: string;
  /** pagination request */
  pagination?: PageRequest;
  /** list of packet sequences */
  packet_commitment_sequences: bigint[];
}
export interface QueryPacketAcknowledgementsRequestProtoMsg {
  type_url: "/ibc.core.channel.v1.QueryPacketAcknowledgementsRequest";
  value: Uint8Array;
}
/**
 * QueryPacketAcknowledgementsRequest is the request type for the
 * Query/QueryPacketCommitments RPC method
 */
export interface QueryPacketAcknowledgementsRequestAmino {
  /** port unique identifier */
  port_id?: string;
  /** channel unique identifier */
  channel_id?: string;
  /** pagination request */
  pagination?: PageRequestAmino;
  /** list of packet sequences */
  packet_commitment_sequences?: string[];
}
export interface QueryPacketAcknowledgementsRequestAminoMsg {
  type: "cosmos-sdk/QueryPacketAcknowledgementsRequest";
  value: QueryPacketAcknowledgementsRequestAmino;
}
/**
 * QueryPacketAcknowledgementsRequest is the request type for the
 * Query/QueryPacketCommitments RPC method
 */
export interface QueryPacketAcknowledgementsRequestSDKType {
  port_id: string;
  channel_id: string;
  pagination?: PageRequestSDKType;
  packet_commitment_sequences: bigint[];
}
/**
 * QueryPacketAcknowledgemetsResponse is the request type for the
 * Query/QueryPacketAcknowledgements RPC method
 */
export interface QueryPacketAcknowledgementsResponse {
  acknowledgements: PacketState[];
  /** pagination response */
  pagination?: PageResponse;
  /** query block height */
  height: Height;
}
export interface QueryPacketAcknowledgementsResponseProtoMsg {
  type_url: "/ibc.core.channel.v1.QueryPacketAcknowledgementsResponse";
  value: Uint8Array;
}
/**
 * QueryPacketAcknowledgemetsResponse is the request type for the
 * Query/QueryPacketAcknowledgements RPC method
 */
export interface QueryPacketAcknowledgementsResponseAmino {
  acknowledgements?: PacketStateAmino[];
  /** pagination response */
  pagination?: PageResponseAmino;
  /** query block height */
  height?: HeightAmino;
}
export interface QueryPacketAcknowledgementsResponseAminoMsg {
  type: "cosmos-sdk/QueryPacketAcknowledgementsResponse";
  value: QueryPacketAcknowledgementsResponseAmino;
}
/**
 * QueryPacketAcknowledgemetsResponse is the request type for the
 * Query/QueryPacketAcknowledgements RPC method
 */
export interface QueryPacketAcknowledgementsResponseSDKType {
  acknowledgements: PacketStateSDKType[];
  pagination?: PageResponseSDKType;
  height: HeightSDKType;
}
/**
 * QueryUnreceivedPacketsRequest is the request type for the
 * Query/UnreceivedPackets RPC method
 */
export interface QueryUnreceivedPacketsRequest {
  /** port unique identifier */
  port_id: string;
  /** channel unique identifier */
  channel_id: string;
  /** list of packet sequences */
  packet_commitment_sequences: bigint[];
}
export interface QueryUnreceivedPacketsRequestProtoMsg {
  type_url: "/ibc.core.channel.v1.QueryUnreceivedPacketsRequest";
  value: Uint8Array;
}
/**
 * QueryUnreceivedPacketsRequest is the request type for the
 * Query/UnreceivedPackets RPC method
 */
export interface QueryUnreceivedPacketsRequestAmino {
  /** port unique identifier */
  port_id?: string;
  /** channel unique identifier */
  channel_id?: string;
  /** list of packet sequences */
  packet_commitment_sequences?: string[];
}
export interface QueryUnreceivedPacketsRequestAminoMsg {
  type: "cosmos-sdk/QueryUnreceivedPacketsRequest";
  value: QueryUnreceivedPacketsRequestAmino;
}
/**
 * QueryUnreceivedPacketsRequest is the request type for the
 * Query/UnreceivedPackets RPC method
 */
export interface QueryUnreceivedPacketsRequestSDKType {
  port_id: string;
  channel_id: string;
  packet_commitment_sequences: bigint[];
}
/**
 * QueryUnreceivedPacketsResponse is the response type for the
 * Query/UnreceivedPacketCommitments RPC method
 */
export interface QueryUnreceivedPacketsResponse {
  /** list of unreceived packet sequences */
  sequences: bigint[];
  /** query block height */
  height: Height;
}
export interface QueryUnreceivedPacketsResponseProtoMsg {
  type_url: "/ibc.core.channel.v1.QueryUnreceivedPacketsResponse";
  value: Uint8Array;
}
/**
 * QueryUnreceivedPacketsResponse is the response type for the
 * Query/UnreceivedPacketCommitments RPC method
 */
export interface QueryUnreceivedPacketsResponseAmino {
  /** list of unreceived packet sequences */
  sequences?: string[];
  /** query block height */
  height?: HeightAmino;
}
export interface QueryUnreceivedPacketsResponseAminoMsg {
  type: "cosmos-sdk/QueryUnreceivedPacketsResponse";
  value: QueryUnreceivedPacketsResponseAmino;
}
/**
 * QueryUnreceivedPacketsResponse is the response type for the
 * Query/UnreceivedPacketCommitments RPC method
 */
export interface QueryUnreceivedPacketsResponseSDKType {
  sequences: bigint[];
  height: HeightSDKType;
}
/**
 * QueryUnreceivedAcks is the request type for the
 * Query/UnreceivedAcks RPC method
 */
export interface QueryUnreceivedAcksRequest {
  /** port unique identifier */
  port_id: string;
  /** channel unique identifier */
  channel_id: string;
  /** list of acknowledgement sequences */
  packet_ack_sequences: bigint[];
}
export interface QueryUnreceivedAcksRequestProtoMsg {
  type_url: "/ibc.core.channel.v1.QueryUnreceivedAcksRequest";
  value: Uint8Array;
}
/**
 * QueryUnreceivedAcks is the request type for the
 * Query/UnreceivedAcks RPC method
 */
export interface QueryUnreceivedAcksRequestAmino {
  /** port unique identifier */
  port_id?: string;
  /** channel unique identifier */
  channel_id?: string;
  /** list of acknowledgement sequences */
  packet_ack_sequences?: string[];
}
export interface QueryUnreceivedAcksRequestAminoMsg {
  type: "cosmos-sdk/QueryUnreceivedAcksRequest";
  value: QueryUnreceivedAcksRequestAmino;
}
/**
 * QueryUnreceivedAcks is the request type for the
 * Query/UnreceivedAcks RPC method
 */
export interface QueryUnreceivedAcksRequestSDKType {
  port_id: string;
  channel_id: string;
  packet_ack_sequences: bigint[];
}
/**
 * QueryUnreceivedAcksResponse is the response type for the
 * Query/UnreceivedAcks RPC method
 */
export interface QueryUnreceivedAcksResponse {
  /** list of unreceived acknowledgement sequences */
  sequences: bigint[];
  /** query block height */
  height: Height;
}
export interface QueryUnreceivedAcksResponseProtoMsg {
  type_url: "/ibc.core.channel.v1.QueryUnreceivedAcksResponse";
  value: Uint8Array;
}
/**
 * QueryUnreceivedAcksResponse is the response type for the
 * Query/UnreceivedAcks RPC method
 */
export interface QueryUnreceivedAcksResponseAmino {
  /** list of unreceived acknowledgement sequences */
  sequences?: string[];
  /** query block height */
  height?: HeightAmino;
}
export interface QueryUnreceivedAcksResponseAminoMsg {
  type: "cosmos-sdk/QueryUnreceivedAcksResponse";
  value: QueryUnreceivedAcksResponseAmino;
}
/**
 * QueryUnreceivedAcksResponse is the response type for the
 * Query/UnreceivedAcks RPC method
 */
export interface QueryUnreceivedAcksResponseSDKType {
  sequences: bigint[];
  height: HeightSDKType;
}
/**
 * QueryNextSequenceReceiveRequest is the request type for the
 * Query/QueryNextSequenceReceiveRequest RPC method
 */
export interface QueryNextSequenceReceiveRequest {
  /** port unique identifier */
  port_id: string;
  /** channel unique identifier */
  channel_id: string;
}
export interface QueryNextSequenceReceiveRequestProtoMsg {
  type_url: "/ibc.core.channel.v1.QueryNextSequenceReceiveRequest";
  value: Uint8Array;
}
/**
 * QueryNextSequenceReceiveRequest is the request type for the
 * Query/QueryNextSequenceReceiveRequest RPC method
 */
export interface QueryNextSequenceReceiveRequestAmino {
  /** port unique identifier */
  port_id?: string;
  /** channel unique identifier */
  channel_id?: string;
}
export interface QueryNextSequenceReceiveRequestAminoMsg {
  type: "cosmos-sdk/QueryNextSequenceReceiveRequest";
  value: QueryNextSequenceReceiveRequestAmino;
}
/**
 * QueryNextSequenceReceiveRequest is the request type for the
 * Query/QueryNextSequenceReceiveRequest RPC method
 */
export interface QueryNextSequenceReceiveRequestSDKType {
  port_id: string;
  channel_id: string;
}
/**
 * QuerySequenceResponse is the request type for the
 * Query/QueryNextSequenceReceiveResponse RPC method
 */
export interface QueryNextSequenceReceiveResponse {
  /** next sequence receive number */
  next_sequence_receive: bigint;
  /** merkle proof of existence */
  proof: Uint8Array;
  /** height at which the proof was retrieved */
  proof_height: Height;
}
export interface QueryNextSequenceReceiveResponseProtoMsg {
  type_url: "/ibc.core.channel.v1.QueryNextSequenceReceiveResponse";
  value: Uint8Array;
}
/**
 * QuerySequenceResponse is the request type for the
 * Query/QueryNextSequenceReceiveResponse RPC method
 */
export interface QueryNextSequenceReceiveResponseAmino {
  /** next sequence receive number */
  next_sequence_receive?: string;
  /** merkle proof of existence */
  proof?: string;
  /** height at which the proof was retrieved */
  proof_height?: HeightAmino;
}
export interface QueryNextSequenceReceiveResponseAminoMsg {
  type: "cosmos-sdk/QueryNextSequenceReceiveResponse";
  value: QueryNextSequenceReceiveResponseAmino;
}
/**
 * QuerySequenceResponse is the request type for the
 * Query/QueryNextSequenceReceiveResponse RPC method
 */
export interface QueryNextSequenceReceiveResponseSDKType {
  next_sequence_receive: bigint;
  proof: Uint8Array;
  proof_height: HeightSDKType;
}
/**
 * QueryNextSequenceSendRequest is the request type for the
 * Query/QueryNextSequenceSend RPC method
 */
export interface QueryNextSequenceSendRequest {
  /** port unique identifier */
  port_id: string;
  /** channel unique identifier */
  channel_id: string;
}
export interface QueryNextSequenceSendRequestProtoMsg {
  type_url: "/ibc.core.channel.v1.QueryNextSequenceSendRequest";
  value: Uint8Array;
}
/**
 * QueryNextSequenceSendRequest is the request type for the
 * Query/QueryNextSequenceSend RPC method
 */
export interface QueryNextSequenceSendRequestAmino {
  /** port unique identifier */
  port_id?: string;
  /** channel unique identifier */
  channel_id?: string;
}
export interface QueryNextSequenceSendRequestAminoMsg {
  type: "cosmos-sdk/QueryNextSequenceSendRequest";
  value: QueryNextSequenceSendRequestAmino;
}
/**
 * QueryNextSequenceSendRequest is the request type for the
 * Query/QueryNextSequenceSend RPC method
 */
export interface QueryNextSequenceSendRequestSDKType {
  port_id: string;
  channel_id: string;
}
/**
 * QueryNextSequenceSendResponse is the request type for the
 * Query/QueryNextSequenceSend RPC method
 */
export interface QueryNextSequenceSendResponse {
  /** next sequence send number */
  next_sequence_send: bigint;
  /** merkle proof of existence */
  proof: Uint8Array;
  /** height at which the proof was retrieved */
  proof_height: Height;
}
export interface QueryNextSequenceSendResponseProtoMsg {
  type_url: "/ibc.core.channel.v1.QueryNextSequenceSendResponse";
  value: Uint8Array;
}
/**
 * QueryNextSequenceSendResponse is the request type for the
 * Query/QueryNextSequenceSend RPC method
 */
export interface QueryNextSequenceSendResponseAmino {
  /** next sequence send number */
  next_sequence_send?: string;
  /** merkle proof of existence */
  proof?: string;
  /** height at which the proof was retrieved */
  proof_height?: HeightAmino;
}
export interface QueryNextSequenceSendResponseAminoMsg {
  type: "cosmos-sdk/QueryNextSequenceSendResponse";
  value: QueryNextSequenceSendResponseAmino;
}
/**
 * QueryNextSequenceSendResponse is the request type for the
 * Query/QueryNextSequenceSend RPC method
 */
export interface QueryNextSequenceSendResponseSDKType {
  next_sequence_send: bigint;
  proof: Uint8Array;
  proof_height: HeightSDKType;
}
function createBaseQueryChannelRequest(): QueryChannelRequest {
  return {
    port_id: "",
    channel_id: ""
  };
}
export const QueryChannelRequest = {
  typeUrl: "/ibc.core.channel.v1.QueryChannelRequest",
  aminoType: "cosmos-sdk/QueryChannelRequest",
  is(o: any): o is QueryChannelRequest {
    return o && (o.$typeUrl === QueryChannelRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string");
  },
  isSDK(o: any): o is QueryChannelRequestSDKType {
    return o && (o.$typeUrl === QueryChannelRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string");
  },
  isAmino(o: any): o is QueryChannelRequestAmino {
    return o && (o.$typeUrl === QueryChannelRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string");
  },
  encode(message: QueryChannelRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.port_id !== "") {
      writer.uint32(10).string(message.port_id);
    }
    if (message.channel_id !== "") {
      writer.uint32(18).string(message.channel_id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryChannelRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryChannelRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.port_id = reader.string();
          break;
        case 2:
          message.channel_id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryChannelRequest {
    return {
      port_id: isSet(object.port_id) ? String(object.port_id) : "",
      channel_id: isSet(object.channel_id) ? String(object.channel_id) : ""
    };
  },
  toJSON(message: QueryChannelRequest): unknown {
    const obj: any = {};
    message.port_id !== undefined && (obj.port_id = message.port_id);
    message.channel_id !== undefined && (obj.channel_id = message.channel_id);
    return obj;
  },
  fromPartial(object: Partial<QueryChannelRequest>): QueryChannelRequest {
    const message = createBaseQueryChannelRequest();
    message.port_id = object.port_id ?? "";
    message.channel_id = object.channel_id ?? "";
    return message;
  },
  fromAmino(object: QueryChannelRequestAmino): QueryChannelRequest {
    const message = createBaseQueryChannelRequest();
    if (object.port_id !== undefined && object.port_id !== null) {
      message.port_id = object.port_id;
    }
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channel_id = object.channel_id;
    }
    return message;
  },
  toAmino(message: QueryChannelRequest): QueryChannelRequestAmino {
    const obj: any = {};
    obj.port_id = message.port_id;
    obj.channel_id = message.channel_id;
    return obj;
  },
  fromAminoMsg(object: QueryChannelRequestAminoMsg): QueryChannelRequest {
    return QueryChannelRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryChannelRequest): QueryChannelRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryChannelRequest",
      value: QueryChannelRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryChannelRequestProtoMsg): QueryChannelRequest {
    return QueryChannelRequest.decode(message.value);
  },
  toProto(message: QueryChannelRequest): Uint8Array {
    return QueryChannelRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryChannelRequest): QueryChannelRequestProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.QueryChannelRequest",
      value: QueryChannelRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryChannelRequest.typeUrl, QueryChannelRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryChannelRequest.aminoType, QueryChannelRequest.typeUrl);
function createBaseQueryChannelResponse(): QueryChannelResponse {
  return {
    channel: undefined,
    proof: new Uint8Array(),
    proof_height: Height.fromPartial({})
  };
}
export const QueryChannelResponse = {
  typeUrl: "/ibc.core.channel.v1.QueryChannelResponse",
  aminoType: "cosmos-sdk/QueryChannelResponse",
  is(o: any): o is QueryChannelResponse {
    return o && (o.$typeUrl === QueryChannelResponse.typeUrl || (o.proof instanceof Uint8Array || typeof o.proof === "string") && Height.is(o.proof_height));
  },
  isSDK(o: any): o is QueryChannelResponseSDKType {
    return o && (o.$typeUrl === QueryChannelResponse.typeUrl || (o.proof instanceof Uint8Array || typeof o.proof === "string") && Height.isSDK(o.proof_height));
  },
  isAmino(o: any): o is QueryChannelResponseAmino {
    return o && (o.$typeUrl === QueryChannelResponse.typeUrl || (o.proof instanceof Uint8Array || typeof o.proof === "string") && Height.isAmino(o.proof_height));
  },
  encode(message: QueryChannelResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.channel !== undefined) {
      Channel.encode(message.channel, writer.uint32(10).fork()).ldelim();
    }
    if (message.proof.length !== 0) {
      writer.uint32(18).bytes(message.proof);
    }
    if (message.proof_height !== undefined) {
      Height.encode(message.proof_height, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryChannelResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryChannelResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channel = Channel.decode(reader, reader.uint32());
          break;
        case 2:
          message.proof = reader.bytes();
          break;
        case 3:
          message.proof_height = Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryChannelResponse {
    return {
      channel: isSet(object.channel) ? Channel.fromJSON(object.channel) : undefined,
      proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(),
      proof_height: isSet(object.proof_height) ? Height.fromJSON(object.proof_height) : undefined
    };
  },
  toJSON(message: QueryChannelResponse): unknown {
    const obj: any = {};
    message.channel !== undefined && (obj.channel = message.channel ? Channel.toJSON(message.channel) : undefined);
    message.proof !== undefined && (obj.proof = base64FromBytes(message.proof !== undefined ? message.proof : new Uint8Array()));
    message.proof_height !== undefined && (obj.proof_height = message.proof_height ? Height.toJSON(message.proof_height) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryChannelResponse>): QueryChannelResponse {
    const message = createBaseQueryChannelResponse();
    message.channel = object.channel !== undefined && object.channel !== null ? Channel.fromPartial(object.channel) : undefined;
    message.proof = object.proof ?? new Uint8Array();
    message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? Height.fromPartial(object.proof_height) : undefined;
    return message;
  },
  fromAmino(object: QueryChannelResponseAmino): QueryChannelResponse {
    const message = createBaseQueryChannelResponse();
    if (object.channel !== undefined && object.channel !== null) {
      message.channel = Channel.fromAmino(object.channel);
    }
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = bytesFromBase64(object.proof);
    }
    if (object.proof_height !== undefined && object.proof_height !== null) {
      message.proof_height = Height.fromAmino(object.proof_height);
    }
    return message;
  },
  toAmino(message: QueryChannelResponse): QueryChannelResponseAmino {
    const obj: any = {};
    obj.channel = message.channel ? Channel.toAmino(message.channel) : undefined;
    obj.proof = message.proof ? base64FromBytes(message.proof) : undefined;
    obj.proof_height = message.proof_height ? Height.toAmino(message.proof_height) : {};
    return obj;
  },
  fromAminoMsg(object: QueryChannelResponseAminoMsg): QueryChannelResponse {
    return QueryChannelResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryChannelResponse): QueryChannelResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryChannelResponse",
      value: QueryChannelResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryChannelResponseProtoMsg): QueryChannelResponse {
    return QueryChannelResponse.decode(message.value);
  },
  toProto(message: QueryChannelResponse): Uint8Array {
    return QueryChannelResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryChannelResponse): QueryChannelResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.QueryChannelResponse",
      value: QueryChannelResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryChannelResponse.typeUrl, QueryChannelResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryChannelResponse.aminoType, QueryChannelResponse.typeUrl);
function createBaseQueryChannelsRequest(): QueryChannelsRequest {
  return {
    pagination: undefined
  };
}
export const QueryChannelsRequest = {
  typeUrl: "/ibc.core.channel.v1.QueryChannelsRequest",
  aminoType: "cosmos-sdk/QueryChannelsRequest",
  is(o: any): o is QueryChannelsRequest {
    return o && o.$typeUrl === QueryChannelsRequest.typeUrl;
  },
  isSDK(o: any): o is QueryChannelsRequestSDKType {
    return o && o.$typeUrl === QueryChannelsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryChannelsRequestAmino {
    return o && o.$typeUrl === QueryChannelsRequest.typeUrl;
  },
  encode(message: QueryChannelsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryChannelsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryChannelsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryChannelsRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryChannelsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryChannelsRequest>): QueryChannelsRequest {
    const message = createBaseQueryChannelsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryChannelsRequestAmino): QueryChannelsRequest {
    const message = createBaseQueryChannelsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryChannelsRequest): QueryChannelsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryChannelsRequestAminoMsg): QueryChannelsRequest {
    return QueryChannelsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryChannelsRequest): QueryChannelsRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryChannelsRequest",
      value: QueryChannelsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryChannelsRequestProtoMsg): QueryChannelsRequest {
    return QueryChannelsRequest.decode(message.value);
  },
  toProto(message: QueryChannelsRequest): Uint8Array {
    return QueryChannelsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryChannelsRequest): QueryChannelsRequestProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.QueryChannelsRequest",
      value: QueryChannelsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryChannelsRequest.typeUrl, QueryChannelsRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryChannelsRequest.aminoType, QueryChannelsRequest.typeUrl);
function createBaseQueryChannelsResponse(): QueryChannelsResponse {
  return {
    channels: [],
    pagination: undefined,
    height: Height.fromPartial({})
  };
}
export const QueryChannelsResponse = {
  typeUrl: "/ibc.core.channel.v1.QueryChannelsResponse",
  aminoType: "cosmos-sdk/QueryChannelsResponse",
  is(o: any): o is QueryChannelsResponse {
    return o && (o.$typeUrl === QueryChannelsResponse.typeUrl || Array.isArray(o.channels) && (!o.channels.length || IdentifiedChannel.is(o.channels[0])) && Height.is(o.height));
  },
  isSDK(o: any): o is QueryChannelsResponseSDKType {
    return o && (o.$typeUrl === QueryChannelsResponse.typeUrl || Array.isArray(o.channels) && (!o.channels.length || IdentifiedChannel.isSDK(o.channels[0])) && Height.isSDK(o.height));
  },
  isAmino(o: any): o is QueryChannelsResponseAmino {
    return o && (o.$typeUrl === QueryChannelsResponse.typeUrl || Array.isArray(o.channels) && (!o.channels.length || IdentifiedChannel.isAmino(o.channels[0])) && Height.isAmino(o.height));
  },
  encode(message: QueryChannelsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.channels) {
      IdentifiedChannel.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    if (message.height !== undefined) {
      Height.encode(message.height, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryChannelsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryChannelsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channels.push(IdentifiedChannel.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        case 3:
          message.height = Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryChannelsResponse {
    return {
      channels: Array.isArray(object?.channels) ? object.channels.map((e: any) => IdentifiedChannel.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
      height: isSet(object.height) ? Height.fromJSON(object.height) : undefined
    };
  },
  toJSON(message: QueryChannelsResponse): unknown {
    const obj: any = {};
    if (message.channels) {
      obj.channels = message.channels.map(e => e ? IdentifiedChannel.toJSON(e) : undefined);
    } else {
      obj.channels = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    message.height !== undefined && (obj.height = message.height ? Height.toJSON(message.height) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryChannelsResponse>): QueryChannelsResponse {
    const message = createBaseQueryChannelsResponse();
    message.channels = object.channels?.map(e => IdentifiedChannel.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    message.height = object.height !== undefined && object.height !== null ? Height.fromPartial(object.height) : undefined;
    return message;
  },
  fromAmino(object: QueryChannelsResponseAmino): QueryChannelsResponse {
    const message = createBaseQueryChannelsResponse();
    message.channels = object.channels?.map(e => IdentifiedChannel.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = Height.fromAmino(object.height);
    }
    return message;
  },
  toAmino(message: QueryChannelsResponse): QueryChannelsResponseAmino {
    const obj: any = {};
    if (message.channels) {
      obj.channels = message.channels.map(e => e ? IdentifiedChannel.toAmino(e) : undefined);
    } else {
      obj.channels = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    obj.height = message.height ? Height.toAmino(message.height) : {};
    return obj;
  },
  fromAminoMsg(object: QueryChannelsResponseAminoMsg): QueryChannelsResponse {
    return QueryChannelsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryChannelsResponse): QueryChannelsResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryChannelsResponse",
      value: QueryChannelsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryChannelsResponseProtoMsg): QueryChannelsResponse {
    return QueryChannelsResponse.decode(message.value);
  },
  toProto(message: QueryChannelsResponse): Uint8Array {
    return QueryChannelsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryChannelsResponse): QueryChannelsResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.QueryChannelsResponse",
      value: QueryChannelsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryChannelsResponse.typeUrl, QueryChannelsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryChannelsResponse.aminoType, QueryChannelsResponse.typeUrl);
function createBaseQueryConnectionChannelsRequest(): QueryConnectionChannelsRequest {
  return {
    connection: "",
    pagination: undefined
  };
}
export const QueryConnectionChannelsRequest = {
  typeUrl: "/ibc.core.channel.v1.QueryConnectionChannelsRequest",
  aminoType: "cosmos-sdk/QueryConnectionChannelsRequest",
  is(o: any): o is QueryConnectionChannelsRequest {
    return o && (o.$typeUrl === QueryConnectionChannelsRequest.typeUrl || typeof o.connection === "string");
  },
  isSDK(o: any): o is QueryConnectionChannelsRequestSDKType {
    return o && (o.$typeUrl === QueryConnectionChannelsRequest.typeUrl || typeof o.connection === "string");
  },
  isAmino(o: any): o is QueryConnectionChannelsRequestAmino {
    return o && (o.$typeUrl === QueryConnectionChannelsRequest.typeUrl || typeof o.connection === "string");
  },
  encode(message: QueryConnectionChannelsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.connection !== "") {
      writer.uint32(10).string(message.connection);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryConnectionChannelsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConnectionChannelsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connection = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryConnectionChannelsRequest {
    return {
      connection: isSet(object.connection) ? String(object.connection) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryConnectionChannelsRequest): unknown {
    const obj: any = {};
    message.connection !== undefined && (obj.connection = message.connection);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryConnectionChannelsRequest>): QueryConnectionChannelsRequest {
    const message = createBaseQueryConnectionChannelsRequest();
    message.connection = object.connection ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryConnectionChannelsRequestAmino): QueryConnectionChannelsRequest {
    const message = createBaseQueryConnectionChannelsRequest();
    if (object.connection !== undefined && object.connection !== null) {
      message.connection = object.connection;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryConnectionChannelsRequest): QueryConnectionChannelsRequestAmino {
    const obj: any = {};
    obj.connection = message.connection;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryConnectionChannelsRequestAminoMsg): QueryConnectionChannelsRequest {
    return QueryConnectionChannelsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryConnectionChannelsRequest): QueryConnectionChannelsRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryConnectionChannelsRequest",
      value: QueryConnectionChannelsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryConnectionChannelsRequestProtoMsg): QueryConnectionChannelsRequest {
    return QueryConnectionChannelsRequest.decode(message.value);
  },
  toProto(message: QueryConnectionChannelsRequest): Uint8Array {
    return QueryConnectionChannelsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryConnectionChannelsRequest): QueryConnectionChannelsRequestProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.QueryConnectionChannelsRequest",
      value: QueryConnectionChannelsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryConnectionChannelsRequest.typeUrl, QueryConnectionChannelsRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryConnectionChannelsRequest.aminoType, QueryConnectionChannelsRequest.typeUrl);
function createBaseQueryConnectionChannelsResponse(): QueryConnectionChannelsResponse {
  return {
    channels: [],
    pagination: undefined,
    height: Height.fromPartial({})
  };
}
export const QueryConnectionChannelsResponse = {
  typeUrl: "/ibc.core.channel.v1.QueryConnectionChannelsResponse",
  aminoType: "cosmos-sdk/QueryConnectionChannelsResponse",
  is(o: any): o is QueryConnectionChannelsResponse {
    return o && (o.$typeUrl === QueryConnectionChannelsResponse.typeUrl || Array.isArray(o.channels) && (!o.channels.length || IdentifiedChannel.is(o.channels[0])) && Height.is(o.height));
  },
  isSDK(o: any): o is QueryConnectionChannelsResponseSDKType {
    return o && (o.$typeUrl === QueryConnectionChannelsResponse.typeUrl || Array.isArray(o.channels) && (!o.channels.length || IdentifiedChannel.isSDK(o.channels[0])) && Height.isSDK(o.height));
  },
  isAmino(o: any): o is QueryConnectionChannelsResponseAmino {
    return o && (o.$typeUrl === QueryConnectionChannelsResponse.typeUrl || Array.isArray(o.channels) && (!o.channels.length || IdentifiedChannel.isAmino(o.channels[0])) && Height.isAmino(o.height));
  },
  encode(message: QueryConnectionChannelsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.channels) {
      IdentifiedChannel.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    if (message.height !== undefined) {
      Height.encode(message.height, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryConnectionChannelsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConnectionChannelsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channels.push(IdentifiedChannel.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        case 3:
          message.height = Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryConnectionChannelsResponse {
    return {
      channels: Array.isArray(object?.channels) ? object.channels.map((e: any) => IdentifiedChannel.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
      height: isSet(object.height) ? Height.fromJSON(object.height) : undefined
    };
  },
  toJSON(message: QueryConnectionChannelsResponse): unknown {
    const obj: any = {};
    if (message.channels) {
      obj.channels = message.channels.map(e => e ? IdentifiedChannel.toJSON(e) : undefined);
    } else {
      obj.channels = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    message.height !== undefined && (obj.height = message.height ? Height.toJSON(message.height) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryConnectionChannelsResponse>): QueryConnectionChannelsResponse {
    const message = createBaseQueryConnectionChannelsResponse();
    message.channels = object.channels?.map(e => IdentifiedChannel.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    message.height = object.height !== undefined && object.height !== null ? Height.fromPartial(object.height) : undefined;
    return message;
  },
  fromAmino(object: QueryConnectionChannelsResponseAmino): QueryConnectionChannelsResponse {
    const message = createBaseQueryConnectionChannelsResponse();
    message.channels = object.channels?.map(e => IdentifiedChannel.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = Height.fromAmino(object.height);
    }
    return message;
  },
  toAmino(message: QueryConnectionChannelsResponse): QueryConnectionChannelsResponseAmino {
    const obj: any = {};
    if (message.channels) {
      obj.channels = message.channels.map(e => e ? IdentifiedChannel.toAmino(e) : undefined);
    } else {
      obj.channels = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    obj.height = message.height ? Height.toAmino(message.height) : {};
    return obj;
  },
  fromAminoMsg(object: QueryConnectionChannelsResponseAminoMsg): QueryConnectionChannelsResponse {
    return QueryConnectionChannelsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryConnectionChannelsResponse): QueryConnectionChannelsResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryConnectionChannelsResponse",
      value: QueryConnectionChannelsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryConnectionChannelsResponseProtoMsg): QueryConnectionChannelsResponse {
    return QueryConnectionChannelsResponse.decode(message.value);
  },
  toProto(message: QueryConnectionChannelsResponse): Uint8Array {
    return QueryConnectionChannelsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryConnectionChannelsResponse): QueryConnectionChannelsResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.QueryConnectionChannelsResponse",
      value: QueryConnectionChannelsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryConnectionChannelsResponse.typeUrl, QueryConnectionChannelsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryConnectionChannelsResponse.aminoType, QueryConnectionChannelsResponse.typeUrl);
function createBaseQueryChannelClientStateRequest(): QueryChannelClientStateRequest {
  return {
    port_id: "",
    channel_id: ""
  };
}
export const QueryChannelClientStateRequest = {
  typeUrl: "/ibc.core.channel.v1.QueryChannelClientStateRequest",
  aminoType: "cosmos-sdk/QueryChannelClientStateRequest",
  is(o: any): o is QueryChannelClientStateRequest {
    return o && (o.$typeUrl === QueryChannelClientStateRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string");
  },
  isSDK(o: any): o is QueryChannelClientStateRequestSDKType {
    return o && (o.$typeUrl === QueryChannelClientStateRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string");
  },
  isAmino(o: any): o is QueryChannelClientStateRequestAmino {
    return o && (o.$typeUrl === QueryChannelClientStateRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string");
  },
  encode(message: QueryChannelClientStateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.port_id !== "") {
      writer.uint32(10).string(message.port_id);
    }
    if (message.channel_id !== "") {
      writer.uint32(18).string(message.channel_id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryChannelClientStateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryChannelClientStateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.port_id = reader.string();
          break;
        case 2:
          message.channel_id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryChannelClientStateRequest {
    return {
      port_id: isSet(object.port_id) ? String(object.port_id) : "",
      channel_id: isSet(object.channel_id) ? String(object.channel_id) : ""
    };
  },
  toJSON(message: QueryChannelClientStateRequest): unknown {
    const obj: any = {};
    message.port_id !== undefined && (obj.port_id = message.port_id);
    message.channel_id !== undefined && (obj.channel_id = message.channel_id);
    return obj;
  },
  fromPartial(object: Partial<QueryChannelClientStateRequest>): QueryChannelClientStateRequest {
    const message = createBaseQueryChannelClientStateRequest();
    message.port_id = object.port_id ?? "";
    message.channel_id = object.channel_id ?? "";
    return message;
  },
  fromAmino(object: QueryChannelClientStateRequestAmino): QueryChannelClientStateRequest {
    const message = createBaseQueryChannelClientStateRequest();
    if (object.port_id !== undefined && object.port_id !== null) {
      message.port_id = object.port_id;
    }
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channel_id = object.channel_id;
    }
    return message;
  },
  toAmino(message: QueryChannelClientStateRequest): QueryChannelClientStateRequestAmino {
    const obj: any = {};
    obj.port_id = message.port_id;
    obj.channel_id = message.channel_id;
    return obj;
  },
  fromAminoMsg(object: QueryChannelClientStateRequestAminoMsg): QueryChannelClientStateRequest {
    return QueryChannelClientStateRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryChannelClientStateRequest): QueryChannelClientStateRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryChannelClientStateRequest",
      value: QueryChannelClientStateRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryChannelClientStateRequestProtoMsg): QueryChannelClientStateRequest {
    return QueryChannelClientStateRequest.decode(message.value);
  },
  toProto(message: QueryChannelClientStateRequest): Uint8Array {
    return QueryChannelClientStateRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryChannelClientStateRequest): QueryChannelClientStateRequestProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.QueryChannelClientStateRequest",
      value: QueryChannelClientStateRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryChannelClientStateRequest.typeUrl, QueryChannelClientStateRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryChannelClientStateRequest.aminoType, QueryChannelClientStateRequest.typeUrl);
function createBaseQueryChannelClientStateResponse(): QueryChannelClientStateResponse {
  return {
    identified_client_state: undefined,
    proof: new Uint8Array(),
    proof_height: Height.fromPartial({})
  };
}
export const QueryChannelClientStateResponse = {
  typeUrl: "/ibc.core.channel.v1.QueryChannelClientStateResponse",
  aminoType: "cosmos-sdk/QueryChannelClientStateResponse",
  is(o: any): o is QueryChannelClientStateResponse {
    return o && (o.$typeUrl === QueryChannelClientStateResponse.typeUrl || (o.proof instanceof Uint8Array || typeof o.proof === "string") && Height.is(o.proof_height));
  },
  isSDK(o: any): o is QueryChannelClientStateResponseSDKType {
    return o && (o.$typeUrl === QueryChannelClientStateResponse.typeUrl || (o.proof instanceof Uint8Array || typeof o.proof === "string") && Height.isSDK(o.proof_height));
  },
  isAmino(o: any): o is QueryChannelClientStateResponseAmino {
    return o && (o.$typeUrl === QueryChannelClientStateResponse.typeUrl || (o.proof instanceof Uint8Array || typeof o.proof === "string") && Height.isAmino(o.proof_height));
  },
  encode(message: QueryChannelClientStateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.identified_client_state !== undefined) {
      IdentifiedClientState.encode(message.identified_client_state, writer.uint32(10).fork()).ldelim();
    }
    if (message.proof.length !== 0) {
      writer.uint32(18).bytes(message.proof);
    }
    if (message.proof_height !== undefined) {
      Height.encode(message.proof_height, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryChannelClientStateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryChannelClientStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.identified_client_state = IdentifiedClientState.decode(reader, reader.uint32());
          break;
        case 2:
          message.proof = reader.bytes();
          break;
        case 3:
          message.proof_height = Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryChannelClientStateResponse {
    return {
      identified_client_state: isSet(object.identified_client_state) ? IdentifiedClientState.fromJSON(object.identified_client_state) : undefined,
      proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(),
      proof_height: isSet(object.proof_height) ? Height.fromJSON(object.proof_height) : undefined
    };
  },
  toJSON(message: QueryChannelClientStateResponse): unknown {
    const obj: any = {};
    message.identified_client_state !== undefined && (obj.identified_client_state = message.identified_client_state ? IdentifiedClientState.toJSON(message.identified_client_state) : undefined);
    message.proof !== undefined && (obj.proof = base64FromBytes(message.proof !== undefined ? message.proof : new Uint8Array()));
    message.proof_height !== undefined && (obj.proof_height = message.proof_height ? Height.toJSON(message.proof_height) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryChannelClientStateResponse>): QueryChannelClientStateResponse {
    const message = createBaseQueryChannelClientStateResponse();
    message.identified_client_state = object.identified_client_state !== undefined && object.identified_client_state !== null ? IdentifiedClientState.fromPartial(object.identified_client_state) : undefined;
    message.proof = object.proof ?? new Uint8Array();
    message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? Height.fromPartial(object.proof_height) : undefined;
    return message;
  },
  fromAmino(object: QueryChannelClientStateResponseAmino): QueryChannelClientStateResponse {
    const message = createBaseQueryChannelClientStateResponse();
    if (object.identified_client_state !== undefined && object.identified_client_state !== null) {
      message.identified_client_state = IdentifiedClientState.fromAmino(object.identified_client_state);
    }
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = bytesFromBase64(object.proof);
    }
    if (object.proof_height !== undefined && object.proof_height !== null) {
      message.proof_height = Height.fromAmino(object.proof_height);
    }
    return message;
  },
  toAmino(message: QueryChannelClientStateResponse): QueryChannelClientStateResponseAmino {
    const obj: any = {};
    obj.identified_client_state = message.identified_client_state ? IdentifiedClientState.toAmino(message.identified_client_state) : undefined;
    obj.proof = message.proof ? base64FromBytes(message.proof) : undefined;
    obj.proof_height = message.proof_height ? Height.toAmino(message.proof_height) : {};
    return obj;
  },
  fromAminoMsg(object: QueryChannelClientStateResponseAminoMsg): QueryChannelClientStateResponse {
    return QueryChannelClientStateResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryChannelClientStateResponse): QueryChannelClientStateResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryChannelClientStateResponse",
      value: QueryChannelClientStateResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryChannelClientStateResponseProtoMsg): QueryChannelClientStateResponse {
    return QueryChannelClientStateResponse.decode(message.value);
  },
  toProto(message: QueryChannelClientStateResponse): Uint8Array {
    return QueryChannelClientStateResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryChannelClientStateResponse): QueryChannelClientStateResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.QueryChannelClientStateResponse",
      value: QueryChannelClientStateResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryChannelClientStateResponse.typeUrl, QueryChannelClientStateResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryChannelClientStateResponse.aminoType, QueryChannelClientStateResponse.typeUrl);
function createBaseQueryChannelConsensusStateRequest(): QueryChannelConsensusStateRequest {
  return {
    port_id: "",
    channel_id: "",
    revision_number: BigInt(0),
    revision_height: BigInt(0)
  };
}
export const QueryChannelConsensusStateRequest = {
  typeUrl: "/ibc.core.channel.v1.QueryChannelConsensusStateRequest",
  aminoType: "cosmos-sdk/QueryChannelConsensusStateRequest",
  is(o: any): o is QueryChannelConsensusStateRequest {
    return o && (o.$typeUrl === QueryChannelConsensusStateRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && typeof o.revision_number === "bigint" && typeof o.revision_height === "bigint");
  },
  isSDK(o: any): o is QueryChannelConsensusStateRequestSDKType {
    return o && (o.$typeUrl === QueryChannelConsensusStateRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && typeof o.revision_number === "bigint" && typeof o.revision_height === "bigint");
  },
  isAmino(o: any): o is QueryChannelConsensusStateRequestAmino {
    return o && (o.$typeUrl === QueryChannelConsensusStateRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && typeof o.revision_number === "bigint" && typeof o.revision_height === "bigint");
  },
  encode(message: QueryChannelConsensusStateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.port_id !== "") {
      writer.uint32(10).string(message.port_id);
    }
    if (message.channel_id !== "") {
      writer.uint32(18).string(message.channel_id);
    }
    if (message.revision_number !== BigInt(0)) {
      writer.uint32(24).uint64(message.revision_number);
    }
    if (message.revision_height !== BigInt(0)) {
      writer.uint32(32).uint64(message.revision_height);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryChannelConsensusStateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryChannelConsensusStateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.port_id = reader.string();
          break;
        case 2:
          message.channel_id = reader.string();
          break;
        case 3:
          message.revision_number = reader.uint64();
          break;
        case 4:
          message.revision_height = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryChannelConsensusStateRequest {
    return {
      port_id: isSet(object.port_id) ? String(object.port_id) : "",
      channel_id: isSet(object.channel_id) ? String(object.channel_id) : "",
      revision_number: isSet(object.revision_number) ? BigInt(object.revision_number.toString()) : BigInt(0),
      revision_height: isSet(object.revision_height) ? BigInt(object.revision_height.toString()) : BigInt(0)
    };
  },
  toJSON(message: QueryChannelConsensusStateRequest): unknown {
    const obj: any = {};
    message.port_id !== undefined && (obj.port_id = message.port_id);
    message.channel_id !== undefined && (obj.channel_id = message.channel_id);
    message.revision_number !== undefined && (obj.revision_number = (message.revision_number || BigInt(0)).toString());
    message.revision_height !== undefined && (obj.revision_height = (message.revision_height || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryChannelConsensusStateRequest>): QueryChannelConsensusStateRequest {
    const message = createBaseQueryChannelConsensusStateRequest();
    message.port_id = object.port_id ?? "";
    message.channel_id = object.channel_id ?? "";
    message.revision_number = object.revision_number !== undefined && object.revision_number !== null ? BigInt(object.revision_number.toString()) : BigInt(0);
    message.revision_height = object.revision_height !== undefined && object.revision_height !== null ? BigInt(object.revision_height.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryChannelConsensusStateRequestAmino): QueryChannelConsensusStateRequest {
    const message = createBaseQueryChannelConsensusStateRequest();
    if (object.port_id !== undefined && object.port_id !== null) {
      message.port_id = object.port_id;
    }
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channel_id = object.channel_id;
    }
    if (object.revision_number !== undefined && object.revision_number !== null) {
      message.revision_number = BigInt(object.revision_number);
    }
    if (object.revision_height !== undefined && object.revision_height !== null) {
      message.revision_height = BigInt(object.revision_height);
    }
    return message;
  },
  toAmino(message: QueryChannelConsensusStateRequest): QueryChannelConsensusStateRequestAmino {
    const obj: any = {};
    obj.port_id = message.port_id;
    obj.channel_id = message.channel_id;
    obj.revision_number = message.revision_number ? message.revision_number.toString() : undefined;
    obj.revision_height = message.revision_height ? message.revision_height.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryChannelConsensusStateRequestAminoMsg): QueryChannelConsensusStateRequest {
    return QueryChannelConsensusStateRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryChannelConsensusStateRequest): QueryChannelConsensusStateRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryChannelConsensusStateRequest",
      value: QueryChannelConsensusStateRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryChannelConsensusStateRequestProtoMsg): QueryChannelConsensusStateRequest {
    return QueryChannelConsensusStateRequest.decode(message.value);
  },
  toProto(message: QueryChannelConsensusStateRequest): Uint8Array {
    return QueryChannelConsensusStateRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryChannelConsensusStateRequest): QueryChannelConsensusStateRequestProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.QueryChannelConsensusStateRequest",
      value: QueryChannelConsensusStateRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryChannelConsensusStateRequest.typeUrl, QueryChannelConsensusStateRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryChannelConsensusStateRequest.aminoType, QueryChannelConsensusStateRequest.typeUrl);
function createBaseQueryChannelConsensusStateResponse(): QueryChannelConsensusStateResponse {
  return {
    consensus_state: undefined,
    client_id: "",
    proof: new Uint8Array(),
    proof_height: Height.fromPartial({})
  };
}
export const QueryChannelConsensusStateResponse = {
  typeUrl: "/ibc.core.channel.v1.QueryChannelConsensusStateResponse",
  aminoType: "cosmos-sdk/QueryChannelConsensusStateResponse",
  is(o: any): o is QueryChannelConsensusStateResponse {
    return o && (o.$typeUrl === QueryChannelConsensusStateResponse.typeUrl || typeof o.client_id === "string" && (o.proof instanceof Uint8Array || typeof o.proof === "string") && Height.is(o.proof_height));
  },
  isSDK(o: any): o is QueryChannelConsensusStateResponseSDKType {
    return o && (o.$typeUrl === QueryChannelConsensusStateResponse.typeUrl || typeof o.client_id === "string" && (o.proof instanceof Uint8Array || typeof o.proof === "string") && Height.isSDK(o.proof_height));
  },
  isAmino(o: any): o is QueryChannelConsensusStateResponseAmino {
    return o && (o.$typeUrl === QueryChannelConsensusStateResponse.typeUrl || typeof o.client_id === "string" && (o.proof instanceof Uint8Array || typeof o.proof === "string") && Height.isAmino(o.proof_height));
  },
  encode(message: QueryChannelConsensusStateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.consensus_state !== undefined) {
      Any.encode(message.consensus_state, writer.uint32(10).fork()).ldelim();
    }
    if (message.client_id !== "") {
      writer.uint32(18).string(message.client_id);
    }
    if (message.proof.length !== 0) {
      writer.uint32(26).bytes(message.proof);
    }
    if (message.proof_height !== undefined) {
      Height.encode(message.proof_height, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryChannelConsensusStateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryChannelConsensusStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.consensus_state = Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.client_id = reader.string();
          break;
        case 3:
          message.proof = reader.bytes();
          break;
        case 4:
          message.proof_height = Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryChannelConsensusStateResponse {
    return {
      consensus_state: isSet(object.consensus_state) ? Any.fromJSON(object.consensus_state) : undefined,
      client_id: isSet(object.client_id) ? String(object.client_id) : "",
      proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(),
      proof_height: isSet(object.proof_height) ? Height.fromJSON(object.proof_height) : undefined
    };
  },
  toJSON(message: QueryChannelConsensusStateResponse): unknown {
    const obj: any = {};
    message.consensus_state !== undefined && (obj.consensus_state = message.consensus_state ? Any.toJSON(message.consensus_state) : undefined);
    message.client_id !== undefined && (obj.client_id = message.client_id);
    message.proof !== undefined && (obj.proof = base64FromBytes(message.proof !== undefined ? message.proof : new Uint8Array()));
    message.proof_height !== undefined && (obj.proof_height = message.proof_height ? Height.toJSON(message.proof_height) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryChannelConsensusStateResponse>): QueryChannelConsensusStateResponse {
    const message = createBaseQueryChannelConsensusStateResponse();
    message.consensus_state = object.consensus_state !== undefined && object.consensus_state !== null ? Any.fromPartial(object.consensus_state) : undefined;
    message.client_id = object.client_id ?? "";
    message.proof = object.proof ?? new Uint8Array();
    message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? Height.fromPartial(object.proof_height) : undefined;
    return message;
  },
  fromAmino(object: QueryChannelConsensusStateResponseAmino): QueryChannelConsensusStateResponse {
    const message = createBaseQueryChannelConsensusStateResponse();
    if (object.consensus_state !== undefined && object.consensus_state !== null) {
      message.consensus_state = Any.fromAmino(object.consensus_state);
    }
    if (object.client_id !== undefined && object.client_id !== null) {
      message.client_id = object.client_id;
    }
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = bytesFromBase64(object.proof);
    }
    if (object.proof_height !== undefined && object.proof_height !== null) {
      message.proof_height = Height.fromAmino(object.proof_height);
    }
    return message;
  },
  toAmino(message: QueryChannelConsensusStateResponse): QueryChannelConsensusStateResponseAmino {
    const obj: any = {};
    obj.consensus_state = message.consensus_state ? Any.toAmino(message.consensus_state) : undefined;
    obj.client_id = message.client_id;
    obj.proof = message.proof ? base64FromBytes(message.proof) : undefined;
    obj.proof_height = message.proof_height ? Height.toAmino(message.proof_height) : {};
    return obj;
  },
  fromAminoMsg(object: QueryChannelConsensusStateResponseAminoMsg): QueryChannelConsensusStateResponse {
    return QueryChannelConsensusStateResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryChannelConsensusStateResponse): QueryChannelConsensusStateResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryChannelConsensusStateResponse",
      value: QueryChannelConsensusStateResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryChannelConsensusStateResponseProtoMsg): QueryChannelConsensusStateResponse {
    return QueryChannelConsensusStateResponse.decode(message.value);
  },
  toProto(message: QueryChannelConsensusStateResponse): Uint8Array {
    return QueryChannelConsensusStateResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryChannelConsensusStateResponse): QueryChannelConsensusStateResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.QueryChannelConsensusStateResponse",
      value: QueryChannelConsensusStateResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryChannelConsensusStateResponse.typeUrl, QueryChannelConsensusStateResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryChannelConsensusStateResponse.aminoType, QueryChannelConsensusStateResponse.typeUrl);
function createBaseQueryPacketCommitmentRequest(): QueryPacketCommitmentRequest {
  return {
    port_id: "",
    channel_id: "",
    sequence: BigInt(0)
  };
}
export const QueryPacketCommitmentRequest = {
  typeUrl: "/ibc.core.channel.v1.QueryPacketCommitmentRequest",
  aminoType: "cosmos-sdk/QueryPacketCommitmentRequest",
  is(o: any): o is QueryPacketCommitmentRequest {
    return o && (o.$typeUrl === QueryPacketCommitmentRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && typeof o.sequence === "bigint");
  },
  isSDK(o: any): o is QueryPacketCommitmentRequestSDKType {
    return o && (o.$typeUrl === QueryPacketCommitmentRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && typeof o.sequence === "bigint");
  },
  isAmino(o: any): o is QueryPacketCommitmentRequestAmino {
    return o && (o.$typeUrl === QueryPacketCommitmentRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && typeof o.sequence === "bigint");
  },
  encode(message: QueryPacketCommitmentRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.port_id !== "") {
      writer.uint32(10).string(message.port_id);
    }
    if (message.channel_id !== "") {
      writer.uint32(18).string(message.channel_id);
    }
    if (message.sequence !== BigInt(0)) {
      writer.uint32(24).uint64(message.sequence);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPacketCommitmentRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPacketCommitmentRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.port_id = reader.string();
          break;
        case 2:
          message.channel_id = reader.string();
          break;
        case 3:
          message.sequence = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPacketCommitmentRequest {
    return {
      port_id: isSet(object.port_id) ? String(object.port_id) : "",
      channel_id: isSet(object.channel_id) ? String(object.channel_id) : "",
      sequence: isSet(object.sequence) ? BigInt(object.sequence.toString()) : BigInt(0)
    };
  },
  toJSON(message: QueryPacketCommitmentRequest): unknown {
    const obj: any = {};
    message.port_id !== undefined && (obj.port_id = message.port_id);
    message.channel_id !== undefined && (obj.channel_id = message.channel_id);
    message.sequence !== undefined && (obj.sequence = (message.sequence || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryPacketCommitmentRequest>): QueryPacketCommitmentRequest {
    const message = createBaseQueryPacketCommitmentRequest();
    message.port_id = object.port_id ?? "";
    message.channel_id = object.channel_id ?? "";
    message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryPacketCommitmentRequestAmino): QueryPacketCommitmentRequest {
    const message = createBaseQueryPacketCommitmentRequest();
    if (object.port_id !== undefined && object.port_id !== null) {
      message.port_id = object.port_id;
    }
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channel_id = object.channel_id;
    }
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = BigInt(object.sequence);
    }
    return message;
  },
  toAmino(message: QueryPacketCommitmentRequest): QueryPacketCommitmentRequestAmino {
    const obj: any = {};
    obj.port_id = message.port_id;
    obj.channel_id = message.channel_id;
    obj.sequence = message.sequence ? message.sequence.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPacketCommitmentRequestAminoMsg): QueryPacketCommitmentRequest {
    return QueryPacketCommitmentRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryPacketCommitmentRequest): QueryPacketCommitmentRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryPacketCommitmentRequest",
      value: QueryPacketCommitmentRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryPacketCommitmentRequestProtoMsg): QueryPacketCommitmentRequest {
    return QueryPacketCommitmentRequest.decode(message.value);
  },
  toProto(message: QueryPacketCommitmentRequest): Uint8Array {
    return QueryPacketCommitmentRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPacketCommitmentRequest): QueryPacketCommitmentRequestProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.QueryPacketCommitmentRequest",
      value: QueryPacketCommitmentRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryPacketCommitmentRequest.typeUrl, QueryPacketCommitmentRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryPacketCommitmentRequest.aminoType, QueryPacketCommitmentRequest.typeUrl);
function createBaseQueryPacketCommitmentResponse(): QueryPacketCommitmentResponse {
  return {
    commitment: new Uint8Array(),
    proof: new Uint8Array(),
    proof_height: Height.fromPartial({})
  };
}
export const QueryPacketCommitmentResponse = {
  typeUrl: "/ibc.core.channel.v1.QueryPacketCommitmentResponse",
  aminoType: "cosmos-sdk/QueryPacketCommitmentResponse",
  is(o: any): o is QueryPacketCommitmentResponse {
    return o && (o.$typeUrl === QueryPacketCommitmentResponse.typeUrl || (o.commitment instanceof Uint8Array || typeof o.commitment === "string") && (o.proof instanceof Uint8Array || typeof o.proof === "string") && Height.is(o.proof_height));
  },
  isSDK(o: any): o is QueryPacketCommitmentResponseSDKType {
    return o && (o.$typeUrl === QueryPacketCommitmentResponse.typeUrl || (o.commitment instanceof Uint8Array || typeof o.commitment === "string") && (o.proof instanceof Uint8Array || typeof o.proof === "string") && Height.isSDK(o.proof_height));
  },
  isAmino(o: any): o is QueryPacketCommitmentResponseAmino {
    return o && (o.$typeUrl === QueryPacketCommitmentResponse.typeUrl || (o.commitment instanceof Uint8Array || typeof o.commitment === "string") && (o.proof instanceof Uint8Array || typeof o.proof === "string") && Height.isAmino(o.proof_height));
  },
  encode(message: QueryPacketCommitmentResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.commitment.length !== 0) {
      writer.uint32(10).bytes(message.commitment);
    }
    if (message.proof.length !== 0) {
      writer.uint32(18).bytes(message.proof);
    }
    if (message.proof_height !== undefined) {
      Height.encode(message.proof_height, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPacketCommitmentResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPacketCommitmentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.commitment = reader.bytes();
          break;
        case 2:
          message.proof = reader.bytes();
          break;
        case 3:
          message.proof_height = Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPacketCommitmentResponse {
    return {
      commitment: isSet(object.commitment) ? bytesFromBase64(object.commitment) : new Uint8Array(),
      proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(),
      proof_height: isSet(object.proof_height) ? Height.fromJSON(object.proof_height) : undefined
    };
  },
  toJSON(message: QueryPacketCommitmentResponse): unknown {
    const obj: any = {};
    message.commitment !== undefined && (obj.commitment = base64FromBytes(message.commitment !== undefined ? message.commitment : new Uint8Array()));
    message.proof !== undefined && (obj.proof = base64FromBytes(message.proof !== undefined ? message.proof : new Uint8Array()));
    message.proof_height !== undefined && (obj.proof_height = message.proof_height ? Height.toJSON(message.proof_height) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryPacketCommitmentResponse>): QueryPacketCommitmentResponse {
    const message = createBaseQueryPacketCommitmentResponse();
    message.commitment = object.commitment ?? new Uint8Array();
    message.proof = object.proof ?? new Uint8Array();
    message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? Height.fromPartial(object.proof_height) : undefined;
    return message;
  },
  fromAmino(object: QueryPacketCommitmentResponseAmino): QueryPacketCommitmentResponse {
    const message = createBaseQueryPacketCommitmentResponse();
    if (object.commitment !== undefined && object.commitment !== null) {
      message.commitment = bytesFromBase64(object.commitment);
    }
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = bytesFromBase64(object.proof);
    }
    if (object.proof_height !== undefined && object.proof_height !== null) {
      message.proof_height = Height.fromAmino(object.proof_height);
    }
    return message;
  },
  toAmino(message: QueryPacketCommitmentResponse): QueryPacketCommitmentResponseAmino {
    const obj: any = {};
    obj.commitment = message.commitment ? base64FromBytes(message.commitment) : undefined;
    obj.proof = message.proof ? base64FromBytes(message.proof) : undefined;
    obj.proof_height = message.proof_height ? Height.toAmino(message.proof_height) : {};
    return obj;
  },
  fromAminoMsg(object: QueryPacketCommitmentResponseAminoMsg): QueryPacketCommitmentResponse {
    return QueryPacketCommitmentResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryPacketCommitmentResponse): QueryPacketCommitmentResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryPacketCommitmentResponse",
      value: QueryPacketCommitmentResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryPacketCommitmentResponseProtoMsg): QueryPacketCommitmentResponse {
    return QueryPacketCommitmentResponse.decode(message.value);
  },
  toProto(message: QueryPacketCommitmentResponse): Uint8Array {
    return QueryPacketCommitmentResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPacketCommitmentResponse): QueryPacketCommitmentResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.QueryPacketCommitmentResponse",
      value: QueryPacketCommitmentResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryPacketCommitmentResponse.typeUrl, QueryPacketCommitmentResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryPacketCommitmentResponse.aminoType, QueryPacketCommitmentResponse.typeUrl);
function createBaseQueryPacketCommitmentsRequest(): QueryPacketCommitmentsRequest {
  return {
    port_id: "",
    channel_id: "",
    pagination: undefined
  };
}
export const QueryPacketCommitmentsRequest = {
  typeUrl: "/ibc.core.channel.v1.QueryPacketCommitmentsRequest",
  aminoType: "cosmos-sdk/QueryPacketCommitmentsRequest",
  is(o: any): o is QueryPacketCommitmentsRequest {
    return o && (o.$typeUrl === QueryPacketCommitmentsRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string");
  },
  isSDK(o: any): o is QueryPacketCommitmentsRequestSDKType {
    return o && (o.$typeUrl === QueryPacketCommitmentsRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string");
  },
  isAmino(o: any): o is QueryPacketCommitmentsRequestAmino {
    return o && (o.$typeUrl === QueryPacketCommitmentsRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string");
  },
  encode(message: QueryPacketCommitmentsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.port_id !== "") {
      writer.uint32(10).string(message.port_id);
    }
    if (message.channel_id !== "") {
      writer.uint32(18).string(message.channel_id);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPacketCommitmentsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPacketCommitmentsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.port_id = reader.string();
          break;
        case 2:
          message.channel_id = reader.string();
          break;
        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPacketCommitmentsRequest {
    return {
      port_id: isSet(object.port_id) ? String(object.port_id) : "",
      channel_id: isSet(object.channel_id) ? String(object.channel_id) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryPacketCommitmentsRequest): unknown {
    const obj: any = {};
    message.port_id !== undefined && (obj.port_id = message.port_id);
    message.channel_id !== undefined && (obj.channel_id = message.channel_id);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryPacketCommitmentsRequest>): QueryPacketCommitmentsRequest {
    const message = createBaseQueryPacketCommitmentsRequest();
    message.port_id = object.port_id ?? "";
    message.channel_id = object.channel_id ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryPacketCommitmentsRequestAmino): QueryPacketCommitmentsRequest {
    const message = createBaseQueryPacketCommitmentsRequest();
    if (object.port_id !== undefined && object.port_id !== null) {
      message.port_id = object.port_id;
    }
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channel_id = object.channel_id;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryPacketCommitmentsRequest): QueryPacketCommitmentsRequestAmino {
    const obj: any = {};
    obj.port_id = message.port_id;
    obj.channel_id = message.channel_id;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPacketCommitmentsRequestAminoMsg): QueryPacketCommitmentsRequest {
    return QueryPacketCommitmentsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryPacketCommitmentsRequest): QueryPacketCommitmentsRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryPacketCommitmentsRequest",
      value: QueryPacketCommitmentsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryPacketCommitmentsRequestProtoMsg): QueryPacketCommitmentsRequest {
    return QueryPacketCommitmentsRequest.decode(message.value);
  },
  toProto(message: QueryPacketCommitmentsRequest): Uint8Array {
    return QueryPacketCommitmentsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPacketCommitmentsRequest): QueryPacketCommitmentsRequestProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.QueryPacketCommitmentsRequest",
      value: QueryPacketCommitmentsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryPacketCommitmentsRequest.typeUrl, QueryPacketCommitmentsRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryPacketCommitmentsRequest.aminoType, QueryPacketCommitmentsRequest.typeUrl);
function createBaseQueryPacketCommitmentsResponse(): QueryPacketCommitmentsResponse {
  return {
    commitments: [],
    pagination: undefined,
    height: Height.fromPartial({})
  };
}
export const QueryPacketCommitmentsResponse = {
  typeUrl: "/ibc.core.channel.v1.QueryPacketCommitmentsResponse",
  aminoType: "cosmos-sdk/QueryPacketCommitmentsResponse",
  is(o: any): o is QueryPacketCommitmentsResponse {
    return o && (o.$typeUrl === QueryPacketCommitmentsResponse.typeUrl || Array.isArray(o.commitments) && (!o.commitments.length || PacketState.is(o.commitments[0])) && Height.is(o.height));
  },
  isSDK(o: any): o is QueryPacketCommitmentsResponseSDKType {
    return o && (o.$typeUrl === QueryPacketCommitmentsResponse.typeUrl || Array.isArray(o.commitments) && (!o.commitments.length || PacketState.isSDK(o.commitments[0])) && Height.isSDK(o.height));
  },
  isAmino(o: any): o is QueryPacketCommitmentsResponseAmino {
    return o && (o.$typeUrl === QueryPacketCommitmentsResponse.typeUrl || Array.isArray(o.commitments) && (!o.commitments.length || PacketState.isAmino(o.commitments[0])) && Height.isAmino(o.height));
  },
  encode(message: QueryPacketCommitmentsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.commitments) {
      PacketState.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    if (message.height !== undefined) {
      Height.encode(message.height, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPacketCommitmentsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPacketCommitmentsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.commitments.push(PacketState.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        case 3:
          message.height = Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPacketCommitmentsResponse {
    return {
      commitments: Array.isArray(object?.commitments) ? object.commitments.map((e: any) => PacketState.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
      height: isSet(object.height) ? Height.fromJSON(object.height) : undefined
    };
  },
  toJSON(message: QueryPacketCommitmentsResponse): unknown {
    const obj: any = {};
    if (message.commitments) {
      obj.commitments = message.commitments.map(e => e ? PacketState.toJSON(e) : undefined);
    } else {
      obj.commitments = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    message.height !== undefined && (obj.height = message.height ? Height.toJSON(message.height) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryPacketCommitmentsResponse>): QueryPacketCommitmentsResponse {
    const message = createBaseQueryPacketCommitmentsResponse();
    message.commitments = object.commitments?.map(e => PacketState.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    message.height = object.height !== undefined && object.height !== null ? Height.fromPartial(object.height) : undefined;
    return message;
  },
  fromAmino(object: QueryPacketCommitmentsResponseAmino): QueryPacketCommitmentsResponse {
    const message = createBaseQueryPacketCommitmentsResponse();
    message.commitments = object.commitments?.map(e => PacketState.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = Height.fromAmino(object.height);
    }
    return message;
  },
  toAmino(message: QueryPacketCommitmentsResponse): QueryPacketCommitmentsResponseAmino {
    const obj: any = {};
    if (message.commitments) {
      obj.commitments = message.commitments.map(e => e ? PacketState.toAmino(e) : undefined);
    } else {
      obj.commitments = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    obj.height = message.height ? Height.toAmino(message.height) : {};
    return obj;
  },
  fromAminoMsg(object: QueryPacketCommitmentsResponseAminoMsg): QueryPacketCommitmentsResponse {
    return QueryPacketCommitmentsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryPacketCommitmentsResponse): QueryPacketCommitmentsResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryPacketCommitmentsResponse",
      value: QueryPacketCommitmentsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryPacketCommitmentsResponseProtoMsg): QueryPacketCommitmentsResponse {
    return QueryPacketCommitmentsResponse.decode(message.value);
  },
  toProto(message: QueryPacketCommitmentsResponse): Uint8Array {
    return QueryPacketCommitmentsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPacketCommitmentsResponse): QueryPacketCommitmentsResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.QueryPacketCommitmentsResponse",
      value: QueryPacketCommitmentsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryPacketCommitmentsResponse.typeUrl, QueryPacketCommitmentsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryPacketCommitmentsResponse.aminoType, QueryPacketCommitmentsResponse.typeUrl);
function createBaseQueryPacketReceiptRequest(): QueryPacketReceiptRequest {
  return {
    port_id: "",
    channel_id: "",
    sequence: BigInt(0)
  };
}
export const QueryPacketReceiptRequest = {
  typeUrl: "/ibc.core.channel.v1.QueryPacketReceiptRequest",
  aminoType: "cosmos-sdk/QueryPacketReceiptRequest",
  is(o: any): o is QueryPacketReceiptRequest {
    return o && (o.$typeUrl === QueryPacketReceiptRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && typeof o.sequence === "bigint");
  },
  isSDK(o: any): o is QueryPacketReceiptRequestSDKType {
    return o && (o.$typeUrl === QueryPacketReceiptRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && typeof o.sequence === "bigint");
  },
  isAmino(o: any): o is QueryPacketReceiptRequestAmino {
    return o && (o.$typeUrl === QueryPacketReceiptRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && typeof o.sequence === "bigint");
  },
  encode(message: QueryPacketReceiptRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.port_id !== "") {
      writer.uint32(10).string(message.port_id);
    }
    if (message.channel_id !== "") {
      writer.uint32(18).string(message.channel_id);
    }
    if (message.sequence !== BigInt(0)) {
      writer.uint32(24).uint64(message.sequence);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPacketReceiptRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPacketReceiptRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.port_id = reader.string();
          break;
        case 2:
          message.channel_id = reader.string();
          break;
        case 3:
          message.sequence = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPacketReceiptRequest {
    return {
      port_id: isSet(object.port_id) ? String(object.port_id) : "",
      channel_id: isSet(object.channel_id) ? String(object.channel_id) : "",
      sequence: isSet(object.sequence) ? BigInt(object.sequence.toString()) : BigInt(0)
    };
  },
  toJSON(message: QueryPacketReceiptRequest): unknown {
    const obj: any = {};
    message.port_id !== undefined && (obj.port_id = message.port_id);
    message.channel_id !== undefined && (obj.channel_id = message.channel_id);
    message.sequence !== undefined && (obj.sequence = (message.sequence || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryPacketReceiptRequest>): QueryPacketReceiptRequest {
    const message = createBaseQueryPacketReceiptRequest();
    message.port_id = object.port_id ?? "";
    message.channel_id = object.channel_id ?? "";
    message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryPacketReceiptRequestAmino): QueryPacketReceiptRequest {
    const message = createBaseQueryPacketReceiptRequest();
    if (object.port_id !== undefined && object.port_id !== null) {
      message.port_id = object.port_id;
    }
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channel_id = object.channel_id;
    }
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = BigInt(object.sequence);
    }
    return message;
  },
  toAmino(message: QueryPacketReceiptRequest): QueryPacketReceiptRequestAmino {
    const obj: any = {};
    obj.port_id = message.port_id;
    obj.channel_id = message.channel_id;
    obj.sequence = message.sequence ? message.sequence.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPacketReceiptRequestAminoMsg): QueryPacketReceiptRequest {
    return QueryPacketReceiptRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryPacketReceiptRequest): QueryPacketReceiptRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryPacketReceiptRequest",
      value: QueryPacketReceiptRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryPacketReceiptRequestProtoMsg): QueryPacketReceiptRequest {
    return QueryPacketReceiptRequest.decode(message.value);
  },
  toProto(message: QueryPacketReceiptRequest): Uint8Array {
    return QueryPacketReceiptRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPacketReceiptRequest): QueryPacketReceiptRequestProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.QueryPacketReceiptRequest",
      value: QueryPacketReceiptRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryPacketReceiptRequest.typeUrl, QueryPacketReceiptRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryPacketReceiptRequest.aminoType, QueryPacketReceiptRequest.typeUrl);
function createBaseQueryPacketReceiptResponse(): QueryPacketReceiptResponse {
  return {
    received: false,
    proof: new Uint8Array(),
    proof_height: Height.fromPartial({})
  };
}
export const QueryPacketReceiptResponse = {
  typeUrl: "/ibc.core.channel.v1.QueryPacketReceiptResponse",
  aminoType: "cosmos-sdk/QueryPacketReceiptResponse",
  is(o: any): o is QueryPacketReceiptResponse {
    return o && (o.$typeUrl === QueryPacketReceiptResponse.typeUrl || typeof o.received === "boolean" && (o.proof instanceof Uint8Array || typeof o.proof === "string") && Height.is(o.proof_height));
  },
  isSDK(o: any): o is QueryPacketReceiptResponseSDKType {
    return o && (o.$typeUrl === QueryPacketReceiptResponse.typeUrl || typeof o.received === "boolean" && (o.proof instanceof Uint8Array || typeof o.proof === "string") && Height.isSDK(o.proof_height));
  },
  isAmino(o: any): o is QueryPacketReceiptResponseAmino {
    return o && (o.$typeUrl === QueryPacketReceiptResponse.typeUrl || typeof o.received === "boolean" && (o.proof instanceof Uint8Array || typeof o.proof === "string") && Height.isAmino(o.proof_height));
  },
  encode(message: QueryPacketReceiptResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.received === true) {
      writer.uint32(16).bool(message.received);
    }
    if (message.proof.length !== 0) {
      writer.uint32(26).bytes(message.proof);
    }
    if (message.proof_height !== undefined) {
      Height.encode(message.proof_height, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPacketReceiptResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPacketReceiptResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.received = reader.bool();
          break;
        case 3:
          message.proof = reader.bytes();
          break;
        case 4:
          message.proof_height = Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPacketReceiptResponse {
    return {
      received: isSet(object.received) ? Boolean(object.received) : false,
      proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(),
      proof_height: isSet(object.proof_height) ? Height.fromJSON(object.proof_height) : undefined
    };
  },
  toJSON(message: QueryPacketReceiptResponse): unknown {
    const obj: any = {};
    message.received !== undefined && (obj.received = message.received);
    message.proof !== undefined && (obj.proof = base64FromBytes(message.proof !== undefined ? message.proof : new Uint8Array()));
    message.proof_height !== undefined && (obj.proof_height = message.proof_height ? Height.toJSON(message.proof_height) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryPacketReceiptResponse>): QueryPacketReceiptResponse {
    const message = createBaseQueryPacketReceiptResponse();
    message.received = object.received ?? false;
    message.proof = object.proof ?? new Uint8Array();
    message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? Height.fromPartial(object.proof_height) : undefined;
    return message;
  },
  fromAmino(object: QueryPacketReceiptResponseAmino): QueryPacketReceiptResponse {
    const message = createBaseQueryPacketReceiptResponse();
    if (object.received !== undefined && object.received !== null) {
      message.received = object.received;
    }
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = bytesFromBase64(object.proof);
    }
    if (object.proof_height !== undefined && object.proof_height !== null) {
      message.proof_height = Height.fromAmino(object.proof_height);
    }
    return message;
  },
  toAmino(message: QueryPacketReceiptResponse): QueryPacketReceiptResponseAmino {
    const obj: any = {};
    obj.received = message.received;
    obj.proof = message.proof ? base64FromBytes(message.proof) : undefined;
    obj.proof_height = message.proof_height ? Height.toAmino(message.proof_height) : {};
    return obj;
  },
  fromAminoMsg(object: QueryPacketReceiptResponseAminoMsg): QueryPacketReceiptResponse {
    return QueryPacketReceiptResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryPacketReceiptResponse): QueryPacketReceiptResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryPacketReceiptResponse",
      value: QueryPacketReceiptResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryPacketReceiptResponseProtoMsg): QueryPacketReceiptResponse {
    return QueryPacketReceiptResponse.decode(message.value);
  },
  toProto(message: QueryPacketReceiptResponse): Uint8Array {
    return QueryPacketReceiptResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPacketReceiptResponse): QueryPacketReceiptResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.QueryPacketReceiptResponse",
      value: QueryPacketReceiptResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryPacketReceiptResponse.typeUrl, QueryPacketReceiptResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryPacketReceiptResponse.aminoType, QueryPacketReceiptResponse.typeUrl);
function createBaseQueryPacketAcknowledgementRequest(): QueryPacketAcknowledgementRequest {
  return {
    port_id: "",
    channel_id: "",
    sequence: BigInt(0)
  };
}
export const QueryPacketAcknowledgementRequest = {
  typeUrl: "/ibc.core.channel.v1.QueryPacketAcknowledgementRequest",
  aminoType: "cosmos-sdk/QueryPacketAcknowledgementRequest",
  is(o: any): o is QueryPacketAcknowledgementRequest {
    return o && (o.$typeUrl === QueryPacketAcknowledgementRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && typeof o.sequence === "bigint");
  },
  isSDK(o: any): o is QueryPacketAcknowledgementRequestSDKType {
    return o && (o.$typeUrl === QueryPacketAcknowledgementRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && typeof o.sequence === "bigint");
  },
  isAmino(o: any): o is QueryPacketAcknowledgementRequestAmino {
    return o && (o.$typeUrl === QueryPacketAcknowledgementRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && typeof o.sequence === "bigint");
  },
  encode(message: QueryPacketAcknowledgementRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.port_id !== "") {
      writer.uint32(10).string(message.port_id);
    }
    if (message.channel_id !== "") {
      writer.uint32(18).string(message.channel_id);
    }
    if (message.sequence !== BigInt(0)) {
      writer.uint32(24).uint64(message.sequence);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPacketAcknowledgementRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPacketAcknowledgementRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.port_id = reader.string();
          break;
        case 2:
          message.channel_id = reader.string();
          break;
        case 3:
          message.sequence = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPacketAcknowledgementRequest {
    return {
      port_id: isSet(object.port_id) ? String(object.port_id) : "",
      channel_id: isSet(object.channel_id) ? String(object.channel_id) : "",
      sequence: isSet(object.sequence) ? BigInt(object.sequence.toString()) : BigInt(0)
    };
  },
  toJSON(message: QueryPacketAcknowledgementRequest): unknown {
    const obj: any = {};
    message.port_id !== undefined && (obj.port_id = message.port_id);
    message.channel_id !== undefined && (obj.channel_id = message.channel_id);
    message.sequence !== undefined && (obj.sequence = (message.sequence || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryPacketAcknowledgementRequest>): QueryPacketAcknowledgementRequest {
    const message = createBaseQueryPacketAcknowledgementRequest();
    message.port_id = object.port_id ?? "";
    message.channel_id = object.channel_id ?? "";
    message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryPacketAcknowledgementRequestAmino): QueryPacketAcknowledgementRequest {
    const message = createBaseQueryPacketAcknowledgementRequest();
    if (object.port_id !== undefined && object.port_id !== null) {
      message.port_id = object.port_id;
    }
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channel_id = object.channel_id;
    }
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = BigInt(object.sequence);
    }
    return message;
  },
  toAmino(message: QueryPacketAcknowledgementRequest): QueryPacketAcknowledgementRequestAmino {
    const obj: any = {};
    obj.port_id = message.port_id;
    obj.channel_id = message.channel_id;
    obj.sequence = message.sequence ? message.sequence.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPacketAcknowledgementRequestAminoMsg): QueryPacketAcknowledgementRequest {
    return QueryPacketAcknowledgementRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryPacketAcknowledgementRequest): QueryPacketAcknowledgementRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryPacketAcknowledgementRequest",
      value: QueryPacketAcknowledgementRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryPacketAcknowledgementRequestProtoMsg): QueryPacketAcknowledgementRequest {
    return QueryPacketAcknowledgementRequest.decode(message.value);
  },
  toProto(message: QueryPacketAcknowledgementRequest): Uint8Array {
    return QueryPacketAcknowledgementRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPacketAcknowledgementRequest): QueryPacketAcknowledgementRequestProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.QueryPacketAcknowledgementRequest",
      value: QueryPacketAcknowledgementRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryPacketAcknowledgementRequest.typeUrl, QueryPacketAcknowledgementRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryPacketAcknowledgementRequest.aminoType, QueryPacketAcknowledgementRequest.typeUrl);
function createBaseQueryPacketAcknowledgementResponse(): QueryPacketAcknowledgementResponse {
  return {
    acknowledgement: new Uint8Array(),
    proof: new Uint8Array(),
    proof_height: Height.fromPartial({})
  };
}
export const QueryPacketAcknowledgementResponse = {
  typeUrl: "/ibc.core.channel.v1.QueryPacketAcknowledgementResponse",
  aminoType: "cosmos-sdk/QueryPacketAcknowledgementResponse",
  is(o: any): o is QueryPacketAcknowledgementResponse {
    return o && (o.$typeUrl === QueryPacketAcknowledgementResponse.typeUrl || (o.acknowledgement instanceof Uint8Array || typeof o.acknowledgement === "string") && (o.proof instanceof Uint8Array || typeof o.proof === "string") && Height.is(o.proof_height));
  },
  isSDK(o: any): o is QueryPacketAcknowledgementResponseSDKType {
    return o && (o.$typeUrl === QueryPacketAcknowledgementResponse.typeUrl || (o.acknowledgement instanceof Uint8Array || typeof o.acknowledgement === "string") && (o.proof instanceof Uint8Array || typeof o.proof === "string") && Height.isSDK(o.proof_height));
  },
  isAmino(o: any): o is QueryPacketAcknowledgementResponseAmino {
    return o && (o.$typeUrl === QueryPacketAcknowledgementResponse.typeUrl || (o.acknowledgement instanceof Uint8Array || typeof o.acknowledgement === "string") && (o.proof instanceof Uint8Array || typeof o.proof === "string") && Height.isAmino(o.proof_height));
  },
  encode(message: QueryPacketAcknowledgementResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.acknowledgement.length !== 0) {
      writer.uint32(10).bytes(message.acknowledgement);
    }
    if (message.proof.length !== 0) {
      writer.uint32(18).bytes(message.proof);
    }
    if (message.proof_height !== undefined) {
      Height.encode(message.proof_height, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPacketAcknowledgementResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPacketAcknowledgementResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.acknowledgement = reader.bytes();
          break;
        case 2:
          message.proof = reader.bytes();
          break;
        case 3:
          message.proof_height = Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPacketAcknowledgementResponse {
    return {
      acknowledgement: isSet(object.acknowledgement) ? bytesFromBase64(object.acknowledgement) : new Uint8Array(),
      proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(),
      proof_height: isSet(object.proof_height) ? Height.fromJSON(object.proof_height) : undefined
    };
  },
  toJSON(message: QueryPacketAcknowledgementResponse): unknown {
    const obj: any = {};
    message.acknowledgement !== undefined && (obj.acknowledgement = base64FromBytes(message.acknowledgement !== undefined ? message.acknowledgement : new Uint8Array()));
    message.proof !== undefined && (obj.proof = base64FromBytes(message.proof !== undefined ? message.proof : new Uint8Array()));
    message.proof_height !== undefined && (obj.proof_height = message.proof_height ? Height.toJSON(message.proof_height) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryPacketAcknowledgementResponse>): QueryPacketAcknowledgementResponse {
    const message = createBaseQueryPacketAcknowledgementResponse();
    message.acknowledgement = object.acknowledgement ?? new Uint8Array();
    message.proof = object.proof ?? new Uint8Array();
    message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? Height.fromPartial(object.proof_height) : undefined;
    return message;
  },
  fromAmino(object: QueryPacketAcknowledgementResponseAmino): QueryPacketAcknowledgementResponse {
    const message = createBaseQueryPacketAcknowledgementResponse();
    if (object.acknowledgement !== undefined && object.acknowledgement !== null) {
      message.acknowledgement = bytesFromBase64(object.acknowledgement);
    }
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = bytesFromBase64(object.proof);
    }
    if (object.proof_height !== undefined && object.proof_height !== null) {
      message.proof_height = Height.fromAmino(object.proof_height);
    }
    return message;
  },
  toAmino(message: QueryPacketAcknowledgementResponse): QueryPacketAcknowledgementResponseAmino {
    const obj: any = {};
    obj.acknowledgement = message.acknowledgement ? base64FromBytes(message.acknowledgement) : undefined;
    obj.proof = message.proof ? base64FromBytes(message.proof) : undefined;
    obj.proof_height = message.proof_height ? Height.toAmino(message.proof_height) : {};
    return obj;
  },
  fromAminoMsg(object: QueryPacketAcknowledgementResponseAminoMsg): QueryPacketAcknowledgementResponse {
    return QueryPacketAcknowledgementResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryPacketAcknowledgementResponse): QueryPacketAcknowledgementResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryPacketAcknowledgementResponse",
      value: QueryPacketAcknowledgementResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryPacketAcknowledgementResponseProtoMsg): QueryPacketAcknowledgementResponse {
    return QueryPacketAcknowledgementResponse.decode(message.value);
  },
  toProto(message: QueryPacketAcknowledgementResponse): Uint8Array {
    return QueryPacketAcknowledgementResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPacketAcknowledgementResponse): QueryPacketAcknowledgementResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.QueryPacketAcknowledgementResponse",
      value: QueryPacketAcknowledgementResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryPacketAcknowledgementResponse.typeUrl, QueryPacketAcknowledgementResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryPacketAcknowledgementResponse.aminoType, QueryPacketAcknowledgementResponse.typeUrl);
function createBaseQueryPacketAcknowledgementsRequest(): QueryPacketAcknowledgementsRequest {
  return {
    port_id: "",
    channel_id: "",
    pagination: undefined,
    packet_commitment_sequences: []
  };
}
export const QueryPacketAcknowledgementsRequest = {
  typeUrl: "/ibc.core.channel.v1.QueryPacketAcknowledgementsRequest",
  aminoType: "cosmos-sdk/QueryPacketAcknowledgementsRequest",
  is(o: any): o is QueryPacketAcknowledgementsRequest {
    return o && (o.$typeUrl === QueryPacketAcknowledgementsRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && Array.isArray(o.packet_commitment_sequences) && (!o.packet_commitment_sequences.length || typeof o.packet_commitment_sequences[0] === "bigint"));
  },
  isSDK(o: any): o is QueryPacketAcknowledgementsRequestSDKType {
    return o && (o.$typeUrl === QueryPacketAcknowledgementsRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && Array.isArray(o.packet_commitment_sequences) && (!o.packet_commitment_sequences.length || typeof o.packet_commitment_sequences[0] === "bigint"));
  },
  isAmino(o: any): o is QueryPacketAcknowledgementsRequestAmino {
    return o && (o.$typeUrl === QueryPacketAcknowledgementsRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && Array.isArray(o.packet_commitment_sequences) && (!o.packet_commitment_sequences.length || typeof o.packet_commitment_sequences[0] === "bigint"));
  },
  encode(message: QueryPacketAcknowledgementsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.port_id !== "") {
      writer.uint32(10).string(message.port_id);
    }
    if (message.channel_id !== "") {
      writer.uint32(18).string(message.channel_id);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    writer.uint32(34).fork();
    for (const v of message.packet_commitment_sequences) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPacketAcknowledgementsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPacketAcknowledgementsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.port_id = reader.string();
          break;
        case 2:
          message.channel_id = reader.string();
          break;
        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.packet_commitment_sequences.push(reader.uint64());
            }
          } else {
            message.packet_commitment_sequences.push(reader.uint64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPacketAcknowledgementsRequest {
    return {
      port_id: isSet(object.port_id) ? String(object.port_id) : "",
      channel_id: isSet(object.channel_id) ? String(object.channel_id) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
      packet_commitment_sequences: Array.isArray(object?.packet_commitment_sequences) ? object.packet_commitment_sequences.map((e: any) => BigInt(e.toString())) : []
    };
  },
  toJSON(message: QueryPacketAcknowledgementsRequest): unknown {
    const obj: any = {};
    message.port_id !== undefined && (obj.port_id = message.port_id);
    message.channel_id !== undefined && (obj.channel_id = message.channel_id);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    if (message.packet_commitment_sequences) {
      obj.packet_commitment_sequences = message.packet_commitment_sequences.map(e => (e || BigInt(0)).toString());
    } else {
      obj.packet_commitment_sequences = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryPacketAcknowledgementsRequest>): QueryPacketAcknowledgementsRequest {
    const message = createBaseQueryPacketAcknowledgementsRequest();
    message.port_id = object.port_id ?? "";
    message.channel_id = object.channel_id ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    message.packet_commitment_sequences = object.packet_commitment_sequences?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromAmino(object: QueryPacketAcknowledgementsRequestAmino): QueryPacketAcknowledgementsRequest {
    const message = createBaseQueryPacketAcknowledgementsRequest();
    if (object.port_id !== undefined && object.port_id !== null) {
      message.port_id = object.port_id;
    }
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channel_id = object.channel_id;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    message.packet_commitment_sequences = object.packet_commitment_sequences?.map(e => BigInt(e)) || [];
    return message;
  },
  toAmino(message: QueryPacketAcknowledgementsRequest): QueryPacketAcknowledgementsRequestAmino {
    const obj: any = {};
    obj.port_id = message.port_id;
    obj.channel_id = message.channel_id;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    if (message.packet_commitment_sequences) {
      obj.packet_commitment_sequences = message.packet_commitment_sequences.map(e => e.toString());
    } else {
      obj.packet_commitment_sequences = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryPacketAcknowledgementsRequestAminoMsg): QueryPacketAcknowledgementsRequest {
    return QueryPacketAcknowledgementsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryPacketAcknowledgementsRequest): QueryPacketAcknowledgementsRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryPacketAcknowledgementsRequest",
      value: QueryPacketAcknowledgementsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryPacketAcknowledgementsRequestProtoMsg): QueryPacketAcknowledgementsRequest {
    return QueryPacketAcknowledgementsRequest.decode(message.value);
  },
  toProto(message: QueryPacketAcknowledgementsRequest): Uint8Array {
    return QueryPacketAcknowledgementsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPacketAcknowledgementsRequest): QueryPacketAcknowledgementsRequestProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.QueryPacketAcknowledgementsRequest",
      value: QueryPacketAcknowledgementsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryPacketAcknowledgementsRequest.typeUrl, QueryPacketAcknowledgementsRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryPacketAcknowledgementsRequest.aminoType, QueryPacketAcknowledgementsRequest.typeUrl);
function createBaseQueryPacketAcknowledgementsResponse(): QueryPacketAcknowledgementsResponse {
  return {
    acknowledgements: [],
    pagination: undefined,
    height: Height.fromPartial({})
  };
}
export const QueryPacketAcknowledgementsResponse = {
  typeUrl: "/ibc.core.channel.v1.QueryPacketAcknowledgementsResponse",
  aminoType: "cosmos-sdk/QueryPacketAcknowledgementsResponse",
  is(o: any): o is QueryPacketAcknowledgementsResponse {
    return o && (o.$typeUrl === QueryPacketAcknowledgementsResponse.typeUrl || Array.isArray(o.acknowledgements) && (!o.acknowledgements.length || PacketState.is(o.acknowledgements[0])) && Height.is(o.height));
  },
  isSDK(o: any): o is QueryPacketAcknowledgementsResponseSDKType {
    return o && (o.$typeUrl === QueryPacketAcknowledgementsResponse.typeUrl || Array.isArray(o.acknowledgements) && (!o.acknowledgements.length || PacketState.isSDK(o.acknowledgements[0])) && Height.isSDK(o.height));
  },
  isAmino(o: any): o is QueryPacketAcknowledgementsResponseAmino {
    return o && (o.$typeUrl === QueryPacketAcknowledgementsResponse.typeUrl || Array.isArray(o.acknowledgements) && (!o.acknowledgements.length || PacketState.isAmino(o.acknowledgements[0])) && Height.isAmino(o.height));
  },
  encode(message: QueryPacketAcknowledgementsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.acknowledgements) {
      PacketState.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    if (message.height !== undefined) {
      Height.encode(message.height, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPacketAcknowledgementsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPacketAcknowledgementsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.acknowledgements.push(PacketState.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        case 3:
          message.height = Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPacketAcknowledgementsResponse {
    return {
      acknowledgements: Array.isArray(object?.acknowledgements) ? object.acknowledgements.map((e: any) => PacketState.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
      height: isSet(object.height) ? Height.fromJSON(object.height) : undefined
    };
  },
  toJSON(message: QueryPacketAcknowledgementsResponse): unknown {
    const obj: any = {};
    if (message.acknowledgements) {
      obj.acknowledgements = message.acknowledgements.map(e => e ? PacketState.toJSON(e) : undefined);
    } else {
      obj.acknowledgements = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    message.height !== undefined && (obj.height = message.height ? Height.toJSON(message.height) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryPacketAcknowledgementsResponse>): QueryPacketAcknowledgementsResponse {
    const message = createBaseQueryPacketAcknowledgementsResponse();
    message.acknowledgements = object.acknowledgements?.map(e => PacketState.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    message.height = object.height !== undefined && object.height !== null ? Height.fromPartial(object.height) : undefined;
    return message;
  },
  fromAmino(object: QueryPacketAcknowledgementsResponseAmino): QueryPacketAcknowledgementsResponse {
    const message = createBaseQueryPacketAcknowledgementsResponse();
    message.acknowledgements = object.acknowledgements?.map(e => PacketState.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = Height.fromAmino(object.height);
    }
    return message;
  },
  toAmino(message: QueryPacketAcknowledgementsResponse): QueryPacketAcknowledgementsResponseAmino {
    const obj: any = {};
    if (message.acknowledgements) {
      obj.acknowledgements = message.acknowledgements.map(e => e ? PacketState.toAmino(e) : undefined);
    } else {
      obj.acknowledgements = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    obj.height = message.height ? Height.toAmino(message.height) : {};
    return obj;
  },
  fromAminoMsg(object: QueryPacketAcknowledgementsResponseAminoMsg): QueryPacketAcknowledgementsResponse {
    return QueryPacketAcknowledgementsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryPacketAcknowledgementsResponse): QueryPacketAcknowledgementsResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryPacketAcknowledgementsResponse",
      value: QueryPacketAcknowledgementsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryPacketAcknowledgementsResponseProtoMsg): QueryPacketAcknowledgementsResponse {
    return QueryPacketAcknowledgementsResponse.decode(message.value);
  },
  toProto(message: QueryPacketAcknowledgementsResponse): Uint8Array {
    return QueryPacketAcknowledgementsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPacketAcknowledgementsResponse): QueryPacketAcknowledgementsResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.QueryPacketAcknowledgementsResponse",
      value: QueryPacketAcknowledgementsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryPacketAcknowledgementsResponse.typeUrl, QueryPacketAcknowledgementsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryPacketAcknowledgementsResponse.aminoType, QueryPacketAcknowledgementsResponse.typeUrl);
function createBaseQueryUnreceivedPacketsRequest(): QueryUnreceivedPacketsRequest {
  return {
    port_id: "",
    channel_id: "",
    packet_commitment_sequences: []
  };
}
export const QueryUnreceivedPacketsRequest = {
  typeUrl: "/ibc.core.channel.v1.QueryUnreceivedPacketsRequest",
  aminoType: "cosmos-sdk/QueryUnreceivedPacketsRequest",
  is(o: any): o is QueryUnreceivedPacketsRequest {
    return o && (o.$typeUrl === QueryUnreceivedPacketsRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && Array.isArray(o.packet_commitment_sequences) && (!o.packet_commitment_sequences.length || typeof o.packet_commitment_sequences[0] === "bigint"));
  },
  isSDK(o: any): o is QueryUnreceivedPacketsRequestSDKType {
    return o && (o.$typeUrl === QueryUnreceivedPacketsRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && Array.isArray(o.packet_commitment_sequences) && (!o.packet_commitment_sequences.length || typeof o.packet_commitment_sequences[0] === "bigint"));
  },
  isAmino(o: any): o is QueryUnreceivedPacketsRequestAmino {
    return o && (o.$typeUrl === QueryUnreceivedPacketsRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && Array.isArray(o.packet_commitment_sequences) && (!o.packet_commitment_sequences.length || typeof o.packet_commitment_sequences[0] === "bigint"));
  },
  encode(message: QueryUnreceivedPacketsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.port_id !== "") {
      writer.uint32(10).string(message.port_id);
    }
    if (message.channel_id !== "") {
      writer.uint32(18).string(message.channel_id);
    }
    writer.uint32(26).fork();
    for (const v of message.packet_commitment_sequences) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryUnreceivedPacketsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUnreceivedPacketsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.port_id = reader.string();
          break;
        case 2:
          message.channel_id = reader.string();
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.packet_commitment_sequences.push(reader.uint64());
            }
          } else {
            message.packet_commitment_sequences.push(reader.uint64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryUnreceivedPacketsRequest {
    return {
      port_id: isSet(object.port_id) ? String(object.port_id) : "",
      channel_id: isSet(object.channel_id) ? String(object.channel_id) : "",
      packet_commitment_sequences: Array.isArray(object?.packet_commitment_sequences) ? object.packet_commitment_sequences.map((e: any) => BigInt(e.toString())) : []
    };
  },
  toJSON(message: QueryUnreceivedPacketsRequest): unknown {
    const obj: any = {};
    message.port_id !== undefined && (obj.port_id = message.port_id);
    message.channel_id !== undefined && (obj.channel_id = message.channel_id);
    if (message.packet_commitment_sequences) {
      obj.packet_commitment_sequences = message.packet_commitment_sequences.map(e => (e || BigInt(0)).toString());
    } else {
      obj.packet_commitment_sequences = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryUnreceivedPacketsRequest>): QueryUnreceivedPacketsRequest {
    const message = createBaseQueryUnreceivedPacketsRequest();
    message.port_id = object.port_id ?? "";
    message.channel_id = object.channel_id ?? "";
    message.packet_commitment_sequences = object.packet_commitment_sequences?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromAmino(object: QueryUnreceivedPacketsRequestAmino): QueryUnreceivedPacketsRequest {
    const message = createBaseQueryUnreceivedPacketsRequest();
    if (object.port_id !== undefined && object.port_id !== null) {
      message.port_id = object.port_id;
    }
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channel_id = object.channel_id;
    }
    message.packet_commitment_sequences = object.packet_commitment_sequences?.map(e => BigInt(e)) || [];
    return message;
  },
  toAmino(message: QueryUnreceivedPacketsRequest): QueryUnreceivedPacketsRequestAmino {
    const obj: any = {};
    obj.port_id = message.port_id;
    obj.channel_id = message.channel_id;
    if (message.packet_commitment_sequences) {
      obj.packet_commitment_sequences = message.packet_commitment_sequences.map(e => e.toString());
    } else {
      obj.packet_commitment_sequences = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryUnreceivedPacketsRequestAminoMsg): QueryUnreceivedPacketsRequest {
    return QueryUnreceivedPacketsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryUnreceivedPacketsRequest): QueryUnreceivedPacketsRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryUnreceivedPacketsRequest",
      value: QueryUnreceivedPacketsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryUnreceivedPacketsRequestProtoMsg): QueryUnreceivedPacketsRequest {
    return QueryUnreceivedPacketsRequest.decode(message.value);
  },
  toProto(message: QueryUnreceivedPacketsRequest): Uint8Array {
    return QueryUnreceivedPacketsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryUnreceivedPacketsRequest): QueryUnreceivedPacketsRequestProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.QueryUnreceivedPacketsRequest",
      value: QueryUnreceivedPacketsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryUnreceivedPacketsRequest.typeUrl, QueryUnreceivedPacketsRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryUnreceivedPacketsRequest.aminoType, QueryUnreceivedPacketsRequest.typeUrl);
function createBaseQueryUnreceivedPacketsResponse(): QueryUnreceivedPacketsResponse {
  return {
    sequences: [],
    height: Height.fromPartial({})
  };
}
export const QueryUnreceivedPacketsResponse = {
  typeUrl: "/ibc.core.channel.v1.QueryUnreceivedPacketsResponse",
  aminoType: "cosmos-sdk/QueryUnreceivedPacketsResponse",
  is(o: any): o is QueryUnreceivedPacketsResponse {
    return o && (o.$typeUrl === QueryUnreceivedPacketsResponse.typeUrl || Array.isArray(o.sequences) && (!o.sequences.length || typeof o.sequences[0] === "bigint") && Height.is(o.height));
  },
  isSDK(o: any): o is QueryUnreceivedPacketsResponseSDKType {
    return o && (o.$typeUrl === QueryUnreceivedPacketsResponse.typeUrl || Array.isArray(o.sequences) && (!o.sequences.length || typeof o.sequences[0] === "bigint") && Height.isSDK(o.height));
  },
  isAmino(o: any): o is QueryUnreceivedPacketsResponseAmino {
    return o && (o.$typeUrl === QueryUnreceivedPacketsResponse.typeUrl || Array.isArray(o.sequences) && (!o.sequences.length || typeof o.sequences[0] === "bigint") && Height.isAmino(o.height));
  },
  encode(message: QueryUnreceivedPacketsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    writer.uint32(10).fork();
    for (const v of message.sequences) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.height !== undefined) {
      Height.encode(message.height, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryUnreceivedPacketsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUnreceivedPacketsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.sequences.push(reader.uint64());
            }
          } else {
            message.sequences.push(reader.uint64());
          }
          break;
        case 2:
          message.height = Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryUnreceivedPacketsResponse {
    return {
      sequences: Array.isArray(object?.sequences) ? object.sequences.map((e: any) => BigInt(e.toString())) : [],
      height: isSet(object.height) ? Height.fromJSON(object.height) : undefined
    };
  },
  toJSON(message: QueryUnreceivedPacketsResponse): unknown {
    const obj: any = {};
    if (message.sequences) {
      obj.sequences = message.sequences.map(e => (e || BigInt(0)).toString());
    } else {
      obj.sequences = [];
    }
    message.height !== undefined && (obj.height = message.height ? Height.toJSON(message.height) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryUnreceivedPacketsResponse>): QueryUnreceivedPacketsResponse {
    const message = createBaseQueryUnreceivedPacketsResponse();
    message.sequences = object.sequences?.map(e => BigInt(e.toString())) || [];
    message.height = object.height !== undefined && object.height !== null ? Height.fromPartial(object.height) : undefined;
    return message;
  },
  fromAmino(object: QueryUnreceivedPacketsResponseAmino): QueryUnreceivedPacketsResponse {
    const message = createBaseQueryUnreceivedPacketsResponse();
    message.sequences = object.sequences?.map(e => BigInt(e)) || [];
    if (object.height !== undefined && object.height !== null) {
      message.height = Height.fromAmino(object.height);
    }
    return message;
  },
  toAmino(message: QueryUnreceivedPacketsResponse): QueryUnreceivedPacketsResponseAmino {
    const obj: any = {};
    if (message.sequences) {
      obj.sequences = message.sequences.map(e => e.toString());
    } else {
      obj.sequences = [];
    }
    obj.height = message.height ? Height.toAmino(message.height) : {};
    return obj;
  },
  fromAminoMsg(object: QueryUnreceivedPacketsResponseAminoMsg): QueryUnreceivedPacketsResponse {
    return QueryUnreceivedPacketsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryUnreceivedPacketsResponse): QueryUnreceivedPacketsResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryUnreceivedPacketsResponse",
      value: QueryUnreceivedPacketsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryUnreceivedPacketsResponseProtoMsg): QueryUnreceivedPacketsResponse {
    return QueryUnreceivedPacketsResponse.decode(message.value);
  },
  toProto(message: QueryUnreceivedPacketsResponse): Uint8Array {
    return QueryUnreceivedPacketsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryUnreceivedPacketsResponse): QueryUnreceivedPacketsResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.QueryUnreceivedPacketsResponse",
      value: QueryUnreceivedPacketsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryUnreceivedPacketsResponse.typeUrl, QueryUnreceivedPacketsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryUnreceivedPacketsResponse.aminoType, QueryUnreceivedPacketsResponse.typeUrl);
function createBaseQueryUnreceivedAcksRequest(): QueryUnreceivedAcksRequest {
  return {
    port_id: "",
    channel_id: "",
    packet_ack_sequences: []
  };
}
export const QueryUnreceivedAcksRequest = {
  typeUrl: "/ibc.core.channel.v1.QueryUnreceivedAcksRequest",
  aminoType: "cosmos-sdk/QueryUnreceivedAcksRequest",
  is(o: any): o is QueryUnreceivedAcksRequest {
    return o && (o.$typeUrl === QueryUnreceivedAcksRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && Array.isArray(o.packet_ack_sequences) && (!o.packet_ack_sequences.length || typeof o.packet_ack_sequences[0] === "bigint"));
  },
  isSDK(o: any): o is QueryUnreceivedAcksRequestSDKType {
    return o && (o.$typeUrl === QueryUnreceivedAcksRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && Array.isArray(o.packet_ack_sequences) && (!o.packet_ack_sequences.length || typeof o.packet_ack_sequences[0] === "bigint"));
  },
  isAmino(o: any): o is QueryUnreceivedAcksRequestAmino {
    return o && (o.$typeUrl === QueryUnreceivedAcksRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && Array.isArray(o.packet_ack_sequences) && (!o.packet_ack_sequences.length || typeof o.packet_ack_sequences[0] === "bigint"));
  },
  encode(message: QueryUnreceivedAcksRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.port_id !== "") {
      writer.uint32(10).string(message.port_id);
    }
    if (message.channel_id !== "") {
      writer.uint32(18).string(message.channel_id);
    }
    writer.uint32(26).fork();
    for (const v of message.packet_ack_sequences) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryUnreceivedAcksRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUnreceivedAcksRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.port_id = reader.string();
          break;
        case 2:
          message.channel_id = reader.string();
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.packet_ack_sequences.push(reader.uint64());
            }
          } else {
            message.packet_ack_sequences.push(reader.uint64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryUnreceivedAcksRequest {
    return {
      port_id: isSet(object.port_id) ? String(object.port_id) : "",
      channel_id: isSet(object.channel_id) ? String(object.channel_id) : "",
      packet_ack_sequences: Array.isArray(object?.packet_ack_sequences) ? object.packet_ack_sequences.map((e: any) => BigInt(e.toString())) : []
    };
  },
  toJSON(message: QueryUnreceivedAcksRequest): unknown {
    const obj: any = {};
    message.port_id !== undefined && (obj.port_id = message.port_id);
    message.channel_id !== undefined && (obj.channel_id = message.channel_id);
    if (message.packet_ack_sequences) {
      obj.packet_ack_sequences = message.packet_ack_sequences.map(e => (e || BigInt(0)).toString());
    } else {
      obj.packet_ack_sequences = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryUnreceivedAcksRequest>): QueryUnreceivedAcksRequest {
    const message = createBaseQueryUnreceivedAcksRequest();
    message.port_id = object.port_id ?? "";
    message.channel_id = object.channel_id ?? "";
    message.packet_ack_sequences = object.packet_ack_sequences?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromAmino(object: QueryUnreceivedAcksRequestAmino): QueryUnreceivedAcksRequest {
    const message = createBaseQueryUnreceivedAcksRequest();
    if (object.port_id !== undefined && object.port_id !== null) {
      message.port_id = object.port_id;
    }
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channel_id = object.channel_id;
    }
    message.packet_ack_sequences = object.packet_ack_sequences?.map(e => BigInt(e)) || [];
    return message;
  },
  toAmino(message: QueryUnreceivedAcksRequest): QueryUnreceivedAcksRequestAmino {
    const obj: any = {};
    obj.port_id = message.port_id;
    obj.channel_id = message.channel_id;
    if (message.packet_ack_sequences) {
      obj.packet_ack_sequences = message.packet_ack_sequences.map(e => e.toString());
    } else {
      obj.packet_ack_sequences = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryUnreceivedAcksRequestAminoMsg): QueryUnreceivedAcksRequest {
    return QueryUnreceivedAcksRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryUnreceivedAcksRequest): QueryUnreceivedAcksRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryUnreceivedAcksRequest",
      value: QueryUnreceivedAcksRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryUnreceivedAcksRequestProtoMsg): QueryUnreceivedAcksRequest {
    return QueryUnreceivedAcksRequest.decode(message.value);
  },
  toProto(message: QueryUnreceivedAcksRequest): Uint8Array {
    return QueryUnreceivedAcksRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryUnreceivedAcksRequest): QueryUnreceivedAcksRequestProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.QueryUnreceivedAcksRequest",
      value: QueryUnreceivedAcksRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryUnreceivedAcksRequest.typeUrl, QueryUnreceivedAcksRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryUnreceivedAcksRequest.aminoType, QueryUnreceivedAcksRequest.typeUrl);
function createBaseQueryUnreceivedAcksResponse(): QueryUnreceivedAcksResponse {
  return {
    sequences: [],
    height: Height.fromPartial({})
  };
}
export const QueryUnreceivedAcksResponse = {
  typeUrl: "/ibc.core.channel.v1.QueryUnreceivedAcksResponse",
  aminoType: "cosmos-sdk/QueryUnreceivedAcksResponse",
  is(o: any): o is QueryUnreceivedAcksResponse {
    return o && (o.$typeUrl === QueryUnreceivedAcksResponse.typeUrl || Array.isArray(o.sequences) && (!o.sequences.length || typeof o.sequences[0] === "bigint") && Height.is(o.height));
  },
  isSDK(o: any): o is QueryUnreceivedAcksResponseSDKType {
    return o && (o.$typeUrl === QueryUnreceivedAcksResponse.typeUrl || Array.isArray(o.sequences) && (!o.sequences.length || typeof o.sequences[0] === "bigint") && Height.isSDK(o.height));
  },
  isAmino(o: any): o is QueryUnreceivedAcksResponseAmino {
    return o && (o.$typeUrl === QueryUnreceivedAcksResponse.typeUrl || Array.isArray(o.sequences) && (!o.sequences.length || typeof o.sequences[0] === "bigint") && Height.isAmino(o.height));
  },
  encode(message: QueryUnreceivedAcksResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    writer.uint32(10).fork();
    for (const v of message.sequences) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.height !== undefined) {
      Height.encode(message.height, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryUnreceivedAcksResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUnreceivedAcksResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.sequences.push(reader.uint64());
            }
          } else {
            message.sequences.push(reader.uint64());
          }
          break;
        case 2:
          message.height = Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryUnreceivedAcksResponse {
    return {
      sequences: Array.isArray(object?.sequences) ? object.sequences.map((e: any) => BigInt(e.toString())) : [],
      height: isSet(object.height) ? Height.fromJSON(object.height) : undefined
    };
  },
  toJSON(message: QueryUnreceivedAcksResponse): unknown {
    const obj: any = {};
    if (message.sequences) {
      obj.sequences = message.sequences.map(e => (e || BigInt(0)).toString());
    } else {
      obj.sequences = [];
    }
    message.height !== undefined && (obj.height = message.height ? Height.toJSON(message.height) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryUnreceivedAcksResponse>): QueryUnreceivedAcksResponse {
    const message = createBaseQueryUnreceivedAcksResponse();
    message.sequences = object.sequences?.map(e => BigInt(e.toString())) || [];
    message.height = object.height !== undefined && object.height !== null ? Height.fromPartial(object.height) : undefined;
    return message;
  },
  fromAmino(object: QueryUnreceivedAcksResponseAmino): QueryUnreceivedAcksResponse {
    const message = createBaseQueryUnreceivedAcksResponse();
    message.sequences = object.sequences?.map(e => BigInt(e)) || [];
    if (object.height !== undefined && object.height !== null) {
      message.height = Height.fromAmino(object.height);
    }
    return message;
  },
  toAmino(message: QueryUnreceivedAcksResponse): QueryUnreceivedAcksResponseAmino {
    const obj: any = {};
    if (message.sequences) {
      obj.sequences = message.sequences.map(e => e.toString());
    } else {
      obj.sequences = [];
    }
    obj.height = message.height ? Height.toAmino(message.height) : {};
    return obj;
  },
  fromAminoMsg(object: QueryUnreceivedAcksResponseAminoMsg): QueryUnreceivedAcksResponse {
    return QueryUnreceivedAcksResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryUnreceivedAcksResponse): QueryUnreceivedAcksResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryUnreceivedAcksResponse",
      value: QueryUnreceivedAcksResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryUnreceivedAcksResponseProtoMsg): QueryUnreceivedAcksResponse {
    return QueryUnreceivedAcksResponse.decode(message.value);
  },
  toProto(message: QueryUnreceivedAcksResponse): Uint8Array {
    return QueryUnreceivedAcksResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryUnreceivedAcksResponse): QueryUnreceivedAcksResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.QueryUnreceivedAcksResponse",
      value: QueryUnreceivedAcksResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryUnreceivedAcksResponse.typeUrl, QueryUnreceivedAcksResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryUnreceivedAcksResponse.aminoType, QueryUnreceivedAcksResponse.typeUrl);
function createBaseQueryNextSequenceReceiveRequest(): QueryNextSequenceReceiveRequest {
  return {
    port_id: "",
    channel_id: ""
  };
}
export const QueryNextSequenceReceiveRequest = {
  typeUrl: "/ibc.core.channel.v1.QueryNextSequenceReceiveRequest",
  aminoType: "cosmos-sdk/QueryNextSequenceReceiveRequest",
  is(o: any): o is QueryNextSequenceReceiveRequest {
    return o && (o.$typeUrl === QueryNextSequenceReceiveRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string");
  },
  isSDK(o: any): o is QueryNextSequenceReceiveRequestSDKType {
    return o && (o.$typeUrl === QueryNextSequenceReceiveRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string");
  },
  isAmino(o: any): o is QueryNextSequenceReceiveRequestAmino {
    return o && (o.$typeUrl === QueryNextSequenceReceiveRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string");
  },
  encode(message: QueryNextSequenceReceiveRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.port_id !== "") {
      writer.uint32(10).string(message.port_id);
    }
    if (message.channel_id !== "") {
      writer.uint32(18).string(message.channel_id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryNextSequenceReceiveRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNextSequenceReceiveRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.port_id = reader.string();
          break;
        case 2:
          message.channel_id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryNextSequenceReceiveRequest {
    return {
      port_id: isSet(object.port_id) ? String(object.port_id) : "",
      channel_id: isSet(object.channel_id) ? String(object.channel_id) : ""
    };
  },
  toJSON(message: QueryNextSequenceReceiveRequest): unknown {
    const obj: any = {};
    message.port_id !== undefined && (obj.port_id = message.port_id);
    message.channel_id !== undefined && (obj.channel_id = message.channel_id);
    return obj;
  },
  fromPartial(object: Partial<QueryNextSequenceReceiveRequest>): QueryNextSequenceReceiveRequest {
    const message = createBaseQueryNextSequenceReceiveRequest();
    message.port_id = object.port_id ?? "";
    message.channel_id = object.channel_id ?? "";
    return message;
  },
  fromAmino(object: QueryNextSequenceReceiveRequestAmino): QueryNextSequenceReceiveRequest {
    const message = createBaseQueryNextSequenceReceiveRequest();
    if (object.port_id !== undefined && object.port_id !== null) {
      message.port_id = object.port_id;
    }
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channel_id = object.channel_id;
    }
    return message;
  },
  toAmino(message: QueryNextSequenceReceiveRequest): QueryNextSequenceReceiveRequestAmino {
    const obj: any = {};
    obj.port_id = message.port_id;
    obj.channel_id = message.channel_id;
    return obj;
  },
  fromAminoMsg(object: QueryNextSequenceReceiveRequestAminoMsg): QueryNextSequenceReceiveRequest {
    return QueryNextSequenceReceiveRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryNextSequenceReceiveRequest): QueryNextSequenceReceiveRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryNextSequenceReceiveRequest",
      value: QueryNextSequenceReceiveRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryNextSequenceReceiveRequestProtoMsg): QueryNextSequenceReceiveRequest {
    return QueryNextSequenceReceiveRequest.decode(message.value);
  },
  toProto(message: QueryNextSequenceReceiveRequest): Uint8Array {
    return QueryNextSequenceReceiveRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryNextSequenceReceiveRequest): QueryNextSequenceReceiveRequestProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.QueryNextSequenceReceiveRequest",
      value: QueryNextSequenceReceiveRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryNextSequenceReceiveRequest.typeUrl, QueryNextSequenceReceiveRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryNextSequenceReceiveRequest.aminoType, QueryNextSequenceReceiveRequest.typeUrl);
function createBaseQueryNextSequenceReceiveResponse(): QueryNextSequenceReceiveResponse {
  return {
    next_sequence_receive: BigInt(0),
    proof: new Uint8Array(),
    proof_height: Height.fromPartial({})
  };
}
export const QueryNextSequenceReceiveResponse = {
  typeUrl: "/ibc.core.channel.v1.QueryNextSequenceReceiveResponse",
  aminoType: "cosmos-sdk/QueryNextSequenceReceiveResponse",
  is(o: any): o is QueryNextSequenceReceiveResponse {
    return o && (o.$typeUrl === QueryNextSequenceReceiveResponse.typeUrl || typeof o.next_sequence_receive === "bigint" && (o.proof instanceof Uint8Array || typeof o.proof === "string") && Height.is(o.proof_height));
  },
  isSDK(o: any): o is QueryNextSequenceReceiveResponseSDKType {
    return o && (o.$typeUrl === QueryNextSequenceReceiveResponse.typeUrl || typeof o.next_sequence_receive === "bigint" && (o.proof instanceof Uint8Array || typeof o.proof === "string") && Height.isSDK(o.proof_height));
  },
  isAmino(o: any): o is QueryNextSequenceReceiveResponseAmino {
    return o && (o.$typeUrl === QueryNextSequenceReceiveResponse.typeUrl || typeof o.next_sequence_receive === "bigint" && (o.proof instanceof Uint8Array || typeof o.proof === "string") && Height.isAmino(o.proof_height));
  },
  encode(message: QueryNextSequenceReceiveResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.next_sequence_receive !== BigInt(0)) {
      writer.uint32(8).uint64(message.next_sequence_receive);
    }
    if (message.proof.length !== 0) {
      writer.uint32(18).bytes(message.proof);
    }
    if (message.proof_height !== undefined) {
      Height.encode(message.proof_height, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryNextSequenceReceiveResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNextSequenceReceiveResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.next_sequence_receive = reader.uint64();
          break;
        case 2:
          message.proof = reader.bytes();
          break;
        case 3:
          message.proof_height = Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryNextSequenceReceiveResponse {
    return {
      next_sequence_receive: isSet(object.next_sequence_receive) ? BigInt(object.next_sequence_receive.toString()) : BigInt(0),
      proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(),
      proof_height: isSet(object.proof_height) ? Height.fromJSON(object.proof_height) : undefined
    };
  },
  toJSON(message: QueryNextSequenceReceiveResponse): unknown {
    const obj: any = {};
    message.next_sequence_receive !== undefined && (obj.next_sequence_receive = (message.next_sequence_receive || BigInt(0)).toString());
    message.proof !== undefined && (obj.proof = base64FromBytes(message.proof !== undefined ? message.proof : new Uint8Array()));
    message.proof_height !== undefined && (obj.proof_height = message.proof_height ? Height.toJSON(message.proof_height) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryNextSequenceReceiveResponse>): QueryNextSequenceReceiveResponse {
    const message = createBaseQueryNextSequenceReceiveResponse();
    message.next_sequence_receive = object.next_sequence_receive !== undefined && object.next_sequence_receive !== null ? BigInt(object.next_sequence_receive.toString()) : BigInt(0);
    message.proof = object.proof ?? new Uint8Array();
    message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? Height.fromPartial(object.proof_height) : undefined;
    return message;
  },
  fromAmino(object: QueryNextSequenceReceiveResponseAmino): QueryNextSequenceReceiveResponse {
    const message = createBaseQueryNextSequenceReceiveResponse();
    if (object.next_sequence_receive !== undefined && object.next_sequence_receive !== null) {
      message.next_sequence_receive = BigInt(object.next_sequence_receive);
    }
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = bytesFromBase64(object.proof);
    }
    if (object.proof_height !== undefined && object.proof_height !== null) {
      message.proof_height = Height.fromAmino(object.proof_height);
    }
    return message;
  },
  toAmino(message: QueryNextSequenceReceiveResponse): QueryNextSequenceReceiveResponseAmino {
    const obj: any = {};
    obj.next_sequence_receive = message.next_sequence_receive ? message.next_sequence_receive.toString() : undefined;
    obj.proof = message.proof ? base64FromBytes(message.proof) : undefined;
    obj.proof_height = message.proof_height ? Height.toAmino(message.proof_height) : {};
    return obj;
  },
  fromAminoMsg(object: QueryNextSequenceReceiveResponseAminoMsg): QueryNextSequenceReceiveResponse {
    return QueryNextSequenceReceiveResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryNextSequenceReceiveResponse): QueryNextSequenceReceiveResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryNextSequenceReceiveResponse",
      value: QueryNextSequenceReceiveResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryNextSequenceReceiveResponseProtoMsg): QueryNextSequenceReceiveResponse {
    return QueryNextSequenceReceiveResponse.decode(message.value);
  },
  toProto(message: QueryNextSequenceReceiveResponse): Uint8Array {
    return QueryNextSequenceReceiveResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryNextSequenceReceiveResponse): QueryNextSequenceReceiveResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.QueryNextSequenceReceiveResponse",
      value: QueryNextSequenceReceiveResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryNextSequenceReceiveResponse.typeUrl, QueryNextSequenceReceiveResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryNextSequenceReceiveResponse.aminoType, QueryNextSequenceReceiveResponse.typeUrl);
function createBaseQueryNextSequenceSendRequest(): QueryNextSequenceSendRequest {
  return {
    port_id: "",
    channel_id: ""
  };
}
export const QueryNextSequenceSendRequest = {
  typeUrl: "/ibc.core.channel.v1.QueryNextSequenceSendRequest",
  aminoType: "cosmos-sdk/QueryNextSequenceSendRequest",
  is(o: any): o is QueryNextSequenceSendRequest {
    return o && (o.$typeUrl === QueryNextSequenceSendRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string");
  },
  isSDK(o: any): o is QueryNextSequenceSendRequestSDKType {
    return o && (o.$typeUrl === QueryNextSequenceSendRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string");
  },
  isAmino(o: any): o is QueryNextSequenceSendRequestAmino {
    return o && (o.$typeUrl === QueryNextSequenceSendRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string");
  },
  encode(message: QueryNextSequenceSendRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.port_id !== "") {
      writer.uint32(10).string(message.port_id);
    }
    if (message.channel_id !== "") {
      writer.uint32(18).string(message.channel_id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryNextSequenceSendRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNextSequenceSendRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.port_id = reader.string();
          break;
        case 2:
          message.channel_id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryNextSequenceSendRequest {
    return {
      port_id: isSet(object.port_id) ? String(object.port_id) : "",
      channel_id: isSet(object.channel_id) ? String(object.channel_id) : ""
    };
  },
  toJSON(message: QueryNextSequenceSendRequest): unknown {
    const obj: any = {};
    message.port_id !== undefined && (obj.port_id = message.port_id);
    message.channel_id !== undefined && (obj.channel_id = message.channel_id);
    return obj;
  },
  fromPartial(object: Partial<QueryNextSequenceSendRequest>): QueryNextSequenceSendRequest {
    const message = createBaseQueryNextSequenceSendRequest();
    message.port_id = object.port_id ?? "";
    message.channel_id = object.channel_id ?? "";
    return message;
  },
  fromAmino(object: QueryNextSequenceSendRequestAmino): QueryNextSequenceSendRequest {
    const message = createBaseQueryNextSequenceSendRequest();
    if (object.port_id !== undefined && object.port_id !== null) {
      message.port_id = object.port_id;
    }
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channel_id = object.channel_id;
    }
    return message;
  },
  toAmino(message: QueryNextSequenceSendRequest): QueryNextSequenceSendRequestAmino {
    const obj: any = {};
    obj.port_id = message.port_id;
    obj.channel_id = message.channel_id;
    return obj;
  },
  fromAminoMsg(object: QueryNextSequenceSendRequestAminoMsg): QueryNextSequenceSendRequest {
    return QueryNextSequenceSendRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryNextSequenceSendRequest): QueryNextSequenceSendRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryNextSequenceSendRequest",
      value: QueryNextSequenceSendRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryNextSequenceSendRequestProtoMsg): QueryNextSequenceSendRequest {
    return QueryNextSequenceSendRequest.decode(message.value);
  },
  toProto(message: QueryNextSequenceSendRequest): Uint8Array {
    return QueryNextSequenceSendRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryNextSequenceSendRequest): QueryNextSequenceSendRequestProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.QueryNextSequenceSendRequest",
      value: QueryNextSequenceSendRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryNextSequenceSendRequest.typeUrl, QueryNextSequenceSendRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryNextSequenceSendRequest.aminoType, QueryNextSequenceSendRequest.typeUrl);
function createBaseQueryNextSequenceSendResponse(): QueryNextSequenceSendResponse {
  return {
    next_sequence_send: BigInt(0),
    proof: new Uint8Array(),
    proof_height: Height.fromPartial({})
  };
}
export const QueryNextSequenceSendResponse = {
  typeUrl: "/ibc.core.channel.v1.QueryNextSequenceSendResponse",
  aminoType: "cosmos-sdk/QueryNextSequenceSendResponse",
  is(o: any): o is QueryNextSequenceSendResponse {
    return o && (o.$typeUrl === QueryNextSequenceSendResponse.typeUrl || typeof o.next_sequence_send === "bigint" && (o.proof instanceof Uint8Array || typeof o.proof === "string") && Height.is(o.proof_height));
  },
  isSDK(o: any): o is QueryNextSequenceSendResponseSDKType {
    return o && (o.$typeUrl === QueryNextSequenceSendResponse.typeUrl || typeof o.next_sequence_send === "bigint" && (o.proof instanceof Uint8Array || typeof o.proof === "string") && Height.isSDK(o.proof_height));
  },
  isAmino(o: any): o is QueryNextSequenceSendResponseAmino {
    return o && (o.$typeUrl === QueryNextSequenceSendResponse.typeUrl || typeof o.next_sequence_send === "bigint" && (o.proof instanceof Uint8Array || typeof o.proof === "string") && Height.isAmino(o.proof_height));
  },
  encode(message: QueryNextSequenceSendResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.next_sequence_send !== BigInt(0)) {
      writer.uint32(8).uint64(message.next_sequence_send);
    }
    if (message.proof.length !== 0) {
      writer.uint32(18).bytes(message.proof);
    }
    if (message.proof_height !== undefined) {
      Height.encode(message.proof_height, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryNextSequenceSendResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNextSequenceSendResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.next_sequence_send = reader.uint64();
          break;
        case 2:
          message.proof = reader.bytes();
          break;
        case 3:
          message.proof_height = Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryNextSequenceSendResponse {
    return {
      next_sequence_send: isSet(object.next_sequence_send) ? BigInt(object.next_sequence_send.toString()) : BigInt(0),
      proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(),
      proof_height: isSet(object.proof_height) ? Height.fromJSON(object.proof_height) : undefined
    };
  },
  toJSON(message: QueryNextSequenceSendResponse): unknown {
    const obj: any = {};
    message.next_sequence_send !== undefined && (obj.next_sequence_send = (message.next_sequence_send || BigInt(0)).toString());
    message.proof !== undefined && (obj.proof = base64FromBytes(message.proof !== undefined ? message.proof : new Uint8Array()));
    message.proof_height !== undefined && (obj.proof_height = message.proof_height ? Height.toJSON(message.proof_height) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryNextSequenceSendResponse>): QueryNextSequenceSendResponse {
    const message = createBaseQueryNextSequenceSendResponse();
    message.next_sequence_send = object.next_sequence_send !== undefined && object.next_sequence_send !== null ? BigInt(object.next_sequence_send.toString()) : BigInt(0);
    message.proof = object.proof ?? new Uint8Array();
    message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? Height.fromPartial(object.proof_height) : undefined;
    return message;
  },
  fromAmino(object: QueryNextSequenceSendResponseAmino): QueryNextSequenceSendResponse {
    const message = createBaseQueryNextSequenceSendResponse();
    if (object.next_sequence_send !== undefined && object.next_sequence_send !== null) {
      message.next_sequence_send = BigInt(object.next_sequence_send);
    }
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = bytesFromBase64(object.proof);
    }
    if (object.proof_height !== undefined && object.proof_height !== null) {
      message.proof_height = Height.fromAmino(object.proof_height);
    }
    return message;
  },
  toAmino(message: QueryNextSequenceSendResponse): QueryNextSequenceSendResponseAmino {
    const obj: any = {};
    obj.next_sequence_send = message.next_sequence_send ? message.next_sequence_send.toString() : undefined;
    obj.proof = message.proof ? base64FromBytes(message.proof) : undefined;
    obj.proof_height = message.proof_height ? Height.toAmino(message.proof_height) : {};
    return obj;
  },
  fromAminoMsg(object: QueryNextSequenceSendResponseAminoMsg): QueryNextSequenceSendResponse {
    return QueryNextSequenceSendResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryNextSequenceSendResponse): QueryNextSequenceSendResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryNextSequenceSendResponse",
      value: QueryNextSequenceSendResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryNextSequenceSendResponseProtoMsg): QueryNextSequenceSendResponse {
    return QueryNextSequenceSendResponse.decode(message.value);
  },
  toProto(message: QueryNextSequenceSendResponse): Uint8Array {
    return QueryNextSequenceSendResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryNextSequenceSendResponse): QueryNextSequenceSendResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.QueryNextSequenceSendResponse",
      value: QueryNextSequenceSendResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryNextSequenceSendResponse.typeUrl, QueryNextSequenceSendResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryNextSequenceSendResponse.aminoType, QueryNextSequenceSendResponse.typeUrl);
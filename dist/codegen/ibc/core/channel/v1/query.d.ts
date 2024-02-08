import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../../cosmos/base/query/v1beta1/pagination";
import { Channel, ChannelAmino, ChannelSDKType, IdentifiedChannel, IdentifiedChannelAmino, IdentifiedChannelSDKType, PacketState, PacketStateAmino, PacketStateSDKType } from "./channel";
import { Height, HeightAmino, HeightSDKType, IdentifiedClientState, IdentifiedClientStateAmino, IdentifiedClientStateSDKType } from "../../client/v1/client";
import { Any, AnyAmino, AnySDKType } from "../../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../../binary";
export declare const protobufPackage = "ibc.core.channel.v1";
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
export declare const QueryChannelRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryChannelRequest;
    isSDK(o: any): o is QueryChannelRequestSDKType;
    isAmino(o: any): o is QueryChannelRequestAmino;
    encode(message: QueryChannelRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryChannelRequest;
    fromJSON(object: any): QueryChannelRequest;
    toJSON(message: QueryChannelRequest): unknown;
    fromPartial(object: Partial<QueryChannelRequest>): QueryChannelRequest;
    fromAmino(object: QueryChannelRequestAmino): QueryChannelRequest;
    toAmino(message: QueryChannelRequest): QueryChannelRequestAmino;
    fromAminoMsg(object: QueryChannelRequestAminoMsg): QueryChannelRequest;
    toAminoMsg(message: QueryChannelRequest): QueryChannelRequestAminoMsg;
    fromProtoMsg(message: QueryChannelRequestProtoMsg): QueryChannelRequest;
    toProto(message: QueryChannelRequest): Uint8Array;
    toProtoMsg(message: QueryChannelRequest): QueryChannelRequestProtoMsg;
};
export declare const QueryChannelResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryChannelResponse;
    isSDK(o: any): o is QueryChannelResponseSDKType;
    isAmino(o: any): o is QueryChannelResponseAmino;
    encode(message: QueryChannelResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryChannelResponse;
    fromJSON(object: any): QueryChannelResponse;
    toJSON(message: QueryChannelResponse): unknown;
    fromPartial(object: Partial<QueryChannelResponse>): QueryChannelResponse;
    fromAmino(object: QueryChannelResponseAmino): QueryChannelResponse;
    toAmino(message: QueryChannelResponse): QueryChannelResponseAmino;
    fromAminoMsg(object: QueryChannelResponseAminoMsg): QueryChannelResponse;
    toAminoMsg(message: QueryChannelResponse): QueryChannelResponseAminoMsg;
    fromProtoMsg(message: QueryChannelResponseProtoMsg): QueryChannelResponse;
    toProto(message: QueryChannelResponse): Uint8Array;
    toProtoMsg(message: QueryChannelResponse): QueryChannelResponseProtoMsg;
};
export declare const QueryChannelsRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryChannelsRequest;
    isSDK(o: any): o is QueryChannelsRequestSDKType;
    isAmino(o: any): o is QueryChannelsRequestAmino;
    encode(message: QueryChannelsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryChannelsRequest;
    fromJSON(object: any): QueryChannelsRequest;
    toJSON(message: QueryChannelsRequest): unknown;
    fromPartial(object: Partial<QueryChannelsRequest>): QueryChannelsRequest;
    fromAmino(object: QueryChannelsRequestAmino): QueryChannelsRequest;
    toAmino(message: QueryChannelsRequest): QueryChannelsRequestAmino;
    fromAminoMsg(object: QueryChannelsRequestAminoMsg): QueryChannelsRequest;
    toAminoMsg(message: QueryChannelsRequest): QueryChannelsRequestAminoMsg;
    fromProtoMsg(message: QueryChannelsRequestProtoMsg): QueryChannelsRequest;
    toProto(message: QueryChannelsRequest): Uint8Array;
    toProtoMsg(message: QueryChannelsRequest): QueryChannelsRequestProtoMsg;
};
export declare const QueryChannelsResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryChannelsResponse;
    isSDK(o: any): o is QueryChannelsResponseSDKType;
    isAmino(o: any): o is QueryChannelsResponseAmino;
    encode(message: QueryChannelsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryChannelsResponse;
    fromJSON(object: any): QueryChannelsResponse;
    toJSON(message: QueryChannelsResponse): unknown;
    fromPartial(object: Partial<QueryChannelsResponse>): QueryChannelsResponse;
    fromAmino(object: QueryChannelsResponseAmino): QueryChannelsResponse;
    toAmino(message: QueryChannelsResponse): QueryChannelsResponseAmino;
    fromAminoMsg(object: QueryChannelsResponseAminoMsg): QueryChannelsResponse;
    toAminoMsg(message: QueryChannelsResponse): QueryChannelsResponseAminoMsg;
    fromProtoMsg(message: QueryChannelsResponseProtoMsg): QueryChannelsResponse;
    toProto(message: QueryChannelsResponse): Uint8Array;
    toProtoMsg(message: QueryChannelsResponse): QueryChannelsResponseProtoMsg;
};
export declare const QueryConnectionChannelsRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryConnectionChannelsRequest;
    isSDK(o: any): o is QueryConnectionChannelsRequestSDKType;
    isAmino(o: any): o is QueryConnectionChannelsRequestAmino;
    encode(message: QueryConnectionChannelsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryConnectionChannelsRequest;
    fromJSON(object: any): QueryConnectionChannelsRequest;
    toJSON(message: QueryConnectionChannelsRequest): unknown;
    fromPartial(object: Partial<QueryConnectionChannelsRequest>): QueryConnectionChannelsRequest;
    fromAmino(object: QueryConnectionChannelsRequestAmino): QueryConnectionChannelsRequest;
    toAmino(message: QueryConnectionChannelsRequest): QueryConnectionChannelsRequestAmino;
    fromAminoMsg(object: QueryConnectionChannelsRequestAminoMsg): QueryConnectionChannelsRequest;
    toAminoMsg(message: QueryConnectionChannelsRequest): QueryConnectionChannelsRequestAminoMsg;
    fromProtoMsg(message: QueryConnectionChannelsRequestProtoMsg): QueryConnectionChannelsRequest;
    toProto(message: QueryConnectionChannelsRequest): Uint8Array;
    toProtoMsg(message: QueryConnectionChannelsRequest): QueryConnectionChannelsRequestProtoMsg;
};
export declare const QueryConnectionChannelsResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryConnectionChannelsResponse;
    isSDK(o: any): o is QueryConnectionChannelsResponseSDKType;
    isAmino(o: any): o is QueryConnectionChannelsResponseAmino;
    encode(message: QueryConnectionChannelsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryConnectionChannelsResponse;
    fromJSON(object: any): QueryConnectionChannelsResponse;
    toJSON(message: QueryConnectionChannelsResponse): unknown;
    fromPartial(object: Partial<QueryConnectionChannelsResponse>): QueryConnectionChannelsResponse;
    fromAmino(object: QueryConnectionChannelsResponseAmino): QueryConnectionChannelsResponse;
    toAmino(message: QueryConnectionChannelsResponse): QueryConnectionChannelsResponseAmino;
    fromAminoMsg(object: QueryConnectionChannelsResponseAminoMsg): QueryConnectionChannelsResponse;
    toAminoMsg(message: QueryConnectionChannelsResponse): QueryConnectionChannelsResponseAminoMsg;
    fromProtoMsg(message: QueryConnectionChannelsResponseProtoMsg): QueryConnectionChannelsResponse;
    toProto(message: QueryConnectionChannelsResponse): Uint8Array;
    toProtoMsg(message: QueryConnectionChannelsResponse): QueryConnectionChannelsResponseProtoMsg;
};
export declare const QueryChannelClientStateRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryChannelClientStateRequest;
    isSDK(o: any): o is QueryChannelClientStateRequestSDKType;
    isAmino(o: any): o is QueryChannelClientStateRequestAmino;
    encode(message: QueryChannelClientStateRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryChannelClientStateRequest;
    fromJSON(object: any): QueryChannelClientStateRequest;
    toJSON(message: QueryChannelClientStateRequest): unknown;
    fromPartial(object: Partial<QueryChannelClientStateRequest>): QueryChannelClientStateRequest;
    fromAmino(object: QueryChannelClientStateRequestAmino): QueryChannelClientStateRequest;
    toAmino(message: QueryChannelClientStateRequest): QueryChannelClientStateRequestAmino;
    fromAminoMsg(object: QueryChannelClientStateRequestAminoMsg): QueryChannelClientStateRequest;
    toAminoMsg(message: QueryChannelClientStateRequest): QueryChannelClientStateRequestAminoMsg;
    fromProtoMsg(message: QueryChannelClientStateRequestProtoMsg): QueryChannelClientStateRequest;
    toProto(message: QueryChannelClientStateRequest): Uint8Array;
    toProtoMsg(message: QueryChannelClientStateRequest): QueryChannelClientStateRequestProtoMsg;
};
export declare const QueryChannelClientStateResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryChannelClientStateResponse;
    isSDK(o: any): o is QueryChannelClientStateResponseSDKType;
    isAmino(o: any): o is QueryChannelClientStateResponseAmino;
    encode(message: QueryChannelClientStateResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryChannelClientStateResponse;
    fromJSON(object: any): QueryChannelClientStateResponse;
    toJSON(message: QueryChannelClientStateResponse): unknown;
    fromPartial(object: Partial<QueryChannelClientStateResponse>): QueryChannelClientStateResponse;
    fromAmino(object: QueryChannelClientStateResponseAmino): QueryChannelClientStateResponse;
    toAmino(message: QueryChannelClientStateResponse): QueryChannelClientStateResponseAmino;
    fromAminoMsg(object: QueryChannelClientStateResponseAminoMsg): QueryChannelClientStateResponse;
    toAminoMsg(message: QueryChannelClientStateResponse): QueryChannelClientStateResponseAminoMsg;
    fromProtoMsg(message: QueryChannelClientStateResponseProtoMsg): QueryChannelClientStateResponse;
    toProto(message: QueryChannelClientStateResponse): Uint8Array;
    toProtoMsg(message: QueryChannelClientStateResponse): QueryChannelClientStateResponseProtoMsg;
};
export declare const QueryChannelConsensusStateRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryChannelConsensusStateRequest;
    isSDK(o: any): o is QueryChannelConsensusStateRequestSDKType;
    isAmino(o: any): o is QueryChannelConsensusStateRequestAmino;
    encode(message: QueryChannelConsensusStateRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryChannelConsensusStateRequest;
    fromJSON(object: any): QueryChannelConsensusStateRequest;
    toJSON(message: QueryChannelConsensusStateRequest): unknown;
    fromPartial(object: Partial<QueryChannelConsensusStateRequest>): QueryChannelConsensusStateRequest;
    fromAmino(object: QueryChannelConsensusStateRequestAmino): QueryChannelConsensusStateRequest;
    toAmino(message: QueryChannelConsensusStateRequest): QueryChannelConsensusStateRequestAmino;
    fromAminoMsg(object: QueryChannelConsensusStateRequestAminoMsg): QueryChannelConsensusStateRequest;
    toAminoMsg(message: QueryChannelConsensusStateRequest): QueryChannelConsensusStateRequestAminoMsg;
    fromProtoMsg(message: QueryChannelConsensusStateRequestProtoMsg): QueryChannelConsensusStateRequest;
    toProto(message: QueryChannelConsensusStateRequest): Uint8Array;
    toProtoMsg(message: QueryChannelConsensusStateRequest): QueryChannelConsensusStateRequestProtoMsg;
};
export declare const QueryChannelConsensusStateResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryChannelConsensusStateResponse;
    isSDK(o: any): o is QueryChannelConsensusStateResponseSDKType;
    isAmino(o: any): o is QueryChannelConsensusStateResponseAmino;
    encode(message: QueryChannelConsensusStateResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryChannelConsensusStateResponse;
    fromJSON(object: any): QueryChannelConsensusStateResponse;
    toJSON(message: QueryChannelConsensusStateResponse): unknown;
    fromPartial(object: Partial<QueryChannelConsensusStateResponse>): QueryChannelConsensusStateResponse;
    fromAmino(object: QueryChannelConsensusStateResponseAmino): QueryChannelConsensusStateResponse;
    toAmino(message: QueryChannelConsensusStateResponse): QueryChannelConsensusStateResponseAmino;
    fromAminoMsg(object: QueryChannelConsensusStateResponseAminoMsg): QueryChannelConsensusStateResponse;
    toAminoMsg(message: QueryChannelConsensusStateResponse): QueryChannelConsensusStateResponseAminoMsg;
    fromProtoMsg(message: QueryChannelConsensusStateResponseProtoMsg): QueryChannelConsensusStateResponse;
    toProto(message: QueryChannelConsensusStateResponse): Uint8Array;
    toProtoMsg(message: QueryChannelConsensusStateResponse): QueryChannelConsensusStateResponseProtoMsg;
};
export declare const QueryPacketCommitmentRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryPacketCommitmentRequest;
    isSDK(o: any): o is QueryPacketCommitmentRequestSDKType;
    isAmino(o: any): o is QueryPacketCommitmentRequestAmino;
    encode(message: QueryPacketCommitmentRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryPacketCommitmentRequest;
    fromJSON(object: any): QueryPacketCommitmentRequest;
    toJSON(message: QueryPacketCommitmentRequest): unknown;
    fromPartial(object: Partial<QueryPacketCommitmentRequest>): QueryPacketCommitmentRequest;
    fromAmino(object: QueryPacketCommitmentRequestAmino): QueryPacketCommitmentRequest;
    toAmino(message: QueryPacketCommitmentRequest): QueryPacketCommitmentRequestAmino;
    fromAminoMsg(object: QueryPacketCommitmentRequestAminoMsg): QueryPacketCommitmentRequest;
    toAminoMsg(message: QueryPacketCommitmentRequest): QueryPacketCommitmentRequestAminoMsg;
    fromProtoMsg(message: QueryPacketCommitmentRequestProtoMsg): QueryPacketCommitmentRequest;
    toProto(message: QueryPacketCommitmentRequest): Uint8Array;
    toProtoMsg(message: QueryPacketCommitmentRequest): QueryPacketCommitmentRequestProtoMsg;
};
export declare const QueryPacketCommitmentResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryPacketCommitmentResponse;
    isSDK(o: any): o is QueryPacketCommitmentResponseSDKType;
    isAmino(o: any): o is QueryPacketCommitmentResponseAmino;
    encode(message: QueryPacketCommitmentResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryPacketCommitmentResponse;
    fromJSON(object: any): QueryPacketCommitmentResponse;
    toJSON(message: QueryPacketCommitmentResponse): unknown;
    fromPartial(object: Partial<QueryPacketCommitmentResponse>): QueryPacketCommitmentResponse;
    fromAmino(object: QueryPacketCommitmentResponseAmino): QueryPacketCommitmentResponse;
    toAmino(message: QueryPacketCommitmentResponse): QueryPacketCommitmentResponseAmino;
    fromAminoMsg(object: QueryPacketCommitmentResponseAminoMsg): QueryPacketCommitmentResponse;
    toAminoMsg(message: QueryPacketCommitmentResponse): QueryPacketCommitmentResponseAminoMsg;
    fromProtoMsg(message: QueryPacketCommitmentResponseProtoMsg): QueryPacketCommitmentResponse;
    toProto(message: QueryPacketCommitmentResponse): Uint8Array;
    toProtoMsg(message: QueryPacketCommitmentResponse): QueryPacketCommitmentResponseProtoMsg;
};
export declare const QueryPacketCommitmentsRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryPacketCommitmentsRequest;
    isSDK(o: any): o is QueryPacketCommitmentsRequestSDKType;
    isAmino(o: any): o is QueryPacketCommitmentsRequestAmino;
    encode(message: QueryPacketCommitmentsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryPacketCommitmentsRequest;
    fromJSON(object: any): QueryPacketCommitmentsRequest;
    toJSON(message: QueryPacketCommitmentsRequest): unknown;
    fromPartial(object: Partial<QueryPacketCommitmentsRequest>): QueryPacketCommitmentsRequest;
    fromAmino(object: QueryPacketCommitmentsRequestAmino): QueryPacketCommitmentsRequest;
    toAmino(message: QueryPacketCommitmentsRequest): QueryPacketCommitmentsRequestAmino;
    fromAminoMsg(object: QueryPacketCommitmentsRequestAminoMsg): QueryPacketCommitmentsRequest;
    toAminoMsg(message: QueryPacketCommitmentsRequest): QueryPacketCommitmentsRequestAminoMsg;
    fromProtoMsg(message: QueryPacketCommitmentsRequestProtoMsg): QueryPacketCommitmentsRequest;
    toProto(message: QueryPacketCommitmentsRequest): Uint8Array;
    toProtoMsg(message: QueryPacketCommitmentsRequest): QueryPacketCommitmentsRequestProtoMsg;
};
export declare const QueryPacketCommitmentsResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryPacketCommitmentsResponse;
    isSDK(o: any): o is QueryPacketCommitmentsResponseSDKType;
    isAmino(o: any): o is QueryPacketCommitmentsResponseAmino;
    encode(message: QueryPacketCommitmentsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryPacketCommitmentsResponse;
    fromJSON(object: any): QueryPacketCommitmentsResponse;
    toJSON(message: QueryPacketCommitmentsResponse): unknown;
    fromPartial(object: Partial<QueryPacketCommitmentsResponse>): QueryPacketCommitmentsResponse;
    fromAmino(object: QueryPacketCommitmentsResponseAmino): QueryPacketCommitmentsResponse;
    toAmino(message: QueryPacketCommitmentsResponse): QueryPacketCommitmentsResponseAmino;
    fromAminoMsg(object: QueryPacketCommitmentsResponseAminoMsg): QueryPacketCommitmentsResponse;
    toAminoMsg(message: QueryPacketCommitmentsResponse): QueryPacketCommitmentsResponseAminoMsg;
    fromProtoMsg(message: QueryPacketCommitmentsResponseProtoMsg): QueryPacketCommitmentsResponse;
    toProto(message: QueryPacketCommitmentsResponse): Uint8Array;
    toProtoMsg(message: QueryPacketCommitmentsResponse): QueryPacketCommitmentsResponseProtoMsg;
};
export declare const QueryPacketReceiptRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryPacketReceiptRequest;
    isSDK(o: any): o is QueryPacketReceiptRequestSDKType;
    isAmino(o: any): o is QueryPacketReceiptRequestAmino;
    encode(message: QueryPacketReceiptRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryPacketReceiptRequest;
    fromJSON(object: any): QueryPacketReceiptRequest;
    toJSON(message: QueryPacketReceiptRequest): unknown;
    fromPartial(object: Partial<QueryPacketReceiptRequest>): QueryPacketReceiptRequest;
    fromAmino(object: QueryPacketReceiptRequestAmino): QueryPacketReceiptRequest;
    toAmino(message: QueryPacketReceiptRequest): QueryPacketReceiptRequestAmino;
    fromAminoMsg(object: QueryPacketReceiptRequestAminoMsg): QueryPacketReceiptRequest;
    toAminoMsg(message: QueryPacketReceiptRequest): QueryPacketReceiptRequestAminoMsg;
    fromProtoMsg(message: QueryPacketReceiptRequestProtoMsg): QueryPacketReceiptRequest;
    toProto(message: QueryPacketReceiptRequest): Uint8Array;
    toProtoMsg(message: QueryPacketReceiptRequest): QueryPacketReceiptRequestProtoMsg;
};
export declare const QueryPacketReceiptResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryPacketReceiptResponse;
    isSDK(o: any): o is QueryPacketReceiptResponseSDKType;
    isAmino(o: any): o is QueryPacketReceiptResponseAmino;
    encode(message: QueryPacketReceiptResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryPacketReceiptResponse;
    fromJSON(object: any): QueryPacketReceiptResponse;
    toJSON(message: QueryPacketReceiptResponse): unknown;
    fromPartial(object: Partial<QueryPacketReceiptResponse>): QueryPacketReceiptResponse;
    fromAmino(object: QueryPacketReceiptResponseAmino): QueryPacketReceiptResponse;
    toAmino(message: QueryPacketReceiptResponse): QueryPacketReceiptResponseAmino;
    fromAminoMsg(object: QueryPacketReceiptResponseAminoMsg): QueryPacketReceiptResponse;
    toAminoMsg(message: QueryPacketReceiptResponse): QueryPacketReceiptResponseAminoMsg;
    fromProtoMsg(message: QueryPacketReceiptResponseProtoMsg): QueryPacketReceiptResponse;
    toProto(message: QueryPacketReceiptResponse): Uint8Array;
    toProtoMsg(message: QueryPacketReceiptResponse): QueryPacketReceiptResponseProtoMsg;
};
export declare const QueryPacketAcknowledgementRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryPacketAcknowledgementRequest;
    isSDK(o: any): o is QueryPacketAcknowledgementRequestSDKType;
    isAmino(o: any): o is QueryPacketAcknowledgementRequestAmino;
    encode(message: QueryPacketAcknowledgementRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryPacketAcknowledgementRequest;
    fromJSON(object: any): QueryPacketAcknowledgementRequest;
    toJSON(message: QueryPacketAcknowledgementRequest): unknown;
    fromPartial(object: Partial<QueryPacketAcknowledgementRequest>): QueryPacketAcknowledgementRequest;
    fromAmino(object: QueryPacketAcknowledgementRequestAmino): QueryPacketAcknowledgementRequest;
    toAmino(message: QueryPacketAcknowledgementRequest): QueryPacketAcknowledgementRequestAmino;
    fromAminoMsg(object: QueryPacketAcknowledgementRequestAminoMsg): QueryPacketAcknowledgementRequest;
    toAminoMsg(message: QueryPacketAcknowledgementRequest): QueryPacketAcknowledgementRequestAminoMsg;
    fromProtoMsg(message: QueryPacketAcknowledgementRequestProtoMsg): QueryPacketAcknowledgementRequest;
    toProto(message: QueryPacketAcknowledgementRequest): Uint8Array;
    toProtoMsg(message: QueryPacketAcknowledgementRequest): QueryPacketAcknowledgementRequestProtoMsg;
};
export declare const QueryPacketAcknowledgementResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryPacketAcknowledgementResponse;
    isSDK(o: any): o is QueryPacketAcknowledgementResponseSDKType;
    isAmino(o: any): o is QueryPacketAcknowledgementResponseAmino;
    encode(message: QueryPacketAcknowledgementResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryPacketAcknowledgementResponse;
    fromJSON(object: any): QueryPacketAcknowledgementResponse;
    toJSON(message: QueryPacketAcknowledgementResponse): unknown;
    fromPartial(object: Partial<QueryPacketAcknowledgementResponse>): QueryPacketAcknowledgementResponse;
    fromAmino(object: QueryPacketAcknowledgementResponseAmino): QueryPacketAcknowledgementResponse;
    toAmino(message: QueryPacketAcknowledgementResponse): QueryPacketAcknowledgementResponseAmino;
    fromAminoMsg(object: QueryPacketAcknowledgementResponseAminoMsg): QueryPacketAcknowledgementResponse;
    toAminoMsg(message: QueryPacketAcknowledgementResponse): QueryPacketAcknowledgementResponseAminoMsg;
    fromProtoMsg(message: QueryPacketAcknowledgementResponseProtoMsg): QueryPacketAcknowledgementResponse;
    toProto(message: QueryPacketAcknowledgementResponse): Uint8Array;
    toProtoMsg(message: QueryPacketAcknowledgementResponse): QueryPacketAcknowledgementResponseProtoMsg;
};
export declare const QueryPacketAcknowledgementsRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryPacketAcknowledgementsRequest;
    isSDK(o: any): o is QueryPacketAcknowledgementsRequestSDKType;
    isAmino(o: any): o is QueryPacketAcknowledgementsRequestAmino;
    encode(message: QueryPacketAcknowledgementsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryPacketAcknowledgementsRequest;
    fromJSON(object: any): QueryPacketAcknowledgementsRequest;
    toJSON(message: QueryPacketAcknowledgementsRequest): unknown;
    fromPartial(object: Partial<QueryPacketAcknowledgementsRequest>): QueryPacketAcknowledgementsRequest;
    fromAmino(object: QueryPacketAcknowledgementsRequestAmino): QueryPacketAcknowledgementsRequest;
    toAmino(message: QueryPacketAcknowledgementsRequest): QueryPacketAcknowledgementsRequestAmino;
    fromAminoMsg(object: QueryPacketAcknowledgementsRequestAminoMsg): QueryPacketAcknowledgementsRequest;
    toAminoMsg(message: QueryPacketAcknowledgementsRequest): QueryPacketAcknowledgementsRequestAminoMsg;
    fromProtoMsg(message: QueryPacketAcknowledgementsRequestProtoMsg): QueryPacketAcknowledgementsRequest;
    toProto(message: QueryPacketAcknowledgementsRequest): Uint8Array;
    toProtoMsg(message: QueryPacketAcknowledgementsRequest): QueryPacketAcknowledgementsRequestProtoMsg;
};
export declare const QueryPacketAcknowledgementsResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryPacketAcknowledgementsResponse;
    isSDK(o: any): o is QueryPacketAcknowledgementsResponseSDKType;
    isAmino(o: any): o is QueryPacketAcknowledgementsResponseAmino;
    encode(message: QueryPacketAcknowledgementsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryPacketAcknowledgementsResponse;
    fromJSON(object: any): QueryPacketAcknowledgementsResponse;
    toJSON(message: QueryPacketAcknowledgementsResponse): unknown;
    fromPartial(object: Partial<QueryPacketAcknowledgementsResponse>): QueryPacketAcknowledgementsResponse;
    fromAmino(object: QueryPacketAcknowledgementsResponseAmino): QueryPacketAcknowledgementsResponse;
    toAmino(message: QueryPacketAcknowledgementsResponse): QueryPacketAcknowledgementsResponseAmino;
    fromAminoMsg(object: QueryPacketAcknowledgementsResponseAminoMsg): QueryPacketAcknowledgementsResponse;
    toAminoMsg(message: QueryPacketAcknowledgementsResponse): QueryPacketAcknowledgementsResponseAminoMsg;
    fromProtoMsg(message: QueryPacketAcknowledgementsResponseProtoMsg): QueryPacketAcknowledgementsResponse;
    toProto(message: QueryPacketAcknowledgementsResponse): Uint8Array;
    toProtoMsg(message: QueryPacketAcknowledgementsResponse): QueryPacketAcknowledgementsResponseProtoMsg;
};
export declare const QueryUnreceivedPacketsRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryUnreceivedPacketsRequest;
    isSDK(o: any): o is QueryUnreceivedPacketsRequestSDKType;
    isAmino(o: any): o is QueryUnreceivedPacketsRequestAmino;
    encode(message: QueryUnreceivedPacketsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryUnreceivedPacketsRequest;
    fromJSON(object: any): QueryUnreceivedPacketsRequest;
    toJSON(message: QueryUnreceivedPacketsRequest): unknown;
    fromPartial(object: Partial<QueryUnreceivedPacketsRequest>): QueryUnreceivedPacketsRequest;
    fromAmino(object: QueryUnreceivedPacketsRequestAmino): QueryUnreceivedPacketsRequest;
    toAmino(message: QueryUnreceivedPacketsRequest): QueryUnreceivedPacketsRequestAmino;
    fromAminoMsg(object: QueryUnreceivedPacketsRequestAminoMsg): QueryUnreceivedPacketsRequest;
    toAminoMsg(message: QueryUnreceivedPacketsRequest): QueryUnreceivedPacketsRequestAminoMsg;
    fromProtoMsg(message: QueryUnreceivedPacketsRequestProtoMsg): QueryUnreceivedPacketsRequest;
    toProto(message: QueryUnreceivedPacketsRequest): Uint8Array;
    toProtoMsg(message: QueryUnreceivedPacketsRequest): QueryUnreceivedPacketsRequestProtoMsg;
};
export declare const QueryUnreceivedPacketsResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryUnreceivedPacketsResponse;
    isSDK(o: any): o is QueryUnreceivedPacketsResponseSDKType;
    isAmino(o: any): o is QueryUnreceivedPacketsResponseAmino;
    encode(message: QueryUnreceivedPacketsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryUnreceivedPacketsResponse;
    fromJSON(object: any): QueryUnreceivedPacketsResponse;
    toJSON(message: QueryUnreceivedPacketsResponse): unknown;
    fromPartial(object: Partial<QueryUnreceivedPacketsResponse>): QueryUnreceivedPacketsResponse;
    fromAmino(object: QueryUnreceivedPacketsResponseAmino): QueryUnreceivedPacketsResponse;
    toAmino(message: QueryUnreceivedPacketsResponse): QueryUnreceivedPacketsResponseAmino;
    fromAminoMsg(object: QueryUnreceivedPacketsResponseAminoMsg): QueryUnreceivedPacketsResponse;
    toAminoMsg(message: QueryUnreceivedPacketsResponse): QueryUnreceivedPacketsResponseAminoMsg;
    fromProtoMsg(message: QueryUnreceivedPacketsResponseProtoMsg): QueryUnreceivedPacketsResponse;
    toProto(message: QueryUnreceivedPacketsResponse): Uint8Array;
    toProtoMsg(message: QueryUnreceivedPacketsResponse): QueryUnreceivedPacketsResponseProtoMsg;
};
export declare const QueryUnreceivedAcksRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryUnreceivedAcksRequest;
    isSDK(o: any): o is QueryUnreceivedAcksRequestSDKType;
    isAmino(o: any): o is QueryUnreceivedAcksRequestAmino;
    encode(message: QueryUnreceivedAcksRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryUnreceivedAcksRequest;
    fromJSON(object: any): QueryUnreceivedAcksRequest;
    toJSON(message: QueryUnreceivedAcksRequest): unknown;
    fromPartial(object: Partial<QueryUnreceivedAcksRequest>): QueryUnreceivedAcksRequest;
    fromAmino(object: QueryUnreceivedAcksRequestAmino): QueryUnreceivedAcksRequest;
    toAmino(message: QueryUnreceivedAcksRequest): QueryUnreceivedAcksRequestAmino;
    fromAminoMsg(object: QueryUnreceivedAcksRequestAminoMsg): QueryUnreceivedAcksRequest;
    toAminoMsg(message: QueryUnreceivedAcksRequest): QueryUnreceivedAcksRequestAminoMsg;
    fromProtoMsg(message: QueryUnreceivedAcksRequestProtoMsg): QueryUnreceivedAcksRequest;
    toProto(message: QueryUnreceivedAcksRequest): Uint8Array;
    toProtoMsg(message: QueryUnreceivedAcksRequest): QueryUnreceivedAcksRequestProtoMsg;
};
export declare const QueryUnreceivedAcksResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryUnreceivedAcksResponse;
    isSDK(o: any): o is QueryUnreceivedAcksResponseSDKType;
    isAmino(o: any): o is QueryUnreceivedAcksResponseAmino;
    encode(message: QueryUnreceivedAcksResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryUnreceivedAcksResponse;
    fromJSON(object: any): QueryUnreceivedAcksResponse;
    toJSON(message: QueryUnreceivedAcksResponse): unknown;
    fromPartial(object: Partial<QueryUnreceivedAcksResponse>): QueryUnreceivedAcksResponse;
    fromAmino(object: QueryUnreceivedAcksResponseAmino): QueryUnreceivedAcksResponse;
    toAmino(message: QueryUnreceivedAcksResponse): QueryUnreceivedAcksResponseAmino;
    fromAminoMsg(object: QueryUnreceivedAcksResponseAminoMsg): QueryUnreceivedAcksResponse;
    toAminoMsg(message: QueryUnreceivedAcksResponse): QueryUnreceivedAcksResponseAminoMsg;
    fromProtoMsg(message: QueryUnreceivedAcksResponseProtoMsg): QueryUnreceivedAcksResponse;
    toProto(message: QueryUnreceivedAcksResponse): Uint8Array;
    toProtoMsg(message: QueryUnreceivedAcksResponse): QueryUnreceivedAcksResponseProtoMsg;
};
export declare const QueryNextSequenceReceiveRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryNextSequenceReceiveRequest;
    isSDK(o: any): o is QueryNextSequenceReceiveRequestSDKType;
    isAmino(o: any): o is QueryNextSequenceReceiveRequestAmino;
    encode(message: QueryNextSequenceReceiveRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryNextSequenceReceiveRequest;
    fromJSON(object: any): QueryNextSequenceReceiveRequest;
    toJSON(message: QueryNextSequenceReceiveRequest): unknown;
    fromPartial(object: Partial<QueryNextSequenceReceiveRequest>): QueryNextSequenceReceiveRequest;
    fromAmino(object: QueryNextSequenceReceiveRequestAmino): QueryNextSequenceReceiveRequest;
    toAmino(message: QueryNextSequenceReceiveRequest): QueryNextSequenceReceiveRequestAmino;
    fromAminoMsg(object: QueryNextSequenceReceiveRequestAminoMsg): QueryNextSequenceReceiveRequest;
    toAminoMsg(message: QueryNextSequenceReceiveRequest): QueryNextSequenceReceiveRequestAminoMsg;
    fromProtoMsg(message: QueryNextSequenceReceiveRequestProtoMsg): QueryNextSequenceReceiveRequest;
    toProto(message: QueryNextSequenceReceiveRequest): Uint8Array;
    toProtoMsg(message: QueryNextSequenceReceiveRequest): QueryNextSequenceReceiveRequestProtoMsg;
};
export declare const QueryNextSequenceReceiveResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryNextSequenceReceiveResponse;
    isSDK(o: any): o is QueryNextSequenceReceiveResponseSDKType;
    isAmino(o: any): o is QueryNextSequenceReceiveResponseAmino;
    encode(message: QueryNextSequenceReceiveResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryNextSequenceReceiveResponse;
    fromJSON(object: any): QueryNextSequenceReceiveResponse;
    toJSON(message: QueryNextSequenceReceiveResponse): unknown;
    fromPartial(object: Partial<QueryNextSequenceReceiveResponse>): QueryNextSequenceReceiveResponse;
    fromAmino(object: QueryNextSequenceReceiveResponseAmino): QueryNextSequenceReceiveResponse;
    toAmino(message: QueryNextSequenceReceiveResponse): QueryNextSequenceReceiveResponseAmino;
    fromAminoMsg(object: QueryNextSequenceReceiveResponseAminoMsg): QueryNextSequenceReceiveResponse;
    toAminoMsg(message: QueryNextSequenceReceiveResponse): QueryNextSequenceReceiveResponseAminoMsg;
    fromProtoMsg(message: QueryNextSequenceReceiveResponseProtoMsg): QueryNextSequenceReceiveResponse;
    toProto(message: QueryNextSequenceReceiveResponse): Uint8Array;
    toProtoMsg(message: QueryNextSequenceReceiveResponse): QueryNextSequenceReceiveResponseProtoMsg;
};
export declare const QueryNextSequenceSendRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryNextSequenceSendRequest;
    isSDK(o: any): o is QueryNextSequenceSendRequestSDKType;
    isAmino(o: any): o is QueryNextSequenceSendRequestAmino;
    encode(message: QueryNextSequenceSendRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryNextSequenceSendRequest;
    fromJSON(object: any): QueryNextSequenceSendRequest;
    toJSON(message: QueryNextSequenceSendRequest): unknown;
    fromPartial(object: Partial<QueryNextSequenceSendRequest>): QueryNextSequenceSendRequest;
    fromAmino(object: QueryNextSequenceSendRequestAmino): QueryNextSequenceSendRequest;
    toAmino(message: QueryNextSequenceSendRequest): QueryNextSequenceSendRequestAmino;
    fromAminoMsg(object: QueryNextSequenceSendRequestAminoMsg): QueryNextSequenceSendRequest;
    toAminoMsg(message: QueryNextSequenceSendRequest): QueryNextSequenceSendRequestAminoMsg;
    fromProtoMsg(message: QueryNextSequenceSendRequestProtoMsg): QueryNextSequenceSendRequest;
    toProto(message: QueryNextSequenceSendRequest): Uint8Array;
    toProtoMsg(message: QueryNextSequenceSendRequest): QueryNextSequenceSendRequestProtoMsg;
};
export declare const QueryNextSequenceSendResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryNextSequenceSendResponse;
    isSDK(o: any): o is QueryNextSequenceSendResponseSDKType;
    isAmino(o: any): o is QueryNextSequenceSendResponseAmino;
    encode(message: QueryNextSequenceSendResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryNextSequenceSendResponse;
    fromJSON(object: any): QueryNextSequenceSendResponse;
    toJSON(message: QueryNextSequenceSendResponse): unknown;
    fromPartial(object: Partial<QueryNextSequenceSendResponse>): QueryNextSequenceSendResponse;
    fromAmino(object: QueryNextSequenceSendResponseAmino): QueryNextSequenceSendResponse;
    toAmino(message: QueryNextSequenceSendResponse): QueryNextSequenceSendResponseAmino;
    fromAminoMsg(object: QueryNextSequenceSendResponseAminoMsg): QueryNextSequenceSendResponse;
    toAminoMsg(message: QueryNextSequenceSendResponse): QueryNextSequenceSendResponseAminoMsg;
    fromProtoMsg(message: QueryNextSequenceSendResponseProtoMsg): QueryNextSequenceSendResponse;
    toProto(message: QueryNextSequenceSendResponse): Uint8Array;
    toProtoMsg(message: QueryNextSequenceSendResponse): QueryNextSequenceSendResponseProtoMsg;
};

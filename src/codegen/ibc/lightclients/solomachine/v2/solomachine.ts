//@ts-nocheck
import { Any, AnyAmino, AnySDKType } from "../../../../google/protobuf/any";
import { ConnectionEnd, ConnectionEndAmino, ConnectionEndSDKType } from "../../../core/connection/v1/connection";
import { Channel, ChannelAmino, ChannelSDKType } from "../../../core/channel/v1/channel";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../../helpers";
export const protobufPackage = "ibc.lightclients.solomachine.v2";
/**
 * DataType defines the type of solo machine proof being created. This is done
 * to preserve uniqueness of different data sign byte encodings.
 */
export enum DataType {
  /** DATA_TYPE_UNINITIALIZED_UNSPECIFIED - Default State */
  DATA_TYPE_UNINITIALIZED_UNSPECIFIED = 0,
  /** DATA_TYPE_CLIENT_STATE - Data type for client state verification */
  DATA_TYPE_CLIENT_STATE = 1,
  /** DATA_TYPE_CONSENSUS_STATE - Data type for consensus state verification */
  DATA_TYPE_CONSENSUS_STATE = 2,
  /** DATA_TYPE_CONNECTION_STATE - Data type for connection state verification */
  DATA_TYPE_CONNECTION_STATE = 3,
  /** DATA_TYPE_CHANNEL_STATE - Data type for channel state verification */
  DATA_TYPE_CHANNEL_STATE = 4,
  /** DATA_TYPE_PACKET_COMMITMENT - Data type for packet commitment verification */
  DATA_TYPE_PACKET_COMMITMENT = 5,
  /** DATA_TYPE_PACKET_ACKNOWLEDGEMENT - Data type for packet acknowledgement verification */
  DATA_TYPE_PACKET_ACKNOWLEDGEMENT = 6,
  /** DATA_TYPE_PACKET_RECEIPT_ABSENCE - Data type for packet receipt absence verification */
  DATA_TYPE_PACKET_RECEIPT_ABSENCE = 7,
  /** DATA_TYPE_NEXT_SEQUENCE_RECV - Data type for next sequence recv verification */
  DATA_TYPE_NEXT_SEQUENCE_RECV = 8,
  /** DATA_TYPE_HEADER - Data type for header verification */
  DATA_TYPE_HEADER = 9,
  UNRECOGNIZED = -1,
}
export const DataTypeSDKType = DataType;
export const DataTypeAmino = DataType;
export function dataTypeFromJSON(object: any): DataType {
  switch (object) {
    case 0:
    case "DATA_TYPE_UNINITIALIZED_UNSPECIFIED":
      return DataType.DATA_TYPE_UNINITIALIZED_UNSPECIFIED;
    case 1:
    case "DATA_TYPE_CLIENT_STATE":
      return DataType.DATA_TYPE_CLIENT_STATE;
    case 2:
    case "DATA_TYPE_CONSENSUS_STATE":
      return DataType.DATA_TYPE_CONSENSUS_STATE;
    case 3:
    case "DATA_TYPE_CONNECTION_STATE":
      return DataType.DATA_TYPE_CONNECTION_STATE;
    case 4:
    case "DATA_TYPE_CHANNEL_STATE":
      return DataType.DATA_TYPE_CHANNEL_STATE;
    case 5:
    case "DATA_TYPE_PACKET_COMMITMENT":
      return DataType.DATA_TYPE_PACKET_COMMITMENT;
    case 6:
    case "DATA_TYPE_PACKET_ACKNOWLEDGEMENT":
      return DataType.DATA_TYPE_PACKET_ACKNOWLEDGEMENT;
    case 7:
    case "DATA_TYPE_PACKET_RECEIPT_ABSENCE":
      return DataType.DATA_TYPE_PACKET_RECEIPT_ABSENCE;
    case 8:
    case "DATA_TYPE_NEXT_SEQUENCE_RECV":
      return DataType.DATA_TYPE_NEXT_SEQUENCE_RECV;
    case 9:
    case "DATA_TYPE_HEADER":
      return DataType.DATA_TYPE_HEADER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DataType.UNRECOGNIZED;
  }
}
export function dataTypeToJSON(object: DataType): string {
  switch (object) {
    case DataType.DATA_TYPE_UNINITIALIZED_UNSPECIFIED:
      return "DATA_TYPE_UNINITIALIZED_UNSPECIFIED";
    case DataType.DATA_TYPE_CLIENT_STATE:
      return "DATA_TYPE_CLIENT_STATE";
    case DataType.DATA_TYPE_CONSENSUS_STATE:
      return "DATA_TYPE_CONSENSUS_STATE";
    case DataType.DATA_TYPE_CONNECTION_STATE:
      return "DATA_TYPE_CONNECTION_STATE";
    case DataType.DATA_TYPE_CHANNEL_STATE:
      return "DATA_TYPE_CHANNEL_STATE";
    case DataType.DATA_TYPE_PACKET_COMMITMENT:
      return "DATA_TYPE_PACKET_COMMITMENT";
    case DataType.DATA_TYPE_PACKET_ACKNOWLEDGEMENT:
      return "DATA_TYPE_PACKET_ACKNOWLEDGEMENT";
    case DataType.DATA_TYPE_PACKET_RECEIPT_ABSENCE:
      return "DATA_TYPE_PACKET_RECEIPT_ABSENCE";
    case DataType.DATA_TYPE_NEXT_SEQUENCE_RECV:
      return "DATA_TYPE_NEXT_SEQUENCE_RECV";
    case DataType.DATA_TYPE_HEADER:
      return "DATA_TYPE_HEADER";
    case DataType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * ClientState defines a solo machine client that tracks the current consensus
 * state and if the client is frozen.
 */
export interface ClientState {
  /** latest sequence of the client state */
  sequence: bigint;
  /** frozen sequence of the solo machine */
  is_frozen: boolean;
  consensus_state?: ConsensusState;
  /**
   * when set to true, will allow governance to update a solo machine client.
   * The client will be unfrozen if it is frozen.
   */
  allow_update_after_proposal: boolean;
}
export interface ClientStateProtoMsg {
  type_url: "/ibc.lightclients.solomachine.v2.ClientState";
  value: Uint8Array;
}
/**
 * ClientState defines a solo machine client that tracks the current consensus
 * state and if the client is frozen.
 */
export interface ClientStateAmino {
  /** latest sequence of the client state */
  sequence?: string;
  /** frozen sequence of the solo machine */
  is_frozen?: boolean;
  consensus_state?: ConsensusStateAmino;
  /**
   * when set to true, will allow governance to update a solo machine client.
   * The client will be unfrozen if it is frozen.
   */
  allow_update_after_proposal?: boolean;
}
export interface ClientStateAminoMsg {
  type: "cosmos-sdk/ClientState";
  value: ClientStateAmino;
}
/**
 * ClientState defines a solo machine client that tracks the current consensus
 * state and if the client is frozen.
 */
export interface ClientStateSDKType {
  sequence: bigint;
  is_frozen: boolean;
  consensus_state?: ConsensusStateSDKType;
  allow_update_after_proposal: boolean;
}
/**
 * ConsensusState defines a solo machine consensus state. The sequence of a
 * consensus state is contained in the "height" key used in storing the
 * consensus state.
 */
export interface ConsensusState {
  /** public key of the solo machine */
  public_key?: Any;
  /**
   * diversifier allows the same public key to be re-used across different solo
   * machine clients (potentially on different chains) without being considered
   * misbehaviour.
   */
  diversifier: string;
  timestamp: bigint;
}
export interface ConsensusStateProtoMsg {
  type_url: "/ibc.lightclients.solomachine.v2.ConsensusState";
  value: Uint8Array;
}
/**
 * ConsensusState defines a solo machine consensus state. The sequence of a
 * consensus state is contained in the "height" key used in storing the
 * consensus state.
 */
export interface ConsensusStateAmino {
  /** public key of the solo machine */
  public_key?: AnyAmino;
  /**
   * diversifier allows the same public key to be re-used across different solo
   * machine clients (potentially on different chains) without being considered
   * misbehaviour.
   */
  diversifier?: string;
  timestamp?: string;
}
export interface ConsensusStateAminoMsg {
  type: "cosmos-sdk/ConsensusState";
  value: ConsensusStateAmino;
}
/**
 * ConsensusState defines a solo machine consensus state. The sequence of a
 * consensus state is contained in the "height" key used in storing the
 * consensus state.
 */
export interface ConsensusStateSDKType {
  public_key?: AnySDKType;
  diversifier: string;
  timestamp: bigint;
}
/** Header defines a solo machine consensus header */
export interface Header {
  /** sequence to update solo machine public key at */
  sequence: bigint;
  timestamp: bigint;
  signature: Uint8Array;
  new_public_key?: Any;
  new_diversifier: string;
}
export interface HeaderProtoMsg {
  type_url: "/ibc.lightclients.solomachine.v2.Header";
  value: Uint8Array;
}
/** Header defines a solo machine consensus header */
export interface HeaderAmino {
  /** sequence to update solo machine public key at */
  sequence?: string;
  timestamp?: string;
  signature?: string;
  new_public_key?: AnyAmino;
  new_diversifier?: string;
}
export interface HeaderAminoMsg {
  type: "cosmos-sdk/Header";
  value: HeaderAmino;
}
/** Header defines a solo machine consensus header */
export interface HeaderSDKType {
  sequence: bigint;
  timestamp: bigint;
  signature: Uint8Array;
  new_public_key?: AnySDKType;
  new_diversifier: string;
}
/**
 * Misbehaviour defines misbehaviour for a solo machine which consists
 * of a sequence and two signatures over different messages at that sequence.
 */
export interface Misbehaviour {
  client_id: string;
  sequence: bigint;
  signature_one?: SignatureAndData;
  signature_two?: SignatureAndData;
}
export interface MisbehaviourProtoMsg {
  type_url: "/ibc.lightclients.solomachine.v2.Misbehaviour";
  value: Uint8Array;
}
/**
 * Misbehaviour defines misbehaviour for a solo machine which consists
 * of a sequence and two signatures over different messages at that sequence.
 */
export interface MisbehaviourAmino {
  client_id?: string;
  sequence?: string;
  signature_one?: SignatureAndDataAmino;
  signature_two?: SignatureAndDataAmino;
}
export interface MisbehaviourAminoMsg {
  type: "cosmos-sdk/Misbehaviour";
  value: MisbehaviourAmino;
}
/**
 * Misbehaviour defines misbehaviour for a solo machine which consists
 * of a sequence and two signatures over different messages at that sequence.
 */
export interface MisbehaviourSDKType {
  client_id: string;
  sequence: bigint;
  signature_one?: SignatureAndDataSDKType;
  signature_two?: SignatureAndDataSDKType;
}
/**
 * SignatureAndData contains a signature and the data signed over to create that
 * signature.
 */
export interface SignatureAndData {
  signature: Uint8Array;
  data_type: DataType;
  data: Uint8Array;
  timestamp: bigint;
}
export interface SignatureAndDataProtoMsg {
  type_url: "/ibc.lightclients.solomachine.v2.SignatureAndData";
  value: Uint8Array;
}
/**
 * SignatureAndData contains a signature and the data signed over to create that
 * signature.
 */
export interface SignatureAndDataAmino {
  signature?: string;
  data_type?: DataType;
  data?: string;
  timestamp?: string;
}
export interface SignatureAndDataAminoMsg {
  type: "cosmos-sdk/SignatureAndData";
  value: SignatureAndDataAmino;
}
/**
 * SignatureAndData contains a signature and the data signed over to create that
 * signature.
 */
export interface SignatureAndDataSDKType {
  signature: Uint8Array;
  data_type: DataType;
  data: Uint8Array;
  timestamp: bigint;
}
/**
 * TimestampedSignatureData contains the signature data and the timestamp of the
 * signature.
 */
export interface TimestampedSignatureData {
  signature_data: Uint8Array;
  timestamp: bigint;
}
export interface TimestampedSignatureDataProtoMsg {
  type_url: "/ibc.lightclients.solomachine.v2.TimestampedSignatureData";
  value: Uint8Array;
}
/**
 * TimestampedSignatureData contains the signature data and the timestamp of the
 * signature.
 */
export interface TimestampedSignatureDataAmino {
  signature_data?: string;
  timestamp?: string;
}
export interface TimestampedSignatureDataAminoMsg {
  type: "cosmos-sdk/TimestampedSignatureData";
  value: TimestampedSignatureDataAmino;
}
/**
 * TimestampedSignatureData contains the signature data and the timestamp of the
 * signature.
 */
export interface TimestampedSignatureDataSDKType {
  signature_data: Uint8Array;
  timestamp: bigint;
}
/** SignBytes defines the signed bytes used for signature verification. */
export interface SignBytes {
  sequence: bigint;
  timestamp: bigint;
  diversifier: string;
  /** type of the data used */
  data_type: DataType;
  /** marshaled data */
  data: Uint8Array;
}
export interface SignBytesProtoMsg {
  type_url: "/ibc.lightclients.solomachine.v2.SignBytes";
  value: Uint8Array;
}
/** SignBytes defines the signed bytes used for signature verification. */
export interface SignBytesAmino {
  sequence?: string;
  timestamp?: string;
  diversifier?: string;
  /** type of the data used */
  data_type?: DataType;
  /** marshaled data */
  data?: string;
}
export interface SignBytesAminoMsg {
  type: "cosmos-sdk/SignBytes";
  value: SignBytesAmino;
}
/** SignBytes defines the signed bytes used for signature verification. */
export interface SignBytesSDKType {
  sequence: bigint;
  timestamp: bigint;
  diversifier: string;
  data_type: DataType;
  data: Uint8Array;
}
/** HeaderData returns the SignBytes data for update verification. */
export interface HeaderData {
  /** header public key */
  new_pub_key?: Any;
  /** header diversifier */
  new_diversifier: string;
}
export interface HeaderDataProtoMsg {
  type_url: "/ibc.lightclients.solomachine.v2.HeaderData";
  value: Uint8Array;
}
/** HeaderData returns the SignBytes data for update verification. */
export interface HeaderDataAmino {
  /** header public key */
  new_pub_key?: AnyAmino;
  /** header diversifier */
  new_diversifier?: string;
}
export interface HeaderDataAminoMsg {
  type: "cosmos-sdk/HeaderData";
  value: HeaderDataAmino;
}
/** HeaderData returns the SignBytes data for update verification. */
export interface HeaderDataSDKType {
  new_pub_key?: AnySDKType;
  new_diversifier: string;
}
/** ClientStateData returns the SignBytes data for client state verification. */
export interface ClientStateData {
  path: Uint8Array;
  client_state?: Any;
}
export interface ClientStateDataProtoMsg {
  type_url: "/ibc.lightclients.solomachine.v2.ClientStateData";
  value: Uint8Array;
}
/** ClientStateData returns the SignBytes data for client state verification. */
export interface ClientStateDataAmino {
  path?: string;
  client_state?: AnyAmino;
}
export interface ClientStateDataAminoMsg {
  type: "cosmos-sdk/ClientStateData";
  value: ClientStateDataAmino;
}
/** ClientStateData returns the SignBytes data for client state verification. */
export interface ClientStateDataSDKType {
  path: Uint8Array;
  client_state?: AnySDKType;
}
/**
 * ConsensusStateData returns the SignBytes data for consensus state
 * verification.
 */
export interface ConsensusStateData {
  path: Uint8Array;
  consensus_state?: Any;
}
export interface ConsensusStateDataProtoMsg {
  type_url: "/ibc.lightclients.solomachine.v2.ConsensusStateData";
  value: Uint8Array;
}
/**
 * ConsensusStateData returns the SignBytes data for consensus state
 * verification.
 */
export interface ConsensusStateDataAmino {
  path?: string;
  consensus_state?: AnyAmino;
}
export interface ConsensusStateDataAminoMsg {
  type: "cosmos-sdk/ConsensusStateData";
  value: ConsensusStateDataAmino;
}
/**
 * ConsensusStateData returns the SignBytes data for consensus state
 * verification.
 */
export interface ConsensusStateDataSDKType {
  path: Uint8Array;
  consensus_state?: AnySDKType;
}
/**
 * ConnectionStateData returns the SignBytes data for connection state
 * verification.
 */
export interface ConnectionStateData {
  path: Uint8Array;
  connection?: ConnectionEnd;
}
export interface ConnectionStateDataProtoMsg {
  type_url: "/ibc.lightclients.solomachine.v2.ConnectionStateData";
  value: Uint8Array;
}
/**
 * ConnectionStateData returns the SignBytes data for connection state
 * verification.
 */
export interface ConnectionStateDataAmino {
  path?: string;
  connection?: ConnectionEndAmino;
}
export interface ConnectionStateDataAminoMsg {
  type: "cosmos-sdk/ConnectionStateData";
  value: ConnectionStateDataAmino;
}
/**
 * ConnectionStateData returns the SignBytes data for connection state
 * verification.
 */
export interface ConnectionStateDataSDKType {
  path: Uint8Array;
  connection?: ConnectionEndSDKType;
}
/**
 * ChannelStateData returns the SignBytes data for channel state
 * verification.
 */
export interface ChannelStateData {
  path: Uint8Array;
  channel?: Channel;
}
export interface ChannelStateDataProtoMsg {
  type_url: "/ibc.lightclients.solomachine.v2.ChannelStateData";
  value: Uint8Array;
}
/**
 * ChannelStateData returns the SignBytes data for channel state
 * verification.
 */
export interface ChannelStateDataAmino {
  path?: string;
  channel?: ChannelAmino;
}
export interface ChannelStateDataAminoMsg {
  type: "cosmos-sdk/ChannelStateData";
  value: ChannelStateDataAmino;
}
/**
 * ChannelStateData returns the SignBytes data for channel state
 * verification.
 */
export interface ChannelStateDataSDKType {
  path: Uint8Array;
  channel?: ChannelSDKType;
}
/**
 * PacketCommitmentData returns the SignBytes data for packet commitment
 * verification.
 */
export interface PacketCommitmentData {
  path: Uint8Array;
  commitment: Uint8Array;
}
export interface PacketCommitmentDataProtoMsg {
  type_url: "/ibc.lightclients.solomachine.v2.PacketCommitmentData";
  value: Uint8Array;
}
/**
 * PacketCommitmentData returns the SignBytes data for packet commitment
 * verification.
 */
export interface PacketCommitmentDataAmino {
  path?: string;
  commitment?: string;
}
export interface PacketCommitmentDataAminoMsg {
  type: "cosmos-sdk/PacketCommitmentData";
  value: PacketCommitmentDataAmino;
}
/**
 * PacketCommitmentData returns the SignBytes data for packet commitment
 * verification.
 */
export interface PacketCommitmentDataSDKType {
  path: Uint8Array;
  commitment: Uint8Array;
}
/**
 * PacketAcknowledgementData returns the SignBytes data for acknowledgement
 * verification.
 */
export interface PacketAcknowledgementData {
  path: Uint8Array;
  acknowledgement: Uint8Array;
}
export interface PacketAcknowledgementDataProtoMsg {
  type_url: "/ibc.lightclients.solomachine.v2.PacketAcknowledgementData";
  value: Uint8Array;
}
/**
 * PacketAcknowledgementData returns the SignBytes data for acknowledgement
 * verification.
 */
export interface PacketAcknowledgementDataAmino {
  path?: string;
  acknowledgement?: string;
}
export interface PacketAcknowledgementDataAminoMsg {
  type: "cosmos-sdk/PacketAcknowledgementData";
  value: PacketAcknowledgementDataAmino;
}
/**
 * PacketAcknowledgementData returns the SignBytes data for acknowledgement
 * verification.
 */
export interface PacketAcknowledgementDataSDKType {
  path: Uint8Array;
  acknowledgement: Uint8Array;
}
/**
 * PacketReceiptAbsenceData returns the SignBytes data for
 * packet receipt absence verification.
 */
export interface PacketReceiptAbsenceData {
  path: Uint8Array;
}
export interface PacketReceiptAbsenceDataProtoMsg {
  type_url: "/ibc.lightclients.solomachine.v2.PacketReceiptAbsenceData";
  value: Uint8Array;
}
/**
 * PacketReceiptAbsenceData returns the SignBytes data for
 * packet receipt absence verification.
 */
export interface PacketReceiptAbsenceDataAmino {
  path?: string;
}
export interface PacketReceiptAbsenceDataAminoMsg {
  type: "cosmos-sdk/PacketReceiptAbsenceData";
  value: PacketReceiptAbsenceDataAmino;
}
/**
 * PacketReceiptAbsenceData returns the SignBytes data for
 * packet receipt absence verification.
 */
export interface PacketReceiptAbsenceDataSDKType {
  path: Uint8Array;
}
/**
 * NextSequenceRecvData returns the SignBytes data for verification of the next
 * sequence to be received.
 */
export interface NextSequenceRecvData {
  path: Uint8Array;
  next_seq_recv: bigint;
}
export interface NextSequenceRecvDataProtoMsg {
  type_url: "/ibc.lightclients.solomachine.v2.NextSequenceRecvData";
  value: Uint8Array;
}
/**
 * NextSequenceRecvData returns the SignBytes data for verification of the next
 * sequence to be received.
 */
export interface NextSequenceRecvDataAmino {
  path?: string;
  next_seq_recv?: string;
}
export interface NextSequenceRecvDataAminoMsg {
  type: "cosmos-sdk/NextSequenceRecvData";
  value: NextSequenceRecvDataAmino;
}
/**
 * NextSequenceRecvData returns the SignBytes data for verification of the next
 * sequence to be received.
 */
export interface NextSequenceRecvDataSDKType {
  path: Uint8Array;
  next_seq_recv: bigint;
}
function createBaseClientState(): ClientState {
  return {
    sequence: BigInt(0),
    is_frozen: false,
    consensus_state: undefined,
    allow_update_after_proposal: false
  };
}
export const ClientState = {
  typeUrl: "/ibc.lightclients.solomachine.v2.ClientState",
  encode(message: ClientState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sequence !== BigInt(0)) {
      writer.uint32(8).uint64(message.sequence);
    }
    if (message.is_frozen === true) {
      writer.uint32(16).bool(message.is_frozen);
    }
    if (message.consensus_state !== undefined) {
      ConsensusState.encode(message.consensus_state, writer.uint32(26).fork()).ldelim();
    }
    if (message.allow_update_after_proposal === true) {
      writer.uint32(32).bool(message.allow_update_after_proposal);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ClientState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClientState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sequence = reader.uint64();
          break;
        case 2:
          message.is_frozen = reader.bool();
          break;
        case 3:
          message.consensus_state = ConsensusState.decode(reader, reader.uint32());
          break;
        case 4:
          message.allow_update_after_proposal = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ClientState {
    return {
      sequence: isSet(object.sequence) ? BigInt(object.sequence.toString()) : BigInt(0),
      is_frozen: isSet(object.is_frozen) ? Boolean(object.is_frozen) : false,
      consensus_state: isSet(object.consensus_state) ? ConsensusState.fromJSON(object.consensus_state) : undefined,
      allow_update_after_proposal: isSet(object.allow_update_after_proposal) ? Boolean(object.allow_update_after_proposal) : false
    };
  },
  toJSON(message: ClientState): unknown {
    const obj: any = {};
    message.sequence !== undefined && (obj.sequence = (message.sequence || BigInt(0)).toString());
    message.is_frozen !== undefined && (obj.is_frozen = message.is_frozen);
    message.consensus_state !== undefined && (obj.consensus_state = message.consensus_state ? ConsensusState.toJSON(message.consensus_state) : undefined);
    message.allow_update_after_proposal !== undefined && (obj.allow_update_after_proposal = message.allow_update_after_proposal);
    return obj;
  },
  fromPartial(object: Partial<ClientState>): ClientState {
    const message = createBaseClientState();
    message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
    message.is_frozen = object.is_frozen ?? false;
    message.consensus_state = object.consensus_state !== undefined && object.consensus_state !== null ? ConsensusState.fromPartial(object.consensus_state) : undefined;
    message.allow_update_after_proposal = object.allow_update_after_proposal ?? false;
    return message;
  },
  fromAmino(object: ClientStateAmino): ClientState {
    const message = createBaseClientState();
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = BigInt(object.sequence);
    }
    if (object.is_frozen !== undefined && object.is_frozen !== null) {
      message.is_frozen = object.is_frozen;
    }
    if (object.consensus_state !== undefined && object.consensus_state !== null) {
      message.consensus_state = ConsensusState.fromAmino(object.consensus_state);
    }
    if (object.allow_update_after_proposal !== undefined && object.allow_update_after_proposal !== null) {
      message.allow_update_after_proposal = object.allow_update_after_proposal;
    }
    return message;
  },
  toAmino(message: ClientState): ClientStateAmino {
    const obj: any = {};
    obj.sequence = message.sequence ? message.sequence.toString() : undefined;
    obj.is_frozen = message.is_frozen;
    obj.consensus_state = message.consensus_state ? ConsensusState.toAmino(message.consensus_state) : undefined;
    obj.allow_update_after_proposal = message.allow_update_after_proposal;
    return obj;
  },
  fromAminoMsg(object: ClientStateAminoMsg): ClientState {
    return ClientState.fromAmino(object.value);
  },
  toAminoMsg(message: ClientState): ClientStateAminoMsg {
    return {
      type: "cosmos-sdk/ClientState",
      value: ClientState.toAmino(message)
    };
  },
  fromProtoMsg(message: ClientStateProtoMsg): ClientState {
    return ClientState.decode(message.value);
  },
  toProto(message: ClientState): Uint8Array {
    return ClientState.encode(message).finish();
  },
  toProtoMsg(message: ClientState): ClientStateProtoMsg {
    return {
      typeUrl: "/ibc.lightclients.solomachine.v2.ClientState",
      value: ClientState.encode(message).finish()
    };
  }
};
function createBaseConsensusState(): ConsensusState {
  return {
    public_key: undefined,
    diversifier: "",
    timestamp: BigInt(0)
  };
}
export const ConsensusState = {
  typeUrl: "/ibc.lightclients.solomachine.v2.ConsensusState",
  encode(message: ConsensusState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.public_key !== undefined) {
      Any.encode(message.public_key, writer.uint32(10).fork()).ldelim();
    }
    if (message.diversifier !== "") {
      writer.uint32(18).string(message.diversifier);
    }
    if (message.timestamp !== BigInt(0)) {
      writer.uint32(24).uint64(message.timestamp);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ConsensusState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConsensusState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.public_key = Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.diversifier = reader.string();
          break;
        case 3:
          message.timestamp = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ConsensusState {
    return {
      public_key: isSet(object.public_key) ? Any.fromJSON(object.public_key) : undefined,
      diversifier: isSet(object.diversifier) ? String(object.diversifier) : "",
      timestamp: isSet(object.timestamp) ? BigInt(object.timestamp.toString()) : BigInt(0)
    };
  },
  toJSON(message: ConsensusState): unknown {
    const obj: any = {};
    message.public_key !== undefined && (obj.public_key = message.public_key ? Any.toJSON(message.public_key) : undefined);
    message.diversifier !== undefined && (obj.diversifier = message.diversifier);
    message.timestamp !== undefined && (obj.timestamp = (message.timestamp || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<ConsensusState>): ConsensusState {
    const message = createBaseConsensusState();
    message.public_key = object.public_key !== undefined && object.public_key !== null ? Any.fromPartial(object.public_key) : undefined;
    message.diversifier = object.diversifier ?? "";
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? BigInt(object.timestamp.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ConsensusStateAmino): ConsensusState {
    const message = createBaseConsensusState();
    if (object.public_key !== undefined && object.public_key !== null) {
      message.public_key = Any.fromAmino(object.public_key);
    }
    if (object.diversifier !== undefined && object.diversifier !== null) {
      message.diversifier = object.diversifier;
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = BigInt(object.timestamp);
    }
    return message;
  },
  toAmino(message: ConsensusState): ConsensusStateAmino {
    const obj: any = {};
    obj.public_key = message.public_key ? Any.toAmino(message.public_key) : undefined;
    obj.diversifier = message.diversifier;
    obj.timestamp = message.timestamp ? message.timestamp.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ConsensusStateAminoMsg): ConsensusState {
    return ConsensusState.fromAmino(object.value);
  },
  toAminoMsg(message: ConsensusState): ConsensusStateAminoMsg {
    return {
      type: "cosmos-sdk/ConsensusState",
      value: ConsensusState.toAmino(message)
    };
  },
  fromProtoMsg(message: ConsensusStateProtoMsg): ConsensusState {
    return ConsensusState.decode(message.value);
  },
  toProto(message: ConsensusState): Uint8Array {
    return ConsensusState.encode(message).finish();
  },
  toProtoMsg(message: ConsensusState): ConsensusStateProtoMsg {
    return {
      typeUrl: "/ibc.lightclients.solomachine.v2.ConsensusState",
      value: ConsensusState.encode(message).finish()
    };
  }
};
function createBaseHeader(): Header {
  return {
    sequence: BigInt(0),
    timestamp: BigInt(0),
    signature: new Uint8Array(),
    new_public_key: undefined,
    new_diversifier: ""
  };
}
export const Header = {
  typeUrl: "/ibc.lightclients.solomachine.v2.Header",
  encode(message: Header, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sequence !== BigInt(0)) {
      writer.uint32(8).uint64(message.sequence);
    }
    if (message.timestamp !== BigInt(0)) {
      writer.uint32(16).uint64(message.timestamp);
    }
    if (message.signature.length !== 0) {
      writer.uint32(26).bytes(message.signature);
    }
    if (message.new_public_key !== undefined) {
      Any.encode(message.new_public_key, writer.uint32(34).fork()).ldelim();
    }
    if (message.new_diversifier !== "") {
      writer.uint32(42).string(message.new_diversifier);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Header {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHeader();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sequence = reader.uint64();
          break;
        case 2:
          message.timestamp = reader.uint64();
          break;
        case 3:
          message.signature = reader.bytes();
          break;
        case 4:
          message.new_public_key = Any.decode(reader, reader.uint32());
          break;
        case 5:
          message.new_diversifier = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Header {
    return {
      sequence: isSet(object.sequence) ? BigInt(object.sequence.toString()) : BigInt(0),
      timestamp: isSet(object.timestamp) ? BigInt(object.timestamp.toString()) : BigInt(0),
      signature: isSet(object.signature) ? bytesFromBase64(object.signature) : new Uint8Array(),
      new_public_key: isSet(object.new_public_key) ? Any.fromJSON(object.new_public_key) : undefined,
      new_diversifier: isSet(object.new_diversifier) ? String(object.new_diversifier) : ""
    };
  },
  toJSON(message: Header): unknown {
    const obj: any = {};
    message.sequence !== undefined && (obj.sequence = (message.sequence || BigInt(0)).toString());
    message.timestamp !== undefined && (obj.timestamp = (message.timestamp || BigInt(0)).toString());
    message.signature !== undefined && (obj.signature = base64FromBytes(message.signature !== undefined ? message.signature : new Uint8Array()));
    message.new_public_key !== undefined && (obj.new_public_key = message.new_public_key ? Any.toJSON(message.new_public_key) : undefined);
    message.new_diversifier !== undefined && (obj.new_diversifier = message.new_diversifier);
    return obj;
  },
  fromPartial(object: Partial<Header>): Header {
    const message = createBaseHeader();
    message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? BigInt(object.timestamp.toString()) : BigInt(0);
    message.signature = object.signature ?? new Uint8Array();
    message.new_public_key = object.new_public_key !== undefined && object.new_public_key !== null ? Any.fromPartial(object.new_public_key) : undefined;
    message.new_diversifier = object.new_diversifier ?? "";
    return message;
  },
  fromAmino(object: HeaderAmino): Header {
    const message = createBaseHeader();
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = BigInt(object.sequence);
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = BigInt(object.timestamp);
    }
    if (object.signature !== undefined && object.signature !== null) {
      message.signature = bytesFromBase64(object.signature);
    }
    if (object.new_public_key !== undefined && object.new_public_key !== null) {
      message.new_public_key = Any.fromAmino(object.new_public_key);
    }
    if (object.new_diversifier !== undefined && object.new_diversifier !== null) {
      message.new_diversifier = object.new_diversifier;
    }
    return message;
  },
  toAmino(message: Header): HeaderAmino {
    const obj: any = {};
    obj.sequence = message.sequence ? message.sequence.toString() : undefined;
    obj.timestamp = message.timestamp ? message.timestamp.toString() : undefined;
    obj.signature = message.signature ? base64FromBytes(message.signature) : undefined;
    obj.new_public_key = message.new_public_key ? Any.toAmino(message.new_public_key) : undefined;
    obj.new_diversifier = message.new_diversifier;
    return obj;
  },
  fromAminoMsg(object: HeaderAminoMsg): Header {
    return Header.fromAmino(object.value);
  },
  toAminoMsg(message: Header): HeaderAminoMsg {
    return {
      type: "cosmos-sdk/Header",
      value: Header.toAmino(message)
    };
  },
  fromProtoMsg(message: HeaderProtoMsg): Header {
    return Header.decode(message.value);
  },
  toProto(message: Header): Uint8Array {
    return Header.encode(message).finish();
  },
  toProtoMsg(message: Header): HeaderProtoMsg {
    return {
      typeUrl: "/ibc.lightclients.solomachine.v2.Header",
      value: Header.encode(message).finish()
    };
  }
};
function createBaseMisbehaviour(): Misbehaviour {
  return {
    client_id: "",
    sequence: BigInt(0),
    signature_one: undefined,
    signature_two: undefined
  };
}
export const Misbehaviour = {
  typeUrl: "/ibc.lightclients.solomachine.v2.Misbehaviour",
  encode(message: Misbehaviour, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.client_id !== "") {
      writer.uint32(10).string(message.client_id);
    }
    if (message.sequence !== BigInt(0)) {
      writer.uint32(16).uint64(message.sequence);
    }
    if (message.signature_one !== undefined) {
      SignatureAndData.encode(message.signature_one, writer.uint32(26).fork()).ldelim();
    }
    if (message.signature_two !== undefined) {
      SignatureAndData.encode(message.signature_two, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Misbehaviour {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMisbehaviour();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.client_id = reader.string();
          break;
        case 2:
          message.sequence = reader.uint64();
          break;
        case 3:
          message.signature_one = SignatureAndData.decode(reader, reader.uint32());
          break;
        case 4:
          message.signature_two = SignatureAndData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Misbehaviour {
    return {
      client_id: isSet(object.client_id) ? String(object.client_id) : "",
      sequence: isSet(object.sequence) ? BigInt(object.sequence.toString()) : BigInt(0),
      signature_one: isSet(object.signature_one) ? SignatureAndData.fromJSON(object.signature_one) : undefined,
      signature_two: isSet(object.signature_two) ? SignatureAndData.fromJSON(object.signature_two) : undefined
    };
  },
  toJSON(message: Misbehaviour): unknown {
    const obj: any = {};
    message.client_id !== undefined && (obj.client_id = message.client_id);
    message.sequence !== undefined && (obj.sequence = (message.sequence || BigInt(0)).toString());
    message.signature_one !== undefined && (obj.signature_one = message.signature_one ? SignatureAndData.toJSON(message.signature_one) : undefined);
    message.signature_two !== undefined && (obj.signature_two = message.signature_two ? SignatureAndData.toJSON(message.signature_two) : undefined);
    return obj;
  },
  fromPartial(object: Partial<Misbehaviour>): Misbehaviour {
    const message = createBaseMisbehaviour();
    message.client_id = object.client_id ?? "";
    message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
    message.signature_one = object.signature_one !== undefined && object.signature_one !== null ? SignatureAndData.fromPartial(object.signature_one) : undefined;
    message.signature_two = object.signature_two !== undefined && object.signature_two !== null ? SignatureAndData.fromPartial(object.signature_two) : undefined;
    return message;
  },
  fromAmino(object: MisbehaviourAmino): Misbehaviour {
    const message = createBaseMisbehaviour();
    if (object.client_id !== undefined && object.client_id !== null) {
      message.client_id = object.client_id;
    }
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = BigInt(object.sequence);
    }
    if (object.signature_one !== undefined && object.signature_one !== null) {
      message.signature_one = SignatureAndData.fromAmino(object.signature_one);
    }
    if (object.signature_two !== undefined && object.signature_two !== null) {
      message.signature_two = SignatureAndData.fromAmino(object.signature_two);
    }
    return message;
  },
  toAmino(message: Misbehaviour): MisbehaviourAmino {
    const obj: any = {};
    obj.client_id = message.client_id;
    obj.sequence = message.sequence ? message.sequence.toString() : undefined;
    obj.signature_one = message.signature_one ? SignatureAndData.toAmino(message.signature_one) : undefined;
    obj.signature_two = message.signature_two ? SignatureAndData.toAmino(message.signature_two) : undefined;
    return obj;
  },
  fromAminoMsg(object: MisbehaviourAminoMsg): Misbehaviour {
    return Misbehaviour.fromAmino(object.value);
  },
  toAminoMsg(message: Misbehaviour): MisbehaviourAminoMsg {
    return {
      type: "cosmos-sdk/Misbehaviour",
      value: Misbehaviour.toAmino(message)
    };
  },
  fromProtoMsg(message: MisbehaviourProtoMsg): Misbehaviour {
    return Misbehaviour.decode(message.value);
  },
  toProto(message: Misbehaviour): Uint8Array {
    return Misbehaviour.encode(message).finish();
  },
  toProtoMsg(message: Misbehaviour): MisbehaviourProtoMsg {
    return {
      typeUrl: "/ibc.lightclients.solomachine.v2.Misbehaviour",
      value: Misbehaviour.encode(message).finish()
    };
  }
};
function createBaseSignatureAndData(): SignatureAndData {
  return {
    signature: new Uint8Array(),
    data_type: 0,
    data: new Uint8Array(),
    timestamp: BigInt(0)
  };
}
export const SignatureAndData = {
  typeUrl: "/ibc.lightclients.solomachine.v2.SignatureAndData",
  encode(message: SignatureAndData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signature.length !== 0) {
      writer.uint32(10).bytes(message.signature);
    }
    if (message.data_type !== 0) {
      writer.uint32(16).int32(message.data_type);
    }
    if (message.data.length !== 0) {
      writer.uint32(26).bytes(message.data);
    }
    if (message.timestamp !== BigInt(0)) {
      writer.uint32(32).uint64(message.timestamp);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SignatureAndData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignatureAndData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signature = reader.bytes();
          break;
        case 2:
          message.data_type = (reader.int32() as any);
          break;
        case 3:
          message.data = reader.bytes();
          break;
        case 4:
          message.timestamp = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SignatureAndData {
    return {
      signature: isSet(object.signature) ? bytesFromBase64(object.signature) : new Uint8Array(),
      data_type: isSet(object.data_type) ? dataTypeFromJSON(object.data_type) : -1,
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
      timestamp: isSet(object.timestamp) ? BigInt(object.timestamp.toString()) : BigInt(0)
    };
  },
  toJSON(message: SignatureAndData): unknown {
    const obj: any = {};
    message.signature !== undefined && (obj.signature = base64FromBytes(message.signature !== undefined ? message.signature : new Uint8Array()));
    message.data_type !== undefined && (obj.data_type = dataTypeToJSON(message.data_type));
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    message.timestamp !== undefined && (obj.timestamp = (message.timestamp || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<SignatureAndData>): SignatureAndData {
    const message = createBaseSignatureAndData();
    message.signature = object.signature ?? new Uint8Array();
    message.data_type = object.data_type ?? 0;
    message.data = object.data ?? new Uint8Array();
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? BigInt(object.timestamp.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: SignatureAndDataAmino): SignatureAndData {
    const message = createBaseSignatureAndData();
    if (object.signature !== undefined && object.signature !== null) {
      message.signature = bytesFromBase64(object.signature);
    }
    if (object.data_type !== undefined && object.data_type !== null) {
      message.data_type = dataTypeFromJSON(object.data_type);
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = BigInt(object.timestamp);
    }
    return message;
  },
  toAmino(message: SignatureAndData): SignatureAndDataAmino {
    const obj: any = {};
    obj.signature = message.signature ? base64FromBytes(message.signature) : undefined;
    obj.data_type = message.data_type;
    obj.data = message.data ? base64FromBytes(message.data) : undefined;
    obj.timestamp = message.timestamp ? message.timestamp.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: SignatureAndDataAminoMsg): SignatureAndData {
    return SignatureAndData.fromAmino(object.value);
  },
  toAminoMsg(message: SignatureAndData): SignatureAndDataAminoMsg {
    return {
      type: "cosmos-sdk/SignatureAndData",
      value: SignatureAndData.toAmino(message)
    };
  },
  fromProtoMsg(message: SignatureAndDataProtoMsg): SignatureAndData {
    return SignatureAndData.decode(message.value);
  },
  toProto(message: SignatureAndData): Uint8Array {
    return SignatureAndData.encode(message).finish();
  },
  toProtoMsg(message: SignatureAndData): SignatureAndDataProtoMsg {
    return {
      typeUrl: "/ibc.lightclients.solomachine.v2.SignatureAndData",
      value: SignatureAndData.encode(message).finish()
    };
  }
};
function createBaseTimestampedSignatureData(): TimestampedSignatureData {
  return {
    signature_data: new Uint8Array(),
    timestamp: BigInt(0)
  };
}
export const TimestampedSignatureData = {
  typeUrl: "/ibc.lightclients.solomachine.v2.TimestampedSignatureData",
  encode(message: TimestampedSignatureData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signature_data.length !== 0) {
      writer.uint32(10).bytes(message.signature_data);
    }
    if (message.timestamp !== BigInt(0)) {
      writer.uint32(16).uint64(message.timestamp);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TimestampedSignatureData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimestampedSignatureData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signature_data = reader.bytes();
          break;
        case 2:
          message.timestamp = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TimestampedSignatureData {
    return {
      signature_data: isSet(object.signature_data) ? bytesFromBase64(object.signature_data) : new Uint8Array(),
      timestamp: isSet(object.timestamp) ? BigInt(object.timestamp.toString()) : BigInt(0)
    };
  },
  toJSON(message: TimestampedSignatureData): unknown {
    const obj: any = {};
    message.signature_data !== undefined && (obj.signature_data = base64FromBytes(message.signature_data !== undefined ? message.signature_data : new Uint8Array()));
    message.timestamp !== undefined && (obj.timestamp = (message.timestamp || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<TimestampedSignatureData>): TimestampedSignatureData {
    const message = createBaseTimestampedSignatureData();
    message.signature_data = object.signature_data ?? new Uint8Array();
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? BigInt(object.timestamp.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: TimestampedSignatureDataAmino): TimestampedSignatureData {
    const message = createBaseTimestampedSignatureData();
    if (object.signature_data !== undefined && object.signature_data !== null) {
      message.signature_data = bytesFromBase64(object.signature_data);
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = BigInt(object.timestamp);
    }
    return message;
  },
  toAmino(message: TimestampedSignatureData): TimestampedSignatureDataAmino {
    const obj: any = {};
    obj.signature_data = message.signature_data ? base64FromBytes(message.signature_data) : undefined;
    obj.timestamp = message.timestamp ? message.timestamp.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: TimestampedSignatureDataAminoMsg): TimestampedSignatureData {
    return TimestampedSignatureData.fromAmino(object.value);
  },
  toAminoMsg(message: TimestampedSignatureData): TimestampedSignatureDataAminoMsg {
    return {
      type: "cosmos-sdk/TimestampedSignatureData",
      value: TimestampedSignatureData.toAmino(message)
    };
  },
  fromProtoMsg(message: TimestampedSignatureDataProtoMsg): TimestampedSignatureData {
    return TimestampedSignatureData.decode(message.value);
  },
  toProto(message: TimestampedSignatureData): Uint8Array {
    return TimestampedSignatureData.encode(message).finish();
  },
  toProtoMsg(message: TimestampedSignatureData): TimestampedSignatureDataProtoMsg {
    return {
      typeUrl: "/ibc.lightclients.solomachine.v2.TimestampedSignatureData",
      value: TimestampedSignatureData.encode(message).finish()
    };
  }
};
function createBaseSignBytes(): SignBytes {
  return {
    sequence: BigInt(0),
    timestamp: BigInt(0),
    diversifier: "",
    data_type: 0,
    data: new Uint8Array()
  };
}
export const SignBytes = {
  typeUrl: "/ibc.lightclients.solomachine.v2.SignBytes",
  encode(message: SignBytes, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sequence !== BigInt(0)) {
      writer.uint32(8).uint64(message.sequence);
    }
    if (message.timestamp !== BigInt(0)) {
      writer.uint32(16).uint64(message.timestamp);
    }
    if (message.diversifier !== "") {
      writer.uint32(26).string(message.diversifier);
    }
    if (message.data_type !== 0) {
      writer.uint32(32).int32(message.data_type);
    }
    if (message.data.length !== 0) {
      writer.uint32(42).bytes(message.data);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SignBytes {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignBytes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sequence = reader.uint64();
          break;
        case 2:
          message.timestamp = reader.uint64();
          break;
        case 3:
          message.diversifier = reader.string();
          break;
        case 4:
          message.data_type = (reader.int32() as any);
          break;
        case 5:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SignBytes {
    return {
      sequence: isSet(object.sequence) ? BigInt(object.sequence.toString()) : BigInt(0),
      timestamp: isSet(object.timestamp) ? BigInt(object.timestamp.toString()) : BigInt(0),
      diversifier: isSet(object.diversifier) ? String(object.diversifier) : "",
      data_type: isSet(object.data_type) ? dataTypeFromJSON(object.data_type) : -1,
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
    };
  },
  toJSON(message: SignBytes): unknown {
    const obj: any = {};
    message.sequence !== undefined && (obj.sequence = (message.sequence || BigInt(0)).toString());
    message.timestamp !== undefined && (obj.timestamp = (message.timestamp || BigInt(0)).toString());
    message.diversifier !== undefined && (obj.diversifier = message.diversifier);
    message.data_type !== undefined && (obj.data_type = dataTypeToJSON(message.data_type));
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    return obj;
  },
  fromPartial(object: Partial<SignBytes>): SignBytes {
    const message = createBaseSignBytes();
    message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? BigInt(object.timestamp.toString()) : BigInt(0);
    message.diversifier = object.diversifier ?? "";
    message.data_type = object.data_type ?? 0;
    message.data = object.data ?? new Uint8Array();
    return message;
  },
  fromAmino(object: SignBytesAmino): SignBytes {
    const message = createBaseSignBytes();
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = BigInt(object.sequence);
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = BigInt(object.timestamp);
    }
    if (object.diversifier !== undefined && object.diversifier !== null) {
      message.diversifier = object.diversifier;
    }
    if (object.data_type !== undefined && object.data_type !== null) {
      message.data_type = dataTypeFromJSON(object.data_type);
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    return message;
  },
  toAmino(message: SignBytes): SignBytesAmino {
    const obj: any = {};
    obj.sequence = message.sequence ? message.sequence.toString() : undefined;
    obj.timestamp = message.timestamp ? message.timestamp.toString() : undefined;
    obj.diversifier = message.diversifier;
    obj.data_type = message.data_type;
    obj.data = message.data ? base64FromBytes(message.data) : undefined;
    return obj;
  },
  fromAminoMsg(object: SignBytesAminoMsg): SignBytes {
    return SignBytes.fromAmino(object.value);
  },
  toAminoMsg(message: SignBytes): SignBytesAminoMsg {
    return {
      type: "cosmos-sdk/SignBytes",
      value: SignBytes.toAmino(message)
    };
  },
  fromProtoMsg(message: SignBytesProtoMsg): SignBytes {
    return SignBytes.decode(message.value);
  },
  toProto(message: SignBytes): Uint8Array {
    return SignBytes.encode(message).finish();
  },
  toProtoMsg(message: SignBytes): SignBytesProtoMsg {
    return {
      typeUrl: "/ibc.lightclients.solomachine.v2.SignBytes",
      value: SignBytes.encode(message).finish()
    };
  }
};
function createBaseHeaderData(): HeaderData {
  return {
    new_pub_key: undefined,
    new_diversifier: ""
  };
}
export const HeaderData = {
  typeUrl: "/ibc.lightclients.solomachine.v2.HeaderData",
  encode(message: HeaderData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.new_pub_key !== undefined) {
      Any.encode(message.new_pub_key, writer.uint32(10).fork()).ldelim();
    }
    if (message.new_diversifier !== "") {
      writer.uint32(18).string(message.new_diversifier);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): HeaderData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHeaderData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.new_pub_key = Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.new_diversifier = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): HeaderData {
    return {
      new_pub_key: isSet(object.new_pub_key) ? Any.fromJSON(object.new_pub_key) : undefined,
      new_diversifier: isSet(object.new_diversifier) ? String(object.new_diversifier) : ""
    };
  },
  toJSON(message: HeaderData): unknown {
    const obj: any = {};
    message.new_pub_key !== undefined && (obj.new_pub_key = message.new_pub_key ? Any.toJSON(message.new_pub_key) : undefined);
    message.new_diversifier !== undefined && (obj.new_diversifier = message.new_diversifier);
    return obj;
  },
  fromPartial(object: Partial<HeaderData>): HeaderData {
    const message = createBaseHeaderData();
    message.new_pub_key = object.new_pub_key !== undefined && object.new_pub_key !== null ? Any.fromPartial(object.new_pub_key) : undefined;
    message.new_diversifier = object.new_diversifier ?? "";
    return message;
  },
  fromAmino(object: HeaderDataAmino): HeaderData {
    const message = createBaseHeaderData();
    if (object.new_pub_key !== undefined && object.new_pub_key !== null) {
      message.new_pub_key = Any.fromAmino(object.new_pub_key);
    }
    if (object.new_diversifier !== undefined && object.new_diversifier !== null) {
      message.new_diversifier = object.new_diversifier;
    }
    return message;
  },
  toAmino(message: HeaderData): HeaderDataAmino {
    const obj: any = {};
    obj.new_pub_key = message.new_pub_key ? Any.toAmino(message.new_pub_key) : undefined;
    obj.new_diversifier = message.new_diversifier;
    return obj;
  },
  fromAminoMsg(object: HeaderDataAminoMsg): HeaderData {
    return HeaderData.fromAmino(object.value);
  },
  toAminoMsg(message: HeaderData): HeaderDataAminoMsg {
    return {
      type: "cosmos-sdk/HeaderData",
      value: HeaderData.toAmino(message)
    };
  },
  fromProtoMsg(message: HeaderDataProtoMsg): HeaderData {
    return HeaderData.decode(message.value);
  },
  toProto(message: HeaderData): Uint8Array {
    return HeaderData.encode(message).finish();
  },
  toProtoMsg(message: HeaderData): HeaderDataProtoMsg {
    return {
      typeUrl: "/ibc.lightclients.solomachine.v2.HeaderData",
      value: HeaderData.encode(message).finish()
    };
  }
};
function createBaseClientStateData(): ClientStateData {
  return {
    path: new Uint8Array(),
    client_state: undefined
  };
}
export const ClientStateData = {
  typeUrl: "/ibc.lightclients.solomachine.v2.ClientStateData",
  encode(message: ClientStateData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.path.length !== 0) {
      writer.uint32(10).bytes(message.path);
    }
    if (message.client_state !== undefined) {
      Any.encode(message.client_state, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ClientStateData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClientStateData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.path = reader.bytes();
          break;
        case 2:
          message.client_state = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ClientStateData {
    return {
      path: isSet(object.path) ? bytesFromBase64(object.path) : new Uint8Array(),
      client_state: isSet(object.client_state) ? Any.fromJSON(object.client_state) : undefined
    };
  },
  toJSON(message: ClientStateData): unknown {
    const obj: any = {};
    message.path !== undefined && (obj.path = base64FromBytes(message.path !== undefined ? message.path : new Uint8Array()));
    message.client_state !== undefined && (obj.client_state = message.client_state ? Any.toJSON(message.client_state) : undefined);
    return obj;
  },
  fromPartial(object: Partial<ClientStateData>): ClientStateData {
    const message = createBaseClientStateData();
    message.path = object.path ?? new Uint8Array();
    message.client_state = object.client_state !== undefined && object.client_state !== null ? Any.fromPartial(object.client_state) : undefined;
    return message;
  },
  fromAmino(object: ClientStateDataAmino): ClientStateData {
    const message = createBaseClientStateData();
    if (object.path !== undefined && object.path !== null) {
      message.path = bytesFromBase64(object.path);
    }
    if (object.client_state !== undefined && object.client_state !== null) {
      message.client_state = Any.fromAmino(object.client_state);
    }
    return message;
  },
  toAmino(message: ClientStateData): ClientStateDataAmino {
    const obj: any = {};
    obj.path = message.path ? base64FromBytes(message.path) : undefined;
    obj.client_state = message.client_state ? Any.toAmino(message.client_state) : undefined;
    return obj;
  },
  fromAminoMsg(object: ClientStateDataAminoMsg): ClientStateData {
    return ClientStateData.fromAmino(object.value);
  },
  toAminoMsg(message: ClientStateData): ClientStateDataAminoMsg {
    return {
      type: "cosmos-sdk/ClientStateData",
      value: ClientStateData.toAmino(message)
    };
  },
  fromProtoMsg(message: ClientStateDataProtoMsg): ClientStateData {
    return ClientStateData.decode(message.value);
  },
  toProto(message: ClientStateData): Uint8Array {
    return ClientStateData.encode(message).finish();
  },
  toProtoMsg(message: ClientStateData): ClientStateDataProtoMsg {
    return {
      typeUrl: "/ibc.lightclients.solomachine.v2.ClientStateData",
      value: ClientStateData.encode(message).finish()
    };
  }
};
function createBaseConsensusStateData(): ConsensusStateData {
  return {
    path: new Uint8Array(),
    consensus_state: undefined
  };
}
export const ConsensusStateData = {
  typeUrl: "/ibc.lightclients.solomachine.v2.ConsensusStateData",
  encode(message: ConsensusStateData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.path.length !== 0) {
      writer.uint32(10).bytes(message.path);
    }
    if (message.consensus_state !== undefined) {
      Any.encode(message.consensus_state, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ConsensusStateData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConsensusStateData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.path = reader.bytes();
          break;
        case 2:
          message.consensus_state = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ConsensusStateData {
    return {
      path: isSet(object.path) ? bytesFromBase64(object.path) : new Uint8Array(),
      consensus_state: isSet(object.consensus_state) ? Any.fromJSON(object.consensus_state) : undefined
    };
  },
  toJSON(message: ConsensusStateData): unknown {
    const obj: any = {};
    message.path !== undefined && (obj.path = base64FromBytes(message.path !== undefined ? message.path : new Uint8Array()));
    message.consensus_state !== undefined && (obj.consensus_state = message.consensus_state ? Any.toJSON(message.consensus_state) : undefined);
    return obj;
  },
  fromPartial(object: Partial<ConsensusStateData>): ConsensusStateData {
    const message = createBaseConsensusStateData();
    message.path = object.path ?? new Uint8Array();
    message.consensus_state = object.consensus_state !== undefined && object.consensus_state !== null ? Any.fromPartial(object.consensus_state) : undefined;
    return message;
  },
  fromAmino(object: ConsensusStateDataAmino): ConsensusStateData {
    const message = createBaseConsensusStateData();
    if (object.path !== undefined && object.path !== null) {
      message.path = bytesFromBase64(object.path);
    }
    if (object.consensus_state !== undefined && object.consensus_state !== null) {
      message.consensus_state = Any.fromAmino(object.consensus_state);
    }
    return message;
  },
  toAmino(message: ConsensusStateData): ConsensusStateDataAmino {
    const obj: any = {};
    obj.path = message.path ? base64FromBytes(message.path) : undefined;
    obj.consensus_state = message.consensus_state ? Any.toAmino(message.consensus_state) : undefined;
    return obj;
  },
  fromAminoMsg(object: ConsensusStateDataAminoMsg): ConsensusStateData {
    return ConsensusStateData.fromAmino(object.value);
  },
  toAminoMsg(message: ConsensusStateData): ConsensusStateDataAminoMsg {
    return {
      type: "cosmos-sdk/ConsensusStateData",
      value: ConsensusStateData.toAmino(message)
    };
  },
  fromProtoMsg(message: ConsensusStateDataProtoMsg): ConsensusStateData {
    return ConsensusStateData.decode(message.value);
  },
  toProto(message: ConsensusStateData): Uint8Array {
    return ConsensusStateData.encode(message).finish();
  },
  toProtoMsg(message: ConsensusStateData): ConsensusStateDataProtoMsg {
    return {
      typeUrl: "/ibc.lightclients.solomachine.v2.ConsensusStateData",
      value: ConsensusStateData.encode(message).finish()
    };
  }
};
function createBaseConnectionStateData(): ConnectionStateData {
  return {
    path: new Uint8Array(),
    connection: undefined
  };
}
export const ConnectionStateData = {
  typeUrl: "/ibc.lightclients.solomachine.v2.ConnectionStateData",
  encode(message: ConnectionStateData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.path.length !== 0) {
      writer.uint32(10).bytes(message.path);
    }
    if (message.connection !== undefined) {
      ConnectionEnd.encode(message.connection, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ConnectionStateData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConnectionStateData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.path = reader.bytes();
          break;
        case 2:
          message.connection = ConnectionEnd.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ConnectionStateData {
    return {
      path: isSet(object.path) ? bytesFromBase64(object.path) : new Uint8Array(),
      connection: isSet(object.connection) ? ConnectionEnd.fromJSON(object.connection) : undefined
    };
  },
  toJSON(message: ConnectionStateData): unknown {
    const obj: any = {};
    message.path !== undefined && (obj.path = base64FromBytes(message.path !== undefined ? message.path : new Uint8Array()));
    message.connection !== undefined && (obj.connection = message.connection ? ConnectionEnd.toJSON(message.connection) : undefined);
    return obj;
  },
  fromPartial(object: Partial<ConnectionStateData>): ConnectionStateData {
    const message = createBaseConnectionStateData();
    message.path = object.path ?? new Uint8Array();
    message.connection = object.connection !== undefined && object.connection !== null ? ConnectionEnd.fromPartial(object.connection) : undefined;
    return message;
  },
  fromAmino(object: ConnectionStateDataAmino): ConnectionStateData {
    const message = createBaseConnectionStateData();
    if (object.path !== undefined && object.path !== null) {
      message.path = bytesFromBase64(object.path);
    }
    if (object.connection !== undefined && object.connection !== null) {
      message.connection = ConnectionEnd.fromAmino(object.connection);
    }
    return message;
  },
  toAmino(message: ConnectionStateData): ConnectionStateDataAmino {
    const obj: any = {};
    obj.path = message.path ? base64FromBytes(message.path) : undefined;
    obj.connection = message.connection ? ConnectionEnd.toAmino(message.connection) : undefined;
    return obj;
  },
  fromAminoMsg(object: ConnectionStateDataAminoMsg): ConnectionStateData {
    return ConnectionStateData.fromAmino(object.value);
  },
  toAminoMsg(message: ConnectionStateData): ConnectionStateDataAminoMsg {
    return {
      type: "cosmos-sdk/ConnectionStateData",
      value: ConnectionStateData.toAmino(message)
    };
  },
  fromProtoMsg(message: ConnectionStateDataProtoMsg): ConnectionStateData {
    return ConnectionStateData.decode(message.value);
  },
  toProto(message: ConnectionStateData): Uint8Array {
    return ConnectionStateData.encode(message).finish();
  },
  toProtoMsg(message: ConnectionStateData): ConnectionStateDataProtoMsg {
    return {
      typeUrl: "/ibc.lightclients.solomachine.v2.ConnectionStateData",
      value: ConnectionStateData.encode(message).finish()
    };
  }
};
function createBaseChannelStateData(): ChannelStateData {
  return {
    path: new Uint8Array(),
    channel: undefined
  };
}
export const ChannelStateData = {
  typeUrl: "/ibc.lightclients.solomachine.v2.ChannelStateData",
  encode(message: ChannelStateData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.path.length !== 0) {
      writer.uint32(10).bytes(message.path);
    }
    if (message.channel !== undefined) {
      Channel.encode(message.channel, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ChannelStateData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChannelStateData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.path = reader.bytes();
          break;
        case 2:
          message.channel = Channel.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ChannelStateData {
    return {
      path: isSet(object.path) ? bytesFromBase64(object.path) : new Uint8Array(),
      channel: isSet(object.channel) ? Channel.fromJSON(object.channel) : undefined
    };
  },
  toJSON(message: ChannelStateData): unknown {
    const obj: any = {};
    message.path !== undefined && (obj.path = base64FromBytes(message.path !== undefined ? message.path : new Uint8Array()));
    message.channel !== undefined && (obj.channel = message.channel ? Channel.toJSON(message.channel) : undefined);
    return obj;
  },
  fromPartial(object: Partial<ChannelStateData>): ChannelStateData {
    const message = createBaseChannelStateData();
    message.path = object.path ?? new Uint8Array();
    message.channel = object.channel !== undefined && object.channel !== null ? Channel.fromPartial(object.channel) : undefined;
    return message;
  },
  fromAmino(object: ChannelStateDataAmino): ChannelStateData {
    const message = createBaseChannelStateData();
    if (object.path !== undefined && object.path !== null) {
      message.path = bytesFromBase64(object.path);
    }
    if (object.channel !== undefined && object.channel !== null) {
      message.channel = Channel.fromAmino(object.channel);
    }
    return message;
  },
  toAmino(message: ChannelStateData): ChannelStateDataAmino {
    const obj: any = {};
    obj.path = message.path ? base64FromBytes(message.path) : undefined;
    obj.channel = message.channel ? Channel.toAmino(message.channel) : undefined;
    return obj;
  },
  fromAminoMsg(object: ChannelStateDataAminoMsg): ChannelStateData {
    return ChannelStateData.fromAmino(object.value);
  },
  toAminoMsg(message: ChannelStateData): ChannelStateDataAminoMsg {
    return {
      type: "cosmos-sdk/ChannelStateData",
      value: ChannelStateData.toAmino(message)
    };
  },
  fromProtoMsg(message: ChannelStateDataProtoMsg): ChannelStateData {
    return ChannelStateData.decode(message.value);
  },
  toProto(message: ChannelStateData): Uint8Array {
    return ChannelStateData.encode(message).finish();
  },
  toProtoMsg(message: ChannelStateData): ChannelStateDataProtoMsg {
    return {
      typeUrl: "/ibc.lightclients.solomachine.v2.ChannelStateData",
      value: ChannelStateData.encode(message).finish()
    };
  }
};
function createBasePacketCommitmentData(): PacketCommitmentData {
  return {
    path: new Uint8Array(),
    commitment: new Uint8Array()
  };
}
export const PacketCommitmentData = {
  typeUrl: "/ibc.lightclients.solomachine.v2.PacketCommitmentData",
  encode(message: PacketCommitmentData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.path.length !== 0) {
      writer.uint32(10).bytes(message.path);
    }
    if (message.commitment.length !== 0) {
      writer.uint32(18).bytes(message.commitment);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PacketCommitmentData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePacketCommitmentData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.path = reader.bytes();
          break;
        case 2:
          message.commitment = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PacketCommitmentData {
    return {
      path: isSet(object.path) ? bytesFromBase64(object.path) : new Uint8Array(),
      commitment: isSet(object.commitment) ? bytesFromBase64(object.commitment) : new Uint8Array()
    };
  },
  toJSON(message: PacketCommitmentData): unknown {
    const obj: any = {};
    message.path !== undefined && (obj.path = base64FromBytes(message.path !== undefined ? message.path : new Uint8Array()));
    message.commitment !== undefined && (obj.commitment = base64FromBytes(message.commitment !== undefined ? message.commitment : new Uint8Array()));
    return obj;
  },
  fromPartial(object: Partial<PacketCommitmentData>): PacketCommitmentData {
    const message = createBasePacketCommitmentData();
    message.path = object.path ?? new Uint8Array();
    message.commitment = object.commitment ?? new Uint8Array();
    return message;
  },
  fromAmino(object: PacketCommitmentDataAmino): PacketCommitmentData {
    const message = createBasePacketCommitmentData();
    if (object.path !== undefined && object.path !== null) {
      message.path = bytesFromBase64(object.path);
    }
    if (object.commitment !== undefined && object.commitment !== null) {
      message.commitment = bytesFromBase64(object.commitment);
    }
    return message;
  },
  toAmino(message: PacketCommitmentData): PacketCommitmentDataAmino {
    const obj: any = {};
    obj.path = message.path ? base64FromBytes(message.path) : undefined;
    obj.commitment = message.commitment ? base64FromBytes(message.commitment) : undefined;
    return obj;
  },
  fromAminoMsg(object: PacketCommitmentDataAminoMsg): PacketCommitmentData {
    return PacketCommitmentData.fromAmino(object.value);
  },
  toAminoMsg(message: PacketCommitmentData): PacketCommitmentDataAminoMsg {
    return {
      type: "cosmos-sdk/PacketCommitmentData",
      value: PacketCommitmentData.toAmino(message)
    };
  },
  fromProtoMsg(message: PacketCommitmentDataProtoMsg): PacketCommitmentData {
    return PacketCommitmentData.decode(message.value);
  },
  toProto(message: PacketCommitmentData): Uint8Array {
    return PacketCommitmentData.encode(message).finish();
  },
  toProtoMsg(message: PacketCommitmentData): PacketCommitmentDataProtoMsg {
    return {
      typeUrl: "/ibc.lightclients.solomachine.v2.PacketCommitmentData",
      value: PacketCommitmentData.encode(message).finish()
    };
  }
};
function createBasePacketAcknowledgementData(): PacketAcknowledgementData {
  return {
    path: new Uint8Array(),
    acknowledgement: new Uint8Array()
  };
}
export const PacketAcknowledgementData = {
  typeUrl: "/ibc.lightclients.solomachine.v2.PacketAcknowledgementData",
  encode(message: PacketAcknowledgementData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.path.length !== 0) {
      writer.uint32(10).bytes(message.path);
    }
    if (message.acknowledgement.length !== 0) {
      writer.uint32(18).bytes(message.acknowledgement);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PacketAcknowledgementData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePacketAcknowledgementData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.path = reader.bytes();
          break;
        case 2:
          message.acknowledgement = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PacketAcknowledgementData {
    return {
      path: isSet(object.path) ? bytesFromBase64(object.path) : new Uint8Array(),
      acknowledgement: isSet(object.acknowledgement) ? bytesFromBase64(object.acknowledgement) : new Uint8Array()
    };
  },
  toJSON(message: PacketAcknowledgementData): unknown {
    const obj: any = {};
    message.path !== undefined && (obj.path = base64FromBytes(message.path !== undefined ? message.path : new Uint8Array()));
    message.acknowledgement !== undefined && (obj.acknowledgement = base64FromBytes(message.acknowledgement !== undefined ? message.acknowledgement : new Uint8Array()));
    return obj;
  },
  fromPartial(object: Partial<PacketAcknowledgementData>): PacketAcknowledgementData {
    const message = createBasePacketAcknowledgementData();
    message.path = object.path ?? new Uint8Array();
    message.acknowledgement = object.acknowledgement ?? new Uint8Array();
    return message;
  },
  fromAmino(object: PacketAcknowledgementDataAmino): PacketAcknowledgementData {
    const message = createBasePacketAcknowledgementData();
    if (object.path !== undefined && object.path !== null) {
      message.path = bytesFromBase64(object.path);
    }
    if (object.acknowledgement !== undefined && object.acknowledgement !== null) {
      message.acknowledgement = bytesFromBase64(object.acknowledgement);
    }
    return message;
  },
  toAmino(message: PacketAcknowledgementData): PacketAcknowledgementDataAmino {
    const obj: any = {};
    obj.path = message.path ? base64FromBytes(message.path) : undefined;
    obj.acknowledgement = message.acknowledgement ? base64FromBytes(message.acknowledgement) : undefined;
    return obj;
  },
  fromAminoMsg(object: PacketAcknowledgementDataAminoMsg): PacketAcknowledgementData {
    return PacketAcknowledgementData.fromAmino(object.value);
  },
  toAminoMsg(message: PacketAcknowledgementData): PacketAcknowledgementDataAminoMsg {
    return {
      type: "cosmos-sdk/PacketAcknowledgementData",
      value: PacketAcknowledgementData.toAmino(message)
    };
  },
  fromProtoMsg(message: PacketAcknowledgementDataProtoMsg): PacketAcknowledgementData {
    return PacketAcknowledgementData.decode(message.value);
  },
  toProto(message: PacketAcknowledgementData): Uint8Array {
    return PacketAcknowledgementData.encode(message).finish();
  },
  toProtoMsg(message: PacketAcknowledgementData): PacketAcknowledgementDataProtoMsg {
    return {
      typeUrl: "/ibc.lightclients.solomachine.v2.PacketAcknowledgementData",
      value: PacketAcknowledgementData.encode(message).finish()
    };
  }
};
function createBasePacketReceiptAbsenceData(): PacketReceiptAbsenceData {
  return {
    path: new Uint8Array()
  };
}
export const PacketReceiptAbsenceData = {
  typeUrl: "/ibc.lightclients.solomachine.v2.PacketReceiptAbsenceData",
  encode(message: PacketReceiptAbsenceData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.path.length !== 0) {
      writer.uint32(10).bytes(message.path);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PacketReceiptAbsenceData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePacketReceiptAbsenceData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.path = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PacketReceiptAbsenceData {
    return {
      path: isSet(object.path) ? bytesFromBase64(object.path) : new Uint8Array()
    };
  },
  toJSON(message: PacketReceiptAbsenceData): unknown {
    const obj: any = {};
    message.path !== undefined && (obj.path = base64FromBytes(message.path !== undefined ? message.path : new Uint8Array()));
    return obj;
  },
  fromPartial(object: Partial<PacketReceiptAbsenceData>): PacketReceiptAbsenceData {
    const message = createBasePacketReceiptAbsenceData();
    message.path = object.path ?? new Uint8Array();
    return message;
  },
  fromAmino(object: PacketReceiptAbsenceDataAmino): PacketReceiptAbsenceData {
    const message = createBasePacketReceiptAbsenceData();
    if (object.path !== undefined && object.path !== null) {
      message.path = bytesFromBase64(object.path);
    }
    return message;
  },
  toAmino(message: PacketReceiptAbsenceData): PacketReceiptAbsenceDataAmino {
    const obj: any = {};
    obj.path = message.path ? base64FromBytes(message.path) : undefined;
    return obj;
  },
  fromAminoMsg(object: PacketReceiptAbsenceDataAminoMsg): PacketReceiptAbsenceData {
    return PacketReceiptAbsenceData.fromAmino(object.value);
  },
  toAminoMsg(message: PacketReceiptAbsenceData): PacketReceiptAbsenceDataAminoMsg {
    return {
      type: "cosmos-sdk/PacketReceiptAbsenceData",
      value: PacketReceiptAbsenceData.toAmino(message)
    };
  },
  fromProtoMsg(message: PacketReceiptAbsenceDataProtoMsg): PacketReceiptAbsenceData {
    return PacketReceiptAbsenceData.decode(message.value);
  },
  toProto(message: PacketReceiptAbsenceData): Uint8Array {
    return PacketReceiptAbsenceData.encode(message).finish();
  },
  toProtoMsg(message: PacketReceiptAbsenceData): PacketReceiptAbsenceDataProtoMsg {
    return {
      typeUrl: "/ibc.lightclients.solomachine.v2.PacketReceiptAbsenceData",
      value: PacketReceiptAbsenceData.encode(message).finish()
    };
  }
};
function createBaseNextSequenceRecvData(): NextSequenceRecvData {
  return {
    path: new Uint8Array(),
    next_seq_recv: BigInt(0)
  };
}
export const NextSequenceRecvData = {
  typeUrl: "/ibc.lightclients.solomachine.v2.NextSequenceRecvData",
  encode(message: NextSequenceRecvData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.path.length !== 0) {
      writer.uint32(10).bytes(message.path);
    }
    if (message.next_seq_recv !== BigInt(0)) {
      writer.uint32(16).uint64(message.next_seq_recv);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): NextSequenceRecvData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNextSequenceRecvData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.path = reader.bytes();
          break;
        case 2:
          message.next_seq_recv = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): NextSequenceRecvData {
    return {
      path: isSet(object.path) ? bytesFromBase64(object.path) : new Uint8Array(),
      next_seq_recv: isSet(object.next_seq_recv) ? BigInt(object.next_seq_recv.toString()) : BigInt(0)
    };
  },
  toJSON(message: NextSequenceRecvData): unknown {
    const obj: any = {};
    message.path !== undefined && (obj.path = base64FromBytes(message.path !== undefined ? message.path : new Uint8Array()));
    message.next_seq_recv !== undefined && (obj.next_seq_recv = (message.next_seq_recv || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<NextSequenceRecvData>): NextSequenceRecvData {
    const message = createBaseNextSequenceRecvData();
    message.path = object.path ?? new Uint8Array();
    message.next_seq_recv = object.next_seq_recv !== undefined && object.next_seq_recv !== null ? BigInt(object.next_seq_recv.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: NextSequenceRecvDataAmino): NextSequenceRecvData {
    const message = createBaseNextSequenceRecvData();
    if (object.path !== undefined && object.path !== null) {
      message.path = bytesFromBase64(object.path);
    }
    if (object.next_seq_recv !== undefined && object.next_seq_recv !== null) {
      message.next_seq_recv = BigInt(object.next_seq_recv);
    }
    return message;
  },
  toAmino(message: NextSequenceRecvData): NextSequenceRecvDataAmino {
    const obj: any = {};
    obj.path = message.path ? base64FromBytes(message.path) : undefined;
    obj.next_seq_recv = message.next_seq_recv ? message.next_seq_recv.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: NextSequenceRecvDataAminoMsg): NextSequenceRecvData {
    return NextSequenceRecvData.fromAmino(object.value);
  },
  toAminoMsg(message: NextSequenceRecvData): NextSequenceRecvDataAminoMsg {
    return {
      type: "cosmos-sdk/NextSequenceRecvData",
      value: NextSequenceRecvData.toAmino(message)
    };
  },
  fromProtoMsg(message: NextSequenceRecvDataProtoMsg): NextSequenceRecvData {
    return NextSequenceRecvData.decode(message.value);
  },
  toProto(message: NextSequenceRecvData): Uint8Array {
    return NextSequenceRecvData.encode(message).finish();
  },
  toProtoMsg(message: NextSequenceRecvData): NextSequenceRecvDataProtoMsg {
    return {
      typeUrl: "/ibc.lightclients.solomachine.v2.NextSequenceRecvData",
      value: NextSequenceRecvData.encode(message).finish()
    };
  }
};
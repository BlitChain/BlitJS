//@ts-nocheck
import { IdentifiedChannel, IdentifiedChannelAmino, IdentifiedChannelSDKType, PacketState, PacketStateAmino, PacketStateSDKType } from "./channel";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet } from "../../../../helpers";
export const protobufPackage = "ibc.core.channel.v1";
/** GenesisState defines the ibc channel submodule's genesis state. */
export interface GenesisState {
  channels: IdentifiedChannel[];
  acknowledgements: PacketState[];
  commitments: PacketState[];
  receipts: PacketState[];
  send_sequences: PacketSequence[];
  recv_sequences: PacketSequence[];
  ack_sequences: PacketSequence[];
  /** the sequence for the next generated channel identifier */
  next_channel_sequence: bigint;
}
export interface GenesisStateProtoMsg {
  type_url: "/ibc.core.channel.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the ibc channel submodule's genesis state. */
export interface GenesisStateAmino {
  channels?: IdentifiedChannelAmino[];
  acknowledgements?: PacketStateAmino[];
  commitments?: PacketStateAmino[];
  receipts?: PacketStateAmino[];
  send_sequences?: PacketSequenceAmino[];
  recv_sequences?: PacketSequenceAmino[];
  ack_sequences?: PacketSequenceAmino[];
  /** the sequence for the next generated channel identifier */
  next_channel_sequence?: string;
}
export interface GenesisStateAminoMsg {
  type: "cosmos-sdk/GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the ibc channel submodule's genesis state. */
export interface GenesisStateSDKType {
  channels: IdentifiedChannelSDKType[];
  acknowledgements: PacketStateSDKType[];
  commitments: PacketStateSDKType[];
  receipts: PacketStateSDKType[];
  send_sequences: PacketSequenceSDKType[];
  recv_sequences: PacketSequenceSDKType[];
  ack_sequences: PacketSequenceSDKType[];
  next_channel_sequence: bigint;
}
/**
 * PacketSequence defines the genesis type necessary to retrieve and store
 * next send and receive sequences.
 */
export interface PacketSequence {
  port_id: string;
  channel_id: string;
  sequence: bigint;
}
export interface PacketSequenceProtoMsg {
  type_url: "/ibc.core.channel.v1.PacketSequence";
  value: Uint8Array;
}
/**
 * PacketSequence defines the genesis type necessary to retrieve and store
 * next send and receive sequences.
 */
export interface PacketSequenceAmino {
  port_id?: string;
  channel_id?: string;
  sequence?: string;
}
export interface PacketSequenceAminoMsg {
  type: "cosmos-sdk/PacketSequence";
  value: PacketSequenceAmino;
}
/**
 * PacketSequence defines the genesis type necessary to retrieve and store
 * next send and receive sequences.
 */
export interface PacketSequenceSDKType {
  port_id: string;
  channel_id: string;
  sequence: bigint;
}
function createBaseGenesisState(): GenesisState {
  return {
    channels: [],
    acknowledgements: [],
    commitments: [],
    receipts: [],
    send_sequences: [],
    recv_sequences: [],
    ack_sequences: [],
    next_channel_sequence: BigInt(0)
  };
}
export const GenesisState = {
  typeUrl: "/ibc.core.channel.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.channels) {
      IdentifiedChannel.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.acknowledgements) {
      PacketState.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.commitments) {
      PacketState.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.receipts) {
      PacketState.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.send_sequences) {
      PacketSequence.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.recv_sequences) {
      PacketSequence.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.ack_sequences) {
      PacketSequence.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.next_channel_sequence !== BigInt(0)) {
      writer.uint32(64).uint64(message.next_channel_sequence);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channels.push(IdentifiedChannel.decode(reader, reader.uint32()));
          break;
        case 2:
          message.acknowledgements.push(PacketState.decode(reader, reader.uint32()));
          break;
        case 3:
          message.commitments.push(PacketState.decode(reader, reader.uint32()));
          break;
        case 4:
          message.receipts.push(PacketState.decode(reader, reader.uint32()));
          break;
        case 5:
          message.send_sequences.push(PacketSequence.decode(reader, reader.uint32()));
          break;
        case 6:
          message.recv_sequences.push(PacketSequence.decode(reader, reader.uint32()));
          break;
        case 7:
          message.ack_sequences.push(PacketSequence.decode(reader, reader.uint32()));
          break;
        case 8:
          message.next_channel_sequence = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    return {
      channels: Array.isArray(object?.channels) ? object.channels.map((e: any) => IdentifiedChannel.fromJSON(e)) : [],
      acknowledgements: Array.isArray(object?.acknowledgements) ? object.acknowledgements.map((e: any) => PacketState.fromJSON(e)) : [],
      commitments: Array.isArray(object?.commitments) ? object.commitments.map((e: any) => PacketState.fromJSON(e)) : [],
      receipts: Array.isArray(object?.receipts) ? object.receipts.map((e: any) => PacketState.fromJSON(e)) : [],
      send_sequences: Array.isArray(object?.send_sequences) ? object.send_sequences.map((e: any) => PacketSequence.fromJSON(e)) : [],
      recv_sequences: Array.isArray(object?.recv_sequences) ? object.recv_sequences.map((e: any) => PacketSequence.fromJSON(e)) : [],
      ack_sequences: Array.isArray(object?.ack_sequences) ? object.ack_sequences.map((e: any) => PacketSequence.fromJSON(e)) : [],
      next_channel_sequence: isSet(object.next_channel_sequence) ? BigInt(object.next_channel_sequence.toString()) : BigInt(0)
    };
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.channels) {
      obj.channels = message.channels.map(e => e ? IdentifiedChannel.toJSON(e) : undefined);
    } else {
      obj.channels = [];
    }
    if (message.acknowledgements) {
      obj.acknowledgements = message.acknowledgements.map(e => e ? PacketState.toJSON(e) : undefined);
    } else {
      obj.acknowledgements = [];
    }
    if (message.commitments) {
      obj.commitments = message.commitments.map(e => e ? PacketState.toJSON(e) : undefined);
    } else {
      obj.commitments = [];
    }
    if (message.receipts) {
      obj.receipts = message.receipts.map(e => e ? PacketState.toJSON(e) : undefined);
    } else {
      obj.receipts = [];
    }
    if (message.send_sequences) {
      obj.send_sequences = message.send_sequences.map(e => e ? PacketSequence.toJSON(e) : undefined);
    } else {
      obj.send_sequences = [];
    }
    if (message.recv_sequences) {
      obj.recv_sequences = message.recv_sequences.map(e => e ? PacketSequence.toJSON(e) : undefined);
    } else {
      obj.recv_sequences = [];
    }
    if (message.ack_sequences) {
      obj.ack_sequences = message.ack_sequences.map(e => e ? PacketSequence.toJSON(e) : undefined);
    } else {
      obj.ack_sequences = [];
    }
    message.next_channel_sequence !== undefined && (obj.next_channel_sequence = (message.next_channel_sequence || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.channels = object.channels?.map(e => IdentifiedChannel.fromPartial(e)) || [];
    message.acknowledgements = object.acknowledgements?.map(e => PacketState.fromPartial(e)) || [];
    message.commitments = object.commitments?.map(e => PacketState.fromPartial(e)) || [];
    message.receipts = object.receipts?.map(e => PacketState.fromPartial(e)) || [];
    message.send_sequences = object.send_sequences?.map(e => PacketSequence.fromPartial(e)) || [];
    message.recv_sequences = object.recv_sequences?.map(e => PacketSequence.fromPartial(e)) || [];
    message.ack_sequences = object.ack_sequences?.map(e => PacketSequence.fromPartial(e)) || [];
    message.next_channel_sequence = object.next_channel_sequence !== undefined && object.next_channel_sequence !== null ? BigInt(object.next_channel_sequence.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    message.channels = object.channels?.map(e => IdentifiedChannel.fromAmino(e)) || [];
    message.acknowledgements = object.acknowledgements?.map(e => PacketState.fromAmino(e)) || [];
    message.commitments = object.commitments?.map(e => PacketState.fromAmino(e)) || [];
    message.receipts = object.receipts?.map(e => PacketState.fromAmino(e)) || [];
    message.send_sequences = object.send_sequences?.map(e => PacketSequence.fromAmino(e)) || [];
    message.recv_sequences = object.recv_sequences?.map(e => PacketSequence.fromAmino(e)) || [];
    message.ack_sequences = object.ack_sequences?.map(e => PacketSequence.fromAmino(e)) || [];
    if (object.next_channel_sequence !== undefined && object.next_channel_sequence !== null) {
      message.next_channel_sequence = BigInt(object.next_channel_sequence);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.channels) {
      obj.channels = message.channels.map(e => e ? IdentifiedChannel.toAmino(e) : undefined);
    } else {
      obj.channels = [];
    }
    if (message.acknowledgements) {
      obj.acknowledgements = message.acknowledgements.map(e => e ? PacketState.toAmino(e) : undefined);
    } else {
      obj.acknowledgements = [];
    }
    if (message.commitments) {
      obj.commitments = message.commitments.map(e => e ? PacketState.toAmino(e) : undefined);
    } else {
      obj.commitments = [];
    }
    if (message.receipts) {
      obj.receipts = message.receipts.map(e => e ? PacketState.toAmino(e) : undefined);
    } else {
      obj.receipts = [];
    }
    if (message.send_sequences) {
      obj.send_sequences = message.send_sequences.map(e => e ? PacketSequence.toAmino(e) : undefined);
    } else {
      obj.send_sequences = [];
    }
    if (message.recv_sequences) {
      obj.recv_sequences = message.recv_sequences.map(e => e ? PacketSequence.toAmino(e) : undefined);
    } else {
      obj.recv_sequences = [];
    }
    if (message.ack_sequences) {
      obj.ack_sequences = message.ack_sequences.map(e => e ? PacketSequence.toAmino(e) : undefined);
    } else {
      obj.ack_sequences = [];
    }
    obj.next_channel_sequence = message.next_channel_sequence ? message.next_channel_sequence.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  toAminoMsg(message: GenesisState): GenesisStateAminoMsg {
    return {
      type: "cosmos-sdk/GenesisState",
      value: GenesisState.toAmino(message)
    };
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
function createBasePacketSequence(): PacketSequence {
  return {
    port_id: "",
    channel_id: "",
    sequence: BigInt(0)
  };
}
export const PacketSequence = {
  typeUrl: "/ibc.core.channel.v1.PacketSequence",
  encode(message: PacketSequence, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): PacketSequence {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePacketSequence();
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
  fromJSON(object: any): PacketSequence {
    return {
      port_id: isSet(object.port_id) ? String(object.port_id) : "",
      channel_id: isSet(object.channel_id) ? String(object.channel_id) : "",
      sequence: isSet(object.sequence) ? BigInt(object.sequence.toString()) : BigInt(0)
    };
  },
  toJSON(message: PacketSequence): unknown {
    const obj: any = {};
    message.port_id !== undefined && (obj.port_id = message.port_id);
    message.channel_id !== undefined && (obj.channel_id = message.channel_id);
    message.sequence !== undefined && (obj.sequence = (message.sequence || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<PacketSequence>): PacketSequence {
    const message = createBasePacketSequence();
    message.port_id = object.port_id ?? "";
    message.channel_id = object.channel_id ?? "";
    message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: PacketSequenceAmino): PacketSequence {
    const message = createBasePacketSequence();
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
  toAmino(message: PacketSequence): PacketSequenceAmino {
    const obj: any = {};
    obj.port_id = message.port_id;
    obj.channel_id = message.channel_id;
    obj.sequence = message.sequence ? message.sequence.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: PacketSequenceAminoMsg): PacketSequence {
    return PacketSequence.fromAmino(object.value);
  },
  toAminoMsg(message: PacketSequence): PacketSequenceAminoMsg {
    return {
      type: "cosmos-sdk/PacketSequence",
      value: PacketSequence.toAmino(message)
    };
  },
  fromProtoMsg(message: PacketSequenceProtoMsg): PacketSequence {
    return PacketSequence.decode(message.value);
  },
  toProto(message: PacketSequence): Uint8Array {
    return PacketSequence.encode(message).finish();
  },
  toProtoMsg(message: PacketSequence): PacketSequenceProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.PacketSequence",
      value: PacketSequence.encode(message).finish()
    };
  }
};
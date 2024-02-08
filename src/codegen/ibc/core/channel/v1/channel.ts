//@ts-nocheck
import { Height, HeightAmino, HeightSDKType } from "../../client/v1/client";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../../helpers";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { GlobalDecoderRegistry } from "../../../../registry";
export const protobufPackage = "ibc.core.channel.v1";
/**
 * State defines if a channel is in one of the following states:
 * CLOSED, INIT, TRYOPEN, OPEN or UNINITIALIZED.
 */
export enum State {
  /** STATE_UNINITIALIZED_UNSPECIFIED - Default State */
  STATE_UNINITIALIZED_UNSPECIFIED = 0,
  /** STATE_INIT - A channel has just started the opening handshake. */
  STATE_INIT = 1,
  /** STATE_TRYOPEN - A channel has acknowledged the handshake step on the counterparty chain. */
  STATE_TRYOPEN = 2,
  /**
   * STATE_OPEN - A channel has completed the handshake. Open channels are
   * ready to send and receive packets.
   */
  STATE_OPEN = 3,
  /**
   * STATE_CLOSED - A channel has been closed and can no longer be used to send or receive
   * packets.
   */
  STATE_CLOSED = 4,
  UNRECOGNIZED = -1,
}
export const StateSDKType = State;
export const StateAmino = State;
export function stateFromJSON(object: any): State {
  switch (object) {
    case 0:
    case "STATE_UNINITIALIZED_UNSPECIFIED":
      return State.STATE_UNINITIALIZED_UNSPECIFIED;
    case 1:
    case "STATE_INIT":
      return State.STATE_INIT;
    case 2:
    case "STATE_TRYOPEN":
      return State.STATE_TRYOPEN;
    case 3:
    case "STATE_OPEN":
      return State.STATE_OPEN;
    case 4:
    case "STATE_CLOSED":
      return State.STATE_CLOSED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return State.UNRECOGNIZED;
  }
}
export function stateToJSON(object: State): string {
  switch (object) {
    case State.STATE_UNINITIALIZED_UNSPECIFIED:
      return "STATE_UNINITIALIZED_UNSPECIFIED";
    case State.STATE_INIT:
      return "STATE_INIT";
    case State.STATE_TRYOPEN:
      return "STATE_TRYOPEN";
    case State.STATE_OPEN:
      return "STATE_OPEN";
    case State.STATE_CLOSED:
      return "STATE_CLOSED";
    case State.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** Order defines if a channel is ORDERED or UNORDERED */
export enum Order {
  /** ORDER_NONE_UNSPECIFIED - zero-value for channel ordering */
  ORDER_NONE_UNSPECIFIED = 0,
  /**
   * ORDER_UNORDERED - packets can be delivered in any order, which may differ from the order in
   * which they were sent.
   */
  ORDER_UNORDERED = 1,
  /** ORDER_ORDERED - packets are delivered exactly in the order which they were sent */
  ORDER_ORDERED = 2,
  UNRECOGNIZED = -1,
}
export const OrderSDKType = Order;
export const OrderAmino = Order;
export function orderFromJSON(object: any): Order {
  switch (object) {
    case 0:
    case "ORDER_NONE_UNSPECIFIED":
      return Order.ORDER_NONE_UNSPECIFIED;
    case 1:
    case "ORDER_UNORDERED":
      return Order.ORDER_UNORDERED;
    case 2:
    case "ORDER_ORDERED":
      return Order.ORDER_ORDERED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Order.UNRECOGNIZED;
  }
}
export function orderToJSON(object: Order): string {
  switch (object) {
    case Order.ORDER_NONE_UNSPECIFIED:
      return "ORDER_NONE_UNSPECIFIED";
    case Order.ORDER_UNORDERED:
      return "ORDER_UNORDERED";
    case Order.ORDER_ORDERED:
      return "ORDER_ORDERED";
    case Order.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * Channel defines pipeline for exactly-once packet delivery between specific
 * modules on separate blockchains, which has at least one end capable of
 * sending packets and one end capable of receiving packets.
 */
export interface Channel {
  /** current state of the channel end */
  state: State;
  /** whether the channel is ordered or unordered */
  ordering: Order;
  /** counterparty channel end */
  counterparty: Counterparty;
  /**
   * list of connection identifiers, in order, along which packets sent on
   * this channel will travel
   */
  connection_hops: string[];
  /** opaque channel version, which is agreed upon during the handshake */
  version: string;
}
export interface ChannelProtoMsg {
  type_url: "/ibc.core.channel.v1.Channel";
  value: Uint8Array;
}
/**
 * Channel defines pipeline for exactly-once packet delivery between specific
 * modules on separate blockchains, which has at least one end capable of
 * sending packets and one end capable of receiving packets.
 */
export interface ChannelAmino {
  /** current state of the channel end */
  state?: State;
  /** whether the channel is ordered or unordered */
  ordering?: Order;
  /** counterparty channel end */
  counterparty?: CounterpartyAmino;
  /**
   * list of connection identifiers, in order, along which packets sent on
   * this channel will travel
   */
  connection_hops?: string[];
  /** opaque channel version, which is agreed upon during the handshake */
  version?: string;
}
export interface ChannelAminoMsg {
  type: "cosmos-sdk/Channel";
  value: ChannelAmino;
}
/**
 * Channel defines pipeline for exactly-once packet delivery between specific
 * modules on separate blockchains, which has at least one end capable of
 * sending packets and one end capable of receiving packets.
 */
export interface ChannelSDKType {
  state: State;
  ordering: Order;
  counterparty: CounterpartySDKType;
  connection_hops: string[];
  version: string;
}
/**
 * IdentifiedChannel defines a channel with additional port and channel
 * identifier fields.
 */
export interface IdentifiedChannel {
  /** current state of the channel end */
  state: State;
  /** whether the channel is ordered or unordered */
  ordering: Order;
  /** counterparty channel end */
  counterparty: Counterparty;
  /**
   * list of connection identifiers, in order, along which packets sent on
   * this channel will travel
   */
  connection_hops: string[];
  /** opaque channel version, which is agreed upon during the handshake */
  version: string;
  /** port identifier */
  port_id: string;
  /** channel identifier */
  channel_id: string;
}
export interface IdentifiedChannelProtoMsg {
  type_url: "/ibc.core.channel.v1.IdentifiedChannel";
  value: Uint8Array;
}
/**
 * IdentifiedChannel defines a channel with additional port and channel
 * identifier fields.
 */
export interface IdentifiedChannelAmino {
  /** current state of the channel end */
  state?: State;
  /** whether the channel is ordered or unordered */
  ordering?: Order;
  /** counterparty channel end */
  counterparty?: CounterpartyAmino;
  /**
   * list of connection identifiers, in order, along which packets sent on
   * this channel will travel
   */
  connection_hops?: string[];
  /** opaque channel version, which is agreed upon during the handshake */
  version?: string;
  /** port identifier */
  port_id?: string;
  /** channel identifier */
  channel_id?: string;
}
export interface IdentifiedChannelAminoMsg {
  type: "cosmos-sdk/IdentifiedChannel";
  value: IdentifiedChannelAmino;
}
/**
 * IdentifiedChannel defines a channel with additional port and channel
 * identifier fields.
 */
export interface IdentifiedChannelSDKType {
  state: State;
  ordering: Order;
  counterparty: CounterpartySDKType;
  connection_hops: string[];
  version: string;
  port_id: string;
  channel_id: string;
}
/** Counterparty defines a channel end counterparty */
export interface Counterparty {
  /** port on the counterparty chain which owns the other end of the channel. */
  port_id: string;
  /** channel end on the counterparty chain */
  channel_id: string;
}
export interface CounterpartyProtoMsg {
  type_url: "/ibc.core.channel.v1.Counterparty";
  value: Uint8Array;
}
/** Counterparty defines a channel end counterparty */
export interface CounterpartyAmino {
  /** port on the counterparty chain which owns the other end of the channel. */
  port_id?: string;
  /** channel end on the counterparty chain */
  channel_id?: string;
}
export interface CounterpartyAminoMsg {
  type: "cosmos-sdk/Counterparty";
  value: CounterpartyAmino;
}
/** Counterparty defines a channel end counterparty */
export interface CounterpartySDKType {
  port_id: string;
  channel_id: string;
}
/** Packet defines a type that carries data across different chains through IBC */
export interface Packet {
  /**
   * number corresponds to the order of sends and receives, where a Packet
   * with an earlier sequence number must be sent and received before a Packet
   * with a later sequence number.
   */
  sequence: bigint;
  /** identifies the port on the sending chain. */
  source_port: string;
  /** identifies the channel end on the sending chain. */
  source_channel: string;
  /** identifies the port on the receiving chain. */
  destination_port: string;
  /** identifies the channel end on the receiving chain. */
  destination_channel: string;
  /** actual opaque bytes transferred directly to the application module */
  data: Uint8Array;
  /** block height after which the packet times out */
  timeout_height: Height;
  /** block timestamp (in nanoseconds) after which the packet times out */
  timeout_timestamp: bigint;
}
export interface PacketProtoMsg {
  type_url: "/ibc.core.channel.v1.Packet";
  value: Uint8Array;
}
/** Packet defines a type that carries data across different chains through IBC */
export interface PacketAmino {
  /**
   * number corresponds to the order of sends and receives, where a Packet
   * with an earlier sequence number must be sent and received before a Packet
   * with a later sequence number.
   */
  sequence?: string;
  /** identifies the port on the sending chain. */
  source_port?: string;
  /** identifies the channel end on the sending chain. */
  source_channel?: string;
  /** identifies the port on the receiving chain. */
  destination_port?: string;
  /** identifies the channel end on the receiving chain. */
  destination_channel?: string;
  /** actual opaque bytes transferred directly to the application module */
  data?: string;
  /** block height after which the packet times out */
  timeout_height?: HeightAmino;
  /** block timestamp (in nanoseconds) after which the packet times out */
  timeout_timestamp?: string;
}
export interface PacketAminoMsg {
  type: "cosmos-sdk/Packet";
  value: PacketAmino;
}
/** Packet defines a type that carries data across different chains through IBC */
export interface PacketSDKType {
  sequence: bigint;
  source_port: string;
  source_channel: string;
  destination_port: string;
  destination_channel: string;
  data: Uint8Array;
  timeout_height: HeightSDKType;
  timeout_timestamp: bigint;
}
/**
 * PacketState defines the generic type necessary to retrieve and store
 * packet commitments, acknowledgements, and receipts.
 * Caller is responsible for knowing the context necessary to interpret this
 * state as a commitment, acknowledgement, or a receipt.
 */
export interface PacketState {
  /** channel port identifier. */
  port_id: string;
  /** channel unique identifier. */
  channel_id: string;
  /** packet sequence. */
  sequence: bigint;
  /** embedded data that represents packet state. */
  data: Uint8Array;
}
export interface PacketStateProtoMsg {
  type_url: "/ibc.core.channel.v1.PacketState";
  value: Uint8Array;
}
/**
 * PacketState defines the generic type necessary to retrieve and store
 * packet commitments, acknowledgements, and receipts.
 * Caller is responsible for knowing the context necessary to interpret this
 * state as a commitment, acknowledgement, or a receipt.
 */
export interface PacketStateAmino {
  /** channel port identifier. */
  port_id?: string;
  /** channel unique identifier. */
  channel_id?: string;
  /** packet sequence. */
  sequence?: string;
  /** embedded data that represents packet state. */
  data?: string;
}
export interface PacketStateAminoMsg {
  type: "cosmos-sdk/PacketState";
  value: PacketStateAmino;
}
/**
 * PacketState defines the generic type necessary to retrieve and store
 * packet commitments, acknowledgements, and receipts.
 * Caller is responsible for knowing the context necessary to interpret this
 * state as a commitment, acknowledgement, or a receipt.
 */
export interface PacketStateSDKType {
  port_id: string;
  channel_id: string;
  sequence: bigint;
  data: Uint8Array;
}
/**
 * PacketId is an identifer for a unique Packet
 * Source chains refer to packets by source port/channel
 * Destination chains refer to packets by destination port/channel
 */
export interface PacketId {
  /** channel port identifier */
  port_id: string;
  /** channel unique identifier */
  channel_id: string;
  /** packet sequence */
  sequence: bigint;
}
export interface PacketIdProtoMsg {
  type_url: "/ibc.core.channel.v1.PacketId";
  value: Uint8Array;
}
/**
 * PacketId is an identifer for a unique Packet
 * Source chains refer to packets by source port/channel
 * Destination chains refer to packets by destination port/channel
 */
export interface PacketIdAmino {
  /** channel port identifier */
  port_id?: string;
  /** channel unique identifier */
  channel_id?: string;
  /** packet sequence */
  sequence?: string;
}
export interface PacketIdAminoMsg {
  type: "cosmos-sdk/PacketId";
  value: PacketIdAmino;
}
/**
 * PacketId is an identifer for a unique Packet
 * Source chains refer to packets by source port/channel
 * Destination chains refer to packets by destination port/channel
 */
export interface PacketIdSDKType {
  port_id: string;
  channel_id: string;
  sequence: bigint;
}
/**
 * Acknowledgement is the recommended acknowledgement format to be used by
 * app-specific protocols.
 * NOTE: The field numbers 21 and 22 were explicitly chosen to avoid accidental
 * conflicts with other protobuf message formats used for acknowledgements.
 * The first byte of any message with this format will be the non-ASCII values
 * `0xaa` (result) or `0xb2` (error). Implemented as defined by ICS:
 * https://github.com/cosmos/ibc/tree/master/spec/core/ics-004-channel-and-packet-semantics#acknowledgement-envelope
 */
export interface Acknowledgement {
  result?: Uint8Array;
  error?: string;
}
export interface AcknowledgementProtoMsg {
  type_url: "/ibc.core.channel.v1.Acknowledgement";
  value: Uint8Array;
}
/**
 * Acknowledgement is the recommended acknowledgement format to be used by
 * app-specific protocols.
 * NOTE: The field numbers 21 and 22 were explicitly chosen to avoid accidental
 * conflicts with other protobuf message formats used for acknowledgements.
 * The first byte of any message with this format will be the non-ASCII values
 * `0xaa` (result) or `0xb2` (error). Implemented as defined by ICS:
 * https://github.com/cosmos/ibc/tree/master/spec/core/ics-004-channel-and-packet-semantics#acknowledgement-envelope
 */
export interface AcknowledgementAmino {
  result?: string;
  error?: string;
}
export interface AcknowledgementAminoMsg {
  type: "cosmos-sdk/Acknowledgement";
  value: AcknowledgementAmino;
}
/**
 * Acknowledgement is the recommended acknowledgement format to be used by
 * app-specific protocols.
 * NOTE: The field numbers 21 and 22 were explicitly chosen to avoid accidental
 * conflicts with other protobuf message formats used for acknowledgements.
 * The first byte of any message with this format will be the non-ASCII values
 * `0xaa` (result) or `0xb2` (error). Implemented as defined by ICS:
 * https://github.com/cosmos/ibc/tree/master/spec/core/ics-004-channel-and-packet-semantics#acknowledgement-envelope
 */
export interface AcknowledgementSDKType {
  result?: Uint8Array;
  error?: string;
}
/**
 * Timeout defines an execution deadline structure for 04-channel handlers.
 * This includes packet lifecycle handlers as well as the upgrade handshake handlers.
 * A valid Timeout contains either one or both of a timestamp and block height (sequence).
 */
export interface Timeout {
  /** block height after which the packet or upgrade times out */
  height: Height;
  /** block timestamp (in nanoseconds) after which the packet or upgrade times out */
  timestamp: bigint;
}
export interface TimeoutProtoMsg {
  type_url: "/ibc.core.channel.v1.Timeout";
  value: Uint8Array;
}
/**
 * Timeout defines an execution deadline structure for 04-channel handlers.
 * This includes packet lifecycle handlers as well as the upgrade handshake handlers.
 * A valid Timeout contains either one or both of a timestamp and block height (sequence).
 */
export interface TimeoutAmino {
  /** block height after which the packet or upgrade times out */
  height?: HeightAmino;
  /** block timestamp (in nanoseconds) after which the packet or upgrade times out */
  timestamp?: string;
}
export interface TimeoutAminoMsg {
  type: "cosmos-sdk/Timeout";
  value: TimeoutAmino;
}
/**
 * Timeout defines an execution deadline structure for 04-channel handlers.
 * This includes packet lifecycle handlers as well as the upgrade handshake handlers.
 * A valid Timeout contains either one or both of a timestamp and block height (sequence).
 */
export interface TimeoutSDKType {
  height: HeightSDKType;
  timestamp: bigint;
}
function createBaseChannel(): Channel {
  return {
    state: 0,
    ordering: 0,
    counterparty: Counterparty.fromPartial({}),
    connection_hops: [],
    version: ""
  };
}
export const Channel = {
  typeUrl: "/ibc.core.channel.v1.Channel",
  aminoType: "cosmos-sdk/Channel",
  is(o: any): o is Channel {
    return o && (o.$typeUrl === Channel.typeUrl || isSet(o.state) && isSet(o.ordering) && Counterparty.is(o.counterparty) && Array.isArray(o.connection_hops) && (!o.connection_hops.length || typeof o.connection_hops[0] === "string") && typeof o.version === "string");
  },
  isSDK(o: any): o is ChannelSDKType {
    return o && (o.$typeUrl === Channel.typeUrl || isSet(o.state) && isSet(o.ordering) && Counterparty.isSDK(o.counterparty) && Array.isArray(o.connection_hops) && (!o.connection_hops.length || typeof o.connection_hops[0] === "string") && typeof o.version === "string");
  },
  isAmino(o: any): o is ChannelAmino {
    return o && (o.$typeUrl === Channel.typeUrl || isSet(o.state) && isSet(o.ordering) && Counterparty.isAmino(o.counterparty) && Array.isArray(o.connection_hops) && (!o.connection_hops.length || typeof o.connection_hops[0] === "string") && typeof o.version === "string");
  },
  encode(message: Channel, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.state !== 0) {
      writer.uint32(8).int32(message.state);
    }
    if (message.ordering !== 0) {
      writer.uint32(16).int32(message.ordering);
    }
    if (message.counterparty !== undefined) {
      Counterparty.encode(message.counterparty, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.connection_hops) {
      writer.uint32(34).string(v!);
    }
    if (message.version !== "") {
      writer.uint32(42).string(message.version);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Channel {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChannel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.state = (reader.int32() as any);
          break;
        case 2:
          message.ordering = (reader.int32() as any);
          break;
        case 3:
          message.counterparty = Counterparty.decode(reader, reader.uint32());
          break;
        case 4:
          message.connection_hops.push(reader.string());
          break;
        case 5:
          message.version = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Channel {
    return {
      state: isSet(object.state) ? stateFromJSON(object.state) : -1,
      ordering: isSet(object.ordering) ? orderFromJSON(object.ordering) : -1,
      counterparty: isSet(object.counterparty) ? Counterparty.fromJSON(object.counterparty) : undefined,
      connection_hops: Array.isArray(object?.connection_hops) ? object.connection_hops.map((e: any) => String(e)) : [],
      version: isSet(object.version) ? String(object.version) : ""
    };
  },
  toJSON(message: Channel): unknown {
    const obj: any = {};
    message.state !== undefined && (obj.state = stateToJSON(message.state));
    message.ordering !== undefined && (obj.ordering = orderToJSON(message.ordering));
    message.counterparty !== undefined && (obj.counterparty = message.counterparty ? Counterparty.toJSON(message.counterparty) : undefined);
    if (message.connection_hops) {
      obj.connection_hops = message.connection_hops.map(e => e);
    } else {
      obj.connection_hops = [];
    }
    message.version !== undefined && (obj.version = message.version);
    return obj;
  },
  fromPartial(object: Partial<Channel>): Channel {
    const message = createBaseChannel();
    message.state = object.state ?? 0;
    message.ordering = object.ordering ?? 0;
    message.counterparty = object.counterparty !== undefined && object.counterparty !== null ? Counterparty.fromPartial(object.counterparty) : undefined;
    message.connection_hops = object.connection_hops?.map(e => e) || [];
    message.version = object.version ?? "";
    return message;
  },
  fromAmino(object: ChannelAmino): Channel {
    const message = createBaseChannel();
    if (object.state !== undefined && object.state !== null) {
      message.state = stateFromJSON(object.state);
    }
    if (object.ordering !== undefined && object.ordering !== null) {
      message.ordering = orderFromJSON(object.ordering);
    }
    if (object.counterparty !== undefined && object.counterparty !== null) {
      message.counterparty = Counterparty.fromAmino(object.counterparty);
    }
    message.connection_hops = object.connection_hops?.map(e => e) || [];
    if (object.version !== undefined && object.version !== null) {
      message.version = object.version;
    }
    return message;
  },
  toAmino(message: Channel): ChannelAmino {
    const obj: any = {};
    obj.state = message.state;
    obj.ordering = message.ordering;
    obj.counterparty = message.counterparty ? Counterparty.toAmino(message.counterparty) : undefined;
    if (message.connection_hops) {
      obj.connection_hops = message.connection_hops.map(e => e);
    } else {
      obj.connection_hops = [];
    }
    obj.version = message.version;
    return obj;
  },
  fromAminoMsg(object: ChannelAminoMsg): Channel {
    return Channel.fromAmino(object.value);
  },
  toAminoMsg(message: Channel): ChannelAminoMsg {
    return {
      type: "cosmos-sdk/Channel",
      value: Channel.toAmino(message)
    };
  },
  fromProtoMsg(message: ChannelProtoMsg): Channel {
    return Channel.decode(message.value);
  },
  toProto(message: Channel): Uint8Array {
    return Channel.encode(message).finish();
  },
  toProtoMsg(message: Channel): ChannelProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.Channel",
      value: Channel.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Channel.typeUrl, Channel);
GlobalDecoderRegistry.registerAminoProtoMapping(Channel.aminoType, Channel.typeUrl);
function createBaseIdentifiedChannel(): IdentifiedChannel {
  return {
    state: 0,
    ordering: 0,
    counterparty: Counterparty.fromPartial({}),
    connection_hops: [],
    version: "",
    port_id: "",
    channel_id: ""
  };
}
export const IdentifiedChannel = {
  typeUrl: "/ibc.core.channel.v1.IdentifiedChannel",
  aminoType: "cosmos-sdk/IdentifiedChannel",
  is(o: any): o is IdentifiedChannel {
    return o && (o.$typeUrl === IdentifiedChannel.typeUrl || isSet(o.state) && isSet(o.ordering) && Counterparty.is(o.counterparty) && Array.isArray(o.connection_hops) && (!o.connection_hops.length || typeof o.connection_hops[0] === "string") && typeof o.version === "string" && typeof o.port_id === "string" && typeof o.channel_id === "string");
  },
  isSDK(o: any): o is IdentifiedChannelSDKType {
    return o && (o.$typeUrl === IdentifiedChannel.typeUrl || isSet(o.state) && isSet(o.ordering) && Counterparty.isSDK(o.counterparty) && Array.isArray(o.connection_hops) && (!o.connection_hops.length || typeof o.connection_hops[0] === "string") && typeof o.version === "string" && typeof o.port_id === "string" && typeof o.channel_id === "string");
  },
  isAmino(o: any): o is IdentifiedChannelAmino {
    return o && (o.$typeUrl === IdentifiedChannel.typeUrl || isSet(o.state) && isSet(o.ordering) && Counterparty.isAmino(o.counterparty) && Array.isArray(o.connection_hops) && (!o.connection_hops.length || typeof o.connection_hops[0] === "string") && typeof o.version === "string" && typeof o.port_id === "string" && typeof o.channel_id === "string");
  },
  encode(message: IdentifiedChannel, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.state !== 0) {
      writer.uint32(8).int32(message.state);
    }
    if (message.ordering !== 0) {
      writer.uint32(16).int32(message.ordering);
    }
    if (message.counterparty !== undefined) {
      Counterparty.encode(message.counterparty, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.connection_hops) {
      writer.uint32(34).string(v!);
    }
    if (message.version !== "") {
      writer.uint32(42).string(message.version);
    }
    if (message.port_id !== "") {
      writer.uint32(50).string(message.port_id);
    }
    if (message.channel_id !== "") {
      writer.uint32(58).string(message.channel_id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): IdentifiedChannel {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIdentifiedChannel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.state = (reader.int32() as any);
          break;
        case 2:
          message.ordering = (reader.int32() as any);
          break;
        case 3:
          message.counterparty = Counterparty.decode(reader, reader.uint32());
          break;
        case 4:
          message.connection_hops.push(reader.string());
          break;
        case 5:
          message.version = reader.string();
          break;
        case 6:
          message.port_id = reader.string();
          break;
        case 7:
          message.channel_id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): IdentifiedChannel {
    return {
      state: isSet(object.state) ? stateFromJSON(object.state) : -1,
      ordering: isSet(object.ordering) ? orderFromJSON(object.ordering) : -1,
      counterparty: isSet(object.counterparty) ? Counterparty.fromJSON(object.counterparty) : undefined,
      connection_hops: Array.isArray(object?.connection_hops) ? object.connection_hops.map((e: any) => String(e)) : [],
      version: isSet(object.version) ? String(object.version) : "",
      port_id: isSet(object.port_id) ? String(object.port_id) : "",
      channel_id: isSet(object.channel_id) ? String(object.channel_id) : ""
    };
  },
  toJSON(message: IdentifiedChannel): unknown {
    const obj: any = {};
    message.state !== undefined && (obj.state = stateToJSON(message.state));
    message.ordering !== undefined && (obj.ordering = orderToJSON(message.ordering));
    message.counterparty !== undefined && (obj.counterparty = message.counterparty ? Counterparty.toJSON(message.counterparty) : undefined);
    if (message.connection_hops) {
      obj.connection_hops = message.connection_hops.map(e => e);
    } else {
      obj.connection_hops = [];
    }
    message.version !== undefined && (obj.version = message.version);
    message.port_id !== undefined && (obj.port_id = message.port_id);
    message.channel_id !== undefined && (obj.channel_id = message.channel_id);
    return obj;
  },
  fromPartial(object: Partial<IdentifiedChannel>): IdentifiedChannel {
    const message = createBaseIdentifiedChannel();
    message.state = object.state ?? 0;
    message.ordering = object.ordering ?? 0;
    message.counterparty = object.counterparty !== undefined && object.counterparty !== null ? Counterparty.fromPartial(object.counterparty) : undefined;
    message.connection_hops = object.connection_hops?.map(e => e) || [];
    message.version = object.version ?? "";
    message.port_id = object.port_id ?? "";
    message.channel_id = object.channel_id ?? "";
    return message;
  },
  fromAmino(object: IdentifiedChannelAmino): IdentifiedChannel {
    const message = createBaseIdentifiedChannel();
    if (object.state !== undefined && object.state !== null) {
      message.state = stateFromJSON(object.state);
    }
    if (object.ordering !== undefined && object.ordering !== null) {
      message.ordering = orderFromJSON(object.ordering);
    }
    if (object.counterparty !== undefined && object.counterparty !== null) {
      message.counterparty = Counterparty.fromAmino(object.counterparty);
    }
    message.connection_hops = object.connection_hops?.map(e => e) || [];
    if (object.version !== undefined && object.version !== null) {
      message.version = object.version;
    }
    if (object.port_id !== undefined && object.port_id !== null) {
      message.port_id = object.port_id;
    }
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channel_id = object.channel_id;
    }
    return message;
  },
  toAmino(message: IdentifiedChannel): IdentifiedChannelAmino {
    const obj: any = {};
    obj.state = message.state;
    obj.ordering = message.ordering;
    obj.counterparty = message.counterparty ? Counterparty.toAmino(message.counterparty) : undefined;
    if (message.connection_hops) {
      obj.connection_hops = message.connection_hops.map(e => e);
    } else {
      obj.connection_hops = [];
    }
    obj.version = message.version;
    obj.port_id = message.port_id;
    obj.channel_id = message.channel_id;
    return obj;
  },
  fromAminoMsg(object: IdentifiedChannelAminoMsg): IdentifiedChannel {
    return IdentifiedChannel.fromAmino(object.value);
  },
  toAminoMsg(message: IdentifiedChannel): IdentifiedChannelAminoMsg {
    return {
      type: "cosmos-sdk/IdentifiedChannel",
      value: IdentifiedChannel.toAmino(message)
    };
  },
  fromProtoMsg(message: IdentifiedChannelProtoMsg): IdentifiedChannel {
    return IdentifiedChannel.decode(message.value);
  },
  toProto(message: IdentifiedChannel): Uint8Array {
    return IdentifiedChannel.encode(message).finish();
  },
  toProtoMsg(message: IdentifiedChannel): IdentifiedChannelProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.IdentifiedChannel",
      value: IdentifiedChannel.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(IdentifiedChannel.typeUrl, IdentifiedChannel);
GlobalDecoderRegistry.registerAminoProtoMapping(IdentifiedChannel.aminoType, IdentifiedChannel.typeUrl);
function createBaseCounterparty(): Counterparty {
  return {
    port_id: "",
    channel_id: ""
  };
}
export const Counterparty = {
  typeUrl: "/ibc.core.channel.v1.Counterparty",
  aminoType: "cosmos-sdk/Counterparty",
  is(o: any): o is Counterparty {
    return o && (o.$typeUrl === Counterparty.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string");
  },
  isSDK(o: any): o is CounterpartySDKType {
    return o && (o.$typeUrl === Counterparty.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string");
  },
  isAmino(o: any): o is CounterpartyAmino {
    return o && (o.$typeUrl === Counterparty.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string");
  },
  encode(message: Counterparty, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.port_id !== "") {
      writer.uint32(10).string(message.port_id);
    }
    if (message.channel_id !== "") {
      writer.uint32(18).string(message.channel_id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Counterparty {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCounterparty();
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
  fromJSON(object: any): Counterparty {
    return {
      port_id: isSet(object.port_id) ? String(object.port_id) : "",
      channel_id: isSet(object.channel_id) ? String(object.channel_id) : ""
    };
  },
  toJSON(message: Counterparty): unknown {
    const obj: any = {};
    message.port_id !== undefined && (obj.port_id = message.port_id);
    message.channel_id !== undefined && (obj.channel_id = message.channel_id);
    return obj;
  },
  fromPartial(object: Partial<Counterparty>): Counterparty {
    const message = createBaseCounterparty();
    message.port_id = object.port_id ?? "";
    message.channel_id = object.channel_id ?? "";
    return message;
  },
  fromAmino(object: CounterpartyAmino): Counterparty {
    const message = createBaseCounterparty();
    if (object.port_id !== undefined && object.port_id !== null) {
      message.port_id = object.port_id;
    }
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channel_id = object.channel_id;
    }
    return message;
  },
  toAmino(message: Counterparty): CounterpartyAmino {
    const obj: any = {};
    obj.port_id = message.port_id;
    obj.channel_id = message.channel_id;
    return obj;
  },
  fromAminoMsg(object: CounterpartyAminoMsg): Counterparty {
    return Counterparty.fromAmino(object.value);
  },
  toAminoMsg(message: Counterparty): CounterpartyAminoMsg {
    return {
      type: "cosmos-sdk/Counterparty",
      value: Counterparty.toAmino(message)
    };
  },
  fromProtoMsg(message: CounterpartyProtoMsg): Counterparty {
    return Counterparty.decode(message.value);
  },
  toProto(message: Counterparty): Uint8Array {
    return Counterparty.encode(message).finish();
  },
  toProtoMsg(message: Counterparty): CounterpartyProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.Counterparty",
      value: Counterparty.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Counterparty.typeUrl, Counterparty);
GlobalDecoderRegistry.registerAminoProtoMapping(Counterparty.aminoType, Counterparty.typeUrl);
function createBasePacket(): Packet {
  return {
    sequence: BigInt(0),
    source_port: "",
    source_channel: "",
    destination_port: "",
    destination_channel: "",
    data: new Uint8Array(),
    timeout_height: Height.fromPartial({}),
    timeout_timestamp: BigInt(0)
  };
}
export const Packet = {
  typeUrl: "/ibc.core.channel.v1.Packet",
  aminoType: "cosmos-sdk/Packet",
  is(o: any): o is Packet {
    return o && (o.$typeUrl === Packet.typeUrl || typeof o.sequence === "bigint" && typeof o.source_port === "string" && typeof o.source_channel === "string" && typeof o.destination_port === "string" && typeof o.destination_channel === "string" && (o.data instanceof Uint8Array || typeof o.data === "string") && Height.is(o.timeout_height) && typeof o.timeout_timestamp === "bigint");
  },
  isSDK(o: any): o is PacketSDKType {
    return o && (o.$typeUrl === Packet.typeUrl || typeof o.sequence === "bigint" && typeof o.source_port === "string" && typeof o.source_channel === "string" && typeof o.destination_port === "string" && typeof o.destination_channel === "string" && (o.data instanceof Uint8Array || typeof o.data === "string") && Height.isSDK(o.timeout_height) && typeof o.timeout_timestamp === "bigint");
  },
  isAmino(o: any): o is PacketAmino {
    return o && (o.$typeUrl === Packet.typeUrl || typeof o.sequence === "bigint" && typeof o.source_port === "string" && typeof o.source_channel === "string" && typeof o.destination_port === "string" && typeof o.destination_channel === "string" && (o.data instanceof Uint8Array || typeof o.data === "string") && Height.isAmino(o.timeout_height) && typeof o.timeout_timestamp === "bigint");
  },
  encode(message: Packet, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sequence !== BigInt(0)) {
      writer.uint32(8).uint64(message.sequence);
    }
    if (message.source_port !== "") {
      writer.uint32(18).string(message.source_port);
    }
    if (message.source_channel !== "") {
      writer.uint32(26).string(message.source_channel);
    }
    if (message.destination_port !== "") {
      writer.uint32(34).string(message.destination_port);
    }
    if (message.destination_channel !== "") {
      writer.uint32(42).string(message.destination_channel);
    }
    if (message.data.length !== 0) {
      writer.uint32(50).bytes(message.data);
    }
    if (message.timeout_height !== undefined) {
      Height.encode(message.timeout_height, writer.uint32(58).fork()).ldelim();
    }
    if (message.timeout_timestamp !== BigInt(0)) {
      writer.uint32(64).uint64(message.timeout_timestamp);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Packet {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePacket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sequence = reader.uint64();
          break;
        case 2:
          message.source_port = reader.string();
          break;
        case 3:
          message.source_channel = reader.string();
          break;
        case 4:
          message.destination_port = reader.string();
          break;
        case 5:
          message.destination_channel = reader.string();
          break;
        case 6:
          message.data = reader.bytes();
          break;
        case 7:
          message.timeout_height = Height.decode(reader, reader.uint32());
          break;
        case 8:
          message.timeout_timestamp = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Packet {
    return {
      sequence: isSet(object.sequence) ? BigInt(object.sequence.toString()) : BigInt(0),
      source_port: isSet(object.source_port) ? String(object.source_port) : "",
      source_channel: isSet(object.source_channel) ? String(object.source_channel) : "",
      destination_port: isSet(object.destination_port) ? String(object.destination_port) : "",
      destination_channel: isSet(object.destination_channel) ? String(object.destination_channel) : "",
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
      timeout_height: isSet(object.timeout_height) ? Height.fromJSON(object.timeout_height) : undefined,
      timeout_timestamp: isSet(object.timeout_timestamp) ? BigInt(object.timeout_timestamp.toString()) : BigInt(0)
    };
  },
  toJSON(message: Packet): unknown {
    const obj: any = {};
    message.sequence !== undefined && (obj.sequence = (message.sequence || BigInt(0)).toString());
    message.source_port !== undefined && (obj.source_port = message.source_port);
    message.source_channel !== undefined && (obj.source_channel = message.source_channel);
    message.destination_port !== undefined && (obj.destination_port = message.destination_port);
    message.destination_channel !== undefined && (obj.destination_channel = message.destination_channel);
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    message.timeout_height !== undefined && (obj.timeout_height = message.timeout_height ? Height.toJSON(message.timeout_height) : undefined);
    message.timeout_timestamp !== undefined && (obj.timeout_timestamp = (message.timeout_timestamp || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<Packet>): Packet {
    const message = createBasePacket();
    message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
    message.source_port = object.source_port ?? "";
    message.source_channel = object.source_channel ?? "";
    message.destination_port = object.destination_port ?? "";
    message.destination_channel = object.destination_channel ?? "";
    message.data = object.data ?? new Uint8Array();
    message.timeout_height = object.timeout_height !== undefined && object.timeout_height !== null ? Height.fromPartial(object.timeout_height) : undefined;
    message.timeout_timestamp = object.timeout_timestamp !== undefined && object.timeout_timestamp !== null ? BigInt(object.timeout_timestamp.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: PacketAmino): Packet {
    const message = createBasePacket();
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = BigInt(object.sequence);
    }
    if (object.source_port !== undefined && object.source_port !== null) {
      message.source_port = object.source_port;
    }
    if (object.source_channel !== undefined && object.source_channel !== null) {
      message.source_channel = object.source_channel;
    }
    if (object.destination_port !== undefined && object.destination_port !== null) {
      message.destination_port = object.destination_port;
    }
    if (object.destination_channel !== undefined && object.destination_channel !== null) {
      message.destination_channel = object.destination_channel;
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    if (object.timeout_height !== undefined && object.timeout_height !== null) {
      message.timeout_height = Height.fromAmino(object.timeout_height);
    }
    if (object.timeout_timestamp !== undefined && object.timeout_timestamp !== null) {
      message.timeout_timestamp = BigInt(object.timeout_timestamp);
    }
    return message;
  },
  toAmino(message: Packet): PacketAmino {
    const obj: any = {};
    obj.sequence = message.sequence ? message.sequence.toString() : undefined;
    obj.source_port = message.source_port;
    obj.source_channel = message.source_channel;
    obj.destination_port = message.destination_port;
    obj.destination_channel = message.destination_channel;
    obj.data = message.data ? base64FromBytes(message.data) : undefined;
    obj.timeout_height = message.timeout_height ? Height.toAmino(message.timeout_height) : {};
    obj.timeout_timestamp = message.timeout_timestamp ? message.timeout_timestamp.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: PacketAminoMsg): Packet {
    return Packet.fromAmino(object.value);
  },
  toAminoMsg(message: Packet): PacketAminoMsg {
    return {
      type: "cosmos-sdk/Packet",
      value: Packet.toAmino(message)
    };
  },
  fromProtoMsg(message: PacketProtoMsg): Packet {
    return Packet.decode(message.value);
  },
  toProto(message: Packet): Uint8Array {
    return Packet.encode(message).finish();
  },
  toProtoMsg(message: Packet): PacketProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.Packet",
      value: Packet.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Packet.typeUrl, Packet);
GlobalDecoderRegistry.registerAminoProtoMapping(Packet.aminoType, Packet.typeUrl);
function createBasePacketState(): PacketState {
  return {
    port_id: "",
    channel_id: "",
    sequence: BigInt(0),
    data: new Uint8Array()
  };
}
export const PacketState = {
  typeUrl: "/ibc.core.channel.v1.PacketState",
  aminoType: "cosmos-sdk/PacketState",
  is(o: any): o is PacketState {
    return o && (o.$typeUrl === PacketState.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && typeof o.sequence === "bigint" && (o.data instanceof Uint8Array || typeof o.data === "string"));
  },
  isSDK(o: any): o is PacketStateSDKType {
    return o && (o.$typeUrl === PacketState.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && typeof o.sequence === "bigint" && (o.data instanceof Uint8Array || typeof o.data === "string"));
  },
  isAmino(o: any): o is PacketStateAmino {
    return o && (o.$typeUrl === PacketState.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && typeof o.sequence === "bigint" && (o.data instanceof Uint8Array || typeof o.data === "string"));
  },
  encode(message: PacketState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.port_id !== "") {
      writer.uint32(10).string(message.port_id);
    }
    if (message.channel_id !== "") {
      writer.uint32(18).string(message.channel_id);
    }
    if (message.sequence !== BigInt(0)) {
      writer.uint32(24).uint64(message.sequence);
    }
    if (message.data.length !== 0) {
      writer.uint32(34).bytes(message.data);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PacketState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePacketState();
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
        case 4:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PacketState {
    return {
      port_id: isSet(object.port_id) ? String(object.port_id) : "",
      channel_id: isSet(object.channel_id) ? String(object.channel_id) : "",
      sequence: isSet(object.sequence) ? BigInt(object.sequence.toString()) : BigInt(0),
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
    };
  },
  toJSON(message: PacketState): unknown {
    const obj: any = {};
    message.port_id !== undefined && (obj.port_id = message.port_id);
    message.channel_id !== undefined && (obj.channel_id = message.channel_id);
    message.sequence !== undefined && (obj.sequence = (message.sequence || BigInt(0)).toString());
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    return obj;
  },
  fromPartial(object: Partial<PacketState>): PacketState {
    const message = createBasePacketState();
    message.port_id = object.port_id ?? "";
    message.channel_id = object.channel_id ?? "";
    message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
    message.data = object.data ?? new Uint8Array();
    return message;
  },
  fromAmino(object: PacketStateAmino): PacketState {
    const message = createBasePacketState();
    if (object.port_id !== undefined && object.port_id !== null) {
      message.port_id = object.port_id;
    }
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channel_id = object.channel_id;
    }
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = BigInt(object.sequence);
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    return message;
  },
  toAmino(message: PacketState): PacketStateAmino {
    const obj: any = {};
    obj.port_id = message.port_id;
    obj.channel_id = message.channel_id;
    obj.sequence = message.sequence ? message.sequence.toString() : undefined;
    obj.data = message.data ? base64FromBytes(message.data) : undefined;
    return obj;
  },
  fromAminoMsg(object: PacketStateAminoMsg): PacketState {
    return PacketState.fromAmino(object.value);
  },
  toAminoMsg(message: PacketState): PacketStateAminoMsg {
    return {
      type: "cosmos-sdk/PacketState",
      value: PacketState.toAmino(message)
    };
  },
  fromProtoMsg(message: PacketStateProtoMsg): PacketState {
    return PacketState.decode(message.value);
  },
  toProto(message: PacketState): Uint8Array {
    return PacketState.encode(message).finish();
  },
  toProtoMsg(message: PacketState): PacketStateProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.PacketState",
      value: PacketState.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(PacketState.typeUrl, PacketState);
GlobalDecoderRegistry.registerAminoProtoMapping(PacketState.aminoType, PacketState.typeUrl);
function createBasePacketId(): PacketId {
  return {
    port_id: "",
    channel_id: "",
    sequence: BigInt(0)
  };
}
export const PacketId = {
  typeUrl: "/ibc.core.channel.v1.PacketId",
  aminoType: "cosmos-sdk/PacketId",
  is(o: any): o is PacketId {
    return o && (o.$typeUrl === PacketId.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && typeof o.sequence === "bigint");
  },
  isSDK(o: any): o is PacketIdSDKType {
    return o && (o.$typeUrl === PacketId.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && typeof o.sequence === "bigint");
  },
  isAmino(o: any): o is PacketIdAmino {
    return o && (o.$typeUrl === PacketId.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && typeof o.sequence === "bigint");
  },
  encode(message: PacketId, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): PacketId {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePacketId();
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
  fromJSON(object: any): PacketId {
    return {
      port_id: isSet(object.port_id) ? String(object.port_id) : "",
      channel_id: isSet(object.channel_id) ? String(object.channel_id) : "",
      sequence: isSet(object.sequence) ? BigInt(object.sequence.toString()) : BigInt(0)
    };
  },
  toJSON(message: PacketId): unknown {
    const obj: any = {};
    message.port_id !== undefined && (obj.port_id = message.port_id);
    message.channel_id !== undefined && (obj.channel_id = message.channel_id);
    message.sequence !== undefined && (obj.sequence = (message.sequence || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<PacketId>): PacketId {
    const message = createBasePacketId();
    message.port_id = object.port_id ?? "";
    message.channel_id = object.channel_id ?? "";
    message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: PacketIdAmino): PacketId {
    const message = createBasePacketId();
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
  toAmino(message: PacketId): PacketIdAmino {
    const obj: any = {};
    obj.port_id = message.port_id;
    obj.channel_id = message.channel_id;
    obj.sequence = message.sequence ? message.sequence.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: PacketIdAminoMsg): PacketId {
    return PacketId.fromAmino(object.value);
  },
  toAminoMsg(message: PacketId): PacketIdAminoMsg {
    return {
      type: "cosmos-sdk/PacketId",
      value: PacketId.toAmino(message)
    };
  },
  fromProtoMsg(message: PacketIdProtoMsg): PacketId {
    return PacketId.decode(message.value);
  },
  toProto(message: PacketId): Uint8Array {
    return PacketId.encode(message).finish();
  },
  toProtoMsg(message: PacketId): PacketIdProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.PacketId",
      value: PacketId.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(PacketId.typeUrl, PacketId);
GlobalDecoderRegistry.registerAminoProtoMapping(PacketId.aminoType, PacketId.typeUrl);
function createBaseAcknowledgement(): Acknowledgement {
  return {
    result: undefined,
    error: undefined
  };
}
export const Acknowledgement = {
  typeUrl: "/ibc.core.channel.v1.Acknowledgement",
  aminoType: "cosmos-sdk/Acknowledgement",
  is(o: any): o is Acknowledgement {
    return o && o.$typeUrl === Acknowledgement.typeUrl;
  },
  isSDK(o: any): o is AcknowledgementSDKType {
    return o && o.$typeUrl === Acknowledgement.typeUrl;
  },
  isAmino(o: any): o is AcknowledgementAmino {
    return o && o.$typeUrl === Acknowledgement.typeUrl;
  },
  encode(message: Acknowledgement, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.result !== undefined) {
      writer.uint32(170).bytes(message.result);
    }
    if (message.error !== undefined) {
      writer.uint32(178).string(message.error);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Acknowledgement {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAcknowledgement();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 21:
          message.result = reader.bytes();
          break;
        case 22:
          message.error = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Acknowledgement {
    return {
      result: isSet(object.result) ? bytesFromBase64(object.result) : undefined,
      error: isSet(object.error) ? String(object.error) : undefined
    };
  },
  toJSON(message: Acknowledgement): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = message.result !== undefined ? base64FromBytes(message.result) : undefined);
    message.error !== undefined && (obj.error = message.error);
    return obj;
  },
  fromPartial(object: Partial<Acknowledgement>): Acknowledgement {
    const message = createBaseAcknowledgement();
    message.result = object.result ?? undefined;
    message.error = object.error ?? undefined;
    return message;
  },
  fromAmino(object: AcknowledgementAmino): Acknowledgement {
    const message = createBaseAcknowledgement();
    if (object.result !== undefined && object.result !== null) {
      message.result = bytesFromBase64(object.result);
    }
    if (object.error !== undefined && object.error !== null) {
      message.error = object.error;
    }
    return message;
  },
  toAmino(message: Acknowledgement): AcknowledgementAmino {
    const obj: any = {};
    obj.result = message.result ? base64FromBytes(message.result) : undefined;
    obj.error = message.error;
    return obj;
  },
  fromAminoMsg(object: AcknowledgementAminoMsg): Acknowledgement {
    return Acknowledgement.fromAmino(object.value);
  },
  toAminoMsg(message: Acknowledgement): AcknowledgementAminoMsg {
    return {
      type: "cosmos-sdk/Acknowledgement",
      value: Acknowledgement.toAmino(message)
    };
  },
  fromProtoMsg(message: AcknowledgementProtoMsg): Acknowledgement {
    return Acknowledgement.decode(message.value);
  },
  toProto(message: Acknowledgement): Uint8Array {
    return Acknowledgement.encode(message).finish();
  },
  toProtoMsg(message: Acknowledgement): AcknowledgementProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.Acknowledgement",
      value: Acknowledgement.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Acknowledgement.typeUrl, Acknowledgement);
GlobalDecoderRegistry.registerAminoProtoMapping(Acknowledgement.aminoType, Acknowledgement.typeUrl);
function createBaseTimeout(): Timeout {
  return {
    height: Height.fromPartial({}),
    timestamp: BigInt(0)
  };
}
export const Timeout = {
  typeUrl: "/ibc.core.channel.v1.Timeout",
  aminoType: "cosmos-sdk/Timeout",
  is(o: any): o is Timeout {
    return o && (o.$typeUrl === Timeout.typeUrl || Height.is(o.height) && typeof o.timestamp === "bigint");
  },
  isSDK(o: any): o is TimeoutSDKType {
    return o && (o.$typeUrl === Timeout.typeUrl || Height.isSDK(o.height) && typeof o.timestamp === "bigint");
  },
  isAmino(o: any): o is TimeoutAmino {
    return o && (o.$typeUrl === Timeout.typeUrl || Height.isAmino(o.height) && typeof o.timestamp === "bigint");
  },
  encode(message: Timeout, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.height !== undefined) {
      Height.encode(message.height, writer.uint32(10).fork()).ldelim();
    }
    if (message.timestamp !== BigInt(0)) {
      writer.uint32(16).uint64(message.timestamp);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Timeout {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimeout();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = Height.decode(reader, reader.uint32());
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
  fromJSON(object: any): Timeout {
    return {
      height: isSet(object.height) ? Height.fromJSON(object.height) : undefined,
      timestamp: isSet(object.timestamp) ? BigInt(object.timestamp.toString()) : BigInt(0)
    };
  },
  toJSON(message: Timeout): unknown {
    const obj: any = {};
    message.height !== undefined && (obj.height = message.height ? Height.toJSON(message.height) : undefined);
    message.timestamp !== undefined && (obj.timestamp = (message.timestamp || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<Timeout>): Timeout {
    const message = createBaseTimeout();
    message.height = object.height !== undefined && object.height !== null ? Height.fromPartial(object.height) : undefined;
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? BigInt(object.timestamp.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: TimeoutAmino): Timeout {
    const message = createBaseTimeout();
    if (object.height !== undefined && object.height !== null) {
      message.height = Height.fromAmino(object.height);
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = BigInt(object.timestamp);
    }
    return message;
  },
  toAmino(message: Timeout): TimeoutAmino {
    const obj: any = {};
    obj.height = message.height ? Height.toAmino(message.height) : {};
    obj.timestamp = message.timestamp ? message.timestamp.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: TimeoutAminoMsg): Timeout {
    return Timeout.fromAmino(object.value);
  },
  toAminoMsg(message: Timeout): TimeoutAminoMsg {
    return {
      type: "cosmos-sdk/Timeout",
      value: Timeout.toAmino(message)
    };
  },
  fromProtoMsg(message: TimeoutProtoMsg): Timeout {
    return Timeout.decode(message.value);
  },
  toProto(message: Timeout): Uint8Array {
    return Timeout.encode(message).finish();
  },
  toProtoMsg(message: Timeout): TimeoutProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.Timeout",
      value: Timeout.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Timeout.typeUrl, Timeout);
GlobalDecoderRegistry.registerAminoProtoMapping(Timeout.aminoType, Timeout.typeUrl);
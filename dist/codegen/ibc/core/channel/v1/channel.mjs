//@ts-nocheck
import { Height } from "../../client/v1/client";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../../helpers";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { GlobalDecoderRegistry } from "../../../../registry";
export const protobufPackage = "ibc.core.channel.v1";
/**
 * State defines if a channel is in one of the following states:
 * CLOSED, INIT, TRYOPEN, OPEN or UNINITIALIZED.
 */
export var State;
(function (State) {
    /** STATE_UNINITIALIZED_UNSPECIFIED - Default State */
    State[State["STATE_UNINITIALIZED_UNSPECIFIED"] = 0] = "STATE_UNINITIALIZED_UNSPECIFIED";
    /** STATE_INIT - A channel has just started the opening handshake. */
    State[State["STATE_INIT"] = 1] = "STATE_INIT";
    /** STATE_TRYOPEN - A channel has acknowledged the handshake step on the counterparty chain. */
    State[State["STATE_TRYOPEN"] = 2] = "STATE_TRYOPEN";
    /**
     * STATE_OPEN - A channel has completed the handshake. Open channels are
     * ready to send and receive packets.
     */
    State[State["STATE_OPEN"] = 3] = "STATE_OPEN";
    /**
     * STATE_CLOSED - A channel has been closed and can no longer be used to send or receive
     * packets.
     */
    State[State["STATE_CLOSED"] = 4] = "STATE_CLOSED";
    State[State["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(State || (State = {}));
export const StateSDKType = State;
export const StateAmino = State;
export function stateFromJSON(object) {
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
export function stateToJSON(object) {
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
export var Order;
(function (Order) {
    /** ORDER_NONE_UNSPECIFIED - zero-value for channel ordering */
    Order[Order["ORDER_NONE_UNSPECIFIED"] = 0] = "ORDER_NONE_UNSPECIFIED";
    /**
     * ORDER_UNORDERED - packets can be delivered in any order, which may differ from the order in
     * which they were sent.
     */
    Order[Order["ORDER_UNORDERED"] = 1] = "ORDER_UNORDERED";
    /** ORDER_ORDERED - packets are delivered exactly in the order which they were sent */
    Order[Order["ORDER_ORDERED"] = 2] = "ORDER_ORDERED";
    Order[Order["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Order || (Order = {}));
export const OrderSDKType = Order;
export const OrderAmino = Order;
export function orderFromJSON(object) {
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
export function orderToJSON(object) {
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
function createBaseChannel() {
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
    is(o) {
        return o && (o.$typeUrl === Channel.typeUrl || isSet(o.state) && isSet(o.ordering) && Counterparty.is(o.counterparty) && Array.isArray(o.connection_hops) && (!o.connection_hops.length || typeof o.connection_hops[0] === "string") && typeof o.version === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === Channel.typeUrl || isSet(o.state) && isSet(o.ordering) && Counterparty.isSDK(o.counterparty) && Array.isArray(o.connection_hops) && (!o.connection_hops.length || typeof o.connection_hops[0] === "string") && typeof o.version === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === Channel.typeUrl || isSet(o.state) && isSet(o.ordering) && Counterparty.isAmino(o.counterparty) && Array.isArray(o.connection_hops) && (!o.connection_hops.length || typeof o.connection_hops[0] === "string") && typeof o.version === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
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
            writer.uint32(34).string(v);
        }
        if (message.version !== "") {
            writer.uint32(42).string(message.version);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseChannel();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.state = reader.int32();
                    break;
                case 2:
                    message.ordering = reader.int32();
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
    fromJSON(object) {
        return {
            state: isSet(object.state) ? stateFromJSON(object.state) : -1,
            ordering: isSet(object.ordering) ? orderFromJSON(object.ordering) : -1,
            counterparty: isSet(object.counterparty) ? Counterparty.fromJSON(object.counterparty) : undefined,
            connection_hops: Array.isArray(object?.connection_hops) ? object.connection_hops.map((e) => String(e)) : [],
            version: isSet(object.version) ? String(object.version) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.state !== undefined && (obj.state = stateToJSON(message.state));
        message.ordering !== undefined && (obj.ordering = orderToJSON(message.ordering));
        message.counterparty !== undefined && (obj.counterparty = message.counterparty ? Counterparty.toJSON(message.counterparty) : undefined);
        if (message.connection_hops) {
            obj.connection_hops = message.connection_hops.map(e => e);
        }
        else {
            obj.connection_hops = [];
        }
        message.version !== undefined && (obj.version = message.version);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseChannel();
        message.state = object.state ?? 0;
        message.ordering = object.ordering ?? 0;
        message.counterparty = object.counterparty !== undefined && object.counterparty !== null ? Counterparty.fromPartial(object.counterparty) : undefined;
        message.connection_hops = object.connection_hops?.map(e => e) || [];
        message.version = object.version ?? "";
        return message;
    },
    fromAmino(object) {
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
    toAmino(message) {
        const obj = {};
        obj.state = message.state;
        obj.ordering = message.ordering;
        obj.counterparty = message.counterparty ? Counterparty.toAmino(message.counterparty) : undefined;
        if (message.connection_hops) {
            obj.connection_hops = message.connection_hops.map(e => e);
        }
        else {
            obj.connection_hops = [];
        }
        obj.version = message.version;
        return obj;
    },
    fromAminoMsg(object) {
        return Channel.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Channel",
            value: Channel.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Channel.decode(message.value);
    },
    toProto(message) {
        return Channel.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.Channel",
            value: Channel.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(Channel.typeUrl, Channel);
GlobalDecoderRegistry.registerAminoProtoMapping(Channel.aminoType, Channel.typeUrl);
function createBaseIdentifiedChannel() {
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
    is(o) {
        return o && (o.$typeUrl === IdentifiedChannel.typeUrl || isSet(o.state) && isSet(o.ordering) && Counterparty.is(o.counterparty) && Array.isArray(o.connection_hops) && (!o.connection_hops.length || typeof o.connection_hops[0] === "string") && typeof o.version === "string" && typeof o.port_id === "string" && typeof o.channel_id === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === IdentifiedChannel.typeUrl || isSet(o.state) && isSet(o.ordering) && Counterparty.isSDK(o.counterparty) && Array.isArray(o.connection_hops) && (!o.connection_hops.length || typeof o.connection_hops[0] === "string") && typeof o.version === "string" && typeof o.port_id === "string" && typeof o.channel_id === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === IdentifiedChannel.typeUrl || isSet(o.state) && isSet(o.ordering) && Counterparty.isAmino(o.counterparty) && Array.isArray(o.connection_hops) && (!o.connection_hops.length || typeof o.connection_hops[0] === "string") && typeof o.version === "string" && typeof o.port_id === "string" && typeof o.channel_id === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
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
            writer.uint32(34).string(v);
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
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIdentifiedChannel();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.state = reader.int32();
                    break;
                case 2:
                    message.ordering = reader.int32();
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
    fromJSON(object) {
        return {
            state: isSet(object.state) ? stateFromJSON(object.state) : -1,
            ordering: isSet(object.ordering) ? orderFromJSON(object.ordering) : -1,
            counterparty: isSet(object.counterparty) ? Counterparty.fromJSON(object.counterparty) : undefined,
            connection_hops: Array.isArray(object?.connection_hops) ? object.connection_hops.map((e) => String(e)) : [],
            version: isSet(object.version) ? String(object.version) : "",
            port_id: isSet(object.port_id) ? String(object.port_id) : "",
            channel_id: isSet(object.channel_id) ? String(object.channel_id) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.state !== undefined && (obj.state = stateToJSON(message.state));
        message.ordering !== undefined && (obj.ordering = orderToJSON(message.ordering));
        message.counterparty !== undefined && (obj.counterparty = message.counterparty ? Counterparty.toJSON(message.counterparty) : undefined);
        if (message.connection_hops) {
            obj.connection_hops = message.connection_hops.map(e => e);
        }
        else {
            obj.connection_hops = [];
        }
        message.version !== undefined && (obj.version = message.version);
        message.port_id !== undefined && (obj.port_id = message.port_id);
        message.channel_id !== undefined && (obj.channel_id = message.channel_id);
        return obj;
    },
    fromPartial(object) {
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
    fromAmino(object) {
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
    toAmino(message) {
        const obj = {};
        obj.state = message.state;
        obj.ordering = message.ordering;
        obj.counterparty = message.counterparty ? Counterparty.toAmino(message.counterparty) : undefined;
        if (message.connection_hops) {
            obj.connection_hops = message.connection_hops.map(e => e);
        }
        else {
            obj.connection_hops = [];
        }
        obj.version = message.version;
        obj.port_id = message.port_id;
        obj.channel_id = message.channel_id;
        return obj;
    },
    fromAminoMsg(object) {
        return IdentifiedChannel.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/IdentifiedChannel",
            value: IdentifiedChannel.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return IdentifiedChannel.decode(message.value);
    },
    toProto(message) {
        return IdentifiedChannel.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.IdentifiedChannel",
            value: IdentifiedChannel.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(IdentifiedChannel.typeUrl, IdentifiedChannel);
GlobalDecoderRegistry.registerAminoProtoMapping(IdentifiedChannel.aminoType, IdentifiedChannel.typeUrl);
function createBaseCounterparty() {
    return {
        port_id: "",
        channel_id: ""
    };
}
export const Counterparty = {
    typeUrl: "/ibc.core.channel.v1.Counterparty",
    aminoType: "cosmos-sdk/Counterparty",
    is(o) {
        return o && (o.$typeUrl === Counterparty.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === Counterparty.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === Counterparty.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.port_id !== "") {
            writer.uint32(10).string(message.port_id);
        }
        if (message.channel_id !== "") {
            writer.uint32(18).string(message.channel_id);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return {
            port_id: isSet(object.port_id) ? String(object.port_id) : "",
            channel_id: isSet(object.channel_id) ? String(object.channel_id) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.port_id !== undefined && (obj.port_id = message.port_id);
        message.channel_id !== undefined && (obj.channel_id = message.channel_id);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseCounterparty();
        message.port_id = object.port_id ?? "";
        message.channel_id = object.channel_id ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseCounterparty();
        if (object.port_id !== undefined && object.port_id !== null) {
            message.port_id = object.port_id;
        }
        if (object.channel_id !== undefined && object.channel_id !== null) {
            message.channel_id = object.channel_id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.port_id = message.port_id;
        obj.channel_id = message.channel_id;
        return obj;
    },
    fromAminoMsg(object) {
        return Counterparty.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Counterparty",
            value: Counterparty.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Counterparty.decode(message.value);
    },
    toProto(message) {
        return Counterparty.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.Counterparty",
            value: Counterparty.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(Counterparty.typeUrl, Counterparty);
GlobalDecoderRegistry.registerAminoProtoMapping(Counterparty.aminoType, Counterparty.typeUrl);
function createBasePacket() {
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
    is(o) {
        return o && (o.$typeUrl === Packet.typeUrl || typeof o.sequence === "bigint" && typeof o.source_port === "string" && typeof o.source_channel === "string" && typeof o.destination_port === "string" && typeof o.destination_channel === "string" && (o.data instanceof Uint8Array || typeof o.data === "string") && Height.is(o.timeout_height) && typeof o.timeout_timestamp === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === Packet.typeUrl || typeof o.sequence === "bigint" && typeof o.source_port === "string" && typeof o.source_channel === "string" && typeof o.destination_port === "string" && typeof o.destination_channel === "string" && (o.data instanceof Uint8Array || typeof o.data === "string") && Height.isSDK(o.timeout_height) && typeof o.timeout_timestamp === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === Packet.typeUrl || typeof o.sequence === "bigint" && typeof o.source_port === "string" && typeof o.source_channel === "string" && typeof o.destination_port === "string" && typeof o.destination_channel === "string" && (o.data instanceof Uint8Array || typeof o.data === "string") && Height.isAmino(o.timeout_height) && typeof o.timeout_timestamp === "bigint");
    },
    encode(message, writer = BinaryWriter.create()) {
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
    decode(input, length) {
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
    fromJSON(object) {
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
    toJSON(message) {
        const obj = {};
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
    fromPartial(object) {
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
    fromAmino(object) {
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
    toAmino(message) {
        const obj = {};
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
    fromAminoMsg(object) {
        return Packet.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Packet",
            value: Packet.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Packet.decode(message.value);
    },
    toProto(message) {
        return Packet.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.Packet",
            value: Packet.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(Packet.typeUrl, Packet);
GlobalDecoderRegistry.registerAminoProtoMapping(Packet.aminoType, Packet.typeUrl);
function createBasePacketState() {
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
    is(o) {
        return o && (o.$typeUrl === PacketState.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && typeof o.sequence === "bigint" && (o.data instanceof Uint8Array || typeof o.data === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === PacketState.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && typeof o.sequence === "bigint" && (o.data instanceof Uint8Array || typeof o.data === "string"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === PacketState.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && typeof o.sequence === "bigint" && (o.data instanceof Uint8Array || typeof o.data === "string"));
    },
    encode(message, writer = BinaryWriter.create()) {
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
    decode(input, length) {
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
    fromJSON(object) {
        return {
            port_id: isSet(object.port_id) ? String(object.port_id) : "",
            channel_id: isSet(object.channel_id) ? String(object.channel_id) : "",
            sequence: isSet(object.sequence) ? BigInt(object.sequence.toString()) : BigInt(0),
            data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.port_id !== undefined && (obj.port_id = message.port_id);
        message.channel_id !== undefined && (obj.channel_id = message.channel_id);
        message.sequence !== undefined && (obj.sequence = (message.sequence || BigInt(0)).toString());
        message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBasePacketState();
        message.port_id = object.port_id ?? "";
        message.channel_id = object.channel_id ?? "";
        message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
        message.data = object.data ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
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
    toAmino(message) {
        const obj = {};
        obj.port_id = message.port_id;
        obj.channel_id = message.channel_id;
        obj.sequence = message.sequence ? message.sequence.toString() : undefined;
        obj.data = message.data ? base64FromBytes(message.data) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return PacketState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/PacketState",
            value: PacketState.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return PacketState.decode(message.value);
    },
    toProto(message) {
        return PacketState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.PacketState",
            value: PacketState.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(PacketState.typeUrl, PacketState);
GlobalDecoderRegistry.registerAminoProtoMapping(PacketState.aminoType, PacketState.typeUrl);
function createBasePacketId() {
    return {
        port_id: "",
        channel_id: "",
        sequence: BigInt(0)
    };
}
export const PacketId = {
    typeUrl: "/ibc.core.channel.v1.PacketId",
    aminoType: "cosmos-sdk/PacketId",
    is(o) {
        return o && (o.$typeUrl === PacketId.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && typeof o.sequence === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === PacketId.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && typeof o.sequence === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === PacketId.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && typeof o.sequence === "bigint");
    },
    encode(message, writer = BinaryWriter.create()) {
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
    decode(input, length) {
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
    fromJSON(object) {
        return {
            port_id: isSet(object.port_id) ? String(object.port_id) : "",
            channel_id: isSet(object.channel_id) ? String(object.channel_id) : "",
            sequence: isSet(object.sequence) ? BigInt(object.sequence.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.port_id !== undefined && (obj.port_id = message.port_id);
        message.channel_id !== undefined && (obj.channel_id = message.channel_id);
        message.sequence !== undefined && (obj.sequence = (message.sequence || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBasePacketId();
        message.port_id = object.port_id ?? "";
        message.channel_id = object.channel_id ?? "";
        message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
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
    toAmino(message) {
        const obj = {};
        obj.port_id = message.port_id;
        obj.channel_id = message.channel_id;
        obj.sequence = message.sequence ? message.sequence.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return PacketId.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/PacketId",
            value: PacketId.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return PacketId.decode(message.value);
    },
    toProto(message) {
        return PacketId.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.PacketId",
            value: PacketId.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(PacketId.typeUrl, PacketId);
GlobalDecoderRegistry.registerAminoProtoMapping(PacketId.aminoType, PacketId.typeUrl);
function createBaseAcknowledgement() {
    return {
        result: undefined,
        error: undefined
    };
}
export const Acknowledgement = {
    typeUrl: "/ibc.core.channel.v1.Acknowledgement",
    aminoType: "cosmos-sdk/Acknowledgement",
    is(o) {
        return o && o.$typeUrl === Acknowledgement.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === Acknowledgement.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === Acknowledgement.typeUrl;
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.result !== undefined) {
            writer.uint32(170).bytes(message.result);
        }
        if (message.error !== undefined) {
            writer.uint32(178).string(message.error);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return {
            result: isSet(object.result) ? bytesFromBase64(object.result) : undefined,
            error: isSet(object.error) ? String(object.error) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.result !== undefined && (obj.result = message.result !== undefined ? base64FromBytes(message.result) : undefined);
        message.error !== undefined && (obj.error = message.error);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAcknowledgement();
        message.result = object.result ?? undefined;
        message.error = object.error ?? undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseAcknowledgement();
        if (object.result !== undefined && object.result !== null) {
            message.result = bytesFromBase64(object.result);
        }
        if (object.error !== undefined && object.error !== null) {
            message.error = object.error;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.result = message.result ? base64FromBytes(message.result) : undefined;
        obj.error = message.error;
        return obj;
    },
    fromAminoMsg(object) {
        return Acknowledgement.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Acknowledgement",
            value: Acknowledgement.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Acknowledgement.decode(message.value);
    },
    toProto(message) {
        return Acknowledgement.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.Acknowledgement",
            value: Acknowledgement.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(Acknowledgement.typeUrl, Acknowledgement);
GlobalDecoderRegistry.registerAminoProtoMapping(Acknowledgement.aminoType, Acknowledgement.typeUrl);
function createBaseTimeout() {
    return {
        height: Height.fromPartial({}),
        timestamp: BigInt(0)
    };
}
export const Timeout = {
    typeUrl: "/ibc.core.channel.v1.Timeout",
    aminoType: "cosmos-sdk/Timeout",
    is(o) {
        return o && (o.$typeUrl === Timeout.typeUrl || Height.is(o.height) && typeof o.timestamp === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === Timeout.typeUrl || Height.isSDK(o.height) && typeof o.timestamp === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === Timeout.typeUrl || Height.isAmino(o.height) && typeof o.timestamp === "bigint");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.height !== undefined) {
            Height.encode(message.height, writer.uint32(10).fork()).ldelim();
        }
        if (message.timestamp !== BigInt(0)) {
            writer.uint32(16).uint64(message.timestamp);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return {
            height: isSet(object.height) ? Height.fromJSON(object.height) : undefined,
            timestamp: isSet(object.timestamp) ? BigInt(object.timestamp.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = message.height ? Height.toJSON(message.height) : undefined);
        message.timestamp !== undefined && (obj.timestamp = (message.timestamp || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTimeout();
        message.height = object.height !== undefined && object.height !== null ? Height.fromPartial(object.height) : undefined;
        message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? BigInt(object.timestamp.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseTimeout();
        if (object.height !== undefined && object.height !== null) {
            message.height = Height.fromAmino(object.height);
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = BigInt(object.timestamp);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.height = message.height ? Height.toAmino(message.height) : {};
        obj.timestamp = message.timestamp ? message.timestamp.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Timeout.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Timeout",
            value: Timeout.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Timeout.decode(message.value);
    },
    toProto(message) {
        return Timeout.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.Timeout",
            value: Timeout.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(Timeout.typeUrl, Timeout);
GlobalDecoderRegistry.registerAminoProtoMapping(Timeout.aminoType, Timeout.typeUrl);
//# sourceMappingURL=channel.js.map
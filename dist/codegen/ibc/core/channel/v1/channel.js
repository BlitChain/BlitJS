"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Timeout = exports.Acknowledgement = exports.PacketId = exports.PacketState = exports.Packet = exports.Counterparty = exports.IdentifiedChannel = exports.Channel = exports.orderToJSON = exports.orderFromJSON = exports.OrderAmino = exports.OrderSDKType = exports.Order = exports.stateToJSON = exports.stateFromJSON = exports.StateAmino = exports.StateSDKType = exports.State = exports.protobufPackage = void 0;
//@ts-nocheck
const client_1 = require("../../client/v1/client");
const binary_1 = require("../../../../binary");
const helpers_1 = require("../../../../helpers");
exports.protobufPackage = "ibc.core.channel.v1";
/**
 * State defines if a channel is in one of the following states:
 * CLOSED, INIT, TRYOPEN, OPEN or UNINITIALIZED.
 */
var State;
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
})(State || (exports.State = State = {}));
exports.StateSDKType = State;
exports.StateAmino = State;
function stateFromJSON(object) {
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
exports.stateFromJSON = stateFromJSON;
function stateToJSON(object) {
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
exports.stateToJSON = stateToJSON;
/** Order defines if a channel is ORDERED or UNORDERED */
var Order;
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
})(Order || (exports.Order = Order = {}));
exports.OrderSDKType = Order;
exports.OrderAmino = Order;
function orderFromJSON(object) {
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
exports.orderFromJSON = orderFromJSON;
function orderToJSON(object) {
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
exports.orderToJSON = orderToJSON;
function createBaseChannel() {
    return {
        state: 0,
        ordering: 0,
        counterparty: exports.Counterparty.fromPartial({}),
        connection_hops: [],
        version: ""
    };
}
exports.Channel = {
    typeUrl: "/ibc.core.channel.v1.Channel",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.state !== 0) {
            writer.uint32(8).int32(message.state);
        }
        if (message.ordering !== 0) {
            writer.uint32(16).int32(message.ordering);
        }
        if (message.counterparty !== undefined) {
            exports.Counterparty.encode(message.counterparty, writer.uint32(26).fork()).ldelim();
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
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
                    message.counterparty = exports.Counterparty.decode(reader, reader.uint32());
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
            state: (0, helpers_1.isSet)(object.state) ? stateFromJSON(object.state) : -1,
            ordering: (0, helpers_1.isSet)(object.ordering) ? orderFromJSON(object.ordering) : -1,
            counterparty: (0, helpers_1.isSet)(object.counterparty) ? exports.Counterparty.fromJSON(object.counterparty) : undefined,
            connection_hops: Array.isArray(object?.connection_hops) ? object.connection_hops.map((e) => String(e)) : [],
            version: (0, helpers_1.isSet)(object.version) ? String(object.version) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.state !== undefined && (obj.state = stateToJSON(message.state));
        message.ordering !== undefined && (obj.ordering = orderToJSON(message.ordering));
        message.counterparty !== undefined && (obj.counterparty = message.counterparty ? exports.Counterparty.toJSON(message.counterparty) : undefined);
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
        message.counterparty = object.counterparty !== undefined && object.counterparty !== null ? exports.Counterparty.fromPartial(object.counterparty) : undefined;
        message.connection_hops = object.connection_hops?.map(e => e) || [];
        message.version = object.version ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            state: (0, helpers_1.isSet)(object.state) ? stateFromJSON(object.state) : -1,
            ordering: (0, helpers_1.isSet)(object.ordering) ? orderFromJSON(object.ordering) : -1,
            counterparty: object?.counterparty ? exports.Counterparty.fromAmino(object.counterparty) : undefined,
            connection_hops: Array.isArray(object?.connection_hops) ? object.connection_hops.map((e) => e) : [],
            version: object.version
        };
    },
    toAmino(message) {
        const obj = {};
        obj.state = message.state;
        obj.ordering = message.ordering;
        obj.counterparty = message.counterparty ? exports.Counterparty.toAmino(message.counterparty) : undefined;
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
        return exports.Channel.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Channel",
            value: exports.Channel.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Channel.decode(message.value);
    },
    toProto(message) {
        return exports.Channel.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.Channel",
            value: exports.Channel.encode(message).finish()
        };
    }
};
function createBaseIdentifiedChannel() {
    return {
        state: 0,
        ordering: 0,
        counterparty: exports.Counterparty.fromPartial({}),
        connection_hops: [],
        version: "",
        port_id: "",
        channel_id: ""
    };
}
exports.IdentifiedChannel = {
    typeUrl: "/ibc.core.channel.v1.IdentifiedChannel",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.state !== 0) {
            writer.uint32(8).int32(message.state);
        }
        if (message.ordering !== 0) {
            writer.uint32(16).int32(message.ordering);
        }
        if (message.counterparty !== undefined) {
            exports.Counterparty.encode(message.counterparty, writer.uint32(26).fork()).ldelim();
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
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
                    message.counterparty = exports.Counterparty.decode(reader, reader.uint32());
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
            state: (0, helpers_1.isSet)(object.state) ? stateFromJSON(object.state) : -1,
            ordering: (0, helpers_1.isSet)(object.ordering) ? orderFromJSON(object.ordering) : -1,
            counterparty: (0, helpers_1.isSet)(object.counterparty) ? exports.Counterparty.fromJSON(object.counterparty) : undefined,
            connection_hops: Array.isArray(object?.connection_hops) ? object.connection_hops.map((e) => String(e)) : [],
            version: (0, helpers_1.isSet)(object.version) ? String(object.version) : "",
            port_id: (0, helpers_1.isSet)(object.port_id) ? String(object.port_id) : "",
            channel_id: (0, helpers_1.isSet)(object.channel_id) ? String(object.channel_id) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.state !== undefined && (obj.state = stateToJSON(message.state));
        message.ordering !== undefined && (obj.ordering = orderToJSON(message.ordering));
        message.counterparty !== undefined && (obj.counterparty = message.counterparty ? exports.Counterparty.toJSON(message.counterparty) : undefined);
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
        message.counterparty = object.counterparty !== undefined && object.counterparty !== null ? exports.Counterparty.fromPartial(object.counterparty) : undefined;
        message.connection_hops = object.connection_hops?.map(e => e) || [];
        message.version = object.version ?? "";
        message.port_id = object.port_id ?? "";
        message.channel_id = object.channel_id ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            state: (0, helpers_1.isSet)(object.state) ? stateFromJSON(object.state) : -1,
            ordering: (0, helpers_1.isSet)(object.ordering) ? orderFromJSON(object.ordering) : -1,
            counterparty: object?.counterparty ? exports.Counterparty.fromAmino(object.counterparty) : undefined,
            connection_hops: Array.isArray(object?.connection_hops) ? object.connection_hops.map((e) => e) : [],
            version: object.version,
            port_id: object.port_id,
            channel_id: object.channel_id
        };
    },
    toAmino(message) {
        const obj = {};
        obj.state = message.state;
        obj.ordering = message.ordering;
        obj.counterparty = message.counterparty ? exports.Counterparty.toAmino(message.counterparty) : undefined;
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
        return exports.IdentifiedChannel.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/IdentifiedChannel",
            value: exports.IdentifiedChannel.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.IdentifiedChannel.decode(message.value);
    },
    toProto(message) {
        return exports.IdentifiedChannel.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.IdentifiedChannel",
            value: exports.IdentifiedChannel.encode(message).finish()
        };
    }
};
function createBaseCounterparty() {
    return {
        port_id: "",
        channel_id: ""
    };
}
exports.Counterparty = {
    typeUrl: "/ibc.core.channel.v1.Counterparty",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.port_id !== "") {
            writer.uint32(10).string(message.port_id);
        }
        if (message.channel_id !== "") {
            writer.uint32(18).string(message.channel_id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
            port_id: (0, helpers_1.isSet)(object.port_id) ? String(object.port_id) : "",
            channel_id: (0, helpers_1.isSet)(object.channel_id) ? String(object.channel_id) : ""
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
        return {
            port_id: object.port_id,
            channel_id: object.channel_id
        };
    },
    toAmino(message) {
        const obj = {};
        obj.port_id = message.port_id;
        obj.channel_id = message.channel_id;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Counterparty.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Counterparty",
            value: exports.Counterparty.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Counterparty.decode(message.value);
    },
    toProto(message) {
        return exports.Counterparty.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.Counterparty",
            value: exports.Counterparty.encode(message).finish()
        };
    }
};
function createBasePacket() {
    return {
        sequence: BigInt(0),
        source_port: "",
        source_channel: "",
        destination_port: "",
        destination_channel: "",
        data: new Uint8Array(),
        timeout_height: client_1.Height.fromPartial({}),
        timeout_timestamp: BigInt(0)
    };
}
exports.Packet = {
    typeUrl: "/ibc.core.channel.v1.Packet",
    encode(message, writer = binary_1.BinaryWriter.create()) {
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
            client_1.Height.encode(message.timeout_height, writer.uint32(58).fork()).ldelim();
        }
        if (message.timeout_timestamp !== BigInt(0)) {
            writer.uint32(64).uint64(message.timeout_timestamp);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
                    message.timeout_height = client_1.Height.decode(reader, reader.uint32());
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
            sequence: (0, helpers_1.isSet)(object.sequence) ? BigInt(object.sequence.toString()) : BigInt(0),
            source_port: (0, helpers_1.isSet)(object.source_port) ? String(object.source_port) : "",
            source_channel: (0, helpers_1.isSet)(object.source_channel) ? String(object.source_channel) : "",
            destination_port: (0, helpers_1.isSet)(object.destination_port) ? String(object.destination_port) : "",
            destination_channel: (0, helpers_1.isSet)(object.destination_channel) ? String(object.destination_channel) : "",
            data: (0, helpers_1.isSet)(object.data) ? (0, helpers_1.bytesFromBase64)(object.data) : new Uint8Array(),
            timeout_height: (0, helpers_1.isSet)(object.timeout_height) ? client_1.Height.fromJSON(object.timeout_height) : undefined,
            timeout_timestamp: (0, helpers_1.isSet)(object.timeout_timestamp) ? BigInt(object.timeout_timestamp.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.sequence !== undefined && (obj.sequence = (message.sequence || BigInt(0)).toString());
        message.source_port !== undefined && (obj.source_port = message.source_port);
        message.source_channel !== undefined && (obj.source_channel = message.source_channel);
        message.destination_port !== undefined && (obj.destination_port = message.destination_port);
        message.destination_channel !== undefined && (obj.destination_channel = message.destination_channel);
        message.data !== undefined && (obj.data = (0, helpers_1.base64FromBytes)(message.data !== undefined ? message.data : new Uint8Array()));
        message.timeout_height !== undefined && (obj.timeout_height = message.timeout_height ? client_1.Height.toJSON(message.timeout_height) : undefined);
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
        message.timeout_height = object.timeout_height !== undefined && object.timeout_height !== null ? client_1.Height.fromPartial(object.timeout_height) : undefined;
        message.timeout_timestamp = object.timeout_timestamp !== undefined && object.timeout_timestamp !== null ? BigInt(object.timeout_timestamp.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        return {
            sequence: BigInt(object.sequence),
            source_port: object.source_port,
            source_channel: object.source_channel,
            destination_port: object.destination_port,
            destination_channel: object.destination_channel,
            data: object.data,
            timeout_height: object?.timeout_height ? client_1.Height.fromAmino(object.timeout_height) : undefined,
            timeout_timestamp: BigInt(object.timeout_timestamp)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.sequence = message.sequence ? message.sequence.toString() : undefined;
        obj.source_port = message.source_port;
        obj.source_channel = message.source_channel;
        obj.destination_port = message.destination_port;
        obj.destination_channel = message.destination_channel;
        obj.data = message.data;
        obj.timeout_height = message.timeout_height ? client_1.Height.toAmino(message.timeout_height) : {};
        obj.timeout_timestamp = message.timeout_timestamp ? message.timeout_timestamp.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Packet.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Packet",
            value: exports.Packet.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Packet.decode(message.value);
    },
    toProto(message) {
        return exports.Packet.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.Packet",
            value: exports.Packet.encode(message).finish()
        };
    }
};
function createBasePacketState() {
    return {
        port_id: "",
        channel_id: "",
        sequence: BigInt(0),
        data: new Uint8Array()
    };
}
exports.PacketState = {
    typeUrl: "/ibc.core.channel.v1.PacketState",
    encode(message, writer = binary_1.BinaryWriter.create()) {
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
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
            port_id: (0, helpers_1.isSet)(object.port_id) ? String(object.port_id) : "",
            channel_id: (0, helpers_1.isSet)(object.channel_id) ? String(object.channel_id) : "",
            sequence: (0, helpers_1.isSet)(object.sequence) ? BigInt(object.sequence.toString()) : BigInt(0),
            data: (0, helpers_1.isSet)(object.data) ? (0, helpers_1.bytesFromBase64)(object.data) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.port_id !== undefined && (obj.port_id = message.port_id);
        message.channel_id !== undefined && (obj.channel_id = message.channel_id);
        message.sequence !== undefined && (obj.sequence = (message.sequence || BigInt(0)).toString());
        message.data !== undefined && (obj.data = (0, helpers_1.base64FromBytes)(message.data !== undefined ? message.data : new Uint8Array()));
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
        return {
            port_id: object.port_id,
            channel_id: object.channel_id,
            sequence: BigInt(object.sequence),
            data: object.data
        };
    },
    toAmino(message) {
        const obj = {};
        obj.port_id = message.port_id;
        obj.channel_id = message.channel_id;
        obj.sequence = message.sequence ? message.sequence.toString() : undefined;
        obj.data = message.data;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.PacketState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/PacketState",
            value: exports.PacketState.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.PacketState.decode(message.value);
    },
    toProto(message) {
        return exports.PacketState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.PacketState",
            value: exports.PacketState.encode(message).finish()
        };
    }
};
function createBasePacketId() {
    return {
        port_id: "",
        channel_id: "",
        sequence: BigInt(0)
    };
}
exports.PacketId = {
    typeUrl: "/ibc.core.channel.v1.PacketId",
    encode(message, writer = binary_1.BinaryWriter.create()) {
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
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
            port_id: (0, helpers_1.isSet)(object.port_id) ? String(object.port_id) : "",
            channel_id: (0, helpers_1.isSet)(object.channel_id) ? String(object.channel_id) : "",
            sequence: (0, helpers_1.isSet)(object.sequence) ? BigInt(object.sequence.toString()) : BigInt(0)
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
        return {
            port_id: object.port_id,
            channel_id: object.channel_id,
            sequence: BigInt(object.sequence)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.port_id = message.port_id;
        obj.channel_id = message.channel_id;
        obj.sequence = message.sequence ? message.sequence.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.PacketId.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/PacketId",
            value: exports.PacketId.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.PacketId.decode(message.value);
    },
    toProto(message) {
        return exports.PacketId.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.PacketId",
            value: exports.PacketId.encode(message).finish()
        };
    }
};
function createBaseAcknowledgement() {
    return {
        result: undefined,
        error: undefined
    };
}
exports.Acknowledgement = {
    typeUrl: "/ibc.core.channel.v1.Acknowledgement",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.result !== undefined) {
            writer.uint32(170).bytes(message.result);
        }
        if (message.error !== undefined) {
            writer.uint32(178).string(message.error);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
            result: (0, helpers_1.isSet)(object.result) ? (0, helpers_1.bytesFromBase64)(object.result) : undefined,
            error: (0, helpers_1.isSet)(object.error) ? String(object.error) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.result !== undefined && (obj.result = message.result !== undefined ? (0, helpers_1.base64FromBytes)(message.result) : undefined);
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
        return {
            result: object?.result,
            error: object?.error
        };
    },
    toAmino(message) {
        const obj = {};
        obj.result = message.result;
        obj.error = message.error;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Acknowledgement.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Acknowledgement",
            value: exports.Acknowledgement.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Acknowledgement.decode(message.value);
    },
    toProto(message) {
        return exports.Acknowledgement.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.Acknowledgement",
            value: exports.Acknowledgement.encode(message).finish()
        };
    }
};
function createBaseTimeout() {
    return {
        height: client_1.Height.fromPartial({}),
        timestamp: BigInt(0)
    };
}
exports.Timeout = {
    typeUrl: "/ibc.core.channel.v1.Timeout",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.height !== undefined) {
            client_1.Height.encode(message.height, writer.uint32(10).fork()).ldelim();
        }
        if (message.timestamp !== BigInt(0)) {
            writer.uint32(16).uint64(message.timestamp);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTimeout();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = client_1.Height.decode(reader, reader.uint32());
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
            height: (0, helpers_1.isSet)(object.height) ? client_1.Height.fromJSON(object.height) : undefined,
            timestamp: (0, helpers_1.isSet)(object.timestamp) ? BigInt(object.timestamp.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = message.height ? client_1.Height.toJSON(message.height) : undefined);
        message.timestamp !== undefined && (obj.timestamp = (message.timestamp || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTimeout();
        message.height = object.height !== undefined && object.height !== null ? client_1.Height.fromPartial(object.height) : undefined;
        message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? BigInt(object.timestamp.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        return {
            height: object?.height ? client_1.Height.fromAmino(object.height) : undefined,
            timestamp: BigInt(object.timestamp)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.height = message.height ? client_1.Height.toAmino(message.height) : {};
        obj.timestamp = message.timestamp ? message.timestamp.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Timeout.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Timeout",
            value: exports.Timeout.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Timeout.decode(message.value);
    },
    toProto(message) {
        return exports.Timeout.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.Timeout",
            value: exports.Timeout.encode(message).finish()
        };
    }
};
//# sourceMappingURL=channel.js.map
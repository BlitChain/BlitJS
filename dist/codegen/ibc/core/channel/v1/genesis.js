"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PacketSequence = exports.GenesisState = exports.protobufPackage = void 0;
//@ts-nocheck
const channel_1 = require("./channel");
const binary_1 = require("../../../../binary");
const helpers_1 = require("../../../../helpers");
const registry_1 = require("../../../../registry");
exports.protobufPackage = "ibc.core.channel.v1";
function createBaseGenesisState() {
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
exports.GenesisState = {
    typeUrl: "/ibc.core.channel.v1.GenesisState",
    aminoType: "cosmos-sdk/GenesisState",
    is(o) {
        return o && (o.$typeUrl === exports.GenesisState.typeUrl || Array.isArray(o.channels) && (!o.channels.length || channel_1.IdentifiedChannel.is(o.channels[0])) && Array.isArray(o.acknowledgements) && (!o.acknowledgements.length || channel_1.PacketState.is(o.acknowledgements[0])) && Array.isArray(o.commitments) && (!o.commitments.length || channel_1.PacketState.is(o.commitments[0])) && Array.isArray(o.receipts) && (!o.receipts.length || channel_1.PacketState.is(o.receipts[0])) && Array.isArray(o.send_sequences) && (!o.send_sequences.length || exports.PacketSequence.is(o.send_sequences[0])) && Array.isArray(o.recv_sequences) && (!o.recv_sequences.length || exports.PacketSequence.is(o.recv_sequences[0])) && Array.isArray(o.ack_sequences) && (!o.ack_sequences.length || exports.PacketSequence.is(o.ack_sequences[0])) && typeof o.next_channel_sequence === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.GenesisState.typeUrl || Array.isArray(o.channels) && (!o.channels.length || channel_1.IdentifiedChannel.isSDK(o.channels[0])) && Array.isArray(o.acknowledgements) && (!o.acknowledgements.length || channel_1.PacketState.isSDK(o.acknowledgements[0])) && Array.isArray(o.commitments) && (!o.commitments.length || channel_1.PacketState.isSDK(o.commitments[0])) && Array.isArray(o.receipts) && (!o.receipts.length || channel_1.PacketState.isSDK(o.receipts[0])) && Array.isArray(o.send_sequences) && (!o.send_sequences.length || exports.PacketSequence.isSDK(o.send_sequences[0])) && Array.isArray(o.recv_sequences) && (!o.recv_sequences.length || exports.PacketSequence.isSDK(o.recv_sequences[0])) && Array.isArray(o.ack_sequences) && (!o.ack_sequences.length || exports.PacketSequence.isSDK(o.ack_sequences[0])) && typeof o.next_channel_sequence === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.GenesisState.typeUrl || Array.isArray(o.channels) && (!o.channels.length || channel_1.IdentifiedChannel.isAmino(o.channels[0])) && Array.isArray(o.acknowledgements) && (!o.acknowledgements.length || channel_1.PacketState.isAmino(o.acknowledgements[0])) && Array.isArray(o.commitments) && (!o.commitments.length || channel_1.PacketState.isAmino(o.commitments[0])) && Array.isArray(o.receipts) && (!o.receipts.length || channel_1.PacketState.isAmino(o.receipts[0])) && Array.isArray(o.send_sequences) && (!o.send_sequences.length || exports.PacketSequence.isAmino(o.send_sequences[0])) && Array.isArray(o.recv_sequences) && (!o.recv_sequences.length || exports.PacketSequence.isAmino(o.recv_sequences[0])) && Array.isArray(o.ack_sequences) && (!o.ack_sequences.length || exports.PacketSequence.isAmino(o.ack_sequences[0])) && typeof o.next_channel_sequence === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.channels) {
            channel_1.IdentifiedChannel.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.acknowledgements) {
            channel_1.PacketState.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.commitments) {
            channel_1.PacketState.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.receipts) {
            channel_1.PacketState.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.send_sequences) {
            exports.PacketSequence.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.recv_sequences) {
            exports.PacketSequence.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.ack_sequences) {
            exports.PacketSequence.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.next_channel_sequence !== BigInt(0)) {
            writer.uint32(64).uint64(message.next_channel_sequence);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.channels.push(channel_1.IdentifiedChannel.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.acknowledgements.push(channel_1.PacketState.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.commitments.push(channel_1.PacketState.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.receipts.push(channel_1.PacketState.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.send_sequences.push(exports.PacketSequence.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.recv_sequences.push(exports.PacketSequence.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.ack_sequences.push(exports.PacketSequence.decode(reader, reader.uint32()));
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
    fromJSON(object) {
        return {
            channels: Array.isArray(object?.channels) ? object.channels.map((e) => channel_1.IdentifiedChannel.fromJSON(e)) : [],
            acknowledgements: Array.isArray(object?.acknowledgements) ? object.acknowledgements.map((e) => channel_1.PacketState.fromJSON(e)) : [],
            commitments: Array.isArray(object?.commitments) ? object.commitments.map((e) => channel_1.PacketState.fromJSON(e)) : [],
            receipts: Array.isArray(object?.receipts) ? object.receipts.map((e) => channel_1.PacketState.fromJSON(e)) : [],
            send_sequences: Array.isArray(object?.send_sequences) ? object.send_sequences.map((e) => exports.PacketSequence.fromJSON(e)) : [],
            recv_sequences: Array.isArray(object?.recv_sequences) ? object.recv_sequences.map((e) => exports.PacketSequence.fromJSON(e)) : [],
            ack_sequences: Array.isArray(object?.ack_sequences) ? object.ack_sequences.map((e) => exports.PacketSequence.fromJSON(e)) : [],
            next_channel_sequence: (0, helpers_1.isSet)(object.next_channel_sequence) ? BigInt(object.next_channel_sequence.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.channels) {
            obj.channels = message.channels.map(e => e ? channel_1.IdentifiedChannel.toJSON(e) : undefined);
        }
        else {
            obj.channels = [];
        }
        if (message.acknowledgements) {
            obj.acknowledgements = message.acknowledgements.map(e => e ? channel_1.PacketState.toJSON(e) : undefined);
        }
        else {
            obj.acknowledgements = [];
        }
        if (message.commitments) {
            obj.commitments = message.commitments.map(e => e ? channel_1.PacketState.toJSON(e) : undefined);
        }
        else {
            obj.commitments = [];
        }
        if (message.receipts) {
            obj.receipts = message.receipts.map(e => e ? channel_1.PacketState.toJSON(e) : undefined);
        }
        else {
            obj.receipts = [];
        }
        if (message.send_sequences) {
            obj.send_sequences = message.send_sequences.map(e => e ? exports.PacketSequence.toJSON(e) : undefined);
        }
        else {
            obj.send_sequences = [];
        }
        if (message.recv_sequences) {
            obj.recv_sequences = message.recv_sequences.map(e => e ? exports.PacketSequence.toJSON(e) : undefined);
        }
        else {
            obj.recv_sequences = [];
        }
        if (message.ack_sequences) {
            obj.ack_sequences = message.ack_sequences.map(e => e ? exports.PacketSequence.toJSON(e) : undefined);
        }
        else {
            obj.ack_sequences = [];
        }
        message.next_channel_sequence !== undefined && (obj.next_channel_sequence = (message.next_channel_sequence || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.channels = object.channels?.map(e => channel_1.IdentifiedChannel.fromPartial(e)) || [];
        message.acknowledgements = object.acknowledgements?.map(e => channel_1.PacketState.fromPartial(e)) || [];
        message.commitments = object.commitments?.map(e => channel_1.PacketState.fromPartial(e)) || [];
        message.receipts = object.receipts?.map(e => channel_1.PacketState.fromPartial(e)) || [];
        message.send_sequences = object.send_sequences?.map(e => exports.PacketSequence.fromPartial(e)) || [];
        message.recv_sequences = object.recv_sequences?.map(e => exports.PacketSequence.fromPartial(e)) || [];
        message.ack_sequences = object.ack_sequences?.map(e => exports.PacketSequence.fromPartial(e)) || [];
        message.next_channel_sequence = object.next_channel_sequence !== undefined && object.next_channel_sequence !== null ? BigInt(object.next_channel_sequence.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        message.channels = object.channels?.map(e => channel_1.IdentifiedChannel.fromAmino(e)) || [];
        message.acknowledgements = object.acknowledgements?.map(e => channel_1.PacketState.fromAmino(e)) || [];
        message.commitments = object.commitments?.map(e => channel_1.PacketState.fromAmino(e)) || [];
        message.receipts = object.receipts?.map(e => channel_1.PacketState.fromAmino(e)) || [];
        message.send_sequences = object.send_sequences?.map(e => exports.PacketSequence.fromAmino(e)) || [];
        message.recv_sequences = object.recv_sequences?.map(e => exports.PacketSequence.fromAmino(e)) || [];
        message.ack_sequences = object.ack_sequences?.map(e => exports.PacketSequence.fromAmino(e)) || [];
        if (object.next_channel_sequence !== undefined && object.next_channel_sequence !== null) {
            message.next_channel_sequence = BigInt(object.next_channel_sequence);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.channels) {
            obj.channels = message.channels.map(e => e ? channel_1.IdentifiedChannel.toAmino(e) : undefined);
        }
        else {
            obj.channels = [];
        }
        if (message.acknowledgements) {
            obj.acknowledgements = message.acknowledgements.map(e => e ? channel_1.PacketState.toAmino(e) : undefined);
        }
        else {
            obj.acknowledgements = [];
        }
        if (message.commitments) {
            obj.commitments = message.commitments.map(e => e ? channel_1.PacketState.toAmino(e) : undefined);
        }
        else {
            obj.commitments = [];
        }
        if (message.receipts) {
            obj.receipts = message.receipts.map(e => e ? channel_1.PacketState.toAmino(e) : undefined);
        }
        else {
            obj.receipts = [];
        }
        if (message.send_sequences) {
            obj.send_sequences = message.send_sequences.map(e => e ? exports.PacketSequence.toAmino(e) : undefined);
        }
        else {
            obj.send_sequences = [];
        }
        if (message.recv_sequences) {
            obj.recv_sequences = message.recv_sequences.map(e => e ? exports.PacketSequence.toAmino(e) : undefined);
        }
        else {
            obj.recv_sequences = [];
        }
        if (message.ack_sequences) {
            obj.ack_sequences = message.ack_sequences.map(e => e ? exports.PacketSequence.toAmino(e) : undefined);
        }
        else {
            obj.ack_sequences = [];
        }
        obj.next_channel_sequence = message.next_channel_sequence ? message.next_channel_sequence.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GenesisState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GenesisState",
            value: exports.GenesisState.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GenesisState.decode(message.value);
    },
    toProto(message) {
        return exports.GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.GenesisState.typeUrl, exports.GenesisState);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.GenesisState.aminoType, exports.GenesisState.typeUrl);
function createBasePacketSequence() {
    return {
        port_id: "",
        channel_id: "",
        sequence: BigInt(0)
    };
}
exports.PacketSequence = {
    typeUrl: "/ibc.core.channel.v1.PacketSequence",
    aminoType: "cosmos-sdk/PacketSequence",
    is(o) {
        return o && (o.$typeUrl === exports.PacketSequence.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && typeof o.sequence === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.PacketSequence.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && typeof o.sequence === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.PacketSequence.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && typeof o.sequence === "bigint");
    },
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
        const message = createBasePacketSequence();
        message.port_id = object.port_id ?? "";
        message.channel_id = object.channel_id ?? "";
        message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
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
    toAmino(message) {
        const obj = {};
        obj.port_id = message.port_id;
        obj.channel_id = message.channel_id;
        obj.sequence = message.sequence ? message.sequence.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.PacketSequence.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/PacketSequence",
            value: exports.PacketSequence.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.PacketSequence.decode(message.value);
    },
    toProto(message) {
        return exports.PacketSequence.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.PacketSequence",
            value: exports.PacketSequence.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.PacketSequence.typeUrl, exports.PacketSequence);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.PacketSequence.aminoType, exports.PacketSequence.typeUrl);
//# sourceMappingURL=genesis.js.map
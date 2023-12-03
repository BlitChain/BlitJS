"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryNextSequenceSendResponse = exports.QueryNextSequenceSendRequest = exports.QueryNextSequenceReceiveResponse = exports.QueryNextSequenceReceiveRequest = exports.QueryUnreceivedAcksResponse = exports.QueryUnreceivedAcksRequest = exports.QueryUnreceivedPacketsResponse = exports.QueryUnreceivedPacketsRequest = exports.QueryPacketAcknowledgementsResponse = exports.QueryPacketAcknowledgementsRequest = exports.QueryPacketAcknowledgementResponse = exports.QueryPacketAcknowledgementRequest = exports.QueryPacketReceiptResponse = exports.QueryPacketReceiptRequest = exports.QueryPacketCommitmentsResponse = exports.QueryPacketCommitmentsRequest = exports.QueryPacketCommitmentResponse = exports.QueryPacketCommitmentRequest = exports.QueryChannelConsensusStateResponse = exports.QueryChannelConsensusStateRequest = exports.QueryChannelClientStateResponse = exports.QueryChannelClientStateRequest = exports.QueryConnectionChannelsResponse = exports.QueryConnectionChannelsRequest = exports.QueryChannelsResponse = exports.QueryChannelsRequest = exports.QueryChannelResponse = exports.QueryChannelRequest = exports.protobufPackage = void 0;
//@ts-nocheck
const pagination_1 = require("../../../../cosmos/base/query/v1beta1/pagination");
const channel_1 = require("./channel");
const client_1 = require("../../client/v1/client");
const any_1 = require("../../../../google/protobuf/any");
const binary_1 = require("../../../../binary");
const helpers_1 = require("../../../../helpers");
exports.protobufPackage = "ibc.core.channel.v1";
function createBaseQueryChannelRequest() {
    return {
        port_id: "",
        channel_id: ""
    };
}
exports.QueryChannelRequest = {
    typeUrl: "/ibc.core.channel.v1.QueryChannelRequest",
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
        const message = createBaseQueryChannelRequest();
        message.port_id = object.port_id ?? "";
        message.channel_id = object.channel_id ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            port_id: object?.port_id,
            channel_id: object?.channel_id
        };
    },
    toSDK(message) {
        const obj = {};
        obj.port_id = message.port_id;
        obj.channel_id = message.channel_id;
        return obj;
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
        return exports.QueryChannelRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryChannelRequest",
            value: exports.QueryChannelRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryChannelRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryChannelRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryChannelRequest",
            value: exports.QueryChannelRequest.encode(message).finish()
        };
    }
};
function createBaseQueryChannelResponse() {
    return {
        channel: undefined,
        proof: new Uint8Array(),
        proof_height: client_1.Height.fromPartial({})
    };
}
exports.QueryChannelResponse = {
    typeUrl: "/ibc.core.channel.v1.QueryChannelResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.channel !== undefined) {
            channel_1.Channel.encode(message.channel, writer.uint32(10).fork()).ldelim();
        }
        if (message.proof.length !== 0) {
            writer.uint32(18).bytes(message.proof);
        }
        if (message.proof_height !== undefined) {
            client_1.Height.encode(message.proof_height, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryChannelResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.channel = channel_1.Channel.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.proof = reader.bytes();
                    break;
                case 3:
                    message.proof_height = client_1.Height.decode(reader, reader.uint32());
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
            channel: (0, helpers_1.isSet)(object.channel) ? channel_1.Channel.fromJSON(object.channel) : undefined,
            proof: (0, helpers_1.isSet)(object.proof) ? (0, helpers_1.bytesFromBase64)(object.proof) : new Uint8Array(),
            proof_height: (0, helpers_1.isSet)(object.proof_height) ? client_1.Height.fromJSON(object.proof_height) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.channel !== undefined && (obj.channel = message.channel ? channel_1.Channel.toJSON(message.channel) : undefined);
        message.proof !== undefined && (obj.proof = (0, helpers_1.base64FromBytes)(message.proof !== undefined ? message.proof : new Uint8Array()));
        message.proof_height !== undefined && (obj.proof_height = message.proof_height ? client_1.Height.toJSON(message.proof_height) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryChannelResponse();
        message.channel = object.channel !== undefined && object.channel !== null ? channel_1.Channel.fromPartial(object.channel) : undefined;
        message.proof = object.proof ?? new Uint8Array();
        message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? client_1.Height.fromPartial(object.proof_height) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            channel: object.channel ? channel_1.Channel.fromSDK(object.channel) : undefined,
            proof: object?.proof,
            proof_height: object.proof_height ? client_1.Height.fromSDK(object.proof_height) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.channel !== undefined && (obj.channel = message.channel ? channel_1.Channel.toSDK(message.channel) : undefined);
        obj.proof = message.proof;
        message.proof_height !== undefined && (obj.proof_height = message.proof_height ? client_1.Height.toSDK(message.proof_height) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            channel: object?.channel ? channel_1.Channel.fromAmino(object.channel) : undefined,
            proof: object.proof,
            proof_height: object?.proof_height ? client_1.Height.fromAmino(object.proof_height) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.channel = message.channel ? channel_1.Channel.toAmino(message.channel) : undefined;
        obj.proof = message.proof;
        obj.proof_height = message.proof_height ? client_1.Height.toAmino(message.proof_height) : {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryChannelResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryChannelResponse",
            value: exports.QueryChannelResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryChannelResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryChannelResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryChannelResponse",
            value: exports.QueryChannelResponse.encode(message).finish()
        };
    }
};
function createBaseQueryChannelsRequest() {
    return {
        pagination: undefined
    };
}
exports.QueryChannelsRequest = {
    typeUrl: "/ibc.core.channel.v1.QueryChannelsRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryChannelsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryChannelsRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            pagination: object.pagination ? pagination_1.PageRequest.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            pagination: object?.pagination ? pagination_1.PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryChannelsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryChannelsRequest",
            value: exports.QueryChannelsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryChannelsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryChannelsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryChannelsRequest",
            value: exports.QueryChannelsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryChannelsResponse() {
    return {
        channels: [],
        pagination: undefined,
        height: client_1.Height.fromPartial({})
    };
}
exports.QueryChannelsResponse = {
    typeUrl: "/ibc.core.channel.v1.QueryChannelsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.channels) {
            channel_1.IdentifiedChannel.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        if (message.height !== undefined) {
            client_1.Height.encode(message.height, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryChannelsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.channels.push(channel_1.IdentifiedChannel.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.height = client_1.Height.decode(reader, reader.uint32());
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
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined,
            height: (0, helpers_1.isSet)(object.height) ? client_1.Height.fromJSON(object.height) : undefined
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
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        message.height !== undefined && (obj.height = message.height ? client_1.Height.toJSON(message.height) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryChannelsResponse();
        message.channels = object.channels?.map(e => channel_1.IdentifiedChannel.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        message.height = object.height !== undefined && object.height !== null ? client_1.Height.fromPartial(object.height) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            channels: Array.isArray(object?.channels) ? object.channels.map((e) => channel_1.IdentifiedChannel.fromSDK(e)) : [],
            pagination: object.pagination ? pagination_1.PageResponse.fromSDK(object.pagination) : undefined,
            height: object.height ? client_1.Height.fromSDK(object.height) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.channels) {
            obj.channels = message.channels.map(e => e ? channel_1.IdentifiedChannel.toSDK(e) : undefined);
        }
        else {
            obj.channels = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toSDK(message.pagination) : undefined);
        message.height !== undefined && (obj.height = message.height ? client_1.Height.toSDK(message.height) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            channels: Array.isArray(object?.channels) ? object.channels.map((e) => channel_1.IdentifiedChannel.fromAmino(e)) : [],
            pagination: object?.pagination ? pagination_1.PageResponse.fromAmino(object.pagination) : undefined,
            height: object?.height ? client_1.Height.fromAmino(object.height) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.channels) {
            obj.channels = message.channels.map(e => e ? channel_1.IdentifiedChannel.toAmino(e) : undefined);
        }
        else {
            obj.channels = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        obj.height = message.height ? client_1.Height.toAmino(message.height) : {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryChannelsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryChannelsResponse",
            value: exports.QueryChannelsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryChannelsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryChannelsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryChannelsResponse",
            value: exports.QueryChannelsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryConnectionChannelsRequest() {
    return {
        connection: "",
        pagination: undefined
    };
}
exports.QueryConnectionChannelsRequest = {
    typeUrl: "/ibc.core.channel.v1.QueryConnectionChannelsRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.connection !== "") {
            writer.uint32(10).string(message.connection);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConnectionChannelsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connection = reader.string();
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
            connection: (0, helpers_1.isSet)(object.connection) ? String(object.connection) : "",
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.connection !== undefined && (obj.connection = message.connection);
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryConnectionChannelsRequest();
        message.connection = object.connection ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            connection: object?.connection,
            pagination: object.pagination ? pagination_1.PageRequest.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.connection = message.connection;
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            connection: object.connection,
            pagination: object?.pagination ? pagination_1.PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.connection = message.connection;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryConnectionChannelsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryConnectionChannelsRequest",
            value: exports.QueryConnectionChannelsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryConnectionChannelsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryConnectionChannelsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryConnectionChannelsRequest",
            value: exports.QueryConnectionChannelsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryConnectionChannelsResponse() {
    return {
        channels: [],
        pagination: undefined,
        height: client_1.Height.fromPartial({})
    };
}
exports.QueryConnectionChannelsResponse = {
    typeUrl: "/ibc.core.channel.v1.QueryConnectionChannelsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.channels) {
            channel_1.IdentifiedChannel.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        if (message.height !== undefined) {
            client_1.Height.encode(message.height, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConnectionChannelsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.channels.push(channel_1.IdentifiedChannel.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.height = client_1.Height.decode(reader, reader.uint32());
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
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined,
            height: (0, helpers_1.isSet)(object.height) ? client_1.Height.fromJSON(object.height) : undefined
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
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        message.height !== undefined && (obj.height = message.height ? client_1.Height.toJSON(message.height) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryConnectionChannelsResponse();
        message.channels = object.channels?.map(e => channel_1.IdentifiedChannel.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        message.height = object.height !== undefined && object.height !== null ? client_1.Height.fromPartial(object.height) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            channels: Array.isArray(object?.channels) ? object.channels.map((e) => channel_1.IdentifiedChannel.fromSDK(e)) : [],
            pagination: object.pagination ? pagination_1.PageResponse.fromSDK(object.pagination) : undefined,
            height: object.height ? client_1.Height.fromSDK(object.height) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.channels) {
            obj.channels = message.channels.map(e => e ? channel_1.IdentifiedChannel.toSDK(e) : undefined);
        }
        else {
            obj.channels = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toSDK(message.pagination) : undefined);
        message.height !== undefined && (obj.height = message.height ? client_1.Height.toSDK(message.height) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            channels: Array.isArray(object?.channels) ? object.channels.map((e) => channel_1.IdentifiedChannel.fromAmino(e)) : [],
            pagination: object?.pagination ? pagination_1.PageResponse.fromAmino(object.pagination) : undefined,
            height: object?.height ? client_1.Height.fromAmino(object.height) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.channels) {
            obj.channels = message.channels.map(e => e ? channel_1.IdentifiedChannel.toAmino(e) : undefined);
        }
        else {
            obj.channels = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        obj.height = message.height ? client_1.Height.toAmino(message.height) : {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryConnectionChannelsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryConnectionChannelsResponse",
            value: exports.QueryConnectionChannelsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryConnectionChannelsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryConnectionChannelsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryConnectionChannelsResponse",
            value: exports.QueryConnectionChannelsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryChannelClientStateRequest() {
    return {
        port_id: "",
        channel_id: ""
    };
}
exports.QueryChannelClientStateRequest = {
    typeUrl: "/ibc.core.channel.v1.QueryChannelClientStateRequest",
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
        const message = createBaseQueryChannelClientStateRequest();
        message.port_id = object.port_id ?? "";
        message.channel_id = object.channel_id ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            port_id: object?.port_id,
            channel_id: object?.channel_id
        };
    },
    toSDK(message) {
        const obj = {};
        obj.port_id = message.port_id;
        obj.channel_id = message.channel_id;
        return obj;
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
        return exports.QueryChannelClientStateRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryChannelClientStateRequest",
            value: exports.QueryChannelClientStateRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryChannelClientStateRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryChannelClientStateRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryChannelClientStateRequest",
            value: exports.QueryChannelClientStateRequest.encode(message).finish()
        };
    }
};
function createBaseQueryChannelClientStateResponse() {
    return {
        identified_client_state: undefined,
        proof: new Uint8Array(),
        proof_height: client_1.Height.fromPartial({})
    };
}
exports.QueryChannelClientStateResponse = {
    typeUrl: "/ibc.core.channel.v1.QueryChannelClientStateResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.identified_client_state !== undefined) {
            client_1.IdentifiedClientState.encode(message.identified_client_state, writer.uint32(10).fork()).ldelim();
        }
        if (message.proof.length !== 0) {
            writer.uint32(18).bytes(message.proof);
        }
        if (message.proof_height !== undefined) {
            client_1.Height.encode(message.proof_height, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryChannelClientStateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.identified_client_state = client_1.IdentifiedClientState.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.proof = reader.bytes();
                    break;
                case 3:
                    message.proof_height = client_1.Height.decode(reader, reader.uint32());
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
            identified_client_state: (0, helpers_1.isSet)(object.identified_client_state) ? client_1.IdentifiedClientState.fromJSON(object.identified_client_state) : undefined,
            proof: (0, helpers_1.isSet)(object.proof) ? (0, helpers_1.bytesFromBase64)(object.proof) : new Uint8Array(),
            proof_height: (0, helpers_1.isSet)(object.proof_height) ? client_1.Height.fromJSON(object.proof_height) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.identified_client_state !== undefined && (obj.identified_client_state = message.identified_client_state ? client_1.IdentifiedClientState.toJSON(message.identified_client_state) : undefined);
        message.proof !== undefined && (obj.proof = (0, helpers_1.base64FromBytes)(message.proof !== undefined ? message.proof : new Uint8Array()));
        message.proof_height !== undefined && (obj.proof_height = message.proof_height ? client_1.Height.toJSON(message.proof_height) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryChannelClientStateResponse();
        message.identified_client_state = object.identified_client_state !== undefined && object.identified_client_state !== null ? client_1.IdentifiedClientState.fromPartial(object.identified_client_state) : undefined;
        message.proof = object.proof ?? new Uint8Array();
        message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? client_1.Height.fromPartial(object.proof_height) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            identified_client_state: object.identified_client_state ? client_1.IdentifiedClientState.fromSDK(object.identified_client_state) : undefined,
            proof: object?.proof,
            proof_height: object.proof_height ? client_1.Height.fromSDK(object.proof_height) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.identified_client_state !== undefined && (obj.identified_client_state = message.identified_client_state ? client_1.IdentifiedClientState.toSDK(message.identified_client_state) : undefined);
        obj.proof = message.proof;
        message.proof_height !== undefined && (obj.proof_height = message.proof_height ? client_1.Height.toSDK(message.proof_height) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            identified_client_state: object?.identified_client_state ? client_1.IdentifiedClientState.fromAmino(object.identified_client_state) : undefined,
            proof: object.proof,
            proof_height: object?.proof_height ? client_1.Height.fromAmino(object.proof_height) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.identified_client_state = message.identified_client_state ? client_1.IdentifiedClientState.toAmino(message.identified_client_state) : undefined;
        obj.proof = message.proof;
        obj.proof_height = message.proof_height ? client_1.Height.toAmino(message.proof_height) : {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryChannelClientStateResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryChannelClientStateResponse",
            value: exports.QueryChannelClientStateResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryChannelClientStateResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryChannelClientStateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryChannelClientStateResponse",
            value: exports.QueryChannelClientStateResponse.encode(message).finish()
        };
    }
};
function createBaseQueryChannelConsensusStateRequest() {
    return {
        port_id: "",
        channel_id: "",
        revision_number: BigInt(0),
        revision_height: BigInt(0)
    };
}
exports.QueryChannelConsensusStateRequest = {
    typeUrl: "/ibc.core.channel.v1.QueryChannelConsensusStateRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
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
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
    fromJSON(object) {
        return {
            port_id: (0, helpers_1.isSet)(object.port_id) ? String(object.port_id) : "",
            channel_id: (0, helpers_1.isSet)(object.channel_id) ? String(object.channel_id) : "",
            revision_number: (0, helpers_1.isSet)(object.revision_number) ? BigInt(object.revision_number.toString()) : BigInt(0),
            revision_height: (0, helpers_1.isSet)(object.revision_height) ? BigInt(object.revision_height.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.port_id !== undefined && (obj.port_id = message.port_id);
        message.channel_id !== undefined && (obj.channel_id = message.channel_id);
        message.revision_number !== undefined && (obj.revision_number = (message.revision_number || BigInt(0)).toString());
        message.revision_height !== undefined && (obj.revision_height = (message.revision_height || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryChannelConsensusStateRequest();
        message.port_id = object.port_id ?? "";
        message.channel_id = object.channel_id ?? "";
        message.revision_number = object.revision_number !== undefined && object.revision_number !== null ? BigInt(object.revision_number.toString()) : BigInt(0);
        message.revision_height = object.revision_height !== undefined && object.revision_height !== null ? BigInt(object.revision_height.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            port_id: object?.port_id,
            channel_id: object?.channel_id,
            revision_number: object?.revision_number,
            revision_height: object?.revision_height
        };
    },
    toSDK(message) {
        const obj = {};
        obj.port_id = message.port_id;
        obj.channel_id = message.channel_id;
        obj.revision_number = message.revision_number;
        obj.revision_height = message.revision_height;
        return obj;
    },
    fromAmino(object) {
        return {
            port_id: object.port_id,
            channel_id: object.channel_id,
            revision_number: BigInt(object.revision_number),
            revision_height: BigInt(object.revision_height)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.port_id = message.port_id;
        obj.channel_id = message.channel_id;
        obj.revision_number = message.revision_number ? message.revision_number.toString() : undefined;
        obj.revision_height = message.revision_height ? message.revision_height.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryChannelConsensusStateRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryChannelConsensusStateRequest",
            value: exports.QueryChannelConsensusStateRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryChannelConsensusStateRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryChannelConsensusStateRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryChannelConsensusStateRequest",
            value: exports.QueryChannelConsensusStateRequest.encode(message).finish()
        };
    }
};
function createBaseQueryChannelConsensusStateResponse() {
    return {
        consensus_state: undefined,
        client_id: "",
        proof: new Uint8Array(),
        proof_height: client_1.Height.fromPartial({})
    };
}
exports.QueryChannelConsensusStateResponse = {
    typeUrl: "/ibc.core.channel.v1.QueryChannelConsensusStateResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.consensus_state !== undefined) {
            any_1.Any.encode(message.consensus_state, writer.uint32(10).fork()).ldelim();
        }
        if (message.client_id !== "") {
            writer.uint32(18).string(message.client_id);
        }
        if (message.proof.length !== 0) {
            writer.uint32(26).bytes(message.proof);
        }
        if (message.proof_height !== undefined) {
            client_1.Height.encode(message.proof_height, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryChannelConsensusStateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.consensus_state = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.client_id = reader.string();
                    break;
                case 3:
                    message.proof = reader.bytes();
                    break;
                case 4:
                    message.proof_height = client_1.Height.decode(reader, reader.uint32());
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
            consensus_state: (0, helpers_1.isSet)(object.consensus_state) ? any_1.Any.fromJSON(object.consensus_state) : undefined,
            client_id: (0, helpers_1.isSet)(object.client_id) ? String(object.client_id) : "",
            proof: (0, helpers_1.isSet)(object.proof) ? (0, helpers_1.bytesFromBase64)(object.proof) : new Uint8Array(),
            proof_height: (0, helpers_1.isSet)(object.proof_height) ? client_1.Height.fromJSON(object.proof_height) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.consensus_state !== undefined && (obj.consensus_state = message.consensus_state ? any_1.Any.toJSON(message.consensus_state) : undefined);
        message.client_id !== undefined && (obj.client_id = message.client_id);
        message.proof !== undefined && (obj.proof = (0, helpers_1.base64FromBytes)(message.proof !== undefined ? message.proof : new Uint8Array()));
        message.proof_height !== undefined && (obj.proof_height = message.proof_height ? client_1.Height.toJSON(message.proof_height) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryChannelConsensusStateResponse();
        message.consensus_state = object.consensus_state !== undefined && object.consensus_state !== null ? any_1.Any.fromPartial(object.consensus_state) : undefined;
        message.client_id = object.client_id ?? "";
        message.proof = object.proof ?? new Uint8Array();
        message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? client_1.Height.fromPartial(object.proof_height) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            consensus_state: object.consensus_state ? any_1.Any.fromSDK(object.consensus_state) : undefined,
            client_id: object?.client_id,
            proof: object?.proof,
            proof_height: object.proof_height ? client_1.Height.fromSDK(object.proof_height) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.consensus_state !== undefined && (obj.consensus_state = message.consensus_state ? any_1.Any.toSDK(message.consensus_state) : undefined);
        obj.client_id = message.client_id;
        obj.proof = message.proof;
        message.proof_height !== undefined && (obj.proof_height = message.proof_height ? client_1.Height.toSDK(message.proof_height) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            consensus_state: object?.consensus_state ? any_1.Any.fromAmino(object.consensus_state) : undefined,
            client_id: object.client_id,
            proof: object.proof,
            proof_height: object?.proof_height ? client_1.Height.fromAmino(object.proof_height) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.consensus_state = message.consensus_state ? any_1.Any.toAmino(message.consensus_state) : undefined;
        obj.client_id = message.client_id;
        obj.proof = message.proof;
        obj.proof_height = message.proof_height ? client_1.Height.toAmino(message.proof_height) : {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryChannelConsensusStateResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryChannelConsensusStateResponse",
            value: exports.QueryChannelConsensusStateResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryChannelConsensusStateResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryChannelConsensusStateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryChannelConsensusStateResponse",
            value: exports.QueryChannelConsensusStateResponse.encode(message).finish()
        };
    }
};
function createBaseQueryPacketCommitmentRequest() {
    return {
        port_id: "",
        channel_id: "",
        sequence: BigInt(0)
    };
}
exports.QueryPacketCommitmentRequest = {
    typeUrl: "/ibc.core.channel.v1.QueryPacketCommitmentRequest",
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
        const message = createBaseQueryPacketCommitmentRequest();
        message.port_id = object.port_id ?? "";
        message.channel_id = object.channel_id ?? "";
        message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            port_id: object?.port_id,
            channel_id: object?.channel_id,
            sequence: object?.sequence
        };
    },
    toSDK(message) {
        const obj = {};
        obj.port_id = message.port_id;
        obj.channel_id = message.channel_id;
        obj.sequence = message.sequence;
        return obj;
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
        return exports.QueryPacketCommitmentRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryPacketCommitmentRequest",
            value: exports.QueryPacketCommitmentRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryPacketCommitmentRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryPacketCommitmentRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryPacketCommitmentRequest",
            value: exports.QueryPacketCommitmentRequest.encode(message).finish()
        };
    }
};
function createBaseQueryPacketCommitmentResponse() {
    return {
        commitment: new Uint8Array(),
        proof: new Uint8Array(),
        proof_height: client_1.Height.fromPartial({})
    };
}
exports.QueryPacketCommitmentResponse = {
    typeUrl: "/ibc.core.channel.v1.QueryPacketCommitmentResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.commitment.length !== 0) {
            writer.uint32(10).bytes(message.commitment);
        }
        if (message.proof.length !== 0) {
            writer.uint32(18).bytes(message.proof);
        }
        if (message.proof_height !== undefined) {
            client_1.Height.encode(message.proof_height, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
                    message.proof_height = client_1.Height.decode(reader, reader.uint32());
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
            commitment: (0, helpers_1.isSet)(object.commitment) ? (0, helpers_1.bytesFromBase64)(object.commitment) : new Uint8Array(),
            proof: (0, helpers_1.isSet)(object.proof) ? (0, helpers_1.bytesFromBase64)(object.proof) : new Uint8Array(),
            proof_height: (0, helpers_1.isSet)(object.proof_height) ? client_1.Height.fromJSON(object.proof_height) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.commitment !== undefined && (obj.commitment = (0, helpers_1.base64FromBytes)(message.commitment !== undefined ? message.commitment : new Uint8Array()));
        message.proof !== undefined && (obj.proof = (0, helpers_1.base64FromBytes)(message.proof !== undefined ? message.proof : new Uint8Array()));
        message.proof_height !== undefined && (obj.proof_height = message.proof_height ? client_1.Height.toJSON(message.proof_height) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryPacketCommitmentResponse();
        message.commitment = object.commitment ?? new Uint8Array();
        message.proof = object.proof ?? new Uint8Array();
        message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? client_1.Height.fromPartial(object.proof_height) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            commitment: object?.commitment,
            proof: object?.proof,
            proof_height: object.proof_height ? client_1.Height.fromSDK(object.proof_height) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.commitment = message.commitment;
        obj.proof = message.proof;
        message.proof_height !== undefined && (obj.proof_height = message.proof_height ? client_1.Height.toSDK(message.proof_height) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            commitment: object.commitment,
            proof: object.proof,
            proof_height: object?.proof_height ? client_1.Height.fromAmino(object.proof_height) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.commitment = message.commitment;
        obj.proof = message.proof;
        obj.proof_height = message.proof_height ? client_1.Height.toAmino(message.proof_height) : {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryPacketCommitmentResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryPacketCommitmentResponse",
            value: exports.QueryPacketCommitmentResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryPacketCommitmentResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryPacketCommitmentResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryPacketCommitmentResponse",
            value: exports.QueryPacketCommitmentResponse.encode(message).finish()
        };
    }
};
function createBaseQueryPacketCommitmentsRequest() {
    return {
        port_id: "",
        channel_id: "",
        pagination: undefined
    };
}
exports.QueryPacketCommitmentsRequest = {
    typeUrl: "/ibc.core.channel.v1.QueryPacketCommitmentsRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.port_id !== "") {
            writer.uint32(10).string(message.port_id);
        }
        if (message.channel_id !== "") {
            writer.uint32(18).string(message.channel_id);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.port_id !== undefined && (obj.port_id = message.port_id);
        message.channel_id !== undefined && (obj.channel_id = message.channel_id);
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryPacketCommitmentsRequest();
        message.port_id = object.port_id ?? "";
        message.channel_id = object.channel_id ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            port_id: object?.port_id,
            channel_id: object?.channel_id,
            pagination: object.pagination ? pagination_1.PageRequest.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.port_id = message.port_id;
        obj.channel_id = message.channel_id;
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            port_id: object.port_id,
            channel_id: object.channel_id,
            pagination: object?.pagination ? pagination_1.PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.port_id = message.port_id;
        obj.channel_id = message.channel_id;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryPacketCommitmentsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryPacketCommitmentsRequest",
            value: exports.QueryPacketCommitmentsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryPacketCommitmentsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryPacketCommitmentsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryPacketCommitmentsRequest",
            value: exports.QueryPacketCommitmentsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryPacketCommitmentsResponse() {
    return {
        commitments: [],
        pagination: undefined,
        height: client_1.Height.fromPartial({})
    };
}
exports.QueryPacketCommitmentsResponse = {
    typeUrl: "/ibc.core.channel.v1.QueryPacketCommitmentsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.commitments) {
            channel_1.PacketState.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        if (message.height !== undefined) {
            client_1.Height.encode(message.height, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPacketCommitmentsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.commitments.push(channel_1.PacketState.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.height = client_1.Height.decode(reader, reader.uint32());
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
            commitments: Array.isArray(object?.commitments) ? object.commitments.map((e) => channel_1.PacketState.fromJSON(e)) : [],
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined,
            height: (0, helpers_1.isSet)(object.height) ? client_1.Height.fromJSON(object.height) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.commitments) {
            obj.commitments = message.commitments.map(e => e ? channel_1.PacketState.toJSON(e) : undefined);
        }
        else {
            obj.commitments = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        message.height !== undefined && (obj.height = message.height ? client_1.Height.toJSON(message.height) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryPacketCommitmentsResponse();
        message.commitments = object.commitments?.map(e => channel_1.PacketState.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        message.height = object.height !== undefined && object.height !== null ? client_1.Height.fromPartial(object.height) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            commitments: Array.isArray(object?.commitments) ? object.commitments.map((e) => channel_1.PacketState.fromSDK(e)) : [],
            pagination: object.pagination ? pagination_1.PageResponse.fromSDK(object.pagination) : undefined,
            height: object.height ? client_1.Height.fromSDK(object.height) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.commitments) {
            obj.commitments = message.commitments.map(e => e ? channel_1.PacketState.toSDK(e) : undefined);
        }
        else {
            obj.commitments = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toSDK(message.pagination) : undefined);
        message.height !== undefined && (obj.height = message.height ? client_1.Height.toSDK(message.height) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            commitments: Array.isArray(object?.commitments) ? object.commitments.map((e) => channel_1.PacketState.fromAmino(e)) : [],
            pagination: object?.pagination ? pagination_1.PageResponse.fromAmino(object.pagination) : undefined,
            height: object?.height ? client_1.Height.fromAmino(object.height) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.commitments) {
            obj.commitments = message.commitments.map(e => e ? channel_1.PacketState.toAmino(e) : undefined);
        }
        else {
            obj.commitments = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        obj.height = message.height ? client_1.Height.toAmino(message.height) : {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryPacketCommitmentsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryPacketCommitmentsResponse",
            value: exports.QueryPacketCommitmentsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryPacketCommitmentsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryPacketCommitmentsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryPacketCommitmentsResponse",
            value: exports.QueryPacketCommitmentsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryPacketReceiptRequest() {
    return {
        port_id: "",
        channel_id: "",
        sequence: BigInt(0)
    };
}
exports.QueryPacketReceiptRequest = {
    typeUrl: "/ibc.core.channel.v1.QueryPacketReceiptRequest",
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
        const message = createBaseQueryPacketReceiptRequest();
        message.port_id = object.port_id ?? "";
        message.channel_id = object.channel_id ?? "";
        message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            port_id: object?.port_id,
            channel_id: object?.channel_id,
            sequence: object?.sequence
        };
    },
    toSDK(message) {
        const obj = {};
        obj.port_id = message.port_id;
        obj.channel_id = message.channel_id;
        obj.sequence = message.sequence;
        return obj;
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
        return exports.QueryPacketReceiptRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryPacketReceiptRequest",
            value: exports.QueryPacketReceiptRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryPacketReceiptRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryPacketReceiptRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryPacketReceiptRequest",
            value: exports.QueryPacketReceiptRequest.encode(message).finish()
        };
    }
};
function createBaseQueryPacketReceiptResponse() {
    return {
        received: false,
        proof: new Uint8Array(),
        proof_height: client_1.Height.fromPartial({})
    };
}
exports.QueryPacketReceiptResponse = {
    typeUrl: "/ibc.core.channel.v1.QueryPacketReceiptResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.received === true) {
            writer.uint32(16).bool(message.received);
        }
        if (message.proof.length !== 0) {
            writer.uint32(26).bytes(message.proof);
        }
        if (message.proof_height !== undefined) {
            client_1.Height.encode(message.proof_height, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
                    message.proof_height = client_1.Height.decode(reader, reader.uint32());
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
            received: (0, helpers_1.isSet)(object.received) ? Boolean(object.received) : false,
            proof: (0, helpers_1.isSet)(object.proof) ? (0, helpers_1.bytesFromBase64)(object.proof) : new Uint8Array(),
            proof_height: (0, helpers_1.isSet)(object.proof_height) ? client_1.Height.fromJSON(object.proof_height) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.received !== undefined && (obj.received = message.received);
        message.proof !== undefined && (obj.proof = (0, helpers_1.base64FromBytes)(message.proof !== undefined ? message.proof : new Uint8Array()));
        message.proof_height !== undefined && (obj.proof_height = message.proof_height ? client_1.Height.toJSON(message.proof_height) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryPacketReceiptResponse();
        message.received = object.received ?? false;
        message.proof = object.proof ?? new Uint8Array();
        message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? client_1.Height.fromPartial(object.proof_height) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            received: object?.received,
            proof: object?.proof,
            proof_height: object.proof_height ? client_1.Height.fromSDK(object.proof_height) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.received = message.received;
        obj.proof = message.proof;
        message.proof_height !== undefined && (obj.proof_height = message.proof_height ? client_1.Height.toSDK(message.proof_height) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            received: object.received,
            proof: object.proof,
            proof_height: object?.proof_height ? client_1.Height.fromAmino(object.proof_height) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.received = message.received;
        obj.proof = message.proof;
        obj.proof_height = message.proof_height ? client_1.Height.toAmino(message.proof_height) : {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryPacketReceiptResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryPacketReceiptResponse",
            value: exports.QueryPacketReceiptResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryPacketReceiptResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryPacketReceiptResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryPacketReceiptResponse",
            value: exports.QueryPacketReceiptResponse.encode(message).finish()
        };
    }
};
function createBaseQueryPacketAcknowledgementRequest() {
    return {
        port_id: "",
        channel_id: "",
        sequence: BigInt(0)
    };
}
exports.QueryPacketAcknowledgementRequest = {
    typeUrl: "/ibc.core.channel.v1.QueryPacketAcknowledgementRequest",
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
        const message = createBaseQueryPacketAcknowledgementRequest();
        message.port_id = object.port_id ?? "";
        message.channel_id = object.channel_id ?? "";
        message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            port_id: object?.port_id,
            channel_id: object?.channel_id,
            sequence: object?.sequence
        };
    },
    toSDK(message) {
        const obj = {};
        obj.port_id = message.port_id;
        obj.channel_id = message.channel_id;
        obj.sequence = message.sequence;
        return obj;
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
        return exports.QueryPacketAcknowledgementRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryPacketAcknowledgementRequest",
            value: exports.QueryPacketAcknowledgementRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryPacketAcknowledgementRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryPacketAcknowledgementRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryPacketAcknowledgementRequest",
            value: exports.QueryPacketAcknowledgementRequest.encode(message).finish()
        };
    }
};
function createBaseQueryPacketAcknowledgementResponse() {
    return {
        acknowledgement: new Uint8Array(),
        proof: new Uint8Array(),
        proof_height: client_1.Height.fromPartial({})
    };
}
exports.QueryPacketAcknowledgementResponse = {
    typeUrl: "/ibc.core.channel.v1.QueryPacketAcknowledgementResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.acknowledgement.length !== 0) {
            writer.uint32(10).bytes(message.acknowledgement);
        }
        if (message.proof.length !== 0) {
            writer.uint32(18).bytes(message.proof);
        }
        if (message.proof_height !== undefined) {
            client_1.Height.encode(message.proof_height, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
                    message.proof_height = client_1.Height.decode(reader, reader.uint32());
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
            acknowledgement: (0, helpers_1.isSet)(object.acknowledgement) ? (0, helpers_1.bytesFromBase64)(object.acknowledgement) : new Uint8Array(),
            proof: (0, helpers_1.isSet)(object.proof) ? (0, helpers_1.bytesFromBase64)(object.proof) : new Uint8Array(),
            proof_height: (0, helpers_1.isSet)(object.proof_height) ? client_1.Height.fromJSON(object.proof_height) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.acknowledgement !== undefined && (obj.acknowledgement = (0, helpers_1.base64FromBytes)(message.acknowledgement !== undefined ? message.acknowledgement : new Uint8Array()));
        message.proof !== undefined && (obj.proof = (0, helpers_1.base64FromBytes)(message.proof !== undefined ? message.proof : new Uint8Array()));
        message.proof_height !== undefined && (obj.proof_height = message.proof_height ? client_1.Height.toJSON(message.proof_height) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryPacketAcknowledgementResponse();
        message.acknowledgement = object.acknowledgement ?? new Uint8Array();
        message.proof = object.proof ?? new Uint8Array();
        message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? client_1.Height.fromPartial(object.proof_height) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            acknowledgement: object?.acknowledgement,
            proof: object?.proof,
            proof_height: object.proof_height ? client_1.Height.fromSDK(object.proof_height) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.acknowledgement = message.acknowledgement;
        obj.proof = message.proof;
        message.proof_height !== undefined && (obj.proof_height = message.proof_height ? client_1.Height.toSDK(message.proof_height) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            acknowledgement: object.acknowledgement,
            proof: object.proof,
            proof_height: object?.proof_height ? client_1.Height.fromAmino(object.proof_height) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.acknowledgement = message.acknowledgement;
        obj.proof = message.proof;
        obj.proof_height = message.proof_height ? client_1.Height.toAmino(message.proof_height) : {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryPacketAcknowledgementResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryPacketAcknowledgementResponse",
            value: exports.QueryPacketAcknowledgementResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryPacketAcknowledgementResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryPacketAcknowledgementResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryPacketAcknowledgementResponse",
            value: exports.QueryPacketAcknowledgementResponse.encode(message).finish()
        };
    }
};
function createBaseQueryPacketAcknowledgementsRequest() {
    return {
        port_id: "",
        channel_id: "",
        pagination: undefined,
        packet_commitment_sequences: []
    };
}
exports.QueryPacketAcknowledgementsRequest = {
    typeUrl: "/ibc.core.channel.v1.QueryPacketAcknowledgementsRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.port_id !== "") {
            writer.uint32(10).string(message.port_id);
        }
        if (message.channel_id !== "") {
            writer.uint32(18).string(message.channel_id);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        writer.uint32(34).fork();
        for (const v of message.packet_commitment_sequences) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                case 4:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.packet_commitment_sequences.push(reader.uint64());
                        }
                    }
                    else {
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
    fromJSON(object) {
        return {
            port_id: (0, helpers_1.isSet)(object.port_id) ? String(object.port_id) : "",
            channel_id: (0, helpers_1.isSet)(object.channel_id) ? String(object.channel_id) : "",
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined,
            packet_commitment_sequences: Array.isArray(object?.packet_commitment_sequences) ? object.packet_commitment_sequences.map((e) => BigInt(e.toString())) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.port_id !== undefined && (obj.port_id = message.port_id);
        message.channel_id !== undefined && (obj.channel_id = message.channel_id);
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        if (message.packet_commitment_sequences) {
            obj.packet_commitment_sequences = message.packet_commitment_sequences.map(e => (e || BigInt(0)).toString());
        }
        else {
            obj.packet_commitment_sequences = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryPacketAcknowledgementsRequest();
        message.port_id = object.port_id ?? "";
        message.channel_id = object.channel_id ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        message.packet_commitment_sequences = object.packet_commitment_sequences?.map(e => BigInt(e.toString())) || [];
        return message;
    },
    fromSDK(object) {
        return {
            port_id: object?.port_id,
            channel_id: object?.channel_id,
            pagination: object.pagination ? pagination_1.PageRequest.fromSDK(object.pagination) : undefined,
            packet_commitment_sequences: Array.isArray(object?.packet_commitment_sequences) ? object.packet_commitment_sequences.map((e) => e) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.port_id = message.port_id;
        obj.channel_id = message.channel_id;
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toSDK(message.pagination) : undefined);
        if (message.packet_commitment_sequences) {
            obj.packet_commitment_sequences = message.packet_commitment_sequences.map(e => e);
        }
        else {
            obj.packet_commitment_sequences = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            port_id: object.port_id,
            channel_id: object.channel_id,
            pagination: object?.pagination ? pagination_1.PageRequest.fromAmino(object.pagination) : undefined,
            packet_commitment_sequences: Array.isArray(object?.packet_commitment_sequences) ? object.packet_commitment_sequences.map((e) => BigInt(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.port_id = message.port_id;
        obj.channel_id = message.channel_id;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        if (message.packet_commitment_sequences) {
            obj.packet_commitment_sequences = message.packet_commitment_sequences.map(e => e.toString());
        }
        else {
            obj.packet_commitment_sequences = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryPacketAcknowledgementsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryPacketAcknowledgementsRequest",
            value: exports.QueryPacketAcknowledgementsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryPacketAcknowledgementsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryPacketAcknowledgementsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryPacketAcknowledgementsRequest",
            value: exports.QueryPacketAcknowledgementsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryPacketAcknowledgementsResponse() {
    return {
        acknowledgements: [],
        pagination: undefined,
        height: client_1.Height.fromPartial({})
    };
}
exports.QueryPacketAcknowledgementsResponse = {
    typeUrl: "/ibc.core.channel.v1.QueryPacketAcknowledgementsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.acknowledgements) {
            channel_1.PacketState.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        if (message.height !== undefined) {
            client_1.Height.encode(message.height, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPacketAcknowledgementsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.acknowledgements.push(channel_1.PacketState.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.height = client_1.Height.decode(reader, reader.uint32());
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
            acknowledgements: Array.isArray(object?.acknowledgements) ? object.acknowledgements.map((e) => channel_1.PacketState.fromJSON(e)) : [],
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined,
            height: (0, helpers_1.isSet)(object.height) ? client_1.Height.fromJSON(object.height) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.acknowledgements) {
            obj.acknowledgements = message.acknowledgements.map(e => e ? channel_1.PacketState.toJSON(e) : undefined);
        }
        else {
            obj.acknowledgements = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        message.height !== undefined && (obj.height = message.height ? client_1.Height.toJSON(message.height) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryPacketAcknowledgementsResponse();
        message.acknowledgements = object.acknowledgements?.map(e => channel_1.PacketState.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        message.height = object.height !== undefined && object.height !== null ? client_1.Height.fromPartial(object.height) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            acknowledgements: Array.isArray(object?.acknowledgements) ? object.acknowledgements.map((e) => channel_1.PacketState.fromSDK(e)) : [],
            pagination: object.pagination ? pagination_1.PageResponse.fromSDK(object.pagination) : undefined,
            height: object.height ? client_1.Height.fromSDK(object.height) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.acknowledgements) {
            obj.acknowledgements = message.acknowledgements.map(e => e ? channel_1.PacketState.toSDK(e) : undefined);
        }
        else {
            obj.acknowledgements = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toSDK(message.pagination) : undefined);
        message.height !== undefined && (obj.height = message.height ? client_1.Height.toSDK(message.height) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            acknowledgements: Array.isArray(object?.acknowledgements) ? object.acknowledgements.map((e) => channel_1.PacketState.fromAmino(e)) : [],
            pagination: object?.pagination ? pagination_1.PageResponse.fromAmino(object.pagination) : undefined,
            height: object?.height ? client_1.Height.fromAmino(object.height) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.acknowledgements) {
            obj.acknowledgements = message.acknowledgements.map(e => e ? channel_1.PacketState.toAmino(e) : undefined);
        }
        else {
            obj.acknowledgements = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        obj.height = message.height ? client_1.Height.toAmino(message.height) : {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryPacketAcknowledgementsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryPacketAcknowledgementsResponse",
            value: exports.QueryPacketAcknowledgementsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryPacketAcknowledgementsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryPacketAcknowledgementsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryPacketAcknowledgementsResponse",
            value: exports.QueryPacketAcknowledgementsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryUnreceivedPacketsRequest() {
    return {
        port_id: "",
        channel_id: "",
        packet_commitment_sequences: []
    };
}
exports.QueryUnreceivedPacketsRequest = {
    typeUrl: "/ibc.core.channel.v1.QueryUnreceivedPacketsRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
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
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
                    }
                    else {
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
    fromJSON(object) {
        return {
            port_id: (0, helpers_1.isSet)(object.port_id) ? String(object.port_id) : "",
            channel_id: (0, helpers_1.isSet)(object.channel_id) ? String(object.channel_id) : "",
            packet_commitment_sequences: Array.isArray(object?.packet_commitment_sequences) ? object.packet_commitment_sequences.map((e) => BigInt(e.toString())) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.port_id !== undefined && (obj.port_id = message.port_id);
        message.channel_id !== undefined && (obj.channel_id = message.channel_id);
        if (message.packet_commitment_sequences) {
            obj.packet_commitment_sequences = message.packet_commitment_sequences.map(e => (e || BigInt(0)).toString());
        }
        else {
            obj.packet_commitment_sequences = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryUnreceivedPacketsRequest();
        message.port_id = object.port_id ?? "";
        message.channel_id = object.channel_id ?? "";
        message.packet_commitment_sequences = object.packet_commitment_sequences?.map(e => BigInt(e.toString())) || [];
        return message;
    },
    fromSDK(object) {
        return {
            port_id: object?.port_id,
            channel_id: object?.channel_id,
            packet_commitment_sequences: Array.isArray(object?.packet_commitment_sequences) ? object.packet_commitment_sequences.map((e) => e) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.port_id = message.port_id;
        obj.channel_id = message.channel_id;
        if (message.packet_commitment_sequences) {
            obj.packet_commitment_sequences = message.packet_commitment_sequences.map(e => e);
        }
        else {
            obj.packet_commitment_sequences = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            port_id: object.port_id,
            channel_id: object.channel_id,
            packet_commitment_sequences: Array.isArray(object?.packet_commitment_sequences) ? object.packet_commitment_sequences.map((e) => BigInt(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.port_id = message.port_id;
        obj.channel_id = message.channel_id;
        if (message.packet_commitment_sequences) {
            obj.packet_commitment_sequences = message.packet_commitment_sequences.map(e => e.toString());
        }
        else {
            obj.packet_commitment_sequences = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryUnreceivedPacketsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryUnreceivedPacketsRequest",
            value: exports.QueryUnreceivedPacketsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryUnreceivedPacketsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryUnreceivedPacketsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryUnreceivedPacketsRequest",
            value: exports.QueryUnreceivedPacketsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryUnreceivedPacketsResponse() {
    return {
        sequences: [],
        height: client_1.Height.fromPartial({})
    };
}
exports.QueryUnreceivedPacketsResponse = {
    typeUrl: "/ibc.core.channel.v1.QueryUnreceivedPacketsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        writer.uint32(10).fork();
        for (const v of message.sequences) {
            writer.uint64(v);
        }
        writer.ldelim();
        if (message.height !== undefined) {
            client_1.Height.encode(message.height, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
                    }
                    else {
                        message.sequences.push(reader.uint64());
                    }
                    break;
                case 2:
                    message.height = client_1.Height.decode(reader, reader.uint32());
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
            sequences: Array.isArray(object?.sequences) ? object.sequences.map((e) => BigInt(e.toString())) : [],
            height: (0, helpers_1.isSet)(object.height) ? client_1.Height.fromJSON(object.height) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.sequences) {
            obj.sequences = message.sequences.map(e => (e || BigInt(0)).toString());
        }
        else {
            obj.sequences = [];
        }
        message.height !== undefined && (obj.height = message.height ? client_1.Height.toJSON(message.height) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryUnreceivedPacketsResponse();
        message.sequences = object.sequences?.map(e => BigInt(e.toString())) || [];
        message.height = object.height !== undefined && object.height !== null ? client_1.Height.fromPartial(object.height) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            sequences: Array.isArray(object?.sequences) ? object.sequences.map((e) => e) : [],
            height: object.height ? client_1.Height.fromSDK(object.height) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.sequences) {
            obj.sequences = message.sequences.map(e => e);
        }
        else {
            obj.sequences = [];
        }
        message.height !== undefined && (obj.height = message.height ? client_1.Height.toSDK(message.height) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            sequences: Array.isArray(object?.sequences) ? object.sequences.map((e) => BigInt(e)) : [],
            height: object?.height ? client_1.Height.fromAmino(object.height) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.sequences) {
            obj.sequences = message.sequences.map(e => e.toString());
        }
        else {
            obj.sequences = [];
        }
        obj.height = message.height ? client_1.Height.toAmino(message.height) : {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryUnreceivedPacketsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryUnreceivedPacketsResponse",
            value: exports.QueryUnreceivedPacketsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryUnreceivedPacketsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryUnreceivedPacketsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryUnreceivedPacketsResponse",
            value: exports.QueryUnreceivedPacketsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryUnreceivedAcksRequest() {
    return {
        port_id: "",
        channel_id: "",
        packet_ack_sequences: []
    };
}
exports.QueryUnreceivedAcksRequest = {
    typeUrl: "/ibc.core.channel.v1.QueryUnreceivedAcksRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
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
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
                    }
                    else {
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
    fromJSON(object) {
        return {
            port_id: (0, helpers_1.isSet)(object.port_id) ? String(object.port_id) : "",
            channel_id: (0, helpers_1.isSet)(object.channel_id) ? String(object.channel_id) : "",
            packet_ack_sequences: Array.isArray(object?.packet_ack_sequences) ? object.packet_ack_sequences.map((e) => BigInt(e.toString())) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.port_id !== undefined && (obj.port_id = message.port_id);
        message.channel_id !== undefined && (obj.channel_id = message.channel_id);
        if (message.packet_ack_sequences) {
            obj.packet_ack_sequences = message.packet_ack_sequences.map(e => (e || BigInt(0)).toString());
        }
        else {
            obj.packet_ack_sequences = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryUnreceivedAcksRequest();
        message.port_id = object.port_id ?? "";
        message.channel_id = object.channel_id ?? "";
        message.packet_ack_sequences = object.packet_ack_sequences?.map(e => BigInt(e.toString())) || [];
        return message;
    },
    fromSDK(object) {
        return {
            port_id: object?.port_id,
            channel_id: object?.channel_id,
            packet_ack_sequences: Array.isArray(object?.packet_ack_sequences) ? object.packet_ack_sequences.map((e) => e) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.port_id = message.port_id;
        obj.channel_id = message.channel_id;
        if (message.packet_ack_sequences) {
            obj.packet_ack_sequences = message.packet_ack_sequences.map(e => e);
        }
        else {
            obj.packet_ack_sequences = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            port_id: object.port_id,
            channel_id: object.channel_id,
            packet_ack_sequences: Array.isArray(object?.packet_ack_sequences) ? object.packet_ack_sequences.map((e) => BigInt(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.port_id = message.port_id;
        obj.channel_id = message.channel_id;
        if (message.packet_ack_sequences) {
            obj.packet_ack_sequences = message.packet_ack_sequences.map(e => e.toString());
        }
        else {
            obj.packet_ack_sequences = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryUnreceivedAcksRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryUnreceivedAcksRequest",
            value: exports.QueryUnreceivedAcksRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryUnreceivedAcksRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryUnreceivedAcksRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryUnreceivedAcksRequest",
            value: exports.QueryUnreceivedAcksRequest.encode(message).finish()
        };
    }
};
function createBaseQueryUnreceivedAcksResponse() {
    return {
        sequences: [],
        height: client_1.Height.fromPartial({})
    };
}
exports.QueryUnreceivedAcksResponse = {
    typeUrl: "/ibc.core.channel.v1.QueryUnreceivedAcksResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        writer.uint32(10).fork();
        for (const v of message.sequences) {
            writer.uint64(v);
        }
        writer.ldelim();
        if (message.height !== undefined) {
            client_1.Height.encode(message.height, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
                    }
                    else {
                        message.sequences.push(reader.uint64());
                    }
                    break;
                case 2:
                    message.height = client_1.Height.decode(reader, reader.uint32());
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
            sequences: Array.isArray(object?.sequences) ? object.sequences.map((e) => BigInt(e.toString())) : [],
            height: (0, helpers_1.isSet)(object.height) ? client_1.Height.fromJSON(object.height) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.sequences) {
            obj.sequences = message.sequences.map(e => (e || BigInt(0)).toString());
        }
        else {
            obj.sequences = [];
        }
        message.height !== undefined && (obj.height = message.height ? client_1.Height.toJSON(message.height) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryUnreceivedAcksResponse();
        message.sequences = object.sequences?.map(e => BigInt(e.toString())) || [];
        message.height = object.height !== undefined && object.height !== null ? client_1.Height.fromPartial(object.height) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            sequences: Array.isArray(object?.sequences) ? object.sequences.map((e) => e) : [],
            height: object.height ? client_1.Height.fromSDK(object.height) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.sequences) {
            obj.sequences = message.sequences.map(e => e);
        }
        else {
            obj.sequences = [];
        }
        message.height !== undefined && (obj.height = message.height ? client_1.Height.toSDK(message.height) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            sequences: Array.isArray(object?.sequences) ? object.sequences.map((e) => BigInt(e)) : [],
            height: object?.height ? client_1.Height.fromAmino(object.height) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.sequences) {
            obj.sequences = message.sequences.map(e => e.toString());
        }
        else {
            obj.sequences = [];
        }
        obj.height = message.height ? client_1.Height.toAmino(message.height) : {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryUnreceivedAcksResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryUnreceivedAcksResponse",
            value: exports.QueryUnreceivedAcksResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryUnreceivedAcksResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryUnreceivedAcksResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryUnreceivedAcksResponse",
            value: exports.QueryUnreceivedAcksResponse.encode(message).finish()
        };
    }
};
function createBaseQueryNextSequenceReceiveRequest() {
    return {
        port_id: "",
        channel_id: ""
    };
}
exports.QueryNextSequenceReceiveRequest = {
    typeUrl: "/ibc.core.channel.v1.QueryNextSequenceReceiveRequest",
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
        const message = createBaseQueryNextSequenceReceiveRequest();
        message.port_id = object.port_id ?? "";
        message.channel_id = object.channel_id ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            port_id: object?.port_id,
            channel_id: object?.channel_id
        };
    },
    toSDK(message) {
        const obj = {};
        obj.port_id = message.port_id;
        obj.channel_id = message.channel_id;
        return obj;
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
        return exports.QueryNextSequenceReceiveRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryNextSequenceReceiveRequest",
            value: exports.QueryNextSequenceReceiveRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryNextSequenceReceiveRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryNextSequenceReceiveRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryNextSequenceReceiveRequest",
            value: exports.QueryNextSequenceReceiveRequest.encode(message).finish()
        };
    }
};
function createBaseQueryNextSequenceReceiveResponse() {
    return {
        next_sequence_receive: BigInt(0),
        proof: new Uint8Array(),
        proof_height: client_1.Height.fromPartial({})
    };
}
exports.QueryNextSequenceReceiveResponse = {
    typeUrl: "/ibc.core.channel.v1.QueryNextSequenceReceiveResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.next_sequence_receive !== BigInt(0)) {
            writer.uint32(8).uint64(message.next_sequence_receive);
        }
        if (message.proof.length !== 0) {
            writer.uint32(18).bytes(message.proof);
        }
        if (message.proof_height !== undefined) {
            client_1.Height.encode(message.proof_height, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
                    message.proof_height = client_1.Height.decode(reader, reader.uint32());
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
            next_sequence_receive: (0, helpers_1.isSet)(object.next_sequence_receive) ? BigInt(object.next_sequence_receive.toString()) : BigInt(0),
            proof: (0, helpers_1.isSet)(object.proof) ? (0, helpers_1.bytesFromBase64)(object.proof) : new Uint8Array(),
            proof_height: (0, helpers_1.isSet)(object.proof_height) ? client_1.Height.fromJSON(object.proof_height) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.next_sequence_receive !== undefined && (obj.next_sequence_receive = (message.next_sequence_receive || BigInt(0)).toString());
        message.proof !== undefined && (obj.proof = (0, helpers_1.base64FromBytes)(message.proof !== undefined ? message.proof : new Uint8Array()));
        message.proof_height !== undefined && (obj.proof_height = message.proof_height ? client_1.Height.toJSON(message.proof_height) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryNextSequenceReceiveResponse();
        message.next_sequence_receive = object.next_sequence_receive !== undefined && object.next_sequence_receive !== null ? BigInt(object.next_sequence_receive.toString()) : BigInt(0);
        message.proof = object.proof ?? new Uint8Array();
        message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? client_1.Height.fromPartial(object.proof_height) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            next_sequence_receive: object?.next_sequence_receive,
            proof: object?.proof,
            proof_height: object.proof_height ? client_1.Height.fromSDK(object.proof_height) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.next_sequence_receive = message.next_sequence_receive;
        obj.proof = message.proof;
        message.proof_height !== undefined && (obj.proof_height = message.proof_height ? client_1.Height.toSDK(message.proof_height) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            next_sequence_receive: BigInt(object.next_sequence_receive),
            proof: object.proof,
            proof_height: object?.proof_height ? client_1.Height.fromAmino(object.proof_height) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.next_sequence_receive = message.next_sequence_receive ? message.next_sequence_receive.toString() : undefined;
        obj.proof = message.proof;
        obj.proof_height = message.proof_height ? client_1.Height.toAmino(message.proof_height) : {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryNextSequenceReceiveResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryNextSequenceReceiveResponse",
            value: exports.QueryNextSequenceReceiveResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryNextSequenceReceiveResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryNextSequenceReceiveResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryNextSequenceReceiveResponse",
            value: exports.QueryNextSequenceReceiveResponse.encode(message).finish()
        };
    }
};
function createBaseQueryNextSequenceSendRequest() {
    return {
        port_id: "",
        channel_id: ""
    };
}
exports.QueryNextSequenceSendRequest = {
    typeUrl: "/ibc.core.channel.v1.QueryNextSequenceSendRequest",
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
        const message = createBaseQueryNextSequenceSendRequest();
        message.port_id = object.port_id ?? "";
        message.channel_id = object.channel_id ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            port_id: object?.port_id,
            channel_id: object?.channel_id
        };
    },
    toSDK(message) {
        const obj = {};
        obj.port_id = message.port_id;
        obj.channel_id = message.channel_id;
        return obj;
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
        return exports.QueryNextSequenceSendRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryNextSequenceSendRequest",
            value: exports.QueryNextSequenceSendRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryNextSequenceSendRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryNextSequenceSendRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryNextSequenceSendRequest",
            value: exports.QueryNextSequenceSendRequest.encode(message).finish()
        };
    }
};
function createBaseQueryNextSequenceSendResponse() {
    return {
        next_sequence_send: BigInt(0),
        proof: new Uint8Array(),
        proof_height: client_1.Height.fromPartial({})
    };
}
exports.QueryNextSequenceSendResponse = {
    typeUrl: "/ibc.core.channel.v1.QueryNextSequenceSendResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.next_sequence_send !== BigInt(0)) {
            writer.uint32(8).uint64(message.next_sequence_send);
        }
        if (message.proof.length !== 0) {
            writer.uint32(18).bytes(message.proof);
        }
        if (message.proof_height !== undefined) {
            client_1.Height.encode(message.proof_height, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
                    message.proof_height = client_1.Height.decode(reader, reader.uint32());
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
            next_sequence_send: (0, helpers_1.isSet)(object.next_sequence_send) ? BigInt(object.next_sequence_send.toString()) : BigInt(0),
            proof: (0, helpers_1.isSet)(object.proof) ? (0, helpers_1.bytesFromBase64)(object.proof) : new Uint8Array(),
            proof_height: (0, helpers_1.isSet)(object.proof_height) ? client_1.Height.fromJSON(object.proof_height) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.next_sequence_send !== undefined && (obj.next_sequence_send = (message.next_sequence_send || BigInt(0)).toString());
        message.proof !== undefined && (obj.proof = (0, helpers_1.base64FromBytes)(message.proof !== undefined ? message.proof : new Uint8Array()));
        message.proof_height !== undefined && (obj.proof_height = message.proof_height ? client_1.Height.toJSON(message.proof_height) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryNextSequenceSendResponse();
        message.next_sequence_send = object.next_sequence_send !== undefined && object.next_sequence_send !== null ? BigInt(object.next_sequence_send.toString()) : BigInt(0);
        message.proof = object.proof ?? new Uint8Array();
        message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? client_1.Height.fromPartial(object.proof_height) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            next_sequence_send: object?.next_sequence_send,
            proof: object?.proof,
            proof_height: object.proof_height ? client_1.Height.fromSDK(object.proof_height) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.next_sequence_send = message.next_sequence_send;
        obj.proof = message.proof;
        message.proof_height !== undefined && (obj.proof_height = message.proof_height ? client_1.Height.toSDK(message.proof_height) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            next_sequence_send: BigInt(object.next_sequence_send),
            proof: object.proof,
            proof_height: object?.proof_height ? client_1.Height.fromAmino(object.proof_height) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.next_sequence_send = message.next_sequence_send ? message.next_sequence_send.toString() : undefined;
        obj.proof = message.proof;
        obj.proof_height = message.proof_height ? client_1.Height.toAmino(message.proof_height) : {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryNextSequenceSendResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryNextSequenceSendResponse",
            value: exports.QueryNextSequenceSendResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryNextSequenceSendResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryNextSequenceSendResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryNextSequenceSendResponse",
            value: exports.QueryNextSequenceSendResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=query.js.map
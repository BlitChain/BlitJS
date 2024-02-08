//@ts-nocheck
import { PageRequest, PageResponse } from "../../../../cosmos/base/query/v1beta1/pagination";
import { Channel, IdentifiedChannel, PacketState } from "./channel";
import { Height, IdentifiedClientState } from "../../client/v1/client";
import { Any } from "../../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../../helpers";
import { GlobalDecoderRegistry } from "../../../../registry";
export const protobufPackage = "ibc.core.channel.v1";
function createBaseQueryChannelRequest() {
    return {
        port_id: "",
        channel_id: ""
    };
}
export const QueryChannelRequest = {
    typeUrl: "/ibc.core.channel.v1.QueryChannelRequest",
    aminoType: "cosmos-sdk/QueryChannelRequest",
    is(o) {
        return o && (o.$typeUrl === QueryChannelRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryChannelRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === QueryChannelRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string");
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
        const message = createBaseQueryChannelRequest();
        message.port_id = object.port_id ?? "";
        message.channel_id = object.channel_id ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryChannelRequest();
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
        return QueryChannelRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryChannelRequest",
            value: QueryChannelRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryChannelRequest.decode(message.value);
    },
    toProto(message) {
        return QueryChannelRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryChannelRequest",
            value: QueryChannelRequest.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryChannelRequest.typeUrl, QueryChannelRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryChannelRequest.aminoType, QueryChannelRequest.typeUrl);
function createBaseQueryChannelResponse() {
    return {
        channel: undefined,
        proof: new Uint8Array(),
        proof_height: Height.fromPartial({})
    };
}
export const QueryChannelResponse = {
    typeUrl: "/ibc.core.channel.v1.QueryChannelResponse",
    aminoType: "cosmos-sdk/QueryChannelResponse",
    is(o) {
        return o && (o.$typeUrl === QueryChannelResponse.typeUrl || (o.proof instanceof Uint8Array || typeof o.proof === "string") && Height.is(o.proof_height));
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryChannelResponse.typeUrl || (o.proof instanceof Uint8Array || typeof o.proof === "string") && Height.isSDK(o.proof_height));
    },
    isAmino(o) {
        return o && (o.$typeUrl === QueryChannelResponse.typeUrl || (o.proof instanceof Uint8Array || typeof o.proof === "string") && Height.isAmino(o.proof_height));
    },
    encode(message, writer = BinaryWriter.create()) {
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
    decode(input, length) {
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
    fromJSON(object) {
        return {
            channel: isSet(object.channel) ? Channel.fromJSON(object.channel) : undefined,
            proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(),
            proof_height: isSet(object.proof_height) ? Height.fromJSON(object.proof_height) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.channel !== undefined && (obj.channel = message.channel ? Channel.toJSON(message.channel) : undefined);
        message.proof !== undefined && (obj.proof = base64FromBytes(message.proof !== undefined ? message.proof : new Uint8Array()));
        message.proof_height !== undefined && (obj.proof_height = message.proof_height ? Height.toJSON(message.proof_height) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryChannelResponse();
        message.channel = object.channel !== undefined && object.channel !== null ? Channel.fromPartial(object.channel) : undefined;
        message.proof = object.proof ?? new Uint8Array();
        message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? Height.fromPartial(object.proof_height) : undefined;
        return message;
    },
    fromAmino(object) {
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
    toAmino(message) {
        const obj = {};
        obj.channel = message.channel ? Channel.toAmino(message.channel) : undefined;
        obj.proof = message.proof ? base64FromBytes(message.proof) : undefined;
        obj.proof_height = message.proof_height ? Height.toAmino(message.proof_height) : {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryChannelResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryChannelResponse",
            value: QueryChannelResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryChannelResponse.decode(message.value);
    },
    toProto(message) {
        return QueryChannelResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryChannelResponse",
            value: QueryChannelResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryChannelResponse.typeUrl, QueryChannelResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryChannelResponse.aminoType, QueryChannelResponse.typeUrl);
function createBaseQueryChannelsRequest() {
    return {
        pagination: undefined
    };
}
export const QueryChannelsRequest = {
    typeUrl: "/ibc.core.channel.v1.QueryChannelsRequest",
    aminoType: "cosmos-sdk/QueryChannelsRequest",
    is(o) {
        return o && o.$typeUrl === QueryChannelsRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === QueryChannelsRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === QueryChannelsRequest.typeUrl;
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return {
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryChannelsRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryChannelsRequest();
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryChannelsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryChannelsRequest",
            value: QueryChannelsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryChannelsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryChannelsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryChannelsRequest",
            value: QueryChannelsRequest.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryChannelsRequest.typeUrl, QueryChannelsRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryChannelsRequest.aminoType, QueryChannelsRequest.typeUrl);
function createBaseQueryChannelsResponse() {
    return {
        channels: [],
        pagination: undefined,
        height: Height.fromPartial({})
    };
}
export const QueryChannelsResponse = {
    typeUrl: "/ibc.core.channel.v1.QueryChannelsResponse",
    aminoType: "cosmos-sdk/QueryChannelsResponse",
    is(o) {
        return o && (o.$typeUrl === QueryChannelsResponse.typeUrl || Array.isArray(o.channels) && (!o.channels.length || IdentifiedChannel.is(o.channels[0])) && Height.is(o.height));
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryChannelsResponse.typeUrl || Array.isArray(o.channels) && (!o.channels.length || IdentifiedChannel.isSDK(o.channels[0])) && Height.isSDK(o.height));
    },
    isAmino(o) {
        return o && (o.$typeUrl === QueryChannelsResponse.typeUrl || Array.isArray(o.channels) && (!o.channels.length || IdentifiedChannel.isAmino(o.channels[0])) && Height.isAmino(o.height));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.channels) {
            IdentifiedChannel.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        if (message.height !== undefined) {
            Height.encode(message.height, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return {
            channels: Array.isArray(object?.channels) ? object.channels.map((e) => IdentifiedChannel.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
            height: isSet(object.height) ? Height.fromJSON(object.height) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.channels) {
            obj.channels = message.channels.map(e => e ? IdentifiedChannel.toJSON(e) : undefined);
        }
        else {
            obj.channels = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        message.height !== undefined && (obj.height = message.height ? Height.toJSON(message.height) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryChannelsResponse();
        message.channels = object.channels?.map(e => IdentifiedChannel.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        message.height = object.height !== undefined && object.height !== null ? Height.fromPartial(object.height) : undefined;
        return message;
    },
    fromAmino(object) {
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
    toAmino(message) {
        const obj = {};
        if (message.channels) {
            obj.channels = message.channels.map(e => e ? IdentifiedChannel.toAmino(e) : undefined);
        }
        else {
            obj.channels = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        obj.height = message.height ? Height.toAmino(message.height) : {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryChannelsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryChannelsResponse",
            value: QueryChannelsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryChannelsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryChannelsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryChannelsResponse",
            value: QueryChannelsResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryChannelsResponse.typeUrl, QueryChannelsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryChannelsResponse.aminoType, QueryChannelsResponse.typeUrl);
function createBaseQueryConnectionChannelsRequest() {
    return {
        connection: "",
        pagination: undefined
    };
}
export const QueryConnectionChannelsRequest = {
    typeUrl: "/ibc.core.channel.v1.QueryConnectionChannelsRequest",
    aminoType: "cosmos-sdk/QueryConnectionChannelsRequest",
    is(o) {
        return o && (o.$typeUrl === QueryConnectionChannelsRequest.typeUrl || typeof o.connection === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryConnectionChannelsRequest.typeUrl || typeof o.connection === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === QueryConnectionChannelsRequest.typeUrl || typeof o.connection === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.connection !== "") {
            writer.uint32(10).string(message.connection);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return {
            connection: isSet(object.connection) ? String(object.connection) : "",
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.connection !== undefined && (obj.connection = message.connection);
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryConnectionChannelsRequest();
        message.connection = object.connection ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryConnectionChannelsRequest();
        if (object.connection !== undefined && object.connection !== null) {
            message.connection = object.connection;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.connection = message.connection;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryConnectionChannelsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryConnectionChannelsRequest",
            value: QueryConnectionChannelsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryConnectionChannelsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryConnectionChannelsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryConnectionChannelsRequest",
            value: QueryConnectionChannelsRequest.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryConnectionChannelsRequest.typeUrl, QueryConnectionChannelsRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryConnectionChannelsRequest.aminoType, QueryConnectionChannelsRequest.typeUrl);
function createBaseQueryConnectionChannelsResponse() {
    return {
        channels: [],
        pagination: undefined,
        height: Height.fromPartial({})
    };
}
export const QueryConnectionChannelsResponse = {
    typeUrl: "/ibc.core.channel.v1.QueryConnectionChannelsResponse",
    aminoType: "cosmos-sdk/QueryConnectionChannelsResponse",
    is(o) {
        return o && (o.$typeUrl === QueryConnectionChannelsResponse.typeUrl || Array.isArray(o.channels) && (!o.channels.length || IdentifiedChannel.is(o.channels[0])) && Height.is(o.height));
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryConnectionChannelsResponse.typeUrl || Array.isArray(o.channels) && (!o.channels.length || IdentifiedChannel.isSDK(o.channels[0])) && Height.isSDK(o.height));
    },
    isAmino(o) {
        return o && (o.$typeUrl === QueryConnectionChannelsResponse.typeUrl || Array.isArray(o.channels) && (!o.channels.length || IdentifiedChannel.isAmino(o.channels[0])) && Height.isAmino(o.height));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.channels) {
            IdentifiedChannel.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        if (message.height !== undefined) {
            Height.encode(message.height, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return {
            channels: Array.isArray(object?.channels) ? object.channels.map((e) => IdentifiedChannel.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
            height: isSet(object.height) ? Height.fromJSON(object.height) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.channels) {
            obj.channels = message.channels.map(e => e ? IdentifiedChannel.toJSON(e) : undefined);
        }
        else {
            obj.channels = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        message.height !== undefined && (obj.height = message.height ? Height.toJSON(message.height) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryConnectionChannelsResponse();
        message.channels = object.channels?.map(e => IdentifiedChannel.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        message.height = object.height !== undefined && object.height !== null ? Height.fromPartial(object.height) : undefined;
        return message;
    },
    fromAmino(object) {
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
    toAmino(message) {
        const obj = {};
        if (message.channels) {
            obj.channels = message.channels.map(e => e ? IdentifiedChannel.toAmino(e) : undefined);
        }
        else {
            obj.channels = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        obj.height = message.height ? Height.toAmino(message.height) : {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryConnectionChannelsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryConnectionChannelsResponse",
            value: QueryConnectionChannelsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryConnectionChannelsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryConnectionChannelsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryConnectionChannelsResponse",
            value: QueryConnectionChannelsResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryConnectionChannelsResponse.typeUrl, QueryConnectionChannelsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryConnectionChannelsResponse.aminoType, QueryConnectionChannelsResponse.typeUrl);
function createBaseQueryChannelClientStateRequest() {
    return {
        port_id: "",
        channel_id: ""
    };
}
export const QueryChannelClientStateRequest = {
    typeUrl: "/ibc.core.channel.v1.QueryChannelClientStateRequest",
    aminoType: "cosmos-sdk/QueryChannelClientStateRequest",
    is(o) {
        return o && (o.$typeUrl === QueryChannelClientStateRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryChannelClientStateRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === QueryChannelClientStateRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string");
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
        const message = createBaseQueryChannelClientStateRequest();
        message.port_id = object.port_id ?? "";
        message.channel_id = object.channel_id ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryChannelClientStateRequest();
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
        return QueryChannelClientStateRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryChannelClientStateRequest",
            value: QueryChannelClientStateRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryChannelClientStateRequest.decode(message.value);
    },
    toProto(message) {
        return QueryChannelClientStateRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryChannelClientStateRequest",
            value: QueryChannelClientStateRequest.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryChannelClientStateRequest.typeUrl, QueryChannelClientStateRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryChannelClientStateRequest.aminoType, QueryChannelClientStateRequest.typeUrl);
function createBaseQueryChannelClientStateResponse() {
    return {
        identified_client_state: undefined,
        proof: new Uint8Array(),
        proof_height: Height.fromPartial({})
    };
}
export const QueryChannelClientStateResponse = {
    typeUrl: "/ibc.core.channel.v1.QueryChannelClientStateResponse",
    aminoType: "cosmos-sdk/QueryChannelClientStateResponse",
    is(o) {
        return o && (o.$typeUrl === QueryChannelClientStateResponse.typeUrl || (o.proof instanceof Uint8Array || typeof o.proof === "string") && Height.is(o.proof_height));
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryChannelClientStateResponse.typeUrl || (o.proof instanceof Uint8Array || typeof o.proof === "string") && Height.isSDK(o.proof_height));
    },
    isAmino(o) {
        return o && (o.$typeUrl === QueryChannelClientStateResponse.typeUrl || (o.proof instanceof Uint8Array || typeof o.proof === "string") && Height.isAmino(o.proof_height));
    },
    encode(message, writer = BinaryWriter.create()) {
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
    decode(input, length) {
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
    fromJSON(object) {
        return {
            identified_client_state: isSet(object.identified_client_state) ? IdentifiedClientState.fromJSON(object.identified_client_state) : undefined,
            proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(),
            proof_height: isSet(object.proof_height) ? Height.fromJSON(object.proof_height) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.identified_client_state !== undefined && (obj.identified_client_state = message.identified_client_state ? IdentifiedClientState.toJSON(message.identified_client_state) : undefined);
        message.proof !== undefined && (obj.proof = base64FromBytes(message.proof !== undefined ? message.proof : new Uint8Array()));
        message.proof_height !== undefined && (obj.proof_height = message.proof_height ? Height.toJSON(message.proof_height) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryChannelClientStateResponse();
        message.identified_client_state = object.identified_client_state !== undefined && object.identified_client_state !== null ? IdentifiedClientState.fromPartial(object.identified_client_state) : undefined;
        message.proof = object.proof ?? new Uint8Array();
        message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? Height.fromPartial(object.proof_height) : undefined;
        return message;
    },
    fromAmino(object) {
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
    toAmino(message) {
        const obj = {};
        obj.identified_client_state = message.identified_client_state ? IdentifiedClientState.toAmino(message.identified_client_state) : undefined;
        obj.proof = message.proof ? base64FromBytes(message.proof) : undefined;
        obj.proof_height = message.proof_height ? Height.toAmino(message.proof_height) : {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryChannelClientStateResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryChannelClientStateResponse",
            value: QueryChannelClientStateResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryChannelClientStateResponse.decode(message.value);
    },
    toProto(message) {
        return QueryChannelClientStateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryChannelClientStateResponse",
            value: QueryChannelClientStateResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryChannelClientStateResponse.typeUrl, QueryChannelClientStateResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryChannelClientStateResponse.aminoType, QueryChannelClientStateResponse.typeUrl);
function createBaseQueryChannelConsensusStateRequest() {
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
    is(o) {
        return o && (o.$typeUrl === QueryChannelConsensusStateRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && typeof o.revision_number === "bigint" && typeof o.revision_height === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryChannelConsensusStateRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && typeof o.revision_number === "bigint" && typeof o.revision_height === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === QueryChannelConsensusStateRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && typeof o.revision_number === "bigint" && typeof o.revision_height === "bigint");
    },
    encode(message, writer = BinaryWriter.create()) {
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
    fromJSON(object) {
        return {
            port_id: isSet(object.port_id) ? String(object.port_id) : "",
            channel_id: isSet(object.channel_id) ? String(object.channel_id) : "",
            revision_number: isSet(object.revision_number) ? BigInt(object.revision_number.toString()) : BigInt(0),
            revision_height: isSet(object.revision_height) ? BigInt(object.revision_height.toString()) : BigInt(0)
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
    fromAmino(object) {
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
    toAmino(message) {
        const obj = {};
        obj.port_id = message.port_id;
        obj.channel_id = message.channel_id;
        obj.revision_number = message.revision_number ? message.revision_number.toString() : undefined;
        obj.revision_height = message.revision_height ? message.revision_height.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryChannelConsensusStateRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryChannelConsensusStateRequest",
            value: QueryChannelConsensusStateRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryChannelConsensusStateRequest.decode(message.value);
    },
    toProto(message) {
        return QueryChannelConsensusStateRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryChannelConsensusStateRequest",
            value: QueryChannelConsensusStateRequest.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryChannelConsensusStateRequest.typeUrl, QueryChannelConsensusStateRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryChannelConsensusStateRequest.aminoType, QueryChannelConsensusStateRequest.typeUrl);
function createBaseQueryChannelConsensusStateResponse() {
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
    is(o) {
        return o && (o.$typeUrl === QueryChannelConsensusStateResponse.typeUrl || typeof o.client_id === "string" && (o.proof instanceof Uint8Array || typeof o.proof === "string") && Height.is(o.proof_height));
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryChannelConsensusStateResponse.typeUrl || typeof o.client_id === "string" && (o.proof instanceof Uint8Array || typeof o.proof === "string") && Height.isSDK(o.proof_height));
    },
    isAmino(o) {
        return o && (o.$typeUrl === QueryChannelConsensusStateResponse.typeUrl || typeof o.client_id === "string" && (o.proof instanceof Uint8Array || typeof o.proof === "string") && Height.isAmino(o.proof_height));
    },
    encode(message, writer = BinaryWriter.create()) {
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
    decode(input, length) {
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
    fromJSON(object) {
        return {
            consensus_state: isSet(object.consensus_state) ? Any.fromJSON(object.consensus_state) : undefined,
            client_id: isSet(object.client_id) ? String(object.client_id) : "",
            proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(),
            proof_height: isSet(object.proof_height) ? Height.fromJSON(object.proof_height) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.consensus_state !== undefined && (obj.consensus_state = message.consensus_state ? Any.toJSON(message.consensus_state) : undefined);
        message.client_id !== undefined && (obj.client_id = message.client_id);
        message.proof !== undefined && (obj.proof = base64FromBytes(message.proof !== undefined ? message.proof : new Uint8Array()));
        message.proof_height !== undefined && (obj.proof_height = message.proof_height ? Height.toJSON(message.proof_height) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryChannelConsensusStateResponse();
        message.consensus_state = object.consensus_state !== undefined && object.consensus_state !== null ? Any.fromPartial(object.consensus_state) : undefined;
        message.client_id = object.client_id ?? "";
        message.proof = object.proof ?? new Uint8Array();
        message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? Height.fromPartial(object.proof_height) : undefined;
        return message;
    },
    fromAmino(object) {
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
    toAmino(message) {
        const obj = {};
        obj.consensus_state = message.consensus_state ? Any.toAmino(message.consensus_state) : undefined;
        obj.client_id = message.client_id;
        obj.proof = message.proof ? base64FromBytes(message.proof) : undefined;
        obj.proof_height = message.proof_height ? Height.toAmino(message.proof_height) : {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryChannelConsensusStateResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryChannelConsensusStateResponse",
            value: QueryChannelConsensusStateResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryChannelConsensusStateResponse.decode(message.value);
    },
    toProto(message) {
        return QueryChannelConsensusStateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryChannelConsensusStateResponse",
            value: QueryChannelConsensusStateResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryChannelConsensusStateResponse.typeUrl, QueryChannelConsensusStateResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryChannelConsensusStateResponse.aminoType, QueryChannelConsensusStateResponse.typeUrl);
function createBaseQueryPacketCommitmentRequest() {
    return {
        port_id: "",
        channel_id: "",
        sequence: BigInt(0)
    };
}
export const QueryPacketCommitmentRequest = {
    typeUrl: "/ibc.core.channel.v1.QueryPacketCommitmentRequest",
    aminoType: "cosmos-sdk/QueryPacketCommitmentRequest",
    is(o) {
        return o && (o.$typeUrl === QueryPacketCommitmentRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && typeof o.sequence === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryPacketCommitmentRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && typeof o.sequence === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === QueryPacketCommitmentRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && typeof o.sequence === "bigint");
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
        const message = createBaseQueryPacketCommitmentRequest();
        message.port_id = object.port_id ?? "";
        message.channel_id = object.channel_id ?? "";
        message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
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
    toAmino(message) {
        const obj = {};
        obj.port_id = message.port_id;
        obj.channel_id = message.channel_id;
        obj.sequence = message.sequence ? message.sequence.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryPacketCommitmentRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryPacketCommitmentRequest",
            value: QueryPacketCommitmentRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryPacketCommitmentRequest.decode(message.value);
    },
    toProto(message) {
        return QueryPacketCommitmentRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryPacketCommitmentRequest",
            value: QueryPacketCommitmentRequest.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryPacketCommitmentRequest.typeUrl, QueryPacketCommitmentRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryPacketCommitmentRequest.aminoType, QueryPacketCommitmentRequest.typeUrl);
function createBaseQueryPacketCommitmentResponse() {
    return {
        commitment: new Uint8Array(),
        proof: new Uint8Array(),
        proof_height: Height.fromPartial({})
    };
}
export const QueryPacketCommitmentResponse = {
    typeUrl: "/ibc.core.channel.v1.QueryPacketCommitmentResponse",
    aminoType: "cosmos-sdk/QueryPacketCommitmentResponse",
    is(o) {
        return o && (o.$typeUrl === QueryPacketCommitmentResponse.typeUrl || (o.commitment instanceof Uint8Array || typeof o.commitment === "string") && (o.proof instanceof Uint8Array || typeof o.proof === "string") && Height.is(o.proof_height));
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryPacketCommitmentResponse.typeUrl || (o.commitment instanceof Uint8Array || typeof o.commitment === "string") && (o.proof instanceof Uint8Array || typeof o.proof === "string") && Height.isSDK(o.proof_height));
    },
    isAmino(o) {
        return o && (o.$typeUrl === QueryPacketCommitmentResponse.typeUrl || (o.commitment instanceof Uint8Array || typeof o.commitment === "string") && (o.proof instanceof Uint8Array || typeof o.proof === "string") && Height.isAmino(o.proof_height));
    },
    encode(message, writer = BinaryWriter.create()) {
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
    decode(input, length) {
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
    fromJSON(object) {
        return {
            commitment: isSet(object.commitment) ? bytesFromBase64(object.commitment) : new Uint8Array(),
            proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(),
            proof_height: isSet(object.proof_height) ? Height.fromJSON(object.proof_height) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.commitment !== undefined && (obj.commitment = base64FromBytes(message.commitment !== undefined ? message.commitment : new Uint8Array()));
        message.proof !== undefined && (obj.proof = base64FromBytes(message.proof !== undefined ? message.proof : new Uint8Array()));
        message.proof_height !== undefined && (obj.proof_height = message.proof_height ? Height.toJSON(message.proof_height) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryPacketCommitmentResponse();
        message.commitment = object.commitment ?? new Uint8Array();
        message.proof = object.proof ?? new Uint8Array();
        message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? Height.fromPartial(object.proof_height) : undefined;
        return message;
    },
    fromAmino(object) {
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
    toAmino(message) {
        const obj = {};
        obj.commitment = message.commitment ? base64FromBytes(message.commitment) : undefined;
        obj.proof = message.proof ? base64FromBytes(message.proof) : undefined;
        obj.proof_height = message.proof_height ? Height.toAmino(message.proof_height) : {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryPacketCommitmentResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryPacketCommitmentResponse",
            value: QueryPacketCommitmentResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryPacketCommitmentResponse.decode(message.value);
    },
    toProto(message) {
        return QueryPacketCommitmentResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryPacketCommitmentResponse",
            value: QueryPacketCommitmentResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryPacketCommitmentResponse.typeUrl, QueryPacketCommitmentResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryPacketCommitmentResponse.aminoType, QueryPacketCommitmentResponse.typeUrl);
function createBaseQueryPacketCommitmentsRequest() {
    return {
        port_id: "",
        channel_id: "",
        pagination: undefined
    };
}
export const QueryPacketCommitmentsRequest = {
    typeUrl: "/ibc.core.channel.v1.QueryPacketCommitmentsRequest",
    aminoType: "cosmos-sdk/QueryPacketCommitmentsRequest",
    is(o) {
        return o && (o.$typeUrl === QueryPacketCommitmentsRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryPacketCommitmentsRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === QueryPacketCommitmentsRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
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
    decode(input, length) {
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
    fromJSON(object) {
        return {
            port_id: isSet(object.port_id) ? String(object.port_id) : "",
            channel_id: isSet(object.channel_id) ? String(object.channel_id) : "",
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.port_id !== undefined && (obj.port_id = message.port_id);
        message.channel_id !== undefined && (obj.channel_id = message.channel_id);
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryPacketCommitmentsRequest();
        message.port_id = object.port_id ?? "";
        message.channel_id = object.channel_id ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
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
    toAmino(message) {
        const obj = {};
        obj.port_id = message.port_id;
        obj.channel_id = message.channel_id;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryPacketCommitmentsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryPacketCommitmentsRequest",
            value: QueryPacketCommitmentsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryPacketCommitmentsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryPacketCommitmentsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryPacketCommitmentsRequest",
            value: QueryPacketCommitmentsRequest.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryPacketCommitmentsRequest.typeUrl, QueryPacketCommitmentsRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryPacketCommitmentsRequest.aminoType, QueryPacketCommitmentsRequest.typeUrl);
function createBaseQueryPacketCommitmentsResponse() {
    return {
        commitments: [],
        pagination: undefined,
        height: Height.fromPartial({})
    };
}
export const QueryPacketCommitmentsResponse = {
    typeUrl: "/ibc.core.channel.v1.QueryPacketCommitmentsResponse",
    aminoType: "cosmos-sdk/QueryPacketCommitmentsResponse",
    is(o) {
        return o && (o.$typeUrl === QueryPacketCommitmentsResponse.typeUrl || Array.isArray(o.commitments) && (!o.commitments.length || PacketState.is(o.commitments[0])) && Height.is(o.height));
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryPacketCommitmentsResponse.typeUrl || Array.isArray(o.commitments) && (!o.commitments.length || PacketState.isSDK(o.commitments[0])) && Height.isSDK(o.height));
    },
    isAmino(o) {
        return o && (o.$typeUrl === QueryPacketCommitmentsResponse.typeUrl || Array.isArray(o.commitments) && (!o.commitments.length || PacketState.isAmino(o.commitments[0])) && Height.isAmino(o.height));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.commitments) {
            PacketState.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        if (message.height !== undefined) {
            Height.encode(message.height, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return {
            commitments: Array.isArray(object?.commitments) ? object.commitments.map((e) => PacketState.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
            height: isSet(object.height) ? Height.fromJSON(object.height) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.commitments) {
            obj.commitments = message.commitments.map(e => e ? PacketState.toJSON(e) : undefined);
        }
        else {
            obj.commitments = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        message.height !== undefined && (obj.height = message.height ? Height.toJSON(message.height) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryPacketCommitmentsResponse();
        message.commitments = object.commitments?.map(e => PacketState.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        message.height = object.height !== undefined && object.height !== null ? Height.fromPartial(object.height) : undefined;
        return message;
    },
    fromAmino(object) {
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
    toAmino(message) {
        const obj = {};
        if (message.commitments) {
            obj.commitments = message.commitments.map(e => e ? PacketState.toAmino(e) : undefined);
        }
        else {
            obj.commitments = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        obj.height = message.height ? Height.toAmino(message.height) : {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryPacketCommitmentsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryPacketCommitmentsResponse",
            value: QueryPacketCommitmentsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryPacketCommitmentsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryPacketCommitmentsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryPacketCommitmentsResponse",
            value: QueryPacketCommitmentsResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryPacketCommitmentsResponse.typeUrl, QueryPacketCommitmentsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryPacketCommitmentsResponse.aminoType, QueryPacketCommitmentsResponse.typeUrl);
function createBaseQueryPacketReceiptRequest() {
    return {
        port_id: "",
        channel_id: "",
        sequence: BigInt(0)
    };
}
export const QueryPacketReceiptRequest = {
    typeUrl: "/ibc.core.channel.v1.QueryPacketReceiptRequest",
    aminoType: "cosmos-sdk/QueryPacketReceiptRequest",
    is(o) {
        return o && (o.$typeUrl === QueryPacketReceiptRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && typeof o.sequence === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryPacketReceiptRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && typeof o.sequence === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === QueryPacketReceiptRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && typeof o.sequence === "bigint");
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
        const message = createBaseQueryPacketReceiptRequest();
        message.port_id = object.port_id ?? "";
        message.channel_id = object.channel_id ?? "";
        message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
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
    toAmino(message) {
        const obj = {};
        obj.port_id = message.port_id;
        obj.channel_id = message.channel_id;
        obj.sequence = message.sequence ? message.sequence.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryPacketReceiptRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryPacketReceiptRequest",
            value: QueryPacketReceiptRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryPacketReceiptRequest.decode(message.value);
    },
    toProto(message) {
        return QueryPacketReceiptRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryPacketReceiptRequest",
            value: QueryPacketReceiptRequest.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryPacketReceiptRequest.typeUrl, QueryPacketReceiptRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryPacketReceiptRequest.aminoType, QueryPacketReceiptRequest.typeUrl);
function createBaseQueryPacketReceiptResponse() {
    return {
        received: false,
        proof: new Uint8Array(),
        proof_height: Height.fromPartial({})
    };
}
export const QueryPacketReceiptResponse = {
    typeUrl: "/ibc.core.channel.v1.QueryPacketReceiptResponse",
    aminoType: "cosmos-sdk/QueryPacketReceiptResponse",
    is(o) {
        return o && (o.$typeUrl === QueryPacketReceiptResponse.typeUrl || typeof o.received === "boolean" && (o.proof instanceof Uint8Array || typeof o.proof === "string") && Height.is(o.proof_height));
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryPacketReceiptResponse.typeUrl || typeof o.received === "boolean" && (o.proof instanceof Uint8Array || typeof o.proof === "string") && Height.isSDK(o.proof_height));
    },
    isAmino(o) {
        return o && (o.$typeUrl === QueryPacketReceiptResponse.typeUrl || typeof o.received === "boolean" && (o.proof instanceof Uint8Array || typeof o.proof === "string") && Height.isAmino(o.proof_height));
    },
    encode(message, writer = BinaryWriter.create()) {
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
    decode(input, length) {
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
    fromJSON(object) {
        return {
            received: isSet(object.received) ? Boolean(object.received) : false,
            proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(),
            proof_height: isSet(object.proof_height) ? Height.fromJSON(object.proof_height) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.received !== undefined && (obj.received = message.received);
        message.proof !== undefined && (obj.proof = base64FromBytes(message.proof !== undefined ? message.proof : new Uint8Array()));
        message.proof_height !== undefined && (obj.proof_height = message.proof_height ? Height.toJSON(message.proof_height) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryPacketReceiptResponse();
        message.received = object.received ?? false;
        message.proof = object.proof ?? new Uint8Array();
        message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? Height.fromPartial(object.proof_height) : undefined;
        return message;
    },
    fromAmino(object) {
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
    toAmino(message) {
        const obj = {};
        obj.received = message.received;
        obj.proof = message.proof ? base64FromBytes(message.proof) : undefined;
        obj.proof_height = message.proof_height ? Height.toAmino(message.proof_height) : {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryPacketReceiptResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryPacketReceiptResponse",
            value: QueryPacketReceiptResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryPacketReceiptResponse.decode(message.value);
    },
    toProto(message) {
        return QueryPacketReceiptResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryPacketReceiptResponse",
            value: QueryPacketReceiptResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryPacketReceiptResponse.typeUrl, QueryPacketReceiptResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryPacketReceiptResponse.aminoType, QueryPacketReceiptResponse.typeUrl);
function createBaseQueryPacketAcknowledgementRequest() {
    return {
        port_id: "",
        channel_id: "",
        sequence: BigInt(0)
    };
}
export const QueryPacketAcknowledgementRequest = {
    typeUrl: "/ibc.core.channel.v1.QueryPacketAcknowledgementRequest",
    aminoType: "cosmos-sdk/QueryPacketAcknowledgementRequest",
    is(o) {
        return o && (o.$typeUrl === QueryPacketAcknowledgementRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && typeof o.sequence === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryPacketAcknowledgementRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && typeof o.sequence === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === QueryPacketAcknowledgementRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && typeof o.sequence === "bigint");
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
        const message = createBaseQueryPacketAcknowledgementRequest();
        message.port_id = object.port_id ?? "";
        message.channel_id = object.channel_id ?? "";
        message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
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
    toAmino(message) {
        const obj = {};
        obj.port_id = message.port_id;
        obj.channel_id = message.channel_id;
        obj.sequence = message.sequence ? message.sequence.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryPacketAcknowledgementRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryPacketAcknowledgementRequest",
            value: QueryPacketAcknowledgementRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryPacketAcknowledgementRequest.decode(message.value);
    },
    toProto(message) {
        return QueryPacketAcknowledgementRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryPacketAcknowledgementRequest",
            value: QueryPacketAcknowledgementRequest.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryPacketAcknowledgementRequest.typeUrl, QueryPacketAcknowledgementRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryPacketAcknowledgementRequest.aminoType, QueryPacketAcknowledgementRequest.typeUrl);
function createBaseQueryPacketAcknowledgementResponse() {
    return {
        acknowledgement: new Uint8Array(),
        proof: new Uint8Array(),
        proof_height: Height.fromPartial({})
    };
}
export const QueryPacketAcknowledgementResponse = {
    typeUrl: "/ibc.core.channel.v1.QueryPacketAcknowledgementResponse",
    aminoType: "cosmos-sdk/QueryPacketAcknowledgementResponse",
    is(o) {
        return o && (o.$typeUrl === QueryPacketAcknowledgementResponse.typeUrl || (o.acknowledgement instanceof Uint8Array || typeof o.acknowledgement === "string") && (o.proof instanceof Uint8Array || typeof o.proof === "string") && Height.is(o.proof_height));
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryPacketAcknowledgementResponse.typeUrl || (o.acknowledgement instanceof Uint8Array || typeof o.acknowledgement === "string") && (o.proof instanceof Uint8Array || typeof o.proof === "string") && Height.isSDK(o.proof_height));
    },
    isAmino(o) {
        return o && (o.$typeUrl === QueryPacketAcknowledgementResponse.typeUrl || (o.acknowledgement instanceof Uint8Array || typeof o.acknowledgement === "string") && (o.proof instanceof Uint8Array || typeof o.proof === "string") && Height.isAmino(o.proof_height));
    },
    encode(message, writer = BinaryWriter.create()) {
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
    decode(input, length) {
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
    fromJSON(object) {
        return {
            acknowledgement: isSet(object.acknowledgement) ? bytesFromBase64(object.acknowledgement) : new Uint8Array(),
            proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(),
            proof_height: isSet(object.proof_height) ? Height.fromJSON(object.proof_height) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.acknowledgement !== undefined && (obj.acknowledgement = base64FromBytes(message.acknowledgement !== undefined ? message.acknowledgement : new Uint8Array()));
        message.proof !== undefined && (obj.proof = base64FromBytes(message.proof !== undefined ? message.proof : new Uint8Array()));
        message.proof_height !== undefined && (obj.proof_height = message.proof_height ? Height.toJSON(message.proof_height) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryPacketAcknowledgementResponse();
        message.acknowledgement = object.acknowledgement ?? new Uint8Array();
        message.proof = object.proof ?? new Uint8Array();
        message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? Height.fromPartial(object.proof_height) : undefined;
        return message;
    },
    fromAmino(object) {
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
    toAmino(message) {
        const obj = {};
        obj.acknowledgement = message.acknowledgement ? base64FromBytes(message.acknowledgement) : undefined;
        obj.proof = message.proof ? base64FromBytes(message.proof) : undefined;
        obj.proof_height = message.proof_height ? Height.toAmino(message.proof_height) : {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryPacketAcknowledgementResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryPacketAcknowledgementResponse",
            value: QueryPacketAcknowledgementResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryPacketAcknowledgementResponse.decode(message.value);
    },
    toProto(message) {
        return QueryPacketAcknowledgementResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryPacketAcknowledgementResponse",
            value: QueryPacketAcknowledgementResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryPacketAcknowledgementResponse.typeUrl, QueryPacketAcknowledgementResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryPacketAcknowledgementResponse.aminoType, QueryPacketAcknowledgementResponse.typeUrl);
function createBaseQueryPacketAcknowledgementsRequest() {
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
    is(o) {
        return o && (o.$typeUrl === QueryPacketAcknowledgementsRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && Array.isArray(o.packet_commitment_sequences) && (!o.packet_commitment_sequences.length || typeof o.packet_commitment_sequences[0] === "bigint"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryPacketAcknowledgementsRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && Array.isArray(o.packet_commitment_sequences) && (!o.packet_commitment_sequences.length || typeof o.packet_commitment_sequences[0] === "bigint"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === QueryPacketAcknowledgementsRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && Array.isArray(o.packet_commitment_sequences) && (!o.packet_commitment_sequences.length || typeof o.packet_commitment_sequences[0] === "bigint"));
    },
    encode(message, writer = BinaryWriter.create()) {
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
    decode(input, length) {
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
            port_id: isSet(object.port_id) ? String(object.port_id) : "",
            channel_id: isSet(object.channel_id) ? String(object.channel_id) : "",
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
            packet_commitment_sequences: Array.isArray(object?.packet_commitment_sequences) ? object.packet_commitment_sequences.map((e) => BigInt(e.toString())) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.port_id !== undefined && (obj.port_id = message.port_id);
        message.channel_id !== undefined && (obj.channel_id = message.channel_id);
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
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
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        message.packet_commitment_sequences = object.packet_commitment_sequences?.map(e => BigInt(e.toString())) || [];
        return message;
    },
    fromAmino(object) {
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
    toAmino(message) {
        const obj = {};
        obj.port_id = message.port_id;
        obj.channel_id = message.channel_id;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        if (message.packet_commitment_sequences) {
            obj.packet_commitment_sequences = message.packet_commitment_sequences.map(e => e.toString());
        }
        else {
            obj.packet_commitment_sequences = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryPacketAcknowledgementsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryPacketAcknowledgementsRequest",
            value: QueryPacketAcknowledgementsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryPacketAcknowledgementsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryPacketAcknowledgementsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryPacketAcknowledgementsRequest",
            value: QueryPacketAcknowledgementsRequest.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryPacketAcknowledgementsRequest.typeUrl, QueryPacketAcknowledgementsRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryPacketAcknowledgementsRequest.aminoType, QueryPacketAcknowledgementsRequest.typeUrl);
function createBaseQueryPacketAcknowledgementsResponse() {
    return {
        acknowledgements: [],
        pagination: undefined,
        height: Height.fromPartial({})
    };
}
export const QueryPacketAcknowledgementsResponse = {
    typeUrl: "/ibc.core.channel.v1.QueryPacketAcknowledgementsResponse",
    aminoType: "cosmos-sdk/QueryPacketAcknowledgementsResponse",
    is(o) {
        return o && (o.$typeUrl === QueryPacketAcknowledgementsResponse.typeUrl || Array.isArray(o.acknowledgements) && (!o.acknowledgements.length || PacketState.is(o.acknowledgements[0])) && Height.is(o.height));
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryPacketAcknowledgementsResponse.typeUrl || Array.isArray(o.acknowledgements) && (!o.acknowledgements.length || PacketState.isSDK(o.acknowledgements[0])) && Height.isSDK(o.height));
    },
    isAmino(o) {
        return o && (o.$typeUrl === QueryPacketAcknowledgementsResponse.typeUrl || Array.isArray(o.acknowledgements) && (!o.acknowledgements.length || PacketState.isAmino(o.acknowledgements[0])) && Height.isAmino(o.height));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.acknowledgements) {
            PacketState.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        if (message.height !== undefined) {
            Height.encode(message.height, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return {
            acknowledgements: Array.isArray(object?.acknowledgements) ? object.acknowledgements.map((e) => PacketState.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
            height: isSet(object.height) ? Height.fromJSON(object.height) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.acknowledgements) {
            obj.acknowledgements = message.acknowledgements.map(e => e ? PacketState.toJSON(e) : undefined);
        }
        else {
            obj.acknowledgements = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        message.height !== undefined && (obj.height = message.height ? Height.toJSON(message.height) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryPacketAcknowledgementsResponse();
        message.acknowledgements = object.acknowledgements?.map(e => PacketState.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        message.height = object.height !== undefined && object.height !== null ? Height.fromPartial(object.height) : undefined;
        return message;
    },
    fromAmino(object) {
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
    toAmino(message) {
        const obj = {};
        if (message.acknowledgements) {
            obj.acknowledgements = message.acknowledgements.map(e => e ? PacketState.toAmino(e) : undefined);
        }
        else {
            obj.acknowledgements = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        obj.height = message.height ? Height.toAmino(message.height) : {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryPacketAcknowledgementsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryPacketAcknowledgementsResponse",
            value: QueryPacketAcknowledgementsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryPacketAcknowledgementsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryPacketAcknowledgementsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryPacketAcknowledgementsResponse",
            value: QueryPacketAcknowledgementsResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryPacketAcknowledgementsResponse.typeUrl, QueryPacketAcknowledgementsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryPacketAcknowledgementsResponse.aminoType, QueryPacketAcknowledgementsResponse.typeUrl);
function createBaseQueryUnreceivedPacketsRequest() {
    return {
        port_id: "",
        channel_id: "",
        packet_commitment_sequences: []
    };
}
export const QueryUnreceivedPacketsRequest = {
    typeUrl: "/ibc.core.channel.v1.QueryUnreceivedPacketsRequest",
    aminoType: "cosmos-sdk/QueryUnreceivedPacketsRequest",
    is(o) {
        return o && (o.$typeUrl === QueryUnreceivedPacketsRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && Array.isArray(o.packet_commitment_sequences) && (!o.packet_commitment_sequences.length || typeof o.packet_commitment_sequences[0] === "bigint"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryUnreceivedPacketsRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && Array.isArray(o.packet_commitment_sequences) && (!o.packet_commitment_sequences.length || typeof o.packet_commitment_sequences[0] === "bigint"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === QueryUnreceivedPacketsRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && Array.isArray(o.packet_commitment_sequences) && (!o.packet_commitment_sequences.length || typeof o.packet_commitment_sequences[0] === "bigint"));
    },
    encode(message, writer = BinaryWriter.create()) {
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
            port_id: isSet(object.port_id) ? String(object.port_id) : "",
            channel_id: isSet(object.channel_id) ? String(object.channel_id) : "",
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
    fromAmino(object) {
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
        return QueryUnreceivedPacketsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryUnreceivedPacketsRequest",
            value: QueryUnreceivedPacketsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryUnreceivedPacketsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryUnreceivedPacketsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryUnreceivedPacketsRequest",
            value: QueryUnreceivedPacketsRequest.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryUnreceivedPacketsRequest.typeUrl, QueryUnreceivedPacketsRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryUnreceivedPacketsRequest.aminoType, QueryUnreceivedPacketsRequest.typeUrl);
function createBaseQueryUnreceivedPacketsResponse() {
    return {
        sequences: [],
        height: Height.fromPartial({})
    };
}
export const QueryUnreceivedPacketsResponse = {
    typeUrl: "/ibc.core.channel.v1.QueryUnreceivedPacketsResponse",
    aminoType: "cosmos-sdk/QueryUnreceivedPacketsResponse",
    is(o) {
        return o && (o.$typeUrl === QueryUnreceivedPacketsResponse.typeUrl || Array.isArray(o.sequences) && (!o.sequences.length || typeof o.sequences[0] === "bigint") && Height.is(o.height));
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryUnreceivedPacketsResponse.typeUrl || Array.isArray(o.sequences) && (!o.sequences.length || typeof o.sequences[0] === "bigint") && Height.isSDK(o.height));
    },
    isAmino(o) {
        return o && (o.$typeUrl === QueryUnreceivedPacketsResponse.typeUrl || Array.isArray(o.sequences) && (!o.sequences.length || typeof o.sequences[0] === "bigint") && Height.isAmino(o.height));
    },
    encode(message, writer = BinaryWriter.create()) {
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
    decode(input, length) {
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
                    }
                    else {
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
    fromJSON(object) {
        return {
            sequences: Array.isArray(object?.sequences) ? object.sequences.map((e) => BigInt(e.toString())) : [],
            height: isSet(object.height) ? Height.fromJSON(object.height) : undefined
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
        message.height !== undefined && (obj.height = message.height ? Height.toJSON(message.height) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryUnreceivedPacketsResponse();
        message.sequences = object.sequences?.map(e => BigInt(e.toString())) || [];
        message.height = object.height !== undefined && object.height !== null ? Height.fromPartial(object.height) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryUnreceivedPacketsResponse();
        message.sequences = object.sequences?.map(e => BigInt(e)) || [];
        if (object.height !== undefined && object.height !== null) {
            message.height = Height.fromAmino(object.height);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.sequences) {
            obj.sequences = message.sequences.map(e => e.toString());
        }
        else {
            obj.sequences = [];
        }
        obj.height = message.height ? Height.toAmino(message.height) : {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryUnreceivedPacketsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryUnreceivedPacketsResponse",
            value: QueryUnreceivedPacketsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryUnreceivedPacketsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryUnreceivedPacketsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryUnreceivedPacketsResponse",
            value: QueryUnreceivedPacketsResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryUnreceivedPacketsResponse.typeUrl, QueryUnreceivedPacketsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryUnreceivedPacketsResponse.aminoType, QueryUnreceivedPacketsResponse.typeUrl);
function createBaseQueryUnreceivedAcksRequest() {
    return {
        port_id: "",
        channel_id: "",
        packet_ack_sequences: []
    };
}
export const QueryUnreceivedAcksRequest = {
    typeUrl: "/ibc.core.channel.v1.QueryUnreceivedAcksRequest",
    aminoType: "cosmos-sdk/QueryUnreceivedAcksRequest",
    is(o) {
        return o && (o.$typeUrl === QueryUnreceivedAcksRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && Array.isArray(o.packet_ack_sequences) && (!o.packet_ack_sequences.length || typeof o.packet_ack_sequences[0] === "bigint"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryUnreceivedAcksRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && Array.isArray(o.packet_ack_sequences) && (!o.packet_ack_sequences.length || typeof o.packet_ack_sequences[0] === "bigint"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === QueryUnreceivedAcksRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && Array.isArray(o.packet_ack_sequences) && (!o.packet_ack_sequences.length || typeof o.packet_ack_sequences[0] === "bigint"));
    },
    encode(message, writer = BinaryWriter.create()) {
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
            port_id: isSet(object.port_id) ? String(object.port_id) : "",
            channel_id: isSet(object.channel_id) ? String(object.channel_id) : "",
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
    fromAmino(object) {
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
        return QueryUnreceivedAcksRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryUnreceivedAcksRequest",
            value: QueryUnreceivedAcksRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryUnreceivedAcksRequest.decode(message.value);
    },
    toProto(message) {
        return QueryUnreceivedAcksRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryUnreceivedAcksRequest",
            value: QueryUnreceivedAcksRequest.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryUnreceivedAcksRequest.typeUrl, QueryUnreceivedAcksRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryUnreceivedAcksRequest.aminoType, QueryUnreceivedAcksRequest.typeUrl);
function createBaseQueryUnreceivedAcksResponse() {
    return {
        sequences: [],
        height: Height.fromPartial({})
    };
}
export const QueryUnreceivedAcksResponse = {
    typeUrl: "/ibc.core.channel.v1.QueryUnreceivedAcksResponse",
    aminoType: "cosmos-sdk/QueryUnreceivedAcksResponse",
    is(o) {
        return o && (o.$typeUrl === QueryUnreceivedAcksResponse.typeUrl || Array.isArray(o.sequences) && (!o.sequences.length || typeof o.sequences[0] === "bigint") && Height.is(o.height));
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryUnreceivedAcksResponse.typeUrl || Array.isArray(o.sequences) && (!o.sequences.length || typeof o.sequences[0] === "bigint") && Height.isSDK(o.height));
    },
    isAmino(o) {
        return o && (o.$typeUrl === QueryUnreceivedAcksResponse.typeUrl || Array.isArray(o.sequences) && (!o.sequences.length || typeof o.sequences[0] === "bigint") && Height.isAmino(o.height));
    },
    encode(message, writer = BinaryWriter.create()) {
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
    decode(input, length) {
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
                    }
                    else {
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
    fromJSON(object) {
        return {
            sequences: Array.isArray(object?.sequences) ? object.sequences.map((e) => BigInt(e.toString())) : [],
            height: isSet(object.height) ? Height.fromJSON(object.height) : undefined
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
        message.height !== undefined && (obj.height = message.height ? Height.toJSON(message.height) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryUnreceivedAcksResponse();
        message.sequences = object.sequences?.map(e => BigInt(e.toString())) || [];
        message.height = object.height !== undefined && object.height !== null ? Height.fromPartial(object.height) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryUnreceivedAcksResponse();
        message.sequences = object.sequences?.map(e => BigInt(e)) || [];
        if (object.height !== undefined && object.height !== null) {
            message.height = Height.fromAmino(object.height);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.sequences) {
            obj.sequences = message.sequences.map(e => e.toString());
        }
        else {
            obj.sequences = [];
        }
        obj.height = message.height ? Height.toAmino(message.height) : {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryUnreceivedAcksResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryUnreceivedAcksResponse",
            value: QueryUnreceivedAcksResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryUnreceivedAcksResponse.decode(message.value);
    },
    toProto(message) {
        return QueryUnreceivedAcksResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryUnreceivedAcksResponse",
            value: QueryUnreceivedAcksResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryUnreceivedAcksResponse.typeUrl, QueryUnreceivedAcksResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryUnreceivedAcksResponse.aminoType, QueryUnreceivedAcksResponse.typeUrl);
function createBaseQueryNextSequenceReceiveRequest() {
    return {
        port_id: "",
        channel_id: ""
    };
}
export const QueryNextSequenceReceiveRequest = {
    typeUrl: "/ibc.core.channel.v1.QueryNextSequenceReceiveRequest",
    aminoType: "cosmos-sdk/QueryNextSequenceReceiveRequest",
    is(o) {
        return o && (o.$typeUrl === QueryNextSequenceReceiveRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryNextSequenceReceiveRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === QueryNextSequenceReceiveRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string");
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
        const message = createBaseQueryNextSequenceReceiveRequest();
        message.port_id = object.port_id ?? "";
        message.channel_id = object.channel_id ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryNextSequenceReceiveRequest();
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
        return QueryNextSequenceReceiveRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryNextSequenceReceiveRequest",
            value: QueryNextSequenceReceiveRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryNextSequenceReceiveRequest.decode(message.value);
    },
    toProto(message) {
        return QueryNextSequenceReceiveRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryNextSequenceReceiveRequest",
            value: QueryNextSequenceReceiveRequest.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryNextSequenceReceiveRequest.typeUrl, QueryNextSequenceReceiveRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryNextSequenceReceiveRequest.aminoType, QueryNextSequenceReceiveRequest.typeUrl);
function createBaseQueryNextSequenceReceiveResponse() {
    return {
        next_sequence_receive: BigInt(0),
        proof: new Uint8Array(),
        proof_height: Height.fromPartial({})
    };
}
export const QueryNextSequenceReceiveResponse = {
    typeUrl: "/ibc.core.channel.v1.QueryNextSequenceReceiveResponse",
    aminoType: "cosmos-sdk/QueryNextSequenceReceiveResponse",
    is(o) {
        return o && (o.$typeUrl === QueryNextSequenceReceiveResponse.typeUrl || typeof o.next_sequence_receive === "bigint" && (o.proof instanceof Uint8Array || typeof o.proof === "string") && Height.is(o.proof_height));
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryNextSequenceReceiveResponse.typeUrl || typeof o.next_sequence_receive === "bigint" && (o.proof instanceof Uint8Array || typeof o.proof === "string") && Height.isSDK(o.proof_height));
    },
    isAmino(o) {
        return o && (o.$typeUrl === QueryNextSequenceReceiveResponse.typeUrl || typeof o.next_sequence_receive === "bigint" && (o.proof instanceof Uint8Array || typeof o.proof === "string") && Height.isAmino(o.proof_height));
    },
    encode(message, writer = BinaryWriter.create()) {
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
    decode(input, length) {
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
    fromJSON(object) {
        return {
            next_sequence_receive: isSet(object.next_sequence_receive) ? BigInt(object.next_sequence_receive.toString()) : BigInt(0),
            proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(),
            proof_height: isSet(object.proof_height) ? Height.fromJSON(object.proof_height) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.next_sequence_receive !== undefined && (obj.next_sequence_receive = (message.next_sequence_receive || BigInt(0)).toString());
        message.proof !== undefined && (obj.proof = base64FromBytes(message.proof !== undefined ? message.proof : new Uint8Array()));
        message.proof_height !== undefined && (obj.proof_height = message.proof_height ? Height.toJSON(message.proof_height) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryNextSequenceReceiveResponse();
        message.next_sequence_receive = object.next_sequence_receive !== undefined && object.next_sequence_receive !== null ? BigInt(object.next_sequence_receive.toString()) : BigInt(0);
        message.proof = object.proof ?? new Uint8Array();
        message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? Height.fromPartial(object.proof_height) : undefined;
        return message;
    },
    fromAmino(object) {
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
    toAmino(message) {
        const obj = {};
        obj.next_sequence_receive = message.next_sequence_receive ? message.next_sequence_receive.toString() : undefined;
        obj.proof = message.proof ? base64FromBytes(message.proof) : undefined;
        obj.proof_height = message.proof_height ? Height.toAmino(message.proof_height) : {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryNextSequenceReceiveResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryNextSequenceReceiveResponse",
            value: QueryNextSequenceReceiveResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryNextSequenceReceiveResponse.decode(message.value);
    },
    toProto(message) {
        return QueryNextSequenceReceiveResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryNextSequenceReceiveResponse",
            value: QueryNextSequenceReceiveResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryNextSequenceReceiveResponse.typeUrl, QueryNextSequenceReceiveResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryNextSequenceReceiveResponse.aminoType, QueryNextSequenceReceiveResponse.typeUrl);
function createBaseQueryNextSequenceSendRequest() {
    return {
        port_id: "",
        channel_id: ""
    };
}
export const QueryNextSequenceSendRequest = {
    typeUrl: "/ibc.core.channel.v1.QueryNextSequenceSendRequest",
    aminoType: "cosmos-sdk/QueryNextSequenceSendRequest",
    is(o) {
        return o && (o.$typeUrl === QueryNextSequenceSendRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryNextSequenceSendRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === QueryNextSequenceSendRequest.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string");
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
        const message = createBaseQueryNextSequenceSendRequest();
        message.port_id = object.port_id ?? "";
        message.channel_id = object.channel_id ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryNextSequenceSendRequest();
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
        return QueryNextSequenceSendRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryNextSequenceSendRequest",
            value: QueryNextSequenceSendRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryNextSequenceSendRequest.decode(message.value);
    },
    toProto(message) {
        return QueryNextSequenceSendRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryNextSequenceSendRequest",
            value: QueryNextSequenceSendRequest.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryNextSequenceSendRequest.typeUrl, QueryNextSequenceSendRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryNextSequenceSendRequest.aminoType, QueryNextSequenceSendRequest.typeUrl);
function createBaseQueryNextSequenceSendResponse() {
    return {
        next_sequence_send: BigInt(0),
        proof: new Uint8Array(),
        proof_height: Height.fromPartial({})
    };
}
export const QueryNextSequenceSendResponse = {
    typeUrl: "/ibc.core.channel.v1.QueryNextSequenceSendResponse",
    aminoType: "cosmos-sdk/QueryNextSequenceSendResponse",
    is(o) {
        return o && (o.$typeUrl === QueryNextSequenceSendResponse.typeUrl || typeof o.next_sequence_send === "bigint" && (o.proof instanceof Uint8Array || typeof o.proof === "string") && Height.is(o.proof_height));
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryNextSequenceSendResponse.typeUrl || typeof o.next_sequence_send === "bigint" && (o.proof instanceof Uint8Array || typeof o.proof === "string") && Height.isSDK(o.proof_height));
    },
    isAmino(o) {
        return o && (o.$typeUrl === QueryNextSequenceSendResponse.typeUrl || typeof o.next_sequence_send === "bigint" && (o.proof instanceof Uint8Array || typeof o.proof === "string") && Height.isAmino(o.proof_height));
    },
    encode(message, writer = BinaryWriter.create()) {
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
    decode(input, length) {
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
    fromJSON(object) {
        return {
            next_sequence_send: isSet(object.next_sequence_send) ? BigInt(object.next_sequence_send.toString()) : BigInt(0),
            proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(),
            proof_height: isSet(object.proof_height) ? Height.fromJSON(object.proof_height) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.next_sequence_send !== undefined && (obj.next_sequence_send = (message.next_sequence_send || BigInt(0)).toString());
        message.proof !== undefined && (obj.proof = base64FromBytes(message.proof !== undefined ? message.proof : new Uint8Array()));
        message.proof_height !== undefined && (obj.proof_height = message.proof_height ? Height.toJSON(message.proof_height) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryNextSequenceSendResponse();
        message.next_sequence_send = object.next_sequence_send !== undefined && object.next_sequence_send !== null ? BigInt(object.next_sequence_send.toString()) : BigInt(0);
        message.proof = object.proof ?? new Uint8Array();
        message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? Height.fromPartial(object.proof_height) : undefined;
        return message;
    },
    fromAmino(object) {
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
    toAmino(message) {
        const obj = {};
        obj.next_sequence_send = message.next_sequence_send ? message.next_sequence_send.toString() : undefined;
        obj.proof = message.proof ? base64FromBytes(message.proof) : undefined;
        obj.proof_height = message.proof_height ? Height.toAmino(message.proof_height) : {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryNextSequenceSendResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryNextSequenceSendResponse",
            value: QueryNextSequenceSendResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryNextSequenceSendResponse.decode(message.value);
    },
    toProto(message) {
        return QueryNextSequenceSendResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryNextSequenceSendResponse",
            value: QueryNextSequenceSendResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryNextSequenceSendResponse.typeUrl, QueryNextSequenceSendResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryNextSequenceSendResponse.aminoType, QueryNextSequenceSendResponse.typeUrl);
//# sourceMappingURL=query.js.map
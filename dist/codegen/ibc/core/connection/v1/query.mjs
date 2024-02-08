//@ts-nocheck
import { PageRequest, PageResponse } from "../../../../cosmos/base/query/v1beta1/pagination";
import { ConnectionEnd, IdentifiedConnection } from "./connection";
import { Height, IdentifiedClientState, Params } from "../../client/v1/client";
import { Any } from "../../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../../helpers";
export const protobufPackage = "ibc.core.connection.v1";
function createBaseQueryConnectionRequest() {
    return {
        connection_id: ""
    };
}
export const QueryConnectionRequest = {
    typeUrl: "/ibc.core.connection.v1.QueryConnectionRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.connection_id !== "") {
            writer.uint32(10).string(message.connection_id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConnectionRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connection_id = reader.string();
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
            connection_id: isSet(object.connection_id) ? String(object.connection_id) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.connection_id !== undefined && (obj.connection_id = message.connection_id);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryConnectionRequest();
        message.connection_id = object.connection_id ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryConnectionRequest();
        if (object.connection_id !== undefined && object.connection_id !== null) {
            message.connection_id = object.connection_id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.connection_id = message.connection_id;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryConnectionRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryConnectionRequest",
            value: QueryConnectionRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryConnectionRequest.decode(message.value);
    },
    toProto(message) {
        return QueryConnectionRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.QueryConnectionRequest",
            value: QueryConnectionRequest.encode(message).finish()
        };
    }
};
function createBaseQueryConnectionResponse() {
    return {
        connection: undefined,
        proof: new Uint8Array(),
        proof_height: Height.fromPartial({})
    };
}
export const QueryConnectionResponse = {
    typeUrl: "/ibc.core.connection.v1.QueryConnectionResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.connection !== undefined) {
            ConnectionEnd.encode(message.connection, writer.uint32(10).fork()).ldelim();
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
        const message = createBaseQueryConnectionResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connection = ConnectionEnd.decode(reader, reader.uint32());
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
            connection: isSet(object.connection) ? ConnectionEnd.fromJSON(object.connection) : undefined,
            proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(),
            proof_height: isSet(object.proof_height) ? Height.fromJSON(object.proof_height) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.connection !== undefined && (obj.connection = message.connection ? ConnectionEnd.toJSON(message.connection) : undefined);
        message.proof !== undefined && (obj.proof = base64FromBytes(message.proof !== undefined ? message.proof : new Uint8Array()));
        message.proof_height !== undefined && (obj.proof_height = message.proof_height ? Height.toJSON(message.proof_height) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryConnectionResponse();
        message.connection = object.connection !== undefined && object.connection !== null ? ConnectionEnd.fromPartial(object.connection) : undefined;
        message.proof = object.proof ?? new Uint8Array();
        message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? Height.fromPartial(object.proof_height) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryConnectionResponse();
        if (object.connection !== undefined && object.connection !== null) {
            message.connection = ConnectionEnd.fromAmino(object.connection);
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
        obj.connection = message.connection ? ConnectionEnd.toAmino(message.connection) : undefined;
        obj.proof = message.proof ? base64FromBytes(message.proof) : undefined;
        obj.proof_height = message.proof_height ? Height.toAmino(message.proof_height) : {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryConnectionResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryConnectionResponse",
            value: QueryConnectionResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryConnectionResponse.decode(message.value);
    },
    toProto(message) {
        return QueryConnectionResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.QueryConnectionResponse",
            value: QueryConnectionResponse.encode(message).finish()
        };
    }
};
function createBaseQueryConnectionsRequest() {
    return {
        pagination: undefined
    };
}
export const QueryConnectionsRequest = {
    typeUrl: "/ibc.core.connection.v1.QueryConnectionsRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConnectionsRequest();
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
        const message = createBaseQueryConnectionsRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryConnectionsRequest();
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
        return QueryConnectionsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryConnectionsRequest",
            value: QueryConnectionsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryConnectionsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryConnectionsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.QueryConnectionsRequest",
            value: QueryConnectionsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryConnectionsResponse() {
    return {
        connections: [],
        pagination: undefined,
        height: Height.fromPartial({})
    };
}
export const QueryConnectionsResponse = {
    typeUrl: "/ibc.core.connection.v1.QueryConnectionsResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.connections) {
            IdentifiedConnection.encode(v, writer.uint32(10).fork()).ldelim();
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
        const message = createBaseQueryConnectionsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connections.push(IdentifiedConnection.decode(reader, reader.uint32()));
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
            connections: Array.isArray(object?.connections) ? object.connections.map((e) => IdentifiedConnection.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
            height: isSet(object.height) ? Height.fromJSON(object.height) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.connections) {
            obj.connections = message.connections.map(e => e ? IdentifiedConnection.toJSON(e) : undefined);
        }
        else {
            obj.connections = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        message.height !== undefined && (obj.height = message.height ? Height.toJSON(message.height) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryConnectionsResponse();
        message.connections = object.connections?.map(e => IdentifiedConnection.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        message.height = object.height !== undefined && object.height !== null ? Height.fromPartial(object.height) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryConnectionsResponse();
        message.connections = object.connections?.map(e => IdentifiedConnection.fromAmino(e)) || [];
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
        if (message.connections) {
            obj.connections = message.connections.map(e => e ? IdentifiedConnection.toAmino(e) : undefined);
        }
        else {
            obj.connections = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        obj.height = message.height ? Height.toAmino(message.height) : {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryConnectionsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryConnectionsResponse",
            value: QueryConnectionsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryConnectionsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryConnectionsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.QueryConnectionsResponse",
            value: QueryConnectionsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryClientConnectionsRequest() {
    return {
        client_id: ""
    };
}
export const QueryClientConnectionsRequest = {
    typeUrl: "/ibc.core.connection.v1.QueryClientConnectionsRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.client_id !== "") {
            writer.uint32(10).string(message.client_id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClientConnectionsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.client_id = reader.string();
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
            client_id: isSet(object.client_id) ? String(object.client_id) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.client_id !== undefined && (obj.client_id = message.client_id);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryClientConnectionsRequest();
        message.client_id = object.client_id ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryClientConnectionsRequest();
        if (object.client_id !== undefined && object.client_id !== null) {
            message.client_id = object.client_id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.client_id = message.client_id;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryClientConnectionsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryClientConnectionsRequest",
            value: QueryClientConnectionsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryClientConnectionsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryClientConnectionsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.QueryClientConnectionsRequest",
            value: QueryClientConnectionsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryClientConnectionsResponse() {
    return {
        connection_paths: [],
        proof: new Uint8Array(),
        proof_height: Height.fromPartial({})
    };
}
export const QueryClientConnectionsResponse = {
    typeUrl: "/ibc.core.connection.v1.QueryClientConnectionsResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.connection_paths) {
            writer.uint32(10).string(v);
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
        const message = createBaseQueryClientConnectionsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connection_paths.push(reader.string());
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
            connection_paths: Array.isArray(object?.connection_paths) ? object.connection_paths.map((e) => String(e)) : [],
            proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(),
            proof_height: isSet(object.proof_height) ? Height.fromJSON(object.proof_height) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.connection_paths) {
            obj.connection_paths = message.connection_paths.map(e => e);
        }
        else {
            obj.connection_paths = [];
        }
        message.proof !== undefined && (obj.proof = base64FromBytes(message.proof !== undefined ? message.proof : new Uint8Array()));
        message.proof_height !== undefined && (obj.proof_height = message.proof_height ? Height.toJSON(message.proof_height) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryClientConnectionsResponse();
        message.connection_paths = object.connection_paths?.map(e => e) || [];
        message.proof = object.proof ?? new Uint8Array();
        message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? Height.fromPartial(object.proof_height) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryClientConnectionsResponse();
        message.connection_paths = object.connection_paths?.map(e => e) || [];
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
        if (message.connection_paths) {
            obj.connection_paths = message.connection_paths.map(e => e);
        }
        else {
            obj.connection_paths = [];
        }
        obj.proof = message.proof ? base64FromBytes(message.proof) : undefined;
        obj.proof_height = message.proof_height ? Height.toAmino(message.proof_height) : {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryClientConnectionsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryClientConnectionsResponse",
            value: QueryClientConnectionsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryClientConnectionsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryClientConnectionsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.QueryClientConnectionsResponse",
            value: QueryClientConnectionsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryConnectionClientStateRequest() {
    return {
        connection_id: ""
    };
}
export const QueryConnectionClientStateRequest = {
    typeUrl: "/ibc.core.connection.v1.QueryConnectionClientStateRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.connection_id !== "") {
            writer.uint32(10).string(message.connection_id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConnectionClientStateRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connection_id = reader.string();
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
            connection_id: isSet(object.connection_id) ? String(object.connection_id) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.connection_id !== undefined && (obj.connection_id = message.connection_id);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryConnectionClientStateRequest();
        message.connection_id = object.connection_id ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryConnectionClientStateRequest();
        if (object.connection_id !== undefined && object.connection_id !== null) {
            message.connection_id = object.connection_id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.connection_id = message.connection_id;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryConnectionClientStateRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryConnectionClientStateRequest",
            value: QueryConnectionClientStateRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryConnectionClientStateRequest.decode(message.value);
    },
    toProto(message) {
        return QueryConnectionClientStateRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.QueryConnectionClientStateRequest",
            value: QueryConnectionClientStateRequest.encode(message).finish()
        };
    }
};
function createBaseQueryConnectionClientStateResponse() {
    return {
        identified_client_state: undefined,
        proof: new Uint8Array(),
        proof_height: Height.fromPartial({})
    };
}
export const QueryConnectionClientStateResponse = {
    typeUrl: "/ibc.core.connection.v1.QueryConnectionClientStateResponse",
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
        const message = createBaseQueryConnectionClientStateResponse();
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
        const message = createBaseQueryConnectionClientStateResponse();
        message.identified_client_state = object.identified_client_state !== undefined && object.identified_client_state !== null ? IdentifiedClientState.fromPartial(object.identified_client_state) : undefined;
        message.proof = object.proof ?? new Uint8Array();
        message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? Height.fromPartial(object.proof_height) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryConnectionClientStateResponse();
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
        return QueryConnectionClientStateResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryConnectionClientStateResponse",
            value: QueryConnectionClientStateResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryConnectionClientStateResponse.decode(message.value);
    },
    toProto(message) {
        return QueryConnectionClientStateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.QueryConnectionClientStateResponse",
            value: QueryConnectionClientStateResponse.encode(message).finish()
        };
    }
};
function createBaseQueryConnectionConsensusStateRequest() {
    return {
        connection_id: "",
        revision_number: BigInt(0),
        revision_height: BigInt(0)
    };
}
export const QueryConnectionConsensusStateRequest = {
    typeUrl: "/ibc.core.connection.v1.QueryConnectionConsensusStateRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.connection_id !== "") {
            writer.uint32(10).string(message.connection_id);
        }
        if (message.revision_number !== BigInt(0)) {
            writer.uint32(16).uint64(message.revision_number);
        }
        if (message.revision_height !== BigInt(0)) {
            writer.uint32(24).uint64(message.revision_height);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConnectionConsensusStateRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connection_id = reader.string();
                    break;
                case 2:
                    message.revision_number = reader.uint64();
                    break;
                case 3:
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
            connection_id: isSet(object.connection_id) ? String(object.connection_id) : "",
            revision_number: isSet(object.revision_number) ? BigInt(object.revision_number.toString()) : BigInt(0),
            revision_height: isSet(object.revision_height) ? BigInt(object.revision_height.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.connection_id !== undefined && (obj.connection_id = message.connection_id);
        message.revision_number !== undefined && (obj.revision_number = (message.revision_number || BigInt(0)).toString());
        message.revision_height !== undefined && (obj.revision_height = (message.revision_height || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryConnectionConsensusStateRequest();
        message.connection_id = object.connection_id ?? "";
        message.revision_number = object.revision_number !== undefined && object.revision_number !== null ? BigInt(object.revision_number.toString()) : BigInt(0);
        message.revision_height = object.revision_height !== undefined && object.revision_height !== null ? BigInt(object.revision_height.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryConnectionConsensusStateRequest();
        if (object.connection_id !== undefined && object.connection_id !== null) {
            message.connection_id = object.connection_id;
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
        obj.connection_id = message.connection_id;
        obj.revision_number = message.revision_number ? message.revision_number.toString() : undefined;
        obj.revision_height = message.revision_height ? message.revision_height.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryConnectionConsensusStateRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryConnectionConsensusStateRequest",
            value: QueryConnectionConsensusStateRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryConnectionConsensusStateRequest.decode(message.value);
    },
    toProto(message) {
        return QueryConnectionConsensusStateRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.QueryConnectionConsensusStateRequest",
            value: QueryConnectionConsensusStateRequest.encode(message).finish()
        };
    }
};
function createBaseQueryConnectionConsensusStateResponse() {
    return {
        consensus_state: undefined,
        client_id: "",
        proof: new Uint8Array(),
        proof_height: Height.fromPartial({})
    };
}
export const QueryConnectionConsensusStateResponse = {
    typeUrl: "/ibc.core.connection.v1.QueryConnectionConsensusStateResponse",
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
        const message = createBaseQueryConnectionConsensusStateResponse();
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
        const message = createBaseQueryConnectionConsensusStateResponse();
        message.consensus_state = object.consensus_state !== undefined && object.consensus_state !== null ? Any.fromPartial(object.consensus_state) : undefined;
        message.client_id = object.client_id ?? "";
        message.proof = object.proof ?? new Uint8Array();
        message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? Height.fromPartial(object.proof_height) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryConnectionConsensusStateResponse();
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
        return QueryConnectionConsensusStateResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryConnectionConsensusStateResponse",
            value: QueryConnectionConsensusStateResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryConnectionConsensusStateResponse.decode(message.value);
    },
    toProto(message) {
        return QueryConnectionConsensusStateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.QueryConnectionConsensusStateResponse",
            value: QueryConnectionConsensusStateResponse.encode(message).finish()
        };
    }
};
function createBaseQueryConnectionParamsRequest() {
    return {};
}
export const QueryConnectionParamsRequest = {
    typeUrl: "/ibc.core.connection.v1.QueryConnectionParamsRequest",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConnectionParamsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseQueryConnectionParamsRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryConnectionParamsRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryConnectionParamsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryConnectionParamsRequest",
            value: QueryConnectionParamsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryConnectionParamsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryConnectionParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.QueryConnectionParamsRequest",
            value: QueryConnectionParamsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryConnectionParamsResponse() {
    return {
        params: undefined
    };
}
export const QueryConnectionParamsResponse = {
    typeUrl: "/ibc.core.connection.v1.QueryConnectionParamsResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConnectionParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = Params.decode(reader, reader.uint32());
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
            params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryConnectionParamsResponse();
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryConnectionParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryConnectionParamsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryConnectionParamsResponse",
            value: QueryConnectionParamsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryConnectionParamsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryConnectionParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.QueryConnectionParamsResponse",
            value: QueryConnectionParamsResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=query.js.map
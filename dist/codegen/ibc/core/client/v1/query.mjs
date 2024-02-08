//@ts-nocheck
import { PageRequest, PageResponse } from "../../../../cosmos/base/query/v1beta1/pagination";
import { Any } from "../../../../google/protobuf/any";
import { Height, IdentifiedClientState, ConsensusStateWithHeight, Params } from "./client";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../../helpers";
export const protobufPackage = "ibc.core.client.v1";
function createBaseQueryClientStateRequest() {
    return {
        client_id: ""
    };
}
export const QueryClientStateRequest = {
    typeUrl: "/ibc.core.client.v1.QueryClientStateRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.client_id !== "") {
            writer.uint32(10).string(message.client_id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClientStateRequest();
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
        const message = createBaseQueryClientStateRequest();
        message.client_id = object.client_id ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryClientStateRequest();
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
        return QueryClientStateRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryClientStateRequest",
            value: QueryClientStateRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryClientStateRequest.decode(message.value);
    },
    toProto(message) {
        return QueryClientStateRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.QueryClientStateRequest",
            value: QueryClientStateRequest.encode(message).finish()
        };
    }
};
function createBaseQueryClientStateResponse() {
    return {
        client_state: undefined,
        proof: new Uint8Array(),
        proof_height: Height.fromPartial({})
    };
}
export const QueryClientStateResponse = {
    typeUrl: "/ibc.core.client.v1.QueryClientStateResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.client_state !== undefined) {
            Any.encode(message.client_state, writer.uint32(10).fork()).ldelim();
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
        const message = createBaseQueryClientStateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.client_state = Any.decode(reader, reader.uint32());
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
            client_state: isSet(object.client_state) ? Any.fromJSON(object.client_state) : undefined,
            proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(),
            proof_height: isSet(object.proof_height) ? Height.fromJSON(object.proof_height) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.client_state !== undefined && (obj.client_state = message.client_state ? Any.toJSON(message.client_state) : undefined);
        message.proof !== undefined && (obj.proof = base64FromBytes(message.proof !== undefined ? message.proof : new Uint8Array()));
        message.proof_height !== undefined && (obj.proof_height = message.proof_height ? Height.toJSON(message.proof_height) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryClientStateResponse();
        message.client_state = object.client_state !== undefined && object.client_state !== null ? Any.fromPartial(object.client_state) : undefined;
        message.proof = object.proof ?? new Uint8Array();
        message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? Height.fromPartial(object.proof_height) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryClientStateResponse();
        if (object.client_state !== undefined && object.client_state !== null) {
            message.client_state = Any.fromAmino(object.client_state);
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
        obj.client_state = message.client_state ? Any.toAmino(message.client_state) : undefined;
        obj.proof = message.proof ? base64FromBytes(message.proof) : undefined;
        obj.proof_height = message.proof_height ? Height.toAmino(message.proof_height) : {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryClientStateResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryClientStateResponse",
            value: QueryClientStateResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryClientStateResponse.decode(message.value);
    },
    toProto(message) {
        return QueryClientStateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.QueryClientStateResponse",
            value: QueryClientStateResponse.encode(message).finish()
        };
    }
};
function createBaseQueryClientStatesRequest() {
    return {
        pagination: undefined
    };
}
export const QueryClientStatesRequest = {
    typeUrl: "/ibc.core.client.v1.QueryClientStatesRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClientStatesRequest();
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
        const message = createBaseQueryClientStatesRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryClientStatesRequest();
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
        return QueryClientStatesRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryClientStatesRequest",
            value: QueryClientStatesRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryClientStatesRequest.decode(message.value);
    },
    toProto(message) {
        return QueryClientStatesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.QueryClientStatesRequest",
            value: QueryClientStatesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryClientStatesResponse() {
    return {
        client_states: [],
        pagination: undefined
    };
}
export const QueryClientStatesResponse = {
    typeUrl: "/ibc.core.client.v1.QueryClientStatesResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.client_states) {
            IdentifiedClientState.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClientStatesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.client_states.push(IdentifiedClientState.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
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
            client_states: Array.isArray(object?.client_states) ? object.client_states.map((e) => IdentifiedClientState.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.client_states) {
            obj.client_states = message.client_states.map(e => e ? IdentifiedClientState.toJSON(e) : undefined);
        }
        else {
            obj.client_states = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryClientStatesResponse();
        message.client_states = object.client_states?.map(e => IdentifiedClientState.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryClientStatesResponse();
        message.client_states = object.client_states?.map(e => IdentifiedClientState.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.client_states) {
            obj.client_states = message.client_states.map(e => e ? IdentifiedClientState.toAmino(e) : undefined);
        }
        else {
            obj.client_states = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryClientStatesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryClientStatesResponse",
            value: QueryClientStatesResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryClientStatesResponse.decode(message.value);
    },
    toProto(message) {
        return QueryClientStatesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.QueryClientStatesResponse",
            value: QueryClientStatesResponse.encode(message).finish()
        };
    }
};
function createBaseQueryConsensusStateRequest() {
    return {
        client_id: "",
        revision_number: BigInt(0),
        revision_height: BigInt(0),
        latest_height: false
    };
}
export const QueryConsensusStateRequest = {
    typeUrl: "/ibc.core.client.v1.QueryConsensusStateRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.client_id !== "") {
            writer.uint32(10).string(message.client_id);
        }
        if (message.revision_number !== BigInt(0)) {
            writer.uint32(16).uint64(message.revision_number);
        }
        if (message.revision_height !== BigInt(0)) {
            writer.uint32(24).uint64(message.revision_height);
        }
        if (message.latest_height === true) {
            writer.uint32(32).bool(message.latest_height);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConsensusStateRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.client_id = reader.string();
                    break;
                case 2:
                    message.revision_number = reader.uint64();
                    break;
                case 3:
                    message.revision_height = reader.uint64();
                    break;
                case 4:
                    message.latest_height = reader.bool();
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
            client_id: isSet(object.client_id) ? String(object.client_id) : "",
            revision_number: isSet(object.revision_number) ? BigInt(object.revision_number.toString()) : BigInt(0),
            revision_height: isSet(object.revision_height) ? BigInt(object.revision_height.toString()) : BigInt(0),
            latest_height: isSet(object.latest_height) ? Boolean(object.latest_height) : false
        };
    },
    toJSON(message) {
        const obj = {};
        message.client_id !== undefined && (obj.client_id = message.client_id);
        message.revision_number !== undefined && (obj.revision_number = (message.revision_number || BigInt(0)).toString());
        message.revision_height !== undefined && (obj.revision_height = (message.revision_height || BigInt(0)).toString());
        message.latest_height !== undefined && (obj.latest_height = message.latest_height);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryConsensusStateRequest();
        message.client_id = object.client_id ?? "";
        message.revision_number = object.revision_number !== undefined && object.revision_number !== null ? BigInt(object.revision_number.toString()) : BigInt(0);
        message.revision_height = object.revision_height !== undefined && object.revision_height !== null ? BigInt(object.revision_height.toString()) : BigInt(0);
        message.latest_height = object.latest_height ?? false;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryConsensusStateRequest();
        if (object.client_id !== undefined && object.client_id !== null) {
            message.client_id = object.client_id;
        }
        if (object.revision_number !== undefined && object.revision_number !== null) {
            message.revision_number = BigInt(object.revision_number);
        }
        if (object.revision_height !== undefined && object.revision_height !== null) {
            message.revision_height = BigInt(object.revision_height);
        }
        if (object.latest_height !== undefined && object.latest_height !== null) {
            message.latest_height = object.latest_height;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.client_id = message.client_id;
        obj.revision_number = message.revision_number ? message.revision_number.toString() : undefined;
        obj.revision_height = message.revision_height ? message.revision_height.toString() : undefined;
        obj.latest_height = message.latest_height;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryConsensusStateRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryConsensusStateRequest",
            value: QueryConsensusStateRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryConsensusStateRequest.decode(message.value);
    },
    toProto(message) {
        return QueryConsensusStateRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.QueryConsensusStateRequest",
            value: QueryConsensusStateRequest.encode(message).finish()
        };
    }
};
function createBaseQueryConsensusStateResponse() {
    return {
        consensus_state: undefined,
        proof: new Uint8Array(),
        proof_height: Height.fromPartial({})
    };
}
export const QueryConsensusStateResponse = {
    typeUrl: "/ibc.core.client.v1.QueryConsensusStateResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.consensus_state !== undefined) {
            Any.encode(message.consensus_state, writer.uint32(10).fork()).ldelim();
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
        const message = createBaseQueryConsensusStateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.consensus_state = Any.decode(reader, reader.uint32());
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
            consensus_state: isSet(object.consensus_state) ? Any.fromJSON(object.consensus_state) : undefined,
            proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(),
            proof_height: isSet(object.proof_height) ? Height.fromJSON(object.proof_height) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.consensus_state !== undefined && (obj.consensus_state = message.consensus_state ? Any.toJSON(message.consensus_state) : undefined);
        message.proof !== undefined && (obj.proof = base64FromBytes(message.proof !== undefined ? message.proof : new Uint8Array()));
        message.proof_height !== undefined && (obj.proof_height = message.proof_height ? Height.toJSON(message.proof_height) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryConsensusStateResponse();
        message.consensus_state = object.consensus_state !== undefined && object.consensus_state !== null ? Any.fromPartial(object.consensus_state) : undefined;
        message.proof = object.proof ?? new Uint8Array();
        message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? Height.fromPartial(object.proof_height) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryConsensusStateResponse();
        if (object.consensus_state !== undefined && object.consensus_state !== null) {
            message.consensus_state = Any.fromAmino(object.consensus_state);
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
        obj.proof = message.proof ? base64FromBytes(message.proof) : undefined;
        obj.proof_height = message.proof_height ? Height.toAmino(message.proof_height) : {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryConsensusStateResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryConsensusStateResponse",
            value: QueryConsensusStateResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryConsensusStateResponse.decode(message.value);
    },
    toProto(message) {
        return QueryConsensusStateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.QueryConsensusStateResponse",
            value: QueryConsensusStateResponse.encode(message).finish()
        };
    }
};
function createBaseQueryConsensusStatesRequest() {
    return {
        client_id: "",
        pagination: undefined
    };
}
export const QueryConsensusStatesRequest = {
    typeUrl: "/ibc.core.client.v1.QueryConsensusStatesRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.client_id !== "") {
            writer.uint32(10).string(message.client_id);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConsensusStatesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.client_id = reader.string();
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
            client_id: isSet(object.client_id) ? String(object.client_id) : "",
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.client_id !== undefined && (obj.client_id = message.client_id);
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryConsensusStatesRequest();
        message.client_id = object.client_id ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryConsensusStatesRequest();
        if (object.client_id !== undefined && object.client_id !== null) {
            message.client_id = object.client_id;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.client_id = message.client_id;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryConsensusStatesRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryConsensusStatesRequest",
            value: QueryConsensusStatesRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryConsensusStatesRequest.decode(message.value);
    },
    toProto(message) {
        return QueryConsensusStatesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.QueryConsensusStatesRequest",
            value: QueryConsensusStatesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryConsensusStatesResponse() {
    return {
        consensus_states: [],
        pagination: undefined
    };
}
export const QueryConsensusStatesResponse = {
    typeUrl: "/ibc.core.client.v1.QueryConsensusStatesResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.consensus_states) {
            ConsensusStateWithHeight.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConsensusStatesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.consensus_states.push(ConsensusStateWithHeight.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
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
            consensus_states: Array.isArray(object?.consensus_states) ? object.consensus_states.map((e) => ConsensusStateWithHeight.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.consensus_states) {
            obj.consensus_states = message.consensus_states.map(e => e ? ConsensusStateWithHeight.toJSON(e) : undefined);
        }
        else {
            obj.consensus_states = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryConsensusStatesResponse();
        message.consensus_states = object.consensus_states?.map(e => ConsensusStateWithHeight.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryConsensusStatesResponse();
        message.consensus_states = object.consensus_states?.map(e => ConsensusStateWithHeight.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.consensus_states) {
            obj.consensus_states = message.consensus_states.map(e => e ? ConsensusStateWithHeight.toAmino(e) : undefined);
        }
        else {
            obj.consensus_states = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryConsensusStatesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryConsensusStatesResponse",
            value: QueryConsensusStatesResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryConsensusStatesResponse.decode(message.value);
    },
    toProto(message) {
        return QueryConsensusStatesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.QueryConsensusStatesResponse",
            value: QueryConsensusStatesResponse.encode(message).finish()
        };
    }
};
function createBaseQueryConsensusStateHeightsRequest() {
    return {
        client_id: "",
        pagination: undefined
    };
}
export const QueryConsensusStateHeightsRequest = {
    typeUrl: "/ibc.core.client.v1.QueryConsensusStateHeightsRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.client_id !== "") {
            writer.uint32(10).string(message.client_id);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConsensusStateHeightsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.client_id = reader.string();
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
            client_id: isSet(object.client_id) ? String(object.client_id) : "",
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.client_id !== undefined && (obj.client_id = message.client_id);
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryConsensusStateHeightsRequest();
        message.client_id = object.client_id ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryConsensusStateHeightsRequest();
        if (object.client_id !== undefined && object.client_id !== null) {
            message.client_id = object.client_id;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.client_id = message.client_id;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryConsensusStateHeightsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryConsensusStateHeightsRequest",
            value: QueryConsensusStateHeightsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryConsensusStateHeightsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryConsensusStateHeightsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.QueryConsensusStateHeightsRequest",
            value: QueryConsensusStateHeightsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryConsensusStateHeightsResponse() {
    return {
        consensus_state_heights: [],
        pagination: undefined
    };
}
export const QueryConsensusStateHeightsResponse = {
    typeUrl: "/ibc.core.client.v1.QueryConsensusStateHeightsResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.consensus_state_heights) {
            Height.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConsensusStateHeightsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.consensus_state_heights.push(Height.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
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
            consensus_state_heights: Array.isArray(object?.consensus_state_heights) ? object.consensus_state_heights.map((e) => Height.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.consensus_state_heights) {
            obj.consensus_state_heights = message.consensus_state_heights.map(e => e ? Height.toJSON(e) : undefined);
        }
        else {
            obj.consensus_state_heights = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryConsensusStateHeightsResponse();
        message.consensus_state_heights = object.consensus_state_heights?.map(e => Height.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryConsensusStateHeightsResponse();
        message.consensus_state_heights = object.consensus_state_heights?.map(e => Height.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.consensus_state_heights) {
            obj.consensus_state_heights = message.consensus_state_heights.map(e => e ? Height.toAmino(e) : undefined);
        }
        else {
            obj.consensus_state_heights = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryConsensusStateHeightsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryConsensusStateHeightsResponse",
            value: QueryConsensusStateHeightsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryConsensusStateHeightsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryConsensusStateHeightsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.QueryConsensusStateHeightsResponse",
            value: QueryConsensusStateHeightsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryClientStatusRequest() {
    return {
        client_id: ""
    };
}
export const QueryClientStatusRequest = {
    typeUrl: "/ibc.core.client.v1.QueryClientStatusRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.client_id !== "") {
            writer.uint32(10).string(message.client_id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClientStatusRequest();
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
        const message = createBaseQueryClientStatusRequest();
        message.client_id = object.client_id ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryClientStatusRequest();
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
        return QueryClientStatusRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryClientStatusRequest",
            value: QueryClientStatusRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryClientStatusRequest.decode(message.value);
    },
    toProto(message) {
        return QueryClientStatusRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.QueryClientStatusRequest",
            value: QueryClientStatusRequest.encode(message).finish()
        };
    }
};
function createBaseQueryClientStatusResponse() {
    return {
        status: ""
    };
}
export const QueryClientStatusResponse = {
    typeUrl: "/ibc.core.client.v1.QueryClientStatusResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.status !== "") {
            writer.uint32(10).string(message.status);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClientStatusResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.status = reader.string();
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
            status: isSet(object.status) ? String(object.status) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.status !== undefined && (obj.status = message.status);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryClientStatusResponse();
        message.status = object.status ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryClientStatusResponse();
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.status = message.status;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryClientStatusResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryClientStatusResponse",
            value: QueryClientStatusResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryClientStatusResponse.decode(message.value);
    },
    toProto(message) {
        return QueryClientStatusResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.QueryClientStatusResponse",
            value: QueryClientStatusResponse.encode(message).finish()
        };
    }
};
function createBaseQueryClientParamsRequest() {
    return {};
}
export const QueryClientParamsRequest = {
    typeUrl: "/ibc.core.client.v1.QueryClientParamsRequest",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClientParamsRequest();
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
        const message = createBaseQueryClientParamsRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryClientParamsRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryClientParamsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryClientParamsRequest",
            value: QueryClientParamsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryClientParamsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryClientParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.QueryClientParamsRequest",
            value: QueryClientParamsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryClientParamsResponse() {
    return {
        params: undefined
    };
}
export const QueryClientParamsResponse = {
    typeUrl: "/ibc.core.client.v1.QueryClientParamsResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClientParamsResponse();
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
        const message = createBaseQueryClientParamsResponse();
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryClientParamsResponse();
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
        return QueryClientParamsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryClientParamsResponse",
            value: QueryClientParamsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryClientParamsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryClientParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.QueryClientParamsResponse",
            value: QueryClientParamsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryUpgradedClientStateRequest() {
    return {};
}
export const QueryUpgradedClientStateRequest = {
    typeUrl: "/ibc.core.client.v1.QueryUpgradedClientStateRequest",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryUpgradedClientStateRequest();
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
        const message = createBaseQueryUpgradedClientStateRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryUpgradedClientStateRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryUpgradedClientStateRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryUpgradedClientStateRequest",
            value: QueryUpgradedClientStateRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryUpgradedClientStateRequest.decode(message.value);
    },
    toProto(message) {
        return QueryUpgradedClientStateRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.QueryUpgradedClientStateRequest",
            value: QueryUpgradedClientStateRequest.encode(message).finish()
        };
    }
};
function createBaseQueryUpgradedClientStateResponse() {
    return {
        upgraded_client_state: undefined
    };
}
export const QueryUpgradedClientStateResponse = {
    typeUrl: "/ibc.core.client.v1.QueryUpgradedClientStateResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.upgraded_client_state !== undefined) {
            Any.encode(message.upgraded_client_state, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryUpgradedClientStateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.upgraded_client_state = Any.decode(reader, reader.uint32());
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
            upgraded_client_state: isSet(object.upgraded_client_state) ? Any.fromJSON(object.upgraded_client_state) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.upgraded_client_state !== undefined && (obj.upgraded_client_state = message.upgraded_client_state ? Any.toJSON(message.upgraded_client_state) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryUpgradedClientStateResponse();
        message.upgraded_client_state = object.upgraded_client_state !== undefined && object.upgraded_client_state !== null ? Any.fromPartial(object.upgraded_client_state) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryUpgradedClientStateResponse();
        if (object.upgraded_client_state !== undefined && object.upgraded_client_state !== null) {
            message.upgraded_client_state = Any.fromAmino(object.upgraded_client_state);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.upgraded_client_state = message.upgraded_client_state ? Any.toAmino(message.upgraded_client_state) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryUpgradedClientStateResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryUpgradedClientStateResponse",
            value: QueryUpgradedClientStateResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryUpgradedClientStateResponse.decode(message.value);
    },
    toProto(message) {
        return QueryUpgradedClientStateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.QueryUpgradedClientStateResponse",
            value: QueryUpgradedClientStateResponse.encode(message).finish()
        };
    }
};
function createBaseQueryUpgradedConsensusStateRequest() {
    return {};
}
export const QueryUpgradedConsensusStateRequest = {
    typeUrl: "/ibc.core.client.v1.QueryUpgradedConsensusStateRequest",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryUpgradedConsensusStateRequest();
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
        const message = createBaseQueryUpgradedConsensusStateRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryUpgradedConsensusStateRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryUpgradedConsensusStateRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryUpgradedConsensusStateRequest",
            value: QueryUpgradedConsensusStateRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryUpgradedConsensusStateRequest.decode(message.value);
    },
    toProto(message) {
        return QueryUpgradedConsensusStateRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.QueryUpgradedConsensusStateRequest",
            value: QueryUpgradedConsensusStateRequest.encode(message).finish()
        };
    }
};
function createBaseQueryUpgradedConsensusStateResponse() {
    return {
        upgraded_consensus_state: undefined
    };
}
export const QueryUpgradedConsensusStateResponse = {
    typeUrl: "/ibc.core.client.v1.QueryUpgradedConsensusStateResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.upgraded_consensus_state !== undefined) {
            Any.encode(message.upgraded_consensus_state, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryUpgradedConsensusStateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.upgraded_consensus_state = Any.decode(reader, reader.uint32());
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
            upgraded_consensus_state: isSet(object.upgraded_consensus_state) ? Any.fromJSON(object.upgraded_consensus_state) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.upgraded_consensus_state !== undefined && (obj.upgraded_consensus_state = message.upgraded_consensus_state ? Any.toJSON(message.upgraded_consensus_state) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryUpgradedConsensusStateResponse();
        message.upgraded_consensus_state = object.upgraded_consensus_state !== undefined && object.upgraded_consensus_state !== null ? Any.fromPartial(object.upgraded_consensus_state) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryUpgradedConsensusStateResponse();
        if (object.upgraded_consensus_state !== undefined && object.upgraded_consensus_state !== null) {
            message.upgraded_consensus_state = Any.fromAmino(object.upgraded_consensus_state);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.upgraded_consensus_state = message.upgraded_consensus_state ? Any.toAmino(message.upgraded_consensus_state) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryUpgradedConsensusStateResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryUpgradedConsensusStateResponse",
            value: QueryUpgradedConsensusStateResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryUpgradedConsensusStateResponse.decode(message.value);
    },
    toProto(message) {
        return QueryUpgradedConsensusStateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.QueryUpgradedConsensusStateResponse",
            value: QueryUpgradedConsensusStateResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=query.js.map
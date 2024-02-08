"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryUpgradedConsensusStateResponse = exports.QueryUpgradedConsensusStateRequest = exports.QueryUpgradedClientStateResponse = exports.QueryUpgradedClientStateRequest = exports.QueryClientParamsResponse = exports.QueryClientParamsRequest = exports.QueryClientStatusResponse = exports.QueryClientStatusRequest = exports.QueryConsensusStateHeightsResponse = exports.QueryConsensusStateHeightsRequest = exports.QueryConsensusStatesResponse = exports.QueryConsensusStatesRequest = exports.QueryConsensusStateResponse = exports.QueryConsensusStateRequest = exports.QueryClientStatesResponse = exports.QueryClientStatesRequest = exports.QueryClientStateResponse = exports.QueryClientStateRequest = exports.protobufPackage = void 0;
//@ts-nocheck
const pagination_1 = require("../../../../cosmos/base/query/v1beta1/pagination");
const any_1 = require("../../../../google/protobuf/any");
const client_1 = require("./client");
const binary_1 = require("../../../../binary");
const helpers_1 = require("../../../../helpers");
const registry_1 = require("../../../../registry");
exports.protobufPackage = "ibc.core.client.v1";
function createBaseQueryClientStateRequest() {
    return {
        client_id: ""
    };
}
exports.QueryClientStateRequest = {
    typeUrl: "/ibc.core.client.v1.QueryClientStateRequest",
    aminoType: "cosmos-sdk/QueryClientStateRequest",
    is(o) {
        return o && (o.$typeUrl === exports.QueryClientStateRequest.typeUrl || typeof o.client_id === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryClientStateRequest.typeUrl || typeof o.client_id === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryClientStateRequest.typeUrl || typeof o.client_id === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.client_id !== "") {
            writer.uint32(10).string(message.client_id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
            client_id: (0, helpers_1.isSet)(object.client_id) ? String(object.client_id) : ""
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
        return exports.QueryClientStateRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryClientStateRequest",
            value: exports.QueryClientStateRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryClientStateRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryClientStateRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.QueryClientStateRequest",
            value: exports.QueryClientStateRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryClientStateRequest.typeUrl, exports.QueryClientStateRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryClientStateRequest.aminoType, exports.QueryClientStateRequest.typeUrl);
function createBaseQueryClientStateResponse() {
    return {
        client_state: undefined,
        proof: new Uint8Array(),
        proof_height: client_1.Height.fromPartial({})
    };
}
exports.QueryClientStateResponse = {
    typeUrl: "/ibc.core.client.v1.QueryClientStateResponse",
    aminoType: "cosmos-sdk/QueryClientStateResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryClientStateResponse.typeUrl || (o.proof instanceof Uint8Array || typeof o.proof === "string") && client_1.Height.is(o.proof_height));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryClientStateResponse.typeUrl || (o.proof instanceof Uint8Array || typeof o.proof === "string") && client_1.Height.isSDK(o.proof_height));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryClientStateResponse.typeUrl || (o.proof instanceof Uint8Array || typeof o.proof === "string") && client_1.Height.isAmino(o.proof_height));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.client_state !== undefined) {
            any_1.Any.encode(message.client_state, writer.uint32(10).fork()).ldelim();
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
        const message = createBaseQueryClientStateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.client_state = any_1.Any.decode(reader, reader.uint32());
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
            client_state: (0, helpers_1.isSet)(object.client_state) ? any_1.Any.fromJSON(object.client_state) : undefined,
            proof: (0, helpers_1.isSet)(object.proof) ? (0, helpers_1.bytesFromBase64)(object.proof) : new Uint8Array(),
            proof_height: (0, helpers_1.isSet)(object.proof_height) ? client_1.Height.fromJSON(object.proof_height) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.client_state !== undefined && (obj.client_state = message.client_state ? any_1.Any.toJSON(message.client_state) : undefined);
        message.proof !== undefined && (obj.proof = (0, helpers_1.base64FromBytes)(message.proof !== undefined ? message.proof : new Uint8Array()));
        message.proof_height !== undefined && (obj.proof_height = message.proof_height ? client_1.Height.toJSON(message.proof_height) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryClientStateResponse();
        message.client_state = object.client_state !== undefined && object.client_state !== null ? any_1.Any.fromPartial(object.client_state) : undefined;
        message.proof = object.proof ?? new Uint8Array();
        message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? client_1.Height.fromPartial(object.proof_height) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryClientStateResponse();
        if (object.client_state !== undefined && object.client_state !== null) {
            message.client_state = any_1.Any.fromAmino(object.client_state);
        }
        if (object.proof !== undefined && object.proof !== null) {
            message.proof = (0, helpers_1.bytesFromBase64)(object.proof);
        }
        if (object.proof_height !== undefined && object.proof_height !== null) {
            message.proof_height = client_1.Height.fromAmino(object.proof_height);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.client_state = message.client_state ? any_1.Any.toAmino(message.client_state) : undefined;
        obj.proof = message.proof ? (0, helpers_1.base64FromBytes)(message.proof) : undefined;
        obj.proof_height = message.proof_height ? client_1.Height.toAmino(message.proof_height) : {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryClientStateResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryClientStateResponse",
            value: exports.QueryClientStateResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryClientStateResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryClientStateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.QueryClientStateResponse",
            value: exports.QueryClientStateResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryClientStateResponse.typeUrl, exports.QueryClientStateResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryClientStateResponse.aminoType, exports.QueryClientStateResponse.typeUrl);
function createBaseQueryClientStatesRequest() {
    return {
        pagination: undefined
    };
}
exports.QueryClientStatesRequest = {
    typeUrl: "/ibc.core.client.v1.QueryClientStatesRequest",
    aminoType: "cosmos-sdk/QueryClientStatesRequest",
    is(o) {
        return o && o.$typeUrl === exports.QueryClientStatesRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.QueryClientStatesRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.QueryClientStatesRequest.typeUrl;
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClientStatesRequest();
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
        const message = createBaseQueryClientStatesRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryClientStatesRequest();
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryClientStatesRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryClientStatesRequest",
            value: exports.QueryClientStatesRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryClientStatesRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryClientStatesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.QueryClientStatesRequest",
            value: exports.QueryClientStatesRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryClientStatesRequest.typeUrl, exports.QueryClientStatesRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryClientStatesRequest.aminoType, exports.QueryClientStatesRequest.typeUrl);
function createBaseQueryClientStatesResponse() {
    return {
        client_states: [],
        pagination: undefined
    };
}
exports.QueryClientStatesResponse = {
    typeUrl: "/ibc.core.client.v1.QueryClientStatesResponse",
    aminoType: "cosmos-sdk/QueryClientStatesResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryClientStatesResponse.typeUrl || Array.isArray(o.client_states) && (!o.client_states.length || client_1.IdentifiedClientState.is(o.client_states[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryClientStatesResponse.typeUrl || Array.isArray(o.client_states) && (!o.client_states.length || client_1.IdentifiedClientState.isSDK(o.client_states[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryClientStatesResponse.typeUrl || Array.isArray(o.client_states) && (!o.client_states.length || client_1.IdentifiedClientState.isAmino(o.client_states[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.client_states) {
            client_1.IdentifiedClientState.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClientStatesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.client_states.push(client_1.IdentifiedClientState.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
            client_states: Array.isArray(object?.client_states) ? object.client_states.map((e) => client_1.IdentifiedClientState.fromJSON(e)) : [],
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.client_states) {
            obj.client_states = message.client_states.map(e => e ? client_1.IdentifiedClientState.toJSON(e) : undefined);
        }
        else {
            obj.client_states = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryClientStatesResponse();
        message.client_states = object.client_states?.map(e => client_1.IdentifiedClientState.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryClientStatesResponse();
        message.client_states = object.client_states?.map(e => client_1.IdentifiedClientState.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.client_states) {
            obj.client_states = message.client_states.map(e => e ? client_1.IdentifiedClientState.toAmino(e) : undefined);
        }
        else {
            obj.client_states = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryClientStatesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryClientStatesResponse",
            value: exports.QueryClientStatesResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryClientStatesResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryClientStatesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.QueryClientStatesResponse",
            value: exports.QueryClientStatesResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryClientStatesResponse.typeUrl, exports.QueryClientStatesResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryClientStatesResponse.aminoType, exports.QueryClientStatesResponse.typeUrl);
function createBaseQueryConsensusStateRequest() {
    return {
        client_id: "",
        revision_number: BigInt(0),
        revision_height: BigInt(0),
        latest_height: false
    };
}
exports.QueryConsensusStateRequest = {
    typeUrl: "/ibc.core.client.v1.QueryConsensusStateRequest",
    aminoType: "cosmos-sdk/QueryConsensusStateRequest",
    is(o) {
        return o && (o.$typeUrl === exports.QueryConsensusStateRequest.typeUrl || typeof o.client_id === "string" && typeof o.revision_number === "bigint" && typeof o.revision_height === "bigint" && typeof o.latest_height === "boolean");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryConsensusStateRequest.typeUrl || typeof o.client_id === "string" && typeof o.revision_number === "bigint" && typeof o.revision_height === "bigint" && typeof o.latest_height === "boolean");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryConsensusStateRequest.typeUrl || typeof o.client_id === "string" && typeof o.revision_number === "bigint" && typeof o.revision_height === "bigint" && typeof o.latest_height === "boolean");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
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
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
            client_id: (0, helpers_1.isSet)(object.client_id) ? String(object.client_id) : "",
            revision_number: (0, helpers_1.isSet)(object.revision_number) ? BigInt(object.revision_number.toString()) : BigInt(0),
            revision_height: (0, helpers_1.isSet)(object.revision_height) ? BigInt(object.revision_height.toString()) : BigInt(0),
            latest_height: (0, helpers_1.isSet)(object.latest_height) ? Boolean(object.latest_height) : false
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
        return exports.QueryConsensusStateRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryConsensusStateRequest",
            value: exports.QueryConsensusStateRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryConsensusStateRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryConsensusStateRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.QueryConsensusStateRequest",
            value: exports.QueryConsensusStateRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryConsensusStateRequest.typeUrl, exports.QueryConsensusStateRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryConsensusStateRequest.aminoType, exports.QueryConsensusStateRequest.typeUrl);
function createBaseQueryConsensusStateResponse() {
    return {
        consensus_state: undefined,
        proof: new Uint8Array(),
        proof_height: client_1.Height.fromPartial({})
    };
}
exports.QueryConsensusStateResponse = {
    typeUrl: "/ibc.core.client.v1.QueryConsensusStateResponse",
    aminoType: "cosmos-sdk/QueryConsensusStateResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryConsensusStateResponse.typeUrl || (o.proof instanceof Uint8Array || typeof o.proof === "string") && client_1.Height.is(o.proof_height));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryConsensusStateResponse.typeUrl || (o.proof instanceof Uint8Array || typeof o.proof === "string") && client_1.Height.isSDK(o.proof_height));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryConsensusStateResponse.typeUrl || (o.proof instanceof Uint8Array || typeof o.proof === "string") && client_1.Height.isAmino(o.proof_height));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.consensus_state !== undefined) {
            any_1.Any.encode(message.consensus_state, writer.uint32(10).fork()).ldelim();
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
        const message = createBaseQueryConsensusStateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.consensus_state = any_1.Any.decode(reader, reader.uint32());
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
            consensus_state: (0, helpers_1.isSet)(object.consensus_state) ? any_1.Any.fromJSON(object.consensus_state) : undefined,
            proof: (0, helpers_1.isSet)(object.proof) ? (0, helpers_1.bytesFromBase64)(object.proof) : new Uint8Array(),
            proof_height: (0, helpers_1.isSet)(object.proof_height) ? client_1.Height.fromJSON(object.proof_height) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.consensus_state !== undefined && (obj.consensus_state = message.consensus_state ? any_1.Any.toJSON(message.consensus_state) : undefined);
        message.proof !== undefined && (obj.proof = (0, helpers_1.base64FromBytes)(message.proof !== undefined ? message.proof : new Uint8Array()));
        message.proof_height !== undefined && (obj.proof_height = message.proof_height ? client_1.Height.toJSON(message.proof_height) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryConsensusStateResponse();
        message.consensus_state = object.consensus_state !== undefined && object.consensus_state !== null ? any_1.Any.fromPartial(object.consensus_state) : undefined;
        message.proof = object.proof ?? new Uint8Array();
        message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? client_1.Height.fromPartial(object.proof_height) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryConsensusStateResponse();
        if (object.consensus_state !== undefined && object.consensus_state !== null) {
            message.consensus_state = any_1.Any.fromAmino(object.consensus_state);
        }
        if (object.proof !== undefined && object.proof !== null) {
            message.proof = (0, helpers_1.bytesFromBase64)(object.proof);
        }
        if (object.proof_height !== undefined && object.proof_height !== null) {
            message.proof_height = client_1.Height.fromAmino(object.proof_height);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.consensus_state = message.consensus_state ? any_1.Any.toAmino(message.consensus_state) : undefined;
        obj.proof = message.proof ? (0, helpers_1.base64FromBytes)(message.proof) : undefined;
        obj.proof_height = message.proof_height ? client_1.Height.toAmino(message.proof_height) : {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryConsensusStateResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryConsensusStateResponse",
            value: exports.QueryConsensusStateResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryConsensusStateResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryConsensusStateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.QueryConsensusStateResponse",
            value: exports.QueryConsensusStateResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryConsensusStateResponse.typeUrl, exports.QueryConsensusStateResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryConsensusStateResponse.aminoType, exports.QueryConsensusStateResponse.typeUrl);
function createBaseQueryConsensusStatesRequest() {
    return {
        client_id: "",
        pagination: undefined
    };
}
exports.QueryConsensusStatesRequest = {
    typeUrl: "/ibc.core.client.v1.QueryConsensusStatesRequest",
    aminoType: "cosmos-sdk/QueryConsensusStatesRequest",
    is(o) {
        return o && (o.$typeUrl === exports.QueryConsensusStatesRequest.typeUrl || typeof o.client_id === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryConsensusStatesRequest.typeUrl || typeof o.client_id === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryConsensusStatesRequest.typeUrl || typeof o.client_id === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.client_id !== "") {
            writer.uint32(10).string(message.client_id);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConsensusStatesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.client_id = reader.string();
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
            client_id: (0, helpers_1.isSet)(object.client_id) ? String(object.client_id) : "",
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.client_id !== undefined && (obj.client_id = message.client_id);
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryConsensusStatesRequest();
        message.client_id = object.client_id ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryConsensusStatesRequest();
        if (object.client_id !== undefined && object.client_id !== null) {
            message.client_id = object.client_id;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.client_id = message.client_id;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryConsensusStatesRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryConsensusStatesRequest",
            value: exports.QueryConsensusStatesRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryConsensusStatesRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryConsensusStatesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.QueryConsensusStatesRequest",
            value: exports.QueryConsensusStatesRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryConsensusStatesRequest.typeUrl, exports.QueryConsensusStatesRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryConsensusStatesRequest.aminoType, exports.QueryConsensusStatesRequest.typeUrl);
function createBaseQueryConsensusStatesResponse() {
    return {
        consensus_states: [],
        pagination: undefined
    };
}
exports.QueryConsensusStatesResponse = {
    typeUrl: "/ibc.core.client.v1.QueryConsensusStatesResponse",
    aminoType: "cosmos-sdk/QueryConsensusStatesResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryConsensusStatesResponse.typeUrl || Array.isArray(o.consensus_states) && (!o.consensus_states.length || client_1.ConsensusStateWithHeight.is(o.consensus_states[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryConsensusStatesResponse.typeUrl || Array.isArray(o.consensus_states) && (!o.consensus_states.length || client_1.ConsensusStateWithHeight.isSDK(o.consensus_states[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryConsensusStatesResponse.typeUrl || Array.isArray(o.consensus_states) && (!o.consensus_states.length || client_1.ConsensusStateWithHeight.isAmino(o.consensus_states[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.consensus_states) {
            client_1.ConsensusStateWithHeight.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConsensusStatesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.consensus_states.push(client_1.ConsensusStateWithHeight.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
            consensus_states: Array.isArray(object?.consensus_states) ? object.consensus_states.map((e) => client_1.ConsensusStateWithHeight.fromJSON(e)) : [],
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.consensus_states) {
            obj.consensus_states = message.consensus_states.map(e => e ? client_1.ConsensusStateWithHeight.toJSON(e) : undefined);
        }
        else {
            obj.consensus_states = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryConsensusStatesResponse();
        message.consensus_states = object.consensus_states?.map(e => client_1.ConsensusStateWithHeight.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryConsensusStatesResponse();
        message.consensus_states = object.consensus_states?.map(e => client_1.ConsensusStateWithHeight.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.consensus_states) {
            obj.consensus_states = message.consensus_states.map(e => e ? client_1.ConsensusStateWithHeight.toAmino(e) : undefined);
        }
        else {
            obj.consensus_states = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryConsensusStatesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryConsensusStatesResponse",
            value: exports.QueryConsensusStatesResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryConsensusStatesResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryConsensusStatesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.QueryConsensusStatesResponse",
            value: exports.QueryConsensusStatesResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryConsensusStatesResponse.typeUrl, exports.QueryConsensusStatesResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryConsensusStatesResponse.aminoType, exports.QueryConsensusStatesResponse.typeUrl);
function createBaseQueryConsensusStateHeightsRequest() {
    return {
        client_id: "",
        pagination: undefined
    };
}
exports.QueryConsensusStateHeightsRequest = {
    typeUrl: "/ibc.core.client.v1.QueryConsensusStateHeightsRequest",
    aminoType: "cosmos-sdk/QueryConsensusStateHeightsRequest",
    is(o) {
        return o && (o.$typeUrl === exports.QueryConsensusStateHeightsRequest.typeUrl || typeof o.client_id === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryConsensusStateHeightsRequest.typeUrl || typeof o.client_id === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryConsensusStateHeightsRequest.typeUrl || typeof o.client_id === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.client_id !== "") {
            writer.uint32(10).string(message.client_id);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConsensusStateHeightsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.client_id = reader.string();
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
            client_id: (0, helpers_1.isSet)(object.client_id) ? String(object.client_id) : "",
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.client_id !== undefined && (obj.client_id = message.client_id);
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryConsensusStateHeightsRequest();
        message.client_id = object.client_id ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryConsensusStateHeightsRequest();
        if (object.client_id !== undefined && object.client_id !== null) {
            message.client_id = object.client_id;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.client_id = message.client_id;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryConsensusStateHeightsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryConsensusStateHeightsRequest",
            value: exports.QueryConsensusStateHeightsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryConsensusStateHeightsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryConsensusStateHeightsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.QueryConsensusStateHeightsRequest",
            value: exports.QueryConsensusStateHeightsRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryConsensusStateHeightsRequest.typeUrl, exports.QueryConsensusStateHeightsRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryConsensusStateHeightsRequest.aminoType, exports.QueryConsensusStateHeightsRequest.typeUrl);
function createBaseQueryConsensusStateHeightsResponse() {
    return {
        consensus_state_heights: [],
        pagination: undefined
    };
}
exports.QueryConsensusStateHeightsResponse = {
    typeUrl: "/ibc.core.client.v1.QueryConsensusStateHeightsResponse",
    aminoType: "cosmos-sdk/QueryConsensusStateHeightsResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryConsensusStateHeightsResponse.typeUrl || Array.isArray(o.consensus_state_heights) && (!o.consensus_state_heights.length || client_1.Height.is(o.consensus_state_heights[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryConsensusStateHeightsResponse.typeUrl || Array.isArray(o.consensus_state_heights) && (!o.consensus_state_heights.length || client_1.Height.isSDK(o.consensus_state_heights[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryConsensusStateHeightsResponse.typeUrl || Array.isArray(o.consensus_state_heights) && (!o.consensus_state_heights.length || client_1.Height.isAmino(o.consensus_state_heights[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.consensus_state_heights) {
            client_1.Height.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConsensusStateHeightsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.consensus_state_heights.push(client_1.Height.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
            consensus_state_heights: Array.isArray(object?.consensus_state_heights) ? object.consensus_state_heights.map((e) => client_1.Height.fromJSON(e)) : [],
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.consensus_state_heights) {
            obj.consensus_state_heights = message.consensus_state_heights.map(e => e ? client_1.Height.toJSON(e) : undefined);
        }
        else {
            obj.consensus_state_heights = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryConsensusStateHeightsResponse();
        message.consensus_state_heights = object.consensus_state_heights?.map(e => client_1.Height.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryConsensusStateHeightsResponse();
        message.consensus_state_heights = object.consensus_state_heights?.map(e => client_1.Height.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.consensus_state_heights) {
            obj.consensus_state_heights = message.consensus_state_heights.map(e => e ? client_1.Height.toAmino(e) : undefined);
        }
        else {
            obj.consensus_state_heights = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryConsensusStateHeightsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryConsensusStateHeightsResponse",
            value: exports.QueryConsensusStateHeightsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryConsensusStateHeightsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryConsensusStateHeightsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.QueryConsensusStateHeightsResponse",
            value: exports.QueryConsensusStateHeightsResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryConsensusStateHeightsResponse.typeUrl, exports.QueryConsensusStateHeightsResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryConsensusStateHeightsResponse.aminoType, exports.QueryConsensusStateHeightsResponse.typeUrl);
function createBaseQueryClientStatusRequest() {
    return {
        client_id: ""
    };
}
exports.QueryClientStatusRequest = {
    typeUrl: "/ibc.core.client.v1.QueryClientStatusRequest",
    aminoType: "cosmos-sdk/QueryClientStatusRequest",
    is(o) {
        return o && (o.$typeUrl === exports.QueryClientStatusRequest.typeUrl || typeof o.client_id === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryClientStatusRequest.typeUrl || typeof o.client_id === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryClientStatusRequest.typeUrl || typeof o.client_id === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.client_id !== "") {
            writer.uint32(10).string(message.client_id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
            client_id: (0, helpers_1.isSet)(object.client_id) ? String(object.client_id) : ""
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
        return exports.QueryClientStatusRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryClientStatusRequest",
            value: exports.QueryClientStatusRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryClientStatusRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryClientStatusRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.QueryClientStatusRequest",
            value: exports.QueryClientStatusRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryClientStatusRequest.typeUrl, exports.QueryClientStatusRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryClientStatusRequest.aminoType, exports.QueryClientStatusRequest.typeUrl);
function createBaseQueryClientStatusResponse() {
    return {
        status: ""
    };
}
exports.QueryClientStatusResponse = {
    typeUrl: "/ibc.core.client.v1.QueryClientStatusResponse",
    aminoType: "cosmos-sdk/QueryClientStatusResponse",
    is(o) {
        return o && (o.$typeUrl === exports.QueryClientStatusResponse.typeUrl || typeof o.status === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.QueryClientStatusResponse.typeUrl || typeof o.status === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.QueryClientStatusResponse.typeUrl || typeof o.status === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.status !== "") {
            writer.uint32(10).string(message.status);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
            status: (0, helpers_1.isSet)(object.status) ? String(object.status) : ""
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
        return exports.QueryClientStatusResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryClientStatusResponse",
            value: exports.QueryClientStatusResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryClientStatusResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryClientStatusResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.QueryClientStatusResponse",
            value: exports.QueryClientStatusResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryClientStatusResponse.typeUrl, exports.QueryClientStatusResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryClientStatusResponse.aminoType, exports.QueryClientStatusResponse.typeUrl);
function createBaseQueryClientParamsRequest() {
    return {};
}
exports.QueryClientParamsRequest = {
    typeUrl: "/ibc.core.client.v1.QueryClientParamsRequest",
    aminoType: "cosmos-sdk/QueryClientParamsRequest",
    is(o) {
        return o && o.$typeUrl === exports.QueryClientParamsRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.QueryClientParamsRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.QueryClientParamsRequest.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.QueryClientParamsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryClientParamsRequest",
            value: exports.QueryClientParamsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryClientParamsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryClientParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.QueryClientParamsRequest",
            value: exports.QueryClientParamsRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryClientParamsRequest.typeUrl, exports.QueryClientParamsRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryClientParamsRequest.aminoType, exports.QueryClientParamsRequest.typeUrl);
function createBaseQueryClientParamsResponse() {
    return {
        params: undefined
    };
}
exports.QueryClientParamsResponse = {
    typeUrl: "/ibc.core.client.v1.QueryClientParamsResponse",
    aminoType: "cosmos-sdk/QueryClientParamsResponse",
    is(o) {
        return o && o.$typeUrl === exports.QueryClientParamsResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.QueryClientParamsResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.QueryClientParamsResponse.typeUrl;
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            client_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClientParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = client_1.Params.decode(reader, reader.uint32());
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
            params: (0, helpers_1.isSet)(object.params) ? client_1.Params.fromJSON(object.params) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? client_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryClientParamsResponse();
        message.params = object.params !== undefined && object.params !== null ? client_1.Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryClientParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = client_1.Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? client_1.Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryClientParamsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryClientParamsResponse",
            value: exports.QueryClientParamsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryClientParamsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryClientParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.QueryClientParamsResponse",
            value: exports.QueryClientParamsResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryClientParamsResponse.typeUrl, exports.QueryClientParamsResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryClientParamsResponse.aminoType, exports.QueryClientParamsResponse.typeUrl);
function createBaseQueryUpgradedClientStateRequest() {
    return {};
}
exports.QueryUpgradedClientStateRequest = {
    typeUrl: "/ibc.core.client.v1.QueryUpgradedClientStateRequest",
    aminoType: "cosmos-sdk/QueryUpgradedClientStateRequest",
    is(o) {
        return o && o.$typeUrl === exports.QueryUpgradedClientStateRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.QueryUpgradedClientStateRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.QueryUpgradedClientStateRequest.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.QueryUpgradedClientStateRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryUpgradedClientStateRequest",
            value: exports.QueryUpgradedClientStateRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryUpgradedClientStateRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryUpgradedClientStateRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.QueryUpgradedClientStateRequest",
            value: exports.QueryUpgradedClientStateRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryUpgradedClientStateRequest.typeUrl, exports.QueryUpgradedClientStateRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryUpgradedClientStateRequest.aminoType, exports.QueryUpgradedClientStateRequest.typeUrl);
function createBaseQueryUpgradedClientStateResponse() {
    return {
        upgraded_client_state: undefined
    };
}
exports.QueryUpgradedClientStateResponse = {
    typeUrl: "/ibc.core.client.v1.QueryUpgradedClientStateResponse",
    aminoType: "cosmos-sdk/QueryUpgradedClientStateResponse",
    is(o) {
        return o && o.$typeUrl === exports.QueryUpgradedClientStateResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.QueryUpgradedClientStateResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.QueryUpgradedClientStateResponse.typeUrl;
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.upgraded_client_state !== undefined) {
            any_1.Any.encode(message.upgraded_client_state, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryUpgradedClientStateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.upgraded_client_state = any_1.Any.decode(reader, reader.uint32());
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
            upgraded_client_state: (0, helpers_1.isSet)(object.upgraded_client_state) ? any_1.Any.fromJSON(object.upgraded_client_state) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.upgraded_client_state !== undefined && (obj.upgraded_client_state = message.upgraded_client_state ? any_1.Any.toJSON(message.upgraded_client_state) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryUpgradedClientStateResponse();
        message.upgraded_client_state = object.upgraded_client_state !== undefined && object.upgraded_client_state !== null ? any_1.Any.fromPartial(object.upgraded_client_state) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryUpgradedClientStateResponse();
        if (object.upgraded_client_state !== undefined && object.upgraded_client_state !== null) {
            message.upgraded_client_state = any_1.Any.fromAmino(object.upgraded_client_state);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.upgraded_client_state = message.upgraded_client_state ? any_1.Any.toAmino(message.upgraded_client_state) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryUpgradedClientStateResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryUpgradedClientStateResponse",
            value: exports.QueryUpgradedClientStateResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryUpgradedClientStateResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryUpgradedClientStateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.QueryUpgradedClientStateResponse",
            value: exports.QueryUpgradedClientStateResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryUpgradedClientStateResponse.typeUrl, exports.QueryUpgradedClientStateResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryUpgradedClientStateResponse.aminoType, exports.QueryUpgradedClientStateResponse.typeUrl);
function createBaseQueryUpgradedConsensusStateRequest() {
    return {};
}
exports.QueryUpgradedConsensusStateRequest = {
    typeUrl: "/ibc.core.client.v1.QueryUpgradedConsensusStateRequest",
    aminoType: "cosmos-sdk/QueryUpgradedConsensusStateRequest",
    is(o) {
        return o && o.$typeUrl === exports.QueryUpgradedConsensusStateRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.QueryUpgradedConsensusStateRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.QueryUpgradedConsensusStateRequest.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.QueryUpgradedConsensusStateRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryUpgradedConsensusStateRequest",
            value: exports.QueryUpgradedConsensusStateRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryUpgradedConsensusStateRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryUpgradedConsensusStateRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.QueryUpgradedConsensusStateRequest",
            value: exports.QueryUpgradedConsensusStateRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryUpgradedConsensusStateRequest.typeUrl, exports.QueryUpgradedConsensusStateRequest);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryUpgradedConsensusStateRequest.aminoType, exports.QueryUpgradedConsensusStateRequest.typeUrl);
function createBaseQueryUpgradedConsensusStateResponse() {
    return {
        upgraded_consensus_state: undefined
    };
}
exports.QueryUpgradedConsensusStateResponse = {
    typeUrl: "/ibc.core.client.v1.QueryUpgradedConsensusStateResponse",
    aminoType: "cosmos-sdk/QueryUpgradedConsensusStateResponse",
    is(o) {
        return o && o.$typeUrl === exports.QueryUpgradedConsensusStateResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.QueryUpgradedConsensusStateResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.QueryUpgradedConsensusStateResponse.typeUrl;
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.upgraded_consensus_state !== undefined) {
            any_1.Any.encode(message.upgraded_consensus_state, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryUpgradedConsensusStateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.upgraded_consensus_state = any_1.Any.decode(reader, reader.uint32());
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
            upgraded_consensus_state: (0, helpers_1.isSet)(object.upgraded_consensus_state) ? any_1.Any.fromJSON(object.upgraded_consensus_state) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.upgraded_consensus_state !== undefined && (obj.upgraded_consensus_state = message.upgraded_consensus_state ? any_1.Any.toJSON(message.upgraded_consensus_state) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryUpgradedConsensusStateResponse();
        message.upgraded_consensus_state = object.upgraded_consensus_state !== undefined && object.upgraded_consensus_state !== null ? any_1.Any.fromPartial(object.upgraded_consensus_state) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryUpgradedConsensusStateResponse();
        if (object.upgraded_consensus_state !== undefined && object.upgraded_consensus_state !== null) {
            message.upgraded_consensus_state = any_1.Any.fromAmino(object.upgraded_consensus_state);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.upgraded_consensus_state = message.upgraded_consensus_state ? any_1.Any.toAmino(message.upgraded_consensus_state) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryUpgradedConsensusStateResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryUpgradedConsensusStateResponse",
            value: exports.QueryUpgradedConsensusStateResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryUpgradedConsensusStateResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryUpgradedConsensusStateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.QueryUpgradedConsensusStateResponse",
            value: exports.QueryUpgradedConsensusStateResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.QueryUpgradedConsensusStateResponse.typeUrl, exports.QueryUpgradedConsensusStateResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.QueryUpgradedConsensusStateResponse.aminoType, exports.QueryUpgradedConsensusStateResponse.typeUrl);
//# sourceMappingURL=query.js.map
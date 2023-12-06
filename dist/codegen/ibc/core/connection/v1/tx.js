"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgUpdateParamsResponse = exports.MsgUpdateParams = exports.MsgConnectionOpenConfirmResponse = exports.MsgConnectionOpenConfirm = exports.MsgConnectionOpenAckResponse = exports.MsgConnectionOpenAck = exports.MsgConnectionOpenTryResponse = exports.MsgConnectionOpenTry = exports.MsgConnectionOpenInitResponse = exports.MsgConnectionOpenInit = exports.protobufPackage = void 0;
//@ts-nocheck
const connection_1 = require("./connection");
const any_1 = require("../../../../google/protobuf/any");
const client_1 = require("../../client/v1/client");
const binary_1 = require("../../../../binary");
const helpers_1 = require("../../../../helpers");
exports.protobufPackage = "ibc.core.connection.v1";
function createBaseMsgConnectionOpenInit() {
    return {
        client_id: "",
        counterparty: connection_1.Counterparty.fromPartial({}),
        version: undefined,
        delay_period: BigInt(0),
        signer: ""
    };
}
exports.MsgConnectionOpenInit = {
    typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenInit",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.client_id !== "") {
            writer.uint32(10).string(message.client_id);
        }
        if (message.counterparty !== undefined) {
            connection_1.Counterparty.encode(message.counterparty, writer.uint32(18).fork()).ldelim();
        }
        if (message.version !== undefined) {
            connection_1.Version.encode(message.version, writer.uint32(26).fork()).ldelim();
        }
        if (message.delay_period !== BigInt(0)) {
            writer.uint32(32).uint64(message.delay_period);
        }
        if (message.signer !== "") {
            writer.uint32(42).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgConnectionOpenInit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.client_id = reader.string();
                    break;
                case 2:
                    message.counterparty = connection_1.Counterparty.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.version = connection_1.Version.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.delay_period = reader.uint64();
                    break;
                case 5:
                    message.signer = reader.string();
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
            counterparty: (0, helpers_1.isSet)(object.counterparty) ? connection_1.Counterparty.fromJSON(object.counterparty) : undefined,
            version: (0, helpers_1.isSet)(object.version) ? connection_1.Version.fromJSON(object.version) : undefined,
            delay_period: (0, helpers_1.isSet)(object.delay_period) ? BigInt(object.delay_period.toString()) : BigInt(0),
            signer: (0, helpers_1.isSet)(object.signer) ? String(object.signer) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.client_id !== undefined && (obj.client_id = message.client_id);
        message.counterparty !== undefined && (obj.counterparty = message.counterparty ? connection_1.Counterparty.toJSON(message.counterparty) : undefined);
        message.version !== undefined && (obj.version = message.version ? connection_1.Version.toJSON(message.version) : undefined);
        message.delay_period !== undefined && (obj.delay_period = (message.delay_period || BigInt(0)).toString());
        message.signer !== undefined && (obj.signer = message.signer);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgConnectionOpenInit();
        message.client_id = object.client_id ?? "";
        message.counterparty = object.counterparty !== undefined && object.counterparty !== null ? connection_1.Counterparty.fromPartial(object.counterparty) : undefined;
        message.version = object.version !== undefined && object.version !== null ? connection_1.Version.fromPartial(object.version) : undefined;
        message.delay_period = object.delay_period !== undefined && object.delay_period !== null ? BigInt(object.delay_period.toString()) : BigInt(0);
        message.signer = object.signer ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            client_id: object.client_id,
            counterparty: object?.counterparty ? connection_1.Counterparty.fromAmino(object.counterparty) : undefined,
            version: object?.version ? connection_1.Version.fromAmino(object.version) : undefined,
            delay_period: BigInt(object.delay_period),
            signer: object.signer
        };
    },
    toAmino(message) {
        const obj = {};
        obj.client_id = message.client_id;
        obj.counterparty = message.counterparty ? connection_1.Counterparty.toAmino(message.counterparty) : undefined;
        obj.version = message.version ? connection_1.Version.toAmino(message.version) : undefined;
        obj.delay_period = message.delay_period ? message.delay_period.toString() : undefined;
        obj.signer = message.signer;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgConnectionOpenInit.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgConnectionOpenInit",
            value: exports.MsgConnectionOpenInit.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgConnectionOpenInit.decode(message.value);
    },
    toProto(message) {
        return exports.MsgConnectionOpenInit.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenInit",
            value: exports.MsgConnectionOpenInit.encode(message).finish()
        };
    }
};
function createBaseMsgConnectionOpenInitResponse() {
    return {};
}
exports.MsgConnectionOpenInitResponse = {
    typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenInitResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgConnectionOpenInitResponse();
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
        const message = createBaseMsgConnectionOpenInitResponse();
        return message;
    },
    fromAmino(_) {
        return {};
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgConnectionOpenInitResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgConnectionOpenInitResponse",
            value: exports.MsgConnectionOpenInitResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgConnectionOpenInitResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgConnectionOpenInitResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenInitResponse",
            value: exports.MsgConnectionOpenInitResponse.encode(message).finish()
        };
    }
};
function createBaseMsgConnectionOpenTry() {
    return {
        client_id: "",
        previous_connection_id: "",
        client_state: undefined,
        counterparty: connection_1.Counterparty.fromPartial({}),
        delay_period: BigInt(0),
        counterparty_versions: [],
        proof_height: client_1.Height.fromPartial({}),
        proof_init: new Uint8Array(),
        proof_client: new Uint8Array(),
        proof_consensus: new Uint8Array(),
        consensus_height: client_1.Height.fromPartial({}),
        signer: "",
        host_consensus_state_proof: new Uint8Array()
    };
}
exports.MsgConnectionOpenTry = {
    typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenTry",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.client_id !== "") {
            writer.uint32(10).string(message.client_id);
        }
        if (message.previous_connection_id !== "") {
            writer.uint32(18).string(message.previous_connection_id);
        }
        if (message.client_state !== undefined) {
            any_1.Any.encode(message.client_state, writer.uint32(26).fork()).ldelim();
        }
        if (message.counterparty !== undefined) {
            connection_1.Counterparty.encode(message.counterparty, writer.uint32(34).fork()).ldelim();
        }
        if (message.delay_period !== BigInt(0)) {
            writer.uint32(40).uint64(message.delay_period);
        }
        for (const v of message.counterparty_versions) {
            connection_1.Version.encode(v, writer.uint32(50).fork()).ldelim();
        }
        if (message.proof_height !== undefined) {
            client_1.Height.encode(message.proof_height, writer.uint32(58).fork()).ldelim();
        }
        if (message.proof_init.length !== 0) {
            writer.uint32(66).bytes(message.proof_init);
        }
        if (message.proof_client.length !== 0) {
            writer.uint32(74).bytes(message.proof_client);
        }
        if (message.proof_consensus.length !== 0) {
            writer.uint32(82).bytes(message.proof_consensus);
        }
        if (message.consensus_height !== undefined) {
            client_1.Height.encode(message.consensus_height, writer.uint32(90).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(98).string(message.signer);
        }
        if (message.host_consensus_state_proof.length !== 0) {
            writer.uint32(106).bytes(message.host_consensus_state_proof);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgConnectionOpenTry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.client_id = reader.string();
                    break;
                case 2:
                    message.previous_connection_id = reader.string();
                    break;
                case 3:
                    message.client_state = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.counterparty = connection_1.Counterparty.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.delay_period = reader.uint64();
                    break;
                case 6:
                    message.counterparty_versions.push(connection_1.Version.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.proof_height = client_1.Height.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.proof_init = reader.bytes();
                    break;
                case 9:
                    message.proof_client = reader.bytes();
                    break;
                case 10:
                    message.proof_consensus = reader.bytes();
                    break;
                case 11:
                    message.consensus_height = client_1.Height.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.signer = reader.string();
                    break;
                case 13:
                    message.host_consensus_state_proof = reader.bytes();
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
            previous_connection_id: (0, helpers_1.isSet)(object.previous_connection_id) ? String(object.previous_connection_id) : "",
            client_state: (0, helpers_1.isSet)(object.client_state) ? any_1.Any.fromJSON(object.client_state) : undefined,
            counterparty: (0, helpers_1.isSet)(object.counterparty) ? connection_1.Counterparty.fromJSON(object.counterparty) : undefined,
            delay_period: (0, helpers_1.isSet)(object.delay_period) ? BigInt(object.delay_period.toString()) : BigInt(0),
            counterparty_versions: Array.isArray(object?.counterparty_versions) ? object.counterparty_versions.map((e) => connection_1.Version.fromJSON(e)) : [],
            proof_height: (0, helpers_1.isSet)(object.proof_height) ? client_1.Height.fromJSON(object.proof_height) : undefined,
            proof_init: (0, helpers_1.isSet)(object.proof_init) ? (0, helpers_1.bytesFromBase64)(object.proof_init) : new Uint8Array(),
            proof_client: (0, helpers_1.isSet)(object.proof_client) ? (0, helpers_1.bytesFromBase64)(object.proof_client) : new Uint8Array(),
            proof_consensus: (0, helpers_1.isSet)(object.proof_consensus) ? (0, helpers_1.bytesFromBase64)(object.proof_consensus) : new Uint8Array(),
            consensus_height: (0, helpers_1.isSet)(object.consensus_height) ? client_1.Height.fromJSON(object.consensus_height) : undefined,
            signer: (0, helpers_1.isSet)(object.signer) ? String(object.signer) : "",
            host_consensus_state_proof: (0, helpers_1.isSet)(object.host_consensus_state_proof) ? (0, helpers_1.bytesFromBase64)(object.host_consensus_state_proof) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.client_id !== undefined && (obj.client_id = message.client_id);
        message.previous_connection_id !== undefined && (obj.previous_connection_id = message.previous_connection_id);
        message.client_state !== undefined && (obj.client_state = message.client_state ? any_1.Any.toJSON(message.client_state) : undefined);
        message.counterparty !== undefined && (obj.counterparty = message.counterparty ? connection_1.Counterparty.toJSON(message.counterparty) : undefined);
        message.delay_period !== undefined && (obj.delay_period = (message.delay_period || BigInt(0)).toString());
        if (message.counterparty_versions) {
            obj.counterparty_versions = message.counterparty_versions.map(e => e ? connection_1.Version.toJSON(e) : undefined);
        }
        else {
            obj.counterparty_versions = [];
        }
        message.proof_height !== undefined && (obj.proof_height = message.proof_height ? client_1.Height.toJSON(message.proof_height) : undefined);
        message.proof_init !== undefined && (obj.proof_init = (0, helpers_1.base64FromBytes)(message.proof_init !== undefined ? message.proof_init : new Uint8Array()));
        message.proof_client !== undefined && (obj.proof_client = (0, helpers_1.base64FromBytes)(message.proof_client !== undefined ? message.proof_client : new Uint8Array()));
        message.proof_consensus !== undefined && (obj.proof_consensus = (0, helpers_1.base64FromBytes)(message.proof_consensus !== undefined ? message.proof_consensus : new Uint8Array()));
        message.consensus_height !== undefined && (obj.consensus_height = message.consensus_height ? client_1.Height.toJSON(message.consensus_height) : undefined);
        message.signer !== undefined && (obj.signer = message.signer);
        message.host_consensus_state_proof !== undefined && (obj.host_consensus_state_proof = (0, helpers_1.base64FromBytes)(message.host_consensus_state_proof !== undefined ? message.host_consensus_state_proof : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgConnectionOpenTry();
        message.client_id = object.client_id ?? "";
        message.previous_connection_id = object.previous_connection_id ?? "";
        message.client_state = object.client_state !== undefined && object.client_state !== null ? any_1.Any.fromPartial(object.client_state) : undefined;
        message.counterparty = object.counterparty !== undefined && object.counterparty !== null ? connection_1.Counterparty.fromPartial(object.counterparty) : undefined;
        message.delay_period = object.delay_period !== undefined && object.delay_period !== null ? BigInt(object.delay_period.toString()) : BigInt(0);
        message.counterparty_versions = object.counterparty_versions?.map(e => connection_1.Version.fromPartial(e)) || [];
        message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? client_1.Height.fromPartial(object.proof_height) : undefined;
        message.proof_init = object.proof_init ?? new Uint8Array();
        message.proof_client = object.proof_client ?? new Uint8Array();
        message.proof_consensus = object.proof_consensus ?? new Uint8Array();
        message.consensus_height = object.consensus_height !== undefined && object.consensus_height !== null ? client_1.Height.fromPartial(object.consensus_height) : undefined;
        message.signer = object.signer ?? "";
        message.host_consensus_state_proof = object.host_consensus_state_proof ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        return {
            client_id: object.client_id,
            previous_connection_id: object.previous_connection_id,
            client_state: object?.client_state ? any_1.Any.fromAmino(object.client_state) : undefined,
            counterparty: object?.counterparty ? connection_1.Counterparty.fromAmino(object.counterparty) : undefined,
            delay_period: BigInt(object.delay_period),
            counterparty_versions: Array.isArray(object?.counterparty_versions) ? object.counterparty_versions.map((e) => connection_1.Version.fromAmino(e)) : [],
            proof_height: object?.proof_height ? client_1.Height.fromAmino(object.proof_height) : undefined,
            proof_init: object.proof_init,
            proof_client: object.proof_client,
            proof_consensus: object.proof_consensus,
            consensus_height: object?.consensus_height ? client_1.Height.fromAmino(object.consensus_height) : undefined,
            signer: object.signer,
            host_consensus_state_proof: object.host_consensus_state_proof
        };
    },
    toAmino(message) {
        const obj = {};
        obj.client_id = message.client_id;
        obj.previous_connection_id = message.previous_connection_id;
        obj.client_state = message.client_state ? any_1.Any.toAmino(message.client_state) : undefined;
        obj.counterparty = message.counterparty ? connection_1.Counterparty.toAmino(message.counterparty) : undefined;
        obj.delay_period = message.delay_period ? message.delay_period.toString() : undefined;
        if (message.counterparty_versions) {
            obj.counterparty_versions = message.counterparty_versions.map(e => e ? connection_1.Version.toAmino(e) : undefined);
        }
        else {
            obj.counterparty_versions = [];
        }
        obj.proof_height = message.proof_height ? client_1.Height.toAmino(message.proof_height) : {};
        obj.proof_init = message.proof_init;
        obj.proof_client = message.proof_client;
        obj.proof_consensus = message.proof_consensus;
        obj.consensus_height = message.consensus_height ? client_1.Height.toAmino(message.consensus_height) : {};
        obj.signer = message.signer;
        obj.host_consensus_state_proof = message.host_consensus_state_proof;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgConnectionOpenTry.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgConnectionOpenTry",
            value: exports.MsgConnectionOpenTry.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgConnectionOpenTry.decode(message.value);
    },
    toProto(message) {
        return exports.MsgConnectionOpenTry.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenTry",
            value: exports.MsgConnectionOpenTry.encode(message).finish()
        };
    }
};
function createBaseMsgConnectionOpenTryResponse() {
    return {};
}
exports.MsgConnectionOpenTryResponse = {
    typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenTryResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgConnectionOpenTryResponse();
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
        const message = createBaseMsgConnectionOpenTryResponse();
        return message;
    },
    fromAmino(_) {
        return {};
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgConnectionOpenTryResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgConnectionOpenTryResponse",
            value: exports.MsgConnectionOpenTryResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgConnectionOpenTryResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgConnectionOpenTryResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenTryResponse",
            value: exports.MsgConnectionOpenTryResponse.encode(message).finish()
        };
    }
};
function createBaseMsgConnectionOpenAck() {
    return {
        connection_id: "",
        counterparty_connection_id: "",
        version: undefined,
        client_state: undefined,
        proof_height: client_1.Height.fromPartial({}),
        proof_try: new Uint8Array(),
        proof_client: new Uint8Array(),
        proof_consensus: new Uint8Array(),
        consensus_height: client_1.Height.fromPartial({}),
        signer: "",
        host_consensus_state_proof: new Uint8Array()
    };
}
exports.MsgConnectionOpenAck = {
    typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenAck",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.connection_id !== "") {
            writer.uint32(10).string(message.connection_id);
        }
        if (message.counterparty_connection_id !== "") {
            writer.uint32(18).string(message.counterparty_connection_id);
        }
        if (message.version !== undefined) {
            connection_1.Version.encode(message.version, writer.uint32(26).fork()).ldelim();
        }
        if (message.client_state !== undefined) {
            any_1.Any.encode(message.client_state, writer.uint32(34).fork()).ldelim();
        }
        if (message.proof_height !== undefined) {
            client_1.Height.encode(message.proof_height, writer.uint32(42).fork()).ldelim();
        }
        if (message.proof_try.length !== 0) {
            writer.uint32(50).bytes(message.proof_try);
        }
        if (message.proof_client.length !== 0) {
            writer.uint32(58).bytes(message.proof_client);
        }
        if (message.proof_consensus.length !== 0) {
            writer.uint32(66).bytes(message.proof_consensus);
        }
        if (message.consensus_height !== undefined) {
            client_1.Height.encode(message.consensus_height, writer.uint32(74).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(82).string(message.signer);
        }
        if (message.host_consensus_state_proof.length !== 0) {
            writer.uint32(90).bytes(message.host_consensus_state_proof);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgConnectionOpenAck();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connection_id = reader.string();
                    break;
                case 2:
                    message.counterparty_connection_id = reader.string();
                    break;
                case 3:
                    message.version = connection_1.Version.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.client_state = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.proof_height = client_1.Height.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.proof_try = reader.bytes();
                    break;
                case 7:
                    message.proof_client = reader.bytes();
                    break;
                case 8:
                    message.proof_consensus = reader.bytes();
                    break;
                case 9:
                    message.consensus_height = client_1.Height.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.signer = reader.string();
                    break;
                case 11:
                    message.host_consensus_state_proof = reader.bytes();
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
            connection_id: (0, helpers_1.isSet)(object.connection_id) ? String(object.connection_id) : "",
            counterparty_connection_id: (0, helpers_1.isSet)(object.counterparty_connection_id) ? String(object.counterparty_connection_id) : "",
            version: (0, helpers_1.isSet)(object.version) ? connection_1.Version.fromJSON(object.version) : undefined,
            client_state: (0, helpers_1.isSet)(object.client_state) ? any_1.Any.fromJSON(object.client_state) : undefined,
            proof_height: (0, helpers_1.isSet)(object.proof_height) ? client_1.Height.fromJSON(object.proof_height) : undefined,
            proof_try: (0, helpers_1.isSet)(object.proof_try) ? (0, helpers_1.bytesFromBase64)(object.proof_try) : new Uint8Array(),
            proof_client: (0, helpers_1.isSet)(object.proof_client) ? (0, helpers_1.bytesFromBase64)(object.proof_client) : new Uint8Array(),
            proof_consensus: (0, helpers_1.isSet)(object.proof_consensus) ? (0, helpers_1.bytesFromBase64)(object.proof_consensus) : new Uint8Array(),
            consensus_height: (0, helpers_1.isSet)(object.consensus_height) ? client_1.Height.fromJSON(object.consensus_height) : undefined,
            signer: (0, helpers_1.isSet)(object.signer) ? String(object.signer) : "",
            host_consensus_state_proof: (0, helpers_1.isSet)(object.host_consensus_state_proof) ? (0, helpers_1.bytesFromBase64)(object.host_consensus_state_proof) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.connection_id !== undefined && (obj.connection_id = message.connection_id);
        message.counterparty_connection_id !== undefined && (obj.counterparty_connection_id = message.counterparty_connection_id);
        message.version !== undefined && (obj.version = message.version ? connection_1.Version.toJSON(message.version) : undefined);
        message.client_state !== undefined && (obj.client_state = message.client_state ? any_1.Any.toJSON(message.client_state) : undefined);
        message.proof_height !== undefined && (obj.proof_height = message.proof_height ? client_1.Height.toJSON(message.proof_height) : undefined);
        message.proof_try !== undefined && (obj.proof_try = (0, helpers_1.base64FromBytes)(message.proof_try !== undefined ? message.proof_try : new Uint8Array()));
        message.proof_client !== undefined && (obj.proof_client = (0, helpers_1.base64FromBytes)(message.proof_client !== undefined ? message.proof_client : new Uint8Array()));
        message.proof_consensus !== undefined && (obj.proof_consensus = (0, helpers_1.base64FromBytes)(message.proof_consensus !== undefined ? message.proof_consensus : new Uint8Array()));
        message.consensus_height !== undefined && (obj.consensus_height = message.consensus_height ? client_1.Height.toJSON(message.consensus_height) : undefined);
        message.signer !== undefined && (obj.signer = message.signer);
        message.host_consensus_state_proof !== undefined && (obj.host_consensus_state_proof = (0, helpers_1.base64FromBytes)(message.host_consensus_state_proof !== undefined ? message.host_consensus_state_proof : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgConnectionOpenAck();
        message.connection_id = object.connection_id ?? "";
        message.counterparty_connection_id = object.counterparty_connection_id ?? "";
        message.version = object.version !== undefined && object.version !== null ? connection_1.Version.fromPartial(object.version) : undefined;
        message.client_state = object.client_state !== undefined && object.client_state !== null ? any_1.Any.fromPartial(object.client_state) : undefined;
        message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? client_1.Height.fromPartial(object.proof_height) : undefined;
        message.proof_try = object.proof_try ?? new Uint8Array();
        message.proof_client = object.proof_client ?? new Uint8Array();
        message.proof_consensus = object.proof_consensus ?? new Uint8Array();
        message.consensus_height = object.consensus_height !== undefined && object.consensus_height !== null ? client_1.Height.fromPartial(object.consensus_height) : undefined;
        message.signer = object.signer ?? "";
        message.host_consensus_state_proof = object.host_consensus_state_proof ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        return {
            connection_id: object.connection_id,
            counterparty_connection_id: object.counterparty_connection_id,
            version: object?.version ? connection_1.Version.fromAmino(object.version) : undefined,
            client_state: object?.client_state ? any_1.Any.fromAmino(object.client_state) : undefined,
            proof_height: object?.proof_height ? client_1.Height.fromAmino(object.proof_height) : undefined,
            proof_try: object.proof_try,
            proof_client: object.proof_client,
            proof_consensus: object.proof_consensus,
            consensus_height: object?.consensus_height ? client_1.Height.fromAmino(object.consensus_height) : undefined,
            signer: object.signer,
            host_consensus_state_proof: object.host_consensus_state_proof
        };
    },
    toAmino(message) {
        const obj = {};
        obj.connection_id = message.connection_id;
        obj.counterparty_connection_id = message.counterparty_connection_id;
        obj.version = message.version ? connection_1.Version.toAmino(message.version) : undefined;
        obj.client_state = message.client_state ? any_1.Any.toAmino(message.client_state) : undefined;
        obj.proof_height = message.proof_height ? client_1.Height.toAmino(message.proof_height) : {};
        obj.proof_try = message.proof_try;
        obj.proof_client = message.proof_client;
        obj.proof_consensus = message.proof_consensus;
        obj.consensus_height = message.consensus_height ? client_1.Height.toAmino(message.consensus_height) : {};
        obj.signer = message.signer;
        obj.host_consensus_state_proof = message.host_consensus_state_proof;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgConnectionOpenAck.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgConnectionOpenAck",
            value: exports.MsgConnectionOpenAck.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgConnectionOpenAck.decode(message.value);
    },
    toProto(message) {
        return exports.MsgConnectionOpenAck.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenAck",
            value: exports.MsgConnectionOpenAck.encode(message).finish()
        };
    }
};
function createBaseMsgConnectionOpenAckResponse() {
    return {};
}
exports.MsgConnectionOpenAckResponse = {
    typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenAckResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgConnectionOpenAckResponse();
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
        const message = createBaseMsgConnectionOpenAckResponse();
        return message;
    },
    fromAmino(_) {
        return {};
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgConnectionOpenAckResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgConnectionOpenAckResponse",
            value: exports.MsgConnectionOpenAckResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgConnectionOpenAckResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgConnectionOpenAckResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenAckResponse",
            value: exports.MsgConnectionOpenAckResponse.encode(message).finish()
        };
    }
};
function createBaseMsgConnectionOpenConfirm() {
    return {
        connection_id: "",
        proof_ack: new Uint8Array(),
        proof_height: client_1.Height.fromPartial({}),
        signer: ""
    };
}
exports.MsgConnectionOpenConfirm = {
    typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenConfirm",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.connection_id !== "") {
            writer.uint32(10).string(message.connection_id);
        }
        if (message.proof_ack.length !== 0) {
            writer.uint32(18).bytes(message.proof_ack);
        }
        if (message.proof_height !== undefined) {
            client_1.Height.encode(message.proof_height, writer.uint32(26).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(34).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgConnectionOpenConfirm();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connection_id = reader.string();
                    break;
                case 2:
                    message.proof_ack = reader.bytes();
                    break;
                case 3:
                    message.proof_height = client_1.Height.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.signer = reader.string();
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
            connection_id: (0, helpers_1.isSet)(object.connection_id) ? String(object.connection_id) : "",
            proof_ack: (0, helpers_1.isSet)(object.proof_ack) ? (0, helpers_1.bytesFromBase64)(object.proof_ack) : new Uint8Array(),
            proof_height: (0, helpers_1.isSet)(object.proof_height) ? client_1.Height.fromJSON(object.proof_height) : undefined,
            signer: (0, helpers_1.isSet)(object.signer) ? String(object.signer) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.connection_id !== undefined && (obj.connection_id = message.connection_id);
        message.proof_ack !== undefined && (obj.proof_ack = (0, helpers_1.base64FromBytes)(message.proof_ack !== undefined ? message.proof_ack : new Uint8Array()));
        message.proof_height !== undefined && (obj.proof_height = message.proof_height ? client_1.Height.toJSON(message.proof_height) : undefined);
        message.signer !== undefined && (obj.signer = message.signer);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgConnectionOpenConfirm();
        message.connection_id = object.connection_id ?? "";
        message.proof_ack = object.proof_ack ?? new Uint8Array();
        message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? client_1.Height.fromPartial(object.proof_height) : undefined;
        message.signer = object.signer ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            connection_id: object.connection_id,
            proof_ack: object.proof_ack,
            proof_height: object?.proof_height ? client_1.Height.fromAmino(object.proof_height) : undefined,
            signer: object.signer
        };
    },
    toAmino(message) {
        const obj = {};
        obj.connection_id = message.connection_id;
        obj.proof_ack = message.proof_ack;
        obj.proof_height = message.proof_height ? client_1.Height.toAmino(message.proof_height) : {};
        obj.signer = message.signer;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgConnectionOpenConfirm.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgConnectionOpenConfirm",
            value: exports.MsgConnectionOpenConfirm.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgConnectionOpenConfirm.decode(message.value);
    },
    toProto(message) {
        return exports.MsgConnectionOpenConfirm.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenConfirm",
            value: exports.MsgConnectionOpenConfirm.encode(message).finish()
        };
    }
};
function createBaseMsgConnectionOpenConfirmResponse() {
    return {};
}
exports.MsgConnectionOpenConfirmResponse = {
    typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenConfirmResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgConnectionOpenConfirmResponse();
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
        const message = createBaseMsgConnectionOpenConfirmResponse();
        return message;
    },
    fromAmino(_) {
        return {};
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgConnectionOpenConfirmResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgConnectionOpenConfirmResponse",
            value: exports.MsgConnectionOpenConfirmResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgConnectionOpenConfirmResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgConnectionOpenConfirmResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenConfirmResponse",
            value: exports.MsgConnectionOpenConfirmResponse.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateParams() {
    return {
        signer: "",
        params: client_1.Params.fromPartial({})
    };
}
exports.MsgUpdateParams = {
    typeUrl: "/ibc.core.connection.v1.MsgUpdateParams",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.signer !== "") {
            writer.uint32(10).string(message.signer);
        }
        if (message.params !== undefined) {
            client_1.Params.encode(message.params, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.signer = reader.string();
                    break;
                case 2:
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
            signer: (0, helpers_1.isSet)(object.signer) ? String(object.signer) : "",
            params: (0, helpers_1.isSet)(object.params) ? client_1.Params.fromJSON(object.params) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.signer !== undefined && (obj.signer = message.signer);
        message.params !== undefined && (obj.params = message.params ? client_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateParams();
        message.signer = object.signer ?? "";
        message.params = object.params !== undefined && object.params !== null ? client_1.Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            signer: object.signer,
            params: object?.params ? client_1.Params.fromAmino(object.params) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.signer = message.signer;
        obj.params = message.params ? client_1.Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUpdateParams.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgUpdateParams",
            value: exports.MsgUpdateParams.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateParams.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.MsgUpdateParams",
            value: exports.MsgUpdateParams.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateParamsResponse() {
    return {};
}
exports.MsgUpdateParamsResponse = {
    typeUrl: "/ibc.core.connection.v1.MsgUpdateParamsResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateParamsResponse();
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
        const message = createBaseMsgUpdateParamsResponse();
        return message;
    },
    fromAmino(_) {
        return {};
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUpdateParamsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgUpdateParamsResponse",
            value: exports.MsgUpdateParamsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateParamsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.MsgUpdateParamsResponse",
            value: exports.MsgUpdateParamsResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=tx.js.map
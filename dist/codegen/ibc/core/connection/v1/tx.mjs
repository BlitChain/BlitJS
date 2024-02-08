//@ts-nocheck
import { Counterparty, Version } from "./connection";
import { Any } from "../../../../google/protobuf/any";
import { Height, Params } from "../../client/v1/client";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../../helpers";
import { GlobalDecoderRegistry } from "../../../../registry";
export const protobufPackage = "ibc.core.connection.v1";
function createBaseMsgConnectionOpenInit() {
    return {
        client_id: "",
        counterparty: Counterparty.fromPartial({}),
        version: undefined,
        delay_period: BigInt(0),
        signer: ""
    };
}
export const MsgConnectionOpenInit = {
    typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenInit",
    aminoType: "cosmos-sdk/MsgConnectionOpenInit",
    is(o) {
        return o && (o.$typeUrl === MsgConnectionOpenInit.typeUrl || typeof o.client_id === "string" && Counterparty.is(o.counterparty) && typeof o.delay_period === "bigint" && typeof o.signer === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === MsgConnectionOpenInit.typeUrl || typeof o.client_id === "string" && Counterparty.isSDK(o.counterparty) && typeof o.delay_period === "bigint" && typeof o.signer === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === MsgConnectionOpenInit.typeUrl || typeof o.client_id === "string" && Counterparty.isAmino(o.counterparty) && typeof o.delay_period === "bigint" && typeof o.signer === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.client_id !== "") {
            writer.uint32(10).string(message.client_id);
        }
        if (message.counterparty !== undefined) {
            Counterparty.encode(message.counterparty, writer.uint32(18).fork()).ldelim();
        }
        if (message.version !== undefined) {
            Version.encode(message.version, writer.uint32(26).fork()).ldelim();
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
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgConnectionOpenInit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.client_id = reader.string();
                    break;
                case 2:
                    message.counterparty = Counterparty.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.version = Version.decode(reader, reader.uint32());
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
            client_id: isSet(object.client_id) ? String(object.client_id) : "",
            counterparty: isSet(object.counterparty) ? Counterparty.fromJSON(object.counterparty) : undefined,
            version: isSet(object.version) ? Version.fromJSON(object.version) : undefined,
            delay_period: isSet(object.delay_period) ? BigInt(object.delay_period.toString()) : BigInt(0),
            signer: isSet(object.signer) ? String(object.signer) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.client_id !== undefined && (obj.client_id = message.client_id);
        message.counterparty !== undefined && (obj.counterparty = message.counterparty ? Counterparty.toJSON(message.counterparty) : undefined);
        message.version !== undefined && (obj.version = message.version ? Version.toJSON(message.version) : undefined);
        message.delay_period !== undefined && (obj.delay_period = (message.delay_period || BigInt(0)).toString());
        message.signer !== undefined && (obj.signer = message.signer);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgConnectionOpenInit();
        message.client_id = object.client_id ?? "";
        message.counterparty = object.counterparty !== undefined && object.counterparty !== null ? Counterparty.fromPartial(object.counterparty) : undefined;
        message.version = object.version !== undefined && object.version !== null ? Version.fromPartial(object.version) : undefined;
        message.delay_period = object.delay_period !== undefined && object.delay_period !== null ? BigInt(object.delay_period.toString()) : BigInt(0);
        message.signer = object.signer ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgConnectionOpenInit();
        if (object.client_id !== undefined && object.client_id !== null) {
            message.client_id = object.client_id;
        }
        if (object.counterparty !== undefined && object.counterparty !== null) {
            message.counterparty = Counterparty.fromAmino(object.counterparty);
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = Version.fromAmino(object.version);
        }
        if (object.delay_period !== undefined && object.delay_period !== null) {
            message.delay_period = BigInt(object.delay_period);
        }
        if (object.signer !== undefined && object.signer !== null) {
            message.signer = object.signer;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.client_id = message.client_id;
        obj.counterparty = message.counterparty ? Counterparty.toAmino(message.counterparty) : undefined;
        obj.version = message.version ? Version.toAmino(message.version) : undefined;
        obj.delay_period = message.delay_period ? message.delay_period.toString() : undefined;
        obj.signer = message.signer;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgConnectionOpenInit.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgConnectionOpenInit",
            value: MsgConnectionOpenInit.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgConnectionOpenInit.decode(message.value);
    },
    toProto(message) {
        return MsgConnectionOpenInit.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenInit",
            value: MsgConnectionOpenInit.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgConnectionOpenInit.typeUrl, MsgConnectionOpenInit);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgConnectionOpenInit.aminoType, MsgConnectionOpenInit.typeUrl);
function createBaseMsgConnectionOpenInitResponse() {
    return {};
}
export const MsgConnectionOpenInitResponse = {
    typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenInitResponse",
    aminoType: "cosmos-sdk/MsgConnectionOpenInitResponse",
    is(o) {
        return o && o.$typeUrl === MsgConnectionOpenInitResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === MsgConnectionOpenInitResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === MsgConnectionOpenInitResponse.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        const message = createBaseMsgConnectionOpenInitResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgConnectionOpenInitResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgConnectionOpenInitResponse",
            value: MsgConnectionOpenInitResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgConnectionOpenInitResponse.decode(message.value);
    },
    toProto(message) {
        return MsgConnectionOpenInitResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenInitResponse",
            value: MsgConnectionOpenInitResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgConnectionOpenInitResponse.typeUrl, MsgConnectionOpenInitResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgConnectionOpenInitResponse.aminoType, MsgConnectionOpenInitResponse.typeUrl);
function createBaseMsgConnectionOpenTry() {
    return {
        client_id: "",
        previous_connection_id: "",
        client_state: undefined,
        counterparty: Counterparty.fromPartial({}),
        delay_period: BigInt(0),
        counterparty_versions: [],
        proof_height: Height.fromPartial({}),
        proof_init: new Uint8Array(),
        proof_client: new Uint8Array(),
        proof_consensus: new Uint8Array(),
        consensus_height: Height.fromPartial({}),
        signer: "",
        host_consensus_state_proof: new Uint8Array()
    };
}
export const MsgConnectionOpenTry = {
    typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenTry",
    aminoType: "cosmos-sdk/MsgConnectionOpenTry",
    is(o) {
        return o && (o.$typeUrl === MsgConnectionOpenTry.typeUrl || typeof o.client_id === "string" && typeof o.previous_connection_id === "string" && Counterparty.is(o.counterparty) && typeof o.delay_period === "bigint" && Array.isArray(o.counterparty_versions) && (!o.counterparty_versions.length || Version.is(o.counterparty_versions[0])) && Height.is(o.proof_height) && (o.proof_init instanceof Uint8Array || typeof o.proof_init === "string") && (o.proof_client instanceof Uint8Array || typeof o.proof_client === "string") && (o.proof_consensus instanceof Uint8Array || typeof o.proof_consensus === "string") && Height.is(o.consensus_height) && typeof o.signer === "string" && (o.host_consensus_state_proof instanceof Uint8Array || typeof o.host_consensus_state_proof === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === MsgConnectionOpenTry.typeUrl || typeof o.client_id === "string" && typeof o.previous_connection_id === "string" && Counterparty.isSDK(o.counterparty) && typeof o.delay_period === "bigint" && Array.isArray(o.counterparty_versions) && (!o.counterparty_versions.length || Version.isSDK(o.counterparty_versions[0])) && Height.isSDK(o.proof_height) && (o.proof_init instanceof Uint8Array || typeof o.proof_init === "string") && (o.proof_client instanceof Uint8Array || typeof o.proof_client === "string") && (o.proof_consensus instanceof Uint8Array || typeof o.proof_consensus === "string") && Height.isSDK(o.consensus_height) && typeof o.signer === "string" && (o.host_consensus_state_proof instanceof Uint8Array || typeof o.host_consensus_state_proof === "string"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === MsgConnectionOpenTry.typeUrl || typeof o.client_id === "string" && typeof o.previous_connection_id === "string" && Counterparty.isAmino(o.counterparty) && typeof o.delay_period === "bigint" && Array.isArray(o.counterparty_versions) && (!o.counterparty_versions.length || Version.isAmino(o.counterparty_versions[0])) && Height.isAmino(o.proof_height) && (o.proof_init instanceof Uint8Array || typeof o.proof_init === "string") && (o.proof_client instanceof Uint8Array || typeof o.proof_client === "string") && (o.proof_consensus instanceof Uint8Array || typeof o.proof_consensus === "string") && Height.isAmino(o.consensus_height) && typeof o.signer === "string" && (o.host_consensus_state_proof instanceof Uint8Array || typeof o.host_consensus_state_proof === "string"));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.client_id !== "") {
            writer.uint32(10).string(message.client_id);
        }
        if (message.previous_connection_id !== "") {
            writer.uint32(18).string(message.previous_connection_id);
        }
        if (message.client_state !== undefined) {
            Any.encode(message.client_state, writer.uint32(26).fork()).ldelim();
        }
        if (message.counterparty !== undefined) {
            Counterparty.encode(message.counterparty, writer.uint32(34).fork()).ldelim();
        }
        if (message.delay_period !== BigInt(0)) {
            writer.uint32(40).uint64(message.delay_period);
        }
        for (const v of message.counterparty_versions) {
            Version.encode(v, writer.uint32(50).fork()).ldelim();
        }
        if (message.proof_height !== undefined) {
            Height.encode(message.proof_height, writer.uint32(58).fork()).ldelim();
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
            Height.encode(message.consensus_height, writer.uint32(90).fork()).ldelim();
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
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
                    message.client_state = Any.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.counterparty = Counterparty.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.delay_period = reader.uint64();
                    break;
                case 6:
                    message.counterparty_versions.push(Version.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.proof_height = Height.decode(reader, reader.uint32());
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
                    message.consensus_height = Height.decode(reader, reader.uint32());
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
            client_id: isSet(object.client_id) ? String(object.client_id) : "",
            previous_connection_id: isSet(object.previous_connection_id) ? String(object.previous_connection_id) : "",
            client_state: isSet(object.client_state) ? Any.fromJSON(object.client_state) : undefined,
            counterparty: isSet(object.counterparty) ? Counterparty.fromJSON(object.counterparty) : undefined,
            delay_period: isSet(object.delay_period) ? BigInt(object.delay_period.toString()) : BigInt(0),
            counterparty_versions: Array.isArray(object?.counterparty_versions) ? object.counterparty_versions.map((e) => Version.fromJSON(e)) : [],
            proof_height: isSet(object.proof_height) ? Height.fromJSON(object.proof_height) : undefined,
            proof_init: isSet(object.proof_init) ? bytesFromBase64(object.proof_init) : new Uint8Array(),
            proof_client: isSet(object.proof_client) ? bytesFromBase64(object.proof_client) : new Uint8Array(),
            proof_consensus: isSet(object.proof_consensus) ? bytesFromBase64(object.proof_consensus) : new Uint8Array(),
            consensus_height: isSet(object.consensus_height) ? Height.fromJSON(object.consensus_height) : undefined,
            signer: isSet(object.signer) ? String(object.signer) : "",
            host_consensus_state_proof: isSet(object.host_consensus_state_proof) ? bytesFromBase64(object.host_consensus_state_proof) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.client_id !== undefined && (obj.client_id = message.client_id);
        message.previous_connection_id !== undefined && (obj.previous_connection_id = message.previous_connection_id);
        message.client_state !== undefined && (obj.client_state = message.client_state ? Any.toJSON(message.client_state) : undefined);
        message.counterparty !== undefined && (obj.counterparty = message.counterparty ? Counterparty.toJSON(message.counterparty) : undefined);
        message.delay_period !== undefined && (obj.delay_period = (message.delay_period || BigInt(0)).toString());
        if (message.counterparty_versions) {
            obj.counterparty_versions = message.counterparty_versions.map(e => e ? Version.toJSON(e) : undefined);
        }
        else {
            obj.counterparty_versions = [];
        }
        message.proof_height !== undefined && (obj.proof_height = message.proof_height ? Height.toJSON(message.proof_height) : undefined);
        message.proof_init !== undefined && (obj.proof_init = base64FromBytes(message.proof_init !== undefined ? message.proof_init : new Uint8Array()));
        message.proof_client !== undefined && (obj.proof_client = base64FromBytes(message.proof_client !== undefined ? message.proof_client : new Uint8Array()));
        message.proof_consensus !== undefined && (obj.proof_consensus = base64FromBytes(message.proof_consensus !== undefined ? message.proof_consensus : new Uint8Array()));
        message.consensus_height !== undefined && (obj.consensus_height = message.consensus_height ? Height.toJSON(message.consensus_height) : undefined);
        message.signer !== undefined && (obj.signer = message.signer);
        message.host_consensus_state_proof !== undefined && (obj.host_consensus_state_proof = base64FromBytes(message.host_consensus_state_proof !== undefined ? message.host_consensus_state_proof : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgConnectionOpenTry();
        message.client_id = object.client_id ?? "";
        message.previous_connection_id = object.previous_connection_id ?? "";
        message.client_state = object.client_state !== undefined && object.client_state !== null ? Any.fromPartial(object.client_state) : undefined;
        message.counterparty = object.counterparty !== undefined && object.counterparty !== null ? Counterparty.fromPartial(object.counterparty) : undefined;
        message.delay_period = object.delay_period !== undefined && object.delay_period !== null ? BigInt(object.delay_period.toString()) : BigInt(0);
        message.counterparty_versions = object.counterparty_versions?.map(e => Version.fromPartial(e)) || [];
        message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? Height.fromPartial(object.proof_height) : undefined;
        message.proof_init = object.proof_init ?? new Uint8Array();
        message.proof_client = object.proof_client ?? new Uint8Array();
        message.proof_consensus = object.proof_consensus ?? new Uint8Array();
        message.consensus_height = object.consensus_height !== undefined && object.consensus_height !== null ? Height.fromPartial(object.consensus_height) : undefined;
        message.signer = object.signer ?? "";
        message.host_consensus_state_proof = object.host_consensus_state_proof ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgConnectionOpenTry();
        if (object.client_id !== undefined && object.client_id !== null) {
            message.client_id = object.client_id;
        }
        if (object.previous_connection_id !== undefined && object.previous_connection_id !== null) {
            message.previous_connection_id = object.previous_connection_id;
        }
        if (object.client_state !== undefined && object.client_state !== null) {
            message.client_state = Any.fromAmino(object.client_state);
        }
        if (object.counterparty !== undefined && object.counterparty !== null) {
            message.counterparty = Counterparty.fromAmino(object.counterparty);
        }
        if (object.delay_period !== undefined && object.delay_period !== null) {
            message.delay_period = BigInt(object.delay_period);
        }
        message.counterparty_versions = object.counterparty_versions?.map(e => Version.fromAmino(e)) || [];
        if (object.proof_height !== undefined && object.proof_height !== null) {
            message.proof_height = Height.fromAmino(object.proof_height);
        }
        if (object.proof_init !== undefined && object.proof_init !== null) {
            message.proof_init = bytesFromBase64(object.proof_init);
        }
        if (object.proof_client !== undefined && object.proof_client !== null) {
            message.proof_client = bytesFromBase64(object.proof_client);
        }
        if (object.proof_consensus !== undefined && object.proof_consensus !== null) {
            message.proof_consensus = bytesFromBase64(object.proof_consensus);
        }
        if (object.consensus_height !== undefined && object.consensus_height !== null) {
            message.consensus_height = Height.fromAmino(object.consensus_height);
        }
        if (object.signer !== undefined && object.signer !== null) {
            message.signer = object.signer;
        }
        if (object.host_consensus_state_proof !== undefined && object.host_consensus_state_proof !== null) {
            message.host_consensus_state_proof = bytesFromBase64(object.host_consensus_state_proof);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.client_id = message.client_id;
        obj.previous_connection_id = message.previous_connection_id;
        obj.client_state = message.client_state ? Any.toAmino(message.client_state) : undefined;
        obj.counterparty = message.counterparty ? Counterparty.toAmino(message.counterparty) : undefined;
        obj.delay_period = message.delay_period ? message.delay_period.toString() : undefined;
        if (message.counterparty_versions) {
            obj.counterparty_versions = message.counterparty_versions.map(e => e ? Version.toAmino(e) : undefined);
        }
        else {
            obj.counterparty_versions = [];
        }
        obj.proof_height = message.proof_height ? Height.toAmino(message.proof_height) : {};
        obj.proof_init = message.proof_init ? base64FromBytes(message.proof_init) : undefined;
        obj.proof_client = message.proof_client ? base64FromBytes(message.proof_client) : undefined;
        obj.proof_consensus = message.proof_consensus ? base64FromBytes(message.proof_consensus) : undefined;
        obj.consensus_height = message.consensus_height ? Height.toAmino(message.consensus_height) : {};
        obj.signer = message.signer;
        obj.host_consensus_state_proof = message.host_consensus_state_proof ? base64FromBytes(message.host_consensus_state_proof) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgConnectionOpenTry.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgConnectionOpenTry",
            value: MsgConnectionOpenTry.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgConnectionOpenTry.decode(message.value);
    },
    toProto(message) {
        return MsgConnectionOpenTry.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenTry",
            value: MsgConnectionOpenTry.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgConnectionOpenTry.typeUrl, MsgConnectionOpenTry);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgConnectionOpenTry.aminoType, MsgConnectionOpenTry.typeUrl);
function createBaseMsgConnectionOpenTryResponse() {
    return {};
}
export const MsgConnectionOpenTryResponse = {
    typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenTryResponse",
    aminoType: "cosmos-sdk/MsgConnectionOpenTryResponse",
    is(o) {
        return o && o.$typeUrl === MsgConnectionOpenTryResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === MsgConnectionOpenTryResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === MsgConnectionOpenTryResponse.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        const message = createBaseMsgConnectionOpenTryResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgConnectionOpenTryResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgConnectionOpenTryResponse",
            value: MsgConnectionOpenTryResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgConnectionOpenTryResponse.decode(message.value);
    },
    toProto(message) {
        return MsgConnectionOpenTryResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenTryResponse",
            value: MsgConnectionOpenTryResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgConnectionOpenTryResponse.typeUrl, MsgConnectionOpenTryResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgConnectionOpenTryResponse.aminoType, MsgConnectionOpenTryResponse.typeUrl);
function createBaseMsgConnectionOpenAck() {
    return {
        connection_id: "",
        counterparty_connection_id: "",
        version: undefined,
        client_state: undefined,
        proof_height: Height.fromPartial({}),
        proof_try: new Uint8Array(),
        proof_client: new Uint8Array(),
        proof_consensus: new Uint8Array(),
        consensus_height: Height.fromPartial({}),
        signer: "",
        host_consensus_state_proof: new Uint8Array()
    };
}
export const MsgConnectionOpenAck = {
    typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenAck",
    aminoType: "cosmos-sdk/MsgConnectionOpenAck",
    is(o) {
        return o && (o.$typeUrl === MsgConnectionOpenAck.typeUrl || typeof o.connection_id === "string" && typeof o.counterparty_connection_id === "string" && Height.is(o.proof_height) && (o.proof_try instanceof Uint8Array || typeof o.proof_try === "string") && (o.proof_client instanceof Uint8Array || typeof o.proof_client === "string") && (o.proof_consensus instanceof Uint8Array || typeof o.proof_consensus === "string") && Height.is(o.consensus_height) && typeof o.signer === "string" && (o.host_consensus_state_proof instanceof Uint8Array || typeof o.host_consensus_state_proof === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === MsgConnectionOpenAck.typeUrl || typeof o.connection_id === "string" && typeof o.counterparty_connection_id === "string" && Height.isSDK(o.proof_height) && (o.proof_try instanceof Uint8Array || typeof o.proof_try === "string") && (o.proof_client instanceof Uint8Array || typeof o.proof_client === "string") && (o.proof_consensus instanceof Uint8Array || typeof o.proof_consensus === "string") && Height.isSDK(o.consensus_height) && typeof o.signer === "string" && (o.host_consensus_state_proof instanceof Uint8Array || typeof o.host_consensus_state_proof === "string"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === MsgConnectionOpenAck.typeUrl || typeof o.connection_id === "string" && typeof o.counterparty_connection_id === "string" && Height.isAmino(o.proof_height) && (o.proof_try instanceof Uint8Array || typeof o.proof_try === "string") && (o.proof_client instanceof Uint8Array || typeof o.proof_client === "string") && (o.proof_consensus instanceof Uint8Array || typeof o.proof_consensus === "string") && Height.isAmino(o.consensus_height) && typeof o.signer === "string" && (o.host_consensus_state_proof instanceof Uint8Array || typeof o.host_consensus_state_proof === "string"));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.connection_id !== "") {
            writer.uint32(10).string(message.connection_id);
        }
        if (message.counterparty_connection_id !== "") {
            writer.uint32(18).string(message.counterparty_connection_id);
        }
        if (message.version !== undefined) {
            Version.encode(message.version, writer.uint32(26).fork()).ldelim();
        }
        if (message.client_state !== undefined) {
            Any.encode(message.client_state, writer.uint32(34).fork()).ldelim();
        }
        if (message.proof_height !== undefined) {
            Height.encode(message.proof_height, writer.uint32(42).fork()).ldelim();
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
            Height.encode(message.consensus_height, writer.uint32(74).fork()).ldelim();
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
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
                    message.version = Version.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.client_state = Any.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.proof_height = Height.decode(reader, reader.uint32());
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
                    message.consensus_height = Height.decode(reader, reader.uint32());
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
            connection_id: isSet(object.connection_id) ? String(object.connection_id) : "",
            counterparty_connection_id: isSet(object.counterparty_connection_id) ? String(object.counterparty_connection_id) : "",
            version: isSet(object.version) ? Version.fromJSON(object.version) : undefined,
            client_state: isSet(object.client_state) ? Any.fromJSON(object.client_state) : undefined,
            proof_height: isSet(object.proof_height) ? Height.fromJSON(object.proof_height) : undefined,
            proof_try: isSet(object.proof_try) ? bytesFromBase64(object.proof_try) : new Uint8Array(),
            proof_client: isSet(object.proof_client) ? bytesFromBase64(object.proof_client) : new Uint8Array(),
            proof_consensus: isSet(object.proof_consensus) ? bytesFromBase64(object.proof_consensus) : new Uint8Array(),
            consensus_height: isSet(object.consensus_height) ? Height.fromJSON(object.consensus_height) : undefined,
            signer: isSet(object.signer) ? String(object.signer) : "",
            host_consensus_state_proof: isSet(object.host_consensus_state_proof) ? bytesFromBase64(object.host_consensus_state_proof) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.connection_id !== undefined && (obj.connection_id = message.connection_id);
        message.counterparty_connection_id !== undefined && (obj.counterparty_connection_id = message.counterparty_connection_id);
        message.version !== undefined && (obj.version = message.version ? Version.toJSON(message.version) : undefined);
        message.client_state !== undefined && (obj.client_state = message.client_state ? Any.toJSON(message.client_state) : undefined);
        message.proof_height !== undefined && (obj.proof_height = message.proof_height ? Height.toJSON(message.proof_height) : undefined);
        message.proof_try !== undefined && (obj.proof_try = base64FromBytes(message.proof_try !== undefined ? message.proof_try : new Uint8Array()));
        message.proof_client !== undefined && (obj.proof_client = base64FromBytes(message.proof_client !== undefined ? message.proof_client : new Uint8Array()));
        message.proof_consensus !== undefined && (obj.proof_consensus = base64FromBytes(message.proof_consensus !== undefined ? message.proof_consensus : new Uint8Array()));
        message.consensus_height !== undefined && (obj.consensus_height = message.consensus_height ? Height.toJSON(message.consensus_height) : undefined);
        message.signer !== undefined && (obj.signer = message.signer);
        message.host_consensus_state_proof !== undefined && (obj.host_consensus_state_proof = base64FromBytes(message.host_consensus_state_proof !== undefined ? message.host_consensus_state_proof : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgConnectionOpenAck();
        message.connection_id = object.connection_id ?? "";
        message.counterparty_connection_id = object.counterparty_connection_id ?? "";
        message.version = object.version !== undefined && object.version !== null ? Version.fromPartial(object.version) : undefined;
        message.client_state = object.client_state !== undefined && object.client_state !== null ? Any.fromPartial(object.client_state) : undefined;
        message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? Height.fromPartial(object.proof_height) : undefined;
        message.proof_try = object.proof_try ?? new Uint8Array();
        message.proof_client = object.proof_client ?? new Uint8Array();
        message.proof_consensus = object.proof_consensus ?? new Uint8Array();
        message.consensus_height = object.consensus_height !== undefined && object.consensus_height !== null ? Height.fromPartial(object.consensus_height) : undefined;
        message.signer = object.signer ?? "";
        message.host_consensus_state_proof = object.host_consensus_state_proof ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgConnectionOpenAck();
        if (object.connection_id !== undefined && object.connection_id !== null) {
            message.connection_id = object.connection_id;
        }
        if (object.counterparty_connection_id !== undefined && object.counterparty_connection_id !== null) {
            message.counterparty_connection_id = object.counterparty_connection_id;
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = Version.fromAmino(object.version);
        }
        if (object.client_state !== undefined && object.client_state !== null) {
            message.client_state = Any.fromAmino(object.client_state);
        }
        if (object.proof_height !== undefined && object.proof_height !== null) {
            message.proof_height = Height.fromAmino(object.proof_height);
        }
        if (object.proof_try !== undefined && object.proof_try !== null) {
            message.proof_try = bytesFromBase64(object.proof_try);
        }
        if (object.proof_client !== undefined && object.proof_client !== null) {
            message.proof_client = bytesFromBase64(object.proof_client);
        }
        if (object.proof_consensus !== undefined && object.proof_consensus !== null) {
            message.proof_consensus = bytesFromBase64(object.proof_consensus);
        }
        if (object.consensus_height !== undefined && object.consensus_height !== null) {
            message.consensus_height = Height.fromAmino(object.consensus_height);
        }
        if (object.signer !== undefined && object.signer !== null) {
            message.signer = object.signer;
        }
        if (object.host_consensus_state_proof !== undefined && object.host_consensus_state_proof !== null) {
            message.host_consensus_state_proof = bytesFromBase64(object.host_consensus_state_proof);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.connection_id = message.connection_id;
        obj.counterparty_connection_id = message.counterparty_connection_id;
        obj.version = message.version ? Version.toAmino(message.version) : undefined;
        obj.client_state = message.client_state ? Any.toAmino(message.client_state) : undefined;
        obj.proof_height = message.proof_height ? Height.toAmino(message.proof_height) : {};
        obj.proof_try = message.proof_try ? base64FromBytes(message.proof_try) : undefined;
        obj.proof_client = message.proof_client ? base64FromBytes(message.proof_client) : undefined;
        obj.proof_consensus = message.proof_consensus ? base64FromBytes(message.proof_consensus) : undefined;
        obj.consensus_height = message.consensus_height ? Height.toAmino(message.consensus_height) : {};
        obj.signer = message.signer;
        obj.host_consensus_state_proof = message.host_consensus_state_proof ? base64FromBytes(message.host_consensus_state_proof) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgConnectionOpenAck.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgConnectionOpenAck",
            value: MsgConnectionOpenAck.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgConnectionOpenAck.decode(message.value);
    },
    toProto(message) {
        return MsgConnectionOpenAck.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenAck",
            value: MsgConnectionOpenAck.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgConnectionOpenAck.typeUrl, MsgConnectionOpenAck);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgConnectionOpenAck.aminoType, MsgConnectionOpenAck.typeUrl);
function createBaseMsgConnectionOpenAckResponse() {
    return {};
}
export const MsgConnectionOpenAckResponse = {
    typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenAckResponse",
    aminoType: "cosmos-sdk/MsgConnectionOpenAckResponse",
    is(o) {
        return o && o.$typeUrl === MsgConnectionOpenAckResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === MsgConnectionOpenAckResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === MsgConnectionOpenAckResponse.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        const message = createBaseMsgConnectionOpenAckResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgConnectionOpenAckResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgConnectionOpenAckResponse",
            value: MsgConnectionOpenAckResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgConnectionOpenAckResponse.decode(message.value);
    },
    toProto(message) {
        return MsgConnectionOpenAckResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenAckResponse",
            value: MsgConnectionOpenAckResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgConnectionOpenAckResponse.typeUrl, MsgConnectionOpenAckResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgConnectionOpenAckResponse.aminoType, MsgConnectionOpenAckResponse.typeUrl);
function createBaseMsgConnectionOpenConfirm() {
    return {
        connection_id: "",
        proof_ack: new Uint8Array(),
        proof_height: Height.fromPartial({}),
        signer: ""
    };
}
export const MsgConnectionOpenConfirm = {
    typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenConfirm",
    aminoType: "cosmos-sdk/MsgConnectionOpenConfirm",
    is(o) {
        return o && (o.$typeUrl === MsgConnectionOpenConfirm.typeUrl || typeof o.connection_id === "string" && (o.proof_ack instanceof Uint8Array || typeof o.proof_ack === "string") && Height.is(o.proof_height) && typeof o.signer === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === MsgConnectionOpenConfirm.typeUrl || typeof o.connection_id === "string" && (o.proof_ack instanceof Uint8Array || typeof o.proof_ack === "string") && Height.isSDK(o.proof_height) && typeof o.signer === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === MsgConnectionOpenConfirm.typeUrl || typeof o.connection_id === "string" && (o.proof_ack instanceof Uint8Array || typeof o.proof_ack === "string") && Height.isAmino(o.proof_height) && typeof o.signer === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.connection_id !== "") {
            writer.uint32(10).string(message.connection_id);
        }
        if (message.proof_ack.length !== 0) {
            writer.uint32(18).bytes(message.proof_ack);
        }
        if (message.proof_height !== undefined) {
            Height.encode(message.proof_height, writer.uint32(26).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(34).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
                    message.proof_height = Height.decode(reader, reader.uint32());
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
            connection_id: isSet(object.connection_id) ? String(object.connection_id) : "",
            proof_ack: isSet(object.proof_ack) ? bytesFromBase64(object.proof_ack) : new Uint8Array(),
            proof_height: isSet(object.proof_height) ? Height.fromJSON(object.proof_height) : undefined,
            signer: isSet(object.signer) ? String(object.signer) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.connection_id !== undefined && (obj.connection_id = message.connection_id);
        message.proof_ack !== undefined && (obj.proof_ack = base64FromBytes(message.proof_ack !== undefined ? message.proof_ack : new Uint8Array()));
        message.proof_height !== undefined && (obj.proof_height = message.proof_height ? Height.toJSON(message.proof_height) : undefined);
        message.signer !== undefined && (obj.signer = message.signer);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgConnectionOpenConfirm();
        message.connection_id = object.connection_id ?? "";
        message.proof_ack = object.proof_ack ?? new Uint8Array();
        message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? Height.fromPartial(object.proof_height) : undefined;
        message.signer = object.signer ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgConnectionOpenConfirm();
        if (object.connection_id !== undefined && object.connection_id !== null) {
            message.connection_id = object.connection_id;
        }
        if (object.proof_ack !== undefined && object.proof_ack !== null) {
            message.proof_ack = bytesFromBase64(object.proof_ack);
        }
        if (object.proof_height !== undefined && object.proof_height !== null) {
            message.proof_height = Height.fromAmino(object.proof_height);
        }
        if (object.signer !== undefined && object.signer !== null) {
            message.signer = object.signer;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.connection_id = message.connection_id;
        obj.proof_ack = message.proof_ack ? base64FromBytes(message.proof_ack) : undefined;
        obj.proof_height = message.proof_height ? Height.toAmino(message.proof_height) : {};
        obj.signer = message.signer;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgConnectionOpenConfirm.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgConnectionOpenConfirm",
            value: MsgConnectionOpenConfirm.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgConnectionOpenConfirm.decode(message.value);
    },
    toProto(message) {
        return MsgConnectionOpenConfirm.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenConfirm",
            value: MsgConnectionOpenConfirm.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgConnectionOpenConfirm.typeUrl, MsgConnectionOpenConfirm);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgConnectionOpenConfirm.aminoType, MsgConnectionOpenConfirm.typeUrl);
function createBaseMsgConnectionOpenConfirmResponse() {
    return {};
}
export const MsgConnectionOpenConfirmResponse = {
    typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenConfirmResponse",
    aminoType: "cosmos-sdk/MsgConnectionOpenConfirmResponse",
    is(o) {
        return o && o.$typeUrl === MsgConnectionOpenConfirmResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === MsgConnectionOpenConfirmResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === MsgConnectionOpenConfirmResponse.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        const message = createBaseMsgConnectionOpenConfirmResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgConnectionOpenConfirmResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgConnectionOpenConfirmResponse",
            value: MsgConnectionOpenConfirmResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgConnectionOpenConfirmResponse.decode(message.value);
    },
    toProto(message) {
        return MsgConnectionOpenConfirmResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenConfirmResponse",
            value: MsgConnectionOpenConfirmResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgConnectionOpenConfirmResponse.typeUrl, MsgConnectionOpenConfirmResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgConnectionOpenConfirmResponse.aminoType, MsgConnectionOpenConfirmResponse.typeUrl);
function createBaseMsgUpdateParams() {
    return {
        signer: "",
        params: Params.fromPartial({})
    };
}
export const MsgUpdateParams = {
    typeUrl: "/ibc.core.connection.v1.MsgUpdateParams",
    aminoType: "cosmos-sdk/MsgUpdateParams",
    is(o) {
        return o && (o.$typeUrl === MsgUpdateParams.typeUrl || typeof o.signer === "string" && Params.is(o.params));
    },
    isSDK(o) {
        return o && (o.$typeUrl === MsgUpdateParams.typeUrl || typeof o.signer === "string" && Params.isSDK(o.params));
    },
    isAmino(o) {
        return o && (o.$typeUrl === MsgUpdateParams.typeUrl || typeof o.signer === "string" && Params.isAmino(o.params));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.signer !== "") {
            writer.uint32(10).string(message.signer);
        }
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.signer = reader.string();
                    break;
                case 2:
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
            signer: isSet(object.signer) ? String(object.signer) : "",
            params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.signer !== undefined && (obj.signer = message.signer);
        message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateParams();
        message.signer = object.signer ?? "";
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUpdateParams();
        if (object.signer !== undefined && object.signer !== null) {
            message.signer = object.signer;
        }
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.signer = message.signer;
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdateParams.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgUpdateParams",
            value: MsgUpdateParams.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgUpdateParams.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.MsgUpdateParams",
            value: MsgUpdateParams.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgUpdateParams.typeUrl, MsgUpdateParams);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUpdateParams.aminoType, MsgUpdateParams.typeUrl);
function createBaseMsgUpdateParamsResponse() {
    return {};
}
export const MsgUpdateParamsResponse = {
    typeUrl: "/ibc.core.connection.v1.MsgUpdateParamsResponse",
    aminoType: "cosmos-sdk/MsgUpdateParamsResponse",
    is(o) {
        return o && o.$typeUrl === MsgUpdateParamsResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === MsgUpdateParamsResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === MsgUpdateParamsResponse.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        const message = createBaseMsgUpdateParamsResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdateParamsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgUpdateParamsResponse",
            value: MsgUpdateParamsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgUpdateParamsResponse.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.MsgUpdateParamsResponse",
            value: MsgUpdateParamsResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgUpdateParamsResponse.typeUrl, MsgUpdateParamsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUpdateParamsResponse.aminoType, MsgUpdateParamsResponse.typeUrl);
//# sourceMappingURL=tx.js.map
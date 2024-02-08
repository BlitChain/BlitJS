//@ts-nocheck
import { Any } from "../../../../google/protobuf/any";
import { Plan } from "../../../../cosmos/upgrade/v1beta1/upgrade";
import { Params } from "./client";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../../helpers";
import { GlobalDecoderRegistry } from "../../../../registry";
export const protobufPackage = "ibc.core.client.v1";
function createBaseMsgCreateClient() {
    return {
        client_state: undefined,
        consensus_state: undefined,
        signer: ""
    };
}
export const MsgCreateClient = {
    typeUrl: "/ibc.core.client.v1.MsgCreateClient",
    aminoType: "cosmos-sdk/MsgCreateClient",
    is(o) {
        return o && (o.$typeUrl === MsgCreateClient.typeUrl || typeof o.signer === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === MsgCreateClient.typeUrl || typeof o.signer === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === MsgCreateClient.typeUrl || typeof o.signer === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.client_state !== undefined) {
            Any.encode(message.client_state, writer.uint32(10).fork()).ldelim();
        }
        if (message.consensus_state !== undefined) {
            Any.encode(message.consensus_state, writer.uint32(18).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(26).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateClient();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.client_state = Any.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.consensus_state = Any.decode(reader, reader.uint32());
                    break;
                case 3:
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
            client_state: isSet(object.client_state) ? Any.fromJSON(object.client_state) : undefined,
            consensus_state: isSet(object.consensus_state) ? Any.fromJSON(object.consensus_state) : undefined,
            signer: isSet(object.signer) ? String(object.signer) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.client_state !== undefined && (obj.client_state = message.client_state ? Any.toJSON(message.client_state) : undefined);
        message.consensus_state !== undefined && (obj.consensus_state = message.consensus_state ? Any.toJSON(message.consensus_state) : undefined);
        message.signer !== undefined && (obj.signer = message.signer);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateClient();
        message.client_state = object.client_state !== undefined && object.client_state !== null ? Any.fromPartial(object.client_state) : undefined;
        message.consensus_state = object.consensus_state !== undefined && object.consensus_state !== null ? Any.fromPartial(object.consensus_state) : undefined;
        message.signer = object.signer ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateClient();
        if (object.client_state !== undefined && object.client_state !== null) {
            message.client_state = Any.fromAmino(object.client_state);
        }
        if (object.consensus_state !== undefined && object.consensus_state !== null) {
            message.consensus_state = Any.fromAmino(object.consensus_state);
        }
        if (object.signer !== undefined && object.signer !== null) {
            message.signer = object.signer;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.client_state = message.client_state ? Any.toAmino(message.client_state) : undefined;
        obj.consensus_state = message.consensus_state ? Any.toAmino(message.consensus_state) : undefined;
        obj.signer = message.signer;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCreateClient.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgCreateClient",
            value: MsgCreateClient.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgCreateClient.decode(message.value);
    },
    toProto(message) {
        return MsgCreateClient.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.MsgCreateClient",
            value: MsgCreateClient.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgCreateClient.typeUrl, MsgCreateClient);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgCreateClient.aminoType, MsgCreateClient.typeUrl);
function createBaseMsgCreateClientResponse() {
    return {};
}
export const MsgCreateClientResponse = {
    typeUrl: "/ibc.core.client.v1.MsgCreateClientResponse",
    aminoType: "cosmos-sdk/MsgCreateClientResponse",
    is(o) {
        return o && o.$typeUrl === MsgCreateClientResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === MsgCreateClientResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === MsgCreateClientResponse.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateClientResponse();
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
        const message = createBaseMsgCreateClientResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgCreateClientResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCreateClientResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgCreateClientResponse",
            value: MsgCreateClientResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgCreateClientResponse.decode(message.value);
    },
    toProto(message) {
        return MsgCreateClientResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.MsgCreateClientResponse",
            value: MsgCreateClientResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgCreateClientResponse.typeUrl, MsgCreateClientResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgCreateClientResponse.aminoType, MsgCreateClientResponse.typeUrl);
function createBaseMsgUpdateClient() {
    return {
        client_id: "",
        client_message: undefined,
        signer: ""
    };
}
export const MsgUpdateClient = {
    typeUrl: "/ibc.core.client.v1.MsgUpdateClient",
    aminoType: "cosmos-sdk/MsgUpdateClient",
    is(o) {
        return o && (o.$typeUrl === MsgUpdateClient.typeUrl || typeof o.client_id === "string" && typeof o.signer === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === MsgUpdateClient.typeUrl || typeof o.client_id === "string" && typeof o.signer === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === MsgUpdateClient.typeUrl || typeof o.client_id === "string" && typeof o.signer === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.client_id !== "") {
            writer.uint32(10).string(message.client_id);
        }
        if (message.client_message !== undefined) {
            Any.encode(message.client_message, writer.uint32(18).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(26).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateClient();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.client_id = reader.string();
                    break;
                case 2:
                    message.client_message = Any.decode(reader, reader.uint32());
                    break;
                case 3:
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
            client_message: isSet(object.client_message) ? Any.fromJSON(object.client_message) : undefined,
            signer: isSet(object.signer) ? String(object.signer) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.client_id !== undefined && (obj.client_id = message.client_id);
        message.client_message !== undefined && (obj.client_message = message.client_message ? Any.toJSON(message.client_message) : undefined);
        message.signer !== undefined && (obj.signer = message.signer);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateClient();
        message.client_id = object.client_id ?? "";
        message.client_message = object.client_message !== undefined && object.client_message !== null ? Any.fromPartial(object.client_message) : undefined;
        message.signer = object.signer ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUpdateClient();
        if (object.client_id !== undefined && object.client_id !== null) {
            message.client_id = object.client_id;
        }
        if (object.client_message !== undefined && object.client_message !== null) {
            message.client_message = Any.fromAmino(object.client_message);
        }
        if (object.signer !== undefined && object.signer !== null) {
            message.signer = object.signer;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.client_id = message.client_id;
        obj.client_message = message.client_message ? Any.toAmino(message.client_message) : undefined;
        obj.signer = message.signer;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdateClient.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgUpdateClient",
            value: MsgUpdateClient.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgUpdateClient.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateClient.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.MsgUpdateClient",
            value: MsgUpdateClient.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgUpdateClient.typeUrl, MsgUpdateClient);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUpdateClient.aminoType, MsgUpdateClient.typeUrl);
function createBaseMsgUpdateClientResponse() {
    return {};
}
export const MsgUpdateClientResponse = {
    typeUrl: "/ibc.core.client.v1.MsgUpdateClientResponse",
    aminoType: "cosmos-sdk/MsgUpdateClientResponse",
    is(o) {
        return o && o.$typeUrl === MsgUpdateClientResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === MsgUpdateClientResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === MsgUpdateClientResponse.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateClientResponse();
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
        const message = createBaseMsgUpdateClientResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgUpdateClientResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdateClientResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgUpdateClientResponse",
            value: MsgUpdateClientResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgUpdateClientResponse.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateClientResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.MsgUpdateClientResponse",
            value: MsgUpdateClientResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgUpdateClientResponse.typeUrl, MsgUpdateClientResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUpdateClientResponse.aminoType, MsgUpdateClientResponse.typeUrl);
function createBaseMsgUpgradeClient() {
    return {
        client_id: "",
        client_state: undefined,
        consensus_state: undefined,
        proof_upgrade_client: new Uint8Array(),
        proof_upgrade_consensus_state: new Uint8Array(),
        signer: ""
    };
}
export const MsgUpgradeClient = {
    typeUrl: "/ibc.core.client.v1.MsgUpgradeClient",
    aminoType: "cosmos-sdk/MsgUpgradeClient",
    is(o) {
        return o && (o.$typeUrl === MsgUpgradeClient.typeUrl || typeof o.client_id === "string" && (o.proof_upgrade_client instanceof Uint8Array || typeof o.proof_upgrade_client === "string") && (o.proof_upgrade_consensus_state instanceof Uint8Array || typeof o.proof_upgrade_consensus_state === "string") && typeof o.signer === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === MsgUpgradeClient.typeUrl || typeof o.client_id === "string" && (o.proof_upgrade_client instanceof Uint8Array || typeof o.proof_upgrade_client === "string") && (o.proof_upgrade_consensus_state instanceof Uint8Array || typeof o.proof_upgrade_consensus_state === "string") && typeof o.signer === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === MsgUpgradeClient.typeUrl || typeof o.client_id === "string" && (o.proof_upgrade_client instanceof Uint8Array || typeof o.proof_upgrade_client === "string") && (o.proof_upgrade_consensus_state instanceof Uint8Array || typeof o.proof_upgrade_consensus_state === "string") && typeof o.signer === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.client_id !== "") {
            writer.uint32(10).string(message.client_id);
        }
        if (message.client_state !== undefined) {
            Any.encode(message.client_state, writer.uint32(18).fork()).ldelim();
        }
        if (message.consensus_state !== undefined) {
            Any.encode(message.consensus_state, writer.uint32(26).fork()).ldelim();
        }
        if (message.proof_upgrade_client.length !== 0) {
            writer.uint32(34).bytes(message.proof_upgrade_client);
        }
        if (message.proof_upgrade_consensus_state.length !== 0) {
            writer.uint32(42).bytes(message.proof_upgrade_consensus_state);
        }
        if (message.signer !== "") {
            writer.uint32(50).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpgradeClient();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.client_id = reader.string();
                    break;
                case 2:
                    message.client_state = Any.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.consensus_state = Any.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.proof_upgrade_client = reader.bytes();
                    break;
                case 5:
                    message.proof_upgrade_consensus_state = reader.bytes();
                    break;
                case 6:
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
            client_state: isSet(object.client_state) ? Any.fromJSON(object.client_state) : undefined,
            consensus_state: isSet(object.consensus_state) ? Any.fromJSON(object.consensus_state) : undefined,
            proof_upgrade_client: isSet(object.proof_upgrade_client) ? bytesFromBase64(object.proof_upgrade_client) : new Uint8Array(),
            proof_upgrade_consensus_state: isSet(object.proof_upgrade_consensus_state) ? bytesFromBase64(object.proof_upgrade_consensus_state) : new Uint8Array(),
            signer: isSet(object.signer) ? String(object.signer) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.client_id !== undefined && (obj.client_id = message.client_id);
        message.client_state !== undefined && (obj.client_state = message.client_state ? Any.toJSON(message.client_state) : undefined);
        message.consensus_state !== undefined && (obj.consensus_state = message.consensus_state ? Any.toJSON(message.consensus_state) : undefined);
        message.proof_upgrade_client !== undefined && (obj.proof_upgrade_client = base64FromBytes(message.proof_upgrade_client !== undefined ? message.proof_upgrade_client : new Uint8Array()));
        message.proof_upgrade_consensus_state !== undefined && (obj.proof_upgrade_consensus_state = base64FromBytes(message.proof_upgrade_consensus_state !== undefined ? message.proof_upgrade_consensus_state : new Uint8Array()));
        message.signer !== undefined && (obj.signer = message.signer);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgUpgradeClient();
        message.client_id = object.client_id ?? "";
        message.client_state = object.client_state !== undefined && object.client_state !== null ? Any.fromPartial(object.client_state) : undefined;
        message.consensus_state = object.consensus_state !== undefined && object.consensus_state !== null ? Any.fromPartial(object.consensus_state) : undefined;
        message.proof_upgrade_client = object.proof_upgrade_client ?? new Uint8Array();
        message.proof_upgrade_consensus_state = object.proof_upgrade_consensus_state ?? new Uint8Array();
        message.signer = object.signer ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUpgradeClient();
        if (object.client_id !== undefined && object.client_id !== null) {
            message.client_id = object.client_id;
        }
        if (object.client_state !== undefined && object.client_state !== null) {
            message.client_state = Any.fromAmino(object.client_state);
        }
        if (object.consensus_state !== undefined && object.consensus_state !== null) {
            message.consensus_state = Any.fromAmino(object.consensus_state);
        }
        if (object.proof_upgrade_client !== undefined && object.proof_upgrade_client !== null) {
            message.proof_upgrade_client = bytesFromBase64(object.proof_upgrade_client);
        }
        if (object.proof_upgrade_consensus_state !== undefined && object.proof_upgrade_consensus_state !== null) {
            message.proof_upgrade_consensus_state = bytesFromBase64(object.proof_upgrade_consensus_state);
        }
        if (object.signer !== undefined && object.signer !== null) {
            message.signer = object.signer;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.client_id = message.client_id;
        obj.client_state = message.client_state ? Any.toAmino(message.client_state) : undefined;
        obj.consensus_state = message.consensus_state ? Any.toAmino(message.consensus_state) : undefined;
        obj.proof_upgrade_client = message.proof_upgrade_client ? base64FromBytes(message.proof_upgrade_client) : undefined;
        obj.proof_upgrade_consensus_state = message.proof_upgrade_consensus_state ? base64FromBytes(message.proof_upgrade_consensus_state) : undefined;
        obj.signer = message.signer;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpgradeClient.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgUpgradeClient",
            value: MsgUpgradeClient.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgUpgradeClient.decode(message.value);
    },
    toProto(message) {
        return MsgUpgradeClient.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.MsgUpgradeClient",
            value: MsgUpgradeClient.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgUpgradeClient.typeUrl, MsgUpgradeClient);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUpgradeClient.aminoType, MsgUpgradeClient.typeUrl);
function createBaseMsgUpgradeClientResponse() {
    return {};
}
export const MsgUpgradeClientResponse = {
    typeUrl: "/ibc.core.client.v1.MsgUpgradeClientResponse",
    aminoType: "cosmos-sdk/MsgUpgradeClientResponse",
    is(o) {
        return o && o.$typeUrl === MsgUpgradeClientResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === MsgUpgradeClientResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === MsgUpgradeClientResponse.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpgradeClientResponse();
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
        const message = createBaseMsgUpgradeClientResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgUpgradeClientResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpgradeClientResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgUpgradeClientResponse",
            value: MsgUpgradeClientResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgUpgradeClientResponse.decode(message.value);
    },
    toProto(message) {
        return MsgUpgradeClientResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.MsgUpgradeClientResponse",
            value: MsgUpgradeClientResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgUpgradeClientResponse.typeUrl, MsgUpgradeClientResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUpgradeClientResponse.aminoType, MsgUpgradeClientResponse.typeUrl);
function createBaseMsgSubmitMisbehaviour() {
    return {
        client_id: "",
        misbehaviour: undefined,
        signer: ""
    };
}
export const MsgSubmitMisbehaviour = {
    typeUrl: "/ibc.core.client.v1.MsgSubmitMisbehaviour",
    aminoType: "cosmos-sdk/MsgSubmitMisbehaviour",
    is(o) {
        return o && (o.$typeUrl === MsgSubmitMisbehaviour.typeUrl || typeof o.client_id === "string" && typeof o.signer === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === MsgSubmitMisbehaviour.typeUrl || typeof o.client_id === "string" && typeof o.signer === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === MsgSubmitMisbehaviour.typeUrl || typeof o.client_id === "string" && typeof o.signer === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.client_id !== "") {
            writer.uint32(10).string(message.client_id);
        }
        if (message.misbehaviour !== undefined) {
            Any.encode(message.misbehaviour, writer.uint32(18).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(26).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSubmitMisbehaviour();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.client_id = reader.string();
                    break;
                case 2:
                    message.misbehaviour = Any.decode(reader, reader.uint32());
                    break;
                case 3:
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
            misbehaviour: isSet(object.misbehaviour) ? Any.fromJSON(object.misbehaviour) : undefined,
            signer: isSet(object.signer) ? String(object.signer) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.client_id !== undefined && (obj.client_id = message.client_id);
        message.misbehaviour !== undefined && (obj.misbehaviour = message.misbehaviour ? Any.toJSON(message.misbehaviour) : undefined);
        message.signer !== undefined && (obj.signer = message.signer);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSubmitMisbehaviour();
        message.client_id = object.client_id ?? "";
        message.misbehaviour = object.misbehaviour !== undefined && object.misbehaviour !== null ? Any.fromPartial(object.misbehaviour) : undefined;
        message.signer = object.signer ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgSubmitMisbehaviour();
        if (object.client_id !== undefined && object.client_id !== null) {
            message.client_id = object.client_id;
        }
        if (object.misbehaviour !== undefined && object.misbehaviour !== null) {
            message.misbehaviour = Any.fromAmino(object.misbehaviour);
        }
        if (object.signer !== undefined && object.signer !== null) {
            message.signer = object.signer;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.client_id = message.client_id;
        obj.misbehaviour = message.misbehaviour ? Any.toAmino(message.misbehaviour) : undefined;
        obj.signer = message.signer;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgSubmitMisbehaviour.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgSubmitMisbehaviour",
            value: MsgSubmitMisbehaviour.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgSubmitMisbehaviour.decode(message.value);
    },
    toProto(message) {
        return MsgSubmitMisbehaviour.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.MsgSubmitMisbehaviour",
            value: MsgSubmitMisbehaviour.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgSubmitMisbehaviour.typeUrl, MsgSubmitMisbehaviour);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgSubmitMisbehaviour.aminoType, MsgSubmitMisbehaviour.typeUrl);
function createBaseMsgSubmitMisbehaviourResponse() {
    return {};
}
export const MsgSubmitMisbehaviourResponse = {
    typeUrl: "/ibc.core.client.v1.MsgSubmitMisbehaviourResponse",
    aminoType: "cosmos-sdk/MsgSubmitMisbehaviourResponse",
    is(o) {
        return o && o.$typeUrl === MsgSubmitMisbehaviourResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === MsgSubmitMisbehaviourResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === MsgSubmitMisbehaviourResponse.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSubmitMisbehaviourResponse();
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
        const message = createBaseMsgSubmitMisbehaviourResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgSubmitMisbehaviourResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgSubmitMisbehaviourResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgSubmitMisbehaviourResponse",
            value: MsgSubmitMisbehaviourResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgSubmitMisbehaviourResponse.decode(message.value);
    },
    toProto(message) {
        return MsgSubmitMisbehaviourResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.MsgSubmitMisbehaviourResponse",
            value: MsgSubmitMisbehaviourResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgSubmitMisbehaviourResponse.typeUrl, MsgSubmitMisbehaviourResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgSubmitMisbehaviourResponse.aminoType, MsgSubmitMisbehaviourResponse.typeUrl);
function createBaseMsgRecoverClient() {
    return {
        subject_client_id: "",
        substitute_client_id: "",
        signer: ""
    };
}
export const MsgRecoverClient = {
    typeUrl: "/ibc.core.client.v1.MsgRecoverClient",
    aminoType: "cosmos-sdk/MsgRecoverClient",
    is(o) {
        return o && (o.$typeUrl === MsgRecoverClient.typeUrl || typeof o.subject_client_id === "string" && typeof o.substitute_client_id === "string" && typeof o.signer === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === MsgRecoverClient.typeUrl || typeof o.subject_client_id === "string" && typeof o.substitute_client_id === "string" && typeof o.signer === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === MsgRecoverClient.typeUrl || typeof o.subject_client_id === "string" && typeof o.substitute_client_id === "string" && typeof o.signer === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.subject_client_id !== "") {
            writer.uint32(10).string(message.subject_client_id);
        }
        if (message.substitute_client_id !== "") {
            writer.uint32(18).string(message.substitute_client_id);
        }
        if (message.signer !== "") {
            writer.uint32(26).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRecoverClient();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subject_client_id = reader.string();
                    break;
                case 2:
                    message.substitute_client_id = reader.string();
                    break;
                case 3:
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
            subject_client_id: isSet(object.subject_client_id) ? String(object.subject_client_id) : "",
            substitute_client_id: isSet(object.substitute_client_id) ? String(object.substitute_client_id) : "",
            signer: isSet(object.signer) ? String(object.signer) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.subject_client_id !== undefined && (obj.subject_client_id = message.subject_client_id);
        message.substitute_client_id !== undefined && (obj.substitute_client_id = message.substitute_client_id);
        message.signer !== undefined && (obj.signer = message.signer);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgRecoverClient();
        message.subject_client_id = object.subject_client_id ?? "";
        message.substitute_client_id = object.substitute_client_id ?? "";
        message.signer = object.signer ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgRecoverClient();
        if (object.subject_client_id !== undefined && object.subject_client_id !== null) {
            message.subject_client_id = object.subject_client_id;
        }
        if (object.substitute_client_id !== undefined && object.substitute_client_id !== null) {
            message.substitute_client_id = object.substitute_client_id;
        }
        if (object.signer !== undefined && object.signer !== null) {
            message.signer = object.signer;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.subject_client_id = message.subject_client_id;
        obj.substitute_client_id = message.substitute_client_id;
        obj.signer = message.signer;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgRecoverClient.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgRecoverClient",
            value: MsgRecoverClient.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgRecoverClient.decode(message.value);
    },
    toProto(message) {
        return MsgRecoverClient.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.MsgRecoverClient",
            value: MsgRecoverClient.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgRecoverClient.typeUrl, MsgRecoverClient);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgRecoverClient.aminoType, MsgRecoverClient.typeUrl);
function createBaseMsgRecoverClientResponse() {
    return {};
}
export const MsgRecoverClientResponse = {
    typeUrl: "/ibc.core.client.v1.MsgRecoverClientResponse",
    aminoType: "cosmos-sdk/MsgRecoverClientResponse",
    is(o) {
        return o && o.$typeUrl === MsgRecoverClientResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === MsgRecoverClientResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === MsgRecoverClientResponse.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRecoverClientResponse();
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
        const message = createBaseMsgRecoverClientResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgRecoverClientResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgRecoverClientResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgRecoverClientResponse",
            value: MsgRecoverClientResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgRecoverClientResponse.decode(message.value);
    },
    toProto(message) {
        return MsgRecoverClientResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.MsgRecoverClientResponse",
            value: MsgRecoverClientResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgRecoverClientResponse.typeUrl, MsgRecoverClientResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgRecoverClientResponse.aminoType, MsgRecoverClientResponse.typeUrl);
function createBaseMsgIBCSoftwareUpgrade() {
    return {
        plan: Plan.fromPartial({}),
        upgraded_client_state: undefined,
        signer: ""
    };
}
export const MsgIBCSoftwareUpgrade = {
    typeUrl: "/ibc.core.client.v1.MsgIBCSoftwareUpgrade",
    aminoType: "cosmos-sdk/MsgIBCSoftwareUpgrade",
    is(o) {
        return o && (o.$typeUrl === MsgIBCSoftwareUpgrade.typeUrl || Plan.is(o.plan) && typeof o.signer === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === MsgIBCSoftwareUpgrade.typeUrl || Plan.isSDK(o.plan) && typeof o.signer === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === MsgIBCSoftwareUpgrade.typeUrl || Plan.isAmino(o.plan) && typeof o.signer === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.plan !== undefined) {
            Plan.encode(message.plan, writer.uint32(10).fork()).ldelim();
        }
        if (message.upgraded_client_state !== undefined) {
            Any.encode(message.upgraded_client_state, writer.uint32(18).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(26).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgIBCSoftwareUpgrade();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.plan = Plan.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.upgraded_client_state = Any.decode(reader, reader.uint32());
                    break;
                case 3:
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
            plan: isSet(object.plan) ? Plan.fromJSON(object.plan) : undefined,
            upgraded_client_state: isSet(object.upgraded_client_state) ? Any.fromJSON(object.upgraded_client_state) : undefined,
            signer: isSet(object.signer) ? String(object.signer) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.plan !== undefined && (obj.plan = message.plan ? Plan.toJSON(message.plan) : undefined);
        message.upgraded_client_state !== undefined && (obj.upgraded_client_state = message.upgraded_client_state ? Any.toJSON(message.upgraded_client_state) : undefined);
        message.signer !== undefined && (obj.signer = message.signer);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgIBCSoftwareUpgrade();
        message.plan = object.plan !== undefined && object.plan !== null ? Plan.fromPartial(object.plan) : undefined;
        message.upgraded_client_state = object.upgraded_client_state !== undefined && object.upgraded_client_state !== null ? Any.fromPartial(object.upgraded_client_state) : undefined;
        message.signer = object.signer ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgIBCSoftwareUpgrade();
        if (object.plan !== undefined && object.plan !== null) {
            message.plan = Plan.fromAmino(object.plan);
        }
        if (object.upgraded_client_state !== undefined && object.upgraded_client_state !== null) {
            message.upgraded_client_state = Any.fromAmino(object.upgraded_client_state);
        }
        if (object.signer !== undefined && object.signer !== null) {
            message.signer = object.signer;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.plan = message.plan ? Plan.toAmino(message.plan) : undefined;
        obj.upgraded_client_state = message.upgraded_client_state ? Any.toAmino(message.upgraded_client_state) : undefined;
        obj.signer = message.signer;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgIBCSoftwareUpgrade.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgIBCSoftwareUpgrade",
            value: MsgIBCSoftwareUpgrade.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgIBCSoftwareUpgrade.decode(message.value);
    },
    toProto(message) {
        return MsgIBCSoftwareUpgrade.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.MsgIBCSoftwareUpgrade",
            value: MsgIBCSoftwareUpgrade.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgIBCSoftwareUpgrade.typeUrl, MsgIBCSoftwareUpgrade);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgIBCSoftwareUpgrade.aminoType, MsgIBCSoftwareUpgrade.typeUrl);
function createBaseMsgIBCSoftwareUpgradeResponse() {
    return {};
}
export const MsgIBCSoftwareUpgradeResponse = {
    typeUrl: "/ibc.core.client.v1.MsgIBCSoftwareUpgradeResponse",
    aminoType: "cosmos-sdk/MsgIBCSoftwareUpgradeResponse",
    is(o) {
        return o && o.$typeUrl === MsgIBCSoftwareUpgradeResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === MsgIBCSoftwareUpgradeResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === MsgIBCSoftwareUpgradeResponse.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgIBCSoftwareUpgradeResponse();
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
        const message = createBaseMsgIBCSoftwareUpgradeResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgIBCSoftwareUpgradeResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgIBCSoftwareUpgradeResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgIBCSoftwareUpgradeResponse",
            value: MsgIBCSoftwareUpgradeResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgIBCSoftwareUpgradeResponse.decode(message.value);
    },
    toProto(message) {
        return MsgIBCSoftwareUpgradeResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.MsgIBCSoftwareUpgradeResponse",
            value: MsgIBCSoftwareUpgradeResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgIBCSoftwareUpgradeResponse.typeUrl, MsgIBCSoftwareUpgradeResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgIBCSoftwareUpgradeResponse.aminoType, MsgIBCSoftwareUpgradeResponse.typeUrl);
function createBaseMsgUpdateParams() {
    return {
        signer: "",
        params: Params.fromPartial({})
    };
}
export const MsgUpdateParams = {
    typeUrl: "/ibc.core.client.v1.MsgUpdateParams",
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
            typeUrl: "/ibc.core.client.v1.MsgUpdateParams",
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
    typeUrl: "/ibc.core.client.v1.MsgUpdateParamsResponse",
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
            typeUrl: "/ibc.core.client.v1.MsgUpdateParamsResponse",
            value: MsgUpdateParamsResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgUpdateParamsResponse.typeUrl, MsgUpdateParamsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUpdateParamsResponse.aminoType, MsgUpdateParamsResponse.typeUrl);
//# sourceMappingURL=tx.js.map
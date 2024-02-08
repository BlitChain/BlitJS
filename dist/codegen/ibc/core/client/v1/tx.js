"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgUpdateParamsResponse = exports.MsgUpdateParams = exports.MsgIBCSoftwareUpgradeResponse = exports.MsgIBCSoftwareUpgrade = exports.MsgRecoverClientResponse = exports.MsgRecoverClient = exports.MsgSubmitMisbehaviourResponse = exports.MsgSubmitMisbehaviour = exports.MsgUpgradeClientResponse = exports.MsgUpgradeClient = exports.MsgUpdateClientResponse = exports.MsgUpdateClient = exports.MsgCreateClientResponse = exports.MsgCreateClient = exports.protobufPackage = void 0;
//@ts-nocheck
const any_1 = require("../../../../google/protobuf/any");
const upgrade_1 = require("../../../../cosmos/upgrade/v1beta1/upgrade");
const client_1 = require("./client");
const binary_1 = require("../../../../binary");
const helpers_1 = require("../../../../helpers");
exports.protobufPackage = "ibc.core.client.v1";
function createBaseMsgCreateClient() {
    return {
        client_state: undefined,
        consensus_state: undefined,
        signer: ""
    };
}
exports.MsgCreateClient = {
    typeUrl: "/ibc.core.client.v1.MsgCreateClient",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.client_state !== undefined) {
            any_1.Any.encode(message.client_state, writer.uint32(10).fork()).ldelim();
        }
        if (message.consensus_state !== undefined) {
            any_1.Any.encode(message.consensus_state, writer.uint32(18).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(26).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateClient();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.client_state = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.consensus_state = any_1.Any.decode(reader, reader.uint32());
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
            client_state: (0, helpers_1.isSet)(object.client_state) ? any_1.Any.fromJSON(object.client_state) : undefined,
            consensus_state: (0, helpers_1.isSet)(object.consensus_state) ? any_1.Any.fromJSON(object.consensus_state) : undefined,
            signer: (0, helpers_1.isSet)(object.signer) ? String(object.signer) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.client_state !== undefined && (obj.client_state = message.client_state ? any_1.Any.toJSON(message.client_state) : undefined);
        message.consensus_state !== undefined && (obj.consensus_state = message.consensus_state ? any_1.Any.toJSON(message.consensus_state) : undefined);
        message.signer !== undefined && (obj.signer = message.signer);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateClient();
        message.client_state = object.client_state !== undefined && object.client_state !== null ? any_1.Any.fromPartial(object.client_state) : undefined;
        message.consensus_state = object.consensus_state !== undefined && object.consensus_state !== null ? any_1.Any.fromPartial(object.consensus_state) : undefined;
        message.signer = object.signer ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateClient();
        if (object.client_state !== undefined && object.client_state !== null) {
            message.client_state = any_1.Any.fromAmino(object.client_state);
        }
        if (object.consensus_state !== undefined && object.consensus_state !== null) {
            message.consensus_state = any_1.Any.fromAmino(object.consensus_state);
        }
        if (object.signer !== undefined && object.signer !== null) {
            message.signer = object.signer;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.client_state = message.client_state ? any_1.Any.toAmino(message.client_state) : undefined;
        obj.consensus_state = message.consensus_state ? any_1.Any.toAmino(message.consensus_state) : undefined;
        obj.signer = message.signer;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCreateClient.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgCreateClient",
            value: exports.MsgCreateClient.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgCreateClient.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreateClient.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.MsgCreateClient",
            value: exports.MsgCreateClient.encode(message).finish()
        };
    }
};
function createBaseMsgCreateClientResponse() {
    return {};
}
exports.MsgCreateClientResponse = {
    typeUrl: "/ibc.core.client.v1.MsgCreateClientResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgCreateClientResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgCreateClientResponse",
            value: exports.MsgCreateClientResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgCreateClientResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreateClientResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.MsgCreateClientResponse",
            value: exports.MsgCreateClientResponse.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateClient() {
    return {
        client_id: "",
        client_message: undefined,
        signer: ""
    };
}
exports.MsgUpdateClient = {
    typeUrl: "/ibc.core.client.v1.MsgUpdateClient",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.client_id !== "") {
            writer.uint32(10).string(message.client_id);
        }
        if (message.client_message !== undefined) {
            any_1.Any.encode(message.client_message, writer.uint32(18).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(26).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateClient();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.client_id = reader.string();
                    break;
                case 2:
                    message.client_message = any_1.Any.decode(reader, reader.uint32());
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
            client_id: (0, helpers_1.isSet)(object.client_id) ? String(object.client_id) : "",
            client_message: (0, helpers_1.isSet)(object.client_message) ? any_1.Any.fromJSON(object.client_message) : undefined,
            signer: (0, helpers_1.isSet)(object.signer) ? String(object.signer) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.client_id !== undefined && (obj.client_id = message.client_id);
        message.client_message !== undefined && (obj.client_message = message.client_message ? any_1.Any.toJSON(message.client_message) : undefined);
        message.signer !== undefined && (obj.signer = message.signer);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateClient();
        message.client_id = object.client_id ?? "";
        message.client_message = object.client_message !== undefined && object.client_message !== null ? any_1.Any.fromPartial(object.client_message) : undefined;
        message.signer = object.signer ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUpdateClient();
        if (object.client_id !== undefined && object.client_id !== null) {
            message.client_id = object.client_id;
        }
        if (object.client_message !== undefined && object.client_message !== null) {
            message.client_message = any_1.Any.fromAmino(object.client_message);
        }
        if (object.signer !== undefined && object.signer !== null) {
            message.signer = object.signer;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.client_id = message.client_id;
        obj.client_message = message.client_message ? any_1.Any.toAmino(message.client_message) : undefined;
        obj.signer = message.signer;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUpdateClient.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgUpdateClient",
            value: exports.MsgUpdateClient.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateClient.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateClient.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.MsgUpdateClient",
            value: exports.MsgUpdateClient.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateClientResponse() {
    return {};
}
exports.MsgUpdateClientResponse = {
    typeUrl: "/ibc.core.client.v1.MsgUpdateClientResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgUpdateClientResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgUpdateClientResponse",
            value: exports.MsgUpdateClientResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateClientResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateClientResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.MsgUpdateClientResponse",
            value: exports.MsgUpdateClientResponse.encode(message).finish()
        };
    }
};
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
exports.MsgUpgradeClient = {
    typeUrl: "/ibc.core.client.v1.MsgUpgradeClient",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.client_id !== "") {
            writer.uint32(10).string(message.client_id);
        }
        if (message.client_state !== undefined) {
            any_1.Any.encode(message.client_state, writer.uint32(18).fork()).ldelim();
        }
        if (message.consensus_state !== undefined) {
            any_1.Any.encode(message.consensus_state, writer.uint32(26).fork()).ldelim();
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
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpgradeClient();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.client_id = reader.string();
                    break;
                case 2:
                    message.client_state = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.consensus_state = any_1.Any.decode(reader, reader.uint32());
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
            client_id: (0, helpers_1.isSet)(object.client_id) ? String(object.client_id) : "",
            client_state: (0, helpers_1.isSet)(object.client_state) ? any_1.Any.fromJSON(object.client_state) : undefined,
            consensus_state: (0, helpers_1.isSet)(object.consensus_state) ? any_1.Any.fromJSON(object.consensus_state) : undefined,
            proof_upgrade_client: (0, helpers_1.isSet)(object.proof_upgrade_client) ? (0, helpers_1.bytesFromBase64)(object.proof_upgrade_client) : new Uint8Array(),
            proof_upgrade_consensus_state: (0, helpers_1.isSet)(object.proof_upgrade_consensus_state) ? (0, helpers_1.bytesFromBase64)(object.proof_upgrade_consensus_state) : new Uint8Array(),
            signer: (0, helpers_1.isSet)(object.signer) ? String(object.signer) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.client_id !== undefined && (obj.client_id = message.client_id);
        message.client_state !== undefined && (obj.client_state = message.client_state ? any_1.Any.toJSON(message.client_state) : undefined);
        message.consensus_state !== undefined && (obj.consensus_state = message.consensus_state ? any_1.Any.toJSON(message.consensus_state) : undefined);
        message.proof_upgrade_client !== undefined && (obj.proof_upgrade_client = (0, helpers_1.base64FromBytes)(message.proof_upgrade_client !== undefined ? message.proof_upgrade_client : new Uint8Array()));
        message.proof_upgrade_consensus_state !== undefined && (obj.proof_upgrade_consensus_state = (0, helpers_1.base64FromBytes)(message.proof_upgrade_consensus_state !== undefined ? message.proof_upgrade_consensus_state : new Uint8Array()));
        message.signer !== undefined && (obj.signer = message.signer);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgUpgradeClient();
        message.client_id = object.client_id ?? "";
        message.client_state = object.client_state !== undefined && object.client_state !== null ? any_1.Any.fromPartial(object.client_state) : undefined;
        message.consensus_state = object.consensus_state !== undefined && object.consensus_state !== null ? any_1.Any.fromPartial(object.consensus_state) : undefined;
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
            message.client_state = any_1.Any.fromAmino(object.client_state);
        }
        if (object.consensus_state !== undefined && object.consensus_state !== null) {
            message.consensus_state = any_1.Any.fromAmino(object.consensus_state);
        }
        if (object.proof_upgrade_client !== undefined && object.proof_upgrade_client !== null) {
            message.proof_upgrade_client = (0, helpers_1.bytesFromBase64)(object.proof_upgrade_client);
        }
        if (object.proof_upgrade_consensus_state !== undefined && object.proof_upgrade_consensus_state !== null) {
            message.proof_upgrade_consensus_state = (0, helpers_1.bytesFromBase64)(object.proof_upgrade_consensus_state);
        }
        if (object.signer !== undefined && object.signer !== null) {
            message.signer = object.signer;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.client_id = message.client_id;
        obj.client_state = message.client_state ? any_1.Any.toAmino(message.client_state) : undefined;
        obj.consensus_state = message.consensus_state ? any_1.Any.toAmino(message.consensus_state) : undefined;
        obj.proof_upgrade_client = message.proof_upgrade_client ? (0, helpers_1.base64FromBytes)(message.proof_upgrade_client) : undefined;
        obj.proof_upgrade_consensus_state = message.proof_upgrade_consensus_state ? (0, helpers_1.base64FromBytes)(message.proof_upgrade_consensus_state) : undefined;
        obj.signer = message.signer;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUpgradeClient.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgUpgradeClient",
            value: exports.MsgUpgradeClient.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgUpgradeClient.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpgradeClient.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.MsgUpgradeClient",
            value: exports.MsgUpgradeClient.encode(message).finish()
        };
    }
};
function createBaseMsgUpgradeClientResponse() {
    return {};
}
exports.MsgUpgradeClientResponse = {
    typeUrl: "/ibc.core.client.v1.MsgUpgradeClientResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgUpgradeClientResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgUpgradeClientResponse",
            value: exports.MsgUpgradeClientResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgUpgradeClientResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpgradeClientResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.MsgUpgradeClientResponse",
            value: exports.MsgUpgradeClientResponse.encode(message).finish()
        };
    }
};
function createBaseMsgSubmitMisbehaviour() {
    return {
        client_id: "",
        misbehaviour: undefined,
        signer: ""
    };
}
exports.MsgSubmitMisbehaviour = {
    typeUrl: "/ibc.core.client.v1.MsgSubmitMisbehaviour",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.client_id !== "") {
            writer.uint32(10).string(message.client_id);
        }
        if (message.misbehaviour !== undefined) {
            any_1.Any.encode(message.misbehaviour, writer.uint32(18).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(26).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSubmitMisbehaviour();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.client_id = reader.string();
                    break;
                case 2:
                    message.misbehaviour = any_1.Any.decode(reader, reader.uint32());
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
            client_id: (0, helpers_1.isSet)(object.client_id) ? String(object.client_id) : "",
            misbehaviour: (0, helpers_1.isSet)(object.misbehaviour) ? any_1.Any.fromJSON(object.misbehaviour) : undefined,
            signer: (0, helpers_1.isSet)(object.signer) ? String(object.signer) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.client_id !== undefined && (obj.client_id = message.client_id);
        message.misbehaviour !== undefined && (obj.misbehaviour = message.misbehaviour ? any_1.Any.toJSON(message.misbehaviour) : undefined);
        message.signer !== undefined && (obj.signer = message.signer);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSubmitMisbehaviour();
        message.client_id = object.client_id ?? "";
        message.misbehaviour = object.misbehaviour !== undefined && object.misbehaviour !== null ? any_1.Any.fromPartial(object.misbehaviour) : undefined;
        message.signer = object.signer ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgSubmitMisbehaviour();
        if (object.client_id !== undefined && object.client_id !== null) {
            message.client_id = object.client_id;
        }
        if (object.misbehaviour !== undefined && object.misbehaviour !== null) {
            message.misbehaviour = any_1.Any.fromAmino(object.misbehaviour);
        }
        if (object.signer !== undefined && object.signer !== null) {
            message.signer = object.signer;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.client_id = message.client_id;
        obj.misbehaviour = message.misbehaviour ? any_1.Any.toAmino(message.misbehaviour) : undefined;
        obj.signer = message.signer;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSubmitMisbehaviour.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgSubmitMisbehaviour",
            value: exports.MsgSubmitMisbehaviour.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgSubmitMisbehaviour.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSubmitMisbehaviour.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.MsgSubmitMisbehaviour",
            value: exports.MsgSubmitMisbehaviour.encode(message).finish()
        };
    }
};
function createBaseMsgSubmitMisbehaviourResponse() {
    return {};
}
exports.MsgSubmitMisbehaviourResponse = {
    typeUrl: "/ibc.core.client.v1.MsgSubmitMisbehaviourResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgSubmitMisbehaviourResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgSubmitMisbehaviourResponse",
            value: exports.MsgSubmitMisbehaviourResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgSubmitMisbehaviourResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSubmitMisbehaviourResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.MsgSubmitMisbehaviourResponse",
            value: exports.MsgSubmitMisbehaviourResponse.encode(message).finish()
        };
    }
};
function createBaseMsgRecoverClient() {
    return {
        subject_client_id: "",
        substitute_client_id: "",
        signer: ""
    };
}
exports.MsgRecoverClient = {
    typeUrl: "/ibc.core.client.v1.MsgRecoverClient",
    encode(message, writer = binary_1.BinaryWriter.create()) {
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
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
            subject_client_id: (0, helpers_1.isSet)(object.subject_client_id) ? String(object.subject_client_id) : "",
            substitute_client_id: (0, helpers_1.isSet)(object.substitute_client_id) ? String(object.substitute_client_id) : "",
            signer: (0, helpers_1.isSet)(object.signer) ? String(object.signer) : ""
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
        return exports.MsgRecoverClient.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgRecoverClient",
            value: exports.MsgRecoverClient.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgRecoverClient.decode(message.value);
    },
    toProto(message) {
        return exports.MsgRecoverClient.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.MsgRecoverClient",
            value: exports.MsgRecoverClient.encode(message).finish()
        };
    }
};
function createBaseMsgRecoverClientResponse() {
    return {};
}
exports.MsgRecoverClientResponse = {
    typeUrl: "/ibc.core.client.v1.MsgRecoverClientResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgRecoverClientResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgRecoverClientResponse",
            value: exports.MsgRecoverClientResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgRecoverClientResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgRecoverClientResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.MsgRecoverClientResponse",
            value: exports.MsgRecoverClientResponse.encode(message).finish()
        };
    }
};
function createBaseMsgIBCSoftwareUpgrade() {
    return {
        plan: upgrade_1.Plan.fromPartial({}),
        upgraded_client_state: undefined,
        signer: ""
    };
}
exports.MsgIBCSoftwareUpgrade = {
    typeUrl: "/ibc.core.client.v1.MsgIBCSoftwareUpgrade",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.plan !== undefined) {
            upgrade_1.Plan.encode(message.plan, writer.uint32(10).fork()).ldelim();
        }
        if (message.upgraded_client_state !== undefined) {
            any_1.Any.encode(message.upgraded_client_state, writer.uint32(18).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(26).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgIBCSoftwareUpgrade();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.plan = upgrade_1.Plan.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.upgraded_client_state = any_1.Any.decode(reader, reader.uint32());
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
            plan: (0, helpers_1.isSet)(object.plan) ? upgrade_1.Plan.fromJSON(object.plan) : undefined,
            upgraded_client_state: (0, helpers_1.isSet)(object.upgraded_client_state) ? any_1.Any.fromJSON(object.upgraded_client_state) : undefined,
            signer: (0, helpers_1.isSet)(object.signer) ? String(object.signer) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.plan !== undefined && (obj.plan = message.plan ? upgrade_1.Plan.toJSON(message.plan) : undefined);
        message.upgraded_client_state !== undefined && (obj.upgraded_client_state = message.upgraded_client_state ? any_1.Any.toJSON(message.upgraded_client_state) : undefined);
        message.signer !== undefined && (obj.signer = message.signer);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgIBCSoftwareUpgrade();
        message.plan = object.plan !== undefined && object.plan !== null ? upgrade_1.Plan.fromPartial(object.plan) : undefined;
        message.upgraded_client_state = object.upgraded_client_state !== undefined && object.upgraded_client_state !== null ? any_1.Any.fromPartial(object.upgraded_client_state) : undefined;
        message.signer = object.signer ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgIBCSoftwareUpgrade();
        if (object.plan !== undefined && object.plan !== null) {
            message.plan = upgrade_1.Plan.fromAmino(object.plan);
        }
        if (object.upgraded_client_state !== undefined && object.upgraded_client_state !== null) {
            message.upgraded_client_state = any_1.Any.fromAmino(object.upgraded_client_state);
        }
        if (object.signer !== undefined && object.signer !== null) {
            message.signer = object.signer;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.plan = message.plan ? upgrade_1.Plan.toAmino(message.plan) : undefined;
        obj.upgraded_client_state = message.upgraded_client_state ? any_1.Any.toAmino(message.upgraded_client_state) : undefined;
        obj.signer = message.signer;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgIBCSoftwareUpgrade.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgIBCSoftwareUpgrade",
            value: exports.MsgIBCSoftwareUpgrade.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgIBCSoftwareUpgrade.decode(message.value);
    },
    toProto(message) {
        return exports.MsgIBCSoftwareUpgrade.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.MsgIBCSoftwareUpgrade",
            value: exports.MsgIBCSoftwareUpgrade.encode(message).finish()
        };
    }
};
function createBaseMsgIBCSoftwareUpgradeResponse() {
    return {};
}
exports.MsgIBCSoftwareUpgradeResponse = {
    typeUrl: "/ibc.core.client.v1.MsgIBCSoftwareUpgradeResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.MsgIBCSoftwareUpgradeResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgIBCSoftwareUpgradeResponse",
            value: exports.MsgIBCSoftwareUpgradeResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgIBCSoftwareUpgradeResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgIBCSoftwareUpgradeResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.MsgIBCSoftwareUpgradeResponse",
            value: exports.MsgIBCSoftwareUpgradeResponse.encode(message).finish()
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
    typeUrl: "/ibc.core.client.v1.MsgUpdateParams",
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
        const message = createBaseMsgUpdateParams();
        if (object.signer !== undefined && object.signer !== null) {
            message.signer = object.signer;
        }
        if (object.params !== undefined && object.params !== null) {
            message.params = client_1.Params.fromAmino(object.params);
        }
        return message;
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
            typeUrl: "/ibc.core.client.v1.MsgUpdateParams",
            value: exports.MsgUpdateParams.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateParamsResponse() {
    return {};
}
exports.MsgUpdateParamsResponse = {
    typeUrl: "/ibc.core.client.v1.MsgUpdateParamsResponse",
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
        const message = createBaseMsgUpdateParamsResponse();
        return message;
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
            typeUrl: "/ibc.core.client.v1.MsgUpdateParamsResponse",
            value: exports.MsgUpdateParamsResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=tx.js.map
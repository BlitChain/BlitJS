"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeaderData = exports.SignBytes = exports.TimestampedSignatureData = exports.SignatureAndData = exports.Misbehaviour = exports.Header = exports.ConsensusState = exports.ClientState = exports.protobufPackage = void 0;
//@ts-nocheck
const any_1 = require("../../../../google/protobuf/any");
const binary_1 = require("../../../../binary");
const helpers_1 = require("../../../../helpers");
exports.protobufPackage = "ibc.lightclients.solomachine.v3";
function createBaseClientState() {
    return {
        sequence: BigInt(0),
        is_frozen: false,
        consensus_state: undefined
    };
}
exports.ClientState = {
    typeUrl: "/ibc.lightclients.solomachine.v3.ClientState",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sequence !== BigInt(0)) {
            writer.uint32(8).uint64(message.sequence);
        }
        if (message.is_frozen === true) {
            writer.uint32(16).bool(message.is_frozen);
        }
        if (message.consensus_state !== undefined) {
            exports.ConsensusState.encode(message.consensus_state, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseClientState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sequence = reader.uint64();
                    break;
                case 2:
                    message.is_frozen = reader.bool();
                    break;
                case 3:
                    message.consensus_state = exports.ConsensusState.decode(reader, reader.uint32());
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
            sequence: (0, helpers_1.isSet)(object.sequence) ? BigInt(object.sequence.toString()) : BigInt(0),
            is_frozen: (0, helpers_1.isSet)(object.is_frozen) ? Boolean(object.is_frozen) : false,
            consensus_state: (0, helpers_1.isSet)(object.consensus_state) ? exports.ConsensusState.fromJSON(object.consensus_state) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.sequence !== undefined && (obj.sequence = (message.sequence || BigInt(0)).toString());
        message.is_frozen !== undefined && (obj.is_frozen = message.is_frozen);
        message.consensus_state !== undefined && (obj.consensus_state = message.consensus_state ? exports.ConsensusState.toJSON(message.consensus_state) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseClientState();
        message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
        message.is_frozen = object.is_frozen ?? false;
        message.consensus_state = object.consensus_state !== undefined && object.consensus_state !== null ? exports.ConsensusState.fromPartial(object.consensus_state) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            sequence: object?.sequence,
            is_frozen: object?.is_frozen,
            consensus_state: object.consensus_state ? exports.ConsensusState.fromSDK(object.consensus_state) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.sequence = message.sequence;
        obj.is_frozen = message.is_frozen;
        message.consensus_state !== undefined && (obj.consensus_state = message.consensus_state ? exports.ConsensusState.toSDK(message.consensus_state) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            sequence: BigInt(object.sequence),
            is_frozen: object.is_frozen,
            consensus_state: object?.consensus_state ? exports.ConsensusState.fromAmino(object.consensus_state) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.sequence = message.sequence ? message.sequence.toString() : undefined;
        obj.is_frozen = message.is_frozen;
        obj.consensus_state = message.consensus_state ? exports.ConsensusState.toAmino(message.consensus_state) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ClientState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ClientState",
            value: exports.ClientState.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ClientState.decode(message.value);
    },
    toProto(message) {
        return exports.ClientState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.solomachine.v3.ClientState",
            value: exports.ClientState.encode(message).finish()
        };
    }
};
function createBaseConsensusState() {
    return {
        public_key: undefined,
        diversifier: "",
        timestamp: BigInt(0)
    };
}
exports.ConsensusState = {
    typeUrl: "/ibc.lightclients.solomachine.v3.ConsensusState",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.public_key !== undefined) {
            any_1.Any.encode(message.public_key, writer.uint32(10).fork()).ldelim();
        }
        if (message.diversifier !== "") {
            writer.uint32(18).string(message.diversifier);
        }
        if (message.timestamp !== BigInt(0)) {
            writer.uint32(24).uint64(message.timestamp);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConsensusState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.public_key = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.diversifier = reader.string();
                    break;
                case 3:
                    message.timestamp = reader.uint64();
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
            public_key: (0, helpers_1.isSet)(object.public_key) ? any_1.Any.fromJSON(object.public_key) : undefined,
            diversifier: (0, helpers_1.isSet)(object.diversifier) ? String(object.diversifier) : "",
            timestamp: (0, helpers_1.isSet)(object.timestamp) ? BigInt(object.timestamp.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.public_key !== undefined && (obj.public_key = message.public_key ? any_1.Any.toJSON(message.public_key) : undefined);
        message.diversifier !== undefined && (obj.diversifier = message.diversifier);
        message.timestamp !== undefined && (obj.timestamp = (message.timestamp || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseConsensusState();
        message.public_key = object.public_key !== undefined && object.public_key !== null ? any_1.Any.fromPartial(object.public_key) : undefined;
        message.diversifier = object.diversifier ?? "";
        message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? BigInt(object.timestamp.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            public_key: object.public_key ? any_1.Any.fromSDK(object.public_key) : undefined,
            diversifier: object?.diversifier,
            timestamp: object?.timestamp
        };
    },
    toSDK(message) {
        const obj = {};
        message.public_key !== undefined && (obj.public_key = message.public_key ? any_1.Any.toSDK(message.public_key) : undefined);
        obj.diversifier = message.diversifier;
        obj.timestamp = message.timestamp;
        return obj;
    },
    fromAmino(object) {
        return {
            public_key: object?.public_key ? any_1.Any.fromAmino(object.public_key) : undefined,
            diversifier: object.diversifier,
            timestamp: BigInt(object.timestamp)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.public_key = message.public_key ? any_1.Any.toAmino(message.public_key) : undefined;
        obj.diversifier = message.diversifier;
        obj.timestamp = message.timestamp ? message.timestamp.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ConsensusState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ConsensusState",
            value: exports.ConsensusState.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ConsensusState.decode(message.value);
    },
    toProto(message) {
        return exports.ConsensusState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.solomachine.v3.ConsensusState",
            value: exports.ConsensusState.encode(message).finish()
        };
    }
};
function createBaseHeader() {
    return {
        timestamp: BigInt(0),
        signature: new Uint8Array(),
        new_public_key: undefined,
        new_diversifier: ""
    };
}
exports.Header = {
    typeUrl: "/ibc.lightclients.solomachine.v3.Header",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.timestamp !== BigInt(0)) {
            writer.uint32(8).uint64(message.timestamp);
        }
        if (message.signature.length !== 0) {
            writer.uint32(18).bytes(message.signature);
        }
        if (message.new_public_key !== undefined) {
            any_1.Any.encode(message.new_public_key, writer.uint32(26).fork()).ldelim();
        }
        if (message.new_diversifier !== "") {
            writer.uint32(34).string(message.new_diversifier);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseHeader();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.timestamp = reader.uint64();
                    break;
                case 2:
                    message.signature = reader.bytes();
                    break;
                case 3:
                    message.new_public_key = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.new_diversifier = reader.string();
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
            timestamp: (0, helpers_1.isSet)(object.timestamp) ? BigInt(object.timestamp.toString()) : BigInt(0),
            signature: (0, helpers_1.isSet)(object.signature) ? (0, helpers_1.bytesFromBase64)(object.signature) : new Uint8Array(),
            new_public_key: (0, helpers_1.isSet)(object.new_public_key) ? any_1.Any.fromJSON(object.new_public_key) : undefined,
            new_diversifier: (0, helpers_1.isSet)(object.new_diversifier) ? String(object.new_diversifier) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.timestamp !== undefined && (obj.timestamp = (message.timestamp || BigInt(0)).toString());
        message.signature !== undefined && (obj.signature = (0, helpers_1.base64FromBytes)(message.signature !== undefined ? message.signature : new Uint8Array()));
        message.new_public_key !== undefined && (obj.new_public_key = message.new_public_key ? any_1.Any.toJSON(message.new_public_key) : undefined);
        message.new_diversifier !== undefined && (obj.new_diversifier = message.new_diversifier);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseHeader();
        message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? BigInt(object.timestamp.toString()) : BigInt(0);
        message.signature = object.signature ?? new Uint8Array();
        message.new_public_key = object.new_public_key !== undefined && object.new_public_key !== null ? any_1.Any.fromPartial(object.new_public_key) : undefined;
        message.new_diversifier = object.new_diversifier ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            timestamp: object?.timestamp,
            signature: object?.signature,
            new_public_key: object.new_public_key ? any_1.Any.fromSDK(object.new_public_key) : undefined,
            new_diversifier: object?.new_diversifier
        };
    },
    toSDK(message) {
        const obj = {};
        obj.timestamp = message.timestamp;
        obj.signature = message.signature;
        message.new_public_key !== undefined && (obj.new_public_key = message.new_public_key ? any_1.Any.toSDK(message.new_public_key) : undefined);
        obj.new_diversifier = message.new_diversifier;
        return obj;
    },
    fromAmino(object) {
        return {
            timestamp: BigInt(object.timestamp),
            signature: object.signature,
            new_public_key: object?.new_public_key ? any_1.Any.fromAmino(object.new_public_key) : undefined,
            new_diversifier: object.new_diversifier
        };
    },
    toAmino(message) {
        const obj = {};
        obj.timestamp = message.timestamp ? message.timestamp.toString() : undefined;
        obj.signature = message.signature;
        obj.new_public_key = message.new_public_key ? any_1.Any.toAmino(message.new_public_key) : undefined;
        obj.new_diversifier = message.new_diversifier;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Header.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Header",
            value: exports.Header.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Header.decode(message.value);
    },
    toProto(message) {
        return exports.Header.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.solomachine.v3.Header",
            value: exports.Header.encode(message).finish()
        };
    }
};
function createBaseMisbehaviour() {
    return {
        sequence: BigInt(0),
        signature_one: undefined,
        signature_two: undefined
    };
}
exports.Misbehaviour = {
    typeUrl: "/ibc.lightclients.solomachine.v3.Misbehaviour",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sequence !== BigInt(0)) {
            writer.uint32(8).uint64(message.sequence);
        }
        if (message.signature_one !== undefined) {
            exports.SignatureAndData.encode(message.signature_one, writer.uint32(18).fork()).ldelim();
        }
        if (message.signature_two !== undefined) {
            exports.SignatureAndData.encode(message.signature_two, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMisbehaviour();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sequence = reader.uint64();
                    break;
                case 2:
                    message.signature_one = exports.SignatureAndData.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.signature_two = exports.SignatureAndData.decode(reader, reader.uint32());
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
            sequence: (0, helpers_1.isSet)(object.sequence) ? BigInt(object.sequence.toString()) : BigInt(0),
            signature_one: (0, helpers_1.isSet)(object.signature_one) ? exports.SignatureAndData.fromJSON(object.signature_one) : undefined,
            signature_two: (0, helpers_1.isSet)(object.signature_two) ? exports.SignatureAndData.fromJSON(object.signature_two) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.sequence !== undefined && (obj.sequence = (message.sequence || BigInt(0)).toString());
        message.signature_one !== undefined && (obj.signature_one = message.signature_one ? exports.SignatureAndData.toJSON(message.signature_one) : undefined);
        message.signature_two !== undefined && (obj.signature_two = message.signature_two ? exports.SignatureAndData.toJSON(message.signature_two) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMisbehaviour();
        message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
        message.signature_one = object.signature_one !== undefined && object.signature_one !== null ? exports.SignatureAndData.fromPartial(object.signature_one) : undefined;
        message.signature_two = object.signature_two !== undefined && object.signature_two !== null ? exports.SignatureAndData.fromPartial(object.signature_two) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            sequence: object?.sequence,
            signature_one: object.signature_one ? exports.SignatureAndData.fromSDK(object.signature_one) : undefined,
            signature_two: object.signature_two ? exports.SignatureAndData.fromSDK(object.signature_two) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.sequence = message.sequence;
        message.signature_one !== undefined && (obj.signature_one = message.signature_one ? exports.SignatureAndData.toSDK(message.signature_one) : undefined);
        message.signature_two !== undefined && (obj.signature_two = message.signature_two ? exports.SignatureAndData.toSDK(message.signature_two) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            sequence: BigInt(object.sequence),
            signature_one: object?.signature_one ? exports.SignatureAndData.fromAmino(object.signature_one) : undefined,
            signature_two: object?.signature_two ? exports.SignatureAndData.fromAmino(object.signature_two) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.sequence = message.sequence ? message.sequence.toString() : undefined;
        obj.signature_one = message.signature_one ? exports.SignatureAndData.toAmino(message.signature_one) : undefined;
        obj.signature_two = message.signature_two ? exports.SignatureAndData.toAmino(message.signature_two) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Misbehaviour.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Misbehaviour",
            value: exports.Misbehaviour.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Misbehaviour.decode(message.value);
    },
    toProto(message) {
        return exports.Misbehaviour.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.solomachine.v3.Misbehaviour",
            value: exports.Misbehaviour.encode(message).finish()
        };
    }
};
function createBaseSignatureAndData() {
    return {
        signature: new Uint8Array(),
        path: new Uint8Array(),
        data: new Uint8Array(),
        timestamp: BigInt(0)
    };
}
exports.SignatureAndData = {
    typeUrl: "/ibc.lightclients.solomachine.v3.SignatureAndData",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.signature.length !== 0) {
            writer.uint32(10).bytes(message.signature);
        }
        if (message.path.length !== 0) {
            writer.uint32(18).bytes(message.path);
        }
        if (message.data.length !== 0) {
            writer.uint32(26).bytes(message.data);
        }
        if (message.timestamp !== BigInt(0)) {
            writer.uint32(32).uint64(message.timestamp);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSignatureAndData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.signature = reader.bytes();
                    break;
                case 2:
                    message.path = reader.bytes();
                    break;
                case 3:
                    message.data = reader.bytes();
                    break;
                case 4:
                    message.timestamp = reader.uint64();
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
            signature: (0, helpers_1.isSet)(object.signature) ? (0, helpers_1.bytesFromBase64)(object.signature) : new Uint8Array(),
            path: (0, helpers_1.isSet)(object.path) ? (0, helpers_1.bytesFromBase64)(object.path) : new Uint8Array(),
            data: (0, helpers_1.isSet)(object.data) ? (0, helpers_1.bytesFromBase64)(object.data) : new Uint8Array(),
            timestamp: (0, helpers_1.isSet)(object.timestamp) ? BigInt(object.timestamp.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.signature !== undefined && (obj.signature = (0, helpers_1.base64FromBytes)(message.signature !== undefined ? message.signature : new Uint8Array()));
        message.path !== undefined && (obj.path = (0, helpers_1.base64FromBytes)(message.path !== undefined ? message.path : new Uint8Array()));
        message.data !== undefined && (obj.data = (0, helpers_1.base64FromBytes)(message.data !== undefined ? message.data : new Uint8Array()));
        message.timestamp !== undefined && (obj.timestamp = (message.timestamp || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSignatureAndData();
        message.signature = object.signature ?? new Uint8Array();
        message.path = object.path ?? new Uint8Array();
        message.data = object.data ?? new Uint8Array();
        message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? BigInt(object.timestamp.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            signature: object?.signature,
            path: object?.path,
            data: object?.data,
            timestamp: object?.timestamp
        };
    },
    toSDK(message) {
        const obj = {};
        obj.signature = message.signature;
        obj.path = message.path;
        obj.data = message.data;
        obj.timestamp = message.timestamp;
        return obj;
    },
    fromAmino(object) {
        return {
            signature: object.signature,
            path: object.path,
            data: object.data,
            timestamp: BigInt(object.timestamp)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.signature = message.signature;
        obj.path = message.path;
        obj.data = message.data;
        obj.timestamp = message.timestamp ? message.timestamp.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SignatureAndData.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/SignatureAndData",
            value: exports.SignatureAndData.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.SignatureAndData.decode(message.value);
    },
    toProto(message) {
        return exports.SignatureAndData.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.solomachine.v3.SignatureAndData",
            value: exports.SignatureAndData.encode(message).finish()
        };
    }
};
function createBaseTimestampedSignatureData() {
    return {
        signature_data: new Uint8Array(),
        timestamp: BigInt(0)
    };
}
exports.TimestampedSignatureData = {
    typeUrl: "/ibc.lightclients.solomachine.v3.TimestampedSignatureData",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.signature_data.length !== 0) {
            writer.uint32(10).bytes(message.signature_data);
        }
        if (message.timestamp !== BigInt(0)) {
            writer.uint32(16).uint64(message.timestamp);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTimestampedSignatureData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.signature_data = reader.bytes();
                    break;
                case 2:
                    message.timestamp = reader.uint64();
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
            signature_data: (0, helpers_1.isSet)(object.signature_data) ? (0, helpers_1.bytesFromBase64)(object.signature_data) : new Uint8Array(),
            timestamp: (0, helpers_1.isSet)(object.timestamp) ? BigInt(object.timestamp.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.signature_data !== undefined && (obj.signature_data = (0, helpers_1.base64FromBytes)(message.signature_data !== undefined ? message.signature_data : new Uint8Array()));
        message.timestamp !== undefined && (obj.timestamp = (message.timestamp || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTimestampedSignatureData();
        message.signature_data = object.signature_data ?? new Uint8Array();
        message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? BigInt(object.timestamp.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            signature_data: object?.signature_data,
            timestamp: object?.timestamp
        };
    },
    toSDK(message) {
        const obj = {};
        obj.signature_data = message.signature_data;
        obj.timestamp = message.timestamp;
        return obj;
    },
    fromAmino(object) {
        return {
            signature_data: object.signature_data,
            timestamp: BigInt(object.timestamp)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.signature_data = message.signature_data;
        obj.timestamp = message.timestamp ? message.timestamp.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.TimestampedSignatureData.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/TimestampedSignatureData",
            value: exports.TimestampedSignatureData.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.TimestampedSignatureData.decode(message.value);
    },
    toProto(message) {
        return exports.TimestampedSignatureData.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.solomachine.v3.TimestampedSignatureData",
            value: exports.TimestampedSignatureData.encode(message).finish()
        };
    }
};
function createBaseSignBytes() {
    return {
        sequence: BigInt(0),
        timestamp: BigInt(0),
        diversifier: "",
        path: new Uint8Array(),
        data: new Uint8Array()
    };
}
exports.SignBytes = {
    typeUrl: "/ibc.lightclients.solomachine.v3.SignBytes",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sequence !== BigInt(0)) {
            writer.uint32(8).uint64(message.sequence);
        }
        if (message.timestamp !== BigInt(0)) {
            writer.uint32(16).uint64(message.timestamp);
        }
        if (message.diversifier !== "") {
            writer.uint32(26).string(message.diversifier);
        }
        if (message.path.length !== 0) {
            writer.uint32(34).bytes(message.path);
        }
        if (message.data.length !== 0) {
            writer.uint32(42).bytes(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSignBytes();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sequence = reader.uint64();
                    break;
                case 2:
                    message.timestamp = reader.uint64();
                    break;
                case 3:
                    message.diversifier = reader.string();
                    break;
                case 4:
                    message.path = reader.bytes();
                    break;
                case 5:
                    message.data = reader.bytes();
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
            sequence: (0, helpers_1.isSet)(object.sequence) ? BigInt(object.sequence.toString()) : BigInt(0),
            timestamp: (0, helpers_1.isSet)(object.timestamp) ? BigInt(object.timestamp.toString()) : BigInt(0),
            diversifier: (0, helpers_1.isSet)(object.diversifier) ? String(object.diversifier) : "",
            path: (0, helpers_1.isSet)(object.path) ? (0, helpers_1.bytesFromBase64)(object.path) : new Uint8Array(),
            data: (0, helpers_1.isSet)(object.data) ? (0, helpers_1.bytesFromBase64)(object.data) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.sequence !== undefined && (obj.sequence = (message.sequence || BigInt(0)).toString());
        message.timestamp !== undefined && (obj.timestamp = (message.timestamp || BigInt(0)).toString());
        message.diversifier !== undefined && (obj.diversifier = message.diversifier);
        message.path !== undefined && (obj.path = (0, helpers_1.base64FromBytes)(message.path !== undefined ? message.path : new Uint8Array()));
        message.data !== undefined && (obj.data = (0, helpers_1.base64FromBytes)(message.data !== undefined ? message.data : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSignBytes();
        message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
        message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? BigInt(object.timestamp.toString()) : BigInt(0);
        message.diversifier = object.diversifier ?? "";
        message.path = object.path ?? new Uint8Array();
        message.data = object.data ?? new Uint8Array();
        return message;
    },
    fromSDK(object) {
        return {
            sequence: object?.sequence,
            timestamp: object?.timestamp,
            diversifier: object?.diversifier,
            path: object?.path,
            data: object?.data
        };
    },
    toSDK(message) {
        const obj = {};
        obj.sequence = message.sequence;
        obj.timestamp = message.timestamp;
        obj.diversifier = message.diversifier;
        obj.path = message.path;
        obj.data = message.data;
        return obj;
    },
    fromAmino(object) {
        return {
            sequence: BigInt(object.sequence),
            timestamp: BigInt(object.timestamp),
            diversifier: object.diversifier,
            path: object.path,
            data: object.data
        };
    },
    toAmino(message) {
        const obj = {};
        obj.sequence = message.sequence ? message.sequence.toString() : undefined;
        obj.timestamp = message.timestamp ? message.timestamp.toString() : undefined;
        obj.diversifier = message.diversifier;
        obj.path = message.path;
        obj.data = message.data;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SignBytes.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/SignBytes",
            value: exports.SignBytes.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.SignBytes.decode(message.value);
    },
    toProto(message) {
        return exports.SignBytes.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.solomachine.v3.SignBytes",
            value: exports.SignBytes.encode(message).finish()
        };
    }
};
function createBaseHeaderData() {
    return {
        new_pub_key: undefined,
        new_diversifier: ""
    };
}
exports.HeaderData = {
    typeUrl: "/ibc.lightclients.solomachine.v3.HeaderData",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.new_pub_key !== undefined) {
            any_1.Any.encode(message.new_pub_key, writer.uint32(10).fork()).ldelim();
        }
        if (message.new_diversifier !== "") {
            writer.uint32(18).string(message.new_diversifier);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseHeaderData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.new_pub_key = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.new_diversifier = reader.string();
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
            new_pub_key: (0, helpers_1.isSet)(object.new_pub_key) ? any_1.Any.fromJSON(object.new_pub_key) : undefined,
            new_diversifier: (0, helpers_1.isSet)(object.new_diversifier) ? String(object.new_diversifier) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.new_pub_key !== undefined && (obj.new_pub_key = message.new_pub_key ? any_1.Any.toJSON(message.new_pub_key) : undefined);
        message.new_diversifier !== undefined && (obj.new_diversifier = message.new_diversifier);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseHeaderData();
        message.new_pub_key = object.new_pub_key !== undefined && object.new_pub_key !== null ? any_1.Any.fromPartial(object.new_pub_key) : undefined;
        message.new_diversifier = object.new_diversifier ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            new_pub_key: object.new_pub_key ? any_1.Any.fromSDK(object.new_pub_key) : undefined,
            new_diversifier: object?.new_diversifier
        };
    },
    toSDK(message) {
        const obj = {};
        message.new_pub_key !== undefined && (obj.new_pub_key = message.new_pub_key ? any_1.Any.toSDK(message.new_pub_key) : undefined);
        obj.new_diversifier = message.new_diversifier;
        return obj;
    },
    fromAmino(object) {
        return {
            new_pub_key: object?.new_pub_key ? any_1.Any.fromAmino(object.new_pub_key) : undefined,
            new_diversifier: object.new_diversifier
        };
    },
    toAmino(message) {
        const obj = {};
        obj.new_pub_key = message.new_pub_key ? any_1.Any.toAmino(message.new_pub_key) : undefined;
        obj.new_diversifier = message.new_diversifier;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.HeaderData.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/HeaderData",
            value: exports.HeaderData.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.HeaderData.decode(message.value);
    },
    toProto(message) {
        return exports.HeaderData.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.solomachine.v3.HeaderData",
            value: exports.HeaderData.encode(message).finish()
        };
    }
};
//# sourceMappingURL=solomachine.js.map
//@ts-nocheck
import { Any } from "../../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../../helpers";
export const protobufPackage = "ibc.lightclients.solomachine.v3";
function createBaseClientState() {
    return {
        sequence: BigInt(0),
        is_frozen: false,
        consensus_state: undefined
    };
}
export const ClientState = {
    typeUrl: "/ibc.lightclients.solomachine.v3.ClientState",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sequence !== BigInt(0)) {
            writer.uint32(8).uint64(message.sequence);
        }
        if (message.is_frozen === true) {
            writer.uint32(16).bool(message.is_frozen);
        }
        if (message.consensus_state !== undefined) {
            ConsensusState.encode(message.consensus_state, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
                    message.consensus_state = ConsensusState.decode(reader, reader.uint32());
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
            sequence: isSet(object.sequence) ? BigInt(object.sequence.toString()) : BigInt(0),
            is_frozen: isSet(object.is_frozen) ? Boolean(object.is_frozen) : false,
            consensus_state: isSet(object.consensus_state) ? ConsensusState.fromJSON(object.consensus_state) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.sequence !== undefined && (obj.sequence = (message.sequence || BigInt(0)).toString());
        message.is_frozen !== undefined && (obj.is_frozen = message.is_frozen);
        message.consensus_state !== undefined && (obj.consensus_state = message.consensus_state ? ConsensusState.toJSON(message.consensus_state) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseClientState();
        message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
        message.is_frozen = object.is_frozen ?? false;
        message.consensus_state = object.consensus_state !== undefined && object.consensus_state !== null ? ConsensusState.fromPartial(object.consensus_state) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseClientState();
        if (object.sequence !== undefined && object.sequence !== null) {
            message.sequence = BigInt(object.sequence);
        }
        if (object.is_frozen !== undefined && object.is_frozen !== null) {
            message.is_frozen = object.is_frozen;
        }
        if (object.consensus_state !== undefined && object.consensus_state !== null) {
            message.consensus_state = ConsensusState.fromAmino(object.consensus_state);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sequence = message.sequence ? message.sequence.toString() : undefined;
        obj.is_frozen = message.is_frozen;
        obj.consensus_state = message.consensus_state ? ConsensusState.toAmino(message.consensus_state) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ClientState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ClientState",
            value: ClientState.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ClientState.decode(message.value);
    },
    toProto(message) {
        return ClientState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.solomachine.v3.ClientState",
            value: ClientState.encode(message).finish()
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
export const ConsensusState = {
    typeUrl: "/ibc.lightclients.solomachine.v3.ConsensusState",
    encode(message, writer = BinaryWriter.create()) {
        if (message.public_key !== undefined) {
            Any.encode(message.public_key, writer.uint32(10).fork()).ldelim();
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
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConsensusState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.public_key = Any.decode(reader, reader.uint32());
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
            public_key: isSet(object.public_key) ? Any.fromJSON(object.public_key) : undefined,
            diversifier: isSet(object.diversifier) ? String(object.diversifier) : "",
            timestamp: isSet(object.timestamp) ? BigInt(object.timestamp.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.public_key !== undefined && (obj.public_key = message.public_key ? Any.toJSON(message.public_key) : undefined);
        message.diversifier !== undefined && (obj.diversifier = message.diversifier);
        message.timestamp !== undefined && (obj.timestamp = (message.timestamp || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseConsensusState();
        message.public_key = object.public_key !== undefined && object.public_key !== null ? Any.fromPartial(object.public_key) : undefined;
        message.diversifier = object.diversifier ?? "";
        message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? BigInt(object.timestamp.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseConsensusState();
        if (object.public_key !== undefined && object.public_key !== null) {
            message.public_key = Any.fromAmino(object.public_key);
        }
        if (object.diversifier !== undefined && object.diversifier !== null) {
            message.diversifier = object.diversifier;
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = BigInt(object.timestamp);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.public_key = message.public_key ? Any.toAmino(message.public_key) : undefined;
        obj.diversifier = message.diversifier;
        obj.timestamp = message.timestamp ? message.timestamp.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ConsensusState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ConsensusState",
            value: ConsensusState.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ConsensusState.decode(message.value);
    },
    toProto(message) {
        return ConsensusState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.solomachine.v3.ConsensusState",
            value: ConsensusState.encode(message).finish()
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
export const Header = {
    typeUrl: "/ibc.lightclients.solomachine.v3.Header",
    encode(message, writer = BinaryWriter.create()) {
        if (message.timestamp !== BigInt(0)) {
            writer.uint32(8).uint64(message.timestamp);
        }
        if (message.signature.length !== 0) {
            writer.uint32(18).bytes(message.signature);
        }
        if (message.new_public_key !== undefined) {
            Any.encode(message.new_public_key, writer.uint32(26).fork()).ldelim();
        }
        if (message.new_diversifier !== "") {
            writer.uint32(34).string(message.new_diversifier);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
                    message.new_public_key = Any.decode(reader, reader.uint32());
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
            timestamp: isSet(object.timestamp) ? BigInt(object.timestamp.toString()) : BigInt(0),
            signature: isSet(object.signature) ? bytesFromBase64(object.signature) : new Uint8Array(),
            new_public_key: isSet(object.new_public_key) ? Any.fromJSON(object.new_public_key) : undefined,
            new_diversifier: isSet(object.new_diversifier) ? String(object.new_diversifier) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.timestamp !== undefined && (obj.timestamp = (message.timestamp || BigInt(0)).toString());
        message.signature !== undefined && (obj.signature = base64FromBytes(message.signature !== undefined ? message.signature : new Uint8Array()));
        message.new_public_key !== undefined && (obj.new_public_key = message.new_public_key ? Any.toJSON(message.new_public_key) : undefined);
        message.new_diversifier !== undefined && (obj.new_diversifier = message.new_diversifier);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseHeader();
        message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? BigInt(object.timestamp.toString()) : BigInt(0);
        message.signature = object.signature ?? new Uint8Array();
        message.new_public_key = object.new_public_key !== undefined && object.new_public_key !== null ? Any.fromPartial(object.new_public_key) : undefined;
        message.new_diversifier = object.new_diversifier ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseHeader();
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = BigInt(object.timestamp);
        }
        if (object.signature !== undefined && object.signature !== null) {
            message.signature = bytesFromBase64(object.signature);
        }
        if (object.new_public_key !== undefined && object.new_public_key !== null) {
            message.new_public_key = Any.fromAmino(object.new_public_key);
        }
        if (object.new_diversifier !== undefined && object.new_diversifier !== null) {
            message.new_diversifier = object.new_diversifier;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.timestamp = message.timestamp ? message.timestamp.toString() : undefined;
        obj.signature = message.signature ? base64FromBytes(message.signature) : undefined;
        obj.new_public_key = message.new_public_key ? Any.toAmino(message.new_public_key) : undefined;
        obj.new_diversifier = message.new_diversifier;
        return obj;
    },
    fromAminoMsg(object) {
        return Header.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Header",
            value: Header.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Header.decode(message.value);
    },
    toProto(message) {
        return Header.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.solomachine.v3.Header",
            value: Header.encode(message).finish()
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
export const Misbehaviour = {
    typeUrl: "/ibc.lightclients.solomachine.v3.Misbehaviour",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sequence !== BigInt(0)) {
            writer.uint32(8).uint64(message.sequence);
        }
        if (message.signature_one !== undefined) {
            SignatureAndData.encode(message.signature_one, writer.uint32(18).fork()).ldelim();
        }
        if (message.signature_two !== undefined) {
            SignatureAndData.encode(message.signature_two, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMisbehaviour();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sequence = reader.uint64();
                    break;
                case 2:
                    message.signature_one = SignatureAndData.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.signature_two = SignatureAndData.decode(reader, reader.uint32());
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
            sequence: isSet(object.sequence) ? BigInt(object.sequence.toString()) : BigInt(0),
            signature_one: isSet(object.signature_one) ? SignatureAndData.fromJSON(object.signature_one) : undefined,
            signature_two: isSet(object.signature_two) ? SignatureAndData.fromJSON(object.signature_two) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.sequence !== undefined && (obj.sequence = (message.sequence || BigInt(0)).toString());
        message.signature_one !== undefined && (obj.signature_one = message.signature_one ? SignatureAndData.toJSON(message.signature_one) : undefined);
        message.signature_two !== undefined && (obj.signature_two = message.signature_two ? SignatureAndData.toJSON(message.signature_two) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMisbehaviour();
        message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
        message.signature_one = object.signature_one !== undefined && object.signature_one !== null ? SignatureAndData.fromPartial(object.signature_one) : undefined;
        message.signature_two = object.signature_two !== undefined && object.signature_two !== null ? SignatureAndData.fromPartial(object.signature_two) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMisbehaviour();
        if (object.sequence !== undefined && object.sequence !== null) {
            message.sequence = BigInt(object.sequence);
        }
        if (object.signature_one !== undefined && object.signature_one !== null) {
            message.signature_one = SignatureAndData.fromAmino(object.signature_one);
        }
        if (object.signature_two !== undefined && object.signature_two !== null) {
            message.signature_two = SignatureAndData.fromAmino(object.signature_two);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sequence = message.sequence ? message.sequence.toString() : undefined;
        obj.signature_one = message.signature_one ? SignatureAndData.toAmino(message.signature_one) : undefined;
        obj.signature_two = message.signature_two ? SignatureAndData.toAmino(message.signature_two) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Misbehaviour.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Misbehaviour",
            value: Misbehaviour.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Misbehaviour.decode(message.value);
    },
    toProto(message) {
        return Misbehaviour.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.solomachine.v3.Misbehaviour",
            value: Misbehaviour.encode(message).finish()
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
export const SignatureAndData = {
    typeUrl: "/ibc.lightclients.solomachine.v3.SignatureAndData",
    encode(message, writer = BinaryWriter.create()) {
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
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            signature: isSet(object.signature) ? bytesFromBase64(object.signature) : new Uint8Array(),
            path: isSet(object.path) ? bytesFromBase64(object.path) : new Uint8Array(),
            data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
            timestamp: isSet(object.timestamp) ? BigInt(object.timestamp.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.signature !== undefined && (obj.signature = base64FromBytes(message.signature !== undefined ? message.signature : new Uint8Array()));
        message.path !== undefined && (obj.path = base64FromBytes(message.path !== undefined ? message.path : new Uint8Array()));
        message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
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
    fromAmino(object) {
        const message = createBaseSignatureAndData();
        if (object.signature !== undefined && object.signature !== null) {
            message.signature = bytesFromBase64(object.signature);
        }
        if (object.path !== undefined && object.path !== null) {
            message.path = bytesFromBase64(object.path);
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = bytesFromBase64(object.data);
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = BigInt(object.timestamp);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.signature = message.signature ? base64FromBytes(message.signature) : undefined;
        obj.path = message.path ? base64FromBytes(message.path) : undefined;
        obj.data = message.data ? base64FromBytes(message.data) : undefined;
        obj.timestamp = message.timestamp ? message.timestamp.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return SignatureAndData.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/SignatureAndData",
            value: SignatureAndData.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return SignatureAndData.decode(message.value);
    },
    toProto(message) {
        return SignatureAndData.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.solomachine.v3.SignatureAndData",
            value: SignatureAndData.encode(message).finish()
        };
    }
};
function createBaseTimestampedSignatureData() {
    return {
        signature_data: new Uint8Array(),
        timestamp: BigInt(0)
    };
}
export const TimestampedSignatureData = {
    typeUrl: "/ibc.lightclients.solomachine.v3.TimestampedSignatureData",
    encode(message, writer = BinaryWriter.create()) {
        if (message.signature_data.length !== 0) {
            writer.uint32(10).bytes(message.signature_data);
        }
        if (message.timestamp !== BigInt(0)) {
            writer.uint32(16).uint64(message.timestamp);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            signature_data: isSet(object.signature_data) ? bytesFromBase64(object.signature_data) : new Uint8Array(),
            timestamp: isSet(object.timestamp) ? BigInt(object.timestamp.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.signature_data !== undefined && (obj.signature_data = base64FromBytes(message.signature_data !== undefined ? message.signature_data : new Uint8Array()));
        message.timestamp !== undefined && (obj.timestamp = (message.timestamp || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTimestampedSignatureData();
        message.signature_data = object.signature_data ?? new Uint8Array();
        message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? BigInt(object.timestamp.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseTimestampedSignatureData();
        if (object.signature_data !== undefined && object.signature_data !== null) {
            message.signature_data = bytesFromBase64(object.signature_data);
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = BigInt(object.timestamp);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.signature_data = message.signature_data ? base64FromBytes(message.signature_data) : undefined;
        obj.timestamp = message.timestamp ? message.timestamp.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return TimestampedSignatureData.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/TimestampedSignatureData",
            value: TimestampedSignatureData.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return TimestampedSignatureData.decode(message.value);
    },
    toProto(message) {
        return TimestampedSignatureData.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.solomachine.v3.TimestampedSignatureData",
            value: TimestampedSignatureData.encode(message).finish()
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
export const SignBytes = {
    typeUrl: "/ibc.lightclients.solomachine.v3.SignBytes",
    encode(message, writer = BinaryWriter.create()) {
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
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            sequence: isSet(object.sequence) ? BigInt(object.sequence.toString()) : BigInt(0),
            timestamp: isSet(object.timestamp) ? BigInt(object.timestamp.toString()) : BigInt(0),
            diversifier: isSet(object.diversifier) ? String(object.diversifier) : "",
            path: isSet(object.path) ? bytesFromBase64(object.path) : new Uint8Array(),
            data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.sequence !== undefined && (obj.sequence = (message.sequence || BigInt(0)).toString());
        message.timestamp !== undefined && (obj.timestamp = (message.timestamp || BigInt(0)).toString());
        message.diversifier !== undefined && (obj.diversifier = message.diversifier);
        message.path !== undefined && (obj.path = base64FromBytes(message.path !== undefined ? message.path : new Uint8Array()));
        message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
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
    fromAmino(object) {
        const message = createBaseSignBytes();
        if (object.sequence !== undefined && object.sequence !== null) {
            message.sequence = BigInt(object.sequence);
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = BigInt(object.timestamp);
        }
        if (object.diversifier !== undefined && object.diversifier !== null) {
            message.diversifier = object.diversifier;
        }
        if (object.path !== undefined && object.path !== null) {
            message.path = bytesFromBase64(object.path);
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = bytesFromBase64(object.data);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sequence = message.sequence ? message.sequence.toString() : undefined;
        obj.timestamp = message.timestamp ? message.timestamp.toString() : undefined;
        obj.diversifier = message.diversifier;
        obj.path = message.path ? base64FromBytes(message.path) : undefined;
        obj.data = message.data ? base64FromBytes(message.data) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return SignBytes.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/SignBytes",
            value: SignBytes.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return SignBytes.decode(message.value);
    },
    toProto(message) {
        return SignBytes.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.solomachine.v3.SignBytes",
            value: SignBytes.encode(message).finish()
        };
    }
};
function createBaseHeaderData() {
    return {
        new_pub_key: undefined,
        new_diversifier: ""
    };
}
export const HeaderData = {
    typeUrl: "/ibc.lightclients.solomachine.v3.HeaderData",
    encode(message, writer = BinaryWriter.create()) {
        if (message.new_pub_key !== undefined) {
            Any.encode(message.new_pub_key, writer.uint32(10).fork()).ldelim();
        }
        if (message.new_diversifier !== "") {
            writer.uint32(18).string(message.new_diversifier);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseHeaderData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.new_pub_key = Any.decode(reader, reader.uint32());
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
            new_pub_key: isSet(object.new_pub_key) ? Any.fromJSON(object.new_pub_key) : undefined,
            new_diversifier: isSet(object.new_diversifier) ? String(object.new_diversifier) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.new_pub_key !== undefined && (obj.new_pub_key = message.new_pub_key ? Any.toJSON(message.new_pub_key) : undefined);
        message.new_diversifier !== undefined && (obj.new_diversifier = message.new_diversifier);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseHeaderData();
        message.new_pub_key = object.new_pub_key !== undefined && object.new_pub_key !== null ? Any.fromPartial(object.new_pub_key) : undefined;
        message.new_diversifier = object.new_diversifier ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseHeaderData();
        if (object.new_pub_key !== undefined && object.new_pub_key !== null) {
            message.new_pub_key = Any.fromAmino(object.new_pub_key);
        }
        if (object.new_diversifier !== undefined && object.new_diversifier !== null) {
            message.new_diversifier = object.new_diversifier;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.new_pub_key = message.new_pub_key ? Any.toAmino(message.new_pub_key) : undefined;
        obj.new_diversifier = message.new_diversifier;
        return obj;
    },
    fromAminoMsg(object) {
        return HeaderData.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/HeaderData",
            value: HeaderData.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return HeaderData.decode(message.value);
    },
    toProto(message) {
        return HeaderData.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.solomachine.v3.HeaderData",
            value: HeaderData.encode(message).finish()
        };
    }
};
//# sourceMappingURL=solomachine.js.map
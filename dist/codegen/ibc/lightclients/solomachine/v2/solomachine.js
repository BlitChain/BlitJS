"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NextSequenceRecvData = exports.PacketReceiptAbsenceData = exports.PacketAcknowledgementData = exports.PacketCommitmentData = exports.ChannelStateData = exports.ConnectionStateData = exports.ConsensusStateData = exports.ClientStateData = exports.HeaderData = exports.SignBytes = exports.TimestampedSignatureData = exports.SignatureAndData = exports.Misbehaviour = exports.Header = exports.ConsensusState = exports.ClientState = exports.dataTypeToJSON = exports.dataTypeFromJSON = exports.DataTypeAmino = exports.DataTypeSDKType = exports.DataType = exports.protobufPackage = void 0;
//@ts-nocheck
const any_1 = require("../../../../google/protobuf/any");
const connection_1 = require("../../../core/connection/v1/connection");
const channel_1 = require("../../../core/channel/v1/channel");
const binary_1 = require("../../../../binary");
const helpers_1 = require("../../../../helpers");
exports.protobufPackage = "ibc.lightclients.solomachine.v2";
/**
 * DataType defines the type of solo machine proof being created. This is done
 * to preserve uniqueness of different data sign byte encodings.
 */
var DataType;
(function (DataType) {
    /** DATA_TYPE_UNINITIALIZED_UNSPECIFIED - Default State */
    DataType[DataType["DATA_TYPE_UNINITIALIZED_UNSPECIFIED"] = 0] = "DATA_TYPE_UNINITIALIZED_UNSPECIFIED";
    /** DATA_TYPE_CLIENT_STATE - Data type for client state verification */
    DataType[DataType["DATA_TYPE_CLIENT_STATE"] = 1] = "DATA_TYPE_CLIENT_STATE";
    /** DATA_TYPE_CONSENSUS_STATE - Data type for consensus state verification */
    DataType[DataType["DATA_TYPE_CONSENSUS_STATE"] = 2] = "DATA_TYPE_CONSENSUS_STATE";
    /** DATA_TYPE_CONNECTION_STATE - Data type for connection state verification */
    DataType[DataType["DATA_TYPE_CONNECTION_STATE"] = 3] = "DATA_TYPE_CONNECTION_STATE";
    /** DATA_TYPE_CHANNEL_STATE - Data type for channel state verification */
    DataType[DataType["DATA_TYPE_CHANNEL_STATE"] = 4] = "DATA_TYPE_CHANNEL_STATE";
    /** DATA_TYPE_PACKET_COMMITMENT - Data type for packet commitment verification */
    DataType[DataType["DATA_TYPE_PACKET_COMMITMENT"] = 5] = "DATA_TYPE_PACKET_COMMITMENT";
    /** DATA_TYPE_PACKET_ACKNOWLEDGEMENT - Data type for packet acknowledgement verification */
    DataType[DataType["DATA_TYPE_PACKET_ACKNOWLEDGEMENT"] = 6] = "DATA_TYPE_PACKET_ACKNOWLEDGEMENT";
    /** DATA_TYPE_PACKET_RECEIPT_ABSENCE - Data type for packet receipt absence verification */
    DataType[DataType["DATA_TYPE_PACKET_RECEIPT_ABSENCE"] = 7] = "DATA_TYPE_PACKET_RECEIPT_ABSENCE";
    /** DATA_TYPE_NEXT_SEQUENCE_RECV - Data type for next sequence recv verification */
    DataType[DataType["DATA_TYPE_NEXT_SEQUENCE_RECV"] = 8] = "DATA_TYPE_NEXT_SEQUENCE_RECV";
    /** DATA_TYPE_HEADER - Data type for header verification */
    DataType[DataType["DATA_TYPE_HEADER"] = 9] = "DATA_TYPE_HEADER";
    DataType[DataType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(DataType || (exports.DataType = DataType = {}));
exports.DataTypeSDKType = DataType;
exports.DataTypeAmino = DataType;
function dataTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "DATA_TYPE_UNINITIALIZED_UNSPECIFIED":
            return DataType.DATA_TYPE_UNINITIALIZED_UNSPECIFIED;
        case 1:
        case "DATA_TYPE_CLIENT_STATE":
            return DataType.DATA_TYPE_CLIENT_STATE;
        case 2:
        case "DATA_TYPE_CONSENSUS_STATE":
            return DataType.DATA_TYPE_CONSENSUS_STATE;
        case 3:
        case "DATA_TYPE_CONNECTION_STATE":
            return DataType.DATA_TYPE_CONNECTION_STATE;
        case 4:
        case "DATA_TYPE_CHANNEL_STATE":
            return DataType.DATA_TYPE_CHANNEL_STATE;
        case 5:
        case "DATA_TYPE_PACKET_COMMITMENT":
            return DataType.DATA_TYPE_PACKET_COMMITMENT;
        case 6:
        case "DATA_TYPE_PACKET_ACKNOWLEDGEMENT":
            return DataType.DATA_TYPE_PACKET_ACKNOWLEDGEMENT;
        case 7:
        case "DATA_TYPE_PACKET_RECEIPT_ABSENCE":
            return DataType.DATA_TYPE_PACKET_RECEIPT_ABSENCE;
        case 8:
        case "DATA_TYPE_NEXT_SEQUENCE_RECV":
            return DataType.DATA_TYPE_NEXT_SEQUENCE_RECV;
        case 9:
        case "DATA_TYPE_HEADER":
            return DataType.DATA_TYPE_HEADER;
        case -1:
        case "UNRECOGNIZED":
        default:
            return DataType.UNRECOGNIZED;
    }
}
exports.dataTypeFromJSON = dataTypeFromJSON;
function dataTypeToJSON(object) {
    switch (object) {
        case DataType.DATA_TYPE_UNINITIALIZED_UNSPECIFIED:
            return "DATA_TYPE_UNINITIALIZED_UNSPECIFIED";
        case DataType.DATA_TYPE_CLIENT_STATE:
            return "DATA_TYPE_CLIENT_STATE";
        case DataType.DATA_TYPE_CONSENSUS_STATE:
            return "DATA_TYPE_CONSENSUS_STATE";
        case DataType.DATA_TYPE_CONNECTION_STATE:
            return "DATA_TYPE_CONNECTION_STATE";
        case DataType.DATA_TYPE_CHANNEL_STATE:
            return "DATA_TYPE_CHANNEL_STATE";
        case DataType.DATA_TYPE_PACKET_COMMITMENT:
            return "DATA_TYPE_PACKET_COMMITMENT";
        case DataType.DATA_TYPE_PACKET_ACKNOWLEDGEMENT:
            return "DATA_TYPE_PACKET_ACKNOWLEDGEMENT";
        case DataType.DATA_TYPE_PACKET_RECEIPT_ABSENCE:
            return "DATA_TYPE_PACKET_RECEIPT_ABSENCE";
        case DataType.DATA_TYPE_NEXT_SEQUENCE_RECV:
            return "DATA_TYPE_NEXT_SEQUENCE_RECV";
        case DataType.DATA_TYPE_HEADER:
            return "DATA_TYPE_HEADER";
        case DataType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.dataTypeToJSON = dataTypeToJSON;
function createBaseClientState() {
    return {
        sequence: BigInt(0),
        is_frozen: false,
        consensus_state: undefined,
        allow_update_after_proposal: false
    };
}
exports.ClientState = {
    typeUrl: "/ibc.lightclients.solomachine.v2.ClientState",
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
        if (message.allow_update_after_proposal === true) {
            writer.uint32(32).bool(message.allow_update_after_proposal);
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
                case 4:
                    message.allow_update_after_proposal = reader.bool();
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
            consensus_state: (0, helpers_1.isSet)(object.consensus_state) ? exports.ConsensusState.fromJSON(object.consensus_state) : undefined,
            allow_update_after_proposal: (0, helpers_1.isSet)(object.allow_update_after_proposal) ? Boolean(object.allow_update_after_proposal) : false
        };
    },
    toJSON(message) {
        const obj = {};
        message.sequence !== undefined && (obj.sequence = (message.sequence || BigInt(0)).toString());
        message.is_frozen !== undefined && (obj.is_frozen = message.is_frozen);
        message.consensus_state !== undefined && (obj.consensus_state = message.consensus_state ? exports.ConsensusState.toJSON(message.consensus_state) : undefined);
        message.allow_update_after_proposal !== undefined && (obj.allow_update_after_proposal = message.allow_update_after_proposal);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseClientState();
        message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
        message.is_frozen = object.is_frozen ?? false;
        message.consensus_state = object.consensus_state !== undefined && object.consensus_state !== null ? exports.ConsensusState.fromPartial(object.consensus_state) : undefined;
        message.allow_update_after_proposal = object.allow_update_after_proposal ?? false;
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
            message.consensus_state = exports.ConsensusState.fromAmino(object.consensus_state);
        }
        if (object.allow_update_after_proposal !== undefined && object.allow_update_after_proposal !== null) {
            message.allow_update_after_proposal = object.allow_update_after_proposal;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sequence = message.sequence ? message.sequence.toString() : undefined;
        obj.is_frozen = message.is_frozen;
        obj.consensus_state = message.consensus_state ? exports.ConsensusState.toAmino(message.consensus_state) : undefined;
        obj.allow_update_after_proposal = message.allow_update_after_proposal;
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
            typeUrl: "/ibc.lightclients.solomachine.v2.ClientState",
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
    typeUrl: "/ibc.lightclients.solomachine.v2.ConsensusState",
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
    fromAmino(object) {
        const message = createBaseConsensusState();
        if (object.public_key !== undefined && object.public_key !== null) {
            message.public_key = any_1.Any.fromAmino(object.public_key);
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
            typeUrl: "/ibc.lightclients.solomachine.v2.ConsensusState",
            value: exports.ConsensusState.encode(message).finish()
        };
    }
};
function createBaseHeader() {
    return {
        sequence: BigInt(0),
        timestamp: BigInt(0),
        signature: new Uint8Array(),
        new_public_key: undefined,
        new_diversifier: ""
    };
}
exports.Header = {
    typeUrl: "/ibc.lightclients.solomachine.v2.Header",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sequence !== BigInt(0)) {
            writer.uint32(8).uint64(message.sequence);
        }
        if (message.timestamp !== BigInt(0)) {
            writer.uint32(16).uint64(message.timestamp);
        }
        if (message.signature.length !== 0) {
            writer.uint32(26).bytes(message.signature);
        }
        if (message.new_public_key !== undefined) {
            any_1.Any.encode(message.new_public_key, writer.uint32(34).fork()).ldelim();
        }
        if (message.new_diversifier !== "") {
            writer.uint32(42).string(message.new_diversifier);
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
                    message.sequence = reader.uint64();
                    break;
                case 2:
                    message.timestamp = reader.uint64();
                    break;
                case 3:
                    message.signature = reader.bytes();
                    break;
                case 4:
                    message.new_public_key = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 5:
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
            sequence: (0, helpers_1.isSet)(object.sequence) ? BigInt(object.sequence.toString()) : BigInt(0),
            timestamp: (0, helpers_1.isSet)(object.timestamp) ? BigInt(object.timestamp.toString()) : BigInt(0),
            signature: (0, helpers_1.isSet)(object.signature) ? (0, helpers_1.bytesFromBase64)(object.signature) : new Uint8Array(),
            new_public_key: (0, helpers_1.isSet)(object.new_public_key) ? any_1.Any.fromJSON(object.new_public_key) : undefined,
            new_diversifier: (0, helpers_1.isSet)(object.new_diversifier) ? String(object.new_diversifier) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.sequence !== undefined && (obj.sequence = (message.sequence || BigInt(0)).toString());
        message.timestamp !== undefined && (obj.timestamp = (message.timestamp || BigInt(0)).toString());
        message.signature !== undefined && (obj.signature = (0, helpers_1.base64FromBytes)(message.signature !== undefined ? message.signature : new Uint8Array()));
        message.new_public_key !== undefined && (obj.new_public_key = message.new_public_key ? any_1.Any.toJSON(message.new_public_key) : undefined);
        message.new_diversifier !== undefined && (obj.new_diversifier = message.new_diversifier);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseHeader();
        message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
        message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? BigInt(object.timestamp.toString()) : BigInt(0);
        message.signature = object.signature ?? new Uint8Array();
        message.new_public_key = object.new_public_key !== undefined && object.new_public_key !== null ? any_1.Any.fromPartial(object.new_public_key) : undefined;
        message.new_diversifier = object.new_diversifier ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseHeader();
        if (object.sequence !== undefined && object.sequence !== null) {
            message.sequence = BigInt(object.sequence);
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = BigInt(object.timestamp);
        }
        if (object.signature !== undefined && object.signature !== null) {
            message.signature = (0, helpers_1.bytesFromBase64)(object.signature);
        }
        if (object.new_public_key !== undefined && object.new_public_key !== null) {
            message.new_public_key = any_1.Any.fromAmino(object.new_public_key);
        }
        if (object.new_diversifier !== undefined && object.new_diversifier !== null) {
            message.new_diversifier = object.new_diversifier;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sequence = message.sequence ? message.sequence.toString() : undefined;
        obj.timestamp = message.timestamp ? message.timestamp.toString() : undefined;
        obj.signature = message.signature ? (0, helpers_1.base64FromBytes)(message.signature) : undefined;
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
            typeUrl: "/ibc.lightclients.solomachine.v2.Header",
            value: exports.Header.encode(message).finish()
        };
    }
};
function createBaseMisbehaviour() {
    return {
        client_id: "",
        sequence: BigInt(0),
        signature_one: undefined,
        signature_two: undefined
    };
}
exports.Misbehaviour = {
    typeUrl: "/ibc.lightclients.solomachine.v2.Misbehaviour",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.client_id !== "") {
            writer.uint32(10).string(message.client_id);
        }
        if (message.sequence !== BigInt(0)) {
            writer.uint32(16).uint64(message.sequence);
        }
        if (message.signature_one !== undefined) {
            exports.SignatureAndData.encode(message.signature_one, writer.uint32(26).fork()).ldelim();
        }
        if (message.signature_two !== undefined) {
            exports.SignatureAndData.encode(message.signature_two, writer.uint32(34).fork()).ldelim();
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
                    message.client_id = reader.string();
                    break;
                case 2:
                    message.sequence = reader.uint64();
                    break;
                case 3:
                    message.signature_one = exports.SignatureAndData.decode(reader, reader.uint32());
                    break;
                case 4:
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
            client_id: (0, helpers_1.isSet)(object.client_id) ? String(object.client_id) : "",
            sequence: (0, helpers_1.isSet)(object.sequence) ? BigInt(object.sequence.toString()) : BigInt(0),
            signature_one: (0, helpers_1.isSet)(object.signature_one) ? exports.SignatureAndData.fromJSON(object.signature_one) : undefined,
            signature_two: (0, helpers_1.isSet)(object.signature_two) ? exports.SignatureAndData.fromJSON(object.signature_two) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.client_id !== undefined && (obj.client_id = message.client_id);
        message.sequence !== undefined && (obj.sequence = (message.sequence || BigInt(0)).toString());
        message.signature_one !== undefined && (obj.signature_one = message.signature_one ? exports.SignatureAndData.toJSON(message.signature_one) : undefined);
        message.signature_two !== undefined && (obj.signature_two = message.signature_two ? exports.SignatureAndData.toJSON(message.signature_two) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMisbehaviour();
        message.client_id = object.client_id ?? "";
        message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
        message.signature_one = object.signature_one !== undefined && object.signature_one !== null ? exports.SignatureAndData.fromPartial(object.signature_one) : undefined;
        message.signature_two = object.signature_two !== undefined && object.signature_two !== null ? exports.SignatureAndData.fromPartial(object.signature_two) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMisbehaviour();
        if (object.client_id !== undefined && object.client_id !== null) {
            message.client_id = object.client_id;
        }
        if (object.sequence !== undefined && object.sequence !== null) {
            message.sequence = BigInt(object.sequence);
        }
        if (object.signature_one !== undefined && object.signature_one !== null) {
            message.signature_one = exports.SignatureAndData.fromAmino(object.signature_one);
        }
        if (object.signature_two !== undefined && object.signature_two !== null) {
            message.signature_two = exports.SignatureAndData.fromAmino(object.signature_two);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.client_id = message.client_id;
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
            typeUrl: "/ibc.lightclients.solomachine.v2.Misbehaviour",
            value: exports.Misbehaviour.encode(message).finish()
        };
    }
};
function createBaseSignatureAndData() {
    return {
        signature: new Uint8Array(),
        data_type: 0,
        data: new Uint8Array(),
        timestamp: BigInt(0)
    };
}
exports.SignatureAndData = {
    typeUrl: "/ibc.lightclients.solomachine.v2.SignatureAndData",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.signature.length !== 0) {
            writer.uint32(10).bytes(message.signature);
        }
        if (message.data_type !== 0) {
            writer.uint32(16).int32(message.data_type);
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
                    message.data_type = reader.int32();
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
            data_type: (0, helpers_1.isSet)(object.data_type) ? dataTypeFromJSON(object.data_type) : -1,
            data: (0, helpers_1.isSet)(object.data) ? (0, helpers_1.bytesFromBase64)(object.data) : new Uint8Array(),
            timestamp: (0, helpers_1.isSet)(object.timestamp) ? BigInt(object.timestamp.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.signature !== undefined && (obj.signature = (0, helpers_1.base64FromBytes)(message.signature !== undefined ? message.signature : new Uint8Array()));
        message.data_type !== undefined && (obj.data_type = dataTypeToJSON(message.data_type));
        message.data !== undefined && (obj.data = (0, helpers_1.base64FromBytes)(message.data !== undefined ? message.data : new Uint8Array()));
        message.timestamp !== undefined && (obj.timestamp = (message.timestamp || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSignatureAndData();
        message.signature = object.signature ?? new Uint8Array();
        message.data_type = object.data_type ?? 0;
        message.data = object.data ?? new Uint8Array();
        message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? BigInt(object.timestamp.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseSignatureAndData();
        if (object.signature !== undefined && object.signature !== null) {
            message.signature = (0, helpers_1.bytesFromBase64)(object.signature);
        }
        if (object.data_type !== undefined && object.data_type !== null) {
            message.data_type = dataTypeFromJSON(object.data_type);
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = (0, helpers_1.bytesFromBase64)(object.data);
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = BigInt(object.timestamp);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.signature = message.signature ? (0, helpers_1.base64FromBytes)(message.signature) : undefined;
        obj.data_type = message.data_type;
        obj.data = message.data ? (0, helpers_1.base64FromBytes)(message.data) : undefined;
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
            typeUrl: "/ibc.lightclients.solomachine.v2.SignatureAndData",
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
    typeUrl: "/ibc.lightclients.solomachine.v2.TimestampedSignatureData",
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
    fromAmino(object) {
        const message = createBaseTimestampedSignatureData();
        if (object.signature_data !== undefined && object.signature_data !== null) {
            message.signature_data = (0, helpers_1.bytesFromBase64)(object.signature_data);
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = BigInt(object.timestamp);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.signature_data = message.signature_data ? (0, helpers_1.base64FromBytes)(message.signature_data) : undefined;
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
            typeUrl: "/ibc.lightclients.solomachine.v2.TimestampedSignatureData",
            value: exports.TimestampedSignatureData.encode(message).finish()
        };
    }
};
function createBaseSignBytes() {
    return {
        sequence: BigInt(0),
        timestamp: BigInt(0),
        diversifier: "",
        data_type: 0,
        data: new Uint8Array()
    };
}
exports.SignBytes = {
    typeUrl: "/ibc.lightclients.solomachine.v2.SignBytes",
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
        if (message.data_type !== 0) {
            writer.uint32(32).int32(message.data_type);
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
                    message.data_type = reader.int32();
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
            data_type: (0, helpers_1.isSet)(object.data_type) ? dataTypeFromJSON(object.data_type) : -1,
            data: (0, helpers_1.isSet)(object.data) ? (0, helpers_1.bytesFromBase64)(object.data) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.sequence !== undefined && (obj.sequence = (message.sequence || BigInt(0)).toString());
        message.timestamp !== undefined && (obj.timestamp = (message.timestamp || BigInt(0)).toString());
        message.diversifier !== undefined && (obj.diversifier = message.diversifier);
        message.data_type !== undefined && (obj.data_type = dataTypeToJSON(message.data_type));
        message.data !== undefined && (obj.data = (0, helpers_1.base64FromBytes)(message.data !== undefined ? message.data : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSignBytes();
        message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
        message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? BigInt(object.timestamp.toString()) : BigInt(0);
        message.diversifier = object.diversifier ?? "";
        message.data_type = object.data_type ?? 0;
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
        if (object.data_type !== undefined && object.data_type !== null) {
            message.data_type = dataTypeFromJSON(object.data_type);
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = (0, helpers_1.bytesFromBase64)(object.data);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sequence = message.sequence ? message.sequence.toString() : undefined;
        obj.timestamp = message.timestamp ? message.timestamp.toString() : undefined;
        obj.diversifier = message.diversifier;
        obj.data_type = message.data_type;
        obj.data = message.data ? (0, helpers_1.base64FromBytes)(message.data) : undefined;
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
            typeUrl: "/ibc.lightclients.solomachine.v2.SignBytes",
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
    typeUrl: "/ibc.lightclients.solomachine.v2.HeaderData",
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
    fromAmino(object) {
        const message = createBaseHeaderData();
        if (object.new_pub_key !== undefined && object.new_pub_key !== null) {
            message.new_pub_key = any_1.Any.fromAmino(object.new_pub_key);
        }
        if (object.new_diversifier !== undefined && object.new_diversifier !== null) {
            message.new_diversifier = object.new_diversifier;
        }
        return message;
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
            typeUrl: "/ibc.lightclients.solomachine.v2.HeaderData",
            value: exports.HeaderData.encode(message).finish()
        };
    }
};
function createBaseClientStateData() {
    return {
        path: new Uint8Array(),
        client_state: undefined
    };
}
exports.ClientStateData = {
    typeUrl: "/ibc.lightclients.solomachine.v2.ClientStateData",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.path.length !== 0) {
            writer.uint32(10).bytes(message.path);
        }
        if (message.client_state !== undefined) {
            any_1.Any.encode(message.client_state, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseClientStateData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.path = reader.bytes();
                    break;
                case 2:
                    message.client_state = any_1.Any.decode(reader, reader.uint32());
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
            path: (0, helpers_1.isSet)(object.path) ? (0, helpers_1.bytesFromBase64)(object.path) : new Uint8Array(),
            client_state: (0, helpers_1.isSet)(object.client_state) ? any_1.Any.fromJSON(object.client_state) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.path !== undefined && (obj.path = (0, helpers_1.base64FromBytes)(message.path !== undefined ? message.path : new Uint8Array()));
        message.client_state !== undefined && (obj.client_state = message.client_state ? any_1.Any.toJSON(message.client_state) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseClientStateData();
        message.path = object.path ?? new Uint8Array();
        message.client_state = object.client_state !== undefined && object.client_state !== null ? any_1.Any.fromPartial(object.client_state) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseClientStateData();
        if (object.path !== undefined && object.path !== null) {
            message.path = (0, helpers_1.bytesFromBase64)(object.path);
        }
        if (object.client_state !== undefined && object.client_state !== null) {
            message.client_state = any_1.Any.fromAmino(object.client_state);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.path = message.path ? (0, helpers_1.base64FromBytes)(message.path) : undefined;
        obj.client_state = message.client_state ? any_1.Any.toAmino(message.client_state) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ClientStateData.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ClientStateData",
            value: exports.ClientStateData.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ClientStateData.decode(message.value);
    },
    toProto(message) {
        return exports.ClientStateData.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.solomachine.v2.ClientStateData",
            value: exports.ClientStateData.encode(message).finish()
        };
    }
};
function createBaseConsensusStateData() {
    return {
        path: new Uint8Array(),
        consensus_state: undefined
    };
}
exports.ConsensusStateData = {
    typeUrl: "/ibc.lightclients.solomachine.v2.ConsensusStateData",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.path.length !== 0) {
            writer.uint32(10).bytes(message.path);
        }
        if (message.consensus_state !== undefined) {
            any_1.Any.encode(message.consensus_state, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConsensusStateData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.path = reader.bytes();
                    break;
                case 2:
                    message.consensus_state = any_1.Any.decode(reader, reader.uint32());
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
            path: (0, helpers_1.isSet)(object.path) ? (0, helpers_1.bytesFromBase64)(object.path) : new Uint8Array(),
            consensus_state: (0, helpers_1.isSet)(object.consensus_state) ? any_1.Any.fromJSON(object.consensus_state) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.path !== undefined && (obj.path = (0, helpers_1.base64FromBytes)(message.path !== undefined ? message.path : new Uint8Array()));
        message.consensus_state !== undefined && (obj.consensus_state = message.consensus_state ? any_1.Any.toJSON(message.consensus_state) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseConsensusStateData();
        message.path = object.path ?? new Uint8Array();
        message.consensus_state = object.consensus_state !== undefined && object.consensus_state !== null ? any_1.Any.fromPartial(object.consensus_state) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseConsensusStateData();
        if (object.path !== undefined && object.path !== null) {
            message.path = (0, helpers_1.bytesFromBase64)(object.path);
        }
        if (object.consensus_state !== undefined && object.consensus_state !== null) {
            message.consensus_state = any_1.Any.fromAmino(object.consensus_state);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.path = message.path ? (0, helpers_1.base64FromBytes)(message.path) : undefined;
        obj.consensus_state = message.consensus_state ? any_1.Any.toAmino(message.consensus_state) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ConsensusStateData.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ConsensusStateData",
            value: exports.ConsensusStateData.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ConsensusStateData.decode(message.value);
    },
    toProto(message) {
        return exports.ConsensusStateData.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.solomachine.v2.ConsensusStateData",
            value: exports.ConsensusStateData.encode(message).finish()
        };
    }
};
function createBaseConnectionStateData() {
    return {
        path: new Uint8Array(),
        connection: undefined
    };
}
exports.ConnectionStateData = {
    typeUrl: "/ibc.lightclients.solomachine.v2.ConnectionStateData",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.path.length !== 0) {
            writer.uint32(10).bytes(message.path);
        }
        if (message.connection !== undefined) {
            connection_1.ConnectionEnd.encode(message.connection, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConnectionStateData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.path = reader.bytes();
                    break;
                case 2:
                    message.connection = connection_1.ConnectionEnd.decode(reader, reader.uint32());
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
            path: (0, helpers_1.isSet)(object.path) ? (0, helpers_1.bytesFromBase64)(object.path) : new Uint8Array(),
            connection: (0, helpers_1.isSet)(object.connection) ? connection_1.ConnectionEnd.fromJSON(object.connection) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.path !== undefined && (obj.path = (0, helpers_1.base64FromBytes)(message.path !== undefined ? message.path : new Uint8Array()));
        message.connection !== undefined && (obj.connection = message.connection ? connection_1.ConnectionEnd.toJSON(message.connection) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseConnectionStateData();
        message.path = object.path ?? new Uint8Array();
        message.connection = object.connection !== undefined && object.connection !== null ? connection_1.ConnectionEnd.fromPartial(object.connection) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseConnectionStateData();
        if (object.path !== undefined && object.path !== null) {
            message.path = (0, helpers_1.bytesFromBase64)(object.path);
        }
        if (object.connection !== undefined && object.connection !== null) {
            message.connection = connection_1.ConnectionEnd.fromAmino(object.connection);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.path = message.path ? (0, helpers_1.base64FromBytes)(message.path) : undefined;
        obj.connection = message.connection ? connection_1.ConnectionEnd.toAmino(message.connection) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ConnectionStateData.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ConnectionStateData",
            value: exports.ConnectionStateData.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ConnectionStateData.decode(message.value);
    },
    toProto(message) {
        return exports.ConnectionStateData.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.solomachine.v2.ConnectionStateData",
            value: exports.ConnectionStateData.encode(message).finish()
        };
    }
};
function createBaseChannelStateData() {
    return {
        path: new Uint8Array(),
        channel: undefined
    };
}
exports.ChannelStateData = {
    typeUrl: "/ibc.lightclients.solomachine.v2.ChannelStateData",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.path.length !== 0) {
            writer.uint32(10).bytes(message.path);
        }
        if (message.channel !== undefined) {
            channel_1.Channel.encode(message.channel, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseChannelStateData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.path = reader.bytes();
                    break;
                case 2:
                    message.channel = channel_1.Channel.decode(reader, reader.uint32());
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
            path: (0, helpers_1.isSet)(object.path) ? (0, helpers_1.bytesFromBase64)(object.path) : new Uint8Array(),
            channel: (0, helpers_1.isSet)(object.channel) ? channel_1.Channel.fromJSON(object.channel) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.path !== undefined && (obj.path = (0, helpers_1.base64FromBytes)(message.path !== undefined ? message.path : new Uint8Array()));
        message.channel !== undefined && (obj.channel = message.channel ? channel_1.Channel.toJSON(message.channel) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseChannelStateData();
        message.path = object.path ?? new Uint8Array();
        message.channel = object.channel !== undefined && object.channel !== null ? channel_1.Channel.fromPartial(object.channel) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseChannelStateData();
        if (object.path !== undefined && object.path !== null) {
            message.path = (0, helpers_1.bytesFromBase64)(object.path);
        }
        if (object.channel !== undefined && object.channel !== null) {
            message.channel = channel_1.Channel.fromAmino(object.channel);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.path = message.path ? (0, helpers_1.base64FromBytes)(message.path) : undefined;
        obj.channel = message.channel ? channel_1.Channel.toAmino(message.channel) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ChannelStateData.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ChannelStateData",
            value: exports.ChannelStateData.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ChannelStateData.decode(message.value);
    },
    toProto(message) {
        return exports.ChannelStateData.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.solomachine.v2.ChannelStateData",
            value: exports.ChannelStateData.encode(message).finish()
        };
    }
};
function createBasePacketCommitmentData() {
    return {
        path: new Uint8Array(),
        commitment: new Uint8Array()
    };
}
exports.PacketCommitmentData = {
    typeUrl: "/ibc.lightclients.solomachine.v2.PacketCommitmentData",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.path.length !== 0) {
            writer.uint32(10).bytes(message.path);
        }
        if (message.commitment.length !== 0) {
            writer.uint32(18).bytes(message.commitment);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePacketCommitmentData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.path = reader.bytes();
                    break;
                case 2:
                    message.commitment = reader.bytes();
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
            path: (0, helpers_1.isSet)(object.path) ? (0, helpers_1.bytesFromBase64)(object.path) : new Uint8Array(),
            commitment: (0, helpers_1.isSet)(object.commitment) ? (0, helpers_1.bytesFromBase64)(object.commitment) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.path !== undefined && (obj.path = (0, helpers_1.base64FromBytes)(message.path !== undefined ? message.path : new Uint8Array()));
        message.commitment !== undefined && (obj.commitment = (0, helpers_1.base64FromBytes)(message.commitment !== undefined ? message.commitment : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBasePacketCommitmentData();
        message.path = object.path ?? new Uint8Array();
        message.commitment = object.commitment ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBasePacketCommitmentData();
        if (object.path !== undefined && object.path !== null) {
            message.path = (0, helpers_1.bytesFromBase64)(object.path);
        }
        if (object.commitment !== undefined && object.commitment !== null) {
            message.commitment = (0, helpers_1.bytesFromBase64)(object.commitment);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.path = message.path ? (0, helpers_1.base64FromBytes)(message.path) : undefined;
        obj.commitment = message.commitment ? (0, helpers_1.base64FromBytes)(message.commitment) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.PacketCommitmentData.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/PacketCommitmentData",
            value: exports.PacketCommitmentData.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.PacketCommitmentData.decode(message.value);
    },
    toProto(message) {
        return exports.PacketCommitmentData.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.solomachine.v2.PacketCommitmentData",
            value: exports.PacketCommitmentData.encode(message).finish()
        };
    }
};
function createBasePacketAcknowledgementData() {
    return {
        path: new Uint8Array(),
        acknowledgement: new Uint8Array()
    };
}
exports.PacketAcknowledgementData = {
    typeUrl: "/ibc.lightclients.solomachine.v2.PacketAcknowledgementData",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.path.length !== 0) {
            writer.uint32(10).bytes(message.path);
        }
        if (message.acknowledgement.length !== 0) {
            writer.uint32(18).bytes(message.acknowledgement);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePacketAcknowledgementData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.path = reader.bytes();
                    break;
                case 2:
                    message.acknowledgement = reader.bytes();
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
            path: (0, helpers_1.isSet)(object.path) ? (0, helpers_1.bytesFromBase64)(object.path) : new Uint8Array(),
            acknowledgement: (0, helpers_1.isSet)(object.acknowledgement) ? (0, helpers_1.bytesFromBase64)(object.acknowledgement) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.path !== undefined && (obj.path = (0, helpers_1.base64FromBytes)(message.path !== undefined ? message.path : new Uint8Array()));
        message.acknowledgement !== undefined && (obj.acknowledgement = (0, helpers_1.base64FromBytes)(message.acknowledgement !== undefined ? message.acknowledgement : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBasePacketAcknowledgementData();
        message.path = object.path ?? new Uint8Array();
        message.acknowledgement = object.acknowledgement ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBasePacketAcknowledgementData();
        if (object.path !== undefined && object.path !== null) {
            message.path = (0, helpers_1.bytesFromBase64)(object.path);
        }
        if (object.acknowledgement !== undefined && object.acknowledgement !== null) {
            message.acknowledgement = (0, helpers_1.bytesFromBase64)(object.acknowledgement);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.path = message.path ? (0, helpers_1.base64FromBytes)(message.path) : undefined;
        obj.acknowledgement = message.acknowledgement ? (0, helpers_1.base64FromBytes)(message.acknowledgement) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.PacketAcknowledgementData.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/PacketAcknowledgementData",
            value: exports.PacketAcknowledgementData.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.PacketAcknowledgementData.decode(message.value);
    },
    toProto(message) {
        return exports.PacketAcknowledgementData.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.solomachine.v2.PacketAcknowledgementData",
            value: exports.PacketAcknowledgementData.encode(message).finish()
        };
    }
};
function createBasePacketReceiptAbsenceData() {
    return {
        path: new Uint8Array()
    };
}
exports.PacketReceiptAbsenceData = {
    typeUrl: "/ibc.lightclients.solomachine.v2.PacketReceiptAbsenceData",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.path.length !== 0) {
            writer.uint32(10).bytes(message.path);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePacketReceiptAbsenceData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.path = reader.bytes();
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
            path: (0, helpers_1.isSet)(object.path) ? (0, helpers_1.bytesFromBase64)(object.path) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.path !== undefined && (obj.path = (0, helpers_1.base64FromBytes)(message.path !== undefined ? message.path : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBasePacketReceiptAbsenceData();
        message.path = object.path ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBasePacketReceiptAbsenceData();
        if (object.path !== undefined && object.path !== null) {
            message.path = (0, helpers_1.bytesFromBase64)(object.path);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.path = message.path ? (0, helpers_1.base64FromBytes)(message.path) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.PacketReceiptAbsenceData.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/PacketReceiptAbsenceData",
            value: exports.PacketReceiptAbsenceData.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.PacketReceiptAbsenceData.decode(message.value);
    },
    toProto(message) {
        return exports.PacketReceiptAbsenceData.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.solomachine.v2.PacketReceiptAbsenceData",
            value: exports.PacketReceiptAbsenceData.encode(message).finish()
        };
    }
};
function createBaseNextSequenceRecvData() {
    return {
        path: new Uint8Array(),
        next_seq_recv: BigInt(0)
    };
}
exports.NextSequenceRecvData = {
    typeUrl: "/ibc.lightclients.solomachine.v2.NextSequenceRecvData",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.path.length !== 0) {
            writer.uint32(10).bytes(message.path);
        }
        if (message.next_seq_recv !== BigInt(0)) {
            writer.uint32(16).uint64(message.next_seq_recv);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseNextSequenceRecvData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.path = reader.bytes();
                    break;
                case 2:
                    message.next_seq_recv = reader.uint64();
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
            path: (0, helpers_1.isSet)(object.path) ? (0, helpers_1.bytesFromBase64)(object.path) : new Uint8Array(),
            next_seq_recv: (0, helpers_1.isSet)(object.next_seq_recv) ? BigInt(object.next_seq_recv.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.path !== undefined && (obj.path = (0, helpers_1.base64FromBytes)(message.path !== undefined ? message.path : new Uint8Array()));
        message.next_seq_recv !== undefined && (obj.next_seq_recv = (message.next_seq_recv || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseNextSequenceRecvData();
        message.path = object.path ?? new Uint8Array();
        message.next_seq_recv = object.next_seq_recv !== undefined && object.next_seq_recv !== null ? BigInt(object.next_seq_recv.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseNextSequenceRecvData();
        if (object.path !== undefined && object.path !== null) {
            message.path = (0, helpers_1.bytesFromBase64)(object.path);
        }
        if (object.next_seq_recv !== undefined && object.next_seq_recv !== null) {
            message.next_seq_recv = BigInt(object.next_seq_recv);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.path = message.path ? (0, helpers_1.base64FromBytes)(message.path) : undefined;
        obj.next_seq_recv = message.next_seq_recv ? message.next_seq_recv.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.NextSequenceRecvData.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/NextSequenceRecvData",
            value: exports.NextSequenceRecvData.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.NextSequenceRecvData.decode(message.value);
    },
    toProto(message) {
        return exports.NextSequenceRecvData.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.solomachine.v2.NextSequenceRecvData",
            value: exports.NextSequenceRecvData.encode(message).finish()
        };
    }
};
//# sourceMappingURL=solomachine.js.map
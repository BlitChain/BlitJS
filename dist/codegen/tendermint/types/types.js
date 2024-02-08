"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TxProof = exports.BlockMeta = exports.LightBlock = exports.SignedHeader = exports.Proposal = exports.ExtendedCommitSig = exports.ExtendedCommit = exports.CommitSig = exports.Commit = exports.Vote = exports.Data = exports.Header = exports.BlockID = exports.Part = exports.PartSetHeader = exports.signedMsgTypeToJSON = exports.signedMsgTypeFromJSON = exports.SignedMsgTypeAmino = exports.SignedMsgTypeSDKType = exports.SignedMsgType = exports.protobufPackage = void 0;
//@ts-nocheck
const proof_1 = require("../crypto/proof");
const types_1 = require("../version/types");
const timestamp_1 = require("../../google/protobuf/timestamp");
const validator_1 = require("./validator");
const binary_1 = require("../../binary");
const helpers_1 = require("../../helpers");
const registry_1 = require("../../registry");
exports.protobufPackage = "tendermint.types";
/** SignedMsgType is a type of signed message in the consensus. */
var SignedMsgType;
(function (SignedMsgType) {
    SignedMsgType[SignedMsgType["SIGNED_MSG_TYPE_UNKNOWN"] = 0] = "SIGNED_MSG_TYPE_UNKNOWN";
    /** SIGNED_MSG_TYPE_PREVOTE - Votes */
    SignedMsgType[SignedMsgType["SIGNED_MSG_TYPE_PREVOTE"] = 1] = "SIGNED_MSG_TYPE_PREVOTE";
    SignedMsgType[SignedMsgType["SIGNED_MSG_TYPE_PRECOMMIT"] = 2] = "SIGNED_MSG_TYPE_PRECOMMIT";
    /** SIGNED_MSG_TYPE_PROPOSAL - Proposals */
    SignedMsgType[SignedMsgType["SIGNED_MSG_TYPE_PROPOSAL"] = 32] = "SIGNED_MSG_TYPE_PROPOSAL";
    SignedMsgType[SignedMsgType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(SignedMsgType || (exports.SignedMsgType = SignedMsgType = {}));
exports.SignedMsgTypeSDKType = SignedMsgType;
exports.SignedMsgTypeAmino = SignedMsgType;
function signedMsgTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "SIGNED_MSG_TYPE_UNKNOWN":
            return SignedMsgType.SIGNED_MSG_TYPE_UNKNOWN;
        case 1:
        case "SIGNED_MSG_TYPE_PREVOTE":
            return SignedMsgType.SIGNED_MSG_TYPE_PREVOTE;
        case 2:
        case "SIGNED_MSG_TYPE_PRECOMMIT":
            return SignedMsgType.SIGNED_MSG_TYPE_PRECOMMIT;
        case 32:
        case "SIGNED_MSG_TYPE_PROPOSAL":
            return SignedMsgType.SIGNED_MSG_TYPE_PROPOSAL;
        case -1:
        case "UNRECOGNIZED":
        default:
            return SignedMsgType.UNRECOGNIZED;
    }
}
exports.signedMsgTypeFromJSON = signedMsgTypeFromJSON;
function signedMsgTypeToJSON(object) {
    switch (object) {
        case SignedMsgType.SIGNED_MSG_TYPE_UNKNOWN:
            return "SIGNED_MSG_TYPE_UNKNOWN";
        case SignedMsgType.SIGNED_MSG_TYPE_PREVOTE:
            return "SIGNED_MSG_TYPE_PREVOTE";
        case SignedMsgType.SIGNED_MSG_TYPE_PRECOMMIT:
            return "SIGNED_MSG_TYPE_PRECOMMIT";
        case SignedMsgType.SIGNED_MSG_TYPE_PROPOSAL:
            return "SIGNED_MSG_TYPE_PROPOSAL";
        case SignedMsgType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.signedMsgTypeToJSON = signedMsgTypeToJSON;
function createBasePartSetHeader() {
    return {
        total: 0,
        hash: new Uint8Array()
    };
}
exports.PartSetHeader = {
    typeUrl: "/tendermint.types.PartSetHeader",
    is(o) {
        return o && (o.$typeUrl === exports.PartSetHeader.typeUrl || typeof o.total === "number" && (o.hash instanceof Uint8Array || typeof o.hash === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.PartSetHeader.typeUrl || typeof o.total === "number" && (o.hash instanceof Uint8Array || typeof o.hash === "string"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.PartSetHeader.typeUrl || typeof o.total === "number" && (o.hash instanceof Uint8Array || typeof o.hash === "string"));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.total !== 0) {
            writer.uint32(8).uint32(message.total);
        }
        if (message.hash.length !== 0) {
            writer.uint32(18).bytes(message.hash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePartSetHeader();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.total = reader.uint32();
                    break;
                case 2:
                    message.hash = reader.bytes();
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
            total: (0, helpers_1.isSet)(object.total) ? Number(object.total) : 0,
            hash: (0, helpers_1.isSet)(object.hash) ? (0, helpers_1.bytesFromBase64)(object.hash) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.total !== undefined && (obj.total = Math.round(message.total));
        message.hash !== undefined && (obj.hash = (0, helpers_1.base64FromBytes)(message.hash !== undefined ? message.hash : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBasePartSetHeader();
        message.total = object.total ?? 0;
        message.hash = object.hash ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBasePartSetHeader();
        if (object.total !== undefined && object.total !== null) {
            message.total = object.total;
        }
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = (0, helpers_1.bytesFromBase64)(object.hash);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.total = message.total;
        obj.hash = message.hash ? (0, helpers_1.base64FromBytes)(message.hash) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.PartSetHeader.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.PartSetHeader.decode(message.value);
    },
    toProto(message) {
        return exports.PartSetHeader.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.PartSetHeader",
            value: exports.PartSetHeader.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.PartSetHeader.typeUrl, exports.PartSetHeader);
function createBasePart() {
    return {
        index: 0,
        bytes: new Uint8Array(),
        proof: proof_1.Proof.fromPartial({})
    };
}
exports.Part = {
    typeUrl: "/tendermint.types.Part",
    is(o) {
        return o && (o.$typeUrl === exports.Part.typeUrl || typeof o.index === "number" && (o.bytes instanceof Uint8Array || typeof o.bytes === "string") && proof_1.Proof.is(o.proof));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.Part.typeUrl || typeof o.index === "number" && (o.bytes instanceof Uint8Array || typeof o.bytes === "string") && proof_1.Proof.isSDK(o.proof));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Part.typeUrl || typeof o.index === "number" && (o.bytes instanceof Uint8Array || typeof o.bytes === "string") && proof_1.Proof.isAmino(o.proof));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.index !== 0) {
            writer.uint32(8).uint32(message.index);
        }
        if (message.bytes.length !== 0) {
            writer.uint32(18).bytes(message.bytes);
        }
        if (message.proof !== undefined) {
            proof_1.Proof.encode(message.proof, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePart();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = reader.uint32();
                    break;
                case 2:
                    message.bytes = reader.bytes();
                    break;
                case 3:
                    message.proof = proof_1.Proof.decode(reader, reader.uint32());
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
            index: (0, helpers_1.isSet)(object.index) ? Number(object.index) : 0,
            bytes: (0, helpers_1.isSet)(object.bytes) ? (0, helpers_1.bytesFromBase64)(object.bytes) : new Uint8Array(),
            proof: (0, helpers_1.isSet)(object.proof) ? proof_1.Proof.fromJSON(object.proof) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = Math.round(message.index));
        message.bytes !== undefined && (obj.bytes = (0, helpers_1.base64FromBytes)(message.bytes !== undefined ? message.bytes : new Uint8Array()));
        message.proof !== undefined && (obj.proof = message.proof ? proof_1.Proof.toJSON(message.proof) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBasePart();
        message.index = object.index ?? 0;
        message.bytes = object.bytes ?? new Uint8Array();
        message.proof = object.proof !== undefined && object.proof !== null ? proof_1.Proof.fromPartial(object.proof) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBasePart();
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        if (object.bytes !== undefined && object.bytes !== null) {
            message.bytes = (0, helpers_1.bytesFromBase64)(object.bytes);
        }
        if (object.proof !== undefined && object.proof !== null) {
            message.proof = proof_1.Proof.fromAmino(object.proof);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.index = message.index;
        obj.bytes = message.bytes ? (0, helpers_1.base64FromBytes)(message.bytes) : undefined;
        obj.proof = message.proof ? proof_1.Proof.toAmino(message.proof) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Part.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Part.decode(message.value);
    },
    toProto(message) {
        return exports.Part.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.Part",
            value: exports.Part.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Part.typeUrl, exports.Part);
function createBaseBlockID() {
    return {
        hash: new Uint8Array(),
        part_set_header: exports.PartSetHeader.fromPartial({})
    };
}
exports.BlockID = {
    typeUrl: "/tendermint.types.BlockID",
    is(o) {
        return o && (o.$typeUrl === exports.BlockID.typeUrl || (o.hash instanceof Uint8Array || typeof o.hash === "string") && exports.PartSetHeader.is(o.part_set_header));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.BlockID.typeUrl || (o.hash instanceof Uint8Array || typeof o.hash === "string") && exports.PartSetHeader.isSDK(o.part_set_header));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.BlockID.typeUrl || (o.hash instanceof Uint8Array || typeof o.hash === "string") && exports.PartSetHeader.isAmino(o.part_set_header));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.hash.length !== 0) {
            writer.uint32(10).bytes(message.hash);
        }
        if (message.part_set_header !== undefined) {
            exports.PartSetHeader.encode(message.part_set_header, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBlockID();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hash = reader.bytes();
                    break;
                case 2:
                    message.part_set_header = exports.PartSetHeader.decode(reader, reader.uint32());
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
            hash: (0, helpers_1.isSet)(object.hash) ? (0, helpers_1.bytesFromBase64)(object.hash) : new Uint8Array(),
            part_set_header: (0, helpers_1.isSet)(object.part_set_header) ? exports.PartSetHeader.fromJSON(object.part_set_header) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.hash !== undefined && (obj.hash = (0, helpers_1.base64FromBytes)(message.hash !== undefined ? message.hash : new Uint8Array()));
        message.part_set_header !== undefined && (obj.part_set_header = message.part_set_header ? exports.PartSetHeader.toJSON(message.part_set_header) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseBlockID();
        message.hash = object.hash ?? new Uint8Array();
        message.part_set_header = object.part_set_header !== undefined && object.part_set_header !== null ? exports.PartSetHeader.fromPartial(object.part_set_header) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseBlockID();
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = (0, helpers_1.bytesFromBase64)(object.hash);
        }
        if (object.part_set_header !== undefined && object.part_set_header !== null) {
            message.part_set_header = exports.PartSetHeader.fromAmino(object.part_set_header);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.hash = message.hash ? (0, helpers_1.base64FromBytes)(message.hash) : undefined;
        obj.part_set_header = message.part_set_header ? exports.PartSetHeader.toAmino(message.part_set_header) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.BlockID.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.BlockID.decode(message.value);
    },
    toProto(message) {
        return exports.BlockID.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.BlockID",
            value: exports.BlockID.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.BlockID.typeUrl, exports.BlockID);
function createBaseHeader() {
    return {
        version: types_1.Consensus.fromPartial({}),
        chain_id: "",
        height: BigInt(0),
        time: new Date(),
        last_block_id: exports.BlockID.fromPartial({}),
        last_commit_hash: new Uint8Array(),
        data_hash: new Uint8Array(),
        validators_hash: new Uint8Array(),
        next_validators_hash: new Uint8Array(),
        consensus_hash: new Uint8Array(),
        app_hash: new Uint8Array(),
        last_results_hash: new Uint8Array(),
        evidence_hash: new Uint8Array(),
        proposer_address: new Uint8Array()
    };
}
exports.Header = {
    typeUrl: "/tendermint.types.Header",
    is(o) {
        return o && (o.$typeUrl === exports.Header.typeUrl || types_1.Consensus.is(o.version) && typeof o.chain_id === "string" && typeof o.height === "bigint" && timestamp_1.Timestamp.is(o.time) && exports.BlockID.is(o.last_block_id) && (o.last_commit_hash instanceof Uint8Array || typeof o.last_commit_hash === "string") && (o.data_hash instanceof Uint8Array || typeof o.data_hash === "string") && (o.validators_hash instanceof Uint8Array || typeof o.validators_hash === "string") && (o.next_validators_hash instanceof Uint8Array || typeof o.next_validators_hash === "string") && (o.consensus_hash instanceof Uint8Array || typeof o.consensus_hash === "string") && (o.app_hash instanceof Uint8Array || typeof o.app_hash === "string") && (o.last_results_hash instanceof Uint8Array || typeof o.last_results_hash === "string") && (o.evidence_hash instanceof Uint8Array || typeof o.evidence_hash === "string") && (o.proposer_address instanceof Uint8Array || typeof o.proposer_address === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.Header.typeUrl || types_1.Consensus.isSDK(o.version) && typeof o.chain_id === "string" && typeof o.height === "bigint" && timestamp_1.Timestamp.isSDK(o.time) && exports.BlockID.isSDK(o.last_block_id) && (o.last_commit_hash instanceof Uint8Array || typeof o.last_commit_hash === "string") && (o.data_hash instanceof Uint8Array || typeof o.data_hash === "string") && (o.validators_hash instanceof Uint8Array || typeof o.validators_hash === "string") && (o.next_validators_hash instanceof Uint8Array || typeof o.next_validators_hash === "string") && (o.consensus_hash instanceof Uint8Array || typeof o.consensus_hash === "string") && (o.app_hash instanceof Uint8Array || typeof o.app_hash === "string") && (o.last_results_hash instanceof Uint8Array || typeof o.last_results_hash === "string") && (o.evidence_hash instanceof Uint8Array || typeof o.evidence_hash === "string") && (o.proposer_address instanceof Uint8Array || typeof o.proposer_address === "string"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Header.typeUrl || types_1.Consensus.isAmino(o.version) && typeof o.chain_id === "string" && typeof o.height === "bigint" && timestamp_1.Timestamp.isAmino(o.time) && exports.BlockID.isAmino(o.last_block_id) && (o.last_commit_hash instanceof Uint8Array || typeof o.last_commit_hash === "string") && (o.data_hash instanceof Uint8Array || typeof o.data_hash === "string") && (o.validators_hash instanceof Uint8Array || typeof o.validators_hash === "string") && (o.next_validators_hash instanceof Uint8Array || typeof o.next_validators_hash === "string") && (o.consensus_hash instanceof Uint8Array || typeof o.consensus_hash === "string") && (o.app_hash instanceof Uint8Array || typeof o.app_hash === "string") && (o.last_results_hash instanceof Uint8Array || typeof o.last_results_hash === "string") && (o.evidence_hash instanceof Uint8Array || typeof o.evidence_hash === "string") && (o.proposer_address instanceof Uint8Array || typeof o.proposer_address === "string"));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.version !== undefined) {
            types_1.Consensus.encode(message.version, writer.uint32(10).fork()).ldelim();
        }
        if (message.chain_id !== "") {
            writer.uint32(18).string(message.chain_id);
        }
        if (message.height !== BigInt(0)) {
            writer.uint32(24).int64(message.height);
        }
        if (message.time !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.time), writer.uint32(34).fork()).ldelim();
        }
        if (message.last_block_id !== undefined) {
            exports.BlockID.encode(message.last_block_id, writer.uint32(42).fork()).ldelim();
        }
        if (message.last_commit_hash.length !== 0) {
            writer.uint32(50).bytes(message.last_commit_hash);
        }
        if (message.data_hash.length !== 0) {
            writer.uint32(58).bytes(message.data_hash);
        }
        if (message.validators_hash.length !== 0) {
            writer.uint32(66).bytes(message.validators_hash);
        }
        if (message.next_validators_hash.length !== 0) {
            writer.uint32(74).bytes(message.next_validators_hash);
        }
        if (message.consensus_hash.length !== 0) {
            writer.uint32(82).bytes(message.consensus_hash);
        }
        if (message.app_hash.length !== 0) {
            writer.uint32(90).bytes(message.app_hash);
        }
        if (message.last_results_hash.length !== 0) {
            writer.uint32(98).bytes(message.last_results_hash);
        }
        if (message.evidence_hash.length !== 0) {
            writer.uint32(106).bytes(message.evidence_hash);
        }
        if (message.proposer_address.length !== 0) {
            writer.uint32(114).bytes(message.proposer_address);
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
                    message.version = types_1.Consensus.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.chain_id = reader.string();
                    break;
                case 3:
                    message.height = reader.int64();
                    break;
                case 4:
                    message.time = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.last_block_id = exports.BlockID.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.last_commit_hash = reader.bytes();
                    break;
                case 7:
                    message.data_hash = reader.bytes();
                    break;
                case 8:
                    message.validators_hash = reader.bytes();
                    break;
                case 9:
                    message.next_validators_hash = reader.bytes();
                    break;
                case 10:
                    message.consensus_hash = reader.bytes();
                    break;
                case 11:
                    message.app_hash = reader.bytes();
                    break;
                case 12:
                    message.last_results_hash = reader.bytes();
                    break;
                case 13:
                    message.evidence_hash = reader.bytes();
                    break;
                case 14:
                    message.proposer_address = reader.bytes();
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
            version: (0, helpers_1.isSet)(object.version) ? types_1.Consensus.fromJSON(object.version) : undefined,
            chain_id: (0, helpers_1.isSet)(object.chain_id) ? String(object.chain_id) : "",
            height: (0, helpers_1.isSet)(object.height) ? BigInt(object.height.toString()) : BigInt(0),
            time: (0, helpers_1.isSet)(object.time) ? (0, helpers_1.fromJsonTimestamp)(object.time) : undefined,
            last_block_id: (0, helpers_1.isSet)(object.last_block_id) ? exports.BlockID.fromJSON(object.last_block_id) : undefined,
            last_commit_hash: (0, helpers_1.isSet)(object.last_commit_hash) ? (0, helpers_1.bytesFromBase64)(object.last_commit_hash) : new Uint8Array(),
            data_hash: (0, helpers_1.isSet)(object.data_hash) ? (0, helpers_1.bytesFromBase64)(object.data_hash) : new Uint8Array(),
            validators_hash: (0, helpers_1.isSet)(object.validators_hash) ? (0, helpers_1.bytesFromBase64)(object.validators_hash) : new Uint8Array(),
            next_validators_hash: (0, helpers_1.isSet)(object.next_validators_hash) ? (0, helpers_1.bytesFromBase64)(object.next_validators_hash) : new Uint8Array(),
            consensus_hash: (0, helpers_1.isSet)(object.consensus_hash) ? (0, helpers_1.bytesFromBase64)(object.consensus_hash) : new Uint8Array(),
            app_hash: (0, helpers_1.isSet)(object.app_hash) ? (0, helpers_1.bytesFromBase64)(object.app_hash) : new Uint8Array(),
            last_results_hash: (0, helpers_1.isSet)(object.last_results_hash) ? (0, helpers_1.bytesFromBase64)(object.last_results_hash) : new Uint8Array(),
            evidence_hash: (0, helpers_1.isSet)(object.evidence_hash) ? (0, helpers_1.bytesFromBase64)(object.evidence_hash) : new Uint8Array(),
            proposer_address: (0, helpers_1.isSet)(object.proposer_address) ? (0, helpers_1.bytesFromBase64)(object.proposer_address) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.version !== undefined && (obj.version = message.version ? types_1.Consensus.toJSON(message.version) : undefined);
        message.chain_id !== undefined && (obj.chain_id = message.chain_id);
        message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
        message.time !== undefined && (obj.time = message.time.toISOString());
        message.last_block_id !== undefined && (obj.last_block_id = message.last_block_id ? exports.BlockID.toJSON(message.last_block_id) : undefined);
        message.last_commit_hash !== undefined && (obj.last_commit_hash = (0, helpers_1.base64FromBytes)(message.last_commit_hash !== undefined ? message.last_commit_hash : new Uint8Array()));
        message.data_hash !== undefined && (obj.data_hash = (0, helpers_1.base64FromBytes)(message.data_hash !== undefined ? message.data_hash : new Uint8Array()));
        message.validators_hash !== undefined && (obj.validators_hash = (0, helpers_1.base64FromBytes)(message.validators_hash !== undefined ? message.validators_hash : new Uint8Array()));
        message.next_validators_hash !== undefined && (obj.next_validators_hash = (0, helpers_1.base64FromBytes)(message.next_validators_hash !== undefined ? message.next_validators_hash : new Uint8Array()));
        message.consensus_hash !== undefined && (obj.consensus_hash = (0, helpers_1.base64FromBytes)(message.consensus_hash !== undefined ? message.consensus_hash : new Uint8Array()));
        message.app_hash !== undefined && (obj.app_hash = (0, helpers_1.base64FromBytes)(message.app_hash !== undefined ? message.app_hash : new Uint8Array()));
        message.last_results_hash !== undefined && (obj.last_results_hash = (0, helpers_1.base64FromBytes)(message.last_results_hash !== undefined ? message.last_results_hash : new Uint8Array()));
        message.evidence_hash !== undefined && (obj.evidence_hash = (0, helpers_1.base64FromBytes)(message.evidence_hash !== undefined ? message.evidence_hash : new Uint8Array()));
        message.proposer_address !== undefined && (obj.proposer_address = (0, helpers_1.base64FromBytes)(message.proposer_address !== undefined ? message.proposer_address : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseHeader();
        message.version = object.version !== undefined && object.version !== null ? types_1.Consensus.fromPartial(object.version) : undefined;
        message.chain_id = object.chain_id ?? "";
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        message.time = object.time ?? undefined;
        message.last_block_id = object.last_block_id !== undefined && object.last_block_id !== null ? exports.BlockID.fromPartial(object.last_block_id) : undefined;
        message.last_commit_hash = object.last_commit_hash ?? new Uint8Array();
        message.data_hash = object.data_hash ?? new Uint8Array();
        message.validators_hash = object.validators_hash ?? new Uint8Array();
        message.next_validators_hash = object.next_validators_hash ?? new Uint8Array();
        message.consensus_hash = object.consensus_hash ?? new Uint8Array();
        message.app_hash = object.app_hash ?? new Uint8Array();
        message.last_results_hash = object.last_results_hash ?? new Uint8Array();
        message.evidence_hash = object.evidence_hash ?? new Uint8Array();
        message.proposer_address = object.proposer_address ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseHeader();
        if (object.version !== undefined && object.version !== null) {
            message.version = types_1.Consensus.fromAmino(object.version);
        }
        if (object.chain_id !== undefined && object.chain_id !== null) {
            message.chain_id = object.chain_id;
        }
        if (object.height !== undefined && object.height !== null) {
            message.height = BigInt(object.height);
        }
        if (object.time !== undefined && object.time !== null) {
            message.time = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.time));
        }
        if (object.last_block_id !== undefined && object.last_block_id !== null) {
            message.last_block_id = exports.BlockID.fromAmino(object.last_block_id);
        }
        if (object.last_commit_hash !== undefined && object.last_commit_hash !== null) {
            message.last_commit_hash = (0, helpers_1.bytesFromBase64)(object.last_commit_hash);
        }
        if (object.data_hash !== undefined && object.data_hash !== null) {
            message.data_hash = (0, helpers_1.bytesFromBase64)(object.data_hash);
        }
        if (object.validators_hash !== undefined && object.validators_hash !== null) {
            message.validators_hash = (0, helpers_1.bytesFromBase64)(object.validators_hash);
        }
        if (object.next_validators_hash !== undefined && object.next_validators_hash !== null) {
            message.next_validators_hash = (0, helpers_1.bytesFromBase64)(object.next_validators_hash);
        }
        if (object.consensus_hash !== undefined && object.consensus_hash !== null) {
            message.consensus_hash = (0, helpers_1.bytesFromBase64)(object.consensus_hash);
        }
        if (object.app_hash !== undefined && object.app_hash !== null) {
            message.app_hash = (0, helpers_1.bytesFromBase64)(object.app_hash);
        }
        if (object.last_results_hash !== undefined && object.last_results_hash !== null) {
            message.last_results_hash = (0, helpers_1.bytesFromBase64)(object.last_results_hash);
        }
        if (object.evidence_hash !== undefined && object.evidence_hash !== null) {
            message.evidence_hash = (0, helpers_1.bytesFromBase64)(object.evidence_hash);
        }
        if (object.proposer_address !== undefined && object.proposer_address !== null) {
            message.proposer_address = (0, helpers_1.bytesFromBase64)(object.proposer_address);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.version = message.version ? types_1.Consensus.toAmino(message.version) : undefined;
        obj.chain_id = message.chain_id;
        obj.height = message.height ? message.height.toString() : undefined;
        obj.time = message.time ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.time)) : undefined;
        obj.last_block_id = message.last_block_id ? exports.BlockID.toAmino(message.last_block_id) : undefined;
        obj.last_commit_hash = message.last_commit_hash ? (0, helpers_1.base64FromBytes)(message.last_commit_hash) : undefined;
        obj.data_hash = message.data_hash ? (0, helpers_1.base64FromBytes)(message.data_hash) : undefined;
        obj.validators_hash = message.validators_hash ? (0, helpers_1.base64FromBytes)(message.validators_hash) : undefined;
        obj.next_validators_hash = message.next_validators_hash ? (0, helpers_1.base64FromBytes)(message.next_validators_hash) : undefined;
        obj.consensus_hash = message.consensus_hash ? (0, helpers_1.base64FromBytes)(message.consensus_hash) : undefined;
        obj.app_hash = message.app_hash ? (0, helpers_1.base64FromBytes)(message.app_hash) : undefined;
        obj.last_results_hash = message.last_results_hash ? (0, helpers_1.base64FromBytes)(message.last_results_hash) : undefined;
        obj.evidence_hash = message.evidence_hash ? (0, helpers_1.base64FromBytes)(message.evidence_hash) : undefined;
        obj.proposer_address = message.proposer_address ? (0, helpers_1.base64FromBytes)(message.proposer_address) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Header.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Header.decode(message.value);
    },
    toProto(message) {
        return exports.Header.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.Header",
            value: exports.Header.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Header.typeUrl, exports.Header);
function createBaseData() {
    return {
        txs: []
    };
}
exports.Data = {
    typeUrl: "/tendermint.types.Data",
    is(o) {
        return o && (o.$typeUrl === exports.Data.typeUrl || Array.isArray(o.txs) && (!o.txs.length || o.txs[0] instanceof Uint8Array || typeof o.txs[0] === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.Data.typeUrl || Array.isArray(o.txs) && (!o.txs.length || o.txs[0] instanceof Uint8Array || typeof o.txs[0] === "string"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Data.typeUrl || Array.isArray(o.txs) && (!o.txs.length || o.txs[0] instanceof Uint8Array || typeof o.txs[0] === "string"));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.txs) {
            writer.uint32(10).bytes(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.txs.push(reader.bytes());
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
            txs: Array.isArray(object?.txs) ? object.txs.map((e) => (0, helpers_1.bytesFromBase64)(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.txs) {
            obj.txs = message.txs.map(e => (0, helpers_1.base64FromBytes)(e !== undefined ? e : new Uint8Array()));
        }
        else {
            obj.txs = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseData();
        message.txs = object.txs?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseData();
        message.txs = object.txs?.map(e => (0, helpers_1.bytesFromBase64)(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.txs) {
            obj.txs = message.txs.map(e => (0, helpers_1.base64FromBytes)(e));
        }
        else {
            obj.txs = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Data.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Data.decode(message.value);
    },
    toProto(message) {
        return exports.Data.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.Data",
            value: exports.Data.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Data.typeUrl, exports.Data);
function createBaseVote() {
    return {
        type: 0,
        height: BigInt(0),
        round: 0,
        block_id: exports.BlockID.fromPartial({}),
        timestamp: new Date(),
        validator_address: new Uint8Array(),
        validator_index: 0,
        signature: new Uint8Array(),
        extension: new Uint8Array(),
        extension_signature: new Uint8Array()
    };
}
exports.Vote = {
    typeUrl: "/tendermint.types.Vote",
    is(o) {
        return o && (o.$typeUrl === exports.Vote.typeUrl || (0, helpers_1.isSet)(o.type) && typeof o.height === "bigint" && typeof o.round === "number" && exports.BlockID.is(o.block_id) && timestamp_1.Timestamp.is(o.timestamp) && (o.validator_address instanceof Uint8Array || typeof o.validator_address === "string") && typeof o.validator_index === "number" && (o.signature instanceof Uint8Array || typeof o.signature === "string") && (o.extension instanceof Uint8Array || typeof o.extension === "string") && (o.extension_signature instanceof Uint8Array || typeof o.extension_signature === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.Vote.typeUrl || (0, helpers_1.isSet)(o.type) && typeof o.height === "bigint" && typeof o.round === "number" && exports.BlockID.isSDK(o.block_id) && timestamp_1.Timestamp.isSDK(o.timestamp) && (o.validator_address instanceof Uint8Array || typeof o.validator_address === "string") && typeof o.validator_index === "number" && (o.signature instanceof Uint8Array || typeof o.signature === "string") && (o.extension instanceof Uint8Array || typeof o.extension === "string") && (o.extension_signature instanceof Uint8Array || typeof o.extension_signature === "string"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Vote.typeUrl || (0, helpers_1.isSet)(o.type) && typeof o.height === "bigint" && typeof o.round === "number" && exports.BlockID.isAmino(o.block_id) && timestamp_1.Timestamp.isAmino(o.timestamp) && (o.validator_address instanceof Uint8Array || typeof o.validator_address === "string") && typeof o.validator_index === "number" && (o.signature instanceof Uint8Array || typeof o.signature === "string") && (o.extension instanceof Uint8Array || typeof o.extension === "string") && (o.extension_signature instanceof Uint8Array || typeof o.extension_signature === "string"));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        if (message.height !== BigInt(0)) {
            writer.uint32(16).int64(message.height);
        }
        if (message.round !== 0) {
            writer.uint32(24).int32(message.round);
        }
        if (message.block_id !== undefined) {
            exports.BlockID.encode(message.block_id, writer.uint32(34).fork()).ldelim();
        }
        if (message.timestamp !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.timestamp), writer.uint32(42).fork()).ldelim();
        }
        if (message.validator_address.length !== 0) {
            writer.uint32(50).bytes(message.validator_address);
        }
        if (message.validator_index !== 0) {
            writer.uint32(56).int32(message.validator_index);
        }
        if (message.signature.length !== 0) {
            writer.uint32(66).bytes(message.signature);
        }
        if (message.extension.length !== 0) {
            writer.uint32(74).bytes(message.extension);
        }
        if (message.extension_signature.length !== 0) {
            writer.uint32(82).bytes(message.extension_signature);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVote();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.height = reader.int64();
                    break;
                case 3:
                    message.round = reader.int32();
                    break;
                case 4:
                    message.block_id = exports.BlockID.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.timestamp = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.validator_address = reader.bytes();
                    break;
                case 7:
                    message.validator_index = reader.int32();
                    break;
                case 8:
                    message.signature = reader.bytes();
                    break;
                case 9:
                    message.extension = reader.bytes();
                    break;
                case 10:
                    message.extension_signature = reader.bytes();
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
            type: (0, helpers_1.isSet)(object.type) ? signedMsgTypeFromJSON(object.type) : -1,
            height: (0, helpers_1.isSet)(object.height) ? BigInt(object.height.toString()) : BigInt(0),
            round: (0, helpers_1.isSet)(object.round) ? Number(object.round) : 0,
            block_id: (0, helpers_1.isSet)(object.block_id) ? exports.BlockID.fromJSON(object.block_id) : undefined,
            timestamp: (0, helpers_1.isSet)(object.timestamp) ? (0, helpers_1.fromJsonTimestamp)(object.timestamp) : undefined,
            validator_address: (0, helpers_1.isSet)(object.validator_address) ? (0, helpers_1.bytesFromBase64)(object.validator_address) : new Uint8Array(),
            validator_index: (0, helpers_1.isSet)(object.validator_index) ? Number(object.validator_index) : 0,
            signature: (0, helpers_1.isSet)(object.signature) ? (0, helpers_1.bytesFromBase64)(object.signature) : new Uint8Array(),
            extension: (0, helpers_1.isSet)(object.extension) ? (0, helpers_1.bytesFromBase64)(object.extension) : new Uint8Array(),
            extension_signature: (0, helpers_1.isSet)(object.extension_signature) ? (0, helpers_1.bytesFromBase64)(object.extension_signature) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.type !== undefined && (obj.type = signedMsgTypeToJSON(message.type));
        message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
        message.round !== undefined && (obj.round = Math.round(message.round));
        message.block_id !== undefined && (obj.block_id = message.block_id ? exports.BlockID.toJSON(message.block_id) : undefined);
        message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
        message.validator_address !== undefined && (obj.validator_address = (0, helpers_1.base64FromBytes)(message.validator_address !== undefined ? message.validator_address : new Uint8Array()));
        message.validator_index !== undefined && (obj.validator_index = Math.round(message.validator_index));
        message.signature !== undefined && (obj.signature = (0, helpers_1.base64FromBytes)(message.signature !== undefined ? message.signature : new Uint8Array()));
        message.extension !== undefined && (obj.extension = (0, helpers_1.base64FromBytes)(message.extension !== undefined ? message.extension : new Uint8Array()));
        message.extension_signature !== undefined && (obj.extension_signature = (0, helpers_1.base64FromBytes)(message.extension_signature !== undefined ? message.extension_signature : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseVote();
        message.type = object.type ?? 0;
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        message.round = object.round ?? 0;
        message.block_id = object.block_id !== undefined && object.block_id !== null ? exports.BlockID.fromPartial(object.block_id) : undefined;
        message.timestamp = object.timestamp ?? undefined;
        message.validator_address = object.validator_address ?? new Uint8Array();
        message.validator_index = object.validator_index ?? 0;
        message.signature = object.signature ?? new Uint8Array();
        message.extension = object.extension ?? new Uint8Array();
        message.extension_signature = object.extension_signature ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseVote();
        if (object.type !== undefined && object.type !== null) {
            message.type = signedMsgTypeFromJSON(object.type);
        }
        if (object.height !== undefined && object.height !== null) {
            message.height = BigInt(object.height);
        }
        if (object.round !== undefined && object.round !== null) {
            message.round = object.round;
        }
        if (object.block_id !== undefined && object.block_id !== null) {
            message.block_id = exports.BlockID.fromAmino(object.block_id);
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.timestamp));
        }
        if (object.validator_address !== undefined && object.validator_address !== null) {
            message.validator_address = (0, helpers_1.bytesFromBase64)(object.validator_address);
        }
        if (object.validator_index !== undefined && object.validator_index !== null) {
            message.validator_index = object.validator_index;
        }
        if (object.signature !== undefined && object.signature !== null) {
            message.signature = (0, helpers_1.bytesFromBase64)(object.signature);
        }
        if (object.extension !== undefined && object.extension !== null) {
            message.extension = (0, helpers_1.bytesFromBase64)(object.extension);
        }
        if (object.extension_signature !== undefined && object.extension_signature !== null) {
            message.extension_signature = (0, helpers_1.bytesFromBase64)(object.extension_signature);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.type = message.type;
        obj.height = message.height ? message.height.toString() : undefined;
        obj.round = message.round;
        obj.block_id = message.block_id ? exports.BlockID.toAmino(message.block_id) : undefined;
        obj.timestamp = message.timestamp ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.timestamp)) : undefined;
        obj.validator_address = message.validator_address ? (0, helpers_1.base64FromBytes)(message.validator_address) : undefined;
        obj.validator_index = message.validator_index;
        obj.signature = message.signature ? (0, helpers_1.base64FromBytes)(message.signature) : undefined;
        obj.extension = message.extension ? (0, helpers_1.base64FromBytes)(message.extension) : undefined;
        obj.extension_signature = message.extension_signature ? (0, helpers_1.base64FromBytes)(message.extension_signature) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Vote.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Vote.decode(message.value);
    },
    toProto(message) {
        return exports.Vote.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.Vote",
            value: exports.Vote.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Vote.typeUrl, exports.Vote);
function createBaseCommit() {
    return {
        height: BigInt(0),
        round: 0,
        block_id: exports.BlockID.fromPartial({}),
        signatures: []
    };
}
exports.Commit = {
    typeUrl: "/tendermint.types.Commit",
    is(o) {
        return o && (o.$typeUrl === exports.Commit.typeUrl || typeof o.height === "bigint" && typeof o.round === "number" && exports.BlockID.is(o.block_id) && Array.isArray(o.signatures) && (!o.signatures.length || exports.CommitSig.is(o.signatures[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.Commit.typeUrl || typeof o.height === "bigint" && typeof o.round === "number" && exports.BlockID.isSDK(o.block_id) && Array.isArray(o.signatures) && (!o.signatures.length || exports.CommitSig.isSDK(o.signatures[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Commit.typeUrl || typeof o.height === "bigint" && typeof o.round === "number" && exports.BlockID.isAmino(o.block_id) && Array.isArray(o.signatures) && (!o.signatures.length || exports.CommitSig.isAmino(o.signatures[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.height !== BigInt(0)) {
            writer.uint32(8).int64(message.height);
        }
        if (message.round !== 0) {
            writer.uint32(16).int32(message.round);
        }
        if (message.block_id !== undefined) {
            exports.BlockID.encode(message.block_id, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.signatures) {
            exports.CommitSig.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCommit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = reader.int64();
                    break;
                case 2:
                    message.round = reader.int32();
                    break;
                case 3:
                    message.block_id = exports.BlockID.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.signatures.push(exports.CommitSig.decode(reader, reader.uint32()));
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
            height: (0, helpers_1.isSet)(object.height) ? BigInt(object.height.toString()) : BigInt(0),
            round: (0, helpers_1.isSet)(object.round) ? Number(object.round) : 0,
            block_id: (0, helpers_1.isSet)(object.block_id) ? exports.BlockID.fromJSON(object.block_id) : undefined,
            signatures: Array.isArray(object?.signatures) ? object.signatures.map((e) => exports.CommitSig.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
        message.round !== undefined && (obj.round = Math.round(message.round));
        message.block_id !== undefined && (obj.block_id = message.block_id ? exports.BlockID.toJSON(message.block_id) : undefined);
        if (message.signatures) {
            obj.signatures = message.signatures.map(e => e ? exports.CommitSig.toJSON(e) : undefined);
        }
        else {
            obj.signatures = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseCommit();
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        message.round = object.round ?? 0;
        message.block_id = object.block_id !== undefined && object.block_id !== null ? exports.BlockID.fromPartial(object.block_id) : undefined;
        message.signatures = object.signatures?.map(e => exports.CommitSig.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseCommit();
        if (object.height !== undefined && object.height !== null) {
            message.height = BigInt(object.height);
        }
        if (object.round !== undefined && object.round !== null) {
            message.round = object.round;
        }
        if (object.block_id !== undefined && object.block_id !== null) {
            message.block_id = exports.BlockID.fromAmino(object.block_id);
        }
        message.signatures = object.signatures?.map(e => exports.CommitSig.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.height = message.height ? message.height.toString() : undefined;
        obj.round = message.round;
        obj.block_id = message.block_id ? exports.BlockID.toAmino(message.block_id) : undefined;
        if (message.signatures) {
            obj.signatures = message.signatures.map(e => e ? exports.CommitSig.toAmino(e) : undefined);
        }
        else {
            obj.signatures = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Commit.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Commit.decode(message.value);
    },
    toProto(message) {
        return exports.Commit.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.Commit",
            value: exports.Commit.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Commit.typeUrl, exports.Commit);
function createBaseCommitSig() {
    return {
        block_id_flag: 0,
        validator_address: new Uint8Array(),
        timestamp: new Date(),
        signature: new Uint8Array()
    };
}
exports.CommitSig = {
    typeUrl: "/tendermint.types.CommitSig",
    is(o) {
        return o && (o.$typeUrl === exports.CommitSig.typeUrl || (0, helpers_1.isSet)(o.block_id_flag) && (o.validator_address instanceof Uint8Array || typeof o.validator_address === "string") && timestamp_1.Timestamp.is(o.timestamp) && (o.signature instanceof Uint8Array || typeof o.signature === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.CommitSig.typeUrl || (0, helpers_1.isSet)(o.block_id_flag) && (o.validator_address instanceof Uint8Array || typeof o.validator_address === "string") && timestamp_1.Timestamp.isSDK(o.timestamp) && (o.signature instanceof Uint8Array || typeof o.signature === "string"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.CommitSig.typeUrl || (0, helpers_1.isSet)(o.block_id_flag) && (o.validator_address instanceof Uint8Array || typeof o.validator_address === "string") && timestamp_1.Timestamp.isAmino(o.timestamp) && (o.signature instanceof Uint8Array || typeof o.signature === "string"));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.block_id_flag !== 0) {
            writer.uint32(8).int32(message.block_id_flag);
        }
        if (message.validator_address.length !== 0) {
            writer.uint32(18).bytes(message.validator_address);
        }
        if (message.timestamp !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.timestamp), writer.uint32(26).fork()).ldelim();
        }
        if (message.signature.length !== 0) {
            writer.uint32(34).bytes(message.signature);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCommitSig();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.block_id_flag = reader.int32();
                    break;
                case 2:
                    message.validator_address = reader.bytes();
                    break;
                case 3:
                    message.timestamp = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.signature = reader.bytes();
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
            block_id_flag: (0, helpers_1.isSet)(object.block_id_flag) ? (0, validator_1.blockIDFlagFromJSON)(object.block_id_flag) : -1,
            validator_address: (0, helpers_1.isSet)(object.validator_address) ? (0, helpers_1.bytesFromBase64)(object.validator_address) : new Uint8Array(),
            timestamp: (0, helpers_1.isSet)(object.timestamp) ? (0, helpers_1.fromJsonTimestamp)(object.timestamp) : undefined,
            signature: (0, helpers_1.isSet)(object.signature) ? (0, helpers_1.bytesFromBase64)(object.signature) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.block_id_flag !== undefined && (obj.block_id_flag = (0, validator_1.blockIDFlagToJSON)(message.block_id_flag));
        message.validator_address !== undefined && (obj.validator_address = (0, helpers_1.base64FromBytes)(message.validator_address !== undefined ? message.validator_address : new Uint8Array()));
        message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
        message.signature !== undefined && (obj.signature = (0, helpers_1.base64FromBytes)(message.signature !== undefined ? message.signature : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseCommitSig();
        message.block_id_flag = object.block_id_flag ?? 0;
        message.validator_address = object.validator_address ?? new Uint8Array();
        message.timestamp = object.timestamp ?? undefined;
        message.signature = object.signature ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseCommitSig();
        if (object.block_id_flag !== undefined && object.block_id_flag !== null) {
            message.block_id_flag = (0, validator_1.blockIDFlagFromJSON)(object.block_id_flag);
        }
        if (object.validator_address !== undefined && object.validator_address !== null) {
            message.validator_address = (0, helpers_1.bytesFromBase64)(object.validator_address);
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.timestamp));
        }
        if (object.signature !== undefined && object.signature !== null) {
            message.signature = (0, helpers_1.bytesFromBase64)(object.signature);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.block_id_flag = message.block_id_flag;
        obj.validator_address = message.validator_address ? (0, helpers_1.base64FromBytes)(message.validator_address) : undefined;
        obj.timestamp = message.timestamp ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.timestamp)) : undefined;
        obj.signature = message.signature ? (0, helpers_1.base64FromBytes)(message.signature) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.CommitSig.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.CommitSig.decode(message.value);
    },
    toProto(message) {
        return exports.CommitSig.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.CommitSig",
            value: exports.CommitSig.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.CommitSig.typeUrl, exports.CommitSig);
function createBaseExtendedCommit() {
    return {
        height: BigInt(0),
        round: 0,
        block_id: exports.BlockID.fromPartial({}),
        extended_signatures: []
    };
}
exports.ExtendedCommit = {
    typeUrl: "/tendermint.types.ExtendedCommit",
    is(o) {
        return o && (o.$typeUrl === exports.ExtendedCommit.typeUrl || typeof o.height === "bigint" && typeof o.round === "number" && exports.BlockID.is(o.block_id) && Array.isArray(o.extended_signatures) && (!o.extended_signatures.length || exports.ExtendedCommitSig.is(o.extended_signatures[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.ExtendedCommit.typeUrl || typeof o.height === "bigint" && typeof o.round === "number" && exports.BlockID.isSDK(o.block_id) && Array.isArray(o.extended_signatures) && (!o.extended_signatures.length || exports.ExtendedCommitSig.isSDK(o.extended_signatures[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.ExtendedCommit.typeUrl || typeof o.height === "bigint" && typeof o.round === "number" && exports.BlockID.isAmino(o.block_id) && Array.isArray(o.extended_signatures) && (!o.extended_signatures.length || exports.ExtendedCommitSig.isAmino(o.extended_signatures[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.height !== BigInt(0)) {
            writer.uint32(8).int64(message.height);
        }
        if (message.round !== 0) {
            writer.uint32(16).int32(message.round);
        }
        if (message.block_id !== undefined) {
            exports.BlockID.encode(message.block_id, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.extended_signatures) {
            exports.ExtendedCommitSig.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseExtendedCommit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = reader.int64();
                    break;
                case 2:
                    message.round = reader.int32();
                    break;
                case 3:
                    message.block_id = exports.BlockID.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.extended_signatures.push(exports.ExtendedCommitSig.decode(reader, reader.uint32()));
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
            height: (0, helpers_1.isSet)(object.height) ? BigInt(object.height.toString()) : BigInt(0),
            round: (0, helpers_1.isSet)(object.round) ? Number(object.round) : 0,
            block_id: (0, helpers_1.isSet)(object.block_id) ? exports.BlockID.fromJSON(object.block_id) : undefined,
            extended_signatures: Array.isArray(object?.extended_signatures) ? object.extended_signatures.map((e) => exports.ExtendedCommitSig.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
        message.round !== undefined && (obj.round = Math.round(message.round));
        message.block_id !== undefined && (obj.block_id = message.block_id ? exports.BlockID.toJSON(message.block_id) : undefined);
        if (message.extended_signatures) {
            obj.extended_signatures = message.extended_signatures.map(e => e ? exports.ExtendedCommitSig.toJSON(e) : undefined);
        }
        else {
            obj.extended_signatures = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseExtendedCommit();
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        message.round = object.round ?? 0;
        message.block_id = object.block_id !== undefined && object.block_id !== null ? exports.BlockID.fromPartial(object.block_id) : undefined;
        message.extended_signatures = object.extended_signatures?.map(e => exports.ExtendedCommitSig.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseExtendedCommit();
        if (object.height !== undefined && object.height !== null) {
            message.height = BigInt(object.height);
        }
        if (object.round !== undefined && object.round !== null) {
            message.round = object.round;
        }
        if (object.block_id !== undefined && object.block_id !== null) {
            message.block_id = exports.BlockID.fromAmino(object.block_id);
        }
        message.extended_signatures = object.extended_signatures?.map(e => exports.ExtendedCommitSig.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.height = message.height ? message.height.toString() : undefined;
        obj.round = message.round;
        obj.block_id = message.block_id ? exports.BlockID.toAmino(message.block_id) : undefined;
        if (message.extended_signatures) {
            obj.extended_signatures = message.extended_signatures.map(e => e ? exports.ExtendedCommitSig.toAmino(e) : undefined);
        }
        else {
            obj.extended_signatures = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ExtendedCommit.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ExtendedCommit.decode(message.value);
    },
    toProto(message) {
        return exports.ExtendedCommit.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.ExtendedCommit",
            value: exports.ExtendedCommit.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.ExtendedCommit.typeUrl, exports.ExtendedCommit);
function createBaseExtendedCommitSig() {
    return {
        block_id_flag: 0,
        validator_address: new Uint8Array(),
        timestamp: new Date(),
        signature: new Uint8Array(),
        extension: new Uint8Array(),
        extension_signature: new Uint8Array()
    };
}
exports.ExtendedCommitSig = {
    typeUrl: "/tendermint.types.ExtendedCommitSig",
    is(o) {
        return o && (o.$typeUrl === exports.ExtendedCommitSig.typeUrl || (0, helpers_1.isSet)(o.block_id_flag) && (o.validator_address instanceof Uint8Array || typeof o.validator_address === "string") && timestamp_1.Timestamp.is(o.timestamp) && (o.signature instanceof Uint8Array || typeof o.signature === "string") && (o.extension instanceof Uint8Array || typeof o.extension === "string") && (o.extension_signature instanceof Uint8Array || typeof o.extension_signature === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.ExtendedCommitSig.typeUrl || (0, helpers_1.isSet)(o.block_id_flag) && (o.validator_address instanceof Uint8Array || typeof o.validator_address === "string") && timestamp_1.Timestamp.isSDK(o.timestamp) && (o.signature instanceof Uint8Array || typeof o.signature === "string") && (o.extension instanceof Uint8Array || typeof o.extension === "string") && (o.extension_signature instanceof Uint8Array || typeof o.extension_signature === "string"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.ExtendedCommitSig.typeUrl || (0, helpers_1.isSet)(o.block_id_flag) && (o.validator_address instanceof Uint8Array || typeof o.validator_address === "string") && timestamp_1.Timestamp.isAmino(o.timestamp) && (o.signature instanceof Uint8Array || typeof o.signature === "string") && (o.extension instanceof Uint8Array || typeof o.extension === "string") && (o.extension_signature instanceof Uint8Array || typeof o.extension_signature === "string"));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.block_id_flag !== 0) {
            writer.uint32(8).int32(message.block_id_flag);
        }
        if (message.validator_address.length !== 0) {
            writer.uint32(18).bytes(message.validator_address);
        }
        if (message.timestamp !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.timestamp), writer.uint32(26).fork()).ldelim();
        }
        if (message.signature.length !== 0) {
            writer.uint32(34).bytes(message.signature);
        }
        if (message.extension.length !== 0) {
            writer.uint32(42).bytes(message.extension);
        }
        if (message.extension_signature.length !== 0) {
            writer.uint32(50).bytes(message.extension_signature);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseExtendedCommitSig();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.block_id_flag = reader.int32();
                    break;
                case 2:
                    message.validator_address = reader.bytes();
                    break;
                case 3:
                    message.timestamp = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.signature = reader.bytes();
                    break;
                case 5:
                    message.extension = reader.bytes();
                    break;
                case 6:
                    message.extension_signature = reader.bytes();
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
            block_id_flag: (0, helpers_1.isSet)(object.block_id_flag) ? (0, validator_1.blockIDFlagFromJSON)(object.block_id_flag) : -1,
            validator_address: (0, helpers_1.isSet)(object.validator_address) ? (0, helpers_1.bytesFromBase64)(object.validator_address) : new Uint8Array(),
            timestamp: (0, helpers_1.isSet)(object.timestamp) ? (0, helpers_1.fromJsonTimestamp)(object.timestamp) : undefined,
            signature: (0, helpers_1.isSet)(object.signature) ? (0, helpers_1.bytesFromBase64)(object.signature) : new Uint8Array(),
            extension: (0, helpers_1.isSet)(object.extension) ? (0, helpers_1.bytesFromBase64)(object.extension) : new Uint8Array(),
            extension_signature: (0, helpers_1.isSet)(object.extension_signature) ? (0, helpers_1.bytesFromBase64)(object.extension_signature) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.block_id_flag !== undefined && (obj.block_id_flag = (0, validator_1.blockIDFlagToJSON)(message.block_id_flag));
        message.validator_address !== undefined && (obj.validator_address = (0, helpers_1.base64FromBytes)(message.validator_address !== undefined ? message.validator_address : new Uint8Array()));
        message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
        message.signature !== undefined && (obj.signature = (0, helpers_1.base64FromBytes)(message.signature !== undefined ? message.signature : new Uint8Array()));
        message.extension !== undefined && (obj.extension = (0, helpers_1.base64FromBytes)(message.extension !== undefined ? message.extension : new Uint8Array()));
        message.extension_signature !== undefined && (obj.extension_signature = (0, helpers_1.base64FromBytes)(message.extension_signature !== undefined ? message.extension_signature : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseExtendedCommitSig();
        message.block_id_flag = object.block_id_flag ?? 0;
        message.validator_address = object.validator_address ?? new Uint8Array();
        message.timestamp = object.timestamp ?? undefined;
        message.signature = object.signature ?? new Uint8Array();
        message.extension = object.extension ?? new Uint8Array();
        message.extension_signature = object.extension_signature ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseExtendedCommitSig();
        if (object.block_id_flag !== undefined && object.block_id_flag !== null) {
            message.block_id_flag = (0, validator_1.blockIDFlagFromJSON)(object.block_id_flag);
        }
        if (object.validator_address !== undefined && object.validator_address !== null) {
            message.validator_address = (0, helpers_1.bytesFromBase64)(object.validator_address);
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.timestamp));
        }
        if (object.signature !== undefined && object.signature !== null) {
            message.signature = (0, helpers_1.bytesFromBase64)(object.signature);
        }
        if (object.extension !== undefined && object.extension !== null) {
            message.extension = (0, helpers_1.bytesFromBase64)(object.extension);
        }
        if (object.extension_signature !== undefined && object.extension_signature !== null) {
            message.extension_signature = (0, helpers_1.bytesFromBase64)(object.extension_signature);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.block_id_flag = message.block_id_flag;
        obj.validator_address = message.validator_address ? (0, helpers_1.base64FromBytes)(message.validator_address) : undefined;
        obj.timestamp = message.timestamp ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.timestamp)) : undefined;
        obj.signature = message.signature ? (0, helpers_1.base64FromBytes)(message.signature) : undefined;
        obj.extension = message.extension ? (0, helpers_1.base64FromBytes)(message.extension) : undefined;
        obj.extension_signature = message.extension_signature ? (0, helpers_1.base64FromBytes)(message.extension_signature) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ExtendedCommitSig.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ExtendedCommitSig.decode(message.value);
    },
    toProto(message) {
        return exports.ExtendedCommitSig.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.ExtendedCommitSig",
            value: exports.ExtendedCommitSig.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.ExtendedCommitSig.typeUrl, exports.ExtendedCommitSig);
function createBaseProposal() {
    return {
        type: 0,
        height: BigInt(0),
        round: 0,
        pol_round: 0,
        block_id: exports.BlockID.fromPartial({}),
        timestamp: new Date(),
        signature: new Uint8Array()
    };
}
exports.Proposal = {
    typeUrl: "/tendermint.types.Proposal",
    is(o) {
        return o && (o.$typeUrl === exports.Proposal.typeUrl || (0, helpers_1.isSet)(o.type) && typeof o.height === "bigint" && typeof o.round === "number" && typeof o.pol_round === "number" && exports.BlockID.is(o.block_id) && timestamp_1.Timestamp.is(o.timestamp) && (o.signature instanceof Uint8Array || typeof o.signature === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.Proposal.typeUrl || (0, helpers_1.isSet)(o.type) && typeof o.height === "bigint" && typeof o.round === "number" && typeof o.pol_round === "number" && exports.BlockID.isSDK(o.block_id) && timestamp_1.Timestamp.isSDK(o.timestamp) && (o.signature instanceof Uint8Array || typeof o.signature === "string"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Proposal.typeUrl || (0, helpers_1.isSet)(o.type) && typeof o.height === "bigint" && typeof o.round === "number" && typeof o.pol_round === "number" && exports.BlockID.isAmino(o.block_id) && timestamp_1.Timestamp.isAmino(o.timestamp) && (o.signature instanceof Uint8Array || typeof o.signature === "string"));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        if (message.height !== BigInt(0)) {
            writer.uint32(16).int64(message.height);
        }
        if (message.round !== 0) {
            writer.uint32(24).int32(message.round);
        }
        if (message.pol_round !== 0) {
            writer.uint32(32).int32(message.pol_round);
        }
        if (message.block_id !== undefined) {
            exports.BlockID.encode(message.block_id, writer.uint32(42).fork()).ldelim();
        }
        if (message.timestamp !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.timestamp), writer.uint32(50).fork()).ldelim();
        }
        if (message.signature.length !== 0) {
            writer.uint32(58).bytes(message.signature);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.height = reader.int64();
                    break;
                case 3:
                    message.round = reader.int32();
                    break;
                case 4:
                    message.pol_round = reader.int32();
                    break;
                case 5:
                    message.block_id = exports.BlockID.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.timestamp = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.signature = reader.bytes();
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
            type: (0, helpers_1.isSet)(object.type) ? signedMsgTypeFromJSON(object.type) : -1,
            height: (0, helpers_1.isSet)(object.height) ? BigInt(object.height.toString()) : BigInt(0),
            round: (0, helpers_1.isSet)(object.round) ? Number(object.round) : 0,
            pol_round: (0, helpers_1.isSet)(object.pol_round) ? Number(object.pol_round) : 0,
            block_id: (0, helpers_1.isSet)(object.block_id) ? exports.BlockID.fromJSON(object.block_id) : undefined,
            timestamp: (0, helpers_1.isSet)(object.timestamp) ? (0, helpers_1.fromJsonTimestamp)(object.timestamp) : undefined,
            signature: (0, helpers_1.isSet)(object.signature) ? (0, helpers_1.bytesFromBase64)(object.signature) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.type !== undefined && (obj.type = signedMsgTypeToJSON(message.type));
        message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
        message.round !== undefined && (obj.round = Math.round(message.round));
        message.pol_round !== undefined && (obj.pol_round = Math.round(message.pol_round));
        message.block_id !== undefined && (obj.block_id = message.block_id ? exports.BlockID.toJSON(message.block_id) : undefined);
        message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
        message.signature !== undefined && (obj.signature = (0, helpers_1.base64FromBytes)(message.signature !== undefined ? message.signature : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseProposal();
        message.type = object.type ?? 0;
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        message.round = object.round ?? 0;
        message.pol_round = object.pol_round ?? 0;
        message.block_id = object.block_id !== undefined && object.block_id !== null ? exports.BlockID.fromPartial(object.block_id) : undefined;
        message.timestamp = object.timestamp ?? undefined;
        message.signature = object.signature ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseProposal();
        if (object.type !== undefined && object.type !== null) {
            message.type = signedMsgTypeFromJSON(object.type);
        }
        if (object.height !== undefined && object.height !== null) {
            message.height = BigInt(object.height);
        }
        if (object.round !== undefined && object.round !== null) {
            message.round = object.round;
        }
        if (object.pol_round !== undefined && object.pol_round !== null) {
            message.pol_round = object.pol_round;
        }
        if (object.block_id !== undefined && object.block_id !== null) {
            message.block_id = exports.BlockID.fromAmino(object.block_id);
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.timestamp));
        }
        if (object.signature !== undefined && object.signature !== null) {
            message.signature = (0, helpers_1.bytesFromBase64)(object.signature);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.type = message.type;
        obj.height = message.height ? message.height.toString() : undefined;
        obj.round = message.round;
        obj.pol_round = message.pol_round;
        obj.block_id = message.block_id ? exports.BlockID.toAmino(message.block_id) : undefined;
        obj.timestamp = message.timestamp ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.timestamp)) : undefined;
        obj.signature = message.signature ? (0, helpers_1.base64FromBytes)(message.signature) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Proposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Proposal.decode(message.value);
    },
    toProto(message) {
        return exports.Proposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.Proposal",
            value: exports.Proposal.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Proposal.typeUrl, exports.Proposal);
function createBaseSignedHeader() {
    return {
        header: undefined,
        commit: undefined
    };
}
exports.SignedHeader = {
    typeUrl: "/tendermint.types.SignedHeader",
    is(o) {
        return o && o.$typeUrl === exports.SignedHeader.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.SignedHeader.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.SignedHeader.typeUrl;
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.header !== undefined) {
            exports.Header.encode(message.header, writer.uint32(10).fork()).ldelim();
        }
        if (message.commit !== undefined) {
            exports.Commit.encode(message.commit, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSignedHeader();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.header = exports.Header.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.commit = exports.Commit.decode(reader, reader.uint32());
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
            header: (0, helpers_1.isSet)(object.header) ? exports.Header.fromJSON(object.header) : undefined,
            commit: (0, helpers_1.isSet)(object.commit) ? exports.Commit.fromJSON(object.commit) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.header !== undefined && (obj.header = message.header ? exports.Header.toJSON(message.header) : undefined);
        message.commit !== undefined && (obj.commit = message.commit ? exports.Commit.toJSON(message.commit) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSignedHeader();
        message.header = object.header !== undefined && object.header !== null ? exports.Header.fromPartial(object.header) : undefined;
        message.commit = object.commit !== undefined && object.commit !== null ? exports.Commit.fromPartial(object.commit) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseSignedHeader();
        if (object.header !== undefined && object.header !== null) {
            message.header = exports.Header.fromAmino(object.header);
        }
        if (object.commit !== undefined && object.commit !== null) {
            message.commit = exports.Commit.fromAmino(object.commit);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.header = message.header ? exports.Header.toAmino(message.header) : undefined;
        obj.commit = message.commit ? exports.Commit.toAmino(message.commit) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SignedHeader.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.SignedHeader.decode(message.value);
    },
    toProto(message) {
        return exports.SignedHeader.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.SignedHeader",
            value: exports.SignedHeader.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.SignedHeader.typeUrl, exports.SignedHeader);
function createBaseLightBlock() {
    return {
        signed_header: undefined,
        validator_set: undefined
    };
}
exports.LightBlock = {
    typeUrl: "/tendermint.types.LightBlock",
    is(o) {
        return o && o.$typeUrl === exports.LightBlock.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.LightBlock.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.LightBlock.typeUrl;
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.signed_header !== undefined) {
            exports.SignedHeader.encode(message.signed_header, writer.uint32(10).fork()).ldelim();
        }
        if (message.validator_set !== undefined) {
            validator_1.ValidatorSet.encode(message.validator_set, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLightBlock();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.signed_header = exports.SignedHeader.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.validator_set = validator_1.ValidatorSet.decode(reader, reader.uint32());
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
            signed_header: (0, helpers_1.isSet)(object.signed_header) ? exports.SignedHeader.fromJSON(object.signed_header) : undefined,
            validator_set: (0, helpers_1.isSet)(object.validator_set) ? validator_1.ValidatorSet.fromJSON(object.validator_set) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.signed_header !== undefined && (obj.signed_header = message.signed_header ? exports.SignedHeader.toJSON(message.signed_header) : undefined);
        message.validator_set !== undefined && (obj.validator_set = message.validator_set ? validator_1.ValidatorSet.toJSON(message.validator_set) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseLightBlock();
        message.signed_header = object.signed_header !== undefined && object.signed_header !== null ? exports.SignedHeader.fromPartial(object.signed_header) : undefined;
        message.validator_set = object.validator_set !== undefined && object.validator_set !== null ? validator_1.ValidatorSet.fromPartial(object.validator_set) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseLightBlock();
        if (object.signed_header !== undefined && object.signed_header !== null) {
            message.signed_header = exports.SignedHeader.fromAmino(object.signed_header);
        }
        if (object.validator_set !== undefined && object.validator_set !== null) {
            message.validator_set = validator_1.ValidatorSet.fromAmino(object.validator_set);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.signed_header = message.signed_header ? exports.SignedHeader.toAmino(message.signed_header) : undefined;
        obj.validator_set = message.validator_set ? validator_1.ValidatorSet.toAmino(message.validator_set) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.LightBlock.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.LightBlock.decode(message.value);
    },
    toProto(message) {
        return exports.LightBlock.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.LightBlock",
            value: exports.LightBlock.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.LightBlock.typeUrl, exports.LightBlock);
function createBaseBlockMeta() {
    return {
        block_id: exports.BlockID.fromPartial({}),
        block_size: BigInt(0),
        header: exports.Header.fromPartial({}),
        num_txs: BigInt(0)
    };
}
exports.BlockMeta = {
    typeUrl: "/tendermint.types.BlockMeta",
    is(o) {
        return o && (o.$typeUrl === exports.BlockMeta.typeUrl || exports.BlockID.is(o.block_id) && typeof o.block_size === "bigint" && exports.Header.is(o.header) && typeof o.num_txs === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.BlockMeta.typeUrl || exports.BlockID.isSDK(o.block_id) && typeof o.block_size === "bigint" && exports.Header.isSDK(o.header) && typeof o.num_txs === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.BlockMeta.typeUrl || exports.BlockID.isAmino(o.block_id) && typeof o.block_size === "bigint" && exports.Header.isAmino(o.header) && typeof o.num_txs === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.block_id !== undefined) {
            exports.BlockID.encode(message.block_id, writer.uint32(10).fork()).ldelim();
        }
        if (message.block_size !== BigInt(0)) {
            writer.uint32(16).int64(message.block_size);
        }
        if (message.header !== undefined) {
            exports.Header.encode(message.header, writer.uint32(26).fork()).ldelim();
        }
        if (message.num_txs !== BigInt(0)) {
            writer.uint32(32).int64(message.num_txs);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBlockMeta();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.block_id = exports.BlockID.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.block_size = reader.int64();
                    break;
                case 3:
                    message.header = exports.Header.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.num_txs = reader.int64();
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
            block_id: (0, helpers_1.isSet)(object.block_id) ? exports.BlockID.fromJSON(object.block_id) : undefined,
            block_size: (0, helpers_1.isSet)(object.block_size) ? BigInt(object.block_size.toString()) : BigInt(0),
            header: (0, helpers_1.isSet)(object.header) ? exports.Header.fromJSON(object.header) : undefined,
            num_txs: (0, helpers_1.isSet)(object.num_txs) ? BigInt(object.num_txs.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.block_id !== undefined && (obj.block_id = message.block_id ? exports.BlockID.toJSON(message.block_id) : undefined);
        message.block_size !== undefined && (obj.block_size = (message.block_size || BigInt(0)).toString());
        message.header !== undefined && (obj.header = message.header ? exports.Header.toJSON(message.header) : undefined);
        message.num_txs !== undefined && (obj.num_txs = (message.num_txs || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseBlockMeta();
        message.block_id = object.block_id !== undefined && object.block_id !== null ? exports.BlockID.fromPartial(object.block_id) : undefined;
        message.block_size = object.block_size !== undefined && object.block_size !== null ? BigInt(object.block_size.toString()) : BigInt(0);
        message.header = object.header !== undefined && object.header !== null ? exports.Header.fromPartial(object.header) : undefined;
        message.num_txs = object.num_txs !== undefined && object.num_txs !== null ? BigInt(object.num_txs.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseBlockMeta();
        if (object.block_id !== undefined && object.block_id !== null) {
            message.block_id = exports.BlockID.fromAmino(object.block_id);
        }
        if (object.block_size !== undefined && object.block_size !== null) {
            message.block_size = BigInt(object.block_size);
        }
        if (object.header !== undefined && object.header !== null) {
            message.header = exports.Header.fromAmino(object.header);
        }
        if (object.num_txs !== undefined && object.num_txs !== null) {
            message.num_txs = BigInt(object.num_txs);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.block_id = message.block_id ? exports.BlockID.toAmino(message.block_id) : undefined;
        obj.block_size = message.block_size ? message.block_size.toString() : undefined;
        obj.header = message.header ? exports.Header.toAmino(message.header) : undefined;
        obj.num_txs = message.num_txs ? message.num_txs.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.BlockMeta.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.BlockMeta.decode(message.value);
    },
    toProto(message) {
        return exports.BlockMeta.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.BlockMeta",
            value: exports.BlockMeta.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.BlockMeta.typeUrl, exports.BlockMeta);
function createBaseTxProof() {
    return {
        root_hash: new Uint8Array(),
        data: new Uint8Array(),
        proof: undefined
    };
}
exports.TxProof = {
    typeUrl: "/tendermint.types.TxProof",
    is(o) {
        return o && (o.$typeUrl === exports.TxProof.typeUrl || (o.root_hash instanceof Uint8Array || typeof o.root_hash === "string") && (o.data instanceof Uint8Array || typeof o.data === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.TxProof.typeUrl || (o.root_hash instanceof Uint8Array || typeof o.root_hash === "string") && (o.data instanceof Uint8Array || typeof o.data === "string"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.TxProof.typeUrl || (o.root_hash instanceof Uint8Array || typeof o.root_hash === "string") && (o.data instanceof Uint8Array || typeof o.data === "string"));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.root_hash.length !== 0) {
            writer.uint32(10).bytes(message.root_hash);
        }
        if (message.data.length !== 0) {
            writer.uint32(18).bytes(message.data);
        }
        if (message.proof !== undefined) {
            proof_1.Proof.encode(message.proof, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTxProof();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.root_hash = reader.bytes();
                    break;
                case 2:
                    message.data = reader.bytes();
                    break;
                case 3:
                    message.proof = proof_1.Proof.decode(reader, reader.uint32());
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
            root_hash: (0, helpers_1.isSet)(object.root_hash) ? (0, helpers_1.bytesFromBase64)(object.root_hash) : new Uint8Array(),
            data: (0, helpers_1.isSet)(object.data) ? (0, helpers_1.bytesFromBase64)(object.data) : new Uint8Array(),
            proof: (0, helpers_1.isSet)(object.proof) ? proof_1.Proof.fromJSON(object.proof) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.root_hash !== undefined && (obj.root_hash = (0, helpers_1.base64FromBytes)(message.root_hash !== undefined ? message.root_hash : new Uint8Array()));
        message.data !== undefined && (obj.data = (0, helpers_1.base64FromBytes)(message.data !== undefined ? message.data : new Uint8Array()));
        message.proof !== undefined && (obj.proof = message.proof ? proof_1.Proof.toJSON(message.proof) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTxProof();
        message.root_hash = object.root_hash ?? new Uint8Array();
        message.data = object.data ?? new Uint8Array();
        message.proof = object.proof !== undefined && object.proof !== null ? proof_1.Proof.fromPartial(object.proof) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseTxProof();
        if (object.root_hash !== undefined && object.root_hash !== null) {
            message.root_hash = (0, helpers_1.bytesFromBase64)(object.root_hash);
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = (0, helpers_1.bytesFromBase64)(object.data);
        }
        if (object.proof !== undefined && object.proof !== null) {
            message.proof = proof_1.Proof.fromAmino(object.proof);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.root_hash = message.root_hash ? (0, helpers_1.base64FromBytes)(message.root_hash) : undefined;
        obj.data = message.data ? (0, helpers_1.base64FromBytes)(message.data) : undefined;
        obj.proof = message.proof ? proof_1.Proof.toAmino(message.proof) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.TxProof.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.TxProof.decode(message.value);
    },
    toProto(message) {
        return exports.TxProof.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.TxProof",
            value: exports.TxProof.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.TxProof.typeUrl, exports.TxProof);
//# sourceMappingURL=types.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = exports.Block = exports.protobufPackage = void 0;
//@ts-nocheck
const types_1 = require("../../../../tendermint/types/types");
const evidence_1 = require("../../../../tendermint/types/evidence");
const types_2 = require("../../../../tendermint/version/types");
const timestamp_1 = require("../../../../google/protobuf/timestamp");
const binary_1 = require("../../../../binary");
const helpers_1 = require("../../../../helpers");
exports.protobufPackage = "cosmos.base.tendermint.v1beta1";
function createBaseBlock() {
    return {
        header: exports.Header.fromPartial({}),
        data: types_1.Data.fromPartial({}),
        evidence: evidence_1.EvidenceList.fromPartial({}),
        last_commit: undefined
    };
}
exports.Block = {
    typeUrl: "/cosmos.base.tendermint.v1beta1.Block",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.header !== undefined) {
            exports.Header.encode(message.header, writer.uint32(10).fork()).ldelim();
        }
        if (message.data !== undefined) {
            types_1.Data.encode(message.data, writer.uint32(18).fork()).ldelim();
        }
        if (message.evidence !== undefined) {
            evidence_1.EvidenceList.encode(message.evidence, writer.uint32(26).fork()).ldelim();
        }
        if (message.last_commit !== undefined) {
            types_1.Commit.encode(message.last_commit, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBlock();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.header = exports.Header.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.data = types_1.Data.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.evidence = evidence_1.EvidenceList.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.last_commit = types_1.Commit.decode(reader, reader.uint32());
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
            data: (0, helpers_1.isSet)(object.data) ? types_1.Data.fromJSON(object.data) : undefined,
            evidence: (0, helpers_1.isSet)(object.evidence) ? evidence_1.EvidenceList.fromJSON(object.evidence) : undefined,
            last_commit: (0, helpers_1.isSet)(object.last_commit) ? types_1.Commit.fromJSON(object.last_commit) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.header !== undefined && (obj.header = message.header ? exports.Header.toJSON(message.header) : undefined);
        message.data !== undefined && (obj.data = message.data ? types_1.Data.toJSON(message.data) : undefined);
        message.evidence !== undefined && (obj.evidence = message.evidence ? evidence_1.EvidenceList.toJSON(message.evidence) : undefined);
        message.last_commit !== undefined && (obj.last_commit = message.last_commit ? types_1.Commit.toJSON(message.last_commit) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseBlock();
        message.header = object.header !== undefined && object.header !== null ? exports.Header.fromPartial(object.header) : undefined;
        message.data = object.data !== undefined && object.data !== null ? types_1.Data.fromPartial(object.data) : undefined;
        message.evidence = object.evidence !== undefined && object.evidence !== null ? evidence_1.EvidenceList.fromPartial(object.evidence) : undefined;
        message.last_commit = object.last_commit !== undefined && object.last_commit !== null ? types_1.Commit.fromPartial(object.last_commit) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            header: object?.header ? exports.Header.fromAmino(object.header) : undefined,
            data: object?.data ? types_1.Data.fromAmino(object.data) : undefined,
            evidence: object?.evidence ? evidence_1.EvidenceList.fromAmino(object.evidence) : undefined,
            last_commit: object?.last_commit ? types_1.Commit.fromAmino(object.last_commit) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.header = message.header ? exports.Header.toAmino(message.header) : undefined;
        obj.data = message.data ? types_1.Data.toAmino(message.data) : undefined;
        obj.evidence = message.evidence ? evidence_1.EvidenceList.toAmino(message.evidence) : undefined;
        obj.last_commit = message.last_commit ? types_1.Commit.toAmino(message.last_commit) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Block.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Block",
            value: exports.Block.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Block.decode(message.value);
    },
    toProto(message) {
        return exports.Block.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.tendermint.v1beta1.Block",
            value: exports.Block.encode(message).finish()
        };
    }
};
function createBaseHeader() {
    return {
        version: types_2.Consensus.fromPartial({}),
        chain_id: "",
        height: BigInt(0),
        time: new Date(),
        last_block_id: types_1.BlockID.fromPartial({}),
        last_commit_hash: new Uint8Array(),
        data_hash: new Uint8Array(),
        validators_hash: new Uint8Array(),
        next_validators_hash: new Uint8Array(),
        consensus_hash: new Uint8Array(),
        app_hash: new Uint8Array(),
        last_results_hash: new Uint8Array(),
        evidence_hash: new Uint8Array(),
        proposer_address: ""
    };
}
exports.Header = {
    typeUrl: "/cosmos.base.tendermint.v1beta1.Header",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.version !== undefined) {
            types_2.Consensus.encode(message.version, writer.uint32(10).fork()).ldelim();
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
            types_1.BlockID.encode(message.last_block_id, writer.uint32(42).fork()).ldelim();
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
        if (message.proposer_address !== "") {
            writer.uint32(114).string(message.proposer_address);
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
                    message.version = types_2.Consensus.decode(reader, reader.uint32());
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
                    message.last_block_id = types_1.BlockID.decode(reader, reader.uint32());
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
                    message.proposer_address = reader.string();
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
            version: (0, helpers_1.isSet)(object.version) ? types_2.Consensus.fromJSON(object.version) : undefined,
            chain_id: (0, helpers_1.isSet)(object.chain_id) ? String(object.chain_id) : "",
            height: (0, helpers_1.isSet)(object.height) ? BigInt(object.height.toString()) : BigInt(0),
            time: (0, helpers_1.isSet)(object.time) ? (0, helpers_1.fromJsonTimestamp)(object.time) : undefined,
            last_block_id: (0, helpers_1.isSet)(object.last_block_id) ? types_1.BlockID.fromJSON(object.last_block_id) : undefined,
            last_commit_hash: (0, helpers_1.isSet)(object.last_commit_hash) ? (0, helpers_1.bytesFromBase64)(object.last_commit_hash) : new Uint8Array(),
            data_hash: (0, helpers_1.isSet)(object.data_hash) ? (0, helpers_1.bytesFromBase64)(object.data_hash) : new Uint8Array(),
            validators_hash: (0, helpers_1.isSet)(object.validators_hash) ? (0, helpers_1.bytesFromBase64)(object.validators_hash) : new Uint8Array(),
            next_validators_hash: (0, helpers_1.isSet)(object.next_validators_hash) ? (0, helpers_1.bytesFromBase64)(object.next_validators_hash) : new Uint8Array(),
            consensus_hash: (0, helpers_1.isSet)(object.consensus_hash) ? (0, helpers_1.bytesFromBase64)(object.consensus_hash) : new Uint8Array(),
            app_hash: (0, helpers_1.isSet)(object.app_hash) ? (0, helpers_1.bytesFromBase64)(object.app_hash) : new Uint8Array(),
            last_results_hash: (0, helpers_1.isSet)(object.last_results_hash) ? (0, helpers_1.bytesFromBase64)(object.last_results_hash) : new Uint8Array(),
            evidence_hash: (0, helpers_1.isSet)(object.evidence_hash) ? (0, helpers_1.bytesFromBase64)(object.evidence_hash) : new Uint8Array(),
            proposer_address: (0, helpers_1.isSet)(object.proposer_address) ? String(object.proposer_address) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.version !== undefined && (obj.version = message.version ? types_2.Consensus.toJSON(message.version) : undefined);
        message.chain_id !== undefined && (obj.chain_id = message.chain_id);
        message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
        message.time !== undefined && (obj.time = message.time.toISOString());
        message.last_block_id !== undefined && (obj.last_block_id = message.last_block_id ? types_1.BlockID.toJSON(message.last_block_id) : undefined);
        message.last_commit_hash !== undefined && (obj.last_commit_hash = (0, helpers_1.base64FromBytes)(message.last_commit_hash !== undefined ? message.last_commit_hash : new Uint8Array()));
        message.data_hash !== undefined && (obj.data_hash = (0, helpers_1.base64FromBytes)(message.data_hash !== undefined ? message.data_hash : new Uint8Array()));
        message.validators_hash !== undefined && (obj.validators_hash = (0, helpers_1.base64FromBytes)(message.validators_hash !== undefined ? message.validators_hash : new Uint8Array()));
        message.next_validators_hash !== undefined && (obj.next_validators_hash = (0, helpers_1.base64FromBytes)(message.next_validators_hash !== undefined ? message.next_validators_hash : new Uint8Array()));
        message.consensus_hash !== undefined && (obj.consensus_hash = (0, helpers_1.base64FromBytes)(message.consensus_hash !== undefined ? message.consensus_hash : new Uint8Array()));
        message.app_hash !== undefined && (obj.app_hash = (0, helpers_1.base64FromBytes)(message.app_hash !== undefined ? message.app_hash : new Uint8Array()));
        message.last_results_hash !== undefined && (obj.last_results_hash = (0, helpers_1.base64FromBytes)(message.last_results_hash !== undefined ? message.last_results_hash : new Uint8Array()));
        message.evidence_hash !== undefined && (obj.evidence_hash = (0, helpers_1.base64FromBytes)(message.evidence_hash !== undefined ? message.evidence_hash : new Uint8Array()));
        message.proposer_address !== undefined && (obj.proposer_address = message.proposer_address);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseHeader();
        message.version = object.version !== undefined && object.version !== null ? types_2.Consensus.fromPartial(object.version) : undefined;
        message.chain_id = object.chain_id ?? "";
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        message.time = object.time ?? undefined;
        message.last_block_id = object.last_block_id !== undefined && object.last_block_id !== null ? types_1.BlockID.fromPartial(object.last_block_id) : undefined;
        message.last_commit_hash = object.last_commit_hash ?? new Uint8Array();
        message.data_hash = object.data_hash ?? new Uint8Array();
        message.validators_hash = object.validators_hash ?? new Uint8Array();
        message.next_validators_hash = object.next_validators_hash ?? new Uint8Array();
        message.consensus_hash = object.consensus_hash ?? new Uint8Array();
        message.app_hash = object.app_hash ?? new Uint8Array();
        message.last_results_hash = object.last_results_hash ?? new Uint8Array();
        message.evidence_hash = object.evidence_hash ?? new Uint8Array();
        message.proposer_address = object.proposer_address ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            version: object?.version ? types_2.Consensus.fromAmino(object.version) : undefined,
            chain_id: object.chain_id,
            height: BigInt(object.height),
            time: object?.time ? (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.time)) : undefined,
            last_block_id: object?.last_block_id ? types_1.BlockID.fromAmino(object.last_block_id) : undefined,
            last_commit_hash: object.last_commit_hash,
            data_hash: object.data_hash,
            validators_hash: object.validators_hash,
            next_validators_hash: object.next_validators_hash,
            consensus_hash: object.consensus_hash,
            app_hash: object.app_hash,
            last_results_hash: object.last_results_hash,
            evidence_hash: object.evidence_hash,
            proposer_address: object.proposer_address
        };
    },
    toAmino(message) {
        const obj = {};
        obj.version = message.version ? types_2.Consensus.toAmino(message.version) : undefined;
        obj.chain_id = message.chain_id;
        obj.height = message.height ? message.height.toString() : undefined;
        obj.time = message.time ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.time)) : undefined;
        obj.last_block_id = message.last_block_id ? types_1.BlockID.toAmino(message.last_block_id) : undefined;
        obj.last_commit_hash = message.last_commit_hash;
        obj.data_hash = message.data_hash;
        obj.validators_hash = message.validators_hash;
        obj.next_validators_hash = message.next_validators_hash;
        obj.consensus_hash = message.consensus_hash;
        obj.app_hash = message.app_hash;
        obj.last_results_hash = message.last_results_hash;
        obj.evidence_hash = message.evidence_hash;
        obj.proposer_address = message.proposer_address;
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
            typeUrl: "/cosmos.base.tendermint.v1beta1.Header",
            value: exports.Header.encode(message).finish()
        };
    }
};
//# sourceMappingURL=types.js.map
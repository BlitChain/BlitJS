"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvidenceList = exports.LightClientAttackEvidence = exports.DuplicateVoteEvidence = exports.Evidence = exports.protobufPackage = void 0;
//@ts-nocheck
const types_1 = require("./types");
const timestamp_1 = require("../../google/protobuf/timestamp");
const validator_1 = require("./validator");
const binary_1 = require("../../binary");
const helpers_1 = require("../../helpers");
const registry_1 = require("../../registry");
exports.protobufPackage = "tendermint.types";
function createBaseEvidence() {
    return {
        duplicate_vote_evidence: undefined,
        light_client_attack_evidence: undefined
    };
}
exports.Evidence = {
    typeUrl: "/tendermint.types.Evidence",
    is(o) {
        return o && o.$typeUrl === exports.Evidence.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.Evidence.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.Evidence.typeUrl;
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.duplicate_vote_evidence !== undefined) {
            exports.DuplicateVoteEvidence.encode(message.duplicate_vote_evidence, writer.uint32(10).fork()).ldelim();
        }
        if (message.light_client_attack_evidence !== undefined) {
            exports.LightClientAttackEvidence.encode(message.light_client_attack_evidence, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEvidence();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.duplicate_vote_evidence = exports.DuplicateVoteEvidence.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.light_client_attack_evidence = exports.LightClientAttackEvidence.decode(reader, reader.uint32());
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
            duplicate_vote_evidence: (0, helpers_1.isSet)(object.duplicate_vote_evidence) ? exports.DuplicateVoteEvidence.fromJSON(object.duplicate_vote_evidence) : undefined,
            light_client_attack_evidence: (0, helpers_1.isSet)(object.light_client_attack_evidence) ? exports.LightClientAttackEvidence.fromJSON(object.light_client_attack_evidence) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.duplicate_vote_evidence !== undefined && (obj.duplicate_vote_evidence = message.duplicate_vote_evidence ? exports.DuplicateVoteEvidence.toJSON(message.duplicate_vote_evidence) : undefined);
        message.light_client_attack_evidence !== undefined && (obj.light_client_attack_evidence = message.light_client_attack_evidence ? exports.LightClientAttackEvidence.toJSON(message.light_client_attack_evidence) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEvidence();
        message.duplicate_vote_evidence = object.duplicate_vote_evidence !== undefined && object.duplicate_vote_evidence !== null ? exports.DuplicateVoteEvidence.fromPartial(object.duplicate_vote_evidence) : undefined;
        message.light_client_attack_evidence = object.light_client_attack_evidence !== undefined && object.light_client_attack_evidence !== null ? exports.LightClientAttackEvidence.fromPartial(object.light_client_attack_evidence) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseEvidence();
        if (object.duplicate_vote_evidence !== undefined && object.duplicate_vote_evidence !== null) {
            message.duplicate_vote_evidence = exports.DuplicateVoteEvidence.fromAmino(object.duplicate_vote_evidence);
        }
        if (object.light_client_attack_evidence !== undefined && object.light_client_attack_evidence !== null) {
            message.light_client_attack_evidence = exports.LightClientAttackEvidence.fromAmino(object.light_client_attack_evidence);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.duplicate_vote_evidence = message.duplicate_vote_evidence ? exports.DuplicateVoteEvidence.toAmino(message.duplicate_vote_evidence) : undefined;
        obj.light_client_attack_evidence = message.light_client_attack_evidence ? exports.LightClientAttackEvidence.toAmino(message.light_client_attack_evidence) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Evidence.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Evidence.decode(message.value);
    },
    toProto(message) {
        return exports.Evidence.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.Evidence",
            value: exports.Evidence.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Evidence.typeUrl, exports.Evidence);
function createBaseDuplicateVoteEvidence() {
    return {
        vote_a: undefined,
        vote_b: undefined,
        total_voting_power: BigInt(0),
        validator_power: BigInt(0),
        timestamp: new Date()
    };
}
exports.DuplicateVoteEvidence = {
    typeUrl: "/tendermint.types.DuplicateVoteEvidence",
    is(o) {
        return o && (o.$typeUrl === exports.DuplicateVoteEvidence.typeUrl || typeof o.total_voting_power === "bigint" && typeof o.validator_power === "bigint" && timestamp_1.Timestamp.is(o.timestamp));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.DuplicateVoteEvidence.typeUrl || typeof o.total_voting_power === "bigint" && typeof o.validator_power === "bigint" && timestamp_1.Timestamp.isSDK(o.timestamp));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.DuplicateVoteEvidence.typeUrl || typeof o.total_voting_power === "bigint" && typeof o.validator_power === "bigint" && timestamp_1.Timestamp.isAmino(o.timestamp));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.vote_a !== undefined) {
            types_1.Vote.encode(message.vote_a, writer.uint32(10).fork()).ldelim();
        }
        if (message.vote_b !== undefined) {
            types_1.Vote.encode(message.vote_b, writer.uint32(18).fork()).ldelim();
        }
        if (message.total_voting_power !== BigInt(0)) {
            writer.uint32(24).int64(message.total_voting_power);
        }
        if (message.validator_power !== BigInt(0)) {
            writer.uint32(32).int64(message.validator_power);
        }
        if (message.timestamp !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.timestamp), writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDuplicateVoteEvidence();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.vote_a = types_1.Vote.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.vote_b = types_1.Vote.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.total_voting_power = reader.int64();
                    break;
                case 4:
                    message.validator_power = reader.int64();
                    break;
                case 5:
                    message.timestamp = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
            vote_a: (0, helpers_1.isSet)(object.vote_a) ? types_1.Vote.fromJSON(object.vote_a) : undefined,
            vote_b: (0, helpers_1.isSet)(object.vote_b) ? types_1.Vote.fromJSON(object.vote_b) : undefined,
            total_voting_power: (0, helpers_1.isSet)(object.total_voting_power) ? BigInt(object.total_voting_power.toString()) : BigInt(0),
            validator_power: (0, helpers_1.isSet)(object.validator_power) ? BigInt(object.validator_power.toString()) : BigInt(0),
            timestamp: (0, helpers_1.isSet)(object.timestamp) ? (0, helpers_1.fromJsonTimestamp)(object.timestamp) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.vote_a !== undefined && (obj.vote_a = message.vote_a ? types_1.Vote.toJSON(message.vote_a) : undefined);
        message.vote_b !== undefined && (obj.vote_b = message.vote_b ? types_1.Vote.toJSON(message.vote_b) : undefined);
        message.total_voting_power !== undefined && (obj.total_voting_power = (message.total_voting_power || BigInt(0)).toString());
        message.validator_power !== undefined && (obj.validator_power = (message.validator_power || BigInt(0)).toString());
        message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDuplicateVoteEvidence();
        message.vote_a = object.vote_a !== undefined && object.vote_a !== null ? types_1.Vote.fromPartial(object.vote_a) : undefined;
        message.vote_b = object.vote_b !== undefined && object.vote_b !== null ? types_1.Vote.fromPartial(object.vote_b) : undefined;
        message.total_voting_power = object.total_voting_power !== undefined && object.total_voting_power !== null ? BigInt(object.total_voting_power.toString()) : BigInt(0);
        message.validator_power = object.validator_power !== undefined && object.validator_power !== null ? BigInt(object.validator_power.toString()) : BigInt(0);
        message.timestamp = object.timestamp ?? undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseDuplicateVoteEvidence();
        if (object.vote_a !== undefined && object.vote_a !== null) {
            message.vote_a = types_1.Vote.fromAmino(object.vote_a);
        }
        if (object.vote_b !== undefined && object.vote_b !== null) {
            message.vote_b = types_1.Vote.fromAmino(object.vote_b);
        }
        if (object.total_voting_power !== undefined && object.total_voting_power !== null) {
            message.total_voting_power = BigInt(object.total_voting_power);
        }
        if (object.validator_power !== undefined && object.validator_power !== null) {
            message.validator_power = BigInt(object.validator_power);
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.timestamp));
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.vote_a = message.vote_a ? types_1.Vote.toAmino(message.vote_a) : undefined;
        obj.vote_b = message.vote_b ? types_1.Vote.toAmino(message.vote_b) : undefined;
        obj.total_voting_power = message.total_voting_power ? message.total_voting_power.toString() : undefined;
        obj.validator_power = message.validator_power ? message.validator_power.toString() : undefined;
        obj.timestamp = message.timestamp ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.timestamp)) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.DuplicateVoteEvidence.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.DuplicateVoteEvidence.decode(message.value);
    },
    toProto(message) {
        return exports.DuplicateVoteEvidence.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.DuplicateVoteEvidence",
            value: exports.DuplicateVoteEvidence.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.DuplicateVoteEvidence.typeUrl, exports.DuplicateVoteEvidence);
function createBaseLightClientAttackEvidence() {
    return {
        conflicting_block: undefined,
        common_height: BigInt(0),
        byzantine_validators: [],
        total_voting_power: BigInt(0),
        timestamp: new Date()
    };
}
exports.LightClientAttackEvidence = {
    typeUrl: "/tendermint.types.LightClientAttackEvidence",
    is(o) {
        return o && (o.$typeUrl === exports.LightClientAttackEvidence.typeUrl || typeof o.common_height === "bigint" && Array.isArray(o.byzantine_validators) && (!o.byzantine_validators.length || validator_1.Validator.is(o.byzantine_validators[0])) && typeof o.total_voting_power === "bigint" && timestamp_1.Timestamp.is(o.timestamp));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.LightClientAttackEvidence.typeUrl || typeof o.common_height === "bigint" && Array.isArray(o.byzantine_validators) && (!o.byzantine_validators.length || validator_1.Validator.isSDK(o.byzantine_validators[0])) && typeof o.total_voting_power === "bigint" && timestamp_1.Timestamp.isSDK(o.timestamp));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.LightClientAttackEvidence.typeUrl || typeof o.common_height === "bigint" && Array.isArray(o.byzantine_validators) && (!o.byzantine_validators.length || validator_1.Validator.isAmino(o.byzantine_validators[0])) && typeof o.total_voting_power === "bigint" && timestamp_1.Timestamp.isAmino(o.timestamp));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.conflicting_block !== undefined) {
            types_1.LightBlock.encode(message.conflicting_block, writer.uint32(10).fork()).ldelim();
        }
        if (message.common_height !== BigInt(0)) {
            writer.uint32(16).int64(message.common_height);
        }
        for (const v of message.byzantine_validators) {
            validator_1.Validator.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.total_voting_power !== BigInt(0)) {
            writer.uint32(32).int64(message.total_voting_power);
        }
        if (message.timestamp !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.timestamp), writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLightClientAttackEvidence();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.conflicting_block = types_1.LightBlock.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.common_height = reader.int64();
                    break;
                case 3:
                    message.byzantine_validators.push(validator_1.Validator.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.total_voting_power = reader.int64();
                    break;
                case 5:
                    message.timestamp = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
            conflicting_block: (0, helpers_1.isSet)(object.conflicting_block) ? types_1.LightBlock.fromJSON(object.conflicting_block) : undefined,
            common_height: (0, helpers_1.isSet)(object.common_height) ? BigInt(object.common_height.toString()) : BigInt(0),
            byzantine_validators: Array.isArray(object?.byzantine_validators) ? object.byzantine_validators.map((e) => validator_1.Validator.fromJSON(e)) : [],
            total_voting_power: (0, helpers_1.isSet)(object.total_voting_power) ? BigInt(object.total_voting_power.toString()) : BigInt(0),
            timestamp: (0, helpers_1.isSet)(object.timestamp) ? (0, helpers_1.fromJsonTimestamp)(object.timestamp) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.conflicting_block !== undefined && (obj.conflicting_block = message.conflicting_block ? types_1.LightBlock.toJSON(message.conflicting_block) : undefined);
        message.common_height !== undefined && (obj.common_height = (message.common_height || BigInt(0)).toString());
        if (message.byzantine_validators) {
            obj.byzantine_validators = message.byzantine_validators.map(e => e ? validator_1.Validator.toJSON(e) : undefined);
        }
        else {
            obj.byzantine_validators = [];
        }
        message.total_voting_power !== undefined && (obj.total_voting_power = (message.total_voting_power || BigInt(0)).toString());
        message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseLightClientAttackEvidence();
        message.conflicting_block = object.conflicting_block !== undefined && object.conflicting_block !== null ? types_1.LightBlock.fromPartial(object.conflicting_block) : undefined;
        message.common_height = object.common_height !== undefined && object.common_height !== null ? BigInt(object.common_height.toString()) : BigInt(0);
        message.byzantine_validators = object.byzantine_validators?.map(e => validator_1.Validator.fromPartial(e)) || [];
        message.total_voting_power = object.total_voting_power !== undefined && object.total_voting_power !== null ? BigInt(object.total_voting_power.toString()) : BigInt(0);
        message.timestamp = object.timestamp ?? undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseLightClientAttackEvidence();
        if (object.conflicting_block !== undefined && object.conflicting_block !== null) {
            message.conflicting_block = types_1.LightBlock.fromAmino(object.conflicting_block);
        }
        if (object.common_height !== undefined && object.common_height !== null) {
            message.common_height = BigInt(object.common_height);
        }
        message.byzantine_validators = object.byzantine_validators?.map(e => validator_1.Validator.fromAmino(e)) || [];
        if (object.total_voting_power !== undefined && object.total_voting_power !== null) {
            message.total_voting_power = BigInt(object.total_voting_power);
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.timestamp));
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.conflicting_block = message.conflicting_block ? types_1.LightBlock.toAmino(message.conflicting_block) : undefined;
        obj.common_height = message.common_height ? message.common_height.toString() : undefined;
        if (message.byzantine_validators) {
            obj.byzantine_validators = message.byzantine_validators.map(e => e ? validator_1.Validator.toAmino(e) : undefined);
        }
        else {
            obj.byzantine_validators = [];
        }
        obj.total_voting_power = message.total_voting_power ? message.total_voting_power.toString() : undefined;
        obj.timestamp = message.timestamp ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.timestamp)) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.LightClientAttackEvidence.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.LightClientAttackEvidence.decode(message.value);
    },
    toProto(message) {
        return exports.LightClientAttackEvidence.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.LightClientAttackEvidence",
            value: exports.LightClientAttackEvidence.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.LightClientAttackEvidence.typeUrl, exports.LightClientAttackEvidence);
function createBaseEvidenceList() {
    return {
        evidence: []
    };
}
exports.EvidenceList = {
    typeUrl: "/tendermint.types.EvidenceList",
    is(o) {
        return o && (o.$typeUrl === exports.EvidenceList.typeUrl || Array.isArray(o.evidence) && (!o.evidence.length || exports.Evidence.is(o.evidence[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.EvidenceList.typeUrl || Array.isArray(o.evidence) && (!o.evidence.length || exports.Evidence.isSDK(o.evidence[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.EvidenceList.typeUrl || Array.isArray(o.evidence) && (!o.evidence.length || exports.Evidence.isAmino(o.evidence[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.evidence) {
            exports.Evidence.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEvidenceList();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.evidence.push(exports.Evidence.decode(reader, reader.uint32()));
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
            evidence: Array.isArray(object?.evidence) ? object.evidence.map((e) => exports.Evidence.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.evidence) {
            obj.evidence = message.evidence.map(e => e ? exports.Evidence.toJSON(e) : undefined);
        }
        else {
            obj.evidence = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEvidenceList();
        message.evidence = object.evidence?.map(e => exports.Evidence.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseEvidenceList();
        message.evidence = object.evidence?.map(e => exports.Evidence.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.evidence) {
            obj.evidence = message.evidence.map(e => e ? exports.Evidence.toAmino(e) : undefined);
        }
        else {
            obj.evidence = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EvidenceList.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.EvidenceList.decode(message.value);
    },
    toProto(message) {
        return exports.EvidenceList.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.EvidenceList",
            value: exports.EvidenceList.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.EvidenceList.typeUrl, exports.EvidenceList);
//# sourceMappingURL=evidence.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ABCIParams = exports.HashedParams = exports.VersionParams = exports.ValidatorParams = exports.EvidenceParams = exports.BlockParams = exports.ConsensusParams = exports.protobufPackage = void 0;
//@ts-nocheck
const duration_1 = require("../../google/protobuf/duration");
const binary_1 = require("../../binary");
const helpers_1 = require("../../helpers");
const registry_1 = require("../../registry");
exports.protobufPackage = "tendermint.types";
function createBaseConsensusParams() {
    return {
        block: undefined,
        evidence: undefined,
        validator: undefined,
        version: undefined,
        abci: undefined
    };
}
exports.ConsensusParams = {
    typeUrl: "/tendermint.types.ConsensusParams",
    is(o) {
        return o && o.$typeUrl === exports.ConsensusParams.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.ConsensusParams.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.ConsensusParams.typeUrl;
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.block !== undefined) {
            exports.BlockParams.encode(message.block, writer.uint32(10).fork()).ldelim();
        }
        if (message.evidence !== undefined) {
            exports.EvidenceParams.encode(message.evidence, writer.uint32(18).fork()).ldelim();
        }
        if (message.validator !== undefined) {
            exports.ValidatorParams.encode(message.validator, writer.uint32(26).fork()).ldelim();
        }
        if (message.version !== undefined) {
            exports.VersionParams.encode(message.version, writer.uint32(34).fork()).ldelim();
        }
        if (message.abci !== undefined) {
            exports.ABCIParams.encode(message.abci, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConsensusParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.block = exports.BlockParams.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.evidence = exports.EvidenceParams.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.validator = exports.ValidatorParams.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.version = exports.VersionParams.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.abci = exports.ABCIParams.decode(reader, reader.uint32());
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
            block: (0, helpers_1.isSet)(object.block) ? exports.BlockParams.fromJSON(object.block) : undefined,
            evidence: (0, helpers_1.isSet)(object.evidence) ? exports.EvidenceParams.fromJSON(object.evidence) : undefined,
            validator: (0, helpers_1.isSet)(object.validator) ? exports.ValidatorParams.fromJSON(object.validator) : undefined,
            version: (0, helpers_1.isSet)(object.version) ? exports.VersionParams.fromJSON(object.version) : undefined,
            abci: (0, helpers_1.isSet)(object.abci) ? exports.ABCIParams.fromJSON(object.abci) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.block !== undefined && (obj.block = message.block ? exports.BlockParams.toJSON(message.block) : undefined);
        message.evidence !== undefined && (obj.evidence = message.evidence ? exports.EvidenceParams.toJSON(message.evidence) : undefined);
        message.validator !== undefined && (obj.validator = message.validator ? exports.ValidatorParams.toJSON(message.validator) : undefined);
        message.version !== undefined && (obj.version = message.version ? exports.VersionParams.toJSON(message.version) : undefined);
        message.abci !== undefined && (obj.abci = message.abci ? exports.ABCIParams.toJSON(message.abci) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseConsensusParams();
        message.block = object.block !== undefined && object.block !== null ? exports.BlockParams.fromPartial(object.block) : undefined;
        message.evidence = object.evidence !== undefined && object.evidence !== null ? exports.EvidenceParams.fromPartial(object.evidence) : undefined;
        message.validator = object.validator !== undefined && object.validator !== null ? exports.ValidatorParams.fromPartial(object.validator) : undefined;
        message.version = object.version !== undefined && object.version !== null ? exports.VersionParams.fromPartial(object.version) : undefined;
        message.abci = object.abci !== undefined && object.abci !== null ? exports.ABCIParams.fromPartial(object.abci) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseConsensusParams();
        if (object.block !== undefined && object.block !== null) {
            message.block = exports.BlockParams.fromAmino(object.block);
        }
        if (object.evidence !== undefined && object.evidence !== null) {
            message.evidence = exports.EvidenceParams.fromAmino(object.evidence);
        }
        if (object.validator !== undefined && object.validator !== null) {
            message.validator = exports.ValidatorParams.fromAmino(object.validator);
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = exports.VersionParams.fromAmino(object.version);
        }
        if (object.abci !== undefined && object.abci !== null) {
            message.abci = exports.ABCIParams.fromAmino(object.abci);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.block = message.block ? exports.BlockParams.toAmino(message.block) : undefined;
        obj.evidence = message.evidence ? exports.EvidenceParams.toAmino(message.evidence) : undefined;
        obj.validator = message.validator ? exports.ValidatorParams.toAmino(message.validator) : undefined;
        obj.version = message.version ? exports.VersionParams.toAmino(message.version) : undefined;
        obj.abci = message.abci ? exports.ABCIParams.toAmino(message.abci) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ConsensusParams.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ConsensusParams.decode(message.value);
    },
    toProto(message) {
        return exports.ConsensusParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.ConsensusParams",
            value: exports.ConsensusParams.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.ConsensusParams.typeUrl, exports.ConsensusParams);
function createBaseBlockParams() {
    return {
        max_bytes: BigInt(0),
        max_gas: BigInt(0)
    };
}
exports.BlockParams = {
    typeUrl: "/tendermint.types.BlockParams",
    is(o) {
        return o && (o.$typeUrl === exports.BlockParams.typeUrl || typeof o.max_bytes === "bigint" && typeof o.max_gas === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.BlockParams.typeUrl || typeof o.max_bytes === "bigint" && typeof o.max_gas === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.BlockParams.typeUrl || typeof o.max_bytes === "bigint" && typeof o.max_gas === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.max_bytes !== BigInt(0)) {
            writer.uint32(8).int64(message.max_bytes);
        }
        if (message.max_gas !== BigInt(0)) {
            writer.uint32(16).int64(message.max_gas);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBlockParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.max_bytes = reader.int64();
                    break;
                case 2:
                    message.max_gas = reader.int64();
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
            max_bytes: (0, helpers_1.isSet)(object.max_bytes) ? BigInt(object.max_bytes.toString()) : BigInt(0),
            max_gas: (0, helpers_1.isSet)(object.max_gas) ? BigInt(object.max_gas.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.max_bytes !== undefined && (obj.max_bytes = (message.max_bytes || BigInt(0)).toString());
        message.max_gas !== undefined && (obj.max_gas = (message.max_gas || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseBlockParams();
        message.max_bytes = object.max_bytes !== undefined && object.max_bytes !== null ? BigInt(object.max_bytes.toString()) : BigInt(0);
        message.max_gas = object.max_gas !== undefined && object.max_gas !== null ? BigInt(object.max_gas.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseBlockParams();
        if (object.max_bytes !== undefined && object.max_bytes !== null) {
            message.max_bytes = BigInt(object.max_bytes);
        }
        if (object.max_gas !== undefined && object.max_gas !== null) {
            message.max_gas = BigInt(object.max_gas);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.max_bytes = message.max_bytes ? message.max_bytes.toString() : undefined;
        obj.max_gas = message.max_gas ? message.max_gas.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.BlockParams.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.BlockParams.decode(message.value);
    },
    toProto(message) {
        return exports.BlockParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.BlockParams",
            value: exports.BlockParams.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.BlockParams.typeUrl, exports.BlockParams);
function createBaseEvidenceParams() {
    return {
        max_age_num_blocks: BigInt(0),
        max_age_duration: duration_1.Duration.fromPartial({}),
        max_bytes: BigInt(0)
    };
}
exports.EvidenceParams = {
    typeUrl: "/tendermint.types.EvidenceParams",
    is(o) {
        return o && (o.$typeUrl === exports.EvidenceParams.typeUrl || typeof o.max_age_num_blocks === "bigint" && duration_1.Duration.is(o.max_age_duration) && typeof o.max_bytes === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.EvidenceParams.typeUrl || typeof o.max_age_num_blocks === "bigint" && duration_1.Duration.isSDK(o.max_age_duration) && typeof o.max_bytes === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.EvidenceParams.typeUrl || typeof o.max_age_num_blocks === "bigint" && duration_1.Duration.isAmino(o.max_age_duration) && typeof o.max_bytes === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.max_age_num_blocks !== BigInt(0)) {
            writer.uint32(8).int64(message.max_age_num_blocks);
        }
        if (message.max_age_duration !== undefined) {
            duration_1.Duration.encode(message.max_age_duration, writer.uint32(18).fork()).ldelim();
        }
        if (message.max_bytes !== BigInt(0)) {
            writer.uint32(24).int64(message.max_bytes);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEvidenceParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.max_age_num_blocks = reader.int64();
                    break;
                case 2:
                    message.max_age_duration = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.max_bytes = reader.int64();
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
            max_age_num_blocks: (0, helpers_1.isSet)(object.max_age_num_blocks) ? BigInt(object.max_age_num_blocks.toString()) : BigInt(0),
            max_age_duration: (0, helpers_1.isSet)(object.max_age_duration) ? duration_1.Duration.fromJSON(object.max_age_duration) : undefined,
            max_bytes: (0, helpers_1.isSet)(object.max_bytes) ? BigInt(object.max_bytes.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.max_age_num_blocks !== undefined && (obj.max_age_num_blocks = (message.max_age_num_blocks || BigInt(0)).toString());
        message.max_age_duration !== undefined && (obj.max_age_duration = message.max_age_duration ? duration_1.Duration.toJSON(message.max_age_duration) : undefined);
        message.max_bytes !== undefined && (obj.max_bytes = (message.max_bytes || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEvidenceParams();
        message.max_age_num_blocks = object.max_age_num_blocks !== undefined && object.max_age_num_blocks !== null ? BigInt(object.max_age_num_blocks.toString()) : BigInt(0);
        message.max_age_duration = object.max_age_duration !== undefined && object.max_age_duration !== null ? duration_1.Duration.fromPartial(object.max_age_duration) : undefined;
        message.max_bytes = object.max_bytes !== undefined && object.max_bytes !== null ? BigInt(object.max_bytes.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseEvidenceParams();
        if (object.max_age_num_blocks !== undefined && object.max_age_num_blocks !== null) {
            message.max_age_num_blocks = BigInt(object.max_age_num_blocks);
        }
        if (object.max_age_duration !== undefined && object.max_age_duration !== null) {
            message.max_age_duration = duration_1.Duration.fromAmino(object.max_age_duration);
        }
        if (object.max_bytes !== undefined && object.max_bytes !== null) {
            message.max_bytes = BigInt(object.max_bytes);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.max_age_num_blocks = message.max_age_num_blocks ? message.max_age_num_blocks.toString() : undefined;
        obj.max_age_duration = message.max_age_duration ? duration_1.Duration.toAmino(message.max_age_duration) : undefined;
        obj.max_bytes = message.max_bytes ? message.max_bytes.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EvidenceParams.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.EvidenceParams.decode(message.value);
    },
    toProto(message) {
        return exports.EvidenceParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.EvidenceParams",
            value: exports.EvidenceParams.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.EvidenceParams.typeUrl, exports.EvidenceParams);
function createBaseValidatorParams() {
    return {
        pub_key_types: []
    };
}
exports.ValidatorParams = {
    typeUrl: "/tendermint.types.ValidatorParams",
    is(o) {
        return o && (o.$typeUrl === exports.ValidatorParams.typeUrl || Array.isArray(o.pub_key_types) && (!o.pub_key_types.length || typeof o.pub_key_types[0] === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.ValidatorParams.typeUrl || Array.isArray(o.pub_key_types) && (!o.pub_key_types.length || typeof o.pub_key_types[0] === "string"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.ValidatorParams.typeUrl || Array.isArray(o.pub_key_types) && (!o.pub_key_types.length || typeof o.pub_key_types[0] === "string"));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.pub_key_types) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pub_key_types.push(reader.string());
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
            pub_key_types: Array.isArray(object?.pub_key_types) ? object.pub_key_types.map((e) => String(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.pub_key_types) {
            obj.pub_key_types = message.pub_key_types.map(e => e);
        }
        else {
            obj.pub_key_types = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseValidatorParams();
        message.pub_key_types = object.pub_key_types?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseValidatorParams();
        message.pub_key_types = object.pub_key_types?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.pub_key_types) {
            obj.pub_key_types = message.pub_key_types.map(e => e);
        }
        else {
            obj.pub_key_types = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ValidatorParams.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ValidatorParams.decode(message.value);
    },
    toProto(message) {
        return exports.ValidatorParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.ValidatorParams",
            value: exports.ValidatorParams.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.ValidatorParams.typeUrl, exports.ValidatorParams);
function createBaseVersionParams() {
    return {
        app: BigInt(0)
    };
}
exports.VersionParams = {
    typeUrl: "/tendermint.types.VersionParams",
    is(o) {
        return o && (o.$typeUrl === exports.VersionParams.typeUrl || typeof o.app === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.VersionParams.typeUrl || typeof o.app === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.VersionParams.typeUrl || typeof o.app === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.app !== BigInt(0)) {
            writer.uint32(8).uint64(message.app);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVersionParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.app = reader.uint64();
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
            app: (0, helpers_1.isSet)(object.app) ? BigInt(object.app.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.app !== undefined && (obj.app = (message.app || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseVersionParams();
        message.app = object.app !== undefined && object.app !== null ? BigInt(object.app.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseVersionParams();
        if (object.app !== undefined && object.app !== null) {
            message.app = BigInt(object.app);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.app = message.app ? message.app.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.VersionParams.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.VersionParams.decode(message.value);
    },
    toProto(message) {
        return exports.VersionParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.VersionParams",
            value: exports.VersionParams.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.VersionParams.typeUrl, exports.VersionParams);
function createBaseHashedParams() {
    return {
        block_max_bytes: BigInt(0),
        block_max_gas: BigInt(0)
    };
}
exports.HashedParams = {
    typeUrl: "/tendermint.types.HashedParams",
    is(o) {
        return o && (o.$typeUrl === exports.HashedParams.typeUrl || typeof o.block_max_bytes === "bigint" && typeof o.block_max_gas === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.HashedParams.typeUrl || typeof o.block_max_bytes === "bigint" && typeof o.block_max_gas === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.HashedParams.typeUrl || typeof o.block_max_bytes === "bigint" && typeof o.block_max_gas === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.block_max_bytes !== BigInt(0)) {
            writer.uint32(8).int64(message.block_max_bytes);
        }
        if (message.block_max_gas !== BigInt(0)) {
            writer.uint32(16).int64(message.block_max_gas);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseHashedParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.block_max_bytes = reader.int64();
                    break;
                case 2:
                    message.block_max_gas = reader.int64();
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
            block_max_bytes: (0, helpers_1.isSet)(object.block_max_bytes) ? BigInt(object.block_max_bytes.toString()) : BigInt(0),
            block_max_gas: (0, helpers_1.isSet)(object.block_max_gas) ? BigInt(object.block_max_gas.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.block_max_bytes !== undefined && (obj.block_max_bytes = (message.block_max_bytes || BigInt(0)).toString());
        message.block_max_gas !== undefined && (obj.block_max_gas = (message.block_max_gas || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseHashedParams();
        message.block_max_bytes = object.block_max_bytes !== undefined && object.block_max_bytes !== null ? BigInt(object.block_max_bytes.toString()) : BigInt(0);
        message.block_max_gas = object.block_max_gas !== undefined && object.block_max_gas !== null ? BigInt(object.block_max_gas.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseHashedParams();
        if (object.block_max_bytes !== undefined && object.block_max_bytes !== null) {
            message.block_max_bytes = BigInt(object.block_max_bytes);
        }
        if (object.block_max_gas !== undefined && object.block_max_gas !== null) {
            message.block_max_gas = BigInt(object.block_max_gas);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.block_max_bytes = message.block_max_bytes ? message.block_max_bytes.toString() : undefined;
        obj.block_max_gas = message.block_max_gas ? message.block_max_gas.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.HashedParams.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.HashedParams.decode(message.value);
    },
    toProto(message) {
        return exports.HashedParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.HashedParams",
            value: exports.HashedParams.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.HashedParams.typeUrl, exports.HashedParams);
function createBaseABCIParams() {
    return {
        vote_extensions_enable_height: BigInt(0)
    };
}
exports.ABCIParams = {
    typeUrl: "/tendermint.types.ABCIParams",
    is(o) {
        return o && (o.$typeUrl === exports.ABCIParams.typeUrl || typeof o.vote_extensions_enable_height === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.ABCIParams.typeUrl || typeof o.vote_extensions_enable_height === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.ABCIParams.typeUrl || typeof o.vote_extensions_enable_height === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.vote_extensions_enable_height !== BigInt(0)) {
            writer.uint32(8).int64(message.vote_extensions_enable_height);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseABCIParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.vote_extensions_enable_height = reader.int64();
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
            vote_extensions_enable_height: (0, helpers_1.isSet)(object.vote_extensions_enable_height) ? BigInt(object.vote_extensions_enable_height.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.vote_extensions_enable_height !== undefined && (obj.vote_extensions_enable_height = (message.vote_extensions_enable_height || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseABCIParams();
        message.vote_extensions_enable_height = object.vote_extensions_enable_height !== undefined && object.vote_extensions_enable_height !== null ? BigInt(object.vote_extensions_enable_height.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseABCIParams();
        if (object.vote_extensions_enable_height !== undefined && object.vote_extensions_enable_height !== null) {
            message.vote_extensions_enable_height = BigInt(object.vote_extensions_enable_height);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.vote_extensions_enable_height = message.vote_extensions_enable_height ? message.vote_extensions_enable_height.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ABCIParams.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ABCIParams.decode(message.value);
    },
    toProto(message) {
        return exports.ABCIParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.ABCIParams",
            value: exports.ABCIParams.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.ABCIParams.typeUrl, exports.ABCIParams);
//# sourceMappingURL=params.js.map
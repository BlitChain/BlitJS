"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleValidator = exports.Validator = exports.ValidatorSet = exports.blockIDFlagToJSON = exports.blockIDFlagFromJSON = exports.BlockIDFlagAmino = exports.BlockIDFlagSDKType = exports.BlockIDFlag = exports.protobufPackage = void 0;
//@ts-nocheck
const keys_1 = require("../crypto/keys");
const binary_1 = require("../../binary");
const helpers_1 = require("../../helpers");
const registry_1 = require("../../registry");
exports.protobufPackage = "tendermint.types";
/** BlockIdFlag indicates which BlockID the signature is for */
var BlockIDFlag;
(function (BlockIDFlag) {
    /** BLOCK_ID_FLAG_UNKNOWN - indicates an error condition */
    BlockIDFlag[BlockIDFlag["BLOCK_ID_FLAG_UNKNOWN"] = 0] = "BLOCK_ID_FLAG_UNKNOWN";
    /** BLOCK_ID_FLAG_ABSENT - the vote was not received */
    BlockIDFlag[BlockIDFlag["BLOCK_ID_FLAG_ABSENT"] = 1] = "BLOCK_ID_FLAG_ABSENT";
    BlockIDFlag[BlockIDFlag["BLOCK_ID_FLAG_COMMIT"] = 2] = "BLOCK_ID_FLAG_COMMIT";
    /** BLOCK_ID_FLAG_NIL - voted for nil */
    BlockIDFlag[BlockIDFlag["BLOCK_ID_FLAG_NIL"] = 3] = "BLOCK_ID_FLAG_NIL";
    BlockIDFlag[BlockIDFlag["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(BlockIDFlag || (exports.BlockIDFlag = BlockIDFlag = {}));
exports.BlockIDFlagSDKType = BlockIDFlag;
exports.BlockIDFlagAmino = BlockIDFlag;
function blockIDFlagFromJSON(object) {
    switch (object) {
        case 0:
        case "BLOCK_ID_FLAG_UNKNOWN":
            return BlockIDFlag.BLOCK_ID_FLAG_UNKNOWN;
        case 1:
        case "BLOCK_ID_FLAG_ABSENT":
            return BlockIDFlag.BLOCK_ID_FLAG_ABSENT;
        case 2:
        case "BLOCK_ID_FLAG_COMMIT":
            return BlockIDFlag.BLOCK_ID_FLAG_COMMIT;
        case 3:
        case "BLOCK_ID_FLAG_NIL":
            return BlockIDFlag.BLOCK_ID_FLAG_NIL;
        case -1:
        case "UNRECOGNIZED":
        default:
            return BlockIDFlag.UNRECOGNIZED;
    }
}
exports.blockIDFlagFromJSON = blockIDFlagFromJSON;
function blockIDFlagToJSON(object) {
    switch (object) {
        case BlockIDFlag.BLOCK_ID_FLAG_UNKNOWN:
            return "BLOCK_ID_FLAG_UNKNOWN";
        case BlockIDFlag.BLOCK_ID_FLAG_ABSENT:
            return "BLOCK_ID_FLAG_ABSENT";
        case BlockIDFlag.BLOCK_ID_FLAG_COMMIT:
            return "BLOCK_ID_FLAG_COMMIT";
        case BlockIDFlag.BLOCK_ID_FLAG_NIL:
            return "BLOCK_ID_FLAG_NIL";
        case BlockIDFlag.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.blockIDFlagToJSON = blockIDFlagToJSON;
function createBaseValidatorSet() {
    return {
        validators: [],
        proposer: undefined,
        total_voting_power: BigInt(0)
    };
}
exports.ValidatorSet = {
    typeUrl: "/tendermint.types.ValidatorSet",
    is(o) {
        return o && (o.$typeUrl === exports.ValidatorSet.typeUrl || Array.isArray(o.validators) && (!o.validators.length || exports.Validator.is(o.validators[0])) && typeof o.total_voting_power === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.ValidatorSet.typeUrl || Array.isArray(o.validators) && (!o.validators.length || exports.Validator.isSDK(o.validators[0])) && typeof o.total_voting_power === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.ValidatorSet.typeUrl || Array.isArray(o.validators) && (!o.validators.length || exports.Validator.isAmino(o.validators[0])) && typeof o.total_voting_power === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.validators) {
            exports.Validator.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.proposer !== undefined) {
            exports.Validator.encode(message.proposer, writer.uint32(18).fork()).ldelim();
        }
        if (message.total_voting_power !== BigInt(0)) {
            writer.uint32(24).int64(message.total_voting_power);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorSet();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validators.push(exports.Validator.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.proposer = exports.Validator.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.total_voting_power = reader.int64();
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
            validators: Array.isArray(object?.validators) ? object.validators.map((e) => exports.Validator.fromJSON(e)) : [],
            proposer: (0, helpers_1.isSet)(object.proposer) ? exports.Validator.fromJSON(object.proposer) : undefined,
            total_voting_power: (0, helpers_1.isSet)(object.total_voting_power) ? BigInt(object.total_voting_power.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.validators) {
            obj.validators = message.validators.map(e => e ? exports.Validator.toJSON(e) : undefined);
        }
        else {
            obj.validators = [];
        }
        message.proposer !== undefined && (obj.proposer = message.proposer ? exports.Validator.toJSON(message.proposer) : undefined);
        message.total_voting_power !== undefined && (obj.total_voting_power = (message.total_voting_power || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseValidatorSet();
        message.validators = object.validators?.map(e => exports.Validator.fromPartial(e)) || [];
        message.proposer = object.proposer !== undefined && object.proposer !== null ? exports.Validator.fromPartial(object.proposer) : undefined;
        message.total_voting_power = object.total_voting_power !== undefined && object.total_voting_power !== null ? BigInt(object.total_voting_power.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseValidatorSet();
        message.validators = object.validators?.map(e => exports.Validator.fromAmino(e)) || [];
        if (object.proposer !== undefined && object.proposer !== null) {
            message.proposer = exports.Validator.fromAmino(object.proposer);
        }
        if (object.total_voting_power !== undefined && object.total_voting_power !== null) {
            message.total_voting_power = BigInt(object.total_voting_power);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.validators) {
            obj.validators = message.validators.map(e => e ? exports.Validator.toAmino(e) : undefined);
        }
        else {
            obj.validators = [];
        }
        obj.proposer = message.proposer ? exports.Validator.toAmino(message.proposer) : undefined;
        obj.total_voting_power = message.total_voting_power ? message.total_voting_power.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ValidatorSet.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ValidatorSet.decode(message.value);
    },
    toProto(message) {
        return exports.ValidatorSet.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.ValidatorSet",
            value: exports.ValidatorSet.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.ValidatorSet.typeUrl, exports.ValidatorSet);
function createBaseValidator() {
    return {
        address: new Uint8Array(),
        pub_key: keys_1.PublicKey.fromPartial({}),
        voting_power: BigInt(0),
        proposer_priority: BigInt(0)
    };
}
exports.Validator = {
    typeUrl: "/tendermint.types.Validator",
    is(o) {
        return o && (o.$typeUrl === exports.Validator.typeUrl || (o.address instanceof Uint8Array || typeof o.address === "string") && keys_1.PublicKey.is(o.pub_key) && typeof o.voting_power === "bigint" && typeof o.proposer_priority === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.Validator.typeUrl || (o.address instanceof Uint8Array || typeof o.address === "string") && keys_1.PublicKey.isSDK(o.pub_key) && typeof o.voting_power === "bigint" && typeof o.proposer_priority === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Validator.typeUrl || (o.address instanceof Uint8Array || typeof o.address === "string") && keys_1.PublicKey.isAmino(o.pub_key) && typeof o.voting_power === "bigint" && typeof o.proposer_priority === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address.length !== 0) {
            writer.uint32(10).bytes(message.address);
        }
        if (message.pub_key !== undefined) {
            keys_1.PublicKey.encode(message.pub_key, writer.uint32(18).fork()).ldelim();
        }
        if (message.voting_power !== BigInt(0)) {
            writer.uint32(24).int64(message.voting_power);
        }
        if (message.proposer_priority !== BigInt(0)) {
            writer.uint32(32).int64(message.proposer_priority);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidator();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.bytes();
                    break;
                case 2:
                    message.pub_key = keys_1.PublicKey.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.voting_power = reader.int64();
                    break;
                case 4:
                    message.proposer_priority = reader.int64();
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
            address: (0, helpers_1.isSet)(object.address) ? (0, helpers_1.bytesFromBase64)(object.address) : new Uint8Array(),
            pub_key: (0, helpers_1.isSet)(object.pub_key) ? keys_1.PublicKey.fromJSON(object.pub_key) : undefined,
            voting_power: (0, helpers_1.isSet)(object.voting_power) ? BigInt(object.voting_power.toString()) : BigInt(0),
            proposer_priority: (0, helpers_1.isSet)(object.proposer_priority) ? BigInt(object.proposer_priority.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = (0, helpers_1.base64FromBytes)(message.address !== undefined ? message.address : new Uint8Array()));
        message.pub_key !== undefined && (obj.pub_key = message.pub_key ? keys_1.PublicKey.toJSON(message.pub_key) : undefined);
        message.voting_power !== undefined && (obj.voting_power = (message.voting_power || BigInt(0)).toString());
        message.proposer_priority !== undefined && (obj.proposer_priority = (message.proposer_priority || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseValidator();
        message.address = object.address ?? new Uint8Array();
        message.pub_key = object.pub_key !== undefined && object.pub_key !== null ? keys_1.PublicKey.fromPartial(object.pub_key) : undefined;
        message.voting_power = object.voting_power !== undefined && object.voting_power !== null ? BigInt(object.voting_power.toString()) : BigInt(0);
        message.proposer_priority = object.proposer_priority !== undefined && object.proposer_priority !== null ? BigInt(object.proposer_priority.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseValidator();
        if (object.address !== undefined && object.address !== null) {
            message.address = (0, helpers_1.bytesFromBase64)(object.address);
        }
        if (object.pub_key !== undefined && object.pub_key !== null) {
            message.pub_key = keys_1.PublicKey.fromAmino(object.pub_key);
        }
        if (object.voting_power !== undefined && object.voting_power !== null) {
            message.voting_power = BigInt(object.voting_power);
        }
        if (object.proposer_priority !== undefined && object.proposer_priority !== null) {
            message.proposer_priority = BigInt(object.proposer_priority);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address ? (0, helpers_1.base64FromBytes)(message.address) : undefined;
        obj.pub_key = message.pub_key ? keys_1.PublicKey.toAmino(message.pub_key) : undefined;
        obj.voting_power = message.voting_power ? message.voting_power.toString() : undefined;
        obj.proposer_priority = message.proposer_priority ? message.proposer_priority.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Validator.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Validator.decode(message.value);
    },
    toProto(message) {
        return exports.Validator.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.Validator",
            value: exports.Validator.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Validator.typeUrl, exports.Validator);
function createBaseSimpleValidator() {
    return {
        pub_key: undefined,
        voting_power: BigInt(0)
    };
}
exports.SimpleValidator = {
    typeUrl: "/tendermint.types.SimpleValidator",
    is(o) {
        return o && (o.$typeUrl === exports.SimpleValidator.typeUrl || typeof o.voting_power === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.SimpleValidator.typeUrl || typeof o.voting_power === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.SimpleValidator.typeUrl || typeof o.voting_power === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.pub_key !== undefined) {
            keys_1.PublicKey.encode(message.pub_key, writer.uint32(10).fork()).ldelim();
        }
        if (message.voting_power !== BigInt(0)) {
            writer.uint32(16).int64(message.voting_power);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSimpleValidator();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pub_key = keys_1.PublicKey.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.voting_power = reader.int64();
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
            pub_key: (0, helpers_1.isSet)(object.pub_key) ? keys_1.PublicKey.fromJSON(object.pub_key) : undefined,
            voting_power: (0, helpers_1.isSet)(object.voting_power) ? BigInt(object.voting_power.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.pub_key !== undefined && (obj.pub_key = message.pub_key ? keys_1.PublicKey.toJSON(message.pub_key) : undefined);
        message.voting_power !== undefined && (obj.voting_power = (message.voting_power || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSimpleValidator();
        message.pub_key = object.pub_key !== undefined && object.pub_key !== null ? keys_1.PublicKey.fromPartial(object.pub_key) : undefined;
        message.voting_power = object.voting_power !== undefined && object.voting_power !== null ? BigInt(object.voting_power.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseSimpleValidator();
        if (object.pub_key !== undefined && object.pub_key !== null) {
            message.pub_key = keys_1.PublicKey.fromAmino(object.pub_key);
        }
        if (object.voting_power !== undefined && object.voting_power !== null) {
            message.voting_power = BigInt(object.voting_power);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pub_key = message.pub_key ? keys_1.PublicKey.toAmino(message.pub_key) : undefined;
        obj.voting_power = message.voting_power ? message.voting_power.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SimpleValidator.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.SimpleValidator.decode(message.value);
    },
    toProto(message) {
        return exports.SimpleValidator.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.SimpleValidator",
            value: exports.SimpleValidator.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.SimpleValidator.typeUrl, exports.SimpleValidator);
//# sourceMappingURL=validator.js.map
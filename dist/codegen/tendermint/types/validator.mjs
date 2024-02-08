//@ts-nocheck
import { PublicKey } from "../crypto/keys";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../helpers";
import { GlobalDecoderRegistry } from "../../registry";
export const protobufPackage = "tendermint.types";
/** BlockIdFlag indicates which BlockID the signature is for */
export var BlockIDFlag;
(function (BlockIDFlag) {
    /** BLOCK_ID_FLAG_UNKNOWN - indicates an error condition */
    BlockIDFlag[BlockIDFlag["BLOCK_ID_FLAG_UNKNOWN"] = 0] = "BLOCK_ID_FLAG_UNKNOWN";
    /** BLOCK_ID_FLAG_ABSENT - the vote was not received */
    BlockIDFlag[BlockIDFlag["BLOCK_ID_FLAG_ABSENT"] = 1] = "BLOCK_ID_FLAG_ABSENT";
    BlockIDFlag[BlockIDFlag["BLOCK_ID_FLAG_COMMIT"] = 2] = "BLOCK_ID_FLAG_COMMIT";
    /** BLOCK_ID_FLAG_NIL - voted for nil */
    BlockIDFlag[BlockIDFlag["BLOCK_ID_FLAG_NIL"] = 3] = "BLOCK_ID_FLAG_NIL";
    BlockIDFlag[BlockIDFlag["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(BlockIDFlag || (BlockIDFlag = {}));
export const BlockIDFlagSDKType = BlockIDFlag;
export const BlockIDFlagAmino = BlockIDFlag;
export function blockIDFlagFromJSON(object) {
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
export function blockIDFlagToJSON(object) {
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
function createBaseValidatorSet() {
    return {
        validators: [],
        proposer: undefined,
        total_voting_power: BigInt(0)
    };
}
export const ValidatorSet = {
    typeUrl: "/tendermint.types.ValidatorSet",
    is(o) {
        return o && (o.$typeUrl === ValidatorSet.typeUrl || Array.isArray(o.validators) && (!o.validators.length || Validator.is(o.validators[0])) && typeof o.total_voting_power === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === ValidatorSet.typeUrl || Array.isArray(o.validators) && (!o.validators.length || Validator.isSDK(o.validators[0])) && typeof o.total_voting_power === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === ValidatorSet.typeUrl || Array.isArray(o.validators) && (!o.validators.length || Validator.isAmino(o.validators[0])) && typeof o.total_voting_power === "bigint");
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.validators) {
            Validator.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.proposer !== undefined) {
            Validator.encode(message.proposer, writer.uint32(18).fork()).ldelim();
        }
        if (message.total_voting_power !== BigInt(0)) {
            writer.uint32(24).int64(message.total_voting_power);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorSet();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validators.push(Validator.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.proposer = Validator.decode(reader, reader.uint32());
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
            validators: Array.isArray(object?.validators) ? object.validators.map((e) => Validator.fromJSON(e)) : [],
            proposer: isSet(object.proposer) ? Validator.fromJSON(object.proposer) : undefined,
            total_voting_power: isSet(object.total_voting_power) ? BigInt(object.total_voting_power.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.validators) {
            obj.validators = message.validators.map(e => e ? Validator.toJSON(e) : undefined);
        }
        else {
            obj.validators = [];
        }
        message.proposer !== undefined && (obj.proposer = message.proposer ? Validator.toJSON(message.proposer) : undefined);
        message.total_voting_power !== undefined && (obj.total_voting_power = (message.total_voting_power || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseValidatorSet();
        message.validators = object.validators?.map(e => Validator.fromPartial(e)) || [];
        message.proposer = object.proposer !== undefined && object.proposer !== null ? Validator.fromPartial(object.proposer) : undefined;
        message.total_voting_power = object.total_voting_power !== undefined && object.total_voting_power !== null ? BigInt(object.total_voting_power.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseValidatorSet();
        message.validators = object.validators?.map(e => Validator.fromAmino(e)) || [];
        if (object.proposer !== undefined && object.proposer !== null) {
            message.proposer = Validator.fromAmino(object.proposer);
        }
        if (object.total_voting_power !== undefined && object.total_voting_power !== null) {
            message.total_voting_power = BigInt(object.total_voting_power);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.validators) {
            obj.validators = message.validators.map(e => e ? Validator.toAmino(e) : undefined);
        }
        else {
            obj.validators = [];
        }
        obj.proposer = message.proposer ? Validator.toAmino(message.proposer) : undefined;
        obj.total_voting_power = message.total_voting_power ? message.total_voting_power.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ValidatorSet.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ValidatorSet.decode(message.value);
    },
    toProto(message) {
        return ValidatorSet.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.ValidatorSet",
            value: ValidatorSet.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(ValidatorSet.typeUrl, ValidatorSet);
function createBaseValidator() {
    return {
        address: new Uint8Array(),
        pub_key: PublicKey.fromPartial({}),
        voting_power: BigInt(0),
        proposer_priority: BigInt(0)
    };
}
export const Validator = {
    typeUrl: "/tendermint.types.Validator",
    is(o) {
        return o && (o.$typeUrl === Validator.typeUrl || (o.address instanceof Uint8Array || typeof o.address === "string") && PublicKey.is(o.pub_key) && typeof o.voting_power === "bigint" && typeof o.proposer_priority === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === Validator.typeUrl || (o.address instanceof Uint8Array || typeof o.address === "string") && PublicKey.isSDK(o.pub_key) && typeof o.voting_power === "bigint" && typeof o.proposer_priority === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === Validator.typeUrl || (o.address instanceof Uint8Array || typeof o.address === "string") && PublicKey.isAmino(o.pub_key) && typeof o.voting_power === "bigint" && typeof o.proposer_priority === "bigint");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.address.length !== 0) {
            writer.uint32(10).bytes(message.address);
        }
        if (message.pub_key !== undefined) {
            PublicKey.encode(message.pub_key, writer.uint32(18).fork()).ldelim();
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
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidator();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.bytes();
                    break;
                case 2:
                    message.pub_key = PublicKey.decode(reader, reader.uint32());
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
            address: isSet(object.address) ? bytesFromBase64(object.address) : new Uint8Array(),
            pub_key: isSet(object.pub_key) ? PublicKey.fromJSON(object.pub_key) : undefined,
            voting_power: isSet(object.voting_power) ? BigInt(object.voting_power.toString()) : BigInt(0),
            proposer_priority: isSet(object.proposer_priority) ? BigInt(object.proposer_priority.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = base64FromBytes(message.address !== undefined ? message.address : new Uint8Array()));
        message.pub_key !== undefined && (obj.pub_key = message.pub_key ? PublicKey.toJSON(message.pub_key) : undefined);
        message.voting_power !== undefined && (obj.voting_power = (message.voting_power || BigInt(0)).toString());
        message.proposer_priority !== undefined && (obj.proposer_priority = (message.proposer_priority || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseValidator();
        message.address = object.address ?? new Uint8Array();
        message.pub_key = object.pub_key !== undefined && object.pub_key !== null ? PublicKey.fromPartial(object.pub_key) : undefined;
        message.voting_power = object.voting_power !== undefined && object.voting_power !== null ? BigInt(object.voting_power.toString()) : BigInt(0);
        message.proposer_priority = object.proposer_priority !== undefined && object.proposer_priority !== null ? BigInt(object.proposer_priority.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseValidator();
        if (object.address !== undefined && object.address !== null) {
            message.address = bytesFromBase64(object.address);
        }
        if (object.pub_key !== undefined && object.pub_key !== null) {
            message.pub_key = PublicKey.fromAmino(object.pub_key);
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
        obj.address = message.address ? base64FromBytes(message.address) : undefined;
        obj.pub_key = message.pub_key ? PublicKey.toAmino(message.pub_key) : undefined;
        obj.voting_power = message.voting_power ? message.voting_power.toString() : undefined;
        obj.proposer_priority = message.proposer_priority ? message.proposer_priority.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Validator.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Validator.decode(message.value);
    },
    toProto(message) {
        return Validator.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.Validator",
            value: Validator.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(Validator.typeUrl, Validator);
function createBaseSimpleValidator() {
    return {
        pub_key: undefined,
        voting_power: BigInt(0)
    };
}
export const SimpleValidator = {
    typeUrl: "/tendermint.types.SimpleValidator",
    is(o) {
        return o && (o.$typeUrl === SimpleValidator.typeUrl || typeof o.voting_power === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === SimpleValidator.typeUrl || typeof o.voting_power === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === SimpleValidator.typeUrl || typeof o.voting_power === "bigint");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.pub_key !== undefined) {
            PublicKey.encode(message.pub_key, writer.uint32(10).fork()).ldelim();
        }
        if (message.voting_power !== BigInt(0)) {
            writer.uint32(16).int64(message.voting_power);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSimpleValidator();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pub_key = PublicKey.decode(reader, reader.uint32());
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
            pub_key: isSet(object.pub_key) ? PublicKey.fromJSON(object.pub_key) : undefined,
            voting_power: isSet(object.voting_power) ? BigInt(object.voting_power.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.pub_key !== undefined && (obj.pub_key = message.pub_key ? PublicKey.toJSON(message.pub_key) : undefined);
        message.voting_power !== undefined && (obj.voting_power = (message.voting_power || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSimpleValidator();
        message.pub_key = object.pub_key !== undefined && object.pub_key !== null ? PublicKey.fromPartial(object.pub_key) : undefined;
        message.voting_power = object.voting_power !== undefined && object.voting_power !== null ? BigInt(object.voting_power.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseSimpleValidator();
        if (object.pub_key !== undefined && object.pub_key !== null) {
            message.pub_key = PublicKey.fromAmino(object.pub_key);
        }
        if (object.voting_power !== undefined && object.voting_power !== null) {
            message.voting_power = BigInt(object.voting_power);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pub_key = message.pub_key ? PublicKey.toAmino(message.pub_key) : undefined;
        obj.voting_power = message.voting_power ? message.voting_power.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return SimpleValidator.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return SimpleValidator.decode(message.value);
    },
    toProto(message) {
        return SimpleValidator.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.SimpleValidator",
            value: SimpleValidator.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(SimpleValidator.typeUrl, SimpleValidator);
//# sourceMappingURL=validator.js.map
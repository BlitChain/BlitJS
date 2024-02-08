//@ts-nocheck
import { Proof } from "../crypto/proof";
import { Consensus } from "../version/types";
import { Timestamp } from "../../google/protobuf/timestamp";
import { ValidatorSet, blockIDFlagFromJSON, blockIDFlagToJSON } from "./validator";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, bytesFromBase64, base64FromBytes, toTimestamp, fromTimestamp, fromJsonTimestamp } from "../../helpers";
export const protobufPackage = "tendermint.types";
/** SignedMsgType is a type of signed message in the consensus. */
export var SignedMsgType;
(function (SignedMsgType) {
    SignedMsgType[SignedMsgType["SIGNED_MSG_TYPE_UNKNOWN"] = 0] = "SIGNED_MSG_TYPE_UNKNOWN";
    /** SIGNED_MSG_TYPE_PREVOTE - Votes */
    SignedMsgType[SignedMsgType["SIGNED_MSG_TYPE_PREVOTE"] = 1] = "SIGNED_MSG_TYPE_PREVOTE";
    SignedMsgType[SignedMsgType["SIGNED_MSG_TYPE_PRECOMMIT"] = 2] = "SIGNED_MSG_TYPE_PRECOMMIT";
    /** SIGNED_MSG_TYPE_PROPOSAL - Proposals */
    SignedMsgType[SignedMsgType["SIGNED_MSG_TYPE_PROPOSAL"] = 32] = "SIGNED_MSG_TYPE_PROPOSAL";
    SignedMsgType[SignedMsgType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(SignedMsgType || (SignedMsgType = {}));
export const SignedMsgTypeSDKType = SignedMsgType;
export const SignedMsgTypeAmino = SignedMsgType;
export function signedMsgTypeFromJSON(object) {
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
export function signedMsgTypeToJSON(object) {
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
function createBasePartSetHeader() {
    return {
        total: 0,
        hash: new Uint8Array()
    };
}
export const PartSetHeader = {
    typeUrl: "/tendermint.types.PartSetHeader",
    encode(message, writer = BinaryWriter.create()) {
        if (message.total !== 0) {
            writer.uint32(8).uint32(message.total);
        }
        if (message.hash.length !== 0) {
            writer.uint32(18).bytes(message.hash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            total: isSet(object.total) ? Number(object.total) : 0,
            hash: isSet(object.hash) ? bytesFromBase64(object.hash) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.total !== undefined && (obj.total = Math.round(message.total));
        message.hash !== undefined && (obj.hash = base64FromBytes(message.hash !== undefined ? message.hash : new Uint8Array()));
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
            message.hash = bytesFromBase64(object.hash);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.total = message.total;
        obj.hash = message.hash ? base64FromBytes(message.hash) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return PartSetHeader.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return PartSetHeader.decode(message.value);
    },
    toProto(message) {
        return PartSetHeader.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.PartSetHeader",
            value: PartSetHeader.encode(message).finish()
        };
    }
};
function createBasePart() {
    return {
        index: 0,
        bytes: new Uint8Array(),
        proof: Proof.fromPartial({})
    };
}
export const Part = {
    typeUrl: "/tendermint.types.Part",
    encode(message, writer = BinaryWriter.create()) {
        if (message.index !== 0) {
            writer.uint32(8).uint32(message.index);
        }
        if (message.bytes.length !== 0) {
            writer.uint32(18).bytes(message.bytes);
        }
        if (message.proof !== undefined) {
            Proof.encode(message.proof, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
                    message.proof = Proof.decode(reader, reader.uint32());
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
            index: isSet(object.index) ? Number(object.index) : 0,
            bytes: isSet(object.bytes) ? bytesFromBase64(object.bytes) : new Uint8Array(),
            proof: isSet(object.proof) ? Proof.fromJSON(object.proof) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = Math.round(message.index));
        message.bytes !== undefined && (obj.bytes = base64FromBytes(message.bytes !== undefined ? message.bytes : new Uint8Array()));
        message.proof !== undefined && (obj.proof = message.proof ? Proof.toJSON(message.proof) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBasePart();
        message.index = object.index ?? 0;
        message.bytes = object.bytes ?? new Uint8Array();
        message.proof = object.proof !== undefined && object.proof !== null ? Proof.fromPartial(object.proof) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBasePart();
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        if (object.bytes !== undefined && object.bytes !== null) {
            message.bytes = bytesFromBase64(object.bytes);
        }
        if (object.proof !== undefined && object.proof !== null) {
            message.proof = Proof.fromAmino(object.proof);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.index = message.index;
        obj.bytes = message.bytes ? base64FromBytes(message.bytes) : undefined;
        obj.proof = message.proof ? Proof.toAmino(message.proof) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Part.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Part.decode(message.value);
    },
    toProto(message) {
        return Part.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.Part",
            value: Part.encode(message).finish()
        };
    }
};
function createBaseBlockID() {
    return {
        hash: new Uint8Array(),
        part_set_header: PartSetHeader.fromPartial({})
    };
}
export const BlockID = {
    typeUrl: "/tendermint.types.BlockID",
    encode(message, writer = BinaryWriter.create()) {
        if (message.hash.length !== 0) {
            writer.uint32(10).bytes(message.hash);
        }
        if (message.part_set_header !== undefined) {
            PartSetHeader.encode(message.part_set_header, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBlockID();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hash = reader.bytes();
                    break;
                case 2:
                    message.part_set_header = PartSetHeader.decode(reader, reader.uint32());
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
            hash: isSet(object.hash) ? bytesFromBase64(object.hash) : new Uint8Array(),
            part_set_header: isSet(object.part_set_header) ? PartSetHeader.fromJSON(object.part_set_header) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.hash !== undefined && (obj.hash = base64FromBytes(message.hash !== undefined ? message.hash : new Uint8Array()));
        message.part_set_header !== undefined && (obj.part_set_header = message.part_set_header ? PartSetHeader.toJSON(message.part_set_header) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseBlockID();
        message.hash = object.hash ?? new Uint8Array();
        message.part_set_header = object.part_set_header !== undefined && object.part_set_header !== null ? PartSetHeader.fromPartial(object.part_set_header) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseBlockID();
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = bytesFromBase64(object.hash);
        }
        if (object.part_set_header !== undefined && object.part_set_header !== null) {
            message.part_set_header = PartSetHeader.fromAmino(object.part_set_header);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.hash = message.hash ? base64FromBytes(message.hash) : undefined;
        obj.part_set_header = message.part_set_header ? PartSetHeader.toAmino(message.part_set_header) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return BlockID.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return BlockID.decode(message.value);
    },
    toProto(message) {
        return BlockID.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.BlockID",
            value: BlockID.encode(message).finish()
        };
    }
};
function createBaseHeader() {
    return {
        version: Consensus.fromPartial({}),
        chain_id: "",
        height: BigInt(0),
        time: new Date(),
        last_block_id: BlockID.fromPartial({}),
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
export const Header = {
    typeUrl: "/tendermint.types.Header",
    encode(message, writer = BinaryWriter.create()) {
        if (message.version !== undefined) {
            Consensus.encode(message.version, writer.uint32(10).fork()).ldelim();
        }
        if (message.chain_id !== "") {
            writer.uint32(18).string(message.chain_id);
        }
        if (message.height !== BigInt(0)) {
            writer.uint32(24).int64(message.height);
        }
        if (message.time !== undefined) {
            Timestamp.encode(toTimestamp(message.time), writer.uint32(34).fork()).ldelim();
        }
        if (message.last_block_id !== undefined) {
            BlockID.encode(message.last_block_id, writer.uint32(42).fork()).ldelim();
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
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseHeader();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.version = Consensus.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.chain_id = reader.string();
                    break;
                case 3:
                    message.height = reader.int64();
                    break;
                case 4:
                    message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.last_block_id = BlockID.decode(reader, reader.uint32());
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
            version: isSet(object.version) ? Consensus.fromJSON(object.version) : undefined,
            chain_id: isSet(object.chain_id) ? String(object.chain_id) : "",
            height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0),
            time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
            last_block_id: isSet(object.last_block_id) ? BlockID.fromJSON(object.last_block_id) : undefined,
            last_commit_hash: isSet(object.last_commit_hash) ? bytesFromBase64(object.last_commit_hash) : new Uint8Array(),
            data_hash: isSet(object.data_hash) ? bytesFromBase64(object.data_hash) : new Uint8Array(),
            validators_hash: isSet(object.validators_hash) ? bytesFromBase64(object.validators_hash) : new Uint8Array(),
            next_validators_hash: isSet(object.next_validators_hash) ? bytesFromBase64(object.next_validators_hash) : new Uint8Array(),
            consensus_hash: isSet(object.consensus_hash) ? bytesFromBase64(object.consensus_hash) : new Uint8Array(),
            app_hash: isSet(object.app_hash) ? bytesFromBase64(object.app_hash) : new Uint8Array(),
            last_results_hash: isSet(object.last_results_hash) ? bytesFromBase64(object.last_results_hash) : new Uint8Array(),
            evidence_hash: isSet(object.evidence_hash) ? bytesFromBase64(object.evidence_hash) : new Uint8Array(),
            proposer_address: isSet(object.proposer_address) ? bytesFromBase64(object.proposer_address) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.version !== undefined && (obj.version = message.version ? Consensus.toJSON(message.version) : undefined);
        message.chain_id !== undefined && (obj.chain_id = message.chain_id);
        message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
        message.time !== undefined && (obj.time = message.time.toISOString());
        message.last_block_id !== undefined && (obj.last_block_id = message.last_block_id ? BlockID.toJSON(message.last_block_id) : undefined);
        message.last_commit_hash !== undefined && (obj.last_commit_hash = base64FromBytes(message.last_commit_hash !== undefined ? message.last_commit_hash : new Uint8Array()));
        message.data_hash !== undefined && (obj.data_hash = base64FromBytes(message.data_hash !== undefined ? message.data_hash : new Uint8Array()));
        message.validators_hash !== undefined && (obj.validators_hash = base64FromBytes(message.validators_hash !== undefined ? message.validators_hash : new Uint8Array()));
        message.next_validators_hash !== undefined && (obj.next_validators_hash = base64FromBytes(message.next_validators_hash !== undefined ? message.next_validators_hash : new Uint8Array()));
        message.consensus_hash !== undefined && (obj.consensus_hash = base64FromBytes(message.consensus_hash !== undefined ? message.consensus_hash : new Uint8Array()));
        message.app_hash !== undefined && (obj.app_hash = base64FromBytes(message.app_hash !== undefined ? message.app_hash : new Uint8Array()));
        message.last_results_hash !== undefined && (obj.last_results_hash = base64FromBytes(message.last_results_hash !== undefined ? message.last_results_hash : new Uint8Array()));
        message.evidence_hash !== undefined && (obj.evidence_hash = base64FromBytes(message.evidence_hash !== undefined ? message.evidence_hash : new Uint8Array()));
        message.proposer_address !== undefined && (obj.proposer_address = base64FromBytes(message.proposer_address !== undefined ? message.proposer_address : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseHeader();
        message.version = object.version !== undefined && object.version !== null ? Consensus.fromPartial(object.version) : undefined;
        message.chain_id = object.chain_id ?? "";
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        message.time = object.time ?? undefined;
        message.last_block_id = object.last_block_id !== undefined && object.last_block_id !== null ? BlockID.fromPartial(object.last_block_id) : undefined;
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
            message.version = Consensus.fromAmino(object.version);
        }
        if (object.chain_id !== undefined && object.chain_id !== null) {
            message.chain_id = object.chain_id;
        }
        if (object.height !== undefined && object.height !== null) {
            message.height = BigInt(object.height);
        }
        if (object.time !== undefined && object.time !== null) {
            message.time = fromTimestamp(Timestamp.fromAmino(object.time));
        }
        if (object.last_block_id !== undefined && object.last_block_id !== null) {
            message.last_block_id = BlockID.fromAmino(object.last_block_id);
        }
        if (object.last_commit_hash !== undefined && object.last_commit_hash !== null) {
            message.last_commit_hash = bytesFromBase64(object.last_commit_hash);
        }
        if (object.data_hash !== undefined && object.data_hash !== null) {
            message.data_hash = bytesFromBase64(object.data_hash);
        }
        if (object.validators_hash !== undefined && object.validators_hash !== null) {
            message.validators_hash = bytesFromBase64(object.validators_hash);
        }
        if (object.next_validators_hash !== undefined && object.next_validators_hash !== null) {
            message.next_validators_hash = bytesFromBase64(object.next_validators_hash);
        }
        if (object.consensus_hash !== undefined && object.consensus_hash !== null) {
            message.consensus_hash = bytesFromBase64(object.consensus_hash);
        }
        if (object.app_hash !== undefined && object.app_hash !== null) {
            message.app_hash = bytesFromBase64(object.app_hash);
        }
        if (object.last_results_hash !== undefined && object.last_results_hash !== null) {
            message.last_results_hash = bytesFromBase64(object.last_results_hash);
        }
        if (object.evidence_hash !== undefined && object.evidence_hash !== null) {
            message.evidence_hash = bytesFromBase64(object.evidence_hash);
        }
        if (object.proposer_address !== undefined && object.proposer_address !== null) {
            message.proposer_address = bytesFromBase64(object.proposer_address);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.version = message.version ? Consensus.toAmino(message.version) : undefined;
        obj.chain_id = message.chain_id;
        obj.height = message.height ? message.height.toString() : undefined;
        obj.time = message.time ? Timestamp.toAmino(toTimestamp(message.time)) : undefined;
        obj.last_block_id = message.last_block_id ? BlockID.toAmino(message.last_block_id) : undefined;
        obj.last_commit_hash = message.last_commit_hash ? base64FromBytes(message.last_commit_hash) : undefined;
        obj.data_hash = message.data_hash ? base64FromBytes(message.data_hash) : undefined;
        obj.validators_hash = message.validators_hash ? base64FromBytes(message.validators_hash) : undefined;
        obj.next_validators_hash = message.next_validators_hash ? base64FromBytes(message.next_validators_hash) : undefined;
        obj.consensus_hash = message.consensus_hash ? base64FromBytes(message.consensus_hash) : undefined;
        obj.app_hash = message.app_hash ? base64FromBytes(message.app_hash) : undefined;
        obj.last_results_hash = message.last_results_hash ? base64FromBytes(message.last_results_hash) : undefined;
        obj.evidence_hash = message.evidence_hash ? base64FromBytes(message.evidence_hash) : undefined;
        obj.proposer_address = message.proposer_address ? base64FromBytes(message.proposer_address) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Header.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Header.decode(message.value);
    },
    toProto(message) {
        return Header.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.Header",
            value: Header.encode(message).finish()
        };
    }
};
function createBaseData() {
    return {
        txs: []
    };
}
export const Data = {
    typeUrl: "/tendermint.types.Data",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.txs) {
            writer.uint32(10).bytes(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            txs: Array.isArray(object?.txs) ? object.txs.map((e) => bytesFromBase64(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.txs) {
            obj.txs = message.txs.map(e => base64FromBytes(e !== undefined ? e : new Uint8Array()));
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
        message.txs = object.txs?.map(e => bytesFromBase64(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.txs) {
            obj.txs = message.txs.map(e => base64FromBytes(e));
        }
        else {
            obj.txs = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return Data.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Data.decode(message.value);
    },
    toProto(message) {
        return Data.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.Data",
            value: Data.encode(message).finish()
        };
    }
};
function createBaseVote() {
    return {
        type: 0,
        height: BigInt(0),
        round: 0,
        block_id: BlockID.fromPartial({}),
        timestamp: new Date(),
        validator_address: new Uint8Array(),
        validator_index: 0,
        signature: new Uint8Array(),
        extension: new Uint8Array(),
        extension_signature: new Uint8Array()
    };
}
export const Vote = {
    typeUrl: "/tendermint.types.Vote",
    encode(message, writer = BinaryWriter.create()) {
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
            BlockID.encode(message.block_id, writer.uint32(34).fork()).ldelim();
        }
        if (message.timestamp !== undefined) {
            Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(42).fork()).ldelim();
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
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
                    message.block_id = BlockID.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
            type: isSet(object.type) ? signedMsgTypeFromJSON(object.type) : -1,
            height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0),
            round: isSet(object.round) ? Number(object.round) : 0,
            block_id: isSet(object.block_id) ? BlockID.fromJSON(object.block_id) : undefined,
            timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined,
            validator_address: isSet(object.validator_address) ? bytesFromBase64(object.validator_address) : new Uint8Array(),
            validator_index: isSet(object.validator_index) ? Number(object.validator_index) : 0,
            signature: isSet(object.signature) ? bytesFromBase64(object.signature) : new Uint8Array(),
            extension: isSet(object.extension) ? bytesFromBase64(object.extension) : new Uint8Array(),
            extension_signature: isSet(object.extension_signature) ? bytesFromBase64(object.extension_signature) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.type !== undefined && (obj.type = signedMsgTypeToJSON(message.type));
        message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
        message.round !== undefined && (obj.round = Math.round(message.round));
        message.block_id !== undefined && (obj.block_id = message.block_id ? BlockID.toJSON(message.block_id) : undefined);
        message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
        message.validator_address !== undefined && (obj.validator_address = base64FromBytes(message.validator_address !== undefined ? message.validator_address : new Uint8Array()));
        message.validator_index !== undefined && (obj.validator_index = Math.round(message.validator_index));
        message.signature !== undefined && (obj.signature = base64FromBytes(message.signature !== undefined ? message.signature : new Uint8Array()));
        message.extension !== undefined && (obj.extension = base64FromBytes(message.extension !== undefined ? message.extension : new Uint8Array()));
        message.extension_signature !== undefined && (obj.extension_signature = base64FromBytes(message.extension_signature !== undefined ? message.extension_signature : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseVote();
        message.type = object.type ?? 0;
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        message.round = object.round ?? 0;
        message.block_id = object.block_id !== undefined && object.block_id !== null ? BlockID.fromPartial(object.block_id) : undefined;
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
            message.block_id = BlockID.fromAmino(object.block_id);
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = fromTimestamp(Timestamp.fromAmino(object.timestamp));
        }
        if (object.validator_address !== undefined && object.validator_address !== null) {
            message.validator_address = bytesFromBase64(object.validator_address);
        }
        if (object.validator_index !== undefined && object.validator_index !== null) {
            message.validator_index = object.validator_index;
        }
        if (object.signature !== undefined && object.signature !== null) {
            message.signature = bytesFromBase64(object.signature);
        }
        if (object.extension !== undefined && object.extension !== null) {
            message.extension = bytesFromBase64(object.extension);
        }
        if (object.extension_signature !== undefined && object.extension_signature !== null) {
            message.extension_signature = bytesFromBase64(object.extension_signature);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.type = message.type;
        obj.height = message.height ? message.height.toString() : undefined;
        obj.round = message.round;
        obj.block_id = message.block_id ? BlockID.toAmino(message.block_id) : undefined;
        obj.timestamp = message.timestamp ? Timestamp.toAmino(toTimestamp(message.timestamp)) : undefined;
        obj.validator_address = message.validator_address ? base64FromBytes(message.validator_address) : undefined;
        obj.validator_index = message.validator_index;
        obj.signature = message.signature ? base64FromBytes(message.signature) : undefined;
        obj.extension = message.extension ? base64FromBytes(message.extension) : undefined;
        obj.extension_signature = message.extension_signature ? base64FromBytes(message.extension_signature) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Vote.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Vote.decode(message.value);
    },
    toProto(message) {
        return Vote.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.Vote",
            value: Vote.encode(message).finish()
        };
    }
};
function createBaseCommit() {
    return {
        height: BigInt(0),
        round: 0,
        block_id: BlockID.fromPartial({}),
        signatures: []
    };
}
export const Commit = {
    typeUrl: "/tendermint.types.Commit",
    encode(message, writer = BinaryWriter.create()) {
        if (message.height !== BigInt(0)) {
            writer.uint32(8).int64(message.height);
        }
        if (message.round !== 0) {
            writer.uint32(16).int32(message.round);
        }
        if (message.block_id !== undefined) {
            BlockID.encode(message.block_id, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.signatures) {
            CommitSig.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
                    message.block_id = BlockID.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.signatures.push(CommitSig.decode(reader, reader.uint32()));
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
            height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0),
            round: isSet(object.round) ? Number(object.round) : 0,
            block_id: isSet(object.block_id) ? BlockID.fromJSON(object.block_id) : undefined,
            signatures: Array.isArray(object?.signatures) ? object.signatures.map((e) => CommitSig.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
        message.round !== undefined && (obj.round = Math.round(message.round));
        message.block_id !== undefined && (obj.block_id = message.block_id ? BlockID.toJSON(message.block_id) : undefined);
        if (message.signatures) {
            obj.signatures = message.signatures.map(e => e ? CommitSig.toJSON(e) : undefined);
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
        message.block_id = object.block_id !== undefined && object.block_id !== null ? BlockID.fromPartial(object.block_id) : undefined;
        message.signatures = object.signatures?.map(e => CommitSig.fromPartial(e)) || [];
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
            message.block_id = BlockID.fromAmino(object.block_id);
        }
        message.signatures = object.signatures?.map(e => CommitSig.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.height = message.height ? message.height.toString() : undefined;
        obj.round = message.round;
        obj.block_id = message.block_id ? BlockID.toAmino(message.block_id) : undefined;
        if (message.signatures) {
            obj.signatures = message.signatures.map(e => e ? CommitSig.toAmino(e) : undefined);
        }
        else {
            obj.signatures = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return Commit.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Commit.decode(message.value);
    },
    toProto(message) {
        return Commit.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.Commit",
            value: Commit.encode(message).finish()
        };
    }
};
function createBaseCommitSig() {
    return {
        block_id_flag: 0,
        validator_address: new Uint8Array(),
        timestamp: new Date(),
        signature: new Uint8Array()
    };
}
export const CommitSig = {
    typeUrl: "/tendermint.types.CommitSig",
    encode(message, writer = BinaryWriter.create()) {
        if (message.block_id_flag !== 0) {
            writer.uint32(8).int32(message.block_id_flag);
        }
        if (message.validator_address.length !== 0) {
            writer.uint32(18).bytes(message.validator_address);
        }
        if (message.timestamp !== undefined) {
            Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(26).fork()).ldelim();
        }
        if (message.signature.length !== 0) {
            writer.uint32(34).bytes(message.signature);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
                    message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
            block_id_flag: isSet(object.block_id_flag) ? blockIDFlagFromJSON(object.block_id_flag) : -1,
            validator_address: isSet(object.validator_address) ? bytesFromBase64(object.validator_address) : new Uint8Array(),
            timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined,
            signature: isSet(object.signature) ? bytesFromBase64(object.signature) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.block_id_flag !== undefined && (obj.block_id_flag = blockIDFlagToJSON(message.block_id_flag));
        message.validator_address !== undefined && (obj.validator_address = base64FromBytes(message.validator_address !== undefined ? message.validator_address : new Uint8Array()));
        message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
        message.signature !== undefined && (obj.signature = base64FromBytes(message.signature !== undefined ? message.signature : new Uint8Array()));
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
            message.block_id_flag = blockIDFlagFromJSON(object.block_id_flag);
        }
        if (object.validator_address !== undefined && object.validator_address !== null) {
            message.validator_address = bytesFromBase64(object.validator_address);
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = fromTimestamp(Timestamp.fromAmino(object.timestamp));
        }
        if (object.signature !== undefined && object.signature !== null) {
            message.signature = bytesFromBase64(object.signature);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.block_id_flag = message.block_id_flag;
        obj.validator_address = message.validator_address ? base64FromBytes(message.validator_address) : undefined;
        obj.timestamp = message.timestamp ? Timestamp.toAmino(toTimestamp(message.timestamp)) : undefined;
        obj.signature = message.signature ? base64FromBytes(message.signature) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return CommitSig.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return CommitSig.decode(message.value);
    },
    toProto(message) {
        return CommitSig.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.CommitSig",
            value: CommitSig.encode(message).finish()
        };
    }
};
function createBaseExtendedCommit() {
    return {
        height: BigInt(0),
        round: 0,
        block_id: BlockID.fromPartial({}),
        extended_signatures: []
    };
}
export const ExtendedCommit = {
    typeUrl: "/tendermint.types.ExtendedCommit",
    encode(message, writer = BinaryWriter.create()) {
        if (message.height !== BigInt(0)) {
            writer.uint32(8).int64(message.height);
        }
        if (message.round !== 0) {
            writer.uint32(16).int32(message.round);
        }
        if (message.block_id !== undefined) {
            BlockID.encode(message.block_id, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.extended_signatures) {
            ExtendedCommitSig.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
                    message.block_id = BlockID.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.extended_signatures.push(ExtendedCommitSig.decode(reader, reader.uint32()));
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
            height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0),
            round: isSet(object.round) ? Number(object.round) : 0,
            block_id: isSet(object.block_id) ? BlockID.fromJSON(object.block_id) : undefined,
            extended_signatures: Array.isArray(object?.extended_signatures) ? object.extended_signatures.map((e) => ExtendedCommitSig.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
        message.round !== undefined && (obj.round = Math.round(message.round));
        message.block_id !== undefined && (obj.block_id = message.block_id ? BlockID.toJSON(message.block_id) : undefined);
        if (message.extended_signatures) {
            obj.extended_signatures = message.extended_signatures.map(e => e ? ExtendedCommitSig.toJSON(e) : undefined);
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
        message.block_id = object.block_id !== undefined && object.block_id !== null ? BlockID.fromPartial(object.block_id) : undefined;
        message.extended_signatures = object.extended_signatures?.map(e => ExtendedCommitSig.fromPartial(e)) || [];
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
            message.block_id = BlockID.fromAmino(object.block_id);
        }
        message.extended_signatures = object.extended_signatures?.map(e => ExtendedCommitSig.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.height = message.height ? message.height.toString() : undefined;
        obj.round = message.round;
        obj.block_id = message.block_id ? BlockID.toAmino(message.block_id) : undefined;
        if (message.extended_signatures) {
            obj.extended_signatures = message.extended_signatures.map(e => e ? ExtendedCommitSig.toAmino(e) : undefined);
        }
        else {
            obj.extended_signatures = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return ExtendedCommit.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ExtendedCommit.decode(message.value);
    },
    toProto(message) {
        return ExtendedCommit.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.ExtendedCommit",
            value: ExtendedCommit.encode(message).finish()
        };
    }
};
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
export const ExtendedCommitSig = {
    typeUrl: "/tendermint.types.ExtendedCommitSig",
    encode(message, writer = BinaryWriter.create()) {
        if (message.block_id_flag !== 0) {
            writer.uint32(8).int32(message.block_id_flag);
        }
        if (message.validator_address.length !== 0) {
            writer.uint32(18).bytes(message.validator_address);
        }
        if (message.timestamp !== undefined) {
            Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(26).fork()).ldelim();
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
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
                    message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
            block_id_flag: isSet(object.block_id_flag) ? blockIDFlagFromJSON(object.block_id_flag) : -1,
            validator_address: isSet(object.validator_address) ? bytesFromBase64(object.validator_address) : new Uint8Array(),
            timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined,
            signature: isSet(object.signature) ? bytesFromBase64(object.signature) : new Uint8Array(),
            extension: isSet(object.extension) ? bytesFromBase64(object.extension) : new Uint8Array(),
            extension_signature: isSet(object.extension_signature) ? bytesFromBase64(object.extension_signature) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.block_id_flag !== undefined && (obj.block_id_flag = blockIDFlagToJSON(message.block_id_flag));
        message.validator_address !== undefined && (obj.validator_address = base64FromBytes(message.validator_address !== undefined ? message.validator_address : new Uint8Array()));
        message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
        message.signature !== undefined && (obj.signature = base64FromBytes(message.signature !== undefined ? message.signature : new Uint8Array()));
        message.extension !== undefined && (obj.extension = base64FromBytes(message.extension !== undefined ? message.extension : new Uint8Array()));
        message.extension_signature !== undefined && (obj.extension_signature = base64FromBytes(message.extension_signature !== undefined ? message.extension_signature : new Uint8Array()));
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
            message.block_id_flag = blockIDFlagFromJSON(object.block_id_flag);
        }
        if (object.validator_address !== undefined && object.validator_address !== null) {
            message.validator_address = bytesFromBase64(object.validator_address);
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = fromTimestamp(Timestamp.fromAmino(object.timestamp));
        }
        if (object.signature !== undefined && object.signature !== null) {
            message.signature = bytesFromBase64(object.signature);
        }
        if (object.extension !== undefined && object.extension !== null) {
            message.extension = bytesFromBase64(object.extension);
        }
        if (object.extension_signature !== undefined && object.extension_signature !== null) {
            message.extension_signature = bytesFromBase64(object.extension_signature);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.block_id_flag = message.block_id_flag;
        obj.validator_address = message.validator_address ? base64FromBytes(message.validator_address) : undefined;
        obj.timestamp = message.timestamp ? Timestamp.toAmino(toTimestamp(message.timestamp)) : undefined;
        obj.signature = message.signature ? base64FromBytes(message.signature) : undefined;
        obj.extension = message.extension ? base64FromBytes(message.extension) : undefined;
        obj.extension_signature = message.extension_signature ? base64FromBytes(message.extension_signature) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ExtendedCommitSig.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ExtendedCommitSig.decode(message.value);
    },
    toProto(message) {
        return ExtendedCommitSig.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.ExtendedCommitSig",
            value: ExtendedCommitSig.encode(message).finish()
        };
    }
};
function createBaseProposal() {
    return {
        type: 0,
        height: BigInt(0),
        round: 0,
        pol_round: 0,
        block_id: BlockID.fromPartial({}),
        timestamp: new Date(),
        signature: new Uint8Array()
    };
}
export const Proposal = {
    typeUrl: "/tendermint.types.Proposal",
    encode(message, writer = BinaryWriter.create()) {
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
            BlockID.encode(message.block_id, writer.uint32(42).fork()).ldelim();
        }
        if (message.timestamp !== undefined) {
            Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(50).fork()).ldelim();
        }
        if (message.signature.length !== 0) {
            writer.uint32(58).bytes(message.signature);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
                    message.block_id = BlockID.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
            type: isSet(object.type) ? signedMsgTypeFromJSON(object.type) : -1,
            height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0),
            round: isSet(object.round) ? Number(object.round) : 0,
            pol_round: isSet(object.pol_round) ? Number(object.pol_round) : 0,
            block_id: isSet(object.block_id) ? BlockID.fromJSON(object.block_id) : undefined,
            timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined,
            signature: isSet(object.signature) ? bytesFromBase64(object.signature) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.type !== undefined && (obj.type = signedMsgTypeToJSON(message.type));
        message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
        message.round !== undefined && (obj.round = Math.round(message.round));
        message.pol_round !== undefined && (obj.pol_round = Math.round(message.pol_round));
        message.block_id !== undefined && (obj.block_id = message.block_id ? BlockID.toJSON(message.block_id) : undefined);
        message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
        message.signature !== undefined && (obj.signature = base64FromBytes(message.signature !== undefined ? message.signature : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseProposal();
        message.type = object.type ?? 0;
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        message.round = object.round ?? 0;
        message.pol_round = object.pol_round ?? 0;
        message.block_id = object.block_id !== undefined && object.block_id !== null ? BlockID.fromPartial(object.block_id) : undefined;
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
            message.block_id = BlockID.fromAmino(object.block_id);
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = fromTimestamp(Timestamp.fromAmino(object.timestamp));
        }
        if (object.signature !== undefined && object.signature !== null) {
            message.signature = bytesFromBase64(object.signature);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.type = message.type;
        obj.height = message.height ? message.height.toString() : undefined;
        obj.round = message.round;
        obj.pol_round = message.pol_round;
        obj.block_id = message.block_id ? BlockID.toAmino(message.block_id) : undefined;
        obj.timestamp = message.timestamp ? Timestamp.toAmino(toTimestamp(message.timestamp)) : undefined;
        obj.signature = message.signature ? base64FromBytes(message.signature) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Proposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Proposal.decode(message.value);
    },
    toProto(message) {
        return Proposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.Proposal",
            value: Proposal.encode(message).finish()
        };
    }
};
function createBaseSignedHeader() {
    return {
        header: undefined,
        commit: undefined
    };
}
export const SignedHeader = {
    typeUrl: "/tendermint.types.SignedHeader",
    encode(message, writer = BinaryWriter.create()) {
        if (message.header !== undefined) {
            Header.encode(message.header, writer.uint32(10).fork()).ldelim();
        }
        if (message.commit !== undefined) {
            Commit.encode(message.commit, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSignedHeader();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.header = Header.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.commit = Commit.decode(reader, reader.uint32());
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
            header: isSet(object.header) ? Header.fromJSON(object.header) : undefined,
            commit: isSet(object.commit) ? Commit.fromJSON(object.commit) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.header !== undefined && (obj.header = message.header ? Header.toJSON(message.header) : undefined);
        message.commit !== undefined && (obj.commit = message.commit ? Commit.toJSON(message.commit) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSignedHeader();
        message.header = object.header !== undefined && object.header !== null ? Header.fromPartial(object.header) : undefined;
        message.commit = object.commit !== undefined && object.commit !== null ? Commit.fromPartial(object.commit) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseSignedHeader();
        if (object.header !== undefined && object.header !== null) {
            message.header = Header.fromAmino(object.header);
        }
        if (object.commit !== undefined && object.commit !== null) {
            message.commit = Commit.fromAmino(object.commit);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.header = message.header ? Header.toAmino(message.header) : undefined;
        obj.commit = message.commit ? Commit.toAmino(message.commit) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return SignedHeader.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return SignedHeader.decode(message.value);
    },
    toProto(message) {
        return SignedHeader.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.SignedHeader",
            value: SignedHeader.encode(message).finish()
        };
    }
};
function createBaseLightBlock() {
    return {
        signed_header: undefined,
        validator_set: undefined
    };
}
export const LightBlock = {
    typeUrl: "/tendermint.types.LightBlock",
    encode(message, writer = BinaryWriter.create()) {
        if (message.signed_header !== undefined) {
            SignedHeader.encode(message.signed_header, writer.uint32(10).fork()).ldelim();
        }
        if (message.validator_set !== undefined) {
            ValidatorSet.encode(message.validator_set, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLightBlock();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.signed_header = SignedHeader.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.validator_set = ValidatorSet.decode(reader, reader.uint32());
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
            signed_header: isSet(object.signed_header) ? SignedHeader.fromJSON(object.signed_header) : undefined,
            validator_set: isSet(object.validator_set) ? ValidatorSet.fromJSON(object.validator_set) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.signed_header !== undefined && (obj.signed_header = message.signed_header ? SignedHeader.toJSON(message.signed_header) : undefined);
        message.validator_set !== undefined && (obj.validator_set = message.validator_set ? ValidatorSet.toJSON(message.validator_set) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseLightBlock();
        message.signed_header = object.signed_header !== undefined && object.signed_header !== null ? SignedHeader.fromPartial(object.signed_header) : undefined;
        message.validator_set = object.validator_set !== undefined && object.validator_set !== null ? ValidatorSet.fromPartial(object.validator_set) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseLightBlock();
        if (object.signed_header !== undefined && object.signed_header !== null) {
            message.signed_header = SignedHeader.fromAmino(object.signed_header);
        }
        if (object.validator_set !== undefined && object.validator_set !== null) {
            message.validator_set = ValidatorSet.fromAmino(object.validator_set);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.signed_header = message.signed_header ? SignedHeader.toAmino(message.signed_header) : undefined;
        obj.validator_set = message.validator_set ? ValidatorSet.toAmino(message.validator_set) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return LightBlock.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return LightBlock.decode(message.value);
    },
    toProto(message) {
        return LightBlock.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.LightBlock",
            value: LightBlock.encode(message).finish()
        };
    }
};
function createBaseBlockMeta() {
    return {
        block_id: BlockID.fromPartial({}),
        block_size: BigInt(0),
        header: Header.fromPartial({}),
        num_txs: BigInt(0)
    };
}
export const BlockMeta = {
    typeUrl: "/tendermint.types.BlockMeta",
    encode(message, writer = BinaryWriter.create()) {
        if (message.block_id !== undefined) {
            BlockID.encode(message.block_id, writer.uint32(10).fork()).ldelim();
        }
        if (message.block_size !== BigInt(0)) {
            writer.uint32(16).int64(message.block_size);
        }
        if (message.header !== undefined) {
            Header.encode(message.header, writer.uint32(26).fork()).ldelim();
        }
        if (message.num_txs !== BigInt(0)) {
            writer.uint32(32).int64(message.num_txs);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBlockMeta();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.block_id = BlockID.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.block_size = reader.int64();
                    break;
                case 3:
                    message.header = Header.decode(reader, reader.uint32());
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
            block_id: isSet(object.block_id) ? BlockID.fromJSON(object.block_id) : undefined,
            block_size: isSet(object.block_size) ? BigInt(object.block_size.toString()) : BigInt(0),
            header: isSet(object.header) ? Header.fromJSON(object.header) : undefined,
            num_txs: isSet(object.num_txs) ? BigInt(object.num_txs.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.block_id !== undefined && (obj.block_id = message.block_id ? BlockID.toJSON(message.block_id) : undefined);
        message.block_size !== undefined && (obj.block_size = (message.block_size || BigInt(0)).toString());
        message.header !== undefined && (obj.header = message.header ? Header.toJSON(message.header) : undefined);
        message.num_txs !== undefined && (obj.num_txs = (message.num_txs || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseBlockMeta();
        message.block_id = object.block_id !== undefined && object.block_id !== null ? BlockID.fromPartial(object.block_id) : undefined;
        message.block_size = object.block_size !== undefined && object.block_size !== null ? BigInt(object.block_size.toString()) : BigInt(0);
        message.header = object.header !== undefined && object.header !== null ? Header.fromPartial(object.header) : undefined;
        message.num_txs = object.num_txs !== undefined && object.num_txs !== null ? BigInt(object.num_txs.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseBlockMeta();
        if (object.block_id !== undefined && object.block_id !== null) {
            message.block_id = BlockID.fromAmino(object.block_id);
        }
        if (object.block_size !== undefined && object.block_size !== null) {
            message.block_size = BigInt(object.block_size);
        }
        if (object.header !== undefined && object.header !== null) {
            message.header = Header.fromAmino(object.header);
        }
        if (object.num_txs !== undefined && object.num_txs !== null) {
            message.num_txs = BigInt(object.num_txs);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.block_id = message.block_id ? BlockID.toAmino(message.block_id) : undefined;
        obj.block_size = message.block_size ? message.block_size.toString() : undefined;
        obj.header = message.header ? Header.toAmino(message.header) : undefined;
        obj.num_txs = message.num_txs ? message.num_txs.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return BlockMeta.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return BlockMeta.decode(message.value);
    },
    toProto(message) {
        return BlockMeta.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.BlockMeta",
            value: BlockMeta.encode(message).finish()
        };
    }
};
function createBaseTxProof() {
    return {
        root_hash: new Uint8Array(),
        data: new Uint8Array(),
        proof: undefined
    };
}
export const TxProof = {
    typeUrl: "/tendermint.types.TxProof",
    encode(message, writer = BinaryWriter.create()) {
        if (message.root_hash.length !== 0) {
            writer.uint32(10).bytes(message.root_hash);
        }
        if (message.data.length !== 0) {
            writer.uint32(18).bytes(message.data);
        }
        if (message.proof !== undefined) {
            Proof.encode(message.proof, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
                    message.proof = Proof.decode(reader, reader.uint32());
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
            root_hash: isSet(object.root_hash) ? bytesFromBase64(object.root_hash) : new Uint8Array(),
            data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
            proof: isSet(object.proof) ? Proof.fromJSON(object.proof) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.root_hash !== undefined && (obj.root_hash = base64FromBytes(message.root_hash !== undefined ? message.root_hash : new Uint8Array()));
        message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
        message.proof !== undefined && (obj.proof = message.proof ? Proof.toJSON(message.proof) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTxProof();
        message.root_hash = object.root_hash ?? new Uint8Array();
        message.data = object.data ?? new Uint8Array();
        message.proof = object.proof !== undefined && object.proof !== null ? Proof.fromPartial(object.proof) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseTxProof();
        if (object.root_hash !== undefined && object.root_hash !== null) {
            message.root_hash = bytesFromBase64(object.root_hash);
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = bytesFromBase64(object.data);
        }
        if (object.proof !== undefined && object.proof !== null) {
            message.proof = Proof.fromAmino(object.proof);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.root_hash = message.root_hash ? base64FromBytes(message.root_hash) : undefined;
        obj.data = message.data ? base64FromBytes(message.data) : undefined;
        obj.proof = message.proof ? Proof.toAmino(message.proof) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return TxProof.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return TxProof.decode(message.value);
    },
    toProto(message) {
        return TxProof.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.TxProof",
            value: TxProof.encode(message).finish()
        };
    }
};
//# sourceMappingURL=types.js.map
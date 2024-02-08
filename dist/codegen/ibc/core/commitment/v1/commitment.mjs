//@ts-nocheck
import { CommitmentProof } from "../../../../cosmos/ics23/v1/proofs";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../../helpers";
import { GlobalDecoderRegistry } from "../../../../registry";
export const protobufPackage = "ibc.core.commitment.v1";
function createBaseMerkleRoot() {
    return {
        hash: new Uint8Array()
    };
}
export const MerkleRoot = {
    typeUrl: "/ibc.core.commitment.v1.MerkleRoot",
    aminoType: "cosmos-sdk/MerkleRoot",
    is(o) {
        return o && (o.$typeUrl === MerkleRoot.typeUrl || o.hash instanceof Uint8Array || typeof o.hash === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === MerkleRoot.typeUrl || o.hash instanceof Uint8Array || typeof o.hash === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === MerkleRoot.typeUrl || o.hash instanceof Uint8Array || typeof o.hash === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.hash.length !== 0) {
            writer.uint32(10).bytes(message.hash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMerkleRoot();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
            hash: isSet(object.hash) ? bytesFromBase64(object.hash) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.hash !== undefined && (obj.hash = base64FromBytes(message.hash !== undefined ? message.hash : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMerkleRoot();
        message.hash = object.hash ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseMerkleRoot();
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = bytesFromBase64(object.hash);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.hash = message.hash ? base64FromBytes(message.hash) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MerkleRoot.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MerkleRoot",
            value: MerkleRoot.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MerkleRoot.decode(message.value);
    },
    toProto(message) {
        return MerkleRoot.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.commitment.v1.MerkleRoot",
            value: MerkleRoot.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MerkleRoot.typeUrl, MerkleRoot);
GlobalDecoderRegistry.registerAminoProtoMapping(MerkleRoot.aminoType, MerkleRoot.typeUrl);
function createBaseMerklePrefix() {
    return {
        key_prefix: new Uint8Array()
    };
}
export const MerklePrefix = {
    typeUrl: "/ibc.core.commitment.v1.MerklePrefix",
    aminoType: "cosmos-sdk/MerklePrefix",
    is(o) {
        return o && (o.$typeUrl === MerklePrefix.typeUrl || o.key_prefix instanceof Uint8Array || typeof o.key_prefix === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === MerklePrefix.typeUrl || o.key_prefix instanceof Uint8Array || typeof o.key_prefix === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === MerklePrefix.typeUrl || o.key_prefix instanceof Uint8Array || typeof o.key_prefix === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.key_prefix.length !== 0) {
            writer.uint32(10).bytes(message.key_prefix);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMerklePrefix();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key_prefix = reader.bytes();
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
            key_prefix: isSet(object.key_prefix) ? bytesFromBase64(object.key_prefix) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.key_prefix !== undefined && (obj.key_prefix = base64FromBytes(message.key_prefix !== undefined ? message.key_prefix : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMerklePrefix();
        message.key_prefix = object.key_prefix ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseMerklePrefix();
        if (object.key_prefix !== undefined && object.key_prefix !== null) {
            message.key_prefix = bytesFromBase64(object.key_prefix);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.key_prefix = message.key_prefix ? base64FromBytes(message.key_prefix) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MerklePrefix.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MerklePrefix",
            value: MerklePrefix.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MerklePrefix.decode(message.value);
    },
    toProto(message) {
        return MerklePrefix.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.commitment.v1.MerklePrefix",
            value: MerklePrefix.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MerklePrefix.typeUrl, MerklePrefix);
GlobalDecoderRegistry.registerAminoProtoMapping(MerklePrefix.aminoType, MerklePrefix.typeUrl);
function createBaseMerklePath() {
    return {
        key_path: []
    };
}
export const MerklePath = {
    typeUrl: "/ibc.core.commitment.v1.MerklePath",
    aminoType: "cosmos-sdk/MerklePath",
    is(o) {
        return o && (o.$typeUrl === MerklePath.typeUrl || Array.isArray(o.key_path) && (!o.key_path.length || typeof o.key_path[0] === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === MerklePath.typeUrl || Array.isArray(o.key_path) && (!o.key_path.length || typeof o.key_path[0] === "string"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === MerklePath.typeUrl || Array.isArray(o.key_path) && (!o.key_path.length || typeof o.key_path[0] === "string"));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.key_path) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMerklePath();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key_path.push(reader.string());
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
            key_path: Array.isArray(object?.key_path) ? object.key_path.map((e) => String(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.key_path) {
            obj.key_path = message.key_path.map(e => e);
        }
        else {
            obj.key_path = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMerklePath();
        message.key_path = object.key_path?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMerklePath();
        message.key_path = object.key_path?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.key_path) {
            obj.key_path = message.key_path.map(e => e);
        }
        else {
            obj.key_path = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return MerklePath.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MerklePath",
            value: MerklePath.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MerklePath.decode(message.value);
    },
    toProto(message) {
        return MerklePath.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.commitment.v1.MerklePath",
            value: MerklePath.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MerklePath.typeUrl, MerklePath);
GlobalDecoderRegistry.registerAminoProtoMapping(MerklePath.aminoType, MerklePath.typeUrl);
function createBaseMerkleProof() {
    return {
        proofs: []
    };
}
export const MerkleProof = {
    typeUrl: "/ibc.core.commitment.v1.MerkleProof",
    aminoType: "cosmos-sdk/MerkleProof",
    is(o) {
        return o && (o.$typeUrl === MerkleProof.typeUrl || Array.isArray(o.proofs) && (!o.proofs.length || CommitmentProof.is(o.proofs[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === MerkleProof.typeUrl || Array.isArray(o.proofs) && (!o.proofs.length || CommitmentProof.isSDK(o.proofs[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === MerkleProof.typeUrl || Array.isArray(o.proofs) && (!o.proofs.length || CommitmentProof.isAmino(o.proofs[0])));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.proofs) {
            CommitmentProof.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMerkleProof();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proofs.push(CommitmentProof.decode(reader, reader.uint32()));
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
            proofs: Array.isArray(object?.proofs) ? object.proofs.map((e) => CommitmentProof.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.proofs) {
            obj.proofs = message.proofs.map(e => e ? CommitmentProof.toJSON(e) : undefined);
        }
        else {
            obj.proofs = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMerkleProof();
        message.proofs = object.proofs?.map(e => CommitmentProof.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMerkleProof();
        message.proofs = object.proofs?.map(e => CommitmentProof.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.proofs) {
            obj.proofs = message.proofs.map(e => e ? CommitmentProof.toAmino(e) : undefined);
        }
        else {
            obj.proofs = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return MerkleProof.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MerkleProof",
            value: MerkleProof.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MerkleProof.decode(message.value);
    },
    toProto(message) {
        return MerkleProof.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.commitment.v1.MerkleProof",
            value: MerkleProof.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MerkleProof.typeUrl, MerkleProof);
GlobalDecoderRegistry.registerAminoProtoMapping(MerkleProof.aminoType, MerkleProof.typeUrl);
//# sourceMappingURL=commitment.js.map
//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export const protobufPackage = "cosmos.crypto.secp256k1";
function createBasePubKey() {
    return {
        key: new Uint8Array()
    };
}
export const PubKey = {
    typeUrl: "/cosmos.crypto.secp256k1.PubKey",
    aminoType: "tendermint/PubKeySecp256k1",
    is(o) {
        return o && (o.$typeUrl === PubKey.typeUrl || o.key instanceof Uint8Array || typeof o.key === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === PubKey.typeUrl || o.key instanceof Uint8Array || typeof o.key === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === PubKey.typeUrl || o.key instanceof Uint8Array || typeof o.key === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.key.length !== 0) {
            writer.uint32(10).bytes(message.key);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePubKey();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.bytes();
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
            key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBasePubKey();
        message.key = object.key ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBasePubKey();
        if (object.key !== undefined && object.key !== null) {
            message.key = bytesFromBase64(object.key);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.key = message.key ? base64FromBytes(message.key) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return PubKey.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "tendermint/PubKeySecp256k1",
            value: PubKey.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return PubKey.decode(message.value);
    },
    toProto(message) {
        return PubKey.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.crypto.secp256k1.PubKey",
            value: PubKey.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(PubKey.typeUrl, PubKey);
GlobalDecoderRegistry.registerAminoProtoMapping(PubKey.aminoType, PubKey.typeUrl);
function createBasePrivKey() {
    return {
        key: new Uint8Array()
    };
}
export const PrivKey = {
    typeUrl: "/cosmos.crypto.secp256k1.PrivKey",
    aminoType: "tendermint/PrivKeySecp256k1",
    is(o) {
        return o && (o.$typeUrl === PrivKey.typeUrl || o.key instanceof Uint8Array || typeof o.key === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === PrivKey.typeUrl || o.key instanceof Uint8Array || typeof o.key === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === PrivKey.typeUrl || o.key instanceof Uint8Array || typeof o.key === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.key.length !== 0) {
            writer.uint32(10).bytes(message.key);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePrivKey();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.bytes();
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
            key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBasePrivKey();
        message.key = object.key ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBasePrivKey();
        if (object.key !== undefined && object.key !== null) {
            message.key = bytesFromBase64(object.key);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.key = message.key ? base64FromBytes(message.key) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return PrivKey.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "tendermint/PrivKeySecp256k1",
            value: PrivKey.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return PrivKey.decode(message.value);
    },
    toProto(message) {
        return PrivKey.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.crypto.secp256k1.PrivKey",
            value: PrivKey.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(PrivKey.typeUrl, PrivKey);
GlobalDecoderRegistry.registerAminoProtoMapping(PrivKey.aminoType, PrivKey.typeUrl);
//# sourceMappingURL=keys.js.map
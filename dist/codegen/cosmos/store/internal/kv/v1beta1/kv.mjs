//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../../../helpers";
export const protobufPackage = "cosmos.store.internal.kv.v1beta1";
function createBasePairs() {
    return {
        pairs: []
    };
}
export const Pairs = {
    typeUrl: "/cosmos.store.internal.kv.v1beta1.Pairs",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.pairs) {
            Pair.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePairs();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pairs.push(Pair.decode(reader, reader.uint32()));
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
            pairs: Array.isArray(object?.pairs) ? object.pairs.map((e) => Pair.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.pairs) {
            obj.pairs = message.pairs.map(e => e ? Pair.toJSON(e) : undefined);
        }
        else {
            obj.pairs = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBasePairs();
        message.pairs = object.pairs?.map(e => Pair.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBasePairs();
        message.pairs = object.pairs?.map(e => Pair.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.pairs) {
            obj.pairs = message.pairs.map(e => e ? Pair.toAmino(e) : undefined);
        }
        else {
            obj.pairs = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return Pairs.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Pairs",
            value: Pairs.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Pairs.decode(message.value);
    },
    toProto(message) {
        return Pairs.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.store.internal.kv.v1beta1.Pairs",
            value: Pairs.encode(message).finish()
        };
    }
};
function createBasePair() {
    return {
        key: new Uint8Array(),
        value: new Uint8Array()
    };
}
export const Pair = {
    typeUrl: "/cosmos.store.internal.kv.v1beta1.Pair",
    encode(message, writer = BinaryWriter.create()) {
        if (message.key.length !== 0) {
            writer.uint32(10).bytes(message.key);
        }
        if (message.value.length !== 0) {
            writer.uint32(18).bytes(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePair();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.bytes();
                    break;
                case 2:
                    message.value = reader.bytes();
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
            key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(),
            value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
        message.value !== undefined && (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBasePair();
        message.key = object.key ?? new Uint8Array();
        message.value = object.value ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBasePair();
        if (object.key !== undefined && object.key !== null) {
            message.key = bytesFromBase64(object.key);
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = bytesFromBase64(object.value);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.key = message.key ? base64FromBytes(message.key) : undefined;
        obj.value = message.value ? base64FromBytes(message.value) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Pair.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Pair",
            value: Pair.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Pair.decode(message.value);
    },
    toProto(message) {
        return Pair.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.store.internal.kv.v1beta1.Pair",
            value: Pair.encode(message).finish()
        };
    }
};
//# sourceMappingURL=kv.js.map
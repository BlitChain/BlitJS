//@ts-nocheck
import { Any } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export const protobufPackage = "cosmos.crypto.multisig";
function createBaseLegacyAminoPubKey() {
    return {
        threshold: 0,
        public_keys: []
    };
}
export const LegacyAminoPubKey = {
    typeUrl: "/cosmos.crypto.multisig.LegacyAminoPubKey",
    aminoType: "tendermint/PubKeyMultisigThreshold",
    is(o) {
        return o && (o.$typeUrl === LegacyAminoPubKey.typeUrl || typeof o.threshold === "number" && Array.isArray(o.public_keys) && (!o.public_keys.length || Any.is(o.public_keys[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === LegacyAminoPubKey.typeUrl || typeof o.threshold === "number" && Array.isArray(o.public_keys) && (!o.public_keys.length || Any.isSDK(o.public_keys[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === LegacyAminoPubKey.typeUrl || typeof o.threshold === "number" && Array.isArray(o.public_keys) && (!o.public_keys.length || Any.isAmino(o.public_keys[0])));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.threshold !== 0) {
            writer.uint32(8).uint32(message.threshold);
        }
        for (const v of message.public_keys) {
            Any.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLegacyAminoPubKey();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.threshold = reader.uint32();
                    break;
                case 2:
                    message.public_keys.push(Any.decode(reader, reader.uint32()));
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
            threshold: isSet(object.threshold) ? Number(object.threshold) : 0,
            public_keys: Array.isArray(object?.public_keys) ? object.public_keys.map((e) => Any.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.threshold !== undefined && (obj.threshold = Math.round(message.threshold));
        if (message.public_keys) {
            obj.public_keys = message.public_keys.map(e => e ? Any.toJSON(e) : undefined);
        }
        else {
            obj.public_keys = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseLegacyAminoPubKey();
        message.threshold = object.threshold ?? 0;
        message.public_keys = object.public_keys?.map(e => Any.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseLegacyAminoPubKey();
        if (object.threshold !== undefined && object.threshold !== null) {
            message.threshold = object.threshold;
        }
        message.public_keys = object.public_keys?.map(e => Any.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.threshold = message.threshold;
        if (message.public_keys) {
            obj.public_keys = message.public_keys.map(e => e ? Any.toAmino(e) : undefined);
        }
        else {
            obj.public_keys = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return LegacyAminoPubKey.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "tendermint/PubKeyMultisigThreshold",
            value: LegacyAminoPubKey.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return LegacyAminoPubKey.decode(message.value);
    },
    toProto(message) {
        return LegacyAminoPubKey.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.crypto.multisig.LegacyAminoPubKey",
            value: LegacyAminoPubKey.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(LegacyAminoPubKey.typeUrl, LegacyAminoPubKey);
GlobalDecoderRegistry.registerAminoProtoMapping(LegacyAminoPubKey.aminoType, LegacyAminoPubKey.typeUrl);
//# sourceMappingURL=keys.js.map
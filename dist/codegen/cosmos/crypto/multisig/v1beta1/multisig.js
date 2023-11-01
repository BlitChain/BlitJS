"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompactBitArray = exports.MultiSignature = exports.protobufPackage = void 0;
//@ts-nocheck
const binary_1 = require("../../../../binary");
const helpers_1 = require("../../../../helpers");
exports.protobufPackage = "cosmos.crypto.multisig.v1beta1";
function createBaseMultiSignature() {
    return {
        signatures: []
    };
}
exports.MultiSignature = {
    typeUrl: "/cosmos.crypto.multisig.v1beta1.MultiSignature",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.signatures) {
            writer.uint32(10).bytes(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMultiSignature();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.signatures.push(reader.bytes());
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
            signatures: Array.isArray(object?.signatures) ? object.signatures.map((e) => (0, helpers_1.bytesFromBase64)(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.signatures) {
            obj.signatures = message.signatures.map(e => (0, helpers_1.base64FromBytes)(e !== undefined ? e : new Uint8Array()));
        }
        else {
            obj.signatures = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMultiSignature();
        message.signatures = object.signatures?.map(e => e) || [];
        return message;
    },
    fromSDK(object) {
        return {
            signatures: Array.isArray(object?.signatures) ? object.signatures.map((e) => e) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.signatures) {
            obj.signatures = message.signatures.map(e => e);
        }
        else {
            obj.signatures = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            signatures: Array.isArray(object?.signatures) ? object.signatures.map((e) => e) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.signatures) {
            obj.signatures = message.signatures.map(e => e);
        }
        else {
            obj.signatures = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MultiSignature.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MultiSignature",
            value: exports.MultiSignature.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MultiSignature.decode(message.value);
    },
    toProto(message) {
        return exports.MultiSignature.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.crypto.multisig.v1beta1.MultiSignature",
            value: exports.MultiSignature.encode(message).finish()
        };
    }
};
function createBaseCompactBitArray() {
    return {
        extra_bits_stored: 0,
        elems: new Uint8Array()
    };
}
exports.CompactBitArray = {
    typeUrl: "/cosmos.crypto.multisig.v1beta1.CompactBitArray",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.extra_bits_stored !== 0) {
            writer.uint32(8).uint32(message.extra_bits_stored);
        }
        if (message.elems.length !== 0) {
            writer.uint32(18).bytes(message.elems);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCompactBitArray();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.extra_bits_stored = reader.uint32();
                    break;
                case 2:
                    message.elems = reader.bytes();
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
            extra_bits_stored: (0, helpers_1.isSet)(object.extra_bits_stored) ? Number(object.extra_bits_stored) : 0,
            elems: (0, helpers_1.isSet)(object.elems) ? (0, helpers_1.bytesFromBase64)(object.elems) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.extra_bits_stored !== undefined && (obj.extra_bits_stored = Math.round(message.extra_bits_stored));
        message.elems !== undefined && (obj.elems = (0, helpers_1.base64FromBytes)(message.elems !== undefined ? message.elems : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseCompactBitArray();
        message.extra_bits_stored = object.extra_bits_stored ?? 0;
        message.elems = object.elems ?? new Uint8Array();
        return message;
    },
    fromSDK(object) {
        return {
            extra_bits_stored: object?.extra_bits_stored,
            elems: object?.elems
        };
    },
    toSDK(message) {
        const obj = {};
        obj.extra_bits_stored = message.extra_bits_stored;
        obj.elems = message.elems;
        return obj;
    },
    fromAmino(object) {
        return {
            extra_bits_stored: object.extra_bits_stored,
            elems: object.elems
        };
    },
    toAmino(message) {
        const obj = {};
        obj.extra_bits_stored = message.extra_bits_stored;
        obj.elems = message.elems;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.CompactBitArray.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/CompactBitArray",
            value: exports.CompactBitArray.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.CompactBitArray.decode(message.value);
    },
    toProto(message) {
        return exports.CompactBitArray.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.crypto.multisig.v1beta1.CompactBitArray",
            value: exports.CompactBitArray.encode(message).finish()
        };
    }
};
//# sourceMappingURL=multisig.js.map
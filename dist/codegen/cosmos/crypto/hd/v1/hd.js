"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BIP44Params = exports.protobufPackage = void 0;
//@ts-nocheck
const binary_1 = require("../../../../binary");
const helpers_1 = require("../../../../helpers");
const registry_1 = require("../../../../registry");
exports.protobufPackage = "cosmos.crypto.hd.v1";
function createBaseBIP44Params() {
    return {
        purpose: 0,
        coin_type: 0,
        account: 0,
        change: false,
        address_index: 0
    };
}
exports.BIP44Params = {
    typeUrl: "/cosmos.crypto.hd.v1.BIP44Params",
    aminoType: "crypto/keys/hd/BIP44Params",
    is(o) {
        return o && (o.$typeUrl === exports.BIP44Params.typeUrl || typeof o.purpose === "number" && typeof o.coin_type === "number" && typeof o.account === "number" && typeof o.change === "boolean" && typeof o.address_index === "number");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.BIP44Params.typeUrl || typeof o.purpose === "number" && typeof o.coin_type === "number" && typeof o.account === "number" && typeof o.change === "boolean" && typeof o.address_index === "number");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.BIP44Params.typeUrl || typeof o.purpose === "number" && typeof o.coin_type === "number" && typeof o.account === "number" && typeof o.change === "boolean" && typeof o.address_index === "number");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.purpose !== 0) {
            writer.uint32(8).uint32(message.purpose);
        }
        if (message.coin_type !== 0) {
            writer.uint32(16).uint32(message.coin_type);
        }
        if (message.account !== 0) {
            writer.uint32(24).uint32(message.account);
        }
        if (message.change === true) {
            writer.uint32(32).bool(message.change);
        }
        if (message.address_index !== 0) {
            writer.uint32(40).uint32(message.address_index);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBIP44Params();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.purpose = reader.uint32();
                    break;
                case 2:
                    message.coin_type = reader.uint32();
                    break;
                case 3:
                    message.account = reader.uint32();
                    break;
                case 4:
                    message.change = reader.bool();
                    break;
                case 5:
                    message.address_index = reader.uint32();
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
            purpose: (0, helpers_1.isSet)(object.purpose) ? Number(object.purpose) : 0,
            coin_type: (0, helpers_1.isSet)(object.coin_type) ? Number(object.coin_type) : 0,
            account: (0, helpers_1.isSet)(object.account) ? Number(object.account) : 0,
            change: (0, helpers_1.isSet)(object.change) ? Boolean(object.change) : false,
            address_index: (0, helpers_1.isSet)(object.address_index) ? Number(object.address_index) : 0
        };
    },
    toJSON(message) {
        const obj = {};
        message.purpose !== undefined && (obj.purpose = Math.round(message.purpose));
        message.coin_type !== undefined && (obj.coin_type = Math.round(message.coin_type));
        message.account !== undefined && (obj.account = Math.round(message.account));
        message.change !== undefined && (obj.change = message.change);
        message.address_index !== undefined && (obj.address_index = Math.round(message.address_index));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseBIP44Params();
        message.purpose = object.purpose ?? 0;
        message.coin_type = object.coin_type ?? 0;
        message.account = object.account ?? 0;
        message.change = object.change ?? false;
        message.address_index = object.address_index ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseBIP44Params();
        if (object.purpose !== undefined && object.purpose !== null) {
            message.purpose = object.purpose;
        }
        if (object.coin_type !== undefined && object.coin_type !== null) {
            message.coin_type = object.coin_type;
        }
        if (object.account !== undefined && object.account !== null) {
            message.account = object.account;
        }
        if (object.change !== undefined && object.change !== null) {
            message.change = object.change;
        }
        if (object.address_index !== undefined && object.address_index !== null) {
            message.address_index = object.address_index;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.purpose = message.purpose;
        obj.coin_type = message.coin_type;
        obj.account = message.account;
        obj.change = message.change;
        obj.address_index = message.address_index;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.BIP44Params.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "crypto/keys/hd/BIP44Params",
            value: exports.BIP44Params.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.BIP44Params.decode(message.value);
    },
    toProto(message) {
        return exports.BIP44Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.crypto.hd.v1.BIP44Params",
            value: exports.BIP44Params.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.BIP44Params.typeUrl, exports.BIP44Params);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.BIP44Params.aminoType, exports.BIP44Params.typeUrl);
//# sourceMappingURL=hd.js.map
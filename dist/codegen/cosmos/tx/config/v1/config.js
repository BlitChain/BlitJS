"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Config = exports.protobufPackage = void 0;
//@ts-nocheck
const binary_1 = require("../../../../binary");
const helpers_1 = require("../../../../helpers");
const registry_1 = require("../../../../registry");
exports.protobufPackage = "cosmos.tx.config.v1";
function createBaseConfig() {
    return {
        skip_ante_handler: false,
        skip_post_handler: false
    };
}
exports.Config = {
    typeUrl: "/cosmos.tx.config.v1.Config",
    aminoType: "cosmos-sdk/Config",
    is(o) {
        return o && (o.$typeUrl === exports.Config.typeUrl || typeof o.skip_ante_handler === "boolean" && typeof o.skip_post_handler === "boolean");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.Config.typeUrl || typeof o.skip_ante_handler === "boolean" && typeof o.skip_post_handler === "boolean");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Config.typeUrl || typeof o.skip_ante_handler === "boolean" && typeof o.skip_post_handler === "boolean");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.skip_ante_handler === true) {
            writer.uint32(8).bool(message.skip_ante_handler);
        }
        if (message.skip_post_handler === true) {
            writer.uint32(16).bool(message.skip_post_handler);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConfig();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.skip_ante_handler = reader.bool();
                    break;
                case 2:
                    message.skip_post_handler = reader.bool();
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
            skip_ante_handler: (0, helpers_1.isSet)(object.skip_ante_handler) ? Boolean(object.skip_ante_handler) : false,
            skip_post_handler: (0, helpers_1.isSet)(object.skip_post_handler) ? Boolean(object.skip_post_handler) : false
        };
    },
    toJSON(message) {
        const obj = {};
        message.skip_ante_handler !== undefined && (obj.skip_ante_handler = message.skip_ante_handler);
        message.skip_post_handler !== undefined && (obj.skip_post_handler = message.skip_post_handler);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseConfig();
        message.skip_ante_handler = object.skip_ante_handler ?? false;
        message.skip_post_handler = object.skip_post_handler ?? false;
        return message;
    },
    fromAmino(object) {
        const message = createBaseConfig();
        if (object.skip_ante_handler !== undefined && object.skip_ante_handler !== null) {
            message.skip_ante_handler = object.skip_ante_handler;
        }
        if (object.skip_post_handler !== undefined && object.skip_post_handler !== null) {
            message.skip_post_handler = object.skip_post_handler;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.skip_ante_handler = message.skip_ante_handler;
        obj.skip_post_handler = message.skip_post_handler;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Config.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Config",
            value: exports.Config.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Config.decode(message.value);
    },
    toProto(message) {
        return exports.Config.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.config.v1.Config",
            value: exports.Config.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Config.typeUrl, exports.Config);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.Config.aminoType, exports.Config.typeUrl);
//# sourceMappingURL=config.js.map
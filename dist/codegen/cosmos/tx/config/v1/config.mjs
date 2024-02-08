//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet } from "../../../../helpers";
import { GlobalDecoderRegistry } from "../../../../registry";
export const protobufPackage = "cosmos.tx.config.v1";
function createBaseConfig() {
    return {
        skip_ante_handler: false,
        skip_post_handler: false
    };
}
export const Config = {
    typeUrl: "/cosmos.tx.config.v1.Config",
    aminoType: "cosmos-sdk/Config",
    is(o) {
        return o && (o.$typeUrl === Config.typeUrl || typeof o.skip_ante_handler === "boolean" && typeof o.skip_post_handler === "boolean");
    },
    isSDK(o) {
        return o && (o.$typeUrl === Config.typeUrl || typeof o.skip_ante_handler === "boolean" && typeof o.skip_post_handler === "boolean");
    },
    isAmino(o) {
        return o && (o.$typeUrl === Config.typeUrl || typeof o.skip_ante_handler === "boolean" && typeof o.skip_post_handler === "boolean");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.skip_ante_handler === true) {
            writer.uint32(8).bool(message.skip_ante_handler);
        }
        if (message.skip_post_handler === true) {
            writer.uint32(16).bool(message.skip_post_handler);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            skip_ante_handler: isSet(object.skip_ante_handler) ? Boolean(object.skip_ante_handler) : false,
            skip_post_handler: isSet(object.skip_post_handler) ? Boolean(object.skip_post_handler) : false
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
        return Config.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Config",
            value: Config.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Config.decode(message.value);
    },
    toProto(message) {
        return Config.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.config.v1.Config",
            value: Config.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(Config.typeUrl, Config);
GlobalDecoderRegistry.registerAminoProtoMapping(Config.aminoType, Config.typeUrl);
//# sourceMappingURL=config.js.map
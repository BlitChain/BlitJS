"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Script = exports.protobufPackage = void 0;
//@ts-nocheck
const binary_1 = require("../../binary");
const helpers_1 = require("../../helpers");
exports.protobufPackage = "blit.script";
function createBaseScript() {
    return {
        address: "",
        code: "",
        version: BigInt(0)
    };
}
exports.Script = {
    typeUrl: "/blit.script.Script",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.code !== "") {
            writer.uint32(18).string(message.code);
        }
        if (message.version !== BigInt(0)) {
            writer.uint32(24).int64(message.version);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseScript();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.code = reader.string();
                    break;
                case 3:
                    message.version = reader.int64();
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
            address: (0, helpers_1.isSet)(object.address) ? String(object.address) : "",
            code: (0, helpers_1.isSet)(object.code) ? String(object.code) : "",
            version: (0, helpers_1.isSet)(object.version) ? BigInt(object.version.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.code !== undefined && (obj.code = message.code);
        message.version !== undefined && (obj.version = (message.version || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseScript();
        message.address = object.address ?? "";
        message.code = object.code ?? "";
        message.version = object.version !== undefined && object.version !== null ? BigInt(object.version.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseScript();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.code !== undefined && object.code !== null) {
            message.code = object.code;
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = BigInt(object.version);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        obj.code = message.code;
        obj.version = message.version ? message.version.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Script.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Script.decode(message.value);
    },
    toProto(message) {
        return exports.Script.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.script.Script",
            value: exports.Script.encode(message).finish()
        };
    }
};
//# sourceMappingURL=script.js.map
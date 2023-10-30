"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = void 0;
//@ts-nocheck
const binary_1 = require("../../binary");
const helpers_1 = require("../../helpers");
function createBaseParams() {
    return {
        gasPerChar: ""
    };
}
exports.Params = {
    typeUrl: "/blit.storage.Params",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.gasPerChar !== "") {
            writer.uint32(10).string(message.gasPerChar);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.gasPerChar = reader.string();
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
            gasPerChar: (0, helpers_1.isSet)(object.gasPerChar) ? String(object.gasPerChar) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.gasPerChar !== undefined && (obj.gasPerChar = message.gasPerChar);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.gasPerChar = object.gasPerChar ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            gasPerChar: object?.gasPerChar
        };
    },
    toSDK(message) {
        const obj = {};
        obj.gasPerChar = message.gasPerChar;
        return obj;
    },
    fromAmino(object) {
        return {
            gasPerChar: object.gasPerChar
        };
    },
    toAmino(message) {
        const obj = {};
        obj.gasPerChar = message.gasPerChar;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Params.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "blit/x/storage/Params",
            value: exports.Params.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Params.decode(message.value);
    },
    toProto(message) {
        return exports.Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.storage.Params",
            value: exports.Params.encode(message).finish()
        };
    }
};
//# sourceMappingURL=params.js.map
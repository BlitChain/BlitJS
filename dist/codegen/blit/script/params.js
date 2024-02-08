"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = exports.protobufPackage = void 0;
//@ts-nocheck
const binary_1 = require("../../binary");
exports.protobufPackage = "blit.script";
function createBaseParams() {
    return {};
}
exports.Params = {
    typeUrl: "/blit.script.Params",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseParams();
        return message;
    },
    fromAmino(_) {
        const message = createBaseParams();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Params.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "blit/x/script/Params",
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
            typeUrl: "/blit.script.Params",
            value: exports.Params.encode(message).finish()
        };
    }
};
//# sourceMappingURL=params.js.map
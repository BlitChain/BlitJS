"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = exports.protobufPackage = void 0;
//@ts-nocheck
const binary_1 = require("../../../../../binary");
const helpers_1 = require("../../../../../helpers");
exports.protobufPackage = "ibc.applications.interchain_accounts.controller.v1";
function createBaseParams() {
    return {
        controller_enabled: false
    };
}
exports.Params = {
    typeUrl: "/ibc.applications.interchain_accounts.controller.v1.Params",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.controller_enabled === true) {
            writer.uint32(8).bool(message.controller_enabled);
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
                    message.controller_enabled = reader.bool();
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
            controller_enabled: (0, helpers_1.isSet)(object.controller_enabled) ? Boolean(object.controller_enabled) : false
        };
    },
    toJSON(message) {
        const obj = {};
        message.controller_enabled !== undefined && (obj.controller_enabled = message.controller_enabled);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.controller_enabled = object.controller_enabled ?? false;
        return message;
    },
    fromAmino(object) {
        return {
            controller_enabled: object.controller_enabled
        };
    },
    toAmino(message) {
        const obj = {};
        obj.controller_enabled = message.controller_enabled;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Params.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Params",
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
            typeUrl: "/ibc.applications.interchain_accounts.controller.v1.Params",
            value: exports.Params.encode(message).finish()
        };
    }
};
//# sourceMappingURL=controller.js.map
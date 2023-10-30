"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = void 0;
//@ts-nocheck
const binary_1 = require("../../binary");
const math_1 = require("@cosmjs/math");
const helpers_1 = require("../../helpers");
function createBaseParams() {
    return {
        minimum_risk_factor: ""
    };
}
exports.Params = {
    typeUrl: "/osmosis.superfluid.Params",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.minimum_risk_factor !== "") {
            writer.uint32(10).string(math_1.Decimal.fromUserInput(message.minimum_risk_factor, 18).atomics);
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
                    message.minimum_risk_factor = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
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
            minimum_risk_factor: (0, helpers_1.isSet)(object.minimum_risk_factor) ? String(object.minimum_risk_factor) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.minimum_risk_factor !== undefined && (obj.minimum_risk_factor = message.minimum_risk_factor);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.minimum_risk_factor = object.minimum_risk_factor ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            minimum_risk_factor: object?.minimum_risk_factor
        };
    },
    toSDK(message) {
        const obj = {};
        obj.minimum_risk_factor = message.minimum_risk_factor;
        return obj;
    },
    fromAmino(object) {
        return {
            minimum_risk_factor: object.minimum_risk_factor
        };
    },
    toAmino(message) {
        const obj = {};
        obj.minimum_risk_factor = message.minimum_risk_factor;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Params.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/params",
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
            typeUrl: "/osmosis.superfluid.Params",
            value: exports.Params.encode(message).finish()
        };
    }
};
//# sourceMappingURL=params.js.map
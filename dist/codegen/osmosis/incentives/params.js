"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = void 0;
//@ts-nocheck
const binary_1 = require("../../binary");
const helpers_1 = require("../../helpers");
function createBaseParams() {
    return {
        distr_epoch_identifier: ""
    };
}
exports.Params = {
    typeUrl: "/osmosis.incentives.Params",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.distr_epoch_identifier !== "") {
            writer.uint32(10).string(message.distr_epoch_identifier);
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
                    message.distr_epoch_identifier = reader.string();
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
            distr_epoch_identifier: (0, helpers_1.isSet)(object.distr_epoch_identifier) ? String(object.distr_epoch_identifier) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.distr_epoch_identifier !== undefined && (obj.distr_epoch_identifier = message.distr_epoch_identifier);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.distr_epoch_identifier = object.distr_epoch_identifier ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            distr_epoch_identifier: object?.distr_epoch_identifier
        };
    },
    toSDK(message) {
        const obj = {};
        obj.distr_epoch_identifier = message.distr_epoch_identifier;
        return obj;
    },
    fromAmino(object) {
        return {
            distr_epoch_identifier: object.distr_epoch_identifier
        };
    },
    toAmino(message) {
        const obj = {};
        obj.distr_epoch_identifier = message.distr_epoch_identifier;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Params.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/incentives/params",
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
            typeUrl: "/osmosis.incentives.Params",
            value: exports.Params.encode(message).finish()
        };
    }
};
//# sourceMappingURL=params.js.map
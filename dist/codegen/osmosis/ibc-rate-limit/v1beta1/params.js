"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = void 0;
//@ts-nocheck
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
function createBaseParams() {
    return {
        contract_address: ""
    };
}
exports.Params = {
    typeUrl: "/osmosis.ibcratelimit.v1beta1.Params",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.contract_address !== "") {
            writer.uint32(10).string(message.contract_address);
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
                    message.contract_address = reader.string();
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
            contract_address: (0, helpers_1.isSet)(object.contract_address) ? String(object.contract_address) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.contract_address !== undefined && (obj.contract_address = message.contract_address);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.contract_address = object.contract_address ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            contract_address: object?.contract_address
        };
    },
    toSDK(message) {
        const obj = {};
        obj.contract_address = message.contract_address;
        return obj;
    },
    fromAmino(object) {
        return {
            contract_address: object.contract_address
        };
    },
    toAmino(message) {
        const obj = {};
        obj.contract_address = message.contract_address;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Params.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/ibcratelimit/params",
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
            typeUrl: "/osmosis.ibcratelimit.v1beta1.Params",
            value: exports.Params.encode(message).finish()
        };
    }
};
//# sourceMappingURL=params.js.map
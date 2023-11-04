"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigResponse = exports.ConfigRequest = exports.protobufPackage = void 0;
//@ts-nocheck
const binary_1 = require("../../../../binary");
const helpers_1 = require("../../../../helpers");
exports.protobufPackage = "cosmos.base.node.v1beta1";
function createBaseConfigRequest() {
    return {};
}
exports.ConfigRequest = {
    typeUrl: "/cosmos.base.node.v1beta1.ConfigRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConfigRequest();
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
        const message = createBaseConfigRequest();
        return message;
    },
    fromSDK(_) {
        return {};
    },
    toSDK(_) {
        const obj = {};
        return obj;
    },
    fromAmino(_) {
        return {};
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ConfigRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ConfigRequest",
            value: exports.ConfigRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ConfigRequest.decode(message.value);
    },
    toProto(message) {
        return exports.ConfigRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.node.v1beta1.ConfigRequest",
            value: exports.ConfigRequest.encode(message).finish()
        };
    }
};
function createBaseConfigResponse() {
    return {
        minimum_gas_price: ""
    };
}
exports.ConfigResponse = {
    typeUrl: "/cosmos.base.node.v1beta1.ConfigResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.minimum_gas_price !== "") {
            writer.uint32(10).string(message.minimum_gas_price);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConfigResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.minimum_gas_price = reader.string();
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
            minimum_gas_price: (0, helpers_1.isSet)(object.minimum_gas_price) ? String(object.minimum_gas_price) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.minimum_gas_price !== undefined && (obj.minimum_gas_price = message.minimum_gas_price);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseConfigResponse();
        message.minimum_gas_price = object.minimum_gas_price ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            minimum_gas_price: object?.minimum_gas_price
        };
    },
    toSDK(message) {
        const obj = {};
        obj.minimum_gas_price = message.minimum_gas_price;
        return obj;
    },
    fromAmino(object) {
        return {
            minimum_gas_price: object.minimum_gas_price
        };
    },
    toAmino(message) {
        const obj = {};
        obj.minimum_gas_price = message.minimum_gas_price;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ConfigResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ConfigResponse",
            value: exports.ConfigResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ConfigResponse.decode(message.value);
    },
    toProto(message) {
        return exports.ConfigResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.node.v1beta1.ConfigResponse",
            value: exports.ConfigResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=query.js.map
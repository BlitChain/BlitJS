"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = exports.DenomTrace = exports.protobufPackage = void 0;
//@ts-nocheck
const binary_1 = require("../../../../binary");
const helpers_1 = require("../../../../helpers");
exports.protobufPackage = "ibc.applications.transfer.v1";
function createBaseDenomTrace() {
    return {
        path: "",
        base_denom: ""
    };
}
exports.DenomTrace = {
    typeUrl: "/ibc.applications.transfer.v1.DenomTrace",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.path !== "") {
            writer.uint32(10).string(message.path);
        }
        if (message.base_denom !== "") {
            writer.uint32(18).string(message.base_denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDenomTrace();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.path = reader.string();
                    break;
                case 2:
                    message.base_denom = reader.string();
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
            path: (0, helpers_1.isSet)(object.path) ? String(object.path) : "",
            base_denom: (0, helpers_1.isSet)(object.base_denom) ? String(object.base_denom) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.path !== undefined && (obj.path = message.path);
        message.base_denom !== undefined && (obj.base_denom = message.base_denom);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDenomTrace();
        message.path = object.path ?? "";
        message.base_denom = object.base_denom ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            path: object?.path,
            base_denom: object?.base_denom
        };
    },
    toSDK(message) {
        const obj = {};
        obj.path = message.path;
        obj.base_denom = message.base_denom;
        return obj;
    },
    fromAmino(object) {
        return {
            path: object.path,
            base_denom: object.base_denom
        };
    },
    toAmino(message) {
        const obj = {};
        obj.path = message.path;
        obj.base_denom = message.base_denom;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.DenomTrace.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/DenomTrace",
            value: exports.DenomTrace.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.DenomTrace.decode(message.value);
    },
    toProto(message) {
        return exports.DenomTrace.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.transfer.v1.DenomTrace",
            value: exports.DenomTrace.encode(message).finish()
        };
    }
};
function createBaseParams() {
    return {
        send_enabled: false,
        receive_enabled: false
    };
}
exports.Params = {
    typeUrl: "/ibc.applications.transfer.v1.Params",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.send_enabled === true) {
            writer.uint32(8).bool(message.send_enabled);
        }
        if (message.receive_enabled === true) {
            writer.uint32(16).bool(message.receive_enabled);
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
                    message.send_enabled = reader.bool();
                    break;
                case 2:
                    message.receive_enabled = reader.bool();
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
            send_enabled: (0, helpers_1.isSet)(object.send_enabled) ? Boolean(object.send_enabled) : false,
            receive_enabled: (0, helpers_1.isSet)(object.receive_enabled) ? Boolean(object.receive_enabled) : false
        };
    },
    toJSON(message) {
        const obj = {};
        message.send_enabled !== undefined && (obj.send_enabled = message.send_enabled);
        message.receive_enabled !== undefined && (obj.receive_enabled = message.receive_enabled);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.send_enabled = object.send_enabled ?? false;
        message.receive_enabled = object.receive_enabled ?? false;
        return message;
    },
    fromSDK(object) {
        return {
            send_enabled: object?.send_enabled,
            receive_enabled: object?.receive_enabled
        };
    },
    toSDK(message) {
        const obj = {};
        obj.send_enabled = message.send_enabled;
        obj.receive_enabled = message.receive_enabled;
        return obj;
    },
    fromAmino(object) {
        return {
            send_enabled: object.send_enabled,
            receive_enabled: object.receive_enabled
        };
    },
    toAmino(message) {
        const obj = {};
        obj.send_enabled = message.send_enabled;
        obj.receive_enabled = message.receive_enabled;
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
            typeUrl: "/ibc.applications.transfer.v1.Params",
            value: exports.Params.encode(message).finish()
        };
    }
};
//# sourceMappingURL=transfer.js.map
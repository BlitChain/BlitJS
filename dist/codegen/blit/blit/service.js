"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EndpointsResponse = exports.EndpointsRequest = exports.protobufPackage = void 0;
//@ts-nocheck
const binary_1 = require("../../binary");
const registry_1 = require("../../registry");
const helpers_1 = require("../../helpers");
exports.protobufPackage = "blit.blit";
function createBaseEndpointsRequest() {
    return {};
}
exports.EndpointsRequest = {
    typeUrl: "/blit.blit.EndpointsRequest",
    is(o) {
        return o && o.$typeUrl === exports.EndpointsRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.EndpointsRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.EndpointsRequest.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEndpointsRequest();
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
        const message = createBaseEndpointsRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseEndpointsRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EndpointsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.EndpointsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.EndpointsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.blit.EndpointsRequest",
            value: exports.EndpointsRequest.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.EndpointsRequest.typeUrl, exports.EndpointsRequest);
function createBaseEndpointsResponse() {
    return {
        api_url: "",
        rpc_url: ""
    };
}
exports.EndpointsResponse = {
    typeUrl: "/blit.blit.EndpointsResponse",
    is(o) {
        return o && (o.$typeUrl === exports.EndpointsResponse.typeUrl || typeof o.api_url === "string" && typeof o.rpc_url === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.EndpointsResponse.typeUrl || typeof o.api_url === "string" && typeof o.rpc_url === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.EndpointsResponse.typeUrl || typeof o.api_url === "string" && typeof o.rpc_url === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.api_url !== "") {
            writer.uint32(10).string(message.api_url);
        }
        if (message.rpc_url !== "") {
            writer.uint32(18).string(message.rpc_url);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEndpointsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.api_url = reader.string();
                    break;
                case 2:
                    message.rpc_url = reader.string();
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
            api_url: (0, helpers_1.isSet)(object.api_url) ? String(object.api_url) : "",
            rpc_url: (0, helpers_1.isSet)(object.rpc_url) ? String(object.rpc_url) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.api_url !== undefined && (obj.api_url = message.api_url);
        message.rpc_url !== undefined && (obj.rpc_url = message.rpc_url);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEndpointsResponse();
        message.api_url = object.api_url ?? "";
        message.rpc_url = object.rpc_url ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseEndpointsResponse();
        if (object.api_url !== undefined && object.api_url !== null) {
            message.api_url = object.api_url;
        }
        if (object.rpc_url !== undefined && object.rpc_url !== null) {
            message.rpc_url = object.rpc_url;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.api_url = message.api_url;
        obj.rpc_url = message.rpc_url;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EndpointsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.EndpointsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.EndpointsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.blit.EndpointsResponse",
            value: exports.EndpointsResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.EndpointsResponse.typeUrl, exports.EndpointsResponse);
//# sourceMappingURL=service.js.map
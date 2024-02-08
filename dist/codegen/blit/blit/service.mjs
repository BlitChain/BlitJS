//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
import { GlobalDecoderRegistry } from "../../registry";
import { isSet } from "../../helpers";
export const protobufPackage = "blit.blit";
function createBaseEndpointsRequest() {
    return {};
}
export const EndpointsRequest = {
    typeUrl: "/blit.blit.EndpointsRequest",
    is(o) {
        return o && o.$typeUrl === EndpointsRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === EndpointsRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === EndpointsRequest.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return EndpointsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EndpointsRequest.decode(message.value);
    },
    toProto(message) {
        return EndpointsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.blit.EndpointsRequest",
            value: EndpointsRequest.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(EndpointsRequest.typeUrl, EndpointsRequest);
function createBaseEndpointsResponse() {
    return {
        api_url: "",
        rpc_url: ""
    };
}
export const EndpointsResponse = {
    typeUrl: "/blit.blit.EndpointsResponse",
    is(o) {
        return o && (o.$typeUrl === EndpointsResponse.typeUrl || typeof o.api_url === "string" && typeof o.rpc_url === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === EndpointsResponse.typeUrl || typeof o.api_url === "string" && typeof o.rpc_url === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === EndpointsResponse.typeUrl || typeof o.api_url === "string" && typeof o.rpc_url === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.api_url !== "") {
            writer.uint32(10).string(message.api_url);
        }
        if (message.rpc_url !== "") {
            writer.uint32(18).string(message.rpc_url);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            api_url: isSet(object.api_url) ? String(object.api_url) : "",
            rpc_url: isSet(object.rpc_url) ? String(object.rpc_url) : ""
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
        return EndpointsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EndpointsResponse.decode(message.value);
    },
    toProto(message) {
        return EndpointsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.blit.EndpointsResponse",
            value: EndpointsResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(EndpointsResponse.typeUrl, EndpointsResponse);
//# sourceMappingURL=service.js.map
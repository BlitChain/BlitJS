//@ts-nocheck
import { Params } from "./params";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
export const protobufPackage = "blit.blit";
function createBaseQueryParamsRequest() {
    return {};
}
export const QueryParamsRequest = {
    typeUrl: "/blit.blit.QueryParamsRequest",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsRequest();
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
        const message = createBaseQueryParamsRequest();
        return message;
    },
    fromAmino(_) {
        return {};
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryParamsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryParamsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.blit.QueryParamsRequest",
            value: QueryParamsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryParamsResponse() {
    return {
        params: Params.fromPartial({})
    };
}
export const QueryParamsResponse = {
    typeUrl: "/blit.blit.QueryParamsResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = Params.decode(reader, reader.uint32());
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
            params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            params: object?.params ? Params.fromAmino(object.params) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryParamsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryParamsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.blit.QueryParamsResponse",
            value: QueryParamsResponse.encode(message).finish()
        };
    }
};
function createBaseEndpointsRequest() {
    return {};
}
export const EndpointsRequest = {
    typeUrl: "/blit.blit.EndpointsRequest",
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
        return {};
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
function createBaseEndpointsResponse() {
    return {
        api_url: "",
        rpc_url: ""
    };
}
export const EndpointsResponse = {
    typeUrl: "/blit.blit.EndpointsResponse",
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
        return {
            api_url: object.api_url,
            rpc_url: object.rpc_url
        };
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
//# sourceMappingURL=query.js.map
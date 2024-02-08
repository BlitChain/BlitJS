//@ts-nocheck
import { ParamChange } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export const protobufPackage = "cosmos.params.v1beta1";
function createBaseQueryParamsRequest() {
    return {
        subspace: "",
        key: ""
    };
}
export const QueryParamsRequest = {
    typeUrl: "/cosmos.params.v1beta1.QueryParamsRequest",
    aminoType: "cosmos-sdk/QueryParamsRequest",
    is(o) {
        return o && (o.$typeUrl === QueryParamsRequest.typeUrl || typeof o.subspace === "string" && typeof o.key === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryParamsRequest.typeUrl || typeof o.subspace === "string" && typeof o.key === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === QueryParamsRequest.typeUrl || typeof o.subspace === "string" && typeof o.key === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.subspace !== "") {
            writer.uint32(10).string(message.subspace);
        }
        if (message.key !== "") {
            writer.uint32(18).string(message.key);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subspace = reader.string();
                    break;
                case 2:
                    message.key = reader.string();
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
            subspace: isSet(object.subspace) ? String(object.subspace) : "",
            key: isSet(object.key) ? String(object.key) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.subspace !== undefined && (obj.subspace = message.subspace);
        message.key !== undefined && (obj.key = message.key);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryParamsRequest();
        message.subspace = object.subspace ?? "";
        message.key = object.key ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryParamsRequest();
        if (object.subspace !== undefined && object.subspace !== null) {
            message.subspace = object.subspace;
        }
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.subspace = message.subspace;
        obj.key = message.key;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryParamsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryParamsRequest",
            value: QueryParamsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryParamsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.params.v1beta1.QueryParamsRequest",
            value: QueryParamsRequest.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryParamsRequest.typeUrl, QueryParamsRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryParamsRequest.aminoType, QueryParamsRequest.typeUrl);
function createBaseQueryParamsResponse() {
    return {
        param: ParamChange.fromPartial({})
    };
}
export const QueryParamsResponse = {
    typeUrl: "/cosmos.params.v1beta1.QueryParamsResponse",
    aminoType: "cosmos-sdk/QueryParamsResponse",
    is(o) {
        return o && (o.$typeUrl === QueryParamsResponse.typeUrl || ParamChange.is(o.param));
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryParamsResponse.typeUrl || ParamChange.isSDK(o.param));
    },
    isAmino(o) {
        return o && (o.$typeUrl === QueryParamsResponse.typeUrl || ParamChange.isAmino(o.param));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.param !== undefined) {
            ParamChange.encode(message.param, writer.uint32(10).fork()).ldelim();
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
                    message.param = ParamChange.decode(reader, reader.uint32());
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
            param: isSet(object.param) ? ParamChange.fromJSON(object.param) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.param !== undefined && (obj.param = message.param ? ParamChange.toJSON(message.param) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        message.param = object.param !== undefined && object.param !== null ? ParamChange.fromPartial(object.param) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryParamsResponse();
        if (object.param !== undefined && object.param !== null) {
            message.param = ParamChange.fromAmino(object.param);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.param = message.param ? ParamChange.toAmino(message.param) : ParamChange.fromPartial({});
        return obj;
    },
    fromAminoMsg(object) {
        return QueryParamsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryParamsResponse",
            value: QueryParamsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryParamsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.params.v1beta1.QueryParamsResponse",
            value: QueryParamsResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryParamsResponse.typeUrl, QueryParamsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryParamsResponse.aminoType, QueryParamsResponse.typeUrl);
function createBaseQuerySubspacesRequest() {
    return {};
}
export const QuerySubspacesRequest = {
    typeUrl: "/cosmos.params.v1beta1.QuerySubspacesRequest",
    aminoType: "cosmos-sdk/QuerySubspacesRequest",
    is(o) {
        return o && o.$typeUrl === QuerySubspacesRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === QuerySubspacesRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === QuerySubspacesRequest.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySubspacesRequest();
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
        const message = createBaseQuerySubspacesRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQuerySubspacesRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return QuerySubspacesRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QuerySubspacesRequest",
            value: QuerySubspacesRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QuerySubspacesRequest.decode(message.value);
    },
    toProto(message) {
        return QuerySubspacesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.params.v1beta1.QuerySubspacesRequest",
            value: QuerySubspacesRequest.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QuerySubspacesRequest.typeUrl, QuerySubspacesRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QuerySubspacesRequest.aminoType, QuerySubspacesRequest.typeUrl);
function createBaseQuerySubspacesResponse() {
    return {
        subspaces: []
    };
}
export const QuerySubspacesResponse = {
    typeUrl: "/cosmos.params.v1beta1.QuerySubspacesResponse",
    aminoType: "cosmos-sdk/QuerySubspacesResponse",
    is(o) {
        return o && (o.$typeUrl === QuerySubspacesResponse.typeUrl || Array.isArray(o.subspaces) && (!o.subspaces.length || Subspace.is(o.subspaces[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === QuerySubspacesResponse.typeUrl || Array.isArray(o.subspaces) && (!o.subspaces.length || Subspace.isSDK(o.subspaces[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === QuerySubspacesResponse.typeUrl || Array.isArray(o.subspaces) && (!o.subspaces.length || Subspace.isAmino(o.subspaces[0])));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.subspaces) {
            Subspace.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySubspacesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subspaces.push(Subspace.decode(reader, reader.uint32()));
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
            subspaces: Array.isArray(object?.subspaces) ? object.subspaces.map((e) => Subspace.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.subspaces) {
            obj.subspaces = message.subspaces.map(e => e ? Subspace.toJSON(e) : undefined);
        }
        else {
            obj.subspaces = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQuerySubspacesResponse();
        message.subspaces = object.subspaces?.map(e => Subspace.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseQuerySubspacesResponse();
        message.subspaces = object.subspaces?.map(e => Subspace.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.subspaces) {
            obj.subspaces = message.subspaces.map(e => e ? Subspace.toAmino(e) : undefined);
        }
        else {
            obj.subspaces = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QuerySubspacesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QuerySubspacesResponse",
            value: QuerySubspacesResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QuerySubspacesResponse.decode(message.value);
    },
    toProto(message) {
        return QuerySubspacesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.params.v1beta1.QuerySubspacesResponse",
            value: QuerySubspacesResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QuerySubspacesResponse.typeUrl, QuerySubspacesResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QuerySubspacesResponse.aminoType, QuerySubspacesResponse.typeUrl);
function createBaseSubspace() {
    return {
        subspace: "",
        keys: []
    };
}
export const Subspace = {
    typeUrl: "/cosmos.params.v1beta1.Subspace",
    aminoType: "cosmos-sdk/Subspace",
    is(o) {
        return o && (o.$typeUrl === Subspace.typeUrl || typeof o.subspace === "string" && Array.isArray(o.keys) && (!o.keys.length || typeof o.keys[0] === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === Subspace.typeUrl || typeof o.subspace === "string" && Array.isArray(o.keys) && (!o.keys.length || typeof o.keys[0] === "string"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === Subspace.typeUrl || typeof o.subspace === "string" && Array.isArray(o.keys) && (!o.keys.length || typeof o.keys[0] === "string"));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.subspace !== "") {
            writer.uint32(10).string(message.subspace);
        }
        for (const v of message.keys) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSubspace();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subspace = reader.string();
                    break;
                case 2:
                    message.keys.push(reader.string());
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
            subspace: isSet(object.subspace) ? String(object.subspace) : "",
            keys: Array.isArray(object?.keys) ? object.keys.map((e) => String(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.subspace !== undefined && (obj.subspace = message.subspace);
        if (message.keys) {
            obj.keys = message.keys.map(e => e);
        }
        else {
            obj.keys = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSubspace();
        message.subspace = object.subspace ?? "";
        message.keys = object.keys?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseSubspace();
        if (object.subspace !== undefined && object.subspace !== null) {
            message.subspace = object.subspace;
        }
        message.keys = object.keys?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.subspace = message.subspace;
        if (message.keys) {
            obj.keys = message.keys.map(e => e);
        }
        else {
            obj.keys = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return Subspace.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Subspace",
            value: Subspace.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Subspace.decode(message.value);
    },
    toProto(message) {
        return Subspace.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.params.v1beta1.Subspace",
            value: Subspace.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(Subspace.typeUrl, Subspace);
GlobalDecoderRegistry.registerAminoProtoMapping(Subspace.aminoType, Subspace.typeUrl);
//# sourceMappingURL=query.js.map
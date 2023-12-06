//@ts-nocheck
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { Params } from "./params";
import { Storage } from "./storage";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
export const protobufPackage = "blit.storage";
function createBaseQueryParamsRequest() {
    return {};
}
export const QueryParamsRequest = {
    typeUrl: "/blit.storage.QueryParamsRequest",
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
            typeUrl: "/blit.storage.QueryParamsRequest",
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
    typeUrl: "/blit.storage.QueryParamsResponse",
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
            typeUrl: "/blit.storage.QueryParamsResponse",
            value: QueryParamsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryStorageDetailRequest() {
    return {
        address: "",
        index: ""
    };
}
export const QueryStorageDetailRequest = {
    typeUrl: "/blit.storage.QueryStorageDetailRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.index !== "") {
            writer.uint32(18).string(message.index);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryStorageDetailRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.index = reader.string();
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
            address: isSet(object.address) ? String(object.address) : "",
            index: isSet(object.index) ? String(object.index) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.index !== undefined && (obj.index = message.index);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryStorageDetailRequest();
        message.address = object.address ?? "";
        message.index = object.index ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            address: object.address,
            index: object.index
        };
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        obj.index = message.index;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryStorageDetailRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryStorageDetailRequest.decode(message.value);
    },
    toProto(message) {
        return QueryStorageDetailRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.storage.QueryStorageDetailRequest",
            value: QueryStorageDetailRequest.encode(message).finish()
        };
    }
};
function createBaseQueryStorageDetailResponse() {
    return {
        storage: Storage.fromPartial({})
    };
}
export const QueryStorageDetailResponse = {
    typeUrl: "/blit.storage.QueryStorageDetailResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.storage !== undefined) {
            Storage.encode(message.storage, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryStorageDetailResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.storage = Storage.decode(reader, reader.uint32());
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
            storage: isSet(object.storage) ? Storage.fromJSON(object.storage) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.storage !== undefined && (obj.storage = message.storage ? Storage.toJSON(message.storage) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryStorageDetailResponse();
        message.storage = object.storage !== undefined && object.storage !== null ? Storage.fromPartial(object.storage) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            storage: object?.storage ? Storage.fromAmino(object.storage) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.storage = message.storage ? Storage.toAmino(message.storage) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryStorageDetailResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryStorageDetailResponse.decode(message.value);
    },
    toProto(message) {
        return QueryStorageDetailResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.storage.QueryStorageDetailResponse",
            value: QueryStorageDetailResponse.encode(message).finish()
        };
    }
};
function createBaseQueryFilterStorageRequest() {
    return {
        filter_address: "",
        filter_index_prefix: "",
        pagination: undefined
    };
}
export const QueryFilterStorageRequest = {
    typeUrl: "/blit.storage.QueryFilterStorageRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.filter_address !== "") {
            writer.uint32(10).string(message.filter_address);
        }
        if (message.filter_index_prefix !== "") {
            writer.uint32(18).string(message.filter_index_prefix);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryFilterStorageRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.filter_address = reader.string();
                    break;
                case 2:
                    message.filter_index_prefix = reader.string();
                    break;
                case 3:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
            filter_address: isSet(object.filter_address) ? String(object.filter_address) : "",
            filter_index_prefix: isSet(object.filter_index_prefix) ? String(object.filter_index_prefix) : "",
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.filter_address !== undefined && (obj.filter_address = message.filter_address);
        message.filter_index_prefix !== undefined && (obj.filter_index_prefix = message.filter_index_prefix);
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryFilterStorageRequest();
        message.filter_address = object.filter_address ?? "";
        message.filter_index_prefix = object.filter_index_prefix ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            filter_address: object.filter_address,
            filter_index_prefix: object.filter_index_prefix,
            pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.filter_address = message.filter_address;
        obj.filter_index_prefix = message.filter_index_prefix;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryFilterStorageRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryFilterStorageRequest.decode(message.value);
    },
    toProto(message) {
        return QueryFilterStorageRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.storage.QueryFilterStorageRequest",
            value: QueryFilterStorageRequest.encode(message).finish()
        };
    }
};
function createBaseQueryFilterStorageResponse() {
    return {
        storage: [],
        pagination: undefined
    };
}
export const QueryFilterStorageResponse = {
    typeUrl: "/blit.storage.QueryFilterStorageResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.storage) {
            Storage.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryFilterStorageResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.storage.push(Storage.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
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
            storage: Array.isArray(object?.storage) ? object.storage.map((e) => Storage.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.storage) {
            obj.storage = message.storage.map(e => e ? Storage.toJSON(e) : undefined);
        }
        else {
            obj.storage = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryFilterStorageResponse();
        message.storage = object.storage?.map(e => Storage.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            storage: Array.isArray(object?.storage) ? object.storage.map((e) => Storage.fromAmino(e)) : [],
            pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.storage) {
            obj.storage = message.storage.map(e => e ? Storage.toAmino(e) : undefined);
        }
        else {
            obj.storage = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryFilterStorageResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryFilterStorageResponse.decode(message.value);
    },
    toProto(message) {
        return QueryFilterStorageResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.storage.QueryFilterStorageResponse",
            value: QueryFilterStorageResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=query.js.map
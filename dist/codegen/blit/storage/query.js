"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryFilterStorageResponse = exports.QueryFilterStorageRequest = exports.QueryStorageDetailResponse = exports.QueryStorageDetailRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.protobufPackage = void 0;
//@ts-nocheck
const pagination_1 = require("../../cosmos/base/query/v1beta1/pagination");
const params_1 = require("./params");
const storage_1 = require("./storage");
const binary_1 = require("../../binary");
const helpers_1 = require("../../helpers");
exports.protobufPackage = "blit.storage";
function createBaseQueryParamsRequest() {
    return {};
}
exports.QueryParamsRequest = {
    typeUrl: "/blit.storage.QueryParamsRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.QueryParamsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryParamsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.storage.QueryParamsRequest",
            value: exports.QueryParamsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryParamsResponse() {
    return {
        params: params_1.Params.fromPartial({})
    };
}
exports.QueryParamsResponse = {
    typeUrl: "/blit.storage.QueryParamsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = params_1.Params.decode(reader, reader.uint32());
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
            params: (0, helpers_1.isSet)(object.params) ? params_1.Params.fromJSON(object.params) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? params_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        message.params = object.params !== undefined && object.params !== null ? params_1.Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            params: object?.params ? params_1.Params.fromAmino(object.params) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? params_1.Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryParamsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryParamsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.storage.QueryParamsResponse",
            value: exports.QueryParamsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryStorageDetailRequest() {
    return {
        address: "",
        index: ""
    };
}
exports.QueryStorageDetailRequest = {
    typeUrl: "/blit.storage.QueryStorageDetailRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.index !== "") {
            writer.uint32(18).string(message.index);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
            address: (0, helpers_1.isSet)(object.address) ? String(object.address) : "",
            index: (0, helpers_1.isSet)(object.index) ? String(object.index) : ""
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
        return exports.QueryStorageDetailRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryStorageDetailRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryStorageDetailRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.storage.QueryStorageDetailRequest",
            value: exports.QueryStorageDetailRequest.encode(message).finish()
        };
    }
};
function createBaseQueryStorageDetailResponse() {
    return {
        storage: storage_1.Storage.fromPartial({})
    };
}
exports.QueryStorageDetailResponse = {
    typeUrl: "/blit.storage.QueryStorageDetailResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.storage !== undefined) {
            storage_1.Storage.encode(message.storage, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryStorageDetailResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.storage = storage_1.Storage.decode(reader, reader.uint32());
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
            storage: (0, helpers_1.isSet)(object.storage) ? storage_1.Storage.fromJSON(object.storage) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.storage !== undefined && (obj.storage = message.storage ? storage_1.Storage.toJSON(message.storage) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryStorageDetailResponse();
        message.storage = object.storage !== undefined && object.storage !== null ? storage_1.Storage.fromPartial(object.storage) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            storage: object?.storage ? storage_1.Storage.fromAmino(object.storage) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.storage = message.storage ? storage_1.Storage.toAmino(message.storage) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryStorageDetailResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryStorageDetailResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryStorageDetailResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.storage.QueryStorageDetailResponse",
            value: exports.QueryStorageDetailResponse.encode(message).finish()
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
exports.QueryFilterStorageRequest = {
    typeUrl: "/blit.storage.QueryFilterStorageRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.filter_address !== "") {
            writer.uint32(10).string(message.filter_address);
        }
        if (message.filter_index_prefix !== "") {
            writer.uint32(18).string(message.filter_index_prefix);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
            filter_address: (0, helpers_1.isSet)(object.filter_address) ? String(object.filter_address) : "",
            filter_index_prefix: (0, helpers_1.isSet)(object.filter_index_prefix) ? String(object.filter_index_prefix) : "",
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.filter_address !== undefined && (obj.filter_address = message.filter_address);
        message.filter_index_prefix !== undefined && (obj.filter_index_prefix = message.filter_index_prefix);
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryFilterStorageRequest();
        message.filter_address = object.filter_address ?? "";
        message.filter_index_prefix = object.filter_index_prefix ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            filter_address: object.filter_address,
            filter_index_prefix: object.filter_index_prefix,
            pagination: object?.pagination ? pagination_1.PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.filter_address = message.filter_address;
        obj.filter_index_prefix = message.filter_index_prefix;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryFilterStorageRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryFilterStorageRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryFilterStorageRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.storage.QueryFilterStorageRequest",
            value: exports.QueryFilterStorageRequest.encode(message).finish()
        };
    }
};
function createBaseQueryFilterStorageResponse() {
    return {
        storage: [],
        pagination: undefined
    };
}
exports.QueryFilterStorageResponse = {
    typeUrl: "/blit.storage.QueryFilterStorageResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.storage) {
            storage_1.Storage.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryFilterStorageResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.storage.push(storage_1.Storage.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
            storage: Array.isArray(object?.storage) ? object.storage.map((e) => storage_1.Storage.fromJSON(e)) : [],
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.storage) {
            obj.storage = message.storage.map(e => e ? storage_1.Storage.toJSON(e) : undefined);
        }
        else {
            obj.storage = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryFilterStorageResponse();
        message.storage = object.storage?.map(e => storage_1.Storage.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            storage: Array.isArray(object?.storage) ? object.storage.map((e) => storage_1.Storage.fromAmino(e)) : [],
            pagination: object?.pagination ? pagination_1.PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.storage) {
            obj.storage = message.storage.map(e => e ? storage_1.Storage.toAmino(e) : undefined);
        }
        else {
            obj.storage = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryFilterStorageResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryFilterStorageResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryFilterStorageResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.storage.QueryFilterStorageResponse",
            value: exports.QueryFilterStorageResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=query.js.map
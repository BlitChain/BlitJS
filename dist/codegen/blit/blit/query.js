"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryAllFutureTaskResponse = exports.QueryAllFutureTaskRequest = exports.QueryGetFutureTaskResponse = exports.QueryGetFutureTaskRequest = exports.QueryAllTaskResponse = exports.QueryAllTaskRequest = exports.QueryGetTaskResponse = exports.QueryGetTaskRequest = exports.EndpointsResponse = exports.EndpointsRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.protobufPackage = void 0;
//@ts-nocheck
const pagination_1 = require("../../cosmos/base/query/v1beta1/pagination");
const params_1 = require("./params");
const task_1 = require("./task");
const future_task_1 = require("./future_task");
const binary_1 = require("../../binary");
const helpers_1 = require("../../helpers");
exports.protobufPackage = "blit.blit";
function createBaseQueryParamsRequest() {
    return {};
}
exports.QueryParamsRequest = {
    typeUrl: "/blit.blit.QueryParamsRequest",
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
        const message = createBaseQueryParamsRequest();
        return message;
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
            typeUrl: "/blit.blit.QueryParamsRequest",
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
    typeUrl: "/blit.blit.QueryParamsResponse",
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
        const message = createBaseQueryParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = params_1.Params.fromAmino(object.params);
        }
        return message;
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
            typeUrl: "/blit.blit.QueryParamsResponse",
            value: exports.QueryParamsResponse.encode(message).finish()
        };
    }
};
function createBaseEndpointsRequest() {
    return {};
}
exports.EndpointsRequest = {
    typeUrl: "/blit.blit.EndpointsRequest",
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
function createBaseEndpointsResponse() {
    return {
        api_url: "",
        rpc_url: ""
    };
}
exports.EndpointsResponse = {
    typeUrl: "/blit.blit.EndpointsResponse",
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
function createBaseQueryGetTaskRequest() {
    return {
        id: BigInt(0)
    };
}
exports.QueryGetTaskRequest = {
    typeUrl: "/blit.blit.QueryGetTaskRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.id !== BigInt(0)) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetTaskRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
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
            id: (0, helpers_1.isSet)(object.id) ? BigInt(object.id.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGetTaskRequest();
        message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGetTaskRequest();
        if (object.id !== undefined && object.id !== null) {
            message.id = BigInt(object.id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id ? message.id.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryGetTaskRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryGetTaskRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGetTaskRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.blit.QueryGetTaskRequest",
            value: exports.QueryGetTaskRequest.encode(message).finish()
        };
    }
};
function createBaseQueryGetTaskResponse() {
    return {
        task: task_1.Task.fromPartial({})
    };
}
exports.QueryGetTaskResponse = {
    typeUrl: "/blit.blit.QueryGetTaskResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.task !== undefined) {
            task_1.Task.encode(message.task, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetTaskResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.task = task_1.Task.decode(reader, reader.uint32());
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
            task: (0, helpers_1.isSet)(object.task) ? task_1.Task.fromJSON(object.task) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.task !== undefined && (obj.task = message.task ? task_1.Task.toJSON(message.task) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGetTaskResponse();
        message.task = object.task !== undefined && object.task !== null ? task_1.Task.fromPartial(object.task) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGetTaskResponse();
        if (object.task !== undefined && object.task !== null) {
            message.task = task_1.Task.fromAmino(object.task);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.task = message.task ? task_1.Task.toAmino(message.task) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryGetTaskResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryGetTaskResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGetTaskResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.blit.QueryGetTaskResponse",
            value: exports.QueryGetTaskResponse.encode(message).finish()
        };
    }
};
function createBaseQueryAllTaskRequest() {
    return {
        address: "",
        pagination: undefined
    };
}
exports.QueryAllTaskRequest = {
    typeUrl: "/blit.blit.QueryAllTaskRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllTaskRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
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
            address: (0, helpers_1.isSet)(object.address) ? String(object.address) : "",
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAllTaskRequest();
        message.address = object.address ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAllTaskRequest();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAllTaskRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryAllTaskRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAllTaskRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.blit.QueryAllTaskRequest",
            value: exports.QueryAllTaskRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAllTaskResponse() {
    return {
        task: [],
        pagination: undefined
    };
}
exports.QueryAllTaskResponse = {
    typeUrl: "/blit.blit.QueryAllTaskResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.task) {
            task_1.Task.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllTaskResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.task.push(task_1.Task.decode(reader, reader.uint32()));
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
            task: Array.isArray(object?.task) ? object.task.map((e) => task_1.Task.fromJSON(e)) : [],
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.task) {
            obj.task = message.task.map(e => e ? task_1.Task.toJSON(e) : undefined);
        }
        else {
            obj.task = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAllTaskResponse();
        message.task = object.task?.map(e => task_1.Task.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAllTaskResponse();
        message.task = object.task?.map(e => task_1.Task.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.task) {
            obj.task = message.task.map(e => e ? task_1.Task.toAmino(e) : undefined);
        }
        else {
            obj.task = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAllTaskResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryAllTaskResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAllTaskResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.blit.QueryAllTaskResponse",
            value: exports.QueryAllTaskResponse.encode(message).finish()
        };
    }
};
function createBaseQueryGetFutureTaskRequest() {
    return {
        index: ""
    };
}
exports.QueryGetFutureTaskRequest = {
    typeUrl: "/blit.blit.QueryGetFutureTaskRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.index !== "") {
            writer.uint32(10).string(message.index);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetFutureTaskRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
            index: (0, helpers_1.isSet)(object.index) ? String(object.index) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = message.index);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGetFutureTaskRequest();
        message.index = object.index ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGetFutureTaskRequest();
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.index = message.index;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryGetFutureTaskRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryGetFutureTaskRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGetFutureTaskRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.blit.QueryGetFutureTaskRequest",
            value: exports.QueryGetFutureTaskRequest.encode(message).finish()
        };
    }
};
function createBaseQueryGetFutureTaskResponse() {
    return {
        futureTask: future_task_1.FutureTask.fromPartial({})
    };
}
exports.QueryGetFutureTaskResponse = {
    typeUrl: "/blit.blit.QueryGetFutureTaskResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.futureTask !== undefined) {
            future_task_1.FutureTask.encode(message.futureTask, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetFutureTaskResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.futureTask = future_task_1.FutureTask.decode(reader, reader.uint32());
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
            futureTask: (0, helpers_1.isSet)(object.futureTask) ? future_task_1.FutureTask.fromJSON(object.futureTask) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.futureTask !== undefined && (obj.futureTask = message.futureTask ? future_task_1.FutureTask.toJSON(message.futureTask) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGetFutureTaskResponse();
        message.futureTask = object.futureTask !== undefined && object.futureTask !== null ? future_task_1.FutureTask.fromPartial(object.futureTask) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGetFutureTaskResponse();
        if (object.futureTask !== undefined && object.futureTask !== null) {
            message.futureTask = future_task_1.FutureTask.fromAmino(object.futureTask);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.futureTask = message.futureTask ? future_task_1.FutureTask.toAmino(message.futureTask) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryGetFutureTaskResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryGetFutureTaskResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGetFutureTaskResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.blit.QueryGetFutureTaskResponse",
            value: exports.QueryGetFutureTaskResponse.encode(message).finish()
        };
    }
};
function createBaseQueryAllFutureTaskRequest() {
    return {
        prefix: "",
        pagination: undefined
    };
}
exports.QueryAllFutureTaskRequest = {
    typeUrl: "/blit.blit.QueryAllFutureTaskRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.prefix !== "") {
            writer.uint32(10).string(message.prefix);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllFutureTaskRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.prefix = reader.string();
                    break;
                case 2:
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
            prefix: (0, helpers_1.isSet)(object.prefix) ? String(object.prefix) : "",
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.prefix !== undefined && (obj.prefix = message.prefix);
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAllFutureTaskRequest();
        message.prefix = object.prefix ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAllFutureTaskRequest();
        if (object.prefix !== undefined && object.prefix !== null) {
            message.prefix = object.prefix;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.prefix = message.prefix;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAllFutureTaskRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryAllFutureTaskRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAllFutureTaskRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.blit.QueryAllFutureTaskRequest",
            value: exports.QueryAllFutureTaskRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAllFutureTaskResponse() {
    return {
        futureTask: [],
        pagination: undefined
    };
}
exports.QueryAllFutureTaskResponse = {
    typeUrl: "/blit.blit.QueryAllFutureTaskResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.futureTask) {
            future_task_1.FutureTask.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllFutureTaskResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.futureTask.push(future_task_1.FutureTask.decode(reader, reader.uint32()));
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
            futureTask: Array.isArray(object?.futureTask) ? object.futureTask.map((e) => future_task_1.FutureTask.fromJSON(e)) : [],
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.futureTask) {
            obj.futureTask = message.futureTask.map(e => e ? future_task_1.FutureTask.toJSON(e) : undefined);
        }
        else {
            obj.futureTask = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAllFutureTaskResponse();
        message.futureTask = object.futureTask?.map(e => future_task_1.FutureTask.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAllFutureTaskResponse();
        message.futureTask = object.futureTask?.map(e => future_task_1.FutureTask.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = pagination_1.PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.futureTask) {
            obj.futureTask = message.futureTask.map(e => e ? future_task_1.FutureTask.toAmino(e) : undefined);
        }
        else {
            obj.futureTask = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAllFutureTaskResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryAllFutureTaskResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAllFutureTaskResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.blit.QueryAllFutureTaskResponse",
            value: exports.QueryAllFutureTaskResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=query.js.map
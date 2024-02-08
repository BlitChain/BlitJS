//@ts-nocheck
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { Params } from "./params";
import { Task } from "./task";
import { FutureTask } from "./future_task";
import { BinaryReader, BinaryWriter } from "../../binary";
import { GlobalDecoderRegistry } from "../../registry";
import { isSet } from "../../helpers";
export const protobufPackage = "blit.blit";
function createBaseQueryParamsRequest() {
    return {};
}
export const QueryParamsRequest = {
    typeUrl: "/blit.blit.QueryParamsRequest",
    is(o) {
        return o && o.$typeUrl === QueryParamsRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === QueryParamsRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === QueryParamsRequest.typeUrl;
    },
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
        const message = createBaseQueryParamsRequest();
        return message;
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
GlobalDecoderRegistry.register(QueryParamsRequest.typeUrl, QueryParamsRequest);
function createBaseQueryParamsResponse() {
    return {
        params: Params.fromPartial({})
    };
}
export const QueryParamsResponse = {
    typeUrl: "/blit.blit.QueryParamsResponse",
    is(o) {
        return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.is(o.params));
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.isSDK(o.params));
    },
    isAmino(o) {
        return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.isAmino(o.params));
    },
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
        const message = createBaseQueryParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromAmino(object.params);
        }
        return message;
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
GlobalDecoderRegistry.register(QueryParamsResponse.typeUrl, QueryParamsResponse);
function createBaseQueryGetTaskRequest() {
    return {
        id: BigInt(0)
    };
}
export const QueryGetTaskRequest = {
    typeUrl: "/blit.blit.QueryGetTaskRequest",
    is(o) {
        return o && (o.$typeUrl === QueryGetTaskRequest.typeUrl || typeof o.id === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryGetTaskRequest.typeUrl || typeof o.id === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === QueryGetTaskRequest.typeUrl || typeof o.id === "bigint");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.id !== BigInt(0)) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0)
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
        return QueryGetTaskRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryGetTaskRequest.decode(message.value);
    },
    toProto(message) {
        return QueryGetTaskRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.blit.QueryGetTaskRequest",
            value: QueryGetTaskRequest.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryGetTaskRequest.typeUrl, QueryGetTaskRequest);
function createBaseQueryGetTaskResponse() {
    return {
        task: Task.fromPartial({})
    };
}
export const QueryGetTaskResponse = {
    typeUrl: "/blit.blit.QueryGetTaskResponse",
    is(o) {
        return o && (o.$typeUrl === QueryGetTaskResponse.typeUrl || Task.is(o.task));
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryGetTaskResponse.typeUrl || Task.isSDK(o.task));
    },
    isAmino(o) {
        return o && (o.$typeUrl === QueryGetTaskResponse.typeUrl || Task.isAmino(o.task));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.task !== undefined) {
            Task.encode(message.task, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetTaskResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.task = Task.decode(reader, reader.uint32());
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
            task: isSet(object.task) ? Task.fromJSON(object.task) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.task !== undefined && (obj.task = message.task ? Task.toJSON(message.task) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGetTaskResponse();
        message.task = object.task !== undefined && object.task !== null ? Task.fromPartial(object.task) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGetTaskResponse();
        if (object.task !== undefined && object.task !== null) {
            message.task = Task.fromAmino(object.task);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.task = message.task ? Task.toAmino(message.task) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryGetTaskResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryGetTaskResponse.decode(message.value);
    },
    toProto(message) {
        return QueryGetTaskResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.blit.QueryGetTaskResponse",
            value: QueryGetTaskResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryGetTaskResponse.typeUrl, QueryGetTaskResponse);
function createBaseQueryAllTaskRequest() {
    return {
        address: "",
        pagination: undefined
    };
}
export const QueryAllTaskRequest = {
    typeUrl: "/blit.blit.QueryAllTaskRequest",
    is(o) {
        return o && (o.$typeUrl === QueryAllTaskRequest.typeUrl || typeof o.address === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryAllTaskRequest.typeUrl || typeof o.address === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === QueryAllTaskRequest.typeUrl || typeof o.address === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllTaskRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
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
            address: isSet(object.address) ? String(object.address) : "",
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAllTaskRequest();
        message.address = object.address ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAllTaskRequest();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAllTaskRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryAllTaskRequest.decode(message.value);
    },
    toProto(message) {
        return QueryAllTaskRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.blit.QueryAllTaskRequest",
            value: QueryAllTaskRequest.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryAllTaskRequest.typeUrl, QueryAllTaskRequest);
function createBaseQueryAllTaskResponse() {
    return {
        task: [],
        pagination: undefined
    };
}
export const QueryAllTaskResponse = {
    typeUrl: "/blit.blit.QueryAllTaskResponse",
    is(o) {
        return o && (o.$typeUrl === QueryAllTaskResponse.typeUrl || Array.isArray(o.task) && (!o.task.length || Task.is(o.task[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryAllTaskResponse.typeUrl || Array.isArray(o.task) && (!o.task.length || Task.isSDK(o.task[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === QueryAllTaskResponse.typeUrl || Array.isArray(o.task) && (!o.task.length || Task.isAmino(o.task[0])));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.task) {
            Task.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllTaskResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.task.push(Task.decode(reader, reader.uint32()));
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
            task: Array.isArray(object?.task) ? object.task.map((e) => Task.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.task) {
            obj.task = message.task.map(e => e ? Task.toJSON(e) : undefined);
        }
        else {
            obj.task = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAllTaskResponse();
        message.task = object.task?.map(e => Task.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAllTaskResponse();
        message.task = object.task?.map(e => Task.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.task) {
            obj.task = message.task.map(e => e ? Task.toAmino(e) : undefined);
        }
        else {
            obj.task = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAllTaskResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryAllTaskResponse.decode(message.value);
    },
    toProto(message) {
        return QueryAllTaskResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.blit.QueryAllTaskResponse",
            value: QueryAllTaskResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryAllTaskResponse.typeUrl, QueryAllTaskResponse);
function createBaseQueryGetFutureTaskRequest() {
    return {
        index: ""
    };
}
export const QueryGetFutureTaskRequest = {
    typeUrl: "/blit.blit.QueryGetFutureTaskRequest",
    is(o) {
        return o && (o.$typeUrl === QueryGetFutureTaskRequest.typeUrl || typeof o.index === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryGetFutureTaskRequest.typeUrl || typeof o.index === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === QueryGetFutureTaskRequest.typeUrl || typeof o.index === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.index !== "") {
            writer.uint32(10).string(message.index);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            index: isSet(object.index) ? String(object.index) : ""
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
        return QueryGetFutureTaskRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryGetFutureTaskRequest.decode(message.value);
    },
    toProto(message) {
        return QueryGetFutureTaskRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.blit.QueryGetFutureTaskRequest",
            value: QueryGetFutureTaskRequest.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryGetFutureTaskRequest.typeUrl, QueryGetFutureTaskRequest);
function createBaseQueryGetFutureTaskResponse() {
    return {
        futureTask: FutureTask.fromPartial({})
    };
}
export const QueryGetFutureTaskResponse = {
    typeUrl: "/blit.blit.QueryGetFutureTaskResponse",
    is(o) {
        return o && (o.$typeUrl === QueryGetFutureTaskResponse.typeUrl || FutureTask.is(o.futureTask));
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryGetFutureTaskResponse.typeUrl || FutureTask.isSDK(o.futureTask));
    },
    isAmino(o) {
        return o && (o.$typeUrl === QueryGetFutureTaskResponse.typeUrl || FutureTask.isAmino(o.futureTask));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.futureTask !== undefined) {
            FutureTask.encode(message.futureTask, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetFutureTaskResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.futureTask = FutureTask.decode(reader, reader.uint32());
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
            futureTask: isSet(object.futureTask) ? FutureTask.fromJSON(object.futureTask) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.futureTask !== undefined && (obj.futureTask = message.futureTask ? FutureTask.toJSON(message.futureTask) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGetFutureTaskResponse();
        message.futureTask = object.futureTask !== undefined && object.futureTask !== null ? FutureTask.fromPartial(object.futureTask) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGetFutureTaskResponse();
        if (object.futureTask !== undefined && object.futureTask !== null) {
            message.futureTask = FutureTask.fromAmino(object.futureTask);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.futureTask = message.futureTask ? FutureTask.toAmino(message.futureTask) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryGetFutureTaskResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryGetFutureTaskResponse.decode(message.value);
    },
    toProto(message) {
        return QueryGetFutureTaskResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.blit.QueryGetFutureTaskResponse",
            value: QueryGetFutureTaskResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryGetFutureTaskResponse.typeUrl, QueryGetFutureTaskResponse);
function createBaseQueryAllFutureTaskRequest() {
    return {
        prefix: "",
        pagination: undefined
    };
}
export const QueryAllFutureTaskRequest = {
    typeUrl: "/blit.blit.QueryAllFutureTaskRequest",
    is(o) {
        return o && (o.$typeUrl === QueryAllFutureTaskRequest.typeUrl || typeof o.prefix === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryAllFutureTaskRequest.typeUrl || typeof o.prefix === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === QueryAllFutureTaskRequest.typeUrl || typeof o.prefix === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.prefix !== "") {
            writer.uint32(10).string(message.prefix);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllFutureTaskRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.prefix = reader.string();
                    break;
                case 2:
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
            prefix: isSet(object.prefix) ? String(object.prefix) : "",
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.prefix !== undefined && (obj.prefix = message.prefix);
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAllFutureTaskRequest();
        message.prefix = object.prefix ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAllFutureTaskRequest();
        if (object.prefix !== undefined && object.prefix !== null) {
            message.prefix = object.prefix;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.prefix = message.prefix;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAllFutureTaskRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryAllFutureTaskRequest.decode(message.value);
    },
    toProto(message) {
        return QueryAllFutureTaskRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.blit.QueryAllFutureTaskRequest",
            value: QueryAllFutureTaskRequest.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryAllFutureTaskRequest.typeUrl, QueryAllFutureTaskRequest);
function createBaseQueryAllFutureTaskResponse() {
    return {
        futureTask: [],
        pagination: undefined
    };
}
export const QueryAllFutureTaskResponse = {
    typeUrl: "/blit.blit.QueryAllFutureTaskResponse",
    is(o) {
        return o && (o.$typeUrl === QueryAllFutureTaskResponse.typeUrl || Array.isArray(o.futureTask) && (!o.futureTask.length || FutureTask.is(o.futureTask[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryAllFutureTaskResponse.typeUrl || Array.isArray(o.futureTask) && (!o.futureTask.length || FutureTask.isSDK(o.futureTask[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === QueryAllFutureTaskResponse.typeUrl || Array.isArray(o.futureTask) && (!o.futureTask.length || FutureTask.isAmino(o.futureTask[0])));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.futureTask) {
            FutureTask.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllFutureTaskResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.futureTask.push(FutureTask.decode(reader, reader.uint32()));
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
            futureTask: Array.isArray(object?.futureTask) ? object.futureTask.map((e) => FutureTask.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.futureTask) {
            obj.futureTask = message.futureTask.map(e => e ? FutureTask.toJSON(e) : undefined);
        }
        else {
            obj.futureTask = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAllFutureTaskResponse();
        message.futureTask = object.futureTask?.map(e => FutureTask.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAllFutureTaskResponse();
        message.futureTask = object.futureTask?.map(e => FutureTask.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.futureTask) {
            obj.futureTask = message.futureTask.map(e => e ? FutureTask.toAmino(e) : undefined);
        }
        else {
            obj.futureTask = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAllFutureTaskResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryAllFutureTaskResponse.decode(message.value);
    },
    toProto(message) {
        return QueryAllFutureTaskResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.blit.QueryAllFutureTaskResponse",
            value: QueryAllFutureTaskResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryAllFutureTaskResponse.typeUrl, QueryAllFutureTaskResponse);
//# sourceMappingURL=query.js.map
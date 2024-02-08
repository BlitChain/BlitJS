//@ts-nocheck
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { Params } from "./params";
import { Task } from "./task";
import { FutureTask } from "./future_task";
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
function createBaseQueryGetTaskRequest() {
    return {
        id: BigInt(0)
    };
}
export const QueryGetTaskRequest = {
    typeUrl: "/blit.blit.QueryGetTaskRequest",
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
        return {
            id: BigInt(object.id)
        };
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
function createBaseQueryGetTaskResponse() {
    return {
        task: Task.fromPartial({})
    };
}
export const QueryGetTaskResponse = {
    typeUrl: "/blit.blit.QueryGetTaskResponse",
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
        return {
            task: object?.task ? Task.fromAmino(object.task) : undefined
        };
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
function createBaseQueryAllTaskRequest() {
    return {
        address: "",
        pagination: undefined
    };
}
export const QueryAllTaskRequest = {
    typeUrl: "/blit.blit.QueryAllTaskRequest",
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
        return {
            address: object.address,
            pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
        };
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
function createBaseQueryAllTaskResponse() {
    return {
        task: [],
        pagination: undefined
    };
}
export const QueryAllTaskResponse = {
    typeUrl: "/blit.blit.QueryAllTaskResponse",
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
        return {
            task: Array.isArray(object?.task) ? object.task.map((e) => Task.fromAmino(e)) : [],
            pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
        };
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
function createBaseQueryGetFutureTaskRequest() {
    return {
        index: ""
    };
}
export const QueryGetFutureTaskRequest = {
    typeUrl: "/blit.blit.QueryGetFutureTaskRequest",
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
        return {
            index: object.index
        };
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
function createBaseQueryGetFutureTaskResponse() {
    return {
        futureTask: FutureTask.fromPartial({})
    };
}
export const QueryGetFutureTaskResponse = {
    typeUrl: "/blit.blit.QueryGetFutureTaskResponse",
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
        return {
            futureTask: object?.futureTask ? FutureTask.fromAmino(object.futureTask) : undefined
        };
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
function createBaseQueryAllFutureTaskRequest() {
    return {
        prefix: "",
        pagination: undefined
    };
}
export const QueryAllFutureTaskRequest = {
    typeUrl: "/blit.blit.QueryAllFutureTaskRequest",
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
        return {
            prefix: object.prefix,
            pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
        };
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
function createBaseQueryAllFutureTaskResponse() {
    return {
        futureTask: [],
        pagination: undefined
    };
}
export const QueryAllFutureTaskResponse = {
    typeUrl: "/blit.blit.QueryAllFutureTaskResponse",
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
        return {
            futureTask: Array.isArray(object?.futureTask) ? object.futureTask.map((e) => FutureTask.fromAmino(e)) : [],
            pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
        };
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
//# sourceMappingURL=query.js.map
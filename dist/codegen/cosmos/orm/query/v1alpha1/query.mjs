//@ts-nocheck
import { PageRequest, PageResponse } from "../../../base/query/v1beta1/pagination";
import { Any } from "../../../../google/protobuf/any";
import { Timestamp } from "../../../../google/protobuf/timestamp";
import { Duration } from "../../../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, toTimestamp, fromTimestamp, bytesFromBase64, fromJsonTimestamp, base64FromBytes } from "../../../../helpers";
export const protobufPackage = "cosmos.orm.query.v1alpha1";
function createBaseGetRequest() {
    return {
        message_name: "",
        index: "",
        values: []
    };
}
export const GetRequest = {
    typeUrl: "/cosmos.orm.query.v1alpha1.GetRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.message_name !== "") {
            writer.uint32(10).string(message.message_name);
        }
        if (message.index !== "") {
            writer.uint32(18).string(message.index);
        }
        for (const v of message.values) {
            IndexValue.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.message_name = reader.string();
                    break;
                case 2:
                    message.index = reader.string();
                    break;
                case 3:
                    message.values.push(IndexValue.decode(reader, reader.uint32()));
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
            message_name: isSet(object.message_name) ? String(object.message_name) : "",
            index: isSet(object.index) ? String(object.index) : "",
            values: Array.isArray(object?.values) ? object.values.map((e) => IndexValue.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.message_name !== undefined && (obj.message_name = message.message_name);
        message.index !== undefined && (obj.index = message.index);
        if (message.values) {
            obj.values = message.values.map(e => e ? IndexValue.toJSON(e) : undefined);
        }
        else {
            obj.values = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetRequest();
        message.message_name = object.message_name ?? "";
        message.index = object.index ?? "";
        message.values = object.values?.map(e => IndexValue.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseGetRequest();
        if (object.message_name !== undefined && object.message_name !== null) {
            message.message_name = object.message_name;
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        message.values = object.values?.map(e => IndexValue.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.message_name = message.message_name;
        obj.index = message.index;
        if (message.values) {
            obj.values = message.values.map(e => e ? IndexValue.toAmino(e) : undefined);
        }
        else {
            obj.values = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return GetRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetRequest",
            value: GetRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GetRequest.decode(message.value);
    },
    toProto(message) {
        return GetRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.orm.query.v1alpha1.GetRequest",
            value: GetRequest.encode(message).finish()
        };
    }
};
function createBaseGetResponse() {
    return {
        result: undefined
    };
}
export const GetResponse = {
    typeUrl: "/cosmos.orm.query.v1alpha1.GetResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.result !== undefined) {
            Any.encode(message.result, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.result = Any.decode(reader, reader.uint32());
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
            result: isSet(object.result) ? Any.fromJSON(object.result) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.result !== undefined && (obj.result = message.result ? Any.toJSON(message.result) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetResponse();
        message.result = object.result !== undefined && object.result !== null ? Any.fromPartial(object.result) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseGetResponse();
        if (object.result !== undefined && object.result !== null) {
            message.result = Any.fromAmino(object.result);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.result = message.result ? Any.toAmino(message.result) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return GetResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetResponse",
            value: GetResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GetResponse.decode(message.value);
    },
    toProto(message) {
        return GetResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.orm.query.v1alpha1.GetResponse",
            value: GetResponse.encode(message).finish()
        };
    }
};
function createBaseListRequest() {
    return {
        message_name: "",
        index: "",
        prefix: undefined,
        range: undefined,
        pagination: undefined
    };
}
export const ListRequest = {
    typeUrl: "/cosmos.orm.query.v1alpha1.ListRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.message_name !== "") {
            writer.uint32(10).string(message.message_name);
        }
        if (message.index !== "") {
            writer.uint32(18).string(message.index);
        }
        if (message.prefix !== undefined) {
            ListRequest_Prefix.encode(message.prefix, writer.uint32(26).fork()).ldelim();
        }
        if (message.range !== undefined) {
            ListRequest_Range.encode(message.range, writer.uint32(34).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.message_name = reader.string();
                    break;
                case 2:
                    message.index = reader.string();
                    break;
                case 3:
                    message.prefix = ListRequest_Prefix.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.range = ListRequest_Range.decode(reader, reader.uint32());
                    break;
                case 5:
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
            message_name: isSet(object.message_name) ? String(object.message_name) : "",
            index: isSet(object.index) ? String(object.index) : "",
            prefix: isSet(object.prefix) ? ListRequest_Prefix.fromJSON(object.prefix) : undefined,
            range: isSet(object.range) ? ListRequest_Range.fromJSON(object.range) : undefined,
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.message_name !== undefined && (obj.message_name = message.message_name);
        message.index !== undefined && (obj.index = message.index);
        message.prefix !== undefined && (obj.prefix = message.prefix ? ListRequest_Prefix.toJSON(message.prefix) : undefined);
        message.range !== undefined && (obj.range = message.range ? ListRequest_Range.toJSON(message.range) : undefined);
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseListRequest();
        message.message_name = object.message_name ?? "";
        message.index = object.index ?? "";
        message.prefix = object.prefix !== undefined && object.prefix !== null ? ListRequest_Prefix.fromPartial(object.prefix) : undefined;
        message.range = object.range !== undefined && object.range !== null ? ListRequest_Range.fromPartial(object.range) : undefined;
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseListRequest();
        if (object.message_name !== undefined && object.message_name !== null) {
            message.message_name = object.message_name;
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        if (object.prefix !== undefined && object.prefix !== null) {
            message.prefix = ListRequest_Prefix.fromAmino(object.prefix);
        }
        if (object.range !== undefined && object.range !== null) {
            message.range = ListRequest_Range.fromAmino(object.range);
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.message_name = message.message_name;
        obj.index = message.index;
        obj.prefix = message.prefix ? ListRequest_Prefix.toAmino(message.prefix) : undefined;
        obj.range = message.range ? ListRequest_Range.toAmino(message.range) : undefined;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ListRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ListRequest",
            value: ListRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ListRequest.decode(message.value);
    },
    toProto(message) {
        return ListRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.orm.query.v1alpha1.ListRequest",
            value: ListRequest.encode(message).finish()
        };
    }
};
function createBaseListRequest_Prefix() {
    return {
        values: []
    };
}
export const ListRequest_Prefix = {
    typeUrl: "/cosmos.orm.query.v1alpha1.Prefix",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.values) {
            IndexValue.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListRequest_Prefix();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.values.push(IndexValue.decode(reader, reader.uint32()));
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
            values: Array.isArray(object?.values) ? object.values.map((e) => IndexValue.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.values) {
            obj.values = message.values.map(e => e ? IndexValue.toJSON(e) : undefined);
        }
        else {
            obj.values = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseListRequest_Prefix();
        message.values = object.values?.map(e => IndexValue.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseListRequest_Prefix();
        message.values = object.values?.map(e => IndexValue.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.values) {
            obj.values = message.values.map(e => e ? IndexValue.toAmino(e) : undefined);
        }
        else {
            obj.values = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return ListRequest_Prefix.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Prefix",
            value: ListRequest_Prefix.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ListRequest_Prefix.decode(message.value);
    },
    toProto(message) {
        return ListRequest_Prefix.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.orm.query.v1alpha1.Prefix",
            value: ListRequest_Prefix.encode(message).finish()
        };
    }
};
function createBaseListRequest_Range() {
    return {
        start: [],
        end: []
    };
}
export const ListRequest_Range = {
    typeUrl: "/cosmos.orm.query.v1alpha1.Range",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.start) {
            IndexValue.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.end) {
            IndexValue.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListRequest_Range();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.start.push(IndexValue.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.end.push(IndexValue.decode(reader, reader.uint32()));
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
            start: Array.isArray(object?.start) ? object.start.map((e) => IndexValue.fromJSON(e)) : [],
            end: Array.isArray(object?.end) ? object.end.map((e) => IndexValue.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.start) {
            obj.start = message.start.map(e => e ? IndexValue.toJSON(e) : undefined);
        }
        else {
            obj.start = [];
        }
        if (message.end) {
            obj.end = message.end.map(e => e ? IndexValue.toJSON(e) : undefined);
        }
        else {
            obj.end = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseListRequest_Range();
        message.start = object.start?.map(e => IndexValue.fromPartial(e)) || [];
        message.end = object.end?.map(e => IndexValue.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseListRequest_Range();
        message.start = object.start?.map(e => IndexValue.fromAmino(e)) || [];
        message.end = object.end?.map(e => IndexValue.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.start) {
            obj.start = message.start.map(e => e ? IndexValue.toAmino(e) : undefined);
        }
        else {
            obj.start = [];
        }
        if (message.end) {
            obj.end = message.end.map(e => e ? IndexValue.toAmino(e) : undefined);
        }
        else {
            obj.end = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return ListRequest_Range.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Range",
            value: ListRequest_Range.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ListRequest_Range.decode(message.value);
    },
    toProto(message) {
        return ListRequest_Range.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.orm.query.v1alpha1.Range",
            value: ListRequest_Range.encode(message).finish()
        };
    }
};
function createBaseListResponse() {
    return {
        results: [],
        pagination: undefined
    };
}
export const ListResponse = {
    typeUrl: "/cosmos.orm.query.v1alpha1.ListResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.results) {
            Any.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.results.push(Any.decode(reader, reader.uint32()));
                    break;
                case 5:
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
            results: Array.isArray(object?.results) ? object.results.map((e) => Any.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.results) {
            obj.results = message.results.map(e => e ? Any.toJSON(e) : undefined);
        }
        else {
            obj.results = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseListResponse();
        message.results = object.results?.map(e => Any.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseListResponse();
        message.results = object.results?.map(e => Any.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.results) {
            obj.results = message.results.map(e => e ? Any.toAmino(e) : undefined);
        }
        else {
            obj.results = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ListResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ListResponse",
            value: ListResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ListResponse.decode(message.value);
    },
    toProto(message) {
        return ListResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.orm.query.v1alpha1.ListResponse",
            value: ListResponse.encode(message).finish()
        };
    }
};
function createBaseIndexValue() {
    return {
        uint: undefined,
        int: undefined,
        str: undefined,
        bytes: undefined,
        enum: undefined,
        bool: undefined,
        timestamp: undefined,
        duration: undefined
    };
}
export const IndexValue = {
    typeUrl: "/cosmos.orm.query.v1alpha1.IndexValue",
    encode(message, writer = BinaryWriter.create()) {
        if (message.uint !== undefined) {
            writer.uint32(8).uint64(message.uint);
        }
        if (message.int !== undefined) {
            writer.uint32(16).int64(message.int);
        }
        if (message.str !== undefined) {
            writer.uint32(26).string(message.str);
        }
        if (message.bytes !== undefined) {
            writer.uint32(34).bytes(message.bytes);
        }
        if (message.enum !== undefined) {
            writer.uint32(42).string(message.enum);
        }
        if (message.bool !== undefined) {
            writer.uint32(48).bool(message.bool);
        }
        if (message.timestamp !== undefined) {
            Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(58).fork()).ldelim();
        }
        if (message.duration !== undefined) {
            Duration.encode(message.duration, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIndexValue();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.uint = reader.uint64();
                    break;
                case 2:
                    message.int = reader.int64();
                    break;
                case 3:
                    message.str = reader.string();
                    break;
                case 4:
                    message.bytes = reader.bytes();
                    break;
                case 5:
                    message.enum = reader.string();
                    break;
                case 6:
                    message.bool = reader.bool();
                    break;
                case 7:
                    message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.duration = Duration.decode(reader, reader.uint32());
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
            uint: isSet(object.uint) ? BigInt(object.uint.toString()) : undefined,
            int: isSet(object.int) ? BigInt(object.int.toString()) : undefined,
            str: isSet(object.str) ? String(object.str) : undefined,
            bytes: isSet(object.bytes) ? bytesFromBase64(object.bytes) : undefined,
            enum: isSet(object.enum) ? String(object.enum) : undefined,
            bool: isSet(object.bool) ? Boolean(object.bool) : undefined,
            timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined,
            duration: isSet(object.duration) ? Duration.fromJSON(object.duration) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.uint !== undefined) {
            obj.uint = message.uint.toString();
        }
        if (message.int !== undefined) {
            obj.int = message.int.toString();
        }
        message.str !== undefined && (obj.str = message.str);
        message.bytes !== undefined && (obj.bytes = message.bytes !== undefined ? base64FromBytes(message.bytes) : undefined);
        message.enum !== undefined && (obj.enum = message.enum);
        message.bool !== undefined && (obj.bool = message.bool);
        message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
        message.duration !== undefined && (obj.duration = message.duration ? Duration.toJSON(message.duration) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseIndexValue();
        message.uint = object.uint !== undefined && object.uint !== null ? BigInt(object.uint.toString()) : undefined;
        message.int = object.int !== undefined && object.int !== null ? BigInt(object.int.toString()) : undefined;
        message.str = object.str ?? undefined;
        message.bytes = object.bytes ?? undefined;
        message.enum = object.enum ?? undefined;
        message.bool = object.bool ?? undefined;
        message.timestamp = object.timestamp ?? undefined;
        message.duration = object.duration !== undefined && object.duration !== null ? Duration.fromPartial(object.duration) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseIndexValue();
        if (object.uint !== undefined && object.uint !== null) {
            message.uint = BigInt(object.uint);
        }
        if (object.int !== undefined && object.int !== null) {
            message.int = BigInt(object.int);
        }
        if (object.str !== undefined && object.str !== null) {
            message.str = object.str;
        }
        if (object.bytes !== undefined && object.bytes !== null) {
            message.bytes = bytesFromBase64(object.bytes);
        }
        if (object.enum !== undefined && object.enum !== null) {
            message.enum = object.enum;
        }
        if (object.bool !== undefined && object.bool !== null) {
            message.bool = object.bool;
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = fromTimestamp(Timestamp.fromAmino(object.timestamp));
        }
        if (object.duration !== undefined && object.duration !== null) {
            message.duration = Duration.fromAmino(object.duration);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.uint = message.uint ? message.uint.toString() : undefined;
        obj.int = message.int ? message.int.toString() : undefined;
        obj.str = message.str;
        obj.bytes = message.bytes ? base64FromBytes(message.bytes) : undefined;
        obj.enum = message.enum;
        obj.bool = message.bool;
        obj.timestamp = message.timestamp ? Timestamp.toAmino(toTimestamp(message.timestamp)) : undefined;
        obj.duration = message.duration ? Duration.toAmino(message.duration) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return IndexValue.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/IndexValue",
            value: IndexValue.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return IndexValue.decode(message.value);
    },
    toProto(message) {
        return IndexValue.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.orm.query.v1alpha1.IndexValue",
            value: IndexValue.encode(message).finish()
        };
    }
};
//# sourceMappingURL=query.js.map
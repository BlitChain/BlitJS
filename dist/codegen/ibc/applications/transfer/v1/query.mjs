//@ts-nocheck
import { PageRequest, PageResponse } from "../../../../cosmos/base/query/v1beta1/pagination";
import { DenomTrace, Params } from "./transfer";
import { Coin } from "../../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet } from "../../../../helpers";
export const protobufPackage = "ibc.applications.transfer.v1";
function createBaseQueryDenomTraceRequest() {
    return {
        hash: ""
    };
}
export const QueryDenomTraceRequest = {
    typeUrl: "/ibc.applications.transfer.v1.QueryDenomTraceRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.hash !== "") {
            writer.uint32(10).string(message.hash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomTraceRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hash = reader.string();
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
            hash: isSet(object.hash) ? String(object.hash) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.hash !== undefined && (obj.hash = message.hash);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryDenomTraceRequest();
        message.hash = object.hash ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            hash: object?.hash
        };
    },
    toSDK(message) {
        const obj = {};
        obj.hash = message.hash;
        return obj;
    },
    fromAmino(object) {
        return {
            hash: object.hash
        };
    },
    toAmino(message) {
        const obj = {};
        obj.hash = message.hash;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDenomTraceRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryDenomTraceRequest",
            value: QueryDenomTraceRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryDenomTraceRequest.decode(message.value);
    },
    toProto(message) {
        return QueryDenomTraceRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.transfer.v1.QueryDenomTraceRequest",
            value: QueryDenomTraceRequest.encode(message).finish()
        };
    }
};
function createBaseQueryDenomTraceResponse() {
    return {
        denom_trace: undefined
    };
}
export const QueryDenomTraceResponse = {
    typeUrl: "/ibc.applications.transfer.v1.QueryDenomTraceResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.denom_trace !== undefined) {
            DenomTrace.encode(message.denom_trace, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomTraceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom_trace = DenomTrace.decode(reader, reader.uint32());
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
            denom_trace: isSet(object.denom_trace) ? DenomTrace.fromJSON(object.denom_trace) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.denom_trace !== undefined && (obj.denom_trace = message.denom_trace ? DenomTrace.toJSON(message.denom_trace) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryDenomTraceResponse();
        message.denom_trace = object.denom_trace !== undefined && object.denom_trace !== null ? DenomTrace.fromPartial(object.denom_trace) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            denom_trace: object.denom_trace ? DenomTrace.fromSDK(object.denom_trace) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.denom_trace !== undefined && (obj.denom_trace = message.denom_trace ? DenomTrace.toSDK(message.denom_trace) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            denom_trace: object?.denom_trace ? DenomTrace.fromAmino(object.denom_trace) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.denom_trace = message.denom_trace ? DenomTrace.toAmino(message.denom_trace) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDenomTraceResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryDenomTraceResponse",
            value: QueryDenomTraceResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryDenomTraceResponse.decode(message.value);
    },
    toProto(message) {
        return QueryDenomTraceResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.transfer.v1.QueryDenomTraceResponse",
            value: QueryDenomTraceResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDenomTracesRequest() {
    return {
        pagination: undefined
    };
}
export const QueryDenomTracesRequest = {
    typeUrl: "/ibc.applications.transfer.v1.QueryDenomTracesRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomTracesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryDenomTracesRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDenomTracesRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryDenomTracesRequest",
            value: QueryDenomTracesRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryDenomTracesRequest.decode(message.value);
    },
    toProto(message) {
        return QueryDenomTracesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.transfer.v1.QueryDenomTracesRequest",
            value: QueryDenomTracesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryDenomTracesResponse() {
    return {
        denom_traces: [],
        pagination: undefined
    };
}
export const QueryDenomTracesResponse = {
    typeUrl: "/ibc.applications.transfer.v1.QueryDenomTracesResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.denom_traces) {
            DenomTrace.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomTracesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom_traces.push(DenomTrace.decode(reader, reader.uint32()));
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
            denom_traces: Array.isArray(object?.denom_traces) ? object.denom_traces.map((e) => DenomTrace.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.denom_traces) {
            obj.denom_traces = message.denom_traces.map(e => e ? DenomTrace.toJSON(e) : undefined);
        }
        else {
            obj.denom_traces = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryDenomTracesResponse();
        message.denom_traces = object.denom_traces?.map(e => DenomTrace.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            denom_traces: Array.isArray(object?.denom_traces) ? object.denom_traces.map((e) => DenomTrace.fromSDK(e)) : [],
            pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.denom_traces) {
            obj.denom_traces = message.denom_traces.map(e => e ? DenomTrace.toSDK(e) : undefined);
        }
        else {
            obj.denom_traces = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            denom_traces: Array.isArray(object?.denom_traces) ? object.denom_traces.map((e) => DenomTrace.fromAmino(e)) : [],
            pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.denom_traces) {
            obj.denom_traces = message.denom_traces.map(e => e ? DenomTrace.toAmino(e) : undefined);
        }
        else {
            obj.denom_traces = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDenomTracesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryDenomTracesResponse",
            value: QueryDenomTracesResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryDenomTracesResponse.decode(message.value);
    },
    toProto(message) {
        return QueryDenomTracesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.transfer.v1.QueryDenomTracesResponse",
            value: QueryDenomTracesResponse.encode(message).finish()
        };
    }
};
function createBaseQueryParamsRequest() {
    return {};
}
export const QueryParamsRequest = {
    typeUrl: "/ibc.applications.transfer.v1.QueryParamsRequest",
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
    fromSDK(_) {
        return {};
    },
    toSDK(_) {
        const obj = {};
        return obj;
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
            typeUrl: "/ibc.applications.transfer.v1.QueryParamsRequest",
            value: QueryParamsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryParamsResponse() {
    return {
        params: undefined
    };
}
export const QueryParamsResponse = {
    typeUrl: "/ibc.applications.transfer.v1.QueryParamsResponse",
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
    fromSDK(object) {
        return {
            params: object.params ? Params.fromSDK(object.params) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
        return obj;
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
            typeUrl: "/ibc.applications.transfer.v1.QueryParamsResponse",
            value: QueryParamsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDenomHashRequest() {
    return {
        trace: ""
    };
}
export const QueryDenomHashRequest = {
    typeUrl: "/ibc.applications.transfer.v1.QueryDenomHashRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.trace !== "") {
            writer.uint32(10).string(message.trace);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomHashRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.trace = reader.string();
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
            trace: isSet(object.trace) ? String(object.trace) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.trace !== undefined && (obj.trace = message.trace);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryDenomHashRequest();
        message.trace = object.trace ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            trace: object?.trace
        };
    },
    toSDK(message) {
        const obj = {};
        obj.trace = message.trace;
        return obj;
    },
    fromAmino(object) {
        return {
            trace: object.trace
        };
    },
    toAmino(message) {
        const obj = {};
        obj.trace = message.trace;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDenomHashRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryDenomHashRequest",
            value: QueryDenomHashRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryDenomHashRequest.decode(message.value);
    },
    toProto(message) {
        return QueryDenomHashRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.transfer.v1.QueryDenomHashRequest",
            value: QueryDenomHashRequest.encode(message).finish()
        };
    }
};
function createBaseQueryDenomHashResponse() {
    return {
        hash: ""
    };
}
export const QueryDenomHashResponse = {
    typeUrl: "/ibc.applications.transfer.v1.QueryDenomHashResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.hash !== "") {
            writer.uint32(10).string(message.hash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomHashResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hash = reader.string();
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
            hash: isSet(object.hash) ? String(object.hash) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.hash !== undefined && (obj.hash = message.hash);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryDenomHashResponse();
        message.hash = object.hash ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            hash: object?.hash
        };
    },
    toSDK(message) {
        const obj = {};
        obj.hash = message.hash;
        return obj;
    },
    fromAmino(object) {
        return {
            hash: object.hash
        };
    },
    toAmino(message) {
        const obj = {};
        obj.hash = message.hash;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDenomHashResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryDenomHashResponse",
            value: QueryDenomHashResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryDenomHashResponse.decode(message.value);
    },
    toProto(message) {
        return QueryDenomHashResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.transfer.v1.QueryDenomHashResponse",
            value: QueryDenomHashResponse.encode(message).finish()
        };
    }
};
function createBaseQueryEscrowAddressRequest() {
    return {
        port_id: "",
        channel_id: ""
    };
}
export const QueryEscrowAddressRequest = {
    typeUrl: "/ibc.applications.transfer.v1.QueryEscrowAddressRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.port_id !== "") {
            writer.uint32(10).string(message.port_id);
        }
        if (message.channel_id !== "") {
            writer.uint32(18).string(message.channel_id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryEscrowAddressRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.port_id = reader.string();
                    break;
                case 2:
                    message.channel_id = reader.string();
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
            port_id: isSet(object.port_id) ? String(object.port_id) : "",
            channel_id: isSet(object.channel_id) ? String(object.channel_id) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.port_id !== undefined && (obj.port_id = message.port_id);
        message.channel_id !== undefined && (obj.channel_id = message.channel_id);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryEscrowAddressRequest();
        message.port_id = object.port_id ?? "";
        message.channel_id = object.channel_id ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            port_id: object?.port_id,
            channel_id: object?.channel_id
        };
    },
    toSDK(message) {
        const obj = {};
        obj.port_id = message.port_id;
        obj.channel_id = message.channel_id;
        return obj;
    },
    fromAmino(object) {
        return {
            port_id: object.port_id,
            channel_id: object.channel_id
        };
    },
    toAmino(message) {
        const obj = {};
        obj.port_id = message.port_id;
        obj.channel_id = message.channel_id;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryEscrowAddressRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryEscrowAddressRequest",
            value: QueryEscrowAddressRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryEscrowAddressRequest.decode(message.value);
    },
    toProto(message) {
        return QueryEscrowAddressRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.transfer.v1.QueryEscrowAddressRequest",
            value: QueryEscrowAddressRequest.encode(message).finish()
        };
    }
};
function createBaseQueryEscrowAddressResponse() {
    return {
        escrow_address: ""
    };
}
export const QueryEscrowAddressResponse = {
    typeUrl: "/ibc.applications.transfer.v1.QueryEscrowAddressResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.escrow_address !== "") {
            writer.uint32(10).string(message.escrow_address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryEscrowAddressResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.escrow_address = reader.string();
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
            escrow_address: isSet(object.escrow_address) ? String(object.escrow_address) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.escrow_address !== undefined && (obj.escrow_address = message.escrow_address);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryEscrowAddressResponse();
        message.escrow_address = object.escrow_address ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            escrow_address: object?.escrow_address
        };
    },
    toSDK(message) {
        const obj = {};
        obj.escrow_address = message.escrow_address;
        return obj;
    },
    fromAmino(object) {
        return {
            escrow_address: object.escrow_address
        };
    },
    toAmino(message) {
        const obj = {};
        obj.escrow_address = message.escrow_address;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryEscrowAddressResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryEscrowAddressResponse",
            value: QueryEscrowAddressResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryEscrowAddressResponse.decode(message.value);
    },
    toProto(message) {
        return QueryEscrowAddressResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.transfer.v1.QueryEscrowAddressResponse",
            value: QueryEscrowAddressResponse.encode(message).finish()
        };
    }
};
function createBaseQueryTotalEscrowForDenomRequest() {
    return {
        denom: ""
    };
}
export const QueryTotalEscrowForDenomRequest = {
    typeUrl: "/ibc.applications.transfer.v1.QueryTotalEscrowForDenomRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTotalEscrowForDenomRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
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
            denom: isSet(object.denom) ? String(object.denom) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryTotalEscrowForDenomRequest();
        message.denom = object.denom ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            denom: object?.denom
        };
    },
    toSDK(message) {
        const obj = {};
        obj.denom = message.denom;
        return obj;
    },
    fromAmino(object) {
        return {
            denom: object.denom
        };
    },
    toAmino(message) {
        const obj = {};
        obj.denom = message.denom;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryTotalEscrowForDenomRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryTotalEscrowForDenomRequest",
            value: QueryTotalEscrowForDenomRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryTotalEscrowForDenomRequest.decode(message.value);
    },
    toProto(message) {
        return QueryTotalEscrowForDenomRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.transfer.v1.QueryTotalEscrowForDenomRequest",
            value: QueryTotalEscrowForDenomRequest.encode(message).finish()
        };
    }
};
function createBaseQueryTotalEscrowForDenomResponse() {
    return {
        amount: Coin.fromPartial({})
    };
}
export const QueryTotalEscrowForDenomResponse = {
    typeUrl: "/ibc.applications.transfer.v1.QueryTotalEscrowForDenomResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.amount !== undefined) {
            Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTotalEscrowForDenomResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount = Coin.decode(reader, reader.uint32());
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
            amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryTotalEscrowForDenomResponse();
        message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            amount: object.amount ? Coin.fromSDK(object.amount) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.amount !== undefined && (obj.amount = message.amount ? Coin.toSDK(message.amount) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            amount: object?.amount ? Coin.fromAmino(object.amount) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryTotalEscrowForDenomResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryTotalEscrowForDenomResponse",
            value: QueryTotalEscrowForDenomResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryTotalEscrowForDenomResponse.decode(message.value);
    },
    toProto(message) {
        return QueryTotalEscrowForDenomResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.transfer.v1.QueryTotalEscrowForDenomResponse",
            value: QueryTotalEscrowForDenomResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=query.js.map
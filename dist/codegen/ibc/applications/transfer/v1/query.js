"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryTotalEscrowForDenomResponse = exports.QueryTotalEscrowForDenomRequest = exports.QueryEscrowAddressResponse = exports.QueryEscrowAddressRequest = exports.QueryDenomHashResponse = exports.QueryDenomHashRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.QueryDenomTracesResponse = exports.QueryDenomTracesRequest = exports.QueryDenomTraceResponse = exports.QueryDenomTraceRequest = exports.protobufPackage = void 0;
//@ts-nocheck
const pagination_1 = require("../../../../cosmos/base/query/v1beta1/pagination");
const transfer_1 = require("./transfer");
const coin_1 = require("../../../../cosmos/base/v1beta1/coin");
const binary_1 = require("../../../../binary");
const helpers_1 = require("../../../../helpers");
exports.protobufPackage = "ibc.applications.transfer.v1";
function createBaseQueryDenomTraceRequest() {
    return {
        hash: ""
    };
}
exports.QueryDenomTraceRequest = {
    typeUrl: "/ibc.applications.transfer.v1.QueryDenomTraceRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.hash !== "") {
            writer.uint32(10).string(message.hash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
            hash: (0, helpers_1.isSet)(object.hash) ? String(object.hash) : ""
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
        return exports.QueryDenomTraceRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryDenomTraceRequest",
            value: exports.QueryDenomTraceRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryDenomTraceRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDenomTraceRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.transfer.v1.QueryDenomTraceRequest",
            value: exports.QueryDenomTraceRequest.encode(message).finish()
        };
    }
};
function createBaseQueryDenomTraceResponse() {
    return {
        denom_trace: undefined
    };
}
exports.QueryDenomTraceResponse = {
    typeUrl: "/ibc.applications.transfer.v1.QueryDenomTraceResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.denom_trace !== undefined) {
            transfer_1.DenomTrace.encode(message.denom_trace, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomTraceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom_trace = transfer_1.DenomTrace.decode(reader, reader.uint32());
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
            denom_trace: (0, helpers_1.isSet)(object.denom_trace) ? transfer_1.DenomTrace.fromJSON(object.denom_trace) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.denom_trace !== undefined && (obj.denom_trace = message.denom_trace ? transfer_1.DenomTrace.toJSON(message.denom_trace) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryDenomTraceResponse();
        message.denom_trace = object.denom_trace !== undefined && object.denom_trace !== null ? transfer_1.DenomTrace.fromPartial(object.denom_trace) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            denom_trace: object?.denom_trace ? transfer_1.DenomTrace.fromAmino(object.denom_trace) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.denom_trace = message.denom_trace ? transfer_1.DenomTrace.toAmino(message.denom_trace) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryDenomTraceResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryDenomTraceResponse",
            value: exports.QueryDenomTraceResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryDenomTraceResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDenomTraceResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.transfer.v1.QueryDenomTraceResponse",
            value: exports.QueryDenomTraceResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDenomTracesRequest() {
    return {
        pagination: undefined
    };
}
exports.QueryDenomTracesRequest = {
    typeUrl: "/ibc.applications.transfer.v1.QueryDenomTracesRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomTracesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryDenomTracesRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            pagination: object?.pagination ? pagination_1.PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryDenomTracesRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryDenomTracesRequest",
            value: exports.QueryDenomTracesRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryDenomTracesRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDenomTracesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.transfer.v1.QueryDenomTracesRequest",
            value: exports.QueryDenomTracesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryDenomTracesResponse() {
    return {
        denom_traces: [],
        pagination: undefined
    };
}
exports.QueryDenomTracesResponse = {
    typeUrl: "/ibc.applications.transfer.v1.QueryDenomTracesResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.denom_traces) {
            transfer_1.DenomTrace.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomTracesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom_traces.push(transfer_1.DenomTrace.decode(reader, reader.uint32()));
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
            denom_traces: Array.isArray(object?.denom_traces) ? object.denom_traces.map((e) => transfer_1.DenomTrace.fromJSON(e)) : [],
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.denom_traces) {
            obj.denom_traces = message.denom_traces.map(e => e ? transfer_1.DenomTrace.toJSON(e) : undefined);
        }
        else {
            obj.denom_traces = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryDenomTracesResponse();
        message.denom_traces = object.denom_traces?.map(e => transfer_1.DenomTrace.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            denom_traces: Array.isArray(object?.denom_traces) ? object.denom_traces.map((e) => transfer_1.DenomTrace.fromAmino(e)) : [],
            pagination: object?.pagination ? pagination_1.PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.denom_traces) {
            obj.denom_traces = message.denom_traces.map(e => e ? transfer_1.DenomTrace.toAmino(e) : undefined);
        }
        else {
            obj.denom_traces = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryDenomTracesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryDenomTracesResponse",
            value: exports.QueryDenomTracesResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryDenomTracesResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDenomTracesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.transfer.v1.QueryDenomTracesResponse",
            value: exports.QueryDenomTracesResponse.encode(message).finish()
        };
    }
};
function createBaseQueryParamsRequest() {
    return {};
}
exports.QueryParamsRequest = {
    typeUrl: "/ibc.applications.transfer.v1.QueryParamsRequest",
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
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryParamsRequest",
            value: exports.QueryParamsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryParamsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.transfer.v1.QueryParamsRequest",
            value: exports.QueryParamsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryParamsResponse() {
    return {
        params: undefined
    };
}
exports.QueryParamsResponse = {
    typeUrl: "/ibc.applications.transfer.v1.QueryParamsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            transfer_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
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
                    message.params = transfer_1.Params.decode(reader, reader.uint32());
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
            params: (0, helpers_1.isSet)(object.params) ? transfer_1.Params.fromJSON(object.params) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? transfer_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        message.params = object.params !== undefined && object.params !== null ? transfer_1.Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            params: object?.params ? transfer_1.Params.fromAmino(object.params) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? transfer_1.Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryParamsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryParamsResponse",
            value: exports.QueryParamsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryParamsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.transfer.v1.QueryParamsResponse",
            value: exports.QueryParamsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDenomHashRequest() {
    return {
        trace: ""
    };
}
exports.QueryDenomHashRequest = {
    typeUrl: "/ibc.applications.transfer.v1.QueryDenomHashRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.trace !== "") {
            writer.uint32(10).string(message.trace);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
            trace: (0, helpers_1.isSet)(object.trace) ? String(object.trace) : ""
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
        return exports.QueryDenomHashRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryDenomHashRequest",
            value: exports.QueryDenomHashRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryDenomHashRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDenomHashRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.transfer.v1.QueryDenomHashRequest",
            value: exports.QueryDenomHashRequest.encode(message).finish()
        };
    }
};
function createBaseQueryDenomHashResponse() {
    return {
        hash: ""
    };
}
exports.QueryDenomHashResponse = {
    typeUrl: "/ibc.applications.transfer.v1.QueryDenomHashResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.hash !== "") {
            writer.uint32(10).string(message.hash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
            hash: (0, helpers_1.isSet)(object.hash) ? String(object.hash) : ""
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
        return exports.QueryDenomHashResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryDenomHashResponse",
            value: exports.QueryDenomHashResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryDenomHashResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDenomHashResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.transfer.v1.QueryDenomHashResponse",
            value: exports.QueryDenomHashResponse.encode(message).finish()
        };
    }
};
function createBaseQueryEscrowAddressRequest() {
    return {
        port_id: "",
        channel_id: ""
    };
}
exports.QueryEscrowAddressRequest = {
    typeUrl: "/ibc.applications.transfer.v1.QueryEscrowAddressRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.port_id !== "") {
            writer.uint32(10).string(message.port_id);
        }
        if (message.channel_id !== "") {
            writer.uint32(18).string(message.channel_id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
            port_id: (0, helpers_1.isSet)(object.port_id) ? String(object.port_id) : "",
            channel_id: (0, helpers_1.isSet)(object.channel_id) ? String(object.channel_id) : ""
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
        return exports.QueryEscrowAddressRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryEscrowAddressRequest",
            value: exports.QueryEscrowAddressRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryEscrowAddressRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryEscrowAddressRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.transfer.v1.QueryEscrowAddressRequest",
            value: exports.QueryEscrowAddressRequest.encode(message).finish()
        };
    }
};
function createBaseQueryEscrowAddressResponse() {
    return {
        escrow_address: ""
    };
}
exports.QueryEscrowAddressResponse = {
    typeUrl: "/ibc.applications.transfer.v1.QueryEscrowAddressResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.escrow_address !== "") {
            writer.uint32(10).string(message.escrow_address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
            escrow_address: (0, helpers_1.isSet)(object.escrow_address) ? String(object.escrow_address) : ""
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
        return exports.QueryEscrowAddressResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryEscrowAddressResponse",
            value: exports.QueryEscrowAddressResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryEscrowAddressResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryEscrowAddressResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.transfer.v1.QueryEscrowAddressResponse",
            value: exports.QueryEscrowAddressResponse.encode(message).finish()
        };
    }
};
function createBaseQueryTotalEscrowForDenomRequest() {
    return {
        denom: ""
    };
}
exports.QueryTotalEscrowForDenomRequest = {
    typeUrl: "/ibc.applications.transfer.v1.QueryTotalEscrowForDenomRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
            denom: (0, helpers_1.isSet)(object.denom) ? String(object.denom) : ""
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
        return exports.QueryTotalEscrowForDenomRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryTotalEscrowForDenomRequest",
            value: exports.QueryTotalEscrowForDenomRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryTotalEscrowForDenomRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryTotalEscrowForDenomRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.transfer.v1.QueryTotalEscrowForDenomRequest",
            value: exports.QueryTotalEscrowForDenomRequest.encode(message).finish()
        };
    }
};
function createBaseQueryTotalEscrowForDenomResponse() {
    return {
        amount: coin_1.Coin.fromPartial({})
    };
}
exports.QueryTotalEscrowForDenomResponse = {
    typeUrl: "/ibc.applications.transfer.v1.QueryTotalEscrowForDenomResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.amount !== undefined) {
            coin_1.Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTotalEscrowForDenomResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount = coin_1.Coin.decode(reader, reader.uint32());
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
            amount: (0, helpers_1.isSet)(object.amount) ? coin_1.Coin.fromJSON(object.amount) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.amount !== undefined && (obj.amount = message.amount ? coin_1.Coin.toJSON(message.amount) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryTotalEscrowForDenomResponse();
        message.amount = object.amount !== undefined && object.amount !== null ? coin_1.Coin.fromPartial(object.amount) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            amount: object?.amount ? coin_1.Coin.fromAmino(object.amount) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.amount = message.amount ? coin_1.Coin.toAmino(message.amount) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryTotalEscrowForDenomResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryTotalEscrowForDenomResponse",
            value: exports.QueryTotalEscrowForDenomResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryTotalEscrowForDenomResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryTotalEscrowForDenomResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.transfer.v1.QueryTotalEscrowForDenomResponse",
            value: exports.QueryTotalEscrowForDenomResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=query.js.map
//@ts-nocheck
import { Tx } from "./tx";
import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { TxResponse, GasInfo, Result } from "../../base/abci/v1beta1/abci";
import { BlockID } from "../../../tendermint/types/types";
import { Block } from "../../../tendermint/types/block";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
export const protobufPackage = "cosmos.tx.v1beta1";
/** OrderBy defines the sorting order */
export var OrderBy;
(function (OrderBy) {
    /**
     * ORDER_BY_UNSPECIFIED - ORDER_BY_UNSPECIFIED specifies an unknown sorting order. OrderBy defaults
     * to ASC in this case.
     */
    OrderBy[OrderBy["ORDER_BY_UNSPECIFIED"] = 0] = "ORDER_BY_UNSPECIFIED";
    /** ORDER_BY_ASC - ORDER_BY_ASC defines ascending order */
    OrderBy[OrderBy["ORDER_BY_ASC"] = 1] = "ORDER_BY_ASC";
    /** ORDER_BY_DESC - ORDER_BY_DESC defines descending order */
    OrderBy[OrderBy["ORDER_BY_DESC"] = 2] = "ORDER_BY_DESC";
    OrderBy[OrderBy["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(OrderBy || (OrderBy = {}));
export const OrderBySDKType = OrderBy;
export const OrderByAmino = OrderBy;
export function orderByFromJSON(object) {
    switch (object) {
        case 0:
        case "ORDER_BY_UNSPECIFIED":
            return OrderBy.ORDER_BY_UNSPECIFIED;
        case 1:
        case "ORDER_BY_ASC":
            return OrderBy.ORDER_BY_ASC;
        case 2:
        case "ORDER_BY_DESC":
            return OrderBy.ORDER_BY_DESC;
        case -1:
        case "UNRECOGNIZED":
        default:
            return OrderBy.UNRECOGNIZED;
    }
}
export function orderByToJSON(object) {
    switch (object) {
        case OrderBy.ORDER_BY_UNSPECIFIED:
            return "ORDER_BY_UNSPECIFIED";
        case OrderBy.ORDER_BY_ASC:
            return "ORDER_BY_ASC";
        case OrderBy.ORDER_BY_DESC:
            return "ORDER_BY_DESC";
        case OrderBy.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
/**
 * BroadcastMode specifies the broadcast mode for the TxService.Broadcast RPC
 * method.
 */
export var BroadcastMode;
(function (BroadcastMode) {
    /** BROADCAST_MODE_UNSPECIFIED - zero-value for mode ordering */
    BroadcastMode[BroadcastMode["BROADCAST_MODE_UNSPECIFIED"] = 0] = "BROADCAST_MODE_UNSPECIFIED";
    /**
     * BROADCAST_MODE_BLOCK - DEPRECATED: use BROADCAST_MODE_SYNC instead,
     * BROADCAST_MODE_BLOCK is not supported by the SDK from v0.47.x onwards.
     */
    BroadcastMode[BroadcastMode["BROADCAST_MODE_BLOCK"] = 1] = "BROADCAST_MODE_BLOCK";
    /**
     * BROADCAST_MODE_SYNC - BROADCAST_MODE_SYNC defines a tx broadcasting mode where the client waits
     * for a CheckTx execution response only.
     */
    BroadcastMode[BroadcastMode["BROADCAST_MODE_SYNC"] = 2] = "BROADCAST_MODE_SYNC";
    /**
     * BROADCAST_MODE_ASYNC - BROADCAST_MODE_ASYNC defines a tx broadcasting mode where the client
     * returns immediately.
     */
    BroadcastMode[BroadcastMode["BROADCAST_MODE_ASYNC"] = 3] = "BROADCAST_MODE_ASYNC";
    BroadcastMode[BroadcastMode["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(BroadcastMode || (BroadcastMode = {}));
export const BroadcastModeSDKType = BroadcastMode;
export const BroadcastModeAmino = BroadcastMode;
export function broadcastModeFromJSON(object) {
    switch (object) {
        case 0:
        case "BROADCAST_MODE_UNSPECIFIED":
            return BroadcastMode.BROADCAST_MODE_UNSPECIFIED;
        case 1:
        case "BROADCAST_MODE_BLOCK":
            return BroadcastMode.BROADCAST_MODE_BLOCK;
        case 2:
        case "BROADCAST_MODE_SYNC":
            return BroadcastMode.BROADCAST_MODE_SYNC;
        case 3:
        case "BROADCAST_MODE_ASYNC":
            return BroadcastMode.BROADCAST_MODE_ASYNC;
        case -1:
        case "UNRECOGNIZED":
        default:
            return BroadcastMode.UNRECOGNIZED;
    }
}
export function broadcastModeToJSON(object) {
    switch (object) {
        case BroadcastMode.BROADCAST_MODE_UNSPECIFIED:
            return "BROADCAST_MODE_UNSPECIFIED";
        case BroadcastMode.BROADCAST_MODE_BLOCK:
            return "BROADCAST_MODE_BLOCK";
        case BroadcastMode.BROADCAST_MODE_SYNC:
            return "BROADCAST_MODE_SYNC";
        case BroadcastMode.BROADCAST_MODE_ASYNC:
            return "BROADCAST_MODE_ASYNC";
        case BroadcastMode.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseGetTxsEventRequest() {
    return {
        events: [],
        pagination: undefined,
        order_by: 0,
        page: BigInt(0),
        limit: BigInt(0),
        query: ""
    };
}
export const GetTxsEventRequest = {
    typeUrl: "/cosmos.tx.v1beta1.GetTxsEventRequest",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.events) {
            writer.uint32(10).string(v);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        if (message.order_by !== 0) {
            writer.uint32(24).int32(message.order_by);
        }
        if (message.page !== BigInt(0)) {
            writer.uint32(32).uint64(message.page);
        }
        if (message.limit !== BigInt(0)) {
            writer.uint32(40).uint64(message.limit);
        }
        if (message.query !== "") {
            writer.uint32(50).string(message.query);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetTxsEventRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.events.push(reader.string());
                    break;
                case 2:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.order_by = reader.int32();
                    break;
                case 4:
                    message.page = reader.uint64();
                    break;
                case 5:
                    message.limit = reader.uint64();
                    break;
                case 6:
                    message.query = reader.string();
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
            events: Array.isArray(object?.events) ? object.events.map((e) => String(e)) : [],
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
            order_by: isSet(object.order_by) ? orderByFromJSON(object.order_by) : -1,
            page: isSet(object.page) ? BigInt(object.page.toString()) : BigInt(0),
            limit: isSet(object.limit) ? BigInt(object.limit.toString()) : BigInt(0),
            query: isSet(object.query) ? String(object.query) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.events) {
            obj.events = message.events.map(e => e);
        }
        else {
            obj.events = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        message.order_by !== undefined && (obj.order_by = orderByToJSON(message.order_by));
        message.page !== undefined && (obj.page = (message.page || BigInt(0)).toString());
        message.limit !== undefined && (obj.limit = (message.limit || BigInt(0)).toString());
        message.query !== undefined && (obj.query = message.query);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetTxsEventRequest();
        message.events = object.events?.map(e => e) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        message.order_by = object.order_by ?? 0;
        message.page = object.page !== undefined && object.page !== null ? BigInt(object.page.toString()) : BigInt(0);
        message.limit = object.limit !== undefined && object.limit !== null ? BigInt(object.limit.toString()) : BigInt(0);
        message.query = object.query ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseGetTxsEventRequest();
        message.events = object.events?.map(e => e) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        if (object.order_by !== undefined && object.order_by !== null) {
            message.order_by = orderByFromJSON(object.order_by);
        }
        if (object.page !== undefined && object.page !== null) {
            message.page = BigInt(object.page);
        }
        if (object.limit !== undefined && object.limit !== null) {
            message.limit = BigInt(object.limit);
        }
        if (object.query !== undefined && object.query !== null) {
            message.query = object.query;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.events) {
            obj.events = message.events.map(e => e);
        }
        else {
            obj.events = [];
        }
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        obj.order_by = message.order_by;
        obj.page = message.page ? message.page.toString() : undefined;
        obj.limit = message.limit ? message.limit.toString() : undefined;
        obj.query = message.query;
        return obj;
    },
    fromAminoMsg(object) {
        return GetTxsEventRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetTxsEventRequest",
            value: GetTxsEventRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GetTxsEventRequest.decode(message.value);
    },
    toProto(message) {
        return GetTxsEventRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.GetTxsEventRequest",
            value: GetTxsEventRequest.encode(message).finish()
        };
    }
};
function createBaseGetTxsEventResponse() {
    return {
        txs: [],
        tx_responses: [],
        pagination: undefined,
        total: BigInt(0)
    };
}
export const GetTxsEventResponse = {
    typeUrl: "/cosmos.tx.v1beta1.GetTxsEventResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.txs) {
            Tx.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.tx_responses) {
            TxResponse.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        if (message.total !== BigInt(0)) {
            writer.uint32(32).uint64(message.total);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetTxsEventResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.txs.push(Tx.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.tx_responses.push(TxResponse.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.total = reader.uint64();
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
            txs: Array.isArray(object?.txs) ? object.txs.map((e) => Tx.fromJSON(e)) : [],
            tx_responses: Array.isArray(object?.tx_responses) ? object.tx_responses.map((e) => TxResponse.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
            total: isSet(object.total) ? BigInt(object.total.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.txs) {
            obj.txs = message.txs.map(e => e ? Tx.toJSON(e) : undefined);
        }
        else {
            obj.txs = [];
        }
        if (message.tx_responses) {
            obj.tx_responses = message.tx_responses.map(e => e ? TxResponse.toJSON(e) : undefined);
        }
        else {
            obj.tx_responses = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        message.total !== undefined && (obj.total = (message.total || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetTxsEventResponse();
        message.txs = object.txs?.map(e => Tx.fromPartial(e)) || [];
        message.tx_responses = object.tx_responses?.map(e => TxResponse.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        message.total = object.total !== undefined && object.total !== null ? BigInt(object.total.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseGetTxsEventResponse();
        message.txs = object.txs?.map(e => Tx.fromAmino(e)) || [];
        message.tx_responses = object.tx_responses?.map(e => TxResponse.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        if (object.total !== undefined && object.total !== null) {
            message.total = BigInt(object.total);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.txs) {
            obj.txs = message.txs.map(e => e ? Tx.toAmino(e) : undefined);
        }
        else {
            obj.txs = [];
        }
        if (message.tx_responses) {
            obj.tx_responses = message.tx_responses.map(e => e ? TxResponse.toAmino(e) : undefined);
        }
        else {
            obj.tx_responses = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        obj.total = message.total ? message.total.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return GetTxsEventResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetTxsEventResponse",
            value: GetTxsEventResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GetTxsEventResponse.decode(message.value);
    },
    toProto(message) {
        return GetTxsEventResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.GetTxsEventResponse",
            value: GetTxsEventResponse.encode(message).finish()
        };
    }
};
function createBaseBroadcastTxRequest() {
    return {
        tx_bytes: new Uint8Array(),
        mode: 0
    };
}
export const BroadcastTxRequest = {
    typeUrl: "/cosmos.tx.v1beta1.BroadcastTxRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.tx_bytes.length !== 0) {
            writer.uint32(10).bytes(message.tx_bytes);
        }
        if (message.mode !== 0) {
            writer.uint32(16).int32(message.mode);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBroadcastTxRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tx_bytes = reader.bytes();
                    break;
                case 2:
                    message.mode = reader.int32();
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
            tx_bytes: isSet(object.tx_bytes) ? bytesFromBase64(object.tx_bytes) : new Uint8Array(),
            mode: isSet(object.mode) ? broadcastModeFromJSON(object.mode) : -1
        };
    },
    toJSON(message) {
        const obj = {};
        message.tx_bytes !== undefined && (obj.tx_bytes = base64FromBytes(message.tx_bytes !== undefined ? message.tx_bytes : new Uint8Array()));
        message.mode !== undefined && (obj.mode = broadcastModeToJSON(message.mode));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseBroadcastTxRequest();
        message.tx_bytes = object.tx_bytes ?? new Uint8Array();
        message.mode = object.mode ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseBroadcastTxRequest();
        if (object.tx_bytes !== undefined && object.tx_bytes !== null) {
            message.tx_bytes = bytesFromBase64(object.tx_bytes);
        }
        if (object.mode !== undefined && object.mode !== null) {
            message.mode = broadcastModeFromJSON(object.mode);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.tx_bytes = message.tx_bytes ? base64FromBytes(message.tx_bytes) : undefined;
        obj.mode = message.mode;
        return obj;
    },
    fromAminoMsg(object) {
        return BroadcastTxRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/BroadcastTxRequest",
            value: BroadcastTxRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return BroadcastTxRequest.decode(message.value);
    },
    toProto(message) {
        return BroadcastTxRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.BroadcastTxRequest",
            value: BroadcastTxRequest.encode(message).finish()
        };
    }
};
function createBaseBroadcastTxResponse() {
    return {
        tx_response: undefined
    };
}
export const BroadcastTxResponse = {
    typeUrl: "/cosmos.tx.v1beta1.BroadcastTxResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.tx_response !== undefined) {
            TxResponse.encode(message.tx_response, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBroadcastTxResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tx_response = TxResponse.decode(reader, reader.uint32());
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
            tx_response: isSet(object.tx_response) ? TxResponse.fromJSON(object.tx_response) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.tx_response !== undefined && (obj.tx_response = message.tx_response ? TxResponse.toJSON(message.tx_response) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseBroadcastTxResponse();
        message.tx_response = object.tx_response !== undefined && object.tx_response !== null ? TxResponse.fromPartial(object.tx_response) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseBroadcastTxResponse();
        if (object.tx_response !== undefined && object.tx_response !== null) {
            message.tx_response = TxResponse.fromAmino(object.tx_response);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.tx_response = message.tx_response ? TxResponse.toAmino(message.tx_response) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return BroadcastTxResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/BroadcastTxResponse",
            value: BroadcastTxResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return BroadcastTxResponse.decode(message.value);
    },
    toProto(message) {
        return BroadcastTxResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.BroadcastTxResponse",
            value: BroadcastTxResponse.encode(message).finish()
        };
    }
};
function createBaseSimulateRequest() {
    return {
        tx: undefined,
        tx_bytes: new Uint8Array()
    };
}
export const SimulateRequest = {
    typeUrl: "/cosmos.tx.v1beta1.SimulateRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.tx !== undefined) {
            Tx.encode(message.tx, writer.uint32(10).fork()).ldelim();
        }
        if (message.tx_bytes.length !== 0) {
            writer.uint32(18).bytes(message.tx_bytes);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSimulateRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tx = Tx.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.tx_bytes = reader.bytes();
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
            tx: isSet(object.tx) ? Tx.fromJSON(object.tx) : undefined,
            tx_bytes: isSet(object.tx_bytes) ? bytesFromBase64(object.tx_bytes) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.tx !== undefined && (obj.tx = message.tx ? Tx.toJSON(message.tx) : undefined);
        message.tx_bytes !== undefined && (obj.tx_bytes = base64FromBytes(message.tx_bytes !== undefined ? message.tx_bytes : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSimulateRequest();
        message.tx = object.tx !== undefined && object.tx !== null ? Tx.fromPartial(object.tx) : undefined;
        message.tx_bytes = object.tx_bytes ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseSimulateRequest();
        if (object.tx !== undefined && object.tx !== null) {
            message.tx = Tx.fromAmino(object.tx);
        }
        if (object.tx_bytes !== undefined && object.tx_bytes !== null) {
            message.tx_bytes = bytesFromBase64(object.tx_bytes);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.tx = message.tx ? Tx.toAmino(message.tx) : undefined;
        obj.tx_bytes = message.tx_bytes ? base64FromBytes(message.tx_bytes) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return SimulateRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/SimulateRequest",
            value: SimulateRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return SimulateRequest.decode(message.value);
    },
    toProto(message) {
        return SimulateRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.SimulateRequest",
            value: SimulateRequest.encode(message).finish()
        };
    }
};
function createBaseSimulateResponse() {
    return {
        gas_info: undefined,
        result: undefined
    };
}
export const SimulateResponse = {
    typeUrl: "/cosmos.tx.v1beta1.SimulateResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.gas_info !== undefined) {
            GasInfo.encode(message.gas_info, writer.uint32(10).fork()).ldelim();
        }
        if (message.result !== undefined) {
            Result.encode(message.result, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSimulateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.gas_info = GasInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.result = Result.decode(reader, reader.uint32());
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
            gas_info: isSet(object.gas_info) ? GasInfo.fromJSON(object.gas_info) : undefined,
            result: isSet(object.result) ? Result.fromJSON(object.result) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.gas_info !== undefined && (obj.gas_info = message.gas_info ? GasInfo.toJSON(message.gas_info) : undefined);
        message.result !== undefined && (obj.result = message.result ? Result.toJSON(message.result) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSimulateResponse();
        message.gas_info = object.gas_info !== undefined && object.gas_info !== null ? GasInfo.fromPartial(object.gas_info) : undefined;
        message.result = object.result !== undefined && object.result !== null ? Result.fromPartial(object.result) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseSimulateResponse();
        if (object.gas_info !== undefined && object.gas_info !== null) {
            message.gas_info = GasInfo.fromAmino(object.gas_info);
        }
        if (object.result !== undefined && object.result !== null) {
            message.result = Result.fromAmino(object.result);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.gas_info = message.gas_info ? GasInfo.toAmino(message.gas_info) : undefined;
        obj.result = message.result ? Result.toAmino(message.result) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return SimulateResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/SimulateResponse",
            value: SimulateResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return SimulateResponse.decode(message.value);
    },
    toProto(message) {
        return SimulateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.SimulateResponse",
            value: SimulateResponse.encode(message).finish()
        };
    }
};
function createBaseGetTxRequest() {
    return {
        hash: ""
    };
}
export const GetTxRequest = {
    typeUrl: "/cosmos.tx.v1beta1.GetTxRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.hash !== "") {
            writer.uint32(10).string(message.hash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetTxRequest();
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
        const message = createBaseGetTxRequest();
        message.hash = object.hash ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseGetTxRequest();
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = object.hash;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.hash = message.hash;
        return obj;
    },
    fromAminoMsg(object) {
        return GetTxRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetTxRequest",
            value: GetTxRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GetTxRequest.decode(message.value);
    },
    toProto(message) {
        return GetTxRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.GetTxRequest",
            value: GetTxRequest.encode(message).finish()
        };
    }
};
function createBaseGetTxResponse() {
    return {
        tx: undefined,
        tx_response: undefined
    };
}
export const GetTxResponse = {
    typeUrl: "/cosmos.tx.v1beta1.GetTxResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.tx !== undefined) {
            Tx.encode(message.tx, writer.uint32(10).fork()).ldelim();
        }
        if (message.tx_response !== undefined) {
            TxResponse.encode(message.tx_response, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetTxResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tx = Tx.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.tx_response = TxResponse.decode(reader, reader.uint32());
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
            tx: isSet(object.tx) ? Tx.fromJSON(object.tx) : undefined,
            tx_response: isSet(object.tx_response) ? TxResponse.fromJSON(object.tx_response) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.tx !== undefined && (obj.tx = message.tx ? Tx.toJSON(message.tx) : undefined);
        message.tx_response !== undefined && (obj.tx_response = message.tx_response ? TxResponse.toJSON(message.tx_response) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetTxResponse();
        message.tx = object.tx !== undefined && object.tx !== null ? Tx.fromPartial(object.tx) : undefined;
        message.tx_response = object.tx_response !== undefined && object.tx_response !== null ? TxResponse.fromPartial(object.tx_response) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseGetTxResponse();
        if (object.tx !== undefined && object.tx !== null) {
            message.tx = Tx.fromAmino(object.tx);
        }
        if (object.tx_response !== undefined && object.tx_response !== null) {
            message.tx_response = TxResponse.fromAmino(object.tx_response);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.tx = message.tx ? Tx.toAmino(message.tx) : undefined;
        obj.tx_response = message.tx_response ? TxResponse.toAmino(message.tx_response) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return GetTxResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetTxResponse",
            value: GetTxResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GetTxResponse.decode(message.value);
    },
    toProto(message) {
        return GetTxResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.GetTxResponse",
            value: GetTxResponse.encode(message).finish()
        };
    }
};
function createBaseGetBlockWithTxsRequest() {
    return {
        height: BigInt(0),
        pagination: undefined
    };
}
export const GetBlockWithTxsRequest = {
    typeUrl: "/cosmos.tx.v1beta1.GetBlockWithTxsRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.height !== BigInt(0)) {
            writer.uint32(8).int64(message.height);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetBlockWithTxsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = reader.int64();
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
            height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0),
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetBlockWithTxsRequest();
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseGetBlockWithTxsRequest();
        if (object.height !== undefined && object.height !== null) {
            message.height = BigInt(object.height);
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.height = message.height ? message.height.toString() : undefined;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return GetBlockWithTxsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetBlockWithTxsRequest",
            value: GetBlockWithTxsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GetBlockWithTxsRequest.decode(message.value);
    },
    toProto(message) {
        return GetBlockWithTxsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.GetBlockWithTxsRequest",
            value: GetBlockWithTxsRequest.encode(message).finish()
        };
    }
};
function createBaseGetBlockWithTxsResponse() {
    return {
        txs: [],
        block_id: undefined,
        block: undefined,
        pagination: undefined
    };
}
export const GetBlockWithTxsResponse = {
    typeUrl: "/cosmos.tx.v1beta1.GetBlockWithTxsResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.txs) {
            Tx.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.block_id !== undefined) {
            BlockID.encode(message.block_id, writer.uint32(18).fork()).ldelim();
        }
        if (message.block !== undefined) {
            Block.encode(message.block, writer.uint32(26).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetBlockWithTxsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.txs.push(Tx.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.block_id = BlockID.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.block = Block.decode(reader, reader.uint32());
                    break;
                case 4:
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
            txs: Array.isArray(object?.txs) ? object.txs.map((e) => Tx.fromJSON(e)) : [],
            block_id: isSet(object.block_id) ? BlockID.fromJSON(object.block_id) : undefined,
            block: isSet(object.block) ? Block.fromJSON(object.block) : undefined,
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.txs) {
            obj.txs = message.txs.map(e => e ? Tx.toJSON(e) : undefined);
        }
        else {
            obj.txs = [];
        }
        message.block_id !== undefined && (obj.block_id = message.block_id ? BlockID.toJSON(message.block_id) : undefined);
        message.block !== undefined && (obj.block = message.block ? Block.toJSON(message.block) : undefined);
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetBlockWithTxsResponse();
        message.txs = object.txs?.map(e => Tx.fromPartial(e)) || [];
        message.block_id = object.block_id !== undefined && object.block_id !== null ? BlockID.fromPartial(object.block_id) : undefined;
        message.block = object.block !== undefined && object.block !== null ? Block.fromPartial(object.block) : undefined;
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseGetBlockWithTxsResponse();
        message.txs = object.txs?.map(e => Tx.fromAmino(e)) || [];
        if (object.block_id !== undefined && object.block_id !== null) {
            message.block_id = BlockID.fromAmino(object.block_id);
        }
        if (object.block !== undefined && object.block !== null) {
            message.block = Block.fromAmino(object.block);
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.txs) {
            obj.txs = message.txs.map(e => e ? Tx.toAmino(e) : undefined);
        }
        else {
            obj.txs = [];
        }
        obj.block_id = message.block_id ? BlockID.toAmino(message.block_id) : undefined;
        obj.block = message.block ? Block.toAmino(message.block) : undefined;
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return GetBlockWithTxsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetBlockWithTxsResponse",
            value: GetBlockWithTxsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GetBlockWithTxsResponse.decode(message.value);
    },
    toProto(message) {
        return GetBlockWithTxsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.GetBlockWithTxsResponse",
            value: GetBlockWithTxsResponse.encode(message).finish()
        };
    }
};
function createBaseTxDecodeRequest() {
    return {
        tx_bytes: new Uint8Array()
    };
}
export const TxDecodeRequest = {
    typeUrl: "/cosmos.tx.v1beta1.TxDecodeRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.tx_bytes.length !== 0) {
            writer.uint32(10).bytes(message.tx_bytes);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTxDecodeRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tx_bytes = reader.bytes();
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
            tx_bytes: isSet(object.tx_bytes) ? bytesFromBase64(object.tx_bytes) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.tx_bytes !== undefined && (obj.tx_bytes = base64FromBytes(message.tx_bytes !== undefined ? message.tx_bytes : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTxDecodeRequest();
        message.tx_bytes = object.tx_bytes ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseTxDecodeRequest();
        if (object.tx_bytes !== undefined && object.tx_bytes !== null) {
            message.tx_bytes = bytesFromBase64(object.tx_bytes);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.tx_bytes = message.tx_bytes ? base64FromBytes(message.tx_bytes) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return TxDecodeRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/TxDecodeRequest",
            value: TxDecodeRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return TxDecodeRequest.decode(message.value);
    },
    toProto(message) {
        return TxDecodeRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.TxDecodeRequest",
            value: TxDecodeRequest.encode(message).finish()
        };
    }
};
function createBaseTxDecodeResponse() {
    return {
        tx: undefined
    };
}
export const TxDecodeResponse = {
    typeUrl: "/cosmos.tx.v1beta1.TxDecodeResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.tx !== undefined) {
            Tx.encode(message.tx, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTxDecodeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tx = Tx.decode(reader, reader.uint32());
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
            tx: isSet(object.tx) ? Tx.fromJSON(object.tx) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.tx !== undefined && (obj.tx = message.tx ? Tx.toJSON(message.tx) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTxDecodeResponse();
        message.tx = object.tx !== undefined && object.tx !== null ? Tx.fromPartial(object.tx) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseTxDecodeResponse();
        if (object.tx !== undefined && object.tx !== null) {
            message.tx = Tx.fromAmino(object.tx);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.tx = message.tx ? Tx.toAmino(message.tx) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return TxDecodeResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/TxDecodeResponse",
            value: TxDecodeResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return TxDecodeResponse.decode(message.value);
    },
    toProto(message) {
        return TxDecodeResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.TxDecodeResponse",
            value: TxDecodeResponse.encode(message).finish()
        };
    }
};
function createBaseTxEncodeRequest() {
    return {
        tx: undefined
    };
}
export const TxEncodeRequest = {
    typeUrl: "/cosmos.tx.v1beta1.TxEncodeRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.tx !== undefined) {
            Tx.encode(message.tx, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTxEncodeRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tx = Tx.decode(reader, reader.uint32());
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
            tx: isSet(object.tx) ? Tx.fromJSON(object.tx) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.tx !== undefined && (obj.tx = message.tx ? Tx.toJSON(message.tx) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTxEncodeRequest();
        message.tx = object.tx !== undefined && object.tx !== null ? Tx.fromPartial(object.tx) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseTxEncodeRequest();
        if (object.tx !== undefined && object.tx !== null) {
            message.tx = Tx.fromAmino(object.tx);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.tx = message.tx ? Tx.toAmino(message.tx) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return TxEncodeRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/TxEncodeRequest",
            value: TxEncodeRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return TxEncodeRequest.decode(message.value);
    },
    toProto(message) {
        return TxEncodeRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.TxEncodeRequest",
            value: TxEncodeRequest.encode(message).finish()
        };
    }
};
function createBaseTxEncodeResponse() {
    return {
        tx_bytes: new Uint8Array()
    };
}
export const TxEncodeResponse = {
    typeUrl: "/cosmos.tx.v1beta1.TxEncodeResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.tx_bytes.length !== 0) {
            writer.uint32(10).bytes(message.tx_bytes);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTxEncodeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tx_bytes = reader.bytes();
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
            tx_bytes: isSet(object.tx_bytes) ? bytesFromBase64(object.tx_bytes) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.tx_bytes !== undefined && (obj.tx_bytes = base64FromBytes(message.tx_bytes !== undefined ? message.tx_bytes : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTxEncodeResponse();
        message.tx_bytes = object.tx_bytes ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseTxEncodeResponse();
        if (object.tx_bytes !== undefined && object.tx_bytes !== null) {
            message.tx_bytes = bytesFromBase64(object.tx_bytes);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.tx_bytes = message.tx_bytes ? base64FromBytes(message.tx_bytes) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return TxEncodeResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/TxEncodeResponse",
            value: TxEncodeResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return TxEncodeResponse.decode(message.value);
    },
    toProto(message) {
        return TxEncodeResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.TxEncodeResponse",
            value: TxEncodeResponse.encode(message).finish()
        };
    }
};
function createBaseTxEncodeAminoRequest() {
    return {
        amino_json: ""
    };
}
export const TxEncodeAminoRequest = {
    typeUrl: "/cosmos.tx.v1beta1.TxEncodeAminoRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.amino_json !== "") {
            writer.uint32(10).string(message.amino_json);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTxEncodeAminoRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amino_json = reader.string();
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
            amino_json: isSet(object.amino_json) ? String(object.amino_json) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.amino_json !== undefined && (obj.amino_json = message.amino_json);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTxEncodeAminoRequest();
        message.amino_json = object.amino_json ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseTxEncodeAminoRequest();
        if (object.amino_json !== undefined && object.amino_json !== null) {
            message.amino_json = object.amino_json;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.amino_json = message.amino_json;
        return obj;
    },
    fromAminoMsg(object) {
        return TxEncodeAminoRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/TxEncodeAminoRequest",
            value: TxEncodeAminoRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return TxEncodeAminoRequest.decode(message.value);
    },
    toProto(message) {
        return TxEncodeAminoRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.TxEncodeAminoRequest",
            value: TxEncodeAminoRequest.encode(message).finish()
        };
    }
};
function createBaseTxEncodeAminoResponse() {
    return {
        amino_binary: new Uint8Array()
    };
}
export const TxEncodeAminoResponse = {
    typeUrl: "/cosmos.tx.v1beta1.TxEncodeAminoResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.amino_binary.length !== 0) {
            writer.uint32(10).bytes(message.amino_binary);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTxEncodeAminoResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amino_binary = reader.bytes();
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
            amino_binary: isSet(object.amino_binary) ? bytesFromBase64(object.amino_binary) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.amino_binary !== undefined && (obj.amino_binary = base64FromBytes(message.amino_binary !== undefined ? message.amino_binary : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTxEncodeAminoResponse();
        message.amino_binary = object.amino_binary ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseTxEncodeAminoResponse();
        if (object.amino_binary !== undefined && object.amino_binary !== null) {
            message.amino_binary = bytesFromBase64(object.amino_binary);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.amino_binary = message.amino_binary ? base64FromBytes(message.amino_binary) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return TxEncodeAminoResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/TxEncodeAminoResponse",
            value: TxEncodeAminoResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return TxEncodeAminoResponse.decode(message.value);
    },
    toProto(message) {
        return TxEncodeAminoResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.TxEncodeAminoResponse",
            value: TxEncodeAminoResponse.encode(message).finish()
        };
    }
};
function createBaseTxDecodeAminoRequest() {
    return {
        amino_binary: new Uint8Array()
    };
}
export const TxDecodeAminoRequest = {
    typeUrl: "/cosmos.tx.v1beta1.TxDecodeAminoRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.amino_binary.length !== 0) {
            writer.uint32(10).bytes(message.amino_binary);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTxDecodeAminoRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amino_binary = reader.bytes();
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
            amino_binary: isSet(object.amino_binary) ? bytesFromBase64(object.amino_binary) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.amino_binary !== undefined && (obj.amino_binary = base64FromBytes(message.amino_binary !== undefined ? message.amino_binary : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTxDecodeAminoRequest();
        message.amino_binary = object.amino_binary ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseTxDecodeAminoRequest();
        if (object.amino_binary !== undefined && object.amino_binary !== null) {
            message.amino_binary = bytesFromBase64(object.amino_binary);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.amino_binary = message.amino_binary ? base64FromBytes(message.amino_binary) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return TxDecodeAminoRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/TxDecodeAminoRequest",
            value: TxDecodeAminoRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return TxDecodeAminoRequest.decode(message.value);
    },
    toProto(message) {
        return TxDecodeAminoRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.TxDecodeAminoRequest",
            value: TxDecodeAminoRequest.encode(message).finish()
        };
    }
};
function createBaseTxDecodeAminoResponse() {
    return {
        amino_json: ""
    };
}
export const TxDecodeAminoResponse = {
    typeUrl: "/cosmos.tx.v1beta1.TxDecodeAminoResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.amino_json !== "") {
            writer.uint32(10).string(message.amino_json);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTxDecodeAminoResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amino_json = reader.string();
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
            amino_json: isSet(object.amino_json) ? String(object.amino_json) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.amino_json !== undefined && (obj.amino_json = message.amino_json);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTxDecodeAminoResponse();
        message.amino_json = object.amino_json ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseTxDecodeAminoResponse();
        if (object.amino_json !== undefined && object.amino_json !== null) {
            message.amino_json = object.amino_json;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.amino_json = message.amino_json;
        return obj;
    },
    fromAminoMsg(object) {
        return TxDecodeAminoResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/TxDecodeAminoResponse",
            value: TxDecodeAminoResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return TxDecodeAminoResponse.decode(message.value);
    },
    toProto(message) {
        return TxDecodeAminoResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.TxDecodeAminoResponse",
            value: TxDecodeAminoResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=service.js.map
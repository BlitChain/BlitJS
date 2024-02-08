"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchBlocksResult = exports.SearchTxsResult = exports.TxMsgData = exports.MsgData = exports.SimulationResponse = exports.Result = exports.GasInfo = exports.Attribute = exports.StringEvent = exports.ABCIMessageLog = exports.TxResponse = exports.protobufPackage = void 0;
//@ts-nocheck
const any_1 = require("../../../../google/protobuf/any");
const types_1 = require("../../../../tendermint/abci/types");
const block_1 = require("../../../../tendermint/types/block");
const binary_1 = require("../../../../binary");
const helpers_1 = require("../../../../helpers");
exports.protobufPackage = "cosmos.base.abci.v1beta1";
function createBaseTxResponse() {
    return {
        height: BigInt(0),
        txhash: "",
        codespace: "",
        code: 0,
        data: "",
        raw_log: "",
        logs: [],
        info: "",
        gas_wanted: BigInt(0),
        gas_used: BigInt(0),
        tx: undefined,
        timestamp: "",
        events: []
    };
}
exports.TxResponse = {
    typeUrl: "/cosmos.base.abci.v1beta1.TxResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.height !== BigInt(0)) {
            writer.uint32(8).int64(message.height);
        }
        if (message.txhash !== "") {
            writer.uint32(18).string(message.txhash);
        }
        if (message.codespace !== "") {
            writer.uint32(26).string(message.codespace);
        }
        if (message.code !== 0) {
            writer.uint32(32).uint32(message.code);
        }
        if (message.data !== "") {
            writer.uint32(42).string(message.data);
        }
        if (message.raw_log !== "") {
            writer.uint32(50).string(message.raw_log);
        }
        for (const v of message.logs) {
            exports.ABCIMessageLog.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.info !== "") {
            writer.uint32(66).string(message.info);
        }
        if (message.gas_wanted !== BigInt(0)) {
            writer.uint32(72).int64(message.gas_wanted);
        }
        if (message.gas_used !== BigInt(0)) {
            writer.uint32(80).int64(message.gas_used);
        }
        if (message.tx !== undefined) {
            any_1.Any.encode(message.tx, writer.uint32(90).fork()).ldelim();
        }
        if (message.timestamp !== "") {
            writer.uint32(98).string(message.timestamp);
        }
        for (const v of message.events) {
            types_1.Event.encode(v, writer.uint32(106).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTxResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = reader.int64();
                    break;
                case 2:
                    message.txhash = reader.string();
                    break;
                case 3:
                    message.codespace = reader.string();
                    break;
                case 4:
                    message.code = reader.uint32();
                    break;
                case 5:
                    message.data = reader.string();
                    break;
                case 6:
                    message.raw_log = reader.string();
                    break;
                case 7:
                    message.logs.push(exports.ABCIMessageLog.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.info = reader.string();
                    break;
                case 9:
                    message.gas_wanted = reader.int64();
                    break;
                case 10:
                    message.gas_used = reader.int64();
                    break;
                case 11:
                    message.tx = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.timestamp = reader.string();
                    break;
                case 13:
                    message.events.push(types_1.Event.decode(reader, reader.uint32()));
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
            height: (0, helpers_1.isSet)(object.height) ? BigInt(object.height.toString()) : BigInt(0),
            txhash: (0, helpers_1.isSet)(object.txhash) ? String(object.txhash) : "",
            codespace: (0, helpers_1.isSet)(object.codespace) ? String(object.codespace) : "",
            code: (0, helpers_1.isSet)(object.code) ? Number(object.code) : 0,
            data: (0, helpers_1.isSet)(object.data) ? String(object.data) : "",
            raw_log: (0, helpers_1.isSet)(object.raw_log) ? String(object.raw_log) : "",
            logs: Array.isArray(object?.logs) ? object.logs.map((e) => exports.ABCIMessageLog.fromJSON(e)) : [],
            info: (0, helpers_1.isSet)(object.info) ? String(object.info) : "",
            gas_wanted: (0, helpers_1.isSet)(object.gas_wanted) ? BigInt(object.gas_wanted.toString()) : BigInt(0),
            gas_used: (0, helpers_1.isSet)(object.gas_used) ? BigInt(object.gas_used.toString()) : BigInt(0),
            tx: (0, helpers_1.isSet)(object.tx) ? any_1.Any.fromJSON(object.tx) : undefined,
            timestamp: (0, helpers_1.isSet)(object.timestamp) ? String(object.timestamp) : "",
            events: Array.isArray(object?.events) ? object.events.map((e) => types_1.Event.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
        message.txhash !== undefined && (obj.txhash = message.txhash);
        message.codespace !== undefined && (obj.codespace = message.codespace);
        message.code !== undefined && (obj.code = Math.round(message.code));
        message.data !== undefined && (obj.data = message.data);
        message.raw_log !== undefined && (obj.raw_log = message.raw_log);
        if (message.logs) {
            obj.logs = message.logs.map(e => e ? exports.ABCIMessageLog.toJSON(e) : undefined);
        }
        else {
            obj.logs = [];
        }
        message.info !== undefined && (obj.info = message.info);
        message.gas_wanted !== undefined && (obj.gas_wanted = (message.gas_wanted || BigInt(0)).toString());
        message.gas_used !== undefined && (obj.gas_used = (message.gas_used || BigInt(0)).toString());
        message.tx !== undefined && (obj.tx = message.tx ? any_1.Any.toJSON(message.tx) : undefined);
        message.timestamp !== undefined && (obj.timestamp = message.timestamp);
        if (message.events) {
            obj.events = message.events.map(e => e ? types_1.Event.toJSON(e) : undefined);
        }
        else {
            obj.events = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTxResponse();
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        message.txhash = object.txhash ?? "";
        message.codespace = object.codespace ?? "";
        message.code = object.code ?? 0;
        message.data = object.data ?? "";
        message.raw_log = object.raw_log ?? "";
        message.logs = object.logs?.map(e => exports.ABCIMessageLog.fromPartial(e)) || [];
        message.info = object.info ?? "";
        message.gas_wanted = object.gas_wanted !== undefined && object.gas_wanted !== null ? BigInt(object.gas_wanted.toString()) : BigInt(0);
        message.gas_used = object.gas_used !== undefined && object.gas_used !== null ? BigInt(object.gas_used.toString()) : BigInt(0);
        message.tx = object.tx !== undefined && object.tx !== null ? any_1.Any.fromPartial(object.tx) : undefined;
        message.timestamp = object.timestamp ?? "";
        message.events = object.events?.map(e => types_1.Event.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseTxResponse();
        if (object.height !== undefined && object.height !== null) {
            message.height = BigInt(object.height);
        }
        if (object.txhash !== undefined && object.txhash !== null) {
            message.txhash = object.txhash;
        }
        if (object.codespace !== undefined && object.codespace !== null) {
            message.codespace = object.codespace;
        }
        if (object.code !== undefined && object.code !== null) {
            message.code = object.code;
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = object.data;
        }
        if (object.raw_log !== undefined && object.raw_log !== null) {
            message.raw_log = object.raw_log;
        }
        message.logs = object.logs?.map(e => exports.ABCIMessageLog.fromAmino(e)) || [];
        if (object.info !== undefined && object.info !== null) {
            message.info = object.info;
        }
        if (object.gas_wanted !== undefined && object.gas_wanted !== null) {
            message.gas_wanted = BigInt(object.gas_wanted);
        }
        if (object.gas_used !== undefined && object.gas_used !== null) {
            message.gas_used = BigInt(object.gas_used);
        }
        if (object.tx !== undefined && object.tx !== null) {
            message.tx = any_1.Any.fromAmino(object.tx);
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = object.timestamp;
        }
        message.events = object.events?.map(e => types_1.Event.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.height = message.height ? message.height.toString() : undefined;
        obj.txhash = message.txhash;
        obj.codespace = message.codespace;
        obj.code = message.code;
        obj.data = message.data;
        obj.raw_log = message.raw_log;
        if (message.logs) {
            obj.logs = message.logs.map(e => e ? exports.ABCIMessageLog.toAmino(e) : undefined);
        }
        else {
            obj.logs = [];
        }
        obj.info = message.info;
        obj.gas_wanted = message.gas_wanted ? message.gas_wanted.toString() : undefined;
        obj.gas_used = message.gas_used ? message.gas_used.toString() : undefined;
        obj.tx = message.tx ? any_1.Any.toAmino(message.tx) : undefined;
        obj.timestamp = message.timestamp;
        if (message.events) {
            obj.events = message.events.map(e => e ? types_1.Event.toAmino(e) : undefined);
        }
        else {
            obj.events = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.TxResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/TxResponse",
            value: exports.TxResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.TxResponse.decode(message.value);
    },
    toProto(message) {
        return exports.TxResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.abci.v1beta1.TxResponse",
            value: exports.TxResponse.encode(message).finish()
        };
    }
};
function createBaseABCIMessageLog() {
    return {
        msg_index: 0,
        log: "",
        events: []
    };
}
exports.ABCIMessageLog = {
    typeUrl: "/cosmos.base.abci.v1beta1.ABCIMessageLog",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.msg_index !== 0) {
            writer.uint32(8).uint32(message.msg_index);
        }
        if (message.log !== "") {
            writer.uint32(18).string(message.log);
        }
        for (const v of message.events) {
            exports.StringEvent.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseABCIMessageLog();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.msg_index = reader.uint32();
                    break;
                case 2:
                    message.log = reader.string();
                    break;
                case 3:
                    message.events.push(exports.StringEvent.decode(reader, reader.uint32()));
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
            msg_index: (0, helpers_1.isSet)(object.msg_index) ? Number(object.msg_index) : 0,
            log: (0, helpers_1.isSet)(object.log) ? String(object.log) : "",
            events: Array.isArray(object?.events) ? object.events.map((e) => exports.StringEvent.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.msg_index !== undefined && (obj.msg_index = Math.round(message.msg_index));
        message.log !== undefined && (obj.log = message.log);
        if (message.events) {
            obj.events = message.events.map(e => e ? exports.StringEvent.toJSON(e) : undefined);
        }
        else {
            obj.events = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseABCIMessageLog();
        message.msg_index = object.msg_index ?? 0;
        message.log = object.log ?? "";
        message.events = object.events?.map(e => exports.StringEvent.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseABCIMessageLog();
        if (object.msg_index !== undefined && object.msg_index !== null) {
            message.msg_index = object.msg_index;
        }
        if (object.log !== undefined && object.log !== null) {
            message.log = object.log;
        }
        message.events = object.events?.map(e => exports.StringEvent.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.msg_index = message.msg_index;
        obj.log = message.log;
        if (message.events) {
            obj.events = message.events.map(e => e ? exports.StringEvent.toAmino(e) : undefined);
        }
        else {
            obj.events = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ABCIMessageLog.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ABCIMessageLog",
            value: exports.ABCIMessageLog.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ABCIMessageLog.decode(message.value);
    },
    toProto(message) {
        return exports.ABCIMessageLog.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.abci.v1beta1.ABCIMessageLog",
            value: exports.ABCIMessageLog.encode(message).finish()
        };
    }
};
function createBaseStringEvent() {
    return {
        type: "",
        attributes: []
    };
}
exports.StringEvent = {
    typeUrl: "/cosmos.base.abci.v1beta1.StringEvent",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.type !== "") {
            writer.uint32(10).string(message.type);
        }
        for (const v of message.attributes) {
            exports.Attribute.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStringEvent();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.string();
                    break;
                case 2:
                    message.attributes.push(exports.Attribute.decode(reader, reader.uint32()));
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
            type: (0, helpers_1.isSet)(object.type) ? String(object.type) : "",
            attributes: Array.isArray(object?.attributes) ? object.attributes.map((e) => exports.Attribute.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.type !== undefined && (obj.type = message.type);
        if (message.attributes) {
            obj.attributes = message.attributes.map(e => e ? exports.Attribute.toJSON(e) : undefined);
        }
        else {
            obj.attributes = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseStringEvent();
        message.type = object.type ?? "";
        message.attributes = object.attributes?.map(e => exports.Attribute.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseStringEvent();
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        }
        message.attributes = object.attributes?.map(e => exports.Attribute.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.type = message.type;
        if (message.attributes) {
            obj.attributes = message.attributes.map(e => e ? exports.Attribute.toAmino(e) : undefined);
        }
        else {
            obj.attributes = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.StringEvent.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/StringEvent",
            value: exports.StringEvent.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.StringEvent.decode(message.value);
    },
    toProto(message) {
        return exports.StringEvent.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.abci.v1beta1.StringEvent",
            value: exports.StringEvent.encode(message).finish()
        };
    }
};
function createBaseAttribute() {
    return {
        key: "",
        value: ""
    };
}
exports.Attribute = {
    typeUrl: "/cosmos.base.abci.v1beta1.Attribute",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== "") {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAttribute();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
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
            key: (0, helpers_1.isSet)(object.key) ? String(object.key) : "",
            value: (0, helpers_1.isSet)(object.value) ? String(object.value) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAttribute();
        message.key = object.key ?? "";
        message.value = object.value ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseAttribute();
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.key = message.key;
        obj.value = message.value;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Attribute.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Attribute",
            value: exports.Attribute.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Attribute.decode(message.value);
    },
    toProto(message) {
        return exports.Attribute.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.abci.v1beta1.Attribute",
            value: exports.Attribute.encode(message).finish()
        };
    }
};
function createBaseGasInfo() {
    return {
        gas_wanted: BigInt(0),
        gas_used: BigInt(0)
    };
}
exports.GasInfo = {
    typeUrl: "/cosmos.base.abci.v1beta1.GasInfo",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.gas_wanted !== BigInt(0)) {
            writer.uint32(8).uint64(message.gas_wanted);
        }
        if (message.gas_used !== BigInt(0)) {
            writer.uint32(16).uint64(message.gas_used);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGasInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.gas_wanted = reader.uint64();
                    break;
                case 2:
                    message.gas_used = reader.uint64();
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
            gas_wanted: (0, helpers_1.isSet)(object.gas_wanted) ? BigInt(object.gas_wanted.toString()) : BigInt(0),
            gas_used: (0, helpers_1.isSet)(object.gas_used) ? BigInt(object.gas_used.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.gas_wanted !== undefined && (obj.gas_wanted = (message.gas_wanted || BigInt(0)).toString());
        message.gas_used !== undefined && (obj.gas_used = (message.gas_used || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGasInfo();
        message.gas_wanted = object.gas_wanted !== undefined && object.gas_wanted !== null ? BigInt(object.gas_wanted.toString()) : BigInt(0);
        message.gas_used = object.gas_used !== undefined && object.gas_used !== null ? BigInt(object.gas_used.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseGasInfo();
        if (object.gas_wanted !== undefined && object.gas_wanted !== null) {
            message.gas_wanted = BigInt(object.gas_wanted);
        }
        if (object.gas_used !== undefined && object.gas_used !== null) {
            message.gas_used = BigInt(object.gas_used);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.gas_wanted = message.gas_wanted ? message.gas_wanted.toString() : undefined;
        obj.gas_used = message.gas_used ? message.gas_used.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GasInfo.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GasInfo",
            value: exports.GasInfo.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GasInfo.decode(message.value);
    },
    toProto(message) {
        return exports.GasInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.abci.v1beta1.GasInfo",
            value: exports.GasInfo.encode(message).finish()
        };
    }
};
function createBaseResult() {
    return {
        data: new Uint8Array(),
        log: "",
        events: [],
        msg_responses: []
    };
}
exports.Result = {
    typeUrl: "/cosmos.base.abci.v1beta1.Result",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.data.length !== 0) {
            writer.uint32(10).bytes(message.data);
        }
        if (message.log !== "") {
            writer.uint32(18).string(message.log);
        }
        for (const v of message.events) {
            types_1.Event.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.msg_responses) {
            any_1.Any.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResult();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data = reader.bytes();
                    break;
                case 2:
                    message.log = reader.string();
                    break;
                case 3:
                    message.events.push(types_1.Event.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.msg_responses.push(any_1.Any.decode(reader, reader.uint32()));
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
            data: (0, helpers_1.isSet)(object.data) ? (0, helpers_1.bytesFromBase64)(object.data) : new Uint8Array(),
            log: (0, helpers_1.isSet)(object.log) ? String(object.log) : "",
            events: Array.isArray(object?.events) ? object.events.map((e) => types_1.Event.fromJSON(e)) : [],
            msg_responses: Array.isArray(object?.msg_responses) ? object.msg_responses.map((e) => any_1.Any.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.data !== undefined && (obj.data = (0, helpers_1.base64FromBytes)(message.data !== undefined ? message.data : new Uint8Array()));
        message.log !== undefined && (obj.log = message.log);
        if (message.events) {
            obj.events = message.events.map(e => e ? types_1.Event.toJSON(e) : undefined);
        }
        else {
            obj.events = [];
        }
        if (message.msg_responses) {
            obj.msg_responses = message.msg_responses.map(e => e ? any_1.Any.toJSON(e) : undefined);
        }
        else {
            obj.msg_responses = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseResult();
        message.data = object.data ?? new Uint8Array();
        message.log = object.log ?? "";
        message.events = object.events?.map(e => types_1.Event.fromPartial(e)) || [];
        message.msg_responses = object.msg_responses?.map(e => any_1.Any.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseResult();
        if (object.data !== undefined && object.data !== null) {
            message.data = (0, helpers_1.bytesFromBase64)(object.data);
        }
        if (object.log !== undefined && object.log !== null) {
            message.log = object.log;
        }
        message.events = object.events?.map(e => types_1.Event.fromAmino(e)) || [];
        message.msg_responses = object.msg_responses?.map(e => any_1.Any.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.data = message.data ? (0, helpers_1.base64FromBytes)(message.data) : undefined;
        obj.log = message.log;
        if (message.events) {
            obj.events = message.events.map(e => e ? types_1.Event.toAmino(e) : undefined);
        }
        else {
            obj.events = [];
        }
        if (message.msg_responses) {
            obj.msg_responses = message.msg_responses.map(e => e ? any_1.Any.toAmino(e) : undefined);
        }
        else {
            obj.msg_responses = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Result.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Result",
            value: exports.Result.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Result.decode(message.value);
    },
    toProto(message) {
        return exports.Result.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.abci.v1beta1.Result",
            value: exports.Result.encode(message).finish()
        };
    }
};
function createBaseSimulationResponse() {
    return {
        gas_info: exports.GasInfo.fromPartial({}),
        result: undefined
    };
}
exports.SimulationResponse = {
    typeUrl: "/cosmos.base.abci.v1beta1.SimulationResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.gas_info !== undefined) {
            exports.GasInfo.encode(message.gas_info, writer.uint32(10).fork()).ldelim();
        }
        if (message.result !== undefined) {
            exports.Result.encode(message.result, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSimulationResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.gas_info = exports.GasInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.result = exports.Result.decode(reader, reader.uint32());
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
            gas_info: (0, helpers_1.isSet)(object.gas_info) ? exports.GasInfo.fromJSON(object.gas_info) : undefined,
            result: (0, helpers_1.isSet)(object.result) ? exports.Result.fromJSON(object.result) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.gas_info !== undefined && (obj.gas_info = message.gas_info ? exports.GasInfo.toJSON(message.gas_info) : undefined);
        message.result !== undefined && (obj.result = message.result ? exports.Result.toJSON(message.result) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSimulationResponse();
        message.gas_info = object.gas_info !== undefined && object.gas_info !== null ? exports.GasInfo.fromPartial(object.gas_info) : undefined;
        message.result = object.result !== undefined && object.result !== null ? exports.Result.fromPartial(object.result) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseSimulationResponse();
        if (object.gas_info !== undefined && object.gas_info !== null) {
            message.gas_info = exports.GasInfo.fromAmino(object.gas_info);
        }
        if (object.result !== undefined && object.result !== null) {
            message.result = exports.Result.fromAmino(object.result);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.gas_info = message.gas_info ? exports.GasInfo.toAmino(message.gas_info) : undefined;
        obj.result = message.result ? exports.Result.toAmino(message.result) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SimulationResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/SimulationResponse",
            value: exports.SimulationResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.SimulationResponse.decode(message.value);
    },
    toProto(message) {
        return exports.SimulationResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.abci.v1beta1.SimulationResponse",
            value: exports.SimulationResponse.encode(message).finish()
        };
    }
};
function createBaseMsgData() {
    return {
        msg_type: "",
        data: new Uint8Array()
    };
}
exports.MsgData = {
    typeUrl: "/cosmos.base.abci.v1beta1.MsgData",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.msg_type !== "") {
            writer.uint32(10).string(message.msg_type);
        }
        if (message.data.length !== 0) {
            writer.uint32(18).bytes(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.msg_type = reader.string();
                    break;
                case 2:
                    message.data = reader.bytes();
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
            msg_type: (0, helpers_1.isSet)(object.msg_type) ? String(object.msg_type) : "",
            data: (0, helpers_1.isSet)(object.data) ? (0, helpers_1.bytesFromBase64)(object.data) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.msg_type !== undefined && (obj.msg_type = message.msg_type);
        message.data !== undefined && (obj.data = (0, helpers_1.base64FromBytes)(message.data !== undefined ? message.data : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgData();
        message.msg_type = object.msg_type ?? "";
        message.data = object.data ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgData();
        if (object.msg_type !== undefined && object.msg_type !== null) {
            message.msg_type = object.msg_type;
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = (0, helpers_1.bytesFromBase64)(object.data);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.msg_type = message.msg_type;
        obj.data = message.data ? (0, helpers_1.base64FromBytes)(message.data) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgData.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgData",
            value: exports.MsgData.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgData.decode(message.value);
    },
    toProto(message) {
        return exports.MsgData.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.abci.v1beta1.MsgData",
            value: exports.MsgData.encode(message).finish()
        };
    }
};
function createBaseTxMsgData() {
    return {
        data: [],
        msg_responses: []
    };
}
exports.TxMsgData = {
    typeUrl: "/cosmos.base.abci.v1beta1.TxMsgData",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.data) {
            exports.MsgData.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.msg_responses) {
            any_1.Any.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTxMsgData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data.push(exports.MsgData.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.msg_responses.push(any_1.Any.decode(reader, reader.uint32()));
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
            data: Array.isArray(object?.data) ? object.data.map((e) => exports.MsgData.fromJSON(e)) : [],
            msg_responses: Array.isArray(object?.msg_responses) ? object.msg_responses.map((e) => any_1.Any.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.data) {
            obj.data = message.data.map(e => e ? exports.MsgData.toJSON(e) : undefined);
        }
        else {
            obj.data = [];
        }
        if (message.msg_responses) {
            obj.msg_responses = message.msg_responses.map(e => e ? any_1.Any.toJSON(e) : undefined);
        }
        else {
            obj.msg_responses = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTxMsgData();
        message.data = object.data?.map(e => exports.MsgData.fromPartial(e)) || [];
        message.msg_responses = object.msg_responses?.map(e => any_1.Any.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseTxMsgData();
        message.data = object.data?.map(e => exports.MsgData.fromAmino(e)) || [];
        message.msg_responses = object.msg_responses?.map(e => any_1.Any.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.data) {
            obj.data = message.data.map(e => e ? exports.MsgData.toAmino(e) : undefined);
        }
        else {
            obj.data = [];
        }
        if (message.msg_responses) {
            obj.msg_responses = message.msg_responses.map(e => e ? any_1.Any.toAmino(e) : undefined);
        }
        else {
            obj.msg_responses = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.TxMsgData.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/TxMsgData",
            value: exports.TxMsgData.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.TxMsgData.decode(message.value);
    },
    toProto(message) {
        return exports.TxMsgData.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.abci.v1beta1.TxMsgData",
            value: exports.TxMsgData.encode(message).finish()
        };
    }
};
function createBaseSearchTxsResult() {
    return {
        total_count: BigInt(0),
        count: BigInt(0),
        page_number: BigInt(0),
        page_total: BigInt(0),
        limit: BigInt(0),
        txs: []
    };
}
exports.SearchTxsResult = {
    typeUrl: "/cosmos.base.abci.v1beta1.SearchTxsResult",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.total_count !== BigInt(0)) {
            writer.uint32(8).uint64(message.total_count);
        }
        if (message.count !== BigInt(0)) {
            writer.uint32(16).uint64(message.count);
        }
        if (message.page_number !== BigInt(0)) {
            writer.uint32(24).uint64(message.page_number);
        }
        if (message.page_total !== BigInt(0)) {
            writer.uint32(32).uint64(message.page_total);
        }
        if (message.limit !== BigInt(0)) {
            writer.uint32(40).uint64(message.limit);
        }
        for (const v of message.txs) {
            exports.TxResponse.encode(v, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSearchTxsResult();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.total_count = reader.uint64();
                    break;
                case 2:
                    message.count = reader.uint64();
                    break;
                case 3:
                    message.page_number = reader.uint64();
                    break;
                case 4:
                    message.page_total = reader.uint64();
                    break;
                case 5:
                    message.limit = reader.uint64();
                    break;
                case 6:
                    message.txs.push(exports.TxResponse.decode(reader, reader.uint32()));
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
            total_count: (0, helpers_1.isSet)(object.total_count) ? BigInt(object.total_count.toString()) : BigInt(0),
            count: (0, helpers_1.isSet)(object.count) ? BigInt(object.count.toString()) : BigInt(0),
            page_number: (0, helpers_1.isSet)(object.page_number) ? BigInt(object.page_number.toString()) : BigInt(0),
            page_total: (0, helpers_1.isSet)(object.page_total) ? BigInt(object.page_total.toString()) : BigInt(0),
            limit: (0, helpers_1.isSet)(object.limit) ? BigInt(object.limit.toString()) : BigInt(0),
            txs: Array.isArray(object?.txs) ? object.txs.map((e) => exports.TxResponse.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.total_count !== undefined && (obj.total_count = (message.total_count || BigInt(0)).toString());
        message.count !== undefined && (obj.count = (message.count || BigInt(0)).toString());
        message.page_number !== undefined && (obj.page_number = (message.page_number || BigInt(0)).toString());
        message.page_total !== undefined && (obj.page_total = (message.page_total || BigInt(0)).toString());
        message.limit !== undefined && (obj.limit = (message.limit || BigInt(0)).toString());
        if (message.txs) {
            obj.txs = message.txs.map(e => e ? exports.TxResponse.toJSON(e) : undefined);
        }
        else {
            obj.txs = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSearchTxsResult();
        message.total_count = object.total_count !== undefined && object.total_count !== null ? BigInt(object.total_count.toString()) : BigInt(0);
        message.count = object.count !== undefined && object.count !== null ? BigInt(object.count.toString()) : BigInt(0);
        message.page_number = object.page_number !== undefined && object.page_number !== null ? BigInt(object.page_number.toString()) : BigInt(0);
        message.page_total = object.page_total !== undefined && object.page_total !== null ? BigInt(object.page_total.toString()) : BigInt(0);
        message.limit = object.limit !== undefined && object.limit !== null ? BigInt(object.limit.toString()) : BigInt(0);
        message.txs = object.txs?.map(e => exports.TxResponse.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseSearchTxsResult();
        if (object.total_count !== undefined && object.total_count !== null) {
            message.total_count = BigInt(object.total_count);
        }
        if (object.count !== undefined && object.count !== null) {
            message.count = BigInt(object.count);
        }
        if (object.page_number !== undefined && object.page_number !== null) {
            message.page_number = BigInt(object.page_number);
        }
        if (object.page_total !== undefined && object.page_total !== null) {
            message.page_total = BigInt(object.page_total);
        }
        if (object.limit !== undefined && object.limit !== null) {
            message.limit = BigInt(object.limit);
        }
        message.txs = object.txs?.map(e => exports.TxResponse.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.total_count = message.total_count ? message.total_count.toString() : undefined;
        obj.count = message.count ? message.count.toString() : undefined;
        obj.page_number = message.page_number ? message.page_number.toString() : undefined;
        obj.page_total = message.page_total ? message.page_total.toString() : undefined;
        obj.limit = message.limit ? message.limit.toString() : undefined;
        if (message.txs) {
            obj.txs = message.txs.map(e => e ? exports.TxResponse.toAmino(e) : undefined);
        }
        else {
            obj.txs = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SearchTxsResult.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/SearchTxsResult",
            value: exports.SearchTxsResult.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.SearchTxsResult.decode(message.value);
    },
    toProto(message) {
        return exports.SearchTxsResult.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.abci.v1beta1.SearchTxsResult",
            value: exports.SearchTxsResult.encode(message).finish()
        };
    }
};
function createBaseSearchBlocksResult() {
    return {
        total_count: BigInt(0),
        count: BigInt(0),
        page_number: BigInt(0),
        page_total: BigInt(0),
        limit: BigInt(0),
        blocks: []
    };
}
exports.SearchBlocksResult = {
    typeUrl: "/cosmos.base.abci.v1beta1.SearchBlocksResult",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.total_count !== BigInt(0)) {
            writer.uint32(8).int64(message.total_count);
        }
        if (message.count !== BigInt(0)) {
            writer.uint32(16).int64(message.count);
        }
        if (message.page_number !== BigInt(0)) {
            writer.uint32(24).int64(message.page_number);
        }
        if (message.page_total !== BigInt(0)) {
            writer.uint32(32).int64(message.page_total);
        }
        if (message.limit !== BigInt(0)) {
            writer.uint32(40).int64(message.limit);
        }
        for (const v of message.blocks) {
            block_1.Block.encode(v, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSearchBlocksResult();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.total_count = reader.int64();
                    break;
                case 2:
                    message.count = reader.int64();
                    break;
                case 3:
                    message.page_number = reader.int64();
                    break;
                case 4:
                    message.page_total = reader.int64();
                    break;
                case 5:
                    message.limit = reader.int64();
                    break;
                case 6:
                    message.blocks.push(block_1.Block.decode(reader, reader.uint32()));
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
            total_count: (0, helpers_1.isSet)(object.total_count) ? BigInt(object.total_count.toString()) : BigInt(0),
            count: (0, helpers_1.isSet)(object.count) ? BigInt(object.count.toString()) : BigInt(0),
            page_number: (0, helpers_1.isSet)(object.page_number) ? BigInt(object.page_number.toString()) : BigInt(0),
            page_total: (0, helpers_1.isSet)(object.page_total) ? BigInt(object.page_total.toString()) : BigInt(0),
            limit: (0, helpers_1.isSet)(object.limit) ? BigInt(object.limit.toString()) : BigInt(0),
            blocks: Array.isArray(object?.blocks) ? object.blocks.map((e) => block_1.Block.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.total_count !== undefined && (obj.total_count = (message.total_count || BigInt(0)).toString());
        message.count !== undefined && (obj.count = (message.count || BigInt(0)).toString());
        message.page_number !== undefined && (obj.page_number = (message.page_number || BigInt(0)).toString());
        message.page_total !== undefined && (obj.page_total = (message.page_total || BigInt(0)).toString());
        message.limit !== undefined && (obj.limit = (message.limit || BigInt(0)).toString());
        if (message.blocks) {
            obj.blocks = message.blocks.map(e => e ? block_1.Block.toJSON(e) : undefined);
        }
        else {
            obj.blocks = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSearchBlocksResult();
        message.total_count = object.total_count !== undefined && object.total_count !== null ? BigInt(object.total_count.toString()) : BigInt(0);
        message.count = object.count !== undefined && object.count !== null ? BigInt(object.count.toString()) : BigInt(0);
        message.page_number = object.page_number !== undefined && object.page_number !== null ? BigInt(object.page_number.toString()) : BigInt(0);
        message.page_total = object.page_total !== undefined && object.page_total !== null ? BigInt(object.page_total.toString()) : BigInt(0);
        message.limit = object.limit !== undefined && object.limit !== null ? BigInt(object.limit.toString()) : BigInt(0);
        message.blocks = object.blocks?.map(e => block_1.Block.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseSearchBlocksResult();
        if (object.total_count !== undefined && object.total_count !== null) {
            message.total_count = BigInt(object.total_count);
        }
        if (object.count !== undefined && object.count !== null) {
            message.count = BigInt(object.count);
        }
        if (object.page_number !== undefined && object.page_number !== null) {
            message.page_number = BigInt(object.page_number);
        }
        if (object.page_total !== undefined && object.page_total !== null) {
            message.page_total = BigInt(object.page_total);
        }
        if (object.limit !== undefined && object.limit !== null) {
            message.limit = BigInt(object.limit);
        }
        message.blocks = object.blocks?.map(e => block_1.Block.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.total_count = message.total_count ? message.total_count.toString() : undefined;
        obj.count = message.count ? message.count.toString() : undefined;
        obj.page_number = message.page_number ? message.page_number.toString() : undefined;
        obj.page_total = message.page_total ? message.page_total.toString() : undefined;
        obj.limit = message.limit ? message.limit.toString() : undefined;
        if (message.blocks) {
            obj.blocks = message.blocks.map(e => e ? block_1.Block.toAmino(e) : undefined);
        }
        else {
            obj.blocks = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SearchBlocksResult.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/SearchBlocksResult",
            value: exports.SearchBlocksResult.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.SearchBlocksResult.decode(message.value);
    },
    toProto(message) {
        return exports.SearchBlocksResult.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.abci.v1beta1.SearchBlocksResult",
            value: exports.SearchBlocksResult.encode(message).finish()
        };
    }
};
//# sourceMappingURL=abci.js.map
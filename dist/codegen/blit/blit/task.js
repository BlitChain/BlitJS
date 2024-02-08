"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = exports.protobufPackage = void 0;
//@ts-nocheck
const timestamp_1 = require("../../google/protobuf/timestamp");
const duration_1 = require("../../google/protobuf/duration");
const coin_1 = require("../../cosmos/base/v1beta1/coin");
const any_1 = require("../../google/protobuf/any");
const abci_1 = require("../../cosmos/base/abci/v1beta1/abci");
const binary_1 = require("../../binary");
const helpers_1 = require("../../helpers");
exports.protobufPackage = "blit.blit";
function createBaseTask() {
    return {
        creator: "",
        id: BigInt(0),
        activate_after: new Date(),
        expire_after: new Date(),
        minimum_interval: undefined,
        max_runs: BigInt(0),
        disable_on_error: false,
        enabled: false,
        task_gas_limit: BigInt(0),
        task_gas_fee: coin_1.Coin.fromPartial({}),
        messages: [],
        results: [],
        last_executed_on: undefined,
        error_log: "",
        future_task_index: "",
        total_runs: BigInt(0)
    };
}
exports.Task = {
    typeUrl: "/blit.blit.Task",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== BigInt(0)) {
            writer.uint32(32).uint64(message.id);
        }
        if (message.activate_after !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.activate_after), writer.uint32(42).fork()).ldelim();
        }
        if (message.expire_after !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.expire_after), writer.uint32(50).fork()).ldelim();
        }
        if (message.minimum_interval !== undefined) {
            duration_1.Duration.encode(message.minimum_interval, writer.uint32(58).fork()).ldelim();
        }
        if (message.max_runs !== BigInt(0)) {
            writer.uint32(72).uint64(message.max_runs);
        }
        if (message.disable_on_error === true) {
            writer.uint32(80).bool(message.disable_on_error);
        }
        if (message.enabled === true) {
            writer.uint32(88).bool(message.enabled);
        }
        if (message.task_gas_limit !== BigInt(0)) {
            writer.uint32(96).uint64(message.task_gas_limit);
        }
        if (message.task_gas_fee !== undefined) {
            coin_1.Coin.encode(message.task_gas_fee, writer.uint32(106).fork()).ldelim();
        }
        for (const v of message.messages) {
            any_1.Any.encode(v, writer.uint32(114).fork()).ldelim();
        }
        for (const v of message.results) {
            abci_1.Result.encode(v, writer.uint32(122).fork()).ldelim();
        }
        if (message.last_executed_on !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.last_executed_on), writer.uint32(130).fork()).ldelim();
        }
        if (message.error_log !== "") {
            writer.uint32(138).string(message.error_log);
        }
        if (message.future_task_index !== "") {
            writer.uint32(146).string(message.future_task_index);
        }
        if (message.total_runs !== BigInt(0)) {
            writer.uint32(152).uint64(message.total_runs);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTask();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 4:
                    message.id = reader.uint64();
                    break;
                case 5:
                    message.activate_after = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.expire_after = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.minimum_interval = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.max_runs = reader.uint64();
                    break;
                case 10:
                    message.disable_on_error = reader.bool();
                    break;
                case 11:
                    message.enabled = reader.bool();
                    break;
                case 12:
                    message.task_gas_limit = reader.uint64();
                    break;
                case 13:
                    message.task_gas_fee = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 14:
                    message.messages.push(any_1.Any.decode(reader, reader.uint32()));
                    break;
                case 15:
                    message.results.push(abci_1.Result.decode(reader, reader.uint32()));
                    break;
                case 16:
                    message.last_executed_on = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 17:
                    message.error_log = reader.string();
                    break;
                case 18:
                    message.future_task_index = reader.string();
                    break;
                case 19:
                    message.total_runs = reader.uint64();
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
            creator: (0, helpers_1.isSet)(object.creator) ? String(object.creator) : "",
            id: (0, helpers_1.isSet)(object.id) ? BigInt(object.id.toString()) : BigInt(0),
            activate_after: (0, helpers_1.isSet)(object.activate_after) ? (0, helpers_1.fromJsonTimestamp)(object.activate_after) : undefined,
            expire_after: (0, helpers_1.isSet)(object.expire_after) ? (0, helpers_1.fromJsonTimestamp)(object.expire_after) : undefined,
            minimum_interval: (0, helpers_1.isSet)(object.minimum_interval) ? duration_1.Duration.fromJSON(object.minimum_interval) : undefined,
            max_runs: (0, helpers_1.isSet)(object.max_runs) ? BigInt(object.max_runs.toString()) : BigInt(0),
            disable_on_error: (0, helpers_1.isSet)(object.disable_on_error) ? Boolean(object.disable_on_error) : false,
            enabled: (0, helpers_1.isSet)(object.enabled) ? Boolean(object.enabled) : false,
            task_gas_limit: (0, helpers_1.isSet)(object.task_gas_limit) ? BigInt(object.task_gas_limit.toString()) : BigInt(0),
            task_gas_fee: (0, helpers_1.isSet)(object.task_gas_fee) ? coin_1.Coin.fromJSON(object.task_gas_fee) : undefined,
            messages: Array.isArray(object?.messages) ? object.messages.map((e) => any_1.Any.fromJSON(e)) : [],
            results: Array.isArray(object?.results) ? object.results.map((e) => abci_1.Result.fromJSON(e)) : [],
            last_executed_on: (0, helpers_1.isSet)(object.last_executed_on) ? (0, helpers_1.fromJsonTimestamp)(object.last_executed_on) : undefined,
            error_log: (0, helpers_1.isSet)(object.error_log) ? String(object.error_log) : "",
            future_task_index: (0, helpers_1.isSet)(object.future_task_index) ? String(object.future_task_index) : "",
            total_runs: (0, helpers_1.isSet)(object.total_runs) ? BigInt(object.total_runs.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
        message.activate_after !== undefined && (obj.activate_after = message.activate_after.toISOString());
        message.expire_after !== undefined && (obj.expire_after = message.expire_after.toISOString());
        message.minimum_interval !== undefined && (obj.minimum_interval = message.minimum_interval ? duration_1.Duration.toJSON(message.minimum_interval) : undefined);
        message.max_runs !== undefined && (obj.max_runs = (message.max_runs || BigInt(0)).toString());
        message.disable_on_error !== undefined && (obj.disable_on_error = message.disable_on_error);
        message.enabled !== undefined && (obj.enabled = message.enabled);
        message.task_gas_limit !== undefined && (obj.task_gas_limit = (message.task_gas_limit || BigInt(0)).toString());
        message.task_gas_fee !== undefined && (obj.task_gas_fee = message.task_gas_fee ? coin_1.Coin.toJSON(message.task_gas_fee) : undefined);
        if (message.messages) {
            obj.messages = message.messages.map(e => e ? any_1.Any.toJSON(e) : undefined);
        }
        else {
            obj.messages = [];
        }
        if (message.results) {
            obj.results = message.results.map(e => e ? abci_1.Result.toJSON(e) : undefined);
        }
        else {
            obj.results = [];
        }
        message.last_executed_on !== undefined && (obj.last_executed_on = message.last_executed_on.toISOString());
        message.error_log !== undefined && (obj.error_log = message.error_log);
        message.future_task_index !== undefined && (obj.future_task_index = message.future_task_index);
        message.total_runs !== undefined && (obj.total_runs = (message.total_runs || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTask();
        message.creator = object.creator ?? "";
        message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
        message.activate_after = object.activate_after ?? undefined;
        message.expire_after = object.expire_after ?? undefined;
        message.minimum_interval = object.minimum_interval !== undefined && object.minimum_interval !== null ? duration_1.Duration.fromPartial(object.minimum_interval) : undefined;
        message.max_runs = object.max_runs !== undefined && object.max_runs !== null ? BigInt(object.max_runs.toString()) : BigInt(0);
        message.disable_on_error = object.disable_on_error ?? false;
        message.enabled = object.enabled ?? false;
        message.task_gas_limit = object.task_gas_limit !== undefined && object.task_gas_limit !== null ? BigInt(object.task_gas_limit.toString()) : BigInt(0);
        message.task_gas_fee = object.task_gas_fee !== undefined && object.task_gas_fee !== null ? coin_1.Coin.fromPartial(object.task_gas_fee) : undefined;
        message.messages = object.messages?.map(e => any_1.Any.fromPartial(e)) || [];
        message.results = object.results?.map(e => abci_1.Result.fromPartial(e)) || [];
        message.last_executed_on = object.last_executed_on ?? undefined;
        message.error_log = object.error_log ?? "";
        message.future_task_index = object.future_task_index ?? "";
        message.total_runs = object.total_runs !== undefined && object.total_runs !== null ? BigInt(object.total_runs.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseTask();
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = BigInt(object.id);
        }
        if (object.activate_after !== undefined && object.activate_after !== null) {
            message.activate_after = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.activate_after));
        }
        if (object.expire_after !== undefined && object.expire_after !== null) {
            message.expire_after = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.expire_after));
        }
        if (object.minimum_interval !== undefined && object.minimum_interval !== null) {
            message.minimum_interval = duration_1.Duration.fromAmino(object.minimum_interval);
        }
        if (object.max_runs !== undefined && object.max_runs !== null) {
            message.max_runs = BigInt(object.max_runs);
        }
        if (object.disable_on_error !== undefined && object.disable_on_error !== null) {
            message.disable_on_error = object.disable_on_error;
        }
        if (object.enabled !== undefined && object.enabled !== null) {
            message.enabled = object.enabled;
        }
        if (object.task_gas_limit !== undefined && object.task_gas_limit !== null) {
            message.task_gas_limit = BigInt(object.task_gas_limit);
        }
        if (object.task_gas_fee !== undefined && object.task_gas_fee !== null) {
            message.task_gas_fee = coin_1.Coin.fromAmino(object.task_gas_fee);
        }
        message.messages = object.messages?.map(e => any_1.Any.fromAmino(e)) || [];
        message.results = object.results?.map(e => abci_1.Result.fromAmino(e)) || [];
        if (object.last_executed_on !== undefined && object.last_executed_on !== null) {
            message.last_executed_on = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.last_executed_on));
        }
        if (object.error_log !== undefined && object.error_log !== null) {
            message.error_log = object.error_log;
        }
        if (object.future_task_index !== undefined && object.future_task_index !== null) {
            message.future_task_index = object.future_task_index;
        }
        if (object.total_runs !== undefined && object.total_runs !== null) {
            message.total_runs = BigInt(object.total_runs);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.creator = message.creator;
        obj.id = message.id ? message.id.toString() : undefined;
        obj.activate_after = message.activate_after ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.activate_after)) : undefined;
        obj.expire_after = message.expire_after ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.expire_after)) : undefined;
        obj.minimum_interval = message.minimum_interval ? duration_1.Duration.toAmino(message.minimum_interval) : undefined;
        obj.max_runs = message.max_runs ? message.max_runs.toString() : undefined;
        obj.disable_on_error = message.disable_on_error;
        obj.enabled = message.enabled;
        obj.task_gas_limit = message.task_gas_limit ? message.task_gas_limit.toString() : undefined;
        obj.task_gas_fee = message.task_gas_fee ? coin_1.Coin.toAmino(message.task_gas_fee) : undefined;
        if (message.messages) {
            obj.messages = message.messages.map(e => e ? any_1.Any.toAmino(e) : undefined);
        }
        else {
            obj.messages = [];
        }
        if (message.results) {
            obj.results = message.results.map(e => e ? abci_1.Result.toAmino(e) : undefined);
        }
        else {
            obj.results = [];
        }
        obj.last_executed_on = message.last_executed_on ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.last_executed_on)) : undefined;
        obj.error_log = message.error_log;
        obj.future_task_index = message.future_task_index;
        obj.total_runs = message.total_runs ? message.total_runs.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Task.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Task.decode(message.value);
    },
    toProto(message) {
        return exports.Task.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.blit.Task",
            value: exports.Task.encode(message).finish()
        };
    }
};
//# sourceMappingURL=task.js.map
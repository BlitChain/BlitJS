//@ts-nocheck
import { Timestamp } from "../../google/protobuf/timestamp";
import { Duration, DurationAmino, DurationSDKType } from "../../google/protobuf/duration";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Any, AnyAmino, AnySDKType } from "../../google/protobuf/any";
import { Result, ResultAmino, ResultSDKType } from "../../cosmos/base/abci/v1beta1/abci";
import { BinaryReader, BinaryWriter } from "../../binary";
import { toTimestamp, fromTimestamp, isSet, fromJsonTimestamp } from "../../helpers";
export const protobufPackage = "blit.blit";
/**
 * Tasks are like cron jobs that can be scheduled to run at a specific time or
 * interval.
 */
export interface Task {
  creator: string;
  id: bigint;
  activate_after: Date;
  expire_after: Date;
  minimum_interval?: Duration;
  max_runs: bigint;
  disable_on_error: boolean;
  enabled: boolean;
  task_gas_limit: bigint;
  task_gas_fee: Coin;
  messages: Any[];
  results: Result[];
  last_executed_on?: Date;
  error_log: string;
  future_task_index: string;
  total_runs: bigint;
}
export interface TaskProtoMsg {
  type_url: "/blit.blit.Task";
  value: Uint8Array;
}
/**
 * Tasks are like cron jobs that can be scheduled to run at a specific time or
 * interval.
 */
export interface TaskAmino {
  creator?: string;
  id?: string;
  activate_after?: string;
  expire_after?: string;
  minimum_interval?: DurationAmino;
  max_runs?: string;
  disable_on_error?: boolean;
  enabled?: boolean;
  task_gas_limit?: string;
  task_gas_fee?: CoinAmino;
  messages?: AnyAmino[];
  results?: ResultAmino[];
  last_executed_on?: string;
  error_log?: string;
  future_task_index?: string;
  total_runs?: string;
}
export interface TaskAminoMsg {
  type: "/blit.blit.Task";
  value: TaskAmino;
}
/**
 * Tasks are like cron jobs that can be scheduled to run at a specific time or
 * interval.
 */
export interface TaskSDKType {
  creator: string;
  id: bigint;
  activate_after: Date;
  expire_after: Date;
  minimum_interval?: DurationSDKType;
  max_runs: bigint;
  disable_on_error: boolean;
  enabled: boolean;
  task_gas_limit: bigint;
  task_gas_fee: CoinSDKType;
  messages: AnySDKType[];
  results: ResultSDKType[];
  last_executed_on?: Date;
  error_log: string;
  future_task_index: string;
  total_runs: bigint;
}
function createBaseTask(): Task {
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
    task_gas_fee: Coin.fromPartial({}),
    messages: [],
    results: [],
    last_executed_on: undefined,
    error_log: "",
    future_task_index: "",
    total_runs: BigInt(0)
  };
}
export const Task = {
  typeUrl: "/blit.blit.Task",
  encode(message: Task, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(32).uint64(message.id);
    }
    if (message.activate_after !== undefined) {
      Timestamp.encode(toTimestamp(message.activate_after), writer.uint32(42).fork()).ldelim();
    }
    if (message.expire_after !== undefined) {
      Timestamp.encode(toTimestamp(message.expire_after), writer.uint32(50).fork()).ldelim();
    }
    if (message.minimum_interval !== undefined) {
      Duration.encode(message.minimum_interval, writer.uint32(58).fork()).ldelim();
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
      Coin.encode(message.task_gas_fee, writer.uint32(106).fork()).ldelim();
    }
    for (const v of message.messages) {
      Any.encode(v!, writer.uint32(114).fork()).ldelim();
    }
    for (const v of message.results) {
      Result.encode(v!, writer.uint32(122).fork()).ldelim();
    }
    if (message.last_executed_on !== undefined) {
      Timestamp.encode(toTimestamp(message.last_executed_on), writer.uint32(130).fork()).ldelim();
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
  decode(input: BinaryReader | Uint8Array, length?: number): Task {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
          message.activate_after = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 6:
          message.expire_after = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 7:
          message.minimum_interval = Duration.decode(reader, reader.uint32());
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
          message.task_gas_fee = Coin.decode(reader, reader.uint32());
          break;
        case 14:
          message.messages.push(Any.decode(reader, reader.uint32()));
          break;
        case 15:
          message.results.push(Result.decode(reader, reader.uint32()));
          break;
        case 16:
          message.last_executed_on = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
  fromJSON(object: any): Task {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      activate_after: isSet(object.activate_after) ? fromJsonTimestamp(object.activate_after) : undefined,
      expire_after: isSet(object.expire_after) ? fromJsonTimestamp(object.expire_after) : undefined,
      minimum_interval: isSet(object.minimum_interval) ? Duration.fromJSON(object.minimum_interval) : undefined,
      max_runs: isSet(object.max_runs) ? BigInt(object.max_runs.toString()) : BigInt(0),
      disable_on_error: isSet(object.disable_on_error) ? Boolean(object.disable_on_error) : false,
      enabled: isSet(object.enabled) ? Boolean(object.enabled) : false,
      task_gas_limit: isSet(object.task_gas_limit) ? BigInt(object.task_gas_limit.toString()) : BigInt(0),
      task_gas_fee: isSet(object.task_gas_fee) ? Coin.fromJSON(object.task_gas_fee) : undefined,
      messages: Array.isArray(object?.messages) ? object.messages.map((e: any) => Any.fromJSON(e)) : [],
      results: Array.isArray(object?.results) ? object.results.map((e: any) => Result.fromJSON(e)) : [],
      last_executed_on: isSet(object.last_executed_on) ? fromJsonTimestamp(object.last_executed_on) : undefined,
      error_log: isSet(object.error_log) ? String(object.error_log) : "",
      future_task_index: isSet(object.future_task_index) ? String(object.future_task_index) : "",
      total_runs: isSet(object.total_runs) ? BigInt(object.total_runs.toString()) : BigInt(0)
    };
  },
  toJSON(message: Task): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    message.activate_after !== undefined && (obj.activate_after = message.activate_after.toISOString());
    message.expire_after !== undefined && (obj.expire_after = message.expire_after.toISOString());
    message.minimum_interval !== undefined && (obj.minimum_interval = message.minimum_interval ? Duration.toJSON(message.minimum_interval) : undefined);
    message.max_runs !== undefined && (obj.max_runs = (message.max_runs || BigInt(0)).toString());
    message.disable_on_error !== undefined && (obj.disable_on_error = message.disable_on_error);
    message.enabled !== undefined && (obj.enabled = message.enabled);
    message.task_gas_limit !== undefined && (obj.task_gas_limit = (message.task_gas_limit || BigInt(0)).toString());
    message.task_gas_fee !== undefined && (obj.task_gas_fee = message.task_gas_fee ? Coin.toJSON(message.task_gas_fee) : undefined);
    if (message.messages) {
      obj.messages = message.messages.map(e => e ? Any.toJSON(e) : undefined);
    } else {
      obj.messages = [];
    }
    if (message.results) {
      obj.results = message.results.map(e => e ? Result.toJSON(e) : undefined);
    } else {
      obj.results = [];
    }
    message.last_executed_on !== undefined && (obj.last_executed_on = message.last_executed_on.toISOString());
    message.error_log !== undefined && (obj.error_log = message.error_log);
    message.future_task_index !== undefined && (obj.future_task_index = message.future_task_index);
    message.total_runs !== undefined && (obj.total_runs = (message.total_runs || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<Task>): Task {
    const message = createBaseTask();
    message.creator = object.creator ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.activate_after = object.activate_after ?? undefined;
    message.expire_after = object.expire_after ?? undefined;
    message.minimum_interval = object.minimum_interval !== undefined && object.minimum_interval !== null ? Duration.fromPartial(object.minimum_interval) : undefined;
    message.max_runs = object.max_runs !== undefined && object.max_runs !== null ? BigInt(object.max_runs.toString()) : BigInt(0);
    message.disable_on_error = object.disable_on_error ?? false;
    message.enabled = object.enabled ?? false;
    message.task_gas_limit = object.task_gas_limit !== undefined && object.task_gas_limit !== null ? BigInt(object.task_gas_limit.toString()) : BigInt(0);
    message.task_gas_fee = object.task_gas_fee !== undefined && object.task_gas_fee !== null ? Coin.fromPartial(object.task_gas_fee) : undefined;
    message.messages = object.messages?.map(e => Any.fromPartial(e)) || [];
    message.results = object.results?.map(e => Result.fromPartial(e)) || [];
    message.last_executed_on = object.last_executed_on ?? undefined;
    message.error_log = object.error_log ?? "";
    message.future_task_index = object.future_task_index ?? "";
    message.total_runs = object.total_runs !== undefined && object.total_runs !== null ? BigInt(object.total_runs.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: TaskAmino): Task {
    const message = createBaseTask();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.activate_after !== undefined && object.activate_after !== null) {
      message.activate_after = fromTimestamp(Timestamp.fromAmino(object.activate_after));
    }
    if (object.expire_after !== undefined && object.expire_after !== null) {
      message.expire_after = fromTimestamp(Timestamp.fromAmino(object.expire_after));
    }
    if (object.minimum_interval !== undefined && object.minimum_interval !== null) {
      message.minimum_interval = Duration.fromAmino(object.minimum_interval);
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
      message.task_gas_fee = Coin.fromAmino(object.task_gas_fee);
    }
    message.messages = object.messages?.map(e => Any.fromAmino(e)) || [];
    message.results = object.results?.map(e => Result.fromAmino(e)) || [];
    if (object.last_executed_on !== undefined && object.last_executed_on !== null) {
      message.last_executed_on = fromTimestamp(Timestamp.fromAmino(object.last_executed_on));
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
  toAmino(message: Task): TaskAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.id = message.id ? message.id.toString() : undefined;
    obj.activate_after = message.activate_after ? Timestamp.toAmino(toTimestamp(message.activate_after)) : undefined;
    obj.expire_after = message.expire_after ? Timestamp.toAmino(toTimestamp(message.expire_after)) : undefined;
    obj.minimum_interval = message.minimum_interval ? Duration.toAmino(message.minimum_interval) : undefined;
    obj.max_runs = message.max_runs ? message.max_runs.toString() : undefined;
    obj.disable_on_error = message.disable_on_error;
    obj.enabled = message.enabled;
    obj.task_gas_limit = message.task_gas_limit ? message.task_gas_limit.toString() : undefined;
    obj.task_gas_fee = message.task_gas_fee ? Coin.toAmino(message.task_gas_fee) : undefined;
    if (message.messages) {
      obj.messages = message.messages.map(e => e ? Any.toAmino(e) : undefined);
    } else {
      obj.messages = [];
    }
    if (message.results) {
      obj.results = message.results.map(e => e ? Result.toAmino(e) : undefined);
    } else {
      obj.results = [];
    }
    obj.last_executed_on = message.last_executed_on ? Timestamp.toAmino(toTimestamp(message.last_executed_on)) : undefined;
    obj.error_log = message.error_log;
    obj.future_task_index = message.future_task_index;
    obj.total_runs = message.total_runs ? message.total_runs.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: TaskAminoMsg): Task {
    return Task.fromAmino(object.value);
  },
  fromProtoMsg(message: TaskProtoMsg): Task {
    return Task.decode(message.value);
  },
  toProto(message: Task): Uint8Array {
    return Task.encode(message).finish();
  },
  toProtoMsg(message: Task): TaskProtoMsg {
    return {
      typeUrl: "/blit.blit.Task",
      value: Task.encode(message).finish()
    };
  }
};
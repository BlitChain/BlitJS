import { Duration, DurationAmino, DurationSDKType } from "../../google/protobuf/duration";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Any, AnyAmino, AnySDKType } from "../../google/protobuf/any";
import { Result, ResultAmino, ResultSDKType } from "../../cosmos/base/abci/v1beta1/abci";
import { BinaryReader, BinaryWriter } from "../../binary";
export declare const protobufPackage = "blit.blit";
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
    creator: string;
    id: string;
    activate_after?: string;
    expire_after?: string;
    minimum_interval?: DurationAmino;
    max_runs: string;
    disable_on_error: boolean;
    enabled: boolean;
    task_gas_limit: string;
    task_gas_fee?: CoinAmino;
    messages: AnyAmino[];
    results: ResultAmino[];
    last_executed_on?: string;
    error_log: string;
    future_task_index: string;
    total_runs: string;
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
export declare const Task: {
    typeUrl: string;
    encode(message: Task, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Task;
    fromJSON(object: any): Task;
    toJSON(message: Task): unknown;
    fromPartial(object: Partial<Task>): Task;
    fromAmino(object: TaskAmino): Task;
    toAmino(message: Task): TaskAmino;
    fromAminoMsg(object: TaskAminoMsg): Task;
    fromProtoMsg(message: TaskProtoMsg): Task;
    toProto(message: Task): Uint8Array;
    toProtoMsg(message: Task): TaskProtoMsg;
};

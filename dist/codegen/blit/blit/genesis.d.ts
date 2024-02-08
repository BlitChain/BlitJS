import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Task, TaskAmino, TaskSDKType } from "./task";
import { FutureTask, FutureTaskAmino, FutureTaskSDKType } from "./future_task";
import { BinaryReader, BinaryWriter } from "../../binary";
export declare const protobufPackage = "blit.blit";
/** GenesisState defines the blit module's genesis state. */
export interface GenesisState {
    /** params defines all the parameters of the module. */
    params: Params;
    task_list: Task[];
    future_task_list: FutureTask[];
    starting_task_id: bigint;
}
export interface GenesisStateProtoMsg {
    type_url: "/blit.blit.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the blit module's genesis state. */
export interface GenesisStateAmino {
    /** params defines all the parameters of the module. */
    params: ParamsAmino;
    task_list?: TaskAmino[];
    future_task_list?: FutureTaskAmino[];
    starting_task_id?: string;
}
export interface GenesisStateAminoMsg {
    type: "/blit.blit.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the blit module's genesis state. */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    task_list: TaskSDKType[];
    future_task_list: FutureTaskSDKType[];
    starting_task_id: bigint;
}
export declare const GenesisState: {
    typeUrl: string;
    is(o: any): o is GenesisState;
    isSDK(o: any): o is GenesisStateSDKType;
    isAmino(o: any): o is GenesisStateAmino;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: Partial<GenesisState>): GenesisState;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};

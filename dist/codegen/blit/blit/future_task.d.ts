import { DecCoin, DecCoinAmino, DecCoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
export declare const protobufPackage = "blit.blit";
export declare enum FutureTaskStatus {
    NONE = 0,
    PENDING = 1,
    POOL = 2,
    UNRECOGNIZED = -1
}
export declare const FutureTaskStatusSDKType: typeof FutureTaskStatus;
export declare const FutureTaskStatusAmino: typeof FutureTaskStatus;
export declare function futureTaskStatusFromJSON(object: any): FutureTaskStatus;
export declare function futureTaskStatusToJSON(object: FutureTaskStatus): string;
export interface FutureTask {
    index: string;
    scheduled_on: Date;
    task_id: bigint;
    status: FutureTaskStatus;
    gas_price?: DecCoin;
}
export interface FutureTaskProtoMsg {
    type_url: "/blit.blit.FutureTask";
    value: Uint8Array;
}
export interface FutureTaskAmino {
    index?: string;
    scheduled_on?: string;
    task_id?: string;
    status?: FutureTaskStatus;
    gas_price?: DecCoinAmino;
}
export interface FutureTaskAminoMsg {
    type: "/blit.blit.FutureTask";
    value: FutureTaskAmino;
}
export interface FutureTaskSDKType {
    index: string;
    scheduled_on: Date;
    task_id: bigint;
    status: FutureTaskStatus;
    gas_price?: DecCoinSDKType;
}
export declare const FutureTask: {
    typeUrl: string;
    is(o: any): o is FutureTask;
    isSDK(o: any): o is FutureTaskSDKType;
    isAmino(o: any): o is FutureTaskAmino;
    encode(message: FutureTask, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): FutureTask;
    fromJSON(object: any): FutureTask;
    toJSON(message: FutureTask): unknown;
    fromPartial(object: Partial<FutureTask>): FutureTask;
    fromAmino(object: FutureTaskAmino): FutureTask;
    toAmino(message: FutureTask): FutureTaskAmino;
    fromAminoMsg(object: FutureTaskAminoMsg): FutureTask;
    fromProtoMsg(message: FutureTaskProtoMsg): FutureTask;
    toProto(message: FutureTask): Uint8Array;
    toProtoMsg(message: FutureTask): FutureTaskProtoMsg;
};

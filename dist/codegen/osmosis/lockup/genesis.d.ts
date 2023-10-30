import { PeriodLock, PeriodLockAmino, PeriodLockSDKType, SyntheticLock, SyntheticLockAmino, SyntheticLockSDKType } from "./lock";
import { BinaryReader, BinaryWriter } from "../../binary";
/** GenesisState defines the lockup module's genesis state. */
export interface GenesisState {
    last_lock_id: bigint;
    locks: PeriodLock[];
    synthetic_locks: SyntheticLock[];
}
export interface GenesisStateProtoMsg {
    type_url: "/osmosis.lockup.GenesisState";
    value: Uint8Array;
}
export interface GenesisStateProtoMsg {
    type_url: "/osmosis.lockup.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the lockup module's genesis state. */
export interface GenesisStateAmino {
    last_lock_id: string;
    locks: PeriodLockAmino[];
    synthetic_locks: SyntheticLockAmino[];
}
export interface GenesisStateAminoMsg {
    type: "osmosis/lockup/genesis-state";
    value: GenesisStateAmino;
}
/** GenesisState defines the lockup module's genesis state. */
export interface GenesisStateSDKType {
    last_lock_id: bigint;
    locks: PeriodLockSDKType[];
    synthetic_locks: SyntheticLockSDKType[];
}
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: Partial<GenesisState>): GenesisState;
    fromSDK(object: GenesisStateSDKType): GenesisState;
    toSDK(message: GenesisState): GenesisStateSDKType;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    toAminoMsg(message: GenesisState): GenesisStateAminoMsg;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};

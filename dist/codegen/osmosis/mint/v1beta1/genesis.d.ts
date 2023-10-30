import { Minter, MinterAmino, MinterSDKType, Params, ParamsAmino, ParamsSDKType } from "./mint";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** GenesisState defines the mint module's genesis state. */
export interface GenesisState {
    /** minter is an abstraction for holding current rewards information. */
    minter: Minter;
    /** params defines all the paramaters of the mint module. */
    params: Params;
    /**
     * reduction_started_epoch is the first epoch in which the reduction of mint
     * begins.
     */
    reduction_started_epoch: bigint;
}
export interface GenesisStateProtoMsg {
    type_url: "/osmosis.mint.v1beta1.GenesisState";
    value: Uint8Array;
}
export interface GenesisStateProtoMsg {
    type_url: "/osmosis.mint.v1beta1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the mint module's genesis state. */
export interface GenesisStateAmino {
    /** minter is an abstraction for holding current rewards information. */
    minter?: MinterAmino;
    /** params defines all the paramaters of the mint module. */
    params?: ParamsAmino;
    /**
     * reduction_started_epoch is the first epoch in which the reduction of mint
     * begins.
     */
    reduction_started_epoch: string;
}
export interface GenesisStateAminoMsg {
    type: "osmosis/mint/genesis-state";
    value: GenesisStateAmino;
}
/** GenesisState defines the mint module's genesis state. */
export interface GenesisStateSDKType {
    minter: MinterSDKType;
    params: ParamsSDKType;
    reduction_started_epoch: bigint;
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

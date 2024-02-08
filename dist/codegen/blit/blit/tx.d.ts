import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Duration, DurationAmino, DurationSDKType } from "../../google/protobuf/duration";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../binary";
export declare const protobufPackage = "blit.blit";
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParams {
    /**
     * authority is the address that controls the module (defaults to x/gov unless
     * overwritten).
     */
    authority: string;
    /** NOTE: All parameters must be supplied. */
    params: Params;
}
export interface MsgUpdateParamsProtoMsg {
    type_url: "/blit.blit.MsgUpdateParams";
    value: Uint8Array;
}
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParamsAmino {
    /**
     * authority is the address that controls the module (defaults to x/gov unless
     * overwritten).
     */
    authority?: string;
    /** NOTE: All parameters must be supplied. */
    params: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
    type: "blit/x/blit/MsgUpdateParams";
    value: MsgUpdateParamsAmino;
}
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParamsSDKType {
    authority: string;
    params: ParamsSDKType;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponse {
}
export interface MsgUpdateParamsResponseProtoMsg {
    type_url: "/blit.blit.MsgUpdateParamsResponse";
    value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponseAmino {
}
export interface MsgUpdateParamsResponseAminoMsg {
    type: "/blit.blit.MsgUpdateParamsResponse";
    value: MsgUpdateParamsResponseAmino;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponseSDKType {
}
export interface MsgMintCoins {
    amount: Coin;
    grantee: string;
}
export interface MsgMintCoinsProtoMsg {
    type_url: "/blit.blit.MsgMintCoins";
    value: Uint8Array;
}
export interface MsgMintCoinsAmino {
    amount: CoinAmino;
    grantee?: string;
}
export interface MsgMintCoinsAminoMsg {
    type: "/blit.blit.MsgMintCoins";
    value: MsgMintCoinsAmino;
}
export interface MsgMintCoinsSDKType {
    amount: CoinSDKType;
    grantee: string;
}
export interface MsgMintCoinsResponse {
}
export interface MsgMintCoinsResponseProtoMsg {
    type_url: "/blit.blit.MsgMintCoinsResponse";
    value: Uint8Array;
}
export interface MsgMintCoinsResponseAmino {
}
export interface MsgMintCoinsResponseAminoMsg {
    type: "/blit.blit.MsgMintCoinsResponse";
    value: MsgMintCoinsResponseAmino;
}
export interface MsgMintCoinsResponseSDKType {
}
export interface MsgBurnCoins {
    amount: Coin;
    grantee: string;
}
export interface MsgBurnCoinsProtoMsg {
    type_url: "/blit.blit.MsgBurnCoins";
    value: Uint8Array;
}
export interface MsgBurnCoinsAmino {
    amount: CoinAmino;
    grantee?: string;
}
export interface MsgBurnCoinsAminoMsg {
    type: "/blit.blit.MsgBurnCoins";
    value: MsgBurnCoinsAmino;
}
export interface MsgBurnCoinsSDKType {
    amount: CoinSDKType;
    grantee: string;
}
export interface MsgBurnCoinsResponse {
}
export interface MsgBurnCoinsResponseProtoMsg {
    type_url: "/blit.blit.MsgBurnCoinsResponse";
    value: Uint8Array;
}
export interface MsgBurnCoinsResponseAmino {
}
export interface MsgBurnCoinsResponseAminoMsg {
    type: "/blit.blit.MsgBurnCoinsResponse";
    value: MsgBurnCoinsResponseAmino;
}
export interface MsgBurnCoinsResponseSDKType {
}
export interface MsgForceTransferCoins {
    amount: Coin;
    from_address: string;
    to_address: string;
    grantee: string;
}
export interface MsgForceTransferCoinsProtoMsg {
    type_url: "/blit.blit.MsgForceTransferCoins";
    value: Uint8Array;
}
export interface MsgForceTransferCoinsAmino {
    amount: CoinAmino;
    from_address?: string;
    to_address?: string;
    grantee?: string;
}
export interface MsgForceTransferCoinsAminoMsg {
    type: "/blit.blit.MsgForceTransferCoins";
    value: MsgForceTransferCoinsAmino;
}
export interface MsgForceTransferCoinsSDKType {
    amount: CoinSDKType;
    from_address: string;
    to_address: string;
    grantee: string;
}
export interface MsgForceTransferCoinsResponse {
}
export interface MsgForceTransferCoinsResponseProtoMsg {
    type_url: "/blit.blit.MsgForceTransferCoinsResponse";
    value: Uint8Array;
}
export interface MsgForceTransferCoinsResponseAmino {
}
export interface MsgForceTransferCoinsResponseAminoMsg {
    type: "/blit.blit.MsgForceTransferCoinsResponse";
    value: MsgForceTransferCoinsResponseAmino;
}
export interface MsgForceTransferCoinsResponseSDKType {
}
export interface MsgSetDenomMetadata {
    authority: string;
    base: string;
    display: string;
    name: string;
    symbol: string;
    uri: string;
    uri_hash: string;
    exponent: number;
    description: string;
}
export interface MsgSetDenomMetadataProtoMsg {
    type_url: "/blit.blit.MsgSetDenomMetadata";
    value: Uint8Array;
}
export interface MsgSetDenomMetadataAmino {
    authority?: string;
    base?: string;
    display?: string;
    name?: string;
    symbol?: string;
    uri?: string;
    uri_hash?: string;
    exponent?: number;
    description?: string;
}
export interface MsgSetDenomMetadataAminoMsg {
    type: "/blit.blit.MsgSetDenomMetadata";
    value: MsgSetDenomMetadataAmino;
}
export interface MsgSetDenomMetadataSDKType {
    authority: string;
    base: string;
    display: string;
    name: string;
    symbol: string;
    uri: string;
    uri_hash: string;
    exponent: number;
    description: string;
}
export interface MsgSetDenomMetadataResponse {
}
export interface MsgSetDenomMetadataResponseProtoMsg {
    type_url: "/blit.blit.MsgSetDenomMetadataResponse";
    value: Uint8Array;
}
export interface MsgSetDenomMetadataResponseAmino {
}
export interface MsgSetDenomMetadataResponseAminoMsg {
    type: "/blit.blit.MsgSetDenomMetadataResponse";
    value: MsgSetDenomMetadataResponseAmino;
}
export interface MsgSetDenomMetadataResponseSDKType {
}
export interface MsgCreateTask {
    creator: string;
    activate_after: Date;
    expire_after: Date;
    minimum_interval?: Duration;
    max_runs: bigint;
    disable_on_error: boolean;
    enabled: boolean;
    task_gas_limit: bigint;
    task_gas_fee: Coin;
    messages: (Any)[] | Any[];
}
export interface MsgCreateTaskProtoMsg {
    type_url: "/blit.blit.MsgCreateTask";
    value: Uint8Array;
}
export type MsgCreateTaskEncoded = Omit<MsgCreateTask, "messages"> & {
    messages: (AnyProtoMsg)[];
};
export interface MsgCreateTaskAmino {
    creator?: string;
    activate_after: string;
    expire_after: string;
    minimum_interval?: DurationAmino;
    max_runs?: string;
    disable_on_error?: boolean;
    enabled?: boolean;
    task_gas_limit?: string;
    task_gas_fee?: CoinAmino;
    messages?: AnyAmino[];
}
export interface MsgCreateTaskAminoMsg {
    type: "/blit.blit.MsgCreateTask";
    value: MsgCreateTaskAmino;
}
export interface MsgCreateTaskSDKType {
    creator: string;
    activate_after: Date;
    expire_after: Date;
    minimum_interval?: DurationSDKType;
    max_runs: bigint;
    disable_on_error: boolean;
    enabled: boolean;
    task_gas_limit: bigint;
    task_gas_fee: CoinSDKType;
    messages: (AnySDKType)[];
}
export interface MsgCreateTaskResponse {
    id: bigint;
}
export interface MsgCreateTaskResponseProtoMsg {
    type_url: "/blit.blit.MsgCreateTaskResponse";
    value: Uint8Array;
}
export interface MsgCreateTaskResponseAmino {
    id?: string;
}
export interface MsgCreateTaskResponseAminoMsg {
    type: "/blit.blit.MsgCreateTaskResponse";
    value: MsgCreateTaskResponseAmino;
}
export interface MsgCreateTaskResponseSDKType {
    id: bigint;
}
export interface MsgDeleteTask {
    creator: string;
    id: bigint;
}
export interface MsgDeleteTaskProtoMsg {
    type_url: "/blit.blit.MsgDeleteTask";
    value: Uint8Array;
}
export interface MsgDeleteTaskAmino {
    creator?: string;
    id?: string;
}
export interface MsgDeleteTaskAminoMsg {
    type: "/blit.blit.MsgDeleteTask";
    value: MsgDeleteTaskAmino;
}
export interface MsgDeleteTaskSDKType {
    creator: string;
    id: bigint;
}
export interface MsgDeleteTaskResponse {
}
export interface MsgDeleteTaskResponseProtoMsg {
    type_url: "/blit.blit.MsgDeleteTaskResponse";
    value: Uint8Array;
}
export interface MsgDeleteTaskResponseAmino {
}
export interface MsgDeleteTaskResponseAminoMsg {
    type: "/blit.blit.MsgDeleteTaskResponse";
    value: MsgDeleteTaskResponseAmino;
}
export interface MsgDeleteTaskResponseSDKType {
}
export declare const MsgUpdateParams: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgUpdateParams;
    isSDK(o: any): o is MsgUpdateParamsSDKType;
    isAmino(o: any): o is MsgUpdateParamsAmino;
    encode(message: MsgUpdateParams, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams;
    fromJSON(object: any): MsgUpdateParams;
    toJSON(message: MsgUpdateParams): unknown;
    fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams;
    fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams;
    toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino;
    fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams;
    toAminoMsg(message: MsgUpdateParams): MsgUpdateParamsAminoMsg;
    fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams;
    toProto(message: MsgUpdateParams): Uint8Array;
    toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg;
};
export declare const MsgUpdateParamsResponse: {
    typeUrl: string;
    is(o: any): o is MsgUpdateParamsResponse;
    isSDK(o: any): o is MsgUpdateParamsResponseSDKType;
    isAmino(o: any): o is MsgUpdateParamsResponseAmino;
    encode(_: MsgUpdateParamsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse;
    fromJSON(_: any): MsgUpdateParamsResponse;
    toJSON(_: MsgUpdateParamsResponse): unknown;
    fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse;
    fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse;
    toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino;
    fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse;
    fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse;
    toProto(message: MsgUpdateParamsResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg;
};
export declare const MsgMintCoins: {
    typeUrl: string;
    is(o: any): o is MsgMintCoins;
    isSDK(o: any): o is MsgMintCoinsSDKType;
    isAmino(o: any): o is MsgMintCoinsAmino;
    encode(message: MsgMintCoins, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgMintCoins;
    fromJSON(object: any): MsgMintCoins;
    toJSON(message: MsgMintCoins): unknown;
    fromPartial(object: Partial<MsgMintCoins>): MsgMintCoins;
    fromAmino(object: MsgMintCoinsAmino): MsgMintCoins;
    toAmino(message: MsgMintCoins): MsgMintCoinsAmino;
    fromAminoMsg(object: MsgMintCoinsAminoMsg): MsgMintCoins;
    fromProtoMsg(message: MsgMintCoinsProtoMsg): MsgMintCoins;
    toProto(message: MsgMintCoins): Uint8Array;
    toProtoMsg(message: MsgMintCoins): MsgMintCoinsProtoMsg;
};
export declare const MsgMintCoinsResponse: {
    typeUrl: string;
    is(o: any): o is MsgMintCoinsResponse;
    isSDK(o: any): o is MsgMintCoinsResponseSDKType;
    isAmino(o: any): o is MsgMintCoinsResponseAmino;
    encode(_: MsgMintCoinsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgMintCoinsResponse;
    fromJSON(_: any): MsgMintCoinsResponse;
    toJSON(_: MsgMintCoinsResponse): unknown;
    fromPartial(_: Partial<MsgMintCoinsResponse>): MsgMintCoinsResponse;
    fromAmino(_: MsgMintCoinsResponseAmino): MsgMintCoinsResponse;
    toAmino(_: MsgMintCoinsResponse): MsgMintCoinsResponseAmino;
    fromAminoMsg(object: MsgMintCoinsResponseAminoMsg): MsgMintCoinsResponse;
    fromProtoMsg(message: MsgMintCoinsResponseProtoMsg): MsgMintCoinsResponse;
    toProto(message: MsgMintCoinsResponse): Uint8Array;
    toProtoMsg(message: MsgMintCoinsResponse): MsgMintCoinsResponseProtoMsg;
};
export declare const MsgBurnCoins: {
    typeUrl: string;
    is(o: any): o is MsgBurnCoins;
    isSDK(o: any): o is MsgBurnCoinsSDKType;
    isAmino(o: any): o is MsgBurnCoinsAmino;
    encode(message: MsgBurnCoins, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgBurnCoins;
    fromJSON(object: any): MsgBurnCoins;
    toJSON(message: MsgBurnCoins): unknown;
    fromPartial(object: Partial<MsgBurnCoins>): MsgBurnCoins;
    fromAmino(object: MsgBurnCoinsAmino): MsgBurnCoins;
    toAmino(message: MsgBurnCoins): MsgBurnCoinsAmino;
    fromAminoMsg(object: MsgBurnCoinsAminoMsg): MsgBurnCoins;
    fromProtoMsg(message: MsgBurnCoinsProtoMsg): MsgBurnCoins;
    toProto(message: MsgBurnCoins): Uint8Array;
    toProtoMsg(message: MsgBurnCoins): MsgBurnCoinsProtoMsg;
};
export declare const MsgBurnCoinsResponse: {
    typeUrl: string;
    is(o: any): o is MsgBurnCoinsResponse;
    isSDK(o: any): o is MsgBurnCoinsResponseSDKType;
    isAmino(o: any): o is MsgBurnCoinsResponseAmino;
    encode(_: MsgBurnCoinsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgBurnCoinsResponse;
    fromJSON(_: any): MsgBurnCoinsResponse;
    toJSON(_: MsgBurnCoinsResponse): unknown;
    fromPartial(_: Partial<MsgBurnCoinsResponse>): MsgBurnCoinsResponse;
    fromAmino(_: MsgBurnCoinsResponseAmino): MsgBurnCoinsResponse;
    toAmino(_: MsgBurnCoinsResponse): MsgBurnCoinsResponseAmino;
    fromAminoMsg(object: MsgBurnCoinsResponseAminoMsg): MsgBurnCoinsResponse;
    fromProtoMsg(message: MsgBurnCoinsResponseProtoMsg): MsgBurnCoinsResponse;
    toProto(message: MsgBurnCoinsResponse): Uint8Array;
    toProtoMsg(message: MsgBurnCoinsResponse): MsgBurnCoinsResponseProtoMsg;
};
export declare const MsgForceTransferCoins: {
    typeUrl: string;
    is(o: any): o is MsgForceTransferCoins;
    isSDK(o: any): o is MsgForceTransferCoinsSDKType;
    isAmino(o: any): o is MsgForceTransferCoinsAmino;
    encode(message: MsgForceTransferCoins, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgForceTransferCoins;
    fromJSON(object: any): MsgForceTransferCoins;
    toJSON(message: MsgForceTransferCoins): unknown;
    fromPartial(object: Partial<MsgForceTransferCoins>): MsgForceTransferCoins;
    fromAmino(object: MsgForceTransferCoinsAmino): MsgForceTransferCoins;
    toAmino(message: MsgForceTransferCoins): MsgForceTransferCoinsAmino;
    fromAminoMsg(object: MsgForceTransferCoinsAminoMsg): MsgForceTransferCoins;
    fromProtoMsg(message: MsgForceTransferCoinsProtoMsg): MsgForceTransferCoins;
    toProto(message: MsgForceTransferCoins): Uint8Array;
    toProtoMsg(message: MsgForceTransferCoins): MsgForceTransferCoinsProtoMsg;
};
export declare const MsgForceTransferCoinsResponse: {
    typeUrl: string;
    is(o: any): o is MsgForceTransferCoinsResponse;
    isSDK(o: any): o is MsgForceTransferCoinsResponseSDKType;
    isAmino(o: any): o is MsgForceTransferCoinsResponseAmino;
    encode(_: MsgForceTransferCoinsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgForceTransferCoinsResponse;
    fromJSON(_: any): MsgForceTransferCoinsResponse;
    toJSON(_: MsgForceTransferCoinsResponse): unknown;
    fromPartial(_: Partial<MsgForceTransferCoinsResponse>): MsgForceTransferCoinsResponse;
    fromAmino(_: MsgForceTransferCoinsResponseAmino): MsgForceTransferCoinsResponse;
    toAmino(_: MsgForceTransferCoinsResponse): MsgForceTransferCoinsResponseAmino;
    fromAminoMsg(object: MsgForceTransferCoinsResponseAminoMsg): MsgForceTransferCoinsResponse;
    fromProtoMsg(message: MsgForceTransferCoinsResponseProtoMsg): MsgForceTransferCoinsResponse;
    toProto(message: MsgForceTransferCoinsResponse): Uint8Array;
    toProtoMsg(message: MsgForceTransferCoinsResponse): MsgForceTransferCoinsResponseProtoMsg;
};
export declare const MsgSetDenomMetadata: {
    typeUrl: string;
    is(o: any): o is MsgSetDenomMetadata;
    isSDK(o: any): o is MsgSetDenomMetadataSDKType;
    isAmino(o: any): o is MsgSetDenomMetadataAmino;
    encode(message: MsgSetDenomMetadata, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSetDenomMetadata;
    fromJSON(object: any): MsgSetDenomMetadata;
    toJSON(message: MsgSetDenomMetadata): unknown;
    fromPartial(object: Partial<MsgSetDenomMetadata>): MsgSetDenomMetadata;
    fromAmino(object: MsgSetDenomMetadataAmino): MsgSetDenomMetadata;
    toAmino(message: MsgSetDenomMetadata): MsgSetDenomMetadataAmino;
    fromAminoMsg(object: MsgSetDenomMetadataAminoMsg): MsgSetDenomMetadata;
    fromProtoMsg(message: MsgSetDenomMetadataProtoMsg): MsgSetDenomMetadata;
    toProto(message: MsgSetDenomMetadata): Uint8Array;
    toProtoMsg(message: MsgSetDenomMetadata): MsgSetDenomMetadataProtoMsg;
};
export declare const MsgSetDenomMetadataResponse: {
    typeUrl: string;
    is(o: any): o is MsgSetDenomMetadataResponse;
    isSDK(o: any): o is MsgSetDenomMetadataResponseSDKType;
    isAmino(o: any): o is MsgSetDenomMetadataResponseAmino;
    encode(_: MsgSetDenomMetadataResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSetDenomMetadataResponse;
    fromJSON(_: any): MsgSetDenomMetadataResponse;
    toJSON(_: MsgSetDenomMetadataResponse): unknown;
    fromPartial(_: Partial<MsgSetDenomMetadataResponse>): MsgSetDenomMetadataResponse;
    fromAmino(_: MsgSetDenomMetadataResponseAmino): MsgSetDenomMetadataResponse;
    toAmino(_: MsgSetDenomMetadataResponse): MsgSetDenomMetadataResponseAmino;
    fromAminoMsg(object: MsgSetDenomMetadataResponseAminoMsg): MsgSetDenomMetadataResponse;
    fromProtoMsg(message: MsgSetDenomMetadataResponseProtoMsg): MsgSetDenomMetadataResponse;
    toProto(message: MsgSetDenomMetadataResponse): Uint8Array;
    toProtoMsg(message: MsgSetDenomMetadataResponse): MsgSetDenomMetadataResponseProtoMsg;
};
export declare const MsgCreateTask: {
    typeUrl: string;
    is(o: any): o is MsgCreateTask;
    isSDK(o: any): o is MsgCreateTaskSDKType;
    isAmino(o: any): o is MsgCreateTaskAmino;
    encode(message: MsgCreateTask, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateTask;
    fromJSON(object: any): MsgCreateTask;
    toJSON(message: MsgCreateTask): unknown;
    fromPartial(object: Partial<MsgCreateTask>): MsgCreateTask;
    fromAmino(object: MsgCreateTaskAmino): MsgCreateTask;
    toAmino(message: MsgCreateTask): MsgCreateTaskAmino;
    fromAminoMsg(object: MsgCreateTaskAminoMsg): MsgCreateTask;
    fromProtoMsg(message: MsgCreateTaskProtoMsg): MsgCreateTask;
    toProto(message: MsgCreateTask): Uint8Array;
    toProtoMsg(message: MsgCreateTask): MsgCreateTaskProtoMsg;
};
export declare const MsgCreateTaskResponse: {
    typeUrl: string;
    is(o: any): o is MsgCreateTaskResponse;
    isSDK(o: any): o is MsgCreateTaskResponseSDKType;
    isAmino(o: any): o is MsgCreateTaskResponseAmino;
    encode(message: MsgCreateTaskResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateTaskResponse;
    fromJSON(object: any): MsgCreateTaskResponse;
    toJSON(message: MsgCreateTaskResponse): unknown;
    fromPartial(object: Partial<MsgCreateTaskResponse>): MsgCreateTaskResponse;
    fromAmino(object: MsgCreateTaskResponseAmino): MsgCreateTaskResponse;
    toAmino(message: MsgCreateTaskResponse): MsgCreateTaskResponseAmino;
    fromAminoMsg(object: MsgCreateTaskResponseAminoMsg): MsgCreateTaskResponse;
    fromProtoMsg(message: MsgCreateTaskResponseProtoMsg): MsgCreateTaskResponse;
    toProto(message: MsgCreateTaskResponse): Uint8Array;
    toProtoMsg(message: MsgCreateTaskResponse): MsgCreateTaskResponseProtoMsg;
};
export declare const MsgDeleteTask: {
    typeUrl: string;
    is(o: any): o is MsgDeleteTask;
    isSDK(o: any): o is MsgDeleteTaskSDKType;
    isAmino(o: any): o is MsgDeleteTaskAmino;
    encode(message: MsgDeleteTask, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgDeleteTask;
    fromJSON(object: any): MsgDeleteTask;
    toJSON(message: MsgDeleteTask): unknown;
    fromPartial(object: Partial<MsgDeleteTask>): MsgDeleteTask;
    fromAmino(object: MsgDeleteTaskAmino): MsgDeleteTask;
    toAmino(message: MsgDeleteTask): MsgDeleteTaskAmino;
    fromAminoMsg(object: MsgDeleteTaskAminoMsg): MsgDeleteTask;
    fromProtoMsg(message: MsgDeleteTaskProtoMsg): MsgDeleteTask;
    toProto(message: MsgDeleteTask): Uint8Array;
    toProtoMsg(message: MsgDeleteTask): MsgDeleteTaskProtoMsg;
};
export declare const MsgDeleteTaskResponse: {
    typeUrl: string;
    is(o: any): o is MsgDeleteTaskResponse;
    isSDK(o: any): o is MsgDeleteTaskResponseSDKType;
    isAmino(o: any): o is MsgDeleteTaskResponseAmino;
    encode(_: MsgDeleteTaskResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgDeleteTaskResponse;
    fromJSON(_: any): MsgDeleteTaskResponse;
    toJSON(_: MsgDeleteTaskResponse): unknown;
    fromPartial(_: Partial<MsgDeleteTaskResponse>): MsgDeleteTaskResponse;
    fromAmino(_: MsgDeleteTaskResponseAmino): MsgDeleteTaskResponse;
    toAmino(_: MsgDeleteTaskResponse): MsgDeleteTaskResponseAmino;
    fromAminoMsg(object: MsgDeleteTaskResponseAminoMsg): MsgDeleteTaskResponse;
    fromProtoMsg(message: MsgDeleteTaskResponseProtoMsg): MsgDeleteTaskResponse;
    toProto(message: MsgDeleteTaskResponse): Uint8Array;
    toProtoMsg(message: MsgDeleteTaskResponse): MsgDeleteTaskResponseProtoMsg;
};

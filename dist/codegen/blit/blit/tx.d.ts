import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
export declare const protobufPackage = "blit.blit";
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParams {
    /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
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
    /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
    authority: string;
    /** NOTE: All parameters must be supplied. */
    params?: ParamsAmino;
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
    amount?: CoinAmino;
    grantee: string;
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
    amount?: CoinAmino;
    grantee: string;
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
    amount?: CoinAmino;
    from_address: string;
    to_address: string;
    grantee: string;
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
export declare const MsgUpdateParams: {
    typeUrl: string;
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

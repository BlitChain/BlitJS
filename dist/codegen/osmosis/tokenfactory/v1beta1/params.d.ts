import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** Params defines the parameters for the tokenfactory module. */
export interface Params {
    denom_creation_fee: Coin[];
}
export interface ParamsProtoMsg {
    type_url: "/osmosis.tokenfactory.v1beta1.Params";
    value: Uint8Array;
}
export interface ParamsProtoMsg {
    type_url: "/osmosis.tokenfactory.v1beta1.Params";
    value: Uint8Array;
}
/** Params defines the parameters for the tokenfactory module. */
export interface ParamsAmino {
    denom_creation_fee: CoinAmino[];
}
export interface ParamsAminoMsg {
    type: "osmosis/tokenfactory/params";
    value: ParamsAmino;
}
/** Params defines the parameters for the tokenfactory module. */
export interface ParamsSDKType {
    denom_creation_fee: CoinSDKType[];
}
export declare const Params: {
    typeUrl: string;
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial(object: Partial<Params>): Params;
    fromSDK(object: ParamsSDKType): Params;
    toSDK(message: Params): ParamsSDKType;
    fromAmino(object: ParamsAmino): Params;
    toAmino(message: Params): ParamsAmino;
    fromAminoMsg(object: ParamsAminoMsg): Params;
    toAminoMsg(message: Params): ParamsAminoMsg;
    fromProtoMsg(message: ParamsProtoMsg): Params;
    toProto(message: Params): Uint8Array;
    toProtoMsg(message: Params): ParamsProtoMsg;
};

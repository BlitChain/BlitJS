import { BinaryReader, BinaryWriter } from "../../../binary";
/** Params defines the parameters for the ibc-rate-limit module. */
export interface Params {
    contract_address: string;
}
export interface ParamsProtoMsg {
    type_url: "/osmosis.ibcratelimit.v1beta1.Params";
    value: Uint8Array;
}
export interface ParamsProtoMsg {
    type_url: "/osmosis.ibcratelimit.v1beta1.Params";
    value: Uint8Array;
}
/** Params defines the parameters for the ibc-rate-limit module. */
export interface ParamsAmino {
    contract_address: string;
}
export interface ParamsAminoMsg {
    type: "osmosis/ibcratelimit/params";
    value: ParamsAmino;
}
/** Params defines the parameters for the ibc-rate-limit module. */
export interface ParamsSDKType {
    contract_address: string;
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

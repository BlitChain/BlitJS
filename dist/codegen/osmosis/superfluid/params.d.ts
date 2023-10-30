import { BinaryReader, BinaryWriter } from "../../binary";
/** Params holds parameters for the superfluid module */
export interface Params {
    /**
     * minimum_risk_factor is to be cut on OSMO equivalent value of lp tokens for
     * superfluid staking, default: 5%. The minimum risk factor works
     * to counter-balance the staked amount on chain's exposure to various asset
     * volatilities, and have base staking be 'resistant' to volatility.
     */
    minimum_risk_factor: string;
}
export interface ParamsProtoMsg {
    type_url: "/osmosis.superfluid.Params";
    value: Uint8Array;
}
export interface ParamsProtoMsg {
    type_url: "/osmosis.superfluid.Params";
    value: Uint8Array;
}
/** Params holds parameters for the superfluid module */
export interface ParamsAmino {
    /**
     * minimum_risk_factor is to be cut on OSMO equivalent value of lp tokens for
     * superfluid staking, default: 5%. The minimum risk factor works
     * to counter-balance the staked amount on chain's exposure to various asset
     * volatilities, and have base staking be 'resistant' to volatility.
     */
    minimum_risk_factor: string;
}
export interface ParamsAminoMsg {
    type: "osmosis/params";
    value: ParamsAmino;
}
/** Params holds parameters for the superfluid module */
export interface ParamsSDKType {
    minimum_risk_factor: string;
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

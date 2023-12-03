import { Height, HeightAmino, HeightSDKType } from "../../../core/client/v1/client";
import { BinaryReader, BinaryWriter } from "../../../../binary";
export declare const protobufPackage = "ibc.lightclients.localhost.v2";
/** ClientState defines the 09-localhost client state */
export interface ClientState {
    /** the latest block height */
    latest_height: Height;
}
export interface ClientStateProtoMsg {
    type_url: "/ibc.lightclients.localhost.v2.ClientState";
    value: Uint8Array;
}
/** ClientState defines the 09-localhost client state */
export interface ClientStateAmino {
    /** the latest block height */
    latest_height?: HeightAmino;
}
export interface ClientStateAminoMsg {
    type: "cosmos-sdk/ClientState";
    value: ClientStateAmino;
}
/** ClientState defines the 09-localhost client state */
export interface ClientStateSDKType {
    latest_height: HeightSDKType;
}
export declare const ClientState: {
    typeUrl: string;
    encode(message: ClientState, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ClientState;
    fromJSON(object: any): ClientState;
    toJSON(message: ClientState): unknown;
    fromPartial(object: Partial<ClientState>): ClientState;
    fromSDK(object: ClientStateSDKType): ClientState;
    toSDK(message: ClientState): ClientStateSDKType;
    fromAmino(object: ClientStateAmino): ClientState;
    toAmino(message: ClientState): ClientStateAmino;
    fromAminoMsg(object: ClientStateAminoMsg): ClientState;
    toAminoMsg(message: ClientState): ClientStateAminoMsg;
    fromProtoMsg(message: ClientStateProtoMsg): ClientState;
    toProto(message: ClientState): Uint8Array;
    toProtoMsg(message: ClientState): ClientStateProtoMsg;
};

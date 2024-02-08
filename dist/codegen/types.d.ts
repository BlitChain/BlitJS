/**
* This file and any referenced files were automatically generated by @cosmology/telescope@1.4.12
* DO NOT MODIFY BY HAND. Instead, download the latest proto files for your chain
* and run the transpile command or yarn proto command to regenerate this bundle.
*/
import { IBinaryReader, IBinaryWriter } from "./binary";
import { Any } from "./google/protobuf/any";
import { OfflineSigner } from "@cosmjs/proto-signing";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export type ProtoMsg = Omit<Any, "typeUrl"> & {
    typeUrl: any;
};
export interface IAminoMsg<Amino> {
    type: any;
    value: Amino;
}
export interface IProtoType {
    $typeUrl?: any;
}
/**
 * A type generated by Telescope 1.0.
 */
export interface TelescopeGeneratedCodec<T = unknown, SDK = unknown, Amino = unknown> {
    readonly typeUrl: string;
    readonly aminoType?: string;
    is?(o: unknown): o is T;
    isSDK?(o: unknown): o is SDK;
    isAmino?(o: unknown): o is Amino;
    encode: (message: T, writer?: IBinaryWriter | any) => IBinaryWriter | any;
    decode: (input: IBinaryReader | Uint8Array | any, length?: number) => T;
    fromPartial: (object: any) => T | any;
    fromJSON?: (object: any) => T | any;
    toJSON?: (message: T | any) => any;
    fromSDK?: (sdk: SDK) => T;
    fromSDKJSON?: (object: any) => SDK;
    toSDK?: (message: T) => SDK;
    fromAmino?: (amino: Amino) => T;
    toAmino?: (message: T) => Amino;
    fromAminoMsg?: (aminoMsg: IAminoMsg<Amino>) => T;
    toAminoMsg?: (message: T) => IAminoMsg<Amino>;
    toProto?: (message: T) => Uint8Array;
    fromProtoMsg?: (message: ProtoMsg) => T;
    toProtoMsg?: (message: T) => Any;
}
export type TelescopeGeneratedType<T = unknown, SDK = unknown, Amino = unknown> = TelescopeGeneratedCodec<T, SDK, Amino>;
export type GeneratedType = TelescopeGeneratedCodec;
/**
 * Coin defines a token with a denomination and an amount.
 *
 * NOTE: The amount field is an Int which implements the custom method
 * signatures required by gogoproto.
 */
export interface Coin {
    denom: string;
    amount: string;
}
export type EncodeObject = Message<any>;
export interface Message<T> {
    typeUrl: string;
    value: T;
}
export interface StdFee {
    amount: Coin[];
    gas: string;
    /** The granter address that is used for paying with feegrants */
    granter?: string;
    /** The fee payer address. The payer must have signed the transaction. */
    payer?: string;
}
export interface MsgData {
    msgType: string;
    data: Uint8Array;
}
export interface Attribute {
    key: string;
    value: string;
    index: boolean;
}
export interface Event {
    type: string;
    attributes: Attribute[];
}
/**
 * The response after successfully broadcasting a transaction.
 * Success or failure refer to the execution result.
 */
export interface DeliverTxResponse {
    height: number;
    /** The position of the transaction within the block. This is a 0-based index. */
    txIndex: number;
    /** Error code. The transaction suceeded if and only if code is 0. */
    code: number;
    transactionHash: string;
    events: Event[];
    /**
     * A string-based log document.
     *
     * This currently seems to merge attributes of multiple events into one event per type
     * (https://github.com/tendermint/tendermint/issues/9595). You might want to use the `events`
     * field instead.
     */
    rawLog?: string;
    /** @deprecated Use `msgResponses` instead. */
    data?: MsgData[];
    /**
     * The message responses of the [TxMsgData](https://github.com/cosmos/cosmos-sdk/blob/v0.46.3/proto/cosmos/base/abci/v1beta1/abci.proto#L128-L140)
     * as `Any`s.
     * This field is an empty list for chains running Cosmos SDK < 0.46.
     */
    msgResponses: Array<{
        typeUrl: string;
        value: Uint8Array;
    }>;
    gasUsed: bigint;
    gasWanted: bigint;
}
export interface TxRpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
    signAndBroadcast?(signerAddress: string, messages: EncodeObject[], fee: StdFee | "auto" | number, memo: string): Promise<DeliverTxResponse>;
}
export interface SigningClientParams {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
}

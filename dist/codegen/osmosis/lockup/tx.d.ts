import { Duration, DurationAmino, DurationSDKType } from "../../google/protobuf/duration";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { PeriodLock, PeriodLockAmino, PeriodLockSDKType } from "./lock";
import { BinaryReader, BinaryWriter } from "../../binary";
export interface MsgLockTokens {
    owner: string;
    duration: Duration;
    coins: Coin[];
}
export interface MsgLockTokensProtoMsg {
    type_url: "/osmosis.lockup.MsgLockTokens";
    value: Uint8Array;
}
export interface MsgLockTokensProtoMsg {
    type_url: "/osmosis.lockup.MsgLockTokens";
    value: Uint8Array;
}
export interface MsgLockTokensAmino {
    owner: string;
    duration?: DurationAmino;
    coins: CoinAmino[];
}
export interface MsgLockTokensAminoMsg {
    type: "osmosis/lockup/lock-tokens";
    value: MsgLockTokensAmino;
}
export interface MsgLockTokensSDKType {
    owner: string;
    duration: DurationSDKType;
    coins: CoinSDKType[];
}
export interface MsgLockTokensResponse {
    ID: bigint;
}
export interface MsgLockTokensResponseProtoMsg {
    type_url: "/osmosis.lockup.MsgLockTokensResponse";
    value: Uint8Array;
}
export interface MsgLockTokensResponseProtoMsg {
    type_url: "/osmosis.lockup.MsgLockTokensResponse";
    value: Uint8Array;
}
export interface MsgLockTokensResponseAmino {
    ID: string;
}
export interface MsgLockTokensResponseAminoMsg {
    type: "osmosis/lockup/lock-tokens-response";
    value: MsgLockTokensResponseAmino;
}
export interface MsgLockTokensResponseSDKType {
    ID: bigint;
}
export interface MsgBeginUnlockingAll {
    owner: string;
}
export interface MsgBeginUnlockingAllProtoMsg {
    type_url: "/osmosis.lockup.MsgBeginUnlockingAll";
    value: Uint8Array;
}
export interface MsgBeginUnlockingAllProtoMsg {
    type_url: "/osmosis.lockup.MsgBeginUnlockingAll";
    value: Uint8Array;
}
export interface MsgBeginUnlockingAllAmino {
    owner: string;
}
export interface MsgBeginUnlockingAllAminoMsg {
    type: "osmosis/lockup/begin-unlock-tokens";
    value: MsgBeginUnlockingAllAmino;
}
export interface MsgBeginUnlockingAllSDKType {
    owner: string;
}
export interface MsgBeginUnlockingAllResponse {
    unlocks: PeriodLock[];
}
export interface MsgBeginUnlockingAllResponseProtoMsg {
    type_url: "/osmosis.lockup.MsgBeginUnlockingAllResponse";
    value: Uint8Array;
}
export interface MsgBeginUnlockingAllResponseProtoMsg {
    type_url: "/osmosis.lockup.MsgBeginUnlockingAllResponse";
    value: Uint8Array;
}
export interface MsgBeginUnlockingAllResponseAmino {
    unlocks: PeriodLockAmino[];
}
export interface MsgBeginUnlockingAllResponseAminoMsg {
    type: "osmosis/lockup/begin-unlocking-all-response";
    value: MsgBeginUnlockingAllResponseAmino;
}
export interface MsgBeginUnlockingAllResponseSDKType {
    unlocks: PeriodLockSDKType[];
}
export interface MsgBeginUnlocking {
    owner: string;
    ID: bigint;
    /** Amount of unlocking coins. Unlock all if not set. */
    coins: Coin[];
}
export interface MsgBeginUnlockingProtoMsg {
    type_url: "/osmosis.lockup.MsgBeginUnlocking";
    value: Uint8Array;
}
export interface MsgBeginUnlockingProtoMsg {
    type_url: "/osmosis.lockup.MsgBeginUnlocking";
    value: Uint8Array;
}
export interface MsgBeginUnlockingAmino {
    owner: string;
    ID: string;
    /** Amount of unlocking coins. Unlock all if not set. */
    coins: CoinAmino[];
}
export interface MsgBeginUnlockingAminoMsg {
    type: "osmosis/lockup/begin-unlock-period-lock";
    value: MsgBeginUnlockingAmino;
}
export interface MsgBeginUnlockingSDKType {
    owner: string;
    ID: bigint;
    coins: CoinSDKType[];
}
export interface MsgBeginUnlockingResponse {
    success: boolean;
}
export interface MsgBeginUnlockingResponseProtoMsg {
    type_url: "/osmosis.lockup.MsgBeginUnlockingResponse";
    value: Uint8Array;
}
export interface MsgBeginUnlockingResponseProtoMsg {
    type_url: "/osmosis.lockup.MsgBeginUnlockingResponse";
    value: Uint8Array;
}
export interface MsgBeginUnlockingResponseAmino {
    success: boolean;
}
export interface MsgBeginUnlockingResponseAminoMsg {
    type: "osmosis/lockup/begin-unlocking-response";
    value: MsgBeginUnlockingResponseAmino;
}
export interface MsgBeginUnlockingResponseSDKType {
    success: boolean;
}
/**
 * MsgExtendLockup extends the existing lockup's duration.
 * The new duration is longer than the original.
 */
export interface MsgExtendLockup {
    owner: string;
    ID: bigint;
    /**
     * duration to be set. fails if lower than the current duration, or is
     * unlocking
     */
    duration: Duration;
}
export interface MsgExtendLockupProtoMsg {
    type_url: "/osmosis.lockup.MsgExtendLockup";
    value: Uint8Array;
}
export interface MsgExtendLockupProtoMsg {
    type_url: "/osmosis.lockup.MsgExtendLockup";
    value: Uint8Array;
}
/**
 * MsgExtendLockup extends the existing lockup's duration.
 * The new duration is longer than the original.
 */
export interface MsgExtendLockupAmino {
    owner: string;
    ID: string;
    /**
     * duration to be set. fails if lower than the current duration, or is
     * unlocking
     */
    duration?: DurationAmino;
}
export interface MsgExtendLockupAminoMsg {
    type: "osmosis/lockup/extend-lockup";
    value: MsgExtendLockupAmino;
}
/**
 * MsgExtendLockup extends the existing lockup's duration.
 * The new duration is longer than the original.
 */
export interface MsgExtendLockupSDKType {
    owner: string;
    ID: bigint;
    duration: DurationSDKType;
}
export interface MsgExtendLockupResponse {
    success: boolean;
}
export interface MsgExtendLockupResponseProtoMsg {
    type_url: "/osmosis.lockup.MsgExtendLockupResponse";
    value: Uint8Array;
}
export interface MsgExtendLockupResponseProtoMsg {
    type_url: "/osmosis.lockup.MsgExtendLockupResponse";
    value: Uint8Array;
}
export interface MsgExtendLockupResponseAmino {
    success: boolean;
}
export interface MsgExtendLockupResponseAminoMsg {
    type: "osmosis/lockup/extend-lockup-response";
    value: MsgExtendLockupResponseAmino;
}
export interface MsgExtendLockupResponseSDKType {
    success: boolean;
}
/**
 * MsgForceUnlock unlocks locks immediately for
 * addresses registered via governance.
 */
export interface MsgForceUnlock {
    owner: string;
    ID: bigint;
    /** Amount of unlocking coins. Unlock all if not set. */
    coins: Coin[];
}
export interface MsgForceUnlockProtoMsg {
    type_url: "/osmosis.lockup.MsgForceUnlock";
    value: Uint8Array;
}
export interface MsgForceUnlockProtoMsg {
    type_url: "/osmosis.lockup.MsgForceUnlock";
    value: Uint8Array;
}
/**
 * MsgForceUnlock unlocks locks immediately for
 * addresses registered via governance.
 */
export interface MsgForceUnlockAmino {
    owner: string;
    ID: string;
    /** Amount of unlocking coins. Unlock all if not set. */
    coins: CoinAmino[];
}
export interface MsgForceUnlockAminoMsg {
    type: "osmosis/lockup/force-unlock";
    value: MsgForceUnlockAmino;
}
/**
 * MsgForceUnlock unlocks locks immediately for
 * addresses registered via governance.
 */
export interface MsgForceUnlockSDKType {
    owner: string;
    ID: bigint;
    coins: CoinSDKType[];
}
export interface MsgForceUnlockResponse {
    success: boolean;
}
export interface MsgForceUnlockResponseProtoMsg {
    type_url: "/osmosis.lockup.MsgForceUnlockResponse";
    value: Uint8Array;
}
export interface MsgForceUnlockResponseProtoMsg {
    type_url: "/osmosis.lockup.MsgForceUnlockResponse";
    value: Uint8Array;
}
export interface MsgForceUnlockResponseAmino {
    success: boolean;
}
export interface MsgForceUnlockResponseAminoMsg {
    type: "osmosis/lockup/force-unlock-response";
    value: MsgForceUnlockResponseAmino;
}
export interface MsgForceUnlockResponseSDKType {
    success: boolean;
}
export declare const MsgLockTokens: {
    typeUrl: string;
    encode(message: MsgLockTokens, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgLockTokens;
    fromJSON(object: any): MsgLockTokens;
    toJSON(message: MsgLockTokens): unknown;
    fromPartial(object: Partial<MsgLockTokens>): MsgLockTokens;
    fromSDK(object: MsgLockTokensSDKType): MsgLockTokens;
    toSDK(message: MsgLockTokens): MsgLockTokensSDKType;
    fromAmino(object: MsgLockTokensAmino): MsgLockTokens;
    toAmino(message: MsgLockTokens): MsgLockTokensAmino;
    fromAminoMsg(object: MsgLockTokensAminoMsg): MsgLockTokens;
    toAminoMsg(message: MsgLockTokens): MsgLockTokensAminoMsg;
    fromProtoMsg(message: MsgLockTokensProtoMsg): MsgLockTokens;
    toProto(message: MsgLockTokens): Uint8Array;
    toProtoMsg(message: MsgLockTokens): MsgLockTokensProtoMsg;
};
export declare const MsgLockTokensResponse: {
    typeUrl: string;
    encode(message: MsgLockTokensResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgLockTokensResponse;
    fromJSON(object: any): MsgLockTokensResponse;
    toJSON(message: MsgLockTokensResponse): unknown;
    fromPartial(object: Partial<MsgLockTokensResponse>): MsgLockTokensResponse;
    fromSDK(object: MsgLockTokensResponseSDKType): MsgLockTokensResponse;
    toSDK(message: MsgLockTokensResponse): MsgLockTokensResponseSDKType;
    fromAmino(object: MsgLockTokensResponseAmino): MsgLockTokensResponse;
    toAmino(message: MsgLockTokensResponse): MsgLockTokensResponseAmino;
    fromAminoMsg(object: MsgLockTokensResponseAminoMsg): MsgLockTokensResponse;
    toAminoMsg(message: MsgLockTokensResponse): MsgLockTokensResponseAminoMsg;
    fromProtoMsg(message: MsgLockTokensResponseProtoMsg): MsgLockTokensResponse;
    toProto(message: MsgLockTokensResponse): Uint8Array;
    toProtoMsg(message: MsgLockTokensResponse): MsgLockTokensResponseProtoMsg;
};
export declare const MsgBeginUnlockingAll: {
    typeUrl: string;
    encode(message: MsgBeginUnlockingAll, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgBeginUnlockingAll;
    fromJSON(object: any): MsgBeginUnlockingAll;
    toJSON(message: MsgBeginUnlockingAll): unknown;
    fromPartial(object: Partial<MsgBeginUnlockingAll>): MsgBeginUnlockingAll;
    fromSDK(object: MsgBeginUnlockingAllSDKType): MsgBeginUnlockingAll;
    toSDK(message: MsgBeginUnlockingAll): MsgBeginUnlockingAllSDKType;
    fromAmino(object: MsgBeginUnlockingAllAmino): MsgBeginUnlockingAll;
    toAmino(message: MsgBeginUnlockingAll): MsgBeginUnlockingAllAmino;
    fromAminoMsg(object: MsgBeginUnlockingAllAminoMsg): MsgBeginUnlockingAll;
    toAminoMsg(message: MsgBeginUnlockingAll): MsgBeginUnlockingAllAminoMsg;
    fromProtoMsg(message: MsgBeginUnlockingAllProtoMsg): MsgBeginUnlockingAll;
    toProto(message: MsgBeginUnlockingAll): Uint8Array;
    toProtoMsg(message: MsgBeginUnlockingAll): MsgBeginUnlockingAllProtoMsg;
};
export declare const MsgBeginUnlockingAllResponse: {
    typeUrl: string;
    encode(message: MsgBeginUnlockingAllResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgBeginUnlockingAllResponse;
    fromJSON(object: any): MsgBeginUnlockingAllResponse;
    toJSON(message: MsgBeginUnlockingAllResponse): unknown;
    fromPartial(object: Partial<MsgBeginUnlockingAllResponse>): MsgBeginUnlockingAllResponse;
    fromSDK(object: MsgBeginUnlockingAllResponseSDKType): MsgBeginUnlockingAllResponse;
    toSDK(message: MsgBeginUnlockingAllResponse): MsgBeginUnlockingAllResponseSDKType;
    fromAmino(object: MsgBeginUnlockingAllResponseAmino): MsgBeginUnlockingAllResponse;
    toAmino(message: MsgBeginUnlockingAllResponse): MsgBeginUnlockingAllResponseAmino;
    fromAminoMsg(object: MsgBeginUnlockingAllResponseAminoMsg): MsgBeginUnlockingAllResponse;
    toAminoMsg(message: MsgBeginUnlockingAllResponse): MsgBeginUnlockingAllResponseAminoMsg;
    fromProtoMsg(message: MsgBeginUnlockingAllResponseProtoMsg): MsgBeginUnlockingAllResponse;
    toProto(message: MsgBeginUnlockingAllResponse): Uint8Array;
    toProtoMsg(message: MsgBeginUnlockingAllResponse): MsgBeginUnlockingAllResponseProtoMsg;
};
export declare const MsgBeginUnlocking: {
    typeUrl: string;
    encode(message: MsgBeginUnlocking, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgBeginUnlocking;
    fromJSON(object: any): MsgBeginUnlocking;
    toJSON(message: MsgBeginUnlocking): unknown;
    fromPartial(object: Partial<MsgBeginUnlocking>): MsgBeginUnlocking;
    fromSDK(object: MsgBeginUnlockingSDKType): MsgBeginUnlocking;
    toSDK(message: MsgBeginUnlocking): MsgBeginUnlockingSDKType;
    fromAmino(object: MsgBeginUnlockingAmino): MsgBeginUnlocking;
    toAmino(message: MsgBeginUnlocking): MsgBeginUnlockingAmino;
    fromAminoMsg(object: MsgBeginUnlockingAminoMsg): MsgBeginUnlocking;
    toAminoMsg(message: MsgBeginUnlocking): MsgBeginUnlockingAminoMsg;
    fromProtoMsg(message: MsgBeginUnlockingProtoMsg): MsgBeginUnlocking;
    toProto(message: MsgBeginUnlocking): Uint8Array;
    toProtoMsg(message: MsgBeginUnlocking): MsgBeginUnlockingProtoMsg;
};
export declare const MsgBeginUnlockingResponse: {
    typeUrl: string;
    encode(message: MsgBeginUnlockingResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgBeginUnlockingResponse;
    fromJSON(object: any): MsgBeginUnlockingResponse;
    toJSON(message: MsgBeginUnlockingResponse): unknown;
    fromPartial(object: Partial<MsgBeginUnlockingResponse>): MsgBeginUnlockingResponse;
    fromSDK(object: MsgBeginUnlockingResponseSDKType): MsgBeginUnlockingResponse;
    toSDK(message: MsgBeginUnlockingResponse): MsgBeginUnlockingResponseSDKType;
    fromAmino(object: MsgBeginUnlockingResponseAmino): MsgBeginUnlockingResponse;
    toAmino(message: MsgBeginUnlockingResponse): MsgBeginUnlockingResponseAmino;
    fromAminoMsg(object: MsgBeginUnlockingResponseAminoMsg): MsgBeginUnlockingResponse;
    toAminoMsg(message: MsgBeginUnlockingResponse): MsgBeginUnlockingResponseAminoMsg;
    fromProtoMsg(message: MsgBeginUnlockingResponseProtoMsg): MsgBeginUnlockingResponse;
    toProto(message: MsgBeginUnlockingResponse): Uint8Array;
    toProtoMsg(message: MsgBeginUnlockingResponse): MsgBeginUnlockingResponseProtoMsg;
};
export declare const MsgExtendLockup: {
    typeUrl: string;
    encode(message: MsgExtendLockup, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgExtendLockup;
    fromJSON(object: any): MsgExtendLockup;
    toJSON(message: MsgExtendLockup): unknown;
    fromPartial(object: Partial<MsgExtendLockup>): MsgExtendLockup;
    fromSDK(object: MsgExtendLockupSDKType): MsgExtendLockup;
    toSDK(message: MsgExtendLockup): MsgExtendLockupSDKType;
    fromAmino(object: MsgExtendLockupAmino): MsgExtendLockup;
    toAmino(message: MsgExtendLockup): MsgExtendLockupAmino;
    fromAminoMsg(object: MsgExtendLockupAminoMsg): MsgExtendLockup;
    toAminoMsg(message: MsgExtendLockup): MsgExtendLockupAminoMsg;
    fromProtoMsg(message: MsgExtendLockupProtoMsg): MsgExtendLockup;
    toProto(message: MsgExtendLockup): Uint8Array;
    toProtoMsg(message: MsgExtendLockup): MsgExtendLockupProtoMsg;
};
export declare const MsgExtendLockupResponse: {
    typeUrl: string;
    encode(message: MsgExtendLockupResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgExtendLockupResponse;
    fromJSON(object: any): MsgExtendLockupResponse;
    toJSON(message: MsgExtendLockupResponse): unknown;
    fromPartial(object: Partial<MsgExtendLockupResponse>): MsgExtendLockupResponse;
    fromSDK(object: MsgExtendLockupResponseSDKType): MsgExtendLockupResponse;
    toSDK(message: MsgExtendLockupResponse): MsgExtendLockupResponseSDKType;
    fromAmino(object: MsgExtendLockupResponseAmino): MsgExtendLockupResponse;
    toAmino(message: MsgExtendLockupResponse): MsgExtendLockupResponseAmino;
    fromAminoMsg(object: MsgExtendLockupResponseAminoMsg): MsgExtendLockupResponse;
    toAminoMsg(message: MsgExtendLockupResponse): MsgExtendLockupResponseAminoMsg;
    fromProtoMsg(message: MsgExtendLockupResponseProtoMsg): MsgExtendLockupResponse;
    toProto(message: MsgExtendLockupResponse): Uint8Array;
    toProtoMsg(message: MsgExtendLockupResponse): MsgExtendLockupResponseProtoMsg;
};
export declare const MsgForceUnlock: {
    typeUrl: string;
    encode(message: MsgForceUnlock, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgForceUnlock;
    fromJSON(object: any): MsgForceUnlock;
    toJSON(message: MsgForceUnlock): unknown;
    fromPartial(object: Partial<MsgForceUnlock>): MsgForceUnlock;
    fromSDK(object: MsgForceUnlockSDKType): MsgForceUnlock;
    toSDK(message: MsgForceUnlock): MsgForceUnlockSDKType;
    fromAmino(object: MsgForceUnlockAmino): MsgForceUnlock;
    toAmino(message: MsgForceUnlock): MsgForceUnlockAmino;
    fromAminoMsg(object: MsgForceUnlockAminoMsg): MsgForceUnlock;
    toAminoMsg(message: MsgForceUnlock): MsgForceUnlockAminoMsg;
    fromProtoMsg(message: MsgForceUnlockProtoMsg): MsgForceUnlock;
    toProto(message: MsgForceUnlock): Uint8Array;
    toProtoMsg(message: MsgForceUnlock): MsgForceUnlockProtoMsg;
};
export declare const MsgForceUnlockResponse: {
    typeUrl: string;
    encode(message: MsgForceUnlockResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgForceUnlockResponse;
    fromJSON(object: any): MsgForceUnlockResponse;
    toJSON(message: MsgForceUnlockResponse): unknown;
    fromPartial(object: Partial<MsgForceUnlockResponse>): MsgForceUnlockResponse;
    fromSDK(object: MsgForceUnlockResponseSDKType): MsgForceUnlockResponse;
    toSDK(message: MsgForceUnlockResponse): MsgForceUnlockResponseSDKType;
    fromAmino(object: MsgForceUnlockResponseAmino): MsgForceUnlockResponse;
    toAmino(message: MsgForceUnlockResponse): MsgForceUnlockResponseAmino;
    fromAminoMsg(object: MsgForceUnlockResponseAminoMsg): MsgForceUnlockResponse;
    toAminoMsg(message: MsgForceUnlockResponse): MsgForceUnlockResponseAminoMsg;
    fromProtoMsg(message: MsgForceUnlockResponseProtoMsg): MsgForceUnlockResponse;
    toProto(message: MsgForceUnlockResponse): Uint8Array;
    toProtoMsg(message: MsgForceUnlockResponse): MsgForceUnlockResponseProtoMsg;
};

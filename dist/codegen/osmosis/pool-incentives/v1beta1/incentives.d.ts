import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../../binary";
export interface Params {
    /**
     * minted_denom is the denomination of the coin expected to be minted by the
     * minting module. Pool-incentives module doesn’t actually mint the coin
     * itself, but rather manages the distribution of coins that matches the
     * defined minted_denom.
     */
    minted_denom: string;
}
export interface ParamsProtoMsg {
    type_url: "/osmosis.poolincentives.v1beta1.Params";
    value: Uint8Array;
}
export interface ParamsProtoMsg {
    type_url: "/osmosis.poolincentives.v1beta1.Params";
    value: Uint8Array;
}
export interface ParamsAmino {
    /**
     * minted_denom is the denomination of the coin expected to be minted by the
     * minting module. Pool-incentives module doesn’t actually mint the coin
     * itself, but rather manages the distribution of coins that matches the
     * defined minted_denom.
     */
    minted_denom: string;
}
export interface ParamsAminoMsg {
    type: "osmosis/poolincentives/params";
    value: ParamsAmino;
}
export interface ParamsSDKType {
    minted_denom: string;
}
export interface LockableDurationsInfo {
    lockable_durations: Duration[];
}
export interface LockableDurationsInfoProtoMsg {
    type_url: "/osmosis.poolincentives.v1beta1.LockableDurationsInfo";
    value: Uint8Array;
}
export interface LockableDurationsInfoProtoMsg {
    type_url: "/osmosis.poolincentives.v1beta1.LockableDurationsInfo";
    value: Uint8Array;
}
export interface LockableDurationsInfoAmino {
    lockable_durations: DurationAmino[];
}
export interface LockableDurationsInfoAminoMsg {
    type: "osmosis/poolincentives/lockable-durations-info";
    value: LockableDurationsInfoAmino;
}
export interface LockableDurationsInfoSDKType {
    lockable_durations: DurationSDKType[];
}
export interface DistrInfo {
    total_weight: string;
    records: DistrRecord[];
}
export interface DistrInfoProtoMsg {
    type_url: "/osmosis.poolincentives.v1beta1.DistrInfo";
    value: Uint8Array;
}
export interface DistrInfoProtoMsg {
    type_url: "/osmosis.poolincentives.v1beta1.DistrInfo";
    value: Uint8Array;
}
export interface DistrInfoAmino {
    total_weight: string;
    records: DistrRecordAmino[];
}
export interface DistrInfoAminoMsg {
    type: "osmosis/poolincentives/distr-info";
    value: DistrInfoAmino;
}
export interface DistrInfoSDKType {
    total_weight: string;
    records: DistrRecordSDKType[];
}
export interface DistrRecord {
    gauge_id: bigint;
    weight: string;
}
export interface DistrRecordProtoMsg {
    type_url: "/osmosis.poolincentives.v1beta1.DistrRecord";
    value: Uint8Array;
}
export interface DistrRecordProtoMsg {
    type_url: "/osmosis.poolincentives.v1beta1.DistrRecord";
    value: Uint8Array;
}
export interface DistrRecordAmino {
    gauge_id: string;
    weight: string;
}
export interface DistrRecordAminoMsg {
    type: "osmosis/poolincentives/distr-record";
    value: DistrRecordAmino;
}
export interface DistrRecordSDKType {
    gauge_id: bigint;
    weight: string;
}
export interface PoolToGauge {
    pool_id: bigint;
    gauge_id: bigint;
    duration: Duration;
}
export interface PoolToGaugeProtoMsg {
    type_url: "/osmosis.poolincentives.v1beta1.PoolToGauge";
    value: Uint8Array;
}
export interface PoolToGaugeProtoMsg {
    type_url: "/osmosis.poolincentives.v1beta1.PoolToGauge";
    value: Uint8Array;
}
export interface PoolToGaugeAmino {
    pool_id: string;
    gauge_id: string;
    duration?: DurationAmino;
}
export interface PoolToGaugeAminoMsg {
    type: "osmosis/poolincentives/pool-to-gauge";
    value: PoolToGaugeAmino;
}
export interface PoolToGaugeSDKType {
    pool_id: bigint;
    gauge_id: bigint;
    duration: DurationSDKType;
}
export interface PoolToGauges {
    pool_to_gauge: PoolToGauge[];
}
export interface PoolToGaugesProtoMsg {
    type_url: "/osmosis.poolincentives.v1beta1.PoolToGauges";
    value: Uint8Array;
}
export interface PoolToGaugesProtoMsg {
    type_url: "/osmosis.poolincentives.v1beta1.PoolToGauges";
    value: Uint8Array;
}
export interface PoolToGaugesAmino {
    pool_to_gauge: PoolToGaugeAmino[];
}
export interface PoolToGaugesAminoMsg {
    type: "osmosis/poolincentives/pool-to-gauges";
    value: PoolToGaugesAmino;
}
export interface PoolToGaugesSDKType {
    pool_to_gauge: PoolToGaugeSDKType[];
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
export declare const LockableDurationsInfo: {
    typeUrl: string;
    encode(message: LockableDurationsInfo, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): LockableDurationsInfo;
    fromJSON(object: any): LockableDurationsInfo;
    toJSON(message: LockableDurationsInfo): unknown;
    fromPartial(object: Partial<LockableDurationsInfo>): LockableDurationsInfo;
    fromSDK(object: LockableDurationsInfoSDKType): LockableDurationsInfo;
    toSDK(message: LockableDurationsInfo): LockableDurationsInfoSDKType;
    fromAmino(object: LockableDurationsInfoAmino): LockableDurationsInfo;
    toAmino(message: LockableDurationsInfo): LockableDurationsInfoAmino;
    fromAminoMsg(object: LockableDurationsInfoAminoMsg): LockableDurationsInfo;
    toAminoMsg(message: LockableDurationsInfo): LockableDurationsInfoAminoMsg;
    fromProtoMsg(message: LockableDurationsInfoProtoMsg): LockableDurationsInfo;
    toProto(message: LockableDurationsInfo): Uint8Array;
    toProtoMsg(message: LockableDurationsInfo): LockableDurationsInfoProtoMsg;
};
export declare const DistrInfo: {
    typeUrl: string;
    encode(message: DistrInfo, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): DistrInfo;
    fromJSON(object: any): DistrInfo;
    toJSON(message: DistrInfo): unknown;
    fromPartial(object: Partial<DistrInfo>): DistrInfo;
    fromSDK(object: DistrInfoSDKType): DistrInfo;
    toSDK(message: DistrInfo): DistrInfoSDKType;
    fromAmino(object: DistrInfoAmino): DistrInfo;
    toAmino(message: DistrInfo): DistrInfoAmino;
    fromAminoMsg(object: DistrInfoAminoMsg): DistrInfo;
    toAminoMsg(message: DistrInfo): DistrInfoAminoMsg;
    fromProtoMsg(message: DistrInfoProtoMsg): DistrInfo;
    toProto(message: DistrInfo): Uint8Array;
    toProtoMsg(message: DistrInfo): DistrInfoProtoMsg;
};
export declare const DistrRecord: {
    typeUrl: string;
    encode(message: DistrRecord, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): DistrRecord;
    fromJSON(object: any): DistrRecord;
    toJSON(message: DistrRecord): unknown;
    fromPartial(object: Partial<DistrRecord>): DistrRecord;
    fromSDK(object: DistrRecordSDKType): DistrRecord;
    toSDK(message: DistrRecord): DistrRecordSDKType;
    fromAmino(object: DistrRecordAmino): DistrRecord;
    toAmino(message: DistrRecord): DistrRecordAmino;
    fromAminoMsg(object: DistrRecordAminoMsg): DistrRecord;
    toAminoMsg(message: DistrRecord): DistrRecordAminoMsg;
    fromProtoMsg(message: DistrRecordProtoMsg): DistrRecord;
    toProto(message: DistrRecord): Uint8Array;
    toProtoMsg(message: DistrRecord): DistrRecordProtoMsg;
};
export declare const PoolToGauge: {
    typeUrl: string;
    encode(message: PoolToGauge, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): PoolToGauge;
    fromJSON(object: any): PoolToGauge;
    toJSON(message: PoolToGauge): unknown;
    fromPartial(object: Partial<PoolToGauge>): PoolToGauge;
    fromSDK(object: PoolToGaugeSDKType): PoolToGauge;
    toSDK(message: PoolToGauge): PoolToGaugeSDKType;
    fromAmino(object: PoolToGaugeAmino): PoolToGauge;
    toAmino(message: PoolToGauge): PoolToGaugeAmino;
    fromAminoMsg(object: PoolToGaugeAminoMsg): PoolToGauge;
    toAminoMsg(message: PoolToGauge): PoolToGaugeAminoMsg;
    fromProtoMsg(message: PoolToGaugeProtoMsg): PoolToGauge;
    toProto(message: PoolToGauge): Uint8Array;
    toProtoMsg(message: PoolToGauge): PoolToGaugeProtoMsg;
};
export declare const PoolToGauges: {
    typeUrl: string;
    encode(message: PoolToGauges, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): PoolToGauges;
    fromJSON(object: any): PoolToGauges;
    toJSON(message: PoolToGauges): unknown;
    fromPartial(object: Partial<PoolToGauges>): PoolToGauges;
    fromSDK(object: PoolToGaugesSDKType): PoolToGauges;
    toSDK(message: PoolToGauges): PoolToGaugesSDKType;
    fromAmino(object: PoolToGaugesAmino): PoolToGauges;
    toAmino(message: PoolToGauges): PoolToGaugesAmino;
    fromAminoMsg(object: PoolToGaugesAminoMsg): PoolToGauges;
    toAminoMsg(message: PoolToGauges): PoolToGaugesAminoMsg;
    fromProtoMsg(message: PoolToGaugesProtoMsg): PoolToGauges;
    toProto(message: PoolToGauges): Uint8Array;
    toProtoMsg(message: PoolToGauges): PoolToGaugesProtoMsg;
};

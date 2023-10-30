//@ts-nocheck
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
import { Decimal } from "@cosmjs/math";
/**
 * SuperfluidAssetType indicates whether the superfluid asset is
 * a native token itself or the lp share of a pool.
 */
export enum SuperfluidAssetType {
  SuperfluidAssetTypeNative = 0,
  SuperfluidAssetTypeLPShare = 1,
  UNRECOGNIZED = -1,
}
export const SuperfluidAssetTypeSDKType = SuperfluidAssetType;
export const SuperfluidAssetTypeAmino = SuperfluidAssetType;
export function superfluidAssetTypeFromJSON(object: any): SuperfluidAssetType {
  switch (object) {
    case 0:
    case "SuperfluidAssetTypeNative":
      return SuperfluidAssetType.SuperfluidAssetTypeNative;
    case 1:
    case "SuperfluidAssetTypeLPShare":
      return SuperfluidAssetType.SuperfluidAssetTypeLPShare;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SuperfluidAssetType.UNRECOGNIZED;
  }
}
export function superfluidAssetTypeToJSON(object: SuperfluidAssetType): string {
  switch (object) {
    case SuperfluidAssetType.SuperfluidAssetTypeNative:
      return "SuperfluidAssetTypeNative";
    case SuperfluidAssetType.SuperfluidAssetTypeLPShare:
      return "SuperfluidAssetTypeLPShare";
    case SuperfluidAssetType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** SuperfluidAsset stores the pair of superfluid asset type and denom pair */
export interface SuperfluidAsset {
  denom: string;
  /**
   * AssetType indicates whether the superfluid asset is a native token or an lp
   * share
   */
  asset_type: SuperfluidAssetType;
}
export interface SuperfluidAssetProtoMsg {
  type_url: "/osmosis.superfluid.SuperfluidAsset";
  value: Uint8Array;
}
export interface SuperfluidAssetProtoMsg {
  type_url: "/osmosis.superfluid.SuperfluidAsset";
  value: Uint8Array;
}
/** SuperfluidAsset stores the pair of superfluid asset type and denom pair */
export interface SuperfluidAssetAmino {
  denom: string;
  /**
   * AssetType indicates whether the superfluid asset is a native token or an lp
   * share
   */
  asset_type: SuperfluidAssetType;
}
export interface SuperfluidAssetAminoMsg {
  type: "osmosis/superfluid-asset";
  value: SuperfluidAssetAmino;
}
/** SuperfluidAsset stores the pair of superfluid asset type and denom pair */
export interface SuperfluidAssetSDKType {
  denom: string;
  asset_type: SuperfluidAssetType;
}
/**
 * SuperfluidIntermediaryAccount takes the role of intermediary between LP token
 * and OSMO tokens for superfluid staking. The intermediary account is the
 * actual account responsible for delegation, not the validator account itself.
 */
export interface SuperfluidIntermediaryAccount {
  /** Denom indicates the denom of the superfluid asset. */
  denom: string;
  val_addr: string;
  /** perpetual gauge for rewards distribution */
  gauge_id: bigint;
}
export interface SuperfluidIntermediaryAccountProtoMsg {
  type_url: "/osmosis.superfluid.SuperfluidIntermediaryAccount";
  value: Uint8Array;
}
export interface SuperfluidIntermediaryAccountProtoMsg {
  type_url: "/osmosis.superfluid.SuperfluidIntermediaryAccount";
  value: Uint8Array;
}
/**
 * SuperfluidIntermediaryAccount takes the role of intermediary between LP token
 * and OSMO tokens for superfluid staking. The intermediary account is the
 * actual account responsible for delegation, not the validator account itself.
 */
export interface SuperfluidIntermediaryAccountAmino {
  /** Denom indicates the denom of the superfluid asset. */
  denom: string;
  val_addr: string;
  /** perpetual gauge for rewards distribution */
  gauge_id: string;
}
export interface SuperfluidIntermediaryAccountAminoMsg {
  type: "osmosis/superfluid-intermediary-account";
  value: SuperfluidIntermediaryAccountAmino;
}
/**
 * SuperfluidIntermediaryAccount takes the role of intermediary between LP token
 * and OSMO tokens for superfluid staking. The intermediary account is the
 * actual account responsible for delegation, not the validator account itself.
 */
export interface SuperfluidIntermediaryAccountSDKType {
  denom: string;
  val_addr: string;
  gauge_id: bigint;
}
/**
 * The Osmo-Equivalent-Multiplier Record for epoch N refers to the osmo worth we
 * treat an LP share as having, for all of epoch N. Eventually this is intended
 * to be set as the Time-weighted-average-osmo-backing for the entire duration
 * of epoch N-1. (Thereby locking whats in use for epoch N as based on the prior
 * epochs rewards) However for now, this is not the TWAP but instead the spot
 * price at the boundary. For different types of assets in the future, it could
 * change.
 */
export interface OsmoEquivalentMultiplierRecord {
  epoch_number: bigint;
  /** superfluid asset denom, can be LP token or native token */
  denom: string;
  multiplier: string;
}
export interface OsmoEquivalentMultiplierRecordProtoMsg {
  type_url: "/osmosis.superfluid.OsmoEquivalentMultiplierRecord";
  value: Uint8Array;
}
export interface OsmoEquivalentMultiplierRecordProtoMsg {
  type_url: "/osmosis.superfluid.OsmoEquivalentMultiplierRecord";
  value: Uint8Array;
}
/**
 * The Osmo-Equivalent-Multiplier Record for epoch N refers to the osmo worth we
 * treat an LP share as having, for all of epoch N. Eventually this is intended
 * to be set as the Time-weighted-average-osmo-backing for the entire duration
 * of epoch N-1. (Thereby locking whats in use for epoch N as based on the prior
 * epochs rewards) However for now, this is not the TWAP but instead the spot
 * price at the boundary. For different types of assets in the future, it could
 * change.
 */
export interface OsmoEquivalentMultiplierRecordAmino {
  epoch_number: string;
  /** superfluid asset denom, can be LP token or native token */
  denom: string;
  multiplier: string;
}
export interface OsmoEquivalentMultiplierRecordAminoMsg {
  type: "osmosis/osmo-equivalent-multiplier-record";
  value: OsmoEquivalentMultiplierRecordAmino;
}
/**
 * The Osmo-Equivalent-Multiplier Record for epoch N refers to the osmo worth we
 * treat an LP share as having, for all of epoch N. Eventually this is intended
 * to be set as the Time-weighted-average-osmo-backing for the entire duration
 * of epoch N-1. (Thereby locking whats in use for epoch N as based on the prior
 * epochs rewards) However for now, this is not the TWAP but instead the spot
 * price at the boundary. For different types of assets in the future, it could
 * change.
 */
export interface OsmoEquivalentMultiplierRecordSDKType {
  epoch_number: bigint;
  denom: string;
  multiplier: string;
}
/**
 * SuperfluidDelegationRecord is a struct used to indicate superfluid
 * delegations of an account in the state machine in a user friendly form.
 */
export interface SuperfluidDelegationRecord {
  delegator_address: string;
  validator_address: string;
  delegation_amount: Coin;
  equivalent_staked_amount?: Coin;
}
export interface SuperfluidDelegationRecordProtoMsg {
  type_url: "/osmosis.superfluid.SuperfluidDelegationRecord";
  value: Uint8Array;
}
export interface SuperfluidDelegationRecordProtoMsg {
  type_url: "/osmosis.superfluid.SuperfluidDelegationRecord";
  value: Uint8Array;
}
/**
 * SuperfluidDelegationRecord is a struct used to indicate superfluid
 * delegations of an account in the state machine in a user friendly form.
 */
export interface SuperfluidDelegationRecordAmino {
  delegator_address: string;
  validator_address: string;
  delegation_amount?: CoinAmino;
  equivalent_staked_amount?: CoinAmino;
}
export interface SuperfluidDelegationRecordAminoMsg {
  type: "osmosis/superfluid-delegation-record";
  value: SuperfluidDelegationRecordAmino;
}
/**
 * SuperfluidDelegationRecord is a struct used to indicate superfluid
 * delegations of an account in the state machine in a user friendly form.
 */
export interface SuperfluidDelegationRecordSDKType {
  delegator_address: string;
  validator_address: string;
  delegation_amount: CoinSDKType;
  equivalent_staked_amount?: CoinSDKType;
}
/**
 * LockIdIntermediaryAccountConnection is a struct used to indicate the
 * relationship between the underlying lock id and superfluid delegation done
 * via lp shares.
 */
export interface LockIdIntermediaryAccountConnection {
  lock_id: bigint;
  intermediary_account: string;
}
export interface LockIdIntermediaryAccountConnectionProtoMsg {
  type_url: "/osmosis.superfluid.LockIdIntermediaryAccountConnection";
  value: Uint8Array;
}
export interface LockIdIntermediaryAccountConnectionProtoMsg {
  type_url: "/osmosis.superfluid.LockIdIntermediaryAccountConnection";
  value: Uint8Array;
}
/**
 * LockIdIntermediaryAccountConnection is a struct used to indicate the
 * relationship between the underlying lock id and superfluid delegation done
 * via lp shares.
 */
export interface LockIdIntermediaryAccountConnectionAmino {
  lock_id: string;
  intermediary_account: string;
}
export interface LockIdIntermediaryAccountConnectionAminoMsg {
  type: "osmosis/lock-id-intermediary-account-connection";
  value: LockIdIntermediaryAccountConnectionAmino;
}
/**
 * LockIdIntermediaryAccountConnection is a struct used to indicate the
 * relationship between the underlying lock id and superfluid delegation done
 * via lp shares.
 */
export interface LockIdIntermediaryAccountConnectionSDKType {
  lock_id: bigint;
  intermediary_account: string;
}
export interface UnpoolWhitelistedPools {
  ids: bigint[];
}
export interface UnpoolWhitelistedPoolsProtoMsg {
  type_url: "/osmosis.superfluid.UnpoolWhitelistedPools";
  value: Uint8Array;
}
export interface UnpoolWhitelistedPoolsProtoMsg {
  type_url: "/osmosis.superfluid.UnpoolWhitelistedPools";
  value: Uint8Array;
}
export interface UnpoolWhitelistedPoolsAmino {
  ids: string[];
}
export interface UnpoolWhitelistedPoolsAminoMsg {
  type: "osmosis/unpool-whitelisted-pools";
  value: UnpoolWhitelistedPoolsAmino;
}
export interface UnpoolWhitelistedPoolsSDKType {
  ids: bigint[];
}
function createBaseSuperfluidAsset(): SuperfluidAsset {
  return {
    denom: "",
    asset_type: 0
  };
}
export const SuperfluidAsset = {
  typeUrl: "/osmosis.superfluid.SuperfluidAsset",
  encode(message: SuperfluidAsset, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.asset_type !== 0) {
      writer.uint32(16).int32(message.asset_type);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SuperfluidAsset {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSuperfluidAsset();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.asset_type = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SuperfluidAsset {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      asset_type: isSet(object.asset_type) ? superfluidAssetTypeFromJSON(object.asset_type) : -1
    };
  },
  toJSON(message: SuperfluidAsset): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.asset_type !== undefined && (obj.asset_type = superfluidAssetTypeToJSON(message.asset_type));
    return obj;
  },
  fromPartial(object: Partial<SuperfluidAsset>): SuperfluidAsset {
    const message = createBaseSuperfluidAsset();
    message.denom = object.denom ?? "";
    message.asset_type = object.asset_type ?? 0;
    return message;
  },
  fromSDK(object: SuperfluidAssetSDKType): SuperfluidAsset {
    return {
      denom: object?.denom,
      asset_type: isSet(object.asset_type) ? superfluidAssetTypeFromJSON(object.asset_type) : -1
    };
  },
  toSDK(message: SuperfluidAsset): SuperfluidAssetSDKType {
    const obj: any = {};
    obj.denom = message.denom;
    message.asset_type !== undefined && (obj.asset_type = superfluidAssetTypeToJSON(message.asset_type));
    return obj;
  },
  fromAmino(object: SuperfluidAssetAmino): SuperfluidAsset {
    return {
      denom: object.denom,
      asset_type: isSet(object.asset_type) ? superfluidAssetTypeFromJSON(object.asset_type) : -1
    };
  },
  toAmino(message: SuperfluidAsset): SuperfluidAssetAmino {
    const obj: any = {};
    obj.denom = message.denom;
    obj.asset_type = message.asset_type;
    return obj;
  },
  fromAminoMsg(object: SuperfluidAssetAminoMsg): SuperfluidAsset {
    return SuperfluidAsset.fromAmino(object.value);
  },
  toAminoMsg(message: SuperfluidAsset): SuperfluidAssetAminoMsg {
    return {
      type: "osmosis/superfluid-asset",
      value: SuperfluidAsset.toAmino(message)
    };
  },
  fromProtoMsg(message: SuperfluidAssetProtoMsg): SuperfluidAsset {
    return SuperfluidAsset.decode(message.value);
  },
  toProto(message: SuperfluidAsset): Uint8Array {
    return SuperfluidAsset.encode(message).finish();
  },
  toProtoMsg(message: SuperfluidAsset): SuperfluidAssetProtoMsg {
    return {
      typeUrl: "/osmosis.superfluid.SuperfluidAsset",
      value: SuperfluidAsset.encode(message).finish()
    };
  }
};
function createBaseSuperfluidIntermediaryAccount(): SuperfluidIntermediaryAccount {
  return {
    denom: "",
    val_addr: "",
    gauge_id: BigInt(0)
  };
}
export const SuperfluidIntermediaryAccount = {
  typeUrl: "/osmosis.superfluid.SuperfluidIntermediaryAccount",
  encode(message: SuperfluidIntermediaryAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.val_addr !== "") {
      writer.uint32(18).string(message.val_addr);
    }
    if (message.gauge_id !== BigInt(0)) {
      writer.uint32(24).uint64(message.gauge_id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SuperfluidIntermediaryAccount {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSuperfluidIntermediaryAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.val_addr = reader.string();
          break;
        case 3:
          message.gauge_id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SuperfluidIntermediaryAccount {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      val_addr: isSet(object.val_addr) ? String(object.val_addr) : "",
      gauge_id: isSet(object.gauge_id) ? BigInt(object.gauge_id.toString()) : BigInt(0)
    };
  },
  toJSON(message: SuperfluidIntermediaryAccount): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.val_addr !== undefined && (obj.val_addr = message.val_addr);
    message.gauge_id !== undefined && (obj.gauge_id = (message.gauge_id || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<SuperfluidIntermediaryAccount>): SuperfluidIntermediaryAccount {
    const message = createBaseSuperfluidIntermediaryAccount();
    message.denom = object.denom ?? "";
    message.val_addr = object.val_addr ?? "";
    message.gauge_id = object.gauge_id !== undefined && object.gauge_id !== null ? BigInt(object.gauge_id.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: SuperfluidIntermediaryAccountSDKType): SuperfluidIntermediaryAccount {
    return {
      denom: object?.denom,
      val_addr: object?.val_addr,
      gauge_id: object?.gauge_id
    };
  },
  toSDK(message: SuperfluidIntermediaryAccount): SuperfluidIntermediaryAccountSDKType {
    const obj: any = {};
    obj.denom = message.denom;
    obj.val_addr = message.val_addr;
    obj.gauge_id = message.gauge_id;
    return obj;
  },
  fromAmino(object: SuperfluidIntermediaryAccountAmino): SuperfluidIntermediaryAccount {
    return {
      denom: object.denom,
      val_addr: object.val_addr,
      gauge_id: BigInt(object.gauge_id)
    };
  },
  toAmino(message: SuperfluidIntermediaryAccount): SuperfluidIntermediaryAccountAmino {
    const obj: any = {};
    obj.denom = message.denom;
    obj.val_addr = message.val_addr;
    obj.gauge_id = message.gauge_id ? message.gauge_id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: SuperfluidIntermediaryAccountAminoMsg): SuperfluidIntermediaryAccount {
    return SuperfluidIntermediaryAccount.fromAmino(object.value);
  },
  toAminoMsg(message: SuperfluidIntermediaryAccount): SuperfluidIntermediaryAccountAminoMsg {
    return {
      type: "osmosis/superfluid-intermediary-account",
      value: SuperfluidIntermediaryAccount.toAmino(message)
    };
  },
  fromProtoMsg(message: SuperfluidIntermediaryAccountProtoMsg): SuperfluidIntermediaryAccount {
    return SuperfluidIntermediaryAccount.decode(message.value);
  },
  toProto(message: SuperfluidIntermediaryAccount): Uint8Array {
    return SuperfluidIntermediaryAccount.encode(message).finish();
  },
  toProtoMsg(message: SuperfluidIntermediaryAccount): SuperfluidIntermediaryAccountProtoMsg {
    return {
      typeUrl: "/osmosis.superfluid.SuperfluidIntermediaryAccount",
      value: SuperfluidIntermediaryAccount.encode(message).finish()
    };
  }
};
function createBaseOsmoEquivalentMultiplierRecord(): OsmoEquivalentMultiplierRecord {
  return {
    epoch_number: BigInt(0),
    denom: "",
    multiplier: ""
  };
}
export const OsmoEquivalentMultiplierRecord = {
  typeUrl: "/osmosis.superfluid.OsmoEquivalentMultiplierRecord",
  encode(message: OsmoEquivalentMultiplierRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.epoch_number !== BigInt(0)) {
      writer.uint32(8).int64(message.epoch_number);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.multiplier !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.multiplier, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): OsmoEquivalentMultiplierRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOsmoEquivalentMultiplierRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epoch_number = reader.int64();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.multiplier = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): OsmoEquivalentMultiplierRecord {
    return {
      epoch_number: isSet(object.epoch_number) ? BigInt(object.epoch_number.toString()) : BigInt(0),
      denom: isSet(object.denom) ? String(object.denom) : "",
      multiplier: isSet(object.multiplier) ? String(object.multiplier) : ""
    };
  },
  toJSON(message: OsmoEquivalentMultiplierRecord): unknown {
    const obj: any = {};
    message.epoch_number !== undefined && (obj.epoch_number = (message.epoch_number || BigInt(0)).toString());
    message.denom !== undefined && (obj.denom = message.denom);
    message.multiplier !== undefined && (obj.multiplier = message.multiplier);
    return obj;
  },
  fromPartial(object: Partial<OsmoEquivalentMultiplierRecord>): OsmoEquivalentMultiplierRecord {
    const message = createBaseOsmoEquivalentMultiplierRecord();
    message.epoch_number = object.epoch_number !== undefined && object.epoch_number !== null ? BigInt(object.epoch_number.toString()) : BigInt(0);
    message.denom = object.denom ?? "";
    message.multiplier = object.multiplier ?? "";
    return message;
  },
  fromSDK(object: OsmoEquivalentMultiplierRecordSDKType): OsmoEquivalentMultiplierRecord {
    return {
      epoch_number: object?.epoch_number,
      denom: object?.denom,
      multiplier: object?.multiplier
    };
  },
  toSDK(message: OsmoEquivalentMultiplierRecord): OsmoEquivalentMultiplierRecordSDKType {
    const obj: any = {};
    obj.epoch_number = message.epoch_number;
    obj.denom = message.denom;
    obj.multiplier = message.multiplier;
    return obj;
  },
  fromAmino(object: OsmoEquivalentMultiplierRecordAmino): OsmoEquivalentMultiplierRecord {
    return {
      epoch_number: BigInt(object.epoch_number),
      denom: object.denom,
      multiplier: object.multiplier
    };
  },
  toAmino(message: OsmoEquivalentMultiplierRecord): OsmoEquivalentMultiplierRecordAmino {
    const obj: any = {};
    obj.epoch_number = message.epoch_number ? message.epoch_number.toString() : undefined;
    obj.denom = message.denom;
    obj.multiplier = message.multiplier;
    return obj;
  },
  fromAminoMsg(object: OsmoEquivalentMultiplierRecordAminoMsg): OsmoEquivalentMultiplierRecord {
    return OsmoEquivalentMultiplierRecord.fromAmino(object.value);
  },
  toAminoMsg(message: OsmoEquivalentMultiplierRecord): OsmoEquivalentMultiplierRecordAminoMsg {
    return {
      type: "osmosis/osmo-equivalent-multiplier-record",
      value: OsmoEquivalentMultiplierRecord.toAmino(message)
    };
  },
  fromProtoMsg(message: OsmoEquivalentMultiplierRecordProtoMsg): OsmoEquivalentMultiplierRecord {
    return OsmoEquivalentMultiplierRecord.decode(message.value);
  },
  toProto(message: OsmoEquivalentMultiplierRecord): Uint8Array {
    return OsmoEquivalentMultiplierRecord.encode(message).finish();
  },
  toProtoMsg(message: OsmoEquivalentMultiplierRecord): OsmoEquivalentMultiplierRecordProtoMsg {
    return {
      typeUrl: "/osmosis.superfluid.OsmoEquivalentMultiplierRecord",
      value: OsmoEquivalentMultiplierRecord.encode(message).finish()
    };
  }
};
function createBaseSuperfluidDelegationRecord(): SuperfluidDelegationRecord {
  return {
    delegator_address: "",
    validator_address: "",
    delegation_amount: Coin.fromPartial({}),
    equivalent_staked_amount: undefined
  };
}
export const SuperfluidDelegationRecord = {
  typeUrl: "/osmosis.superfluid.SuperfluidDelegationRecord",
  encode(message: SuperfluidDelegationRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegator_address !== "") {
      writer.uint32(10).string(message.delegator_address);
    }
    if (message.validator_address !== "") {
      writer.uint32(18).string(message.validator_address);
    }
    if (message.delegation_amount !== undefined) {
      Coin.encode(message.delegation_amount, writer.uint32(26).fork()).ldelim();
    }
    if (message.equivalent_staked_amount !== undefined) {
      Coin.encode(message.equivalent_staked_amount, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SuperfluidDelegationRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSuperfluidDelegationRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator_address = reader.string();
          break;
        case 2:
          message.validator_address = reader.string();
          break;
        case 3:
          message.delegation_amount = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.equivalent_staked_amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SuperfluidDelegationRecord {
    return {
      delegator_address: isSet(object.delegator_address) ? String(object.delegator_address) : "",
      validator_address: isSet(object.validator_address) ? String(object.validator_address) : "",
      delegation_amount: isSet(object.delegation_amount) ? Coin.fromJSON(object.delegation_amount) : undefined,
      equivalent_staked_amount: isSet(object.equivalent_staked_amount) ? Coin.fromJSON(object.equivalent_staked_amount) : undefined
    };
  },
  toJSON(message: SuperfluidDelegationRecord): unknown {
    const obj: any = {};
    message.delegator_address !== undefined && (obj.delegator_address = message.delegator_address);
    message.validator_address !== undefined && (obj.validator_address = message.validator_address);
    message.delegation_amount !== undefined && (obj.delegation_amount = message.delegation_amount ? Coin.toJSON(message.delegation_amount) : undefined);
    message.equivalent_staked_amount !== undefined && (obj.equivalent_staked_amount = message.equivalent_staked_amount ? Coin.toJSON(message.equivalent_staked_amount) : undefined);
    return obj;
  },
  fromPartial(object: Partial<SuperfluidDelegationRecord>): SuperfluidDelegationRecord {
    const message = createBaseSuperfluidDelegationRecord();
    message.delegator_address = object.delegator_address ?? "";
    message.validator_address = object.validator_address ?? "";
    message.delegation_amount = object.delegation_amount !== undefined && object.delegation_amount !== null ? Coin.fromPartial(object.delegation_amount) : undefined;
    message.equivalent_staked_amount = object.equivalent_staked_amount !== undefined && object.equivalent_staked_amount !== null ? Coin.fromPartial(object.equivalent_staked_amount) : undefined;
    return message;
  },
  fromSDK(object: SuperfluidDelegationRecordSDKType): SuperfluidDelegationRecord {
    return {
      delegator_address: object?.delegator_address,
      validator_address: object?.validator_address,
      delegation_amount: object.delegation_amount ? Coin.fromSDK(object.delegation_amount) : undefined,
      equivalent_staked_amount: object.equivalent_staked_amount ? Coin.fromSDK(object.equivalent_staked_amount) : undefined
    };
  },
  toSDK(message: SuperfluidDelegationRecord): SuperfluidDelegationRecordSDKType {
    const obj: any = {};
    obj.delegator_address = message.delegator_address;
    obj.validator_address = message.validator_address;
    message.delegation_amount !== undefined && (obj.delegation_amount = message.delegation_amount ? Coin.toSDK(message.delegation_amount) : undefined);
    message.equivalent_staked_amount !== undefined && (obj.equivalent_staked_amount = message.equivalent_staked_amount ? Coin.toSDK(message.equivalent_staked_amount) : undefined);
    return obj;
  },
  fromAmino(object: SuperfluidDelegationRecordAmino): SuperfluidDelegationRecord {
    return {
      delegator_address: object.delegator_address,
      validator_address: object.validator_address,
      delegation_amount: object?.delegation_amount ? Coin.fromAmino(object.delegation_amount) : undefined,
      equivalent_staked_amount: object?.equivalent_staked_amount ? Coin.fromAmino(object.equivalent_staked_amount) : undefined
    };
  },
  toAmino(message: SuperfluidDelegationRecord): SuperfluidDelegationRecordAmino {
    const obj: any = {};
    obj.delegator_address = message.delegator_address;
    obj.validator_address = message.validator_address;
    obj.delegation_amount = message.delegation_amount ? Coin.toAmino(message.delegation_amount) : undefined;
    obj.equivalent_staked_amount = message.equivalent_staked_amount ? Coin.toAmino(message.equivalent_staked_amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: SuperfluidDelegationRecordAminoMsg): SuperfluidDelegationRecord {
    return SuperfluidDelegationRecord.fromAmino(object.value);
  },
  toAminoMsg(message: SuperfluidDelegationRecord): SuperfluidDelegationRecordAminoMsg {
    return {
      type: "osmosis/superfluid-delegation-record",
      value: SuperfluidDelegationRecord.toAmino(message)
    };
  },
  fromProtoMsg(message: SuperfluidDelegationRecordProtoMsg): SuperfluidDelegationRecord {
    return SuperfluidDelegationRecord.decode(message.value);
  },
  toProto(message: SuperfluidDelegationRecord): Uint8Array {
    return SuperfluidDelegationRecord.encode(message).finish();
  },
  toProtoMsg(message: SuperfluidDelegationRecord): SuperfluidDelegationRecordProtoMsg {
    return {
      typeUrl: "/osmosis.superfluid.SuperfluidDelegationRecord",
      value: SuperfluidDelegationRecord.encode(message).finish()
    };
  }
};
function createBaseLockIdIntermediaryAccountConnection(): LockIdIntermediaryAccountConnection {
  return {
    lock_id: BigInt(0),
    intermediary_account: ""
  };
}
export const LockIdIntermediaryAccountConnection = {
  typeUrl: "/osmosis.superfluid.LockIdIntermediaryAccountConnection",
  encode(message: LockIdIntermediaryAccountConnection, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.lock_id !== BigInt(0)) {
      writer.uint32(8).uint64(message.lock_id);
    }
    if (message.intermediary_account !== "") {
      writer.uint32(18).string(message.intermediary_account);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LockIdIntermediaryAccountConnection {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLockIdIntermediaryAccountConnection();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lock_id = reader.uint64();
          break;
        case 2:
          message.intermediary_account = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): LockIdIntermediaryAccountConnection {
    return {
      lock_id: isSet(object.lock_id) ? BigInt(object.lock_id.toString()) : BigInt(0),
      intermediary_account: isSet(object.intermediary_account) ? String(object.intermediary_account) : ""
    };
  },
  toJSON(message: LockIdIntermediaryAccountConnection): unknown {
    const obj: any = {};
    message.lock_id !== undefined && (obj.lock_id = (message.lock_id || BigInt(0)).toString());
    message.intermediary_account !== undefined && (obj.intermediary_account = message.intermediary_account);
    return obj;
  },
  fromPartial(object: Partial<LockIdIntermediaryAccountConnection>): LockIdIntermediaryAccountConnection {
    const message = createBaseLockIdIntermediaryAccountConnection();
    message.lock_id = object.lock_id !== undefined && object.lock_id !== null ? BigInt(object.lock_id.toString()) : BigInt(0);
    message.intermediary_account = object.intermediary_account ?? "";
    return message;
  },
  fromSDK(object: LockIdIntermediaryAccountConnectionSDKType): LockIdIntermediaryAccountConnection {
    return {
      lock_id: object?.lock_id,
      intermediary_account: object?.intermediary_account
    };
  },
  toSDK(message: LockIdIntermediaryAccountConnection): LockIdIntermediaryAccountConnectionSDKType {
    const obj: any = {};
    obj.lock_id = message.lock_id;
    obj.intermediary_account = message.intermediary_account;
    return obj;
  },
  fromAmino(object: LockIdIntermediaryAccountConnectionAmino): LockIdIntermediaryAccountConnection {
    return {
      lock_id: BigInt(object.lock_id),
      intermediary_account: object.intermediary_account
    };
  },
  toAmino(message: LockIdIntermediaryAccountConnection): LockIdIntermediaryAccountConnectionAmino {
    const obj: any = {};
    obj.lock_id = message.lock_id ? message.lock_id.toString() : undefined;
    obj.intermediary_account = message.intermediary_account;
    return obj;
  },
  fromAminoMsg(object: LockIdIntermediaryAccountConnectionAminoMsg): LockIdIntermediaryAccountConnection {
    return LockIdIntermediaryAccountConnection.fromAmino(object.value);
  },
  toAminoMsg(message: LockIdIntermediaryAccountConnection): LockIdIntermediaryAccountConnectionAminoMsg {
    return {
      type: "osmosis/lock-id-intermediary-account-connection",
      value: LockIdIntermediaryAccountConnection.toAmino(message)
    };
  },
  fromProtoMsg(message: LockIdIntermediaryAccountConnectionProtoMsg): LockIdIntermediaryAccountConnection {
    return LockIdIntermediaryAccountConnection.decode(message.value);
  },
  toProto(message: LockIdIntermediaryAccountConnection): Uint8Array {
    return LockIdIntermediaryAccountConnection.encode(message).finish();
  },
  toProtoMsg(message: LockIdIntermediaryAccountConnection): LockIdIntermediaryAccountConnectionProtoMsg {
    return {
      typeUrl: "/osmosis.superfluid.LockIdIntermediaryAccountConnection",
      value: LockIdIntermediaryAccountConnection.encode(message).finish()
    };
  }
};
function createBaseUnpoolWhitelistedPools(): UnpoolWhitelistedPools {
  return {
    ids: []
  };
}
export const UnpoolWhitelistedPools = {
  typeUrl: "/osmosis.superfluid.UnpoolWhitelistedPools",
  encode(message: UnpoolWhitelistedPools, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    writer.uint32(10).fork();
    for (const v of message.ids) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UnpoolWhitelistedPools {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnpoolWhitelistedPools();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.ids.push(reader.uint64());
            }
          } else {
            message.ids.push(reader.uint64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UnpoolWhitelistedPools {
    return {
      ids: Array.isArray(object?.ids) ? object.ids.map((e: any) => BigInt(e.toString())) : []
    };
  },
  toJSON(message: UnpoolWhitelistedPools): unknown {
    const obj: any = {};
    if (message.ids) {
      obj.ids = message.ids.map(e => (e || BigInt(0)).toString());
    } else {
      obj.ids = [];
    }
    return obj;
  },
  fromPartial(object: Partial<UnpoolWhitelistedPools>): UnpoolWhitelistedPools {
    const message = createBaseUnpoolWhitelistedPools();
    message.ids = object.ids?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromSDK(object: UnpoolWhitelistedPoolsSDKType): UnpoolWhitelistedPools {
    return {
      ids: Array.isArray(object?.ids) ? object.ids.map((e: any) => e) : []
    };
  },
  toSDK(message: UnpoolWhitelistedPools): UnpoolWhitelistedPoolsSDKType {
    const obj: any = {};
    if (message.ids) {
      obj.ids = message.ids.map(e => e);
    } else {
      obj.ids = [];
    }
    return obj;
  },
  fromAmino(object: UnpoolWhitelistedPoolsAmino): UnpoolWhitelistedPools {
    return {
      ids: Array.isArray(object?.ids) ? object.ids.map((e: any) => BigInt(e)) : []
    };
  },
  toAmino(message: UnpoolWhitelistedPools): UnpoolWhitelistedPoolsAmino {
    const obj: any = {};
    if (message.ids) {
      obj.ids = message.ids.map(e => e.toString());
    } else {
      obj.ids = [];
    }
    return obj;
  },
  fromAminoMsg(object: UnpoolWhitelistedPoolsAminoMsg): UnpoolWhitelistedPools {
    return UnpoolWhitelistedPools.fromAmino(object.value);
  },
  toAminoMsg(message: UnpoolWhitelistedPools): UnpoolWhitelistedPoolsAminoMsg {
    return {
      type: "osmosis/unpool-whitelisted-pools",
      value: UnpoolWhitelistedPools.toAmino(message)
    };
  },
  fromProtoMsg(message: UnpoolWhitelistedPoolsProtoMsg): UnpoolWhitelistedPools {
    return UnpoolWhitelistedPools.decode(message.value);
  },
  toProto(message: UnpoolWhitelistedPools): Uint8Array {
    return UnpoolWhitelistedPools.encode(message).finish();
  },
  toProtoMsg(message: UnpoolWhitelistedPools): UnpoolWhitelistedPoolsProtoMsg {
    return {
      typeUrl: "/osmosis.superfluid.UnpoolWhitelistedPools",
      value: UnpoolWhitelistedPools.encode(message).finish()
    };
  }
};
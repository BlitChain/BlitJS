//@ts-nocheck
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
import { Decimal } from "@cosmjs/math";
/**
 * SuperfluidAssetType indicates whether the superfluid asset is
 * a native token itself or the lp share of a pool.
 */
export var SuperfluidAssetType;
(function (SuperfluidAssetType) {
    SuperfluidAssetType[SuperfluidAssetType["SuperfluidAssetTypeNative"] = 0] = "SuperfluidAssetTypeNative";
    SuperfluidAssetType[SuperfluidAssetType["SuperfluidAssetTypeLPShare"] = 1] = "SuperfluidAssetTypeLPShare";
    SuperfluidAssetType[SuperfluidAssetType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(SuperfluidAssetType || (SuperfluidAssetType = {}));
export const SuperfluidAssetTypeSDKType = SuperfluidAssetType;
export const SuperfluidAssetTypeAmino = SuperfluidAssetType;
export function superfluidAssetTypeFromJSON(object) {
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
export function superfluidAssetTypeToJSON(object) {
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
function createBaseSuperfluidAsset() {
    return {
        denom: "",
        asset_type: 0
    };
}
export const SuperfluidAsset = {
    typeUrl: "/osmosis.superfluid.SuperfluidAsset",
    encode(message, writer = BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.asset_type !== 0) {
            writer.uint32(16).int32(message.asset_type);
        }
        return writer;
    },
    decode(input, length) {
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
                    message.asset_type = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            denom: isSet(object.denom) ? String(object.denom) : "",
            asset_type: isSet(object.asset_type) ? superfluidAssetTypeFromJSON(object.asset_type) : -1
        };
    },
    toJSON(message) {
        const obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        message.asset_type !== undefined && (obj.asset_type = superfluidAssetTypeToJSON(message.asset_type));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSuperfluidAsset();
        message.denom = object.denom ?? "";
        message.asset_type = object.asset_type ?? 0;
        return message;
    },
    fromSDK(object) {
        return {
            denom: object?.denom,
            asset_type: isSet(object.asset_type) ? superfluidAssetTypeFromJSON(object.asset_type) : -1
        };
    },
    toSDK(message) {
        const obj = {};
        obj.denom = message.denom;
        message.asset_type !== undefined && (obj.asset_type = superfluidAssetTypeToJSON(message.asset_type));
        return obj;
    },
    fromAmino(object) {
        return {
            denom: object.denom,
            asset_type: isSet(object.asset_type) ? superfluidAssetTypeFromJSON(object.asset_type) : -1
        };
    },
    toAmino(message) {
        const obj = {};
        obj.denom = message.denom;
        obj.asset_type = message.asset_type;
        return obj;
    },
    fromAminoMsg(object) {
        return SuperfluidAsset.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/superfluid-asset",
            value: SuperfluidAsset.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return SuperfluidAsset.decode(message.value);
    },
    toProto(message) {
        return SuperfluidAsset.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.SuperfluidAsset",
            value: SuperfluidAsset.encode(message).finish()
        };
    }
};
function createBaseSuperfluidIntermediaryAccount() {
    return {
        denom: "",
        val_addr: "",
        gauge_id: BigInt(0)
    };
}
export const SuperfluidIntermediaryAccount = {
    typeUrl: "/osmosis.superfluid.SuperfluidIntermediaryAccount",
    encode(message, writer = BinaryWriter.create()) {
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
    decode(input, length) {
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
    fromJSON(object) {
        return {
            denom: isSet(object.denom) ? String(object.denom) : "",
            val_addr: isSet(object.val_addr) ? String(object.val_addr) : "",
            gauge_id: isSet(object.gauge_id) ? BigInt(object.gauge_id.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        message.val_addr !== undefined && (obj.val_addr = message.val_addr);
        message.gauge_id !== undefined && (obj.gauge_id = (message.gauge_id || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSuperfluidIntermediaryAccount();
        message.denom = object.denom ?? "";
        message.val_addr = object.val_addr ?? "";
        message.gauge_id = object.gauge_id !== undefined && object.gauge_id !== null ? BigInt(object.gauge_id.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            denom: object?.denom,
            val_addr: object?.val_addr,
            gauge_id: object?.gauge_id
        };
    },
    toSDK(message) {
        const obj = {};
        obj.denom = message.denom;
        obj.val_addr = message.val_addr;
        obj.gauge_id = message.gauge_id;
        return obj;
    },
    fromAmino(object) {
        return {
            denom: object.denom,
            val_addr: object.val_addr,
            gauge_id: BigInt(object.gauge_id)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.denom = message.denom;
        obj.val_addr = message.val_addr;
        obj.gauge_id = message.gauge_id ? message.gauge_id.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return SuperfluidIntermediaryAccount.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/superfluid-intermediary-account",
            value: SuperfluidIntermediaryAccount.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return SuperfluidIntermediaryAccount.decode(message.value);
    },
    toProto(message) {
        return SuperfluidIntermediaryAccount.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.SuperfluidIntermediaryAccount",
            value: SuperfluidIntermediaryAccount.encode(message).finish()
        };
    }
};
function createBaseOsmoEquivalentMultiplierRecord() {
    return {
        epoch_number: BigInt(0),
        denom: "",
        multiplier: ""
    };
}
export const OsmoEquivalentMultiplierRecord = {
    typeUrl: "/osmosis.superfluid.OsmoEquivalentMultiplierRecord",
    encode(message, writer = BinaryWriter.create()) {
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
    decode(input, length) {
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
    fromJSON(object) {
        return {
            epoch_number: isSet(object.epoch_number) ? BigInt(object.epoch_number.toString()) : BigInt(0),
            denom: isSet(object.denom) ? String(object.denom) : "",
            multiplier: isSet(object.multiplier) ? String(object.multiplier) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.epoch_number !== undefined && (obj.epoch_number = (message.epoch_number || BigInt(0)).toString());
        message.denom !== undefined && (obj.denom = message.denom);
        message.multiplier !== undefined && (obj.multiplier = message.multiplier);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseOsmoEquivalentMultiplierRecord();
        message.epoch_number = object.epoch_number !== undefined && object.epoch_number !== null ? BigInt(object.epoch_number.toString()) : BigInt(0);
        message.denom = object.denom ?? "";
        message.multiplier = object.multiplier ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            epoch_number: object?.epoch_number,
            denom: object?.denom,
            multiplier: object?.multiplier
        };
    },
    toSDK(message) {
        const obj = {};
        obj.epoch_number = message.epoch_number;
        obj.denom = message.denom;
        obj.multiplier = message.multiplier;
        return obj;
    },
    fromAmino(object) {
        return {
            epoch_number: BigInt(object.epoch_number),
            denom: object.denom,
            multiplier: object.multiplier
        };
    },
    toAmino(message) {
        const obj = {};
        obj.epoch_number = message.epoch_number ? message.epoch_number.toString() : undefined;
        obj.denom = message.denom;
        obj.multiplier = message.multiplier;
        return obj;
    },
    fromAminoMsg(object) {
        return OsmoEquivalentMultiplierRecord.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/osmo-equivalent-multiplier-record",
            value: OsmoEquivalentMultiplierRecord.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return OsmoEquivalentMultiplierRecord.decode(message.value);
    },
    toProto(message) {
        return OsmoEquivalentMultiplierRecord.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.OsmoEquivalentMultiplierRecord",
            value: OsmoEquivalentMultiplierRecord.encode(message).finish()
        };
    }
};
function createBaseSuperfluidDelegationRecord() {
    return {
        delegator_address: "",
        validator_address: "",
        delegation_amount: Coin.fromPartial({}),
        equivalent_staked_amount: undefined
    };
}
export const SuperfluidDelegationRecord = {
    typeUrl: "/osmosis.superfluid.SuperfluidDelegationRecord",
    encode(message, writer = BinaryWriter.create()) {
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
    decode(input, length) {
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
    fromJSON(object) {
        return {
            delegator_address: isSet(object.delegator_address) ? String(object.delegator_address) : "",
            validator_address: isSet(object.validator_address) ? String(object.validator_address) : "",
            delegation_amount: isSet(object.delegation_amount) ? Coin.fromJSON(object.delegation_amount) : undefined,
            equivalent_staked_amount: isSet(object.equivalent_staked_amount) ? Coin.fromJSON(object.equivalent_staked_amount) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegator_address !== undefined && (obj.delegator_address = message.delegator_address);
        message.validator_address !== undefined && (obj.validator_address = message.validator_address);
        message.delegation_amount !== undefined && (obj.delegation_amount = message.delegation_amount ? Coin.toJSON(message.delegation_amount) : undefined);
        message.equivalent_staked_amount !== undefined && (obj.equivalent_staked_amount = message.equivalent_staked_amount ? Coin.toJSON(message.equivalent_staked_amount) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSuperfluidDelegationRecord();
        message.delegator_address = object.delegator_address ?? "";
        message.validator_address = object.validator_address ?? "";
        message.delegation_amount = object.delegation_amount !== undefined && object.delegation_amount !== null ? Coin.fromPartial(object.delegation_amount) : undefined;
        message.equivalent_staked_amount = object.equivalent_staked_amount !== undefined && object.equivalent_staked_amount !== null ? Coin.fromPartial(object.equivalent_staked_amount) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            delegator_address: object?.delegator_address,
            validator_address: object?.validator_address,
            delegation_amount: object.delegation_amount ? Coin.fromSDK(object.delegation_amount) : undefined,
            equivalent_staked_amount: object.equivalent_staked_amount ? Coin.fromSDK(object.equivalent_staked_amount) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.delegator_address = message.delegator_address;
        obj.validator_address = message.validator_address;
        message.delegation_amount !== undefined && (obj.delegation_amount = message.delegation_amount ? Coin.toSDK(message.delegation_amount) : undefined);
        message.equivalent_staked_amount !== undefined && (obj.equivalent_staked_amount = message.equivalent_staked_amount ? Coin.toSDK(message.equivalent_staked_amount) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            delegator_address: object.delegator_address,
            validator_address: object.validator_address,
            delegation_amount: object?.delegation_amount ? Coin.fromAmino(object.delegation_amount) : undefined,
            equivalent_staked_amount: object?.equivalent_staked_amount ? Coin.fromAmino(object.equivalent_staked_amount) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_address = message.delegator_address;
        obj.validator_address = message.validator_address;
        obj.delegation_amount = message.delegation_amount ? Coin.toAmino(message.delegation_amount) : undefined;
        obj.equivalent_staked_amount = message.equivalent_staked_amount ? Coin.toAmino(message.equivalent_staked_amount) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return SuperfluidDelegationRecord.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/superfluid-delegation-record",
            value: SuperfluidDelegationRecord.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return SuperfluidDelegationRecord.decode(message.value);
    },
    toProto(message) {
        return SuperfluidDelegationRecord.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.SuperfluidDelegationRecord",
            value: SuperfluidDelegationRecord.encode(message).finish()
        };
    }
};
function createBaseLockIdIntermediaryAccountConnection() {
    return {
        lock_id: BigInt(0),
        intermediary_account: ""
    };
}
export const LockIdIntermediaryAccountConnection = {
    typeUrl: "/osmosis.superfluid.LockIdIntermediaryAccountConnection",
    encode(message, writer = BinaryWriter.create()) {
        if (message.lock_id !== BigInt(0)) {
            writer.uint32(8).uint64(message.lock_id);
        }
        if (message.intermediary_account !== "") {
            writer.uint32(18).string(message.intermediary_account);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return {
            lock_id: isSet(object.lock_id) ? BigInt(object.lock_id.toString()) : BigInt(0),
            intermediary_account: isSet(object.intermediary_account) ? String(object.intermediary_account) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.lock_id !== undefined && (obj.lock_id = (message.lock_id || BigInt(0)).toString());
        message.intermediary_account !== undefined && (obj.intermediary_account = message.intermediary_account);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseLockIdIntermediaryAccountConnection();
        message.lock_id = object.lock_id !== undefined && object.lock_id !== null ? BigInt(object.lock_id.toString()) : BigInt(0);
        message.intermediary_account = object.intermediary_account ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            lock_id: object?.lock_id,
            intermediary_account: object?.intermediary_account
        };
    },
    toSDK(message) {
        const obj = {};
        obj.lock_id = message.lock_id;
        obj.intermediary_account = message.intermediary_account;
        return obj;
    },
    fromAmino(object) {
        return {
            lock_id: BigInt(object.lock_id),
            intermediary_account: object.intermediary_account
        };
    },
    toAmino(message) {
        const obj = {};
        obj.lock_id = message.lock_id ? message.lock_id.toString() : undefined;
        obj.intermediary_account = message.intermediary_account;
        return obj;
    },
    fromAminoMsg(object) {
        return LockIdIntermediaryAccountConnection.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lock-id-intermediary-account-connection",
            value: LockIdIntermediaryAccountConnection.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return LockIdIntermediaryAccountConnection.decode(message.value);
    },
    toProto(message) {
        return LockIdIntermediaryAccountConnection.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.LockIdIntermediaryAccountConnection",
            value: LockIdIntermediaryAccountConnection.encode(message).finish()
        };
    }
};
function createBaseUnpoolWhitelistedPools() {
    return {
        ids: []
    };
}
export const UnpoolWhitelistedPools = {
    typeUrl: "/osmosis.superfluid.UnpoolWhitelistedPools",
    encode(message, writer = BinaryWriter.create()) {
        writer.uint32(10).fork();
        for (const v of message.ids) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
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
                    }
                    else {
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
    fromJSON(object) {
        return {
            ids: Array.isArray(object?.ids) ? object.ids.map((e) => BigInt(e.toString())) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.ids) {
            obj.ids = message.ids.map(e => (e || BigInt(0)).toString());
        }
        else {
            obj.ids = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseUnpoolWhitelistedPools();
        message.ids = object.ids?.map(e => BigInt(e.toString())) || [];
        return message;
    },
    fromSDK(object) {
        return {
            ids: Array.isArray(object?.ids) ? object.ids.map((e) => e) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.ids) {
            obj.ids = message.ids.map(e => e);
        }
        else {
            obj.ids = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            ids: Array.isArray(object?.ids) ? object.ids.map((e) => BigInt(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.ids) {
            obj.ids = message.ids.map(e => e.toString());
        }
        else {
            obj.ids = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return UnpoolWhitelistedPools.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/unpool-whitelisted-pools",
            value: UnpoolWhitelistedPools.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return UnpoolWhitelistedPools.decode(message.value);
    },
    toProto(message) {
        return UnpoolWhitelistedPools.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.UnpoolWhitelistedPools",
            value: UnpoolWhitelistedPools.encode(message).finish()
        };
    }
};
//# sourceMappingURL=superfluid.js.map
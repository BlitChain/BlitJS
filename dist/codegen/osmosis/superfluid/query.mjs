//@ts-nocheck
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { Params } from "./params";
import { SuperfluidAsset, OsmoEquivalentMultiplierRecord, SuperfluidDelegationRecord, superfluidAssetTypeFromJSON, superfluidAssetTypeToJSON } from "./superfluid";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { SyntheticLock } from "../lockup/lock";
import { DelegationResponse } from "../../cosmos/staking/v1beta1/staking";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
function createBaseQueryParamsRequest() {
    return {};
}
export const QueryParamsRequest = {
    typeUrl: "/osmosis.superfluid.QueryParamsRequest",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseQueryParamsRequest();
        return message;
    },
    fromSDK(_) {
        return {};
    },
    toSDK(_) {
        const obj = {};
        return obj;
    },
    fromAmino(_) {
        return {};
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryParamsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/query-params-request",
            value: QueryParamsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryParamsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.QueryParamsRequest",
            value: QueryParamsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryParamsResponse() {
    return {
        params: Params.fromPartial({})
    };
}
export const QueryParamsResponse = {
    typeUrl: "/osmosis.superfluid.QueryParamsResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = Params.decode(reader, reader.uint32());
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
            params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            params: object.params ? Params.fromSDK(object.params) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            params: object?.params ? Params.fromAmino(object.params) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryParamsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/query-params-response",
            value: QueryParamsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryParamsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.QueryParamsResponse",
            value: QueryParamsResponse.encode(message).finish()
        };
    }
};
function createBaseAssetTypeRequest() {
    return {
        denom: ""
    };
}
export const AssetTypeRequest = {
    typeUrl: "/osmosis.superfluid.AssetTypeRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAssetTypeRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
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
            denom: isSet(object.denom) ? String(object.denom) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAssetTypeRequest();
        message.denom = object.denom ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            denom: object?.denom
        };
    },
    toSDK(message) {
        const obj = {};
        obj.denom = message.denom;
        return obj;
    },
    fromAmino(object) {
        return {
            denom: object.denom
        };
    },
    toAmino(message) {
        const obj = {};
        obj.denom = message.denom;
        return obj;
    },
    fromAminoMsg(object) {
        return AssetTypeRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/asset-type-request",
            value: AssetTypeRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return AssetTypeRequest.decode(message.value);
    },
    toProto(message) {
        return AssetTypeRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.AssetTypeRequest",
            value: AssetTypeRequest.encode(message).finish()
        };
    }
};
function createBaseAssetTypeResponse() {
    return {
        asset_type: 0
    };
}
export const AssetTypeResponse = {
    typeUrl: "/osmosis.superfluid.AssetTypeResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.asset_type !== 0) {
            writer.uint32(8).int32(message.asset_type);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAssetTypeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
            asset_type: isSet(object.asset_type) ? superfluidAssetTypeFromJSON(object.asset_type) : -1
        };
    },
    toJSON(message) {
        const obj = {};
        message.asset_type !== undefined && (obj.asset_type = superfluidAssetTypeToJSON(message.asset_type));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAssetTypeResponse();
        message.asset_type = object.asset_type ?? 0;
        return message;
    },
    fromSDK(object) {
        return {
            asset_type: isSet(object.asset_type) ? superfluidAssetTypeFromJSON(object.asset_type) : -1
        };
    },
    toSDK(message) {
        const obj = {};
        message.asset_type !== undefined && (obj.asset_type = superfluidAssetTypeToJSON(message.asset_type));
        return obj;
    },
    fromAmino(object) {
        return {
            asset_type: isSet(object.asset_type) ? superfluidAssetTypeFromJSON(object.asset_type) : -1
        };
    },
    toAmino(message) {
        const obj = {};
        obj.asset_type = message.asset_type;
        return obj;
    },
    fromAminoMsg(object) {
        return AssetTypeResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/asset-type-response",
            value: AssetTypeResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return AssetTypeResponse.decode(message.value);
    },
    toProto(message) {
        return AssetTypeResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.AssetTypeResponse",
            value: AssetTypeResponse.encode(message).finish()
        };
    }
};
function createBaseAllAssetsRequest() {
    return {};
}
export const AllAssetsRequest = {
    typeUrl: "/osmosis.superfluid.AllAssetsRequest",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAllAssetsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseAllAssetsRequest();
        return message;
    },
    fromSDK(_) {
        return {};
    },
    toSDK(_) {
        const obj = {};
        return obj;
    },
    fromAmino(_) {
        return {};
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return AllAssetsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/all-assets-request",
            value: AllAssetsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return AllAssetsRequest.decode(message.value);
    },
    toProto(message) {
        return AllAssetsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.AllAssetsRequest",
            value: AllAssetsRequest.encode(message).finish()
        };
    }
};
function createBaseAllAssetsResponse() {
    return {
        assets: []
    };
}
export const AllAssetsResponse = {
    typeUrl: "/osmosis.superfluid.AllAssetsResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.assets) {
            SuperfluidAsset.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAllAssetsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.assets.push(SuperfluidAsset.decode(reader, reader.uint32()));
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
            assets: Array.isArray(object?.assets) ? object.assets.map((e) => SuperfluidAsset.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.assets) {
            obj.assets = message.assets.map(e => e ? SuperfluidAsset.toJSON(e) : undefined);
        }
        else {
            obj.assets = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAllAssetsResponse();
        message.assets = object.assets?.map(e => SuperfluidAsset.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            assets: Array.isArray(object?.assets) ? object.assets.map((e) => SuperfluidAsset.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.assets) {
            obj.assets = message.assets.map(e => e ? SuperfluidAsset.toSDK(e) : undefined);
        }
        else {
            obj.assets = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            assets: Array.isArray(object?.assets) ? object.assets.map((e) => SuperfluidAsset.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.assets) {
            obj.assets = message.assets.map(e => e ? SuperfluidAsset.toAmino(e) : undefined);
        }
        else {
            obj.assets = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return AllAssetsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/all-assets-response",
            value: AllAssetsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return AllAssetsResponse.decode(message.value);
    },
    toProto(message) {
        return AllAssetsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.AllAssetsResponse",
            value: AllAssetsResponse.encode(message).finish()
        };
    }
};
function createBaseAssetMultiplierRequest() {
    return {
        denom: ""
    };
}
export const AssetMultiplierRequest = {
    typeUrl: "/osmosis.superfluid.AssetMultiplierRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAssetMultiplierRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
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
            denom: isSet(object.denom) ? String(object.denom) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAssetMultiplierRequest();
        message.denom = object.denom ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            denom: object?.denom
        };
    },
    toSDK(message) {
        const obj = {};
        obj.denom = message.denom;
        return obj;
    },
    fromAmino(object) {
        return {
            denom: object.denom
        };
    },
    toAmino(message) {
        const obj = {};
        obj.denom = message.denom;
        return obj;
    },
    fromAminoMsg(object) {
        return AssetMultiplierRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/asset-multiplier-request",
            value: AssetMultiplierRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return AssetMultiplierRequest.decode(message.value);
    },
    toProto(message) {
        return AssetMultiplierRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.AssetMultiplierRequest",
            value: AssetMultiplierRequest.encode(message).finish()
        };
    }
};
function createBaseAssetMultiplierResponse() {
    return {
        osmo_equivalent_multiplier: undefined
    };
}
export const AssetMultiplierResponse = {
    typeUrl: "/osmosis.superfluid.AssetMultiplierResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.osmo_equivalent_multiplier !== undefined) {
            OsmoEquivalentMultiplierRecord.encode(message.osmo_equivalent_multiplier, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAssetMultiplierResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.osmo_equivalent_multiplier = OsmoEquivalentMultiplierRecord.decode(reader, reader.uint32());
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
            osmo_equivalent_multiplier: isSet(object.osmo_equivalent_multiplier) ? OsmoEquivalentMultiplierRecord.fromJSON(object.osmo_equivalent_multiplier) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.osmo_equivalent_multiplier !== undefined && (obj.osmo_equivalent_multiplier = message.osmo_equivalent_multiplier ? OsmoEquivalentMultiplierRecord.toJSON(message.osmo_equivalent_multiplier) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAssetMultiplierResponse();
        message.osmo_equivalent_multiplier = object.osmo_equivalent_multiplier !== undefined && object.osmo_equivalent_multiplier !== null ? OsmoEquivalentMultiplierRecord.fromPartial(object.osmo_equivalent_multiplier) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            osmo_equivalent_multiplier: object.osmo_equivalent_multiplier ? OsmoEquivalentMultiplierRecord.fromSDK(object.osmo_equivalent_multiplier) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.osmo_equivalent_multiplier !== undefined && (obj.osmo_equivalent_multiplier = message.osmo_equivalent_multiplier ? OsmoEquivalentMultiplierRecord.toSDK(message.osmo_equivalent_multiplier) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            osmo_equivalent_multiplier: object?.osmo_equivalent_multiplier ? OsmoEquivalentMultiplierRecord.fromAmino(object.osmo_equivalent_multiplier) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.osmo_equivalent_multiplier = message.osmo_equivalent_multiplier ? OsmoEquivalentMultiplierRecord.toAmino(message.osmo_equivalent_multiplier) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return AssetMultiplierResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/asset-multiplier-response",
            value: AssetMultiplierResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return AssetMultiplierResponse.decode(message.value);
    },
    toProto(message) {
        return AssetMultiplierResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.AssetMultiplierResponse",
            value: AssetMultiplierResponse.encode(message).finish()
        };
    }
};
function createBaseSuperfluidIntermediaryAccountInfo() {
    return {
        denom: "",
        val_addr: "",
        gauge_id: BigInt(0),
        address: ""
    };
}
export const SuperfluidIntermediaryAccountInfo = {
    typeUrl: "/osmosis.superfluid.SuperfluidIntermediaryAccountInfo",
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
        if (message.address !== "") {
            writer.uint32(34).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSuperfluidIntermediaryAccountInfo();
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
                case 4:
                    message.address = reader.string();
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
            gauge_id: isSet(object.gauge_id) ? BigInt(object.gauge_id.toString()) : BigInt(0),
            address: isSet(object.address) ? String(object.address) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        message.val_addr !== undefined && (obj.val_addr = message.val_addr);
        message.gauge_id !== undefined && (obj.gauge_id = (message.gauge_id || BigInt(0)).toString());
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSuperfluidIntermediaryAccountInfo();
        message.denom = object.denom ?? "";
        message.val_addr = object.val_addr ?? "";
        message.gauge_id = object.gauge_id !== undefined && object.gauge_id !== null ? BigInt(object.gauge_id.toString()) : BigInt(0);
        message.address = object.address ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            denom: object?.denom,
            val_addr: object?.val_addr,
            gauge_id: object?.gauge_id,
            address: object?.address
        };
    },
    toSDK(message) {
        const obj = {};
        obj.denom = message.denom;
        obj.val_addr = message.val_addr;
        obj.gauge_id = message.gauge_id;
        obj.address = message.address;
        return obj;
    },
    fromAmino(object) {
        return {
            denom: object.denom,
            val_addr: object.val_addr,
            gauge_id: BigInt(object.gauge_id),
            address: object.address
        };
    },
    toAmino(message) {
        const obj = {};
        obj.denom = message.denom;
        obj.val_addr = message.val_addr;
        obj.gauge_id = message.gauge_id ? message.gauge_id.toString() : undefined;
        obj.address = message.address;
        return obj;
    },
    fromAminoMsg(object) {
        return SuperfluidIntermediaryAccountInfo.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/superfluid-intermediary-account-info",
            value: SuperfluidIntermediaryAccountInfo.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return SuperfluidIntermediaryAccountInfo.decode(message.value);
    },
    toProto(message) {
        return SuperfluidIntermediaryAccountInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.SuperfluidIntermediaryAccountInfo",
            value: SuperfluidIntermediaryAccountInfo.encode(message).finish()
        };
    }
};
function createBaseAllIntermediaryAccountsRequest() {
    return {
        pagination: undefined
    };
}
export const AllIntermediaryAccountsRequest = {
    typeUrl: "/osmosis.superfluid.AllIntermediaryAccountsRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAllIntermediaryAccountsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAllIntermediaryAccountsRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return AllIntermediaryAccountsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/all-intermediary-accounts-request",
            value: AllIntermediaryAccountsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return AllIntermediaryAccountsRequest.decode(message.value);
    },
    toProto(message) {
        return AllIntermediaryAccountsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.AllIntermediaryAccountsRequest",
            value: AllIntermediaryAccountsRequest.encode(message).finish()
        };
    }
};
function createBaseAllIntermediaryAccountsResponse() {
    return {
        accounts: [],
        pagination: undefined
    };
}
export const AllIntermediaryAccountsResponse = {
    typeUrl: "/osmosis.superfluid.AllIntermediaryAccountsResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.accounts) {
            SuperfluidIntermediaryAccountInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAllIntermediaryAccountsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accounts.push(SuperfluidIntermediaryAccountInfo.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
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
            accounts: Array.isArray(object?.accounts) ? object.accounts.map((e) => SuperfluidIntermediaryAccountInfo.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.accounts) {
            obj.accounts = message.accounts.map(e => e ? SuperfluidIntermediaryAccountInfo.toJSON(e) : undefined);
        }
        else {
            obj.accounts = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAllIntermediaryAccountsResponse();
        message.accounts = object.accounts?.map(e => SuperfluidIntermediaryAccountInfo.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            accounts: Array.isArray(object?.accounts) ? object.accounts.map((e) => SuperfluidIntermediaryAccountInfo.fromSDK(e)) : [],
            pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.accounts) {
            obj.accounts = message.accounts.map(e => e ? SuperfluidIntermediaryAccountInfo.toSDK(e) : undefined);
        }
        else {
            obj.accounts = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            accounts: Array.isArray(object?.accounts) ? object.accounts.map((e) => SuperfluidIntermediaryAccountInfo.fromAmino(e)) : [],
            pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.accounts) {
            obj.accounts = message.accounts.map(e => e ? SuperfluidIntermediaryAccountInfo.toAmino(e) : undefined);
        }
        else {
            obj.accounts = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return AllIntermediaryAccountsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/all-intermediary-accounts-response",
            value: AllIntermediaryAccountsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return AllIntermediaryAccountsResponse.decode(message.value);
    },
    toProto(message) {
        return AllIntermediaryAccountsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.AllIntermediaryAccountsResponse",
            value: AllIntermediaryAccountsResponse.encode(message).finish()
        };
    }
};
function createBaseConnectedIntermediaryAccountRequest() {
    return {
        lock_id: BigInt(0)
    };
}
export const ConnectedIntermediaryAccountRequest = {
    typeUrl: "/osmosis.superfluid.ConnectedIntermediaryAccountRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.lock_id !== BigInt(0)) {
            writer.uint32(8).uint64(message.lock_id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConnectedIntermediaryAccountRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lock_id = reader.uint64();
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
            lock_id: isSet(object.lock_id) ? BigInt(object.lock_id.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.lock_id !== undefined && (obj.lock_id = (message.lock_id || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseConnectedIntermediaryAccountRequest();
        message.lock_id = object.lock_id !== undefined && object.lock_id !== null ? BigInt(object.lock_id.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            lock_id: object?.lock_id
        };
    },
    toSDK(message) {
        const obj = {};
        obj.lock_id = message.lock_id;
        return obj;
    },
    fromAmino(object) {
        return {
            lock_id: BigInt(object.lock_id)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.lock_id = message.lock_id ? message.lock_id.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ConnectedIntermediaryAccountRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/connected-intermediary-account-request",
            value: ConnectedIntermediaryAccountRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ConnectedIntermediaryAccountRequest.decode(message.value);
    },
    toProto(message) {
        return ConnectedIntermediaryAccountRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.ConnectedIntermediaryAccountRequest",
            value: ConnectedIntermediaryAccountRequest.encode(message).finish()
        };
    }
};
function createBaseConnectedIntermediaryAccountResponse() {
    return {
        account: undefined
    };
}
export const ConnectedIntermediaryAccountResponse = {
    typeUrl: "/osmosis.superfluid.ConnectedIntermediaryAccountResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.account !== undefined) {
            SuperfluidIntermediaryAccountInfo.encode(message.account, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConnectedIntermediaryAccountResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.account = SuperfluidIntermediaryAccountInfo.decode(reader, reader.uint32());
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
            account: isSet(object.account) ? SuperfluidIntermediaryAccountInfo.fromJSON(object.account) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.account !== undefined && (obj.account = message.account ? SuperfluidIntermediaryAccountInfo.toJSON(message.account) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseConnectedIntermediaryAccountResponse();
        message.account = object.account !== undefined && object.account !== null ? SuperfluidIntermediaryAccountInfo.fromPartial(object.account) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            account: object.account ? SuperfluidIntermediaryAccountInfo.fromSDK(object.account) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.account !== undefined && (obj.account = message.account ? SuperfluidIntermediaryAccountInfo.toSDK(message.account) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            account: object?.account ? SuperfluidIntermediaryAccountInfo.fromAmino(object.account) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.account = message.account ? SuperfluidIntermediaryAccountInfo.toAmino(message.account) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ConnectedIntermediaryAccountResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/connected-intermediary-account-response",
            value: ConnectedIntermediaryAccountResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ConnectedIntermediaryAccountResponse.decode(message.value);
    },
    toProto(message) {
        return ConnectedIntermediaryAccountResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.ConnectedIntermediaryAccountResponse",
            value: ConnectedIntermediaryAccountResponse.encode(message).finish()
        };
    }
};
function createBaseQueryTotalDelegationByValidatorForDenomRequest() {
    return {
        denom: ""
    };
}
export const QueryTotalDelegationByValidatorForDenomRequest = {
    typeUrl: "/osmosis.superfluid.QueryTotalDelegationByValidatorForDenomRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTotalDelegationByValidatorForDenomRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
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
            denom: isSet(object.denom) ? String(object.denom) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryTotalDelegationByValidatorForDenomRequest();
        message.denom = object.denom ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            denom: object?.denom
        };
    },
    toSDK(message) {
        const obj = {};
        obj.denom = message.denom;
        return obj;
    },
    fromAmino(object) {
        return {
            denom: object.denom
        };
    },
    toAmino(message) {
        const obj = {};
        obj.denom = message.denom;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryTotalDelegationByValidatorForDenomRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/query-total-delegation-by-validator-for-denom-request",
            value: QueryTotalDelegationByValidatorForDenomRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryTotalDelegationByValidatorForDenomRequest.decode(message.value);
    },
    toProto(message) {
        return QueryTotalDelegationByValidatorForDenomRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.QueryTotalDelegationByValidatorForDenomRequest",
            value: QueryTotalDelegationByValidatorForDenomRequest.encode(message).finish()
        };
    }
};
function createBaseQueryTotalDelegationByValidatorForDenomResponse() {
    return {
        assets: []
    };
}
export const QueryTotalDelegationByValidatorForDenomResponse = {
    typeUrl: "/osmosis.superfluid.QueryTotalDelegationByValidatorForDenomResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.assets) {
            Delegations.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTotalDelegationByValidatorForDenomResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.assets.push(Delegations.decode(reader, reader.uint32()));
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
            assets: Array.isArray(object?.assets) ? object.assets.map((e) => Delegations.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.assets) {
            obj.assets = message.assets.map(e => e ? Delegations.toJSON(e) : undefined);
        }
        else {
            obj.assets = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryTotalDelegationByValidatorForDenomResponse();
        message.assets = object.assets?.map(e => Delegations.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            assets: Array.isArray(object?.assets) ? object.assets.map((e) => Delegations.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.assets) {
            obj.assets = message.assets.map(e => e ? Delegations.toSDK(e) : undefined);
        }
        else {
            obj.assets = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            assets: Array.isArray(object?.assets) ? object.assets.map((e) => Delegations.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.assets) {
            obj.assets = message.assets.map(e => e ? Delegations.toAmino(e) : undefined);
        }
        else {
            obj.assets = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryTotalDelegationByValidatorForDenomResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/query-total-delegation-by-validator-for-denom-response",
            value: QueryTotalDelegationByValidatorForDenomResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryTotalDelegationByValidatorForDenomResponse.decode(message.value);
    },
    toProto(message) {
        return QueryTotalDelegationByValidatorForDenomResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.QueryTotalDelegationByValidatorForDenomResponse",
            value: QueryTotalDelegationByValidatorForDenomResponse.encode(message).finish()
        };
    }
};
function createBaseDelegations() {
    return {
        val_addr: "",
        amount_sfsd: "",
        osmo_equivalent: ""
    };
}
export const Delegations = {
    typeUrl: "/osmosis.superfluid.Delegations",
    encode(message, writer = BinaryWriter.create()) {
        if (message.val_addr !== "") {
            writer.uint32(10).string(message.val_addr);
        }
        if (message.amount_sfsd !== "") {
            writer.uint32(18).string(message.amount_sfsd);
        }
        if (message.osmo_equivalent !== "") {
            writer.uint32(26).string(message.osmo_equivalent);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDelegations();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.val_addr = reader.string();
                    break;
                case 2:
                    message.amount_sfsd = reader.string();
                    break;
                case 3:
                    message.osmo_equivalent = reader.string();
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
            val_addr: isSet(object.val_addr) ? String(object.val_addr) : "",
            amount_sfsd: isSet(object.amount_sfsd) ? String(object.amount_sfsd) : "",
            osmo_equivalent: isSet(object.osmo_equivalent) ? String(object.osmo_equivalent) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.val_addr !== undefined && (obj.val_addr = message.val_addr);
        message.amount_sfsd !== undefined && (obj.amount_sfsd = message.amount_sfsd);
        message.osmo_equivalent !== undefined && (obj.osmo_equivalent = message.osmo_equivalent);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDelegations();
        message.val_addr = object.val_addr ?? "";
        message.amount_sfsd = object.amount_sfsd ?? "";
        message.osmo_equivalent = object.osmo_equivalent ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            val_addr: object?.val_addr,
            amount_sfsd: object?.amount_sfsd,
            osmo_equivalent: object?.osmo_equivalent
        };
    },
    toSDK(message) {
        const obj = {};
        obj.val_addr = message.val_addr;
        obj.amount_sfsd = message.amount_sfsd;
        obj.osmo_equivalent = message.osmo_equivalent;
        return obj;
    },
    fromAmino(object) {
        return {
            val_addr: object.val_addr,
            amount_sfsd: object.amount_sfsd,
            osmo_equivalent: object.osmo_equivalent
        };
    },
    toAmino(message) {
        const obj = {};
        obj.val_addr = message.val_addr;
        obj.amount_sfsd = message.amount_sfsd;
        obj.osmo_equivalent = message.osmo_equivalent;
        return obj;
    },
    fromAminoMsg(object) {
        return Delegations.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/delegations",
            value: Delegations.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Delegations.decode(message.value);
    },
    toProto(message) {
        return Delegations.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.Delegations",
            value: Delegations.encode(message).finish()
        };
    }
};
function createBaseTotalSuperfluidDelegationsRequest() {
    return {};
}
export const TotalSuperfluidDelegationsRequest = {
    typeUrl: "/osmosis.superfluid.TotalSuperfluidDelegationsRequest",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTotalSuperfluidDelegationsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseTotalSuperfluidDelegationsRequest();
        return message;
    },
    fromSDK(_) {
        return {};
    },
    toSDK(_) {
        const obj = {};
        return obj;
    },
    fromAmino(_) {
        return {};
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return TotalSuperfluidDelegationsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/total-superfluid-delegations-request",
            value: TotalSuperfluidDelegationsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return TotalSuperfluidDelegationsRequest.decode(message.value);
    },
    toProto(message) {
        return TotalSuperfluidDelegationsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.TotalSuperfluidDelegationsRequest",
            value: TotalSuperfluidDelegationsRequest.encode(message).finish()
        };
    }
};
function createBaseTotalSuperfluidDelegationsResponse() {
    return {
        total_delegations: ""
    };
}
export const TotalSuperfluidDelegationsResponse = {
    typeUrl: "/osmosis.superfluid.TotalSuperfluidDelegationsResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.total_delegations !== "") {
            writer.uint32(10).string(message.total_delegations);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTotalSuperfluidDelegationsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.total_delegations = reader.string();
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
            total_delegations: isSet(object.total_delegations) ? String(object.total_delegations) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.total_delegations !== undefined && (obj.total_delegations = message.total_delegations);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTotalSuperfluidDelegationsResponse();
        message.total_delegations = object.total_delegations ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            total_delegations: object?.total_delegations
        };
    },
    toSDK(message) {
        const obj = {};
        obj.total_delegations = message.total_delegations;
        return obj;
    },
    fromAmino(object) {
        return {
            total_delegations: object.total_delegations
        };
    },
    toAmino(message) {
        const obj = {};
        obj.total_delegations = message.total_delegations;
        return obj;
    },
    fromAminoMsg(object) {
        return TotalSuperfluidDelegationsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/total-superfluid-delegations-response",
            value: TotalSuperfluidDelegationsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return TotalSuperfluidDelegationsResponse.decode(message.value);
    },
    toProto(message) {
        return TotalSuperfluidDelegationsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.TotalSuperfluidDelegationsResponse",
            value: TotalSuperfluidDelegationsResponse.encode(message).finish()
        };
    }
};
function createBaseSuperfluidDelegationAmountRequest() {
    return {
        delegator_address: "",
        validator_address: "",
        denom: ""
    };
}
export const SuperfluidDelegationAmountRequest = {
    typeUrl: "/osmosis.superfluid.SuperfluidDelegationAmountRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.delegator_address !== "") {
            writer.uint32(10).string(message.delegator_address);
        }
        if (message.validator_address !== "") {
            writer.uint32(18).string(message.validator_address);
        }
        if (message.denom !== "") {
            writer.uint32(26).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSuperfluidDelegationAmountRequest();
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
                    message.denom = reader.string();
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
            denom: isSet(object.denom) ? String(object.denom) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegator_address !== undefined && (obj.delegator_address = message.delegator_address);
        message.validator_address !== undefined && (obj.validator_address = message.validator_address);
        message.denom !== undefined && (obj.denom = message.denom);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSuperfluidDelegationAmountRequest();
        message.delegator_address = object.delegator_address ?? "";
        message.validator_address = object.validator_address ?? "";
        message.denom = object.denom ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            delegator_address: object?.delegator_address,
            validator_address: object?.validator_address,
            denom: object?.denom
        };
    },
    toSDK(message) {
        const obj = {};
        obj.delegator_address = message.delegator_address;
        obj.validator_address = message.validator_address;
        obj.denom = message.denom;
        return obj;
    },
    fromAmino(object) {
        return {
            delegator_address: object.delegator_address,
            validator_address: object.validator_address,
            denom: object.denom
        };
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_address = message.delegator_address;
        obj.validator_address = message.validator_address;
        obj.denom = message.denom;
        return obj;
    },
    fromAminoMsg(object) {
        return SuperfluidDelegationAmountRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/superfluid-delegation-amount-request",
            value: SuperfluidDelegationAmountRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return SuperfluidDelegationAmountRequest.decode(message.value);
    },
    toProto(message) {
        return SuperfluidDelegationAmountRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.SuperfluidDelegationAmountRequest",
            value: SuperfluidDelegationAmountRequest.encode(message).finish()
        };
    }
};
function createBaseSuperfluidDelegationAmountResponse() {
    return {
        amount: []
    };
}
export const SuperfluidDelegationAmountResponse = {
    typeUrl: "/osmosis.superfluid.SuperfluidDelegationAmountResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.amount) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSuperfluidDelegationAmountResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount.push(Coin.decode(reader, reader.uint32()));
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
            amount: Array.isArray(object?.amount) ? object.amount.map((e) => Coin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.amount = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSuperfluidDelegationAmountResponse();
        message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            amount: Array.isArray(object?.amount) ? object.amount.map((e) => Coin.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? Coin.toSDK(e) : undefined);
        }
        else {
            obj.amount = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            amount: Array.isArray(object?.amount) ? object.amount.map((e) => Coin.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.amount = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return SuperfluidDelegationAmountResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/superfluid-delegation-amount-response",
            value: SuperfluidDelegationAmountResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return SuperfluidDelegationAmountResponse.decode(message.value);
    },
    toProto(message) {
        return SuperfluidDelegationAmountResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.SuperfluidDelegationAmountResponse",
            value: SuperfluidDelegationAmountResponse.encode(message).finish()
        };
    }
};
function createBaseSuperfluidDelegationsByDelegatorRequest() {
    return {
        delegator_address: ""
    };
}
export const SuperfluidDelegationsByDelegatorRequest = {
    typeUrl: "/osmosis.superfluid.SuperfluidDelegationsByDelegatorRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.delegator_address !== "") {
            writer.uint32(10).string(message.delegator_address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSuperfluidDelegationsByDelegatorRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegator_address = reader.string();
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
            delegator_address: isSet(object.delegator_address) ? String(object.delegator_address) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegator_address !== undefined && (obj.delegator_address = message.delegator_address);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSuperfluidDelegationsByDelegatorRequest();
        message.delegator_address = object.delegator_address ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            delegator_address: object?.delegator_address
        };
    },
    toSDK(message) {
        const obj = {};
        obj.delegator_address = message.delegator_address;
        return obj;
    },
    fromAmino(object) {
        return {
            delegator_address: object.delegator_address
        };
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_address = message.delegator_address;
        return obj;
    },
    fromAminoMsg(object) {
        return SuperfluidDelegationsByDelegatorRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/superfluid-delegations-by-delegator-request",
            value: SuperfluidDelegationsByDelegatorRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return SuperfluidDelegationsByDelegatorRequest.decode(message.value);
    },
    toProto(message) {
        return SuperfluidDelegationsByDelegatorRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.SuperfluidDelegationsByDelegatorRequest",
            value: SuperfluidDelegationsByDelegatorRequest.encode(message).finish()
        };
    }
};
function createBaseSuperfluidDelegationsByDelegatorResponse() {
    return {
        superfluid_delegation_records: [],
        total_delegated_coins: [],
        total_equivalent_staked_amount: Coin.fromPartial({})
    };
}
export const SuperfluidDelegationsByDelegatorResponse = {
    typeUrl: "/osmosis.superfluid.SuperfluidDelegationsByDelegatorResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.superfluid_delegation_records) {
            SuperfluidDelegationRecord.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.total_delegated_coins) {
            Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.total_equivalent_staked_amount !== undefined) {
            Coin.encode(message.total_equivalent_staked_amount, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSuperfluidDelegationsByDelegatorResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.superfluid_delegation_records.push(SuperfluidDelegationRecord.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.total_delegated_coins.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.total_equivalent_staked_amount = Coin.decode(reader, reader.uint32());
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
            superfluid_delegation_records: Array.isArray(object?.superfluid_delegation_records) ? object.superfluid_delegation_records.map((e) => SuperfluidDelegationRecord.fromJSON(e)) : [],
            total_delegated_coins: Array.isArray(object?.total_delegated_coins) ? object.total_delegated_coins.map((e) => Coin.fromJSON(e)) : [],
            total_equivalent_staked_amount: isSet(object.total_equivalent_staked_amount) ? Coin.fromJSON(object.total_equivalent_staked_amount) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.superfluid_delegation_records) {
            obj.superfluid_delegation_records = message.superfluid_delegation_records.map(e => e ? SuperfluidDelegationRecord.toJSON(e) : undefined);
        }
        else {
            obj.superfluid_delegation_records = [];
        }
        if (message.total_delegated_coins) {
            obj.total_delegated_coins = message.total_delegated_coins.map(e => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.total_delegated_coins = [];
        }
        message.total_equivalent_staked_amount !== undefined && (obj.total_equivalent_staked_amount = message.total_equivalent_staked_amount ? Coin.toJSON(message.total_equivalent_staked_amount) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSuperfluidDelegationsByDelegatorResponse();
        message.superfluid_delegation_records = object.superfluid_delegation_records?.map(e => SuperfluidDelegationRecord.fromPartial(e)) || [];
        message.total_delegated_coins = object.total_delegated_coins?.map(e => Coin.fromPartial(e)) || [];
        message.total_equivalent_staked_amount = object.total_equivalent_staked_amount !== undefined && object.total_equivalent_staked_amount !== null ? Coin.fromPartial(object.total_equivalent_staked_amount) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            superfluid_delegation_records: Array.isArray(object?.superfluid_delegation_records) ? object.superfluid_delegation_records.map((e) => SuperfluidDelegationRecord.fromSDK(e)) : [],
            total_delegated_coins: Array.isArray(object?.total_delegated_coins) ? object.total_delegated_coins.map((e) => Coin.fromSDK(e)) : [],
            total_equivalent_staked_amount: object.total_equivalent_staked_amount ? Coin.fromSDK(object.total_equivalent_staked_amount) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.superfluid_delegation_records) {
            obj.superfluid_delegation_records = message.superfluid_delegation_records.map(e => e ? SuperfluidDelegationRecord.toSDK(e) : undefined);
        }
        else {
            obj.superfluid_delegation_records = [];
        }
        if (message.total_delegated_coins) {
            obj.total_delegated_coins = message.total_delegated_coins.map(e => e ? Coin.toSDK(e) : undefined);
        }
        else {
            obj.total_delegated_coins = [];
        }
        message.total_equivalent_staked_amount !== undefined && (obj.total_equivalent_staked_amount = message.total_equivalent_staked_amount ? Coin.toSDK(message.total_equivalent_staked_amount) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            superfluid_delegation_records: Array.isArray(object?.superfluid_delegation_records) ? object.superfluid_delegation_records.map((e) => SuperfluidDelegationRecord.fromAmino(e)) : [],
            total_delegated_coins: Array.isArray(object?.total_delegated_coins) ? object.total_delegated_coins.map((e) => Coin.fromAmino(e)) : [],
            total_equivalent_staked_amount: object?.total_equivalent_staked_amount ? Coin.fromAmino(object.total_equivalent_staked_amount) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.superfluid_delegation_records) {
            obj.superfluid_delegation_records = message.superfluid_delegation_records.map(e => e ? SuperfluidDelegationRecord.toAmino(e) : undefined);
        }
        else {
            obj.superfluid_delegation_records = [];
        }
        if (message.total_delegated_coins) {
            obj.total_delegated_coins = message.total_delegated_coins.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.total_delegated_coins = [];
        }
        obj.total_equivalent_staked_amount = message.total_equivalent_staked_amount ? Coin.toAmino(message.total_equivalent_staked_amount) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return SuperfluidDelegationsByDelegatorResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/superfluid-delegations-by-delegator-response",
            value: SuperfluidDelegationsByDelegatorResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return SuperfluidDelegationsByDelegatorResponse.decode(message.value);
    },
    toProto(message) {
        return SuperfluidDelegationsByDelegatorResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.SuperfluidDelegationsByDelegatorResponse",
            value: SuperfluidDelegationsByDelegatorResponse.encode(message).finish()
        };
    }
};
function createBaseSuperfluidUndelegationsByDelegatorRequest() {
    return {
        delegator_address: "",
        denom: ""
    };
}
export const SuperfluidUndelegationsByDelegatorRequest = {
    typeUrl: "/osmosis.superfluid.SuperfluidUndelegationsByDelegatorRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.delegator_address !== "") {
            writer.uint32(10).string(message.delegator_address);
        }
        if (message.denom !== "") {
            writer.uint32(18).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSuperfluidUndelegationsByDelegatorRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegator_address = reader.string();
                    break;
                case 2:
                    message.denom = reader.string();
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
            denom: isSet(object.denom) ? String(object.denom) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegator_address !== undefined && (obj.delegator_address = message.delegator_address);
        message.denom !== undefined && (obj.denom = message.denom);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSuperfluidUndelegationsByDelegatorRequest();
        message.delegator_address = object.delegator_address ?? "";
        message.denom = object.denom ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            delegator_address: object?.delegator_address,
            denom: object?.denom
        };
    },
    toSDK(message) {
        const obj = {};
        obj.delegator_address = message.delegator_address;
        obj.denom = message.denom;
        return obj;
    },
    fromAmino(object) {
        return {
            delegator_address: object.delegator_address,
            denom: object.denom
        };
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_address = message.delegator_address;
        obj.denom = message.denom;
        return obj;
    },
    fromAminoMsg(object) {
        return SuperfluidUndelegationsByDelegatorRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/superfluid-undelegations-by-delegator-request",
            value: SuperfluidUndelegationsByDelegatorRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return SuperfluidUndelegationsByDelegatorRequest.decode(message.value);
    },
    toProto(message) {
        return SuperfluidUndelegationsByDelegatorRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.SuperfluidUndelegationsByDelegatorRequest",
            value: SuperfluidUndelegationsByDelegatorRequest.encode(message).finish()
        };
    }
};
function createBaseSuperfluidUndelegationsByDelegatorResponse() {
    return {
        superfluid_delegation_records: [],
        total_undelegated_coins: [],
        synthetic_locks: []
    };
}
export const SuperfluidUndelegationsByDelegatorResponse = {
    typeUrl: "/osmosis.superfluid.SuperfluidUndelegationsByDelegatorResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.superfluid_delegation_records) {
            SuperfluidDelegationRecord.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.total_undelegated_coins) {
            Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.synthetic_locks) {
            SyntheticLock.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSuperfluidUndelegationsByDelegatorResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.superfluid_delegation_records.push(SuperfluidDelegationRecord.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.total_undelegated_coins.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.synthetic_locks.push(SyntheticLock.decode(reader, reader.uint32()));
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
            superfluid_delegation_records: Array.isArray(object?.superfluid_delegation_records) ? object.superfluid_delegation_records.map((e) => SuperfluidDelegationRecord.fromJSON(e)) : [],
            total_undelegated_coins: Array.isArray(object?.total_undelegated_coins) ? object.total_undelegated_coins.map((e) => Coin.fromJSON(e)) : [],
            synthetic_locks: Array.isArray(object?.synthetic_locks) ? object.synthetic_locks.map((e) => SyntheticLock.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.superfluid_delegation_records) {
            obj.superfluid_delegation_records = message.superfluid_delegation_records.map(e => e ? SuperfluidDelegationRecord.toJSON(e) : undefined);
        }
        else {
            obj.superfluid_delegation_records = [];
        }
        if (message.total_undelegated_coins) {
            obj.total_undelegated_coins = message.total_undelegated_coins.map(e => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.total_undelegated_coins = [];
        }
        if (message.synthetic_locks) {
            obj.synthetic_locks = message.synthetic_locks.map(e => e ? SyntheticLock.toJSON(e) : undefined);
        }
        else {
            obj.synthetic_locks = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSuperfluidUndelegationsByDelegatorResponse();
        message.superfluid_delegation_records = object.superfluid_delegation_records?.map(e => SuperfluidDelegationRecord.fromPartial(e)) || [];
        message.total_undelegated_coins = object.total_undelegated_coins?.map(e => Coin.fromPartial(e)) || [];
        message.synthetic_locks = object.synthetic_locks?.map(e => SyntheticLock.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            superfluid_delegation_records: Array.isArray(object?.superfluid_delegation_records) ? object.superfluid_delegation_records.map((e) => SuperfluidDelegationRecord.fromSDK(e)) : [],
            total_undelegated_coins: Array.isArray(object?.total_undelegated_coins) ? object.total_undelegated_coins.map((e) => Coin.fromSDK(e)) : [],
            synthetic_locks: Array.isArray(object?.synthetic_locks) ? object.synthetic_locks.map((e) => SyntheticLock.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.superfluid_delegation_records) {
            obj.superfluid_delegation_records = message.superfluid_delegation_records.map(e => e ? SuperfluidDelegationRecord.toSDK(e) : undefined);
        }
        else {
            obj.superfluid_delegation_records = [];
        }
        if (message.total_undelegated_coins) {
            obj.total_undelegated_coins = message.total_undelegated_coins.map(e => e ? Coin.toSDK(e) : undefined);
        }
        else {
            obj.total_undelegated_coins = [];
        }
        if (message.synthetic_locks) {
            obj.synthetic_locks = message.synthetic_locks.map(e => e ? SyntheticLock.toSDK(e) : undefined);
        }
        else {
            obj.synthetic_locks = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            superfluid_delegation_records: Array.isArray(object?.superfluid_delegation_records) ? object.superfluid_delegation_records.map((e) => SuperfluidDelegationRecord.fromAmino(e)) : [],
            total_undelegated_coins: Array.isArray(object?.total_undelegated_coins) ? object.total_undelegated_coins.map((e) => Coin.fromAmino(e)) : [],
            synthetic_locks: Array.isArray(object?.synthetic_locks) ? object.synthetic_locks.map((e) => SyntheticLock.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.superfluid_delegation_records) {
            obj.superfluid_delegation_records = message.superfluid_delegation_records.map(e => e ? SuperfluidDelegationRecord.toAmino(e) : undefined);
        }
        else {
            obj.superfluid_delegation_records = [];
        }
        if (message.total_undelegated_coins) {
            obj.total_undelegated_coins = message.total_undelegated_coins.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.total_undelegated_coins = [];
        }
        if (message.synthetic_locks) {
            obj.synthetic_locks = message.synthetic_locks.map(e => e ? SyntheticLock.toAmino(e) : undefined);
        }
        else {
            obj.synthetic_locks = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return SuperfluidUndelegationsByDelegatorResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/superfluid-undelegations-by-delegator-response",
            value: SuperfluidUndelegationsByDelegatorResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return SuperfluidUndelegationsByDelegatorResponse.decode(message.value);
    },
    toProto(message) {
        return SuperfluidUndelegationsByDelegatorResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.SuperfluidUndelegationsByDelegatorResponse",
            value: SuperfluidUndelegationsByDelegatorResponse.encode(message).finish()
        };
    }
};
function createBaseSuperfluidDelegationsByValidatorDenomRequest() {
    return {
        validator_address: "",
        denom: ""
    };
}
export const SuperfluidDelegationsByValidatorDenomRequest = {
    typeUrl: "/osmosis.superfluid.SuperfluidDelegationsByValidatorDenomRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.validator_address !== "") {
            writer.uint32(10).string(message.validator_address);
        }
        if (message.denom !== "") {
            writer.uint32(18).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSuperfluidDelegationsByValidatorDenomRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator_address = reader.string();
                    break;
                case 2:
                    message.denom = reader.string();
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
            validator_address: isSet(object.validator_address) ? String(object.validator_address) : "",
            denom: isSet(object.denom) ? String(object.denom) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.validator_address !== undefined && (obj.validator_address = message.validator_address);
        message.denom !== undefined && (obj.denom = message.denom);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSuperfluidDelegationsByValidatorDenomRequest();
        message.validator_address = object.validator_address ?? "";
        message.denom = object.denom ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            validator_address: object?.validator_address,
            denom: object?.denom
        };
    },
    toSDK(message) {
        const obj = {};
        obj.validator_address = message.validator_address;
        obj.denom = message.denom;
        return obj;
    },
    fromAmino(object) {
        return {
            validator_address: object.validator_address,
            denom: object.denom
        };
    },
    toAmino(message) {
        const obj = {};
        obj.validator_address = message.validator_address;
        obj.denom = message.denom;
        return obj;
    },
    fromAminoMsg(object) {
        return SuperfluidDelegationsByValidatorDenomRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/superfluid-delegations-by-validator-denom-request",
            value: SuperfluidDelegationsByValidatorDenomRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return SuperfluidDelegationsByValidatorDenomRequest.decode(message.value);
    },
    toProto(message) {
        return SuperfluidDelegationsByValidatorDenomRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.SuperfluidDelegationsByValidatorDenomRequest",
            value: SuperfluidDelegationsByValidatorDenomRequest.encode(message).finish()
        };
    }
};
function createBaseSuperfluidDelegationsByValidatorDenomResponse() {
    return {
        superfluid_delegation_records: []
    };
}
export const SuperfluidDelegationsByValidatorDenomResponse = {
    typeUrl: "/osmosis.superfluid.SuperfluidDelegationsByValidatorDenomResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.superfluid_delegation_records) {
            SuperfluidDelegationRecord.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSuperfluidDelegationsByValidatorDenomResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.superfluid_delegation_records.push(SuperfluidDelegationRecord.decode(reader, reader.uint32()));
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
            superfluid_delegation_records: Array.isArray(object?.superfluid_delegation_records) ? object.superfluid_delegation_records.map((e) => SuperfluidDelegationRecord.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.superfluid_delegation_records) {
            obj.superfluid_delegation_records = message.superfluid_delegation_records.map(e => e ? SuperfluidDelegationRecord.toJSON(e) : undefined);
        }
        else {
            obj.superfluid_delegation_records = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSuperfluidDelegationsByValidatorDenomResponse();
        message.superfluid_delegation_records = object.superfluid_delegation_records?.map(e => SuperfluidDelegationRecord.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            superfluid_delegation_records: Array.isArray(object?.superfluid_delegation_records) ? object.superfluid_delegation_records.map((e) => SuperfluidDelegationRecord.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.superfluid_delegation_records) {
            obj.superfluid_delegation_records = message.superfluid_delegation_records.map(e => e ? SuperfluidDelegationRecord.toSDK(e) : undefined);
        }
        else {
            obj.superfluid_delegation_records = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            superfluid_delegation_records: Array.isArray(object?.superfluid_delegation_records) ? object.superfluid_delegation_records.map((e) => SuperfluidDelegationRecord.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.superfluid_delegation_records) {
            obj.superfluid_delegation_records = message.superfluid_delegation_records.map(e => e ? SuperfluidDelegationRecord.toAmino(e) : undefined);
        }
        else {
            obj.superfluid_delegation_records = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return SuperfluidDelegationsByValidatorDenomResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/superfluid-delegations-by-validator-denom-response",
            value: SuperfluidDelegationsByValidatorDenomResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return SuperfluidDelegationsByValidatorDenomResponse.decode(message.value);
    },
    toProto(message) {
        return SuperfluidDelegationsByValidatorDenomResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.SuperfluidDelegationsByValidatorDenomResponse",
            value: SuperfluidDelegationsByValidatorDenomResponse.encode(message).finish()
        };
    }
};
function createBaseEstimateSuperfluidDelegatedAmountByValidatorDenomRequest() {
    return {
        validator_address: "",
        denom: ""
    };
}
export const EstimateSuperfluidDelegatedAmountByValidatorDenomRequest = {
    typeUrl: "/osmosis.superfluid.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.validator_address !== "") {
            writer.uint32(10).string(message.validator_address);
        }
        if (message.denom !== "") {
            writer.uint32(18).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEstimateSuperfluidDelegatedAmountByValidatorDenomRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator_address = reader.string();
                    break;
                case 2:
                    message.denom = reader.string();
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
            validator_address: isSet(object.validator_address) ? String(object.validator_address) : "",
            denom: isSet(object.denom) ? String(object.denom) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.validator_address !== undefined && (obj.validator_address = message.validator_address);
        message.denom !== undefined && (obj.denom = message.denom);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEstimateSuperfluidDelegatedAmountByValidatorDenomRequest();
        message.validator_address = object.validator_address ?? "";
        message.denom = object.denom ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            validator_address: object?.validator_address,
            denom: object?.denom
        };
    },
    toSDK(message) {
        const obj = {};
        obj.validator_address = message.validator_address;
        obj.denom = message.denom;
        return obj;
    },
    fromAmino(object) {
        return {
            validator_address: object.validator_address,
            denom: object.denom
        };
    },
    toAmino(message) {
        const obj = {};
        obj.validator_address = message.validator_address;
        obj.denom = message.denom;
        return obj;
    },
    fromAminoMsg(object) {
        return EstimateSuperfluidDelegatedAmountByValidatorDenomRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/estimate-superfluid-delegated-amount-by-validator-denom-request",
            value: EstimateSuperfluidDelegatedAmountByValidatorDenomRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return EstimateSuperfluidDelegatedAmountByValidatorDenomRequest.decode(message.value);
    },
    toProto(message) {
        return EstimateSuperfluidDelegatedAmountByValidatorDenomRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest",
            value: EstimateSuperfluidDelegatedAmountByValidatorDenomRequest.encode(message).finish()
        };
    }
};
function createBaseEstimateSuperfluidDelegatedAmountByValidatorDenomResponse() {
    return {
        total_delegated_coins: []
    };
}
export const EstimateSuperfluidDelegatedAmountByValidatorDenomResponse = {
    typeUrl: "/osmosis.superfluid.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.total_delegated_coins) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEstimateSuperfluidDelegatedAmountByValidatorDenomResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.total_delegated_coins.push(Coin.decode(reader, reader.uint32()));
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
            total_delegated_coins: Array.isArray(object?.total_delegated_coins) ? object.total_delegated_coins.map((e) => Coin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.total_delegated_coins) {
            obj.total_delegated_coins = message.total_delegated_coins.map(e => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.total_delegated_coins = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEstimateSuperfluidDelegatedAmountByValidatorDenomResponse();
        message.total_delegated_coins = object.total_delegated_coins?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            total_delegated_coins: Array.isArray(object?.total_delegated_coins) ? object.total_delegated_coins.map((e) => Coin.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.total_delegated_coins) {
            obj.total_delegated_coins = message.total_delegated_coins.map(e => e ? Coin.toSDK(e) : undefined);
        }
        else {
            obj.total_delegated_coins = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            total_delegated_coins: Array.isArray(object?.total_delegated_coins) ? object.total_delegated_coins.map((e) => Coin.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.total_delegated_coins) {
            obj.total_delegated_coins = message.total_delegated_coins.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.total_delegated_coins = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return EstimateSuperfluidDelegatedAmountByValidatorDenomResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/estimate-superfluid-delegated-amount-by-validator-denom-response",
            value: EstimateSuperfluidDelegatedAmountByValidatorDenomResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return EstimateSuperfluidDelegatedAmountByValidatorDenomResponse.decode(message.value);
    },
    toProto(message) {
        return EstimateSuperfluidDelegatedAmountByValidatorDenomResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse",
            value: EstimateSuperfluidDelegatedAmountByValidatorDenomResponse.encode(message).finish()
        };
    }
};
function createBaseQueryTotalDelegationByDelegatorRequest() {
    return {
        delegator_address: ""
    };
}
export const QueryTotalDelegationByDelegatorRequest = {
    typeUrl: "/osmosis.superfluid.QueryTotalDelegationByDelegatorRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.delegator_address !== "") {
            writer.uint32(10).string(message.delegator_address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTotalDelegationByDelegatorRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegator_address = reader.string();
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
            delegator_address: isSet(object.delegator_address) ? String(object.delegator_address) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegator_address !== undefined && (obj.delegator_address = message.delegator_address);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryTotalDelegationByDelegatorRequest();
        message.delegator_address = object.delegator_address ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            delegator_address: object?.delegator_address
        };
    },
    toSDK(message) {
        const obj = {};
        obj.delegator_address = message.delegator_address;
        return obj;
    },
    fromAmino(object) {
        return {
            delegator_address: object.delegator_address
        };
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_address = message.delegator_address;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryTotalDelegationByDelegatorRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/query-total-delegation-by-delegator-request",
            value: QueryTotalDelegationByDelegatorRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryTotalDelegationByDelegatorRequest.decode(message.value);
    },
    toProto(message) {
        return QueryTotalDelegationByDelegatorRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.QueryTotalDelegationByDelegatorRequest",
            value: QueryTotalDelegationByDelegatorRequest.encode(message).finish()
        };
    }
};
function createBaseQueryTotalDelegationByDelegatorResponse() {
    return {
        superfluid_delegation_records: [],
        delegation_response: [],
        total_delegated_coins: [],
        total_equivalent_staked_amount: Coin.fromPartial({})
    };
}
export const QueryTotalDelegationByDelegatorResponse = {
    typeUrl: "/osmosis.superfluid.QueryTotalDelegationByDelegatorResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.superfluid_delegation_records) {
            SuperfluidDelegationRecord.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.delegation_response) {
            DelegationResponse.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.total_delegated_coins) {
            Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.total_equivalent_staked_amount !== undefined) {
            Coin.encode(message.total_equivalent_staked_amount, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTotalDelegationByDelegatorResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.superfluid_delegation_records.push(SuperfluidDelegationRecord.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.delegation_response.push(DelegationResponse.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.total_delegated_coins.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.total_equivalent_staked_amount = Coin.decode(reader, reader.uint32());
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
            superfluid_delegation_records: Array.isArray(object?.superfluid_delegation_records) ? object.superfluid_delegation_records.map((e) => SuperfluidDelegationRecord.fromJSON(e)) : [],
            delegation_response: Array.isArray(object?.delegation_response) ? object.delegation_response.map((e) => DelegationResponse.fromJSON(e)) : [],
            total_delegated_coins: Array.isArray(object?.total_delegated_coins) ? object.total_delegated_coins.map((e) => Coin.fromJSON(e)) : [],
            total_equivalent_staked_amount: isSet(object.total_equivalent_staked_amount) ? Coin.fromJSON(object.total_equivalent_staked_amount) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.superfluid_delegation_records) {
            obj.superfluid_delegation_records = message.superfluid_delegation_records.map(e => e ? SuperfluidDelegationRecord.toJSON(e) : undefined);
        }
        else {
            obj.superfluid_delegation_records = [];
        }
        if (message.delegation_response) {
            obj.delegation_response = message.delegation_response.map(e => e ? DelegationResponse.toJSON(e) : undefined);
        }
        else {
            obj.delegation_response = [];
        }
        if (message.total_delegated_coins) {
            obj.total_delegated_coins = message.total_delegated_coins.map(e => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.total_delegated_coins = [];
        }
        message.total_equivalent_staked_amount !== undefined && (obj.total_equivalent_staked_amount = message.total_equivalent_staked_amount ? Coin.toJSON(message.total_equivalent_staked_amount) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryTotalDelegationByDelegatorResponse();
        message.superfluid_delegation_records = object.superfluid_delegation_records?.map(e => SuperfluidDelegationRecord.fromPartial(e)) || [];
        message.delegation_response = object.delegation_response?.map(e => DelegationResponse.fromPartial(e)) || [];
        message.total_delegated_coins = object.total_delegated_coins?.map(e => Coin.fromPartial(e)) || [];
        message.total_equivalent_staked_amount = object.total_equivalent_staked_amount !== undefined && object.total_equivalent_staked_amount !== null ? Coin.fromPartial(object.total_equivalent_staked_amount) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            superfluid_delegation_records: Array.isArray(object?.superfluid_delegation_records) ? object.superfluid_delegation_records.map((e) => SuperfluidDelegationRecord.fromSDK(e)) : [],
            delegation_response: Array.isArray(object?.delegation_response) ? object.delegation_response.map((e) => DelegationResponse.fromSDK(e)) : [],
            total_delegated_coins: Array.isArray(object?.total_delegated_coins) ? object.total_delegated_coins.map((e) => Coin.fromSDK(e)) : [],
            total_equivalent_staked_amount: object.total_equivalent_staked_amount ? Coin.fromSDK(object.total_equivalent_staked_amount) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.superfluid_delegation_records) {
            obj.superfluid_delegation_records = message.superfluid_delegation_records.map(e => e ? SuperfluidDelegationRecord.toSDK(e) : undefined);
        }
        else {
            obj.superfluid_delegation_records = [];
        }
        if (message.delegation_response) {
            obj.delegation_response = message.delegation_response.map(e => e ? DelegationResponse.toSDK(e) : undefined);
        }
        else {
            obj.delegation_response = [];
        }
        if (message.total_delegated_coins) {
            obj.total_delegated_coins = message.total_delegated_coins.map(e => e ? Coin.toSDK(e) : undefined);
        }
        else {
            obj.total_delegated_coins = [];
        }
        message.total_equivalent_staked_amount !== undefined && (obj.total_equivalent_staked_amount = message.total_equivalent_staked_amount ? Coin.toSDK(message.total_equivalent_staked_amount) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            superfluid_delegation_records: Array.isArray(object?.superfluid_delegation_records) ? object.superfluid_delegation_records.map((e) => SuperfluidDelegationRecord.fromAmino(e)) : [],
            delegation_response: Array.isArray(object?.delegation_response) ? object.delegation_response.map((e) => DelegationResponse.fromAmino(e)) : [],
            total_delegated_coins: Array.isArray(object?.total_delegated_coins) ? object.total_delegated_coins.map((e) => Coin.fromAmino(e)) : [],
            total_equivalent_staked_amount: object?.total_equivalent_staked_amount ? Coin.fromAmino(object.total_equivalent_staked_amount) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.superfluid_delegation_records) {
            obj.superfluid_delegation_records = message.superfluid_delegation_records.map(e => e ? SuperfluidDelegationRecord.toAmino(e) : undefined);
        }
        else {
            obj.superfluid_delegation_records = [];
        }
        if (message.delegation_response) {
            obj.delegation_response = message.delegation_response.map(e => e ? DelegationResponse.toAmino(e) : undefined);
        }
        else {
            obj.delegation_response = [];
        }
        if (message.total_delegated_coins) {
            obj.total_delegated_coins = message.total_delegated_coins.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.total_delegated_coins = [];
        }
        obj.total_equivalent_staked_amount = message.total_equivalent_staked_amount ? Coin.toAmino(message.total_equivalent_staked_amount) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryTotalDelegationByDelegatorResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/query-total-delegation-by-delegator-response",
            value: QueryTotalDelegationByDelegatorResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryTotalDelegationByDelegatorResponse.decode(message.value);
    },
    toProto(message) {
        return QueryTotalDelegationByDelegatorResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.QueryTotalDelegationByDelegatorResponse",
            value: QueryTotalDelegationByDelegatorResponse.encode(message).finish()
        };
    }
};
function createBaseQueryUnpoolWhitelistRequest() {
    return {};
}
export const QueryUnpoolWhitelistRequest = {
    typeUrl: "/osmosis.superfluid.QueryUnpoolWhitelistRequest",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryUnpoolWhitelistRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseQueryUnpoolWhitelistRequest();
        return message;
    },
    fromSDK(_) {
        return {};
    },
    toSDK(_) {
        const obj = {};
        return obj;
    },
    fromAmino(_) {
        return {};
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryUnpoolWhitelistRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/query-unpool-whitelist-request",
            value: QueryUnpoolWhitelistRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryUnpoolWhitelistRequest.decode(message.value);
    },
    toProto(message) {
        return QueryUnpoolWhitelistRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.QueryUnpoolWhitelistRequest",
            value: QueryUnpoolWhitelistRequest.encode(message).finish()
        };
    }
};
function createBaseQueryUnpoolWhitelistResponse() {
    return {
        pool_ids: []
    };
}
export const QueryUnpoolWhitelistResponse = {
    typeUrl: "/osmosis.superfluid.QueryUnpoolWhitelistResponse",
    encode(message, writer = BinaryWriter.create()) {
        writer.uint32(10).fork();
        for (const v of message.pool_ids) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryUnpoolWhitelistResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.pool_ids.push(reader.uint64());
                        }
                    }
                    else {
                        message.pool_ids.push(reader.uint64());
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
            pool_ids: Array.isArray(object?.pool_ids) ? object.pool_ids.map((e) => BigInt(e.toString())) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.pool_ids) {
            obj.pool_ids = message.pool_ids.map(e => (e || BigInt(0)).toString());
        }
        else {
            obj.pool_ids = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryUnpoolWhitelistResponse();
        message.pool_ids = object.pool_ids?.map(e => BigInt(e.toString())) || [];
        return message;
    },
    fromSDK(object) {
        return {
            pool_ids: Array.isArray(object?.pool_ids) ? object.pool_ids.map((e) => e) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.pool_ids) {
            obj.pool_ids = message.pool_ids.map(e => e);
        }
        else {
            obj.pool_ids = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            pool_ids: Array.isArray(object?.pool_ids) ? object.pool_ids.map((e) => BigInt(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.pool_ids) {
            obj.pool_ids = message.pool_ids.map(e => e.toString());
        }
        else {
            obj.pool_ids = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryUnpoolWhitelistResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/query-unpool-whitelist-response",
            value: QueryUnpoolWhitelistResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryUnpoolWhitelistResponse.decode(message.value);
    },
    toProto(message) {
        return QueryUnpoolWhitelistResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.QueryUnpoolWhitelistResponse",
            value: QueryUnpoolWhitelistResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=query.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryUnpoolWhitelistResponse = exports.QueryUnpoolWhitelistRequest = exports.QueryTotalDelegationByDelegatorResponse = exports.QueryTotalDelegationByDelegatorRequest = exports.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse = exports.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest = exports.SuperfluidDelegationsByValidatorDenomResponse = exports.SuperfluidDelegationsByValidatorDenomRequest = exports.SuperfluidUndelegationsByDelegatorResponse = exports.SuperfluidUndelegationsByDelegatorRequest = exports.SuperfluidDelegationsByDelegatorResponse = exports.SuperfluidDelegationsByDelegatorRequest = exports.SuperfluidDelegationAmountResponse = exports.SuperfluidDelegationAmountRequest = exports.TotalSuperfluidDelegationsResponse = exports.TotalSuperfluidDelegationsRequest = exports.Delegations = exports.QueryTotalDelegationByValidatorForDenomResponse = exports.QueryTotalDelegationByValidatorForDenomRequest = exports.ConnectedIntermediaryAccountResponse = exports.ConnectedIntermediaryAccountRequest = exports.AllIntermediaryAccountsResponse = exports.AllIntermediaryAccountsRequest = exports.SuperfluidIntermediaryAccountInfo = exports.AssetMultiplierResponse = exports.AssetMultiplierRequest = exports.AllAssetsResponse = exports.AllAssetsRequest = exports.AssetTypeResponse = exports.AssetTypeRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = void 0;
//@ts-nocheck
const pagination_1 = require("../../cosmos/base/query/v1beta1/pagination");
const params_1 = require("./params");
const superfluid_1 = require("./superfluid");
const coin_1 = require("../../cosmos/base/v1beta1/coin");
const lock_1 = require("../lockup/lock");
const staking_1 = require("../../cosmos/staking/v1beta1/staking");
const binary_1 = require("../../binary");
const helpers_1 = require("../../helpers");
function createBaseQueryParamsRequest() {
    return {};
}
exports.QueryParamsRequest = {
    typeUrl: "/osmosis.superfluid.QueryParamsRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.QueryParamsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/query-params-request",
            value: exports.QueryParamsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryParamsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.QueryParamsRequest",
            value: exports.QueryParamsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryParamsResponse() {
    return {
        params: params_1.Params.fromPartial({})
    };
}
exports.QueryParamsResponse = {
    typeUrl: "/osmosis.superfluid.QueryParamsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = params_1.Params.decode(reader, reader.uint32());
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
            params: (0, helpers_1.isSet)(object.params) ? params_1.Params.fromJSON(object.params) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? params_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        message.params = object.params !== undefined && object.params !== null ? params_1.Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            params: object.params ? params_1.Params.fromSDK(object.params) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? params_1.Params.toSDK(message.params) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            params: object?.params ? params_1.Params.fromAmino(object.params) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? params_1.Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryParamsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/query-params-response",
            value: exports.QueryParamsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryParamsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.QueryParamsResponse",
            value: exports.QueryParamsResponse.encode(message).finish()
        };
    }
};
function createBaseAssetTypeRequest() {
    return {
        denom: ""
    };
}
exports.AssetTypeRequest = {
    typeUrl: "/osmosis.superfluid.AssetTypeRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
            denom: (0, helpers_1.isSet)(object.denom) ? String(object.denom) : ""
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
        return exports.AssetTypeRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/asset-type-request",
            value: exports.AssetTypeRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.AssetTypeRequest.decode(message.value);
    },
    toProto(message) {
        return exports.AssetTypeRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.AssetTypeRequest",
            value: exports.AssetTypeRequest.encode(message).finish()
        };
    }
};
function createBaseAssetTypeResponse() {
    return {
        asset_type: 0
    };
}
exports.AssetTypeResponse = {
    typeUrl: "/osmosis.superfluid.AssetTypeResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.asset_type !== 0) {
            writer.uint32(8).int32(message.asset_type);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
            asset_type: (0, helpers_1.isSet)(object.asset_type) ? (0, superfluid_1.superfluidAssetTypeFromJSON)(object.asset_type) : -1
        };
    },
    toJSON(message) {
        const obj = {};
        message.asset_type !== undefined && (obj.asset_type = (0, superfluid_1.superfluidAssetTypeToJSON)(message.asset_type));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAssetTypeResponse();
        message.asset_type = object.asset_type ?? 0;
        return message;
    },
    fromSDK(object) {
        return {
            asset_type: (0, helpers_1.isSet)(object.asset_type) ? (0, superfluid_1.superfluidAssetTypeFromJSON)(object.asset_type) : -1
        };
    },
    toSDK(message) {
        const obj = {};
        message.asset_type !== undefined && (obj.asset_type = (0, superfluid_1.superfluidAssetTypeToJSON)(message.asset_type));
        return obj;
    },
    fromAmino(object) {
        return {
            asset_type: (0, helpers_1.isSet)(object.asset_type) ? (0, superfluid_1.superfluidAssetTypeFromJSON)(object.asset_type) : -1
        };
    },
    toAmino(message) {
        const obj = {};
        obj.asset_type = message.asset_type;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.AssetTypeResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/asset-type-response",
            value: exports.AssetTypeResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.AssetTypeResponse.decode(message.value);
    },
    toProto(message) {
        return exports.AssetTypeResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.AssetTypeResponse",
            value: exports.AssetTypeResponse.encode(message).finish()
        };
    }
};
function createBaseAllAssetsRequest() {
    return {};
}
exports.AllAssetsRequest = {
    typeUrl: "/osmosis.superfluid.AllAssetsRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.AllAssetsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/all-assets-request",
            value: exports.AllAssetsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.AllAssetsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.AllAssetsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.AllAssetsRequest",
            value: exports.AllAssetsRequest.encode(message).finish()
        };
    }
};
function createBaseAllAssetsResponse() {
    return {
        assets: []
    };
}
exports.AllAssetsResponse = {
    typeUrl: "/osmosis.superfluid.AllAssetsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.assets) {
            superfluid_1.SuperfluidAsset.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAllAssetsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.assets.push(superfluid_1.SuperfluidAsset.decode(reader, reader.uint32()));
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
            assets: Array.isArray(object?.assets) ? object.assets.map((e) => superfluid_1.SuperfluidAsset.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.assets) {
            obj.assets = message.assets.map(e => e ? superfluid_1.SuperfluidAsset.toJSON(e) : undefined);
        }
        else {
            obj.assets = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAllAssetsResponse();
        message.assets = object.assets?.map(e => superfluid_1.SuperfluidAsset.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            assets: Array.isArray(object?.assets) ? object.assets.map((e) => superfluid_1.SuperfluidAsset.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.assets) {
            obj.assets = message.assets.map(e => e ? superfluid_1.SuperfluidAsset.toSDK(e) : undefined);
        }
        else {
            obj.assets = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            assets: Array.isArray(object?.assets) ? object.assets.map((e) => superfluid_1.SuperfluidAsset.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.assets) {
            obj.assets = message.assets.map(e => e ? superfluid_1.SuperfluidAsset.toAmino(e) : undefined);
        }
        else {
            obj.assets = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.AllAssetsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/all-assets-response",
            value: exports.AllAssetsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.AllAssetsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.AllAssetsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.AllAssetsResponse",
            value: exports.AllAssetsResponse.encode(message).finish()
        };
    }
};
function createBaseAssetMultiplierRequest() {
    return {
        denom: ""
    };
}
exports.AssetMultiplierRequest = {
    typeUrl: "/osmosis.superfluid.AssetMultiplierRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
            denom: (0, helpers_1.isSet)(object.denom) ? String(object.denom) : ""
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
        return exports.AssetMultiplierRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/asset-multiplier-request",
            value: exports.AssetMultiplierRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.AssetMultiplierRequest.decode(message.value);
    },
    toProto(message) {
        return exports.AssetMultiplierRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.AssetMultiplierRequest",
            value: exports.AssetMultiplierRequest.encode(message).finish()
        };
    }
};
function createBaseAssetMultiplierResponse() {
    return {
        osmo_equivalent_multiplier: undefined
    };
}
exports.AssetMultiplierResponse = {
    typeUrl: "/osmosis.superfluid.AssetMultiplierResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.osmo_equivalent_multiplier !== undefined) {
            superfluid_1.OsmoEquivalentMultiplierRecord.encode(message.osmo_equivalent_multiplier, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAssetMultiplierResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.osmo_equivalent_multiplier = superfluid_1.OsmoEquivalentMultiplierRecord.decode(reader, reader.uint32());
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
            osmo_equivalent_multiplier: (0, helpers_1.isSet)(object.osmo_equivalent_multiplier) ? superfluid_1.OsmoEquivalentMultiplierRecord.fromJSON(object.osmo_equivalent_multiplier) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.osmo_equivalent_multiplier !== undefined && (obj.osmo_equivalent_multiplier = message.osmo_equivalent_multiplier ? superfluid_1.OsmoEquivalentMultiplierRecord.toJSON(message.osmo_equivalent_multiplier) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAssetMultiplierResponse();
        message.osmo_equivalent_multiplier = object.osmo_equivalent_multiplier !== undefined && object.osmo_equivalent_multiplier !== null ? superfluid_1.OsmoEquivalentMultiplierRecord.fromPartial(object.osmo_equivalent_multiplier) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            osmo_equivalent_multiplier: object.osmo_equivalent_multiplier ? superfluid_1.OsmoEquivalentMultiplierRecord.fromSDK(object.osmo_equivalent_multiplier) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.osmo_equivalent_multiplier !== undefined && (obj.osmo_equivalent_multiplier = message.osmo_equivalent_multiplier ? superfluid_1.OsmoEquivalentMultiplierRecord.toSDK(message.osmo_equivalent_multiplier) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            osmo_equivalent_multiplier: object?.osmo_equivalent_multiplier ? superfluid_1.OsmoEquivalentMultiplierRecord.fromAmino(object.osmo_equivalent_multiplier) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.osmo_equivalent_multiplier = message.osmo_equivalent_multiplier ? superfluid_1.OsmoEquivalentMultiplierRecord.toAmino(message.osmo_equivalent_multiplier) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.AssetMultiplierResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/asset-multiplier-response",
            value: exports.AssetMultiplierResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.AssetMultiplierResponse.decode(message.value);
    },
    toProto(message) {
        return exports.AssetMultiplierResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.AssetMultiplierResponse",
            value: exports.AssetMultiplierResponse.encode(message).finish()
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
exports.SuperfluidIntermediaryAccountInfo = {
    typeUrl: "/osmosis.superfluid.SuperfluidIntermediaryAccountInfo",
    encode(message, writer = binary_1.BinaryWriter.create()) {
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
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
            denom: (0, helpers_1.isSet)(object.denom) ? String(object.denom) : "",
            val_addr: (0, helpers_1.isSet)(object.val_addr) ? String(object.val_addr) : "",
            gauge_id: (0, helpers_1.isSet)(object.gauge_id) ? BigInt(object.gauge_id.toString()) : BigInt(0),
            address: (0, helpers_1.isSet)(object.address) ? String(object.address) : ""
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
        return exports.SuperfluidIntermediaryAccountInfo.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/superfluid-intermediary-account-info",
            value: exports.SuperfluidIntermediaryAccountInfo.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.SuperfluidIntermediaryAccountInfo.decode(message.value);
    },
    toProto(message) {
        return exports.SuperfluidIntermediaryAccountInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.SuperfluidIntermediaryAccountInfo",
            value: exports.SuperfluidIntermediaryAccountInfo.encode(message).finish()
        };
    }
};
function createBaseAllIntermediaryAccountsRequest() {
    return {
        pagination: undefined
    };
}
exports.AllIntermediaryAccountsRequest = {
    typeUrl: "/osmosis.superfluid.AllIntermediaryAccountsRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAllIntermediaryAccountsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAllIntermediaryAccountsRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            pagination: object.pagination ? pagination_1.PageRequest.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            pagination: object?.pagination ? pagination_1.PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.AllIntermediaryAccountsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/all-intermediary-accounts-request",
            value: exports.AllIntermediaryAccountsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.AllIntermediaryAccountsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.AllIntermediaryAccountsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.AllIntermediaryAccountsRequest",
            value: exports.AllIntermediaryAccountsRequest.encode(message).finish()
        };
    }
};
function createBaseAllIntermediaryAccountsResponse() {
    return {
        accounts: [],
        pagination: undefined
    };
}
exports.AllIntermediaryAccountsResponse = {
    typeUrl: "/osmosis.superfluid.AllIntermediaryAccountsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.accounts) {
            exports.SuperfluidIntermediaryAccountInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAllIntermediaryAccountsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accounts.push(exports.SuperfluidIntermediaryAccountInfo.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
            accounts: Array.isArray(object?.accounts) ? object.accounts.map((e) => exports.SuperfluidIntermediaryAccountInfo.fromJSON(e)) : [],
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.accounts) {
            obj.accounts = message.accounts.map(e => e ? exports.SuperfluidIntermediaryAccountInfo.toJSON(e) : undefined);
        }
        else {
            obj.accounts = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAllIntermediaryAccountsResponse();
        message.accounts = object.accounts?.map(e => exports.SuperfluidIntermediaryAccountInfo.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            accounts: Array.isArray(object?.accounts) ? object.accounts.map((e) => exports.SuperfluidIntermediaryAccountInfo.fromSDK(e)) : [],
            pagination: object.pagination ? pagination_1.PageResponse.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.accounts) {
            obj.accounts = message.accounts.map(e => e ? exports.SuperfluidIntermediaryAccountInfo.toSDK(e) : undefined);
        }
        else {
            obj.accounts = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            accounts: Array.isArray(object?.accounts) ? object.accounts.map((e) => exports.SuperfluidIntermediaryAccountInfo.fromAmino(e)) : [],
            pagination: object?.pagination ? pagination_1.PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.accounts) {
            obj.accounts = message.accounts.map(e => e ? exports.SuperfluidIntermediaryAccountInfo.toAmino(e) : undefined);
        }
        else {
            obj.accounts = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.AllIntermediaryAccountsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/all-intermediary-accounts-response",
            value: exports.AllIntermediaryAccountsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.AllIntermediaryAccountsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.AllIntermediaryAccountsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.AllIntermediaryAccountsResponse",
            value: exports.AllIntermediaryAccountsResponse.encode(message).finish()
        };
    }
};
function createBaseConnectedIntermediaryAccountRequest() {
    return {
        lock_id: BigInt(0)
    };
}
exports.ConnectedIntermediaryAccountRequest = {
    typeUrl: "/osmosis.superfluid.ConnectedIntermediaryAccountRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.lock_id !== BigInt(0)) {
            writer.uint32(8).uint64(message.lock_id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
            lock_id: (0, helpers_1.isSet)(object.lock_id) ? BigInt(object.lock_id.toString()) : BigInt(0)
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
        return exports.ConnectedIntermediaryAccountRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/connected-intermediary-account-request",
            value: exports.ConnectedIntermediaryAccountRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ConnectedIntermediaryAccountRequest.decode(message.value);
    },
    toProto(message) {
        return exports.ConnectedIntermediaryAccountRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.ConnectedIntermediaryAccountRequest",
            value: exports.ConnectedIntermediaryAccountRequest.encode(message).finish()
        };
    }
};
function createBaseConnectedIntermediaryAccountResponse() {
    return {
        account: undefined
    };
}
exports.ConnectedIntermediaryAccountResponse = {
    typeUrl: "/osmosis.superfluid.ConnectedIntermediaryAccountResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.account !== undefined) {
            exports.SuperfluidIntermediaryAccountInfo.encode(message.account, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConnectedIntermediaryAccountResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.account = exports.SuperfluidIntermediaryAccountInfo.decode(reader, reader.uint32());
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
            account: (0, helpers_1.isSet)(object.account) ? exports.SuperfluidIntermediaryAccountInfo.fromJSON(object.account) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.account !== undefined && (obj.account = message.account ? exports.SuperfluidIntermediaryAccountInfo.toJSON(message.account) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseConnectedIntermediaryAccountResponse();
        message.account = object.account !== undefined && object.account !== null ? exports.SuperfluidIntermediaryAccountInfo.fromPartial(object.account) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            account: object.account ? exports.SuperfluidIntermediaryAccountInfo.fromSDK(object.account) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.account !== undefined && (obj.account = message.account ? exports.SuperfluidIntermediaryAccountInfo.toSDK(message.account) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            account: object?.account ? exports.SuperfluidIntermediaryAccountInfo.fromAmino(object.account) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.account = message.account ? exports.SuperfluidIntermediaryAccountInfo.toAmino(message.account) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ConnectedIntermediaryAccountResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/connected-intermediary-account-response",
            value: exports.ConnectedIntermediaryAccountResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ConnectedIntermediaryAccountResponse.decode(message.value);
    },
    toProto(message) {
        return exports.ConnectedIntermediaryAccountResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.ConnectedIntermediaryAccountResponse",
            value: exports.ConnectedIntermediaryAccountResponse.encode(message).finish()
        };
    }
};
function createBaseQueryTotalDelegationByValidatorForDenomRequest() {
    return {
        denom: ""
    };
}
exports.QueryTotalDelegationByValidatorForDenomRequest = {
    typeUrl: "/osmosis.superfluid.QueryTotalDelegationByValidatorForDenomRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
            denom: (0, helpers_1.isSet)(object.denom) ? String(object.denom) : ""
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
        return exports.QueryTotalDelegationByValidatorForDenomRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/query-total-delegation-by-validator-for-denom-request",
            value: exports.QueryTotalDelegationByValidatorForDenomRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryTotalDelegationByValidatorForDenomRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryTotalDelegationByValidatorForDenomRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.QueryTotalDelegationByValidatorForDenomRequest",
            value: exports.QueryTotalDelegationByValidatorForDenomRequest.encode(message).finish()
        };
    }
};
function createBaseQueryTotalDelegationByValidatorForDenomResponse() {
    return {
        assets: []
    };
}
exports.QueryTotalDelegationByValidatorForDenomResponse = {
    typeUrl: "/osmosis.superfluid.QueryTotalDelegationByValidatorForDenomResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.assets) {
            exports.Delegations.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTotalDelegationByValidatorForDenomResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.assets.push(exports.Delegations.decode(reader, reader.uint32()));
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
            assets: Array.isArray(object?.assets) ? object.assets.map((e) => exports.Delegations.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.assets) {
            obj.assets = message.assets.map(e => e ? exports.Delegations.toJSON(e) : undefined);
        }
        else {
            obj.assets = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryTotalDelegationByValidatorForDenomResponse();
        message.assets = object.assets?.map(e => exports.Delegations.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            assets: Array.isArray(object?.assets) ? object.assets.map((e) => exports.Delegations.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.assets) {
            obj.assets = message.assets.map(e => e ? exports.Delegations.toSDK(e) : undefined);
        }
        else {
            obj.assets = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            assets: Array.isArray(object?.assets) ? object.assets.map((e) => exports.Delegations.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.assets) {
            obj.assets = message.assets.map(e => e ? exports.Delegations.toAmino(e) : undefined);
        }
        else {
            obj.assets = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryTotalDelegationByValidatorForDenomResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/query-total-delegation-by-validator-for-denom-response",
            value: exports.QueryTotalDelegationByValidatorForDenomResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryTotalDelegationByValidatorForDenomResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryTotalDelegationByValidatorForDenomResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.QueryTotalDelegationByValidatorForDenomResponse",
            value: exports.QueryTotalDelegationByValidatorForDenomResponse.encode(message).finish()
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
exports.Delegations = {
    typeUrl: "/osmosis.superfluid.Delegations",
    encode(message, writer = binary_1.BinaryWriter.create()) {
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
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
            val_addr: (0, helpers_1.isSet)(object.val_addr) ? String(object.val_addr) : "",
            amount_sfsd: (0, helpers_1.isSet)(object.amount_sfsd) ? String(object.amount_sfsd) : "",
            osmo_equivalent: (0, helpers_1.isSet)(object.osmo_equivalent) ? String(object.osmo_equivalent) : ""
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
        return exports.Delegations.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/delegations",
            value: exports.Delegations.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Delegations.decode(message.value);
    },
    toProto(message) {
        return exports.Delegations.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.Delegations",
            value: exports.Delegations.encode(message).finish()
        };
    }
};
function createBaseTotalSuperfluidDelegationsRequest() {
    return {};
}
exports.TotalSuperfluidDelegationsRequest = {
    typeUrl: "/osmosis.superfluid.TotalSuperfluidDelegationsRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.TotalSuperfluidDelegationsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/total-superfluid-delegations-request",
            value: exports.TotalSuperfluidDelegationsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.TotalSuperfluidDelegationsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.TotalSuperfluidDelegationsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.TotalSuperfluidDelegationsRequest",
            value: exports.TotalSuperfluidDelegationsRequest.encode(message).finish()
        };
    }
};
function createBaseTotalSuperfluidDelegationsResponse() {
    return {
        total_delegations: ""
    };
}
exports.TotalSuperfluidDelegationsResponse = {
    typeUrl: "/osmosis.superfluid.TotalSuperfluidDelegationsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.total_delegations !== "") {
            writer.uint32(10).string(message.total_delegations);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
            total_delegations: (0, helpers_1.isSet)(object.total_delegations) ? String(object.total_delegations) : ""
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
        return exports.TotalSuperfluidDelegationsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/total-superfluid-delegations-response",
            value: exports.TotalSuperfluidDelegationsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.TotalSuperfluidDelegationsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.TotalSuperfluidDelegationsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.TotalSuperfluidDelegationsResponse",
            value: exports.TotalSuperfluidDelegationsResponse.encode(message).finish()
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
exports.SuperfluidDelegationAmountRequest = {
    typeUrl: "/osmosis.superfluid.SuperfluidDelegationAmountRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
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
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
            delegator_address: (0, helpers_1.isSet)(object.delegator_address) ? String(object.delegator_address) : "",
            validator_address: (0, helpers_1.isSet)(object.validator_address) ? String(object.validator_address) : "",
            denom: (0, helpers_1.isSet)(object.denom) ? String(object.denom) : ""
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
        return exports.SuperfluidDelegationAmountRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/superfluid-delegation-amount-request",
            value: exports.SuperfluidDelegationAmountRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.SuperfluidDelegationAmountRequest.decode(message.value);
    },
    toProto(message) {
        return exports.SuperfluidDelegationAmountRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.SuperfluidDelegationAmountRequest",
            value: exports.SuperfluidDelegationAmountRequest.encode(message).finish()
        };
    }
};
function createBaseSuperfluidDelegationAmountResponse() {
    return {
        amount: []
    };
}
exports.SuperfluidDelegationAmountResponse = {
    typeUrl: "/osmosis.superfluid.SuperfluidDelegationAmountResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.amount) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSuperfluidDelegationAmountResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount.push(coin_1.Coin.decode(reader, reader.uint32()));
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
            amount: Array.isArray(object?.amount) ? object.amount.map((e) => coin_1.Coin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.amount = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSuperfluidDelegationAmountResponse();
        message.amount = object.amount?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            amount: Array.isArray(object?.amount) ? object.amount.map((e) => coin_1.Coin.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? coin_1.Coin.toSDK(e) : undefined);
        }
        else {
            obj.amount = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            amount: Array.isArray(object?.amount) ? object.amount.map((e) => coin_1.Coin.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.amount = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SuperfluidDelegationAmountResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/superfluid-delegation-amount-response",
            value: exports.SuperfluidDelegationAmountResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.SuperfluidDelegationAmountResponse.decode(message.value);
    },
    toProto(message) {
        return exports.SuperfluidDelegationAmountResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.SuperfluidDelegationAmountResponse",
            value: exports.SuperfluidDelegationAmountResponse.encode(message).finish()
        };
    }
};
function createBaseSuperfluidDelegationsByDelegatorRequest() {
    return {
        delegator_address: ""
    };
}
exports.SuperfluidDelegationsByDelegatorRequest = {
    typeUrl: "/osmosis.superfluid.SuperfluidDelegationsByDelegatorRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.delegator_address !== "") {
            writer.uint32(10).string(message.delegator_address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
            delegator_address: (0, helpers_1.isSet)(object.delegator_address) ? String(object.delegator_address) : ""
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
        return exports.SuperfluidDelegationsByDelegatorRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/superfluid-delegations-by-delegator-request",
            value: exports.SuperfluidDelegationsByDelegatorRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.SuperfluidDelegationsByDelegatorRequest.decode(message.value);
    },
    toProto(message) {
        return exports.SuperfluidDelegationsByDelegatorRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.SuperfluidDelegationsByDelegatorRequest",
            value: exports.SuperfluidDelegationsByDelegatorRequest.encode(message).finish()
        };
    }
};
function createBaseSuperfluidDelegationsByDelegatorResponse() {
    return {
        superfluid_delegation_records: [],
        total_delegated_coins: [],
        total_equivalent_staked_amount: coin_1.Coin.fromPartial({})
    };
}
exports.SuperfluidDelegationsByDelegatorResponse = {
    typeUrl: "/osmosis.superfluid.SuperfluidDelegationsByDelegatorResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.superfluid_delegation_records) {
            superfluid_1.SuperfluidDelegationRecord.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.total_delegated_coins) {
            coin_1.Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.total_equivalent_staked_amount !== undefined) {
            coin_1.Coin.encode(message.total_equivalent_staked_amount, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSuperfluidDelegationsByDelegatorResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.superfluid_delegation_records.push(superfluid_1.SuperfluidDelegationRecord.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.total_delegated_coins.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.total_equivalent_staked_amount = coin_1.Coin.decode(reader, reader.uint32());
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
            superfluid_delegation_records: Array.isArray(object?.superfluid_delegation_records) ? object.superfluid_delegation_records.map((e) => superfluid_1.SuperfluidDelegationRecord.fromJSON(e)) : [],
            total_delegated_coins: Array.isArray(object?.total_delegated_coins) ? object.total_delegated_coins.map((e) => coin_1.Coin.fromJSON(e)) : [],
            total_equivalent_staked_amount: (0, helpers_1.isSet)(object.total_equivalent_staked_amount) ? coin_1.Coin.fromJSON(object.total_equivalent_staked_amount) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.superfluid_delegation_records) {
            obj.superfluid_delegation_records = message.superfluid_delegation_records.map(e => e ? superfluid_1.SuperfluidDelegationRecord.toJSON(e) : undefined);
        }
        else {
            obj.superfluid_delegation_records = [];
        }
        if (message.total_delegated_coins) {
            obj.total_delegated_coins = message.total_delegated_coins.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.total_delegated_coins = [];
        }
        message.total_equivalent_staked_amount !== undefined && (obj.total_equivalent_staked_amount = message.total_equivalent_staked_amount ? coin_1.Coin.toJSON(message.total_equivalent_staked_amount) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSuperfluidDelegationsByDelegatorResponse();
        message.superfluid_delegation_records = object.superfluid_delegation_records?.map(e => superfluid_1.SuperfluidDelegationRecord.fromPartial(e)) || [];
        message.total_delegated_coins = object.total_delegated_coins?.map(e => coin_1.Coin.fromPartial(e)) || [];
        message.total_equivalent_staked_amount = object.total_equivalent_staked_amount !== undefined && object.total_equivalent_staked_amount !== null ? coin_1.Coin.fromPartial(object.total_equivalent_staked_amount) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            superfluid_delegation_records: Array.isArray(object?.superfluid_delegation_records) ? object.superfluid_delegation_records.map((e) => superfluid_1.SuperfluidDelegationRecord.fromSDK(e)) : [],
            total_delegated_coins: Array.isArray(object?.total_delegated_coins) ? object.total_delegated_coins.map((e) => coin_1.Coin.fromSDK(e)) : [],
            total_equivalent_staked_amount: object.total_equivalent_staked_amount ? coin_1.Coin.fromSDK(object.total_equivalent_staked_amount) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.superfluid_delegation_records) {
            obj.superfluid_delegation_records = message.superfluid_delegation_records.map(e => e ? superfluid_1.SuperfluidDelegationRecord.toSDK(e) : undefined);
        }
        else {
            obj.superfluid_delegation_records = [];
        }
        if (message.total_delegated_coins) {
            obj.total_delegated_coins = message.total_delegated_coins.map(e => e ? coin_1.Coin.toSDK(e) : undefined);
        }
        else {
            obj.total_delegated_coins = [];
        }
        message.total_equivalent_staked_amount !== undefined && (obj.total_equivalent_staked_amount = message.total_equivalent_staked_amount ? coin_1.Coin.toSDK(message.total_equivalent_staked_amount) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            superfluid_delegation_records: Array.isArray(object?.superfluid_delegation_records) ? object.superfluid_delegation_records.map((e) => superfluid_1.SuperfluidDelegationRecord.fromAmino(e)) : [],
            total_delegated_coins: Array.isArray(object?.total_delegated_coins) ? object.total_delegated_coins.map((e) => coin_1.Coin.fromAmino(e)) : [],
            total_equivalent_staked_amount: object?.total_equivalent_staked_amount ? coin_1.Coin.fromAmino(object.total_equivalent_staked_amount) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.superfluid_delegation_records) {
            obj.superfluid_delegation_records = message.superfluid_delegation_records.map(e => e ? superfluid_1.SuperfluidDelegationRecord.toAmino(e) : undefined);
        }
        else {
            obj.superfluid_delegation_records = [];
        }
        if (message.total_delegated_coins) {
            obj.total_delegated_coins = message.total_delegated_coins.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.total_delegated_coins = [];
        }
        obj.total_equivalent_staked_amount = message.total_equivalent_staked_amount ? coin_1.Coin.toAmino(message.total_equivalent_staked_amount) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SuperfluidDelegationsByDelegatorResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/superfluid-delegations-by-delegator-response",
            value: exports.SuperfluidDelegationsByDelegatorResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.SuperfluidDelegationsByDelegatorResponse.decode(message.value);
    },
    toProto(message) {
        return exports.SuperfluidDelegationsByDelegatorResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.SuperfluidDelegationsByDelegatorResponse",
            value: exports.SuperfluidDelegationsByDelegatorResponse.encode(message).finish()
        };
    }
};
function createBaseSuperfluidUndelegationsByDelegatorRequest() {
    return {
        delegator_address: "",
        denom: ""
    };
}
exports.SuperfluidUndelegationsByDelegatorRequest = {
    typeUrl: "/osmosis.superfluid.SuperfluidUndelegationsByDelegatorRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.delegator_address !== "") {
            writer.uint32(10).string(message.delegator_address);
        }
        if (message.denom !== "") {
            writer.uint32(18).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
            delegator_address: (0, helpers_1.isSet)(object.delegator_address) ? String(object.delegator_address) : "",
            denom: (0, helpers_1.isSet)(object.denom) ? String(object.denom) : ""
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
        return exports.SuperfluidUndelegationsByDelegatorRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/superfluid-undelegations-by-delegator-request",
            value: exports.SuperfluidUndelegationsByDelegatorRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.SuperfluidUndelegationsByDelegatorRequest.decode(message.value);
    },
    toProto(message) {
        return exports.SuperfluidUndelegationsByDelegatorRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.SuperfluidUndelegationsByDelegatorRequest",
            value: exports.SuperfluidUndelegationsByDelegatorRequest.encode(message).finish()
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
exports.SuperfluidUndelegationsByDelegatorResponse = {
    typeUrl: "/osmosis.superfluid.SuperfluidUndelegationsByDelegatorResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.superfluid_delegation_records) {
            superfluid_1.SuperfluidDelegationRecord.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.total_undelegated_coins) {
            coin_1.Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.synthetic_locks) {
            lock_1.SyntheticLock.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSuperfluidUndelegationsByDelegatorResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.superfluid_delegation_records.push(superfluid_1.SuperfluidDelegationRecord.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.total_undelegated_coins.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.synthetic_locks.push(lock_1.SyntheticLock.decode(reader, reader.uint32()));
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
            superfluid_delegation_records: Array.isArray(object?.superfluid_delegation_records) ? object.superfluid_delegation_records.map((e) => superfluid_1.SuperfluidDelegationRecord.fromJSON(e)) : [],
            total_undelegated_coins: Array.isArray(object?.total_undelegated_coins) ? object.total_undelegated_coins.map((e) => coin_1.Coin.fromJSON(e)) : [],
            synthetic_locks: Array.isArray(object?.synthetic_locks) ? object.synthetic_locks.map((e) => lock_1.SyntheticLock.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.superfluid_delegation_records) {
            obj.superfluid_delegation_records = message.superfluid_delegation_records.map(e => e ? superfluid_1.SuperfluidDelegationRecord.toJSON(e) : undefined);
        }
        else {
            obj.superfluid_delegation_records = [];
        }
        if (message.total_undelegated_coins) {
            obj.total_undelegated_coins = message.total_undelegated_coins.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.total_undelegated_coins = [];
        }
        if (message.synthetic_locks) {
            obj.synthetic_locks = message.synthetic_locks.map(e => e ? lock_1.SyntheticLock.toJSON(e) : undefined);
        }
        else {
            obj.synthetic_locks = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSuperfluidUndelegationsByDelegatorResponse();
        message.superfluid_delegation_records = object.superfluid_delegation_records?.map(e => superfluid_1.SuperfluidDelegationRecord.fromPartial(e)) || [];
        message.total_undelegated_coins = object.total_undelegated_coins?.map(e => coin_1.Coin.fromPartial(e)) || [];
        message.synthetic_locks = object.synthetic_locks?.map(e => lock_1.SyntheticLock.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            superfluid_delegation_records: Array.isArray(object?.superfluid_delegation_records) ? object.superfluid_delegation_records.map((e) => superfluid_1.SuperfluidDelegationRecord.fromSDK(e)) : [],
            total_undelegated_coins: Array.isArray(object?.total_undelegated_coins) ? object.total_undelegated_coins.map((e) => coin_1.Coin.fromSDK(e)) : [],
            synthetic_locks: Array.isArray(object?.synthetic_locks) ? object.synthetic_locks.map((e) => lock_1.SyntheticLock.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.superfluid_delegation_records) {
            obj.superfluid_delegation_records = message.superfluid_delegation_records.map(e => e ? superfluid_1.SuperfluidDelegationRecord.toSDK(e) : undefined);
        }
        else {
            obj.superfluid_delegation_records = [];
        }
        if (message.total_undelegated_coins) {
            obj.total_undelegated_coins = message.total_undelegated_coins.map(e => e ? coin_1.Coin.toSDK(e) : undefined);
        }
        else {
            obj.total_undelegated_coins = [];
        }
        if (message.synthetic_locks) {
            obj.synthetic_locks = message.synthetic_locks.map(e => e ? lock_1.SyntheticLock.toSDK(e) : undefined);
        }
        else {
            obj.synthetic_locks = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            superfluid_delegation_records: Array.isArray(object?.superfluid_delegation_records) ? object.superfluid_delegation_records.map((e) => superfluid_1.SuperfluidDelegationRecord.fromAmino(e)) : [],
            total_undelegated_coins: Array.isArray(object?.total_undelegated_coins) ? object.total_undelegated_coins.map((e) => coin_1.Coin.fromAmino(e)) : [],
            synthetic_locks: Array.isArray(object?.synthetic_locks) ? object.synthetic_locks.map((e) => lock_1.SyntheticLock.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.superfluid_delegation_records) {
            obj.superfluid_delegation_records = message.superfluid_delegation_records.map(e => e ? superfluid_1.SuperfluidDelegationRecord.toAmino(e) : undefined);
        }
        else {
            obj.superfluid_delegation_records = [];
        }
        if (message.total_undelegated_coins) {
            obj.total_undelegated_coins = message.total_undelegated_coins.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.total_undelegated_coins = [];
        }
        if (message.synthetic_locks) {
            obj.synthetic_locks = message.synthetic_locks.map(e => e ? lock_1.SyntheticLock.toAmino(e) : undefined);
        }
        else {
            obj.synthetic_locks = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SuperfluidUndelegationsByDelegatorResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/superfluid-undelegations-by-delegator-response",
            value: exports.SuperfluidUndelegationsByDelegatorResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.SuperfluidUndelegationsByDelegatorResponse.decode(message.value);
    },
    toProto(message) {
        return exports.SuperfluidUndelegationsByDelegatorResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.SuperfluidUndelegationsByDelegatorResponse",
            value: exports.SuperfluidUndelegationsByDelegatorResponse.encode(message).finish()
        };
    }
};
function createBaseSuperfluidDelegationsByValidatorDenomRequest() {
    return {
        validator_address: "",
        denom: ""
    };
}
exports.SuperfluidDelegationsByValidatorDenomRequest = {
    typeUrl: "/osmosis.superfluid.SuperfluidDelegationsByValidatorDenomRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.validator_address !== "") {
            writer.uint32(10).string(message.validator_address);
        }
        if (message.denom !== "") {
            writer.uint32(18).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
            validator_address: (0, helpers_1.isSet)(object.validator_address) ? String(object.validator_address) : "",
            denom: (0, helpers_1.isSet)(object.denom) ? String(object.denom) : ""
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
        return exports.SuperfluidDelegationsByValidatorDenomRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/superfluid-delegations-by-validator-denom-request",
            value: exports.SuperfluidDelegationsByValidatorDenomRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.SuperfluidDelegationsByValidatorDenomRequest.decode(message.value);
    },
    toProto(message) {
        return exports.SuperfluidDelegationsByValidatorDenomRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.SuperfluidDelegationsByValidatorDenomRequest",
            value: exports.SuperfluidDelegationsByValidatorDenomRequest.encode(message).finish()
        };
    }
};
function createBaseSuperfluidDelegationsByValidatorDenomResponse() {
    return {
        superfluid_delegation_records: []
    };
}
exports.SuperfluidDelegationsByValidatorDenomResponse = {
    typeUrl: "/osmosis.superfluid.SuperfluidDelegationsByValidatorDenomResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.superfluid_delegation_records) {
            superfluid_1.SuperfluidDelegationRecord.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSuperfluidDelegationsByValidatorDenomResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.superfluid_delegation_records.push(superfluid_1.SuperfluidDelegationRecord.decode(reader, reader.uint32()));
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
            superfluid_delegation_records: Array.isArray(object?.superfluid_delegation_records) ? object.superfluid_delegation_records.map((e) => superfluid_1.SuperfluidDelegationRecord.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.superfluid_delegation_records) {
            obj.superfluid_delegation_records = message.superfluid_delegation_records.map(e => e ? superfluid_1.SuperfluidDelegationRecord.toJSON(e) : undefined);
        }
        else {
            obj.superfluid_delegation_records = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSuperfluidDelegationsByValidatorDenomResponse();
        message.superfluid_delegation_records = object.superfluid_delegation_records?.map(e => superfluid_1.SuperfluidDelegationRecord.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            superfluid_delegation_records: Array.isArray(object?.superfluid_delegation_records) ? object.superfluid_delegation_records.map((e) => superfluid_1.SuperfluidDelegationRecord.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.superfluid_delegation_records) {
            obj.superfluid_delegation_records = message.superfluid_delegation_records.map(e => e ? superfluid_1.SuperfluidDelegationRecord.toSDK(e) : undefined);
        }
        else {
            obj.superfluid_delegation_records = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            superfluid_delegation_records: Array.isArray(object?.superfluid_delegation_records) ? object.superfluid_delegation_records.map((e) => superfluid_1.SuperfluidDelegationRecord.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.superfluid_delegation_records) {
            obj.superfluid_delegation_records = message.superfluid_delegation_records.map(e => e ? superfluid_1.SuperfluidDelegationRecord.toAmino(e) : undefined);
        }
        else {
            obj.superfluid_delegation_records = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SuperfluidDelegationsByValidatorDenomResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/superfluid-delegations-by-validator-denom-response",
            value: exports.SuperfluidDelegationsByValidatorDenomResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.SuperfluidDelegationsByValidatorDenomResponse.decode(message.value);
    },
    toProto(message) {
        return exports.SuperfluidDelegationsByValidatorDenomResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.SuperfluidDelegationsByValidatorDenomResponse",
            value: exports.SuperfluidDelegationsByValidatorDenomResponse.encode(message).finish()
        };
    }
};
function createBaseEstimateSuperfluidDelegatedAmountByValidatorDenomRequest() {
    return {
        validator_address: "",
        denom: ""
    };
}
exports.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest = {
    typeUrl: "/osmosis.superfluid.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.validator_address !== "") {
            writer.uint32(10).string(message.validator_address);
        }
        if (message.denom !== "") {
            writer.uint32(18).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
            validator_address: (0, helpers_1.isSet)(object.validator_address) ? String(object.validator_address) : "",
            denom: (0, helpers_1.isSet)(object.denom) ? String(object.denom) : ""
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
        return exports.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/estimate-superfluid-delegated-amount-by-validator-denom-request",
            value: exports.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest.decode(message.value);
    },
    toProto(message) {
        return exports.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest",
            value: exports.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest.encode(message).finish()
        };
    }
};
function createBaseEstimateSuperfluidDelegatedAmountByValidatorDenomResponse() {
    return {
        total_delegated_coins: []
    };
}
exports.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse = {
    typeUrl: "/osmosis.superfluid.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.total_delegated_coins) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEstimateSuperfluidDelegatedAmountByValidatorDenomResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.total_delegated_coins.push(coin_1.Coin.decode(reader, reader.uint32()));
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
            total_delegated_coins: Array.isArray(object?.total_delegated_coins) ? object.total_delegated_coins.map((e) => coin_1.Coin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.total_delegated_coins) {
            obj.total_delegated_coins = message.total_delegated_coins.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.total_delegated_coins = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEstimateSuperfluidDelegatedAmountByValidatorDenomResponse();
        message.total_delegated_coins = object.total_delegated_coins?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            total_delegated_coins: Array.isArray(object?.total_delegated_coins) ? object.total_delegated_coins.map((e) => coin_1.Coin.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.total_delegated_coins) {
            obj.total_delegated_coins = message.total_delegated_coins.map(e => e ? coin_1.Coin.toSDK(e) : undefined);
        }
        else {
            obj.total_delegated_coins = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            total_delegated_coins: Array.isArray(object?.total_delegated_coins) ? object.total_delegated_coins.map((e) => coin_1.Coin.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.total_delegated_coins) {
            obj.total_delegated_coins = message.total_delegated_coins.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.total_delegated_coins = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/estimate-superfluid-delegated-amount-by-validator-denom-response",
            value: exports.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse.decode(message.value);
    },
    toProto(message) {
        return exports.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse",
            value: exports.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse.encode(message).finish()
        };
    }
};
function createBaseQueryTotalDelegationByDelegatorRequest() {
    return {
        delegator_address: ""
    };
}
exports.QueryTotalDelegationByDelegatorRequest = {
    typeUrl: "/osmosis.superfluid.QueryTotalDelegationByDelegatorRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.delegator_address !== "") {
            writer.uint32(10).string(message.delegator_address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
            delegator_address: (0, helpers_1.isSet)(object.delegator_address) ? String(object.delegator_address) : ""
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
        return exports.QueryTotalDelegationByDelegatorRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/query-total-delegation-by-delegator-request",
            value: exports.QueryTotalDelegationByDelegatorRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryTotalDelegationByDelegatorRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryTotalDelegationByDelegatorRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.QueryTotalDelegationByDelegatorRequest",
            value: exports.QueryTotalDelegationByDelegatorRequest.encode(message).finish()
        };
    }
};
function createBaseQueryTotalDelegationByDelegatorResponse() {
    return {
        superfluid_delegation_records: [],
        delegation_response: [],
        total_delegated_coins: [],
        total_equivalent_staked_amount: coin_1.Coin.fromPartial({})
    };
}
exports.QueryTotalDelegationByDelegatorResponse = {
    typeUrl: "/osmosis.superfluid.QueryTotalDelegationByDelegatorResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.superfluid_delegation_records) {
            superfluid_1.SuperfluidDelegationRecord.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.delegation_response) {
            staking_1.DelegationResponse.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.total_delegated_coins) {
            coin_1.Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.total_equivalent_staked_amount !== undefined) {
            coin_1.Coin.encode(message.total_equivalent_staked_amount, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTotalDelegationByDelegatorResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.superfluid_delegation_records.push(superfluid_1.SuperfluidDelegationRecord.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.delegation_response.push(staking_1.DelegationResponse.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.total_delegated_coins.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.total_equivalent_staked_amount = coin_1.Coin.decode(reader, reader.uint32());
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
            superfluid_delegation_records: Array.isArray(object?.superfluid_delegation_records) ? object.superfluid_delegation_records.map((e) => superfluid_1.SuperfluidDelegationRecord.fromJSON(e)) : [],
            delegation_response: Array.isArray(object?.delegation_response) ? object.delegation_response.map((e) => staking_1.DelegationResponse.fromJSON(e)) : [],
            total_delegated_coins: Array.isArray(object?.total_delegated_coins) ? object.total_delegated_coins.map((e) => coin_1.Coin.fromJSON(e)) : [],
            total_equivalent_staked_amount: (0, helpers_1.isSet)(object.total_equivalent_staked_amount) ? coin_1.Coin.fromJSON(object.total_equivalent_staked_amount) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.superfluid_delegation_records) {
            obj.superfluid_delegation_records = message.superfluid_delegation_records.map(e => e ? superfluid_1.SuperfluidDelegationRecord.toJSON(e) : undefined);
        }
        else {
            obj.superfluid_delegation_records = [];
        }
        if (message.delegation_response) {
            obj.delegation_response = message.delegation_response.map(e => e ? staking_1.DelegationResponse.toJSON(e) : undefined);
        }
        else {
            obj.delegation_response = [];
        }
        if (message.total_delegated_coins) {
            obj.total_delegated_coins = message.total_delegated_coins.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.total_delegated_coins = [];
        }
        message.total_equivalent_staked_amount !== undefined && (obj.total_equivalent_staked_amount = message.total_equivalent_staked_amount ? coin_1.Coin.toJSON(message.total_equivalent_staked_amount) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryTotalDelegationByDelegatorResponse();
        message.superfluid_delegation_records = object.superfluid_delegation_records?.map(e => superfluid_1.SuperfluidDelegationRecord.fromPartial(e)) || [];
        message.delegation_response = object.delegation_response?.map(e => staking_1.DelegationResponse.fromPartial(e)) || [];
        message.total_delegated_coins = object.total_delegated_coins?.map(e => coin_1.Coin.fromPartial(e)) || [];
        message.total_equivalent_staked_amount = object.total_equivalent_staked_amount !== undefined && object.total_equivalent_staked_amount !== null ? coin_1.Coin.fromPartial(object.total_equivalent_staked_amount) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            superfluid_delegation_records: Array.isArray(object?.superfluid_delegation_records) ? object.superfluid_delegation_records.map((e) => superfluid_1.SuperfluidDelegationRecord.fromSDK(e)) : [],
            delegation_response: Array.isArray(object?.delegation_response) ? object.delegation_response.map((e) => staking_1.DelegationResponse.fromSDK(e)) : [],
            total_delegated_coins: Array.isArray(object?.total_delegated_coins) ? object.total_delegated_coins.map((e) => coin_1.Coin.fromSDK(e)) : [],
            total_equivalent_staked_amount: object.total_equivalent_staked_amount ? coin_1.Coin.fromSDK(object.total_equivalent_staked_amount) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.superfluid_delegation_records) {
            obj.superfluid_delegation_records = message.superfluid_delegation_records.map(e => e ? superfluid_1.SuperfluidDelegationRecord.toSDK(e) : undefined);
        }
        else {
            obj.superfluid_delegation_records = [];
        }
        if (message.delegation_response) {
            obj.delegation_response = message.delegation_response.map(e => e ? staking_1.DelegationResponse.toSDK(e) : undefined);
        }
        else {
            obj.delegation_response = [];
        }
        if (message.total_delegated_coins) {
            obj.total_delegated_coins = message.total_delegated_coins.map(e => e ? coin_1.Coin.toSDK(e) : undefined);
        }
        else {
            obj.total_delegated_coins = [];
        }
        message.total_equivalent_staked_amount !== undefined && (obj.total_equivalent_staked_amount = message.total_equivalent_staked_amount ? coin_1.Coin.toSDK(message.total_equivalent_staked_amount) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            superfluid_delegation_records: Array.isArray(object?.superfluid_delegation_records) ? object.superfluid_delegation_records.map((e) => superfluid_1.SuperfluidDelegationRecord.fromAmino(e)) : [],
            delegation_response: Array.isArray(object?.delegation_response) ? object.delegation_response.map((e) => staking_1.DelegationResponse.fromAmino(e)) : [],
            total_delegated_coins: Array.isArray(object?.total_delegated_coins) ? object.total_delegated_coins.map((e) => coin_1.Coin.fromAmino(e)) : [],
            total_equivalent_staked_amount: object?.total_equivalent_staked_amount ? coin_1.Coin.fromAmino(object.total_equivalent_staked_amount) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.superfluid_delegation_records) {
            obj.superfluid_delegation_records = message.superfluid_delegation_records.map(e => e ? superfluid_1.SuperfluidDelegationRecord.toAmino(e) : undefined);
        }
        else {
            obj.superfluid_delegation_records = [];
        }
        if (message.delegation_response) {
            obj.delegation_response = message.delegation_response.map(e => e ? staking_1.DelegationResponse.toAmino(e) : undefined);
        }
        else {
            obj.delegation_response = [];
        }
        if (message.total_delegated_coins) {
            obj.total_delegated_coins = message.total_delegated_coins.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.total_delegated_coins = [];
        }
        obj.total_equivalent_staked_amount = message.total_equivalent_staked_amount ? coin_1.Coin.toAmino(message.total_equivalent_staked_amount) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryTotalDelegationByDelegatorResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/query-total-delegation-by-delegator-response",
            value: exports.QueryTotalDelegationByDelegatorResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryTotalDelegationByDelegatorResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryTotalDelegationByDelegatorResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.QueryTotalDelegationByDelegatorResponse",
            value: exports.QueryTotalDelegationByDelegatorResponse.encode(message).finish()
        };
    }
};
function createBaseQueryUnpoolWhitelistRequest() {
    return {};
}
exports.QueryUnpoolWhitelistRequest = {
    typeUrl: "/osmosis.superfluid.QueryUnpoolWhitelistRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.QueryUnpoolWhitelistRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/query-unpool-whitelist-request",
            value: exports.QueryUnpoolWhitelistRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryUnpoolWhitelistRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryUnpoolWhitelistRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.QueryUnpoolWhitelistRequest",
            value: exports.QueryUnpoolWhitelistRequest.encode(message).finish()
        };
    }
};
function createBaseQueryUnpoolWhitelistResponse() {
    return {
        pool_ids: []
    };
}
exports.QueryUnpoolWhitelistResponse = {
    typeUrl: "/osmosis.superfluid.QueryUnpoolWhitelistResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        writer.uint32(10).fork();
        for (const v of message.pool_ids) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.QueryUnpoolWhitelistResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/query-unpool-whitelist-response",
            value: exports.QueryUnpoolWhitelistResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryUnpoolWhitelistResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryUnpoolWhitelistResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.QueryUnpoolWhitelistResponse",
            value: exports.QueryUnpoolWhitelistResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=query.js.map
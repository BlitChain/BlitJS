"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUnpoolWhiteListProposal = exports.RemoveSuperfluidAssetsProposal = exports.SetSuperfluidAssetsProposal = void 0;
//@ts-nocheck
const superfluid_1 = require("../superfluid");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
function createBaseSetSuperfluidAssetsProposal() {
    return {
        $typeUrl: "/osmosis.superfluid.v1beta1.SetSuperfluidAssetsProposal",
        title: "",
        description: "",
        assets: []
    };
}
exports.SetSuperfluidAssetsProposal = {
    typeUrl: "/osmosis.superfluid.v1beta1.SetSuperfluidAssetsProposal",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        for (const v of message.assets) {
            superfluid_1.SuperfluidAsset.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSetSuperfluidAssetsProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
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
            title: (0, helpers_1.isSet)(object.title) ? String(object.title) : "",
            description: (0, helpers_1.isSet)(object.description) ? String(object.description) : "",
            assets: Array.isArray(object?.assets) ? object.assets.map((e) => superfluid_1.SuperfluidAsset.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        if (message.assets) {
            obj.assets = message.assets.map(e => e ? superfluid_1.SuperfluidAsset.toJSON(e) : undefined);
        }
        else {
            obj.assets = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSetSuperfluidAssetsProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.assets = object.assets?.map(e => superfluid_1.SuperfluidAsset.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            title: object?.title,
            description: object?.description,
            assets: Array.isArray(object?.assets) ? object.assets.map((e) => superfluid_1.SuperfluidAsset.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
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
            title: object.title,
            description: object.description,
            assets: Array.isArray(object?.assets) ? object.assets.map((e) => superfluid_1.SuperfluidAsset.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        if (message.assets) {
            obj.assets = message.assets.map(e => e ? superfluid_1.SuperfluidAsset.toAmino(e) : undefined);
        }
        else {
            obj.assets = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SetSuperfluidAssetsProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/set-superfluid-assets-proposal",
            value: exports.SetSuperfluidAssetsProposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.SetSuperfluidAssetsProposal.decode(message.value);
    },
    toProto(message) {
        return exports.SetSuperfluidAssetsProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.v1beta1.SetSuperfluidAssetsProposal",
            value: exports.SetSuperfluidAssetsProposal.encode(message).finish()
        };
    }
};
function createBaseRemoveSuperfluidAssetsProposal() {
    return {
        $typeUrl: "/osmosis.superfluid.v1beta1.RemoveSuperfluidAssetsProposal",
        title: "",
        description: "",
        superfluid_asset_denoms: []
    };
}
exports.RemoveSuperfluidAssetsProposal = {
    typeUrl: "/osmosis.superfluid.v1beta1.RemoveSuperfluidAssetsProposal",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        for (const v of message.superfluid_asset_denoms) {
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRemoveSuperfluidAssetsProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.superfluid_asset_denoms.push(reader.string());
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
            title: (0, helpers_1.isSet)(object.title) ? String(object.title) : "",
            description: (0, helpers_1.isSet)(object.description) ? String(object.description) : "",
            superfluid_asset_denoms: Array.isArray(object?.superfluid_asset_denoms) ? object.superfluid_asset_denoms.map((e) => String(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        if (message.superfluid_asset_denoms) {
            obj.superfluid_asset_denoms = message.superfluid_asset_denoms.map(e => e);
        }
        else {
            obj.superfluid_asset_denoms = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRemoveSuperfluidAssetsProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.superfluid_asset_denoms = object.superfluid_asset_denoms?.map(e => e) || [];
        return message;
    },
    fromSDK(object) {
        return {
            title: object?.title,
            description: object?.description,
            superfluid_asset_denoms: Array.isArray(object?.superfluid_asset_denoms) ? object.superfluid_asset_denoms.map((e) => e) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        if (message.superfluid_asset_denoms) {
            obj.superfluid_asset_denoms = message.superfluid_asset_denoms.map(e => e);
        }
        else {
            obj.superfluid_asset_denoms = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            title: object.title,
            description: object.description,
            superfluid_asset_denoms: Array.isArray(object?.superfluid_asset_denoms) ? object.superfluid_asset_denoms.map((e) => e) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        if (message.superfluid_asset_denoms) {
            obj.superfluid_asset_denoms = message.superfluid_asset_denoms.map(e => e);
        }
        else {
            obj.superfluid_asset_denoms = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.RemoveSuperfluidAssetsProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/del-superfluid-assets-proposal",
            value: exports.RemoveSuperfluidAssetsProposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.RemoveSuperfluidAssetsProposal.decode(message.value);
    },
    toProto(message) {
        return exports.RemoveSuperfluidAssetsProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.v1beta1.RemoveSuperfluidAssetsProposal",
            value: exports.RemoveSuperfluidAssetsProposal.encode(message).finish()
        };
    }
};
function createBaseUpdateUnpoolWhiteListProposal() {
    return {
        $typeUrl: "/osmosis.superfluid.v1beta1.UpdateUnpoolWhiteListProposal",
        title: "",
        description: "",
        ids: [],
        is_overwrite: false
    };
}
exports.UpdateUnpoolWhiteListProposal = {
    typeUrl: "/osmosis.superfluid.v1beta1.UpdateUnpoolWhiteListProposal",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        writer.uint32(26).fork();
        for (const v of message.ids) {
            writer.uint64(v);
        }
        writer.ldelim();
        if (message.is_overwrite === true) {
            writer.uint32(32).bool(message.is_overwrite);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateUnpoolWhiteListProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
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
                case 4:
                    message.is_overwrite = reader.bool();
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
            title: (0, helpers_1.isSet)(object.title) ? String(object.title) : "",
            description: (0, helpers_1.isSet)(object.description) ? String(object.description) : "",
            ids: Array.isArray(object?.ids) ? object.ids.map((e) => BigInt(e.toString())) : [],
            is_overwrite: (0, helpers_1.isSet)(object.is_overwrite) ? Boolean(object.is_overwrite) : false
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        if (message.ids) {
            obj.ids = message.ids.map(e => (e || BigInt(0)).toString());
        }
        else {
            obj.ids = [];
        }
        message.is_overwrite !== undefined && (obj.is_overwrite = message.is_overwrite);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseUpdateUnpoolWhiteListProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.ids = object.ids?.map(e => BigInt(e.toString())) || [];
        message.is_overwrite = object.is_overwrite ?? false;
        return message;
    },
    fromSDK(object) {
        return {
            title: object?.title,
            description: object?.description,
            ids: Array.isArray(object?.ids) ? object.ids.map((e) => e) : [],
            is_overwrite: object?.is_overwrite
        };
    },
    toSDK(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        if (message.ids) {
            obj.ids = message.ids.map(e => e);
        }
        else {
            obj.ids = [];
        }
        obj.is_overwrite = message.is_overwrite;
        return obj;
    },
    fromAmino(object) {
        return {
            title: object.title,
            description: object.description,
            ids: Array.isArray(object?.ids) ? object.ids.map((e) => BigInt(e)) : [],
            is_overwrite: object.is_overwrite
        };
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        if (message.ids) {
            obj.ids = message.ids.map(e => e.toString());
        }
        else {
            obj.ids = [];
        }
        obj.is_overwrite = message.is_overwrite;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.UpdateUnpoolWhiteListProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/update-unpool-whitelist",
            value: exports.UpdateUnpoolWhiteListProposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.UpdateUnpoolWhiteListProposal.decode(message.value);
    },
    toProto(message) {
        return exports.UpdateUnpoolWhiteListProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.v1beta1.UpdateUnpoolWhiteListProposal",
            value: exports.UpdateUnpoolWhiteListProposal.encode(message).finish()
        };
    }
};
//# sourceMappingURL=gov.js.map
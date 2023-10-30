"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = void 0;
//@ts-nocheck
const params_1 = require("./params");
const superfluid_1 = require("./superfluid");
const binary_1 = require("../../binary");
const helpers_1 = require("../../helpers");
function createBaseGenesisState() {
    return {
        params: params_1.Params.fromPartial({}),
        superfluid_assets: [],
        osmo_equivalent_multipliers: [],
        intermediary_accounts: [],
        intemediary_account_connections: []
    };
}
exports.GenesisState = {
    typeUrl: "/osmosis.superfluid.GenesisState",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.superfluid_assets) {
            superfluid_1.SuperfluidAsset.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.osmo_equivalent_multipliers) {
            superfluid_1.OsmoEquivalentMultiplierRecord.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.intermediary_accounts) {
            superfluid_1.SuperfluidIntermediaryAccount.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.intemediary_account_connections) {
            superfluid_1.LockIdIntermediaryAccountConnection.encode(v, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = params_1.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.superfluid_assets.push(superfluid_1.SuperfluidAsset.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.osmo_equivalent_multipliers.push(superfluid_1.OsmoEquivalentMultiplierRecord.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.intermediary_accounts.push(superfluid_1.SuperfluidIntermediaryAccount.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.intemediary_account_connections.push(superfluid_1.LockIdIntermediaryAccountConnection.decode(reader, reader.uint32()));
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
            params: (0, helpers_1.isSet)(object.params) ? params_1.Params.fromJSON(object.params) : undefined,
            superfluid_assets: Array.isArray(object?.superfluid_assets) ? object.superfluid_assets.map((e) => superfluid_1.SuperfluidAsset.fromJSON(e)) : [],
            osmo_equivalent_multipliers: Array.isArray(object?.osmo_equivalent_multipliers) ? object.osmo_equivalent_multipliers.map((e) => superfluid_1.OsmoEquivalentMultiplierRecord.fromJSON(e)) : [],
            intermediary_accounts: Array.isArray(object?.intermediary_accounts) ? object.intermediary_accounts.map((e) => superfluid_1.SuperfluidIntermediaryAccount.fromJSON(e)) : [],
            intemediary_account_connections: Array.isArray(object?.intemediary_account_connections) ? object.intemediary_account_connections.map((e) => superfluid_1.LockIdIntermediaryAccountConnection.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? params_1.Params.toJSON(message.params) : undefined);
        if (message.superfluid_assets) {
            obj.superfluid_assets = message.superfluid_assets.map(e => e ? superfluid_1.SuperfluidAsset.toJSON(e) : undefined);
        }
        else {
            obj.superfluid_assets = [];
        }
        if (message.osmo_equivalent_multipliers) {
            obj.osmo_equivalent_multipliers = message.osmo_equivalent_multipliers.map(e => e ? superfluid_1.OsmoEquivalentMultiplierRecord.toJSON(e) : undefined);
        }
        else {
            obj.osmo_equivalent_multipliers = [];
        }
        if (message.intermediary_accounts) {
            obj.intermediary_accounts = message.intermediary_accounts.map(e => e ? superfluid_1.SuperfluidIntermediaryAccount.toJSON(e) : undefined);
        }
        else {
            obj.intermediary_accounts = [];
        }
        if (message.intemediary_account_connections) {
            obj.intemediary_account_connections = message.intemediary_account_connections.map(e => e ? superfluid_1.LockIdIntermediaryAccountConnection.toJSON(e) : undefined);
        }
        else {
            obj.intemediary_account_connections = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.params = object.params !== undefined && object.params !== null ? params_1.Params.fromPartial(object.params) : undefined;
        message.superfluid_assets = object.superfluid_assets?.map(e => superfluid_1.SuperfluidAsset.fromPartial(e)) || [];
        message.osmo_equivalent_multipliers = object.osmo_equivalent_multipliers?.map(e => superfluid_1.OsmoEquivalentMultiplierRecord.fromPartial(e)) || [];
        message.intermediary_accounts = object.intermediary_accounts?.map(e => superfluid_1.SuperfluidIntermediaryAccount.fromPartial(e)) || [];
        message.intemediary_account_connections = object.intemediary_account_connections?.map(e => superfluid_1.LockIdIntermediaryAccountConnection.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            params: object.params ? params_1.Params.fromSDK(object.params) : undefined,
            superfluid_assets: Array.isArray(object?.superfluid_assets) ? object.superfluid_assets.map((e) => superfluid_1.SuperfluidAsset.fromSDK(e)) : [],
            osmo_equivalent_multipliers: Array.isArray(object?.osmo_equivalent_multipliers) ? object.osmo_equivalent_multipliers.map((e) => superfluid_1.OsmoEquivalentMultiplierRecord.fromSDK(e)) : [],
            intermediary_accounts: Array.isArray(object?.intermediary_accounts) ? object.intermediary_accounts.map((e) => superfluid_1.SuperfluidIntermediaryAccount.fromSDK(e)) : [],
            intemediary_account_connections: Array.isArray(object?.intemediary_account_connections) ? object.intemediary_account_connections.map((e) => superfluid_1.LockIdIntermediaryAccountConnection.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? params_1.Params.toSDK(message.params) : undefined);
        if (message.superfluid_assets) {
            obj.superfluid_assets = message.superfluid_assets.map(e => e ? superfluid_1.SuperfluidAsset.toSDK(e) : undefined);
        }
        else {
            obj.superfluid_assets = [];
        }
        if (message.osmo_equivalent_multipliers) {
            obj.osmo_equivalent_multipliers = message.osmo_equivalent_multipliers.map(e => e ? superfluid_1.OsmoEquivalentMultiplierRecord.toSDK(e) : undefined);
        }
        else {
            obj.osmo_equivalent_multipliers = [];
        }
        if (message.intermediary_accounts) {
            obj.intermediary_accounts = message.intermediary_accounts.map(e => e ? superfluid_1.SuperfluidIntermediaryAccount.toSDK(e) : undefined);
        }
        else {
            obj.intermediary_accounts = [];
        }
        if (message.intemediary_account_connections) {
            obj.intemediary_account_connections = message.intemediary_account_connections.map(e => e ? superfluid_1.LockIdIntermediaryAccountConnection.toSDK(e) : undefined);
        }
        else {
            obj.intemediary_account_connections = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            params: object?.params ? params_1.Params.fromAmino(object.params) : undefined,
            superfluid_assets: Array.isArray(object?.superfluid_assets) ? object.superfluid_assets.map((e) => superfluid_1.SuperfluidAsset.fromAmino(e)) : [],
            osmo_equivalent_multipliers: Array.isArray(object?.osmo_equivalent_multipliers) ? object.osmo_equivalent_multipliers.map((e) => superfluid_1.OsmoEquivalentMultiplierRecord.fromAmino(e)) : [],
            intermediary_accounts: Array.isArray(object?.intermediary_accounts) ? object.intermediary_accounts.map((e) => superfluid_1.SuperfluidIntermediaryAccount.fromAmino(e)) : [],
            intemediary_account_connections: Array.isArray(object?.intemediary_account_connections) ? object.intemediary_account_connections.map((e) => superfluid_1.LockIdIntermediaryAccountConnection.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? params_1.Params.toAmino(message.params) : undefined;
        if (message.superfluid_assets) {
            obj.superfluid_assets = message.superfluid_assets.map(e => e ? superfluid_1.SuperfluidAsset.toAmino(e) : undefined);
        }
        else {
            obj.superfluid_assets = [];
        }
        if (message.osmo_equivalent_multipliers) {
            obj.osmo_equivalent_multipliers = message.osmo_equivalent_multipliers.map(e => e ? superfluid_1.OsmoEquivalentMultiplierRecord.toAmino(e) : undefined);
        }
        else {
            obj.osmo_equivalent_multipliers = [];
        }
        if (message.intermediary_accounts) {
            obj.intermediary_accounts = message.intermediary_accounts.map(e => e ? superfluid_1.SuperfluidIntermediaryAccount.toAmino(e) : undefined);
        }
        else {
            obj.intermediary_accounts = [];
        }
        if (message.intemediary_account_connections) {
            obj.intemediary_account_connections = message.intemediary_account_connections.map(e => e ? superfluid_1.LockIdIntermediaryAccountConnection.toAmino(e) : undefined);
        }
        else {
            obj.intemediary_account_connections = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GenesisState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/genesis-state",
            value: exports.GenesisState.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GenesisState.decode(message.value);
    },
    toProto(message) {
        return exports.GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
//# sourceMappingURL=genesis.js.map
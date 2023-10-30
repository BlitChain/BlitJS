//@ts-nocheck
import { Params } from "./params";
import { SuperfluidAsset, OsmoEquivalentMultiplierRecord, SuperfluidIntermediaryAccount, LockIdIntermediaryAccountConnection } from "./superfluid";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
function createBaseGenesisState() {
    return {
        params: Params.fromPartial({}),
        superfluid_assets: [],
        osmo_equivalent_multipliers: [],
        intermediary_accounts: [],
        intemediary_account_connections: []
    };
}
export const GenesisState = {
    typeUrl: "/osmosis.superfluid.GenesisState",
    encode(message, writer = BinaryWriter.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.superfluid_assets) {
            SuperfluidAsset.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.osmo_equivalent_multipliers) {
            OsmoEquivalentMultiplierRecord.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.intermediary_accounts) {
            SuperfluidIntermediaryAccount.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.intemediary_account_connections) {
            LockIdIntermediaryAccountConnection.encode(v, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.superfluid_assets.push(SuperfluidAsset.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.osmo_equivalent_multipliers.push(OsmoEquivalentMultiplierRecord.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.intermediary_accounts.push(SuperfluidIntermediaryAccount.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.intemediary_account_connections.push(LockIdIntermediaryAccountConnection.decode(reader, reader.uint32()));
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
            params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
            superfluid_assets: Array.isArray(object?.superfluid_assets) ? object.superfluid_assets.map((e) => SuperfluidAsset.fromJSON(e)) : [],
            osmo_equivalent_multipliers: Array.isArray(object?.osmo_equivalent_multipliers) ? object.osmo_equivalent_multipliers.map((e) => OsmoEquivalentMultiplierRecord.fromJSON(e)) : [],
            intermediary_accounts: Array.isArray(object?.intermediary_accounts) ? object.intermediary_accounts.map((e) => SuperfluidIntermediaryAccount.fromJSON(e)) : [],
            intemediary_account_connections: Array.isArray(object?.intemediary_account_connections) ? object.intemediary_account_connections.map((e) => LockIdIntermediaryAccountConnection.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        if (message.superfluid_assets) {
            obj.superfluid_assets = message.superfluid_assets.map(e => e ? SuperfluidAsset.toJSON(e) : undefined);
        }
        else {
            obj.superfluid_assets = [];
        }
        if (message.osmo_equivalent_multipliers) {
            obj.osmo_equivalent_multipliers = message.osmo_equivalent_multipliers.map(e => e ? OsmoEquivalentMultiplierRecord.toJSON(e) : undefined);
        }
        else {
            obj.osmo_equivalent_multipliers = [];
        }
        if (message.intermediary_accounts) {
            obj.intermediary_accounts = message.intermediary_accounts.map(e => e ? SuperfluidIntermediaryAccount.toJSON(e) : undefined);
        }
        else {
            obj.intermediary_accounts = [];
        }
        if (message.intemediary_account_connections) {
            obj.intemediary_account_connections = message.intemediary_account_connections.map(e => e ? LockIdIntermediaryAccountConnection.toJSON(e) : undefined);
        }
        else {
            obj.intemediary_account_connections = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        message.superfluid_assets = object.superfluid_assets?.map(e => SuperfluidAsset.fromPartial(e)) || [];
        message.osmo_equivalent_multipliers = object.osmo_equivalent_multipliers?.map(e => OsmoEquivalentMultiplierRecord.fromPartial(e)) || [];
        message.intermediary_accounts = object.intermediary_accounts?.map(e => SuperfluidIntermediaryAccount.fromPartial(e)) || [];
        message.intemediary_account_connections = object.intemediary_account_connections?.map(e => LockIdIntermediaryAccountConnection.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            params: object.params ? Params.fromSDK(object.params) : undefined,
            superfluid_assets: Array.isArray(object?.superfluid_assets) ? object.superfluid_assets.map((e) => SuperfluidAsset.fromSDK(e)) : [],
            osmo_equivalent_multipliers: Array.isArray(object?.osmo_equivalent_multipliers) ? object.osmo_equivalent_multipliers.map((e) => OsmoEquivalentMultiplierRecord.fromSDK(e)) : [],
            intermediary_accounts: Array.isArray(object?.intermediary_accounts) ? object.intermediary_accounts.map((e) => SuperfluidIntermediaryAccount.fromSDK(e)) : [],
            intemediary_account_connections: Array.isArray(object?.intemediary_account_connections) ? object.intemediary_account_connections.map((e) => LockIdIntermediaryAccountConnection.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
        if (message.superfluid_assets) {
            obj.superfluid_assets = message.superfluid_assets.map(e => e ? SuperfluidAsset.toSDK(e) : undefined);
        }
        else {
            obj.superfluid_assets = [];
        }
        if (message.osmo_equivalent_multipliers) {
            obj.osmo_equivalent_multipliers = message.osmo_equivalent_multipliers.map(e => e ? OsmoEquivalentMultiplierRecord.toSDK(e) : undefined);
        }
        else {
            obj.osmo_equivalent_multipliers = [];
        }
        if (message.intermediary_accounts) {
            obj.intermediary_accounts = message.intermediary_accounts.map(e => e ? SuperfluidIntermediaryAccount.toSDK(e) : undefined);
        }
        else {
            obj.intermediary_accounts = [];
        }
        if (message.intemediary_account_connections) {
            obj.intemediary_account_connections = message.intemediary_account_connections.map(e => e ? LockIdIntermediaryAccountConnection.toSDK(e) : undefined);
        }
        else {
            obj.intemediary_account_connections = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            params: object?.params ? Params.fromAmino(object.params) : undefined,
            superfluid_assets: Array.isArray(object?.superfluid_assets) ? object.superfluid_assets.map((e) => SuperfluidAsset.fromAmino(e)) : [],
            osmo_equivalent_multipliers: Array.isArray(object?.osmo_equivalent_multipliers) ? object.osmo_equivalent_multipliers.map((e) => OsmoEquivalentMultiplierRecord.fromAmino(e)) : [],
            intermediary_accounts: Array.isArray(object?.intermediary_accounts) ? object.intermediary_accounts.map((e) => SuperfluidIntermediaryAccount.fromAmino(e)) : [],
            intemediary_account_connections: Array.isArray(object?.intemediary_account_connections) ? object.intemediary_account_connections.map((e) => LockIdIntermediaryAccountConnection.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        if (message.superfluid_assets) {
            obj.superfluid_assets = message.superfluid_assets.map(e => e ? SuperfluidAsset.toAmino(e) : undefined);
        }
        else {
            obj.superfluid_assets = [];
        }
        if (message.osmo_equivalent_multipliers) {
            obj.osmo_equivalent_multipliers = message.osmo_equivalent_multipliers.map(e => e ? OsmoEquivalentMultiplierRecord.toAmino(e) : undefined);
        }
        else {
            obj.osmo_equivalent_multipliers = [];
        }
        if (message.intermediary_accounts) {
            obj.intermediary_accounts = message.intermediary_accounts.map(e => e ? SuperfluidIntermediaryAccount.toAmino(e) : undefined);
        }
        else {
            obj.intermediary_accounts = [];
        }
        if (message.intemediary_account_connections) {
            obj.intemediary_account_connections = message.intemediary_account_connections.map(e => e ? LockIdIntermediaryAccountConnection.toAmino(e) : undefined);
        }
        else {
            obj.intemediary_account_connections = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return GenesisState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/genesis-state",
            value: GenesisState.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GenesisState.decode(message.value);
    },
    toProto(message) {
        return GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.GenesisState",
            value: GenesisState.encode(message).finish()
        };
    }
};
//# sourceMappingURL=genesis.js.map
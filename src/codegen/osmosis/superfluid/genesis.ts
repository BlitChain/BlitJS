//@ts-nocheck
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { SuperfluidAsset, SuperfluidAssetAmino, SuperfluidAssetSDKType, OsmoEquivalentMultiplierRecord, OsmoEquivalentMultiplierRecordAmino, OsmoEquivalentMultiplierRecordSDKType, SuperfluidIntermediaryAccount, SuperfluidIntermediaryAccountAmino, SuperfluidIntermediaryAccountSDKType, LockIdIntermediaryAccountConnection, LockIdIntermediaryAccountConnectionAmino, LockIdIntermediaryAccountConnectionSDKType } from "./superfluid";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
/** GenesisState defines the module's genesis state. */
export interface GenesisState {
  params: Params;
  /**
   * superfluid_assets defines the registered superfluid assets that have been
   * registered via governance.
   */
  superfluid_assets: SuperfluidAsset[];
  /**
   * osmo_equivalent_multipliers is the records of osmo equivalent amount of
   * each superfluid registered pool, updated every epoch.
   */
  osmo_equivalent_multipliers: OsmoEquivalentMultiplierRecord[];
  /**
   * intermediary_accounts is a secondary account for superfluid staking that
   * plays an intermediary role between validators and the delegators.
   */
  intermediary_accounts: SuperfluidIntermediaryAccount[];
  intemediary_account_connections: LockIdIntermediaryAccountConnection[];
}
export interface GenesisStateProtoMsg {
  type_url: "/osmosis.superfluid.GenesisState";
  value: Uint8Array;
}
export interface GenesisStateProtoMsg {
  type_url: "/osmosis.superfluid.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the module's genesis state. */
export interface GenesisStateAmino {
  params?: ParamsAmino;
  /**
   * superfluid_assets defines the registered superfluid assets that have been
   * registered via governance.
   */
  superfluid_assets: SuperfluidAssetAmino[];
  /**
   * osmo_equivalent_multipliers is the records of osmo equivalent amount of
   * each superfluid registered pool, updated every epoch.
   */
  osmo_equivalent_multipliers: OsmoEquivalentMultiplierRecordAmino[];
  /**
   * intermediary_accounts is a secondary account for superfluid staking that
   * plays an intermediary role between validators and the delegators.
   */
  intermediary_accounts: SuperfluidIntermediaryAccountAmino[];
  intemediary_account_connections: LockIdIntermediaryAccountConnectionAmino[];
}
export interface GenesisStateAminoMsg {
  type: "osmosis/genesis-state";
  value: GenesisStateAmino;
}
/** GenesisState defines the module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  superfluid_assets: SuperfluidAssetSDKType[];
  osmo_equivalent_multipliers: OsmoEquivalentMultiplierRecordSDKType[];
  intermediary_accounts: SuperfluidIntermediaryAccountSDKType[];
  intemediary_account_connections: LockIdIntermediaryAccountConnectionSDKType[];
}
function createBaseGenesisState(): GenesisState {
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
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.superfluid_assets) {
      SuperfluidAsset.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.osmo_equivalent_multipliers) {
      OsmoEquivalentMultiplierRecord.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.intermediary_accounts) {
      SuperfluidIntermediaryAccount.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.intemediary_account_connections) {
      LockIdIntermediaryAccountConnection.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
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
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      superfluid_assets: Array.isArray(object?.superfluid_assets) ? object.superfluid_assets.map((e: any) => SuperfluidAsset.fromJSON(e)) : [],
      osmo_equivalent_multipliers: Array.isArray(object?.osmo_equivalent_multipliers) ? object.osmo_equivalent_multipliers.map((e: any) => OsmoEquivalentMultiplierRecord.fromJSON(e)) : [],
      intermediary_accounts: Array.isArray(object?.intermediary_accounts) ? object.intermediary_accounts.map((e: any) => SuperfluidIntermediaryAccount.fromJSON(e)) : [],
      intemediary_account_connections: Array.isArray(object?.intemediary_account_connections) ? object.intemediary_account_connections.map((e: any) => LockIdIntermediaryAccountConnection.fromJSON(e)) : []
    };
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.superfluid_assets) {
      obj.superfluid_assets = message.superfluid_assets.map(e => e ? SuperfluidAsset.toJSON(e) : undefined);
    } else {
      obj.superfluid_assets = [];
    }
    if (message.osmo_equivalent_multipliers) {
      obj.osmo_equivalent_multipliers = message.osmo_equivalent_multipliers.map(e => e ? OsmoEquivalentMultiplierRecord.toJSON(e) : undefined);
    } else {
      obj.osmo_equivalent_multipliers = [];
    }
    if (message.intermediary_accounts) {
      obj.intermediary_accounts = message.intermediary_accounts.map(e => e ? SuperfluidIntermediaryAccount.toJSON(e) : undefined);
    } else {
      obj.intermediary_accounts = [];
    }
    if (message.intemediary_account_connections) {
      obj.intemediary_account_connections = message.intemediary_account_connections.map(e => e ? LockIdIntermediaryAccountConnection.toJSON(e) : undefined);
    } else {
      obj.intemediary_account_connections = [];
    }
    return obj;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.superfluid_assets = object.superfluid_assets?.map(e => SuperfluidAsset.fromPartial(e)) || [];
    message.osmo_equivalent_multipliers = object.osmo_equivalent_multipliers?.map(e => OsmoEquivalentMultiplierRecord.fromPartial(e)) || [];
    message.intermediary_accounts = object.intermediary_accounts?.map(e => SuperfluidIntermediaryAccount.fromPartial(e)) || [];
    message.intemediary_account_connections = object.intemediary_account_connections?.map(e => LockIdIntermediaryAccountConnection.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: GenesisStateSDKType): GenesisState {
    return {
      params: object.params ? Params.fromSDK(object.params) : undefined,
      superfluid_assets: Array.isArray(object?.superfluid_assets) ? object.superfluid_assets.map((e: any) => SuperfluidAsset.fromSDK(e)) : [],
      osmo_equivalent_multipliers: Array.isArray(object?.osmo_equivalent_multipliers) ? object.osmo_equivalent_multipliers.map((e: any) => OsmoEquivalentMultiplierRecord.fromSDK(e)) : [],
      intermediary_accounts: Array.isArray(object?.intermediary_accounts) ? object.intermediary_accounts.map((e: any) => SuperfluidIntermediaryAccount.fromSDK(e)) : [],
      intemediary_account_connections: Array.isArray(object?.intemediary_account_connections) ? object.intemediary_account_connections.map((e: any) => LockIdIntermediaryAccountConnection.fromSDK(e)) : []
    };
  },
  toSDK(message: GenesisState): GenesisStateSDKType {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
    if (message.superfluid_assets) {
      obj.superfluid_assets = message.superfluid_assets.map(e => e ? SuperfluidAsset.toSDK(e) : undefined);
    } else {
      obj.superfluid_assets = [];
    }
    if (message.osmo_equivalent_multipliers) {
      obj.osmo_equivalent_multipliers = message.osmo_equivalent_multipliers.map(e => e ? OsmoEquivalentMultiplierRecord.toSDK(e) : undefined);
    } else {
      obj.osmo_equivalent_multipliers = [];
    }
    if (message.intermediary_accounts) {
      obj.intermediary_accounts = message.intermediary_accounts.map(e => e ? SuperfluidIntermediaryAccount.toSDK(e) : undefined);
    } else {
      obj.intermediary_accounts = [];
    }
    if (message.intemediary_account_connections) {
      obj.intemediary_account_connections = message.intemediary_account_connections.map(e => e ? LockIdIntermediaryAccountConnection.toSDK(e) : undefined);
    } else {
      obj.intemediary_account_connections = [];
    }
    return obj;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined,
      superfluid_assets: Array.isArray(object?.superfluid_assets) ? object.superfluid_assets.map((e: any) => SuperfluidAsset.fromAmino(e)) : [],
      osmo_equivalent_multipliers: Array.isArray(object?.osmo_equivalent_multipliers) ? object.osmo_equivalent_multipliers.map((e: any) => OsmoEquivalentMultiplierRecord.fromAmino(e)) : [],
      intermediary_accounts: Array.isArray(object?.intermediary_accounts) ? object.intermediary_accounts.map((e: any) => SuperfluidIntermediaryAccount.fromAmino(e)) : [],
      intemediary_account_connections: Array.isArray(object?.intemediary_account_connections) ? object.intemediary_account_connections.map((e: any) => LockIdIntermediaryAccountConnection.fromAmino(e)) : []
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.superfluid_assets) {
      obj.superfluid_assets = message.superfluid_assets.map(e => e ? SuperfluidAsset.toAmino(e) : undefined);
    } else {
      obj.superfluid_assets = [];
    }
    if (message.osmo_equivalent_multipliers) {
      obj.osmo_equivalent_multipliers = message.osmo_equivalent_multipliers.map(e => e ? OsmoEquivalentMultiplierRecord.toAmino(e) : undefined);
    } else {
      obj.osmo_equivalent_multipliers = [];
    }
    if (message.intermediary_accounts) {
      obj.intermediary_accounts = message.intermediary_accounts.map(e => e ? SuperfluidIntermediaryAccount.toAmino(e) : undefined);
    } else {
      obj.intermediary_accounts = [];
    }
    if (message.intemediary_account_connections) {
      obj.intemediary_account_connections = message.intemediary_account_connections.map(e => e ? LockIdIntermediaryAccountConnection.toAmino(e) : undefined);
    } else {
      obj.intemediary_account_connections = [];
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  toAminoMsg(message: GenesisState): GenesisStateAminoMsg {
    return {
      type: "osmosis/genesis-state",
      value: GenesisState.toAmino(message)
    };
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/osmosis.superfluid.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
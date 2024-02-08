//@ts-nocheck
import { Params as Params1 } from "../../controller/v1/controller";
import { ParamsAmino as Params1Amino } from "../../controller/v1/controller";
import { ParamsSDKType as Params1SDKType } from "../../controller/v1/controller";
import { Params as Params2 } from "../../host/v1/host";
import { ParamsAmino as Params2Amino } from "../../host/v1/host";
import { ParamsSDKType as Params2SDKType } from "../../host/v1/host";
import { BinaryReader, BinaryWriter } from "../../../../../binary";
import { isSet } from "../../../../../helpers";
import { GlobalDecoderRegistry } from "../../../../../registry";
export const protobufPackage = "ibc.applications.interchain_accounts.genesis.v1";
/** GenesisState defines the interchain accounts genesis state */
export interface GenesisState {
  controller_genesis_state: ControllerGenesisState;
  host_genesis_state: HostGenesisState;
}
export interface GenesisStateProtoMsg {
  type_url: "/ibc.applications.interchain_accounts.genesis.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the interchain accounts genesis state */
export interface GenesisStateAmino {
  controller_genesis_state?: ControllerGenesisStateAmino;
  host_genesis_state?: HostGenesisStateAmino;
}
export interface GenesisStateAminoMsg {
  type: "cosmos-sdk/GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the interchain accounts genesis state */
export interface GenesisStateSDKType {
  controller_genesis_state: ControllerGenesisStateSDKType;
  host_genesis_state: HostGenesisStateSDKType;
}
/** ControllerGenesisState defines the interchain accounts controller genesis state */
export interface ControllerGenesisState {
  active_channels: ActiveChannel[];
  interchain_accounts: RegisteredInterchainAccount[];
  ports: string[];
  params: Params1;
}
export interface ControllerGenesisStateProtoMsg {
  type_url: "/ibc.applications.interchain_accounts.genesis.v1.ControllerGenesisState";
  value: Uint8Array;
}
/** ControllerGenesisState defines the interchain accounts controller genesis state */
export interface ControllerGenesisStateAmino {
  active_channels?: ActiveChannelAmino[];
  interchain_accounts?: RegisteredInterchainAccountAmino[];
  ports?: string[];
  params?: Params1Amino;
}
export interface ControllerGenesisStateAminoMsg {
  type: "cosmos-sdk/ControllerGenesisState";
  value: ControllerGenesisStateAmino;
}
/** ControllerGenesisState defines the interchain accounts controller genesis state */
export interface ControllerGenesisStateSDKType {
  active_channels: ActiveChannelSDKType[];
  interchain_accounts: RegisteredInterchainAccountSDKType[];
  ports: string[];
  params: Params1SDKType;
}
/** HostGenesisState defines the interchain accounts host genesis state */
export interface HostGenesisState {
  active_channels: ActiveChannel[];
  interchain_accounts: RegisteredInterchainAccount[];
  port: string;
  params: Params2;
}
export interface HostGenesisStateProtoMsg {
  type_url: "/ibc.applications.interchain_accounts.genesis.v1.HostGenesisState";
  value: Uint8Array;
}
/** HostGenesisState defines the interchain accounts host genesis state */
export interface HostGenesisStateAmino {
  active_channels?: ActiveChannelAmino[];
  interchain_accounts?: RegisteredInterchainAccountAmino[];
  port?: string;
  params?: Params2Amino;
}
export interface HostGenesisStateAminoMsg {
  type: "cosmos-sdk/HostGenesisState";
  value: HostGenesisStateAmino;
}
/** HostGenesisState defines the interchain accounts host genesis state */
export interface HostGenesisStateSDKType {
  active_channels: ActiveChannelSDKType[];
  interchain_accounts: RegisteredInterchainAccountSDKType[];
  port: string;
  params: Params2SDKType;
}
/**
 * ActiveChannel contains a connection ID, port ID and associated active channel ID, as well as a boolean flag to
 * indicate if the channel is middleware enabled
 */
export interface ActiveChannel {
  connection_id: string;
  port_id: string;
  channel_id: string;
  is_middleware_enabled: boolean;
}
export interface ActiveChannelProtoMsg {
  type_url: "/ibc.applications.interchain_accounts.genesis.v1.ActiveChannel";
  value: Uint8Array;
}
/**
 * ActiveChannel contains a connection ID, port ID and associated active channel ID, as well as a boolean flag to
 * indicate if the channel is middleware enabled
 */
export interface ActiveChannelAmino {
  connection_id?: string;
  port_id?: string;
  channel_id?: string;
  is_middleware_enabled?: boolean;
}
export interface ActiveChannelAminoMsg {
  type: "cosmos-sdk/ActiveChannel";
  value: ActiveChannelAmino;
}
/**
 * ActiveChannel contains a connection ID, port ID and associated active channel ID, as well as a boolean flag to
 * indicate if the channel is middleware enabled
 */
export interface ActiveChannelSDKType {
  connection_id: string;
  port_id: string;
  channel_id: string;
  is_middleware_enabled: boolean;
}
/** RegisteredInterchainAccount contains a connection ID, port ID and associated interchain account address */
export interface RegisteredInterchainAccount {
  connection_id: string;
  port_id: string;
  account_address: string;
}
export interface RegisteredInterchainAccountProtoMsg {
  type_url: "/ibc.applications.interchain_accounts.genesis.v1.RegisteredInterchainAccount";
  value: Uint8Array;
}
/** RegisteredInterchainAccount contains a connection ID, port ID and associated interchain account address */
export interface RegisteredInterchainAccountAmino {
  connection_id?: string;
  port_id?: string;
  account_address?: string;
}
export interface RegisteredInterchainAccountAminoMsg {
  type: "cosmos-sdk/RegisteredInterchainAccount";
  value: RegisteredInterchainAccountAmino;
}
/** RegisteredInterchainAccount contains a connection ID, port ID and associated interchain account address */
export interface RegisteredInterchainAccountSDKType {
  connection_id: string;
  port_id: string;
  account_address: string;
}
function createBaseGenesisState(): GenesisState {
  return {
    controller_genesis_state: ControllerGenesisState.fromPartial({}),
    host_genesis_state: HostGenesisState.fromPartial({})
  };
}
export const GenesisState = {
  typeUrl: "/ibc.applications.interchain_accounts.genesis.v1.GenesisState",
  aminoType: "cosmos-sdk/GenesisState",
  is(o: any): o is GenesisState {
    return o && (o.$typeUrl === GenesisState.typeUrl || ControllerGenesisState.is(o.controller_genesis_state) && HostGenesisState.is(o.host_genesis_state));
  },
  isSDK(o: any): o is GenesisStateSDKType {
    return o && (o.$typeUrl === GenesisState.typeUrl || ControllerGenesisState.isSDK(o.controller_genesis_state) && HostGenesisState.isSDK(o.host_genesis_state));
  },
  isAmino(o: any): o is GenesisStateAmino {
    return o && (o.$typeUrl === GenesisState.typeUrl || ControllerGenesisState.isAmino(o.controller_genesis_state) && HostGenesisState.isAmino(o.host_genesis_state));
  },
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.controller_genesis_state !== undefined) {
      ControllerGenesisState.encode(message.controller_genesis_state, writer.uint32(10).fork()).ldelim();
    }
    if (message.host_genesis_state !== undefined) {
      HostGenesisState.encode(message.host_genesis_state, writer.uint32(18).fork()).ldelim();
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
          message.controller_genesis_state = ControllerGenesisState.decode(reader, reader.uint32());
          break;
        case 2:
          message.host_genesis_state = HostGenesisState.decode(reader, reader.uint32());
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
      controller_genesis_state: isSet(object.controller_genesis_state) ? ControllerGenesisState.fromJSON(object.controller_genesis_state) : undefined,
      host_genesis_state: isSet(object.host_genesis_state) ? HostGenesisState.fromJSON(object.host_genesis_state) : undefined
    };
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.controller_genesis_state !== undefined && (obj.controller_genesis_state = message.controller_genesis_state ? ControllerGenesisState.toJSON(message.controller_genesis_state) : undefined);
    message.host_genesis_state !== undefined && (obj.host_genesis_state = message.host_genesis_state ? HostGenesisState.toJSON(message.host_genesis_state) : undefined);
    return obj;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.controller_genesis_state = object.controller_genesis_state !== undefined && object.controller_genesis_state !== null ? ControllerGenesisState.fromPartial(object.controller_genesis_state) : undefined;
    message.host_genesis_state = object.host_genesis_state !== undefined && object.host_genesis_state !== null ? HostGenesisState.fromPartial(object.host_genesis_state) : undefined;
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.controller_genesis_state !== undefined && object.controller_genesis_state !== null) {
      message.controller_genesis_state = ControllerGenesisState.fromAmino(object.controller_genesis_state);
    }
    if (object.host_genesis_state !== undefined && object.host_genesis_state !== null) {
      message.host_genesis_state = HostGenesisState.fromAmino(object.host_genesis_state);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.controller_genesis_state = message.controller_genesis_state ? ControllerGenesisState.toAmino(message.controller_genesis_state) : undefined;
    obj.host_genesis_state = message.host_genesis_state ? HostGenesisState.toAmino(message.host_genesis_state) : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  toAminoMsg(message: GenesisState): GenesisStateAminoMsg {
    return {
      type: "cosmos-sdk/GenesisState",
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
      typeUrl: "/ibc.applications.interchain_accounts.genesis.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GenesisState.typeUrl, GenesisState);
GlobalDecoderRegistry.registerAminoProtoMapping(GenesisState.aminoType, GenesisState.typeUrl);
function createBaseControllerGenesisState(): ControllerGenesisState {
  return {
    active_channels: [],
    interchain_accounts: [],
    ports: [],
    params: Params1.fromPartial({})
  };
}
export const ControllerGenesisState = {
  typeUrl: "/ibc.applications.interchain_accounts.genesis.v1.ControllerGenesisState",
  aminoType: "cosmos-sdk/ControllerGenesisState",
  is(o: any): o is ControllerGenesisState {
    return o && (o.$typeUrl === ControllerGenesisState.typeUrl || Array.isArray(o.active_channels) && (!o.active_channels.length || ActiveChannel.is(o.active_channels[0])) && Array.isArray(o.interchain_accounts) && (!o.interchain_accounts.length || RegisteredInterchainAccount.is(o.interchain_accounts[0])) && Array.isArray(o.ports) && (!o.ports.length || typeof o.ports[0] === "string") && Params1.is(o.params));
  },
  isSDK(o: any): o is ControllerGenesisStateSDKType {
    return o && (o.$typeUrl === ControllerGenesisState.typeUrl || Array.isArray(o.active_channels) && (!o.active_channels.length || ActiveChannel.isSDK(o.active_channels[0])) && Array.isArray(o.interchain_accounts) && (!o.interchain_accounts.length || RegisteredInterchainAccount.isSDK(o.interchain_accounts[0])) && Array.isArray(o.ports) && (!o.ports.length || typeof o.ports[0] === "string") && Params1.isSDK(o.params));
  },
  isAmino(o: any): o is ControllerGenesisStateAmino {
    return o && (o.$typeUrl === ControllerGenesisState.typeUrl || Array.isArray(o.active_channels) && (!o.active_channels.length || ActiveChannel.isAmino(o.active_channels[0])) && Array.isArray(o.interchain_accounts) && (!o.interchain_accounts.length || RegisteredInterchainAccount.isAmino(o.interchain_accounts[0])) && Array.isArray(o.ports) && (!o.ports.length || typeof o.ports[0] === "string") && Params1.isAmino(o.params));
  },
  encode(message: ControllerGenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.active_channels) {
      ActiveChannel.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.interchain_accounts) {
      RegisteredInterchainAccount.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.ports) {
      writer.uint32(26).string(v!);
    }
    if (message.params !== undefined) {
      Params1.encode(message.params, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ControllerGenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseControllerGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.active_channels.push(ActiveChannel.decode(reader, reader.uint32()));
          break;
        case 2:
          message.interchain_accounts.push(RegisteredInterchainAccount.decode(reader, reader.uint32()));
          break;
        case 3:
          message.ports.push(reader.string());
          break;
        case 4:
          message.params = Params1.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ControllerGenesisState {
    return {
      active_channels: Array.isArray(object?.active_channels) ? object.active_channels.map((e: any) => ActiveChannel.fromJSON(e)) : [],
      interchain_accounts: Array.isArray(object?.interchain_accounts) ? object.interchain_accounts.map((e: any) => RegisteredInterchainAccount.fromJSON(e)) : [],
      ports: Array.isArray(object?.ports) ? object.ports.map((e: any) => String(e)) : [],
      params: isSet(object.params) ? Params1.fromJSON(object.params) : undefined
    };
  },
  toJSON(message: ControllerGenesisState): unknown {
    const obj: any = {};
    if (message.active_channels) {
      obj.active_channels = message.active_channels.map(e => e ? ActiveChannel.toJSON(e) : undefined);
    } else {
      obj.active_channels = [];
    }
    if (message.interchain_accounts) {
      obj.interchain_accounts = message.interchain_accounts.map(e => e ? RegisteredInterchainAccount.toJSON(e) : undefined);
    } else {
      obj.interchain_accounts = [];
    }
    if (message.ports) {
      obj.ports = message.ports.map(e => e);
    } else {
      obj.ports = [];
    }
    message.params !== undefined && (obj.params = message.params ? Params1.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: Partial<ControllerGenesisState>): ControllerGenesisState {
    const message = createBaseControllerGenesisState();
    message.active_channels = object.active_channels?.map(e => ActiveChannel.fromPartial(e)) || [];
    message.interchain_accounts = object.interchain_accounts?.map(e => RegisteredInterchainAccount.fromPartial(e)) || [];
    message.ports = object.ports?.map(e => e) || [];
    message.params = object.params !== undefined && object.params !== null ? Params1.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: ControllerGenesisStateAmino): ControllerGenesisState {
    const message = createBaseControllerGenesisState();
    message.active_channels = object.active_channels?.map(e => ActiveChannel.fromAmino(e)) || [];
    message.interchain_accounts = object.interchain_accounts?.map(e => RegisteredInterchainAccount.fromAmino(e)) || [];
    message.ports = object.ports?.map(e => e) || [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params1.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: ControllerGenesisState): ControllerGenesisStateAmino {
    const obj: any = {};
    if (message.active_channels) {
      obj.active_channels = message.active_channels.map(e => e ? ActiveChannel.toAmino(e) : undefined);
    } else {
      obj.active_channels = [];
    }
    if (message.interchain_accounts) {
      obj.interchain_accounts = message.interchain_accounts.map(e => e ? RegisteredInterchainAccount.toAmino(e) : undefined);
    } else {
      obj.interchain_accounts = [];
    }
    if (message.ports) {
      obj.ports = message.ports.map(e => e);
    } else {
      obj.ports = [];
    }
    obj.params = message.params ? Params1.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: ControllerGenesisStateAminoMsg): ControllerGenesisState {
    return ControllerGenesisState.fromAmino(object.value);
  },
  toAminoMsg(message: ControllerGenesisState): ControllerGenesisStateAminoMsg {
    return {
      type: "cosmos-sdk/ControllerGenesisState",
      value: ControllerGenesisState.toAmino(message)
    };
  },
  fromProtoMsg(message: ControllerGenesisStateProtoMsg): ControllerGenesisState {
    return ControllerGenesisState.decode(message.value);
  },
  toProto(message: ControllerGenesisState): Uint8Array {
    return ControllerGenesisState.encode(message).finish();
  },
  toProtoMsg(message: ControllerGenesisState): ControllerGenesisStateProtoMsg {
    return {
      typeUrl: "/ibc.applications.interchain_accounts.genesis.v1.ControllerGenesisState",
      value: ControllerGenesisState.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ControllerGenesisState.typeUrl, ControllerGenesisState);
GlobalDecoderRegistry.registerAminoProtoMapping(ControllerGenesisState.aminoType, ControllerGenesisState.typeUrl);
function createBaseHostGenesisState(): HostGenesisState {
  return {
    active_channels: [],
    interchain_accounts: [],
    port: "",
    params: Params2.fromPartial({})
  };
}
export const HostGenesisState = {
  typeUrl: "/ibc.applications.interchain_accounts.genesis.v1.HostGenesisState",
  aminoType: "cosmos-sdk/HostGenesisState",
  is(o: any): o is HostGenesisState {
    return o && (o.$typeUrl === HostGenesisState.typeUrl || Array.isArray(o.active_channels) && (!o.active_channels.length || ActiveChannel.is(o.active_channels[0])) && Array.isArray(o.interchain_accounts) && (!o.interchain_accounts.length || RegisteredInterchainAccount.is(o.interchain_accounts[0])) && typeof o.port === "string" && Params2.is(o.params));
  },
  isSDK(o: any): o is HostGenesisStateSDKType {
    return o && (o.$typeUrl === HostGenesisState.typeUrl || Array.isArray(o.active_channels) && (!o.active_channels.length || ActiveChannel.isSDK(o.active_channels[0])) && Array.isArray(o.interchain_accounts) && (!o.interchain_accounts.length || RegisteredInterchainAccount.isSDK(o.interchain_accounts[0])) && typeof o.port === "string" && Params2.isSDK(o.params));
  },
  isAmino(o: any): o is HostGenesisStateAmino {
    return o && (o.$typeUrl === HostGenesisState.typeUrl || Array.isArray(o.active_channels) && (!o.active_channels.length || ActiveChannel.isAmino(o.active_channels[0])) && Array.isArray(o.interchain_accounts) && (!o.interchain_accounts.length || RegisteredInterchainAccount.isAmino(o.interchain_accounts[0])) && typeof o.port === "string" && Params2.isAmino(o.params));
  },
  encode(message: HostGenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.active_channels) {
      ActiveChannel.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.interchain_accounts) {
      RegisteredInterchainAccount.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.port !== "") {
      writer.uint32(26).string(message.port);
    }
    if (message.params !== undefined) {
      Params2.encode(message.params, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): HostGenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHostGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.active_channels.push(ActiveChannel.decode(reader, reader.uint32()));
          break;
        case 2:
          message.interchain_accounts.push(RegisteredInterchainAccount.decode(reader, reader.uint32()));
          break;
        case 3:
          message.port = reader.string();
          break;
        case 4:
          message.params = Params2.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): HostGenesisState {
    return {
      active_channels: Array.isArray(object?.active_channels) ? object.active_channels.map((e: any) => ActiveChannel.fromJSON(e)) : [],
      interchain_accounts: Array.isArray(object?.interchain_accounts) ? object.interchain_accounts.map((e: any) => RegisteredInterchainAccount.fromJSON(e)) : [],
      port: isSet(object.port) ? String(object.port) : "",
      params: isSet(object.params) ? Params2.fromJSON(object.params) : undefined
    };
  },
  toJSON(message: HostGenesisState): unknown {
    const obj: any = {};
    if (message.active_channels) {
      obj.active_channels = message.active_channels.map(e => e ? ActiveChannel.toJSON(e) : undefined);
    } else {
      obj.active_channels = [];
    }
    if (message.interchain_accounts) {
      obj.interchain_accounts = message.interchain_accounts.map(e => e ? RegisteredInterchainAccount.toJSON(e) : undefined);
    } else {
      obj.interchain_accounts = [];
    }
    message.port !== undefined && (obj.port = message.port);
    message.params !== undefined && (obj.params = message.params ? Params2.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: Partial<HostGenesisState>): HostGenesisState {
    const message = createBaseHostGenesisState();
    message.active_channels = object.active_channels?.map(e => ActiveChannel.fromPartial(e)) || [];
    message.interchain_accounts = object.interchain_accounts?.map(e => RegisteredInterchainAccount.fromPartial(e)) || [];
    message.port = object.port ?? "";
    message.params = object.params !== undefined && object.params !== null ? Params2.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: HostGenesisStateAmino): HostGenesisState {
    const message = createBaseHostGenesisState();
    message.active_channels = object.active_channels?.map(e => ActiveChannel.fromAmino(e)) || [];
    message.interchain_accounts = object.interchain_accounts?.map(e => RegisteredInterchainAccount.fromAmino(e)) || [];
    if (object.port !== undefined && object.port !== null) {
      message.port = object.port;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params2.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: HostGenesisState): HostGenesisStateAmino {
    const obj: any = {};
    if (message.active_channels) {
      obj.active_channels = message.active_channels.map(e => e ? ActiveChannel.toAmino(e) : undefined);
    } else {
      obj.active_channels = [];
    }
    if (message.interchain_accounts) {
      obj.interchain_accounts = message.interchain_accounts.map(e => e ? RegisteredInterchainAccount.toAmino(e) : undefined);
    } else {
      obj.interchain_accounts = [];
    }
    obj.port = message.port;
    obj.params = message.params ? Params2.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: HostGenesisStateAminoMsg): HostGenesisState {
    return HostGenesisState.fromAmino(object.value);
  },
  toAminoMsg(message: HostGenesisState): HostGenesisStateAminoMsg {
    return {
      type: "cosmos-sdk/HostGenesisState",
      value: HostGenesisState.toAmino(message)
    };
  },
  fromProtoMsg(message: HostGenesisStateProtoMsg): HostGenesisState {
    return HostGenesisState.decode(message.value);
  },
  toProto(message: HostGenesisState): Uint8Array {
    return HostGenesisState.encode(message).finish();
  },
  toProtoMsg(message: HostGenesisState): HostGenesisStateProtoMsg {
    return {
      typeUrl: "/ibc.applications.interchain_accounts.genesis.v1.HostGenesisState",
      value: HostGenesisState.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(HostGenesisState.typeUrl, HostGenesisState);
GlobalDecoderRegistry.registerAminoProtoMapping(HostGenesisState.aminoType, HostGenesisState.typeUrl);
function createBaseActiveChannel(): ActiveChannel {
  return {
    connection_id: "",
    port_id: "",
    channel_id: "",
    is_middleware_enabled: false
  };
}
export const ActiveChannel = {
  typeUrl: "/ibc.applications.interchain_accounts.genesis.v1.ActiveChannel",
  aminoType: "cosmos-sdk/ActiveChannel",
  is(o: any): o is ActiveChannel {
    return o && (o.$typeUrl === ActiveChannel.typeUrl || typeof o.connection_id === "string" && typeof o.port_id === "string" && typeof o.channel_id === "string" && typeof o.is_middleware_enabled === "boolean");
  },
  isSDK(o: any): o is ActiveChannelSDKType {
    return o && (o.$typeUrl === ActiveChannel.typeUrl || typeof o.connection_id === "string" && typeof o.port_id === "string" && typeof o.channel_id === "string" && typeof o.is_middleware_enabled === "boolean");
  },
  isAmino(o: any): o is ActiveChannelAmino {
    return o && (o.$typeUrl === ActiveChannel.typeUrl || typeof o.connection_id === "string" && typeof o.port_id === "string" && typeof o.channel_id === "string" && typeof o.is_middleware_enabled === "boolean");
  },
  encode(message: ActiveChannel, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.connection_id !== "") {
      writer.uint32(10).string(message.connection_id);
    }
    if (message.port_id !== "") {
      writer.uint32(18).string(message.port_id);
    }
    if (message.channel_id !== "") {
      writer.uint32(26).string(message.channel_id);
    }
    if (message.is_middleware_enabled === true) {
      writer.uint32(32).bool(message.is_middleware_enabled);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ActiveChannel {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActiveChannel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connection_id = reader.string();
          break;
        case 2:
          message.port_id = reader.string();
          break;
        case 3:
          message.channel_id = reader.string();
          break;
        case 4:
          message.is_middleware_enabled = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ActiveChannel {
    return {
      connection_id: isSet(object.connection_id) ? String(object.connection_id) : "",
      port_id: isSet(object.port_id) ? String(object.port_id) : "",
      channel_id: isSet(object.channel_id) ? String(object.channel_id) : "",
      is_middleware_enabled: isSet(object.is_middleware_enabled) ? Boolean(object.is_middleware_enabled) : false
    };
  },
  toJSON(message: ActiveChannel): unknown {
    const obj: any = {};
    message.connection_id !== undefined && (obj.connection_id = message.connection_id);
    message.port_id !== undefined && (obj.port_id = message.port_id);
    message.channel_id !== undefined && (obj.channel_id = message.channel_id);
    message.is_middleware_enabled !== undefined && (obj.is_middleware_enabled = message.is_middleware_enabled);
    return obj;
  },
  fromPartial(object: Partial<ActiveChannel>): ActiveChannel {
    const message = createBaseActiveChannel();
    message.connection_id = object.connection_id ?? "";
    message.port_id = object.port_id ?? "";
    message.channel_id = object.channel_id ?? "";
    message.is_middleware_enabled = object.is_middleware_enabled ?? false;
    return message;
  },
  fromAmino(object: ActiveChannelAmino): ActiveChannel {
    const message = createBaseActiveChannel();
    if (object.connection_id !== undefined && object.connection_id !== null) {
      message.connection_id = object.connection_id;
    }
    if (object.port_id !== undefined && object.port_id !== null) {
      message.port_id = object.port_id;
    }
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channel_id = object.channel_id;
    }
    if (object.is_middleware_enabled !== undefined && object.is_middleware_enabled !== null) {
      message.is_middleware_enabled = object.is_middleware_enabled;
    }
    return message;
  },
  toAmino(message: ActiveChannel): ActiveChannelAmino {
    const obj: any = {};
    obj.connection_id = message.connection_id;
    obj.port_id = message.port_id;
    obj.channel_id = message.channel_id;
    obj.is_middleware_enabled = message.is_middleware_enabled;
    return obj;
  },
  fromAminoMsg(object: ActiveChannelAminoMsg): ActiveChannel {
    return ActiveChannel.fromAmino(object.value);
  },
  toAminoMsg(message: ActiveChannel): ActiveChannelAminoMsg {
    return {
      type: "cosmos-sdk/ActiveChannel",
      value: ActiveChannel.toAmino(message)
    };
  },
  fromProtoMsg(message: ActiveChannelProtoMsg): ActiveChannel {
    return ActiveChannel.decode(message.value);
  },
  toProto(message: ActiveChannel): Uint8Array {
    return ActiveChannel.encode(message).finish();
  },
  toProtoMsg(message: ActiveChannel): ActiveChannelProtoMsg {
    return {
      typeUrl: "/ibc.applications.interchain_accounts.genesis.v1.ActiveChannel",
      value: ActiveChannel.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ActiveChannel.typeUrl, ActiveChannel);
GlobalDecoderRegistry.registerAminoProtoMapping(ActiveChannel.aminoType, ActiveChannel.typeUrl);
function createBaseRegisteredInterchainAccount(): RegisteredInterchainAccount {
  return {
    connection_id: "",
    port_id: "",
    account_address: ""
  };
}
export const RegisteredInterchainAccount = {
  typeUrl: "/ibc.applications.interchain_accounts.genesis.v1.RegisteredInterchainAccount",
  aminoType: "cosmos-sdk/RegisteredInterchainAccount",
  is(o: any): o is RegisteredInterchainAccount {
    return o && (o.$typeUrl === RegisteredInterchainAccount.typeUrl || typeof o.connection_id === "string" && typeof o.port_id === "string" && typeof o.account_address === "string");
  },
  isSDK(o: any): o is RegisteredInterchainAccountSDKType {
    return o && (o.$typeUrl === RegisteredInterchainAccount.typeUrl || typeof o.connection_id === "string" && typeof o.port_id === "string" && typeof o.account_address === "string");
  },
  isAmino(o: any): o is RegisteredInterchainAccountAmino {
    return o && (o.$typeUrl === RegisteredInterchainAccount.typeUrl || typeof o.connection_id === "string" && typeof o.port_id === "string" && typeof o.account_address === "string");
  },
  encode(message: RegisteredInterchainAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.connection_id !== "") {
      writer.uint32(10).string(message.connection_id);
    }
    if (message.port_id !== "") {
      writer.uint32(18).string(message.port_id);
    }
    if (message.account_address !== "") {
      writer.uint32(26).string(message.account_address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RegisteredInterchainAccount {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisteredInterchainAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connection_id = reader.string();
          break;
        case 2:
          message.port_id = reader.string();
          break;
        case 3:
          message.account_address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RegisteredInterchainAccount {
    return {
      connection_id: isSet(object.connection_id) ? String(object.connection_id) : "",
      port_id: isSet(object.port_id) ? String(object.port_id) : "",
      account_address: isSet(object.account_address) ? String(object.account_address) : ""
    };
  },
  toJSON(message: RegisteredInterchainAccount): unknown {
    const obj: any = {};
    message.connection_id !== undefined && (obj.connection_id = message.connection_id);
    message.port_id !== undefined && (obj.port_id = message.port_id);
    message.account_address !== undefined && (obj.account_address = message.account_address);
    return obj;
  },
  fromPartial(object: Partial<RegisteredInterchainAccount>): RegisteredInterchainAccount {
    const message = createBaseRegisteredInterchainAccount();
    message.connection_id = object.connection_id ?? "";
    message.port_id = object.port_id ?? "";
    message.account_address = object.account_address ?? "";
    return message;
  },
  fromAmino(object: RegisteredInterchainAccountAmino): RegisteredInterchainAccount {
    const message = createBaseRegisteredInterchainAccount();
    if (object.connection_id !== undefined && object.connection_id !== null) {
      message.connection_id = object.connection_id;
    }
    if (object.port_id !== undefined && object.port_id !== null) {
      message.port_id = object.port_id;
    }
    if (object.account_address !== undefined && object.account_address !== null) {
      message.account_address = object.account_address;
    }
    return message;
  },
  toAmino(message: RegisteredInterchainAccount): RegisteredInterchainAccountAmino {
    const obj: any = {};
    obj.connection_id = message.connection_id;
    obj.port_id = message.port_id;
    obj.account_address = message.account_address;
    return obj;
  },
  fromAminoMsg(object: RegisteredInterchainAccountAminoMsg): RegisteredInterchainAccount {
    return RegisteredInterchainAccount.fromAmino(object.value);
  },
  toAminoMsg(message: RegisteredInterchainAccount): RegisteredInterchainAccountAminoMsg {
    return {
      type: "cosmos-sdk/RegisteredInterchainAccount",
      value: RegisteredInterchainAccount.toAmino(message)
    };
  },
  fromProtoMsg(message: RegisteredInterchainAccountProtoMsg): RegisteredInterchainAccount {
    return RegisteredInterchainAccount.decode(message.value);
  },
  toProto(message: RegisteredInterchainAccount): Uint8Array {
    return RegisteredInterchainAccount.encode(message).finish();
  },
  toProtoMsg(message: RegisteredInterchainAccount): RegisteredInterchainAccountProtoMsg {
    return {
      typeUrl: "/ibc.applications.interchain_accounts.genesis.v1.RegisteredInterchainAccount",
      value: RegisteredInterchainAccount.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(RegisteredInterchainAccount.typeUrl, RegisteredInterchainAccount);
GlobalDecoderRegistry.registerAminoProtoMapping(RegisteredInterchainAccount.aminoType, RegisteredInterchainAccount.typeUrl);
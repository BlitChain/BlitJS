"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisteredInterchainAccount = exports.ActiveChannel = exports.HostGenesisState = exports.ControllerGenesisState = exports.GenesisState = exports.protobufPackage = void 0;
//@ts-nocheck
const controller_1 = require("../../controller/v1/controller");
const host_1 = require("../../host/v1/host");
const binary_1 = require("../../../../../binary");
const helpers_1 = require("../../../../../helpers");
exports.protobufPackage = "ibc.applications.interchain_accounts.genesis.v1";
function createBaseGenesisState() {
    return {
        controller_genesis_state: exports.ControllerGenesisState.fromPartial({}),
        host_genesis_state: exports.HostGenesisState.fromPartial({})
    };
}
exports.GenesisState = {
    typeUrl: "/ibc.applications.interchain_accounts.genesis.v1.GenesisState",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.controller_genesis_state !== undefined) {
            exports.ControllerGenesisState.encode(message.controller_genesis_state, writer.uint32(10).fork()).ldelim();
        }
        if (message.host_genesis_state !== undefined) {
            exports.HostGenesisState.encode(message.host_genesis_state, writer.uint32(18).fork()).ldelim();
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
                    message.controller_genesis_state = exports.ControllerGenesisState.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.host_genesis_state = exports.HostGenesisState.decode(reader, reader.uint32());
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
            controller_genesis_state: (0, helpers_1.isSet)(object.controller_genesis_state) ? exports.ControllerGenesisState.fromJSON(object.controller_genesis_state) : undefined,
            host_genesis_state: (0, helpers_1.isSet)(object.host_genesis_state) ? exports.HostGenesisState.fromJSON(object.host_genesis_state) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.controller_genesis_state !== undefined && (obj.controller_genesis_state = message.controller_genesis_state ? exports.ControllerGenesisState.toJSON(message.controller_genesis_state) : undefined);
        message.host_genesis_state !== undefined && (obj.host_genesis_state = message.host_genesis_state ? exports.HostGenesisState.toJSON(message.host_genesis_state) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.controller_genesis_state = object.controller_genesis_state !== undefined && object.controller_genesis_state !== null ? exports.ControllerGenesisState.fromPartial(object.controller_genesis_state) : undefined;
        message.host_genesis_state = object.host_genesis_state !== undefined && object.host_genesis_state !== null ? exports.HostGenesisState.fromPartial(object.host_genesis_state) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        if (object.controller_genesis_state !== undefined && object.controller_genesis_state !== null) {
            message.controller_genesis_state = exports.ControllerGenesisState.fromAmino(object.controller_genesis_state);
        }
        if (object.host_genesis_state !== undefined && object.host_genesis_state !== null) {
            message.host_genesis_state = exports.HostGenesisState.fromAmino(object.host_genesis_state);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.controller_genesis_state = message.controller_genesis_state ? exports.ControllerGenesisState.toAmino(message.controller_genesis_state) : undefined;
        obj.host_genesis_state = message.host_genesis_state ? exports.HostGenesisState.toAmino(message.host_genesis_state) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GenesisState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GenesisState",
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
            typeUrl: "/ibc.applications.interchain_accounts.genesis.v1.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
function createBaseControllerGenesisState() {
    return {
        active_channels: [],
        interchain_accounts: [],
        ports: [],
        params: controller_1.Params.fromPartial({})
    };
}
exports.ControllerGenesisState = {
    typeUrl: "/ibc.applications.interchain_accounts.genesis.v1.ControllerGenesisState",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.active_channels) {
            exports.ActiveChannel.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.interchain_accounts) {
            exports.RegisteredInterchainAccount.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.ports) {
            writer.uint32(26).string(v);
        }
        if (message.params !== undefined) {
            controller_1.Params.encode(message.params, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseControllerGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.active_channels.push(exports.ActiveChannel.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.interchain_accounts.push(exports.RegisteredInterchainAccount.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.ports.push(reader.string());
                    break;
                case 4:
                    message.params = controller_1.Params.decode(reader, reader.uint32());
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
            active_channels: Array.isArray(object?.active_channels) ? object.active_channels.map((e) => exports.ActiveChannel.fromJSON(e)) : [],
            interchain_accounts: Array.isArray(object?.interchain_accounts) ? object.interchain_accounts.map((e) => exports.RegisteredInterchainAccount.fromJSON(e)) : [],
            ports: Array.isArray(object?.ports) ? object.ports.map((e) => String(e)) : [],
            params: (0, helpers_1.isSet)(object.params) ? controller_1.Params.fromJSON(object.params) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.active_channels) {
            obj.active_channels = message.active_channels.map(e => e ? exports.ActiveChannel.toJSON(e) : undefined);
        }
        else {
            obj.active_channels = [];
        }
        if (message.interchain_accounts) {
            obj.interchain_accounts = message.interchain_accounts.map(e => e ? exports.RegisteredInterchainAccount.toJSON(e) : undefined);
        }
        else {
            obj.interchain_accounts = [];
        }
        if (message.ports) {
            obj.ports = message.ports.map(e => e);
        }
        else {
            obj.ports = [];
        }
        message.params !== undefined && (obj.params = message.params ? controller_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseControllerGenesisState();
        message.active_channels = object.active_channels?.map(e => exports.ActiveChannel.fromPartial(e)) || [];
        message.interchain_accounts = object.interchain_accounts?.map(e => exports.RegisteredInterchainAccount.fromPartial(e)) || [];
        message.ports = object.ports?.map(e => e) || [];
        message.params = object.params !== undefined && object.params !== null ? controller_1.Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseControllerGenesisState();
        message.active_channels = object.active_channels?.map(e => exports.ActiveChannel.fromAmino(e)) || [];
        message.interchain_accounts = object.interchain_accounts?.map(e => exports.RegisteredInterchainAccount.fromAmino(e)) || [];
        message.ports = object.ports?.map(e => e) || [];
        if (object.params !== undefined && object.params !== null) {
            message.params = controller_1.Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.active_channels) {
            obj.active_channels = message.active_channels.map(e => e ? exports.ActiveChannel.toAmino(e) : undefined);
        }
        else {
            obj.active_channels = [];
        }
        if (message.interchain_accounts) {
            obj.interchain_accounts = message.interchain_accounts.map(e => e ? exports.RegisteredInterchainAccount.toAmino(e) : undefined);
        }
        else {
            obj.interchain_accounts = [];
        }
        if (message.ports) {
            obj.ports = message.ports.map(e => e);
        }
        else {
            obj.ports = [];
        }
        obj.params = message.params ? controller_1.Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ControllerGenesisState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ControllerGenesisState",
            value: exports.ControllerGenesisState.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ControllerGenesisState.decode(message.value);
    },
    toProto(message) {
        return exports.ControllerGenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.interchain_accounts.genesis.v1.ControllerGenesisState",
            value: exports.ControllerGenesisState.encode(message).finish()
        };
    }
};
function createBaseHostGenesisState() {
    return {
        active_channels: [],
        interchain_accounts: [],
        port: "",
        params: host_1.Params.fromPartial({})
    };
}
exports.HostGenesisState = {
    typeUrl: "/ibc.applications.interchain_accounts.genesis.v1.HostGenesisState",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.active_channels) {
            exports.ActiveChannel.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.interchain_accounts) {
            exports.RegisteredInterchainAccount.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.port !== "") {
            writer.uint32(26).string(message.port);
        }
        if (message.params !== undefined) {
            host_1.Params.encode(message.params, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseHostGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.active_channels.push(exports.ActiveChannel.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.interchain_accounts.push(exports.RegisteredInterchainAccount.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.port = reader.string();
                    break;
                case 4:
                    message.params = host_1.Params.decode(reader, reader.uint32());
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
            active_channels: Array.isArray(object?.active_channels) ? object.active_channels.map((e) => exports.ActiveChannel.fromJSON(e)) : [],
            interchain_accounts: Array.isArray(object?.interchain_accounts) ? object.interchain_accounts.map((e) => exports.RegisteredInterchainAccount.fromJSON(e)) : [],
            port: (0, helpers_1.isSet)(object.port) ? String(object.port) : "",
            params: (0, helpers_1.isSet)(object.params) ? host_1.Params.fromJSON(object.params) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.active_channels) {
            obj.active_channels = message.active_channels.map(e => e ? exports.ActiveChannel.toJSON(e) : undefined);
        }
        else {
            obj.active_channels = [];
        }
        if (message.interchain_accounts) {
            obj.interchain_accounts = message.interchain_accounts.map(e => e ? exports.RegisteredInterchainAccount.toJSON(e) : undefined);
        }
        else {
            obj.interchain_accounts = [];
        }
        message.port !== undefined && (obj.port = message.port);
        message.params !== undefined && (obj.params = message.params ? host_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseHostGenesisState();
        message.active_channels = object.active_channels?.map(e => exports.ActiveChannel.fromPartial(e)) || [];
        message.interchain_accounts = object.interchain_accounts?.map(e => exports.RegisteredInterchainAccount.fromPartial(e)) || [];
        message.port = object.port ?? "";
        message.params = object.params !== undefined && object.params !== null ? host_1.Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseHostGenesisState();
        message.active_channels = object.active_channels?.map(e => exports.ActiveChannel.fromAmino(e)) || [];
        message.interchain_accounts = object.interchain_accounts?.map(e => exports.RegisteredInterchainAccount.fromAmino(e)) || [];
        if (object.port !== undefined && object.port !== null) {
            message.port = object.port;
        }
        if (object.params !== undefined && object.params !== null) {
            message.params = host_1.Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.active_channels) {
            obj.active_channels = message.active_channels.map(e => e ? exports.ActiveChannel.toAmino(e) : undefined);
        }
        else {
            obj.active_channels = [];
        }
        if (message.interchain_accounts) {
            obj.interchain_accounts = message.interchain_accounts.map(e => e ? exports.RegisteredInterchainAccount.toAmino(e) : undefined);
        }
        else {
            obj.interchain_accounts = [];
        }
        obj.port = message.port;
        obj.params = message.params ? host_1.Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.HostGenesisState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/HostGenesisState",
            value: exports.HostGenesisState.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.HostGenesisState.decode(message.value);
    },
    toProto(message) {
        return exports.HostGenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.interchain_accounts.genesis.v1.HostGenesisState",
            value: exports.HostGenesisState.encode(message).finish()
        };
    }
};
function createBaseActiveChannel() {
    return {
        connection_id: "",
        port_id: "",
        channel_id: "",
        is_middleware_enabled: false
    };
}
exports.ActiveChannel = {
    typeUrl: "/ibc.applications.interchain_accounts.genesis.v1.ActiveChannel",
    encode(message, writer = binary_1.BinaryWriter.create()) {
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
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
    fromJSON(object) {
        return {
            connection_id: (0, helpers_1.isSet)(object.connection_id) ? String(object.connection_id) : "",
            port_id: (0, helpers_1.isSet)(object.port_id) ? String(object.port_id) : "",
            channel_id: (0, helpers_1.isSet)(object.channel_id) ? String(object.channel_id) : "",
            is_middleware_enabled: (0, helpers_1.isSet)(object.is_middleware_enabled) ? Boolean(object.is_middleware_enabled) : false
        };
    },
    toJSON(message) {
        const obj = {};
        message.connection_id !== undefined && (obj.connection_id = message.connection_id);
        message.port_id !== undefined && (obj.port_id = message.port_id);
        message.channel_id !== undefined && (obj.channel_id = message.channel_id);
        message.is_middleware_enabled !== undefined && (obj.is_middleware_enabled = message.is_middleware_enabled);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseActiveChannel();
        message.connection_id = object.connection_id ?? "";
        message.port_id = object.port_id ?? "";
        message.channel_id = object.channel_id ?? "";
        message.is_middleware_enabled = object.is_middleware_enabled ?? false;
        return message;
    },
    fromAmino(object) {
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
    toAmino(message) {
        const obj = {};
        obj.connection_id = message.connection_id;
        obj.port_id = message.port_id;
        obj.channel_id = message.channel_id;
        obj.is_middleware_enabled = message.is_middleware_enabled;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ActiveChannel.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ActiveChannel",
            value: exports.ActiveChannel.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ActiveChannel.decode(message.value);
    },
    toProto(message) {
        return exports.ActiveChannel.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.interchain_accounts.genesis.v1.ActiveChannel",
            value: exports.ActiveChannel.encode(message).finish()
        };
    }
};
function createBaseRegisteredInterchainAccount() {
    return {
        connection_id: "",
        port_id: "",
        account_address: ""
    };
}
exports.RegisteredInterchainAccount = {
    typeUrl: "/ibc.applications.interchain_accounts.genesis.v1.RegisteredInterchainAccount",
    encode(message, writer = binary_1.BinaryWriter.create()) {
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
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
    fromJSON(object) {
        return {
            connection_id: (0, helpers_1.isSet)(object.connection_id) ? String(object.connection_id) : "",
            port_id: (0, helpers_1.isSet)(object.port_id) ? String(object.port_id) : "",
            account_address: (0, helpers_1.isSet)(object.account_address) ? String(object.account_address) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.connection_id !== undefined && (obj.connection_id = message.connection_id);
        message.port_id !== undefined && (obj.port_id = message.port_id);
        message.account_address !== undefined && (obj.account_address = message.account_address);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRegisteredInterchainAccount();
        message.connection_id = object.connection_id ?? "";
        message.port_id = object.port_id ?? "";
        message.account_address = object.account_address ?? "";
        return message;
    },
    fromAmino(object) {
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
    toAmino(message) {
        const obj = {};
        obj.connection_id = message.connection_id;
        obj.port_id = message.port_id;
        obj.account_address = message.account_address;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.RegisteredInterchainAccount.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/RegisteredInterchainAccount",
            value: exports.RegisteredInterchainAccount.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.RegisteredInterchainAccount.decode(message.value);
    },
    toProto(message) {
        return exports.RegisteredInterchainAccount.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.interchain_accounts.genesis.v1.RegisteredInterchainAccount",
            value: exports.RegisteredInterchainAccount.encode(message).finish()
        };
    }
};
//# sourceMappingURL=genesis.js.map
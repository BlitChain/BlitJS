"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = exports.protobufPackage = void 0;
//@ts-nocheck
const connection_1 = require("./connection");
const binary_1 = require("../../../../binary");
const helpers_1 = require("../../../../helpers");
const registry_1 = require("../../../../registry");
exports.protobufPackage = "ibc.core.connection.v1";
function createBaseGenesisState() {
    return {
        connections: [],
        client_connection_paths: [],
        next_connection_sequence: BigInt(0),
        params: connection_1.Params.fromPartial({})
    };
}
exports.GenesisState = {
    typeUrl: "/ibc.core.connection.v1.GenesisState",
    aminoType: "cosmos-sdk/GenesisState",
    is(o) {
        return o && (o.$typeUrl === exports.GenesisState.typeUrl || Array.isArray(o.connections) && (!o.connections.length || connection_1.IdentifiedConnection.is(o.connections[0])) && Array.isArray(o.client_connection_paths) && (!o.client_connection_paths.length || connection_1.ConnectionPaths.is(o.client_connection_paths[0])) && typeof o.next_connection_sequence === "bigint" && connection_1.Params.is(o.params));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.GenesisState.typeUrl || Array.isArray(o.connections) && (!o.connections.length || connection_1.IdentifiedConnection.isSDK(o.connections[0])) && Array.isArray(o.client_connection_paths) && (!o.client_connection_paths.length || connection_1.ConnectionPaths.isSDK(o.client_connection_paths[0])) && typeof o.next_connection_sequence === "bigint" && connection_1.Params.isSDK(o.params));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.GenesisState.typeUrl || Array.isArray(o.connections) && (!o.connections.length || connection_1.IdentifiedConnection.isAmino(o.connections[0])) && Array.isArray(o.client_connection_paths) && (!o.client_connection_paths.length || connection_1.ConnectionPaths.isAmino(o.client_connection_paths[0])) && typeof o.next_connection_sequence === "bigint" && connection_1.Params.isAmino(o.params));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.connections) {
            connection_1.IdentifiedConnection.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.client_connection_paths) {
            connection_1.ConnectionPaths.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.next_connection_sequence !== BigInt(0)) {
            writer.uint32(24).uint64(message.next_connection_sequence);
        }
        if (message.params !== undefined) {
            connection_1.Params.encode(message.params, writer.uint32(34).fork()).ldelim();
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
                    message.connections.push(connection_1.IdentifiedConnection.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.client_connection_paths.push(connection_1.ConnectionPaths.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.next_connection_sequence = reader.uint64();
                    break;
                case 4:
                    message.params = connection_1.Params.decode(reader, reader.uint32());
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
            connections: Array.isArray(object?.connections) ? object.connections.map((e) => connection_1.IdentifiedConnection.fromJSON(e)) : [],
            client_connection_paths: Array.isArray(object?.client_connection_paths) ? object.client_connection_paths.map((e) => connection_1.ConnectionPaths.fromJSON(e)) : [],
            next_connection_sequence: (0, helpers_1.isSet)(object.next_connection_sequence) ? BigInt(object.next_connection_sequence.toString()) : BigInt(0),
            params: (0, helpers_1.isSet)(object.params) ? connection_1.Params.fromJSON(object.params) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.connections) {
            obj.connections = message.connections.map(e => e ? connection_1.IdentifiedConnection.toJSON(e) : undefined);
        }
        else {
            obj.connections = [];
        }
        if (message.client_connection_paths) {
            obj.client_connection_paths = message.client_connection_paths.map(e => e ? connection_1.ConnectionPaths.toJSON(e) : undefined);
        }
        else {
            obj.client_connection_paths = [];
        }
        message.next_connection_sequence !== undefined && (obj.next_connection_sequence = (message.next_connection_sequence || BigInt(0)).toString());
        message.params !== undefined && (obj.params = message.params ? connection_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.connections = object.connections?.map(e => connection_1.IdentifiedConnection.fromPartial(e)) || [];
        message.client_connection_paths = object.client_connection_paths?.map(e => connection_1.ConnectionPaths.fromPartial(e)) || [];
        message.next_connection_sequence = object.next_connection_sequence !== undefined && object.next_connection_sequence !== null ? BigInt(object.next_connection_sequence.toString()) : BigInt(0);
        message.params = object.params !== undefined && object.params !== null ? connection_1.Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        message.connections = object.connections?.map(e => connection_1.IdentifiedConnection.fromAmino(e)) || [];
        message.client_connection_paths = object.client_connection_paths?.map(e => connection_1.ConnectionPaths.fromAmino(e)) || [];
        if (object.next_connection_sequence !== undefined && object.next_connection_sequence !== null) {
            message.next_connection_sequence = BigInt(object.next_connection_sequence);
        }
        if (object.params !== undefined && object.params !== null) {
            message.params = connection_1.Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.connections) {
            obj.connections = message.connections.map(e => e ? connection_1.IdentifiedConnection.toAmino(e) : undefined);
        }
        else {
            obj.connections = [];
        }
        if (message.client_connection_paths) {
            obj.client_connection_paths = message.client_connection_paths.map(e => e ? connection_1.ConnectionPaths.toAmino(e) : undefined);
        }
        else {
            obj.client_connection_paths = [];
        }
        obj.next_connection_sequence = message.next_connection_sequence ? message.next_connection_sequence.toString() : undefined;
        obj.params = message.params ? connection_1.Params.toAmino(message.params) : undefined;
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
            typeUrl: "/ibc.core.connection.v1.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.GenesisState.typeUrl, exports.GenesisState);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.GenesisState.aminoType, exports.GenesisState.typeUrl);
//# sourceMappingURL=genesis.js.map
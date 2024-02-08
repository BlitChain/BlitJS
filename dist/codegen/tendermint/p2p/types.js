"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultNodeInfoOther = exports.DefaultNodeInfo = exports.ProtocolVersion = exports.NetAddress = exports.protobufPackage = void 0;
//@ts-nocheck
const binary_1 = require("../../binary");
const helpers_1 = require("../../helpers");
exports.protobufPackage = "tendermint.p2p";
function createBaseNetAddress() {
    return {
        id: "",
        ip: "",
        port: 0
    };
}
exports.NetAddress = {
    typeUrl: "/tendermint.p2p.NetAddress",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.ip !== "") {
            writer.uint32(18).string(message.ip);
        }
        if (message.port !== 0) {
            writer.uint32(24).uint32(message.port);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseNetAddress();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.ip = reader.string();
                    break;
                case 3:
                    message.port = reader.uint32();
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
            id: (0, helpers_1.isSet)(object.id) ? String(object.id) : "",
            ip: (0, helpers_1.isSet)(object.ip) ? String(object.ip) : "",
            port: (0, helpers_1.isSet)(object.port) ? Number(object.port) : 0
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.ip !== undefined && (obj.ip = message.ip);
        message.port !== undefined && (obj.port = Math.round(message.port));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseNetAddress();
        message.id = object.id ?? "";
        message.ip = object.ip ?? "";
        message.port = object.port ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseNetAddress();
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        if (object.ip !== undefined && object.ip !== null) {
            message.ip = object.ip;
        }
        if (object.port !== undefined && object.port !== null) {
            message.port = object.port;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id;
        obj.ip = message.ip;
        obj.port = message.port;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.NetAddress.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.NetAddress.decode(message.value);
    },
    toProto(message) {
        return exports.NetAddress.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.p2p.NetAddress",
            value: exports.NetAddress.encode(message).finish()
        };
    }
};
function createBaseProtocolVersion() {
    return {
        p2p: BigInt(0),
        block: BigInt(0),
        app: BigInt(0)
    };
}
exports.ProtocolVersion = {
    typeUrl: "/tendermint.p2p.ProtocolVersion",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.p2p !== BigInt(0)) {
            writer.uint32(8).uint64(message.p2p);
        }
        if (message.block !== BigInt(0)) {
            writer.uint32(16).uint64(message.block);
        }
        if (message.app !== BigInt(0)) {
            writer.uint32(24).uint64(message.app);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProtocolVersion();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.p2p = reader.uint64();
                    break;
                case 2:
                    message.block = reader.uint64();
                    break;
                case 3:
                    message.app = reader.uint64();
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
            p2p: (0, helpers_1.isSet)(object.p2p) ? BigInt(object.p2p.toString()) : BigInt(0),
            block: (0, helpers_1.isSet)(object.block) ? BigInt(object.block.toString()) : BigInt(0),
            app: (0, helpers_1.isSet)(object.app) ? BigInt(object.app.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.p2p !== undefined && (obj.p2p = (message.p2p || BigInt(0)).toString());
        message.block !== undefined && (obj.block = (message.block || BigInt(0)).toString());
        message.app !== undefined && (obj.app = (message.app || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseProtocolVersion();
        message.p2p = object.p2p !== undefined && object.p2p !== null ? BigInt(object.p2p.toString()) : BigInt(0);
        message.block = object.block !== undefined && object.block !== null ? BigInt(object.block.toString()) : BigInt(0);
        message.app = object.app !== undefined && object.app !== null ? BigInt(object.app.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseProtocolVersion();
        if (object.p2p !== undefined && object.p2p !== null) {
            message.p2p = BigInt(object.p2p);
        }
        if (object.block !== undefined && object.block !== null) {
            message.block = BigInt(object.block);
        }
        if (object.app !== undefined && object.app !== null) {
            message.app = BigInt(object.app);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.p2p = message.p2p ? message.p2p.toString() : undefined;
        obj.block = message.block ? message.block.toString() : undefined;
        obj.app = message.app ? message.app.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ProtocolVersion.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ProtocolVersion.decode(message.value);
    },
    toProto(message) {
        return exports.ProtocolVersion.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.p2p.ProtocolVersion",
            value: exports.ProtocolVersion.encode(message).finish()
        };
    }
};
function createBaseDefaultNodeInfo() {
    return {
        protocol_version: exports.ProtocolVersion.fromPartial({}),
        default_node_id: "",
        listen_addr: "",
        network: "",
        version: "",
        channels: new Uint8Array(),
        moniker: "",
        other: exports.DefaultNodeInfoOther.fromPartial({})
    };
}
exports.DefaultNodeInfo = {
    typeUrl: "/tendermint.p2p.DefaultNodeInfo",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.protocol_version !== undefined) {
            exports.ProtocolVersion.encode(message.protocol_version, writer.uint32(10).fork()).ldelim();
        }
        if (message.default_node_id !== "") {
            writer.uint32(18).string(message.default_node_id);
        }
        if (message.listen_addr !== "") {
            writer.uint32(26).string(message.listen_addr);
        }
        if (message.network !== "") {
            writer.uint32(34).string(message.network);
        }
        if (message.version !== "") {
            writer.uint32(42).string(message.version);
        }
        if (message.channels.length !== 0) {
            writer.uint32(50).bytes(message.channels);
        }
        if (message.moniker !== "") {
            writer.uint32(58).string(message.moniker);
        }
        if (message.other !== undefined) {
            exports.DefaultNodeInfoOther.encode(message.other, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDefaultNodeInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.protocol_version = exports.ProtocolVersion.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.default_node_id = reader.string();
                    break;
                case 3:
                    message.listen_addr = reader.string();
                    break;
                case 4:
                    message.network = reader.string();
                    break;
                case 5:
                    message.version = reader.string();
                    break;
                case 6:
                    message.channels = reader.bytes();
                    break;
                case 7:
                    message.moniker = reader.string();
                    break;
                case 8:
                    message.other = exports.DefaultNodeInfoOther.decode(reader, reader.uint32());
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
            protocol_version: (0, helpers_1.isSet)(object.protocol_version) ? exports.ProtocolVersion.fromJSON(object.protocol_version) : undefined,
            default_node_id: (0, helpers_1.isSet)(object.default_node_id) ? String(object.default_node_id) : "",
            listen_addr: (0, helpers_1.isSet)(object.listen_addr) ? String(object.listen_addr) : "",
            network: (0, helpers_1.isSet)(object.network) ? String(object.network) : "",
            version: (0, helpers_1.isSet)(object.version) ? String(object.version) : "",
            channels: (0, helpers_1.isSet)(object.channels) ? (0, helpers_1.bytesFromBase64)(object.channels) : new Uint8Array(),
            moniker: (0, helpers_1.isSet)(object.moniker) ? String(object.moniker) : "",
            other: (0, helpers_1.isSet)(object.other) ? exports.DefaultNodeInfoOther.fromJSON(object.other) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.protocol_version !== undefined && (obj.protocol_version = message.protocol_version ? exports.ProtocolVersion.toJSON(message.protocol_version) : undefined);
        message.default_node_id !== undefined && (obj.default_node_id = message.default_node_id);
        message.listen_addr !== undefined && (obj.listen_addr = message.listen_addr);
        message.network !== undefined && (obj.network = message.network);
        message.version !== undefined && (obj.version = message.version);
        message.channels !== undefined && (obj.channels = (0, helpers_1.base64FromBytes)(message.channels !== undefined ? message.channels : new Uint8Array()));
        message.moniker !== undefined && (obj.moniker = message.moniker);
        message.other !== undefined && (obj.other = message.other ? exports.DefaultNodeInfoOther.toJSON(message.other) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDefaultNodeInfo();
        message.protocol_version = object.protocol_version !== undefined && object.protocol_version !== null ? exports.ProtocolVersion.fromPartial(object.protocol_version) : undefined;
        message.default_node_id = object.default_node_id ?? "";
        message.listen_addr = object.listen_addr ?? "";
        message.network = object.network ?? "";
        message.version = object.version ?? "";
        message.channels = object.channels ?? new Uint8Array();
        message.moniker = object.moniker ?? "";
        message.other = object.other !== undefined && object.other !== null ? exports.DefaultNodeInfoOther.fromPartial(object.other) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseDefaultNodeInfo();
        if (object.protocol_version !== undefined && object.protocol_version !== null) {
            message.protocol_version = exports.ProtocolVersion.fromAmino(object.protocol_version);
        }
        if (object.default_node_id !== undefined && object.default_node_id !== null) {
            message.default_node_id = object.default_node_id;
        }
        if (object.listen_addr !== undefined && object.listen_addr !== null) {
            message.listen_addr = object.listen_addr;
        }
        if (object.network !== undefined && object.network !== null) {
            message.network = object.network;
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = object.version;
        }
        if (object.channels !== undefined && object.channels !== null) {
            message.channels = (0, helpers_1.bytesFromBase64)(object.channels);
        }
        if (object.moniker !== undefined && object.moniker !== null) {
            message.moniker = object.moniker;
        }
        if (object.other !== undefined && object.other !== null) {
            message.other = exports.DefaultNodeInfoOther.fromAmino(object.other);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.protocol_version = message.protocol_version ? exports.ProtocolVersion.toAmino(message.protocol_version) : undefined;
        obj.default_node_id = message.default_node_id;
        obj.listen_addr = message.listen_addr;
        obj.network = message.network;
        obj.version = message.version;
        obj.channels = message.channels ? (0, helpers_1.base64FromBytes)(message.channels) : undefined;
        obj.moniker = message.moniker;
        obj.other = message.other ? exports.DefaultNodeInfoOther.toAmino(message.other) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.DefaultNodeInfo.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.DefaultNodeInfo.decode(message.value);
    },
    toProto(message) {
        return exports.DefaultNodeInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.p2p.DefaultNodeInfo",
            value: exports.DefaultNodeInfo.encode(message).finish()
        };
    }
};
function createBaseDefaultNodeInfoOther() {
    return {
        tx_index: "",
        rpc_address: ""
    };
}
exports.DefaultNodeInfoOther = {
    typeUrl: "/tendermint.p2p.DefaultNodeInfoOther",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.tx_index !== "") {
            writer.uint32(10).string(message.tx_index);
        }
        if (message.rpc_address !== "") {
            writer.uint32(18).string(message.rpc_address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDefaultNodeInfoOther();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tx_index = reader.string();
                    break;
                case 2:
                    message.rpc_address = reader.string();
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
            tx_index: (0, helpers_1.isSet)(object.tx_index) ? String(object.tx_index) : "",
            rpc_address: (0, helpers_1.isSet)(object.rpc_address) ? String(object.rpc_address) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.tx_index !== undefined && (obj.tx_index = message.tx_index);
        message.rpc_address !== undefined && (obj.rpc_address = message.rpc_address);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDefaultNodeInfoOther();
        message.tx_index = object.tx_index ?? "";
        message.rpc_address = object.rpc_address ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseDefaultNodeInfoOther();
        if (object.tx_index !== undefined && object.tx_index !== null) {
            message.tx_index = object.tx_index;
        }
        if (object.rpc_address !== undefined && object.rpc_address !== null) {
            message.rpc_address = object.rpc_address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.tx_index = message.tx_index;
        obj.rpc_address = message.rpc_address;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.DefaultNodeInfoOther.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.DefaultNodeInfoOther.decode(message.value);
    },
    toProto(message) {
        return exports.DefaultNodeInfoOther.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.p2p.DefaultNodeInfoOther",
            value: exports.DefaultNodeInfoOther.encode(message).finish()
        };
    }
};
//# sourceMappingURL=types.js.map
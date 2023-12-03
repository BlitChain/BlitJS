"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = exports.Version = exports.ConnectionPaths = exports.ClientPaths = exports.Counterparty = exports.IdentifiedConnection = exports.ConnectionEnd = exports.stateToJSON = exports.stateFromJSON = exports.StateAmino = exports.StateSDKType = exports.State = exports.protobufPackage = void 0;
//@ts-nocheck
const commitment_1 = require("../../commitment/v1/commitment");
const binary_1 = require("../../../../binary");
const helpers_1 = require("../../../../helpers");
exports.protobufPackage = "ibc.core.connection.v1";
/**
 * State defines if a connection is in one of the following states:
 * INIT, TRYOPEN, OPEN or UNINITIALIZED.
 */
var State;
(function (State) {
    /** STATE_UNINITIALIZED_UNSPECIFIED - Default State */
    State[State["STATE_UNINITIALIZED_UNSPECIFIED"] = 0] = "STATE_UNINITIALIZED_UNSPECIFIED";
    /** STATE_INIT - A connection end has just started the opening handshake. */
    State[State["STATE_INIT"] = 1] = "STATE_INIT";
    /**
     * STATE_TRYOPEN - A connection end has acknowledged the handshake step on the counterparty
     * chain.
     */
    State[State["STATE_TRYOPEN"] = 2] = "STATE_TRYOPEN";
    /** STATE_OPEN - A connection end has completed the handshake. */
    State[State["STATE_OPEN"] = 3] = "STATE_OPEN";
    State[State["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(State || (exports.State = State = {}));
exports.StateSDKType = State;
exports.StateAmino = State;
function stateFromJSON(object) {
    switch (object) {
        case 0:
        case "STATE_UNINITIALIZED_UNSPECIFIED":
            return State.STATE_UNINITIALIZED_UNSPECIFIED;
        case 1:
        case "STATE_INIT":
            return State.STATE_INIT;
        case 2:
        case "STATE_TRYOPEN":
            return State.STATE_TRYOPEN;
        case 3:
        case "STATE_OPEN":
            return State.STATE_OPEN;
        case -1:
        case "UNRECOGNIZED":
        default:
            return State.UNRECOGNIZED;
    }
}
exports.stateFromJSON = stateFromJSON;
function stateToJSON(object) {
    switch (object) {
        case State.STATE_UNINITIALIZED_UNSPECIFIED:
            return "STATE_UNINITIALIZED_UNSPECIFIED";
        case State.STATE_INIT:
            return "STATE_INIT";
        case State.STATE_TRYOPEN:
            return "STATE_TRYOPEN";
        case State.STATE_OPEN:
            return "STATE_OPEN";
        case State.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.stateToJSON = stateToJSON;
function createBaseConnectionEnd() {
    return {
        client_id: "",
        versions: [],
        state: 0,
        counterparty: exports.Counterparty.fromPartial({}),
        delay_period: BigInt(0)
    };
}
exports.ConnectionEnd = {
    typeUrl: "/ibc.core.connection.v1.ConnectionEnd",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.client_id !== "") {
            writer.uint32(10).string(message.client_id);
        }
        for (const v of message.versions) {
            exports.Version.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.state !== 0) {
            writer.uint32(24).int32(message.state);
        }
        if (message.counterparty !== undefined) {
            exports.Counterparty.encode(message.counterparty, writer.uint32(34).fork()).ldelim();
        }
        if (message.delay_period !== BigInt(0)) {
            writer.uint32(40).uint64(message.delay_period);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConnectionEnd();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.client_id = reader.string();
                    break;
                case 2:
                    message.versions.push(exports.Version.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.state = reader.int32();
                    break;
                case 4:
                    message.counterparty = exports.Counterparty.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.delay_period = reader.uint64();
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
            client_id: (0, helpers_1.isSet)(object.client_id) ? String(object.client_id) : "",
            versions: Array.isArray(object?.versions) ? object.versions.map((e) => exports.Version.fromJSON(e)) : [],
            state: (0, helpers_1.isSet)(object.state) ? stateFromJSON(object.state) : -1,
            counterparty: (0, helpers_1.isSet)(object.counterparty) ? exports.Counterparty.fromJSON(object.counterparty) : undefined,
            delay_period: (0, helpers_1.isSet)(object.delay_period) ? BigInt(object.delay_period.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.client_id !== undefined && (obj.client_id = message.client_id);
        if (message.versions) {
            obj.versions = message.versions.map(e => e ? exports.Version.toJSON(e) : undefined);
        }
        else {
            obj.versions = [];
        }
        message.state !== undefined && (obj.state = stateToJSON(message.state));
        message.counterparty !== undefined && (obj.counterparty = message.counterparty ? exports.Counterparty.toJSON(message.counterparty) : undefined);
        message.delay_period !== undefined && (obj.delay_period = (message.delay_period || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseConnectionEnd();
        message.client_id = object.client_id ?? "";
        message.versions = object.versions?.map(e => exports.Version.fromPartial(e)) || [];
        message.state = object.state ?? 0;
        message.counterparty = object.counterparty !== undefined && object.counterparty !== null ? exports.Counterparty.fromPartial(object.counterparty) : undefined;
        message.delay_period = object.delay_period !== undefined && object.delay_period !== null ? BigInt(object.delay_period.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            client_id: object?.client_id,
            versions: Array.isArray(object?.versions) ? object.versions.map((e) => exports.Version.fromSDK(e)) : [],
            state: (0, helpers_1.isSet)(object.state) ? stateFromJSON(object.state) : -1,
            counterparty: object.counterparty ? exports.Counterparty.fromSDK(object.counterparty) : undefined,
            delay_period: object?.delay_period
        };
    },
    toSDK(message) {
        const obj = {};
        obj.client_id = message.client_id;
        if (message.versions) {
            obj.versions = message.versions.map(e => e ? exports.Version.toSDK(e) : undefined);
        }
        else {
            obj.versions = [];
        }
        message.state !== undefined && (obj.state = stateToJSON(message.state));
        message.counterparty !== undefined && (obj.counterparty = message.counterparty ? exports.Counterparty.toSDK(message.counterparty) : undefined);
        obj.delay_period = message.delay_period;
        return obj;
    },
    fromAmino(object) {
        return {
            client_id: object.client_id,
            versions: Array.isArray(object?.versions) ? object.versions.map((e) => exports.Version.fromAmino(e)) : [],
            state: (0, helpers_1.isSet)(object.state) ? stateFromJSON(object.state) : -1,
            counterparty: object?.counterparty ? exports.Counterparty.fromAmino(object.counterparty) : undefined,
            delay_period: BigInt(object.delay_period)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.client_id = message.client_id;
        if (message.versions) {
            obj.versions = message.versions.map(e => e ? exports.Version.toAmino(e) : undefined);
        }
        else {
            obj.versions = [];
        }
        obj.state = message.state;
        obj.counterparty = message.counterparty ? exports.Counterparty.toAmino(message.counterparty) : undefined;
        obj.delay_period = message.delay_period ? message.delay_period.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ConnectionEnd.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ConnectionEnd",
            value: exports.ConnectionEnd.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ConnectionEnd.decode(message.value);
    },
    toProto(message) {
        return exports.ConnectionEnd.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.ConnectionEnd",
            value: exports.ConnectionEnd.encode(message).finish()
        };
    }
};
function createBaseIdentifiedConnection() {
    return {
        id: "",
        client_id: "",
        versions: [],
        state: 0,
        counterparty: exports.Counterparty.fromPartial({}),
        delay_period: BigInt(0)
    };
}
exports.IdentifiedConnection = {
    typeUrl: "/ibc.core.connection.v1.IdentifiedConnection",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.client_id !== "") {
            writer.uint32(18).string(message.client_id);
        }
        for (const v of message.versions) {
            exports.Version.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.state !== 0) {
            writer.uint32(32).int32(message.state);
        }
        if (message.counterparty !== undefined) {
            exports.Counterparty.encode(message.counterparty, writer.uint32(42).fork()).ldelim();
        }
        if (message.delay_period !== BigInt(0)) {
            writer.uint32(48).uint64(message.delay_period);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIdentifiedConnection();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.client_id = reader.string();
                    break;
                case 3:
                    message.versions.push(exports.Version.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.state = reader.int32();
                    break;
                case 5:
                    message.counterparty = exports.Counterparty.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.delay_period = reader.uint64();
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
            client_id: (0, helpers_1.isSet)(object.client_id) ? String(object.client_id) : "",
            versions: Array.isArray(object?.versions) ? object.versions.map((e) => exports.Version.fromJSON(e)) : [],
            state: (0, helpers_1.isSet)(object.state) ? stateFromJSON(object.state) : -1,
            counterparty: (0, helpers_1.isSet)(object.counterparty) ? exports.Counterparty.fromJSON(object.counterparty) : undefined,
            delay_period: (0, helpers_1.isSet)(object.delay_period) ? BigInt(object.delay_period.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.client_id !== undefined && (obj.client_id = message.client_id);
        if (message.versions) {
            obj.versions = message.versions.map(e => e ? exports.Version.toJSON(e) : undefined);
        }
        else {
            obj.versions = [];
        }
        message.state !== undefined && (obj.state = stateToJSON(message.state));
        message.counterparty !== undefined && (obj.counterparty = message.counterparty ? exports.Counterparty.toJSON(message.counterparty) : undefined);
        message.delay_period !== undefined && (obj.delay_period = (message.delay_period || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseIdentifiedConnection();
        message.id = object.id ?? "";
        message.client_id = object.client_id ?? "";
        message.versions = object.versions?.map(e => exports.Version.fromPartial(e)) || [];
        message.state = object.state ?? 0;
        message.counterparty = object.counterparty !== undefined && object.counterparty !== null ? exports.Counterparty.fromPartial(object.counterparty) : undefined;
        message.delay_period = object.delay_period !== undefined && object.delay_period !== null ? BigInt(object.delay_period.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            id: object?.id,
            client_id: object?.client_id,
            versions: Array.isArray(object?.versions) ? object.versions.map((e) => exports.Version.fromSDK(e)) : [],
            state: (0, helpers_1.isSet)(object.state) ? stateFromJSON(object.state) : -1,
            counterparty: object.counterparty ? exports.Counterparty.fromSDK(object.counterparty) : undefined,
            delay_period: object?.delay_period
        };
    },
    toSDK(message) {
        const obj = {};
        obj.id = message.id;
        obj.client_id = message.client_id;
        if (message.versions) {
            obj.versions = message.versions.map(e => e ? exports.Version.toSDK(e) : undefined);
        }
        else {
            obj.versions = [];
        }
        message.state !== undefined && (obj.state = stateToJSON(message.state));
        message.counterparty !== undefined && (obj.counterparty = message.counterparty ? exports.Counterparty.toSDK(message.counterparty) : undefined);
        obj.delay_period = message.delay_period;
        return obj;
    },
    fromAmino(object) {
        return {
            id: object.id,
            client_id: object.client_id,
            versions: Array.isArray(object?.versions) ? object.versions.map((e) => exports.Version.fromAmino(e)) : [],
            state: (0, helpers_1.isSet)(object.state) ? stateFromJSON(object.state) : -1,
            counterparty: object?.counterparty ? exports.Counterparty.fromAmino(object.counterparty) : undefined,
            delay_period: BigInt(object.delay_period)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id;
        obj.client_id = message.client_id;
        if (message.versions) {
            obj.versions = message.versions.map(e => e ? exports.Version.toAmino(e) : undefined);
        }
        else {
            obj.versions = [];
        }
        obj.state = message.state;
        obj.counterparty = message.counterparty ? exports.Counterparty.toAmino(message.counterparty) : undefined;
        obj.delay_period = message.delay_period ? message.delay_period.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.IdentifiedConnection.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/IdentifiedConnection",
            value: exports.IdentifiedConnection.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.IdentifiedConnection.decode(message.value);
    },
    toProto(message) {
        return exports.IdentifiedConnection.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.IdentifiedConnection",
            value: exports.IdentifiedConnection.encode(message).finish()
        };
    }
};
function createBaseCounterparty() {
    return {
        client_id: "",
        connection_id: "",
        prefix: commitment_1.MerklePrefix.fromPartial({})
    };
}
exports.Counterparty = {
    typeUrl: "/ibc.core.connection.v1.Counterparty",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.client_id !== "") {
            writer.uint32(10).string(message.client_id);
        }
        if (message.connection_id !== "") {
            writer.uint32(18).string(message.connection_id);
        }
        if (message.prefix !== undefined) {
            commitment_1.MerklePrefix.encode(message.prefix, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCounterparty();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.client_id = reader.string();
                    break;
                case 2:
                    message.connection_id = reader.string();
                    break;
                case 3:
                    message.prefix = commitment_1.MerklePrefix.decode(reader, reader.uint32());
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
            client_id: (0, helpers_1.isSet)(object.client_id) ? String(object.client_id) : "",
            connection_id: (0, helpers_1.isSet)(object.connection_id) ? String(object.connection_id) : "",
            prefix: (0, helpers_1.isSet)(object.prefix) ? commitment_1.MerklePrefix.fromJSON(object.prefix) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.client_id !== undefined && (obj.client_id = message.client_id);
        message.connection_id !== undefined && (obj.connection_id = message.connection_id);
        message.prefix !== undefined && (obj.prefix = message.prefix ? commitment_1.MerklePrefix.toJSON(message.prefix) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseCounterparty();
        message.client_id = object.client_id ?? "";
        message.connection_id = object.connection_id ?? "";
        message.prefix = object.prefix !== undefined && object.prefix !== null ? commitment_1.MerklePrefix.fromPartial(object.prefix) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            client_id: object?.client_id,
            connection_id: object?.connection_id,
            prefix: object.prefix ? commitment_1.MerklePrefix.fromSDK(object.prefix) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.client_id = message.client_id;
        obj.connection_id = message.connection_id;
        message.prefix !== undefined && (obj.prefix = message.prefix ? commitment_1.MerklePrefix.toSDK(message.prefix) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            client_id: object.client_id,
            connection_id: object.connection_id,
            prefix: object?.prefix ? commitment_1.MerklePrefix.fromAmino(object.prefix) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.client_id = message.client_id;
        obj.connection_id = message.connection_id;
        obj.prefix = message.prefix ? commitment_1.MerklePrefix.toAmino(message.prefix) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Counterparty.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Counterparty",
            value: exports.Counterparty.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Counterparty.decode(message.value);
    },
    toProto(message) {
        return exports.Counterparty.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.Counterparty",
            value: exports.Counterparty.encode(message).finish()
        };
    }
};
function createBaseClientPaths() {
    return {
        paths: []
    };
}
exports.ClientPaths = {
    typeUrl: "/ibc.core.connection.v1.ClientPaths",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.paths) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseClientPaths();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.paths.push(reader.string());
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
            paths: Array.isArray(object?.paths) ? object.paths.map((e) => String(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.paths) {
            obj.paths = message.paths.map(e => e);
        }
        else {
            obj.paths = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseClientPaths();
        message.paths = object.paths?.map(e => e) || [];
        return message;
    },
    fromSDK(object) {
        return {
            paths: Array.isArray(object?.paths) ? object.paths.map((e) => e) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.paths) {
            obj.paths = message.paths.map(e => e);
        }
        else {
            obj.paths = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            paths: Array.isArray(object?.paths) ? object.paths.map((e) => e) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.paths) {
            obj.paths = message.paths.map(e => e);
        }
        else {
            obj.paths = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ClientPaths.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ClientPaths",
            value: exports.ClientPaths.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ClientPaths.decode(message.value);
    },
    toProto(message) {
        return exports.ClientPaths.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.ClientPaths",
            value: exports.ClientPaths.encode(message).finish()
        };
    }
};
function createBaseConnectionPaths() {
    return {
        client_id: "",
        paths: []
    };
}
exports.ConnectionPaths = {
    typeUrl: "/ibc.core.connection.v1.ConnectionPaths",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.client_id !== "") {
            writer.uint32(10).string(message.client_id);
        }
        for (const v of message.paths) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConnectionPaths();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.client_id = reader.string();
                    break;
                case 2:
                    message.paths.push(reader.string());
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
            client_id: (0, helpers_1.isSet)(object.client_id) ? String(object.client_id) : "",
            paths: Array.isArray(object?.paths) ? object.paths.map((e) => String(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.client_id !== undefined && (obj.client_id = message.client_id);
        if (message.paths) {
            obj.paths = message.paths.map(e => e);
        }
        else {
            obj.paths = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseConnectionPaths();
        message.client_id = object.client_id ?? "";
        message.paths = object.paths?.map(e => e) || [];
        return message;
    },
    fromSDK(object) {
        return {
            client_id: object?.client_id,
            paths: Array.isArray(object?.paths) ? object.paths.map((e) => e) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.client_id = message.client_id;
        if (message.paths) {
            obj.paths = message.paths.map(e => e);
        }
        else {
            obj.paths = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            client_id: object.client_id,
            paths: Array.isArray(object?.paths) ? object.paths.map((e) => e) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.client_id = message.client_id;
        if (message.paths) {
            obj.paths = message.paths.map(e => e);
        }
        else {
            obj.paths = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ConnectionPaths.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ConnectionPaths",
            value: exports.ConnectionPaths.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ConnectionPaths.decode(message.value);
    },
    toProto(message) {
        return exports.ConnectionPaths.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.ConnectionPaths",
            value: exports.ConnectionPaths.encode(message).finish()
        };
    }
};
function createBaseVersion() {
    return {
        identifier: "",
        features: []
    };
}
exports.Version = {
    typeUrl: "/ibc.core.connection.v1.Version",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.identifier !== "") {
            writer.uint32(10).string(message.identifier);
        }
        for (const v of message.features) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVersion();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.identifier = reader.string();
                    break;
                case 2:
                    message.features.push(reader.string());
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
            identifier: (0, helpers_1.isSet)(object.identifier) ? String(object.identifier) : "",
            features: Array.isArray(object?.features) ? object.features.map((e) => String(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.identifier !== undefined && (obj.identifier = message.identifier);
        if (message.features) {
            obj.features = message.features.map(e => e);
        }
        else {
            obj.features = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseVersion();
        message.identifier = object.identifier ?? "";
        message.features = object.features?.map(e => e) || [];
        return message;
    },
    fromSDK(object) {
        return {
            identifier: object?.identifier,
            features: Array.isArray(object?.features) ? object.features.map((e) => e) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.identifier = message.identifier;
        if (message.features) {
            obj.features = message.features.map(e => e);
        }
        else {
            obj.features = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            identifier: object.identifier,
            features: Array.isArray(object?.features) ? object.features.map((e) => e) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.identifier = message.identifier;
        if (message.features) {
            obj.features = message.features.map(e => e);
        }
        else {
            obj.features = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Version.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Version",
            value: exports.Version.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Version.decode(message.value);
    },
    toProto(message) {
        return exports.Version.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.Version",
            value: exports.Version.encode(message).finish()
        };
    }
};
function createBaseParams() {
    return {
        max_expected_time_per_block: BigInt(0)
    };
}
exports.Params = {
    typeUrl: "/ibc.core.connection.v1.Params",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.max_expected_time_per_block !== BigInt(0)) {
            writer.uint32(8).uint64(message.max_expected_time_per_block);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.max_expected_time_per_block = reader.uint64();
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
            max_expected_time_per_block: (0, helpers_1.isSet)(object.max_expected_time_per_block) ? BigInt(object.max_expected_time_per_block.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.max_expected_time_per_block !== undefined && (obj.max_expected_time_per_block = (message.max_expected_time_per_block || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.max_expected_time_per_block = object.max_expected_time_per_block !== undefined && object.max_expected_time_per_block !== null ? BigInt(object.max_expected_time_per_block.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            max_expected_time_per_block: object?.max_expected_time_per_block
        };
    },
    toSDK(message) {
        const obj = {};
        obj.max_expected_time_per_block = message.max_expected_time_per_block;
        return obj;
    },
    fromAmino(object) {
        return {
            max_expected_time_per_block: BigInt(object.max_expected_time_per_block)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.max_expected_time_per_block = message.max_expected_time_per_block ? message.max_expected_time_per_block.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Params.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Params",
            value: exports.Params.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Params.decode(message.value);
    },
    toProto(message) {
        return exports.Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.Params",
            value: exports.Params.encode(message).finish()
        };
    }
};
//# sourceMappingURL=connection.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = exports.GenesisOwners = exports.protobufPackage = void 0;
//@ts-nocheck
const capability_1 = require("./capability");
const binary_1 = require("../../binary");
const helpers_1 = require("../../helpers");
exports.protobufPackage = "capability.v1";
function createBaseGenesisOwners() {
    return {
        index: BigInt(0),
        index_owners: capability_1.CapabilityOwners.fromPartial({})
    };
}
exports.GenesisOwners = {
    typeUrl: "/capability.v1.GenesisOwners",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.index !== BigInt(0)) {
            writer.uint32(8).uint64(message.index);
        }
        if (message.index_owners !== undefined) {
            capability_1.CapabilityOwners.encode(message.index_owners, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisOwners();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = reader.uint64();
                    break;
                case 2:
                    message.index_owners = capability_1.CapabilityOwners.decode(reader, reader.uint32());
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
            index: (0, helpers_1.isSet)(object.index) ? BigInt(object.index.toString()) : BigInt(0),
            index_owners: (0, helpers_1.isSet)(object.index_owners) ? capability_1.CapabilityOwners.fromJSON(object.index_owners) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = (message.index || BigInt(0)).toString());
        message.index_owners !== undefined && (obj.index_owners = message.index_owners ? capability_1.CapabilityOwners.toJSON(message.index_owners) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisOwners();
        message.index = object.index !== undefined && object.index !== null ? BigInt(object.index.toString()) : BigInt(0);
        message.index_owners = object.index_owners !== undefined && object.index_owners !== null ? capability_1.CapabilityOwners.fromPartial(object.index_owners) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            index: BigInt(object.index),
            index_owners: object?.index_owners ? capability_1.CapabilityOwners.fromAmino(object.index_owners) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.index = message.index ? message.index.toString() : undefined;
        obj.index_owners = message.index_owners ? capability_1.CapabilityOwners.toAmino(message.index_owners) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GenesisOwners.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.GenesisOwners.decode(message.value);
    },
    toProto(message) {
        return exports.GenesisOwners.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/capability.v1.GenesisOwners",
            value: exports.GenesisOwners.encode(message).finish()
        };
    }
};
function createBaseGenesisState() {
    return {
        index: BigInt(0),
        owners: []
    };
}
exports.GenesisState = {
    typeUrl: "/capability.v1.GenesisState",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.index !== BigInt(0)) {
            writer.uint32(8).uint64(message.index);
        }
        for (const v of message.owners) {
            exports.GenesisOwners.encode(v, writer.uint32(18).fork()).ldelim();
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
                    message.index = reader.uint64();
                    break;
                case 2:
                    message.owners.push(exports.GenesisOwners.decode(reader, reader.uint32()));
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
            index: (0, helpers_1.isSet)(object.index) ? BigInt(object.index.toString()) : BigInt(0),
            owners: Array.isArray(object?.owners) ? object.owners.map((e) => exports.GenesisOwners.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = (message.index || BigInt(0)).toString());
        if (message.owners) {
            obj.owners = message.owners.map(e => e ? exports.GenesisOwners.toJSON(e) : undefined);
        }
        else {
            obj.owners = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.index = object.index !== undefined && object.index !== null ? BigInt(object.index.toString()) : BigInt(0);
        message.owners = object.owners?.map(e => exports.GenesisOwners.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            index: BigInt(object.index),
            owners: Array.isArray(object?.owners) ? object.owners.map((e) => exports.GenesisOwners.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.index = message.index ? message.index.toString() : undefined;
        if (message.owners) {
            obj.owners = message.owners.map(e => e ? exports.GenesisOwners.toAmino(e) : undefined);
        }
        else {
            obj.owners = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GenesisState.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.GenesisState.decode(message.value);
    },
    toProto(message) {
        return exports.GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/capability.v1.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
//# sourceMappingURL=genesis.js.map
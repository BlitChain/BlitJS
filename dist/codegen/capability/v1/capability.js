"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CapabilityOwners = exports.Owner = exports.Capability = exports.protobufPackage = void 0;
//@ts-nocheck
const binary_1 = require("../../binary");
const helpers_1 = require("../../helpers");
exports.protobufPackage = "capability.v1";
function createBaseCapability() {
    return {
        index: BigInt(0)
    };
}
exports.Capability = {
    typeUrl: "/capability.v1.Capability",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.index !== BigInt(0)) {
            writer.uint32(8).uint64(message.index);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCapability();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = reader.uint64();
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
            index: (0, helpers_1.isSet)(object.index) ? BigInt(object.index.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = (message.index || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseCapability();
        message.index = object.index !== undefined && object.index !== null ? BigInt(object.index.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        return {
            index: BigInt(object.index)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.index = message.index ? message.index.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Capability.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Capability.decode(message.value);
    },
    toProto(message) {
        return exports.Capability.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/capability.v1.Capability",
            value: exports.Capability.encode(message).finish()
        };
    }
};
function createBaseOwner() {
    return {
        module: "",
        name: ""
    };
}
exports.Owner = {
    typeUrl: "/capability.v1.Owner",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.module !== "") {
            writer.uint32(10).string(message.module);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOwner();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.module = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
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
            module: (0, helpers_1.isSet)(object.module) ? String(object.module) : "",
            name: (0, helpers_1.isSet)(object.name) ? String(object.name) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.module !== undefined && (obj.module = message.module);
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseOwner();
        message.module = object.module ?? "";
        message.name = object.name ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            module: object.module,
            name: object.name
        };
    },
    toAmino(message) {
        const obj = {};
        obj.module = message.module;
        obj.name = message.name;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Owner.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Owner.decode(message.value);
    },
    toProto(message) {
        return exports.Owner.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/capability.v1.Owner",
            value: exports.Owner.encode(message).finish()
        };
    }
};
function createBaseCapabilityOwners() {
    return {
        owners: []
    };
}
exports.CapabilityOwners = {
    typeUrl: "/capability.v1.CapabilityOwners",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.owners) {
            exports.Owner.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCapabilityOwners();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owners.push(exports.Owner.decode(reader, reader.uint32()));
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
            owners: Array.isArray(object?.owners) ? object.owners.map((e) => exports.Owner.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.owners) {
            obj.owners = message.owners.map(e => e ? exports.Owner.toJSON(e) : undefined);
        }
        else {
            obj.owners = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseCapabilityOwners();
        message.owners = object.owners?.map(e => exports.Owner.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            owners: Array.isArray(object?.owners) ? object.owners.map((e) => exports.Owner.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.owners) {
            obj.owners = message.owners.map(e => e ? exports.Owner.toAmino(e) : undefined);
        }
        else {
            obj.owners = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.CapabilityOwners.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.CapabilityOwners.decode(message.value);
    },
    toProto(message) {
        return exports.CapabilityOwners.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/capability.v1.CapabilityOwners",
            value: exports.CapabilityOwners.encode(message).finish()
        };
    }
};
//# sourceMappingURL=capability.js.map
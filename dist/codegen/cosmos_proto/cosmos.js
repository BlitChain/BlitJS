"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScalarDescriptor = exports.InterfaceDescriptor = exports.scalarTypeToJSON = exports.scalarTypeFromJSON = exports.ScalarTypeAmino = exports.ScalarTypeSDKType = exports.ScalarType = exports.protobufPackage = void 0;
//@ts-nocheck
const binary_1 = require("../binary");
const helpers_1 = require("../helpers");
const registry_1 = require("../registry");
exports.protobufPackage = "cosmos_proto";
var ScalarType;
(function (ScalarType) {
    ScalarType[ScalarType["SCALAR_TYPE_UNSPECIFIED"] = 0] = "SCALAR_TYPE_UNSPECIFIED";
    ScalarType[ScalarType["SCALAR_TYPE_STRING"] = 1] = "SCALAR_TYPE_STRING";
    ScalarType[ScalarType["SCALAR_TYPE_BYTES"] = 2] = "SCALAR_TYPE_BYTES";
    ScalarType[ScalarType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ScalarType || (exports.ScalarType = ScalarType = {}));
exports.ScalarTypeSDKType = ScalarType;
exports.ScalarTypeAmino = ScalarType;
function scalarTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "SCALAR_TYPE_UNSPECIFIED":
            return ScalarType.SCALAR_TYPE_UNSPECIFIED;
        case 1:
        case "SCALAR_TYPE_STRING":
            return ScalarType.SCALAR_TYPE_STRING;
        case 2:
        case "SCALAR_TYPE_BYTES":
            return ScalarType.SCALAR_TYPE_BYTES;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ScalarType.UNRECOGNIZED;
    }
}
exports.scalarTypeFromJSON = scalarTypeFromJSON;
function scalarTypeToJSON(object) {
    switch (object) {
        case ScalarType.SCALAR_TYPE_UNSPECIFIED:
            return "SCALAR_TYPE_UNSPECIFIED";
        case ScalarType.SCALAR_TYPE_STRING:
            return "SCALAR_TYPE_STRING";
        case ScalarType.SCALAR_TYPE_BYTES:
            return "SCALAR_TYPE_BYTES";
        case ScalarType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.scalarTypeToJSON = scalarTypeToJSON;
function createBaseInterfaceDescriptor() {
    return {
        name: "",
        description: ""
    };
}
exports.InterfaceDescriptor = {
    typeUrl: "/cosmos_proto.InterfaceDescriptor",
    is(o) {
        return o && (o.$typeUrl === exports.InterfaceDescriptor.typeUrl || typeof o.name === "string" && typeof o.description === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.InterfaceDescriptor.typeUrl || typeof o.name === "string" && typeof o.description === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.InterfaceDescriptor.typeUrl || typeof o.name === "string" && typeof o.description === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInterfaceDescriptor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
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
            name: (0, helpers_1.isSet)(object.name) ? String(object.name) : "",
            description: (0, helpers_1.isSet)(object.description) ? String(object.description) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseInterfaceDescriptor();
        message.name = object.name ?? "";
        message.description = object.description ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseInterfaceDescriptor();
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.name = message.name;
        obj.description = message.description;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.InterfaceDescriptor.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.InterfaceDescriptor.decode(message.value);
    },
    toProto(message) {
        return exports.InterfaceDescriptor.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos_proto.InterfaceDescriptor",
            value: exports.InterfaceDescriptor.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.InterfaceDescriptor.typeUrl, exports.InterfaceDescriptor);
function createBaseScalarDescriptor() {
    return {
        name: "",
        description: "",
        field_type: []
    };
}
exports.ScalarDescriptor = {
    typeUrl: "/cosmos_proto.ScalarDescriptor",
    is(o) {
        return o && (o.$typeUrl === exports.ScalarDescriptor.typeUrl || typeof o.name === "string" && typeof o.description === "string" && Array.isArray(o.field_type));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.ScalarDescriptor.typeUrl || typeof o.name === "string" && typeof o.description === "string" && Array.isArray(o.field_type));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.ScalarDescriptor.typeUrl || typeof o.name === "string" && typeof o.description === "string" && Array.isArray(o.field_type));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        writer.uint32(26).fork();
        for (const v of message.field_type) {
            writer.int32(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseScalarDescriptor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.field_type.push(reader.int32());
                        }
                    }
                    else {
                        message.field_type.push(reader.int32());
                    }
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
            name: (0, helpers_1.isSet)(object.name) ? String(object.name) : "",
            description: (0, helpers_1.isSet)(object.description) ? String(object.description) : "",
            field_type: Array.isArray(object?.field_type) ? object.field_type.map((e) => scalarTypeFromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        if (message.field_type) {
            obj.field_type = message.field_type.map(e => scalarTypeToJSON(e));
        }
        else {
            obj.field_type = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseScalarDescriptor();
        message.name = object.name ?? "";
        message.description = object.description ?? "";
        message.field_type = object.field_type?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseScalarDescriptor();
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        message.field_type = object.field_type?.map(e => scalarTypeFromJSON(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.name = message.name;
        obj.description = message.description;
        if (message.field_type) {
            obj.field_type = message.field_type.map(e => e);
        }
        else {
            obj.field_type = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ScalarDescriptor.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ScalarDescriptor.decode(message.value);
    },
    toProto(message) {
        return exports.ScalarDescriptor.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos_proto.ScalarDescriptor",
            value: exports.ScalarDescriptor.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.ScalarDescriptor.typeUrl, exports.ScalarDescriptor);
//# sourceMappingURL=cosmos.js.map
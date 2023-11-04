"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileDescriptorsResponse = exports.FileDescriptorsRequest = exports.protobufPackage = void 0;
//@ts-nocheck
const descriptor_1 = require("../../../google/protobuf/descriptor");
const binary_1 = require("../../../binary");
exports.protobufPackage = "cosmos.reflection.v1";
function createBaseFileDescriptorsRequest() {
    return {};
}
exports.FileDescriptorsRequest = {
    typeUrl: "/cosmos.reflection.v1.FileDescriptorsRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFileDescriptorsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseFileDescriptorsRequest();
        return message;
    },
    fromSDK(_) {
        return {};
    },
    toSDK(_) {
        const obj = {};
        return obj;
    },
    fromAmino(_) {
        return {};
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.FileDescriptorsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/FileDescriptorsRequest",
            value: exports.FileDescriptorsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.FileDescriptorsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.FileDescriptorsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.reflection.v1.FileDescriptorsRequest",
            value: exports.FileDescriptorsRequest.encode(message).finish()
        };
    }
};
function createBaseFileDescriptorsResponse() {
    return {
        files: []
    };
}
exports.FileDescriptorsResponse = {
    typeUrl: "/cosmos.reflection.v1.FileDescriptorsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.files) {
            descriptor_1.FileDescriptorProto.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFileDescriptorsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.files.push(descriptor_1.FileDescriptorProto.decode(reader, reader.uint32()));
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
            files: Array.isArray(object?.files) ? object.files.map((e) => descriptor_1.FileDescriptorProto.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.files) {
            obj.files = message.files.map(e => e ? descriptor_1.FileDescriptorProto.toJSON(e) : undefined);
        }
        else {
            obj.files = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseFileDescriptorsResponse();
        message.files = object.files?.map(e => descriptor_1.FileDescriptorProto.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            files: Array.isArray(object?.files) ? object.files.map((e) => descriptor_1.FileDescriptorProto.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.files) {
            obj.files = message.files.map(e => e ? descriptor_1.FileDescriptorProto.toSDK(e) : undefined);
        }
        else {
            obj.files = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            files: Array.isArray(object?.files) ? object.files.map((e) => descriptor_1.FileDescriptorProto.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.files) {
            obj.files = message.files.map(e => e ? descriptor_1.FileDescriptorProto.toAmino(e) : undefined);
        }
        else {
            obj.files = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.FileDescriptorsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/FileDescriptorsResponse",
            value: exports.FileDescriptorsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.FileDescriptorsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.FileDescriptorsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.reflection.v1.FileDescriptorsResponse",
            value: exports.FileDescriptorsResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=reflection.js.map
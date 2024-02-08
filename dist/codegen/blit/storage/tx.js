"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgDeleteStorageResponse = exports.MsgDeleteStorage = exports.MsgUpdateStorageResponse = exports.MsgUpdateStorage = exports.MsgCreateStorageResponse = exports.MsgCreateStorage = exports.MsgUpdateParamsResponse = exports.MsgUpdateParams = exports.protobufPackage = void 0;
//@ts-nocheck
const params_1 = require("./params");
const binary_1 = require("../../binary");
const helpers_1 = require("../../helpers");
exports.protobufPackage = "blit.storage";
function createBaseMsgUpdateParams() {
    return {
        authority: "",
        params: params_1.Params.fromPartial({})
    };
}
exports.MsgUpdateParams = {
    typeUrl: "/blit.storage.MsgUpdateParams",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                case 2:
                    message.params = params_1.Params.decode(reader, reader.uint32());
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
            authority: (0, helpers_1.isSet)(object.authority) ? String(object.authority) : "",
            params: (0, helpers_1.isSet)(object.params) ? params_1.Params.fromJSON(object.params) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.authority !== undefined && (obj.authority = message.authority);
        message.params !== undefined && (obj.params = message.params ? params_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateParams();
        message.authority = object.authority ?? "";
        message.params = object.params !== undefined && object.params !== null ? params_1.Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            authority: object.authority,
            params: object?.params ? params_1.Params.fromAmino(object.params) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.authority = message.authority;
        obj.params = message.params ? params_1.Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUpdateParams.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "blit/x/storage/MsgUpdateParams",
            value: exports.MsgUpdateParams.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateParams.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.storage.MsgUpdateParams",
            value: exports.MsgUpdateParams.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateParamsResponse() {
    return {};
}
exports.MsgUpdateParamsResponse = {
    typeUrl: "/blit.storage.MsgUpdateParamsResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateParamsResponse();
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
        const message = createBaseMsgUpdateParamsResponse();
        return message;
    },
    fromAmino(_) {
        return {};
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUpdateParamsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateParamsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.storage.MsgUpdateParamsResponse",
            value: exports.MsgUpdateParamsResponse.encode(message).finish()
        };
    }
};
function createBaseMsgCreateStorage() {
    return {
        address: "",
        index: "",
        data: "",
        grantee: "",
        force: false
    };
}
exports.MsgCreateStorage = {
    typeUrl: "/blit.storage.MsgCreateStorage",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.index !== "") {
            writer.uint32(18).string(message.index);
        }
        if (message.data !== "") {
            writer.uint32(26).string(message.data);
        }
        if (message.grantee !== "") {
            writer.uint32(34).string(message.grantee);
        }
        if (message.force === true) {
            writer.uint32(40).bool(message.force);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateStorage();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.index = reader.string();
                    break;
                case 3:
                    message.data = reader.string();
                    break;
                case 4:
                    message.grantee = reader.string();
                    break;
                case 5:
                    message.force = reader.bool();
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
            address: (0, helpers_1.isSet)(object.address) ? String(object.address) : "",
            index: (0, helpers_1.isSet)(object.index) ? String(object.index) : "",
            data: (0, helpers_1.isSet)(object.data) ? String(object.data) : "",
            grantee: (0, helpers_1.isSet)(object.grantee) ? String(object.grantee) : "",
            force: (0, helpers_1.isSet)(object.force) ? Boolean(object.force) : false
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.index !== undefined && (obj.index = message.index);
        message.data !== undefined && (obj.data = message.data);
        message.grantee !== undefined && (obj.grantee = message.grantee);
        message.force !== undefined && (obj.force = message.force);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateStorage();
        message.address = object.address ?? "";
        message.index = object.index ?? "";
        message.data = object.data ?? "";
        message.grantee = object.grantee ?? "";
        message.force = object.force ?? false;
        return message;
    },
    fromAmino(object) {
        return {
            address: object.address,
            index: object.index,
            data: object.data,
            grantee: object.grantee,
            force: object.force
        };
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        obj.index = message.index;
        obj.data = message.data;
        obj.grantee = message.grantee;
        obj.force = message.force;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCreateStorage.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgCreateStorage.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreateStorage.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.storage.MsgCreateStorage",
            value: exports.MsgCreateStorage.encode(message).finish()
        };
    }
};
function createBaseMsgCreateStorageResponse() {
    return {};
}
exports.MsgCreateStorageResponse = {
    typeUrl: "/blit.storage.MsgCreateStorageResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateStorageResponse();
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
        const message = createBaseMsgCreateStorageResponse();
        return message;
    },
    fromAmino(_) {
        return {};
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCreateStorageResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgCreateStorageResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreateStorageResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.storage.MsgCreateStorageResponse",
            value: exports.MsgCreateStorageResponse.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateStorage() {
    return {
        address: "",
        index: "",
        data: "",
        grantee: "",
        force: false
    };
}
exports.MsgUpdateStorage = {
    typeUrl: "/blit.storage.MsgUpdateStorage",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.index !== "") {
            writer.uint32(18).string(message.index);
        }
        if (message.data !== "") {
            writer.uint32(26).string(message.data);
        }
        if (message.grantee !== "") {
            writer.uint32(34).string(message.grantee);
        }
        if (message.force === true) {
            writer.uint32(40).bool(message.force);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateStorage();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.index = reader.string();
                    break;
                case 3:
                    message.data = reader.string();
                    break;
                case 4:
                    message.grantee = reader.string();
                    break;
                case 5:
                    message.force = reader.bool();
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
            address: (0, helpers_1.isSet)(object.address) ? String(object.address) : "",
            index: (0, helpers_1.isSet)(object.index) ? String(object.index) : "",
            data: (0, helpers_1.isSet)(object.data) ? String(object.data) : "",
            grantee: (0, helpers_1.isSet)(object.grantee) ? String(object.grantee) : "",
            force: (0, helpers_1.isSet)(object.force) ? Boolean(object.force) : false
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.index !== undefined && (obj.index = message.index);
        message.data !== undefined && (obj.data = message.data);
        message.grantee !== undefined && (obj.grantee = message.grantee);
        message.force !== undefined && (obj.force = message.force);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateStorage();
        message.address = object.address ?? "";
        message.index = object.index ?? "";
        message.data = object.data ?? "";
        message.grantee = object.grantee ?? "";
        message.force = object.force ?? false;
        return message;
    },
    fromAmino(object) {
        return {
            address: object.address,
            index: object.index,
            data: object.data,
            grantee: object.grantee,
            force: object.force
        };
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        obj.index = message.index;
        obj.data = message.data;
        obj.grantee = message.grantee;
        obj.force = message.force;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUpdateStorage.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateStorage.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateStorage.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.storage.MsgUpdateStorage",
            value: exports.MsgUpdateStorage.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateStorageResponse() {
    return {};
}
exports.MsgUpdateStorageResponse = {
    typeUrl: "/blit.storage.MsgUpdateStorageResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateStorageResponse();
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
        const message = createBaseMsgUpdateStorageResponse();
        return message;
    },
    fromAmino(_) {
        return {};
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUpdateStorageResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateStorageResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateStorageResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.storage.MsgUpdateStorageResponse",
            value: exports.MsgUpdateStorageResponse.encode(message).finish()
        };
    }
};
function createBaseMsgDeleteStorage() {
    return {
        address: "",
        index: "",
        grantee: "",
        force: false
    };
}
exports.MsgDeleteStorage = {
    typeUrl: "/blit.storage.MsgDeleteStorage",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.index !== "") {
            writer.uint32(18).string(message.index);
        }
        if (message.grantee !== "") {
            writer.uint32(26).string(message.grantee);
        }
        if (message.force === true) {
            writer.uint32(40).bool(message.force);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDeleteStorage();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.index = reader.string();
                    break;
                case 3:
                    message.grantee = reader.string();
                    break;
                case 5:
                    message.force = reader.bool();
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
            address: (0, helpers_1.isSet)(object.address) ? String(object.address) : "",
            index: (0, helpers_1.isSet)(object.index) ? String(object.index) : "",
            grantee: (0, helpers_1.isSet)(object.grantee) ? String(object.grantee) : "",
            force: (0, helpers_1.isSet)(object.force) ? Boolean(object.force) : false
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.index !== undefined && (obj.index = message.index);
        message.grantee !== undefined && (obj.grantee = message.grantee);
        message.force !== undefined && (obj.force = message.force);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgDeleteStorage();
        message.address = object.address ?? "";
        message.index = object.index ?? "";
        message.grantee = object.grantee ?? "";
        message.force = object.force ?? false;
        return message;
    },
    fromAmino(object) {
        return {
            address: object.address,
            index: object.index,
            grantee: object.grantee,
            force: object.force
        };
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        obj.index = message.index;
        obj.grantee = message.grantee;
        obj.force = message.force;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgDeleteStorage.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgDeleteStorage.decode(message.value);
    },
    toProto(message) {
        return exports.MsgDeleteStorage.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.storage.MsgDeleteStorage",
            value: exports.MsgDeleteStorage.encode(message).finish()
        };
    }
};
function createBaseMsgDeleteStorageResponse() {
    return {};
}
exports.MsgDeleteStorageResponse = {
    typeUrl: "/blit.storage.MsgDeleteStorageResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDeleteStorageResponse();
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
        const message = createBaseMsgDeleteStorageResponse();
        return message;
    },
    fromAmino(_) {
        return {};
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgDeleteStorageResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgDeleteStorageResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgDeleteStorageResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.storage.MsgDeleteStorageResponse",
            value: exports.MsgDeleteStorageResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=tx.js.map
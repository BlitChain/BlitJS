//@ts-nocheck
import { Params } from "./params";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
export const protobufPackage = "blit.storage";
function createBaseMsgUpdateParams() {
    return {
        authority: "",
        params: Params.fromPartial({})
    };
}
export const MsgUpdateParams = {
    typeUrl: "/blit.storage.MsgUpdateParams",
    encode(message, writer = BinaryWriter.create()) {
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                case 2:
                    message.params = Params.decode(reader, reader.uint32());
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
            authority: isSet(object.authority) ? String(object.authority) : "",
            params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.authority !== undefined && (obj.authority = message.authority);
        message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateParams();
        message.authority = object.authority ?? "";
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUpdateParams();
        if (object.authority !== undefined && object.authority !== null) {
            message.authority = object.authority;
        }
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.authority = message.authority;
        obj.params = message.params ? Params.toAmino(message.params) : Params.fromPartial({});
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdateParams.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "blit/x/storage/MsgUpdateParams",
            value: MsgUpdateParams.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgUpdateParams.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.storage.MsgUpdateParams",
            value: MsgUpdateParams.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateParamsResponse() {
    return {};
}
export const MsgUpdateParamsResponse = {
    typeUrl: "/blit.storage.MsgUpdateParamsResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        const message = createBaseMsgUpdateParamsResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdateParamsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgUpdateParamsResponse.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.storage.MsgUpdateParamsResponse",
            value: MsgUpdateParamsResponse.encode(message).finish()
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
export const MsgCreateStorage = {
    typeUrl: "/blit.storage.MsgCreateStorage",
    encode(message, writer = BinaryWriter.create()) {
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
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            address: isSet(object.address) ? String(object.address) : "",
            index: isSet(object.index) ? String(object.index) : "",
            data: isSet(object.data) ? String(object.data) : "",
            grantee: isSet(object.grantee) ? String(object.grantee) : "",
            force: isSet(object.force) ? Boolean(object.force) : false
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
        const message = createBaseMsgCreateStorage();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = object.data;
        }
        if (object.grantee !== undefined && object.grantee !== null) {
            message.grantee = object.grantee;
        }
        if (object.force !== undefined && object.force !== null) {
            message.force = object.force;
        }
        return message;
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
        return MsgCreateStorage.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgCreateStorage.decode(message.value);
    },
    toProto(message) {
        return MsgCreateStorage.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.storage.MsgCreateStorage",
            value: MsgCreateStorage.encode(message).finish()
        };
    }
};
function createBaseMsgCreateStorageResponse() {
    return {};
}
export const MsgCreateStorageResponse = {
    typeUrl: "/blit.storage.MsgCreateStorageResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        const message = createBaseMsgCreateStorageResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCreateStorageResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgCreateStorageResponse.decode(message.value);
    },
    toProto(message) {
        return MsgCreateStorageResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.storage.MsgCreateStorageResponse",
            value: MsgCreateStorageResponse.encode(message).finish()
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
export const MsgUpdateStorage = {
    typeUrl: "/blit.storage.MsgUpdateStorage",
    encode(message, writer = BinaryWriter.create()) {
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
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            address: isSet(object.address) ? String(object.address) : "",
            index: isSet(object.index) ? String(object.index) : "",
            data: isSet(object.data) ? String(object.data) : "",
            grantee: isSet(object.grantee) ? String(object.grantee) : "",
            force: isSet(object.force) ? Boolean(object.force) : false
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
        const message = createBaseMsgUpdateStorage();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = object.data;
        }
        if (object.grantee !== undefined && object.grantee !== null) {
            message.grantee = object.grantee;
        }
        if (object.force !== undefined && object.force !== null) {
            message.force = object.force;
        }
        return message;
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
        return MsgUpdateStorage.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgUpdateStorage.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateStorage.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.storage.MsgUpdateStorage",
            value: MsgUpdateStorage.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateStorageResponse() {
    return {};
}
export const MsgUpdateStorageResponse = {
    typeUrl: "/blit.storage.MsgUpdateStorageResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        const message = createBaseMsgUpdateStorageResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdateStorageResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgUpdateStorageResponse.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateStorageResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.storage.MsgUpdateStorageResponse",
            value: MsgUpdateStorageResponse.encode(message).finish()
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
export const MsgDeleteStorage = {
    typeUrl: "/blit.storage.MsgDeleteStorage",
    encode(message, writer = BinaryWriter.create()) {
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
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            address: isSet(object.address) ? String(object.address) : "",
            index: isSet(object.index) ? String(object.index) : "",
            grantee: isSet(object.grantee) ? String(object.grantee) : "",
            force: isSet(object.force) ? Boolean(object.force) : false
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
        const message = createBaseMsgDeleteStorage();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        if (object.grantee !== undefined && object.grantee !== null) {
            message.grantee = object.grantee;
        }
        if (object.force !== undefined && object.force !== null) {
            message.force = object.force;
        }
        return message;
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
        return MsgDeleteStorage.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgDeleteStorage.decode(message.value);
    },
    toProto(message) {
        return MsgDeleteStorage.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.storage.MsgDeleteStorage",
            value: MsgDeleteStorage.encode(message).finish()
        };
    }
};
function createBaseMsgDeleteStorageResponse() {
    return {};
}
export const MsgDeleteStorageResponse = {
    typeUrl: "/blit.storage.MsgDeleteStorageResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        const message = createBaseMsgDeleteStorageResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgDeleteStorageResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgDeleteStorageResponse.decode(message.value);
    },
    toProto(message) {
        return MsgDeleteStorageResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.storage.MsgDeleteStorageResponse",
            value: MsgDeleteStorageResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=tx.js.map
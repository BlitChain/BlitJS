//@ts-nocheck
import { Params } from "./params";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
export const protobufPackage = "blit.script";
function createBaseMsgUpdateParams() {
    return {
        authority: "",
        params: Params.fromPartial({})
    };
}
export const MsgUpdateParams = {
    typeUrl: "/blit.script.MsgUpdateParams",
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
        return {
            authority: object.authority,
            params: object?.params ? Params.fromAmino(object.params) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.authority = message.authority;
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdateParams.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "blit/x/script/MsgUpdateParams",
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
            typeUrl: "/blit.script.MsgUpdateParams",
            value: MsgUpdateParams.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateParamsResponse() {
    return {};
}
export const MsgUpdateParamsResponse = {
    typeUrl: "/blit.script.MsgUpdateParamsResponse",
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
        return {};
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
            typeUrl: "/blit.script.MsgUpdateParamsResponse",
            value: MsgUpdateParamsResponse.encode(message).finish()
        };
    }
};
function createBaseMsgCreateScript() {
    return {
        creator: "",
        code: "",
        msg_type_permissions: [],
        grantee: ""
    };
}
export const MsgCreateScript = {
    typeUrl: "/blit.script.MsgCreateScript",
    encode(message, writer = BinaryWriter.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.code !== "") {
            writer.uint32(18).string(message.code);
        }
        for (const v of message.msg_type_permissions) {
            writer.uint32(26).string(v);
        }
        if (message.grantee !== "") {
            writer.uint32(34).string(message.grantee);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateScript();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.code = reader.string();
                    break;
                case 3:
                    message.msg_type_permissions.push(reader.string());
                    break;
                case 4:
                    message.grantee = reader.string();
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
            creator: isSet(object.creator) ? String(object.creator) : "",
            code: isSet(object.code) ? String(object.code) : "",
            msg_type_permissions: Array.isArray(object?.msg_type_permissions) ? object.msg_type_permissions.map((e) => String(e)) : [],
            grantee: isSet(object.grantee) ? String(object.grantee) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.code !== undefined && (obj.code = message.code);
        if (message.msg_type_permissions) {
            obj.msg_type_permissions = message.msg_type_permissions.map(e => e);
        }
        else {
            obj.msg_type_permissions = [];
        }
        message.grantee !== undefined && (obj.grantee = message.grantee);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateScript();
        message.creator = object.creator ?? "";
        message.code = object.code ?? "";
        message.msg_type_permissions = object.msg_type_permissions?.map(e => e) || [];
        message.grantee = object.grantee ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            creator: object.creator,
            code: object.code,
            msg_type_permissions: Array.isArray(object?.msg_type_permissions) ? object.msg_type_permissions.map((e) => e) : [],
            grantee: object.grantee
        };
    },
    toAmino(message) {
        const obj = {};
        obj.creator = message.creator;
        obj.code = message.code;
        if (message.msg_type_permissions) {
            obj.msg_type_permissions = message.msg_type_permissions.map(e => e);
        }
        else {
            obj.msg_type_permissions = [];
        }
        obj.grantee = message.grantee;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCreateScript.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgCreateScript.decode(message.value);
    },
    toProto(message) {
        return MsgCreateScript.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.script.MsgCreateScript",
            value: MsgCreateScript.encode(message).finish()
        };
    }
};
function createBaseMsgCreateScriptResponse() {
    return {
        address: ""
    };
}
export const MsgCreateScriptResponse = {
    typeUrl: "/blit.script.MsgCreateScriptResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateScriptResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
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
            address: isSet(object.address) ? String(object.address) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateScriptResponse();
        message.address = object.address ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            address: object.address
        };
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCreateScriptResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgCreateScriptResponse.decode(message.value);
    },
    toProto(message) {
        return MsgCreateScriptResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.script.MsgCreateScriptResponse",
            value: MsgCreateScriptResponse.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateScript() {
    return {
        address: "",
        code: "",
        grantee: ""
    };
}
export const MsgUpdateScript = {
    typeUrl: "/blit.script.MsgUpdateScript",
    encode(message, writer = BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.code !== "") {
            writer.uint32(18).string(message.code);
        }
        if (message.grantee !== "") {
            writer.uint32(26).string(message.grantee);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateScript();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.code = reader.string();
                    break;
                case 3:
                    message.grantee = reader.string();
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
            code: isSet(object.code) ? String(object.code) : "",
            grantee: isSet(object.grantee) ? String(object.grantee) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.code !== undefined && (obj.code = message.code);
        message.grantee !== undefined && (obj.grantee = message.grantee);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateScript();
        message.address = object.address ?? "";
        message.code = object.code ?? "";
        message.grantee = object.grantee ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            address: object.address,
            code: object.code,
            grantee: object.grantee
        };
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        obj.code = message.code;
        obj.grantee = message.grantee;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdateScript.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgUpdateScript.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateScript.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.script.MsgUpdateScript",
            value: MsgUpdateScript.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateScriptResponse() {
    return {
        version: BigInt(0)
    };
}
export const MsgUpdateScriptResponse = {
    typeUrl: "/blit.script.MsgUpdateScriptResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.version !== BigInt(0)) {
            writer.uint32(8).int64(message.version);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateScriptResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.version = reader.int64();
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
            version: isSet(object.version) ? BigInt(object.version.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.version !== undefined && (obj.version = (message.version || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateScriptResponse();
        message.version = object.version !== undefined && object.version !== null ? BigInt(object.version.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        return {
            version: BigInt(object.version)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.version = message.version ? message.version.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdateScriptResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgUpdateScriptResponse.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateScriptResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.script.MsgUpdateScriptResponse",
            value: MsgUpdateScriptResponse.encode(message).finish()
        };
    }
};
function createBaseMsgDeleteScript() {
    return {
        address: "",
        index: ""
    };
}
export const MsgDeleteScript = {
    typeUrl: "/blit.script.MsgDeleteScript",
    encode(message, writer = BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.index !== "") {
            writer.uint32(18).string(message.index);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDeleteScript();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.index = reader.string();
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
            index: isSet(object.index) ? String(object.index) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.index !== undefined && (obj.index = message.index);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgDeleteScript();
        message.address = object.address ?? "";
        message.index = object.index ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            address: object.address,
            index: object.index
        };
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        obj.index = message.index;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgDeleteScript.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgDeleteScript.decode(message.value);
    },
    toProto(message) {
        return MsgDeleteScript.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.script.MsgDeleteScript",
            value: MsgDeleteScript.encode(message).finish()
        };
    }
};
function createBaseMsgDeleteScriptResponse() {
    return {};
}
export const MsgDeleteScriptResponse = {
    typeUrl: "/blit.script.MsgDeleteScriptResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDeleteScriptResponse();
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
        const message = createBaseMsgDeleteScriptResponse();
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
        return MsgDeleteScriptResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgDeleteScriptResponse.decode(message.value);
    },
    toProto(message) {
        return MsgDeleteScriptResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.script.MsgDeleteScriptResponse",
            value: MsgDeleteScriptResponse.encode(message).finish()
        };
    }
};
function createBaseMsgRun() {
    return {
        caller_address: "",
        script_address: "",
        extra_code: "",
        function_name: "",
        kwargs: "",
        grantee: "",
        attached_messages: ""
    };
}
export const MsgRun = {
    typeUrl: "/blit.script.MsgRun",
    encode(message, writer = BinaryWriter.create()) {
        if (message.caller_address !== "") {
            writer.uint32(18).string(message.caller_address);
        }
        if (message.script_address !== "") {
            writer.uint32(26).string(message.script_address);
        }
        if (message.extra_code !== "") {
            writer.uint32(34).string(message.extra_code);
        }
        if (message.function_name !== "") {
            writer.uint32(42).string(message.function_name);
        }
        if (message.kwargs !== "") {
            writer.uint32(50).string(message.kwargs);
        }
        if (message.grantee !== "") {
            writer.uint32(58).string(message.grantee);
        }
        if (message.attached_messages !== "") {
            writer.uint32(10).string(message.attached_messages);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRun();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.caller_address = reader.string();
                    break;
                case 3:
                    message.script_address = reader.string();
                    break;
                case 4:
                    message.extra_code = reader.string();
                    break;
                case 5:
                    message.function_name = reader.string();
                    break;
                case 6:
                    message.kwargs = reader.string();
                    break;
                case 7:
                    message.grantee = reader.string();
                    break;
                case 1:
                    message.attached_messages = reader.string();
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
            caller_address: isSet(object.caller_address) ? String(object.caller_address) : "",
            script_address: isSet(object.script_address) ? String(object.script_address) : "",
            extra_code: isSet(object.extra_code) ? String(object.extra_code) : "",
            function_name: isSet(object.function_name) ? String(object.function_name) : "",
            kwargs: isSet(object.kwargs) ? String(object.kwargs) : "",
            grantee: isSet(object.grantee) ? String(object.grantee) : "",
            attached_messages: isSet(object.attached_messages) ? String(object.attached_messages) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.caller_address !== undefined && (obj.caller_address = message.caller_address);
        message.script_address !== undefined && (obj.script_address = message.script_address);
        message.extra_code !== undefined && (obj.extra_code = message.extra_code);
        message.function_name !== undefined && (obj.function_name = message.function_name);
        message.kwargs !== undefined && (obj.kwargs = message.kwargs);
        message.grantee !== undefined && (obj.grantee = message.grantee);
        message.attached_messages !== undefined && (obj.attached_messages = message.attached_messages);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgRun();
        message.caller_address = object.caller_address ?? "";
        message.script_address = object.script_address ?? "";
        message.extra_code = object.extra_code ?? "";
        message.function_name = object.function_name ?? "";
        message.kwargs = object.kwargs ?? "";
        message.grantee = object.grantee ?? "";
        message.attached_messages = object.attached_messages ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            caller_address: object.caller_address,
            script_address: object.script_address,
            extra_code: object.extra_code,
            function_name: object.function_name,
            kwargs: object.kwargs,
            grantee: object.grantee,
            attached_messages: object.attached_messages
        };
    },
    toAmino(message) {
        const obj = {};
        obj.caller_address = message.caller_address;
        obj.script_address = message.script_address;
        obj.extra_code = message.extra_code;
        obj.function_name = message.function_name;
        obj.kwargs = message.kwargs;
        obj.grantee = message.grantee;
        obj.attached_messages = message.attached_messages;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgRun.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgRun.decode(message.value);
    },
    toProto(message) {
        return MsgRun.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.script.MsgRun",
            value: MsgRun.encode(message).finish()
        };
    }
};
function createBaseMsgRunResponse() {
    return {
        response: ""
    };
}
export const MsgRunResponse = {
    typeUrl: "/blit.script.MsgRunResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.response !== "") {
            writer.uint32(10).string(message.response);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRunResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.response = reader.string();
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
            response: isSet(object.response) ? String(object.response) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.response !== undefined && (obj.response = message.response);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgRunResponse();
        message.response = object.response ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            response: object.response
        };
    },
    toAmino(message) {
        const obj = {};
        obj.response = message.response;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgRunResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgRunResponse.decode(message.value);
    },
    toProto(message) {
        return MsgRunResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.script.MsgRunResponse",
            value: MsgRunResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=tx.js.map
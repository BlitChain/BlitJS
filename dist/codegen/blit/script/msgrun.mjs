//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
export const protobufPackage = "blit.script";
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
//# sourceMappingURL=msgrun.js.map
//@ts-nocheck
import { Any } from "../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
export const protobufPackage = "blit.script";
function createBaseMsgRun() {
    return {
        msgs: [],
        caller_address: "",
        script_address: "",
        extra_code: "",
        function_name: "",
        kwargs: "",
        grantee: ""
    };
}
export const MsgRun = {
    typeUrl: "/blit.script.MsgRun",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.msgs) {
            Any.encode(v, writer.uint32(10).fork()).ldelim();
        }
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
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRun();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.msgs.push(Cosmos_basev1beta1Msg_InterfaceDecoder(reader));
                    break;
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
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            msgs: Array.isArray(object?.msgs) ? object.msgs.map((e) => Any.fromJSON(e)) : [],
            caller_address: isSet(object.caller_address) ? String(object.caller_address) : "",
            script_address: isSet(object.script_address) ? String(object.script_address) : "",
            extra_code: isSet(object.extra_code) ? String(object.extra_code) : "",
            function_name: isSet(object.function_name) ? String(object.function_name) : "",
            kwargs: isSet(object.kwargs) ? String(object.kwargs) : "",
            grantee: isSet(object.grantee) ? String(object.grantee) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.msgs) {
            obj.msgs = message.msgs.map(e => e ? Any.toJSON(e) : undefined);
        }
        else {
            obj.msgs = [];
        }
        message.caller_address !== undefined && (obj.caller_address = message.caller_address);
        message.script_address !== undefined && (obj.script_address = message.script_address);
        message.extra_code !== undefined && (obj.extra_code = message.extra_code);
        message.function_name !== undefined && (obj.function_name = message.function_name);
        message.kwargs !== undefined && (obj.kwargs = message.kwargs);
        message.grantee !== undefined && (obj.grantee = message.grantee);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgRun();
        message.msgs = object.msgs?.map(e => Any.fromPartial(e)) || [];
        message.caller_address = object.caller_address ?? "";
        message.script_address = object.script_address ?? "";
        message.extra_code = object.extra_code ?? "";
        message.function_name = object.function_name ?? "";
        message.kwargs = object.kwargs ?? "";
        message.grantee = object.grantee ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            msgs: Array.isArray(object?.msgs) ? object.msgs.map((e) => Any.fromSDK(e)) : [],
            caller_address: object?.caller_address,
            script_address: object?.script_address,
            extra_code: object?.extra_code,
            function_name: object?.function_name,
            kwargs: object?.kwargs,
            grantee: object?.grantee
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.msgs) {
            obj.msgs = message.msgs.map(e => e ? Any.toSDK(e) : undefined);
        }
        else {
            obj.msgs = [];
        }
        obj.caller_address = message.caller_address;
        obj.script_address = message.script_address;
        obj.extra_code = message.extra_code;
        obj.function_name = message.function_name;
        obj.kwargs = message.kwargs;
        obj.grantee = message.grantee;
        return obj;
    },
    fromAmino(object) {
        return {
            msgs: Array.isArray(object?.msgs) ? object.msgs.map((e) => Cosmos_basev1beta1Msg_FromAmino(e)) : [],
            caller_address: object.caller_address,
            script_address: object.script_address,
            extra_code: object.extra_code,
            function_name: object.function_name,
            kwargs: object.kwargs,
            grantee: object.grantee
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.msgs) {
            obj.msgs = message.msgs.map(e => e ? Cosmos_basev1beta1Msg_ToAmino(e) : undefined);
        }
        else {
            obj.msgs = [];
        }
        obj.caller_address = message.caller_address;
        obj.script_address = message.script_address;
        obj.extra_code = message.extra_code;
        obj.function_name = message.function_name;
        obj.kwargs = message.kwargs;
        obj.grantee = message.grantee;
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
    fromSDK(object) {
        return {
            response: object?.response
        };
    },
    toSDK(message) {
        const obj = {};
        obj.response = message.response;
        return obj;
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
export const Cosmos_basev1beta1Msg_InterfaceDecoder = (input) => {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const data = Any.decode(reader, reader.uint32());
    switch (data.typeUrl) {
        default:
            return data;
    }
};
export const Cosmos_basev1beta1Msg_FromAmino = (content) => {
    return Any.fromAmino(content);
};
export const Cosmos_basev1beta1Msg_ToAmino = (content) => {
    return Any.toAmino(content);
};
//# sourceMappingURL=msgrun.js.map
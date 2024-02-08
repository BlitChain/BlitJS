//@ts-nocheck
import { Any } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export const protobufPackage = "cosmos.feegrant.v1beta1";
function createBaseMsgGrantAllowance() {
    return {
        granter: "",
        grantee: "",
        allowance: undefined
    };
}
export const MsgGrantAllowance = {
    typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowance",
    aminoType: "cosmos-sdk/MsgGrantAllowance",
    is(o) {
        return o && (o.$typeUrl === MsgGrantAllowance.typeUrl || typeof o.granter === "string" && typeof o.grantee === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === MsgGrantAllowance.typeUrl || typeof o.granter === "string" && typeof o.grantee === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === MsgGrantAllowance.typeUrl || typeof o.granter === "string" && typeof o.grantee === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.granter !== "") {
            writer.uint32(10).string(message.granter);
        }
        if (message.grantee !== "") {
            writer.uint32(18).string(message.grantee);
        }
        if (message.allowance !== undefined) {
            Any.encode(GlobalDecoderRegistry.wrapAny(message.allowance), writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgGrantAllowance();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.granter = reader.string();
                    break;
                case 2:
                    message.grantee = reader.string();
                    break;
                case 3:
                    message.allowance = GlobalDecoderRegistry.unwrapAny(reader);
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
            granter: isSet(object.granter) ? String(object.granter) : "",
            grantee: isSet(object.grantee) ? String(object.grantee) : "",
            allowance: isSet(object.allowance) ? GlobalDecoderRegistry.fromJSON(object.allowance) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.granter !== undefined && (obj.granter = message.granter);
        message.grantee !== undefined && (obj.grantee = message.grantee);
        message.allowance !== undefined && (obj.allowance = message.allowance ? GlobalDecoderRegistry.toJSON(message.allowance) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgGrantAllowance();
        message.granter = object.granter ?? "";
        message.grantee = object.grantee ?? "";
        message.allowance = object.allowance !== undefined && object.allowance !== null ? GlobalDecoderRegistry.fromPartial(object.allowance) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgGrantAllowance();
        if (object.granter !== undefined && object.granter !== null) {
            message.granter = object.granter;
        }
        if (object.grantee !== undefined && object.grantee !== null) {
            message.grantee = object.grantee;
        }
        if (object.allowance !== undefined && object.allowance !== null) {
            message.allowance = GlobalDecoderRegistry.fromAminoMsg(object.allowance);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.granter = message.granter;
        obj.grantee = message.grantee;
        obj.allowance = message.allowance ? GlobalDecoderRegistry.toAminoMsg(message.allowance) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgGrantAllowance.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgGrantAllowance",
            value: MsgGrantAllowance.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgGrantAllowance.decode(message.value);
    },
    toProto(message) {
        return MsgGrantAllowance.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowance",
            value: MsgGrantAllowance.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgGrantAllowance.typeUrl, MsgGrantAllowance);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgGrantAllowance.aminoType, MsgGrantAllowance.typeUrl);
function createBaseMsgGrantAllowanceResponse() {
    return {};
}
export const MsgGrantAllowanceResponse = {
    typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowanceResponse",
    aminoType: "cosmos-sdk/MsgGrantAllowanceResponse",
    is(o) {
        return o && o.$typeUrl === MsgGrantAllowanceResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === MsgGrantAllowanceResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === MsgGrantAllowanceResponse.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgGrantAllowanceResponse();
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
        const message = createBaseMsgGrantAllowanceResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgGrantAllowanceResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgGrantAllowanceResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgGrantAllowanceResponse",
            value: MsgGrantAllowanceResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgGrantAllowanceResponse.decode(message.value);
    },
    toProto(message) {
        return MsgGrantAllowanceResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowanceResponse",
            value: MsgGrantAllowanceResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgGrantAllowanceResponse.typeUrl, MsgGrantAllowanceResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgGrantAllowanceResponse.aminoType, MsgGrantAllowanceResponse.typeUrl);
function createBaseMsgRevokeAllowance() {
    return {
        granter: "",
        grantee: ""
    };
}
export const MsgRevokeAllowance = {
    typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowance",
    aminoType: "cosmos-sdk/MsgRevokeAllowance",
    is(o) {
        return o && (o.$typeUrl === MsgRevokeAllowance.typeUrl || typeof o.granter === "string" && typeof o.grantee === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === MsgRevokeAllowance.typeUrl || typeof o.granter === "string" && typeof o.grantee === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === MsgRevokeAllowance.typeUrl || typeof o.granter === "string" && typeof o.grantee === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.granter !== "") {
            writer.uint32(10).string(message.granter);
        }
        if (message.grantee !== "") {
            writer.uint32(18).string(message.grantee);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRevokeAllowance();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.granter = reader.string();
                    break;
                case 2:
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
            granter: isSet(object.granter) ? String(object.granter) : "",
            grantee: isSet(object.grantee) ? String(object.grantee) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.granter !== undefined && (obj.granter = message.granter);
        message.grantee !== undefined && (obj.grantee = message.grantee);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgRevokeAllowance();
        message.granter = object.granter ?? "";
        message.grantee = object.grantee ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgRevokeAllowance();
        if (object.granter !== undefined && object.granter !== null) {
            message.granter = object.granter;
        }
        if (object.grantee !== undefined && object.grantee !== null) {
            message.grantee = object.grantee;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.granter = message.granter;
        obj.grantee = message.grantee;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgRevokeAllowance.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgRevokeAllowance",
            value: MsgRevokeAllowance.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgRevokeAllowance.decode(message.value);
    },
    toProto(message) {
        return MsgRevokeAllowance.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowance",
            value: MsgRevokeAllowance.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgRevokeAllowance.typeUrl, MsgRevokeAllowance);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgRevokeAllowance.aminoType, MsgRevokeAllowance.typeUrl);
function createBaseMsgRevokeAllowanceResponse() {
    return {};
}
export const MsgRevokeAllowanceResponse = {
    typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowanceResponse",
    aminoType: "cosmos-sdk/MsgRevokeAllowanceResponse",
    is(o) {
        return o && o.$typeUrl === MsgRevokeAllowanceResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === MsgRevokeAllowanceResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === MsgRevokeAllowanceResponse.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRevokeAllowanceResponse();
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
        const message = createBaseMsgRevokeAllowanceResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgRevokeAllowanceResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgRevokeAllowanceResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgRevokeAllowanceResponse",
            value: MsgRevokeAllowanceResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgRevokeAllowanceResponse.decode(message.value);
    },
    toProto(message) {
        return MsgRevokeAllowanceResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowanceResponse",
            value: MsgRevokeAllowanceResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgRevokeAllowanceResponse.typeUrl, MsgRevokeAllowanceResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgRevokeAllowanceResponse.aminoType, MsgRevokeAllowanceResponse.typeUrl);
function createBaseMsgPruneAllowances() {
    return {
        pruner: ""
    };
}
export const MsgPruneAllowances = {
    typeUrl: "/cosmos.feegrant.v1beta1.MsgPruneAllowances",
    aminoType: "cosmos-sdk/MsgPruneAllowances",
    is(o) {
        return o && (o.$typeUrl === MsgPruneAllowances.typeUrl || typeof o.pruner === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === MsgPruneAllowances.typeUrl || typeof o.pruner === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === MsgPruneAllowances.typeUrl || typeof o.pruner === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.pruner !== "") {
            writer.uint32(10).string(message.pruner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgPruneAllowances();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pruner = reader.string();
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
            pruner: isSet(object.pruner) ? String(object.pruner) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.pruner !== undefined && (obj.pruner = message.pruner);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgPruneAllowances();
        message.pruner = object.pruner ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgPruneAllowances();
        if (object.pruner !== undefined && object.pruner !== null) {
            message.pruner = object.pruner;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pruner = message.pruner;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgPruneAllowances.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgPruneAllowances",
            value: MsgPruneAllowances.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgPruneAllowances.decode(message.value);
    },
    toProto(message) {
        return MsgPruneAllowances.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.feegrant.v1beta1.MsgPruneAllowances",
            value: MsgPruneAllowances.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgPruneAllowances.typeUrl, MsgPruneAllowances);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgPruneAllowances.aminoType, MsgPruneAllowances.typeUrl);
function createBaseMsgPruneAllowancesResponse() {
    return {};
}
export const MsgPruneAllowancesResponse = {
    typeUrl: "/cosmos.feegrant.v1beta1.MsgPruneAllowancesResponse",
    aminoType: "cosmos-sdk/MsgPruneAllowancesResponse",
    is(o) {
        return o && o.$typeUrl === MsgPruneAllowancesResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === MsgPruneAllowancesResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === MsgPruneAllowancesResponse.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgPruneAllowancesResponse();
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
        const message = createBaseMsgPruneAllowancesResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgPruneAllowancesResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgPruneAllowancesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgPruneAllowancesResponse",
            value: MsgPruneAllowancesResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgPruneAllowancesResponse.decode(message.value);
    },
    toProto(message) {
        return MsgPruneAllowancesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.feegrant.v1beta1.MsgPruneAllowancesResponse",
            value: MsgPruneAllowancesResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgPruneAllowancesResponse.typeUrl, MsgPruneAllowancesResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgPruneAllowancesResponse.aminoType, MsgPruneAllowancesResponse.typeUrl);
//# sourceMappingURL=tx.js.map
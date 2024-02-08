//@ts-nocheck
import { MemberRequest, voteOptionFromJSON, voteOptionToJSON, proposalExecutorResultFromJSON, proposalExecutorResultToJSON } from "./types";
import { Any } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export const protobufPackage = "cosmos.group.v1";
/** Exec defines modes of execution of a proposal on creation or on new vote. */
export var Exec;
(function (Exec) {
    /**
     * EXEC_UNSPECIFIED - An empty value means that there should be a separate
     * MsgExec request for the proposal to execute.
     */
    Exec[Exec["EXEC_UNSPECIFIED"] = 0] = "EXEC_UNSPECIFIED";
    /**
     * EXEC_TRY - Try to execute the proposal immediately.
     * If the proposal is not allowed per the DecisionPolicy,
     * the proposal will still be open and could
     * be executed at a later point.
     */
    Exec[Exec["EXEC_TRY"] = 1] = "EXEC_TRY";
    Exec[Exec["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Exec || (Exec = {}));
export const ExecSDKType = Exec;
export const ExecAmino = Exec;
export function execFromJSON(object) {
    switch (object) {
        case 0:
        case "EXEC_UNSPECIFIED":
            return Exec.EXEC_UNSPECIFIED;
        case 1:
        case "EXEC_TRY":
            return Exec.EXEC_TRY;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Exec.UNRECOGNIZED;
    }
}
export function execToJSON(object) {
    switch (object) {
        case Exec.EXEC_UNSPECIFIED:
            return "EXEC_UNSPECIFIED";
        case Exec.EXEC_TRY:
            return "EXEC_TRY";
        case Exec.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseMsgCreateGroup() {
    return {
        admin: "",
        members: [],
        metadata: ""
    };
}
export const MsgCreateGroup = {
    typeUrl: "/cosmos.group.v1.MsgCreateGroup",
    aminoType: "cosmos-sdk/MsgCreateGroup",
    is(o) {
        return o && (o.$typeUrl === MsgCreateGroup.typeUrl || typeof o.admin === "string" && Array.isArray(o.members) && (!o.members.length || MemberRequest.is(o.members[0])) && typeof o.metadata === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === MsgCreateGroup.typeUrl || typeof o.admin === "string" && Array.isArray(o.members) && (!o.members.length || MemberRequest.isSDK(o.members[0])) && typeof o.metadata === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === MsgCreateGroup.typeUrl || typeof o.admin === "string" && Array.isArray(o.members) && (!o.members.length || MemberRequest.isAmino(o.members[0])) && typeof o.metadata === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        for (const v of message.members) {
            MemberRequest.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.metadata !== "") {
            writer.uint32(26).string(message.metadata);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateGroup();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.members.push(MemberRequest.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.metadata = reader.string();
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
            admin: isSet(object.admin) ? String(object.admin) : "",
            members: Array.isArray(object?.members) ? object.members.map((e) => MemberRequest.fromJSON(e)) : [],
            metadata: isSet(object.metadata) ? String(object.metadata) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.admin !== undefined && (obj.admin = message.admin);
        if (message.members) {
            obj.members = message.members.map(e => e ? MemberRequest.toJSON(e) : undefined);
        }
        else {
            obj.members = [];
        }
        message.metadata !== undefined && (obj.metadata = message.metadata);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateGroup();
        message.admin = object.admin ?? "";
        message.members = object.members?.map(e => MemberRequest.fromPartial(e)) || [];
        message.metadata = object.metadata ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateGroup();
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = object.admin;
        }
        message.members = object.members?.map(e => MemberRequest.fromAmino(e)) || [];
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = object.metadata;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.admin = message.admin;
        if (message.members) {
            obj.members = message.members.map(e => e ? MemberRequest.toAmino(e) : undefined);
        }
        else {
            obj.members = [];
        }
        obj.metadata = message.metadata;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCreateGroup.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgCreateGroup",
            value: MsgCreateGroup.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgCreateGroup.decode(message.value);
    },
    toProto(message) {
        return MsgCreateGroup.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MsgCreateGroup",
            value: MsgCreateGroup.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgCreateGroup.typeUrl, MsgCreateGroup);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgCreateGroup.aminoType, MsgCreateGroup.typeUrl);
function createBaseMsgCreateGroupResponse() {
    return {
        group_id: BigInt(0)
    };
}
export const MsgCreateGroupResponse = {
    typeUrl: "/cosmos.group.v1.MsgCreateGroupResponse",
    aminoType: "cosmos-sdk/MsgCreateGroupResponse",
    is(o) {
        return o && (o.$typeUrl === MsgCreateGroupResponse.typeUrl || typeof o.group_id === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === MsgCreateGroupResponse.typeUrl || typeof o.group_id === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === MsgCreateGroupResponse.typeUrl || typeof o.group_id === "bigint");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.group_id !== BigInt(0)) {
            writer.uint32(8).uint64(message.group_id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateGroupResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.group_id = reader.uint64();
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
            group_id: isSet(object.group_id) ? BigInt(object.group_id.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.group_id !== undefined && (obj.group_id = (message.group_id || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateGroupResponse();
        message.group_id = object.group_id !== undefined && object.group_id !== null ? BigInt(object.group_id.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateGroupResponse();
        if (object.group_id !== undefined && object.group_id !== null) {
            message.group_id = BigInt(object.group_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.group_id = message.group_id ? message.group_id.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCreateGroupResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgCreateGroupResponse",
            value: MsgCreateGroupResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgCreateGroupResponse.decode(message.value);
    },
    toProto(message) {
        return MsgCreateGroupResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MsgCreateGroupResponse",
            value: MsgCreateGroupResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgCreateGroupResponse.typeUrl, MsgCreateGroupResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgCreateGroupResponse.aminoType, MsgCreateGroupResponse.typeUrl);
function createBaseMsgUpdateGroupMembers() {
    return {
        admin: "",
        group_id: BigInt(0),
        member_updates: []
    };
}
export const MsgUpdateGroupMembers = {
    typeUrl: "/cosmos.group.v1.MsgUpdateGroupMembers",
    aminoType: "cosmos-sdk/MsgUpdateGroupMembers",
    is(o) {
        return o && (o.$typeUrl === MsgUpdateGroupMembers.typeUrl || typeof o.admin === "string" && typeof o.group_id === "bigint" && Array.isArray(o.member_updates) && (!o.member_updates.length || MemberRequest.is(o.member_updates[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === MsgUpdateGroupMembers.typeUrl || typeof o.admin === "string" && typeof o.group_id === "bigint" && Array.isArray(o.member_updates) && (!o.member_updates.length || MemberRequest.isSDK(o.member_updates[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === MsgUpdateGroupMembers.typeUrl || typeof o.admin === "string" && typeof o.group_id === "bigint" && Array.isArray(o.member_updates) && (!o.member_updates.length || MemberRequest.isAmino(o.member_updates[0])));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (message.group_id !== BigInt(0)) {
            writer.uint32(16).uint64(message.group_id);
        }
        for (const v of message.member_updates) {
            MemberRequest.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateGroupMembers();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.group_id = reader.uint64();
                    break;
                case 3:
                    message.member_updates.push(MemberRequest.decode(reader, reader.uint32()));
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
            admin: isSet(object.admin) ? String(object.admin) : "",
            group_id: isSet(object.group_id) ? BigInt(object.group_id.toString()) : BigInt(0),
            member_updates: Array.isArray(object?.member_updates) ? object.member_updates.map((e) => MemberRequest.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.admin !== undefined && (obj.admin = message.admin);
        message.group_id !== undefined && (obj.group_id = (message.group_id || BigInt(0)).toString());
        if (message.member_updates) {
            obj.member_updates = message.member_updates.map(e => e ? MemberRequest.toJSON(e) : undefined);
        }
        else {
            obj.member_updates = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateGroupMembers();
        message.admin = object.admin ?? "";
        message.group_id = object.group_id !== undefined && object.group_id !== null ? BigInt(object.group_id.toString()) : BigInt(0);
        message.member_updates = object.member_updates?.map(e => MemberRequest.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUpdateGroupMembers();
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = object.admin;
        }
        if (object.group_id !== undefined && object.group_id !== null) {
            message.group_id = BigInt(object.group_id);
        }
        message.member_updates = object.member_updates?.map(e => MemberRequest.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.admin = message.admin;
        obj.group_id = message.group_id ? message.group_id.toString() : undefined;
        if (message.member_updates) {
            obj.member_updates = message.member_updates.map(e => e ? MemberRequest.toAmino(e) : undefined);
        }
        else {
            obj.member_updates = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdateGroupMembers.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgUpdateGroupMembers",
            value: MsgUpdateGroupMembers.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgUpdateGroupMembers.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateGroupMembers.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MsgUpdateGroupMembers",
            value: MsgUpdateGroupMembers.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgUpdateGroupMembers.typeUrl, MsgUpdateGroupMembers);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUpdateGroupMembers.aminoType, MsgUpdateGroupMembers.typeUrl);
function createBaseMsgUpdateGroupMembersResponse() {
    return {};
}
export const MsgUpdateGroupMembersResponse = {
    typeUrl: "/cosmos.group.v1.MsgUpdateGroupMembersResponse",
    aminoType: "cosmos-sdk/MsgUpdateGroupMembersResponse",
    is(o) {
        return o && o.$typeUrl === MsgUpdateGroupMembersResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === MsgUpdateGroupMembersResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === MsgUpdateGroupMembersResponse.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateGroupMembersResponse();
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
        const message = createBaseMsgUpdateGroupMembersResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgUpdateGroupMembersResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdateGroupMembersResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgUpdateGroupMembersResponse",
            value: MsgUpdateGroupMembersResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgUpdateGroupMembersResponse.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateGroupMembersResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MsgUpdateGroupMembersResponse",
            value: MsgUpdateGroupMembersResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgUpdateGroupMembersResponse.typeUrl, MsgUpdateGroupMembersResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUpdateGroupMembersResponse.aminoType, MsgUpdateGroupMembersResponse.typeUrl);
function createBaseMsgUpdateGroupAdmin() {
    return {
        admin: "",
        group_id: BigInt(0),
        new_admin: ""
    };
}
export const MsgUpdateGroupAdmin = {
    typeUrl: "/cosmos.group.v1.MsgUpdateGroupAdmin",
    aminoType: "cosmos-sdk/MsgUpdateGroupAdmin",
    is(o) {
        return o && (o.$typeUrl === MsgUpdateGroupAdmin.typeUrl || typeof o.admin === "string" && typeof o.group_id === "bigint" && typeof o.new_admin === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === MsgUpdateGroupAdmin.typeUrl || typeof o.admin === "string" && typeof o.group_id === "bigint" && typeof o.new_admin === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === MsgUpdateGroupAdmin.typeUrl || typeof o.admin === "string" && typeof o.group_id === "bigint" && typeof o.new_admin === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (message.group_id !== BigInt(0)) {
            writer.uint32(16).uint64(message.group_id);
        }
        if (message.new_admin !== "") {
            writer.uint32(26).string(message.new_admin);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateGroupAdmin();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.group_id = reader.uint64();
                    break;
                case 3:
                    message.new_admin = reader.string();
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
            admin: isSet(object.admin) ? String(object.admin) : "",
            group_id: isSet(object.group_id) ? BigInt(object.group_id.toString()) : BigInt(0),
            new_admin: isSet(object.new_admin) ? String(object.new_admin) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.admin !== undefined && (obj.admin = message.admin);
        message.group_id !== undefined && (obj.group_id = (message.group_id || BigInt(0)).toString());
        message.new_admin !== undefined && (obj.new_admin = message.new_admin);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateGroupAdmin();
        message.admin = object.admin ?? "";
        message.group_id = object.group_id !== undefined && object.group_id !== null ? BigInt(object.group_id.toString()) : BigInt(0);
        message.new_admin = object.new_admin ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUpdateGroupAdmin();
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = object.admin;
        }
        if (object.group_id !== undefined && object.group_id !== null) {
            message.group_id = BigInt(object.group_id);
        }
        if (object.new_admin !== undefined && object.new_admin !== null) {
            message.new_admin = object.new_admin;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.admin = message.admin;
        obj.group_id = message.group_id ? message.group_id.toString() : undefined;
        obj.new_admin = message.new_admin;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdateGroupAdmin.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgUpdateGroupAdmin",
            value: MsgUpdateGroupAdmin.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgUpdateGroupAdmin.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateGroupAdmin.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MsgUpdateGroupAdmin",
            value: MsgUpdateGroupAdmin.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgUpdateGroupAdmin.typeUrl, MsgUpdateGroupAdmin);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUpdateGroupAdmin.aminoType, MsgUpdateGroupAdmin.typeUrl);
function createBaseMsgUpdateGroupAdminResponse() {
    return {};
}
export const MsgUpdateGroupAdminResponse = {
    typeUrl: "/cosmos.group.v1.MsgUpdateGroupAdminResponse",
    aminoType: "cosmos-sdk/MsgUpdateGroupAdminResponse",
    is(o) {
        return o && o.$typeUrl === MsgUpdateGroupAdminResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === MsgUpdateGroupAdminResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === MsgUpdateGroupAdminResponse.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateGroupAdminResponse();
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
        const message = createBaseMsgUpdateGroupAdminResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgUpdateGroupAdminResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdateGroupAdminResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgUpdateGroupAdminResponse",
            value: MsgUpdateGroupAdminResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgUpdateGroupAdminResponse.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateGroupAdminResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MsgUpdateGroupAdminResponse",
            value: MsgUpdateGroupAdminResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgUpdateGroupAdminResponse.typeUrl, MsgUpdateGroupAdminResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUpdateGroupAdminResponse.aminoType, MsgUpdateGroupAdminResponse.typeUrl);
function createBaseMsgUpdateGroupMetadata() {
    return {
        admin: "",
        group_id: BigInt(0),
        metadata: ""
    };
}
export const MsgUpdateGroupMetadata = {
    typeUrl: "/cosmos.group.v1.MsgUpdateGroupMetadata",
    aminoType: "cosmos-sdk/MsgUpdateGroupMetadata",
    is(o) {
        return o && (o.$typeUrl === MsgUpdateGroupMetadata.typeUrl || typeof o.admin === "string" && typeof o.group_id === "bigint" && typeof o.metadata === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === MsgUpdateGroupMetadata.typeUrl || typeof o.admin === "string" && typeof o.group_id === "bigint" && typeof o.metadata === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === MsgUpdateGroupMetadata.typeUrl || typeof o.admin === "string" && typeof o.group_id === "bigint" && typeof o.metadata === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (message.group_id !== BigInt(0)) {
            writer.uint32(16).uint64(message.group_id);
        }
        if (message.metadata !== "") {
            writer.uint32(26).string(message.metadata);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateGroupMetadata();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.group_id = reader.uint64();
                    break;
                case 3:
                    message.metadata = reader.string();
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
            admin: isSet(object.admin) ? String(object.admin) : "",
            group_id: isSet(object.group_id) ? BigInt(object.group_id.toString()) : BigInt(0),
            metadata: isSet(object.metadata) ? String(object.metadata) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.admin !== undefined && (obj.admin = message.admin);
        message.group_id !== undefined && (obj.group_id = (message.group_id || BigInt(0)).toString());
        message.metadata !== undefined && (obj.metadata = message.metadata);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateGroupMetadata();
        message.admin = object.admin ?? "";
        message.group_id = object.group_id !== undefined && object.group_id !== null ? BigInt(object.group_id.toString()) : BigInt(0);
        message.metadata = object.metadata ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUpdateGroupMetadata();
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = object.admin;
        }
        if (object.group_id !== undefined && object.group_id !== null) {
            message.group_id = BigInt(object.group_id);
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = object.metadata;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.admin = message.admin;
        obj.group_id = message.group_id ? message.group_id.toString() : undefined;
        obj.metadata = message.metadata;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdateGroupMetadata.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgUpdateGroupMetadata",
            value: MsgUpdateGroupMetadata.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgUpdateGroupMetadata.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateGroupMetadata.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MsgUpdateGroupMetadata",
            value: MsgUpdateGroupMetadata.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgUpdateGroupMetadata.typeUrl, MsgUpdateGroupMetadata);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUpdateGroupMetadata.aminoType, MsgUpdateGroupMetadata.typeUrl);
function createBaseMsgUpdateGroupMetadataResponse() {
    return {};
}
export const MsgUpdateGroupMetadataResponse = {
    typeUrl: "/cosmos.group.v1.MsgUpdateGroupMetadataResponse",
    aminoType: "cosmos-sdk/MsgUpdateGroupMetadataResponse",
    is(o) {
        return o && o.$typeUrl === MsgUpdateGroupMetadataResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === MsgUpdateGroupMetadataResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === MsgUpdateGroupMetadataResponse.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateGroupMetadataResponse();
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
        const message = createBaseMsgUpdateGroupMetadataResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgUpdateGroupMetadataResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdateGroupMetadataResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgUpdateGroupMetadataResponse",
            value: MsgUpdateGroupMetadataResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgUpdateGroupMetadataResponse.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateGroupMetadataResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MsgUpdateGroupMetadataResponse",
            value: MsgUpdateGroupMetadataResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgUpdateGroupMetadataResponse.typeUrl, MsgUpdateGroupMetadataResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUpdateGroupMetadataResponse.aminoType, MsgUpdateGroupMetadataResponse.typeUrl);
function createBaseMsgCreateGroupPolicy() {
    return {
        admin: "",
        group_id: BigInt(0),
        metadata: "",
        decision_policy: undefined
    };
}
export const MsgCreateGroupPolicy = {
    typeUrl: "/cosmos.group.v1.MsgCreateGroupPolicy",
    aminoType: "cosmos-sdk/MsgCreateGroupPolicy",
    is(o) {
        return o && (o.$typeUrl === MsgCreateGroupPolicy.typeUrl || typeof o.admin === "string" && typeof o.group_id === "bigint" && typeof o.metadata === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === MsgCreateGroupPolicy.typeUrl || typeof o.admin === "string" && typeof o.group_id === "bigint" && typeof o.metadata === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === MsgCreateGroupPolicy.typeUrl || typeof o.admin === "string" && typeof o.group_id === "bigint" && typeof o.metadata === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (message.group_id !== BigInt(0)) {
            writer.uint32(16).uint64(message.group_id);
        }
        if (message.metadata !== "") {
            writer.uint32(26).string(message.metadata);
        }
        if (message.decision_policy !== undefined) {
            Any.encode(GlobalDecoderRegistry.wrapAny(message.decision_policy), writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateGroupPolicy();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.group_id = reader.uint64();
                    break;
                case 3:
                    message.metadata = reader.string();
                    break;
                case 4:
                    message.decision_policy = GlobalDecoderRegistry.unwrapAny(reader);
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
            admin: isSet(object.admin) ? String(object.admin) : "",
            group_id: isSet(object.group_id) ? BigInt(object.group_id.toString()) : BigInt(0),
            metadata: isSet(object.metadata) ? String(object.metadata) : "",
            decision_policy: isSet(object.decision_policy) ? GlobalDecoderRegistry.fromJSON(object.decision_policy) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.admin !== undefined && (obj.admin = message.admin);
        message.group_id !== undefined && (obj.group_id = (message.group_id || BigInt(0)).toString());
        message.metadata !== undefined && (obj.metadata = message.metadata);
        message.decision_policy !== undefined && (obj.decision_policy = message.decision_policy ? GlobalDecoderRegistry.toJSON(message.decision_policy) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateGroupPolicy();
        message.admin = object.admin ?? "";
        message.group_id = object.group_id !== undefined && object.group_id !== null ? BigInt(object.group_id.toString()) : BigInt(0);
        message.metadata = object.metadata ?? "";
        message.decision_policy = object.decision_policy !== undefined && object.decision_policy !== null ? GlobalDecoderRegistry.fromPartial(object.decision_policy) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateGroupPolicy();
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = object.admin;
        }
        if (object.group_id !== undefined && object.group_id !== null) {
            message.group_id = BigInt(object.group_id);
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = object.metadata;
        }
        if (object.decision_policy !== undefined && object.decision_policy !== null) {
            message.decision_policy = GlobalDecoderRegistry.fromAminoMsg(object.decision_policy);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.admin = message.admin;
        obj.group_id = message.group_id ? message.group_id.toString() : undefined;
        obj.metadata = message.metadata;
        obj.decision_policy = message.decision_policy ? GlobalDecoderRegistry.toAminoMsg(message.decision_policy) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCreateGroupPolicy.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgCreateGroupPolicy",
            value: MsgCreateGroupPolicy.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgCreateGroupPolicy.decode(message.value);
    },
    toProto(message) {
        return MsgCreateGroupPolicy.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MsgCreateGroupPolicy",
            value: MsgCreateGroupPolicy.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgCreateGroupPolicy.typeUrl, MsgCreateGroupPolicy);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgCreateGroupPolicy.aminoType, MsgCreateGroupPolicy.typeUrl);
function createBaseMsgCreateGroupPolicyResponse() {
    return {
        address: ""
    };
}
export const MsgCreateGroupPolicyResponse = {
    typeUrl: "/cosmos.group.v1.MsgCreateGroupPolicyResponse",
    aminoType: "cosmos-sdk/MsgCreateGroupPolicyResponse",
    is(o) {
        return o && (o.$typeUrl === MsgCreateGroupPolicyResponse.typeUrl || typeof o.address === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === MsgCreateGroupPolicyResponse.typeUrl || typeof o.address === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === MsgCreateGroupPolicyResponse.typeUrl || typeof o.address === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateGroupPolicyResponse();
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
        const message = createBaseMsgCreateGroupPolicyResponse();
        message.address = object.address ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateGroupPolicyResponse();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCreateGroupPolicyResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgCreateGroupPolicyResponse",
            value: MsgCreateGroupPolicyResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgCreateGroupPolicyResponse.decode(message.value);
    },
    toProto(message) {
        return MsgCreateGroupPolicyResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MsgCreateGroupPolicyResponse",
            value: MsgCreateGroupPolicyResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgCreateGroupPolicyResponse.typeUrl, MsgCreateGroupPolicyResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgCreateGroupPolicyResponse.aminoType, MsgCreateGroupPolicyResponse.typeUrl);
function createBaseMsgUpdateGroupPolicyAdmin() {
    return {
        admin: "",
        group_policy_address: "",
        new_admin: ""
    };
}
export const MsgUpdateGroupPolicyAdmin = {
    typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin",
    aminoType: "cosmos-sdk/MsgUpdateGroupPolicyAdmin",
    is(o) {
        return o && (o.$typeUrl === MsgUpdateGroupPolicyAdmin.typeUrl || typeof o.admin === "string" && typeof o.group_policy_address === "string" && typeof o.new_admin === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === MsgUpdateGroupPolicyAdmin.typeUrl || typeof o.admin === "string" && typeof o.group_policy_address === "string" && typeof o.new_admin === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === MsgUpdateGroupPolicyAdmin.typeUrl || typeof o.admin === "string" && typeof o.group_policy_address === "string" && typeof o.new_admin === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (message.group_policy_address !== "") {
            writer.uint32(18).string(message.group_policy_address);
        }
        if (message.new_admin !== "") {
            writer.uint32(26).string(message.new_admin);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateGroupPolicyAdmin();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.group_policy_address = reader.string();
                    break;
                case 3:
                    message.new_admin = reader.string();
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
            admin: isSet(object.admin) ? String(object.admin) : "",
            group_policy_address: isSet(object.group_policy_address) ? String(object.group_policy_address) : "",
            new_admin: isSet(object.new_admin) ? String(object.new_admin) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.admin !== undefined && (obj.admin = message.admin);
        message.group_policy_address !== undefined && (obj.group_policy_address = message.group_policy_address);
        message.new_admin !== undefined && (obj.new_admin = message.new_admin);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateGroupPolicyAdmin();
        message.admin = object.admin ?? "";
        message.group_policy_address = object.group_policy_address ?? "";
        message.new_admin = object.new_admin ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUpdateGroupPolicyAdmin();
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = object.admin;
        }
        if (object.group_policy_address !== undefined && object.group_policy_address !== null) {
            message.group_policy_address = object.group_policy_address;
        }
        if (object.new_admin !== undefined && object.new_admin !== null) {
            message.new_admin = object.new_admin;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.admin = message.admin;
        obj.group_policy_address = message.group_policy_address;
        obj.new_admin = message.new_admin;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdateGroupPolicyAdmin.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgUpdateGroupPolicyAdmin",
            value: MsgUpdateGroupPolicyAdmin.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgUpdateGroupPolicyAdmin.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateGroupPolicyAdmin.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin",
            value: MsgUpdateGroupPolicyAdmin.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgUpdateGroupPolicyAdmin.typeUrl, MsgUpdateGroupPolicyAdmin);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUpdateGroupPolicyAdmin.aminoType, MsgUpdateGroupPolicyAdmin.typeUrl);
function createBaseMsgUpdateGroupPolicyAdminResponse() {
    return {};
}
export const MsgUpdateGroupPolicyAdminResponse = {
    typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyAdminResponse",
    aminoType: "cosmos-sdk/MsgUpdateGroupPolicyAdminResponse",
    is(o) {
        return o && o.$typeUrl === MsgUpdateGroupPolicyAdminResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === MsgUpdateGroupPolicyAdminResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === MsgUpdateGroupPolicyAdminResponse.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateGroupPolicyAdminResponse();
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
        const message = createBaseMsgUpdateGroupPolicyAdminResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgUpdateGroupPolicyAdminResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdateGroupPolicyAdminResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgUpdateGroupPolicyAdminResponse",
            value: MsgUpdateGroupPolicyAdminResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgUpdateGroupPolicyAdminResponse.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateGroupPolicyAdminResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyAdminResponse",
            value: MsgUpdateGroupPolicyAdminResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgUpdateGroupPolicyAdminResponse.typeUrl, MsgUpdateGroupPolicyAdminResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUpdateGroupPolicyAdminResponse.aminoType, MsgUpdateGroupPolicyAdminResponse.typeUrl);
function createBaseMsgCreateGroupWithPolicy() {
    return {
        admin: "",
        members: [],
        group_metadata: "",
        group_policy_metadata: "",
        group_policy_as_admin: false,
        decision_policy: undefined
    };
}
export const MsgCreateGroupWithPolicy = {
    typeUrl: "/cosmos.group.v1.MsgCreateGroupWithPolicy",
    aminoType: "cosmos-sdk/MsgCreateGroupWithPolicy",
    is(o) {
        return o && (o.$typeUrl === MsgCreateGroupWithPolicy.typeUrl || typeof o.admin === "string" && Array.isArray(o.members) && (!o.members.length || MemberRequest.is(o.members[0])) && typeof o.group_metadata === "string" && typeof o.group_policy_metadata === "string" && typeof o.group_policy_as_admin === "boolean");
    },
    isSDK(o) {
        return o && (o.$typeUrl === MsgCreateGroupWithPolicy.typeUrl || typeof o.admin === "string" && Array.isArray(o.members) && (!o.members.length || MemberRequest.isSDK(o.members[0])) && typeof o.group_metadata === "string" && typeof o.group_policy_metadata === "string" && typeof o.group_policy_as_admin === "boolean");
    },
    isAmino(o) {
        return o && (o.$typeUrl === MsgCreateGroupWithPolicy.typeUrl || typeof o.admin === "string" && Array.isArray(o.members) && (!o.members.length || MemberRequest.isAmino(o.members[0])) && typeof o.group_metadata === "string" && typeof o.group_policy_metadata === "string" && typeof o.group_policy_as_admin === "boolean");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        for (const v of message.members) {
            MemberRequest.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.group_metadata !== "") {
            writer.uint32(26).string(message.group_metadata);
        }
        if (message.group_policy_metadata !== "") {
            writer.uint32(34).string(message.group_policy_metadata);
        }
        if (message.group_policy_as_admin === true) {
            writer.uint32(40).bool(message.group_policy_as_admin);
        }
        if (message.decision_policy !== undefined) {
            Any.encode(GlobalDecoderRegistry.wrapAny(message.decision_policy), writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateGroupWithPolicy();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.members.push(MemberRequest.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.group_metadata = reader.string();
                    break;
                case 4:
                    message.group_policy_metadata = reader.string();
                    break;
                case 5:
                    message.group_policy_as_admin = reader.bool();
                    break;
                case 6:
                    message.decision_policy = GlobalDecoderRegistry.unwrapAny(reader);
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
            admin: isSet(object.admin) ? String(object.admin) : "",
            members: Array.isArray(object?.members) ? object.members.map((e) => MemberRequest.fromJSON(e)) : [],
            group_metadata: isSet(object.group_metadata) ? String(object.group_metadata) : "",
            group_policy_metadata: isSet(object.group_policy_metadata) ? String(object.group_policy_metadata) : "",
            group_policy_as_admin: isSet(object.group_policy_as_admin) ? Boolean(object.group_policy_as_admin) : false,
            decision_policy: isSet(object.decision_policy) ? GlobalDecoderRegistry.fromJSON(object.decision_policy) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.admin !== undefined && (obj.admin = message.admin);
        if (message.members) {
            obj.members = message.members.map(e => e ? MemberRequest.toJSON(e) : undefined);
        }
        else {
            obj.members = [];
        }
        message.group_metadata !== undefined && (obj.group_metadata = message.group_metadata);
        message.group_policy_metadata !== undefined && (obj.group_policy_metadata = message.group_policy_metadata);
        message.group_policy_as_admin !== undefined && (obj.group_policy_as_admin = message.group_policy_as_admin);
        message.decision_policy !== undefined && (obj.decision_policy = message.decision_policy ? GlobalDecoderRegistry.toJSON(message.decision_policy) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateGroupWithPolicy();
        message.admin = object.admin ?? "";
        message.members = object.members?.map(e => MemberRequest.fromPartial(e)) || [];
        message.group_metadata = object.group_metadata ?? "";
        message.group_policy_metadata = object.group_policy_metadata ?? "";
        message.group_policy_as_admin = object.group_policy_as_admin ?? false;
        message.decision_policy = object.decision_policy !== undefined && object.decision_policy !== null ? GlobalDecoderRegistry.fromPartial(object.decision_policy) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateGroupWithPolicy();
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = object.admin;
        }
        message.members = object.members?.map(e => MemberRequest.fromAmino(e)) || [];
        if (object.group_metadata !== undefined && object.group_metadata !== null) {
            message.group_metadata = object.group_metadata;
        }
        if (object.group_policy_metadata !== undefined && object.group_policy_metadata !== null) {
            message.group_policy_metadata = object.group_policy_metadata;
        }
        if (object.group_policy_as_admin !== undefined && object.group_policy_as_admin !== null) {
            message.group_policy_as_admin = object.group_policy_as_admin;
        }
        if (object.decision_policy !== undefined && object.decision_policy !== null) {
            message.decision_policy = GlobalDecoderRegistry.fromAminoMsg(object.decision_policy);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.admin = message.admin;
        if (message.members) {
            obj.members = message.members.map(e => e ? MemberRequest.toAmino(e) : undefined);
        }
        else {
            obj.members = [];
        }
        obj.group_metadata = message.group_metadata;
        obj.group_policy_metadata = message.group_policy_metadata;
        obj.group_policy_as_admin = message.group_policy_as_admin;
        obj.decision_policy = message.decision_policy ? GlobalDecoderRegistry.toAminoMsg(message.decision_policy) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCreateGroupWithPolicy.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgCreateGroupWithPolicy",
            value: MsgCreateGroupWithPolicy.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgCreateGroupWithPolicy.decode(message.value);
    },
    toProto(message) {
        return MsgCreateGroupWithPolicy.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MsgCreateGroupWithPolicy",
            value: MsgCreateGroupWithPolicy.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgCreateGroupWithPolicy.typeUrl, MsgCreateGroupWithPolicy);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgCreateGroupWithPolicy.aminoType, MsgCreateGroupWithPolicy.typeUrl);
function createBaseMsgCreateGroupWithPolicyResponse() {
    return {
        group_id: BigInt(0),
        group_policy_address: ""
    };
}
export const MsgCreateGroupWithPolicyResponse = {
    typeUrl: "/cosmos.group.v1.MsgCreateGroupWithPolicyResponse",
    aminoType: "cosmos-sdk/MsgCreateGroupWithPolicyResponse",
    is(o) {
        return o && (o.$typeUrl === MsgCreateGroupWithPolicyResponse.typeUrl || typeof o.group_id === "bigint" && typeof o.group_policy_address === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === MsgCreateGroupWithPolicyResponse.typeUrl || typeof o.group_id === "bigint" && typeof o.group_policy_address === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === MsgCreateGroupWithPolicyResponse.typeUrl || typeof o.group_id === "bigint" && typeof o.group_policy_address === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.group_id !== BigInt(0)) {
            writer.uint32(8).uint64(message.group_id);
        }
        if (message.group_policy_address !== "") {
            writer.uint32(18).string(message.group_policy_address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateGroupWithPolicyResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.group_id = reader.uint64();
                    break;
                case 2:
                    message.group_policy_address = reader.string();
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
            group_id: isSet(object.group_id) ? BigInt(object.group_id.toString()) : BigInt(0),
            group_policy_address: isSet(object.group_policy_address) ? String(object.group_policy_address) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.group_id !== undefined && (obj.group_id = (message.group_id || BigInt(0)).toString());
        message.group_policy_address !== undefined && (obj.group_policy_address = message.group_policy_address);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateGroupWithPolicyResponse();
        message.group_id = object.group_id !== undefined && object.group_id !== null ? BigInt(object.group_id.toString()) : BigInt(0);
        message.group_policy_address = object.group_policy_address ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateGroupWithPolicyResponse();
        if (object.group_id !== undefined && object.group_id !== null) {
            message.group_id = BigInt(object.group_id);
        }
        if (object.group_policy_address !== undefined && object.group_policy_address !== null) {
            message.group_policy_address = object.group_policy_address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.group_id = message.group_id ? message.group_id.toString() : undefined;
        obj.group_policy_address = message.group_policy_address;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCreateGroupWithPolicyResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgCreateGroupWithPolicyResponse",
            value: MsgCreateGroupWithPolicyResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgCreateGroupWithPolicyResponse.decode(message.value);
    },
    toProto(message) {
        return MsgCreateGroupWithPolicyResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MsgCreateGroupWithPolicyResponse",
            value: MsgCreateGroupWithPolicyResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgCreateGroupWithPolicyResponse.typeUrl, MsgCreateGroupWithPolicyResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgCreateGroupWithPolicyResponse.aminoType, MsgCreateGroupWithPolicyResponse.typeUrl);
function createBaseMsgUpdateGroupPolicyDecisionPolicy() {
    return {
        admin: "",
        group_policy_address: "",
        decision_policy: undefined
    };
}
export const MsgUpdateGroupPolicyDecisionPolicy = {
    typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy",
    aminoType: "cosmos-sdk/MsgUpdateGroupDecisionPolicy",
    is(o) {
        return o && (o.$typeUrl === MsgUpdateGroupPolicyDecisionPolicy.typeUrl || typeof o.admin === "string" && typeof o.group_policy_address === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === MsgUpdateGroupPolicyDecisionPolicy.typeUrl || typeof o.admin === "string" && typeof o.group_policy_address === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === MsgUpdateGroupPolicyDecisionPolicy.typeUrl || typeof o.admin === "string" && typeof o.group_policy_address === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (message.group_policy_address !== "") {
            writer.uint32(18).string(message.group_policy_address);
        }
        if (message.decision_policy !== undefined) {
            Any.encode(GlobalDecoderRegistry.wrapAny(message.decision_policy), writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateGroupPolicyDecisionPolicy();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.group_policy_address = reader.string();
                    break;
                case 3:
                    message.decision_policy = GlobalDecoderRegistry.unwrapAny(reader);
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
            admin: isSet(object.admin) ? String(object.admin) : "",
            group_policy_address: isSet(object.group_policy_address) ? String(object.group_policy_address) : "",
            decision_policy: isSet(object.decision_policy) ? GlobalDecoderRegistry.fromJSON(object.decision_policy) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.admin !== undefined && (obj.admin = message.admin);
        message.group_policy_address !== undefined && (obj.group_policy_address = message.group_policy_address);
        message.decision_policy !== undefined && (obj.decision_policy = message.decision_policy ? GlobalDecoderRegistry.toJSON(message.decision_policy) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateGroupPolicyDecisionPolicy();
        message.admin = object.admin ?? "";
        message.group_policy_address = object.group_policy_address ?? "";
        message.decision_policy = object.decision_policy !== undefined && object.decision_policy !== null ? GlobalDecoderRegistry.fromPartial(object.decision_policy) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUpdateGroupPolicyDecisionPolicy();
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = object.admin;
        }
        if (object.group_policy_address !== undefined && object.group_policy_address !== null) {
            message.group_policy_address = object.group_policy_address;
        }
        if (object.decision_policy !== undefined && object.decision_policy !== null) {
            message.decision_policy = GlobalDecoderRegistry.fromAminoMsg(object.decision_policy);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.admin = message.admin;
        obj.group_policy_address = message.group_policy_address;
        obj.decision_policy = message.decision_policy ? GlobalDecoderRegistry.toAminoMsg(message.decision_policy) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdateGroupPolicyDecisionPolicy.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgUpdateGroupDecisionPolicy",
            value: MsgUpdateGroupPolicyDecisionPolicy.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgUpdateGroupPolicyDecisionPolicy.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateGroupPolicyDecisionPolicy.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy",
            value: MsgUpdateGroupPolicyDecisionPolicy.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgUpdateGroupPolicyDecisionPolicy.typeUrl, MsgUpdateGroupPolicyDecisionPolicy);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUpdateGroupPolicyDecisionPolicy.aminoType, MsgUpdateGroupPolicyDecisionPolicy.typeUrl);
function createBaseMsgUpdateGroupPolicyDecisionPolicyResponse() {
    return {};
}
export const MsgUpdateGroupPolicyDecisionPolicyResponse = {
    typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicyResponse",
    aminoType: "cosmos-sdk/MsgUpdateGroupPolicyDecisionPolicyResponse",
    is(o) {
        return o && o.$typeUrl === MsgUpdateGroupPolicyDecisionPolicyResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === MsgUpdateGroupPolicyDecisionPolicyResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === MsgUpdateGroupPolicyDecisionPolicyResponse.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateGroupPolicyDecisionPolicyResponse();
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
        const message = createBaseMsgUpdateGroupPolicyDecisionPolicyResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgUpdateGroupPolicyDecisionPolicyResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdateGroupPolicyDecisionPolicyResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgUpdateGroupPolicyDecisionPolicyResponse",
            value: MsgUpdateGroupPolicyDecisionPolicyResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgUpdateGroupPolicyDecisionPolicyResponse.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateGroupPolicyDecisionPolicyResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicyResponse",
            value: MsgUpdateGroupPolicyDecisionPolicyResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgUpdateGroupPolicyDecisionPolicyResponse.typeUrl, MsgUpdateGroupPolicyDecisionPolicyResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUpdateGroupPolicyDecisionPolicyResponse.aminoType, MsgUpdateGroupPolicyDecisionPolicyResponse.typeUrl);
function createBaseMsgUpdateGroupPolicyMetadata() {
    return {
        admin: "",
        group_policy_address: "",
        metadata: ""
    };
}
export const MsgUpdateGroupPolicyMetadata = {
    typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata",
    aminoType: "cosmos-sdk/MsgUpdateGroupPolicyMetadata",
    is(o) {
        return o && (o.$typeUrl === MsgUpdateGroupPolicyMetadata.typeUrl || typeof o.admin === "string" && typeof o.group_policy_address === "string" && typeof o.metadata === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === MsgUpdateGroupPolicyMetadata.typeUrl || typeof o.admin === "string" && typeof o.group_policy_address === "string" && typeof o.metadata === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === MsgUpdateGroupPolicyMetadata.typeUrl || typeof o.admin === "string" && typeof o.group_policy_address === "string" && typeof o.metadata === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (message.group_policy_address !== "") {
            writer.uint32(18).string(message.group_policy_address);
        }
        if (message.metadata !== "") {
            writer.uint32(26).string(message.metadata);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateGroupPolicyMetadata();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.group_policy_address = reader.string();
                    break;
                case 3:
                    message.metadata = reader.string();
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
            admin: isSet(object.admin) ? String(object.admin) : "",
            group_policy_address: isSet(object.group_policy_address) ? String(object.group_policy_address) : "",
            metadata: isSet(object.metadata) ? String(object.metadata) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.admin !== undefined && (obj.admin = message.admin);
        message.group_policy_address !== undefined && (obj.group_policy_address = message.group_policy_address);
        message.metadata !== undefined && (obj.metadata = message.metadata);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateGroupPolicyMetadata();
        message.admin = object.admin ?? "";
        message.group_policy_address = object.group_policy_address ?? "";
        message.metadata = object.metadata ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUpdateGroupPolicyMetadata();
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = object.admin;
        }
        if (object.group_policy_address !== undefined && object.group_policy_address !== null) {
            message.group_policy_address = object.group_policy_address;
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = object.metadata;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.admin = message.admin;
        obj.group_policy_address = message.group_policy_address;
        obj.metadata = message.metadata;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdateGroupPolicyMetadata.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgUpdateGroupPolicyMetadata",
            value: MsgUpdateGroupPolicyMetadata.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgUpdateGroupPolicyMetadata.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateGroupPolicyMetadata.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata",
            value: MsgUpdateGroupPolicyMetadata.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgUpdateGroupPolicyMetadata.typeUrl, MsgUpdateGroupPolicyMetadata);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUpdateGroupPolicyMetadata.aminoType, MsgUpdateGroupPolicyMetadata.typeUrl);
function createBaseMsgUpdateGroupPolicyMetadataResponse() {
    return {};
}
export const MsgUpdateGroupPolicyMetadataResponse = {
    typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyMetadataResponse",
    aminoType: "cosmos-sdk/MsgUpdateGroupPolicyMetadataResponse",
    is(o) {
        return o && o.$typeUrl === MsgUpdateGroupPolicyMetadataResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === MsgUpdateGroupPolicyMetadataResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === MsgUpdateGroupPolicyMetadataResponse.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateGroupPolicyMetadataResponse();
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
        const message = createBaseMsgUpdateGroupPolicyMetadataResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgUpdateGroupPolicyMetadataResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdateGroupPolicyMetadataResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgUpdateGroupPolicyMetadataResponse",
            value: MsgUpdateGroupPolicyMetadataResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgUpdateGroupPolicyMetadataResponse.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateGroupPolicyMetadataResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyMetadataResponse",
            value: MsgUpdateGroupPolicyMetadataResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgUpdateGroupPolicyMetadataResponse.typeUrl, MsgUpdateGroupPolicyMetadataResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUpdateGroupPolicyMetadataResponse.aminoType, MsgUpdateGroupPolicyMetadataResponse.typeUrl);
function createBaseMsgSubmitProposal() {
    return {
        group_policy_address: "",
        proposers: [],
        metadata: "",
        messages: [],
        exec: 0,
        title: "",
        summary: ""
    };
}
export const MsgSubmitProposal = {
    typeUrl: "/cosmos.group.v1.MsgSubmitProposal",
    aminoType: "cosmos-sdk/group/MsgSubmitProposal",
    is(o) {
        return o && (o.$typeUrl === MsgSubmitProposal.typeUrl || typeof o.group_policy_address === "string" && Array.isArray(o.proposers) && (!o.proposers.length || typeof o.proposers[0] === "string") && typeof o.metadata === "string" && Array.isArray(o.messages) && (!o.messages.length || Any.is(o.messages[0])) && isSet(o.exec) && typeof o.title === "string" && typeof o.summary === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === MsgSubmitProposal.typeUrl || typeof o.group_policy_address === "string" && Array.isArray(o.proposers) && (!o.proposers.length || typeof o.proposers[0] === "string") && typeof o.metadata === "string" && Array.isArray(o.messages) && (!o.messages.length || Any.isSDK(o.messages[0])) && isSet(o.exec) && typeof o.title === "string" && typeof o.summary === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === MsgSubmitProposal.typeUrl || typeof o.group_policy_address === "string" && Array.isArray(o.proposers) && (!o.proposers.length || typeof o.proposers[0] === "string") && typeof o.metadata === "string" && Array.isArray(o.messages) && (!o.messages.length || Any.isAmino(o.messages[0])) && isSet(o.exec) && typeof o.title === "string" && typeof o.summary === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.group_policy_address !== "") {
            writer.uint32(10).string(message.group_policy_address);
        }
        for (const v of message.proposers) {
            writer.uint32(18).string(v);
        }
        if (message.metadata !== "") {
            writer.uint32(26).string(message.metadata);
        }
        for (const v of message.messages) {
            Any.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.exec !== 0) {
            writer.uint32(40).int32(message.exec);
        }
        if (message.title !== "") {
            writer.uint32(50).string(message.title);
        }
        if (message.summary !== "") {
            writer.uint32(58).string(message.summary);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSubmitProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.group_policy_address = reader.string();
                    break;
                case 2:
                    message.proposers.push(reader.string());
                    break;
                case 3:
                    message.metadata = reader.string();
                    break;
                case 4:
                    message.messages.push(Any.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.exec = reader.int32();
                    break;
                case 6:
                    message.title = reader.string();
                    break;
                case 7:
                    message.summary = reader.string();
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
            group_policy_address: isSet(object.group_policy_address) ? String(object.group_policy_address) : "",
            proposers: Array.isArray(object?.proposers) ? object.proposers.map((e) => String(e)) : [],
            metadata: isSet(object.metadata) ? String(object.metadata) : "",
            messages: Array.isArray(object?.messages) ? object.messages.map((e) => Any.fromJSON(e)) : [],
            exec: isSet(object.exec) ? execFromJSON(object.exec) : -1,
            title: isSet(object.title) ? String(object.title) : "",
            summary: isSet(object.summary) ? String(object.summary) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.group_policy_address !== undefined && (obj.group_policy_address = message.group_policy_address);
        if (message.proposers) {
            obj.proposers = message.proposers.map(e => e);
        }
        else {
            obj.proposers = [];
        }
        message.metadata !== undefined && (obj.metadata = message.metadata);
        if (message.messages) {
            obj.messages = message.messages.map(e => e ? Any.toJSON(e) : undefined);
        }
        else {
            obj.messages = [];
        }
        message.exec !== undefined && (obj.exec = execToJSON(message.exec));
        message.title !== undefined && (obj.title = message.title);
        message.summary !== undefined && (obj.summary = message.summary);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSubmitProposal();
        message.group_policy_address = object.group_policy_address ?? "";
        message.proposers = object.proposers?.map(e => e) || [];
        message.metadata = object.metadata ?? "";
        message.messages = object.messages?.map(e => Any.fromPartial(e)) || [];
        message.exec = object.exec ?? 0;
        message.title = object.title ?? "";
        message.summary = object.summary ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgSubmitProposal();
        if (object.group_policy_address !== undefined && object.group_policy_address !== null) {
            message.group_policy_address = object.group_policy_address;
        }
        message.proposers = object.proposers?.map(e => e) || [];
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = object.metadata;
        }
        message.messages = object.messages?.map(e => Any.fromAmino(e)) || [];
        if (object.exec !== undefined && object.exec !== null) {
            message.exec = execFromJSON(object.exec);
        }
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.summary !== undefined && object.summary !== null) {
            message.summary = object.summary;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.group_policy_address = message.group_policy_address;
        if (message.proposers) {
            obj.proposers = message.proposers.map(e => e);
        }
        else {
            obj.proposers = [];
        }
        obj.metadata = message.metadata;
        if (message.messages) {
            obj.messages = message.messages.map(e => e ? Any.toAmino(e) : undefined);
        }
        else {
            obj.messages = [];
        }
        obj.exec = message.exec;
        obj.title = message.title;
        obj.summary = message.summary;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgSubmitProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/group/MsgSubmitProposal",
            value: MsgSubmitProposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgSubmitProposal.decode(message.value);
    },
    toProto(message) {
        return MsgSubmitProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MsgSubmitProposal",
            value: MsgSubmitProposal.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgSubmitProposal.typeUrl, MsgSubmitProposal);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgSubmitProposal.aminoType, MsgSubmitProposal.typeUrl);
function createBaseMsgSubmitProposalResponse() {
    return {
        proposal_id: BigInt(0)
    };
}
export const MsgSubmitProposalResponse = {
    typeUrl: "/cosmos.group.v1.MsgSubmitProposalResponse",
    aminoType: "cosmos-sdk/MsgSubmitProposalResponse",
    is(o) {
        return o && (o.$typeUrl === MsgSubmitProposalResponse.typeUrl || typeof o.proposal_id === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === MsgSubmitProposalResponse.typeUrl || typeof o.proposal_id === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === MsgSubmitProposalResponse.typeUrl || typeof o.proposal_id === "bigint");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.proposal_id !== BigInt(0)) {
            writer.uint32(8).uint64(message.proposal_id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSubmitProposalResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposal_id = reader.uint64();
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
            proposal_id: isSet(object.proposal_id) ? BigInt(object.proposal_id.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.proposal_id !== undefined && (obj.proposal_id = (message.proposal_id || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSubmitProposalResponse();
        message.proposal_id = object.proposal_id !== undefined && object.proposal_id !== null ? BigInt(object.proposal_id.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgSubmitProposalResponse();
        if (object.proposal_id !== undefined && object.proposal_id !== null) {
            message.proposal_id = BigInt(object.proposal_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposal_id ? message.proposal_id.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgSubmitProposalResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgSubmitProposalResponse",
            value: MsgSubmitProposalResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgSubmitProposalResponse.decode(message.value);
    },
    toProto(message) {
        return MsgSubmitProposalResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MsgSubmitProposalResponse",
            value: MsgSubmitProposalResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgSubmitProposalResponse.typeUrl, MsgSubmitProposalResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgSubmitProposalResponse.aminoType, MsgSubmitProposalResponse.typeUrl);
function createBaseMsgWithdrawProposal() {
    return {
        proposal_id: BigInt(0),
        address: ""
    };
}
export const MsgWithdrawProposal = {
    typeUrl: "/cosmos.group.v1.MsgWithdrawProposal",
    aminoType: "cosmos-sdk/group/MsgWithdrawProposal",
    is(o) {
        return o && (o.$typeUrl === MsgWithdrawProposal.typeUrl || typeof o.proposal_id === "bigint" && typeof o.address === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === MsgWithdrawProposal.typeUrl || typeof o.proposal_id === "bigint" && typeof o.address === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === MsgWithdrawProposal.typeUrl || typeof o.proposal_id === "bigint" && typeof o.address === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.proposal_id !== BigInt(0)) {
            writer.uint32(8).uint64(message.proposal_id);
        }
        if (message.address !== "") {
            writer.uint32(18).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgWithdrawProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposal_id = reader.uint64();
                    break;
                case 2:
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
            proposal_id: isSet(object.proposal_id) ? BigInt(object.proposal_id.toString()) : BigInt(0),
            address: isSet(object.address) ? String(object.address) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.proposal_id !== undefined && (obj.proposal_id = (message.proposal_id || BigInt(0)).toString());
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgWithdrawProposal();
        message.proposal_id = object.proposal_id !== undefined && object.proposal_id !== null ? BigInt(object.proposal_id.toString()) : BigInt(0);
        message.address = object.address ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgWithdrawProposal();
        if (object.proposal_id !== undefined && object.proposal_id !== null) {
            message.proposal_id = BigInt(object.proposal_id);
        }
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposal_id ? message.proposal_id.toString() : undefined;
        obj.address = message.address;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgWithdrawProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/group/MsgWithdrawProposal",
            value: MsgWithdrawProposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgWithdrawProposal.decode(message.value);
    },
    toProto(message) {
        return MsgWithdrawProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MsgWithdrawProposal",
            value: MsgWithdrawProposal.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgWithdrawProposal.typeUrl, MsgWithdrawProposal);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgWithdrawProposal.aminoType, MsgWithdrawProposal.typeUrl);
function createBaseMsgWithdrawProposalResponse() {
    return {};
}
export const MsgWithdrawProposalResponse = {
    typeUrl: "/cosmos.group.v1.MsgWithdrawProposalResponse",
    aminoType: "cosmos-sdk/MsgWithdrawProposalResponse",
    is(o) {
        return o && o.$typeUrl === MsgWithdrawProposalResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === MsgWithdrawProposalResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === MsgWithdrawProposalResponse.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgWithdrawProposalResponse();
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
        const message = createBaseMsgWithdrawProposalResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgWithdrawProposalResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgWithdrawProposalResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgWithdrawProposalResponse",
            value: MsgWithdrawProposalResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgWithdrawProposalResponse.decode(message.value);
    },
    toProto(message) {
        return MsgWithdrawProposalResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MsgWithdrawProposalResponse",
            value: MsgWithdrawProposalResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgWithdrawProposalResponse.typeUrl, MsgWithdrawProposalResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgWithdrawProposalResponse.aminoType, MsgWithdrawProposalResponse.typeUrl);
function createBaseMsgVote() {
    return {
        proposal_id: BigInt(0),
        voter: "",
        option: 0,
        metadata: "",
        exec: 0
    };
}
export const MsgVote = {
    typeUrl: "/cosmos.group.v1.MsgVote",
    aminoType: "cosmos-sdk/group/MsgVote",
    is(o) {
        return o && (o.$typeUrl === MsgVote.typeUrl || typeof o.proposal_id === "bigint" && typeof o.voter === "string" && isSet(o.option) && typeof o.metadata === "string" && isSet(o.exec));
    },
    isSDK(o) {
        return o && (o.$typeUrl === MsgVote.typeUrl || typeof o.proposal_id === "bigint" && typeof o.voter === "string" && isSet(o.option) && typeof o.metadata === "string" && isSet(o.exec));
    },
    isAmino(o) {
        return o && (o.$typeUrl === MsgVote.typeUrl || typeof o.proposal_id === "bigint" && typeof o.voter === "string" && isSet(o.option) && typeof o.metadata === "string" && isSet(o.exec));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.proposal_id !== BigInt(0)) {
            writer.uint32(8).uint64(message.proposal_id);
        }
        if (message.voter !== "") {
            writer.uint32(18).string(message.voter);
        }
        if (message.option !== 0) {
            writer.uint32(24).int32(message.option);
        }
        if (message.metadata !== "") {
            writer.uint32(34).string(message.metadata);
        }
        if (message.exec !== 0) {
            writer.uint32(40).int32(message.exec);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgVote();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposal_id = reader.uint64();
                    break;
                case 2:
                    message.voter = reader.string();
                    break;
                case 3:
                    message.option = reader.int32();
                    break;
                case 4:
                    message.metadata = reader.string();
                    break;
                case 5:
                    message.exec = reader.int32();
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
            proposal_id: isSet(object.proposal_id) ? BigInt(object.proposal_id.toString()) : BigInt(0),
            voter: isSet(object.voter) ? String(object.voter) : "",
            option: isSet(object.option) ? voteOptionFromJSON(object.option) : -1,
            metadata: isSet(object.metadata) ? String(object.metadata) : "",
            exec: isSet(object.exec) ? execFromJSON(object.exec) : -1
        };
    },
    toJSON(message) {
        const obj = {};
        message.proposal_id !== undefined && (obj.proposal_id = (message.proposal_id || BigInt(0)).toString());
        message.voter !== undefined && (obj.voter = message.voter);
        message.option !== undefined && (obj.option = voteOptionToJSON(message.option));
        message.metadata !== undefined && (obj.metadata = message.metadata);
        message.exec !== undefined && (obj.exec = execToJSON(message.exec));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgVote();
        message.proposal_id = object.proposal_id !== undefined && object.proposal_id !== null ? BigInt(object.proposal_id.toString()) : BigInt(0);
        message.voter = object.voter ?? "";
        message.option = object.option ?? 0;
        message.metadata = object.metadata ?? "";
        message.exec = object.exec ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgVote();
        if (object.proposal_id !== undefined && object.proposal_id !== null) {
            message.proposal_id = BigInt(object.proposal_id);
        }
        if (object.voter !== undefined && object.voter !== null) {
            message.voter = object.voter;
        }
        if (object.option !== undefined && object.option !== null) {
            message.option = voteOptionFromJSON(object.option);
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = object.metadata;
        }
        if (object.exec !== undefined && object.exec !== null) {
            message.exec = execFromJSON(object.exec);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposal_id ? message.proposal_id.toString() : undefined;
        obj.voter = message.voter;
        obj.option = message.option;
        obj.metadata = message.metadata;
        obj.exec = message.exec;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgVote.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/group/MsgVote",
            value: MsgVote.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgVote.decode(message.value);
    },
    toProto(message) {
        return MsgVote.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MsgVote",
            value: MsgVote.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgVote.typeUrl, MsgVote);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgVote.aminoType, MsgVote.typeUrl);
function createBaseMsgVoteResponse() {
    return {};
}
export const MsgVoteResponse = {
    typeUrl: "/cosmos.group.v1.MsgVoteResponse",
    aminoType: "cosmos-sdk/MsgVoteResponse",
    is(o) {
        return o && o.$typeUrl === MsgVoteResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === MsgVoteResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === MsgVoteResponse.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgVoteResponse();
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
        const message = createBaseMsgVoteResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgVoteResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgVoteResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgVoteResponse",
            value: MsgVoteResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgVoteResponse.decode(message.value);
    },
    toProto(message) {
        return MsgVoteResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MsgVoteResponse",
            value: MsgVoteResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgVoteResponse.typeUrl, MsgVoteResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgVoteResponse.aminoType, MsgVoteResponse.typeUrl);
function createBaseMsgExec() {
    return {
        proposal_id: BigInt(0),
        executor: ""
    };
}
export const MsgExec = {
    typeUrl: "/cosmos.group.v1.MsgExec",
    aminoType: "cosmos-sdk/group/MsgExec",
    is(o) {
        return o && (o.$typeUrl === MsgExec.typeUrl || typeof o.proposal_id === "bigint" && typeof o.executor === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === MsgExec.typeUrl || typeof o.proposal_id === "bigint" && typeof o.executor === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === MsgExec.typeUrl || typeof o.proposal_id === "bigint" && typeof o.executor === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.proposal_id !== BigInt(0)) {
            writer.uint32(8).uint64(message.proposal_id);
        }
        if (message.executor !== "") {
            writer.uint32(18).string(message.executor);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgExec();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposal_id = reader.uint64();
                    break;
                case 2:
                    message.executor = reader.string();
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
            proposal_id: isSet(object.proposal_id) ? BigInt(object.proposal_id.toString()) : BigInt(0),
            executor: isSet(object.executor) ? String(object.executor) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.proposal_id !== undefined && (obj.proposal_id = (message.proposal_id || BigInt(0)).toString());
        message.executor !== undefined && (obj.executor = message.executor);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgExec();
        message.proposal_id = object.proposal_id !== undefined && object.proposal_id !== null ? BigInt(object.proposal_id.toString()) : BigInt(0);
        message.executor = object.executor ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgExec();
        if (object.proposal_id !== undefined && object.proposal_id !== null) {
            message.proposal_id = BigInt(object.proposal_id);
        }
        if (object.executor !== undefined && object.executor !== null) {
            message.executor = object.executor;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposal_id ? message.proposal_id.toString() : undefined;
        obj.executor = message.executor;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgExec.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/group/MsgExec",
            value: MsgExec.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgExec.decode(message.value);
    },
    toProto(message) {
        return MsgExec.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MsgExec",
            value: MsgExec.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgExec.typeUrl, MsgExec);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgExec.aminoType, MsgExec.typeUrl);
function createBaseMsgExecResponse() {
    return {
        result: 0
    };
}
export const MsgExecResponse = {
    typeUrl: "/cosmos.group.v1.MsgExecResponse",
    aminoType: "cosmos-sdk/MsgExecResponse",
    is(o) {
        return o && (o.$typeUrl === MsgExecResponse.typeUrl || isSet(o.result));
    },
    isSDK(o) {
        return o && (o.$typeUrl === MsgExecResponse.typeUrl || isSet(o.result));
    },
    isAmino(o) {
        return o && (o.$typeUrl === MsgExecResponse.typeUrl || isSet(o.result));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.result !== 0) {
            writer.uint32(16).int32(message.result);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgExecResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.result = reader.int32();
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
            result: isSet(object.result) ? proposalExecutorResultFromJSON(object.result) : -1
        };
    },
    toJSON(message) {
        const obj = {};
        message.result !== undefined && (obj.result = proposalExecutorResultToJSON(message.result));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgExecResponse();
        message.result = object.result ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgExecResponse();
        if (object.result !== undefined && object.result !== null) {
            message.result = proposalExecutorResultFromJSON(object.result);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.result = message.result;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgExecResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgExecResponse",
            value: MsgExecResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgExecResponse.decode(message.value);
    },
    toProto(message) {
        return MsgExecResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MsgExecResponse",
            value: MsgExecResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgExecResponse.typeUrl, MsgExecResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgExecResponse.aminoType, MsgExecResponse.typeUrl);
function createBaseMsgLeaveGroup() {
    return {
        address: "",
        group_id: BigInt(0)
    };
}
export const MsgLeaveGroup = {
    typeUrl: "/cosmos.group.v1.MsgLeaveGroup",
    aminoType: "cosmos-sdk/group/MsgLeaveGroup",
    is(o) {
        return o && (o.$typeUrl === MsgLeaveGroup.typeUrl || typeof o.address === "string" && typeof o.group_id === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === MsgLeaveGroup.typeUrl || typeof o.address === "string" && typeof o.group_id === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === MsgLeaveGroup.typeUrl || typeof o.address === "string" && typeof o.group_id === "bigint");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.group_id !== BigInt(0)) {
            writer.uint32(16).uint64(message.group_id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgLeaveGroup();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.group_id = reader.uint64();
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
            group_id: isSet(object.group_id) ? BigInt(object.group_id.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.group_id !== undefined && (obj.group_id = (message.group_id || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgLeaveGroup();
        message.address = object.address ?? "";
        message.group_id = object.group_id !== undefined && object.group_id !== null ? BigInt(object.group_id.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgLeaveGroup();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.group_id !== undefined && object.group_id !== null) {
            message.group_id = BigInt(object.group_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        obj.group_id = message.group_id ? message.group_id.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgLeaveGroup.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/group/MsgLeaveGroup",
            value: MsgLeaveGroup.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgLeaveGroup.decode(message.value);
    },
    toProto(message) {
        return MsgLeaveGroup.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MsgLeaveGroup",
            value: MsgLeaveGroup.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgLeaveGroup.typeUrl, MsgLeaveGroup);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgLeaveGroup.aminoType, MsgLeaveGroup.typeUrl);
function createBaseMsgLeaveGroupResponse() {
    return {};
}
export const MsgLeaveGroupResponse = {
    typeUrl: "/cosmos.group.v1.MsgLeaveGroupResponse",
    aminoType: "cosmos-sdk/MsgLeaveGroupResponse",
    is(o) {
        return o && o.$typeUrl === MsgLeaveGroupResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === MsgLeaveGroupResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === MsgLeaveGroupResponse.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgLeaveGroupResponse();
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
        const message = createBaseMsgLeaveGroupResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgLeaveGroupResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgLeaveGroupResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgLeaveGroupResponse",
            value: MsgLeaveGroupResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgLeaveGroupResponse.decode(message.value);
    },
    toProto(message) {
        return MsgLeaveGroupResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.MsgLeaveGroupResponse",
            value: MsgLeaveGroupResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(MsgLeaveGroupResponse.typeUrl, MsgLeaveGroupResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgLeaveGroupResponse.aminoType, MsgLeaveGroupResponse.typeUrl);
//# sourceMappingURL=tx.js.map
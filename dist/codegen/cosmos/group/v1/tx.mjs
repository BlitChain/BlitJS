//@ts-nocheck
import { Member, ThresholdDecisionPolicy, PercentageDecisionPolicy, voteOptionFromJSON, voteOptionToJSON } from "./types";
import { Any } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
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
    encode(message, writer = BinaryWriter.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        for (const v of message.members) {
            Member.encode(v, writer.uint32(18).fork()).ldelim();
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
                    message.members.push(Member.decode(reader, reader.uint32()));
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
            members: Array.isArray(object?.members) ? object.members.map((e) => Member.fromJSON(e)) : [],
            metadata: isSet(object.metadata) ? String(object.metadata) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.admin !== undefined && (obj.admin = message.admin);
        if (message.members) {
            obj.members = message.members.map(e => e ? Member.toJSON(e) : undefined);
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
        message.members = object.members?.map(e => Member.fromPartial(e)) || [];
        message.metadata = object.metadata ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            admin: object?.admin,
            members: Array.isArray(object?.members) ? object.members.map((e) => Member.fromSDK(e)) : [],
            metadata: object?.metadata
        };
    },
    toSDK(message) {
        const obj = {};
        obj.admin = message.admin;
        if (message.members) {
            obj.members = message.members.map(e => e ? Member.toSDK(e) : undefined);
        }
        else {
            obj.members = [];
        }
        obj.metadata = message.metadata;
        return obj;
    },
    fromAmino(object) {
        return {
            admin: object.admin,
            members: Array.isArray(object?.members) ? object.members.map((e) => Member.fromAmino(e)) : [],
            metadata: object.metadata
        };
    },
    toAmino(message) {
        const obj = {};
        obj.admin = message.admin;
        if (message.members) {
            obj.members = message.members.map(e => e ? Member.toAmino(e) : undefined);
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
function createBaseMsgCreateGroupResponse() {
    return {
        group_id: BigInt(0)
    };
}
export const MsgCreateGroupResponse = {
    typeUrl: "/cosmos.group.v1.MsgCreateGroupResponse",
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
    fromSDK(object) {
        return {
            group_id: object?.group_id
        };
    },
    toSDK(message) {
        const obj = {};
        obj.group_id = message.group_id;
        return obj;
    },
    fromAmino(object) {
        return {
            group_id: BigInt(object.group_id)
        };
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
function createBaseMsgUpdateGroupMembers() {
    return {
        admin: "",
        group_id: BigInt(0),
        member_updates: []
    };
}
export const MsgUpdateGroupMembers = {
    typeUrl: "/cosmos.group.v1.MsgUpdateGroupMembers",
    encode(message, writer = BinaryWriter.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (message.group_id !== BigInt(0)) {
            writer.uint32(16).uint64(message.group_id);
        }
        for (const v of message.member_updates) {
            Member.encode(v, writer.uint32(26).fork()).ldelim();
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
                    message.member_updates.push(Member.decode(reader, reader.uint32()));
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
            member_updates: Array.isArray(object?.member_updates) ? object.member_updates.map((e) => Member.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.admin !== undefined && (obj.admin = message.admin);
        message.group_id !== undefined && (obj.group_id = (message.group_id || BigInt(0)).toString());
        if (message.member_updates) {
            obj.member_updates = message.member_updates.map(e => e ? Member.toJSON(e) : undefined);
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
        message.member_updates = object.member_updates?.map(e => Member.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            admin: object?.admin,
            group_id: object?.group_id,
            member_updates: Array.isArray(object?.member_updates) ? object.member_updates.map((e) => Member.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.admin = message.admin;
        obj.group_id = message.group_id;
        if (message.member_updates) {
            obj.member_updates = message.member_updates.map(e => e ? Member.toSDK(e) : undefined);
        }
        else {
            obj.member_updates = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            admin: object.admin,
            group_id: BigInt(object.group_id),
            member_updates: Array.isArray(object?.member_updates) ? object.member_updates.map((e) => Member.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.admin = message.admin;
        obj.group_id = message.group_id ? message.group_id.toString() : undefined;
        if (message.member_updates) {
            obj.member_updates = message.member_updates.map(e => e ? Member.toAmino(e) : undefined);
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
function createBaseMsgUpdateGroupMembersResponse() {
    return {};
}
export const MsgUpdateGroupMembersResponse = {
    typeUrl: "/cosmos.group.v1.MsgUpdateGroupMembersResponse",
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
function createBaseMsgUpdateGroupAdmin() {
    return {
        admin: "",
        group_id: BigInt(0),
        new_admin: ""
    };
}
export const MsgUpdateGroupAdmin = {
    typeUrl: "/cosmos.group.v1.MsgUpdateGroupAdmin",
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
    fromSDK(object) {
        return {
            admin: object?.admin,
            group_id: object?.group_id,
            new_admin: object?.new_admin
        };
    },
    toSDK(message) {
        const obj = {};
        obj.admin = message.admin;
        obj.group_id = message.group_id;
        obj.new_admin = message.new_admin;
        return obj;
    },
    fromAmino(object) {
        return {
            admin: object.admin,
            group_id: BigInt(object.group_id),
            new_admin: object.new_admin
        };
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
function createBaseMsgUpdateGroupAdminResponse() {
    return {};
}
export const MsgUpdateGroupAdminResponse = {
    typeUrl: "/cosmos.group.v1.MsgUpdateGroupAdminResponse",
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
function createBaseMsgUpdateGroupMetadata() {
    return {
        admin: "",
        group_id: BigInt(0),
        metadata: ""
    };
}
export const MsgUpdateGroupMetadata = {
    typeUrl: "/cosmos.group.v1.MsgUpdateGroupMetadata",
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
    fromSDK(object) {
        return {
            admin: object?.admin,
            group_id: object?.group_id,
            metadata: object?.metadata
        };
    },
    toSDK(message) {
        const obj = {};
        obj.admin = message.admin;
        obj.group_id = message.group_id;
        obj.metadata = message.metadata;
        return obj;
    },
    fromAmino(object) {
        return {
            admin: object.admin,
            group_id: BigInt(object.group_id),
            metadata: object.metadata
        };
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
function createBaseMsgUpdateGroupMetadataResponse() {
    return {};
}
export const MsgUpdateGroupMetadataResponse = {
    typeUrl: "/cosmos.group.v1.MsgUpdateGroupMetadataResponse",
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
            Any.encode(message.decision_policy, writer.uint32(34).fork()).ldelim();
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
                    message.decision_policy = Cosmos_groupDecisionPolicy_InterfaceDecoder(reader);
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
            decision_policy: isSet(object.decision_policy) ? Any.fromJSON(object.decision_policy) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.admin !== undefined && (obj.admin = message.admin);
        message.group_id !== undefined && (obj.group_id = (message.group_id || BigInt(0)).toString());
        message.metadata !== undefined && (obj.metadata = message.metadata);
        message.decision_policy !== undefined && (obj.decision_policy = message.decision_policy ? Any.toJSON(message.decision_policy) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateGroupPolicy();
        message.admin = object.admin ?? "";
        message.group_id = object.group_id !== undefined && object.group_id !== null ? BigInt(object.group_id.toString()) : BigInt(0);
        message.metadata = object.metadata ?? "";
        message.decision_policy = object.decision_policy !== undefined && object.decision_policy !== null ? Any.fromPartial(object.decision_policy) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            admin: object?.admin,
            group_id: object?.group_id,
            metadata: object?.metadata,
            decision_policy: object.decision_policy ? Any.fromSDK(object.decision_policy) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.admin = message.admin;
        obj.group_id = message.group_id;
        obj.metadata = message.metadata;
        message.decision_policy !== undefined && (obj.decision_policy = message.decision_policy ? Any.toSDK(message.decision_policy) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            admin: object.admin,
            group_id: BigInt(object.group_id),
            metadata: object.metadata,
            decision_policy: object?.decision_policy ? Cosmos_groupDecisionPolicy_FromAmino(object.decision_policy) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.admin = message.admin;
        obj.group_id = message.group_id ? message.group_id.toString() : undefined;
        obj.metadata = message.metadata;
        obj.decision_policy = message.decision_policy ? Cosmos_groupDecisionPolicy_ToAmino(message.decision_policy) : undefined;
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
function createBaseMsgCreateGroupPolicyResponse() {
    return {
        address: ""
    };
}
export const MsgCreateGroupPolicyResponse = {
    typeUrl: "/cosmos.group.v1.MsgCreateGroupPolicyResponse",
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
    fromSDK(object) {
        return {
            address: object?.address
        };
    },
    toSDK(message) {
        const obj = {};
        obj.address = message.address;
        return obj;
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
function createBaseMsgUpdateGroupPolicyAdmin() {
    return {
        admin: "",
        address: "",
        new_admin: ""
    };
}
export const MsgUpdateGroupPolicyAdmin = {
    typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin",
    encode(message, writer = BinaryWriter.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (message.address !== "") {
            writer.uint32(18).string(message.address);
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
                    message.address = reader.string();
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
            address: isSet(object.address) ? String(object.address) : "",
            new_admin: isSet(object.new_admin) ? String(object.new_admin) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.admin !== undefined && (obj.admin = message.admin);
        message.address !== undefined && (obj.address = message.address);
        message.new_admin !== undefined && (obj.new_admin = message.new_admin);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateGroupPolicyAdmin();
        message.admin = object.admin ?? "";
        message.address = object.address ?? "";
        message.new_admin = object.new_admin ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            admin: object?.admin,
            address: object?.address,
            new_admin: object?.new_admin
        };
    },
    toSDK(message) {
        const obj = {};
        obj.admin = message.admin;
        obj.address = message.address;
        obj.new_admin = message.new_admin;
        return obj;
    },
    fromAmino(object) {
        return {
            admin: object.admin,
            address: object.address,
            new_admin: object.new_admin
        };
    },
    toAmino(message) {
        const obj = {};
        obj.admin = message.admin;
        obj.address = message.address;
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
    encode(message, writer = BinaryWriter.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        for (const v of message.members) {
            Member.encode(v, writer.uint32(18).fork()).ldelim();
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
            Any.encode(message.decision_policy, writer.uint32(50).fork()).ldelim();
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
                    message.members.push(Member.decode(reader, reader.uint32()));
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
                    message.decision_policy = Cosmos_groupDecisionPolicy_InterfaceDecoder(reader);
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
            members: Array.isArray(object?.members) ? object.members.map((e) => Member.fromJSON(e)) : [],
            group_metadata: isSet(object.group_metadata) ? String(object.group_metadata) : "",
            group_policy_metadata: isSet(object.group_policy_metadata) ? String(object.group_policy_metadata) : "",
            group_policy_as_admin: isSet(object.group_policy_as_admin) ? Boolean(object.group_policy_as_admin) : false,
            decision_policy: isSet(object.decision_policy) ? Any.fromJSON(object.decision_policy) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.admin !== undefined && (obj.admin = message.admin);
        if (message.members) {
            obj.members = message.members.map(e => e ? Member.toJSON(e) : undefined);
        }
        else {
            obj.members = [];
        }
        message.group_metadata !== undefined && (obj.group_metadata = message.group_metadata);
        message.group_policy_metadata !== undefined && (obj.group_policy_metadata = message.group_policy_metadata);
        message.group_policy_as_admin !== undefined && (obj.group_policy_as_admin = message.group_policy_as_admin);
        message.decision_policy !== undefined && (obj.decision_policy = message.decision_policy ? Any.toJSON(message.decision_policy) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateGroupWithPolicy();
        message.admin = object.admin ?? "";
        message.members = object.members?.map(e => Member.fromPartial(e)) || [];
        message.group_metadata = object.group_metadata ?? "";
        message.group_policy_metadata = object.group_policy_metadata ?? "";
        message.group_policy_as_admin = object.group_policy_as_admin ?? false;
        message.decision_policy = object.decision_policy !== undefined && object.decision_policy !== null ? Any.fromPartial(object.decision_policy) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            admin: object?.admin,
            members: Array.isArray(object?.members) ? object.members.map((e) => Member.fromSDK(e)) : [],
            group_metadata: object?.group_metadata,
            group_policy_metadata: object?.group_policy_metadata,
            group_policy_as_admin: object?.group_policy_as_admin,
            decision_policy: object.decision_policy ? Any.fromSDK(object.decision_policy) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.admin = message.admin;
        if (message.members) {
            obj.members = message.members.map(e => e ? Member.toSDK(e) : undefined);
        }
        else {
            obj.members = [];
        }
        obj.group_metadata = message.group_metadata;
        obj.group_policy_metadata = message.group_policy_metadata;
        obj.group_policy_as_admin = message.group_policy_as_admin;
        message.decision_policy !== undefined && (obj.decision_policy = message.decision_policy ? Any.toSDK(message.decision_policy) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            admin: object.admin,
            members: Array.isArray(object?.members) ? object.members.map((e) => Member.fromAmino(e)) : [],
            group_metadata: object.group_metadata,
            group_policy_metadata: object.group_policy_metadata,
            group_policy_as_admin: object.group_policy_as_admin,
            decision_policy: object?.decision_policy ? Cosmos_groupDecisionPolicy_FromAmino(object.decision_policy) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.admin = message.admin;
        if (message.members) {
            obj.members = message.members.map(e => e ? Member.toAmino(e) : undefined);
        }
        else {
            obj.members = [];
        }
        obj.group_metadata = message.group_metadata;
        obj.group_policy_metadata = message.group_policy_metadata;
        obj.group_policy_as_admin = message.group_policy_as_admin;
        obj.decision_policy = message.decision_policy ? Cosmos_groupDecisionPolicy_ToAmino(message.decision_policy) : undefined;
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
function createBaseMsgCreateGroupWithPolicyResponse() {
    return {
        group_id: BigInt(0),
        group_policy_address: ""
    };
}
export const MsgCreateGroupWithPolicyResponse = {
    typeUrl: "/cosmos.group.v1.MsgCreateGroupWithPolicyResponse",
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
    fromSDK(object) {
        return {
            group_id: object?.group_id,
            group_policy_address: object?.group_policy_address
        };
    },
    toSDK(message) {
        const obj = {};
        obj.group_id = message.group_id;
        obj.group_policy_address = message.group_policy_address;
        return obj;
    },
    fromAmino(object) {
        return {
            group_id: BigInt(object.group_id),
            group_policy_address: object.group_policy_address
        };
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
function createBaseMsgUpdateGroupPolicyAdminResponse() {
    return {};
}
export const MsgUpdateGroupPolicyAdminResponse = {
    typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyAdminResponse",
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
function createBaseMsgUpdateGroupPolicyDecisionPolicy() {
    return {
        admin: "",
        address: "",
        decision_policy: undefined
    };
}
export const MsgUpdateGroupPolicyDecisionPolicy = {
    typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy",
    encode(message, writer = BinaryWriter.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (message.address !== "") {
            writer.uint32(18).string(message.address);
        }
        if (message.decision_policy !== undefined) {
            Any.encode(message.decision_policy, writer.uint32(26).fork()).ldelim();
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
                    message.address = reader.string();
                    break;
                case 3:
                    message.decision_policy = Cosmos_groupDecisionPolicy_InterfaceDecoder(reader);
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
            address: isSet(object.address) ? String(object.address) : "",
            decision_policy: isSet(object.decision_policy) ? Any.fromJSON(object.decision_policy) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.admin !== undefined && (obj.admin = message.admin);
        message.address !== undefined && (obj.address = message.address);
        message.decision_policy !== undefined && (obj.decision_policy = message.decision_policy ? Any.toJSON(message.decision_policy) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateGroupPolicyDecisionPolicy();
        message.admin = object.admin ?? "";
        message.address = object.address ?? "";
        message.decision_policy = object.decision_policy !== undefined && object.decision_policy !== null ? Any.fromPartial(object.decision_policy) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            admin: object?.admin,
            address: object?.address,
            decision_policy: object.decision_policy ? Any.fromSDK(object.decision_policy) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.admin = message.admin;
        obj.address = message.address;
        message.decision_policy !== undefined && (obj.decision_policy = message.decision_policy ? Any.toSDK(message.decision_policy) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            admin: object.admin,
            address: object.address,
            decision_policy: object?.decision_policy ? Cosmos_groupDecisionPolicy_FromAmino(object.decision_policy) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.admin = message.admin;
        obj.address = message.address;
        obj.decision_policy = message.decision_policy ? Cosmos_groupDecisionPolicy_ToAmino(message.decision_policy) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdateGroupPolicyDecisionPolicy.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgUpdateGroupPolicyDecisionPolicy",
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
function createBaseMsgUpdateGroupPolicyDecisionPolicyResponse() {
    return {};
}
export const MsgUpdateGroupPolicyDecisionPolicyResponse = {
    typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicyResponse",
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
function createBaseMsgUpdateGroupPolicyMetadata() {
    return {
        admin: "",
        address: "",
        metadata: ""
    };
}
export const MsgUpdateGroupPolicyMetadata = {
    typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata",
    encode(message, writer = BinaryWriter.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (message.address !== "") {
            writer.uint32(18).string(message.address);
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
                    message.address = reader.string();
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
            address: isSet(object.address) ? String(object.address) : "",
            metadata: isSet(object.metadata) ? String(object.metadata) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.admin !== undefined && (obj.admin = message.admin);
        message.address !== undefined && (obj.address = message.address);
        message.metadata !== undefined && (obj.metadata = message.metadata);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateGroupPolicyMetadata();
        message.admin = object.admin ?? "";
        message.address = object.address ?? "";
        message.metadata = object.metadata ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            admin: object?.admin,
            address: object?.address,
            metadata: object?.metadata
        };
    },
    toSDK(message) {
        const obj = {};
        obj.admin = message.admin;
        obj.address = message.address;
        obj.metadata = message.metadata;
        return obj;
    },
    fromAmino(object) {
        return {
            admin: object.admin,
            address: object.address,
            metadata: object.metadata
        };
    },
    toAmino(message) {
        const obj = {};
        obj.admin = message.admin;
        obj.address = message.address;
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
function createBaseMsgUpdateGroupPolicyMetadataResponse() {
    return {};
}
export const MsgUpdateGroupPolicyMetadataResponse = {
    typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyMetadataResponse",
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
function createBaseMsgSubmitProposal() {
    return {
        address: "",
        proposers: [],
        metadata: "",
        messages: [],
        exec: 0
    };
}
export const MsgSubmitProposal = {
    typeUrl: "/cosmos.group.v1.MsgSubmitProposal",
    encode(message, writer = BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
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
                    message.address = reader.string();
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
            proposers: Array.isArray(object?.proposers) ? object.proposers.map((e) => String(e)) : [],
            metadata: isSet(object.metadata) ? String(object.metadata) : "",
            messages: Array.isArray(object?.messages) ? object.messages.map((e) => Any.fromJSON(e)) : [],
            exec: isSet(object.exec) ? execFromJSON(object.exec) : -1
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
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
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSubmitProposal();
        message.address = object.address ?? "";
        message.proposers = object.proposers?.map(e => e) || [];
        message.metadata = object.metadata ?? "";
        message.messages = object.messages?.map(e => Any.fromPartial(e)) || [];
        message.exec = object.exec ?? 0;
        return message;
    },
    fromSDK(object) {
        return {
            address: object?.address,
            proposers: Array.isArray(object?.proposers) ? object.proposers.map((e) => e) : [],
            metadata: object?.metadata,
            messages: Array.isArray(object?.messages) ? object.messages.map((e) => Any.fromSDK(e)) : [],
            exec: isSet(object.exec) ? execFromJSON(object.exec) : -1
        };
    },
    toSDK(message) {
        const obj = {};
        obj.address = message.address;
        if (message.proposers) {
            obj.proposers = message.proposers.map(e => e);
        }
        else {
            obj.proposers = [];
        }
        obj.metadata = message.metadata;
        if (message.messages) {
            obj.messages = message.messages.map(e => e ? Any.toSDK(e) : undefined);
        }
        else {
            obj.messages = [];
        }
        message.exec !== undefined && (obj.exec = execToJSON(message.exec));
        return obj;
    },
    fromAmino(object) {
        return {
            address: object.address,
            proposers: Array.isArray(object?.proposers) ? object.proposers.map((e) => e) : [],
            metadata: object.metadata,
            messages: Array.isArray(object?.messages) ? object.messages.map((e) => Any.fromAmino(e)) : [],
            exec: isSet(object.exec) ? execFromJSON(object.exec) : -1
        };
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
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
function createBaseMsgSubmitProposalResponse() {
    return {
        proposal_id: BigInt(0)
    };
}
export const MsgSubmitProposalResponse = {
    typeUrl: "/cosmos.group.v1.MsgSubmitProposalResponse",
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
    fromSDK(object) {
        return {
            proposal_id: object?.proposal_id
        };
    },
    toSDK(message) {
        const obj = {};
        obj.proposal_id = message.proposal_id;
        return obj;
    },
    fromAmino(object) {
        return {
            proposal_id: BigInt(object.proposal_id)
        };
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
function createBaseMsgWithdrawProposal() {
    return {
        proposal_id: BigInt(0),
        address: ""
    };
}
export const MsgWithdrawProposal = {
    typeUrl: "/cosmos.group.v1.MsgWithdrawProposal",
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
    fromSDK(object) {
        return {
            proposal_id: object?.proposal_id,
            address: object?.address
        };
    },
    toSDK(message) {
        const obj = {};
        obj.proposal_id = message.proposal_id;
        obj.address = message.address;
        return obj;
    },
    fromAmino(object) {
        return {
            proposal_id: BigInt(object.proposal_id),
            address: object.address
        };
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
function createBaseMsgWithdrawProposalResponse() {
    return {};
}
export const MsgWithdrawProposalResponse = {
    typeUrl: "/cosmos.group.v1.MsgWithdrawProposalResponse",
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
    fromSDK(object) {
        return {
            proposal_id: object?.proposal_id,
            voter: object?.voter,
            option: isSet(object.option) ? voteOptionFromJSON(object.option) : -1,
            metadata: object?.metadata,
            exec: isSet(object.exec) ? execFromJSON(object.exec) : -1
        };
    },
    toSDK(message) {
        const obj = {};
        obj.proposal_id = message.proposal_id;
        obj.voter = message.voter;
        message.option !== undefined && (obj.option = voteOptionToJSON(message.option));
        obj.metadata = message.metadata;
        message.exec !== undefined && (obj.exec = execToJSON(message.exec));
        return obj;
    },
    fromAmino(object) {
        return {
            proposal_id: BigInt(object.proposal_id),
            voter: object.voter,
            option: isSet(object.option) ? voteOptionFromJSON(object.option) : -1,
            metadata: object.metadata,
            exec: isSet(object.exec) ? execFromJSON(object.exec) : -1
        };
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
function createBaseMsgVoteResponse() {
    return {};
}
export const MsgVoteResponse = {
    typeUrl: "/cosmos.group.v1.MsgVoteResponse",
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
function createBaseMsgExec() {
    return {
        proposal_id: BigInt(0),
        signer: ""
    };
}
export const MsgExec = {
    typeUrl: "/cosmos.group.v1.MsgExec",
    encode(message, writer = BinaryWriter.create()) {
        if (message.proposal_id !== BigInt(0)) {
            writer.uint32(8).uint64(message.proposal_id);
        }
        if (message.signer !== "") {
            writer.uint32(18).string(message.signer);
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
                    message.signer = reader.string();
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
            signer: isSet(object.signer) ? String(object.signer) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.proposal_id !== undefined && (obj.proposal_id = (message.proposal_id || BigInt(0)).toString());
        message.signer !== undefined && (obj.signer = message.signer);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgExec();
        message.proposal_id = object.proposal_id !== undefined && object.proposal_id !== null ? BigInt(object.proposal_id.toString()) : BigInt(0);
        message.signer = object.signer ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            proposal_id: object?.proposal_id,
            signer: object?.signer
        };
    },
    toSDK(message) {
        const obj = {};
        obj.proposal_id = message.proposal_id;
        obj.signer = message.signer;
        return obj;
    },
    fromAmino(object) {
        return {
            proposal_id: BigInt(object.proposal_id),
            signer: object.signer
        };
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposal_id ? message.proposal_id.toString() : undefined;
        obj.signer = message.signer;
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
function createBaseMsgExecResponse() {
    return {};
}
export const MsgExecResponse = {
    typeUrl: "/cosmos.group.v1.MsgExecResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgExecResponse();
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
        const message = createBaseMsgExecResponse();
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
function createBaseMsgLeaveGroup() {
    return {
        address: "",
        group_id: BigInt(0)
    };
}
export const MsgLeaveGroup = {
    typeUrl: "/cosmos.group.v1.MsgLeaveGroup",
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
    fromSDK(object) {
        return {
            address: object?.address,
            group_id: object?.group_id
        };
    },
    toSDK(message) {
        const obj = {};
        obj.address = message.address;
        obj.group_id = message.group_id;
        return obj;
    },
    fromAmino(object) {
        return {
            address: object.address,
            group_id: BigInt(object.group_id)
        };
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
function createBaseMsgLeaveGroupResponse() {
    return {};
}
export const MsgLeaveGroupResponse = {
    typeUrl: "/cosmos.group.v1.MsgLeaveGroupResponse",
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
export const Cosmos_groupDecisionPolicy_InterfaceDecoder = (input) => {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const data = Any.decode(reader, reader.uint32(), true);
    switch (data.typeUrl) {
        case "/cosmos.group.v1.ThresholdDecisionPolicy":
            return ThresholdDecisionPolicy.decode(data.value, undefined, true);
        case "/cosmos.group.v1.PercentageDecisionPolicy":
            return PercentageDecisionPolicy.decode(data.value, undefined, true);
        default:
            return data;
    }
};
export const Cosmos_groupDecisionPolicy_FromAmino = (content) => {
    switch (content.type) {
        case "cosmos-sdk/ThresholdDecisionPolicy":
            return Any.fromPartial({
                typeUrl: "/cosmos.group.v1.ThresholdDecisionPolicy",
                value: ThresholdDecisionPolicy.encode(ThresholdDecisionPolicy.fromPartial(ThresholdDecisionPolicy.fromAmino(content.value))).finish()
            });
        case "cosmos-sdk/PercentageDecisionPolicy":
            return Any.fromPartial({
                typeUrl: "/cosmos.group.v1.PercentageDecisionPolicy",
                value: PercentageDecisionPolicy.encode(PercentageDecisionPolicy.fromPartial(PercentageDecisionPolicy.fromAmino(content.value))).finish()
            });
        default:
            return Any.fromAmino(content);
    }
};
export const Cosmos_groupDecisionPolicy_ToAmino = (content) => {
    switch (content.typeUrl) {
        case "/cosmos.group.v1.ThresholdDecisionPolicy":
            return {
                type: "cosmos-sdk/ThresholdDecisionPolicy",
                value: ThresholdDecisionPolicy.toAmino(ThresholdDecisionPolicy.decode(content.value, undefined))
            };
        case "/cosmos.group.v1.PercentageDecisionPolicy":
            return {
                type: "cosmos-sdk/PercentageDecisionPolicy",
                value: PercentageDecisionPolicy.toAmino(PercentageDecisionPolicy.decode(content.value, undefined))
            };
        default:
            return Any.toAmino(content);
    }
};
//# sourceMappingURL=tx.js.map
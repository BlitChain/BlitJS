"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryGroupsResponse = exports.QueryGroupsRequest = exports.QueryTallyResultResponse = exports.QueryTallyResultRequest = exports.QueryGroupsByMemberResponse = exports.QueryGroupsByMemberRequest = exports.QueryVotesByVoterResponse = exports.QueryVotesByVoterRequest = exports.QueryVotesByProposalResponse = exports.QueryVotesByProposalRequest = exports.QueryVoteByProposalVoterResponse = exports.QueryVoteByProposalVoterRequest = exports.QueryProposalsByGroupPolicyResponse = exports.QueryProposalsByGroupPolicyRequest = exports.QueryProposalResponse = exports.QueryProposalRequest = exports.QueryGroupPoliciesByAdminResponse = exports.QueryGroupPoliciesByAdminRequest = exports.QueryGroupPoliciesByGroupResponse = exports.QueryGroupPoliciesByGroupRequest = exports.QueryGroupsByAdminResponse = exports.QueryGroupsByAdminRequest = exports.QueryGroupMembersResponse = exports.QueryGroupMembersRequest = exports.QueryGroupPolicyInfoResponse = exports.QueryGroupPolicyInfoRequest = exports.QueryGroupInfoResponse = exports.QueryGroupInfoRequest = exports.protobufPackage = void 0;
//@ts-nocheck
const pagination_1 = require("../../base/query/v1beta1/pagination");
const types_1 = require("./types");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "cosmos.group.v1";
function createBaseQueryGroupInfoRequest() {
    return {
        group_id: BigInt(0)
    };
}
exports.QueryGroupInfoRequest = {
    typeUrl: "/cosmos.group.v1.QueryGroupInfoRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.group_id !== BigInt(0)) {
            writer.uint32(8).uint64(message.group_id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGroupInfoRequest();
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
            group_id: (0, helpers_1.isSet)(object.group_id) ? BigInt(object.group_id.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.group_id !== undefined && (obj.group_id = (message.group_id || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGroupInfoRequest();
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
        return exports.QueryGroupInfoRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryGroupInfoRequest",
            value: exports.QueryGroupInfoRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryGroupInfoRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGroupInfoRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.QueryGroupInfoRequest",
            value: exports.QueryGroupInfoRequest.encode(message).finish()
        };
    }
};
function createBaseQueryGroupInfoResponse() {
    return {
        info: undefined
    };
}
exports.QueryGroupInfoResponse = {
    typeUrl: "/cosmos.group.v1.QueryGroupInfoResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.info !== undefined) {
            types_1.GroupInfo.encode(message.info, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGroupInfoResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.info = types_1.GroupInfo.decode(reader, reader.uint32());
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
            info: (0, helpers_1.isSet)(object.info) ? types_1.GroupInfo.fromJSON(object.info) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.info !== undefined && (obj.info = message.info ? types_1.GroupInfo.toJSON(message.info) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGroupInfoResponse();
        message.info = object.info !== undefined && object.info !== null ? types_1.GroupInfo.fromPartial(object.info) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            info: object.info ? types_1.GroupInfo.fromSDK(object.info) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.info !== undefined && (obj.info = message.info ? types_1.GroupInfo.toSDK(message.info) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            info: object?.info ? types_1.GroupInfo.fromAmino(object.info) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.info = message.info ? types_1.GroupInfo.toAmino(message.info) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryGroupInfoResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryGroupInfoResponse",
            value: exports.QueryGroupInfoResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryGroupInfoResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGroupInfoResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.QueryGroupInfoResponse",
            value: exports.QueryGroupInfoResponse.encode(message).finish()
        };
    }
};
function createBaseQueryGroupPolicyInfoRequest() {
    return {
        address: ""
    };
}
exports.QueryGroupPolicyInfoRequest = {
    typeUrl: "/cosmos.group.v1.QueryGroupPolicyInfoRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGroupPolicyInfoRequest();
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
            address: (0, helpers_1.isSet)(object.address) ? String(object.address) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGroupPolicyInfoRequest();
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
        return exports.QueryGroupPolicyInfoRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryGroupPolicyInfoRequest",
            value: exports.QueryGroupPolicyInfoRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryGroupPolicyInfoRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGroupPolicyInfoRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.QueryGroupPolicyInfoRequest",
            value: exports.QueryGroupPolicyInfoRequest.encode(message).finish()
        };
    }
};
function createBaseQueryGroupPolicyInfoResponse() {
    return {
        info: undefined
    };
}
exports.QueryGroupPolicyInfoResponse = {
    typeUrl: "/cosmos.group.v1.QueryGroupPolicyInfoResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.info !== undefined) {
            types_1.GroupPolicyInfo.encode(message.info, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGroupPolicyInfoResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.info = types_1.GroupPolicyInfo.decode(reader, reader.uint32());
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
            info: (0, helpers_1.isSet)(object.info) ? types_1.GroupPolicyInfo.fromJSON(object.info) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.info !== undefined && (obj.info = message.info ? types_1.GroupPolicyInfo.toJSON(message.info) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGroupPolicyInfoResponse();
        message.info = object.info !== undefined && object.info !== null ? types_1.GroupPolicyInfo.fromPartial(object.info) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            info: object.info ? types_1.GroupPolicyInfo.fromSDK(object.info) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.info !== undefined && (obj.info = message.info ? types_1.GroupPolicyInfo.toSDK(message.info) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            info: object?.info ? types_1.GroupPolicyInfo.fromAmino(object.info) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.info = message.info ? types_1.GroupPolicyInfo.toAmino(message.info) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryGroupPolicyInfoResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryGroupPolicyInfoResponse",
            value: exports.QueryGroupPolicyInfoResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryGroupPolicyInfoResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGroupPolicyInfoResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.QueryGroupPolicyInfoResponse",
            value: exports.QueryGroupPolicyInfoResponse.encode(message).finish()
        };
    }
};
function createBaseQueryGroupMembersRequest() {
    return {
        group_id: BigInt(0),
        pagination: undefined
    };
}
exports.QueryGroupMembersRequest = {
    typeUrl: "/cosmos.group.v1.QueryGroupMembersRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.group_id !== BigInt(0)) {
            writer.uint32(8).uint64(message.group_id);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGroupMembersRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.group_id = reader.uint64();
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
            group_id: (0, helpers_1.isSet)(object.group_id) ? BigInt(object.group_id.toString()) : BigInt(0),
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.group_id !== undefined && (obj.group_id = (message.group_id || BigInt(0)).toString());
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGroupMembersRequest();
        message.group_id = object.group_id !== undefined && object.group_id !== null ? BigInt(object.group_id.toString()) : BigInt(0);
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            group_id: object?.group_id,
            pagination: object.pagination ? pagination_1.PageRequest.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.group_id = message.group_id;
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            group_id: BigInt(object.group_id),
            pagination: object?.pagination ? pagination_1.PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.group_id = message.group_id ? message.group_id.toString() : undefined;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryGroupMembersRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryGroupMembersRequest",
            value: exports.QueryGroupMembersRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryGroupMembersRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGroupMembersRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.QueryGroupMembersRequest",
            value: exports.QueryGroupMembersRequest.encode(message).finish()
        };
    }
};
function createBaseQueryGroupMembersResponse() {
    return {
        members: [],
        pagination: undefined
    };
}
exports.QueryGroupMembersResponse = {
    typeUrl: "/cosmos.group.v1.QueryGroupMembersResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.members) {
            types_1.GroupMember.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGroupMembersResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.members.push(types_1.GroupMember.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
            members: Array.isArray(object?.members) ? object.members.map((e) => types_1.GroupMember.fromJSON(e)) : [],
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.members) {
            obj.members = message.members.map(e => e ? types_1.GroupMember.toJSON(e) : undefined);
        }
        else {
            obj.members = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGroupMembersResponse();
        message.members = object.members?.map(e => types_1.GroupMember.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            members: Array.isArray(object?.members) ? object.members.map((e) => types_1.GroupMember.fromSDK(e)) : [],
            pagination: object.pagination ? pagination_1.PageResponse.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.members) {
            obj.members = message.members.map(e => e ? types_1.GroupMember.toSDK(e) : undefined);
        }
        else {
            obj.members = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            members: Array.isArray(object?.members) ? object.members.map((e) => types_1.GroupMember.fromAmino(e)) : [],
            pagination: object?.pagination ? pagination_1.PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.members) {
            obj.members = message.members.map(e => e ? types_1.GroupMember.toAmino(e) : undefined);
        }
        else {
            obj.members = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryGroupMembersResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryGroupMembersResponse",
            value: exports.QueryGroupMembersResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryGroupMembersResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGroupMembersResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.QueryGroupMembersResponse",
            value: exports.QueryGroupMembersResponse.encode(message).finish()
        };
    }
};
function createBaseQueryGroupsByAdminRequest() {
    return {
        admin: "",
        pagination: undefined
    };
}
exports.QueryGroupsByAdminRequest = {
    typeUrl: "/cosmos.group.v1.QueryGroupsByAdminRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGroupsByAdminRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
            admin: (0, helpers_1.isSet)(object.admin) ? String(object.admin) : "",
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.admin !== undefined && (obj.admin = message.admin);
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGroupsByAdminRequest();
        message.admin = object.admin ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            admin: object?.admin,
            pagination: object.pagination ? pagination_1.PageRequest.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.admin = message.admin;
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            admin: object.admin,
            pagination: object?.pagination ? pagination_1.PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.admin = message.admin;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryGroupsByAdminRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryGroupsByAdminRequest",
            value: exports.QueryGroupsByAdminRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryGroupsByAdminRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGroupsByAdminRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.QueryGroupsByAdminRequest",
            value: exports.QueryGroupsByAdminRequest.encode(message).finish()
        };
    }
};
function createBaseQueryGroupsByAdminResponse() {
    return {
        groups: [],
        pagination: undefined
    };
}
exports.QueryGroupsByAdminResponse = {
    typeUrl: "/cosmos.group.v1.QueryGroupsByAdminResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.groups) {
            types_1.GroupInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGroupsByAdminResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groups.push(types_1.GroupInfo.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
            groups: Array.isArray(object?.groups) ? object.groups.map((e) => types_1.GroupInfo.fromJSON(e)) : [],
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.groups) {
            obj.groups = message.groups.map(e => e ? types_1.GroupInfo.toJSON(e) : undefined);
        }
        else {
            obj.groups = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGroupsByAdminResponse();
        message.groups = object.groups?.map(e => types_1.GroupInfo.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            groups: Array.isArray(object?.groups) ? object.groups.map((e) => types_1.GroupInfo.fromSDK(e)) : [],
            pagination: object.pagination ? pagination_1.PageResponse.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.groups) {
            obj.groups = message.groups.map(e => e ? types_1.GroupInfo.toSDK(e) : undefined);
        }
        else {
            obj.groups = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            groups: Array.isArray(object?.groups) ? object.groups.map((e) => types_1.GroupInfo.fromAmino(e)) : [],
            pagination: object?.pagination ? pagination_1.PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.groups) {
            obj.groups = message.groups.map(e => e ? types_1.GroupInfo.toAmino(e) : undefined);
        }
        else {
            obj.groups = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryGroupsByAdminResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryGroupsByAdminResponse",
            value: exports.QueryGroupsByAdminResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryGroupsByAdminResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGroupsByAdminResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.QueryGroupsByAdminResponse",
            value: exports.QueryGroupsByAdminResponse.encode(message).finish()
        };
    }
};
function createBaseQueryGroupPoliciesByGroupRequest() {
    return {
        group_id: BigInt(0),
        pagination: undefined
    };
}
exports.QueryGroupPoliciesByGroupRequest = {
    typeUrl: "/cosmos.group.v1.QueryGroupPoliciesByGroupRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.group_id !== BigInt(0)) {
            writer.uint32(8).uint64(message.group_id);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGroupPoliciesByGroupRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.group_id = reader.uint64();
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
            group_id: (0, helpers_1.isSet)(object.group_id) ? BigInt(object.group_id.toString()) : BigInt(0),
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.group_id !== undefined && (obj.group_id = (message.group_id || BigInt(0)).toString());
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGroupPoliciesByGroupRequest();
        message.group_id = object.group_id !== undefined && object.group_id !== null ? BigInt(object.group_id.toString()) : BigInt(0);
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            group_id: object?.group_id,
            pagination: object.pagination ? pagination_1.PageRequest.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.group_id = message.group_id;
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            group_id: BigInt(object.group_id),
            pagination: object?.pagination ? pagination_1.PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.group_id = message.group_id ? message.group_id.toString() : undefined;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryGroupPoliciesByGroupRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryGroupPoliciesByGroupRequest",
            value: exports.QueryGroupPoliciesByGroupRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryGroupPoliciesByGroupRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGroupPoliciesByGroupRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.QueryGroupPoliciesByGroupRequest",
            value: exports.QueryGroupPoliciesByGroupRequest.encode(message).finish()
        };
    }
};
function createBaseQueryGroupPoliciesByGroupResponse() {
    return {
        group_policies: [],
        pagination: undefined
    };
}
exports.QueryGroupPoliciesByGroupResponse = {
    typeUrl: "/cosmos.group.v1.QueryGroupPoliciesByGroupResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.group_policies) {
            types_1.GroupPolicyInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGroupPoliciesByGroupResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.group_policies.push(types_1.GroupPolicyInfo.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
            group_policies: Array.isArray(object?.group_policies) ? object.group_policies.map((e) => types_1.GroupPolicyInfo.fromJSON(e)) : [],
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.group_policies) {
            obj.group_policies = message.group_policies.map(e => e ? types_1.GroupPolicyInfo.toJSON(e) : undefined);
        }
        else {
            obj.group_policies = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGroupPoliciesByGroupResponse();
        message.group_policies = object.group_policies?.map(e => types_1.GroupPolicyInfo.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            group_policies: Array.isArray(object?.group_policies) ? object.group_policies.map((e) => types_1.GroupPolicyInfo.fromSDK(e)) : [],
            pagination: object.pagination ? pagination_1.PageResponse.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.group_policies) {
            obj.group_policies = message.group_policies.map(e => e ? types_1.GroupPolicyInfo.toSDK(e) : undefined);
        }
        else {
            obj.group_policies = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            group_policies: Array.isArray(object?.group_policies) ? object.group_policies.map((e) => types_1.GroupPolicyInfo.fromAmino(e)) : [],
            pagination: object?.pagination ? pagination_1.PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.group_policies) {
            obj.group_policies = message.group_policies.map(e => e ? types_1.GroupPolicyInfo.toAmino(e) : undefined);
        }
        else {
            obj.group_policies = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryGroupPoliciesByGroupResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryGroupPoliciesByGroupResponse",
            value: exports.QueryGroupPoliciesByGroupResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryGroupPoliciesByGroupResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGroupPoliciesByGroupResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.QueryGroupPoliciesByGroupResponse",
            value: exports.QueryGroupPoliciesByGroupResponse.encode(message).finish()
        };
    }
};
function createBaseQueryGroupPoliciesByAdminRequest() {
    return {
        admin: "",
        pagination: undefined
    };
}
exports.QueryGroupPoliciesByAdminRequest = {
    typeUrl: "/cosmos.group.v1.QueryGroupPoliciesByAdminRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGroupPoliciesByAdminRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
            admin: (0, helpers_1.isSet)(object.admin) ? String(object.admin) : "",
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.admin !== undefined && (obj.admin = message.admin);
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGroupPoliciesByAdminRequest();
        message.admin = object.admin ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            admin: object?.admin,
            pagination: object.pagination ? pagination_1.PageRequest.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.admin = message.admin;
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            admin: object.admin,
            pagination: object?.pagination ? pagination_1.PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.admin = message.admin;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryGroupPoliciesByAdminRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryGroupPoliciesByAdminRequest",
            value: exports.QueryGroupPoliciesByAdminRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryGroupPoliciesByAdminRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGroupPoliciesByAdminRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.QueryGroupPoliciesByAdminRequest",
            value: exports.QueryGroupPoliciesByAdminRequest.encode(message).finish()
        };
    }
};
function createBaseQueryGroupPoliciesByAdminResponse() {
    return {
        group_policies: [],
        pagination: undefined
    };
}
exports.QueryGroupPoliciesByAdminResponse = {
    typeUrl: "/cosmos.group.v1.QueryGroupPoliciesByAdminResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.group_policies) {
            types_1.GroupPolicyInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGroupPoliciesByAdminResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.group_policies.push(types_1.GroupPolicyInfo.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
            group_policies: Array.isArray(object?.group_policies) ? object.group_policies.map((e) => types_1.GroupPolicyInfo.fromJSON(e)) : [],
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.group_policies) {
            obj.group_policies = message.group_policies.map(e => e ? types_1.GroupPolicyInfo.toJSON(e) : undefined);
        }
        else {
            obj.group_policies = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGroupPoliciesByAdminResponse();
        message.group_policies = object.group_policies?.map(e => types_1.GroupPolicyInfo.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            group_policies: Array.isArray(object?.group_policies) ? object.group_policies.map((e) => types_1.GroupPolicyInfo.fromSDK(e)) : [],
            pagination: object.pagination ? pagination_1.PageResponse.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.group_policies) {
            obj.group_policies = message.group_policies.map(e => e ? types_1.GroupPolicyInfo.toSDK(e) : undefined);
        }
        else {
            obj.group_policies = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            group_policies: Array.isArray(object?.group_policies) ? object.group_policies.map((e) => types_1.GroupPolicyInfo.fromAmino(e)) : [],
            pagination: object?.pagination ? pagination_1.PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.group_policies) {
            obj.group_policies = message.group_policies.map(e => e ? types_1.GroupPolicyInfo.toAmino(e) : undefined);
        }
        else {
            obj.group_policies = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryGroupPoliciesByAdminResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryGroupPoliciesByAdminResponse",
            value: exports.QueryGroupPoliciesByAdminResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryGroupPoliciesByAdminResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGroupPoliciesByAdminResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.QueryGroupPoliciesByAdminResponse",
            value: exports.QueryGroupPoliciesByAdminResponse.encode(message).finish()
        };
    }
};
function createBaseQueryProposalRequest() {
    return {
        proposal_id: BigInt(0)
    };
}
exports.QueryProposalRequest = {
    typeUrl: "/cosmos.group.v1.QueryProposalRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.proposal_id !== BigInt(0)) {
            writer.uint32(8).uint64(message.proposal_id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryProposalRequest();
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
            proposal_id: (0, helpers_1.isSet)(object.proposal_id) ? BigInt(object.proposal_id.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.proposal_id !== undefined && (obj.proposal_id = (message.proposal_id || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryProposalRequest();
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
        return exports.QueryProposalRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryProposalRequest",
            value: exports.QueryProposalRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryProposalRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryProposalRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.QueryProposalRequest",
            value: exports.QueryProposalRequest.encode(message).finish()
        };
    }
};
function createBaseQueryProposalResponse() {
    return {
        proposal: undefined
    };
}
exports.QueryProposalResponse = {
    typeUrl: "/cosmos.group.v1.QueryProposalResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.proposal !== undefined) {
            types_1.Proposal.encode(message.proposal, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryProposalResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposal = types_1.Proposal.decode(reader, reader.uint32());
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
            proposal: (0, helpers_1.isSet)(object.proposal) ? types_1.Proposal.fromJSON(object.proposal) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.proposal !== undefined && (obj.proposal = message.proposal ? types_1.Proposal.toJSON(message.proposal) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryProposalResponse();
        message.proposal = object.proposal !== undefined && object.proposal !== null ? types_1.Proposal.fromPartial(object.proposal) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            proposal: object.proposal ? types_1.Proposal.fromSDK(object.proposal) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.proposal !== undefined && (obj.proposal = message.proposal ? types_1.Proposal.toSDK(message.proposal) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            proposal: object?.proposal ? types_1.Proposal.fromAmino(object.proposal) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.proposal = message.proposal ? types_1.Proposal.toAmino(message.proposal) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryProposalResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryProposalResponse",
            value: exports.QueryProposalResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryProposalResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryProposalResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.QueryProposalResponse",
            value: exports.QueryProposalResponse.encode(message).finish()
        };
    }
};
function createBaseQueryProposalsByGroupPolicyRequest() {
    return {
        address: "",
        pagination: undefined
    };
}
exports.QueryProposalsByGroupPolicyRequest = {
    typeUrl: "/cosmos.group.v1.QueryProposalsByGroupPolicyRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryProposalsByGroupPolicyRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryProposalsByGroupPolicyRequest();
        message.address = object.address ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            address: object?.address,
            pagination: object.pagination ? pagination_1.PageRequest.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.address = message.address;
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            address: object.address,
            pagination: object?.pagination ? pagination_1.PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryProposalsByGroupPolicyRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryProposalsByGroupPolicyRequest",
            value: exports.QueryProposalsByGroupPolicyRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryProposalsByGroupPolicyRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryProposalsByGroupPolicyRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.QueryProposalsByGroupPolicyRequest",
            value: exports.QueryProposalsByGroupPolicyRequest.encode(message).finish()
        };
    }
};
function createBaseQueryProposalsByGroupPolicyResponse() {
    return {
        proposals: [],
        pagination: undefined
    };
}
exports.QueryProposalsByGroupPolicyResponse = {
    typeUrl: "/cosmos.group.v1.QueryProposalsByGroupPolicyResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.proposals) {
            types_1.Proposal.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryProposalsByGroupPolicyResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposals.push(types_1.Proposal.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
            proposals: Array.isArray(object?.proposals) ? object.proposals.map((e) => types_1.Proposal.fromJSON(e)) : [],
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.proposals) {
            obj.proposals = message.proposals.map(e => e ? types_1.Proposal.toJSON(e) : undefined);
        }
        else {
            obj.proposals = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryProposalsByGroupPolicyResponse();
        message.proposals = object.proposals?.map(e => types_1.Proposal.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            proposals: Array.isArray(object?.proposals) ? object.proposals.map((e) => types_1.Proposal.fromSDK(e)) : [],
            pagination: object.pagination ? pagination_1.PageResponse.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.proposals) {
            obj.proposals = message.proposals.map(e => e ? types_1.Proposal.toSDK(e) : undefined);
        }
        else {
            obj.proposals = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            proposals: Array.isArray(object?.proposals) ? object.proposals.map((e) => types_1.Proposal.fromAmino(e)) : [],
            pagination: object?.pagination ? pagination_1.PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.proposals) {
            obj.proposals = message.proposals.map(e => e ? types_1.Proposal.toAmino(e) : undefined);
        }
        else {
            obj.proposals = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryProposalsByGroupPolicyResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryProposalsByGroupPolicyResponse",
            value: exports.QueryProposalsByGroupPolicyResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryProposalsByGroupPolicyResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryProposalsByGroupPolicyResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.QueryProposalsByGroupPolicyResponse",
            value: exports.QueryProposalsByGroupPolicyResponse.encode(message).finish()
        };
    }
};
function createBaseQueryVoteByProposalVoterRequest() {
    return {
        proposal_id: BigInt(0),
        voter: ""
    };
}
exports.QueryVoteByProposalVoterRequest = {
    typeUrl: "/cosmos.group.v1.QueryVoteByProposalVoterRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.proposal_id !== BigInt(0)) {
            writer.uint32(8).uint64(message.proposal_id);
        }
        if (message.voter !== "") {
            writer.uint32(18).string(message.voter);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryVoteByProposalVoterRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposal_id = reader.uint64();
                    break;
                case 2:
                    message.voter = reader.string();
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
            proposal_id: (0, helpers_1.isSet)(object.proposal_id) ? BigInt(object.proposal_id.toString()) : BigInt(0),
            voter: (0, helpers_1.isSet)(object.voter) ? String(object.voter) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.proposal_id !== undefined && (obj.proposal_id = (message.proposal_id || BigInt(0)).toString());
        message.voter !== undefined && (obj.voter = message.voter);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryVoteByProposalVoterRequest();
        message.proposal_id = object.proposal_id !== undefined && object.proposal_id !== null ? BigInt(object.proposal_id.toString()) : BigInt(0);
        message.voter = object.voter ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            proposal_id: object?.proposal_id,
            voter: object?.voter
        };
    },
    toSDK(message) {
        const obj = {};
        obj.proposal_id = message.proposal_id;
        obj.voter = message.voter;
        return obj;
    },
    fromAmino(object) {
        return {
            proposal_id: BigInt(object.proposal_id),
            voter: object.voter
        };
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposal_id ? message.proposal_id.toString() : undefined;
        obj.voter = message.voter;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryVoteByProposalVoterRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryVoteByProposalVoterRequest",
            value: exports.QueryVoteByProposalVoterRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryVoteByProposalVoterRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryVoteByProposalVoterRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.QueryVoteByProposalVoterRequest",
            value: exports.QueryVoteByProposalVoterRequest.encode(message).finish()
        };
    }
};
function createBaseQueryVoteByProposalVoterResponse() {
    return {
        vote: undefined
    };
}
exports.QueryVoteByProposalVoterResponse = {
    typeUrl: "/cosmos.group.v1.QueryVoteByProposalVoterResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.vote !== undefined) {
            types_1.Vote.encode(message.vote, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryVoteByProposalVoterResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.vote = types_1.Vote.decode(reader, reader.uint32());
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
            vote: (0, helpers_1.isSet)(object.vote) ? types_1.Vote.fromJSON(object.vote) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.vote !== undefined && (obj.vote = message.vote ? types_1.Vote.toJSON(message.vote) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryVoteByProposalVoterResponse();
        message.vote = object.vote !== undefined && object.vote !== null ? types_1.Vote.fromPartial(object.vote) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            vote: object.vote ? types_1.Vote.fromSDK(object.vote) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.vote !== undefined && (obj.vote = message.vote ? types_1.Vote.toSDK(message.vote) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            vote: object?.vote ? types_1.Vote.fromAmino(object.vote) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.vote = message.vote ? types_1.Vote.toAmino(message.vote) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryVoteByProposalVoterResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryVoteByProposalVoterResponse",
            value: exports.QueryVoteByProposalVoterResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryVoteByProposalVoterResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryVoteByProposalVoterResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.QueryVoteByProposalVoterResponse",
            value: exports.QueryVoteByProposalVoterResponse.encode(message).finish()
        };
    }
};
function createBaseQueryVotesByProposalRequest() {
    return {
        proposal_id: BigInt(0),
        pagination: undefined
    };
}
exports.QueryVotesByProposalRequest = {
    typeUrl: "/cosmos.group.v1.QueryVotesByProposalRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.proposal_id !== BigInt(0)) {
            writer.uint32(8).uint64(message.proposal_id);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryVotesByProposalRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposal_id = reader.uint64();
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
            proposal_id: (0, helpers_1.isSet)(object.proposal_id) ? BigInt(object.proposal_id.toString()) : BigInt(0),
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.proposal_id !== undefined && (obj.proposal_id = (message.proposal_id || BigInt(0)).toString());
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryVotesByProposalRequest();
        message.proposal_id = object.proposal_id !== undefined && object.proposal_id !== null ? BigInt(object.proposal_id.toString()) : BigInt(0);
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            proposal_id: object?.proposal_id,
            pagination: object.pagination ? pagination_1.PageRequest.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.proposal_id = message.proposal_id;
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            proposal_id: BigInt(object.proposal_id),
            pagination: object?.pagination ? pagination_1.PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposal_id ? message.proposal_id.toString() : undefined;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryVotesByProposalRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryVotesByProposalRequest",
            value: exports.QueryVotesByProposalRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryVotesByProposalRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryVotesByProposalRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.QueryVotesByProposalRequest",
            value: exports.QueryVotesByProposalRequest.encode(message).finish()
        };
    }
};
function createBaseQueryVotesByProposalResponse() {
    return {
        votes: [],
        pagination: undefined
    };
}
exports.QueryVotesByProposalResponse = {
    typeUrl: "/cosmos.group.v1.QueryVotesByProposalResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.votes) {
            types_1.Vote.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryVotesByProposalResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.votes.push(types_1.Vote.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
            votes: Array.isArray(object?.votes) ? object.votes.map((e) => types_1.Vote.fromJSON(e)) : [],
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.votes) {
            obj.votes = message.votes.map(e => e ? types_1.Vote.toJSON(e) : undefined);
        }
        else {
            obj.votes = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryVotesByProposalResponse();
        message.votes = object.votes?.map(e => types_1.Vote.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            votes: Array.isArray(object?.votes) ? object.votes.map((e) => types_1.Vote.fromSDK(e)) : [],
            pagination: object.pagination ? pagination_1.PageResponse.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.votes) {
            obj.votes = message.votes.map(e => e ? types_1.Vote.toSDK(e) : undefined);
        }
        else {
            obj.votes = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            votes: Array.isArray(object?.votes) ? object.votes.map((e) => types_1.Vote.fromAmino(e)) : [],
            pagination: object?.pagination ? pagination_1.PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.votes) {
            obj.votes = message.votes.map(e => e ? types_1.Vote.toAmino(e) : undefined);
        }
        else {
            obj.votes = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryVotesByProposalResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryVotesByProposalResponse",
            value: exports.QueryVotesByProposalResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryVotesByProposalResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryVotesByProposalResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.QueryVotesByProposalResponse",
            value: exports.QueryVotesByProposalResponse.encode(message).finish()
        };
    }
};
function createBaseQueryVotesByVoterRequest() {
    return {
        voter: "",
        pagination: undefined
    };
}
exports.QueryVotesByVoterRequest = {
    typeUrl: "/cosmos.group.v1.QueryVotesByVoterRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.voter !== "") {
            writer.uint32(10).string(message.voter);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryVotesByVoterRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.voter = reader.string();
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
            voter: (0, helpers_1.isSet)(object.voter) ? String(object.voter) : "",
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.voter !== undefined && (obj.voter = message.voter);
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryVotesByVoterRequest();
        message.voter = object.voter ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            voter: object?.voter,
            pagination: object.pagination ? pagination_1.PageRequest.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.voter = message.voter;
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            voter: object.voter,
            pagination: object?.pagination ? pagination_1.PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.voter = message.voter;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryVotesByVoterRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryVotesByVoterRequest",
            value: exports.QueryVotesByVoterRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryVotesByVoterRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryVotesByVoterRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.QueryVotesByVoterRequest",
            value: exports.QueryVotesByVoterRequest.encode(message).finish()
        };
    }
};
function createBaseQueryVotesByVoterResponse() {
    return {
        votes: [],
        pagination: undefined
    };
}
exports.QueryVotesByVoterResponse = {
    typeUrl: "/cosmos.group.v1.QueryVotesByVoterResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.votes) {
            types_1.Vote.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryVotesByVoterResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.votes.push(types_1.Vote.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
            votes: Array.isArray(object?.votes) ? object.votes.map((e) => types_1.Vote.fromJSON(e)) : [],
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.votes) {
            obj.votes = message.votes.map(e => e ? types_1.Vote.toJSON(e) : undefined);
        }
        else {
            obj.votes = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryVotesByVoterResponse();
        message.votes = object.votes?.map(e => types_1.Vote.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            votes: Array.isArray(object?.votes) ? object.votes.map((e) => types_1.Vote.fromSDK(e)) : [],
            pagination: object.pagination ? pagination_1.PageResponse.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.votes) {
            obj.votes = message.votes.map(e => e ? types_1.Vote.toSDK(e) : undefined);
        }
        else {
            obj.votes = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            votes: Array.isArray(object?.votes) ? object.votes.map((e) => types_1.Vote.fromAmino(e)) : [],
            pagination: object?.pagination ? pagination_1.PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.votes) {
            obj.votes = message.votes.map(e => e ? types_1.Vote.toAmino(e) : undefined);
        }
        else {
            obj.votes = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryVotesByVoterResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryVotesByVoterResponse",
            value: exports.QueryVotesByVoterResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryVotesByVoterResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryVotesByVoterResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.QueryVotesByVoterResponse",
            value: exports.QueryVotesByVoterResponse.encode(message).finish()
        };
    }
};
function createBaseQueryGroupsByMemberRequest() {
    return {
        address: "",
        pagination: undefined
    };
}
exports.QueryGroupsByMemberRequest = {
    typeUrl: "/cosmos.group.v1.QueryGroupsByMemberRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGroupsByMemberRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGroupsByMemberRequest();
        message.address = object.address ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            address: object?.address,
            pagination: object.pagination ? pagination_1.PageRequest.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.address = message.address;
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            address: object.address,
            pagination: object?.pagination ? pagination_1.PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryGroupsByMemberRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryGroupsByMemberRequest",
            value: exports.QueryGroupsByMemberRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryGroupsByMemberRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGroupsByMemberRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.QueryGroupsByMemberRequest",
            value: exports.QueryGroupsByMemberRequest.encode(message).finish()
        };
    }
};
function createBaseQueryGroupsByMemberResponse() {
    return {
        groups: [],
        pagination: undefined
    };
}
exports.QueryGroupsByMemberResponse = {
    typeUrl: "/cosmos.group.v1.QueryGroupsByMemberResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.groups) {
            types_1.GroupInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGroupsByMemberResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groups.push(types_1.GroupInfo.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
            groups: Array.isArray(object?.groups) ? object.groups.map((e) => types_1.GroupInfo.fromJSON(e)) : [],
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.groups) {
            obj.groups = message.groups.map(e => e ? types_1.GroupInfo.toJSON(e) : undefined);
        }
        else {
            obj.groups = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGroupsByMemberResponse();
        message.groups = object.groups?.map(e => types_1.GroupInfo.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            groups: Array.isArray(object?.groups) ? object.groups.map((e) => types_1.GroupInfo.fromSDK(e)) : [],
            pagination: object.pagination ? pagination_1.PageResponse.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.groups) {
            obj.groups = message.groups.map(e => e ? types_1.GroupInfo.toSDK(e) : undefined);
        }
        else {
            obj.groups = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            groups: Array.isArray(object?.groups) ? object.groups.map((e) => types_1.GroupInfo.fromAmino(e)) : [],
            pagination: object?.pagination ? pagination_1.PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.groups) {
            obj.groups = message.groups.map(e => e ? types_1.GroupInfo.toAmino(e) : undefined);
        }
        else {
            obj.groups = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryGroupsByMemberResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryGroupsByMemberResponse",
            value: exports.QueryGroupsByMemberResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryGroupsByMemberResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGroupsByMemberResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.QueryGroupsByMemberResponse",
            value: exports.QueryGroupsByMemberResponse.encode(message).finish()
        };
    }
};
function createBaseQueryTallyResultRequest() {
    return {
        proposal_id: BigInt(0)
    };
}
exports.QueryTallyResultRequest = {
    typeUrl: "/cosmos.group.v1.QueryTallyResultRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.proposal_id !== BigInt(0)) {
            writer.uint32(8).uint64(message.proposal_id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTallyResultRequest();
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
            proposal_id: (0, helpers_1.isSet)(object.proposal_id) ? BigInt(object.proposal_id.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.proposal_id !== undefined && (obj.proposal_id = (message.proposal_id || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryTallyResultRequest();
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
        return exports.QueryTallyResultRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryTallyResultRequest",
            value: exports.QueryTallyResultRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryTallyResultRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryTallyResultRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.QueryTallyResultRequest",
            value: exports.QueryTallyResultRequest.encode(message).finish()
        };
    }
};
function createBaseQueryTallyResultResponse() {
    return {
        tally: types_1.TallyResult.fromPartial({})
    };
}
exports.QueryTallyResultResponse = {
    typeUrl: "/cosmos.group.v1.QueryTallyResultResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.tally !== undefined) {
            types_1.TallyResult.encode(message.tally, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTallyResultResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tally = types_1.TallyResult.decode(reader, reader.uint32());
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
            tally: (0, helpers_1.isSet)(object.tally) ? types_1.TallyResult.fromJSON(object.tally) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.tally !== undefined && (obj.tally = message.tally ? types_1.TallyResult.toJSON(message.tally) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryTallyResultResponse();
        message.tally = object.tally !== undefined && object.tally !== null ? types_1.TallyResult.fromPartial(object.tally) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            tally: object.tally ? types_1.TallyResult.fromSDK(object.tally) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.tally !== undefined && (obj.tally = message.tally ? types_1.TallyResult.toSDK(message.tally) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            tally: object?.tally ? types_1.TallyResult.fromAmino(object.tally) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.tally = message.tally ? types_1.TallyResult.toAmino(message.tally) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryTallyResultResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryTallyResultResponse",
            value: exports.QueryTallyResultResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryTallyResultResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryTallyResultResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.QueryTallyResultResponse",
            value: exports.QueryTallyResultResponse.encode(message).finish()
        };
    }
};
function createBaseQueryGroupsRequest() {
    return {
        pagination: undefined
    };
}
exports.QueryGroupsRequest = {
    typeUrl: "/cosmos.group.v1.QueryGroupsRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGroupsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGroupsRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            pagination: object.pagination ? pagination_1.PageRequest.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            pagination: object?.pagination ? pagination_1.PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryGroupsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryGroupsRequest",
            value: exports.QueryGroupsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryGroupsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGroupsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.QueryGroupsRequest",
            value: exports.QueryGroupsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryGroupsResponse() {
    return {
        groups: [],
        pagination: undefined
    };
}
exports.QueryGroupsResponse = {
    typeUrl: "/cosmos.group.v1.QueryGroupsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.groups) {
            types_1.GroupInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGroupsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groups.push(types_1.GroupInfo.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
            groups: Array.isArray(object?.groups) ? object.groups.map((e) => types_1.GroupInfo.fromJSON(e)) : [],
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.groups) {
            obj.groups = message.groups.map(e => e ? types_1.GroupInfo.toJSON(e) : undefined);
        }
        else {
            obj.groups = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGroupsResponse();
        message.groups = object.groups?.map(e => types_1.GroupInfo.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            groups: Array.isArray(object?.groups) ? object.groups.map((e) => types_1.GroupInfo.fromSDK(e)) : [],
            pagination: object.pagination ? pagination_1.PageResponse.fromSDK(object.pagination) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.groups) {
            obj.groups = message.groups.map(e => e ? types_1.GroupInfo.toSDK(e) : undefined);
        }
        else {
            obj.groups = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toSDK(message.pagination) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            groups: Array.isArray(object?.groups) ? object.groups.map((e) => types_1.GroupInfo.fromAmino(e)) : [],
            pagination: object?.pagination ? pagination_1.PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.groups) {
            obj.groups = message.groups.map(e => e ? types_1.GroupInfo.toAmino(e) : undefined);
        }
        else {
            obj.groups = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryGroupsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryGroupsResponse",
            value: exports.QueryGroupsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryGroupsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryGroupsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.QueryGroupsResponse",
            value: exports.QueryGroupsResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=query.js.map
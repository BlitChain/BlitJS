//@ts-nocheck
import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { GroupInfo, GroupPolicyInfo, GroupMember, Proposal, Vote, TallyResult } from "./types";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export const protobufPackage = "cosmos.group.v1";
function createBaseQueryGroupInfoRequest() {
    return {
        group_id: BigInt(0)
    };
}
export const QueryGroupInfoRequest = {
    typeUrl: "/cosmos.group.v1.QueryGroupInfoRequest",
    aminoType: "cosmos-sdk/QueryGroupInfoRequest",
    is(o) {
        return o && (o.$typeUrl === QueryGroupInfoRequest.typeUrl || typeof o.group_id === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryGroupInfoRequest.typeUrl || typeof o.group_id === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === QueryGroupInfoRequest.typeUrl || typeof o.group_id === "bigint");
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
            group_id: isSet(object.group_id) ? BigInt(object.group_id.toString()) : BigInt(0)
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
    fromAmino(object) {
        const message = createBaseQueryGroupInfoRequest();
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
        return QueryGroupInfoRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryGroupInfoRequest",
            value: QueryGroupInfoRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryGroupInfoRequest.decode(message.value);
    },
    toProto(message) {
        return QueryGroupInfoRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.QueryGroupInfoRequest",
            value: QueryGroupInfoRequest.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryGroupInfoRequest.typeUrl, QueryGroupInfoRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryGroupInfoRequest.aminoType, QueryGroupInfoRequest.typeUrl);
function createBaseQueryGroupInfoResponse() {
    return {
        info: undefined
    };
}
export const QueryGroupInfoResponse = {
    typeUrl: "/cosmos.group.v1.QueryGroupInfoResponse",
    aminoType: "cosmos-sdk/QueryGroupInfoResponse",
    is(o) {
        return o && o.$typeUrl === QueryGroupInfoResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === QueryGroupInfoResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === QueryGroupInfoResponse.typeUrl;
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.info !== undefined) {
            GroupInfo.encode(message.info, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGroupInfoResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.info = GroupInfo.decode(reader, reader.uint32());
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
            info: isSet(object.info) ? GroupInfo.fromJSON(object.info) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.info !== undefined && (obj.info = message.info ? GroupInfo.toJSON(message.info) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGroupInfoResponse();
        message.info = object.info !== undefined && object.info !== null ? GroupInfo.fromPartial(object.info) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGroupInfoResponse();
        if (object.info !== undefined && object.info !== null) {
            message.info = GroupInfo.fromAmino(object.info);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.info = message.info ? GroupInfo.toAmino(message.info) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryGroupInfoResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryGroupInfoResponse",
            value: QueryGroupInfoResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryGroupInfoResponse.decode(message.value);
    },
    toProto(message) {
        return QueryGroupInfoResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.QueryGroupInfoResponse",
            value: QueryGroupInfoResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryGroupInfoResponse.typeUrl, QueryGroupInfoResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryGroupInfoResponse.aminoType, QueryGroupInfoResponse.typeUrl);
function createBaseQueryGroupPolicyInfoRequest() {
    return {
        address: ""
    };
}
export const QueryGroupPolicyInfoRequest = {
    typeUrl: "/cosmos.group.v1.QueryGroupPolicyInfoRequest",
    aminoType: "cosmos-sdk/QueryGroupPolicyInfoRequest",
    is(o) {
        return o && (o.$typeUrl === QueryGroupPolicyInfoRequest.typeUrl || typeof o.address === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryGroupPolicyInfoRequest.typeUrl || typeof o.address === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === QueryGroupPolicyInfoRequest.typeUrl || typeof o.address === "string");
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
            address: isSet(object.address) ? String(object.address) : ""
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
    fromAmino(object) {
        const message = createBaseQueryGroupPolicyInfoRequest();
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
        return QueryGroupPolicyInfoRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryGroupPolicyInfoRequest",
            value: QueryGroupPolicyInfoRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryGroupPolicyInfoRequest.decode(message.value);
    },
    toProto(message) {
        return QueryGroupPolicyInfoRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.QueryGroupPolicyInfoRequest",
            value: QueryGroupPolicyInfoRequest.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryGroupPolicyInfoRequest.typeUrl, QueryGroupPolicyInfoRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryGroupPolicyInfoRequest.aminoType, QueryGroupPolicyInfoRequest.typeUrl);
function createBaseQueryGroupPolicyInfoResponse() {
    return {
        info: undefined
    };
}
export const QueryGroupPolicyInfoResponse = {
    typeUrl: "/cosmos.group.v1.QueryGroupPolicyInfoResponse",
    aminoType: "cosmos-sdk/QueryGroupPolicyInfoResponse",
    is(o) {
        return o && o.$typeUrl === QueryGroupPolicyInfoResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === QueryGroupPolicyInfoResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === QueryGroupPolicyInfoResponse.typeUrl;
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.info !== undefined) {
            GroupPolicyInfo.encode(message.info, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGroupPolicyInfoResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.info = GroupPolicyInfo.decode(reader, reader.uint32());
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
            info: isSet(object.info) ? GroupPolicyInfo.fromJSON(object.info) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.info !== undefined && (obj.info = message.info ? GroupPolicyInfo.toJSON(message.info) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGroupPolicyInfoResponse();
        message.info = object.info !== undefined && object.info !== null ? GroupPolicyInfo.fromPartial(object.info) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGroupPolicyInfoResponse();
        if (object.info !== undefined && object.info !== null) {
            message.info = GroupPolicyInfo.fromAmino(object.info);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.info = message.info ? GroupPolicyInfo.toAmino(message.info) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryGroupPolicyInfoResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryGroupPolicyInfoResponse",
            value: QueryGroupPolicyInfoResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryGroupPolicyInfoResponse.decode(message.value);
    },
    toProto(message) {
        return QueryGroupPolicyInfoResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.QueryGroupPolicyInfoResponse",
            value: QueryGroupPolicyInfoResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryGroupPolicyInfoResponse.typeUrl, QueryGroupPolicyInfoResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryGroupPolicyInfoResponse.aminoType, QueryGroupPolicyInfoResponse.typeUrl);
function createBaseQueryGroupMembersRequest() {
    return {
        group_id: BigInt(0),
        pagination: undefined
    };
}
export const QueryGroupMembersRequest = {
    typeUrl: "/cosmos.group.v1.QueryGroupMembersRequest",
    aminoType: "cosmos-sdk/QueryGroupMembersRequest",
    is(o) {
        return o && (o.$typeUrl === QueryGroupMembersRequest.typeUrl || typeof o.group_id === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryGroupMembersRequest.typeUrl || typeof o.group_id === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === QueryGroupMembersRequest.typeUrl || typeof o.group_id === "bigint");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.group_id !== BigInt(0)) {
            writer.uint32(8).uint64(message.group_id);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGroupMembersRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.group_id = reader.uint64();
                    break;
                case 2:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.group_id !== undefined && (obj.group_id = (message.group_id || BigInt(0)).toString());
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGroupMembersRequest();
        message.group_id = object.group_id !== undefined && object.group_id !== null ? BigInt(object.group_id.toString()) : BigInt(0);
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGroupMembersRequest();
        if (object.group_id !== undefined && object.group_id !== null) {
            message.group_id = BigInt(object.group_id);
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.group_id = message.group_id ? message.group_id.toString() : undefined;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryGroupMembersRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryGroupMembersRequest",
            value: QueryGroupMembersRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryGroupMembersRequest.decode(message.value);
    },
    toProto(message) {
        return QueryGroupMembersRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.QueryGroupMembersRequest",
            value: QueryGroupMembersRequest.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryGroupMembersRequest.typeUrl, QueryGroupMembersRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryGroupMembersRequest.aminoType, QueryGroupMembersRequest.typeUrl);
function createBaseQueryGroupMembersResponse() {
    return {
        members: [],
        pagination: undefined
    };
}
export const QueryGroupMembersResponse = {
    typeUrl: "/cosmos.group.v1.QueryGroupMembersResponse",
    aminoType: "cosmos-sdk/QueryGroupMembersResponse",
    is(o) {
        return o && (o.$typeUrl === QueryGroupMembersResponse.typeUrl || Array.isArray(o.members) && (!o.members.length || GroupMember.is(o.members[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryGroupMembersResponse.typeUrl || Array.isArray(o.members) && (!o.members.length || GroupMember.isSDK(o.members[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === QueryGroupMembersResponse.typeUrl || Array.isArray(o.members) && (!o.members.length || GroupMember.isAmino(o.members[0])));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.members) {
            GroupMember.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGroupMembersResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.members.push(GroupMember.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
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
            members: Array.isArray(object?.members) ? object.members.map((e) => GroupMember.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.members) {
            obj.members = message.members.map(e => e ? GroupMember.toJSON(e) : undefined);
        }
        else {
            obj.members = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGroupMembersResponse();
        message.members = object.members?.map(e => GroupMember.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGroupMembersResponse();
        message.members = object.members?.map(e => GroupMember.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.members) {
            obj.members = message.members.map(e => e ? GroupMember.toAmino(e) : undefined);
        }
        else {
            obj.members = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryGroupMembersResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryGroupMembersResponse",
            value: QueryGroupMembersResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryGroupMembersResponse.decode(message.value);
    },
    toProto(message) {
        return QueryGroupMembersResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.QueryGroupMembersResponse",
            value: QueryGroupMembersResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryGroupMembersResponse.typeUrl, QueryGroupMembersResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryGroupMembersResponse.aminoType, QueryGroupMembersResponse.typeUrl);
function createBaseQueryGroupsByAdminRequest() {
    return {
        admin: "",
        pagination: undefined
    };
}
export const QueryGroupsByAdminRequest = {
    typeUrl: "/cosmos.group.v1.QueryGroupsByAdminRequest",
    aminoType: "cosmos-sdk/QueryGroupsByAdminRequest",
    is(o) {
        return o && (o.$typeUrl === QueryGroupsByAdminRequest.typeUrl || typeof o.admin === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryGroupsByAdminRequest.typeUrl || typeof o.admin === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === QueryGroupsByAdminRequest.typeUrl || typeof o.admin === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGroupsByAdminRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.admin !== undefined && (obj.admin = message.admin);
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGroupsByAdminRequest();
        message.admin = object.admin ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGroupsByAdminRequest();
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = object.admin;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.admin = message.admin;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryGroupsByAdminRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryGroupsByAdminRequest",
            value: QueryGroupsByAdminRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryGroupsByAdminRequest.decode(message.value);
    },
    toProto(message) {
        return QueryGroupsByAdminRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.QueryGroupsByAdminRequest",
            value: QueryGroupsByAdminRequest.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryGroupsByAdminRequest.typeUrl, QueryGroupsByAdminRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryGroupsByAdminRequest.aminoType, QueryGroupsByAdminRequest.typeUrl);
function createBaseQueryGroupsByAdminResponse() {
    return {
        groups: [],
        pagination: undefined
    };
}
export const QueryGroupsByAdminResponse = {
    typeUrl: "/cosmos.group.v1.QueryGroupsByAdminResponse",
    aminoType: "cosmos-sdk/QueryGroupsByAdminResponse",
    is(o) {
        return o && (o.$typeUrl === QueryGroupsByAdminResponse.typeUrl || Array.isArray(o.groups) && (!o.groups.length || GroupInfo.is(o.groups[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryGroupsByAdminResponse.typeUrl || Array.isArray(o.groups) && (!o.groups.length || GroupInfo.isSDK(o.groups[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === QueryGroupsByAdminResponse.typeUrl || Array.isArray(o.groups) && (!o.groups.length || GroupInfo.isAmino(o.groups[0])));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.groups) {
            GroupInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGroupsByAdminResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groups.push(GroupInfo.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
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
            groups: Array.isArray(object?.groups) ? object.groups.map((e) => GroupInfo.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.groups) {
            obj.groups = message.groups.map(e => e ? GroupInfo.toJSON(e) : undefined);
        }
        else {
            obj.groups = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGroupsByAdminResponse();
        message.groups = object.groups?.map(e => GroupInfo.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGroupsByAdminResponse();
        message.groups = object.groups?.map(e => GroupInfo.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.groups) {
            obj.groups = message.groups.map(e => e ? GroupInfo.toAmino(e) : undefined);
        }
        else {
            obj.groups = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryGroupsByAdminResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryGroupsByAdminResponse",
            value: QueryGroupsByAdminResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryGroupsByAdminResponse.decode(message.value);
    },
    toProto(message) {
        return QueryGroupsByAdminResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.QueryGroupsByAdminResponse",
            value: QueryGroupsByAdminResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryGroupsByAdminResponse.typeUrl, QueryGroupsByAdminResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryGroupsByAdminResponse.aminoType, QueryGroupsByAdminResponse.typeUrl);
function createBaseQueryGroupPoliciesByGroupRequest() {
    return {
        group_id: BigInt(0),
        pagination: undefined
    };
}
export const QueryGroupPoliciesByGroupRequest = {
    typeUrl: "/cosmos.group.v1.QueryGroupPoliciesByGroupRequest",
    aminoType: "cosmos-sdk/QueryGroupPoliciesByGroupRequest",
    is(o) {
        return o && (o.$typeUrl === QueryGroupPoliciesByGroupRequest.typeUrl || typeof o.group_id === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryGroupPoliciesByGroupRequest.typeUrl || typeof o.group_id === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === QueryGroupPoliciesByGroupRequest.typeUrl || typeof o.group_id === "bigint");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.group_id !== BigInt(0)) {
            writer.uint32(8).uint64(message.group_id);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGroupPoliciesByGroupRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.group_id = reader.uint64();
                    break;
                case 2:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.group_id !== undefined && (obj.group_id = (message.group_id || BigInt(0)).toString());
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGroupPoliciesByGroupRequest();
        message.group_id = object.group_id !== undefined && object.group_id !== null ? BigInt(object.group_id.toString()) : BigInt(0);
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGroupPoliciesByGroupRequest();
        if (object.group_id !== undefined && object.group_id !== null) {
            message.group_id = BigInt(object.group_id);
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.group_id = message.group_id ? message.group_id.toString() : undefined;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryGroupPoliciesByGroupRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryGroupPoliciesByGroupRequest",
            value: QueryGroupPoliciesByGroupRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryGroupPoliciesByGroupRequest.decode(message.value);
    },
    toProto(message) {
        return QueryGroupPoliciesByGroupRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.QueryGroupPoliciesByGroupRequest",
            value: QueryGroupPoliciesByGroupRequest.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryGroupPoliciesByGroupRequest.typeUrl, QueryGroupPoliciesByGroupRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryGroupPoliciesByGroupRequest.aminoType, QueryGroupPoliciesByGroupRequest.typeUrl);
function createBaseQueryGroupPoliciesByGroupResponse() {
    return {
        group_policies: [],
        pagination: undefined
    };
}
export const QueryGroupPoliciesByGroupResponse = {
    typeUrl: "/cosmos.group.v1.QueryGroupPoliciesByGroupResponse",
    aminoType: "cosmos-sdk/QueryGroupPoliciesByGroupResponse",
    is(o) {
        return o && (o.$typeUrl === QueryGroupPoliciesByGroupResponse.typeUrl || Array.isArray(o.group_policies) && (!o.group_policies.length || GroupPolicyInfo.is(o.group_policies[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryGroupPoliciesByGroupResponse.typeUrl || Array.isArray(o.group_policies) && (!o.group_policies.length || GroupPolicyInfo.isSDK(o.group_policies[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === QueryGroupPoliciesByGroupResponse.typeUrl || Array.isArray(o.group_policies) && (!o.group_policies.length || GroupPolicyInfo.isAmino(o.group_policies[0])));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.group_policies) {
            GroupPolicyInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGroupPoliciesByGroupResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.group_policies.push(GroupPolicyInfo.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
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
            group_policies: Array.isArray(object?.group_policies) ? object.group_policies.map((e) => GroupPolicyInfo.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.group_policies) {
            obj.group_policies = message.group_policies.map(e => e ? GroupPolicyInfo.toJSON(e) : undefined);
        }
        else {
            obj.group_policies = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGroupPoliciesByGroupResponse();
        message.group_policies = object.group_policies?.map(e => GroupPolicyInfo.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGroupPoliciesByGroupResponse();
        message.group_policies = object.group_policies?.map(e => GroupPolicyInfo.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.group_policies) {
            obj.group_policies = message.group_policies.map(e => e ? GroupPolicyInfo.toAmino(e) : undefined);
        }
        else {
            obj.group_policies = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryGroupPoliciesByGroupResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryGroupPoliciesByGroupResponse",
            value: QueryGroupPoliciesByGroupResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryGroupPoliciesByGroupResponse.decode(message.value);
    },
    toProto(message) {
        return QueryGroupPoliciesByGroupResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.QueryGroupPoliciesByGroupResponse",
            value: QueryGroupPoliciesByGroupResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryGroupPoliciesByGroupResponse.typeUrl, QueryGroupPoliciesByGroupResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryGroupPoliciesByGroupResponse.aminoType, QueryGroupPoliciesByGroupResponse.typeUrl);
function createBaseQueryGroupPoliciesByAdminRequest() {
    return {
        admin: "",
        pagination: undefined
    };
}
export const QueryGroupPoliciesByAdminRequest = {
    typeUrl: "/cosmos.group.v1.QueryGroupPoliciesByAdminRequest",
    aminoType: "cosmos-sdk/QueryGroupPoliciesByAdminRequest",
    is(o) {
        return o && (o.$typeUrl === QueryGroupPoliciesByAdminRequest.typeUrl || typeof o.admin === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryGroupPoliciesByAdminRequest.typeUrl || typeof o.admin === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === QueryGroupPoliciesByAdminRequest.typeUrl || typeof o.admin === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGroupPoliciesByAdminRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.admin !== undefined && (obj.admin = message.admin);
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGroupPoliciesByAdminRequest();
        message.admin = object.admin ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGroupPoliciesByAdminRequest();
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = object.admin;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.admin = message.admin;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryGroupPoliciesByAdminRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryGroupPoliciesByAdminRequest",
            value: QueryGroupPoliciesByAdminRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryGroupPoliciesByAdminRequest.decode(message.value);
    },
    toProto(message) {
        return QueryGroupPoliciesByAdminRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.QueryGroupPoliciesByAdminRequest",
            value: QueryGroupPoliciesByAdminRequest.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryGroupPoliciesByAdminRequest.typeUrl, QueryGroupPoliciesByAdminRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryGroupPoliciesByAdminRequest.aminoType, QueryGroupPoliciesByAdminRequest.typeUrl);
function createBaseQueryGroupPoliciesByAdminResponse() {
    return {
        group_policies: [],
        pagination: undefined
    };
}
export const QueryGroupPoliciesByAdminResponse = {
    typeUrl: "/cosmos.group.v1.QueryGroupPoliciesByAdminResponse",
    aminoType: "cosmos-sdk/QueryGroupPoliciesByAdminResponse",
    is(o) {
        return o && (o.$typeUrl === QueryGroupPoliciesByAdminResponse.typeUrl || Array.isArray(o.group_policies) && (!o.group_policies.length || GroupPolicyInfo.is(o.group_policies[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryGroupPoliciesByAdminResponse.typeUrl || Array.isArray(o.group_policies) && (!o.group_policies.length || GroupPolicyInfo.isSDK(o.group_policies[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === QueryGroupPoliciesByAdminResponse.typeUrl || Array.isArray(o.group_policies) && (!o.group_policies.length || GroupPolicyInfo.isAmino(o.group_policies[0])));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.group_policies) {
            GroupPolicyInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGroupPoliciesByAdminResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.group_policies.push(GroupPolicyInfo.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
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
            group_policies: Array.isArray(object?.group_policies) ? object.group_policies.map((e) => GroupPolicyInfo.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.group_policies) {
            obj.group_policies = message.group_policies.map(e => e ? GroupPolicyInfo.toJSON(e) : undefined);
        }
        else {
            obj.group_policies = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGroupPoliciesByAdminResponse();
        message.group_policies = object.group_policies?.map(e => GroupPolicyInfo.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGroupPoliciesByAdminResponse();
        message.group_policies = object.group_policies?.map(e => GroupPolicyInfo.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.group_policies) {
            obj.group_policies = message.group_policies.map(e => e ? GroupPolicyInfo.toAmino(e) : undefined);
        }
        else {
            obj.group_policies = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryGroupPoliciesByAdminResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryGroupPoliciesByAdminResponse",
            value: QueryGroupPoliciesByAdminResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryGroupPoliciesByAdminResponse.decode(message.value);
    },
    toProto(message) {
        return QueryGroupPoliciesByAdminResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.QueryGroupPoliciesByAdminResponse",
            value: QueryGroupPoliciesByAdminResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryGroupPoliciesByAdminResponse.typeUrl, QueryGroupPoliciesByAdminResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryGroupPoliciesByAdminResponse.aminoType, QueryGroupPoliciesByAdminResponse.typeUrl);
function createBaseQueryProposalRequest() {
    return {
        proposal_id: BigInt(0)
    };
}
export const QueryProposalRequest = {
    typeUrl: "/cosmos.group.v1.QueryProposalRequest",
    aminoType: "cosmos-sdk/QueryProposalRequest",
    is(o) {
        return o && (o.$typeUrl === QueryProposalRequest.typeUrl || typeof o.proposal_id === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryProposalRequest.typeUrl || typeof o.proposal_id === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === QueryProposalRequest.typeUrl || typeof o.proposal_id === "bigint");
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
            proposal_id: isSet(object.proposal_id) ? BigInt(object.proposal_id.toString()) : BigInt(0)
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
    fromAmino(object) {
        const message = createBaseQueryProposalRequest();
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
        return QueryProposalRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryProposalRequest",
            value: QueryProposalRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryProposalRequest.decode(message.value);
    },
    toProto(message) {
        return QueryProposalRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.QueryProposalRequest",
            value: QueryProposalRequest.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryProposalRequest.typeUrl, QueryProposalRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryProposalRequest.aminoType, QueryProposalRequest.typeUrl);
function createBaseQueryProposalResponse() {
    return {
        proposal: undefined
    };
}
export const QueryProposalResponse = {
    typeUrl: "/cosmos.group.v1.QueryProposalResponse",
    aminoType: "cosmos-sdk/QueryProposalResponse",
    is(o) {
        return o && o.$typeUrl === QueryProposalResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === QueryProposalResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === QueryProposalResponse.typeUrl;
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.proposal !== undefined) {
            Proposal.encode(message.proposal, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryProposalResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposal = Proposal.decode(reader, reader.uint32());
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
            proposal: isSet(object.proposal) ? Proposal.fromJSON(object.proposal) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.proposal !== undefined && (obj.proposal = message.proposal ? Proposal.toJSON(message.proposal) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryProposalResponse();
        message.proposal = object.proposal !== undefined && object.proposal !== null ? Proposal.fromPartial(object.proposal) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryProposalResponse();
        if (object.proposal !== undefined && object.proposal !== null) {
            message.proposal = Proposal.fromAmino(object.proposal);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.proposal = message.proposal ? Proposal.toAmino(message.proposal) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryProposalResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryProposalResponse",
            value: QueryProposalResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryProposalResponse.decode(message.value);
    },
    toProto(message) {
        return QueryProposalResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.QueryProposalResponse",
            value: QueryProposalResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryProposalResponse.typeUrl, QueryProposalResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryProposalResponse.aminoType, QueryProposalResponse.typeUrl);
function createBaseQueryProposalsByGroupPolicyRequest() {
    return {
        address: "",
        pagination: undefined
    };
}
export const QueryProposalsByGroupPolicyRequest = {
    typeUrl: "/cosmos.group.v1.QueryProposalsByGroupPolicyRequest",
    aminoType: "cosmos-sdk/QueryProposalsByGroupPolicyRequest",
    is(o) {
        return o && (o.$typeUrl === QueryProposalsByGroupPolicyRequest.typeUrl || typeof o.address === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryProposalsByGroupPolicyRequest.typeUrl || typeof o.address === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === QueryProposalsByGroupPolicyRequest.typeUrl || typeof o.address === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryProposalsByGroupPolicyRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryProposalsByGroupPolicyRequest();
        message.address = object.address ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryProposalsByGroupPolicyRequest();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryProposalsByGroupPolicyRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryProposalsByGroupPolicyRequest",
            value: QueryProposalsByGroupPolicyRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryProposalsByGroupPolicyRequest.decode(message.value);
    },
    toProto(message) {
        return QueryProposalsByGroupPolicyRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.QueryProposalsByGroupPolicyRequest",
            value: QueryProposalsByGroupPolicyRequest.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryProposalsByGroupPolicyRequest.typeUrl, QueryProposalsByGroupPolicyRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryProposalsByGroupPolicyRequest.aminoType, QueryProposalsByGroupPolicyRequest.typeUrl);
function createBaseQueryProposalsByGroupPolicyResponse() {
    return {
        proposals: [],
        pagination: undefined
    };
}
export const QueryProposalsByGroupPolicyResponse = {
    typeUrl: "/cosmos.group.v1.QueryProposalsByGroupPolicyResponse",
    aminoType: "cosmos-sdk/QueryProposalsByGroupPolicyResponse",
    is(o) {
        return o && (o.$typeUrl === QueryProposalsByGroupPolicyResponse.typeUrl || Array.isArray(o.proposals) && (!o.proposals.length || Proposal.is(o.proposals[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryProposalsByGroupPolicyResponse.typeUrl || Array.isArray(o.proposals) && (!o.proposals.length || Proposal.isSDK(o.proposals[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === QueryProposalsByGroupPolicyResponse.typeUrl || Array.isArray(o.proposals) && (!o.proposals.length || Proposal.isAmino(o.proposals[0])));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.proposals) {
            Proposal.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryProposalsByGroupPolicyResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposals.push(Proposal.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
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
            proposals: Array.isArray(object?.proposals) ? object.proposals.map((e) => Proposal.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.proposals) {
            obj.proposals = message.proposals.map(e => e ? Proposal.toJSON(e) : undefined);
        }
        else {
            obj.proposals = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryProposalsByGroupPolicyResponse();
        message.proposals = object.proposals?.map(e => Proposal.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryProposalsByGroupPolicyResponse();
        message.proposals = object.proposals?.map(e => Proposal.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.proposals) {
            obj.proposals = message.proposals.map(e => e ? Proposal.toAmino(e) : undefined);
        }
        else {
            obj.proposals = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryProposalsByGroupPolicyResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryProposalsByGroupPolicyResponse",
            value: QueryProposalsByGroupPolicyResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryProposalsByGroupPolicyResponse.decode(message.value);
    },
    toProto(message) {
        return QueryProposalsByGroupPolicyResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.QueryProposalsByGroupPolicyResponse",
            value: QueryProposalsByGroupPolicyResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryProposalsByGroupPolicyResponse.typeUrl, QueryProposalsByGroupPolicyResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryProposalsByGroupPolicyResponse.aminoType, QueryProposalsByGroupPolicyResponse.typeUrl);
function createBaseQueryVoteByProposalVoterRequest() {
    return {
        proposal_id: BigInt(0),
        voter: ""
    };
}
export const QueryVoteByProposalVoterRequest = {
    typeUrl: "/cosmos.group.v1.QueryVoteByProposalVoterRequest",
    aminoType: "cosmos-sdk/QueryVoteByProposalVoterRequest",
    is(o) {
        return o && (o.$typeUrl === QueryVoteByProposalVoterRequest.typeUrl || typeof o.proposal_id === "bigint" && typeof o.voter === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryVoteByProposalVoterRequest.typeUrl || typeof o.proposal_id === "bigint" && typeof o.voter === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === QueryVoteByProposalVoterRequest.typeUrl || typeof o.proposal_id === "bigint" && typeof o.voter === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.proposal_id !== BigInt(0)) {
            writer.uint32(8).uint64(message.proposal_id);
        }
        if (message.voter !== "") {
            writer.uint32(18).string(message.voter);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            proposal_id: isSet(object.proposal_id) ? BigInt(object.proposal_id.toString()) : BigInt(0),
            voter: isSet(object.voter) ? String(object.voter) : ""
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
    fromAmino(object) {
        const message = createBaseQueryVoteByProposalVoterRequest();
        if (object.proposal_id !== undefined && object.proposal_id !== null) {
            message.proposal_id = BigInt(object.proposal_id);
        }
        if (object.voter !== undefined && object.voter !== null) {
            message.voter = object.voter;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposal_id ? message.proposal_id.toString() : undefined;
        obj.voter = message.voter;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryVoteByProposalVoterRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryVoteByProposalVoterRequest",
            value: QueryVoteByProposalVoterRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryVoteByProposalVoterRequest.decode(message.value);
    },
    toProto(message) {
        return QueryVoteByProposalVoterRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.QueryVoteByProposalVoterRequest",
            value: QueryVoteByProposalVoterRequest.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryVoteByProposalVoterRequest.typeUrl, QueryVoteByProposalVoterRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryVoteByProposalVoterRequest.aminoType, QueryVoteByProposalVoterRequest.typeUrl);
function createBaseQueryVoteByProposalVoterResponse() {
    return {
        vote: undefined
    };
}
export const QueryVoteByProposalVoterResponse = {
    typeUrl: "/cosmos.group.v1.QueryVoteByProposalVoterResponse",
    aminoType: "cosmos-sdk/QueryVoteByProposalVoterResponse",
    is(o) {
        return o && o.$typeUrl === QueryVoteByProposalVoterResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === QueryVoteByProposalVoterResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === QueryVoteByProposalVoterResponse.typeUrl;
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.vote !== undefined) {
            Vote.encode(message.vote, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryVoteByProposalVoterResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.vote = Vote.decode(reader, reader.uint32());
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
            vote: isSet(object.vote) ? Vote.fromJSON(object.vote) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.vote !== undefined && (obj.vote = message.vote ? Vote.toJSON(message.vote) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryVoteByProposalVoterResponse();
        message.vote = object.vote !== undefined && object.vote !== null ? Vote.fromPartial(object.vote) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryVoteByProposalVoterResponse();
        if (object.vote !== undefined && object.vote !== null) {
            message.vote = Vote.fromAmino(object.vote);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.vote = message.vote ? Vote.toAmino(message.vote) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryVoteByProposalVoterResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryVoteByProposalVoterResponse",
            value: QueryVoteByProposalVoterResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryVoteByProposalVoterResponse.decode(message.value);
    },
    toProto(message) {
        return QueryVoteByProposalVoterResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.QueryVoteByProposalVoterResponse",
            value: QueryVoteByProposalVoterResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryVoteByProposalVoterResponse.typeUrl, QueryVoteByProposalVoterResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryVoteByProposalVoterResponse.aminoType, QueryVoteByProposalVoterResponse.typeUrl);
function createBaseQueryVotesByProposalRequest() {
    return {
        proposal_id: BigInt(0),
        pagination: undefined
    };
}
export const QueryVotesByProposalRequest = {
    typeUrl: "/cosmos.group.v1.QueryVotesByProposalRequest",
    aminoType: "cosmos-sdk/QueryVotesByProposalRequest",
    is(o) {
        return o && (o.$typeUrl === QueryVotesByProposalRequest.typeUrl || typeof o.proposal_id === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryVotesByProposalRequest.typeUrl || typeof o.proposal_id === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === QueryVotesByProposalRequest.typeUrl || typeof o.proposal_id === "bigint");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.proposal_id !== BigInt(0)) {
            writer.uint32(8).uint64(message.proposal_id);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryVotesByProposalRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposal_id = reader.uint64();
                    break;
                case 2:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.proposal_id !== undefined && (obj.proposal_id = (message.proposal_id || BigInt(0)).toString());
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryVotesByProposalRequest();
        message.proposal_id = object.proposal_id !== undefined && object.proposal_id !== null ? BigInt(object.proposal_id.toString()) : BigInt(0);
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryVotesByProposalRequest();
        if (object.proposal_id !== undefined && object.proposal_id !== null) {
            message.proposal_id = BigInt(object.proposal_id);
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposal_id ? message.proposal_id.toString() : undefined;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryVotesByProposalRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryVotesByProposalRequest",
            value: QueryVotesByProposalRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryVotesByProposalRequest.decode(message.value);
    },
    toProto(message) {
        return QueryVotesByProposalRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.QueryVotesByProposalRequest",
            value: QueryVotesByProposalRequest.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryVotesByProposalRequest.typeUrl, QueryVotesByProposalRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryVotesByProposalRequest.aminoType, QueryVotesByProposalRequest.typeUrl);
function createBaseQueryVotesByProposalResponse() {
    return {
        votes: [],
        pagination: undefined
    };
}
export const QueryVotesByProposalResponse = {
    typeUrl: "/cosmos.group.v1.QueryVotesByProposalResponse",
    aminoType: "cosmos-sdk/QueryVotesByProposalResponse",
    is(o) {
        return o && (o.$typeUrl === QueryVotesByProposalResponse.typeUrl || Array.isArray(o.votes) && (!o.votes.length || Vote.is(o.votes[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryVotesByProposalResponse.typeUrl || Array.isArray(o.votes) && (!o.votes.length || Vote.isSDK(o.votes[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === QueryVotesByProposalResponse.typeUrl || Array.isArray(o.votes) && (!o.votes.length || Vote.isAmino(o.votes[0])));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.votes) {
            Vote.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryVotesByProposalResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.votes.push(Vote.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
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
            votes: Array.isArray(object?.votes) ? object.votes.map((e) => Vote.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.votes) {
            obj.votes = message.votes.map(e => e ? Vote.toJSON(e) : undefined);
        }
        else {
            obj.votes = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryVotesByProposalResponse();
        message.votes = object.votes?.map(e => Vote.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryVotesByProposalResponse();
        message.votes = object.votes?.map(e => Vote.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.votes) {
            obj.votes = message.votes.map(e => e ? Vote.toAmino(e) : undefined);
        }
        else {
            obj.votes = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryVotesByProposalResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryVotesByProposalResponse",
            value: QueryVotesByProposalResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryVotesByProposalResponse.decode(message.value);
    },
    toProto(message) {
        return QueryVotesByProposalResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.QueryVotesByProposalResponse",
            value: QueryVotesByProposalResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryVotesByProposalResponse.typeUrl, QueryVotesByProposalResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryVotesByProposalResponse.aminoType, QueryVotesByProposalResponse.typeUrl);
function createBaseQueryVotesByVoterRequest() {
    return {
        voter: "",
        pagination: undefined
    };
}
export const QueryVotesByVoterRequest = {
    typeUrl: "/cosmos.group.v1.QueryVotesByVoterRequest",
    aminoType: "cosmos-sdk/QueryVotesByVoterRequest",
    is(o) {
        return o && (o.$typeUrl === QueryVotesByVoterRequest.typeUrl || typeof o.voter === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryVotesByVoterRequest.typeUrl || typeof o.voter === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === QueryVotesByVoterRequest.typeUrl || typeof o.voter === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.voter !== "") {
            writer.uint32(10).string(message.voter);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryVotesByVoterRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.voter = reader.string();
                    break;
                case 2:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
            voter: isSet(object.voter) ? String(object.voter) : "",
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.voter !== undefined && (obj.voter = message.voter);
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryVotesByVoterRequest();
        message.voter = object.voter ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryVotesByVoterRequest();
        if (object.voter !== undefined && object.voter !== null) {
            message.voter = object.voter;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.voter = message.voter;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryVotesByVoterRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryVotesByVoterRequest",
            value: QueryVotesByVoterRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryVotesByVoterRequest.decode(message.value);
    },
    toProto(message) {
        return QueryVotesByVoterRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.QueryVotesByVoterRequest",
            value: QueryVotesByVoterRequest.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryVotesByVoterRequest.typeUrl, QueryVotesByVoterRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryVotesByVoterRequest.aminoType, QueryVotesByVoterRequest.typeUrl);
function createBaseQueryVotesByVoterResponse() {
    return {
        votes: [],
        pagination: undefined
    };
}
export const QueryVotesByVoterResponse = {
    typeUrl: "/cosmos.group.v1.QueryVotesByVoterResponse",
    aminoType: "cosmos-sdk/QueryVotesByVoterResponse",
    is(o) {
        return o && (o.$typeUrl === QueryVotesByVoterResponse.typeUrl || Array.isArray(o.votes) && (!o.votes.length || Vote.is(o.votes[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryVotesByVoterResponse.typeUrl || Array.isArray(o.votes) && (!o.votes.length || Vote.isSDK(o.votes[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === QueryVotesByVoterResponse.typeUrl || Array.isArray(o.votes) && (!o.votes.length || Vote.isAmino(o.votes[0])));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.votes) {
            Vote.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryVotesByVoterResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.votes.push(Vote.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
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
            votes: Array.isArray(object?.votes) ? object.votes.map((e) => Vote.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.votes) {
            obj.votes = message.votes.map(e => e ? Vote.toJSON(e) : undefined);
        }
        else {
            obj.votes = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryVotesByVoterResponse();
        message.votes = object.votes?.map(e => Vote.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryVotesByVoterResponse();
        message.votes = object.votes?.map(e => Vote.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.votes) {
            obj.votes = message.votes.map(e => e ? Vote.toAmino(e) : undefined);
        }
        else {
            obj.votes = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryVotesByVoterResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryVotesByVoterResponse",
            value: QueryVotesByVoterResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryVotesByVoterResponse.decode(message.value);
    },
    toProto(message) {
        return QueryVotesByVoterResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.QueryVotesByVoterResponse",
            value: QueryVotesByVoterResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryVotesByVoterResponse.typeUrl, QueryVotesByVoterResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryVotesByVoterResponse.aminoType, QueryVotesByVoterResponse.typeUrl);
function createBaseQueryGroupsByMemberRequest() {
    return {
        address: "",
        pagination: undefined
    };
}
export const QueryGroupsByMemberRequest = {
    typeUrl: "/cosmos.group.v1.QueryGroupsByMemberRequest",
    aminoType: "cosmos-sdk/QueryGroupsByMemberRequest",
    is(o) {
        return o && (o.$typeUrl === QueryGroupsByMemberRequest.typeUrl || typeof o.address === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryGroupsByMemberRequest.typeUrl || typeof o.address === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === QueryGroupsByMemberRequest.typeUrl || typeof o.address === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGroupsByMemberRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGroupsByMemberRequest();
        message.address = object.address ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGroupsByMemberRequest();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryGroupsByMemberRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryGroupsByMemberRequest",
            value: QueryGroupsByMemberRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryGroupsByMemberRequest.decode(message.value);
    },
    toProto(message) {
        return QueryGroupsByMemberRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.QueryGroupsByMemberRequest",
            value: QueryGroupsByMemberRequest.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryGroupsByMemberRequest.typeUrl, QueryGroupsByMemberRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryGroupsByMemberRequest.aminoType, QueryGroupsByMemberRequest.typeUrl);
function createBaseQueryGroupsByMemberResponse() {
    return {
        groups: [],
        pagination: undefined
    };
}
export const QueryGroupsByMemberResponse = {
    typeUrl: "/cosmos.group.v1.QueryGroupsByMemberResponse",
    aminoType: "cosmos-sdk/QueryGroupsByMemberResponse",
    is(o) {
        return o && (o.$typeUrl === QueryGroupsByMemberResponse.typeUrl || Array.isArray(o.groups) && (!o.groups.length || GroupInfo.is(o.groups[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryGroupsByMemberResponse.typeUrl || Array.isArray(o.groups) && (!o.groups.length || GroupInfo.isSDK(o.groups[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === QueryGroupsByMemberResponse.typeUrl || Array.isArray(o.groups) && (!o.groups.length || GroupInfo.isAmino(o.groups[0])));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.groups) {
            GroupInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGroupsByMemberResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groups.push(GroupInfo.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
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
            groups: Array.isArray(object?.groups) ? object.groups.map((e) => GroupInfo.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.groups) {
            obj.groups = message.groups.map(e => e ? GroupInfo.toJSON(e) : undefined);
        }
        else {
            obj.groups = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGroupsByMemberResponse();
        message.groups = object.groups?.map(e => GroupInfo.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGroupsByMemberResponse();
        message.groups = object.groups?.map(e => GroupInfo.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.groups) {
            obj.groups = message.groups.map(e => e ? GroupInfo.toAmino(e) : undefined);
        }
        else {
            obj.groups = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryGroupsByMemberResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryGroupsByMemberResponse",
            value: QueryGroupsByMemberResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryGroupsByMemberResponse.decode(message.value);
    },
    toProto(message) {
        return QueryGroupsByMemberResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.QueryGroupsByMemberResponse",
            value: QueryGroupsByMemberResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryGroupsByMemberResponse.typeUrl, QueryGroupsByMemberResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryGroupsByMemberResponse.aminoType, QueryGroupsByMemberResponse.typeUrl);
function createBaseQueryTallyResultRequest() {
    return {
        proposal_id: BigInt(0)
    };
}
export const QueryTallyResultRequest = {
    typeUrl: "/cosmos.group.v1.QueryTallyResultRequest",
    aminoType: "cosmos-sdk/QueryTallyResultRequest",
    is(o) {
        return o && (o.$typeUrl === QueryTallyResultRequest.typeUrl || typeof o.proposal_id === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryTallyResultRequest.typeUrl || typeof o.proposal_id === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === QueryTallyResultRequest.typeUrl || typeof o.proposal_id === "bigint");
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
            proposal_id: isSet(object.proposal_id) ? BigInt(object.proposal_id.toString()) : BigInt(0)
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
    fromAmino(object) {
        const message = createBaseQueryTallyResultRequest();
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
        return QueryTallyResultRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryTallyResultRequest",
            value: QueryTallyResultRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryTallyResultRequest.decode(message.value);
    },
    toProto(message) {
        return QueryTallyResultRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.QueryTallyResultRequest",
            value: QueryTallyResultRequest.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryTallyResultRequest.typeUrl, QueryTallyResultRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryTallyResultRequest.aminoType, QueryTallyResultRequest.typeUrl);
function createBaseQueryTallyResultResponse() {
    return {
        tally: TallyResult.fromPartial({})
    };
}
export const QueryTallyResultResponse = {
    typeUrl: "/cosmos.group.v1.QueryTallyResultResponse",
    aminoType: "cosmos-sdk/QueryTallyResultResponse",
    is(o) {
        return o && (o.$typeUrl === QueryTallyResultResponse.typeUrl || TallyResult.is(o.tally));
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryTallyResultResponse.typeUrl || TallyResult.isSDK(o.tally));
    },
    isAmino(o) {
        return o && (o.$typeUrl === QueryTallyResultResponse.typeUrl || TallyResult.isAmino(o.tally));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.tally !== undefined) {
            TallyResult.encode(message.tally, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTallyResultResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tally = TallyResult.decode(reader, reader.uint32());
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
            tally: isSet(object.tally) ? TallyResult.fromJSON(object.tally) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.tally !== undefined && (obj.tally = message.tally ? TallyResult.toJSON(message.tally) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryTallyResultResponse();
        message.tally = object.tally !== undefined && object.tally !== null ? TallyResult.fromPartial(object.tally) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryTallyResultResponse();
        if (object.tally !== undefined && object.tally !== null) {
            message.tally = TallyResult.fromAmino(object.tally);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.tally = message.tally ? TallyResult.toAmino(message.tally) : TallyResult.fromPartial({});
        return obj;
    },
    fromAminoMsg(object) {
        return QueryTallyResultResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryTallyResultResponse",
            value: QueryTallyResultResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryTallyResultResponse.decode(message.value);
    },
    toProto(message) {
        return QueryTallyResultResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.QueryTallyResultResponse",
            value: QueryTallyResultResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryTallyResultResponse.typeUrl, QueryTallyResultResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryTallyResultResponse.aminoType, QueryTallyResultResponse.typeUrl);
function createBaseQueryGroupsRequest() {
    return {
        pagination: undefined
    };
}
export const QueryGroupsRequest = {
    typeUrl: "/cosmos.group.v1.QueryGroupsRequest",
    aminoType: "cosmos-sdk/QueryGroupsRequest",
    is(o) {
        return o && o.$typeUrl === QueryGroupsRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === QueryGroupsRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === QueryGroupsRequest.typeUrl;
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGroupsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGroupsRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGroupsRequest();
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryGroupsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryGroupsRequest",
            value: QueryGroupsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryGroupsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryGroupsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.QueryGroupsRequest",
            value: QueryGroupsRequest.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryGroupsRequest.typeUrl, QueryGroupsRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryGroupsRequest.aminoType, QueryGroupsRequest.typeUrl);
function createBaseQueryGroupsResponse() {
    return {
        groups: [],
        pagination: undefined
    };
}
export const QueryGroupsResponse = {
    typeUrl: "/cosmos.group.v1.QueryGroupsResponse",
    aminoType: "cosmos-sdk/QueryGroupsResponse",
    is(o) {
        return o && (o.$typeUrl === QueryGroupsResponse.typeUrl || Array.isArray(o.groups) && (!o.groups.length || GroupInfo.is(o.groups[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === QueryGroupsResponse.typeUrl || Array.isArray(o.groups) && (!o.groups.length || GroupInfo.isSDK(o.groups[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === QueryGroupsResponse.typeUrl || Array.isArray(o.groups) && (!o.groups.length || GroupInfo.isAmino(o.groups[0])));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.groups) {
            GroupInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGroupsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groups.push(GroupInfo.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
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
            groups: Array.isArray(object?.groups) ? object.groups.map((e) => GroupInfo.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.groups) {
            obj.groups = message.groups.map(e => e ? GroupInfo.toJSON(e) : undefined);
        }
        else {
            obj.groups = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGroupsResponse();
        message.groups = object.groups?.map(e => GroupInfo.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryGroupsResponse();
        message.groups = object.groups?.map(e => GroupInfo.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.groups) {
            obj.groups = message.groups.map(e => e ? GroupInfo.toAmino(e) : undefined);
        }
        else {
            obj.groups = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryGroupsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryGroupsResponse",
            value: QueryGroupsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryGroupsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryGroupsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.group.v1.QueryGroupsResponse",
            value: QueryGroupsResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(QueryGroupsResponse.typeUrl, QueryGroupsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryGroupsResponse.aminoType, QueryGroupsResponse.typeUrl);
//# sourceMappingURL=query.js.map
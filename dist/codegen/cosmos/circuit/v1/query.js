"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisabledListResponse = exports.QueryDisabledListRequest = exports.AccountsResponse = exports.QueryAccountsRequest = exports.AccountResponse = exports.QueryAccountRequest = exports.protobufPackage = void 0;
//@ts-nocheck
const pagination_1 = require("../../base/query/v1beta1/pagination");
const types_1 = require("./types");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "cosmos.circuit.v1";
function createBaseQueryAccountRequest() {
    return {
        address: ""
    };
}
exports.QueryAccountRequest = {
    typeUrl: "/cosmos.circuit.v1.QueryAccountRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAccountRequest();
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
        const message = createBaseQueryAccountRequest();
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
        return exports.QueryAccountRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryAccountRequest",
            value: exports.QueryAccountRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryAccountRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAccountRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.circuit.v1.QueryAccountRequest",
            value: exports.QueryAccountRequest.encode(message).finish()
        };
    }
};
function createBaseAccountResponse() {
    return {
        permission: undefined
    };
}
exports.AccountResponse = {
    typeUrl: "/cosmos.circuit.v1.AccountResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.permission !== undefined) {
            types_1.Permissions.encode(message.permission, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.permission = types_1.Permissions.decode(reader, reader.uint32());
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
            permission: (0, helpers_1.isSet)(object.permission) ? types_1.Permissions.fromJSON(object.permission) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.permission !== undefined && (obj.permission = message.permission ? types_1.Permissions.toJSON(message.permission) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAccountResponse();
        message.permission = object.permission !== undefined && object.permission !== null ? types_1.Permissions.fromPartial(object.permission) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            permission: object?.permission ? types_1.Permissions.fromAmino(object.permission) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.permission = message.permission ? types_1.Permissions.toAmino(message.permission) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.AccountResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/AccountResponse",
            value: exports.AccountResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.AccountResponse.decode(message.value);
    },
    toProto(message) {
        return exports.AccountResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.circuit.v1.AccountResponse",
            value: exports.AccountResponse.encode(message).finish()
        };
    }
};
function createBaseQueryAccountsRequest() {
    return {
        pagination: undefined
    };
}
exports.QueryAccountsRequest = {
    typeUrl: "/cosmos.circuit.v1.QueryAccountsRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAccountsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = createBaseQueryAccountsRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
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
        return exports.QueryAccountsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryAccountsRequest",
            value: exports.QueryAccountsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryAccountsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAccountsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.circuit.v1.QueryAccountsRequest",
            value: exports.QueryAccountsRequest.encode(message).finish()
        };
    }
};
function createBaseAccountsResponse() {
    return {
        accounts: [],
        pagination: undefined
    };
}
exports.AccountsResponse = {
    typeUrl: "/cosmos.circuit.v1.AccountsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.accounts) {
            types_1.GenesisAccountPermissions.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accounts.push(types_1.GenesisAccountPermissions.decode(reader, reader.uint32()));
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
            accounts: Array.isArray(object?.accounts) ? object.accounts.map((e) => types_1.GenesisAccountPermissions.fromJSON(e)) : [],
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.accounts) {
            obj.accounts = message.accounts.map(e => e ? types_1.GenesisAccountPermissions.toJSON(e) : undefined);
        }
        else {
            obj.accounts = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAccountsResponse();
        message.accounts = object.accounts?.map(e => types_1.GenesisAccountPermissions.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            accounts: Array.isArray(object?.accounts) ? object.accounts.map((e) => types_1.GenesisAccountPermissions.fromAmino(e)) : [],
            pagination: object?.pagination ? pagination_1.PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.accounts) {
            obj.accounts = message.accounts.map(e => e ? types_1.GenesisAccountPermissions.toAmino(e) : undefined);
        }
        else {
            obj.accounts = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.AccountsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/AccountsResponse",
            value: exports.AccountsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.AccountsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.AccountsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.circuit.v1.AccountsResponse",
            value: exports.AccountsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDisabledListRequest() {
    return {};
}
exports.QueryDisabledListRequest = {
    typeUrl: "/cosmos.circuit.v1.QueryDisabledListRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDisabledListRequest();
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
        const message = createBaseQueryDisabledListRequest();
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
        return exports.QueryDisabledListRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryDisabledListRequest",
            value: exports.QueryDisabledListRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryDisabledListRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryDisabledListRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.circuit.v1.QueryDisabledListRequest",
            value: exports.QueryDisabledListRequest.encode(message).finish()
        };
    }
};
function createBaseDisabledListResponse() {
    return {
        disabled_list: []
    };
}
exports.DisabledListResponse = {
    typeUrl: "/cosmos.circuit.v1.DisabledListResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.disabled_list) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDisabledListResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.disabled_list.push(reader.string());
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
            disabled_list: Array.isArray(object?.disabled_list) ? object.disabled_list.map((e) => String(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.disabled_list) {
            obj.disabled_list = message.disabled_list.map(e => e);
        }
        else {
            obj.disabled_list = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDisabledListResponse();
        message.disabled_list = object.disabled_list?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        return {
            disabled_list: Array.isArray(object?.disabled_list) ? object.disabled_list.map((e) => e) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.disabled_list) {
            obj.disabled_list = message.disabled_list.map(e => e);
        }
        else {
            obj.disabled_list = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.DisabledListResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/DisabledListResponse",
            value: exports.DisabledListResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.DisabledListResponse.decode(message.value);
    },
    toProto(message) {
        return exports.DisabledListResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.circuit.v1.DisabledListResponse",
            value: exports.DisabledListResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=query.js.map
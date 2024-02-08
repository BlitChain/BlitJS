"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryParamsResponse = exports.QueryParamsRequest = exports.QueryInterchainAccountResponse = exports.QueryInterchainAccountRequest = exports.protobufPackage = void 0;
//@ts-nocheck
const controller_1 = require("./controller");
const binary_1 = require("../../../../../binary");
const helpers_1 = require("../../../../../helpers");
exports.protobufPackage = "ibc.applications.interchain_accounts.controller.v1";
function createBaseQueryInterchainAccountRequest() {
    return {
        owner: "",
        connection_id: ""
    };
}
exports.QueryInterchainAccountRequest = {
    typeUrl: "/ibc.applications.interchain_accounts.controller.v1.QueryInterchainAccountRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.connection_id !== "") {
            writer.uint32(18).string(message.connection_id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryInterchainAccountRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.connection_id = reader.string();
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
            owner: (0, helpers_1.isSet)(object.owner) ? String(object.owner) : "",
            connection_id: (0, helpers_1.isSet)(object.connection_id) ? String(object.connection_id) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.connection_id !== undefined && (obj.connection_id = message.connection_id);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryInterchainAccountRequest();
        message.owner = object.owner ?? "";
        message.connection_id = object.connection_id ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryInterchainAccountRequest();
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        if (object.connection_id !== undefined && object.connection_id !== null) {
            message.connection_id = object.connection_id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner;
        obj.connection_id = message.connection_id;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryInterchainAccountRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryInterchainAccountRequest",
            value: exports.QueryInterchainAccountRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryInterchainAccountRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryInterchainAccountRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.interchain_accounts.controller.v1.QueryInterchainAccountRequest",
            value: exports.QueryInterchainAccountRequest.encode(message).finish()
        };
    }
};
function createBaseQueryInterchainAccountResponse() {
    return {
        address: ""
    };
}
exports.QueryInterchainAccountResponse = {
    typeUrl: "/ibc.applications.interchain_accounts.controller.v1.QueryInterchainAccountResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryInterchainAccountResponse();
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
        const message = createBaseQueryInterchainAccountResponse();
        message.address = object.address ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryInterchainAccountResponse();
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
        return exports.QueryInterchainAccountResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryInterchainAccountResponse",
            value: exports.QueryInterchainAccountResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryInterchainAccountResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryInterchainAccountResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.interchain_accounts.controller.v1.QueryInterchainAccountResponse",
            value: exports.QueryInterchainAccountResponse.encode(message).finish()
        };
    }
};
function createBaseQueryParamsRequest() {
    return {};
}
exports.QueryParamsRequest = {
    typeUrl: "/ibc.applications.interchain_accounts.controller.v1.QueryParamsRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsRequest();
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
        const message = createBaseQueryParamsRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseQueryParamsRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryParamsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryParamsRequest",
            value: exports.QueryParamsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryParamsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.interchain_accounts.controller.v1.QueryParamsRequest",
            value: exports.QueryParamsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryParamsResponse() {
    return {
        params: undefined
    };
}
exports.QueryParamsResponse = {
    typeUrl: "/ibc.applications.interchain_accounts.controller.v1.QueryParamsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            controller_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = controller_1.Params.decode(reader, reader.uint32());
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
            params: (0, helpers_1.isSet)(object.params) ? controller_1.Params.fromJSON(object.params) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? controller_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        message.params = object.params !== undefined && object.params !== null ? controller_1.Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryParamsResponse();
        if (object.params !== undefined && object.params !== null) {
            message.params = controller_1.Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? controller_1.Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryParamsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryParamsResponse",
            value: exports.QueryParamsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryParamsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.interchain_accounts.controller.v1.QueryParamsResponse",
            value: exports.QueryParamsResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=query.js.map
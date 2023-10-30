"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgSetDeveloperAccountResponse = exports.MsgSetDeveloperAccount = exports.MsgSetHotRoutesResponse = exports.MsgSetHotRoutes = void 0;
//@ts-nocheck
const protorev_1 = require("./protorev");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
function createBaseMsgSetHotRoutes() {
    return {
        admin: "",
        hot_routes: []
    };
}
exports.MsgSetHotRoutes = {
    typeUrl: "/osmosis.protorev.v1beta1.MsgSetHotRoutes",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        for (const v of message.hot_routes) {
            protorev_1.TokenPairArbRoutes.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetHotRoutes();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.hot_routes.push(protorev_1.TokenPairArbRoutes.decode(reader, reader.uint32()));
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
            hot_routes: Array.isArray(object?.hot_routes) ? object.hot_routes.map((e) => protorev_1.TokenPairArbRoutes.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.admin !== undefined && (obj.admin = message.admin);
        if (message.hot_routes) {
            obj.hot_routes = message.hot_routes.map(e => e ? protorev_1.TokenPairArbRoutes.toJSON(e) : undefined);
        }
        else {
            obj.hot_routes = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSetHotRoutes();
        message.admin = object.admin ?? "";
        message.hot_routes = object.hot_routes?.map(e => protorev_1.TokenPairArbRoutes.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            admin: object?.admin,
            hot_routes: Array.isArray(object?.hot_routes) ? object.hot_routes.map((e) => protorev_1.TokenPairArbRoutes.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.admin = message.admin;
        if (message.hot_routes) {
            obj.hot_routes = message.hot_routes.map(e => e ? protorev_1.TokenPairArbRoutes.toSDK(e) : undefined);
        }
        else {
            obj.hot_routes = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            admin: object.admin,
            hot_routes: Array.isArray(object?.hot_routes) ? object.hot_routes.map((e) => protorev_1.TokenPairArbRoutes.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.admin = message.admin;
        if (message.hot_routes) {
            obj.hot_routes = message.hot_routes.map(e => e ? protorev_1.TokenPairArbRoutes.toAmino(e) : undefined);
        }
        else {
            obj.hot_routes = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSetHotRoutes.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/MsgSetHotRoutes",
            value: exports.MsgSetHotRoutes.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgSetHotRoutes.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSetHotRoutes.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.protorev.v1beta1.MsgSetHotRoutes",
            value: exports.MsgSetHotRoutes.encode(message).finish()
        };
    }
};
function createBaseMsgSetHotRoutesResponse() {
    return {};
}
exports.MsgSetHotRoutesResponse = {
    typeUrl: "/osmosis.protorev.v1beta1.MsgSetHotRoutesResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetHotRoutesResponse();
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
        const message = createBaseMsgSetHotRoutesResponse();
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
        return exports.MsgSetHotRoutesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/protorev/set-hot-routes-response",
            value: exports.MsgSetHotRoutesResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgSetHotRoutesResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSetHotRoutesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.protorev.v1beta1.MsgSetHotRoutesResponse",
            value: exports.MsgSetHotRoutesResponse.encode(message).finish()
        };
    }
};
function createBaseMsgSetDeveloperAccount() {
    return {
        admin: "",
        developer_account: ""
    };
}
exports.MsgSetDeveloperAccount = {
    typeUrl: "/osmosis.protorev.v1beta1.MsgSetDeveloperAccount",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (message.developer_account !== "") {
            writer.uint32(18).string(message.developer_account);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetDeveloperAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.developer_account = reader.string();
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
            developer_account: (0, helpers_1.isSet)(object.developer_account) ? String(object.developer_account) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.admin !== undefined && (obj.admin = message.admin);
        message.developer_account !== undefined && (obj.developer_account = message.developer_account);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSetDeveloperAccount();
        message.admin = object.admin ?? "";
        message.developer_account = object.developer_account ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            admin: object?.admin,
            developer_account: object?.developer_account
        };
    },
    toSDK(message) {
        const obj = {};
        obj.admin = message.admin;
        obj.developer_account = message.developer_account;
        return obj;
    },
    fromAmino(object) {
        return {
            admin: object.admin,
            developer_account: object.developer_account
        };
    },
    toAmino(message) {
        const obj = {};
        obj.admin = message.admin;
        obj.developer_account = message.developer_account;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSetDeveloperAccount.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/MsgSetDeveloperAccount",
            value: exports.MsgSetDeveloperAccount.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgSetDeveloperAccount.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSetDeveloperAccount.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.protorev.v1beta1.MsgSetDeveloperAccount",
            value: exports.MsgSetDeveloperAccount.encode(message).finish()
        };
    }
};
function createBaseMsgSetDeveloperAccountResponse() {
    return {};
}
exports.MsgSetDeveloperAccountResponse = {
    typeUrl: "/osmosis.protorev.v1beta1.MsgSetDeveloperAccountResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetDeveloperAccountResponse();
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
        const message = createBaseMsgSetDeveloperAccountResponse();
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
        return exports.MsgSetDeveloperAccountResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/protorev/set-developer-account-response",
            value: exports.MsgSetDeveloperAccountResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgSetDeveloperAccountResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSetDeveloperAccountResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.protorev.v1beta1.MsgSetDeveloperAccountResponse",
            value: exports.MsgSetDeveloperAccountResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=tx.js.map
//@ts-nocheck
import { TokenPairArbRoutes } from "./protorev";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
function createBaseMsgSetHotRoutes() {
    return {
        admin: "",
        hot_routes: []
    };
}
export const MsgSetHotRoutes = {
    typeUrl: "/osmosis.protorev.v1beta1.MsgSetHotRoutes",
    encode(message, writer = BinaryWriter.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        for (const v of message.hot_routes) {
            TokenPairArbRoutes.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetHotRoutes();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.hot_routes.push(TokenPairArbRoutes.decode(reader, reader.uint32()));
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
            hot_routes: Array.isArray(object?.hot_routes) ? object.hot_routes.map((e) => TokenPairArbRoutes.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.admin !== undefined && (obj.admin = message.admin);
        if (message.hot_routes) {
            obj.hot_routes = message.hot_routes.map(e => e ? TokenPairArbRoutes.toJSON(e) : undefined);
        }
        else {
            obj.hot_routes = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSetHotRoutes();
        message.admin = object.admin ?? "";
        message.hot_routes = object.hot_routes?.map(e => TokenPairArbRoutes.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            admin: object?.admin,
            hot_routes: Array.isArray(object?.hot_routes) ? object.hot_routes.map((e) => TokenPairArbRoutes.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.admin = message.admin;
        if (message.hot_routes) {
            obj.hot_routes = message.hot_routes.map(e => e ? TokenPairArbRoutes.toSDK(e) : undefined);
        }
        else {
            obj.hot_routes = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            admin: object.admin,
            hot_routes: Array.isArray(object?.hot_routes) ? object.hot_routes.map((e) => TokenPairArbRoutes.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.admin = message.admin;
        if (message.hot_routes) {
            obj.hot_routes = message.hot_routes.map(e => e ? TokenPairArbRoutes.toAmino(e) : undefined);
        }
        else {
            obj.hot_routes = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return MsgSetHotRoutes.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/MsgSetHotRoutes",
            value: MsgSetHotRoutes.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgSetHotRoutes.decode(message.value);
    },
    toProto(message) {
        return MsgSetHotRoutes.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.protorev.v1beta1.MsgSetHotRoutes",
            value: MsgSetHotRoutes.encode(message).finish()
        };
    }
};
function createBaseMsgSetHotRoutesResponse() {
    return {};
}
export const MsgSetHotRoutesResponse = {
    typeUrl: "/osmosis.protorev.v1beta1.MsgSetHotRoutesResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return MsgSetHotRoutesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/protorev/set-hot-routes-response",
            value: MsgSetHotRoutesResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgSetHotRoutesResponse.decode(message.value);
    },
    toProto(message) {
        return MsgSetHotRoutesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.protorev.v1beta1.MsgSetHotRoutesResponse",
            value: MsgSetHotRoutesResponse.encode(message).finish()
        };
    }
};
function createBaseMsgSetDeveloperAccount() {
    return {
        admin: "",
        developer_account: ""
    };
}
export const MsgSetDeveloperAccount = {
    typeUrl: "/osmosis.protorev.v1beta1.MsgSetDeveloperAccount",
    encode(message, writer = BinaryWriter.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (message.developer_account !== "") {
            writer.uint32(18).string(message.developer_account);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
            admin: isSet(object.admin) ? String(object.admin) : "",
            developer_account: isSet(object.developer_account) ? String(object.developer_account) : ""
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
        return MsgSetDeveloperAccount.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/MsgSetDeveloperAccount",
            value: MsgSetDeveloperAccount.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgSetDeveloperAccount.decode(message.value);
    },
    toProto(message) {
        return MsgSetDeveloperAccount.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.protorev.v1beta1.MsgSetDeveloperAccount",
            value: MsgSetDeveloperAccount.encode(message).finish()
        };
    }
};
function createBaseMsgSetDeveloperAccountResponse() {
    return {};
}
export const MsgSetDeveloperAccountResponse = {
    typeUrl: "/osmosis.protorev.v1beta1.MsgSetDeveloperAccountResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return MsgSetDeveloperAccountResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/protorev/set-developer-account-response",
            value: MsgSetDeveloperAccountResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgSetDeveloperAccountResponse.decode(message.value);
    },
    toProto(message) {
        return MsgSetDeveloperAccountResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.protorev.v1beta1.MsgSetDeveloperAccountResponse",
            value: MsgSetDeveloperAccountResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=tx.js.map
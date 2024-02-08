"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InterchainAccount = exports.protobufPackage = void 0;
//@ts-nocheck
const auth_1 = require("../../../../cosmos/auth/v1beta1/auth");
const binary_1 = require("../../../../binary");
const helpers_1 = require("../../../../helpers");
const registry_1 = require("../../../../registry");
exports.protobufPackage = "ibc.applications.interchain_accounts.v1";
function createBaseInterchainAccount() {
    return {
        $typeUrl: "/ibc.applications.interchain_accounts.v1.InterchainAccount",
        base_account: undefined,
        account_owner: ""
    };
}
exports.InterchainAccount = {
    typeUrl: "/ibc.applications.interchain_accounts.v1.InterchainAccount",
    aminoType: "cosmos-sdk/InterchainAccount",
    is(o) {
        return o && (o.$typeUrl === exports.InterchainAccount.typeUrl || typeof o.account_owner === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.InterchainAccount.typeUrl || typeof o.account_owner === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.InterchainAccount.typeUrl || typeof o.account_owner === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.base_account !== undefined) {
            auth_1.BaseAccount.encode(message.base_account, writer.uint32(10).fork()).ldelim();
        }
        if (message.account_owner !== "") {
            writer.uint32(18).string(message.account_owner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInterchainAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.base_account = auth_1.BaseAccount.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.account_owner = reader.string();
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
            base_account: (0, helpers_1.isSet)(object.base_account) ? auth_1.BaseAccount.fromJSON(object.base_account) : undefined,
            account_owner: (0, helpers_1.isSet)(object.account_owner) ? String(object.account_owner) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.base_account !== undefined && (obj.base_account = message.base_account ? auth_1.BaseAccount.toJSON(message.base_account) : undefined);
        message.account_owner !== undefined && (obj.account_owner = message.account_owner);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseInterchainAccount();
        message.base_account = object.base_account !== undefined && object.base_account !== null ? auth_1.BaseAccount.fromPartial(object.base_account) : undefined;
        message.account_owner = object.account_owner ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseInterchainAccount();
        if (object.base_account !== undefined && object.base_account !== null) {
            message.base_account = auth_1.BaseAccount.fromAmino(object.base_account);
        }
        if (object.account_owner !== undefined && object.account_owner !== null) {
            message.account_owner = object.account_owner;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.base_account = message.base_account ? auth_1.BaseAccount.toAmino(message.base_account) : undefined;
        obj.account_owner = message.account_owner;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.InterchainAccount.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/InterchainAccount",
            value: exports.InterchainAccount.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.InterchainAccount.decode(message.value);
    },
    toProto(message) {
        return exports.InterchainAccount.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.interchain_accounts.v1.InterchainAccount",
            value: exports.InterchainAccount.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.InterchainAccount.typeUrl, exports.InterchainAccount);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.InterchainAccount.aminoType, exports.InterchainAccount.typeUrl);
//# sourceMappingURL=account.js.map
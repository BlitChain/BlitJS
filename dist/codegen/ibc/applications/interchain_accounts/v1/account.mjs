//@ts-nocheck
import { BaseAccount } from "../../../../cosmos/auth/v1beta1/auth";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet } from "../../../../helpers";
export const protobufPackage = "ibc.applications.interchain_accounts.v1";
function createBaseInterchainAccount() {
    return {
        $typeUrl: "/ibc.applications.interchain_accounts.v1.InterchainAccount",
        base_account: undefined,
        account_owner: ""
    };
}
export const InterchainAccount = {
    typeUrl: "/ibc.applications.interchain_accounts.v1.InterchainAccount",
    encode(message, writer = BinaryWriter.create()) {
        if (message.base_account !== undefined) {
            BaseAccount.encode(message.base_account, writer.uint32(10).fork()).ldelim();
        }
        if (message.account_owner !== "") {
            writer.uint32(18).string(message.account_owner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInterchainAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.base_account = BaseAccount.decode(reader, reader.uint32());
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
            base_account: isSet(object.base_account) ? BaseAccount.fromJSON(object.base_account) : undefined,
            account_owner: isSet(object.account_owner) ? String(object.account_owner) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.base_account !== undefined && (obj.base_account = message.base_account ? BaseAccount.toJSON(message.base_account) : undefined);
        message.account_owner !== undefined && (obj.account_owner = message.account_owner);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseInterchainAccount();
        message.base_account = object.base_account !== undefined && object.base_account !== null ? BaseAccount.fromPartial(object.base_account) : undefined;
        message.account_owner = object.account_owner ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseInterchainAccount();
        if (object.base_account !== undefined && object.base_account !== null) {
            message.base_account = BaseAccount.fromAmino(object.base_account);
        }
        if (object.account_owner !== undefined && object.account_owner !== null) {
            message.account_owner = object.account_owner;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.base_account = message.base_account ? BaseAccount.toAmino(message.base_account) : undefined;
        obj.account_owner = message.account_owner;
        return obj;
    },
    fromAminoMsg(object) {
        return InterchainAccount.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/InterchainAccount",
            value: InterchainAccount.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return InterchainAccount.decode(message.value);
    },
    toProto(message) {
        return InterchainAccount.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.interchain_accounts.v1.InterchainAccount",
            value: InterchainAccount.encode(message).finish()
        };
    }
};
//# sourceMappingURL=account.js.map
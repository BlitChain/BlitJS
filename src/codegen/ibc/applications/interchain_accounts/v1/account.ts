//@ts-nocheck
import { BaseAccount, BaseAccountAmino, BaseAccountSDKType } from "../../../../cosmos/auth/v1beta1/auth";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet } from "../../../../helpers";
export const protobufPackage = "ibc.applications.interchain_accounts.v1";
/** An InterchainAccount is defined as a BaseAccount & the address of the account owner on the controller chain */
export interface InterchainAccount {
  $typeUrl?: "/ibc.applications.interchain_accounts.v1.InterchainAccount";
  base_account?: BaseAccount;
  account_owner: string;
}
export interface InterchainAccountProtoMsg {
  type_url: "/ibc.applications.interchain_accounts.v1.InterchainAccount";
  value: Uint8Array;
}
/** An InterchainAccount is defined as a BaseAccount & the address of the account owner on the controller chain */
export interface InterchainAccountAmino {
  base_account?: BaseAccountAmino;
  account_owner: string;
}
export interface InterchainAccountAminoMsg {
  type: "cosmos-sdk/InterchainAccount";
  value: InterchainAccountAmino;
}
/** An InterchainAccount is defined as a BaseAccount & the address of the account owner on the controller chain */
export interface InterchainAccountSDKType {
  $typeUrl?: "/ibc.applications.interchain_accounts.v1.InterchainAccount";
  base_account?: BaseAccountSDKType;
  account_owner: string;
}
function createBaseInterchainAccount(): InterchainAccount {
  return {
    $typeUrl: "/ibc.applications.interchain_accounts.v1.InterchainAccount",
    base_account: undefined,
    account_owner: ""
  };
}
export const InterchainAccount = {
  typeUrl: "/ibc.applications.interchain_accounts.v1.InterchainAccount",
  encode(message: InterchainAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.base_account !== undefined) {
      BaseAccount.encode(message.base_account, writer.uint32(10).fork()).ldelim();
    }
    if (message.account_owner !== "") {
      writer.uint32(18).string(message.account_owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): InterchainAccount {
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
  fromJSON(object: any): InterchainAccount {
    return {
      base_account: isSet(object.base_account) ? BaseAccount.fromJSON(object.base_account) : undefined,
      account_owner: isSet(object.account_owner) ? String(object.account_owner) : ""
    };
  },
  toJSON(message: InterchainAccount): unknown {
    const obj: any = {};
    message.base_account !== undefined && (obj.base_account = message.base_account ? BaseAccount.toJSON(message.base_account) : undefined);
    message.account_owner !== undefined && (obj.account_owner = message.account_owner);
    return obj;
  },
  fromPartial(object: Partial<InterchainAccount>): InterchainAccount {
    const message = createBaseInterchainAccount();
    message.base_account = object.base_account !== undefined && object.base_account !== null ? BaseAccount.fromPartial(object.base_account) : undefined;
    message.account_owner = object.account_owner ?? "";
    return message;
  },
  fromAmino(object: InterchainAccountAmino): InterchainAccount {
    return {
      base_account: object?.base_account ? BaseAccount.fromAmino(object.base_account) : undefined,
      account_owner: object.account_owner
    };
  },
  toAmino(message: InterchainAccount): InterchainAccountAmino {
    const obj: any = {};
    obj.base_account = message.base_account ? BaseAccount.toAmino(message.base_account) : undefined;
    obj.account_owner = message.account_owner;
    return obj;
  },
  fromAminoMsg(object: InterchainAccountAminoMsg): InterchainAccount {
    return InterchainAccount.fromAmino(object.value);
  },
  toAminoMsg(message: InterchainAccount): InterchainAccountAminoMsg {
    return {
      type: "cosmos-sdk/InterchainAccount",
      value: InterchainAccount.toAmino(message)
    };
  },
  fromProtoMsg(message: InterchainAccountProtoMsg): InterchainAccount {
    return InterchainAccount.decode(message.value);
  },
  toProto(message: InterchainAccount): Uint8Array {
    return InterchainAccount.encode(message).finish();
  },
  toProtoMsg(message: InterchainAccount): InterchainAccountProtoMsg {
    return {
      typeUrl: "/ibc.applications.interchain_accounts.v1.InterchainAccount",
      value: InterchainAccount.encode(message).finish()
    };
  }
};
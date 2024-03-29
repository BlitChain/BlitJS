//@ts-nocheck
import { Coin } from "../../base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export const protobufPackage = "cosmos.staking.v1beta1";
/**
 * AuthorizationType defines the type of staking module authorization type
 *
 * Since: cosmos-sdk 0.43
 */
export var AuthorizationType;
(function (AuthorizationType) {
    /** AUTHORIZATION_TYPE_UNSPECIFIED - AUTHORIZATION_TYPE_UNSPECIFIED specifies an unknown authorization type */
    AuthorizationType[AuthorizationType["AUTHORIZATION_TYPE_UNSPECIFIED"] = 0] = "AUTHORIZATION_TYPE_UNSPECIFIED";
    /** AUTHORIZATION_TYPE_DELEGATE - AUTHORIZATION_TYPE_DELEGATE defines an authorization type for Msg/Delegate */
    AuthorizationType[AuthorizationType["AUTHORIZATION_TYPE_DELEGATE"] = 1] = "AUTHORIZATION_TYPE_DELEGATE";
    /** AUTHORIZATION_TYPE_UNDELEGATE - AUTHORIZATION_TYPE_UNDELEGATE defines an authorization type for Msg/Undelegate */
    AuthorizationType[AuthorizationType["AUTHORIZATION_TYPE_UNDELEGATE"] = 2] = "AUTHORIZATION_TYPE_UNDELEGATE";
    /** AUTHORIZATION_TYPE_REDELEGATE - AUTHORIZATION_TYPE_REDELEGATE defines an authorization type for Msg/BeginRedelegate */
    AuthorizationType[AuthorizationType["AUTHORIZATION_TYPE_REDELEGATE"] = 3] = "AUTHORIZATION_TYPE_REDELEGATE";
    /** AUTHORIZATION_TYPE_CANCEL_UNBONDING_DELEGATION - AUTHORIZATION_TYPE_CANCEL_UNBONDING_DELEGATION defines an authorization type for Msg/MsgCancelUnbondingDelegation */
    AuthorizationType[AuthorizationType["AUTHORIZATION_TYPE_CANCEL_UNBONDING_DELEGATION"] = 4] = "AUTHORIZATION_TYPE_CANCEL_UNBONDING_DELEGATION";
    AuthorizationType[AuthorizationType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(AuthorizationType || (AuthorizationType = {}));
export const AuthorizationTypeSDKType = AuthorizationType;
export const AuthorizationTypeAmino = AuthorizationType;
export function authorizationTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "AUTHORIZATION_TYPE_UNSPECIFIED":
            return AuthorizationType.AUTHORIZATION_TYPE_UNSPECIFIED;
        case 1:
        case "AUTHORIZATION_TYPE_DELEGATE":
            return AuthorizationType.AUTHORIZATION_TYPE_DELEGATE;
        case 2:
        case "AUTHORIZATION_TYPE_UNDELEGATE":
            return AuthorizationType.AUTHORIZATION_TYPE_UNDELEGATE;
        case 3:
        case "AUTHORIZATION_TYPE_REDELEGATE":
            return AuthorizationType.AUTHORIZATION_TYPE_REDELEGATE;
        case 4:
        case "AUTHORIZATION_TYPE_CANCEL_UNBONDING_DELEGATION":
            return AuthorizationType.AUTHORIZATION_TYPE_CANCEL_UNBONDING_DELEGATION;
        case -1:
        case "UNRECOGNIZED":
        default:
            return AuthorizationType.UNRECOGNIZED;
    }
}
export function authorizationTypeToJSON(object) {
    switch (object) {
        case AuthorizationType.AUTHORIZATION_TYPE_UNSPECIFIED:
            return "AUTHORIZATION_TYPE_UNSPECIFIED";
        case AuthorizationType.AUTHORIZATION_TYPE_DELEGATE:
            return "AUTHORIZATION_TYPE_DELEGATE";
        case AuthorizationType.AUTHORIZATION_TYPE_UNDELEGATE:
            return "AUTHORIZATION_TYPE_UNDELEGATE";
        case AuthorizationType.AUTHORIZATION_TYPE_REDELEGATE:
            return "AUTHORIZATION_TYPE_REDELEGATE";
        case AuthorizationType.AUTHORIZATION_TYPE_CANCEL_UNBONDING_DELEGATION:
            return "AUTHORIZATION_TYPE_CANCEL_UNBONDING_DELEGATION";
        case AuthorizationType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseStakeAuthorization() {
    return {
        $typeUrl: "/cosmos.staking.v1beta1.StakeAuthorization",
        max_tokens: undefined,
        allow_list: undefined,
        deny_list: undefined,
        authorization_type: 0
    };
}
export const StakeAuthorization = {
    typeUrl: "/cosmos.staking.v1beta1.StakeAuthorization",
    encode(message, writer = BinaryWriter.create()) {
        if (message.max_tokens !== undefined) {
            Coin.encode(message.max_tokens, writer.uint32(10).fork()).ldelim();
        }
        if (message.allow_list !== undefined) {
            StakeAuthorization_Validators.encode(message.allow_list, writer.uint32(18).fork()).ldelim();
        }
        if (message.deny_list !== undefined) {
            StakeAuthorization_Validators.encode(message.deny_list, writer.uint32(26).fork()).ldelim();
        }
        if (message.authorization_type !== 0) {
            writer.uint32(32).int32(message.authorization_type);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStakeAuthorization();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.max_tokens = Coin.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.allow_list = StakeAuthorization_Validators.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.deny_list = StakeAuthorization_Validators.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.authorization_type = reader.int32();
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
            max_tokens: isSet(object.max_tokens) ? Coin.fromJSON(object.max_tokens) : undefined,
            allow_list: isSet(object.allow_list) ? StakeAuthorization_Validators.fromJSON(object.allow_list) : undefined,
            deny_list: isSet(object.deny_list) ? StakeAuthorization_Validators.fromJSON(object.deny_list) : undefined,
            authorization_type: isSet(object.authorization_type) ? authorizationTypeFromJSON(object.authorization_type) : -1
        };
    },
    toJSON(message) {
        const obj = {};
        message.max_tokens !== undefined && (obj.max_tokens = message.max_tokens ? Coin.toJSON(message.max_tokens) : undefined);
        message.allow_list !== undefined && (obj.allow_list = message.allow_list ? StakeAuthorization_Validators.toJSON(message.allow_list) : undefined);
        message.deny_list !== undefined && (obj.deny_list = message.deny_list ? StakeAuthorization_Validators.toJSON(message.deny_list) : undefined);
        message.authorization_type !== undefined && (obj.authorization_type = authorizationTypeToJSON(message.authorization_type));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseStakeAuthorization();
        message.max_tokens = object.max_tokens !== undefined && object.max_tokens !== null ? Coin.fromPartial(object.max_tokens) : undefined;
        message.allow_list = object.allow_list !== undefined && object.allow_list !== null ? StakeAuthorization_Validators.fromPartial(object.allow_list) : undefined;
        message.deny_list = object.deny_list !== undefined && object.deny_list !== null ? StakeAuthorization_Validators.fromPartial(object.deny_list) : undefined;
        message.authorization_type = object.authorization_type ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseStakeAuthorization();
        if (object.max_tokens !== undefined && object.max_tokens !== null) {
            message.max_tokens = Coin.fromAmino(object.max_tokens);
        }
        if (object.allow_list !== undefined && object.allow_list !== null) {
            message.allow_list = StakeAuthorization_Validators.fromAmino(object.allow_list);
        }
        if (object.deny_list !== undefined && object.deny_list !== null) {
            message.deny_list = StakeAuthorization_Validators.fromAmino(object.deny_list);
        }
        if (object.authorization_type !== undefined && object.authorization_type !== null) {
            message.authorization_type = authorizationTypeFromJSON(object.authorization_type);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.max_tokens = message.max_tokens ? Coin.toAmino(message.max_tokens) : undefined;
        obj.allow_list = message.allow_list ? StakeAuthorization_Validators.toAmino(message.allow_list) : undefined;
        obj.deny_list = message.deny_list ? StakeAuthorization_Validators.toAmino(message.deny_list) : undefined;
        obj.authorization_type = message.authorization_type;
        return obj;
    },
    fromAminoMsg(object) {
        return StakeAuthorization.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/StakeAuthorization",
            value: StakeAuthorization.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return StakeAuthorization.decode(message.value);
    },
    toProto(message) {
        return StakeAuthorization.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.StakeAuthorization",
            value: StakeAuthorization.encode(message).finish()
        };
    }
};
function createBaseStakeAuthorization_Validators() {
    return {
        address: []
    };
}
export const StakeAuthorization_Validators = {
    typeUrl: "/cosmos.staking.v1beta1.Validators",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.address) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStakeAuthorization_Validators();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address.push(reader.string());
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
            address: Array.isArray(object?.address) ? object.address.map((e) => String(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.address) {
            obj.address = message.address.map(e => e);
        }
        else {
            obj.address = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseStakeAuthorization_Validators();
        message.address = object.address?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseStakeAuthorization_Validators();
        message.address = object.address?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.address) {
            obj.address = message.address.map(e => e);
        }
        else {
            obj.address = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return StakeAuthorization_Validators.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Validators",
            value: StakeAuthorization_Validators.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return StakeAuthorization_Validators.decode(message.value);
    },
    toProto(message) {
        return StakeAuthorization_Validators.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.Validators",
            value: StakeAuthorization_Validators.encode(message).finish()
        };
    }
};
//# sourceMappingURL=authz.js.map
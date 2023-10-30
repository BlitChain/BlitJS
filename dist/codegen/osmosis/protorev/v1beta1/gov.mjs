//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
function createBaseSetProtoRevEnabledProposal() {
    return {
        $typeUrl: "/osmosis.protorev.v1beta1.SetProtoRevEnabledProposal",
        title: "",
        description: "",
        enabled: false
    };
}
export const SetProtoRevEnabledProposal = {
    typeUrl: "/osmosis.protorev.v1beta1.SetProtoRevEnabledProposal",
    encode(message, writer = BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.enabled === true) {
            writer.uint32(24).bool(message.enabled);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSetProtoRevEnabledProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.enabled = reader.bool();
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
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            enabled: isSet(object.enabled) ? Boolean(object.enabled) : false
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.enabled !== undefined && (obj.enabled = message.enabled);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSetProtoRevEnabledProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.enabled = object.enabled ?? false;
        return message;
    },
    fromSDK(object) {
        return {
            title: object?.title,
            description: object?.description,
            enabled: object?.enabled
        };
    },
    toSDK(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        obj.enabled = message.enabled;
        return obj;
    },
    fromAmino(object) {
        return {
            title: object.title,
            description: object.description,
            enabled: object.enabled
        };
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        obj.enabled = message.enabled;
        return obj;
    },
    fromAminoMsg(object) {
        return SetProtoRevEnabledProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/protorev/set-proto-rev-enabled-proposal",
            value: SetProtoRevEnabledProposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return SetProtoRevEnabledProposal.decode(message.value);
    },
    toProto(message) {
        return SetProtoRevEnabledProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.protorev.v1beta1.SetProtoRevEnabledProposal",
            value: SetProtoRevEnabledProposal.encode(message).finish()
        };
    }
};
function createBaseSetProtoRevAdminAccountProposal() {
    return {
        $typeUrl: "/osmosis.protorev.v1beta1.SetProtoRevAdminAccountProposal",
        title: "",
        description: "",
        account: ""
    };
}
export const SetProtoRevAdminAccountProposal = {
    typeUrl: "/osmosis.protorev.v1beta1.SetProtoRevAdminAccountProposal",
    encode(message, writer = BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.account !== "") {
            writer.uint32(26).string(message.account);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSetProtoRevAdminAccountProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.account = reader.string();
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
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            account: isSet(object.account) ? String(object.account) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.account !== undefined && (obj.account = message.account);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSetProtoRevAdminAccountProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.account = object.account ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            title: object?.title,
            description: object?.description,
            account: object?.account
        };
    },
    toSDK(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        obj.account = message.account;
        return obj;
    },
    fromAmino(object) {
        return {
            title: object.title,
            description: object.description,
            account: object.account
        };
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        obj.account = message.account;
        return obj;
    },
    fromAminoMsg(object) {
        return SetProtoRevAdminAccountProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/protorev/set-proto-rev-admin-account-proposal",
            value: SetProtoRevAdminAccountProposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return SetProtoRevAdminAccountProposal.decode(message.value);
    },
    toProto(message) {
        return SetProtoRevAdminAccountProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.protorev.v1beta1.SetProtoRevAdminAccountProposal",
            value: SetProtoRevAdminAccountProposal.encode(message).finish()
        };
    }
};
//# sourceMappingURL=gov.js.map
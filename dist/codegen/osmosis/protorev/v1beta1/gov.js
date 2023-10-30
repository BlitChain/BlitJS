"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetProtoRevAdminAccountProposal = exports.SetProtoRevEnabledProposal = void 0;
//@ts-nocheck
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
function createBaseSetProtoRevEnabledProposal() {
    return {
        $typeUrl: "/osmosis.protorev.v1beta1.SetProtoRevEnabledProposal",
        title: "",
        description: "",
        enabled: false
    };
}
exports.SetProtoRevEnabledProposal = {
    typeUrl: "/osmosis.protorev.v1beta1.SetProtoRevEnabledProposal",
    encode(message, writer = binary_1.BinaryWriter.create()) {
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
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
            title: (0, helpers_1.isSet)(object.title) ? String(object.title) : "",
            description: (0, helpers_1.isSet)(object.description) ? String(object.description) : "",
            enabled: (0, helpers_1.isSet)(object.enabled) ? Boolean(object.enabled) : false
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
        return exports.SetProtoRevEnabledProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/protorev/set-proto-rev-enabled-proposal",
            value: exports.SetProtoRevEnabledProposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.SetProtoRevEnabledProposal.decode(message.value);
    },
    toProto(message) {
        return exports.SetProtoRevEnabledProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.protorev.v1beta1.SetProtoRevEnabledProposal",
            value: exports.SetProtoRevEnabledProposal.encode(message).finish()
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
exports.SetProtoRevAdminAccountProposal = {
    typeUrl: "/osmosis.protorev.v1beta1.SetProtoRevAdminAccountProposal",
    encode(message, writer = binary_1.BinaryWriter.create()) {
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
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
            title: (0, helpers_1.isSet)(object.title) ? String(object.title) : "",
            description: (0, helpers_1.isSet)(object.description) ? String(object.description) : "",
            account: (0, helpers_1.isSet)(object.account) ? String(object.account) : ""
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
        return exports.SetProtoRevAdminAccountProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/protorev/set-proto-rev-admin-account-proposal",
            value: exports.SetProtoRevAdminAccountProposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.SetProtoRevAdminAccountProposal.decode(message.value);
    },
    toProto(message) {
        return exports.SetProtoRevAdminAccountProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.protorev.v1beta1.SetProtoRevAdminAccountProposal",
            value: exports.SetProtoRevAdminAccountProposal.encode(message).finish()
        };
    }
};
//# sourceMappingURL=gov.js.map
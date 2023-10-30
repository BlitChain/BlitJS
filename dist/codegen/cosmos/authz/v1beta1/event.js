"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventRevoke = exports.EventGrant = void 0;
//@ts-nocheck
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
function createBaseEventGrant() {
    return {
        msg_type_url: "",
        granter: "",
        grantee: ""
    };
}
exports.EventGrant = {
    typeUrl: "/cosmos.authz.v1beta1.EventGrant",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.msg_type_url !== "") {
            writer.uint32(18).string(message.msg_type_url);
        }
        if (message.granter !== "") {
            writer.uint32(26).string(message.granter);
        }
        if (message.grantee !== "") {
            writer.uint32(34).string(message.grantee);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventGrant();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.msg_type_url = reader.string();
                    break;
                case 3:
                    message.granter = reader.string();
                    break;
                case 4:
                    message.grantee = reader.string();
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
            msg_type_url: (0, helpers_1.isSet)(object.msg_type_url) ? String(object.msg_type_url) : "",
            granter: (0, helpers_1.isSet)(object.granter) ? String(object.granter) : "",
            grantee: (0, helpers_1.isSet)(object.grantee) ? String(object.grantee) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.msg_type_url !== undefined && (obj.msg_type_url = message.msg_type_url);
        message.granter !== undefined && (obj.granter = message.granter);
        message.grantee !== undefined && (obj.grantee = message.grantee);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEventGrant();
        message.msg_type_url = object.msg_type_url ?? "";
        message.granter = object.granter ?? "";
        message.grantee = object.grantee ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            msg_type_url: object?.msg_type_url,
            granter: object?.granter,
            grantee: object?.grantee
        };
    },
    toSDK(message) {
        const obj = {};
        obj.msg_type_url = message.msg_type_url;
        obj.granter = message.granter;
        obj.grantee = message.grantee;
        return obj;
    },
    fromAmino(object) {
        return {
            msg_type_url: object.msg_type_url,
            granter: object.granter,
            grantee: object.grantee
        };
    },
    toAmino(message) {
        const obj = {};
        obj.msg_type_url = message.msg_type_url;
        obj.granter = message.granter;
        obj.grantee = message.grantee;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EventGrant.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/EventGrant",
            value: exports.EventGrant.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.EventGrant.decode(message.value);
    },
    toProto(message) {
        return exports.EventGrant.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.authz.v1beta1.EventGrant",
            value: exports.EventGrant.encode(message).finish()
        };
    }
};
function createBaseEventRevoke() {
    return {
        msg_type_url: "",
        granter: "",
        grantee: ""
    };
}
exports.EventRevoke = {
    typeUrl: "/cosmos.authz.v1beta1.EventRevoke",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.msg_type_url !== "") {
            writer.uint32(18).string(message.msg_type_url);
        }
        if (message.granter !== "") {
            writer.uint32(26).string(message.granter);
        }
        if (message.grantee !== "") {
            writer.uint32(34).string(message.grantee);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventRevoke();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.msg_type_url = reader.string();
                    break;
                case 3:
                    message.granter = reader.string();
                    break;
                case 4:
                    message.grantee = reader.string();
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
            msg_type_url: (0, helpers_1.isSet)(object.msg_type_url) ? String(object.msg_type_url) : "",
            granter: (0, helpers_1.isSet)(object.granter) ? String(object.granter) : "",
            grantee: (0, helpers_1.isSet)(object.grantee) ? String(object.grantee) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.msg_type_url !== undefined && (obj.msg_type_url = message.msg_type_url);
        message.granter !== undefined && (obj.granter = message.granter);
        message.grantee !== undefined && (obj.grantee = message.grantee);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEventRevoke();
        message.msg_type_url = object.msg_type_url ?? "";
        message.granter = object.granter ?? "";
        message.grantee = object.grantee ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            msg_type_url: object?.msg_type_url,
            granter: object?.granter,
            grantee: object?.grantee
        };
    },
    toSDK(message) {
        const obj = {};
        obj.msg_type_url = message.msg_type_url;
        obj.granter = message.granter;
        obj.grantee = message.grantee;
        return obj;
    },
    fromAmino(object) {
        return {
            msg_type_url: object.msg_type_url,
            granter: object.granter,
            grantee: object.grantee
        };
    },
    toAmino(message) {
        const obj = {};
        obj.msg_type_url = message.msg_type_url;
        obj.granter = message.granter;
        obj.grantee = message.grantee;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EventRevoke.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/EventRevoke",
            value: exports.EventRevoke.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.EventRevoke.decode(message.value);
    },
    toProto(message) {
        return exports.EventRevoke.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.authz.v1beta1.EventRevoke",
            value: exports.EventRevoke.encode(message).finish()
        };
    }
};
//# sourceMappingURL=event.js.map
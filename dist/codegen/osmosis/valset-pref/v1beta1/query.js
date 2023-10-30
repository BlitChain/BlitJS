"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidatorPreferencesResponse = exports.UserValidatorPreferencesRequest = void 0;
//@ts-nocheck
const state_1 = require("./state");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
function createBaseUserValidatorPreferencesRequest() {
    return {
        address: ""
    };
}
exports.UserValidatorPreferencesRequest = {
    typeUrl: "/osmosis.valsetpref.v1beta1.UserValidatorPreferencesRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUserValidatorPreferencesRequest();
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
        const message = createBaseUserValidatorPreferencesRequest();
        message.address = object.address ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            address: object?.address
        };
    },
    toSDK(message) {
        const obj = {};
        obj.address = message.address;
        return obj;
    },
    fromAmino(object) {
        return {
            address: object.address
        };
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.UserValidatorPreferencesRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/valsetpref/user-validator-preferences-request",
            value: exports.UserValidatorPreferencesRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.UserValidatorPreferencesRequest.decode(message.value);
    },
    toProto(message) {
        return exports.UserValidatorPreferencesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.valsetpref.v1beta1.UserValidatorPreferencesRequest",
            value: exports.UserValidatorPreferencesRequest.encode(message).finish()
        };
    }
};
function createBaseUserValidatorPreferencesResponse() {
    return {
        preferences: []
    };
}
exports.UserValidatorPreferencesResponse = {
    typeUrl: "/osmosis.valsetpref.v1beta1.UserValidatorPreferencesResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.preferences) {
            state_1.ValidatorPreference.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUserValidatorPreferencesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.preferences.push(state_1.ValidatorPreference.decode(reader, reader.uint32()));
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
            preferences: Array.isArray(object?.preferences) ? object.preferences.map((e) => state_1.ValidatorPreference.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.preferences) {
            obj.preferences = message.preferences.map(e => e ? state_1.ValidatorPreference.toJSON(e) : undefined);
        }
        else {
            obj.preferences = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseUserValidatorPreferencesResponse();
        message.preferences = object.preferences?.map(e => state_1.ValidatorPreference.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            preferences: Array.isArray(object?.preferences) ? object.preferences.map((e) => state_1.ValidatorPreference.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.preferences) {
            obj.preferences = message.preferences.map(e => e ? state_1.ValidatorPreference.toSDK(e) : undefined);
        }
        else {
            obj.preferences = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            preferences: Array.isArray(object?.preferences) ? object.preferences.map((e) => state_1.ValidatorPreference.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.preferences) {
            obj.preferences = message.preferences.map(e => e ? state_1.ValidatorPreference.toAmino(e) : undefined);
        }
        else {
            obj.preferences = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.UserValidatorPreferencesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/valsetpref/user-validator-preferences-response",
            value: exports.UserValidatorPreferencesResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.UserValidatorPreferencesResponse.decode(message.value);
    },
    toProto(message) {
        return exports.UserValidatorPreferencesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.valsetpref.v1beta1.UserValidatorPreferencesResponse",
            value: exports.UserValidatorPreferencesResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=query.js.map
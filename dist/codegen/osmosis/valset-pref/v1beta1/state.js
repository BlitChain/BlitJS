"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidatorSetPreferences = exports.ValidatorPreference = void 0;
//@ts-nocheck
const binary_1 = require("../../../binary");
const math_1 = require("@cosmjs/math");
const helpers_1 = require("../../../helpers");
function createBaseValidatorPreference() {
    return {
        val_oper_address: "",
        weight: ""
    };
}
exports.ValidatorPreference = {
    typeUrl: "/osmosis.valsetpref.v1beta1.ValidatorPreference",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.val_oper_address !== "") {
            writer.uint32(10).string(message.val_oper_address);
        }
        if (message.weight !== "") {
            writer.uint32(18).string(math_1.Decimal.fromUserInput(message.weight, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorPreference();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.val_oper_address = reader.string();
                    break;
                case 2:
                    message.weight = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
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
            val_oper_address: (0, helpers_1.isSet)(object.val_oper_address) ? String(object.val_oper_address) : "",
            weight: (0, helpers_1.isSet)(object.weight) ? String(object.weight) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.val_oper_address !== undefined && (obj.val_oper_address = message.val_oper_address);
        message.weight !== undefined && (obj.weight = message.weight);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseValidatorPreference();
        message.val_oper_address = object.val_oper_address ?? "";
        message.weight = object.weight ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            val_oper_address: object?.val_oper_address,
            weight: object?.weight
        };
    },
    toSDK(message) {
        const obj = {};
        obj.val_oper_address = message.val_oper_address;
        obj.weight = message.weight;
        return obj;
    },
    fromAmino(object) {
        return {
            val_oper_address: object.val_oper_address,
            weight: object.weight
        };
    },
    toAmino(message) {
        const obj = {};
        obj.val_oper_address = message.val_oper_address;
        obj.weight = message.weight;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ValidatorPreference.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/valsetpref/validator-preference",
            value: exports.ValidatorPreference.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ValidatorPreference.decode(message.value);
    },
    toProto(message) {
        return exports.ValidatorPreference.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.valsetpref.v1beta1.ValidatorPreference",
            value: exports.ValidatorPreference.encode(message).finish()
        };
    }
};
function createBaseValidatorSetPreferences() {
    return {
        preferences: []
    };
}
exports.ValidatorSetPreferences = {
    typeUrl: "/osmosis.valsetpref.v1beta1.ValidatorSetPreferences",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.preferences) {
            exports.ValidatorPreference.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorSetPreferences();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.preferences.push(exports.ValidatorPreference.decode(reader, reader.uint32()));
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
            preferences: Array.isArray(object?.preferences) ? object.preferences.map((e) => exports.ValidatorPreference.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.preferences) {
            obj.preferences = message.preferences.map(e => e ? exports.ValidatorPreference.toJSON(e) : undefined);
        }
        else {
            obj.preferences = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseValidatorSetPreferences();
        message.preferences = object.preferences?.map(e => exports.ValidatorPreference.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            preferences: Array.isArray(object?.preferences) ? object.preferences.map((e) => exports.ValidatorPreference.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.preferences) {
            obj.preferences = message.preferences.map(e => e ? exports.ValidatorPreference.toSDK(e) : undefined);
        }
        else {
            obj.preferences = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            preferences: Array.isArray(object?.preferences) ? object.preferences.map((e) => exports.ValidatorPreference.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.preferences) {
            obj.preferences = message.preferences.map(e => e ? exports.ValidatorPreference.toAmino(e) : undefined);
        }
        else {
            obj.preferences = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ValidatorSetPreferences.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/valsetpref/validator-set-preferences",
            value: exports.ValidatorSetPreferences.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ValidatorSetPreferences.decode(message.value);
    },
    toProto(message) {
        return exports.ValidatorSetPreferences.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.valsetpref.v1beta1.ValidatorSetPreferences",
            value: exports.ValidatorSetPreferences.encode(message).finish()
        };
    }
};
//# sourceMappingURL=state.js.map
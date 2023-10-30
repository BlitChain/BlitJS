//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet } from "../../../helpers";
function createBaseValidatorPreference() {
    return {
        val_oper_address: "",
        weight: ""
    };
}
export const ValidatorPreference = {
    typeUrl: "/osmosis.valsetpref.v1beta1.ValidatorPreference",
    encode(message, writer = BinaryWriter.create()) {
        if (message.val_oper_address !== "") {
            writer.uint32(10).string(message.val_oper_address);
        }
        if (message.weight !== "") {
            writer.uint32(18).string(Decimal.fromUserInput(message.weight, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorPreference();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.val_oper_address = reader.string();
                    break;
                case 2:
                    message.weight = Decimal.fromAtomics(reader.string(), 18).toString();
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
            val_oper_address: isSet(object.val_oper_address) ? String(object.val_oper_address) : "",
            weight: isSet(object.weight) ? String(object.weight) : ""
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
        return ValidatorPreference.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/valsetpref/validator-preference",
            value: ValidatorPreference.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ValidatorPreference.decode(message.value);
    },
    toProto(message) {
        return ValidatorPreference.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.valsetpref.v1beta1.ValidatorPreference",
            value: ValidatorPreference.encode(message).finish()
        };
    }
};
function createBaseValidatorSetPreferences() {
    return {
        preferences: []
    };
}
export const ValidatorSetPreferences = {
    typeUrl: "/osmosis.valsetpref.v1beta1.ValidatorSetPreferences",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.preferences) {
            ValidatorPreference.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorSetPreferences();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.preferences.push(ValidatorPreference.decode(reader, reader.uint32()));
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
            preferences: Array.isArray(object?.preferences) ? object.preferences.map((e) => ValidatorPreference.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.preferences) {
            obj.preferences = message.preferences.map(e => e ? ValidatorPreference.toJSON(e) : undefined);
        }
        else {
            obj.preferences = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseValidatorSetPreferences();
        message.preferences = object.preferences?.map(e => ValidatorPreference.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            preferences: Array.isArray(object?.preferences) ? object.preferences.map((e) => ValidatorPreference.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.preferences) {
            obj.preferences = message.preferences.map(e => e ? ValidatorPreference.toSDK(e) : undefined);
        }
        else {
            obj.preferences = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            preferences: Array.isArray(object?.preferences) ? object.preferences.map((e) => ValidatorPreference.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.preferences) {
            obj.preferences = message.preferences.map(e => e ? ValidatorPreference.toAmino(e) : undefined);
        }
        else {
            obj.preferences = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return ValidatorSetPreferences.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/valsetpref/validator-set-preferences",
            value: ValidatorSetPreferences.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ValidatorSetPreferences.decode(message.value);
    },
    toProto(message) {
        return ValidatorSetPreferences.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.valsetpref.v1beta1.ValidatorSetPreferences",
            value: ValidatorSetPreferences.encode(message).finish()
        };
    }
};
//# sourceMappingURL=state.js.map
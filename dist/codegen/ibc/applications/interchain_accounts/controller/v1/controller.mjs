//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../../../binary";
import { isSet } from "../../../../../helpers";
export const protobufPackage = "ibc.applications.interchain_accounts.controller.v1";
function createBaseParams() {
    return {
        controller_enabled: false
    };
}
export const Params = {
    typeUrl: "/ibc.applications.interchain_accounts.controller.v1.Params",
    encode(message, writer = BinaryWriter.create()) {
        if (message.controller_enabled === true) {
            writer.uint32(8).bool(message.controller_enabled);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.controller_enabled = reader.bool();
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
            controller_enabled: isSet(object.controller_enabled) ? Boolean(object.controller_enabled) : false
        };
    },
    toJSON(message) {
        const obj = {};
        message.controller_enabled !== undefined && (obj.controller_enabled = message.controller_enabled);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.controller_enabled = object.controller_enabled ?? false;
        return message;
    },
    fromAmino(object) {
        const message = createBaseParams();
        if (object.controller_enabled !== undefined && object.controller_enabled !== null) {
            message.controller_enabled = object.controller_enabled;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.controller_enabled = message.controller_enabled;
        return obj;
    },
    fromAminoMsg(object) {
        return Params.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Params",
            value: Params.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Params.decode(message.value);
    },
    toProto(message) {
        return Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.interchain_accounts.controller.v1.Params",
            value: Params.encode(message).finish()
        };
    }
};
//# sourceMappingURL=controller.js.map
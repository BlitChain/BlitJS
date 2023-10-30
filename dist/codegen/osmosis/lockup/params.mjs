//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
function createBaseParams() {
    return {
        force_unlock_allowed_addresses: []
    };
}
export const Params = {
    typeUrl: "/osmosis.lockup.Params",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.force_unlock_allowed_addresses) {
            writer.uint32(10).string(v);
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
                    message.force_unlock_allowed_addresses.push(reader.string());
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
            force_unlock_allowed_addresses: Array.isArray(object?.force_unlock_allowed_addresses) ? object.force_unlock_allowed_addresses.map((e) => String(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.force_unlock_allowed_addresses) {
            obj.force_unlock_allowed_addresses = message.force_unlock_allowed_addresses.map(e => e);
        }
        else {
            obj.force_unlock_allowed_addresses = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.force_unlock_allowed_addresses = object.force_unlock_allowed_addresses?.map(e => e) || [];
        return message;
    },
    fromSDK(object) {
        return {
            force_unlock_allowed_addresses: Array.isArray(object?.force_unlock_allowed_addresses) ? object.force_unlock_allowed_addresses.map((e) => e) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.force_unlock_allowed_addresses) {
            obj.force_unlock_allowed_addresses = message.force_unlock_allowed_addresses.map(e => e);
        }
        else {
            obj.force_unlock_allowed_addresses = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            force_unlock_allowed_addresses: Array.isArray(object?.force_unlock_allowed_addresses) ? object.force_unlock_allowed_addresses.map((e) => e) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.force_unlock_allowed_addresses) {
            obj.force_unlock_allowed_addresses = message.force_unlock_allowed_addresses.map(e => e);
        }
        else {
            obj.force_unlock_allowed_addresses = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return Params.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/params",
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
            typeUrl: "/osmosis.lockup.Params",
            value: Params.encode(message).finish()
        };
    }
};
//# sourceMappingURL=params.js.map
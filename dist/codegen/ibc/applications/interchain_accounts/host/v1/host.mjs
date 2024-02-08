//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../../../binary";
import { isSet } from "../../../../../helpers";
export const protobufPackage = "ibc.applications.interchain_accounts.host.v1";
function createBaseParams() {
    return {
        host_enabled: false,
        allow_messages: []
    };
}
export const Params = {
    typeUrl: "/ibc.applications.interchain_accounts.host.v1.Params",
    encode(message, writer = BinaryWriter.create()) {
        if (message.host_enabled === true) {
            writer.uint32(8).bool(message.host_enabled);
        }
        for (const v of message.allow_messages) {
            writer.uint32(18).string(v);
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
                    message.host_enabled = reader.bool();
                    break;
                case 2:
                    message.allow_messages.push(reader.string());
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
            host_enabled: isSet(object.host_enabled) ? Boolean(object.host_enabled) : false,
            allow_messages: Array.isArray(object?.allow_messages) ? object.allow_messages.map((e) => String(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.host_enabled !== undefined && (obj.host_enabled = message.host_enabled);
        if (message.allow_messages) {
            obj.allow_messages = message.allow_messages.map(e => e);
        }
        else {
            obj.allow_messages = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.host_enabled = object.host_enabled ?? false;
        message.allow_messages = object.allow_messages?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseParams();
        if (object.host_enabled !== undefined && object.host_enabled !== null) {
            message.host_enabled = object.host_enabled;
        }
        message.allow_messages = object.allow_messages?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.host_enabled = message.host_enabled;
        if (message.allow_messages) {
            obj.allow_messages = message.allow_messages.map(e => e);
        }
        else {
            obj.allow_messages = [];
        }
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
            typeUrl: "/ibc.applications.interchain_accounts.host.v1.Params",
            value: Params.encode(message).finish()
        };
    }
};
//# sourceMappingURL=host.js.map
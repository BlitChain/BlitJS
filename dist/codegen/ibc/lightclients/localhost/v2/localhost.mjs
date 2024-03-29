//@ts-nocheck
import { Height } from "../../../core/client/v1/client";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet } from "../../../../helpers";
export const protobufPackage = "ibc.lightclients.localhost.v2";
function createBaseClientState() {
    return {
        latest_height: Height.fromPartial({})
    };
}
export const ClientState = {
    typeUrl: "/ibc.lightclients.localhost.v2.ClientState",
    encode(message, writer = BinaryWriter.create()) {
        if (message.latest_height !== undefined) {
            Height.encode(message.latest_height, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseClientState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.latest_height = Height.decode(reader, reader.uint32());
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
            latest_height: isSet(object.latest_height) ? Height.fromJSON(object.latest_height) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.latest_height !== undefined && (obj.latest_height = message.latest_height ? Height.toJSON(message.latest_height) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseClientState();
        message.latest_height = object.latest_height !== undefined && object.latest_height !== null ? Height.fromPartial(object.latest_height) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseClientState();
        if (object.latest_height !== undefined && object.latest_height !== null) {
            message.latest_height = Height.fromAmino(object.latest_height);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.latest_height = message.latest_height ? Height.toAmino(message.latest_height) : {};
        return obj;
    },
    fromAminoMsg(object) {
        return ClientState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ClientState",
            value: ClientState.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ClientState.decode(message.value);
    },
    toProto(message) {
        return ClientState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.localhost.v2.ClientState",
            value: ClientState.encode(message).finish()
        };
    }
};
//# sourceMappingURL=localhost.js.map
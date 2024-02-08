//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
import { GlobalDecoderRegistry } from "../../registry";
export const protobufPackage = "blit.storage";
function createBaseStorage() {
    return {
        address: "",
        index: "",
        data: ""
    };
}
export const Storage = {
    typeUrl: "/blit.storage.Storage",
    is(o) {
        return o && (o.$typeUrl === Storage.typeUrl || typeof o.address === "string" && typeof o.index === "string" && typeof o.data === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === Storage.typeUrl || typeof o.address === "string" && typeof o.index === "string" && typeof o.data === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === Storage.typeUrl || typeof o.address === "string" && typeof o.index === "string" && typeof o.data === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.index !== "") {
            writer.uint32(18).string(message.index);
        }
        if (message.data !== "") {
            writer.uint32(26).string(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStorage();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.index = reader.string();
                    break;
                case 3:
                    message.data = reader.string();
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
            address: isSet(object.address) ? String(object.address) : "",
            index: isSet(object.index) ? String(object.index) : "",
            data: isSet(object.data) ? String(object.data) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.index !== undefined && (obj.index = message.index);
        message.data !== undefined && (obj.data = message.data);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseStorage();
        message.address = object.address ?? "";
        message.index = object.index ?? "";
        message.data = object.data ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseStorage();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = object.data;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        obj.index = message.index;
        obj.data = message.data;
        return obj;
    },
    fromAminoMsg(object) {
        return Storage.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Storage.decode(message.value);
    },
    toProto(message) {
        return Storage.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.storage.Storage",
            value: Storage.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(Storage.typeUrl, Storage);
//# sourceMappingURL=storage.js.map
//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
export const protobufPackage = "blit.storage";
function createBaseParams() {
    return {
        gasPerChar: ""
    };
}
export const Params = {
    typeUrl: "/blit.storage.Params",
    encode(message, writer = BinaryWriter.create()) {
        if (message.gasPerChar !== "") {
            writer.uint32(10).string(message.gasPerChar);
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
                    message.gasPerChar = reader.string();
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
            gasPerChar: isSet(object.gasPerChar) ? String(object.gasPerChar) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.gasPerChar !== undefined && (obj.gasPerChar = message.gasPerChar);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.gasPerChar = object.gasPerChar ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            gasPerChar: object.gasPerChar
        };
    },
    toAmino(message) {
        const obj = {};
        obj.gasPerChar = message.gasPerChar;
        return obj;
    },
    fromAminoMsg(object) {
        return Params.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "blit/x/storage/Params",
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
            typeUrl: "/blit.storage.Params",
            value: Params.encode(message).finish()
        };
    }
};
//# sourceMappingURL=params.js.map
//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, fromJsonTimestamp, fromTimestamp } from "../../helpers";
function createBaseTimestamp() {
    return {
        seconds: BigInt(0),
        nanos: 0
    };
}
export const Timestamp = {
    typeUrl: "/google.protobuf.Timestamp",
    encode(message, writer = BinaryWriter.create()) {
        if (message.seconds !== BigInt(0)) {
            writer.uint32(8).int64(message.seconds);
        }
        if (message.nanos !== 0) {
            writer.uint32(16).int32(message.nanos);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTimestamp();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.seconds = reader.int64();
                    break;
                case 2:
                    message.nanos = reader.int32();
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
            seconds: isSet(object.seconds) ? BigInt(object.seconds.toString()) : BigInt(0),
            nanos: isSet(object.nanos) ? Number(object.nanos) : 0
        };
    },
    toJSON(message) {
        const obj = {};
        message.seconds !== undefined && (obj.seconds = (message.seconds || BigInt(0)).toString());
        message.nanos !== undefined && (obj.nanos = Math.round(message.nanos));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTimestamp();
        message.seconds = object.seconds !== undefined && object.seconds !== null ? BigInt(object.seconds.toString()) : BigInt(0);
        message.nanos = object.nanos ?? 0;
        return message;
    },
    fromSDK(object) {
        return {
            seconds: object?.seconds,
            nanos: object?.nanos
        };
    },
    toSDK(message) {
        const obj = {};
        obj.seconds = message.seconds;
        obj.nanos = message.nanos;
        return obj;
    },
    fromAmino(object) {
        return fromJsonTimestamp(object);
    },
    toAmino(message) {
        return fromTimestamp(message).toString();
    },
    fromAminoMsg(object) {
        return Timestamp.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Timestamp.decode(message.value);
    },
    toProto(message) {
        return Timestamp.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/google.protobuf.Timestamp",
            value: Timestamp.encode(message).finish()
        };
    }
};
//# sourceMappingURL=timestamp.js.map
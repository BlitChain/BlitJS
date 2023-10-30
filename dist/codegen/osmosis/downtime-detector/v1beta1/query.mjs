//@ts-nocheck
import { downtimeFromJSON, downtimeToJSON } from "./downtime_duration";
import { Duration } from "../../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
function createBaseRecoveredSinceDowntimeOfLengthRequest() {
    return {
        downtime: 0,
        recovery: Duration.fromPartial({})
    };
}
export const RecoveredSinceDowntimeOfLengthRequest = {
    typeUrl: "/osmosis.downtimedetector.v1beta1.RecoveredSinceDowntimeOfLengthRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.downtime !== 0) {
            writer.uint32(8).int32(message.downtime);
        }
        if (message.recovery !== undefined) {
            Duration.encode(message.recovery, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRecoveredSinceDowntimeOfLengthRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.downtime = reader.int32();
                    break;
                case 2:
                    message.recovery = Duration.decode(reader, reader.uint32());
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
            downtime: isSet(object.downtime) ? downtimeFromJSON(object.downtime) : -1,
            recovery: isSet(object.recovery) ? Duration.fromJSON(object.recovery) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.downtime !== undefined && (obj.downtime = downtimeToJSON(message.downtime));
        message.recovery !== undefined && (obj.recovery = message.recovery ? Duration.toJSON(message.recovery) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRecoveredSinceDowntimeOfLengthRequest();
        message.downtime = object.downtime ?? 0;
        message.recovery = object.recovery !== undefined && object.recovery !== null ? Duration.fromPartial(object.recovery) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            downtime: isSet(object.downtime) ? downtimeFromJSON(object.downtime) : -1,
            recovery: object.recovery ? Duration.fromSDK(object.recovery) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.downtime !== undefined && (obj.downtime = downtimeToJSON(message.downtime));
        message.recovery !== undefined && (obj.recovery = message.recovery ? Duration.toSDK(message.recovery) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            downtime: isSet(object.downtime) ? downtimeFromJSON(object.downtime) : -1,
            recovery: object?.recovery ? Duration.fromAmino(object.recovery) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.downtime = message.downtime;
        obj.recovery = message.recovery ? Duration.toAmino(message.recovery) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return RecoveredSinceDowntimeOfLengthRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/downtimedetector/recovered-since-downtime-of-length-request",
            value: RecoveredSinceDowntimeOfLengthRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return RecoveredSinceDowntimeOfLengthRequest.decode(message.value);
    },
    toProto(message) {
        return RecoveredSinceDowntimeOfLengthRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.downtimedetector.v1beta1.RecoveredSinceDowntimeOfLengthRequest",
            value: RecoveredSinceDowntimeOfLengthRequest.encode(message).finish()
        };
    }
};
function createBaseRecoveredSinceDowntimeOfLengthResponse() {
    return {
        succesfully_recovered: false
    };
}
export const RecoveredSinceDowntimeOfLengthResponse = {
    typeUrl: "/osmosis.downtimedetector.v1beta1.RecoveredSinceDowntimeOfLengthResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.succesfully_recovered === true) {
            writer.uint32(8).bool(message.succesfully_recovered);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRecoveredSinceDowntimeOfLengthResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.succesfully_recovered = reader.bool();
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
            succesfully_recovered: isSet(object.succesfully_recovered) ? Boolean(object.succesfully_recovered) : false
        };
    },
    toJSON(message) {
        const obj = {};
        message.succesfully_recovered !== undefined && (obj.succesfully_recovered = message.succesfully_recovered);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRecoveredSinceDowntimeOfLengthResponse();
        message.succesfully_recovered = object.succesfully_recovered ?? false;
        return message;
    },
    fromSDK(object) {
        return {
            succesfully_recovered: object?.succesfully_recovered
        };
    },
    toSDK(message) {
        const obj = {};
        obj.succesfully_recovered = message.succesfully_recovered;
        return obj;
    },
    fromAmino(object) {
        return {
            succesfully_recovered: object.succesfully_recovered
        };
    },
    toAmino(message) {
        const obj = {};
        obj.succesfully_recovered = message.succesfully_recovered;
        return obj;
    },
    fromAminoMsg(object) {
        return RecoveredSinceDowntimeOfLengthResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/downtimedetector/recovered-since-downtime-of-length-response",
            value: RecoveredSinceDowntimeOfLengthResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return RecoveredSinceDowntimeOfLengthResponse.decode(message.value);
    },
    toProto(message) {
        return RecoveredSinceDowntimeOfLengthResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.downtimedetector.v1beta1.RecoveredSinceDowntimeOfLengthResponse",
            value: RecoveredSinceDowntimeOfLengthResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=query.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecoveredSinceDowntimeOfLengthResponse = exports.RecoveredSinceDowntimeOfLengthRequest = void 0;
//@ts-nocheck
const downtime_duration_1 = require("./downtime_duration");
const duration_1 = require("../../../google/protobuf/duration");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
function createBaseRecoveredSinceDowntimeOfLengthRequest() {
    return {
        downtime: 0,
        recovery: duration_1.Duration.fromPartial({})
    };
}
exports.RecoveredSinceDowntimeOfLengthRequest = {
    typeUrl: "/osmosis.downtimedetector.v1beta1.RecoveredSinceDowntimeOfLengthRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.downtime !== 0) {
            writer.uint32(8).int32(message.downtime);
        }
        if (message.recovery !== undefined) {
            duration_1.Duration.encode(message.recovery, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRecoveredSinceDowntimeOfLengthRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.downtime = reader.int32();
                    break;
                case 2:
                    message.recovery = duration_1.Duration.decode(reader, reader.uint32());
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
            downtime: (0, helpers_1.isSet)(object.downtime) ? (0, downtime_duration_1.downtimeFromJSON)(object.downtime) : -1,
            recovery: (0, helpers_1.isSet)(object.recovery) ? duration_1.Duration.fromJSON(object.recovery) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.downtime !== undefined && (obj.downtime = (0, downtime_duration_1.downtimeToJSON)(message.downtime));
        message.recovery !== undefined && (obj.recovery = message.recovery ? duration_1.Duration.toJSON(message.recovery) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRecoveredSinceDowntimeOfLengthRequest();
        message.downtime = object.downtime ?? 0;
        message.recovery = object.recovery !== undefined && object.recovery !== null ? duration_1.Duration.fromPartial(object.recovery) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            downtime: (0, helpers_1.isSet)(object.downtime) ? (0, downtime_duration_1.downtimeFromJSON)(object.downtime) : -1,
            recovery: object.recovery ? duration_1.Duration.fromSDK(object.recovery) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.downtime !== undefined && (obj.downtime = (0, downtime_duration_1.downtimeToJSON)(message.downtime));
        message.recovery !== undefined && (obj.recovery = message.recovery ? duration_1.Duration.toSDK(message.recovery) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            downtime: (0, helpers_1.isSet)(object.downtime) ? (0, downtime_duration_1.downtimeFromJSON)(object.downtime) : -1,
            recovery: object?.recovery ? duration_1.Duration.fromAmino(object.recovery) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.downtime = message.downtime;
        obj.recovery = message.recovery ? duration_1.Duration.toAmino(message.recovery) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.RecoveredSinceDowntimeOfLengthRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/downtimedetector/recovered-since-downtime-of-length-request",
            value: exports.RecoveredSinceDowntimeOfLengthRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.RecoveredSinceDowntimeOfLengthRequest.decode(message.value);
    },
    toProto(message) {
        return exports.RecoveredSinceDowntimeOfLengthRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.downtimedetector.v1beta1.RecoveredSinceDowntimeOfLengthRequest",
            value: exports.RecoveredSinceDowntimeOfLengthRequest.encode(message).finish()
        };
    }
};
function createBaseRecoveredSinceDowntimeOfLengthResponse() {
    return {
        succesfully_recovered: false
    };
}
exports.RecoveredSinceDowntimeOfLengthResponse = {
    typeUrl: "/osmosis.downtimedetector.v1beta1.RecoveredSinceDowntimeOfLengthResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.succesfully_recovered === true) {
            writer.uint32(8).bool(message.succesfully_recovered);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
            succesfully_recovered: (0, helpers_1.isSet)(object.succesfully_recovered) ? Boolean(object.succesfully_recovered) : false
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
        return exports.RecoveredSinceDowntimeOfLengthResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/downtimedetector/recovered-since-downtime-of-length-response",
            value: exports.RecoveredSinceDowntimeOfLengthResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.RecoveredSinceDowntimeOfLengthResponse.decode(message.value);
    },
    toProto(message) {
        return exports.RecoveredSinceDowntimeOfLengthResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.downtimedetector.v1beta1.RecoveredSinceDowntimeOfLengthResponse",
            value: exports.RecoveredSinceDowntimeOfLengthResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=query.js.map
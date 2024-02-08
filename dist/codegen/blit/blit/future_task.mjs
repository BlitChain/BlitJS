//@ts-nocheck
import { Timestamp } from "../../google/protobuf/timestamp";
import { DecCoin } from "../../cosmos/base/v1beta1/coin";
import { isSet, toTimestamp, fromTimestamp, fromJsonTimestamp } from "../../helpers";
import { BinaryReader, BinaryWriter } from "../../binary";
import { GlobalDecoderRegistry } from "../../registry";
export const protobufPackage = "blit.blit";
export var FutureTaskStatus;
(function (FutureTaskStatus) {
    FutureTaskStatus[FutureTaskStatus["NONE"] = 0] = "NONE";
    FutureTaskStatus[FutureTaskStatus["PENDING"] = 1] = "PENDING";
    FutureTaskStatus[FutureTaskStatus["POOL"] = 2] = "POOL";
    FutureTaskStatus[FutureTaskStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(FutureTaskStatus || (FutureTaskStatus = {}));
export const FutureTaskStatusSDKType = FutureTaskStatus;
export const FutureTaskStatusAmino = FutureTaskStatus;
export function futureTaskStatusFromJSON(object) {
    switch (object) {
        case 0:
        case "NONE":
            return FutureTaskStatus.NONE;
        case 1:
        case "PENDING":
            return FutureTaskStatus.PENDING;
        case 2:
        case "POOL":
            return FutureTaskStatus.POOL;
        case -1:
        case "UNRECOGNIZED":
        default:
            return FutureTaskStatus.UNRECOGNIZED;
    }
}
export function futureTaskStatusToJSON(object) {
    switch (object) {
        case FutureTaskStatus.NONE:
            return "NONE";
        case FutureTaskStatus.PENDING:
            return "PENDING";
        case FutureTaskStatus.POOL:
            return "POOL";
        case FutureTaskStatus.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseFutureTask() {
    return {
        index: "",
        scheduled_on: new Date(),
        task_id: BigInt(0),
        status: 0,
        gas_price: undefined
    };
}
export const FutureTask = {
    typeUrl: "/blit.blit.FutureTask",
    is(o) {
        return o && (o.$typeUrl === FutureTask.typeUrl || typeof o.index === "string" && Timestamp.is(o.scheduled_on) && typeof o.task_id === "bigint" && isSet(o.status));
    },
    isSDK(o) {
        return o && (o.$typeUrl === FutureTask.typeUrl || typeof o.index === "string" && Timestamp.isSDK(o.scheduled_on) && typeof o.task_id === "bigint" && isSet(o.status));
    },
    isAmino(o) {
        return o && (o.$typeUrl === FutureTask.typeUrl || typeof o.index === "string" && Timestamp.isAmino(o.scheduled_on) && typeof o.task_id === "bigint" && isSet(o.status));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.index !== "") {
            writer.uint32(10).string(message.index);
        }
        if (message.scheduled_on !== undefined) {
            Timestamp.encode(toTimestamp(message.scheduled_on), writer.uint32(18).fork()).ldelim();
        }
        if (message.task_id !== BigInt(0)) {
            writer.uint32(24).uint64(message.task_id);
        }
        if (message.status !== 0) {
            writer.uint32(32).int32(message.status);
        }
        if (message.gas_price !== undefined) {
            DecCoin.encode(message.gas_price, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFutureTask();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = reader.string();
                    break;
                case 2:
                    message.scheduled_on = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.task_id = reader.uint64();
                    break;
                case 4:
                    message.status = reader.int32();
                    break;
                case 5:
                    message.gas_price = DecCoin.decode(reader, reader.uint32());
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
            index: isSet(object.index) ? String(object.index) : "",
            scheduled_on: isSet(object.scheduled_on) ? fromJsonTimestamp(object.scheduled_on) : undefined,
            task_id: isSet(object.task_id) ? BigInt(object.task_id.toString()) : BigInt(0),
            status: isSet(object.status) ? futureTaskStatusFromJSON(object.status) : -1,
            gas_price: isSet(object.gas_price) ? DecCoin.fromJSON(object.gas_price) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = message.index);
        message.scheduled_on !== undefined && (obj.scheduled_on = message.scheduled_on.toISOString());
        message.task_id !== undefined && (obj.task_id = (message.task_id || BigInt(0)).toString());
        message.status !== undefined && (obj.status = futureTaskStatusToJSON(message.status));
        message.gas_price !== undefined && (obj.gas_price = message.gas_price ? DecCoin.toJSON(message.gas_price) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseFutureTask();
        message.index = object.index ?? "";
        message.scheduled_on = object.scheduled_on ?? undefined;
        message.task_id = object.task_id !== undefined && object.task_id !== null ? BigInt(object.task_id.toString()) : BigInt(0);
        message.status = object.status ?? 0;
        message.gas_price = object.gas_price !== undefined && object.gas_price !== null ? DecCoin.fromPartial(object.gas_price) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseFutureTask();
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        if (object.scheduled_on !== undefined && object.scheduled_on !== null) {
            message.scheduled_on = fromTimestamp(Timestamp.fromAmino(object.scheduled_on));
        }
        if (object.task_id !== undefined && object.task_id !== null) {
            message.task_id = BigInt(object.task_id);
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = futureTaskStatusFromJSON(object.status);
        }
        if (object.gas_price !== undefined && object.gas_price !== null) {
            message.gas_price = DecCoin.fromAmino(object.gas_price);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.index = message.index;
        obj.scheduled_on = message.scheduled_on ? Timestamp.toAmino(toTimestamp(message.scheduled_on)) : undefined;
        obj.task_id = message.task_id ? message.task_id.toString() : undefined;
        obj.status = message.status;
        obj.gas_price = message.gas_price ? DecCoin.toAmino(message.gas_price) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return FutureTask.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return FutureTask.decode(message.value);
    },
    toProto(message) {
        return FutureTask.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.blit.FutureTask",
            value: FutureTask.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(FutureTask.typeUrl, FutureTask);
//# sourceMappingURL=future_task.js.map
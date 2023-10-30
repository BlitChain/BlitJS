"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwapRecord = void 0;
//@ts-nocheck
const timestamp_1 = require("../../../google/protobuf/timestamp");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
const math_1 = require("@cosmjs/math");
function createBaseTwapRecord() {
    return {
        pool_id: BigInt(0),
        asset0_denom: "",
        asset1_denom: "",
        height: BigInt(0),
        time: new Date(),
        p0_last_spot_price: "",
        p1_last_spot_price: "",
        p0_arithmetic_twap_accumulator: "",
        p1_arithmetic_twap_accumulator: "",
        geometric_twap_accumulator: "",
        last_error_time: new Date()
    };
}
exports.TwapRecord = {
    typeUrl: "/osmosis.twap.v1beta1.TwapRecord",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.pool_id !== BigInt(0)) {
            writer.uint32(8).uint64(message.pool_id);
        }
        if (message.asset0_denom !== "") {
            writer.uint32(18).string(message.asset0_denom);
        }
        if (message.asset1_denom !== "") {
            writer.uint32(26).string(message.asset1_denom);
        }
        if (message.height !== BigInt(0)) {
            writer.uint32(32).int64(message.height);
        }
        if (message.time !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.time), writer.uint32(42).fork()).ldelim();
        }
        if (message.p0_last_spot_price !== "") {
            writer.uint32(50).string(math_1.Decimal.fromUserInput(message.p0_last_spot_price, 18).atomics);
        }
        if (message.p1_last_spot_price !== "") {
            writer.uint32(58).string(math_1.Decimal.fromUserInput(message.p1_last_spot_price, 18).atomics);
        }
        if (message.p0_arithmetic_twap_accumulator !== "") {
            writer.uint32(66).string(math_1.Decimal.fromUserInput(message.p0_arithmetic_twap_accumulator, 18).atomics);
        }
        if (message.p1_arithmetic_twap_accumulator !== "") {
            writer.uint32(74).string(math_1.Decimal.fromUserInput(message.p1_arithmetic_twap_accumulator, 18).atomics);
        }
        if (message.geometric_twap_accumulator !== "") {
            writer.uint32(82).string(math_1.Decimal.fromUserInput(message.geometric_twap_accumulator, 18).atomics);
        }
        if (message.last_error_time !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.last_error_time), writer.uint32(90).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTwapRecord();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pool_id = reader.uint64();
                    break;
                case 2:
                    message.asset0_denom = reader.string();
                    break;
                case 3:
                    message.asset1_denom = reader.string();
                    break;
                case 4:
                    message.height = reader.int64();
                    break;
                case 5:
                    message.time = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.p0_last_spot_price = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 7:
                    message.p1_last_spot_price = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 8:
                    message.p0_arithmetic_twap_accumulator = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 9:
                    message.p1_arithmetic_twap_accumulator = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 10:
                    message.geometric_twap_accumulator = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 11:
                    message.last_error_time = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
            pool_id: (0, helpers_1.isSet)(object.pool_id) ? BigInt(object.pool_id.toString()) : BigInt(0),
            asset0_denom: (0, helpers_1.isSet)(object.asset0_denom) ? String(object.asset0_denom) : "",
            asset1_denom: (0, helpers_1.isSet)(object.asset1_denom) ? String(object.asset1_denom) : "",
            height: (0, helpers_1.isSet)(object.height) ? BigInt(object.height.toString()) : BigInt(0),
            time: (0, helpers_1.isSet)(object.time) ? (0, helpers_1.fromJsonTimestamp)(object.time) : undefined,
            p0_last_spot_price: (0, helpers_1.isSet)(object.p0_last_spot_price) ? String(object.p0_last_spot_price) : "",
            p1_last_spot_price: (0, helpers_1.isSet)(object.p1_last_spot_price) ? String(object.p1_last_spot_price) : "",
            p0_arithmetic_twap_accumulator: (0, helpers_1.isSet)(object.p0_arithmetic_twap_accumulator) ? String(object.p0_arithmetic_twap_accumulator) : "",
            p1_arithmetic_twap_accumulator: (0, helpers_1.isSet)(object.p1_arithmetic_twap_accumulator) ? String(object.p1_arithmetic_twap_accumulator) : "",
            geometric_twap_accumulator: (0, helpers_1.isSet)(object.geometric_twap_accumulator) ? String(object.geometric_twap_accumulator) : "",
            last_error_time: (0, helpers_1.isSet)(object.last_error_time) ? (0, helpers_1.fromJsonTimestamp)(object.last_error_time) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.pool_id !== undefined && (obj.pool_id = (message.pool_id || BigInt(0)).toString());
        message.asset0_denom !== undefined && (obj.asset0_denom = message.asset0_denom);
        message.asset1_denom !== undefined && (obj.asset1_denom = message.asset1_denom);
        message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
        message.time !== undefined && (obj.time = message.time.toISOString());
        message.p0_last_spot_price !== undefined && (obj.p0_last_spot_price = message.p0_last_spot_price);
        message.p1_last_spot_price !== undefined && (obj.p1_last_spot_price = message.p1_last_spot_price);
        message.p0_arithmetic_twap_accumulator !== undefined && (obj.p0_arithmetic_twap_accumulator = message.p0_arithmetic_twap_accumulator);
        message.p1_arithmetic_twap_accumulator !== undefined && (obj.p1_arithmetic_twap_accumulator = message.p1_arithmetic_twap_accumulator);
        message.geometric_twap_accumulator !== undefined && (obj.geometric_twap_accumulator = message.geometric_twap_accumulator);
        message.last_error_time !== undefined && (obj.last_error_time = message.last_error_time.toISOString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTwapRecord();
        message.pool_id = object.pool_id !== undefined && object.pool_id !== null ? BigInt(object.pool_id.toString()) : BigInt(0);
        message.asset0_denom = object.asset0_denom ?? "";
        message.asset1_denom = object.asset1_denom ?? "";
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        message.time = object.time ?? undefined;
        message.p0_last_spot_price = object.p0_last_spot_price ?? "";
        message.p1_last_spot_price = object.p1_last_spot_price ?? "";
        message.p0_arithmetic_twap_accumulator = object.p0_arithmetic_twap_accumulator ?? "";
        message.p1_arithmetic_twap_accumulator = object.p1_arithmetic_twap_accumulator ?? "";
        message.geometric_twap_accumulator = object.geometric_twap_accumulator ?? "";
        message.last_error_time = object.last_error_time ?? undefined;
        return message;
    },
    fromSDK(object) {
        return {
            pool_id: object?.pool_id,
            asset0_denom: object?.asset0_denom,
            asset1_denom: object?.asset1_denom,
            height: object?.height,
            time: object.time ? timestamp_1.Timestamp.fromSDK(object.time) : undefined,
            p0_last_spot_price: object?.p0_last_spot_price,
            p1_last_spot_price: object?.p1_last_spot_price,
            p0_arithmetic_twap_accumulator: object?.p0_arithmetic_twap_accumulator,
            p1_arithmetic_twap_accumulator: object?.p1_arithmetic_twap_accumulator,
            geometric_twap_accumulator: object?.geometric_twap_accumulator,
            last_error_time: object.last_error_time ? timestamp_1.Timestamp.fromSDK(object.last_error_time) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.pool_id = message.pool_id;
        obj.asset0_denom = message.asset0_denom;
        obj.asset1_denom = message.asset1_denom;
        obj.height = message.height;
        message.time !== undefined && (obj.time = message.time ? timestamp_1.Timestamp.toSDK(message.time) : undefined);
        obj.p0_last_spot_price = message.p0_last_spot_price;
        obj.p1_last_spot_price = message.p1_last_spot_price;
        obj.p0_arithmetic_twap_accumulator = message.p0_arithmetic_twap_accumulator;
        obj.p1_arithmetic_twap_accumulator = message.p1_arithmetic_twap_accumulator;
        obj.geometric_twap_accumulator = message.geometric_twap_accumulator;
        message.last_error_time !== undefined && (obj.last_error_time = message.last_error_time ? timestamp_1.Timestamp.toSDK(message.last_error_time) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            pool_id: BigInt(object.pool_id),
            asset0_denom: object.asset0_denom,
            asset1_denom: object.asset1_denom,
            height: BigInt(object.height),
            time: object.time,
            p0_last_spot_price: object.p0_last_spot_price,
            p1_last_spot_price: object.p1_last_spot_price,
            p0_arithmetic_twap_accumulator: object.p0_arithmetic_twap_accumulator,
            p1_arithmetic_twap_accumulator: object.p1_arithmetic_twap_accumulator,
            geometric_twap_accumulator: object.geometric_twap_accumulator,
            last_error_time: object.last_error_time
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id = message.pool_id ? message.pool_id.toString() : undefined;
        obj.asset0_denom = message.asset0_denom;
        obj.asset1_denom = message.asset1_denom;
        obj.height = message.height ? message.height.toString() : undefined;
        obj.time = message.time;
        obj.p0_last_spot_price = message.p0_last_spot_price;
        obj.p1_last_spot_price = message.p1_last_spot_price;
        obj.p0_arithmetic_twap_accumulator = message.p0_arithmetic_twap_accumulator;
        obj.p1_arithmetic_twap_accumulator = message.p1_arithmetic_twap_accumulator;
        obj.geometric_twap_accumulator = message.geometric_twap_accumulator;
        obj.last_error_time = message.last_error_time;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.TwapRecord.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/twap/twap-record",
            value: exports.TwapRecord.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.TwapRecord.decode(message.value);
    },
    toProto(message) {
        return exports.TwapRecord.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.twap.v1beta1.TwapRecord",
            value: exports.TwapRecord.encode(message).finish()
        };
    }
};
//# sourceMappingURL=twap_record.js.map
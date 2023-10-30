"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParamsResponse = exports.ParamsRequest = exports.ArithmeticTwapToNowResponse = exports.ArithmeticTwapToNowRequest = exports.ArithmeticTwapResponse = exports.ArithmeticTwapRequest = void 0;
//@ts-nocheck
const timestamp_1 = require("../../../google/protobuf/timestamp");
const genesis_1 = require("./genesis");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
const math_1 = require("@cosmjs/math");
function createBaseArithmeticTwapRequest() {
    return {
        pool_id: BigInt(0),
        base_asset: "",
        quote_asset: "",
        start_time: new Date(),
        end_time: undefined
    };
}
exports.ArithmeticTwapRequest = {
    typeUrl: "/osmosis.twap.v1beta1.ArithmeticTwapRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.pool_id !== BigInt(0)) {
            writer.uint32(8).uint64(message.pool_id);
        }
        if (message.base_asset !== "") {
            writer.uint32(18).string(message.base_asset);
        }
        if (message.quote_asset !== "") {
            writer.uint32(26).string(message.quote_asset);
        }
        if (message.start_time !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.start_time), writer.uint32(34).fork()).ldelim();
        }
        if (message.end_time !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.end_time), writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseArithmeticTwapRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pool_id = reader.uint64();
                    break;
                case 2:
                    message.base_asset = reader.string();
                    break;
                case 3:
                    message.quote_asset = reader.string();
                    break;
                case 4:
                    message.start_time = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.end_time = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
            base_asset: (0, helpers_1.isSet)(object.base_asset) ? String(object.base_asset) : "",
            quote_asset: (0, helpers_1.isSet)(object.quote_asset) ? String(object.quote_asset) : "",
            start_time: (0, helpers_1.isSet)(object.start_time) ? (0, helpers_1.fromJsonTimestamp)(object.start_time) : undefined,
            end_time: (0, helpers_1.isSet)(object.end_time) ? (0, helpers_1.fromJsonTimestamp)(object.end_time) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.pool_id !== undefined && (obj.pool_id = (message.pool_id || BigInt(0)).toString());
        message.base_asset !== undefined && (obj.base_asset = message.base_asset);
        message.quote_asset !== undefined && (obj.quote_asset = message.quote_asset);
        message.start_time !== undefined && (obj.start_time = message.start_time.toISOString());
        message.end_time !== undefined && (obj.end_time = message.end_time.toISOString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseArithmeticTwapRequest();
        message.pool_id = object.pool_id !== undefined && object.pool_id !== null ? BigInt(object.pool_id.toString()) : BigInt(0);
        message.base_asset = object.base_asset ?? "";
        message.quote_asset = object.quote_asset ?? "";
        message.start_time = object.start_time ?? undefined;
        message.end_time = object.end_time ?? undefined;
        return message;
    },
    fromSDK(object) {
        return {
            pool_id: object?.pool_id,
            base_asset: object?.base_asset,
            quote_asset: object?.quote_asset,
            start_time: object.start_time ? timestamp_1.Timestamp.fromSDK(object.start_time) : undefined,
            end_time: object.end_time ? timestamp_1.Timestamp.fromSDK(object.end_time) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.pool_id = message.pool_id;
        obj.base_asset = message.base_asset;
        obj.quote_asset = message.quote_asset;
        message.start_time !== undefined && (obj.start_time = message.start_time ? timestamp_1.Timestamp.toSDK(message.start_time) : undefined);
        message.end_time !== undefined && (obj.end_time = message.end_time ? timestamp_1.Timestamp.toSDK(message.end_time) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            pool_id: BigInt(object.pool_id),
            base_asset: object.base_asset,
            quote_asset: object.quote_asset,
            start_time: object.start_time,
            end_time: object?.end_time
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id = message.pool_id ? message.pool_id.toString() : undefined;
        obj.base_asset = message.base_asset;
        obj.quote_asset = message.quote_asset;
        obj.start_time = message.start_time;
        obj.end_time = message.end_time;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ArithmeticTwapRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/twap/arithmetic-twap-request",
            value: exports.ArithmeticTwapRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ArithmeticTwapRequest.decode(message.value);
    },
    toProto(message) {
        return exports.ArithmeticTwapRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.twap.v1beta1.ArithmeticTwapRequest",
            value: exports.ArithmeticTwapRequest.encode(message).finish()
        };
    }
};
function createBaseArithmeticTwapResponse() {
    return {
        arithmetic_twap: ""
    };
}
exports.ArithmeticTwapResponse = {
    typeUrl: "/osmosis.twap.v1beta1.ArithmeticTwapResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.arithmetic_twap !== "") {
            writer.uint32(10).string(math_1.Decimal.fromUserInput(message.arithmetic_twap, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseArithmeticTwapResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.arithmetic_twap = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
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
            arithmetic_twap: (0, helpers_1.isSet)(object.arithmetic_twap) ? String(object.arithmetic_twap) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.arithmetic_twap !== undefined && (obj.arithmetic_twap = message.arithmetic_twap);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseArithmeticTwapResponse();
        message.arithmetic_twap = object.arithmetic_twap ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            arithmetic_twap: object?.arithmetic_twap
        };
    },
    toSDK(message) {
        const obj = {};
        obj.arithmetic_twap = message.arithmetic_twap;
        return obj;
    },
    fromAmino(object) {
        return {
            arithmetic_twap: object.arithmetic_twap
        };
    },
    toAmino(message) {
        const obj = {};
        obj.arithmetic_twap = message.arithmetic_twap;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ArithmeticTwapResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/twap/arithmetic-twap-response",
            value: exports.ArithmeticTwapResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ArithmeticTwapResponse.decode(message.value);
    },
    toProto(message) {
        return exports.ArithmeticTwapResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.twap.v1beta1.ArithmeticTwapResponse",
            value: exports.ArithmeticTwapResponse.encode(message).finish()
        };
    }
};
function createBaseArithmeticTwapToNowRequest() {
    return {
        pool_id: BigInt(0),
        base_asset: "",
        quote_asset: "",
        start_time: new Date()
    };
}
exports.ArithmeticTwapToNowRequest = {
    typeUrl: "/osmosis.twap.v1beta1.ArithmeticTwapToNowRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.pool_id !== BigInt(0)) {
            writer.uint32(8).uint64(message.pool_id);
        }
        if (message.base_asset !== "") {
            writer.uint32(18).string(message.base_asset);
        }
        if (message.quote_asset !== "") {
            writer.uint32(26).string(message.quote_asset);
        }
        if (message.start_time !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.start_time), writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseArithmeticTwapToNowRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pool_id = reader.uint64();
                    break;
                case 2:
                    message.base_asset = reader.string();
                    break;
                case 3:
                    message.quote_asset = reader.string();
                    break;
                case 4:
                    message.start_time = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
            base_asset: (0, helpers_1.isSet)(object.base_asset) ? String(object.base_asset) : "",
            quote_asset: (0, helpers_1.isSet)(object.quote_asset) ? String(object.quote_asset) : "",
            start_time: (0, helpers_1.isSet)(object.start_time) ? (0, helpers_1.fromJsonTimestamp)(object.start_time) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.pool_id !== undefined && (obj.pool_id = (message.pool_id || BigInt(0)).toString());
        message.base_asset !== undefined && (obj.base_asset = message.base_asset);
        message.quote_asset !== undefined && (obj.quote_asset = message.quote_asset);
        message.start_time !== undefined && (obj.start_time = message.start_time.toISOString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseArithmeticTwapToNowRequest();
        message.pool_id = object.pool_id !== undefined && object.pool_id !== null ? BigInt(object.pool_id.toString()) : BigInt(0);
        message.base_asset = object.base_asset ?? "";
        message.quote_asset = object.quote_asset ?? "";
        message.start_time = object.start_time ?? undefined;
        return message;
    },
    fromSDK(object) {
        return {
            pool_id: object?.pool_id,
            base_asset: object?.base_asset,
            quote_asset: object?.quote_asset,
            start_time: object.start_time ? timestamp_1.Timestamp.fromSDK(object.start_time) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.pool_id = message.pool_id;
        obj.base_asset = message.base_asset;
        obj.quote_asset = message.quote_asset;
        message.start_time !== undefined && (obj.start_time = message.start_time ? timestamp_1.Timestamp.toSDK(message.start_time) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            pool_id: BigInt(object.pool_id),
            base_asset: object.base_asset,
            quote_asset: object.quote_asset,
            start_time: object.start_time
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id = message.pool_id ? message.pool_id.toString() : undefined;
        obj.base_asset = message.base_asset;
        obj.quote_asset = message.quote_asset;
        obj.start_time = message.start_time;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ArithmeticTwapToNowRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/twap/arithmetic-twap-to-now-request",
            value: exports.ArithmeticTwapToNowRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ArithmeticTwapToNowRequest.decode(message.value);
    },
    toProto(message) {
        return exports.ArithmeticTwapToNowRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.twap.v1beta1.ArithmeticTwapToNowRequest",
            value: exports.ArithmeticTwapToNowRequest.encode(message).finish()
        };
    }
};
function createBaseArithmeticTwapToNowResponse() {
    return {
        arithmetic_twap: ""
    };
}
exports.ArithmeticTwapToNowResponse = {
    typeUrl: "/osmosis.twap.v1beta1.ArithmeticTwapToNowResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.arithmetic_twap !== "") {
            writer.uint32(10).string(math_1.Decimal.fromUserInput(message.arithmetic_twap, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseArithmeticTwapToNowResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.arithmetic_twap = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
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
            arithmetic_twap: (0, helpers_1.isSet)(object.arithmetic_twap) ? String(object.arithmetic_twap) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.arithmetic_twap !== undefined && (obj.arithmetic_twap = message.arithmetic_twap);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseArithmeticTwapToNowResponse();
        message.arithmetic_twap = object.arithmetic_twap ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            arithmetic_twap: object?.arithmetic_twap
        };
    },
    toSDK(message) {
        const obj = {};
        obj.arithmetic_twap = message.arithmetic_twap;
        return obj;
    },
    fromAmino(object) {
        return {
            arithmetic_twap: object.arithmetic_twap
        };
    },
    toAmino(message) {
        const obj = {};
        obj.arithmetic_twap = message.arithmetic_twap;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ArithmeticTwapToNowResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/twap/arithmetic-twap-to-now-response",
            value: exports.ArithmeticTwapToNowResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ArithmeticTwapToNowResponse.decode(message.value);
    },
    toProto(message) {
        return exports.ArithmeticTwapToNowResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.twap.v1beta1.ArithmeticTwapToNowResponse",
            value: exports.ArithmeticTwapToNowResponse.encode(message).finish()
        };
    }
};
function createBaseParamsRequest() {
    return {};
}
exports.ParamsRequest = {
    typeUrl: "/osmosis.twap.v1beta1.ParamsRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParamsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseParamsRequest();
        return message;
    },
    fromSDK(_) {
        return {};
    },
    toSDK(_) {
        const obj = {};
        return obj;
    },
    fromAmino(_) {
        return {};
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ParamsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/twap/params-request",
            value: exports.ParamsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ParamsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.ParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.twap.v1beta1.ParamsRequest",
            value: exports.ParamsRequest.encode(message).finish()
        };
    }
};
function createBaseParamsResponse() {
    return {
        params: genesis_1.Params.fromPartial({})
    };
}
exports.ParamsResponse = {
    typeUrl: "/osmosis.twap.v1beta1.ParamsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            genesis_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = genesis_1.Params.decode(reader, reader.uint32());
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
            params: (0, helpers_1.isSet)(object.params) ? genesis_1.Params.fromJSON(object.params) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? genesis_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParamsResponse();
        message.params = object.params !== undefined && object.params !== null ? genesis_1.Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            params: object.params ? genesis_1.Params.fromSDK(object.params) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? genesis_1.Params.toSDK(message.params) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            params: object?.params ? genesis_1.Params.fromAmino(object.params) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? genesis_1.Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ParamsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/twap/params-response",
            value: exports.ParamsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ParamsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.ParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.twap.v1beta1.ParamsResponse",
            value: exports.ParamsResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=query.js.map
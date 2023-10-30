//@ts-nocheck
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Params } from "./genesis";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { toTimestamp, fromTimestamp, isSet, fromJsonTimestamp } from "../../../helpers";
import { Decimal } from "@cosmjs/math";
function createBaseArithmeticTwapRequest() {
    return {
        pool_id: BigInt(0),
        base_asset: "",
        quote_asset: "",
        start_time: new Date(),
        end_time: undefined
    };
}
export const ArithmeticTwapRequest = {
    typeUrl: "/osmosis.twap.v1beta1.ArithmeticTwapRequest",
    encode(message, writer = BinaryWriter.create()) {
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
            Timestamp.encode(toTimestamp(message.start_time), writer.uint32(34).fork()).ldelim();
        }
        if (message.end_time !== undefined) {
            Timestamp.encode(toTimestamp(message.end_time), writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
                    message.start_time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.end_time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
            pool_id: isSet(object.pool_id) ? BigInt(object.pool_id.toString()) : BigInt(0),
            base_asset: isSet(object.base_asset) ? String(object.base_asset) : "",
            quote_asset: isSet(object.quote_asset) ? String(object.quote_asset) : "",
            start_time: isSet(object.start_time) ? fromJsonTimestamp(object.start_time) : undefined,
            end_time: isSet(object.end_time) ? fromJsonTimestamp(object.end_time) : undefined
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
            start_time: object.start_time ? Timestamp.fromSDK(object.start_time) : undefined,
            end_time: object.end_time ? Timestamp.fromSDK(object.end_time) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.pool_id = message.pool_id;
        obj.base_asset = message.base_asset;
        obj.quote_asset = message.quote_asset;
        message.start_time !== undefined && (obj.start_time = message.start_time ? Timestamp.toSDK(message.start_time) : undefined);
        message.end_time !== undefined && (obj.end_time = message.end_time ? Timestamp.toSDK(message.end_time) : undefined);
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
        return ArithmeticTwapRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/twap/arithmetic-twap-request",
            value: ArithmeticTwapRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ArithmeticTwapRequest.decode(message.value);
    },
    toProto(message) {
        return ArithmeticTwapRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.twap.v1beta1.ArithmeticTwapRequest",
            value: ArithmeticTwapRequest.encode(message).finish()
        };
    }
};
function createBaseArithmeticTwapResponse() {
    return {
        arithmetic_twap: ""
    };
}
export const ArithmeticTwapResponse = {
    typeUrl: "/osmosis.twap.v1beta1.ArithmeticTwapResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.arithmetic_twap !== "") {
            writer.uint32(10).string(Decimal.fromUserInput(message.arithmetic_twap, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseArithmeticTwapResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.arithmetic_twap = Decimal.fromAtomics(reader.string(), 18).toString();
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
            arithmetic_twap: isSet(object.arithmetic_twap) ? String(object.arithmetic_twap) : ""
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
        return ArithmeticTwapResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/twap/arithmetic-twap-response",
            value: ArithmeticTwapResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ArithmeticTwapResponse.decode(message.value);
    },
    toProto(message) {
        return ArithmeticTwapResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.twap.v1beta1.ArithmeticTwapResponse",
            value: ArithmeticTwapResponse.encode(message).finish()
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
export const ArithmeticTwapToNowRequest = {
    typeUrl: "/osmosis.twap.v1beta1.ArithmeticTwapToNowRequest",
    encode(message, writer = BinaryWriter.create()) {
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
            Timestamp.encode(toTimestamp(message.start_time), writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
                    message.start_time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
            pool_id: isSet(object.pool_id) ? BigInt(object.pool_id.toString()) : BigInt(0),
            base_asset: isSet(object.base_asset) ? String(object.base_asset) : "",
            quote_asset: isSet(object.quote_asset) ? String(object.quote_asset) : "",
            start_time: isSet(object.start_time) ? fromJsonTimestamp(object.start_time) : undefined
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
            start_time: object.start_time ? Timestamp.fromSDK(object.start_time) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.pool_id = message.pool_id;
        obj.base_asset = message.base_asset;
        obj.quote_asset = message.quote_asset;
        message.start_time !== undefined && (obj.start_time = message.start_time ? Timestamp.toSDK(message.start_time) : undefined);
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
        return ArithmeticTwapToNowRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/twap/arithmetic-twap-to-now-request",
            value: ArithmeticTwapToNowRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ArithmeticTwapToNowRequest.decode(message.value);
    },
    toProto(message) {
        return ArithmeticTwapToNowRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.twap.v1beta1.ArithmeticTwapToNowRequest",
            value: ArithmeticTwapToNowRequest.encode(message).finish()
        };
    }
};
function createBaseArithmeticTwapToNowResponse() {
    return {
        arithmetic_twap: ""
    };
}
export const ArithmeticTwapToNowResponse = {
    typeUrl: "/osmosis.twap.v1beta1.ArithmeticTwapToNowResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.arithmetic_twap !== "") {
            writer.uint32(10).string(Decimal.fromUserInput(message.arithmetic_twap, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseArithmeticTwapToNowResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.arithmetic_twap = Decimal.fromAtomics(reader.string(), 18).toString();
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
            arithmetic_twap: isSet(object.arithmetic_twap) ? String(object.arithmetic_twap) : ""
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
        return ArithmeticTwapToNowResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/twap/arithmetic-twap-to-now-response",
            value: ArithmeticTwapToNowResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ArithmeticTwapToNowResponse.decode(message.value);
    },
    toProto(message) {
        return ArithmeticTwapToNowResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.twap.v1beta1.ArithmeticTwapToNowResponse",
            value: ArithmeticTwapToNowResponse.encode(message).finish()
        };
    }
};
function createBaseParamsRequest() {
    return {};
}
export const ParamsRequest = {
    typeUrl: "/osmosis.twap.v1beta1.ParamsRequest",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return ParamsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/twap/params-request",
            value: ParamsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ParamsRequest.decode(message.value);
    },
    toProto(message) {
        return ParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.twap.v1beta1.ParamsRequest",
            value: ParamsRequest.encode(message).finish()
        };
    }
};
function createBaseParamsResponse() {
    return {
        params: Params.fromPartial({})
    };
}
export const ParamsResponse = {
    typeUrl: "/osmosis.twap.v1beta1.ParamsResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = Params.decode(reader, reader.uint32());
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
            params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParamsResponse();
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            params: object.params ? Params.fromSDK(object.params) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            params: object?.params ? Params.fromAmino(object.params) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ParamsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/twap/params-response",
            value: ParamsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ParamsResponse.decode(message.value);
    },
    toProto(message) {
        return ParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.twap.v1beta1.ParamsResponse",
            value: ParamsResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=query.js.map
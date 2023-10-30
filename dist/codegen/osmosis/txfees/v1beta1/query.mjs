//@ts-nocheck
import { FeeToken } from "./feetoken";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { Decimal } from "@cosmjs/math";
function createBaseQueryFeeTokensRequest() {
    return {};
}
export const QueryFeeTokensRequest = {
    typeUrl: "/osmosis.txfees.v1beta1.QueryFeeTokensRequest",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryFeeTokensRequest();
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
        const message = createBaseQueryFeeTokensRequest();
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
        return QueryFeeTokensRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/txfees/query-fee-tokens-request",
            value: QueryFeeTokensRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryFeeTokensRequest.decode(message.value);
    },
    toProto(message) {
        return QueryFeeTokensRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.txfees.v1beta1.QueryFeeTokensRequest",
            value: QueryFeeTokensRequest.encode(message).finish()
        };
    }
};
function createBaseQueryFeeTokensResponse() {
    return {
        fee_tokens: []
    };
}
export const QueryFeeTokensResponse = {
    typeUrl: "/osmosis.txfees.v1beta1.QueryFeeTokensResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.fee_tokens) {
            FeeToken.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryFeeTokensResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fee_tokens.push(FeeToken.decode(reader, reader.uint32()));
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
            fee_tokens: Array.isArray(object?.fee_tokens) ? object.fee_tokens.map((e) => FeeToken.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.fee_tokens) {
            obj.fee_tokens = message.fee_tokens.map(e => e ? FeeToken.toJSON(e) : undefined);
        }
        else {
            obj.fee_tokens = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryFeeTokensResponse();
        message.fee_tokens = object.fee_tokens?.map(e => FeeToken.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            fee_tokens: Array.isArray(object?.fee_tokens) ? object.fee_tokens.map((e) => FeeToken.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.fee_tokens) {
            obj.fee_tokens = message.fee_tokens.map(e => e ? FeeToken.toSDK(e) : undefined);
        }
        else {
            obj.fee_tokens = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            fee_tokens: Array.isArray(object?.fee_tokens) ? object.fee_tokens.map((e) => FeeToken.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.fee_tokens) {
            obj.fee_tokens = message.fee_tokens.map(e => e ? FeeToken.toAmino(e) : undefined);
        }
        else {
            obj.fee_tokens = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryFeeTokensResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/txfees/query-fee-tokens-response",
            value: QueryFeeTokensResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryFeeTokensResponse.decode(message.value);
    },
    toProto(message) {
        return QueryFeeTokensResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.txfees.v1beta1.QueryFeeTokensResponse",
            value: QueryFeeTokensResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDenomSpotPriceRequest() {
    return {
        denom: ""
    };
}
export const QueryDenomSpotPriceRequest = {
    typeUrl: "/osmosis.txfees.v1beta1.QueryDenomSpotPriceRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomSpotPriceRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
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
            denom: isSet(object.denom) ? String(object.denom) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryDenomSpotPriceRequest();
        message.denom = object.denom ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            denom: object?.denom
        };
    },
    toSDK(message) {
        const obj = {};
        obj.denom = message.denom;
        return obj;
    },
    fromAmino(object) {
        return {
            denom: object.denom
        };
    },
    toAmino(message) {
        const obj = {};
        obj.denom = message.denom;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDenomSpotPriceRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/txfees/query-denom-spot-price-request",
            value: QueryDenomSpotPriceRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryDenomSpotPriceRequest.decode(message.value);
    },
    toProto(message) {
        return QueryDenomSpotPriceRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.txfees.v1beta1.QueryDenomSpotPriceRequest",
            value: QueryDenomSpotPriceRequest.encode(message).finish()
        };
    }
};
function createBaseQueryDenomSpotPriceResponse() {
    return {
        poolID: BigInt(0),
        spot_price: ""
    };
}
export const QueryDenomSpotPriceResponse = {
    typeUrl: "/osmosis.txfees.v1beta1.QueryDenomSpotPriceResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.poolID !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolID);
        }
        if (message.spot_price !== "") {
            writer.uint32(18).string(Decimal.fromUserInput(message.spot_price, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomSpotPriceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolID = reader.uint64();
                    break;
                case 2:
                    message.spot_price = Decimal.fromAtomics(reader.string(), 18).toString();
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
            poolID: isSet(object.poolID) ? BigInt(object.poolID.toString()) : BigInt(0),
            spot_price: isSet(object.spot_price) ? String(object.spot_price) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.poolID !== undefined && (obj.poolID = (message.poolID || BigInt(0)).toString());
        message.spot_price !== undefined && (obj.spot_price = message.spot_price);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryDenomSpotPriceResponse();
        message.poolID = object.poolID !== undefined && object.poolID !== null ? BigInt(object.poolID.toString()) : BigInt(0);
        message.spot_price = object.spot_price ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            poolID: object?.poolID,
            spot_price: object?.spot_price
        };
    },
    toSDK(message) {
        const obj = {};
        obj.poolID = message.poolID;
        obj.spot_price = message.spot_price;
        return obj;
    },
    fromAmino(object) {
        return {
            poolID: BigInt(object.poolID),
            spot_price: object.spot_price
        };
    },
    toAmino(message) {
        const obj = {};
        obj.poolID = message.poolID ? message.poolID.toString() : undefined;
        obj.spot_price = message.spot_price;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDenomSpotPriceResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/txfees/query-denom-spot-price-response",
            value: QueryDenomSpotPriceResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryDenomSpotPriceResponse.decode(message.value);
    },
    toProto(message) {
        return QueryDenomSpotPriceResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.txfees.v1beta1.QueryDenomSpotPriceResponse",
            value: QueryDenomSpotPriceResponse.encode(message).finish()
        };
    }
};
function createBaseQueryDenomPoolIdRequest() {
    return {
        denom: ""
    };
}
export const QueryDenomPoolIdRequest = {
    typeUrl: "/osmosis.txfees.v1beta1.QueryDenomPoolIdRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomPoolIdRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
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
            denom: isSet(object.denom) ? String(object.denom) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryDenomPoolIdRequest();
        message.denom = object.denom ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            denom: object?.denom
        };
    },
    toSDK(message) {
        const obj = {};
        obj.denom = message.denom;
        return obj;
    },
    fromAmino(object) {
        return {
            denom: object.denom
        };
    },
    toAmino(message) {
        const obj = {};
        obj.denom = message.denom;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDenomPoolIdRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/txfees/query-denom-pool-id-request",
            value: QueryDenomPoolIdRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryDenomPoolIdRequest.decode(message.value);
    },
    toProto(message) {
        return QueryDenomPoolIdRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.txfees.v1beta1.QueryDenomPoolIdRequest",
            value: QueryDenomPoolIdRequest.encode(message).finish()
        };
    }
};
function createBaseQueryDenomPoolIdResponse() {
    return {
        poolID: BigInt(0)
    };
}
export const QueryDenomPoolIdResponse = {
    typeUrl: "/osmosis.txfees.v1beta1.QueryDenomPoolIdResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.poolID !== BigInt(0)) {
            writer.uint32(8).uint64(message.poolID);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDenomPoolIdResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolID = reader.uint64();
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
            poolID: isSet(object.poolID) ? BigInt(object.poolID.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.poolID !== undefined && (obj.poolID = (message.poolID || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryDenomPoolIdResponse();
        message.poolID = object.poolID !== undefined && object.poolID !== null ? BigInt(object.poolID.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            poolID: object?.poolID
        };
    },
    toSDK(message) {
        const obj = {};
        obj.poolID = message.poolID;
        return obj;
    },
    fromAmino(object) {
        return {
            poolID: BigInt(object.poolID)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.poolID = message.poolID ? message.poolID.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryDenomPoolIdResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/txfees/query-denom-pool-id-response",
            value: QueryDenomPoolIdResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryDenomPoolIdResponse.decode(message.value);
    },
    toProto(message) {
        return QueryDenomPoolIdResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.txfees.v1beta1.QueryDenomPoolIdResponse",
            value: QueryDenomPoolIdResponse.encode(message).finish()
        };
    }
};
function createBaseQueryBaseDenomRequest() {
    return {};
}
export const QueryBaseDenomRequest = {
    typeUrl: "/osmosis.txfees.v1beta1.QueryBaseDenomRequest",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBaseDenomRequest();
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
        const message = createBaseQueryBaseDenomRequest();
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
        return QueryBaseDenomRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/txfees/query-base-denom-request",
            value: QueryBaseDenomRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryBaseDenomRequest.decode(message.value);
    },
    toProto(message) {
        return QueryBaseDenomRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.txfees.v1beta1.QueryBaseDenomRequest",
            value: QueryBaseDenomRequest.encode(message).finish()
        };
    }
};
function createBaseQueryBaseDenomResponse() {
    return {
        base_denom: ""
    };
}
export const QueryBaseDenomResponse = {
    typeUrl: "/osmosis.txfees.v1beta1.QueryBaseDenomResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.base_denom !== "") {
            writer.uint32(10).string(message.base_denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBaseDenomResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.base_denom = reader.string();
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
            base_denom: isSet(object.base_denom) ? String(object.base_denom) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.base_denom !== undefined && (obj.base_denom = message.base_denom);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryBaseDenomResponse();
        message.base_denom = object.base_denom ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            base_denom: object?.base_denom
        };
    },
    toSDK(message) {
        const obj = {};
        obj.base_denom = message.base_denom;
        return obj;
    },
    fromAmino(object) {
        return {
            base_denom: object.base_denom
        };
    },
    toAmino(message) {
        const obj = {};
        obj.base_denom = message.base_denom;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryBaseDenomResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/txfees/query-base-denom-response",
            value: QueryBaseDenomResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryBaseDenomResponse.decode(message.value);
    },
    toProto(message) {
        return QueryBaseDenomResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.txfees.v1beta1.QueryBaseDenomResponse",
            value: QueryBaseDenomResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=query.js.map
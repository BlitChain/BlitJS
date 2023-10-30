"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuerySpotPriceResponse = exports.QuerySpotPriceRequest = void 0;
//@ts-nocheck
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
function createBaseQuerySpotPriceRequest() {
    return {
        pool_id: BigInt(0),
        base_asset_denom: "",
        quote_asset_denom: ""
    };
}
exports.QuerySpotPriceRequest = {
    typeUrl: "/osmosis.gamm.v2.QuerySpotPriceRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.pool_id !== BigInt(0)) {
            writer.uint32(8).uint64(message.pool_id);
        }
        if (message.base_asset_denom !== "") {
            writer.uint32(18).string(message.base_asset_denom);
        }
        if (message.quote_asset_denom !== "") {
            writer.uint32(26).string(message.quote_asset_denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySpotPriceRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pool_id = reader.uint64();
                    break;
                case 2:
                    message.base_asset_denom = reader.string();
                    break;
                case 3:
                    message.quote_asset_denom = reader.string();
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
            base_asset_denom: (0, helpers_1.isSet)(object.base_asset_denom) ? String(object.base_asset_denom) : "",
            quote_asset_denom: (0, helpers_1.isSet)(object.quote_asset_denom) ? String(object.quote_asset_denom) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.pool_id !== undefined && (obj.pool_id = (message.pool_id || BigInt(0)).toString());
        message.base_asset_denom !== undefined && (obj.base_asset_denom = message.base_asset_denom);
        message.quote_asset_denom !== undefined && (obj.quote_asset_denom = message.quote_asset_denom);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQuerySpotPriceRequest();
        message.pool_id = object.pool_id !== undefined && object.pool_id !== null ? BigInt(object.pool_id.toString()) : BigInt(0);
        message.base_asset_denom = object.base_asset_denom ?? "";
        message.quote_asset_denom = object.quote_asset_denom ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            pool_id: object?.pool_id,
            base_asset_denom: object?.base_asset_denom,
            quote_asset_denom: object?.quote_asset_denom
        };
    },
    toSDK(message) {
        const obj = {};
        obj.pool_id = message.pool_id;
        obj.base_asset_denom = message.base_asset_denom;
        obj.quote_asset_denom = message.quote_asset_denom;
        return obj;
    },
    fromAmino(object) {
        return {
            pool_id: BigInt(object.pool_id),
            base_asset_denom: object.base_asset_denom,
            quote_asset_denom: object.quote_asset_denom
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pool_id = message.pool_id ? message.pool_id.toString() : undefined;
        obj.base_asset_denom = message.base_asset_denom;
        obj.quote_asset_denom = message.quote_asset_denom;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QuerySpotPriceRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/v2/query-spot-price-request",
            value: exports.QuerySpotPriceRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QuerySpotPriceRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QuerySpotPriceRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v2.QuerySpotPriceRequest",
            value: exports.QuerySpotPriceRequest.encode(message).finish()
        };
    }
};
function createBaseQuerySpotPriceResponse() {
    return {
        spot_price: ""
    };
}
exports.QuerySpotPriceResponse = {
    typeUrl: "/osmosis.gamm.v2.QuerySpotPriceResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.spot_price !== "") {
            writer.uint32(10).string(message.spot_price);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySpotPriceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.spot_price = reader.string();
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
            spot_price: (0, helpers_1.isSet)(object.spot_price) ? String(object.spot_price) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.spot_price !== undefined && (obj.spot_price = message.spot_price);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQuerySpotPriceResponse();
        message.spot_price = object.spot_price ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            spot_price: object?.spot_price
        };
    },
    toSDK(message) {
        const obj = {};
        obj.spot_price = message.spot_price;
        return obj;
    },
    fromAmino(object) {
        return {
            spot_price: object.spot_price
        };
    },
    toAmino(message) {
        const obj = {};
        obj.spot_price = message.spot_price;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QuerySpotPriceResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/gamm/v2/query-spot-price-response",
            value: exports.QuerySpotPriceResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QuerySpotPriceResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QuerySpotPriceResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.gamm.v2.QuerySpotPriceResponse",
            value: exports.QuerySpotPriceResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=query.js.map
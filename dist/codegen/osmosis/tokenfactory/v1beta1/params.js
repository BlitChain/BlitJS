"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = void 0;
//@ts-nocheck
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const binary_1 = require("../../../binary");
function createBaseParams() {
    return {
        denom_creation_fee: []
    };
}
exports.Params = {
    typeUrl: "/osmosis.tokenfactory.v1beta1.Params",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.denom_creation_fee) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom_creation_fee.push(coin_1.Coin.decode(reader, reader.uint32()));
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
            denom_creation_fee: Array.isArray(object?.denom_creation_fee) ? object.denom_creation_fee.map((e) => coin_1.Coin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.denom_creation_fee) {
            obj.denom_creation_fee = message.denom_creation_fee.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.denom_creation_fee = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.denom_creation_fee = object.denom_creation_fee?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            denom_creation_fee: Array.isArray(object?.denom_creation_fee) ? object.denom_creation_fee.map((e) => coin_1.Coin.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.denom_creation_fee) {
            obj.denom_creation_fee = message.denom_creation_fee.map(e => e ? coin_1.Coin.toSDK(e) : undefined);
        }
        else {
            obj.denom_creation_fee = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            denom_creation_fee: Array.isArray(object?.denom_creation_fee) ? object.denom_creation_fee.map((e) => coin_1.Coin.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.denom_creation_fee) {
            obj.denom_creation_fee = message.denom_creation_fee.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.denom_creation_fee = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Params.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/tokenfactory/params",
            value: exports.Params.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Params.decode(message.value);
    },
    toProto(message) {
        return exports.Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.tokenfactory.v1beta1.Params",
            value: exports.Params.encode(message).finish()
        };
    }
};
//# sourceMappingURL=params.js.map
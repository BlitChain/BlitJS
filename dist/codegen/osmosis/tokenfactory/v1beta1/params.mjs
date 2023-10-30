//@ts-nocheck
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseParams() {
    return {
        denom_creation_fee: []
    };
}
export const Params = {
    typeUrl: "/osmosis.tokenfactory.v1beta1.Params",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.denom_creation_fee) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom_creation_fee.push(Coin.decode(reader, reader.uint32()));
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
            denom_creation_fee: Array.isArray(object?.denom_creation_fee) ? object.denom_creation_fee.map((e) => Coin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.denom_creation_fee) {
            obj.denom_creation_fee = message.denom_creation_fee.map(e => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.denom_creation_fee = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.denom_creation_fee = object.denom_creation_fee?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            denom_creation_fee: Array.isArray(object?.denom_creation_fee) ? object.denom_creation_fee.map((e) => Coin.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.denom_creation_fee) {
            obj.denom_creation_fee = message.denom_creation_fee.map(e => e ? Coin.toSDK(e) : undefined);
        }
        else {
            obj.denom_creation_fee = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            denom_creation_fee: Array.isArray(object?.denom_creation_fee) ? object.denom_creation_fee.map((e) => Coin.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.denom_creation_fee) {
            obj.denom_creation_fee = message.denom_creation_fee.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.denom_creation_fee = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return Params.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/tokenfactory/params",
            value: Params.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Params.decode(message.value);
    },
    toProto(message) {
        return Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.tokenfactory.v1beta1.Params",
            value: Params.encode(message).finish()
        };
    }
};
//# sourceMappingURL=params.js.map
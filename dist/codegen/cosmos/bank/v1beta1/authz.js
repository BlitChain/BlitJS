"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendAuthorization = exports.protobufPackage = void 0;
//@ts-nocheck
const coin_1 = require("../../base/v1beta1/coin");
const binary_1 = require("../../../binary");
exports.protobufPackage = "cosmos.bank.v1beta1";
function createBaseSendAuthorization() {
    return {
        $typeUrl: "/cosmos.bank.v1beta1.SendAuthorization",
        spend_limit: [],
        allow_list: []
    };
}
exports.SendAuthorization = {
    typeUrl: "/cosmos.bank.v1beta1.SendAuthorization",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.spend_limit) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.allow_list) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSendAuthorization();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.spend_limit.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.allow_list.push(reader.string());
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
            spend_limit: Array.isArray(object?.spend_limit) ? object.spend_limit.map((e) => coin_1.Coin.fromJSON(e)) : [],
            allow_list: Array.isArray(object?.allow_list) ? object.allow_list.map((e) => String(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.spend_limit) {
            obj.spend_limit = message.spend_limit.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.spend_limit = [];
        }
        if (message.allow_list) {
            obj.allow_list = message.allow_list.map(e => e);
        }
        else {
            obj.allow_list = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSendAuthorization();
        message.spend_limit = object.spend_limit?.map(e => coin_1.Coin.fromPartial(e)) || [];
        message.allow_list = object.allow_list?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseSendAuthorization();
        message.spend_limit = object.spend_limit?.map(e => coin_1.Coin.fromAmino(e)) || [];
        message.allow_list = object.allow_list?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.spend_limit) {
            obj.spend_limit = message.spend_limit.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.spend_limit = [];
        }
        if (message.allow_list) {
            obj.allow_list = message.allow_list.map(e => e);
        }
        else {
            obj.allow_list = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SendAuthorization.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/SendAuthorization",
            value: exports.SendAuthorization.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.SendAuthorization.decode(message.value);
    },
    toProto(message) {
        return exports.SendAuthorization.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.bank.v1beta1.SendAuthorization",
            value: exports.SendAuthorization.encode(message).finish()
        };
    }
};
//# sourceMappingURL=authz.js.map
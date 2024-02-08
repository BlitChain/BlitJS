//@ts-nocheck
import { Coin } from "../../base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
export const protobufPackage = "cosmos.bank.v1beta1";
function createBaseSendAuthorization() {
    return {
        $typeUrl: "/cosmos.bank.v1beta1.SendAuthorization",
        spend_limit: [],
        allow_list: []
    };
}
export const SendAuthorization = {
    typeUrl: "/cosmos.bank.v1beta1.SendAuthorization",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.spend_limit) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.allow_list) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSendAuthorization();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.spend_limit.push(Coin.decode(reader, reader.uint32()));
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
            spend_limit: Array.isArray(object?.spend_limit) ? object.spend_limit.map((e) => Coin.fromJSON(e)) : [],
            allow_list: Array.isArray(object?.allow_list) ? object.allow_list.map((e) => String(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.spend_limit) {
            obj.spend_limit = message.spend_limit.map(e => e ? Coin.toJSON(e) : undefined);
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
        message.spend_limit = object.spend_limit?.map(e => Coin.fromPartial(e)) || [];
        message.allow_list = object.allow_list?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseSendAuthorization();
        message.spend_limit = object.spend_limit?.map(e => Coin.fromAmino(e)) || [];
        message.allow_list = object.allow_list?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.spend_limit) {
            obj.spend_limit = message.spend_limit.map(e => e ? Coin.toAmino(e) : undefined);
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
        return SendAuthorization.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/SendAuthorization",
            value: SendAuthorization.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return SendAuthorization.decode(message.value);
    },
    toProto(message) {
        return SendAuthorization.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.bank.v1beta1.SendAuthorization",
            value: SendAuthorization.encode(message).finish()
        };
    }
};
//# sourceMappingURL=authz.js.map
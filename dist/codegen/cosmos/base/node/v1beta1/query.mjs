//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet } from "../../../../helpers";
export const protobufPackage = "cosmos.base.node.v1beta1";
function createBaseConfigRequest() {
    return {};
}
export const ConfigRequest = {
    typeUrl: "/cosmos.base.node.v1beta1.ConfigRequest",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConfigRequest();
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
        const message = createBaseConfigRequest();
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
        return ConfigRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ConfigRequest",
            value: ConfigRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ConfigRequest.decode(message.value);
    },
    toProto(message) {
        return ConfigRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.node.v1beta1.ConfigRequest",
            value: ConfigRequest.encode(message).finish()
        };
    }
};
function createBaseConfigResponse() {
    return {
        minimum_gas_price: ""
    };
}
export const ConfigResponse = {
    typeUrl: "/cosmos.base.node.v1beta1.ConfigResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.minimum_gas_price !== "") {
            writer.uint32(10).string(message.minimum_gas_price);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConfigResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.minimum_gas_price = reader.string();
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
            minimum_gas_price: isSet(object.minimum_gas_price) ? String(object.minimum_gas_price) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.minimum_gas_price !== undefined && (obj.minimum_gas_price = message.minimum_gas_price);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseConfigResponse();
        message.minimum_gas_price = object.minimum_gas_price ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            minimum_gas_price: object?.minimum_gas_price
        };
    },
    toSDK(message) {
        const obj = {};
        obj.minimum_gas_price = message.minimum_gas_price;
        return obj;
    },
    fromAmino(object) {
        return {
            minimum_gas_price: object.minimum_gas_price
        };
    },
    toAmino(message) {
        const obj = {};
        obj.minimum_gas_price = message.minimum_gas_price;
        return obj;
    },
    fromAminoMsg(object) {
        return ConfigResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ConfigResponse",
            value: ConfigResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ConfigResponse.decode(message.value);
    },
    toProto(message) {
        return ConfigResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.node.v1beta1.ConfigResponse",
            value: ConfigResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=query.js.map
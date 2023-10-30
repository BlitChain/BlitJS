//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
function createBaseParams() {
    return {
        contract_address: ""
    };
}
export const Params = {
    typeUrl: "/osmosis.ibcratelimit.v1beta1.Params",
    encode(message, writer = BinaryWriter.create()) {
        if (message.contract_address !== "") {
            writer.uint32(10).string(message.contract_address);
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
                    message.contract_address = reader.string();
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
            contract_address: isSet(object.contract_address) ? String(object.contract_address) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.contract_address !== undefined && (obj.contract_address = message.contract_address);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.contract_address = object.contract_address ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            contract_address: object?.contract_address
        };
    },
    toSDK(message) {
        const obj = {};
        obj.contract_address = message.contract_address;
        return obj;
    },
    fromAmino(object) {
        return {
            contract_address: object.contract_address
        };
    },
    toAmino(message) {
        const obj = {};
        obj.contract_address = message.contract_address;
        return obj;
    },
    fromAminoMsg(object) {
        return Params.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/ibcratelimit/params",
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
            typeUrl: "/osmosis.ibcratelimit.v1beta1.Params",
            value: Params.encode(message).finish()
        };
    }
};
//# sourceMappingURL=params.js.map
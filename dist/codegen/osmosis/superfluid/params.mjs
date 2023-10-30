//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet } from "../../helpers";
function createBaseParams() {
    return {
        minimum_risk_factor: ""
    };
}
export const Params = {
    typeUrl: "/osmosis.superfluid.Params",
    encode(message, writer = BinaryWriter.create()) {
        if (message.minimum_risk_factor !== "") {
            writer.uint32(10).string(Decimal.fromUserInput(message.minimum_risk_factor, 18).atomics);
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
                    message.minimum_risk_factor = Decimal.fromAtomics(reader.string(), 18).toString();
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
            minimum_risk_factor: isSet(object.minimum_risk_factor) ? String(object.minimum_risk_factor) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.minimum_risk_factor !== undefined && (obj.minimum_risk_factor = message.minimum_risk_factor);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.minimum_risk_factor = object.minimum_risk_factor ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            minimum_risk_factor: object?.minimum_risk_factor
        };
    },
    toSDK(message) {
        const obj = {};
        obj.minimum_risk_factor = message.minimum_risk_factor;
        return obj;
    },
    fromAmino(object) {
        return {
            minimum_risk_factor: object.minimum_risk_factor
        };
    },
    toAmino(message) {
        const obj = {};
        obj.minimum_risk_factor = message.minimum_risk_factor;
        return obj;
    },
    fromAminoMsg(object) {
        return Params.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/params",
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
            typeUrl: "/osmosis.superfluid.Params",
            value: Params.encode(message).finish()
        };
    }
};
//# sourceMappingURL=params.js.map
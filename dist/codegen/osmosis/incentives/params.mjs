//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
function createBaseParams() {
    return {
        distr_epoch_identifier: ""
    };
}
export const Params = {
    typeUrl: "/osmosis.incentives.Params",
    encode(message, writer = BinaryWriter.create()) {
        if (message.distr_epoch_identifier !== "") {
            writer.uint32(10).string(message.distr_epoch_identifier);
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
                    message.distr_epoch_identifier = reader.string();
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
            distr_epoch_identifier: isSet(object.distr_epoch_identifier) ? String(object.distr_epoch_identifier) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.distr_epoch_identifier !== undefined && (obj.distr_epoch_identifier = message.distr_epoch_identifier);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.distr_epoch_identifier = object.distr_epoch_identifier ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            distr_epoch_identifier: object?.distr_epoch_identifier
        };
    },
    toSDK(message) {
        const obj = {};
        obj.distr_epoch_identifier = message.distr_epoch_identifier;
        return obj;
    },
    fromAmino(object) {
        return {
            distr_epoch_identifier: object.distr_epoch_identifier
        };
    },
    toAmino(message) {
        const obj = {};
        obj.distr_epoch_identifier = message.distr_epoch_identifier;
        return obj;
    },
    fromAminoMsg(object) {
        return Params.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/incentives/params",
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
            typeUrl: "/osmosis.incentives.Params",
            value: Params.encode(message).finish()
        };
    }
};
//# sourceMappingURL=params.js.map
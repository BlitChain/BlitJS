//@ts-nocheck
import { FeeToken } from "./feetoken";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
function createBaseGenesisState() {
    return {
        basedenom: "",
        feetokens: []
    };
}
export const GenesisState = {
    typeUrl: "/osmosis.txfees.v1beta1.GenesisState",
    encode(message, writer = BinaryWriter.create()) {
        if (message.basedenom !== "") {
            writer.uint32(10).string(message.basedenom);
        }
        for (const v of message.feetokens) {
            FeeToken.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.basedenom = reader.string();
                    break;
                case 2:
                    message.feetokens.push(FeeToken.decode(reader, reader.uint32()));
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
            basedenom: isSet(object.basedenom) ? String(object.basedenom) : "",
            feetokens: Array.isArray(object?.feetokens) ? object.feetokens.map((e) => FeeToken.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.basedenom !== undefined && (obj.basedenom = message.basedenom);
        if (message.feetokens) {
            obj.feetokens = message.feetokens.map(e => e ? FeeToken.toJSON(e) : undefined);
        }
        else {
            obj.feetokens = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.basedenom = object.basedenom ?? "";
        message.feetokens = object.feetokens?.map(e => FeeToken.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            basedenom: object?.basedenom,
            feetokens: Array.isArray(object?.feetokens) ? object.feetokens.map((e) => FeeToken.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.basedenom = message.basedenom;
        if (message.feetokens) {
            obj.feetokens = message.feetokens.map(e => e ? FeeToken.toSDK(e) : undefined);
        }
        else {
            obj.feetokens = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            basedenom: object.basedenom,
            feetokens: Array.isArray(object?.feetokens) ? object.feetokens.map((e) => FeeToken.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.basedenom = message.basedenom;
        if (message.feetokens) {
            obj.feetokens = message.feetokens.map(e => e ? FeeToken.toAmino(e) : undefined);
        }
        else {
            obj.feetokens = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return GenesisState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/txfees/genesis-state",
            value: GenesisState.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GenesisState.decode(message.value);
    },
    toProto(message) {
        return GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.txfees.v1beta1.GenesisState",
            value: GenesisState.encode(message).finish()
        };
    }
};
//# sourceMappingURL=genesis.js.map
//@ts-nocheck
import { Duration } from "../../../google/protobuf/duration";
import { TwapRecord } from "./twap_record";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
function createBaseParams() {
    return {
        prune_epoch_identifier: "",
        record_history_keep_period: Duration.fromPartial({})
    };
}
export const Params = {
    typeUrl: "/osmosis.twap.v1beta1.Params",
    encode(message, writer = BinaryWriter.create()) {
        if (message.prune_epoch_identifier !== "") {
            writer.uint32(10).string(message.prune_epoch_identifier);
        }
        if (message.record_history_keep_period !== undefined) {
            Duration.encode(message.record_history_keep_period, writer.uint32(18).fork()).ldelim();
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
                    message.prune_epoch_identifier = reader.string();
                    break;
                case 2:
                    message.record_history_keep_period = Duration.decode(reader, reader.uint32());
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
            prune_epoch_identifier: isSet(object.prune_epoch_identifier) ? String(object.prune_epoch_identifier) : "",
            record_history_keep_period: isSet(object.record_history_keep_period) ? Duration.fromJSON(object.record_history_keep_period) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.prune_epoch_identifier !== undefined && (obj.prune_epoch_identifier = message.prune_epoch_identifier);
        message.record_history_keep_period !== undefined && (obj.record_history_keep_period = message.record_history_keep_period ? Duration.toJSON(message.record_history_keep_period) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.prune_epoch_identifier = object.prune_epoch_identifier ?? "";
        message.record_history_keep_period = object.record_history_keep_period !== undefined && object.record_history_keep_period !== null ? Duration.fromPartial(object.record_history_keep_period) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            prune_epoch_identifier: object?.prune_epoch_identifier,
            record_history_keep_period: object.record_history_keep_period ? Duration.fromSDK(object.record_history_keep_period) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.prune_epoch_identifier = message.prune_epoch_identifier;
        message.record_history_keep_period !== undefined && (obj.record_history_keep_period = message.record_history_keep_period ? Duration.toSDK(message.record_history_keep_period) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            prune_epoch_identifier: object.prune_epoch_identifier,
            record_history_keep_period: object?.record_history_keep_period ? Duration.fromAmino(object.record_history_keep_period) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.prune_epoch_identifier = message.prune_epoch_identifier;
        obj.record_history_keep_period = message.record_history_keep_period ? Duration.toAmino(message.record_history_keep_period) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Params.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/twap/params",
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
            typeUrl: "/osmosis.twap.v1beta1.Params",
            value: Params.encode(message).finish()
        };
    }
};
function createBaseGenesisState() {
    return {
        twaps: [],
        params: Params.fromPartial({})
    };
}
export const GenesisState = {
    typeUrl: "/osmosis.twap.v1beta1.GenesisState",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.twaps) {
            TwapRecord.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(18).fork()).ldelim();
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
                    message.twaps.push(TwapRecord.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.params = Params.decode(reader, reader.uint32());
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
            twaps: Array.isArray(object?.twaps) ? object.twaps.map((e) => TwapRecord.fromJSON(e)) : [],
            params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.twaps) {
            obj.twaps = message.twaps.map(e => e ? TwapRecord.toJSON(e) : undefined);
        }
        else {
            obj.twaps = [];
        }
        message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.twaps = object.twaps?.map(e => TwapRecord.fromPartial(e)) || [];
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            twaps: Array.isArray(object?.twaps) ? object.twaps.map((e) => TwapRecord.fromSDK(e)) : [],
            params: object.params ? Params.fromSDK(object.params) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.twaps) {
            obj.twaps = message.twaps.map(e => e ? TwapRecord.toSDK(e) : undefined);
        }
        else {
            obj.twaps = [];
        }
        message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            twaps: Array.isArray(object?.twaps) ? object.twaps.map((e) => TwapRecord.fromAmino(e)) : [],
            params: object?.params ? Params.fromAmino(object.params) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.twaps) {
            obj.twaps = message.twaps.map(e => e ? TwapRecord.toAmino(e) : undefined);
        }
        else {
            obj.twaps = [];
        }
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return GenesisState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/twap/genesis-state",
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
            typeUrl: "/osmosis.twap.v1beta1.GenesisState",
            value: GenesisState.encode(message).finish()
        };
    }
};
//# sourceMappingURL=genesis.js.map
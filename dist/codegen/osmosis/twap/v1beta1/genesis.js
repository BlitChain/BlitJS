"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = exports.Params = void 0;
//@ts-nocheck
const duration_1 = require("../../../google/protobuf/duration");
const twap_record_1 = require("./twap_record");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
function createBaseParams() {
    return {
        prune_epoch_identifier: "",
        record_history_keep_period: duration_1.Duration.fromPartial({})
    };
}
exports.Params = {
    typeUrl: "/osmosis.twap.v1beta1.Params",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.prune_epoch_identifier !== "") {
            writer.uint32(10).string(message.prune_epoch_identifier);
        }
        if (message.record_history_keep_period !== undefined) {
            duration_1.Duration.encode(message.record_history_keep_period, writer.uint32(18).fork()).ldelim();
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
                    message.prune_epoch_identifier = reader.string();
                    break;
                case 2:
                    message.record_history_keep_period = duration_1.Duration.decode(reader, reader.uint32());
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
            prune_epoch_identifier: (0, helpers_1.isSet)(object.prune_epoch_identifier) ? String(object.prune_epoch_identifier) : "",
            record_history_keep_period: (0, helpers_1.isSet)(object.record_history_keep_period) ? duration_1.Duration.fromJSON(object.record_history_keep_period) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.prune_epoch_identifier !== undefined && (obj.prune_epoch_identifier = message.prune_epoch_identifier);
        message.record_history_keep_period !== undefined && (obj.record_history_keep_period = message.record_history_keep_period ? duration_1.Duration.toJSON(message.record_history_keep_period) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.prune_epoch_identifier = object.prune_epoch_identifier ?? "";
        message.record_history_keep_period = object.record_history_keep_period !== undefined && object.record_history_keep_period !== null ? duration_1.Duration.fromPartial(object.record_history_keep_period) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            prune_epoch_identifier: object?.prune_epoch_identifier,
            record_history_keep_period: object.record_history_keep_period ? duration_1.Duration.fromSDK(object.record_history_keep_period) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.prune_epoch_identifier = message.prune_epoch_identifier;
        message.record_history_keep_period !== undefined && (obj.record_history_keep_period = message.record_history_keep_period ? duration_1.Duration.toSDK(message.record_history_keep_period) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            prune_epoch_identifier: object.prune_epoch_identifier,
            record_history_keep_period: object?.record_history_keep_period ? duration_1.Duration.fromAmino(object.record_history_keep_period) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.prune_epoch_identifier = message.prune_epoch_identifier;
        obj.record_history_keep_period = message.record_history_keep_period ? duration_1.Duration.toAmino(message.record_history_keep_period) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Params.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/twap/params",
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
            typeUrl: "/osmosis.twap.v1beta1.Params",
            value: exports.Params.encode(message).finish()
        };
    }
};
function createBaseGenesisState() {
    return {
        twaps: [],
        params: exports.Params.fromPartial({})
    };
}
exports.GenesisState = {
    typeUrl: "/osmosis.twap.v1beta1.GenesisState",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.twaps) {
            twap_record_1.TwapRecord.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.params !== undefined) {
            exports.Params.encode(message.params, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.twaps.push(twap_record_1.TwapRecord.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.params = exports.Params.decode(reader, reader.uint32());
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
            twaps: Array.isArray(object?.twaps) ? object.twaps.map((e) => twap_record_1.TwapRecord.fromJSON(e)) : [],
            params: (0, helpers_1.isSet)(object.params) ? exports.Params.fromJSON(object.params) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.twaps) {
            obj.twaps = message.twaps.map(e => e ? twap_record_1.TwapRecord.toJSON(e) : undefined);
        }
        else {
            obj.twaps = [];
        }
        message.params !== undefined && (obj.params = message.params ? exports.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.twaps = object.twaps?.map(e => twap_record_1.TwapRecord.fromPartial(e)) || [];
        message.params = object.params !== undefined && object.params !== null ? exports.Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            twaps: Array.isArray(object?.twaps) ? object.twaps.map((e) => twap_record_1.TwapRecord.fromSDK(e)) : [],
            params: object.params ? exports.Params.fromSDK(object.params) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.twaps) {
            obj.twaps = message.twaps.map(e => e ? twap_record_1.TwapRecord.toSDK(e) : undefined);
        }
        else {
            obj.twaps = [];
        }
        message.params !== undefined && (obj.params = message.params ? exports.Params.toSDK(message.params) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            twaps: Array.isArray(object?.twaps) ? object.twaps.map((e) => twap_record_1.TwapRecord.fromAmino(e)) : [],
            params: object?.params ? exports.Params.fromAmino(object.params) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.twaps) {
            obj.twaps = message.twaps.map(e => e ? twap_record_1.TwapRecord.toAmino(e) : undefined);
        }
        else {
            obj.twaps = [];
        }
        obj.params = message.params ? exports.Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GenesisState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/twap/genesis-state",
            value: exports.GenesisState.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GenesisState.decode(message.value);
    },
    toProto(message) {
        return exports.GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.twap.v1beta1.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
//# sourceMappingURL=genesis.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = void 0;
//@ts-nocheck
const params_1 = require("./params");
const protorev_1 = require("./protorev");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
function createBaseGenesisState() {
    return {
        params: params_1.Params.fromPartial({}),
        token_pairs: []
    };
}
exports.GenesisState = {
    typeUrl: "/osmosis.protorev.v1beta1.GenesisState",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.token_pairs) {
            protorev_1.TokenPairArbRoutes.encode(v, writer.uint32(18).fork()).ldelim();
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
                    message.params = params_1.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.token_pairs.push(protorev_1.TokenPairArbRoutes.decode(reader, reader.uint32()));
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
            params: (0, helpers_1.isSet)(object.params) ? params_1.Params.fromJSON(object.params) : undefined,
            token_pairs: Array.isArray(object?.token_pairs) ? object.token_pairs.map((e) => protorev_1.TokenPairArbRoutes.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? params_1.Params.toJSON(message.params) : undefined);
        if (message.token_pairs) {
            obj.token_pairs = message.token_pairs.map(e => e ? protorev_1.TokenPairArbRoutes.toJSON(e) : undefined);
        }
        else {
            obj.token_pairs = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.params = object.params !== undefined && object.params !== null ? params_1.Params.fromPartial(object.params) : undefined;
        message.token_pairs = object.token_pairs?.map(e => protorev_1.TokenPairArbRoutes.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            params: object.params ? params_1.Params.fromSDK(object.params) : undefined,
            token_pairs: Array.isArray(object?.token_pairs) ? object.token_pairs.map((e) => protorev_1.TokenPairArbRoutes.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? params_1.Params.toSDK(message.params) : undefined);
        if (message.token_pairs) {
            obj.token_pairs = message.token_pairs.map(e => e ? protorev_1.TokenPairArbRoutes.toSDK(e) : undefined);
        }
        else {
            obj.token_pairs = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            params: object?.params ? params_1.Params.fromAmino(object.params) : undefined,
            token_pairs: Array.isArray(object?.token_pairs) ? object.token_pairs.map((e) => protorev_1.TokenPairArbRoutes.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? params_1.Params.toAmino(message.params) : undefined;
        if (message.token_pairs) {
            obj.token_pairs = message.token_pairs.map(e => e ? protorev_1.TokenPairArbRoutes.toAmino(e) : undefined);
        }
        else {
            obj.token_pairs = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GenesisState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/protorev/genesis-state",
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
            typeUrl: "/osmosis.protorev.v1beta1.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
//# sourceMappingURL=genesis.js.map
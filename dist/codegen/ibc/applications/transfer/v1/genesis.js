"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = exports.protobufPackage = void 0;
//@ts-nocheck
const transfer_1 = require("./transfer");
const coin_1 = require("../../../../cosmos/base/v1beta1/coin");
const binary_1 = require("../../../../binary");
const helpers_1 = require("../../../../helpers");
exports.protobufPackage = "ibc.applications.transfer.v1";
function createBaseGenesisState() {
    return {
        port_id: "",
        denom_traces: [],
        params: transfer_1.Params.fromPartial({}),
        total_escrowed: []
    };
}
exports.GenesisState = {
    typeUrl: "/ibc.applications.transfer.v1.GenesisState",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.port_id !== "") {
            writer.uint32(10).string(message.port_id);
        }
        for (const v of message.denom_traces) {
            transfer_1.DenomTrace.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.params !== undefined) {
            transfer_1.Params.encode(message.params, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.total_escrowed) {
            coin_1.Coin.encode(v, writer.uint32(34).fork()).ldelim();
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
                    message.port_id = reader.string();
                    break;
                case 2:
                    message.denom_traces.push(transfer_1.DenomTrace.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.params = transfer_1.Params.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.total_escrowed.push(coin_1.Coin.decode(reader, reader.uint32()));
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
            port_id: (0, helpers_1.isSet)(object.port_id) ? String(object.port_id) : "",
            denom_traces: Array.isArray(object?.denom_traces) ? object.denom_traces.map((e) => transfer_1.DenomTrace.fromJSON(e)) : [],
            params: (0, helpers_1.isSet)(object.params) ? transfer_1.Params.fromJSON(object.params) : undefined,
            total_escrowed: Array.isArray(object?.total_escrowed) ? object.total_escrowed.map((e) => coin_1.Coin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.port_id !== undefined && (obj.port_id = message.port_id);
        if (message.denom_traces) {
            obj.denom_traces = message.denom_traces.map(e => e ? transfer_1.DenomTrace.toJSON(e) : undefined);
        }
        else {
            obj.denom_traces = [];
        }
        message.params !== undefined && (obj.params = message.params ? transfer_1.Params.toJSON(message.params) : undefined);
        if (message.total_escrowed) {
            obj.total_escrowed = message.total_escrowed.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.total_escrowed = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.port_id = object.port_id ?? "";
        message.denom_traces = object.denom_traces?.map(e => transfer_1.DenomTrace.fromPartial(e)) || [];
        message.params = object.params !== undefined && object.params !== null ? transfer_1.Params.fromPartial(object.params) : undefined;
        message.total_escrowed = object.total_escrowed?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        if (object.port_id !== undefined && object.port_id !== null) {
            message.port_id = object.port_id;
        }
        message.denom_traces = object.denom_traces?.map(e => transfer_1.DenomTrace.fromAmino(e)) || [];
        if (object.params !== undefined && object.params !== null) {
            message.params = transfer_1.Params.fromAmino(object.params);
        }
        message.total_escrowed = object.total_escrowed?.map(e => coin_1.Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.port_id = message.port_id;
        if (message.denom_traces) {
            obj.denom_traces = message.denom_traces.map(e => e ? transfer_1.DenomTrace.toAmino(e) : undefined);
        }
        else {
            obj.denom_traces = [];
        }
        obj.params = message.params ? transfer_1.Params.toAmino(message.params) : undefined;
        if (message.total_escrowed) {
            obj.total_escrowed = message.total_escrowed.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.total_escrowed = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GenesisState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GenesisState",
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
            typeUrl: "/ibc.applications.transfer.v1.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
//# sourceMappingURL=genesis.js.map
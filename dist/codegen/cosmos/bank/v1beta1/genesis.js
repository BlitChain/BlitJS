"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Balance = exports.GenesisState = exports.protobufPackage = void 0;
//@ts-nocheck
const bank_1 = require("./bank");
const coin_1 = require("../../base/v1beta1/coin");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "cosmos.bank.v1beta1";
function createBaseGenesisState() {
    return {
        params: bank_1.Params.fromPartial({}),
        balances: [],
        supply: [],
        denom_metadata: [],
        send_enabled: []
    };
}
exports.GenesisState = {
    typeUrl: "/cosmos.bank.v1beta1.GenesisState",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            bank_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.balances) {
            exports.Balance.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.supply) {
            coin_1.Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.denom_metadata) {
            bank_1.Metadata.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.send_enabled) {
            bank_1.SendEnabled.encode(v, writer.uint32(42).fork()).ldelim();
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
                    message.params = bank_1.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.balances.push(exports.Balance.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.supply.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.denom_metadata.push(bank_1.Metadata.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.send_enabled.push(bank_1.SendEnabled.decode(reader, reader.uint32()));
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
            params: (0, helpers_1.isSet)(object.params) ? bank_1.Params.fromJSON(object.params) : undefined,
            balances: Array.isArray(object?.balances) ? object.balances.map((e) => exports.Balance.fromJSON(e)) : [],
            supply: Array.isArray(object?.supply) ? object.supply.map((e) => coin_1.Coin.fromJSON(e)) : [],
            denom_metadata: Array.isArray(object?.denom_metadata) ? object.denom_metadata.map((e) => bank_1.Metadata.fromJSON(e)) : [],
            send_enabled: Array.isArray(object?.send_enabled) ? object.send_enabled.map((e) => bank_1.SendEnabled.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? bank_1.Params.toJSON(message.params) : undefined);
        if (message.balances) {
            obj.balances = message.balances.map(e => e ? exports.Balance.toJSON(e) : undefined);
        }
        else {
            obj.balances = [];
        }
        if (message.supply) {
            obj.supply = message.supply.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.supply = [];
        }
        if (message.denom_metadata) {
            obj.denom_metadata = message.denom_metadata.map(e => e ? bank_1.Metadata.toJSON(e) : undefined);
        }
        else {
            obj.denom_metadata = [];
        }
        if (message.send_enabled) {
            obj.send_enabled = message.send_enabled.map(e => e ? bank_1.SendEnabled.toJSON(e) : undefined);
        }
        else {
            obj.send_enabled = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.params = object.params !== undefined && object.params !== null ? bank_1.Params.fromPartial(object.params) : undefined;
        message.balances = object.balances?.map(e => exports.Balance.fromPartial(e)) || [];
        message.supply = object.supply?.map(e => coin_1.Coin.fromPartial(e)) || [];
        message.denom_metadata = object.denom_metadata?.map(e => bank_1.Metadata.fromPartial(e)) || [];
        message.send_enabled = object.send_enabled?.map(e => bank_1.SendEnabled.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        if (object.params !== undefined && object.params !== null) {
            message.params = bank_1.Params.fromAmino(object.params);
        }
        message.balances = object.balances?.map(e => exports.Balance.fromAmino(e)) || [];
        message.supply = object.supply?.map(e => coin_1.Coin.fromAmino(e)) || [];
        message.denom_metadata = object.denom_metadata?.map(e => bank_1.Metadata.fromAmino(e)) || [];
        message.send_enabled = object.send_enabled?.map(e => bank_1.SendEnabled.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? bank_1.Params.toAmino(message.params) : bank_1.Params.fromPartial({});
        if (message.balances) {
            obj.balances = message.balances.map(e => e ? exports.Balance.toAmino(e) : undefined);
        }
        else {
            obj.balances = [];
        }
        if (message.supply) {
            obj.supply = message.supply.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.supply = [];
        }
        if (message.denom_metadata) {
            obj.denom_metadata = message.denom_metadata.map(e => e ? bank_1.Metadata.toAmino(e) : undefined);
        }
        else {
            obj.denom_metadata = [];
        }
        if (message.send_enabled) {
            obj.send_enabled = message.send_enabled.map(e => e ? bank_1.SendEnabled.toAmino(e) : undefined);
        }
        else {
            obj.send_enabled = [];
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
            typeUrl: "/cosmos.bank.v1beta1.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
function createBaseBalance() {
    return {
        address: "",
        coins: []
    };
}
exports.Balance = {
    typeUrl: "/cosmos.bank.v1beta1.Balance",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        for (const v of message.coins) {
            coin_1.Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBalance();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.coins.push(coin_1.Coin.decode(reader, reader.uint32()));
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
            address: (0, helpers_1.isSet)(object.address) ? String(object.address) : "",
            coins: Array.isArray(object?.coins) ? object.coins.map((e) => coin_1.Coin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.coins = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseBalance();
        message.address = object.address ?? "";
        message.coins = object.coins?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseBalance();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        message.coins = object.coins?.map(e => coin_1.Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.coins = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Balance.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Balance",
            value: exports.Balance.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Balance.decode(message.value);
    },
    toProto(message) {
        return exports.Balance.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.bank.v1beta1.Balance",
            value: exports.Balance.encode(message).finish()
        };
    }
};
//# sourceMappingURL=genesis.js.map
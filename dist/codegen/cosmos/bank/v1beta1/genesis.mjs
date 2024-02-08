//@ts-nocheck
import { Params, Metadata, SendEnabled } from "./bank";
import { Coin } from "../../base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export const protobufPackage = "cosmos.bank.v1beta1";
function createBaseGenesisState() {
    return {
        params: Params.fromPartial({}),
        balances: [],
        supply: [],
        denom_metadata: [],
        send_enabled: []
    };
}
export const GenesisState = {
    typeUrl: "/cosmos.bank.v1beta1.GenesisState",
    encode(message, writer = BinaryWriter.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.balances) {
            Balance.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.supply) {
            Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.denom_metadata) {
            Metadata.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.send_enabled) {
            SendEnabled.encode(v, writer.uint32(42).fork()).ldelim();
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
                    message.params = Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.balances.push(Balance.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.supply.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.denom_metadata.push(Metadata.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.send_enabled.push(SendEnabled.decode(reader, reader.uint32()));
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
            params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
            balances: Array.isArray(object?.balances) ? object.balances.map((e) => Balance.fromJSON(e)) : [],
            supply: Array.isArray(object?.supply) ? object.supply.map((e) => Coin.fromJSON(e)) : [],
            denom_metadata: Array.isArray(object?.denom_metadata) ? object.denom_metadata.map((e) => Metadata.fromJSON(e)) : [],
            send_enabled: Array.isArray(object?.send_enabled) ? object.send_enabled.map((e) => SendEnabled.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        if (message.balances) {
            obj.balances = message.balances.map(e => e ? Balance.toJSON(e) : undefined);
        }
        else {
            obj.balances = [];
        }
        if (message.supply) {
            obj.supply = message.supply.map(e => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.supply = [];
        }
        if (message.denom_metadata) {
            obj.denom_metadata = message.denom_metadata.map(e => e ? Metadata.toJSON(e) : undefined);
        }
        else {
            obj.denom_metadata = [];
        }
        if (message.send_enabled) {
            obj.send_enabled = message.send_enabled.map(e => e ? SendEnabled.toJSON(e) : undefined);
        }
        else {
            obj.send_enabled = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        message.balances = object.balances?.map(e => Balance.fromPartial(e)) || [];
        message.supply = object.supply?.map(e => Coin.fromPartial(e)) || [];
        message.denom_metadata = object.denom_metadata?.map(e => Metadata.fromPartial(e)) || [];
        message.send_enabled = object.send_enabled?.map(e => SendEnabled.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromAmino(object.params);
        }
        message.balances = object.balances?.map(e => Balance.fromAmino(e)) || [];
        message.supply = object.supply?.map(e => Coin.fromAmino(e)) || [];
        message.denom_metadata = object.denom_metadata?.map(e => Metadata.fromAmino(e)) || [];
        message.send_enabled = object.send_enabled?.map(e => SendEnabled.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? Params.toAmino(message.params) : Params.fromPartial({});
        if (message.balances) {
            obj.balances = message.balances.map(e => e ? Balance.toAmino(e) : undefined);
        }
        else {
            obj.balances = [];
        }
        if (message.supply) {
            obj.supply = message.supply.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.supply = [];
        }
        if (message.denom_metadata) {
            obj.denom_metadata = message.denom_metadata.map(e => e ? Metadata.toAmino(e) : undefined);
        }
        else {
            obj.denom_metadata = [];
        }
        if (message.send_enabled) {
            obj.send_enabled = message.send_enabled.map(e => e ? SendEnabled.toAmino(e) : undefined);
        }
        else {
            obj.send_enabled = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return GenesisState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GenesisState",
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
            typeUrl: "/cosmos.bank.v1beta1.GenesisState",
            value: GenesisState.encode(message).finish()
        };
    }
};
function createBaseBalance() {
    return {
        address: "",
        coins: []
    };
}
export const Balance = {
    typeUrl: "/cosmos.bank.v1beta1.Balance",
    encode(message, writer = BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        for (const v of message.coins) {
            Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBalance();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.coins.push(Coin.decode(reader, reader.uint32()));
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
            address: isSet(object.address) ? String(object.address) : "",
            coins: Array.isArray(object?.coins) ? object.coins.map((e) => Coin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.coins = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseBalance();
        message.address = object.address ?? "";
        message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseBalance();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        message.coins = object.coins?.map(e => Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.coins = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return Balance.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Balance",
            value: Balance.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Balance.decode(message.value);
    },
    toProto(message) {
        return Balance.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.bank.v1beta1.Balance",
            value: Balance.encode(message).finish()
        };
    }
};
//# sourceMappingURL=genesis.js.map
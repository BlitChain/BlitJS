//@ts-nocheck
import { Timestamp } from "../../google/protobuf/timestamp";
import { Duration } from "../../google/protobuf/duration";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { PeriodLock, SyntheticLock } from "./lock";
import { Params } from "./params";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, toTimestamp, fromTimestamp, fromJsonTimestamp } from "../../helpers";
function createBaseModuleBalanceRequest() {
    return {};
}
export const ModuleBalanceRequest = {
    typeUrl: "/osmosis.lockup.ModuleBalanceRequest",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModuleBalanceRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseModuleBalanceRequest();
        return message;
    },
    fromSDK(_) {
        return {};
    },
    toSDK(_) {
        const obj = {};
        return obj;
    },
    fromAmino(_) {
        return {};
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return ModuleBalanceRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/module-balance-request",
            value: ModuleBalanceRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ModuleBalanceRequest.decode(message.value);
    },
    toProto(message) {
        return ModuleBalanceRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.ModuleBalanceRequest",
            value: ModuleBalanceRequest.encode(message).finish()
        };
    }
};
function createBaseModuleBalanceResponse() {
    return {
        coins: []
    };
}
export const ModuleBalanceResponse = {
    typeUrl: "/osmosis.lockup.ModuleBalanceResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.coins) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModuleBalanceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
            coins: Array.isArray(object?.coins) ? object.coins.map((e) => Coin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.coins = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseModuleBalanceResponse();
        message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            coins: Array.isArray(object?.coins) ? object.coins.map((e) => Coin.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? Coin.toSDK(e) : undefined);
        }
        else {
            obj.coins = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            coins: Array.isArray(object?.coins) ? object.coins.map((e) => Coin.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.coins = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return ModuleBalanceResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/module-balance-response",
            value: ModuleBalanceResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ModuleBalanceResponse.decode(message.value);
    },
    toProto(message) {
        return ModuleBalanceResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.ModuleBalanceResponse",
            value: ModuleBalanceResponse.encode(message).finish()
        };
    }
};
function createBaseModuleLockedAmountRequest() {
    return {};
}
export const ModuleLockedAmountRequest = {
    typeUrl: "/osmosis.lockup.ModuleLockedAmountRequest",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModuleLockedAmountRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseModuleLockedAmountRequest();
        return message;
    },
    fromSDK(_) {
        return {};
    },
    toSDK(_) {
        const obj = {};
        return obj;
    },
    fromAmino(_) {
        return {};
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return ModuleLockedAmountRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/module-locked-amount-request",
            value: ModuleLockedAmountRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ModuleLockedAmountRequest.decode(message.value);
    },
    toProto(message) {
        return ModuleLockedAmountRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.ModuleLockedAmountRequest",
            value: ModuleLockedAmountRequest.encode(message).finish()
        };
    }
};
function createBaseModuleLockedAmountResponse() {
    return {
        coins: []
    };
}
export const ModuleLockedAmountResponse = {
    typeUrl: "/osmosis.lockup.ModuleLockedAmountResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.coins) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModuleLockedAmountResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
            coins: Array.isArray(object?.coins) ? object.coins.map((e) => Coin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.coins = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseModuleLockedAmountResponse();
        message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            coins: Array.isArray(object?.coins) ? object.coins.map((e) => Coin.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? Coin.toSDK(e) : undefined);
        }
        else {
            obj.coins = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            coins: Array.isArray(object?.coins) ? object.coins.map((e) => Coin.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.coins = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return ModuleLockedAmountResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/module-locked-amount-response",
            value: ModuleLockedAmountResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ModuleLockedAmountResponse.decode(message.value);
    },
    toProto(message) {
        return ModuleLockedAmountResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.ModuleLockedAmountResponse",
            value: ModuleLockedAmountResponse.encode(message).finish()
        };
    }
};
function createBaseAccountUnlockableCoinsRequest() {
    return {
        owner: ""
    };
}
export const AccountUnlockableCoinsRequest = {
    typeUrl: "/osmosis.lockup.AccountUnlockableCoinsRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountUnlockableCoinsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
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
            owner: isSet(object.owner) ? String(object.owner) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAccountUnlockableCoinsRequest();
        message.owner = object.owner ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            owner: object?.owner
        };
    },
    toSDK(message) {
        const obj = {};
        obj.owner = message.owner;
        return obj;
    },
    fromAmino(object) {
        return {
            owner: object.owner
        };
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner;
        return obj;
    },
    fromAminoMsg(object) {
        return AccountUnlockableCoinsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/account-unlockable-coins-request",
            value: AccountUnlockableCoinsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return AccountUnlockableCoinsRequest.decode(message.value);
    },
    toProto(message) {
        return AccountUnlockableCoinsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.AccountUnlockableCoinsRequest",
            value: AccountUnlockableCoinsRequest.encode(message).finish()
        };
    }
};
function createBaseAccountUnlockableCoinsResponse() {
    return {
        coins: []
    };
}
export const AccountUnlockableCoinsResponse = {
    typeUrl: "/osmosis.lockup.AccountUnlockableCoinsResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.coins) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountUnlockableCoinsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
            coins: Array.isArray(object?.coins) ? object.coins.map((e) => Coin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.coins = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAccountUnlockableCoinsResponse();
        message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            coins: Array.isArray(object?.coins) ? object.coins.map((e) => Coin.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? Coin.toSDK(e) : undefined);
        }
        else {
            obj.coins = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            coins: Array.isArray(object?.coins) ? object.coins.map((e) => Coin.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.coins = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return AccountUnlockableCoinsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/account-unlockable-coins-response",
            value: AccountUnlockableCoinsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return AccountUnlockableCoinsResponse.decode(message.value);
    },
    toProto(message) {
        return AccountUnlockableCoinsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.AccountUnlockableCoinsResponse",
            value: AccountUnlockableCoinsResponse.encode(message).finish()
        };
    }
};
function createBaseAccountUnlockingCoinsRequest() {
    return {
        owner: ""
    };
}
export const AccountUnlockingCoinsRequest = {
    typeUrl: "/osmosis.lockup.AccountUnlockingCoinsRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountUnlockingCoinsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
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
            owner: isSet(object.owner) ? String(object.owner) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAccountUnlockingCoinsRequest();
        message.owner = object.owner ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            owner: object?.owner
        };
    },
    toSDK(message) {
        const obj = {};
        obj.owner = message.owner;
        return obj;
    },
    fromAmino(object) {
        return {
            owner: object.owner
        };
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner;
        return obj;
    },
    fromAminoMsg(object) {
        return AccountUnlockingCoinsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/account-unlocking-coins-request",
            value: AccountUnlockingCoinsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return AccountUnlockingCoinsRequest.decode(message.value);
    },
    toProto(message) {
        return AccountUnlockingCoinsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.AccountUnlockingCoinsRequest",
            value: AccountUnlockingCoinsRequest.encode(message).finish()
        };
    }
};
function createBaseAccountUnlockingCoinsResponse() {
    return {
        coins: []
    };
}
export const AccountUnlockingCoinsResponse = {
    typeUrl: "/osmosis.lockup.AccountUnlockingCoinsResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.coins) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountUnlockingCoinsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
            coins: Array.isArray(object?.coins) ? object.coins.map((e) => Coin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.coins = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAccountUnlockingCoinsResponse();
        message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            coins: Array.isArray(object?.coins) ? object.coins.map((e) => Coin.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? Coin.toSDK(e) : undefined);
        }
        else {
            obj.coins = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            coins: Array.isArray(object?.coins) ? object.coins.map((e) => Coin.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.coins = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return AccountUnlockingCoinsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/account-unlocking-coins-response",
            value: AccountUnlockingCoinsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return AccountUnlockingCoinsResponse.decode(message.value);
    },
    toProto(message) {
        return AccountUnlockingCoinsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.AccountUnlockingCoinsResponse",
            value: AccountUnlockingCoinsResponse.encode(message).finish()
        };
    }
};
function createBaseAccountLockedCoinsRequest() {
    return {
        owner: ""
    };
}
export const AccountLockedCoinsRequest = {
    typeUrl: "/osmosis.lockup.AccountLockedCoinsRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountLockedCoinsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
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
            owner: isSet(object.owner) ? String(object.owner) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAccountLockedCoinsRequest();
        message.owner = object.owner ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            owner: object?.owner
        };
    },
    toSDK(message) {
        const obj = {};
        obj.owner = message.owner;
        return obj;
    },
    fromAmino(object) {
        return {
            owner: object.owner
        };
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner;
        return obj;
    },
    fromAminoMsg(object) {
        return AccountLockedCoinsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/account-locked-coins-request",
            value: AccountLockedCoinsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return AccountLockedCoinsRequest.decode(message.value);
    },
    toProto(message) {
        return AccountLockedCoinsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.AccountLockedCoinsRequest",
            value: AccountLockedCoinsRequest.encode(message).finish()
        };
    }
};
function createBaseAccountLockedCoinsResponse() {
    return {
        coins: []
    };
}
export const AccountLockedCoinsResponse = {
    typeUrl: "/osmosis.lockup.AccountLockedCoinsResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.coins) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountLockedCoinsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
            coins: Array.isArray(object?.coins) ? object.coins.map((e) => Coin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.coins = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAccountLockedCoinsResponse();
        message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            coins: Array.isArray(object?.coins) ? object.coins.map((e) => Coin.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? Coin.toSDK(e) : undefined);
        }
        else {
            obj.coins = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            coins: Array.isArray(object?.coins) ? object.coins.map((e) => Coin.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.coins = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return AccountLockedCoinsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/account-locked-coins-response",
            value: AccountLockedCoinsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return AccountLockedCoinsResponse.decode(message.value);
    },
    toProto(message) {
        return AccountLockedCoinsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.AccountLockedCoinsResponse",
            value: AccountLockedCoinsResponse.encode(message).finish()
        };
    }
};
function createBaseAccountLockedPastTimeRequest() {
    return {
        owner: "",
        timestamp: new Date()
    };
}
export const AccountLockedPastTimeRequest = {
    typeUrl: "/osmosis.lockup.AccountLockedPastTimeRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.timestamp !== undefined) {
            Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountLockedPastTimeRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
            owner: isSet(object.owner) ? String(object.owner) : "",
            timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAccountLockedPastTimeRequest();
        message.owner = object.owner ?? "";
        message.timestamp = object.timestamp ?? undefined;
        return message;
    },
    fromSDK(object) {
        return {
            owner: object?.owner,
            timestamp: object.timestamp ? Timestamp.fromSDK(object.timestamp) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.owner = message.owner;
        message.timestamp !== undefined && (obj.timestamp = message.timestamp ? Timestamp.toSDK(message.timestamp) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            owner: object.owner,
            timestamp: object.timestamp
        };
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner;
        obj.timestamp = message.timestamp;
        return obj;
    },
    fromAminoMsg(object) {
        return AccountLockedPastTimeRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/account-locked-past-time-request",
            value: AccountLockedPastTimeRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return AccountLockedPastTimeRequest.decode(message.value);
    },
    toProto(message) {
        return AccountLockedPastTimeRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.AccountLockedPastTimeRequest",
            value: AccountLockedPastTimeRequest.encode(message).finish()
        };
    }
};
function createBaseAccountLockedPastTimeResponse() {
    return {
        locks: []
    };
}
export const AccountLockedPastTimeResponse = {
    typeUrl: "/osmosis.lockup.AccountLockedPastTimeResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.locks) {
            PeriodLock.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountLockedPastTimeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.locks.push(PeriodLock.decode(reader, reader.uint32()));
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
            locks: Array.isArray(object?.locks) ? object.locks.map((e) => PeriodLock.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.locks) {
            obj.locks = message.locks.map(e => e ? PeriodLock.toJSON(e) : undefined);
        }
        else {
            obj.locks = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAccountLockedPastTimeResponse();
        message.locks = object.locks?.map(e => PeriodLock.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            locks: Array.isArray(object?.locks) ? object.locks.map((e) => PeriodLock.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.locks) {
            obj.locks = message.locks.map(e => e ? PeriodLock.toSDK(e) : undefined);
        }
        else {
            obj.locks = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            locks: Array.isArray(object?.locks) ? object.locks.map((e) => PeriodLock.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.locks) {
            obj.locks = message.locks.map(e => e ? PeriodLock.toAmino(e) : undefined);
        }
        else {
            obj.locks = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return AccountLockedPastTimeResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/account-locked-past-time-response",
            value: AccountLockedPastTimeResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return AccountLockedPastTimeResponse.decode(message.value);
    },
    toProto(message) {
        return AccountLockedPastTimeResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.AccountLockedPastTimeResponse",
            value: AccountLockedPastTimeResponse.encode(message).finish()
        };
    }
};
function createBaseAccountLockedPastTimeNotUnlockingOnlyRequest() {
    return {
        owner: "",
        timestamp: new Date()
    };
}
export const AccountLockedPastTimeNotUnlockingOnlyRequest = {
    typeUrl: "/osmosis.lockup.AccountLockedPastTimeNotUnlockingOnlyRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.timestamp !== undefined) {
            Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountLockedPastTimeNotUnlockingOnlyRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
            owner: isSet(object.owner) ? String(object.owner) : "",
            timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAccountLockedPastTimeNotUnlockingOnlyRequest();
        message.owner = object.owner ?? "";
        message.timestamp = object.timestamp ?? undefined;
        return message;
    },
    fromSDK(object) {
        return {
            owner: object?.owner,
            timestamp: object.timestamp ? Timestamp.fromSDK(object.timestamp) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.owner = message.owner;
        message.timestamp !== undefined && (obj.timestamp = message.timestamp ? Timestamp.toSDK(message.timestamp) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            owner: object.owner,
            timestamp: object.timestamp
        };
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner;
        obj.timestamp = message.timestamp;
        return obj;
    },
    fromAminoMsg(object) {
        return AccountLockedPastTimeNotUnlockingOnlyRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/account-locked-past-time-not-unlocking-only-request",
            value: AccountLockedPastTimeNotUnlockingOnlyRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return AccountLockedPastTimeNotUnlockingOnlyRequest.decode(message.value);
    },
    toProto(message) {
        return AccountLockedPastTimeNotUnlockingOnlyRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.AccountLockedPastTimeNotUnlockingOnlyRequest",
            value: AccountLockedPastTimeNotUnlockingOnlyRequest.encode(message).finish()
        };
    }
};
function createBaseAccountLockedPastTimeNotUnlockingOnlyResponse() {
    return {
        locks: []
    };
}
export const AccountLockedPastTimeNotUnlockingOnlyResponse = {
    typeUrl: "/osmosis.lockup.AccountLockedPastTimeNotUnlockingOnlyResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.locks) {
            PeriodLock.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountLockedPastTimeNotUnlockingOnlyResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.locks.push(PeriodLock.decode(reader, reader.uint32()));
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
            locks: Array.isArray(object?.locks) ? object.locks.map((e) => PeriodLock.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.locks) {
            obj.locks = message.locks.map(e => e ? PeriodLock.toJSON(e) : undefined);
        }
        else {
            obj.locks = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAccountLockedPastTimeNotUnlockingOnlyResponse();
        message.locks = object.locks?.map(e => PeriodLock.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            locks: Array.isArray(object?.locks) ? object.locks.map((e) => PeriodLock.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.locks) {
            obj.locks = message.locks.map(e => e ? PeriodLock.toSDK(e) : undefined);
        }
        else {
            obj.locks = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            locks: Array.isArray(object?.locks) ? object.locks.map((e) => PeriodLock.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.locks) {
            obj.locks = message.locks.map(e => e ? PeriodLock.toAmino(e) : undefined);
        }
        else {
            obj.locks = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return AccountLockedPastTimeNotUnlockingOnlyResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/account-locked-past-time-not-unlocking-only-response",
            value: AccountLockedPastTimeNotUnlockingOnlyResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return AccountLockedPastTimeNotUnlockingOnlyResponse.decode(message.value);
    },
    toProto(message) {
        return AccountLockedPastTimeNotUnlockingOnlyResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.AccountLockedPastTimeNotUnlockingOnlyResponse",
            value: AccountLockedPastTimeNotUnlockingOnlyResponse.encode(message).finish()
        };
    }
};
function createBaseAccountUnlockedBeforeTimeRequest() {
    return {
        owner: "",
        timestamp: new Date()
    };
}
export const AccountUnlockedBeforeTimeRequest = {
    typeUrl: "/osmosis.lockup.AccountUnlockedBeforeTimeRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.timestamp !== undefined) {
            Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountUnlockedBeforeTimeRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
            owner: isSet(object.owner) ? String(object.owner) : "",
            timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAccountUnlockedBeforeTimeRequest();
        message.owner = object.owner ?? "";
        message.timestamp = object.timestamp ?? undefined;
        return message;
    },
    fromSDK(object) {
        return {
            owner: object?.owner,
            timestamp: object.timestamp ? Timestamp.fromSDK(object.timestamp) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.owner = message.owner;
        message.timestamp !== undefined && (obj.timestamp = message.timestamp ? Timestamp.toSDK(message.timestamp) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            owner: object.owner,
            timestamp: object.timestamp
        };
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner;
        obj.timestamp = message.timestamp;
        return obj;
    },
    fromAminoMsg(object) {
        return AccountUnlockedBeforeTimeRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/account-unlocked-before-time-request",
            value: AccountUnlockedBeforeTimeRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return AccountUnlockedBeforeTimeRequest.decode(message.value);
    },
    toProto(message) {
        return AccountUnlockedBeforeTimeRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.AccountUnlockedBeforeTimeRequest",
            value: AccountUnlockedBeforeTimeRequest.encode(message).finish()
        };
    }
};
function createBaseAccountUnlockedBeforeTimeResponse() {
    return {
        locks: []
    };
}
export const AccountUnlockedBeforeTimeResponse = {
    typeUrl: "/osmosis.lockup.AccountUnlockedBeforeTimeResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.locks) {
            PeriodLock.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountUnlockedBeforeTimeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.locks.push(PeriodLock.decode(reader, reader.uint32()));
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
            locks: Array.isArray(object?.locks) ? object.locks.map((e) => PeriodLock.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.locks) {
            obj.locks = message.locks.map(e => e ? PeriodLock.toJSON(e) : undefined);
        }
        else {
            obj.locks = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAccountUnlockedBeforeTimeResponse();
        message.locks = object.locks?.map(e => PeriodLock.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            locks: Array.isArray(object?.locks) ? object.locks.map((e) => PeriodLock.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.locks) {
            obj.locks = message.locks.map(e => e ? PeriodLock.toSDK(e) : undefined);
        }
        else {
            obj.locks = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            locks: Array.isArray(object?.locks) ? object.locks.map((e) => PeriodLock.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.locks) {
            obj.locks = message.locks.map(e => e ? PeriodLock.toAmino(e) : undefined);
        }
        else {
            obj.locks = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return AccountUnlockedBeforeTimeResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/account-unlocked-before-time-response",
            value: AccountUnlockedBeforeTimeResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return AccountUnlockedBeforeTimeResponse.decode(message.value);
    },
    toProto(message) {
        return AccountUnlockedBeforeTimeResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.AccountUnlockedBeforeTimeResponse",
            value: AccountUnlockedBeforeTimeResponse.encode(message).finish()
        };
    }
};
function createBaseAccountLockedPastTimeDenomRequest() {
    return {
        owner: "",
        timestamp: new Date(),
        denom: ""
    };
}
export const AccountLockedPastTimeDenomRequest = {
    typeUrl: "/osmosis.lockup.AccountLockedPastTimeDenomRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.timestamp !== undefined) {
            Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(18).fork()).ldelim();
        }
        if (message.denom !== "") {
            writer.uint32(26).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountLockedPastTimeDenomRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.denom = reader.string();
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
            owner: isSet(object.owner) ? String(object.owner) : "",
            timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined,
            denom: isSet(object.denom) ? String(object.denom) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
        message.denom !== undefined && (obj.denom = message.denom);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAccountLockedPastTimeDenomRequest();
        message.owner = object.owner ?? "";
        message.timestamp = object.timestamp ?? undefined;
        message.denom = object.denom ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            owner: object?.owner,
            timestamp: object.timestamp ? Timestamp.fromSDK(object.timestamp) : undefined,
            denom: object?.denom
        };
    },
    toSDK(message) {
        const obj = {};
        obj.owner = message.owner;
        message.timestamp !== undefined && (obj.timestamp = message.timestamp ? Timestamp.toSDK(message.timestamp) : undefined);
        obj.denom = message.denom;
        return obj;
    },
    fromAmino(object) {
        return {
            owner: object.owner,
            timestamp: object.timestamp,
            denom: object.denom
        };
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner;
        obj.timestamp = message.timestamp;
        obj.denom = message.denom;
        return obj;
    },
    fromAminoMsg(object) {
        return AccountLockedPastTimeDenomRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/account-locked-past-time-denom-request",
            value: AccountLockedPastTimeDenomRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return AccountLockedPastTimeDenomRequest.decode(message.value);
    },
    toProto(message) {
        return AccountLockedPastTimeDenomRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.AccountLockedPastTimeDenomRequest",
            value: AccountLockedPastTimeDenomRequest.encode(message).finish()
        };
    }
};
function createBaseAccountLockedPastTimeDenomResponse() {
    return {
        locks: []
    };
}
export const AccountLockedPastTimeDenomResponse = {
    typeUrl: "/osmosis.lockup.AccountLockedPastTimeDenomResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.locks) {
            PeriodLock.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountLockedPastTimeDenomResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.locks.push(PeriodLock.decode(reader, reader.uint32()));
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
            locks: Array.isArray(object?.locks) ? object.locks.map((e) => PeriodLock.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.locks) {
            obj.locks = message.locks.map(e => e ? PeriodLock.toJSON(e) : undefined);
        }
        else {
            obj.locks = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAccountLockedPastTimeDenomResponse();
        message.locks = object.locks?.map(e => PeriodLock.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            locks: Array.isArray(object?.locks) ? object.locks.map((e) => PeriodLock.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.locks) {
            obj.locks = message.locks.map(e => e ? PeriodLock.toSDK(e) : undefined);
        }
        else {
            obj.locks = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            locks: Array.isArray(object?.locks) ? object.locks.map((e) => PeriodLock.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.locks) {
            obj.locks = message.locks.map(e => e ? PeriodLock.toAmino(e) : undefined);
        }
        else {
            obj.locks = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return AccountLockedPastTimeDenomResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/account-locked-past-time-denom-response",
            value: AccountLockedPastTimeDenomResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return AccountLockedPastTimeDenomResponse.decode(message.value);
    },
    toProto(message) {
        return AccountLockedPastTimeDenomResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.AccountLockedPastTimeDenomResponse",
            value: AccountLockedPastTimeDenomResponse.encode(message).finish()
        };
    }
};
function createBaseLockedDenomRequest() {
    return {
        denom: "",
        duration: Duration.fromPartial({})
    };
}
export const LockedDenomRequest = {
    typeUrl: "/osmosis.lockup.LockedDenomRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.duration !== undefined) {
            Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLockedDenomRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
                    message.duration = Duration.decode(reader, reader.uint32());
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
            denom: isSet(object.denom) ? String(object.denom) : "",
            duration: isSet(object.duration) ? Duration.fromJSON(object.duration) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        message.duration !== undefined && (obj.duration = message.duration ? Duration.toJSON(message.duration) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseLockedDenomRequest();
        message.denom = object.denom ?? "";
        message.duration = object.duration !== undefined && object.duration !== null ? Duration.fromPartial(object.duration) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            denom: object?.denom,
            duration: object.duration ? Duration.fromSDK(object.duration) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.denom = message.denom;
        message.duration !== undefined && (obj.duration = message.duration ? Duration.toSDK(message.duration) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            denom: object.denom,
            duration: object?.duration ? Duration.fromAmino(object.duration) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.denom = message.denom;
        obj.duration = message.duration ? Duration.toAmino(message.duration) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return LockedDenomRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/locked-denom-request",
            value: LockedDenomRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return LockedDenomRequest.decode(message.value);
    },
    toProto(message) {
        return LockedDenomRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.LockedDenomRequest",
            value: LockedDenomRequest.encode(message).finish()
        };
    }
};
function createBaseLockedDenomResponse() {
    return {
        amount: ""
    };
}
export const LockedDenomResponse = {
    typeUrl: "/osmosis.lockup.LockedDenomResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.amount !== "") {
            writer.uint32(10).string(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLockedDenomResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount = reader.string();
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
            amount: isSet(object.amount) ? String(object.amount) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.amount !== undefined && (obj.amount = message.amount);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseLockedDenomResponse();
        message.amount = object.amount ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            amount: object?.amount
        };
    },
    toSDK(message) {
        const obj = {};
        obj.amount = message.amount;
        return obj;
    },
    fromAmino(object) {
        return {
            amount: object.amount
        };
    },
    toAmino(message) {
        const obj = {};
        obj.amount = message.amount;
        return obj;
    },
    fromAminoMsg(object) {
        return LockedDenomResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/locked-denom-response",
            value: LockedDenomResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return LockedDenomResponse.decode(message.value);
    },
    toProto(message) {
        return LockedDenomResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.LockedDenomResponse",
            value: LockedDenomResponse.encode(message).finish()
        };
    }
};
function createBaseLockedRequest() {
    return {
        lock_id: BigInt(0)
    };
}
export const LockedRequest = {
    typeUrl: "/osmosis.lockup.LockedRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.lock_id !== BigInt(0)) {
            writer.uint32(8).uint64(message.lock_id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLockedRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lock_id = reader.uint64();
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
            lock_id: isSet(object.lock_id) ? BigInt(object.lock_id.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.lock_id !== undefined && (obj.lock_id = (message.lock_id || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseLockedRequest();
        message.lock_id = object.lock_id !== undefined && object.lock_id !== null ? BigInt(object.lock_id.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            lock_id: object?.lock_id
        };
    },
    toSDK(message) {
        const obj = {};
        obj.lock_id = message.lock_id;
        return obj;
    },
    fromAmino(object) {
        return {
            lock_id: BigInt(object.lock_id)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.lock_id = message.lock_id ? message.lock_id.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return LockedRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/locked-request",
            value: LockedRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return LockedRequest.decode(message.value);
    },
    toProto(message) {
        return LockedRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.LockedRequest",
            value: LockedRequest.encode(message).finish()
        };
    }
};
function createBaseLockedResponse() {
    return {
        lock: undefined
    };
}
export const LockedResponse = {
    typeUrl: "/osmosis.lockup.LockedResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.lock !== undefined) {
            PeriodLock.encode(message.lock, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLockedResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lock = PeriodLock.decode(reader, reader.uint32());
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
            lock: isSet(object.lock) ? PeriodLock.fromJSON(object.lock) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.lock !== undefined && (obj.lock = message.lock ? PeriodLock.toJSON(message.lock) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseLockedResponse();
        message.lock = object.lock !== undefined && object.lock !== null ? PeriodLock.fromPartial(object.lock) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            lock: object.lock ? PeriodLock.fromSDK(object.lock) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.lock !== undefined && (obj.lock = message.lock ? PeriodLock.toSDK(message.lock) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            lock: object?.lock ? PeriodLock.fromAmino(object.lock) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.lock = message.lock ? PeriodLock.toAmino(message.lock) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return LockedResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/locked-response",
            value: LockedResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return LockedResponse.decode(message.value);
    },
    toProto(message) {
        return LockedResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.LockedResponse",
            value: LockedResponse.encode(message).finish()
        };
    }
};
function createBaseSyntheticLockupsByLockupIDRequest() {
    return {
        lock_id: BigInt(0)
    };
}
export const SyntheticLockupsByLockupIDRequest = {
    typeUrl: "/osmosis.lockup.SyntheticLockupsByLockupIDRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.lock_id !== BigInt(0)) {
            writer.uint32(8).uint64(message.lock_id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSyntheticLockupsByLockupIDRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lock_id = reader.uint64();
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
            lock_id: isSet(object.lock_id) ? BigInt(object.lock_id.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.lock_id !== undefined && (obj.lock_id = (message.lock_id || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSyntheticLockupsByLockupIDRequest();
        message.lock_id = object.lock_id !== undefined && object.lock_id !== null ? BigInt(object.lock_id.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            lock_id: object?.lock_id
        };
    },
    toSDK(message) {
        const obj = {};
        obj.lock_id = message.lock_id;
        return obj;
    },
    fromAmino(object) {
        return {
            lock_id: BigInt(object.lock_id)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.lock_id = message.lock_id ? message.lock_id.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return SyntheticLockupsByLockupIDRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/synthetic-lockups-by-lockup-id-request",
            value: SyntheticLockupsByLockupIDRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return SyntheticLockupsByLockupIDRequest.decode(message.value);
    },
    toProto(message) {
        return SyntheticLockupsByLockupIDRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.SyntheticLockupsByLockupIDRequest",
            value: SyntheticLockupsByLockupIDRequest.encode(message).finish()
        };
    }
};
function createBaseSyntheticLockupsByLockupIDResponse() {
    return {
        synthetic_locks: []
    };
}
export const SyntheticLockupsByLockupIDResponse = {
    typeUrl: "/osmosis.lockup.SyntheticLockupsByLockupIDResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.synthetic_locks) {
            SyntheticLock.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSyntheticLockupsByLockupIDResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.synthetic_locks.push(SyntheticLock.decode(reader, reader.uint32()));
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
            synthetic_locks: Array.isArray(object?.synthetic_locks) ? object.synthetic_locks.map((e) => SyntheticLock.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.synthetic_locks) {
            obj.synthetic_locks = message.synthetic_locks.map(e => e ? SyntheticLock.toJSON(e) : undefined);
        }
        else {
            obj.synthetic_locks = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSyntheticLockupsByLockupIDResponse();
        message.synthetic_locks = object.synthetic_locks?.map(e => SyntheticLock.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            synthetic_locks: Array.isArray(object?.synthetic_locks) ? object.synthetic_locks.map((e) => SyntheticLock.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.synthetic_locks) {
            obj.synthetic_locks = message.synthetic_locks.map(e => e ? SyntheticLock.toSDK(e) : undefined);
        }
        else {
            obj.synthetic_locks = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            synthetic_locks: Array.isArray(object?.synthetic_locks) ? object.synthetic_locks.map((e) => SyntheticLock.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.synthetic_locks) {
            obj.synthetic_locks = message.synthetic_locks.map(e => e ? SyntheticLock.toAmino(e) : undefined);
        }
        else {
            obj.synthetic_locks = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return SyntheticLockupsByLockupIDResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/synthetic-lockups-by-lockup-id-response",
            value: SyntheticLockupsByLockupIDResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return SyntheticLockupsByLockupIDResponse.decode(message.value);
    },
    toProto(message) {
        return SyntheticLockupsByLockupIDResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.SyntheticLockupsByLockupIDResponse",
            value: SyntheticLockupsByLockupIDResponse.encode(message).finish()
        };
    }
};
function createBaseAccountLockedLongerDurationRequest() {
    return {
        owner: "",
        duration: Duration.fromPartial({})
    };
}
export const AccountLockedLongerDurationRequest = {
    typeUrl: "/osmosis.lockup.AccountLockedLongerDurationRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.duration !== undefined) {
            Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountLockedLongerDurationRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.duration = Duration.decode(reader, reader.uint32());
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
            owner: isSet(object.owner) ? String(object.owner) : "",
            duration: isSet(object.duration) ? Duration.fromJSON(object.duration) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.duration !== undefined && (obj.duration = message.duration ? Duration.toJSON(message.duration) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAccountLockedLongerDurationRequest();
        message.owner = object.owner ?? "";
        message.duration = object.duration !== undefined && object.duration !== null ? Duration.fromPartial(object.duration) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            owner: object?.owner,
            duration: object.duration ? Duration.fromSDK(object.duration) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.owner = message.owner;
        message.duration !== undefined && (obj.duration = message.duration ? Duration.toSDK(message.duration) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            owner: object.owner,
            duration: object?.duration ? Duration.fromAmino(object.duration) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner;
        obj.duration = message.duration ? Duration.toAmino(message.duration) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return AccountLockedLongerDurationRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/account-locked-longer-duration-request",
            value: AccountLockedLongerDurationRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return AccountLockedLongerDurationRequest.decode(message.value);
    },
    toProto(message) {
        return AccountLockedLongerDurationRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.AccountLockedLongerDurationRequest",
            value: AccountLockedLongerDurationRequest.encode(message).finish()
        };
    }
};
function createBaseAccountLockedLongerDurationResponse() {
    return {
        locks: []
    };
}
export const AccountLockedLongerDurationResponse = {
    typeUrl: "/osmosis.lockup.AccountLockedLongerDurationResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.locks) {
            PeriodLock.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountLockedLongerDurationResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.locks.push(PeriodLock.decode(reader, reader.uint32()));
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
            locks: Array.isArray(object?.locks) ? object.locks.map((e) => PeriodLock.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.locks) {
            obj.locks = message.locks.map(e => e ? PeriodLock.toJSON(e) : undefined);
        }
        else {
            obj.locks = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAccountLockedLongerDurationResponse();
        message.locks = object.locks?.map(e => PeriodLock.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            locks: Array.isArray(object?.locks) ? object.locks.map((e) => PeriodLock.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.locks) {
            obj.locks = message.locks.map(e => e ? PeriodLock.toSDK(e) : undefined);
        }
        else {
            obj.locks = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            locks: Array.isArray(object?.locks) ? object.locks.map((e) => PeriodLock.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.locks) {
            obj.locks = message.locks.map(e => e ? PeriodLock.toAmino(e) : undefined);
        }
        else {
            obj.locks = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return AccountLockedLongerDurationResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/account-locked-longer-duration-response",
            value: AccountLockedLongerDurationResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return AccountLockedLongerDurationResponse.decode(message.value);
    },
    toProto(message) {
        return AccountLockedLongerDurationResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.AccountLockedLongerDurationResponse",
            value: AccountLockedLongerDurationResponse.encode(message).finish()
        };
    }
};
function createBaseAccountLockedDurationRequest() {
    return {
        owner: "",
        duration: Duration.fromPartial({})
    };
}
export const AccountLockedDurationRequest = {
    typeUrl: "/osmosis.lockup.AccountLockedDurationRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.duration !== undefined) {
            Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountLockedDurationRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.duration = Duration.decode(reader, reader.uint32());
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
            owner: isSet(object.owner) ? String(object.owner) : "",
            duration: isSet(object.duration) ? Duration.fromJSON(object.duration) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.duration !== undefined && (obj.duration = message.duration ? Duration.toJSON(message.duration) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAccountLockedDurationRequest();
        message.owner = object.owner ?? "";
        message.duration = object.duration !== undefined && object.duration !== null ? Duration.fromPartial(object.duration) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            owner: object?.owner,
            duration: object.duration ? Duration.fromSDK(object.duration) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.owner = message.owner;
        message.duration !== undefined && (obj.duration = message.duration ? Duration.toSDK(message.duration) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            owner: object.owner,
            duration: object?.duration ? Duration.fromAmino(object.duration) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner;
        obj.duration = message.duration ? Duration.toAmino(message.duration) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return AccountLockedDurationRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/account-locked-duration-request",
            value: AccountLockedDurationRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return AccountLockedDurationRequest.decode(message.value);
    },
    toProto(message) {
        return AccountLockedDurationRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.AccountLockedDurationRequest",
            value: AccountLockedDurationRequest.encode(message).finish()
        };
    }
};
function createBaseAccountLockedDurationResponse() {
    return {
        locks: []
    };
}
export const AccountLockedDurationResponse = {
    typeUrl: "/osmosis.lockup.AccountLockedDurationResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.locks) {
            PeriodLock.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountLockedDurationResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.locks.push(PeriodLock.decode(reader, reader.uint32()));
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
            locks: Array.isArray(object?.locks) ? object.locks.map((e) => PeriodLock.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.locks) {
            obj.locks = message.locks.map(e => e ? PeriodLock.toJSON(e) : undefined);
        }
        else {
            obj.locks = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAccountLockedDurationResponse();
        message.locks = object.locks?.map(e => PeriodLock.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            locks: Array.isArray(object?.locks) ? object.locks.map((e) => PeriodLock.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.locks) {
            obj.locks = message.locks.map(e => e ? PeriodLock.toSDK(e) : undefined);
        }
        else {
            obj.locks = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            locks: Array.isArray(object?.locks) ? object.locks.map((e) => PeriodLock.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.locks) {
            obj.locks = message.locks.map(e => e ? PeriodLock.toAmino(e) : undefined);
        }
        else {
            obj.locks = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return AccountLockedDurationResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/account-locked-duration-response",
            value: AccountLockedDurationResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return AccountLockedDurationResponse.decode(message.value);
    },
    toProto(message) {
        return AccountLockedDurationResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.AccountLockedDurationResponse",
            value: AccountLockedDurationResponse.encode(message).finish()
        };
    }
};
function createBaseAccountLockedLongerDurationNotUnlockingOnlyRequest() {
    return {
        owner: "",
        duration: Duration.fromPartial({})
    };
}
export const AccountLockedLongerDurationNotUnlockingOnlyRequest = {
    typeUrl: "/osmosis.lockup.AccountLockedLongerDurationNotUnlockingOnlyRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.duration !== undefined) {
            Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountLockedLongerDurationNotUnlockingOnlyRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.duration = Duration.decode(reader, reader.uint32());
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
            owner: isSet(object.owner) ? String(object.owner) : "",
            duration: isSet(object.duration) ? Duration.fromJSON(object.duration) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.duration !== undefined && (obj.duration = message.duration ? Duration.toJSON(message.duration) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAccountLockedLongerDurationNotUnlockingOnlyRequest();
        message.owner = object.owner ?? "";
        message.duration = object.duration !== undefined && object.duration !== null ? Duration.fromPartial(object.duration) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            owner: object?.owner,
            duration: object.duration ? Duration.fromSDK(object.duration) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.owner = message.owner;
        message.duration !== undefined && (obj.duration = message.duration ? Duration.toSDK(message.duration) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            owner: object.owner,
            duration: object?.duration ? Duration.fromAmino(object.duration) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner;
        obj.duration = message.duration ? Duration.toAmino(message.duration) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return AccountLockedLongerDurationNotUnlockingOnlyRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/account-locked-longer-duration-not-unlocking-only-request",
            value: AccountLockedLongerDurationNotUnlockingOnlyRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return AccountLockedLongerDurationNotUnlockingOnlyRequest.decode(message.value);
    },
    toProto(message) {
        return AccountLockedLongerDurationNotUnlockingOnlyRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.AccountLockedLongerDurationNotUnlockingOnlyRequest",
            value: AccountLockedLongerDurationNotUnlockingOnlyRequest.encode(message).finish()
        };
    }
};
function createBaseAccountLockedLongerDurationNotUnlockingOnlyResponse() {
    return {
        locks: []
    };
}
export const AccountLockedLongerDurationNotUnlockingOnlyResponse = {
    typeUrl: "/osmosis.lockup.AccountLockedLongerDurationNotUnlockingOnlyResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.locks) {
            PeriodLock.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountLockedLongerDurationNotUnlockingOnlyResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.locks.push(PeriodLock.decode(reader, reader.uint32()));
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
            locks: Array.isArray(object?.locks) ? object.locks.map((e) => PeriodLock.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.locks) {
            obj.locks = message.locks.map(e => e ? PeriodLock.toJSON(e) : undefined);
        }
        else {
            obj.locks = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAccountLockedLongerDurationNotUnlockingOnlyResponse();
        message.locks = object.locks?.map(e => PeriodLock.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            locks: Array.isArray(object?.locks) ? object.locks.map((e) => PeriodLock.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.locks) {
            obj.locks = message.locks.map(e => e ? PeriodLock.toSDK(e) : undefined);
        }
        else {
            obj.locks = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            locks: Array.isArray(object?.locks) ? object.locks.map((e) => PeriodLock.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.locks) {
            obj.locks = message.locks.map(e => e ? PeriodLock.toAmino(e) : undefined);
        }
        else {
            obj.locks = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return AccountLockedLongerDurationNotUnlockingOnlyResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/account-locked-longer-duration-not-unlocking-only-response",
            value: AccountLockedLongerDurationNotUnlockingOnlyResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return AccountLockedLongerDurationNotUnlockingOnlyResponse.decode(message.value);
    },
    toProto(message) {
        return AccountLockedLongerDurationNotUnlockingOnlyResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.AccountLockedLongerDurationNotUnlockingOnlyResponse",
            value: AccountLockedLongerDurationNotUnlockingOnlyResponse.encode(message).finish()
        };
    }
};
function createBaseAccountLockedLongerDurationDenomRequest() {
    return {
        owner: "",
        duration: Duration.fromPartial({}),
        denom: ""
    };
}
export const AccountLockedLongerDurationDenomRequest = {
    typeUrl: "/osmosis.lockup.AccountLockedLongerDurationDenomRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.duration !== undefined) {
            Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
        }
        if (message.denom !== "") {
            writer.uint32(26).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountLockedLongerDurationDenomRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.duration = Duration.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.denom = reader.string();
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
            owner: isSet(object.owner) ? String(object.owner) : "",
            duration: isSet(object.duration) ? Duration.fromJSON(object.duration) : undefined,
            denom: isSet(object.denom) ? String(object.denom) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.duration !== undefined && (obj.duration = message.duration ? Duration.toJSON(message.duration) : undefined);
        message.denom !== undefined && (obj.denom = message.denom);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAccountLockedLongerDurationDenomRequest();
        message.owner = object.owner ?? "";
        message.duration = object.duration !== undefined && object.duration !== null ? Duration.fromPartial(object.duration) : undefined;
        message.denom = object.denom ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            owner: object?.owner,
            duration: object.duration ? Duration.fromSDK(object.duration) : undefined,
            denom: object?.denom
        };
    },
    toSDK(message) {
        const obj = {};
        obj.owner = message.owner;
        message.duration !== undefined && (obj.duration = message.duration ? Duration.toSDK(message.duration) : undefined);
        obj.denom = message.denom;
        return obj;
    },
    fromAmino(object) {
        return {
            owner: object.owner,
            duration: object?.duration ? Duration.fromAmino(object.duration) : undefined,
            denom: object.denom
        };
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner;
        obj.duration = message.duration ? Duration.toAmino(message.duration) : undefined;
        obj.denom = message.denom;
        return obj;
    },
    fromAminoMsg(object) {
        return AccountLockedLongerDurationDenomRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/account-locked-longer-duration-denom-request",
            value: AccountLockedLongerDurationDenomRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return AccountLockedLongerDurationDenomRequest.decode(message.value);
    },
    toProto(message) {
        return AccountLockedLongerDurationDenomRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.AccountLockedLongerDurationDenomRequest",
            value: AccountLockedLongerDurationDenomRequest.encode(message).finish()
        };
    }
};
function createBaseAccountLockedLongerDurationDenomResponse() {
    return {
        locks: []
    };
}
export const AccountLockedLongerDurationDenomResponse = {
    typeUrl: "/osmosis.lockup.AccountLockedLongerDurationDenomResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.locks) {
            PeriodLock.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountLockedLongerDurationDenomResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.locks.push(PeriodLock.decode(reader, reader.uint32()));
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
            locks: Array.isArray(object?.locks) ? object.locks.map((e) => PeriodLock.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.locks) {
            obj.locks = message.locks.map(e => e ? PeriodLock.toJSON(e) : undefined);
        }
        else {
            obj.locks = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAccountLockedLongerDurationDenomResponse();
        message.locks = object.locks?.map(e => PeriodLock.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            locks: Array.isArray(object?.locks) ? object.locks.map((e) => PeriodLock.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.locks) {
            obj.locks = message.locks.map(e => e ? PeriodLock.toSDK(e) : undefined);
        }
        else {
            obj.locks = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            locks: Array.isArray(object?.locks) ? object.locks.map((e) => PeriodLock.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.locks) {
            obj.locks = message.locks.map(e => e ? PeriodLock.toAmino(e) : undefined);
        }
        else {
            obj.locks = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return AccountLockedLongerDurationDenomResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/account-locked-longer-duration-denom-response",
            value: AccountLockedLongerDurationDenomResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return AccountLockedLongerDurationDenomResponse.decode(message.value);
    },
    toProto(message) {
        return AccountLockedLongerDurationDenomResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.AccountLockedLongerDurationDenomResponse",
            value: AccountLockedLongerDurationDenomResponse.encode(message).finish()
        };
    }
};
function createBaseQueryParamsRequest() {
    return {};
}
export const QueryParamsRequest = {
    typeUrl: "/osmosis.lockup.QueryParamsRequest",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseQueryParamsRequest();
        return message;
    },
    fromSDK(_) {
        return {};
    },
    toSDK(_) {
        const obj = {};
        return obj;
    },
    fromAmino(_) {
        return {};
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryParamsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/query-params-request",
            value: QueryParamsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryParamsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.QueryParamsRequest",
            value: QueryParamsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryParamsResponse() {
    return {
        params: Params.fromPartial({})
    };
}
export const QueryParamsResponse = {
    typeUrl: "/osmosis.lockup.QueryParamsResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
            params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            params: object.params ? Params.fromSDK(object.params) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            params: object?.params ? Params.fromAmino(object.params) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryParamsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/query-params-response",
            value: QueryParamsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryParamsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.QueryParamsResponse",
            value: QueryParamsResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=query.js.map
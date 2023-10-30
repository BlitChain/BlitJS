"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryParamsResponse = exports.QueryParamsRequest = exports.AccountLockedLongerDurationDenomResponse = exports.AccountLockedLongerDurationDenomRequest = exports.AccountLockedLongerDurationNotUnlockingOnlyResponse = exports.AccountLockedLongerDurationNotUnlockingOnlyRequest = exports.AccountLockedDurationResponse = exports.AccountLockedDurationRequest = exports.AccountLockedLongerDurationResponse = exports.AccountLockedLongerDurationRequest = exports.SyntheticLockupsByLockupIDResponse = exports.SyntheticLockupsByLockupIDRequest = exports.LockedResponse = exports.LockedRequest = exports.LockedDenomResponse = exports.LockedDenomRequest = exports.AccountLockedPastTimeDenomResponse = exports.AccountLockedPastTimeDenomRequest = exports.AccountUnlockedBeforeTimeResponse = exports.AccountUnlockedBeforeTimeRequest = exports.AccountLockedPastTimeNotUnlockingOnlyResponse = exports.AccountLockedPastTimeNotUnlockingOnlyRequest = exports.AccountLockedPastTimeResponse = exports.AccountLockedPastTimeRequest = exports.AccountLockedCoinsResponse = exports.AccountLockedCoinsRequest = exports.AccountUnlockingCoinsResponse = exports.AccountUnlockingCoinsRequest = exports.AccountUnlockableCoinsResponse = exports.AccountUnlockableCoinsRequest = exports.ModuleLockedAmountResponse = exports.ModuleLockedAmountRequest = exports.ModuleBalanceResponse = exports.ModuleBalanceRequest = void 0;
//@ts-nocheck
const timestamp_1 = require("../../google/protobuf/timestamp");
const duration_1 = require("../../google/protobuf/duration");
const coin_1 = require("../../cosmos/base/v1beta1/coin");
const lock_1 = require("./lock");
const params_1 = require("./params");
const binary_1 = require("../../binary");
const helpers_1 = require("../../helpers");
function createBaseModuleBalanceRequest() {
    return {};
}
exports.ModuleBalanceRequest = {
    typeUrl: "/osmosis.lockup.ModuleBalanceRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.ModuleBalanceRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/module-balance-request",
            value: exports.ModuleBalanceRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ModuleBalanceRequest.decode(message.value);
    },
    toProto(message) {
        return exports.ModuleBalanceRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.ModuleBalanceRequest",
            value: exports.ModuleBalanceRequest.encode(message).finish()
        };
    }
};
function createBaseModuleBalanceResponse() {
    return {
        coins: []
    };
}
exports.ModuleBalanceResponse = {
    typeUrl: "/osmosis.lockup.ModuleBalanceResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.coins) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModuleBalanceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
            coins: Array.isArray(object?.coins) ? object.coins.map((e) => coin_1.Coin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.coins = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseModuleBalanceResponse();
        message.coins = object.coins?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            coins: Array.isArray(object?.coins) ? object.coins.map((e) => coin_1.Coin.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? coin_1.Coin.toSDK(e) : undefined);
        }
        else {
            obj.coins = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            coins: Array.isArray(object?.coins) ? object.coins.map((e) => coin_1.Coin.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.coins = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ModuleBalanceResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/module-balance-response",
            value: exports.ModuleBalanceResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ModuleBalanceResponse.decode(message.value);
    },
    toProto(message) {
        return exports.ModuleBalanceResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.ModuleBalanceResponse",
            value: exports.ModuleBalanceResponse.encode(message).finish()
        };
    }
};
function createBaseModuleLockedAmountRequest() {
    return {};
}
exports.ModuleLockedAmountRequest = {
    typeUrl: "/osmosis.lockup.ModuleLockedAmountRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.ModuleLockedAmountRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/module-locked-amount-request",
            value: exports.ModuleLockedAmountRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ModuleLockedAmountRequest.decode(message.value);
    },
    toProto(message) {
        return exports.ModuleLockedAmountRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.ModuleLockedAmountRequest",
            value: exports.ModuleLockedAmountRequest.encode(message).finish()
        };
    }
};
function createBaseModuleLockedAmountResponse() {
    return {
        coins: []
    };
}
exports.ModuleLockedAmountResponse = {
    typeUrl: "/osmosis.lockup.ModuleLockedAmountResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.coins) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModuleLockedAmountResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
            coins: Array.isArray(object?.coins) ? object.coins.map((e) => coin_1.Coin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.coins = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseModuleLockedAmountResponse();
        message.coins = object.coins?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            coins: Array.isArray(object?.coins) ? object.coins.map((e) => coin_1.Coin.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? coin_1.Coin.toSDK(e) : undefined);
        }
        else {
            obj.coins = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            coins: Array.isArray(object?.coins) ? object.coins.map((e) => coin_1.Coin.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.coins = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ModuleLockedAmountResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/module-locked-amount-response",
            value: exports.ModuleLockedAmountResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ModuleLockedAmountResponse.decode(message.value);
    },
    toProto(message) {
        return exports.ModuleLockedAmountResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.ModuleLockedAmountResponse",
            value: exports.ModuleLockedAmountResponse.encode(message).finish()
        };
    }
};
function createBaseAccountUnlockableCoinsRequest() {
    return {
        owner: ""
    };
}
exports.AccountUnlockableCoinsRequest = {
    typeUrl: "/osmosis.lockup.AccountUnlockableCoinsRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
            owner: (0, helpers_1.isSet)(object.owner) ? String(object.owner) : ""
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
        return exports.AccountUnlockableCoinsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/account-unlockable-coins-request",
            value: exports.AccountUnlockableCoinsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.AccountUnlockableCoinsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.AccountUnlockableCoinsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.AccountUnlockableCoinsRequest",
            value: exports.AccountUnlockableCoinsRequest.encode(message).finish()
        };
    }
};
function createBaseAccountUnlockableCoinsResponse() {
    return {
        coins: []
    };
}
exports.AccountUnlockableCoinsResponse = {
    typeUrl: "/osmosis.lockup.AccountUnlockableCoinsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.coins) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountUnlockableCoinsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
            coins: Array.isArray(object?.coins) ? object.coins.map((e) => coin_1.Coin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.coins = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAccountUnlockableCoinsResponse();
        message.coins = object.coins?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            coins: Array.isArray(object?.coins) ? object.coins.map((e) => coin_1.Coin.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? coin_1.Coin.toSDK(e) : undefined);
        }
        else {
            obj.coins = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            coins: Array.isArray(object?.coins) ? object.coins.map((e) => coin_1.Coin.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.coins = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.AccountUnlockableCoinsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/account-unlockable-coins-response",
            value: exports.AccountUnlockableCoinsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.AccountUnlockableCoinsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.AccountUnlockableCoinsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.AccountUnlockableCoinsResponse",
            value: exports.AccountUnlockableCoinsResponse.encode(message).finish()
        };
    }
};
function createBaseAccountUnlockingCoinsRequest() {
    return {
        owner: ""
    };
}
exports.AccountUnlockingCoinsRequest = {
    typeUrl: "/osmosis.lockup.AccountUnlockingCoinsRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
            owner: (0, helpers_1.isSet)(object.owner) ? String(object.owner) : ""
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
        return exports.AccountUnlockingCoinsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/account-unlocking-coins-request",
            value: exports.AccountUnlockingCoinsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.AccountUnlockingCoinsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.AccountUnlockingCoinsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.AccountUnlockingCoinsRequest",
            value: exports.AccountUnlockingCoinsRequest.encode(message).finish()
        };
    }
};
function createBaseAccountUnlockingCoinsResponse() {
    return {
        coins: []
    };
}
exports.AccountUnlockingCoinsResponse = {
    typeUrl: "/osmosis.lockup.AccountUnlockingCoinsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.coins) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountUnlockingCoinsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
            coins: Array.isArray(object?.coins) ? object.coins.map((e) => coin_1.Coin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.coins = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAccountUnlockingCoinsResponse();
        message.coins = object.coins?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            coins: Array.isArray(object?.coins) ? object.coins.map((e) => coin_1.Coin.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? coin_1.Coin.toSDK(e) : undefined);
        }
        else {
            obj.coins = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            coins: Array.isArray(object?.coins) ? object.coins.map((e) => coin_1.Coin.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.coins = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.AccountUnlockingCoinsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/account-unlocking-coins-response",
            value: exports.AccountUnlockingCoinsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.AccountUnlockingCoinsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.AccountUnlockingCoinsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.AccountUnlockingCoinsResponse",
            value: exports.AccountUnlockingCoinsResponse.encode(message).finish()
        };
    }
};
function createBaseAccountLockedCoinsRequest() {
    return {
        owner: ""
    };
}
exports.AccountLockedCoinsRequest = {
    typeUrl: "/osmosis.lockup.AccountLockedCoinsRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
            owner: (0, helpers_1.isSet)(object.owner) ? String(object.owner) : ""
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
        return exports.AccountLockedCoinsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/account-locked-coins-request",
            value: exports.AccountLockedCoinsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.AccountLockedCoinsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.AccountLockedCoinsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.AccountLockedCoinsRequest",
            value: exports.AccountLockedCoinsRequest.encode(message).finish()
        };
    }
};
function createBaseAccountLockedCoinsResponse() {
    return {
        coins: []
    };
}
exports.AccountLockedCoinsResponse = {
    typeUrl: "/osmosis.lockup.AccountLockedCoinsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.coins) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountLockedCoinsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
            coins: Array.isArray(object?.coins) ? object.coins.map((e) => coin_1.Coin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.coins = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAccountLockedCoinsResponse();
        message.coins = object.coins?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            coins: Array.isArray(object?.coins) ? object.coins.map((e) => coin_1.Coin.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? coin_1.Coin.toSDK(e) : undefined);
        }
        else {
            obj.coins = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            coins: Array.isArray(object?.coins) ? object.coins.map((e) => coin_1.Coin.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.coins = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.AccountLockedCoinsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/account-locked-coins-response",
            value: exports.AccountLockedCoinsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.AccountLockedCoinsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.AccountLockedCoinsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.AccountLockedCoinsResponse",
            value: exports.AccountLockedCoinsResponse.encode(message).finish()
        };
    }
};
function createBaseAccountLockedPastTimeRequest() {
    return {
        owner: "",
        timestamp: new Date()
    };
}
exports.AccountLockedPastTimeRequest = {
    typeUrl: "/osmosis.lockup.AccountLockedPastTimeRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.timestamp !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.timestamp), writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountLockedPastTimeRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.timestamp = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
            owner: (0, helpers_1.isSet)(object.owner) ? String(object.owner) : "",
            timestamp: (0, helpers_1.isSet)(object.timestamp) ? (0, helpers_1.fromJsonTimestamp)(object.timestamp) : undefined
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
            timestamp: object.timestamp ? timestamp_1.Timestamp.fromSDK(object.timestamp) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.owner = message.owner;
        message.timestamp !== undefined && (obj.timestamp = message.timestamp ? timestamp_1.Timestamp.toSDK(message.timestamp) : undefined);
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
        return exports.AccountLockedPastTimeRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/account-locked-past-time-request",
            value: exports.AccountLockedPastTimeRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.AccountLockedPastTimeRequest.decode(message.value);
    },
    toProto(message) {
        return exports.AccountLockedPastTimeRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.AccountLockedPastTimeRequest",
            value: exports.AccountLockedPastTimeRequest.encode(message).finish()
        };
    }
};
function createBaseAccountLockedPastTimeResponse() {
    return {
        locks: []
    };
}
exports.AccountLockedPastTimeResponse = {
    typeUrl: "/osmosis.lockup.AccountLockedPastTimeResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.locks) {
            lock_1.PeriodLock.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountLockedPastTimeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.locks.push(lock_1.PeriodLock.decode(reader, reader.uint32()));
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
            locks: Array.isArray(object?.locks) ? object.locks.map((e) => lock_1.PeriodLock.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.locks) {
            obj.locks = message.locks.map(e => e ? lock_1.PeriodLock.toJSON(e) : undefined);
        }
        else {
            obj.locks = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAccountLockedPastTimeResponse();
        message.locks = object.locks?.map(e => lock_1.PeriodLock.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            locks: Array.isArray(object?.locks) ? object.locks.map((e) => lock_1.PeriodLock.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.locks) {
            obj.locks = message.locks.map(e => e ? lock_1.PeriodLock.toSDK(e) : undefined);
        }
        else {
            obj.locks = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            locks: Array.isArray(object?.locks) ? object.locks.map((e) => lock_1.PeriodLock.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.locks) {
            obj.locks = message.locks.map(e => e ? lock_1.PeriodLock.toAmino(e) : undefined);
        }
        else {
            obj.locks = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.AccountLockedPastTimeResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/account-locked-past-time-response",
            value: exports.AccountLockedPastTimeResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.AccountLockedPastTimeResponse.decode(message.value);
    },
    toProto(message) {
        return exports.AccountLockedPastTimeResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.AccountLockedPastTimeResponse",
            value: exports.AccountLockedPastTimeResponse.encode(message).finish()
        };
    }
};
function createBaseAccountLockedPastTimeNotUnlockingOnlyRequest() {
    return {
        owner: "",
        timestamp: new Date()
    };
}
exports.AccountLockedPastTimeNotUnlockingOnlyRequest = {
    typeUrl: "/osmosis.lockup.AccountLockedPastTimeNotUnlockingOnlyRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.timestamp !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.timestamp), writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountLockedPastTimeNotUnlockingOnlyRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.timestamp = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
            owner: (0, helpers_1.isSet)(object.owner) ? String(object.owner) : "",
            timestamp: (0, helpers_1.isSet)(object.timestamp) ? (0, helpers_1.fromJsonTimestamp)(object.timestamp) : undefined
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
            timestamp: object.timestamp ? timestamp_1.Timestamp.fromSDK(object.timestamp) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.owner = message.owner;
        message.timestamp !== undefined && (obj.timestamp = message.timestamp ? timestamp_1.Timestamp.toSDK(message.timestamp) : undefined);
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
        return exports.AccountLockedPastTimeNotUnlockingOnlyRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/account-locked-past-time-not-unlocking-only-request",
            value: exports.AccountLockedPastTimeNotUnlockingOnlyRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.AccountLockedPastTimeNotUnlockingOnlyRequest.decode(message.value);
    },
    toProto(message) {
        return exports.AccountLockedPastTimeNotUnlockingOnlyRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.AccountLockedPastTimeNotUnlockingOnlyRequest",
            value: exports.AccountLockedPastTimeNotUnlockingOnlyRequest.encode(message).finish()
        };
    }
};
function createBaseAccountLockedPastTimeNotUnlockingOnlyResponse() {
    return {
        locks: []
    };
}
exports.AccountLockedPastTimeNotUnlockingOnlyResponse = {
    typeUrl: "/osmosis.lockup.AccountLockedPastTimeNotUnlockingOnlyResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.locks) {
            lock_1.PeriodLock.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountLockedPastTimeNotUnlockingOnlyResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.locks.push(lock_1.PeriodLock.decode(reader, reader.uint32()));
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
            locks: Array.isArray(object?.locks) ? object.locks.map((e) => lock_1.PeriodLock.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.locks) {
            obj.locks = message.locks.map(e => e ? lock_1.PeriodLock.toJSON(e) : undefined);
        }
        else {
            obj.locks = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAccountLockedPastTimeNotUnlockingOnlyResponse();
        message.locks = object.locks?.map(e => lock_1.PeriodLock.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            locks: Array.isArray(object?.locks) ? object.locks.map((e) => lock_1.PeriodLock.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.locks) {
            obj.locks = message.locks.map(e => e ? lock_1.PeriodLock.toSDK(e) : undefined);
        }
        else {
            obj.locks = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            locks: Array.isArray(object?.locks) ? object.locks.map((e) => lock_1.PeriodLock.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.locks) {
            obj.locks = message.locks.map(e => e ? lock_1.PeriodLock.toAmino(e) : undefined);
        }
        else {
            obj.locks = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.AccountLockedPastTimeNotUnlockingOnlyResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/account-locked-past-time-not-unlocking-only-response",
            value: exports.AccountLockedPastTimeNotUnlockingOnlyResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.AccountLockedPastTimeNotUnlockingOnlyResponse.decode(message.value);
    },
    toProto(message) {
        return exports.AccountLockedPastTimeNotUnlockingOnlyResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.AccountLockedPastTimeNotUnlockingOnlyResponse",
            value: exports.AccountLockedPastTimeNotUnlockingOnlyResponse.encode(message).finish()
        };
    }
};
function createBaseAccountUnlockedBeforeTimeRequest() {
    return {
        owner: "",
        timestamp: new Date()
    };
}
exports.AccountUnlockedBeforeTimeRequest = {
    typeUrl: "/osmosis.lockup.AccountUnlockedBeforeTimeRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.timestamp !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.timestamp), writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountUnlockedBeforeTimeRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.timestamp = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
            owner: (0, helpers_1.isSet)(object.owner) ? String(object.owner) : "",
            timestamp: (0, helpers_1.isSet)(object.timestamp) ? (0, helpers_1.fromJsonTimestamp)(object.timestamp) : undefined
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
            timestamp: object.timestamp ? timestamp_1.Timestamp.fromSDK(object.timestamp) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.owner = message.owner;
        message.timestamp !== undefined && (obj.timestamp = message.timestamp ? timestamp_1.Timestamp.toSDK(message.timestamp) : undefined);
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
        return exports.AccountUnlockedBeforeTimeRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/account-unlocked-before-time-request",
            value: exports.AccountUnlockedBeforeTimeRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.AccountUnlockedBeforeTimeRequest.decode(message.value);
    },
    toProto(message) {
        return exports.AccountUnlockedBeforeTimeRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.AccountUnlockedBeforeTimeRequest",
            value: exports.AccountUnlockedBeforeTimeRequest.encode(message).finish()
        };
    }
};
function createBaseAccountUnlockedBeforeTimeResponse() {
    return {
        locks: []
    };
}
exports.AccountUnlockedBeforeTimeResponse = {
    typeUrl: "/osmosis.lockup.AccountUnlockedBeforeTimeResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.locks) {
            lock_1.PeriodLock.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountUnlockedBeforeTimeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.locks.push(lock_1.PeriodLock.decode(reader, reader.uint32()));
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
            locks: Array.isArray(object?.locks) ? object.locks.map((e) => lock_1.PeriodLock.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.locks) {
            obj.locks = message.locks.map(e => e ? lock_1.PeriodLock.toJSON(e) : undefined);
        }
        else {
            obj.locks = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAccountUnlockedBeforeTimeResponse();
        message.locks = object.locks?.map(e => lock_1.PeriodLock.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            locks: Array.isArray(object?.locks) ? object.locks.map((e) => lock_1.PeriodLock.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.locks) {
            obj.locks = message.locks.map(e => e ? lock_1.PeriodLock.toSDK(e) : undefined);
        }
        else {
            obj.locks = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            locks: Array.isArray(object?.locks) ? object.locks.map((e) => lock_1.PeriodLock.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.locks) {
            obj.locks = message.locks.map(e => e ? lock_1.PeriodLock.toAmino(e) : undefined);
        }
        else {
            obj.locks = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.AccountUnlockedBeforeTimeResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/account-unlocked-before-time-response",
            value: exports.AccountUnlockedBeforeTimeResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.AccountUnlockedBeforeTimeResponse.decode(message.value);
    },
    toProto(message) {
        return exports.AccountUnlockedBeforeTimeResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.AccountUnlockedBeforeTimeResponse",
            value: exports.AccountUnlockedBeforeTimeResponse.encode(message).finish()
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
exports.AccountLockedPastTimeDenomRequest = {
    typeUrl: "/osmosis.lockup.AccountLockedPastTimeDenomRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.timestamp !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.timestamp), writer.uint32(18).fork()).ldelim();
        }
        if (message.denom !== "") {
            writer.uint32(26).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountLockedPastTimeDenomRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.timestamp = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
            owner: (0, helpers_1.isSet)(object.owner) ? String(object.owner) : "",
            timestamp: (0, helpers_1.isSet)(object.timestamp) ? (0, helpers_1.fromJsonTimestamp)(object.timestamp) : undefined,
            denom: (0, helpers_1.isSet)(object.denom) ? String(object.denom) : ""
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
            timestamp: object.timestamp ? timestamp_1.Timestamp.fromSDK(object.timestamp) : undefined,
            denom: object?.denom
        };
    },
    toSDK(message) {
        const obj = {};
        obj.owner = message.owner;
        message.timestamp !== undefined && (obj.timestamp = message.timestamp ? timestamp_1.Timestamp.toSDK(message.timestamp) : undefined);
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
        return exports.AccountLockedPastTimeDenomRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/account-locked-past-time-denom-request",
            value: exports.AccountLockedPastTimeDenomRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.AccountLockedPastTimeDenomRequest.decode(message.value);
    },
    toProto(message) {
        return exports.AccountLockedPastTimeDenomRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.AccountLockedPastTimeDenomRequest",
            value: exports.AccountLockedPastTimeDenomRequest.encode(message).finish()
        };
    }
};
function createBaseAccountLockedPastTimeDenomResponse() {
    return {
        locks: []
    };
}
exports.AccountLockedPastTimeDenomResponse = {
    typeUrl: "/osmosis.lockup.AccountLockedPastTimeDenomResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.locks) {
            lock_1.PeriodLock.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountLockedPastTimeDenomResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.locks.push(lock_1.PeriodLock.decode(reader, reader.uint32()));
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
            locks: Array.isArray(object?.locks) ? object.locks.map((e) => lock_1.PeriodLock.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.locks) {
            obj.locks = message.locks.map(e => e ? lock_1.PeriodLock.toJSON(e) : undefined);
        }
        else {
            obj.locks = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAccountLockedPastTimeDenomResponse();
        message.locks = object.locks?.map(e => lock_1.PeriodLock.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            locks: Array.isArray(object?.locks) ? object.locks.map((e) => lock_1.PeriodLock.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.locks) {
            obj.locks = message.locks.map(e => e ? lock_1.PeriodLock.toSDK(e) : undefined);
        }
        else {
            obj.locks = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            locks: Array.isArray(object?.locks) ? object.locks.map((e) => lock_1.PeriodLock.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.locks) {
            obj.locks = message.locks.map(e => e ? lock_1.PeriodLock.toAmino(e) : undefined);
        }
        else {
            obj.locks = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.AccountLockedPastTimeDenomResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/account-locked-past-time-denom-response",
            value: exports.AccountLockedPastTimeDenomResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.AccountLockedPastTimeDenomResponse.decode(message.value);
    },
    toProto(message) {
        return exports.AccountLockedPastTimeDenomResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.AccountLockedPastTimeDenomResponse",
            value: exports.AccountLockedPastTimeDenomResponse.encode(message).finish()
        };
    }
};
function createBaseLockedDenomRequest() {
    return {
        denom: "",
        duration: duration_1.Duration.fromPartial({})
    };
}
exports.LockedDenomRequest = {
    typeUrl: "/osmosis.lockup.LockedDenomRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.duration !== undefined) {
            duration_1.Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLockedDenomRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
                    message.duration = duration_1.Duration.decode(reader, reader.uint32());
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
            denom: (0, helpers_1.isSet)(object.denom) ? String(object.denom) : "",
            duration: (0, helpers_1.isSet)(object.duration) ? duration_1.Duration.fromJSON(object.duration) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        message.duration !== undefined && (obj.duration = message.duration ? duration_1.Duration.toJSON(message.duration) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseLockedDenomRequest();
        message.denom = object.denom ?? "";
        message.duration = object.duration !== undefined && object.duration !== null ? duration_1.Duration.fromPartial(object.duration) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            denom: object?.denom,
            duration: object.duration ? duration_1.Duration.fromSDK(object.duration) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.denom = message.denom;
        message.duration !== undefined && (obj.duration = message.duration ? duration_1.Duration.toSDK(message.duration) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            denom: object.denom,
            duration: object?.duration ? duration_1.Duration.fromAmino(object.duration) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.denom = message.denom;
        obj.duration = message.duration ? duration_1.Duration.toAmino(message.duration) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.LockedDenomRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/locked-denom-request",
            value: exports.LockedDenomRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.LockedDenomRequest.decode(message.value);
    },
    toProto(message) {
        return exports.LockedDenomRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.LockedDenomRequest",
            value: exports.LockedDenomRequest.encode(message).finish()
        };
    }
};
function createBaseLockedDenomResponse() {
    return {
        amount: ""
    };
}
exports.LockedDenomResponse = {
    typeUrl: "/osmosis.lockup.LockedDenomResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.amount !== "") {
            writer.uint32(10).string(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
            amount: (0, helpers_1.isSet)(object.amount) ? String(object.amount) : ""
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
        return exports.LockedDenomResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/locked-denom-response",
            value: exports.LockedDenomResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.LockedDenomResponse.decode(message.value);
    },
    toProto(message) {
        return exports.LockedDenomResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.LockedDenomResponse",
            value: exports.LockedDenomResponse.encode(message).finish()
        };
    }
};
function createBaseLockedRequest() {
    return {
        lock_id: BigInt(0)
    };
}
exports.LockedRequest = {
    typeUrl: "/osmosis.lockup.LockedRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.lock_id !== BigInt(0)) {
            writer.uint32(8).uint64(message.lock_id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
            lock_id: (0, helpers_1.isSet)(object.lock_id) ? BigInt(object.lock_id.toString()) : BigInt(0)
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
        return exports.LockedRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/locked-request",
            value: exports.LockedRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.LockedRequest.decode(message.value);
    },
    toProto(message) {
        return exports.LockedRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.LockedRequest",
            value: exports.LockedRequest.encode(message).finish()
        };
    }
};
function createBaseLockedResponse() {
    return {
        lock: undefined
    };
}
exports.LockedResponse = {
    typeUrl: "/osmosis.lockup.LockedResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.lock !== undefined) {
            lock_1.PeriodLock.encode(message.lock, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLockedResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lock = lock_1.PeriodLock.decode(reader, reader.uint32());
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
            lock: (0, helpers_1.isSet)(object.lock) ? lock_1.PeriodLock.fromJSON(object.lock) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.lock !== undefined && (obj.lock = message.lock ? lock_1.PeriodLock.toJSON(message.lock) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseLockedResponse();
        message.lock = object.lock !== undefined && object.lock !== null ? lock_1.PeriodLock.fromPartial(object.lock) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            lock: object.lock ? lock_1.PeriodLock.fromSDK(object.lock) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.lock !== undefined && (obj.lock = message.lock ? lock_1.PeriodLock.toSDK(message.lock) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            lock: object?.lock ? lock_1.PeriodLock.fromAmino(object.lock) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.lock = message.lock ? lock_1.PeriodLock.toAmino(message.lock) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.LockedResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/locked-response",
            value: exports.LockedResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.LockedResponse.decode(message.value);
    },
    toProto(message) {
        return exports.LockedResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.LockedResponse",
            value: exports.LockedResponse.encode(message).finish()
        };
    }
};
function createBaseSyntheticLockupsByLockupIDRequest() {
    return {
        lock_id: BigInt(0)
    };
}
exports.SyntheticLockupsByLockupIDRequest = {
    typeUrl: "/osmosis.lockup.SyntheticLockupsByLockupIDRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.lock_id !== BigInt(0)) {
            writer.uint32(8).uint64(message.lock_id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
            lock_id: (0, helpers_1.isSet)(object.lock_id) ? BigInt(object.lock_id.toString()) : BigInt(0)
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
        return exports.SyntheticLockupsByLockupIDRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/synthetic-lockups-by-lockup-id-request",
            value: exports.SyntheticLockupsByLockupIDRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.SyntheticLockupsByLockupIDRequest.decode(message.value);
    },
    toProto(message) {
        return exports.SyntheticLockupsByLockupIDRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.SyntheticLockupsByLockupIDRequest",
            value: exports.SyntheticLockupsByLockupIDRequest.encode(message).finish()
        };
    }
};
function createBaseSyntheticLockupsByLockupIDResponse() {
    return {
        synthetic_locks: []
    };
}
exports.SyntheticLockupsByLockupIDResponse = {
    typeUrl: "/osmosis.lockup.SyntheticLockupsByLockupIDResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.synthetic_locks) {
            lock_1.SyntheticLock.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSyntheticLockupsByLockupIDResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.synthetic_locks.push(lock_1.SyntheticLock.decode(reader, reader.uint32()));
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
            synthetic_locks: Array.isArray(object?.synthetic_locks) ? object.synthetic_locks.map((e) => lock_1.SyntheticLock.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.synthetic_locks) {
            obj.synthetic_locks = message.synthetic_locks.map(e => e ? lock_1.SyntheticLock.toJSON(e) : undefined);
        }
        else {
            obj.synthetic_locks = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSyntheticLockupsByLockupIDResponse();
        message.synthetic_locks = object.synthetic_locks?.map(e => lock_1.SyntheticLock.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            synthetic_locks: Array.isArray(object?.synthetic_locks) ? object.synthetic_locks.map((e) => lock_1.SyntheticLock.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.synthetic_locks) {
            obj.synthetic_locks = message.synthetic_locks.map(e => e ? lock_1.SyntheticLock.toSDK(e) : undefined);
        }
        else {
            obj.synthetic_locks = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            synthetic_locks: Array.isArray(object?.synthetic_locks) ? object.synthetic_locks.map((e) => lock_1.SyntheticLock.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.synthetic_locks) {
            obj.synthetic_locks = message.synthetic_locks.map(e => e ? lock_1.SyntheticLock.toAmino(e) : undefined);
        }
        else {
            obj.synthetic_locks = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SyntheticLockupsByLockupIDResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/synthetic-lockups-by-lockup-id-response",
            value: exports.SyntheticLockupsByLockupIDResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.SyntheticLockupsByLockupIDResponse.decode(message.value);
    },
    toProto(message) {
        return exports.SyntheticLockupsByLockupIDResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.SyntheticLockupsByLockupIDResponse",
            value: exports.SyntheticLockupsByLockupIDResponse.encode(message).finish()
        };
    }
};
function createBaseAccountLockedLongerDurationRequest() {
    return {
        owner: "",
        duration: duration_1.Duration.fromPartial({})
    };
}
exports.AccountLockedLongerDurationRequest = {
    typeUrl: "/osmosis.lockup.AccountLockedLongerDurationRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.duration !== undefined) {
            duration_1.Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountLockedLongerDurationRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.duration = duration_1.Duration.decode(reader, reader.uint32());
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
            owner: (0, helpers_1.isSet)(object.owner) ? String(object.owner) : "",
            duration: (0, helpers_1.isSet)(object.duration) ? duration_1.Duration.fromJSON(object.duration) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.duration !== undefined && (obj.duration = message.duration ? duration_1.Duration.toJSON(message.duration) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAccountLockedLongerDurationRequest();
        message.owner = object.owner ?? "";
        message.duration = object.duration !== undefined && object.duration !== null ? duration_1.Duration.fromPartial(object.duration) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            owner: object?.owner,
            duration: object.duration ? duration_1.Duration.fromSDK(object.duration) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.owner = message.owner;
        message.duration !== undefined && (obj.duration = message.duration ? duration_1.Duration.toSDK(message.duration) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            owner: object.owner,
            duration: object?.duration ? duration_1.Duration.fromAmino(object.duration) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner;
        obj.duration = message.duration ? duration_1.Duration.toAmino(message.duration) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.AccountLockedLongerDurationRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/account-locked-longer-duration-request",
            value: exports.AccountLockedLongerDurationRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.AccountLockedLongerDurationRequest.decode(message.value);
    },
    toProto(message) {
        return exports.AccountLockedLongerDurationRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.AccountLockedLongerDurationRequest",
            value: exports.AccountLockedLongerDurationRequest.encode(message).finish()
        };
    }
};
function createBaseAccountLockedLongerDurationResponse() {
    return {
        locks: []
    };
}
exports.AccountLockedLongerDurationResponse = {
    typeUrl: "/osmosis.lockup.AccountLockedLongerDurationResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.locks) {
            lock_1.PeriodLock.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountLockedLongerDurationResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.locks.push(lock_1.PeriodLock.decode(reader, reader.uint32()));
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
            locks: Array.isArray(object?.locks) ? object.locks.map((e) => lock_1.PeriodLock.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.locks) {
            obj.locks = message.locks.map(e => e ? lock_1.PeriodLock.toJSON(e) : undefined);
        }
        else {
            obj.locks = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAccountLockedLongerDurationResponse();
        message.locks = object.locks?.map(e => lock_1.PeriodLock.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            locks: Array.isArray(object?.locks) ? object.locks.map((e) => lock_1.PeriodLock.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.locks) {
            obj.locks = message.locks.map(e => e ? lock_1.PeriodLock.toSDK(e) : undefined);
        }
        else {
            obj.locks = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            locks: Array.isArray(object?.locks) ? object.locks.map((e) => lock_1.PeriodLock.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.locks) {
            obj.locks = message.locks.map(e => e ? lock_1.PeriodLock.toAmino(e) : undefined);
        }
        else {
            obj.locks = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.AccountLockedLongerDurationResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/account-locked-longer-duration-response",
            value: exports.AccountLockedLongerDurationResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.AccountLockedLongerDurationResponse.decode(message.value);
    },
    toProto(message) {
        return exports.AccountLockedLongerDurationResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.AccountLockedLongerDurationResponse",
            value: exports.AccountLockedLongerDurationResponse.encode(message).finish()
        };
    }
};
function createBaseAccountLockedDurationRequest() {
    return {
        owner: "",
        duration: duration_1.Duration.fromPartial({})
    };
}
exports.AccountLockedDurationRequest = {
    typeUrl: "/osmosis.lockup.AccountLockedDurationRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.duration !== undefined) {
            duration_1.Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountLockedDurationRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.duration = duration_1.Duration.decode(reader, reader.uint32());
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
            owner: (0, helpers_1.isSet)(object.owner) ? String(object.owner) : "",
            duration: (0, helpers_1.isSet)(object.duration) ? duration_1.Duration.fromJSON(object.duration) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.duration !== undefined && (obj.duration = message.duration ? duration_1.Duration.toJSON(message.duration) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAccountLockedDurationRequest();
        message.owner = object.owner ?? "";
        message.duration = object.duration !== undefined && object.duration !== null ? duration_1.Duration.fromPartial(object.duration) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            owner: object?.owner,
            duration: object.duration ? duration_1.Duration.fromSDK(object.duration) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.owner = message.owner;
        message.duration !== undefined && (obj.duration = message.duration ? duration_1.Duration.toSDK(message.duration) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            owner: object.owner,
            duration: object?.duration ? duration_1.Duration.fromAmino(object.duration) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner;
        obj.duration = message.duration ? duration_1.Duration.toAmino(message.duration) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.AccountLockedDurationRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/account-locked-duration-request",
            value: exports.AccountLockedDurationRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.AccountLockedDurationRequest.decode(message.value);
    },
    toProto(message) {
        return exports.AccountLockedDurationRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.AccountLockedDurationRequest",
            value: exports.AccountLockedDurationRequest.encode(message).finish()
        };
    }
};
function createBaseAccountLockedDurationResponse() {
    return {
        locks: []
    };
}
exports.AccountLockedDurationResponse = {
    typeUrl: "/osmosis.lockup.AccountLockedDurationResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.locks) {
            lock_1.PeriodLock.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountLockedDurationResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.locks.push(lock_1.PeriodLock.decode(reader, reader.uint32()));
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
            locks: Array.isArray(object?.locks) ? object.locks.map((e) => lock_1.PeriodLock.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.locks) {
            obj.locks = message.locks.map(e => e ? lock_1.PeriodLock.toJSON(e) : undefined);
        }
        else {
            obj.locks = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAccountLockedDurationResponse();
        message.locks = object.locks?.map(e => lock_1.PeriodLock.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            locks: Array.isArray(object?.locks) ? object.locks.map((e) => lock_1.PeriodLock.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.locks) {
            obj.locks = message.locks.map(e => e ? lock_1.PeriodLock.toSDK(e) : undefined);
        }
        else {
            obj.locks = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            locks: Array.isArray(object?.locks) ? object.locks.map((e) => lock_1.PeriodLock.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.locks) {
            obj.locks = message.locks.map(e => e ? lock_1.PeriodLock.toAmino(e) : undefined);
        }
        else {
            obj.locks = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.AccountLockedDurationResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/account-locked-duration-response",
            value: exports.AccountLockedDurationResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.AccountLockedDurationResponse.decode(message.value);
    },
    toProto(message) {
        return exports.AccountLockedDurationResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.AccountLockedDurationResponse",
            value: exports.AccountLockedDurationResponse.encode(message).finish()
        };
    }
};
function createBaseAccountLockedLongerDurationNotUnlockingOnlyRequest() {
    return {
        owner: "",
        duration: duration_1.Duration.fromPartial({})
    };
}
exports.AccountLockedLongerDurationNotUnlockingOnlyRequest = {
    typeUrl: "/osmosis.lockup.AccountLockedLongerDurationNotUnlockingOnlyRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.duration !== undefined) {
            duration_1.Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountLockedLongerDurationNotUnlockingOnlyRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.duration = duration_1.Duration.decode(reader, reader.uint32());
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
            owner: (0, helpers_1.isSet)(object.owner) ? String(object.owner) : "",
            duration: (0, helpers_1.isSet)(object.duration) ? duration_1.Duration.fromJSON(object.duration) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.duration !== undefined && (obj.duration = message.duration ? duration_1.Duration.toJSON(message.duration) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAccountLockedLongerDurationNotUnlockingOnlyRequest();
        message.owner = object.owner ?? "";
        message.duration = object.duration !== undefined && object.duration !== null ? duration_1.Duration.fromPartial(object.duration) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            owner: object?.owner,
            duration: object.duration ? duration_1.Duration.fromSDK(object.duration) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.owner = message.owner;
        message.duration !== undefined && (obj.duration = message.duration ? duration_1.Duration.toSDK(message.duration) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            owner: object.owner,
            duration: object?.duration ? duration_1.Duration.fromAmino(object.duration) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner;
        obj.duration = message.duration ? duration_1.Duration.toAmino(message.duration) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.AccountLockedLongerDurationNotUnlockingOnlyRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/account-locked-longer-duration-not-unlocking-only-request",
            value: exports.AccountLockedLongerDurationNotUnlockingOnlyRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.AccountLockedLongerDurationNotUnlockingOnlyRequest.decode(message.value);
    },
    toProto(message) {
        return exports.AccountLockedLongerDurationNotUnlockingOnlyRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.AccountLockedLongerDurationNotUnlockingOnlyRequest",
            value: exports.AccountLockedLongerDurationNotUnlockingOnlyRequest.encode(message).finish()
        };
    }
};
function createBaseAccountLockedLongerDurationNotUnlockingOnlyResponse() {
    return {
        locks: []
    };
}
exports.AccountLockedLongerDurationNotUnlockingOnlyResponse = {
    typeUrl: "/osmosis.lockup.AccountLockedLongerDurationNotUnlockingOnlyResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.locks) {
            lock_1.PeriodLock.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountLockedLongerDurationNotUnlockingOnlyResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.locks.push(lock_1.PeriodLock.decode(reader, reader.uint32()));
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
            locks: Array.isArray(object?.locks) ? object.locks.map((e) => lock_1.PeriodLock.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.locks) {
            obj.locks = message.locks.map(e => e ? lock_1.PeriodLock.toJSON(e) : undefined);
        }
        else {
            obj.locks = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAccountLockedLongerDurationNotUnlockingOnlyResponse();
        message.locks = object.locks?.map(e => lock_1.PeriodLock.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            locks: Array.isArray(object?.locks) ? object.locks.map((e) => lock_1.PeriodLock.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.locks) {
            obj.locks = message.locks.map(e => e ? lock_1.PeriodLock.toSDK(e) : undefined);
        }
        else {
            obj.locks = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            locks: Array.isArray(object?.locks) ? object.locks.map((e) => lock_1.PeriodLock.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.locks) {
            obj.locks = message.locks.map(e => e ? lock_1.PeriodLock.toAmino(e) : undefined);
        }
        else {
            obj.locks = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.AccountLockedLongerDurationNotUnlockingOnlyResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/account-locked-longer-duration-not-unlocking-only-response",
            value: exports.AccountLockedLongerDurationNotUnlockingOnlyResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.AccountLockedLongerDurationNotUnlockingOnlyResponse.decode(message.value);
    },
    toProto(message) {
        return exports.AccountLockedLongerDurationNotUnlockingOnlyResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.AccountLockedLongerDurationNotUnlockingOnlyResponse",
            value: exports.AccountLockedLongerDurationNotUnlockingOnlyResponse.encode(message).finish()
        };
    }
};
function createBaseAccountLockedLongerDurationDenomRequest() {
    return {
        owner: "",
        duration: duration_1.Duration.fromPartial({}),
        denom: ""
    };
}
exports.AccountLockedLongerDurationDenomRequest = {
    typeUrl: "/osmosis.lockup.AccountLockedLongerDurationDenomRequest",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.duration !== undefined) {
            duration_1.Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
        }
        if (message.denom !== "") {
            writer.uint32(26).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountLockedLongerDurationDenomRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.duration = duration_1.Duration.decode(reader, reader.uint32());
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
            owner: (0, helpers_1.isSet)(object.owner) ? String(object.owner) : "",
            duration: (0, helpers_1.isSet)(object.duration) ? duration_1.Duration.fromJSON(object.duration) : undefined,
            denom: (0, helpers_1.isSet)(object.denom) ? String(object.denom) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.duration !== undefined && (obj.duration = message.duration ? duration_1.Duration.toJSON(message.duration) : undefined);
        message.denom !== undefined && (obj.denom = message.denom);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAccountLockedLongerDurationDenomRequest();
        message.owner = object.owner ?? "";
        message.duration = object.duration !== undefined && object.duration !== null ? duration_1.Duration.fromPartial(object.duration) : undefined;
        message.denom = object.denom ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            owner: object?.owner,
            duration: object.duration ? duration_1.Duration.fromSDK(object.duration) : undefined,
            denom: object?.denom
        };
    },
    toSDK(message) {
        const obj = {};
        obj.owner = message.owner;
        message.duration !== undefined && (obj.duration = message.duration ? duration_1.Duration.toSDK(message.duration) : undefined);
        obj.denom = message.denom;
        return obj;
    },
    fromAmino(object) {
        return {
            owner: object.owner,
            duration: object?.duration ? duration_1.Duration.fromAmino(object.duration) : undefined,
            denom: object.denom
        };
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner;
        obj.duration = message.duration ? duration_1.Duration.toAmino(message.duration) : undefined;
        obj.denom = message.denom;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.AccountLockedLongerDurationDenomRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/account-locked-longer-duration-denom-request",
            value: exports.AccountLockedLongerDurationDenomRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.AccountLockedLongerDurationDenomRequest.decode(message.value);
    },
    toProto(message) {
        return exports.AccountLockedLongerDurationDenomRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.AccountLockedLongerDurationDenomRequest",
            value: exports.AccountLockedLongerDurationDenomRequest.encode(message).finish()
        };
    }
};
function createBaseAccountLockedLongerDurationDenomResponse() {
    return {
        locks: []
    };
}
exports.AccountLockedLongerDurationDenomResponse = {
    typeUrl: "/osmosis.lockup.AccountLockedLongerDurationDenomResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.locks) {
            lock_1.PeriodLock.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccountLockedLongerDurationDenomResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.locks.push(lock_1.PeriodLock.decode(reader, reader.uint32()));
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
            locks: Array.isArray(object?.locks) ? object.locks.map((e) => lock_1.PeriodLock.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.locks) {
            obj.locks = message.locks.map(e => e ? lock_1.PeriodLock.toJSON(e) : undefined);
        }
        else {
            obj.locks = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAccountLockedLongerDurationDenomResponse();
        message.locks = object.locks?.map(e => lock_1.PeriodLock.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            locks: Array.isArray(object?.locks) ? object.locks.map((e) => lock_1.PeriodLock.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.locks) {
            obj.locks = message.locks.map(e => e ? lock_1.PeriodLock.toSDK(e) : undefined);
        }
        else {
            obj.locks = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            locks: Array.isArray(object?.locks) ? object.locks.map((e) => lock_1.PeriodLock.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.locks) {
            obj.locks = message.locks.map(e => e ? lock_1.PeriodLock.toAmino(e) : undefined);
        }
        else {
            obj.locks = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.AccountLockedLongerDurationDenomResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/account-locked-longer-duration-denom-response",
            value: exports.AccountLockedLongerDurationDenomResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.AccountLockedLongerDurationDenomResponse.decode(message.value);
    },
    toProto(message) {
        return exports.AccountLockedLongerDurationDenomResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.AccountLockedLongerDurationDenomResponse",
            value: exports.AccountLockedLongerDurationDenomResponse.encode(message).finish()
        };
    }
};
function createBaseQueryParamsRequest() {
    return {};
}
exports.QueryParamsRequest = {
    typeUrl: "/osmosis.lockup.QueryParamsRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.QueryParamsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/query-params-request",
            value: exports.QueryParamsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryParamsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.QueryParamsRequest",
            value: exports.QueryParamsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryParamsResponse() {
    return {
        params: params_1.Params.fromPartial({})
    };
}
exports.QueryParamsResponse = {
    typeUrl: "/osmosis.lockup.QueryParamsResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = params_1.Params.decode(reader, reader.uint32());
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
            params: (0, helpers_1.isSet)(object.params) ? params_1.Params.fromJSON(object.params) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? params_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        message.params = object.params !== undefined && object.params !== null ? params_1.Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            params: object.params ? params_1.Params.fromSDK(object.params) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? params_1.Params.toSDK(message.params) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            params: object?.params ? params_1.Params.fromAmino(object.params) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? params_1.Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryParamsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/query-params-response",
            value: exports.QueryParamsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryParamsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.QueryParamsResponse",
            value: exports.QueryParamsResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=query.js.map
//@ts-nocheck
import { Duration } from "../../google/protobuf/duration";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { PeriodLock } from "./lock";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
function createBaseMsgLockTokens() {
    return {
        owner: "",
        duration: Duration.fromPartial({}),
        coins: []
    };
}
export const MsgLockTokens = {
    typeUrl: "/osmosis.lockup.MsgLockTokens",
    encode(message, writer = BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.duration !== undefined) {
            Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.coins) {
            Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgLockTokens();
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
            owner: isSet(object.owner) ? String(object.owner) : "",
            duration: isSet(object.duration) ? Duration.fromJSON(object.duration) : undefined,
            coins: Array.isArray(object?.coins) ? object.coins.map((e) => Coin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.duration !== undefined && (obj.duration = message.duration ? Duration.toJSON(message.duration) : undefined);
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.coins = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgLockTokens();
        message.owner = object.owner ?? "";
        message.duration = object.duration !== undefined && object.duration !== null ? Duration.fromPartial(object.duration) : undefined;
        message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            owner: object?.owner,
            duration: object.duration ? Duration.fromSDK(object.duration) : undefined,
            coins: Array.isArray(object?.coins) ? object.coins.map((e) => Coin.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.owner = message.owner;
        message.duration !== undefined && (obj.duration = message.duration ? Duration.toSDK(message.duration) : undefined);
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
            owner: object.owner,
            duration: object?.duration ? Duration.fromAmino(object.duration) : undefined,
            coins: Array.isArray(object?.coins) ? object.coins.map((e) => Coin.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner;
        obj.duration = message.duration ? Duration.toAmino(message.duration) : undefined;
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.coins = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return MsgLockTokens.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/lock-tokens",
            value: MsgLockTokens.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgLockTokens.decode(message.value);
    },
    toProto(message) {
        return MsgLockTokens.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.MsgLockTokens",
            value: MsgLockTokens.encode(message).finish()
        };
    }
};
function createBaseMsgLockTokensResponse() {
    return {
        ID: BigInt(0)
    };
}
export const MsgLockTokensResponse = {
    typeUrl: "/osmosis.lockup.MsgLockTokensResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.ID !== BigInt(0)) {
            writer.uint32(8).uint64(message.ID);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgLockTokensResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ID = reader.uint64();
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
            ID: isSet(object.ID) ? BigInt(object.ID.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.ID !== undefined && (obj.ID = (message.ID || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgLockTokensResponse();
        message.ID = object.ID !== undefined && object.ID !== null ? BigInt(object.ID.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            ID: object?.ID
        };
    },
    toSDK(message) {
        const obj = {};
        obj.ID = message.ID;
        return obj;
    },
    fromAmino(object) {
        return {
            ID: BigInt(object.ID)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.ID = message.ID ? message.ID.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgLockTokensResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/lock-tokens-response",
            value: MsgLockTokensResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgLockTokensResponse.decode(message.value);
    },
    toProto(message) {
        return MsgLockTokensResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.MsgLockTokensResponse",
            value: MsgLockTokensResponse.encode(message).finish()
        };
    }
};
function createBaseMsgBeginUnlockingAll() {
    return {
        owner: ""
    };
}
export const MsgBeginUnlockingAll = {
    typeUrl: "/osmosis.lockup.MsgBeginUnlockingAll",
    encode(message, writer = BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBeginUnlockingAll();
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
        const message = createBaseMsgBeginUnlockingAll();
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
        return MsgBeginUnlockingAll.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/begin-unlock-tokens",
            value: MsgBeginUnlockingAll.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgBeginUnlockingAll.decode(message.value);
    },
    toProto(message) {
        return MsgBeginUnlockingAll.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.MsgBeginUnlockingAll",
            value: MsgBeginUnlockingAll.encode(message).finish()
        };
    }
};
function createBaseMsgBeginUnlockingAllResponse() {
    return {
        unlocks: []
    };
}
export const MsgBeginUnlockingAllResponse = {
    typeUrl: "/osmosis.lockup.MsgBeginUnlockingAllResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.unlocks) {
            PeriodLock.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBeginUnlockingAllResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.unlocks.push(PeriodLock.decode(reader, reader.uint32()));
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
            unlocks: Array.isArray(object?.unlocks) ? object.unlocks.map((e) => PeriodLock.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.unlocks) {
            obj.unlocks = message.unlocks.map(e => e ? PeriodLock.toJSON(e) : undefined);
        }
        else {
            obj.unlocks = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgBeginUnlockingAllResponse();
        message.unlocks = object.unlocks?.map(e => PeriodLock.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            unlocks: Array.isArray(object?.unlocks) ? object.unlocks.map((e) => PeriodLock.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.unlocks) {
            obj.unlocks = message.unlocks.map(e => e ? PeriodLock.toSDK(e) : undefined);
        }
        else {
            obj.unlocks = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            unlocks: Array.isArray(object?.unlocks) ? object.unlocks.map((e) => PeriodLock.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.unlocks) {
            obj.unlocks = message.unlocks.map(e => e ? PeriodLock.toAmino(e) : undefined);
        }
        else {
            obj.unlocks = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return MsgBeginUnlockingAllResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/begin-unlocking-all-response",
            value: MsgBeginUnlockingAllResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgBeginUnlockingAllResponse.decode(message.value);
    },
    toProto(message) {
        return MsgBeginUnlockingAllResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.MsgBeginUnlockingAllResponse",
            value: MsgBeginUnlockingAllResponse.encode(message).finish()
        };
    }
};
function createBaseMsgBeginUnlocking() {
    return {
        owner: "",
        ID: BigInt(0),
        coins: []
    };
}
export const MsgBeginUnlocking = {
    typeUrl: "/osmosis.lockup.MsgBeginUnlocking",
    encode(message, writer = BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.ID !== BigInt(0)) {
            writer.uint32(16).uint64(message.ID);
        }
        for (const v of message.coins) {
            Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBeginUnlocking();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.ID = reader.uint64();
                    break;
                case 3:
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
            owner: isSet(object.owner) ? String(object.owner) : "",
            ID: isSet(object.ID) ? BigInt(object.ID.toString()) : BigInt(0),
            coins: Array.isArray(object?.coins) ? object.coins.map((e) => Coin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.ID !== undefined && (obj.ID = (message.ID || BigInt(0)).toString());
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.coins = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgBeginUnlocking();
        message.owner = object.owner ?? "";
        message.ID = object.ID !== undefined && object.ID !== null ? BigInt(object.ID.toString()) : BigInt(0);
        message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            owner: object?.owner,
            ID: object?.ID,
            coins: Array.isArray(object?.coins) ? object.coins.map((e) => Coin.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.owner = message.owner;
        obj.ID = message.ID;
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
            owner: object.owner,
            ID: BigInt(object.ID),
            coins: Array.isArray(object?.coins) ? object.coins.map((e) => Coin.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner;
        obj.ID = message.ID ? message.ID.toString() : undefined;
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.coins = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return MsgBeginUnlocking.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/begin-unlock-period-lock",
            value: MsgBeginUnlocking.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgBeginUnlocking.decode(message.value);
    },
    toProto(message) {
        return MsgBeginUnlocking.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.MsgBeginUnlocking",
            value: MsgBeginUnlocking.encode(message).finish()
        };
    }
};
function createBaseMsgBeginUnlockingResponse() {
    return {
        success: false
    };
}
export const MsgBeginUnlockingResponse = {
    typeUrl: "/osmosis.lockup.MsgBeginUnlockingResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.success === true) {
            writer.uint32(8).bool(message.success);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBeginUnlockingResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.success = reader.bool();
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
            success: isSet(object.success) ? Boolean(object.success) : false
        };
    },
    toJSON(message) {
        const obj = {};
        message.success !== undefined && (obj.success = message.success);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgBeginUnlockingResponse();
        message.success = object.success ?? false;
        return message;
    },
    fromSDK(object) {
        return {
            success: object?.success
        };
    },
    toSDK(message) {
        const obj = {};
        obj.success = message.success;
        return obj;
    },
    fromAmino(object) {
        return {
            success: object.success
        };
    },
    toAmino(message) {
        const obj = {};
        obj.success = message.success;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgBeginUnlockingResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/begin-unlocking-response",
            value: MsgBeginUnlockingResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgBeginUnlockingResponse.decode(message.value);
    },
    toProto(message) {
        return MsgBeginUnlockingResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.MsgBeginUnlockingResponse",
            value: MsgBeginUnlockingResponse.encode(message).finish()
        };
    }
};
function createBaseMsgExtendLockup() {
    return {
        owner: "",
        ID: BigInt(0),
        duration: Duration.fromPartial({})
    };
}
export const MsgExtendLockup = {
    typeUrl: "/osmosis.lockup.MsgExtendLockup",
    encode(message, writer = BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.ID !== BigInt(0)) {
            writer.uint32(16).uint64(message.ID);
        }
        if (message.duration !== undefined) {
            Duration.encode(message.duration, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgExtendLockup();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.ID = reader.uint64();
                    break;
                case 3:
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
            ID: isSet(object.ID) ? BigInt(object.ID.toString()) : BigInt(0),
            duration: isSet(object.duration) ? Duration.fromJSON(object.duration) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.ID !== undefined && (obj.ID = (message.ID || BigInt(0)).toString());
        message.duration !== undefined && (obj.duration = message.duration ? Duration.toJSON(message.duration) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgExtendLockup();
        message.owner = object.owner ?? "";
        message.ID = object.ID !== undefined && object.ID !== null ? BigInt(object.ID.toString()) : BigInt(0);
        message.duration = object.duration !== undefined && object.duration !== null ? Duration.fromPartial(object.duration) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            owner: object?.owner,
            ID: object?.ID,
            duration: object.duration ? Duration.fromSDK(object.duration) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.owner = message.owner;
        obj.ID = message.ID;
        message.duration !== undefined && (obj.duration = message.duration ? Duration.toSDK(message.duration) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            owner: object.owner,
            ID: BigInt(object.ID),
            duration: object?.duration ? Duration.fromAmino(object.duration) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner;
        obj.ID = message.ID ? message.ID.toString() : undefined;
        obj.duration = message.duration ? Duration.toAmino(message.duration) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgExtendLockup.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/extend-lockup",
            value: MsgExtendLockup.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgExtendLockup.decode(message.value);
    },
    toProto(message) {
        return MsgExtendLockup.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.MsgExtendLockup",
            value: MsgExtendLockup.encode(message).finish()
        };
    }
};
function createBaseMsgExtendLockupResponse() {
    return {
        success: false
    };
}
export const MsgExtendLockupResponse = {
    typeUrl: "/osmosis.lockup.MsgExtendLockupResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.success === true) {
            writer.uint32(8).bool(message.success);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgExtendLockupResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.success = reader.bool();
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
            success: isSet(object.success) ? Boolean(object.success) : false
        };
    },
    toJSON(message) {
        const obj = {};
        message.success !== undefined && (obj.success = message.success);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgExtendLockupResponse();
        message.success = object.success ?? false;
        return message;
    },
    fromSDK(object) {
        return {
            success: object?.success
        };
    },
    toSDK(message) {
        const obj = {};
        obj.success = message.success;
        return obj;
    },
    fromAmino(object) {
        return {
            success: object.success
        };
    },
    toAmino(message) {
        const obj = {};
        obj.success = message.success;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgExtendLockupResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/extend-lockup-response",
            value: MsgExtendLockupResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgExtendLockupResponse.decode(message.value);
    },
    toProto(message) {
        return MsgExtendLockupResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.MsgExtendLockupResponse",
            value: MsgExtendLockupResponse.encode(message).finish()
        };
    }
};
function createBaseMsgForceUnlock() {
    return {
        owner: "",
        ID: BigInt(0),
        coins: []
    };
}
export const MsgForceUnlock = {
    typeUrl: "/osmosis.lockup.MsgForceUnlock",
    encode(message, writer = BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.ID !== BigInt(0)) {
            writer.uint32(16).uint64(message.ID);
        }
        for (const v of message.coins) {
            Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgForceUnlock();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.ID = reader.uint64();
                    break;
                case 3:
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
            owner: isSet(object.owner) ? String(object.owner) : "",
            ID: isSet(object.ID) ? BigInt(object.ID.toString()) : BigInt(0),
            coins: Array.isArray(object?.coins) ? object.coins.map((e) => Coin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.ID !== undefined && (obj.ID = (message.ID || BigInt(0)).toString());
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.coins = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgForceUnlock();
        message.owner = object.owner ?? "";
        message.ID = object.ID !== undefined && object.ID !== null ? BigInt(object.ID.toString()) : BigInt(0);
        message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            owner: object?.owner,
            ID: object?.ID,
            coins: Array.isArray(object?.coins) ? object.coins.map((e) => Coin.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.owner = message.owner;
        obj.ID = message.ID;
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
            owner: object.owner,
            ID: BigInt(object.ID),
            coins: Array.isArray(object?.coins) ? object.coins.map((e) => Coin.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner;
        obj.ID = message.ID ? message.ID.toString() : undefined;
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.coins = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return MsgForceUnlock.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/force-unlock",
            value: MsgForceUnlock.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgForceUnlock.decode(message.value);
    },
    toProto(message) {
        return MsgForceUnlock.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.MsgForceUnlock",
            value: MsgForceUnlock.encode(message).finish()
        };
    }
};
function createBaseMsgForceUnlockResponse() {
    return {
        success: false
    };
}
export const MsgForceUnlockResponse = {
    typeUrl: "/osmosis.lockup.MsgForceUnlockResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.success === true) {
            writer.uint32(8).bool(message.success);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgForceUnlockResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.success = reader.bool();
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
            success: isSet(object.success) ? Boolean(object.success) : false
        };
    },
    toJSON(message) {
        const obj = {};
        message.success !== undefined && (obj.success = message.success);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgForceUnlockResponse();
        message.success = object.success ?? false;
        return message;
    },
    fromSDK(object) {
        return {
            success: object?.success
        };
    },
    toSDK(message) {
        const obj = {};
        obj.success = message.success;
        return obj;
    },
    fromAmino(object) {
        return {
            success: object.success
        };
    },
    toAmino(message) {
        const obj = {};
        obj.success = message.success;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgForceUnlockResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lockup/force-unlock-response",
            value: MsgForceUnlockResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgForceUnlockResponse.decode(message.value);
    },
    toProto(message) {
        return MsgForceUnlockResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.lockup.MsgForceUnlockResponse",
            value: MsgForceUnlockResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=tx.js.map
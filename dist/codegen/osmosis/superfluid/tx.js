"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgUnPoolWhitelistedPoolResponse = exports.MsgUnPoolWhitelistedPool = exports.MsgLockAndSuperfluidDelegateResponse = exports.MsgLockAndSuperfluidDelegate = exports.MsgSuperfluidUnbondLockResponse = exports.MsgSuperfluidUnbondLock = exports.MsgSuperfluidUndelegateResponse = exports.MsgSuperfluidUndelegate = exports.MsgSuperfluidDelegateResponse = exports.MsgSuperfluidDelegate = void 0;
//@ts-nocheck
const coin_1 = require("../../cosmos/base/v1beta1/coin");
const binary_1 = require("../../binary");
const helpers_1 = require("../../helpers");
function createBaseMsgSuperfluidDelegate() {
    return {
        sender: "",
        lock_id: BigInt(0),
        val_addr: ""
    };
}
exports.MsgSuperfluidDelegate = {
    typeUrl: "/osmosis.superfluid.MsgSuperfluidDelegate",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.lock_id !== BigInt(0)) {
            writer.uint32(16).uint64(message.lock_id);
        }
        if (message.val_addr !== "") {
            writer.uint32(26).string(message.val_addr);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSuperfluidDelegate();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.lock_id = reader.uint64();
                    break;
                case 3:
                    message.val_addr = reader.string();
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
            sender: (0, helpers_1.isSet)(object.sender) ? String(object.sender) : "",
            lock_id: (0, helpers_1.isSet)(object.lock_id) ? BigInt(object.lock_id.toString()) : BigInt(0),
            val_addr: (0, helpers_1.isSet)(object.val_addr) ? String(object.val_addr) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.lock_id !== undefined && (obj.lock_id = (message.lock_id || BigInt(0)).toString());
        message.val_addr !== undefined && (obj.val_addr = message.val_addr);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSuperfluidDelegate();
        message.sender = object.sender ?? "";
        message.lock_id = object.lock_id !== undefined && object.lock_id !== null ? BigInt(object.lock_id.toString()) : BigInt(0);
        message.val_addr = object.val_addr ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            sender: object?.sender,
            lock_id: object?.lock_id,
            val_addr: object?.val_addr
        };
    },
    toSDK(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.lock_id = message.lock_id;
        obj.val_addr = message.val_addr;
        return obj;
    },
    fromAmino(object) {
        return {
            sender: object.sender,
            lock_id: BigInt(object.lock_id),
            val_addr: object.val_addr
        };
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.lock_id = message.lock_id ? message.lock_id.toString() : undefined;
        obj.val_addr = message.val_addr;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSuperfluidDelegate.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/superfluid-delegate",
            value: exports.MsgSuperfluidDelegate.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgSuperfluidDelegate.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSuperfluidDelegate.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.MsgSuperfluidDelegate",
            value: exports.MsgSuperfluidDelegate.encode(message).finish()
        };
    }
};
function createBaseMsgSuperfluidDelegateResponse() {
    return {};
}
exports.MsgSuperfluidDelegateResponse = {
    typeUrl: "/osmosis.superfluid.MsgSuperfluidDelegateResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSuperfluidDelegateResponse();
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
        const message = createBaseMsgSuperfluidDelegateResponse();
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
        return exports.MsgSuperfluidDelegateResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/superfluid-delegate-response",
            value: exports.MsgSuperfluidDelegateResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgSuperfluidDelegateResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSuperfluidDelegateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.MsgSuperfluidDelegateResponse",
            value: exports.MsgSuperfluidDelegateResponse.encode(message).finish()
        };
    }
};
function createBaseMsgSuperfluidUndelegate() {
    return {
        sender: "",
        lock_id: BigInt(0)
    };
}
exports.MsgSuperfluidUndelegate = {
    typeUrl: "/osmosis.superfluid.MsgSuperfluidUndelegate",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.lock_id !== BigInt(0)) {
            writer.uint32(16).uint64(message.lock_id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSuperfluidUndelegate();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
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
            sender: (0, helpers_1.isSet)(object.sender) ? String(object.sender) : "",
            lock_id: (0, helpers_1.isSet)(object.lock_id) ? BigInt(object.lock_id.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.lock_id !== undefined && (obj.lock_id = (message.lock_id || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSuperfluidUndelegate();
        message.sender = object.sender ?? "";
        message.lock_id = object.lock_id !== undefined && object.lock_id !== null ? BigInt(object.lock_id.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            sender: object?.sender,
            lock_id: object?.lock_id
        };
    },
    toSDK(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.lock_id = message.lock_id;
        return obj;
    },
    fromAmino(object) {
        return {
            sender: object.sender,
            lock_id: BigInt(object.lock_id)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.lock_id = message.lock_id ? message.lock_id.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSuperfluidUndelegate.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/superfluid-undelegate",
            value: exports.MsgSuperfluidUndelegate.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgSuperfluidUndelegate.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSuperfluidUndelegate.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.MsgSuperfluidUndelegate",
            value: exports.MsgSuperfluidUndelegate.encode(message).finish()
        };
    }
};
function createBaseMsgSuperfluidUndelegateResponse() {
    return {};
}
exports.MsgSuperfluidUndelegateResponse = {
    typeUrl: "/osmosis.superfluid.MsgSuperfluidUndelegateResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSuperfluidUndelegateResponse();
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
        const message = createBaseMsgSuperfluidUndelegateResponse();
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
        return exports.MsgSuperfluidUndelegateResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/superfluid-undelegate-response",
            value: exports.MsgSuperfluidUndelegateResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgSuperfluidUndelegateResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSuperfluidUndelegateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.MsgSuperfluidUndelegateResponse",
            value: exports.MsgSuperfluidUndelegateResponse.encode(message).finish()
        };
    }
};
function createBaseMsgSuperfluidUnbondLock() {
    return {
        sender: "",
        lock_id: BigInt(0)
    };
}
exports.MsgSuperfluidUnbondLock = {
    typeUrl: "/osmosis.superfluid.MsgSuperfluidUnbondLock",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.lock_id !== BigInt(0)) {
            writer.uint32(16).uint64(message.lock_id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSuperfluidUnbondLock();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
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
            sender: (0, helpers_1.isSet)(object.sender) ? String(object.sender) : "",
            lock_id: (0, helpers_1.isSet)(object.lock_id) ? BigInt(object.lock_id.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.lock_id !== undefined && (obj.lock_id = (message.lock_id || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSuperfluidUnbondLock();
        message.sender = object.sender ?? "";
        message.lock_id = object.lock_id !== undefined && object.lock_id !== null ? BigInt(object.lock_id.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            sender: object?.sender,
            lock_id: object?.lock_id
        };
    },
    toSDK(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.lock_id = message.lock_id;
        return obj;
    },
    fromAmino(object) {
        return {
            sender: object.sender,
            lock_id: BigInt(object.lock_id)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.lock_id = message.lock_id ? message.lock_id.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSuperfluidUnbondLock.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/superfluid-unbond-lock",
            value: exports.MsgSuperfluidUnbondLock.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgSuperfluidUnbondLock.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSuperfluidUnbondLock.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.MsgSuperfluidUnbondLock",
            value: exports.MsgSuperfluidUnbondLock.encode(message).finish()
        };
    }
};
function createBaseMsgSuperfluidUnbondLockResponse() {
    return {};
}
exports.MsgSuperfluidUnbondLockResponse = {
    typeUrl: "/osmosis.superfluid.MsgSuperfluidUnbondLockResponse",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSuperfluidUnbondLockResponse();
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
        const message = createBaseMsgSuperfluidUnbondLockResponse();
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
        return exports.MsgSuperfluidUnbondLockResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/superfluid-unbond-lock-response",
            value: exports.MsgSuperfluidUnbondLockResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgSuperfluidUnbondLockResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSuperfluidUnbondLockResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.MsgSuperfluidUnbondLockResponse",
            value: exports.MsgSuperfluidUnbondLockResponse.encode(message).finish()
        };
    }
};
function createBaseMsgLockAndSuperfluidDelegate() {
    return {
        sender: "",
        coins: [],
        val_addr: ""
    };
}
exports.MsgLockAndSuperfluidDelegate = {
    typeUrl: "/osmosis.superfluid.MsgLockAndSuperfluidDelegate",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        for (const v of message.coins) {
            coin_1.Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.val_addr !== "") {
            writer.uint32(26).string(message.val_addr);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgLockAndSuperfluidDelegate();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.coins.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.val_addr = reader.string();
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
            sender: (0, helpers_1.isSet)(object.sender) ? String(object.sender) : "",
            coins: Array.isArray(object?.coins) ? object.coins.map((e) => coin_1.Coin.fromJSON(e)) : [],
            val_addr: (0, helpers_1.isSet)(object.val_addr) ? String(object.val_addr) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.coins = [];
        }
        message.val_addr !== undefined && (obj.val_addr = message.val_addr);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgLockAndSuperfluidDelegate();
        message.sender = object.sender ?? "";
        message.coins = object.coins?.map(e => coin_1.Coin.fromPartial(e)) || [];
        message.val_addr = object.val_addr ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            sender: object?.sender,
            coins: Array.isArray(object?.coins) ? object.coins.map((e) => coin_1.Coin.fromSDK(e)) : [],
            val_addr: object?.val_addr
        };
    },
    toSDK(message) {
        const obj = {};
        obj.sender = message.sender;
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? coin_1.Coin.toSDK(e) : undefined);
        }
        else {
            obj.coins = [];
        }
        obj.val_addr = message.val_addr;
        return obj;
    },
    fromAmino(object) {
        return {
            sender: object.sender,
            coins: Array.isArray(object?.coins) ? object.coins.map((e) => coin_1.Coin.fromAmino(e)) : [],
            val_addr: object.val_addr
        };
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender;
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.coins = [];
        }
        obj.val_addr = message.val_addr;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgLockAndSuperfluidDelegate.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lock-and-superfluid-delegate",
            value: exports.MsgLockAndSuperfluidDelegate.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgLockAndSuperfluidDelegate.decode(message.value);
    },
    toProto(message) {
        return exports.MsgLockAndSuperfluidDelegate.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.MsgLockAndSuperfluidDelegate",
            value: exports.MsgLockAndSuperfluidDelegate.encode(message).finish()
        };
    }
};
function createBaseMsgLockAndSuperfluidDelegateResponse() {
    return {
        ID: BigInt(0)
    };
}
exports.MsgLockAndSuperfluidDelegateResponse = {
    typeUrl: "/osmosis.superfluid.MsgLockAndSuperfluidDelegateResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.ID !== BigInt(0)) {
            writer.uint32(8).uint64(message.ID);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgLockAndSuperfluidDelegateResponse();
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
            ID: (0, helpers_1.isSet)(object.ID) ? BigInt(object.ID.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.ID !== undefined && (obj.ID = (message.ID || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgLockAndSuperfluidDelegateResponse();
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
        return exports.MsgLockAndSuperfluidDelegateResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lock-and-superfluid-delegate-response",
            value: exports.MsgLockAndSuperfluidDelegateResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgLockAndSuperfluidDelegateResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgLockAndSuperfluidDelegateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.MsgLockAndSuperfluidDelegateResponse",
            value: exports.MsgLockAndSuperfluidDelegateResponse.encode(message).finish()
        };
    }
};
function createBaseMsgUnPoolWhitelistedPool() {
    return {
        sender: "",
        pool_id: BigInt(0)
    };
}
exports.MsgUnPoolWhitelistedPool = {
    typeUrl: "/osmosis.superfluid.MsgUnPoolWhitelistedPool",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.pool_id !== BigInt(0)) {
            writer.uint32(16).uint64(message.pool_id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUnPoolWhitelistedPool();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.pool_id = reader.uint64();
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
            sender: (0, helpers_1.isSet)(object.sender) ? String(object.sender) : "",
            pool_id: (0, helpers_1.isSet)(object.pool_id) ? BigInt(object.pool_id.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.pool_id !== undefined && (obj.pool_id = (message.pool_id || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgUnPoolWhitelistedPool();
        message.sender = object.sender ?? "";
        message.pool_id = object.pool_id !== undefined && object.pool_id !== null ? BigInt(object.pool_id.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            sender: object?.sender,
            pool_id: object?.pool_id
        };
    },
    toSDK(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.pool_id = message.pool_id;
        return obj;
    },
    fromAmino(object) {
        return {
            sender: object.sender,
            pool_id: BigInt(object.pool_id)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender;
        obj.pool_id = message.pool_id ? message.pool_id.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUnPoolWhitelistedPool.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/unpool-whitelisted-pool",
            value: exports.MsgUnPoolWhitelistedPool.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgUnPoolWhitelistedPool.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUnPoolWhitelistedPool.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.MsgUnPoolWhitelistedPool",
            value: exports.MsgUnPoolWhitelistedPool.encode(message).finish()
        };
    }
};
function createBaseMsgUnPoolWhitelistedPoolResponse() {
    return {
        exited_lock_ids: []
    };
}
exports.MsgUnPoolWhitelistedPoolResponse = {
    typeUrl: "/osmosis.superfluid.MsgUnPoolWhitelistedPoolResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        writer.uint32(10).fork();
        for (const v of message.exited_lock_ids) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUnPoolWhitelistedPoolResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.exited_lock_ids.push(reader.uint64());
                        }
                    }
                    else {
                        message.exited_lock_ids.push(reader.uint64());
                    }
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
            exited_lock_ids: Array.isArray(object?.exited_lock_ids) ? object.exited_lock_ids.map((e) => BigInt(e.toString())) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.exited_lock_ids) {
            obj.exited_lock_ids = message.exited_lock_ids.map(e => (e || BigInt(0)).toString());
        }
        else {
            obj.exited_lock_ids = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgUnPoolWhitelistedPoolResponse();
        message.exited_lock_ids = object.exited_lock_ids?.map(e => BigInt(e.toString())) || [];
        return message;
    },
    fromSDK(object) {
        return {
            exited_lock_ids: Array.isArray(object?.exited_lock_ids) ? object.exited_lock_ids.map((e) => e) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.exited_lock_ids) {
            obj.exited_lock_ids = message.exited_lock_ids.map(e => e);
        }
        else {
            obj.exited_lock_ids = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            exited_lock_ids: Array.isArray(object?.exited_lock_ids) ? object.exited_lock_ids.map((e) => BigInt(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.exited_lock_ids) {
            obj.exited_lock_ids = message.exited_lock_ids.map(e => e.toString());
        }
        else {
            obj.exited_lock_ids = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUnPoolWhitelistedPoolResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/un-pool-whitelisted-pool-response",
            value: exports.MsgUnPoolWhitelistedPoolResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgUnPoolWhitelistedPoolResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUnPoolWhitelistedPoolResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.MsgUnPoolWhitelistedPoolResponse",
            value: exports.MsgUnPoolWhitelistedPoolResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=tx.js.map
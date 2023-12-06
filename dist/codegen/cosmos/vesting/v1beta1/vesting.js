"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermanentLockedAccount = exports.PeriodicVestingAccount = exports.Period = exports.DelayedVestingAccount = exports.ContinuousVestingAccount = exports.BaseVestingAccount = exports.protobufPackage = void 0;
//@ts-nocheck
const auth_1 = require("../../auth/v1beta1/auth");
const coin_1 = require("../../base/v1beta1/coin");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "cosmos.vesting.v1beta1";
function createBaseBaseVestingAccount() {
    return {
        base_account: undefined,
        original_vesting: [],
        delegated_free: [],
        delegated_vesting: [],
        end_time: BigInt(0)
    };
}
exports.BaseVestingAccount = {
    typeUrl: "/cosmos.vesting.v1beta1.BaseVestingAccount",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.base_account !== undefined) {
            auth_1.BaseAccount.encode(message.base_account, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.original_vesting) {
            coin_1.Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.delegated_free) {
            coin_1.Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.delegated_vesting) {
            coin_1.Coin.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.end_time !== BigInt(0)) {
            writer.uint32(40).int64(message.end_time);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBaseVestingAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.base_account = auth_1.BaseAccount.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.original_vesting.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.delegated_free.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.delegated_vesting.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.end_time = reader.int64();
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
            base_account: (0, helpers_1.isSet)(object.base_account) ? auth_1.BaseAccount.fromJSON(object.base_account) : undefined,
            original_vesting: Array.isArray(object?.original_vesting) ? object.original_vesting.map((e) => coin_1.Coin.fromJSON(e)) : [],
            delegated_free: Array.isArray(object?.delegated_free) ? object.delegated_free.map((e) => coin_1.Coin.fromJSON(e)) : [],
            delegated_vesting: Array.isArray(object?.delegated_vesting) ? object.delegated_vesting.map((e) => coin_1.Coin.fromJSON(e)) : [],
            end_time: (0, helpers_1.isSet)(object.end_time) ? BigInt(object.end_time.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.base_account !== undefined && (obj.base_account = message.base_account ? auth_1.BaseAccount.toJSON(message.base_account) : undefined);
        if (message.original_vesting) {
            obj.original_vesting = message.original_vesting.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.original_vesting = [];
        }
        if (message.delegated_free) {
            obj.delegated_free = message.delegated_free.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.delegated_free = [];
        }
        if (message.delegated_vesting) {
            obj.delegated_vesting = message.delegated_vesting.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.delegated_vesting = [];
        }
        message.end_time !== undefined && (obj.end_time = (message.end_time || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseBaseVestingAccount();
        message.base_account = object.base_account !== undefined && object.base_account !== null ? auth_1.BaseAccount.fromPartial(object.base_account) : undefined;
        message.original_vesting = object.original_vesting?.map(e => coin_1.Coin.fromPartial(e)) || [];
        message.delegated_free = object.delegated_free?.map(e => coin_1.Coin.fromPartial(e)) || [];
        message.delegated_vesting = object.delegated_vesting?.map(e => coin_1.Coin.fromPartial(e)) || [];
        message.end_time = object.end_time !== undefined && object.end_time !== null ? BigInt(object.end_time.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        return {
            base_account: object?.base_account ? auth_1.BaseAccount.fromAmino(object.base_account) : undefined,
            original_vesting: Array.isArray(object?.original_vesting) ? object.original_vesting.map((e) => coin_1.Coin.fromAmino(e)) : [],
            delegated_free: Array.isArray(object?.delegated_free) ? object.delegated_free.map((e) => coin_1.Coin.fromAmino(e)) : [],
            delegated_vesting: Array.isArray(object?.delegated_vesting) ? object.delegated_vesting.map((e) => coin_1.Coin.fromAmino(e)) : [],
            end_time: BigInt(object.end_time)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.base_account = message.base_account ? auth_1.BaseAccount.toAmino(message.base_account) : undefined;
        if (message.original_vesting) {
            obj.original_vesting = message.original_vesting.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.original_vesting = [];
        }
        if (message.delegated_free) {
            obj.delegated_free = message.delegated_free.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.delegated_free = [];
        }
        if (message.delegated_vesting) {
            obj.delegated_vesting = message.delegated_vesting.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.delegated_vesting = [];
        }
        obj.end_time = message.end_time ? message.end_time.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.BaseVestingAccount.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/BaseVestingAccount",
            value: exports.BaseVestingAccount.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.BaseVestingAccount.decode(message.value);
    },
    toProto(message) {
        return exports.BaseVestingAccount.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.vesting.v1beta1.BaseVestingAccount",
            value: exports.BaseVestingAccount.encode(message).finish()
        };
    }
};
function createBaseContinuousVestingAccount() {
    return {
        base_vesting_account: undefined,
        start_time: BigInt(0)
    };
}
exports.ContinuousVestingAccount = {
    typeUrl: "/cosmos.vesting.v1beta1.ContinuousVestingAccount",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.base_vesting_account !== undefined) {
            exports.BaseVestingAccount.encode(message.base_vesting_account, writer.uint32(10).fork()).ldelim();
        }
        if (message.start_time !== BigInt(0)) {
            writer.uint32(16).int64(message.start_time);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseContinuousVestingAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.base_vesting_account = exports.BaseVestingAccount.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.start_time = reader.int64();
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
            base_vesting_account: (0, helpers_1.isSet)(object.base_vesting_account) ? exports.BaseVestingAccount.fromJSON(object.base_vesting_account) : undefined,
            start_time: (0, helpers_1.isSet)(object.start_time) ? BigInt(object.start_time.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.base_vesting_account !== undefined && (obj.base_vesting_account = message.base_vesting_account ? exports.BaseVestingAccount.toJSON(message.base_vesting_account) : undefined);
        message.start_time !== undefined && (obj.start_time = (message.start_time || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseContinuousVestingAccount();
        message.base_vesting_account = object.base_vesting_account !== undefined && object.base_vesting_account !== null ? exports.BaseVestingAccount.fromPartial(object.base_vesting_account) : undefined;
        message.start_time = object.start_time !== undefined && object.start_time !== null ? BigInt(object.start_time.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        return {
            base_vesting_account: object?.base_vesting_account ? exports.BaseVestingAccount.fromAmino(object.base_vesting_account) : undefined,
            start_time: BigInt(object.start_time)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.base_vesting_account = message.base_vesting_account ? exports.BaseVestingAccount.toAmino(message.base_vesting_account) : undefined;
        obj.start_time = message.start_time ? message.start_time.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ContinuousVestingAccount.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ContinuousVestingAccount",
            value: exports.ContinuousVestingAccount.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ContinuousVestingAccount.decode(message.value);
    },
    toProto(message) {
        return exports.ContinuousVestingAccount.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.vesting.v1beta1.ContinuousVestingAccount",
            value: exports.ContinuousVestingAccount.encode(message).finish()
        };
    }
};
function createBaseDelayedVestingAccount() {
    return {
        base_vesting_account: undefined
    };
}
exports.DelayedVestingAccount = {
    typeUrl: "/cosmos.vesting.v1beta1.DelayedVestingAccount",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.base_vesting_account !== undefined) {
            exports.BaseVestingAccount.encode(message.base_vesting_account, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDelayedVestingAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.base_vesting_account = exports.BaseVestingAccount.decode(reader, reader.uint32());
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
            base_vesting_account: (0, helpers_1.isSet)(object.base_vesting_account) ? exports.BaseVestingAccount.fromJSON(object.base_vesting_account) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.base_vesting_account !== undefined && (obj.base_vesting_account = message.base_vesting_account ? exports.BaseVestingAccount.toJSON(message.base_vesting_account) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDelayedVestingAccount();
        message.base_vesting_account = object.base_vesting_account !== undefined && object.base_vesting_account !== null ? exports.BaseVestingAccount.fromPartial(object.base_vesting_account) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            base_vesting_account: object?.base_vesting_account ? exports.BaseVestingAccount.fromAmino(object.base_vesting_account) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.base_vesting_account = message.base_vesting_account ? exports.BaseVestingAccount.toAmino(message.base_vesting_account) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.DelayedVestingAccount.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/DelayedVestingAccount",
            value: exports.DelayedVestingAccount.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.DelayedVestingAccount.decode(message.value);
    },
    toProto(message) {
        return exports.DelayedVestingAccount.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.vesting.v1beta1.DelayedVestingAccount",
            value: exports.DelayedVestingAccount.encode(message).finish()
        };
    }
};
function createBasePeriod() {
    return {
        length: BigInt(0),
        amount: []
    };
}
exports.Period = {
    typeUrl: "/cosmos.vesting.v1beta1.Period",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.length !== BigInt(0)) {
            writer.uint32(8).int64(message.length);
        }
        for (const v of message.amount) {
            coin_1.Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePeriod();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.length = reader.int64();
                    break;
                case 2:
                    message.amount.push(coin_1.Coin.decode(reader, reader.uint32()));
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
            length: (0, helpers_1.isSet)(object.length) ? BigInt(object.length.toString()) : BigInt(0),
            amount: Array.isArray(object?.amount) ? object.amount.map((e) => coin_1.Coin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.length !== undefined && (obj.length = (message.length || BigInt(0)).toString());
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.amount = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBasePeriod();
        message.length = object.length !== undefined && object.length !== null ? BigInt(object.length.toString()) : BigInt(0);
        message.amount = object.amount?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            length: BigInt(object.length),
            amount: Array.isArray(object?.amount) ? object.amount.map((e) => coin_1.Coin.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.length = message.length ? message.length.toString() : undefined;
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.amount = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Period.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Period",
            value: exports.Period.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Period.decode(message.value);
    },
    toProto(message) {
        return exports.Period.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.vesting.v1beta1.Period",
            value: exports.Period.encode(message).finish()
        };
    }
};
function createBasePeriodicVestingAccount() {
    return {
        base_vesting_account: undefined,
        start_time: BigInt(0),
        vesting_periods: []
    };
}
exports.PeriodicVestingAccount = {
    typeUrl: "/cosmos.vesting.v1beta1.PeriodicVestingAccount",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.base_vesting_account !== undefined) {
            exports.BaseVestingAccount.encode(message.base_vesting_account, writer.uint32(10).fork()).ldelim();
        }
        if (message.start_time !== BigInt(0)) {
            writer.uint32(16).int64(message.start_time);
        }
        for (const v of message.vesting_periods) {
            exports.Period.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePeriodicVestingAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.base_vesting_account = exports.BaseVestingAccount.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.start_time = reader.int64();
                    break;
                case 3:
                    message.vesting_periods.push(exports.Period.decode(reader, reader.uint32()));
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
            base_vesting_account: (0, helpers_1.isSet)(object.base_vesting_account) ? exports.BaseVestingAccount.fromJSON(object.base_vesting_account) : undefined,
            start_time: (0, helpers_1.isSet)(object.start_time) ? BigInt(object.start_time.toString()) : BigInt(0),
            vesting_periods: Array.isArray(object?.vesting_periods) ? object.vesting_periods.map((e) => exports.Period.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.base_vesting_account !== undefined && (obj.base_vesting_account = message.base_vesting_account ? exports.BaseVestingAccount.toJSON(message.base_vesting_account) : undefined);
        message.start_time !== undefined && (obj.start_time = (message.start_time || BigInt(0)).toString());
        if (message.vesting_periods) {
            obj.vesting_periods = message.vesting_periods.map(e => e ? exports.Period.toJSON(e) : undefined);
        }
        else {
            obj.vesting_periods = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBasePeriodicVestingAccount();
        message.base_vesting_account = object.base_vesting_account !== undefined && object.base_vesting_account !== null ? exports.BaseVestingAccount.fromPartial(object.base_vesting_account) : undefined;
        message.start_time = object.start_time !== undefined && object.start_time !== null ? BigInt(object.start_time.toString()) : BigInt(0);
        message.vesting_periods = object.vesting_periods?.map(e => exports.Period.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            base_vesting_account: object?.base_vesting_account ? exports.BaseVestingAccount.fromAmino(object.base_vesting_account) : undefined,
            start_time: BigInt(object.start_time),
            vesting_periods: Array.isArray(object?.vesting_periods) ? object.vesting_periods.map((e) => exports.Period.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.base_vesting_account = message.base_vesting_account ? exports.BaseVestingAccount.toAmino(message.base_vesting_account) : undefined;
        obj.start_time = message.start_time ? message.start_time.toString() : undefined;
        if (message.vesting_periods) {
            obj.vesting_periods = message.vesting_periods.map(e => e ? exports.Period.toAmino(e) : undefined);
        }
        else {
            obj.vesting_periods = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.PeriodicVestingAccount.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/PeriodicVestingAccount",
            value: exports.PeriodicVestingAccount.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.PeriodicVestingAccount.decode(message.value);
    },
    toProto(message) {
        return exports.PeriodicVestingAccount.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.vesting.v1beta1.PeriodicVestingAccount",
            value: exports.PeriodicVestingAccount.encode(message).finish()
        };
    }
};
function createBasePermanentLockedAccount() {
    return {
        base_vesting_account: undefined
    };
}
exports.PermanentLockedAccount = {
    typeUrl: "/cosmos.vesting.v1beta1.PermanentLockedAccount",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.base_vesting_account !== undefined) {
            exports.BaseVestingAccount.encode(message.base_vesting_account, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePermanentLockedAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.base_vesting_account = exports.BaseVestingAccount.decode(reader, reader.uint32());
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
            base_vesting_account: (0, helpers_1.isSet)(object.base_vesting_account) ? exports.BaseVestingAccount.fromJSON(object.base_vesting_account) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.base_vesting_account !== undefined && (obj.base_vesting_account = message.base_vesting_account ? exports.BaseVestingAccount.toJSON(message.base_vesting_account) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBasePermanentLockedAccount();
        message.base_vesting_account = object.base_vesting_account !== undefined && object.base_vesting_account !== null ? exports.BaseVestingAccount.fromPartial(object.base_vesting_account) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            base_vesting_account: object?.base_vesting_account ? exports.BaseVestingAccount.fromAmino(object.base_vesting_account) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.base_vesting_account = message.base_vesting_account ? exports.BaseVestingAccount.toAmino(message.base_vesting_account) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.PermanentLockedAccount.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/PermanentLockedAccount",
            value: exports.PermanentLockedAccount.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.PermanentLockedAccount.decode(message.value);
    },
    toProto(message) {
        return exports.PermanentLockedAccount.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.vesting.v1beta1.PermanentLockedAccount",
            value: exports.PermanentLockedAccount.encode(message).finish()
        };
    }
};
//# sourceMappingURL=vesting.js.map
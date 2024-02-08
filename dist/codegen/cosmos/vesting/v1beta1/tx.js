"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgCreatePeriodicVestingAccountResponse = exports.MsgCreatePeriodicVestingAccount = exports.MsgCreatePermanentLockedAccountResponse = exports.MsgCreatePermanentLockedAccount = exports.MsgCreateVestingAccountResponse = exports.MsgCreateVestingAccount = exports.protobufPackage = void 0;
//@ts-nocheck
const coin_1 = require("../../base/v1beta1/coin");
const vesting_1 = require("./vesting");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
const registry_1 = require("../../../registry");
exports.protobufPackage = "cosmos.vesting.v1beta1";
function createBaseMsgCreateVestingAccount() {
    return {
        from_address: "",
        to_address: "",
        amount: [],
        end_time: BigInt(0),
        delayed: false
    };
}
exports.MsgCreateVestingAccount = {
    typeUrl: "/cosmos.vesting.v1beta1.MsgCreateVestingAccount",
    aminoType: "cosmos-sdk/MsgCreateVestingAccount",
    is(o) {
        return o && (o.$typeUrl === exports.MsgCreateVestingAccount.typeUrl || typeof o.from_address === "string" && typeof o.to_address === "string" && Array.isArray(o.amount) && (!o.amount.length || coin_1.Coin.is(o.amount[0])) && typeof o.end_time === "bigint" && typeof o.delayed === "boolean");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgCreateVestingAccount.typeUrl || typeof o.from_address === "string" && typeof o.to_address === "string" && Array.isArray(o.amount) && (!o.amount.length || coin_1.Coin.isSDK(o.amount[0])) && typeof o.end_time === "bigint" && typeof o.delayed === "boolean");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgCreateVestingAccount.typeUrl || typeof o.from_address === "string" && typeof o.to_address === "string" && Array.isArray(o.amount) && (!o.amount.length || coin_1.Coin.isAmino(o.amount[0])) && typeof o.end_time === "bigint" && typeof o.delayed === "boolean");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.from_address !== "") {
            writer.uint32(10).string(message.from_address);
        }
        if (message.to_address !== "") {
            writer.uint32(18).string(message.to_address);
        }
        for (const v of message.amount) {
            coin_1.Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.end_time !== BigInt(0)) {
            writer.uint32(32).int64(message.end_time);
        }
        if (message.delayed === true) {
            writer.uint32(40).bool(message.delayed);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateVestingAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.from_address = reader.string();
                    break;
                case 2:
                    message.to_address = reader.string();
                    break;
                case 3:
                    message.amount.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.end_time = reader.int64();
                    break;
                case 5:
                    message.delayed = reader.bool();
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
            from_address: (0, helpers_1.isSet)(object.from_address) ? String(object.from_address) : "",
            to_address: (0, helpers_1.isSet)(object.to_address) ? String(object.to_address) : "",
            amount: Array.isArray(object?.amount) ? object.amount.map((e) => coin_1.Coin.fromJSON(e)) : [],
            end_time: (0, helpers_1.isSet)(object.end_time) ? BigInt(object.end_time.toString()) : BigInt(0),
            delayed: (0, helpers_1.isSet)(object.delayed) ? Boolean(object.delayed) : false
        };
    },
    toJSON(message) {
        const obj = {};
        message.from_address !== undefined && (obj.from_address = message.from_address);
        message.to_address !== undefined && (obj.to_address = message.to_address);
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.amount = [];
        }
        message.end_time !== undefined && (obj.end_time = (message.end_time || BigInt(0)).toString());
        message.delayed !== undefined && (obj.delayed = message.delayed);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateVestingAccount();
        message.from_address = object.from_address ?? "";
        message.to_address = object.to_address ?? "";
        message.amount = object.amount?.map(e => coin_1.Coin.fromPartial(e)) || [];
        message.end_time = object.end_time !== undefined && object.end_time !== null ? BigInt(object.end_time.toString()) : BigInt(0);
        message.delayed = object.delayed ?? false;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateVestingAccount();
        if (object.from_address !== undefined && object.from_address !== null) {
            message.from_address = object.from_address;
        }
        if (object.to_address !== undefined && object.to_address !== null) {
            message.to_address = object.to_address;
        }
        message.amount = object.amount?.map(e => coin_1.Coin.fromAmino(e)) || [];
        if (object.end_time !== undefined && object.end_time !== null) {
            message.end_time = BigInt(object.end_time);
        }
        if (object.delayed !== undefined && object.delayed !== null) {
            message.delayed = object.delayed;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.from_address = message.from_address;
        obj.to_address = message.to_address;
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.amount = [];
        }
        obj.end_time = message.end_time ? message.end_time.toString() : undefined;
        obj.delayed = message.delayed;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCreateVestingAccount.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgCreateVestingAccount",
            value: exports.MsgCreateVestingAccount.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgCreateVestingAccount.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreateVestingAccount.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.vesting.v1beta1.MsgCreateVestingAccount",
            value: exports.MsgCreateVestingAccount.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgCreateVestingAccount.typeUrl, exports.MsgCreateVestingAccount);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgCreateVestingAccount.aminoType, exports.MsgCreateVestingAccount.typeUrl);
function createBaseMsgCreateVestingAccountResponse() {
    return {};
}
exports.MsgCreateVestingAccountResponse = {
    typeUrl: "/cosmos.vesting.v1beta1.MsgCreateVestingAccountResponse",
    aminoType: "cosmos-sdk/MsgCreateVestingAccountResponse",
    is(o) {
        return o && o.$typeUrl === exports.MsgCreateVestingAccountResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.MsgCreateVestingAccountResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.MsgCreateVestingAccountResponse.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateVestingAccountResponse();
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
        const message = createBaseMsgCreateVestingAccountResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgCreateVestingAccountResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCreateVestingAccountResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgCreateVestingAccountResponse",
            value: exports.MsgCreateVestingAccountResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgCreateVestingAccountResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreateVestingAccountResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.vesting.v1beta1.MsgCreateVestingAccountResponse",
            value: exports.MsgCreateVestingAccountResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgCreateVestingAccountResponse.typeUrl, exports.MsgCreateVestingAccountResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgCreateVestingAccountResponse.aminoType, exports.MsgCreateVestingAccountResponse.typeUrl);
function createBaseMsgCreatePermanentLockedAccount() {
    return {
        from_address: "",
        to_address: "",
        amount: []
    };
}
exports.MsgCreatePermanentLockedAccount = {
    typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount",
    aminoType: "cosmos-sdk/MsgCreatePermLockedAccount",
    is(o) {
        return o && (o.$typeUrl === exports.MsgCreatePermanentLockedAccount.typeUrl || typeof o.from_address === "string" && typeof o.to_address === "string" && Array.isArray(o.amount) && (!o.amount.length || coin_1.Coin.is(o.amount[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgCreatePermanentLockedAccount.typeUrl || typeof o.from_address === "string" && typeof o.to_address === "string" && Array.isArray(o.amount) && (!o.amount.length || coin_1.Coin.isSDK(o.amount[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgCreatePermanentLockedAccount.typeUrl || typeof o.from_address === "string" && typeof o.to_address === "string" && Array.isArray(o.amount) && (!o.amount.length || coin_1.Coin.isAmino(o.amount[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.from_address !== "") {
            writer.uint32(10).string(message.from_address);
        }
        if (message.to_address !== "") {
            writer.uint32(18).string(message.to_address);
        }
        for (const v of message.amount) {
            coin_1.Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreatePermanentLockedAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.from_address = reader.string();
                    break;
                case 2:
                    message.to_address = reader.string();
                    break;
                case 3:
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
            from_address: (0, helpers_1.isSet)(object.from_address) ? String(object.from_address) : "",
            to_address: (0, helpers_1.isSet)(object.to_address) ? String(object.to_address) : "",
            amount: Array.isArray(object?.amount) ? object.amount.map((e) => coin_1.Coin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.from_address !== undefined && (obj.from_address = message.from_address);
        message.to_address !== undefined && (obj.to_address = message.to_address);
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.amount = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgCreatePermanentLockedAccount();
        message.from_address = object.from_address ?? "";
        message.to_address = object.to_address ?? "";
        message.amount = object.amount?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreatePermanentLockedAccount();
        if (object.from_address !== undefined && object.from_address !== null) {
            message.from_address = object.from_address;
        }
        if (object.to_address !== undefined && object.to_address !== null) {
            message.to_address = object.to_address;
        }
        message.amount = object.amount?.map(e => coin_1.Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.from_address = message.from_address;
        obj.to_address = message.to_address;
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.amount = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCreatePermanentLockedAccount.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgCreatePermLockedAccount",
            value: exports.MsgCreatePermanentLockedAccount.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgCreatePermanentLockedAccount.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreatePermanentLockedAccount.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount",
            value: exports.MsgCreatePermanentLockedAccount.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgCreatePermanentLockedAccount.typeUrl, exports.MsgCreatePermanentLockedAccount);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgCreatePermanentLockedAccount.aminoType, exports.MsgCreatePermanentLockedAccount.typeUrl);
function createBaseMsgCreatePermanentLockedAccountResponse() {
    return {};
}
exports.MsgCreatePermanentLockedAccountResponse = {
    typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccountResponse",
    aminoType: "cosmos-sdk/MsgCreatePermanentLockedAccountResponse",
    is(o) {
        return o && o.$typeUrl === exports.MsgCreatePermanentLockedAccountResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.MsgCreatePermanentLockedAccountResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.MsgCreatePermanentLockedAccountResponse.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreatePermanentLockedAccountResponse();
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
        const message = createBaseMsgCreatePermanentLockedAccountResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgCreatePermanentLockedAccountResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCreatePermanentLockedAccountResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgCreatePermanentLockedAccountResponse",
            value: exports.MsgCreatePermanentLockedAccountResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgCreatePermanentLockedAccountResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreatePermanentLockedAccountResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccountResponse",
            value: exports.MsgCreatePermanentLockedAccountResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgCreatePermanentLockedAccountResponse.typeUrl, exports.MsgCreatePermanentLockedAccountResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgCreatePermanentLockedAccountResponse.aminoType, exports.MsgCreatePermanentLockedAccountResponse.typeUrl);
function createBaseMsgCreatePeriodicVestingAccount() {
    return {
        from_address: "",
        to_address: "",
        start_time: BigInt(0),
        vesting_periods: []
    };
}
exports.MsgCreatePeriodicVestingAccount = {
    typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount",
    aminoType: "cosmos-sdk/MsgCreatePeriodVestAccount",
    is(o) {
        return o && (o.$typeUrl === exports.MsgCreatePeriodicVestingAccount.typeUrl || typeof o.from_address === "string" && typeof o.to_address === "string" && typeof o.start_time === "bigint" && Array.isArray(o.vesting_periods) && (!o.vesting_periods.length || vesting_1.Period.is(o.vesting_periods[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgCreatePeriodicVestingAccount.typeUrl || typeof o.from_address === "string" && typeof o.to_address === "string" && typeof o.start_time === "bigint" && Array.isArray(o.vesting_periods) && (!o.vesting_periods.length || vesting_1.Period.isSDK(o.vesting_periods[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgCreatePeriodicVestingAccount.typeUrl || typeof o.from_address === "string" && typeof o.to_address === "string" && typeof o.start_time === "bigint" && Array.isArray(o.vesting_periods) && (!o.vesting_periods.length || vesting_1.Period.isAmino(o.vesting_periods[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.from_address !== "") {
            writer.uint32(10).string(message.from_address);
        }
        if (message.to_address !== "") {
            writer.uint32(18).string(message.to_address);
        }
        if (message.start_time !== BigInt(0)) {
            writer.uint32(24).int64(message.start_time);
        }
        for (const v of message.vesting_periods) {
            vesting_1.Period.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreatePeriodicVestingAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.from_address = reader.string();
                    break;
                case 2:
                    message.to_address = reader.string();
                    break;
                case 3:
                    message.start_time = reader.int64();
                    break;
                case 4:
                    message.vesting_periods.push(vesting_1.Period.decode(reader, reader.uint32()));
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
            from_address: (0, helpers_1.isSet)(object.from_address) ? String(object.from_address) : "",
            to_address: (0, helpers_1.isSet)(object.to_address) ? String(object.to_address) : "",
            start_time: (0, helpers_1.isSet)(object.start_time) ? BigInt(object.start_time.toString()) : BigInt(0),
            vesting_periods: Array.isArray(object?.vesting_periods) ? object.vesting_periods.map((e) => vesting_1.Period.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.from_address !== undefined && (obj.from_address = message.from_address);
        message.to_address !== undefined && (obj.to_address = message.to_address);
        message.start_time !== undefined && (obj.start_time = (message.start_time || BigInt(0)).toString());
        if (message.vesting_periods) {
            obj.vesting_periods = message.vesting_periods.map(e => e ? vesting_1.Period.toJSON(e) : undefined);
        }
        else {
            obj.vesting_periods = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgCreatePeriodicVestingAccount();
        message.from_address = object.from_address ?? "";
        message.to_address = object.to_address ?? "";
        message.start_time = object.start_time !== undefined && object.start_time !== null ? BigInt(object.start_time.toString()) : BigInt(0);
        message.vesting_periods = object.vesting_periods?.map(e => vesting_1.Period.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreatePeriodicVestingAccount();
        if (object.from_address !== undefined && object.from_address !== null) {
            message.from_address = object.from_address;
        }
        if (object.to_address !== undefined && object.to_address !== null) {
            message.to_address = object.to_address;
        }
        if (object.start_time !== undefined && object.start_time !== null) {
            message.start_time = BigInt(object.start_time);
        }
        message.vesting_periods = object.vesting_periods?.map(e => vesting_1.Period.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.from_address = message.from_address;
        obj.to_address = message.to_address;
        obj.start_time = message.start_time ? message.start_time.toString() : undefined;
        if (message.vesting_periods) {
            obj.vesting_periods = message.vesting_periods.map(e => e ? vesting_1.Period.toAmino(e) : undefined);
        }
        else {
            obj.vesting_periods = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCreatePeriodicVestingAccount.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgCreatePeriodVestAccount",
            value: exports.MsgCreatePeriodicVestingAccount.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgCreatePeriodicVestingAccount.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreatePeriodicVestingAccount.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount",
            value: exports.MsgCreatePeriodicVestingAccount.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgCreatePeriodicVestingAccount.typeUrl, exports.MsgCreatePeriodicVestingAccount);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgCreatePeriodicVestingAccount.aminoType, exports.MsgCreatePeriodicVestingAccount.typeUrl);
function createBaseMsgCreatePeriodicVestingAccountResponse() {
    return {};
}
exports.MsgCreatePeriodicVestingAccountResponse = {
    typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccountResponse",
    aminoType: "cosmos-sdk/MsgCreatePeriodicVestingAccountResponse",
    is(o) {
        return o && o.$typeUrl === exports.MsgCreatePeriodicVestingAccountResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.MsgCreatePeriodicVestingAccountResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.MsgCreatePeriodicVestingAccountResponse.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreatePeriodicVestingAccountResponse();
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
        const message = createBaseMsgCreatePeriodicVestingAccountResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgCreatePeriodicVestingAccountResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCreatePeriodicVestingAccountResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgCreatePeriodicVestingAccountResponse",
            value: exports.MsgCreatePeriodicVestingAccountResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgCreatePeriodicVestingAccountResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreatePeriodicVestingAccountResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccountResponse",
            value: exports.MsgCreatePeriodicVestingAccountResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgCreatePeriodicVestingAccountResponse.typeUrl, exports.MsgCreatePeriodicVestingAccountResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgCreatePeriodicVestingAccountResponse.aminoType, exports.MsgCreatePeriodicVestingAccountResponse.typeUrl);
//# sourceMappingURL=tx.js.map
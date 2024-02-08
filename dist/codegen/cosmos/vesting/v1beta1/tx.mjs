//@ts-nocheck
import { Coin } from "../../base/v1beta1/coin";
import { Period } from "./vesting";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export const protobufPackage = "cosmos.vesting.v1beta1";
function createBaseMsgCreateVestingAccount() {
    return {
        from_address: "",
        to_address: "",
        amount: [],
        end_time: BigInt(0),
        delayed: false
    };
}
export const MsgCreateVestingAccount = {
    typeUrl: "/cosmos.vesting.v1beta1.MsgCreateVestingAccount",
    encode(message, writer = BinaryWriter.create()) {
        if (message.from_address !== "") {
            writer.uint32(10).string(message.from_address);
        }
        if (message.to_address !== "") {
            writer.uint32(18).string(message.to_address);
        }
        for (const v of message.amount) {
            Coin.encode(v, writer.uint32(26).fork()).ldelim();
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
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
                    message.amount.push(Coin.decode(reader, reader.uint32()));
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
            from_address: isSet(object.from_address) ? String(object.from_address) : "",
            to_address: isSet(object.to_address) ? String(object.to_address) : "",
            amount: Array.isArray(object?.amount) ? object.amount.map((e) => Coin.fromJSON(e)) : [],
            end_time: isSet(object.end_time) ? BigInt(object.end_time.toString()) : BigInt(0),
            delayed: isSet(object.delayed) ? Boolean(object.delayed) : false
        };
    },
    toJSON(message) {
        const obj = {};
        message.from_address !== undefined && (obj.from_address = message.from_address);
        message.to_address !== undefined && (obj.to_address = message.to_address);
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? Coin.toJSON(e) : undefined);
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
        message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
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
        message.amount = object.amount?.map(e => Coin.fromAmino(e)) || [];
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
            obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.amount = [];
        }
        obj.end_time = message.end_time ? message.end_time.toString() : undefined;
        obj.delayed = message.delayed;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCreateVestingAccount.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgCreateVestingAccount",
            value: MsgCreateVestingAccount.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgCreateVestingAccount.decode(message.value);
    },
    toProto(message) {
        return MsgCreateVestingAccount.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.vesting.v1beta1.MsgCreateVestingAccount",
            value: MsgCreateVestingAccount.encode(message).finish()
        };
    }
};
function createBaseMsgCreateVestingAccountResponse() {
    return {};
}
export const MsgCreateVestingAccountResponse = {
    typeUrl: "/cosmos.vesting.v1beta1.MsgCreateVestingAccountResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return MsgCreateVestingAccountResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgCreateVestingAccountResponse",
            value: MsgCreateVestingAccountResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgCreateVestingAccountResponse.decode(message.value);
    },
    toProto(message) {
        return MsgCreateVestingAccountResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.vesting.v1beta1.MsgCreateVestingAccountResponse",
            value: MsgCreateVestingAccountResponse.encode(message).finish()
        };
    }
};
function createBaseMsgCreatePermanentLockedAccount() {
    return {
        from_address: "",
        to_address: "",
        amount: []
    };
}
export const MsgCreatePermanentLockedAccount = {
    typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount",
    encode(message, writer = BinaryWriter.create()) {
        if (message.from_address !== "") {
            writer.uint32(10).string(message.from_address);
        }
        if (message.to_address !== "") {
            writer.uint32(18).string(message.to_address);
        }
        for (const v of message.amount) {
            Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
                    message.amount.push(Coin.decode(reader, reader.uint32()));
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
            from_address: isSet(object.from_address) ? String(object.from_address) : "",
            to_address: isSet(object.to_address) ? String(object.to_address) : "",
            amount: Array.isArray(object?.amount) ? object.amount.map((e) => Coin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.from_address !== undefined && (obj.from_address = message.from_address);
        message.to_address !== undefined && (obj.to_address = message.to_address);
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? Coin.toJSON(e) : undefined);
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
        message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
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
        message.amount = object.amount?.map(e => Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.from_address = message.from_address;
        obj.to_address = message.to_address;
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.amount = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCreatePermanentLockedAccount.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgCreatePermLockedAccount",
            value: MsgCreatePermanentLockedAccount.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgCreatePermanentLockedAccount.decode(message.value);
    },
    toProto(message) {
        return MsgCreatePermanentLockedAccount.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount",
            value: MsgCreatePermanentLockedAccount.encode(message).finish()
        };
    }
};
function createBaseMsgCreatePermanentLockedAccountResponse() {
    return {};
}
export const MsgCreatePermanentLockedAccountResponse = {
    typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccountResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return MsgCreatePermanentLockedAccountResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgCreatePermanentLockedAccountResponse",
            value: MsgCreatePermanentLockedAccountResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgCreatePermanentLockedAccountResponse.decode(message.value);
    },
    toProto(message) {
        return MsgCreatePermanentLockedAccountResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccountResponse",
            value: MsgCreatePermanentLockedAccountResponse.encode(message).finish()
        };
    }
};
function createBaseMsgCreatePeriodicVestingAccount() {
    return {
        from_address: "",
        to_address: "",
        start_time: BigInt(0),
        vesting_periods: []
    };
}
export const MsgCreatePeriodicVestingAccount = {
    typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount",
    encode(message, writer = BinaryWriter.create()) {
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
            Period.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
                    message.vesting_periods.push(Period.decode(reader, reader.uint32()));
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
            from_address: isSet(object.from_address) ? String(object.from_address) : "",
            to_address: isSet(object.to_address) ? String(object.to_address) : "",
            start_time: isSet(object.start_time) ? BigInt(object.start_time.toString()) : BigInt(0),
            vesting_periods: Array.isArray(object?.vesting_periods) ? object.vesting_periods.map((e) => Period.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.from_address !== undefined && (obj.from_address = message.from_address);
        message.to_address !== undefined && (obj.to_address = message.to_address);
        message.start_time !== undefined && (obj.start_time = (message.start_time || BigInt(0)).toString());
        if (message.vesting_periods) {
            obj.vesting_periods = message.vesting_periods.map(e => e ? Period.toJSON(e) : undefined);
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
        message.vesting_periods = object.vesting_periods?.map(e => Period.fromPartial(e)) || [];
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
        message.vesting_periods = object.vesting_periods?.map(e => Period.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.from_address = message.from_address;
        obj.to_address = message.to_address;
        obj.start_time = message.start_time ? message.start_time.toString() : undefined;
        if (message.vesting_periods) {
            obj.vesting_periods = message.vesting_periods.map(e => e ? Period.toAmino(e) : undefined);
        }
        else {
            obj.vesting_periods = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCreatePeriodicVestingAccount.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgCreatePeriodVestAccount",
            value: MsgCreatePeriodicVestingAccount.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgCreatePeriodicVestingAccount.decode(message.value);
    },
    toProto(message) {
        return MsgCreatePeriodicVestingAccount.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount",
            value: MsgCreatePeriodicVestingAccount.encode(message).finish()
        };
    }
};
function createBaseMsgCreatePeriodicVestingAccountResponse() {
    return {};
}
export const MsgCreatePeriodicVestingAccountResponse = {
    typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccountResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
        return MsgCreatePeriodicVestingAccountResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgCreatePeriodicVestingAccountResponse",
            value: MsgCreatePeriodicVestingAccountResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgCreatePeriodicVestingAccountResponse.decode(message.value);
    },
    toProto(message) {
        return MsgCreatePeriodicVestingAccountResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccountResponse",
            value: MsgCreatePeriodicVestingAccountResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=tx.js.map
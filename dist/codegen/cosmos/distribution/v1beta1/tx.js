"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgDepositValidatorRewardsPoolResponse = exports.MsgDepositValidatorRewardsPool = exports.MsgCommunityPoolSpendResponse = exports.MsgCommunityPoolSpend = exports.MsgUpdateParamsResponse = exports.MsgUpdateParams = exports.MsgFundCommunityPoolResponse = exports.MsgFundCommunityPool = exports.MsgWithdrawValidatorCommissionResponse = exports.MsgWithdrawValidatorCommission = exports.MsgWithdrawDelegatorRewardResponse = exports.MsgWithdrawDelegatorReward = exports.MsgSetWithdrawAddressResponse = exports.MsgSetWithdrawAddress = exports.protobufPackage = void 0;
//@ts-nocheck
const coin_1 = require("../../base/v1beta1/coin");
const distribution_1 = require("./distribution");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
const registry_1 = require("../../../registry");
exports.protobufPackage = "cosmos.distribution.v1beta1";
function createBaseMsgSetWithdrawAddress() {
    return {
        delegator_address: "",
        withdraw_address: ""
    };
}
exports.MsgSetWithdrawAddress = {
    typeUrl: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress",
    aminoType: "cosmos-sdk/MsgModifyWithdrawAddress",
    is(o) {
        return o && (o.$typeUrl === exports.MsgSetWithdrawAddress.typeUrl || typeof o.delegator_address === "string" && typeof o.withdraw_address === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgSetWithdrawAddress.typeUrl || typeof o.delegator_address === "string" && typeof o.withdraw_address === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgSetWithdrawAddress.typeUrl || typeof o.delegator_address === "string" && typeof o.withdraw_address === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.delegator_address !== "") {
            writer.uint32(10).string(message.delegator_address);
        }
        if (message.withdraw_address !== "") {
            writer.uint32(18).string(message.withdraw_address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetWithdrawAddress();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegator_address = reader.string();
                    break;
                case 2:
                    message.withdraw_address = reader.string();
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
            delegator_address: (0, helpers_1.isSet)(object.delegator_address) ? String(object.delegator_address) : "",
            withdraw_address: (0, helpers_1.isSet)(object.withdraw_address) ? String(object.withdraw_address) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegator_address !== undefined && (obj.delegator_address = message.delegator_address);
        message.withdraw_address !== undefined && (obj.withdraw_address = message.withdraw_address);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSetWithdrawAddress();
        message.delegator_address = object.delegator_address ?? "";
        message.withdraw_address = object.withdraw_address ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgSetWithdrawAddress();
        if (object.delegator_address !== undefined && object.delegator_address !== null) {
            message.delegator_address = object.delegator_address;
        }
        if (object.withdraw_address !== undefined && object.withdraw_address !== null) {
            message.withdraw_address = object.withdraw_address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_address = message.delegator_address;
        obj.withdraw_address = message.withdraw_address;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSetWithdrawAddress.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgModifyWithdrawAddress",
            value: exports.MsgSetWithdrawAddress.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgSetWithdrawAddress.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSetWithdrawAddress.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress",
            value: exports.MsgSetWithdrawAddress.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgSetWithdrawAddress.typeUrl, exports.MsgSetWithdrawAddress);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgSetWithdrawAddress.aminoType, exports.MsgSetWithdrawAddress.typeUrl);
function createBaseMsgSetWithdrawAddressResponse() {
    return {};
}
exports.MsgSetWithdrawAddressResponse = {
    typeUrl: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddressResponse",
    aminoType: "cosmos-sdk/MsgSetWithdrawAddressResponse",
    is(o) {
        return o && o.$typeUrl === exports.MsgSetWithdrawAddressResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.MsgSetWithdrawAddressResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.MsgSetWithdrawAddressResponse.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetWithdrawAddressResponse();
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
        const message = createBaseMsgSetWithdrawAddressResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgSetWithdrawAddressResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSetWithdrawAddressResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgSetWithdrawAddressResponse",
            value: exports.MsgSetWithdrawAddressResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgSetWithdrawAddressResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSetWithdrawAddressResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddressResponse",
            value: exports.MsgSetWithdrawAddressResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgSetWithdrawAddressResponse.typeUrl, exports.MsgSetWithdrawAddressResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgSetWithdrawAddressResponse.aminoType, exports.MsgSetWithdrawAddressResponse.typeUrl);
function createBaseMsgWithdrawDelegatorReward() {
    return {
        delegator_address: "",
        validator_address: ""
    };
}
exports.MsgWithdrawDelegatorReward = {
    typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
    aminoType: "cosmos-sdk/MsgWithdrawDelegationReward",
    is(o) {
        return o && (o.$typeUrl === exports.MsgWithdrawDelegatorReward.typeUrl || typeof o.delegator_address === "string" && typeof o.validator_address === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgWithdrawDelegatorReward.typeUrl || typeof o.delegator_address === "string" && typeof o.validator_address === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgWithdrawDelegatorReward.typeUrl || typeof o.delegator_address === "string" && typeof o.validator_address === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.delegator_address !== "") {
            writer.uint32(10).string(message.delegator_address);
        }
        if (message.validator_address !== "") {
            writer.uint32(18).string(message.validator_address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgWithdrawDelegatorReward();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegator_address = reader.string();
                    break;
                case 2:
                    message.validator_address = reader.string();
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
            delegator_address: (0, helpers_1.isSet)(object.delegator_address) ? String(object.delegator_address) : "",
            validator_address: (0, helpers_1.isSet)(object.validator_address) ? String(object.validator_address) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegator_address !== undefined && (obj.delegator_address = message.delegator_address);
        message.validator_address !== undefined && (obj.validator_address = message.validator_address);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgWithdrawDelegatorReward();
        message.delegator_address = object.delegator_address ?? "";
        message.validator_address = object.validator_address ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgWithdrawDelegatorReward();
        if (object.delegator_address !== undefined && object.delegator_address !== null) {
            message.delegator_address = object.delegator_address;
        }
        if (object.validator_address !== undefined && object.validator_address !== null) {
            message.validator_address = object.validator_address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_address = message.delegator_address;
        obj.validator_address = message.validator_address;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgWithdrawDelegatorReward.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgWithdrawDelegationReward",
            value: exports.MsgWithdrawDelegatorReward.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgWithdrawDelegatorReward.decode(message.value);
    },
    toProto(message) {
        return exports.MsgWithdrawDelegatorReward.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
            value: exports.MsgWithdrawDelegatorReward.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgWithdrawDelegatorReward.typeUrl, exports.MsgWithdrawDelegatorReward);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgWithdrawDelegatorReward.aminoType, exports.MsgWithdrawDelegatorReward.typeUrl);
function createBaseMsgWithdrawDelegatorRewardResponse() {
    return {
        amount: []
    };
}
exports.MsgWithdrawDelegatorRewardResponse = {
    typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorRewardResponse",
    aminoType: "cosmos-sdk/MsgWithdrawDelegatorRewardResponse",
    is(o) {
        return o && (o.$typeUrl === exports.MsgWithdrawDelegatorRewardResponse.typeUrl || Array.isArray(o.amount) && (!o.amount.length || coin_1.Coin.is(o.amount[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgWithdrawDelegatorRewardResponse.typeUrl || Array.isArray(o.amount) && (!o.amount.length || coin_1.Coin.isSDK(o.amount[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgWithdrawDelegatorRewardResponse.typeUrl || Array.isArray(o.amount) && (!o.amount.length || coin_1.Coin.isAmino(o.amount[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.amount) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgWithdrawDelegatorRewardResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
            amount: Array.isArray(object?.amount) ? object.amount.map((e) => coin_1.Coin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.amount = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgWithdrawDelegatorRewardResponse();
        message.amount = object.amount?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgWithdrawDelegatorRewardResponse();
        message.amount = object.amount?.map(e => coin_1.Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.amount = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgWithdrawDelegatorRewardResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgWithdrawDelegatorRewardResponse",
            value: exports.MsgWithdrawDelegatorRewardResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgWithdrawDelegatorRewardResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgWithdrawDelegatorRewardResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorRewardResponse",
            value: exports.MsgWithdrawDelegatorRewardResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgWithdrawDelegatorRewardResponse.typeUrl, exports.MsgWithdrawDelegatorRewardResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgWithdrawDelegatorRewardResponse.aminoType, exports.MsgWithdrawDelegatorRewardResponse.typeUrl);
function createBaseMsgWithdrawValidatorCommission() {
    return {
        validator_address: ""
    };
}
exports.MsgWithdrawValidatorCommission = {
    typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission",
    aminoType: "cosmos-sdk/MsgWithdrawValidatorCommission",
    is(o) {
        return o && (o.$typeUrl === exports.MsgWithdrawValidatorCommission.typeUrl || typeof o.validator_address === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgWithdrawValidatorCommission.typeUrl || typeof o.validator_address === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgWithdrawValidatorCommission.typeUrl || typeof o.validator_address === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.validator_address !== "") {
            writer.uint32(10).string(message.validator_address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgWithdrawValidatorCommission();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator_address = reader.string();
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
            validator_address: (0, helpers_1.isSet)(object.validator_address) ? String(object.validator_address) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.validator_address !== undefined && (obj.validator_address = message.validator_address);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgWithdrawValidatorCommission();
        message.validator_address = object.validator_address ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgWithdrawValidatorCommission();
        if (object.validator_address !== undefined && object.validator_address !== null) {
            message.validator_address = object.validator_address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.validator_address = message.validator_address;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgWithdrawValidatorCommission.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgWithdrawValidatorCommission",
            value: exports.MsgWithdrawValidatorCommission.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgWithdrawValidatorCommission.decode(message.value);
    },
    toProto(message) {
        return exports.MsgWithdrawValidatorCommission.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission",
            value: exports.MsgWithdrawValidatorCommission.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgWithdrawValidatorCommission.typeUrl, exports.MsgWithdrawValidatorCommission);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgWithdrawValidatorCommission.aminoType, exports.MsgWithdrawValidatorCommission.typeUrl);
function createBaseMsgWithdrawValidatorCommissionResponse() {
    return {
        amount: []
    };
}
exports.MsgWithdrawValidatorCommissionResponse = {
    typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommissionResponse",
    aminoType: "cosmos-sdk/MsgWithdrawValidatorCommissionResponse",
    is(o) {
        return o && (o.$typeUrl === exports.MsgWithdrawValidatorCommissionResponse.typeUrl || Array.isArray(o.amount) && (!o.amount.length || coin_1.Coin.is(o.amount[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgWithdrawValidatorCommissionResponse.typeUrl || Array.isArray(o.amount) && (!o.amount.length || coin_1.Coin.isSDK(o.amount[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgWithdrawValidatorCommissionResponse.typeUrl || Array.isArray(o.amount) && (!o.amount.length || coin_1.Coin.isAmino(o.amount[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.amount) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgWithdrawValidatorCommissionResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
            amount: Array.isArray(object?.amount) ? object.amount.map((e) => coin_1.Coin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.amount = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgWithdrawValidatorCommissionResponse();
        message.amount = object.amount?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgWithdrawValidatorCommissionResponse();
        message.amount = object.amount?.map(e => coin_1.Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.amount = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgWithdrawValidatorCommissionResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgWithdrawValidatorCommissionResponse",
            value: exports.MsgWithdrawValidatorCommissionResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgWithdrawValidatorCommissionResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgWithdrawValidatorCommissionResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommissionResponse",
            value: exports.MsgWithdrawValidatorCommissionResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgWithdrawValidatorCommissionResponse.typeUrl, exports.MsgWithdrawValidatorCommissionResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgWithdrawValidatorCommissionResponse.aminoType, exports.MsgWithdrawValidatorCommissionResponse.typeUrl);
function createBaseMsgFundCommunityPool() {
    return {
        amount: [],
        depositor: ""
    };
}
exports.MsgFundCommunityPool = {
    typeUrl: "/cosmos.distribution.v1beta1.MsgFundCommunityPool",
    aminoType: "cosmos-sdk/MsgFundCommunityPool",
    is(o) {
        return o && (o.$typeUrl === exports.MsgFundCommunityPool.typeUrl || Array.isArray(o.amount) && (!o.amount.length || coin_1.Coin.is(o.amount[0])) && typeof o.depositor === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgFundCommunityPool.typeUrl || Array.isArray(o.amount) && (!o.amount.length || coin_1.Coin.isSDK(o.amount[0])) && typeof o.depositor === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgFundCommunityPool.typeUrl || Array.isArray(o.amount) && (!o.amount.length || coin_1.Coin.isAmino(o.amount[0])) && typeof o.depositor === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.amount) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.depositor !== "") {
            writer.uint32(18).string(message.depositor);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgFundCommunityPool();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.depositor = reader.string();
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
            amount: Array.isArray(object?.amount) ? object.amount.map((e) => coin_1.Coin.fromJSON(e)) : [],
            depositor: (0, helpers_1.isSet)(object.depositor) ? String(object.depositor) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.amount = [];
        }
        message.depositor !== undefined && (obj.depositor = message.depositor);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgFundCommunityPool();
        message.amount = object.amount?.map(e => coin_1.Coin.fromPartial(e)) || [];
        message.depositor = object.depositor ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgFundCommunityPool();
        message.amount = object.amount?.map(e => coin_1.Coin.fromAmino(e)) || [];
        if (object.depositor !== undefined && object.depositor !== null) {
            message.depositor = object.depositor;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.amount = [];
        }
        obj.depositor = message.depositor;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgFundCommunityPool.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgFundCommunityPool",
            value: exports.MsgFundCommunityPool.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgFundCommunityPool.decode(message.value);
    },
    toProto(message) {
        return exports.MsgFundCommunityPool.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.MsgFundCommunityPool",
            value: exports.MsgFundCommunityPool.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgFundCommunityPool.typeUrl, exports.MsgFundCommunityPool);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgFundCommunityPool.aminoType, exports.MsgFundCommunityPool.typeUrl);
function createBaseMsgFundCommunityPoolResponse() {
    return {};
}
exports.MsgFundCommunityPoolResponse = {
    typeUrl: "/cosmos.distribution.v1beta1.MsgFundCommunityPoolResponse",
    aminoType: "cosmos-sdk/MsgFundCommunityPoolResponse",
    is(o) {
        return o && o.$typeUrl === exports.MsgFundCommunityPoolResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.MsgFundCommunityPoolResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.MsgFundCommunityPoolResponse.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgFundCommunityPoolResponse();
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
        const message = createBaseMsgFundCommunityPoolResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgFundCommunityPoolResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgFundCommunityPoolResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgFundCommunityPoolResponse",
            value: exports.MsgFundCommunityPoolResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgFundCommunityPoolResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgFundCommunityPoolResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.MsgFundCommunityPoolResponse",
            value: exports.MsgFundCommunityPoolResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgFundCommunityPoolResponse.typeUrl, exports.MsgFundCommunityPoolResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgFundCommunityPoolResponse.aminoType, exports.MsgFundCommunityPoolResponse.typeUrl);
function createBaseMsgUpdateParams() {
    return {
        authority: "",
        params: distribution_1.Params.fromPartial({})
    };
}
exports.MsgUpdateParams = {
    typeUrl: "/cosmos.distribution.v1beta1.MsgUpdateParams",
    aminoType: "cosmos-sdk/distribution/MsgUpdateParams",
    is(o) {
        return o && (o.$typeUrl === exports.MsgUpdateParams.typeUrl || typeof o.authority === "string" && distribution_1.Params.is(o.params));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgUpdateParams.typeUrl || typeof o.authority === "string" && distribution_1.Params.isSDK(o.params));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgUpdateParams.typeUrl || typeof o.authority === "string" && distribution_1.Params.isAmino(o.params));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.params !== undefined) {
            distribution_1.Params.encode(message.params, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                case 2:
                    message.params = distribution_1.Params.decode(reader, reader.uint32());
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
            authority: (0, helpers_1.isSet)(object.authority) ? String(object.authority) : "",
            params: (0, helpers_1.isSet)(object.params) ? distribution_1.Params.fromJSON(object.params) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.authority !== undefined && (obj.authority = message.authority);
        message.params !== undefined && (obj.params = message.params ? distribution_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateParams();
        message.authority = object.authority ?? "";
        message.params = object.params !== undefined && object.params !== null ? distribution_1.Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUpdateParams();
        if (object.authority !== undefined && object.authority !== null) {
            message.authority = object.authority;
        }
        if (object.params !== undefined && object.params !== null) {
            message.params = distribution_1.Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.authority = message.authority;
        obj.params = message.params ? distribution_1.Params.toAmino(message.params) : distribution_1.Params.fromPartial({});
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUpdateParams.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/distribution/MsgUpdateParams",
            value: exports.MsgUpdateParams.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateParams.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.MsgUpdateParams",
            value: exports.MsgUpdateParams.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgUpdateParams.typeUrl, exports.MsgUpdateParams);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgUpdateParams.aminoType, exports.MsgUpdateParams.typeUrl);
function createBaseMsgUpdateParamsResponse() {
    return {};
}
exports.MsgUpdateParamsResponse = {
    typeUrl: "/cosmos.distribution.v1beta1.MsgUpdateParamsResponse",
    aminoType: "cosmos-sdk/MsgUpdateParamsResponse",
    is(o) {
        return o && o.$typeUrl === exports.MsgUpdateParamsResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.MsgUpdateParamsResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.MsgUpdateParamsResponse.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateParamsResponse();
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
        const message = createBaseMsgUpdateParamsResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgUpdateParamsResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUpdateParamsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgUpdateParamsResponse",
            value: exports.MsgUpdateParamsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateParamsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.MsgUpdateParamsResponse",
            value: exports.MsgUpdateParamsResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgUpdateParamsResponse.typeUrl, exports.MsgUpdateParamsResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgUpdateParamsResponse.aminoType, exports.MsgUpdateParamsResponse.typeUrl);
function createBaseMsgCommunityPoolSpend() {
    return {
        authority: "",
        recipient: "",
        amount: []
    };
}
exports.MsgCommunityPoolSpend = {
    typeUrl: "/cosmos.distribution.v1beta1.MsgCommunityPoolSpend",
    aminoType: "cosmos-sdk/distr/MsgCommunityPoolSpend",
    is(o) {
        return o && (o.$typeUrl === exports.MsgCommunityPoolSpend.typeUrl || typeof o.authority === "string" && typeof o.recipient === "string" && Array.isArray(o.amount) && (!o.amount.length || coin_1.Coin.is(o.amount[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgCommunityPoolSpend.typeUrl || typeof o.authority === "string" && typeof o.recipient === "string" && Array.isArray(o.amount) && (!o.amount.length || coin_1.Coin.isSDK(o.amount[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgCommunityPoolSpend.typeUrl || typeof o.authority === "string" && typeof o.recipient === "string" && Array.isArray(o.amount) && (!o.amount.length || coin_1.Coin.isAmino(o.amount[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.recipient !== "") {
            writer.uint32(18).string(message.recipient);
        }
        for (const v of message.amount) {
            coin_1.Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCommunityPoolSpend();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                case 2:
                    message.recipient = reader.string();
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
            authority: (0, helpers_1.isSet)(object.authority) ? String(object.authority) : "",
            recipient: (0, helpers_1.isSet)(object.recipient) ? String(object.recipient) : "",
            amount: Array.isArray(object?.amount) ? object.amount.map((e) => coin_1.Coin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.authority !== undefined && (obj.authority = message.authority);
        message.recipient !== undefined && (obj.recipient = message.recipient);
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.amount = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgCommunityPoolSpend();
        message.authority = object.authority ?? "";
        message.recipient = object.recipient ?? "";
        message.amount = object.amount?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCommunityPoolSpend();
        if (object.authority !== undefined && object.authority !== null) {
            message.authority = object.authority;
        }
        if (object.recipient !== undefined && object.recipient !== null) {
            message.recipient = object.recipient;
        }
        message.amount = object.amount?.map(e => coin_1.Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.authority = message.authority;
        obj.recipient = message.recipient;
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.amount = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCommunityPoolSpend.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/distr/MsgCommunityPoolSpend",
            value: exports.MsgCommunityPoolSpend.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgCommunityPoolSpend.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCommunityPoolSpend.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.MsgCommunityPoolSpend",
            value: exports.MsgCommunityPoolSpend.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgCommunityPoolSpend.typeUrl, exports.MsgCommunityPoolSpend);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgCommunityPoolSpend.aminoType, exports.MsgCommunityPoolSpend.typeUrl);
function createBaseMsgCommunityPoolSpendResponse() {
    return {};
}
exports.MsgCommunityPoolSpendResponse = {
    typeUrl: "/cosmos.distribution.v1beta1.MsgCommunityPoolSpendResponse",
    aminoType: "cosmos-sdk/MsgCommunityPoolSpendResponse",
    is(o) {
        return o && o.$typeUrl === exports.MsgCommunityPoolSpendResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.MsgCommunityPoolSpendResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.MsgCommunityPoolSpendResponse.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCommunityPoolSpendResponse();
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
        const message = createBaseMsgCommunityPoolSpendResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgCommunityPoolSpendResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCommunityPoolSpendResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgCommunityPoolSpendResponse",
            value: exports.MsgCommunityPoolSpendResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgCommunityPoolSpendResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCommunityPoolSpendResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.MsgCommunityPoolSpendResponse",
            value: exports.MsgCommunityPoolSpendResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgCommunityPoolSpendResponse.typeUrl, exports.MsgCommunityPoolSpendResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgCommunityPoolSpendResponse.aminoType, exports.MsgCommunityPoolSpendResponse.typeUrl);
function createBaseMsgDepositValidatorRewardsPool() {
    return {
        depositor: "",
        validator_address: "",
        amount: []
    };
}
exports.MsgDepositValidatorRewardsPool = {
    typeUrl: "/cosmos.distribution.v1beta1.MsgDepositValidatorRewardsPool",
    aminoType: "cosmos-sdk/distr/MsgDepositValRewards",
    is(o) {
        return o && (o.$typeUrl === exports.MsgDepositValidatorRewardsPool.typeUrl || typeof o.depositor === "string" && typeof o.validator_address === "string" && Array.isArray(o.amount) && (!o.amount.length || coin_1.Coin.is(o.amount[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgDepositValidatorRewardsPool.typeUrl || typeof o.depositor === "string" && typeof o.validator_address === "string" && Array.isArray(o.amount) && (!o.amount.length || coin_1.Coin.isSDK(o.amount[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgDepositValidatorRewardsPool.typeUrl || typeof o.depositor === "string" && typeof o.validator_address === "string" && Array.isArray(o.amount) && (!o.amount.length || coin_1.Coin.isAmino(o.amount[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.depositor !== "") {
            writer.uint32(10).string(message.depositor);
        }
        if (message.validator_address !== "") {
            writer.uint32(18).string(message.validator_address);
        }
        for (const v of message.amount) {
            coin_1.Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDepositValidatorRewardsPool();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.depositor = reader.string();
                    break;
                case 2:
                    message.validator_address = reader.string();
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
            depositor: (0, helpers_1.isSet)(object.depositor) ? String(object.depositor) : "",
            validator_address: (0, helpers_1.isSet)(object.validator_address) ? String(object.validator_address) : "",
            amount: Array.isArray(object?.amount) ? object.amount.map((e) => coin_1.Coin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.depositor !== undefined && (obj.depositor = message.depositor);
        message.validator_address !== undefined && (obj.validator_address = message.validator_address);
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.amount = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgDepositValidatorRewardsPool();
        message.depositor = object.depositor ?? "";
        message.validator_address = object.validator_address ?? "";
        message.amount = object.amount?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgDepositValidatorRewardsPool();
        if (object.depositor !== undefined && object.depositor !== null) {
            message.depositor = object.depositor;
        }
        if (object.validator_address !== undefined && object.validator_address !== null) {
            message.validator_address = object.validator_address;
        }
        message.amount = object.amount?.map(e => coin_1.Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.depositor = message.depositor;
        obj.validator_address = message.validator_address;
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.amount = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgDepositValidatorRewardsPool.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/distr/MsgDepositValRewards",
            value: exports.MsgDepositValidatorRewardsPool.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgDepositValidatorRewardsPool.decode(message.value);
    },
    toProto(message) {
        return exports.MsgDepositValidatorRewardsPool.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.MsgDepositValidatorRewardsPool",
            value: exports.MsgDepositValidatorRewardsPool.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgDepositValidatorRewardsPool.typeUrl, exports.MsgDepositValidatorRewardsPool);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgDepositValidatorRewardsPool.aminoType, exports.MsgDepositValidatorRewardsPool.typeUrl);
function createBaseMsgDepositValidatorRewardsPoolResponse() {
    return {};
}
exports.MsgDepositValidatorRewardsPoolResponse = {
    typeUrl: "/cosmos.distribution.v1beta1.MsgDepositValidatorRewardsPoolResponse",
    aminoType: "cosmos-sdk/MsgDepositValidatorRewardsPoolResponse",
    is(o) {
        return o && o.$typeUrl === exports.MsgDepositValidatorRewardsPoolResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.MsgDepositValidatorRewardsPoolResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.MsgDepositValidatorRewardsPoolResponse.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDepositValidatorRewardsPoolResponse();
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
        const message = createBaseMsgDepositValidatorRewardsPoolResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgDepositValidatorRewardsPoolResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgDepositValidatorRewardsPoolResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgDepositValidatorRewardsPoolResponse",
            value: exports.MsgDepositValidatorRewardsPoolResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgDepositValidatorRewardsPoolResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgDepositValidatorRewardsPoolResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.MsgDepositValidatorRewardsPoolResponse",
            value: exports.MsgDepositValidatorRewardsPoolResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgDepositValidatorRewardsPoolResponse.typeUrl, exports.MsgDepositValidatorRewardsPoolResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgDepositValidatorRewardsPoolResponse.aminoType, exports.MsgDepositValidatorRewardsPoolResponse.typeUrl);
//# sourceMappingURL=tx.js.map
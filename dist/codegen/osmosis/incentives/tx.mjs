//@ts-nocheck
import { QueryCondition } from "../lockup/lock";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../binary";
import { toTimestamp, fromTimestamp, isSet, fromJsonTimestamp } from "../../helpers";
function createBaseMsgCreateGauge() {
    return {
        is_perpetual: false,
        owner: "",
        distribute_to: QueryCondition.fromPartial({}),
        coins: [],
        start_time: new Date(),
        num_epochs_paid_over: BigInt(0)
    };
}
export const MsgCreateGauge = {
    typeUrl: "/osmosis.incentives.MsgCreateGauge",
    encode(message, writer = BinaryWriter.create()) {
        if (message.is_perpetual === true) {
            writer.uint32(8).bool(message.is_perpetual);
        }
        if (message.owner !== "") {
            writer.uint32(18).string(message.owner);
        }
        if (message.distribute_to !== undefined) {
            QueryCondition.encode(message.distribute_to, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.coins) {
            Coin.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.start_time !== undefined) {
            Timestamp.encode(toTimestamp(message.start_time), writer.uint32(42).fork()).ldelim();
        }
        if (message.num_epochs_paid_over !== BigInt(0)) {
            writer.uint32(48).uint64(message.num_epochs_paid_over);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateGauge();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.is_perpetual = reader.bool();
                    break;
                case 2:
                    message.owner = reader.string();
                    break;
                case 3:
                    message.distribute_to = QueryCondition.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.coins.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.start_time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.num_epochs_paid_over = reader.uint64();
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
            is_perpetual: isSet(object.is_perpetual) ? Boolean(object.is_perpetual) : false,
            owner: isSet(object.owner) ? String(object.owner) : "",
            distribute_to: isSet(object.distribute_to) ? QueryCondition.fromJSON(object.distribute_to) : undefined,
            coins: Array.isArray(object?.coins) ? object.coins.map((e) => Coin.fromJSON(e)) : [],
            start_time: isSet(object.start_time) ? fromJsonTimestamp(object.start_time) : undefined,
            num_epochs_paid_over: isSet(object.num_epochs_paid_over) ? BigInt(object.num_epochs_paid_over.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.is_perpetual !== undefined && (obj.is_perpetual = message.is_perpetual);
        message.owner !== undefined && (obj.owner = message.owner);
        message.distribute_to !== undefined && (obj.distribute_to = message.distribute_to ? QueryCondition.toJSON(message.distribute_to) : undefined);
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.coins = [];
        }
        message.start_time !== undefined && (obj.start_time = message.start_time.toISOString());
        message.num_epochs_paid_over !== undefined && (obj.num_epochs_paid_over = (message.num_epochs_paid_over || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateGauge();
        message.is_perpetual = object.is_perpetual ?? false;
        message.owner = object.owner ?? "";
        message.distribute_to = object.distribute_to !== undefined && object.distribute_to !== null ? QueryCondition.fromPartial(object.distribute_to) : undefined;
        message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
        message.start_time = object.start_time ?? undefined;
        message.num_epochs_paid_over = object.num_epochs_paid_over !== undefined && object.num_epochs_paid_over !== null ? BigInt(object.num_epochs_paid_over.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            is_perpetual: object?.is_perpetual,
            owner: object?.owner,
            distribute_to: object.distribute_to ? QueryCondition.fromSDK(object.distribute_to) : undefined,
            coins: Array.isArray(object?.coins) ? object.coins.map((e) => Coin.fromSDK(e)) : [],
            start_time: object.start_time ? Timestamp.fromSDK(object.start_time) : undefined,
            num_epochs_paid_over: object?.num_epochs_paid_over
        };
    },
    toSDK(message) {
        const obj = {};
        obj.is_perpetual = message.is_perpetual;
        obj.owner = message.owner;
        message.distribute_to !== undefined && (obj.distribute_to = message.distribute_to ? QueryCondition.toSDK(message.distribute_to) : undefined);
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? Coin.toSDK(e) : undefined);
        }
        else {
            obj.coins = [];
        }
        message.start_time !== undefined && (obj.start_time = message.start_time ? Timestamp.toSDK(message.start_time) : undefined);
        obj.num_epochs_paid_over = message.num_epochs_paid_over;
        return obj;
    },
    fromAmino(object) {
        return {
            is_perpetual: object.is_perpetual,
            owner: object.owner,
            distribute_to: object?.distribute_to ? QueryCondition.fromAmino(object.distribute_to) : undefined,
            coins: Array.isArray(object?.coins) ? object.coins.map((e) => Coin.fromAmino(e)) : [],
            start_time: object.start_time,
            num_epochs_paid_over: BigInt(object.num_epochs_paid_over)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.is_perpetual = message.is_perpetual;
        obj.owner = message.owner;
        obj.distribute_to = message.distribute_to ? QueryCondition.toAmino(message.distribute_to) : undefined;
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.coins = [];
        }
        obj.start_time = message.start_time;
        obj.num_epochs_paid_over = message.num_epochs_paid_over ? message.num_epochs_paid_over.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCreateGauge.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/incentives/create-gauge",
            value: MsgCreateGauge.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgCreateGauge.decode(message.value);
    },
    toProto(message) {
        return MsgCreateGauge.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.incentives.MsgCreateGauge",
            value: MsgCreateGauge.encode(message).finish()
        };
    }
};
function createBaseMsgCreateGaugeResponse() {
    return {};
}
export const MsgCreateGaugeResponse = {
    typeUrl: "/osmosis.incentives.MsgCreateGaugeResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateGaugeResponse();
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
        const message = createBaseMsgCreateGaugeResponse();
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
        return MsgCreateGaugeResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/incentives/create-gauge-response",
            value: MsgCreateGaugeResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgCreateGaugeResponse.decode(message.value);
    },
    toProto(message) {
        return MsgCreateGaugeResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.incentives.MsgCreateGaugeResponse",
            value: MsgCreateGaugeResponse.encode(message).finish()
        };
    }
};
function createBaseMsgAddToGauge() {
    return {
        owner: "",
        gauge_id: BigInt(0),
        rewards: []
    };
}
export const MsgAddToGauge = {
    typeUrl: "/osmosis.incentives.MsgAddToGauge",
    encode(message, writer = BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.gauge_id !== BigInt(0)) {
            writer.uint32(16).uint64(message.gauge_id);
        }
        for (const v of message.rewards) {
            Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAddToGauge();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.gauge_id = reader.uint64();
                    break;
                case 3:
                    message.rewards.push(Coin.decode(reader, reader.uint32()));
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
            gauge_id: isSet(object.gauge_id) ? BigInt(object.gauge_id.toString()) : BigInt(0),
            rewards: Array.isArray(object?.rewards) ? object.rewards.map((e) => Coin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.gauge_id !== undefined && (obj.gauge_id = (message.gauge_id || BigInt(0)).toString());
        if (message.rewards) {
            obj.rewards = message.rewards.map(e => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.rewards = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgAddToGauge();
        message.owner = object.owner ?? "";
        message.gauge_id = object.gauge_id !== undefined && object.gauge_id !== null ? BigInt(object.gauge_id.toString()) : BigInt(0);
        message.rewards = object.rewards?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            owner: object?.owner,
            gauge_id: object?.gauge_id,
            rewards: Array.isArray(object?.rewards) ? object.rewards.map((e) => Coin.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.owner = message.owner;
        obj.gauge_id = message.gauge_id;
        if (message.rewards) {
            obj.rewards = message.rewards.map(e => e ? Coin.toSDK(e) : undefined);
        }
        else {
            obj.rewards = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            owner: object.owner,
            gauge_id: BigInt(object.gauge_id),
            rewards: Array.isArray(object?.rewards) ? object.rewards.map((e) => Coin.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner;
        obj.gauge_id = message.gauge_id ? message.gauge_id.toString() : undefined;
        if (message.rewards) {
            obj.rewards = message.rewards.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.rewards = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return MsgAddToGauge.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/incentives/add-to-gauge",
            value: MsgAddToGauge.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgAddToGauge.decode(message.value);
    },
    toProto(message) {
        return MsgAddToGauge.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.incentives.MsgAddToGauge",
            value: MsgAddToGauge.encode(message).finish()
        };
    }
};
function createBaseMsgAddToGaugeResponse() {
    return {};
}
export const MsgAddToGaugeResponse = {
    typeUrl: "/osmosis.incentives.MsgAddToGaugeResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAddToGaugeResponse();
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
        const message = createBaseMsgAddToGaugeResponse();
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
        return MsgAddToGaugeResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/incentives/add-to-gauge-response",
            value: MsgAddToGaugeResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgAddToGaugeResponse.decode(message.value);
    },
    toProto(message) {
        return MsgAddToGaugeResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.incentives.MsgAddToGaugeResponse",
            value: MsgAddToGaugeResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=tx.js.map
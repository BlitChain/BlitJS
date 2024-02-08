//@ts-nocheck
import { Coin } from "../../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet } from "../../../../helpers";
export const protobufPackage = "ibc.applications.transfer.v1";
function createBaseAllocation() {
    return {
        source_port: "",
        source_channel: "",
        spend_limit: [],
        allow_list: []
    };
}
export const Allocation = {
    typeUrl: "/ibc.applications.transfer.v1.Allocation",
    encode(message, writer = BinaryWriter.create()) {
        if (message.source_port !== "") {
            writer.uint32(10).string(message.source_port);
        }
        if (message.source_channel !== "") {
            writer.uint32(18).string(message.source_channel);
        }
        for (const v of message.spend_limit) {
            Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.allow_list) {
            writer.uint32(34).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAllocation();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.source_port = reader.string();
                    break;
                case 2:
                    message.source_channel = reader.string();
                    break;
                case 3:
                    message.spend_limit.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.allow_list.push(reader.string());
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
            source_port: isSet(object.source_port) ? String(object.source_port) : "",
            source_channel: isSet(object.source_channel) ? String(object.source_channel) : "",
            spend_limit: Array.isArray(object?.spend_limit) ? object.spend_limit.map((e) => Coin.fromJSON(e)) : [],
            allow_list: Array.isArray(object?.allow_list) ? object.allow_list.map((e) => String(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.source_port !== undefined && (obj.source_port = message.source_port);
        message.source_channel !== undefined && (obj.source_channel = message.source_channel);
        if (message.spend_limit) {
            obj.spend_limit = message.spend_limit.map(e => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.spend_limit = [];
        }
        if (message.allow_list) {
            obj.allow_list = message.allow_list.map(e => e);
        }
        else {
            obj.allow_list = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAllocation();
        message.source_port = object.source_port ?? "";
        message.source_channel = object.source_channel ?? "";
        message.spend_limit = object.spend_limit?.map(e => Coin.fromPartial(e)) || [];
        message.allow_list = object.allow_list?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseAllocation();
        if (object.source_port !== undefined && object.source_port !== null) {
            message.source_port = object.source_port;
        }
        if (object.source_channel !== undefined && object.source_channel !== null) {
            message.source_channel = object.source_channel;
        }
        message.spend_limit = object.spend_limit?.map(e => Coin.fromAmino(e)) || [];
        message.allow_list = object.allow_list?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.source_port = message.source_port;
        obj.source_channel = message.source_channel;
        if (message.spend_limit) {
            obj.spend_limit = message.spend_limit.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.spend_limit = [];
        }
        if (message.allow_list) {
            obj.allow_list = message.allow_list.map(e => e);
        }
        else {
            obj.allow_list = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return Allocation.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Allocation",
            value: Allocation.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Allocation.decode(message.value);
    },
    toProto(message) {
        return Allocation.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.transfer.v1.Allocation",
            value: Allocation.encode(message).finish()
        };
    }
};
function createBaseTransferAuthorization() {
    return {
        $typeUrl: "/ibc.applications.transfer.v1.TransferAuthorization",
        allocations: []
    };
}
export const TransferAuthorization = {
    typeUrl: "/ibc.applications.transfer.v1.TransferAuthorization",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.allocations) {
            Allocation.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTransferAuthorization();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.allocations.push(Allocation.decode(reader, reader.uint32()));
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
            allocations: Array.isArray(object?.allocations) ? object.allocations.map((e) => Allocation.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.allocations) {
            obj.allocations = message.allocations.map(e => e ? Allocation.toJSON(e) : undefined);
        }
        else {
            obj.allocations = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTransferAuthorization();
        message.allocations = object.allocations?.map(e => Allocation.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseTransferAuthorization();
        message.allocations = object.allocations?.map(e => Allocation.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.allocations) {
            obj.allocations = message.allocations.map(e => e ? Allocation.toAmino(e) : undefined);
        }
        else {
            obj.allocations = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return TransferAuthorization.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/TransferAuthorization",
            value: TransferAuthorization.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return TransferAuthorization.decode(message.value);
    },
    toProto(message) {
        return TransferAuthorization.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.transfer.v1.TransferAuthorization",
            value: TransferAuthorization.encode(message).finish()
        };
    }
};
//# sourceMappingURL=authz.js.map
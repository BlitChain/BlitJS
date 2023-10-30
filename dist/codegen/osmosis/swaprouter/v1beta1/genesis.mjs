//@ts-nocheck
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
function createBaseParams() {
    return {
        pool_creation_fee: []
    };
}
export const Params = {
    typeUrl: "/osmosis.swaprouter.v1beta1.Params",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.pool_creation_fee) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pool_creation_fee.push(Coin.decode(reader, reader.uint32()));
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
            pool_creation_fee: Array.isArray(object?.pool_creation_fee) ? object.pool_creation_fee.map((e) => Coin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.pool_creation_fee) {
            obj.pool_creation_fee = message.pool_creation_fee.map(e => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.pool_creation_fee = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.pool_creation_fee = object.pool_creation_fee?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            pool_creation_fee: Array.isArray(object?.pool_creation_fee) ? object.pool_creation_fee.map((e) => Coin.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.pool_creation_fee) {
            obj.pool_creation_fee = message.pool_creation_fee.map(e => e ? Coin.toSDK(e) : undefined);
        }
        else {
            obj.pool_creation_fee = [];
        }
        return obj;
    },
    fromAmino(object) {
        return {
            pool_creation_fee: Array.isArray(object?.pool_creation_fee) ? object.pool_creation_fee.map((e) => Coin.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.pool_creation_fee) {
            obj.pool_creation_fee = message.pool_creation_fee.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.pool_creation_fee = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return Params.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/swaprouter/params",
            value: Params.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Params.decode(message.value);
    },
    toProto(message) {
        return Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.swaprouter.v1beta1.Params",
            value: Params.encode(message).finish()
        };
    }
};
function createBaseGenesisState() {
    return {
        next_pool_id: BigInt(0),
        params: Params.fromPartial({})
    };
}
export const GenesisState = {
    typeUrl: "/osmosis.swaprouter.v1beta1.GenesisState",
    encode(message, writer = BinaryWriter.create()) {
        if (message.next_pool_id !== BigInt(0)) {
            writer.uint32(8).uint64(message.next_pool_id);
        }
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.next_pool_id = reader.uint64();
                    break;
                case 2:
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
            next_pool_id: isSet(object.next_pool_id) ? BigInt(object.next_pool_id.toString()) : BigInt(0),
            params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.next_pool_id !== undefined && (obj.next_pool_id = (message.next_pool_id || BigInt(0)).toString());
        message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.next_pool_id = object.next_pool_id !== undefined && object.next_pool_id !== null ? BigInt(object.next_pool_id.toString()) : BigInt(0);
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            next_pool_id: object?.next_pool_id,
            params: object.params ? Params.fromSDK(object.params) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.next_pool_id = message.next_pool_id;
        message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
        return obj;
    },
    fromAmino(object) {
        return {
            next_pool_id: BigInt(object.next_pool_id),
            params: object?.params ? Params.fromAmino(object.params) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.next_pool_id = message.next_pool_id ? message.next_pool_id.toString() : undefined;
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return GenesisState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/swaprouter/genesis-state",
            value: GenesisState.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GenesisState.decode(message.value);
    },
    toProto(message) {
        return GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.swaprouter.v1beta1.GenesisState",
            value: GenesisState.encode(message).finish()
        };
    }
};
//# sourceMappingURL=genesis.js.map
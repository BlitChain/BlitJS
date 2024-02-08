//@ts-nocheck
import { CapabilityOwners } from "./capability";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
import { GlobalDecoderRegistry } from "../../registry";
export const protobufPackage = "capability.v1";
function createBaseGenesisOwners() {
    return {
        index: BigInt(0),
        index_owners: CapabilityOwners.fromPartial({})
    };
}
export const GenesisOwners = {
    typeUrl: "/capability.v1.GenesisOwners",
    is(o) {
        return o && (o.$typeUrl === GenesisOwners.typeUrl || typeof o.index === "bigint" && CapabilityOwners.is(o.index_owners));
    },
    isSDK(o) {
        return o && (o.$typeUrl === GenesisOwners.typeUrl || typeof o.index === "bigint" && CapabilityOwners.isSDK(o.index_owners));
    },
    isAmino(o) {
        return o && (o.$typeUrl === GenesisOwners.typeUrl || typeof o.index === "bigint" && CapabilityOwners.isAmino(o.index_owners));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.index !== BigInt(0)) {
            writer.uint32(8).uint64(message.index);
        }
        if (message.index_owners !== undefined) {
            CapabilityOwners.encode(message.index_owners, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisOwners();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = reader.uint64();
                    break;
                case 2:
                    message.index_owners = CapabilityOwners.decode(reader, reader.uint32());
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
            index: isSet(object.index) ? BigInt(object.index.toString()) : BigInt(0),
            index_owners: isSet(object.index_owners) ? CapabilityOwners.fromJSON(object.index_owners) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = (message.index || BigInt(0)).toString());
        message.index_owners !== undefined && (obj.index_owners = message.index_owners ? CapabilityOwners.toJSON(message.index_owners) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisOwners();
        message.index = object.index !== undefined && object.index !== null ? BigInt(object.index.toString()) : BigInt(0);
        message.index_owners = object.index_owners !== undefined && object.index_owners !== null ? CapabilityOwners.fromPartial(object.index_owners) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisOwners();
        if (object.index !== undefined && object.index !== null) {
            message.index = BigInt(object.index);
        }
        if (object.index_owners !== undefined && object.index_owners !== null) {
            message.index_owners = CapabilityOwners.fromAmino(object.index_owners);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.index = message.index ? message.index.toString() : undefined;
        obj.index_owners = message.index_owners ? CapabilityOwners.toAmino(message.index_owners) : CapabilityOwners.fromPartial({});
        return obj;
    },
    fromAminoMsg(object) {
        return GenesisOwners.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return GenesisOwners.decode(message.value);
    },
    toProto(message) {
        return GenesisOwners.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/capability.v1.GenesisOwners",
            value: GenesisOwners.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(GenesisOwners.typeUrl, GenesisOwners);
function createBaseGenesisState() {
    return {
        index: BigInt(0),
        owners: []
    };
}
export const GenesisState = {
    typeUrl: "/capability.v1.GenesisState",
    is(o) {
        return o && (o.$typeUrl === GenesisState.typeUrl || typeof o.index === "bigint" && Array.isArray(o.owners) && (!o.owners.length || GenesisOwners.is(o.owners[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === GenesisState.typeUrl || typeof o.index === "bigint" && Array.isArray(o.owners) && (!o.owners.length || GenesisOwners.isSDK(o.owners[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === GenesisState.typeUrl || typeof o.index === "bigint" && Array.isArray(o.owners) && (!o.owners.length || GenesisOwners.isAmino(o.owners[0])));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.index !== BigInt(0)) {
            writer.uint32(8).uint64(message.index);
        }
        for (const v of message.owners) {
            GenesisOwners.encode(v, writer.uint32(18).fork()).ldelim();
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
                    message.index = reader.uint64();
                    break;
                case 2:
                    message.owners.push(GenesisOwners.decode(reader, reader.uint32()));
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
            index: isSet(object.index) ? BigInt(object.index.toString()) : BigInt(0),
            owners: Array.isArray(object?.owners) ? object.owners.map((e) => GenesisOwners.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = (message.index || BigInt(0)).toString());
        if (message.owners) {
            obj.owners = message.owners.map(e => e ? GenesisOwners.toJSON(e) : undefined);
        }
        else {
            obj.owners = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.index = object.index !== undefined && object.index !== null ? BigInt(object.index.toString()) : BigInt(0);
        message.owners = object.owners?.map(e => GenesisOwners.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        if (object.index !== undefined && object.index !== null) {
            message.index = BigInt(object.index);
        }
        message.owners = object.owners?.map(e => GenesisOwners.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.index = message.index ? message.index.toString() : undefined;
        if (message.owners) {
            obj.owners = message.owners.map(e => e ? GenesisOwners.toAmino(e) : undefined);
        }
        else {
            obj.owners = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return GenesisState.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return GenesisState.decode(message.value);
    },
    toProto(message) {
        return GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/capability.v1.GenesisState",
            value: GenesisState.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(GenesisState.typeUrl, GenesisState);
//# sourceMappingURL=genesis.js.map
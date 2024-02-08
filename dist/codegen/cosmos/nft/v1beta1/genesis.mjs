//@ts-nocheck
import { Class, NFT } from "./nft";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
import { isSet } from "../../../helpers";
export const protobufPackage = "cosmos.nft.v1beta1";
function createBaseGenesisState() {
    return {
        classes: [],
        entries: []
    };
}
export const GenesisState = {
    typeUrl: "/cosmos.nft.v1beta1.GenesisState",
    aminoType: "cosmos-sdk/GenesisState",
    is(o) {
        return o && (o.$typeUrl === GenesisState.typeUrl || Array.isArray(o.classes) && (!o.classes.length || Class.is(o.classes[0])) && Array.isArray(o.entries) && (!o.entries.length || Entry.is(o.entries[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === GenesisState.typeUrl || Array.isArray(o.classes) && (!o.classes.length || Class.isSDK(o.classes[0])) && Array.isArray(o.entries) && (!o.entries.length || Entry.isSDK(o.entries[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === GenesisState.typeUrl || Array.isArray(o.classes) && (!o.classes.length || Class.isAmino(o.classes[0])) && Array.isArray(o.entries) && (!o.entries.length || Entry.isAmino(o.entries[0])));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.classes) {
            Class.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.entries) {
            Entry.encode(v, writer.uint32(18).fork()).ldelim();
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
                    message.classes.push(Class.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.entries.push(Entry.decode(reader, reader.uint32()));
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
            classes: Array.isArray(object?.classes) ? object.classes.map((e) => Class.fromJSON(e)) : [],
            entries: Array.isArray(object?.entries) ? object.entries.map((e) => Entry.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.classes) {
            obj.classes = message.classes.map(e => e ? Class.toJSON(e) : undefined);
        }
        else {
            obj.classes = [];
        }
        if (message.entries) {
            obj.entries = message.entries.map(e => e ? Entry.toJSON(e) : undefined);
        }
        else {
            obj.entries = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.classes = object.classes?.map(e => Class.fromPartial(e)) || [];
        message.entries = object.entries?.map(e => Entry.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        message.classes = object.classes?.map(e => Class.fromAmino(e)) || [];
        message.entries = object.entries?.map(e => Entry.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.classes) {
            obj.classes = message.classes.map(e => e ? Class.toAmino(e) : undefined);
        }
        else {
            obj.classes = [];
        }
        if (message.entries) {
            obj.entries = message.entries.map(e => e ? Entry.toAmino(e) : undefined);
        }
        else {
            obj.entries = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return GenesisState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GenesisState",
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
            typeUrl: "/cosmos.nft.v1beta1.GenesisState",
            value: GenesisState.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(GenesisState.typeUrl, GenesisState);
GlobalDecoderRegistry.registerAminoProtoMapping(GenesisState.aminoType, GenesisState.typeUrl);
function createBaseEntry() {
    return {
        owner: "",
        nfts: []
    };
}
export const Entry = {
    typeUrl: "/cosmos.nft.v1beta1.Entry",
    aminoType: "cosmos-sdk/Entry",
    is(o) {
        return o && (o.$typeUrl === Entry.typeUrl || typeof o.owner === "string" && Array.isArray(o.nfts) && (!o.nfts.length || NFT.is(o.nfts[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === Entry.typeUrl || typeof o.owner === "string" && Array.isArray(o.nfts) && (!o.nfts.length || NFT.isSDK(o.nfts[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === Entry.typeUrl || typeof o.owner === "string" && Array.isArray(o.nfts) && (!o.nfts.length || NFT.isAmino(o.nfts[0])));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        for (const v of message.nfts) {
            NFT.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.nfts.push(NFT.decode(reader, reader.uint32()));
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
            nfts: Array.isArray(object?.nfts) ? object.nfts.map((e) => NFT.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        if (message.nfts) {
            obj.nfts = message.nfts.map(e => e ? NFT.toJSON(e) : undefined);
        }
        else {
            obj.nfts = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEntry();
        message.owner = object.owner ?? "";
        message.nfts = object.nfts?.map(e => NFT.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseEntry();
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        message.nfts = object.nfts?.map(e => NFT.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner;
        if (message.nfts) {
            obj.nfts = message.nfts.map(e => e ? NFT.toAmino(e) : undefined);
        }
        else {
            obj.nfts = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return Entry.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Entry",
            value: Entry.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Entry.decode(message.value);
    },
    toProto(message) {
        return Entry.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.nft.v1beta1.Entry",
            value: Entry.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(Entry.typeUrl, Entry);
GlobalDecoderRegistry.registerAminoProtoMapping(Entry.aminoType, Entry.typeUrl);
//# sourceMappingURL=genesis.js.map
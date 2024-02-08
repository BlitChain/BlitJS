//@ts-nocheck
import { Params } from "./params";
import { Storage } from "./storage";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
import { GlobalDecoderRegistry } from "../../registry";
export const protobufPackage = "blit.storage";
function createBaseGenesisState() {
    return {
        params: Params.fromPartial({}),
        storageList: []
    };
}
export const GenesisState = {
    typeUrl: "/blit.storage.GenesisState",
    is(o) {
        return o && (o.$typeUrl === GenesisState.typeUrl || Params.is(o.params) && Array.isArray(o.storageList) && (!o.storageList.length || Storage.is(o.storageList[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === GenesisState.typeUrl || Params.isSDK(o.params) && Array.isArray(o.storageList) && (!o.storageList.length || Storage.isSDK(o.storageList[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === GenesisState.typeUrl || Params.isAmino(o.params) && Array.isArray(o.storageList) && (!o.storageList.length || Storage.isAmino(o.storageList[0])));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.storageList) {
            Storage.encode(v, writer.uint32(18).fork()).ldelim();
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
                    message.params = Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.storageList.push(Storage.decode(reader, reader.uint32()));
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
            params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
            storageList: Array.isArray(object?.storageList) ? object.storageList.map((e) => Storage.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        if (message.storageList) {
            obj.storageList = message.storageList.map(e => e ? Storage.toJSON(e) : undefined);
        }
        else {
            obj.storageList = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        message.storageList = object.storageList?.map(e => Storage.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromAmino(object.params);
        }
        message.storageList = object.storageList?.map(e => Storage.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? Params.toAmino(message.params) : Params.fromPartial({});
        if (message.storageList) {
            obj.storageList = message.storageList.map(e => e ? Storage.toAmino(e) : undefined);
        }
        else {
            obj.storageList = [];
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
            typeUrl: "/blit.storage.GenesisState",
            value: GenesisState.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(GenesisState.typeUrl, GenesisState);
//# sourceMappingURL=genesis.js.map
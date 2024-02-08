"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = exports.protobufPackage = void 0;
//@ts-nocheck
const params_1 = require("./params");
const storage_1 = require("./storage");
const binary_1 = require("../../binary");
const helpers_1 = require("../../helpers");
const registry_1 = require("../../registry");
exports.protobufPackage = "blit.storage";
function createBaseGenesisState() {
    return {
        params: params_1.Params.fromPartial({}),
        storageList: []
    };
}
exports.GenesisState = {
    typeUrl: "/blit.storage.GenesisState",
    is(o) {
        return o && (o.$typeUrl === exports.GenesisState.typeUrl || params_1.Params.is(o.params) && Array.isArray(o.storageList) && (!o.storageList.length || storage_1.Storage.is(o.storageList[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.GenesisState.typeUrl || params_1.Params.isSDK(o.params) && Array.isArray(o.storageList) && (!o.storageList.length || storage_1.Storage.isSDK(o.storageList[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.GenesisState.typeUrl || params_1.Params.isAmino(o.params) && Array.isArray(o.storageList) && (!o.storageList.length || storage_1.Storage.isAmino(o.storageList[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.storageList) {
            storage_1.Storage.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = params_1.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.storageList.push(storage_1.Storage.decode(reader, reader.uint32()));
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
            params: (0, helpers_1.isSet)(object.params) ? params_1.Params.fromJSON(object.params) : undefined,
            storageList: Array.isArray(object?.storageList) ? object.storageList.map((e) => storage_1.Storage.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? params_1.Params.toJSON(message.params) : undefined);
        if (message.storageList) {
            obj.storageList = message.storageList.map(e => e ? storage_1.Storage.toJSON(e) : undefined);
        }
        else {
            obj.storageList = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.params = object.params !== undefined && object.params !== null ? params_1.Params.fromPartial(object.params) : undefined;
        message.storageList = object.storageList?.map(e => storage_1.Storage.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        if (object.params !== undefined && object.params !== null) {
            message.params = params_1.Params.fromAmino(object.params);
        }
        message.storageList = object.storageList?.map(e => storage_1.Storage.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? params_1.Params.toAmino(message.params) : params_1.Params.fromPartial({});
        if (message.storageList) {
            obj.storageList = message.storageList.map(e => e ? storage_1.Storage.toAmino(e) : undefined);
        }
        else {
            obj.storageList = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GenesisState.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.GenesisState.decode(message.value);
    },
    toProto(message) {
        return exports.GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/blit.storage.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.GenesisState.typeUrl, exports.GenesisState);
//# sourceMappingURL=genesis.js.map
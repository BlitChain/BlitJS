"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientState = exports.protobufPackage = void 0;
//@ts-nocheck
const client_1 = require("../../../core/client/v1/client");
const binary_1 = require("../../../../binary");
const helpers_1 = require("../../../../helpers");
const registry_1 = require("../../../../registry");
exports.protobufPackage = "ibc.lightclients.localhost.v2";
function createBaseClientState() {
    return {
        latest_height: client_1.Height.fromPartial({})
    };
}
exports.ClientState = {
    typeUrl: "/ibc.lightclients.localhost.v2.ClientState",
    aminoType: "cosmos-sdk/ClientState",
    is(o) {
        return o && (o.$typeUrl === exports.ClientState.typeUrl || client_1.Height.is(o.latest_height));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.ClientState.typeUrl || client_1.Height.isSDK(o.latest_height));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.ClientState.typeUrl || client_1.Height.isAmino(o.latest_height));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.latest_height !== undefined) {
            client_1.Height.encode(message.latest_height, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseClientState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.latest_height = client_1.Height.decode(reader, reader.uint32());
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
            latest_height: (0, helpers_1.isSet)(object.latest_height) ? client_1.Height.fromJSON(object.latest_height) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.latest_height !== undefined && (obj.latest_height = message.latest_height ? client_1.Height.toJSON(message.latest_height) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseClientState();
        message.latest_height = object.latest_height !== undefined && object.latest_height !== null ? client_1.Height.fromPartial(object.latest_height) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseClientState();
        if (object.latest_height !== undefined && object.latest_height !== null) {
            message.latest_height = client_1.Height.fromAmino(object.latest_height);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.latest_height = message.latest_height ? client_1.Height.toAmino(message.latest_height) : {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ClientState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ClientState",
            value: exports.ClientState.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ClientState.decode(message.value);
    },
    toProto(message) {
        return exports.ClientState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.localhost.v2.ClientState",
            value: exports.ClientState.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.ClientState.typeUrl, exports.ClientState);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.ClientState.aminoType, exports.ClientState.typeUrl);
//# sourceMappingURL=localhost.js.map
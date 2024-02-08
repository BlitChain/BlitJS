//@ts-nocheck
import { Timestamp } from "../../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { GlobalDecoderRegistry } from "../../../../registry";
import { isSet, toTimestamp, fromTimestamp, fromJsonTimestamp, bytesFromBase64, base64FromBytes } from "../../../../helpers";
export const protobufPackage = "cosmos.base.node.v1beta1";
function createBaseConfigRequest() {
    return {};
}
export const ConfigRequest = {
    typeUrl: "/cosmos.base.node.v1beta1.ConfigRequest",
    aminoType: "cosmos-sdk/ConfigRequest",
    is(o) {
        return o && o.$typeUrl === ConfigRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === ConfigRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === ConfigRequest.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConfigRequest();
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
        const message = createBaseConfigRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseConfigRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return ConfigRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ConfigRequest",
            value: ConfigRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ConfigRequest.decode(message.value);
    },
    toProto(message) {
        return ConfigRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.node.v1beta1.ConfigRequest",
            value: ConfigRequest.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(ConfigRequest.typeUrl, ConfigRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(ConfigRequest.aminoType, ConfigRequest.typeUrl);
function createBaseConfigResponse() {
    return {
        minimum_gas_price: "",
        pruning_keep_recent: "",
        pruning_interval: ""
    };
}
export const ConfigResponse = {
    typeUrl: "/cosmos.base.node.v1beta1.ConfigResponse",
    aminoType: "cosmos-sdk/ConfigResponse",
    is(o) {
        return o && (o.$typeUrl === ConfigResponse.typeUrl || typeof o.minimum_gas_price === "string" && typeof o.pruning_keep_recent === "string" && typeof o.pruning_interval === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === ConfigResponse.typeUrl || typeof o.minimum_gas_price === "string" && typeof o.pruning_keep_recent === "string" && typeof o.pruning_interval === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === ConfigResponse.typeUrl || typeof o.minimum_gas_price === "string" && typeof o.pruning_keep_recent === "string" && typeof o.pruning_interval === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.minimum_gas_price !== "") {
            writer.uint32(10).string(message.minimum_gas_price);
        }
        if (message.pruning_keep_recent !== "") {
            writer.uint32(18).string(message.pruning_keep_recent);
        }
        if (message.pruning_interval !== "") {
            writer.uint32(26).string(message.pruning_interval);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConfigResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.minimum_gas_price = reader.string();
                    break;
                case 2:
                    message.pruning_keep_recent = reader.string();
                    break;
                case 3:
                    message.pruning_interval = reader.string();
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
            minimum_gas_price: isSet(object.minimum_gas_price) ? String(object.minimum_gas_price) : "",
            pruning_keep_recent: isSet(object.pruning_keep_recent) ? String(object.pruning_keep_recent) : "",
            pruning_interval: isSet(object.pruning_interval) ? String(object.pruning_interval) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.minimum_gas_price !== undefined && (obj.minimum_gas_price = message.minimum_gas_price);
        message.pruning_keep_recent !== undefined && (obj.pruning_keep_recent = message.pruning_keep_recent);
        message.pruning_interval !== undefined && (obj.pruning_interval = message.pruning_interval);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseConfigResponse();
        message.minimum_gas_price = object.minimum_gas_price ?? "";
        message.pruning_keep_recent = object.pruning_keep_recent ?? "";
        message.pruning_interval = object.pruning_interval ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseConfigResponse();
        if (object.minimum_gas_price !== undefined && object.minimum_gas_price !== null) {
            message.minimum_gas_price = object.minimum_gas_price;
        }
        if (object.pruning_keep_recent !== undefined && object.pruning_keep_recent !== null) {
            message.pruning_keep_recent = object.pruning_keep_recent;
        }
        if (object.pruning_interval !== undefined && object.pruning_interval !== null) {
            message.pruning_interval = object.pruning_interval;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.minimum_gas_price = message.minimum_gas_price;
        obj.pruning_keep_recent = message.pruning_keep_recent;
        obj.pruning_interval = message.pruning_interval;
        return obj;
    },
    fromAminoMsg(object) {
        return ConfigResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ConfigResponse",
            value: ConfigResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ConfigResponse.decode(message.value);
    },
    toProto(message) {
        return ConfigResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.node.v1beta1.ConfigResponse",
            value: ConfigResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(ConfigResponse.typeUrl, ConfigResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(ConfigResponse.aminoType, ConfigResponse.typeUrl);
function createBaseStatusRequest() {
    return {};
}
export const StatusRequest = {
    typeUrl: "/cosmos.base.node.v1beta1.StatusRequest",
    aminoType: "cosmos-sdk/StatusRequest",
    is(o) {
        return o && o.$typeUrl === StatusRequest.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === StatusRequest.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === StatusRequest.typeUrl;
    },
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStatusRequest();
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
        const message = createBaseStatusRequest();
        return message;
    },
    fromAmino(_) {
        const message = createBaseStatusRequest();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return StatusRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/StatusRequest",
            value: StatusRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return StatusRequest.decode(message.value);
    },
    toProto(message) {
        return StatusRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.node.v1beta1.StatusRequest",
            value: StatusRequest.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(StatusRequest.typeUrl, StatusRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(StatusRequest.aminoType, StatusRequest.typeUrl);
function createBaseStatusResponse() {
    return {
        earliest_store_height: BigInt(0),
        height: BigInt(0),
        timestamp: undefined,
        app_hash: new Uint8Array(),
        validator_hash: new Uint8Array()
    };
}
export const StatusResponse = {
    typeUrl: "/cosmos.base.node.v1beta1.StatusResponse",
    aminoType: "cosmos-sdk/StatusResponse",
    is(o) {
        return o && (o.$typeUrl === StatusResponse.typeUrl || typeof o.earliest_store_height === "bigint" && typeof o.height === "bigint" && (o.app_hash instanceof Uint8Array || typeof o.app_hash === "string") && (o.validator_hash instanceof Uint8Array || typeof o.validator_hash === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === StatusResponse.typeUrl || typeof o.earliest_store_height === "bigint" && typeof o.height === "bigint" && (o.app_hash instanceof Uint8Array || typeof o.app_hash === "string") && (o.validator_hash instanceof Uint8Array || typeof o.validator_hash === "string"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === StatusResponse.typeUrl || typeof o.earliest_store_height === "bigint" && typeof o.height === "bigint" && (o.app_hash instanceof Uint8Array || typeof o.app_hash === "string") && (o.validator_hash instanceof Uint8Array || typeof o.validator_hash === "string"));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.earliest_store_height !== BigInt(0)) {
            writer.uint32(8).uint64(message.earliest_store_height);
        }
        if (message.height !== BigInt(0)) {
            writer.uint32(16).uint64(message.height);
        }
        if (message.timestamp !== undefined) {
            Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(26).fork()).ldelim();
        }
        if (message.app_hash.length !== 0) {
            writer.uint32(34).bytes(message.app_hash);
        }
        if (message.validator_hash.length !== 0) {
            writer.uint32(42).bytes(message.validator_hash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStatusResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.earliest_store_height = reader.uint64();
                    break;
                case 2:
                    message.height = reader.uint64();
                    break;
                case 3:
                    message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.app_hash = reader.bytes();
                    break;
                case 5:
                    message.validator_hash = reader.bytes();
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
            earliest_store_height: isSet(object.earliest_store_height) ? BigInt(object.earliest_store_height.toString()) : BigInt(0),
            height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0),
            timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined,
            app_hash: isSet(object.app_hash) ? bytesFromBase64(object.app_hash) : new Uint8Array(),
            validator_hash: isSet(object.validator_hash) ? bytesFromBase64(object.validator_hash) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.earliest_store_height !== undefined && (obj.earliest_store_height = (message.earliest_store_height || BigInt(0)).toString());
        message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
        message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
        message.app_hash !== undefined && (obj.app_hash = base64FromBytes(message.app_hash !== undefined ? message.app_hash : new Uint8Array()));
        message.validator_hash !== undefined && (obj.validator_hash = base64FromBytes(message.validator_hash !== undefined ? message.validator_hash : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseStatusResponse();
        message.earliest_store_height = object.earliest_store_height !== undefined && object.earliest_store_height !== null ? BigInt(object.earliest_store_height.toString()) : BigInt(0);
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        message.timestamp = object.timestamp ?? undefined;
        message.app_hash = object.app_hash ?? new Uint8Array();
        message.validator_hash = object.validator_hash ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseStatusResponse();
        if (object.earliest_store_height !== undefined && object.earliest_store_height !== null) {
            message.earliest_store_height = BigInt(object.earliest_store_height);
        }
        if (object.height !== undefined && object.height !== null) {
            message.height = BigInt(object.height);
        }
        if (object.timestamp !== undefined && object.timestamp !== null) {
            message.timestamp = fromTimestamp(Timestamp.fromAmino(object.timestamp));
        }
        if (object.app_hash !== undefined && object.app_hash !== null) {
            message.app_hash = bytesFromBase64(object.app_hash);
        }
        if (object.validator_hash !== undefined && object.validator_hash !== null) {
            message.validator_hash = bytesFromBase64(object.validator_hash);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.earliest_store_height = message.earliest_store_height ? message.earliest_store_height.toString() : undefined;
        obj.height = message.height ? message.height.toString() : undefined;
        obj.timestamp = message.timestamp ? Timestamp.toAmino(toTimestamp(message.timestamp)) : undefined;
        obj.app_hash = message.app_hash ? base64FromBytes(message.app_hash) : undefined;
        obj.validator_hash = message.validator_hash ? base64FromBytes(message.validator_hash) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return StatusResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/StatusResponse",
            value: StatusResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return StatusResponse.decode(message.value);
    },
    toProto(message) {
        return StatusResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.node.v1beta1.StatusResponse",
            value: StatusResponse.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(StatusResponse.typeUrl, StatusResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(StatusResponse.aminoType, StatusResponse.typeUrl);
//# sourceMappingURL=query.js.map
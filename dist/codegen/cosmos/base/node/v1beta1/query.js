"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusResponse = exports.StatusRequest = exports.ConfigResponse = exports.ConfigRequest = exports.protobufPackage = void 0;
//@ts-nocheck
const timestamp_1 = require("../../../../google/protobuf/timestamp");
const binary_1 = require("../../../../binary");
const helpers_1 = require("../../../../helpers");
exports.protobufPackage = "cosmos.base.node.v1beta1";
function createBaseConfigRequest() {
    return {};
}
exports.ConfigRequest = {
    typeUrl: "/cosmos.base.node.v1beta1.ConfigRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.ConfigRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ConfigRequest",
            value: exports.ConfigRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ConfigRequest.decode(message.value);
    },
    toProto(message) {
        return exports.ConfigRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.node.v1beta1.ConfigRequest",
            value: exports.ConfigRequest.encode(message).finish()
        };
    }
};
function createBaseConfigResponse() {
    return {
        minimum_gas_price: "",
        pruning_keep_recent: "",
        pruning_interval: ""
    };
}
exports.ConfigResponse = {
    typeUrl: "/cosmos.base.node.v1beta1.ConfigResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
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
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
            minimum_gas_price: (0, helpers_1.isSet)(object.minimum_gas_price) ? String(object.minimum_gas_price) : "",
            pruning_keep_recent: (0, helpers_1.isSet)(object.pruning_keep_recent) ? String(object.pruning_keep_recent) : "",
            pruning_interval: (0, helpers_1.isSet)(object.pruning_interval) ? String(object.pruning_interval) : ""
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
        return exports.ConfigResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ConfigResponse",
            value: exports.ConfigResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ConfigResponse.decode(message.value);
    },
    toProto(message) {
        return exports.ConfigResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.node.v1beta1.ConfigResponse",
            value: exports.ConfigResponse.encode(message).finish()
        };
    }
};
function createBaseStatusRequest() {
    return {};
}
exports.StatusRequest = {
    typeUrl: "/cosmos.base.node.v1beta1.StatusRequest",
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
        return exports.StatusRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/StatusRequest",
            value: exports.StatusRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.StatusRequest.decode(message.value);
    },
    toProto(message) {
        return exports.StatusRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.node.v1beta1.StatusRequest",
            value: exports.StatusRequest.encode(message).finish()
        };
    }
};
function createBaseStatusResponse() {
    return {
        earliest_store_height: BigInt(0),
        height: BigInt(0),
        timestamp: undefined,
        app_hash: new Uint8Array(),
        validator_hash: new Uint8Array()
    };
}
exports.StatusResponse = {
    typeUrl: "/cosmos.base.node.v1beta1.StatusResponse",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.earliest_store_height !== BigInt(0)) {
            writer.uint32(8).uint64(message.earliest_store_height);
        }
        if (message.height !== BigInt(0)) {
            writer.uint32(16).uint64(message.height);
        }
        if (message.timestamp !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.timestamp), writer.uint32(26).fork()).ldelim();
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
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
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
                    message.timestamp = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
            earliest_store_height: (0, helpers_1.isSet)(object.earliest_store_height) ? BigInt(object.earliest_store_height.toString()) : BigInt(0),
            height: (0, helpers_1.isSet)(object.height) ? BigInt(object.height.toString()) : BigInt(0),
            timestamp: (0, helpers_1.isSet)(object.timestamp) ? (0, helpers_1.fromJsonTimestamp)(object.timestamp) : undefined,
            app_hash: (0, helpers_1.isSet)(object.app_hash) ? (0, helpers_1.bytesFromBase64)(object.app_hash) : new Uint8Array(),
            validator_hash: (0, helpers_1.isSet)(object.validator_hash) ? (0, helpers_1.bytesFromBase64)(object.validator_hash) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.earliest_store_height !== undefined && (obj.earliest_store_height = (message.earliest_store_height || BigInt(0)).toString());
        message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
        message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
        message.app_hash !== undefined && (obj.app_hash = (0, helpers_1.base64FromBytes)(message.app_hash !== undefined ? message.app_hash : new Uint8Array()));
        message.validator_hash !== undefined && (obj.validator_hash = (0, helpers_1.base64FromBytes)(message.validator_hash !== undefined ? message.validator_hash : new Uint8Array()));
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
            message.timestamp = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.timestamp));
        }
        if (object.app_hash !== undefined && object.app_hash !== null) {
            message.app_hash = (0, helpers_1.bytesFromBase64)(object.app_hash);
        }
        if (object.validator_hash !== undefined && object.validator_hash !== null) {
            message.validator_hash = (0, helpers_1.bytesFromBase64)(object.validator_hash);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.earliest_store_height = message.earliest_store_height ? message.earliest_store_height.toString() : undefined;
        obj.height = message.height ? message.height.toString() : undefined;
        obj.timestamp = message.timestamp ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.timestamp)) : undefined;
        obj.app_hash = message.app_hash ? (0, helpers_1.base64FromBytes)(message.app_hash) : undefined;
        obj.validator_hash = message.validator_hash ? (0, helpers_1.base64FromBytes)(message.validator_hash) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.StatusResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/StatusResponse",
            value: exports.StatusResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.StatusResponse.decode(message.value);
    },
    toProto(message) {
        return exports.StatusResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.node.v1beta1.StatusResponse",
            value: exports.StatusResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=query.js.map
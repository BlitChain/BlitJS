"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = exports.ModuleCredential = exports.ModuleAccount = exports.BaseAccount = exports.protobufPackage = void 0;
//@ts-nocheck
const any_1 = require("../../../google/protobuf/any");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
exports.protobufPackage = "cosmos.auth.v1beta1";
function createBaseBaseAccount() {
    return {
        $typeUrl: "/cosmos.auth.v1beta1.BaseAccount",
        address: "",
        pub_key: undefined,
        account_number: BigInt(0),
        sequence: BigInt(0)
    };
}
exports.BaseAccount = {
    typeUrl: "/cosmos.auth.v1beta1.BaseAccount",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.pub_key !== undefined) {
            any_1.Any.encode(message.pub_key, writer.uint32(18).fork()).ldelim();
        }
        if (message.account_number !== BigInt(0)) {
            writer.uint32(24).uint64(message.account_number);
        }
        if (message.sequence !== BigInt(0)) {
            writer.uint32(32).uint64(message.sequence);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBaseAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.pub_key = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.account_number = reader.uint64();
                    break;
                case 4:
                    message.sequence = reader.uint64();
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
            address: (0, helpers_1.isSet)(object.address) ? String(object.address) : "",
            pub_key: (0, helpers_1.isSet)(object.pub_key) ? any_1.Any.fromJSON(object.pub_key) : undefined,
            account_number: (0, helpers_1.isSet)(object.account_number) ? BigInt(object.account_number.toString()) : BigInt(0),
            sequence: (0, helpers_1.isSet)(object.sequence) ? BigInt(object.sequence.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.pub_key !== undefined && (obj.pub_key = message.pub_key ? any_1.Any.toJSON(message.pub_key) : undefined);
        message.account_number !== undefined && (obj.account_number = (message.account_number || BigInt(0)).toString());
        message.sequence !== undefined && (obj.sequence = (message.sequence || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseBaseAccount();
        message.address = object.address ?? "";
        message.pub_key = object.pub_key !== undefined && object.pub_key !== null ? any_1.Any.fromPartial(object.pub_key) : undefined;
        message.account_number = object.account_number !== undefined && object.account_number !== null ? BigInt(object.account_number.toString()) : BigInt(0);
        message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseBaseAccount();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.pub_key !== undefined && object.pub_key !== null) {
            message.pub_key = any_1.Any.fromAmino(object.pub_key);
        }
        if (object.account_number !== undefined && object.account_number !== null) {
            message.account_number = BigInt(object.account_number);
        }
        if (object.sequence !== undefined && object.sequence !== null) {
            message.sequence = BigInt(object.sequence);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        obj.pub_key = message.pub_key ? any_1.Any.toAmino(message.pub_key) : undefined;
        obj.account_number = message.account_number ? message.account_number.toString() : undefined;
        obj.sequence = message.sequence ? message.sequence.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.BaseAccount.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/BaseAccount",
            value: exports.BaseAccount.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.BaseAccount.decode(message.value);
    },
    toProto(message) {
        return exports.BaseAccount.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.auth.v1beta1.BaseAccount",
            value: exports.BaseAccount.encode(message).finish()
        };
    }
};
function createBaseModuleAccount() {
    return {
        $typeUrl: "/cosmos.auth.v1beta1.ModuleAccount",
        base_account: undefined,
        name: "",
        permissions: []
    };
}
exports.ModuleAccount = {
    typeUrl: "/cosmos.auth.v1beta1.ModuleAccount",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.base_account !== undefined) {
            exports.BaseAccount.encode(message.base_account, writer.uint32(10).fork()).ldelim();
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        for (const v of message.permissions) {
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModuleAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.base_account = exports.BaseAccount.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.permissions.push(reader.string());
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
            base_account: (0, helpers_1.isSet)(object.base_account) ? exports.BaseAccount.fromJSON(object.base_account) : undefined,
            name: (0, helpers_1.isSet)(object.name) ? String(object.name) : "",
            permissions: Array.isArray(object?.permissions) ? object.permissions.map((e) => String(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.base_account !== undefined && (obj.base_account = message.base_account ? exports.BaseAccount.toJSON(message.base_account) : undefined);
        message.name !== undefined && (obj.name = message.name);
        if (message.permissions) {
            obj.permissions = message.permissions.map(e => e);
        }
        else {
            obj.permissions = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseModuleAccount();
        message.base_account = object.base_account !== undefined && object.base_account !== null ? exports.BaseAccount.fromPartial(object.base_account) : undefined;
        message.name = object.name ?? "";
        message.permissions = object.permissions?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseModuleAccount();
        if (object.base_account !== undefined && object.base_account !== null) {
            message.base_account = exports.BaseAccount.fromAmino(object.base_account);
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        message.permissions = object.permissions?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.base_account = message.base_account ? exports.BaseAccount.toAmino(message.base_account) : undefined;
        obj.name = message.name;
        if (message.permissions) {
            obj.permissions = message.permissions.map(e => e);
        }
        else {
            obj.permissions = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ModuleAccount.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ModuleAccount",
            value: exports.ModuleAccount.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ModuleAccount.decode(message.value);
    },
    toProto(message) {
        return exports.ModuleAccount.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.auth.v1beta1.ModuleAccount",
            value: exports.ModuleAccount.encode(message).finish()
        };
    }
};
function createBaseModuleCredential() {
    return {
        module_name: "",
        derivation_keys: []
    };
}
exports.ModuleCredential = {
    typeUrl: "/cosmos.auth.v1beta1.ModuleCredential",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.module_name !== "") {
            writer.uint32(10).string(message.module_name);
        }
        for (const v of message.derivation_keys) {
            writer.uint32(18).bytes(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModuleCredential();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.module_name = reader.string();
                    break;
                case 2:
                    message.derivation_keys.push(reader.bytes());
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
            module_name: (0, helpers_1.isSet)(object.module_name) ? String(object.module_name) : "",
            derivation_keys: Array.isArray(object?.derivation_keys) ? object.derivation_keys.map((e) => (0, helpers_1.bytesFromBase64)(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.module_name !== undefined && (obj.module_name = message.module_name);
        if (message.derivation_keys) {
            obj.derivation_keys = message.derivation_keys.map(e => (0, helpers_1.base64FromBytes)(e !== undefined ? e : new Uint8Array()));
        }
        else {
            obj.derivation_keys = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseModuleCredential();
        message.module_name = object.module_name ?? "";
        message.derivation_keys = object.derivation_keys?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseModuleCredential();
        if (object.module_name !== undefined && object.module_name !== null) {
            message.module_name = object.module_name;
        }
        message.derivation_keys = object.derivation_keys?.map(e => (0, helpers_1.bytesFromBase64)(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.module_name = message.module_name;
        if (message.derivation_keys) {
            obj.derivation_keys = message.derivation_keys.map(e => (0, helpers_1.base64FromBytes)(e));
        }
        else {
            obj.derivation_keys = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ModuleCredential.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GroupAccountCredential",
            value: exports.ModuleCredential.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ModuleCredential.decode(message.value);
    },
    toProto(message) {
        return exports.ModuleCredential.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.auth.v1beta1.ModuleCredential",
            value: exports.ModuleCredential.encode(message).finish()
        };
    }
};
function createBaseParams() {
    return {
        max_memo_characters: BigInt(0),
        tx_sig_limit: BigInt(0),
        tx_size_cost_per_byte: BigInt(0),
        sig_verify_cost_ed25519: BigInt(0),
        sig_verify_cost_secp256k1: BigInt(0)
    };
}
exports.Params = {
    typeUrl: "/cosmos.auth.v1beta1.Params",
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.max_memo_characters !== BigInt(0)) {
            writer.uint32(8).uint64(message.max_memo_characters);
        }
        if (message.tx_sig_limit !== BigInt(0)) {
            writer.uint32(16).uint64(message.tx_sig_limit);
        }
        if (message.tx_size_cost_per_byte !== BigInt(0)) {
            writer.uint32(24).uint64(message.tx_size_cost_per_byte);
        }
        if (message.sig_verify_cost_ed25519 !== BigInt(0)) {
            writer.uint32(32).uint64(message.sig_verify_cost_ed25519);
        }
        if (message.sig_verify_cost_secp256k1 !== BigInt(0)) {
            writer.uint32(40).uint64(message.sig_verify_cost_secp256k1);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.max_memo_characters = reader.uint64();
                    break;
                case 2:
                    message.tx_sig_limit = reader.uint64();
                    break;
                case 3:
                    message.tx_size_cost_per_byte = reader.uint64();
                    break;
                case 4:
                    message.sig_verify_cost_ed25519 = reader.uint64();
                    break;
                case 5:
                    message.sig_verify_cost_secp256k1 = reader.uint64();
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
            max_memo_characters: (0, helpers_1.isSet)(object.max_memo_characters) ? BigInt(object.max_memo_characters.toString()) : BigInt(0),
            tx_sig_limit: (0, helpers_1.isSet)(object.tx_sig_limit) ? BigInt(object.tx_sig_limit.toString()) : BigInt(0),
            tx_size_cost_per_byte: (0, helpers_1.isSet)(object.tx_size_cost_per_byte) ? BigInt(object.tx_size_cost_per_byte.toString()) : BigInt(0),
            sig_verify_cost_ed25519: (0, helpers_1.isSet)(object.sig_verify_cost_ed25519) ? BigInt(object.sig_verify_cost_ed25519.toString()) : BigInt(0),
            sig_verify_cost_secp256k1: (0, helpers_1.isSet)(object.sig_verify_cost_secp256k1) ? BigInt(object.sig_verify_cost_secp256k1.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.max_memo_characters !== undefined && (obj.max_memo_characters = (message.max_memo_characters || BigInt(0)).toString());
        message.tx_sig_limit !== undefined && (obj.tx_sig_limit = (message.tx_sig_limit || BigInt(0)).toString());
        message.tx_size_cost_per_byte !== undefined && (obj.tx_size_cost_per_byte = (message.tx_size_cost_per_byte || BigInt(0)).toString());
        message.sig_verify_cost_ed25519 !== undefined && (obj.sig_verify_cost_ed25519 = (message.sig_verify_cost_ed25519 || BigInt(0)).toString());
        message.sig_verify_cost_secp256k1 !== undefined && (obj.sig_verify_cost_secp256k1 = (message.sig_verify_cost_secp256k1 || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.max_memo_characters = object.max_memo_characters !== undefined && object.max_memo_characters !== null ? BigInt(object.max_memo_characters.toString()) : BigInt(0);
        message.tx_sig_limit = object.tx_sig_limit !== undefined && object.tx_sig_limit !== null ? BigInt(object.tx_sig_limit.toString()) : BigInt(0);
        message.tx_size_cost_per_byte = object.tx_size_cost_per_byte !== undefined && object.tx_size_cost_per_byte !== null ? BigInt(object.tx_size_cost_per_byte.toString()) : BigInt(0);
        message.sig_verify_cost_ed25519 = object.sig_verify_cost_ed25519 !== undefined && object.sig_verify_cost_ed25519 !== null ? BigInt(object.sig_verify_cost_ed25519.toString()) : BigInt(0);
        message.sig_verify_cost_secp256k1 = object.sig_verify_cost_secp256k1 !== undefined && object.sig_verify_cost_secp256k1 !== null ? BigInt(object.sig_verify_cost_secp256k1.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseParams();
        if (object.max_memo_characters !== undefined && object.max_memo_characters !== null) {
            message.max_memo_characters = BigInt(object.max_memo_characters);
        }
        if (object.tx_sig_limit !== undefined && object.tx_sig_limit !== null) {
            message.tx_sig_limit = BigInt(object.tx_sig_limit);
        }
        if (object.tx_size_cost_per_byte !== undefined && object.tx_size_cost_per_byte !== null) {
            message.tx_size_cost_per_byte = BigInt(object.tx_size_cost_per_byte);
        }
        if (object.sig_verify_cost_ed25519 !== undefined && object.sig_verify_cost_ed25519 !== null) {
            message.sig_verify_cost_ed25519 = BigInt(object.sig_verify_cost_ed25519);
        }
        if (object.sig_verify_cost_secp256k1 !== undefined && object.sig_verify_cost_secp256k1 !== null) {
            message.sig_verify_cost_secp256k1 = BigInt(object.sig_verify_cost_secp256k1);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.max_memo_characters = message.max_memo_characters ? message.max_memo_characters.toString() : undefined;
        obj.tx_sig_limit = message.tx_sig_limit ? message.tx_sig_limit.toString() : undefined;
        obj.tx_size_cost_per_byte = message.tx_size_cost_per_byte ? message.tx_size_cost_per_byte.toString() : undefined;
        obj.sig_verify_cost_ed25519 = message.sig_verify_cost_ed25519 ? message.sig_verify_cost_ed25519.toString() : undefined;
        obj.sig_verify_cost_secp256k1 = message.sig_verify_cost_secp256k1 ? message.sig_verify_cost_secp256k1.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Params.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/x/auth/Params",
            value: exports.Params.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Params.decode(message.value);
    },
    toProto(message) {
        return exports.Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.auth.v1beta1.Params",
            value: exports.Params.encode(message).finish()
        };
    }
};
//# sourceMappingURL=auth.js.map
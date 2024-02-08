//@ts-nocheck
import { Any } from "../../../google/protobuf/any";
import { signModeFromJSON, signModeToJSON } from "../signing/v1beta1/signing";
import { CompactBitArray } from "../../crypto/multisig/v1beta1/multisig";
import { Coin } from "../../base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export const protobufPackage = "cosmos.tx.v1beta1";
function createBaseTx() {
    return {
        body: undefined,
        auth_info: undefined,
        signatures: []
    };
}
export const Tx = {
    typeUrl: "/cosmos.tx.v1beta1.Tx",
    aminoType: "cosmos-sdk/Tx",
    is(o) {
        return o && (o.$typeUrl === Tx.typeUrl || Array.isArray(o.signatures) && (!o.signatures.length || o.signatures[0] instanceof Uint8Array || typeof o.signatures[0] === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === Tx.typeUrl || Array.isArray(o.signatures) && (!o.signatures.length || o.signatures[0] instanceof Uint8Array || typeof o.signatures[0] === "string"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === Tx.typeUrl || Array.isArray(o.signatures) && (!o.signatures.length || o.signatures[0] instanceof Uint8Array || typeof o.signatures[0] === "string"));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.body !== undefined) {
            TxBody.encode(message.body, writer.uint32(10).fork()).ldelim();
        }
        if (message.auth_info !== undefined) {
            AuthInfo.encode(message.auth_info, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.signatures) {
            writer.uint32(26).bytes(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTx();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.body = TxBody.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.auth_info = AuthInfo.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.signatures.push(reader.bytes());
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
            body: isSet(object.body) ? TxBody.fromJSON(object.body) : undefined,
            auth_info: isSet(object.auth_info) ? AuthInfo.fromJSON(object.auth_info) : undefined,
            signatures: Array.isArray(object?.signatures) ? object.signatures.map((e) => bytesFromBase64(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.body !== undefined && (obj.body = message.body ? TxBody.toJSON(message.body) : undefined);
        message.auth_info !== undefined && (obj.auth_info = message.auth_info ? AuthInfo.toJSON(message.auth_info) : undefined);
        if (message.signatures) {
            obj.signatures = message.signatures.map(e => base64FromBytes(e !== undefined ? e : new Uint8Array()));
        }
        else {
            obj.signatures = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTx();
        message.body = object.body !== undefined && object.body !== null ? TxBody.fromPartial(object.body) : undefined;
        message.auth_info = object.auth_info !== undefined && object.auth_info !== null ? AuthInfo.fromPartial(object.auth_info) : undefined;
        message.signatures = object.signatures?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseTx();
        if (object.body !== undefined && object.body !== null) {
            message.body = TxBody.fromAmino(object.body);
        }
        if (object.auth_info !== undefined && object.auth_info !== null) {
            message.auth_info = AuthInfo.fromAmino(object.auth_info);
        }
        message.signatures = object.signatures?.map(e => bytesFromBase64(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.body = message.body ? TxBody.toAmino(message.body) : undefined;
        obj.auth_info = message.auth_info ? AuthInfo.toAmino(message.auth_info) : undefined;
        if (message.signatures) {
            obj.signatures = message.signatures.map(e => base64FromBytes(e));
        }
        else {
            obj.signatures = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return Tx.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Tx",
            value: Tx.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Tx.decode(message.value);
    },
    toProto(message) {
        return Tx.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.Tx",
            value: Tx.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(Tx.typeUrl, Tx);
GlobalDecoderRegistry.registerAminoProtoMapping(Tx.aminoType, Tx.typeUrl);
function createBaseTxRaw() {
    return {
        body_bytes: new Uint8Array(),
        auth_info_bytes: new Uint8Array(),
        signatures: []
    };
}
export const TxRaw = {
    typeUrl: "/cosmos.tx.v1beta1.TxRaw",
    aminoType: "cosmos-sdk/TxRaw",
    is(o) {
        return o && (o.$typeUrl === TxRaw.typeUrl || (o.body_bytes instanceof Uint8Array || typeof o.body_bytes === "string") && (o.auth_info_bytes instanceof Uint8Array || typeof o.auth_info_bytes === "string") && Array.isArray(o.signatures) && (!o.signatures.length || o.signatures[0] instanceof Uint8Array || typeof o.signatures[0] === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === TxRaw.typeUrl || (o.body_bytes instanceof Uint8Array || typeof o.body_bytes === "string") && (o.auth_info_bytes instanceof Uint8Array || typeof o.auth_info_bytes === "string") && Array.isArray(o.signatures) && (!o.signatures.length || o.signatures[0] instanceof Uint8Array || typeof o.signatures[0] === "string"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === TxRaw.typeUrl || (o.body_bytes instanceof Uint8Array || typeof o.body_bytes === "string") && (o.auth_info_bytes instanceof Uint8Array || typeof o.auth_info_bytes === "string") && Array.isArray(o.signatures) && (!o.signatures.length || o.signatures[0] instanceof Uint8Array || typeof o.signatures[0] === "string"));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.body_bytes.length !== 0) {
            writer.uint32(10).bytes(message.body_bytes);
        }
        if (message.auth_info_bytes.length !== 0) {
            writer.uint32(18).bytes(message.auth_info_bytes);
        }
        for (const v of message.signatures) {
            writer.uint32(26).bytes(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTxRaw();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.body_bytes = reader.bytes();
                    break;
                case 2:
                    message.auth_info_bytes = reader.bytes();
                    break;
                case 3:
                    message.signatures.push(reader.bytes());
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
            body_bytes: isSet(object.body_bytes) ? bytesFromBase64(object.body_bytes) : new Uint8Array(),
            auth_info_bytes: isSet(object.auth_info_bytes) ? bytesFromBase64(object.auth_info_bytes) : new Uint8Array(),
            signatures: Array.isArray(object?.signatures) ? object.signatures.map((e) => bytesFromBase64(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.body_bytes !== undefined && (obj.body_bytes = base64FromBytes(message.body_bytes !== undefined ? message.body_bytes : new Uint8Array()));
        message.auth_info_bytes !== undefined && (obj.auth_info_bytes = base64FromBytes(message.auth_info_bytes !== undefined ? message.auth_info_bytes : new Uint8Array()));
        if (message.signatures) {
            obj.signatures = message.signatures.map(e => base64FromBytes(e !== undefined ? e : new Uint8Array()));
        }
        else {
            obj.signatures = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTxRaw();
        message.body_bytes = object.body_bytes ?? new Uint8Array();
        message.auth_info_bytes = object.auth_info_bytes ?? new Uint8Array();
        message.signatures = object.signatures?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseTxRaw();
        if (object.body_bytes !== undefined && object.body_bytes !== null) {
            message.body_bytes = bytesFromBase64(object.body_bytes);
        }
        if (object.auth_info_bytes !== undefined && object.auth_info_bytes !== null) {
            message.auth_info_bytes = bytesFromBase64(object.auth_info_bytes);
        }
        message.signatures = object.signatures?.map(e => bytesFromBase64(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.body_bytes = message.body_bytes ? base64FromBytes(message.body_bytes) : undefined;
        obj.auth_info_bytes = message.auth_info_bytes ? base64FromBytes(message.auth_info_bytes) : undefined;
        if (message.signatures) {
            obj.signatures = message.signatures.map(e => base64FromBytes(e));
        }
        else {
            obj.signatures = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return TxRaw.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/TxRaw",
            value: TxRaw.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return TxRaw.decode(message.value);
    },
    toProto(message) {
        return TxRaw.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.TxRaw",
            value: TxRaw.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(TxRaw.typeUrl, TxRaw);
GlobalDecoderRegistry.registerAminoProtoMapping(TxRaw.aminoType, TxRaw.typeUrl);
function createBaseSignDoc() {
    return {
        body_bytes: new Uint8Array(),
        auth_info_bytes: new Uint8Array(),
        chain_id: "",
        account_number: BigInt(0)
    };
}
export const SignDoc = {
    typeUrl: "/cosmos.tx.v1beta1.SignDoc",
    aminoType: "cosmos-sdk/SignDoc",
    is(o) {
        return o && (o.$typeUrl === SignDoc.typeUrl || (o.body_bytes instanceof Uint8Array || typeof o.body_bytes === "string") && (o.auth_info_bytes instanceof Uint8Array || typeof o.auth_info_bytes === "string") && typeof o.chain_id === "string" && typeof o.account_number === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === SignDoc.typeUrl || (o.body_bytes instanceof Uint8Array || typeof o.body_bytes === "string") && (o.auth_info_bytes instanceof Uint8Array || typeof o.auth_info_bytes === "string") && typeof o.chain_id === "string" && typeof o.account_number === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === SignDoc.typeUrl || (o.body_bytes instanceof Uint8Array || typeof o.body_bytes === "string") && (o.auth_info_bytes instanceof Uint8Array || typeof o.auth_info_bytes === "string") && typeof o.chain_id === "string" && typeof o.account_number === "bigint");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.body_bytes.length !== 0) {
            writer.uint32(10).bytes(message.body_bytes);
        }
        if (message.auth_info_bytes.length !== 0) {
            writer.uint32(18).bytes(message.auth_info_bytes);
        }
        if (message.chain_id !== "") {
            writer.uint32(26).string(message.chain_id);
        }
        if (message.account_number !== BigInt(0)) {
            writer.uint32(32).uint64(message.account_number);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSignDoc();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.body_bytes = reader.bytes();
                    break;
                case 2:
                    message.auth_info_bytes = reader.bytes();
                    break;
                case 3:
                    message.chain_id = reader.string();
                    break;
                case 4:
                    message.account_number = reader.uint64();
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
            body_bytes: isSet(object.body_bytes) ? bytesFromBase64(object.body_bytes) : new Uint8Array(),
            auth_info_bytes: isSet(object.auth_info_bytes) ? bytesFromBase64(object.auth_info_bytes) : new Uint8Array(),
            chain_id: isSet(object.chain_id) ? String(object.chain_id) : "",
            account_number: isSet(object.account_number) ? BigInt(object.account_number.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.body_bytes !== undefined && (obj.body_bytes = base64FromBytes(message.body_bytes !== undefined ? message.body_bytes : new Uint8Array()));
        message.auth_info_bytes !== undefined && (obj.auth_info_bytes = base64FromBytes(message.auth_info_bytes !== undefined ? message.auth_info_bytes : new Uint8Array()));
        message.chain_id !== undefined && (obj.chain_id = message.chain_id);
        message.account_number !== undefined && (obj.account_number = (message.account_number || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSignDoc();
        message.body_bytes = object.body_bytes ?? new Uint8Array();
        message.auth_info_bytes = object.auth_info_bytes ?? new Uint8Array();
        message.chain_id = object.chain_id ?? "";
        message.account_number = object.account_number !== undefined && object.account_number !== null ? BigInt(object.account_number.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseSignDoc();
        if (object.body_bytes !== undefined && object.body_bytes !== null) {
            message.body_bytes = bytesFromBase64(object.body_bytes);
        }
        if (object.auth_info_bytes !== undefined && object.auth_info_bytes !== null) {
            message.auth_info_bytes = bytesFromBase64(object.auth_info_bytes);
        }
        if (object.chain_id !== undefined && object.chain_id !== null) {
            message.chain_id = object.chain_id;
        }
        if (object.account_number !== undefined && object.account_number !== null) {
            message.account_number = BigInt(object.account_number);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.body_bytes = message.body_bytes ? base64FromBytes(message.body_bytes) : undefined;
        obj.auth_info_bytes = message.auth_info_bytes ? base64FromBytes(message.auth_info_bytes) : undefined;
        obj.chain_id = message.chain_id;
        obj.account_number = message.account_number ? message.account_number.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return SignDoc.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/SignDoc",
            value: SignDoc.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return SignDoc.decode(message.value);
    },
    toProto(message) {
        return SignDoc.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.SignDoc",
            value: SignDoc.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(SignDoc.typeUrl, SignDoc);
GlobalDecoderRegistry.registerAminoProtoMapping(SignDoc.aminoType, SignDoc.typeUrl);
function createBaseSignDocDirectAux() {
    return {
        body_bytes: new Uint8Array(),
        public_key: undefined,
        chain_id: "",
        account_number: BigInt(0),
        sequence: BigInt(0),
        tip: undefined
    };
}
export const SignDocDirectAux = {
    typeUrl: "/cosmos.tx.v1beta1.SignDocDirectAux",
    aminoType: "cosmos-sdk/SignDocDirectAux",
    is(o) {
        return o && (o.$typeUrl === SignDocDirectAux.typeUrl || (o.body_bytes instanceof Uint8Array || typeof o.body_bytes === "string") && typeof o.chain_id === "string" && typeof o.account_number === "bigint" && typeof o.sequence === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === SignDocDirectAux.typeUrl || (o.body_bytes instanceof Uint8Array || typeof o.body_bytes === "string") && typeof o.chain_id === "string" && typeof o.account_number === "bigint" && typeof o.sequence === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === SignDocDirectAux.typeUrl || (o.body_bytes instanceof Uint8Array || typeof o.body_bytes === "string") && typeof o.chain_id === "string" && typeof o.account_number === "bigint" && typeof o.sequence === "bigint");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.body_bytes.length !== 0) {
            writer.uint32(10).bytes(message.body_bytes);
        }
        if (message.public_key !== undefined) {
            Any.encode(message.public_key, writer.uint32(18).fork()).ldelim();
        }
        if (message.chain_id !== "") {
            writer.uint32(26).string(message.chain_id);
        }
        if (message.account_number !== BigInt(0)) {
            writer.uint32(32).uint64(message.account_number);
        }
        if (message.sequence !== BigInt(0)) {
            writer.uint32(40).uint64(message.sequence);
        }
        if (message.tip !== undefined) {
            Tip.encode(message.tip, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSignDocDirectAux();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.body_bytes = reader.bytes();
                    break;
                case 2:
                    message.public_key = Any.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.chain_id = reader.string();
                    break;
                case 4:
                    message.account_number = reader.uint64();
                    break;
                case 5:
                    message.sequence = reader.uint64();
                    break;
                case 6:
                    message.tip = Tip.decode(reader, reader.uint32());
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
            body_bytes: isSet(object.body_bytes) ? bytesFromBase64(object.body_bytes) : new Uint8Array(),
            public_key: isSet(object.public_key) ? Any.fromJSON(object.public_key) : undefined,
            chain_id: isSet(object.chain_id) ? String(object.chain_id) : "",
            account_number: isSet(object.account_number) ? BigInt(object.account_number.toString()) : BigInt(0),
            sequence: isSet(object.sequence) ? BigInt(object.sequence.toString()) : BigInt(0),
            tip: isSet(object.tip) ? Tip.fromJSON(object.tip) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.body_bytes !== undefined && (obj.body_bytes = base64FromBytes(message.body_bytes !== undefined ? message.body_bytes : new Uint8Array()));
        message.public_key !== undefined && (obj.public_key = message.public_key ? Any.toJSON(message.public_key) : undefined);
        message.chain_id !== undefined && (obj.chain_id = message.chain_id);
        message.account_number !== undefined && (obj.account_number = (message.account_number || BigInt(0)).toString());
        message.sequence !== undefined && (obj.sequence = (message.sequence || BigInt(0)).toString());
        message.tip !== undefined && (obj.tip = message.tip ? Tip.toJSON(message.tip) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSignDocDirectAux();
        message.body_bytes = object.body_bytes ?? new Uint8Array();
        message.public_key = object.public_key !== undefined && object.public_key !== null ? Any.fromPartial(object.public_key) : undefined;
        message.chain_id = object.chain_id ?? "";
        message.account_number = object.account_number !== undefined && object.account_number !== null ? BigInt(object.account_number.toString()) : BigInt(0);
        message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
        message.tip = object.tip !== undefined && object.tip !== null ? Tip.fromPartial(object.tip) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseSignDocDirectAux();
        if (object.body_bytes !== undefined && object.body_bytes !== null) {
            message.body_bytes = bytesFromBase64(object.body_bytes);
        }
        if (object.public_key !== undefined && object.public_key !== null) {
            message.public_key = Any.fromAmino(object.public_key);
        }
        if (object.chain_id !== undefined && object.chain_id !== null) {
            message.chain_id = object.chain_id;
        }
        if (object.account_number !== undefined && object.account_number !== null) {
            message.account_number = BigInt(object.account_number);
        }
        if (object.sequence !== undefined && object.sequence !== null) {
            message.sequence = BigInt(object.sequence);
        }
        if (object.tip !== undefined && object.tip !== null) {
            message.tip = Tip.fromAmino(object.tip);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.body_bytes = message.body_bytes ? base64FromBytes(message.body_bytes) : undefined;
        obj.public_key = message.public_key ? Any.toAmino(message.public_key) : undefined;
        obj.chain_id = message.chain_id;
        obj.account_number = message.account_number ? message.account_number.toString() : undefined;
        obj.sequence = message.sequence ? message.sequence.toString() : undefined;
        obj.tip = message.tip ? Tip.toAmino(message.tip) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return SignDocDirectAux.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/SignDocDirectAux",
            value: SignDocDirectAux.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return SignDocDirectAux.decode(message.value);
    },
    toProto(message) {
        return SignDocDirectAux.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.SignDocDirectAux",
            value: SignDocDirectAux.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(SignDocDirectAux.typeUrl, SignDocDirectAux);
GlobalDecoderRegistry.registerAminoProtoMapping(SignDocDirectAux.aminoType, SignDocDirectAux.typeUrl);
function createBaseTxBody() {
    return {
        messages: [],
        memo: "",
        timeout_height: BigInt(0),
        extension_options: [],
        non_critical_extension_options: []
    };
}
export const TxBody = {
    typeUrl: "/cosmos.tx.v1beta1.TxBody",
    aminoType: "cosmos-sdk/TxBody",
    is(o) {
        return o && (o.$typeUrl === TxBody.typeUrl || Array.isArray(o.messages) && (!o.messages.length || Any.is(o.messages[0])) && typeof o.memo === "string" && typeof o.timeout_height === "bigint" && Array.isArray(o.extension_options) && (!o.extension_options.length || Any.is(o.extension_options[0])) && Array.isArray(o.non_critical_extension_options) && (!o.non_critical_extension_options.length || Any.is(o.non_critical_extension_options[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === TxBody.typeUrl || Array.isArray(o.messages) && (!o.messages.length || Any.isSDK(o.messages[0])) && typeof o.memo === "string" && typeof o.timeout_height === "bigint" && Array.isArray(o.extension_options) && (!o.extension_options.length || Any.isSDK(o.extension_options[0])) && Array.isArray(o.non_critical_extension_options) && (!o.non_critical_extension_options.length || Any.isSDK(o.non_critical_extension_options[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === TxBody.typeUrl || Array.isArray(o.messages) && (!o.messages.length || Any.isAmino(o.messages[0])) && typeof o.memo === "string" && typeof o.timeout_height === "bigint" && Array.isArray(o.extension_options) && (!o.extension_options.length || Any.isAmino(o.extension_options[0])) && Array.isArray(o.non_critical_extension_options) && (!o.non_critical_extension_options.length || Any.isAmino(o.non_critical_extension_options[0])));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.messages) {
            Any.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.memo !== "") {
            writer.uint32(18).string(message.memo);
        }
        if (message.timeout_height !== BigInt(0)) {
            writer.uint32(24).uint64(message.timeout_height);
        }
        for (const v of message.extension_options) {
            Any.encode(v, writer.uint32(8186).fork()).ldelim();
        }
        for (const v of message.non_critical_extension_options) {
            Any.encode(v, writer.uint32(16378).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTxBody();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.messages.push(Any.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.memo = reader.string();
                    break;
                case 3:
                    message.timeout_height = reader.uint64();
                    break;
                case 1023:
                    message.extension_options.push(Any.decode(reader, reader.uint32()));
                    break;
                case 2047:
                    message.non_critical_extension_options.push(Any.decode(reader, reader.uint32()));
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
            messages: Array.isArray(object?.messages) ? object.messages.map((e) => Any.fromJSON(e)) : [],
            memo: isSet(object.memo) ? String(object.memo) : "",
            timeout_height: isSet(object.timeout_height) ? BigInt(object.timeout_height.toString()) : BigInt(0),
            extension_options: Array.isArray(object?.extension_options) ? object.extension_options.map((e) => Any.fromJSON(e)) : [],
            non_critical_extension_options: Array.isArray(object?.non_critical_extension_options) ? object.non_critical_extension_options.map((e) => Any.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.messages) {
            obj.messages = message.messages.map(e => e ? Any.toJSON(e) : undefined);
        }
        else {
            obj.messages = [];
        }
        message.memo !== undefined && (obj.memo = message.memo);
        message.timeout_height !== undefined && (obj.timeout_height = (message.timeout_height || BigInt(0)).toString());
        if (message.extension_options) {
            obj.extension_options = message.extension_options.map(e => e ? Any.toJSON(e) : undefined);
        }
        else {
            obj.extension_options = [];
        }
        if (message.non_critical_extension_options) {
            obj.non_critical_extension_options = message.non_critical_extension_options.map(e => e ? Any.toJSON(e) : undefined);
        }
        else {
            obj.non_critical_extension_options = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTxBody();
        message.messages = object.messages?.map(e => Any.fromPartial(e)) || [];
        message.memo = object.memo ?? "";
        message.timeout_height = object.timeout_height !== undefined && object.timeout_height !== null ? BigInt(object.timeout_height.toString()) : BigInt(0);
        message.extension_options = object.extension_options?.map(e => Any.fromPartial(e)) || [];
        message.non_critical_extension_options = object.non_critical_extension_options?.map(e => Any.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseTxBody();
        message.messages = object.messages?.map(e => Any.fromAmino(e)) || [];
        if (object.memo !== undefined && object.memo !== null) {
            message.memo = object.memo;
        }
        if (object.timeout_height !== undefined && object.timeout_height !== null) {
            message.timeout_height = BigInt(object.timeout_height);
        }
        message.extension_options = object.extension_options?.map(e => Any.fromAmino(e)) || [];
        message.non_critical_extension_options = object.non_critical_extension_options?.map(e => Any.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.messages) {
            obj.messages = message.messages.map(e => e ? Any.toAmino(e) : undefined);
        }
        else {
            obj.messages = [];
        }
        obj.memo = message.memo;
        obj.timeout_height = message.timeout_height ? message.timeout_height.toString() : undefined;
        if (message.extension_options) {
            obj.extension_options = message.extension_options.map(e => e ? Any.toAmino(e) : undefined);
        }
        else {
            obj.extension_options = [];
        }
        if (message.non_critical_extension_options) {
            obj.non_critical_extension_options = message.non_critical_extension_options.map(e => e ? Any.toAmino(e) : undefined);
        }
        else {
            obj.non_critical_extension_options = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return TxBody.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/TxBody",
            value: TxBody.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return TxBody.decode(message.value);
    },
    toProto(message) {
        return TxBody.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.TxBody",
            value: TxBody.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(TxBody.typeUrl, TxBody);
GlobalDecoderRegistry.registerAminoProtoMapping(TxBody.aminoType, TxBody.typeUrl);
function createBaseAuthInfo() {
    return {
        signer_infos: [],
        fee: undefined,
        tip: undefined
    };
}
export const AuthInfo = {
    typeUrl: "/cosmos.tx.v1beta1.AuthInfo",
    aminoType: "cosmos-sdk/AuthInfo",
    is(o) {
        return o && (o.$typeUrl === AuthInfo.typeUrl || Array.isArray(o.signer_infos) && (!o.signer_infos.length || SignerInfo.is(o.signer_infos[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === AuthInfo.typeUrl || Array.isArray(o.signer_infos) && (!o.signer_infos.length || SignerInfo.isSDK(o.signer_infos[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === AuthInfo.typeUrl || Array.isArray(o.signer_infos) && (!o.signer_infos.length || SignerInfo.isAmino(o.signer_infos[0])));
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.signer_infos) {
            SignerInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.fee !== undefined) {
            Fee.encode(message.fee, writer.uint32(18).fork()).ldelim();
        }
        if (message.tip !== undefined) {
            Tip.encode(message.tip, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAuthInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.signer_infos.push(SignerInfo.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.fee = Fee.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.tip = Tip.decode(reader, reader.uint32());
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
            signer_infos: Array.isArray(object?.signer_infos) ? object.signer_infos.map((e) => SignerInfo.fromJSON(e)) : [],
            fee: isSet(object.fee) ? Fee.fromJSON(object.fee) : undefined,
            tip: isSet(object.tip) ? Tip.fromJSON(object.tip) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.signer_infos) {
            obj.signer_infos = message.signer_infos.map(e => e ? SignerInfo.toJSON(e) : undefined);
        }
        else {
            obj.signer_infos = [];
        }
        message.fee !== undefined && (obj.fee = message.fee ? Fee.toJSON(message.fee) : undefined);
        message.tip !== undefined && (obj.tip = message.tip ? Tip.toJSON(message.tip) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAuthInfo();
        message.signer_infos = object.signer_infos?.map(e => SignerInfo.fromPartial(e)) || [];
        message.fee = object.fee !== undefined && object.fee !== null ? Fee.fromPartial(object.fee) : undefined;
        message.tip = object.tip !== undefined && object.tip !== null ? Tip.fromPartial(object.tip) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseAuthInfo();
        message.signer_infos = object.signer_infos?.map(e => SignerInfo.fromAmino(e)) || [];
        if (object.fee !== undefined && object.fee !== null) {
            message.fee = Fee.fromAmino(object.fee);
        }
        if (object.tip !== undefined && object.tip !== null) {
            message.tip = Tip.fromAmino(object.tip);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.signer_infos) {
            obj.signer_infos = message.signer_infos.map(e => e ? SignerInfo.toAmino(e) : undefined);
        }
        else {
            obj.signer_infos = [];
        }
        obj.fee = message.fee ? Fee.toAmino(message.fee) : undefined;
        obj.tip = message.tip ? Tip.toAmino(message.tip) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return AuthInfo.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/AuthInfo",
            value: AuthInfo.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return AuthInfo.decode(message.value);
    },
    toProto(message) {
        return AuthInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.AuthInfo",
            value: AuthInfo.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(AuthInfo.typeUrl, AuthInfo);
GlobalDecoderRegistry.registerAminoProtoMapping(AuthInfo.aminoType, AuthInfo.typeUrl);
function createBaseSignerInfo() {
    return {
        public_key: undefined,
        mode_info: undefined,
        sequence: BigInt(0)
    };
}
export const SignerInfo = {
    typeUrl: "/cosmos.tx.v1beta1.SignerInfo",
    aminoType: "cosmos-sdk/SignerInfo",
    is(o) {
        return o && (o.$typeUrl === SignerInfo.typeUrl || typeof o.sequence === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === SignerInfo.typeUrl || typeof o.sequence === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === SignerInfo.typeUrl || typeof o.sequence === "bigint");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.public_key !== undefined) {
            Any.encode(message.public_key, writer.uint32(10).fork()).ldelim();
        }
        if (message.mode_info !== undefined) {
            ModeInfo.encode(message.mode_info, writer.uint32(18).fork()).ldelim();
        }
        if (message.sequence !== BigInt(0)) {
            writer.uint32(24).uint64(message.sequence);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSignerInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.public_key = Any.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.mode_info = ModeInfo.decode(reader, reader.uint32());
                    break;
                case 3:
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
            public_key: isSet(object.public_key) ? Any.fromJSON(object.public_key) : undefined,
            mode_info: isSet(object.mode_info) ? ModeInfo.fromJSON(object.mode_info) : undefined,
            sequence: isSet(object.sequence) ? BigInt(object.sequence.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.public_key !== undefined && (obj.public_key = message.public_key ? Any.toJSON(message.public_key) : undefined);
        message.mode_info !== undefined && (obj.mode_info = message.mode_info ? ModeInfo.toJSON(message.mode_info) : undefined);
        message.sequence !== undefined && (obj.sequence = (message.sequence || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSignerInfo();
        message.public_key = object.public_key !== undefined && object.public_key !== null ? Any.fromPartial(object.public_key) : undefined;
        message.mode_info = object.mode_info !== undefined && object.mode_info !== null ? ModeInfo.fromPartial(object.mode_info) : undefined;
        message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseSignerInfo();
        if (object.public_key !== undefined && object.public_key !== null) {
            message.public_key = Any.fromAmino(object.public_key);
        }
        if (object.mode_info !== undefined && object.mode_info !== null) {
            message.mode_info = ModeInfo.fromAmino(object.mode_info);
        }
        if (object.sequence !== undefined && object.sequence !== null) {
            message.sequence = BigInt(object.sequence);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.public_key = message.public_key ? Any.toAmino(message.public_key) : undefined;
        obj.mode_info = message.mode_info ? ModeInfo.toAmino(message.mode_info) : undefined;
        obj.sequence = message.sequence ? message.sequence.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return SignerInfo.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/SignerInfo",
            value: SignerInfo.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return SignerInfo.decode(message.value);
    },
    toProto(message) {
        return SignerInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.SignerInfo",
            value: SignerInfo.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(SignerInfo.typeUrl, SignerInfo);
GlobalDecoderRegistry.registerAminoProtoMapping(SignerInfo.aminoType, SignerInfo.typeUrl);
function createBaseModeInfo() {
    return {
        single: undefined,
        multi: undefined
    };
}
export const ModeInfo = {
    typeUrl: "/cosmos.tx.v1beta1.ModeInfo",
    aminoType: "cosmos-sdk/ModeInfo",
    is(o) {
        return o && o.$typeUrl === ModeInfo.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === ModeInfo.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === ModeInfo.typeUrl;
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.single !== undefined) {
            ModeInfo_Single.encode(message.single, writer.uint32(10).fork()).ldelim();
        }
        if (message.multi !== undefined) {
            ModeInfo_Multi.encode(message.multi, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModeInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.single = ModeInfo_Single.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.multi = ModeInfo_Multi.decode(reader, reader.uint32());
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
            single: isSet(object.single) ? ModeInfo_Single.fromJSON(object.single) : undefined,
            multi: isSet(object.multi) ? ModeInfo_Multi.fromJSON(object.multi) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.single !== undefined && (obj.single = message.single ? ModeInfo_Single.toJSON(message.single) : undefined);
        message.multi !== undefined && (obj.multi = message.multi ? ModeInfo_Multi.toJSON(message.multi) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseModeInfo();
        message.single = object.single !== undefined && object.single !== null ? ModeInfo_Single.fromPartial(object.single) : undefined;
        message.multi = object.multi !== undefined && object.multi !== null ? ModeInfo_Multi.fromPartial(object.multi) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseModeInfo();
        if (object.single !== undefined && object.single !== null) {
            message.single = ModeInfo_Single.fromAmino(object.single);
        }
        if (object.multi !== undefined && object.multi !== null) {
            message.multi = ModeInfo_Multi.fromAmino(object.multi);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.single = message.single ? ModeInfo_Single.toAmino(message.single) : undefined;
        obj.multi = message.multi ? ModeInfo_Multi.toAmino(message.multi) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ModeInfo.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ModeInfo",
            value: ModeInfo.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ModeInfo.decode(message.value);
    },
    toProto(message) {
        return ModeInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.ModeInfo",
            value: ModeInfo.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(ModeInfo.typeUrl, ModeInfo);
GlobalDecoderRegistry.registerAminoProtoMapping(ModeInfo.aminoType, ModeInfo.typeUrl);
function createBaseModeInfo_Single() {
    return {
        mode: 0
    };
}
export const ModeInfo_Single = {
    typeUrl: "/cosmos.tx.v1beta1.Single",
    aminoType: "cosmos-sdk/Single",
    is(o) {
        return o && (o.$typeUrl === ModeInfo_Single.typeUrl || isSet(o.mode));
    },
    isSDK(o) {
        return o && (o.$typeUrl === ModeInfo_Single.typeUrl || isSet(o.mode));
    },
    isAmino(o) {
        return o && (o.$typeUrl === ModeInfo_Single.typeUrl || isSet(o.mode));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.mode !== 0) {
            writer.uint32(8).int32(message.mode);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModeInfo_Single();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mode = reader.int32();
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
            mode: isSet(object.mode) ? signModeFromJSON(object.mode) : -1
        };
    },
    toJSON(message) {
        const obj = {};
        message.mode !== undefined && (obj.mode = signModeToJSON(message.mode));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseModeInfo_Single();
        message.mode = object.mode ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseModeInfo_Single();
        if (object.mode !== undefined && object.mode !== null) {
            message.mode = signModeFromJSON(object.mode);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.mode = message.mode;
        return obj;
    },
    fromAminoMsg(object) {
        return ModeInfo_Single.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Single",
            value: ModeInfo_Single.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ModeInfo_Single.decode(message.value);
    },
    toProto(message) {
        return ModeInfo_Single.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.Single",
            value: ModeInfo_Single.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(ModeInfo_Single.typeUrl, ModeInfo_Single);
GlobalDecoderRegistry.registerAminoProtoMapping(ModeInfo_Single.aminoType, ModeInfo_Single.typeUrl);
function createBaseModeInfo_Multi() {
    return {
        bitarray: undefined,
        mode_infos: []
    };
}
export const ModeInfo_Multi = {
    typeUrl: "/cosmos.tx.v1beta1.Multi",
    aminoType: "cosmos-sdk/Multi",
    is(o) {
        return o && (o.$typeUrl === ModeInfo_Multi.typeUrl || Array.isArray(o.mode_infos) && (!o.mode_infos.length || ModeInfo.is(o.mode_infos[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === ModeInfo_Multi.typeUrl || Array.isArray(o.mode_infos) && (!o.mode_infos.length || ModeInfo.isSDK(o.mode_infos[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === ModeInfo_Multi.typeUrl || Array.isArray(o.mode_infos) && (!o.mode_infos.length || ModeInfo.isAmino(o.mode_infos[0])));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.bitarray !== undefined) {
            CompactBitArray.encode(message.bitarray, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.mode_infos) {
            ModeInfo.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModeInfo_Multi();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bitarray = CompactBitArray.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.mode_infos.push(ModeInfo.decode(reader, reader.uint32()));
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
            bitarray: isSet(object.bitarray) ? CompactBitArray.fromJSON(object.bitarray) : undefined,
            mode_infos: Array.isArray(object?.mode_infos) ? object.mode_infos.map((e) => ModeInfo.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.bitarray !== undefined && (obj.bitarray = message.bitarray ? CompactBitArray.toJSON(message.bitarray) : undefined);
        if (message.mode_infos) {
            obj.mode_infos = message.mode_infos.map(e => e ? ModeInfo.toJSON(e) : undefined);
        }
        else {
            obj.mode_infos = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseModeInfo_Multi();
        message.bitarray = object.bitarray !== undefined && object.bitarray !== null ? CompactBitArray.fromPartial(object.bitarray) : undefined;
        message.mode_infos = object.mode_infos?.map(e => ModeInfo.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseModeInfo_Multi();
        if (object.bitarray !== undefined && object.bitarray !== null) {
            message.bitarray = CompactBitArray.fromAmino(object.bitarray);
        }
        message.mode_infos = object.mode_infos?.map(e => ModeInfo.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.bitarray = message.bitarray ? CompactBitArray.toAmino(message.bitarray) : undefined;
        if (message.mode_infos) {
            obj.mode_infos = message.mode_infos.map(e => e ? ModeInfo.toAmino(e) : undefined);
        }
        else {
            obj.mode_infos = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return ModeInfo_Multi.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Multi",
            value: ModeInfo_Multi.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ModeInfo_Multi.decode(message.value);
    },
    toProto(message) {
        return ModeInfo_Multi.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.Multi",
            value: ModeInfo_Multi.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(ModeInfo_Multi.typeUrl, ModeInfo_Multi);
GlobalDecoderRegistry.registerAminoProtoMapping(ModeInfo_Multi.aminoType, ModeInfo_Multi.typeUrl);
function createBaseFee() {
    return {
        amount: [],
        gas_limit: BigInt(0),
        payer: "",
        granter: ""
    };
}
export const Fee = {
    typeUrl: "/cosmos.tx.v1beta1.Fee",
    aminoType: "cosmos-sdk/Fee",
    is(o) {
        return o && (o.$typeUrl === Fee.typeUrl || Array.isArray(o.amount) && (!o.amount.length || Coin.is(o.amount[0])) && typeof o.gas_limit === "bigint" && typeof o.payer === "string" && typeof o.granter === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === Fee.typeUrl || Array.isArray(o.amount) && (!o.amount.length || Coin.isSDK(o.amount[0])) && typeof o.gas_limit === "bigint" && typeof o.payer === "string" && typeof o.granter === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === Fee.typeUrl || Array.isArray(o.amount) && (!o.amount.length || Coin.isAmino(o.amount[0])) && typeof o.gas_limit === "bigint" && typeof o.payer === "string" && typeof o.granter === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.amount) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.gas_limit !== BigInt(0)) {
            writer.uint32(16).uint64(message.gas_limit);
        }
        if (message.payer !== "") {
            writer.uint32(26).string(message.payer);
        }
        if (message.granter !== "") {
            writer.uint32(34).string(message.granter);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFee();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.gas_limit = reader.uint64();
                    break;
                case 3:
                    message.payer = reader.string();
                    break;
                case 4:
                    message.granter = reader.string();
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
            amount: Array.isArray(object?.amount) ? object.amount.map((e) => Coin.fromJSON(e)) : [],
            gas_limit: isSet(object.gas_limit) ? BigInt(object.gas_limit.toString()) : BigInt(0),
            payer: isSet(object.payer) ? String(object.payer) : "",
            granter: isSet(object.granter) ? String(object.granter) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.amount = [];
        }
        message.gas_limit !== undefined && (obj.gas_limit = (message.gas_limit || BigInt(0)).toString());
        message.payer !== undefined && (obj.payer = message.payer);
        message.granter !== undefined && (obj.granter = message.granter);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseFee();
        message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
        message.gas_limit = object.gas_limit !== undefined && object.gas_limit !== null ? BigInt(object.gas_limit.toString()) : BigInt(0);
        message.payer = object.payer ?? "";
        message.granter = object.granter ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseFee();
        message.amount = object.amount?.map(e => Coin.fromAmino(e)) || [];
        if (object.gas_limit !== undefined && object.gas_limit !== null) {
            message.gas_limit = BigInt(object.gas_limit);
        }
        if (object.payer !== undefined && object.payer !== null) {
            message.payer = object.payer;
        }
        if (object.granter !== undefined && object.granter !== null) {
            message.granter = object.granter;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.amount = [];
        }
        obj.gas_limit = message.gas_limit ? message.gas_limit.toString() : undefined;
        obj.payer = message.payer;
        obj.granter = message.granter;
        return obj;
    },
    fromAminoMsg(object) {
        return Fee.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Fee",
            value: Fee.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Fee.decode(message.value);
    },
    toProto(message) {
        return Fee.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.Fee",
            value: Fee.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(Fee.typeUrl, Fee);
GlobalDecoderRegistry.registerAminoProtoMapping(Fee.aminoType, Fee.typeUrl);
function createBaseTip() {
    return {
        amount: [],
        tipper: ""
    };
}
export const Tip = {
    typeUrl: "/cosmos.tx.v1beta1.Tip",
    aminoType: "cosmos-sdk/Tip",
    is(o) {
        return o && (o.$typeUrl === Tip.typeUrl || Array.isArray(o.amount) && (!o.amount.length || Coin.is(o.amount[0])) && typeof o.tipper === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === Tip.typeUrl || Array.isArray(o.amount) && (!o.amount.length || Coin.isSDK(o.amount[0])) && typeof o.tipper === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === Tip.typeUrl || Array.isArray(o.amount) && (!o.amount.length || Coin.isAmino(o.amount[0])) && typeof o.tipper === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.amount) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.tipper !== "") {
            writer.uint32(18).string(message.tipper);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTip();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.tipper = reader.string();
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
            amount: Array.isArray(object?.amount) ? object.amount.map((e) => Coin.fromJSON(e)) : [],
            tipper: isSet(object.tipper) ? String(object.tipper) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.amount = [];
        }
        message.tipper !== undefined && (obj.tipper = message.tipper);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTip();
        message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
        message.tipper = object.tipper ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseTip();
        message.amount = object.amount?.map(e => Coin.fromAmino(e)) || [];
        if (object.tipper !== undefined && object.tipper !== null) {
            message.tipper = object.tipper;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.amount = [];
        }
        obj.tipper = message.tipper;
        return obj;
    },
    fromAminoMsg(object) {
        return Tip.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Tip",
            value: Tip.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Tip.decode(message.value);
    },
    toProto(message) {
        return Tip.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.Tip",
            value: Tip.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(Tip.typeUrl, Tip);
GlobalDecoderRegistry.registerAminoProtoMapping(Tip.aminoType, Tip.typeUrl);
function createBaseAuxSignerData() {
    return {
        address: "",
        sign_doc: undefined,
        mode: 0,
        sig: new Uint8Array()
    };
}
export const AuxSignerData = {
    typeUrl: "/cosmos.tx.v1beta1.AuxSignerData",
    aminoType: "cosmos-sdk/AuxSignerData",
    is(o) {
        return o && (o.$typeUrl === AuxSignerData.typeUrl || typeof o.address === "string" && isSet(o.mode) && (o.sig instanceof Uint8Array || typeof o.sig === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === AuxSignerData.typeUrl || typeof o.address === "string" && isSet(o.mode) && (o.sig instanceof Uint8Array || typeof o.sig === "string"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === AuxSignerData.typeUrl || typeof o.address === "string" && isSet(o.mode) && (o.sig instanceof Uint8Array || typeof o.sig === "string"));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.sign_doc !== undefined) {
            SignDocDirectAux.encode(message.sign_doc, writer.uint32(18).fork()).ldelim();
        }
        if (message.mode !== 0) {
            writer.uint32(24).int32(message.mode);
        }
        if (message.sig.length !== 0) {
            writer.uint32(34).bytes(message.sig);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAuxSignerData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.sign_doc = SignDocDirectAux.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.mode = reader.int32();
                    break;
                case 4:
                    message.sig = reader.bytes();
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
            address: isSet(object.address) ? String(object.address) : "",
            sign_doc: isSet(object.sign_doc) ? SignDocDirectAux.fromJSON(object.sign_doc) : undefined,
            mode: isSet(object.mode) ? signModeFromJSON(object.mode) : -1,
            sig: isSet(object.sig) ? bytesFromBase64(object.sig) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.sign_doc !== undefined && (obj.sign_doc = message.sign_doc ? SignDocDirectAux.toJSON(message.sign_doc) : undefined);
        message.mode !== undefined && (obj.mode = signModeToJSON(message.mode));
        message.sig !== undefined && (obj.sig = base64FromBytes(message.sig !== undefined ? message.sig : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAuxSignerData();
        message.address = object.address ?? "";
        message.sign_doc = object.sign_doc !== undefined && object.sign_doc !== null ? SignDocDirectAux.fromPartial(object.sign_doc) : undefined;
        message.mode = object.mode ?? 0;
        message.sig = object.sig ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseAuxSignerData();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.sign_doc !== undefined && object.sign_doc !== null) {
            message.sign_doc = SignDocDirectAux.fromAmino(object.sign_doc);
        }
        if (object.mode !== undefined && object.mode !== null) {
            message.mode = signModeFromJSON(object.mode);
        }
        if (object.sig !== undefined && object.sig !== null) {
            message.sig = bytesFromBase64(object.sig);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        obj.sign_doc = message.sign_doc ? SignDocDirectAux.toAmino(message.sign_doc) : undefined;
        obj.mode = message.mode;
        obj.sig = message.sig ? base64FromBytes(message.sig) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return AuxSignerData.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/AuxSignerData",
            value: AuxSignerData.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return AuxSignerData.decode(message.value);
    },
    toProto(message) {
        return AuxSignerData.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.AuxSignerData",
            value: AuxSignerData.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(AuxSignerData.typeUrl, AuxSignerData);
GlobalDecoderRegistry.registerAminoProtoMapping(AuxSignerData.aminoType, AuxSignerData.typeUrl);
//# sourceMappingURL=tx.js.map
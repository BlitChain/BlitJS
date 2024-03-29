//@ts-nocheck
import { Any } from "../../../../google/protobuf/any";
import { BIP44Params } from "../../hd/v1/hd";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet } from "../../../../helpers";
export const protobufPackage = "cosmos.crypto.keyring.v1";
function createBaseRecord() {
    return {
        name: "",
        pub_key: undefined,
        local: undefined,
        ledger: undefined,
        multi: undefined,
        offline: undefined
    };
}
export const Record = {
    typeUrl: "/cosmos.crypto.keyring.v1.Record",
    encode(message, writer = BinaryWriter.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.pub_key !== undefined) {
            Any.encode(message.pub_key, writer.uint32(18).fork()).ldelim();
        }
        if (message.local !== undefined) {
            Record_Local.encode(message.local, writer.uint32(26).fork()).ldelim();
        }
        if (message.ledger !== undefined) {
            Record_Ledger.encode(message.ledger, writer.uint32(34).fork()).ldelim();
        }
        if (message.multi !== undefined) {
            Record_Multi.encode(message.multi, writer.uint32(42).fork()).ldelim();
        }
        if (message.offline !== undefined) {
            Record_Offline.encode(message.offline, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRecord();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.pub_key = Any.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.local = Record_Local.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.ledger = Record_Ledger.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.multi = Record_Multi.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.offline = Record_Offline.decode(reader, reader.uint32());
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
            name: isSet(object.name) ? String(object.name) : "",
            pub_key: isSet(object.pub_key) ? Any.fromJSON(object.pub_key) : undefined,
            local: isSet(object.local) ? Record_Local.fromJSON(object.local) : undefined,
            ledger: isSet(object.ledger) ? Record_Ledger.fromJSON(object.ledger) : undefined,
            multi: isSet(object.multi) ? Record_Multi.fromJSON(object.multi) : undefined,
            offline: isSet(object.offline) ? Record_Offline.fromJSON(object.offline) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.pub_key !== undefined && (obj.pub_key = message.pub_key ? Any.toJSON(message.pub_key) : undefined);
        message.local !== undefined && (obj.local = message.local ? Record_Local.toJSON(message.local) : undefined);
        message.ledger !== undefined && (obj.ledger = message.ledger ? Record_Ledger.toJSON(message.ledger) : undefined);
        message.multi !== undefined && (obj.multi = message.multi ? Record_Multi.toJSON(message.multi) : undefined);
        message.offline !== undefined && (obj.offline = message.offline ? Record_Offline.toJSON(message.offline) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRecord();
        message.name = object.name ?? "";
        message.pub_key = object.pub_key !== undefined && object.pub_key !== null ? Any.fromPartial(object.pub_key) : undefined;
        message.local = object.local !== undefined && object.local !== null ? Record_Local.fromPartial(object.local) : undefined;
        message.ledger = object.ledger !== undefined && object.ledger !== null ? Record_Ledger.fromPartial(object.ledger) : undefined;
        message.multi = object.multi !== undefined && object.multi !== null ? Record_Multi.fromPartial(object.multi) : undefined;
        message.offline = object.offline !== undefined && object.offline !== null ? Record_Offline.fromPartial(object.offline) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseRecord();
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        if (object.pub_key !== undefined && object.pub_key !== null) {
            message.pub_key = Any.fromAmino(object.pub_key);
        }
        if (object.local !== undefined && object.local !== null) {
            message.local = Record_Local.fromAmino(object.local);
        }
        if (object.ledger !== undefined && object.ledger !== null) {
            message.ledger = Record_Ledger.fromAmino(object.ledger);
        }
        if (object.multi !== undefined && object.multi !== null) {
            message.multi = Record_Multi.fromAmino(object.multi);
        }
        if (object.offline !== undefined && object.offline !== null) {
            message.offline = Record_Offline.fromAmino(object.offline);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.name = message.name;
        obj.pub_key = message.pub_key ? Any.toAmino(message.pub_key) : undefined;
        obj.local = message.local ? Record_Local.toAmino(message.local) : undefined;
        obj.ledger = message.ledger ? Record_Ledger.toAmino(message.ledger) : undefined;
        obj.multi = message.multi ? Record_Multi.toAmino(message.multi) : undefined;
        obj.offline = message.offline ? Record_Offline.toAmino(message.offline) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Record.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Record",
            value: Record.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Record.decode(message.value);
    },
    toProto(message) {
        return Record.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.crypto.keyring.v1.Record",
            value: Record.encode(message).finish()
        };
    }
};
function createBaseRecord_Local() {
    return {
        priv_key: undefined
    };
}
export const Record_Local = {
    typeUrl: "/cosmos.crypto.keyring.v1.Local",
    encode(message, writer = BinaryWriter.create()) {
        if (message.priv_key !== undefined) {
            Any.encode(message.priv_key, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRecord_Local();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.priv_key = Any.decode(reader, reader.uint32());
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
            priv_key: isSet(object.priv_key) ? Any.fromJSON(object.priv_key) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.priv_key !== undefined && (obj.priv_key = message.priv_key ? Any.toJSON(message.priv_key) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRecord_Local();
        message.priv_key = object.priv_key !== undefined && object.priv_key !== null ? Any.fromPartial(object.priv_key) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseRecord_Local();
        if (object.priv_key !== undefined && object.priv_key !== null) {
            message.priv_key = Any.fromAmino(object.priv_key);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.priv_key = message.priv_key ? Any.toAmino(message.priv_key) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Record_Local.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Local",
            value: Record_Local.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Record_Local.decode(message.value);
    },
    toProto(message) {
        return Record_Local.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.crypto.keyring.v1.Local",
            value: Record_Local.encode(message).finish()
        };
    }
};
function createBaseRecord_Ledger() {
    return {
        path: undefined
    };
}
export const Record_Ledger = {
    typeUrl: "/cosmos.crypto.keyring.v1.Ledger",
    encode(message, writer = BinaryWriter.create()) {
        if (message.path !== undefined) {
            BIP44Params.encode(message.path, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRecord_Ledger();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.path = BIP44Params.decode(reader, reader.uint32());
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
            path: isSet(object.path) ? BIP44Params.fromJSON(object.path) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.path !== undefined && (obj.path = message.path ? BIP44Params.toJSON(message.path) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRecord_Ledger();
        message.path = object.path !== undefined && object.path !== null ? BIP44Params.fromPartial(object.path) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseRecord_Ledger();
        if (object.path !== undefined && object.path !== null) {
            message.path = BIP44Params.fromAmino(object.path);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.path = message.path ? BIP44Params.toAmino(message.path) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Record_Ledger.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Ledger",
            value: Record_Ledger.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Record_Ledger.decode(message.value);
    },
    toProto(message) {
        return Record_Ledger.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.crypto.keyring.v1.Ledger",
            value: Record_Ledger.encode(message).finish()
        };
    }
};
function createBaseRecord_Multi() {
    return {};
}
export const Record_Multi = {
    typeUrl: "/cosmos.crypto.keyring.v1.Multi",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRecord_Multi();
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
        const message = createBaseRecord_Multi();
        return message;
    },
    fromAmino(_) {
        const message = createBaseRecord_Multi();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return Record_Multi.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Multi",
            value: Record_Multi.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Record_Multi.decode(message.value);
    },
    toProto(message) {
        return Record_Multi.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.crypto.keyring.v1.Multi",
            value: Record_Multi.encode(message).finish()
        };
    }
};
function createBaseRecord_Offline() {
    return {};
}
export const Record_Offline = {
    typeUrl: "/cosmos.crypto.keyring.v1.Offline",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRecord_Offline();
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
        const message = createBaseRecord_Offline();
        return message;
    },
    fromAmino(_) {
        const message = createBaseRecord_Offline();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return Record_Offline.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Offline",
            value: Record_Offline.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Record_Offline.decode(message.value);
    },
    toProto(message) {
        return Record_Offline.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.crypto.keyring.v1.Offline",
            value: Record_Offline.encode(message).finish()
        };
    }
};
//# sourceMappingURL=record.js.map
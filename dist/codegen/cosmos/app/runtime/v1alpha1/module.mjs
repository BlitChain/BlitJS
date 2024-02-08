//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet } from "../../../../helpers";
import { GlobalDecoderRegistry } from "../../../../registry";
export const protobufPackage = "cosmos.app.runtime.v1alpha1";
function createBaseModule() {
    return {
        app_name: "",
        begin_blockers: [],
        end_blockers: [],
        init_genesis: [],
        export_genesis: [],
        override_store_keys: [],
        order_migrations: [],
        precommiters: [],
        prepare_check_staters: []
    };
}
export const Module = {
    typeUrl: "/cosmos.app.runtime.v1alpha1.Module",
    aminoType: "cosmos-sdk/Module",
    is(o) {
        return o && (o.$typeUrl === Module.typeUrl || typeof o.app_name === "string" && Array.isArray(o.begin_blockers) && (!o.begin_blockers.length || typeof o.begin_blockers[0] === "string") && Array.isArray(o.end_blockers) && (!o.end_blockers.length || typeof o.end_blockers[0] === "string") && Array.isArray(o.init_genesis) && (!o.init_genesis.length || typeof o.init_genesis[0] === "string") && Array.isArray(o.export_genesis) && (!o.export_genesis.length || typeof o.export_genesis[0] === "string") && Array.isArray(o.override_store_keys) && (!o.override_store_keys.length || StoreKeyConfig.is(o.override_store_keys[0])) && Array.isArray(o.order_migrations) && (!o.order_migrations.length || typeof o.order_migrations[0] === "string") && Array.isArray(o.precommiters) && (!o.precommiters.length || typeof o.precommiters[0] === "string") && Array.isArray(o.prepare_check_staters) && (!o.prepare_check_staters.length || typeof o.prepare_check_staters[0] === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === Module.typeUrl || typeof o.app_name === "string" && Array.isArray(o.begin_blockers) && (!o.begin_blockers.length || typeof o.begin_blockers[0] === "string") && Array.isArray(o.end_blockers) && (!o.end_blockers.length || typeof o.end_blockers[0] === "string") && Array.isArray(o.init_genesis) && (!o.init_genesis.length || typeof o.init_genesis[0] === "string") && Array.isArray(o.export_genesis) && (!o.export_genesis.length || typeof o.export_genesis[0] === "string") && Array.isArray(o.override_store_keys) && (!o.override_store_keys.length || StoreKeyConfig.isSDK(o.override_store_keys[0])) && Array.isArray(o.order_migrations) && (!o.order_migrations.length || typeof o.order_migrations[0] === "string") && Array.isArray(o.precommiters) && (!o.precommiters.length || typeof o.precommiters[0] === "string") && Array.isArray(o.prepare_check_staters) && (!o.prepare_check_staters.length || typeof o.prepare_check_staters[0] === "string"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === Module.typeUrl || typeof o.app_name === "string" && Array.isArray(o.begin_blockers) && (!o.begin_blockers.length || typeof o.begin_blockers[0] === "string") && Array.isArray(o.end_blockers) && (!o.end_blockers.length || typeof o.end_blockers[0] === "string") && Array.isArray(o.init_genesis) && (!o.init_genesis.length || typeof o.init_genesis[0] === "string") && Array.isArray(o.export_genesis) && (!o.export_genesis.length || typeof o.export_genesis[0] === "string") && Array.isArray(o.override_store_keys) && (!o.override_store_keys.length || StoreKeyConfig.isAmino(o.override_store_keys[0])) && Array.isArray(o.order_migrations) && (!o.order_migrations.length || typeof o.order_migrations[0] === "string") && Array.isArray(o.precommiters) && (!o.precommiters.length || typeof o.precommiters[0] === "string") && Array.isArray(o.prepare_check_staters) && (!o.prepare_check_staters.length || typeof o.prepare_check_staters[0] === "string"));
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.app_name !== "") {
            writer.uint32(10).string(message.app_name);
        }
        for (const v of message.begin_blockers) {
            writer.uint32(18).string(v);
        }
        for (const v of message.end_blockers) {
            writer.uint32(26).string(v);
        }
        for (const v of message.init_genesis) {
            writer.uint32(34).string(v);
        }
        for (const v of message.export_genesis) {
            writer.uint32(42).string(v);
        }
        for (const v of message.override_store_keys) {
            StoreKeyConfig.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.order_migrations) {
            writer.uint32(58).string(v);
        }
        for (const v of message.precommiters) {
            writer.uint32(66).string(v);
        }
        for (const v of message.prepare_check_staters) {
            writer.uint32(74).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModule();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.app_name = reader.string();
                    break;
                case 2:
                    message.begin_blockers.push(reader.string());
                    break;
                case 3:
                    message.end_blockers.push(reader.string());
                    break;
                case 4:
                    message.init_genesis.push(reader.string());
                    break;
                case 5:
                    message.export_genesis.push(reader.string());
                    break;
                case 6:
                    message.override_store_keys.push(StoreKeyConfig.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.order_migrations.push(reader.string());
                    break;
                case 8:
                    message.precommiters.push(reader.string());
                    break;
                case 9:
                    message.prepare_check_staters.push(reader.string());
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
            app_name: isSet(object.app_name) ? String(object.app_name) : "",
            begin_blockers: Array.isArray(object?.begin_blockers) ? object.begin_blockers.map((e) => String(e)) : [],
            end_blockers: Array.isArray(object?.end_blockers) ? object.end_blockers.map((e) => String(e)) : [],
            init_genesis: Array.isArray(object?.init_genesis) ? object.init_genesis.map((e) => String(e)) : [],
            export_genesis: Array.isArray(object?.export_genesis) ? object.export_genesis.map((e) => String(e)) : [],
            override_store_keys: Array.isArray(object?.override_store_keys) ? object.override_store_keys.map((e) => StoreKeyConfig.fromJSON(e)) : [],
            order_migrations: Array.isArray(object?.order_migrations) ? object.order_migrations.map((e) => String(e)) : [],
            precommiters: Array.isArray(object?.precommiters) ? object.precommiters.map((e) => String(e)) : [],
            prepare_check_staters: Array.isArray(object?.prepare_check_staters) ? object.prepare_check_staters.map((e) => String(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.app_name !== undefined && (obj.app_name = message.app_name);
        if (message.begin_blockers) {
            obj.begin_blockers = message.begin_blockers.map(e => e);
        }
        else {
            obj.begin_blockers = [];
        }
        if (message.end_blockers) {
            obj.end_blockers = message.end_blockers.map(e => e);
        }
        else {
            obj.end_blockers = [];
        }
        if (message.init_genesis) {
            obj.init_genesis = message.init_genesis.map(e => e);
        }
        else {
            obj.init_genesis = [];
        }
        if (message.export_genesis) {
            obj.export_genesis = message.export_genesis.map(e => e);
        }
        else {
            obj.export_genesis = [];
        }
        if (message.override_store_keys) {
            obj.override_store_keys = message.override_store_keys.map(e => e ? StoreKeyConfig.toJSON(e) : undefined);
        }
        else {
            obj.override_store_keys = [];
        }
        if (message.order_migrations) {
            obj.order_migrations = message.order_migrations.map(e => e);
        }
        else {
            obj.order_migrations = [];
        }
        if (message.precommiters) {
            obj.precommiters = message.precommiters.map(e => e);
        }
        else {
            obj.precommiters = [];
        }
        if (message.prepare_check_staters) {
            obj.prepare_check_staters = message.prepare_check_staters.map(e => e);
        }
        else {
            obj.prepare_check_staters = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseModule();
        message.app_name = object.app_name ?? "";
        message.begin_blockers = object.begin_blockers?.map(e => e) || [];
        message.end_blockers = object.end_blockers?.map(e => e) || [];
        message.init_genesis = object.init_genesis?.map(e => e) || [];
        message.export_genesis = object.export_genesis?.map(e => e) || [];
        message.override_store_keys = object.override_store_keys?.map(e => StoreKeyConfig.fromPartial(e)) || [];
        message.order_migrations = object.order_migrations?.map(e => e) || [];
        message.precommiters = object.precommiters?.map(e => e) || [];
        message.prepare_check_staters = object.prepare_check_staters?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseModule();
        if (object.app_name !== undefined && object.app_name !== null) {
            message.app_name = object.app_name;
        }
        message.begin_blockers = object.begin_blockers?.map(e => e) || [];
        message.end_blockers = object.end_blockers?.map(e => e) || [];
        message.init_genesis = object.init_genesis?.map(e => e) || [];
        message.export_genesis = object.export_genesis?.map(e => e) || [];
        message.override_store_keys = object.override_store_keys?.map(e => StoreKeyConfig.fromAmino(e)) || [];
        message.order_migrations = object.order_migrations?.map(e => e) || [];
        message.precommiters = object.precommiters?.map(e => e) || [];
        message.prepare_check_staters = object.prepare_check_staters?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.app_name = message.app_name;
        if (message.begin_blockers) {
            obj.begin_blockers = message.begin_blockers.map(e => e);
        }
        else {
            obj.begin_blockers = [];
        }
        if (message.end_blockers) {
            obj.end_blockers = message.end_blockers.map(e => e);
        }
        else {
            obj.end_blockers = [];
        }
        if (message.init_genesis) {
            obj.init_genesis = message.init_genesis.map(e => e);
        }
        else {
            obj.init_genesis = [];
        }
        if (message.export_genesis) {
            obj.export_genesis = message.export_genesis.map(e => e);
        }
        else {
            obj.export_genesis = [];
        }
        if (message.override_store_keys) {
            obj.override_store_keys = message.override_store_keys.map(e => e ? StoreKeyConfig.toAmino(e) : undefined);
        }
        else {
            obj.override_store_keys = [];
        }
        if (message.order_migrations) {
            obj.order_migrations = message.order_migrations.map(e => e);
        }
        else {
            obj.order_migrations = [];
        }
        if (message.precommiters) {
            obj.precommiters = message.precommiters.map(e => e);
        }
        else {
            obj.precommiters = [];
        }
        if (message.prepare_check_staters) {
            obj.prepare_check_staters = message.prepare_check_staters.map(e => e);
        }
        else {
            obj.prepare_check_staters = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return Module.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Module",
            value: Module.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Module.decode(message.value);
    },
    toProto(message) {
        return Module.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.app.runtime.v1alpha1.Module",
            value: Module.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(Module.typeUrl, Module);
GlobalDecoderRegistry.registerAminoProtoMapping(Module.aminoType, Module.typeUrl);
function createBaseStoreKeyConfig() {
    return {
        module_name: "",
        kv_store_key: ""
    };
}
export const StoreKeyConfig = {
    typeUrl: "/cosmos.app.runtime.v1alpha1.StoreKeyConfig",
    aminoType: "cosmos-sdk/StoreKeyConfig",
    is(o) {
        return o && (o.$typeUrl === StoreKeyConfig.typeUrl || typeof o.module_name === "string" && typeof o.kv_store_key === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === StoreKeyConfig.typeUrl || typeof o.module_name === "string" && typeof o.kv_store_key === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === StoreKeyConfig.typeUrl || typeof o.module_name === "string" && typeof o.kv_store_key === "string");
    },
    encode(message, writer = BinaryWriter.create()) {
        if (message.module_name !== "") {
            writer.uint32(10).string(message.module_name);
        }
        if (message.kv_store_key !== "") {
            writer.uint32(18).string(message.kv_store_key);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStoreKeyConfig();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.module_name = reader.string();
                    break;
                case 2:
                    message.kv_store_key = reader.string();
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
            module_name: isSet(object.module_name) ? String(object.module_name) : "",
            kv_store_key: isSet(object.kv_store_key) ? String(object.kv_store_key) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.module_name !== undefined && (obj.module_name = message.module_name);
        message.kv_store_key !== undefined && (obj.kv_store_key = message.kv_store_key);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseStoreKeyConfig();
        message.module_name = object.module_name ?? "";
        message.kv_store_key = object.kv_store_key ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseStoreKeyConfig();
        if (object.module_name !== undefined && object.module_name !== null) {
            message.module_name = object.module_name;
        }
        if (object.kv_store_key !== undefined && object.kv_store_key !== null) {
            message.kv_store_key = object.kv_store_key;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.module_name = message.module_name;
        obj.kv_store_key = message.kv_store_key;
        return obj;
    },
    fromAminoMsg(object) {
        return StoreKeyConfig.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/StoreKeyConfig",
            value: StoreKeyConfig.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return StoreKeyConfig.decode(message.value);
    },
    toProto(message) {
        return StoreKeyConfig.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.app.runtime.v1alpha1.StoreKeyConfig",
            value: StoreKeyConfig.encode(message).finish()
        };
    }
};
GlobalDecoderRegistry.register(StoreKeyConfig.typeUrl, StoreKeyConfig);
GlobalDecoderRegistry.registerAminoProtoMapping(StoreKeyConfig.aminoType, StoreKeyConfig.typeUrl);
//# sourceMappingURL=module.js.map
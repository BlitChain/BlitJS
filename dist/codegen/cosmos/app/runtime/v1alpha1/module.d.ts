import { BinaryReader, BinaryWriter } from "../../../../binary";
export declare const protobufPackage = "cosmos.app.runtime.v1alpha1";
/** Module is the config object for the runtime module. */
export interface Module {
    /** app_name is the name of the app. */
    app_name: string;
    /**
     * begin_blockers specifies the module names of begin blockers
     * to call in the order in which they should be called. If this is left empty
     * no begin blocker will be registered.
     */
    begin_blockers: string[];
    /**
     * end_blockers specifies the module names of the end blockers
     * to call in the order in which they should be called. If this is left empty
     * no end blocker will be registered.
     */
    end_blockers: string[];
    /**
     * init_genesis specifies the module names of init genesis functions
     * to call in the order in which they should be called. If this is left empty
     * no init genesis function will be registered.
     */
    init_genesis: string[];
    /**
     * export_genesis specifies the order in which to export module genesis data.
     * If this is left empty, the init_genesis order will be used for export genesis
     * if it is specified.
     */
    export_genesis: string[];
    /**
     * override_store_keys is an optional list of overrides for the module store keys
     * to be used in keeper construction.
     */
    override_store_keys: StoreKeyConfig[];
}
export interface ModuleProtoMsg {
    type_url: "/cosmos.app.runtime.v1alpha1.Module";
    value: Uint8Array;
}
export interface ModuleProtoMsg {
    type_url: "/cosmos.app.runtime.v1alpha1.Module";
    value: Uint8Array;
}
/** Module is the config object for the runtime module. */
export interface ModuleAmino {
    /** app_name is the name of the app. */
    app_name: string;
    /**
     * begin_blockers specifies the module names of begin blockers
     * to call in the order in which they should be called. If this is left empty
     * no begin blocker will be registered.
     */
    begin_blockers: string[];
    /**
     * end_blockers specifies the module names of the end blockers
     * to call in the order in which they should be called. If this is left empty
     * no end blocker will be registered.
     */
    end_blockers: string[];
    /**
     * init_genesis specifies the module names of init genesis functions
     * to call in the order in which they should be called. If this is left empty
     * no init genesis function will be registered.
     */
    init_genesis: string[];
    /**
     * export_genesis specifies the order in which to export module genesis data.
     * If this is left empty, the init_genesis order will be used for export genesis
     * if it is specified.
     */
    export_genesis: string[];
    /**
     * override_store_keys is an optional list of overrides for the module store keys
     * to be used in keeper construction.
     */
    override_store_keys: StoreKeyConfigAmino[];
}
export interface ModuleAminoMsg {
    type: "cosmos-sdk/Module";
    value: ModuleAmino;
}
/** Module is the config object for the runtime module. */
export interface ModuleSDKType {
    app_name: string;
    begin_blockers: string[];
    end_blockers: string[];
    init_genesis: string[];
    export_genesis: string[];
    override_store_keys: StoreKeyConfigSDKType[];
}
/**
 * StoreKeyConfig may be supplied to override the default module store key, which
 * is the module name.
 */
export interface StoreKeyConfig {
    /** name of the module to override the store key of */
    module_name: string;
    /** the kv store key to use instead of the module name. */
    kv_store_key: string;
}
export interface StoreKeyConfigProtoMsg {
    type_url: "/cosmos.app.runtime.v1alpha1.StoreKeyConfig";
    value: Uint8Array;
}
export interface StoreKeyConfigProtoMsg {
    type_url: "/cosmos.app.runtime.v1alpha1.StoreKeyConfig";
    value: Uint8Array;
}
/**
 * StoreKeyConfig may be supplied to override the default module store key, which
 * is the module name.
 */
export interface StoreKeyConfigAmino {
    /** name of the module to override the store key of */
    module_name: string;
    /** the kv store key to use instead of the module name. */
    kv_store_key: string;
}
export interface StoreKeyConfigAminoMsg {
    type: "cosmos-sdk/StoreKeyConfig";
    value: StoreKeyConfigAmino;
}
/**
 * StoreKeyConfig may be supplied to override the default module store key, which
 * is the module name.
 */
export interface StoreKeyConfigSDKType {
    module_name: string;
    kv_store_key: string;
}
export declare const Module: {
    typeUrl: string;
    encode(message: Module, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Module;
    fromJSON(object: any): Module;
    toJSON(message: Module): unknown;
    fromPartial(object: Partial<Module>): Module;
    fromSDK(object: ModuleSDKType): Module;
    toSDK(message: Module): ModuleSDKType;
    fromAmino(object: ModuleAmino): Module;
    toAmino(message: Module): ModuleAmino;
    fromAminoMsg(object: ModuleAminoMsg): Module;
    toAminoMsg(message: Module): ModuleAminoMsg;
    fromProtoMsg(message: ModuleProtoMsg): Module;
    toProto(message: Module): Uint8Array;
    toProtoMsg(message: Module): ModuleProtoMsg;
};
export declare const StoreKeyConfig: {
    typeUrl: string;
    encode(message: StoreKeyConfig, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): StoreKeyConfig;
    fromJSON(object: any): StoreKeyConfig;
    toJSON(message: StoreKeyConfig): unknown;
    fromPartial(object: Partial<StoreKeyConfig>): StoreKeyConfig;
    fromSDK(object: StoreKeyConfigSDKType): StoreKeyConfig;
    toSDK(message: StoreKeyConfig): StoreKeyConfigSDKType;
    fromAmino(object: StoreKeyConfigAmino): StoreKeyConfig;
    toAmino(message: StoreKeyConfig): StoreKeyConfigAmino;
    fromAminoMsg(object: StoreKeyConfigAminoMsg): StoreKeyConfig;
    toAminoMsg(message: StoreKeyConfig): StoreKeyConfigAminoMsg;
    fromProtoMsg(message: StoreKeyConfigProtoMsg): StoreKeyConfig;
    toProto(message: StoreKeyConfig): Uint8Array;
    toProtoMsg(message: StoreKeyConfig): StoreKeyConfigProtoMsg;
};

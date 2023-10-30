import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgUpdateParams, MsgCreateStorage, MsgUpdateStorage, MsgDeleteStorage } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: Uint8Array;
        };
        createStorage(value: MsgCreateStorage): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateStorage(value: MsgUpdateStorage): {
            typeUrl: string;
            value: Uint8Array;
        };
        deleteStorage(value: MsgDeleteStorage): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
        createStorage(value: MsgCreateStorage): {
            typeUrl: string;
            value: MsgCreateStorage;
        };
        updateStorage(value: MsgUpdateStorage): {
            typeUrl: string;
            value: MsgUpdateStorage;
        };
        deleteStorage(value: MsgDeleteStorage): {
            typeUrl: string;
            value: MsgDeleteStorage;
        };
    };
    toJSON: {
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: unknown;
        };
        createStorage(value: MsgCreateStorage): {
            typeUrl: string;
            value: unknown;
        };
        updateStorage(value: MsgUpdateStorage): {
            typeUrl: string;
            value: unknown;
        };
        deleteStorage(value: MsgDeleteStorage): {
            typeUrl: string;
            value: unknown;
        };
    };
    fromJSON: {
        updateParams(value: any): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
        createStorage(value: any): {
            typeUrl: string;
            value: MsgCreateStorage;
        };
        updateStorage(value: any): {
            typeUrl: string;
            value: MsgUpdateStorage;
        };
        deleteStorage(value: any): {
            typeUrl: string;
            value: MsgDeleteStorage;
        };
    };
    fromPartial: {
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
        createStorage(value: MsgCreateStorage): {
            typeUrl: string;
            value: MsgCreateStorage;
        };
        updateStorage(value: MsgUpdateStorage): {
            typeUrl: string;
            value: MsgUpdateStorage;
        };
        deleteStorage(value: MsgDeleteStorage): {
            typeUrl: string;
            value: MsgDeleteStorage;
        };
    };
};

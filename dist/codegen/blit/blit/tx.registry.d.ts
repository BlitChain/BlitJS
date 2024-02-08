import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgUpdateParams, MsgMintCoins, MsgBurnCoins, MsgForceTransferCoins, MsgSetDenomMetadata, MsgCreateTask, MsgDeleteTask } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: Uint8Array;
        };
        mintCoins(value: MsgMintCoins): {
            typeUrl: string;
            value: Uint8Array;
        };
        burnCoins(value: MsgBurnCoins): {
            typeUrl: string;
            value: Uint8Array;
        };
        forceTransferCoins(value: MsgForceTransferCoins): {
            typeUrl: string;
            value: Uint8Array;
        };
        setDenomMetadata(value: MsgSetDenomMetadata): {
            typeUrl: string;
            value: Uint8Array;
        };
        createTask(value: MsgCreateTask): {
            typeUrl: string;
            value: Uint8Array;
        };
        deleteTask(value: MsgDeleteTask): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
        mintCoins(value: MsgMintCoins): {
            typeUrl: string;
            value: MsgMintCoins;
        };
        burnCoins(value: MsgBurnCoins): {
            typeUrl: string;
            value: MsgBurnCoins;
        };
        forceTransferCoins(value: MsgForceTransferCoins): {
            typeUrl: string;
            value: MsgForceTransferCoins;
        };
        setDenomMetadata(value: MsgSetDenomMetadata): {
            typeUrl: string;
            value: MsgSetDenomMetadata;
        };
        createTask(value: MsgCreateTask): {
            typeUrl: string;
            value: MsgCreateTask;
        };
        deleteTask(value: MsgDeleteTask): {
            typeUrl: string;
            value: MsgDeleteTask;
        };
    };
    toJSON: {
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: unknown;
        };
        mintCoins(value: MsgMintCoins): {
            typeUrl: string;
            value: unknown;
        };
        burnCoins(value: MsgBurnCoins): {
            typeUrl: string;
            value: unknown;
        };
        forceTransferCoins(value: MsgForceTransferCoins): {
            typeUrl: string;
            value: unknown;
        };
        setDenomMetadata(value: MsgSetDenomMetadata): {
            typeUrl: string;
            value: unknown;
        };
        createTask(value: MsgCreateTask): {
            typeUrl: string;
            value: unknown;
        };
        deleteTask(value: MsgDeleteTask): {
            typeUrl: string;
            value: unknown;
        };
    };
    fromJSON: {
        updateParams(value: any): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
        mintCoins(value: any): {
            typeUrl: string;
            value: MsgMintCoins;
        };
        burnCoins(value: any): {
            typeUrl: string;
            value: MsgBurnCoins;
        };
        forceTransferCoins(value: any): {
            typeUrl: string;
            value: MsgForceTransferCoins;
        };
        setDenomMetadata(value: any): {
            typeUrl: string;
            value: MsgSetDenomMetadata;
        };
        createTask(value: any): {
            typeUrl: string;
            value: MsgCreateTask;
        };
        deleteTask(value: any): {
            typeUrl: string;
            value: MsgDeleteTask;
        };
    };
    fromPartial: {
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
        mintCoins(value: MsgMintCoins): {
            typeUrl: string;
            value: MsgMintCoins;
        };
        burnCoins(value: MsgBurnCoins): {
            typeUrl: string;
            value: MsgBurnCoins;
        };
        forceTransferCoins(value: MsgForceTransferCoins): {
            typeUrl: string;
            value: MsgForceTransferCoins;
        };
        setDenomMetadata(value: MsgSetDenomMetadata): {
            typeUrl: string;
            value: MsgSetDenomMetadata;
        };
        createTask(value: MsgCreateTask): {
            typeUrl: string;
            value: MsgCreateTask;
        };
        deleteTask(value: MsgDeleteTask): {
            typeUrl: string;
            value: MsgDeleteTask;
        };
    };
};

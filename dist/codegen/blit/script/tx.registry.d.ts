import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgUpdateParams, MsgCreateScript, MsgUpdateScript, MsgRun } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: Uint8Array;
        };
        createScript(value: MsgCreateScript): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateScript(value: MsgUpdateScript): {
            typeUrl: string;
            value: Uint8Array;
        };
        run(value: MsgRun): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
        createScript(value: MsgCreateScript): {
            typeUrl: string;
            value: MsgCreateScript;
        };
        updateScript(value: MsgUpdateScript): {
            typeUrl: string;
            value: MsgUpdateScript;
        };
        run(value: MsgRun): {
            typeUrl: string;
            value: MsgRun;
        };
    };
    toJSON: {
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: unknown;
        };
        createScript(value: MsgCreateScript): {
            typeUrl: string;
            value: unknown;
        };
        updateScript(value: MsgUpdateScript): {
            typeUrl: string;
            value: unknown;
        };
        run(value: MsgRun): {
            typeUrl: string;
            value: unknown;
        };
    };
    fromJSON: {
        updateParams(value: any): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
        createScript(value: any): {
            typeUrl: string;
            value: MsgCreateScript;
        };
        updateScript(value: any): {
            typeUrl: string;
            value: MsgUpdateScript;
        };
        run(value: any): {
            typeUrl: string;
            value: MsgRun;
        };
    };
    fromPartial: {
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
        createScript(value: MsgCreateScript): {
            typeUrl: string;
            value: MsgCreateScript;
        };
        updateScript(value: MsgUpdateScript): {
            typeUrl: string;
            value: MsgUpdateScript;
        };
        run(value: MsgRun): {
            typeUrl: string;
            value: MsgRun;
        };
    };
};

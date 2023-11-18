import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgGrantAllowance, MsgRevokeAllowance, MsgPruneAllowances } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        grantAllowance(value: MsgGrantAllowance): {
            typeUrl: string;
            value: Uint8Array;
        };
        revokeAllowance(value: MsgRevokeAllowance): {
            typeUrl: string;
            value: Uint8Array;
        };
        pruneAllowances(value: MsgPruneAllowances): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        grantAllowance(value: MsgGrantAllowance): {
            typeUrl: string;
            value: MsgGrantAllowance;
        };
        revokeAllowance(value: MsgRevokeAllowance): {
            typeUrl: string;
            value: MsgRevokeAllowance;
        };
        pruneAllowances(value: MsgPruneAllowances): {
            typeUrl: string;
            value: MsgPruneAllowances;
        };
    };
    toJSON: {
        grantAllowance(value: MsgGrantAllowance): {
            typeUrl: string;
            value: unknown;
        };
        revokeAllowance(value: MsgRevokeAllowance): {
            typeUrl: string;
            value: unknown;
        };
        pruneAllowances(value: MsgPruneAllowances): {
            typeUrl: string;
            value: unknown;
        };
    };
    fromJSON: {
        grantAllowance(value: any): {
            typeUrl: string;
            value: MsgGrantAllowance;
        };
        revokeAllowance(value: any): {
            typeUrl: string;
            value: MsgRevokeAllowance;
        };
        pruneAllowances(value: any): {
            typeUrl: string;
            value: MsgPruneAllowances;
        };
    };
    fromPartial: {
        grantAllowance(value: MsgGrantAllowance): {
            typeUrl: string;
            value: MsgGrantAllowance;
        };
        revokeAllowance(value: MsgRevokeAllowance): {
            typeUrl: string;
            value: MsgRevokeAllowance;
        };
        pruneAllowances(value: MsgPruneAllowances): {
            typeUrl: string;
            value: MsgPruneAllowances;
        };
    };
};

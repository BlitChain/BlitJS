//@ts-nocheck
import { Registry } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import * as blitBlitTxRegistry from "./blit/tx.registry";
import * as blitScriptTxRegistry from "./script/tx.registry";
import * as blitStorageTxRegistry from "./storage/tx.registry";
import * as blitBlitTxAmino from "./blit/tx.amino";
import * as blitScriptTxAmino from "./script/tx.amino";
import * as blitStorageTxAmino from "./storage/tx.amino";
export const blitAminoConverters = {
    ...blitBlitTxAmino.AminoConverter,
    ...blitScriptTxAmino.AminoConverter,
    ...blitStorageTxAmino.AminoConverter
};
export const blitProtoRegistry = [...blitBlitTxRegistry.registry, ...blitScriptTxRegistry.registry, ...blitStorageTxRegistry.registry];
export const getSigningBlitClientOptions = ({ defaultTypes = defaultRegistryTypes } = {}) => {
    const registry = new Registry([...defaultTypes, ...blitProtoRegistry]);
    const aminoTypes = new AminoTypes({
        ...blitAminoConverters
    });
    return {
        registry,
        aminoTypes
    };
};
export const getSigningBlitClient = async ({ rpcEndpoint, signer, defaultTypes = defaultRegistryTypes }) => {
    const { registry, aminoTypes } = getSigningBlitClientOptions({
        defaultTypes
    });
    const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
        registry: registry,
        aminoTypes
    });
    return client;
};
//# sourceMappingURL=client.js.map
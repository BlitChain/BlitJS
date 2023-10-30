//@ts-nocheck
import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
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
export const blitProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...blitBlitTxRegistry.registry, ...blitScriptTxRegistry.registry, ...blitStorageTxRegistry.registry];
export const getSigningBlitClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...blitProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...blitAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningBlitClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes
}: {
  rpcEndpoint: string | HttpEndpoint;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const {
    registry,
    aminoTypes
  } = getSigningBlitClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry: (registry as any),
    aminoTypes
  });
  return client;
};
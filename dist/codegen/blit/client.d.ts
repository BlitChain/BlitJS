import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const blitAminoConverters: {
    "/blit.storage.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: import("./storage/tx").MsgUpdateParams) => import("./storage/tx").MsgUpdateParamsAmino;
        fromAmino: (object: import("./storage/tx").MsgUpdateParamsAmino) => import("./storage/tx").MsgUpdateParams;
    };
    "/blit.storage.MsgCreateStorage": {
        aminoType: string;
        toAmino: (message: import("./storage/tx").MsgCreateStorage) => import("./storage/tx").MsgCreateStorageAmino;
        fromAmino: (object: import("./storage/tx").MsgCreateStorageAmino) => import("./storage/tx").MsgCreateStorage;
    };
    "/blit.storage.MsgUpdateStorage": {
        aminoType: string;
        toAmino: (message: import("./storage/tx").MsgUpdateStorage) => import("./storage/tx").MsgUpdateStorageAmino;
        fromAmino: (object: import("./storage/tx").MsgUpdateStorageAmino) => import("./storage/tx").MsgUpdateStorage;
    };
    "/blit.storage.MsgDeleteStorage": {
        aminoType: string;
        toAmino: (message: import("./storage/tx").MsgDeleteStorage) => import("./storage/tx").MsgDeleteStorageAmino;
        fromAmino: (object: import("./storage/tx").MsgDeleteStorageAmino) => import("./storage/tx").MsgDeleteStorage;
    };
    "/blit.script.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: import("./script/tx").MsgUpdateParams) => import("./script/tx").MsgUpdateParamsAmino;
        fromAmino: (object: import("./script/tx").MsgUpdateParamsAmino) => import("./script/tx").MsgUpdateParams;
    };
    "/blit.script.MsgCreateScript": {
        aminoType: string;
        toAmino: (message: import("./script/tx").MsgCreateScript) => import("./script/tx").MsgCreateScriptAmino;
        fromAmino: (object: import("./script/tx").MsgCreateScriptAmino) => import("./script/tx").MsgCreateScript;
    };
    "/blit.script.MsgUpdateScript": {
        aminoType: string;
        toAmino: (message: import("./script/tx").MsgUpdateScript) => import("./script/tx").MsgUpdateScriptAmino;
        fromAmino: (object: import("./script/tx").MsgUpdateScriptAmino) => import("./script/tx").MsgUpdateScript;
    };
    "/blit.script.MsgRun": {
        aminoType: string;
        toAmino: (message: import("./script/msgrun").MsgRun) => import("./script/msgrun").MsgRunAmino;
        fromAmino: (object: import("./script/msgrun").MsgRunAmino) => import("./script/msgrun").MsgRun;
    };
    "/blit.blit.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: import("./blit/tx").MsgUpdateParams) => import("./blit/tx").MsgUpdateParamsAmino;
        fromAmino: (object: import("./blit/tx").MsgUpdateParamsAmino) => import("./blit/tx").MsgUpdateParams;
    };
};
export declare const blitProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningBlitClientOptions: ({ defaultTypes }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningBlitClient: ({ rpcEndpoint, signer, defaultTypes }: {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<SigningStargateClient>;

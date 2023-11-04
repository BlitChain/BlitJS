import * as _17 from "./app/runtime/v1alpha1/module";
import * as _18 from "./auth/module/v1/module";
import * as _19 from "./auth/v1beta1/auth";
import * as _20 from "./auth/v1beta1/genesis";
import * as _21 from "./auth/v1beta1/query";
import * as _22 from "./auth/v1beta1/tx";
import * as _23 from "./authz/module/v1/module";
import * as _24 from "./authz/v1beta1/authz";
import * as _25 from "./authz/v1beta1/event";
import * as _26 from "./authz/v1beta1/genesis";
import * as _27 from "./authz/v1beta1/query";
import * as _28 from "./authz/v1beta1/tx";
import * as _29 from "./bank/module/v1/module";
import * as _30 from "./bank/v1beta1/authz";
import * as _31 from "./bank/v1beta1/bank";
import * as _32 from "./bank/v1beta1/genesis";
import * as _33 from "./bank/v1beta1/query";
import * as _34 from "./bank/v1beta1/tx";
import * as _35 from "./base/abci/v1beta1/abci";
import * as _36 from "./base/node/v1beta1/query";
import * as _37 from "./base/query/v1beta1/pagination";
import * as _38 from "./base/reflection/v2alpha1/reflection";
import * as _39 from "./base/tendermint/v1beta1/query";
import * as _40 from "./base/tendermint/v1beta1/types";
import * as _41 from "./base/v1beta1/coin";
import * as _42 from "./capability/module/v1/module";
import * as _43 from "./consensus/module/v1/module";
import * as _44 from "./consensus/v1/query";
import * as _45 from "./consensus/v1/tx";
import * as _46 from "./crisis/module/v1/module";
import * as _47 from "./crypto/ed25519/keys";
import * as _48 from "./crypto/hd/v1/hd";
import * as _49 from "./crypto/keyring/v1/record";
import * as _50 from "./crypto/multisig/keys";
import * as _51 from "./crypto/secp256k1/keys";
import * as _52 from "./crypto/secp256r1/keys";
import * as _53 from "./distribution/module/v1/module";
import * as _54 from "./distribution/v1beta1/distribution";
import * as _55 from "./distribution/v1beta1/genesis";
import * as _56 from "./distribution/v1beta1/query";
import * as _57 from "./distribution/v1beta1/tx";
import * as _58 from "./evidence/module/v1/module";
import * as _59 from "./feegrant/module/v1/module";
import * as _60 from "./feegrant/v1beta1/feegrant";
import * as _61 from "./feegrant/v1beta1/genesis";
import * as _62 from "./feegrant/v1beta1/query";
import * as _63 from "./feegrant/v1beta1/tx";
import * as _64 from "./genutil/module/v1/module";
import * as _65 from "./gov/module/v1/module";
import * as _66 from "./gov/v1/genesis";
import * as _67 from "./gov/v1/gov";
import * as _68 from "./gov/v1/query";
import * as _69 from "./gov/v1/tx";
import * as _70 from "./gov/v1beta1/genesis";
import * as _71 from "./gov/v1beta1/gov";
import * as _72 from "./gov/v1beta1/query";
import * as _73 from "./gov/v1beta1/tx";
import * as _74 from "./group/module/v1/module";
import * as _75 from "./group/v1/events";
import * as _76 from "./group/v1/genesis";
import * as _77 from "./group/v1/query";
import * as _78 from "./group/v1/tx";
import * as _79 from "./group/v1/types";
import * as _80 from "./mint/module/v1/module";
import * as _81 from "./mint/v1beta1/genesis";
import * as _82 from "./mint/v1beta1/mint";
import * as _83 from "./mint/v1beta1/query";
import * as _84 from "./mint/v1beta1/tx";
import * as _85 from "./nft/module/v1/module";
import * as _86 from "./nft/v1beta1/event";
import * as _87 from "./nft/v1beta1/genesis";
import * as _88 from "./nft/v1beta1/nft";
import * as _89 from "./nft/v1beta1/query";
import * as _90 from "./nft/v1beta1/tx";
import * as _91 from "./orm/module/v1alpha1/module";
import * as _92 from "./orm/query/v1alpha1/query";
import * as _93 from "./params/module/v1/module";
import * as _94 from "./params/v1beta1/params";
import * as _95 from "./params/v1beta1/query";
import * as _97 from "./reflection/v1/reflection";
import * as _98 from "./slashing/module/v1/module";
import * as _99 from "./staking/module/v1/module";
import * as _100 from "./staking/v1beta1/authz";
import * as _101 from "./staking/v1beta1/genesis";
import * as _102 from "./staking/v1beta1/query";
import * as _103 from "./staking/v1beta1/staking";
import * as _104 from "./staking/v1beta1/tx";
import * as _105 from "./tx/config/v1/config";
import * as _106 from "./tx/signing/v1beta1/signing";
import * as _107 from "./tx/v1beta1/service";
import * as _108 from "./tx/v1beta1/tx";
import * as _109 from "./upgrade/module/v1/module";
import * as _110 from "./upgrade/v1beta1/query";
import * as _111 from "./upgrade/v1beta1/tx";
import * as _112 from "./upgrade/v1beta1/upgrade";
import * as _113 from "./vesting/module/v1/module";
import * as _114 from "./vesting/v1beta1/tx";
import * as _115 from "./vesting/v1beta1/vesting";
import * as _176 from "./auth/v1beta1/query.lcd";
import * as _177 from "./authz/v1beta1/query.lcd";
import * as _178 from "./bank/v1beta1/query.lcd";
import * as _179 from "./base/node/v1beta1/query.lcd";
import * as _180 from "./base/tendermint/v1beta1/query.lcd";
import * as _181 from "./consensus/v1/query.lcd";
import * as _182 from "./distribution/v1beta1/query.lcd";
import * as _183 from "./feegrant/v1beta1/query.lcd";
import * as _184 from "./gov/v1/query.lcd";
import * as _185 from "./gov/v1beta1/query.lcd";
import * as _186 from "./group/v1/query.lcd";
import * as _187 from "./mint/v1beta1/query.lcd";
import * as _188 from "./nft/v1beta1/query.lcd";
import * as _189 from "./params/v1beta1/query.lcd";
import * as _190 from "./staking/v1beta1/query.lcd";
import * as _191 from "./tx/v1beta1/service.lcd";
import * as _192 from "./upgrade/v1beta1/query.lcd";
import * as _193 from "./auth/v1beta1/query.rpc.Query";
import * as _194 from "./authz/v1beta1/query.rpc.Query";
import * as _195 from "./bank/v1beta1/query.rpc.Query";
import * as _196 from "./base/node/v1beta1/query.rpc.Service";
import * as _197 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _198 from "./consensus/v1/query.rpc.Query";
import * as _199 from "./distribution/v1beta1/query.rpc.Query";
import * as _200 from "./feegrant/v1beta1/query.rpc.Query";
import * as _201 from "./gov/v1/query.rpc.Query";
import * as _202 from "./gov/v1beta1/query.rpc.Query";
import * as _203 from "./group/v1/query.rpc.Query";
import * as _204 from "./mint/v1beta1/query.rpc.Query";
import * as _205 from "./nft/v1beta1/query.rpc.Query";
import * as _206 from "./orm/query/v1alpha1/query.rpc.Query";
import * as _207 from "./params/v1beta1/query.rpc.Query";
import * as _208 from "./staking/v1beta1/query.rpc.Query";
import * as _209 from "./tx/v1beta1/service.rpc.Service";
import * as _210 from "./upgrade/v1beta1/query.rpc.Query";
import * as _211 from "./auth/v1beta1/tx.rpc.msg";
import * as _212 from "./authz/v1beta1/tx.rpc.msg";
import * as _213 from "./bank/v1beta1/tx.rpc.msg";
import * as _214 from "./consensus/v1/tx.rpc.msg";
import * as _215 from "./distribution/v1beta1/tx.rpc.msg";
import * as _216 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _217 from "./gov/v1/tx.rpc.msg";
import * as _218 from "./gov/v1beta1/tx.rpc.msg";
import * as _219 from "./group/v1/tx.rpc.msg";
import * as _220 from "./mint/v1beta1/tx.rpc.msg";
import * as _221 from "./nft/v1beta1/tx.rpc.msg";
import * as _222 from "./staking/v1beta1/tx.rpc.msg";
import * as _223 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _224 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace app {
        namespace runtime {
            const v1alpha1: {
                protobufPackage: "cosmos.app.runtime.v1alpha1";
                Module: {
                    typeUrl: string;
                    encode(message: _17.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _17.Module;
                    fromJSON(object: any): _17.Module;
                    toJSON(message: _17.Module): unknown;
                    fromPartial(object: Partial<_17.Module>): _17.Module;
                    fromSDK(object: _17.ModuleSDKType): _17.Module;
                    toSDK(message: _17.Module): _17.ModuleSDKType;
                    fromAmino(object: _17.ModuleAmino): _17.Module;
                    toAmino(message: _17.Module): _17.ModuleAmino;
                    fromAminoMsg(object: _17.ModuleAminoMsg): _17.Module;
                    toAminoMsg(message: _17.Module): _17.ModuleAminoMsg;
                    fromProtoMsg(message: _17.ModuleProtoMsg): _17.Module;
                    toProto(message: _17.Module): Uint8Array;
                    toProtoMsg(message: _17.Module): _17.ModuleProtoMsg;
                };
                StoreKeyConfig: {
                    typeUrl: string;
                    encode(message: _17.StoreKeyConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _17.StoreKeyConfig;
                    fromJSON(object: any): _17.StoreKeyConfig;
                    toJSON(message: _17.StoreKeyConfig): unknown;
                    fromPartial(object: Partial<_17.StoreKeyConfig>): _17.StoreKeyConfig;
                    fromSDK(object: _17.StoreKeyConfigSDKType): _17.StoreKeyConfig;
                    toSDK(message: _17.StoreKeyConfig): _17.StoreKeyConfigSDKType;
                    fromAmino(object: _17.StoreKeyConfigAmino): _17.StoreKeyConfig;
                    toAmino(message: _17.StoreKeyConfig): _17.StoreKeyConfigAmino;
                    fromAminoMsg(object: _17.StoreKeyConfigAminoMsg): _17.StoreKeyConfig;
                    toAminoMsg(message: _17.StoreKeyConfig): _17.StoreKeyConfigAminoMsg;
                    fromProtoMsg(message: _17.StoreKeyConfigProtoMsg): _17.StoreKeyConfig;
                    toProto(message: _17.StoreKeyConfig): Uint8Array;
                    toProtoMsg(message: _17.StoreKeyConfig): _17.StoreKeyConfigProtoMsg;
                };
            };
        }
    }
    namespace auth {
        namespace module {
            const v1: {
                protobufPackage: "cosmos.auth.module.v1";
                Module: {
                    typeUrl: string;
                    encode(message: _18.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _18.Module;
                    fromJSON(object: any): _18.Module;
                    toJSON(message: _18.Module): unknown;
                    fromPartial(object: Partial<_18.Module>): _18.Module;
                    fromSDK(object: _18.ModuleSDKType): _18.Module;
                    toSDK(message: _18.Module): _18.ModuleSDKType;
                    fromAmino(object: _18.ModuleAmino): _18.Module;
                    toAmino(message: _18.Module): _18.ModuleAmino;
                    fromAminoMsg(object: _18.ModuleAminoMsg): _18.Module;
                    toAminoMsg(message: _18.Module): _18.ModuleAminoMsg;
                    fromProtoMsg(message: _18.ModuleProtoMsg): _18.Module;
                    toProto(message: _18.Module): Uint8Array;
                    toProtoMsg(message: _18.Module): _18.ModuleProtoMsg;
                };
                ModuleAccountPermission: {
                    typeUrl: string;
                    encode(message: _18.ModuleAccountPermission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _18.ModuleAccountPermission;
                    fromJSON(object: any): _18.ModuleAccountPermission;
                    toJSON(message: _18.ModuleAccountPermission): unknown;
                    fromPartial(object: Partial<_18.ModuleAccountPermission>): _18.ModuleAccountPermission;
                    fromSDK(object: _18.ModuleAccountPermissionSDKType): _18.ModuleAccountPermission;
                    toSDK(message: _18.ModuleAccountPermission): _18.ModuleAccountPermissionSDKType;
                    fromAmino(object: _18.ModuleAccountPermissionAmino): _18.ModuleAccountPermission;
                    toAmino(message: _18.ModuleAccountPermission): _18.ModuleAccountPermissionAmino;
                    fromAminoMsg(object: _18.ModuleAccountPermissionAminoMsg): _18.ModuleAccountPermission;
                    toAminoMsg(message: _18.ModuleAccountPermission): _18.ModuleAccountPermissionAminoMsg;
                    fromProtoMsg(message: _18.ModuleAccountPermissionProtoMsg): _18.ModuleAccountPermission;
                    toProto(message: _18.ModuleAccountPermission): Uint8Array;
                    toProtoMsg(message: _18.ModuleAccountPermission): _18.ModuleAccountPermissionProtoMsg;
                };
            };
        }
        const v1beta1: {
            Msg: typeof _211.Msg;
            Query: typeof _193.Query;
            QueryClientImpl: typeof _193.QueryClientImpl;
            LCDQueryClient: typeof _176.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    updateParams(value: _22.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    updateParams(value: _22.MsgUpdateParams): {
                        typeUrl: string;
                        value: _22.MsgUpdateParams;
                    };
                };
                toJSON: {
                    updateParams(value: _22.MsgUpdateParams): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _22.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    updateParams(value: _22.MsgUpdateParams): {
                        typeUrl: string;
                        value: _22.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.auth.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _22.MsgUpdateParams) => _22.MsgUpdateParamsAmino;
                    fromAmino: (object: _22.MsgUpdateParamsAmino) => _22.MsgUpdateParams;
                };
            };
            protobufPackage: "cosmos.auth.v1beta1";
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _22.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _22.MsgUpdateParams;
                fromJSON(object: any): _22.MsgUpdateParams;
                toJSON(message: _22.MsgUpdateParams): unknown;
                fromPartial(object: Partial<_22.MsgUpdateParams>): _22.MsgUpdateParams;
                fromSDK(object: _22.MsgUpdateParamsSDKType): _22.MsgUpdateParams;
                toSDK(message: _22.MsgUpdateParams): _22.MsgUpdateParamsSDKType;
                fromAmino(object: _22.MsgUpdateParamsAmino): _22.MsgUpdateParams;
                toAmino(message: _22.MsgUpdateParams): _22.MsgUpdateParamsAmino;
                fromAminoMsg(object: _22.MsgUpdateParamsAminoMsg): _22.MsgUpdateParams;
                toAminoMsg(message: _22.MsgUpdateParams): _22.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _22.MsgUpdateParamsProtoMsg): _22.MsgUpdateParams;
                toProto(message: _22.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _22.MsgUpdateParams): _22.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _22.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _22.MsgUpdateParamsResponse;
                fromJSON(_: any): _22.MsgUpdateParamsResponse;
                toJSON(_: _22.MsgUpdateParamsResponse): unknown;
                fromPartial(_: Partial<_22.MsgUpdateParamsResponse>): _22.MsgUpdateParamsResponse;
                fromSDK(_: _22.MsgUpdateParamsResponseSDKType): _22.MsgUpdateParamsResponse;
                toSDK(_: _22.MsgUpdateParamsResponse): _22.MsgUpdateParamsResponseSDKType;
                fromAmino(_: _22.MsgUpdateParamsResponseAmino): _22.MsgUpdateParamsResponse;
                toAmino(_: _22.MsgUpdateParamsResponse): _22.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _22.MsgUpdateParamsResponseAminoMsg): _22.MsgUpdateParamsResponse;
                toAminoMsg(message: _22.MsgUpdateParamsResponse): _22.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _22.MsgUpdateParamsResponseProtoMsg): _22.MsgUpdateParamsResponse;
                toProto(message: _22.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _22.MsgUpdateParamsResponse): _22.MsgUpdateParamsResponseProtoMsg;
            };
            QueryAccountsRequest: {
                typeUrl: string;
                encode(message: _21.QueryAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _21.QueryAccountsRequest;
                fromJSON(object: any): _21.QueryAccountsRequest;
                toJSON(message: _21.QueryAccountsRequest): unknown;
                fromPartial(object: Partial<_21.QueryAccountsRequest>): _21.QueryAccountsRequest;
                fromSDK(object: _21.QueryAccountsRequestSDKType): _21.QueryAccountsRequest;
                toSDK(message: _21.QueryAccountsRequest): _21.QueryAccountsRequestSDKType;
                fromAmino(object: _21.QueryAccountsRequestAmino): _21.QueryAccountsRequest;
                toAmino(message: _21.QueryAccountsRequest): _21.QueryAccountsRequestAmino;
                fromAminoMsg(object: _21.QueryAccountsRequestAminoMsg): _21.QueryAccountsRequest;
                toAminoMsg(message: _21.QueryAccountsRequest): _21.QueryAccountsRequestAminoMsg;
                fromProtoMsg(message: _21.QueryAccountsRequestProtoMsg): _21.QueryAccountsRequest;
                toProto(message: _21.QueryAccountsRequest): Uint8Array;
                toProtoMsg(message: _21.QueryAccountsRequest): _21.QueryAccountsRequestProtoMsg;
            };
            QueryAccountsResponse: {
                typeUrl: string;
                encode(message: _21.QueryAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _21.QueryAccountsResponse;
                fromJSON(object: any): _21.QueryAccountsResponse;
                toJSON(message: _21.QueryAccountsResponse): unknown;
                fromPartial(object: Partial<_21.QueryAccountsResponse>): _21.QueryAccountsResponse;
                fromSDK(object: _21.QueryAccountsResponseSDKType): _21.QueryAccountsResponse;
                toSDK(message: _21.QueryAccountsResponse): _21.QueryAccountsResponseSDKType;
                fromAmino(object: _21.QueryAccountsResponseAmino): _21.QueryAccountsResponse;
                toAmino(message: _21.QueryAccountsResponse): _21.QueryAccountsResponseAmino;
                fromAminoMsg(object: _21.QueryAccountsResponseAminoMsg): _21.QueryAccountsResponse;
                toAminoMsg(message: _21.QueryAccountsResponse): _21.QueryAccountsResponseAminoMsg;
                fromProtoMsg(message: _21.QueryAccountsResponseProtoMsg): _21.QueryAccountsResponse;
                toProto(message: _21.QueryAccountsResponse): Uint8Array;
                toProtoMsg(message: _21.QueryAccountsResponse): _21.QueryAccountsResponseProtoMsg;
            };
            QueryAccountRequest: {
                typeUrl: string;
                encode(message: _21.QueryAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _21.QueryAccountRequest;
                fromJSON(object: any): _21.QueryAccountRequest;
                toJSON(message: _21.QueryAccountRequest): unknown;
                fromPartial(object: Partial<_21.QueryAccountRequest>): _21.QueryAccountRequest;
                fromSDK(object: _21.QueryAccountRequestSDKType): _21.QueryAccountRequest;
                toSDK(message: _21.QueryAccountRequest): _21.QueryAccountRequestSDKType;
                fromAmino(object: _21.QueryAccountRequestAmino): _21.QueryAccountRequest;
                toAmino(message: _21.QueryAccountRequest): _21.QueryAccountRequestAmino;
                fromAminoMsg(object: _21.QueryAccountRequestAminoMsg): _21.QueryAccountRequest;
                toAminoMsg(message: _21.QueryAccountRequest): _21.QueryAccountRequestAminoMsg;
                fromProtoMsg(message: _21.QueryAccountRequestProtoMsg): _21.QueryAccountRequest;
                toProto(message: _21.QueryAccountRequest): Uint8Array;
                toProtoMsg(message: _21.QueryAccountRequest): _21.QueryAccountRequestProtoMsg;
            };
            QueryAccountResponse: {
                typeUrl: string;
                encode(message: _21.QueryAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _21.QueryAccountResponse;
                fromJSON(object: any): _21.QueryAccountResponse;
                toJSON(message: _21.QueryAccountResponse): unknown;
                fromPartial(object: Partial<_21.QueryAccountResponse>): _21.QueryAccountResponse;
                fromSDK(object: _21.QueryAccountResponseSDKType): _21.QueryAccountResponse;
                toSDK(message: _21.QueryAccountResponse): _21.QueryAccountResponseSDKType;
                fromAmino(object: _21.QueryAccountResponseAmino): _21.QueryAccountResponse;
                toAmino(message: _21.QueryAccountResponse): _21.QueryAccountResponseAmino;
                fromAminoMsg(object: _21.QueryAccountResponseAminoMsg): _21.QueryAccountResponse;
                toAminoMsg(message: _21.QueryAccountResponse): _21.QueryAccountResponseAminoMsg;
                fromProtoMsg(message: _21.QueryAccountResponseProtoMsg): _21.QueryAccountResponse;
                toProto(message: _21.QueryAccountResponse): Uint8Array;
                toProtoMsg(message: _21.QueryAccountResponse): _21.QueryAccountResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _21.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _21.QueryParamsRequest;
                fromJSON(_: any): _21.QueryParamsRequest;
                toJSON(_: _21.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_21.QueryParamsRequest>): _21.QueryParamsRequest;
                fromSDK(_: _21.QueryParamsRequestSDKType): _21.QueryParamsRequest;
                toSDK(_: _21.QueryParamsRequest): _21.QueryParamsRequestSDKType;
                fromAmino(_: _21.QueryParamsRequestAmino): _21.QueryParamsRequest;
                toAmino(_: _21.QueryParamsRequest): _21.QueryParamsRequestAmino;
                fromAminoMsg(object: _21.QueryParamsRequestAminoMsg): _21.QueryParamsRequest;
                toAminoMsg(message: _21.QueryParamsRequest): _21.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _21.QueryParamsRequestProtoMsg): _21.QueryParamsRequest;
                toProto(message: _21.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _21.QueryParamsRequest): _21.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _21.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _21.QueryParamsResponse;
                fromJSON(object: any): _21.QueryParamsResponse;
                toJSON(message: _21.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_21.QueryParamsResponse>): _21.QueryParamsResponse;
                fromSDK(object: _21.QueryParamsResponseSDKType): _21.QueryParamsResponse;
                toSDK(message: _21.QueryParamsResponse): _21.QueryParamsResponseSDKType;
                fromAmino(object: _21.QueryParamsResponseAmino): _21.QueryParamsResponse;
                toAmino(message: _21.QueryParamsResponse): _21.QueryParamsResponseAmino;
                fromAminoMsg(object: _21.QueryParamsResponseAminoMsg): _21.QueryParamsResponse;
                toAminoMsg(message: _21.QueryParamsResponse): _21.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _21.QueryParamsResponseProtoMsg): _21.QueryParamsResponse;
                toProto(message: _21.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _21.QueryParamsResponse): _21.QueryParamsResponseProtoMsg;
            };
            QueryModuleAccountsRequest: {
                typeUrl: string;
                encode(_: _21.QueryModuleAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _21.QueryModuleAccountsRequest;
                fromJSON(_: any): _21.QueryModuleAccountsRequest;
                toJSON(_: _21.QueryModuleAccountsRequest): unknown;
                fromPartial(_: Partial<_21.QueryModuleAccountsRequest>): _21.QueryModuleAccountsRequest;
                fromSDK(_: _21.QueryModuleAccountsRequestSDKType): _21.QueryModuleAccountsRequest;
                toSDK(_: _21.QueryModuleAccountsRequest): _21.QueryModuleAccountsRequestSDKType;
                fromAmino(_: _21.QueryModuleAccountsRequestAmino): _21.QueryModuleAccountsRequest;
                toAmino(_: _21.QueryModuleAccountsRequest): _21.QueryModuleAccountsRequestAmino;
                fromAminoMsg(object: _21.QueryModuleAccountsRequestAminoMsg): _21.QueryModuleAccountsRequest;
                toAminoMsg(message: _21.QueryModuleAccountsRequest): _21.QueryModuleAccountsRequestAminoMsg;
                fromProtoMsg(message: _21.QueryModuleAccountsRequestProtoMsg): _21.QueryModuleAccountsRequest;
                toProto(message: _21.QueryModuleAccountsRequest): Uint8Array;
                toProtoMsg(message: _21.QueryModuleAccountsRequest): _21.QueryModuleAccountsRequestProtoMsg;
            };
            QueryModuleAccountsResponse: {
                typeUrl: string;
                encode(message: _21.QueryModuleAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _21.QueryModuleAccountsResponse;
                fromJSON(object: any): _21.QueryModuleAccountsResponse;
                toJSON(message: _21.QueryModuleAccountsResponse): unknown;
                fromPartial(object: Partial<_21.QueryModuleAccountsResponse>): _21.QueryModuleAccountsResponse;
                fromSDK(object: _21.QueryModuleAccountsResponseSDKType): _21.QueryModuleAccountsResponse;
                toSDK(message: _21.QueryModuleAccountsResponse): _21.QueryModuleAccountsResponseSDKType;
                fromAmino(object: _21.QueryModuleAccountsResponseAmino): _21.QueryModuleAccountsResponse;
                toAmino(message: _21.QueryModuleAccountsResponse): _21.QueryModuleAccountsResponseAmino;
                fromAminoMsg(object: _21.QueryModuleAccountsResponseAminoMsg): _21.QueryModuleAccountsResponse;
                toAminoMsg(message: _21.QueryModuleAccountsResponse): _21.QueryModuleAccountsResponseAminoMsg;
                fromProtoMsg(message: _21.QueryModuleAccountsResponseProtoMsg): _21.QueryModuleAccountsResponse;
                toProto(message: _21.QueryModuleAccountsResponse): Uint8Array;
                toProtoMsg(message: _21.QueryModuleAccountsResponse): _21.QueryModuleAccountsResponseProtoMsg;
            };
            QueryModuleAccountByNameRequest: {
                typeUrl: string;
                encode(message: _21.QueryModuleAccountByNameRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _21.QueryModuleAccountByNameRequest;
                fromJSON(object: any): _21.QueryModuleAccountByNameRequest;
                toJSON(message: _21.QueryModuleAccountByNameRequest): unknown;
                fromPartial(object: Partial<_21.QueryModuleAccountByNameRequest>): _21.QueryModuleAccountByNameRequest;
                fromSDK(object: _21.QueryModuleAccountByNameRequestSDKType): _21.QueryModuleAccountByNameRequest;
                toSDK(message: _21.QueryModuleAccountByNameRequest): _21.QueryModuleAccountByNameRequestSDKType;
                fromAmino(object: _21.QueryModuleAccountByNameRequestAmino): _21.QueryModuleAccountByNameRequest;
                toAmino(message: _21.QueryModuleAccountByNameRequest): _21.QueryModuleAccountByNameRequestAmino;
                fromAminoMsg(object: _21.QueryModuleAccountByNameRequestAminoMsg): _21.QueryModuleAccountByNameRequest;
                toAminoMsg(message: _21.QueryModuleAccountByNameRequest): _21.QueryModuleAccountByNameRequestAminoMsg;
                fromProtoMsg(message: _21.QueryModuleAccountByNameRequestProtoMsg): _21.QueryModuleAccountByNameRequest;
                toProto(message: _21.QueryModuleAccountByNameRequest): Uint8Array;
                toProtoMsg(message: _21.QueryModuleAccountByNameRequest): _21.QueryModuleAccountByNameRequestProtoMsg;
            };
            QueryModuleAccountByNameResponse: {
                typeUrl: string;
                encode(message: _21.QueryModuleAccountByNameResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _21.QueryModuleAccountByNameResponse;
                fromJSON(object: any): _21.QueryModuleAccountByNameResponse;
                toJSON(message: _21.QueryModuleAccountByNameResponse): unknown;
                fromPartial(object: Partial<_21.QueryModuleAccountByNameResponse>): _21.QueryModuleAccountByNameResponse;
                fromSDK(object: _21.QueryModuleAccountByNameResponseSDKType): _21.QueryModuleAccountByNameResponse;
                toSDK(message: _21.QueryModuleAccountByNameResponse): _21.QueryModuleAccountByNameResponseSDKType;
                fromAmino(object: _21.QueryModuleAccountByNameResponseAmino): _21.QueryModuleAccountByNameResponse;
                toAmino(message: _21.QueryModuleAccountByNameResponse): _21.QueryModuleAccountByNameResponseAmino;
                fromAminoMsg(object: _21.QueryModuleAccountByNameResponseAminoMsg): _21.QueryModuleAccountByNameResponse;
                toAminoMsg(message: _21.QueryModuleAccountByNameResponse): _21.QueryModuleAccountByNameResponseAminoMsg;
                fromProtoMsg(message: _21.QueryModuleAccountByNameResponseProtoMsg): _21.QueryModuleAccountByNameResponse;
                toProto(message: _21.QueryModuleAccountByNameResponse): Uint8Array;
                toProtoMsg(message: _21.QueryModuleAccountByNameResponse): _21.QueryModuleAccountByNameResponseProtoMsg;
            };
            Bech32PrefixRequest: {
                typeUrl: string;
                encode(_: _21.Bech32PrefixRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _21.Bech32PrefixRequest;
                fromJSON(_: any): _21.Bech32PrefixRequest;
                toJSON(_: _21.Bech32PrefixRequest): unknown;
                fromPartial(_: Partial<_21.Bech32PrefixRequest>): _21.Bech32PrefixRequest;
                fromSDK(_: _21.Bech32PrefixRequestSDKType): _21.Bech32PrefixRequest;
                toSDK(_: _21.Bech32PrefixRequest): _21.Bech32PrefixRequestSDKType;
                fromAmino(_: _21.Bech32PrefixRequestAmino): _21.Bech32PrefixRequest;
                toAmino(_: _21.Bech32PrefixRequest): _21.Bech32PrefixRequestAmino;
                fromAminoMsg(object: _21.Bech32PrefixRequestAminoMsg): _21.Bech32PrefixRequest;
                toAminoMsg(message: _21.Bech32PrefixRequest): _21.Bech32PrefixRequestAminoMsg;
                fromProtoMsg(message: _21.Bech32PrefixRequestProtoMsg): _21.Bech32PrefixRequest;
                toProto(message: _21.Bech32PrefixRequest): Uint8Array;
                toProtoMsg(message: _21.Bech32PrefixRequest): _21.Bech32PrefixRequestProtoMsg;
            };
            Bech32PrefixResponse: {
                typeUrl: string;
                encode(message: _21.Bech32PrefixResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _21.Bech32PrefixResponse;
                fromJSON(object: any): _21.Bech32PrefixResponse;
                toJSON(message: _21.Bech32PrefixResponse): unknown;
                fromPartial(object: Partial<_21.Bech32PrefixResponse>): _21.Bech32PrefixResponse;
                fromSDK(object: _21.Bech32PrefixResponseSDKType): _21.Bech32PrefixResponse;
                toSDK(message: _21.Bech32PrefixResponse): _21.Bech32PrefixResponseSDKType;
                fromAmino(object: _21.Bech32PrefixResponseAmino): _21.Bech32PrefixResponse;
                toAmino(message: _21.Bech32PrefixResponse): _21.Bech32PrefixResponseAmino;
                fromAminoMsg(object: _21.Bech32PrefixResponseAminoMsg): _21.Bech32PrefixResponse;
                toAminoMsg(message: _21.Bech32PrefixResponse): _21.Bech32PrefixResponseAminoMsg;
                fromProtoMsg(message: _21.Bech32PrefixResponseProtoMsg): _21.Bech32PrefixResponse;
                toProto(message: _21.Bech32PrefixResponse): Uint8Array;
                toProtoMsg(message: _21.Bech32PrefixResponse): _21.Bech32PrefixResponseProtoMsg;
            };
            AddressBytesToStringRequest: {
                typeUrl: string;
                encode(message: _21.AddressBytesToStringRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _21.AddressBytesToStringRequest;
                fromJSON(object: any): _21.AddressBytesToStringRequest;
                toJSON(message: _21.AddressBytesToStringRequest): unknown;
                fromPartial(object: Partial<_21.AddressBytesToStringRequest>): _21.AddressBytesToStringRequest;
                fromSDK(object: _21.AddressBytesToStringRequestSDKType): _21.AddressBytesToStringRequest;
                toSDK(message: _21.AddressBytesToStringRequest): _21.AddressBytesToStringRequestSDKType;
                fromAmino(object: _21.AddressBytesToStringRequestAmino): _21.AddressBytesToStringRequest;
                toAmino(message: _21.AddressBytesToStringRequest): _21.AddressBytesToStringRequestAmino;
                fromAminoMsg(object: _21.AddressBytesToStringRequestAminoMsg): _21.AddressBytesToStringRequest;
                toAminoMsg(message: _21.AddressBytesToStringRequest): _21.AddressBytesToStringRequestAminoMsg;
                fromProtoMsg(message: _21.AddressBytesToStringRequestProtoMsg): _21.AddressBytesToStringRequest;
                toProto(message: _21.AddressBytesToStringRequest): Uint8Array;
                toProtoMsg(message: _21.AddressBytesToStringRequest): _21.AddressBytesToStringRequestProtoMsg;
            };
            AddressBytesToStringResponse: {
                typeUrl: string;
                encode(message: _21.AddressBytesToStringResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _21.AddressBytesToStringResponse;
                fromJSON(object: any): _21.AddressBytesToStringResponse;
                toJSON(message: _21.AddressBytesToStringResponse): unknown;
                fromPartial(object: Partial<_21.AddressBytesToStringResponse>): _21.AddressBytesToStringResponse;
                fromSDK(object: _21.AddressBytesToStringResponseSDKType): _21.AddressBytesToStringResponse;
                toSDK(message: _21.AddressBytesToStringResponse): _21.AddressBytesToStringResponseSDKType;
                fromAmino(object: _21.AddressBytesToStringResponseAmino): _21.AddressBytesToStringResponse;
                toAmino(message: _21.AddressBytesToStringResponse): _21.AddressBytesToStringResponseAmino;
                fromAminoMsg(object: _21.AddressBytesToStringResponseAminoMsg): _21.AddressBytesToStringResponse;
                toAminoMsg(message: _21.AddressBytesToStringResponse): _21.AddressBytesToStringResponseAminoMsg;
                fromProtoMsg(message: _21.AddressBytesToStringResponseProtoMsg): _21.AddressBytesToStringResponse;
                toProto(message: _21.AddressBytesToStringResponse): Uint8Array;
                toProtoMsg(message: _21.AddressBytesToStringResponse): _21.AddressBytesToStringResponseProtoMsg;
            };
            AddressStringToBytesRequest: {
                typeUrl: string;
                encode(message: _21.AddressStringToBytesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _21.AddressStringToBytesRequest;
                fromJSON(object: any): _21.AddressStringToBytesRequest;
                toJSON(message: _21.AddressStringToBytesRequest): unknown;
                fromPartial(object: Partial<_21.AddressStringToBytesRequest>): _21.AddressStringToBytesRequest;
                fromSDK(object: _21.AddressStringToBytesRequestSDKType): _21.AddressStringToBytesRequest;
                toSDK(message: _21.AddressStringToBytesRequest): _21.AddressStringToBytesRequestSDKType;
                fromAmino(object: _21.AddressStringToBytesRequestAmino): _21.AddressStringToBytesRequest;
                toAmino(message: _21.AddressStringToBytesRequest): _21.AddressStringToBytesRequestAmino;
                fromAminoMsg(object: _21.AddressStringToBytesRequestAminoMsg): _21.AddressStringToBytesRequest;
                toAminoMsg(message: _21.AddressStringToBytesRequest): _21.AddressStringToBytesRequestAminoMsg;
                fromProtoMsg(message: _21.AddressStringToBytesRequestProtoMsg): _21.AddressStringToBytesRequest;
                toProto(message: _21.AddressStringToBytesRequest): Uint8Array;
                toProtoMsg(message: _21.AddressStringToBytesRequest): _21.AddressStringToBytesRequestProtoMsg;
            };
            AddressStringToBytesResponse: {
                typeUrl: string;
                encode(message: _21.AddressStringToBytesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _21.AddressStringToBytesResponse;
                fromJSON(object: any): _21.AddressStringToBytesResponse;
                toJSON(message: _21.AddressStringToBytesResponse): unknown;
                fromPartial(object: Partial<_21.AddressStringToBytesResponse>): _21.AddressStringToBytesResponse;
                fromSDK(object: _21.AddressStringToBytesResponseSDKType): _21.AddressStringToBytesResponse;
                toSDK(message: _21.AddressStringToBytesResponse): _21.AddressStringToBytesResponseSDKType;
                fromAmino(object: _21.AddressStringToBytesResponseAmino): _21.AddressStringToBytesResponse;
                toAmino(message: _21.AddressStringToBytesResponse): _21.AddressStringToBytesResponseAmino;
                fromAminoMsg(object: _21.AddressStringToBytesResponseAminoMsg): _21.AddressStringToBytesResponse;
                toAminoMsg(message: _21.AddressStringToBytesResponse): _21.AddressStringToBytesResponseAminoMsg;
                fromProtoMsg(message: _21.AddressStringToBytesResponseProtoMsg): _21.AddressStringToBytesResponse;
                toProto(message: _21.AddressStringToBytesResponse): Uint8Array;
                toProtoMsg(message: _21.AddressStringToBytesResponse): _21.AddressStringToBytesResponseProtoMsg;
            };
            QueryAccountAddressByIDRequest: {
                typeUrl: string;
                encode(message: _21.QueryAccountAddressByIDRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _21.QueryAccountAddressByIDRequest;
                fromJSON(object: any): _21.QueryAccountAddressByIDRequest;
                toJSON(message: _21.QueryAccountAddressByIDRequest): unknown;
                fromPartial(object: Partial<_21.QueryAccountAddressByIDRequest>): _21.QueryAccountAddressByIDRequest;
                fromSDK(object: _21.QueryAccountAddressByIDRequestSDKType): _21.QueryAccountAddressByIDRequest;
                toSDK(message: _21.QueryAccountAddressByIDRequest): _21.QueryAccountAddressByIDRequestSDKType;
                fromAmino(object: _21.QueryAccountAddressByIDRequestAmino): _21.QueryAccountAddressByIDRequest;
                toAmino(message: _21.QueryAccountAddressByIDRequest): _21.QueryAccountAddressByIDRequestAmino;
                fromAminoMsg(object: _21.QueryAccountAddressByIDRequestAminoMsg): _21.QueryAccountAddressByIDRequest;
                toAminoMsg(message: _21.QueryAccountAddressByIDRequest): _21.QueryAccountAddressByIDRequestAminoMsg;
                fromProtoMsg(message: _21.QueryAccountAddressByIDRequestProtoMsg): _21.QueryAccountAddressByIDRequest;
                toProto(message: _21.QueryAccountAddressByIDRequest): Uint8Array;
                toProtoMsg(message: _21.QueryAccountAddressByIDRequest): _21.QueryAccountAddressByIDRequestProtoMsg;
            };
            QueryAccountAddressByIDResponse: {
                typeUrl: string;
                encode(message: _21.QueryAccountAddressByIDResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _21.QueryAccountAddressByIDResponse;
                fromJSON(object: any): _21.QueryAccountAddressByIDResponse;
                toJSON(message: _21.QueryAccountAddressByIDResponse): unknown;
                fromPartial(object: Partial<_21.QueryAccountAddressByIDResponse>): _21.QueryAccountAddressByIDResponse;
                fromSDK(object: _21.QueryAccountAddressByIDResponseSDKType): _21.QueryAccountAddressByIDResponse;
                toSDK(message: _21.QueryAccountAddressByIDResponse): _21.QueryAccountAddressByIDResponseSDKType;
                fromAmino(object: _21.QueryAccountAddressByIDResponseAmino): _21.QueryAccountAddressByIDResponse;
                toAmino(message: _21.QueryAccountAddressByIDResponse): _21.QueryAccountAddressByIDResponseAmino;
                fromAminoMsg(object: _21.QueryAccountAddressByIDResponseAminoMsg): _21.QueryAccountAddressByIDResponse;
                toAminoMsg(message: _21.QueryAccountAddressByIDResponse): _21.QueryAccountAddressByIDResponseAminoMsg;
                fromProtoMsg(message: _21.QueryAccountAddressByIDResponseProtoMsg): _21.QueryAccountAddressByIDResponse;
                toProto(message: _21.QueryAccountAddressByIDResponse): Uint8Array;
                toProtoMsg(message: _21.QueryAccountAddressByIDResponse): _21.QueryAccountAddressByIDResponseProtoMsg;
            };
            QueryAccountInfoRequest: {
                typeUrl: string;
                encode(message: _21.QueryAccountInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _21.QueryAccountInfoRequest;
                fromJSON(object: any): _21.QueryAccountInfoRequest;
                toJSON(message: _21.QueryAccountInfoRequest): unknown;
                fromPartial(object: Partial<_21.QueryAccountInfoRequest>): _21.QueryAccountInfoRequest;
                fromSDK(object: _21.QueryAccountInfoRequestSDKType): _21.QueryAccountInfoRequest;
                toSDK(message: _21.QueryAccountInfoRequest): _21.QueryAccountInfoRequestSDKType;
                fromAmino(object: _21.QueryAccountInfoRequestAmino): _21.QueryAccountInfoRequest;
                toAmino(message: _21.QueryAccountInfoRequest): _21.QueryAccountInfoRequestAmino;
                fromAminoMsg(object: _21.QueryAccountInfoRequestAminoMsg): _21.QueryAccountInfoRequest;
                toAminoMsg(message: _21.QueryAccountInfoRequest): _21.QueryAccountInfoRequestAminoMsg;
                fromProtoMsg(message: _21.QueryAccountInfoRequestProtoMsg): _21.QueryAccountInfoRequest;
                toProto(message: _21.QueryAccountInfoRequest): Uint8Array;
                toProtoMsg(message: _21.QueryAccountInfoRequest): _21.QueryAccountInfoRequestProtoMsg;
            };
            QueryAccountInfoResponse: {
                typeUrl: string;
                encode(message: _21.QueryAccountInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _21.QueryAccountInfoResponse;
                fromJSON(object: any): _21.QueryAccountInfoResponse;
                toJSON(message: _21.QueryAccountInfoResponse): unknown;
                fromPartial(object: Partial<_21.QueryAccountInfoResponse>): _21.QueryAccountInfoResponse;
                fromSDK(object: _21.QueryAccountInfoResponseSDKType): _21.QueryAccountInfoResponse;
                toSDK(message: _21.QueryAccountInfoResponse): _21.QueryAccountInfoResponseSDKType;
                fromAmino(object: _21.QueryAccountInfoResponseAmino): _21.QueryAccountInfoResponse;
                toAmino(message: _21.QueryAccountInfoResponse): _21.QueryAccountInfoResponseAmino;
                fromAminoMsg(object: _21.QueryAccountInfoResponseAminoMsg): _21.QueryAccountInfoResponse;
                toAminoMsg(message: _21.QueryAccountInfoResponse): _21.QueryAccountInfoResponseAminoMsg;
                fromProtoMsg(message: _21.QueryAccountInfoResponseProtoMsg): _21.QueryAccountInfoResponse;
                toProto(message: _21.QueryAccountInfoResponse): Uint8Array;
                toProtoMsg(message: _21.QueryAccountInfoResponse): _21.QueryAccountInfoResponseProtoMsg;
            };
            Cosmos_authv1beta1AccountI_InterfaceDecoder: (input: import("..").BinaryReader | Uint8Array) => import("../google/protobuf/any").Any | _19.BaseAccount;
            Cosmos_authv1beta1AccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_authv1beta1AccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            Cosmos_authv1beta1ModuleAccountI_InterfaceDecoder: (input: import("..").BinaryReader | Uint8Array) => import("../google/protobuf/any").Any | _19.ModuleAccount;
            Cosmos_authv1beta1ModuleAccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_authv1beta1ModuleAccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            GenesisState: {
                typeUrl: string;
                encode(message: _20.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _20.GenesisState;
                fromJSON(object: any): _20.GenesisState;
                toJSON(message: _20.GenesisState): unknown;
                fromPartial(object: Partial<_20.GenesisState>): _20.GenesisState;
                fromSDK(object: _20.GenesisStateSDKType): _20.GenesisState;
                toSDK(message: _20.GenesisState): _20.GenesisStateSDKType;
                fromAmino(object: _20.GenesisStateAmino): _20.GenesisState;
                toAmino(message: _20.GenesisState): _20.GenesisStateAmino;
                fromAminoMsg(object: _20.GenesisStateAminoMsg): _20.GenesisState;
                toAminoMsg(message: _20.GenesisState): _20.GenesisStateAminoMsg;
                fromProtoMsg(message: _20.GenesisStateProtoMsg): _20.GenesisState;
                toProto(message: _20.GenesisState): Uint8Array;
                toProtoMsg(message: _20.GenesisState): _20.GenesisStateProtoMsg;
            };
            BaseAccount: {
                typeUrl: string;
                encode(message: _19.BaseAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _19.BaseAccount;
                fromJSON(object: any): _19.BaseAccount;
                toJSON(message: _19.BaseAccount): unknown;
                fromPartial(object: Partial<_19.BaseAccount>): _19.BaseAccount;
                fromSDK(object: _19.BaseAccountSDKType): _19.BaseAccount;
                toSDK(message: _19.BaseAccount): _19.BaseAccountSDKType;
                fromAmino(object: _19.BaseAccountAmino): _19.BaseAccount;
                toAmino(message: _19.BaseAccount): _19.BaseAccountAmino;
                fromAminoMsg(object: _19.BaseAccountAminoMsg): _19.BaseAccount;
                toAminoMsg(message: _19.BaseAccount): _19.BaseAccountAminoMsg;
                fromProtoMsg(message: _19.BaseAccountProtoMsg): _19.BaseAccount;
                toProto(message: _19.BaseAccount): Uint8Array;
                toProtoMsg(message: _19.BaseAccount): _19.BaseAccountProtoMsg;
            };
            ModuleAccount: {
                typeUrl: string;
                encode(message: _19.ModuleAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _19.ModuleAccount;
                fromJSON(object: any): _19.ModuleAccount;
                toJSON(message: _19.ModuleAccount): unknown;
                fromPartial(object: Partial<_19.ModuleAccount>): _19.ModuleAccount;
                fromSDK(object: _19.ModuleAccountSDKType): _19.ModuleAccount;
                toSDK(message: _19.ModuleAccount): _19.ModuleAccountSDKType;
                fromAmino(object: _19.ModuleAccountAmino): _19.ModuleAccount;
                toAmino(message: _19.ModuleAccount): _19.ModuleAccountAmino;
                fromAminoMsg(object: _19.ModuleAccountAminoMsg): _19.ModuleAccount;
                toAminoMsg(message: _19.ModuleAccount): _19.ModuleAccountAminoMsg;
                fromProtoMsg(message: _19.ModuleAccountProtoMsg): _19.ModuleAccount;
                toProto(message: _19.ModuleAccount): Uint8Array;
                toProtoMsg(message: _19.ModuleAccount): _19.ModuleAccountProtoMsg;
            };
            ModuleCredential: {
                typeUrl: string;
                encode(message: _19.ModuleCredential, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _19.ModuleCredential;
                fromJSON(object: any): _19.ModuleCredential;
                toJSON(message: _19.ModuleCredential): unknown;
                fromPartial(object: Partial<_19.ModuleCredential>): _19.ModuleCredential;
                fromSDK(object: _19.ModuleCredentialSDKType): _19.ModuleCredential;
                toSDK(message: _19.ModuleCredential): _19.ModuleCredentialSDKType;
                fromAmino(object: _19.ModuleCredentialAmino): _19.ModuleCredential;
                toAmino(message: _19.ModuleCredential): _19.ModuleCredentialAmino;
                fromAminoMsg(object: _19.ModuleCredentialAminoMsg): _19.ModuleCredential;
                toAminoMsg(message: _19.ModuleCredential): _19.ModuleCredentialAminoMsg;
                fromProtoMsg(message: _19.ModuleCredentialProtoMsg): _19.ModuleCredential;
                toProto(message: _19.ModuleCredential): Uint8Array;
                toProtoMsg(message: _19.ModuleCredential): _19.ModuleCredentialProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _19.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _19.Params;
                fromJSON(object: any): _19.Params;
                toJSON(message: _19.Params): unknown;
                fromPartial(object: Partial<_19.Params>): _19.Params;
                fromSDK(object: _19.ParamsSDKType): _19.Params;
                toSDK(message: _19.Params): _19.ParamsSDKType;
                fromAmino(object: _19.ParamsAmino): _19.Params;
                toAmino(message: _19.Params): _19.ParamsAmino;
                fromAminoMsg(object: _19.ParamsAminoMsg): _19.Params;
                toAminoMsg(message: _19.Params): _19.ParamsAminoMsg;
                fromProtoMsg(message: _19.ParamsProtoMsg): _19.Params;
                toProto(message: _19.Params): Uint8Array;
                toProtoMsg(message: _19.Params): _19.ParamsProtoMsg;
            };
        };
    }
    namespace authz {
        namespace module {
            const v1: {
                protobufPackage: "cosmos.authz.module.v1";
                Module: {
                    typeUrl: string;
                    encode(_: _23.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _23.Module;
                    fromJSON(_: any): _23.Module;
                    toJSON(_: _23.Module): unknown;
                    fromPartial(_: Partial<_23.Module>): _23.Module;
                    fromSDK(_: _23.ModuleSDKType): _23.Module;
                    toSDK(_: _23.Module): _23.ModuleSDKType;
                    fromAmino(_: _23.ModuleAmino): _23.Module;
                    toAmino(_: _23.Module): _23.ModuleAmino;
                    fromAminoMsg(object: _23.ModuleAminoMsg): _23.Module;
                    toAminoMsg(message: _23.Module): _23.ModuleAminoMsg;
                    fromProtoMsg(message: _23.ModuleProtoMsg): _23.Module;
                    toProto(message: _23.Module): Uint8Array;
                    toProtoMsg(message: _23.Module): _23.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            Msg: typeof _212.Msg;
            Query: typeof _194.Query;
            QueryClientImpl: typeof _194.QueryClientImpl;
            LCDQueryClient: typeof _177.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _28.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _28.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _28.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _28.MsgGrant): {
                        typeUrl: string;
                        value: _28.MsgGrant;
                    };
                    exec(value: _28.MsgExec): {
                        typeUrl: string;
                        value: _28.MsgExec;
                    };
                    revoke(value: _28.MsgRevoke): {
                        typeUrl: string;
                        value: _28.MsgRevoke;
                    };
                };
                toJSON: {
                    grant(value: _28.MsgGrant): {
                        typeUrl: string;
                        value: unknown;
                    };
                    exec(value: _28.MsgExec): {
                        typeUrl: string;
                        value: unknown;
                    };
                    revoke(value: _28.MsgRevoke): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    grant(value: any): {
                        typeUrl: string;
                        value: _28.MsgGrant;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _28.MsgExec;
                    };
                    revoke(value: any): {
                        typeUrl: string;
                        value: _28.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _28.MsgGrant): {
                        typeUrl: string;
                        value: _28.MsgGrant;
                    };
                    exec(value: _28.MsgExec): {
                        typeUrl: string;
                        value: _28.MsgExec;
                    };
                    revoke(value: _28.MsgRevoke): {
                        typeUrl: string;
                        value: _28.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: (message: _28.MsgGrant) => _28.MsgGrantAmino;
                    fromAmino: (object: _28.MsgGrantAmino) => _28.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _28.MsgExec) => _28.MsgExecAmino;
                    fromAmino: (object: _28.MsgExecAmino) => _28.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: (message: _28.MsgRevoke) => _28.MsgRevokeAmino;
                    fromAmino: (object: _28.MsgRevokeAmino) => _28.MsgRevoke;
                };
            };
            protobufPackage: "cosmos.authz.v1beta1";
            MsgGrant: {
                typeUrl: string;
                encode(message: _28.MsgGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _28.MsgGrant;
                fromJSON(object: any): _28.MsgGrant;
                toJSON(message: _28.MsgGrant): unknown;
                fromPartial(object: Partial<_28.MsgGrant>): _28.MsgGrant;
                fromSDK(object: _28.MsgGrantSDKType): _28.MsgGrant;
                toSDK(message: _28.MsgGrant): _28.MsgGrantSDKType;
                fromAmino(object: _28.MsgGrantAmino): _28.MsgGrant;
                toAmino(message: _28.MsgGrant): _28.MsgGrantAmino;
                fromAminoMsg(object: _28.MsgGrantAminoMsg): _28.MsgGrant;
                toAminoMsg(message: _28.MsgGrant): _28.MsgGrantAminoMsg;
                fromProtoMsg(message: _28.MsgGrantProtoMsg): _28.MsgGrant;
                toProto(message: _28.MsgGrant): Uint8Array;
                toProtoMsg(message: _28.MsgGrant): _28.MsgGrantProtoMsg;
            };
            MsgExecResponse: {
                typeUrl: string;
                encode(message: _28.MsgExecResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _28.MsgExecResponse;
                fromJSON(object: any): _28.MsgExecResponse;
                toJSON(message: _28.MsgExecResponse): unknown;
                fromPartial(object: Partial<_28.MsgExecResponse>): _28.MsgExecResponse;
                fromSDK(object: _28.MsgExecResponseSDKType): _28.MsgExecResponse;
                toSDK(message: _28.MsgExecResponse): _28.MsgExecResponseSDKType;
                fromAmino(object: _28.MsgExecResponseAmino): _28.MsgExecResponse;
                toAmino(message: _28.MsgExecResponse): _28.MsgExecResponseAmino;
                fromAminoMsg(object: _28.MsgExecResponseAminoMsg): _28.MsgExecResponse;
                toAminoMsg(message: _28.MsgExecResponse): _28.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _28.MsgExecResponseProtoMsg): _28.MsgExecResponse;
                toProto(message: _28.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _28.MsgExecResponse): _28.MsgExecResponseProtoMsg;
            };
            MsgExec: {
                typeUrl: string;
                encode(message: _28.MsgExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _28.MsgExec;
                fromJSON(object: any): _28.MsgExec;
                toJSON(message: _28.MsgExec): unknown;
                fromPartial(object: Partial<_28.MsgExec>): _28.MsgExec;
                fromSDK(object: _28.MsgExecSDKType): _28.MsgExec;
                toSDK(message: _28.MsgExec): _28.MsgExecSDKType;
                fromAmino(object: _28.MsgExecAmino): _28.MsgExec;
                toAmino(message: _28.MsgExec): _28.MsgExecAmino;
                fromAminoMsg(object: _28.MsgExecAminoMsg): _28.MsgExec;
                toAminoMsg(message: _28.MsgExec): _28.MsgExecAminoMsg;
                fromProtoMsg(message: _28.MsgExecProtoMsg): _28.MsgExec;
                toProto(message: _28.MsgExec): Uint8Array;
                toProtoMsg(message: _28.MsgExec): _28.MsgExecProtoMsg;
            };
            MsgGrantResponse: {
                typeUrl: string;
                encode(_: _28.MsgGrantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _28.MsgGrantResponse;
                fromJSON(_: any): _28.MsgGrantResponse;
                toJSON(_: _28.MsgGrantResponse): unknown;
                fromPartial(_: Partial<_28.MsgGrantResponse>): _28.MsgGrantResponse;
                fromSDK(_: _28.MsgGrantResponseSDKType): _28.MsgGrantResponse;
                toSDK(_: _28.MsgGrantResponse): _28.MsgGrantResponseSDKType;
                fromAmino(_: _28.MsgGrantResponseAmino): _28.MsgGrantResponse;
                toAmino(_: _28.MsgGrantResponse): _28.MsgGrantResponseAmino;
                fromAminoMsg(object: _28.MsgGrantResponseAminoMsg): _28.MsgGrantResponse;
                toAminoMsg(message: _28.MsgGrantResponse): _28.MsgGrantResponseAminoMsg;
                fromProtoMsg(message: _28.MsgGrantResponseProtoMsg): _28.MsgGrantResponse;
                toProto(message: _28.MsgGrantResponse): Uint8Array;
                toProtoMsg(message: _28.MsgGrantResponse): _28.MsgGrantResponseProtoMsg;
            };
            MsgRevoke: {
                typeUrl: string;
                encode(message: _28.MsgRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _28.MsgRevoke;
                fromJSON(object: any): _28.MsgRevoke;
                toJSON(message: _28.MsgRevoke): unknown;
                fromPartial(object: Partial<_28.MsgRevoke>): _28.MsgRevoke;
                fromSDK(object: _28.MsgRevokeSDKType): _28.MsgRevoke;
                toSDK(message: _28.MsgRevoke): _28.MsgRevokeSDKType;
                fromAmino(object: _28.MsgRevokeAmino): _28.MsgRevoke;
                toAmino(message: _28.MsgRevoke): _28.MsgRevokeAmino;
                fromAminoMsg(object: _28.MsgRevokeAminoMsg): _28.MsgRevoke;
                toAminoMsg(message: _28.MsgRevoke): _28.MsgRevokeAminoMsg;
                fromProtoMsg(message: _28.MsgRevokeProtoMsg): _28.MsgRevoke;
                toProto(message: _28.MsgRevoke): Uint8Array;
                toProtoMsg(message: _28.MsgRevoke): _28.MsgRevokeProtoMsg;
            };
            MsgRevokeResponse: {
                typeUrl: string;
                encode(_: _28.MsgRevokeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _28.MsgRevokeResponse;
                fromJSON(_: any): _28.MsgRevokeResponse;
                toJSON(_: _28.MsgRevokeResponse): unknown;
                fromPartial(_: Partial<_28.MsgRevokeResponse>): _28.MsgRevokeResponse;
                fromSDK(_: _28.MsgRevokeResponseSDKType): _28.MsgRevokeResponse;
                toSDK(_: _28.MsgRevokeResponse): _28.MsgRevokeResponseSDKType;
                fromAmino(_: _28.MsgRevokeResponseAmino): _28.MsgRevokeResponse;
                toAmino(_: _28.MsgRevokeResponse): _28.MsgRevokeResponseAmino;
                fromAminoMsg(object: _28.MsgRevokeResponseAminoMsg): _28.MsgRevokeResponse;
                toAminoMsg(message: _28.MsgRevokeResponse): _28.MsgRevokeResponseAminoMsg;
                fromProtoMsg(message: _28.MsgRevokeResponseProtoMsg): _28.MsgRevokeResponse;
                toProto(message: _28.MsgRevokeResponse): Uint8Array;
                toProtoMsg(message: _28.MsgRevokeResponse): _28.MsgRevokeResponseProtoMsg;
            };
            Cosmos_basev1beta1Msg_InterfaceDecoder: (input: import("..").BinaryReader | Uint8Array) => import("../google/protobuf/any").Any;
            Cosmos_basev1beta1Msg_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_basev1beta1Msg_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryGrantsRequest: {
                typeUrl: string;
                encode(message: _27.QueryGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _27.QueryGrantsRequest;
                fromJSON(object: any): _27.QueryGrantsRequest;
                toJSON(message: _27.QueryGrantsRequest): unknown;
                fromPartial(object: Partial<_27.QueryGrantsRequest>): _27.QueryGrantsRequest;
                fromSDK(object: _27.QueryGrantsRequestSDKType): _27.QueryGrantsRequest;
                toSDK(message: _27.QueryGrantsRequest): _27.QueryGrantsRequestSDKType;
                fromAmino(object: _27.QueryGrantsRequestAmino): _27.QueryGrantsRequest;
                toAmino(message: _27.QueryGrantsRequest): _27.QueryGrantsRequestAmino;
                fromAminoMsg(object: _27.QueryGrantsRequestAminoMsg): _27.QueryGrantsRequest;
                toAminoMsg(message: _27.QueryGrantsRequest): _27.QueryGrantsRequestAminoMsg;
                fromProtoMsg(message: _27.QueryGrantsRequestProtoMsg): _27.QueryGrantsRequest;
                toProto(message: _27.QueryGrantsRequest): Uint8Array;
                toProtoMsg(message: _27.QueryGrantsRequest): _27.QueryGrantsRequestProtoMsg;
            };
            QueryGrantsResponse: {
                typeUrl: string;
                encode(message: _27.QueryGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _27.QueryGrantsResponse;
                fromJSON(object: any): _27.QueryGrantsResponse;
                toJSON(message: _27.QueryGrantsResponse): unknown;
                fromPartial(object: Partial<_27.QueryGrantsResponse>): _27.QueryGrantsResponse;
                fromSDK(object: _27.QueryGrantsResponseSDKType): _27.QueryGrantsResponse;
                toSDK(message: _27.QueryGrantsResponse): _27.QueryGrantsResponseSDKType;
                fromAmino(object: _27.QueryGrantsResponseAmino): _27.QueryGrantsResponse;
                toAmino(message: _27.QueryGrantsResponse): _27.QueryGrantsResponseAmino;
                fromAminoMsg(object: _27.QueryGrantsResponseAminoMsg): _27.QueryGrantsResponse;
                toAminoMsg(message: _27.QueryGrantsResponse): _27.QueryGrantsResponseAminoMsg;
                fromProtoMsg(message: _27.QueryGrantsResponseProtoMsg): _27.QueryGrantsResponse;
                toProto(message: _27.QueryGrantsResponse): Uint8Array;
                toProtoMsg(message: _27.QueryGrantsResponse): _27.QueryGrantsResponseProtoMsg;
            };
            QueryGranterGrantsRequest: {
                typeUrl: string;
                encode(message: _27.QueryGranterGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _27.QueryGranterGrantsRequest;
                fromJSON(object: any): _27.QueryGranterGrantsRequest;
                toJSON(message: _27.QueryGranterGrantsRequest): unknown;
                fromPartial(object: Partial<_27.QueryGranterGrantsRequest>): _27.QueryGranterGrantsRequest;
                fromSDK(object: _27.QueryGranterGrantsRequestSDKType): _27.QueryGranterGrantsRequest;
                toSDK(message: _27.QueryGranterGrantsRequest): _27.QueryGranterGrantsRequestSDKType;
                fromAmino(object: _27.QueryGranterGrantsRequestAmino): _27.QueryGranterGrantsRequest;
                toAmino(message: _27.QueryGranterGrantsRequest): _27.QueryGranterGrantsRequestAmino;
                fromAminoMsg(object: _27.QueryGranterGrantsRequestAminoMsg): _27.QueryGranterGrantsRequest;
                toAminoMsg(message: _27.QueryGranterGrantsRequest): _27.QueryGranterGrantsRequestAminoMsg;
                fromProtoMsg(message: _27.QueryGranterGrantsRequestProtoMsg): _27.QueryGranterGrantsRequest;
                toProto(message: _27.QueryGranterGrantsRequest): Uint8Array;
                toProtoMsg(message: _27.QueryGranterGrantsRequest): _27.QueryGranterGrantsRequestProtoMsg;
            };
            QueryGranterGrantsResponse: {
                typeUrl: string;
                encode(message: _27.QueryGranterGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _27.QueryGranterGrantsResponse;
                fromJSON(object: any): _27.QueryGranterGrantsResponse;
                toJSON(message: _27.QueryGranterGrantsResponse): unknown;
                fromPartial(object: Partial<_27.QueryGranterGrantsResponse>): _27.QueryGranterGrantsResponse;
                fromSDK(object: _27.QueryGranterGrantsResponseSDKType): _27.QueryGranterGrantsResponse;
                toSDK(message: _27.QueryGranterGrantsResponse): _27.QueryGranterGrantsResponseSDKType;
                fromAmino(object: _27.QueryGranterGrantsResponseAmino): _27.QueryGranterGrantsResponse;
                toAmino(message: _27.QueryGranterGrantsResponse): _27.QueryGranterGrantsResponseAmino;
                fromAminoMsg(object: _27.QueryGranterGrantsResponseAminoMsg): _27.QueryGranterGrantsResponse;
                toAminoMsg(message: _27.QueryGranterGrantsResponse): _27.QueryGranterGrantsResponseAminoMsg;
                fromProtoMsg(message: _27.QueryGranterGrantsResponseProtoMsg): _27.QueryGranterGrantsResponse;
                toProto(message: _27.QueryGranterGrantsResponse): Uint8Array;
                toProtoMsg(message: _27.QueryGranterGrantsResponse): _27.QueryGranterGrantsResponseProtoMsg;
            };
            QueryGranteeGrantsRequest: {
                typeUrl: string;
                encode(message: _27.QueryGranteeGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _27.QueryGranteeGrantsRequest;
                fromJSON(object: any): _27.QueryGranteeGrantsRequest;
                toJSON(message: _27.QueryGranteeGrantsRequest): unknown;
                fromPartial(object: Partial<_27.QueryGranteeGrantsRequest>): _27.QueryGranteeGrantsRequest;
                fromSDK(object: _27.QueryGranteeGrantsRequestSDKType): _27.QueryGranteeGrantsRequest;
                toSDK(message: _27.QueryGranteeGrantsRequest): _27.QueryGranteeGrantsRequestSDKType;
                fromAmino(object: _27.QueryGranteeGrantsRequestAmino): _27.QueryGranteeGrantsRequest;
                toAmino(message: _27.QueryGranteeGrantsRequest): _27.QueryGranteeGrantsRequestAmino;
                fromAminoMsg(object: _27.QueryGranteeGrantsRequestAminoMsg): _27.QueryGranteeGrantsRequest;
                toAminoMsg(message: _27.QueryGranteeGrantsRequest): _27.QueryGranteeGrantsRequestAminoMsg;
                fromProtoMsg(message: _27.QueryGranteeGrantsRequestProtoMsg): _27.QueryGranteeGrantsRequest;
                toProto(message: _27.QueryGranteeGrantsRequest): Uint8Array;
                toProtoMsg(message: _27.QueryGranteeGrantsRequest): _27.QueryGranteeGrantsRequestProtoMsg;
            };
            QueryGranteeGrantsResponse: {
                typeUrl: string;
                encode(message: _27.QueryGranteeGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _27.QueryGranteeGrantsResponse;
                fromJSON(object: any): _27.QueryGranteeGrantsResponse;
                toJSON(message: _27.QueryGranteeGrantsResponse): unknown;
                fromPartial(object: Partial<_27.QueryGranteeGrantsResponse>): _27.QueryGranteeGrantsResponse;
                fromSDK(object: _27.QueryGranteeGrantsResponseSDKType): _27.QueryGranteeGrantsResponse;
                toSDK(message: _27.QueryGranteeGrantsResponse): _27.QueryGranteeGrantsResponseSDKType;
                fromAmino(object: _27.QueryGranteeGrantsResponseAmino): _27.QueryGranteeGrantsResponse;
                toAmino(message: _27.QueryGranteeGrantsResponse): _27.QueryGranteeGrantsResponseAmino;
                fromAminoMsg(object: _27.QueryGranteeGrantsResponseAminoMsg): _27.QueryGranteeGrantsResponse;
                toAminoMsg(message: _27.QueryGranteeGrantsResponse): _27.QueryGranteeGrantsResponseAminoMsg;
                fromProtoMsg(message: _27.QueryGranteeGrantsResponseProtoMsg): _27.QueryGranteeGrantsResponse;
                toProto(message: _27.QueryGranteeGrantsResponse): Uint8Array;
                toProtoMsg(message: _27.QueryGranteeGrantsResponse): _27.QueryGranteeGrantsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _26.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _26.GenesisState;
                fromJSON(object: any): _26.GenesisState;
                toJSON(message: _26.GenesisState): unknown;
                fromPartial(object: Partial<_26.GenesisState>): _26.GenesisState;
                fromSDK(object: _26.GenesisStateSDKType): _26.GenesisState;
                toSDK(message: _26.GenesisState): _26.GenesisStateSDKType;
                fromAmino(object: _26.GenesisStateAmino): _26.GenesisState;
                toAmino(message: _26.GenesisState): _26.GenesisStateAmino;
                fromAminoMsg(object: _26.GenesisStateAminoMsg): _26.GenesisState;
                toAminoMsg(message: _26.GenesisState): _26.GenesisStateAminoMsg;
                fromProtoMsg(message: _26.GenesisStateProtoMsg): _26.GenesisState;
                toProto(message: _26.GenesisState): Uint8Array;
                toProtoMsg(message: _26.GenesisState): _26.GenesisStateProtoMsg;
            };
            EventGrant: {
                typeUrl: string;
                encode(message: _25.EventGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _25.EventGrant;
                fromJSON(object: any): _25.EventGrant;
                toJSON(message: _25.EventGrant): unknown;
                fromPartial(object: Partial<_25.EventGrant>): _25.EventGrant;
                fromSDK(object: _25.EventGrantSDKType): _25.EventGrant;
                toSDK(message: _25.EventGrant): _25.EventGrantSDKType;
                fromAmino(object: _25.EventGrantAmino): _25.EventGrant;
                toAmino(message: _25.EventGrant): _25.EventGrantAmino;
                fromAminoMsg(object: _25.EventGrantAminoMsg): _25.EventGrant;
                toAminoMsg(message: _25.EventGrant): _25.EventGrantAminoMsg;
                fromProtoMsg(message: _25.EventGrantProtoMsg): _25.EventGrant;
                toProto(message: _25.EventGrant): Uint8Array;
                toProtoMsg(message: _25.EventGrant): _25.EventGrantProtoMsg;
            };
            EventRevoke: {
                typeUrl: string;
                encode(message: _25.EventRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _25.EventRevoke;
                fromJSON(object: any): _25.EventRevoke;
                toJSON(message: _25.EventRevoke): unknown;
                fromPartial(object: Partial<_25.EventRevoke>): _25.EventRevoke;
                fromSDK(object: _25.EventRevokeSDKType): _25.EventRevoke;
                toSDK(message: _25.EventRevoke): _25.EventRevokeSDKType;
                fromAmino(object: _25.EventRevokeAmino): _25.EventRevoke;
                toAmino(message: _25.EventRevoke): _25.EventRevokeAmino;
                fromAminoMsg(object: _25.EventRevokeAminoMsg): _25.EventRevoke;
                toAminoMsg(message: _25.EventRevoke): _25.EventRevokeAminoMsg;
                fromProtoMsg(message: _25.EventRevokeProtoMsg): _25.EventRevoke;
                toProto(message: _25.EventRevoke): Uint8Array;
                toProtoMsg(message: _25.EventRevoke): _25.EventRevokeProtoMsg;
            };
            GenericAuthorization: {
                typeUrl: string;
                encode(message: _24.GenericAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _24.GenericAuthorization;
                fromJSON(object: any): _24.GenericAuthorization;
                toJSON(message: _24.GenericAuthorization): unknown;
                fromPartial(object: Partial<_24.GenericAuthorization>): _24.GenericAuthorization;
                fromSDK(object: _24.GenericAuthorizationSDKType): _24.GenericAuthorization;
                toSDK(message: _24.GenericAuthorization): _24.GenericAuthorizationSDKType;
                fromAmino(object: _24.GenericAuthorizationAmino): _24.GenericAuthorization;
                toAmino(message: _24.GenericAuthorization): _24.GenericAuthorizationAmino;
                fromAminoMsg(object: _24.GenericAuthorizationAminoMsg): _24.GenericAuthorization;
                toAminoMsg(message: _24.GenericAuthorization): _24.GenericAuthorizationAminoMsg;
                fromProtoMsg(message: _24.GenericAuthorizationProtoMsg): _24.GenericAuthorization;
                toProto(message: _24.GenericAuthorization): Uint8Array;
                toProtoMsg(message: _24.GenericAuthorization): _24.GenericAuthorizationProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _24.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _24.Grant;
                fromJSON(object: any): _24.Grant;
                toJSON(message: _24.Grant): unknown;
                fromPartial(object: Partial<_24.Grant>): _24.Grant;
                fromSDK(object: _24.GrantSDKType): _24.Grant;
                toSDK(message: _24.Grant): _24.GrantSDKType;
                fromAmino(object: _24.GrantAmino): _24.Grant;
                toAmino(message: _24.Grant): _24.GrantAmino;
                fromAminoMsg(object: _24.GrantAminoMsg): _24.Grant;
                toAminoMsg(message: _24.Grant): _24.GrantAminoMsg;
                fromProtoMsg(message: _24.GrantProtoMsg): _24.Grant;
                toProto(message: _24.Grant): Uint8Array;
                toProtoMsg(message: _24.Grant): _24.GrantProtoMsg;
            };
            GrantAuthorization: {
                typeUrl: string;
                encode(message: _24.GrantAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _24.GrantAuthorization;
                fromJSON(object: any): _24.GrantAuthorization;
                toJSON(message: _24.GrantAuthorization): unknown;
                fromPartial(object: Partial<_24.GrantAuthorization>): _24.GrantAuthorization;
                fromSDK(object: _24.GrantAuthorizationSDKType): _24.GrantAuthorization;
                toSDK(message: _24.GrantAuthorization): _24.GrantAuthorizationSDKType;
                fromAmino(object: _24.GrantAuthorizationAmino): _24.GrantAuthorization;
                toAmino(message: _24.GrantAuthorization): _24.GrantAuthorizationAmino;
                fromAminoMsg(object: _24.GrantAuthorizationAminoMsg): _24.GrantAuthorization;
                toAminoMsg(message: _24.GrantAuthorization): _24.GrantAuthorizationAminoMsg;
                fromProtoMsg(message: _24.GrantAuthorizationProtoMsg): _24.GrantAuthorization;
                toProto(message: _24.GrantAuthorization): Uint8Array;
                toProtoMsg(message: _24.GrantAuthorization): _24.GrantAuthorizationProtoMsg;
            };
            GrantQueueItem: {
                typeUrl: string;
                encode(message: _24.GrantQueueItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _24.GrantQueueItem;
                fromJSON(object: any): _24.GrantQueueItem;
                toJSON(message: _24.GrantQueueItem): unknown;
                fromPartial(object: Partial<_24.GrantQueueItem>): _24.GrantQueueItem;
                fromSDK(object: _24.GrantQueueItemSDKType): _24.GrantQueueItem;
                toSDK(message: _24.GrantQueueItem): _24.GrantQueueItemSDKType;
                fromAmino(object: _24.GrantQueueItemAmino): _24.GrantQueueItem;
                toAmino(message: _24.GrantQueueItem): _24.GrantQueueItemAmino;
                fromAminoMsg(object: _24.GrantQueueItemAminoMsg): _24.GrantQueueItem;
                toAminoMsg(message: _24.GrantQueueItem): _24.GrantQueueItemAminoMsg;
                fromProtoMsg(message: _24.GrantQueueItemProtoMsg): _24.GrantQueueItem;
                toProto(message: _24.GrantQueueItem): Uint8Array;
                toProtoMsg(message: _24.GrantQueueItem): _24.GrantQueueItemProtoMsg;
            };
            Cosmos_authzv1beta1Authorization_InterfaceDecoder: (input: import("..").BinaryReader | Uint8Array) => import("../google/protobuf/any").Any | _30.SendAuthorization | _100.StakeAuthorization | _24.GenericAuthorization;
            Cosmos_authzv1beta1Authorization_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_authzv1beta1Authorization_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
        };
    }
    namespace bank {
        namespace module {
            const v1: {
                protobufPackage: "cosmos.bank.module.v1";
                Module: {
                    typeUrl: string;
                    encode(message: _29.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _29.Module;
                    fromJSON(object: any): _29.Module;
                    toJSON(message: _29.Module): unknown;
                    fromPartial(object: Partial<_29.Module>): _29.Module;
                    fromSDK(object: _29.ModuleSDKType): _29.Module;
                    toSDK(message: _29.Module): _29.ModuleSDKType;
                    fromAmino(object: _29.ModuleAmino): _29.Module;
                    toAmino(message: _29.Module): _29.ModuleAmino;
                    fromAminoMsg(object: _29.ModuleAminoMsg): _29.Module;
                    toAminoMsg(message: _29.Module): _29.ModuleAminoMsg;
                    fromProtoMsg(message: _29.ModuleProtoMsg): _29.Module;
                    toProto(message: _29.Module): Uint8Array;
                    toProtoMsg(message: _29.Module): _29.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            Msg: typeof _213.Msg;
            Query: typeof _195.Query;
            QueryClientImpl: typeof _195.QueryClientImpl;
            LCDQueryClient: typeof _178.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _34.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _34.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _34.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setSendEnabled(value: _34.MsgSetSendEnabled): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _34.MsgSend): {
                        typeUrl: string;
                        value: _34.MsgSend;
                    };
                    multiSend(value: _34.MsgMultiSend): {
                        typeUrl: string;
                        value: _34.MsgMultiSend;
                    };
                    updateParams(value: _34.MsgUpdateParams): {
                        typeUrl: string;
                        value: _34.MsgUpdateParams;
                    };
                    setSendEnabled(value: _34.MsgSetSendEnabled): {
                        typeUrl: string;
                        value: _34.MsgSetSendEnabled;
                    };
                };
                toJSON: {
                    send(value: _34.MsgSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                    multiSend(value: _34.MsgMultiSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateParams(value: _34.MsgUpdateParams): {
                        typeUrl: string;
                        value: unknown;
                    };
                    setSendEnabled(value: _34.MsgSetSendEnabled): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _34.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _34.MsgMultiSend;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _34.MsgUpdateParams;
                    };
                    setSendEnabled(value: any): {
                        typeUrl: string;
                        value: _34.MsgSetSendEnabled;
                    };
                };
                fromPartial: {
                    send(value: _34.MsgSend): {
                        typeUrl: string;
                        value: _34.MsgSend;
                    };
                    multiSend(value: _34.MsgMultiSend): {
                        typeUrl: string;
                        value: _34.MsgMultiSend;
                    };
                    updateParams(value: _34.MsgUpdateParams): {
                        typeUrl: string;
                        value: _34.MsgUpdateParams;
                    };
                    setSendEnabled(value: _34.MsgSetSendEnabled): {
                        typeUrl: string;
                        value: _34.MsgSetSendEnabled;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _34.MsgSend) => _34.MsgSendAmino;
                    fromAmino: (object: _34.MsgSendAmino) => _34.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: (message: _34.MsgMultiSend) => _34.MsgMultiSendAmino;
                    fromAmino: (object: _34.MsgMultiSendAmino) => _34.MsgMultiSend;
                };
                "/cosmos.bank.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _34.MsgUpdateParams) => _34.MsgUpdateParamsAmino;
                    fromAmino: (object: _34.MsgUpdateParamsAmino) => _34.MsgUpdateParams;
                };
                "/cosmos.bank.v1beta1.MsgSetSendEnabled": {
                    aminoType: string;
                    toAmino: (message: _34.MsgSetSendEnabled) => _34.MsgSetSendEnabledAmino;
                    fromAmino: (object: _34.MsgSetSendEnabledAmino) => _34.MsgSetSendEnabled;
                };
            };
            protobufPackage: "cosmos.bank.v1beta1";
            MsgSend: {
                typeUrl: string;
                encode(message: _34.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _34.MsgSend;
                fromJSON(object: any): _34.MsgSend;
                toJSON(message: _34.MsgSend): unknown;
                fromPartial(object: Partial<_34.MsgSend>): _34.MsgSend;
                fromSDK(object: _34.MsgSendSDKType): _34.MsgSend;
                toSDK(message: _34.MsgSend): _34.MsgSendSDKType;
                fromAmino(object: _34.MsgSendAmino): _34.MsgSend;
                toAmino(message: _34.MsgSend): _34.MsgSendAmino;
                fromAminoMsg(object: _34.MsgSendAminoMsg): _34.MsgSend;
                toAminoMsg(message: _34.MsgSend): _34.MsgSendAminoMsg;
                fromProtoMsg(message: _34.MsgSendProtoMsg): _34.MsgSend;
                toProto(message: _34.MsgSend): Uint8Array;
                toProtoMsg(message: _34.MsgSend): _34.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _34.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _34.MsgSendResponse;
                fromJSON(_: any): _34.MsgSendResponse;
                toJSON(_: _34.MsgSendResponse): unknown;
                fromPartial(_: Partial<_34.MsgSendResponse>): _34.MsgSendResponse;
                fromSDK(_: _34.MsgSendResponseSDKType): _34.MsgSendResponse;
                toSDK(_: _34.MsgSendResponse): _34.MsgSendResponseSDKType;
                fromAmino(_: _34.MsgSendResponseAmino): _34.MsgSendResponse;
                toAmino(_: _34.MsgSendResponse): _34.MsgSendResponseAmino;
                fromAminoMsg(object: _34.MsgSendResponseAminoMsg): _34.MsgSendResponse;
                toAminoMsg(message: _34.MsgSendResponse): _34.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _34.MsgSendResponseProtoMsg): _34.MsgSendResponse;
                toProto(message: _34.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _34.MsgSendResponse): _34.MsgSendResponseProtoMsg;
            };
            MsgMultiSend: {
                typeUrl: string;
                encode(message: _34.MsgMultiSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _34.MsgMultiSend;
                fromJSON(object: any): _34.MsgMultiSend;
                toJSON(message: _34.MsgMultiSend): unknown;
                fromPartial(object: Partial<_34.MsgMultiSend>): _34.MsgMultiSend;
                fromSDK(object: _34.MsgMultiSendSDKType): _34.MsgMultiSend;
                toSDK(message: _34.MsgMultiSend): _34.MsgMultiSendSDKType;
                fromAmino(object: _34.MsgMultiSendAmino): _34.MsgMultiSend;
                toAmino(message: _34.MsgMultiSend): _34.MsgMultiSendAmino;
                fromAminoMsg(object: _34.MsgMultiSendAminoMsg): _34.MsgMultiSend;
                toAminoMsg(message: _34.MsgMultiSend): _34.MsgMultiSendAminoMsg;
                fromProtoMsg(message: _34.MsgMultiSendProtoMsg): _34.MsgMultiSend;
                toProto(message: _34.MsgMultiSend): Uint8Array;
                toProtoMsg(message: _34.MsgMultiSend): _34.MsgMultiSendProtoMsg;
            };
            MsgMultiSendResponse: {
                typeUrl: string;
                encode(_: _34.MsgMultiSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _34.MsgMultiSendResponse;
                fromJSON(_: any): _34.MsgMultiSendResponse;
                toJSON(_: _34.MsgMultiSendResponse): unknown;
                fromPartial(_: Partial<_34.MsgMultiSendResponse>): _34.MsgMultiSendResponse;
                fromSDK(_: _34.MsgMultiSendResponseSDKType): _34.MsgMultiSendResponse;
                toSDK(_: _34.MsgMultiSendResponse): _34.MsgMultiSendResponseSDKType;
                fromAmino(_: _34.MsgMultiSendResponseAmino): _34.MsgMultiSendResponse;
                toAmino(_: _34.MsgMultiSendResponse): _34.MsgMultiSendResponseAmino;
                fromAminoMsg(object: _34.MsgMultiSendResponseAminoMsg): _34.MsgMultiSendResponse;
                toAminoMsg(message: _34.MsgMultiSendResponse): _34.MsgMultiSendResponseAminoMsg;
                fromProtoMsg(message: _34.MsgMultiSendResponseProtoMsg): _34.MsgMultiSendResponse;
                toProto(message: _34.MsgMultiSendResponse): Uint8Array;
                toProtoMsg(message: _34.MsgMultiSendResponse): _34.MsgMultiSendResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _34.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _34.MsgUpdateParams;
                fromJSON(object: any): _34.MsgUpdateParams;
                toJSON(message: _34.MsgUpdateParams): unknown;
                fromPartial(object: Partial<_34.MsgUpdateParams>): _34.MsgUpdateParams;
                fromSDK(object: _34.MsgUpdateParamsSDKType): _34.MsgUpdateParams;
                toSDK(message: _34.MsgUpdateParams): _34.MsgUpdateParamsSDKType;
                fromAmino(object: _34.MsgUpdateParamsAmino): _34.MsgUpdateParams;
                toAmino(message: _34.MsgUpdateParams): _34.MsgUpdateParamsAmino;
                fromAminoMsg(object: _34.MsgUpdateParamsAminoMsg): _34.MsgUpdateParams;
                toAminoMsg(message: _34.MsgUpdateParams): _34.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _34.MsgUpdateParamsProtoMsg): _34.MsgUpdateParams;
                toProto(message: _34.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _34.MsgUpdateParams): _34.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _34.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _34.MsgUpdateParamsResponse;
                fromJSON(_: any): _34.MsgUpdateParamsResponse;
                toJSON(_: _34.MsgUpdateParamsResponse): unknown;
                fromPartial(_: Partial<_34.MsgUpdateParamsResponse>): _34.MsgUpdateParamsResponse;
                fromSDK(_: _34.MsgUpdateParamsResponseSDKType): _34.MsgUpdateParamsResponse;
                toSDK(_: _34.MsgUpdateParamsResponse): _34.MsgUpdateParamsResponseSDKType;
                fromAmino(_: _34.MsgUpdateParamsResponseAmino): _34.MsgUpdateParamsResponse;
                toAmino(_: _34.MsgUpdateParamsResponse): _34.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _34.MsgUpdateParamsResponseAminoMsg): _34.MsgUpdateParamsResponse;
                toAminoMsg(message: _34.MsgUpdateParamsResponse): _34.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _34.MsgUpdateParamsResponseProtoMsg): _34.MsgUpdateParamsResponse;
                toProto(message: _34.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _34.MsgUpdateParamsResponse): _34.MsgUpdateParamsResponseProtoMsg;
            };
            MsgSetSendEnabled: {
                typeUrl: string;
                encode(message: _34.MsgSetSendEnabled, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _34.MsgSetSendEnabled;
                fromJSON(object: any): _34.MsgSetSendEnabled;
                toJSON(message: _34.MsgSetSendEnabled): unknown;
                fromPartial(object: Partial<_34.MsgSetSendEnabled>): _34.MsgSetSendEnabled;
                fromSDK(object: _34.MsgSetSendEnabledSDKType): _34.MsgSetSendEnabled;
                toSDK(message: _34.MsgSetSendEnabled): _34.MsgSetSendEnabledSDKType;
                fromAmino(object: _34.MsgSetSendEnabledAmino): _34.MsgSetSendEnabled;
                toAmino(message: _34.MsgSetSendEnabled): _34.MsgSetSendEnabledAmino;
                fromAminoMsg(object: _34.MsgSetSendEnabledAminoMsg): _34.MsgSetSendEnabled;
                toAminoMsg(message: _34.MsgSetSendEnabled): _34.MsgSetSendEnabledAminoMsg;
                fromProtoMsg(message: _34.MsgSetSendEnabledProtoMsg): _34.MsgSetSendEnabled;
                toProto(message: _34.MsgSetSendEnabled): Uint8Array;
                toProtoMsg(message: _34.MsgSetSendEnabled): _34.MsgSetSendEnabledProtoMsg;
            };
            MsgSetSendEnabledResponse: {
                typeUrl: string;
                encode(_: _34.MsgSetSendEnabledResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _34.MsgSetSendEnabledResponse;
                fromJSON(_: any): _34.MsgSetSendEnabledResponse;
                toJSON(_: _34.MsgSetSendEnabledResponse): unknown;
                fromPartial(_: Partial<_34.MsgSetSendEnabledResponse>): _34.MsgSetSendEnabledResponse;
                fromSDK(_: _34.MsgSetSendEnabledResponseSDKType): _34.MsgSetSendEnabledResponse;
                toSDK(_: _34.MsgSetSendEnabledResponse): _34.MsgSetSendEnabledResponseSDKType;
                fromAmino(_: _34.MsgSetSendEnabledResponseAmino): _34.MsgSetSendEnabledResponse;
                toAmino(_: _34.MsgSetSendEnabledResponse): _34.MsgSetSendEnabledResponseAmino;
                fromAminoMsg(object: _34.MsgSetSendEnabledResponseAminoMsg): _34.MsgSetSendEnabledResponse;
                toAminoMsg(message: _34.MsgSetSendEnabledResponse): _34.MsgSetSendEnabledResponseAminoMsg;
                fromProtoMsg(message: _34.MsgSetSendEnabledResponseProtoMsg): _34.MsgSetSendEnabledResponse;
                toProto(message: _34.MsgSetSendEnabledResponse): Uint8Array;
                toProtoMsg(message: _34.MsgSetSendEnabledResponse): _34.MsgSetSendEnabledResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _33.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _33.QueryBalanceRequest;
                fromJSON(object: any): _33.QueryBalanceRequest;
                toJSON(message: _33.QueryBalanceRequest): unknown;
                fromPartial(object: Partial<_33.QueryBalanceRequest>): _33.QueryBalanceRequest;
                fromSDK(object: _33.QueryBalanceRequestSDKType): _33.QueryBalanceRequest;
                toSDK(message: _33.QueryBalanceRequest): _33.QueryBalanceRequestSDKType;
                fromAmino(object: _33.QueryBalanceRequestAmino): _33.QueryBalanceRequest;
                toAmino(message: _33.QueryBalanceRequest): _33.QueryBalanceRequestAmino;
                fromAminoMsg(object: _33.QueryBalanceRequestAminoMsg): _33.QueryBalanceRequest;
                toAminoMsg(message: _33.QueryBalanceRequest): _33.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _33.QueryBalanceRequestProtoMsg): _33.QueryBalanceRequest;
                toProto(message: _33.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _33.QueryBalanceRequest): _33.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _33.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _33.QueryBalanceResponse;
                fromJSON(object: any): _33.QueryBalanceResponse;
                toJSON(message: _33.QueryBalanceResponse): unknown;
                fromPartial(object: Partial<_33.QueryBalanceResponse>): _33.QueryBalanceResponse;
                fromSDK(object: _33.QueryBalanceResponseSDKType): _33.QueryBalanceResponse;
                toSDK(message: _33.QueryBalanceResponse): _33.QueryBalanceResponseSDKType;
                fromAmino(object: _33.QueryBalanceResponseAmino): _33.QueryBalanceResponse;
                toAmino(message: _33.QueryBalanceResponse): _33.QueryBalanceResponseAmino;
                fromAminoMsg(object: _33.QueryBalanceResponseAminoMsg): _33.QueryBalanceResponse;
                toAminoMsg(message: _33.QueryBalanceResponse): _33.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _33.QueryBalanceResponseProtoMsg): _33.QueryBalanceResponse;
                toProto(message: _33.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _33.QueryBalanceResponse): _33.QueryBalanceResponseProtoMsg;
            };
            QueryAllBalancesRequest: {
                typeUrl: string;
                encode(message: _33.QueryAllBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _33.QueryAllBalancesRequest;
                fromJSON(object: any): _33.QueryAllBalancesRequest;
                toJSON(message: _33.QueryAllBalancesRequest): unknown;
                fromPartial(object: Partial<_33.QueryAllBalancesRequest>): _33.QueryAllBalancesRequest;
                fromSDK(object: _33.QueryAllBalancesRequestSDKType): _33.QueryAllBalancesRequest;
                toSDK(message: _33.QueryAllBalancesRequest): _33.QueryAllBalancesRequestSDKType;
                fromAmino(object: _33.QueryAllBalancesRequestAmino): _33.QueryAllBalancesRequest;
                toAmino(message: _33.QueryAllBalancesRequest): _33.QueryAllBalancesRequestAmino;
                fromAminoMsg(object: _33.QueryAllBalancesRequestAminoMsg): _33.QueryAllBalancesRequest;
                toAminoMsg(message: _33.QueryAllBalancesRequest): _33.QueryAllBalancesRequestAminoMsg;
                fromProtoMsg(message: _33.QueryAllBalancesRequestProtoMsg): _33.QueryAllBalancesRequest;
                toProto(message: _33.QueryAllBalancesRequest): Uint8Array;
                toProtoMsg(message: _33.QueryAllBalancesRequest): _33.QueryAllBalancesRequestProtoMsg;
            };
            QueryAllBalancesResponse: {
                typeUrl: string;
                encode(message: _33.QueryAllBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _33.QueryAllBalancesResponse;
                fromJSON(object: any): _33.QueryAllBalancesResponse;
                toJSON(message: _33.QueryAllBalancesResponse): unknown;
                fromPartial(object: Partial<_33.QueryAllBalancesResponse>): _33.QueryAllBalancesResponse;
                fromSDK(object: _33.QueryAllBalancesResponseSDKType): _33.QueryAllBalancesResponse;
                toSDK(message: _33.QueryAllBalancesResponse): _33.QueryAllBalancesResponseSDKType;
                fromAmino(object: _33.QueryAllBalancesResponseAmino): _33.QueryAllBalancesResponse;
                toAmino(message: _33.QueryAllBalancesResponse): _33.QueryAllBalancesResponseAmino;
                fromAminoMsg(object: _33.QueryAllBalancesResponseAminoMsg): _33.QueryAllBalancesResponse;
                toAminoMsg(message: _33.QueryAllBalancesResponse): _33.QueryAllBalancesResponseAminoMsg;
                fromProtoMsg(message: _33.QueryAllBalancesResponseProtoMsg): _33.QueryAllBalancesResponse;
                toProto(message: _33.QueryAllBalancesResponse): Uint8Array;
                toProtoMsg(message: _33.QueryAllBalancesResponse): _33.QueryAllBalancesResponseProtoMsg;
            };
            QuerySpendableBalancesRequest: {
                typeUrl: string;
                encode(message: _33.QuerySpendableBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _33.QuerySpendableBalancesRequest;
                fromJSON(object: any): _33.QuerySpendableBalancesRequest;
                toJSON(message: _33.QuerySpendableBalancesRequest): unknown;
                fromPartial(object: Partial<_33.QuerySpendableBalancesRequest>): _33.QuerySpendableBalancesRequest;
                fromSDK(object: _33.QuerySpendableBalancesRequestSDKType): _33.QuerySpendableBalancesRequest;
                toSDK(message: _33.QuerySpendableBalancesRequest): _33.QuerySpendableBalancesRequestSDKType;
                fromAmino(object: _33.QuerySpendableBalancesRequestAmino): _33.QuerySpendableBalancesRequest;
                toAmino(message: _33.QuerySpendableBalancesRequest): _33.QuerySpendableBalancesRequestAmino;
                fromAminoMsg(object: _33.QuerySpendableBalancesRequestAminoMsg): _33.QuerySpendableBalancesRequest;
                toAminoMsg(message: _33.QuerySpendableBalancesRequest): _33.QuerySpendableBalancesRequestAminoMsg;
                fromProtoMsg(message: _33.QuerySpendableBalancesRequestProtoMsg): _33.QuerySpendableBalancesRequest;
                toProto(message: _33.QuerySpendableBalancesRequest): Uint8Array;
                toProtoMsg(message: _33.QuerySpendableBalancesRequest): _33.QuerySpendableBalancesRequestProtoMsg;
            };
            QuerySpendableBalancesResponse: {
                typeUrl: string;
                encode(message: _33.QuerySpendableBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _33.QuerySpendableBalancesResponse;
                fromJSON(object: any): _33.QuerySpendableBalancesResponse;
                toJSON(message: _33.QuerySpendableBalancesResponse): unknown;
                fromPartial(object: Partial<_33.QuerySpendableBalancesResponse>): _33.QuerySpendableBalancesResponse;
                fromSDK(object: _33.QuerySpendableBalancesResponseSDKType): _33.QuerySpendableBalancesResponse;
                toSDK(message: _33.QuerySpendableBalancesResponse): _33.QuerySpendableBalancesResponseSDKType;
                fromAmino(object: _33.QuerySpendableBalancesResponseAmino): _33.QuerySpendableBalancesResponse;
                toAmino(message: _33.QuerySpendableBalancesResponse): _33.QuerySpendableBalancesResponseAmino;
                fromAminoMsg(object: _33.QuerySpendableBalancesResponseAminoMsg): _33.QuerySpendableBalancesResponse;
                toAminoMsg(message: _33.QuerySpendableBalancesResponse): _33.QuerySpendableBalancesResponseAminoMsg;
                fromProtoMsg(message: _33.QuerySpendableBalancesResponseProtoMsg): _33.QuerySpendableBalancesResponse;
                toProto(message: _33.QuerySpendableBalancesResponse): Uint8Array;
                toProtoMsg(message: _33.QuerySpendableBalancesResponse): _33.QuerySpendableBalancesResponseProtoMsg;
            };
            QuerySpendableBalanceByDenomRequest: {
                typeUrl: string;
                encode(message: _33.QuerySpendableBalanceByDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _33.QuerySpendableBalanceByDenomRequest;
                fromJSON(object: any): _33.QuerySpendableBalanceByDenomRequest;
                toJSON(message: _33.QuerySpendableBalanceByDenomRequest): unknown;
                fromPartial(object: Partial<_33.QuerySpendableBalanceByDenomRequest>): _33.QuerySpendableBalanceByDenomRequest;
                fromSDK(object: _33.QuerySpendableBalanceByDenomRequestSDKType): _33.QuerySpendableBalanceByDenomRequest;
                toSDK(message: _33.QuerySpendableBalanceByDenomRequest): _33.QuerySpendableBalanceByDenomRequestSDKType;
                fromAmino(object: _33.QuerySpendableBalanceByDenomRequestAmino): _33.QuerySpendableBalanceByDenomRequest;
                toAmino(message: _33.QuerySpendableBalanceByDenomRequest): _33.QuerySpendableBalanceByDenomRequestAmino;
                fromAminoMsg(object: _33.QuerySpendableBalanceByDenomRequestAminoMsg): _33.QuerySpendableBalanceByDenomRequest;
                toAminoMsg(message: _33.QuerySpendableBalanceByDenomRequest): _33.QuerySpendableBalanceByDenomRequestAminoMsg;
                fromProtoMsg(message: _33.QuerySpendableBalanceByDenomRequestProtoMsg): _33.QuerySpendableBalanceByDenomRequest;
                toProto(message: _33.QuerySpendableBalanceByDenomRequest): Uint8Array;
                toProtoMsg(message: _33.QuerySpendableBalanceByDenomRequest): _33.QuerySpendableBalanceByDenomRequestProtoMsg;
            };
            QuerySpendableBalanceByDenomResponse: {
                typeUrl: string;
                encode(message: _33.QuerySpendableBalanceByDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _33.QuerySpendableBalanceByDenomResponse;
                fromJSON(object: any): _33.QuerySpendableBalanceByDenomResponse;
                toJSON(message: _33.QuerySpendableBalanceByDenomResponse): unknown;
                fromPartial(object: Partial<_33.QuerySpendableBalanceByDenomResponse>): _33.QuerySpendableBalanceByDenomResponse;
                fromSDK(object: _33.QuerySpendableBalanceByDenomResponseSDKType): _33.QuerySpendableBalanceByDenomResponse;
                toSDK(message: _33.QuerySpendableBalanceByDenomResponse): _33.QuerySpendableBalanceByDenomResponseSDKType;
                fromAmino(object: _33.QuerySpendableBalanceByDenomResponseAmino): _33.QuerySpendableBalanceByDenomResponse;
                toAmino(message: _33.QuerySpendableBalanceByDenomResponse): _33.QuerySpendableBalanceByDenomResponseAmino;
                fromAminoMsg(object: _33.QuerySpendableBalanceByDenomResponseAminoMsg): _33.QuerySpendableBalanceByDenomResponse;
                toAminoMsg(message: _33.QuerySpendableBalanceByDenomResponse): _33.QuerySpendableBalanceByDenomResponseAminoMsg;
                fromProtoMsg(message: _33.QuerySpendableBalanceByDenomResponseProtoMsg): _33.QuerySpendableBalanceByDenomResponse;
                toProto(message: _33.QuerySpendableBalanceByDenomResponse): Uint8Array;
                toProtoMsg(message: _33.QuerySpendableBalanceByDenomResponse): _33.QuerySpendableBalanceByDenomResponseProtoMsg;
            };
            QueryTotalSupplyRequest: {
                typeUrl: string;
                encode(message: _33.QueryTotalSupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _33.QueryTotalSupplyRequest;
                fromJSON(object: any): _33.QueryTotalSupplyRequest;
                toJSON(message: _33.QueryTotalSupplyRequest): unknown;
                fromPartial(object: Partial<_33.QueryTotalSupplyRequest>): _33.QueryTotalSupplyRequest;
                fromSDK(object: _33.QueryTotalSupplyRequestSDKType): _33.QueryTotalSupplyRequest;
                toSDK(message: _33.QueryTotalSupplyRequest): _33.QueryTotalSupplyRequestSDKType;
                fromAmino(object: _33.QueryTotalSupplyRequestAmino): _33.QueryTotalSupplyRequest;
                toAmino(message: _33.QueryTotalSupplyRequest): _33.QueryTotalSupplyRequestAmino;
                fromAminoMsg(object: _33.QueryTotalSupplyRequestAminoMsg): _33.QueryTotalSupplyRequest;
                toAminoMsg(message: _33.QueryTotalSupplyRequest): _33.QueryTotalSupplyRequestAminoMsg;
                fromProtoMsg(message: _33.QueryTotalSupplyRequestProtoMsg): _33.QueryTotalSupplyRequest;
                toProto(message: _33.QueryTotalSupplyRequest): Uint8Array;
                toProtoMsg(message: _33.QueryTotalSupplyRequest): _33.QueryTotalSupplyRequestProtoMsg;
            };
            QueryTotalSupplyResponse: {
                typeUrl: string;
                encode(message: _33.QueryTotalSupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _33.QueryTotalSupplyResponse;
                fromJSON(object: any): _33.QueryTotalSupplyResponse;
                toJSON(message: _33.QueryTotalSupplyResponse): unknown;
                fromPartial(object: Partial<_33.QueryTotalSupplyResponse>): _33.QueryTotalSupplyResponse;
                fromSDK(object: _33.QueryTotalSupplyResponseSDKType): _33.QueryTotalSupplyResponse;
                toSDK(message: _33.QueryTotalSupplyResponse): _33.QueryTotalSupplyResponseSDKType;
                fromAmino(object: _33.QueryTotalSupplyResponseAmino): _33.QueryTotalSupplyResponse;
                toAmino(message: _33.QueryTotalSupplyResponse): _33.QueryTotalSupplyResponseAmino;
                fromAminoMsg(object: _33.QueryTotalSupplyResponseAminoMsg): _33.QueryTotalSupplyResponse;
                toAminoMsg(message: _33.QueryTotalSupplyResponse): _33.QueryTotalSupplyResponseAminoMsg;
                fromProtoMsg(message: _33.QueryTotalSupplyResponseProtoMsg): _33.QueryTotalSupplyResponse;
                toProto(message: _33.QueryTotalSupplyResponse): Uint8Array;
                toProtoMsg(message: _33.QueryTotalSupplyResponse): _33.QueryTotalSupplyResponseProtoMsg;
            };
            QuerySupplyOfRequest: {
                typeUrl: string;
                encode(message: _33.QuerySupplyOfRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _33.QuerySupplyOfRequest;
                fromJSON(object: any): _33.QuerySupplyOfRequest;
                toJSON(message: _33.QuerySupplyOfRequest): unknown;
                fromPartial(object: Partial<_33.QuerySupplyOfRequest>): _33.QuerySupplyOfRequest;
                fromSDK(object: _33.QuerySupplyOfRequestSDKType): _33.QuerySupplyOfRequest;
                toSDK(message: _33.QuerySupplyOfRequest): _33.QuerySupplyOfRequestSDKType;
                fromAmino(object: _33.QuerySupplyOfRequestAmino): _33.QuerySupplyOfRequest;
                toAmino(message: _33.QuerySupplyOfRequest): _33.QuerySupplyOfRequestAmino;
                fromAminoMsg(object: _33.QuerySupplyOfRequestAminoMsg): _33.QuerySupplyOfRequest;
                toAminoMsg(message: _33.QuerySupplyOfRequest): _33.QuerySupplyOfRequestAminoMsg;
                fromProtoMsg(message: _33.QuerySupplyOfRequestProtoMsg): _33.QuerySupplyOfRequest;
                toProto(message: _33.QuerySupplyOfRequest): Uint8Array;
                toProtoMsg(message: _33.QuerySupplyOfRequest): _33.QuerySupplyOfRequestProtoMsg;
            };
            QuerySupplyOfResponse: {
                typeUrl: string;
                encode(message: _33.QuerySupplyOfResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _33.QuerySupplyOfResponse;
                fromJSON(object: any): _33.QuerySupplyOfResponse;
                toJSON(message: _33.QuerySupplyOfResponse): unknown;
                fromPartial(object: Partial<_33.QuerySupplyOfResponse>): _33.QuerySupplyOfResponse;
                fromSDK(object: _33.QuerySupplyOfResponseSDKType): _33.QuerySupplyOfResponse;
                toSDK(message: _33.QuerySupplyOfResponse): _33.QuerySupplyOfResponseSDKType;
                fromAmino(object: _33.QuerySupplyOfResponseAmino): _33.QuerySupplyOfResponse;
                toAmino(message: _33.QuerySupplyOfResponse): _33.QuerySupplyOfResponseAmino;
                fromAminoMsg(object: _33.QuerySupplyOfResponseAminoMsg): _33.QuerySupplyOfResponse;
                toAminoMsg(message: _33.QuerySupplyOfResponse): _33.QuerySupplyOfResponseAminoMsg;
                fromProtoMsg(message: _33.QuerySupplyOfResponseProtoMsg): _33.QuerySupplyOfResponse;
                toProto(message: _33.QuerySupplyOfResponse): Uint8Array;
                toProtoMsg(message: _33.QuerySupplyOfResponse): _33.QuerySupplyOfResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _33.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _33.QueryParamsRequest;
                fromJSON(_: any): _33.QueryParamsRequest;
                toJSON(_: _33.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_33.QueryParamsRequest>): _33.QueryParamsRequest;
                fromSDK(_: _33.QueryParamsRequestSDKType): _33.QueryParamsRequest;
                toSDK(_: _33.QueryParamsRequest): _33.QueryParamsRequestSDKType;
                fromAmino(_: _33.QueryParamsRequestAmino): _33.QueryParamsRequest;
                toAmino(_: _33.QueryParamsRequest): _33.QueryParamsRequestAmino;
                fromAminoMsg(object: _33.QueryParamsRequestAminoMsg): _33.QueryParamsRequest;
                toAminoMsg(message: _33.QueryParamsRequest): _33.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _33.QueryParamsRequestProtoMsg): _33.QueryParamsRequest;
                toProto(message: _33.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _33.QueryParamsRequest): _33.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _33.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _33.QueryParamsResponse;
                fromJSON(object: any): _33.QueryParamsResponse;
                toJSON(message: _33.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_33.QueryParamsResponse>): _33.QueryParamsResponse;
                fromSDK(object: _33.QueryParamsResponseSDKType): _33.QueryParamsResponse;
                toSDK(message: _33.QueryParamsResponse): _33.QueryParamsResponseSDKType;
                fromAmino(object: _33.QueryParamsResponseAmino): _33.QueryParamsResponse;
                toAmino(message: _33.QueryParamsResponse): _33.QueryParamsResponseAmino;
                fromAminoMsg(object: _33.QueryParamsResponseAminoMsg): _33.QueryParamsResponse;
                toAminoMsg(message: _33.QueryParamsResponse): _33.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _33.QueryParamsResponseProtoMsg): _33.QueryParamsResponse;
                toProto(message: _33.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _33.QueryParamsResponse): _33.QueryParamsResponseProtoMsg;
            };
            QueryDenomsMetadataRequest: {
                typeUrl: string;
                encode(message: _33.QueryDenomsMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _33.QueryDenomsMetadataRequest;
                fromJSON(object: any): _33.QueryDenomsMetadataRequest;
                toJSON(message: _33.QueryDenomsMetadataRequest): unknown;
                fromPartial(object: Partial<_33.QueryDenomsMetadataRequest>): _33.QueryDenomsMetadataRequest;
                fromSDK(object: _33.QueryDenomsMetadataRequestSDKType): _33.QueryDenomsMetadataRequest;
                toSDK(message: _33.QueryDenomsMetadataRequest): _33.QueryDenomsMetadataRequestSDKType;
                fromAmino(object: _33.QueryDenomsMetadataRequestAmino): _33.QueryDenomsMetadataRequest;
                toAmino(message: _33.QueryDenomsMetadataRequest): _33.QueryDenomsMetadataRequestAmino;
                fromAminoMsg(object: _33.QueryDenomsMetadataRequestAminoMsg): _33.QueryDenomsMetadataRequest;
                toAminoMsg(message: _33.QueryDenomsMetadataRequest): _33.QueryDenomsMetadataRequestAminoMsg;
                fromProtoMsg(message: _33.QueryDenomsMetadataRequestProtoMsg): _33.QueryDenomsMetadataRequest;
                toProto(message: _33.QueryDenomsMetadataRequest): Uint8Array;
                toProtoMsg(message: _33.QueryDenomsMetadataRequest): _33.QueryDenomsMetadataRequestProtoMsg;
            };
            QueryDenomsMetadataResponse: {
                typeUrl: string;
                encode(message: _33.QueryDenomsMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _33.QueryDenomsMetadataResponse;
                fromJSON(object: any): _33.QueryDenomsMetadataResponse;
                toJSON(message: _33.QueryDenomsMetadataResponse): unknown;
                fromPartial(object: Partial<_33.QueryDenomsMetadataResponse>): _33.QueryDenomsMetadataResponse;
                fromSDK(object: _33.QueryDenomsMetadataResponseSDKType): _33.QueryDenomsMetadataResponse;
                toSDK(message: _33.QueryDenomsMetadataResponse): _33.QueryDenomsMetadataResponseSDKType;
                fromAmino(object: _33.QueryDenomsMetadataResponseAmino): _33.QueryDenomsMetadataResponse;
                toAmino(message: _33.QueryDenomsMetadataResponse): _33.QueryDenomsMetadataResponseAmino;
                fromAminoMsg(object: _33.QueryDenomsMetadataResponseAminoMsg): _33.QueryDenomsMetadataResponse;
                toAminoMsg(message: _33.QueryDenomsMetadataResponse): _33.QueryDenomsMetadataResponseAminoMsg;
                fromProtoMsg(message: _33.QueryDenomsMetadataResponseProtoMsg): _33.QueryDenomsMetadataResponse;
                toProto(message: _33.QueryDenomsMetadataResponse): Uint8Array;
                toProtoMsg(message: _33.QueryDenomsMetadataResponse): _33.QueryDenomsMetadataResponseProtoMsg;
            };
            QueryDenomMetadataRequest: {
                typeUrl: string;
                encode(message: _33.QueryDenomMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _33.QueryDenomMetadataRequest;
                fromJSON(object: any): _33.QueryDenomMetadataRequest;
                toJSON(message: _33.QueryDenomMetadataRequest): unknown;
                fromPartial(object: Partial<_33.QueryDenomMetadataRequest>): _33.QueryDenomMetadataRequest;
                fromSDK(object: _33.QueryDenomMetadataRequestSDKType): _33.QueryDenomMetadataRequest;
                toSDK(message: _33.QueryDenomMetadataRequest): _33.QueryDenomMetadataRequestSDKType;
                fromAmino(object: _33.QueryDenomMetadataRequestAmino): _33.QueryDenomMetadataRequest;
                toAmino(message: _33.QueryDenomMetadataRequest): _33.QueryDenomMetadataRequestAmino;
                fromAminoMsg(object: _33.QueryDenomMetadataRequestAminoMsg): _33.QueryDenomMetadataRequest;
                toAminoMsg(message: _33.QueryDenomMetadataRequest): _33.QueryDenomMetadataRequestAminoMsg;
                fromProtoMsg(message: _33.QueryDenomMetadataRequestProtoMsg): _33.QueryDenomMetadataRequest;
                toProto(message: _33.QueryDenomMetadataRequest): Uint8Array;
                toProtoMsg(message: _33.QueryDenomMetadataRequest): _33.QueryDenomMetadataRequestProtoMsg;
            };
            QueryDenomMetadataResponse: {
                typeUrl: string;
                encode(message: _33.QueryDenomMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _33.QueryDenomMetadataResponse;
                fromJSON(object: any): _33.QueryDenomMetadataResponse;
                toJSON(message: _33.QueryDenomMetadataResponse): unknown;
                fromPartial(object: Partial<_33.QueryDenomMetadataResponse>): _33.QueryDenomMetadataResponse;
                fromSDK(object: _33.QueryDenomMetadataResponseSDKType): _33.QueryDenomMetadataResponse;
                toSDK(message: _33.QueryDenomMetadataResponse): _33.QueryDenomMetadataResponseSDKType;
                fromAmino(object: _33.QueryDenomMetadataResponseAmino): _33.QueryDenomMetadataResponse;
                toAmino(message: _33.QueryDenomMetadataResponse): _33.QueryDenomMetadataResponseAmino;
                fromAminoMsg(object: _33.QueryDenomMetadataResponseAminoMsg): _33.QueryDenomMetadataResponse;
                toAminoMsg(message: _33.QueryDenomMetadataResponse): _33.QueryDenomMetadataResponseAminoMsg;
                fromProtoMsg(message: _33.QueryDenomMetadataResponseProtoMsg): _33.QueryDenomMetadataResponse;
                toProto(message: _33.QueryDenomMetadataResponse): Uint8Array;
                toProtoMsg(message: _33.QueryDenomMetadataResponse): _33.QueryDenomMetadataResponseProtoMsg;
            };
            QueryDenomOwnersRequest: {
                typeUrl: string;
                encode(message: _33.QueryDenomOwnersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _33.QueryDenomOwnersRequest;
                fromJSON(object: any): _33.QueryDenomOwnersRequest;
                toJSON(message: _33.QueryDenomOwnersRequest): unknown;
                fromPartial(object: Partial<_33.QueryDenomOwnersRequest>): _33.QueryDenomOwnersRequest;
                fromSDK(object: _33.QueryDenomOwnersRequestSDKType): _33.QueryDenomOwnersRequest;
                toSDK(message: _33.QueryDenomOwnersRequest): _33.QueryDenomOwnersRequestSDKType;
                fromAmino(object: _33.QueryDenomOwnersRequestAmino): _33.QueryDenomOwnersRequest;
                toAmino(message: _33.QueryDenomOwnersRequest): _33.QueryDenomOwnersRequestAmino;
                fromAminoMsg(object: _33.QueryDenomOwnersRequestAminoMsg): _33.QueryDenomOwnersRequest;
                toAminoMsg(message: _33.QueryDenomOwnersRequest): _33.QueryDenomOwnersRequestAminoMsg;
                fromProtoMsg(message: _33.QueryDenomOwnersRequestProtoMsg): _33.QueryDenomOwnersRequest;
                toProto(message: _33.QueryDenomOwnersRequest): Uint8Array;
                toProtoMsg(message: _33.QueryDenomOwnersRequest): _33.QueryDenomOwnersRequestProtoMsg;
            };
            DenomOwner: {
                typeUrl: string;
                encode(message: _33.DenomOwner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _33.DenomOwner;
                fromJSON(object: any): _33.DenomOwner;
                toJSON(message: _33.DenomOwner): unknown;
                fromPartial(object: Partial<_33.DenomOwner>): _33.DenomOwner;
                fromSDK(object: _33.DenomOwnerSDKType): _33.DenomOwner;
                toSDK(message: _33.DenomOwner): _33.DenomOwnerSDKType;
                fromAmino(object: _33.DenomOwnerAmino): _33.DenomOwner;
                toAmino(message: _33.DenomOwner): _33.DenomOwnerAmino;
                fromAminoMsg(object: _33.DenomOwnerAminoMsg): _33.DenomOwner;
                toAminoMsg(message: _33.DenomOwner): _33.DenomOwnerAminoMsg;
                fromProtoMsg(message: _33.DenomOwnerProtoMsg): _33.DenomOwner;
                toProto(message: _33.DenomOwner): Uint8Array;
                toProtoMsg(message: _33.DenomOwner): _33.DenomOwnerProtoMsg;
            };
            QueryDenomOwnersResponse: {
                typeUrl: string;
                encode(message: _33.QueryDenomOwnersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _33.QueryDenomOwnersResponse;
                fromJSON(object: any): _33.QueryDenomOwnersResponse;
                toJSON(message: _33.QueryDenomOwnersResponse): unknown;
                fromPartial(object: Partial<_33.QueryDenomOwnersResponse>): _33.QueryDenomOwnersResponse;
                fromSDK(object: _33.QueryDenomOwnersResponseSDKType): _33.QueryDenomOwnersResponse;
                toSDK(message: _33.QueryDenomOwnersResponse): _33.QueryDenomOwnersResponseSDKType;
                fromAmino(object: _33.QueryDenomOwnersResponseAmino): _33.QueryDenomOwnersResponse;
                toAmino(message: _33.QueryDenomOwnersResponse): _33.QueryDenomOwnersResponseAmino;
                fromAminoMsg(object: _33.QueryDenomOwnersResponseAminoMsg): _33.QueryDenomOwnersResponse;
                toAminoMsg(message: _33.QueryDenomOwnersResponse): _33.QueryDenomOwnersResponseAminoMsg;
                fromProtoMsg(message: _33.QueryDenomOwnersResponseProtoMsg): _33.QueryDenomOwnersResponse;
                toProto(message: _33.QueryDenomOwnersResponse): Uint8Array;
                toProtoMsg(message: _33.QueryDenomOwnersResponse): _33.QueryDenomOwnersResponseProtoMsg;
            };
            QuerySendEnabledRequest: {
                typeUrl: string;
                encode(message: _33.QuerySendEnabledRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _33.QuerySendEnabledRequest;
                fromJSON(object: any): _33.QuerySendEnabledRequest;
                toJSON(message: _33.QuerySendEnabledRequest): unknown;
                fromPartial(object: Partial<_33.QuerySendEnabledRequest>): _33.QuerySendEnabledRequest;
                fromSDK(object: _33.QuerySendEnabledRequestSDKType): _33.QuerySendEnabledRequest;
                toSDK(message: _33.QuerySendEnabledRequest): _33.QuerySendEnabledRequestSDKType;
                fromAmino(object: _33.QuerySendEnabledRequestAmino): _33.QuerySendEnabledRequest;
                toAmino(message: _33.QuerySendEnabledRequest): _33.QuerySendEnabledRequestAmino;
                fromAminoMsg(object: _33.QuerySendEnabledRequestAminoMsg): _33.QuerySendEnabledRequest;
                toAminoMsg(message: _33.QuerySendEnabledRequest): _33.QuerySendEnabledRequestAminoMsg;
                fromProtoMsg(message: _33.QuerySendEnabledRequestProtoMsg): _33.QuerySendEnabledRequest;
                toProto(message: _33.QuerySendEnabledRequest): Uint8Array;
                toProtoMsg(message: _33.QuerySendEnabledRequest): _33.QuerySendEnabledRequestProtoMsg;
            };
            QuerySendEnabledResponse: {
                typeUrl: string;
                encode(message: _33.QuerySendEnabledResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _33.QuerySendEnabledResponse;
                fromJSON(object: any): _33.QuerySendEnabledResponse;
                toJSON(message: _33.QuerySendEnabledResponse): unknown;
                fromPartial(object: Partial<_33.QuerySendEnabledResponse>): _33.QuerySendEnabledResponse;
                fromSDK(object: _33.QuerySendEnabledResponseSDKType): _33.QuerySendEnabledResponse;
                toSDK(message: _33.QuerySendEnabledResponse): _33.QuerySendEnabledResponseSDKType;
                fromAmino(object: _33.QuerySendEnabledResponseAmino): _33.QuerySendEnabledResponse;
                toAmino(message: _33.QuerySendEnabledResponse): _33.QuerySendEnabledResponseAmino;
                fromAminoMsg(object: _33.QuerySendEnabledResponseAminoMsg): _33.QuerySendEnabledResponse;
                toAminoMsg(message: _33.QuerySendEnabledResponse): _33.QuerySendEnabledResponseAminoMsg;
                fromProtoMsg(message: _33.QuerySendEnabledResponseProtoMsg): _33.QuerySendEnabledResponse;
                toProto(message: _33.QuerySendEnabledResponse): Uint8Array;
                toProtoMsg(message: _33.QuerySendEnabledResponse): _33.QuerySendEnabledResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _32.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _32.GenesisState;
                fromJSON(object: any): _32.GenesisState;
                toJSON(message: _32.GenesisState): unknown;
                fromPartial(object: Partial<_32.GenesisState>): _32.GenesisState;
                fromSDK(object: _32.GenesisStateSDKType): _32.GenesisState;
                toSDK(message: _32.GenesisState): _32.GenesisStateSDKType;
                fromAmino(object: _32.GenesisStateAmino): _32.GenesisState;
                toAmino(message: _32.GenesisState): _32.GenesisStateAmino;
                fromAminoMsg(object: _32.GenesisStateAminoMsg): _32.GenesisState;
                toAminoMsg(message: _32.GenesisState): _32.GenesisStateAminoMsg;
                fromProtoMsg(message: _32.GenesisStateProtoMsg): _32.GenesisState;
                toProto(message: _32.GenesisState): Uint8Array;
                toProtoMsg(message: _32.GenesisState): _32.GenesisStateProtoMsg;
            };
            Balance: {
                typeUrl: string;
                encode(message: _32.Balance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _32.Balance;
                fromJSON(object: any): _32.Balance;
                toJSON(message: _32.Balance): unknown;
                fromPartial(object: Partial<_32.Balance>): _32.Balance;
                fromSDK(object: _32.BalanceSDKType): _32.Balance;
                toSDK(message: _32.Balance): _32.BalanceSDKType;
                fromAmino(object: _32.BalanceAmino): _32.Balance;
                toAmino(message: _32.Balance): _32.BalanceAmino;
                fromAminoMsg(object: _32.BalanceAminoMsg): _32.Balance;
                toAminoMsg(message: _32.Balance): _32.BalanceAminoMsg;
                fromProtoMsg(message: _32.BalanceProtoMsg): _32.Balance;
                toProto(message: _32.Balance): Uint8Array;
                toProtoMsg(message: _32.Balance): _32.BalanceProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _31.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _31.Params;
                fromJSON(object: any): _31.Params;
                toJSON(message: _31.Params): unknown;
                fromPartial(object: Partial<_31.Params>): _31.Params;
                fromSDK(object: _31.ParamsSDKType): _31.Params;
                toSDK(message: _31.Params): _31.ParamsSDKType;
                fromAmino(object: _31.ParamsAmino): _31.Params;
                toAmino(message: _31.Params): _31.ParamsAmino;
                fromAminoMsg(object: _31.ParamsAminoMsg): _31.Params;
                toAminoMsg(message: _31.Params): _31.ParamsAminoMsg;
                fromProtoMsg(message: _31.ParamsProtoMsg): _31.Params;
                toProto(message: _31.Params): Uint8Array;
                toProtoMsg(message: _31.Params): _31.ParamsProtoMsg;
            };
            SendEnabled: {
                typeUrl: string;
                encode(message: _31.SendEnabled, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _31.SendEnabled;
                fromJSON(object: any): _31.SendEnabled;
                toJSON(message: _31.SendEnabled): unknown;
                fromPartial(object: Partial<_31.SendEnabled>): _31.SendEnabled;
                fromSDK(object: _31.SendEnabledSDKType): _31.SendEnabled;
                toSDK(message: _31.SendEnabled): _31.SendEnabledSDKType;
                fromAmino(object: _31.SendEnabledAmino): _31.SendEnabled;
                toAmino(message: _31.SendEnabled): _31.SendEnabledAmino;
                fromAminoMsg(object: _31.SendEnabledAminoMsg): _31.SendEnabled;
                toAminoMsg(message: _31.SendEnabled): _31.SendEnabledAminoMsg;
                fromProtoMsg(message: _31.SendEnabledProtoMsg): _31.SendEnabled;
                toProto(message: _31.SendEnabled): Uint8Array;
                toProtoMsg(message: _31.SendEnabled): _31.SendEnabledProtoMsg;
            };
            Input: {
                typeUrl: string;
                encode(message: _31.Input, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _31.Input;
                fromJSON(object: any): _31.Input;
                toJSON(message: _31.Input): unknown;
                fromPartial(object: Partial<_31.Input>): _31.Input;
                fromSDK(object: _31.InputSDKType): _31.Input;
                toSDK(message: _31.Input): _31.InputSDKType;
                fromAmino(object: _31.InputAmino): _31.Input;
                toAmino(message: _31.Input): _31.InputAmino;
                fromAminoMsg(object: _31.InputAminoMsg): _31.Input;
                toAminoMsg(message: _31.Input): _31.InputAminoMsg;
                fromProtoMsg(message: _31.InputProtoMsg): _31.Input;
                toProto(message: _31.Input): Uint8Array;
                toProtoMsg(message: _31.Input): _31.InputProtoMsg;
            };
            Output: {
                typeUrl: string;
                encode(message: _31.Output, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _31.Output;
                fromJSON(object: any): _31.Output;
                toJSON(message: _31.Output): unknown;
                fromPartial(object: Partial<_31.Output>): _31.Output;
                fromSDK(object: _31.OutputSDKType): _31.Output;
                toSDK(message: _31.Output): _31.OutputSDKType;
                fromAmino(object: _31.OutputAmino): _31.Output;
                toAmino(message: _31.Output): _31.OutputAmino;
                fromAminoMsg(object: _31.OutputAminoMsg): _31.Output;
                toAminoMsg(message: _31.Output): _31.OutputAminoMsg;
                fromProtoMsg(message: _31.OutputProtoMsg): _31.Output;
                toProto(message: _31.Output): Uint8Array;
                toProtoMsg(message: _31.Output): _31.OutputProtoMsg;
            };
            Supply: {
                typeUrl: string;
                encode(message: _31.Supply, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _31.Supply;
                fromJSON(object: any): _31.Supply;
                toJSON(message: _31.Supply): unknown;
                fromPartial(object: Partial<_31.Supply>): _31.Supply;
                fromSDK(object: _31.SupplySDKType): _31.Supply;
                toSDK(message: _31.Supply): _31.SupplySDKType;
                fromAmino(object: _31.SupplyAmino): _31.Supply;
                toAmino(message: _31.Supply): _31.SupplyAmino;
                fromAminoMsg(object: _31.SupplyAminoMsg): _31.Supply;
                toAminoMsg(message: _31.Supply): _31.SupplyAminoMsg;
                fromProtoMsg(message: _31.SupplyProtoMsg): _31.Supply;
                toProto(message: _31.Supply): Uint8Array;
                toProtoMsg(message: _31.Supply): _31.SupplyProtoMsg;
            };
            DenomUnit: {
                typeUrl: string;
                encode(message: _31.DenomUnit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _31.DenomUnit;
                fromJSON(object: any): _31.DenomUnit;
                toJSON(message: _31.DenomUnit): unknown;
                fromPartial(object: Partial<_31.DenomUnit>): _31.DenomUnit;
                fromSDK(object: _31.DenomUnitSDKType): _31.DenomUnit;
                toSDK(message: _31.DenomUnit): _31.DenomUnitSDKType;
                fromAmino(object: _31.DenomUnitAmino): _31.DenomUnit;
                toAmino(message: _31.DenomUnit): _31.DenomUnitAmino;
                fromAminoMsg(object: _31.DenomUnitAminoMsg): _31.DenomUnit;
                toAminoMsg(message: _31.DenomUnit): _31.DenomUnitAminoMsg;
                fromProtoMsg(message: _31.DenomUnitProtoMsg): _31.DenomUnit;
                toProto(message: _31.DenomUnit): Uint8Array;
                toProtoMsg(message: _31.DenomUnit): _31.DenomUnitProtoMsg;
            };
            Metadata: {
                typeUrl: string;
                encode(message: _31.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _31.Metadata;
                fromJSON(object: any): _31.Metadata;
                toJSON(message: _31.Metadata): unknown;
                fromPartial(object: Partial<_31.Metadata>): _31.Metadata;
                fromSDK(object: _31.MetadataSDKType): _31.Metadata;
                toSDK(message: _31.Metadata): _31.MetadataSDKType;
                fromAmino(object: _31.MetadataAmino): _31.Metadata;
                toAmino(message: _31.Metadata): _31.MetadataAmino;
                fromAminoMsg(object: _31.MetadataAminoMsg): _31.Metadata;
                toAminoMsg(message: _31.Metadata): _31.MetadataAminoMsg;
                fromProtoMsg(message: _31.MetadataProtoMsg): _31.Metadata;
                toProto(message: _31.Metadata): Uint8Array;
                toProtoMsg(message: _31.Metadata): _31.MetadataProtoMsg;
            };
            SendAuthorization: {
                typeUrl: string;
                encode(message: _30.SendAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _30.SendAuthorization;
                fromJSON(object: any): _30.SendAuthorization;
                toJSON(message: _30.SendAuthorization): unknown;
                fromPartial(object: Partial<_30.SendAuthorization>): _30.SendAuthorization;
                fromSDK(object: _30.SendAuthorizationSDKType): _30.SendAuthorization;
                toSDK(message: _30.SendAuthorization): _30.SendAuthorizationSDKType;
                fromAmino(object: _30.SendAuthorizationAmino): _30.SendAuthorization;
                toAmino(message: _30.SendAuthorization): _30.SendAuthorizationAmino;
                fromAminoMsg(object: _30.SendAuthorizationAminoMsg): _30.SendAuthorization;
                toAminoMsg(message: _30.SendAuthorization): _30.SendAuthorizationAminoMsg;
                fromProtoMsg(message: _30.SendAuthorizationProtoMsg): _30.SendAuthorization;
                toProto(message: _30.SendAuthorization): Uint8Array;
                toProtoMsg(message: _30.SendAuthorization): _30.SendAuthorizationProtoMsg;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                protobufPackage: "cosmos.base.abci.v1beta1";
                TxResponse: {
                    typeUrl: string;
                    encode(message: _35.TxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _35.TxResponse;
                    fromJSON(object: any): _35.TxResponse;
                    toJSON(message: _35.TxResponse): unknown;
                    fromPartial(object: Partial<_35.TxResponse>): _35.TxResponse;
                    fromSDK(object: _35.TxResponseSDKType): _35.TxResponse;
                    toSDK(message: _35.TxResponse): _35.TxResponseSDKType;
                    fromAmino(object: _35.TxResponseAmino): _35.TxResponse;
                    toAmino(message: _35.TxResponse): _35.TxResponseAmino;
                    fromAminoMsg(object: _35.TxResponseAminoMsg): _35.TxResponse;
                    toAminoMsg(message: _35.TxResponse): _35.TxResponseAminoMsg;
                    fromProtoMsg(message: _35.TxResponseProtoMsg): _35.TxResponse;
                    toProto(message: _35.TxResponse): Uint8Array;
                    toProtoMsg(message: _35.TxResponse): _35.TxResponseProtoMsg;
                };
                ABCIMessageLog: {
                    typeUrl: string;
                    encode(message: _35.ABCIMessageLog, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _35.ABCIMessageLog;
                    fromJSON(object: any): _35.ABCIMessageLog;
                    toJSON(message: _35.ABCIMessageLog): unknown;
                    fromPartial(object: Partial<_35.ABCIMessageLog>): _35.ABCIMessageLog;
                    fromSDK(object: _35.ABCIMessageLogSDKType): _35.ABCIMessageLog;
                    toSDK(message: _35.ABCIMessageLog): _35.ABCIMessageLogSDKType;
                    fromAmino(object: _35.ABCIMessageLogAmino): _35.ABCIMessageLog;
                    toAmino(message: _35.ABCIMessageLog): _35.ABCIMessageLogAmino;
                    fromAminoMsg(object: _35.ABCIMessageLogAminoMsg): _35.ABCIMessageLog;
                    toAminoMsg(message: _35.ABCIMessageLog): _35.ABCIMessageLogAminoMsg;
                    fromProtoMsg(message: _35.ABCIMessageLogProtoMsg): _35.ABCIMessageLog;
                    toProto(message: _35.ABCIMessageLog): Uint8Array;
                    toProtoMsg(message: _35.ABCIMessageLog): _35.ABCIMessageLogProtoMsg;
                };
                StringEvent: {
                    typeUrl: string;
                    encode(message: _35.StringEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _35.StringEvent;
                    fromJSON(object: any): _35.StringEvent;
                    toJSON(message: _35.StringEvent): unknown;
                    fromPartial(object: Partial<_35.StringEvent>): _35.StringEvent;
                    fromSDK(object: _35.StringEventSDKType): _35.StringEvent;
                    toSDK(message: _35.StringEvent): _35.StringEventSDKType;
                    fromAmino(object: _35.StringEventAmino): _35.StringEvent;
                    toAmino(message: _35.StringEvent): _35.StringEventAmino;
                    fromAminoMsg(object: _35.StringEventAminoMsg): _35.StringEvent;
                    toAminoMsg(message: _35.StringEvent): _35.StringEventAminoMsg;
                    fromProtoMsg(message: _35.StringEventProtoMsg): _35.StringEvent;
                    toProto(message: _35.StringEvent): Uint8Array;
                    toProtoMsg(message: _35.StringEvent): _35.StringEventProtoMsg;
                };
                Attribute: {
                    typeUrl: string;
                    encode(message: _35.Attribute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _35.Attribute;
                    fromJSON(object: any): _35.Attribute;
                    toJSON(message: _35.Attribute): unknown;
                    fromPartial(object: Partial<_35.Attribute>): _35.Attribute;
                    fromSDK(object: _35.AttributeSDKType): _35.Attribute;
                    toSDK(message: _35.Attribute): _35.AttributeSDKType;
                    fromAmino(object: _35.AttributeAmino): _35.Attribute;
                    toAmino(message: _35.Attribute): _35.AttributeAmino;
                    fromAminoMsg(object: _35.AttributeAminoMsg): _35.Attribute;
                    toAminoMsg(message: _35.Attribute): _35.AttributeAminoMsg;
                    fromProtoMsg(message: _35.AttributeProtoMsg): _35.Attribute;
                    toProto(message: _35.Attribute): Uint8Array;
                    toProtoMsg(message: _35.Attribute): _35.AttributeProtoMsg;
                };
                GasInfo: {
                    typeUrl: string;
                    encode(message: _35.GasInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _35.GasInfo;
                    fromJSON(object: any): _35.GasInfo;
                    toJSON(message: _35.GasInfo): unknown;
                    fromPartial(object: Partial<_35.GasInfo>): _35.GasInfo;
                    fromSDK(object: _35.GasInfoSDKType): _35.GasInfo;
                    toSDK(message: _35.GasInfo): _35.GasInfoSDKType;
                    fromAmino(object: _35.GasInfoAmino): _35.GasInfo;
                    toAmino(message: _35.GasInfo): _35.GasInfoAmino;
                    fromAminoMsg(object: _35.GasInfoAminoMsg): _35.GasInfo;
                    toAminoMsg(message: _35.GasInfo): _35.GasInfoAminoMsg;
                    fromProtoMsg(message: _35.GasInfoProtoMsg): _35.GasInfo;
                    toProto(message: _35.GasInfo): Uint8Array;
                    toProtoMsg(message: _35.GasInfo): _35.GasInfoProtoMsg;
                };
                Result: {
                    typeUrl: string;
                    encode(message: _35.Result, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _35.Result;
                    fromJSON(object: any): _35.Result;
                    toJSON(message: _35.Result): unknown;
                    fromPartial(object: Partial<_35.Result>): _35.Result;
                    fromSDK(object: _35.ResultSDKType): _35.Result;
                    toSDK(message: _35.Result): _35.ResultSDKType;
                    fromAmino(object: _35.ResultAmino): _35.Result;
                    toAmino(message: _35.Result): _35.ResultAmino;
                    fromAminoMsg(object: _35.ResultAminoMsg): _35.Result;
                    toAminoMsg(message: _35.Result): _35.ResultAminoMsg;
                    fromProtoMsg(message: _35.ResultProtoMsg): _35.Result;
                    toProto(message: _35.Result): Uint8Array;
                    toProtoMsg(message: _35.Result): _35.ResultProtoMsg;
                };
                SimulationResponse: {
                    typeUrl: string;
                    encode(message: _35.SimulationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _35.SimulationResponse;
                    fromJSON(object: any): _35.SimulationResponse;
                    toJSON(message: _35.SimulationResponse): unknown;
                    fromPartial(object: Partial<_35.SimulationResponse>): _35.SimulationResponse;
                    fromSDK(object: _35.SimulationResponseSDKType): _35.SimulationResponse;
                    toSDK(message: _35.SimulationResponse): _35.SimulationResponseSDKType;
                    fromAmino(object: _35.SimulationResponseAmino): _35.SimulationResponse;
                    toAmino(message: _35.SimulationResponse): _35.SimulationResponseAmino;
                    fromAminoMsg(object: _35.SimulationResponseAminoMsg): _35.SimulationResponse;
                    toAminoMsg(message: _35.SimulationResponse): _35.SimulationResponseAminoMsg;
                    fromProtoMsg(message: _35.SimulationResponseProtoMsg): _35.SimulationResponse;
                    toProto(message: _35.SimulationResponse): Uint8Array;
                    toProtoMsg(message: _35.SimulationResponse): _35.SimulationResponseProtoMsg;
                };
                MsgData: {
                    typeUrl: string;
                    encode(message: _35.MsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _35.MsgData;
                    fromJSON(object: any): _35.MsgData;
                    toJSON(message: _35.MsgData): unknown;
                    fromPartial(object: Partial<_35.MsgData>): _35.MsgData;
                    fromSDK(object: _35.MsgDataSDKType): _35.MsgData;
                    toSDK(message: _35.MsgData): _35.MsgDataSDKType;
                    fromAmino(object: _35.MsgDataAmino): _35.MsgData;
                    toAmino(message: _35.MsgData): _35.MsgDataAmino;
                    fromAminoMsg(object: _35.MsgDataAminoMsg): _35.MsgData;
                    toAminoMsg(message: _35.MsgData): _35.MsgDataAminoMsg;
                    fromProtoMsg(message: _35.MsgDataProtoMsg): _35.MsgData;
                    toProto(message: _35.MsgData): Uint8Array;
                    toProtoMsg(message: _35.MsgData): _35.MsgDataProtoMsg;
                };
                TxMsgData: {
                    typeUrl: string;
                    encode(message: _35.TxMsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _35.TxMsgData;
                    fromJSON(object: any): _35.TxMsgData;
                    toJSON(message: _35.TxMsgData): unknown;
                    fromPartial(object: Partial<_35.TxMsgData>): _35.TxMsgData;
                    fromSDK(object: _35.TxMsgDataSDKType): _35.TxMsgData;
                    toSDK(message: _35.TxMsgData): _35.TxMsgDataSDKType;
                    fromAmino(object: _35.TxMsgDataAmino): _35.TxMsgData;
                    toAmino(message: _35.TxMsgData): _35.TxMsgDataAmino;
                    fromAminoMsg(object: _35.TxMsgDataAminoMsg): _35.TxMsgData;
                    toAminoMsg(message: _35.TxMsgData): _35.TxMsgDataAminoMsg;
                    fromProtoMsg(message: _35.TxMsgDataProtoMsg): _35.TxMsgData;
                    toProto(message: _35.TxMsgData): Uint8Array;
                    toProtoMsg(message: _35.TxMsgData): _35.TxMsgDataProtoMsg;
                };
                SearchTxsResult: {
                    typeUrl: string;
                    encode(message: _35.SearchTxsResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _35.SearchTxsResult;
                    fromJSON(object: any): _35.SearchTxsResult;
                    toJSON(message: _35.SearchTxsResult): unknown;
                    fromPartial(object: Partial<_35.SearchTxsResult>): _35.SearchTxsResult;
                    fromSDK(object: _35.SearchTxsResultSDKType): _35.SearchTxsResult;
                    toSDK(message: _35.SearchTxsResult): _35.SearchTxsResultSDKType;
                    fromAmino(object: _35.SearchTxsResultAmino): _35.SearchTxsResult;
                    toAmino(message: _35.SearchTxsResult): _35.SearchTxsResultAmino;
                    fromAminoMsg(object: _35.SearchTxsResultAminoMsg): _35.SearchTxsResult;
                    toAminoMsg(message: _35.SearchTxsResult): _35.SearchTxsResultAminoMsg;
                    fromProtoMsg(message: _35.SearchTxsResultProtoMsg): _35.SearchTxsResult;
                    toProto(message: _35.SearchTxsResult): Uint8Array;
                    toProtoMsg(message: _35.SearchTxsResult): _35.SearchTxsResultProtoMsg;
                };
            };
        }
        namespace node {
            const v1beta1: {
                Service: typeof _196.Service;
                ServiceClientImpl: typeof _196.ServiceClientImpl;
                LCDQueryClient: typeof _179.LCDQueryClient;
                protobufPackage: "cosmos.base.node.v1beta1";
                ConfigRequest: {
                    typeUrl: string;
                    encode(_: _36.ConfigRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _36.ConfigRequest;
                    fromJSON(_: any): _36.ConfigRequest;
                    toJSON(_: _36.ConfigRequest): unknown;
                    fromPartial(_: Partial<_36.ConfigRequest>): _36.ConfigRequest;
                    fromSDK(_: _36.ConfigRequestSDKType): _36.ConfigRequest;
                    toSDK(_: _36.ConfigRequest): _36.ConfigRequestSDKType;
                    fromAmino(_: _36.ConfigRequestAmino): _36.ConfigRequest;
                    toAmino(_: _36.ConfigRequest): _36.ConfigRequestAmino;
                    fromAminoMsg(object: _36.ConfigRequestAminoMsg): _36.ConfigRequest;
                    toAminoMsg(message: _36.ConfigRequest): _36.ConfigRequestAminoMsg;
                    fromProtoMsg(message: _36.ConfigRequestProtoMsg): _36.ConfigRequest;
                    toProto(message: _36.ConfigRequest): Uint8Array;
                    toProtoMsg(message: _36.ConfigRequest): _36.ConfigRequestProtoMsg;
                };
                ConfigResponse: {
                    typeUrl: string;
                    encode(message: _36.ConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _36.ConfigResponse;
                    fromJSON(object: any): _36.ConfigResponse;
                    toJSON(message: _36.ConfigResponse): unknown;
                    fromPartial(object: Partial<_36.ConfigResponse>): _36.ConfigResponse;
                    fromSDK(object: _36.ConfigResponseSDKType): _36.ConfigResponse;
                    toSDK(message: _36.ConfigResponse): _36.ConfigResponseSDKType;
                    fromAmino(object: _36.ConfigResponseAmino): _36.ConfigResponse;
                    toAmino(message: _36.ConfigResponse): _36.ConfigResponseAmino;
                    fromAminoMsg(object: _36.ConfigResponseAminoMsg): _36.ConfigResponse;
                    toAminoMsg(message: _36.ConfigResponse): _36.ConfigResponseAminoMsg;
                    fromProtoMsg(message: _36.ConfigResponseProtoMsg): _36.ConfigResponse;
                    toProto(message: _36.ConfigResponse): Uint8Array;
                    toProtoMsg(message: _36.ConfigResponse): _36.ConfigResponseProtoMsg;
                };
            };
        }
        namespace query {
            const v1beta1: {
                protobufPackage: "cosmos.base.query.v1beta1";
                PageRequest: {
                    typeUrl: string;
                    encode(message: _37.PageRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _37.PageRequest;
                    fromJSON(object: any): _37.PageRequest;
                    toJSON(message: _37.PageRequest): unknown;
                    fromPartial(object: Partial<_37.PageRequest>): _37.PageRequest;
                    fromSDK(object: _37.PageRequestSDKType): _37.PageRequest;
                    toSDK(message: _37.PageRequest): _37.PageRequestSDKType;
                    fromAmino(object: _37.PageRequestAmino): _37.PageRequest;
                    toAmino(message: _37.PageRequest): _37.PageRequestAmino;
                    fromAminoMsg(object: _37.PageRequestAminoMsg): _37.PageRequest;
                    toAminoMsg(message: _37.PageRequest): _37.PageRequestAminoMsg;
                    fromProtoMsg(message: _37.PageRequestProtoMsg): _37.PageRequest;
                    toProto(message: _37.PageRequest): Uint8Array;
                    toProtoMsg(message: _37.PageRequest): _37.PageRequestProtoMsg;
                };
                PageResponse: {
                    typeUrl: string;
                    encode(message: _37.PageResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _37.PageResponse;
                    fromJSON(object: any): _37.PageResponse;
                    toJSON(message: _37.PageResponse): unknown;
                    fromPartial(object: Partial<_37.PageResponse>): _37.PageResponse;
                    fromSDK(object: _37.PageResponseSDKType): _37.PageResponse;
                    toSDK(message: _37.PageResponse): _37.PageResponseSDKType;
                    fromAmino(object: _37.PageResponseAmino): _37.PageResponse;
                    toAmino(message: _37.PageResponse): _37.PageResponseAmino;
                    fromAminoMsg(object: _37.PageResponseAminoMsg): _37.PageResponse;
                    toAminoMsg(message: _37.PageResponse): _37.PageResponseAminoMsg;
                    fromProtoMsg(message: _37.PageResponseProtoMsg): _37.PageResponse;
                    toProto(message: _37.PageResponse): Uint8Array;
                    toProtoMsg(message: _37.PageResponse): _37.PageResponseProtoMsg;
                };
            };
        }
        namespace reflection {
            const v2alpha1: {
                protobufPackage: "cosmos.base.reflection.v2alpha1";
                AppDescriptor: {
                    typeUrl: string;
                    encode(message: _38.AppDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _38.AppDescriptor;
                    fromJSON(object: any): _38.AppDescriptor;
                    toJSON(message: _38.AppDescriptor): unknown;
                    fromPartial(object: Partial<_38.AppDescriptor>): _38.AppDescriptor;
                    fromSDK(object: _38.AppDescriptorSDKType): _38.AppDescriptor;
                    toSDK(message: _38.AppDescriptor): _38.AppDescriptorSDKType;
                    fromAmino(object: _38.AppDescriptorAmino): _38.AppDescriptor;
                    toAmino(message: _38.AppDescriptor): _38.AppDescriptorAmino;
                    fromAminoMsg(object: _38.AppDescriptorAminoMsg): _38.AppDescriptor;
                    toAminoMsg(message: _38.AppDescriptor): _38.AppDescriptorAminoMsg;
                    fromProtoMsg(message: _38.AppDescriptorProtoMsg): _38.AppDescriptor;
                    toProto(message: _38.AppDescriptor): Uint8Array;
                    toProtoMsg(message: _38.AppDescriptor): _38.AppDescriptorProtoMsg;
                };
                TxDescriptor: {
                    typeUrl: string;
                    encode(message: _38.TxDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _38.TxDescriptor;
                    fromJSON(object: any): _38.TxDescriptor;
                    toJSON(message: _38.TxDescriptor): unknown;
                    fromPartial(object: Partial<_38.TxDescriptor>): _38.TxDescriptor;
                    fromSDK(object: _38.TxDescriptorSDKType): _38.TxDescriptor;
                    toSDK(message: _38.TxDescriptor): _38.TxDescriptorSDKType;
                    fromAmino(object: _38.TxDescriptorAmino): _38.TxDescriptor;
                    toAmino(message: _38.TxDescriptor): _38.TxDescriptorAmino;
                    fromAminoMsg(object: _38.TxDescriptorAminoMsg): _38.TxDescriptor;
                    toAminoMsg(message: _38.TxDescriptor): _38.TxDescriptorAminoMsg;
                    fromProtoMsg(message: _38.TxDescriptorProtoMsg): _38.TxDescriptor;
                    toProto(message: _38.TxDescriptor): Uint8Array;
                    toProtoMsg(message: _38.TxDescriptor): _38.TxDescriptorProtoMsg;
                };
                AuthnDescriptor: {
                    typeUrl: string;
                    encode(message: _38.AuthnDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _38.AuthnDescriptor;
                    fromJSON(object: any): _38.AuthnDescriptor;
                    toJSON(message: _38.AuthnDescriptor): unknown;
                    fromPartial(object: Partial<_38.AuthnDescriptor>): _38.AuthnDescriptor;
                    fromSDK(object: _38.AuthnDescriptorSDKType): _38.AuthnDescriptor;
                    toSDK(message: _38.AuthnDescriptor): _38.AuthnDescriptorSDKType;
                    fromAmino(object: _38.AuthnDescriptorAmino): _38.AuthnDescriptor;
                    toAmino(message: _38.AuthnDescriptor): _38.AuthnDescriptorAmino;
                    fromAminoMsg(object: _38.AuthnDescriptorAminoMsg): _38.AuthnDescriptor;
                    toAminoMsg(message: _38.AuthnDescriptor): _38.AuthnDescriptorAminoMsg;
                    fromProtoMsg(message: _38.AuthnDescriptorProtoMsg): _38.AuthnDescriptor;
                    toProto(message: _38.AuthnDescriptor): Uint8Array;
                    toProtoMsg(message: _38.AuthnDescriptor): _38.AuthnDescriptorProtoMsg;
                };
                SigningModeDescriptor: {
                    typeUrl: string;
                    encode(message: _38.SigningModeDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _38.SigningModeDescriptor;
                    fromJSON(object: any): _38.SigningModeDescriptor;
                    toJSON(message: _38.SigningModeDescriptor): unknown;
                    fromPartial(object: Partial<_38.SigningModeDescriptor>): _38.SigningModeDescriptor;
                    fromSDK(object: _38.SigningModeDescriptorSDKType): _38.SigningModeDescriptor;
                    toSDK(message: _38.SigningModeDescriptor): _38.SigningModeDescriptorSDKType;
                    fromAmino(object: _38.SigningModeDescriptorAmino): _38.SigningModeDescriptor;
                    toAmino(message: _38.SigningModeDescriptor): _38.SigningModeDescriptorAmino;
                    fromAminoMsg(object: _38.SigningModeDescriptorAminoMsg): _38.SigningModeDescriptor;
                    toAminoMsg(message: _38.SigningModeDescriptor): _38.SigningModeDescriptorAminoMsg;
                    fromProtoMsg(message: _38.SigningModeDescriptorProtoMsg): _38.SigningModeDescriptor;
                    toProto(message: _38.SigningModeDescriptor): Uint8Array;
                    toProtoMsg(message: _38.SigningModeDescriptor): _38.SigningModeDescriptorProtoMsg;
                };
                ChainDescriptor: {
                    typeUrl: string;
                    encode(message: _38.ChainDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _38.ChainDescriptor;
                    fromJSON(object: any): _38.ChainDescriptor;
                    toJSON(message: _38.ChainDescriptor): unknown;
                    fromPartial(object: Partial<_38.ChainDescriptor>): _38.ChainDescriptor;
                    fromSDK(object: _38.ChainDescriptorSDKType): _38.ChainDescriptor;
                    toSDK(message: _38.ChainDescriptor): _38.ChainDescriptorSDKType;
                    fromAmino(object: _38.ChainDescriptorAmino): _38.ChainDescriptor;
                    toAmino(message: _38.ChainDescriptor): _38.ChainDescriptorAmino;
                    fromAminoMsg(object: _38.ChainDescriptorAminoMsg): _38.ChainDescriptor;
                    toAminoMsg(message: _38.ChainDescriptor): _38.ChainDescriptorAminoMsg;
                    fromProtoMsg(message: _38.ChainDescriptorProtoMsg): _38.ChainDescriptor;
                    toProto(message: _38.ChainDescriptor): Uint8Array;
                    toProtoMsg(message: _38.ChainDescriptor): _38.ChainDescriptorProtoMsg;
                };
                CodecDescriptor: {
                    typeUrl: string;
                    encode(message: _38.CodecDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _38.CodecDescriptor;
                    fromJSON(object: any): _38.CodecDescriptor;
                    toJSON(message: _38.CodecDescriptor): unknown;
                    fromPartial(object: Partial<_38.CodecDescriptor>): _38.CodecDescriptor;
                    fromSDK(object: _38.CodecDescriptorSDKType): _38.CodecDescriptor;
                    toSDK(message: _38.CodecDescriptor): _38.CodecDescriptorSDKType;
                    fromAmino(object: _38.CodecDescriptorAmino): _38.CodecDescriptor;
                    toAmino(message: _38.CodecDescriptor): _38.CodecDescriptorAmino;
                    fromAminoMsg(object: _38.CodecDescriptorAminoMsg): _38.CodecDescriptor;
                    toAminoMsg(message: _38.CodecDescriptor): _38.CodecDescriptorAminoMsg;
                    fromProtoMsg(message: _38.CodecDescriptorProtoMsg): _38.CodecDescriptor;
                    toProto(message: _38.CodecDescriptor): Uint8Array;
                    toProtoMsg(message: _38.CodecDescriptor): _38.CodecDescriptorProtoMsg;
                };
                InterfaceDescriptor: {
                    typeUrl: string;
                    encode(message: _38.InterfaceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _38.InterfaceDescriptor;
                    fromJSON(object: any): _38.InterfaceDescriptor;
                    toJSON(message: _38.InterfaceDescriptor): unknown;
                    fromPartial(object: Partial<_38.InterfaceDescriptor>): _38.InterfaceDescriptor;
                    fromSDK(object: _38.InterfaceDescriptorSDKType): _38.InterfaceDescriptor;
                    toSDK(message: _38.InterfaceDescriptor): _38.InterfaceDescriptorSDKType;
                    fromAmino(object: _38.InterfaceDescriptorAmino): _38.InterfaceDescriptor;
                    toAmino(message: _38.InterfaceDescriptor): _38.InterfaceDescriptorAmino;
                    fromAminoMsg(object: _38.InterfaceDescriptorAminoMsg): _38.InterfaceDescriptor;
                    toAminoMsg(message: _38.InterfaceDescriptor): _38.InterfaceDescriptorAminoMsg;
                    fromProtoMsg(message: _38.InterfaceDescriptorProtoMsg): _38.InterfaceDescriptor;
                    toProto(message: _38.InterfaceDescriptor): Uint8Array;
                    toProtoMsg(message: _38.InterfaceDescriptor): _38.InterfaceDescriptorProtoMsg;
                };
                InterfaceImplementerDescriptor: {
                    typeUrl: string;
                    encode(message: _38.InterfaceImplementerDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _38.InterfaceImplementerDescriptor;
                    fromJSON(object: any): _38.InterfaceImplementerDescriptor;
                    toJSON(message: _38.InterfaceImplementerDescriptor): unknown;
                    fromPartial(object: Partial<_38.InterfaceImplementerDescriptor>): _38.InterfaceImplementerDescriptor;
                    fromSDK(object: _38.InterfaceImplementerDescriptorSDKType): _38.InterfaceImplementerDescriptor;
                    toSDK(message: _38.InterfaceImplementerDescriptor): _38.InterfaceImplementerDescriptorSDKType;
                    fromAmino(object: _38.InterfaceImplementerDescriptorAmino): _38.InterfaceImplementerDescriptor;
                    toAmino(message: _38.InterfaceImplementerDescriptor): _38.InterfaceImplementerDescriptorAmino;
                    fromAminoMsg(object: _38.InterfaceImplementerDescriptorAminoMsg): _38.InterfaceImplementerDescriptor;
                    toAminoMsg(message: _38.InterfaceImplementerDescriptor): _38.InterfaceImplementerDescriptorAminoMsg;
                    fromProtoMsg(message: _38.InterfaceImplementerDescriptorProtoMsg): _38.InterfaceImplementerDescriptor;
                    toProto(message: _38.InterfaceImplementerDescriptor): Uint8Array;
                    toProtoMsg(message: _38.InterfaceImplementerDescriptor): _38.InterfaceImplementerDescriptorProtoMsg;
                };
                InterfaceAcceptingMessageDescriptor: {
                    typeUrl: string;
                    encode(message: _38.InterfaceAcceptingMessageDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _38.InterfaceAcceptingMessageDescriptor;
                    fromJSON(object: any): _38.InterfaceAcceptingMessageDescriptor;
                    toJSON(message: _38.InterfaceAcceptingMessageDescriptor): unknown;
                    fromPartial(object: Partial<_38.InterfaceAcceptingMessageDescriptor>): _38.InterfaceAcceptingMessageDescriptor;
                    fromSDK(object: _38.InterfaceAcceptingMessageDescriptorSDKType): _38.InterfaceAcceptingMessageDescriptor;
                    toSDK(message: _38.InterfaceAcceptingMessageDescriptor): _38.InterfaceAcceptingMessageDescriptorSDKType;
                    fromAmino(object: _38.InterfaceAcceptingMessageDescriptorAmino): _38.InterfaceAcceptingMessageDescriptor;
                    toAmino(message: _38.InterfaceAcceptingMessageDescriptor): _38.InterfaceAcceptingMessageDescriptorAmino;
                    fromAminoMsg(object: _38.InterfaceAcceptingMessageDescriptorAminoMsg): _38.InterfaceAcceptingMessageDescriptor;
                    toAminoMsg(message: _38.InterfaceAcceptingMessageDescriptor): _38.InterfaceAcceptingMessageDescriptorAminoMsg;
                    fromProtoMsg(message: _38.InterfaceAcceptingMessageDescriptorProtoMsg): _38.InterfaceAcceptingMessageDescriptor;
                    toProto(message: _38.InterfaceAcceptingMessageDescriptor): Uint8Array;
                    toProtoMsg(message: _38.InterfaceAcceptingMessageDescriptor): _38.InterfaceAcceptingMessageDescriptorProtoMsg;
                };
                ConfigurationDescriptor: {
                    typeUrl: string;
                    encode(message: _38.ConfigurationDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _38.ConfigurationDescriptor;
                    fromJSON(object: any): _38.ConfigurationDescriptor;
                    toJSON(message: _38.ConfigurationDescriptor): unknown;
                    fromPartial(object: Partial<_38.ConfigurationDescriptor>): _38.ConfigurationDescriptor;
                    fromSDK(object: _38.ConfigurationDescriptorSDKType): _38.ConfigurationDescriptor;
                    toSDK(message: _38.ConfigurationDescriptor): _38.ConfigurationDescriptorSDKType;
                    fromAmino(object: _38.ConfigurationDescriptorAmino): _38.ConfigurationDescriptor;
                    toAmino(message: _38.ConfigurationDescriptor): _38.ConfigurationDescriptorAmino;
                    fromAminoMsg(object: _38.ConfigurationDescriptorAminoMsg): _38.ConfigurationDescriptor;
                    toAminoMsg(message: _38.ConfigurationDescriptor): _38.ConfigurationDescriptorAminoMsg;
                    fromProtoMsg(message: _38.ConfigurationDescriptorProtoMsg): _38.ConfigurationDescriptor;
                    toProto(message: _38.ConfigurationDescriptor): Uint8Array;
                    toProtoMsg(message: _38.ConfigurationDescriptor): _38.ConfigurationDescriptorProtoMsg;
                };
                MsgDescriptor: {
                    typeUrl: string;
                    encode(message: _38.MsgDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _38.MsgDescriptor;
                    fromJSON(object: any): _38.MsgDescriptor;
                    toJSON(message: _38.MsgDescriptor): unknown;
                    fromPartial(object: Partial<_38.MsgDescriptor>): _38.MsgDescriptor;
                    fromSDK(object: _38.MsgDescriptorSDKType): _38.MsgDescriptor;
                    toSDK(message: _38.MsgDescriptor): _38.MsgDescriptorSDKType;
                    fromAmino(object: _38.MsgDescriptorAmino): _38.MsgDescriptor;
                    toAmino(message: _38.MsgDescriptor): _38.MsgDescriptorAmino;
                    fromAminoMsg(object: _38.MsgDescriptorAminoMsg): _38.MsgDescriptor;
                    toAminoMsg(message: _38.MsgDescriptor): _38.MsgDescriptorAminoMsg;
                    fromProtoMsg(message: _38.MsgDescriptorProtoMsg): _38.MsgDescriptor;
                    toProto(message: _38.MsgDescriptor): Uint8Array;
                    toProtoMsg(message: _38.MsgDescriptor): _38.MsgDescriptorProtoMsg;
                };
                GetAuthnDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _38.GetAuthnDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _38.GetAuthnDescriptorRequest;
                    fromJSON(_: any): _38.GetAuthnDescriptorRequest;
                    toJSON(_: _38.GetAuthnDescriptorRequest): unknown;
                    fromPartial(_: Partial<_38.GetAuthnDescriptorRequest>): _38.GetAuthnDescriptorRequest;
                    fromSDK(_: _38.GetAuthnDescriptorRequestSDKType): _38.GetAuthnDescriptorRequest;
                    toSDK(_: _38.GetAuthnDescriptorRequest): _38.GetAuthnDescriptorRequestSDKType;
                    fromAmino(_: _38.GetAuthnDescriptorRequestAmino): _38.GetAuthnDescriptorRequest;
                    toAmino(_: _38.GetAuthnDescriptorRequest): _38.GetAuthnDescriptorRequestAmino;
                    fromAminoMsg(object: _38.GetAuthnDescriptorRequestAminoMsg): _38.GetAuthnDescriptorRequest;
                    toAminoMsg(message: _38.GetAuthnDescriptorRequest): _38.GetAuthnDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _38.GetAuthnDescriptorRequestProtoMsg): _38.GetAuthnDescriptorRequest;
                    toProto(message: _38.GetAuthnDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _38.GetAuthnDescriptorRequest): _38.GetAuthnDescriptorRequestProtoMsg;
                };
                GetAuthnDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _38.GetAuthnDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _38.GetAuthnDescriptorResponse;
                    fromJSON(object: any): _38.GetAuthnDescriptorResponse;
                    toJSON(message: _38.GetAuthnDescriptorResponse): unknown;
                    fromPartial(object: Partial<_38.GetAuthnDescriptorResponse>): _38.GetAuthnDescriptorResponse;
                    fromSDK(object: _38.GetAuthnDescriptorResponseSDKType): _38.GetAuthnDescriptorResponse;
                    toSDK(message: _38.GetAuthnDescriptorResponse): _38.GetAuthnDescriptorResponseSDKType;
                    fromAmino(object: _38.GetAuthnDescriptorResponseAmino): _38.GetAuthnDescriptorResponse;
                    toAmino(message: _38.GetAuthnDescriptorResponse): _38.GetAuthnDescriptorResponseAmino;
                    fromAminoMsg(object: _38.GetAuthnDescriptorResponseAminoMsg): _38.GetAuthnDescriptorResponse;
                    toAminoMsg(message: _38.GetAuthnDescriptorResponse): _38.GetAuthnDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _38.GetAuthnDescriptorResponseProtoMsg): _38.GetAuthnDescriptorResponse;
                    toProto(message: _38.GetAuthnDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _38.GetAuthnDescriptorResponse): _38.GetAuthnDescriptorResponseProtoMsg;
                };
                GetChainDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _38.GetChainDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _38.GetChainDescriptorRequest;
                    fromJSON(_: any): _38.GetChainDescriptorRequest;
                    toJSON(_: _38.GetChainDescriptorRequest): unknown;
                    fromPartial(_: Partial<_38.GetChainDescriptorRequest>): _38.GetChainDescriptorRequest;
                    fromSDK(_: _38.GetChainDescriptorRequestSDKType): _38.GetChainDescriptorRequest;
                    toSDK(_: _38.GetChainDescriptorRequest): _38.GetChainDescriptorRequestSDKType;
                    fromAmino(_: _38.GetChainDescriptorRequestAmino): _38.GetChainDescriptorRequest;
                    toAmino(_: _38.GetChainDescriptorRequest): _38.GetChainDescriptorRequestAmino;
                    fromAminoMsg(object: _38.GetChainDescriptorRequestAminoMsg): _38.GetChainDescriptorRequest;
                    toAminoMsg(message: _38.GetChainDescriptorRequest): _38.GetChainDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _38.GetChainDescriptorRequestProtoMsg): _38.GetChainDescriptorRequest;
                    toProto(message: _38.GetChainDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _38.GetChainDescriptorRequest): _38.GetChainDescriptorRequestProtoMsg;
                };
                GetChainDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _38.GetChainDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _38.GetChainDescriptorResponse;
                    fromJSON(object: any): _38.GetChainDescriptorResponse;
                    toJSON(message: _38.GetChainDescriptorResponse): unknown;
                    fromPartial(object: Partial<_38.GetChainDescriptorResponse>): _38.GetChainDescriptorResponse;
                    fromSDK(object: _38.GetChainDescriptorResponseSDKType): _38.GetChainDescriptorResponse;
                    toSDK(message: _38.GetChainDescriptorResponse): _38.GetChainDescriptorResponseSDKType;
                    fromAmino(object: _38.GetChainDescriptorResponseAmino): _38.GetChainDescriptorResponse;
                    toAmino(message: _38.GetChainDescriptorResponse): _38.GetChainDescriptorResponseAmino;
                    fromAminoMsg(object: _38.GetChainDescriptorResponseAminoMsg): _38.GetChainDescriptorResponse;
                    toAminoMsg(message: _38.GetChainDescriptorResponse): _38.GetChainDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _38.GetChainDescriptorResponseProtoMsg): _38.GetChainDescriptorResponse;
                    toProto(message: _38.GetChainDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _38.GetChainDescriptorResponse): _38.GetChainDescriptorResponseProtoMsg;
                };
                GetCodecDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _38.GetCodecDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _38.GetCodecDescriptorRequest;
                    fromJSON(_: any): _38.GetCodecDescriptorRequest;
                    toJSON(_: _38.GetCodecDescriptorRequest): unknown;
                    fromPartial(_: Partial<_38.GetCodecDescriptorRequest>): _38.GetCodecDescriptorRequest;
                    fromSDK(_: _38.GetCodecDescriptorRequestSDKType): _38.GetCodecDescriptorRequest;
                    toSDK(_: _38.GetCodecDescriptorRequest): _38.GetCodecDescriptorRequestSDKType;
                    fromAmino(_: _38.GetCodecDescriptorRequestAmino): _38.GetCodecDescriptorRequest;
                    toAmino(_: _38.GetCodecDescriptorRequest): _38.GetCodecDescriptorRequestAmino;
                    fromAminoMsg(object: _38.GetCodecDescriptorRequestAminoMsg): _38.GetCodecDescriptorRequest;
                    toAminoMsg(message: _38.GetCodecDescriptorRequest): _38.GetCodecDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _38.GetCodecDescriptorRequestProtoMsg): _38.GetCodecDescriptorRequest;
                    toProto(message: _38.GetCodecDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _38.GetCodecDescriptorRequest): _38.GetCodecDescriptorRequestProtoMsg;
                };
                GetCodecDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _38.GetCodecDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _38.GetCodecDescriptorResponse;
                    fromJSON(object: any): _38.GetCodecDescriptorResponse;
                    toJSON(message: _38.GetCodecDescriptorResponse): unknown;
                    fromPartial(object: Partial<_38.GetCodecDescriptorResponse>): _38.GetCodecDescriptorResponse;
                    fromSDK(object: _38.GetCodecDescriptorResponseSDKType): _38.GetCodecDescriptorResponse;
                    toSDK(message: _38.GetCodecDescriptorResponse): _38.GetCodecDescriptorResponseSDKType;
                    fromAmino(object: _38.GetCodecDescriptorResponseAmino): _38.GetCodecDescriptorResponse;
                    toAmino(message: _38.GetCodecDescriptorResponse): _38.GetCodecDescriptorResponseAmino;
                    fromAminoMsg(object: _38.GetCodecDescriptorResponseAminoMsg): _38.GetCodecDescriptorResponse;
                    toAminoMsg(message: _38.GetCodecDescriptorResponse): _38.GetCodecDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _38.GetCodecDescriptorResponseProtoMsg): _38.GetCodecDescriptorResponse;
                    toProto(message: _38.GetCodecDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _38.GetCodecDescriptorResponse): _38.GetCodecDescriptorResponseProtoMsg;
                };
                GetConfigurationDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _38.GetConfigurationDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _38.GetConfigurationDescriptorRequest;
                    fromJSON(_: any): _38.GetConfigurationDescriptorRequest;
                    toJSON(_: _38.GetConfigurationDescriptorRequest): unknown;
                    fromPartial(_: Partial<_38.GetConfigurationDescriptorRequest>): _38.GetConfigurationDescriptorRequest;
                    fromSDK(_: _38.GetConfigurationDescriptorRequestSDKType): _38.GetConfigurationDescriptorRequest;
                    toSDK(_: _38.GetConfigurationDescriptorRequest): _38.GetConfigurationDescriptorRequestSDKType;
                    fromAmino(_: _38.GetConfigurationDescriptorRequestAmino): _38.GetConfigurationDescriptorRequest;
                    toAmino(_: _38.GetConfigurationDescriptorRequest): _38.GetConfigurationDescriptorRequestAmino;
                    fromAminoMsg(object: _38.GetConfigurationDescriptorRequestAminoMsg): _38.GetConfigurationDescriptorRequest;
                    toAminoMsg(message: _38.GetConfigurationDescriptorRequest): _38.GetConfigurationDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _38.GetConfigurationDescriptorRequestProtoMsg): _38.GetConfigurationDescriptorRequest;
                    toProto(message: _38.GetConfigurationDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _38.GetConfigurationDescriptorRequest): _38.GetConfigurationDescriptorRequestProtoMsg;
                };
                GetConfigurationDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _38.GetConfigurationDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _38.GetConfigurationDescriptorResponse;
                    fromJSON(object: any): _38.GetConfigurationDescriptorResponse;
                    toJSON(message: _38.GetConfigurationDescriptorResponse): unknown;
                    fromPartial(object: Partial<_38.GetConfigurationDescriptorResponse>): _38.GetConfigurationDescriptorResponse;
                    fromSDK(object: _38.GetConfigurationDescriptorResponseSDKType): _38.GetConfigurationDescriptorResponse;
                    toSDK(message: _38.GetConfigurationDescriptorResponse): _38.GetConfigurationDescriptorResponseSDKType;
                    fromAmino(object: _38.GetConfigurationDescriptorResponseAmino): _38.GetConfigurationDescriptorResponse;
                    toAmino(message: _38.GetConfigurationDescriptorResponse): _38.GetConfigurationDescriptorResponseAmino;
                    fromAminoMsg(object: _38.GetConfigurationDescriptorResponseAminoMsg): _38.GetConfigurationDescriptorResponse;
                    toAminoMsg(message: _38.GetConfigurationDescriptorResponse): _38.GetConfigurationDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _38.GetConfigurationDescriptorResponseProtoMsg): _38.GetConfigurationDescriptorResponse;
                    toProto(message: _38.GetConfigurationDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _38.GetConfigurationDescriptorResponse): _38.GetConfigurationDescriptorResponseProtoMsg;
                };
                GetQueryServicesDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _38.GetQueryServicesDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _38.GetQueryServicesDescriptorRequest;
                    fromJSON(_: any): _38.GetQueryServicesDescriptorRequest;
                    toJSON(_: _38.GetQueryServicesDescriptorRequest): unknown;
                    fromPartial(_: Partial<_38.GetQueryServicesDescriptorRequest>): _38.GetQueryServicesDescriptorRequest;
                    fromSDK(_: _38.GetQueryServicesDescriptorRequestSDKType): _38.GetQueryServicesDescriptorRequest;
                    toSDK(_: _38.GetQueryServicesDescriptorRequest): _38.GetQueryServicesDescriptorRequestSDKType;
                    fromAmino(_: _38.GetQueryServicesDescriptorRequestAmino): _38.GetQueryServicesDescriptorRequest;
                    toAmino(_: _38.GetQueryServicesDescriptorRequest): _38.GetQueryServicesDescriptorRequestAmino;
                    fromAminoMsg(object: _38.GetQueryServicesDescriptorRequestAminoMsg): _38.GetQueryServicesDescriptorRequest;
                    toAminoMsg(message: _38.GetQueryServicesDescriptorRequest): _38.GetQueryServicesDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _38.GetQueryServicesDescriptorRequestProtoMsg): _38.GetQueryServicesDescriptorRequest;
                    toProto(message: _38.GetQueryServicesDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _38.GetQueryServicesDescriptorRequest): _38.GetQueryServicesDescriptorRequestProtoMsg;
                };
                GetQueryServicesDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _38.GetQueryServicesDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _38.GetQueryServicesDescriptorResponse;
                    fromJSON(object: any): _38.GetQueryServicesDescriptorResponse;
                    toJSON(message: _38.GetQueryServicesDescriptorResponse): unknown;
                    fromPartial(object: Partial<_38.GetQueryServicesDescriptorResponse>): _38.GetQueryServicesDescriptorResponse;
                    fromSDK(object: _38.GetQueryServicesDescriptorResponseSDKType): _38.GetQueryServicesDescriptorResponse;
                    toSDK(message: _38.GetQueryServicesDescriptorResponse): _38.GetQueryServicesDescriptorResponseSDKType;
                    fromAmino(object: _38.GetQueryServicesDescriptorResponseAmino): _38.GetQueryServicesDescriptorResponse;
                    toAmino(message: _38.GetQueryServicesDescriptorResponse): _38.GetQueryServicesDescriptorResponseAmino;
                    fromAminoMsg(object: _38.GetQueryServicesDescriptorResponseAminoMsg): _38.GetQueryServicesDescriptorResponse;
                    toAminoMsg(message: _38.GetQueryServicesDescriptorResponse): _38.GetQueryServicesDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _38.GetQueryServicesDescriptorResponseProtoMsg): _38.GetQueryServicesDescriptorResponse;
                    toProto(message: _38.GetQueryServicesDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _38.GetQueryServicesDescriptorResponse): _38.GetQueryServicesDescriptorResponseProtoMsg;
                };
                GetTxDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _38.GetTxDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _38.GetTxDescriptorRequest;
                    fromJSON(_: any): _38.GetTxDescriptorRequest;
                    toJSON(_: _38.GetTxDescriptorRequest): unknown;
                    fromPartial(_: Partial<_38.GetTxDescriptorRequest>): _38.GetTxDescriptorRequest;
                    fromSDK(_: _38.GetTxDescriptorRequestSDKType): _38.GetTxDescriptorRequest;
                    toSDK(_: _38.GetTxDescriptorRequest): _38.GetTxDescriptorRequestSDKType;
                    fromAmino(_: _38.GetTxDescriptorRequestAmino): _38.GetTxDescriptorRequest;
                    toAmino(_: _38.GetTxDescriptorRequest): _38.GetTxDescriptorRequestAmino;
                    fromAminoMsg(object: _38.GetTxDescriptorRequestAminoMsg): _38.GetTxDescriptorRequest;
                    toAminoMsg(message: _38.GetTxDescriptorRequest): _38.GetTxDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _38.GetTxDescriptorRequestProtoMsg): _38.GetTxDescriptorRequest;
                    toProto(message: _38.GetTxDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _38.GetTxDescriptorRequest): _38.GetTxDescriptorRequestProtoMsg;
                };
                GetTxDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _38.GetTxDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _38.GetTxDescriptorResponse;
                    fromJSON(object: any): _38.GetTxDescriptorResponse;
                    toJSON(message: _38.GetTxDescriptorResponse): unknown;
                    fromPartial(object: Partial<_38.GetTxDescriptorResponse>): _38.GetTxDescriptorResponse;
                    fromSDK(object: _38.GetTxDescriptorResponseSDKType): _38.GetTxDescriptorResponse;
                    toSDK(message: _38.GetTxDescriptorResponse): _38.GetTxDescriptorResponseSDKType;
                    fromAmino(object: _38.GetTxDescriptorResponseAmino): _38.GetTxDescriptorResponse;
                    toAmino(message: _38.GetTxDescriptorResponse): _38.GetTxDescriptorResponseAmino;
                    fromAminoMsg(object: _38.GetTxDescriptorResponseAminoMsg): _38.GetTxDescriptorResponse;
                    toAminoMsg(message: _38.GetTxDescriptorResponse): _38.GetTxDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _38.GetTxDescriptorResponseProtoMsg): _38.GetTxDescriptorResponse;
                    toProto(message: _38.GetTxDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _38.GetTxDescriptorResponse): _38.GetTxDescriptorResponseProtoMsg;
                };
                QueryServicesDescriptor: {
                    typeUrl: string;
                    encode(message: _38.QueryServicesDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _38.QueryServicesDescriptor;
                    fromJSON(object: any): _38.QueryServicesDescriptor;
                    toJSON(message: _38.QueryServicesDescriptor): unknown;
                    fromPartial(object: Partial<_38.QueryServicesDescriptor>): _38.QueryServicesDescriptor;
                    fromSDK(object: _38.QueryServicesDescriptorSDKType): _38.QueryServicesDescriptor;
                    toSDK(message: _38.QueryServicesDescriptor): _38.QueryServicesDescriptorSDKType;
                    fromAmino(object: _38.QueryServicesDescriptorAmino): _38.QueryServicesDescriptor;
                    toAmino(message: _38.QueryServicesDescriptor): _38.QueryServicesDescriptorAmino;
                    fromAminoMsg(object: _38.QueryServicesDescriptorAminoMsg): _38.QueryServicesDescriptor;
                    toAminoMsg(message: _38.QueryServicesDescriptor): _38.QueryServicesDescriptorAminoMsg;
                    fromProtoMsg(message: _38.QueryServicesDescriptorProtoMsg): _38.QueryServicesDescriptor;
                    toProto(message: _38.QueryServicesDescriptor): Uint8Array;
                    toProtoMsg(message: _38.QueryServicesDescriptor): _38.QueryServicesDescriptorProtoMsg;
                };
                QueryServiceDescriptor: {
                    typeUrl: string;
                    encode(message: _38.QueryServiceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _38.QueryServiceDescriptor;
                    fromJSON(object: any): _38.QueryServiceDescriptor;
                    toJSON(message: _38.QueryServiceDescriptor): unknown;
                    fromPartial(object: Partial<_38.QueryServiceDescriptor>): _38.QueryServiceDescriptor;
                    fromSDK(object: _38.QueryServiceDescriptorSDKType): _38.QueryServiceDescriptor;
                    toSDK(message: _38.QueryServiceDescriptor): _38.QueryServiceDescriptorSDKType;
                    fromAmino(object: _38.QueryServiceDescriptorAmino): _38.QueryServiceDescriptor;
                    toAmino(message: _38.QueryServiceDescriptor): _38.QueryServiceDescriptorAmino;
                    fromAminoMsg(object: _38.QueryServiceDescriptorAminoMsg): _38.QueryServiceDescriptor;
                    toAminoMsg(message: _38.QueryServiceDescriptor): _38.QueryServiceDescriptorAminoMsg;
                    fromProtoMsg(message: _38.QueryServiceDescriptorProtoMsg): _38.QueryServiceDescriptor;
                    toProto(message: _38.QueryServiceDescriptor): Uint8Array;
                    toProtoMsg(message: _38.QueryServiceDescriptor): _38.QueryServiceDescriptorProtoMsg;
                };
                QueryMethodDescriptor: {
                    typeUrl: string;
                    encode(message: _38.QueryMethodDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _38.QueryMethodDescriptor;
                    fromJSON(object: any): _38.QueryMethodDescriptor;
                    toJSON(message: _38.QueryMethodDescriptor): unknown;
                    fromPartial(object: Partial<_38.QueryMethodDescriptor>): _38.QueryMethodDescriptor;
                    fromSDK(object: _38.QueryMethodDescriptorSDKType): _38.QueryMethodDescriptor;
                    toSDK(message: _38.QueryMethodDescriptor): _38.QueryMethodDescriptorSDKType;
                    fromAmino(object: _38.QueryMethodDescriptorAmino): _38.QueryMethodDescriptor;
                    toAmino(message: _38.QueryMethodDescriptor): _38.QueryMethodDescriptorAmino;
                    fromAminoMsg(object: _38.QueryMethodDescriptorAminoMsg): _38.QueryMethodDescriptor;
                    toAminoMsg(message: _38.QueryMethodDescriptor): _38.QueryMethodDescriptorAminoMsg;
                    fromProtoMsg(message: _38.QueryMethodDescriptorProtoMsg): _38.QueryMethodDescriptor;
                    toProto(message: _38.QueryMethodDescriptor): Uint8Array;
                    toProtoMsg(message: _38.QueryMethodDescriptor): _38.QueryMethodDescriptorProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                Service: typeof _197.Service;
                ServiceClientImpl: typeof _197.ServiceClientImpl;
                LCDQueryClient: typeof _180.LCDQueryClient;
                protobufPackage: "cosmos.base.tendermint.v1beta1";
                Block: {
                    typeUrl: string;
                    encode(message: _40.Block, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _40.Block;
                    fromJSON(object: any): _40.Block;
                    toJSON(message: _40.Block): unknown;
                    fromPartial(object: Partial<_40.Block>): _40.Block;
                    fromSDK(object: _40.BlockSDKType): _40.Block;
                    toSDK(message: _40.Block): _40.BlockSDKType;
                    fromAmino(object: _40.BlockAmino): _40.Block;
                    toAmino(message: _40.Block): _40.BlockAmino;
                    fromAminoMsg(object: _40.BlockAminoMsg): _40.Block;
                    toAminoMsg(message: _40.Block): _40.BlockAminoMsg;
                    fromProtoMsg(message: _40.BlockProtoMsg): _40.Block;
                    toProto(message: _40.Block): Uint8Array;
                    toProtoMsg(message: _40.Block): _40.BlockProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _40.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _40.Header;
                    fromJSON(object: any): _40.Header;
                    toJSON(message: _40.Header): unknown;
                    fromPartial(object: Partial<_40.Header>): _40.Header;
                    fromSDK(object: _40.HeaderSDKType): _40.Header;
                    toSDK(message: _40.Header): _40.HeaderSDKType;
                    fromAmino(object: _40.HeaderAmino): _40.Header;
                    toAmino(message: _40.Header): _40.HeaderAmino;
                    fromAminoMsg(object: _40.HeaderAminoMsg): _40.Header;
                    toAminoMsg(message: _40.Header): _40.HeaderAminoMsg;
                    fromProtoMsg(message: _40.HeaderProtoMsg): _40.Header;
                    toProto(message: _40.Header): Uint8Array;
                    toProtoMsg(message: _40.Header): _40.HeaderProtoMsg;
                };
                GetValidatorSetByHeightRequest: {
                    typeUrl: string;
                    encode(message: _39.GetValidatorSetByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _39.GetValidatorSetByHeightRequest;
                    fromJSON(object: any): _39.GetValidatorSetByHeightRequest;
                    toJSON(message: _39.GetValidatorSetByHeightRequest): unknown;
                    fromPartial(object: Partial<_39.GetValidatorSetByHeightRequest>): _39.GetValidatorSetByHeightRequest;
                    fromSDK(object: _39.GetValidatorSetByHeightRequestSDKType): _39.GetValidatorSetByHeightRequest;
                    toSDK(message: _39.GetValidatorSetByHeightRequest): _39.GetValidatorSetByHeightRequestSDKType;
                    fromAmino(object: _39.GetValidatorSetByHeightRequestAmino): _39.GetValidatorSetByHeightRequest;
                    toAmino(message: _39.GetValidatorSetByHeightRequest): _39.GetValidatorSetByHeightRequestAmino;
                    fromAminoMsg(object: _39.GetValidatorSetByHeightRequestAminoMsg): _39.GetValidatorSetByHeightRequest;
                    toAminoMsg(message: _39.GetValidatorSetByHeightRequest): _39.GetValidatorSetByHeightRequestAminoMsg;
                    fromProtoMsg(message: _39.GetValidatorSetByHeightRequestProtoMsg): _39.GetValidatorSetByHeightRequest;
                    toProto(message: _39.GetValidatorSetByHeightRequest): Uint8Array;
                    toProtoMsg(message: _39.GetValidatorSetByHeightRequest): _39.GetValidatorSetByHeightRequestProtoMsg;
                };
                GetValidatorSetByHeightResponse: {
                    typeUrl: string;
                    encode(message: _39.GetValidatorSetByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _39.GetValidatorSetByHeightResponse;
                    fromJSON(object: any): _39.GetValidatorSetByHeightResponse;
                    toJSON(message: _39.GetValidatorSetByHeightResponse): unknown;
                    fromPartial(object: Partial<_39.GetValidatorSetByHeightResponse>): _39.GetValidatorSetByHeightResponse;
                    fromSDK(object: _39.GetValidatorSetByHeightResponseSDKType): _39.GetValidatorSetByHeightResponse;
                    toSDK(message: _39.GetValidatorSetByHeightResponse): _39.GetValidatorSetByHeightResponseSDKType;
                    fromAmino(object: _39.GetValidatorSetByHeightResponseAmino): _39.GetValidatorSetByHeightResponse;
                    toAmino(message: _39.GetValidatorSetByHeightResponse): _39.GetValidatorSetByHeightResponseAmino;
                    fromAminoMsg(object: _39.GetValidatorSetByHeightResponseAminoMsg): _39.GetValidatorSetByHeightResponse;
                    toAminoMsg(message: _39.GetValidatorSetByHeightResponse): _39.GetValidatorSetByHeightResponseAminoMsg;
                    fromProtoMsg(message: _39.GetValidatorSetByHeightResponseProtoMsg): _39.GetValidatorSetByHeightResponse;
                    toProto(message: _39.GetValidatorSetByHeightResponse): Uint8Array;
                    toProtoMsg(message: _39.GetValidatorSetByHeightResponse): _39.GetValidatorSetByHeightResponseProtoMsg;
                };
                GetLatestValidatorSetRequest: {
                    typeUrl: string;
                    encode(message: _39.GetLatestValidatorSetRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _39.GetLatestValidatorSetRequest;
                    fromJSON(object: any): _39.GetLatestValidatorSetRequest;
                    toJSON(message: _39.GetLatestValidatorSetRequest): unknown;
                    fromPartial(object: Partial<_39.GetLatestValidatorSetRequest>): _39.GetLatestValidatorSetRequest;
                    fromSDK(object: _39.GetLatestValidatorSetRequestSDKType): _39.GetLatestValidatorSetRequest;
                    toSDK(message: _39.GetLatestValidatorSetRequest): _39.GetLatestValidatorSetRequestSDKType;
                    fromAmino(object: _39.GetLatestValidatorSetRequestAmino): _39.GetLatestValidatorSetRequest;
                    toAmino(message: _39.GetLatestValidatorSetRequest): _39.GetLatestValidatorSetRequestAmino;
                    fromAminoMsg(object: _39.GetLatestValidatorSetRequestAminoMsg): _39.GetLatestValidatorSetRequest;
                    toAminoMsg(message: _39.GetLatestValidatorSetRequest): _39.GetLatestValidatorSetRequestAminoMsg;
                    fromProtoMsg(message: _39.GetLatestValidatorSetRequestProtoMsg): _39.GetLatestValidatorSetRequest;
                    toProto(message: _39.GetLatestValidatorSetRequest): Uint8Array;
                    toProtoMsg(message: _39.GetLatestValidatorSetRequest): _39.GetLatestValidatorSetRequestProtoMsg;
                };
                GetLatestValidatorSetResponse: {
                    typeUrl: string;
                    encode(message: _39.GetLatestValidatorSetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _39.GetLatestValidatorSetResponse;
                    fromJSON(object: any): _39.GetLatestValidatorSetResponse;
                    toJSON(message: _39.GetLatestValidatorSetResponse): unknown;
                    fromPartial(object: Partial<_39.GetLatestValidatorSetResponse>): _39.GetLatestValidatorSetResponse;
                    fromSDK(object: _39.GetLatestValidatorSetResponseSDKType): _39.GetLatestValidatorSetResponse;
                    toSDK(message: _39.GetLatestValidatorSetResponse): _39.GetLatestValidatorSetResponseSDKType;
                    fromAmino(object: _39.GetLatestValidatorSetResponseAmino): _39.GetLatestValidatorSetResponse;
                    toAmino(message: _39.GetLatestValidatorSetResponse): _39.GetLatestValidatorSetResponseAmino;
                    fromAminoMsg(object: _39.GetLatestValidatorSetResponseAminoMsg): _39.GetLatestValidatorSetResponse;
                    toAminoMsg(message: _39.GetLatestValidatorSetResponse): _39.GetLatestValidatorSetResponseAminoMsg;
                    fromProtoMsg(message: _39.GetLatestValidatorSetResponseProtoMsg): _39.GetLatestValidatorSetResponse;
                    toProto(message: _39.GetLatestValidatorSetResponse): Uint8Array;
                    toProtoMsg(message: _39.GetLatestValidatorSetResponse): _39.GetLatestValidatorSetResponseProtoMsg;
                };
                Validator: {
                    typeUrl: string;
                    encode(message: _39.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _39.Validator;
                    fromJSON(object: any): _39.Validator;
                    toJSON(message: _39.Validator): unknown;
                    fromPartial(object: Partial<_39.Validator>): _39.Validator;
                    fromSDK(object: _39.ValidatorSDKType): _39.Validator;
                    toSDK(message: _39.Validator): _39.ValidatorSDKType;
                    fromAmino(object: _39.ValidatorAmino): _39.Validator;
                    toAmino(message: _39.Validator): _39.ValidatorAmino;
                    fromAminoMsg(object: _39.ValidatorAminoMsg): _39.Validator;
                    toAminoMsg(message: _39.Validator): _39.ValidatorAminoMsg;
                    fromProtoMsg(message: _39.ValidatorProtoMsg): _39.Validator;
                    toProto(message: _39.Validator): Uint8Array;
                    toProtoMsg(message: _39.Validator): _39.ValidatorProtoMsg;
                };
                GetBlockByHeightRequest: {
                    typeUrl: string;
                    encode(message: _39.GetBlockByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _39.GetBlockByHeightRequest;
                    fromJSON(object: any): _39.GetBlockByHeightRequest;
                    toJSON(message: _39.GetBlockByHeightRequest): unknown;
                    fromPartial(object: Partial<_39.GetBlockByHeightRequest>): _39.GetBlockByHeightRequest;
                    fromSDK(object: _39.GetBlockByHeightRequestSDKType): _39.GetBlockByHeightRequest;
                    toSDK(message: _39.GetBlockByHeightRequest): _39.GetBlockByHeightRequestSDKType;
                    fromAmino(object: _39.GetBlockByHeightRequestAmino): _39.GetBlockByHeightRequest;
                    toAmino(message: _39.GetBlockByHeightRequest): _39.GetBlockByHeightRequestAmino;
                    fromAminoMsg(object: _39.GetBlockByHeightRequestAminoMsg): _39.GetBlockByHeightRequest;
                    toAminoMsg(message: _39.GetBlockByHeightRequest): _39.GetBlockByHeightRequestAminoMsg;
                    fromProtoMsg(message: _39.GetBlockByHeightRequestProtoMsg): _39.GetBlockByHeightRequest;
                    toProto(message: _39.GetBlockByHeightRequest): Uint8Array;
                    toProtoMsg(message: _39.GetBlockByHeightRequest): _39.GetBlockByHeightRequestProtoMsg;
                };
                GetBlockByHeightResponse: {
                    typeUrl: string;
                    encode(message: _39.GetBlockByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _39.GetBlockByHeightResponse;
                    fromJSON(object: any): _39.GetBlockByHeightResponse;
                    toJSON(message: _39.GetBlockByHeightResponse): unknown;
                    fromPartial(object: Partial<_39.GetBlockByHeightResponse>): _39.GetBlockByHeightResponse;
                    fromSDK(object: _39.GetBlockByHeightResponseSDKType): _39.GetBlockByHeightResponse;
                    toSDK(message: _39.GetBlockByHeightResponse): _39.GetBlockByHeightResponseSDKType;
                    fromAmino(object: _39.GetBlockByHeightResponseAmino): _39.GetBlockByHeightResponse;
                    toAmino(message: _39.GetBlockByHeightResponse): _39.GetBlockByHeightResponseAmino;
                    fromAminoMsg(object: _39.GetBlockByHeightResponseAminoMsg): _39.GetBlockByHeightResponse;
                    toAminoMsg(message: _39.GetBlockByHeightResponse): _39.GetBlockByHeightResponseAminoMsg;
                    fromProtoMsg(message: _39.GetBlockByHeightResponseProtoMsg): _39.GetBlockByHeightResponse;
                    toProto(message: _39.GetBlockByHeightResponse): Uint8Array;
                    toProtoMsg(message: _39.GetBlockByHeightResponse): _39.GetBlockByHeightResponseProtoMsg;
                };
                GetLatestBlockRequest: {
                    typeUrl: string;
                    encode(_: _39.GetLatestBlockRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _39.GetLatestBlockRequest;
                    fromJSON(_: any): _39.GetLatestBlockRequest;
                    toJSON(_: _39.GetLatestBlockRequest): unknown;
                    fromPartial(_: Partial<_39.GetLatestBlockRequest>): _39.GetLatestBlockRequest;
                    fromSDK(_: _39.GetLatestBlockRequestSDKType): _39.GetLatestBlockRequest;
                    toSDK(_: _39.GetLatestBlockRequest): _39.GetLatestBlockRequestSDKType;
                    fromAmino(_: _39.GetLatestBlockRequestAmino): _39.GetLatestBlockRequest;
                    toAmino(_: _39.GetLatestBlockRequest): _39.GetLatestBlockRequestAmino;
                    fromAminoMsg(object: _39.GetLatestBlockRequestAminoMsg): _39.GetLatestBlockRequest;
                    toAminoMsg(message: _39.GetLatestBlockRequest): _39.GetLatestBlockRequestAminoMsg;
                    fromProtoMsg(message: _39.GetLatestBlockRequestProtoMsg): _39.GetLatestBlockRequest;
                    toProto(message: _39.GetLatestBlockRequest): Uint8Array;
                    toProtoMsg(message: _39.GetLatestBlockRequest): _39.GetLatestBlockRequestProtoMsg;
                };
                GetLatestBlockResponse: {
                    typeUrl: string;
                    encode(message: _39.GetLatestBlockResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _39.GetLatestBlockResponse;
                    fromJSON(object: any): _39.GetLatestBlockResponse;
                    toJSON(message: _39.GetLatestBlockResponse): unknown;
                    fromPartial(object: Partial<_39.GetLatestBlockResponse>): _39.GetLatestBlockResponse;
                    fromSDK(object: _39.GetLatestBlockResponseSDKType): _39.GetLatestBlockResponse;
                    toSDK(message: _39.GetLatestBlockResponse): _39.GetLatestBlockResponseSDKType;
                    fromAmino(object: _39.GetLatestBlockResponseAmino): _39.GetLatestBlockResponse;
                    toAmino(message: _39.GetLatestBlockResponse): _39.GetLatestBlockResponseAmino;
                    fromAminoMsg(object: _39.GetLatestBlockResponseAminoMsg): _39.GetLatestBlockResponse;
                    toAminoMsg(message: _39.GetLatestBlockResponse): _39.GetLatestBlockResponseAminoMsg;
                    fromProtoMsg(message: _39.GetLatestBlockResponseProtoMsg): _39.GetLatestBlockResponse;
                    toProto(message: _39.GetLatestBlockResponse): Uint8Array;
                    toProtoMsg(message: _39.GetLatestBlockResponse): _39.GetLatestBlockResponseProtoMsg;
                };
                GetSyncingRequest: {
                    typeUrl: string;
                    encode(_: _39.GetSyncingRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _39.GetSyncingRequest;
                    fromJSON(_: any): _39.GetSyncingRequest;
                    toJSON(_: _39.GetSyncingRequest): unknown;
                    fromPartial(_: Partial<_39.GetSyncingRequest>): _39.GetSyncingRequest;
                    fromSDK(_: _39.GetSyncingRequestSDKType): _39.GetSyncingRequest;
                    toSDK(_: _39.GetSyncingRequest): _39.GetSyncingRequestSDKType;
                    fromAmino(_: _39.GetSyncingRequestAmino): _39.GetSyncingRequest;
                    toAmino(_: _39.GetSyncingRequest): _39.GetSyncingRequestAmino;
                    fromAminoMsg(object: _39.GetSyncingRequestAminoMsg): _39.GetSyncingRequest;
                    toAminoMsg(message: _39.GetSyncingRequest): _39.GetSyncingRequestAminoMsg;
                    fromProtoMsg(message: _39.GetSyncingRequestProtoMsg): _39.GetSyncingRequest;
                    toProto(message: _39.GetSyncingRequest): Uint8Array;
                    toProtoMsg(message: _39.GetSyncingRequest): _39.GetSyncingRequestProtoMsg;
                };
                GetSyncingResponse: {
                    typeUrl: string;
                    encode(message: _39.GetSyncingResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _39.GetSyncingResponse;
                    fromJSON(object: any): _39.GetSyncingResponse;
                    toJSON(message: _39.GetSyncingResponse): unknown;
                    fromPartial(object: Partial<_39.GetSyncingResponse>): _39.GetSyncingResponse;
                    fromSDK(object: _39.GetSyncingResponseSDKType): _39.GetSyncingResponse;
                    toSDK(message: _39.GetSyncingResponse): _39.GetSyncingResponseSDKType;
                    fromAmino(object: _39.GetSyncingResponseAmino): _39.GetSyncingResponse;
                    toAmino(message: _39.GetSyncingResponse): _39.GetSyncingResponseAmino;
                    fromAminoMsg(object: _39.GetSyncingResponseAminoMsg): _39.GetSyncingResponse;
                    toAminoMsg(message: _39.GetSyncingResponse): _39.GetSyncingResponseAminoMsg;
                    fromProtoMsg(message: _39.GetSyncingResponseProtoMsg): _39.GetSyncingResponse;
                    toProto(message: _39.GetSyncingResponse): Uint8Array;
                    toProtoMsg(message: _39.GetSyncingResponse): _39.GetSyncingResponseProtoMsg;
                };
                GetNodeInfoRequest: {
                    typeUrl: string;
                    encode(_: _39.GetNodeInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _39.GetNodeInfoRequest;
                    fromJSON(_: any): _39.GetNodeInfoRequest;
                    toJSON(_: _39.GetNodeInfoRequest): unknown;
                    fromPartial(_: Partial<_39.GetNodeInfoRequest>): _39.GetNodeInfoRequest;
                    fromSDK(_: _39.GetNodeInfoRequestSDKType): _39.GetNodeInfoRequest;
                    toSDK(_: _39.GetNodeInfoRequest): _39.GetNodeInfoRequestSDKType;
                    fromAmino(_: _39.GetNodeInfoRequestAmino): _39.GetNodeInfoRequest;
                    toAmino(_: _39.GetNodeInfoRequest): _39.GetNodeInfoRequestAmino;
                    fromAminoMsg(object: _39.GetNodeInfoRequestAminoMsg): _39.GetNodeInfoRequest;
                    toAminoMsg(message: _39.GetNodeInfoRequest): _39.GetNodeInfoRequestAminoMsg;
                    fromProtoMsg(message: _39.GetNodeInfoRequestProtoMsg): _39.GetNodeInfoRequest;
                    toProto(message: _39.GetNodeInfoRequest): Uint8Array;
                    toProtoMsg(message: _39.GetNodeInfoRequest): _39.GetNodeInfoRequestProtoMsg;
                };
                GetNodeInfoResponse: {
                    typeUrl: string;
                    encode(message: _39.GetNodeInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _39.GetNodeInfoResponse;
                    fromJSON(object: any): _39.GetNodeInfoResponse;
                    toJSON(message: _39.GetNodeInfoResponse): unknown;
                    fromPartial(object: Partial<_39.GetNodeInfoResponse>): _39.GetNodeInfoResponse;
                    fromSDK(object: _39.GetNodeInfoResponseSDKType): _39.GetNodeInfoResponse;
                    toSDK(message: _39.GetNodeInfoResponse): _39.GetNodeInfoResponseSDKType;
                    fromAmino(object: _39.GetNodeInfoResponseAmino): _39.GetNodeInfoResponse;
                    toAmino(message: _39.GetNodeInfoResponse): _39.GetNodeInfoResponseAmino;
                    fromAminoMsg(object: _39.GetNodeInfoResponseAminoMsg): _39.GetNodeInfoResponse;
                    toAminoMsg(message: _39.GetNodeInfoResponse): _39.GetNodeInfoResponseAminoMsg;
                    fromProtoMsg(message: _39.GetNodeInfoResponseProtoMsg): _39.GetNodeInfoResponse;
                    toProto(message: _39.GetNodeInfoResponse): Uint8Array;
                    toProtoMsg(message: _39.GetNodeInfoResponse): _39.GetNodeInfoResponseProtoMsg;
                };
                VersionInfo: {
                    typeUrl: string;
                    encode(message: _39.VersionInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _39.VersionInfo;
                    fromJSON(object: any): _39.VersionInfo;
                    toJSON(message: _39.VersionInfo): unknown;
                    fromPartial(object: Partial<_39.VersionInfo>): _39.VersionInfo;
                    fromSDK(object: _39.VersionInfoSDKType): _39.VersionInfo;
                    toSDK(message: _39.VersionInfo): _39.VersionInfoSDKType;
                    fromAmino(object: _39.VersionInfoAmino): _39.VersionInfo;
                    toAmino(message: _39.VersionInfo): _39.VersionInfoAmino;
                    fromAminoMsg(object: _39.VersionInfoAminoMsg): _39.VersionInfo;
                    toAminoMsg(message: _39.VersionInfo): _39.VersionInfoAminoMsg;
                    fromProtoMsg(message: _39.VersionInfoProtoMsg): _39.VersionInfo;
                    toProto(message: _39.VersionInfo): Uint8Array;
                    toProtoMsg(message: _39.VersionInfo): _39.VersionInfoProtoMsg;
                };
                Module: {
                    typeUrl: string;
                    encode(message: _39.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _39.Module;
                    fromJSON(object: any): _39.Module;
                    toJSON(message: _39.Module): unknown;
                    fromPartial(object: Partial<_39.Module>): _39.Module;
                    fromSDK(object: _39.ModuleSDKType): _39.Module;
                    toSDK(message: _39.Module): _39.ModuleSDKType;
                    fromAmino(object: _39.ModuleAmino): _39.Module;
                    toAmino(message: _39.Module): _39.ModuleAmino;
                    fromAminoMsg(object: _39.ModuleAminoMsg): _39.Module;
                    toAminoMsg(message: _39.Module): _39.ModuleAminoMsg;
                    fromProtoMsg(message: _39.ModuleProtoMsg): _39.Module;
                    toProto(message: _39.Module): Uint8Array;
                    toProtoMsg(message: _39.Module): _39.ModuleProtoMsg;
                };
                ABCIQueryRequest: {
                    typeUrl: string;
                    encode(message: _39.ABCIQueryRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _39.ABCIQueryRequest;
                    fromJSON(object: any): _39.ABCIQueryRequest;
                    toJSON(message: _39.ABCIQueryRequest): unknown;
                    fromPartial(object: Partial<_39.ABCIQueryRequest>): _39.ABCIQueryRequest;
                    fromSDK(object: _39.ABCIQueryRequestSDKType): _39.ABCIQueryRequest;
                    toSDK(message: _39.ABCIQueryRequest): _39.ABCIQueryRequestSDKType;
                    fromAmino(object: _39.ABCIQueryRequestAmino): _39.ABCIQueryRequest;
                    toAmino(message: _39.ABCIQueryRequest): _39.ABCIQueryRequestAmino;
                    fromAminoMsg(object: _39.ABCIQueryRequestAminoMsg): _39.ABCIQueryRequest;
                    toAminoMsg(message: _39.ABCIQueryRequest): _39.ABCIQueryRequestAminoMsg;
                    fromProtoMsg(message: _39.ABCIQueryRequestProtoMsg): _39.ABCIQueryRequest;
                    toProto(message: _39.ABCIQueryRequest): Uint8Array;
                    toProtoMsg(message: _39.ABCIQueryRequest): _39.ABCIQueryRequestProtoMsg;
                };
                ABCIQueryResponse: {
                    typeUrl: string;
                    encode(message: _39.ABCIQueryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _39.ABCIQueryResponse;
                    fromJSON(object: any): _39.ABCIQueryResponse;
                    toJSON(message: _39.ABCIQueryResponse): unknown;
                    fromPartial(object: Partial<_39.ABCIQueryResponse>): _39.ABCIQueryResponse;
                    fromSDK(object: _39.ABCIQueryResponseSDKType): _39.ABCIQueryResponse;
                    toSDK(message: _39.ABCIQueryResponse): _39.ABCIQueryResponseSDKType;
                    fromAmino(object: _39.ABCIQueryResponseAmino): _39.ABCIQueryResponse;
                    toAmino(message: _39.ABCIQueryResponse): _39.ABCIQueryResponseAmino;
                    fromAminoMsg(object: _39.ABCIQueryResponseAminoMsg): _39.ABCIQueryResponse;
                    toAminoMsg(message: _39.ABCIQueryResponse): _39.ABCIQueryResponseAminoMsg;
                    fromProtoMsg(message: _39.ABCIQueryResponseProtoMsg): _39.ABCIQueryResponse;
                    toProto(message: _39.ABCIQueryResponse): Uint8Array;
                    toProtoMsg(message: _39.ABCIQueryResponse): _39.ABCIQueryResponseProtoMsg;
                };
                ProofOp: {
                    typeUrl: string;
                    encode(message: _39.ProofOp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _39.ProofOp;
                    fromJSON(object: any): _39.ProofOp;
                    toJSON(message: _39.ProofOp): unknown;
                    fromPartial(object: Partial<_39.ProofOp>): _39.ProofOp;
                    fromSDK(object: _39.ProofOpSDKType): _39.ProofOp;
                    toSDK(message: _39.ProofOp): _39.ProofOpSDKType;
                    fromAmino(object: _39.ProofOpAmino): _39.ProofOp;
                    toAmino(message: _39.ProofOp): _39.ProofOpAmino;
                    fromAminoMsg(object: _39.ProofOpAminoMsg): _39.ProofOp;
                    toAminoMsg(message: _39.ProofOp): _39.ProofOpAminoMsg;
                    fromProtoMsg(message: _39.ProofOpProtoMsg): _39.ProofOp;
                    toProto(message: _39.ProofOp): Uint8Array;
                    toProtoMsg(message: _39.ProofOp): _39.ProofOpProtoMsg;
                };
                ProofOps: {
                    typeUrl: string;
                    encode(message: _39.ProofOps, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _39.ProofOps;
                    fromJSON(object: any): _39.ProofOps;
                    toJSON(message: _39.ProofOps): unknown;
                    fromPartial(object: Partial<_39.ProofOps>): _39.ProofOps;
                    fromSDK(object: _39.ProofOpsSDKType): _39.ProofOps;
                    toSDK(message: _39.ProofOps): _39.ProofOpsSDKType;
                    fromAmino(object: _39.ProofOpsAmino): _39.ProofOps;
                    toAmino(message: _39.ProofOps): _39.ProofOpsAmino;
                    fromAminoMsg(object: _39.ProofOpsAminoMsg): _39.ProofOps;
                    toAminoMsg(message: _39.ProofOps): _39.ProofOpsAminoMsg;
                    fromProtoMsg(message: _39.ProofOpsProtoMsg): _39.ProofOps;
                    toProto(message: _39.ProofOps): Uint8Array;
                    toProtoMsg(message: _39.ProofOps): _39.ProofOpsProtoMsg;
                };
            };
        }
        const v1beta1: {
            protobufPackage: "cosmos.base.v1beta1";
            Coin: {
                typeUrl: string;
                encode(message: _41.Coin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _41.Coin;
                fromJSON(object: any): _41.Coin;
                toJSON(message: _41.Coin): unknown;
                fromPartial(object: Partial<_41.Coin>): _41.Coin;
                fromSDK(object: _41.CoinSDKType): _41.Coin;
                toSDK(message: _41.Coin): _41.CoinSDKType;
                fromAmino(object: _41.CoinAmino): _41.Coin;
                toAmino(message: _41.Coin): _41.CoinAmino;
                fromAminoMsg(object: _41.CoinAminoMsg): _41.Coin;
                toAminoMsg(message: _41.Coin): _41.CoinAminoMsg;
                fromProtoMsg(message: _41.CoinProtoMsg): _41.Coin;
                toProto(message: _41.Coin): Uint8Array;
                toProtoMsg(message: _41.Coin): _41.CoinProtoMsg;
            };
            DecCoin: {
                typeUrl: string;
                encode(message: _41.DecCoin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _41.DecCoin;
                fromJSON(object: any): _41.DecCoin;
                toJSON(message: _41.DecCoin): unknown;
                fromPartial(object: Partial<_41.DecCoin>): _41.DecCoin;
                fromSDK(object: _41.DecCoinSDKType): _41.DecCoin;
                toSDK(message: _41.DecCoin): _41.DecCoinSDKType;
                fromAmino(object: _41.DecCoinAmino): _41.DecCoin;
                toAmino(message: _41.DecCoin): _41.DecCoinAmino;
                fromAminoMsg(object: _41.DecCoinAminoMsg): _41.DecCoin;
                toAminoMsg(message: _41.DecCoin): _41.DecCoinAminoMsg;
                fromProtoMsg(message: _41.DecCoinProtoMsg): _41.DecCoin;
                toProto(message: _41.DecCoin): Uint8Array;
                toProtoMsg(message: _41.DecCoin): _41.DecCoinProtoMsg;
            };
            IntProto: {
                typeUrl: string;
                encode(message: _41.IntProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _41.IntProto;
                fromJSON(object: any): _41.IntProto;
                toJSON(message: _41.IntProto): unknown;
                fromPartial(object: Partial<_41.IntProto>): _41.IntProto;
                fromSDK(object: _41.IntProtoSDKType): _41.IntProto;
                toSDK(message: _41.IntProto): _41.IntProtoSDKType;
                fromAmino(object: _41.IntProtoAmino): _41.IntProto;
                toAmino(message: _41.IntProto): _41.IntProtoAmino;
                fromAminoMsg(object: _41.IntProtoAminoMsg): _41.IntProto;
                toAminoMsg(message: _41.IntProto): _41.IntProtoAminoMsg;
                fromProtoMsg(message: _41.IntProtoProtoMsg): _41.IntProto;
                toProto(message: _41.IntProto): Uint8Array;
                toProtoMsg(message: _41.IntProto): _41.IntProtoProtoMsg;
            };
            DecProto: {
                typeUrl: string;
                encode(message: _41.DecProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _41.DecProto;
                fromJSON(object: any): _41.DecProto;
                toJSON(message: _41.DecProto): unknown;
                fromPartial(object: Partial<_41.DecProto>): _41.DecProto;
                fromSDK(object: _41.DecProtoSDKType): _41.DecProto;
                toSDK(message: _41.DecProto): _41.DecProtoSDKType;
                fromAmino(object: _41.DecProtoAmino): _41.DecProto;
                toAmino(message: _41.DecProto): _41.DecProtoAmino;
                fromAminoMsg(object: _41.DecProtoAminoMsg): _41.DecProto;
                toAminoMsg(message: _41.DecProto): _41.DecProtoAminoMsg;
                fromProtoMsg(message: _41.DecProtoProtoMsg): _41.DecProto;
                toProto(message: _41.DecProto): Uint8Array;
                toProtoMsg(message: _41.DecProto): _41.DecProtoProtoMsg;
            };
        };
    }
    namespace capability {
        namespace module {
            const v1: {
                protobufPackage: "cosmos.capability.module.v1";
                Module: {
                    typeUrl: string;
                    encode(message: _42.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _42.Module;
                    fromJSON(object: any): _42.Module;
                    toJSON(message: _42.Module): unknown;
                    fromPartial(object: Partial<_42.Module>): _42.Module;
                    fromSDK(object: _42.ModuleSDKType): _42.Module;
                    toSDK(message: _42.Module): _42.ModuleSDKType;
                    fromAmino(object: _42.ModuleAmino): _42.Module;
                    toAmino(message: _42.Module): _42.ModuleAmino;
                    fromAminoMsg(object: _42.ModuleAminoMsg): _42.Module;
                    toAminoMsg(message: _42.Module): _42.ModuleAminoMsg;
                    fromProtoMsg(message: _42.ModuleProtoMsg): _42.Module;
                    toProto(message: _42.Module): Uint8Array;
                    toProtoMsg(message: _42.Module): _42.ModuleProtoMsg;
                };
            };
        }
    }
    namespace consensus {
        namespace module {
            const v1: {
                protobufPackage: "cosmos.consensus.module.v1";
                Module: {
                    typeUrl: string;
                    encode(message: _43.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _43.Module;
                    fromJSON(object: any): _43.Module;
                    toJSON(message: _43.Module): unknown;
                    fromPartial(object: Partial<_43.Module>): _43.Module;
                    fromSDK(object: _43.ModuleSDKType): _43.Module;
                    toSDK(message: _43.Module): _43.ModuleSDKType;
                    fromAmino(object: _43.ModuleAmino): _43.Module;
                    toAmino(message: _43.Module): _43.ModuleAmino;
                    fromAminoMsg(object: _43.ModuleAminoMsg): _43.Module;
                    toAminoMsg(message: _43.Module): _43.ModuleAminoMsg;
                    fromProtoMsg(message: _43.ModuleProtoMsg): _43.Module;
                    toProto(message: _43.Module): Uint8Array;
                    toProtoMsg(message: _43.Module): _43.ModuleProtoMsg;
                };
            };
        }
        const v1: {
            Msg: typeof _214.Msg;
            Query: typeof _198.Query;
            QueryClientImpl: typeof _198.QueryClientImpl;
            LCDQueryClient: typeof _181.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    updateParams(value: _45.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    updateParams(value: _45.MsgUpdateParams): {
                        typeUrl: string;
                        value: _45.MsgUpdateParams;
                    };
                };
                toJSON: {
                    updateParams(value: _45.MsgUpdateParams): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _45.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    updateParams(value: _45.MsgUpdateParams): {
                        typeUrl: string;
                        value: _45.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.consensus.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _45.MsgUpdateParams) => _45.MsgUpdateParamsAmino;
                    fromAmino: (object: _45.MsgUpdateParamsAmino) => _45.MsgUpdateParams;
                };
            };
            protobufPackage: "cosmos.consensus.v1";
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _45.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _45.MsgUpdateParams;
                fromJSON(object: any): _45.MsgUpdateParams;
                toJSON(message: _45.MsgUpdateParams): unknown;
                fromPartial(object: Partial<_45.MsgUpdateParams>): _45.MsgUpdateParams;
                fromSDK(object: _45.MsgUpdateParamsSDKType): _45.MsgUpdateParams;
                toSDK(message: _45.MsgUpdateParams): _45.MsgUpdateParamsSDKType;
                fromAmino(object: _45.MsgUpdateParamsAmino): _45.MsgUpdateParams;
                toAmino(message: _45.MsgUpdateParams): _45.MsgUpdateParamsAmino;
                fromAminoMsg(object: _45.MsgUpdateParamsAminoMsg): _45.MsgUpdateParams;
                toAminoMsg(message: _45.MsgUpdateParams): _45.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _45.MsgUpdateParamsProtoMsg): _45.MsgUpdateParams;
                toProto(message: _45.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _45.MsgUpdateParams): _45.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _45.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _45.MsgUpdateParamsResponse;
                fromJSON(_: any): _45.MsgUpdateParamsResponse;
                toJSON(_: _45.MsgUpdateParamsResponse): unknown;
                fromPartial(_: Partial<_45.MsgUpdateParamsResponse>): _45.MsgUpdateParamsResponse;
                fromSDK(_: _45.MsgUpdateParamsResponseSDKType): _45.MsgUpdateParamsResponse;
                toSDK(_: _45.MsgUpdateParamsResponse): _45.MsgUpdateParamsResponseSDKType;
                fromAmino(_: _45.MsgUpdateParamsResponseAmino): _45.MsgUpdateParamsResponse;
                toAmino(_: _45.MsgUpdateParamsResponse): _45.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _45.MsgUpdateParamsResponseAminoMsg): _45.MsgUpdateParamsResponse;
                toAminoMsg(message: _45.MsgUpdateParamsResponse): _45.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _45.MsgUpdateParamsResponseProtoMsg): _45.MsgUpdateParamsResponse;
                toProto(message: _45.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _45.MsgUpdateParamsResponse): _45.MsgUpdateParamsResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _44.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _44.QueryParamsRequest;
                fromJSON(_: any): _44.QueryParamsRequest;
                toJSON(_: _44.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_44.QueryParamsRequest>): _44.QueryParamsRequest;
                fromSDK(_: _44.QueryParamsRequestSDKType): _44.QueryParamsRequest;
                toSDK(_: _44.QueryParamsRequest): _44.QueryParamsRequestSDKType;
                fromAmino(_: _44.QueryParamsRequestAmino): _44.QueryParamsRequest;
                toAmino(_: _44.QueryParamsRequest): _44.QueryParamsRequestAmino;
                fromAminoMsg(object: _44.QueryParamsRequestAminoMsg): _44.QueryParamsRequest;
                toAminoMsg(message: _44.QueryParamsRequest): _44.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _44.QueryParamsRequestProtoMsg): _44.QueryParamsRequest;
                toProto(message: _44.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _44.QueryParamsRequest): _44.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _44.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _44.QueryParamsResponse;
                fromJSON(object: any): _44.QueryParamsResponse;
                toJSON(message: _44.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_44.QueryParamsResponse>): _44.QueryParamsResponse;
                fromSDK(object: _44.QueryParamsResponseSDKType): _44.QueryParamsResponse;
                toSDK(message: _44.QueryParamsResponse): _44.QueryParamsResponseSDKType;
                fromAmino(object: _44.QueryParamsResponseAmino): _44.QueryParamsResponse;
                toAmino(message: _44.QueryParamsResponse): _44.QueryParamsResponseAmino;
                fromAminoMsg(object: _44.QueryParamsResponseAminoMsg): _44.QueryParamsResponse;
                toAminoMsg(message: _44.QueryParamsResponse): _44.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _44.QueryParamsResponseProtoMsg): _44.QueryParamsResponse;
                toProto(message: _44.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _44.QueryParamsResponse): _44.QueryParamsResponseProtoMsg;
            };
        };
    }
    namespace crisis {
        namespace module {
            const v1: {
                protobufPackage: "cosmos.crisis.module.v1";
                Module: {
                    typeUrl: string;
                    encode(message: _46.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _46.Module;
                    fromJSON(object: any): _46.Module;
                    toJSON(message: _46.Module): unknown;
                    fromPartial(object: Partial<_46.Module>): _46.Module;
                    fromSDK(object: _46.ModuleSDKType): _46.Module;
                    toSDK(message: _46.Module): _46.ModuleSDKType;
                    fromAmino(object: _46.ModuleAmino): _46.Module;
                    toAmino(message: _46.Module): _46.ModuleAmino;
                    fromAminoMsg(object: _46.ModuleAminoMsg): _46.Module;
                    toAminoMsg(message: _46.Module): _46.ModuleAminoMsg;
                    fromProtoMsg(message: _46.ModuleProtoMsg): _46.Module;
                    toProto(message: _46.Module): Uint8Array;
                    toProtoMsg(message: _46.Module): _46.ModuleProtoMsg;
                };
            };
        }
    }
    namespace crypto {
        const ed25519: {
            protobufPackage: "cosmos.crypto.ed25519";
            PubKey: {
                typeUrl: string;
                encode(message: _47.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _47.PubKey;
                fromJSON(object: any): _47.PubKey;
                toJSON(message: _47.PubKey): unknown;
                fromPartial(object: Partial<_47.PubKey>): _47.PubKey;
                fromSDK(object: _47.PubKeySDKType): _47.PubKey;
                toSDK(message: _47.PubKey): _47.PubKeySDKType;
                fromAmino(object: _47.PubKeyAmino): _47.PubKey;
                toAmino(message: _47.PubKey): _47.PubKeyAmino;
                fromAminoMsg(object: _47.PubKeyAminoMsg): _47.PubKey;
                toAminoMsg(message: _47.PubKey): _47.PubKeyAminoMsg;
                fromProtoMsg(message: _47.PubKeyProtoMsg): _47.PubKey;
                toProto(message: _47.PubKey): Uint8Array;
                toProtoMsg(message: _47.PubKey): _47.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _47.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _47.PrivKey;
                fromJSON(object: any): _47.PrivKey;
                toJSON(message: _47.PrivKey): unknown;
                fromPartial(object: Partial<_47.PrivKey>): _47.PrivKey;
                fromSDK(object: _47.PrivKeySDKType): _47.PrivKey;
                toSDK(message: _47.PrivKey): _47.PrivKeySDKType;
                fromAmino(object: _47.PrivKeyAmino): _47.PrivKey;
                toAmino(message: _47.PrivKey): _47.PrivKeyAmino;
                fromAminoMsg(object: _47.PrivKeyAminoMsg): _47.PrivKey;
                toAminoMsg(message: _47.PrivKey): _47.PrivKeyAminoMsg;
                fromProtoMsg(message: _47.PrivKeyProtoMsg): _47.PrivKey;
                toProto(message: _47.PrivKey): Uint8Array;
                toProtoMsg(message: _47.PrivKey): _47.PrivKeyProtoMsg;
            };
        };
        namespace hd {
            const v1: {
                protobufPackage: "cosmos.crypto.hd.v1";
                BIP44Params: {
                    typeUrl: string;
                    encode(message: _48.BIP44Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _48.BIP44Params;
                    fromJSON(object: any): _48.BIP44Params;
                    toJSON(message: _48.BIP44Params): unknown;
                    fromPartial(object: Partial<_48.BIP44Params>): _48.BIP44Params;
                    fromSDK(object: _48.BIP44ParamsSDKType): _48.BIP44Params;
                    toSDK(message: _48.BIP44Params): _48.BIP44ParamsSDKType;
                    fromAmino(object: _48.BIP44ParamsAmino): _48.BIP44Params;
                    toAmino(message: _48.BIP44Params): _48.BIP44ParamsAmino;
                    fromAminoMsg(object: _48.BIP44ParamsAminoMsg): _48.BIP44Params;
                    toAminoMsg(message: _48.BIP44Params): _48.BIP44ParamsAminoMsg;
                    fromProtoMsg(message: _48.BIP44ParamsProtoMsg): _48.BIP44Params;
                    toProto(message: _48.BIP44Params): Uint8Array;
                    toProtoMsg(message: _48.BIP44Params): _48.BIP44ParamsProtoMsg;
                };
            };
        }
        namespace keyring {
            const v1: {
                protobufPackage: "cosmos.crypto.keyring.v1";
                Record: {
                    typeUrl: string;
                    encode(message: _49.Record, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _49.Record;
                    fromJSON(object: any): _49.Record;
                    toJSON(message: _49.Record): unknown;
                    fromPartial(object: Partial<_49.Record>): _49.Record;
                    fromSDK(object: _49.RecordSDKType): _49.Record;
                    toSDK(message: _49.Record): _49.RecordSDKType;
                    fromAmino(object: _49.RecordAmino): _49.Record;
                    toAmino(message: _49.Record): _49.RecordAmino;
                    fromAminoMsg(object: _49.RecordAminoMsg): _49.Record;
                    toAminoMsg(message: _49.Record): _49.RecordAminoMsg;
                    fromProtoMsg(message: _49.RecordProtoMsg): _49.Record;
                    toProto(message: _49.Record): Uint8Array;
                    toProtoMsg(message: _49.Record): _49.RecordProtoMsg;
                };
                Record_Local: {
                    typeUrl: string;
                    encode(message: _49.Record_Local, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _49.Record_Local;
                    fromJSON(object: any): _49.Record_Local;
                    toJSON(message: _49.Record_Local): unknown;
                    fromPartial(object: Partial<_49.Record_Local>): _49.Record_Local;
                    fromSDK(object: _49.Record_LocalSDKType): _49.Record_Local;
                    toSDK(message: _49.Record_Local): _49.Record_LocalSDKType;
                    fromAmino(object: _49.Record_LocalAmino): _49.Record_Local;
                    toAmino(message: _49.Record_Local): _49.Record_LocalAmino;
                    fromAminoMsg(object: _49.Record_LocalAminoMsg): _49.Record_Local;
                    toAminoMsg(message: _49.Record_Local): _49.Record_LocalAminoMsg;
                    fromProtoMsg(message: _49.Record_LocalProtoMsg): _49.Record_Local;
                    toProto(message: _49.Record_Local): Uint8Array;
                    toProtoMsg(message: _49.Record_Local): _49.Record_LocalProtoMsg;
                };
                Record_Ledger: {
                    typeUrl: string;
                    encode(message: _49.Record_Ledger, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _49.Record_Ledger;
                    fromJSON(object: any): _49.Record_Ledger;
                    toJSON(message: _49.Record_Ledger): unknown;
                    fromPartial(object: Partial<_49.Record_Ledger>): _49.Record_Ledger;
                    fromSDK(object: _49.Record_LedgerSDKType): _49.Record_Ledger;
                    toSDK(message: _49.Record_Ledger): _49.Record_LedgerSDKType;
                    fromAmino(object: _49.Record_LedgerAmino): _49.Record_Ledger;
                    toAmino(message: _49.Record_Ledger): _49.Record_LedgerAmino;
                    fromAminoMsg(object: _49.Record_LedgerAminoMsg): _49.Record_Ledger;
                    toAminoMsg(message: _49.Record_Ledger): _49.Record_LedgerAminoMsg;
                    fromProtoMsg(message: _49.Record_LedgerProtoMsg): _49.Record_Ledger;
                    toProto(message: _49.Record_Ledger): Uint8Array;
                    toProtoMsg(message: _49.Record_Ledger): _49.Record_LedgerProtoMsg;
                };
                Record_Multi: {
                    typeUrl: string;
                    encode(_: _49.Record_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _49.Record_Multi;
                    fromJSON(_: any): _49.Record_Multi;
                    toJSON(_: _49.Record_Multi): unknown;
                    fromPartial(_: Partial<_49.Record_Multi>): _49.Record_Multi;
                    fromSDK(_: _49.Record_MultiSDKType): _49.Record_Multi;
                    toSDK(_: _49.Record_Multi): _49.Record_MultiSDKType;
                    fromAmino(_: _49.Record_MultiAmino): _49.Record_Multi;
                    toAmino(_: _49.Record_Multi): _49.Record_MultiAmino;
                    fromAminoMsg(object: _49.Record_MultiAminoMsg): _49.Record_Multi;
                    toAminoMsg(message: _49.Record_Multi): _49.Record_MultiAminoMsg;
                    fromProtoMsg(message: _49.Record_MultiProtoMsg): _49.Record_Multi;
                    toProto(message: _49.Record_Multi): Uint8Array;
                    toProtoMsg(message: _49.Record_Multi): _49.Record_MultiProtoMsg;
                };
                Record_Offline: {
                    typeUrl: string;
                    encode(_: _49.Record_Offline, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _49.Record_Offline;
                    fromJSON(_: any): _49.Record_Offline;
                    toJSON(_: _49.Record_Offline): unknown;
                    fromPartial(_: Partial<_49.Record_Offline>): _49.Record_Offline;
                    fromSDK(_: _49.Record_OfflineSDKType): _49.Record_Offline;
                    toSDK(_: _49.Record_Offline): _49.Record_OfflineSDKType;
                    fromAmino(_: _49.Record_OfflineAmino): _49.Record_Offline;
                    toAmino(_: _49.Record_Offline): _49.Record_OfflineAmino;
                    fromAminoMsg(object: _49.Record_OfflineAminoMsg): _49.Record_Offline;
                    toAminoMsg(message: _49.Record_Offline): _49.Record_OfflineAminoMsg;
                    fromProtoMsg(message: _49.Record_OfflineProtoMsg): _49.Record_Offline;
                    toProto(message: _49.Record_Offline): Uint8Array;
                    toProtoMsg(message: _49.Record_Offline): _49.Record_OfflineProtoMsg;
                };
            };
        }
        const multisig: {
            protobufPackage: "cosmos.crypto.multisig";
            LegacyAminoPubKey: {
                typeUrl: string;
                encode(message: _50.LegacyAminoPubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _50.LegacyAminoPubKey;
                fromJSON(object: any): _50.LegacyAminoPubKey;
                toJSON(message: _50.LegacyAminoPubKey): unknown;
                fromPartial(object: Partial<_50.LegacyAminoPubKey>): _50.LegacyAminoPubKey;
                fromSDK(object: _50.LegacyAminoPubKeySDKType): _50.LegacyAminoPubKey;
                toSDK(message: _50.LegacyAminoPubKey): _50.LegacyAminoPubKeySDKType;
                fromAmino(object: _50.LegacyAminoPubKeyAmino): _50.LegacyAminoPubKey;
                toAmino(message: _50.LegacyAminoPubKey): _50.LegacyAminoPubKeyAmino;
                fromAminoMsg(object: _50.LegacyAminoPubKeyAminoMsg): _50.LegacyAminoPubKey;
                toAminoMsg(message: _50.LegacyAminoPubKey): _50.LegacyAminoPubKeyAminoMsg;
                fromProtoMsg(message: _50.LegacyAminoPubKeyProtoMsg): _50.LegacyAminoPubKey;
                toProto(message: _50.LegacyAminoPubKey): Uint8Array;
                toProtoMsg(message: _50.LegacyAminoPubKey): _50.LegacyAminoPubKeyProtoMsg;
            };
        };
        const secp256k1: {
            protobufPackage: "cosmos.crypto.secp256k1";
            PubKey: {
                typeUrl: string;
                encode(message: _51.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _51.PubKey;
                fromJSON(object: any): _51.PubKey;
                toJSON(message: _51.PubKey): unknown;
                fromPartial(object: Partial<_51.PubKey>): _51.PubKey;
                fromSDK(object: _51.PubKeySDKType): _51.PubKey;
                toSDK(message: _51.PubKey): _51.PubKeySDKType;
                fromAmino(object: _51.PubKeyAmino): _51.PubKey;
                toAmino(message: _51.PubKey): _51.PubKeyAmino;
                fromAminoMsg(object: _51.PubKeyAminoMsg): _51.PubKey;
                toAminoMsg(message: _51.PubKey): _51.PubKeyAminoMsg;
                fromProtoMsg(message: _51.PubKeyProtoMsg): _51.PubKey;
                toProto(message: _51.PubKey): Uint8Array;
                toProtoMsg(message: _51.PubKey): _51.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _51.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _51.PrivKey;
                fromJSON(object: any): _51.PrivKey;
                toJSON(message: _51.PrivKey): unknown;
                fromPartial(object: Partial<_51.PrivKey>): _51.PrivKey;
                fromSDK(object: _51.PrivKeySDKType): _51.PrivKey;
                toSDK(message: _51.PrivKey): _51.PrivKeySDKType;
                fromAmino(object: _51.PrivKeyAmino): _51.PrivKey;
                toAmino(message: _51.PrivKey): _51.PrivKeyAmino;
                fromAminoMsg(object: _51.PrivKeyAminoMsg): _51.PrivKey;
                toAminoMsg(message: _51.PrivKey): _51.PrivKeyAminoMsg;
                fromProtoMsg(message: _51.PrivKeyProtoMsg): _51.PrivKey;
                toProto(message: _51.PrivKey): Uint8Array;
                toProtoMsg(message: _51.PrivKey): _51.PrivKeyProtoMsg;
            };
        };
        const secp256r1: {
            protobufPackage: "cosmos.crypto.secp256r1";
            PubKey: {
                typeUrl: string;
                encode(message: _52.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _52.PubKey;
                fromJSON(object: any): _52.PubKey;
                toJSON(message: _52.PubKey): unknown;
                fromPartial(object: Partial<_52.PubKey>): _52.PubKey;
                fromSDK(object: _52.PubKeySDKType): _52.PubKey;
                toSDK(message: _52.PubKey): _52.PubKeySDKType;
                fromAmino(object: _52.PubKeyAmino): _52.PubKey;
                toAmino(message: _52.PubKey): _52.PubKeyAmino;
                fromAminoMsg(object: _52.PubKeyAminoMsg): _52.PubKey;
                toAminoMsg(message: _52.PubKey): _52.PubKeyAminoMsg;
                fromProtoMsg(message: _52.PubKeyProtoMsg): _52.PubKey;
                toProto(message: _52.PubKey): Uint8Array;
                toProtoMsg(message: _52.PubKey): _52.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _52.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _52.PrivKey;
                fromJSON(object: any): _52.PrivKey;
                toJSON(message: _52.PrivKey): unknown;
                fromPartial(object: Partial<_52.PrivKey>): _52.PrivKey;
                fromSDK(object: _52.PrivKeySDKType): _52.PrivKey;
                toSDK(message: _52.PrivKey): _52.PrivKeySDKType;
                fromAmino(object: _52.PrivKeyAmino): _52.PrivKey;
                toAmino(message: _52.PrivKey): _52.PrivKeyAmino;
                fromAminoMsg(object: _52.PrivKeyAminoMsg): _52.PrivKey;
                toAminoMsg(message: _52.PrivKey): _52.PrivKeyAminoMsg;
                fromProtoMsg(message: _52.PrivKeyProtoMsg): _52.PrivKey;
                toProto(message: _52.PrivKey): Uint8Array;
                toProtoMsg(message: _52.PrivKey): _52.PrivKeyProtoMsg;
            };
        };
    }
    namespace distribution {
        namespace module {
            const v1: {
                protobufPackage: "cosmos.distribution.module.v1";
                Module: {
                    typeUrl: string;
                    encode(message: _53.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _53.Module;
                    fromJSON(object: any): _53.Module;
                    toJSON(message: _53.Module): unknown;
                    fromPartial(object: Partial<_53.Module>): _53.Module;
                    fromSDK(object: _53.ModuleSDKType): _53.Module;
                    toSDK(message: _53.Module): _53.ModuleSDKType;
                    fromAmino(object: _53.ModuleAmino): _53.Module;
                    toAmino(message: _53.Module): _53.ModuleAmino;
                    fromAminoMsg(object: _53.ModuleAminoMsg): _53.Module;
                    toAminoMsg(message: _53.Module): _53.ModuleAminoMsg;
                    fromProtoMsg(message: _53.ModuleProtoMsg): _53.Module;
                    toProto(message: _53.Module): Uint8Array;
                    toProtoMsg(message: _53.Module): _53.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            Msg: typeof _215.Msg;
            Query: typeof _199.Query;
            QueryClientImpl: typeof _199.QueryClientImpl;
            LCDQueryClient: typeof _182.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _57.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _57.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _57.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _57.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _57.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    communityPoolSpend(value: _57.MsgCommunityPoolSpend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _57.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _57.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _57.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _57.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _57.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _57.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _57.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _57.MsgFundCommunityPool;
                    };
                    updateParams(value: _57.MsgUpdateParams): {
                        typeUrl: string;
                        value: _57.MsgUpdateParams;
                    };
                    communityPoolSpend(value: _57.MsgCommunityPoolSpend): {
                        typeUrl: string;
                        value: _57.MsgCommunityPoolSpend;
                    };
                };
                toJSON: {
                    setWithdrawAddress(value: _57.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdrawDelegatorReward(value: _57.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdrawValidatorCommission(value: _57.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: unknown;
                    };
                    fundCommunityPool(value: _57.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateParams(value: _57.MsgUpdateParams): {
                        typeUrl: string;
                        value: unknown;
                    };
                    communityPoolSpend(value: _57.MsgCommunityPoolSpend): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _57.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _57.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _57.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _57.MsgFundCommunityPool;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _57.MsgUpdateParams;
                    };
                    communityPoolSpend(value: any): {
                        typeUrl: string;
                        value: _57.MsgCommunityPoolSpend;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _57.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _57.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _57.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _57.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _57.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _57.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _57.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _57.MsgFundCommunityPool;
                    };
                    updateParams(value: _57.MsgUpdateParams): {
                        typeUrl: string;
                        value: _57.MsgUpdateParams;
                    };
                    communityPoolSpend(value: _57.MsgCommunityPoolSpend): {
                        typeUrl: string;
                        value: _57.MsgCommunityPoolSpend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: (message: _57.MsgSetWithdrawAddress) => _57.MsgSetWithdrawAddressAmino;
                    fromAmino: (object: _57.MsgSetWithdrawAddressAmino) => _57.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: (message: _57.MsgWithdrawDelegatorReward) => _57.MsgWithdrawDelegatorRewardAmino;
                    fromAmino: (object: _57.MsgWithdrawDelegatorRewardAmino) => _57.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: (message: _57.MsgWithdrawValidatorCommission) => _57.MsgWithdrawValidatorCommissionAmino;
                    fromAmino: (object: _57.MsgWithdrawValidatorCommissionAmino) => _57.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: (message: _57.MsgFundCommunityPool) => _57.MsgFundCommunityPoolAmino;
                    fromAmino: (object: _57.MsgFundCommunityPoolAmino) => _57.MsgFundCommunityPool;
                };
                "/cosmos.distribution.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _57.MsgUpdateParams) => _57.MsgUpdateParamsAmino;
                    fromAmino: (object: _57.MsgUpdateParamsAmino) => _57.MsgUpdateParams;
                };
                "/cosmos.distribution.v1beta1.MsgCommunityPoolSpend": {
                    aminoType: string;
                    toAmino: (message: _57.MsgCommunityPoolSpend) => _57.MsgCommunityPoolSpendAmino;
                    fromAmino: (object: _57.MsgCommunityPoolSpendAmino) => _57.MsgCommunityPoolSpend;
                };
            };
            protobufPackage: "cosmos.distribution.v1beta1";
            MsgSetWithdrawAddress: {
                typeUrl: string;
                encode(message: _57.MsgSetWithdrawAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _57.MsgSetWithdrawAddress;
                fromJSON(object: any): _57.MsgSetWithdrawAddress;
                toJSON(message: _57.MsgSetWithdrawAddress): unknown;
                fromPartial(object: Partial<_57.MsgSetWithdrawAddress>): _57.MsgSetWithdrawAddress;
                fromSDK(object: _57.MsgSetWithdrawAddressSDKType): _57.MsgSetWithdrawAddress;
                toSDK(message: _57.MsgSetWithdrawAddress): _57.MsgSetWithdrawAddressSDKType;
                fromAmino(object: _57.MsgSetWithdrawAddressAmino): _57.MsgSetWithdrawAddress;
                toAmino(message: _57.MsgSetWithdrawAddress): _57.MsgSetWithdrawAddressAmino;
                fromAminoMsg(object: _57.MsgSetWithdrawAddressAminoMsg): _57.MsgSetWithdrawAddress;
                toAminoMsg(message: _57.MsgSetWithdrawAddress): _57.MsgSetWithdrawAddressAminoMsg;
                fromProtoMsg(message: _57.MsgSetWithdrawAddressProtoMsg): _57.MsgSetWithdrawAddress;
                toProto(message: _57.MsgSetWithdrawAddress): Uint8Array;
                toProtoMsg(message: _57.MsgSetWithdrawAddress): _57.MsgSetWithdrawAddressProtoMsg;
            };
            MsgSetWithdrawAddressResponse: {
                typeUrl: string;
                encode(_: _57.MsgSetWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _57.MsgSetWithdrawAddressResponse;
                fromJSON(_: any): _57.MsgSetWithdrawAddressResponse;
                toJSON(_: _57.MsgSetWithdrawAddressResponse): unknown;
                fromPartial(_: Partial<_57.MsgSetWithdrawAddressResponse>): _57.MsgSetWithdrawAddressResponse;
                fromSDK(_: _57.MsgSetWithdrawAddressResponseSDKType): _57.MsgSetWithdrawAddressResponse;
                toSDK(_: _57.MsgSetWithdrawAddressResponse): _57.MsgSetWithdrawAddressResponseSDKType;
                fromAmino(_: _57.MsgSetWithdrawAddressResponseAmino): _57.MsgSetWithdrawAddressResponse;
                toAmino(_: _57.MsgSetWithdrawAddressResponse): _57.MsgSetWithdrawAddressResponseAmino;
                fromAminoMsg(object: _57.MsgSetWithdrawAddressResponseAminoMsg): _57.MsgSetWithdrawAddressResponse;
                toAminoMsg(message: _57.MsgSetWithdrawAddressResponse): _57.MsgSetWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _57.MsgSetWithdrawAddressResponseProtoMsg): _57.MsgSetWithdrawAddressResponse;
                toProto(message: _57.MsgSetWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _57.MsgSetWithdrawAddressResponse): _57.MsgSetWithdrawAddressResponseProtoMsg;
            };
            MsgWithdrawDelegatorReward: {
                typeUrl: string;
                encode(message: _57.MsgWithdrawDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _57.MsgWithdrawDelegatorReward;
                fromJSON(object: any): _57.MsgWithdrawDelegatorReward;
                toJSON(message: _57.MsgWithdrawDelegatorReward): unknown;
                fromPartial(object: Partial<_57.MsgWithdrawDelegatorReward>): _57.MsgWithdrawDelegatorReward;
                fromSDK(object: _57.MsgWithdrawDelegatorRewardSDKType): _57.MsgWithdrawDelegatorReward;
                toSDK(message: _57.MsgWithdrawDelegatorReward): _57.MsgWithdrawDelegatorRewardSDKType;
                fromAmino(object: _57.MsgWithdrawDelegatorRewardAmino): _57.MsgWithdrawDelegatorReward;
                toAmino(message: _57.MsgWithdrawDelegatorReward): _57.MsgWithdrawDelegatorRewardAmino;
                fromAminoMsg(object: _57.MsgWithdrawDelegatorRewardAminoMsg): _57.MsgWithdrawDelegatorReward;
                toAminoMsg(message: _57.MsgWithdrawDelegatorReward): _57.MsgWithdrawDelegatorRewardAminoMsg;
                fromProtoMsg(message: _57.MsgWithdrawDelegatorRewardProtoMsg): _57.MsgWithdrawDelegatorReward;
                toProto(message: _57.MsgWithdrawDelegatorReward): Uint8Array;
                toProtoMsg(message: _57.MsgWithdrawDelegatorReward): _57.MsgWithdrawDelegatorRewardProtoMsg;
            };
            MsgWithdrawDelegatorRewardResponse: {
                typeUrl: string;
                encode(message: _57.MsgWithdrawDelegatorRewardResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _57.MsgWithdrawDelegatorRewardResponse;
                fromJSON(object: any): _57.MsgWithdrawDelegatorRewardResponse;
                toJSON(message: _57.MsgWithdrawDelegatorRewardResponse): unknown;
                fromPartial(object: Partial<_57.MsgWithdrawDelegatorRewardResponse>): _57.MsgWithdrawDelegatorRewardResponse;
                fromSDK(object: _57.MsgWithdrawDelegatorRewardResponseSDKType): _57.MsgWithdrawDelegatorRewardResponse;
                toSDK(message: _57.MsgWithdrawDelegatorRewardResponse): _57.MsgWithdrawDelegatorRewardResponseSDKType;
                fromAmino(object: _57.MsgWithdrawDelegatorRewardResponseAmino): _57.MsgWithdrawDelegatorRewardResponse;
                toAmino(message: _57.MsgWithdrawDelegatorRewardResponse): _57.MsgWithdrawDelegatorRewardResponseAmino;
                fromAminoMsg(object: _57.MsgWithdrawDelegatorRewardResponseAminoMsg): _57.MsgWithdrawDelegatorRewardResponse;
                toAminoMsg(message: _57.MsgWithdrawDelegatorRewardResponse): _57.MsgWithdrawDelegatorRewardResponseAminoMsg;
                fromProtoMsg(message: _57.MsgWithdrawDelegatorRewardResponseProtoMsg): _57.MsgWithdrawDelegatorRewardResponse;
                toProto(message: _57.MsgWithdrawDelegatorRewardResponse): Uint8Array;
                toProtoMsg(message: _57.MsgWithdrawDelegatorRewardResponse): _57.MsgWithdrawDelegatorRewardResponseProtoMsg;
            };
            MsgWithdrawValidatorCommission: {
                typeUrl: string;
                encode(message: _57.MsgWithdrawValidatorCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _57.MsgWithdrawValidatorCommission;
                fromJSON(object: any): _57.MsgWithdrawValidatorCommission;
                toJSON(message: _57.MsgWithdrawValidatorCommission): unknown;
                fromPartial(object: Partial<_57.MsgWithdrawValidatorCommission>): _57.MsgWithdrawValidatorCommission;
                fromSDK(object: _57.MsgWithdrawValidatorCommissionSDKType): _57.MsgWithdrawValidatorCommission;
                toSDK(message: _57.MsgWithdrawValidatorCommission): _57.MsgWithdrawValidatorCommissionSDKType;
                fromAmino(object: _57.MsgWithdrawValidatorCommissionAmino): _57.MsgWithdrawValidatorCommission;
                toAmino(message: _57.MsgWithdrawValidatorCommission): _57.MsgWithdrawValidatorCommissionAmino;
                fromAminoMsg(object: _57.MsgWithdrawValidatorCommissionAminoMsg): _57.MsgWithdrawValidatorCommission;
                toAminoMsg(message: _57.MsgWithdrawValidatorCommission): _57.MsgWithdrawValidatorCommissionAminoMsg;
                fromProtoMsg(message: _57.MsgWithdrawValidatorCommissionProtoMsg): _57.MsgWithdrawValidatorCommission;
                toProto(message: _57.MsgWithdrawValidatorCommission): Uint8Array;
                toProtoMsg(message: _57.MsgWithdrawValidatorCommission): _57.MsgWithdrawValidatorCommissionProtoMsg;
            };
            MsgWithdrawValidatorCommissionResponse: {
                typeUrl: string;
                encode(message: _57.MsgWithdrawValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _57.MsgWithdrawValidatorCommissionResponse;
                fromJSON(object: any): _57.MsgWithdrawValidatorCommissionResponse;
                toJSON(message: _57.MsgWithdrawValidatorCommissionResponse): unknown;
                fromPartial(object: Partial<_57.MsgWithdrawValidatorCommissionResponse>): _57.MsgWithdrawValidatorCommissionResponse;
                fromSDK(object: _57.MsgWithdrawValidatorCommissionResponseSDKType): _57.MsgWithdrawValidatorCommissionResponse;
                toSDK(message: _57.MsgWithdrawValidatorCommissionResponse): _57.MsgWithdrawValidatorCommissionResponseSDKType;
                fromAmino(object: _57.MsgWithdrawValidatorCommissionResponseAmino): _57.MsgWithdrawValidatorCommissionResponse;
                toAmino(message: _57.MsgWithdrawValidatorCommissionResponse): _57.MsgWithdrawValidatorCommissionResponseAmino;
                fromAminoMsg(object: _57.MsgWithdrawValidatorCommissionResponseAminoMsg): _57.MsgWithdrawValidatorCommissionResponse;
                toAminoMsg(message: _57.MsgWithdrawValidatorCommissionResponse): _57.MsgWithdrawValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _57.MsgWithdrawValidatorCommissionResponseProtoMsg): _57.MsgWithdrawValidatorCommissionResponse;
                toProto(message: _57.MsgWithdrawValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _57.MsgWithdrawValidatorCommissionResponse): _57.MsgWithdrawValidatorCommissionResponseProtoMsg;
            };
            MsgFundCommunityPool: {
                typeUrl: string;
                encode(message: _57.MsgFundCommunityPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _57.MsgFundCommunityPool;
                fromJSON(object: any): _57.MsgFundCommunityPool;
                toJSON(message: _57.MsgFundCommunityPool): unknown;
                fromPartial(object: Partial<_57.MsgFundCommunityPool>): _57.MsgFundCommunityPool;
                fromSDK(object: _57.MsgFundCommunityPoolSDKType): _57.MsgFundCommunityPool;
                toSDK(message: _57.MsgFundCommunityPool): _57.MsgFundCommunityPoolSDKType;
                fromAmino(object: _57.MsgFundCommunityPoolAmino): _57.MsgFundCommunityPool;
                toAmino(message: _57.MsgFundCommunityPool): _57.MsgFundCommunityPoolAmino;
                fromAminoMsg(object: _57.MsgFundCommunityPoolAminoMsg): _57.MsgFundCommunityPool;
                toAminoMsg(message: _57.MsgFundCommunityPool): _57.MsgFundCommunityPoolAminoMsg;
                fromProtoMsg(message: _57.MsgFundCommunityPoolProtoMsg): _57.MsgFundCommunityPool;
                toProto(message: _57.MsgFundCommunityPool): Uint8Array;
                toProtoMsg(message: _57.MsgFundCommunityPool): _57.MsgFundCommunityPoolProtoMsg;
            };
            MsgFundCommunityPoolResponse: {
                typeUrl: string;
                encode(_: _57.MsgFundCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _57.MsgFundCommunityPoolResponse;
                fromJSON(_: any): _57.MsgFundCommunityPoolResponse;
                toJSON(_: _57.MsgFundCommunityPoolResponse): unknown;
                fromPartial(_: Partial<_57.MsgFundCommunityPoolResponse>): _57.MsgFundCommunityPoolResponse;
                fromSDK(_: _57.MsgFundCommunityPoolResponseSDKType): _57.MsgFundCommunityPoolResponse;
                toSDK(_: _57.MsgFundCommunityPoolResponse): _57.MsgFundCommunityPoolResponseSDKType;
                fromAmino(_: _57.MsgFundCommunityPoolResponseAmino): _57.MsgFundCommunityPoolResponse;
                toAmino(_: _57.MsgFundCommunityPoolResponse): _57.MsgFundCommunityPoolResponseAmino;
                fromAminoMsg(object: _57.MsgFundCommunityPoolResponseAminoMsg): _57.MsgFundCommunityPoolResponse;
                toAminoMsg(message: _57.MsgFundCommunityPoolResponse): _57.MsgFundCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _57.MsgFundCommunityPoolResponseProtoMsg): _57.MsgFundCommunityPoolResponse;
                toProto(message: _57.MsgFundCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _57.MsgFundCommunityPoolResponse): _57.MsgFundCommunityPoolResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _57.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _57.MsgUpdateParams;
                fromJSON(object: any): _57.MsgUpdateParams;
                toJSON(message: _57.MsgUpdateParams): unknown;
                fromPartial(object: Partial<_57.MsgUpdateParams>): _57.MsgUpdateParams;
                fromSDK(object: _57.MsgUpdateParamsSDKType): _57.MsgUpdateParams;
                toSDK(message: _57.MsgUpdateParams): _57.MsgUpdateParamsSDKType;
                fromAmino(object: _57.MsgUpdateParamsAmino): _57.MsgUpdateParams;
                toAmino(message: _57.MsgUpdateParams): _57.MsgUpdateParamsAmino;
                fromAminoMsg(object: _57.MsgUpdateParamsAminoMsg): _57.MsgUpdateParams;
                toAminoMsg(message: _57.MsgUpdateParams): _57.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _57.MsgUpdateParamsProtoMsg): _57.MsgUpdateParams;
                toProto(message: _57.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _57.MsgUpdateParams): _57.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _57.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _57.MsgUpdateParamsResponse;
                fromJSON(_: any): _57.MsgUpdateParamsResponse;
                toJSON(_: _57.MsgUpdateParamsResponse): unknown;
                fromPartial(_: Partial<_57.MsgUpdateParamsResponse>): _57.MsgUpdateParamsResponse;
                fromSDK(_: _57.MsgUpdateParamsResponseSDKType): _57.MsgUpdateParamsResponse;
                toSDK(_: _57.MsgUpdateParamsResponse): _57.MsgUpdateParamsResponseSDKType;
                fromAmino(_: _57.MsgUpdateParamsResponseAmino): _57.MsgUpdateParamsResponse;
                toAmino(_: _57.MsgUpdateParamsResponse): _57.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _57.MsgUpdateParamsResponseAminoMsg): _57.MsgUpdateParamsResponse;
                toAminoMsg(message: _57.MsgUpdateParamsResponse): _57.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _57.MsgUpdateParamsResponseProtoMsg): _57.MsgUpdateParamsResponse;
                toProto(message: _57.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _57.MsgUpdateParamsResponse): _57.MsgUpdateParamsResponseProtoMsg;
            };
            MsgCommunityPoolSpend: {
                typeUrl: string;
                encode(message: _57.MsgCommunityPoolSpend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _57.MsgCommunityPoolSpend;
                fromJSON(object: any): _57.MsgCommunityPoolSpend;
                toJSON(message: _57.MsgCommunityPoolSpend): unknown;
                fromPartial(object: Partial<_57.MsgCommunityPoolSpend>): _57.MsgCommunityPoolSpend;
                fromSDK(object: _57.MsgCommunityPoolSpendSDKType): _57.MsgCommunityPoolSpend;
                toSDK(message: _57.MsgCommunityPoolSpend): _57.MsgCommunityPoolSpendSDKType;
                fromAmino(object: _57.MsgCommunityPoolSpendAmino): _57.MsgCommunityPoolSpend;
                toAmino(message: _57.MsgCommunityPoolSpend): _57.MsgCommunityPoolSpendAmino;
                fromAminoMsg(object: _57.MsgCommunityPoolSpendAminoMsg): _57.MsgCommunityPoolSpend;
                toAminoMsg(message: _57.MsgCommunityPoolSpend): _57.MsgCommunityPoolSpendAminoMsg;
                fromProtoMsg(message: _57.MsgCommunityPoolSpendProtoMsg): _57.MsgCommunityPoolSpend;
                toProto(message: _57.MsgCommunityPoolSpend): Uint8Array;
                toProtoMsg(message: _57.MsgCommunityPoolSpend): _57.MsgCommunityPoolSpendProtoMsg;
            };
            MsgCommunityPoolSpendResponse: {
                typeUrl: string;
                encode(_: _57.MsgCommunityPoolSpendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _57.MsgCommunityPoolSpendResponse;
                fromJSON(_: any): _57.MsgCommunityPoolSpendResponse;
                toJSON(_: _57.MsgCommunityPoolSpendResponse): unknown;
                fromPartial(_: Partial<_57.MsgCommunityPoolSpendResponse>): _57.MsgCommunityPoolSpendResponse;
                fromSDK(_: _57.MsgCommunityPoolSpendResponseSDKType): _57.MsgCommunityPoolSpendResponse;
                toSDK(_: _57.MsgCommunityPoolSpendResponse): _57.MsgCommunityPoolSpendResponseSDKType;
                fromAmino(_: _57.MsgCommunityPoolSpendResponseAmino): _57.MsgCommunityPoolSpendResponse;
                toAmino(_: _57.MsgCommunityPoolSpendResponse): _57.MsgCommunityPoolSpendResponseAmino;
                fromAminoMsg(object: _57.MsgCommunityPoolSpendResponseAminoMsg): _57.MsgCommunityPoolSpendResponse;
                toAminoMsg(message: _57.MsgCommunityPoolSpendResponse): _57.MsgCommunityPoolSpendResponseAminoMsg;
                fromProtoMsg(message: _57.MsgCommunityPoolSpendResponseProtoMsg): _57.MsgCommunityPoolSpendResponse;
                toProto(message: _57.MsgCommunityPoolSpendResponse): Uint8Array;
                toProtoMsg(message: _57.MsgCommunityPoolSpendResponse): _57.MsgCommunityPoolSpendResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _56.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _56.QueryParamsRequest;
                fromJSON(_: any): _56.QueryParamsRequest;
                toJSON(_: _56.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_56.QueryParamsRequest>): _56.QueryParamsRequest;
                fromSDK(_: _56.QueryParamsRequestSDKType): _56.QueryParamsRequest;
                toSDK(_: _56.QueryParamsRequest): _56.QueryParamsRequestSDKType;
                fromAmino(_: _56.QueryParamsRequestAmino): _56.QueryParamsRequest;
                toAmino(_: _56.QueryParamsRequest): _56.QueryParamsRequestAmino;
                fromAminoMsg(object: _56.QueryParamsRequestAminoMsg): _56.QueryParamsRequest;
                toAminoMsg(message: _56.QueryParamsRequest): _56.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _56.QueryParamsRequestProtoMsg): _56.QueryParamsRequest;
                toProto(message: _56.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _56.QueryParamsRequest): _56.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _56.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _56.QueryParamsResponse;
                fromJSON(object: any): _56.QueryParamsResponse;
                toJSON(message: _56.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_56.QueryParamsResponse>): _56.QueryParamsResponse;
                fromSDK(object: _56.QueryParamsResponseSDKType): _56.QueryParamsResponse;
                toSDK(message: _56.QueryParamsResponse): _56.QueryParamsResponseSDKType;
                fromAmino(object: _56.QueryParamsResponseAmino): _56.QueryParamsResponse;
                toAmino(message: _56.QueryParamsResponse): _56.QueryParamsResponseAmino;
                fromAminoMsg(object: _56.QueryParamsResponseAminoMsg): _56.QueryParamsResponse;
                toAminoMsg(message: _56.QueryParamsResponse): _56.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _56.QueryParamsResponseProtoMsg): _56.QueryParamsResponse;
                toProto(message: _56.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _56.QueryParamsResponse): _56.QueryParamsResponseProtoMsg;
            };
            QueryValidatorDistributionInfoRequest: {
                typeUrl: string;
                encode(message: _56.QueryValidatorDistributionInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _56.QueryValidatorDistributionInfoRequest;
                fromJSON(object: any): _56.QueryValidatorDistributionInfoRequest;
                toJSON(message: _56.QueryValidatorDistributionInfoRequest): unknown;
                fromPartial(object: Partial<_56.QueryValidatorDistributionInfoRequest>): _56.QueryValidatorDistributionInfoRequest;
                fromSDK(object: _56.QueryValidatorDistributionInfoRequestSDKType): _56.QueryValidatorDistributionInfoRequest;
                toSDK(message: _56.QueryValidatorDistributionInfoRequest): _56.QueryValidatorDistributionInfoRequestSDKType;
                fromAmino(object: _56.QueryValidatorDistributionInfoRequestAmino): _56.QueryValidatorDistributionInfoRequest;
                toAmino(message: _56.QueryValidatorDistributionInfoRequest): _56.QueryValidatorDistributionInfoRequestAmino;
                fromAminoMsg(object: _56.QueryValidatorDistributionInfoRequestAminoMsg): _56.QueryValidatorDistributionInfoRequest;
                toAminoMsg(message: _56.QueryValidatorDistributionInfoRequest): _56.QueryValidatorDistributionInfoRequestAminoMsg;
                fromProtoMsg(message: _56.QueryValidatorDistributionInfoRequestProtoMsg): _56.QueryValidatorDistributionInfoRequest;
                toProto(message: _56.QueryValidatorDistributionInfoRequest): Uint8Array;
                toProtoMsg(message: _56.QueryValidatorDistributionInfoRequest): _56.QueryValidatorDistributionInfoRequestProtoMsg;
            };
            QueryValidatorDistributionInfoResponse: {
                typeUrl: string;
                encode(message: _56.QueryValidatorDistributionInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _56.QueryValidatorDistributionInfoResponse;
                fromJSON(object: any): _56.QueryValidatorDistributionInfoResponse;
                toJSON(message: _56.QueryValidatorDistributionInfoResponse): unknown;
                fromPartial(object: Partial<_56.QueryValidatorDistributionInfoResponse>): _56.QueryValidatorDistributionInfoResponse;
                fromSDK(object: _56.QueryValidatorDistributionInfoResponseSDKType): _56.QueryValidatorDistributionInfoResponse;
                toSDK(message: _56.QueryValidatorDistributionInfoResponse): _56.QueryValidatorDistributionInfoResponseSDKType;
                fromAmino(object: _56.QueryValidatorDistributionInfoResponseAmino): _56.QueryValidatorDistributionInfoResponse;
                toAmino(message: _56.QueryValidatorDistributionInfoResponse): _56.QueryValidatorDistributionInfoResponseAmino;
                fromAminoMsg(object: _56.QueryValidatorDistributionInfoResponseAminoMsg): _56.QueryValidatorDistributionInfoResponse;
                toAminoMsg(message: _56.QueryValidatorDistributionInfoResponse): _56.QueryValidatorDistributionInfoResponseAminoMsg;
                fromProtoMsg(message: _56.QueryValidatorDistributionInfoResponseProtoMsg): _56.QueryValidatorDistributionInfoResponse;
                toProto(message: _56.QueryValidatorDistributionInfoResponse): Uint8Array;
                toProtoMsg(message: _56.QueryValidatorDistributionInfoResponse): _56.QueryValidatorDistributionInfoResponseProtoMsg;
            };
            QueryValidatorOutstandingRewardsRequest: {
                typeUrl: string;
                encode(message: _56.QueryValidatorOutstandingRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _56.QueryValidatorOutstandingRewardsRequest;
                fromJSON(object: any): _56.QueryValidatorOutstandingRewardsRequest;
                toJSON(message: _56.QueryValidatorOutstandingRewardsRequest): unknown;
                fromPartial(object: Partial<_56.QueryValidatorOutstandingRewardsRequest>): _56.QueryValidatorOutstandingRewardsRequest;
                fromSDK(object: _56.QueryValidatorOutstandingRewardsRequestSDKType): _56.QueryValidatorOutstandingRewardsRequest;
                toSDK(message: _56.QueryValidatorOutstandingRewardsRequest): _56.QueryValidatorOutstandingRewardsRequestSDKType;
                fromAmino(object: _56.QueryValidatorOutstandingRewardsRequestAmino): _56.QueryValidatorOutstandingRewardsRequest;
                toAmino(message: _56.QueryValidatorOutstandingRewardsRequest): _56.QueryValidatorOutstandingRewardsRequestAmino;
                fromAminoMsg(object: _56.QueryValidatorOutstandingRewardsRequestAminoMsg): _56.QueryValidatorOutstandingRewardsRequest;
                toAminoMsg(message: _56.QueryValidatorOutstandingRewardsRequest): _56.QueryValidatorOutstandingRewardsRequestAminoMsg;
                fromProtoMsg(message: _56.QueryValidatorOutstandingRewardsRequestProtoMsg): _56.QueryValidatorOutstandingRewardsRequest;
                toProto(message: _56.QueryValidatorOutstandingRewardsRequest): Uint8Array;
                toProtoMsg(message: _56.QueryValidatorOutstandingRewardsRequest): _56.QueryValidatorOutstandingRewardsRequestProtoMsg;
            };
            QueryValidatorOutstandingRewardsResponse: {
                typeUrl: string;
                encode(message: _56.QueryValidatorOutstandingRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _56.QueryValidatorOutstandingRewardsResponse;
                fromJSON(object: any): _56.QueryValidatorOutstandingRewardsResponse;
                toJSON(message: _56.QueryValidatorOutstandingRewardsResponse): unknown;
                fromPartial(object: Partial<_56.QueryValidatorOutstandingRewardsResponse>): _56.QueryValidatorOutstandingRewardsResponse;
                fromSDK(object: _56.QueryValidatorOutstandingRewardsResponseSDKType): _56.QueryValidatorOutstandingRewardsResponse;
                toSDK(message: _56.QueryValidatorOutstandingRewardsResponse): _56.QueryValidatorOutstandingRewardsResponseSDKType;
                fromAmino(object: _56.QueryValidatorOutstandingRewardsResponseAmino): _56.QueryValidatorOutstandingRewardsResponse;
                toAmino(message: _56.QueryValidatorOutstandingRewardsResponse): _56.QueryValidatorOutstandingRewardsResponseAmino;
                fromAminoMsg(object: _56.QueryValidatorOutstandingRewardsResponseAminoMsg): _56.QueryValidatorOutstandingRewardsResponse;
                toAminoMsg(message: _56.QueryValidatorOutstandingRewardsResponse): _56.QueryValidatorOutstandingRewardsResponseAminoMsg;
                fromProtoMsg(message: _56.QueryValidatorOutstandingRewardsResponseProtoMsg): _56.QueryValidatorOutstandingRewardsResponse;
                toProto(message: _56.QueryValidatorOutstandingRewardsResponse): Uint8Array;
                toProtoMsg(message: _56.QueryValidatorOutstandingRewardsResponse): _56.QueryValidatorOutstandingRewardsResponseProtoMsg;
            };
            QueryValidatorCommissionRequest: {
                typeUrl: string;
                encode(message: _56.QueryValidatorCommissionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _56.QueryValidatorCommissionRequest;
                fromJSON(object: any): _56.QueryValidatorCommissionRequest;
                toJSON(message: _56.QueryValidatorCommissionRequest): unknown;
                fromPartial(object: Partial<_56.QueryValidatorCommissionRequest>): _56.QueryValidatorCommissionRequest;
                fromSDK(object: _56.QueryValidatorCommissionRequestSDKType): _56.QueryValidatorCommissionRequest;
                toSDK(message: _56.QueryValidatorCommissionRequest): _56.QueryValidatorCommissionRequestSDKType;
                fromAmino(object: _56.QueryValidatorCommissionRequestAmino): _56.QueryValidatorCommissionRequest;
                toAmino(message: _56.QueryValidatorCommissionRequest): _56.QueryValidatorCommissionRequestAmino;
                fromAminoMsg(object: _56.QueryValidatorCommissionRequestAminoMsg): _56.QueryValidatorCommissionRequest;
                toAminoMsg(message: _56.QueryValidatorCommissionRequest): _56.QueryValidatorCommissionRequestAminoMsg;
                fromProtoMsg(message: _56.QueryValidatorCommissionRequestProtoMsg): _56.QueryValidatorCommissionRequest;
                toProto(message: _56.QueryValidatorCommissionRequest): Uint8Array;
                toProtoMsg(message: _56.QueryValidatorCommissionRequest): _56.QueryValidatorCommissionRequestProtoMsg;
            };
            QueryValidatorCommissionResponse: {
                typeUrl: string;
                encode(message: _56.QueryValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _56.QueryValidatorCommissionResponse;
                fromJSON(object: any): _56.QueryValidatorCommissionResponse;
                toJSON(message: _56.QueryValidatorCommissionResponse): unknown;
                fromPartial(object: Partial<_56.QueryValidatorCommissionResponse>): _56.QueryValidatorCommissionResponse;
                fromSDK(object: _56.QueryValidatorCommissionResponseSDKType): _56.QueryValidatorCommissionResponse;
                toSDK(message: _56.QueryValidatorCommissionResponse): _56.QueryValidatorCommissionResponseSDKType;
                fromAmino(object: _56.QueryValidatorCommissionResponseAmino): _56.QueryValidatorCommissionResponse;
                toAmino(message: _56.QueryValidatorCommissionResponse): _56.QueryValidatorCommissionResponseAmino;
                fromAminoMsg(object: _56.QueryValidatorCommissionResponseAminoMsg): _56.QueryValidatorCommissionResponse;
                toAminoMsg(message: _56.QueryValidatorCommissionResponse): _56.QueryValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _56.QueryValidatorCommissionResponseProtoMsg): _56.QueryValidatorCommissionResponse;
                toProto(message: _56.QueryValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _56.QueryValidatorCommissionResponse): _56.QueryValidatorCommissionResponseProtoMsg;
            };
            QueryValidatorSlashesRequest: {
                typeUrl: string;
                encode(message: _56.QueryValidatorSlashesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _56.QueryValidatorSlashesRequest;
                fromJSON(object: any): _56.QueryValidatorSlashesRequest;
                toJSON(message: _56.QueryValidatorSlashesRequest): unknown;
                fromPartial(object: Partial<_56.QueryValidatorSlashesRequest>): _56.QueryValidatorSlashesRequest;
                fromSDK(object: _56.QueryValidatorSlashesRequestSDKType): _56.QueryValidatorSlashesRequest;
                toSDK(message: _56.QueryValidatorSlashesRequest): _56.QueryValidatorSlashesRequestSDKType;
                fromAmino(object: _56.QueryValidatorSlashesRequestAmino): _56.QueryValidatorSlashesRequest;
                toAmino(message: _56.QueryValidatorSlashesRequest): _56.QueryValidatorSlashesRequestAmino;
                fromAminoMsg(object: _56.QueryValidatorSlashesRequestAminoMsg): _56.QueryValidatorSlashesRequest;
                toAminoMsg(message: _56.QueryValidatorSlashesRequest): _56.QueryValidatorSlashesRequestAminoMsg;
                fromProtoMsg(message: _56.QueryValidatorSlashesRequestProtoMsg): _56.QueryValidatorSlashesRequest;
                toProto(message: _56.QueryValidatorSlashesRequest): Uint8Array;
                toProtoMsg(message: _56.QueryValidatorSlashesRequest): _56.QueryValidatorSlashesRequestProtoMsg;
            };
            QueryValidatorSlashesResponse: {
                typeUrl: string;
                encode(message: _56.QueryValidatorSlashesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _56.QueryValidatorSlashesResponse;
                fromJSON(object: any): _56.QueryValidatorSlashesResponse;
                toJSON(message: _56.QueryValidatorSlashesResponse): unknown;
                fromPartial(object: Partial<_56.QueryValidatorSlashesResponse>): _56.QueryValidatorSlashesResponse;
                fromSDK(object: _56.QueryValidatorSlashesResponseSDKType): _56.QueryValidatorSlashesResponse;
                toSDK(message: _56.QueryValidatorSlashesResponse): _56.QueryValidatorSlashesResponseSDKType;
                fromAmino(object: _56.QueryValidatorSlashesResponseAmino): _56.QueryValidatorSlashesResponse;
                toAmino(message: _56.QueryValidatorSlashesResponse): _56.QueryValidatorSlashesResponseAmino;
                fromAminoMsg(object: _56.QueryValidatorSlashesResponseAminoMsg): _56.QueryValidatorSlashesResponse;
                toAminoMsg(message: _56.QueryValidatorSlashesResponse): _56.QueryValidatorSlashesResponseAminoMsg;
                fromProtoMsg(message: _56.QueryValidatorSlashesResponseProtoMsg): _56.QueryValidatorSlashesResponse;
                toProto(message: _56.QueryValidatorSlashesResponse): Uint8Array;
                toProtoMsg(message: _56.QueryValidatorSlashesResponse): _56.QueryValidatorSlashesResponseProtoMsg;
            };
            QueryDelegationRewardsRequest: {
                typeUrl: string;
                encode(message: _56.QueryDelegationRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _56.QueryDelegationRewardsRequest;
                fromJSON(object: any): _56.QueryDelegationRewardsRequest;
                toJSON(message: _56.QueryDelegationRewardsRequest): unknown;
                fromPartial(object: Partial<_56.QueryDelegationRewardsRequest>): _56.QueryDelegationRewardsRequest;
                fromSDK(object: _56.QueryDelegationRewardsRequestSDKType): _56.QueryDelegationRewardsRequest;
                toSDK(message: _56.QueryDelegationRewardsRequest): _56.QueryDelegationRewardsRequestSDKType;
                fromAmino(object: _56.QueryDelegationRewardsRequestAmino): _56.QueryDelegationRewardsRequest;
                toAmino(message: _56.QueryDelegationRewardsRequest): _56.QueryDelegationRewardsRequestAmino;
                fromAminoMsg(object: _56.QueryDelegationRewardsRequestAminoMsg): _56.QueryDelegationRewardsRequest;
                toAminoMsg(message: _56.QueryDelegationRewardsRequest): _56.QueryDelegationRewardsRequestAminoMsg;
                fromProtoMsg(message: _56.QueryDelegationRewardsRequestProtoMsg): _56.QueryDelegationRewardsRequest;
                toProto(message: _56.QueryDelegationRewardsRequest): Uint8Array;
                toProtoMsg(message: _56.QueryDelegationRewardsRequest): _56.QueryDelegationRewardsRequestProtoMsg;
            };
            QueryDelegationRewardsResponse: {
                typeUrl: string;
                encode(message: _56.QueryDelegationRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _56.QueryDelegationRewardsResponse;
                fromJSON(object: any): _56.QueryDelegationRewardsResponse;
                toJSON(message: _56.QueryDelegationRewardsResponse): unknown;
                fromPartial(object: Partial<_56.QueryDelegationRewardsResponse>): _56.QueryDelegationRewardsResponse;
                fromSDK(object: _56.QueryDelegationRewardsResponseSDKType): _56.QueryDelegationRewardsResponse;
                toSDK(message: _56.QueryDelegationRewardsResponse): _56.QueryDelegationRewardsResponseSDKType;
                fromAmino(object: _56.QueryDelegationRewardsResponseAmino): _56.QueryDelegationRewardsResponse;
                toAmino(message: _56.QueryDelegationRewardsResponse): _56.QueryDelegationRewardsResponseAmino;
                fromAminoMsg(object: _56.QueryDelegationRewardsResponseAminoMsg): _56.QueryDelegationRewardsResponse;
                toAminoMsg(message: _56.QueryDelegationRewardsResponse): _56.QueryDelegationRewardsResponseAminoMsg;
                fromProtoMsg(message: _56.QueryDelegationRewardsResponseProtoMsg): _56.QueryDelegationRewardsResponse;
                toProto(message: _56.QueryDelegationRewardsResponse): Uint8Array;
                toProtoMsg(message: _56.QueryDelegationRewardsResponse): _56.QueryDelegationRewardsResponseProtoMsg;
            };
            QueryDelegationTotalRewardsRequest: {
                typeUrl: string;
                encode(message: _56.QueryDelegationTotalRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _56.QueryDelegationTotalRewardsRequest;
                fromJSON(object: any): _56.QueryDelegationTotalRewardsRequest;
                toJSON(message: _56.QueryDelegationTotalRewardsRequest): unknown;
                fromPartial(object: Partial<_56.QueryDelegationTotalRewardsRequest>): _56.QueryDelegationTotalRewardsRequest;
                fromSDK(object: _56.QueryDelegationTotalRewardsRequestSDKType): _56.QueryDelegationTotalRewardsRequest;
                toSDK(message: _56.QueryDelegationTotalRewardsRequest): _56.QueryDelegationTotalRewardsRequestSDKType;
                fromAmino(object: _56.QueryDelegationTotalRewardsRequestAmino): _56.QueryDelegationTotalRewardsRequest;
                toAmino(message: _56.QueryDelegationTotalRewardsRequest): _56.QueryDelegationTotalRewardsRequestAmino;
                fromAminoMsg(object: _56.QueryDelegationTotalRewardsRequestAminoMsg): _56.QueryDelegationTotalRewardsRequest;
                toAminoMsg(message: _56.QueryDelegationTotalRewardsRequest): _56.QueryDelegationTotalRewardsRequestAminoMsg;
                fromProtoMsg(message: _56.QueryDelegationTotalRewardsRequestProtoMsg): _56.QueryDelegationTotalRewardsRequest;
                toProto(message: _56.QueryDelegationTotalRewardsRequest): Uint8Array;
                toProtoMsg(message: _56.QueryDelegationTotalRewardsRequest): _56.QueryDelegationTotalRewardsRequestProtoMsg;
            };
            QueryDelegationTotalRewardsResponse: {
                typeUrl: string;
                encode(message: _56.QueryDelegationTotalRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _56.QueryDelegationTotalRewardsResponse;
                fromJSON(object: any): _56.QueryDelegationTotalRewardsResponse;
                toJSON(message: _56.QueryDelegationTotalRewardsResponse): unknown;
                fromPartial(object: Partial<_56.QueryDelegationTotalRewardsResponse>): _56.QueryDelegationTotalRewardsResponse;
                fromSDK(object: _56.QueryDelegationTotalRewardsResponseSDKType): _56.QueryDelegationTotalRewardsResponse;
                toSDK(message: _56.QueryDelegationTotalRewardsResponse): _56.QueryDelegationTotalRewardsResponseSDKType;
                fromAmino(object: _56.QueryDelegationTotalRewardsResponseAmino): _56.QueryDelegationTotalRewardsResponse;
                toAmino(message: _56.QueryDelegationTotalRewardsResponse): _56.QueryDelegationTotalRewardsResponseAmino;
                fromAminoMsg(object: _56.QueryDelegationTotalRewardsResponseAminoMsg): _56.QueryDelegationTotalRewardsResponse;
                toAminoMsg(message: _56.QueryDelegationTotalRewardsResponse): _56.QueryDelegationTotalRewardsResponseAminoMsg;
                fromProtoMsg(message: _56.QueryDelegationTotalRewardsResponseProtoMsg): _56.QueryDelegationTotalRewardsResponse;
                toProto(message: _56.QueryDelegationTotalRewardsResponse): Uint8Array;
                toProtoMsg(message: _56.QueryDelegationTotalRewardsResponse): _56.QueryDelegationTotalRewardsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _56.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _56.QueryDelegatorValidatorsRequest;
                fromJSON(object: any): _56.QueryDelegatorValidatorsRequest;
                toJSON(message: _56.QueryDelegatorValidatorsRequest): unknown;
                fromPartial(object: Partial<_56.QueryDelegatorValidatorsRequest>): _56.QueryDelegatorValidatorsRequest;
                fromSDK(object: _56.QueryDelegatorValidatorsRequestSDKType): _56.QueryDelegatorValidatorsRequest;
                toSDK(message: _56.QueryDelegatorValidatorsRequest): _56.QueryDelegatorValidatorsRequestSDKType;
                fromAmino(object: _56.QueryDelegatorValidatorsRequestAmino): _56.QueryDelegatorValidatorsRequest;
                toAmino(message: _56.QueryDelegatorValidatorsRequest): _56.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _56.QueryDelegatorValidatorsRequestAminoMsg): _56.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _56.QueryDelegatorValidatorsRequest): _56.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _56.QueryDelegatorValidatorsRequestProtoMsg): _56.QueryDelegatorValidatorsRequest;
                toProto(message: _56.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _56.QueryDelegatorValidatorsRequest): _56.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _56.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _56.QueryDelegatorValidatorsResponse;
                fromJSON(object: any): _56.QueryDelegatorValidatorsResponse;
                toJSON(message: _56.QueryDelegatorValidatorsResponse): unknown;
                fromPartial(object: Partial<_56.QueryDelegatorValidatorsResponse>): _56.QueryDelegatorValidatorsResponse;
                fromSDK(object: _56.QueryDelegatorValidatorsResponseSDKType): _56.QueryDelegatorValidatorsResponse;
                toSDK(message: _56.QueryDelegatorValidatorsResponse): _56.QueryDelegatorValidatorsResponseSDKType;
                fromAmino(object: _56.QueryDelegatorValidatorsResponseAmino): _56.QueryDelegatorValidatorsResponse;
                toAmino(message: _56.QueryDelegatorValidatorsResponse): _56.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _56.QueryDelegatorValidatorsResponseAminoMsg): _56.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _56.QueryDelegatorValidatorsResponse): _56.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _56.QueryDelegatorValidatorsResponseProtoMsg): _56.QueryDelegatorValidatorsResponse;
                toProto(message: _56.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _56.QueryDelegatorValidatorsResponse): _56.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorWithdrawAddressRequest: {
                typeUrl: string;
                encode(message: _56.QueryDelegatorWithdrawAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _56.QueryDelegatorWithdrawAddressRequest;
                fromJSON(object: any): _56.QueryDelegatorWithdrawAddressRequest;
                toJSON(message: _56.QueryDelegatorWithdrawAddressRequest): unknown;
                fromPartial(object: Partial<_56.QueryDelegatorWithdrawAddressRequest>): _56.QueryDelegatorWithdrawAddressRequest;
                fromSDK(object: _56.QueryDelegatorWithdrawAddressRequestSDKType): _56.QueryDelegatorWithdrawAddressRequest;
                toSDK(message: _56.QueryDelegatorWithdrawAddressRequest): _56.QueryDelegatorWithdrawAddressRequestSDKType;
                fromAmino(object: _56.QueryDelegatorWithdrawAddressRequestAmino): _56.QueryDelegatorWithdrawAddressRequest;
                toAmino(message: _56.QueryDelegatorWithdrawAddressRequest): _56.QueryDelegatorWithdrawAddressRequestAmino;
                fromAminoMsg(object: _56.QueryDelegatorWithdrawAddressRequestAminoMsg): _56.QueryDelegatorWithdrawAddressRequest;
                toAminoMsg(message: _56.QueryDelegatorWithdrawAddressRequest): _56.QueryDelegatorWithdrawAddressRequestAminoMsg;
                fromProtoMsg(message: _56.QueryDelegatorWithdrawAddressRequestProtoMsg): _56.QueryDelegatorWithdrawAddressRequest;
                toProto(message: _56.QueryDelegatorWithdrawAddressRequest): Uint8Array;
                toProtoMsg(message: _56.QueryDelegatorWithdrawAddressRequest): _56.QueryDelegatorWithdrawAddressRequestProtoMsg;
            };
            QueryDelegatorWithdrawAddressResponse: {
                typeUrl: string;
                encode(message: _56.QueryDelegatorWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _56.QueryDelegatorWithdrawAddressResponse;
                fromJSON(object: any): _56.QueryDelegatorWithdrawAddressResponse;
                toJSON(message: _56.QueryDelegatorWithdrawAddressResponse): unknown;
                fromPartial(object: Partial<_56.QueryDelegatorWithdrawAddressResponse>): _56.QueryDelegatorWithdrawAddressResponse;
                fromSDK(object: _56.QueryDelegatorWithdrawAddressResponseSDKType): _56.QueryDelegatorWithdrawAddressResponse;
                toSDK(message: _56.QueryDelegatorWithdrawAddressResponse): _56.QueryDelegatorWithdrawAddressResponseSDKType;
                fromAmino(object: _56.QueryDelegatorWithdrawAddressResponseAmino): _56.QueryDelegatorWithdrawAddressResponse;
                toAmino(message: _56.QueryDelegatorWithdrawAddressResponse): _56.QueryDelegatorWithdrawAddressResponseAmino;
                fromAminoMsg(object: _56.QueryDelegatorWithdrawAddressResponseAminoMsg): _56.QueryDelegatorWithdrawAddressResponse;
                toAminoMsg(message: _56.QueryDelegatorWithdrawAddressResponse): _56.QueryDelegatorWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _56.QueryDelegatorWithdrawAddressResponseProtoMsg): _56.QueryDelegatorWithdrawAddressResponse;
                toProto(message: _56.QueryDelegatorWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _56.QueryDelegatorWithdrawAddressResponse): _56.QueryDelegatorWithdrawAddressResponseProtoMsg;
            };
            QueryCommunityPoolRequest: {
                typeUrl: string;
                encode(_: _56.QueryCommunityPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _56.QueryCommunityPoolRequest;
                fromJSON(_: any): _56.QueryCommunityPoolRequest;
                toJSON(_: _56.QueryCommunityPoolRequest): unknown;
                fromPartial(_: Partial<_56.QueryCommunityPoolRequest>): _56.QueryCommunityPoolRequest;
                fromSDK(_: _56.QueryCommunityPoolRequestSDKType): _56.QueryCommunityPoolRequest;
                toSDK(_: _56.QueryCommunityPoolRequest): _56.QueryCommunityPoolRequestSDKType;
                fromAmino(_: _56.QueryCommunityPoolRequestAmino): _56.QueryCommunityPoolRequest;
                toAmino(_: _56.QueryCommunityPoolRequest): _56.QueryCommunityPoolRequestAmino;
                fromAminoMsg(object: _56.QueryCommunityPoolRequestAminoMsg): _56.QueryCommunityPoolRequest;
                toAminoMsg(message: _56.QueryCommunityPoolRequest): _56.QueryCommunityPoolRequestAminoMsg;
                fromProtoMsg(message: _56.QueryCommunityPoolRequestProtoMsg): _56.QueryCommunityPoolRequest;
                toProto(message: _56.QueryCommunityPoolRequest): Uint8Array;
                toProtoMsg(message: _56.QueryCommunityPoolRequest): _56.QueryCommunityPoolRequestProtoMsg;
            };
            QueryCommunityPoolResponse: {
                typeUrl: string;
                encode(message: _56.QueryCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _56.QueryCommunityPoolResponse;
                fromJSON(object: any): _56.QueryCommunityPoolResponse;
                toJSON(message: _56.QueryCommunityPoolResponse): unknown;
                fromPartial(object: Partial<_56.QueryCommunityPoolResponse>): _56.QueryCommunityPoolResponse;
                fromSDK(object: _56.QueryCommunityPoolResponseSDKType): _56.QueryCommunityPoolResponse;
                toSDK(message: _56.QueryCommunityPoolResponse): _56.QueryCommunityPoolResponseSDKType;
                fromAmino(object: _56.QueryCommunityPoolResponseAmino): _56.QueryCommunityPoolResponse;
                toAmino(message: _56.QueryCommunityPoolResponse): _56.QueryCommunityPoolResponseAmino;
                fromAminoMsg(object: _56.QueryCommunityPoolResponseAminoMsg): _56.QueryCommunityPoolResponse;
                toAminoMsg(message: _56.QueryCommunityPoolResponse): _56.QueryCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _56.QueryCommunityPoolResponseProtoMsg): _56.QueryCommunityPoolResponse;
                toProto(message: _56.QueryCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _56.QueryCommunityPoolResponse): _56.QueryCommunityPoolResponseProtoMsg;
            };
            DelegatorWithdrawInfo: {
                typeUrl: string;
                encode(message: _55.DelegatorWithdrawInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _55.DelegatorWithdrawInfo;
                fromJSON(object: any): _55.DelegatorWithdrawInfo;
                toJSON(message: _55.DelegatorWithdrawInfo): unknown;
                fromPartial(object: Partial<_55.DelegatorWithdrawInfo>): _55.DelegatorWithdrawInfo;
                fromSDK(object: _55.DelegatorWithdrawInfoSDKType): _55.DelegatorWithdrawInfo;
                toSDK(message: _55.DelegatorWithdrawInfo): _55.DelegatorWithdrawInfoSDKType;
                fromAmino(object: _55.DelegatorWithdrawInfoAmino): _55.DelegatorWithdrawInfo;
                toAmino(message: _55.DelegatorWithdrawInfo): _55.DelegatorWithdrawInfoAmino;
                fromAminoMsg(object: _55.DelegatorWithdrawInfoAminoMsg): _55.DelegatorWithdrawInfo;
                toAminoMsg(message: _55.DelegatorWithdrawInfo): _55.DelegatorWithdrawInfoAminoMsg;
                fromProtoMsg(message: _55.DelegatorWithdrawInfoProtoMsg): _55.DelegatorWithdrawInfo;
                toProto(message: _55.DelegatorWithdrawInfo): Uint8Array;
                toProtoMsg(message: _55.DelegatorWithdrawInfo): _55.DelegatorWithdrawInfoProtoMsg;
            };
            ValidatorOutstandingRewardsRecord: {
                typeUrl: string;
                encode(message: _55.ValidatorOutstandingRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _55.ValidatorOutstandingRewardsRecord;
                fromJSON(object: any): _55.ValidatorOutstandingRewardsRecord;
                toJSON(message: _55.ValidatorOutstandingRewardsRecord): unknown;
                fromPartial(object: Partial<_55.ValidatorOutstandingRewardsRecord>): _55.ValidatorOutstandingRewardsRecord;
                fromSDK(object: _55.ValidatorOutstandingRewardsRecordSDKType): _55.ValidatorOutstandingRewardsRecord;
                toSDK(message: _55.ValidatorOutstandingRewardsRecord): _55.ValidatorOutstandingRewardsRecordSDKType;
                fromAmino(object: _55.ValidatorOutstandingRewardsRecordAmino): _55.ValidatorOutstandingRewardsRecord;
                toAmino(message: _55.ValidatorOutstandingRewardsRecord): _55.ValidatorOutstandingRewardsRecordAmino;
                fromAminoMsg(object: _55.ValidatorOutstandingRewardsRecordAminoMsg): _55.ValidatorOutstandingRewardsRecord;
                toAminoMsg(message: _55.ValidatorOutstandingRewardsRecord): _55.ValidatorOutstandingRewardsRecordAminoMsg;
                fromProtoMsg(message: _55.ValidatorOutstandingRewardsRecordProtoMsg): _55.ValidatorOutstandingRewardsRecord;
                toProto(message: _55.ValidatorOutstandingRewardsRecord): Uint8Array;
                toProtoMsg(message: _55.ValidatorOutstandingRewardsRecord): _55.ValidatorOutstandingRewardsRecordProtoMsg;
            };
            ValidatorAccumulatedCommissionRecord: {
                typeUrl: string;
                encode(message: _55.ValidatorAccumulatedCommissionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _55.ValidatorAccumulatedCommissionRecord;
                fromJSON(object: any): _55.ValidatorAccumulatedCommissionRecord;
                toJSON(message: _55.ValidatorAccumulatedCommissionRecord): unknown;
                fromPartial(object: Partial<_55.ValidatorAccumulatedCommissionRecord>): _55.ValidatorAccumulatedCommissionRecord;
                fromSDK(object: _55.ValidatorAccumulatedCommissionRecordSDKType): _55.ValidatorAccumulatedCommissionRecord;
                toSDK(message: _55.ValidatorAccumulatedCommissionRecord): _55.ValidatorAccumulatedCommissionRecordSDKType;
                fromAmino(object: _55.ValidatorAccumulatedCommissionRecordAmino): _55.ValidatorAccumulatedCommissionRecord;
                toAmino(message: _55.ValidatorAccumulatedCommissionRecord): _55.ValidatorAccumulatedCommissionRecordAmino;
                fromAminoMsg(object: _55.ValidatorAccumulatedCommissionRecordAminoMsg): _55.ValidatorAccumulatedCommissionRecord;
                toAminoMsg(message: _55.ValidatorAccumulatedCommissionRecord): _55.ValidatorAccumulatedCommissionRecordAminoMsg;
                fromProtoMsg(message: _55.ValidatorAccumulatedCommissionRecordProtoMsg): _55.ValidatorAccumulatedCommissionRecord;
                toProto(message: _55.ValidatorAccumulatedCommissionRecord): Uint8Array;
                toProtoMsg(message: _55.ValidatorAccumulatedCommissionRecord): _55.ValidatorAccumulatedCommissionRecordProtoMsg;
            };
            ValidatorHistoricalRewardsRecord: {
                typeUrl: string;
                encode(message: _55.ValidatorHistoricalRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _55.ValidatorHistoricalRewardsRecord;
                fromJSON(object: any): _55.ValidatorHistoricalRewardsRecord;
                toJSON(message: _55.ValidatorHistoricalRewardsRecord): unknown;
                fromPartial(object: Partial<_55.ValidatorHistoricalRewardsRecord>): _55.ValidatorHistoricalRewardsRecord;
                fromSDK(object: _55.ValidatorHistoricalRewardsRecordSDKType): _55.ValidatorHistoricalRewardsRecord;
                toSDK(message: _55.ValidatorHistoricalRewardsRecord): _55.ValidatorHistoricalRewardsRecordSDKType;
                fromAmino(object: _55.ValidatorHistoricalRewardsRecordAmino): _55.ValidatorHistoricalRewardsRecord;
                toAmino(message: _55.ValidatorHistoricalRewardsRecord): _55.ValidatorHistoricalRewardsRecordAmino;
                fromAminoMsg(object: _55.ValidatorHistoricalRewardsRecordAminoMsg): _55.ValidatorHistoricalRewardsRecord;
                toAminoMsg(message: _55.ValidatorHistoricalRewardsRecord): _55.ValidatorHistoricalRewardsRecordAminoMsg;
                fromProtoMsg(message: _55.ValidatorHistoricalRewardsRecordProtoMsg): _55.ValidatorHistoricalRewardsRecord;
                toProto(message: _55.ValidatorHistoricalRewardsRecord): Uint8Array;
                toProtoMsg(message: _55.ValidatorHistoricalRewardsRecord): _55.ValidatorHistoricalRewardsRecordProtoMsg;
            };
            ValidatorCurrentRewardsRecord: {
                typeUrl: string;
                encode(message: _55.ValidatorCurrentRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _55.ValidatorCurrentRewardsRecord;
                fromJSON(object: any): _55.ValidatorCurrentRewardsRecord;
                toJSON(message: _55.ValidatorCurrentRewardsRecord): unknown;
                fromPartial(object: Partial<_55.ValidatorCurrentRewardsRecord>): _55.ValidatorCurrentRewardsRecord;
                fromSDK(object: _55.ValidatorCurrentRewardsRecordSDKType): _55.ValidatorCurrentRewardsRecord;
                toSDK(message: _55.ValidatorCurrentRewardsRecord): _55.ValidatorCurrentRewardsRecordSDKType;
                fromAmino(object: _55.ValidatorCurrentRewardsRecordAmino): _55.ValidatorCurrentRewardsRecord;
                toAmino(message: _55.ValidatorCurrentRewardsRecord): _55.ValidatorCurrentRewardsRecordAmino;
                fromAminoMsg(object: _55.ValidatorCurrentRewardsRecordAminoMsg): _55.ValidatorCurrentRewardsRecord;
                toAminoMsg(message: _55.ValidatorCurrentRewardsRecord): _55.ValidatorCurrentRewardsRecordAminoMsg;
                fromProtoMsg(message: _55.ValidatorCurrentRewardsRecordProtoMsg): _55.ValidatorCurrentRewardsRecord;
                toProto(message: _55.ValidatorCurrentRewardsRecord): Uint8Array;
                toProtoMsg(message: _55.ValidatorCurrentRewardsRecord): _55.ValidatorCurrentRewardsRecordProtoMsg;
            };
            DelegatorStartingInfoRecord: {
                typeUrl: string;
                encode(message: _55.DelegatorStartingInfoRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _55.DelegatorStartingInfoRecord;
                fromJSON(object: any): _55.DelegatorStartingInfoRecord;
                toJSON(message: _55.DelegatorStartingInfoRecord): unknown;
                fromPartial(object: Partial<_55.DelegatorStartingInfoRecord>): _55.DelegatorStartingInfoRecord;
                fromSDK(object: _55.DelegatorStartingInfoRecordSDKType): _55.DelegatorStartingInfoRecord;
                toSDK(message: _55.DelegatorStartingInfoRecord): _55.DelegatorStartingInfoRecordSDKType;
                fromAmino(object: _55.DelegatorStartingInfoRecordAmino): _55.DelegatorStartingInfoRecord;
                toAmino(message: _55.DelegatorStartingInfoRecord): _55.DelegatorStartingInfoRecordAmino;
                fromAminoMsg(object: _55.DelegatorStartingInfoRecordAminoMsg): _55.DelegatorStartingInfoRecord;
                toAminoMsg(message: _55.DelegatorStartingInfoRecord): _55.DelegatorStartingInfoRecordAminoMsg;
                fromProtoMsg(message: _55.DelegatorStartingInfoRecordProtoMsg): _55.DelegatorStartingInfoRecord;
                toProto(message: _55.DelegatorStartingInfoRecord): Uint8Array;
                toProtoMsg(message: _55.DelegatorStartingInfoRecord): _55.DelegatorStartingInfoRecordProtoMsg;
            };
            ValidatorSlashEventRecord: {
                typeUrl: string;
                encode(message: _55.ValidatorSlashEventRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _55.ValidatorSlashEventRecord;
                fromJSON(object: any): _55.ValidatorSlashEventRecord;
                toJSON(message: _55.ValidatorSlashEventRecord): unknown;
                fromPartial(object: Partial<_55.ValidatorSlashEventRecord>): _55.ValidatorSlashEventRecord;
                fromSDK(object: _55.ValidatorSlashEventRecordSDKType): _55.ValidatorSlashEventRecord;
                toSDK(message: _55.ValidatorSlashEventRecord): _55.ValidatorSlashEventRecordSDKType;
                fromAmino(object: _55.ValidatorSlashEventRecordAmino): _55.ValidatorSlashEventRecord;
                toAmino(message: _55.ValidatorSlashEventRecord): _55.ValidatorSlashEventRecordAmino;
                fromAminoMsg(object: _55.ValidatorSlashEventRecordAminoMsg): _55.ValidatorSlashEventRecord;
                toAminoMsg(message: _55.ValidatorSlashEventRecord): _55.ValidatorSlashEventRecordAminoMsg;
                fromProtoMsg(message: _55.ValidatorSlashEventRecordProtoMsg): _55.ValidatorSlashEventRecord;
                toProto(message: _55.ValidatorSlashEventRecord): Uint8Array;
                toProtoMsg(message: _55.ValidatorSlashEventRecord): _55.ValidatorSlashEventRecordProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _55.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _55.GenesisState;
                fromJSON(object: any): _55.GenesisState;
                toJSON(message: _55.GenesisState): unknown;
                fromPartial(object: Partial<_55.GenesisState>): _55.GenesisState;
                fromSDK(object: _55.GenesisStateSDKType): _55.GenesisState;
                toSDK(message: _55.GenesisState): _55.GenesisStateSDKType;
                fromAmino(object: _55.GenesisStateAmino): _55.GenesisState;
                toAmino(message: _55.GenesisState): _55.GenesisStateAmino;
                fromAminoMsg(object: _55.GenesisStateAminoMsg): _55.GenesisState;
                toAminoMsg(message: _55.GenesisState): _55.GenesisStateAminoMsg;
                fromProtoMsg(message: _55.GenesisStateProtoMsg): _55.GenesisState;
                toProto(message: _55.GenesisState): Uint8Array;
                toProtoMsg(message: _55.GenesisState): _55.GenesisStateProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _54.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _54.Params;
                fromJSON(object: any): _54.Params;
                toJSON(message: _54.Params): unknown;
                fromPartial(object: Partial<_54.Params>): _54.Params;
                fromSDK(object: _54.ParamsSDKType): _54.Params;
                toSDK(message: _54.Params): _54.ParamsSDKType;
                fromAmino(object: _54.ParamsAmino): _54.Params;
                toAmino(message: _54.Params): _54.ParamsAmino;
                fromAminoMsg(object: _54.ParamsAminoMsg): _54.Params;
                toAminoMsg(message: _54.Params): _54.ParamsAminoMsg;
                fromProtoMsg(message: _54.ParamsProtoMsg): _54.Params;
                toProto(message: _54.Params): Uint8Array;
                toProtoMsg(message: _54.Params): _54.ParamsProtoMsg;
            };
            ValidatorHistoricalRewards: {
                typeUrl: string;
                encode(message: _54.ValidatorHistoricalRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _54.ValidatorHistoricalRewards;
                fromJSON(object: any): _54.ValidatorHistoricalRewards;
                toJSON(message: _54.ValidatorHistoricalRewards): unknown;
                fromPartial(object: Partial<_54.ValidatorHistoricalRewards>): _54.ValidatorHistoricalRewards;
                fromSDK(object: _54.ValidatorHistoricalRewardsSDKType): _54.ValidatorHistoricalRewards;
                toSDK(message: _54.ValidatorHistoricalRewards): _54.ValidatorHistoricalRewardsSDKType;
                fromAmino(object: _54.ValidatorHistoricalRewardsAmino): _54.ValidatorHistoricalRewards;
                toAmino(message: _54.ValidatorHistoricalRewards): _54.ValidatorHistoricalRewardsAmino;
                fromAminoMsg(object: _54.ValidatorHistoricalRewardsAminoMsg): _54.ValidatorHistoricalRewards;
                toAminoMsg(message: _54.ValidatorHistoricalRewards): _54.ValidatorHistoricalRewardsAminoMsg;
                fromProtoMsg(message: _54.ValidatorHistoricalRewardsProtoMsg): _54.ValidatorHistoricalRewards;
                toProto(message: _54.ValidatorHistoricalRewards): Uint8Array;
                toProtoMsg(message: _54.ValidatorHistoricalRewards): _54.ValidatorHistoricalRewardsProtoMsg;
            };
            ValidatorCurrentRewards: {
                typeUrl: string;
                encode(message: _54.ValidatorCurrentRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _54.ValidatorCurrentRewards;
                fromJSON(object: any): _54.ValidatorCurrentRewards;
                toJSON(message: _54.ValidatorCurrentRewards): unknown;
                fromPartial(object: Partial<_54.ValidatorCurrentRewards>): _54.ValidatorCurrentRewards;
                fromSDK(object: _54.ValidatorCurrentRewardsSDKType): _54.ValidatorCurrentRewards;
                toSDK(message: _54.ValidatorCurrentRewards): _54.ValidatorCurrentRewardsSDKType;
                fromAmino(object: _54.ValidatorCurrentRewardsAmino): _54.ValidatorCurrentRewards;
                toAmino(message: _54.ValidatorCurrentRewards): _54.ValidatorCurrentRewardsAmino;
                fromAminoMsg(object: _54.ValidatorCurrentRewardsAminoMsg): _54.ValidatorCurrentRewards;
                toAminoMsg(message: _54.ValidatorCurrentRewards): _54.ValidatorCurrentRewardsAminoMsg;
                fromProtoMsg(message: _54.ValidatorCurrentRewardsProtoMsg): _54.ValidatorCurrentRewards;
                toProto(message: _54.ValidatorCurrentRewards): Uint8Array;
                toProtoMsg(message: _54.ValidatorCurrentRewards): _54.ValidatorCurrentRewardsProtoMsg;
            };
            ValidatorAccumulatedCommission: {
                typeUrl: string;
                encode(message: _54.ValidatorAccumulatedCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _54.ValidatorAccumulatedCommission;
                fromJSON(object: any): _54.ValidatorAccumulatedCommission;
                toJSON(message: _54.ValidatorAccumulatedCommission): unknown;
                fromPartial(object: Partial<_54.ValidatorAccumulatedCommission>): _54.ValidatorAccumulatedCommission;
                fromSDK(object: _54.ValidatorAccumulatedCommissionSDKType): _54.ValidatorAccumulatedCommission;
                toSDK(message: _54.ValidatorAccumulatedCommission): _54.ValidatorAccumulatedCommissionSDKType;
                fromAmino(object: _54.ValidatorAccumulatedCommissionAmino): _54.ValidatorAccumulatedCommission;
                toAmino(message: _54.ValidatorAccumulatedCommission): _54.ValidatorAccumulatedCommissionAmino;
                fromAminoMsg(object: _54.ValidatorAccumulatedCommissionAminoMsg): _54.ValidatorAccumulatedCommission;
                toAminoMsg(message: _54.ValidatorAccumulatedCommission): _54.ValidatorAccumulatedCommissionAminoMsg;
                fromProtoMsg(message: _54.ValidatorAccumulatedCommissionProtoMsg): _54.ValidatorAccumulatedCommission;
                toProto(message: _54.ValidatorAccumulatedCommission): Uint8Array;
                toProtoMsg(message: _54.ValidatorAccumulatedCommission): _54.ValidatorAccumulatedCommissionProtoMsg;
            };
            ValidatorOutstandingRewards: {
                typeUrl: string;
                encode(message: _54.ValidatorOutstandingRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _54.ValidatorOutstandingRewards;
                fromJSON(object: any): _54.ValidatorOutstandingRewards;
                toJSON(message: _54.ValidatorOutstandingRewards): unknown;
                fromPartial(object: Partial<_54.ValidatorOutstandingRewards>): _54.ValidatorOutstandingRewards;
                fromSDK(object: _54.ValidatorOutstandingRewardsSDKType): _54.ValidatorOutstandingRewards;
                toSDK(message: _54.ValidatorOutstandingRewards): _54.ValidatorOutstandingRewardsSDKType;
                fromAmino(object: _54.ValidatorOutstandingRewardsAmino): _54.ValidatorOutstandingRewards;
                toAmino(message: _54.ValidatorOutstandingRewards): _54.ValidatorOutstandingRewardsAmino;
                fromAminoMsg(object: _54.ValidatorOutstandingRewardsAminoMsg): _54.ValidatorOutstandingRewards;
                toAminoMsg(message: _54.ValidatorOutstandingRewards): _54.ValidatorOutstandingRewardsAminoMsg;
                fromProtoMsg(message: _54.ValidatorOutstandingRewardsProtoMsg): _54.ValidatorOutstandingRewards;
                toProto(message: _54.ValidatorOutstandingRewards): Uint8Array;
                toProtoMsg(message: _54.ValidatorOutstandingRewards): _54.ValidatorOutstandingRewardsProtoMsg;
            };
            ValidatorSlashEvent: {
                typeUrl: string;
                encode(message: _54.ValidatorSlashEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _54.ValidatorSlashEvent;
                fromJSON(object: any): _54.ValidatorSlashEvent;
                toJSON(message: _54.ValidatorSlashEvent): unknown;
                fromPartial(object: Partial<_54.ValidatorSlashEvent>): _54.ValidatorSlashEvent;
                fromSDK(object: _54.ValidatorSlashEventSDKType): _54.ValidatorSlashEvent;
                toSDK(message: _54.ValidatorSlashEvent): _54.ValidatorSlashEventSDKType;
                fromAmino(object: _54.ValidatorSlashEventAmino): _54.ValidatorSlashEvent;
                toAmino(message: _54.ValidatorSlashEvent): _54.ValidatorSlashEventAmino;
                fromAminoMsg(object: _54.ValidatorSlashEventAminoMsg): _54.ValidatorSlashEvent;
                toAminoMsg(message: _54.ValidatorSlashEvent): _54.ValidatorSlashEventAminoMsg;
                fromProtoMsg(message: _54.ValidatorSlashEventProtoMsg): _54.ValidatorSlashEvent;
                toProto(message: _54.ValidatorSlashEvent): Uint8Array;
                toProtoMsg(message: _54.ValidatorSlashEvent): _54.ValidatorSlashEventProtoMsg;
            };
            ValidatorSlashEvents: {
                typeUrl: string;
                encode(message: _54.ValidatorSlashEvents, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _54.ValidatorSlashEvents;
                fromJSON(object: any): _54.ValidatorSlashEvents;
                toJSON(message: _54.ValidatorSlashEvents): unknown;
                fromPartial(object: Partial<_54.ValidatorSlashEvents>): _54.ValidatorSlashEvents;
                fromSDK(object: _54.ValidatorSlashEventsSDKType): _54.ValidatorSlashEvents;
                toSDK(message: _54.ValidatorSlashEvents): _54.ValidatorSlashEventsSDKType;
                fromAmino(object: _54.ValidatorSlashEventsAmino): _54.ValidatorSlashEvents;
                toAmino(message: _54.ValidatorSlashEvents): _54.ValidatorSlashEventsAmino;
                fromAminoMsg(object: _54.ValidatorSlashEventsAminoMsg): _54.ValidatorSlashEvents;
                toAminoMsg(message: _54.ValidatorSlashEvents): _54.ValidatorSlashEventsAminoMsg;
                fromProtoMsg(message: _54.ValidatorSlashEventsProtoMsg): _54.ValidatorSlashEvents;
                toProto(message: _54.ValidatorSlashEvents): Uint8Array;
                toProtoMsg(message: _54.ValidatorSlashEvents): _54.ValidatorSlashEventsProtoMsg;
            };
            FeePool: {
                typeUrl: string;
                encode(message: _54.FeePool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _54.FeePool;
                fromJSON(object: any): _54.FeePool;
                toJSON(message: _54.FeePool): unknown;
                fromPartial(object: Partial<_54.FeePool>): _54.FeePool;
                fromSDK(object: _54.FeePoolSDKType): _54.FeePool;
                toSDK(message: _54.FeePool): _54.FeePoolSDKType;
                fromAmino(object: _54.FeePoolAmino): _54.FeePool;
                toAmino(message: _54.FeePool): _54.FeePoolAmino;
                fromAminoMsg(object: _54.FeePoolAminoMsg): _54.FeePool;
                toAminoMsg(message: _54.FeePool): _54.FeePoolAminoMsg;
                fromProtoMsg(message: _54.FeePoolProtoMsg): _54.FeePool;
                toProto(message: _54.FeePool): Uint8Array;
                toProtoMsg(message: _54.FeePool): _54.FeePoolProtoMsg;
            };
            CommunityPoolSpendProposal: {
                typeUrl: string;
                encode(message: _54.CommunityPoolSpendProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _54.CommunityPoolSpendProposal;
                fromJSON(object: any): _54.CommunityPoolSpendProposal;
                toJSON(message: _54.CommunityPoolSpendProposal): unknown;
                fromPartial(object: Partial<_54.CommunityPoolSpendProposal>): _54.CommunityPoolSpendProposal;
                fromSDK(object: _54.CommunityPoolSpendProposalSDKType): _54.CommunityPoolSpendProposal;
                toSDK(message: _54.CommunityPoolSpendProposal): _54.CommunityPoolSpendProposalSDKType;
                fromAmino(object: _54.CommunityPoolSpendProposalAmino): _54.CommunityPoolSpendProposal;
                toAmino(message: _54.CommunityPoolSpendProposal): _54.CommunityPoolSpendProposalAmino;
                fromAminoMsg(object: _54.CommunityPoolSpendProposalAminoMsg): _54.CommunityPoolSpendProposal;
                toAminoMsg(message: _54.CommunityPoolSpendProposal): _54.CommunityPoolSpendProposalAminoMsg;
                fromProtoMsg(message: _54.CommunityPoolSpendProposalProtoMsg): _54.CommunityPoolSpendProposal;
                toProto(message: _54.CommunityPoolSpendProposal): Uint8Array;
                toProtoMsg(message: _54.CommunityPoolSpendProposal): _54.CommunityPoolSpendProposalProtoMsg;
            };
            DelegatorStartingInfo: {
                typeUrl: string;
                encode(message: _54.DelegatorStartingInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _54.DelegatorStartingInfo;
                fromJSON(object: any): _54.DelegatorStartingInfo;
                toJSON(message: _54.DelegatorStartingInfo): unknown;
                fromPartial(object: Partial<_54.DelegatorStartingInfo>): _54.DelegatorStartingInfo;
                fromSDK(object: _54.DelegatorStartingInfoSDKType): _54.DelegatorStartingInfo;
                toSDK(message: _54.DelegatorStartingInfo): _54.DelegatorStartingInfoSDKType;
                fromAmino(object: _54.DelegatorStartingInfoAmino): _54.DelegatorStartingInfo;
                toAmino(message: _54.DelegatorStartingInfo): _54.DelegatorStartingInfoAmino;
                fromAminoMsg(object: _54.DelegatorStartingInfoAminoMsg): _54.DelegatorStartingInfo;
                toAminoMsg(message: _54.DelegatorStartingInfo): _54.DelegatorStartingInfoAminoMsg;
                fromProtoMsg(message: _54.DelegatorStartingInfoProtoMsg): _54.DelegatorStartingInfo;
                toProto(message: _54.DelegatorStartingInfo): Uint8Array;
                toProtoMsg(message: _54.DelegatorStartingInfo): _54.DelegatorStartingInfoProtoMsg;
            };
            DelegationDelegatorReward: {
                typeUrl: string;
                encode(message: _54.DelegationDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _54.DelegationDelegatorReward;
                fromJSON(object: any): _54.DelegationDelegatorReward;
                toJSON(message: _54.DelegationDelegatorReward): unknown;
                fromPartial(object: Partial<_54.DelegationDelegatorReward>): _54.DelegationDelegatorReward;
                fromSDK(object: _54.DelegationDelegatorRewardSDKType): _54.DelegationDelegatorReward;
                toSDK(message: _54.DelegationDelegatorReward): _54.DelegationDelegatorRewardSDKType;
                fromAmino(object: _54.DelegationDelegatorRewardAmino): _54.DelegationDelegatorReward;
                toAmino(message: _54.DelegationDelegatorReward): _54.DelegationDelegatorRewardAmino;
                fromAminoMsg(object: _54.DelegationDelegatorRewardAminoMsg): _54.DelegationDelegatorReward;
                toAminoMsg(message: _54.DelegationDelegatorReward): _54.DelegationDelegatorRewardAminoMsg;
                fromProtoMsg(message: _54.DelegationDelegatorRewardProtoMsg): _54.DelegationDelegatorReward;
                toProto(message: _54.DelegationDelegatorReward): Uint8Array;
                toProtoMsg(message: _54.DelegationDelegatorReward): _54.DelegationDelegatorRewardProtoMsg;
            };
            CommunityPoolSpendProposalWithDeposit: {
                typeUrl: string;
                encode(message: _54.CommunityPoolSpendProposalWithDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _54.CommunityPoolSpendProposalWithDeposit;
                fromJSON(object: any): _54.CommunityPoolSpendProposalWithDeposit;
                toJSON(message: _54.CommunityPoolSpendProposalWithDeposit): unknown;
                fromPartial(object: Partial<_54.CommunityPoolSpendProposalWithDeposit>): _54.CommunityPoolSpendProposalWithDeposit;
                fromSDK(object: _54.CommunityPoolSpendProposalWithDepositSDKType): _54.CommunityPoolSpendProposalWithDeposit;
                toSDK(message: _54.CommunityPoolSpendProposalWithDeposit): _54.CommunityPoolSpendProposalWithDepositSDKType;
                fromAmino(object: _54.CommunityPoolSpendProposalWithDepositAmino): _54.CommunityPoolSpendProposalWithDeposit;
                toAmino(message: _54.CommunityPoolSpendProposalWithDeposit): _54.CommunityPoolSpendProposalWithDepositAmino;
                fromAminoMsg(object: _54.CommunityPoolSpendProposalWithDepositAminoMsg): _54.CommunityPoolSpendProposalWithDeposit;
                toAminoMsg(message: _54.CommunityPoolSpendProposalWithDeposit): _54.CommunityPoolSpendProposalWithDepositAminoMsg;
                fromProtoMsg(message: _54.CommunityPoolSpendProposalWithDepositProtoMsg): _54.CommunityPoolSpendProposalWithDeposit;
                toProto(message: _54.CommunityPoolSpendProposalWithDeposit): Uint8Array;
                toProtoMsg(message: _54.CommunityPoolSpendProposalWithDeposit): _54.CommunityPoolSpendProposalWithDepositProtoMsg;
            };
        };
    }
    namespace evidence {
        namespace module {
            const v1: {
                protobufPackage: "cosmos.evidence.module.v1";
                Module: {
                    typeUrl: string;
                    encode(_: _58.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _58.Module;
                    fromJSON(_: any): _58.Module;
                    toJSON(_: _58.Module): unknown;
                    fromPartial(_: Partial<_58.Module>): _58.Module;
                    fromSDK(_: _58.ModuleSDKType): _58.Module;
                    toSDK(_: _58.Module): _58.ModuleSDKType;
                    fromAmino(_: _58.ModuleAmino): _58.Module;
                    toAmino(_: _58.Module): _58.ModuleAmino;
                    fromAminoMsg(object: _58.ModuleAminoMsg): _58.Module;
                    toAminoMsg(message: _58.Module): _58.ModuleAminoMsg;
                    fromProtoMsg(message: _58.ModuleProtoMsg): _58.Module;
                    toProto(message: _58.Module): Uint8Array;
                    toProtoMsg(message: _58.Module): _58.ModuleProtoMsg;
                };
            };
        }
    }
    namespace feegrant {
        namespace module {
            const v1: {
                protobufPackage: "cosmos.feegrant.module.v1";
                Module: {
                    typeUrl: string;
                    encode(_: _59.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _59.Module;
                    fromJSON(_: any): _59.Module;
                    toJSON(_: _59.Module): unknown;
                    fromPartial(_: Partial<_59.Module>): _59.Module;
                    fromSDK(_: _59.ModuleSDKType): _59.Module;
                    toSDK(_: _59.Module): _59.ModuleSDKType;
                    fromAmino(_: _59.ModuleAmino): _59.Module;
                    toAmino(_: _59.Module): _59.ModuleAmino;
                    fromAminoMsg(object: _59.ModuleAminoMsg): _59.Module;
                    toAminoMsg(message: _59.Module): _59.ModuleAminoMsg;
                    fromProtoMsg(message: _59.ModuleProtoMsg): _59.Module;
                    toProto(message: _59.Module): Uint8Array;
                    toProtoMsg(message: _59.Module): _59.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            Msg: typeof _216.Msg;
            Query: typeof _200.Query;
            QueryClientImpl: typeof _200.QueryClientImpl;
            LCDQueryClient: typeof _183.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _63.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _63.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _63.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _63.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _63.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _63.MsgRevokeAllowance;
                    };
                };
                toJSON: {
                    grantAllowance(value: _63.MsgGrantAllowance): {
                        typeUrl: string;
                        value: unknown;
                    };
                    revokeAllowance(value: _63.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    grantAllowance(value: any): {
                        typeUrl: string;
                        value: _63.MsgGrantAllowance;
                    };
                    revokeAllowance(value: any): {
                        typeUrl: string;
                        value: _63.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _63.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _63.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _63.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _63.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: (message: _63.MsgGrantAllowance) => _63.MsgGrantAllowanceAmino;
                    fromAmino: (object: _63.MsgGrantAllowanceAmino) => _63.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: (message: _63.MsgRevokeAllowance) => _63.MsgRevokeAllowanceAmino;
                    fromAmino: (object: _63.MsgRevokeAllowanceAmino) => _63.MsgRevokeAllowance;
                };
            };
            protobufPackage: "cosmos.feegrant.v1beta1";
            MsgGrantAllowance: {
                typeUrl: string;
                encode(message: _63.MsgGrantAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _63.MsgGrantAllowance;
                fromJSON(object: any): _63.MsgGrantAllowance;
                toJSON(message: _63.MsgGrantAllowance): unknown;
                fromPartial(object: Partial<_63.MsgGrantAllowance>): _63.MsgGrantAllowance;
                fromSDK(object: _63.MsgGrantAllowanceSDKType): _63.MsgGrantAllowance;
                toSDK(message: _63.MsgGrantAllowance): _63.MsgGrantAllowanceSDKType;
                fromAmino(object: _63.MsgGrantAllowanceAmino): _63.MsgGrantAllowance;
                toAmino(message: _63.MsgGrantAllowance): _63.MsgGrantAllowanceAmino;
                fromAminoMsg(object: _63.MsgGrantAllowanceAminoMsg): _63.MsgGrantAllowance;
                toAminoMsg(message: _63.MsgGrantAllowance): _63.MsgGrantAllowanceAminoMsg;
                fromProtoMsg(message: _63.MsgGrantAllowanceProtoMsg): _63.MsgGrantAllowance;
                toProto(message: _63.MsgGrantAllowance): Uint8Array;
                toProtoMsg(message: _63.MsgGrantAllowance): _63.MsgGrantAllowanceProtoMsg;
            };
            MsgGrantAllowanceResponse: {
                typeUrl: string;
                encode(_: _63.MsgGrantAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _63.MsgGrantAllowanceResponse;
                fromJSON(_: any): _63.MsgGrantAllowanceResponse;
                toJSON(_: _63.MsgGrantAllowanceResponse): unknown;
                fromPartial(_: Partial<_63.MsgGrantAllowanceResponse>): _63.MsgGrantAllowanceResponse;
                fromSDK(_: _63.MsgGrantAllowanceResponseSDKType): _63.MsgGrantAllowanceResponse;
                toSDK(_: _63.MsgGrantAllowanceResponse): _63.MsgGrantAllowanceResponseSDKType;
                fromAmino(_: _63.MsgGrantAllowanceResponseAmino): _63.MsgGrantAllowanceResponse;
                toAmino(_: _63.MsgGrantAllowanceResponse): _63.MsgGrantAllowanceResponseAmino;
                fromAminoMsg(object: _63.MsgGrantAllowanceResponseAminoMsg): _63.MsgGrantAllowanceResponse;
                toAminoMsg(message: _63.MsgGrantAllowanceResponse): _63.MsgGrantAllowanceResponseAminoMsg;
                fromProtoMsg(message: _63.MsgGrantAllowanceResponseProtoMsg): _63.MsgGrantAllowanceResponse;
                toProto(message: _63.MsgGrantAllowanceResponse): Uint8Array;
                toProtoMsg(message: _63.MsgGrantAllowanceResponse): _63.MsgGrantAllowanceResponseProtoMsg;
            };
            MsgRevokeAllowance: {
                typeUrl: string;
                encode(message: _63.MsgRevokeAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _63.MsgRevokeAllowance;
                fromJSON(object: any): _63.MsgRevokeAllowance;
                toJSON(message: _63.MsgRevokeAllowance): unknown;
                fromPartial(object: Partial<_63.MsgRevokeAllowance>): _63.MsgRevokeAllowance;
                fromSDK(object: _63.MsgRevokeAllowanceSDKType): _63.MsgRevokeAllowance;
                toSDK(message: _63.MsgRevokeAllowance): _63.MsgRevokeAllowanceSDKType;
                fromAmino(object: _63.MsgRevokeAllowanceAmino): _63.MsgRevokeAllowance;
                toAmino(message: _63.MsgRevokeAllowance): _63.MsgRevokeAllowanceAmino;
                fromAminoMsg(object: _63.MsgRevokeAllowanceAminoMsg): _63.MsgRevokeAllowance;
                toAminoMsg(message: _63.MsgRevokeAllowance): _63.MsgRevokeAllowanceAminoMsg;
                fromProtoMsg(message: _63.MsgRevokeAllowanceProtoMsg): _63.MsgRevokeAllowance;
                toProto(message: _63.MsgRevokeAllowance): Uint8Array;
                toProtoMsg(message: _63.MsgRevokeAllowance): _63.MsgRevokeAllowanceProtoMsg;
            };
            MsgRevokeAllowanceResponse: {
                typeUrl: string;
                encode(_: _63.MsgRevokeAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _63.MsgRevokeAllowanceResponse;
                fromJSON(_: any): _63.MsgRevokeAllowanceResponse;
                toJSON(_: _63.MsgRevokeAllowanceResponse): unknown;
                fromPartial(_: Partial<_63.MsgRevokeAllowanceResponse>): _63.MsgRevokeAllowanceResponse;
                fromSDK(_: _63.MsgRevokeAllowanceResponseSDKType): _63.MsgRevokeAllowanceResponse;
                toSDK(_: _63.MsgRevokeAllowanceResponse): _63.MsgRevokeAllowanceResponseSDKType;
                fromAmino(_: _63.MsgRevokeAllowanceResponseAmino): _63.MsgRevokeAllowanceResponse;
                toAmino(_: _63.MsgRevokeAllowanceResponse): _63.MsgRevokeAllowanceResponseAmino;
                fromAminoMsg(object: _63.MsgRevokeAllowanceResponseAminoMsg): _63.MsgRevokeAllowanceResponse;
                toAminoMsg(message: _63.MsgRevokeAllowanceResponse): _63.MsgRevokeAllowanceResponseAminoMsg;
                fromProtoMsg(message: _63.MsgRevokeAllowanceResponseProtoMsg): _63.MsgRevokeAllowanceResponse;
                toProto(message: _63.MsgRevokeAllowanceResponse): Uint8Array;
                toProtoMsg(message: _63.MsgRevokeAllowanceResponse): _63.MsgRevokeAllowanceResponseProtoMsg;
            };
            Cosmos_feegrantv1beta1FeeAllowanceI_InterfaceDecoder: (input: import("..").BinaryReader | Uint8Array) => import("../google/protobuf/any").Any | _60.BasicAllowance | _60.PeriodicAllowance | _60.AllowedMsgAllowance;
            Cosmos_feegrantv1beta1FeeAllowanceI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_feegrantv1beta1FeeAllowanceI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryAllowanceRequest: {
                typeUrl: string;
                encode(message: _62.QueryAllowanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _62.QueryAllowanceRequest;
                fromJSON(object: any): _62.QueryAllowanceRequest;
                toJSON(message: _62.QueryAllowanceRequest): unknown;
                fromPartial(object: Partial<_62.QueryAllowanceRequest>): _62.QueryAllowanceRequest;
                fromSDK(object: _62.QueryAllowanceRequestSDKType): _62.QueryAllowanceRequest;
                toSDK(message: _62.QueryAllowanceRequest): _62.QueryAllowanceRequestSDKType;
                fromAmino(object: _62.QueryAllowanceRequestAmino): _62.QueryAllowanceRequest;
                toAmino(message: _62.QueryAllowanceRequest): _62.QueryAllowanceRequestAmino;
                fromAminoMsg(object: _62.QueryAllowanceRequestAminoMsg): _62.QueryAllowanceRequest;
                toAminoMsg(message: _62.QueryAllowanceRequest): _62.QueryAllowanceRequestAminoMsg;
                fromProtoMsg(message: _62.QueryAllowanceRequestProtoMsg): _62.QueryAllowanceRequest;
                toProto(message: _62.QueryAllowanceRequest): Uint8Array;
                toProtoMsg(message: _62.QueryAllowanceRequest): _62.QueryAllowanceRequestProtoMsg;
            };
            QueryAllowanceResponse: {
                typeUrl: string;
                encode(message: _62.QueryAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _62.QueryAllowanceResponse;
                fromJSON(object: any): _62.QueryAllowanceResponse;
                toJSON(message: _62.QueryAllowanceResponse): unknown;
                fromPartial(object: Partial<_62.QueryAllowanceResponse>): _62.QueryAllowanceResponse;
                fromSDK(object: _62.QueryAllowanceResponseSDKType): _62.QueryAllowanceResponse;
                toSDK(message: _62.QueryAllowanceResponse): _62.QueryAllowanceResponseSDKType;
                fromAmino(object: _62.QueryAllowanceResponseAmino): _62.QueryAllowanceResponse;
                toAmino(message: _62.QueryAllowanceResponse): _62.QueryAllowanceResponseAmino;
                fromAminoMsg(object: _62.QueryAllowanceResponseAminoMsg): _62.QueryAllowanceResponse;
                toAminoMsg(message: _62.QueryAllowanceResponse): _62.QueryAllowanceResponseAminoMsg;
                fromProtoMsg(message: _62.QueryAllowanceResponseProtoMsg): _62.QueryAllowanceResponse;
                toProto(message: _62.QueryAllowanceResponse): Uint8Array;
                toProtoMsg(message: _62.QueryAllowanceResponse): _62.QueryAllowanceResponseProtoMsg;
            };
            QueryAllowancesRequest: {
                typeUrl: string;
                encode(message: _62.QueryAllowancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _62.QueryAllowancesRequest;
                fromJSON(object: any): _62.QueryAllowancesRequest;
                toJSON(message: _62.QueryAllowancesRequest): unknown;
                fromPartial(object: Partial<_62.QueryAllowancesRequest>): _62.QueryAllowancesRequest;
                fromSDK(object: _62.QueryAllowancesRequestSDKType): _62.QueryAllowancesRequest;
                toSDK(message: _62.QueryAllowancesRequest): _62.QueryAllowancesRequestSDKType;
                fromAmino(object: _62.QueryAllowancesRequestAmino): _62.QueryAllowancesRequest;
                toAmino(message: _62.QueryAllowancesRequest): _62.QueryAllowancesRequestAmino;
                fromAminoMsg(object: _62.QueryAllowancesRequestAminoMsg): _62.QueryAllowancesRequest;
                toAminoMsg(message: _62.QueryAllowancesRequest): _62.QueryAllowancesRequestAminoMsg;
                fromProtoMsg(message: _62.QueryAllowancesRequestProtoMsg): _62.QueryAllowancesRequest;
                toProto(message: _62.QueryAllowancesRequest): Uint8Array;
                toProtoMsg(message: _62.QueryAllowancesRequest): _62.QueryAllowancesRequestProtoMsg;
            };
            QueryAllowancesResponse: {
                typeUrl: string;
                encode(message: _62.QueryAllowancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _62.QueryAllowancesResponse;
                fromJSON(object: any): _62.QueryAllowancesResponse;
                toJSON(message: _62.QueryAllowancesResponse): unknown;
                fromPartial(object: Partial<_62.QueryAllowancesResponse>): _62.QueryAllowancesResponse;
                fromSDK(object: _62.QueryAllowancesResponseSDKType): _62.QueryAllowancesResponse;
                toSDK(message: _62.QueryAllowancesResponse): _62.QueryAllowancesResponseSDKType;
                fromAmino(object: _62.QueryAllowancesResponseAmino): _62.QueryAllowancesResponse;
                toAmino(message: _62.QueryAllowancesResponse): _62.QueryAllowancesResponseAmino;
                fromAminoMsg(object: _62.QueryAllowancesResponseAminoMsg): _62.QueryAllowancesResponse;
                toAminoMsg(message: _62.QueryAllowancesResponse): _62.QueryAllowancesResponseAminoMsg;
                fromProtoMsg(message: _62.QueryAllowancesResponseProtoMsg): _62.QueryAllowancesResponse;
                toProto(message: _62.QueryAllowancesResponse): Uint8Array;
                toProtoMsg(message: _62.QueryAllowancesResponse): _62.QueryAllowancesResponseProtoMsg;
            };
            QueryAllowancesByGranterRequest: {
                typeUrl: string;
                encode(message: _62.QueryAllowancesByGranterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _62.QueryAllowancesByGranterRequest;
                fromJSON(object: any): _62.QueryAllowancesByGranterRequest;
                toJSON(message: _62.QueryAllowancesByGranterRequest): unknown;
                fromPartial(object: Partial<_62.QueryAllowancesByGranterRequest>): _62.QueryAllowancesByGranterRequest;
                fromSDK(object: _62.QueryAllowancesByGranterRequestSDKType): _62.QueryAllowancesByGranterRequest;
                toSDK(message: _62.QueryAllowancesByGranterRequest): _62.QueryAllowancesByGranterRequestSDKType;
                fromAmino(object: _62.QueryAllowancesByGranterRequestAmino): _62.QueryAllowancesByGranterRequest;
                toAmino(message: _62.QueryAllowancesByGranterRequest): _62.QueryAllowancesByGranterRequestAmino;
                fromAminoMsg(object: _62.QueryAllowancesByGranterRequestAminoMsg): _62.QueryAllowancesByGranterRequest;
                toAminoMsg(message: _62.QueryAllowancesByGranterRequest): _62.QueryAllowancesByGranterRequestAminoMsg;
                fromProtoMsg(message: _62.QueryAllowancesByGranterRequestProtoMsg): _62.QueryAllowancesByGranterRequest;
                toProto(message: _62.QueryAllowancesByGranterRequest): Uint8Array;
                toProtoMsg(message: _62.QueryAllowancesByGranterRequest): _62.QueryAllowancesByGranterRequestProtoMsg;
            };
            QueryAllowancesByGranterResponse: {
                typeUrl: string;
                encode(message: _62.QueryAllowancesByGranterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _62.QueryAllowancesByGranterResponse;
                fromJSON(object: any): _62.QueryAllowancesByGranterResponse;
                toJSON(message: _62.QueryAllowancesByGranterResponse): unknown;
                fromPartial(object: Partial<_62.QueryAllowancesByGranterResponse>): _62.QueryAllowancesByGranterResponse;
                fromSDK(object: _62.QueryAllowancesByGranterResponseSDKType): _62.QueryAllowancesByGranterResponse;
                toSDK(message: _62.QueryAllowancesByGranterResponse): _62.QueryAllowancesByGranterResponseSDKType;
                fromAmino(object: _62.QueryAllowancesByGranterResponseAmino): _62.QueryAllowancesByGranterResponse;
                toAmino(message: _62.QueryAllowancesByGranterResponse): _62.QueryAllowancesByGranterResponseAmino;
                fromAminoMsg(object: _62.QueryAllowancesByGranterResponseAminoMsg): _62.QueryAllowancesByGranterResponse;
                toAminoMsg(message: _62.QueryAllowancesByGranterResponse): _62.QueryAllowancesByGranterResponseAminoMsg;
                fromProtoMsg(message: _62.QueryAllowancesByGranterResponseProtoMsg): _62.QueryAllowancesByGranterResponse;
                toProto(message: _62.QueryAllowancesByGranterResponse): Uint8Array;
                toProtoMsg(message: _62.QueryAllowancesByGranterResponse): _62.QueryAllowancesByGranterResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _61.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _61.GenesisState;
                fromJSON(object: any): _61.GenesisState;
                toJSON(message: _61.GenesisState): unknown;
                fromPartial(object: Partial<_61.GenesisState>): _61.GenesisState;
                fromSDK(object: _61.GenesisStateSDKType): _61.GenesisState;
                toSDK(message: _61.GenesisState): _61.GenesisStateSDKType;
                fromAmino(object: _61.GenesisStateAmino): _61.GenesisState;
                toAmino(message: _61.GenesisState): _61.GenesisStateAmino;
                fromAminoMsg(object: _61.GenesisStateAminoMsg): _61.GenesisState;
                toAminoMsg(message: _61.GenesisState): _61.GenesisStateAminoMsg;
                fromProtoMsg(message: _61.GenesisStateProtoMsg): _61.GenesisState;
                toProto(message: _61.GenesisState): Uint8Array;
                toProtoMsg(message: _61.GenesisState): _61.GenesisStateProtoMsg;
            };
            BasicAllowance: {
                typeUrl: string;
                encode(message: _60.BasicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _60.BasicAllowance;
                fromJSON(object: any): _60.BasicAllowance;
                toJSON(message: _60.BasicAllowance): unknown;
                fromPartial(object: Partial<_60.BasicAllowance>): _60.BasicAllowance;
                fromSDK(object: _60.BasicAllowanceSDKType): _60.BasicAllowance;
                toSDK(message: _60.BasicAllowance): _60.BasicAllowanceSDKType;
                fromAmino(object: _60.BasicAllowanceAmino): _60.BasicAllowance;
                toAmino(message: _60.BasicAllowance): _60.BasicAllowanceAmino;
                fromAminoMsg(object: _60.BasicAllowanceAminoMsg): _60.BasicAllowance;
                toAminoMsg(message: _60.BasicAllowance): _60.BasicAllowanceAminoMsg;
                fromProtoMsg(message: _60.BasicAllowanceProtoMsg): _60.BasicAllowance;
                toProto(message: _60.BasicAllowance): Uint8Array;
                toProtoMsg(message: _60.BasicAllowance): _60.BasicAllowanceProtoMsg;
            };
            PeriodicAllowance: {
                typeUrl: string;
                encode(message: _60.PeriodicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _60.PeriodicAllowance;
                fromJSON(object: any): _60.PeriodicAllowance;
                toJSON(message: _60.PeriodicAllowance): unknown;
                fromPartial(object: Partial<_60.PeriodicAllowance>): _60.PeriodicAllowance;
                fromSDK(object: _60.PeriodicAllowanceSDKType): _60.PeriodicAllowance;
                toSDK(message: _60.PeriodicAllowance): _60.PeriodicAllowanceSDKType;
                fromAmino(object: _60.PeriodicAllowanceAmino): _60.PeriodicAllowance;
                toAmino(message: _60.PeriodicAllowance): _60.PeriodicAllowanceAmino;
                fromAminoMsg(object: _60.PeriodicAllowanceAminoMsg): _60.PeriodicAllowance;
                toAminoMsg(message: _60.PeriodicAllowance): _60.PeriodicAllowanceAminoMsg;
                fromProtoMsg(message: _60.PeriodicAllowanceProtoMsg): _60.PeriodicAllowance;
                toProto(message: _60.PeriodicAllowance): Uint8Array;
                toProtoMsg(message: _60.PeriodicAllowance): _60.PeriodicAllowanceProtoMsg;
            };
            AllowedMsgAllowance: {
                typeUrl: string;
                encode(message: _60.AllowedMsgAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _60.AllowedMsgAllowance;
                fromJSON(object: any): _60.AllowedMsgAllowance;
                toJSON(message: _60.AllowedMsgAllowance): unknown;
                fromPartial(object: Partial<_60.AllowedMsgAllowance>): _60.AllowedMsgAllowance;
                fromSDK(object: _60.AllowedMsgAllowanceSDKType): _60.AllowedMsgAllowance;
                toSDK(message: _60.AllowedMsgAllowance): _60.AllowedMsgAllowanceSDKType;
                fromAmino(object: _60.AllowedMsgAllowanceAmino): _60.AllowedMsgAllowance;
                toAmino(message: _60.AllowedMsgAllowance): _60.AllowedMsgAllowanceAmino;
                fromAminoMsg(object: _60.AllowedMsgAllowanceAminoMsg): _60.AllowedMsgAllowance;
                toAminoMsg(message: _60.AllowedMsgAllowance): _60.AllowedMsgAllowanceAminoMsg;
                fromProtoMsg(message: _60.AllowedMsgAllowanceProtoMsg): _60.AllowedMsgAllowance;
                toProto(message: _60.AllowedMsgAllowance): Uint8Array;
                toProtoMsg(message: _60.AllowedMsgAllowance): _60.AllowedMsgAllowanceProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _60.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _60.Grant;
                fromJSON(object: any): _60.Grant;
                toJSON(message: _60.Grant): unknown;
                fromPartial(object: Partial<_60.Grant>): _60.Grant;
                fromSDK(object: _60.GrantSDKType): _60.Grant;
                toSDK(message: _60.Grant): _60.GrantSDKType;
                fromAmino(object: _60.GrantAmino): _60.Grant;
                toAmino(message: _60.Grant): _60.GrantAmino;
                fromAminoMsg(object: _60.GrantAminoMsg): _60.Grant;
                toAminoMsg(message: _60.Grant): _60.GrantAminoMsg;
                fromProtoMsg(message: _60.GrantProtoMsg): _60.Grant;
                toProto(message: _60.Grant): Uint8Array;
                toProtoMsg(message: _60.Grant): _60.GrantProtoMsg;
            };
        };
    }
    namespace genutil {
        namespace module {
            const v1: {
                protobufPackage: "cosmos.genutil.module.v1";
                Module: {
                    typeUrl: string;
                    encode(_: _64.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _64.Module;
                    fromJSON(_: any): _64.Module;
                    toJSON(_: _64.Module): unknown;
                    fromPartial(_: Partial<_64.Module>): _64.Module;
                    fromSDK(_: _64.ModuleSDKType): _64.Module;
                    toSDK(_: _64.Module): _64.ModuleSDKType;
                    fromAmino(_: _64.ModuleAmino): _64.Module;
                    toAmino(_: _64.Module): _64.ModuleAmino;
                    fromAminoMsg(object: _64.ModuleAminoMsg): _64.Module;
                    toAminoMsg(message: _64.Module): _64.ModuleAminoMsg;
                    fromProtoMsg(message: _64.ModuleProtoMsg): _64.Module;
                    toProto(message: _64.Module): Uint8Array;
                    toProtoMsg(message: _64.Module): _64.ModuleProtoMsg;
                };
            };
        }
    }
    namespace gov {
        namespace module {
            const v1: {
                protobufPackage: "cosmos.gov.module.v1";
                Module: {
                    typeUrl: string;
                    encode(message: _65.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _65.Module;
                    fromJSON(object: any): _65.Module;
                    toJSON(message: _65.Module): unknown;
                    fromPartial(object: Partial<_65.Module>): _65.Module;
                    fromSDK(object: _65.ModuleSDKType): _65.Module;
                    toSDK(message: _65.Module): _65.ModuleSDKType;
                    fromAmino(object: _65.ModuleAmino): _65.Module;
                    toAmino(message: _65.Module): _65.ModuleAmino;
                    fromAminoMsg(object: _65.ModuleAminoMsg): _65.Module;
                    toAminoMsg(message: _65.Module): _65.ModuleAminoMsg;
                    fromProtoMsg(message: _65.ModuleProtoMsg): _65.Module;
                    toProto(message: _65.Module): Uint8Array;
                    toProtoMsg(message: _65.Module): _65.ModuleProtoMsg;
                };
            };
        }
        const v1: {
            Msg: typeof _217.Msg;
            Query: typeof _201.Query;
            QueryClientImpl: typeof _201.QueryClientImpl;
            LCDQueryClient: typeof _184.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _69.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    execLegacyContent(value: _69.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _69.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _69.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _69.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _69.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _69.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _69.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _69.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _69.MsgExecLegacyContent;
                    };
                    vote(value: _69.MsgVote): {
                        typeUrl: string;
                        value: _69.MsgVote;
                    };
                    voteWeighted(value: _69.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _69.MsgVoteWeighted;
                    };
                    deposit(value: _69.MsgDeposit): {
                        typeUrl: string;
                        value: _69.MsgDeposit;
                    };
                    updateParams(value: _69.MsgUpdateParams): {
                        typeUrl: string;
                        value: _69.MsgUpdateParams;
                    };
                };
                toJSON: {
                    submitProposal(value: _69.MsgSubmitProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    execLegacyContent(value: _69.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: unknown;
                    };
                    vote(value: _69.MsgVote): {
                        typeUrl: string;
                        value: unknown;
                    };
                    voteWeighted(value: _69.MsgVoteWeighted): {
                        typeUrl: string;
                        value: unknown;
                    };
                    deposit(value: _69.MsgDeposit): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateParams(value: _69.MsgUpdateParams): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _69.MsgSubmitProposal;
                    };
                    execLegacyContent(value: any): {
                        typeUrl: string;
                        value: _69.MsgExecLegacyContent;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _69.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _69.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _69.MsgDeposit;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _69.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    submitProposal(value: _69.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _69.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _69.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _69.MsgExecLegacyContent;
                    };
                    vote(value: _69.MsgVote): {
                        typeUrl: string;
                        value: _69.MsgVote;
                    };
                    voteWeighted(value: _69.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _69.MsgVoteWeighted;
                    };
                    deposit(value: _69.MsgDeposit): {
                        typeUrl: string;
                        value: _69.MsgDeposit;
                    };
                    updateParams(value: _69.MsgUpdateParams): {
                        typeUrl: string;
                        value: _69.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _69.MsgSubmitProposal) => _69.MsgSubmitProposalAmino;
                    fromAmino: (object: _69.MsgSubmitProposalAmino) => _69.MsgSubmitProposal;
                };
                "/cosmos.gov.v1.MsgExecLegacyContent": {
                    aminoType: string;
                    toAmino: (message: _69.MsgExecLegacyContent) => _69.MsgExecLegacyContentAmino;
                    fromAmino: (object: _69.MsgExecLegacyContentAmino) => _69.MsgExecLegacyContent;
                };
                "/cosmos.gov.v1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _69.MsgVote) => _69.MsgVoteAmino;
                    fromAmino: (object: _69.MsgVoteAmino) => _69.MsgVote;
                };
                "/cosmos.gov.v1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _69.MsgVoteWeighted) => _69.MsgVoteWeightedAmino;
                    fromAmino: (object: _69.MsgVoteWeightedAmino) => _69.MsgVoteWeighted;
                };
                "/cosmos.gov.v1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _69.MsgDeposit) => _69.MsgDepositAmino;
                    fromAmino: (object: _69.MsgDepositAmino) => _69.MsgDeposit;
                };
                "/cosmos.gov.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _69.MsgUpdateParams) => _69.MsgUpdateParamsAmino;
                    fromAmino: (object: _69.MsgUpdateParamsAmino) => _69.MsgUpdateParams;
                };
            };
            protobufPackage: "cosmos.gov.v1";
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _69.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _69.MsgSubmitProposal;
                fromJSON(object: any): _69.MsgSubmitProposal;
                toJSON(message: _69.MsgSubmitProposal): unknown;
                fromPartial(object: Partial<_69.MsgSubmitProposal>): _69.MsgSubmitProposal;
                fromSDK(object: _69.MsgSubmitProposalSDKType): _69.MsgSubmitProposal;
                toSDK(message: _69.MsgSubmitProposal): _69.MsgSubmitProposalSDKType;
                fromAmino(object: _69.MsgSubmitProposalAmino): _69.MsgSubmitProposal;
                toAmino(message: _69.MsgSubmitProposal): _69.MsgSubmitProposalAmino;
                fromAminoMsg(object: _69.MsgSubmitProposalAminoMsg): _69.MsgSubmitProposal;
                toAminoMsg(message: _69.MsgSubmitProposal): _69.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _69.MsgSubmitProposalProtoMsg): _69.MsgSubmitProposal;
                toProto(message: _69.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _69.MsgSubmitProposal): _69.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _69.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _69.MsgSubmitProposalResponse;
                fromJSON(object: any): _69.MsgSubmitProposalResponse;
                toJSON(message: _69.MsgSubmitProposalResponse): unknown;
                fromPartial(object: Partial<_69.MsgSubmitProposalResponse>): _69.MsgSubmitProposalResponse;
                fromSDK(object: _69.MsgSubmitProposalResponseSDKType): _69.MsgSubmitProposalResponse;
                toSDK(message: _69.MsgSubmitProposalResponse): _69.MsgSubmitProposalResponseSDKType;
                fromAmino(object: _69.MsgSubmitProposalResponseAmino): _69.MsgSubmitProposalResponse;
                toAmino(message: _69.MsgSubmitProposalResponse): _69.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _69.MsgSubmitProposalResponseAminoMsg): _69.MsgSubmitProposalResponse;
                toAminoMsg(message: _69.MsgSubmitProposalResponse): _69.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _69.MsgSubmitProposalResponseProtoMsg): _69.MsgSubmitProposalResponse;
                toProto(message: _69.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _69.MsgSubmitProposalResponse): _69.MsgSubmitProposalResponseProtoMsg;
            };
            MsgExecLegacyContent: {
                typeUrl: string;
                encode(message: _69.MsgExecLegacyContent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _69.MsgExecLegacyContent;
                fromJSON(object: any): _69.MsgExecLegacyContent;
                toJSON(message: _69.MsgExecLegacyContent): unknown;
                fromPartial(object: Partial<_69.MsgExecLegacyContent>): _69.MsgExecLegacyContent;
                fromSDK(object: _69.MsgExecLegacyContentSDKType): _69.MsgExecLegacyContent;
                toSDK(message: _69.MsgExecLegacyContent): _69.MsgExecLegacyContentSDKType;
                fromAmino(object: _69.MsgExecLegacyContentAmino): _69.MsgExecLegacyContent;
                toAmino(message: _69.MsgExecLegacyContent): _69.MsgExecLegacyContentAmino;
                fromAminoMsg(object: _69.MsgExecLegacyContentAminoMsg): _69.MsgExecLegacyContent;
                toAminoMsg(message: _69.MsgExecLegacyContent): _69.MsgExecLegacyContentAminoMsg;
                fromProtoMsg(message: _69.MsgExecLegacyContentProtoMsg): _69.MsgExecLegacyContent;
                toProto(message: _69.MsgExecLegacyContent): Uint8Array;
                toProtoMsg(message: _69.MsgExecLegacyContent): _69.MsgExecLegacyContentProtoMsg;
            };
            MsgExecLegacyContentResponse: {
                typeUrl: string;
                encode(_: _69.MsgExecLegacyContentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _69.MsgExecLegacyContentResponse;
                fromJSON(_: any): _69.MsgExecLegacyContentResponse;
                toJSON(_: _69.MsgExecLegacyContentResponse): unknown;
                fromPartial(_: Partial<_69.MsgExecLegacyContentResponse>): _69.MsgExecLegacyContentResponse;
                fromSDK(_: _69.MsgExecLegacyContentResponseSDKType): _69.MsgExecLegacyContentResponse;
                toSDK(_: _69.MsgExecLegacyContentResponse): _69.MsgExecLegacyContentResponseSDKType;
                fromAmino(_: _69.MsgExecLegacyContentResponseAmino): _69.MsgExecLegacyContentResponse;
                toAmino(_: _69.MsgExecLegacyContentResponse): _69.MsgExecLegacyContentResponseAmino;
                fromAminoMsg(object: _69.MsgExecLegacyContentResponseAminoMsg): _69.MsgExecLegacyContentResponse;
                toAminoMsg(message: _69.MsgExecLegacyContentResponse): _69.MsgExecLegacyContentResponseAminoMsg;
                fromProtoMsg(message: _69.MsgExecLegacyContentResponseProtoMsg): _69.MsgExecLegacyContentResponse;
                toProto(message: _69.MsgExecLegacyContentResponse): Uint8Array;
                toProtoMsg(message: _69.MsgExecLegacyContentResponse): _69.MsgExecLegacyContentResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _69.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _69.MsgVote;
                fromJSON(object: any): _69.MsgVote;
                toJSON(message: _69.MsgVote): unknown;
                fromPartial(object: Partial<_69.MsgVote>): _69.MsgVote;
                fromSDK(object: _69.MsgVoteSDKType): _69.MsgVote;
                toSDK(message: _69.MsgVote): _69.MsgVoteSDKType;
                fromAmino(object: _69.MsgVoteAmino): _69.MsgVote;
                toAmino(message: _69.MsgVote): _69.MsgVoteAmino;
                fromAminoMsg(object: _69.MsgVoteAminoMsg): _69.MsgVote;
                toAminoMsg(message: _69.MsgVote): _69.MsgVoteAminoMsg;
                fromProtoMsg(message: _69.MsgVoteProtoMsg): _69.MsgVote;
                toProto(message: _69.MsgVote): Uint8Array;
                toProtoMsg(message: _69.MsgVote): _69.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _69.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _69.MsgVoteResponse;
                fromJSON(_: any): _69.MsgVoteResponse;
                toJSON(_: _69.MsgVoteResponse): unknown;
                fromPartial(_: Partial<_69.MsgVoteResponse>): _69.MsgVoteResponse;
                fromSDK(_: _69.MsgVoteResponseSDKType): _69.MsgVoteResponse;
                toSDK(_: _69.MsgVoteResponse): _69.MsgVoteResponseSDKType;
                fromAmino(_: _69.MsgVoteResponseAmino): _69.MsgVoteResponse;
                toAmino(_: _69.MsgVoteResponse): _69.MsgVoteResponseAmino;
                fromAminoMsg(object: _69.MsgVoteResponseAminoMsg): _69.MsgVoteResponse;
                toAminoMsg(message: _69.MsgVoteResponse): _69.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _69.MsgVoteResponseProtoMsg): _69.MsgVoteResponse;
                toProto(message: _69.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _69.MsgVoteResponse): _69.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                typeUrl: string;
                encode(message: _69.MsgVoteWeighted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _69.MsgVoteWeighted;
                fromJSON(object: any): _69.MsgVoteWeighted;
                toJSON(message: _69.MsgVoteWeighted): unknown;
                fromPartial(object: Partial<_69.MsgVoteWeighted>): _69.MsgVoteWeighted;
                fromSDK(object: _69.MsgVoteWeightedSDKType): _69.MsgVoteWeighted;
                toSDK(message: _69.MsgVoteWeighted): _69.MsgVoteWeightedSDKType;
                fromAmino(object: _69.MsgVoteWeightedAmino): _69.MsgVoteWeighted;
                toAmino(message: _69.MsgVoteWeighted): _69.MsgVoteWeightedAmino;
                fromAminoMsg(object: _69.MsgVoteWeightedAminoMsg): _69.MsgVoteWeighted;
                toAminoMsg(message: _69.MsgVoteWeighted): _69.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _69.MsgVoteWeightedProtoMsg): _69.MsgVoteWeighted;
                toProto(message: _69.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _69.MsgVoteWeighted): _69.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                typeUrl: string;
                encode(_: _69.MsgVoteWeightedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _69.MsgVoteWeightedResponse;
                fromJSON(_: any): _69.MsgVoteWeightedResponse;
                toJSON(_: _69.MsgVoteWeightedResponse): unknown;
                fromPartial(_: Partial<_69.MsgVoteWeightedResponse>): _69.MsgVoteWeightedResponse;
                fromSDK(_: _69.MsgVoteWeightedResponseSDKType): _69.MsgVoteWeightedResponse;
                toSDK(_: _69.MsgVoteWeightedResponse): _69.MsgVoteWeightedResponseSDKType;
                fromAmino(_: _69.MsgVoteWeightedResponseAmino): _69.MsgVoteWeightedResponse;
                toAmino(_: _69.MsgVoteWeightedResponse): _69.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _69.MsgVoteWeightedResponseAminoMsg): _69.MsgVoteWeightedResponse;
                toAminoMsg(message: _69.MsgVoteWeightedResponse): _69.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _69.MsgVoteWeightedResponseProtoMsg): _69.MsgVoteWeightedResponse;
                toProto(message: _69.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _69.MsgVoteWeightedResponse): _69.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _69.MsgDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _69.MsgDeposit;
                fromJSON(object: any): _69.MsgDeposit;
                toJSON(message: _69.MsgDeposit): unknown;
                fromPartial(object: Partial<_69.MsgDeposit>): _69.MsgDeposit;
                fromSDK(object: _69.MsgDepositSDKType): _69.MsgDeposit;
                toSDK(message: _69.MsgDeposit): _69.MsgDepositSDKType;
                fromAmino(object: _69.MsgDepositAmino): _69.MsgDeposit;
                toAmino(message: _69.MsgDeposit): _69.MsgDepositAmino;
                fromAminoMsg(object: _69.MsgDepositAminoMsg): _69.MsgDeposit;
                toAminoMsg(message: _69.MsgDeposit): _69.MsgDepositAminoMsg;
                fromProtoMsg(message: _69.MsgDepositProtoMsg): _69.MsgDeposit;
                toProto(message: _69.MsgDeposit): Uint8Array;
                toProtoMsg(message: _69.MsgDeposit): _69.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(_: _69.MsgDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _69.MsgDepositResponse;
                fromJSON(_: any): _69.MsgDepositResponse;
                toJSON(_: _69.MsgDepositResponse): unknown;
                fromPartial(_: Partial<_69.MsgDepositResponse>): _69.MsgDepositResponse;
                fromSDK(_: _69.MsgDepositResponseSDKType): _69.MsgDepositResponse;
                toSDK(_: _69.MsgDepositResponse): _69.MsgDepositResponseSDKType;
                fromAmino(_: _69.MsgDepositResponseAmino): _69.MsgDepositResponse;
                toAmino(_: _69.MsgDepositResponse): _69.MsgDepositResponseAmino;
                fromAminoMsg(object: _69.MsgDepositResponseAminoMsg): _69.MsgDepositResponse;
                toAminoMsg(message: _69.MsgDepositResponse): _69.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _69.MsgDepositResponseProtoMsg): _69.MsgDepositResponse;
                toProto(message: _69.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _69.MsgDepositResponse): _69.MsgDepositResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _69.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _69.MsgUpdateParams;
                fromJSON(object: any): _69.MsgUpdateParams;
                toJSON(message: _69.MsgUpdateParams): unknown;
                fromPartial(object: Partial<_69.MsgUpdateParams>): _69.MsgUpdateParams;
                fromSDK(object: _69.MsgUpdateParamsSDKType): _69.MsgUpdateParams;
                toSDK(message: _69.MsgUpdateParams): _69.MsgUpdateParamsSDKType;
                fromAmino(object: _69.MsgUpdateParamsAmino): _69.MsgUpdateParams;
                toAmino(message: _69.MsgUpdateParams): _69.MsgUpdateParamsAmino;
                fromAminoMsg(object: _69.MsgUpdateParamsAminoMsg): _69.MsgUpdateParams;
                toAminoMsg(message: _69.MsgUpdateParams): _69.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _69.MsgUpdateParamsProtoMsg): _69.MsgUpdateParams;
                toProto(message: _69.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _69.MsgUpdateParams): _69.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _69.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _69.MsgUpdateParamsResponse;
                fromJSON(_: any): _69.MsgUpdateParamsResponse;
                toJSON(_: _69.MsgUpdateParamsResponse): unknown;
                fromPartial(_: Partial<_69.MsgUpdateParamsResponse>): _69.MsgUpdateParamsResponse;
                fromSDK(_: _69.MsgUpdateParamsResponseSDKType): _69.MsgUpdateParamsResponse;
                toSDK(_: _69.MsgUpdateParamsResponse): _69.MsgUpdateParamsResponseSDKType;
                fromAmino(_: _69.MsgUpdateParamsResponseAmino): _69.MsgUpdateParamsResponse;
                toAmino(_: _69.MsgUpdateParamsResponse): _69.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _69.MsgUpdateParamsResponseAminoMsg): _69.MsgUpdateParamsResponse;
                toAminoMsg(message: _69.MsgUpdateParamsResponse): _69.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _69.MsgUpdateParamsResponseProtoMsg): _69.MsgUpdateParamsResponse;
                toProto(message: _69.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _69.MsgUpdateParamsResponse): _69.MsgUpdateParamsResponseProtoMsg;
            };
            Cosmos_govv1beta1Content_InterfaceDecoder: (input: import("..").BinaryReader | Uint8Array) => import("../google/protobuf/any").Any | _54.CommunityPoolSpendProposal | _54.CommunityPoolSpendProposalWithDeposit | _94.ParameterChangeProposal | _112.SoftwareUpgradeProposal | _112.CancelSoftwareUpgradeProposal | _71.TextProposal;
            Cosmos_govv1beta1Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_govv1beta1Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _68.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _68.QueryProposalRequest;
                fromJSON(object: any): _68.QueryProposalRequest;
                toJSON(message: _68.QueryProposalRequest): unknown;
                fromPartial(object: Partial<_68.QueryProposalRequest>): _68.QueryProposalRequest;
                fromSDK(object: _68.QueryProposalRequestSDKType): _68.QueryProposalRequest;
                toSDK(message: _68.QueryProposalRequest): _68.QueryProposalRequestSDKType;
                fromAmino(object: _68.QueryProposalRequestAmino): _68.QueryProposalRequest;
                toAmino(message: _68.QueryProposalRequest): _68.QueryProposalRequestAmino;
                fromAminoMsg(object: _68.QueryProposalRequestAminoMsg): _68.QueryProposalRequest;
                toAminoMsg(message: _68.QueryProposalRequest): _68.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _68.QueryProposalRequestProtoMsg): _68.QueryProposalRequest;
                toProto(message: _68.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _68.QueryProposalRequest): _68.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _68.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _68.QueryProposalResponse;
                fromJSON(object: any): _68.QueryProposalResponse;
                toJSON(message: _68.QueryProposalResponse): unknown;
                fromPartial(object: Partial<_68.QueryProposalResponse>): _68.QueryProposalResponse;
                fromSDK(object: _68.QueryProposalResponseSDKType): _68.QueryProposalResponse;
                toSDK(message: _68.QueryProposalResponse): _68.QueryProposalResponseSDKType;
                fromAmino(object: _68.QueryProposalResponseAmino): _68.QueryProposalResponse;
                toAmino(message: _68.QueryProposalResponse): _68.QueryProposalResponseAmino;
                fromAminoMsg(object: _68.QueryProposalResponseAminoMsg): _68.QueryProposalResponse;
                toAminoMsg(message: _68.QueryProposalResponse): _68.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _68.QueryProposalResponseProtoMsg): _68.QueryProposalResponse;
                toProto(message: _68.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _68.QueryProposalResponse): _68.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                typeUrl: string;
                encode(message: _68.QueryProposalsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _68.QueryProposalsRequest;
                fromJSON(object: any): _68.QueryProposalsRequest;
                toJSON(message: _68.QueryProposalsRequest): unknown;
                fromPartial(object: Partial<_68.QueryProposalsRequest>): _68.QueryProposalsRequest;
                fromSDK(object: _68.QueryProposalsRequestSDKType): _68.QueryProposalsRequest;
                toSDK(message: _68.QueryProposalsRequest): _68.QueryProposalsRequestSDKType;
                fromAmino(object: _68.QueryProposalsRequestAmino): _68.QueryProposalsRequest;
                toAmino(message: _68.QueryProposalsRequest): _68.QueryProposalsRequestAmino;
                fromAminoMsg(object: _68.QueryProposalsRequestAminoMsg): _68.QueryProposalsRequest;
                toAminoMsg(message: _68.QueryProposalsRequest): _68.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _68.QueryProposalsRequestProtoMsg): _68.QueryProposalsRequest;
                toProto(message: _68.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _68.QueryProposalsRequest): _68.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                typeUrl: string;
                encode(message: _68.QueryProposalsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _68.QueryProposalsResponse;
                fromJSON(object: any): _68.QueryProposalsResponse;
                toJSON(message: _68.QueryProposalsResponse): unknown;
                fromPartial(object: Partial<_68.QueryProposalsResponse>): _68.QueryProposalsResponse;
                fromSDK(object: _68.QueryProposalsResponseSDKType): _68.QueryProposalsResponse;
                toSDK(message: _68.QueryProposalsResponse): _68.QueryProposalsResponseSDKType;
                fromAmino(object: _68.QueryProposalsResponseAmino): _68.QueryProposalsResponse;
                toAmino(message: _68.QueryProposalsResponse): _68.QueryProposalsResponseAmino;
                fromAminoMsg(object: _68.QueryProposalsResponseAminoMsg): _68.QueryProposalsResponse;
                toAminoMsg(message: _68.QueryProposalsResponse): _68.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _68.QueryProposalsResponseProtoMsg): _68.QueryProposalsResponse;
                toProto(message: _68.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _68.QueryProposalsResponse): _68.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                typeUrl: string;
                encode(message: _68.QueryVoteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _68.QueryVoteRequest;
                fromJSON(object: any): _68.QueryVoteRequest;
                toJSON(message: _68.QueryVoteRequest): unknown;
                fromPartial(object: Partial<_68.QueryVoteRequest>): _68.QueryVoteRequest;
                fromSDK(object: _68.QueryVoteRequestSDKType): _68.QueryVoteRequest;
                toSDK(message: _68.QueryVoteRequest): _68.QueryVoteRequestSDKType;
                fromAmino(object: _68.QueryVoteRequestAmino): _68.QueryVoteRequest;
                toAmino(message: _68.QueryVoteRequest): _68.QueryVoteRequestAmino;
                fromAminoMsg(object: _68.QueryVoteRequestAminoMsg): _68.QueryVoteRequest;
                toAminoMsg(message: _68.QueryVoteRequest): _68.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _68.QueryVoteRequestProtoMsg): _68.QueryVoteRequest;
                toProto(message: _68.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _68.QueryVoteRequest): _68.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                typeUrl: string;
                encode(message: _68.QueryVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _68.QueryVoteResponse;
                fromJSON(object: any): _68.QueryVoteResponse;
                toJSON(message: _68.QueryVoteResponse): unknown;
                fromPartial(object: Partial<_68.QueryVoteResponse>): _68.QueryVoteResponse;
                fromSDK(object: _68.QueryVoteResponseSDKType): _68.QueryVoteResponse;
                toSDK(message: _68.QueryVoteResponse): _68.QueryVoteResponseSDKType;
                fromAmino(object: _68.QueryVoteResponseAmino): _68.QueryVoteResponse;
                toAmino(message: _68.QueryVoteResponse): _68.QueryVoteResponseAmino;
                fromAminoMsg(object: _68.QueryVoteResponseAminoMsg): _68.QueryVoteResponse;
                toAminoMsg(message: _68.QueryVoteResponse): _68.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _68.QueryVoteResponseProtoMsg): _68.QueryVoteResponse;
                toProto(message: _68.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _68.QueryVoteResponse): _68.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                typeUrl: string;
                encode(message: _68.QueryVotesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _68.QueryVotesRequest;
                fromJSON(object: any): _68.QueryVotesRequest;
                toJSON(message: _68.QueryVotesRequest): unknown;
                fromPartial(object: Partial<_68.QueryVotesRequest>): _68.QueryVotesRequest;
                fromSDK(object: _68.QueryVotesRequestSDKType): _68.QueryVotesRequest;
                toSDK(message: _68.QueryVotesRequest): _68.QueryVotesRequestSDKType;
                fromAmino(object: _68.QueryVotesRequestAmino): _68.QueryVotesRequest;
                toAmino(message: _68.QueryVotesRequest): _68.QueryVotesRequestAmino;
                fromAminoMsg(object: _68.QueryVotesRequestAminoMsg): _68.QueryVotesRequest;
                toAminoMsg(message: _68.QueryVotesRequest): _68.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _68.QueryVotesRequestProtoMsg): _68.QueryVotesRequest;
                toProto(message: _68.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _68.QueryVotesRequest): _68.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                typeUrl: string;
                encode(message: _68.QueryVotesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _68.QueryVotesResponse;
                fromJSON(object: any): _68.QueryVotesResponse;
                toJSON(message: _68.QueryVotesResponse): unknown;
                fromPartial(object: Partial<_68.QueryVotesResponse>): _68.QueryVotesResponse;
                fromSDK(object: _68.QueryVotesResponseSDKType): _68.QueryVotesResponse;
                toSDK(message: _68.QueryVotesResponse): _68.QueryVotesResponseSDKType;
                fromAmino(object: _68.QueryVotesResponseAmino): _68.QueryVotesResponse;
                toAmino(message: _68.QueryVotesResponse): _68.QueryVotesResponseAmino;
                fromAminoMsg(object: _68.QueryVotesResponseAminoMsg): _68.QueryVotesResponse;
                toAminoMsg(message: _68.QueryVotesResponse): _68.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _68.QueryVotesResponseProtoMsg): _68.QueryVotesResponse;
                toProto(message: _68.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _68.QueryVotesResponse): _68.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _68.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _68.QueryParamsRequest;
                fromJSON(object: any): _68.QueryParamsRequest;
                toJSON(message: _68.QueryParamsRequest): unknown;
                fromPartial(object: Partial<_68.QueryParamsRequest>): _68.QueryParamsRequest;
                fromSDK(object: _68.QueryParamsRequestSDKType): _68.QueryParamsRequest;
                toSDK(message: _68.QueryParamsRequest): _68.QueryParamsRequestSDKType;
                fromAmino(object: _68.QueryParamsRequestAmino): _68.QueryParamsRequest;
                toAmino(message: _68.QueryParamsRequest): _68.QueryParamsRequestAmino;
                fromAminoMsg(object: _68.QueryParamsRequestAminoMsg): _68.QueryParamsRequest;
                toAminoMsg(message: _68.QueryParamsRequest): _68.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _68.QueryParamsRequestProtoMsg): _68.QueryParamsRequest;
                toProto(message: _68.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _68.QueryParamsRequest): _68.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _68.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _68.QueryParamsResponse;
                fromJSON(object: any): _68.QueryParamsResponse;
                toJSON(message: _68.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_68.QueryParamsResponse>): _68.QueryParamsResponse;
                fromSDK(object: _68.QueryParamsResponseSDKType): _68.QueryParamsResponse;
                toSDK(message: _68.QueryParamsResponse): _68.QueryParamsResponseSDKType;
                fromAmino(object: _68.QueryParamsResponseAmino): _68.QueryParamsResponse;
                toAmino(message: _68.QueryParamsResponse): _68.QueryParamsResponseAmino;
                fromAminoMsg(object: _68.QueryParamsResponseAminoMsg): _68.QueryParamsResponse;
                toAminoMsg(message: _68.QueryParamsResponse): _68.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _68.QueryParamsResponseProtoMsg): _68.QueryParamsResponse;
                toProto(message: _68.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _68.QueryParamsResponse): _68.QueryParamsResponseProtoMsg;
            };
            QueryDepositRequest: {
                typeUrl: string;
                encode(message: _68.QueryDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _68.QueryDepositRequest;
                fromJSON(object: any): _68.QueryDepositRequest;
                toJSON(message: _68.QueryDepositRequest): unknown;
                fromPartial(object: Partial<_68.QueryDepositRequest>): _68.QueryDepositRequest;
                fromSDK(object: _68.QueryDepositRequestSDKType): _68.QueryDepositRequest;
                toSDK(message: _68.QueryDepositRequest): _68.QueryDepositRequestSDKType;
                fromAmino(object: _68.QueryDepositRequestAmino): _68.QueryDepositRequest;
                toAmino(message: _68.QueryDepositRequest): _68.QueryDepositRequestAmino;
                fromAminoMsg(object: _68.QueryDepositRequestAminoMsg): _68.QueryDepositRequest;
                toAminoMsg(message: _68.QueryDepositRequest): _68.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _68.QueryDepositRequestProtoMsg): _68.QueryDepositRequest;
                toProto(message: _68.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _68.QueryDepositRequest): _68.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                typeUrl: string;
                encode(message: _68.QueryDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _68.QueryDepositResponse;
                fromJSON(object: any): _68.QueryDepositResponse;
                toJSON(message: _68.QueryDepositResponse): unknown;
                fromPartial(object: Partial<_68.QueryDepositResponse>): _68.QueryDepositResponse;
                fromSDK(object: _68.QueryDepositResponseSDKType): _68.QueryDepositResponse;
                toSDK(message: _68.QueryDepositResponse): _68.QueryDepositResponseSDKType;
                fromAmino(object: _68.QueryDepositResponseAmino): _68.QueryDepositResponse;
                toAmino(message: _68.QueryDepositResponse): _68.QueryDepositResponseAmino;
                fromAminoMsg(object: _68.QueryDepositResponseAminoMsg): _68.QueryDepositResponse;
                toAminoMsg(message: _68.QueryDepositResponse): _68.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _68.QueryDepositResponseProtoMsg): _68.QueryDepositResponse;
                toProto(message: _68.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _68.QueryDepositResponse): _68.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                encode(message: _68.QueryDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _68.QueryDepositsRequest;
                fromJSON(object: any): _68.QueryDepositsRequest;
                toJSON(message: _68.QueryDepositsRequest): unknown;
                fromPartial(object: Partial<_68.QueryDepositsRequest>): _68.QueryDepositsRequest;
                fromSDK(object: _68.QueryDepositsRequestSDKType): _68.QueryDepositsRequest;
                toSDK(message: _68.QueryDepositsRequest): _68.QueryDepositsRequestSDKType;
                fromAmino(object: _68.QueryDepositsRequestAmino): _68.QueryDepositsRequest;
                toAmino(message: _68.QueryDepositsRequest): _68.QueryDepositsRequestAmino;
                fromAminoMsg(object: _68.QueryDepositsRequestAminoMsg): _68.QueryDepositsRequest;
                toAminoMsg(message: _68.QueryDepositsRequest): _68.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _68.QueryDepositsRequestProtoMsg): _68.QueryDepositsRequest;
                toProto(message: _68.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _68.QueryDepositsRequest): _68.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                encode(message: _68.QueryDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _68.QueryDepositsResponse;
                fromJSON(object: any): _68.QueryDepositsResponse;
                toJSON(message: _68.QueryDepositsResponse): unknown;
                fromPartial(object: Partial<_68.QueryDepositsResponse>): _68.QueryDepositsResponse;
                fromSDK(object: _68.QueryDepositsResponseSDKType): _68.QueryDepositsResponse;
                toSDK(message: _68.QueryDepositsResponse): _68.QueryDepositsResponseSDKType;
                fromAmino(object: _68.QueryDepositsResponseAmino): _68.QueryDepositsResponse;
                toAmino(message: _68.QueryDepositsResponse): _68.QueryDepositsResponseAmino;
                fromAminoMsg(object: _68.QueryDepositsResponseAminoMsg): _68.QueryDepositsResponse;
                toAminoMsg(message: _68.QueryDepositsResponse): _68.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _68.QueryDepositsResponseProtoMsg): _68.QueryDepositsResponse;
                toProto(message: _68.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _68.QueryDepositsResponse): _68.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _68.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _68.QueryTallyResultRequest;
                fromJSON(object: any): _68.QueryTallyResultRequest;
                toJSON(message: _68.QueryTallyResultRequest): unknown;
                fromPartial(object: Partial<_68.QueryTallyResultRequest>): _68.QueryTallyResultRequest;
                fromSDK(object: _68.QueryTallyResultRequestSDKType): _68.QueryTallyResultRequest;
                toSDK(message: _68.QueryTallyResultRequest): _68.QueryTallyResultRequestSDKType;
                fromAmino(object: _68.QueryTallyResultRequestAmino): _68.QueryTallyResultRequest;
                toAmino(message: _68.QueryTallyResultRequest): _68.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _68.QueryTallyResultRequestAminoMsg): _68.QueryTallyResultRequest;
                toAminoMsg(message: _68.QueryTallyResultRequest): _68.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _68.QueryTallyResultRequestProtoMsg): _68.QueryTallyResultRequest;
                toProto(message: _68.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _68.QueryTallyResultRequest): _68.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _68.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _68.QueryTallyResultResponse;
                fromJSON(object: any): _68.QueryTallyResultResponse;
                toJSON(message: _68.QueryTallyResultResponse): unknown;
                fromPartial(object: Partial<_68.QueryTallyResultResponse>): _68.QueryTallyResultResponse;
                fromSDK(object: _68.QueryTallyResultResponseSDKType): _68.QueryTallyResultResponse;
                toSDK(message: _68.QueryTallyResultResponse): _68.QueryTallyResultResponseSDKType;
                fromAmino(object: _68.QueryTallyResultResponseAmino): _68.QueryTallyResultResponse;
                toAmino(message: _68.QueryTallyResultResponse): _68.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _68.QueryTallyResultResponseAminoMsg): _68.QueryTallyResultResponse;
                toAminoMsg(message: _68.QueryTallyResultResponse): _68.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _68.QueryTallyResultResponseProtoMsg): _68.QueryTallyResultResponse;
                toProto(message: _68.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _68.QueryTallyResultResponse): _68.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _67.VoteOption;
            voteOptionToJSON(object: _67.VoteOption): string;
            proposalStatusFromJSON(object: any): _67.ProposalStatus;
            proposalStatusToJSON(object: _67.ProposalStatus): string;
            VoteOption: typeof _67.VoteOption;
            VoteOptionSDKType: typeof _67.VoteOption;
            VoteOptionAmino: typeof _67.VoteOption;
            ProposalStatus: typeof _67.ProposalStatus;
            ProposalStatusSDKType: typeof _67.ProposalStatus;
            ProposalStatusAmino: typeof _67.ProposalStatus;
            WeightedVoteOption: {
                typeUrl: string;
                encode(message: _67.WeightedVoteOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _67.WeightedVoteOption;
                fromJSON(object: any): _67.WeightedVoteOption;
                toJSON(message: _67.WeightedVoteOption): unknown;
                fromPartial(object: Partial<_67.WeightedVoteOption>): _67.WeightedVoteOption;
                fromSDK(object: _67.WeightedVoteOptionSDKType): _67.WeightedVoteOption;
                toSDK(message: _67.WeightedVoteOption): _67.WeightedVoteOptionSDKType;
                fromAmino(object: _67.WeightedVoteOptionAmino): _67.WeightedVoteOption;
                toAmino(message: _67.WeightedVoteOption): _67.WeightedVoteOptionAmino;
                fromAminoMsg(object: _67.WeightedVoteOptionAminoMsg): _67.WeightedVoteOption;
                toAminoMsg(message: _67.WeightedVoteOption): _67.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _67.WeightedVoteOptionProtoMsg): _67.WeightedVoteOption;
                toProto(message: _67.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _67.WeightedVoteOption): _67.WeightedVoteOptionProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                encode(message: _67.Deposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _67.Deposit;
                fromJSON(object: any): _67.Deposit;
                toJSON(message: _67.Deposit): unknown;
                fromPartial(object: Partial<_67.Deposit>): _67.Deposit;
                fromSDK(object: _67.DepositSDKType): _67.Deposit;
                toSDK(message: _67.Deposit): _67.DepositSDKType;
                fromAmino(object: _67.DepositAmino): _67.Deposit;
                toAmino(message: _67.Deposit): _67.DepositAmino;
                fromAminoMsg(object: _67.DepositAminoMsg): _67.Deposit;
                toAminoMsg(message: _67.Deposit): _67.DepositAminoMsg;
                fromProtoMsg(message: _67.DepositProtoMsg): _67.Deposit;
                toProto(message: _67.Deposit): Uint8Array;
                toProtoMsg(message: _67.Deposit): _67.DepositProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _67.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _67.Proposal;
                fromJSON(object: any): _67.Proposal;
                toJSON(message: _67.Proposal): unknown;
                fromPartial(object: Partial<_67.Proposal>): _67.Proposal;
                fromSDK(object: _67.ProposalSDKType): _67.Proposal;
                toSDK(message: _67.Proposal): _67.ProposalSDKType;
                fromAmino(object: _67.ProposalAmino): _67.Proposal;
                toAmino(message: _67.Proposal): _67.ProposalAmino;
                fromAminoMsg(object: _67.ProposalAminoMsg): _67.Proposal;
                toAminoMsg(message: _67.Proposal): _67.ProposalAminoMsg;
                fromProtoMsg(message: _67.ProposalProtoMsg): _67.Proposal;
                toProto(message: _67.Proposal): Uint8Array;
                toProtoMsg(message: _67.Proposal): _67.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _67.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _67.TallyResult;
                fromJSON(object: any): _67.TallyResult;
                toJSON(message: _67.TallyResult): unknown;
                fromPartial(object: Partial<_67.TallyResult>): _67.TallyResult;
                fromSDK(object: _67.TallyResultSDKType): _67.TallyResult;
                toSDK(message: _67.TallyResult): _67.TallyResultSDKType;
                fromAmino(object: _67.TallyResultAmino): _67.TallyResult;
                toAmino(message: _67.TallyResult): _67.TallyResultAmino;
                fromAminoMsg(object: _67.TallyResultAminoMsg): _67.TallyResult;
                toAminoMsg(message: _67.TallyResult): _67.TallyResultAminoMsg;
                fromProtoMsg(message: _67.TallyResultProtoMsg): _67.TallyResult;
                toProto(message: _67.TallyResult): Uint8Array;
                toProtoMsg(message: _67.TallyResult): _67.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _67.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _67.Vote;
                fromJSON(object: any): _67.Vote;
                toJSON(message: _67.Vote): unknown;
                fromPartial(object: Partial<_67.Vote>): _67.Vote;
                fromSDK(object: _67.VoteSDKType): _67.Vote;
                toSDK(message: _67.Vote): _67.VoteSDKType;
                fromAmino(object: _67.VoteAmino): _67.Vote;
                toAmino(message: _67.Vote): _67.VoteAmino;
                fromAminoMsg(object: _67.VoteAminoMsg): _67.Vote;
                toAminoMsg(message: _67.Vote): _67.VoteAminoMsg;
                fromProtoMsg(message: _67.VoteProtoMsg): _67.Vote;
                toProto(message: _67.Vote): Uint8Array;
                toProtoMsg(message: _67.Vote): _67.VoteProtoMsg;
            };
            DepositParams: {
                typeUrl: string;
                encode(message: _67.DepositParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _67.DepositParams;
                fromJSON(object: any): _67.DepositParams;
                toJSON(message: _67.DepositParams): unknown;
                fromPartial(object: Partial<_67.DepositParams>): _67.DepositParams;
                fromSDK(object: _67.DepositParamsSDKType): _67.DepositParams;
                toSDK(message: _67.DepositParams): _67.DepositParamsSDKType;
                fromAmino(object: _67.DepositParamsAmino): _67.DepositParams;
                toAmino(message: _67.DepositParams): _67.DepositParamsAmino;
                fromAminoMsg(object: _67.DepositParamsAminoMsg): _67.DepositParams;
                toAminoMsg(message: _67.DepositParams): _67.DepositParamsAminoMsg;
                fromProtoMsg(message: _67.DepositParamsProtoMsg): _67.DepositParams;
                toProto(message: _67.DepositParams): Uint8Array;
                toProtoMsg(message: _67.DepositParams): _67.DepositParamsProtoMsg;
            };
            VotingParams: {
                typeUrl: string;
                encode(message: _67.VotingParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _67.VotingParams;
                fromJSON(object: any): _67.VotingParams;
                toJSON(message: _67.VotingParams): unknown;
                fromPartial(object: Partial<_67.VotingParams>): _67.VotingParams;
                fromSDK(object: _67.VotingParamsSDKType): _67.VotingParams;
                toSDK(message: _67.VotingParams): _67.VotingParamsSDKType;
                fromAmino(object: _67.VotingParamsAmino): _67.VotingParams;
                toAmino(message: _67.VotingParams): _67.VotingParamsAmino;
                fromAminoMsg(object: _67.VotingParamsAminoMsg): _67.VotingParams;
                toAminoMsg(message: _67.VotingParams): _67.VotingParamsAminoMsg;
                fromProtoMsg(message: _67.VotingParamsProtoMsg): _67.VotingParams;
                toProto(message: _67.VotingParams): Uint8Array;
                toProtoMsg(message: _67.VotingParams): _67.VotingParamsProtoMsg;
            };
            TallyParams: {
                typeUrl: string;
                encode(message: _67.TallyParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _67.TallyParams;
                fromJSON(object: any): _67.TallyParams;
                toJSON(message: _67.TallyParams): unknown;
                fromPartial(object: Partial<_67.TallyParams>): _67.TallyParams;
                fromSDK(object: _67.TallyParamsSDKType): _67.TallyParams;
                toSDK(message: _67.TallyParams): _67.TallyParamsSDKType;
                fromAmino(object: _67.TallyParamsAmino): _67.TallyParams;
                toAmino(message: _67.TallyParams): _67.TallyParamsAmino;
                fromAminoMsg(object: _67.TallyParamsAminoMsg): _67.TallyParams;
                toAminoMsg(message: _67.TallyParams): _67.TallyParamsAminoMsg;
                fromProtoMsg(message: _67.TallyParamsProtoMsg): _67.TallyParams;
                toProto(message: _67.TallyParams): Uint8Array;
                toProtoMsg(message: _67.TallyParams): _67.TallyParamsProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _67.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _67.Params;
                fromJSON(object: any): _67.Params;
                toJSON(message: _67.Params): unknown;
                fromPartial(object: Partial<_67.Params>): _67.Params;
                fromSDK(object: _67.ParamsSDKType): _67.Params;
                toSDK(message: _67.Params): _67.ParamsSDKType;
                fromAmino(object: _67.ParamsAmino): _67.Params;
                toAmino(message: _67.Params): _67.ParamsAmino;
                fromAminoMsg(object: _67.ParamsAminoMsg): _67.Params;
                toAminoMsg(message: _67.Params): _67.ParamsAminoMsg;
                fromProtoMsg(message: _67.ParamsProtoMsg): _67.Params;
                toProto(message: _67.Params): Uint8Array;
                toProtoMsg(message: _67.Params): _67.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _66.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _66.GenesisState;
                fromJSON(object: any): _66.GenesisState;
                toJSON(message: _66.GenesisState): unknown;
                fromPartial(object: Partial<_66.GenesisState>): _66.GenesisState;
                fromSDK(object: _66.GenesisStateSDKType): _66.GenesisState;
                toSDK(message: _66.GenesisState): _66.GenesisStateSDKType;
                fromAmino(object: _66.GenesisStateAmino): _66.GenesisState;
                toAmino(message: _66.GenesisState): _66.GenesisStateAmino;
                fromAminoMsg(object: _66.GenesisStateAminoMsg): _66.GenesisState;
                toAminoMsg(message: _66.GenesisState): _66.GenesisStateAminoMsg;
                fromProtoMsg(message: _66.GenesisStateProtoMsg): _66.GenesisState;
                toProto(message: _66.GenesisState): Uint8Array;
                toProtoMsg(message: _66.GenesisState): _66.GenesisStateProtoMsg;
            };
        };
        const v1beta1: {
            Msg: typeof _218.Msg;
            Query: typeof _202.Query;
            QueryClientImpl: typeof _202.QueryClientImpl;
            LCDQueryClient: typeof _185.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _73.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _73.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _73.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _73.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _73.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _73.MsgSubmitProposal;
                    };
                    vote(value: _73.MsgVote): {
                        typeUrl: string;
                        value: _73.MsgVote;
                    };
                    voteWeighted(value: _73.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _73.MsgVoteWeighted;
                    };
                    deposit(value: _73.MsgDeposit): {
                        typeUrl: string;
                        value: _73.MsgDeposit;
                    };
                };
                toJSON: {
                    submitProposal(value: _73.MsgSubmitProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    vote(value: _73.MsgVote): {
                        typeUrl: string;
                        value: unknown;
                    };
                    voteWeighted(value: _73.MsgVoteWeighted): {
                        typeUrl: string;
                        value: unknown;
                    };
                    deposit(value: _73.MsgDeposit): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _73.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _73.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _73.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _73.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _73.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _73.MsgSubmitProposal;
                    };
                    vote(value: _73.MsgVote): {
                        typeUrl: string;
                        value: _73.MsgVote;
                    };
                    voteWeighted(value: _73.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _73.MsgVoteWeighted;
                    };
                    deposit(value: _73.MsgDeposit): {
                        typeUrl: string;
                        value: _73.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _73.MsgSubmitProposal) => _73.MsgSubmitProposalAmino;
                    fromAmino: (object: _73.MsgSubmitProposalAmino) => _73.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _73.MsgVote) => _73.MsgVoteAmino;
                    fromAmino: (object: _73.MsgVoteAmino) => _73.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _73.MsgVoteWeighted) => _73.MsgVoteWeightedAmino;
                    fromAmino: (object: _73.MsgVoteWeightedAmino) => _73.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _73.MsgDeposit) => _73.MsgDepositAmino;
                    fromAmino: (object: _73.MsgDepositAmino) => _73.MsgDeposit;
                };
            };
            protobufPackage: "cosmos.gov.v1beta1";
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _73.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _73.MsgSubmitProposal;
                fromJSON(object: any): _73.MsgSubmitProposal;
                toJSON(message: _73.MsgSubmitProposal): unknown;
                fromPartial(object: Partial<_73.MsgSubmitProposal>): _73.MsgSubmitProposal;
                fromSDK(object: _73.MsgSubmitProposalSDKType): _73.MsgSubmitProposal;
                toSDK(message: _73.MsgSubmitProposal): _73.MsgSubmitProposalSDKType;
                fromAmino(object: _73.MsgSubmitProposalAmino): _73.MsgSubmitProposal;
                toAmino(message: _73.MsgSubmitProposal): _73.MsgSubmitProposalAmino;
                fromAminoMsg(object: _73.MsgSubmitProposalAminoMsg): _73.MsgSubmitProposal;
                toAminoMsg(message: _73.MsgSubmitProposal): _73.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _73.MsgSubmitProposalProtoMsg): _73.MsgSubmitProposal;
                toProto(message: _73.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _73.MsgSubmitProposal): _73.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _73.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _73.MsgSubmitProposalResponse;
                fromJSON(object: any): _73.MsgSubmitProposalResponse;
                toJSON(message: _73.MsgSubmitProposalResponse): unknown;
                fromPartial(object: Partial<_73.MsgSubmitProposalResponse>): _73.MsgSubmitProposalResponse;
                fromSDK(object: _73.MsgSubmitProposalResponseSDKType): _73.MsgSubmitProposalResponse;
                toSDK(message: _73.MsgSubmitProposalResponse): _73.MsgSubmitProposalResponseSDKType;
                fromAmino(object: _73.MsgSubmitProposalResponseAmino): _73.MsgSubmitProposalResponse;
                toAmino(message: _73.MsgSubmitProposalResponse): _73.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _73.MsgSubmitProposalResponseAminoMsg): _73.MsgSubmitProposalResponse;
                toAminoMsg(message: _73.MsgSubmitProposalResponse): _73.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _73.MsgSubmitProposalResponseProtoMsg): _73.MsgSubmitProposalResponse;
                toProto(message: _73.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _73.MsgSubmitProposalResponse): _73.MsgSubmitProposalResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _73.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _73.MsgVote;
                fromJSON(object: any): _73.MsgVote;
                toJSON(message: _73.MsgVote): unknown;
                fromPartial(object: Partial<_73.MsgVote>): _73.MsgVote;
                fromSDK(object: _73.MsgVoteSDKType): _73.MsgVote;
                toSDK(message: _73.MsgVote): _73.MsgVoteSDKType;
                fromAmino(object: _73.MsgVoteAmino): _73.MsgVote;
                toAmino(message: _73.MsgVote): _73.MsgVoteAmino;
                fromAminoMsg(object: _73.MsgVoteAminoMsg): _73.MsgVote;
                toAminoMsg(message: _73.MsgVote): _73.MsgVoteAminoMsg;
                fromProtoMsg(message: _73.MsgVoteProtoMsg): _73.MsgVote;
                toProto(message: _73.MsgVote): Uint8Array;
                toProtoMsg(message: _73.MsgVote): _73.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _73.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _73.MsgVoteResponse;
                fromJSON(_: any): _73.MsgVoteResponse;
                toJSON(_: _73.MsgVoteResponse): unknown;
                fromPartial(_: Partial<_73.MsgVoteResponse>): _73.MsgVoteResponse;
                fromSDK(_: _73.MsgVoteResponseSDKType): _73.MsgVoteResponse;
                toSDK(_: _73.MsgVoteResponse): _73.MsgVoteResponseSDKType;
                fromAmino(_: _73.MsgVoteResponseAmino): _73.MsgVoteResponse;
                toAmino(_: _73.MsgVoteResponse): _73.MsgVoteResponseAmino;
                fromAminoMsg(object: _73.MsgVoteResponseAminoMsg): _73.MsgVoteResponse;
                toAminoMsg(message: _73.MsgVoteResponse): _73.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _73.MsgVoteResponseProtoMsg): _73.MsgVoteResponse;
                toProto(message: _73.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _73.MsgVoteResponse): _73.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                typeUrl: string;
                encode(message: _73.MsgVoteWeighted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _73.MsgVoteWeighted;
                fromJSON(object: any): _73.MsgVoteWeighted;
                toJSON(message: _73.MsgVoteWeighted): unknown;
                fromPartial(object: Partial<_73.MsgVoteWeighted>): _73.MsgVoteWeighted;
                fromSDK(object: _73.MsgVoteWeightedSDKType): _73.MsgVoteWeighted;
                toSDK(message: _73.MsgVoteWeighted): _73.MsgVoteWeightedSDKType;
                fromAmino(object: _73.MsgVoteWeightedAmino): _73.MsgVoteWeighted;
                toAmino(message: _73.MsgVoteWeighted): _73.MsgVoteWeightedAmino;
                fromAminoMsg(object: _73.MsgVoteWeightedAminoMsg): _73.MsgVoteWeighted;
                toAminoMsg(message: _73.MsgVoteWeighted): _73.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _73.MsgVoteWeightedProtoMsg): _73.MsgVoteWeighted;
                toProto(message: _73.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _73.MsgVoteWeighted): _73.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                typeUrl: string;
                encode(_: _73.MsgVoteWeightedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _73.MsgVoteWeightedResponse;
                fromJSON(_: any): _73.MsgVoteWeightedResponse;
                toJSON(_: _73.MsgVoteWeightedResponse): unknown;
                fromPartial(_: Partial<_73.MsgVoteWeightedResponse>): _73.MsgVoteWeightedResponse;
                fromSDK(_: _73.MsgVoteWeightedResponseSDKType): _73.MsgVoteWeightedResponse;
                toSDK(_: _73.MsgVoteWeightedResponse): _73.MsgVoteWeightedResponseSDKType;
                fromAmino(_: _73.MsgVoteWeightedResponseAmino): _73.MsgVoteWeightedResponse;
                toAmino(_: _73.MsgVoteWeightedResponse): _73.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _73.MsgVoteWeightedResponseAminoMsg): _73.MsgVoteWeightedResponse;
                toAminoMsg(message: _73.MsgVoteWeightedResponse): _73.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _73.MsgVoteWeightedResponseProtoMsg): _73.MsgVoteWeightedResponse;
                toProto(message: _73.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _73.MsgVoteWeightedResponse): _73.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _73.MsgDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _73.MsgDeposit;
                fromJSON(object: any): _73.MsgDeposit;
                toJSON(message: _73.MsgDeposit): unknown;
                fromPartial(object: Partial<_73.MsgDeposit>): _73.MsgDeposit;
                fromSDK(object: _73.MsgDepositSDKType): _73.MsgDeposit;
                toSDK(message: _73.MsgDeposit): _73.MsgDepositSDKType;
                fromAmino(object: _73.MsgDepositAmino): _73.MsgDeposit;
                toAmino(message: _73.MsgDeposit): _73.MsgDepositAmino;
                fromAminoMsg(object: _73.MsgDepositAminoMsg): _73.MsgDeposit;
                toAminoMsg(message: _73.MsgDeposit): _73.MsgDepositAminoMsg;
                fromProtoMsg(message: _73.MsgDepositProtoMsg): _73.MsgDeposit;
                toProto(message: _73.MsgDeposit): Uint8Array;
                toProtoMsg(message: _73.MsgDeposit): _73.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(_: _73.MsgDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _73.MsgDepositResponse;
                fromJSON(_: any): _73.MsgDepositResponse;
                toJSON(_: _73.MsgDepositResponse): unknown;
                fromPartial(_: Partial<_73.MsgDepositResponse>): _73.MsgDepositResponse;
                fromSDK(_: _73.MsgDepositResponseSDKType): _73.MsgDepositResponse;
                toSDK(_: _73.MsgDepositResponse): _73.MsgDepositResponseSDKType;
                fromAmino(_: _73.MsgDepositResponseAmino): _73.MsgDepositResponse;
                toAmino(_: _73.MsgDepositResponse): _73.MsgDepositResponseAmino;
                fromAminoMsg(object: _73.MsgDepositResponseAminoMsg): _73.MsgDepositResponse;
                toAminoMsg(message: _73.MsgDepositResponse): _73.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _73.MsgDepositResponseProtoMsg): _73.MsgDepositResponse;
                toProto(message: _73.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _73.MsgDepositResponse): _73.MsgDepositResponseProtoMsg;
            };
            Cosmos_govv1beta1Content_InterfaceDecoder: (input: import("..").BinaryReader | Uint8Array) => import("../google/protobuf/any").Any | _54.CommunityPoolSpendProposal | _54.CommunityPoolSpendProposalWithDeposit | _94.ParameterChangeProposal | _112.SoftwareUpgradeProposal | _112.CancelSoftwareUpgradeProposal | _71.TextProposal;
            Cosmos_govv1beta1Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_govv1beta1Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _72.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _72.QueryProposalRequest;
                fromJSON(object: any): _72.QueryProposalRequest;
                toJSON(message: _72.QueryProposalRequest): unknown;
                fromPartial(object: Partial<_72.QueryProposalRequest>): _72.QueryProposalRequest;
                fromSDK(object: _72.QueryProposalRequestSDKType): _72.QueryProposalRequest;
                toSDK(message: _72.QueryProposalRequest): _72.QueryProposalRequestSDKType;
                fromAmino(object: _72.QueryProposalRequestAmino): _72.QueryProposalRequest;
                toAmino(message: _72.QueryProposalRequest): _72.QueryProposalRequestAmino;
                fromAminoMsg(object: _72.QueryProposalRequestAminoMsg): _72.QueryProposalRequest;
                toAminoMsg(message: _72.QueryProposalRequest): _72.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _72.QueryProposalRequestProtoMsg): _72.QueryProposalRequest;
                toProto(message: _72.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _72.QueryProposalRequest): _72.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _72.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _72.QueryProposalResponse;
                fromJSON(object: any): _72.QueryProposalResponse;
                toJSON(message: _72.QueryProposalResponse): unknown;
                fromPartial(object: Partial<_72.QueryProposalResponse>): _72.QueryProposalResponse;
                fromSDK(object: _72.QueryProposalResponseSDKType): _72.QueryProposalResponse;
                toSDK(message: _72.QueryProposalResponse): _72.QueryProposalResponseSDKType;
                fromAmino(object: _72.QueryProposalResponseAmino): _72.QueryProposalResponse;
                toAmino(message: _72.QueryProposalResponse): _72.QueryProposalResponseAmino;
                fromAminoMsg(object: _72.QueryProposalResponseAminoMsg): _72.QueryProposalResponse;
                toAminoMsg(message: _72.QueryProposalResponse): _72.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _72.QueryProposalResponseProtoMsg): _72.QueryProposalResponse;
                toProto(message: _72.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _72.QueryProposalResponse): _72.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                typeUrl: string;
                encode(message: _72.QueryProposalsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _72.QueryProposalsRequest;
                fromJSON(object: any): _72.QueryProposalsRequest;
                toJSON(message: _72.QueryProposalsRequest): unknown;
                fromPartial(object: Partial<_72.QueryProposalsRequest>): _72.QueryProposalsRequest;
                fromSDK(object: _72.QueryProposalsRequestSDKType): _72.QueryProposalsRequest;
                toSDK(message: _72.QueryProposalsRequest): _72.QueryProposalsRequestSDKType;
                fromAmino(object: _72.QueryProposalsRequestAmino): _72.QueryProposalsRequest;
                toAmino(message: _72.QueryProposalsRequest): _72.QueryProposalsRequestAmino;
                fromAminoMsg(object: _72.QueryProposalsRequestAminoMsg): _72.QueryProposalsRequest;
                toAminoMsg(message: _72.QueryProposalsRequest): _72.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _72.QueryProposalsRequestProtoMsg): _72.QueryProposalsRequest;
                toProto(message: _72.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _72.QueryProposalsRequest): _72.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                typeUrl: string;
                encode(message: _72.QueryProposalsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _72.QueryProposalsResponse;
                fromJSON(object: any): _72.QueryProposalsResponse;
                toJSON(message: _72.QueryProposalsResponse): unknown;
                fromPartial(object: Partial<_72.QueryProposalsResponse>): _72.QueryProposalsResponse;
                fromSDK(object: _72.QueryProposalsResponseSDKType): _72.QueryProposalsResponse;
                toSDK(message: _72.QueryProposalsResponse): _72.QueryProposalsResponseSDKType;
                fromAmino(object: _72.QueryProposalsResponseAmino): _72.QueryProposalsResponse;
                toAmino(message: _72.QueryProposalsResponse): _72.QueryProposalsResponseAmino;
                fromAminoMsg(object: _72.QueryProposalsResponseAminoMsg): _72.QueryProposalsResponse;
                toAminoMsg(message: _72.QueryProposalsResponse): _72.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _72.QueryProposalsResponseProtoMsg): _72.QueryProposalsResponse;
                toProto(message: _72.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _72.QueryProposalsResponse): _72.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                typeUrl: string;
                encode(message: _72.QueryVoteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _72.QueryVoteRequest;
                fromJSON(object: any): _72.QueryVoteRequest;
                toJSON(message: _72.QueryVoteRequest): unknown;
                fromPartial(object: Partial<_72.QueryVoteRequest>): _72.QueryVoteRequest;
                fromSDK(object: _72.QueryVoteRequestSDKType): _72.QueryVoteRequest;
                toSDK(message: _72.QueryVoteRequest): _72.QueryVoteRequestSDKType;
                fromAmino(object: _72.QueryVoteRequestAmino): _72.QueryVoteRequest;
                toAmino(message: _72.QueryVoteRequest): _72.QueryVoteRequestAmino;
                fromAminoMsg(object: _72.QueryVoteRequestAminoMsg): _72.QueryVoteRequest;
                toAminoMsg(message: _72.QueryVoteRequest): _72.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _72.QueryVoteRequestProtoMsg): _72.QueryVoteRequest;
                toProto(message: _72.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _72.QueryVoteRequest): _72.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                typeUrl: string;
                encode(message: _72.QueryVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _72.QueryVoteResponse;
                fromJSON(object: any): _72.QueryVoteResponse;
                toJSON(message: _72.QueryVoteResponse): unknown;
                fromPartial(object: Partial<_72.QueryVoteResponse>): _72.QueryVoteResponse;
                fromSDK(object: _72.QueryVoteResponseSDKType): _72.QueryVoteResponse;
                toSDK(message: _72.QueryVoteResponse): _72.QueryVoteResponseSDKType;
                fromAmino(object: _72.QueryVoteResponseAmino): _72.QueryVoteResponse;
                toAmino(message: _72.QueryVoteResponse): _72.QueryVoteResponseAmino;
                fromAminoMsg(object: _72.QueryVoteResponseAminoMsg): _72.QueryVoteResponse;
                toAminoMsg(message: _72.QueryVoteResponse): _72.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _72.QueryVoteResponseProtoMsg): _72.QueryVoteResponse;
                toProto(message: _72.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _72.QueryVoteResponse): _72.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                typeUrl: string;
                encode(message: _72.QueryVotesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _72.QueryVotesRequest;
                fromJSON(object: any): _72.QueryVotesRequest;
                toJSON(message: _72.QueryVotesRequest): unknown;
                fromPartial(object: Partial<_72.QueryVotesRequest>): _72.QueryVotesRequest;
                fromSDK(object: _72.QueryVotesRequestSDKType): _72.QueryVotesRequest;
                toSDK(message: _72.QueryVotesRequest): _72.QueryVotesRequestSDKType;
                fromAmino(object: _72.QueryVotesRequestAmino): _72.QueryVotesRequest;
                toAmino(message: _72.QueryVotesRequest): _72.QueryVotesRequestAmino;
                fromAminoMsg(object: _72.QueryVotesRequestAminoMsg): _72.QueryVotesRequest;
                toAminoMsg(message: _72.QueryVotesRequest): _72.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _72.QueryVotesRequestProtoMsg): _72.QueryVotesRequest;
                toProto(message: _72.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _72.QueryVotesRequest): _72.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                typeUrl: string;
                encode(message: _72.QueryVotesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _72.QueryVotesResponse;
                fromJSON(object: any): _72.QueryVotesResponse;
                toJSON(message: _72.QueryVotesResponse): unknown;
                fromPartial(object: Partial<_72.QueryVotesResponse>): _72.QueryVotesResponse;
                fromSDK(object: _72.QueryVotesResponseSDKType): _72.QueryVotesResponse;
                toSDK(message: _72.QueryVotesResponse): _72.QueryVotesResponseSDKType;
                fromAmino(object: _72.QueryVotesResponseAmino): _72.QueryVotesResponse;
                toAmino(message: _72.QueryVotesResponse): _72.QueryVotesResponseAmino;
                fromAminoMsg(object: _72.QueryVotesResponseAminoMsg): _72.QueryVotesResponse;
                toAminoMsg(message: _72.QueryVotesResponse): _72.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _72.QueryVotesResponseProtoMsg): _72.QueryVotesResponse;
                toProto(message: _72.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _72.QueryVotesResponse): _72.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _72.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _72.QueryParamsRequest;
                fromJSON(object: any): _72.QueryParamsRequest;
                toJSON(message: _72.QueryParamsRequest): unknown;
                fromPartial(object: Partial<_72.QueryParamsRequest>): _72.QueryParamsRequest;
                fromSDK(object: _72.QueryParamsRequestSDKType): _72.QueryParamsRequest;
                toSDK(message: _72.QueryParamsRequest): _72.QueryParamsRequestSDKType;
                fromAmino(object: _72.QueryParamsRequestAmino): _72.QueryParamsRequest;
                toAmino(message: _72.QueryParamsRequest): _72.QueryParamsRequestAmino;
                fromAminoMsg(object: _72.QueryParamsRequestAminoMsg): _72.QueryParamsRequest;
                toAminoMsg(message: _72.QueryParamsRequest): _72.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _72.QueryParamsRequestProtoMsg): _72.QueryParamsRequest;
                toProto(message: _72.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _72.QueryParamsRequest): _72.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _72.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _72.QueryParamsResponse;
                fromJSON(object: any): _72.QueryParamsResponse;
                toJSON(message: _72.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_72.QueryParamsResponse>): _72.QueryParamsResponse;
                fromSDK(object: _72.QueryParamsResponseSDKType): _72.QueryParamsResponse;
                toSDK(message: _72.QueryParamsResponse): _72.QueryParamsResponseSDKType;
                fromAmino(object: _72.QueryParamsResponseAmino): _72.QueryParamsResponse;
                toAmino(message: _72.QueryParamsResponse): _72.QueryParamsResponseAmino;
                fromAminoMsg(object: _72.QueryParamsResponseAminoMsg): _72.QueryParamsResponse;
                toAminoMsg(message: _72.QueryParamsResponse): _72.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _72.QueryParamsResponseProtoMsg): _72.QueryParamsResponse;
                toProto(message: _72.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _72.QueryParamsResponse): _72.QueryParamsResponseProtoMsg;
            };
            QueryDepositRequest: {
                typeUrl: string;
                encode(message: _72.QueryDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _72.QueryDepositRequest;
                fromJSON(object: any): _72.QueryDepositRequest;
                toJSON(message: _72.QueryDepositRequest): unknown;
                fromPartial(object: Partial<_72.QueryDepositRequest>): _72.QueryDepositRequest;
                fromSDK(object: _72.QueryDepositRequestSDKType): _72.QueryDepositRequest;
                toSDK(message: _72.QueryDepositRequest): _72.QueryDepositRequestSDKType;
                fromAmino(object: _72.QueryDepositRequestAmino): _72.QueryDepositRequest;
                toAmino(message: _72.QueryDepositRequest): _72.QueryDepositRequestAmino;
                fromAminoMsg(object: _72.QueryDepositRequestAminoMsg): _72.QueryDepositRequest;
                toAminoMsg(message: _72.QueryDepositRequest): _72.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _72.QueryDepositRequestProtoMsg): _72.QueryDepositRequest;
                toProto(message: _72.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _72.QueryDepositRequest): _72.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                typeUrl: string;
                encode(message: _72.QueryDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _72.QueryDepositResponse;
                fromJSON(object: any): _72.QueryDepositResponse;
                toJSON(message: _72.QueryDepositResponse): unknown;
                fromPartial(object: Partial<_72.QueryDepositResponse>): _72.QueryDepositResponse;
                fromSDK(object: _72.QueryDepositResponseSDKType): _72.QueryDepositResponse;
                toSDK(message: _72.QueryDepositResponse): _72.QueryDepositResponseSDKType;
                fromAmino(object: _72.QueryDepositResponseAmino): _72.QueryDepositResponse;
                toAmino(message: _72.QueryDepositResponse): _72.QueryDepositResponseAmino;
                fromAminoMsg(object: _72.QueryDepositResponseAminoMsg): _72.QueryDepositResponse;
                toAminoMsg(message: _72.QueryDepositResponse): _72.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _72.QueryDepositResponseProtoMsg): _72.QueryDepositResponse;
                toProto(message: _72.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _72.QueryDepositResponse): _72.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                encode(message: _72.QueryDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _72.QueryDepositsRequest;
                fromJSON(object: any): _72.QueryDepositsRequest;
                toJSON(message: _72.QueryDepositsRequest): unknown;
                fromPartial(object: Partial<_72.QueryDepositsRequest>): _72.QueryDepositsRequest;
                fromSDK(object: _72.QueryDepositsRequestSDKType): _72.QueryDepositsRequest;
                toSDK(message: _72.QueryDepositsRequest): _72.QueryDepositsRequestSDKType;
                fromAmino(object: _72.QueryDepositsRequestAmino): _72.QueryDepositsRequest;
                toAmino(message: _72.QueryDepositsRequest): _72.QueryDepositsRequestAmino;
                fromAminoMsg(object: _72.QueryDepositsRequestAminoMsg): _72.QueryDepositsRequest;
                toAminoMsg(message: _72.QueryDepositsRequest): _72.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _72.QueryDepositsRequestProtoMsg): _72.QueryDepositsRequest;
                toProto(message: _72.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _72.QueryDepositsRequest): _72.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                encode(message: _72.QueryDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _72.QueryDepositsResponse;
                fromJSON(object: any): _72.QueryDepositsResponse;
                toJSON(message: _72.QueryDepositsResponse): unknown;
                fromPartial(object: Partial<_72.QueryDepositsResponse>): _72.QueryDepositsResponse;
                fromSDK(object: _72.QueryDepositsResponseSDKType): _72.QueryDepositsResponse;
                toSDK(message: _72.QueryDepositsResponse): _72.QueryDepositsResponseSDKType;
                fromAmino(object: _72.QueryDepositsResponseAmino): _72.QueryDepositsResponse;
                toAmino(message: _72.QueryDepositsResponse): _72.QueryDepositsResponseAmino;
                fromAminoMsg(object: _72.QueryDepositsResponseAminoMsg): _72.QueryDepositsResponse;
                toAminoMsg(message: _72.QueryDepositsResponse): _72.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _72.QueryDepositsResponseProtoMsg): _72.QueryDepositsResponse;
                toProto(message: _72.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _72.QueryDepositsResponse): _72.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _72.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _72.QueryTallyResultRequest;
                fromJSON(object: any): _72.QueryTallyResultRequest;
                toJSON(message: _72.QueryTallyResultRequest): unknown;
                fromPartial(object: Partial<_72.QueryTallyResultRequest>): _72.QueryTallyResultRequest;
                fromSDK(object: _72.QueryTallyResultRequestSDKType): _72.QueryTallyResultRequest;
                toSDK(message: _72.QueryTallyResultRequest): _72.QueryTallyResultRequestSDKType;
                fromAmino(object: _72.QueryTallyResultRequestAmino): _72.QueryTallyResultRequest;
                toAmino(message: _72.QueryTallyResultRequest): _72.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _72.QueryTallyResultRequestAminoMsg): _72.QueryTallyResultRequest;
                toAminoMsg(message: _72.QueryTallyResultRequest): _72.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _72.QueryTallyResultRequestProtoMsg): _72.QueryTallyResultRequest;
                toProto(message: _72.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _72.QueryTallyResultRequest): _72.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _72.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _72.QueryTallyResultResponse;
                fromJSON(object: any): _72.QueryTallyResultResponse;
                toJSON(message: _72.QueryTallyResultResponse): unknown;
                fromPartial(object: Partial<_72.QueryTallyResultResponse>): _72.QueryTallyResultResponse;
                fromSDK(object: _72.QueryTallyResultResponseSDKType): _72.QueryTallyResultResponse;
                toSDK(message: _72.QueryTallyResultResponse): _72.QueryTallyResultResponseSDKType;
                fromAmino(object: _72.QueryTallyResultResponseAmino): _72.QueryTallyResultResponse;
                toAmino(message: _72.QueryTallyResultResponse): _72.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _72.QueryTallyResultResponseAminoMsg): _72.QueryTallyResultResponse;
                toAminoMsg(message: _72.QueryTallyResultResponse): _72.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _72.QueryTallyResultResponseProtoMsg): _72.QueryTallyResultResponse;
                toProto(message: _72.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _72.QueryTallyResultResponse): _72.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _71.VoteOption;
            voteOptionToJSON(object: _71.VoteOption): string;
            proposalStatusFromJSON(object: any): _71.ProposalStatus;
            proposalStatusToJSON(object: _71.ProposalStatus): string;
            VoteOption: typeof _71.VoteOption;
            VoteOptionSDKType: typeof _71.VoteOption;
            VoteOptionAmino: typeof _71.VoteOption;
            ProposalStatus: typeof _71.ProposalStatus;
            ProposalStatusSDKType: typeof _71.ProposalStatus;
            ProposalStatusAmino: typeof _71.ProposalStatus;
            WeightedVoteOption: {
                typeUrl: string;
                encode(message: _71.WeightedVoteOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _71.WeightedVoteOption;
                fromJSON(object: any): _71.WeightedVoteOption;
                toJSON(message: _71.WeightedVoteOption): unknown;
                fromPartial(object: Partial<_71.WeightedVoteOption>): _71.WeightedVoteOption;
                fromSDK(object: _71.WeightedVoteOptionSDKType): _71.WeightedVoteOption;
                toSDK(message: _71.WeightedVoteOption): _71.WeightedVoteOptionSDKType;
                fromAmino(object: _71.WeightedVoteOptionAmino): _71.WeightedVoteOption;
                toAmino(message: _71.WeightedVoteOption): _71.WeightedVoteOptionAmino;
                fromAminoMsg(object: _71.WeightedVoteOptionAminoMsg): _71.WeightedVoteOption;
                toAminoMsg(message: _71.WeightedVoteOption): _71.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _71.WeightedVoteOptionProtoMsg): _71.WeightedVoteOption;
                toProto(message: _71.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _71.WeightedVoteOption): _71.WeightedVoteOptionProtoMsg;
            };
            TextProposal: {
                typeUrl: string;
                encode(message: _71.TextProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _71.TextProposal;
                fromJSON(object: any): _71.TextProposal;
                toJSON(message: _71.TextProposal): unknown;
                fromPartial(object: Partial<_71.TextProposal>): _71.TextProposal;
                fromSDK(object: _71.TextProposalSDKType): _71.TextProposal;
                toSDK(message: _71.TextProposal): _71.TextProposalSDKType;
                fromAmino(object: _71.TextProposalAmino): _71.TextProposal;
                toAmino(message: _71.TextProposal): _71.TextProposalAmino;
                fromAminoMsg(object: _71.TextProposalAminoMsg): _71.TextProposal;
                toAminoMsg(message: _71.TextProposal): _71.TextProposalAminoMsg;
                fromProtoMsg(message: _71.TextProposalProtoMsg): _71.TextProposal;
                toProto(message: _71.TextProposal): Uint8Array;
                toProtoMsg(message: _71.TextProposal): _71.TextProposalProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                encode(message: _71.Deposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _71.Deposit;
                fromJSON(object: any): _71.Deposit;
                toJSON(message: _71.Deposit): unknown;
                fromPartial(object: Partial<_71.Deposit>): _71.Deposit;
                fromSDK(object: _71.DepositSDKType): _71.Deposit;
                toSDK(message: _71.Deposit): _71.DepositSDKType;
                fromAmino(object: _71.DepositAmino): _71.Deposit;
                toAmino(message: _71.Deposit): _71.DepositAmino;
                fromAminoMsg(object: _71.DepositAminoMsg): _71.Deposit;
                toAminoMsg(message: _71.Deposit): _71.DepositAminoMsg;
                fromProtoMsg(message: _71.DepositProtoMsg): _71.Deposit;
                toProto(message: _71.Deposit): Uint8Array;
                toProtoMsg(message: _71.Deposit): _71.DepositProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _71.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _71.Proposal;
                fromJSON(object: any): _71.Proposal;
                toJSON(message: _71.Proposal): unknown;
                fromPartial(object: Partial<_71.Proposal>): _71.Proposal;
                fromSDK(object: _71.ProposalSDKType): _71.Proposal;
                toSDK(message: _71.Proposal): _71.ProposalSDKType;
                fromAmino(object: _71.ProposalAmino): _71.Proposal;
                toAmino(message: _71.Proposal): _71.ProposalAmino;
                fromAminoMsg(object: _71.ProposalAminoMsg): _71.Proposal;
                toAminoMsg(message: _71.Proposal): _71.ProposalAminoMsg;
                fromProtoMsg(message: _71.ProposalProtoMsg): _71.Proposal;
                toProto(message: _71.Proposal): Uint8Array;
                toProtoMsg(message: _71.Proposal): _71.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _71.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _71.TallyResult;
                fromJSON(object: any): _71.TallyResult;
                toJSON(message: _71.TallyResult): unknown;
                fromPartial(object: Partial<_71.TallyResult>): _71.TallyResult;
                fromSDK(object: _71.TallyResultSDKType): _71.TallyResult;
                toSDK(message: _71.TallyResult): _71.TallyResultSDKType;
                fromAmino(object: _71.TallyResultAmino): _71.TallyResult;
                toAmino(message: _71.TallyResult): _71.TallyResultAmino;
                fromAminoMsg(object: _71.TallyResultAminoMsg): _71.TallyResult;
                toAminoMsg(message: _71.TallyResult): _71.TallyResultAminoMsg;
                fromProtoMsg(message: _71.TallyResultProtoMsg): _71.TallyResult;
                toProto(message: _71.TallyResult): Uint8Array;
                toProtoMsg(message: _71.TallyResult): _71.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _71.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _71.Vote;
                fromJSON(object: any): _71.Vote;
                toJSON(message: _71.Vote): unknown;
                fromPartial(object: Partial<_71.Vote>): _71.Vote;
                fromSDK(object: _71.VoteSDKType): _71.Vote;
                toSDK(message: _71.Vote): _71.VoteSDKType;
                fromAmino(object: _71.VoteAmino): _71.Vote;
                toAmino(message: _71.Vote): _71.VoteAmino;
                fromAminoMsg(object: _71.VoteAminoMsg): _71.Vote;
                toAminoMsg(message: _71.Vote): _71.VoteAminoMsg;
                fromProtoMsg(message: _71.VoteProtoMsg): _71.Vote;
                toProto(message: _71.Vote): Uint8Array;
                toProtoMsg(message: _71.Vote): _71.VoteProtoMsg;
            };
            DepositParams: {
                typeUrl: string;
                encode(message: _71.DepositParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _71.DepositParams;
                fromJSON(object: any): _71.DepositParams;
                toJSON(message: _71.DepositParams): unknown;
                fromPartial(object: Partial<_71.DepositParams>): _71.DepositParams;
                fromSDK(object: _71.DepositParamsSDKType): _71.DepositParams;
                toSDK(message: _71.DepositParams): _71.DepositParamsSDKType;
                fromAmino(object: _71.DepositParamsAmino): _71.DepositParams;
                toAmino(message: _71.DepositParams): _71.DepositParamsAmino;
                fromAminoMsg(object: _71.DepositParamsAminoMsg): _71.DepositParams;
                toAminoMsg(message: _71.DepositParams): _71.DepositParamsAminoMsg;
                fromProtoMsg(message: _71.DepositParamsProtoMsg): _71.DepositParams;
                toProto(message: _71.DepositParams): Uint8Array;
                toProtoMsg(message: _71.DepositParams): _71.DepositParamsProtoMsg;
            };
            VotingParams: {
                typeUrl: string;
                encode(message: _71.VotingParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _71.VotingParams;
                fromJSON(object: any): _71.VotingParams;
                toJSON(message: _71.VotingParams): unknown;
                fromPartial(object: Partial<_71.VotingParams>): _71.VotingParams;
                fromSDK(object: _71.VotingParamsSDKType): _71.VotingParams;
                toSDK(message: _71.VotingParams): _71.VotingParamsSDKType;
                fromAmino(object: _71.VotingParamsAmino): _71.VotingParams;
                toAmino(message: _71.VotingParams): _71.VotingParamsAmino;
                fromAminoMsg(object: _71.VotingParamsAminoMsg): _71.VotingParams;
                toAminoMsg(message: _71.VotingParams): _71.VotingParamsAminoMsg;
                fromProtoMsg(message: _71.VotingParamsProtoMsg): _71.VotingParams;
                toProto(message: _71.VotingParams): Uint8Array;
                toProtoMsg(message: _71.VotingParams): _71.VotingParamsProtoMsg;
            };
            TallyParams: {
                typeUrl: string;
                encode(message: _71.TallyParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _71.TallyParams;
                fromJSON(object: any): _71.TallyParams;
                toJSON(message: _71.TallyParams): unknown;
                fromPartial(object: Partial<_71.TallyParams>): _71.TallyParams;
                fromSDK(object: _71.TallyParamsSDKType): _71.TallyParams;
                toSDK(message: _71.TallyParams): _71.TallyParamsSDKType;
                fromAmino(object: _71.TallyParamsAmino): _71.TallyParams;
                toAmino(message: _71.TallyParams): _71.TallyParamsAmino;
                fromAminoMsg(object: _71.TallyParamsAminoMsg): _71.TallyParams;
                toAminoMsg(message: _71.TallyParams): _71.TallyParamsAminoMsg;
                fromProtoMsg(message: _71.TallyParamsProtoMsg): _71.TallyParams;
                toProto(message: _71.TallyParams): Uint8Array;
                toProtoMsg(message: _71.TallyParams): _71.TallyParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _70.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _70.GenesisState;
                fromJSON(object: any): _70.GenesisState;
                toJSON(message: _70.GenesisState): unknown;
                fromPartial(object: Partial<_70.GenesisState>): _70.GenesisState;
                fromSDK(object: _70.GenesisStateSDKType): _70.GenesisState;
                toSDK(message: _70.GenesisState): _70.GenesisStateSDKType;
                fromAmino(object: _70.GenesisStateAmino): _70.GenesisState;
                toAmino(message: _70.GenesisState): _70.GenesisStateAmino;
                fromAminoMsg(object: _70.GenesisStateAminoMsg): _70.GenesisState;
                toAminoMsg(message: _70.GenesisState): _70.GenesisStateAminoMsg;
                fromProtoMsg(message: _70.GenesisStateProtoMsg): _70.GenesisState;
                toProto(message: _70.GenesisState): Uint8Array;
                toProtoMsg(message: _70.GenesisState): _70.GenesisStateProtoMsg;
            };
        };
    }
    namespace group {
        namespace module {
            const v1: {
                protobufPackage: "cosmos.group.module.v1";
                Module: {
                    typeUrl: string;
                    encode(message: _74.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _74.Module;
                    fromJSON(object: any): _74.Module;
                    toJSON(message: _74.Module): unknown;
                    fromPartial(object: Partial<_74.Module>): _74.Module;
                    fromSDK(object: _74.ModuleSDKType): _74.Module;
                    toSDK(message: _74.Module): _74.ModuleSDKType;
                    fromAmino(object: _74.ModuleAmino): _74.Module;
                    toAmino(message: _74.Module): _74.ModuleAmino;
                    fromAminoMsg(object: _74.ModuleAminoMsg): _74.Module;
                    toAminoMsg(message: _74.Module): _74.ModuleAminoMsg;
                    fromProtoMsg(message: _74.ModuleProtoMsg): _74.Module;
                    toProto(message: _74.Module): Uint8Array;
                    toProtoMsg(message: _74.Module): _74.ModuleProtoMsg;
                };
            };
        }
        const v1: {
            Msg: typeof _219.Msg;
            Query: typeof _203.Query;
            QueryClientImpl: typeof _203.QueryClientImpl;
            LCDQueryClient: typeof _186.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createGroup(value: _78.MsgCreateGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMembers(value: _78.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupAdmin(value: _78.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMetadata(value: _78.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupPolicy(value: _78.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupWithPolicy(value: _78.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyAdmin(value: _78.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyDecisionPolicy(value: _78.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyMetadata(value: _78.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    submitProposal(value: _78.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawProposal(value: _78.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _78.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _78.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    leaveGroup(value: _78.MsgLeaveGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createGroup(value: _78.MsgCreateGroup): {
                        typeUrl: string;
                        value: _78.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _78.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _78.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _78.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _78.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _78.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _78.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _78.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _78.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _78.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _78.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _78.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _78.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _78.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _78.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _78.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _78.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _78.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _78.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _78.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _78.MsgWithdrawProposal;
                    };
                    vote(value: _78.MsgVote): {
                        typeUrl: string;
                        value: _78.MsgVote;
                    };
                    exec(value: _78.MsgExec): {
                        typeUrl: string;
                        value: _78.MsgExec;
                    };
                    leaveGroup(value: _78.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _78.MsgLeaveGroup;
                    };
                };
                toJSON: {
                    createGroup(value: _78.MsgCreateGroup): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupMembers(value: _78.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupAdmin(value: _78.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupMetadata(value: _78.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createGroupPolicy(value: _78.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createGroupWithPolicy(value: _78.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupPolicyAdmin(value: _78.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupPolicyDecisionPolicy(value: _78.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupPolicyMetadata(value: _78.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: unknown;
                    };
                    submitProposal(value: _78.MsgSubmitProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdrawProposal(value: _78.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    vote(value: _78.MsgVote): {
                        typeUrl: string;
                        value: unknown;
                    };
                    exec(value: _78.MsgExec): {
                        typeUrl: string;
                        value: unknown;
                    };
                    leaveGroup(value: _78.MsgLeaveGroup): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createGroup(value: any): {
                        typeUrl: string;
                        value: _78.MsgCreateGroup;
                    };
                    updateGroupMembers(value: any): {
                        typeUrl: string;
                        value: _78.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: any): {
                        typeUrl: string;
                        value: _78.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: any): {
                        typeUrl: string;
                        value: _78.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: any): {
                        typeUrl: string;
                        value: _78.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: any): {
                        typeUrl: string;
                        value: _78.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: any): {
                        typeUrl: string;
                        value: _78.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: any): {
                        typeUrl: string;
                        value: _78.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: any): {
                        typeUrl: string;
                        value: _78.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _78.MsgSubmitProposal;
                    };
                    withdrawProposal(value: any): {
                        typeUrl: string;
                        value: _78.MsgWithdrawProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _78.MsgVote;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _78.MsgExec;
                    };
                    leaveGroup(value: any): {
                        typeUrl: string;
                        value: _78.MsgLeaveGroup;
                    };
                };
                fromPartial: {
                    createGroup(value: _78.MsgCreateGroup): {
                        typeUrl: string;
                        value: _78.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _78.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _78.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _78.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _78.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _78.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _78.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _78.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _78.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _78.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _78.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _78.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _78.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _78.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _78.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _78.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _78.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _78.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _78.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _78.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _78.MsgWithdrawProposal;
                    };
                    vote(value: _78.MsgVote): {
                        typeUrl: string;
                        value: _78.MsgVote;
                    };
                    exec(value: _78.MsgExec): {
                        typeUrl: string;
                        value: _78.MsgExec;
                    };
                    leaveGroup(value: _78.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _78.MsgLeaveGroup;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.group.v1.MsgCreateGroup": {
                    aminoType: string;
                    toAmino: (message: _78.MsgCreateGroup) => _78.MsgCreateGroupAmino;
                    fromAmino: (object: _78.MsgCreateGroupAmino) => _78.MsgCreateGroup;
                };
                "/cosmos.group.v1.MsgUpdateGroupMembers": {
                    aminoType: string;
                    toAmino: (message: _78.MsgUpdateGroupMembers) => _78.MsgUpdateGroupMembersAmino;
                    fromAmino: (object: _78.MsgUpdateGroupMembersAmino) => _78.MsgUpdateGroupMembers;
                };
                "/cosmos.group.v1.MsgUpdateGroupAdmin": {
                    aminoType: string;
                    toAmino: (message: _78.MsgUpdateGroupAdmin) => _78.MsgUpdateGroupAdminAmino;
                    fromAmino: (object: _78.MsgUpdateGroupAdminAmino) => _78.MsgUpdateGroupAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupMetadata": {
                    aminoType: string;
                    toAmino: (message: _78.MsgUpdateGroupMetadata) => _78.MsgUpdateGroupMetadataAmino;
                    fromAmino: (object: _78.MsgUpdateGroupMetadataAmino) => _78.MsgUpdateGroupMetadata;
                };
                "/cosmos.group.v1.MsgCreateGroupPolicy": {
                    aminoType: string;
                    toAmino: (message: _78.MsgCreateGroupPolicy) => _78.MsgCreateGroupPolicyAmino;
                    fromAmino: (object: _78.MsgCreateGroupPolicyAmino) => _78.MsgCreateGroupPolicy;
                };
                "/cosmos.group.v1.MsgCreateGroupWithPolicy": {
                    aminoType: string;
                    toAmino: (message: _78.MsgCreateGroupWithPolicy) => _78.MsgCreateGroupWithPolicyAmino;
                    fromAmino: (object: _78.MsgCreateGroupWithPolicyAmino) => _78.MsgCreateGroupWithPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin": {
                    aminoType: string;
                    toAmino: (message: _78.MsgUpdateGroupPolicyAdmin) => _78.MsgUpdateGroupPolicyAdminAmino;
                    fromAmino: (object: _78.MsgUpdateGroupPolicyAdminAmino) => _78.MsgUpdateGroupPolicyAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy": {
                    aminoType: string;
                    toAmino: (message: _78.MsgUpdateGroupPolicyDecisionPolicy) => _78.MsgUpdateGroupPolicyDecisionPolicyAmino;
                    fromAmino: (object: _78.MsgUpdateGroupPolicyDecisionPolicyAmino) => _78.MsgUpdateGroupPolicyDecisionPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata": {
                    aminoType: string;
                    toAmino: (message: _78.MsgUpdateGroupPolicyMetadata) => _78.MsgUpdateGroupPolicyMetadataAmino;
                    fromAmino: (object: _78.MsgUpdateGroupPolicyMetadataAmino) => _78.MsgUpdateGroupPolicyMetadata;
                };
                "/cosmos.group.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _78.MsgSubmitProposal) => _78.MsgSubmitProposalAmino;
                    fromAmino: (object: _78.MsgSubmitProposalAmino) => _78.MsgSubmitProposal;
                };
                "/cosmos.group.v1.MsgWithdrawProposal": {
                    aminoType: string;
                    toAmino: (message: _78.MsgWithdrawProposal) => _78.MsgWithdrawProposalAmino;
                    fromAmino: (object: _78.MsgWithdrawProposalAmino) => _78.MsgWithdrawProposal;
                };
                "/cosmos.group.v1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _78.MsgVote) => _78.MsgVoteAmino;
                    fromAmino: (object: _78.MsgVoteAmino) => _78.MsgVote;
                };
                "/cosmos.group.v1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _78.MsgExec) => _78.MsgExecAmino;
                    fromAmino: (object: _78.MsgExecAmino) => _78.MsgExec;
                };
                "/cosmos.group.v1.MsgLeaveGroup": {
                    aminoType: string;
                    toAmino: (message: _78.MsgLeaveGroup) => _78.MsgLeaveGroupAmino;
                    fromAmino: (object: _78.MsgLeaveGroupAmino) => _78.MsgLeaveGroup;
                };
            };
            voteOptionFromJSON(object: any): _79.VoteOption;
            voteOptionToJSON(object: _79.VoteOption): string;
            proposalStatusFromJSON(object: any): _79.ProposalStatus;
            proposalStatusToJSON(object: _79.ProposalStatus): string;
            proposalExecutorResultFromJSON(object: any): _79.ProposalExecutorResult;
            proposalExecutorResultToJSON(object: _79.ProposalExecutorResult): string;
            protobufPackage: "cosmos.group.v1";
            VoteOption: typeof _79.VoteOption;
            VoteOptionSDKType: typeof _79.VoteOption;
            VoteOptionAmino: typeof _79.VoteOption;
            ProposalStatus: typeof _79.ProposalStatus;
            ProposalStatusSDKType: typeof _79.ProposalStatus;
            ProposalStatusAmino: typeof _79.ProposalStatus;
            ProposalExecutorResult: typeof _79.ProposalExecutorResult;
            ProposalExecutorResultSDKType: typeof _79.ProposalExecutorResult;
            ProposalExecutorResultAmino: typeof _79.ProposalExecutorResult;
            Member: {
                typeUrl: string;
                encode(message: _79.Member, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _79.Member;
                fromJSON(object: any): _79.Member;
                toJSON(message: _79.Member): unknown;
                fromPartial(object: Partial<_79.Member>): _79.Member;
                fromSDK(object: _79.MemberSDKType): _79.Member;
                toSDK(message: _79.Member): _79.MemberSDKType;
                fromAmino(object: _79.MemberAmino): _79.Member;
                toAmino(message: _79.Member): _79.MemberAmino;
                fromAminoMsg(object: _79.MemberAminoMsg): _79.Member;
                toAminoMsg(message: _79.Member): _79.MemberAminoMsg;
                fromProtoMsg(message: _79.MemberProtoMsg): _79.Member;
                toProto(message: _79.Member): Uint8Array;
                toProtoMsg(message: _79.Member): _79.MemberProtoMsg;
            };
            MemberRequest: {
                typeUrl: string;
                encode(message: _79.MemberRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _79.MemberRequest;
                fromJSON(object: any): _79.MemberRequest;
                toJSON(message: _79.MemberRequest): unknown;
                fromPartial(object: Partial<_79.MemberRequest>): _79.MemberRequest;
                fromSDK(object: _79.MemberRequestSDKType): _79.MemberRequest;
                toSDK(message: _79.MemberRequest): _79.MemberRequestSDKType;
                fromAmino(object: _79.MemberRequestAmino): _79.MemberRequest;
                toAmino(message: _79.MemberRequest): _79.MemberRequestAmino;
                fromAminoMsg(object: _79.MemberRequestAminoMsg): _79.MemberRequest;
                toAminoMsg(message: _79.MemberRequest): _79.MemberRequestAminoMsg;
                fromProtoMsg(message: _79.MemberRequestProtoMsg): _79.MemberRequest;
                toProto(message: _79.MemberRequest): Uint8Array;
                toProtoMsg(message: _79.MemberRequest): _79.MemberRequestProtoMsg;
            };
            ThresholdDecisionPolicy: {
                typeUrl: string;
                encode(message: _79.ThresholdDecisionPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _79.ThresholdDecisionPolicy;
                fromJSON(object: any): _79.ThresholdDecisionPolicy;
                toJSON(message: _79.ThresholdDecisionPolicy): unknown;
                fromPartial(object: Partial<_79.ThresholdDecisionPolicy>): _79.ThresholdDecisionPolicy;
                fromSDK(object: _79.ThresholdDecisionPolicySDKType): _79.ThresholdDecisionPolicy;
                toSDK(message: _79.ThresholdDecisionPolicy): _79.ThresholdDecisionPolicySDKType;
                fromAmino(object: _79.ThresholdDecisionPolicyAmino): _79.ThresholdDecisionPolicy;
                toAmino(message: _79.ThresholdDecisionPolicy): _79.ThresholdDecisionPolicyAmino;
                fromAminoMsg(object: _79.ThresholdDecisionPolicyAminoMsg): _79.ThresholdDecisionPolicy;
                toAminoMsg(message: _79.ThresholdDecisionPolicy): _79.ThresholdDecisionPolicyAminoMsg;
                fromProtoMsg(message: _79.ThresholdDecisionPolicyProtoMsg): _79.ThresholdDecisionPolicy;
                toProto(message: _79.ThresholdDecisionPolicy): Uint8Array;
                toProtoMsg(message: _79.ThresholdDecisionPolicy): _79.ThresholdDecisionPolicyProtoMsg;
            };
            PercentageDecisionPolicy: {
                typeUrl: string;
                encode(message: _79.PercentageDecisionPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _79.PercentageDecisionPolicy;
                fromJSON(object: any): _79.PercentageDecisionPolicy;
                toJSON(message: _79.PercentageDecisionPolicy): unknown;
                fromPartial(object: Partial<_79.PercentageDecisionPolicy>): _79.PercentageDecisionPolicy;
                fromSDK(object: _79.PercentageDecisionPolicySDKType): _79.PercentageDecisionPolicy;
                toSDK(message: _79.PercentageDecisionPolicy): _79.PercentageDecisionPolicySDKType;
                fromAmino(object: _79.PercentageDecisionPolicyAmino): _79.PercentageDecisionPolicy;
                toAmino(message: _79.PercentageDecisionPolicy): _79.PercentageDecisionPolicyAmino;
                fromAminoMsg(object: _79.PercentageDecisionPolicyAminoMsg): _79.PercentageDecisionPolicy;
                toAminoMsg(message: _79.PercentageDecisionPolicy): _79.PercentageDecisionPolicyAminoMsg;
                fromProtoMsg(message: _79.PercentageDecisionPolicyProtoMsg): _79.PercentageDecisionPolicy;
                toProto(message: _79.PercentageDecisionPolicy): Uint8Array;
                toProtoMsg(message: _79.PercentageDecisionPolicy): _79.PercentageDecisionPolicyProtoMsg;
            };
            DecisionPolicyWindows: {
                typeUrl: string;
                encode(message: _79.DecisionPolicyWindows, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _79.DecisionPolicyWindows;
                fromJSON(object: any): _79.DecisionPolicyWindows;
                toJSON(message: _79.DecisionPolicyWindows): unknown;
                fromPartial(object: Partial<_79.DecisionPolicyWindows>): _79.DecisionPolicyWindows;
                fromSDK(object: _79.DecisionPolicyWindowsSDKType): _79.DecisionPolicyWindows;
                toSDK(message: _79.DecisionPolicyWindows): _79.DecisionPolicyWindowsSDKType;
                fromAmino(object: _79.DecisionPolicyWindowsAmino): _79.DecisionPolicyWindows;
                toAmino(message: _79.DecisionPolicyWindows): _79.DecisionPolicyWindowsAmino;
                fromAminoMsg(object: _79.DecisionPolicyWindowsAminoMsg): _79.DecisionPolicyWindows;
                toAminoMsg(message: _79.DecisionPolicyWindows): _79.DecisionPolicyWindowsAminoMsg;
                fromProtoMsg(message: _79.DecisionPolicyWindowsProtoMsg): _79.DecisionPolicyWindows;
                toProto(message: _79.DecisionPolicyWindows): Uint8Array;
                toProtoMsg(message: _79.DecisionPolicyWindows): _79.DecisionPolicyWindowsProtoMsg;
            };
            GroupInfo: {
                typeUrl: string;
                encode(message: _79.GroupInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _79.GroupInfo;
                fromJSON(object: any): _79.GroupInfo;
                toJSON(message: _79.GroupInfo): unknown;
                fromPartial(object: Partial<_79.GroupInfo>): _79.GroupInfo;
                fromSDK(object: _79.GroupInfoSDKType): _79.GroupInfo;
                toSDK(message: _79.GroupInfo): _79.GroupInfoSDKType;
                fromAmino(object: _79.GroupInfoAmino): _79.GroupInfo;
                toAmino(message: _79.GroupInfo): _79.GroupInfoAmino;
                fromAminoMsg(object: _79.GroupInfoAminoMsg): _79.GroupInfo;
                toAminoMsg(message: _79.GroupInfo): _79.GroupInfoAminoMsg;
                fromProtoMsg(message: _79.GroupInfoProtoMsg): _79.GroupInfo;
                toProto(message: _79.GroupInfo): Uint8Array;
                toProtoMsg(message: _79.GroupInfo): _79.GroupInfoProtoMsg;
            };
            GroupMember: {
                typeUrl: string;
                encode(message: _79.GroupMember, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _79.GroupMember;
                fromJSON(object: any): _79.GroupMember;
                toJSON(message: _79.GroupMember): unknown;
                fromPartial(object: Partial<_79.GroupMember>): _79.GroupMember;
                fromSDK(object: _79.GroupMemberSDKType): _79.GroupMember;
                toSDK(message: _79.GroupMember): _79.GroupMemberSDKType;
                fromAmino(object: _79.GroupMemberAmino): _79.GroupMember;
                toAmino(message: _79.GroupMember): _79.GroupMemberAmino;
                fromAminoMsg(object: _79.GroupMemberAminoMsg): _79.GroupMember;
                toAminoMsg(message: _79.GroupMember): _79.GroupMemberAminoMsg;
                fromProtoMsg(message: _79.GroupMemberProtoMsg): _79.GroupMember;
                toProto(message: _79.GroupMember): Uint8Array;
                toProtoMsg(message: _79.GroupMember): _79.GroupMemberProtoMsg;
            };
            GroupPolicyInfo: {
                typeUrl: string;
                encode(message: _79.GroupPolicyInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _79.GroupPolicyInfo;
                fromJSON(object: any): _79.GroupPolicyInfo;
                toJSON(message: _79.GroupPolicyInfo): unknown;
                fromPartial(object: Partial<_79.GroupPolicyInfo>): _79.GroupPolicyInfo;
                fromSDK(object: _79.GroupPolicyInfoSDKType): _79.GroupPolicyInfo;
                toSDK(message: _79.GroupPolicyInfo): _79.GroupPolicyInfoSDKType;
                fromAmino(object: _79.GroupPolicyInfoAmino): _79.GroupPolicyInfo;
                toAmino(message: _79.GroupPolicyInfo): _79.GroupPolicyInfoAmino;
                fromAminoMsg(object: _79.GroupPolicyInfoAminoMsg): _79.GroupPolicyInfo;
                toAminoMsg(message: _79.GroupPolicyInfo): _79.GroupPolicyInfoAminoMsg;
                fromProtoMsg(message: _79.GroupPolicyInfoProtoMsg): _79.GroupPolicyInfo;
                toProto(message: _79.GroupPolicyInfo): Uint8Array;
                toProtoMsg(message: _79.GroupPolicyInfo): _79.GroupPolicyInfoProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _79.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _79.Proposal;
                fromJSON(object: any): _79.Proposal;
                toJSON(message: _79.Proposal): unknown;
                fromPartial(object: Partial<_79.Proposal>): _79.Proposal;
                fromSDK(object: _79.ProposalSDKType): _79.Proposal;
                toSDK(message: _79.Proposal): _79.ProposalSDKType;
                fromAmino(object: _79.ProposalAmino): _79.Proposal;
                toAmino(message: _79.Proposal): _79.ProposalAmino;
                fromAminoMsg(object: _79.ProposalAminoMsg): _79.Proposal;
                toAminoMsg(message: _79.Proposal): _79.ProposalAminoMsg;
                fromProtoMsg(message: _79.ProposalProtoMsg): _79.Proposal;
                toProto(message: _79.Proposal): Uint8Array;
                toProtoMsg(message: _79.Proposal): _79.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _79.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _79.TallyResult;
                fromJSON(object: any): _79.TallyResult;
                toJSON(message: _79.TallyResult): unknown;
                fromPartial(object: Partial<_79.TallyResult>): _79.TallyResult;
                fromSDK(object: _79.TallyResultSDKType): _79.TallyResult;
                toSDK(message: _79.TallyResult): _79.TallyResultSDKType;
                fromAmino(object: _79.TallyResultAmino): _79.TallyResult;
                toAmino(message: _79.TallyResult): _79.TallyResultAmino;
                fromAminoMsg(object: _79.TallyResultAminoMsg): _79.TallyResult;
                toAminoMsg(message: _79.TallyResult): _79.TallyResultAminoMsg;
                fromProtoMsg(message: _79.TallyResultProtoMsg): _79.TallyResult;
                toProto(message: _79.TallyResult): Uint8Array;
                toProtoMsg(message: _79.TallyResult): _79.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _79.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _79.Vote;
                fromJSON(object: any): _79.Vote;
                toJSON(message: _79.Vote): unknown;
                fromPartial(object: Partial<_79.Vote>): _79.Vote;
                fromSDK(object: _79.VoteSDKType): _79.Vote;
                toSDK(message: _79.Vote): _79.VoteSDKType;
                fromAmino(object: _79.VoteAmino): _79.Vote;
                toAmino(message: _79.Vote): _79.VoteAmino;
                fromAminoMsg(object: _79.VoteAminoMsg): _79.Vote;
                toAminoMsg(message: _79.Vote): _79.VoteAminoMsg;
                fromProtoMsg(message: _79.VoteProtoMsg): _79.Vote;
                toProto(message: _79.Vote): Uint8Array;
                toProtoMsg(message: _79.Vote): _79.VoteProtoMsg;
            };
            Cosmos_groupv1DecisionPolicy_InterfaceDecoder: (input: import("..").BinaryReader | Uint8Array) => import("../google/protobuf/any").Any | _79.ThresholdDecisionPolicy | _79.PercentageDecisionPolicy;
            Cosmos_groupv1DecisionPolicy_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_groupv1DecisionPolicy_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            execFromJSON(object: any): _78.Exec;
            execToJSON(object: _78.Exec): string;
            Exec: typeof _78.Exec;
            ExecSDKType: typeof _78.Exec;
            ExecAmino: typeof _78.Exec;
            MsgCreateGroup: {
                typeUrl: string;
                encode(message: _78.MsgCreateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _78.MsgCreateGroup;
                fromJSON(object: any): _78.MsgCreateGroup;
                toJSON(message: _78.MsgCreateGroup): unknown;
                fromPartial(object: Partial<_78.MsgCreateGroup>): _78.MsgCreateGroup;
                fromSDK(object: _78.MsgCreateGroupSDKType): _78.MsgCreateGroup;
                toSDK(message: _78.MsgCreateGroup): _78.MsgCreateGroupSDKType;
                fromAmino(object: _78.MsgCreateGroupAmino): _78.MsgCreateGroup;
                toAmino(message: _78.MsgCreateGroup): _78.MsgCreateGroupAmino;
                fromAminoMsg(object: _78.MsgCreateGroupAminoMsg): _78.MsgCreateGroup;
                toAminoMsg(message: _78.MsgCreateGroup): _78.MsgCreateGroupAminoMsg;
                fromProtoMsg(message: _78.MsgCreateGroupProtoMsg): _78.MsgCreateGroup;
                toProto(message: _78.MsgCreateGroup): Uint8Array;
                toProtoMsg(message: _78.MsgCreateGroup): _78.MsgCreateGroupProtoMsg;
            };
            MsgCreateGroupResponse: {
                typeUrl: string;
                encode(message: _78.MsgCreateGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _78.MsgCreateGroupResponse;
                fromJSON(object: any): _78.MsgCreateGroupResponse;
                toJSON(message: _78.MsgCreateGroupResponse): unknown;
                fromPartial(object: Partial<_78.MsgCreateGroupResponse>): _78.MsgCreateGroupResponse;
                fromSDK(object: _78.MsgCreateGroupResponseSDKType): _78.MsgCreateGroupResponse;
                toSDK(message: _78.MsgCreateGroupResponse): _78.MsgCreateGroupResponseSDKType;
                fromAmino(object: _78.MsgCreateGroupResponseAmino): _78.MsgCreateGroupResponse;
                toAmino(message: _78.MsgCreateGroupResponse): _78.MsgCreateGroupResponseAmino;
                fromAminoMsg(object: _78.MsgCreateGroupResponseAminoMsg): _78.MsgCreateGroupResponse;
                toAminoMsg(message: _78.MsgCreateGroupResponse): _78.MsgCreateGroupResponseAminoMsg;
                fromProtoMsg(message: _78.MsgCreateGroupResponseProtoMsg): _78.MsgCreateGroupResponse;
                toProto(message: _78.MsgCreateGroupResponse): Uint8Array;
                toProtoMsg(message: _78.MsgCreateGroupResponse): _78.MsgCreateGroupResponseProtoMsg;
            };
            MsgUpdateGroupMembers: {
                typeUrl: string;
                encode(message: _78.MsgUpdateGroupMembers, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _78.MsgUpdateGroupMembers;
                fromJSON(object: any): _78.MsgUpdateGroupMembers;
                toJSON(message: _78.MsgUpdateGroupMembers): unknown;
                fromPartial(object: Partial<_78.MsgUpdateGroupMembers>): _78.MsgUpdateGroupMembers;
                fromSDK(object: _78.MsgUpdateGroupMembersSDKType): _78.MsgUpdateGroupMembers;
                toSDK(message: _78.MsgUpdateGroupMembers): _78.MsgUpdateGroupMembersSDKType;
                fromAmino(object: _78.MsgUpdateGroupMembersAmino): _78.MsgUpdateGroupMembers;
                toAmino(message: _78.MsgUpdateGroupMembers): _78.MsgUpdateGroupMembersAmino;
                fromAminoMsg(object: _78.MsgUpdateGroupMembersAminoMsg): _78.MsgUpdateGroupMembers;
                toAminoMsg(message: _78.MsgUpdateGroupMembers): _78.MsgUpdateGroupMembersAminoMsg;
                fromProtoMsg(message: _78.MsgUpdateGroupMembersProtoMsg): _78.MsgUpdateGroupMembers;
                toProto(message: _78.MsgUpdateGroupMembers): Uint8Array;
                toProtoMsg(message: _78.MsgUpdateGroupMembers): _78.MsgUpdateGroupMembersProtoMsg;
            };
            MsgUpdateGroupMembersResponse: {
                typeUrl: string;
                encode(_: _78.MsgUpdateGroupMembersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _78.MsgUpdateGroupMembersResponse;
                fromJSON(_: any): _78.MsgUpdateGroupMembersResponse;
                toJSON(_: _78.MsgUpdateGroupMembersResponse): unknown;
                fromPartial(_: Partial<_78.MsgUpdateGroupMembersResponse>): _78.MsgUpdateGroupMembersResponse;
                fromSDK(_: _78.MsgUpdateGroupMembersResponseSDKType): _78.MsgUpdateGroupMembersResponse;
                toSDK(_: _78.MsgUpdateGroupMembersResponse): _78.MsgUpdateGroupMembersResponseSDKType;
                fromAmino(_: _78.MsgUpdateGroupMembersResponseAmino): _78.MsgUpdateGroupMembersResponse;
                toAmino(_: _78.MsgUpdateGroupMembersResponse): _78.MsgUpdateGroupMembersResponseAmino;
                fromAminoMsg(object: _78.MsgUpdateGroupMembersResponseAminoMsg): _78.MsgUpdateGroupMembersResponse;
                toAminoMsg(message: _78.MsgUpdateGroupMembersResponse): _78.MsgUpdateGroupMembersResponseAminoMsg;
                fromProtoMsg(message: _78.MsgUpdateGroupMembersResponseProtoMsg): _78.MsgUpdateGroupMembersResponse;
                toProto(message: _78.MsgUpdateGroupMembersResponse): Uint8Array;
                toProtoMsg(message: _78.MsgUpdateGroupMembersResponse): _78.MsgUpdateGroupMembersResponseProtoMsg;
            };
            MsgUpdateGroupAdmin: {
                typeUrl: string;
                encode(message: _78.MsgUpdateGroupAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _78.MsgUpdateGroupAdmin;
                fromJSON(object: any): _78.MsgUpdateGroupAdmin;
                toJSON(message: _78.MsgUpdateGroupAdmin): unknown;
                fromPartial(object: Partial<_78.MsgUpdateGroupAdmin>): _78.MsgUpdateGroupAdmin;
                fromSDK(object: _78.MsgUpdateGroupAdminSDKType): _78.MsgUpdateGroupAdmin;
                toSDK(message: _78.MsgUpdateGroupAdmin): _78.MsgUpdateGroupAdminSDKType;
                fromAmino(object: _78.MsgUpdateGroupAdminAmino): _78.MsgUpdateGroupAdmin;
                toAmino(message: _78.MsgUpdateGroupAdmin): _78.MsgUpdateGroupAdminAmino;
                fromAminoMsg(object: _78.MsgUpdateGroupAdminAminoMsg): _78.MsgUpdateGroupAdmin;
                toAminoMsg(message: _78.MsgUpdateGroupAdmin): _78.MsgUpdateGroupAdminAminoMsg;
                fromProtoMsg(message: _78.MsgUpdateGroupAdminProtoMsg): _78.MsgUpdateGroupAdmin;
                toProto(message: _78.MsgUpdateGroupAdmin): Uint8Array;
                toProtoMsg(message: _78.MsgUpdateGroupAdmin): _78.MsgUpdateGroupAdminProtoMsg;
            };
            MsgUpdateGroupAdminResponse: {
                typeUrl: string;
                encode(_: _78.MsgUpdateGroupAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _78.MsgUpdateGroupAdminResponse;
                fromJSON(_: any): _78.MsgUpdateGroupAdminResponse;
                toJSON(_: _78.MsgUpdateGroupAdminResponse): unknown;
                fromPartial(_: Partial<_78.MsgUpdateGroupAdminResponse>): _78.MsgUpdateGroupAdminResponse;
                fromSDK(_: _78.MsgUpdateGroupAdminResponseSDKType): _78.MsgUpdateGroupAdminResponse;
                toSDK(_: _78.MsgUpdateGroupAdminResponse): _78.MsgUpdateGroupAdminResponseSDKType;
                fromAmino(_: _78.MsgUpdateGroupAdminResponseAmino): _78.MsgUpdateGroupAdminResponse;
                toAmino(_: _78.MsgUpdateGroupAdminResponse): _78.MsgUpdateGroupAdminResponseAmino;
                fromAminoMsg(object: _78.MsgUpdateGroupAdminResponseAminoMsg): _78.MsgUpdateGroupAdminResponse;
                toAminoMsg(message: _78.MsgUpdateGroupAdminResponse): _78.MsgUpdateGroupAdminResponseAminoMsg;
                fromProtoMsg(message: _78.MsgUpdateGroupAdminResponseProtoMsg): _78.MsgUpdateGroupAdminResponse;
                toProto(message: _78.MsgUpdateGroupAdminResponse): Uint8Array;
                toProtoMsg(message: _78.MsgUpdateGroupAdminResponse): _78.MsgUpdateGroupAdminResponseProtoMsg;
            };
            MsgUpdateGroupMetadata: {
                typeUrl: string;
                encode(message: _78.MsgUpdateGroupMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _78.MsgUpdateGroupMetadata;
                fromJSON(object: any): _78.MsgUpdateGroupMetadata;
                toJSON(message: _78.MsgUpdateGroupMetadata): unknown;
                fromPartial(object: Partial<_78.MsgUpdateGroupMetadata>): _78.MsgUpdateGroupMetadata;
                fromSDK(object: _78.MsgUpdateGroupMetadataSDKType): _78.MsgUpdateGroupMetadata;
                toSDK(message: _78.MsgUpdateGroupMetadata): _78.MsgUpdateGroupMetadataSDKType;
                fromAmino(object: _78.MsgUpdateGroupMetadataAmino): _78.MsgUpdateGroupMetadata;
                toAmino(message: _78.MsgUpdateGroupMetadata): _78.MsgUpdateGroupMetadataAmino;
                fromAminoMsg(object: _78.MsgUpdateGroupMetadataAminoMsg): _78.MsgUpdateGroupMetadata;
                toAminoMsg(message: _78.MsgUpdateGroupMetadata): _78.MsgUpdateGroupMetadataAminoMsg;
                fromProtoMsg(message: _78.MsgUpdateGroupMetadataProtoMsg): _78.MsgUpdateGroupMetadata;
                toProto(message: _78.MsgUpdateGroupMetadata): Uint8Array;
                toProtoMsg(message: _78.MsgUpdateGroupMetadata): _78.MsgUpdateGroupMetadataProtoMsg;
            };
            MsgUpdateGroupMetadataResponse: {
                typeUrl: string;
                encode(_: _78.MsgUpdateGroupMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _78.MsgUpdateGroupMetadataResponse;
                fromJSON(_: any): _78.MsgUpdateGroupMetadataResponse;
                toJSON(_: _78.MsgUpdateGroupMetadataResponse): unknown;
                fromPartial(_: Partial<_78.MsgUpdateGroupMetadataResponse>): _78.MsgUpdateGroupMetadataResponse;
                fromSDK(_: _78.MsgUpdateGroupMetadataResponseSDKType): _78.MsgUpdateGroupMetadataResponse;
                toSDK(_: _78.MsgUpdateGroupMetadataResponse): _78.MsgUpdateGroupMetadataResponseSDKType;
                fromAmino(_: _78.MsgUpdateGroupMetadataResponseAmino): _78.MsgUpdateGroupMetadataResponse;
                toAmino(_: _78.MsgUpdateGroupMetadataResponse): _78.MsgUpdateGroupMetadataResponseAmino;
                fromAminoMsg(object: _78.MsgUpdateGroupMetadataResponseAminoMsg): _78.MsgUpdateGroupMetadataResponse;
                toAminoMsg(message: _78.MsgUpdateGroupMetadataResponse): _78.MsgUpdateGroupMetadataResponseAminoMsg;
                fromProtoMsg(message: _78.MsgUpdateGroupMetadataResponseProtoMsg): _78.MsgUpdateGroupMetadataResponse;
                toProto(message: _78.MsgUpdateGroupMetadataResponse): Uint8Array;
                toProtoMsg(message: _78.MsgUpdateGroupMetadataResponse): _78.MsgUpdateGroupMetadataResponseProtoMsg;
            };
            MsgCreateGroupPolicy: {
                typeUrl: string;
                encode(message: _78.MsgCreateGroupPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _78.MsgCreateGroupPolicy;
                fromJSON(object: any): _78.MsgCreateGroupPolicy;
                toJSON(message: _78.MsgCreateGroupPolicy): unknown;
                fromPartial(object: Partial<_78.MsgCreateGroupPolicy>): _78.MsgCreateGroupPolicy;
                fromSDK(object: _78.MsgCreateGroupPolicySDKType): _78.MsgCreateGroupPolicy;
                toSDK(message: _78.MsgCreateGroupPolicy): _78.MsgCreateGroupPolicySDKType;
                fromAmino(object: _78.MsgCreateGroupPolicyAmino): _78.MsgCreateGroupPolicy;
                toAmino(message: _78.MsgCreateGroupPolicy): _78.MsgCreateGroupPolicyAmino;
                fromAminoMsg(object: _78.MsgCreateGroupPolicyAminoMsg): _78.MsgCreateGroupPolicy;
                toAminoMsg(message: _78.MsgCreateGroupPolicy): _78.MsgCreateGroupPolicyAminoMsg;
                fromProtoMsg(message: _78.MsgCreateGroupPolicyProtoMsg): _78.MsgCreateGroupPolicy;
                toProto(message: _78.MsgCreateGroupPolicy): Uint8Array;
                toProtoMsg(message: _78.MsgCreateGroupPolicy): _78.MsgCreateGroupPolicyProtoMsg;
            };
            MsgCreateGroupPolicyResponse: {
                typeUrl: string;
                encode(message: _78.MsgCreateGroupPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _78.MsgCreateGroupPolicyResponse;
                fromJSON(object: any): _78.MsgCreateGroupPolicyResponse;
                toJSON(message: _78.MsgCreateGroupPolicyResponse): unknown;
                fromPartial(object: Partial<_78.MsgCreateGroupPolicyResponse>): _78.MsgCreateGroupPolicyResponse;
                fromSDK(object: _78.MsgCreateGroupPolicyResponseSDKType): _78.MsgCreateGroupPolicyResponse;
                toSDK(message: _78.MsgCreateGroupPolicyResponse): _78.MsgCreateGroupPolicyResponseSDKType;
                fromAmino(object: _78.MsgCreateGroupPolicyResponseAmino): _78.MsgCreateGroupPolicyResponse;
                toAmino(message: _78.MsgCreateGroupPolicyResponse): _78.MsgCreateGroupPolicyResponseAmino;
                fromAminoMsg(object: _78.MsgCreateGroupPolicyResponseAminoMsg): _78.MsgCreateGroupPolicyResponse;
                toAminoMsg(message: _78.MsgCreateGroupPolicyResponse): _78.MsgCreateGroupPolicyResponseAminoMsg;
                fromProtoMsg(message: _78.MsgCreateGroupPolicyResponseProtoMsg): _78.MsgCreateGroupPolicyResponse;
                toProto(message: _78.MsgCreateGroupPolicyResponse): Uint8Array;
                toProtoMsg(message: _78.MsgCreateGroupPolicyResponse): _78.MsgCreateGroupPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyAdmin: {
                typeUrl: string;
                encode(message: _78.MsgUpdateGroupPolicyAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _78.MsgUpdateGroupPolicyAdmin;
                fromJSON(object: any): _78.MsgUpdateGroupPolicyAdmin;
                toJSON(message: _78.MsgUpdateGroupPolicyAdmin): unknown;
                fromPartial(object: Partial<_78.MsgUpdateGroupPolicyAdmin>): _78.MsgUpdateGroupPolicyAdmin;
                fromSDK(object: _78.MsgUpdateGroupPolicyAdminSDKType): _78.MsgUpdateGroupPolicyAdmin;
                toSDK(message: _78.MsgUpdateGroupPolicyAdmin): _78.MsgUpdateGroupPolicyAdminSDKType;
                fromAmino(object: _78.MsgUpdateGroupPolicyAdminAmino): _78.MsgUpdateGroupPolicyAdmin;
                toAmino(message: _78.MsgUpdateGroupPolicyAdmin): _78.MsgUpdateGroupPolicyAdminAmino;
                fromAminoMsg(object: _78.MsgUpdateGroupPolicyAdminAminoMsg): _78.MsgUpdateGroupPolicyAdmin;
                toAminoMsg(message: _78.MsgUpdateGroupPolicyAdmin): _78.MsgUpdateGroupPolicyAdminAminoMsg;
                fromProtoMsg(message: _78.MsgUpdateGroupPolicyAdminProtoMsg): _78.MsgUpdateGroupPolicyAdmin;
                toProto(message: _78.MsgUpdateGroupPolicyAdmin): Uint8Array;
                toProtoMsg(message: _78.MsgUpdateGroupPolicyAdmin): _78.MsgUpdateGroupPolicyAdminProtoMsg;
            };
            MsgUpdateGroupPolicyAdminResponse: {
                typeUrl: string;
                encode(_: _78.MsgUpdateGroupPolicyAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _78.MsgUpdateGroupPolicyAdminResponse;
                fromJSON(_: any): _78.MsgUpdateGroupPolicyAdminResponse;
                toJSON(_: _78.MsgUpdateGroupPolicyAdminResponse): unknown;
                fromPartial(_: Partial<_78.MsgUpdateGroupPolicyAdminResponse>): _78.MsgUpdateGroupPolicyAdminResponse;
                fromSDK(_: _78.MsgUpdateGroupPolicyAdminResponseSDKType): _78.MsgUpdateGroupPolicyAdminResponse;
                toSDK(_: _78.MsgUpdateGroupPolicyAdminResponse): _78.MsgUpdateGroupPolicyAdminResponseSDKType;
                fromAmino(_: _78.MsgUpdateGroupPolicyAdminResponseAmino): _78.MsgUpdateGroupPolicyAdminResponse;
                toAmino(_: _78.MsgUpdateGroupPolicyAdminResponse): _78.MsgUpdateGroupPolicyAdminResponseAmino;
                fromAminoMsg(object: _78.MsgUpdateGroupPolicyAdminResponseAminoMsg): _78.MsgUpdateGroupPolicyAdminResponse;
                toAminoMsg(message: _78.MsgUpdateGroupPolicyAdminResponse): _78.MsgUpdateGroupPolicyAdminResponseAminoMsg;
                fromProtoMsg(message: _78.MsgUpdateGroupPolicyAdminResponseProtoMsg): _78.MsgUpdateGroupPolicyAdminResponse;
                toProto(message: _78.MsgUpdateGroupPolicyAdminResponse): Uint8Array;
                toProtoMsg(message: _78.MsgUpdateGroupPolicyAdminResponse): _78.MsgUpdateGroupPolicyAdminResponseProtoMsg;
            };
            MsgCreateGroupWithPolicy: {
                typeUrl: string;
                encode(message: _78.MsgCreateGroupWithPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _78.MsgCreateGroupWithPolicy;
                fromJSON(object: any): _78.MsgCreateGroupWithPolicy;
                toJSON(message: _78.MsgCreateGroupWithPolicy): unknown;
                fromPartial(object: Partial<_78.MsgCreateGroupWithPolicy>): _78.MsgCreateGroupWithPolicy;
                fromSDK(object: _78.MsgCreateGroupWithPolicySDKType): _78.MsgCreateGroupWithPolicy;
                toSDK(message: _78.MsgCreateGroupWithPolicy): _78.MsgCreateGroupWithPolicySDKType;
                fromAmino(object: _78.MsgCreateGroupWithPolicyAmino): _78.MsgCreateGroupWithPolicy;
                toAmino(message: _78.MsgCreateGroupWithPolicy): _78.MsgCreateGroupWithPolicyAmino;
                fromAminoMsg(object: _78.MsgCreateGroupWithPolicyAminoMsg): _78.MsgCreateGroupWithPolicy;
                toAminoMsg(message: _78.MsgCreateGroupWithPolicy): _78.MsgCreateGroupWithPolicyAminoMsg;
                fromProtoMsg(message: _78.MsgCreateGroupWithPolicyProtoMsg): _78.MsgCreateGroupWithPolicy;
                toProto(message: _78.MsgCreateGroupWithPolicy): Uint8Array;
                toProtoMsg(message: _78.MsgCreateGroupWithPolicy): _78.MsgCreateGroupWithPolicyProtoMsg;
            };
            MsgCreateGroupWithPolicyResponse: {
                typeUrl: string;
                encode(message: _78.MsgCreateGroupWithPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _78.MsgCreateGroupWithPolicyResponse;
                fromJSON(object: any): _78.MsgCreateGroupWithPolicyResponse;
                toJSON(message: _78.MsgCreateGroupWithPolicyResponse): unknown;
                fromPartial(object: Partial<_78.MsgCreateGroupWithPolicyResponse>): _78.MsgCreateGroupWithPolicyResponse;
                fromSDK(object: _78.MsgCreateGroupWithPolicyResponseSDKType): _78.MsgCreateGroupWithPolicyResponse;
                toSDK(message: _78.MsgCreateGroupWithPolicyResponse): _78.MsgCreateGroupWithPolicyResponseSDKType;
                fromAmino(object: _78.MsgCreateGroupWithPolicyResponseAmino): _78.MsgCreateGroupWithPolicyResponse;
                toAmino(message: _78.MsgCreateGroupWithPolicyResponse): _78.MsgCreateGroupWithPolicyResponseAmino;
                fromAminoMsg(object: _78.MsgCreateGroupWithPolicyResponseAminoMsg): _78.MsgCreateGroupWithPolicyResponse;
                toAminoMsg(message: _78.MsgCreateGroupWithPolicyResponse): _78.MsgCreateGroupWithPolicyResponseAminoMsg;
                fromProtoMsg(message: _78.MsgCreateGroupWithPolicyResponseProtoMsg): _78.MsgCreateGroupWithPolicyResponse;
                toProto(message: _78.MsgCreateGroupWithPolicyResponse): Uint8Array;
                toProtoMsg(message: _78.MsgCreateGroupWithPolicyResponse): _78.MsgCreateGroupWithPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyDecisionPolicy: {
                typeUrl: string;
                encode(message: _78.MsgUpdateGroupPolicyDecisionPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _78.MsgUpdateGroupPolicyDecisionPolicy;
                fromJSON(object: any): _78.MsgUpdateGroupPolicyDecisionPolicy;
                toJSON(message: _78.MsgUpdateGroupPolicyDecisionPolicy): unknown;
                fromPartial(object: Partial<_78.MsgUpdateGroupPolicyDecisionPolicy>): _78.MsgUpdateGroupPolicyDecisionPolicy;
                fromSDK(object: _78.MsgUpdateGroupPolicyDecisionPolicySDKType): _78.MsgUpdateGroupPolicyDecisionPolicy;
                toSDK(message: _78.MsgUpdateGroupPolicyDecisionPolicy): _78.MsgUpdateGroupPolicyDecisionPolicySDKType;
                fromAmino(object: _78.MsgUpdateGroupPolicyDecisionPolicyAmino): _78.MsgUpdateGroupPolicyDecisionPolicy;
                toAmino(message: _78.MsgUpdateGroupPolicyDecisionPolicy): _78.MsgUpdateGroupPolicyDecisionPolicyAmino;
                fromAminoMsg(object: _78.MsgUpdateGroupPolicyDecisionPolicyAminoMsg): _78.MsgUpdateGroupPolicyDecisionPolicy;
                toAminoMsg(message: _78.MsgUpdateGroupPolicyDecisionPolicy): _78.MsgUpdateGroupPolicyDecisionPolicyAminoMsg;
                fromProtoMsg(message: _78.MsgUpdateGroupPolicyDecisionPolicyProtoMsg): _78.MsgUpdateGroupPolicyDecisionPolicy;
                toProto(message: _78.MsgUpdateGroupPolicyDecisionPolicy): Uint8Array;
                toProtoMsg(message: _78.MsgUpdateGroupPolicyDecisionPolicy): _78.MsgUpdateGroupPolicyDecisionPolicyProtoMsg;
            };
            MsgUpdateGroupPolicyDecisionPolicyResponse: {
                typeUrl: string;
                encode(_: _78.MsgUpdateGroupPolicyDecisionPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _78.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromJSON(_: any): _78.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toJSON(_: _78.MsgUpdateGroupPolicyDecisionPolicyResponse): unknown;
                fromPartial(_: Partial<_78.MsgUpdateGroupPolicyDecisionPolicyResponse>): _78.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromSDK(_: _78.MsgUpdateGroupPolicyDecisionPolicyResponseSDKType): _78.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toSDK(_: _78.MsgUpdateGroupPolicyDecisionPolicyResponse): _78.MsgUpdateGroupPolicyDecisionPolicyResponseSDKType;
                fromAmino(_: _78.MsgUpdateGroupPolicyDecisionPolicyResponseAmino): _78.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toAmino(_: _78.MsgUpdateGroupPolicyDecisionPolicyResponse): _78.MsgUpdateGroupPolicyDecisionPolicyResponseAmino;
                fromAminoMsg(object: _78.MsgUpdateGroupPolicyDecisionPolicyResponseAminoMsg): _78.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toAminoMsg(message: _78.MsgUpdateGroupPolicyDecisionPolicyResponse): _78.MsgUpdateGroupPolicyDecisionPolicyResponseAminoMsg;
                fromProtoMsg(message: _78.MsgUpdateGroupPolicyDecisionPolicyResponseProtoMsg): _78.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toProto(message: _78.MsgUpdateGroupPolicyDecisionPolicyResponse): Uint8Array;
                toProtoMsg(message: _78.MsgUpdateGroupPolicyDecisionPolicyResponse): _78.MsgUpdateGroupPolicyDecisionPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyMetadata: {
                typeUrl: string;
                encode(message: _78.MsgUpdateGroupPolicyMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _78.MsgUpdateGroupPolicyMetadata;
                fromJSON(object: any): _78.MsgUpdateGroupPolicyMetadata;
                toJSON(message: _78.MsgUpdateGroupPolicyMetadata): unknown;
                fromPartial(object: Partial<_78.MsgUpdateGroupPolicyMetadata>): _78.MsgUpdateGroupPolicyMetadata;
                fromSDK(object: _78.MsgUpdateGroupPolicyMetadataSDKType): _78.MsgUpdateGroupPolicyMetadata;
                toSDK(message: _78.MsgUpdateGroupPolicyMetadata): _78.MsgUpdateGroupPolicyMetadataSDKType;
                fromAmino(object: _78.MsgUpdateGroupPolicyMetadataAmino): _78.MsgUpdateGroupPolicyMetadata;
                toAmino(message: _78.MsgUpdateGroupPolicyMetadata): _78.MsgUpdateGroupPolicyMetadataAmino;
                fromAminoMsg(object: _78.MsgUpdateGroupPolicyMetadataAminoMsg): _78.MsgUpdateGroupPolicyMetadata;
                toAminoMsg(message: _78.MsgUpdateGroupPolicyMetadata): _78.MsgUpdateGroupPolicyMetadataAminoMsg;
                fromProtoMsg(message: _78.MsgUpdateGroupPolicyMetadataProtoMsg): _78.MsgUpdateGroupPolicyMetadata;
                toProto(message: _78.MsgUpdateGroupPolicyMetadata): Uint8Array;
                toProtoMsg(message: _78.MsgUpdateGroupPolicyMetadata): _78.MsgUpdateGroupPolicyMetadataProtoMsg;
            };
            MsgUpdateGroupPolicyMetadataResponse: {
                typeUrl: string;
                encode(_: _78.MsgUpdateGroupPolicyMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _78.MsgUpdateGroupPolicyMetadataResponse;
                fromJSON(_: any): _78.MsgUpdateGroupPolicyMetadataResponse;
                toJSON(_: _78.MsgUpdateGroupPolicyMetadataResponse): unknown;
                fromPartial(_: Partial<_78.MsgUpdateGroupPolicyMetadataResponse>): _78.MsgUpdateGroupPolicyMetadataResponse;
                fromSDK(_: _78.MsgUpdateGroupPolicyMetadataResponseSDKType): _78.MsgUpdateGroupPolicyMetadataResponse;
                toSDK(_: _78.MsgUpdateGroupPolicyMetadataResponse): _78.MsgUpdateGroupPolicyMetadataResponseSDKType;
                fromAmino(_: _78.MsgUpdateGroupPolicyMetadataResponseAmino): _78.MsgUpdateGroupPolicyMetadataResponse;
                toAmino(_: _78.MsgUpdateGroupPolicyMetadataResponse): _78.MsgUpdateGroupPolicyMetadataResponseAmino;
                fromAminoMsg(object: _78.MsgUpdateGroupPolicyMetadataResponseAminoMsg): _78.MsgUpdateGroupPolicyMetadataResponse;
                toAminoMsg(message: _78.MsgUpdateGroupPolicyMetadataResponse): _78.MsgUpdateGroupPolicyMetadataResponseAminoMsg;
                fromProtoMsg(message: _78.MsgUpdateGroupPolicyMetadataResponseProtoMsg): _78.MsgUpdateGroupPolicyMetadataResponse;
                toProto(message: _78.MsgUpdateGroupPolicyMetadataResponse): Uint8Array;
                toProtoMsg(message: _78.MsgUpdateGroupPolicyMetadataResponse): _78.MsgUpdateGroupPolicyMetadataResponseProtoMsg;
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _78.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _78.MsgSubmitProposal;
                fromJSON(object: any): _78.MsgSubmitProposal;
                toJSON(message: _78.MsgSubmitProposal): unknown;
                fromPartial(object: Partial<_78.MsgSubmitProposal>): _78.MsgSubmitProposal;
                fromSDK(object: _78.MsgSubmitProposalSDKType): _78.MsgSubmitProposal;
                toSDK(message: _78.MsgSubmitProposal): _78.MsgSubmitProposalSDKType;
                fromAmino(object: _78.MsgSubmitProposalAmino): _78.MsgSubmitProposal;
                toAmino(message: _78.MsgSubmitProposal): _78.MsgSubmitProposalAmino;
                fromAminoMsg(object: _78.MsgSubmitProposalAminoMsg): _78.MsgSubmitProposal;
                toAminoMsg(message: _78.MsgSubmitProposal): _78.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _78.MsgSubmitProposalProtoMsg): _78.MsgSubmitProposal;
                toProto(message: _78.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _78.MsgSubmitProposal): _78.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _78.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _78.MsgSubmitProposalResponse;
                fromJSON(object: any): _78.MsgSubmitProposalResponse;
                toJSON(message: _78.MsgSubmitProposalResponse): unknown;
                fromPartial(object: Partial<_78.MsgSubmitProposalResponse>): _78.MsgSubmitProposalResponse;
                fromSDK(object: _78.MsgSubmitProposalResponseSDKType): _78.MsgSubmitProposalResponse;
                toSDK(message: _78.MsgSubmitProposalResponse): _78.MsgSubmitProposalResponseSDKType;
                fromAmino(object: _78.MsgSubmitProposalResponseAmino): _78.MsgSubmitProposalResponse;
                toAmino(message: _78.MsgSubmitProposalResponse): _78.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _78.MsgSubmitProposalResponseAminoMsg): _78.MsgSubmitProposalResponse;
                toAminoMsg(message: _78.MsgSubmitProposalResponse): _78.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _78.MsgSubmitProposalResponseProtoMsg): _78.MsgSubmitProposalResponse;
                toProto(message: _78.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _78.MsgSubmitProposalResponse): _78.MsgSubmitProposalResponseProtoMsg;
            };
            MsgWithdrawProposal: {
                typeUrl: string;
                encode(message: _78.MsgWithdrawProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _78.MsgWithdrawProposal;
                fromJSON(object: any): _78.MsgWithdrawProposal;
                toJSON(message: _78.MsgWithdrawProposal): unknown;
                fromPartial(object: Partial<_78.MsgWithdrawProposal>): _78.MsgWithdrawProposal;
                fromSDK(object: _78.MsgWithdrawProposalSDKType): _78.MsgWithdrawProposal;
                toSDK(message: _78.MsgWithdrawProposal): _78.MsgWithdrawProposalSDKType;
                fromAmino(object: _78.MsgWithdrawProposalAmino): _78.MsgWithdrawProposal;
                toAmino(message: _78.MsgWithdrawProposal): _78.MsgWithdrawProposalAmino;
                fromAminoMsg(object: _78.MsgWithdrawProposalAminoMsg): _78.MsgWithdrawProposal;
                toAminoMsg(message: _78.MsgWithdrawProposal): _78.MsgWithdrawProposalAminoMsg;
                fromProtoMsg(message: _78.MsgWithdrawProposalProtoMsg): _78.MsgWithdrawProposal;
                toProto(message: _78.MsgWithdrawProposal): Uint8Array;
                toProtoMsg(message: _78.MsgWithdrawProposal): _78.MsgWithdrawProposalProtoMsg;
            };
            MsgWithdrawProposalResponse: {
                typeUrl: string;
                encode(_: _78.MsgWithdrawProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _78.MsgWithdrawProposalResponse;
                fromJSON(_: any): _78.MsgWithdrawProposalResponse;
                toJSON(_: _78.MsgWithdrawProposalResponse): unknown;
                fromPartial(_: Partial<_78.MsgWithdrawProposalResponse>): _78.MsgWithdrawProposalResponse;
                fromSDK(_: _78.MsgWithdrawProposalResponseSDKType): _78.MsgWithdrawProposalResponse;
                toSDK(_: _78.MsgWithdrawProposalResponse): _78.MsgWithdrawProposalResponseSDKType;
                fromAmino(_: _78.MsgWithdrawProposalResponseAmino): _78.MsgWithdrawProposalResponse;
                toAmino(_: _78.MsgWithdrawProposalResponse): _78.MsgWithdrawProposalResponseAmino;
                fromAminoMsg(object: _78.MsgWithdrawProposalResponseAminoMsg): _78.MsgWithdrawProposalResponse;
                toAminoMsg(message: _78.MsgWithdrawProposalResponse): _78.MsgWithdrawProposalResponseAminoMsg;
                fromProtoMsg(message: _78.MsgWithdrawProposalResponseProtoMsg): _78.MsgWithdrawProposalResponse;
                toProto(message: _78.MsgWithdrawProposalResponse): Uint8Array;
                toProtoMsg(message: _78.MsgWithdrawProposalResponse): _78.MsgWithdrawProposalResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _78.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _78.MsgVote;
                fromJSON(object: any): _78.MsgVote;
                toJSON(message: _78.MsgVote): unknown;
                fromPartial(object: Partial<_78.MsgVote>): _78.MsgVote;
                fromSDK(object: _78.MsgVoteSDKType): _78.MsgVote;
                toSDK(message: _78.MsgVote): _78.MsgVoteSDKType;
                fromAmino(object: _78.MsgVoteAmino): _78.MsgVote;
                toAmino(message: _78.MsgVote): _78.MsgVoteAmino;
                fromAminoMsg(object: _78.MsgVoteAminoMsg): _78.MsgVote;
                toAminoMsg(message: _78.MsgVote): _78.MsgVoteAminoMsg;
                fromProtoMsg(message: _78.MsgVoteProtoMsg): _78.MsgVote;
                toProto(message: _78.MsgVote): Uint8Array;
                toProtoMsg(message: _78.MsgVote): _78.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _78.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _78.MsgVoteResponse;
                fromJSON(_: any): _78.MsgVoteResponse;
                toJSON(_: _78.MsgVoteResponse): unknown;
                fromPartial(_: Partial<_78.MsgVoteResponse>): _78.MsgVoteResponse;
                fromSDK(_: _78.MsgVoteResponseSDKType): _78.MsgVoteResponse;
                toSDK(_: _78.MsgVoteResponse): _78.MsgVoteResponseSDKType;
                fromAmino(_: _78.MsgVoteResponseAmino): _78.MsgVoteResponse;
                toAmino(_: _78.MsgVoteResponse): _78.MsgVoteResponseAmino;
                fromAminoMsg(object: _78.MsgVoteResponseAminoMsg): _78.MsgVoteResponse;
                toAminoMsg(message: _78.MsgVoteResponse): _78.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _78.MsgVoteResponseProtoMsg): _78.MsgVoteResponse;
                toProto(message: _78.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _78.MsgVoteResponse): _78.MsgVoteResponseProtoMsg;
            };
            MsgExec: {
                typeUrl: string;
                encode(message: _78.MsgExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _78.MsgExec;
                fromJSON(object: any): _78.MsgExec;
                toJSON(message: _78.MsgExec): unknown;
                fromPartial(object: Partial<_78.MsgExec>): _78.MsgExec;
                fromSDK(object: _78.MsgExecSDKType): _78.MsgExec;
                toSDK(message: _78.MsgExec): _78.MsgExecSDKType;
                fromAmino(object: _78.MsgExecAmino): _78.MsgExec;
                toAmino(message: _78.MsgExec): _78.MsgExecAmino;
                fromAminoMsg(object: _78.MsgExecAminoMsg): _78.MsgExec;
                toAminoMsg(message: _78.MsgExec): _78.MsgExecAminoMsg;
                fromProtoMsg(message: _78.MsgExecProtoMsg): _78.MsgExec;
                toProto(message: _78.MsgExec): Uint8Array;
                toProtoMsg(message: _78.MsgExec): _78.MsgExecProtoMsg;
            };
            MsgExecResponse: {
                typeUrl: string;
                encode(message: _78.MsgExecResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _78.MsgExecResponse;
                fromJSON(object: any): _78.MsgExecResponse;
                toJSON(message: _78.MsgExecResponse): unknown;
                fromPartial(object: Partial<_78.MsgExecResponse>): _78.MsgExecResponse;
                fromSDK(object: _78.MsgExecResponseSDKType): _78.MsgExecResponse;
                toSDK(message: _78.MsgExecResponse): _78.MsgExecResponseSDKType;
                fromAmino(object: _78.MsgExecResponseAmino): _78.MsgExecResponse;
                toAmino(message: _78.MsgExecResponse): _78.MsgExecResponseAmino;
                fromAminoMsg(object: _78.MsgExecResponseAminoMsg): _78.MsgExecResponse;
                toAminoMsg(message: _78.MsgExecResponse): _78.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _78.MsgExecResponseProtoMsg): _78.MsgExecResponse;
                toProto(message: _78.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _78.MsgExecResponse): _78.MsgExecResponseProtoMsg;
            };
            MsgLeaveGroup: {
                typeUrl: string;
                encode(message: _78.MsgLeaveGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _78.MsgLeaveGroup;
                fromJSON(object: any): _78.MsgLeaveGroup;
                toJSON(message: _78.MsgLeaveGroup): unknown;
                fromPartial(object: Partial<_78.MsgLeaveGroup>): _78.MsgLeaveGroup;
                fromSDK(object: _78.MsgLeaveGroupSDKType): _78.MsgLeaveGroup;
                toSDK(message: _78.MsgLeaveGroup): _78.MsgLeaveGroupSDKType;
                fromAmino(object: _78.MsgLeaveGroupAmino): _78.MsgLeaveGroup;
                toAmino(message: _78.MsgLeaveGroup): _78.MsgLeaveGroupAmino;
                fromAminoMsg(object: _78.MsgLeaveGroupAminoMsg): _78.MsgLeaveGroup;
                toAminoMsg(message: _78.MsgLeaveGroup): _78.MsgLeaveGroupAminoMsg;
                fromProtoMsg(message: _78.MsgLeaveGroupProtoMsg): _78.MsgLeaveGroup;
                toProto(message: _78.MsgLeaveGroup): Uint8Array;
                toProtoMsg(message: _78.MsgLeaveGroup): _78.MsgLeaveGroupProtoMsg;
            };
            MsgLeaveGroupResponse: {
                typeUrl: string;
                encode(_: _78.MsgLeaveGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _78.MsgLeaveGroupResponse;
                fromJSON(_: any): _78.MsgLeaveGroupResponse;
                toJSON(_: _78.MsgLeaveGroupResponse): unknown;
                fromPartial(_: Partial<_78.MsgLeaveGroupResponse>): _78.MsgLeaveGroupResponse;
                fromSDK(_: _78.MsgLeaveGroupResponseSDKType): _78.MsgLeaveGroupResponse;
                toSDK(_: _78.MsgLeaveGroupResponse): _78.MsgLeaveGroupResponseSDKType;
                fromAmino(_: _78.MsgLeaveGroupResponseAmino): _78.MsgLeaveGroupResponse;
                toAmino(_: _78.MsgLeaveGroupResponse): _78.MsgLeaveGroupResponseAmino;
                fromAminoMsg(object: _78.MsgLeaveGroupResponseAminoMsg): _78.MsgLeaveGroupResponse;
                toAminoMsg(message: _78.MsgLeaveGroupResponse): _78.MsgLeaveGroupResponseAminoMsg;
                fromProtoMsg(message: _78.MsgLeaveGroupResponseProtoMsg): _78.MsgLeaveGroupResponse;
                toProto(message: _78.MsgLeaveGroupResponse): Uint8Array;
                toProtoMsg(message: _78.MsgLeaveGroupResponse): _78.MsgLeaveGroupResponseProtoMsg;
            };
            QueryGroupInfoRequest: {
                typeUrl: string;
                encode(message: _77.QueryGroupInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _77.QueryGroupInfoRequest;
                fromJSON(object: any): _77.QueryGroupInfoRequest;
                toJSON(message: _77.QueryGroupInfoRequest): unknown;
                fromPartial(object: Partial<_77.QueryGroupInfoRequest>): _77.QueryGroupInfoRequest;
                fromSDK(object: _77.QueryGroupInfoRequestSDKType): _77.QueryGroupInfoRequest;
                toSDK(message: _77.QueryGroupInfoRequest): _77.QueryGroupInfoRequestSDKType;
                fromAmino(object: _77.QueryGroupInfoRequestAmino): _77.QueryGroupInfoRequest;
                toAmino(message: _77.QueryGroupInfoRequest): _77.QueryGroupInfoRequestAmino;
                fromAminoMsg(object: _77.QueryGroupInfoRequestAminoMsg): _77.QueryGroupInfoRequest;
                toAminoMsg(message: _77.QueryGroupInfoRequest): _77.QueryGroupInfoRequestAminoMsg;
                fromProtoMsg(message: _77.QueryGroupInfoRequestProtoMsg): _77.QueryGroupInfoRequest;
                toProto(message: _77.QueryGroupInfoRequest): Uint8Array;
                toProtoMsg(message: _77.QueryGroupInfoRequest): _77.QueryGroupInfoRequestProtoMsg;
            };
            QueryGroupInfoResponse: {
                typeUrl: string;
                encode(message: _77.QueryGroupInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _77.QueryGroupInfoResponse;
                fromJSON(object: any): _77.QueryGroupInfoResponse;
                toJSON(message: _77.QueryGroupInfoResponse): unknown;
                fromPartial(object: Partial<_77.QueryGroupInfoResponse>): _77.QueryGroupInfoResponse;
                fromSDK(object: _77.QueryGroupInfoResponseSDKType): _77.QueryGroupInfoResponse;
                toSDK(message: _77.QueryGroupInfoResponse): _77.QueryGroupInfoResponseSDKType;
                fromAmino(object: _77.QueryGroupInfoResponseAmino): _77.QueryGroupInfoResponse;
                toAmino(message: _77.QueryGroupInfoResponse): _77.QueryGroupInfoResponseAmino;
                fromAminoMsg(object: _77.QueryGroupInfoResponseAminoMsg): _77.QueryGroupInfoResponse;
                toAminoMsg(message: _77.QueryGroupInfoResponse): _77.QueryGroupInfoResponseAminoMsg;
                fromProtoMsg(message: _77.QueryGroupInfoResponseProtoMsg): _77.QueryGroupInfoResponse;
                toProto(message: _77.QueryGroupInfoResponse): Uint8Array;
                toProtoMsg(message: _77.QueryGroupInfoResponse): _77.QueryGroupInfoResponseProtoMsg;
            };
            QueryGroupPolicyInfoRequest: {
                typeUrl: string;
                encode(message: _77.QueryGroupPolicyInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _77.QueryGroupPolicyInfoRequest;
                fromJSON(object: any): _77.QueryGroupPolicyInfoRequest;
                toJSON(message: _77.QueryGroupPolicyInfoRequest): unknown;
                fromPartial(object: Partial<_77.QueryGroupPolicyInfoRequest>): _77.QueryGroupPolicyInfoRequest;
                fromSDK(object: _77.QueryGroupPolicyInfoRequestSDKType): _77.QueryGroupPolicyInfoRequest;
                toSDK(message: _77.QueryGroupPolicyInfoRequest): _77.QueryGroupPolicyInfoRequestSDKType;
                fromAmino(object: _77.QueryGroupPolicyInfoRequestAmino): _77.QueryGroupPolicyInfoRequest;
                toAmino(message: _77.QueryGroupPolicyInfoRequest): _77.QueryGroupPolicyInfoRequestAmino;
                fromAminoMsg(object: _77.QueryGroupPolicyInfoRequestAminoMsg): _77.QueryGroupPolicyInfoRequest;
                toAminoMsg(message: _77.QueryGroupPolicyInfoRequest): _77.QueryGroupPolicyInfoRequestAminoMsg;
                fromProtoMsg(message: _77.QueryGroupPolicyInfoRequestProtoMsg): _77.QueryGroupPolicyInfoRequest;
                toProto(message: _77.QueryGroupPolicyInfoRequest): Uint8Array;
                toProtoMsg(message: _77.QueryGroupPolicyInfoRequest): _77.QueryGroupPolicyInfoRequestProtoMsg;
            };
            QueryGroupPolicyInfoResponse: {
                typeUrl: string;
                encode(message: _77.QueryGroupPolicyInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _77.QueryGroupPolicyInfoResponse;
                fromJSON(object: any): _77.QueryGroupPolicyInfoResponse;
                toJSON(message: _77.QueryGroupPolicyInfoResponse): unknown;
                fromPartial(object: Partial<_77.QueryGroupPolicyInfoResponse>): _77.QueryGroupPolicyInfoResponse;
                fromSDK(object: _77.QueryGroupPolicyInfoResponseSDKType): _77.QueryGroupPolicyInfoResponse;
                toSDK(message: _77.QueryGroupPolicyInfoResponse): _77.QueryGroupPolicyInfoResponseSDKType;
                fromAmino(object: _77.QueryGroupPolicyInfoResponseAmino): _77.QueryGroupPolicyInfoResponse;
                toAmino(message: _77.QueryGroupPolicyInfoResponse): _77.QueryGroupPolicyInfoResponseAmino;
                fromAminoMsg(object: _77.QueryGroupPolicyInfoResponseAminoMsg): _77.QueryGroupPolicyInfoResponse;
                toAminoMsg(message: _77.QueryGroupPolicyInfoResponse): _77.QueryGroupPolicyInfoResponseAminoMsg;
                fromProtoMsg(message: _77.QueryGroupPolicyInfoResponseProtoMsg): _77.QueryGroupPolicyInfoResponse;
                toProto(message: _77.QueryGroupPolicyInfoResponse): Uint8Array;
                toProtoMsg(message: _77.QueryGroupPolicyInfoResponse): _77.QueryGroupPolicyInfoResponseProtoMsg;
            };
            QueryGroupMembersRequest: {
                typeUrl: string;
                encode(message: _77.QueryGroupMembersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _77.QueryGroupMembersRequest;
                fromJSON(object: any): _77.QueryGroupMembersRequest;
                toJSON(message: _77.QueryGroupMembersRequest): unknown;
                fromPartial(object: Partial<_77.QueryGroupMembersRequest>): _77.QueryGroupMembersRequest;
                fromSDK(object: _77.QueryGroupMembersRequestSDKType): _77.QueryGroupMembersRequest;
                toSDK(message: _77.QueryGroupMembersRequest): _77.QueryGroupMembersRequestSDKType;
                fromAmino(object: _77.QueryGroupMembersRequestAmino): _77.QueryGroupMembersRequest;
                toAmino(message: _77.QueryGroupMembersRequest): _77.QueryGroupMembersRequestAmino;
                fromAminoMsg(object: _77.QueryGroupMembersRequestAminoMsg): _77.QueryGroupMembersRequest;
                toAminoMsg(message: _77.QueryGroupMembersRequest): _77.QueryGroupMembersRequestAminoMsg;
                fromProtoMsg(message: _77.QueryGroupMembersRequestProtoMsg): _77.QueryGroupMembersRequest;
                toProto(message: _77.QueryGroupMembersRequest): Uint8Array;
                toProtoMsg(message: _77.QueryGroupMembersRequest): _77.QueryGroupMembersRequestProtoMsg;
            };
            QueryGroupMembersResponse: {
                typeUrl: string;
                encode(message: _77.QueryGroupMembersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _77.QueryGroupMembersResponse;
                fromJSON(object: any): _77.QueryGroupMembersResponse;
                toJSON(message: _77.QueryGroupMembersResponse): unknown;
                fromPartial(object: Partial<_77.QueryGroupMembersResponse>): _77.QueryGroupMembersResponse;
                fromSDK(object: _77.QueryGroupMembersResponseSDKType): _77.QueryGroupMembersResponse;
                toSDK(message: _77.QueryGroupMembersResponse): _77.QueryGroupMembersResponseSDKType;
                fromAmino(object: _77.QueryGroupMembersResponseAmino): _77.QueryGroupMembersResponse;
                toAmino(message: _77.QueryGroupMembersResponse): _77.QueryGroupMembersResponseAmino;
                fromAminoMsg(object: _77.QueryGroupMembersResponseAminoMsg): _77.QueryGroupMembersResponse;
                toAminoMsg(message: _77.QueryGroupMembersResponse): _77.QueryGroupMembersResponseAminoMsg;
                fromProtoMsg(message: _77.QueryGroupMembersResponseProtoMsg): _77.QueryGroupMembersResponse;
                toProto(message: _77.QueryGroupMembersResponse): Uint8Array;
                toProtoMsg(message: _77.QueryGroupMembersResponse): _77.QueryGroupMembersResponseProtoMsg;
            };
            QueryGroupsByAdminRequest: {
                typeUrl: string;
                encode(message: _77.QueryGroupsByAdminRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _77.QueryGroupsByAdminRequest;
                fromJSON(object: any): _77.QueryGroupsByAdminRequest;
                toJSON(message: _77.QueryGroupsByAdminRequest): unknown;
                fromPartial(object: Partial<_77.QueryGroupsByAdminRequest>): _77.QueryGroupsByAdminRequest;
                fromSDK(object: _77.QueryGroupsByAdminRequestSDKType): _77.QueryGroupsByAdminRequest;
                toSDK(message: _77.QueryGroupsByAdminRequest): _77.QueryGroupsByAdminRequestSDKType;
                fromAmino(object: _77.QueryGroupsByAdminRequestAmino): _77.QueryGroupsByAdminRequest;
                toAmino(message: _77.QueryGroupsByAdminRequest): _77.QueryGroupsByAdminRequestAmino;
                fromAminoMsg(object: _77.QueryGroupsByAdminRequestAminoMsg): _77.QueryGroupsByAdminRequest;
                toAminoMsg(message: _77.QueryGroupsByAdminRequest): _77.QueryGroupsByAdminRequestAminoMsg;
                fromProtoMsg(message: _77.QueryGroupsByAdminRequestProtoMsg): _77.QueryGroupsByAdminRequest;
                toProto(message: _77.QueryGroupsByAdminRequest): Uint8Array;
                toProtoMsg(message: _77.QueryGroupsByAdminRequest): _77.QueryGroupsByAdminRequestProtoMsg;
            };
            QueryGroupsByAdminResponse: {
                typeUrl: string;
                encode(message: _77.QueryGroupsByAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _77.QueryGroupsByAdminResponse;
                fromJSON(object: any): _77.QueryGroupsByAdminResponse;
                toJSON(message: _77.QueryGroupsByAdminResponse): unknown;
                fromPartial(object: Partial<_77.QueryGroupsByAdminResponse>): _77.QueryGroupsByAdminResponse;
                fromSDK(object: _77.QueryGroupsByAdminResponseSDKType): _77.QueryGroupsByAdminResponse;
                toSDK(message: _77.QueryGroupsByAdminResponse): _77.QueryGroupsByAdminResponseSDKType;
                fromAmino(object: _77.QueryGroupsByAdminResponseAmino): _77.QueryGroupsByAdminResponse;
                toAmino(message: _77.QueryGroupsByAdminResponse): _77.QueryGroupsByAdminResponseAmino;
                fromAminoMsg(object: _77.QueryGroupsByAdminResponseAminoMsg): _77.QueryGroupsByAdminResponse;
                toAminoMsg(message: _77.QueryGroupsByAdminResponse): _77.QueryGroupsByAdminResponseAminoMsg;
                fromProtoMsg(message: _77.QueryGroupsByAdminResponseProtoMsg): _77.QueryGroupsByAdminResponse;
                toProto(message: _77.QueryGroupsByAdminResponse): Uint8Array;
                toProtoMsg(message: _77.QueryGroupsByAdminResponse): _77.QueryGroupsByAdminResponseProtoMsg;
            };
            QueryGroupPoliciesByGroupRequest: {
                typeUrl: string;
                encode(message: _77.QueryGroupPoliciesByGroupRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _77.QueryGroupPoliciesByGroupRequest;
                fromJSON(object: any): _77.QueryGroupPoliciesByGroupRequest;
                toJSON(message: _77.QueryGroupPoliciesByGroupRequest): unknown;
                fromPartial(object: Partial<_77.QueryGroupPoliciesByGroupRequest>): _77.QueryGroupPoliciesByGroupRequest;
                fromSDK(object: _77.QueryGroupPoliciesByGroupRequestSDKType): _77.QueryGroupPoliciesByGroupRequest;
                toSDK(message: _77.QueryGroupPoliciesByGroupRequest): _77.QueryGroupPoliciesByGroupRequestSDKType;
                fromAmino(object: _77.QueryGroupPoliciesByGroupRequestAmino): _77.QueryGroupPoliciesByGroupRequest;
                toAmino(message: _77.QueryGroupPoliciesByGroupRequest): _77.QueryGroupPoliciesByGroupRequestAmino;
                fromAminoMsg(object: _77.QueryGroupPoliciesByGroupRequestAminoMsg): _77.QueryGroupPoliciesByGroupRequest;
                toAminoMsg(message: _77.QueryGroupPoliciesByGroupRequest): _77.QueryGroupPoliciesByGroupRequestAminoMsg;
                fromProtoMsg(message: _77.QueryGroupPoliciesByGroupRequestProtoMsg): _77.QueryGroupPoliciesByGroupRequest;
                toProto(message: _77.QueryGroupPoliciesByGroupRequest): Uint8Array;
                toProtoMsg(message: _77.QueryGroupPoliciesByGroupRequest): _77.QueryGroupPoliciesByGroupRequestProtoMsg;
            };
            QueryGroupPoliciesByGroupResponse: {
                typeUrl: string;
                encode(message: _77.QueryGroupPoliciesByGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _77.QueryGroupPoliciesByGroupResponse;
                fromJSON(object: any): _77.QueryGroupPoliciesByGroupResponse;
                toJSON(message: _77.QueryGroupPoliciesByGroupResponse): unknown;
                fromPartial(object: Partial<_77.QueryGroupPoliciesByGroupResponse>): _77.QueryGroupPoliciesByGroupResponse;
                fromSDK(object: _77.QueryGroupPoliciesByGroupResponseSDKType): _77.QueryGroupPoliciesByGroupResponse;
                toSDK(message: _77.QueryGroupPoliciesByGroupResponse): _77.QueryGroupPoliciesByGroupResponseSDKType;
                fromAmino(object: _77.QueryGroupPoliciesByGroupResponseAmino): _77.QueryGroupPoliciesByGroupResponse;
                toAmino(message: _77.QueryGroupPoliciesByGroupResponse): _77.QueryGroupPoliciesByGroupResponseAmino;
                fromAminoMsg(object: _77.QueryGroupPoliciesByGroupResponseAminoMsg): _77.QueryGroupPoliciesByGroupResponse;
                toAminoMsg(message: _77.QueryGroupPoliciesByGroupResponse): _77.QueryGroupPoliciesByGroupResponseAminoMsg;
                fromProtoMsg(message: _77.QueryGroupPoliciesByGroupResponseProtoMsg): _77.QueryGroupPoliciesByGroupResponse;
                toProto(message: _77.QueryGroupPoliciesByGroupResponse): Uint8Array;
                toProtoMsg(message: _77.QueryGroupPoliciesByGroupResponse): _77.QueryGroupPoliciesByGroupResponseProtoMsg;
            };
            QueryGroupPoliciesByAdminRequest: {
                typeUrl: string;
                encode(message: _77.QueryGroupPoliciesByAdminRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _77.QueryGroupPoliciesByAdminRequest;
                fromJSON(object: any): _77.QueryGroupPoliciesByAdminRequest;
                toJSON(message: _77.QueryGroupPoliciesByAdminRequest): unknown;
                fromPartial(object: Partial<_77.QueryGroupPoliciesByAdminRequest>): _77.QueryGroupPoliciesByAdminRequest;
                fromSDK(object: _77.QueryGroupPoliciesByAdminRequestSDKType): _77.QueryGroupPoliciesByAdminRequest;
                toSDK(message: _77.QueryGroupPoliciesByAdminRequest): _77.QueryGroupPoliciesByAdminRequestSDKType;
                fromAmino(object: _77.QueryGroupPoliciesByAdminRequestAmino): _77.QueryGroupPoliciesByAdminRequest;
                toAmino(message: _77.QueryGroupPoliciesByAdminRequest): _77.QueryGroupPoliciesByAdminRequestAmino;
                fromAminoMsg(object: _77.QueryGroupPoliciesByAdminRequestAminoMsg): _77.QueryGroupPoliciesByAdminRequest;
                toAminoMsg(message: _77.QueryGroupPoliciesByAdminRequest): _77.QueryGroupPoliciesByAdminRequestAminoMsg;
                fromProtoMsg(message: _77.QueryGroupPoliciesByAdminRequestProtoMsg): _77.QueryGroupPoliciesByAdminRequest;
                toProto(message: _77.QueryGroupPoliciesByAdminRequest): Uint8Array;
                toProtoMsg(message: _77.QueryGroupPoliciesByAdminRequest): _77.QueryGroupPoliciesByAdminRequestProtoMsg;
            };
            QueryGroupPoliciesByAdminResponse: {
                typeUrl: string;
                encode(message: _77.QueryGroupPoliciesByAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _77.QueryGroupPoliciesByAdminResponse;
                fromJSON(object: any): _77.QueryGroupPoliciesByAdminResponse;
                toJSON(message: _77.QueryGroupPoliciesByAdminResponse): unknown;
                fromPartial(object: Partial<_77.QueryGroupPoliciesByAdminResponse>): _77.QueryGroupPoliciesByAdminResponse;
                fromSDK(object: _77.QueryGroupPoliciesByAdminResponseSDKType): _77.QueryGroupPoliciesByAdminResponse;
                toSDK(message: _77.QueryGroupPoliciesByAdminResponse): _77.QueryGroupPoliciesByAdminResponseSDKType;
                fromAmino(object: _77.QueryGroupPoliciesByAdminResponseAmino): _77.QueryGroupPoliciesByAdminResponse;
                toAmino(message: _77.QueryGroupPoliciesByAdminResponse): _77.QueryGroupPoliciesByAdminResponseAmino;
                fromAminoMsg(object: _77.QueryGroupPoliciesByAdminResponseAminoMsg): _77.QueryGroupPoliciesByAdminResponse;
                toAminoMsg(message: _77.QueryGroupPoliciesByAdminResponse): _77.QueryGroupPoliciesByAdminResponseAminoMsg;
                fromProtoMsg(message: _77.QueryGroupPoliciesByAdminResponseProtoMsg): _77.QueryGroupPoliciesByAdminResponse;
                toProto(message: _77.QueryGroupPoliciesByAdminResponse): Uint8Array;
                toProtoMsg(message: _77.QueryGroupPoliciesByAdminResponse): _77.QueryGroupPoliciesByAdminResponseProtoMsg;
            };
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _77.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _77.QueryProposalRequest;
                fromJSON(object: any): _77.QueryProposalRequest;
                toJSON(message: _77.QueryProposalRequest): unknown;
                fromPartial(object: Partial<_77.QueryProposalRequest>): _77.QueryProposalRequest;
                fromSDK(object: _77.QueryProposalRequestSDKType): _77.QueryProposalRequest;
                toSDK(message: _77.QueryProposalRequest): _77.QueryProposalRequestSDKType;
                fromAmino(object: _77.QueryProposalRequestAmino): _77.QueryProposalRequest;
                toAmino(message: _77.QueryProposalRequest): _77.QueryProposalRequestAmino;
                fromAminoMsg(object: _77.QueryProposalRequestAminoMsg): _77.QueryProposalRequest;
                toAminoMsg(message: _77.QueryProposalRequest): _77.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _77.QueryProposalRequestProtoMsg): _77.QueryProposalRequest;
                toProto(message: _77.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _77.QueryProposalRequest): _77.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _77.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _77.QueryProposalResponse;
                fromJSON(object: any): _77.QueryProposalResponse;
                toJSON(message: _77.QueryProposalResponse): unknown;
                fromPartial(object: Partial<_77.QueryProposalResponse>): _77.QueryProposalResponse;
                fromSDK(object: _77.QueryProposalResponseSDKType): _77.QueryProposalResponse;
                toSDK(message: _77.QueryProposalResponse): _77.QueryProposalResponseSDKType;
                fromAmino(object: _77.QueryProposalResponseAmino): _77.QueryProposalResponse;
                toAmino(message: _77.QueryProposalResponse): _77.QueryProposalResponseAmino;
                fromAminoMsg(object: _77.QueryProposalResponseAminoMsg): _77.QueryProposalResponse;
                toAminoMsg(message: _77.QueryProposalResponse): _77.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _77.QueryProposalResponseProtoMsg): _77.QueryProposalResponse;
                toProto(message: _77.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _77.QueryProposalResponse): _77.QueryProposalResponseProtoMsg;
            };
            QueryProposalsByGroupPolicyRequest: {
                typeUrl: string;
                encode(message: _77.QueryProposalsByGroupPolicyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _77.QueryProposalsByGroupPolicyRequest;
                fromJSON(object: any): _77.QueryProposalsByGroupPolicyRequest;
                toJSON(message: _77.QueryProposalsByGroupPolicyRequest): unknown;
                fromPartial(object: Partial<_77.QueryProposalsByGroupPolicyRequest>): _77.QueryProposalsByGroupPolicyRequest;
                fromSDK(object: _77.QueryProposalsByGroupPolicyRequestSDKType): _77.QueryProposalsByGroupPolicyRequest;
                toSDK(message: _77.QueryProposalsByGroupPolicyRequest): _77.QueryProposalsByGroupPolicyRequestSDKType;
                fromAmino(object: _77.QueryProposalsByGroupPolicyRequestAmino): _77.QueryProposalsByGroupPolicyRequest;
                toAmino(message: _77.QueryProposalsByGroupPolicyRequest): _77.QueryProposalsByGroupPolicyRequestAmino;
                fromAminoMsg(object: _77.QueryProposalsByGroupPolicyRequestAminoMsg): _77.QueryProposalsByGroupPolicyRequest;
                toAminoMsg(message: _77.QueryProposalsByGroupPolicyRequest): _77.QueryProposalsByGroupPolicyRequestAminoMsg;
                fromProtoMsg(message: _77.QueryProposalsByGroupPolicyRequestProtoMsg): _77.QueryProposalsByGroupPolicyRequest;
                toProto(message: _77.QueryProposalsByGroupPolicyRequest): Uint8Array;
                toProtoMsg(message: _77.QueryProposalsByGroupPolicyRequest): _77.QueryProposalsByGroupPolicyRequestProtoMsg;
            };
            QueryProposalsByGroupPolicyResponse: {
                typeUrl: string;
                encode(message: _77.QueryProposalsByGroupPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _77.QueryProposalsByGroupPolicyResponse;
                fromJSON(object: any): _77.QueryProposalsByGroupPolicyResponse;
                toJSON(message: _77.QueryProposalsByGroupPolicyResponse): unknown;
                fromPartial(object: Partial<_77.QueryProposalsByGroupPolicyResponse>): _77.QueryProposalsByGroupPolicyResponse;
                fromSDK(object: _77.QueryProposalsByGroupPolicyResponseSDKType): _77.QueryProposalsByGroupPolicyResponse;
                toSDK(message: _77.QueryProposalsByGroupPolicyResponse): _77.QueryProposalsByGroupPolicyResponseSDKType;
                fromAmino(object: _77.QueryProposalsByGroupPolicyResponseAmino): _77.QueryProposalsByGroupPolicyResponse;
                toAmino(message: _77.QueryProposalsByGroupPolicyResponse): _77.QueryProposalsByGroupPolicyResponseAmino;
                fromAminoMsg(object: _77.QueryProposalsByGroupPolicyResponseAminoMsg): _77.QueryProposalsByGroupPolicyResponse;
                toAminoMsg(message: _77.QueryProposalsByGroupPolicyResponse): _77.QueryProposalsByGroupPolicyResponseAminoMsg;
                fromProtoMsg(message: _77.QueryProposalsByGroupPolicyResponseProtoMsg): _77.QueryProposalsByGroupPolicyResponse;
                toProto(message: _77.QueryProposalsByGroupPolicyResponse): Uint8Array;
                toProtoMsg(message: _77.QueryProposalsByGroupPolicyResponse): _77.QueryProposalsByGroupPolicyResponseProtoMsg;
            };
            QueryVoteByProposalVoterRequest: {
                typeUrl: string;
                encode(message: _77.QueryVoteByProposalVoterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _77.QueryVoteByProposalVoterRequest;
                fromJSON(object: any): _77.QueryVoteByProposalVoterRequest;
                toJSON(message: _77.QueryVoteByProposalVoterRequest): unknown;
                fromPartial(object: Partial<_77.QueryVoteByProposalVoterRequest>): _77.QueryVoteByProposalVoterRequest;
                fromSDK(object: _77.QueryVoteByProposalVoterRequestSDKType): _77.QueryVoteByProposalVoterRequest;
                toSDK(message: _77.QueryVoteByProposalVoterRequest): _77.QueryVoteByProposalVoterRequestSDKType;
                fromAmino(object: _77.QueryVoteByProposalVoterRequestAmino): _77.QueryVoteByProposalVoterRequest;
                toAmino(message: _77.QueryVoteByProposalVoterRequest): _77.QueryVoteByProposalVoterRequestAmino;
                fromAminoMsg(object: _77.QueryVoteByProposalVoterRequestAminoMsg): _77.QueryVoteByProposalVoterRequest;
                toAminoMsg(message: _77.QueryVoteByProposalVoterRequest): _77.QueryVoteByProposalVoterRequestAminoMsg;
                fromProtoMsg(message: _77.QueryVoteByProposalVoterRequestProtoMsg): _77.QueryVoteByProposalVoterRequest;
                toProto(message: _77.QueryVoteByProposalVoterRequest): Uint8Array;
                toProtoMsg(message: _77.QueryVoteByProposalVoterRequest): _77.QueryVoteByProposalVoterRequestProtoMsg;
            };
            QueryVoteByProposalVoterResponse: {
                typeUrl: string;
                encode(message: _77.QueryVoteByProposalVoterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _77.QueryVoteByProposalVoterResponse;
                fromJSON(object: any): _77.QueryVoteByProposalVoterResponse;
                toJSON(message: _77.QueryVoteByProposalVoterResponse): unknown;
                fromPartial(object: Partial<_77.QueryVoteByProposalVoterResponse>): _77.QueryVoteByProposalVoterResponse;
                fromSDK(object: _77.QueryVoteByProposalVoterResponseSDKType): _77.QueryVoteByProposalVoterResponse;
                toSDK(message: _77.QueryVoteByProposalVoterResponse): _77.QueryVoteByProposalVoterResponseSDKType;
                fromAmino(object: _77.QueryVoteByProposalVoterResponseAmino): _77.QueryVoteByProposalVoterResponse;
                toAmino(message: _77.QueryVoteByProposalVoterResponse): _77.QueryVoteByProposalVoterResponseAmino;
                fromAminoMsg(object: _77.QueryVoteByProposalVoterResponseAminoMsg): _77.QueryVoteByProposalVoterResponse;
                toAminoMsg(message: _77.QueryVoteByProposalVoterResponse): _77.QueryVoteByProposalVoterResponseAminoMsg;
                fromProtoMsg(message: _77.QueryVoteByProposalVoterResponseProtoMsg): _77.QueryVoteByProposalVoterResponse;
                toProto(message: _77.QueryVoteByProposalVoterResponse): Uint8Array;
                toProtoMsg(message: _77.QueryVoteByProposalVoterResponse): _77.QueryVoteByProposalVoterResponseProtoMsg;
            };
            QueryVotesByProposalRequest: {
                typeUrl: string;
                encode(message: _77.QueryVotesByProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _77.QueryVotesByProposalRequest;
                fromJSON(object: any): _77.QueryVotesByProposalRequest;
                toJSON(message: _77.QueryVotesByProposalRequest): unknown;
                fromPartial(object: Partial<_77.QueryVotesByProposalRequest>): _77.QueryVotesByProposalRequest;
                fromSDK(object: _77.QueryVotesByProposalRequestSDKType): _77.QueryVotesByProposalRequest;
                toSDK(message: _77.QueryVotesByProposalRequest): _77.QueryVotesByProposalRequestSDKType;
                fromAmino(object: _77.QueryVotesByProposalRequestAmino): _77.QueryVotesByProposalRequest;
                toAmino(message: _77.QueryVotesByProposalRequest): _77.QueryVotesByProposalRequestAmino;
                fromAminoMsg(object: _77.QueryVotesByProposalRequestAminoMsg): _77.QueryVotesByProposalRequest;
                toAminoMsg(message: _77.QueryVotesByProposalRequest): _77.QueryVotesByProposalRequestAminoMsg;
                fromProtoMsg(message: _77.QueryVotesByProposalRequestProtoMsg): _77.QueryVotesByProposalRequest;
                toProto(message: _77.QueryVotesByProposalRequest): Uint8Array;
                toProtoMsg(message: _77.QueryVotesByProposalRequest): _77.QueryVotesByProposalRequestProtoMsg;
            };
            QueryVotesByProposalResponse: {
                typeUrl: string;
                encode(message: _77.QueryVotesByProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _77.QueryVotesByProposalResponse;
                fromJSON(object: any): _77.QueryVotesByProposalResponse;
                toJSON(message: _77.QueryVotesByProposalResponse): unknown;
                fromPartial(object: Partial<_77.QueryVotesByProposalResponse>): _77.QueryVotesByProposalResponse;
                fromSDK(object: _77.QueryVotesByProposalResponseSDKType): _77.QueryVotesByProposalResponse;
                toSDK(message: _77.QueryVotesByProposalResponse): _77.QueryVotesByProposalResponseSDKType;
                fromAmino(object: _77.QueryVotesByProposalResponseAmino): _77.QueryVotesByProposalResponse;
                toAmino(message: _77.QueryVotesByProposalResponse): _77.QueryVotesByProposalResponseAmino;
                fromAminoMsg(object: _77.QueryVotesByProposalResponseAminoMsg): _77.QueryVotesByProposalResponse;
                toAminoMsg(message: _77.QueryVotesByProposalResponse): _77.QueryVotesByProposalResponseAminoMsg;
                fromProtoMsg(message: _77.QueryVotesByProposalResponseProtoMsg): _77.QueryVotesByProposalResponse;
                toProto(message: _77.QueryVotesByProposalResponse): Uint8Array;
                toProtoMsg(message: _77.QueryVotesByProposalResponse): _77.QueryVotesByProposalResponseProtoMsg;
            };
            QueryVotesByVoterRequest: {
                typeUrl: string;
                encode(message: _77.QueryVotesByVoterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _77.QueryVotesByVoterRequest;
                fromJSON(object: any): _77.QueryVotesByVoterRequest;
                toJSON(message: _77.QueryVotesByVoterRequest): unknown;
                fromPartial(object: Partial<_77.QueryVotesByVoterRequest>): _77.QueryVotesByVoterRequest;
                fromSDK(object: _77.QueryVotesByVoterRequestSDKType): _77.QueryVotesByVoterRequest;
                toSDK(message: _77.QueryVotesByVoterRequest): _77.QueryVotesByVoterRequestSDKType;
                fromAmino(object: _77.QueryVotesByVoterRequestAmino): _77.QueryVotesByVoterRequest;
                toAmino(message: _77.QueryVotesByVoterRequest): _77.QueryVotesByVoterRequestAmino;
                fromAminoMsg(object: _77.QueryVotesByVoterRequestAminoMsg): _77.QueryVotesByVoterRequest;
                toAminoMsg(message: _77.QueryVotesByVoterRequest): _77.QueryVotesByVoterRequestAminoMsg;
                fromProtoMsg(message: _77.QueryVotesByVoterRequestProtoMsg): _77.QueryVotesByVoterRequest;
                toProto(message: _77.QueryVotesByVoterRequest): Uint8Array;
                toProtoMsg(message: _77.QueryVotesByVoterRequest): _77.QueryVotesByVoterRequestProtoMsg;
            };
            QueryVotesByVoterResponse: {
                typeUrl: string;
                encode(message: _77.QueryVotesByVoterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _77.QueryVotesByVoterResponse;
                fromJSON(object: any): _77.QueryVotesByVoterResponse;
                toJSON(message: _77.QueryVotesByVoterResponse): unknown;
                fromPartial(object: Partial<_77.QueryVotesByVoterResponse>): _77.QueryVotesByVoterResponse;
                fromSDK(object: _77.QueryVotesByVoterResponseSDKType): _77.QueryVotesByVoterResponse;
                toSDK(message: _77.QueryVotesByVoterResponse): _77.QueryVotesByVoterResponseSDKType;
                fromAmino(object: _77.QueryVotesByVoterResponseAmino): _77.QueryVotesByVoterResponse;
                toAmino(message: _77.QueryVotesByVoterResponse): _77.QueryVotesByVoterResponseAmino;
                fromAminoMsg(object: _77.QueryVotesByVoterResponseAminoMsg): _77.QueryVotesByVoterResponse;
                toAminoMsg(message: _77.QueryVotesByVoterResponse): _77.QueryVotesByVoterResponseAminoMsg;
                fromProtoMsg(message: _77.QueryVotesByVoterResponseProtoMsg): _77.QueryVotesByVoterResponse;
                toProto(message: _77.QueryVotesByVoterResponse): Uint8Array;
                toProtoMsg(message: _77.QueryVotesByVoterResponse): _77.QueryVotesByVoterResponseProtoMsg;
            };
            QueryGroupsByMemberRequest: {
                typeUrl: string;
                encode(message: _77.QueryGroupsByMemberRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _77.QueryGroupsByMemberRequest;
                fromJSON(object: any): _77.QueryGroupsByMemberRequest;
                toJSON(message: _77.QueryGroupsByMemberRequest): unknown;
                fromPartial(object: Partial<_77.QueryGroupsByMemberRequest>): _77.QueryGroupsByMemberRequest;
                fromSDK(object: _77.QueryGroupsByMemberRequestSDKType): _77.QueryGroupsByMemberRequest;
                toSDK(message: _77.QueryGroupsByMemberRequest): _77.QueryGroupsByMemberRequestSDKType;
                fromAmino(object: _77.QueryGroupsByMemberRequestAmino): _77.QueryGroupsByMemberRequest;
                toAmino(message: _77.QueryGroupsByMemberRequest): _77.QueryGroupsByMemberRequestAmino;
                fromAminoMsg(object: _77.QueryGroupsByMemberRequestAminoMsg): _77.QueryGroupsByMemberRequest;
                toAminoMsg(message: _77.QueryGroupsByMemberRequest): _77.QueryGroupsByMemberRequestAminoMsg;
                fromProtoMsg(message: _77.QueryGroupsByMemberRequestProtoMsg): _77.QueryGroupsByMemberRequest;
                toProto(message: _77.QueryGroupsByMemberRequest): Uint8Array;
                toProtoMsg(message: _77.QueryGroupsByMemberRequest): _77.QueryGroupsByMemberRequestProtoMsg;
            };
            QueryGroupsByMemberResponse: {
                typeUrl: string;
                encode(message: _77.QueryGroupsByMemberResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _77.QueryGroupsByMemberResponse;
                fromJSON(object: any): _77.QueryGroupsByMemberResponse;
                toJSON(message: _77.QueryGroupsByMemberResponse): unknown;
                fromPartial(object: Partial<_77.QueryGroupsByMemberResponse>): _77.QueryGroupsByMemberResponse;
                fromSDK(object: _77.QueryGroupsByMemberResponseSDKType): _77.QueryGroupsByMemberResponse;
                toSDK(message: _77.QueryGroupsByMemberResponse): _77.QueryGroupsByMemberResponseSDKType;
                fromAmino(object: _77.QueryGroupsByMemberResponseAmino): _77.QueryGroupsByMemberResponse;
                toAmino(message: _77.QueryGroupsByMemberResponse): _77.QueryGroupsByMemberResponseAmino;
                fromAminoMsg(object: _77.QueryGroupsByMemberResponseAminoMsg): _77.QueryGroupsByMemberResponse;
                toAminoMsg(message: _77.QueryGroupsByMemberResponse): _77.QueryGroupsByMemberResponseAminoMsg;
                fromProtoMsg(message: _77.QueryGroupsByMemberResponseProtoMsg): _77.QueryGroupsByMemberResponse;
                toProto(message: _77.QueryGroupsByMemberResponse): Uint8Array;
                toProtoMsg(message: _77.QueryGroupsByMemberResponse): _77.QueryGroupsByMemberResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _77.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _77.QueryTallyResultRequest;
                fromJSON(object: any): _77.QueryTallyResultRequest;
                toJSON(message: _77.QueryTallyResultRequest): unknown;
                fromPartial(object: Partial<_77.QueryTallyResultRequest>): _77.QueryTallyResultRequest;
                fromSDK(object: _77.QueryTallyResultRequestSDKType): _77.QueryTallyResultRequest;
                toSDK(message: _77.QueryTallyResultRequest): _77.QueryTallyResultRequestSDKType;
                fromAmino(object: _77.QueryTallyResultRequestAmino): _77.QueryTallyResultRequest;
                toAmino(message: _77.QueryTallyResultRequest): _77.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _77.QueryTallyResultRequestAminoMsg): _77.QueryTallyResultRequest;
                toAminoMsg(message: _77.QueryTallyResultRequest): _77.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _77.QueryTallyResultRequestProtoMsg): _77.QueryTallyResultRequest;
                toProto(message: _77.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _77.QueryTallyResultRequest): _77.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _77.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _77.QueryTallyResultResponse;
                fromJSON(object: any): _77.QueryTallyResultResponse;
                toJSON(message: _77.QueryTallyResultResponse): unknown;
                fromPartial(object: Partial<_77.QueryTallyResultResponse>): _77.QueryTallyResultResponse;
                fromSDK(object: _77.QueryTallyResultResponseSDKType): _77.QueryTallyResultResponse;
                toSDK(message: _77.QueryTallyResultResponse): _77.QueryTallyResultResponseSDKType;
                fromAmino(object: _77.QueryTallyResultResponseAmino): _77.QueryTallyResultResponse;
                toAmino(message: _77.QueryTallyResultResponse): _77.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _77.QueryTallyResultResponseAminoMsg): _77.QueryTallyResultResponse;
                toAminoMsg(message: _77.QueryTallyResultResponse): _77.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _77.QueryTallyResultResponseProtoMsg): _77.QueryTallyResultResponse;
                toProto(message: _77.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _77.QueryTallyResultResponse): _77.QueryTallyResultResponseProtoMsg;
            };
            QueryGroupsRequest: {
                typeUrl: string;
                encode(message: _77.QueryGroupsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _77.QueryGroupsRequest;
                fromJSON(object: any): _77.QueryGroupsRequest;
                toJSON(message: _77.QueryGroupsRequest): unknown;
                fromPartial(object: Partial<_77.QueryGroupsRequest>): _77.QueryGroupsRequest;
                fromSDK(object: _77.QueryGroupsRequestSDKType): _77.QueryGroupsRequest;
                toSDK(message: _77.QueryGroupsRequest): _77.QueryGroupsRequestSDKType;
                fromAmino(object: _77.QueryGroupsRequestAmino): _77.QueryGroupsRequest;
                toAmino(message: _77.QueryGroupsRequest): _77.QueryGroupsRequestAmino;
                fromAminoMsg(object: _77.QueryGroupsRequestAminoMsg): _77.QueryGroupsRequest;
                toAminoMsg(message: _77.QueryGroupsRequest): _77.QueryGroupsRequestAminoMsg;
                fromProtoMsg(message: _77.QueryGroupsRequestProtoMsg): _77.QueryGroupsRequest;
                toProto(message: _77.QueryGroupsRequest): Uint8Array;
                toProtoMsg(message: _77.QueryGroupsRequest): _77.QueryGroupsRequestProtoMsg;
            };
            QueryGroupsResponse: {
                typeUrl: string;
                encode(message: _77.QueryGroupsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _77.QueryGroupsResponse;
                fromJSON(object: any): _77.QueryGroupsResponse;
                toJSON(message: _77.QueryGroupsResponse): unknown;
                fromPartial(object: Partial<_77.QueryGroupsResponse>): _77.QueryGroupsResponse;
                fromSDK(object: _77.QueryGroupsResponseSDKType): _77.QueryGroupsResponse;
                toSDK(message: _77.QueryGroupsResponse): _77.QueryGroupsResponseSDKType;
                fromAmino(object: _77.QueryGroupsResponseAmino): _77.QueryGroupsResponse;
                toAmino(message: _77.QueryGroupsResponse): _77.QueryGroupsResponseAmino;
                fromAminoMsg(object: _77.QueryGroupsResponseAminoMsg): _77.QueryGroupsResponse;
                toAminoMsg(message: _77.QueryGroupsResponse): _77.QueryGroupsResponseAminoMsg;
                fromProtoMsg(message: _77.QueryGroupsResponseProtoMsg): _77.QueryGroupsResponse;
                toProto(message: _77.QueryGroupsResponse): Uint8Array;
                toProtoMsg(message: _77.QueryGroupsResponse): _77.QueryGroupsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _76.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _76.GenesisState;
                fromJSON(object: any): _76.GenesisState;
                toJSON(message: _76.GenesisState): unknown;
                fromPartial(object: Partial<_76.GenesisState>): _76.GenesisState;
                fromSDK(object: _76.GenesisStateSDKType): _76.GenesisState;
                toSDK(message: _76.GenesisState): _76.GenesisStateSDKType;
                fromAmino(object: _76.GenesisStateAmino): _76.GenesisState;
                toAmino(message: _76.GenesisState): _76.GenesisStateAmino;
                fromAminoMsg(object: _76.GenesisStateAminoMsg): _76.GenesisState;
                toAminoMsg(message: _76.GenesisState): _76.GenesisStateAminoMsg;
                fromProtoMsg(message: _76.GenesisStateProtoMsg): _76.GenesisState;
                toProto(message: _76.GenesisState): Uint8Array;
                toProtoMsg(message: _76.GenesisState): _76.GenesisStateProtoMsg;
            };
            EventCreateGroup: {
                typeUrl: string;
                encode(message: _75.EventCreateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _75.EventCreateGroup;
                fromJSON(object: any): _75.EventCreateGroup;
                toJSON(message: _75.EventCreateGroup): unknown;
                fromPartial(object: Partial<_75.EventCreateGroup>): _75.EventCreateGroup;
                fromSDK(object: _75.EventCreateGroupSDKType): _75.EventCreateGroup;
                toSDK(message: _75.EventCreateGroup): _75.EventCreateGroupSDKType;
                fromAmino(object: _75.EventCreateGroupAmino): _75.EventCreateGroup;
                toAmino(message: _75.EventCreateGroup): _75.EventCreateGroupAmino;
                fromAminoMsg(object: _75.EventCreateGroupAminoMsg): _75.EventCreateGroup;
                toAminoMsg(message: _75.EventCreateGroup): _75.EventCreateGroupAminoMsg;
                fromProtoMsg(message: _75.EventCreateGroupProtoMsg): _75.EventCreateGroup;
                toProto(message: _75.EventCreateGroup): Uint8Array;
                toProtoMsg(message: _75.EventCreateGroup): _75.EventCreateGroupProtoMsg;
            };
            EventUpdateGroup: {
                typeUrl: string;
                encode(message: _75.EventUpdateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _75.EventUpdateGroup;
                fromJSON(object: any): _75.EventUpdateGroup;
                toJSON(message: _75.EventUpdateGroup): unknown;
                fromPartial(object: Partial<_75.EventUpdateGroup>): _75.EventUpdateGroup;
                fromSDK(object: _75.EventUpdateGroupSDKType): _75.EventUpdateGroup;
                toSDK(message: _75.EventUpdateGroup): _75.EventUpdateGroupSDKType;
                fromAmino(object: _75.EventUpdateGroupAmino): _75.EventUpdateGroup;
                toAmino(message: _75.EventUpdateGroup): _75.EventUpdateGroupAmino;
                fromAminoMsg(object: _75.EventUpdateGroupAminoMsg): _75.EventUpdateGroup;
                toAminoMsg(message: _75.EventUpdateGroup): _75.EventUpdateGroupAminoMsg;
                fromProtoMsg(message: _75.EventUpdateGroupProtoMsg): _75.EventUpdateGroup;
                toProto(message: _75.EventUpdateGroup): Uint8Array;
                toProtoMsg(message: _75.EventUpdateGroup): _75.EventUpdateGroupProtoMsg;
            };
            EventCreateGroupPolicy: {
                typeUrl: string;
                encode(message: _75.EventCreateGroupPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _75.EventCreateGroupPolicy;
                fromJSON(object: any): _75.EventCreateGroupPolicy;
                toJSON(message: _75.EventCreateGroupPolicy): unknown;
                fromPartial(object: Partial<_75.EventCreateGroupPolicy>): _75.EventCreateGroupPolicy;
                fromSDK(object: _75.EventCreateGroupPolicySDKType): _75.EventCreateGroupPolicy;
                toSDK(message: _75.EventCreateGroupPolicy): _75.EventCreateGroupPolicySDKType;
                fromAmino(object: _75.EventCreateGroupPolicyAmino): _75.EventCreateGroupPolicy;
                toAmino(message: _75.EventCreateGroupPolicy): _75.EventCreateGroupPolicyAmino;
                fromAminoMsg(object: _75.EventCreateGroupPolicyAminoMsg): _75.EventCreateGroupPolicy;
                toAminoMsg(message: _75.EventCreateGroupPolicy): _75.EventCreateGroupPolicyAminoMsg;
                fromProtoMsg(message: _75.EventCreateGroupPolicyProtoMsg): _75.EventCreateGroupPolicy;
                toProto(message: _75.EventCreateGroupPolicy): Uint8Array;
                toProtoMsg(message: _75.EventCreateGroupPolicy): _75.EventCreateGroupPolicyProtoMsg;
            };
            EventUpdateGroupPolicy: {
                typeUrl: string;
                encode(message: _75.EventUpdateGroupPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _75.EventUpdateGroupPolicy;
                fromJSON(object: any): _75.EventUpdateGroupPolicy;
                toJSON(message: _75.EventUpdateGroupPolicy): unknown;
                fromPartial(object: Partial<_75.EventUpdateGroupPolicy>): _75.EventUpdateGroupPolicy;
                fromSDK(object: _75.EventUpdateGroupPolicySDKType): _75.EventUpdateGroupPolicy;
                toSDK(message: _75.EventUpdateGroupPolicy): _75.EventUpdateGroupPolicySDKType;
                fromAmino(object: _75.EventUpdateGroupPolicyAmino): _75.EventUpdateGroupPolicy;
                toAmino(message: _75.EventUpdateGroupPolicy): _75.EventUpdateGroupPolicyAmino;
                fromAminoMsg(object: _75.EventUpdateGroupPolicyAminoMsg): _75.EventUpdateGroupPolicy;
                toAminoMsg(message: _75.EventUpdateGroupPolicy): _75.EventUpdateGroupPolicyAminoMsg;
                fromProtoMsg(message: _75.EventUpdateGroupPolicyProtoMsg): _75.EventUpdateGroupPolicy;
                toProto(message: _75.EventUpdateGroupPolicy): Uint8Array;
                toProtoMsg(message: _75.EventUpdateGroupPolicy): _75.EventUpdateGroupPolicyProtoMsg;
            };
            EventSubmitProposal: {
                typeUrl: string;
                encode(message: _75.EventSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _75.EventSubmitProposal;
                fromJSON(object: any): _75.EventSubmitProposal;
                toJSON(message: _75.EventSubmitProposal): unknown;
                fromPartial(object: Partial<_75.EventSubmitProposal>): _75.EventSubmitProposal;
                fromSDK(object: _75.EventSubmitProposalSDKType): _75.EventSubmitProposal;
                toSDK(message: _75.EventSubmitProposal): _75.EventSubmitProposalSDKType;
                fromAmino(object: _75.EventSubmitProposalAmino): _75.EventSubmitProposal;
                toAmino(message: _75.EventSubmitProposal): _75.EventSubmitProposalAmino;
                fromAminoMsg(object: _75.EventSubmitProposalAminoMsg): _75.EventSubmitProposal;
                toAminoMsg(message: _75.EventSubmitProposal): _75.EventSubmitProposalAminoMsg;
                fromProtoMsg(message: _75.EventSubmitProposalProtoMsg): _75.EventSubmitProposal;
                toProto(message: _75.EventSubmitProposal): Uint8Array;
                toProtoMsg(message: _75.EventSubmitProposal): _75.EventSubmitProposalProtoMsg;
            };
            EventWithdrawProposal: {
                typeUrl: string;
                encode(message: _75.EventWithdrawProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _75.EventWithdrawProposal;
                fromJSON(object: any): _75.EventWithdrawProposal;
                toJSON(message: _75.EventWithdrawProposal): unknown;
                fromPartial(object: Partial<_75.EventWithdrawProposal>): _75.EventWithdrawProposal;
                fromSDK(object: _75.EventWithdrawProposalSDKType): _75.EventWithdrawProposal;
                toSDK(message: _75.EventWithdrawProposal): _75.EventWithdrawProposalSDKType;
                fromAmino(object: _75.EventWithdrawProposalAmino): _75.EventWithdrawProposal;
                toAmino(message: _75.EventWithdrawProposal): _75.EventWithdrawProposalAmino;
                fromAminoMsg(object: _75.EventWithdrawProposalAminoMsg): _75.EventWithdrawProposal;
                toAminoMsg(message: _75.EventWithdrawProposal): _75.EventWithdrawProposalAminoMsg;
                fromProtoMsg(message: _75.EventWithdrawProposalProtoMsg): _75.EventWithdrawProposal;
                toProto(message: _75.EventWithdrawProposal): Uint8Array;
                toProtoMsg(message: _75.EventWithdrawProposal): _75.EventWithdrawProposalProtoMsg;
            };
            EventVote: {
                typeUrl: string;
                encode(message: _75.EventVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _75.EventVote;
                fromJSON(object: any): _75.EventVote;
                toJSON(message: _75.EventVote): unknown;
                fromPartial(object: Partial<_75.EventVote>): _75.EventVote;
                fromSDK(object: _75.EventVoteSDKType): _75.EventVote;
                toSDK(message: _75.EventVote): _75.EventVoteSDKType;
                fromAmino(object: _75.EventVoteAmino): _75.EventVote;
                toAmino(message: _75.EventVote): _75.EventVoteAmino;
                fromAminoMsg(object: _75.EventVoteAminoMsg): _75.EventVote;
                toAminoMsg(message: _75.EventVote): _75.EventVoteAminoMsg;
                fromProtoMsg(message: _75.EventVoteProtoMsg): _75.EventVote;
                toProto(message: _75.EventVote): Uint8Array;
                toProtoMsg(message: _75.EventVote): _75.EventVoteProtoMsg;
            };
            EventExec: {
                typeUrl: string;
                encode(message: _75.EventExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _75.EventExec;
                fromJSON(object: any): _75.EventExec;
                toJSON(message: _75.EventExec): unknown;
                fromPartial(object: Partial<_75.EventExec>): _75.EventExec;
                fromSDK(object: _75.EventExecSDKType): _75.EventExec;
                toSDK(message: _75.EventExec): _75.EventExecSDKType;
                fromAmino(object: _75.EventExecAmino): _75.EventExec;
                toAmino(message: _75.EventExec): _75.EventExecAmino;
                fromAminoMsg(object: _75.EventExecAminoMsg): _75.EventExec;
                toAminoMsg(message: _75.EventExec): _75.EventExecAminoMsg;
                fromProtoMsg(message: _75.EventExecProtoMsg): _75.EventExec;
                toProto(message: _75.EventExec): Uint8Array;
                toProtoMsg(message: _75.EventExec): _75.EventExecProtoMsg;
            };
            EventLeaveGroup: {
                typeUrl: string;
                encode(message: _75.EventLeaveGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _75.EventLeaveGroup;
                fromJSON(object: any): _75.EventLeaveGroup;
                toJSON(message: _75.EventLeaveGroup): unknown;
                fromPartial(object: Partial<_75.EventLeaveGroup>): _75.EventLeaveGroup;
                fromSDK(object: _75.EventLeaveGroupSDKType): _75.EventLeaveGroup;
                toSDK(message: _75.EventLeaveGroup): _75.EventLeaveGroupSDKType;
                fromAmino(object: _75.EventLeaveGroupAmino): _75.EventLeaveGroup;
                toAmino(message: _75.EventLeaveGroup): _75.EventLeaveGroupAmino;
                fromAminoMsg(object: _75.EventLeaveGroupAminoMsg): _75.EventLeaveGroup;
                toAminoMsg(message: _75.EventLeaveGroup): _75.EventLeaveGroupAminoMsg;
                fromProtoMsg(message: _75.EventLeaveGroupProtoMsg): _75.EventLeaveGroup;
                toProto(message: _75.EventLeaveGroup): Uint8Array;
                toProtoMsg(message: _75.EventLeaveGroup): _75.EventLeaveGroupProtoMsg;
            };
            EventProposalPruned: {
                typeUrl: string;
                encode(message: _75.EventProposalPruned, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _75.EventProposalPruned;
                fromJSON(object: any): _75.EventProposalPruned;
                toJSON(message: _75.EventProposalPruned): unknown;
                fromPartial(object: Partial<_75.EventProposalPruned>): _75.EventProposalPruned;
                fromSDK(object: _75.EventProposalPrunedSDKType): _75.EventProposalPruned;
                toSDK(message: _75.EventProposalPruned): _75.EventProposalPrunedSDKType;
                fromAmino(object: _75.EventProposalPrunedAmino): _75.EventProposalPruned;
                toAmino(message: _75.EventProposalPruned): _75.EventProposalPrunedAmino;
                fromAminoMsg(object: _75.EventProposalPrunedAminoMsg): _75.EventProposalPruned;
                toAminoMsg(message: _75.EventProposalPruned): _75.EventProposalPrunedAminoMsg;
                fromProtoMsg(message: _75.EventProposalPrunedProtoMsg): _75.EventProposalPruned;
                toProto(message: _75.EventProposalPruned): Uint8Array;
                toProtoMsg(message: _75.EventProposalPruned): _75.EventProposalPrunedProtoMsg;
            };
        };
    }
    namespace mint {
        namespace module {
            const v1: {
                protobufPackage: "cosmos.mint.module.v1";
                Module: {
                    typeUrl: string;
                    encode(message: _80.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _80.Module;
                    fromJSON(object: any): _80.Module;
                    toJSON(message: _80.Module): unknown;
                    fromPartial(object: Partial<_80.Module>): _80.Module;
                    fromSDK(object: _80.ModuleSDKType): _80.Module;
                    toSDK(message: _80.Module): _80.ModuleSDKType;
                    fromAmino(object: _80.ModuleAmino): _80.Module;
                    toAmino(message: _80.Module): _80.ModuleAmino;
                    fromAminoMsg(object: _80.ModuleAminoMsg): _80.Module;
                    toAminoMsg(message: _80.Module): _80.ModuleAminoMsg;
                    fromProtoMsg(message: _80.ModuleProtoMsg): _80.Module;
                    toProto(message: _80.Module): Uint8Array;
                    toProtoMsg(message: _80.Module): _80.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            Msg: typeof _220.Msg;
            Query: typeof _204.Query;
            QueryClientImpl: typeof _204.QueryClientImpl;
            LCDQueryClient: typeof _187.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    updateParams(value: _84.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    updateParams(value: _84.MsgUpdateParams): {
                        typeUrl: string;
                        value: _84.MsgUpdateParams;
                    };
                };
                toJSON: {
                    updateParams(value: _84.MsgUpdateParams): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _84.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    updateParams(value: _84.MsgUpdateParams): {
                        typeUrl: string;
                        value: _84.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.mint.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _84.MsgUpdateParams) => _84.MsgUpdateParamsAmino;
                    fromAmino: (object: _84.MsgUpdateParamsAmino) => _84.MsgUpdateParams;
                };
            };
            protobufPackage: "cosmos.mint.v1beta1";
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _84.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _84.MsgUpdateParams;
                fromJSON(object: any): _84.MsgUpdateParams;
                toJSON(message: _84.MsgUpdateParams): unknown;
                fromPartial(object: Partial<_84.MsgUpdateParams>): _84.MsgUpdateParams;
                fromSDK(object: _84.MsgUpdateParamsSDKType): _84.MsgUpdateParams;
                toSDK(message: _84.MsgUpdateParams): _84.MsgUpdateParamsSDKType;
                fromAmino(object: _84.MsgUpdateParamsAmino): _84.MsgUpdateParams;
                toAmino(message: _84.MsgUpdateParams): _84.MsgUpdateParamsAmino;
                fromAminoMsg(object: _84.MsgUpdateParamsAminoMsg): _84.MsgUpdateParams;
                toAminoMsg(message: _84.MsgUpdateParams): _84.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _84.MsgUpdateParamsProtoMsg): _84.MsgUpdateParams;
                toProto(message: _84.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _84.MsgUpdateParams): _84.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _84.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _84.MsgUpdateParamsResponse;
                fromJSON(_: any): _84.MsgUpdateParamsResponse;
                toJSON(_: _84.MsgUpdateParamsResponse): unknown;
                fromPartial(_: Partial<_84.MsgUpdateParamsResponse>): _84.MsgUpdateParamsResponse;
                fromSDK(_: _84.MsgUpdateParamsResponseSDKType): _84.MsgUpdateParamsResponse;
                toSDK(_: _84.MsgUpdateParamsResponse): _84.MsgUpdateParamsResponseSDKType;
                fromAmino(_: _84.MsgUpdateParamsResponseAmino): _84.MsgUpdateParamsResponse;
                toAmino(_: _84.MsgUpdateParamsResponse): _84.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _84.MsgUpdateParamsResponseAminoMsg): _84.MsgUpdateParamsResponse;
                toAminoMsg(message: _84.MsgUpdateParamsResponse): _84.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _84.MsgUpdateParamsResponseProtoMsg): _84.MsgUpdateParamsResponse;
                toProto(message: _84.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _84.MsgUpdateParamsResponse): _84.MsgUpdateParamsResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _83.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _83.QueryParamsRequest;
                fromJSON(_: any): _83.QueryParamsRequest;
                toJSON(_: _83.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_83.QueryParamsRequest>): _83.QueryParamsRequest;
                fromSDK(_: _83.QueryParamsRequestSDKType): _83.QueryParamsRequest;
                toSDK(_: _83.QueryParamsRequest): _83.QueryParamsRequestSDKType;
                fromAmino(_: _83.QueryParamsRequestAmino): _83.QueryParamsRequest;
                toAmino(_: _83.QueryParamsRequest): _83.QueryParamsRequestAmino;
                fromAminoMsg(object: _83.QueryParamsRequestAminoMsg): _83.QueryParamsRequest;
                toAminoMsg(message: _83.QueryParamsRequest): _83.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _83.QueryParamsRequestProtoMsg): _83.QueryParamsRequest;
                toProto(message: _83.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _83.QueryParamsRequest): _83.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _83.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _83.QueryParamsResponse;
                fromJSON(object: any): _83.QueryParamsResponse;
                toJSON(message: _83.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_83.QueryParamsResponse>): _83.QueryParamsResponse;
                fromSDK(object: _83.QueryParamsResponseSDKType): _83.QueryParamsResponse;
                toSDK(message: _83.QueryParamsResponse): _83.QueryParamsResponseSDKType;
                fromAmino(object: _83.QueryParamsResponseAmino): _83.QueryParamsResponse;
                toAmino(message: _83.QueryParamsResponse): _83.QueryParamsResponseAmino;
                fromAminoMsg(object: _83.QueryParamsResponseAminoMsg): _83.QueryParamsResponse;
                toAminoMsg(message: _83.QueryParamsResponse): _83.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _83.QueryParamsResponseProtoMsg): _83.QueryParamsResponse;
                toProto(message: _83.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _83.QueryParamsResponse): _83.QueryParamsResponseProtoMsg;
            };
            QueryInflationRequest: {
                typeUrl: string;
                encode(_: _83.QueryInflationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _83.QueryInflationRequest;
                fromJSON(_: any): _83.QueryInflationRequest;
                toJSON(_: _83.QueryInflationRequest): unknown;
                fromPartial(_: Partial<_83.QueryInflationRequest>): _83.QueryInflationRequest;
                fromSDK(_: _83.QueryInflationRequestSDKType): _83.QueryInflationRequest;
                toSDK(_: _83.QueryInflationRequest): _83.QueryInflationRequestSDKType;
                fromAmino(_: _83.QueryInflationRequestAmino): _83.QueryInflationRequest;
                toAmino(_: _83.QueryInflationRequest): _83.QueryInflationRequestAmino;
                fromAminoMsg(object: _83.QueryInflationRequestAminoMsg): _83.QueryInflationRequest;
                toAminoMsg(message: _83.QueryInflationRequest): _83.QueryInflationRequestAminoMsg;
                fromProtoMsg(message: _83.QueryInflationRequestProtoMsg): _83.QueryInflationRequest;
                toProto(message: _83.QueryInflationRequest): Uint8Array;
                toProtoMsg(message: _83.QueryInflationRequest): _83.QueryInflationRequestProtoMsg;
            };
            QueryInflationResponse: {
                typeUrl: string;
                encode(message: _83.QueryInflationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _83.QueryInflationResponse;
                fromJSON(object: any): _83.QueryInflationResponse;
                toJSON(message: _83.QueryInflationResponse): unknown;
                fromPartial(object: Partial<_83.QueryInflationResponse>): _83.QueryInflationResponse;
                fromSDK(object: _83.QueryInflationResponseSDKType): _83.QueryInflationResponse;
                toSDK(message: _83.QueryInflationResponse): _83.QueryInflationResponseSDKType;
                fromAmino(object: _83.QueryInflationResponseAmino): _83.QueryInflationResponse;
                toAmino(message: _83.QueryInflationResponse): _83.QueryInflationResponseAmino;
                fromAminoMsg(object: _83.QueryInflationResponseAminoMsg): _83.QueryInflationResponse;
                toAminoMsg(message: _83.QueryInflationResponse): _83.QueryInflationResponseAminoMsg;
                fromProtoMsg(message: _83.QueryInflationResponseProtoMsg): _83.QueryInflationResponse;
                toProto(message: _83.QueryInflationResponse): Uint8Array;
                toProtoMsg(message: _83.QueryInflationResponse): _83.QueryInflationResponseProtoMsg;
            };
            QueryAnnualProvisionsRequest: {
                typeUrl: string;
                encode(_: _83.QueryAnnualProvisionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _83.QueryAnnualProvisionsRequest;
                fromJSON(_: any): _83.QueryAnnualProvisionsRequest;
                toJSON(_: _83.QueryAnnualProvisionsRequest): unknown;
                fromPartial(_: Partial<_83.QueryAnnualProvisionsRequest>): _83.QueryAnnualProvisionsRequest;
                fromSDK(_: _83.QueryAnnualProvisionsRequestSDKType): _83.QueryAnnualProvisionsRequest;
                toSDK(_: _83.QueryAnnualProvisionsRequest): _83.QueryAnnualProvisionsRequestSDKType;
                fromAmino(_: _83.QueryAnnualProvisionsRequestAmino): _83.QueryAnnualProvisionsRequest;
                toAmino(_: _83.QueryAnnualProvisionsRequest): _83.QueryAnnualProvisionsRequestAmino;
                fromAminoMsg(object: _83.QueryAnnualProvisionsRequestAminoMsg): _83.QueryAnnualProvisionsRequest;
                toAminoMsg(message: _83.QueryAnnualProvisionsRequest): _83.QueryAnnualProvisionsRequestAminoMsg;
                fromProtoMsg(message: _83.QueryAnnualProvisionsRequestProtoMsg): _83.QueryAnnualProvisionsRequest;
                toProto(message: _83.QueryAnnualProvisionsRequest): Uint8Array;
                toProtoMsg(message: _83.QueryAnnualProvisionsRequest): _83.QueryAnnualProvisionsRequestProtoMsg;
            };
            QueryAnnualProvisionsResponse: {
                typeUrl: string;
                encode(message: _83.QueryAnnualProvisionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _83.QueryAnnualProvisionsResponse;
                fromJSON(object: any): _83.QueryAnnualProvisionsResponse;
                toJSON(message: _83.QueryAnnualProvisionsResponse): unknown;
                fromPartial(object: Partial<_83.QueryAnnualProvisionsResponse>): _83.QueryAnnualProvisionsResponse;
                fromSDK(object: _83.QueryAnnualProvisionsResponseSDKType): _83.QueryAnnualProvisionsResponse;
                toSDK(message: _83.QueryAnnualProvisionsResponse): _83.QueryAnnualProvisionsResponseSDKType;
                fromAmino(object: _83.QueryAnnualProvisionsResponseAmino): _83.QueryAnnualProvisionsResponse;
                toAmino(message: _83.QueryAnnualProvisionsResponse): _83.QueryAnnualProvisionsResponseAmino;
                fromAminoMsg(object: _83.QueryAnnualProvisionsResponseAminoMsg): _83.QueryAnnualProvisionsResponse;
                toAminoMsg(message: _83.QueryAnnualProvisionsResponse): _83.QueryAnnualProvisionsResponseAminoMsg;
                fromProtoMsg(message: _83.QueryAnnualProvisionsResponseProtoMsg): _83.QueryAnnualProvisionsResponse;
                toProto(message: _83.QueryAnnualProvisionsResponse): Uint8Array;
                toProtoMsg(message: _83.QueryAnnualProvisionsResponse): _83.QueryAnnualProvisionsResponseProtoMsg;
            };
            Minter: {
                typeUrl: string;
                encode(message: _82.Minter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _82.Minter;
                fromJSON(object: any): _82.Minter;
                toJSON(message: _82.Minter): unknown;
                fromPartial(object: Partial<_82.Minter>): _82.Minter;
                fromSDK(object: _82.MinterSDKType): _82.Minter;
                toSDK(message: _82.Minter): _82.MinterSDKType;
                fromAmino(object: _82.MinterAmino): _82.Minter;
                toAmino(message: _82.Minter): _82.MinterAmino;
                fromAminoMsg(object: _82.MinterAminoMsg): _82.Minter;
                toAminoMsg(message: _82.Minter): _82.MinterAminoMsg;
                fromProtoMsg(message: _82.MinterProtoMsg): _82.Minter;
                toProto(message: _82.Minter): Uint8Array;
                toProtoMsg(message: _82.Minter): _82.MinterProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _82.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _82.Params;
                fromJSON(object: any): _82.Params;
                toJSON(message: _82.Params): unknown;
                fromPartial(object: Partial<_82.Params>): _82.Params;
                fromSDK(object: _82.ParamsSDKType): _82.Params;
                toSDK(message: _82.Params): _82.ParamsSDKType;
                fromAmino(object: _82.ParamsAmino): _82.Params;
                toAmino(message: _82.Params): _82.ParamsAmino;
                fromAminoMsg(object: _82.ParamsAminoMsg): _82.Params;
                toAminoMsg(message: _82.Params): _82.ParamsAminoMsg;
                fromProtoMsg(message: _82.ParamsProtoMsg): _82.Params;
                toProto(message: _82.Params): Uint8Array;
                toProtoMsg(message: _82.Params): _82.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _81.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _81.GenesisState;
                fromJSON(object: any): _81.GenesisState;
                toJSON(message: _81.GenesisState): unknown;
                fromPartial(object: Partial<_81.GenesisState>): _81.GenesisState;
                fromSDK(object: _81.GenesisStateSDKType): _81.GenesisState;
                toSDK(message: _81.GenesisState): _81.GenesisStateSDKType;
                fromAmino(object: _81.GenesisStateAmino): _81.GenesisState;
                toAmino(message: _81.GenesisState): _81.GenesisStateAmino;
                fromAminoMsg(object: _81.GenesisStateAminoMsg): _81.GenesisState;
                toAminoMsg(message: _81.GenesisState): _81.GenesisStateAminoMsg;
                fromProtoMsg(message: _81.GenesisStateProtoMsg): _81.GenesisState;
                toProto(message: _81.GenesisState): Uint8Array;
                toProtoMsg(message: _81.GenesisState): _81.GenesisStateProtoMsg;
            };
        };
    }
    namespace nft {
        namespace module {
            const v1: {
                protobufPackage: "cosmos.nft.module.v1";
                Module: {
                    typeUrl: string;
                    encode(_: _85.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _85.Module;
                    fromJSON(_: any): _85.Module;
                    toJSON(_: _85.Module): unknown;
                    fromPartial(_: Partial<_85.Module>): _85.Module;
                    fromSDK(_: _85.ModuleSDKType): _85.Module;
                    toSDK(_: _85.Module): _85.ModuleSDKType;
                    fromAmino(_: _85.ModuleAmino): _85.Module;
                    toAmino(_: _85.Module): _85.ModuleAmino;
                    fromAminoMsg(object: _85.ModuleAminoMsg): _85.Module;
                    toAminoMsg(message: _85.Module): _85.ModuleAminoMsg;
                    fromProtoMsg(message: _85.ModuleProtoMsg): _85.Module;
                    toProto(message: _85.Module): Uint8Array;
                    toProtoMsg(message: _85.Module): _85.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            Msg: typeof _221.Msg;
            Query: typeof _205.Query;
            QueryClientImpl: typeof _205.QueryClientImpl;
            LCDQueryClient: typeof _188.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _90.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _90.MsgSend): {
                        typeUrl: string;
                        value: _90.MsgSend;
                    };
                };
                toJSON: {
                    send(value: _90.MsgSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _90.MsgSend;
                    };
                };
                fromPartial: {
                    send(value: _90.MsgSend): {
                        typeUrl: string;
                        value: _90.MsgSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.nft.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _90.MsgSend) => _90.MsgSendAmino;
                    fromAmino: (object: _90.MsgSendAmino) => _90.MsgSend;
                };
            };
            protobufPackage: "cosmos.nft.v1beta1";
            MsgSend: {
                typeUrl: string;
                encode(message: _90.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _90.MsgSend;
                fromJSON(object: any): _90.MsgSend;
                toJSON(message: _90.MsgSend): unknown;
                fromPartial(object: Partial<_90.MsgSend>): _90.MsgSend;
                fromSDK(object: _90.MsgSendSDKType): _90.MsgSend;
                toSDK(message: _90.MsgSend): _90.MsgSendSDKType;
                fromAmino(object: _90.MsgSendAmino): _90.MsgSend;
                toAmino(message: _90.MsgSend): _90.MsgSendAmino;
                fromAminoMsg(object: _90.MsgSendAminoMsg): _90.MsgSend;
                toAminoMsg(message: _90.MsgSend): _90.MsgSendAminoMsg;
                fromProtoMsg(message: _90.MsgSendProtoMsg): _90.MsgSend;
                toProto(message: _90.MsgSend): Uint8Array;
                toProtoMsg(message: _90.MsgSend): _90.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _90.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _90.MsgSendResponse;
                fromJSON(_: any): _90.MsgSendResponse;
                toJSON(_: _90.MsgSendResponse): unknown;
                fromPartial(_: Partial<_90.MsgSendResponse>): _90.MsgSendResponse;
                fromSDK(_: _90.MsgSendResponseSDKType): _90.MsgSendResponse;
                toSDK(_: _90.MsgSendResponse): _90.MsgSendResponseSDKType;
                fromAmino(_: _90.MsgSendResponseAmino): _90.MsgSendResponse;
                toAmino(_: _90.MsgSendResponse): _90.MsgSendResponseAmino;
                fromAminoMsg(object: _90.MsgSendResponseAminoMsg): _90.MsgSendResponse;
                toAminoMsg(message: _90.MsgSendResponse): _90.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _90.MsgSendResponseProtoMsg): _90.MsgSendResponse;
                toProto(message: _90.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _90.MsgSendResponse): _90.MsgSendResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _89.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _89.QueryBalanceRequest;
                fromJSON(object: any): _89.QueryBalanceRequest;
                toJSON(message: _89.QueryBalanceRequest): unknown;
                fromPartial(object: Partial<_89.QueryBalanceRequest>): _89.QueryBalanceRequest;
                fromSDK(object: _89.QueryBalanceRequestSDKType): _89.QueryBalanceRequest;
                toSDK(message: _89.QueryBalanceRequest): _89.QueryBalanceRequestSDKType;
                fromAmino(object: _89.QueryBalanceRequestAmino): _89.QueryBalanceRequest;
                toAmino(message: _89.QueryBalanceRequest): _89.QueryBalanceRequestAmino;
                fromAminoMsg(object: _89.QueryBalanceRequestAminoMsg): _89.QueryBalanceRequest;
                toAminoMsg(message: _89.QueryBalanceRequest): _89.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _89.QueryBalanceRequestProtoMsg): _89.QueryBalanceRequest;
                toProto(message: _89.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _89.QueryBalanceRequest): _89.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _89.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _89.QueryBalanceResponse;
                fromJSON(object: any): _89.QueryBalanceResponse;
                toJSON(message: _89.QueryBalanceResponse): unknown;
                fromPartial(object: Partial<_89.QueryBalanceResponse>): _89.QueryBalanceResponse;
                fromSDK(object: _89.QueryBalanceResponseSDKType): _89.QueryBalanceResponse;
                toSDK(message: _89.QueryBalanceResponse): _89.QueryBalanceResponseSDKType;
                fromAmino(object: _89.QueryBalanceResponseAmino): _89.QueryBalanceResponse;
                toAmino(message: _89.QueryBalanceResponse): _89.QueryBalanceResponseAmino;
                fromAminoMsg(object: _89.QueryBalanceResponseAminoMsg): _89.QueryBalanceResponse;
                toAminoMsg(message: _89.QueryBalanceResponse): _89.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _89.QueryBalanceResponseProtoMsg): _89.QueryBalanceResponse;
                toProto(message: _89.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _89.QueryBalanceResponse): _89.QueryBalanceResponseProtoMsg;
            };
            QueryOwnerRequest: {
                typeUrl: string;
                encode(message: _89.QueryOwnerRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _89.QueryOwnerRequest;
                fromJSON(object: any): _89.QueryOwnerRequest;
                toJSON(message: _89.QueryOwnerRequest): unknown;
                fromPartial(object: Partial<_89.QueryOwnerRequest>): _89.QueryOwnerRequest;
                fromSDK(object: _89.QueryOwnerRequestSDKType): _89.QueryOwnerRequest;
                toSDK(message: _89.QueryOwnerRequest): _89.QueryOwnerRequestSDKType;
                fromAmino(object: _89.QueryOwnerRequestAmino): _89.QueryOwnerRequest;
                toAmino(message: _89.QueryOwnerRequest): _89.QueryOwnerRequestAmino;
                fromAminoMsg(object: _89.QueryOwnerRequestAminoMsg): _89.QueryOwnerRequest;
                toAminoMsg(message: _89.QueryOwnerRequest): _89.QueryOwnerRequestAminoMsg;
                fromProtoMsg(message: _89.QueryOwnerRequestProtoMsg): _89.QueryOwnerRequest;
                toProto(message: _89.QueryOwnerRequest): Uint8Array;
                toProtoMsg(message: _89.QueryOwnerRequest): _89.QueryOwnerRequestProtoMsg;
            };
            QueryOwnerResponse: {
                typeUrl: string;
                encode(message: _89.QueryOwnerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _89.QueryOwnerResponse;
                fromJSON(object: any): _89.QueryOwnerResponse;
                toJSON(message: _89.QueryOwnerResponse): unknown;
                fromPartial(object: Partial<_89.QueryOwnerResponse>): _89.QueryOwnerResponse;
                fromSDK(object: _89.QueryOwnerResponseSDKType): _89.QueryOwnerResponse;
                toSDK(message: _89.QueryOwnerResponse): _89.QueryOwnerResponseSDKType;
                fromAmino(object: _89.QueryOwnerResponseAmino): _89.QueryOwnerResponse;
                toAmino(message: _89.QueryOwnerResponse): _89.QueryOwnerResponseAmino;
                fromAminoMsg(object: _89.QueryOwnerResponseAminoMsg): _89.QueryOwnerResponse;
                toAminoMsg(message: _89.QueryOwnerResponse): _89.QueryOwnerResponseAminoMsg;
                fromProtoMsg(message: _89.QueryOwnerResponseProtoMsg): _89.QueryOwnerResponse;
                toProto(message: _89.QueryOwnerResponse): Uint8Array;
                toProtoMsg(message: _89.QueryOwnerResponse): _89.QueryOwnerResponseProtoMsg;
            };
            QuerySupplyRequest: {
                typeUrl: string;
                encode(message: _89.QuerySupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _89.QuerySupplyRequest;
                fromJSON(object: any): _89.QuerySupplyRequest;
                toJSON(message: _89.QuerySupplyRequest): unknown;
                fromPartial(object: Partial<_89.QuerySupplyRequest>): _89.QuerySupplyRequest;
                fromSDK(object: _89.QuerySupplyRequestSDKType): _89.QuerySupplyRequest;
                toSDK(message: _89.QuerySupplyRequest): _89.QuerySupplyRequestSDKType;
                fromAmino(object: _89.QuerySupplyRequestAmino): _89.QuerySupplyRequest;
                toAmino(message: _89.QuerySupplyRequest): _89.QuerySupplyRequestAmino;
                fromAminoMsg(object: _89.QuerySupplyRequestAminoMsg): _89.QuerySupplyRequest;
                toAminoMsg(message: _89.QuerySupplyRequest): _89.QuerySupplyRequestAminoMsg;
                fromProtoMsg(message: _89.QuerySupplyRequestProtoMsg): _89.QuerySupplyRequest;
                toProto(message: _89.QuerySupplyRequest): Uint8Array;
                toProtoMsg(message: _89.QuerySupplyRequest): _89.QuerySupplyRequestProtoMsg;
            };
            QuerySupplyResponse: {
                typeUrl: string;
                encode(message: _89.QuerySupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _89.QuerySupplyResponse;
                fromJSON(object: any): _89.QuerySupplyResponse;
                toJSON(message: _89.QuerySupplyResponse): unknown;
                fromPartial(object: Partial<_89.QuerySupplyResponse>): _89.QuerySupplyResponse;
                fromSDK(object: _89.QuerySupplyResponseSDKType): _89.QuerySupplyResponse;
                toSDK(message: _89.QuerySupplyResponse): _89.QuerySupplyResponseSDKType;
                fromAmino(object: _89.QuerySupplyResponseAmino): _89.QuerySupplyResponse;
                toAmino(message: _89.QuerySupplyResponse): _89.QuerySupplyResponseAmino;
                fromAminoMsg(object: _89.QuerySupplyResponseAminoMsg): _89.QuerySupplyResponse;
                toAminoMsg(message: _89.QuerySupplyResponse): _89.QuerySupplyResponseAminoMsg;
                fromProtoMsg(message: _89.QuerySupplyResponseProtoMsg): _89.QuerySupplyResponse;
                toProto(message: _89.QuerySupplyResponse): Uint8Array;
                toProtoMsg(message: _89.QuerySupplyResponse): _89.QuerySupplyResponseProtoMsg;
            };
            QueryNFTsRequest: {
                typeUrl: string;
                encode(message: _89.QueryNFTsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _89.QueryNFTsRequest;
                fromJSON(object: any): _89.QueryNFTsRequest;
                toJSON(message: _89.QueryNFTsRequest): unknown;
                fromPartial(object: Partial<_89.QueryNFTsRequest>): _89.QueryNFTsRequest;
                fromSDK(object: _89.QueryNFTsRequestSDKType): _89.QueryNFTsRequest;
                toSDK(message: _89.QueryNFTsRequest): _89.QueryNFTsRequestSDKType;
                fromAmino(object: _89.QueryNFTsRequestAmino): _89.QueryNFTsRequest;
                toAmino(message: _89.QueryNFTsRequest): _89.QueryNFTsRequestAmino;
                fromAminoMsg(object: _89.QueryNFTsRequestAminoMsg): _89.QueryNFTsRequest;
                toAminoMsg(message: _89.QueryNFTsRequest): _89.QueryNFTsRequestAminoMsg;
                fromProtoMsg(message: _89.QueryNFTsRequestProtoMsg): _89.QueryNFTsRequest;
                toProto(message: _89.QueryNFTsRequest): Uint8Array;
                toProtoMsg(message: _89.QueryNFTsRequest): _89.QueryNFTsRequestProtoMsg;
            };
            QueryNFTsResponse: {
                typeUrl: string;
                encode(message: _89.QueryNFTsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _89.QueryNFTsResponse;
                fromJSON(object: any): _89.QueryNFTsResponse;
                toJSON(message: _89.QueryNFTsResponse): unknown;
                fromPartial(object: Partial<_89.QueryNFTsResponse>): _89.QueryNFTsResponse;
                fromSDK(object: _89.QueryNFTsResponseSDKType): _89.QueryNFTsResponse;
                toSDK(message: _89.QueryNFTsResponse): _89.QueryNFTsResponseSDKType;
                fromAmino(object: _89.QueryNFTsResponseAmino): _89.QueryNFTsResponse;
                toAmino(message: _89.QueryNFTsResponse): _89.QueryNFTsResponseAmino;
                fromAminoMsg(object: _89.QueryNFTsResponseAminoMsg): _89.QueryNFTsResponse;
                toAminoMsg(message: _89.QueryNFTsResponse): _89.QueryNFTsResponseAminoMsg;
                fromProtoMsg(message: _89.QueryNFTsResponseProtoMsg): _89.QueryNFTsResponse;
                toProto(message: _89.QueryNFTsResponse): Uint8Array;
                toProtoMsg(message: _89.QueryNFTsResponse): _89.QueryNFTsResponseProtoMsg;
            };
            QueryNFTRequest: {
                typeUrl: string;
                encode(message: _89.QueryNFTRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _89.QueryNFTRequest;
                fromJSON(object: any): _89.QueryNFTRequest;
                toJSON(message: _89.QueryNFTRequest): unknown;
                fromPartial(object: Partial<_89.QueryNFTRequest>): _89.QueryNFTRequest;
                fromSDK(object: _89.QueryNFTRequestSDKType): _89.QueryNFTRequest;
                toSDK(message: _89.QueryNFTRequest): _89.QueryNFTRequestSDKType;
                fromAmino(object: _89.QueryNFTRequestAmino): _89.QueryNFTRequest;
                toAmino(message: _89.QueryNFTRequest): _89.QueryNFTRequestAmino;
                fromAminoMsg(object: _89.QueryNFTRequestAminoMsg): _89.QueryNFTRequest;
                toAminoMsg(message: _89.QueryNFTRequest): _89.QueryNFTRequestAminoMsg;
                fromProtoMsg(message: _89.QueryNFTRequestProtoMsg): _89.QueryNFTRequest;
                toProto(message: _89.QueryNFTRequest): Uint8Array;
                toProtoMsg(message: _89.QueryNFTRequest): _89.QueryNFTRequestProtoMsg;
            };
            QueryNFTResponse: {
                typeUrl: string;
                encode(message: _89.QueryNFTResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _89.QueryNFTResponse;
                fromJSON(object: any): _89.QueryNFTResponse;
                toJSON(message: _89.QueryNFTResponse): unknown;
                fromPartial(object: Partial<_89.QueryNFTResponse>): _89.QueryNFTResponse;
                fromSDK(object: _89.QueryNFTResponseSDKType): _89.QueryNFTResponse;
                toSDK(message: _89.QueryNFTResponse): _89.QueryNFTResponseSDKType;
                fromAmino(object: _89.QueryNFTResponseAmino): _89.QueryNFTResponse;
                toAmino(message: _89.QueryNFTResponse): _89.QueryNFTResponseAmino;
                fromAminoMsg(object: _89.QueryNFTResponseAminoMsg): _89.QueryNFTResponse;
                toAminoMsg(message: _89.QueryNFTResponse): _89.QueryNFTResponseAminoMsg;
                fromProtoMsg(message: _89.QueryNFTResponseProtoMsg): _89.QueryNFTResponse;
                toProto(message: _89.QueryNFTResponse): Uint8Array;
                toProtoMsg(message: _89.QueryNFTResponse): _89.QueryNFTResponseProtoMsg;
            };
            QueryClassRequest: {
                typeUrl: string;
                encode(message: _89.QueryClassRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _89.QueryClassRequest;
                fromJSON(object: any): _89.QueryClassRequest;
                toJSON(message: _89.QueryClassRequest): unknown;
                fromPartial(object: Partial<_89.QueryClassRequest>): _89.QueryClassRequest;
                fromSDK(object: _89.QueryClassRequestSDKType): _89.QueryClassRequest;
                toSDK(message: _89.QueryClassRequest): _89.QueryClassRequestSDKType;
                fromAmino(object: _89.QueryClassRequestAmino): _89.QueryClassRequest;
                toAmino(message: _89.QueryClassRequest): _89.QueryClassRequestAmino;
                fromAminoMsg(object: _89.QueryClassRequestAminoMsg): _89.QueryClassRequest;
                toAminoMsg(message: _89.QueryClassRequest): _89.QueryClassRequestAminoMsg;
                fromProtoMsg(message: _89.QueryClassRequestProtoMsg): _89.QueryClassRequest;
                toProto(message: _89.QueryClassRequest): Uint8Array;
                toProtoMsg(message: _89.QueryClassRequest): _89.QueryClassRequestProtoMsg;
            };
            QueryClassResponse: {
                typeUrl: string;
                encode(message: _89.QueryClassResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _89.QueryClassResponse;
                fromJSON(object: any): _89.QueryClassResponse;
                toJSON(message: _89.QueryClassResponse): unknown;
                fromPartial(object: Partial<_89.QueryClassResponse>): _89.QueryClassResponse;
                fromSDK(object: _89.QueryClassResponseSDKType): _89.QueryClassResponse;
                toSDK(message: _89.QueryClassResponse): _89.QueryClassResponseSDKType;
                fromAmino(object: _89.QueryClassResponseAmino): _89.QueryClassResponse;
                toAmino(message: _89.QueryClassResponse): _89.QueryClassResponseAmino;
                fromAminoMsg(object: _89.QueryClassResponseAminoMsg): _89.QueryClassResponse;
                toAminoMsg(message: _89.QueryClassResponse): _89.QueryClassResponseAminoMsg;
                fromProtoMsg(message: _89.QueryClassResponseProtoMsg): _89.QueryClassResponse;
                toProto(message: _89.QueryClassResponse): Uint8Array;
                toProtoMsg(message: _89.QueryClassResponse): _89.QueryClassResponseProtoMsg;
            };
            QueryClassesRequest: {
                typeUrl: string;
                encode(message: _89.QueryClassesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _89.QueryClassesRequest;
                fromJSON(object: any): _89.QueryClassesRequest;
                toJSON(message: _89.QueryClassesRequest): unknown;
                fromPartial(object: Partial<_89.QueryClassesRequest>): _89.QueryClassesRequest;
                fromSDK(object: _89.QueryClassesRequestSDKType): _89.QueryClassesRequest;
                toSDK(message: _89.QueryClassesRequest): _89.QueryClassesRequestSDKType;
                fromAmino(object: _89.QueryClassesRequestAmino): _89.QueryClassesRequest;
                toAmino(message: _89.QueryClassesRequest): _89.QueryClassesRequestAmino;
                fromAminoMsg(object: _89.QueryClassesRequestAminoMsg): _89.QueryClassesRequest;
                toAminoMsg(message: _89.QueryClassesRequest): _89.QueryClassesRequestAminoMsg;
                fromProtoMsg(message: _89.QueryClassesRequestProtoMsg): _89.QueryClassesRequest;
                toProto(message: _89.QueryClassesRequest): Uint8Array;
                toProtoMsg(message: _89.QueryClassesRequest): _89.QueryClassesRequestProtoMsg;
            };
            QueryClassesResponse: {
                typeUrl: string;
                encode(message: _89.QueryClassesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _89.QueryClassesResponse;
                fromJSON(object: any): _89.QueryClassesResponse;
                toJSON(message: _89.QueryClassesResponse): unknown;
                fromPartial(object: Partial<_89.QueryClassesResponse>): _89.QueryClassesResponse;
                fromSDK(object: _89.QueryClassesResponseSDKType): _89.QueryClassesResponse;
                toSDK(message: _89.QueryClassesResponse): _89.QueryClassesResponseSDKType;
                fromAmino(object: _89.QueryClassesResponseAmino): _89.QueryClassesResponse;
                toAmino(message: _89.QueryClassesResponse): _89.QueryClassesResponseAmino;
                fromAminoMsg(object: _89.QueryClassesResponseAminoMsg): _89.QueryClassesResponse;
                toAminoMsg(message: _89.QueryClassesResponse): _89.QueryClassesResponseAminoMsg;
                fromProtoMsg(message: _89.QueryClassesResponseProtoMsg): _89.QueryClassesResponse;
                toProto(message: _89.QueryClassesResponse): Uint8Array;
                toProtoMsg(message: _89.QueryClassesResponse): _89.QueryClassesResponseProtoMsg;
            };
            Class: {
                typeUrl: string;
                encode(message: _88.Class, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _88.Class;
                fromJSON(object: any): _88.Class;
                toJSON(message: _88.Class): unknown;
                fromPartial(object: Partial<_88.Class>): _88.Class;
                fromSDK(object: _88.ClassSDKType): _88.Class;
                toSDK(message: _88.Class): _88.ClassSDKType;
                fromAmino(object: _88.ClassAmino): _88.Class;
                toAmino(message: _88.Class): _88.ClassAmino;
                fromAminoMsg(object: _88.ClassAminoMsg): _88.Class;
                toAminoMsg(message: _88.Class): _88.ClassAminoMsg;
                fromProtoMsg(message: _88.ClassProtoMsg): _88.Class;
                toProto(message: _88.Class): Uint8Array;
                toProtoMsg(message: _88.Class): _88.ClassProtoMsg;
            };
            NFT: {
                typeUrl: string;
                encode(message: _88.NFT, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _88.NFT;
                fromJSON(object: any): _88.NFT;
                toJSON(message: _88.NFT): unknown;
                fromPartial(object: Partial<_88.NFT>): _88.NFT;
                fromSDK(object: _88.NFTSDKType): _88.NFT;
                toSDK(message: _88.NFT): _88.NFTSDKType;
                fromAmino(object: _88.NFTAmino): _88.NFT;
                toAmino(message: _88.NFT): _88.NFTAmino;
                fromAminoMsg(object: _88.NFTAminoMsg): _88.NFT;
                toAminoMsg(message: _88.NFT): _88.NFTAminoMsg;
                fromProtoMsg(message: _88.NFTProtoMsg): _88.NFT;
                toProto(message: _88.NFT): Uint8Array;
                toProtoMsg(message: _88.NFT): _88.NFTProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _87.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _87.GenesisState;
                fromJSON(object: any): _87.GenesisState;
                toJSON(message: _87.GenesisState): unknown;
                fromPartial(object: Partial<_87.GenesisState>): _87.GenesisState;
                fromSDK(object: _87.GenesisStateSDKType): _87.GenesisState;
                toSDK(message: _87.GenesisState): _87.GenesisStateSDKType;
                fromAmino(object: _87.GenesisStateAmino): _87.GenesisState;
                toAmino(message: _87.GenesisState): _87.GenesisStateAmino;
                fromAminoMsg(object: _87.GenesisStateAminoMsg): _87.GenesisState;
                toAminoMsg(message: _87.GenesisState): _87.GenesisStateAminoMsg;
                fromProtoMsg(message: _87.GenesisStateProtoMsg): _87.GenesisState;
                toProto(message: _87.GenesisState): Uint8Array;
                toProtoMsg(message: _87.GenesisState): _87.GenesisStateProtoMsg;
            };
            Entry: {
                typeUrl: string;
                encode(message: _87.Entry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _87.Entry;
                fromJSON(object: any): _87.Entry;
                toJSON(message: _87.Entry): unknown;
                fromPartial(object: Partial<_87.Entry>): _87.Entry;
                fromSDK(object: _87.EntrySDKType): _87.Entry;
                toSDK(message: _87.Entry): _87.EntrySDKType;
                fromAmino(object: _87.EntryAmino): _87.Entry;
                toAmino(message: _87.Entry): _87.EntryAmino;
                fromAminoMsg(object: _87.EntryAminoMsg): _87.Entry;
                toAminoMsg(message: _87.Entry): _87.EntryAminoMsg;
                fromProtoMsg(message: _87.EntryProtoMsg): _87.Entry;
                toProto(message: _87.Entry): Uint8Array;
                toProtoMsg(message: _87.Entry): _87.EntryProtoMsg;
            };
            EventSend: {
                typeUrl: string;
                encode(message: _86.EventSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _86.EventSend;
                fromJSON(object: any): _86.EventSend;
                toJSON(message: _86.EventSend): unknown;
                fromPartial(object: Partial<_86.EventSend>): _86.EventSend;
                fromSDK(object: _86.EventSendSDKType): _86.EventSend;
                toSDK(message: _86.EventSend): _86.EventSendSDKType;
                fromAmino(object: _86.EventSendAmino): _86.EventSend;
                toAmino(message: _86.EventSend): _86.EventSendAmino;
                fromAminoMsg(object: _86.EventSendAminoMsg): _86.EventSend;
                toAminoMsg(message: _86.EventSend): _86.EventSendAminoMsg;
                fromProtoMsg(message: _86.EventSendProtoMsg): _86.EventSend;
                toProto(message: _86.EventSend): Uint8Array;
                toProtoMsg(message: _86.EventSend): _86.EventSendProtoMsg;
            };
            EventMint: {
                typeUrl: string;
                encode(message: _86.EventMint, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _86.EventMint;
                fromJSON(object: any): _86.EventMint;
                toJSON(message: _86.EventMint): unknown;
                fromPartial(object: Partial<_86.EventMint>): _86.EventMint;
                fromSDK(object: _86.EventMintSDKType): _86.EventMint;
                toSDK(message: _86.EventMint): _86.EventMintSDKType;
                fromAmino(object: _86.EventMintAmino): _86.EventMint;
                toAmino(message: _86.EventMint): _86.EventMintAmino;
                fromAminoMsg(object: _86.EventMintAminoMsg): _86.EventMint;
                toAminoMsg(message: _86.EventMint): _86.EventMintAminoMsg;
                fromProtoMsg(message: _86.EventMintProtoMsg): _86.EventMint;
                toProto(message: _86.EventMint): Uint8Array;
                toProtoMsg(message: _86.EventMint): _86.EventMintProtoMsg;
            };
            EventBurn: {
                typeUrl: string;
                encode(message: _86.EventBurn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _86.EventBurn;
                fromJSON(object: any): _86.EventBurn;
                toJSON(message: _86.EventBurn): unknown;
                fromPartial(object: Partial<_86.EventBurn>): _86.EventBurn;
                fromSDK(object: _86.EventBurnSDKType): _86.EventBurn;
                toSDK(message: _86.EventBurn): _86.EventBurnSDKType;
                fromAmino(object: _86.EventBurnAmino): _86.EventBurn;
                toAmino(message: _86.EventBurn): _86.EventBurnAmino;
                fromAminoMsg(object: _86.EventBurnAminoMsg): _86.EventBurn;
                toAminoMsg(message: _86.EventBurn): _86.EventBurnAminoMsg;
                fromProtoMsg(message: _86.EventBurnProtoMsg): _86.EventBurn;
                toProto(message: _86.EventBurn): Uint8Array;
                toProtoMsg(message: _86.EventBurn): _86.EventBurnProtoMsg;
            };
        };
    }
    namespace orm {
        namespace module {
            const v1alpha1: {
                protobufPackage: "cosmos.orm.module.v1alpha1";
                Module: {
                    typeUrl: string;
                    encode(_: _91.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _91.Module;
                    fromJSON(_: any): _91.Module;
                    toJSON(_: _91.Module): unknown;
                    fromPartial(_: Partial<_91.Module>): _91.Module;
                    fromSDK(_: _91.ModuleSDKType): _91.Module;
                    toSDK(_: _91.Module): _91.ModuleSDKType;
                    fromAmino(_: _91.ModuleAmino): _91.Module;
                    toAmino(_: _91.Module): _91.ModuleAmino;
                    fromAminoMsg(object: _91.ModuleAminoMsg): _91.Module;
                    toAminoMsg(message: _91.Module): _91.ModuleAminoMsg;
                    fromProtoMsg(message: _91.ModuleProtoMsg): _91.Module;
                    toProto(message: _91.Module): Uint8Array;
                    toProtoMsg(message: _91.Module): _91.ModuleProtoMsg;
                };
            };
        }
        namespace query {
            const v1alpha1: {
                Query: typeof _206.Query;
                QueryClientImpl: typeof _206.QueryClientImpl;
                protobufPackage: "cosmos.orm.query.v1alpha1";
                GetRequest: {
                    typeUrl: string;
                    encode(message: _92.GetRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _92.GetRequest;
                    fromJSON(object: any): _92.GetRequest;
                    toJSON(message: _92.GetRequest): unknown;
                    fromPartial(object: Partial<_92.GetRequest>): _92.GetRequest;
                    fromSDK(object: _92.GetRequestSDKType): _92.GetRequest;
                    toSDK(message: _92.GetRequest): _92.GetRequestSDKType;
                    fromAmino(object: _92.GetRequestAmino): _92.GetRequest;
                    toAmino(message: _92.GetRequest): _92.GetRequestAmino;
                    fromAminoMsg(object: _92.GetRequestAminoMsg): _92.GetRequest;
                    toAminoMsg(message: _92.GetRequest): _92.GetRequestAminoMsg;
                    fromProtoMsg(message: _92.GetRequestProtoMsg): _92.GetRequest;
                    toProto(message: _92.GetRequest): Uint8Array;
                    toProtoMsg(message: _92.GetRequest): _92.GetRequestProtoMsg;
                };
                GetResponse: {
                    typeUrl: string;
                    encode(message: _92.GetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _92.GetResponse;
                    fromJSON(object: any): _92.GetResponse;
                    toJSON(message: _92.GetResponse): unknown;
                    fromPartial(object: Partial<_92.GetResponse>): _92.GetResponse;
                    fromSDK(object: _92.GetResponseSDKType): _92.GetResponse;
                    toSDK(message: _92.GetResponse): _92.GetResponseSDKType;
                    fromAmino(object: _92.GetResponseAmino): _92.GetResponse;
                    toAmino(message: _92.GetResponse): _92.GetResponseAmino;
                    fromAminoMsg(object: _92.GetResponseAminoMsg): _92.GetResponse;
                    toAminoMsg(message: _92.GetResponse): _92.GetResponseAminoMsg;
                    fromProtoMsg(message: _92.GetResponseProtoMsg): _92.GetResponse;
                    toProto(message: _92.GetResponse): Uint8Array;
                    toProtoMsg(message: _92.GetResponse): _92.GetResponseProtoMsg;
                };
                ListRequest: {
                    typeUrl: string;
                    encode(message: _92.ListRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _92.ListRequest;
                    fromJSON(object: any): _92.ListRequest;
                    toJSON(message: _92.ListRequest): unknown;
                    fromPartial(object: Partial<_92.ListRequest>): _92.ListRequest;
                    fromSDK(object: _92.ListRequestSDKType): _92.ListRequest;
                    toSDK(message: _92.ListRequest): _92.ListRequestSDKType;
                    fromAmino(object: _92.ListRequestAmino): _92.ListRequest;
                    toAmino(message: _92.ListRequest): _92.ListRequestAmino;
                    fromAminoMsg(object: _92.ListRequestAminoMsg): _92.ListRequest;
                    toAminoMsg(message: _92.ListRequest): _92.ListRequestAminoMsg;
                    fromProtoMsg(message: _92.ListRequestProtoMsg): _92.ListRequest;
                    toProto(message: _92.ListRequest): Uint8Array;
                    toProtoMsg(message: _92.ListRequest): _92.ListRequestProtoMsg;
                };
                ListRequest_Prefix: {
                    typeUrl: string;
                    encode(message: _92.ListRequest_Prefix, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _92.ListRequest_Prefix;
                    fromJSON(object: any): _92.ListRequest_Prefix;
                    toJSON(message: _92.ListRequest_Prefix): unknown;
                    fromPartial(object: Partial<_92.ListRequest_Prefix>): _92.ListRequest_Prefix;
                    fromSDK(object: _92.ListRequest_PrefixSDKType): _92.ListRequest_Prefix;
                    toSDK(message: _92.ListRequest_Prefix): _92.ListRequest_PrefixSDKType;
                    fromAmino(object: _92.ListRequest_PrefixAmino): _92.ListRequest_Prefix;
                    toAmino(message: _92.ListRequest_Prefix): _92.ListRequest_PrefixAmino;
                    fromAminoMsg(object: _92.ListRequest_PrefixAminoMsg): _92.ListRequest_Prefix;
                    toAminoMsg(message: _92.ListRequest_Prefix): _92.ListRequest_PrefixAminoMsg;
                    fromProtoMsg(message: _92.ListRequest_PrefixProtoMsg): _92.ListRequest_Prefix;
                    toProto(message: _92.ListRequest_Prefix): Uint8Array;
                    toProtoMsg(message: _92.ListRequest_Prefix): _92.ListRequest_PrefixProtoMsg;
                };
                ListRequest_Range: {
                    typeUrl: string;
                    encode(message: _92.ListRequest_Range, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _92.ListRequest_Range;
                    fromJSON(object: any): _92.ListRequest_Range;
                    toJSON(message: _92.ListRequest_Range): unknown;
                    fromPartial(object: Partial<_92.ListRequest_Range>): _92.ListRequest_Range;
                    fromSDK(object: _92.ListRequest_RangeSDKType): _92.ListRequest_Range;
                    toSDK(message: _92.ListRequest_Range): _92.ListRequest_RangeSDKType;
                    fromAmino(object: _92.ListRequest_RangeAmino): _92.ListRequest_Range;
                    toAmino(message: _92.ListRequest_Range): _92.ListRequest_RangeAmino;
                    fromAminoMsg(object: _92.ListRequest_RangeAminoMsg): _92.ListRequest_Range;
                    toAminoMsg(message: _92.ListRequest_Range): _92.ListRequest_RangeAminoMsg;
                    fromProtoMsg(message: _92.ListRequest_RangeProtoMsg): _92.ListRequest_Range;
                    toProto(message: _92.ListRequest_Range): Uint8Array;
                    toProtoMsg(message: _92.ListRequest_Range): _92.ListRequest_RangeProtoMsg;
                };
                ListResponse: {
                    typeUrl: string;
                    encode(message: _92.ListResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _92.ListResponse;
                    fromJSON(object: any): _92.ListResponse;
                    toJSON(message: _92.ListResponse): unknown;
                    fromPartial(object: Partial<_92.ListResponse>): _92.ListResponse;
                    fromSDK(object: _92.ListResponseSDKType): _92.ListResponse;
                    toSDK(message: _92.ListResponse): _92.ListResponseSDKType;
                    fromAmino(object: _92.ListResponseAmino): _92.ListResponse;
                    toAmino(message: _92.ListResponse): _92.ListResponseAmino;
                    fromAminoMsg(object: _92.ListResponseAminoMsg): _92.ListResponse;
                    toAminoMsg(message: _92.ListResponse): _92.ListResponseAminoMsg;
                    fromProtoMsg(message: _92.ListResponseProtoMsg): _92.ListResponse;
                    toProto(message: _92.ListResponse): Uint8Array;
                    toProtoMsg(message: _92.ListResponse): _92.ListResponseProtoMsg;
                };
                IndexValue: {
                    typeUrl: string;
                    encode(message: _92.IndexValue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _92.IndexValue;
                    fromJSON(object: any): _92.IndexValue;
                    toJSON(message: _92.IndexValue): unknown;
                    fromPartial(object: Partial<_92.IndexValue>): _92.IndexValue;
                    fromSDK(object: _92.IndexValueSDKType): _92.IndexValue;
                    toSDK(message: _92.IndexValue): _92.IndexValueSDKType;
                    fromAmino(object: _92.IndexValueAmino): _92.IndexValue;
                    toAmino(message: _92.IndexValue): _92.IndexValueAmino;
                    fromAminoMsg(object: _92.IndexValueAminoMsg): _92.IndexValue;
                    toAminoMsg(message: _92.IndexValue): _92.IndexValueAminoMsg;
                    fromProtoMsg(message: _92.IndexValueProtoMsg): _92.IndexValue;
                    toProto(message: _92.IndexValue): Uint8Array;
                    toProtoMsg(message: _92.IndexValue): _92.IndexValueProtoMsg;
                };
            };
        }
    }
    namespace params {
        namespace module {
            const v1: {
                protobufPackage: "cosmos.params.module.v1";
                Module: {
                    typeUrl: string;
                    encode(_: _93.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _93.Module;
                    fromJSON(_: any): _93.Module;
                    toJSON(_: _93.Module): unknown;
                    fromPartial(_: Partial<_93.Module>): _93.Module;
                    fromSDK(_: _93.ModuleSDKType): _93.Module;
                    toSDK(_: _93.Module): _93.ModuleSDKType;
                    fromAmino(_: _93.ModuleAmino): _93.Module;
                    toAmino(_: _93.Module): _93.ModuleAmino;
                    fromAminoMsg(object: _93.ModuleAminoMsg): _93.Module;
                    toAminoMsg(message: _93.Module): _93.ModuleAminoMsg;
                    fromProtoMsg(message: _93.ModuleProtoMsg): _93.Module;
                    toProto(message: _93.Module): Uint8Array;
                    toProtoMsg(message: _93.Module): _93.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            Query: typeof _207.Query;
            QueryClientImpl: typeof _207.QueryClientImpl;
            LCDQueryClient: typeof _189.LCDQueryClient;
            protobufPackage: "cosmos.params.v1beta1";
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _95.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _95.QueryParamsRequest;
                fromJSON(object: any): _95.QueryParamsRequest;
                toJSON(message: _95.QueryParamsRequest): unknown;
                fromPartial(object: Partial<_95.QueryParamsRequest>): _95.QueryParamsRequest;
                fromSDK(object: _95.QueryParamsRequestSDKType): _95.QueryParamsRequest;
                toSDK(message: _95.QueryParamsRequest): _95.QueryParamsRequestSDKType;
                fromAmino(object: _95.QueryParamsRequestAmino): _95.QueryParamsRequest;
                toAmino(message: _95.QueryParamsRequest): _95.QueryParamsRequestAmino;
                fromAminoMsg(object: _95.QueryParamsRequestAminoMsg): _95.QueryParamsRequest;
                toAminoMsg(message: _95.QueryParamsRequest): _95.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _95.QueryParamsRequestProtoMsg): _95.QueryParamsRequest;
                toProto(message: _95.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _95.QueryParamsRequest): _95.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _95.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _95.QueryParamsResponse;
                fromJSON(object: any): _95.QueryParamsResponse;
                toJSON(message: _95.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_95.QueryParamsResponse>): _95.QueryParamsResponse;
                fromSDK(object: _95.QueryParamsResponseSDKType): _95.QueryParamsResponse;
                toSDK(message: _95.QueryParamsResponse): _95.QueryParamsResponseSDKType;
                fromAmino(object: _95.QueryParamsResponseAmino): _95.QueryParamsResponse;
                toAmino(message: _95.QueryParamsResponse): _95.QueryParamsResponseAmino;
                fromAminoMsg(object: _95.QueryParamsResponseAminoMsg): _95.QueryParamsResponse;
                toAminoMsg(message: _95.QueryParamsResponse): _95.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _95.QueryParamsResponseProtoMsg): _95.QueryParamsResponse;
                toProto(message: _95.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _95.QueryParamsResponse): _95.QueryParamsResponseProtoMsg;
            };
            QuerySubspacesRequest: {
                typeUrl: string;
                encode(_: _95.QuerySubspacesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _95.QuerySubspacesRequest;
                fromJSON(_: any): _95.QuerySubspacesRequest;
                toJSON(_: _95.QuerySubspacesRequest): unknown;
                fromPartial(_: Partial<_95.QuerySubspacesRequest>): _95.QuerySubspacesRequest;
                fromSDK(_: _95.QuerySubspacesRequestSDKType): _95.QuerySubspacesRequest;
                toSDK(_: _95.QuerySubspacesRequest): _95.QuerySubspacesRequestSDKType;
                fromAmino(_: _95.QuerySubspacesRequestAmino): _95.QuerySubspacesRequest;
                toAmino(_: _95.QuerySubspacesRequest): _95.QuerySubspacesRequestAmino;
                fromAminoMsg(object: _95.QuerySubspacesRequestAminoMsg): _95.QuerySubspacesRequest;
                toAminoMsg(message: _95.QuerySubspacesRequest): _95.QuerySubspacesRequestAminoMsg;
                fromProtoMsg(message: _95.QuerySubspacesRequestProtoMsg): _95.QuerySubspacesRequest;
                toProto(message: _95.QuerySubspacesRequest): Uint8Array;
                toProtoMsg(message: _95.QuerySubspacesRequest): _95.QuerySubspacesRequestProtoMsg;
            };
            QuerySubspacesResponse: {
                typeUrl: string;
                encode(message: _95.QuerySubspacesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _95.QuerySubspacesResponse;
                fromJSON(object: any): _95.QuerySubspacesResponse;
                toJSON(message: _95.QuerySubspacesResponse): unknown;
                fromPartial(object: Partial<_95.QuerySubspacesResponse>): _95.QuerySubspacesResponse;
                fromSDK(object: _95.QuerySubspacesResponseSDKType): _95.QuerySubspacesResponse;
                toSDK(message: _95.QuerySubspacesResponse): _95.QuerySubspacesResponseSDKType;
                fromAmino(object: _95.QuerySubspacesResponseAmino): _95.QuerySubspacesResponse;
                toAmino(message: _95.QuerySubspacesResponse): _95.QuerySubspacesResponseAmino;
                fromAminoMsg(object: _95.QuerySubspacesResponseAminoMsg): _95.QuerySubspacesResponse;
                toAminoMsg(message: _95.QuerySubspacesResponse): _95.QuerySubspacesResponseAminoMsg;
                fromProtoMsg(message: _95.QuerySubspacesResponseProtoMsg): _95.QuerySubspacesResponse;
                toProto(message: _95.QuerySubspacesResponse): Uint8Array;
                toProtoMsg(message: _95.QuerySubspacesResponse): _95.QuerySubspacesResponseProtoMsg;
            };
            Subspace: {
                typeUrl: string;
                encode(message: _95.Subspace, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _95.Subspace;
                fromJSON(object: any): _95.Subspace;
                toJSON(message: _95.Subspace): unknown;
                fromPartial(object: Partial<_95.Subspace>): _95.Subspace;
                fromSDK(object: _95.SubspaceSDKType): _95.Subspace;
                toSDK(message: _95.Subspace): _95.SubspaceSDKType;
                fromAmino(object: _95.SubspaceAmino): _95.Subspace;
                toAmino(message: _95.Subspace): _95.SubspaceAmino;
                fromAminoMsg(object: _95.SubspaceAminoMsg): _95.Subspace;
                toAminoMsg(message: _95.Subspace): _95.SubspaceAminoMsg;
                fromProtoMsg(message: _95.SubspaceProtoMsg): _95.Subspace;
                toProto(message: _95.Subspace): Uint8Array;
                toProtoMsg(message: _95.Subspace): _95.SubspaceProtoMsg;
            };
            ParameterChangeProposal: {
                typeUrl: string;
                encode(message: _94.ParameterChangeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _94.ParameterChangeProposal;
                fromJSON(object: any): _94.ParameterChangeProposal;
                toJSON(message: _94.ParameterChangeProposal): unknown;
                fromPartial(object: Partial<_94.ParameterChangeProposal>): _94.ParameterChangeProposal;
                fromSDK(object: _94.ParameterChangeProposalSDKType): _94.ParameterChangeProposal;
                toSDK(message: _94.ParameterChangeProposal): _94.ParameterChangeProposalSDKType;
                fromAmino(object: _94.ParameterChangeProposalAmino): _94.ParameterChangeProposal;
                toAmino(message: _94.ParameterChangeProposal): _94.ParameterChangeProposalAmino;
                fromAminoMsg(object: _94.ParameterChangeProposalAminoMsg): _94.ParameterChangeProposal;
                toAminoMsg(message: _94.ParameterChangeProposal): _94.ParameterChangeProposalAminoMsg;
                fromProtoMsg(message: _94.ParameterChangeProposalProtoMsg): _94.ParameterChangeProposal;
                toProto(message: _94.ParameterChangeProposal): Uint8Array;
                toProtoMsg(message: _94.ParameterChangeProposal): _94.ParameterChangeProposalProtoMsg;
            };
            ParamChange: {
                typeUrl: string;
                encode(message: _94.ParamChange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _94.ParamChange;
                fromJSON(object: any): _94.ParamChange;
                toJSON(message: _94.ParamChange): unknown;
                fromPartial(object: Partial<_94.ParamChange>): _94.ParamChange;
                fromSDK(object: _94.ParamChangeSDKType): _94.ParamChange;
                toSDK(message: _94.ParamChange): _94.ParamChangeSDKType;
                fromAmino(object: _94.ParamChangeAmino): _94.ParamChange;
                toAmino(message: _94.ParamChange): _94.ParamChangeAmino;
                fromAminoMsg(object: _94.ParamChangeAminoMsg): _94.ParamChange;
                toAminoMsg(message: _94.ParamChange): _94.ParamChangeAminoMsg;
                fromProtoMsg(message: _94.ParamChangeProtoMsg): _94.ParamChange;
                toProto(message: _94.ParamChange): Uint8Array;
                toProtoMsg(message: _94.ParamChange): _94.ParamChangeProtoMsg;
            };
        };
    }
    namespace query {
        const v1: {};
    }
    namespace reflection {
        const v1: {
            protobufPackage: "cosmos.reflection.v1";
            FileDescriptorsRequest: {
                typeUrl: string;
                encode(_: _97.FileDescriptorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _97.FileDescriptorsRequest;
                fromJSON(_: any): _97.FileDescriptorsRequest;
                toJSON(_: _97.FileDescriptorsRequest): unknown;
                fromPartial(_: Partial<_97.FileDescriptorsRequest>): _97.FileDescriptorsRequest;
                fromSDK(_: _97.FileDescriptorsRequestSDKType): _97.FileDescriptorsRequest;
                toSDK(_: _97.FileDescriptorsRequest): _97.FileDescriptorsRequestSDKType;
                fromAmino(_: _97.FileDescriptorsRequestAmino): _97.FileDescriptorsRequest;
                toAmino(_: _97.FileDescriptorsRequest): _97.FileDescriptorsRequestAmino;
                fromAminoMsg(object: _97.FileDescriptorsRequestAminoMsg): _97.FileDescriptorsRequest;
                toAminoMsg(message: _97.FileDescriptorsRequest): _97.FileDescriptorsRequestAminoMsg;
                fromProtoMsg(message: _97.FileDescriptorsRequestProtoMsg): _97.FileDescriptorsRequest;
                toProto(message: _97.FileDescriptorsRequest): Uint8Array;
                toProtoMsg(message: _97.FileDescriptorsRequest): _97.FileDescriptorsRequestProtoMsg;
            };
            FileDescriptorsResponse: {
                typeUrl: string;
                encode(message: _97.FileDescriptorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _97.FileDescriptorsResponse;
                fromJSON(object: any): _97.FileDescriptorsResponse;
                toJSON(message: _97.FileDescriptorsResponse): unknown;
                fromPartial(object: Partial<_97.FileDescriptorsResponse>): _97.FileDescriptorsResponse;
                fromSDK(object: _97.FileDescriptorsResponseSDKType): _97.FileDescriptorsResponse;
                toSDK(message: _97.FileDescriptorsResponse): _97.FileDescriptorsResponseSDKType;
                fromAmino(object: _97.FileDescriptorsResponseAmino): _97.FileDescriptorsResponse;
                toAmino(message: _97.FileDescriptorsResponse): _97.FileDescriptorsResponseAmino;
                fromAminoMsg(object: _97.FileDescriptorsResponseAminoMsg): _97.FileDescriptorsResponse;
                toAminoMsg(message: _97.FileDescriptorsResponse): _97.FileDescriptorsResponseAminoMsg;
                fromProtoMsg(message: _97.FileDescriptorsResponseProtoMsg): _97.FileDescriptorsResponse;
                toProto(message: _97.FileDescriptorsResponse): Uint8Array;
                toProtoMsg(message: _97.FileDescriptorsResponse): _97.FileDescriptorsResponseProtoMsg;
            };
        };
    }
    namespace slashing {
        namespace module {
            const v1: {
                protobufPackage: "cosmos.slashing.module.v1";
                Module: {
                    typeUrl: string;
                    encode(message: _98.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _98.Module;
                    fromJSON(object: any): _98.Module;
                    toJSON(message: _98.Module): unknown;
                    fromPartial(object: Partial<_98.Module>): _98.Module;
                    fromSDK(object: _98.ModuleSDKType): _98.Module;
                    toSDK(message: _98.Module): _98.ModuleSDKType;
                    fromAmino(object: _98.ModuleAmino): _98.Module;
                    toAmino(message: _98.Module): _98.ModuleAmino;
                    fromAminoMsg(object: _98.ModuleAminoMsg): _98.Module;
                    toAminoMsg(message: _98.Module): _98.ModuleAminoMsg;
                    fromProtoMsg(message: _98.ModuleProtoMsg): _98.Module;
                    toProto(message: _98.Module): Uint8Array;
                    toProtoMsg(message: _98.Module): _98.ModuleProtoMsg;
                };
            };
        }
    }
    namespace staking {
        namespace module {
            const v1: {
                protobufPackage: "cosmos.staking.module.v1";
                Module: {
                    typeUrl: string;
                    encode(message: _99.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _99.Module;
                    fromJSON(object: any): _99.Module;
                    toJSON(message: _99.Module): unknown;
                    fromPartial(object: Partial<_99.Module>): _99.Module;
                    fromSDK(object: _99.ModuleSDKType): _99.Module;
                    toSDK(message: _99.Module): _99.ModuleSDKType;
                    fromAmino(object: _99.ModuleAmino): _99.Module;
                    toAmino(message: _99.Module): _99.ModuleAmino;
                    fromAminoMsg(object: _99.ModuleAminoMsg): _99.Module;
                    toAminoMsg(message: _99.Module): _99.ModuleAminoMsg;
                    fromProtoMsg(message: _99.ModuleProtoMsg): _99.Module;
                    toProto(message: _99.Module): Uint8Array;
                    toProtoMsg(message: _99.Module): _99.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            Msg: typeof _222.Msg;
            Query: typeof _208.Query;
            QueryClientImpl: typeof _208.QueryClientImpl;
            LCDQueryClient: typeof _190.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _104.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _104.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _104.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _104.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _104.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUnbondingDelegation(value: _104.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _104.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _104.MsgCreateValidator): {
                        typeUrl: string;
                        value: _104.MsgCreateValidator;
                    };
                    editValidator(value: _104.MsgEditValidator): {
                        typeUrl: string;
                        value: _104.MsgEditValidator;
                    };
                    delegate(value: _104.MsgDelegate): {
                        typeUrl: string;
                        value: _104.MsgDelegate;
                    };
                    beginRedelegate(value: _104.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _104.MsgBeginRedelegate;
                    };
                    undelegate(value: _104.MsgUndelegate): {
                        typeUrl: string;
                        value: _104.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _104.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _104.MsgCancelUnbondingDelegation;
                    };
                    updateParams(value: _104.MsgUpdateParams): {
                        typeUrl: string;
                        value: _104.MsgUpdateParams;
                    };
                };
                toJSON: {
                    createValidator(value: _104.MsgCreateValidator): {
                        typeUrl: string;
                        value: unknown;
                    };
                    editValidator(value: _104.MsgEditValidator): {
                        typeUrl: string;
                        value: unknown;
                    };
                    delegate(value: _104.MsgDelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                    beginRedelegate(value: _104.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                    undelegate(value: _104.MsgUndelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                    cancelUnbondingDelegation(value: _104.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateParams(value: _104.MsgUpdateParams): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _104.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _104.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _104.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _104.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _104.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: any): {
                        typeUrl: string;
                        value: _104.MsgCancelUnbondingDelegation;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _104.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    createValidator(value: _104.MsgCreateValidator): {
                        typeUrl: string;
                        value: _104.MsgCreateValidator;
                    };
                    editValidator(value: _104.MsgEditValidator): {
                        typeUrl: string;
                        value: _104.MsgEditValidator;
                    };
                    delegate(value: _104.MsgDelegate): {
                        typeUrl: string;
                        value: _104.MsgDelegate;
                    };
                    beginRedelegate(value: _104.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _104.MsgBeginRedelegate;
                    };
                    undelegate(value: _104.MsgUndelegate): {
                        typeUrl: string;
                        value: _104.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _104.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _104.MsgCancelUnbondingDelegation;
                    };
                    updateParams(value: _104.MsgUpdateParams): {
                        typeUrl: string;
                        value: _104.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: (message: _104.MsgCreateValidator) => _104.MsgCreateValidatorAmino;
                    fromAmino: (object: _104.MsgCreateValidatorAmino) => _104.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: (message: _104.MsgEditValidator) => _104.MsgEditValidatorAmino;
                    fromAmino: (object: _104.MsgEditValidatorAmino) => _104.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: (message: _104.MsgDelegate) => _104.MsgDelegateAmino;
                    fromAmino: (object: _104.MsgDelegateAmino) => _104.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: (message: _104.MsgBeginRedelegate) => _104.MsgBeginRedelegateAmino;
                    fromAmino: (object: _104.MsgBeginRedelegateAmino) => _104.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: (message: _104.MsgUndelegate) => _104.MsgUndelegateAmino;
                    fromAmino: (object: _104.MsgUndelegateAmino) => _104.MsgUndelegate;
                };
                "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation": {
                    aminoType: string;
                    toAmino: (message: _104.MsgCancelUnbondingDelegation) => _104.MsgCancelUnbondingDelegationAmino;
                    fromAmino: (object: _104.MsgCancelUnbondingDelegationAmino) => _104.MsgCancelUnbondingDelegation;
                };
                "/cosmos.staking.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _104.MsgUpdateParams) => _104.MsgUpdateParamsAmino;
                    fromAmino: (object: _104.MsgUpdateParamsAmino) => _104.MsgUpdateParams;
                };
            };
            protobufPackage: "cosmos.staking.v1beta1";
            MsgCreateValidator: {
                typeUrl: string;
                encode(message: _104.MsgCreateValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _104.MsgCreateValidator;
                fromJSON(object: any): _104.MsgCreateValidator;
                toJSON(message: _104.MsgCreateValidator): unknown;
                fromPartial(object: Partial<_104.MsgCreateValidator>): _104.MsgCreateValidator;
                fromSDK(object: _104.MsgCreateValidatorSDKType): _104.MsgCreateValidator;
                toSDK(message: _104.MsgCreateValidator): _104.MsgCreateValidatorSDKType;
                fromAmino(object: _104.MsgCreateValidatorAmino): _104.MsgCreateValidator;
                toAmino(message: _104.MsgCreateValidator): _104.MsgCreateValidatorAmino;
                fromAminoMsg(object: _104.MsgCreateValidatorAminoMsg): _104.MsgCreateValidator;
                toAminoMsg(message: _104.MsgCreateValidator): _104.MsgCreateValidatorAminoMsg;
                fromProtoMsg(message: _104.MsgCreateValidatorProtoMsg): _104.MsgCreateValidator;
                toProto(message: _104.MsgCreateValidator): Uint8Array;
                toProtoMsg(message: _104.MsgCreateValidator): _104.MsgCreateValidatorProtoMsg;
            };
            MsgCreateValidatorResponse: {
                typeUrl: string;
                encode(_: _104.MsgCreateValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _104.MsgCreateValidatorResponse;
                fromJSON(_: any): _104.MsgCreateValidatorResponse;
                toJSON(_: _104.MsgCreateValidatorResponse): unknown;
                fromPartial(_: Partial<_104.MsgCreateValidatorResponse>): _104.MsgCreateValidatorResponse;
                fromSDK(_: _104.MsgCreateValidatorResponseSDKType): _104.MsgCreateValidatorResponse;
                toSDK(_: _104.MsgCreateValidatorResponse): _104.MsgCreateValidatorResponseSDKType;
                fromAmino(_: _104.MsgCreateValidatorResponseAmino): _104.MsgCreateValidatorResponse;
                toAmino(_: _104.MsgCreateValidatorResponse): _104.MsgCreateValidatorResponseAmino;
                fromAminoMsg(object: _104.MsgCreateValidatorResponseAminoMsg): _104.MsgCreateValidatorResponse;
                toAminoMsg(message: _104.MsgCreateValidatorResponse): _104.MsgCreateValidatorResponseAminoMsg;
                fromProtoMsg(message: _104.MsgCreateValidatorResponseProtoMsg): _104.MsgCreateValidatorResponse;
                toProto(message: _104.MsgCreateValidatorResponse): Uint8Array;
                toProtoMsg(message: _104.MsgCreateValidatorResponse): _104.MsgCreateValidatorResponseProtoMsg;
            };
            MsgEditValidator: {
                typeUrl: string;
                encode(message: _104.MsgEditValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _104.MsgEditValidator;
                fromJSON(object: any): _104.MsgEditValidator;
                toJSON(message: _104.MsgEditValidator): unknown;
                fromPartial(object: Partial<_104.MsgEditValidator>): _104.MsgEditValidator;
                fromSDK(object: _104.MsgEditValidatorSDKType): _104.MsgEditValidator;
                toSDK(message: _104.MsgEditValidator): _104.MsgEditValidatorSDKType;
                fromAmino(object: _104.MsgEditValidatorAmino): _104.MsgEditValidator;
                toAmino(message: _104.MsgEditValidator): _104.MsgEditValidatorAmino;
                fromAminoMsg(object: _104.MsgEditValidatorAminoMsg): _104.MsgEditValidator;
                toAminoMsg(message: _104.MsgEditValidator): _104.MsgEditValidatorAminoMsg;
                fromProtoMsg(message: _104.MsgEditValidatorProtoMsg): _104.MsgEditValidator;
                toProto(message: _104.MsgEditValidator): Uint8Array;
                toProtoMsg(message: _104.MsgEditValidator): _104.MsgEditValidatorProtoMsg;
            };
            MsgEditValidatorResponse: {
                typeUrl: string;
                encode(_: _104.MsgEditValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _104.MsgEditValidatorResponse;
                fromJSON(_: any): _104.MsgEditValidatorResponse;
                toJSON(_: _104.MsgEditValidatorResponse): unknown;
                fromPartial(_: Partial<_104.MsgEditValidatorResponse>): _104.MsgEditValidatorResponse;
                fromSDK(_: _104.MsgEditValidatorResponseSDKType): _104.MsgEditValidatorResponse;
                toSDK(_: _104.MsgEditValidatorResponse): _104.MsgEditValidatorResponseSDKType;
                fromAmino(_: _104.MsgEditValidatorResponseAmino): _104.MsgEditValidatorResponse;
                toAmino(_: _104.MsgEditValidatorResponse): _104.MsgEditValidatorResponseAmino;
                fromAminoMsg(object: _104.MsgEditValidatorResponseAminoMsg): _104.MsgEditValidatorResponse;
                toAminoMsg(message: _104.MsgEditValidatorResponse): _104.MsgEditValidatorResponseAminoMsg;
                fromProtoMsg(message: _104.MsgEditValidatorResponseProtoMsg): _104.MsgEditValidatorResponse;
                toProto(message: _104.MsgEditValidatorResponse): Uint8Array;
                toProtoMsg(message: _104.MsgEditValidatorResponse): _104.MsgEditValidatorResponseProtoMsg;
            };
            MsgDelegate: {
                typeUrl: string;
                encode(message: _104.MsgDelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _104.MsgDelegate;
                fromJSON(object: any): _104.MsgDelegate;
                toJSON(message: _104.MsgDelegate): unknown;
                fromPartial(object: Partial<_104.MsgDelegate>): _104.MsgDelegate;
                fromSDK(object: _104.MsgDelegateSDKType): _104.MsgDelegate;
                toSDK(message: _104.MsgDelegate): _104.MsgDelegateSDKType;
                fromAmino(object: _104.MsgDelegateAmino): _104.MsgDelegate;
                toAmino(message: _104.MsgDelegate): _104.MsgDelegateAmino;
                fromAminoMsg(object: _104.MsgDelegateAminoMsg): _104.MsgDelegate;
                toAminoMsg(message: _104.MsgDelegate): _104.MsgDelegateAminoMsg;
                fromProtoMsg(message: _104.MsgDelegateProtoMsg): _104.MsgDelegate;
                toProto(message: _104.MsgDelegate): Uint8Array;
                toProtoMsg(message: _104.MsgDelegate): _104.MsgDelegateProtoMsg;
            };
            MsgDelegateResponse: {
                typeUrl: string;
                encode(_: _104.MsgDelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _104.MsgDelegateResponse;
                fromJSON(_: any): _104.MsgDelegateResponse;
                toJSON(_: _104.MsgDelegateResponse): unknown;
                fromPartial(_: Partial<_104.MsgDelegateResponse>): _104.MsgDelegateResponse;
                fromSDK(_: _104.MsgDelegateResponseSDKType): _104.MsgDelegateResponse;
                toSDK(_: _104.MsgDelegateResponse): _104.MsgDelegateResponseSDKType;
                fromAmino(_: _104.MsgDelegateResponseAmino): _104.MsgDelegateResponse;
                toAmino(_: _104.MsgDelegateResponse): _104.MsgDelegateResponseAmino;
                fromAminoMsg(object: _104.MsgDelegateResponseAminoMsg): _104.MsgDelegateResponse;
                toAminoMsg(message: _104.MsgDelegateResponse): _104.MsgDelegateResponseAminoMsg;
                fromProtoMsg(message: _104.MsgDelegateResponseProtoMsg): _104.MsgDelegateResponse;
                toProto(message: _104.MsgDelegateResponse): Uint8Array;
                toProtoMsg(message: _104.MsgDelegateResponse): _104.MsgDelegateResponseProtoMsg;
            };
            MsgBeginRedelegate: {
                typeUrl: string;
                encode(message: _104.MsgBeginRedelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _104.MsgBeginRedelegate;
                fromJSON(object: any): _104.MsgBeginRedelegate;
                toJSON(message: _104.MsgBeginRedelegate): unknown;
                fromPartial(object: Partial<_104.MsgBeginRedelegate>): _104.MsgBeginRedelegate;
                fromSDK(object: _104.MsgBeginRedelegateSDKType): _104.MsgBeginRedelegate;
                toSDK(message: _104.MsgBeginRedelegate): _104.MsgBeginRedelegateSDKType;
                fromAmino(object: _104.MsgBeginRedelegateAmino): _104.MsgBeginRedelegate;
                toAmino(message: _104.MsgBeginRedelegate): _104.MsgBeginRedelegateAmino;
                fromAminoMsg(object: _104.MsgBeginRedelegateAminoMsg): _104.MsgBeginRedelegate;
                toAminoMsg(message: _104.MsgBeginRedelegate): _104.MsgBeginRedelegateAminoMsg;
                fromProtoMsg(message: _104.MsgBeginRedelegateProtoMsg): _104.MsgBeginRedelegate;
                toProto(message: _104.MsgBeginRedelegate): Uint8Array;
                toProtoMsg(message: _104.MsgBeginRedelegate): _104.MsgBeginRedelegateProtoMsg;
            };
            MsgBeginRedelegateResponse: {
                typeUrl: string;
                encode(message: _104.MsgBeginRedelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _104.MsgBeginRedelegateResponse;
                fromJSON(object: any): _104.MsgBeginRedelegateResponse;
                toJSON(message: _104.MsgBeginRedelegateResponse): unknown;
                fromPartial(object: Partial<_104.MsgBeginRedelegateResponse>): _104.MsgBeginRedelegateResponse;
                fromSDK(object: _104.MsgBeginRedelegateResponseSDKType): _104.MsgBeginRedelegateResponse;
                toSDK(message: _104.MsgBeginRedelegateResponse): _104.MsgBeginRedelegateResponseSDKType;
                fromAmino(object: _104.MsgBeginRedelegateResponseAmino): _104.MsgBeginRedelegateResponse;
                toAmino(message: _104.MsgBeginRedelegateResponse): _104.MsgBeginRedelegateResponseAmino;
                fromAminoMsg(object: _104.MsgBeginRedelegateResponseAminoMsg): _104.MsgBeginRedelegateResponse;
                toAminoMsg(message: _104.MsgBeginRedelegateResponse): _104.MsgBeginRedelegateResponseAminoMsg;
                fromProtoMsg(message: _104.MsgBeginRedelegateResponseProtoMsg): _104.MsgBeginRedelegateResponse;
                toProto(message: _104.MsgBeginRedelegateResponse): Uint8Array;
                toProtoMsg(message: _104.MsgBeginRedelegateResponse): _104.MsgBeginRedelegateResponseProtoMsg;
            };
            MsgUndelegate: {
                typeUrl: string;
                encode(message: _104.MsgUndelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _104.MsgUndelegate;
                fromJSON(object: any): _104.MsgUndelegate;
                toJSON(message: _104.MsgUndelegate): unknown;
                fromPartial(object: Partial<_104.MsgUndelegate>): _104.MsgUndelegate;
                fromSDK(object: _104.MsgUndelegateSDKType): _104.MsgUndelegate;
                toSDK(message: _104.MsgUndelegate): _104.MsgUndelegateSDKType;
                fromAmino(object: _104.MsgUndelegateAmino): _104.MsgUndelegate;
                toAmino(message: _104.MsgUndelegate): _104.MsgUndelegateAmino;
                fromAminoMsg(object: _104.MsgUndelegateAminoMsg): _104.MsgUndelegate;
                toAminoMsg(message: _104.MsgUndelegate): _104.MsgUndelegateAminoMsg;
                fromProtoMsg(message: _104.MsgUndelegateProtoMsg): _104.MsgUndelegate;
                toProto(message: _104.MsgUndelegate): Uint8Array;
                toProtoMsg(message: _104.MsgUndelegate): _104.MsgUndelegateProtoMsg;
            };
            MsgUndelegateResponse: {
                typeUrl: string;
                encode(message: _104.MsgUndelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _104.MsgUndelegateResponse;
                fromJSON(object: any): _104.MsgUndelegateResponse;
                toJSON(message: _104.MsgUndelegateResponse): unknown;
                fromPartial(object: Partial<_104.MsgUndelegateResponse>): _104.MsgUndelegateResponse;
                fromSDK(object: _104.MsgUndelegateResponseSDKType): _104.MsgUndelegateResponse;
                toSDK(message: _104.MsgUndelegateResponse): _104.MsgUndelegateResponseSDKType;
                fromAmino(object: _104.MsgUndelegateResponseAmino): _104.MsgUndelegateResponse;
                toAmino(message: _104.MsgUndelegateResponse): _104.MsgUndelegateResponseAmino;
                fromAminoMsg(object: _104.MsgUndelegateResponseAminoMsg): _104.MsgUndelegateResponse;
                toAminoMsg(message: _104.MsgUndelegateResponse): _104.MsgUndelegateResponseAminoMsg;
                fromProtoMsg(message: _104.MsgUndelegateResponseProtoMsg): _104.MsgUndelegateResponse;
                toProto(message: _104.MsgUndelegateResponse): Uint8Array;
                toProtoMsg(message: _104.MsgUndelegateResponse): _104.MsgUndelegateResponseProtoMsg;
            };
            MsgCancelUnbondingDelegation: {
                typeUrl: string;
                encode(message: _104.MsgCancelUnbondingDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _104.MsgCancelUnbondingDelegation;
                fromJSON(object: any): _104.MsgCancelUnbondingDelegation;
                toJSON(message: _104.MsgCancelUnbondingDelegation): unknown;
                fromPartial(object: Partial<_104.MsgCancelUnbondingDelegation>): _104.MsgCancelUnbondingDelegation;
                fromSDK(object: _104.MsgCancelUnbondingDelegationSDKType): _104.MsgCancelUnbondingDelegation;
                toSDK(message: _104.MsgCancelUnbondingDelegation): _104.MsgCancelUnbondingDelegationSDKType;
                fromAmino(object: _104.MsgCancelUnbondingDelegationAmino): _104.MsgCancelUnbondingDelegation;
                toAmino(message: _104.MsgCancelUnbondingDelegation): _104.MsgCancelUnbondingDelegationAmino;
                fromAminoMsg(object: _104.MsgCancelUnbondingDelegationAminoMsg): _104.MsgCancelUnbondingDelegation;
                toAminoMsg(message: _104.MsgCancelUnbondingDelegation): _104.MsgCancelUnbondingDelegationAminoMsg;
                fromProtoMsg(message: _104.MsgCancelUnbondingDelegationProtoMsg): _104.MsgCancelUnbondingDelegation;
                toProto(message: _104.MsgCancelUnbondingDelegation): Uint8Array;
                toProtoMsg(message: _104.MsgCancelUnbondingDelegation): _104.MsgCancelUnbondingDelegationProtoMsg;
            };
            MsgCancelUnbondingDelegationResponse: {
                typeUrl: string;
                encode(_: _104.MsgCancelUnbondingDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _104.MsgCancelUnbondingDelegationResponse;
                fromJSON(_: any): _104.MsgCancelUnbondingDelegationResponse;
                toJSON(_: _104.MsgCancelUnbondingDelegationResponse): unknown;
                fromPartial(_: Partial<_104.MsgCancelUnbondingDelegationResponse>): _104.MsgCancelUnbondingDelegationResponse;
                fromSDK(_: _104.MsgCancelUnbondingDelegationResponseSDKType): _104.MsgCancelUnbondingDelegationResponse;
                toSDK(_: _104.MsgCancelUnbondingDelegationResponse): _104.MsgCancelUnbondingDelegationResponseSDKType;
                fromAmino(_: _104.MsgCancelUnbondingDelegationResponseAmino): _104.MsgCancelUnbondingDelegationResponse;
                toAmino(_: _104.MsgCancelUnbondingDelegationResponse): _104.MsgCancelUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _104.MsgCancelUnbondingDelegationResponseAminoMsg): _104.MsgCancelUnbondingDelegationResponse;
                toAminoMsg(message: _104.MsgCancelUnbondingDelegationResponse): _104.MsgCancelUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _104.MsgCancelUnbondingDelegationResponseProtoMsg): _104.MsgCancelUnbondingDelegationResponse;
                toProto(message: _104.MsgCancelUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _104.MsgCancelUnbondingDelegationResponse): _104.MsgCancelUnbondingDelegationResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _104.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _104.MsgUpdateParams;
                fromJSON(object: any): _104.MsgUpdateParams;
                toJSON(message: _104.MsgUpdateParams): unknown;
                fromPartial(object: Partial<_104.MsgUpdateParams>): _104.MsgUpdateParams;
                fromSDK(object: _104.MsgUpdateParamsSDKType): _104.MsgUpdateParams;
                toSDK(message: _104.MsgUpdateParams): _104.MsgUpdateParamsSDKType;
                fromAmino(object: _104.MsgUpdateParamsAmino): _104.MsgUpdateParams;
                toAmino(message: _104.MsgUpdateParams): _104.MsgUpdateParamsAmino;
                fromAminoMsg(object: _104.MsgUpdateParamsAminoMsg): _104.MsgUpdateParams;
                toAminoMsg(message: _104.MsgUpdateParams): _104.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _104.MsgUpdateParamsProtoMsg): _104.MsgUpdateParams;
                toProto(message: _104.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _104.MsgUpdateParams): _104.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _104.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _104.MsgUpdateParamsResponse;
                fromJSON(_: any): _104.MsgUpdateParamsResponse;
                toJSON(_: _104.MsgUpdateParamsResponse): unknown;
                fromPartial(_: Partial<_104.MsgUpdateParamsResponse>): _104.MsgUpdateParamsResponse;
                fromSDK(_: _104.MsgUpdateParamsResponseSDKType): _104.MsgUpdateParamsResponse;
                toSDK(_: _104.MsgUpdateParamsResponse): _104.MsgUpdateParamsResponseSDKType;
                fromAmino(_: _104.MsgUpdateParamsResponseAmino): _104.MsgUpdateParamsResponse;
                toAmino(_: _104.MsgUpdateParamsResponse): _104.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _104.MsgUpdateParamsResponseAminoMsg): _104.MsgUpdateParamsResponse;
                toAminoMsg(message: _104.MsgUpdateParamsResponse): _104.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _104.MsgUpdateParamsResponseProtoMsg): _104.MsgUpdateParamsResponse;
                toProto(message: _104.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _104.MsgUpdateParamsResponse): _104.MsgUpdateParamsResponseProtoMsg;
            };
            Cosmos_cryptoPubKey_InterfaceDecoder: (input: import("..").BinaryReader | Uint8Array) => import("../google/protobuf/any").Any;
            Cosmos_cryptoPubKey_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("cosmjs-types/google/protobuf/any").Any;
            Cosmos_cryptoPubKey_ToAmino: (content: import("../google/protobuf/any").Any) => import("@cosmjs/amino").Pubkey;
            bondStatusFromJSON(object: any): _103.BondStatus;
            bondStatusToJSON(object: _103.BondStatus): string;
            infractionFromJSON(object: any): _103.Infraction;
            infractionToJSON(object: _103.Infraction): string;
            BondStatus: typeof _103.BondStatus;
            BondStatusSDKType: typeof _103.BondStatus;
            BondStatusAmino: typeof _103.BondStatus;
            Infraction: typeof _103.Infraction;
            InfractionSDKType: typeof _103.Infraction;
            InfractionAmino: typeof _103.Infraction;
            HistoricalInfo: {
                typeUrl: string;
                encode(message: _103.HistoricalInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _103.HistoricalInfo;
                fromJSON(object: any): _103.HistoricalInfo;
                toJSON(message: _103.HistoricalInfo): unknown;
                fromPartial(object: Partial<_103.HistoricalInfo>): _103.HistoricalInfo;
                fromSDK(object: _103.HistoricalInfoSDKType): _103.HistoricalInfo;
                toSDK(message: _103.HistoricalInfo): _103.HistoricalInfoSDKType;
                fromAmino(object: _103.HistoricalInfoAmino): _103.HistoricalInfo;
                toAmino(message: _103.HistoricalInfo): _103.HistoricalInfoAmino;
                fromAminoMsg(object: _103.HistoricalInfoAminoMsg): _103.HistoricalInfo;
                toAminoMsg(message: _103.HistoricalInfo): _103.HistoricalInfoAminoMsg;
                fromProtoMsg(message: _103.HistoricalInfoProtoMsg): _103.HistoricalInfo;
                toProto(message: _103.HistoricalInfo): Uint8Array;
                toProtoMsg(message: _103.HistoricalInfo): _103.HistoricalInfoProtoMsg;
            };
            CommissionRates: {
                typeUrl: string;
                encode(message: _103.CommissionRates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _103.CommissionRates;
                fromJSON(object: any): _103.CommissionRates;
                toJSON(message: _103.CommissionRates): unknown;
                fromPartial(object: Partial<_103.CommissionRates>): _103.CommissionRates;
                fromSDK(object: _103.CommissionRatesSDKType): _103.CommissionRates;
                toSDK(message: _103.CommissionRates): _103.CommissionRatesSDKType;
                fromAmino(object: _103.CommissionRatesAmino): _103.CommissionRates;
                toAmino(message: _103.CommissionRates): _103.CommissionRatesAmino;
                fromAminoMsg(object: _103.CommissionRatesAminoMsg): _103.CommissionRates;
                toAminoMsg(message: _103.CommissionRates): _103.CommissionRatesAminoMsg;
                fromProtoMsg(message: _103.CommissionRatesProtoMsg): _103.CommissionRates;
                toProto(message: _103.CommissionRates): Uint8Array;
                toProtoMsg(message: _103.CommissionRates): _103.CommissionRatesProtoMsg;
            };
            Commission: {
                typeUrl: string;
                encode(message: _103.Commission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _103.Commission;
                fromJSON(object: any): _103.Commission;
                toJSON(message: _103.Commission): unknown;
                fromPartial(object: Partial<_103.Commission>): _103.Commission;
                fromSDK(object: _103.CommissionSDKType): _103.Commission;
                toSDK(message: _103.Commission): _103.CommissionSDKType;
                fromAmino(object: _103.CommissionAmino): _103.Commission;
                toAmino(message: _103.Commission): _103.CommissionAmino;
                fromAminoMsg(object: _103.CommissionAminoMsg): _103.Commission;
                toAminoMsg(message: _103.Commission): _103.CommissionAminoMsg;
                fromProtoMsg(message: _103.CommissionProtoMsg): _103.Commission;
                toProto(message: _103.Commission): Uint8Array;
                toProtoMsg(message: _103.Commission): _103.CommissionProtoMsg;
            };
            Description: {
                typeUrl: string;
                encode(message: _103.Description, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _103.Description;
                fromJSON(object: any): _103.Description;
                toJSON(message: _103.Description): unknown;
                fromPartial(object: Partial<_103.Description>): _103.Description;
                fromSDK(object: _103.DescriptionSDKType): _103.Description;
                toSDK(message: _103.Description): _103.DescriptionSDKType;
                fromAmino(object: _103.DescriptionAmino): _103.Description;
                toAmino(message: _103.Description): _103.DescriptionAmino;
                fromAminoMsg(object: _103.DescriptionAminoMsg): _103.Description;
                toAminoMsg(message: _103.Description): _103.DescriptionAminoMsg;
                fromProtoMsg(message: _103.DescriptionProtoMsg): _103.Description;
                toProto(message: _103.Description): Uint8Array;
                toProtoMsg(message: _103.Description): _103.DescriptionProtoMsg;
            };
            Validator: {
                typeUrl: string;
                encode(message: _103.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _103.Validator;
                fromJSON(object: any): _103.Validator;
                toJSON(message: _103.Validator): unknown;
                fromPartial(object: Partial<_103.Validator>): _103.Validator;
                fromSDK(object: _103.ValidatorSDKType): _103.Validator;
                toSDK(message: _103.Validator): _103.ValidatorSDKType;
                fromAmino(object: _103.ValidatorAmino): _103.Validator;
                toAmino(message: _103.Validator): _103.ValidatorAmino;
                fromAminoMsg(object: _103.ValidatorAminoMsg): _103.Validator;
                toAminoMsg(message: _103.Validator): _103.ValidatorAminoMsg;
                fromProtoMsg(message: _103.ValidatorProtoMsg): _103.Validator;
                toProto(message: _103.Validator): Uint8Array;
                toProtoMsg(message: _103.Validator): _103.ValidatorProtoMsg;
            };
            ValAddresses: {
                typeUrl: string;
                encode(message: _103.ValAddresses, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _103.ValAddresses;
                fromJSON(object: any): _103.ValAddresses;
                toJSON(message: _103.ValAddresses): unknown;
                fromPartial(object: Partial<_103.ValAddresses>): _103.ValAddresses;
                fromSDK(object: _103.ValAddressesSDKType): _103.ValAddresses;
                toSDK(message: _103.ValAddresses): _103.ValAddressesSDKType;
                fromAmino(object: _103.ValAddressesAmino): _103.ValAddresses;
                toAmino(message: _103.ValAddresses): _103.ValAddressesAmino;
                fromAminoMsg(object: _103.ValAddressesAminoMsg): _103.ValAddresses;
                toAminoMsg(message: _103.ValAddresses): _103.ValAddressesAminoMsg;
                fromProtoMsg(message: _103.ValAddressesProtoMsg): _103.ValAddresses;
                toProto(message: _103.ValAddresses): Uint8Array;
                toProtoMsg(message: _103.ValAddresses): _103.ValAddressesProtoMsg;
            };
            DVPair: {
                typeUrl: string;
                encode(message: _103.DVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _103.DVPair;
                fromJSON(object: any): _103.DVPair;
                toJSON(message: _103.DVPair): unknown;
                fromPartial(object: Partial<_103.DVPair>): _103.DVPair;
                fromSDK(object: _103.DVPairSDKType): _103.DVPair;
                toSDK(message: _103.DVPair): _103.DVPairSDKType;
                fromAmino(object: _103.DVPairAmino): _103.DVPair;
                toAmino(message: _103.DVPair): _103.DVPairAmino;
                fromAminoMsg(object: _103.DVPairAminoMsg): _103.DVPair;
                toAminoMsg(message: _103.DVPair): _103.DVPairAminoMsg;
                fromProtoMsg(message: _103.DVPairProtoMsg): _103.DVPair;
                toProto(message: _103.DVPair): Uint8Array;
                toProtoMsg(message: _103.DVPair): _103.DVPairProtoMsg;
            };
            DVPairs: {
                typeUrl: string;
                encode(message: _103.DVPairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _103.DVPairs;
                fromJSON(object: any): _103.DVPairs;
                toJSON(message: _103.DVPairs): unknown;
                fromPartial(object: Partial<_103.DVPairs>): _103.DVPairs;
                fromSDK(object: _103.DVPairsSDKType): _103.DVPairs;
                toSDK(message: _103.DVPairs): _103.DVPairsSDKType;
                fromAmino(object: _103.DVPairsAmino): _103.DVPairs;
                toAmino(message: _103.DVPairs): _103.DVPairsAmino;
                fromAminoMsg(object: _103.DVPairsAminoMsg): _103.DVPairs;
                toAminoMsg(message: _103.DVPairs): _103.DVPairsAminoMsg;
                fromProtoMsg(message: _103.DVPairsProtoMsg): _103.DVPairs;
                toProto(message: _103.DVPairs): Uint8Array;
                toProtoMsg(message: _103.DVPairs): _103.DVPairsProtoMsg;
            };
            DVVTriplet: {
                typeUrl: string;
                encode(message: _103.DVVTriplet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _103.DVVTriplet;
                fromJSON(object: any): _103.DVVTriplet;
                toJSON(message: _103.DVVTriplet): unknown;
                fromPartial(object: Partial<_103.DVVTriplet>): _103.DVVTriplet;
                fromSDK(object: _103.DVVTripletSDKType): _103.DVVTriplet;
                toSDK(message: _103.DVVTriplet): _103.DVVTripletSDKType;
                fromAmino(object: _103.DVVTripletAmino): _103.DVVTriplet;
                toAmino(message: _103.DVVTriplet): _103.DVVTripletAmino;
                fromAminoMsg(object: _103.DVVTripletAminoMsg): _103.DVVTriplet;
                toAminoMsg(message: _103.DVVTriplet): _103.DVVTripletAminoMsg;
                fromProtoMsg(message: _103.DVVTripletProtoMsg): _103.DVVTriplet;
                toProto(message: _103.DVVTriplet): Uint8Array;
                toProtoMsg(message: _103.DVVTriplet): _103.DVVTripletProtoMsg;
            };
            DVVTriplets: {
                typeUrl: string;
                encode(message: _103.DVVTriplets, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _103.DVVTriplets;
                fromJSON(object: any): _103.DVVTriplets;
                toJSON(message: _103.DVVTriplets): unknown;
                fromPartial(object: Partial<_103.DVVTriplets>): _103.DVVTriplets;
                fromSDK(object: _103.DVVTripletsSDKType): _103.DVVTriplets;
                toSDK(message: _103.DVVTriplets): _103.DVVTripletsSDKType;
                fromAmino(object: _103.DVVTripletsAmino): _103.DVVTriplets;
                toAmino(message: _103.DVVTriplets): _103.DVVTripletsAmino;
                fromAminoMsg(object: _103.DVVTripletsAminoMsg): _103.DVVTriplets;
                toAminoMsg(message: _103.DVVTriplets): _103.DVVTripletsAminoMsg;
                fromProtoMsg(message: _103.DVVTripletsProtoMsg): _103.DVVTriplets;
                toProto(message: _103.DVVTriplets): Uint8Array;
                toProtoMsg(message: _103.DVVTriplets): _103.DVVTripletsProtoMsg;
            };
            Delegation: {
                typeUrl: string;
                encode(message: _103.Delegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _103.Delegation;
                fromJSON(object: any): _103.Delegation;
                toJSON(message: _103.Delegation): unknown;
                fromPartial(object: Partial<_103.Delegation>): _103.Delegation;
                fromSDK(object: _103.DelegationSDKType): _103.Delegation;
                toSDK(message: _103.Delegation): _103.DelegationSDKType;
                fromAmino(object: _103.DelegationAmino): _103.Delegation;
                toAmino(message: _103.Delegation): _103.DelegationAmino;
                fromAminoMsg(object: _103.DelegationAminoMsg): _103.Delegation;
                toAminoMsg(message: _103.Delegation): _103.DelegationAminoMsg;
                fromProtoMsg(message: _103.DelegationProtoMsg): _103.Delegation;
                toProto(message: _103.Delegation): Uint8Array;
                toProtoMsg(message: _103.Delegation): _103.DelegationProtoMsg;
            };
            UnbondingDelegation: {
                typeUrl: string;
                encode(message: _103.UnbondingDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _103.UnbondingDelegation;
                fromJSON(object: any): _103.UnbondingDelegation;
                toJSON(message: _103.UnbondingDelegation): unknown;
                fromPartial(object: Partial<_103.UnbondingDelegation>): _103.UnbondingDelegation;
                fromSDK(object: _103.UnbondingDelegationSDKType): _103.UnbondingDelegation;
                toSDK(message: _103.UnbondingDelegation): _103.UnbondingDelegationSDKType;
                fromAmino(object: _103.UnbondingDelegationAmino): _103.UnbondingDelegation;
                toAmino(message: _103.UnbondingDelegation): _103.UnbondingDelegationAmino;
                fromAminoMsg(object: _103.UnbondingDelegationAminoMsg): _103.UnbondingDelegation;
                toAminoMsg(message: _103.UnbondingDelegation): _103.UnbondingDelegationAminoMsg;
                fromProtoMsg(message: _103.UnbondingDelegationProtoMsg): _103.UnbondingDelegation;
                toProto(message: _103.UnbondingDelegation): Uint8Array;
                toProtoMsg(message: _103.UnbondingDelegation): _103.UnbondingDelegationProtoMsg;
            };
            UnbondingDelegationEntry: {
                typeUrl: string;
                encode(message: _103.UnbondingDelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _103.UnbondingDelegationEntry;
                fromJSON(object: any): _103.UnbondingDelegationEntry;
                toJSON(message: _103.UnbondingDelegationEntry): unknown;
                fromPartial(object: Partial<_103.UnbondingDelegationEntry>): _103.UnbondingDelegationEntry;
                fromSDK(object: _103.UnbondingDelegationEntrySDKType): _103.UnbondingDelegationEntry;
                toSDK(message: _103.UnbondingDelegationEntry): _103.UnbondingDelegationEntrySDKType;
                fromAmino(object: _103.UnbondingDelegationEntryAmino): _103.UnbondingDelegationEntry;
                toAmino(message: _103.UnbondingDelegationEntry): _103.UnbondingDelegationEntryAmino;
                fromAminoMsg(object: _103.UnbondingDelegationEntryAminoMsg): _103.UnbondingDelegationEntry;
                toAminoMsg(message: _103.UnbondingDelegationEntry): _103.UnbondingDelegationEntryAminoMsg;
                fromProtoMsg(message: _103.UnbondingDelegationEntryProtoMsg): _103.UnbondingDelegationEntry;
                toProto(message: _103.UnbondingDelegationEntry): Uint8Array;
                toProtoMsg(message: _103.UnbondingDelegationEntry): _103.UnbondingDelegationEntryProtoMsg;
            };
            RedelegationEntry: {
                typeUrl: string;
                encode(message: _103.RedelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _103.RedelegationEntry;
                fromJSON(object: any): _103.RedelegationEntry;
                toJSON(message: _103.RedelegationEntry): unknown;
                fromPartial(object: Partial<_103.RedelegationEntry>): _103.RedelegationEntry;
                fromSDK(object: _103.RedelegationEntrySDKType): _103.RedelegationEntry;
                toSDK(message: _103.RedelegationEntry): _103.RedelegationEntrySDKType;
                fromAmino(object: _103.RedelegationEntryAmino): _103.RedelegationEntry;
                toAmino(message: _103.RedelegationEntry): _103.RedelegationEntryAmino;
                fromAminoMsg(object: _103.RedelegationEntryAminoMsg): _103.RedelegationEntry;
                toAminoMsg(message: _103.RedelegationEntry): _103.RedelegationEntryAminoMsg;
                fromProtoMsg(message: _103.RedelegationEntryProtoMsg): _103.RedelegationEntry;
                toProto(message: _103.RedelegationEntry): Uint8Array;
                toProtoMsg(message: _103.RedelegationEntry): _103.RedelegationEntryProtoMsg;
            };
            Redelegation: {
                typeUrl: string;
                encode(message: _103.Redelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _103.Redelegation;
                fromJSON(object: any): _103.Redelegation;
                toJSON(message: _103.Redelegation): unknown;
                fromPartial(object: Partial<_103.Redelegation>): _103.Redelegation;
                fromSDK(object: _103.RedelegationSDKType): _103.Redelegation;
                toSDK(message: _103.Redelegation): _103.RedelegationSDKType;
                fromAmino(object: _103.RedelegationAmino): _103.Redelegation;
                toAmino(message: _103.Redelegation): _103.RedelegationAmino;
                fromAminoMsg(object: _103.RedelegationAminoMsg): _103.Redelegation;
                toAminoMsg(message: _103.Redelegation): _103.RedelegationAminoMsg;
                fromProtoMsg(message: _103.RedelegationProtoMsg): _103.Redelegation;
                toProto(message: _103.Redelegation): Uint8Array;
                toProtoMsg(message: _103.Redelegation): _103.RedelegationProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _103.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _103.Params;
                fromJSON(object: any): _103.Params;
                toJSON(message: _103.Params): unknown;
                fromPartial(object: Partial<_103.Params>): _103.Params;
                fromSDK(object: _103.ParamsSDKType): _103.Params;
                toSDK(message: _103.Params): _103.ParamsSDKType;
                fromAmino(object: _103.ParamsAmino): _103.Params;
                toAmino(message: _103.Params): _103.ParamsAmino;
                fromAminoMsg(object: _103.ParamsAminoMsg): _103.Params;
                toAminoMsg(message: _103.Params): _103.ParamsAminoMsg;
                fromProtoMsg(message: _103.ParamsProtoMsg): _103.Params;
                toProto(message: _103.Params): Uint8Array;
                toProtoMsg(message: _103.Params): _103.ParamsProtoMsg;
            };
            DelegationResponse: {
                typeUrl: string;
                encode(message: _103.DelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _103.DelegationResponse;
                fromJSON(object: any): _103.DelegationResponse;
                toJSON(message: _103.DelegationResponse): unknown;
                fromPartial(object: Partial<_103.DelegationResponse>): _103.DelegationResponse;
                fromSDK(object: _103.DelegationResponseSDKType): _103.DelegationResponse;
                toSDK(message: _103.DelegationResponse): _103.DelegationResponseSDKType;
                fromAmino(object: _103.DelegationResponseAmino): _103.DelegationResponse;
                toAmino(message: _103.DelegationResponse): _103.DelegationResponseAmino;
                fromAminoMsg(object: _103.DelegationResponseAminoMsg): _103.DelegationResponse;
                toAminoMsg(message: _103.DelegationResponse): _103.DelegationResponseAminoMsg;
                fromProtoMsg(message: _103.DelegationResponseProtoMsg): _103.DelegationResponse;
                toProto(message: _103.DelegationResponse): Uint8Array;
                toProtoMsg(message: _103.DelegationResponse): _103.DelegationResponseProtoMsg;
            };
            RedelegationEntryResponse: {
                typeUrl: string;
                encode(message: _103.RedelegationEntryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _103.RedelegationEntryResponse;
                fromJSON(object: any): _103.RedelegationEntryResponse;
                toJSON(message: _103.RedelegationEntryResponse): unknown;
                fromPartial(object: Partial<_103.RedelegationEntryResponse>): _103.RedelegationEntryResponse;
                fromSDK(object: _103.RedelegationEntryResponseSDKType): _103.RedelegationEntryResponse;
                toSDK(message: _103.RedelegationEntryResponse): _103.RedelegationEntryResponseSDKType;
                fromAmino(object: _103.RedelegationEntryResponseAmino): _103.RedelegationEntryResponse;
                toAmino(message: _103.RedelegationEntryResponse): _103.RedelegationEntryResponseAmino;
                fromAminoMsg(object: _103.RedelegationEntryResponseAminoMsg): _103.RedelegationEntryResponse;
                toAminoMsg(message: _103.RedelegationEntryResponse): _103.RedelegationEntryResponseAminoMsg;
                fromProtoMsg(message: _103.RedelegationEntryResponseProtoMsg): _103.RedelegationEntryResponse;
                toProto(message: _103.RedelegationEntryResponse): Uint8Array;
                toProtoMsg(message: _103.RedelegationEntryResponse): _103.RedelegationEntryResponseProtoMsg;
            };
            RedelegationResponse: {
                typeUrl: string;
                encode(message: _103.RedelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _103.RedelegationResponse;
                fromJSON(object: any): _103.RedelegationResponse;
                toJSON(message: _103.RedelegationResponse): unknown;
                fromPartial(object: Partial<_103.RedelegationResponse>): _103.RedelegationResponse;
                fromSDK(object: _103.RedelegationResponseSDKType): _103.RedelegationResponse;
                toSDK(message: _103.RedelegationResponse): _103.RedelegationResponseSDKType;
                fromAmino(object: _103.RedelegationResponseAmino): _103.RedelegationResponse;
                toAmino(message: _103.RedelegationResponse): _103.RedelegationResponseAmino;
                fromAminoMsg(object: _103.RedelegationResponseAminoMsg): _103.RedelegationResponse;
                toAminoMsg(message: _103.RedelegationResponse): _103.RedelegationResponseAminoMsg;
                fromProtoMsg(message: _103.RedelegationResponseProtoMsg): _103.RedelegationResponse;
                toProto(message: _103.RedelegationResponse): Uint8Array;
                toProtoMsg(message: _103.RedelegationResponse): _103.RedelegationResponseProtoMsg;
            };
            Pool: {
                typeUrl: string;
                encode(message: _103.Pool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _103.Pool;
                fromJSON(object: any): _103.Pool;
                toJSON(message: _103.Pool): unknown;
                fromPartial(object: Partial<_103.Pool>): _103.Pool;
                fromSDK(object: _103.PoolSDKType): _103.Pool;
                toSDK(message: _103.Pool): _103.PoolSDKType;
                fromAmino(object: _103.PoolAmino): _103.Pool;
                toAmino(message: _103.Pool): _103.PoolAmino;
                fromAminoMsg(object: _103.PoolAminoMsg): _103.Pool;
                toAminoMsg(message: _103.Pool): _103.PoolAminoMsg;
                fromProtoMsg(message: _103.PoolProtoMsg): _103.Pool;
                toProto(message: _103.Pool): Uint8Array;
                toProtoMsg(message: _103.Pool): _103.PoolProtoMsg;
            };
            ValidatorUpdates: {
                typeUrl: string;
                encode(message: _103.ValidatorUpdates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _103.ValidatorUpdates;
                fromJSON(object: any): _103.ValidatorUpdates;
                toJSON(message: _103.ValidatorUpdates): unknown;
                fromPartial(object: Partial<_103.ValidatorUpdates>): _103.ValidatorUpdates;
                fromSDK(object: _103.ValidatorUpdatesSDKType): _103.ValidatorUpdates;
                toSDK(message: _103.ValidatorUpdates): _103.ValidatorUpdatesSDKType;
                fromAmino(object: _103.ValidatorUpdatesAmino): _103.ValidatorUpdates;
                toAmino(message: _103.ValidatorUpdates): _103.ValidatorUpdatesAmino;
                fromAminoMsg(object: _103.ValidatorUpdatesAminoMsg): _103.ValidatorUpdates;
                toAminoMsg(message: _103.ValidatorUpdates): _103.ValidatorUpdatesAminoMsg;
                fromProtoMsg(message: _103.ValidatorUpdatesProtoMsg): _103.ValidatorUpdates;
                toProto(message: _103.ValidatorUpdates): Uint8Array;
                toProtoMsg(message: _103.ValidatorUpdates): _103.ValidatorUpdatesProtoMsg;
            };
            QueryValidatorsRequest: {
                typeUrl: string;
                encode(message: _102.QueryValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _102.QueryValidatorsRequest;
                fromJSON(object: any): _102.QueryValidatorsRequest;
                toJSON(message: _102.QueryValidatorsRequest): unknown;
                fromPartial(object: Partial<_102.QueryValidatorsRequest>): _102.QueryValidatorsRequest;
                fromSDK(object: _102.QueryValidatorsRequestSDKType): _102.QueryValidatorsRequest;
                toSDK(message: _102.QueryValidatorsRequest): _102.QueryValidatorsRequestSDKType;
                fromAmino(object: _102.QueryValidatorsRequestAmino): _102.QueryValidatorsRequest;
                toAmino(message: _102.QueryValidatorsRequest): _102.QueryValidatorsRequestAmino;
                fromAminoMsg(object: _102.QueryValidatorsRequestAminoMsg): _102.QueryValidatorsRequest;
                toAminoMsg(message: _102.QueryValidatorsRequest): _102.QueryValidatorsRequestAminoMsg;
                fromProtoMsg(message: _102.QueryValidatorsRequestProtoMsg): _102.QueryValidatorsRequest;
                toProto(message: _102.QueryValidatorsRequest): Uint8Array;
                toProtoMsg(message: _102.QueryValidatorsRequest): _102.QueryValidatorsRequestProtoMsg;
            };
            QueryValidatorsResponse: {
                typeUrl: string;
                encode(message: _102.QueryValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _102.QueryValidatorsResponse;
                fromJSON(object: any): _102.QueryValidatorsResponse;
                toJSON(message: _102.QueryValidatorsResponse): unknown;
                fromPartial(object: Partial<_102.QueryValidatorsResponse>): _102.QueryValidatorsResponse;
                fromSDK(object: _102.QueryValidatorsResponseSDKType): _102.QueryValidatorsResponse;
                toSDK(message: _102.QueryValidatorsResponse): _102.QueryValidatorsResponseSDKType;
                fromAmino(object: _102.QueryValidatorsResponseAmino): _102.QueryValidatorsResponse;
                toAmino(message: _102.QueryValidatorsResponse): _102.QueryValidatorsResponseAmino;
                fromAminoMsg(object: _102.QueryValidatorsResponseAminoMsg): _102.QueryValidatorsResponse;
                toAminoMsg(message: _102.QueryValidatorsResponse): _102.QueryValidatorsResponseAminoMsg;
                fromProtoMsg(message: _102.QueryValidatorsResponseProtoMsg): _102.QueryValidatorsResponse;
                toProto(message: _102.QueryValidatorsResponse): Uint8Array;
                toProtoMsg(message: _102.QueryValidatorsResponse): _102.QueryValidatorsResponseProtoMsg;
            };
            QueryValidatorRequest: {
                typeUrl: string;
                encode(message: _102.QueryValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _102.QueryValidatorRequest;
                fromJSON(object: any): _102.QueryValidatorRequest;
                toJSON(message: _102.QueryValidatorRequest): unknown;
                fromPartial(object: Partial<_102.QueryValidatorRequest>): _102.QueryValidatorRequest;
                fromSDK(object: _102.QueryValidatorRequestSDKType): _102.QueryValidatorRequest;
                toSDK(message: _102.QueryValidatorRequest): _102.QueryValidatorRequestSDKType;
                fromAmino(object: _102.QueryValidatorRequestAmino): _102.QueryValidatorRequest;
                toAmino(message: _102.QueryValidatorRequest): _102.QueryValidatorRequestAmino;
                fromAminoMsg(object: _102.QueryValidatorRequestAminoMsg): _102.QueryValidatorRequest;
                toAminoMsg(message: _102.QueryValidatorRequest): _102.QueryValidatorRequestAminoMsg;
                fromProtoMsg(message: _102.QueryValidatorRequestProtoMsg): _102.QueryValidatorRequest;
                toProto(message: _102.QueryValidatorRequest): Uint8Array;
                toProtoMsg(message: _102.QueryValidatorRequest): _102.QueryValidatorRequestProtoMsg;
            };
            QueryValidatorResponse: {
                typeUrl: string;
                encode(message: _102.QueryValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _102.QueryValidatorResponse;
                fromJSON(object: any): _102.QueryValidatorResponse;
                toJSON(message: _102.QueryValidatorResponse): unknown;
                fromPartial(object: Partial<_102.QueryValidatorResponse>): _102.QueryValidatorResponse;
                fromSDK(object: _102.QueryValidatorResponseSDKType): _102.QueryValidatorResponse;
                toSDK(message: _102.QueryValidatorResponse): _102.QueryValidatorResponseSDKType;
                fromAmino(object: _102.QueryValidatorResponseAmino): _102.QueryValidatorResponse;
                toAmino(message: _102.QueryValidatorResponse): _102.QueryValidatorResponseAmino;
                fromAminoMsg(object: _102.QueryValidatorResponseAminoMsg): _102.QueryValidatorResponse;
                toAminoMsg(message: _102.QueryValidatorResponse): _102.QueryValidatorResponseAminoMsg;
                fromProtoMsg(message: _102.QueryValidatorResponseProtoMsg): _102.QueryValidatorResponse;
                toProto(message: _102.QueryValidatorResponse): Uint8Array;
                toProtoMsg(message: _102.QueryValidatorResponse): _102.QueryValidatorResponseProtoMsg;
            };
            QueryValidatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _102.QueryValidatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _102.QueryValidatorDelegationsRequest;
                fromJSON(object: any): _102.QueryValidatorDelegationsRequest;
                toJSON(message: _102.QueryValidatorDelegationsRequest): unknown;
                fromPartial(object: Partial<_102.QueryValidatorDelegationsRequest>): _102.QueryValidatorDelegationsRequest;
                fromSDK(object: _102.QueryValidatorDelegationsRequestSDKType): _102.QueryValidatorDelegationsRequest;
                toSDK(message: _102.QueryValidatorDelegationsRequest): _102.QueryValidatorDelegationsRequestSDKType;
                fromAmino(object: _102.QueryValidatorDelegationsRequestAmino): _102.QueryValidatorDelegationsRequest;
                toAmino(message: _102.QueryValidatorDelegationsRequest): _102.QueryValidatorDelegationsRequestAmino;
                fromAminoMsg(object: _102.QueryValidatorDelegationsRequestAminoMsg): _102.QueryValidatorDelegationsRequest;
                toAminoMsg(message: _102.QueryValidatorDelegationsRequest): _102.QueryValidatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _102.QueryValidatorDelegationsRequestProtoMsg): _102.QueryValidatorDelegationsRequest;
                toProto(message: _102.QueryValidatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _102.QueryValidatorDelegationsRequest): _102.QueryValidatorDelegationsRequestProtoMsg;
            };
            QueryValidatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _102.QueryValidatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _102.QueryValidatorDelegationsResponse;
                fromJSON(object: any): _102.QueryValidatorDelegationsResponse;
                toJSON(message: _102.QueryValidatorDelegationsResponse): unknown;
                fromPartial(object: Partial<_102.QueryValidatorDelegationsResponse>): _102.QueryValidatorDelegationsResponse;
                fromSDK(object: _102.QueryValidatorDelegationsResponseSDKType): _102.QueryValidatorDelegationsResponse;
                toSDK(message: _102.QueryValidatorDelegationsResponse): _102.QueryValidatorDelegationsResponseSDKType;
                fromAmino(object: _102.QueryValidatorDelegationsResponseAmino): _102.QueryValidatorDelegationsResponse;
                toAmino(message: _102.QueryValidatorDelegationsResponse): _102.QueryValidatorDelegationsResponseAmino;
                fromAminoMsg(object: _102.QueryValidatorDelegationsResponseAminoMsg): _102.QueryValidatorDelegationsResponse;
                toAminoMsg(message: _102.QueryValidatorDelegationsResponse): _102.QueryValidatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _102.QueryValidatorDelegationsResponseProtoMsg): _102.QueryValidatorDelegationsResponse;
                toProto(message: _102.QueryValidatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _102.QueryValidatorDelegationsResponse): _102.QueryValidatorDelegationsResponseProtoMsg;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _102.QueryValidatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _102.QueryValidatorUnbondingDelegationsRequest;
                fromJSON(object: any): _102.QueryValidatorUnbondingDelegationsRequest;
                toJSON(message: _102.QueryValidatorUnbondingDelegationsRequest): unknown;
                fromPartial(object: Partial<_102.QueryValidatorUnbondingDelegationsRequest>): _102.QueryValidatorUnbondingDelegationsRequest;
                fromSDK(object: _102.QueryValidatorUnbondingDelegationsRequestSDKType): _102.QueryValidatorUnbondingDelegationsRequest;
                toSDK(message: _102.QueryValidatorUnbondingDelegationsRequest): _102.QueryValidatorUnbondingDelegationsRequestSDKType;
                fromAmino(object: _102.QueryValidatorUnbondingDelegationsRequestAmino): _102.QueryValidatorUnbondingDelegationsRequest;
                toAmino(message: _102.QueryValidatorUnbondingDelegationsRequest): _102.QueryValidatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _102.QueryValidatorUnbondingDelegationsRequestAminoMsg): _102.QueryValidatorUnbondingDelegationsRequest;
                toAminoMsg(message: _102.QueryValidatorUnbondingDelegationsRequest): _102.QueryValidatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _102.QueryValidatorUnbondingDelegationsRequestProtoMsg): _102.QueryValidatorUnbondingDelegationsRequest;
                toProto(message: _102.QueryValidatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _102.QueryValidatorUnbondingDelegationsRequest): _102.QueryValidatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _102.QueryValidatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _102.QueryValidatorUnbondingDelegationsResponse;
                fromJSON(object: any): _102.QueryValidatorUnbondingDelegationsResponse;
                toJSON(message: _102.QueryValidatorUnbondingDelegationsResponse): unknown;
                fromPartial(object: Partial<_102.QueryValidatorUnbondingDelegationsResponse>): _102.QueryValidatorUnbondingDelegationsResponse;
                fromSDK(object: _102.QueryValidatorUnbondingDelegationsResponseSDKType): _102.QueryValidatorUnbondingDelegationsResponse;
                toSDK(message: _102.QueryValidatorUnbondingDelegationsResponse): _102.QueryValidatorUnbondingDelegationsResponseSDKType;
                fromAmino(object: _102.QueryValidatorUnbondingDelegationsResponseAmino): _102.QueryValidatorUnbondingDelegationsResponse;
                toAmino(message: _102.QueryValidatorUnbondingDelegationsResponse): _102.QueryValidatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _102.QueryValidatorUnbondingDelegationsResponseAminoMsg): _102.QueryValidatorUnbondingDelegationsResponse;
                toAminoMsg(message: _102.QueryValidatorUnbondingDelegationsResponse): _102.QueryValidatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _102.QueryValidatorUnbondingDelegationsResponseProtoMsg): _102.QueryValidatorUnbondingDelegationsResponse;
                toProto(message: _102.QueryValidatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _102.QueryValidatorUnbondingDelegationsResponse): _102.QueryValidatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryDelegationRequest: {
                typeUrl: string;
                encode(message: _102.QueryDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _102.QueryDelegationRequest;
                fromJSON(object: any): _102.QueryDelegationRequest;
                toJSON(message: _102.QueryDelegationRequest): unknown;
                fromPartial(object: Partial<_102.QueryDelegationRequest>): _102.QueryDelegationRequest;
                fromSDK(object: _102.QueryDelegationRequestSDKType): _102.QueryDelegationRequest;
                toSDK(message: _102.QueryDelegationRequest): _102.QueryDelegationRequestSDKType;
                fromAmino(object: _102.QueryDelegationRequestAmino): _102.QueryDelegationRequest;
                toAmino(message: _102.QueryDelegationRequest): _102.QueryDelegationRequestAmino;
                fromAminoMsg(object: _102.QueryDelegationRequestAminoMsg): _102.QueryDelegationRequest;
                toAminoMsg(message: _102.QueryDelegationRequest): _102.QueryDelegationRequestAminoMsg;
                fromProtoMsg(message: _102.QueryDelegationRequestProtoMsg): _102.QueryDelegationRequest;
                toProto(message: _102.QueryDelegationRequest): Uint8Array;
                toProtoMsg(message: _102.QueryDelegationRequest): _102.QueryDelegationRequestProtoMsg;
            };
            QueryDelegationResponse: {
                typeUrl: string;
                encode(message: _102.QueryDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _102.QueryDelegationResponse;
                fromJSON(object: any): _102.QueryDelegationResponse;
                toJSON(message: _102.QueryDelegationResponse): unknown;
                fromPartial(object: Partial<_102.QueryDelegationResponse>): _102.QueryDelegationResponse;
                fromSDK(object: _102.QueryDelegationResponseSDKType): _102.QueryDelegationResponse;
                toSDK(message: _102.QueryDelegationResponse): _102.QueryDelegationResponseSDKType;
                fromAmino(object: _102.QueryDelegationResponseAmino): _102.QueryDelegationResponse;
                toAmino(message: _102.QueryDelegationResponse): _102.QueryDelegationResponseAmino;
                fromAminoMsg(object: _102.QueryDelegationResponseAminoMsg): _102.QueryDelegationResponse;
                toAminoMsg(message: _102.QueryDelegationResponse): _102.QueryDelegationResponseAminoMsg;
                fromProtoMsg(message: _102.QueryDelegationResponseProtoMsg): _102.QueryDelegationResponse;
                toProto(message: _102.QueryDelegationResponse): Uint8Array;
                toProtoMsg(message: _102.QueryDelegationResponse): _102.QueryDelegationResponseProtoMsg;
            };
            QueryUnbondingDelegationRequest: {
                typeUrl: string;
                encode(message: _102.QueryUnbondingDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _102.QueryUnbondingDelegationRequest;
                fromJSON(object: any): _102.QueryUnbondingDelegationRequest;
                toJSON(message: _102.QueryUnbondingDelegationRequest): unknown;
                fromPartial(object: Partial<_102.QueryUnbondingDelegationRequest>): _102.QueryUnbondingDelegationRequest;
                fromSDK(object: _102.QueryUnbondingDelegationRequestSDKType): _102.QueryUnbondingDelegationRequest;
                toSDK(message: _102.QueryUnbondingDelegationRequest): _102.QueryUnbondingDelegationRequestSDKType;
                fromAmino(object: _102.QueryUnbondingDelegationRequestAmino): _102.QueryUnbondingDelegationRequest;
                toAmino(message: _102.QueryUnbondingDelegationRequest): _102.QueryUnbondingDelegationRequestAmino;
                fromAminoMsg(object: _102.QueryUnbondingDelegationRequestAminoMsg): _102.QueryUnbondingDelegationRequest;
                toAminoMsg(message: _102.QueryUnbondingDelegationRequest): _102.QueryUnbondingDelegationRequestAminoMsg;
                fromProtoMsg(message: _102.QueryUnbondingDelegationRequestProtoMsg): _102.QueryUnbondingDelegationRequest;
                toProto(message: _102.QueryUnbondingDelegationRequest): Uint8Array;
                toProtoMsg(message: _102.QueryUnbondingDelegationRequest): _102.QueryUnbondingDelegationRequestProtoMsg;
            };
            QueryUnbondingDelegationResponse: {
                typeUrl: string;
                encode(message: _102.QueryUnbondingDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _102.QueryUnbondingDelegationResponse;
                fromJSON(object: any): _102.QueryUnbondingDelegationResponse;
                toJSON(message: _102.QueryUnbondingDelegationResponse): unknown;
                fromPartial(object: Partial<_102.QueryUnbondingDelegationResponse>): _102.QueryUnbondingDelegationResponse;
                fromSDK(object: _102.QueryUnbondingDelegationResponseSDKType): _102.QueryUnbondingDelegationResponse;
                toSDK(message: _102.QueryUnbondingDelegationResponse): _102.QueryUnbondingDelegationResponseSDKType;
                fromAmino(object: _102.QueryUnbondingDelegationResponseAmino): _102.QueryUnbondingDelegationResponse;
                toAmino(message: _102.QueryUnbondingDelegationResponse): _102.QueryUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _102.QueryUnbondingDelegationResponseAminoMsg): _102.QueryUnbondingDelegationResponse;
                toAminoMsg(message: _102.QueryUnbondingDelegationResponse): _102.QueryUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _102.QueryUnbondingDelegationResponseProtoMsg): _102.QueryUnbondingDelegationResponse;
                toProto(message: _102.QueryUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _102.QueryUnbondingDelegationResponse): _102.QueryUnbondingDelegationResponseProtoMsg;
            };
            QueryDelegatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _102.QueryDelegatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _102.QueryDelegatorDelegationsRequest;
                fromJSON(object: any): _102.QueryDelegatorDelegationsRequest;
                toJSON(message: _102.QueryDelegatorDelegationsRequest): unknown;
                fromPartial(object: Partial<_102.QueryDelegatorDelegationsRequest>): _102.QueryDelegatorDelegationsRequest;
                fromSDK(object: _102.QueryDelegatorDelegationsRequestSDKType): _102.QueryDelegatorDelegationsRequest;
                toSDK(message: _102.QueryDelegatorDelegationsRequest): _102.QueryDelegatorDelegationsRequestSDKType;
                fromAmino(object: _102.QueryDelegatorDelegationsRequestAmino): _102.QueryDelegatorDelegationsRequest;
                toAmino(message: _102.QueryDelegatorDelegationsRequest): _102.QueryDelegatorDelegationsRequestAmino;
                fromAminoMsg(object: _102.QueryDelegatorDelegationsRequestAminoMsg): _102.QueryDelegatorDelegationsRequest;
                toAminoMsg(message: _102.QueryDelegatorDelegationsRequest): _102.QueryDelegatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _102.QueryDelegatorDelegationsRequestProtoMsg): _102.QueryDelegatorDelegationsRequest;
                toProto(message: _102.QueryDelegatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _102.QueryDelegatorDelegationsRequest): _102.QueryDelegatorDelegationsRequestProtoMsg;
            };
            QueryDelegatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _102.QueryDelegatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _102.QueryDelegatorDelegationsResponse;
                fromJSON(object: any): _102.QueryDelegatorDelegationsResponse;
                toJSON(message: _102.QueryDelegatorDelegationsResponse): unknown;
                fromPartial(object: Partial<_102.QueryDelegatorDelegationsResponse>): _102.QueryDelegatorDelegationsResponse;
                fromSDK(object: _102.QueryDelegatorDelegationsResponseSDKType): _102.QueryDelegatorDelegationsResponse;
                toSDK(message: _102.QueryDelegatorDelegationsResponse): _102.QueryDelegatorDelegationsResponseSDKType;
                fromAmino(object: _102.QueryDelegatorDelegationsResponseAmino): _102.QueryDelegatorDelegationsResponse;
                toAmino(message: _102.QueryDelegatorDelegationsResponse): _102.QueryDelegatorDelegationsResponseAmino;
                fromAminoMsg(object: _102.QueryDelegatorDelegationsResponseAminoMsg): _102.QueryDelegatorDelegationsResponse;
                toAminoMsg(message: _102.QueryDelegatorDelegationsResponse): _102.QueryDelegatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _102.QueryDelegatorDelegationsResponseProtoMsg): _102.QueryDelegatorDelegationsResponse;
                toProto(message: _102.QueryDelegatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _102.QueryDelegatorDelegationsResponse): _102.QueryDelegatorDelegationsResponseProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _102.QueryDelegatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _102.QueryDelegatorUnbondingDelegationsRequest;
                fromJSON(object: any): _102.QueryDelegatorUnbondingDelegationsRequest;
                toJSON(message: _102.QueryDelegatorUnbondingDelegationsRequest): unknown;
                fromPartial(object: Partial<_102.QueryDelegatorUnbondingDelegationsRequest>): _102.QueryDelegatorUnbondingDelegationsRequest;
                fromSDK(object: _102.QueryDelegatorUnbondingDelegationsRequestSDKType): _102.QueryDelegatorUnbondingDelegationsRequest;
                toSDK(message: _102.QueryDelegatorUnbondingDelegationsRequest): _102.QueryDelegatorUnbondingDelegationsRequestSDKType;
                fromAmino(object: _102.QueryDelegatorUnbondingDelegationsRequestAmino): _102.QueryDelegatorUnbondingDelegationsRequest;
                toAmino(message: _102.QueryDelegatorUnbondingDelegationsRequest): _102.QueryDelegatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _102.QueryDelegatorUnbondingDelegationsRequestAminoMsg): _102.QueryDelegatorUnbondingDelegationsRequest;
                toAminoMsg(message: _102.QueryDelegatorUnbondingDelegationsRequest): _102.QueryDelegatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _102.QueryDelegatorUnbondingDelegationsRequestProtoMsg): _102.QueryDelegatorUnbondingDelegationsRequest;
                toProto(message: _102.QueryDelegatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _102.QueryDelegatorUnbondingDelegationsRequest): _102.QueryDelegatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _102.QueryDelegatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _102.QueryDelegatorUnbondingDelegationsResponse;
                fromJSON(object: any): _102.QueryDelegatorUnbondingDelegationsResponse;
                toJSON(message: _102.QueryDelegatorUnbondingDelegationsResponse): unknown;
                fromPartial(object: Partial<_102.QueryDelegatorUnbondingDelegationsResponse>): _102.QueryDelegatorUnbondingDelegationsResponse;
                fromSDK(object: _102.QueryDelegatorUnbondingDelegationsResponseSDKType): _102.QueryDelegatorUnbondingDelegationsResponse;
                toSDK(message: _102.QueryDelegatorUnbondingDelegationsResponse): _102.QueryDelegatorUnbondingDelegationsResponseSDKType;
                fromAmino(object: _102.QueryDelegatorUnbondingDelegationsResponseAmino): _102.QueryDelegatorUnbondingDelegationsResponse;
                toAmino(message: _102.QueryDelegatorUnbondingDelegationsResponse): _102.QueryDelegatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _102.QueryDelegatorUnbondingDelegationsResponseAminoMsg): _102.QueryDelegatorUnbondingDelegationsResponse;
                toAminoMsg(message: _102.QueryDelegatorUnbondingDelegationsResponse): _102.QueryDelegatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _102.QueryDelegatorUnbondingDelegationsResponseProtoMsg): _102.QueryDelegatorUnbondingDelegationsResponse;
                toProto(message: _102.QueryDelegatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _102.QueryDelegatorUnbondingDelegationsResponse): _102.QueryDelegatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryRedelegationsRequest: {
                typeUrl: string;
                encode(message: _102.QueryRedelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _102.QueryRedelegationsRequest;
                fromJSON(object: any): _102.QueryRedelegationsRequest;
                toJSON(message: _102.QueryRedelegationsRequest): unknown;
                fromPartial(object: Partial<_102.QueryRedelegationsRequest>): _102.QueryRedelegationsRequest;
                fromSDK(object: _102.QueryRedelegationsRequestSDKType): _102.QueryRedelegationsRequest;
                toSDK(message: _102.QueryRedelegationsRequest): _102.QueryRedelegationsRequestSDKType;
                fromAmino(object: _102.QueryRedelegationsRequestAmino): _102.QueryRedelegationsRequest;
                toAmino(message: _102.QueryRedelegationsRequest): _102.QueryRedelegationsRequestAmino;
                fromAminoMsg(object: _102.QueryRedelegationsRequestAminoMsg): _102.QueryRedelegationsRequest;
                toAminoMsg(message: _102.QueryRedelegationsRequest): _102.QueryRedelegationsRequestAminoMsg;
                fromProtoMsg(message: _102.QueryRedelegationsRequestProtoMsg): _102.QueryRedelegationsRequest;
                toProto(message: _102.QueryRedelegationsRequest): Uint8Array;
                toProtoMsg(message: _102.QueryRedelegationsRequest): _102.QueryRedelegationsRequestProtoMsg;
            };
            QueryRedelegationsResponse: {
                typeUrl: string;
                encode(message: _102.QueryRedelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _102.QueryRedelegationsResponse;
                fromJSON(object: any): _102.QueryRedelegationsResponse;
                toJSON(message: _102.QueryRedelegationsResponse): unknown;
                fromPartial(object: Partial<_102.QueryRedelegationsResponse>): _102.QueryRedelegationsResponse;
                fromSDK(object: _102.QueryRedelegationsResponseSDKType): _102.QueryRedelegationsResponse;
                toSDK(message: _102.QueryRedelegationsResponse): _102.QueryRedelegationsResponseSDKType;
                fromAmino(object: _102.QueryRedelegationsResponseAmino): _102.QueryRedelegationsResponse;
                toAmino(message: _102.QueryRedelegationsResponse): _102.QueryRedelegationsResponseAmino;
                fromAminoMsg(object: _102.QueryRedelegationsResponseAminoMsg): _102.QueryRedelegationsResponse;
                toAminoMsg(message: _102.QueryRedelegationsResponse): _102.QueryRedelegationsResponseAminoMsg;
                fromProtoMsg(message: _102.QueryRedelegationsResponseProtoMsg): _102.QueryRedelegationsResponse;
                toProto(message: _102.QueryRedelegationsResponse): Uint8Array;
                toProtoMsg(message: _102.QueryRedelegationsResponse): _102.QueryRedelegationsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _102.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _102.QueryDelegatorValidatorsRequest;
                fromJSON(object: any): _102.QueryDelegatorValidatorsRequest;
                toJSON(message: _102.QueryDelegatorValidatorsRequest): unknown;
                fromPartial(object: Partial<_102.QueryDelegatorValidatorsRequest>): _102.QueryDelegatorValidatorsRequest;
                fromSDK(object: _102.QueryDelegatorValidatorsRequestSDKType): _102.QueryDelegatorValidatorsRequest;
                toSDK(message: _102.QueryDelegatorValidatorsRequest): _102.QueryDelegatorValidatorsRequestSDKType;
                fromAmino(object: _102.QueryDelegatorValidatorsRequestAmino): _102.QueryDelegatorValidatorsRequest;
                toAmino(message: _102.QueryDelegatorValidatorsRequest): _102.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _102.QueryDelegatorValidatorsRequestAminoMsg): _102.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _102.QueryDelegatorValidatorsRequest): _102.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _102.QueryDelegatorValidatorsRequestProtoMsg): _102.QueryDelegatorValidatorsRequest;
                toProto(message: _102.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _102.QueryDelegatorValidatorsRequest): _102.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _102.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _102.QueryDelegatorValidatorsResponse;
                fromJSON(object: any): _102.QueryDelegatorValidatorsResponse;
                toJSON(message: _102.QueryDelegatorValidatorsResponse): unknown;
                fromPartial(object: Partial<_102.QueryDelegatorValidatorsResponse>): _102.QueryDelegatorValidatorsResponse;
                fromSDK(object: _102.QueryDelegatorValidatorsResponseSDKType): _102.QueryDelegatorValidatorsResponse;
                toSDK(message: _102.QueryDelegatorValidatorsResponse): _102.QueryDelegatorValidatorsResponseSDKType;
                fromAmino(object: _102.QueryDelegatorValidatorsResponseAmino): _102.QueryDelegatorValidatorsResponse;
                toAmino(message: _102.QueryDelegatorValidatorsResponse): _102.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _102.QueryDelegatorValidatorsResponseAminoMsg): _102.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _102.QueryDelegatorValidatorsResponse): _102.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _102.QueryDelegatorValidatorsResponseProtoMsg): _102.QueryDelegatorValidatorsResponse;
                toProto(message: _102.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _102.QueryDelegatorValidatorsResponse): _102.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorValidatorRequest: {
                typeUrl: string;
                encode(message: _102.QueryDelegatorValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _102.QueryDelegatorValidatorRequest;
                fromJSON(object: any): _102.QueryDelegatorValidatorRequest;
                toJSON(message: _102.QueryDelegatorValidatorRequest): unknown;
                fromPartial(object: Partial<_102.QueryDelegatorValidatorRequest>): _102.QueryDelegatorValidatorRequest;
                fromSDK(object: _102.QueryDelegatorValidatorRequestSDKType): _102.QueryDelegatorValidatorRequest;
                toSDK(message: _102.QueryDelegatorValidatorRequest): _102.QueryDelegatorValidatorRequestSDKType;
                fromAmino(object: _102.QueryDelegatorValidatorRequestAmino): _102.QueryDelegatorValidatorRequest;
                toAmino(message: _102.QueryDelegatorValidatorRequest): _102.QueryDelegatorValidatorRequestAmino;
                fromAminoMsg(object: _102.QueryDelegatorValidatorRequestAminoMsg): _102.QueryDelegatorValidatorRequest;
                toAminoMsg(message: _102.QueryDelegatorValidatorRequest): _102.QueryDelegatorValidatorRequestAminoMsg;
                fromProtoMsg(message: _102.QueryDelegatorValidatorRequestProtoMsg): _102.QueryDelegatorValidatorRequest;
                toProto(message: _102.QueryDelegatorValidatorRequest): Uint8Array;
                toProtoMsg(message: _102.QueryDelegatorValidatorRequest): _102.QueryDelegatorValidatorRequestProtoMsg;
            };
            QueryDelegatorValidatorResponse: {
                typeUrl: string;
                encode(message: _102.QueryDelegatorValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _102.QueryDelegatorValidatorResponse;
                fromJSON(object: any): _102.QueryDelegatorValidatorResponse;
                toJSON(message: _102.QueryDelegatorValidatorResponse): unknown;
                fromPartial(object: Partial<_102.QueryDelegatorValidatorResponse>): _102.QueryDelegatorValidatorResponse;
                fromSDK(object: _102.QueryDelegatorValidatorResponseSDKType): _102.QueryDelegatorValidatorResponse;
                toSDK(message: _102.QueryDelegatorValidatorResponse): _102.QueryDelegatorValidatorResponseSDKType;
                fromAmino(object: _102.QueryDelegatorValidatorResponseAmino): _102.QueryDelegatorValidatorResponse;
                toAmino(message: _102.QueryDelegatorValidatorResponse): _102.QueryDelegatorValidatorResponseAmino;
                fromAminoMsg(object: _102.QueryDelegatorValidatorResponseAminoMsg): _102.QueryDelegatorValidatorResponse;
                toAminoMsg(message: _102.QueryDelegatorValidatorResponse): _102.QueryDelegatorValidatorResponseAminoMsg;
                fromProtoMsg(message: _102.QueryDelegatorValidatorResponseProtoMsg): _102.QueryDelegatorValidatorResponse;
                toProto(message: _102.QueryDelegatorValidatorResponse): Uint8Array;
                toProtoMsg(message: _102.QueryDelegatorValidatorResponse): _102.QueryDelegatorValidatorResponseProtoMsg;
            };
            QueryHistoricalInfoRequest: {
                typeUrl: string;
                encode(message: _102.QueryHistoricalInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _102.QueryHistoricalInfoRequest;
                fromJSON(object: any): _102.QueryHistoricalInfoRequest;
                toJSON(message: _102.QueryHistoricalInfoRequest): unknown;
                fromPartial(object: Partial<_102.QueryHistoricalInfoRequest>): _102.QueryHistoricalInfoRequest;
                fromSDK(object: _102.QueryHistoricalInfoRequestSDKType): _102.QueryHistoricalInfoRequest;
                toSDK(message: _102.QueryHistoricalInfoRequest): _102.QueryHistoricalInfoRequestSDKType;
                fromAmino(object: _102.QueryHistoricalInfoRequestAmino): _102.QueryHistoricalInfoRequest;
                toAmino(message: _102.QueryHistoricalInfoRequest): _102.QueryHistoricalInfoRequestAmino;
                fromAminoMsg(object: _102.QueryHistoricalInfoRequestAminoMsg): _102.QueryHistoricalInfoRequest;
                toAminoMsg(message: _102.QueryHistoricalInfoRequest): _102.QueryHistoricalInfoRequestAminoMsg;
                fromProtoMsg(message: _102.QueryHistoricalInfoRequestProtoMsg): _102.QueryHistoricalInfoRequest;
                toProto(message: _102.QueryHistoricalInfoRequest): Uint8Array;
                toProtoMsg(message: _102.QueryHistoricalInfoRequest): _102.QueryHistoricalInfoRequestProtoMsg;
            };
            QueryHistoricalInfoResponse: {
                typeUrl: string;
                encode(message: _102.QueryHistoricalInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _102.QueryHistoricalInfoResponse;
                fromJSON(object: any): _102.QueryHistoricalInfoResponse;
                toJSON(message: _102.QueryHistoricalInfoResponse): unknown;
                fromPartial(object: Partial<_102.QueryHistoricalInfoResponse>): _102.QueryHistoricalInfoResponse;
                fromSDK(object: _102.QueryHistoricalInfoResponseSDKType): _102.QueryHistoricalInfoResponse;
                toSDK(message: _102.QueryHistoricalInfoResponse): _102.QueryHistoricalInfoResponseSDKType;
                fromAmino(object: _102.QueryHistoricalInfoResponseAmino): _102.QueryHistoricalInfoResponse;
                toAmino(message: _102.QueryHistoricalInfoResponse): _102.QueryHistoricalInfoResponseAmino;
                fromAminoMsg(object: _102.QueryHistoricalInfoResponseAminoMsg): _102.QueryHistoricalInfoResponse;
                toAminoMsg(message: _102.QueryHistoricalInfoResponse): _102.QueryHistoricalInfoResponseAminoMsg;
                fromProtoMsg(message: _102.QueryHistoricalInfoResponseProtoMsg): _102.QueryHistoricalInfoResponse;
                toProto(message: _102.QueryHistoricalInfoResponse): Uint8Array;
                toProtoMsg(message: _102.QueryHistoricalInfoResponse): _102.QueryHistoricalInfoResponseProtoMsg;
            };
            QueryPoolRequest: {
                typeUrl: string;
                encode(_: _102.QueryPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _102.QueryPoolRequest;
                fromJSON(_: any): _102.QueryPoolRequest;
                toJSON(_: _102.QueryPoolRequest): unknown;
                fromPartial(_: Partial<_102.QueryPoolRequest>): _102.QueryPoolRequest;
                fromSDK(_: _102.QueryPoolRequestSDKType): _102.QueryPoolRequest;
                toSDK(_: _102.QueryPoolRequest): _102.QueryPoolRequestSDKType;
                fromAmino(_: _102.QueryPoolRequestAmino): _102.QueryPoolRequest;
                toAmino(_: _102.QueryPoolRequest): _102.QueryPoolRequestAmino;
                fromAminoMsg(object: _102.QueryPoolRequestAminoMsg): _102.QueryPoolRequest;
                toAminoMsg(message: _102.QueryPoolRequest): _102.QueryPoolRequestAminoMsg;
                fromProtoMsg(message: _102.QueryPoolRequestProtoMsg): _102.QueryPoolRequest;
                toProto(message: _102.QueryPoolRequest): Uint8Array;
                toProtoMsg(message: _102.QueryPoolRequest): _102.QueryPoolRequestProtoMsg;
            };
            QueryPoolResponse: {
                typeUrl: string;
                encode(message: _102.QueryPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _102.QueryPoolResponse;
                fromJSON(object: any): _102.QueryPoolResponse;
                toJSON(message: _102.QueryPoolResponse): unknown;
                fromPartial(object: Partial<_102.QueryPoolResponse>): _102.QueryPoolResponse;
                fromSDK(object: _102.QueryPoolResponseSDKType): _102.QueryPoolResponse;
                toSDK(message: _102.QueryPoolResponse): _102.QueryPoolResponseSDKType;
                fromAmino(object: _102.QueryPoolResponseAmino): _102.QueryPoolResponse;
                toAmino(message: _102.QueryPoolResponse): _102.QueryPoolResponseAmino;
                fromAminoMsg(object: _102.QueryPoolResponseAminoMsg): _102.QueryPoolResponse;
                toAminoMsg(message: _102.QueryPoolResponse): _102.QueryPoolResponseAminoMsg;
                fromProtoMsg(message: _102.QueryPoolResponseProtoMsg): _102.QueryPoolResponse;
                toProto(message: _102.QueryPoolResponse): Uint8Array;
                toProtoMsg(message: _102.QueryPoolResponse): _102.QueryPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _102.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _102.QueryParamsRequest;
                fromJSON(_: any): _102.QueryParamsRequest;
                toJSON(_: _102.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_102.QueryParamsRequest>): _102.QueryParamsRequest;
                fromSDK(_: _102.QueryParamsRequestSDKType): _102.QueryParamsRequest;
                toSDK(_: _102.QueryParamsRequest): _102.QueryParamsRequestSDKType;
                fromAmino(_: _102.QueryParamsRequestAmino): _102.QueryParamsRequest;
                toAmino(_: _102.QueryParamsRequest): _102.QueryParamsRequestAmino;
                fromAminoMsg(object: _102.QueryParamsRequestAminoMsg): _102.QueryParamsRequest;
                toAminoMsg(message: _102.QueryParamsRequest): _102.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _102.QueryParamsRequestProtoMsg): _102.QueryParamsRequest;
                toProto(message: _102.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _102.QueryParamsRequest): _102.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _102.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _102.QueryParamsResponse;
                fromJSON(object: any): _102.QueryParamsResponse;
                toJSON(message: _102.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_102.QueryParamsResponse>): _102.QueryParamsResponse;
                fromSDK(object: _102.QueryParamsResponseSDKType): _102.QueryParamsResponse;
                toSDK(message: _102.QueryParamsResponse): _102.QueryParamsResponseSDKType;
                fromAmino(object: _102.QueryParamsResponseAmino): _102.QueryParamsResponse;
                toAmino(message: _102.QueryParamsResponse): _102.QueryParamsResponseAmino;
                fromAminoMsg(object: _102.QueryParamsResponseAminoMsg): _102.QueryParamsResponse;
                toAminoMsg(message: _102.QueryParamsResponse): _102.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _102.QueryParamsResponseProtoMsg): _102.QueryParamsResponse;
                toProto(message: _102.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _102.QueryParamsResponse): _102.QueryParamsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _101.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _101.GenesisState;
                fromJSON(object: any): _101.GenesisState;
                toJSON(message: _101.GenesisState): unknown;
                fromPartial(object: Partial<_101.GenesisState>): _101.GenesisState;
                fromSDK(object: _101.GenesisStateSDKType): _101.GenesisState;
                toSDK(message: _101.GenesisState): _101.GenesisStateSDKType;
                fromAmino(object: _101.GenesisStateAmino): _101.GenesisState;
                toAmino(message: _101.GenesisState): _101.GenesisStateAmino;
                fromAminoMsg(object: _101.GenesisStateAminoMsg): _101.GenesisState;
                toAminoMsg(message: _101.GenesisState): _101.GenesisStateAminoMsg;
                fromProtoMsg(message: _101.GenesisStateProtoMsg): _101.GenesisState;
                toProto(message: _101.GenesisState): Uint8Array;
                toProtoMsg(message: _101.GenesisState): _101.GenesisStateProtoMsg;
            };
            LastValidatorPower: {
                typeUrl: string;
                encode(message: _101.LastValidatorPower, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _101.LastValidatorPower;
                fromJSON(object: any): _101.LastValidatorPower;
                toJSON(message: _101.LastValidatorPower): unknown;
                fromPartial(object: Partial<_101.LastValidatorPower>): _101.LastValidatorPower;
                fromSDK(object: _101.LastValidatorPowerSDKType): _101.LastValidatorPower;
                toSDK(message: _101.LastValidatorPower): _101.LastValidatorPowerSDKType;
                fromAmino(object: _101.LastValidatorPowerAmino): _101.LastValidatorPower;
                toAmino(message: _101.LastValidatorPower): _101.LastValidatorPowerAmino;
                fromAminoMsg(object: _101.LastValidatorPowerAminoMsg): _101.LastValidatorPower;
                toAminoMsg(message: _101.LastValidatorPower): _101.LastValidatorPowerAminoMsg;
                fromProtoMsg(message: _101.LastValidatorPowerProtoMsg): _101.LastValidatorPower;
                toProto(message: _101.LastValidatorPower): Uint8Array;
                toProtoMsg(message: _101.LastValidatorPower): _101.LastValidatorPowerProtoMsg;
            };
            authorizationTypeFromJSON(object: any): _100.AuthorizationType;
            authorizationTypeToJSON(object: _100.AuthorizationType): string;
            AuthorizationType: typeof _100.AuthorizationType;
            AuthorizationTypeSDKType: typeof _100.AuthorizationType;
            AuthorizationTypeAmino: typeof _100.AuthorizationType;
            StakeAuthorization: {
                typeUrl: string;
                encode(message: _100.StakeAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _100.StakeAuthorization;
                fromJSON(object: any): _100.StakeAuthorization;
                toJSON(message: _100.StakeAuthorization): unknown;
                fromPartial(object: Partial<_100.StakeAuthorization>): _100.StakeAuthorization;
                fromSDK(object: _100.StakeAuthorizationSDKType): _100.StakeAuthorization;
                toSDK(message: _100.StakeAuthorization): _100.StakeAuthorizationSDKType;
                fromAmino(object: _100.StakeAuthorizationAmino): _100.StakeAuthorization;
                toAmino(message: _100.StakeAuthorization): _100.StakeAuthorizationAmino;
                fromAminoMsg(object: _100.StakeAuthorizationAminoMsg): _100.StakeAuthorization;
                toAminoMsg(message: _100.StakeAuthorization): _100.StakeAuthorizationAminoMsg;
                fromProtoMsg(message: _100.StakeAuthorizationProtoMsg): _100.StakeAuthorization;
                toProto(message: _100.StakeAuthorization): Uint8Array;
                toProtoMsg(message: _100.StakeAuthorization): _100.StakeAuthorizationProtoMsg;
            };
            StakeAuthorization_Validators: {
                typeUrl: string;
                encode(message: _100.StakeAuthorization_Validators, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _100.StakeAuthorization_Validators;
                fromJSON(object: any): _100.StakeAuthorization_Validators;
                toJSON(message: _100.StakeAuthorization_Validators): unknown;
                fromPartial(object: Partial<_100.StakeAuthorization_Validators>): _100.StakeAuthorization_Validators;
                fromSDK(object: _100.StakeAuthorization_ValidatorsSDKType): _100.StakeAuthorization_Validators;
                toSDK(message: _100.StakeAuthorization_Validators): _100.StakeAuthorization_ValidatorsSDKType;
                fromAmino(object: _100.StakeAuthorization_ValidatorsAmino): _100.StakeAuthorization_Validators;
                toAmino(message: _100.StakeAuthorization_Validators): _100.StakeAuthorization_ValidatorsAmino;
                fromAminoMsg(object: _100.StakeAuthorization_ValidatorsAminoMsg): _100.StakeAuthorization_Validators;
                toAminoMsg(message: _100.StakeAuthorization_Validators): _100.StakeAuthorization_ValidatorsAminoMsg;
                fromProtoMsg(message: _100.StakeAuthorization_ValidatorsProtoMsg): _100.StakeAuthorization_Validators;
                toProto(message: _100.StakeAuthorization_Validators): Uint8Array;
                toProtoMsg(message: _100.StakeAuthorization_Validators): _100.StakeAuthorization_ValidatorsProtoMsg;
            };
        };
    }
    namespace tx {
        namespace config {
            const v1: {
                protobufPackage: "cosmos.tx.config.v1";
                Config: {
                    typeUrl: string;
                    encode(message: _105.Config, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _105.Config;
                    fromJSON(object: any): _105.Config;
                    toJSON(message: _105.Config): unknown;
                    fromPartial(object: Partial<_105.Config>): _105.Config;
                    fromSDK(object: _105.ConfigSDKType): _105.Config;
                    toSDK(message: _105.Config): _105.ConfigSDKType;
                    fromAmino(object: _105.ConfigAmino): _105.Config;
                    toAmino(message: _105.Config): _105.ConfigAmino;
                    fromAminoMsg(object: _105.ConfigAminoMsg): _105.Config;
                    toAminoMsg(message: _105.Config): _105.ConfigAminoMsg;
                    fromProtoMsg(message: _105.ConfigProtoMsg): _105.Config;
                    toProto(message: _105.Config): Uint8Array;
                    toProtoMsg(message: _105.Config): _105.ConfigProtoMsg;
                };
            };
        }
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _106.SignMode;
                signModeToJSON(object: _106.SignMode): string;
                protobufPackage: "cosmos.tx.signing.v1beta1";
                SignMode: typeof _106.SignMode;
                SignModeSDKType: typeof _106.SignMode;
                SignModeAmino: typeof _106.SignMode;
                SignatureDescriptors: {
                    typeUrl: string;
                    encode(message: _106.SignatureDescriptors, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _106.SignatureDescriptors;
                    fromJSON(object: any): _106.SignatureDescriptors;
                    toJSON(message: _106.SignatureDescriptors): unknown;
                    fromPartial(object: Partial<_106.SignatureDescriptors>): _106.SignatureDescriptors;
                    fromSDK(object: _106.SignatureDescriptorsSDKType): _106.SignatureDescriptors;
                    toSDK(message: _106.SignatureDescriptors): _106.SignatureDescriptorsSDKType;
                    fromAmino(object: _106.SignatureDescriptorsAmino): _106.SignatureDescriptors;
                    toAmino(message: _106.SignatureDescriptors): _106.SignatureDescriptorsAmino;
                    fromAminoMsg(object: _106.SignatureDescriptorsAminoMsg): _106.SignatureDescriptors;
                    toAminoMsg(message: _106.SignatureDescriptors): _106.SignatureDescriptorsAminoMsg;
                    fromProtoMsg(message: _106.SignatureDescriptorsProtoMsg): _106.SignatureDescriptors;
                    toProto(message: _106.SignatureDescriptors): Uint8Array;
                    toProtoMsg(message: _106.SignatureDescriptors): _106.SignatureDescriptorsProtoMsg;
                };
                SignatureDescriptor: {
                    typeUrl: string;
                    encode(message: _106.SignatureDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _106.SignatureDescriptor;
                    fromJSON(object: any): _106.SignatureDescriptor;
                    toJSON(message: _106.SignatureDescriptor): unknown;
                    fromPartial(object: Partial<_106.SignatureDescriptor>): _106.SignatureDescriptor;
                    fromSDK(object: _106.SignatureDescriptorSDKType): _106.SignatureDescriptor;
                    toSDK(message: _106.SignatureDescriptor): _106.SignatureDescriptorSDKType;
                    fromAmino(object: _106.SignatureDescriptorAmino): _106.SignatureDescriptor;
                    toAmino(message: _106.SignatureDescriptor): _106.SignatureDescriptorAmino;
                    fromAminoMsg(object: _106.SignatureDescriptorAminoMsg): _106.SignatureDescriptor;
                    toAminoMsg(message: _106.SignatureDescriptor): _106.SignatureDescriptorAminoMsg;
                    fromProtoMsg(message: _106.SignatureDescriptorProtoMsg): _106.SignatureDescriptor;
                    toProto(message: _106.SignatureDescriptor): Uint8Array;
                    toProtoMsg(message: _106.SignatureDescriptor): _106.SignatureDescriptorProtoMsg;
                };
                SignatureDescriptor_Data: {
                    typeUrl: string;
                    encode(message: _106.SignatureDescriptor_Data, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _106.SignatureDescriptor_Data;
                    fromJSON(object: any): _106.SignatureDescriptor_Data;
                    toJSON(message: _106.SignatureDescriptor_Data): unknown;
                    fromPartial(object: Partial<_106.SignatureDescriptor_Data>): _106.SignatureDescriptor_Data;
                    fromSDK(object: _106.SignatureDescriptor_DataSDKType): _106.SignatureDescriptor_Data;
                    toSDK(message: _106.SignatureDescriptor_Data): _106.SignatureDescriptor_DataSDKType;
                    fromAmino(object: _106.SignatureDescriptor_DataAmino): _106.SignatureDescriptor_Data;
                    toAmino(message: _106.SignatureDescriptor_Data): _106.SignatureDescriptor_DataAmino;
                    fromAminoMsg(object: _106.SignatureDescriptor_DataAminoMsg): _106.SignatureDescriptor_Data;
                    toAminoMsg(message: _106.SignatureDescriptor_Data): _106.SignatureDescriptor_DataAminoMsg;
                    fromProtoMsg(message: _106.SignatureDescriptor_DataProtoMsg): _106.SignatureDescriptor_Data;
                    toProto(message: _106.SignatureDescriptor_Data): Uint8Array;
                    toProtoMsg(message: _106.SignatureDescriptor_Data): _106.SignatureDescriptor_DataProtoMsg;
                };
                SignatureDescriptor_Data_Single: {
                    typeUrl: string;
                    encode(message: _106.SignatureDescriptor_Data_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _106.SignatureDescriptor_Data_Single;
                    fromJSON(object: any): _106.SignatureDescriptor_Data_Single;
                    toJSON(message: _106.SignatureDescriptor_Data_Single): unknown;
                    fromPartial(object: Partial<_106.SignatureDescriptor_Data_Single>): _106.SignatureDescriptor_Data_Single;
                    fromSDK(object: _106.SignatureDescriptor_Data_SingleSDKType): _106.SignatureDescriptor_Data_Single;
                    toSDK(message: _106.SignatureDescriptor_Data_Single): _106.SignatureDescriptor_Data_SingleSDKType;
                    fromAmino(object: _106.SignatureDescriptor_Data_SingleAmino): _106.SignatureDescriptor_Data_Single;
                    toAmino(message: _106.SignatureDescriptor_Data_Single): _106.SignatureDescriptor_Data_SingleAmino;
                    fromAminoMsg(object: _106.SignatureDescriptor_Data_SingleAminoMsg): _106.SignatureDescriptor_Data_Single;
                    toAminoMsg(message: _106.SignatureDescriptor_Data_Single): _106.SignatureDescriptor_Data_SingleAminoMsg;
                    fromProtoMsg(message: _106.SignatureDescriptor_Data_SingleProtoMsg): _106.SignatureDescriptor_Data_Single;
                    toProto(message: _106.SignatureDescriptor_Data_Single): Uint8Array;
                    toProtoMsg(message: _106.SignatureDescriptor_Data_Single): _106.SignatureDescriptor_Data_SingleProtoMsg;
                };
                SignatureDescriptor_Data_Multi: {
                    typeUrl: string;
                    encode(message: _106.SignatureDescriptor_Data_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _106.SignatureDescriptor_Data_Multi;
                    fromJSON(object: any): _106.SignatureDescriptor_Data_Multi;
                    toJSON(message: _106.SignatureDescriptor_Data_Multi): unknown;
                    fromPartial(object: Partial<_106.SignatureDescriptor_Data_Multi>): _106.SignatureDescriptor_Data_Multi;
                    fromSDK(object: _106.SignatureDescriptor_Data_MultiSDKType): _106.SignatureDescriptor_Data_Multi;
                    toSDK(message: _106.SignatureDescriptor_Data_Multi): _106.SignatureDescriptor_Data_MultiSDKType;
                    fromAmino(object: _106.SignatureDescriptor_Data_MultiAmino): _106.SignatureDescriptor_Data_Multi;
                    toAmino(message: _106.SignatureDescriptor_Data_Multi): _106.SignatureDescriptor_Data_MultiAmino;
                    fromAminoMsg(object: _106.SignatureDescriptor_Data_MultiAminoMsg): _106.SignatureDescriptor_Data_Multi;
                    toAminoMsg(message: _106.SignatureDescriptor_Data_Multi): _106.SignatureDescriptor_Data_MultiAminoMsg;
                    fromProtoMsg(message: _106.SignatureDescriptor_Data_MultiProtoMsg): _106.SignatureDescriptor_Data_Multi;
                    toProto(message: _106.SignatureDescriptor_Data_Multi): Uint8Array;
                    toProtoMsg(message: _106.SignatureDescriptor_Data_Multi): _106.SignatureDescriptor_Data_MultiProtoMsg;
                };
            };
        }
        const v1beta1: {
            Service: typeof _209.Service;
            ServiceClientImpl: typeof _209.ServiceClientImpl;
            LCDQueryClient: typeof _191.LCDQueryClient;
            protobufPackage: "cosmos.tx.v1beta1";
            Tx: {
                typeUrl: string;
                encode(message: _108.Tx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _108.Tx;
                fromJSON(object: any): _108.Tx;
                toJSON(message: _108.Tx): unknown;
                fromPartial(object: Partial<_108.Tx>): _108.Tx;
                fromSDK(object: _108.TxSDKType): _108.Tx;
                toSDK(message: _108.Tx): _108.TxSDKType;
                fromAmino(object: _108.TxAmino): _108.Tx;
                toAmino(message: _108.Tx): _108.TxAmino;
                fromAminoMsg(object: _108.TxAminoMsg): _108.Tx;
                toAminoMsg(message: _108.Tx): _108.TxAminoMsg;
                fromProtoMsg(message: _108.TxProtoMsg): _108.Tx;
                toProto(message: _108.Tx): Uint8Array;
                toProtoMsg(message: _108.Tx): _108.TxProtoMsg;
            };
            TxRaw: {
                typeUrl: string;
                encode(message: _108.TxRaw, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _108.TxRaw;
                fromJSON(object: any): _108.TxRaw;
                toJSON(message: _108.TxRaw): unknown;
                fromPartial(object: Partial<_108.TxRaw>): _108.TxRaw;
                fromSDK(object: _108.TxRawSDKType): _108.TxRaw;
                toSDK(message: _108.TxRaw): _108.TxRawSDKType;
                fromAmino(object: _108.TxRawAmino): _108.TxRaw;
                toAmino(message: _108.TxRaw): _108.TxRawAmino;
                fromAminoMsg(object: _108.TxRawAminoMsg): _108.TxRaw;
                toAminoMsg(message: _108.TxRaw): _108.TxRawAminoMsg;
                fromProtoMsg(message: _108.TxRawProtoMsg): _108.TxRaw;
                toProto(message: _108.TxRaw): Uint8Array;
                toProtoMsg(message: _108.TxRaw): _108.TxRawProtoMsg;
            };
            SignDoc: {
                typeUrl: string;
                encode(message: _108.SignDoc, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _108.SignDoc;
                fromJSON(object: any): _108.SignDoc;
                toJSON(message: _108.SignDoc): unknown;
                fromPartial(object: Partial<_108.SignDoc>): _108.SignDoc;
                fromSDK(object: _108.SignDocSDKType): _108.SignDoc;
                toSDK(message: _108.SignDoc): _108.SignDocSDKType;
                fromAmino(object: _108.SignDocAmino): _108.SignDoc;
                toAmino(message: _108.SignDoc): _108.SignDocAmino;
                fromAminoMsg(object: _108.SignDocAminoMsg): _108.SignDoc;
                toAminoMsg(message: _108.SignDoc): _108.SignDocAminoMsg;
                fromProtoMsg(message: _108.SignDocProtoMsg): _108.SignDoc;
                toProto(message: _108.SignDoc): Uint8Array;
                toProtoMsg(message: _108.SignDoc): _108.SignDocProtoMsg;
            };
            SignDocDirectAux: {
                typeUrl: string;
                encode(message: _108.SignDocDirectAux, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _108.SignDocDirectAux;
                fromJSON(object: any): _108.SignDocDirectAux;
                toJSON(message: _108.SignDocDirectAux): unknown;
                fromPartial(object: Partial<_108.SignDocDirectAux>): _108.SignDocDirectAux;
                fromSDK(object: _108.SignDocDirectAuxSDKType): _108.SignDocDirectAux;
                toSDK(message: _108.SignDocDirectAux): _108.SignDocDirectAuxSDKType;
                fromAmino(object: _108.SignDocDirectAuxAmino): _108.SignDocDirectAux;
                toAmino(message: _108.SignDocDirectAux): _108.SignDocDirectAuxAmino;
                fromAminoMsg(object: _108.SignDocDirectAuxAminoMsg): _108.SignDocDirectAux;
                toAminoMsg(message: _108.SignDocDirectAux): _108.SignDocDirectAuxAminoMsg;
                fromProtoMsg(message: _108.SignDocDirectAuxProtoMsg): _108.SignDocDirectAux;
                toProto(message: _108.SignDocDirectAux): Uint8Array;
                toProtoMsg(message: _108.SignDocDirectAux): _108.SignDocDirectAuxProtoMsg;
            };
            TxBody: {
                typeUrl: string;
                encode(message: _108.TxBody, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _108.TxBody;
                fromJSON(object: any): _108.TxBody;
                toJSON(message: _108.TxBody): unknown;
                fromPartial(object: Partial<_108.TxBody>): _108.TxBody;
                fromSDK(object: _108.TxBodySDKType): _108.TxBody;
                toSDK(message: _108.TxBody): _108.TxBodySDKType;
                fromAmino(object: _108.TxBodyAmino): _108.TxBody;
                toAmino(message: _108.TxBody): _108.TxBodyAmino;
                fromAminoMsg(object: _108.TxBodyAminoMsg): _108.TxBody;
                toAminoMsg(message: _108.TxBody): _108.TxBodyAminoMsg;
                fromProtoMsg(message: _108.TxBodyProtoMsg): _108.TxBody;
                toProto(message: _108.TxBody): Uint8Array;
                toProtoMsg(message: _108.TxBody): _108.TxBodyProtoMsg;
            };
            AuthInfo: {
                typeUrl: string;
                encode(message: _108.AuthInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _108.AuthInfo;
                fromJSON(object: any): _108.AuthInfo;
                toJSON(message: _108.AuthInfo): unknown;
                fromPartial(object: Partial<_108.AuthInfo>): _108.AuthInfo;
                fromSDK(object: _108.AuthInfoSDKType): _108.AuthInfo;
                toSDK(message: _108.AuthInfo): _108.AuthInfoSDKType;
                fromAmino(object: _108.AuthInfoAmino): _108.AuthInfo;
                toAmino(message: _108.AuthInfo): _108.AuthInfoAmino;
                fromAminoMsg(object: _108.AuthInfoAminoMsg): _108.AuthInfo;
                toAminoMsg(message: _108.AuthInfo): _108.AuthInfoAminoMsg;
                fromProtoMsg(message: _108.AuthInfoProtoMsg): _108.AuthInfo;
                toProto(message: _108.AuthInfo): Uint8Array;
                toProtoMsg(message: _108.AuthInfo): _108.AuthInfoProtoMsg;
            };
            SignerInfo: {
                typeUrl: string;
                encode(message: _108.SignerInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _108.SignerInfo;
                fromJSON(object: any): _108.SignerInfo;
                toJSON(message: _108.SignerInfo): unknown;
                fromPartial(object: Partial<_108.SignerInfo>): _108.SignerInfo;
                fromSDK(object: _108.SignerInfoSDKType): _108.SignerInfo;
                toSDK(message: _108.SignerInfo): _108.SignerInfoSDKType;
                fromAmino(object: _108.SignerInfoAmino): _108.SignerInfo;
                toAmino(message: _108.SignerInfo): _108.SignerInfoAmino;
                fromAminoMsg(object: _108.SignerInfoAminoMsg): _108.SignerInfo;
                toAminoMsg(message: _108.SignerInfo): _108.SignerInfoAminoMsg;
                fromProtoMsg(message: _108.SignerInfoProtoMsg): _108.SignerInfo;
                toProto(message: _108.SignerInfo): Uint8Array;
                toProtoMsg(message: _108.SignerInfo): _108.SignerInfoProtoMsg;
            };
            ModeInfo: {
                typeUrl: string;
                encode(message: _108.ModeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _108.ModeInfo;
                fromJSON(object: any): _108.ModeInfo;
                toJSON(message: _108.ModeInfo): unknown;
                fromPartial(object: Partial<_108.ModeInfo>): _108.ModeInfo;
                fromSDK(object: _108.ModeInfoSDKType): _108.ModeInfo;
                toSDK(message: _108.ModeInfo): _108.ModeInfoSDKType;
                fromAmino(object: _108.ModeInfoAmino): _108.ModeInfo;
                toAmino(message: _108.ModeInfo): _108.ModeInfoAmino;
                fromAminoMsg(object: _108.ModeInfoAminoMsg): _108.ModeInfo;
                toAminoMsg(message: _108.ModeInfo): _108.ModeInfoAminoMsg;
                fromProtoMsg(message: _108.ModeInfoProtoMsg): _108.ModeInfo;
                toProto(message: _108.ModeInfo): Uint8Array;
                toProtoMsg(message: _108.ModeInfo): _108.ModeInfoProtoMsg;
            };
            ModeInfo_Single: {
                typeUrl: string;
                encode(message: _108.ModeInfo_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _108.ModeInfo_Single;
                fromJSON(object: any): _108.ModeInfo_Single;
                toJSON(message: _108.ModeInfo_Single): unknown;
                fromPartial(object: Partial<_108.ModeInfo_Single>): _108.ModeInfo_Single;
                fromSDK(object: _108.ModeInfo_SingleSDKType): _108.ModeInfo_Single;
                toSDK(message: _108.ModeInfo_Single): _108.ModeInfo_SingleSDKType;
                fromAmino(object: _108.ModeInfo_SingleAmino): _108.ModeInfo_Single;
                toAmino(message: _108.ModeInfo_Single): _108.ModeInfo_SingleAmino;
                fromAminoMsg(object: _108.ModeInfo_SingleAminoMsg): _108.ModeInfo_Single;
                toAminoMsg(message: _108.ModeInfo_Single): _108.ModeInfo_SingleAminoMsg;
                fromProtoMsg(message: _108.ModeInfo_SingleProtoMsg): _108.ModeInfo_Single;
                toProto(message: _108.ModeInfo_Single): Uint8Array;
                toProtoMsg(message: _108.ModeInfo_Single): _108.ModeInfo_SingleProtoMsg;
            };
            ModeInfo_Multi: {
                typeUrl: string;
                encode(message: _108.ModeInfo_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _108.ModeInfo_Multi;
                fromJSON(object: any): _108.ModeInfo_Multi;
                toJSON(message: _108.ModeInfo_Multi): unknown;
                fromPartial(object: Partial<_108.ModeInfo_Multi>): _108.ModeInfo_Multi;
                fromSDK(object: _108.ModeInfo_MultiSDKType): _108.ModeInfo_Multi;
                toSDK(message: _108.ModeInfo_Multi): _108.ModeInfo_MultiSDKType;
                fromAmino(object: _108.ModeInfo_MultiAmino): _108.ModeInfo_Multi;
                toAmino(message: _108.ModeInfo_Multi): _108.ModeInfo_MultiAmino;
                fromAminoMsg(object: _108.ModeInfo_MultiAminoMsg): _108.ModeInfo_Multi;
                toAminoMsg(message: _108.ModeInfo_Multi): _108.ModeInfo_MultiAminoMsg;
                fromProtoMsg(message: _108.ModeInfo_MultiProtoMsg): _108.ModeInfo_Multi;
                toProto(message: _108.ModeInfo_Multi): Uint8Array;
                toProtoMsg(message: _108.ModeInfo_Multi): _108.ModeInfo_MultiProtoMsg;
            };
            Fee: {
                typeUrl: string;
                encode(message: _108.Fee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _108.Fee;
                fromJSON(object: any): _108.Fee;
                toJSON(message: _108.Fee): unknown;
                fromPartial(object: Partial<_108.Fee>): _108.Fee;
                fromSDK(object: _108.FeeSDKType): _108.Fee;
                toSDK(message: _108.Fee): _108.FeeSDKType;
                fromAmino(object: _108.FeeAmino): _108.Fee;
                toAmino(message: _108.Fee): _108.FeeAmino;
                fromAminoMsg(object: _108.FeeAminoMsg): _108.Fee;
                toAminoMsg(message: _108.Fee): _108.FeeAminoMsg;
                fromProtoMsg(message: _108.FeeProtoMsg): _108.Fee;
                toProto(message: _108.Fee): Uint8Array;
                toProtoMsg(message: _108.Fee): _108.FeeProtoMsg;
            };
            Tip: {
                typeUrl: string;
                encode(message: _108.Tip, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _108.Tip;
                fromJSON(object: any): _108.Tip;
                toJSON(message: _108.Tip): unknown;
                fromPartial(object: Partial<_108.Tip>): _108.Tip;
                fromSDK(object: _108.TipSDKType): _108.Tip;
                toSDK(message: _108.Tip): _108.TipSDKType;
                fromAmino(object: _108.TipAmino): _108.Tip;
                toAmino(message: _108.Tip): _108.TipAmino;
                fromAminoMsg(object: _108.TipAminoMsg): _108.Tip;
                toAminoMsg(message: _108.Tip): _108.TipAminoMsg;
                fromProtoMsg(message: _108.TipProtoMsg): _108.Tip;
                toProto(message: _108.Tip): Uint8Array;
                toProtoMsg(message: _108.Tip): _108.TipProtoMsg;
            };
            AuxSignerData: {
                typeUrl: string;
                encode(message: _108.AuxSignerData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _108.AuxSignerData;
                fromJSON(object: any): _108.AuxSignerData;
                toJSON(message: _108.AuxSignerData): unknown;
                fromPartial(object: Partial<_108.AuxSignerData>): _108.AuxSignerData;
                fromSDK(object: _108.AuxSignerDataSDKType): _108.AuxSignerData;
                toSDK(message: _108.AuxSignerData): _108.AuxSignerDataSDKType;
                fromAmino(object: _108.AuxSignerDataAmino): _108.AuxSignerData;
                toAmino(message: _108.AuxSignerData): _108.AuxSignerDataAmino;
                fromAminoMsg(object: _108.AuxSignerDataAminoMsg): _108.AuxSignerData;
                toAminoMsg(message: _108.AuxSignerData): _108.AuxSignerDataAminoMsg;
                fromProtoMsg(message: _108.AuxSignerDataProtoMsg): _108.AuxSignerData;
                toProto(message: _108.AuxSignerData): Uint8Array;
                toProtoMsg(message: _108.AuxSignerData): _108.AuxSignerDataProtoMsg;
            };
            orderByFromJSON(object: any): _107.OrderBy;
            orderByToJSON(object: _107.OrderBy): string;
            broadcastModeFromJSON(object: any): _107.BroadcastMode;
            broadcastModeToJSON(object: _107.BroadcastMode): string;
            OrderBy: typeof _107.OrderBy;
            OrderBySDKType: typeof _107.OrderBy;
            OrderByAmino: typeof _107.OrderBy;
            BroadcastMode: typeof _107.BroadcastMode;
            BroadcastModeSDKType: typeof _107.BroadcastMode;
            BroadcastModeAmino: typeof _107.BroadcastMode;
            GetTxsEventRequest: {
                typeUrl: string;
                encode(message: _107.GetTxsEventRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _107.GetTxsEventRequest;
                fromJSON(object: any): _107.GetTxsEventRequest;
                toJSON(message: _107.GetTxsEventRequest): unknown;
                fromPartial(object: Partial<_107.GetTxsEventRequest>): _107.GetTxsEventRequest;
                fromSDK(object: _107.GetTxsEventRequestSDKType): _107.GetTxsEventRequest;
                toSDK(message: _107.GetTxsEventRequest): _107.GetTxsEventRequestSDKType;
                fromAmino(object: _107.GetTxsEventRequestAmino): _107.GetTxsEventRequest;
                toAmino(message: _107.GetTxsEventRequest): _107.GetTxsEventRequestAmino;
                fromAminoMsg(object: _107.GetTxsEventRequestAminoMsg): _107.GetTxsEventRequest;
                toAminoMsg(message: _107.GetTxsEventRequest): _107.GetTxsEventRequestAminoMsg;
                fromProtoMsg(message: _107.GetTxsEventRequestProtoMsg): _107.GetTxsEventRequest;
                toProto(message: _107.GetTxsEventRequest): Uint8Array;
                toProtoMsg(message: _107.GetTxsEventRequest): _107.GetTxsEventRequestProtoMsg;
            };
            GetTxsEventResponse: {
                typeUrl: string;
                encode(message: _107.GetTxsEventResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _107.GetTxsEventResponse;
                fromJSON(object: any): _107.GetTxsEventResponse;
                toJSON(message: _107.GetTxsEventResponse): unknown;
                fromPartial(object: Partial<_107.GetTxsEventResponse>): _107.GetTxsEventResponse;
                fromSDK(object: _107.GetTxsEventResponseSDKType): _107.GetTxsEventResponse;
                toSDK(message: _107.GetTxsEventResponse): _107.GetTxsEventResponseSDKType;
                fromAmino(object: _107.GetTxsEventResponseAmino): _107.GetTxsEventResponse;
                toAmino(message: _107.GetTxsEventResponse): _107.GetTxsEventResponseAmino;
                fromAminoMsg(object: _107.GetTxsEventResponseAminoMsg): _107.GetTxsEventResponse;
                toAminoMsg(message: _107.GetTxsEventResponse): _107.GetTxsEventResponseAminoMsg;
                fromProtoMsg(message: _107.GetTxsEventResponseProtoMsg): _107.GetTxsEventResponse;
                toProto(message: _107.GetTxsEventResponse): Uint8Array;
                toProtoMsg(message: _107.GetTxsEventResponse): _107.GetTxsEventResponseProtoMsg;
            };
            BroadcastTxRequest: {
                typeUrl: string;
                encode(message: _107.BroadcastTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _107.BroadcastTxRequest;
                fromJSON(object: any): _107.BroadcastTxRequest;
                toJSON(message: _107.BroadcastTxRequest): unknown;
                fromPartial(object: Partial<_107.BroadcastTxRequest>): _107.BroadcastTxRequest;
                fromSDK(object: _107.BroadcastTxRequestSDKType): _107.BroadcastTxRequest;
                toSDK(message: _107.BroadcastTxRequest): _107.BroadcastTxRequestSDKType;
                fromAmino(object: _107.BroadcastTxRequestAmino): _107.BroadcastTxRequest;
                toAmino(message: _107.BroadcastTxRequest): _107.BroadcastTxRequestAmino;
                fromAminoMsg(object: _107.BroadcastTxRequestAminoMsg): _107.BroadcastTxRequest;
                toAminoMsg(message: _107.BroadcastTxRequest): _107.BroadcastTxRequestAminoMsg;
                fromProtoMsg(message: _107.BroadcastTxRequestProtoMsg): _107.BroadcastTxRequest;
                toProto(message: _107.BroadcastTxRequest): Uint8Array;
                toProtoMsg(message: _107.BroadcastTxRequest): _107.BroadcastTxRequestProtoMsg;
            };
            BroadcastTxResponse: {
                typeUrl: string;
                encode(message: _107.BroadcastTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _107.BroadcastTxResponse;
                fromJSON(object: any): _107.BroadcastTxResponse;
                toJSON(message: _107.BroadcastTxResponse): unknown;
                fromPartial(object: Partial<_107.BroadcastTxResponse>): _107.BroadcastTxResponse;
                fromSDK(object: _107.BroadcastTxResponseSDKType): _107.BroadcastTxResponse;
                toSDK(message: _107.BroadcastTxResponse): _107.BroadcastTxResponseSDKType;
                fromAmino(object: _107.BroadcastTxResponseAmino): _107.BroadcastTxResponse;
                toAmino(message: _107.BroadcastTxResponse): _107.BroadcastTxResponseAmino;
                fromAminoMsg(object: _107.BroadcastTxResponseAminoMsg): _107.BroadcastTxResponse;
                toAminoMsg(message: _107.BroadcastTxResponse): _107.BroadcastTxResponseAminoMsg;
                fromProtoMsg(message: _107.BroadcastTxResponseProtoMsg): _107.BroadcastTxResponse;
                toProto(message: _107.BroadcastTxResponse): Uint8Array;
                toProtoMsg(message: _107.BroadcastTxResponse): _107.BroadcastTxResponseProtoMsg;
            };
            SimulateRequest: {
                typeUrl: string;
                encode(message: _107.SimulateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _107.SimulateRequest;
                fromJSON(object: any): _107.SimulateRequest;
                toJSON(message: _107.SimulateRequest): unknown;
                fromPartial(object: Partial<_107.SimulateRequest>): _107.SimulateRequest;
                fromSDK(object: _107.SimulateRequestSDKType): _107.SimulateRequest;
                toSDK(message: _107.SimulateRequest): _107.SimulateRequestSDKType;
                fromAmino(object: _107.SimulateRequestAmino): _107.SimulateRequest;
                toAmino(message: _107.SimulateRequest): _107.SimulateRequestAmino;
                fromAminoMsg(object: _107.SimulateRequestAminoMsg): _107.SimulateRequest;
                toAminoMsg(message: _107.SimulateRequest): _107.SimulateRequestAminoMsg;
                fromProtoMsg(message: _107.SimulateRequestProtoMsg): _107.SimulateRequest;
                toProto(message: _107.SimulateRequest): Uint8Array;
                toProtoMsg(message: _107.SimulateRequest): _107.SimulateRequestProtoMsg;
            };
            SimulateResponse: {
                typeUrl: string;
                encode(message: _107.SimulateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _107.SimulateResponse;
                fromJSON(object: any): _107.SimulateResponse;
                toJSON(message: _107.SimulateResponse): unknown;
                fromPartial(object: Partial<_107.SimulateResponse>): _107.SimulateResponse;
                fromSDK(object: _107.SimulateResponseSDKType): _107.SimulateResponse;
                toSDK(message: _107.SimulateResponse): _107.SimulateResponseSDKType;
                fromAmino(object: _107.SimulateResponseAmino): _107.SimulateResponse;
                toAmino(message: _107.SimulateResponse): _107.SimulateResponseAmino;
                fromAminoMsg(object: _107.SimulateResponseAminoMsg): _107.SimulateResponse;
                toAminoMsg(message: _107.SimulateResponse): _107.SimulateResponseAminoMsg;
                fromProtoMsg(message: _107.SimulateResponseProtoMsg): _107.SimulateResponse;
                toProto(message: _107.SimulateResponse): Uint8Array;
                toProtoMsg(message: _107.SimulateResponse): _107.SimulateResponseProtoMsg;
            };
            GetTxRequest: {
                typeUrl: string;
                encode(message: _107.GetTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _107.GetTxRequest;
                fromJSON(object: any): _107.GetTxRequest;
                toJSON(message: _107.GetTxRequest): unknown;
                fromPartial(object: Partial<_107.GetTxRequest>): _107.GetTxRequest;
                fromSDK(object: _107.GetTxRequestSDKType): _107.GetTxRequest;
                toSDK(message: _107.GetTxRequest): _107.GetTxRequestSDKType;
                fromAmino(object: _107.GetTxRequestAmino): _107.GetTxRequest;
                toAmino(message: _107.GetTxRequest): _107.GetTxRequestAmino;
                fromAminoMsg(object: _107.GetTxRequestAminoMsg): _107.GetTxRequest;
                toAminoMsg(message: _107.GetTxRequest): _107.GetTxRequestAminoMsg;
                fromProtoMsg(message: _107.GetTxRequestProtoMsg): _107.GetTxRequest;
                toProto(message: _107.GetTxRequest): Uint8Array;
                toProtoMsg(message: _107.GetTxRequest): _107.GetTxRequestProtoMsg;
            };
            GetTxResponse: {
                typeUrl: string;
                encode(message: _107.GetTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _107.GetTxResponse;
                fromJSON(object: any): _107.GetTxResponse;
                toJSON(message: _107.GetTxResponse): unknown;
                fromPartial(object: Partial<_107.GetTxResponse>): _107.GetTxResponse;
                fromSDK(object: _107.GetTxResponseSDKType): _107.GetTxResponse;
                toSDK(message: _107.GetTxResponse): _107.GetTxResponseSDKType;
                fromAmino(object: _107.GetTxResponseAmino): _107.GetTxResponse;
                toAmino(message: _107.GetTxResponse): _107.GetTxResponseAmino;
                fromAminoMsg(object: _107.GetTxResponseAminoMsg): _107.GetTxResponse;
                toAminoMsg(message: _107.GetTxResponse): _107.GetTxResponseAminoMsg;
                fromProtoMsg(message: _107.GetTxResponseProtoMsg): _107.GetTxResponse;
                toProto(message: _107.GetTxResponse): Uint8Array;
                toProtoMsg(message: _107.GetTxResponse): _107.GetTxResponseProtoMsg;
            };
            GetBlockWithTxsRequest: {
                typeUrl: string;
                encode(message: _107.GetBlockWithTxsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _107.GetBlockWithTxsRequest;
                fromJSON(object: any): _107.GetBlockWithTxsRequest;
                toJSON(message: _107.GetBlockWithTxsRequest): unknown;
                fromPartial(object: Partial<_107.GetBlockWithTxsRequest>): _107.GetBlockWithTxsRequest;
                fromSDK(object: _107.GetBlockWithTxsRequestSDKType): _107.GetBlockWithTxsRequest;
                toSDK(message: _107.GetBlockWithTxsRequest): _107.GetBlockWithTxsRequestSDKType;
                fromAmino(object: _107.GetBlockWithTxsRequestAmino): _107.GetBlockWithTxsRequest;
                toAmino(message: _107.GetBlockWithTxsRequest): _107.GetBlockWithTxsRequestAmino;
                fromAminoMsg(object: _107.GetBlockWithTxsRequestAminoMsg): _107.GetBlockWithTxsRequest;
                toAminoMsg(message: _107.GetBlockWithTxsRequest): _107.GetBlockWithTxsRequestAminoMsg;
                fromProtoMsg(message: _107.GetBlockWithTxsRequestProtoMsg): _107.GetBlockWithTxsRequest;
                toProto(message: _107.GetBlockWithTxsRequest): Uint8Array;
                toProtoMsg(message: _107.GetBlockWithTxsRequest): _107.GetBlockWithTxsRequestProtoMsg;
            };
            GetBlockWithTxsResponse: {
                typeUrl: string;
                encode(message: _107.GetBlockWithTxsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _107.GetBlockWithTxsResponse;
                fromJSON(object: any): _107.GetBlockWithTxsResponse;
                toJSON(message: _107.GetBlockWithTxsResponse): unknown;
                fromPartial(object: Partial<_107.GetBlockWithTxsResponse>): _107.GetBlockWithTxsResponse;
                fromSDK(object: _107.GetBlockWithTxsResponseSDKType): _107.GetBlockWithTxsResponse;
                toSDK(message: _107.GetBlockWithTxsResponse): _107.GetBlockWithTxsResponseSDKType;
                fromAmino(object: _107.GetBlockWithTxsResponseAmino): _107.GetBlockWithTxsResponse;
                toAmino(message: _107.GetBlockWithTxsResponse): _107.GetBlockWithTxsResponseAmino;
                fromAminoMsg(object: _107.GetBlockWithTxsResponseAminoMsg): _107.GetBlockWithTxsResponse;
                toAminoMsg(message: _107.GetBlockWithTxsResponse): _107.GetBlockWithTxsResponseAminoMsg;
                fromProtoMsg(message: _107.GetBlockWithTxsResponseProtoMsg): _107.GetBlockWithTxsResponse;
                toProto(message: _107.GetBlockWithTxsResponse): Uint8Array;
                toProtoMsg(message: _107.GetBlockWithTxsResponse): _107.GetBlockWithTxsResponseProtoMsg;
            };
            TxDecodeRequest: {
                typeUrl: string;
                encode(message: _107.TxDecodeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _107.TxDecodeRequest;
                fromJSON(object: any): _107.TxDecodeRequest;
                toJSON(message: _107.TxDecodeRequest): unknown;
                fromPartial(object: Partial<_107.TxDecodeRequest>): _107.TxDecodeRequest;
                fromSDK(object: _107.TxDecodeRequestSDKType): _107.TxDecodeRequest;
                toSDK(message: _107.TxDecodeRequest): _107.TxDecodeRequestSDKType;
                fromAmino(object: _107.TxDecodeRequestAmino): _107.TxDecodeRequest;
                toAmino(message: _107.TxDecodeRequest): _107.TxDecodeRequestAmino;
                fromAminoMsg(object: _107.TxDecodeRequestAminoMsg): _107.TxDecodeRequest;
                toAminoMsg(message: _107.TxDecodeRequest): _107.TxDecodeRequestAminoMsg;
                fromProtoMsg(message: _107.TxDecodeRequestProtoMsg): _107.TxDecodeRequest;
                toProto(message: _107.TxDecodeRequest): Uint8Array;
                toProtoMsg(message: _107.TxDecodeRequest): _107.TxDecodeRequestProtoMsg;
            };
            TxDecodeResponse: {
                typeUrl: string;
                encode(message: _107.TxDecodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _107.TxDecodeResponse;
                fromJSON(object: any): _107.TxDecodeResponse;
                toJSON(message: _107.TxDecodeResponse): unknown;
                fromPartial(object: Partial<_107.TxDecodeResponse>): _107.TxDecodeResponse;
                fromSDK(object: _107.TxDecodeResponseSDKType): _107.TxDecodeResponse;
                toSDK(message: _107.TxDecodeResponse): _107.TxDecodeResponseSDKType;
                fromAmino(object: _107.TxDecodeResponseAmino): _107.TxDecodeResponse;
                toAmino(message: _107.TxDecodeResponse): _107.TxDecodeResponseAmino;
                fromAminoMsg(object: _107.TxDecodeResponseAminoMsg): _107.TxDecodeResponse;
                toAminoMsg(message: _107.TxDecodeResponse): _107.TxDecodeResponseAminoMsg;
                fromProtoMsg(message: _107.TxDecodeResponseProtoMsg): _107.TxDecodeResponse;
                toProto(message: _107.TxDecodeResponse): Uint8Array;
                toProtoMsg(message: _107.TxDecodeResponse): _107.TxDecodeResponseProtoMsg;
            };
            TxEncodeRequest: {
                typeUrl: string;
                encode(message: _107.TxEncodeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _107.TxEncodeRequest;
                fromJSON(object: any): _107.TxEncodeRequest;
                toJSON(message: _107.TxEncodeRequest): unknown;
                fromPartial(object: Partial<_107.TxEncodeRequest>): _107.TxEncodeRequest;
                fromSDK(object: _107.TxEncodeRequestSDKType): _107.TxEncodeRequest;
                toSDK(message: _107.TxEncodeRequest): _107.TxEncodeRequestSDKType;
                fromAmino(object: _107.TxEncodeRequestAmino): _107.TxEncodeRequest;
                toAmino(message: _107.TxEncodeRequest): _107.TxEncodeRequestAmino;
                fromAminoMsg(object: _107.TxEncodeRequestAminoMsg): _107.TxEncodeRequest;
                toAminoMsg(message: _107.TxEncodeRequest): _107.TxEncodeRequestAminoMsg;
                fromProtoMsg(message: _107.TxEncodeRequestProtoMsg): _107.TxEncodeRequest;
                toProto(message: _107.TxEncodeRequest): Uint8Array;
                toProtoMsg(message: _107.TxEncodeRequest): _107.TxEncodeRequestProtoMsg;
            };
            TxEncodeResponse: {
                typeUrl: string;
                encode(message: _107.TxEncodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _107.TxEncodeResponse;
                fromJSON(object: any): _107.TxEncodeResponse;
                toJSON(message: _107.TxEncodeResponse): unknown;
                fromPartial(object: Partial<_107.TxEncodeResponse>): _107.TxEncodeResponse;
                fromSDK(object: _107.TxEncodeResponseSDKType): _107.TxEncodeResponse;
                toSDK(message: _107.TxEncodeResponse): _107.TxEncodeResponseSDKType;
                fromAmino(object: _107.TxEncodeResponseAmino): _107.TxEncodeResponse;
                toAmino(message: _107.TxEncodeResponse): _107.TxEncodeResponseAmino;
                fromAminoMsg(object: _107.TxEncodeResponseAminoMsg): _107.TxEncodeResponse;
                toAminoMsg(message: _107.TxEncodeResponse): _107.TxEncodeResponseAminoMsg;
                fromProtoMsg(message: _107.TxEncodeResponseProtoMsg): _107.TxEncodeResponse;
                toProto(message: _107.TxEncodeResponse): Uint8Array;
                toProtoMsg(message: _107.TxEncodeResponse): _107.TxEncodeResponseProtoMsg;
            };
            TxEncodeAminoRequest: {
                typeUrl: string;
                encode(message: _107.TxEncodeAminoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _107.TxEncodeAminoRequest;
                fromJSON(object: any): _107.TxEncodeAminoRequest;
                toJSON(message: _107.TxEncodeAminoRequest): unknown;
                fromPartial(object: Partial<_107.TxEncodeAminoRequest>): _107.TxEncodeAminoRequest;
                fromSDK(object: _107.TxEncodeAminoRequestSDKType): _107.TxEncodeAminoRequest;
                toSDK(message: _107.TxEncodeAminoRequest): _107.TxEncodeAminoRequestSDKType;
                fromAmino(object: _107.TxEncodeAminoRequestAmino): _107.TxEncodeAminoRequest;
                toAmino(message: _107.TxEncodeAminoRequest): _107.TxEncodeAminoRequestAmino;
                fromAminoMsg(object: _107.TxEncodeAminoRequestAminoMsg): _107.TxEncodeAminoRequest;
                toAminoMsg(message: _107.TxEncodeAminoRequest): _107.TxEncodeAminoRequestAminoMsg;
                fromProtoMsg(message: _107.TxEncodeAminoRequestProtoMsg): _107.TxEncodeAminoRequest;
                toProto(message: _107.TxEncodeAminoRequest): Uint8Array;
                toProtoMsg(message: _107.TxEncodeAminoRequest): _107.TxEncodeAminoRequestProtoMsg;
            };
            TxEncodeAminoResponse: {
                typeUrl: string;
                encode(message: _107.TxEncodeAminoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _107.TxEncodeAminoResponse;
                fromJSON(object: any): _107.TxEncodeAminoResponse;
                toJSON(message: _107.TxEncodeAminoResponse): unknown;
                fromPartial(object: Partial<_107.TxEncodeAminoResponse>): _107.TxEncodeAminoResponse;
                fromSDK(object: _107.TxEncodeAminoResponseSDKType): _107.TxEncodeAminoResponse;
                toSDK(message: _107.TxEncodeAminoResponse): _107.TxEncodeAminoResponseSDKType;
                fromAmino(object: _107.TxEncodeAminoResponseAmino): _107.TxEncodeAminoResponse;
                toAmino(message: _107.TxEncodeAminoResponse): _107.TxEncodeAminoResponseAmino;
                fromAminoMsg(object: _107.TxEncodeAminoResponseAminoMsg): _107.TxEncodeAminoResponse;
                toAminoMsg(message: _107.TxEncodeAminoResponse): _107.TxEncodeAminoResponseAminoMsg;
                fromProtoMsg(message: _107.TxEncodeAminoResponseProtoMsg): _107.TxEncodeAminoResponse;
                toProto(message: _107.TxEncodeAminoResponse): Uint8Array;
                toProtoMsg(message: _107.TxEncodeAminoResponse): _107.TxEncodeAminoResponseProtoMsg;
            };
            TxDecodeAminoRequest: {
                typeUrl: string;
                encode(message: _107.TxDecodeAminoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _107.TxDecodeAminoRequest;
                fromJSON(object: any): _107.TxDecodeAminoRequest;
                toJSON(message: _107.TxDecodeAminoRequest): unknown;
                fromPartial(object: Partial<_107.TxDecodeAminoRequest>): _107.TxDecodeAminoRequest;
                fromSDK(object: _107.TxDecodeAminoRequestSDKType): _107.TxDecodeAminoRequest;
                toSDK(message: _107.TxDecodeAminoRequest): _107.TxDecodeAminoRequestSDKType;
                fromAmino(object: _107.TxDecodeAminoRequestAmino): _107.TxDecodeAminoRequest;
                toAmino(message: _107.TxDecodeAminoRequest): _107.TxDecodeAminoRequestAmino;
                fromAminoMsg(object: _107.TxDecodeAminoRequestAminoMsg): _107.TxDecodeAminoRequest;
                toAminoMsg(message: _107.TxDecodeAminoRequest): _107.TxDecodeAminoRequestAminoMsg;
                fromProtoMsg(message: _107.TxDecodeAminoRequestProtoMsg): _107.TxDecodeAminoRequest;
                toProto(message: _107.TxDecodeAminoRequest): Uint8Array;
                toProtoMsg(message: _107.TxDecodeAminoRequest): _107.TxDecodeAminoRequestProtoMsg;
            };
            TxDecodeAminoResponse: {
                typeUrl: string;
                encode(message: _107.TxDecodeAminoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _107.TxDecodeAminoResponse;
                fromJSON(object: any): _107.TxDecodeAminoResponse;
                toJSON(message: _107.TxDecodeAminoResponse): unknown;
                fromPartial(object: Partial<_107.TxDecodeAminoResponse>): _107.TxDecodeAminoResponse;
                fromSDK(object: _107.TxDecodeAminoResponseSDKType): _107.TxDecodeAminoResponse;
                toSDK(message: _107.TxDecodeAminoResponse): _107.TxDecodeAminoResponseSDKType;
                fromAmino(object: _107.TxDecodeAminoResponseAmino): _107.TxDecodeAminoResponse;
                toAmino(message: _107.TxDecodeAminoResponse): _107.TxDecodeAminoResponseAmino;
                fromAminoMsg(object: _107.TxDecodeAminoResponseAminoMsg): _107.TxDecodeAminoResponse;
                toAminoMsg(message: _107.TxDecodeAminoResponse): _107.TxDecodeAminoResponseAminoMsg;
                fromProtoMsg(message: _107.TxDecodeAminoResponseProtoMsg): _107.TxDecodeAminoResponse;
                toProto(message: _107.TxDecodeAminoResponse): Uint8Array;
                toProtoMsg(message: _107.TxDecodeAminoResponse): _107.TxDecodeAminoResponseProtoMsg;
            };
        };
    }
    namespace upgrade {
        namespace module {
            const v1: {
                protobufPackage: "cosmos.upgrade.module.v1";
                Module: {
                    typeUrl: string;
                    encode(message: _109.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _109.Module;
                    fromJSON(object: any): _109.Module;
                    toJSON(message: _109.Module): unknown;
                    fromPartial(object: Partial<_109.Module>): _109.Module;
                    fromSDK(object: _109.ModuleSDKType): _109.Module;
                    toSDK(message: _109.Module): _109.ModuleSDKType;
                    fromAmino(object: _109.ModuleAmino): _109.Module;
                    toAmino(message: _109.Module): _109.ModuleAmino;
                    fromAminoMsg(object: _109.ModuleAminoMsg): _109.Module;
                    toAminoMsg(message: _109.Module): _109.ModuleAminoMsg;
                    fromProtoMsg(message: _109.ModuleProtoMsg): _109.Module;
                    toProto(message: _109.Module): Uint8Array;
                    toProtoMsg(message: _109.Module): _109.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            Msg: typeof _223.Msg;
            Query: typeof _210.Query;
            QueryClientImpl: typeof _210.QueryClientImpl;
            LCDQueryClient: typeof _192.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    softwareUpgrade(value: _111.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUpgrade(value: _111.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    softwareUpgrade(value: _111.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _111.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _111.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _111.MsgCancelUpgrade;
                    };
                };
                toJSON: {
                    softwareUpgrade(value: _111.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: unknown;
                    };
                    cancelUpgrade(value: _111.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    softwareUpgrade(value: any): {
                        typeUrl: string;
                        value: _111.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: any): {
                        typeUrl: string;
                        value: _111.MsgCancelUpgrade;
                    };
                };
                fromPartial: {
                    softwareUpgrade(value: _111.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _111.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _111.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _111.MsgCancelUpgrade;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
                    aminoType: string;
                    toAmino: (message: _111.MsgSoftwareUpgrade) => _111.MsgSoftwareUpgradeAmino;
                    fromAmino: (object: _111.MsgSoftwareUpgradeAmino) => _111.MsgSoftwareUpgrade;
                };
                "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
                    aminoType: string;
                    toAmino: (message: _111.MsgCancelUpgrade) => _111.MsgCancelUpgradeAmino;
                    fromAmino: (object: _111.MsgCancelUpgradeAmino) => _111.MsgCancelUpgrade;
                };
            };
            protobufPackage: "cosmos.upgrade.v1beta1";
            Plan: {
                typeUrl: string;
                encode(message: _112.Plan, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.Plan;
                fromJSON(object: any): _112.Plan;
                toJSON(message: _112.Plan): unknown;
                fromPartial(object: Partial<_112.Plan>): _112.Plan;
                fromSDK(object: _112.PlanSDKType): _112.Plan;
                toSDK(message: _112.Plan): _112.PlanSDKType;
                fromAmino(object: _112.PlanAmino): _112.Plan;
                toAmino(message: _112.Plan): _112.PlanAmino;
                fromAminoMsg(object: _112.PlanAminoMsg): _112.Plan;
                toAminoMsg(message: _112.Plan): _112.PlanAminoMsg;
                fromProtoMsg(message: _112.PlanProtoMsg): _112.Plan;
                toProto(message: _112.Plan): Uint8Array;
                toProtoMsg(message: _112.Plan): _112.PlanProtoMsg;
            };
            SoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _112.SoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.SoftwareUpgradeProposal;
                fromJSON(object: any): _112.SoftwareUpgradeProposal;
                toJSON(message: _112.SoftwareUpgradeProposal): unknown;
                fromPartial(object: Partial<_112.SoftwareUpgradeProposal>): _112.SoftwareUpgradeProposal;
                fromSDK(object: _112.SoftwareUpgradeProposalSDKType): _112.SoftwareUpgradeProposal;
                toSDK(message: _112.SoftwareUpgradeProposal): _112.SoftwareUpgradeProposalSDKType;
                fromAmino(object: _112.SoftwareUpgradeProposalAmino): _112.SoftwareUpgradeProposal;
                toAmino(message: _112.SoftwareUpgradeProposal): _112.SoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _112.SoftwareUpgradeProposalAminoMsg): _112.SoftwareUpgradeProposal;
                toAminoMsg(message: _112.SoftwareUpgradeProposal): _112.SoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _112.SoftwareUpgradeProposalProtoMsg): _112.SoftwareUpgradeProposal;
                toProto(message: _112.SoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _112.SoftwareUpgradeProposal): _112.SoftwareUpgradeProposalProtoMsg;
            };
            CancelSoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _112.CancelSoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.CancelSoftwareUpgradeProposal;
                fromJSON(object: any): _112.CancelSoftwareUpgradeProposal;
                toJSON(message: _112.CancelSoftwareUpgradeProposal): unknown;
                fromPartial(object: Partial<_112.CancelSoftwareUpgradeProposal>): _112.CancelSoftwareUpgradeProposal;
                fromSDK(object: _112.CancelSoftwareUpgradeProposalSDKType): _112.CancelSoftwareUpgradeProposal;
                toSDK(message: _112.CancelSoftwareUpgradeProposal): _112.CancelSoftwareUpgradeProposalSDKType;
                fromAmino(object: _112.CancelSoftwareUpgradeProposalAmino): _112.CancelSoftwareUpgradeProposal;
                toAmino(message: _112.CancelSoftwareUpgradeProposal): _112.CancelSoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _112.CancelSoftwareUpgradeProposalAminoMsg): _112.CancelSoftwareUpgradeProposal;
                toAminoMsg(message: _112.CancelSoftwareUpgradeProposal): _112.CancelSoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _112.CancelSoftwareUpgradeProposalProtoMsg): _112.CancelSoftwareUpgradeProposal;
                toProto(message: _112.CancelSoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _112.CancelSoftwareUpgradeProposal): _112.CancelSoftwareUpgradeProposalProtoMsg;
            };
            ModuleVersion: {
                typeUrl: string;
                encode(message: _112.ModuleVersion, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.ModuleVersion;
                fromJSON(object: any): _112.ModuleVersion;
                toJSON(message: _112.ModuleVersion): unknown;
                fromPartial(object: Partial<_112.ModuleVersion>): _112.ModuleVersion;
                fromSDK(object: _112.ModuleVersionSDKType): _112.ModuleVersion;
                toSDK(message: _112.ModuleVersion): _112.ModuleVersionSDKType;
                fromAmino(object: _112.ModuleVersionAmino): _112.ModuleVersion;
                toAmino(message: _112.ModuleVersion): _112.ModuleVersionAmino;
                fromAminoMsg(object: _112.ModuleVersionAminoMsg): _112.ModuleVersion;
                toAminoMsg(message: _112.ModuleVersion): _112.ModuleVersionAminoMsg;
                fromProtoMsg(message: _112.ModuleVersionProtoMsg): _112.ModuleVersion;
                toProto(message: _112.ModuleVersion): Uint8Array;
                toProtoMsg(message: _112.ModuleVersion): _112.ModuleVersionProtoMsg;
            };
            MsgSoftwareUpgrade: {
                typeUrl: string;
                encode(message: _111.MsgSoftwareUpgrade, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _111.MsgSoftwareUpgrade;
                fromJSON(object: any): _111.MsgSoftwareUpgrade;
                toJSON(message: _111.MsgSoftwareUpgrade): unknown;
                fromPartial(object: Partial<_111.MsgSoftwareUpgrade>): _111.MsgSoftwareUpgrade;
                fromSDK(object: _111.MsgSoftwareUpgradeSDKType): _111.MsgSoftwareUpgrade;
                toSDK(message: _111.MsgSoftwareUpgrade): _111.MsgSoftwareUpgradeSDKType;
                fromAmino(object: _111.MsgSoftwareUpgradeAmino): _111.MsgSoftwareUpgrade;
                toAmino(message: _111.MsgSoftwareUpgrade): _111.MsgSoftwareUpgradeAmino;
                fromAminoMsg(object: _111.MsgSoftwareUpgradeAminoMsg): _111.MsgSoftwareUpgrade;
                toAminoMsg(message: _111.MsgSoftwareUpgrade): _111.MsgSoftwareUpgradeAminoMsg;
                fromProtoMsg(message: _111.MsgSoftwareUpgradeProtoMsg): _111.MsgSoftwareUpgrade;
                toProto(message: _111.MsgSoftwareUpgrade): Uint8Array;
                toProtoMsg(message: _111.MsgSoftwareUpgrade): _111.MsgSoftwareUpgradeProtoMsg;
            };
            MsgSoftwareUpgradeResponse: {
                typeUrl: string;
                encode(_: _111.MsgSoftwareUpgradeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _111.MsgSoftwareUpgradeResponse;
                fromJSON(_: any): _111.MsgSoftwareUpgradeResponse;
                toJSON(_: _111.MsgSoftwareUpgradeResponse): unknown;
                fromPartial(_: Partial<_111.MsgSoftwareUpgradeResponse>): _111.MsgSoftwareUpgradeResponse;
                fromSDK(_: _111.MsgSoftwareUpgradeResponseSDKType): _111.MsgSoftwareUpgradeResponse;
                toSDK(_: _111.MsgSoftwareUpgradeResponse): _111.MsgSoftwareUpgradeResponseSDKType;
                fromAmino(_: _111.MsgSoftwareUpgradeResponseAmino): _111.MsgSoftwareUpgradeResponse;
                toAmino(_: _111.MsgSoftwareUpgradeResponse): _111.MsgSoftwareUpgradeResponseAmino;
                fromAminoMsg(object: _111.MsgSoftwareUpgradeResponseAminoMsg): _111.MsgSoftwareUpgradeResponse;
                toAminoMsg(message: _111.MsgSoftwareUpgradeResponse): _111.MsgSoftwareUpgradeResponseAminoMsg;
                fromProtoMsg(message: _111.MsgSoftwareUpgradeResponseProtoMsg): _111.MsgSoftwareUpgradeResponse;
                toProto(message: _111.MsgSoftwareUpgradeResponse): Uint8Array;
                toProtoMsg(message: _111.MsgSoftwareUpgradeResponse): _111.MsgSoftwareUpgradeResponseProtoMsg;
            };
            MsgCancelUpgrade: {
                typeUrl: string;
                encode(message: _111.MsgCancelUpgrade, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _111.MsgCancelUpgrade;
                fromJSON(object: any): _111.MsgCancelUpgrade;
                toJSON(message: _111.MsgCancelUpgrade): unknown;
                fromPartial(object: Partial<_111.MsgCancelUpgrade>): _111.MsgCancelUpgrade;
                fromSDK(object: _111.MsgCancelUpgradeSDKType): _111.MsgCancelUpgrade;
                toSDK(message: _111.MsgCancelUpgrade): _111.MsgCancelUpgradeSDKType;
                fromAmino(object: _111.MsgCancelUpgradeAmino): _111.MsgCancelUpgrade;
                toAmino(message: _111.MsgCancelUpgrade): _111.MsgCancelUpgradeAmino;
                fromAminoMsg(object: _111.MsgCancelUpgradeAminoMsg): _111.MsgCancelUpgrade;
                toAminoMsg(message: _111.MsgCancelUpgrade): _111.MsgCancelUpgradeAminoMsg;
                fromProtoMsg(message: _111.MsgCancelUpgradeProtoMsg): _111.MsgCancelUpgrade;
                toProto(message: _111.MsgCancelUpgrade): Uint8Array;
                toProtoMsg(message: _111.MsgCancelUpgrade): _111.MsgCancelUpgradeProtoMsg;
            };
            MsgCancelUpgradeResponse: {
                typeUrl: string;
                encode(_: _111.MsgCancelUpgradeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _111.MsgCancelUpgradeResponse;
                fromJSON(_: any): _111.MsgCancelUpgradeResponse;
                toJSON(_: _111.MsgCancelUpgradeResponse): unknown;
                fromPartial(_: Partial<_111.MsgCancelUpgradeResponse>): _111.MsgCancelUpgradeResponse;
                fromSDK(_: _111.MsgCancelUpgradeResponseSDKType): _111.MsgCancelUpgradeResponse;
                toSDK(_: _111.MsgCancelUpgradeResponse): _111.MsgCancelUpgradeResponseSDKType;
                fromAmino(_: _111.MsgCancelUpgradeResponseAmino): _111.MsgCancelUpgradeResponse;
                toAmino(_: _111.MsgCancelUpgradeResponse): _111.MsgCancelUpgradeResponseAmino;
                fromAminoMsg(object: _111.MsgCancelUpgradeResponseAminoMsg): _111.MsgCancelUpgradeResponse;
                toAminoMsg(message: _111.MsgCancelUpgradeResponse): _111.MsgCancelUpgradeResponseAminoMsg;
                fromProtoMsg(message: _111.MsgCancelUpgradeResponseProtoMsg): _111.MsgCancelUpgradeResponse;
                toProto(message: _111.MsgCancelUpgradeResponse): Uint8Array;
                toProtoMsg(message: _111.MsgCancelUpgradeResponse): _111.MsgCancelUpgradeResponseProtoMsg;
            };
            QueryCurrentPlanRequest: {
                typeUrl: string;
                encode(_: _110.QueryCurrentPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _110.QueryCurrentPlanRequest;
                fromJSON(_: any): _110.QueryCurrentPlanRequest;
                toJSON(_: _110.QueryCurrentPlanRequest): unknown;
                fromPartial(_: Partial<_110.QueryCurrentPlanRequest>): _110.QueryCurrentPlanRequest;
                fromSDK(_: _110.QueryCurrentPlanRequestSDKType): _110.QueryCurrentPlanRequest;
                toSDK(_: _110.QueryCurrentPlanRequest): _110.QueryCurrentPlanRequestSDKType;
                fromAmino(_: _110.QueryCurrentPlanRequestAmino): _110.QueryCurrentPlanRequest;
                toAmino(_: _110.QueryCurrentPlanRequest): _110.QueryCurrentPlanRequestAmino;
                fromAminoMsg(object: _110.QueryCurrentPlanRequestAminoMsg): _110.QueryCurrentPlanRequest;
                toAminoMsg(message: _110.QueryCurrentPlanRequest): _110.QueryCurrentPlanRequestAminoMsg;
                fromProtoMsg(message: _110.QueryCurrentPlanRequestProtoMsg): _110.QueryCurrentPlanRequest;
                toProto(message: _110.QueryCurrentPlanRequest): Uint8Array;
                toProtoMsg(message: _110.QueryCurrentPlanRequest): _110.QueryCurrentPlanRequestProtoMsg;
            };
            QueryCurrentPlanResponse: {
                typeUrl: string;
                encode(message: _110.QueryCurrentPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _110.QueryCurrentPlanResponse;
                fromJSON(object: any): _110.QueryCurrentPlanResponse;
                toJSON(message: _110.QueryCurrentPlanResponse): unknown;
                fromPartial(object: Partial<_110.QueryCurrentPlanResponse>): _110.QueryCurrentPlanResponse;
                fromSDK(object: _110.QueryCurrentPlanResponseSDKType): _110.QueryCurrentPlanResponse;
                toSDK(message: _110.QueryCurrentPlanResponse): _110.QueryCurrentPlanResponseSDKType;
                fromAmino(object: _110.QueryCurrentPlanResponseAmino): _110.QueryCurrentPlanResponse;
                toAmino(message: _110.QueryCurrentPlanResponse): _110.QueryCurrentPlanResponseAmino;
                fromAminoMsg(object: _110.QueryCurrentPlanResponseAminoMsg): _110.QueryCurrentPlanResponse;
                toAminoMsg(message: _110.QueryCurrentPlanResponse): _110.QueryCurrentPlanResponseAminoMsg;
                fromProtoMsg(message: _110.QueryCurrentPlanResponseProtoMsg): _110.QueryCurrentPlanResponse;
                toProto(message: _110.QueryCurrentPlanResponse): Uint8Array;
                toProtoMsg(message: _110.QueryCurrentPlanResponse): _110.QueryCurrentPlanResponseProtoMsg;
            };
            QueryAppliedPlanRequest: {
                typeUrl: string;
                encode(message: _110.QueryAppliedPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _110.QueryAppliedPlanRequest;
                fromJSON(object: any): _110.QueryAppliedPlanRequest;
                toJSON(message: _110.QueryAppliedPlanRequest): unknown;
                fromPartial(object: Partial<_110.QueryAppliedPlanRequest>): _110.QueryAppliedPlanRequest;
                fromSDK(object: _110.QueryAppliedPlanRequestSDKType): _110.QueryAppliedPlanRequest;
                toSDK(message: _110.QueryAppliedPlanRequest): _110.QueryAppliedPlanRequestSDKType;
                fromAmino(object: _110.QueryAppliedPlanRequestAmino): _110.QueryAppliedPlanRequest;
                toAmino(message: _110.QueryAppliedPlanRequest): _110.QueryAppliedPlanRequestAmino;
                fromAminoMsg(object: _110.QueryAppliedPlanRequestAminoMsg): _110.QueryAppliedPlanRequest;
                toAminoMsg(message: _110.QueryAppliedPlanRequest): _110.QueryAppliedPlanRequestAminoMsg;
                fromProtoMsg(message: _110.QueryAppliedPlanRequestProtoMsg): _110.QueryAppliedPlanRequest;
                toProto(message: _110.QueryAppliedPlanRequest): Uint8Array;
                toProtoMsg(message: _110.QueryAppliedPlanRequest): _110.QueryAppliedPlanRequestProtoMsg;
            };
            QueryAppliedPlanResponse: {
                typeUrl: string;
                encode(message: _110.QueryAppliedPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _110.QueryAppliedPlanResponse;
                fromJSON(object: any): _110.QueryAppliedPlanResponse;
                toJSON(message: _110.QueryAppliedPlanResponse): unknown;
                fromPartial(object: Partial<_110.QueryAppliedPlanResponse>): _110.QueryAppliedPlanResponse;
                fromSDK(object: _110.QueryAppliedPlanResponseSDKType): _110.QueryAppliedPlanResponse;
                toSDK(message: _110.QueryAppliedPlanResponse): _110.QueryAppliedPlanResponseSDKType;
                fromAmino(object: _110.QueryAppliedPlanResponseAmino): _110.QueryAppliedPlanResponse;
                toAmino(message: _110.QueryAppliedPlanResponse): _110.QueryAppliedPlanResponseAmino;
                fromAminoMsg(object: _110.QueryAppliedPlanResponseAminoMsg): _110.QueryAppliedPlanResponse;
                toAminoMsg(message: _110.QueryAppliedPlanResponse): _110.QueryAppliedPlanResponseAminoMsg;
                fromProtoMsg(message: _110.QueryAppliedPlanResponseProtoMsg): _110.QueryAppliedPlanResponse;
                toProto(message: _110.QueryAppliedPlanResponse): Uint8Array;
                toProtoMsg(message: _110.QueryAppliedPlanResponse): _110.QueryAppliedPlanResponseProtoMsg;
            };
            QueryUpgradedConsensusStateRequest: {
                typeUrl: string;
                encode(message: _110.QueryUpgradedConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _110.QueryUpgradedConsensusStateRequest;
                fromJSON(object: any): _110.QueryUpgradedConsensusStateRequest;
                toJSON(message: _110.QueryUpgradedConsensusStateRequest): unknown;
                fromPartial(object: Partial<_110.QueryUpgradedConsensusStateRequest>): _110.QueryUpgradedConsensusStateRequest;
                fromSDK(object: _110.QueryUpgradedConsensusStateRequestSDKType): _110.QueryUpgradedConsensusStateRequest;
                toSDK(message: _110.QueryUpgradedConsensusStateRequest): _110.QueryUpgradedConsensusStateRequestSDKType;
                fromAmino(object: _110.QueryUpgradedConsensusStateRequestAmino): _110.QueryUpgradedConsensusStateRequest;
                toAmino(message: _110.QueryUpgradedConsensusStateRequest): _110.QueryUpgradedConsensusStateRequestAmino;
                fromAminoMsg(object: _110.QueryUpgradedConsensusStateRequestAminoMsg): _110.QueryUpgradedConsensusStateRequest;
                toAminoMsg(message: _110.QueryUpgradedConsensusStateRequest): _110.QueryUpgradedConsensusStateRequestAminoMsg;
                fromProtoMsg(message: _110.QueryUpgradedConsensusStateRequestProtoMsg): _110.QueryUpgradedConsensusStateRequest;
                toProto(message: _110.QueryUpgradedConsensusStateRequest): Uint8Array;
                toProtoMsg(message: _110.QueryUpgradedConsensusStateRequest): _110.QueryUpgradedConsensusStateRequestProtoMsg;
            };
            QueryUpgradedConsensusStateResponse: {
                typeUrl: string;
                encode(message: _110.QueryUpgradedConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _110.QueryUpgradedConsensusStateResponse;
                fromJSON(object: any): _110.QueryUpgradedConsensusStateResponse;
                toJSON(message: _110.QueryUpgradedConsensusStateResponse): unknown;
                fromPartial(object: Partial<_110.QueryUpgradedConsensusStateResponse>): _110.QueryUpgradedConsensusStateResponse;
                fromSDK(object: _110.QueryUpgradedConsensusStateResponseSDKType): _110.QueryUpgradedConsensusStateResponse;
                toSDK(message: _110.QueryUpgradedConsensusStateResponse): _110.QueryUpgradedConsensusStateResponseSDKType;
                fromAmino(object: _110.QueryUpgradedConsensusStateResponseAmino): _110.QueryUpgradedConsensusStateResponse;
                toAmino(message: _110.QueryUpgradedConsensusStateResponse): _110.QueryUpgradedConsensusStateResponseAmino;
                fromAminoMsg(object: _110.QueryUpgradedConsensusStateResponseAminoMsg): _110.QueryUpgradedConsensusStateResponse;
                toAminoMsg(message: _110.QueryUpgradedConsensusStateResponse): _110.QueryUpgradedConsensusStateResponseAminoMsg;
                fromProtoMsg(message: _110.QueryUpgradedConsensusStateResponseProtoMsg): _110.QueryUpgradedConsensusStateResponse;
                toProto(message: _110.QueryUpgradedConsensusStateResponse): Uint8Array;
                toProtoMsg(message: _110.QueryUpgradedConsensusStateResponse): _110.QueryUpgradedConsensusStateResponseProtoMsg;
            };
            QueryModuleVersionsRequest: {
                typeUrl: string;
                encode(message: _110.QueryModuleVersionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _110.QueryModuleVersionsRequest;
                fromJSON(object: any): _110.QueryModuleVersionsRequest;
                toJSON(message: _110.QueryModuleVersionsRequest): unknown;
                fromPartial(object: Partial<_110.QueryModuleVersionsRequest>): _110.QueryModuleVersionsRequest;
                fromSDK(object: _110.QueryModuleVersionsRequestSDKType): _110.QueryModuleVersionsRequest;
                toSDK(message: _110.QueryModuleVersionsRequest): _110.QueryModuleVersionsRequestSDKType;
                fromAmino(object: _110.QueryModuleVersionsRequestAmino): _110.QueryModuleVersionsRequest;
                toAmino(message: _110.QueryModuleVersionsRequest): _110.QueryModuleVersionsRequestAmino;
                fromAminoMsg(object: _110.QueryModuleVersionsRequestAminoMsg): _110.QueryModuleVersionsRequest;
                toAminoMsg(message: _110.QueryModuleVersionsRequest): _110.QueryModuleVersionsRequestAminoMsg;
                fromProtoMsg(message: _110.QueryModuleVersionsRequestProtoMsg): _110.QueryModuleVersionsRequest;
                toProto(message: _110.QueryModuleVersionsRequest): Uint8Array;
                toProtoMsg(message: _110.QueryModuleVersionsRequest): _110.QueryModuleVersionsRequestProtoMsg;
            };
            QueryModuleVersionsResponse: {
                typeUrl: string;
                encode(message: _110.QueryModuleVersionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _110.QueryModuleVersionsResponse;
                fromJSON(object: any): _110.QueryModuleVersionsResponse;
                toJSON(message: _110.QueryModuleVersionsResponse): unknown;
                fromPartial(object: Partial<_110.QueryModuleVersionsResponse>): _110.QueryModuleVersionsResponse;
                fromSDK(object: _110.QueryModuleVersionsResponseSDKType): _110.QueryModuleVersionsResponse;
                toSDK(message: _110.QueryModuleVersionsResponse): _110.QueryModuleVersionsResponseSDKType;
                fromAmino(object: _110.QueryModuleVersionsResponseAmino): _110.QueryModuleVersionsResponse;
                toAmino(message: _110.QueryModuleVersionsResponse): _110.QueryModuleVersionsResponseAmino;
                fromAminoMsg(object: _110.QueryModuleVersionsResponseAminoMsg): _110.QueryModuleVersionsResponse;
                toAminoMsg(message: _110.QueryModuleVersionsResponse): _110.QueryModuleVersionsResponseAminoMsg;
                fromProtoMsg(message: _110.QueryModuleVersionsResponseProtoMsg): _110.QueryModuleVersionsResponse;
                toProto(message: _110.QueryModuleVersionsResponse): Uint8Array;
                toProtoMsg(message: _110.QueryModuleVersionsResponse): _110.QueryModuleVersionsResponseProtoMsg;
            };
            QueryAuthorityRequest: {
                typeUrl: string;
                encode(_: _110.QueryAuthorityRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _110.QueryAuthorityRequest;
                fromJSON(_: any): _110.QueryAuthorityRequest;
                toJSON(_: _110.QueryAuthorityRequest): unknown;
                fromPartial(_: Partial<_110.QueryAuthorityRequest>): _110.QueryAuthorityRequest;
                fromSDK(_: _110.QueryAuthorityRequestSDKType): _110.QueryAuthorityRequest;
                toSDK(_: _110.QueryAuthorityRequest): _110.QueryAuthorityRequestSDKType;
                fromAmino(_: _110.QueryAuthorityRequestAmino): _110.QueryAuthorityRequest;
                toAmino(_: _110.QueryAuthorityRequest): _110.QueryAuthorityRequestAmino;
                fromAminoMsg(object: _110.QueryAuthorityRequestAminoMsg): _110.QueryAuthorityRequest;
                toAminoMsg(message: _110.QueryAuthorityRequest): _110.QueryAuthorityRequestAminoMsg;
                fromProtoMsg(message: _110.QueryAuthorityRequestProtoMsg): _110.QueryAuthorityRequest;
                toProto(message: _110.QueryAuthorityRequest): Uint8Array;
                toProtoMsg(message: _110.QueryAuthorityRequest): _110.QueryAuthorityRequestProtoMsg;
            };
            QueryAuthorityResponse: {
                typeUrl: string;
                encode(message: _110.QueryAuthorityResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _110.QueryAuthorityResponse;
                fromJSON(object: any): _110.QueryAuthorityResponse;
                toJSON(message: _110.QueryAuthorityResponse): unknown;
                fromPartial(object: Partial<_110.QueryAuthorityResponse>): _110.QueryAuthorityResponse;
                fromSDK(object: _110.QueryAuthorityResponseSDKType): _110.QueryAuthorityResponse;
                toSDK(message: _110.QueryAuthorityResponse): _110.QueryAuthorityResponseSDKType;
                fromAmino(object: _110.QueryAuthorityResponseAmino): _110.QueryAuthorityResponse;
                toAmino(message: _110.QueryAuthorityResponse): _110.QueryAuthorityResponseAmino;
                fromAminoMsg(object: _110.QueryAuthorityResponseAminoMsg): _110.QueryAuthorityResponse;
                toAminoMsg(message: _110.QueryAuthorityResponse): _110.QueryAuthorityResponseAminoMsg;
                fromProtoMsg(message: _110.QueryAuthorityResponseProtoMsg): _110.QueryAuthorityResponse;
                toProto(message: _110.QueryAuthorityResponse): Uint8Array;
                toProtoMsg(message: _110.QueryAuthorityResponse): _110.QueryAuthorityResponseProtoMsg;
            };
        };
    }
    namespace vesting {
        namespace module {
            const v1: {
                protobufPackage: "cosmos.vesting.module.v1";
                Module: {
                    typeUrl: string;
                    encode(_: _113.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _113.Module;
                    fromJSON(_: any): _113.Module;
                    toJSON(_: _113.Module): unknown;
                    fromPartial(_: Partial<_113.Module>): _113.Module;
                    fromSDK(_: _113.ModuleSDKType): _113.Module;
                    toSDK(_: _113.Module): _113.ModuleSDKType;
                    fromAmino(_: _113.ModuleAmino): _113.Module;
                    toAmino(_: _113.Module): _113.ModuleAmino;
                    fromAminoMsg(object: _113.ModuleAminoMsg): _113.Module;
                    toAminoMsg(message: _113.Module): _113.ModuleAminoMsg;
                    fromProtoMsg(message: _113.ModuleProtoMsg): _113.Module;
                    toProto(message: _113.Module): Uint8Array;
                    toProtoMsg(message: _113.Module): _113.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            Msg: typeof _224.Msg;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _114.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPermanentLockedAccount(value: _114.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPeriodicVestingAccount(value: _114.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _114.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _114.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _114.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _114.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _114.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _114.MsgCreatePeriodicVestingAccount;
                    };
                };
                toJSON: {
                    createVestingAccount(value: _114.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createPermanentLockedAccount(value: _114.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createPeriodicVestingAccount(value: _114.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createVestingAccount(value: any): {
                        typeUrl: string;
                        value: _114.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: any): {
                        typeUrl: string;
                        value: _114.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: any): {
                        typeUrl: string;
                        value: _114.MsgCreatePeriodicVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _114.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _114.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _114.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _114.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _114.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _114.MsgCreatePeriodicVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _114.MsgCreateVestingAccount) => _114.MsgCreateVestingAccountAmino;
                    fromAmino: (object: _114.MsgCreateVestingAccountAmino) => _114.MsgCreateVestingAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount": {
                    aminoType: string;
                    toAmino: (message: _114.MsgCreatePermanentLockedAccount) => _114.MsgCreatePermanentLockedAccountAmino;
                    fromAmino: (object: _114.MsgCreatePermanentLockedAccountAmino) => _114.MsgCreatePermanentLockedAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _114.MsgCreatePeriodicVestingAccount) => _114.MsgCreatePeriodicVestingAccountAmino;
                    fromAmino: (object: _114.MsgCreatePeriodicVestingAccountAmino) => _114.MsgCreatePeriodicVestingAccount;
                };
            };
            protobufPackage: "cosmos.vesting.v1beta1";
            BaseVestingAccount: {
                typeUrl: string;
                encode(message: _115.BaseVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _115.BaseVestingAccount;
                fromJSON(object: any): _115.BaseVestingAccount;
                toJSON(message: _115.BaseVestingAccount): unknown;
                fromPartial(object: Partial<_115.BaseVestingAccount>): _115.BaseVestingAccount;
                fromSDK(object: _115.BaseVestingAccountSDKType): _115.BaseVestingAccount;
                toSDK(message: _115.BaseVestingAccount): _115.BaseVestingAccountSDKType;
                fromAmino(object: _115.BaseVestingAccountAmino): _115.BaseVestingAccount;
                toAmino(message: _115.BaseVestingAccount): _115.BaseVestingAccountAmino;
                fromAminoMsg(object: _115.BaseVestingAccountAminoMsg): _115.BaseVestingAccount;
                toAminoMsg(message: _115.BaseVestingAccount): _115.BaseVestingAccountAminoMsg;
                fromProtoMsg(message: _115.BaseVestingAccountProtoMsg): _115.BaseVestingAccount;
                toProto(message: _115.BaseVestingAccount): Uint8Array;
                toProtoMsg(message: _115.BaseVestingAccount): _115.BaseVestingAccountProtoMsg;
            };
            ContinuousVestingAccount: {
                typeUrl: string;
                encode(message: _115.ContinuousVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _115.ContinuousVestingAccount;
                fromJSON(object: any): _115.ContinuousVestingAccount;
                toJSON(message: _115.ContinuousVestingAccount): unknown;
                fromPartial(object: Partial<_115.ContinuousVestingAccount>): _115.ContinuousVestingAccount;
                fromSDK(object: _115.ContinuousVestingAccountSDKType): _115.ContinuousVestingAccount;
                toSDK(message: _115.ContinuousVestingAccount): _115.ContinuousVestingAccountSDKType;
                fromAmino(object: _115.ContinuousVestingAccountAmino): _115.ContinuousVestingAccount;
                toAmino(message: _115.ContinuousVestingAccount): _115.ContinuousVestingAccountAmino;
                fromAminoMsg(object: _115.ContinuousVestingAccountAminoMsg): _115.ContinuousVestingAccount;
                toAminoMsg(message: _115.ContinuousVestingAccount): _115.ContinuousVestingAccountAminoMsg;
                fromProtoMsg(message: _115.ContinuousVestingAccountProtoMsg): _115.ContinuousVestingAccount;
                toProto(message: _115.ContinuousVestingAccount): Uint8Array;
                toProtoMsg(message: _115.ContinuousVestingAccount): _115.ContinuousVestingAccountProtoMsg;
            };
            DelayedVestingAccount: {
                typeUrl: string;
                encode(message: _115.DelayedVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _115.DelayedVestingAccount;
                fromJSON(object: any): _115.DelayedVestingAccount;
                toJSON(message: _115.DelayedVestingAccount): unknown;
                fromPartial(object: Partial<_115.DelayedVestingAccount>): _115.DelayedVestingAccount;
                fromSDK(object: _115.DelayedVestingAccountSDKType): _115.DelayedVestingAccount;
                toSDK(message: _115.DelayedVestingAccount): _115.DelayedVestingAccountSDKType;
                fromAmino(object: _115.DelayedVestingAccountAmino): _115.DelayedVestingAccount;
                toAmino(message: _115.DelayedVestingAccount): _115.DelayedVestingAccountAmino;
                fromAminoMsg(object: _115.DelayedVestingAccountAminoMsg): _115.DelayedVestingAccount;
                toAminoMsg(message: _115.DelayedVestingAccount): _115.DelayedVestingAccountAminoMsg;
                fromProtoMsg(message: _115.DelayedVestingAccountProtoMsg): _115.DelayedVestingAccount;
                toProto(message: _115.DelayedVestingAccount): Uint8Array;
                toProtoMsg(message: _115.DelayedVestingAccount): _115.DelayedVestingAccountProtoMsg;
            };
            Period: {
                typeUrl: string;
                encode(message: _115.Period, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _115.Period;
                fromJSON(object: any): _115.Period;
                toJSON(message: _115.Period): unknown;
                fromPartial(object: Partial<_115.Period>): _115.Period;
                fromSDK(object: _115.PeriodSDKType): _115.Period;
                toSDK(message: _115.Period): _115.PeriodSDKType;
                fromAmino(object: _115.PeriodAmino): _115.Period;
                toAmino(message: _115.Period): _115.PeriodAmino;
                fromAminoMsg(object: _115.PeriodAminoMsg): _115.Period;
                toAminoMsg(message: _115.Period): _115.PeriodAminoMsg;
                fromProtoMsg(message: _115.PeriodProtoMsg): _115.Period;
                toProto(message: _115.Period): Uint8Array;
                toProtoMsg(message: _115.Period): _115.PeriodProtoMsg;
            };
            PeriodicVestingAccount: {
                typeUrl: string;
                encode(message: _115.PeriodicVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _115.PeriodicVestingAccount;
                fromJSON(object: any): _115.PeriodicVestingAccount;
                toJSON(message: _115.PeriodicVestingAccount): unknown;
                fromPartial(object: Partial<_115.PeriodicVestingAccount>): _115.PeriodicVestingAccount;
                fromSDK(object: _115.PeriodicVestingAccountSDKType): _115.PeriodicVestingAccount;
                toSDK(message: _115.PeriodicVestingAccount): _115.PeriodicVestingAccountSDKType;
                fromAmino(object: _115.PeriodicVestingAccountAmino): _115.PeriodicVestingAccount;
                toAmino(message: _115.PeriodicVestingAccount): _115.PeriodicVestingAccountAmino;
                fromAminoMsg(object: _115.PeriodicVestingAccountAminoMsg): _115.PeriodicVestingAccount;
                toAminoMsg(message: _115.PeriodicVestingAccount): _115.PeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _115.PeriodicVestingAccountProtoMsg): _115.PeriodicVestingAccount;
                toProto(message: _115.PeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _115.PeriodicVestingAccount): _115.PeriodicVestingAccountProtoMsg;
            };
            PermanentLockedAccount: {
                typeUrl: string;
                encode(message: _115.PermanentLockedAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _115.PermanentLockedAccount;
                fromJSON(object: any): _115.PermanentLockedAccount;
                toJSON(message: _115.PermanentLockedAccount): unknown;
                fromPartial(object: Partial<_115.PermanentLockedAccount>): _115.PermanentLockedAccount;
                fromSDK(object: _115.PermanentLockedAccountSDKType): _115.PermanentLockedAccount;
                toSDK(message: _115.PermanentLockedAccount): _115.PermanentLockedAccountSDKType;
                fromAmino(object: _115.PermanentLockedAccountAmino): _115.PermanentLockedAccount;
                toAmino(message: _115.PermanentLockedAccount): _115.PermanentLockedAccountAmino;
                fromAminoMsg(object: _115.PermanentLockedAccountAminoMsg): _115.PermanentLockedAccount;
                toAminoMsg(message: _115.PermanentLockedAccount): _115.PermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _115.PermanentLockedAccountProtoMsg): _115.PermanentLockedAccount;
                toProto(message: _115.PermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _115.PermanentLockedAccount): _115.PermanentLockedAccountProtoMsg;
            };
            MsgCreateVestingAccount: {
                typeUrl: string;
                encode(message: _114.MsgCreateVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _114.MsgCreateVestingAccount;
                fromJSON(object: any): _114.MsgCreateVestingAccount;
                toJSON(message: _114.MsgCreateVestingAccount): unknown;
                fromPartial(object: Partial<_114.MsgCreateVestingAccount>): _114.MsgCreateVestingAccount;
                fromSDK(object: _114.MsgCreateVestingAccountSDKType): _114.MsgCreateVestingAccount;
                toSDK(message: _114.MsgCreateVestingAccount): _114.MsgCreateVestingAccountSDKType;
                fromAmino(object: _114.MsgCreateVestingAccountAmino): _114.MsgCreateVestingAccount;
                toAmino(message: _114.MsgCreateVestingAccount): _114.MsgCreateVestingAccountAmino;
                fromAminoMsg(object: _114.MsgCreateVestingAccountAminoMsg): _114.MsgCreateVestingAccount;
                toAminoMsg(message: _114.MsgCreateVestingAccount): _114.MsgCreateVestingAccountAminoMsg;
                fromProtoMsg(message: _114.MsgCreateVestingAccountProtoMsg): _114.MsgCreateVestingAccount;
                toProto(message: _114.MsgCreateVestingAccount): Uint8Array;
                toProtoMsg(message: _114.MsgCreateVestingAccount): _114.MsgCreateVestingAccountProtoMsg;
            };
            MsgCreateVestingAccountResponse: {
                typeUrl: string;
                encode(_: _114.MsgCreateVestingAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _114.MsgCreateVestingAccountResponse;
                fromJSON(_: any): _114.MsgCreateVestingAccountResponse;
                toJSON(_: _114.MsgCreateVestingAccountResponse): unknown;
                fromPartial(_: Partial<_114.MsgCreateVestingAccountResponse>): _114.MsgCreateVestingAccountResponse;
                fromSDK(_: _114.MsgCreateVestingAccountResponseSDKType): _114.MsgCreateVestingAccountResponse;
                toSDK(_: _114.MsgCreateVestingAccountResponse): _114.MsgCreateVestingAccountResponseSDKType;
                fromAmino(_: _114.MsgCreateVestingAccountResponseAmino): _114.MsgCreateVestingAccountResponse;
                toAmino(_: _114.MsgCreateVestingAccountResponse): _114.MsgCreateVestingAccountResponseAmino;
                fromAminoMsg(object: _114.MsgCreateVestingAccountResponseAminoMsg): _114.MsgCreateVestingAccountResponse;
                toAminoMsg(message: _114.MsgCreateVestingAccountResponse): _114.MsgCreateVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _114.MsgCreateVestingAccountResponseProtoMsg): _114.MsgCreateVestingAccountResponse;
                toProto(message: _114.MsgCreateVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _114.MsgCreateVestingAccountResponse): _114.MsgCreateVestingAccountResponseProtoMsg;
            };
            MsgCreatePermanentLockedAccount: {
                typeUrl: string;
                encode(message: _114.MsgCreatePermanentLockedAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _114.MsgCreatePermanentLockedAccount;
                fromJSON(object: any): _114.MsgCreatePermanentLockedAccount;
                toJSON(message: _114.MsgCreatePermanentLockedAccount): unknown;
                fromPartial(object: Partial<_114.MsgCreatePermanentLockedAccount>): _114.MsgCreatePermanentLockedAccount;
                fromSDK(object: _114.MsgCreatePermanentLockedAccountSDKType): _114.MsgCreatePermanentLockedAccount;
                toSDK(message: _114.MsgCreatePermanentLockedAccount): _114.MsgCreatePermanentLockedAccountSDKType;
                fromAmino(object: _114.MsgCreatePermanentLockedAccountAmino): _114.MsgCreatePermanentLockedAccount;
                toAmino(message: _114.MsgCreatePermanentLockedAccount): _114.MsgCreatePermanentLockedAccountAmino;
                fromAminoMsg(object: _114.MsgCreatePermanentLockedAccountAminoMsg): _114.MsgCreatePermanentLockedAccount;
                toAminoMsg(message: _114.MsgCreatePermanentLockedAccount): _114.MsgCreatePermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _114.MsgCreatePermanentLockedAccountProtoMsg): _114.MsgCreatePermanentLockedAccount;
                toProto(message: _114.MsgCreatePermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _114.MsgCreatePermanentLockedAccount): _114.MsgCreatePermanentLockedAccountProtoMsg;
            };
            MsgCreatePermanentLockedAccountResponse: {
                typeUrl: string;
                encode(_: _114.MsgCreatePermanentLockedAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _114.MsgCreatePermanentLockedAccountResponse;
                fromJSON(_: any): _114.MsgCreatePermanentLockedAccountResponse;
                toJSON(_: _114.MsgCreatePermanentLockedAccountResponse): unknown;
                fromPartial(_: Partial<_114.MsgCreatePermanentLockedAccountResponse>): _114.MsgCreatePermanentLockedAccountResponse;
                fromSDK(_: _114.MsgCreatePermanentLockedAccountResponseSDKType): _114.MsgCreatePermanentLockedAccountResponse;
                toSDK(_: _114.MsgCreatePermanentLockedAccountResponse): _114.MsgCreatePermanentLockedAccountResponseSDKType;
                fromAmino(_: _114.MsgCreatePermanentLockedAccountResponseAmino): _114.MsgCreatePermanentLockedAccountResponse;
                toAmino(_: _114.MsgCreatePermanentLockedAccountResponse): _114.MsgCreatePermanentLockedAccountResponseAmino;
                fromAminoMsg(object: _114.MsgCreatePermanentLockedAccountResponseAminoMsg): _114.MsgCreatePermanentLockedAccountResponse;
                toAminoMsg(message: _114.MsgCreatePermanentLockedAccountResponse): _114.MsgCreatePermanentLockedAccountResponseAminoMsg;
                fromProtoMsg(message: _114.MsgCreatePermanentLockedAccountResponseProtoMsg): _114.MsgCreatePermanentLockedAccountResponse;
                toProto(message: _114.MsgCreatePermanentLockedAccountResponse): Uint8Array;
                toProtoMsg(message: _114.MsgCreatePermanentLockedAccountResponse): _114.MsgCreatePermanentLockedAccountResponseProtoMsg;
            };
            MsgCreatePeriodicVestingAccount: {
                typeUrl: string;
                encode(message: _114.MsgCreatePeriodicVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _114.MsgCreatePeriodicVestingAccount;
                fromJSON(object: any): _114.MsgCreatePeriodicVestingAccount;
                toJSON(message: _114.MsgCreatePeriodicVestingAccount): unknown;
                fromPartial(object: Partial<_114.MsgCreatePeriodicVestingAccount>): _114.MsgCreatePeriodicVestingAccount;
                fromSDK(object: _114.MsgCreatePeriodicVestingAccountSDKType): _114.MsgCreatePeriodicVestingAccount;
                toSDK(message: _114.MsgCreatePeriodicVestingAccount): _114.MsgCreatePeriodicVestingAccountSDKType;
                fromAmino(object: _114.MsgCreatePeriodicVestingAccountAmino): _114.MsgCreatePeriodicVestingAccount;
                toAmino(message: _114.MsgCreatePeriodicVestingAccount): _114.MsgCreatePeriodicVestingAccountAmino;
                fromAminoMsg(object: _114.MsgCreatePeriodicVestingAccountAminoMsg): _114.MsgCreatePeriodicVestingAccount;
                toAminoMsg(message: _114.MsgCreatePeriodicVestingAccount): _114.MsgCreatePeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _114.MsgCreatePeriodicVestingAccountProtoMsg): _114.MsgCreatePeriodicVestingAccount;
                toProto(message: _114.MsgCreatePeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _114.MsgCreatePeriodicVestingAccount): _114.MsgCreatePeriodicVestingAccountProtoMsg;
            };
            MsgCreatePeriodicVestingAccountResponse: {
                typeUrl: string;
                encode(_: _114.MsgCreatePeriodicVestingAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _114.MsgCreatePeriodicVestingAccountResponse;
                fromJSON(_: any): _114.MsgCreatePeriodicVestingAccountResponse;
                toJSON(_: _114.MsgCreatePeriodicVestingAccountResponse): unknown;
                fromPartial(_: Partial<_114.MsgCreatePeriodicVestingAccountResponse>): _114.MsgCreatePeriodicVestingAccountResponse;
                fromSDK(_: _114.MsgCreatePeriodicVestingAccountResponseSDKType): _114.MsgCreatePeriodicVestingAccountResponse;
                toSDK(_: _114.MsgCreatePeriodicVestingAccountResponse): _114.MsgCreatePeriodicVestingAccountResponseSDKType;
                fromAmino(_: _114.MsgCreatePeriodicVestingAccountResponseAmino): _114.MsgCreatePeriodicVestingAccountResponse;
                toAmino(_: _114.MsgCreatePeriodicVestingAccountResponse): _114.MsgCreatePeriodicVestingAccountResponseAmino;
                fromAminoMsg(object: _114.MsgCreatePeriodicVestingAccountResponseAminoMsg): _114.MsgCreatePeriodicVestingAccountResponse;
                toAminoMsg(message: _114.MsgCreatePeriodicVestingAccountResponse): _114.MsgCreatePeriodicVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _114.MsgCreatePeriodicVestingAccountResponseProtoMsg): _114.MsgCreatePeriodicVestingAccountResponse;
                toProto(message: _114.MsgCreatePeriodicVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _114.MsgCreatePeriodicVestingAccountResponse): _114.MsgCreatePeriodicVestingAccountResponseProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: any;
                };
                authz: {
                    v1beta1: any;
                };
                bank: {
                    v1beta1: any;
                };
                consensus: {
                    v1: any;
                };
                distribution: {
                    v1beta1: any;
                };
                feegrant: {
                    v1beta1: any;
                };
                gov: {
                    v1: any;
                    v1beta1: any;
                };
                group: {
                    v1: any;
                };
                mint: {
                    v1beta1: any;
                };
                nft: {
                    v1beta1: any;
                };
                staking: {
                    v1beta1: any;
                };
                upgrade: {
                    v1beta1: any;
                };
                vesting: {
                    v1beta1: any;
                };
            };
        }>;
        createGrpcGateWayClient: ({ endpoint }: {
            endpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _193.QueryClientImpl;
                };
                authz: {
                    v1beta1: _194.QueryClientImpl;
                };
                bank: {
                    v1beta1: _195.QueryClientImpl;
                };
                base: {
                    node: {
                        v1beta1: _196.ServiceClientImpl;
                    };
                    tendermint: {
                        v1beta1: _197.ServiceClientImpl;
                    };
                };
                consensus: {
                    v1: _198.QueryClientImpl;
                };
                distribution: {
                    v1beta1: _199.QueryClientImpl;
                };
                feegrant: {
                    v1beta1: _200.QueryClientImpl;
                };
                gov: {
                    v1: _201.QueryClientImpl;
                    v1beta1: _202.QueryClientImpl;
                };
                group: {
                    v1: _203.QueryClientImpl;
                };
                mint: {
                    v1beta1: _204.QueryClientImpl;
                };
                nft: {
                    v1beta1: _205.QueryClientImpl;
                };
                orm: {
                    query: {
                        v1alpha1: _206.QueryClientImpl;
                    };
                };
                params: {
                    v1beta1: _207.QueryClientImpl;
                };
                staking: {
                    v1beta1: _208.QueryClientImpl;
                };
                tx: {
                    v1beta1: _209.ServiceClientImpl;
                };
                upgrade: {
                    v1beta1: _210.QueryClientImpl;
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _176.LCDQueryClient;
                };
                authz: {
                    v1beta1: _177.LCDQueryClient;
                };
                bank: {
                    v1beta1: _178.LCDQueryClient;
                };
                base: {
                    node: {
                        v1beta1: _179.LCDQueryClient;
                    };
                    tendermint: {
                        v1beta1: _180.LCDQueryClient;
                    };
                };
                consensus: {
                    v1: _181.LCDQueryClient;
                };
                distribution: {
                    v1beta1: _182.LCDQueryClient;
                };
                feegrant: {
                    v1beta1: _183.LCDQueryClient;
                };
                gov: {
                    v1: _184.LCDQueryClient;
                    v1beta1: _185.LCDQueryClient;
                };
                group: {
                    v1: _186.LCDQueryClient;
                };
                mint: {
                    v1beta1: _187.LCDQueryClient;
                };
                nft: {
                    v1beta1: _188.LCDQueryClient;
                };
                params: {
                    v1beta1: _189.LCDQueryClient;
                };
                staking: {
                    v1beta1: _190.LCDQueryClient;
                };
                tx: {
                    v1beta1: _191.LCDQueryClient;
                };
                upgrade: {
                    v1beta1: _192.LCDQueryClient;
                };
            };
        }>;
    };
}

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
import * as _43 from "./circuit/module/v1/module";
import * as _44 from "./circuit/v1/query";
import * as _45 from "./circuit/v1/tx";
import * as _46 from "./circuit/v1/types";
import * as _47 from "./consensus/module/v1/module";
import * as _48 from "./consensus/v1/query";
import * as _49 from "./consensus/v1/tx";
import * as _50 from "./crisis/module/v1/module";
import * as _51 from "./crypto/ed25519/keys";
import * as _52 from "./crypto/hd/v1/hd";
import * as _53 from "./crypto/keyring/v1/record";
import * as _54 from "./crypto/multisig/keys";
import * as _55 from "./crypto/secp256k1/keys";
import * as _56 from "./crypto/secp256r1/keys";
import * as _57 from "./distribution/module/v1/module";
import * as _58 from "./distribution/v1beta1/distribution";
import * as _59 from "./distribution/v1beta1/genesis";
import * as _60 from "./distribution/v1beta1/query";
import * as _61 from "./distribution/v1beta1/tx";
import * as _62 from "./evidence/module/v1/module";
import * as _63 from "./feegrant/module/v1/module";
import * as _64 from "./feegrant/v1beta1/feegrant";
import * as _65 from "./feegrant/v1beta1/genesis";
import * as _66 from "./feegrant/v1beta1/query";
import * as _67 from "./feegrant/v1beta1/tx";
import * as _68 from "./genutil/module/v1/module";
import * as _69 from "./gov/module/v1/module";
import * as _70 from "./gov/v1/genesis";
import * as _71 from "./gov/v1/gov";
import * as _72 from "./gov/v1/query";
import * as _73 from "./gov/v1/tx";
import * as _74 from "./gov/v1beta1/genesis";
import * as _75 from "./gov/v1beta1/gov";
import * as _76 from "./gov/v1beta1/query";
import * as _77 from "./gov/v1beta1/tx";
import * as _78 from "./group/module/v1/module";
import * as _79 from "./group/v1/events";
import * as _80 from "./group/v1/genesis";
import * as _81 from "./group/v1/query";
import * as _82 from "./group/v1/tx";
import * as _83 from "./group/v1/types";
import * as _84 from "./mint/module/v1/module";
import * as _85 from "./mint/v1beta1/genesis";
import * as _86 from "./mint/v1beta1/mint";
import * as _87 from "./mint/v1beta1/query";
import * as _88 from "./mint/v1beta1/tx";
import * as _90 from "./nft/module/v1/module";
import * as _91 from "./nft/v1beta1/event";
import * as _92 from "./nft/v1beta1/genesis";
import * as _93 from "./nft/v1beta1/nft";
import * as _94 from "./nft/v1beta1/query";
import * as _95 from "./nft/v1beta1/tx";
import * as _96 from "./orm/module/v1alpha1/module";
import * as _97 from "./orm/query/v1alpha1/query";
import * as _98 from "./params/module/v1/module";
import * as _99 from "./params/v1beta1/params";
import * as _100 from "./params/v1beta1/query";
import * as _102 from "./reflection/v1/reflection";
import * as _103 from "./slashing/module/v1/module";
import * as _104 from "./staking/module/v1/module";
import * as _105 from "./staking/v1beta1/authz";
import * as _106 from "./staking/v1beta1/genesis";
import * as _107 from "./staking/v1beta1/query";
import * as _108 from "./staking/v1beta1/staking";
import * as _109 from "./staking/v1beta1/tx";
import * as _110 from "./store/internal/kv/v1beta1/kv";
import * as _111 from "./store/snapshots/v1/snapshot";
import * as _112 from "./store/streaming/abci/grpc";
import * as _113 from "./store/v1beta1/commit_info";
import * as _114 from "./store/v1beta1/listening";
import * as _115 from "./tx/config/v1/config";
import * as _116 from "./tx/signing/v1beta1/signing";
import * as _117 from "./tx/v1beta1/service";
import * as _118 from "./tx/v1beta1/tx";
import * as _119 from "./upgrade/module/v1/module";
import * as _120 from "./upgrade/v1beta1/query";
import * as _121 from "./upgrade/v1beta1/tx";
import * as _122 from "./upgrade/v1beta1/upgrade";
import * as _123 from "./vesting/module/v1/module";
import * as _124 from "./vesting/v1beta1/tx";
import * as _125 from "./vesting/v1beta1/vesting";
import * as _188 from "./auth/v1beta1/query.lcd";
import * as _189 from "./authz/v1beta1/query.lcd";
import * as _190 from "./bank/v1beta1/query.lcd";
import * as _191 from "./base/node/v1beta1/query.lcd";
import * as _192 from "./base/tendermint/v1beta1/query.lcd";
import * as _193 from "./circuit/v1/query.lcd";
import * as _194 from "./consensus/v1/query.lcd";
import * as _195 from "./distribution/v1beta1/query.lcd";
import * as _196 from "./feegrant/v1beta1/query.lcd";
import * as _197 from "./gov/v1/query.lcd";
import * as _198 from "./gov/v1beta1/query.lcd";
import * as _199 from "./group/v1/query.lcd";
import * as _200 from "./mint/v1beta1/query.lcd";
import * as _201 from "./nft/v1beta1/query.lcd";
import * as _202 from "./params/v1beta1/query.lcd";
import * as _203 from "./staking/v1beta1/query.lcd";
import * as _204 from "./tx/v1beta1/service.lcd";
import * as _205 from "./upgrade/v1beta1/query.lcd";
import * as _206 from "./auth/v1beta1/query.rpc.Query";
import * as _207 from "./authz/v1beta1/query.rpc.Query";
import * as _208 from "./bank/v1beta1/query.rpc.Query";
import * as _209 from "./base/node/v1beta1/query.rpc.Service";
import * as _210 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _211 from "./circuit/v1/query.rpc.Query";
import * as _212 from "./consensus/v1/query.rpc.Query";
import * as _213 from "./distribution/v1beta1/query.rpc.Query";
import * as _214 from "./feegrant/v1beta1/query.rpc.Query";
import * as _215 from "./gov/v1/query.rpc.Query";
import * as _216 from "./gov/v1beta1/query.rpc.Query";
import * as _217 from "./group/v1/query.rpc.Query";
import * as _218 from "./mint/v1beta1/query.rpc.Query";
import * as _219 from "./nft/v1beta1/query.rpc.Query";
import * as _220 from "./orm/query/v1alpha1/query.rpc.Query";
import * as _221 from "./params/v1beta1/query.rpc.Query";
import * as _222 from "./staking/v1beta1/query.rpc.Query";
import * as _223 from "./tx/v1beta1/service.rpc.Service";
import * as _224 from "./upgrade/v1beta1/query.rpc.Query";
import * as _225 from "./auth/v1beta1/tx.rpc.msg";
import * as _226 from "./authz/v1beta1/tx.rpc.msg";
import * as _227 from "./bank/v1beta1/tx.rpc.msg";
import * as _228 from "./circuit/v1/tx.rpc.msg";
import * as _229 from "./consensus/v1/tx.rpc.msg";
import * as _230 from "./distribution/v1beta1/tx.rpc.msg";
import * as _231 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _232 from "./gov/v1/tx.rpc.msg";
import * as _233 from "./gov/v1beta1/tx.rpc.msg";
import * as _234 from "./group/v1/tx.rpc.msg";
import * as _235 from "./mint/v1beta1/tx.rpc.msg";
import * as _236 from "./nft/v1beta1/tx.rpc.msg";
import * as _237 from "./staking/v1beta1/tx.rpc.msg";
import * as _238 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _239 from "./vesting/v1beta1/tx.rpc.msg";
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
            Msg: typeof _225.Msg;
            Query: typeof _206.Query;
            QueryClientImpl: typeof _206.QueryClientImpl;
            LCDQueryClient: typeof _188.LCDQueryClient;
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
            Msg: typeof _226.Msg;
            Query: typeof _207.Query;
            QueryClientImpl: typeof _207.QueryClientImpl;
            LCDQueryClient: typeof _189.LCDQueryClient;
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
            Cosmos_authzv1beta1Authorization_InterfaceDecoder: (input: import("..").BinaryReader | Uint8Array) => import("../google/protobuf/any").Any | _30.SendAuthorization | _105.StakeAuthorization | _24.GenericAuthorization;
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
            Msg: typeof _227.Msg;
            Query: typeof _208.Query;
            QueryClientImpl: typeof _208.QueryClientImpl;
            LCDQueryClient: typeof _190.LCDQueryClient;
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
            QueryDenomMetadataByQueryStringRequest: {
                typeUrl: string;
                encode(message: _33.QueryDenomMetadataByQueryStringRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _33.QueryDenomMetadataByQueryStringRequest;
                fromJSON(object: any): _33.QueryDenomMetadataByQueryStringRequest;
                toJSON(message: _33.QueryDenomMetadataByQueryStringRequest): unknown;
                fromPartial(object: Partial<_33.QueryDenomMetadataByQueryStringRequest>): _33.QueryDenomMetadataByQueryStringRequest;
                fromSDK(object: _33.QueryDenomMetadataByQueryStringRequestSDKType): _33.QueryDenomMetadataByQueryStringRequest;
                toSDK(message: _33.QueryDenomMetadataByQueryStringRequest): _33.QueryDenomMetadataByQueryStringRequestSDKType;
                fromAmino(object: _33.QueryDenomMetadataByQueryStringRequestAmino): _33.QueryDenomMetadataByQueryStringRequest;
                toAmino(message: _33.QueryDenomMetadataByQueryStringRequest): _33.QueryDenomMetadataByQueryStringRequestAmino;
                fromAminoMsg(object: _33.QueryDenomMetadataByQueryStringRequestAminoMsg): _33.QueryDenomMetadataByQueryStringRequest;
                toAminoMsg(message: _33.QueryDenomMetadataByQueryStringRequest): _33.QueryDenomMetadataByQueryStringRequestAminoMsg;
                fromProtoMsg(message: _33.QueryDenomMetadataByQueryStringRequestProtoMsg): _33.QueryDenomMetadataByQueryStringRequest;
                toProto(message: _33.QueryDenomMetadataByQueryStringRequest): Uint8Array;
                toProtoMsg(message: _33.QueryDenomMetadataByQueryStringRequest): _33.QueryDenomMetadataByQueryStringRequestProtoMsg;
            };
            QueryDenomMetadataByQueryStringResponse: {
                typeUrl: string;
                encode(message: _33.QueryDenomMetadataByQueryStringResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _33.QueryDenomMetadataByQueryStringResponse;
                fromJSON(object: any): _33.QueryDenomMetadataByQueryStringResponse;
                toJSON(message: _33.QueryDenomMetadataByQueryStringResponse): unknown;
                fromPartial(object: Partial<_33.QueryDenomMetadataByQueryStringResponse>): _33.QueryDenomMetadataByQueryStringResponse;
                fromSDK(object: _33.QueryDenomMetadataByQueryStringResponseSDKType): _33.QueryDenomMetadataByQueryStringResponse;
                toSDK(message: _33.QueryDenomMetadataByQueryStringResponse): _33.QueryDenomMetadataByQueryStringResponseSDKType;
                fromAmino(object: _33.QueryDenomMetadataByQueryStringResponseAmino): _33.QueryDenomMetadataByQueryStringResponse;
                toAmino(message: _33.QueryDenomMetadataByQueryStringResponse): _33.QueryDenomMetadataByQueryStringResponseAmino;
                fromAminoMsg(object: _33.QueryDenomMetadataByQueryStringResponseAminoMsg): _33.QueryDenomMetadataByQueryStringResponse;
                toAminoMsg(message: _33.QueryDenomMetadataByQueryStringResponse): _33.QueryDenomMetadataByQueryStringResponseAminoMsg;
                fromProtoMsg(message: _33.QueryDenomMetadataByQueryStringResponseProtoMsg): _33.QueryDenomMetadataByQueryStringResponse;
                toProto(message: _33.QueryDenomMetadataByQueryStringResponse): Uint8Array;
                toProtoMsg(message: _33.QueryDenomMetadataByQueryStringResponse): _33.QueryDenomMetadataByQueryStringResponseProtoMsg;
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
                SearchBlocksResult: {
                    typeUrl: string;
                    encode(message: _35.SearchBlocksResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _35.SearchBlocksResult;
                    fromJSON(object: any): _35.SearchBlocksResult;
                    toJSON(message: _35.SearchBlocksResult): unknown;
                    fromPartial(object: Partial<_35.SearchBlocksResult>): _35.SearchBlocksResult;
                    fromSDK(object: _35.SearchBlocksResultSDKType): _35.SearchBlocksResult;
                    toSDK(message: _35.SearchBlocksResult): _35.SearchBlocksResultSDKType;
                    fromAmino(object: _35.SearchBlocksResultAmino): _35.SearchBlocksResult;
                    toAmino(message: _35.SearchBlocksResult): _35.SearchBlocksResultAmino;
                    fromAminoMsg(object: _35.SearchBlocksResultAminoMsg): _35.SearchBlocksResult;
                    toAminoMsg(message: _35.SearchBlocksResult): _35.SearchBlocksResultAminoMsg;
                    fromProtoMsg(message: _35.SearchBlocksResultProtoMsg): _35.SearchBlocksResult;
                    toProto(message: _35.SearchBlocksResult): Uint8Array;
                    toProtoMsg(message: _35.SearchBlocksResult): _35.SearchBlocksResultProtoMsg;
                };
            };
        }
        namespace node {
            const v1beta1: {
                Service: typeof _209.Service;
                ServiceClientImpl: typeof _209.ServiceClientImpl;
                LCDQueryClient: typeof _191.LCDQueryClient;
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
                StatusRequest: {
                    typeUrl: string;
                    encode(_: _36.StatusRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _36.StatusRequest;
                    fromJSON(_: any): _36.StatusRequest;
                    toJSON(_: _36.StatusRequest): unknown;
                    fromPartial(_: Partial<_36.StatusRequest>): _36.StatusRequest;
                    fromSDK(_: _36.StatusRequestSDKType): _36.StatusRequest;
                    toSDK(_: _36.StatusRequest): _36.StatusRequestSDKType;
                    fromAmino(_: _36.StatusRequestAmino): _36.StatusRequest;
                    toAmino(_: _36.StatusRequest): _36.StatusRequestAmino;
                    fromAminoMsg(object: _36.StatusRequestAminoMsg): _36.StatusRequest;
                    toAminoMsg(message: _36.StatusRequest): _36.StatusRequestAminoMsg;
                    fromProtoMsg(message: _36.StatusRequestProtoMsg): _36.StatusRequest;
                    toProto(message: _36.StatusRequest): Uint8Array;
                    toProtoMsg(message: _36.StatusRequest): _36.StatusRequestProtoMsg;
                };
                StatusResponse: {
                    typeUrl: string;
                    encode(message: _36.StatusResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _36.StatusResponse;
                    fromJSON(object: any): _36.StatusResponse;
                    toJSON(message: _36.StatusResponse): unknown;
                    fromPartial(object: Partial<_36.StatusResponse>): _36.StatusResponse;
                    fromSDK(object: _36.StatusResponseSDKType): _36.StatusResponse;
                    toSDK(message: _36.StatusResponse): _36.StatusResponseSDKType;
                    fromAmino(object: _36.StatusResponseAmino): _36.StatusResponse;
                    toAmino(message: _36.StatusResponse): _36.StatusResponseAmino;
                    fromAminoMsg(object: _36.StatusResponseAminoMsg): _36.StatusResponse;
                    toAminoMsg(message: _36.StatusResponse): _36.StatusResponseAminoMsg;
                    fromProtoMsg(message: _36.StatusResponseProtoMsg): _36.StatusResponse;
                    toProto(message: _36.StatusResponse): Uint8Array;
                    toProtoMsg(message: _36.StatusResponse): _36.StatusResponseProtoMsg;
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
                Service: typeof _210.Service;
                ServiceClientImpl: typeof _210.ServiceClientImpl;
                LCDQueryClient: typeof _192.LCDQueryClient;
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
    namespace circuit {
        namespace module {
            const v1: {
                protobufPackage: "cosmos.circuit.module.v1";
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
            Msg: typeof _228.Msg;
            Query: typeof _211.Query;
            QueryClientImpl: typeof _211.QueryClientImpl;
            LCDQueryClient: typeof _193.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    authorizeCircuitBreaker(value: _45.MsgAuthorizeCircuitBreaker): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    tripCircuitBreaker(value: _45.MsgTripCircuitBreaker): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    resetCircuitBreaker(value: _45.MsgResetCircuitBreaker): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    authorizeCircuitBreaker(value: _45.MsgAuthorizeCircuitBreaker): {
                        typeUrl: string;
                        value: _45.MsgAuthorizeCircuitBreaker;
                    };
                    tripCircuitBreaker(value: _45.MsgTripCircuitBreaker): {
                        typeUrl: string;
                        value: _45.MsgTripCircuitBreaker;
                    };
                    resetCircuitBreaker(value: _45.MsgResetCircuitBreaker): {
                        typeUrl: string;
                        value: _45.MsgResetCircuitBreaker;
                    };
                };
                toJSON: {
                    authorizeCircuitBreaker(value: _45.MsgAuthorizeCircuitBreaker): {
                        typeUrl: string;
                        value: unknown;
                    };
                    tripCircuitBreaker(value: _45.MsgTripCircuitBreaker): {
                        typeUrl: string;
                        value: unknown;
                    };
                    resetCircuitBreaker(value: _45.MsgResetCircuitBreaker): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    authorizeCircuitBreaker(value: any): {
                        typeUrl: string;
                        value: _45.MsgAuthorizeCircuitBreaker;
                    };
                    tripCircuitBreaker(value: any): {
                        typeUrl: string;
                        value: _45.MsgTripCircuitBreaker;
                    };
                    resetCircuitBreaker(value: any): {
                        typeUrl: string;
                        value: _45.MsgResetCircuitBreaker;
                    };
                };
                fromPartial: {
                    authorizeCircuitBreaker(value: _45.MsgAuthorizeCircuitBreaker): {
                        typeUrl: string;
                        value: _45.MsgAuthorizeCircuitBreaker;
                    };
                    tripCircuitBreaker(value: _45.MsgTripCircuitBreaker): {
                        typeUrl: string;
                        value: _45.MsgTripCircuitBreaker;
                    };
                    resetCircuitBreaker(value: _45.MsgResetCircuitBreaker): {
                        typeUrl: string;
                        value: _45.MsgResetCircuitBreaker;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.circuit.v1.MsgAuthorizeCircuitBreaker": {
                    aminoType: string;
                    toAmino: (message: _45.MsgAuthorizeCircuitBreaker) => _45.MsgAuthorizeCircuitBreakerAmino;
                    fromAmino: (object: _45.MsgAuthorizeCircuitBreakerAmino) => _45.MsgAuthorizeCircuitBreaker;
                };
                "/cosmos.circuit.v1.MsgTripCircuitBreaker": {
                    aminoType: string;
                    toAmino: (message: _45.MsgTripCircuitBreaker) => _45.MsgTripCircuitBreakerAmino;
                    fromAmino: (object: _45.MsgTripCircuitBreakerAmino) => _45.MsgTripCircuitBreaker;
                };
                "/cosmos.circuit.v1.MsgResetCircuitBreaker": {
                    aminoType: string;
                    toAmino: (message: _45.MsgResetCircuitBreaker) => _45.MsgResetCircuitBreakerAmino;
                    fromAmino: (object: _45.MsgResetCircuitBreakerAmino) => _45.MsgResetCircuitBreaker;
                };
            };
            permissions_LevelFromJSON(object: any): _46.Permissions_Level;
            permissions_LevelToJSON(object: _46.Permissions_Level): string;
            protobufPackage: "cosmos.circuit.v1";
            Permissions_Level: typeof _46.Permissions_Level;
            Permissions_LevelSDKType: typeof _46.Permissions_Level;
            Permissions_LevelAmino: typeof _46.Permissions_Level;
            Permissions: {
                typeUrl: string;
                encode(message: _46.Permissions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _46.Permissions;
                fromJSON(object: any): _46.Permissions;
                toJSON(message: _46.Permissions): unknown;
                fromPartial(object: Partial<_46.Permissions>): _46.Permissions;
                fromSDK(object: _46.PermissionsSDKType): _46.Permissions;
                toSDK(message: _46.Permissions): _46.PermissionsSDKType;
                fromAmino(object: _46.PermissionsAmino): _46.Permissions;
                toAmino(message: _46.Permissions): _46.PermissionsAmino;
                fromAminoMsg(object: _46.PermissionsAminoMsg): _46.Permissions;
                toAminoMsg(message: _46.Permissions): _46.PermissionsAminoMsg;
                fromProtoMsg(message: _46.PermissionsProtoMsg): _46.Permissions;
                toProto(message: _46.Permissions): Uint8Array;
                toProtoMsg(message: _46.Permissions): _46.PermissionsProtoMsg;
            };
            GenesisAccountPermissions: {
                typeUrl: string;
                encode(message: _46.GenesisAccountPermissions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _46.GenesisAccountPermissions;
                fromJSON(object: any): _46.GenesisAccountPermissions;
                toJSON(message: _46.GenesisAccountPermissions): unknown;
                fromPartial(object: Partial<_46.GenesisAccountPermissions>): _46.GenesisAccountPermissions;
                fromSDK(object: _46.GenesisAccountPermissionsSDKType): _46.GenesisAccountPermissions;
                toSDK(message: _46.GenesisAccountPermissions): _46.GenesisAccountPermissionsSDKType;
                fromAmino(object: _46.GenesisAccountPermissionsAmino): _46.GenesisAccountPermissions;
                toAmino(message: _46.GenesisAccountPermissions): _46.GenesisAccountPermissionsAmino;
                fromAminoMsg(object: _46.GenesisAccountPermissionsAminoMsg): _46.GenesisAccountPermissions;
                toAminoMsg(message: _46.GenesisAccountPermissions): _46.GenesisAccountPermissionsAminoMsg;
                fromProtoMsg(message: _46.GenesisAccountPermissionsProtoMsg): _46.GenesisAccountPermissions;
                toProto(message: _46.GenesisAccountPermissions): Uint8Array;
                toProtoMsg(message: _46.GenesisAccountPermissions): _46.GenesisAccountPermissionsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _46.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _46.GenesisState;
                fromJSON(object: any): _46.GenesisState;
                toJSON(message: _46.GenesisState): unknown;
                fromPartial(object: Partial<_46.GenesisState>): _46.GenesisState;
                fromSDK(object: _46.GenesisStateSDKType): _46.GenesisState;
                toSDK(message: _46.GenesisState): _46.GenesisStateSDKType;
                fromAmino(object: _46.GenesisStateAmino): _46.GenesisState;
                toAmino(message: _46.GenesisState): _46.GenesisStateAmino;
                fromAminoMsg(object: _46.GenesisStateAminoMsg): _46.GenesisState;
                toAminoMsg(message: _46.GenesisState): _46.GenesisStateAminoMsg;
                fromProtoMsg(message: _46.GenesisStateProtoMsg): _46.GenesisState;
                toProto(message: _46.GenesisState): Uint8Array;
                toProtoMsg(message: _46.GenesisState): _46.GenesisStateProtoMsg;
            };
            MsgAuthorizeCircuitBreaker: {
                typeUrl: string;
                encode(message: _45.MsgAuthorizeCircuitBreaker, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _45.MsgAuthorizeCircuitBreaker;
                fromJSON(object: any): _45.MsgAuthorizeCircuitBreaker;
                toJSON(message: _45.MsgAuthorizeCircuitBreaker): unknown;
                fromPartial(object: Partial<_45.MsgAuthorizeCircuitBreaker>): _45.MsgAuthorizeCircuitBreaker;
                fromSDK(object: _45.MsgAuthorizeCircuitBreakerSDKType): _45.MsgAuthorizeCircuitBreaker;
                toSDK(message: _45.MsgAuthorizeCircuitBreaker): _45.MsgAuthorizeCircuitBreakerSDKType;
                fromAmino(object: _45.MsgAuthorizeCircuitBreakerAmino): _45.MsgAuthorizeCircuitBreaker;
                toAmino(message: _45.MsgAuthorizeCircuitBreaker): _45.MsgAuthorizeCircuitBreakerAmino;
                fromAminoMsg(object: _45.MsgAuthorizeCircuitBreakerAminoMsg): _45.MsgAuthorizeCircuitBreaker;
                toAminoMsg(message: _45.MsgAuthorizeCircuitBreaker): _45.MsgAuthorizeCircuitBreakerAminoMsg;
                fromProtoMsg(message: _45.MsgAuthorizeCircuitBreakerProtoMsg): _45.MsgAuthorizeCircuitBreaker;
                toProto(message: _45.MsgAuthorizeCircuitBreaker): Uint8Array;
                toProtoMsg(message: _45.MsgAuthorizeCircuitBreaker): _45.MsgAuthorizeCircuitBreakerProtoMsg;
            };
            MsgAuthorizeCircuitBreakerResponse: {
                typeUrl: string;
                encode(message: _45.MsgAuthorizeCircuitBreakerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _45.MsgAuthorizeCircuitBreakerResponse;
                fromJSON(object: any): _45.MsgAuthorizeCircuitBreakerResponse;
                toJSON(message: _45.MsgAuthorizeCircuitBreakerResponse): unknown;
                fromPartial(object: Partial<_45.MsgAuthorizeCircuitBreakerResponse>): _45.MsgAuthorizeCircuitBreakerResponse;
                fromSDK(object: _45.MsgAuthorizeCircuitBreakerResponseSDKType): _45.MsgAuthorizeCircuitBreakerResponse;
                toSDK(message: _45.MsgAuthorizeCircuitBreakerResponse): _45.MsgAuthorizeCircuitBreakerResponseSDKType;
                fromAmino(object: _45.MsgAuthorizeCircuitBreakerResponseAmino): _45.MsgAuthorizeCircuitBreakerResponse;
                toAmino(message: _45.MsgAuthorizeCircuitBreakerResponse): _45.MsgAuthorizeCircuitBreakerResponseAmino;
                fromAminoMsg(object: _45.MsgAuthorizeCircuitBreakerResponseAminoMsg): _45.MsgAuthorizeCircuitBreakerResponse;
                toAminoMsg(message: _45.MsgAuthorizeCircuitBreakerResponse): _45.MsgAuthorizeCircuitBreakerResponseAminoMsg;
                fromProtoMsg(message: _45.MsgAuthorizeCircuitBreakerResponseProtoMsg): _45.MsgAuthorizeCircuitBreakerResponse;
                toProto(message: _45.MsgAuthorizeCircuitBreakerResponse): Uint8Array;
                toProtoMsg(message: _45.MsgAuthorizeCircuitBreakerResponse): _45.MsgAuthorizeCircuitBreakerResponseProtoMsg;
            };
            MsgTripCircuitBreaker: {
                typeUrl: string;
                encode(message: _45.MsgTripCircuitBreaker, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _45.MsgTripCircuitBreaker;
                fromJSON(object: any): _45.MsgTripCircuitBreaker;
                toJSON(message: _45.MsgTripCircuitBreaker): unknown;
                fromPartial(object: Partial<_45.MsgTripCircuitBreaker>): _45.MsgTripCircuitBreaker;
                fromSDK(object: _45.MsgTripCircuitBreakerSDKType): _45.MsgTripCircuitBreaker;
                toSDK(message: _45.MsgTripCircuitBreaker): _45.MsgTripCircuitBreakerSDKType;
                fromAmino(object: _45.MsgTripCircuitBreakerAmino): _45.MsgTripCircuitBreaker;
                toAmino(message: _45.MsgTripCircuitBreaker): _45.MsgTripCircuitBreakerAmino;
                fromAminoMsg(object: _45.MsgTripCircuitBreakerAminoMsg): _45.MsgTripCircuitBreaker;
                toAminoMsg(message: _45.MsgTripCircuitBreaker): _45.MsgTripCircuitBreakerAminoMsg;
                fromProtoMsg(message: _45.MsgTripCircuitBreakerProtoMsg): _45.MsgTripCircuitBreaker;
                toProto(message: _45.MsgTripCircuitBreaker): Uint8Array;
                toProtoMsg(message: _45.MsgTripCircuitBreaker): _45.MsgTripCircuitBreakerProtoMsg;
            };
            MsgTripCircuitBreakerResponse: {
                typeUrl: string;
                encode(message: _45.MsgTripCircuitBreakerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _45.MsgTripCircuitBreakerResponse;
                fromJSON(object: any): _45.MsgTripCircuitBreakerResponse;
                toJSON(message: _45.MsgTripCircuitBreakerResponse): unknown;
                fromPartial(object: Partial<_45.MsgTripCircuitBreakerResponse>): _45.MsgTripCircuitBreakerResponse;
                fromSDK(object: _45.MsgTripCircuitBreakerResponseSDKType): _45.MsgTripCircuitBreakerResponse;
                toSDK(message: _45.MsgTripCircuitBreakerResponse): _45.MsgTripCircuitBreakerResponseSDKType;
                fromAmino(object: _45.MsgTripCircuitBreakerResponseAmino): _45.MsgTripCircuitBreakerResponse;
                toAmino(message: _45.MsgTripCircuitBreakerResponse): _45.MsgTripCircuitBreakerResponseAmino;
                fromAminoMsg(object: _45.MsgTripCircuitBreakerResponseAminoMsg): _45.MsgTripCircuitBreakerResponse;
                toAminoMsg(message: _45.MsgTripCircuitBreakerResponse): _45.MsgTripCircuitBreakerResponseAminoMsg;
                fromProtoMsg(message: _45.MsgTripCircuitBreakerResponseProtoMsg): _45.MsgTripCircuitBreakerResponse;
                toProto(message: _45.MsgTripCircuitBreakerResponse): Uint8Array;
                toProtoMsg(message: _45.MsgTripCircuitBreakerResponse): _45.MsgTripCircuitBreakerResponseProtoMsg;
            };
            MsgResetCircuitBreaker: {
                typeUrl: string;
                encode(message: _45.MsgResetCircuitBreaker, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _45.MsgResetCircuitBreaker;
                fromJSON(object: any): _45.MsgResetCircuitBreaker;
                toJSON(message: _45.MsgResetCircuitBreaker): unknown;
                fromPartial(object: Partial<_45.MsgResetCircuitBreaker>): _45.MsgResetCircuitBreaker;
                fromSDK(object: _45.MsgResetCircuitBreakerSDKType): _45.MsgResetCircuitBreaker;
                toSDK(message: _45.MsgResetCircuitBreaker): _45.MsgResetCircuitBreakerSDKType;
                fromAmino(object: _45.MsgResetCircuitBreakerAmino): _45.MsgResetCircuitBreaker;
                toAmino(message: _45.MsgResetCircuitBreaker): _45.MsgResetCircuitBreakerAmino;
                fromAminoMsg(object: _45.MsgResetCircuitBreakerAminoMsg): _45.MsgResetCircuitBreaker;
                toAminoMsg(message: _45.MsgResetCircuitBreaker): _45.MsgResetCircuitBreakerAminoMsg;
                fromProtoMsg(message: _45.MsgResetCircuitBreakerProtoMsg): _45.MsgResetCircuitBreaker;
                toProto(message: _45.MsgResetCircuitBreaker): Uint8Array;
                toProtoMsg(message: _45.MsgResetCircuitBreaker): _45.MsgResetCircuitBreakerProtoMsg;
            };
            MsgResetCircuitBreakerResponse: {
                typeUrl: string;
                encode(message: _45.MsgResetCircuitBreakerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _45.MsgResetCircuitBreakerResponse;
                fromJSON(object: any): _45.MsgResetCircuitBreakerResponse;
                toJSON(message: _45.MsgResetCircuitBreakerResponse): unknown;
                fromPartial(object: Partial<_45.MsgResetCircuitBreakerResponse>): _45.MsgResetCircuitBreakerResponse;
                fromSDK(object: _45.MsgResetCircuitBreakerResponseSDKType): _45.MsgResetCircuitBreakerResponse;
                toSDK(message: _45.MsgResetCircuitBreakerResponse): _45.MsgResetCircuitBreakerResponseSDKType;
                fromAmino(object: _45.MsgResetCircuitBreakerResponseAmino): _45.MsgResetCircuitBreakerResponse;
                toAmino(message: _45.MsgResetCircuitBreakerResponse): _45.MsgResetCircuitBreakerResponseAmino;
                fromAminoMsg(object: _45.MsgResetCircuitBreakerResponseAminoMsg): _45.MsgResetCircuitBreakerResponse;
                toAminoMsg(message: _45.MsgResetCircuitBreakerResponse): _45.MsgResetCircuitBreakerResponseAminoMsg;
                fromProtoMsg(message: _45.MsgResetCircuitBreakerResponseProtoMsg): _45.MsgResetCircuitBreakerResponse;
                toProto(message: _45.MsgResetCircuitBreakerResponse): Uint8Array;
                toProtoMsg(message: _45.MsgResetCircuitBreakerResponse): _45.MsgResetCircuitBreakerResponseProtoMsg;
            };
            QueryAccountRequest: {
                typeUrl: string;
                encode(message: _44.QueryAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _44.QueryAccountRequest;
                fromJSON(object: any): _44.QueryAccountRequest;
                toJSON(message: _44.QueryAccountRequest): unknown;
                fromPartial(object: Partial<_44.QueryAccountRequest>): _44.QueryAccountRequest;
                fromSDK(object: _44.QueryAccountRequestSDKType): _44.QueryAccountRequest;
                toSDK(message: _44.QueryAccountRequest): _44.QueryAccountRequestSDKType;
                fromAmino(object: _44.QueryAccountRequestAmino): _44.QueryAccountRequest;
                toAmino(message: _44.QueryAccountRequest): _44.QueryAccountRequestAmino;
                fromAminoMsg(object: _44.QueryAccountRequestAminoMsg): _44.QueryAccountRequest;
                toAminoMsg(message: _44.QueryAccountRequest): _44.QueryAccountRequestAminoMsg;
                fromProtoMsg(message: _44.QueryAccountRequestProtoMsg): _44.QueryAccountRequest;
                toProto(message: _44.QueryAccountRequest): Uint8Array;
                toProtoMsg(message: _44.QueryAccountRequest): _44.QueryAccountRequestProtoMsg;
            };
            AccountResponse: {
                typeUrl: string;
                encode(message: _44.AccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _44.AccountResponse;
                fromJSON(object: any): _44.AccountResponse;
                toJSON(message: _44.AccountResponse): unknown;
                fromPartial(object: Partial<_44.AccountResponse>): _44.AccountResponse;
                fromSDK(object: _44.AccountResponseSDKType): _44.AccountResponse;
                toSDK(message: _44.AccountResponse): _44.AccountResponseSDKType;
                fromAmino(object: _44.AccountResponseAmino): _44.AccountResponse;
                toAmino(message: _44.AccountResponse): _44.AccountResponseAmino;
                fromAminoMsg(object: _44.AccountResponseAminoMsg): _44.AccountResponse;
                toAminoMsg(message: _44.AccountResponse): _44.AccountResponseAminoMsg;
                fromProtoMsg(message: _44.AccountResponseProtoMsg): _44.AccountResponse;
                toProto(message: _44.AccountResponse): Uint8Array;
                toProtoMsg(message: _44.AccountResponse): _44.AccountResponseProtoMsg;
            };
            QueryAccountsRequest: {
                typeUrl: string;
                encode(message: _44.QueryAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _44.QueryAccountsRequest;
                fromJSON(object: any): _44.QueryAccountsRequest;
                toJSON(message: _44.QueryAccountsRequest): unknown;
                fromPartial(object: Partial<_44.QueryAccountsRequest>): _44.QueryAccountsRequest;
                fromSDK(object: _44.QueryAccountsRequestSDKType): _44.QueryAccountsRequest;
                toSDK(message: _44.QueryAccountsRequest): _44.QueryAccountsRequestSDKType;
                fromAmino(object: _44.QueryAccountsRequestAmino): _44.QueryAccountsRequest;
                toAmino(message: _44.QueryAccountsRequest): _44.QueryAccountsRequestAmino;
                fromAminoMsg(object: _44.QueryAccountsRequestAminoMsg): _44.QueryAccountsRequest;
                toAminoMsg(message: _44.QueryAccountsRequest): _44.QueryAccountsRequestAminoMsg;
                fromProtoMsg(message: _44.QueryAccountsRequestProtoMsg): _44.QueryAccountsRequest;
                toProto(message: _44.QueryAccountsRequest): Uint8Array;
                toProtoMsg(message: _44.QueryAccountsRequest): _44.QueryAccountsRequestProtoMsg;
            };
            AccountsResponse: {
                typeUrl: string;
                encode(message: _44.AccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _44.AccountsResponse;
                fromJSON(object: any): _44.AccountsResponse;
                toJSON(message: _44.AccountsResponse): unknown;
                fromPartial(object: Partial<_44.AccountsResponse>): _44.AccountsResponse;
                fromSDK(object: _44.AccountsResponseSDKType): _44.AccountsResponse;
                toSDK(message: _44.AccountsResponse): _44.AccountsResponseSDKType;
                fromAmino(object: _44.AccountsResponseAmino): _44.AccountsResponse;
                toAmino(message: _44.AccountsResponse): _44.AccountsResponseAmino;
                fromAminoMsg(object: _44.AccountsResponseAminoMsg): _44.AccountsResponse;
                toAminoMsg(message: _44.AccountsResponse): _44.AccountsResponseAminoMsg;
                fromProtoMsg(message: _44.AccountsResponseProtoMsg): _44.AccountsResponse;
                toProto(message: _44.AccountsResponse): Uint8Array;
                toProtoMsg(message: _44.AccountsResponse): _44.AccountsResponseProtoMsg;
            };
            QueryDisabledListRequest: {
                typeUrl: string;
                encode(_: _44.QueryDisabledListRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _44.QueryDisabledListRequest;
                fromJSON(_: any): _44.QueryDisabledListRequest;
                toJSON(_: _44.QueryDisabledListRequest): unknown;
                fromPartial(_: Partial<_44.QueryDisabledListRequest>): _44.QueryDisabledListRequest;
                fromSDK(_: _44.QueryDisabledListRequestSDKType): _44.QueryDisabledListRequest;
                toSDK(_: _44.QueryDisabledListRequest): _44.QueryDisabledListRequestSDKType;
                fromAmino(_: _44.QueryDisabledListRequestAmino): _44.QueryDisabledListRequest;
                toAmino(_: _44.QueryDisabledListRequest): _44.QueryDisabledListRequestAmino;
                fromAminoMsg(object: _44.QueryDisabledListRequestAminoMsg): _44.QueryDisabledListRequest;
                toAminoMsg(message: _44.QueryDisabledListRequest): _44.QueryDisabledListRequestAminoMsg;
                fromProtoMsg(message: _44.QueryDisabledListRequestProtoMsg): _44.QueryDisabledListRequest;
                toProto(message: _44.QueryDisabledListRequest): Uint8Array;
                toProtoMsg(message: _44.QueryDisabledListRequest): _44.QueryDisabledListRequestProtoMsg;
            };
            DisabledListResponse: {
                typeUrl: string;
                encode(message: _44.DisabledListResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _44.DisabledListResponse;
                fromJSON(object: any): _44.DisabledListResponse;
                toJSON(message: _44.DisabledListResponse): unknown;
                fromPartial(object: Partial<_44.DisabledListResponse>): _44.DisabledListResponse;
                fromSDK(object: _44.DisabledListResponseSDKType): _44.DisabledListResponse;
                toSDK(message: _44.DisabledListResponse): _44.DisabledListResponseSDKType;
                fromAmino(object: _44.DisabledListResponseAmino): _44.DisabledListResponse;
                toAmino(message: _44.DisabledListResponse): _44.DisabledListResponseAmino;
                fromAminoMsg(object: _44.DisabledListResponseAminoMsg): _44.DisabledListResponse;
                toAminoMsg(message: _44.DisabledListResponse): _44.DisabledListResponseAminoMsg;
                fromProtoMsg(message: _44.DisabledListResponseProtoMsg): _44.DisabledListResponse;
                toProto(message: _44.DisabledListResponse): Uint8Array;
                toProtoMsg(message: _44.DisabledListResponse): _44.DisabledListResponseProtoMsg;
            };
        };
    }
    namespace consensus {
        namespace module {
            const v1: {
                protobufPackage: "cosmos.consensus.module.v1";
                Module: {
                    typeUrl: string;
                    encode(message: _47.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _47.Module;
                    fromJSON(object: any): _47.Module;
                    toJSON(message: _47.Module): unknown;
                    fromPartial(object: Partial<_47.Module>): _47.Module;
                    fromSDK(object: _47.ModuleSDKType): _47.Module;
                    toSDK(message: _47.Module): _47.ModuleSDKType;
                    fromAmino(object: _47.ModuleAmino): _47.Module;
                    toAmino(message: _47.Module): _47.ModuleAmino;
                    fromAminoMsg(object: _47.ModuleAminoMsg): _47.Module;
                    toAminoMsg(message: _47.Module): _47.ModuleAminoMsg;
                    fromProtoMsg(message: _47.ModuleProtoMsg): _47.Module;
                    toProto(message: _47.Module): Uint8Array;
                    toProtoMsg(message: _47.Module): _47.ModuleProtoMsg;
                };
            };
        }
        const v1: {
            Msg: typeof _229.Msg;
            Query: typeof _212.Query;
            QueryClientImpl: typeof _212.QueryClientImpl;
            LCDQueryClient: typeof _194.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    updateParams(value: _49.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    updateParams(value: _49.MsgUpdateParams): {
                        typeUrl: string;
                        value: _49.MsgUpdateParams;
                    };
                };
                toJSON: {
                    updateParams(value: _49.MsgUpdateParams): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _49.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    updateParams(value: _49.MsgUpdateParams): {
                        typeUrl: string;
                        value: _49.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.consensus.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _49.MsgUpdateParams) => _49.MsgUpdateParamsAmino;
                    fromAmino: (object: _49.MsgUpdateParamsAmino) => _49.MsgUpdateParams;
                };
            };
            protobufPackage: "cosmos.consensus.v1";
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _49.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _49.MsgUpdateParams;
                fromJSON(object: any): _49.MsgUpdateParams;
                toJSON(message: _49.MsgUpdateParams): unknown;
                fromPartial(object: Partial<_49.MsgUpdateParams>): _49.MsgUpdateParams;
                fromSDK(object: _49.MsgUpdateParamsSDKType): _49.MsgUpdateParams;
                toSDK(message: _49.MsgUpdateParams): _49.MsgUpdateParamsSDKType;
                fromAmino(object: _49.MsgUpdateParamsAmino): _49.MsgUpdateParams;
                toAmino(message: _49.MsgUpdateParams): _49.MsgUpdateParamsAmino;
                fromAminoMsg(object: _49.MsgUpdateParamsAminoMsg): _49.MsgUpdateParams;
                toAminoMsg(message: _49.MsgUpdateParams): _49.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _49.MsgUpdateParamsProtoMsg): _49.MsgUpdateParams;
                toProto(message: _49.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _49.MsgUpdateParams): _49.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _49.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _49.MsgUpdateParamsResponse;
                fromJSON(_: any): _49.MsgUpdateParamsResponse;
                toJSON(_: _49.MsgUpdateParamsResponse): unknown;
                fromPartial(_: Partial<_49.MsgUpdateParamsResponse>): _49.MsgUpdateParamsResponse;
                fromSDK(_: _49.MsgUpdateParamsResponseSDKType): _49.MsgUpdateParamsResponse;
                toSDK(_: _49.MsgUpdateParamsResponse): _49.MsgUpdateParamsResponseSDKType;
                fromAmino(_: _49.MsgUpdateParamsResponseAmino): _49.MsgUpdateParamsResponse;
                toAmino(_: _49.MsgUpdateParamsResponse): _49.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _49.MsgUpdateParamsResponseAminoMsg): _49.MsgUpdateParamsResponse;
                toAminoMsg(message: _49.MsgUpdateParamsResponse): _49.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _49.MsgUpdateParamsResponseProtoMsg): _49.MsgUpdateParamsResponse;
                toProto(message: _49.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _49.MsgUpdateParamsResponse): _49.MsgUpdateParamsResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _48.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _48.QueryParamsRequest;
                fromJSON(_: any): _48.QueryParamsRequest;
                toJSON(_: _48.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_48.QueryParamsRequest>): _48.QueryParamsRequest;
                fromSDK(_: _48.QueryParamsRequestSDKType): _48.QueryParamsRequest;
                toSDK(_: _48.QueryParamsRequest): _48.QueryParamsRequestSDKType;
                fromAmino(_: _48.QueryParamsRequestAmino): _48.QueryParamsRequest;
                toAmino(_: _48.QueryParamsRequest): _48.QueryParamsRequestAmino;
                fromAminoMsg(object: _48.QueryParamsRequestAminoMsg): _48.QueryParamsRequest;
                toAminoMsg(message: _48.QueryParamsRequest): _48.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _48.QueryParamsRequestProtoMsg): _48.QueryParamsRequest;
                toProto(message: _48.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _48.QueryParamsRequest): _48.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _48.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _48.QueryParamsResponse;
                fromJSON(object: any): _48.QueryParamsResponse;
                toJSON(message: _48.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_48.QueryParamsResponse>): _48.QueryParamsResponse;
                fromSDK(object: _48.QueryParamsResponseSDKType): _48.QueryParamsResponse;
                toSDK(message: _48.QueryParamsResponse): _48.QueryParamsResponseSDKType;
                fromAmino(object: _48.QueryParamsResponseAmino): _48.QueryParamsResponse;
                toAmino(message: _48.QueryParamsResponse): _48.QueryParamsResponseAmino;
                fromAminoMsg(object: _48.QueryParamsResponseAminoMsg): _48.QueryParamsResponse;
                toAminoMsg(message: _48.QueryParamsResponse): _48.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _48.QueryParamsResponseProtoMsg): _48.QueryParamsResponse;
                toProto(message: _48.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _48.QueryParamsResponse): _48.QueryParamsResponseProtoMsg;
            };
        };
    }
    namespace crisis {
        namespace module {
            const v1: {
                protobufPackage: "cosmos.crisis.module.v1";
                Module: {
                    typeUrl: string;
                    encode(message: _50.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _50.Module;
                    fromJSON(object: any): _50.Module;
                    toJSON(message: _50.Module): unknown;
                    fromPartial(object: Partial<_50.Module>): _50.Module;
                    fromSDK(object: _50.ModuleSDKType): _50.Module;
                    toSDK(message: _50.Module): _50.ModuleSDKType;
                    fromAmino(object: _50.ModuleAmino): _50.Module;
                    toAmino(message: _50.Module): _50.ModuleAmino;
                    fromAminoMsg(object: _50.ModuleAminoMsg): _50.Module;
                    toAminoMsg(message: _50.Module): _50.ModuleAminoMsg;
                    fromProtoMsg(message: _50.ModuleProtoMsg): _50.Module;
                    toProto(message: _50.Module): Uint8Array;
                    toProtoMsg(message: _50.Module): _50.ModuleProtoMsg;
                };
            };
        }
    }
    namespace crypto {
        const ed25519: {
            protobufPackage: "cosmos.crypto.ed25519";
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
        namespace hd {
            const v1: {
                protobufPackage: "cosmos.crypto.hd.v1";
                BIP44Params: {
                    typeUrl: string;
                    encode(message: _52.BIP44Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _52.BIP44Params;
                    fromJSON(object: any): _52.BIP44Params;
                    toJSON(message: _52.BIP44Params): unknown;
                    fromPartial(object: Partial<_52.BIP44Params>): _52.BIP44Params;
                    fromSDK(object: _52.BIP44ParamsSDKType): _52.BIP44Params;
                    toSDK(message: _52.BIP44Params): _52.BIP44ParamsSDKType;
                    fromAmino(object: _52.BIP44ParamsAmino): _52.BIP44Params;
                    toAmino(message: _52.BIP44Params): _52.BIP44ParamsAmino;
                    fromAminoMsg(object: _52.BIP44ParamsAminoMsg): _52.BIP44Params;
                    toAminoMsg(message: _52.BIP44Params): _52.BIP44ParamsAminoMsg;
                    fromProtoMsg(message: _52.BIP44ParamsProtoMsg): _52.BIP44Params;
                    toProto(message: _52.BIP44Params): Uint8Array;
                    toProtoMsg(message: _52.BIP44Params): _52.BIP44ParamsProtoMsg;
                };
            };
        }
        namespace keyring {
            const v1: {
                protobufPackage: "cosmos.crypto.keyring.v1";
                Record: {
                    typeUrl: string;
                    encode(message: _53.Record, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _53.Record;
                    fromJSON(object: any): _53.Record;
                    toJSON(message: _53.Record): unknown;
                    fromPartial(object: Partial<_53.Record>): _53.Record;
                    fromSDK(object: _53.RecordSDKType): _53.Record;
                    toSDK(message: _53.Record): _53.RecordSDKType;
                    fromAmino(object: _53.RecordAmino): _53.Record;
                    toAmino(message: _53.Record): _53.RecordAmino;
                    fromAminoMsg(object: _53.RecordAminoMsg): _53.Record;
                    toAminoMsg(message: _53.Record): _53.RecordAminoMsg;
                    fromProtoMsg(message: _53.RecordProtoMsg): _53.Record;
                    toProto(message: _53.Record): Uint8Array;
                    toProtoMsg(message: _53.Record): _53.RecordProtoMsg;
                };
                Record_Local: {
                    typeUrl: string;
                    encode(message: _53.Record_Local, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _53.Record_Local;
                    fromJSON(object: any): _53.Record_Local;
                    toJSON(message: _53.Record_Local): unknown;
                    fromPartial(object: Partial<_53.Record_Local>): _53.Record_Local;
                    fromSDK(object: _53.Record_LocalSDKType): _53.Record_Local;
                    toSDK(message: _53.Record_Local): _53.Record_LocalSDKType;
                    fromAmino(object: _53.Record_LocalAmino): _53.Record_Local;
                    toAmino(message: _53.Record_Local): _53.Record_LocalAmino;
                    fromAminoMsg(object: _53.Record_LocalAminoMsg): _53.Record_Local;
                    toAminoMsg(message: _53.Record_Local): _53.Record_LocalAminoMsg;
                    fromProtoMsg(message: _53.Record_LocalProtoMsg): _53.Record_Local;
                    toProto(message: _53.Record_Local): Uint8Array;
                    toProtoMsg(message: _53.Record_Local): _53.Record_LocalProtoMsg;
                };
                Record_Ledger: {
                    typeUrl: string;
                    encode(message: _53.Record_Ledger, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _53.Record_Ledger;
                    fromJSON(object: any): _53.Record_Ledger;
                    toJSON(message: _53.Record_Ledger): unknown;
                    fromPartial(object: Partial<_53.Record_Ledger>): _53.Record_Ledger;
                    fromSDK(object: _53.Record_LedgerSDKType): _53.Record_Ledger;
                    toSDK(message: _53.Record_Ledger): _53.Record_LedgerSDKType;
                    fromAmino(object: _53.Record_LedgerAmino): _53.Record_Ledger;
                    toAmino(message: _53.Record_Ledger): _53.Record_LedgerAmino;
                    fromAminoMsg(object: _53.Record_LedgerAminoMsg): _53.Record_Ledger;
                    toAminoMsg(message: _53.Record_Ledger): _53.Record_LedgerAminoMsg;
                    fromProtoMsg(message: _53.Record_LedgerProtoMsg): _53.Record_Ledger;
                    toProto(message: _53.Record_Ledger): Uint8Array;
                    toProtoMsg(message: _53.Record_Ledger): _53.Record_LedgerProtoMsg;
                };
                Record_Multi: {
                    typeUrl: string;
                    encode(_: _53.Record_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _53.Record_Multi;
                    fromJSON(_: any): _53.Record_Multi;
                    toJSON(_: _53.Record_Multi): unknown;
                    fromPartial(_: Partial<_53.Record_Multi>): _53.Record_Multi;
                    fromSDK(_: _53.Record_MultiSDKType): _53.Record_Multi;
                    toSDK(_: _53.Record_Multi): _53.Record_MultiSDKType;
                    fromAmino(_: _53.Record_MultiAmino): _53.Record_Multi;
                    toAmino(_: _53.Record_Multi): _53.Record_MultiAmino;
                    fromAminoMsg(object: _53.Record_MultiAminoMsg): _53.Record_Multi;
                    toAminoMsg(message: _53.Record_Multi): _53.Record_MultiAminoMsg;
                    fromProtoMsg(message: _53.Record_MultiProtoMsg): _53.Record_Multi;
                    toProto(message: _53.Record_Multi): Uint8Array;
                    toProtoMsg(message: _53.Record_Multi): _53.Record_MultiProtoMsg;
                };
                Record_Offline: {
                    typeUrl: string;
                    encode(_: _53.Record_Offline, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _53.Record_Offline;
                    fromJSON(_: any): _53.Record_Offline;
                    toJSON(_: _53.Record_Offline): unknown;
                    fromPartial(_: Partial<_53.Record_Offline>): _53.Record_Offline;
                    fromSDK(_: _53.Record_OfflineSDKType): _53.Record_Offline;
                    toSDK(_: _53.Record_Offline): _53.Record_OfflineSDKType;
                    fromAmino(_: _53.Record_OfflineAmino): _53.Record_Offline;
                    toAmino(_: _53.Record_Offline): _53.Record_OfflineAmino;
                    fromAminoMsg(object: _53.Record_OfflineAminoMsg): _53.Record_Offline;
                    toAminoMsg(message: _53.Record_Offline): _53.Record_OfflineAminoMsg;
                    fromProtoMsg(message: _53.Record_OfflineProtoMsg): _53.Record_Offline;
                    toProto(message: _53.Record_Offline): Uint8Array;
                    toProtoMsg(message: _53.Record_Offline): _53.Record_OfflineProtoMsg;
                };
            };
        }
        const multisig: {
            protobufPackage: "cosmos.crypto.multisig";
            LegacyAminoPubKey: {
                typeUrl: string;
                encode(message: _54.LegacyAminoPubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _54.LegacyAminoPubKey;
                fromJSON(object: any): _54.LegacyAminoPubKey;
                toJSON(message: _54.LegacyAminoPubKey): unknown;
                fromPartial(object: Partial<_54.LegacyAminoPubKey>): _54.LegacyAminoPubKey;
                fromSDK(object: _54.LegacyAminoPubKeySDKType): _54.LegacyAminoPubKey;
                toSDK(message: _54.LegacyAminoPubKey): _54.LegacyAminoPubKeySDKType;
                fromAmino(object: _54.LegacyAminoPubKeyAmino): _54.LegacyAminoPubKey;
                toAmino(message: _54.LegacyAminoPubKey): _54.LegacyAminoPubKeyAmino;
                fromAminoMsg(object: _54.LegacyAminoPubKeyAminoMsg): _54.LegacyAminoPubKey;
                toAminoMsg(message: _54.LegacyAminoPubKey): _54.LegacyAminoPubKeyAminoMsg;
                fromProtoMsg(message: _54.LegacyAminoPubKeyProtoMsg): _54.LegacyAminoPubKey;
                toProto(message: _54.LegacyAminoPubKey): Uint8Array;
                toProtoMsg(message: _54.LegacyAminoPubKey): _54.LegacyAminoPubKeyProtoMsg;
            };
        };
        const secp256k1: {
            protobufPackage: "cosmos.crypto.secp256k1";
            PubKey: {
                typeUrl: string;
                encode(message: _55.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _55.PubKey;
                fromJSON(object: any): _55.PubKey;
                toJSON(message: _55.PubKey): unknown;
                fromPartial(object: Partial<_55.PubKey>): _55.PubKey;
                fromSDK(object: _55.PubKeySDKType): _55.PubKey;
                toSDK(message: _55.PubKey): _55.PubKeySDKType;
                fromAmino(object: _55.PubKeyAmino): _55.PubKey;
                toAmino(message: _55.PubKey): _55.PubKeyAmino;
                fromAminoMsg(object: _55.PubKeyAminoMsg): _55.PubKey;
                toAminoMsg(message: _55.PubKey): _55.PubKeyAminoMsg;
                fromProtoMsg(message: _55.PubKeyProtoMsg): _55.PubKey;
                toProto(message: _55.PubKey): Uint8Array;
                toProtoMsg(message: _55.PubKey): _55.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _55.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _55.PrivKey;
                fromJSON(object: any): _55.PrivKey;
                toJSON(message: _55.PrivKey): unknown;
                fromPartial(object: Partial<_55.PrivKey>): _55.PrivKey;
                fromSDK(object: _55.PrivKeySDKType): _55.PrivKey;
                toSDK(message: _55.PrivKey): _55.PrivKeySDKType;
                fromAmino(object: _55.PrivKeyAmino): _55.PrivKey;
                toAmino(message: _55.PrivKey): _55.PrivKeyAmino;
                fromAminoMsg(object: _55.PrivKeyAminoMsg): _55.PrivKey;
                toAminoMsg(message: _55.PrivKey): _55.PrivKeyAminoMsg;
                fromProtoMsg(message: _55.PrivKeyProtoMsg): _55.PrivKey;
                toProto(message: _55.PrivKey): Uint8Array;
                toProtoMsg(message: _55.PrivKey): _55.PrivKeyProtoMsg;
            };
        };
        const secp256r1: {
            protobufPackage: "cosmos.crypto.secp256r1";
            PubKey: {
                typeUrl: string;
                encode(message: _56.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _56.PubKey;
                fromJSON(object: any): _56.PubKey;
                toJSON(message: _56.PubKey): unknown;
                fromPartial(object: Partial<_56.PubKey>): _56.PubKey;
                fromSDK(object: _56.PubKeySDKType): _56.PubKey;
                toSDK(message: _56.PubKey): _56.PubKeySDKType;
                fromAmino(object: _56.PubKeyAmino): _56.PubKey;
                toAmino(message: _56.PubKey): _56.PubKeyAmino;
                fromAminoMsg(object: _56.PubKeyAminoMsg): _56.PubKey;
                toAminoMsg(message: _56.PubKey): _56.PubKeyAminoMsg;
                fromProtoMsg(message: _56.PubKeyProtoMsg): _56.PubKey;
                toProto(message: _56.PubKey): Uint8Array;
                toProtoMsg(message: _56.PubKey): _56.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _56.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _56.PrivKey;
                fromJSON(object: any): _56.PrivKey;
                toJSON(message: _56.PrivKey): unknown;
                fromPartial(object: Partial<_56.PrivKey>): _56.PrivKey;
                fromSDK(object: _56.PrivKeySDKType): _56.PrivKey;
                toSDK(message: _56.PrivKey): _56.PrivKeySDKType;
                fromAmino(object: _56.PrivKeyAmino): _56.PrivKey;
                toAmino(message: _56.PrivKey): _56.PrivKeyAmino;
                fromAminoMsg(object: _56.PrivKeyAminoMsg): _56.PrivKey;
                toAminoMsg(message: _56.PrivKey): _56.PrivKeyAminoMsg;
                fromProtoMsg(message: _56.PrivKeyProtoMsg): _56.PrivKey;
                toProto(message: _56.PrivKey): Uint8Array;
                toProtoMsg(message: _56.PrivKey): _56.PrivKeyProtoMsg;
            };
        };
    }
    namespace distribution {
        namespace module {
            const v1: {
                protobufPackage: "cosmos.distribution.module.v1";
                Module: {
                    typeUrl: string;
                    encode(message: _57.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _57.Module;
                    fromJSON(object: any): _57.Module;
                    toJSON(message: _57.Module): unknown;
                    fromPartial(object: Partial<_57.Module>): _57.Module;
                    fromSDK(object: _57.ModuleSDKType): _57.Module;
                    toSDK(message: _57.Module): _57.ModuleSDKType;
                    fromAmino(object: _57.ModuleAmino): _57.Module;
                    toAmino(message: _57.Module): _57.ModuleAmino;
                    fromAminoMsg(object: _57.ModuleAminoMsg): _57.Module;
                    toAminoMsg(message: _57.Module): _57.ModuleAminoMsg;
                    fromProtoMsg(message: _57.ModuleProtoMsg): _57.Module;
                    toProto(message: _57.Module): Uint8Array;
                    toProtoMsg(message: _57.Module): _57.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            Msg: typeof _230.Msg;
            Query: typeof _213.Query;
            QueryClientImpl: typeof _213.QueryClientImpl;
            LCDQueryClient: typeof _195.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _61.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _61.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _61.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _61.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _61.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    communityPoolSpend(value: _61.MsgCommunityPoolSpend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    depositValidatorRewardsPool(value: _61.MsgDepositValidatorRewardsPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _61.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _61.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _61.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _61.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _61.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _61.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _61.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _61.MsgFundCommunityPool;
                    };
                    updateParams(value: _61.MsgUpdateParams): {
                        typeUrl: string;
                        value: _61.MsgUpdateParams;
                    };
                    communityPoolSpend(value: _61.MsgCommunityPoolSpend): {
                        typeUrl: string;
                        value: _61.MsgCommunityPoolSpend;
                    };
                    depositValidatorRewardsPool(value: _61.MsgDepositValidatorRewardsPool): {
                        typeUrl: string;
                        value: _61.MsgDepositValidatorRewardsPool;
                    };
                };
                toJSON: {
                    setWithdrawAddress(value: _61.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdrawDelegatorReward(value: _61.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdrawValidatorCommission(value: _61.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: unknown;
                    };
                    fundCommunityPool(value: _61.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateParams(value: _61.MsgUpdateParams): {
                        typeUrl: string;
                        value: unknown;
                    };
                    communityPoolSpend(value: _61.MsgCommunityPoolSpend): {
                        typeUrl: string;
                        value: unknown;
                    };
                    depositValidatorRewardsPool(value: _61.MsgDepositValidatorRewardsPool): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _61.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _61.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _61.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _61.MsgFundCommunityPool;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _61.MsgUpdateParams;
                    };
                    communityPoolSpend(value: any): {
                        typeUrl: string;
                        value: _61.MsgCommunityPoolSpend;
                    };
                    depositValidatorRewardsPool(value: any): {
                        typeUrl: string;
                        value: _61.MsgDepositValidatorRewardsPool;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _61.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _61.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _61.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _61.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _61.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _61.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _61.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _61.MsgFundCommunityPool;
                    };
                    updateParams(value: _61.MsgUpdateParams): {
                        typeUrl: string;
                        value: _61.MsgUpdateParams;
                    };
                    communityPoolSpend(value: _61.MsgCommunityPoolSpend): {
                        typeUrl: string;
                        value: _61.MsgCommunityPoolSpend;
                    };
                    depositValidatorRewardsPool(value: _61.MsgDepositValidatorRewardsPool): {
                        typeUrl: string;
                        value: _61.MsgDepositValidatorRewardsPool;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: (message: _61.MsgSetWithdrawAddress) => _61.MsgSetWithdrawAddressAmino;
                    fromAmino: (object: _61.MsgSetWithdrawAddressAmino) => _61.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: (message: _61.MsgWithdrawDelegatorReward) => _61.MsgWithdrawDelegatorRewardAmino;
                    fromAmino: (object: _61.MsgWithdrawDelegatorRewardAmino) => _61.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: (message: _61.MsgWithdrawValidatorCommission) => _61.MsgWithdrawValidatorCommissionAmino;
                    fromAmino: (object: _61.MsgWithdrawValidatorCommissionAmino) => _61.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: (message: _61.MsgFundCommunityPool) => _61.MsgFundCommunityPoolAmino;
                    fromAmino: (object: _61.MsgFundCommunityPoolAmino) => _61.MsgFundCommunityPool;
                };
                "/cosmos.distribution.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _61.MsgUpdateParams) => _61.MsgUpdateParamsAmino;
                    fromAmino: (object: _61.MsgUpdateParamsAmino) => _61.MsgUpdateParams;
                };
                "/cosmos.distribution.v1beta1.MsgCommunityPoolSpend": {
                    aminoType: string;
                    toAmino: (message: _61.MsgCommunityPoolSpend) => _61.MsgCommunityPoolSpendAmino;
                    fromAmino: (object: _61.MsgCommunityPoolSpendAmino) => _61.MsgCommunityPoolSpend;
                };
                "/cosmos.distribution.v1beta1.MsgDepositValidatorRewardsPool": {
                    aminoType: string;
                    toAmino: (message: _61.MsgDepositValidatorRewardsPool) => _61.MsgDepositValidatorRewardsPoolAmino;
                    fromAmino: (object: _61.MsgDepositValidatorRewardsPoolAmino) => _61.MsgDepositValidatorRewardsPool;
                };
            };
            protobufPackage: "cosmos.distribution.v1beta1";
            MsgSetWithdrawAddress: {
                typeUrl: string;
                encode(message: _61.MsgSetWithdrawAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _61.MsgSetWithdrawAddress;
                fromJSON(object: any): _61.MsgSetWithdrawAddress;
                toJSON(message: _61.MsgSetWithdrawAddress): unknown;
                fromPartial(object: Partial<_61.MsgSetWithdrawAddress>): _61.MsgSetWithdrawAddress;
                fromSDK(object: _61.MsgSetWithdrawAddressSDKType): _61.MsgSetWithdrawAddress;
                toSDK(message: _61.MsgSetWithdrawAddress): _61.MsgSetWithdrawAddressSDKType;
                fromAmino(object: _61.MsgSetWithdrawAddressAmino): _61.MsgSetWithdrawAddress;
                toAmino(message: _61.MsgSetWithdrawAddress): _61.MsgSetWithdrawAddressAmino;
                fromAminoMsg(object: _61.MsgSetWithdrawAddressAminoMsg): _61.MsgSetWithdrawAddress;
                toAminoMsg(message: _61.MsgSetWithdrawAddress): _61.MsgSetWithdrawAddressAminoMsg;
                fromProtoMsg(message: _61.MsgSetWithdrawAddressProtoMsg): _61.MsgSetWithdrawAddress;
                toProto(message: _61.MsgSetWithdrawAddress): Uint8Array;
                toProtoMsg(message: _61.MsgSetWithdrawAddress): _61.MsgSetWithdrawAddressProtoMsg;
            };
            MsgSetWithdrawAddressResponse: {
                typeUrl: string;
                encode(_: _61.MsgSetWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _61.MsgSetWithdrawAddressResponse;
                fromJSON(_: any): _61.MsgSetWithdrawAddressResponse;
                toJSON(_: _61.MsgSetWithdrawAddressResponse): unknown;
                fromPartial(_: Partial<_61.MsgSetWithdrawAddressResponse>): _61.MsgSetWithdrawAddressResponse;
                fromSDK(_: _61.MsgSetWithdrawAddressResponseSDKType): _61.MsgSetWithdrawAddressResponse;
                toSDK(_: _61.MsgSetWithdrawAddressResponse): _61.MsgSetWithdrawAddressResponseSDKType;
                fromAmino(_: _61.MsgSetWithdrawAddressResponseAmino): _61.MsgSetWithdrawAddressResponse;
                toAmino(_: _61.MsgSetWithdrawAddressResponse): _61.MsgSetWithdrawAddressResponseAmino;
                fromAminoMsg(object: _61.MsgSetWithdrawAddressResponseAminoMsg): _61.MsgSetWithdrawAddressResponse;
                toAminoMsg(message: _61.MsgSetWithdrawAddressResponse): _61.MsgSetWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _61.MsgSetWithdrawAddressResponseProtoMsg): _61.MsgSetWithdrawAddressResponse;
                toProto(message: _61.MsgSetWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _61.MsgSetWithdrawAddressResponse): _61.MsgSetWithdrawAddressResponseProtoMsg;
            };
            MsgWithdrawDelegatorReward: {
                typeUrl: string;
                encode(message: _61.MsgWithdrawDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _61.MsgWithdrawDelegatorReward;
                fromJSON(object: any): _61.MsgWithdrawDelegatorReward;
                toJSON(message: _61.MsgWithdrawDelegatorReward): unknown;
                fromPartial(object: Partial<_61.MsgWithdrawDelegatorReward>): _61.MsgWithdrawDelegatorReward;
                fromSDK(object: _61.MsgWithdrawDelegatorRewardSDKType): _61.MsgWithdrawDelegatorReward;
                toSDK(message: _61.MsgWithdrawDelegatorReward): _61.MsgWithdrawDelegatorRewardSDKType;
                fromAmino(object: _61.MsgWithdrawDelegatorRewardAmino): _61.MsgWithdrawDelegatorReward;
                toAmino(message: _61.MsgWithdrawDelegatorReward): _61.MsgWithdrawDelegatorRewardAmino;
                fromAminoMsg(object: _61.MsgWithdrawDelegatorRewardAminoMsg): _61.MsgWithdrawDelegatorReward;
                toAminoMsg(message: _61.MsgWithdrawDelegatorReward): _61.MsgWithdrawDelegatorRewardAminoMsg;
                fromProtoMsg(message: _61.MsgWithdrawDelegatorRewardProtoMsg): _61.MsgWithdrawDelegatorReward;
                toProto(message: _61.MsgWithdrawDelegatorReward): Uint8Array;
                toProtoMsg(message: _61.MsgWithdrawDelegatorReward): _61.MsgWithdrawDelegatorRewardProtoMsg;
            };
            MsgWithdrawDelegatorRewardResponse: {
                typeUrl: string;
                encode(message: _61.MsgWithdrawDelegatorRewardResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _61.MsgWithdrawDelegatorRewardResponse;
                fromJSON(object: any): _61.MsgWithdrawDelegatorRewardResponse;
                toJSON(message: _61.MsgWithdrawDelegatorRewardResponse): unknown;
                fromPartial(object: Partial<_61.MsgWithdrawDelegatorRewardResponse>): _61.MsgWithdrawDelegatorRewardResponse;
                fromSDK(object: _61.MsgWithdrawDelegatorRewardResponseSDKType): _61.MsgWithdrawDelegatorRewardResponse;
                toSDK(message: _61.MsgWithdrawDelegatorRewardResponse): _61.MsgWithdrawDelegatorRewardResponseSDKType;
                fromAmino(object: _61.MsgWithdrawDelegatorRewardResponseAmino): _61.MsgWithdrawDelegatorRewardResponse;
                toAmino(message: _61.MsgWithdrawDelegatorRewardResponse): _61.MsgWithdrawDelegatorRewardResponseAmino;
                fromAminoMsg(object: _61.MsgWithdrawDelegatorRewardResponseAminoMsg): _61.MsgWithdrawDelegatorRewardResponse;
                toAminoMsg(message: _61.MsgWithdrawDelegatorRewardResponse): _61.MsgWithdrawDelegatorRewardResponseAminoMsg;
                fromProtoMsg(message: _61.MsgWithdrawDelegatorRewardResponseProtoMsg): _61.MsgWithdrawDelegatorRewardResponse;
                toProto(message: _61.MsgWithdrawDelegatorRewardResponse): Uint8Array;
                toProtoMsg(message: _61.MsgWithdrawDelegatorRewardResponse): _61.MsgWithdrawDelegatorRewardResponseProtoMsg;
            };
            MsgWithdrawValidatorCommission: {
                typeUrl: string;
                encode(message: _61.MsgWithdrawValidatorCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _61.MsgWithdrawValidatorCommission;
                fromJSON(object: any): _61.MsgWithdrawValidatorCommission;
                toJSON(message: _61.MsgWithdrawValidatorCommission): unknown;
                fromPartial(object: Partial<_61.MsgWithdrawValidatorCommission>): _61.MsgWithdrawValidatorCommission;
                fromSDK(object: _61.MsgWithdrawValidatorCommissionSDKType): _61.MsgWithdrawValidatorCommission;
                toSDK(message: _61.MsgWithdrawValidatorCommission): _61.MsgWithdrawValidatorCommissionSDKType;
                fromAmino(object: _61.MsgWithdrawValidatorCommissionAmino): _61.MsgWithdrawValidatorCommission;
                toAmino(message: _61.MsgWithdrawValidatorCommission): _61.MsgWithdrawValidatorCommissionAmino;
                fromAminoMsg(object: _61.MsgWithdrawValidatorCommissionAminoMsg): _61.MsgWithdrawValidatorCommission;
                toAminoMsg(message: _61.MsgWithdrawValidatorCommission): _61.MsgWithdrawValidatorCommissionAminoMsg;
                fromProtoMsg(message: _61.MsgWithdrawValidatorCommissionProtoMsg): _61.MsgWithdrawValidatorCommission;
                toProto(message: _61.MsgWithdrawValidatorCommission): Uint8Array;
                toProtoMsg(message: _61.MsgWithdrawValidatorCommission): _61.MsgWithdrawValidatorCommissionProtoMsg;
            };
            MsgWithdrawValidatorCommissionResponse: {
                typeUrl: string;
                encode(message: _61.MsgWithdrawValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _61.MsgWithdrawValidatorCommissionResponse;
                fromJSON(object: any): _61.MsgWithdrawValidatorCommissionResponse;
                toJSON(message: _61.MsgWithdrawValidatorCommissionResponse): unknown;
                fromPartial(object: Partial<_61.MsgWithdrawValidatorCommissionResponse>): _61.MsgWithdrawValidatorCommissionResponse;
                fromSDK(object: _61.MsgWithdrawValidatorCommissionResponseSDKType): _61.MsgWithdrawValidatorCommissionResponse;
                toSDK(message: _61.MsgWithdrawValidatorCommissionResponse): _61.MsgWithdrawValidatorCommissionResponseSDKType;
                fromAmino(object: _61.MsgWithdrawValidatorCommissionResponseAmino): _61.MsgWithdrawValidatorCommissionResponse;
                toAmino(message: _61.MsgWithdrawValidatorCommissionResponse): _61.MsgWithdrawValidatorCommissionResponseAmino;
                fromAminoMsg(object: _61.MsgWithdrawValidatorCommissionResponseAminoMsg): _61.MsgWithdrawValidatorCommissionResponse;
                toAminoMsg(message: _61.MsgWithdrawValidatorCommissionResponse): _61.MsgWithdrawValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _61.MsgWithdrawValidatorCommissionResponseProtoMsg): _61.MsgWithdrawValidatorCommissionResponse;
                toProto(message: _61.MsgWithdrawValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _61.MsgWithdrawValidatorCommissionResponse): _61.MsgWithdrawValidatorCommissionResponseProtoMsg;
            };
            MsgFundCommunityPool: {
                typeUrl: string;
                encode(message: _61.MsgFundCommunityPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _61.MsgFundCommunityPool;
                fromJSON(object: any): _61.MsgFundCommunityPool;
                toJSON(message: _61.MsgFundCommunityPool): unknown;
                fromPartial(object: Partial<_61.MsgFundCommunityPool>): _61.MsgFundCommunityPool;
                fromSDK(object: _61.MsgFundCommunityPoolSDKType): _61.MsgFundCommunityPool;
                toSDK(message: _61.MsgFundCommunityPool): _61.MsgFundCommunityPoolSDKType;
                fromAmino(object: _61.MsgFundCommunityPoolAmino): _61.MsgFundCommunityPool;
                toAmino(message: _61.MsgFundCommunityPool): _61.MsgFundCommunityPoolAmino;
                fromAminoMsg(object: _61.MsgFundCommunityPoolAminoMsg): _61.MsgFundCommunityPool;
                toAminoMsg(message: _61.MsgFundCommunityPool): _61.MsgFundCommunityPoolAminoMsg;
                fromProtoMsg(message: _61.MsgFundCommunityPoolProtoMsg): _61.MsgFundCommunityPool;
                toProto(message: _61.MsgFundCommunityPool): Uint8Array;
                toProtoMsg(message: _61.MsgFundCommunityPool): _61.MsgFundCommunityPoolProtoMsg;
            };
            MsgFundCommunityPoolResponse: {
                typeUrl: string;
                encode(_: _61.MsgFundCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _61.MsgFundCommunityPoolResponse;
                fromJSON(_: any): _61.MsgFundCommunityPoolResponse;
                toJSON(_: _61.MsgFundCommunityPoolResponse): unknown;
                fromPartial(_: Partial<_61.MsgFundCommunityPoolResponse>): _61.MsgFundCommunityPoolResponse;
                fromSDK(_: _61.MsgFundCommunityPoolResponseSDKType): _61.MsgFundCommunityPoolResponse;
                toSDK(_: _61.MsgFundCommunityPoolResponse): _61.MsgFundCommunityPoolResponseSDKType;
                fromAmino(_: _61.MsgFundCommunityPoolResponseAmino): _61.MsgFundCommunityPoolResponse;
                toAmino(_: _61.MsgFundCommunityPoolResponse): _61.MsgFundCommunityPoolResponseAmino;
                fromAminoMsg(object: _61.MsgFundCommunityPoolResponseAminoMsg): _61.MsgFundCommunityPoolResponse;
                toAminoMsg(message: _61.MsgFundCommunityPoolResponse): _61.MsgFundCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _61.MsgFundCommunityPoolResponseProtoMsg): _61.MsgFundCommunityPoolResponse;
                toProto(message: _61.MsgFundCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _61.MsgFundCommunityPoolResponse): _61.MsgFundCommunityPoolResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _61.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _61.MsgUpdateParams;
                fromJSON(object: any): _61.MsgUpdateParams;
                toJSON(message: _61.MsgUpdateParams): unknown;
                fromPartial(object: Partial<_61.MsgUpdateParams>): _61.MsgUpdateParams;
                fromSDK(object: _61.MsgUpdateParamsSDKType): _61.MsgUpdateParams;
                toSDK(message: _61.MsgUpdateParams): _61.MsgUpdateParamsSDKType;
                fromAmino(object: _61.MsgUpdateParamsAmino): _61.MsgUpdateParams;
                toAmino(message: _61.MsgUpdateParams): _61.MsgUpdateParamsAmino;
                fromAminoMsg(object: _61.MsgUpdateParamsAminoMsg): _61.MsgUpdateParams;
                toAminoMsg(message: _61.MsgUpdateParams): _61.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _61.MsgUpdateParamsProtoMsg): _61.MsgUpdateParams;
                toProto(message: _61.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _61.MsgUpdateParams): _61.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _61.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _61.MsgUpdateParamsResponse;
                fromJSON(_: any): _61.MsgUpdateParamsResponse;
                toJSON(_: _61.MsgUpdateParamsResponse): unknown;
                fromPartial(_: Partial<_61.MsgUpdateParamsResponse>): _61.MsgUpdateParamsResponse;
                fromSDK(_: _61.MsgUpdateParamsResponseSDKType): _61.MsgUpdateParamsResponse;
                toSDK(_: _61.MsgUpdateParamsResponse): _61.MsgUpdateParamsResponseSDKType;
                fromAmino(_: _61.MsgUpdateParamsResponseAmino): _61.MsgUpdateParamsResponse;
                toAmino(_: _61.MsgUpdateParamsResponse): _61.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _61.MsgUpdateParamsResponseAminoMsg): _61.MsgUpdateParamsResponse;
                toAminoMsg(message: _61.MsgUpdateParamsResponse): _61.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _61.MsgUpdateParamsResponseProtoMsg): _61.MsgUpdateParamsResponse;
                toProto(message: _61.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _61.MsgUpdateParamsResponse): _61.MsgUpdateParamsResponseProtoMsg;
            };
            MsgCommunityPoolSpend: {
                typeUrl: string;
                encode(message: _61.MsgCommunityPoolSpend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _61.MsgCommunityPoolSpend;
                fromJSON(object: any): _61.MsgCommunityPoolSpend;
                toJSON(message: _61.MsgCommunityPoolSpend): unknown;
                fromPartial(object: Partial<_61.MsgCommunityPoolSpend>): _61.MsgCommunityPoolSpend;
                fromSDK(object: _61.MsgCommunityPoolSpendSDKType): _61.MsgCommunityPoolSpend;
                toSDK(message: _61.MsgCommunityPoolSpend): _61.MsgCommunityPoolSpendSDKType;
                fromAmino(object: _61.MsgCommunityPoolSpendAmino): _61.MsgCommunityPoolSpend;
                toAmino(message: _61.MsgCommunityPoolSpend): _61.MsgCommunityPoolSpendAmino;
                fromAminoMsg(object: _61.MsgCommunityPoolSpendAminoMsg): _61.MsgCommunityPoolSpend;
                toAminoMsg(message: _61.MsgCommunityPoolSpend): _61.MsgCommunityPoolSpendAminoMsg;
                fromProtoMsg(message: _61.MsgCommunityPoolSpendProtoMsg): _61.MsgCommunityPoolSpend;
                toProto(message: _61.MsgCommunityPoolSpend): Uint8Array;
                toProtoMsg(message: _61.MsgCommunityPoolSpend): _61.MsgCommunityPoolSpendProtoMsg;
            };
            MsgCommunityPoolSpendResponse: {
                typeUrl: string;
                encode(_: _61.MsgCommunityPoolSpendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _61.MsgCommunityPoolSpendResponse;
                fromJSON(_: any): _61.MsgCommunityPoolSpendResponse;
                toJSON(_: _61.MsgCommunityPoolSpendResponse): unknown;
                fromPartial(_: Partial<_61.MsgCommunityPoolSpendResponse>): _61.MsgCommunityPoolSpendResponse;
                fromSDK(_: _61.MsgCommunityPoolSpendResponseSDKType): _61.MsgCommunityPoolSpendResponse;
                toSDK(_: _61.MsgCommunityPoolSpendResponse): _61.MsgCommunityPoolSpendResponseSDKType;
                fromAmino(_: _61.MsgCommunityPoolSpendResponseAmino): _61.MsgCommunityPoolSpendResponse;
                toAmino(_: _61.MsgCommunityPoolSpendResponse): _61.MsgCommunityPoolSpendResponseAmino;
                fromAminoMsg(object: _61.MsgCommunityPoolSpendResponseAminoMsg): _61.MsgCommunityPoolSpendResponse;
                toAminoMsg(message: _61.MsgCommunityPoolSpendResponse): _61.MsgCommunityPoolSpendResponseAminoMsg;
                fromProtoMsg(message: _61.MsgCommunityPoolSpendResponseProtoMsg): _61.MsgCommunityPoolSpendResponse;
                toProto(message: _61.MsgCommunityPoolSpendResponse): Uint8Array;
                toProtoMsg(message: _61.MsgCommunityPoolSpendResponse): _61.MsgCommunityPoolSpendResponseProtoMsg;
            };
            MsgDepositValidatorRewardsPool: {
                typeUrl: string;
                encode(message: _61.MsgDepositValidatorRewardsPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _61.MsgDepositValidatorRewardsPool;
                fromJSON(object: any): _61.MsgDepositValidatorRewardsPool;
                toJSON(message: _61.MsgDepositValidatorRewardsPool): unknown;
                fromPartial(object: Partial<_61.MsgDepositValidatorRewardsPool>): _61.MsgDepositValidatorRewardsPool;
                fromSDK(object: _61.MsgDepositValidatorRewardsPoolSDKType): _61.MsgDepositValidatorRewardsPool;
                toSDK(message: _61.MsgDepositValidatorRewardsPool): _61.MsgDepositValidatorRewardsPoolSDKType;
                fromAmino(object: _61.MsgDepositValidatorRewardsPoolAmino): _61.MsgDepositValidatorRewardsPool;
                toAmino(message: _61.MsgDepositValidatorRewardsPool): _61.MsgDepositValidatorRewardsPoolAmino;
                fromAminoMsg(object: _61.MsgDepositValidatorRewardsPoolAminoMsg): _61.MsgDepositValidatorRewardsPool;
                toAminoMsg(message: _61.MsgDepositValidatorRewardsPool): _61.MsgDepositValidatorRewardsPoolAminoMsg;
                fromProtoMsg(message: _61.MsgDepositValidatorRewardsPoolProtoMsg): _61.MsgDepositValidatorRewardsPool;
                toProto(message: _61.MsgDepositValidatorRewardsPool): Uint8Array;
                toProtoMsg(message: _61.MsgDepositValidatorRewardsPool): _61.MsgDepositValidatorRewardsPoolProtoMsg;
            };
            MsgDepositValidatorRewardsPoolResponse: {
                typeUrl: string;
                encode(_: _61.MsgDepositValidatorRewardsPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _61.MsgDepositValidatorRewardsPoolResponse;
                fromJSON(_: any): _61.MsgDepositValidatorRewardsPoolResponse;
                toJSON(_: _61.MsgDepositValidatorRewardsPoolResponse): unknown;
                fromPartial(_: Partial<_61.MsgDepositValidatorRewardsPoolResponse>): _61.MsgDepositValidatorRewardsPoolResponse;
                fromSDK(_: _61.MsgDepositValidatorRewardsPoolResponseSDKType): _61.MsgDepositValidatorRewardsPoolResponse;
                toSDK(_: _61.MsgDepositValidatorRewardsPoolResponse): _61.MsgDepositValidatorRewardsPoolResponseSDKType;
                fromAmino(_: _61.MsgDepositValidatorRewardsPoolResponseAmino): _61.MsgDepositValidatorRewardsPoolResponse;
                toAmino(_: _61.MsgDepositValidatorRewardsPoolResponse): _61.MsgDepositValidatorRewardsPoolResponseAmino;
                fromAminoMsg(object: _61.MsgDepositValidatorRewardsPoolResponseAminoMsg): _61.MsgDepositValidatorRewardsPoolResponse;
                toAminoMsg(message: _61.MsgDepositValidatorRewardsPoolResponse): _61.MsgDepositValidatorRewardsPoolResponseAminoMsg;
                fromProtoMsg(message: _61.MsgDepositValidatorRewardsPoolResponseProtoMsg): _61.MsgDepositValidatorRewardsPoolResponse;
                toProto(message: _61.MsgDepositValidatorRewardsPoolResponse): Uint8Array;
                toProtoMsg(message: _61.MsgDepositValidatorRewardsPoolResponse): _61.MsgDepositValidatorRewardsPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _60.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _60.QueryParamsRequest;
                fromJSON(_: any): _60.QueryParamsRequest;
                toJSON(_: _60.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_60.QueryParamsRequest>): _60.QueryParamsRequest;
                fromSDK(_: _60.QueryParamsRequestSDKType): _60.QueryParamsRequest;
                toSDK(_: _60.QueryParamsRequest): _60.QueryParamsRequestSDKType;
                fromAmino(_: _60.QueryParamsRequestAmino): _60.QueryParamsRequest;
                toAmino(_: _60.QueryParamsRequest): _60.QueryParamsRequestAmino;
                fromAminoMsg(object: _60.QueryParamsRequestAminoMsg): _60.QueryParamsRequest;
                toAminoMsg(message: _60.QueryParamsRequest): _60.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _60.QueryParamsRequestProtoMsg): _60.QueryParamsRequest;
                toProto(message: _60.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _60.QueryParamsRequest): _60.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _60.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _60.QueryParamsResponse;
                fromJSON(object: any): _60.QueryParamsResponse;
                toJSON(message: _60.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_60.QueryParamsResponse>): _60.QueryParamsResponse;
                fromSDK(object: _60.QueryParamsResponseSDKType): _60.QueryParamsResponse;
                toSDK(message: _60.QueryParamsResponse): _60.QueryParamsResponseSDKType;
                fromAmino(object: _60.QueryParamsResponseAmino): _60.QueryParamsResponse;
                toAmino(message: _60.QueryParamsResponse): _60.QueryParamsResponseAmino;
                fromAminoMsg(object: _60.QueryParamsResponseAminoMsg): _60.QueryParamsResponse;
                toAminoMsg(message: _60.QueryParamsResponse): _60.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _60.QueryParamsResponseProtoMsg): _60.QueryParamsResponse;
                toProto(message: _60.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _60.QueryParamsResponse): _60.QueryParamsResponseProtoMsg;
            };
            QueryValidatorDistributionInfoRequest: {
                typeUrl: string;
                encode(message: _60.QueryValidatorDistributionInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _60.QueryValidatorDistributionInfoRequest;
                fromJSON(object: any): _60.QueryValidatorDistributionInfoRequest;
                toJSON(message: _60.QueryValidatorDistributionInfoRequest): unknown;
                fromPartial(object: Partial<_60.QueryValidatorDistributionInfoRequest>): _60.QueryValidatorDistributionInfoRequest;
                fromSDK(object: _60.QueryValidatorDistributionInfoRequestSDKType): _60.QueryValidatorDistributionInfoRequest;
                toSDK(message: _60.QueryValidatorDistributionInfoRequest): _60.QueryValidatorDistributionInfoRequestSDKType;
                fromAmino(object: _60.QueryValidatorDistributionInfoRequestAmino): _60.QueryValidatorDistributionInfoRequest;
                toAmino(message: _60.QueryValidatorDistributionInfoRequest): _60.QueryValidatorDistributionInfoRequestAmino;
                fromAminoMsg(object: _60.QueryValidatorDistributionInfoRequestAminoMsg): _60.QueryValidatorDistributionInfoRequest;
                toAminoMsg(message: _60.QueryValidatorDistributionInfoRequest): _60.QueryValidatorDistributionInfoRequestAminoMsg;
                fromProtoMsg(message: _60.QueryValidatorDistributionInfoRequestProtoMsg): _60.QueryValidatorDistributionInfoRequest;
                toProto(message: _60.QueryValidatorDistributionInfoRequest): Uint8Array;
                toProtoMsg(message: _60.QueryValidatorDistributionInfoRequest): _60.QueryValidatorDistributionInfoRequestProtoMsg;
            };
            QueryValidatorDistributionInfoResponse: {
                typeUrl: string;
                encode(message: _60.QueryValidatorDistributionInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _60.QueryValidatorDistributionInfoResponse;
                fromJSON(object: any): _60.QueryValidatorDistributionInfoResponse;
                toJSON(message: _60.QueryValidatorDistributionInfoResponse): unknown;
                fromPartial(object: Partial<_60.QueryValidatorDistributionInfoResponse>): _60.QueryValidatorDistributionInfoResponse;
                fromSDK(object: _60.QueryValidatorDistributionInfoResponseSDKType): _60.QueryValidatorDistributionInfoResponse;
                toSDK(message: _60.QueryValidatorDistributionInfoResponse): _60.QueryValidatorDistributionInfoResponseSDKType;
                fromAmino(object: _60.QueryValidatorDistributionInfoResponseAmino): _60.QueryValidatorDistributionInfoResponse;
                toAmino(message: _60.QueryValidatorDistributionInfoResponse): _60.QueryValidatorDistributionInfoResponseAmino;
                fromAminoMsg(object: _60.QueryValidatorDistributionInfoResponseAminoMsg): _60.QueryValidatorDistributionInfoResponse;
                toAminoMsg(message: _60.QueryValidatorDistributionInfoResponse): _60.QueryValidatorDistributionInfoResponseAminoMsg;
                fromProtoMsg(message: _60.QueryValidatorDistributionInfoResponseProtoMsg): _60.QueryValidatorDistributionInfoResponse;
                toProto(message: _60.QueryValidatorDistributionInfoResponse): Uint8Array;
                toProtoMsg(message: _60.QueryValidatorDistributionInfoResponse): _60.QueryValidatorDistributionInfoResponseProtoMsg;
            };
            QueryValidatorOutstandingRewardsRequest: {
                typeUrl: string;
                encode(message: _60.QueryValidatorOutstandingRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _60.QueryValidatorOutstandingRewardsRequest;
                fromJSON(object: any): _60.QueryValidatorOutstandingRewardsRequest;
                toJSON(message: _60.QueryValidatorOutstandingRewardsRequest): unknown;
                fromPartial(object: Partial<_60.QueryValidatorOutstandingRewardsRequest>): _60.QueryValidatorOutstandingRewardsRequest;
                fromSDK(object: _60.QueryValidatorOutstandingRewardsRequestSDKType): _60.QueryValidatorOutstandingRewardsRequest;
                toSDK(message: _60.QueryValidatorOutstandingRewardsRequest): _60.QueryValidatorOutstandingRewardsRequestSDKType;
                fromAmino(object: _60.QueryValidatorOutstandingRewardsRequestAmino): _60.QueryValidatorOutstandingRewardsRequest;
                toAmino(message: _60.QueryValidatorOutstandingRewardsRequest): _60.QueryValidatorOutstandingRewardsRequestAmino;
                fromAminoMsg(object: _60.QueryValidatorOutstandingRewardsRequestAminoMsg): _60.QueryValidatorOutstandingRewardsRequest;
                toAminoMsg(message: _60.QueryValidatorOutstandingRewardsRequest): _60.QueryValidatorOutstandingRewardsRequestAminoMsg;
                fromProtoMsg(message: _60.QueryValidatorOutstandingRewardsRequestProtoMsg): _60.QueryValidatorOutstandingRewardsRequest;
                toProto(message: _60.QueryValidatorOutstandingRewardsRequest): Uint8Array;
                toProtoMsg(message: _60.QueryValidatorOutstandingRewardsRequest): _60.QueryValidatorOutstandingRewardsRequestProtoMsg;
            };
            QueryValidatorOutstandingRewardsResponse: {
                typeUrl: string;
                encode(message: _60.QueryValidatorOutstandingRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _60.QueryValidatorOutstandingRewardsResponse;
                fromJSON(object: any): _60.QueryValidatorOutstandingRewardsResponse;
                toJSON(message: _60.QueryValidatorOutstandingRewardsResponse): unknown;
                fromPartial(object: Partial<_60.QueryValidatorOutstandingRewardsResponse>): _60.QueryValidatorOutstandingRewardsResponse;
                fromSDK(object: _60.QueryValidatorOutstandingRewardsResponseSDKType): _60.QueryValidatorOutstandingRewardsResponse;
                toSDK(message: _60.QueryValidatorOutstandingRewardsResponse): _60.QueryValidatorOutstandingRewardsResponseSDKType;
                fromAmino(object: _60.QueryValidatorOutstandingRewardsResponseAmino): _60.QueryValidatorOutstandingRewardsResponse;
                toAmino(message: _60.QueryValidatorOutstandingRewardsResponse): _60.QueryValidatorOutstandingRewardsResponseAmino;
                fromAminoMsg(object: _60.QueryValidatorOutstandingRewardsResponseAminoMsg): _60.QueryValidatorOutstandingRewardsResponse;
                toAminoMsg(message: _60.QueryValidatorOutstandingRewardsResponse): _60.QueryValidatorOutstandingRewardsResponseAminoMsg;
                fromProtoMsg(message: _60.QueryValidatorOutstandingRewardsResponseProtoMsg): _60.QueryValidatorOutstandingRewardsResponse;
                toProto(message: _60.QueryValidatorOutstandingRewardsResponse): Uint8Array;
                toProtoMsg(message: _60.QueryValidatorOutstandingRewardsResponse): _60.QueryValidatorOutstandingRewardsResponseProtoMsg;
            };
            QueryValidatorCommissionRequest: {
                typeUrl: string;
                encode(message: _60.QueryValidatorCommissionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _60.QueryValidatorCommissionRequest;
                fromJSON(object: any): _60.QueryValidatorCommissionRequest;
                toJSON(message: _60.QueryValidatorCommissionRequest): unknown;
                fromPartial(object: Partial<_60.QueryValidatorCommissionRequest>): _60.QueryValidatorCommissionRequest;
                fromSDK(object: _60.QueryValidatorCommissionRequestSDKType): _60.QueryValidatorCommissionRequest;
                toSDK(message: _60.QueryValidatorCommissionRequest): _60.QueryValidatorCommissionRequestSDKType;
                fromAmino(object: _60.QueryValidatorCommissionRequestAmino): _60.QueryValidatorCommissionRequest;
                toAmino(message: _60.QueryValidatorCommissionRequest): _60.QueryValidatorCommissionRequestAmino;
                fromAminoMsg(object: _60.QueryValidatorCommissionRequestAminoMsg): _60.QueryValidatorCommissionRequest;
                toAminoMsg(message: _60.QueryValidatorCommissionRequest): _60.QueryValidatorCommissionRequestAminoMsg;
                fromProtoMsg(message: _60.QueryValidatorCommissionRequestProtoMsg): _60.QueryValidatorCommissionRequest;
                toProto(message: _60.QueryValidatorCommissionRequest): Uint8Array;
                toProtoMsg(message: _60.QueryValidatorCommissionRequest): _60.QueryValidatorCommissionRequestProtoMsg;
            };
            QueryValidatorCommissionResponse: {
                typeUrl: string;
                encode(message: _60.QueryValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _60.QueryValidatorCommissionResponse;
                fromJSON(object: any): _60.QueryValidatorCommissionResponse;
                toJSON(message: _60.QueryValidatorCommissionResponse): unknown;
                fromPartial(object: Partial<_60.QueryValidatorCommissionResponse>): _60.QueryValidatorCommissionResponse;
                fromSDK(object: _60.QueryValidatorCommissionResponseSDKType): _60.QueryValidatorCommissionResponse;
                toSDK(message: _60.QueryValidatorCommissionResponse): _60.QueryValidatorCommissionResponseSDKType;
                fromAmino(object: _60.QueryValidatorCommissionResponseAmino): _60.QueryValidatorCommissionResponse;
                toAmino(message: _60.QueryValidatorCommissionResponse): _60.QueryValidatorCommissionResponseAmino;
                fromAminoMsg(object: _60.QueryValidatorCommissionResponseAminoMsg): _60.QueryValidatorCommissionResponse;
                toAminoMsg(message: _60.QueryValidatorCommissionResponse): _60.QueryValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _60.QueryValidatorCommissionResponseProtoMsg): _60.QueryValidatorCommissionResponse;
                toProto(message: _60.QueryValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _60.QueryValidatorCommissionResponse): _60.QueryValidatorCommissionResponseProtoMsg;
            };
            QueryValidatorSlashesRequest: {
                typeUrl: string;
                encode(message: _60.QueryValidatorSlashesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _60.QueryValidatorSlashesRequest;
                fromJSON(object: any): _60.QueryValidatorSlashesRequest;
                toJSON(message: _60.QueryValidatorSlashesRequest): unknown;
                fromPartial(object: Partial<_60.QueryValidatorSlashesRequest>): _60.QueryValidatorSlashesRequest;
                fromSDK(object: _60.QueryValidatorSlashesRequestSDKType): _60.QueryValidatorSlashesRequest;
                toSDK(message: _60.QueryValidatorSlashesRequest): _60.QueryValidatorSlashesRequestSDKType;
                fromAmino(object: _60.QueryValidatorSlashesRequestAmino): _60.QueryValidatorSlashesRequest;
                toAmino(message: _60.QueryValidatorSlashesRequest): _60.QueryValidatorSlashesRequestAmino;
                fromAminoMsg(object: _60.QueryValidatorSlashesRequestAminoMsg): _60.QueryValidatorSlashesRequest;
                toAminoMsg(message: _60.QueryValidatorSlashesRequest): _60.QueryValidatorSlashesRequestAminoMsg;
                fromProtoMsg(message: _60.QueryValidatorSlashesRequestProtoMsg): _60.QueryValidatorSlashesRequest;
                toProto(message: _60.QueryValidatorSlashesRequest): Uint8Array;
                toProtoMsg(message: _60.QueryValidatorSlashesRequest): _60.QueryValidatorSlashesRequestProtoMsg;
            };
            QueryValidatorSlashesResponse: {
                typeUrl: string;
                encode(message: _60.QueryValidatorSlashesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _60.QueryValidatorSlashesResponse;
                fromJSON(object: any): _60.QueryValidatorSlashesResponse;
                toJSON(message: _60.QueryValidatorSlashesResponse): unknown;
                fromPartial(object: Partial<_60.QueryValidatorSlashesResponse>): _60.QueryValidatorSlashesResponse;
                fromSDK(object: _60.QueryValidatorSlashesResponseSDKType): _60.QueryValidatorSlashesResponse;
                toSDK(message: _60.QueryValidatorSlashesResponse): _60.QueryValidatorSlashesResponseSDKType;
                fromAmino(object: _60.QueryValidatorSlashesResponseAmino): _60.QueryValidatorSlashesResponse;
                toAmino(message: _60.QueryValidatorSlashesResponse): _60.QueryValidatorSlashesResponseAmino;
                fromAminoMsg(object: _60.QueryValidatorSlashesResponseAminoMsg): _60.QueryValidatorSlashesResponse;
                toAminoMsg(message: _60.QueryValidatorSlashesResponse): _60.QueryValidatorSlashesResponseAminoMsg;
                fromProtoMsg(message: _60.QueryValidatorSlashesResponseProtoMsg): _60.QueryValidatorSlashesResponse;
                toProto(message: _60.QueryValidatorSlashesResponse): Uint8Array;
                toProtoMsg(message: _60.QueryValidatorSlashesResponse): _60.QueryValidatorSlashesResponseProtoMsg;
            };
            QueryDelegationRewardsRequest: {
                typeUrl: string;
                encode(message: _60.QueryDelegationRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _60.QueryDelegationRewardsRequest;
                fromJSON(object: any): _60.QueryDelegationRewardsRequest;
                toJSON(message: _60.QueryDelegationRewardsRequest): unknown;
                fromPartial(object: Partial<_60.QueryDelegationRewardsRequest>): _60.QueryDelegationRewardsRequest;
                fromSDK(object: _60.QueryDelegationRewardsRequestSDKType): _60.QueryDelegationRewardsRequest;
                toSDK(message: _60.QueryDelegationRewardsRequest): _60.QueryDelegationRewardsRequestSDKType;
                fromAmino(object: _60.QueryDelegationRewardsRequestAmino): _60.QueryDelegationRewardsRequest;
                toAmino(message: _60.QueryDelegationRewardsRequest): _60.QueryDelegationRewardsRequestAmino;
                fromAminoMsg(object: _60.QueryDelegationRewardsRequestAminoMsg): _60.QueryDelegationRewardsRequest;
                toAminoMsg(message: _60.QueryDelegationRewardsRequest): _60.QueryDelegationRewardsRequestAminoMsg;
                fromProtoMsg(message: _60.QueryDelegationRewardsRequestProtoMsg): _60.QueryDelegationRewardsRequest;
                toProto(message: _60.QueryDelegationRewardsRequest): Uint8Array;
                toProtoMsg(message: _60.QueryDelegationRewardsRequest): _60.QueryDelegationRewardsRequestProtoMsg;
            };
            QueryDelegationRewardsResponse: {
                typeUrl: string;
                encode(message: _60.QueryDelegationRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _60.QueryDelegationRewardsResponse;
                fromJSON(object: any): _60.QueryDelegationRewardsResponse;
                toJSON(message: _60.QueryDelegationRewardsResponse): unknown;
                fromPartial(object: Partial<_60.QueryDelegationRewardsResponse>): _60.QueryDelegationRewardsResponse;
                fromSDK(object: _60.QueryDelegationRewardsResponseSDKType): _60.QueryDelegationRewardsResponse;
                toSDK(message: _60.QueryDelegationRewardsResponse): _60.QueryDelegationRewardsResponseSDKType;
                fromAmino(object: _60.QueryDelegationRewardsResponseAmino): _60.QueryDelegationRewardsResponse;
                toAmino(message: _60.QueryDelegationRewardsResponse): _60.QueryDelegationRewardsResponseAmino;
                fromAminoMsg(object: _60.QueryDelegationRewardsResponseAminoMsg): _60.QueryDelegationRewardsResponse;
                toAminoMsg(message: _60.QueryDelegationRewardsResponse): _60.QueryDelegationRewardsResponseAminoMsg;
                fromProtoMsg(message: _60.QueryDelegationRewardsResponseProtoMsg): _60.QueryDelegationRewardsResponse;
                toProto(message: _60.QueryDelegationRewardsResponse): Uint8Array;
                toProtoMsg(message: _60.QueryDelegationRewardsResponse): _60.QueryDelegationRewardsResponseProtoMsg;
            };
            QueryDelegationTotalRewardsRequest: {
                typeUrl: string;
                encode(message: _60.QueryDelegationTotalRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _60.QueryDelegationTotalRewardsRequest;
                fromJSON(object: any): _60.QueryDelegationTotalRewardsRequest;
                toJSON(message: _60.QueryDelegationTotalRewardsRequest): unknown;
                fromPartial(object: Partial<_60.QueryDelegationTotalRewardsRequest>): _60.QueryDelegationTotalRewardsRequest;
                fromSDK(object: _60.QueryDelegationTotalRewardsRequestSDKType): _60.QueryDelegationTotalRewardsRequest;
                toSDK(message: _60.QueryDelegationTotalRewardsRequest): _60.QueryDelegationTotalRewardsRequestSDKType;
                fromAmino(object: _60.QueryDelegationTotalRewardsRequestAmino): _60.QueryDelegationTotalRewardsRequest;
                toAmino(message: _60.QueryDelegationTotalRewardsRequest): _60.QueryDelegationTotalRewardsRequestAmino;
                fromAminoMsg(object: _60.QueryDelegationTotalRewardsRequestAminoMsg): _60.QueryDelegationTotalRewardsRequest;
                toAminoMsg(message: _60.QueryDelegationTotalRewardsRequest): _60.QueryDelegationTotalRewardsRequestAminoMsg;
                fromProtoMsg(message: _60.QueryDelegationTotalRewardsRequestProtoMsg): _60.QueryDelegationTotalRewardsRequest;
                toProto(message: _60.QueryDelegationTotalRewardsRequest): Uint8Array;
                toProtoMsg(message: _60.QueryDelegationTotalRewardsRequest): _60.QueryDelegationTotalRewardsRequestProtoMsg;
            };
            QueryDelegationTotalRewardsResponse: {
                typeUrl: string;
                encode(message: _60.QueryDelegationTotalRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _60.QueryDelegationTotalRewardsResponse;
                fromJSON(object: any): _60.QueryDelegationTotalRewardsResponse;
                toJSON(message: _60.QueryDelegationTotalRewardsResponse): unknown;
                fromPartial(object: Partial<_60.QueryDelegationTotalRewardsResponse>): _60.QueryDelegationTotalRewardsResponse;
                fromSDK(object: _60.QueryDelegationTotalRewardsResponseSDKType): _60.QueryDelegationTotalRewardsResponse;
                toSDK(message: _60.QueryDelegationTotalRewardsResponse): _60.QueryDelegationTotalRewardsResponseSDKType;
                fromAmino(object: _60.QueryDelegationTotalRewardsResponseAmino): _60.QueryDelegationTotalRewardsResponse;
                toAmino(message: _60.QueryDelegationTotalRewardsResponse): _60.QueryDelegationTotalRewardsResponseAmino;
                fromAminoMsg(object: _60.QueryDelegationTotalRewardsResponseAminoMsg): _60.QueryDelegationTotalRewardsResponse;
                toAminoMsg(message: _60.QueryDelegationTotalRewardsResponse): _60.QueryDelegationTotalRewardsResponseAminoMsg;
                fromProtoMsg(message: _60.QueryDelegationTotalRewardsResponseProtoMsg): _60.QueryDelegationTotalRewardsResponse;
                toProto(message: _60.QueryDelegationTotalRewardsResponse): Uint8Array;
                toProtoMsg(message: _60.QueryDelegationTotalRewardsResponse): _60.QueryDelegationTotalRewardsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _60.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _60.QueryDelegatorValidatorsRequest;
                fromJSON(object: any): _60.QueryDelegatorValidatorsRequest;
                toJSON(message: _60.QueryDelegatorValidatorsRequest): unknown;
                fromPartial(object: Partial<_60.QueryDelegatorValidatorsRequest>): _60.QueryDelegatorValidatorsRequest;
                fromSDK(object: _60.QueryDelegatorValidatorsRequestSDKType): _60.QueryDelegatorValidatorsRequest;
                toSDK(message: _60.QueryDelegatorValidatorsRequest): _60.QueryDelegatorValidatorsRequestSDKType;
                fromAmino(object: _60.QueryDelegatorValidatorsRequestAmino): _60.QueryDelegatorValidatorsRequest;
                toAmino(message: _60.QueryDelegatorValidatorsRequest): _60.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _60.QueryDelegatorValidatorsRequestAminoMsg): _60.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _60.QueryDelegatorValidatorsRequest): _60.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _60.QueryDelegatorValidatorsRequestProtoMsg): _60.QueryDelegatorValidatorsRequest;
                toProto(message: _60.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _60.QueryDelegatorValidatorsRequest): _60.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _60.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _60.QueryDelegatorValidatorsResponse;
                fromJSON(object: any): _60.QueryDelegatorValidatorsResponse;
                toJSON(message: _60.QueryDelegatorValidatorsResponse): unknown;
                fromPartial(object: Partial<_60.QueryDelegatorValidatorsResponse>): _60.QueryDelegatorValidatorsResponse;
                fromSDK(object: _60.QueryDelegatorValidatorsResponseSDKType): _60.QueryDelegatorValidatorsResponse;
                toSDK(message: _60.QueryDelegatorValidatorsResponse): _60.QueryDelegatorValidatorsResponseSDKType;
                fromAmino(object: _60.QueryDelegatorValidatorsResponseAmino): _60.QueryDelegatorValidatorsResponse;
                toAmino(message: _60.QueryDelegatorValidatorsResponse): _60.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _60.QueryDelegatorValidatorsResponseAminoMsg): _60.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _60.QueryDelegatorValidatorsResponse): _60.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _60.QueryDelegatorValidatorsResponseProtoMsg): _60.QueryDelegatorValidatorsResponse;
                toProto(message: _60.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _60.QueryDelegatorValidatorsResponse): _60.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorWithdrawAddressRequest: {
                typeUrl: string;
                encode(message: _60.QueryDelegatorWithdrawAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _60.QueryDelegatorWithdrawAddressRequest;
                fromJSON(object: any): _60.QueryDelegatorWithdrawAddressRequest;
                toJSON(message: _60.QueryDelegatorWithdrawAddressRequest): unknown;
                fromPartial(object: Partial<_60.QueryDelegatorWithdrawAddressRequest>): _60.QueryDelegatorWithdrawAddressRequest;
                fromSDK(object: _60.QueryDelegatorWithdrawAddressRequestSDKType): _60.QueryDelegatorWithdrawAddressRequest;
                toSDK(message: _60.QueryDelegatorWithdrawAddressRequest): _60.QueryDelegatorWithdrawAddressRequestSDKType;
                fromAmino(object: _60.QueryDelegatorWithdrawAddressRequestAmino): _60.QueryDelegatorWithdrawAddressRequest;
                toAmino(message: _60.QueryDelegatorWithdrawAddressRequest): _60.QueryDelegatorWithdrawAddressRequestAmino;
                fromAminoMsg(object: _60.QueryDelegatorWithdrawAddressRequestAminoMsg): _60.QueryDelegatorWithdrawAddressRequest;
                toAminoMsg(message: _60.QueryDelegatorWithdrawAddressRequest): _60.QueryDelegatorWithdrawAddressRequestAminoMsg;
                fromProtoMsg(message: _60.QueryDelegatorWithdrawAddressRequestProtoMsg): _60.QueryDelegatorWithdrawAddressRequest;
                toProto(message: _60.QueryDelegatorWithdrawAddressRequest): Uint8Array;
                toProtoMsg(message: _60.QueryDelegatorWithdrawAddressRequest): _60.QueryDelegatorWithdrawAddressRequestProtoMsg;
            };
            QueryDelegatorWithdrawAddressResponse: {
                typeUrl: string;
                encode(message: _60.QueryDelegatorWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _60.QueryDelegatorWithdrawAddressResponse;
                fromJSON(object: any): _60.QueryDelegatorWithdrawAddressResponse;
                toJSON(message: _60.QueryDelegatorWithdrawAddressResponse): unknown;
                fromPartial(object: Partial<_60.QueryDelegatorWithdrawAddressResponse>): _60.QueryDelegatorWithdrawAddressResponse;
                fromSDK(object: _60.QueryDelegatorWithdrawAddressResponseSDKType): _60.QueryDelegatorWithdrawAddressResponse;
                toSDK(message: _60.QueryDelegatorWithdrawAddressResponse): _60.QueryDelegatorWithdrawAddressResponseSDKType;
                fromAmino(object: _60.QueryDelegatorWithdrawAddressResponseAmino): _60.QueryDelegatorWithdrawAddressResponse;
                toAmino(message: _60.QueryDelegatorWithdrawAddressResponse): _60.QueryDelegatorWithdrawAddressResponseAmino;
                fromAminoMsg(object: _60.QueryDelegatorWithdrawAddressResponseAminoMsg): _60.QueryDelegatorWithdrawAddressResponse;
                toAminoMsg(message: _60.QueryDelegatorWithdrawAddressResponse): _60.QueryDelegatorWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _60.QueryDelegatorWithdrawAddressResponseProtoMsg): _60.QueryDelegatorWithdrawAddressResponse;
                toProto(message: _60.QueryDelegatorWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _60.QueryDelegatorWithdrawAddressResponse): _60.QueryDelegatorWithdrawAddressResponseProtoMsg;
            };
            QueryCommunityPoolRequest: {
                typeUrl: string;
                encode(_: _60.QueryCommunityPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _60.QueryCommunityPoolRequest;
                fromJSON(_: any): _60.QueryCommunityPoolRequest;
                toJSON(_: _60.QueryCommunityPoolRequest): unknown;
                fromPartial(_: Partial<_60.QueryCommunityPoolRequest>): _60.QueryCommunityPoolRequest;
                fromSDK(_: _60.QueryCommunityPoolRequestSDKType): _60.QueryCommunityPoolRequest;
                toSDK(_: _60.QueryCommunityPoolRequest): _60.QueryCommunityPoolRequestSDKType;
                fromAmino(_: _60.QueryCommunityPoolRequestAmino): _60.QueryCommunityPoolRequest;
                toAmino(_: _60.QueryCommunityPoolRequest): _60.QueryCommunityPoolRequestAmino;
                fromAminoMsg(object: _60.QueryCommunityPoolRequestAminoMsg): _60.QueryCommunityPoolRequest;
                toAminoMsg(message: _60.QueryCommunityPoolRequest): _60.QueryCommunityPoolRequestAminoMsg;
                fromProtoMsg(message: _60.QueryCommunityPoolRequestProtoMsg): _60.QueryCommunityPoolRequest;
                toProto(message: _60.QueryCommunityPoolRequest): Uint8Array;
                toProtoMsg(message: _60.QueryCommunityPoolRequest): _60.QueryCommunityPoolRequestProtoMsg;
            };
            QueryCommunityPoolResponse: {
                typeUrl: string;
                encode(message: _60.QueryCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _60.QueryCommunityPoolResponse;
                fromJSON(object: any): _60.QueryCommunityPoolResponse;
                toJSON(message: _60.QueryCommunityPoolResponse): unknown;
                fromPartial(object: Partial<_60.QueryCommunityPoolResponse>): _60.QueryCommunityPoolResponse;
                fromSDK(object: _60.QueryCommunityPoolResponseSDKType): _60.QueryCommunityPoolResponse;
                toSDK(message: _60.QueryCommunityPoolResponse): _60.QueryCommunityPoolResponseSDKType;
                fromAmino(object: _60.QueryCommunityPoolResponseAmino): _60.QueryCommunityPoolResponse;
                toAmino(message: _60.QueryCommunityPoolResponse): _60.QueryCommunityPoolResponseAmino;
                fromAminoMsg(object: _60.QueryCommunityPoolResponseAminoMsg): _60.QueryCommunityPoolResponse;
                toAminoMsg(message: _60.QueryCommunityPoolResponse): _60.QueryCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _60.QueryCommunityPoolResponseProtoMsg): _60.QueryCommunityPoolResponse;
                toProto(message: _60.QueryCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _60.QueryCommunityPoolResponse): _60.QueryCommunityPoolResponseProtoMsg;
            };
            DelegatorWithdrawInfo: {
                typeUrl: string;
                encode(message: _59.DelegatorWithdrawInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _59.DelegatorWithdrawInfo;
                fromJSON(object: any): _59.DelegatorWithdrawInfo;
                toJSON(message: _59.DelegatorWithdrawInfo): unknown;
                fromPartial(object: Partial<_59.DelegatorWithdrawInfo>): _59.DelegatorWithdrawInfo;
                fromSDK(object: _59.DelegatorWithdrawInfoSDKType): _59.DelegatorWithdrawInfo;
                toSDK(message: _59.DelegatorWithdrawInfo): _59.DelegatorWithdrawInfoSDKType;
                fromAmino(object: _59.DelegatorWithdrawInfoAmino): _59.DelegatorWithdrawInfo;
                toAmino(message: _59.DelegatorWithdrawInfo): _59.DelegatorWithdrawInfoAmino;
                fromAminoMsg(object: _59.DelegatorWithdrawInfoAminoMsg): _59.DelegatorWithdrawInfo;
                toAminoMsg(message: _59.DelegatorWithdrawInfo): _59.DelegatorWithdrawInfoAminoMsg;
                fromProtoMsg(message: _59.DelegatorWithdrawInfoProtoMsg): _59.DelegatorWithdrawInfo;
                toProto(message: _59.DelegatorWithdrawInfo): Uint8Array;
                toProtoMsg(message: _59.DelegatorWithdrawInfo): _59.DelegatorWithdrawInfoProtoMsg;
            };
            ValidatorOutstandingRewardsRecord: {
                typeUrl: string;
                encode(message: _59.ValidatorOutstandingRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _59.ValidatorOutstandingRewardsRecord;
                fromJSON(object: any): _59.ValidatorOutstandingRewardsRecord;
                toJSON(message: _59.ValidatorOutstandingRewardsRecord): unknown;
                fromPartial(object: Partial<_59.ValidatorOutstandingRewardsRecord>): _59.ValidatorOutstandingRewardsRecord;
                fromSDK(object: _59.ValidatorOutstandingRewardsRecordSDKType): _59.ValidatorOutstandingRewardsRecord;
                toSDK(message: _59.ValidatorOutstandingRewardsRecord): _59.ValidatorOutstandingRewardsRecordSDKType;
                fromAmino(object: _59.ValidatorOutstandingRewardsRecordAmino): _59.ValidatorOutstandingRewardsRecord;
                toAmino(message: _59.ValidatorOutstandingRewardsRecord): _59.ValidatorOutstandingRewardsRecordAmino;
                fromAminoMsg(object: _59.ValidatorOutstandingRewardsRecordAminoMsg): _59.ValidatorOutstandingRewardsRecord;
                toAminoMsg(message: _59.ValidatorOutstandingRewardsRecord): _59.ValidatorOutstandingRewardsRecordAminoMsg;
                fromProtoMsg(message: _59.ValidatorOutstandingRewardsRecordProtoMsg): _59.ValidatorOutstandingRewardsRecord;
                toProto(message: _59.ValidatorOutstandingRewardsRecord): Uint8Array;
                toProtoMsg(message: _59.ValidatorOutstandingRewardsRecord): _59.ValidatorOutstandingRewardsRecordProtoMsg;
            };
            ValidatorAccumulatedCommissionRecord: {
                typeUrl: string;
                encode(message: _59.ValidatorAccumulatedCommissionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _59.ValidatorAccumulatedCommissionRecord;
                fromJSON(object: any): _59.ValidatorAccumulatedCommissionRecord;
                toJSON(message: _59.ValidatorAccumulatedCommissionRecord): unknown;
                fromPartial(object: Partial<_59.ValidatorAccumulatedCommissionRecord>): _59.ValidatorAccumulatedCommissionRecord;
                fromSDK(object: _59.ValidatorAccumulatedCommissionRecordSDKType): _59.ValidatorAccumulatedCommissionRecord;
                toSDK(message: _59.ValidatorAccumulatedCommissionRecord): _59.ValidatorAccumulatedCommissionRecordSDKType;
                fromAmino(object: _59.ValidatorAccumulatedCommissionRecordAmino): _59.ValidatorAccumulatedCommissionRecord;
                toAmino(message: _59.ValidatorAccumulatedCommissionRecord): _59.ValidatorAccumulatedCommissionRecordAmino;
                fromAminoMsg(object: _59.ValidatorAccumulatedCommissionRecordAminoMsg): _59.ValidatorAccumulatedCommissionRecord;
                toAminoMsg(message: _59.ValidatorAccumulatedCommissionRecord): _59.ValidatorAccumulatedCommissionRecordAminoMsg;
                fromProtoMsg(message: _59.ValidatorAccumulatedCommissionRecordProtoMsg): _59.ValidatorAccumulatedCommissionRecord;
                toProto(message: _59.ValidatorAccumulatedCommissionRecord): Uint8Array;
                toProtoMsg(message: _59.ValidatorAccumulatedCommissionRecord): _59.ValidatorAccumulatedCommissionRecordProtoMsg;
            };
            ValidatorHistoricalRewardsRecord: {
                typeUrl: string;
                encode(message: _59.ValidatorHistoricalRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _59.ValidatorHistoricalRewardsRecord;
                fromJSON(object: any): _59.ValidatorHistoricalRewardsRecord;
                toJSON(message: _59.ValidatorHistoricalRewardsRecord): unknown;
                fromPartial(object: Partial<_59.ValidatorHistoricalRewardsRecord>): _59.ValidatorHistoricalRewardsRecord;
                fromSDK(object: _59.ValidatorHistoricalRewardsRecordSDKType): _59.ValidatorHistoricalRewardsRecord;
                toSDK(message: _59.ValidatorHistoricalRewardsRecord): _59.ValidatorHistoricalRewardsRecordSDKType;
                fromAmino(object: _59.ValidatorHistoricalRewardsRecordAmino): _59.ValidatorHistoricalRewardsRecord;
                toAmino(message: _59.ValidatorHistoricalRewardsRecord): _59.ValidatorHistoricalRewardsRecordAmino;
                fromAminoMsg(object: _59.ValidatorHistoricalRewardsRecordAminoMsg): _59.ValidatorHistoricalRewardsRecord;
                toAminoMsg(message: _59.ValidatorHistoricalRewardsRecord): _59.ValidatorHistoricalRewardsRecordAminoMsg;
                fromProtoMsg(message: _59.ValidatorHistoricalRewardsRecordProtoMsg): _59.ValidatorHistoricalRewardsRecord;
                toProto(message: _59.ValidatorHistoricalRewardsRecord): Uint8Array;
                toProtoMsg(message: _59.ValidatorHistoricalRewardsRecord): _59.ValidatorHistoricalRewardsRecordProtoMsg;
            };
            ValidatorCurrentRewardsRecord: {
                typeUrl: string;
                encode(message: _59.ValidatorCurrentRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _59.ValidatorCurrentRewardsRecord;
                fromJSON(object: any): _59.ValidatorCurrentRewardsRecord;
                toJSON(message: _59.ValidatorCurrentRewardsRecord): unknown;
                fromPartial(object: Partial<_59.ValidatorCurrentRewardsRecord>): _59.ValidatorCurrentRewardsRecord;
                fromSDK(object: _59.ValidatorCurrentRewardsRecordSDKType): _59.ValidatorCurrentRewardsRecord;
                toSDK(message: _59.ValidatorCurrentRewardsRecord): _59.ValidatorCurrentRewardsRecordSDKType;
                fromAmino(object: _59.ValidatorCurrentRewardsRecordAmino): _59.ValidatorCurrentRewardsRecord;
                toAmino(message: _59.ValidatorCurrentRewardsRecord): _59.ValidatorCurrentRewardsRecordAmino;
                fromAminoMsg(object: _59.ValidatorCurrentRewardsRecordAminoMsg): _59.ValidatorCurrentRewardsRecord;
                toAminoMsg(message: _59.ValidatorCurrentRewardsRecord): _59.ValidatorCurrentRewardsRecordAminoMsg;
                fromProtoMsg(message: _59.ValidatorCurrentRewardsRecordProtoMsg): _59.ValidatorCurrentRewardsRecord;
                toProto(message: _59.ValidatorCurrentRewardsRecord): Uint8Array;
                toProtoMsg(message: _59.ValidatorCurrentRewardsRecord): _59.ValidatorCurrentRewardsRecordProtoMsg;
            };
            DelegatorStartingInfoRecord: {
                typeUrl: string;
                encode(message: _59.DelegatorStartingInfoRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _59.DelegatorStartingInfoRecord;
                fromJSON(object: any): _59.DelegatorStartingInfoRecord;
                toJSON(message: _59.DelegatorStartingInfoRecord): unknown;
                fromPartial(object: Partial<_59.DelegatorStartingInfoRecord>): _59.DelegatorStartingInfoRecord;
                fromSDK(object: _59.DelegatorStartingInfoRecordSDKType): _59.DelegatorStartingInfoRecord;
                toSDK(message: _59.DelegatorStartingInfoRecord): _59.DelegatorStartingInfoRecordSDKType;
                fromAmino(object: _59.DelegatorStartingInfoRecordAmino): _59.DelegatorStartingInfoRecord;
                toAmino(message: _59.DelegatorStartingInfoRecord): _59.DelegatorStartingInfoRecordAmino;
                fromAminoMsg(object: _59.DelegatorStartingInfoRecordAminoMsg): _59.DelegatorStartingInfoRecord;
                toAminoMsg(message: _59.DelegatorStartingInfoRecord): _59.DelegatorStartingInfoRecordAminoMsg;
                fromProtoMsg(message: _59.DelegatorStartingInfoRecordProtoMsg): _59.DelegatorStartingInfoRecord;
                toProto(message: _59.DelegatorStartingInfoRecord): Uint8Array;
                toProtoMsg(message: _59.DelegatorStartingInfoRecord): _59.DelegatorStartingInfoRecordProtoMsg;
            };
            ValidatorSlashEventRecord: {
                typeUrl: string;
                encode(message: _59.ValidatorSlashEventRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _59.ValidatorSlashEventRecord;
                fromJSON(object: any): _59.ValidatorSlashEventRecord;
                toJSON(message: _59.ValidatorSlashEventRecord): unknown;
                fromPartial(object: Partial<_59.ValidatorSlashEventRecord>): _59.ValidatorSlashEventRecord;
                fromSDK(object: _59.ValidatorSlashEventRecordSDKType): _59.ValidatorSlashEventRecord;
                toSDK(message: _59.ValidatorSlashEventRecord): _59.ValidatorSlashEventRecordSDKType;
                fromAmino(object: _59.ValidatorSlashEventRecordAmino): _59.ValidatorSlashEventRecord;
                toAmino(message: _59.ValidatorSlashEventRecord): _59.ValidatorSlashEventRecordAmino;
                fromAminoMsg(object: _59.ValidatorSlashEventRecordAminoMsg): _59.ValidatorSlashEventRecord;
                toAminoMsg(message: _59.ValidatorSlashEventRecord): _59.ValidatorSlashEventRecordAminoMsg;
                fromProtoMsg(message: _59.ValidatorSlashEventRecordProtoMsg): _59.ValidatorSlashEventRecord;
                toProto(message: _59.ValidatorSlashEventRecord): Uint8Array;
                toProtoMsg(message: _59.ValidatorSlashEventRecord): _59.ValidatorSlashEventRecordProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _59.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _59.GenesisState;
                fromJSON(object: any): _59.GenesisState;
                toJSON(message: _59.GenesisState): unknown;
                fromPartial(object: Partial<_59.GenesisState>): _59.GenesisState;
                fromSDK(object: _59.GenesisStateSDKType): _59.GenesisState;
                toSDK(message: _59.GenesisState): _59.GenesisStateSDKType;
                fromAmino(object: _59.GenesisStateAmino): _59.GenesisState;
                toAmino(message: _59.GenesisState): _59.GenesisStateAmino;
                fromAminoMsg(object: _59.GenesisStateAminoMsg): _59.GenesisState;
                toAminoMsg(message: _59.GenesisState): _59.GenesisStateAminoMsg;
                fromProtoMsg(message: _59.GenesisStateProtoMsg): _59.GenesisState;
                toProto(message: _59.GenesisState): Uint8Array;
                toProtoMsg(message: _59.GenesisState): _59.GenesisStateProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _58.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _58.Params;
                fromJSON(object: any): _58.Params;
                toJSON(message: _58.Params): unknown;
                fromPartial(object: Partial<_58.Params>): _58.Params;
                fromSDK(object: _58.ParamsSDKType): _58.Params;
                toSDK(message: _58.Params): _58.ParamsSDKType;
                fromAmino(object: _58.ParamsAmino): _58.Params;
                toAmino(message: _58.Params): _58.ParamsAmino;
                fromAminoMsg(object: _58.ParamsAminoMsg): _58.Params;
                toAminoMsg(message: _58.Params): _58.ParamsAminoMsg;
                fromProtoMsg(message: _58.ParamsProtoMsg): _58.Params;
                toProto(message: _58.Params): Uint8Array;
                toProtoMsg(message: _58.Params): _58.ParamsProtoMsg;
            };
            ValidatorHistoricalRewards: {
                typeUrl: string;
                encode(message: _58.ValidatorHistoricalRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _58.ValidatorHistoricalRewards;
                fromJSON(object: any): _58.ValidatorHistoricalRewards;
                toJSON(message: _58.ValidatorHistoricalRewards): unknown;
                fromPartial(object: Partial<_58.ValidatorHistoricalRewards>): _58.ValidatorHistoricalRewards;
                fromSDK(object: _58.ValidatorHistoricalRewardsSDKType): _58.ValidatorHistoricalRewards;
                toSDK(message: _58.ValidatorHistoricalRewards): _58.ValidatorHistoricalRewardsSDKType;
                fromAmino(object: _58.ValidatorHistoricalRewardsAmino): _58.ValidatorHistoricalRewards;
                toAmino(message: _58.ValidatorHistoricalRewards): _58.ValidatorHistoricalRewardsAmino;
                fromAminoMsg(object: _58.ValidatorHistoricalRewardsAminoMsg): _58.ValidatorHistoricalRewards;
                toAminoMsg(message: _58.ValidatorHistoricalRewards): _58.ValidatorHistoricalRewardsAminoMsg;
                fromProtoMsg(message: _58.ValidatorHistoricalRewardsProtoMsg): _58.ValidatorHistoricalRewards;
                toProto(message: _58.ValidatorHistoricalRewards): Uint8Array;
                toProtoMsg(message: _58.ValidatorHistoricalRewards): _58.ValidatorHistoricalRewardsProtoMsg;
            };
            ValidatorCurrentRewards: {
                typeUrl: string;
                encode(message: _58.ValidatorCurrentRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _58.ValidatorCurrentRewards;
                fromJSON(object: any): _58.ValidatorCurrentRewards;
                toJSON(message: _58.ValidatorCurrentRewards): unknown;
                fromPartial(object: Partial<_58.ValidatorCurrentRewards>): _58.ValidatorCurrentRewards;
                fromSDK(object: _58.ValidatorCurrentRewardsSDKType): _58.ValidatorCurrentRewards;
                toSDK(message: _58.ValidatorCurrentRewards): _58.ValidatorCurrentRewardsSDKType;
                fromAmino(object: _58.ValidatorCurrentRewardsAmino): _58.ValidatorCurrentRewards;
                toAmino(message: _58.ValidatorCurrentRewards): _58.ValidatorCurrentRewardsAmino;
                fromAminoMsg(object: _58.ValidatorCurrentRewardsAminoMsg): _58.ValidatorCurrentRewards;
                toAminoMsg(message: _58.ValidatorCurrentRewards): _58.ValidatorCurrentRewardsAminoMsg;
                fromProtoMsg(message: _58.ValidatorCurrentRewardsProtoMsg): _58.ValidatorCurrentRewards;
                toProto(message: _58.ValidatorCurrentRewards): Uint8Array;
                toProtoMsg(message: _58.ValidatorCurrentRewards): _58.ValidatorCurrentRewardsProtoMsg;
            };
            ValidatorAccumulatedCommission: {
                typeUrl: string;
                encode(message: _58.ValidatorAccumulatedCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _58.ValidatorAccumulatedCommission;
                fromJSON(object: any): _58.ValidatorAccumulatedCommission;
                toJSON(message: _58.ValidatorAccumulatedCommission): unknown;
                fromPartial(object: Partial<_58.ValidatorAccumulatedCommission>): _58.ValidatorAccumulatedCommission;
                fromSDK(object: _58.ValidatorAccumulatedCommissionSDKType): _58.ValidatorAccumulatedCommission;
                toSDK(message: _58.ValidatorAccumulatedCommission): _58.ValidatorAccumulatedCommissionSDKType;
                fromAmino(object: _58.ValidatorAccumulatedCommissionAmino): _58.ValidatorAccumulatedCommission;
                toAmino(message: _58.ValidatorAccumulatedCommission): _58.ValidatorAccumulatedCommissionAmino;
                fromAminoMsg(object: _58.ValidatorAccumulatedCommissionAminoMsg): _58.ValidatorAccumulatedCommission;
                toAminoMsg(message: _58.ValidatorAccumulatedCommission): _58.ValidatorAccumulatedCommissionAminoMsg;
                fromProtoMsg(message: _58.ValidatorAccumulatedCommissionProtoMsg): _58.ValidatorAccumulatedCommission;
                toProto(message: _58.ValidatorAccumulatedCommission): Uint8Array;
                toProtoMsg(message: _58.ValidatorAccumulatedCommission): _58.ValidatorAccumulatedCommissionProtoMsg;
            };
            ValidatorOutstandingRewards: {
                typeUrl: string;
                encode(message: _58.ValidatorOutstandingRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _58.ValidatorOutstandingRewards;
                fromJSON(object: any): _58.ValidatorOutstandingRewards;
                toJSON(message: _58.ValidatorOutstandingRewards): unknown;
                fromPartial(object: Partial<_58.ValidatorOutstandingRewards>): _58.ValidatorOutstandingRewards;
                fromSDK(object: _58.ValidatorOutstandingRewardsSDKType): _58.ValidatorOutstandingRewards;
                toSDK(message: _58.ValidatorOutstandingRewards): _58.ValidatorOutstandingRewardsSDKType;
                fromAmino(object: _58.ValidatorOutstandingRewardsAmino): _58.ValidatorOutstandingRewards;
                toAmino(message: _58.ValidatorOutstandingRewards): _58.ValidatorOutstandingRewardsAmino;
                fromAminoMsg(object: _58.ValidatorOutstandingRewardsAminoMsg): _58.ValidatorOutstandingRewards;
                toAminoMsg(message: _58.ValidatorOutstandingRewards): _58.ValidatorOutstandingRewardsAminoMsg;
                fromProtoMsg(message: _58.ValidatorOutstandingRewardsProtoMsg): _58.ValidatorOutstandingRewards;
                toProto(message: _58.ValidatorOutstandingRewards): Uint8Array;
                toProtoMsg(message: _58.ValidatorOutstandingRewards): _58.ValidatorOutstandingRewardsProtoMsg;
            };
            ValidatorSlashEvent: {
                typeUrl: string;
                encode(message: _58.ValidatorSlashEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _58.ValidatorSlashEvent;
                fromJSON(object: any): _58.ValidatorSlashEvent;
                toJSON(message: _58.ValidatorSlashEvent): unknown;
                fromPartial(object: Partial<_58.ValidatorSlashEvent>): _58.ValidatorSlashEvent;
                fromSDK(object: _58.ValidatorSlashEventSDKType): _58.ValidatorSlashEvent;
                toSDK(message: _58.ValidatorSlashEvent): _58.ValidatorSlashEventSDKType;
                fromAmino(object: _58.ValidatorSlashEventAmino): _58.ValidatorSlashEvent;
                toAmino(message: _58.ValidatorSlashEvent): _58.ValidatorSlashEventAmino;
                fromAminoMsg(object: _58.ValidatorSlashEventAminoMsg): _58.ValidatorSlashEvent;
                toAminoMsg(message: _58.ValidatorSlashEvent): _58.ValidatorSlashEventAminoMsg;
                fromProtoMsg(message: _58.ValidatorSlashEventProtoMsg): _58.ValidatorSlashEvent;
                toProto(message: _58.ValidatorSlashEvent): Uint8Array;
                toProtoMsg(message: _58.ValidatorSlashEvent): _58.ValidatorSlashEventProtoMsg;
            };
            ValidatorSlashEvents: {
                typeUrl: string;
                encode(message: _58.ValidatorSlashEvents, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _58.ValidatorSlashEvents;
                fromJSON(object: any): _58.ValidatorSlashEvents;
                toJSON(message: _58.ValidatorSlashEvents): unknown;
                fromPartial(object: Partial<_58.ValidatorSlashEvents>): _58.ValidatorSlashEvents;
                fromSDK(object: _58.ValidatorSlashEventsSDKType): _58.ValidatorSlashEvents;
                toSDK(message: _58.ValidatorSlashEvents): _58.ValidatorSlashEventsSDKType;
                fromAmino(object: _58.ValidatorSlashEventsAmino): _58.ValidatorSlashEvents;
                toAmino(message: _58.ValidatorSlashEvents): _58.ValidatorSlashEventsAmino;
                fromAminoMsg(object: _58.ValidatorSlashEventsAminoMsg): _58.ValidatorSlashEvents;
                toAminoMsg(message: _58.ValidatorSlashEvents): _58.ValidatorSlashEventsAminoMsg;
                fromProtoMsg(message: _58.ValidatorSlashEventsProtoMsg): _58.ValidatorSlashEvents;
                toProto(message: _58.ValidatorSlashEvents): Uint8Array;
                toProtoMsg(message: _58.ValidatorSlashEvents): _58.ValidatorSlashEventsProtoMsg;
            };
            FeePool: {
                typeUrl: string;
                encode(message: _58.FeePool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _58.FeePool;
                fromJSON(object: any): _58.FeePool;
                toJSON(message: _58.FeePool): unknown;
                fromPartial(object: Partial<_58.FeePool>): _58.FeePool;
                fromSDK(object: _58.FeePoolSDKType): _58.FeePool;
                toSDK(message: _58.FeePool): _58.FeePoolSDKType;
                fromAmino(object: _58.FeePoolAmino): _58.FeePool;
                toAmino(message: _58.FeePool): _58.FeePoolAmino;
                fromAminoMsg(object: _58.FeePoolAminoMsg): _58.FeePool;
                toAminoMsg(message: _58.FeePool): _58.FeePoolAminoMsg;
                fromProtoMsg(message: _58.FeePoolProtoMsg): _58.FeePool;
                toProto(message: _58.FeePool): Uint8Array;
                toProtoMsg(message: _58.FeePool): _58.FeePoolProtoMsg;
            };
            CommunityPoolSpendProposal: {
                typeUrl: string;
                encode(message: _58.CommunityPoolSpendProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _58.CommunityPoolSpendProposal;
                fromJSON(object: any): _58.CommunityPoolSpendProposal;
                toJSON(message: _58.CommunityPoolSpendProposal): unknown;
                fromPartial(object: Partial<_58.CommunityPoolSpendProposal>): _58.CommunityPoolSpendProposal;
                fromSDK(object: _58.CommunityPoolSpendProposalSDKType): _58.CommunityPoolSpendProposal;
                toSDK(message: _58.CommunityPoolSpendProposal): _58.CommunityPoolSpendProposalSDKType;
                fromAmino(object: _58.CommunityPoolSpendProposalAmino): _58.CommunityPoolSpendProposal;
                toAmino(message: _58.CommunityPoolSpendProposal): _58.CommunityPoolSpendProposalAmino;
                fromAminoMsg(object: _58.CommunityPoolSpendProposalAminoMsg): _58.CommunityPoolSpendProposal;
                toAminoMsg(message: _58.CommunityPoolSpendProposal): _58.CommunityPoolSpendProposalAminoMsg;
                fromProtoMsg(message: _58.CommunityPoolSpendProposalProtoMsg): _58.CommunityPoolSpendProposal;
                toProto(message: _58.CommunityPoolSpendProposal): Uint8Array;
                toProtoMsg(message: _58.CommunityPoolSpendProposal): _58.CommunityPoolSpendProposalProtoMsg;
            };
            DelegatorStartingInfo: {
                typeUrl: string;
                encode(message: _58.DelegatorStartingInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _58.DelegatorStartingInfo;
                fromJSON(object: any): _58.DelegatorStartingInfo;
                toJSON(message: _58.DelegatorStartingInfo): unknown;
                fromPartial(object: Partial<_58.DelegatorStartingInfo>): _58.DelegatorStartingInfo;
                fromSDK(object: _58.DelegatorStartingInfoSDKType): _58.DelegatorStartingInfo;
                toSDK(message: _58.DelegatorStartingInfo): _58.DelegatorStartingInfoSDKType;
                fromAmino(object: _58.DelegatorStartingInfoAmino): _58.DelegatorStartingInfo;
                toAmino(message: _58.DelegatorStartingInfo): _58.DelegatorStartingInfoAmino;
                fromAminoMsg(object: _58.DelegatorStartingInfoAminoMsg): _58.DelegatorStartingInfo;
                toAminoMsg(message: _58.DelegatorStartingInfo): _58.DelegatorStartingInfoAminoMsg;
                fromProtoMsg(message: _58.DelegatorStartingInfoProtoMsg): _58.DelegatorStartingInfo;
                toProto(message: _58.DelegatorStartingInfo): Uint8Array;
                toProtoMsg(message: _58.DelegatorStartingInfo): _58.DelegatorStartingInfoProtoMsg;
            };
            DelegationDelegatorReward: {
                typeUrl: string;
                encode(message: _58.DelegationDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _58.DelegationDelegatorReward;
                fromJSON(object: any): _58.DelegationDelegatorReward;
                toJSON(message: _58.DelegationDelegatorReward): unknown;
                fromPartial(object: Partial<_58.DelegationDelegatorReward>): _58.DelegationDelegatorReward;
                fromSDK(object: _58.DelegationDelegatorRewardSDKType): _58.DelegationDelegatorReward;
                toSDK(message: _58.DelegationDelegatorReward): _58.DelegationDelegatorRewardSDKType;
                fromAmino(object: _58.DelegationDelegatorRewardAmino): _58.DelegationDelegatorReward;
                toAmino(message: _58.DelegationDelegatorReward): _58.DelegationDelegatorRewardAmino;
                fromAminoMsg(object: _58.DelegationDelegatorRewardAminoMsg): _58.DelegationDelegatorReward;
                toAminoMsg(message: _58.DelegationDelegatorReward): _58.DelegationDelegatorRewardAminoMsg;
                fromProtoMsg(message: _58.DelegationDelegatorRewardProtoMsg): _58.DelegationDelegatorReward;
                toProto(message: _58.DelegationDelegatorReward): Uint8Array;
                toProtoMsg(message: _58.DelegationDelegatorReward): _58.DelegationDelegatorRewardProtoMsg;
            };
            CommunityPoolSpendProposalWithDeposit: {
                typeUrl: string;
                encode(message: _58.CommunityPoolSpendProposalWithDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _58.CommunityPoolSpendProposalWithDeposit;
                fromJSON(object: any): _58.CommunityPoolSpendProposalWithDeposit;
                toJSON(message: _58.CommunityPoolSpendProposalWithDeposit): unknown;
                fromPartial(object: Partial<_58.CommunityPoolSpendProposalWithDeposit>): _58.CommunityPoolSpendProposalWithDeposit;
                fromSDK(object: _58.CommunityPoolSpendProposalWithDepositSDKType): _58.CommunityPoolSpendProposalWithDeposit;
                toSDK(message: _58.CommunityPoolSpendProposalWithDeposit): _58.CommunityPoolSpendProposalWithDepositSDKType;
                fromAmino(object: _58.CommunityPoolSpendProposalWithDepositAmino): _58.CommunityPoolSpendProposalWithDeposit;
                toAmino(message: _58.CommunityPoolSpendProposalWithDeposit): _58.CommunityPoolSpendProposalWithDepositAmino;
                fromAminoMsg(object: _58.CommunityPoolSpendProposalWithDepositAminoMsg): _58.CommunityPoolSpendProposalWithDeposit;
                toAminoMsg(message: _58.CommunityPoolSpendProposalWithDeposit): _58.CommunityPoolSpendProposalWithDepositAminoMsg;
                fromProtoMsg(message: _58.CommunityPoolSpendProposalWithDepositProtoMsg): _58.CommunityPoolSpendProposalWithDeposit;
                toProto(message: _58.CommunityPoolSpendProposalWithDeposit): Uint8Array;
                toProtoMsg(message: _58.CommunityPoolSpendProposalWithDeposit): _58.CommunityPoolSpendProposalWithDepositProtoMsg;
            };
        };
    }
    namespace evidence {
        namespace module {
            const v1: {
                protobufPackage: "cosmos.evidence.module.v1";
                Module: {
                    typeUrl: string;
                    encode(_: _62.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _62.Module;
                    fromJSON(_: any): _62.Module;
                    toJSON(_: _62.Module): unknown;
                    fromPartial(_: Partial<_62.Module>): _62.Module;
                    fromSDK(_: _62.ModuleSDKType): _62.Module;
                    toSDK(_: _62.Module): _62.ModuleSDKType;
                    fromAmino(_: _62.ModuleAmino): _62.Module;
                    toAmino(_: _62.Module): _62.ModuleAmino;
                    fromAminoMsg(object: _62.ModuleAminoMsg): _62.Module;
                    toAminoMsg(message: _62.Module): _62.ModuleAminoMsg;
                    fromProtoMsg(message: _62.ModuleProtoMsg): _62.Module;
                    toProto(message: _62.Module): Uint8Array;
                    toProtoMsg(message: _62.Module): _62.ModuleProtoMsg;
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
                    encode(_: _63.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _63.Module;
                    fromJSON(_: any): _63.Module;
                    toJSON(_: _63.Module): unknown;
                    fromPartial(_: Partial<_63.Module>): _63.Module;
                    fromSDK(_: _63.ModuleSDKType): _63.Module;
                    toSDK(_: _63.Module): _63.ModuleSDKType;
                    fromAmino(_: _63.ModuleAmino): _63.Module;
                    toAmino(_: _63.Module): _63.ModuleAmino;
                    fromAminoMsg(object: _63.ModuleAminoMsg): _63.Module;
                    toAminoMsg(message: _63.Module): _63.ModuleAminoMsg;
                    fromProtoMsg(message: _63.ModuleProtoMsg): _63.Module;
                    toProto(message: _63.Module): Uint8Array;
                    toProtoMsg(message: _63.Module): _63.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            Msg: typeof _231.Msg;
            Query: typeof _214.Query;
            QueryClientImpl: typeof _214.QueryClientImpl;
            LCDQueryClient: typeof _196.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _67.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _67.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    pruneAllowances(value: _67.MsgPruneAllowances): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _67.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _67.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _67.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _67.MsgRevokeAllowance;
                    };
                    pruneAllowances(value: _67.MsgPruneAllowances): {
                        typeUrl: string;
                        value: _67.MsgPruneAllowances;
                    };
                };
                toJSON: {
                    grantAllowance(value: _67.MsgGrantAllowance): {
                        typeUrl: string;
                        value: unknown;
                    };
                    revokeAllowance(value: _67.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: unknown;
                    };
                    pruneAllowances(value: _67.MsgPruneAllowances): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    grantAllowance(value: any): {
                        typeUrl: string;
                        value: _67.MsgGrantAllowance;
                    };
                    revokeAllowance(value: any): {
                        typeUrl: string;
                        value: _67.MsgRevokeAllowance;
                    };
                    pruneAllowances(value: any): {
                        typeUrl: string;
                        value: _67.MsgPruneAllowances;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _67.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _67.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _67.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _67.MsgRevokeAllowance;
                    };
                    pruneAllowances(value: _67.MsgPruneAllowances): {
                        typeUrl: string;
                        value: _67.MsgPruneAllowances;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: (message: _67.MsgGrantAllowance) => _67.MsgGrantAllowanceAmino;
                    fromAmino: (object: _67.MsgGrantAllowanceAmino) => _67.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: (message: _67.MsgRevokeAllowance) => _67.MsgRevokeAllowanceAmino;
                    fromAmino: (object: _67.MsgRevokeAllowanceAmino) => _67.MsgRevokeAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgPruneAllowances": {
                    aminoType: string;
                    toAmino: (message: _67.MsgPruneAllowances) => _67.MsgPruneAllowancesAmino;
                    fromAmino: (object: _67.MsgPruneAllowancesAmino) => _67.MsgPruneAllowances;
                };
            };
            protobufPackage: "cosmos.feegrant.v1beta1";
            MsgGrantAllowance: {
                typeUrl: string;
                encode(message: _67.MsgGrantAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _67.MsgGrantAllowance;
                fromJSON(object: any): _67.MsgGrantAllowance;
                toJSON(message: _67.MsgGrantAllowance): unknown;
                fromPartial(object: Partial<_67.MsgGrantAllowance>): _67.MsgGrantAllowance;
                fromSDK(object: _67.MsgGrantAllowanceSDKType): _67.MsgGrantAllowance;
                toSDK(message: _67.MsgGrantAllowance): _67.MsgGrantAllowanceSDKType;
                fromAmino(object: _67.MsgGrantAllowanceAmino): _67.MsgGrantAllowance;
                toAmino(message: _67.MsgGrantAllowance): _67.MsgGrantAllowanceAmino;
                fromAminoMsg(object: _67.MsgGrantAllowanceAminoMsg): _67.MsgGrantAllowance;
                toAminoMsg(message: _67.MsgGrantAllowance): _67.MsgGrantAllowanceAminoMsg;
                fromProtoMsg(message: _67.MsgGrantAllowanceProtoMsg): _67.MsgGrantAllowance;
                toProto(message: _67.MsgGrantAllowance): Uint8Array;
                toProtoMsg(message: _67.MsgGrantAllowance): _67.MsgGrantAllowanceProtoMsg;
            };
            MsgGrantAllowanceResponse: {
                typeUrl: string;
                encode(_: _67.MsgGrantAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _67.MsgGrantAllowanceResponse;
                fromJSON(_: any): _67.MsgGrantAllowanceResponse;
                toJSON(_: _67.MsgGrantAllowanceResponse): unknown;
                fromPartial(_: Partial<_67.MsgGrantAllowanceResponse>): _67.MsgGrantAllowanceResponse;
                fromSDK(_: _67.MsgGrantAllowanceResponseSDKType): _67.MsgGrantAllowanceResponse;
                toSDK(_: _67.MsgGrantAllowanceResponse): _67.MsgGrantAllowanceResponseSDKType;
                fromAmino(_: _67.MsgGrantAllowanceResponseAmino): _67.MsgGrantAllowanceResponse;
                toAmino(_: _67.MsgGrantAllowanceResponse): _67.MsgGrantAllowanceResponseAmino;
                fromAminoMsg(object: _67.MsgGrantAllowanceResponseAminoMsg): _67.MsgGrantAllowanceResponse;
                toAminoMsg(message: _67.MsgGrantAllowanceResponse): _67.MsgGrantAllowanceResponseAminoMsg;
                fromProtoMsg(message: _67.MsgGrantAllowanceResponseProtoMsg): _67.MsgGrantAllowanceResponse;
                toProto(message: _67.MsgGrantAllowanceResponse): Uint8Array;
                toProtoMsg(message: _67.MsgGrantAllowanceResponse): _67.MsgGrantAllowanceResponseProtoMsg;
            };
            MsgRevokeAllowance: {
                typeUrl: string;
                encode(message: _67.MsgRevokeAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _67.MsgRevokeAllowance;
                fromJSON(object: any): _67.MsgRevokeAllowance;
                toJSON(message: _67.MsgRevokeAllowance): unknown;
                fromPartial(object: Partial<_67.MsgRevokeAllowance>): _67.MsgRevokeAllowance;
                fromSDK(object: _67.MsgRevokeAllowanceSDKType): _67.MsgRevokeAllowance;
                toSDK(message: _67.MsgRevokeAllowance): _67.MsgRevokeAllowanceSDKType;
                fromAmino(object: _67.MsgRevokeAllowanceAmino): _67.MsgRevokeAllowance;
                toAmino(message: _67.MsgRevokeAllowance): _67.MsgRevokeAllowanceAmino;
                fromAminoMsg(object: _67.MsgRevokeAllowanceAminoMsg): _67.MsgRevokeAllowance;
                toAminoMsg(message: _67.MsgRevokeAllowance): _67.MsgRevokeAllowanceAminoMsg;
                fromProtoMsg(message: _67.MsgRevokeAllowanceProtoMsg): _67.MsgRevokeAllowance;
                toProto(message: _67.MsgRevokeAllowance): Uint8Array;
                toProtoMsg(message: _67.MsgRevokeAllowance): _67.MsgRevokeAllowanceProtoMsg;
            };
            MsgRevokeAllowanceResponse: {
                typeUrl: string;
                encode(_: _67.MsgRevokeAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _67.MsgRevokeAllowanceResponse;
                fromJSON(_: any): _67.MsgRevokeAllowanceResponse;
                toJSON(_: _67.MsgRevokeAllowanceResponse): unknown;
                fromPartial(_: Partial<_67.MsgRevokeAllowanceResponse>): _67.MsgRevokeAllowanceResponse;
                fromSDK(_: _67.MsgRevokeAllowanceResponseSDKType): _67.MsgRevokeAllowanceResponse;
                toSDK(_: _67.MsgRevokeAllowanceResponse): _67.MsgRevokeAllowanceResponseSDKType;
                fromAmino(_: _67.MsgRevokeAllowanceResponseAmino): _67.MsgRevokeAllowanceResponse;
                toAmino(_: _67.MsgRevokeAllowanceResponse): _67.MsgRevokeAllowanceResponseAmino;
                fromAminoMsg(object: _67.MsgRevokeAllowanceResponseAminoMsg): _67.MsgRevokeAllowanceResponse;
                toAminoMsg(message: _67.MsgRevokeAllowanceResponse): _67.MsgRevokeAllowanceResponseAminoMsg;
                fromProtoMsg(message: _67.MsgRevokeAllowanceResponseProtoMsg): _67.MsgRevokeAllowanceResponse;
                toProto(message: _67.MsgRevokeAllowanceResponse): Uint8Array;
                toProtoMsg(message: _67.MsgRevokeAllowanceResponse): _67.MsgRevokeAllowanceResponseProtoMsg;
            };
            MsgPruneAllowances: {
                typeUrl: string;
                encode(message: _67.MsgPruneAllowances, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _67.MsgPruneAllowances;
                fromJSON(object: any): _67.MsgPruneAllowances;
                toJSON(message: _67.MsgPruneAllowances): unknown;
                fromPartial(object: Partial<_67.MsgPruneAllowances>): _67.MsgPruneAllowances;
                fromSDK(object: _67.MsgPruneAllowancesSDKType): _67.MsgPruneAllowances;
                toSDK(message: _67.MsgPruneAllowances): _67.MsgPruneAllowancesSDKType;
                fromAmino(object: _67.MsgPruneAllowancesAmino): _67.MsgPruneAllowances;
                toAmino(message: _67.MsgPruneAllowances): _67.MsgPruneAllowancesAmino;
                fromAminoMsg(object: _67.MsgPruneAllowancesAminoMsg): _67.MsgPruneAllowances;
                toAminoMsg(message: _67.MsgPruneAllowances): _67.MsgPruneAllowancesAminoMsg;
                fromProtoMsg(message: _67.MsgPruneAllowancesProtoMsg): _67.MsgPruneAllowances;
                toProto(message: _67.MsgPruneAllowances): Uint8Array;
                toProtoMsg(message: _67.MsgPruneAllowances): _67.MsgPruneAllowancesProtoMsg;
            };
            MsgPruneAllowancesResponse: {
                typeUrl: string;
                encode(_: _67.MsgPruneAllowancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _67.MsgPruneAllowancesResponse;
                fromJSON(_: any): _67.MsgPruneAllowancesResponse;
                toJSON(_: _67.MsgPruneAllowancesResponse): unknown;
                fromPartial(_: Partial<_67.MsgPruneAllowancesResponse>): _67.MsgPruneAllowancesResponse;
                fromSDK(_: _67.MsgPruneAllowancesResponseSDKType): _67.MsgPruneAllowancesResponse;
                toSDK(_: _67.MsgPruneAllowancesResponse): _67.MsgPruneAllowancesResponseSDKType;
                fromAmino(_: _67.MsgPruneAllowancesResponseAmino): _67.MsgPruneAllowancesResponse;
                toAmino(_: _67.MsgPruneAllowancesResponse): _67.MsgPruneAllowancesResponseAmino;
                fromAminoMsg(object: _67.MsgPruneAllowancesResponseAminoMsg): _67.MsgPruneAllowancesResponse;
                toAminoMsg(message: _67.MsgPruneAllowancesResponse): _67.MsgPruneAllowancesResponseAminoMsg;
                fromProtoMsg(message: _67.MsgPruneAllowancesResponseProtoMsg): _67.MsgPruneAllowancesResponse;
                toProto(message: _67.MsgPruneAllowancesResponse): Uint8Array;
                toProtoMsg(message: _67.MsgPruneAllowancesResponse): _67.MsgPruneAllowancesResponseProtoMsg;
            };
            Cosmos_feegrantv1beta1FeeAllowanceI_InterfaceDecoder: (input: import("..").BinaryReader | Uint8Array) => import("../google/protobuf/any").Any | _64.BasicAllowance | _64.PeriodicAllowance | _64.AllowedMsgAllowance;
            Cosmos_feegrantv1beta1FeeAllowanceI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_feegrantv1beta1FeeAllowanceI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryAllowanceRequest: {
                typeUrl: string;
                encode(message: _66.QueryAllowanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _66.QueryAllowanceRequest;
                fromJSON(object: any): _66.QueryAllowanceRequest;
                toJSON(message: _66.QueryAllowanceRequest): unknown;
                fromPartial(object: Partial<_66.QueryAllowanceRequest>): _66.QueryAllowanceRequest;
                fromSDK(object: _66.QueryAllowanceRequestSDKType): _66.QueryAllowanceRequest;
                toSDK(message: _66.QueryAllowanceRequest): _66.QueryAllowanceRequestSDKType;
                fromAmino(object: _66.QueryAllowanceRequestAmino): _66.QueryAllowanceRequest;
                toAmino(message: _66.QueryAllowanceRequest): _66.QueryAllowanceRequestAmino;
                fromAminoMsg(object: _66.QueryAllowanceRequestAminoMsg): _66.QueryAllowanceRequest;
                toAminoMsg(message: _66.QueryAllowanceRequest): _66.QueryAllowanceRequestAminoMsg;
                fromProtoMsg(message: _66.QueryAllowanceRequestProtoMsg): _66.QueryAllowanceRequest;
                toProto(message: _66.QueryAllowanceRequest): Uint8Array;
                toProtoMsg(message: _66.QueryAllowanceRequest): _66.QueryAllowanceRequestProtoMsg;
            };
            QueryAllowanceResponse: {
                typeUrl: string;
                encode(message: _66.QueryAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _66.QueryAllowanceResponse;
                fromJSON(object: any): _66.QueryAllowanceResponse;
                toJSON(message: _66.QueryAllowanceResponse): unknown;
                fromPartial(object: Partial<_66.QueryAllowanceResponse>): _66.QueryAllowanceResponse;
                fromSDK(object: _66.QueryAllowanceResponseSDKType): _66.QueryAllowanceResponse;
                toSDK(message: _66.QueryAllowanceResponse): _66.QueryAllowanceResponseSDKType;
                fromAmino(object: _66.QueryAllowanceResponseAmino): _66.QueryAllowanceResponse;
                toAmino(message: _66.QueryAllowanceResponse): _66.QueryAllowanceResponseAmino;
                fromAminoMsg(object: _66.QueryAllowanceResponseAminoMsg): _66.QueryAllowanceResponse;
                toAminoMsg(message: _66.QueryAllowanceResponse): _66.QueryAllowanceResponseAminoMsg;
                fromProtoMsg(message: _66.QueryAllowanceResponseProtoMsg): _66.QueryAllowanceResponse;
                toProto(message: _66.QueryAllowanceResponse): Uint8Array;
                toProtoMsg(message: _66.QueryAllowanceResponse): _66.QueryAllowanceResponseProtoMsg;
            };
            QueryAllowancesRequest: {
                typeUrl: string;
                encode(message: _66.QueryAllowancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _66.QueryAllowancesRequest;
                fromJSON(object: any): _66.QueryAllowancesRequest;
                toJSON(message: _66.QueryAllowancesRequest): unknown;
                fromPartial(object: Partial<_66.QueryAllowancesRequest>): _66.QueryAllowancesRequest;
                fromSDK(object: _66.QueryAllowancesRequestSDKType): _66.QueryAllowancesRequest;
                toSDK(message: _66.QueryAllowancesRequest): _66.QueryAllowancesRequestSDKType;
                fromAmino(object: _66.QueryAllowancesRequestAmino): _66.QueryAllowancesRequest;
                toAmino(message: _66.QueryAllowancesRequest): _66.QueryAllowancesRequestAmino;
                fromAminoMsg(object: _66.QueryAllowancesRequestAminoMsg): _66.QueryAllowancesRequest;
                toAminoMsg(message: _66.QueryAllowancesRequest): _66.QueryAllowancesRequestAminoMsg;
                fromProtoMsg(message: _66.QueryAllowancesRequestProtoMsg): _66.QueryAllowancesRequest;
                toProto(message: _66.QueryAllowancesRequest): Uint8Array;
                toProtoMsg(message: _66.QueryAllowancesRequest): _66.QueryAllowancesRequestProtoMsg;
            };
            QueryAllowancesResponse: {
                typeUrl: string;
                encode(message: _66.QueryAllowancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _66.QueryAllowancesResponse;
                fromJSON(object: any): _66.QueryAllowancesResponse;
                toJSON(message: _66.QueryAllowancesResponse): unknown;
                fromPartial(object: Partial<_66.QueryAllowancesResponse>): _66.QueryAllowancesResponse;
                fromSDK(object: _66.QueryAllowancesResponseSDKType): _66.QueryAllowancesResponse;
                toSDK(message: _66.QueryAllowancesResponse): _66.QueryAllowancesResponseSDKType;
                fromAmino(object: _66.QueryAllowancesResponseAmino): _66.QueryAllowancesResponse;
                toAmino(message: _66.QueryAllowancesResponse): _66.QueryAllowancesResponseAmino;
                fromAminoMsg(object: _66.QueryAllowancesResponseAminoMsg): _66.QueryAllowancesResponse;
                toAminoMsg(message: _66.QueryAllowancesResponse): _66.QueryAllowancesResponseAminoMsg;
                fromProtoMsg(message: _66.QueryAllowancesResponseProtoMsg): _66.QueryAllowancesResponse;
                toProto(message: _66.QueryAllowancesResponse): Uint8Array;
                toProtoMsg(message: _66.QueryAllowancesResponse): _66.QueryAllowancesResponseProtoMsg;
            };
            QueryAllowancesByGranterRequest: {
                typeUrl: string;
                encode(message: _66.QueryAllowancesByGranterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _66.QueryAllowancesByGranterRequest;
                fromJSON(object: any): _66.QueryAllowancesByGranterRequest;
                toJSON(message: _66.QueryAllowancesByGranterRequest): unknown;
                fromPartial(object: Partial<_66.QueryAllowancesByGranterRequest>): _66.QueryAllowancesByGranterRequest;
                fromSDK(object: _66.QueryAllowancesByGranterRequestSDKType): _66.QueryAllowancesByGranterRequest;
                toSDK(message: _66.QueryAllowancesByGranterRequest): _66.QueryAllowancesByGranterRequestSDKType;
                fromAmino(object: _66.QueryAllowancesByGranterRequestAmino): _66.QueryAllowancesByGranterRequest;
                toAmino(message: _66.QueryAllowancesByGranterRequest): _66.QueryAllowancesByGranterRequestAmino;
                fromAminoMsg(object: _66.QueryAllowancesByGranterRequestAminoMsg): _66.QueryAllowancesByGranterRequest;
                toAminoMsg(message: _66.QueryAllowancesByGranterRequest): _66.QueryAllowancesByGranterRequestAminoMsg;
                fromProtoMsg(message: _66.QueryAllowancesByGranterRequestProtoMsg): _66.QueryAllowancesByGranterRequest;
                toProto(message: _66.QueryAllowancesByGranterRequest): Uint8Array;
                toProtoMsg(message: _66.QueryAllowancesByGranterRequest): _66.QueryAllowancesByGranterRequestProtoMsg;
            };
            QueryAllowancesByGranterResponse: {
                typeUrl: string;
                encode(message: _66.QueryAllowancesByGranterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _66.QueryAllowancesByGranterResponse;
                fromJSON(object: any): _66.QueryAllowancesByGranterResponse;
                toJSON(message: _66.QueryAllowancesByGranterResponse): unknown;
                fromPartial(object: Partial<_66.QueryAllowancesByGranterResponse>): _66.QueryAllowancesByGranterResponse;
                fromSDK(object: _66.QueryAllowancesByGranterResponseSDKType): _66.QueryAllowancesByGranterResponse;
                toSDK(message: _66.QueryAllowancesByGranterResponse): _66.QueryAllowancesByGranterResponseSDKType;
                fromAmino(object: _66.QueryAllowancesByGranterResponseAmino): _66.QueryAllowancesByGranterResponse;
                toAmino(message: _66.QueryAllowancesByGranterResponse): _66.QueryAllowancesByGranterResponseAmino;
                fromAminoMsg(object: _66.QueryAllowancesByGranterResponseAminoMsg): _66.QueryAllowancesByGranterResponse;
                toAminoMsg(message: _66.QueryAllowancesByGranterResponse): _66.QueryAllowancesByGranterResponseAminoMsg;
                fromProtoMsg(message: _66.QueryAllowancesByGranterResponseProtoMsg): _66.QueryAllowancesByGranterResponse;
                toProto(message: _66.QueryAllowancesByGranterResponse): Uint8Array;
                toProtoMsg(message: _66.QueryAllowancesByGranterResponse): _66.QueryAllowancesByGranterResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _65.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _65.GenesisState;
                fromJSON(object: any): _65.GenesisState;
                toJSON(message: _65.GenesisState): unknown;
                fromPartial(object: Partial<_65.GenesisState>): _65.GenesisState;
                fromSDK(object: _65.GenesisStateSDKType): _65.GenesisState;
                toSDK(message: _65.GenesisState): _65.GenesisStateSDKType;
                fromAmino(object: _65.GenesisStateAmino): _65.GenesisState;
                toAmino(message: _65.GenesisState): _65.GenesisStateAmino;
                fromAminoMsg(object: _65.GenesisStateAminoMsg): _65.GenesisState;
                toAminoMsg(message: _65.GenesisState): _65.GenesisStateAminoMsg;
                fromProtoMsg(message: _65.GenesisStateProtoMsg): _65.GenesisState;
                toProto(message: _65.GenesisState): Uint8Array;
                toProtoMsg(message: _65.GenesisState): _65.GenesisStateProtoMsg;
            };
            BasicAllowance: {
                typeUrl: string;
                encode(message: _64.BasicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _64.BasicAllowance;
                fromJSON(object: any): _64.BasicAllowance;
                toJSON(message: _64.BasicAllowance): unknown;
                fromPartial(object: Partial<_64.BasicAllowance>): _64.BasicAllowance;
                fromSDK(object: _64.BasicAllowanceSDKType): _64.BasicAllowance;
                toSDK(message: _64.BasicAllowance): _64.BasicAllowanceSDKType;
                fromAmino(object: _64.BasicAllowanceAmino): _64.BasicAllowance;
                toAmino(message: _64.BasicAllowance): _64.BasicAllowanceAmino;
                fromAminoMsg(object: _64.BasicAllowanceAminoMsg): _64.BasicAllowance;
                toAminoMsg(message: _64.BasicAllowance): _64.BasicAllowanceAminoMsg;
                fromProtoMsg(message: _64.BasicAllowanceProtoMsg): _64.BasicAllowance;
                toProto(message: _64.BasicAllowance): Uint8Array;
                toProtoMsg(message: _64.BasicAllowance): _64.BasicAllowanceProtoMsg;
            };
            PeriodicAllowance: {
                typeUrl: string;
                encode(message: _64.PeriodicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _64.PeriodicAllowance;
                fromJSON(object: any): _64.PeriodicAllowance;
                toJSON(message: _64.PeriodicAllowance): unknown;
                fromPartial(object: Partial<_64.PeriodicAllowance>): _64.PeriodicAllowance;
                fromSDK(object: _64.PeriodicAllowanceSDKType): _64.PeriodicAllowance;
                toSDK(message: _64.PeriodicAllowance): _64.PeriodicAllowanceSDKType;
                fromAmino(object: _64.PeriodicAllowanceAmino): _64.PeriodicAllowance;
                toAmino(message: _64.PeriodicAllowance): _64.PeriodicAllowanceAmino;
                fromAminoMsg(object: _64.PeriodicAllowanceAminoMsg): _64.PeriodicAllowance;
                toAminoMsg(message: _64.PeriodicAllowance): _64.PeriodicAllowanceAminoMsg;
                fromProtoMsg(message: _64.PeriodicAllowanceProtoMsg): _64.PeriodicAllowance;
                toProto(message: _64.PeriodicAllowance): Uint8Array;
                toProtoMsg(message: _64.PeriodicAllowance): _64.PeriodicAllowanceProtoMsg;
            };
            AllowedMsgAllowance: {
                typeUrl: string;
                encode(message: _64.AllowedMsgAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _64.AllowedMsgAllowance;
                fromJSON(object: any): _64.AllowedMsgAllowance;
                toJSON(message: _64.AllowedMsgAllowance): unknown;
                fromPartial(object: Partial<_64.AllowedMsgAllowance>): _64.AllowedMsgAllowance;
                fromSDK(object: _64.AllowedMsgAllowanceSDKType): _64.AllowedMsgAllowance;
                toSDK(message: _64.AllowedMsgAllowance): _64.AllowedMsgAllowanceSDKType;
                fromAmino(object: _64.AllowedMsgAllowanceAmino): _64.AllowedMsgAllowance;
                toAmino(message: _64.AllowedMsgAllowance): _64.AllowedMsgAllowanceAmino;
                fromAminoMsg(object: _64.AllowedMsgAllowanceAminoMsg): _64.AllowedMsgAllowance;
                toAminoMsg(message: _64.AllowedMsgAllowance): _64.AllowedMsgAllowanceAminoMsg;
                fromProtoMsg(message: _64.AllowedMsgAllowanceProtoMsg): _64.AllowedMsgAllowance;
                toProto(message: _64.AllowedMsgAllowance): Uint8Array;
                toProtoMsg(message: _64.AllowedMsgAllowance): _64.AllowedMsgAllowanceProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _64.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _64.Grant;
                fromJSON(object: any): _64.Grant;
                toJSON(message: _64.Grant): unknown;
                fromPartial(object: Partial<_64.Grant>): _64.Grant;
                fromSDK(object: _64.GrantSDKType): _64.Grant;
                toSDK(message: _64.Grant): _64.GrantSDKType;
                fromAmino(object: _64.GrantAmino): _64.Grant;
                toAmino(message: _64.Grant): _64.GrantAmino;
                fromAminoMsg(object: _64.GrantAminoMsg): _64.Grant;
                toAminoMsg(message: _64.Grant): _64.GrantAminoMsg;
                fromProtoMsg(message: _64.GrantProtoMsg): _64.Grant;
                toProto(message: _64.Grant): Uint8Array;
                toProtoMsg(message: _64.Grant): _64.GrantProtoMsg;
            };
        };
    }
    namespace genutil {
        namespace module {
            const v1: {
                protobufPackage: "cosmos.genutil.module.v1";
                Module: {
                    typeUrl: string;
                    encode(_: _68.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _68.Module;
                    fromJSON(_: any): _68.Module;
                    toJSON(_: _68.Module): unknown;
                    fromPartial(_: Partial<_68.Module>): _68.Module;
                    fromSDK(_: _68.ModuleSDKType): _68.Module;
                    toSDK(_: _68.Module): _68.ModuleSDKType;
                    fromAmino(_: _68.ModuleAmino): _68.Module;
                    toAmino(_: _68.Module): _68.ModuleAmino;
                    fromAminoMsg(object: _68.ModuleAminoMsg): _68.Module;
                    toAminoMsg(message: _68.Module): _68.ModuleAminoMsg;
                    fromProtoMsg(message: _68.ModuleProtoMsg): _68.Module;
                    toProto(message: _68.Module): Uint8Array;
                    toProtoMsg(message: _68.Module): _68.ModuleProtoMsg;
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
                    encode(message: _69.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _69.Module;
                    fromJSON(object: any): _69.Module;
                    toJSON(message: _69.Module): unknown;
                    fromPartial(object: Partial<_69.Module>): _69.Module;
                    fromSDK(object: _69.ModuleSDKType): _69.Module;
                    toSDK(message: _69.Module): _69.ModuleSDKType;
                    fromAmino(object: _69.ModuleAmino): _69.Module;
                    toAmino(message: _69.Module): _69.ModuleAmino;
                    fromAminoMsg(object: _69.ModuleAminoMsg): _69.Module;
                    toAminoMsg(message: _69.Module): _69.ModuleAminoMsg;
                    fromProtoMsg(message: _69.ModuleProtoMsg): _69.Module;
                    toProto(message: _69.Module): Uint8Array;
                    toProtoMsg(message: _69.Module): _69.ModuleProtoMsg;
                };
            };
        }
        const v1: {
            Msg: typeof _232.Msg;
            Query: typeof _215.Query;
            QueryClientImpl: typeof _215.QueryClientImpl;
            LCDQueryClient: typeof _197.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _73.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    execLegacyContent(value: _73.MsgExecLegacyContent): {
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
                    updateParams(value: _73.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelProposal(value: _73.MsgCancelProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _73.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _73.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _73.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _73.MsgExecLegacyContent;
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
                    updateParams(value: _73.MsgUpdateParams): {
                        typeUrl: string;
                        value: _73.MsgUpdateParams;
                    };
                    cancelProposal(value: _73.MsgCancelProposal): {
                        typeUrl: string;
                        value: _73.MsgCancelProposal;
                    };
                };
                toJSON: {
                    submitProposal(value: _73.MsgSubmitProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    execLegacyContent(value: _73.MsgExecLegacyContent): {
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
                    updateParams(value: _73.MsgUpdateParams): {
                        typeUrl: string;
                        value: unknown;
                    };
                    cancelProposal(value: _73.MsgCancelProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _73.MsgSubmitProposal;
                    };
                    execLegacyContent(value: any): {
                        typeUrl: string;
                        value: _73.MsgExecLegacyContent;
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
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _73.MsgUpdateParams;
                    };
                    cancelProposal(value: any): {
                        typeUrl: string;
                        value: _73.MsgCancelProposal;
                    };
                };
                fromPartial: {
                    submitProposal(value: _73.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _73.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _73.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _73.MsgExecLegacyContent;
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
                    updateParams(value: _73.MsgUpdateParams): {
                        typeUrl: string;
                        value: _73.MsgUpdateParams;
                    };
                    cancelProposal(value: _73.MsgCancelProposal): {
                        typeUrl: string;
                        value: _73.MsgCancelProposal;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _73.MsgSubmitProposal) => _73.MsgSubmitProposalAmino;
                    fromAmino: (object: _73.MsgSubmitProposalAmino) => _73.MsgSubmitProposal;
                };
                "/cosmos.gov.v1.MsgExecLegacyContent": {
                    aminoType: string;
                    toAmino: (message: _73.MsgExecLegacyContent) => _73.MsgExecLegacyContentAmino;
                    fromAmino: (object: _73.MsgExecLegacyContentAmino) => _73.MsgExecLegacyContent;
                };
                "/cosmos.gov.v1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _73.MsgVote) => _73.MsgVoteAmino;
                    fromAmino: (object: _73.MsgVoteAmino) => _73.MsgVote;
                };
                "/cosmos.gov.v1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _73.MsgVoteWeighted) => _73.MsgVoteWeightedAmino;
                    fromAmino: (object: _73.MsgVoteWeightedAmino) => _73.MsgVoteWeighted;
                };
                "/cosmos.gov.v1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _73.MsgDeposit) => _73.MsgDepositAmino;
                    fromAmino: (object: _73.MsgDepositAmino) => _73.MsgDeposit;
                };
                "/cosmos.gov.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _73.MsgUpdateParams) => _73.MsgUpdateParamsAmino;
                    fromAmino: (object: _73.MsgUpdateParamsAmino) => _73.MsgUpdateParams;
                };
                "/cosmos.gov.v1.MsgCancelProposal": {
                    aminoType: string;
                    toAmino: (message: _73.MsgCancelProposal) => _73.MsgCancelProposalAmino;
                    fromAmino: (object: _73.MsgCancelProposalAmino) => _73.MsgCancelProposal;
                };
            };
            protobufPackage: "cosmos.gov.v1";
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
            MsgExecLegacyContent: {
                typeUrl: string;
                encode(message: _73.MsgExecLegacyContent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _73.MsgExecLegacyContent;
                fromJSON(object: any): _73.MsgExecLegacyContent;
                toJSON(message: _73.MsgExecLegacyContent): unknown;
                fromPartial(object: Partial<_73.MsgExecLegacyContent>): _73.MsgExecLegacyContent;
                fromSDK(object: _73.MsgExecLegacyContentSDKType): _73.MsgExecLegacyContent;
                toSDK(message: _73.MsgExecLegacyContent): _73.MsgExecLegacyContentSDKType;
                fromAmino(object: _73.MsgExecLegacyContentAmino): _73.MsgExecLegacyContent;
                toAmino(message: _73.MsgExecLegacyContent): _73.MsgExecLegacyContentAmino;
                fromAminoMsg(object: _73.MsgExecLegacyContentAminoMsg): _73.MsgExecLegacyContent;
                toAminoMsg(message: _73.MsgExecLegacyContent): _73.MsgExecLegacyContentAminoMsg;
                fromProtoMsg(message: _73.MsgExecLegacyContentProtoMsg): _73.MsgExecLegacyContent;
                toProto(message: _73.MsgExecLegacyContent): Uint8Array;
                toProtoMsg(message: _73.MsgExecLegacyContent): _73.MsgExecLegacyContentProtoMsg;
            };
            MsgExecLegacyContentResponse: {
                typeUrl: string;
                encode(_: _73.MsgExecLegacyContentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _73.MsgExecLegacyContentResponse;
                fromJSON(_: any): _73.MsgExecLegacyContentResponse;
                toJSON(_: _73.MsgExecLegacyContentResponse): unknown;
                fromPartial(_: Partial<_73.MsgExecLegacyContentResponse>): _73.MsgExecLegacyContentResponse;
                fromSDK(_: _73.MsgExecLegacyContentResponseSDKType): _73.MsgExecLegacyContentResponse;
                toSDK(_: _73.MsgExecLegacyContentResponse): _73.MsgExecLegacyContentResponseSDKType;
                fromAmino(_: _73.MsgExecLegacyContentResponseAmino): _73.MsgExecLegacyContentResponse;
                toAmino(_: _73.MsgExecLegacyContentResponse): _73.MsgExecLegacyContentResponseAmino;
                fromAminoMsg(object: _73.MsgExecLegacyContentResponseAminoMsg): _73.MsgExecLegacyContentResponse;
                toAminoMsg(message: _73.MsgExecLegacyContentResponse): _73.MsgExecLegacyContentResponseAminoMsg;
                fromProtoMsg(message: _73.MsgExecLegacyContentResponseProtoMsg): _73.MsgExecLegacyContentResponse;
                toProto(message: _73.MsgExecLegacyContentResponse): Uint8Array;
                toProtoMsg(message: _73.MsgExecLegacyContentResponse): _73.MsgExecLegacyContentResponseProtoMsg;
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
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _73.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _73.MsgUpdateParams;
                fromJSON(object: any): _73.MsgUpdateParams;
                toJSON(message: _73.MsgUpdateParams): unknown;
                fromPartial(object: Partial<_73.MsgUpdateParams>): _73.MsgUpdateParams;
                fromSDK(object: _73.MsgUpdateParamsSDKType): _73.MsgUpdateParams;
                toSDK(message: _73.MsgUpdateParams): _73.MsgUpdateParamsSDKType;
                fromAmino(object: _73.MsgUpdateParamsAmino): _73.MsgUpdateParams;
                toAmino(message: _73.MsgUpdateParams): _73.MsgUpdateParamsAmino;
                fromAminoMsg(object: _73.MsgUpdateParamsAminoMsg): _73.MsgUpdateParams;
                toAminoMsg(message: _73.MsgUpdateParams): _73.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _73.MsgUpdateParamsProtoMsg): _73.MsgUpdateParams;
                toProto(message: _73.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _73.MsgUpdateParams): _73.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _73.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _73.MsgUpdateParamsResponse;
                fromJSON(_: any): _73.MsgUpdateParamsResponse;
                toJSON(_: _73.MsgUpdateParamsResponse): unknown;
                fromPartial(_: Partial<_73.MsgUpdateParamsResponse>): _73.MsgUpdateParamsResponse;
                fromSDK(_: _73.MsgUpdateParamsResponseSDKType): _73.MsgUpdateParamsResponse;
                toSDK(_: _73.MsgUpdateParamsResponse): _73.MsgUpdateParamsResponseSDKType;
                fromAmino(_: _73.MsgUpdateParamsResponseAmino): _73.MsgUpdateParamsResponse;
                toAmino(_: _73.MsgUpdateParamsResponse): _73.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _73.MsgUpdateParamsResponseAminoMsg): _73.MsgUpdateParamsResponse;
                toAminoMsg(message: _73.MsgUpdateParamsResponse): _73.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _73.MsgUpdateParamsResponseProtoMsg): _73.MsgUpdateParamsResponse;
                toProto(message: _73.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _73.MsgUpdateParamsResponse): _73.MsgUpdateParamsResponseProtoMsg;
            };
            MsgCancelProposal: {
                typeUrl: string;
                encode(message: _73.MsgCancelProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _73.MsgCancelProposal;
                fromJSON(object: any): _73.MsgCancelProposal;
                toJSON(message: _73.MsgCancelProposal): unknown;
                fromPartial(object: Partial<_73.MsgCancelProposal>): _73.MsgCancelProposal;
                fromSDK(object: _73.MsgCancelProposalSDKType): _73.MsgCancelProposal;
                toSDK(message: _73.MsgCancelProposal): _73.MsgCancelProposalSDKType;
                fromAmino(object: _73.MsgCancelProposalAmino): _73.MsgCancelProposal;
                toAmino(message: _73.MsgCancelProposal): _73.MsgCancelProposalAmino;
                fromAminoMsg(object: _73.MsgCancelProposalAminoMsg): _73.MsgCancelProposal;
                toAminoMsg(message: _73.MsgCancelProposal): _73.MsgCancelProposalAminoMsg;
                fromProtoMsg(message: _73.MsgCancelProposalProtoMsg): _73.MsgCancelProposal;
                toProto(message: _73.MsgCancelProposal): Uint8Array;
                toProtoMsg(message: _73.MsgCancelProposal): _73.MsgCancelProposalProtoMsg;
            };
            MsgCancelProposalResponse: {
                typeUrl: string;
                encode(message: _73.MsgCancelProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _73.MsgCancelProposalResponse;
                fromJSON(object: any): _73.MsgCancelProposalResponse;
                toJSON(message: _73.MsgCancelProposalResponse): unknown;
                fromPartial(object: Partial<_73.MsgCancelProposalResponse>): _73.MsgCancelProposalResponse;
                fromSDK(object: _73.MsgCancelProposalResponseSDKType): _73.MsgCancelProposalResponse;
                toSDK(message: _73.MsgCancelProposalResponse): _73.MsgCancelProposalResponseSDKType;
                fromAmino(object: _73.MsgCancelProposalResponseAmino): _73.MsgCancelProposalResponse;
                toAmino(message: _73.MsgCancelProposalResponse): _73.MsgCancelProposalResponseAmino;
                fromAminoMsg(object: _73.MsgCancelProposalResponseAminoMsg): _73.MsgCancelProposalResponse;
                toAminoMsg(message: _73.MsgCancelProposalResponse): _73.MsgCancelProposalResponseAminoMsg;
                fromProtoMsg(message: _73.MsgCancelProposalResponseProtoMsg): _73.MsgCancelProposalResponse;
                toProto(message: _73.MsgCancelProposalResponse): Uint8Array;
                toProtoMsg(message: _73.MsgCancelProposalResponse): _73.MsgCancelProposalResponseProtoMsg;
            };
            Cosmos_govv1beta1Content_InterfaceDecoder: (input: import("..").BinaryReader | Uint8Array) => import("../google/protobuf/any").Any | _58.CommunityPoolSpendProposal | _58.CommunityPoolSpendProposalWithDeposit | _99.ParameterChangeProposal | _122.SoftwareUpgradeProposal | _122.CancelSoftwareUpgradeProposal | _75.TextProposal;
            Cosmos_govv1beta1Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_govv1beta1Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryConstitutionRequest: {
                typeUrl: string;
                encode(_: _72.QueryConstitutionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _72.QueryConstitutionRequest;
                fromJSON(_: any): _72.QueryConstitutionRequest;
                toJSON(_: _72.QueryConstitutionRequest): unknown;
                fromPartial(_: Partial<_72.QueryConstitutionRequest>): _72.QueryConstitutionRequest;
                fromSDK(_: _72.QueryConstitutionRequestSDKType): _72.QueryConstitutionRequest;
                toSDK(_: _72.QueryConstitutionRequest): _72.QueryConstitutionRequestSDKType;
                fromAmino(_: _72.QueryConstitutionRequestAmino): _72.QueryConstitutionRequest;
                toAmino(_: _72.QueryConstitutionRequest): _72.QueryConstitutionRequestAmino;
                fromAminoMsg(object: _72.QueryConstitutionRequestAminoMsg): _72.QueryConstitutionRequest;
                toAminoMsg(message: _72.QueryConstitutionRequest): _72.QueryConstitutionRequestAminoMsg;
                fromProtoMsg(message: _72.QueryConstitutionRequestProtoMsg): _72.QueryConstitutionRequest;
                toProto(message: _72.QueryConstitutionRequest): Uint8Array;
                toProtoMsg(message: _72.QueryConstitutionRequest): _72.QueryConstitutionRequestProtoMsg;
            };
            QueryConstitutionResponse: {
                typeUrl: string;
                encode(message: _72.QueryConstitutionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _72.QueryConstitutionResponse;
                fromJSON(object: any): _72.QueryConstitutionResponse;
                toJSON(message: _72.QueryConstitutionResponse): unknown;
                fromPartial(object: Partial<_72.QueryConstitutionResponse>): _72.QueryConstitutionResponse;
                fromSDK(object: _72.QueryConstitutionResponseSDKType): _72.QueryConstitutionResponse;
                toSDK(message: _72.QueryConstitutionResponse): _72.QueryConstitutionResponseSDKType;
                fromAmino(object: _72.QueryConstitutionResponseAmino): _72.QueryConstitutionResponse;
                toAmino(message: _72.QueryConstitutionResponse): _72.QueryConstitutionResponseAmino;
                fromAminoMsg(object: _72.QueryConstitutionResponseAminoMsg): _72.QueryConstitutionResponse;
                toAminoMsg(message: _72.QueryConstitutionResponse): _72.QueryConstitutionResponseAminoMsg;
                fromProtoMsg(message: _72.QueryConstitutionResponseProtoMsg): _72.QueryConstitutionResponse;
                toProto(message: _72.QueryConstitutionResponse): Uint8Array;
                toProtoMsg(message: _72.QueryConstitutionResponse): _72.QueryConstitutionResponseProtoMsg;
            };
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
            Params: {
                typeUrl: string;
                encode(message: _71.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _71.Params;
                fromJSON(object: any): _71.Params;
                toJSON(message: _71.Params): unknown;
                fromPartial(object: Partial<_71.Params>): _71.Params;
                fromSDK(object: _71.ParamsSDKType): _71.Params;
                toSDK(message: _71.Params): _71.ParamsSDKType;
                fromAmino(object: _71.ParamsAmino): _71.Params;
                toAmino(message: _71.Params): _71.ParamsAmino;
                fromAminoMsg(object: _71.ParamsAminoMsg): _71.Params;
                toAminoMsg(message: _71.Params): _71.ParamsAminoMsg;
                fromProtoMsg(message: _71.ParamsProtoMsg): _71.Params;
                toProto(message: _71.Params): Uint8Array;
                toProtoMsg(message: _71.Params): _71.ParamsProtoMsg;
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
        const v1beta1: {
            Msg: typeof _233.Msg;
            Query: typeof _216.Query;
            QueryClientImpl: typeof _216.QueryClientImpl;
            LCDQueryClient: typeof _198.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _77.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _77.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _77.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _77.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _77.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _77.MsgSubmitProposal;
                    };
                    vote(value: _77.MsgVote): {
                        typeUrl: string;
                        value: _77.MsgVote;
                    };
                    voteWeighted(value: _77.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _77.MsgVoteWeighted;
                    };
                    deposit(value: _77.MsgDeposit): {
                        typeUrl: string;
                        value: _77.MsgDeposit;
                    };
                };
                toJSON: {
                    submitProposal(value: _77.MsgSubmitProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    vote(value: _77.MsgVote): {
                        typeUrl: string;
                        value: unknown;
                    };
                    voteWeighted(value: _77.MsgVoteWeighted): {
                        typeUrl: string;
                        value: unknown;
                    };
                    deposit(value: _77.MsgDeposit): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _77.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _77.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _77.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _77.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _77.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _77.MsgSubmitProposal;
                    };
                    vote(value: _77.MsgVote): {
                        typeUrl: string;
                        value: _77.MsgVote;
                    };
                    voteWeighted(value: _77.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _77.MsgVoteWeighted;
                    };
                    deposit(value: _77.MsgDeposit): {
                        typeUrl: string;
                        value: _77.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _77.MsgSubmitProposal) => _77.MsgSubmitProposalAmino;
                    fromAmino: (object: _77.MsgSubmitProposalAmino) => _77.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _77.MsgVote) => _77.MsgVoteAmino;
                    fromAmino: (object: _77.MsgVoteAmino) => _77.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _77.MsgVoteWeighted) => _77.MsgVoteWeightedAmino;
                    fromAmino: (object: _77.MsgVoteWeightedAmino) => _77.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _77.MsgDeposit) => _77.MsgDepositAmino;
                    fromAmino: (object: _77.MsgDepositAmino) => _77.MsgDeposit;
                };
            };
            protobufPackage: "cosmos.gov.v1beta1";
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _77.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _77.MsgSubmitProposal;
                fromJSON(object: any): _77.MsgSubmitProposal;
                toJSON(message: _77.MsgSubmitProposal): unknown;
                fromPartial(object: Partial<_77.MsgSubmitProposal>): _77.MsgSubmitProposal;
                fromSDK(object: _77.MsgSubmitProposalSDKType): _77.MsgSubmitProposal;
                toSDK(message: _77.MsgSubmitProposal): _77.MsgSubmitProposalSDKType;
                fromAmino(object: _77.MsgSubmitProposalAmino): _77.MsgSubmitProposal;
                toAmino(message: _77.MsgSubmitProposal): _77.MsgSubmitProposalAmino;
                fromAminoMsg(object: _77.MsgSubmitProposalAminoMsg): _77.MsgSubmitProposal;
                toAminoMsg(message: _77.MsgSubmitProposal): _77.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _77.MsgSubmitProposalProtoMsg): _77.MsgSubmitProposal;
                toProto(message: _77.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _77.MsgSubmitProposal): _77.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _77.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _77.MsgSubmitProposalResponse;
                fromJSON(object: any): _77.MsgSubmitProposalResponse;
                toJSON(message: _77.MsgSubmitProposalResponse): unknown;
                fromPartial(object: Partial<_77.MsgSubmitProposalResponse>): _77.MsgSubmitProposalResponse;
                fromSDK(object: _77.MsgSubmitProposalResponseSDKType): _77.MsgSubmitProposalResponse;
                toSDK(message: _77.MsgSubmitProposalResponse): _77.MsgSubmitProposalResponseSDKType;
                fromAmino(object: _77.MsgSubmitProposalResponseAmino): _77.MsgSubmitProposalResponse;
                toAmino(message: _77.MsgSubmitProposalResponse): _77.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _77.MsgSubmitProposalResponseAminoMsg): _77.MsgSubmitProposalResponse;
                toAminoMsg(message: _77.MsgSubmitProposalResponse): _77.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _77.MsgSubmitProposalResponseProtoMsg): _77.MsgSubmitProposalResponse;
                toProto(message: _77.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _77.MsgSubmitProposalResponse): _77.MsgSubmitProposalResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _77.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _77.MsgVote;
                fromJSON(object: any): _77.MsgVote;
                toJSON(message: _77.MsgVote): unknown;
                fromPartial(object: Partial<_77.MsgVote>): _77.MsgVote;
                fromSDK(object: _77.MsgVoteSDKType): _77.MsgVote;
                toSDK(message: _77.MsgVote): _77.MsgVoteSDKType;
                fromAmino(object: _77.MsgVoteAmino): _77.MsgVote;
                toAmino(message: _77.MsgVote): _77.MsgVoteAmino;
                fromAminoMsg(object: _77.MsgVoteAminoMsg): _77.MsgVote;
                toAminoMsg(message: _77.MsgVote): _77.MsgVoteAminoMsg;
                fromProtoMsg(message: _77.MsgVoteProtoMsg): _77.MsgVote;
                toProto(message: _77.MsgVote): Uint8Array;
                toProtoMsg(message: _77.MsgVote): _77.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _77.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _77.MsgVoteResponse;
                fromJSON(_: any): _77.MsgVoteResponse;
                toJSON(_: _77.MsgVoteResponse): unknown;
                fromPartial(_: Partial<_77.MsgVoteResponse>): _77.MsgVoteResponse;
                fromSDK(_: _77.MsgVoteResponseSDKType): _77.MsgVoteResponse;
                toSDK(_: _77.MsgVoteResponse): _77.MsgVoteResponseSDKType;
                fromAmino(_: _77.MsgVoteResponseAmino): _77.MsgVoteResponse;
                toAmino(_: _77.MsgVoteResponse): _77.MsgVoteResponseAmino;
                fromAminoMsg(object: _77.MsgVoteResponseAminoMsg): _77.MsgVoteResponse;
                toAminoMsg(message: _77.MsgVoteResponse): _77.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _77.MsgVoteResponseProtoMsg): _77.MsgVoteResponse;
                toProto(message: _77.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _77.MsgVoteResponse): _77.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                typeUrl: string;
                encode(message: _77.MsgVoteWeighted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _77.MsgVoteWeighted;
                fromJSON(object: any): _77.MsgVoteWeighted;
                toJSON(message: _77.MsgVoteWeighted): unknown;
                fromPartial(object: Partial<_77.MsgVoteWeighted>): _77.MsgVoteWeighted;
                fromSDK(object: _77.MsgVoteWeightedSDKType): _77.MsgVoteWeighted;
                toSDK(message: _77.MsgVoteWeighted): _77.MsgVoteWeightedSDKType;
                fromAmino(object: _77.MsgVoteWeightedAmino): _77.MsgVoteWeighted;
                toAmino(message: _77.MsgVoteWeighted): _77.MsgVoteWeightedAmino;
                fromAminoMsg(object: _77.MsgVoteWeightedAminoMsg): _77.MsgVoteWeighted;
                toAminoMsg(message: _77.MsgVoteWeighted): _77.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _77.MsgVoteWeightedProtoMsg): _77.MsgVoteWeighted;
                toProto(message: _77.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _77.MsgVoteWeighted): _77.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                typeUrl: string;
                encode(_: _77.MsgVoteWeightedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _77.MsgVoteWeightedResponse;
                fromJSON(_: any): _77.MsgVoteWeightedResponse;
                toJSON(_: _77.MsgVoteWeightedResponse): unknown;
                fromPartial(_: Partial<_77.MsgVoteWeightedResponse>): _77.MsgVoteWeightedResponse;
                fromSDK(_: _77.MsgVoteWeightedResponseSDKType): _77.MsgVoteWeightedResponse;
                toSDK(_: _77.MsgVoteWeightedResponse): _77.MsgVoteWeightedResponseSDKType;
                fromAmino(_: _77.MsgVoteWeightedResponseAmino): _77.MsgVoteWeightedResponse;
                toAmino(_: _77.MsgVoteWeightedResponse): _77.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _77.MsgVoteWeightedResponseAminoMsg): _77.MsgVoteWeightedResponse;
                toAminoMsg(message: _77.MsgVoteWeightedResponse): _77.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _77.MsgVoteWeightedResponseProtoMsg): _77.MsgVoteWeightedResponse;
                toProto(message: _77.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _77.MsgVoteWeightedResponse): _77.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _77.MsgDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _77.MsgDeposit;
                fromJSON(object: any): _77.MsgDeposit;
                toJSON(message: _77.MsgDeposit): unknown;
                fromPartial(object: Partial<_77.MsgDeposit>): _77.MsgDeposit;
                fromSDK(object: _77.MsgDepositSDKType): _77.MsgDeposit;
                toSDK(message: _77.MsgDeposit): _77.MsgDepositSDKType;
                fromAmino(object: _77.MsgDepositAmino): _77.MsgDeposit;
                toAmino(message: _77.MsgDeposit): _77.MsgDepositAmino;
                fromAminoMsg(object: _77.MsgDepositAminoMsg): _77.MsgDeposit;
                toAminoMsg(message: _77.MsgDeposit): _77.MsgDepositAminoMsg;
                fromProtoMsg(message: _77.MsgDepositProtoMsg): _77.MsgDeposit;
                toProto(message: _77.MsgDeposit): Uint8Array;
                toProtoMsg(message: _77.MsgDeposit): _77.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(_: _77.MsgDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _77.MsgDepositResponse;
                fromJSON(_: any): _77.MsgDepositResponse;
                toJSON(_: _77.MsgDepositResponse): unknown;
                fromPartial(_: Partial<_77.MsgDepositResponse>): _77.MsgDepositResponse;
                fromSDK(_: _77.MsgDepositResponseSDKType): _77.MsgDepositResponse;
                toSDK(_: _77.MsgDepositResponse): _77.MsgDepositResponseSDKType;
                fromAmino(_: _77.MsgDepositResponseAmino): _77.MsgDepositResponse;
                toAmino(_: _77.MsgDepositResponse): _77.MsgDepositResponseAmino;
                fromAminoMsg(object: _77.MsgDepositResponseAminoMsg): _77.MsgDepositResponse;
                toAminoMsg(message: _77.MsgDepositResponse): _77.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _77.MsgDepositResponseProtoMsg): _77.MsgDepositResponse;
                toProto(message: _77.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _77.MsgDepositResponse): _77.MsgDepositResponseProtoMsg;
            };
            Cosmos_govv1beta1Content_InterfaceDecoder: (input: import("..").BinaryReader | Uint8Array) => import("../google/protobuf/any").Any | _58.CommunityPoolSpendProposal | _58.CommunityPoolSpendProposalWithDeposit | _99.ParameterChangeProposal | _122.SoftwareUpgradeProposal | _122.CancelSoftwareUpgradeProposal | _75.TextProposal;
            Cosmos_govv1beta1Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_govv1beta1Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _76.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _76.QueryProposalRequest;
                fromJSON(object: any): _76.QueryProposalRequest;
                toJSON(message: _76.QueryProposalRequest): unknown;
                fromPartial(object: Partial<_76.QueryProposalRequest>): _76.QueryProposalRequest;
                fromSDK(object: _76.QueryProposalRequestSDKType): _76.QueryProposalRequest;
                toSDK(message: _76.QueryProposalRequest): _76.QueryProposalRequestSDKType;
                fromAmino(object: _76.QueryProposalRequestAmino): _76.QueryProposalRequest;
                toAmino(message: _76.QueryProposalRequest): _76.QueryProposalRequestAmino;
                fromAminoMsg(object: _76.QueryProposalRequestAminoMsg): _76.QueryProposalRequest;
                toAminoMsg(message: _76.QueryProposalRequest): _76.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _76.QueryProposalRequestProtoMsg): _76.QueryProposalRequest;
                toProto(message: _76.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _76.QueryProposalRequest): _76.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _76.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _76.QueryProposalResponse;
                fromJSON(object: any): _76.QueryProposalResponse;
                toJSON(message: _76.QueryProposalResponse): unknown;
                fromPartial(object: Partial<_76.QueryProposalResponse>): _76.QueryProposalResponse;
                fromSDK(object: _76.QueryProposalResponseSDKType): _76.QueryProposalResponse;
                toSDK(message: _76.QueryProposalResponse): _76.QueryProposalResponseSDKType;
                fromAmino(object: _76.QueryProposalResponseAmino): _76.QueryProposalResponse;
                toAmino(message: _76.QueryProposalResponse): _76.QueryProposalResponseAmino;
                fromAminoMsg(object: _76.QueryProposalResponseAminoMsg): _76.QueryProposalResponse;
                toAminoMsg(message: _76.QueryProposalResponse): _76.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _76.QueryProposalResponseProtoMsg): _76.QueryProposalResponse;
                toProto(message: _76.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _76.QueryProposalResponse): _76.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                typeUrl: string;
                encode(message: _76.QueryProposalsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _76.QueryProposalsRequest;
                fromJSON(object: any): _76.QueryProposalsRequest;
                toJSON(message: _76.QueryProposalsRequest): unknown;
                fromPartial(object: Partial<_76.QueryProposalsRequest>): _76.QueryProposalsRequest;
                fromSDK(object: _76.QueryProposalsRequestSDKType): _76.QueryProposalsRequest;
                toSDK(message: _76.QueryProposalsRequest): _76.QueryProposalsRequestSDKType;
                fromAmino(object: _76.QueryProposalsRequestAmino): _76.QueryProposalsRequest;
                toAmino(message: _76.QueryProposalsRequest): _76.QueryProposalsRequestAmino;
                fromAminoMsg(object: _76.QueryProposalsRequestAminoMsg): _76.QueryProposalsRequest;
                toAminoMsg(message: _76.QueryProposalsRequest): _76.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _76.QueryProposalsRequestProtoMsg): _76.QueryProposalsRequest;
                toProto(message: _76.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _76.QueryProposalsRequest): _76.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                typeUrl: string;
                encode(message: _76.QueryProposalsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _76.QueryProposalsResponse;
                fromJSON(object: any): _76.QueryProposalsResponse;
                toJSON(message: _76.QueryProposalsResponse): unknown;
                fromPartial(object: Partial<_76.QueryProposalsResponse>): _76.QueryProposalsResponse;
                fromSDK(object: _76.QueryProposalsResponseSDKType): _76.QueryProposalsResponse;
                toSDK(message: _76.QueryProposalsResponse): _76.QueryProposalsResponseSDKType;
                fromAmino(object: _76.QueryProposalsResponseAmino): _76.QueryProposalsResponse;
                toAmino(message: _76.QueryProposalsResponse): _76.QueryProposalsResponseAmino;
                fromAminoMsg(object: _76.QueryProposalsResponseAminoMsg): _76.QueryProposalsResponse;
                toAminoMsg(message: _76.QueryProposalsResponse): _76.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _76.QueryProposalsResponseProtoMsg): _76.QueryProposalsResponse;
                toProto(message: _76.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _76.QueryProposalsResponse): _76.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                typeUrl: string;
                encode(message: _76.QueryVoteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _76.QueryVoteRequest;
                fromJSON(object: any): _76.QueryVoteRequest;
                toJSON(message: _76.QueryVoteRequest): unknown;
                fromPartial(object: Partial<_76.QueryVoteRequest>): _76.QueryVoteRequest;
                fromSDK(object: _76.QueryVoteRequestSDKType): _76.QueryVoteRequest;
                toSDK(message: _76.QueryVoteRequest): _76.QueryVoteRequestSDKType;
                fromAmino(object: _76.QueryVoteRequestAmino): _76.QueryVoteRequest;
                toAmino(message: _76.QueryVoteRequest): _76.QueryVoteRequestAmino;
                fromAminoMsg(object: _76.QueryVoteRequestAminoMsg): _76.QueryVoteRequest;
                toAminoMsg(message: _76.QueryVoteRequest): _76.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _76.QueryVoteRequestProtoMsg): _76.QueryVoteRequest;
                toProto(message: _76.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _76.QueryVoteRequest): _76.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                typeUrl: string;
                encode(message: _76.QueryVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _76.QueryVoteResponse;
                fromJSON(object: any): _76.QueryVoteResponse;
                toJSON(message: _76.QueryVoteResponse): unknown;
                fromPartial(object: Partial<_76.QueryVoteResponse>): _76.QueryVoteResponse;
                fromSDK(object: _76.QueryVoteResponseSDKType): _76.QueryVoteResponse;
                toSDK(message: _76.QueryVoteResponse): _76.QueryVoteResponseSDKType;
                fromAmino(object: _76.QueryVoteResponseAmino): _76.QueryVoteResponse;
                toAmino(message: _76.QueryVoteResponse): _76.QueryVoteResponseAmino;
                fromAminoMsg(object: _76.QueryVoteResponseAminoMsg): _76.QueryVoteResponse;
                toAminoMsg(message: _76.QueryVoteResponse): _76.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _76.QueryVoteResponseProtoMsg): _76.QueryVoteResponse;
                toProto(message: _76.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _76.QueryVoteResponse): _76.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                typeUrl: string;
                encode(message: _76.QueryVotesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _76.QueryVotesRequest;
                fromJSON(object: any): _76.QueryVotesRequest;
                toJSON(message: _76.QueryVotesRequest): unknown;
                fromPartial(object: Partial<_76.QueryVotesRequest>): _76.QueryVotesRequest;
                fromSDK(object: _76.QueryVotesRequestSDKType): _76.QueryVotesRequest;
                toSDK(message: _76.QueryVotesRequest): _76.QueryVotesRequestSDKType;
                fromAmino(object: _76.QueryVotesRequestAmino): _76.QueryVotesRequest;
                toAmino(message: _76.QueryVotesRequest): _76.QueryVotesRequestAmino;
                fromAminoMsg(object: _76.QueryVotesRequestAminoMsg): _76.QueryVotesRequest;
                toAminoMsg(message: _76.QueryVotesRequest): _76.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _76.QueryVotesRequestProtoMsg): _76.QueryVotesRequest;
                toProto(message: _76.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _76.QueryVotesRequest): _76.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                typeUrl: string;
                encode(message: _76.QueryVotesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _76.QueryVotesResponse;
                fromJSON(object: any): _76.QueryVotesResponse;
                toJSON(message: _76.QueryVotesResponse): unknown;
                fromPartial(object: Partial<_76.QueryVotesResponse>): _76.QueryVotesResponse;
                fromSDK(object: _76.QueryVotesResponseSDKType): _76.QueryVotesResponse;
                toSDK(message: _76.QueryVotesResponse): _76.QueryVotesResponseSDKType;
                fromAmino(object: _76.QueryVotesResponseAmino): _76.QueryVotesResponse;
                toAmino(message: _76.QueryVotesResponse): _76.QueryVotesResponseAmino;
                fromAminoMsg(object: _76.QueryVotesResponseAminoMsg): _76.QueryVotesResponse;
                toAminoMsg(message: _76.QueryVotesResponse): _76.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _76.QueryVotesResponseProtoMsg): _76.QueryVotesResponse;
                toProto(message: _76.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _76.QueryVotesResponse): _76.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _76.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _76.QueryParamsRequest;
                fromJSON(object: any): _76.QueryParamsRequest;
                toJSON(message: _76.QueryParamsRequest): unknown;
                fromPartial(object: Partial<_76.QueryParamsRequest>): _76.QueryParamsRequest;
                fromSDK(object: _76.QueryParamsRequestSDKType): _76.QueryParamsRequest;
                toSDK(message: _76.QueryParamsRequest): _76.QueryParamsRequestSDKType;
                fromAmino(object: _76.QueryParamsRequestAmino): _76.QueryParamsRequest;
                toAmino(message: _76.QueryParamsRequest): _76.QueryParamsRequestAmino;
                fromAminoMsg(object: _76.QueryParamsRequestAminoMsg): _76.QueryParamsRequest;
                toAminoMsg(message: _76.QueryParamsRequest): _76.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _76.QueryParamsRequestProtoMsg): _76.QueryParamsRequest;
                toProto(message: _76.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _76.QueryParamsRequest): _76.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _76.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _76.QueryParamsResponse;
                fromJSON(object: any): _76.QueryParamsResponse;
                toJSON(message: _76.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_76.QueryParamsResponse>): _76.QueryParamsResponse;
                fromSDK(object: _76.QueryParamsResponseSDKType): _76.QueryParamsResponse;
                toSDK(message: _76.QueryParamsResponse): _76.QueryParamsResponseSDKType;
                fromAmino(object: _76.QueryParamsResponseAmino): _76.QueryParamsResponse;
                toAmino(message: _76.QueryParamsResponse): _76.QueryParamsResponseAmino;
                fromAminoMsg(object: _76.QueryParamsResponseAminoMsg): _76.QueryParamsResponse;
                toAminoMsg(message: _76.QueryParamsResponse): _76.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _76.QueryParamsResponseProtoMsg): _76.QueryParamsResponse;
                toProto(message: _76.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _76.QueryParamsResponse): _76.QueryParamsResponseProtoMsg;
            };
            QueryDepositRequest: {
                typeUrl: string;
                encode(message: _76.QueryDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _76.QueryDepositRequest;
                fromJSON(object: any): _76.QueryDepositRequest;
                toJSON(message: _76.QueryDepositRequest): unknown;
                fromPartial(object: Partial<_76.QueryDepositRequest>): _76.QueryDepositRequest;
                fromSDK(object: _76.QueryDepositRequestSDKType): _76.QueryDepositRequest;
                toSDK(message: _76.QueryDepositRequest): _76.QueryDepositRequestSDKType;
                fromAmino(object: _76.QueryDepositRequestAmino): _76.QueryDepositRequest;
                toAmino(message: _76.QueryDepositRequest): _76.QueryDepositRequestAmino;
                fromAminoMsg(object: _76.QueryDepositRequestAminoMsg): _76.QueryDepositRequest;
                toAminoMsg(message: _76.QueryDepositRequest): _76.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _76.QueryDepositRequestProtoMsg): _76.QueryDepositRequest;
                toProto(message: _76.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _76.QueryDepositRequest): _76.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                typeUrl: string;
                encode(message: _76.QueryDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _76.QueryDepositResponse;
                fromJSON(object: any): _76.QueryDepositResponse;
                toJSON(message: _76.QueryDepositResponse): unknown;
                fromPartial(object: Partial<_76.QueryDepositResponse>): _76.QueryDepositResponse;
                fromSDK(object: _76.QueryDepositResponseSDKType): _76.QueryDepositResponse;
                toSDK(message: _76.QueryDepositResponse): _76.QueryDepositResponseSDKType;
                fromAmino(object: _76.QueryDepositResponseAmino): _76.QueryDepositResponse;
                toAmino(message: _76.QueryDepositResponse): _76.QueryDepositResponseAmino;
                fromAminoMsg(object: _76.QueryDepositResponseAminoMsg): _76.QueryDepositResponse;
                toAminoMsg(message: _76.QueryDepositResponse): _76.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _76.QueryDepositResponseProtoMsg): _76.QueryDepositResponse;
                toProto(message: _76.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _76.QueryDepositResponse): _76.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                encode(message: _76.QueryDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _76.QueryDepositsRequest;
                fromJSON(object: any): _76.QueryDepositsRequest;
                toJSON(message: _76.QueryDepositsRequest): unknown;
                fromPartial(object: Partial<_76.QueryDepositsRequest>): _76.QueryDepositsRequest;
                fromSDK(object: _76.QueryDepositsRequestSDKType): _76.QueryDepositsRequest;
                toSDK(message: _76.QueryDepositsRequest): _76.QueryDepositsRequestSDKType;
                fromAmino(object: _76.QueryDepositsRequestAmino): _76.QueryDepositsRequest;
                toAmino(message: _76.QueryDepositsRequest): _76.QueryDepositsRequestAmino;
                fromAminoMsg(object: _76.QueryDepositsRequestAminoMsg): _76.QueryDepositsRequest;
                toAminoMsg(message: _76.QueryDepositsRequest): _76.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _76.QueryDepositsRequestProtoMsg): _76.QueryDepositsRequest;
                toProto(message: _76.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _76.QueryDepositsRequest): _76.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                encode(message: _76.QueryDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _76.QueryDepositsResponse;
                fromJSON(object: any): _76.QueryDepositsResponse;
                toJSON(message: _76.QueryDepositsResponse): unknown;
                fromPartial(object: Partial<_76.QueryDepositsResponse>): _76.QueryDepositsResponse;
                fromSDK(object: _76.QueryDepositsResponseSDKType): _76.QueryDepositsResponse;
                toSDK(message: _76.QueryDepositsResponse): _76.QueryDepositsResponseSDKType;
                fromAmino(object: _76.QueryDepositsResponseAmino): _76.QueryDepositsResponse;
                toAmino(message: _76.QueryDepositsResponse): _76.QueryDepositsResponseAmino;
                fromAminoMsg(object: _76.QueryDepositsResponseAminoMsg): _76.QueryDepositsResponse;
                toAminoMsg(message: _76.QueryDepositsResponse): _76.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _76.QueryDepositsResponseProtoMsg): _76.QueryDepositsResponse;
                toProto(message: _76.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _76.QueryDepositsResponse): _76.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _76.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _76.QueryTallyResultRequest;
                fromJSON(object: any): _76.QueryTallyResultRequest;
                toJSON(message: _76.QueryTallyResultRequest): unknown;
                fromPartial(object: Partial<_76.QueryTallyResultRequest>): _76.QueryTallyResultRequest;
                fromSDK(object: _76.QueryTallyResultRequestSDKType): _76.QueryTallyResultRequest;
                toSDK(message: _76.QueryTallyResultRequest): _76.QueryTallyResultRequestSDKType;
                fromAmino(object: _76.QueryTallyResultRequestAmino): _76.QueryTallyResultRequest;
                toAmino(message: _76.QueryTallyResultRequest): _76.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _76.QueryTallyResultRequestAminoMsg): _76.QueryTallyResultRequest;
                toAminoMsg(message: _76.QueryTallyResultRequest): _76.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _76.QueryTallyResultRequestProtoMsg): _76.QueryTallyResultRequest;
                toProto(message: _76.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _76.QueryTallyResultRequest): _76.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _76.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _76.QueryTallyResultResponse;
                fromJSON(object: any): _76.QueryTallyResultResponse;
                toJSON(message: _76.QueryTallyResultResponse): unknown;
                fromPartial(object: Partial<_76.QueryTallyResultResponse>): _76.QueryTallyResultResponse;
                fromSDK(object: _76.QueryTallyResultResponseSDKType): _76.QueryTallyResultResponse;
                toSDK(message: _76.QueryTallyResultResponse): _76.QueryTallyResultResponseSDKType;
                fromAmino(object: _76.QueryTallyResultResponseAmino): _76.QueryTallyResultResponse;
                toAmino(message: _76.QueryTallyResultResponse): _76.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _76.QueryTallyResultResponseAminoMsg): _76.QueryTallyResultResponse;
                toAminoMsg(message: _76.QueryTallyResultResponse): _76.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _76.QueryTallyResultResponseProtoMsg): _76.QueryTallyResultResponse;
                toProto(message: _76.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _76.QueryTallyResultResponse): _76.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _75.VoteOption;
            voteOptionToJSON(object: _75.VoteOption): string;
            proposalStatusFromJSON(object: any): _75.ProposalStatus;
            proposalStatusToJSON(object: _75.ProposalStatus): string;
            VoteOption: typeof _75.VoteOption;
            VoteOptionSDKType: typeof _75.VoteOption;
            VoteOptionAmino: typeof _75.VoteOption;
            ProposalStatus: typeof _75.ProposalStatus;
            ProposalStatusSDKType: typeof _75.ProposalStatus;
            ProposalStatusAmino: typeof _75.ProposalStatus;
            WeightedVoteOption: {
                typeUrl: string;
                encode(message: _75.WeightedVoteOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _75.WeightedVoteOption;
                fromJSON(object: any): _75.WeightedVoteOption;
                toJSON(message: _75.WeightedVoteOption): unknown;
                fromPartial(object: Partial<_75.WeightedVoteOption>): _75.WeightedVoteOption;
                fromSDK(object: _75.WeightedVoteOptionSDKType): _75.WeightedVoteOption;
                toSDK(message: _75.WeightedVoteOption): _75.WeightedVoteOptionSDKType;
                fromAmino(object: _75.WeightedVoteOptionAmino): _75.WeightedVoteOption;
                toAmino(message: _75.WeightedVoteOption): _75.WeightedVoteOptionAmino;
                fromAminoMsg(object: _75.WeightedVoteOptionAminoMsg): _75.WeightedVoteOption;
                toAminoMsg(message: _75.WeightedVoteOption): _75.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _75.WeightedVoteOptionProtoMsg): _75.WeightedVoteOption;
                toProto(message: _75.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _75.WeightedVoteOption): _75.WeightedVoteOptionProtoMsg;
            };
            TextProposal: {
                typeUrl: string;
                encode(message: _75.TextProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _75.TextProposal;
                fromJSON(object: any): _75.TextProposal;
                toJSON(message: _75.TextProposal): unknown;
                fromPartial(object: Partial<_75.TextProposal>): _75.TextProposal;
                fromSDK(object: _75.TextProposalSDKType): _75.TextProposal;
                toSDK(message: _75.TextProposal): _75.TextProposalSDKType;
                fromAmino(object: _75.TextProposalAmino): _75.TextProposal;
                toAmino(message: _75.TextProposal): _75.TextProposalAmino;
                fromAminoMsg(object: _75.TextProposalAminoMsg): _75.TextProposal;
                toAminoMsg(message: _75.TextProposal): _75.TextProposalAminoMsg;
                fromProtoMsg(message: _75.TextProposalProtoMsg): _75.TextProposal;
                toProto(message: _75.TextProposal): Uint8Array;
                toProtoMsg(message: _75.TextProposal): _75.TextProposalProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                encode(message: _75.Deposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _75.Deposit;
                fromJSON(object: any): _75.Deposit;
                toJSON(message: _75.Deposit): unknown;
                fromPartial(object: Partial<_75.Deposit>): _75.Deposit;
                fromSDK(object: _75.DepositSDKType): _75.Deposit;
                toSDK(message: _75.Deposit): _75.DepositSDKType;
                fromAmino(object: _75.DepositAmino): _75.Deposit;
                toAmino(message: _75.Deposit): _75.DepositAmino;
                fromAminoMsg(object: _75.DepositAminoMsg): _75.Deposit;
                toAminoMsg(message: _75.Deposit): _75.DepositAminoMsg;
                fromProtoMsg(message: _75.DepositProtoMsg): _75.Deposit;
                toProto(message: _75.Deposit): Uint8Array;
                toProtoMsg(message: _75.Deposit): _75.DepositProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _75.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _75.Proposal;
                fromJSON(object: any): _75.Proposal;
                toJSON(message: _75.Proposal): unknown;
                fromPartial(object: Partial<_75.Proposal>): _75.Proposal;
                fromSDK(object: _75.ProposalSDKType): _75.Proposal;
                toSDK(message: _75.Proposal): _75.ProposalSDKType;
                fromAmino(object: _75.ProposalAmino): _75.Proposal;
                toAmino(message: _75.Proposal): _75.ProposalAmino;
                fromAminoMsg(object: _75.ProposalAminoMsg): _75.Proposal;
                toAminoMsg(message: _75.Proposal): _75.ProposalAminoMsg;
                fromProtoMsg(message: _75.ProposalProtoMsg): _75.Proposal;
                toProto(message: _75.Proposal): Uint8Array;
                toProtoMsg(message: _75.Proposal): _75.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _75.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _75.TallyResult;
                fromJSON(object: any): _75.TallyResult;
                toJSON(message: _75.TallyResult): unknown;
                fromPartial(object: Partial<_75.TallyResult>): _75.TallyResult;
                fromSDK(object: _75.TallyResultSDKType): _75.TallyResult;
                toSDK(message: _75.TallyResult): _75.TallyResultSDKType;
                fromAmino(object: _75.TallyResultAmino): _75.TallyResult;
                toAmino(message: _75.TallyResult): _75.TallyResultAmino;
                fromAminoMsg(object: _75.TallyResultAminoMsg): _75.TallyResult;
                toAminoMsg(message: _75.TallyResult): _75.TallyResultAminoMsg;
                fromProtoMsg(message: _75.TallyResultProtoMsg): _75.TallyResult;
                toProto(message: _75.TallyResult): Uint8Array;
                toProtoMsg(message: _75.TallyResult): _75.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _75.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _75.Vote;
                fromJSON(object: any): _75.Vote;
                toJSON(message: _75.Vote): unknown;
                fromPartial(object: Partial<_75.Vote>): _75.Vote;
                fromSDK(object: _75.VoteSDKType): _75.Vote;
                toSDK(message: _75.Vote): _75.VoteSDKType;
                fromAmino(object: _75.VoteAmino): _75.Vote;
                toAmino(message: _75.Vote): _75.VoteAmino;
                fromAminoMsg(object: _75.VoteAminoMsg): _75.Vote;
                toAminoMsg(message: _75.Vote): _75.VoteAminoMsg;
                fromProtoMsg(message: _75.VoteProtoMsg): _75.Vote;
                toProto(message: _75.Vote): Uint8Array;
                toProtoMsg(message: _75.Vote): _75.VoteProtoMsg;
            };
            DepositParams: {
                typeUrl: string;
                encode(message: _75.DepositParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _75.DepositParams;
                fromJSON(object: any): _75.DepositParams;
                toJSON(message: _75.DepositParams): unknown;
                fromPartial(object: Partial<_75.DepositParams>): _75.DepositParams;
                fromSDK(object: _75.DepositParamsSDKType): _75.DepositParams;
                toSDK(message: _75.DepositParams): _75.DepositParamsSDKType;
                fromAmino(object: _75.DepositParamsAmino): _75.DepositParams;
                toAmino(message: _75.DepositParams): _75.DepositParamsAmino;
                fromAminoMsg(object: _75.DepositParamsAminoMsg): _75.DepositParams;
                toAminoMsg(message: _75.DepositParams): _75.DepositParamsAminoMsg;
                fromProtoMsg(message: _75.DepositParamsProtoMsg): _75.DepositParams;
                toProto(message: _75.DepositParams): Uint8Array;
                toProtoMsg(message: _75.DepositParams): _75.DepositParamsProtoMsg;
            };
            VotingParams: {
                typeUrl: string;
                encode(message: _75.VotingParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _75.VotingParams;
                fromJSON(object: any): _75.VotingParams;
                toJSON(message: _75.VotingParams): unknown;
                fromPartial(object: Partial<_75.VotingParams>): _75.VotingParams;
                fromSDK(object: _75.VotingParamsSDKType): _75.VotingParams;
                toSDK(message: _75.VotingParams): _75.VotingParamsSDKType;
                fromAmino(object: _75.VotingParamsAmino): _75.VotingParams;
                toAmino(message: _75.VotingParams): _75.VotingParamsAmino;
                fromAminoMsg(object: _75.VotingParamsAminoMsg): _75.VotingParams;
                toAminoMsg(message: _75.VotingParams): _75.VotingParamsAminoMsg;
                fromProtoMsg(message: _75.VotingParamsProtoMsg): _75.VotingParams;
                toProto(message: _75.VotingParams): Uint8Array;
                toProtoMsg(message: _75.VotingParams): _75.VotingParamsProtoMsg;
            };
            TallyParams: {
                typeUrl: string;
                encode(message: _75.TallyParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _75.TallyParams;
                fromJSON(object: any): _75.TallyParams;
                toJSON(message: _75.TallyParams): unknown;
                fromPartial(object: Partial<_75.TallyParams>): _75.TallyParams;
                fromSDK(object: _75.TallyParamsSDKType): _75.TallyParams;
                toSDK(message: _75.TallyParams): _75.TallyParamsSDKType;
                fromAmino(object: _75.TallyParamsAmino): _75.TallyParams;
                toAmino(message: _75.TallyParams): _75.TallyParamsAmino;
                fromAminoMsg(object: _75.TallyParamsAminoMsg): _75.TallyParams;
                toAminoMsg(message: _75.TallyParams): _75.TallyParamsAminoMsg;
                fromProtoMsg(message: _75.TallyParamsProtoMsg): _75.TallyParams;
                toProto(message: _75.TallyParams): Uint8Array;
                toProtoMsg(message: _75.TallyParams): _75.TallyParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _74.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _74.GenesisState;
                fromJSON(object: any): _74.GenesisState;
                toJSON(message: _74.GenesisState): unknown;
                fromPartial(object: Partial<_74.GenesisState>): _74.GenesisState;
                fromSDK(object: _74.GenesisStateSDKType): _74.GenesisState;
                toSDK(message: _74.GenesisState): _74.GenesisStateSDKType;
                fromAmino(object: _74.GenesisStateAmino): _74.GenesisState;
                toAmino(message: _74.GenesisState): _74.GenesisStateAmino;
                fromAminoMsg(object: _74.GenesisStateAminoMsg): _74.GenesisState;
                toAminoMsg(message: _74.GenesisState): _74.GenesisStateAminoMsg;
                fromProtoMsg(message: _74.GenesisStateProtoMsg): _74.GenesisState;
                toProto(message: _74.GenesisState): Uint8Array;
                toProtoMsg(message: _74.GenesisState): _74.GenesisStateProtoMsg;
            };
        };
    }
    namespace group {
        namespace module {
            const v1: {
                protobufPackage: "cosmos.group.module.v1";
                Module: {
                    typeUrl: string;
                    encode(message: _78.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _78.Module;
                    fromJSON(object: any): _78.Module;
                    toJSON(message: _78.Module): unknown;
                    fromPartial(object: Partial<_78.Module>): _78.Module;
                    fromSDK(object: _78.ModuleSDKType): _78.Module;
                    toSDK(message: _78.Module): _78.ModuleSDKType;
                    fromAmino(object: _78.ModuleAmino): _78.Module;
                    toAmino(message: _78.Module): _78.ModuleAmino;
                    fromAminoMsg(object: _78.ModuleAminoMsg): _78.Module;
                    toAminoMsg(message: _78.Module): _78.ModuleAminoMsg;
                    fromProtoMsg(message: _78.ModuleProtoMsg): _78.Module;
                    toProto(message: _78.Module): Uint8Array;
                    toProtoMsg(message: _78.Module): _78.ModuleProtoMsg;
                };
            };
        }
        const v1: {
            Msg: typeof _234.Msg;
            Query: typeof _217.Query;
            QueryClientImpl: typeof _217.QueryClientImpl;
            LCDQueryClient: typeof _199.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createGroup(value: _82.MsgCreateGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMembers(value: _82.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupAdmin(value: _82.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMetadata(value: _82.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupPolicy(value: _82.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupWithPolicy(value: _82.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyAdmin(value: _82.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyDecisionPolicy(value: _82.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyMetadata(value: _82.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    submitProposal(value: _82.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawProposal(value: _82.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _82.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _82.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    leaveGroup(value: _82.MsgLeaveGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createGroup(value: _82.MsgCreateGroup): {
                        typeUrl: string;
                        value: _82.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _82.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _82.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _82.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _82.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _82.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _82.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _82.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _82.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _82.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _82.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _82.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _82.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _82.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _82.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _82.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _82.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _82.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _82.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _82.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _82.MsgWithdrawProposal;
                    };
                    vote(value: _82.MsgVote): {
                        typeUrl: string;
                        value: _82.MsgVote;
                    };
                    exec(value: _82.MsgExec): {
                        typeUrl: string;
                        value: _82.MsgExec;
                    };
                    leaveGroup(value: _82.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _82.MsgLeaveGroup;
                    };
                };
                toJSON: {
                    createGroup(value: _82.MsgCreateGroup): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupMembers(value: _82.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupAdmin(value: _82.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupMetadata(value: _82.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createGroupPolicy(value: _82.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createGroupWithPolicy(value: _82.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupPolicyAdmin(value: _82.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupPolicyDecisionPolicy(value: _82.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupPolicyMetadata(value: _82.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: unknown;
                    };
                    submitProposal(value: _82.MsgSubmitProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdrawProposal(value: _82.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    vote(value: _82.MsgVote): {
                        typeUrl: string;
                        value: unknown;
                    };
                    exec(value: _82.MsgExec): {
                        typeUrl: string;
                        value: unknown;
                    };
                    leaveGroup(value: _82.MsgLeaveGroup): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createGroup(value: any): {
                        typeUrl: string;
                        value: _82.MsgCreateGroup;
                    };
                    updateGroupMembers(value: any): {
                        typeUrl: string;
                        value: _82.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: any): {
                        typeUrl: string;
                        value: _82.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: any): {
                        typeUrl: string;
                        value: _82.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: any): {
                        typeUrl: string;
                        value: _82.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: any): {
                        typeUrl: string;
                        value: _82.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: any): {
                        typeUrl: string;
                        value: _82.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: any): {
                        typeUrl: string;
                        value: _82.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: any): {
                        typeUrl: string;
                        value: _82.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _82.MsgSubmitProposal;
                    };
                    withdrawProposal(value: any): {
                        typeUrl: string;
                        value: _82.MsgWithdrawProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _82.MsgVote;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _82.MsgExec;
                    };
                    leaveGroup(value: any): {
                        typeUrl: string;
                        value: _82.MsgLeaveGroup;
                    };
                };
                fromPartial: {
                    createGroup(value: _82.MsgCreateGroup): {
                        typeUrl: string;
                        value: _82.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _82.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _82.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _82.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _82.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _82.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _82.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _82.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _82.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _82.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _82.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _82.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _82.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _82.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _82.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _82.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _82.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _82.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _82.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _82.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _82.MsgWithdrawProposal;
                    };
                    vote(value: _82.MsgVote): {
                        typeUrl: string;
                        value: _82.MsgVote;
                    };
                    exec(value: _82.MsgExec): {
                        typeUrl: string;
                        value: _82.MsgExec;
                    };
                    leaveGroup(value: _82.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _82.MsgLeaveGroup;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.group.v1.MsgCreateGroup": {
                    aminoType: string;
                    toAmino: (message: _82.MsgCreateGroup) => _82.MsgCreateGroupAmino;
                    fromAmino: (object: _82.MsgCreateGroupAmino) => _82.MsgCreateGroup;
                };
                "/cosmos.group.v1.MsgUpdateGroupMembers": {
                    aminoType: string;
                    toAmino: (message: _82.MsgUpdateGroupMembers) => _82.MsgUpdateGroupMembersAmino;
                    fromAmino: (object: _82.MsgUpdateGroupMembersAmino) => _82.MsgUpdateGroupMembers;
                };
                "/cosmos.group.v1.MsgUpdateGroupAdmin": {
                    aminoType: string;
                    toAmino: (message: _82.MsgUpdateGroupAdmin) => _82.MsgUpdateGroupAdminAmino;
                    fromAmino: (object: _82.MsgUpdateGroupAdminAmino) => _82.MsgUpdateGroupAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupMetadata": {
                    aminoType: string;
                    toAmino: (message: _82.MsgUpdateGroupMetadata) => _82.MsgUpdateGroupMetadataAmino;
                    fromAmino: (object: _82.MsgUpdateGroupMetadataAmino) => _82.MsgUpdateGroupMetadata;
                };
                "/cosmos.group.v1.MsgCreateGroupPolicy": {
                    aminoType: string;
                    toAmino: (message: _82.MsgCreateGroupPolicy) => _82.MsgCreateGroupPolicyAmino;
                    fromAmino: (object: _82.MsgCreateGroupPolicyAmino) => _82.MsgCreateGroupPolicy;
                };
                "/cosmos.group.v1.MsgCreateGroupWithPolicy": {
                    aminoType: string;
                    toAmino: (message: _82.MsgCreateGroupWithPolicy) => _82.MsgCreateGroupWithPolicyAmino;
                    fromAmino: (object: _82.MsgCreateGroupWithPolicyAmino) => _82.MsgCreateGroupWithPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin": {
                    aminoType: string;
                    toAmino: (message: _82.MsgUpdateGroupPolicyAdmin) => _82.MsgUpdateGroupPolicyAdminAmino;
                    fromAmino: (object: _82.MsgUpdateGroupPolicyAdminAmino) => _82.MsgUpdateGroupPolicyAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy": {
                    aminoType: string;
                    toAmino: (message: _82.MsgUpdateGroupPolicyDecisionPolicy) => _82.MsgUpdateGroupPolicyDecisionPolicyAmino;
                    fromAmino: (object: _82.MsgUpdateGroupPolicyDecisionPolicyAmino) => _82.MsgUpdateGroupPolicyDecisionPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata": {
                    aminoType: string;
                    toAmino: (message: _82.MsgUpdateGroupPolicyMetadata) => _82.MsgUpdateGroupPolicyMetadataAmino;
                    fromAmino: (object: _82.MsgUpdateGroupPolicyMetadataAmino) => _82.MsgUpdateGroupPolicyMetadata;
                };
                "/cosmos.group.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _82.MsgSubmitProposal) => _82.MsgSubmitProposalAmino;
                    fromAmino: (object: _82.MsgSubmitProposalAmino) => _82.MsgSubmitProposal;
                };
                "/cosmos.group.v1.MsgWithdrawProposal": {
                    aminoType: string;
                    toAmino: (message: _82.MsgWithdrawProposal) => _82.MsgWithdrawProposalAmino;
                    fromAmino: (object: _82.MsgWithdrawProposalAmino) => _82.MsgWithdrawProposal;
                };
                "/cosmos.group.v1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _82.MsgVote) => _82.MsgVoteAmino;
                    fromAmino: (object: _82.MsgVoteAmino) => _82.MsgVote;
                };
                "/cosmos.group.v1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _82.MsgExec) => _82.MsgExecAmino;
                    fromAmino: (object: _82.MsgExecAmino) => _82.MsgExec;
                };
                "/cosmos.group.v1.MsgLeaveGroup": {
                    aminoType: string;
                    toAmino: (message: _82.MsgLeaveGroup) => _82.MsgLeaveGroupAmino;
                    fromAmino: (object: _82.MsgLeaveGroupAmino) => _82.MsgLeaveGroup;
                };
            };
            voteOptionFromJSON(object: any): _83.VoteOption;
            voteOptionToJSON(object: _83.VoteOption): string;
            proposalStatusFromJSON(object: any): _83.ProposalStatus;
            proposalStatusToJSON(object: _83.ProposalStatus): string;
            proposalExecutorResultFromJSON(object: any): _83.ProposalExecutorResult;
            proposalExecutorResultToJSON(object: _83.ProposalExecutorResult): string;
            protobufPackage: "cosmos.group.v1";
            VoteOption: typeof _83.VoteOption;
            VoteOptionSDKType: typeof _83.VoteOption;
            VoteOptionAmino: typeof _83.VoteOption;
            ProposalStatus: typeof _83.ProposalStatus;
            ProposalStatusSDKType: typeof _83.ProposalStatus;
            ProposalStatusAmino: typeof _83.ProposalStatus;
            ProposalExecutorResult: typeof _83.ProposalExecutorResult;
            ProposalExecutorResultSDKType: typeof _83.ProposalExecutorResult;
            ProposalExecutorResultAmino: typeof _83.ProposalExecutorResult;
            Member: {
                typeUrl: string;
                encode(message: _83.Member, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _83.Member;
                fromJSON(object: any): _83.Member;
                toJSON(message: _83.Member): unknown;
                fromPartial(object: Partial<_83.Member>): _83.Member;
                fromSDK(object: _83.MemberSDKType): _83.Member;
                toSDK(message: _83.Member): _83.MemberSDKType;
                fromAmino(object: _83.MemberAmino): _83.Member;
                toAmino(message: _83.Member): _83.MemberAmino;
                fromAminoMsg(object: _83.MemberAminoMsg): _83.Member;
                toAminoMsg(message: _83.Member): _83.MemberAminoMsg;
                fromProtoMsg(message: _83.MemberProtoMsg): _83.Member;
                toProto(message: _83.Member): Uint8Array;
                toProtoMsg(message: _83.Member): _83.MemberProtoMsg;
            };
            MemberRequest: {
                typeUrl: string;
                encode(message: _83.MemberRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _83.MemberRequest;
                fromJSON(object: any): _83.MemberRequest;
                toJSON(message: _83.MemberRequest): unknown;
                fromPartial(object: Partial<_83.MemberRequest>): _83.MemberRequest;
                fromSDK(object: _83.MemberRequestSDKType): _83.MemberRequest;
                toSDK(message: _83.MemberRequest): _83.MemberRequestSDKType;
                fromAmino(object: _83.MemberRequestAmino): _83.MemberRequest;
                toAmino(message: _83.MemberRequest): _83.MemberRequestAmino;
                fromAminoMsg(object: _83.MemberRequestAminoMsg): _83.MemberRequest;
                toAminoMsg(message: _83.MemberRequest): _83.MemberRequestAminoMsg;
                fromProtoMsg(message: _83.MemberRequestProtoMsg): _83.MemberRequest;
                toProto(message: _83.MemberRequest): Uint8Array;
                toProtoMsg(message: _83.MemberRequest): _83.MemberRequestProtoMsg;
            };
            ThresholdDecisionPolicy: {
                typeUrl: string;
                encode(message: _83.ThresholdDecisionPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _83.ThresholdDecisionPolicy;
                fromJSON(object: any): _83.ThresholdDecisionPolicy;
                toJSON(message: _83.ThresholdDecisionPolicy): unknown;
                fromPartial(object: Partial<_83.ThresholdDecisionPolicy>): _83.ThresholdDecisionPolicy;
                fromSDK(object: _83.ThresholdDecisionPolicySDKType): _83.ThresholdDecisionPolicy;
                toSDK(message: _83.ThresholdDecisionPolicy): _83.ThresholdDecisionPolicySDKType;
                fromAmino(object: _83.ThresholdDecisionPolicyAmino): _83.ThresholdDecisionPolicy;
                toAmino(message: _83.ThresholdDecisionPolicy): _83.ThresholdDecisionPolicyAmino;
                fromAminoMsg(object: _83.ThresholdDecisionPolicyAminoMsg): _83.ThresholdDecisionPolicy;
                toAminoMsg(message: _83.ThresholdDecisionPolicy): _83.ThresholdDecisionPolicyAminoMsg;
                fromProtoMsg(message: _83.ThresholdDecisionPolicyProtoMsg): _83.ThresholdDecisionPolicy;
                toProto(message: _83.ThresholdDecisionPolicy): Uint8Array;
                toProtoMsg(message: _83.ThresholdDecisionPolicy): _83.ThresholdDecisionPolicyProtoMsg;
            };
            PercentageDecisionPolicy: {
                typeUrl: string;
                encode(message: _83.PercentageDecisionPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _83.PercentageDecisionPolicy;
                fromJSON(object: any): _83.PercentageDecisionPolicy;
                toJSON(message: _83.PercentageDecisionPolicy): unknown;
                fromPartial(object: Partial<_83.PercentageDecisionPolicy>): _83.PercentageDecisionPolicy;
                fromSDK(object: _83.PercentageDecisionPolicySDKType): _83.PercentageDecisionPolicy;
                toSDK(message: _83.PercentageDecisionPolicy): _83.PercentageDecisionPolicySDKType;
                fromAmino(object: _83.PercentageDecisionPolicyAmino): _83.PercentageDecisionPolicy;
                toAmino(message: _83.PercentageDecisionPolicy): _83.PercentageDecisionPolicyAmino;
                fromAminoMsg(object: _83.PercentageDecisionPolicyAminoMsg): _83.PercentageDecisionPolicy;
                toAminoMsg(message: _83.PercentageDecisionPolicy): _83.PercentageDecisionPolicyAminoMsg;
                fromProtoMsg(message: _83.PercentageDecisionPolicyProtoMsg): _83.PercentageDecisionPolicy;
                toProto(message: _83.PercentageDecisionPolicy): Uint8Array;
                toProtoMsg(message: _83.PercentageDecisionPolicy): _83.PercentageDecisionPolicyProtoMsg;
            };
            DecisionPolicyWindows: {
                typeUrl: string;
                encode(message: _83.DecisionPolicyWindows, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _83.DecisionPolicyWindows;
                fromJSON(object: any): _83.DecisionPolicyWindows;
                toJSON(message: _83.DecisionPolicyWindows): unknown;
                fromPartial(object: Partial<_83.DecisionPolicyWindows>): _83.DecisionPolicyWindows;
                fromSDK(object: _83.DecisionPolicyWindowsSDKType): _83.DecisionPolicyWindows;
                toSDK(message: _83.DecisionPolicyWindows): _83.DecisionPolicyWindowsSDKType;
                fromAmino(object: _83.DecisionPolicyWindowsAmino): _83.DecisionPolicyWindows;
                toAmino(message: _83.DecisionPolicyWindows): _83.DecisionPolicyWindowsAmino;
                fromAminoMsg(object: _83.DecisionPolicyWindowsAminoMsg): _83.DecisionPolicyWindows;
                toAminoMsg(message: _83.DecisionPolicyWindows): _83.DecisionPolicyWindowsAminoMsg;
                fromProtoMsg(message: _83.DecisionPolicyWindowsProtoMsg): _83.DecisionPolicyWindows;
                toProto(message: _83.DecisionPolicyWindows): Uint8Array;
                toProtoMsg(message: _83.DecisionPolicyWindows): _83.DecisionPolicyWindowsProtoMsg;
            };
            GroupInfo: {
                typeUrl: string;
                encode(message: _83.GroupInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _83.GroupInfo;
                fromJSON(object: any): _83.GroupInfo;
                toJSON(message: _83.GroupInfo): unknown;
                fromPartial(object: Partial<_83.GroupInfo>): _83.GroupInfo;
                fromSDK(object: _83.GroupInfoSDKType): _83.GroupInfo;
                toSDK(message: _83.GroupInfo): _83.GroupInfoSDKType;
                fromAmino(object: _83.GroupInfoAmino): _83.GroupInfo;
                toAmino(message: _83.GroupInfo): _83.GroupInfoAmino;
                fromAminoMsg(object: _83.GroupInfoAminoMsg): _83.GroupInfo;
                toAminoMsg(message: _83.GroupInfo): _83.GroupInfoAminoMsg;
                fromProtoMsg(message: _83.GroupInfoProtoMsg): _83.GroupInfo;
                toProto(message: _83.GroupInfo): Uint8Array;
                toProtoMsg(message: _83.GroupInfo): _83.GroupInfoProtoMsg;
            };
            GroupMember: {
                typeUrl: string;
                encode(message: _83.GroupMember, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _83.GroupMember;
                fromJSON(object: any): _83.GroupMember;
                toJSON(message: _83.GroupMember): unknown;
                fromPartial(object: Partial<_83.GroupMember>): _83.GroupMember;
                fromSDK(object: _83.GroupMemberSDKType): _83.GroupMember;
                toSDK(message: _83.GroupMember): _83.GroupMemberSDKType;
                fromAmino(object: _83.GroupMemberAmino): _83.GroupMember;
                toAmino(message: _83.GroupMember): _83.GroupMemberAmino;
                fromAminoMsg(object: _83.GroupMemberAminoMsg): _83.GroupMember;
                toAminoMsg(message: _83.GroupMember): _83.GroupMemberAminoMsg;
                fromProtoMsg(message: _83.GroupMemberProtoMsg): _83.GroupMember;
                toProto(message: _83.GroupMember): Uint8Array;
                toProtoMsg(message: _83.GroupMember): _83.GroupMemberProtoMsg;
            };
            GroupPolicyInfo: {
                typeUrl: string;
                encode(message: _83.GroupPolicyInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _83.GroupPolicyInfo;
                fromJSON(object: any): _83.GroupPolicyInfo;
                toJSON(message: _83.GroupPolicyInfo): unknown;
                fromPartial(object: Partial<_83.GroupPolicyInfo>): _83.GroupPolicyInfo;
                fromSDK(object: _83.GroupPolicyInfoSDKType): _83.GroupPolicyInfo;
                toSDK(message: _83.GroupPolicyInfo): _83.GroupPolicyInfoSDKType;
                fromAmino(object: _83.GroupPolicyInfoAmino): _83.GroupPolicyInfo;
                toAmino(message: _83.GroupPolicyInfo): _83.GroupPolicyInfoAmino;
                fromAminoMsg(object: _83.GroupPolicyInfoAminoMsg): _83.GroupPolicyInfo;
                toAminoMsg(message: _83.GroupPolicyInfo): _83.GroupPolicyInfoAminoMsg;
                fromProtoMsg(message: _83.GroupPolicyInfoProtoMsg): _83.GroupPolicyInfo;
                toProto(message: _83.GroupPolicyInfo): Uint8Array;
                toProtoMsg(message: _83.GroupPolicyInfo): _83.GroupPolicyInfoProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _83.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _83.Proposal;
                fromJSON(object: any): _83.Proposal;
                toJSON(message: _83.Proposal): unknown;
                fromPartial(object: Partial<_83.Proposal>): _83.Proposal;
                fromSDK(object: _83.ProposalSDKType): _83.Proposal;
                toSDK(message: _83.Proposal): _83.ProposalSDKType;
                fromAmino(object: _83.ProposalAmino): _83.Proposal;
                toAmino(message: _83.Proposal): _83.ProposalAmino;
                fromAminoMsg(object: _83.ProposalAminoMsg): _83.Proposal;
                toAminoMsg(message: _83.Proposal): _83.ProposalAminoMsg;
                fromProtoMsg(message: _83.ProposalProtoMsg): _83.Proposal;
                toProto(message: _83.Proposal): Uint8Array;
                toProtoMsg(message: _83.Proposal): _83.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _83.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _83.TallyResult;
                fromJSON(object: any): _83.TallyResult;
                toJSON(message: _83.TallyResult): unknown;
                fromPartial(object: Partial<_83.TallyResult>): _83.TallyResult;
                fromSDK(object: _83.TallyResultSDKType): _83.TallyResult;
                toSDK(message: _83.TallyResult): _83.TallyResultSDKType;
                fromAmino(object: _83.TallyResultAmino): _83.TallyResult;
                toAmino(message: _83.TallyResult): _83.TallyResultAmino;
                fromAminoMsg(object: _83.TallyResultAminoMsg): _83.TallyResult;
                toAminoMsg(message: _83.TallyResult): _83.TallyResultAminoMsg;
                fromProtoMsg(message: _83.TallyResultProtoMsg): _83.TallyResult;
                toProto(message: _83.TallyResult): Uint8Array;
                toProtoMsg(message: _83.TallyResult): _83.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _83.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _83.Vote;
                fromJSON(object: any): _83.Vote;
                toJSON(message: _83.Vote): unknown;
                fromPartial(object: Partial<_83.Vote>): _83.Vote;
                fromSDK(object: _83.VoteSDKType): _83.Vote;
                toSDK(message: _83.Vote): _83.VoteSDKType;
                fromAmino(object: _83.VoteAmino): _83.Vote;
                toAmino(message: _83.Vote): _83.VoteAmino;
                fromAminoMsg(object: _83.VoteAminoMsg): _83.Vote;
                toAminoMsg(message: _83.Vote): _83.VoteAminoMsg;
                fromProtoMsg(message: _83.VoteProtoMsg): _83.Vote;
                toProto(message: _83.Vote): Uint8Array;
                toProtoMsg(message: _83.Vote): _83.VoteProtoMsg;
            };
            Cosmos_groupv1DecisionPolicy_InterfaceDecoder: (input: import("..").BinaryReader | Uint8Array) => import("../google/protobuf/any").Any | _83.ThresholdDecisionPolicy | _83.PercentageDecisionPolicy;
            Cosmos_groupv1DecisionPolicy_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_groupv1DecisionPolicy_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            execFromJSON(object: any): _82.Exec;
            execToJSON(object: _82.Exec): string;
            Exec: typeof _82.Exec;
            ExecSDKType: typeof _82.Exec;
            ExecAmino: typeof _82.Exec;
            MsgCreateGroup: {
                typeUrl: string;
                encode(message: _82.MsgCreateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _82.MsgCreateGroup;
                fromJSON(object: any): _82.MsgCreateGroup;
                toJSON(message: _82.MsgCreateGroup): unknown;
                fromPartial(object: Partial<_82.MsgCreateGroup>): _82.MsgCreateGroup;
                fromSDK(object: _82.MsgCreateGroupSDKType): _82.MsgCreateGroup;
                toSDK(message: _82.MsgCreateGroup): _82.MsgCreateGroupSDKType;
                fromAmino(object: _82.MsgCreateGroupAmino): _82.MsgCreateGroup;
                toAmino(message: _82.MsgCreateGroup): _82.MsgCreateGroupAmino;
                fromAminoMsg(object: _82.MsgCreateGroupAminoMsg): _82.MsgCreateGroup;
                toAminoMsg(message: _82.MsgCreateGroup): _82.MsgCreateGroupAminoMsg;
                fromProtoMsg(message: _82.MsgCreateGroupProtoMsg): _82.MsgCreateGroup;
                toProto(message: _82.MsgCreateGroup): Uint8Array;
                toProtoMsg(message: _82.MsgCreateGroup): _82.MsgCreateGroupProtoMsg;
            };
            MsgCreateGroupResponse: {
                typeUrl: string;
                encode(message: _82.MsgCreateGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _82.MsgCreateGroupResponse;
                fromJSON(object: any): _82.MsgCreateGroupResponse;
                toJSON(message: _82.MsgCreateGroupResponse): unknown;
                fromPartial(object: Partial<_82.MsgCreateGroupResponse>): _82.MsgCreateGroupResponse;
                fromSDK(object: _82.MsgCreateGroupResponseSDKType): _82.MsgCreateGroupResponse;
                toSDK(message: _82.MsgCreateGroupResponse): _82.MsgCreateGroupResponseSDKType;
                fromAmino(object: _82.MsgCreateGroupResponseAmino): _82.MsgCreateGroupResponse;
                toAmino(message: _82.MsgCreateGroupResponse): _82.MsgCreateGroupResponseAmino;
                fromAminoMsg(object: _82.MsgCreateGroupResponseAminoMsg): _82.MsgCreateGroupResponse;
                toAminoMsg(message: _82.MsgCreateGroupResponse): _82.MsgCreateGroupResponseAminoMsg;
                fromProtoMsg(message: _82.MsgCreateGroupResponseProtoMsg): _82.MsgCreateGroupResponse;
                toProto(message: _82.MsgCreateGroupResponse): Uint8Array;
                toProtoMsg(message: _82.MsgCreateGroupResponse): _82.MsgCreateGroupResponseProtoMsg;
            };
            MsgUpdateGroupMembers: {
                typeUrl: string;
                encode(message: _82.MsgUpdateGroupMembers, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _82.MsgUpdateGroupMembers;
                fromJSON(object: any): _82.MsgUpdateGroupMembers;
                toJSON(message: _82.MsgUpdateGroupMembers): unknown;
                fromPartial(object: Partial<_82.MsgUpdateGroupMembers>): _82.MsgUpdateGroupMembers;
                fromSDK(object: _82.MsgUpdateGroupMembersSDKType): _82.MsgUpdateGroupMembers;
                toSDK(message: _82.MsgUpdateGroupMembers): _82.MsgUpdateGroupMembersSDKType;
                fromAmino(object: _82.MsgUpdateGroupMembersAmino): _82.MsgUpdateGroupMembers;
                toAmino(message: _82.MsgUpdateGroupMembers): _82.MsgUpdateGroupMembersAmino;
                fromAminoMsg(object: _82.MsgUpdateGroupMembersAminoMsg): _82.MsgUpdateGroupMembers;
                toAminoMsg(message: _82.MsgUpdateGroupMembers): _82.MsgUpdateGroupMembersAminoMsg;
                fromProtoMsg(message: _82.MsgUpdateGroupMembersProtoMsg): _82.MsgUpdateGroupMembers;
                toProto(message: _82.MsgUpdateGroupMembers): Uint8Array;
                toProtoMsg(message: _82.MsgUpdateGroupMembers): _82.MsgUpdateGroupMembersProtoMsg;
            };
            MsgUpdateGroupMembersResponse: {
                typeUrl: string;
                encode(_: _82.MsgUpdateGroupMembersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _82.MsgUpdateGroupMembersResponse;
                fromJSON(_: any): _82.MsgUpdateGroupMembersResponse;
                toJSON(_: _82.MsgUpdateGroupMembersResponse): unknown;
                fromPartial(_: Partial<_82.MsgUpdateGroupMembersResponse>): _82.MsgUpdateGroupMembersResponse;
                fromSDK(_: _82.MsgUpdateGroupMembersResponseSDKType): _82.MsgUpdateGroupMembersResponse;
                toSDK(_: _82.MsgUpdateGroupMembersResponse): _82.MsgUpdateGroupMembersResponseSDKType;
                fromAmino(_: _82.MsgUpdateGroupMembersResponseAmino): _82.MsgUpdateGroupMembersResponse;
                toAmino(_: _82.MsgUpdateGroupMembersResponse): _82.MsgUpdateGroupMembersResponseAmino;
                fromAminoMsg(object: _82.MsgUpdateGroupMembersResponseAminoMsg): _82.MsgUpdateGroupMembersResponse;
                toAminoMsg(message: _82.MsgUpdateGroupMembersResponse): _82.MsgUpdateGroupMembersResponseAminoMsg;
                fromProtoMsg(message: _82.MsgUpdateGroupMembersResponseProtoMsg): _82.MsgUpdateGroupMembersResponse;
                toProto(message: _82.MsgUpdateGroupMembersResponse): Uint8Array;
                toProtoMsg(message: _82.MsgUpdateGroupMembersResponse): _82.MsgUpdateGroupMembersResponseProtoMsg;
            };
            MsgUpdateGroupAdmin: {
                typeUrl: string;
                encode(message: _82.MsgUpdateGroupAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _82.MsgUpdateGroupAdmin;
                fromJSON(object: any): _82.MsgUpdateGroupAdmin;
                toJSON(message: _82.MsgUpdateGroupAdmin): unknown;
                fromPartial(object: Partial<_82.MsgUpdateGroupAdmin>): _82.MsgUpdateGroupAdmin;
                fromSDK(object: _82.MsgUpdateGroupAdminSDKType): _82.MsgUpdateGroupAdmin;
                toSDK(message: _82.MsgUpdateGroupAdmin): _82.MsgUpdateGroupAdminSDKType;
                fromAmino(object: _82.MsgUpdateGroupAdminAmino): _82.MsgUpdateGroupAdmin;
                toAmino(message: _82.MsgUpdateGroupAdmin): _82.MsgUpdateGroupAdminAmino;
                fromAminoMsg(object: _82.MsgUpdateGroupAdminAminoMsg): _82.MsgUpdateGroupAdmin;
                toAminoMsg(message: _82.MsgUpdateGroupAdmin): _82.MsgUpdateGroupAdminAminoMsg;
                fromProtoMsg(message: _82.MsgUpdateGroupAdminProtoMsg): _82.MsgUpdateGroupAdmin;
                toProto(message: _82.MsgUpdateGroupAdmin): Uint8Array;
                toProtoMsg(message: _82.MsgUpdateGroupAdmin): _82.MsgUpdateGroupAdminProtoMsg;
            };
            MsgUpdateGroupAdminResponse: {
                typeUrl: string;
                encode(_: _82.MsgUpdateGroupAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _82.MsgUpdateGroupAdminResponse;
                fromJSON(_: any): _82.MsgUpdateGroupAdminResponse;
                toJSON(_: _82.MsgUpdateGroupAdminResponse): unknown;
                fromPartial(_: Partial<_82.MsgUpdateGroupAdminResponse>): _82.MsgUpdateGroupAdminResponse;
                fromSDK(_: _82.MsgUpdateGroupAdminResponseSDKType): _82.MsgUpdateGroupAdminResponse;
                toSDK(_: _82.MsgUpdateGroupAdminResponse): _82.MsgUpdateGroupAdminResponseSDKType;
                fromAmino(_: _82.MsgUpdateGroupAdminResponseAmino): _82.MsgUpdateGroupAdminResponse;
                toAmino(_: _82.MsgUpdateGroupAdminResponse): _82.MsgUpdateGroupAdminResponseAmino;
                fromAminoMsg(object: _82.MsgUpdateGroupAdminResponseAminoMsg): _82.MsgUpdateGroupAdminResponse;
                toAminoMsg(message: _82.MsgUpdateGroupAdminResponse): _82.MsgUpdateGroupAdminResponseAminoMsg;
                fromProtoMsg(message: _82.MsgUpdateGroupAdminResponseProtoMsg): _82.MsgUpdateGroupAdminResponse;
                toProto(message: _82.MsgUpdateGroupAdminResponse): Uint8Array;
                toProtoMsg(message: _82.MsgUpdateGroupAdminResponse): _82.MsgUpdateGroupAdminResponseProtoMsg;
            };
            MsgUpdateGroupMetadata: {
                typeUrl: string;
                encode(message: _82.MsgUpdateGroupMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _82.MsgUpdateGroupMetadata;
                fromJSON(object: any): _82.MsgUpdateGroupMetadata;
                toJSON(message: _82.MsgUpdateGroupMetadata): unknown;
                fromPartial(object: Partial<_82.MsgUpdateGroupMetadata>): _82.MsgUpdateGroupMetadata;
                fromSDK(object: _82.MsgUpdateGroupMetadataSDKType): _82.MsgUpdateGroupMetadata;
                toSDK(message: _82.MsgUpdateGroupMetadata): _82.MsgUpdateGroupMetadataSDKType;
                fromAmino(object: _82.MsgUpdateGroupMetadataAmino): _82.MsgUpdateGroupMetadata;
                toAmino(message: _82.MsgUpdateGroupMetadata): _82.MsgUpdateGroupMetadataAmino;
                fromAminoMsg(object: _82.MsgUpdateGroupMetadataAminoMsg): _82.MsgUpdateGroupMetadata;
                toAminoMsg(message: _82.MsgUpdateGroupMetadata): _82.MsgUpdateGroupMetadataAminoMsg;
                fromProtoMsg(message: _82.MsgUpdateGroupMetadataProtoMsg): _82.MsgUpdateGroupMetadata;
                toProto(message: _82.MsgUpdateGroupMetadata): Uint8Array;
                toProtoMsg(message: _82.MsgUpdateGroupMetadata): _82.MsgUpdateGroupMetadataProtoMsg;
            };
            MsgUpdateGroupMetadataResponse: {
                typeUrl: string;
                encode(_: _82.MsgUpdateGroupMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _82.MsgUpdateGroupMetadataResponse;
                fromJSON(_: any): _82.MsgUpdateGroupMetadataResponse;
                toJSON(_: _82.MsgUpdateGroupMetadataResponse): unknown;
                fromPartial(_: Partial<_82.MsgUpdateGroupMetadataResponse>): _82.MsgUpdateGroupMetadataResponse;
                fromSDK(_: _82.MsgUpdateGroupMetadataResponseSDKType): _82.MsgUpdateGroupMetadataResponse;
                toSDK(_: _82.MsgUpdateGroupMetadataResponse): _82.MsgUpdateGroupMetadataResponseSDKType;
                fromAmino(_: _82.MsgUpdateGroupMetadataResponseAmino): _82.MsgUpdateGroupMetadataResponse;
                toAmino(_: _82.MsgUpdateGroupMetadataResponse): _82.MsgUpdateGroupMetadataResponseAmino;
                fromAminoMsg(object: _82.MsgUpdateGroupMetadataResponseAminoMsg): _82.MsgUpdateGroupMetadataResponse;
                toAminoMsg(message: _82.MsgUpdateGroupMetadataResponse): _82.MsgUpdateGroupMetadataResponseAminoMsg;
                fromProtoMsg(message: _82.MsgUpdateGroupMetadataResponseProtoMsg): _82.MsgUpdateGroupMetadataResponse;
                toProto(message: _82.MsgUpdateGroupMetadataResponse): Uint8Array;
                toProtoMsg(message: _82.MsgUpdateGroupMetadataResponse): _82.MsgUpdateGroupMetadataResponseProtoMsg;
            };
            MsgCreateGroupPolicy: {
                typeUrl: string;
                encode(message: _82.MsgCreateGroupPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _82.MsgCreateGroupPolicy;
                fromJSON(object: any): _82.MsgCreateGroupPolicy;
                toJSON(message: _82.MsgCreateGroupPolicy): unknown;
                fromPartial(object: Partial<_82.MsgCreateGroupPolicy>): _82.MsgCreateGroupPolicy;
                fromSDK(object: _82.MsgCreateGroupPolicySDKType): _82.MsgCreateGroupPolicy;
                toSDK(message: _82.MsgCreateGroupPolicy): _82.MsgCreateGroupPolicySDKType;
                fromAmino(object: _82.MsgCreateGroupPolicyAmino): _82.MsgCreateGroupPolicy;
                toAmino(message: _82.MsgCreateGroupPolicy): _82.MsgCreateGroupPolicyAmino;
                fromAminoMsg(object: _82.MsgCreateGroupPolicyAminoMsg): _82.MsgCreateGroupPolicy;
                toAminoMsg(message: _82.MsgCreateGroupPolicy): _82.MsgCreateGroupPolicyAminoMsg;
                fromProtoMsg(message: _82.MsgCreateGroupPolicyProtoMsg): _82.MsgCreateGroupPolicy;
                toProto(message: _82.MsgCreateGroupPolicy): Uint8Array;
                toProtoMsg(message: _82.MsgCreateGroupPolicy): _82.MsgCreateGroupPolicyProtoMsg;
            };
            MsgCreateGroupPolicyResponse: {
                typeUrl: string;
                encode(message: _82.MsgCreateGroupPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _82.MsgCreateGroupPolicyResponse;
                fromJSON(object: any): _82.MsgCreateGroupPolicyResponse;
                toJSON(message: _82.MsgCreateGroupPolicyResponse): unknown;
                fromPartial(object: Partial<_82.MsgCreateGroupPolicyResponse>): _82.MsgCreateGroupPolicyResponse;
                fromSDK(object: _82.MsgCreateGroupPolicyResponseSDKType): _82.MsgCreateGroupPolicyResponse;
                toSDK(message: _82.MsgCreateGroupPolicyResponse): _82.MsgCreateGroupPolicyResponseSDKType;
                fromAmino(object: _82.MsgCreateGroupPolicyResponseAmino): _82.MsgCreateGroupPolicyResponse;
                toAmino(message: _82.MsgCreateGroupPolicyResponse): _82.MsgCreateGroupPolicyResponseAmino;
                fromAminoMsg(object: _82.MsgCreateGroupPolicyResponseAminoMsg): _82.MsgCreateGroupPolicyResponse;
                toAminoMsg(message: _82.MsgCreateGroupPolicyResponse): _82.MsgCreateGroupPolicyResponseAminoMsg;
                fromProtoMsg(message: _82.MsgCreateGroupPolicyResponseProtoMsg): _82.MsgCreateGroupPolicyResponse;
                toProto(message: _82.MsgCreateGroupPolicyResponse): Uint8Array;
                toProtoMsg(message: _82.MsgCreateGroupPolicyResponse): _82.MsgCreateGroupPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyAdmin: {
                typeUrl: string;
                encode(message: _82.MsgUpdateGroupPolicyAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _82.MsgUpdateGroupPolicyAdmin;
                fromJSON(object: any): _82.MsgUpdateGroupPolicyAdmin;
                toJSON(message: _82.MsgUpdateGroupPolicyAdmin): unknown;
                fromPartial(object: Partial<_82.MsgUpdateGroupPolicyAdmin>): _82.MsgUpdateGroupPolicyAdmin;
                fromSDK(object: _82.MsgUpdateGroupPolicyAdminSDKType): _82.MsgUpdateGroupPolicyAdmin;
                toSDK(message: _82.MsgUpdateGroupPolicyAdmin): _82.MsgUpdateGroupPolicyAdminSDKType;
                fromAmino(object: _82.MsgUpdateGroupPolicyAdminAmino): _82.MsgUpdateGroupPolicyAdmin;
                toAmino(message: _82.MsgUpdateGroupPolicyAdmin): _82.MsgUpdateGroupPolicyAdminAmino;
                fromAminoMsg(object: _82.MsgUpdateGroupPolicyAdminAminoMsg): _82.MsgUpdateGroupPolicyAdmin;
                toAminoMsg(message: _82.MsgUpdateGroupPolicyAdmin): _82.MsgUpdateGroupPolicyAdminAminoMsg;
                fromProtoMsg(message: _82.MsgUpdateGroupPolicyAdminProtoMsg): _82.MsgUpdateGroupPolicyAdmin;
                toProto(message: _82.MsgUpdateGroupPolicyAdmin): Uint8Array;
                toProtoMsg(message: _82.MsgUpdateGroupPolicyAdmin): _82.MsgUpdateGroupPolicyAdminProtoMsg;
            };
            MsgUpdateGroupPolicyAdminResponse: {
                typeUrl: string;
                encode(_: _82.MsgUpdateGroupPolicyAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _82.MsgUpdateGroupPolicyAdminResponse;
                fromJSON(_: any): _82.MsgUpdateGroupPolicyAdminResponse;
                toJSON(_: _82.MsgUpdateGroupPolicyAdminResponse): unknown;
                fromPartial(_: Partial<_82.MsgUpdateGroupPolicyAdminResponse>): _82.MsgUpdateGroupPolicyAdminResponse;
                fromSDK(_: _82.MsgUpdateGroupPolicyAdminResponseSDKType): _82.MsgUpdateGroupPolicyAdminResponse;
                toSDK(_: _82.MsgUpdateGroupPolicyAdminResponse): _82.MsgUpdateGroupPolicyAdminResponseSDKType;
                fromAmino(_: _82.MsgUpdateGroupPolicyAdminResponseAmino): _82.MsgUpdateGroupPolicyAdminResponse;
                toAmino(_: _82.MsgUpdateGroupPolicyAdminResponse): _82.MsgUpdateGroupPolicyAdminResponseAmino;
                fromAminoMsg(object: _82.MsgUpdateGroupPolicyAdminResponseAminoMsg): _82.MsgUpdateGroupPolicyAdminResponse;
                toAminoMsg(message: _82.MsgUpdateGroupPolicyAdminResponse): _82.MsgUpdateGroupPolicyAdminResponseAminoMsg;
                fromProtoMsg(message: _82.MsgUpdateGroupPolicyAdminResponseProtoMsg): _82.MsgUpdateGroupPolicyAdminResponse;
                toProto(message: _82.MsgUpdateGroupPolicyAdminResponse): Uint8Array;
                toProtoMsg(message: _82.MsgUpdateGroupPolicyAdminResponse): _82.MsgUpdateGroupPolicyAdminResponseProtoMsg;
            };
            MsgCreateGroupWithPolicy: {
                typeUrl: string;
                encode(message: _82.MsgCreateGroupWithPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _82.MsgCreateGroupWithPolicy;
                fromJSON(object: any): _82.MsgCreateGroupWithPolicy;
                toJSON(message: _82.MsgCreateGroupWithPolicy): unknown;
                fromPartial(object: Partial<_82.MsgCreateGroupWithPolicy>): _82.MsgCreateGroupWithPolicy;
                fromSDK(object: _82.MsgCreateGroupWithPolicySDKType): _82.MsgCreateGroupWithPolicy;
                toSDK(message: _82.MsgCreateGroupWithPolicy): _82.MsgCreateGroupWithPolicySDKType;
                fromAmino(object: _82.MsgCreateGroupWithPolicyAmino): _82.MsgCreateGroupWithPolicy;
                toAmino(message: _82.MsgCreateGroupWithPolicy): _82.MsgCreateGroupWithPolicyAmino;
                fromAminoMsg(object: _82.MsgCreateGroupWithPolicyAminoMsg): _82.MsgCreateGroupWithPolicy;
                toAminoMsg(message: _82.MsgCreateGroupWithPolicy): _82.MsgCreateGroupWithPolicyAminoMsg;
                fromProtoMsg(message: _82.MsgCreateGroupWithPolicyProtoMsg): _82.MsgCreateGroupWithPolicy;
                toProto(message: _82.MsgCreateGroupWithPolicy): Uint8Array;
                toProtoMsg(message: _82.MsgCreateGroupWithPolicy): _82.MsgCreateGroupWithPolicyProtoMsg;
            };
            MsgCreateGroupWithPolicyResponse: {
                typeUrl: string;
                encode(message: _82.MsgCreateGroupWithPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _82.MsgCreateGroupWithPolicyResponse;
                fromJSON(object: any): _82.MsgCreateGroupWithPolicyResponse;
                toJSON(message: _82.MsgCreateGroupWithPolicyResponse): unknown;
                fromPartial(object: Partial<_82.MsgCreateGroupWithPolicyResponse>): _82.MsgCreateGroupWithPolicyResponse;
                fromSDK(object: _82.MsgCreateGroupWithPolicyResponseSDKType): _82.MsgCreateGroupWithPolicyResponse;
                toSDK(message: _82.MsgCreateGroupWithPolicyResponse): _82.MsgCreateGroupWithPolicyResponseSDKType;
                fromAmino(object: _82.MsgCreateGroupWithPolicyResponseAmino): _82.MsgCreateGroupWithPolicyResponse;
                toAmino(message: _82.MsgCreateGroupWithPolicyResponse): _82.MsgCreateGroupWithPolicyResponseAmino;
                fromAminoMsg(object: _82.MsgCreateGroupWithPolicyResponseAminoMsg): _82.MsgCreateGroupWithPolicyResponse;
                toAminoMsg(message: _82.MsgCreateGroupWithPolicyResponse): _82.MsgCreateGroupWithPolicyResponseAminoMsg;
                fromProtoMsg(message: _82.MsgCreateGroupWithPolicyResponseProtoMsg): _82.MsgCreateGroupWithPolicyResponse;
                toProto(message: _82.MsgCreateGroupWithPolicyResponse): Uint8Array;
                toProtoMsg(message: _82.MsgCreateGroupWithPolicyResponse): _82.MsgCreateGroupWithPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyDecisionPolicy: {
                typeUrl: string;
                encode(message: _82.MsgUpdateGroupPolicyDecisionPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _82.MsgUpdateGroupPolicyDecisionPolicy;
                fromJSON(object: any): _82.MsgUpdateGroupPolicyDecisionPolicy;
                toJSON(message: _82.MsgUpdateGroupPolicyDecisionPolicy): unknown;
                fromPartial(object: Partial<_82.MsgUpdateGroupPolicyDecisionPolicy>): _82.MsgUpdateGroupPolicyDecisionPolicy;
                fromSDK(object: _82.MsgUpdateGroupPolicyDecisionPolicySDKType): _82.MsgUpdateGroupPolicyDecisionPolicy;
                toSDK(message: _82.MsgUpdateGroupPolicyDecisionPolicy): _82.MsgUpdateGroupPolicyDecisionPolicySDKType;
                fromAmino(object: _82.MsgUpdateGroupPolicyDecisionPolicyAmino): _82.MsgUpdateGroupPolicyDecisionPolicy;
                toAmino(message: _82.MsgUpdateGroupPolicyDecisionPolicy): _82.MsgUpdateGroupPolicyDecisionPolicyAmino;
                fromAminoMsg(object: _82.MsgUpdateGroupPolicyDecisionPolicyAminoMsg): _82.MsgUpdateGroupPolicyDecisionPolicy;
                toAminoMsg(message: _82.MsgUpdateGroupPolicyDecisionPolicy): _82.MsgUpdateGroupPolicyDecisionPolicyAminoMsg;
                fromProtoMsg(message: _82.MsgUpdateGroupPolicyDecisionPolicyProtoMsg): _82.MsgUpdateGroupPolicyDecisionPolicy;
                toProto(message: _82.MsgUpdateGroupPolicyDecisionPolicy): Uint8Array;
                toProtoMsg(message: _82.MsgUpdateGroupPolicyDecisionPolicy): _82.MsgUpdateGroupPolicyDecisionPolicyProtoMsg;
            };
            MsgUpdateGroupPolicyDecisionPolicyResponse: {
                typeUrl: string;
                encode(_: _82.MsgUpdateGroupPolicyDecisionPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _82.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromJSON(_: any): _82.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toJSON(_: _82.MsgUpdateGroupPolicyDecisionPolicyResponse): unknown;
                fromPartial(_: Partial<_82.MsgUpdateGroupPolicyDecisionPolicyResponse>): _82.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromSDK(_: _82.MsgUpdateGroupPolicyDecisionPolicyResponseSDKType): _82.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toSDK(_: _82.MsgUpdateGroupPolicyDecisionPolicyResponse): _82.MsgUpdateGroupPolicyDecisionPolicyResponseSDKType;
                fromAmino(_: _82.MsgUpdateGroupPolicyDecisionPolicyResponseAmino): _82.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toAmino(_: _82.MsgUpdateGroupPolicyDecisionPolicyResponse): _82.MsgUpdateGroupPolicyDecisionPolicyResponseAmino;
                fromAminoMsg(object: _82.MsgUpdateGroupPolicyDecisionPolicyResponseAminoMsg): _82.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toAminoMsg(message: _82.MsgUpdateGroupPolicyDecisionPolicyResponse): _82.MsgUpdateGroupPolicyDecisionPolicyResponseAminoMsg;
                fromProtoMsg(message: _82.MsgUpdateGroupPolicyDecisionPolicyResponseProtoMsg): _82.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toProto(message: _82.MsgUpdateGroupPolicyDecisionPolicyResponse): Uint8Array;
                toProtoMsg(message: _82.MsgUpdateGroupPolicyDecisionPolicyResponse): _82.MsgUpdateGroupPolicyDecisionPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyMetadata: {
                typeUrl: string;
                encode(message: _82.MsgUpdateGroupPolicyMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _82.MsgUpdateGroupPolicyMetadata;
                fromJSON(object: any): _82.MsgUpdateGroupPolicyMetadata;
                toJSON(message: _82.MsgUpdateGroupPolicyMetadata): unknown;
                fromPartial(object: Partial<_82.MsgUpdateGroupPolicyMetadata>): _82.MsgUpdateGroupPolicyMetadata;
                fromSDK(object: _82.MsgUpdateGroupPolicyMetadataSDKType): _82.MsgUpdateGroupPolicyMetadata;
                toSDK(message: _82.MsgUpdateGroupPolicyMetadata): _82.MsgUpdateGroupPolicyMetadataSDKType;
                fromAmino(object: _82.MsgUpdateGroupPolicyMetadataAmino): _82.MsgUpdateGroupPolicyMetadata;
                toAmino(message: _82.MsgUpdateGroupPolicyMetadata): _82.MsgUpdateGroupPolicyMetadataAmino;
                fromAminoMsg(object: _82.MsgUpdateGroupPolicyMetadataAminoMsg): _82.MsgUpdateGroupPolicyMetadata;
                toAminoMsg(message: _82.MsgUpdateGroupPolicyMetadata): _82.MsgUpdateGroupPolicyMetadataAminoMsg;
                fromProtoMsg(message: _82.MsgUpdateGroupPolicyMetadataProtoMsg): _82.MsgUpdateGroupPolicyMetadata;
                toProto(message: _82.MsgUpdateGroupPolicyMetadata): Uint8Array;
                toProtoMsg(message: _82.MsgUpdateGroupPolicyMetadata): _82.MsgUpdateGroupPolicyMetadataProtoMsg;
            };
            MsgUpdateGroupPolicyMetadataResponse: {
                typeUrl: string;
                encode(_: _82.MsgUpdateGroupPolicyMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _82.MsgUpdateGroupPolicyMetadataResponse;
                fromJSON(_: any): _82.MsgUpdateGroupPolicyMetadataResponse;
                toJSON(_: _82.MsgUpdateGroupPolicyMetadataResponse): unknown;
                fromPartial(_: Partial<_82.MsgUpdateGroupPolicyMetadataResponse>): _82.MsgUpdateGroupPolicyMetadataResponse;
                fromSDK(_: _82.MsgUpdateGroupPolicyMetadataResponseSDKType): _82.MsgUpdateGroupPolicyMetadataResponse;
                toSDK(_: _82.MsgUpdateGroupPolicyMetadataResponse): _82.MsgUpdateGroupPolicyMetadataResponseSDKType;
                fromAmino(_: _82.MsgUpdateGroupPolicyMetadataResponseAmino): _82.MsgUpdateGroupPolicyMetadataResponse;
                toAmino(_: _82.MsgUpdateGroupPolicyMetadataResponse): _82.MsgUpdateGroupPolicyMetadataResponseAmino;
                fromAminoMsg(object: _82.MsgUpdateGroupPolicyMetadataResponseAminoMsg): _82.MsgUpdateGroupPolicyMetadataResponse;
                toAminoMsg(message: _82.MsgUpdateGroupPolicyMetadataResponse): _82.MsgUpdateGroupPolicyMetadataResponseAminoMsg;
                fromProtoMsg(message: _82.MsgUpdateGroupPolicyMetadataResponseProtoMsg): _82.MsgUpdateGroupPolicyMetadataResponse;
                toProto(message: _82.MsgUpdateGroupPolicyMetadataResponse): Uint8Array;
                toProtoMsg(message: _82.MsgUpdateGroupPolicyMetadataResponse): _82.MsgUpdateGroupPolicyMetadataResponseProtoMsg;
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _82.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _82.MsgSubmitProposal;
                fromJSON(object: any): _82.MsgSubmitProposal;
                toJSON(message: _82.MsgSubmitProposal): unknown;
                fromPartial(object: Partial<_82.MsgSubmitProposal>): _82.MsgSubmitProposal;
                fromSDK(object: _82.MsgSubmitProposalSDKType): _82.MsgSubmitProposal;
                toSDK(message: _82.MsgSubmitProposal): _82.MsgSubmitProposalSDKType;
                fromAmino(object: _82.MsgSubmitProposalAmino): _82.MsgSubmitProposal;
                toAmino(message: _82.MsgSubmitProposal): _82.MsgSubmitProposalAmino;
                fromAminoMsg(object: _82.MsgSubmitProposalAminoMsg): _82.MsgSubmitProposal;
                toAminoMsg(message: _82.MsgSubmitProposal): _82.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _82.MsgSubmitProposalProtoMsg): _82.MsgSubmitProposal;
                toProto(message: _82.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _82.MsgSubmitProposal): _82.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _82.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _82.MsgSubmitProposalResponse;
                fromJSON(object: any): _82.MsgSubmitProposalResponse;
                toJSON(message: _82.MsgSubmitProposalResponse): unknown;
                fromPartial(object: Partial<_82.MsgSubmitProposalResponse>): _82.MsgSubmitProposalResponse;
                fromSDK(object: _82.MsgSubmitProposalResponseSDKType): _82.MsgSubmitProposalResponse;
                toSDK(message: _82.MsgSubmitProposalResponse): _82.MsgSubmitProposalResponseSDKType;
                fromAmino(object: _82.MsgSubmitProposalResponseAmino): _82.MsgSubmitProposalResponse;
                toAmino(message: _82.MsgSubmitProposalResponse): _82.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _82.MsgSubmitProposalResponseAminoMsg): _82.MsgSubmitProposalResponse;
                toAminoMsg(message: _82.MsgSubmitProposalResponse): _82.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _82.MsgSubmitProposalResponseProtoMsg): _82.MsgSubmitProposalResponse;
                toProto(message: _82.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _82.MsgSubmitProposalResponse): _82.MsgSubmitProposalResponseProtoMsg;
            };
            MsgWithdrawProposal: {
                typeUrl: string;
                encode(message: _82.MsgWithdrawProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _82.MsgWithdrawProposal;
                fromJSON(object: any): _82.MsgWithdrawProposal;
                toJSON(message: _82.MsgWithdrawProposal): unknown;
                fromPartial(object: Partial<_82.MsgWithdrawProposal>): _82.MsgWithdrawProposal;
                fromSDK(object: _82.MsgWithdrawProposalSDKType): _82.MsgWithdrawProposal;
                toSDK(message: _82.MsgWithdrawProposal): _82.MsgWithdrawProposalSDKType;
                fromAmino(object: _82.MsgWithdrawProposalAmino): _82.MsgWithdrawProposal;
                toAmino(message: _82.MsgWithdrawProposal): _82.MsgWithdrawProposalAmino;
                fromAminoMsg(object: _82.MsgWithdrawProposalAminoMsg): _82.MsgWithdrawProposal;
                toAminoMsg(message: _82.MsgWithdrawProposal): _82.MsgWithdrawProposalAminoMsg;
                fromProtoMsg(message: _82.MsgWithdrawProposalProtoMsg): _82.MsgWithdrawProposal;
                toProto(message: _82.MsgWithdrawProposal): Uint8Array;
                toProtoMsg(message: _82.MsgWithdrawProposal): _82.MsgWithdrawProposalProtoMsg;
            };
            MsgWithdrawProposalResponse: {
                typeUrl: string;
                encode(_: _82.MsgWithdrawProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _82.MsgWithdrawProposalResponse;
                fromJSON(_: any): _82.MsgWithdrawProposalResponse;
                toJSON(_: _82.MsgWithdrawProposalResponse): unknown;
                fromPartial(_: Partial<_82.MsgWithdrawProposalResponse>): _82.MsgWithdrawProposalResponse;
                fromSDK(_: _82.MsgWithdrawProposalResponseSDKType): _82.MsgWithdrawProposalResponse;
                toSDK(_: _82.MsgWithdrawProposalResponse): _82.MsgWithdrawProposalResponseSDKType;
                fromAmino(_: _82.MsgWithdrawProposalResponseAmino): _82.MsgWithdrawProposalResponse;
                toAmino(_: _82.MsgWithdrawProposalResponse): _82.MsgWithdrawProposalResponseAmino;
                fromAminoMsg(object: _82.MsgWithdrawProposalResponseAminoMsg): _82.MsgWithdrawProposalResponse;
                toAminoMsg(message: _82.MsgWithdrawProposalResponse): _82.MsgWithdrawProposalResponseAminoMsg;
                fromProtoMsg(message: _82.MsgWithdrawProposalResponseProtoMsg): _82.MsgWithdrawProposalResponse;
                toProto(message: _82.MsgWithdrawProposalResponse): Uint8Array;
                toProtoMsg(message: _82.MsgWithdrawProposalResponse): _82.MsgWithdrawProposalResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _82.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _82.MsgVote;
                fromJSON(object: any): _82.MsgVote;
                toJSON(message: _82.MsgVote): unknown;
                fromPartial(object: Partial<_82.MsgVote>): _82.MsgVote;
                fromSDK(object: _82.MsgVoteSDKType): _82.MsgVote;
                toSDK(message: _82.MsgVote): _82.MsgVoteSDKType;
                fromAmino(object: _82.MsgVoteAmino): _82.MsgVote;
                toAmino(message: _82.MsgVote): _82.MsgVoteAmino;
                fromAminoMsg(object: _82.MsgVoteAminoMsg): _82.MsgVote;
                toAminoMsg(message: _82.MsgVote): _82.MsgVoteAminoMsg;
                fromProtoMsg(message: _82.MsgVoteProtoMsg): _82.MsgVote;
                toProto(message: _82.MsgVote): Uint8Array;
                toProtoMsg(message: _82.MsgVote): _82.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _82.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _82.MsgVoteResponse;
                fromJSON(_: any): _82.MsgVoteResponse;
                toJSON(_: _82.MsgVoteResponse): unknown;
                fromPartial(_: Partial<_82.MsgVoteResponse>): _82.MsgVoteResponse;
                fromSDK(_: _82.MsgVoteResponseSDKType): _82.MsgVoteResponse;
                toSDK(_: _82.MsgVoteResponse): _82.MsgVoteResponseSDKType;
                fromAmino(_: _82.MsgVoteResponseAmino): _82.MsgVoteResponse;
                toAmino(_: _82.MsgVoteResponse): _82.MsgVoteResponseAmino;
                fromAminoMsg(object: _82.MsgVoteResponseAminoMsg): _82.MsgVoteResponse;
                toAminoMsg(message: _82.MsgVoteResponse): _82.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _82.MsgVoteResponseProtoMsg): _82.MsgVoteResponse;
                toProto(message: _82.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _82.MsgVoteResponse): _82.MsgVoteResponseProtoMsg;
            };
            MsgExec: {
                typeUrl: string;
                encode(message: _82.MsgExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _82.MsgExec;
                fromJSON(object: any): _82.MsgExec;
                toJSON(message: _82.MsgExec): unknown;
                fromPartial(object: Partial<_82.MsgExec>): _82.MsgExec;
                fromSDK(object: _82.MsgExecSDKType): _82.MsgExec;
                toSDK(message: _82.MsgExec): _82.MsgExecSDKType;
                fromAmino(object: _82.MsgExecAmino): _82.MsgExec;
                toAmino(message: _82.MsgExec): _82.MsgExecAmino;
                fromAminoMsg(object: _82.MsgExecAminoMsg): _82.MsgExec;
                toAminoMsg(message: _82.MsgExec): _82.MsgExecAminoMsg;
                fromProtoMsg(message: _82.MsgExecProtoMsg): _82.MsgExec;
                toProto(message: _82.MsgExec): Uint8Array;
                toProtoMsg(message: _82.MsgExec): _82.MsgExecProtoMsg;
            };
            MsgExecResponse: {
                typeUrl: string;
                encode(message: _82.MsgExecResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _82.MsgExecResponse;
                fromJSON(object: any): _82.MsgExecResponse;
                toJSON(message: _82.MsgExecResponse): unknown;
                fromPartial(object: Partial<_82.MsgExecResponse>): _82.MsgExecResponse;
                fromSDK(object: _82.MsgExecResponseSDKType): _82.MsgExecResponse;
                toSDK(message: _82.MsgExecResponse): _82.MsgExecResponseSDKType;
                fromAmino(object: _82.MsgExecResponseAmino): _82.MsgExecResponse;
                toAmino(message: _82.MsgExecResponse): _82.MsgExecResponseAmino;
                fromAminoMsg(object: _82.MsgExecResponseAminoMsg): _82.MsgExecResponse;
                toAminoMsg(message: _82.MsgExecResponse): _82.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _82.MsgExecResponseProtoMsg): _82.MsgExecResponse;
                toProto(message: _82.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _82.MsgExecResponse): _82.MsgExecResponseProtoMsg;
            };
            MsgLeaveGroup: {
                typeUrl: string;
                encode(message: _82.MsgLeaveGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _82.MsgLeaveGroup;
                fromJSON(object: any): _82.MsgLeaveGroup;
                toJSON(message: _82.MsgLeaveGroup): unknown;
                fromPartial(object: Partial<_82.MsgLeaveGroup>): _82.MsgLeaveGroup;
                fromSDK(object: _82.MsgLeaveGroupSDKType): _82.MsgLeaveGroup;
                toSDK(message: _82.MsgLeaveGroup): _82.MsgLeaveGroupSDKType;
                fromAmino(object: _82.MsgLeaveGroupAmino): _82.MsgLeaveGroup;
                toAmino(message: _82.MsgLeaveGroup): _82.MsgLeaveGroupAmino;
                fromAminoMsg(object: _82.MsgLeaveGroupAminoMsg): _82.MsgLeaveGroup;
                toAminoMsg(message: _82.MsgLeaveGroup): _82.MsgLeaveGroupAminoMsg;
                fromProtoMsg(message: _82.MsgLeaveGroupProtoMsg): _82.MsgLeaveGroup;
                toProto(message: _82.MsgLeaveGroup): Uint8Array;
                toProtoMsg(message: _82.MsgLeaveGroup): _82.MsgLeaveGroupProtoMsg;
            };
            MsgLeaveGroupResponse: {
                typeUrl: string;
                encode(_: _82.MsgLeaveGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _82.MsgLeaveGroupResponse;
                fromJSON(_: any): _82.MsgLeaveGroupResponse;
                toJSON(_: _82.MsgLeaveGroupResponse): unknown;
                fromPartial(_: Partial<_82.MsgLeaveGroupResponse>): _82.MsgLeaveGroupResponse;
                fromSDK(_: _82.MsgLeaveGroupResponseSDKType): _82.MsgLeaveGroupResponse;
                toSDK(_: _82.MsgLeaveGroupResponse): _82.MsgLeaveGroupResponseSDKType;
                fromAmino(_: _82.MsgLeaveGroupResponseAmino): _82.MsgLeaveGroupResponse;
                toAmino(_: _82.MsgLeaveGroupResponse): _82.MsgLeaveGroupResponseAmino;
                fromAminoMsg(object: _82.MsgLeaveGroupResponseAminoMsg): _82.MsgLeaveGroupResponse;
                toAminoMsg(message: _82.MsgLeaveGroupResponse): _82.MsgLeaveGroupResponseAminoMsg;
                fromProtoMsg(message: _82.MsgLeaveGroupResponseProtoMsg): _82.MsgLeaveGroupResponse;
                toProto(message: _82.MsgLeaveGroupResponse): Uint8Array;
                toProtoMsg(message: _82.MsgLeaveGroupResponse): _82.MsgLeaveGroupResponseProtoMsg;
            };
            QueryGroupInfoRequest: {
                typeUrl: string;
                encode(message: _81.QueryGroupInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _81.QueryGroupInfoRequest;
                fromJSON(object: any): _81.QueryGroupInfoRequest;
                toJSON(message: _81.QueryGroupInfoRequest): unknown;
                fromPartial(object: Partial<_81.QueryGroupInfoRequest>): _81.QueryGroupInfoRequest;
                fromSDK(object: _81.QueryGroupInfoRequestSDKType): _81.QueryGroupInfoRequest;
                toSDK(message: _81.QueryGroupInfoRequest): _81.QueryGroupInfoRequestSDKType;
                fromAmino(object: _81.QueryGroupInfoRequestAmino): _81.QueryGroupInfoRequest;
                toAmino(message: _81.QueryGroupInfoRequest): _81.QueryGroupInfoRequestAmino;
                fromAminoMsg(object: _81.QueryGroupInfoRequestAminoMsg): _81.QueryGroupInfoRequest;
                toAminoMsg(message: _81.QueryGroupInfoRequest): _81.QueryGroupInfoRequestAminoMsg;
                fromProtoMsg(message: _81.QueryGroupInfoRequestProtoMsg): _81.QueryGroupInfoRequest;
                toProto(message: _81.QueryGroupInfoRequest): Uint8Array;
                toProtoMsg(message: _81.QueryGroupInfoRequest): _81.QueryGroupInfoRequestProtoMsg;
            };
            QueryGroupInfoResponse: {
                typeUrl: string;
                encode(message: _81.QueryGroupInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _81.QueryGroupInfoResponse;
                fromJSON(object: any): _81.QueryGroupInfoResponse;
                toJSON(message: _81.QueryGroupInfoResponse): unknown;
                fromPartial(object: Partial<_81.QueryGroupInfoResponse>): _81.QueryGroupInfoResponse;
                fromSDK(object: _81.QueryGroupInfoResponseSDKType): _81.QueryGroupInfoResponse;
                toSDK(message: _81.QueryGroupInfoResponse): _81.QueryGroupInfoResponseSDKType;
                fromAmino(object: _81.QueryGroupInfoResponseAmino): _81.QueryGroupInfoResponse;
                toAmino(message: _81.QueryGroupInfoResponse): _81.QueryGroupInfoResponseAmino;
                fromAminoMsg(object: _81.QueryGroupInfoResponseAminoMsg): _81.QueryGroupInfoResponse;
                toAminoMsg(message: _81.QueryGroupInfoResponse): _81.QueryGroupInfoResponseAminoMsg;
                fromProtoMsg(message: _81.QueryGroupInfoResponseProtoMsg): _81.QueryGroupInfoResponse;
                toProto(message: _81.QueryGroupInfoResponse): Uint8Array;
                toProtoMsg(message: _81.QueryGroupInfoResponse): _81.QueryGroupInfoResponseProtoMsg;
            };
            QueryGroupPolicyInfoRequest: {
                typeUrl: string;
                encode(message: _81.QueryGroupPolicyInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _81.QueryGroupPolicyInfoRequest;
                fromJSON(object: any): _81.QueryGroupPolicyInfoRequest;
                toJSON(message: _81.QueryGroupPolicyInfoRequest): unknown;
                fromPartial(object: Partial<_81.QueryGroupPolicyInfoRequest>): _81.QueryGroupPolicyInfoRequest;
                fromSDK(object: _81.QueryGroupPolicyInfoRequestSDKType): _81.QueryGroupPolicyInfoRequest;
                toSDK(message: _81.QueryGroupPolicyInfoRequest): _81.QueryGroupPolicyInfoRequestSDKType;
                fromAmino(object: _81.QueryGroupPolicyInfoRequestAmino): _81.QueryGroupPolicyInfoRequest;
                toAmino(message: _81.QueryGroupPolicyInfoRequest): _81.QueryGroupPolicyInfoRequestAmino;
                fromAminoMsg(object: _81.QueryGroupPolicyInfoRequestAminoMsg): _81.QueryGroupPolicyInfoRequest;
                toAminoMsg(message: _81.QueryGroupPolicyInfoRequest): _81.QueryGroupPolicyInfoRequestAminoMsg;
                fromProtoMsg(message: _81.QueryGroupPolicyInfoRequestProtoMsg): _81.QueryGroupPolicyInfoRequest;
                toProto(message: _81.QueryGroupPolicyInfoRequest): Uint8Array;
                toProtoMsg(message: _81.QueryGroupPolicyInfoRequest): _81.QueryGroupPolicyInfoRequestProtoMsg;
            };
            QueryGroupPolicyInfoResponse: {
                typeUrl: string;
                encode(message: _81.QueryGroupPolicyInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _81.QueryGroupPolicyInfoResponse;
                fromJSON(object: any): _81.QueryGroupPolicyInfoResponse;
                toJSON(message: _81.QueryGroupPolicyInfoResponse): unknown;
                fromPartial(object: Partial<_81.QueryGroupPolicyInfoResponse>): _81.QueryGroupPolicyInfoResponse;
                fromSDK(object: _81.QueryGroupPolicyInfoResponseSDKType): _81.QueryGroupPolicyInfoResponse;
                toSDK(message: _81.QueryGroupPolicyInfoResponse): _81.QueryGroupPolicyInfoResponseSDKType;
                fromAmino(object: _81.QueryGroupPolicyInfoResponseAmino): _81.QueryGroupPolicyInfoResponse;
                toAmino(message: _81.QueryGroupPolicyInfoResponse): _81.QueryGroupPolicyInfoResponseAmino;
                fromAminoMsg(object: _81.QueryGroupPolicyInfoResponseAminoMsg): _81.QueryGroupPolicyInfoResponse;
                toAminoMsg(message: _81.QueryGroupPolicyInfoResponse): _81.QueryGroupPolicyInfoResponseAminoMsg;
                fromProtoMsg(message: _81.QueryGroupPolicyInfoResponseProtoMsg): _81.QueryGroupPolicyInfoResponse;
                toProto(message: _81.QueryGroupPolicyInfoResponse): Uint8Array;
                toProtoMsg(message: _81.QueryGroupPolicyInfoResponse): _81.QueryGroupPolicyInfoResponseProtoMsg;
            };
            QueryGroupMembersRequest: {
                typeUrl: string;
                encode(message: _81.QueryGroupMembersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _81.QueryGroupMembersRequest;
                fromJSON(object: any): _81.QueryGroupMembersRequest;
                toJSON(message: _81.QueryGroupMembersRequest): unknown;
                fromPartial(object: Partial<_81.QueryGroupMembersRequest>): _81.QueryGroupMembersRequest;
                fromSDK(object: _81.QueryGroupMembersRequestSDKType): _81.QueryGroupMembersRequest;
                toSDK(message: _81.QueryGroupMembersRequest): _81.QueryGroupMembersRequestSDKType;
                fromAmino(object: _81.QueryGroupMembersRequestAmino): _81.QueryGroupMembersRequest;
                toAmino(message: _81.QueryGroupMembersRequest): _81.QueryGroupMembersRequestAmino;
                fromAminoMsg(object: _81.QueryGroupMembersRequestAminoMsg): _81.QueryGroupMembersRequest;
                toAminoMsg(message: _81.QueryGroupMembersRequest): _81.QueryGroupMembersRequestAminoMsg;
                fromProtoMsg(message: _81.QueryGroupMembersRequestProtoMsg): _81.QueryGroupMembersRequest;
                toProto(message: _81.QueryGroupMembersRequest): Uint8Array;
                toProtoMsg(message: _81.QueryGroupMembersRequest): _81.QueryGroupMembersRequestProtoMsg;
            };
            QueryGroupMembersResponse: {
                typeUrl: string;
                encode(message: _81.QueryGroupMembersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _81.QueryGroupMembersResponse;
                fromJSON(object: any): _81.QueryGroupMembersResponse;
                toJSON(message: _81.QueryGroupMembersResponse): unknown;
                fromPartial(object: Partial<_81.QueryGroupMembersResponse>): _81.QueryGroupMembersResponse;
                fromSDK(object: _81.QueryGroupMembersResponseSDKType): _81.QueryGroupMembersResponse;
                toSDK(message: _81.QueryGroupMembersResponse): _81.QueryGroupMembersResponseSDKType;
                fromAmino(object: _81.QueryGroupMembersResponseAmino): _81.QueryGroupMembersResponse;
                toAmino(message: _81.QueryGroupMembersResponse): _81.QueryGroupMembersResponseAmino;
                fromAminoMsg(object: _81.QueryGroupMembersResponseAminoMsg): _81.QueryGroupMembersResponse;
                toAminoMsg(message: _81.QueryGroupMembersResponse): _81.QueryGroupMembersResponseAminoMsg;
                fromProtoMsg(message: _81.QueryGroupMembersResponseProtoMsg): _81.QueryGroupMembersResponse;
                toProto(message: _81.QueryGroupMembersResponse): Uint8Array;
                toProtoMsg(message: _81.QueryGroupMembersResponse): _81.QueryGroupMembersResponseProtoMsg;
            };
            QueryGroupsByAdminRequest: {
                typeUrl: string;
                encode(message: _81.QueryGroupsByAdminRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _81.QueryGroupsByAdminRequest;
                fromJSON(object: any): _81.QueryGroupsByAdminRequest;
                toJSON(message: _81.QueryGroupsByAdminRequest): unknown;
                fromPartial(object: Partial<_81.QueryGroupsByAdminRequest>): _81.QueryGroupsByAdminRequest;
                fromSDK(object: _81.QueryGroupsByAdminRequestSDKType): _81.QueryGroupsByAdminRequest;
                toSDK(message: _81.QueryGroupsByAdminRequest): _81.QueryGroupsByAdminRequestSDKType;
                fromAmino(object: _81.QueryGroupsByAdminRequestAmino): _81.QueryGroupsByAdminRequest;
                toAmino(message: _81.QueryGroupsByAdminRequest): _81.QueryGroupsByAdminRequestAmino;
                fromAminoMsg(object: _81.QueryGroupsByAdminRequestAminoMsg): _81.QueryGroupsByAdminRequest;
                toAminoMsg(message: _81.QueryGroupsByAdminRequest): _81.QueryGroupsByAdminRequestAminoMsg;
                fromProtoMsg(message: _81.QueryGroupsByAdminRequestProtoMsg): _81.QueryGroupsByAdminRequest;
                toProto(message: _81.QueryGroupsByAdminRequest): Uint8Array;
                toProtoMsg(message: _81.QueryGroupsByAdminRequest): _81.QueryGroupsByAdminRequestProtoMsg;
            };
            QueryGroupsByAdminResponse: {
                typeUrl: string;
                encode(message: _81.QueryGroupsByAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _81.QueryGroupsByAdminResponse;
                fromJSON(object: any): _81.QueryGroupsByAdminResponse;
                toJSON(message: _81.QueryGroupsByAdminResponse): unknown;
                fromPartial(object: Partial<_81.QueryGroupsByAdminResponse>): _81.QueryGroupsByAdminResponse;
                fromSDK(object: _81.QueryGroupsByAdminResponseSDKType): _81.QueryGroupsByAdminResponse;
                toSDK(message: _81.QueryGroupsByAdminResponse): _81.QueryGroupsByAdminResponseSDKType;
                fromAmino(object: _81.QueryGroupsByAdminResponseAmino): _81.QueryGroupsByAdminResponse;
                toAmino(message: _81.QueryGroupsByAdminResponse): _81.QueryGroupsByAdminResponseAmino;
                fromAminoMsg(object: _81.QueryGroupsByAdminResponseAminoMsg): _81.QueryGroupsByAdminResponse;
                toAminoMsg(message: _81.QueryGroupsByAdminResponse): _81.QueryGroupsByAdminResponseAminoMsg;
                fromProtoMsg(message: _81.QueryGroupsByAdminResponseProtoMsg): _81.QueryGroupsByAdminResponse;
                toProto(message: _81.QueryGroupsByAdminResponse): Uint8Array;
                toProtoMsg(message: _81.QueryGroupsByAdminResponse): _81.QueryGroupsByAdminResponseProtoMsg;
            };
            QueryGroupPoliciesByGroupRequest: {
                typeUrl: string;
                encode(message: _81.QueryGroupPoliciesByGroupRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _81.QueryGroupPoliciesByGroupRequest;
                fromJSON(object: any): _81.QueryGroupPoliciesByGroupRequest;
                toJSON(message: _81.QueryGroupPoliciesByGroupRequest): unknown;
                fromPartial(object: Partial<_81.QueryGroupPoliciesByGroupRequest>): _81.QueryGroupPoliciesByGroupRequest;
                fromSDK(object: _81.QueryGroupPoliciesByGroupRequestSDKType): _81.QueryGroupPoliciesByGroupRequest;
                toSDK(message: _81.QueryGroupPoliciesByGroupRequest): _81.QueryGroupPoliciesByGroupRequestSDKType;
                fromAmino(object: _81.QueryGroupPoliciesByGroupRequestAmino): _81.QueryGroupPoliciesByGroupRequest;
                toAmino(message: _81.QueryGroupPoliciesByGroupRequest): _81.QueryGroupPoliciesByGroupRequestAmino;
                fromAminoMsg(object: _81.QueryGroupPoliciesByGroupRequestAminoMsg): _81.QueryGroupPoliciesByGroupRequest;
                toAminoMsg(message: _81.QueryGroupPoliciesByGroupRequest): _81.QueryGroupPoliciesByGroupRequestAminoMsg;
                fromProtoMsg(message: _81.QueryGroupPoliciesByGroupRequestProtoMsg): _81.QueryGroupPoliciesByGroupRequest;
                toProto(message: _81.QueryGroupPoliciesByGroupRequest): Uint8Array;
                toProtoMsg(message: _81.QueryGroupPoliciesByGroupRequest): _81.QueryGroupPoliciesByGroupRequestProtoMsg;
            };
            QueryGroupPoliciesByGroupResponse: {
                typeUrl: string;
                encode(message: _81.QueryGroupPoliciesByGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _81.QueryGroupPoliciesByGroupResponse;
                fromJSON(object: any): _81.QueryGroupPoliciesByGroupResponse;
                toJSON(message: _81.QueryGroupPoliciesByGroupResponse): unknown;
                fromPartial(object: Partial<_81.QueryGroupPoliciesByGroupResponse>): _81.QueryGroupPoliciesByGroupResponse;
                fromSDK(object: _81.QueryGroupPoliciesByGroupResponseSDKType): _81.QueryGroupPoliciesByGroupResponse;
                toSDK(message: _81.QueryGroupPoliciesByGroupResponse): _81.QueryGroupPoliciesByGroupResponseSDKType;
                fromAmino(object: _81.QueryGroupPoliciesByGroupResponseAmino): _81.QueryGroupPoliciesByGroupResponse;
                toAmino(message: _81.QueryGroupPoliciesByGroupResponse): _81.QueryGroupPoliciesByGroupResponseAmino;
                fromAminoMsg(object: _81.QueryGroupPoliciesByGroupResponseAminoMsg): _81.QueryGroupPoliciesByGroupResponse;
                toAminoMsg(message: _81.QueryGroupPoliciesByGroupResponse): _81.QueryGroupPoliciesByGroupResponseAminoMsg;
                fromProtoMsg(message: _81.QueryGroupPoliciesByGroupResponseProtoMsg): _81.QueryGroupPoliciesByGroupResponse;
                toProto(message: _81.QueryGroupPoliciesByGroupResponse): Uint8Array;
                toProtoMsg(message: _81.QueryGroupPoliciesByGroupResponse): _81.QueryGroupPoliciesByGroupResponseProtoMsg;
            };
            QueryGroupPoliciesByAdminRequest: {
                typeUrl: string;
                encode(message: _81.QueryGroupPoliciesByAdminRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _81.QueryGroupPoliciesByAdminRequest;
                fromJSON(object: any): _81.QueryGroupPoliciesByAdminRequest;
                toJSON(message: _81.QueryGroupPoliciesByAdminRequest): unknown;
                fromPartial(object: Partial<_81.QueryGroupPoliciesByAdminRequest>): _81.QueryGroupPoliciesByAdminRequest;
                fromSDK(object: _81.QueryGroupPoliciesByAdminRequestSDKType): _81.QueryGroupPoliciesByAdminRequest;
                toSDK(message: _81.QueryGroupPoliciesByAdminRequest): _81.QueryGroupPoliciesByAdminRequestSDKType;
                fromAmino(object: _81.QueryGroupPoliciesByAdminRequestAmino): _81.QueryGroupPoliciesByAdminRequest;
                toAmino(message: _81.QueryGroupPoliciesByAdminRequest): _81.QueryGroupPoliciesByAdminRequestAmino;
                fromAminoMsg(object: _81.QueryGroupPoliciesByAdminRequestAminoMsg): _81.QueryGroupPoliciesByAdminRequest;
                toAminoMsg(message: _81.QueryGroupPoliciesByAdminRequest): _81.QueryGroupPoliciesByAdminRequestAminoMsg;
                fromProtoMsg(message: _81.QueryGroupPoliciesByAdminRequestProtoMsg): _81.QueryGroupPoliciesByAdminRequest;
                toProto(message: _81.QueryGroupPoliciesByAdminRequest): Uint8Array;
                toProtoMsg(message: _81.QueryGroupPoliciesByAdminRequest): _81.QueryGroupPoliciesByAdminRequestProtoMsg;
            };
            QueryGroupPoliciesByAdminResponse: {
                typeUrl: string;
                encode(message: _81.QueryGroupPoliciesByAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _81.QueryGroupPoliciesByAdminResponse;
                fromJSON(object: any): _81.QueryGroupPoliciesByAdminResponse;
                toJSON(message: _81.QueryGroupPoliciesByAdminResponse): unknown;
                fromPartial(object: Partial<_81.QueryGroupPoliciesByAdminResponse>): _81.QueryGroupPoliciesByAdminResponse;
                fromSDK(object: _81.QueryGroupPoliciesByAdminResponseSDKType): _81.QueryGroupPoliciesByAdminResponse;
                toSDK(message: _81.QueryGroupPoliciesByAdminResponse): _81.QueryGroupPoliciesByAdminResponseSDKType;
                fromAmino(object: _81.QueryGroupPoliciesByAdminResponseAmino): _81.QueryGroupPoliciesByAdminResponse;
                toAmino(message: _81.QueryGroupPoliciesByAdminResponse): _81.QueryGroupPoliciesByAdminResponseAmino;
                fromAminoMsg(object: _81.QueryGroupPoliciesByAdminResponseAminoMsg): _81.QueryGroupPoliciesByAdminResponse;
                toAminoMsg(message: _81.QueryGroupPoliciesByAdminResponse): _81.QueryGroupPoliciesByAdminResponseAminoMsg;
                fromProtoMsg(message: _81.QueryGroupPoliciesByAdminResponseProtoMsg): _81.QueryGroupPoliciesByAdminResponse;
                toProto(message: _81.QueryGroupPoliciesByAdminResponse): Uint8Array;
                toProtoMsg(message: _81.QueryGroupPoliciesByAdminResponse): _81.QueryGroupPoliciesByAdminResponseProtoMsg;
            };
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _81.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _81.QueryProposalRequest;
                fromJSON(object: any): _81.QueryProposalRequest;
                toJSON(message: _81.QueryProposalRequest): unknown;
                fromPartial(object: Partial<_81.QueryProposalRequest>): _81.QueryProposalRequest;
                fromSDK(object: _81.QueryProposalRequestSDKType): _81.QueryProposalRequest;
                toSDK(message: _81.QueryProposalRequest): _81.QueryProposalRequestSDKType;
                fromAmino(object: _81.QueryProposalRequestAmino): _81.QueryProposalRequest;
                toAmino(message: _81.QueryProposalRequest): _81.QueryProposalRequestAmino;
                fromAminoMsg(object: _81.QueryProposalRequestAminoMsg): _81.QueryProposalRequest;
                toAminoMsg(message: _81.QueryProposalRequest): _81.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _81.QueryProposalRequestProtoMsg): _81.QueryProposalRequest;
                toProto(message: _81.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _81.QueryProposalRequest): _81.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _81.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _81.QueryProposalResponse;
                fromJSON(object: any): _81.QueryProposalResponse;
                toJSON(message: _81.QueryProposalResponse): unknown;
                fromPartial(object: Partial<_81.QueryProposalResponse>): _81.QueryProposalResponse;
                fromSDK(object: _81.QueryProposalResponseSDKType): _81.QueryProposalResponse;
                toSDK(message: _81.QueryProposalResponse): _81.QueryProposalResponseSDKType;
                fromAmino(object: _81.QueryProposalResponseAmino): _81.QueryProposalResponse;
                toAmino(message: _81.QueryProposalResponse): _81.QueryProposalResponseAmino;
                fromAminoMsg(object: _81.QueryProposalResponseAminoMsg): _81.QueryProposalResponse;
                toAminoMsg(message: _81.QueryProposalResponse): _81.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _81.QueryProposalResponseProtoMsg): _81.QueryProposalResponse;
                toProto(message: _81.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _81.QueryProposalResponse): _81.QueryProposalResponseProtoMsg;
            };
            QueryProposalsByGroupPolicyRequest: {
                typeUrl: string;
                encode(message: _81.QueryProposalsByGroupPolicyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _81.QueryProposalsByGroupPolicyRequest;
                fromJSON(object: any): _81.QueryProposalsByGroupPolicyRequest;
                toJSON(message: _81.QueryProposalsByGroupPolicyRequest): unknown;
                fromPartial(object: Partial<_81.QueryProposalsByGroupPolicyRequest>): _81.QueryProposalsByGroupPolicyRequest;
                fromSDK(object: _81.QueryProposalsByGroupPolicyRequestSDKType): _81.QueryProposalsByGroupPolicyRequest;
                toSDK(message: _81.QueryProposalsByGroupPolicyRequest): _81.QueryProposalsByGroupPolicyRequestSDKType;
                fromAmino(object: _81.QueryProposalsByGroupPolicyRequestAmino): _81.QueryProposalsByGroupPolicyRequest;
                toAmino(message: _81.QueryProposalsByGroupPolicyRequest): _81.QueryProposalsByGroupPolicyRequestAmino;
                fromAminoMsg(object: _81.QueryProposalsByGroupPolicyRequestAminoMsg): _81.QueryProposalsByGroupPolicyRequest;
                toAminoMsg(message: _81.QueryProposalsByGroupPolicyRequest): _81.QueryProposalsByGroupPolicyRequestAminoMsg;
                fromProtoMsg(message: _81.QueryProposalsByGroupPolicyRequestProtoMsg): _81.QueryProposalsByGroupPolicyRequest;
                toProto(message: _81.QueryProposalsByGroupPolicyRequest): Uint8Array;
                toProtoMsg(message: _81.QueryProposalsByGroupPolicyRequest): _81.QueryProposalsByGroupPolicyRequestProtoMsg;
            };
            QueryProposalsByGroupPolicyResponse: {
                typeUrl: string;
                encode(message: _81.QueryProposalsByGroupPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _81.QueryProposalsByGroupPolicyResponse;
                fromJSON(object: any): _81.QueryProposalsByGroupPolicyResponse;
                toJSON(message: _81.QueryProposalsByGroupPolicyResponse): unknown;
                fromPartial(object: Partial<_81.QueryProposalsByGroupPolicyResponse>): _81.QueryProposalsByGroupPolicyResponse;
                fromSDK(object: _81.QueryProposalsByGroupPolicyResponseSDKType): _81.QueryProposalsByGroupPolicyResponse;
                toSDK(message: _81.QueryProposalsByGroupPolicyResponse): _81.QueryProposalsByGroupPolicyResponseSDKType;
                fromAmino(object: _81.QueryProposalsByGroupPolicyResponseAmino): _81.QueryProposalsByGroupPolicyResponse;
                toAmino(message: _81.QueryProposalsByGroupPolicyResponse): _81.QueryProposalsByGroupPolicyResponseAmino;
                fromAminoMsg(object: _81.QueryProposalsByGroupPolicyResponseAminoMsg): _81.QueryProposalsByGroupPolicyResponse;
                toAminoMsg(message: _81.QueryProposalsByGroupPolicyResponse): _81.QueryProposalsByGroupPolicyResponseAminoMsg;
                fromProtoMsg(message: _81.QueryProposalsByGroupPolicyResponseProtoMsg): _81.QueryProposalsByGroupPolicyResponse;
                toProto(message: _81.QueryProposalsByGroupPolicyResponse): Uint8Array;
                toProtoMsg(message: _81.QueryProposalsByGroupPolicyResponse): _81.QueryProposalsByGroupPolicyResponseProtoMsg;
            };
            QueryVoteByProposalVoterRequest: {
                typeUrl: string;
                encode(message: _81.QueryVoteByProposalVoterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _81.QueryVoteByProposalVoterRequest;
                fromJSON(object: any): _81.QueryVoteByProposalVoterRequest;
                toJSON(message: _81.QueryVoteByProposalVoterRequest): unknown;
                fromPartial(object: Partial<_81.QueryVoteByProposalVoterRequest>): _81.QueryVoteByProposalVoterRequest;
                fromSDK(object: _81.QueryVoteByProposalVoterRequestSDKType): _81.QueryVoteByProposalVoterRequest;
                toSDK(message: _81.QueryVoteByProposalVoterRequest): _81.QueryVoteByProposalVoterRequestSDKType;
                fromAmino(object: _81.QueryVoteByProposalVoterRequestAmino): _81.QueryVoteByProposalVoterRequest;
                toAmino(message: _81.QueryVoteByProposalVoterRequest): _81.QueryVoteByProposalVoterRequestAmino;
                fromAminoMsg(object: _81.QueryVoteByProposalVoterRequestAminoMsg): _81.QueryVoteByProposalVoterRequest;
                toAminoMsg(message: _81.QueryVoteByProposalVoterRequest): _81.QueryVoteByProposalVoterRequestAminoMsg;
                fromProtoMsg(message: _81.QueryVoteByProposalVoterRequestProtoMsg): _81.QueryVoteByProposalVoterRequest;
                toProto(message: _81.QueryVoteByProposalVoterRequest): Uint8Array;
                toProtoMsg(message: _81.QueryVoteByProposalVoterRequest): _81.QueryVoteByProposalVoterRequestProtoMsg;
            };
            QueryVoteByProposalVoterResponse: {
                typeUrl: string;
                encode(message: _81.QueryVoteByProposalVoterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _81.QueryVoteByProposalVoterResponse;
                fromJSON(object: any): _81.QueryVoteByProposalVoterResponse;
                toJSON(message: _81.QueryVoteByProposalVoterResponse): unknown;
                fromPartial(object: Partial<_81.QueryVoteByProposalVoterResponse>): _81.QueryVoteByProposalVoterResponse;
                fromSDK(object: _81.QueryVoteByProposalVoterResponseSDKType): _81.QueryVoteByProposalVoterResponse;
                toSDK(message: _81.QueryVoteByProposalVoterResponse): _81.QueryVoteByProposalVoterResponseSDKType;
                fromAmino(object: _81.QueryVoteByProposalVoterResponseAmino): _81.QueryVoteByProposalVoterResponse;
                toAmino(message: _81.QueryVoteByProposalVoterResponse): _81.QueryVoteByProposalVoterResponseAmino;
                fromAminoMsg(object: _81.QueryVoteByProposalVoterResponseAminoMsg): _81.QueryVoteByProposalVoterResponse;
                toAminoMsg(message: _81.QueryVoteByProposalVoterResponse): _81.QueryVoteByProposalVoterResponseAminoMsg;
                fromProtoMsg(message: _81.QueryVoteByProposalVoterResponseProtoMsg): _81.QueryVoteByProposalVoterResponse;
                toProto(message: _81.QueryVoteByProposalVoterResponse): Uint8Array;
                toProtoMsg(message: _81.QueryVoteByProposalVoterResponse): _81.QueryVoteByProposalVoterResponseProtoMsg;
            };
            QueryVotesByProposalRequest: {
                typeUrl: string;
                encode(message: _81.QueryVotesByProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _81.QueryVotesByProposalRequest;
                fromJSON(object: any): _81.QueryVotesByProposalRequest;
                toJSON(message: _81.QueryVotesByProposalRequest): unknown;
                fromPartial(object: Partial<_81.QueryVotesByProposalRequest>): _81.QueryVotesByProposalRequest;
                fromSDK(object: _81.QueryVotesByProposalRequestSDKType): _81.QueryVotesByProposalRequest;
                toSDK(message: _81.QueryVotesByProposalRequest): _81.QueryVotesByProposalRequestSDKType;
                fromAmino(object: _81.QueryVotesByProposalRequestAmino): _81.QueryVotesByProposalRequest;
                toAmino(message: _81.QueryVotesByProposalRequest): _81.QueryVotesByProposalRequestAmino;
                fromAminoMsg(object: _81.QueryVotesByProposalRequestAminoMsg): _81.QueryVotesByProposalRequest;
                toAminoMsg(message: _81.QueryVotesByProposalRequest): _81.QueryVotesByProposalRequestAminoMsg;
                fromProtoMsg(message: _81.QueryVotesByProposalRequestProtoMsg): _81.QueryVotesByProposalRequest;
                toProto(message: _81.QueryVotesByProposalRequest): Uint8Array;
                toProtoMsg(message: _81.QueryVotesByProposalRequest): _81.QueryVotesByProposalRequestProtoMsg;
            };
            QueryVotesByProposalResponse: {
                typeUrl: string;
                encode(message: _81.QueryVotesByProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _81.QueryVotesByProposalResponse;
                fromJSON(object: any): _81.QueryVotesByProposalResponse;
                toJSON(message: _81.QueryVotesByProposalResponse): unknown;
                fromPartial(object: Partial<_81.QueryVotesByProposalResponse>): _81.QueryVotesByProposalResponse;
                fromSDK(object: _81.QueryVotesByProposalResponseSDKType): _81.QueryVotesByProposalResponse;
                toSDK(message: _81.QueryVotesByProposalResponse): _81.QueryVotesByProposalResponseSDKType;
                fromAmino(object: _81.QueryVotesByProposalResponseAmino): _81.QueryVotesByProposalResponse;
                toAmino(message: _81.QueryVotesByProposalResponse): _81.QueryVotesByProposalResponseAmino;
                fromAminoMsg(object: _81.QueryVotesByProposalResponseAminoMsg): _81.QueryVotesByProposalResponse;
                toAminoMsg(message: _81.QueryVotesByProposalResponse): _81.QueryVotesByProposalResponseAminoMsg;
                fromProtoMsg(message: _81.QueryVotesByProposalResponseProtoMsg): _81.QueryVotesByProposalResponse;
                toProto(message: _81.QueryVotesByProposalResponse): Uint8Array;
                toProtoMsg(message: _81.QueryVotesByProposalResponse): _81.QueryVotesByProposalResponseProtoMsg;
            };
            QueryVotesByVoterRequest: {
                typeUrl: string;
                encode(message: _81.QueryVotesByVoterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _81.QueryVotesByVoterRequest;
                fromJSON(object: any): _81.QueryVotesByVoterRequest;
                toJSON(message: _81.QueryVotesByVoterRequest): unknown;
                fromPartial(object: Partial<_81.QueryVotesByVoterRequest>): _81.QueryVotesByVoterRequest;
                fromSDK(object: _81.QueryVotesByVoterRequestSDKType): _81.QueryVotesByVoterRequest;
                toSDK(message: _81.QueryVotesByVoterRequest): _81.QueryVotesByVoterRequestSDKType;
                fromAmino(object: _81.QueryVotesByVoterRequestAmino): _81.QueryVotesByVoterRequest;
                toAmino(message: _81.QueryVotesByVoterRequest): _81.QueryVotesByVoterRequestAmino;
                fromAminoMsg(object: _81.QueryVotesByVoterRequestAminoMsg): _81.QueryVotesByVoterRequest;
                toAminoMsg(message: _81.QueryVotesByVoterRequest): _81.QueryVotesByVoterRequestAminoMsg;
                fromProtoMsg(message: _81.QueryVotesByVoterRequestProtoMsg): _81.QueryVotesByVoterRequest;
                toProto(message: _81.QueryVotesByVoterRequest): Uint8Array;
                toProtoMsg(message: _81.QueryVotesByVoterRequest): _81.QueryVotesByVoterRequestProtoMsg;
            };
            QueryVotesByVoterResponse: {
                typeUrl: string;
                encode(message: _81.QueryVotesByVoterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _81.QueryVotesByVoterResponse;
                fromJSON(object: any): _81.QueryVotesByVoterResponse;
                toJSON(message: _81.QueryVotesByVoterResponse): unknown;
                fromPartial(object: Partial<_81.QueryVotesByVoterResponse>): _81.QueryVotesByVoterResponse;
                fromSDK(object: _81.QueryVotesByVoterResponseSDKType): _81.QueryVotesByVoterResponse;
                toSDK(message: _81.QueryVotesByVoterResponse): _81.QueryVotesByVoterResponseSDKType;
                fromAmino(object: _81.QueryVotesByVoterResponseAmino): _81.QueryVotesByVoterResponse;
                toAmino(message: _81.QueryVotesByVoterResponse): _81.QueryVotesByVoterResponseAmino;
                fromAminoMsg(object: _81.QueryVotesByVoterResponseAminoMsg): _81.QueryVotesByVoterResponse;
                toAminoMsg(message: _81.QueryVotesByVoterResponse): _81.QueryVotesByVoterResponseAminoMsg;
                fromProtoMsg(message: _81.QueryVotesByVoterResponseProtoMsg): _81.QueryVotesByVoterResponse;
                toProto(message: _81.QueryVotesByVoterResponse): Uint8Array;
                toProtoMsg(message: _81.QueryVotesByVoterResponse): _81.QueryVotesByVoterResponseProtoMsg;
            };
            QueryGroupsByMemberRequest: {
                typeUrl: string;
                encode(message: _81.QueryGroupsByMemberRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _81.QueryGroupsByMemberRequest;
                fromJSON(object: any): _81.QueryGroupsByMemberRequest;
                toJSON(message: _81.QueryGroupsByMemberRequest): unknown;
                fromPartial(object: Partial<_81.QueryGroupsByMemberRequest>): _81.QueryGroupsByMemberRequest;
                fromSDK(object: _81.QueryGroupsByMemberRequestSDKType): _81.QueryGroupsByMemberRequest;
                toSDK(message: _81.QueryGroupsByMemberRequest): _81.QueryGroupsByMemberRequestSDKType;
                fromAmino(object: _81.QueryGroupsByMemberRequestAmino): _81.QueryGroupsByMemberRequest;
                toAmino(message: _81.QueryGroupsByMemberRequest): _81.QueryGroupsByMemberRequestAmino;
                fromAminoMsg(object: _81.QueryGroupsByMemberRequestAminoMsg): _81.QueryGroupsByMemberRequest;
                toAminoMsg(message: _81.QueryGroupsByMemberRequest): _81.QueryGroupsByMemberRequestAminoMsg;
                fromProtoMsg(message: _81.QueryGroupsByMemberRequestProtoMsg): _81.QueryGroupsByMemberRequest;
                toProto(message: _81.QueryGroupsByMemberRequest): Uint8Array;
                toProtoMsg(message: _81.QueryGroupsByMemberRequest): _81.QueryGroupsByMemberRequestProtoMsg;
            };
            QueryGroupsByMemberResponse: {
                typeUrl: string;
                encode(message: _81.QueryGroupsByMemberResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _81.QueryGroupsByMemberResponse;
                fromJSON(object: any): _81.QueryGroupsByMemberResponse;
                toJSON(message: _81.QueryGroupsByMemberResponse): unknown;
                fromPartial(object: Partial<_81.QueryGroupsByMemberResponse>): _81.QueryGroupsByMemberResponse;
                fromSDK(object: _81.QueryGroupsByMemberResponseSDKType): _81.QueryGroupsByMemberResponse;
                toSDK(message: _81.QueryGroupsByMemberResponse): _81.QueryGroupsByMemberResponseSDKType;
                fromAmino(object: _81.QueryGroupsByMemberResponseAmino): _81.QueryGroupsByMemberResponse;
                toAmino(message: _81.QueryGroupsByMemberResponse): _81.QueryGroupsByMemberResponseAmino;
                fromAminoMsg(object: _81.QueryGroupsByMemberResponseAminoMsg): _81.QueryGroupsByMemberResponse;
                toAminoMsg(message: _81.QueryGroupsByMemberResponse): _81.QueryGroupsByMemberResponseAminoMsg;
                fromProtoMsg(message: _81.QueryGroupsByMemberResponseProtoMsg): _81.QueryGroupsByMemberResponse;
                toProto(message: _81.QueryGroupsByMemberResponse): Uint8Array;
                toProtoMsg(message: _81.QueryGroupsByMemberResponse): _81.QueryGroupsByMemberResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _81.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _81.QueryTallyResultRequest;
                fromJSON(object: any): _81.QueryTallyResultRequest;
                toJSON(message: _81.QueryTallyResultRequest): unknown;
                fromPartial(object: Partial<_81.QueryTallyResultRequest>): _81.QueryTallyResultRequest;
                fromSDK(object: _81.QueryTallyResultRequestSDKType): _81.QueryTallyResultRequest;
                toSDK(message: _81.QueryTallyResultRequest): _81.QueryTallyResultRequestSDKType;
                fromAmino(object: _81.QueryTallyResultRequestAmino): _81.QueryTallyResultRequest;
                toAmino(message: _81.QueryTallyResultRequest): _81.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _81.QueryTallyResultRequestAminoMsg): _81.QueryTallyResultRequest;
                toAminoMsg(message: _81.QueryTallyResultRequest): _81.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _81.QueryTallyResultRequestProtoMsg): _81.QueryTallyResultRequest;
                toProto(message: _81.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _81.QueryTallyResultRequest): _81.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _81.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _81.QueryTallyResultResponse;
                fromJSON(object: any): _81.QueryTallyResultResponse;
                toJSON(message: _81.QueryTallyResultResponse): unknown;
                fromPartial(object: Partial<_81.QueryTallyResultResponse>): _81.QueryTallyResultResponse;
                fromSDK(object: _81.QueryTallyResultResponseSDKType): _81.QueryTallyResultResponse;
                toSDK(message: _81.QueryTallyResultResponse): _81.QueryTallyResultResponseSDKType;
                fromAmino(object: _81.QueryTallyResultResponseAmino): _81.QueryTallyResultResponse;
                toAmino(message: _81.QueryTallyResultResponse): _81.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _81.QueryTallyResultResponseAminoMsg): _81.QueryTallyResultResponse;
                toAminoMsg(message: _81.QueryTallyResultResponse): _81.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _81.QueryTallyResultResponseProtoMsg): _81.QueryTallyResultResponse;
                toProto(message: _81.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _81.QueryTallyResultResponse): _81.QueryTallyResultResponseProtoMsg;
            };
            QueryGroupsRequest: {
                typeUrl: string;
                encode(message: _81.QueryGroupsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _81.QueryGroupsRequest;
                fromJSON(object: any): _81.QueryGroupsRequest;
                toJSON(message: _81.QueryGroupsRequest): unknown;
                fromPartial(object: Partial<_81.QueryGroupsRequest>): _81.QueryGroupsRequest;
                fromSDK(object: _81.QueryGroupsRequestSDKType): _81.QueryGroupsRequest;
                toSDK(message: _81.QueryGroupsRequest): _81.QueryGroupsRequestSDKType;
                fromAmino(object: _81.QueryGroupsRequestAmino): _81.QueryGroupsRequest;
                toAmino(message: _81.QueryGroupsRequest): _81.QueryGroupsRequestAmino;
                fromAminoMsg(object: _81.QueryGroupsRequestAminoMsg): _81.QueryGroupsRequest;
                toAminoMsg(message: _81.QueryGroupsRequest): _81.QueryGroupsRequestAminoMsg;
                fromProtoMsg(message: _81.QueryGroupsRequestProtoMsg): _81.QueryGroupsRequest;
                toProto(message: _81.QueryGroupsRequest): Uint8Array;
                toProtoMsg(message: _81.QueryGroupsRequest): _81.QueryGroupsRequestProtoMsg;
            };
            QueryGroupsResponse: {
                typeUrl: string;
                encode(message: _81.QueryGroupsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _81.QueryGroupsResponse;
                fromJSON(object: any): _81.QueryGroupsResponse;
                toJSON(message: _81.QueryGroupsResponse): unknown;
                fromPartial(object: Partial<_81.QueryGroupsResponse>): _81.QueryGroupsResponse;
                fromSDK(object: _81.QueryGroupsResponseSDKType): _81.QueryGroupsResponse;
                toSDK(message: _81.QueryGroupsResponse): _81.QueryGroupsResponseSDKType;
                fromAmino(object: _81.QueryGroupsResponseAmino): _81.QueryGroupsResponse;
                toAmino(message: _81.QueryGroupsResponse): _81.QueryGroupsResponseAmino;
                fromAminoMsg(object: _81.QueryGroupsResponseAminoMsg): _81.QueryGroupsResponse;
                toAminoMsg(message: _81.QueryGroupsResponse): _81.QueryGroupsResponseAminoMsg;
                fromProtoMsg(message: _81.QueryGroupsResponseProtoMsg): _81.QueryGroupsResponse;
                toProto(message: _81.QueryGroupsResponse): Uint8Array;
                toProtoMsg(message: _81.QueryGroupsResponse): _81.QueryGroupsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _80.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _80.GenesisState;
                fromJSON(object: any): _80.GenesisState;
                toJSON(message: _80.GenesisState): unknown;
                fromPartial(object: Partial<_80.GenesisState>): _80.GenesisState;
                fromSDK(object: _80.GenesisStateSDKType): _80.GenesisState;
                toSDK(message: _80.GenesisState): _80.GenesisStateSDKType;
                fromAmino(object: _80.GenesisStateAmino): _80.GenesisState;
                toAmino(message: _80.GenesisState): _80.GenesisStateAmino;
                fromAminoMsg(object: _80.GenesisStateAminoMsg): _80.GenesisState;
                toAminoMsg(message: _80.GenesisState): _80.GenesisStateAminoMsg;
                fromProtoMsg(message: _80.GenesisStateProtoMsg): _80.GenesisState;
                toProto(message: _80.GenesisState): Uint8Array;
                toProtoMsg(message: _80.GenesisState): _80.GenesisStateProtoMsg;
            };
            EventCreateGroup: {
                typeUrl: string;
                encode(message: _79.EventCreateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _79.EventCreateGroup;
                fromJSON(object: any): _79.EventCreateGroup;
                toJSON(message: _79.EventCreateGroup): unknown;
                fromPartial(object: Partial<_79.EventCreateGroup>): _79.EventCreateGroup;
                fromSDK(object: _79.EventCreateGroupSDKType): _79.EventCreateGroup;
                toSDK(message: _79.EventCreateGroup): _79.EventCreateGroupSDKType;
                fromAmino(object: _79.EventCreateGroupAmino): _79.EventCreateGroup;
                toAmino(message: _79.EventCreateGroup): _79.EventCreateGroupAmino;
                fromAminoMsg(object: _79.EventCreateGroupAminoMsg): _79.EventCreateGroup;
                toAminoMsg(message: _79.EventCreateGroup): _79.EventCreateGroupAminoMsg;
                fromProtoMsg(message: _79.EventCreateGroupProtoMsg): _79.EventCreateGroup;
                toProto(message: _79.EventCreateGroup): Uint8Array;
                toProtoMsg(message: _79.EventCreateGroup): _79.EventCreateGroupProtoMsg;
            };
            EventUpdateGroup: {
                typeUrl: string;
                encode(message: _79.EventUpdateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _79.EventUpdateGroup;
                fromJSON(object: any): _79.EventUpdateGroup;
                toJSON(message: _79.EventUpdateGroup): unknown;
                fromPartial(object: Partial<_79.EventUpdateGroup>): _79.EventUpdateGroup;
                fromSDK(object: _79.EventUpdateGroupSDKType): _79.EventUpdateGroup;
                toSDK(message: _79.EventUpdateGroup): _79.EventUpdateGroupSDKType;
                fromAmino(object: _79.EventUpdateGroupAmino): _79.EventUpdateGroup;
                toAmino(message: _79.EventUpdateGroup): _79.EventUpdateGroupAmino;
                fromAminoMsg(object: _79.EventUpdateGroupAminoMsg): _79.EventUpdateGroup;
                toAminoMsg(message: _79.EventUpdateGroup): _79.EventUpdateGroupAminoMsg;
                fromProtoMsg(message: _79.EventUpdateGroupProtoMsg): _79.EventUpdateGroup;
                toProto(message: _79.EventUpdateGroup): Uint8Array;
                toProtoMsg(message: _79.EventUpdateGroup): _79.EventUpdateGroupProtoMsg;
            };
            EventCreateGroupPolicy: {
                typeUrl: string;
                encode(message: _79.EventCreateGroupPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _79.EventCreateGroupPolicy;
                fromJSON(object: any): _79.EventCreateGroupPolicy;
                toJSON(message: _79.EventCreateGroupPolicy): unknown;
                fromPartial(object: Partial<_79.EventCreateGroupPolicy>): _79.EventCreateGroupPolicy;
                fromSDK(object: _79.EventCreateGroupPolicySDKType): _79.EventCreateGroupPolicy;
                toSDK(message: _79.EventCreateGroupPolicy): _79.EventCreateGroupPolicySDKType;
                fromAmino(object: _79.EventCreateGroupPolicyAmino): _79.EventCreateGroupPolicy;
                toAmino(message: _79.EventCreateGroupPolicy): _79.EventCreateGroupPolicyAmino;
                fromAminoMsg(object: _79.EventCreateGroupPolicyAminoMsg): _79.EventCreateGroupPolicy;
                toAminoMsg(message: _79.EventCreateGroupPolicy): _79.EventCreateGroupPolicyAminoMsg;
                fromProtoMsg(message: _79.EventCreateGroupPolicyProtoMsg): _79.EventCreateGroupPolicy;
                toProto(message: _79.EventCreateGroupPolicy): Uint8Array;
                toProtoMsg(message: _79.EventCreateGroupPolicy): _79.EventCreateGroupPolicyProtoMsg;
            };
            EventUpdateGroupPolicy: {
                typeUrl: string;
                encode(message: _79.EventUpdateGroupPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _79.EventUpdateGroupPolicy;
                fromJSON(object: any): _79.EventUpdateGroupPolicy;
                toJSON(message: _79.EventUpdateGroupPolicy): unknown;
                fromPartial(object: Partial<_79.EventUpdateGroupPolicy>): _79.EventUpdateGroupPolicy;
                fromSDK(object: _79.EventUpdateGroupPolicySDKType): _79.EventUpdateGroupPolicy;
                toSDK(message: _79.EventUpdateGroupPolicy): _79.EventUpdateGroupPolicySDKType;
                fromAmino(object: _79.EventUpdateGroupPolicyAmino): _79.EventUpdateGroupPolicy;
                toAmino(message: _79.EventUpdateGroupPolicy): _79.EventUpdateGroupPolicyAmino;
                fromAminoMsg(object: _79.EventUpdateGroupPolicyAminoMsg): _79.EventUpdateGroupPolicy;
                toAminoMsg(message: _79.EventUpdateGroupPolicy): _79.EventUpdateGroupPolicyAminoMsg;
                fromProtoMsg(message: _79.EventUpdateGroupPolicyProtoMsg): _79.EventUpdateGroupPolicy;
                toProto(message: _79.EventUpdateGroupPolicy): Uint8Array;
                toProtoMsg(message: _79.EventUpdateGroupPolicy): _79.EventUpdateGroupPolicyProtoMsg;
            };
            EventSubmitProposal: {
                typeUrl: string;
                encode(message: _79.EventSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _79.EventSubmitProposal;
                fromJSON(object: any): _79.EventSubmitProposal;
                toJSON(message: _79.EventSubmitProposal): unknown;
                fromPartial(object: Partial<_79.EventSubmitProposal>): _79.EventSubmitProposal;
                fromSDK(object: _79.EventSubmitProposalSDKType): _79.EventSubmitProposal;
                toSDK(message: _79.EventSubmitProposal): _79.EventSubmitProposalSDKType;
                fromAmino(object: _79.EventSubmitProposalAmino): _79.EventSubmitProposal;
                toAmino(message: _79.EventSubmitProposal): _79.EventSubmitProposalAmino;
                fromAminoMsg(object: _79.EventSubmitProposalAminoMsg): _79.EventSubmitProposal;
                toAminoMsg(message: _79.EventSubmitProposal): _79.EventSubmitProposalAminoMsg;
                fromProtoMsg(message: _79.EventSubmitProposalProtoMsg): _79.EventSubmitProposal;
                toProto(message: _79.EventSubmitProposal): Uint8Array;
                toProtoMsg(message: _79.EventSubmitProposal): _79.EventSubmitProposalProtoMsg;
            };
            EventWithdrawProposal: {
                typeUrl: string;
                encode(message: _79.EventWithdrawProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _79.EventWithdrawProposal;
                fromJSON(object: any): _79.EventWithdrawProposal;
                toJSON(message: _79.EventWithdrawProposal): unknown;
                fromPartial(object: Partial<_79.EventWithdrawProposal>): _79.EventWithdrawProposal;
                fromSDK(object: _79.EventWithdrawProposalSDKType): _79.EventWithdrawProposal;
                toSDK(message: _79.EventWithdrawProposal): _79.EventWithdrawProposalSDKType;
                fromAmino(object: _79.EventWithdrawProposalAmino): _79.EventWithdrawProposal;
                toAmino(message: _79.EventWithdrawProposal): _79.EventWithdrawProposalAmino;
                fromAminoMsg(object: _79.EventWithdrawProposalAminoMsg): _79.EventWithdrawProposal;
                toAminoMsg(message: _79.EventWithdrawProposal): _79.EventWithdrawProposalAminoMsg;
                fromProtoMsg(message: _79.EventWithdrawProposalProtoMsg): _79.EventWithdrawProposal;
                toProto(message: _79.EventWithdrawProposal): Uint8Array;
                toProtoMsg(message: _79.EventWithdrawProposal): _79.EventWithdrawProposalProtoMsg;
            };
            EventVote: {
                typeUrl: string;
                encode(message: _79.EventVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _79.EventVote;
                fromJSON(object: any): _79.EventVote;
                toJSON(message: _79.EventVote): unknown;
                fromPartial(object: Partial<_79.EventVote>): _79.EventVote;
                fromSDK(object: _79.EventVoteSDKType): _79.EventVote;
                toSDK(message: _79.EventVote): _79.EventVoteSDKType;
                fromAmino(object: _79.EventVoteAmino): _79.EventVote;
                toAmino(message: _79.EventVote): _79.EventVoteAmino;
                fromAminoMsg(object: _79.EventVoteAminoMsg): _79.EventVote;
                toAminoMsg(message: _79.EventVote): _79.EventVoteAminoMsg;
                fromProtoMsg(message: _79.EventVoteProtoMsg): _79.EventVote;
                toProto(message: _79.EventVote): Uint8Array;
                toProtoMsg(message: _79.EventVote): _79.EventVoteProtoMsg;
            };
            EventExec: {
                typeUrl: string;
                encode(message: _79.EventExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _79.EventExec;
                fromJSON(object: any): _79.EventExec;
                toJSON(message: _79.EventExec): unknown;
                fromPartial(object: Partial<_79.EventExec>): _79.EventExec;
                fromSDK(object: _79.EventExecSDKType): _79.EventExec;
                toSDK(message: _79.EventExec): _79.EventExecSDKType;
                fromAmino(object: _79.EventExecAmino): _79.EventExec;
                toAmino(message: _79.EventExec): _79.EventExecAmino;
                fromAminoMsg(object: _79.EventExecAminoMsg): _79.EventExec;
                toAminoMsg(message: _79.EventExec): _79.EventExecAminoMsg;
                fromProtoMsg(message: _79.EventExecProtoMsg): _79.EventExec;
                toProto(message: _79.EventExec): Uint8Array;
                toProtoMsg(message: _79.EventExec): _79.EventExecProtoMsg;
            };
            EventLeaveGroup: {
                typeUrl: string;
                encode(message: _79.EventLeaveGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _79.EventLeaveGroup;
                fromJSON(object: any): _79.EventLeaveGroup;
                toJSON(message: _79.EventLeaveGroup): unknown;
                fromPartial(object: Partial<_79.EventLeaveGroup>): _79.EventLeaveGroup;
                fromSDK(object: _79.EventLeaveGroupSDKType): _79.EventLeaveGroup;
                toSDK(message: _79.EventLeaveGroup): _79.EventLeaveGroupSDKType;
                fromAmino(object: _79.EventLeaveGroupAmino): _79.EventLeaveGroup;
                toAmino(message: _79.EventLeaveGroup): _79.EventLeaveGroupAmino;
                fromAminoMsg(object: _79.EventLeaveGroupAminoMsg): _79.EventLeaveGroup;
                toAminoMsg(message: _79.EventLeaveGroup): _79.EventLeaveGroupAminoMsg;
                fromProtoMsg(message: _79.EventLeaveGroupProtoMsg): _79.EventLeaveGroup;
                toProto(message: _79.EventLeaveGroup): Uint8Array;
                toProtoMsg(message: _79.EventLeaveGroup): _79.EventLeaveGroupProtoMsg;
            };
            EventProposalPruned: {
                typeUrl: string;
                encode(message: _79.EventProposalPruned, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _79.EventProposalPruned;
                fromJSON(object: any): _79.EventProposalPruned;
                toJSON(message: _79.EventProposalPruned): unknown;
                fromPartial(object: Partial<_79.EventProposalPruned>): _79.EventProposalPruned;
                fromSDK(object: _79.EventProposalPrunedSDKType): _79.EventProposalPruned;
                toSDK(message: _79.EventProposalPruned): _79.EventProposalPrunedSDKType;
                fromAmino(object: _79.EventProposalPrunedAmino): _79.EventProposalPruned;
                toAmino(message: _79.EventProposalPruned): _79.EventProposalPrunedAmino;
                fromAminoMsg(object: _79.EventProposalPrunedAminoMsg): _79.EventProposalPruned;
                toAminoMsg(message: _79.EventProposalPruned): _79.EventProposalPrunedAminoMsg;
                fromProtoMsg(message: _79.EventProposalPrunedProtoMsg): _79.EventProposalPruned;
                toProto(message: _79.EventProposalPruned): Uint8Array;
                toProtoMsg(message: _79.EventProposalPruned): _79.EventProposalPrunedProtoMsg;
            };
        };
    }
    namespace mint {
        namespace module {
            const v1: {
                protobufPackage: "cosmos.mint.module.v1";
                Module: {
                    typeUrl: string;
                    encode(message: _84.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _84.Module;
                    fromJSON(object: any): _84.Module;
                    toJSON(message: _84.Module): unknown;
                    fromPartial(object: Partial<_84.Module>): _84.Module;
                    fromSDK(object: _84.ModuleSDKType): _84.Module;
                    toSDK(message: _84.Module): _84.ModuleSDKType;
                    fromAmino(object: _84.ModuleAmino): _84.Module;
                    toAmino(message: _84.Module): _84.ModuleAmino;
                    fromAminoMsg(object: _84.ModuleAminoMsg): _84.Module;
                    toAminoMsg(message: _84.Module): _84.ModuleAminoMsg;
                    fromProtoMsg(message: _84.ModuleProtoMsg): _84.Module;
                    toProto(message: _84.Module): Uint8Array;
                    toProtoMsg(message: _84.Module): _84.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            Msg: typeof _235.Msg;
            Query: typeof _218.Query;
            QueryClientImpl: typeof _218.QueryClientImpl;
            LCDQueryClient: typeof _200.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    updateParams(value: _88.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    updateParams(value: _88.MsgUpdateParams): {
                        typeUrl: string;
                        value: _88.MsgUpdateParams;
                    };
                };
                toJSON: {
                    updateParams(value: _88.MsgUpdateParams): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _88.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    updateParams(value: _88.MsgUpdateParams): {
                        typeUrl: string;
                        value: _88.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.mint.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _88.MsgUpdateParams) => _88.MsgUpdateParamsAmino;
                    fromAmino: (object: _88.MsgUpdateParamsAmino) => _88.MsgUpdateParams;
                };
            };
            protobufPackage: "cosmos.mint.v1beta1";
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _88.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _88.MsgUpdateParams;
                fromJSON(object: any): _88.MsgUpdateParams;
                toJSON(message: _88.MsgUpdateParams): unknown;
                fromPartial(object: Partial<_88.MsgUpdateParams>): _88.MsgUpdateParams;
                fromSDK(object: _88.MsgUpdateParamsSDKType): _88.MsgUpdateParams;
                toSDK(message: _88.MsgUpdateParams): _88.MsgUpdateParamsSDKType;
                fromAmino(object: _88.MsgUpdateParamsAmino): _88.MsgUpdateParams;
                toAmino(message: _88.MsgUpdateParams): _88.MsgUpdateParamsAmino;
                fromAminoMsg(object: _88.MsgUpdateParamsAminoMsg): _88.MsgUpdateParams;
                toAminoMsg(message: _88.MsgUpdateParams): _88.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _88.MsgUpdateParamsProtoMsg): _88.MsgUpdateParams;
                toProto(message: _88.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _88.MsgUpdateParams): _88.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _88.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _88.MsgUpdateParamsResponse;
                fromJSON(_: any): _88.MsgUpdateParamsResponse;
                toJSON(_: _88.MsgUpdateParamsResponse): unknown;
                fromPartial(_: Partial<_88.MsgUpdateParamsResponse>): _88.MsgUpdateParamsResponse;
                fromSDK(_: _88.MsgUpdateParamsResponseSDKType): _88.MsgUpdateParamsResponse;
                toSDK(_: _88.MsgUpdateParamsResponse): _88.MsgUpdateParamsResponseSDKType;
                fromAmino(_: _88.MsgUpdateParamsResponseAmino): _88.MsgUpdateParamsResponse;
                toAmino(_: _88.MsgUpdateParamsResponse): _88.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _88.MsgUpdateParamsResponseAminoMsg): _88.MsgUpdateParamsResponse;
                toAminoMsg(message: _88.MsgUpdateParamsResponse): _88.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _88.MsgUpdateParamsResponseProtoMsg): _88.MsgUpdateParamsResponse;
                toProto(message: _88.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _88.MsgUpdateParamsResponse): _88.MsgUpdateParamsResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _87.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _87.QueryParamsRequest;
                fromJSON(_: any): _87.QueryParamsRequest;
                toJSON(_: _87.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_87.QueryParamsRequest>): _87.QueryParamsRequest;
                fromSDK(_: _87.QueryParamsRequestSDKType): _87.QueryParamsRequest;
                toSDK(_: _87.QueryParamsRequest): _87.QueryParamsRequestSDKType;
                fromAmino(_: _87.QueryParamsRequestAmino): _87.QueryParamsRequest;
                toAmino(_: _87.QueryParamsRequest): _87.QueryParamsRequestAmino;
                fromAminoMsg(object: _87.QueryParamsRequestAminoMsg): _87.QueryParamsRequest;
                toAminoMsg(message: _87.QueryParamsRequest): _87.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _87.QueryParamsRequestProtoMsg): _87.QueryParamsRequest;
                toProto(message: _87.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _87.QueryParamsRequest): _87.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _87.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _87.QueryParamsResponse;
                fromJSON(object: any): _87.QueryParamsResponse;
                toJSON(message: _87.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_87.QueryParamsResponse>): _87.QueryParamsResponse;
                fromSDK(object: _87.QueryParamsResponseSDKType): _87.QueryParamsResponse;
                toSDK(message: _87.QueryParamsResponse): _87.QueryParamsResponseSDKType;
                fromAmino(object: _87.QueryParamsResponseAmino): _87.QueryParamsResponse;
                toAmino(message: _87.QueryParamsResponse): _87.QueryParamsResponseAmino;
                fromAminoMsg(object: _87.QueryParamsResponseAminoMsg): _87.QueryParamsResponse;
                toAminoMsg(message: _87.QueryParamsResponse): _87.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _87.QueryParamsResponseProtoMsg): _87.QueryParamsResponse;
                toProto(message: _87.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _87.QueryParamsResponse): _87.QueryParamsResponseProtoMsg;
            };
            QueryInflationRequest: {
                typeUrl: string;
                encode(_: _87.QueryInflationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _87.QueryInflationRequest;
                fromJSON(_: any): _87.QueryInflationRequest;
                toJSON(_: _87.QueryInflationRequest): unknown;
                fromPartial(_: Partial<_87.QueryInflationRequest>): _87.QueryInflationRequest;
                fromSDK(_: _87.QueryInflationRequestSDKType): _87.QueryInflationRequest;
                toSDK(_: _87.QueryInflationRequest): _87.QueryInflationRequestSDKType;
                fromAmino(_: _87.QueryInflationRequestAmino): _87.QueryInflationRequest;
                toAmino(_: _87.QueryInflationRequest): _87.QueryInflationRequestAmino;
                fromAminoMsg(object: _87.QueryInflationRequestAminoMsg): _87.QueryInflationRequest;
                toAminoMsg(message: _87.QueryInflationRequest): _87.QueryInflationRequestAminoMsg;
                fromProtoMsg(message: _87.QueryInflationRequestProtoMsg): _87.QueryInflationRequest;
                toProto(message: _87.QueryInflationRequest): Uint8Array;
                toProtoMsg(message: _87.QueryInflationRequest): _87.QueryInflationRequestProtoMsg;
            };
            QueryInflationResponse: {
                typeUrl: string;
                encode(message: _87.QueryInflationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _87.QueryInflationResponse;
                fromJSON(object: any): _87.QueryInflationResponse;
                toJSON(message: _87.QueryInflationResponse): unknown;
                fromPartial(object: Partial<_87.QueryInflationResponse>): _87.QueryInflationResponse;
                fromSDK(object: _87.QueryInflationResponseSDKType): _87.QueryInflationResponse;
                toSDK(message: _87.QueryInflationResponse): _87.QueryInflationResponseSDKType;
                fromAmino(object: _87.QueryInflationResponseAmino): _87.QueryInflationResponse;
                toAmino(message: _87.QueryInflationResponse): _87.QueryInflationResponseAmino;
                fromAminoMsg(object: _87.QueryInflationResponseAminoMsg): _87.QueryInflationResponse;
                toAminoMsg(message: _87.QueryInflationResponse): _87.QueryInflationResponseAminoMsg;
                fromProtoMsg(message: _87.QueryInflationResponseProtoMsg): _87.QueryInflationResponse;
                toProto(message: _87.QueryInflationResponse): Uint8Array;
                toProtoMsg(message: _87.QueryInflationResponse): _87.QueryInflationResponseProtoMsg;
            };
            QueryAnnualProvisionsRequest: {
                typeUrl: string;
                encode(_: _87.QueryAnnualProvisionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _87.QueryAnnualProvisionsRequest;
                fromJSON(_: any): _87.QueryAnnualProvisionsRequest;
                toJSON(_: _87.QueryAnnualProvisionsRequest): unknown;
                fromPartial(_: Partial<_87.QueryAnnualProvisionsRequest>): _87.QueryAnnualProvisionsRequest;
                fromSDK(_: _87.QueryAnnualProvisionsRequestSDKType): _87.QueryAnnualProvisionsRequest;
                toSDK(_: _87.QueryAnnualProvisionsRequest): _87.QueryAnnualProvisionsRequestSDKType;
                fromAmino(_: _87.QueryAnnualProvisionsRequestAmino): _87.QueryAnnualProvisionsRequest;
                toAmino(_: _87.QueryAnnualProvisionsRequest): _87.QueryAnnualProvisionsRequestAmino;
                fromAminoMsg(object: _87.QueryAnnualProvisionsRequestAminoMsg): _87.QueryAnnualProvisionsRequest;
                toAminoMsg(message: _87.QueryAnnualProvisionsRequest): _87.QueryAnnualProvisionsRequestAminoMsg;
                fromProtoMsg(message: _87.QueryAnnualProvisionsRequestProtoMsg): _87.QueryAnnualProvisionsRequest;
                toProto(message: _87.QueryAnnualProvisionsRequest): Uint8Array;
                toProtoMsg(message: _87.QueryAnnualProvisionsRequest): _87.QueryAnnualProvisionsRequestProtoMsg;
            };
            QueryAnnualProvisionsResponse: {
                typeUrl: string;
                encode(message: _87.QueryAnnualProvisionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _87.QueryAnnualProvisionsResponse;
                fromJSON(object: any): _87.QueryAnnualProvisionsResponse;
                toJSON(message: _87.QueryAnnualProvisionsResponse): unknown;
                fromPartial(object: Partial<_87.QueryAnnualProvisionsResponse>): _87.QueryAnnualProvisionsResponse;
                fromSDK(object: _87.QueryAnnualProvisionsResponseSDKType): _87.QueryAnnualProvisionsResponse;
                toSDK(message: _87.QueryAnnualProvisionsResponse): _87.QueryAnnualProvisionsResponseSDKType;
                fromAmino(object: _87.QueryAnnualProvisionsResponseAmino): _87.QueryAnnualProvisionsResponse;
                toAmino(message: _87.QueryAnnualProvisionsResponse): _87.QueryAnnualProvisionsResponseAmino;
                fromAminoMsg(object: _87.QueryAnnualProvisionsResponseAminoMsg): _87.QueryAnnualProvisionsResponse;
                toAminoMsg(message: _87.QueryAnnualProvisionsResponse): _87.QueryAnnualProvisionsResponseAminoMsg;
                fromProtoMsg(message: _87.QueryAnnualProvisionsResponseProtoMsg): _87.QueryAnnualProvisionsResponse;
                toProto(message: _87.QueryAnnualProvisionsResponse): Uint8Array;
                toProtoMsg(message: _87.QueryAnnualProvisionsResponse): _87.QueryAnnualProvisionsResponseProtoMsg;
            };
            Minter: {
                typeUrl: string;
                encode(message: _86.Minter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _86.Minter;
                fromJSON(object: any): _86.Minter;
                toJSON(message: _86.Minter): unknown;
                fromPartial(object: Partial<_86.Minter>): _86.Minter;
                fromSDK(object: _86.MinterSDKType): _86.Minter;
                toSDK(message: _86.Minter): _86.MinterSDKType;
                fromAmino(object: _86.MinterAmino): _86.Minter;
                toAmino(message: _86.Minter): _86.MinterAmino;
                fromAminoMsg(object: _86.MinterAminoMsg): _86.Minter;
                toAminoMsg(message: _86.Minter): _86.MinterAminoMsg;
                fromProtoMsg(message: _86.MinterProtoMsg): _86.Minter;
                toProto(message: _86.Minter): Uint8Array;
                toProtoMsg(message: _86.Minter): _86.MinterProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _86.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _86.Params;
                fromJSON(object: any): _86.Params;
                toJSON(message: _86.Params): unknown;
                fromPartial(object: Partial<_86.Params>): _86.Params;
                fromSDK(object: _86.ParamsSDKType): _86.Params;
                toSDK(message: _86.Params): _86.ParamsSDKType;
                fromAmino(object: _86.ParamsAmino): _86.Params;
                toAmino(message: _86.Params): _86.ParamsAmino;
                fromAminoMsg(object: _86.ParamsAminoMsg): _86.Params;
                toAminoMsg(message: _86.Params): _86.ParamsAminoMsg;
                fromProtoMsg(message: _86.ParamsProtoMsg): _86.Params;
                toProto(message: _86.Params): Uint8Array;
                toProtoMsg(message: _86.Params): _86.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _85.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _85.GenesisState;
                fromJSON(object: any): _85.GenesisState;
                toJSON(message: _85.GenesisState): unknown;
                fromPartial(object: Partial<_85.GenesisState>): _85.GenesisState;
                fromSDK(object: _85.GenesisStateSDKType): _85.GenesisState;
                toSDK(message: _85.GenesisState): _85.GenesisStateSDKType;
                fromAmino(object: _85.GenesisStateAmino): _85.GenesisState;
                toAmino(message: _85.GenesisState): _85.GenesisStateAmino;
                fromAminoMsg(object: _85.GenesisStateAminoMsg): _85.GenesisState;
                toAminoMsg(message: _85.GenesisState): _85.GenesisStateAminoMsg;
                fromProtoMsg(message: _85.GenesisStateProtoMsg): _85.GenesisState;
                toProto(message: _85.GenesisState): Uint8Array;
                toProtoMsg(message: _85.GenesisState): _85.GenesisStateProtoMsg;
            };
        };
    }
    namespace msg {
        namespace textual {
            const v1: {};
        }
    }
    namespace nft {
        namespace module {
            const v1: {
                protobufPackage: "cosmos.nft.module.v1";
                Module: {
                    typeUrl: string;
                    encode(_: _90.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _90.Module;
                    fromJSON(_: any): _90.Module;
                    toJSON(_: _90.Module): unknown;
                    fromPartial(_: Partial<_90.Module>): _90.Module;
                    fromSDK(_: _90.ModuleSDKType): _90.Module;
                    toSDK(_: _90.Module): _90.ModuleSDKType;
                    fromAmino(_: _90.ModuleAmino): _90.Module;
                    toAmino(_: _90.Module): _90.ModuleAmino;
                    fromAminoMsg(object: _90.ModuleAminoMsg): _90.Module;
                    toAminoMsg(message: _90.Module): _90.ModuleAminoMsg;
                    fromProtoMsg(message: _90.ModuleProtoMsg): _90.Module;
                    toProto(message: _90.Module): Uint8Array;
                    toProtoMsg(message: _90.Module): _90.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            Msg: typeof _236.Msg;
            Query: typeof _219.Query;
            QueryClientImpl: typeof _219.QueryClientImpl;
            LCDQueryClient: typeof _201.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _95.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _95.MsgSend): {
                        typeUrl: string;
                        value: _95.MsgSend;
                    };
                };
                toJSON: {
                    send(value: _95.MsgSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _95.MsgSend;
                    };
                };
                fromPartial: {
                    send(value: _95.MsgSend): {
                        typeUrl: string;
                        value: _95.MsgSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.nft.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _95.MsgSend) => _95.MsgSendAmino;
                    fromAmino: (object: _95.MsgSendAmino) => _95.MsgSend;
                };
            };
            protobufPackage: "cosmos.nft.v1beta1";
            MsgSend: {
                typeUrl: string;
                encode(message: _95.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _95.MsgSend;
                fromJSON(object: any): _95.MsgSend;
                toJSON(message: _95.MsgSend): unknown;
                fromPartial(object: Partial<_95.MsgSend>): _95.MsgSend;
                fromSDK(object: _95.MsgSendSDKType): _95.MsgSend;
                toSDK(message: _95.MsgSend): _95.MsgSendSDKType;
                fromAmino(object: _95.MsgSendAmino): _95.MsgSend;
                toAmino(message: _95.MsgSend): _95.MsgSendAmino;
                fromAminoMsg(object: _95.MsgSendAminoMsg): _95.MsgSend;
                toAminoMsg(message: _95.MsgSend): _95.MsgSendAminoMsg;
                fromProtoMsg(message: _95.MsgSendProtoMsg): _95.MsgSend;
                toProto(message: _95.MsgSend): Uint8Array;
                toProtoMsg(message: _95.MsgSend): _95.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _95.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _95.MsgSendResponse;
                fromJSON(_: any): _95.MsgSendResponse;
                toJSON(_: _95.MsgSendResponse): unknown;
                fromPartial(_: Partial<_95.MsgSendResponse>): _95.MsgSendResponse;
                fromSDK(_: _95.MsgSendResponseSDKType): _95.MsgSendResponse;
                toSDK(_: _95.MsgSendResponse): _95.MsgSendResponseSDKType;
                fromAmino(_: _95.MsgSendResponseAmino): _95.MsgSendResponse;
                toAmino(_: _95.MsgSendResponse): _95.MsgSendResponseAmino;
                fromAminoMsg(object: _95.MsgSendResponseAminoMsg): _95.MsgSendResponse;
                toAminoMsg(message: _95.MsgSendResponse): _95.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _95.MsgSendResponseProtoMsg): _95.MsgSendResponse;
                toProto(message: _95.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _95.MsgSendResponse): _95.MsgSendResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _94.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _94.QueryBalanceRequest;
                fromJSON(object: any): _94.QueryBalanceRequest;
                toJSON(message: _94.QueryBalanceRequest): unknown;
                fromPartial(object: Partial<_94.QueryBalanceRequest>): _94.QueryBalanceRequest;
                fromSDK(object: _94.QueryBalanceRequestSDKType): _94.QueryBalanceRequest;
                toSDK(message: _94.QueryBalanceRequest): _94.QueryBalanceRequestSDKType;
                fromAmino(object: _94.QueryBalanceRequestAmino): _94.QueryBalanceRequest;
                toAmino(message: _94.QueryBalanceRequest): _94.QueryBalanceRequestAmino;
                fromAminoMsg(object: _94.QueryBalanceRequestAminoMsg): _94.QueryBalanceRequest;
                toAminoMsg(message: _94.QueryBalanceRequest): _94.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _94.QueryBalanceRequestProtoMsg): _94.QueryBalanceRequest;
                toProto(message: _94.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _94.QueryBalanceRequest): _94.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _94.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _94.QueryBalanceResponse;
                fromJSON(object: any): _94.QueryBalanceResponse;
                toJSON(message: _94.QueryBalanceResponse): unknown;
                fromPartial(object: Partial<_94.QueryBalanceResponse>): _94.QueryBalanceResponse;
                fromSDK(object: _94.QueryBalanceResponseSDKType): _94.QueryBalanceResponse;
                toSDK(message: _94.QueryBalanceResponse): _94.QueryBalanceResponseSDKType;
                fromAmino(object: _94.QueryBalanceResponseAmino): _94.QueryBalanceResponse;
                toAmino(message: _94.QueryBalanceResponse): _94.QueryBalanceResponseAmino;
                fromAminoMsg(object: _94.QueryBalanceResponseAminoMsg): _94.QueryBalanceResponse;
                toAminoMsg(message: _94.QueryBalanceResponse): _94.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _94.QueryBalanceResponseProtoMsg): _94.QueryBalanceResponse;
                toProto(message: _94.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _94.QueryBalanceResponse): _94.QueryBalanceResponseProtoMsg;
            };
            QueryOwnerRequest: {
                typeUrl: string;
                encode(message: _94.QueryOwnerRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _94.QueryOwnerRequest;
                fromJSON(object: any): _94.QueryOwnerRequest;
                toJSON(message: _94.QueryOwnerRequest): unknown;
                fromPartial(object: Partial<_94.QueryOwnerRequest>): _94.QueryOwnerRequest;
                fromSDK(object: _94.QueryOwnerRequestSDKType): _94.QueryOwnerRequest;
                toSDK(message: _94.QueryOwnerRequest): _94.QueryOwnerRequestSDKType;
                fromAmino(object: _94.QueryOwnerRequestAmino): _94.QueryOwnerRequest;
                toAmino(message: _94.QueryOwnerRequest): _94.QueryOwnerRequestAmino;
                fromAminoMsg(object: _94.QueryOwnerRequestAminoMsg): _94.QueryOwnerRequest;
                toAminoMsg(message: _94.QueryOwnerRequest): _94.QueryOwnerRequestAminoMsg;
                fromProtoMsg(message: _94.QueryOwnerRequestProtoMsg): _94.QueryOwnerRequest;
                toProto(message: _94.QueryOwnerRequest): Uint8Array;
                toProtoMsg(message: _94.QueryOwnerRequest): _94.QueryOwnerRequestProtoMsg;
            };
            QueryOwnerResponse: {
                typeUrl: string;
                encode(message: _94.QueryOwnerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _94.QueryOwnerResponse;
                fromJSON(object: any): _94.QueryOwnerResponse;
                toJSON(message: _94.QueryOwnerResponse): unknown;
                fromPartial(object: Partial<_94.QueryOwnerResponse>): _94.QueryOwnerResponse;
                fromSDK(object: _94.QueryOwnerResponseSDKType): _94.QueryOwnerResponse;
                toSDK(message: _94.QueryOwnerResponse): _94.QueryOwnerResponseSDKType;
                fromAmino(object: _94.QueryOwnerResponseAmino): _94.QueryOwnerResponse;
                toAmino(message: _94.QueryOwnerResponse): _94.QueryOwnerResponseAmino;
                fromAminoMsg(object: _94.QueryOwnerResponseAminoMsg): _94.QueryOwnerResponse;
                toAminoMsg(message: _94.QueryOwnerResponse): _94.QueryOwnerResponseAminoMsg;
                fromProtoMsg(message: _94.QueryOwnerResponseProtoMsg): _94.QueryOwnerResponse;
                toProto(message: _94.QueryOwnerResponse): Uint8Array;
                toProtoMsg(message: _94.QueryOwnerResponse): _94.QueryOwnerResponseProtoMsg;
            };
            QuerySupplyRequest: {
                typeUrl: string;
                encode(message: _94.QuerySupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _94.QuerySupplyRequest;
                fromJSON(object: any): _94.QuerySupplyRequest;
                toJSON(message: _94.QuerySupplyRequest): unknown;
                fromPartial(object: Partial<_94.QuerySupplyRequest>): _94.QuerySupplyRequest;
                fromSDK(object: _94.QuerySupplyRequestSDKType): _94.QuerySupplyRequest;
                toSDK(message: _94.QuerySupplyRequest): _94.QuerySupplyRequestSDKType;
                fromAmino(object: _94.QuerySupplyRequestAmino): _94.QuerySupplyRequest;
                toAmino(message: _94.QuerySupplyRequest): _94.QuerySupplyRequestAmino;
                fromAminoMsg(object: _94.QuerySupplyRequestAminoMsg): _94.QuerySupplyRequest;
                toAminoMsg(message: _94.QuerySupplyRequest): _94.QuerySupplyRequestAminoMsg;
                fromProtoMsg(message: _94.QuerySupplyRequestProtoMsg): _94.QuerySupplyRequest;
                toProto(message: _94.QuerySupplyRequest): Uint8Array;
                toProtoMsg(message: _94.QuerySupplyRequest): _94.QuerySupplyRequestProtoMsg;
            };
            QuerySupplyResponse: {
                typeUrl: string;
                encode(message: _94.QuerySupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _94.QuerySupplyResponse;
                fromJSON(object: any): _94.QuerySupplyResponse;
                toJSON(message: _94.QuerySupplyResponse): unknown;
                fromPartial(object: Partial<_94.QuerySupplyResponse>): _94.QuerySupplyResponse;
                fromSDK(object: _94.QuerySupplyResponseSDKType): _94.QuerySupplyResponse;
                toSDK(message: _94.QuerySupplyResponse): _94.QuerySupplyResponseSDKType;
                fromAmino(object: _94.QuerySupplyResponseAmino): _94.QuerySupplyResponse;
                toAmino(message: _94.QuerySupplyResponse): _94.QuerySupplyResponseAmino;
                fromAminoMsg(object: _94.QuerySupplyResponseAminoMsg): _94.QuerySupplyResponse;
                toAminoMsg(message: _94.QuerySupplyResponse): _94.QuerySupplyResponseAminoMsg;
                fromProtoMsg(message: _94.QuerySupplyResponseProtoMsg): _94.QuerySupplyResponse;
                toProto(message: _94.QuerySupplyResponse): Uint8Array;
                toProtoMsg(message: _94.QuerySupplyResponse): _94.QuerySupplyResponseProtoMsg;
            };
            QueryNFTsRequest: {
                typeUrl: string;
                encode(message: _94.QueryNFTsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _94.QueryNFTsRequest;
                fromJSON(object: any): _94.QueryNFTsRequest;
                toJSON(message: _94.QueryNFTsRequest): unknown;
                fromPartial(object: Partial<_94.QueryNFTsRequest>): _94.QueryNFTsRequest;
                fromSDK(object: _94.QueryNFTsRequestSDKType): _94.QueryNFTsRequest;
                toSDK(message: _94.QueryNFTsRequest): _94.QueryNFTsRequestSDKType;
                fromAmino(object: _94.QueryNFTsRequestAmino): _94.QueryNFTsRequest;
                toAmino(message: _94.QueryNFTsRequest): _94.QueryNFTsRequestAmino;
                fromAminoMsg(object: _94.QueryNFTsRequestAminoMsg): _94.QueryNFTsRequest;
                toAminoMsg(message: _94.QueryNFTsRequest): _94.QueryNFTsRequestAminoMsg;
                fromProtoMsg(message: _94.QueryNFTsRequestProtoMsg): _94.QueryNFTsRequest;
                toProto(message: _94.QueryNFTsRequest): Uint8Array;
                toProtoMsg(message: _94.QueryNFTsRequest): _94.QueryNFTsRequestProtoMsg;
            };
            QueryNFTsResponse: {
                typeUrl: string;
                encode(message: _94.QueryNFTsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _94.QueryNFTsResponse;
                fromJSON(object: any): _94.QueryNFTsResponse;
                toJSON(message: _94.QueryNFTsResponse): unknown;
                fromPartial(object: Partial<_94.QueryNFTsResponse>): _94.QueryNFTsResponse;
                fromSDK(object: _94.QueryNFTsResponseSDKType): _94.QueryNFTsResponse;
                toSDK(message: _94.QueryNFTsResponse): _94.QueryNFTsResponseSDKType;
                fromAmino(object: _94.QueryNFTsResponseAmino): _94.QueryNFTsResponse;
                toAmino(message: _94.QueryNFTsResponse): _94.QueryNFTsResponseAmino;
                fromAminoMsg(object: _94.QueryNFTsResponseAminoMsg): _94.QueryNFTsResponse;
                toAminoMsg(message: _94.QueryNFTsResponse): _94.QueryNFTsResponseAminoMsg;
                fromProtoMsg(message: _94.QueryNFTsResponseProtoMsg): _94.QueryNFTsResponse;
                toProto(message: _94.QueryNFTsResponse): Uint8Array;
                toProtoMsg(message: _94.QueryNFTsResponse): _94.QueryNFTsResponseProtoMsg;
            };
            QueryNFTRequest: {
                typeUrl: string;
                encode(message: _94.QueryNFTRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _94.QueryNFTRequest;
                fromJSON(object: any): _94.QueryNFTRequest;
                toJSON(message: _94.QueryNFTRequest): unknown;
                fromPartial(object: Partial<_94.QueryNFTRequest>): _94.QueryNFTRequest;
                fromSDK(object: _94.QueryNFTRequestSDKType): _94.QueryNFTRequest;
                toSDK(message: _94.QueryNFTRequest): _94.QueryNFTRequestSDKType;
                fromAmino(object: _94.QueryNFTRequestAmino): _94.QueryNFTRequest;
                toAmino(message: _94.QueryNFTRequest): _94.QueryNFTRequestAmino;
                fromAminoMsg(object: _94.QueryNFTRequestAminoMsg): _94.QueryNFTRequest;
                toAminoMsg(message: _94.QueryNFTRequest): _94.QueryNFTRequestAminoMsg;
                fromProtoMsg(message: _94.QueryNFTRequestProtoMsg): _94.QueryNFTRequest;
                toProto(message: _94.QueryNFTRequest): Uint8Array;
                toProtoMsg(message: _94.QueryNFTRequest): _94.QueryNFTRequestProtoMsg;
            };
            QueryNFTResponse: {
                typeUrl: string;
                encode(message: _94.QueryNFTResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _94.QueryNFTResponse;
                fromJSON(object: any): _94.QueryNFTResponse;
                toJSON(message: _94.QueryNFTResponse): unknown;
                fromPartial(object: Partial<_94.QueryNFTResponse>): _94.QueryNFTResponse;
                fromSDK(object: _94.QueryNFTResponseSDKType): _94.QueryNFTResponse;
                toSDK(message: _94.QueryNFTResponse): _94.QueryNFTResponseSDKType;
                fromAmino(object: _94.QueryNFTResponseAmino): _94.QueryNFTResponse;
                toAmino(message: _94.QueryNFTResponse): _94.QueryNFTResponseAmino;
                fromAminoMsg(object: _94.QueryNFTResponseAminoMsg): _94.QueryNFTResponse;
                toAminoMsg(message: _94.QueryNFTResponse): _94.QueryNFTResponseAminoMsg;
                fromProtoMsg(message: _94.QueryNFTResponseProtoMsg): _94.QueryNFTResponse;
                toProto(message: _94.QueryNFTResponse): Uint8Array;
                toProtoMsg(message: _94.QueryNFTResponse): _94.QueryNFTResponseProtoMsg;
            };
            QueryClassRequest: {
                typeUrl: string;
                encode(message: _94.QueryClassRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _94.QueryClassRequest;
                fromJSON(object: any): _94.QueryClassRequest;
                toJSON(message: _94.QueryClassRequest): unknown;
                fromPartial(object: Partial<_94.QueryClassRequest>): _94.QueryClassRequest;
                fromSDK(object: _94.QueryClassRequestSDKType): _94.QueryClassRequest;
                toSDK(message: _94.QueryClassRequest): _94.QueryClassRequestSDKType;
                fromAmino(object: _94.QueryClassRequestAmino): _94.QueryClassRequest;
                toAmino(message: _94.QueryClassRequest): _94.QueryClassRequestAmino;
                fromAminoMsg(object: _94.QueryClassRequestAminoMsg): _94.QueryClassRequest;
                toAminoMsg(message: _94.QueryClassRequest): _94.QueryClassRequestAminoMsg;
                fromProtoMsg(message: _94.QueryClassRequestProtoMsg): _94.QueryClassRequest;
                toProto(message: _94.QueryClassRequest): Uint8Array;
                toProtoMsg(message: _94.QueryClassRequest): _94.QueryClassRequestProtoMsg;
            };
            QueryClassResponse: {
                typeUrl: string;
                encode(message: _94.QueryClassResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _94.QueryClassResponse;
                fromJSON(object: any): _94.QueryClassResponse;
                toJSON(message: _94.QueryClassResponse): unknown;
                fromPartial(object: Partial<_94.QueryClassResponse>): _94.QueryClassResponse;
                fromSDK(object: _94.QueryClassResponseSDKType): _94.QueryClassResponse;
                toSDK(message: _94.QueryClassResponse): _94.QueryClassResponseSDKType;
                fromAmino(object: _94.QueryClassResponseAmino): _94.QueryClassResponse;
                toAmino(message: _94.QueryClassResponse): _94.QueryClassResponseAmino;
                fromAminoMsg(object: _94.QueryClassResponseAminoMsg): _94.QueryClassResponse;
                toAminoMsg(message: _94.QueryClassResponse): _94.QueryClassResponseAminoMsg;
                fromProtoMsg(message: _94.QueryClassResponseProtoMsg): _94.QueryClassResponse;
                toProto(message: _94.QueryClassResponse): Uint8Array;
                toProtoMsg(message: _94.QueryClassResponse): _94.QueryClassResponseProtoMsg;
            };
            QueryClassesRequest: {
                typeUrl: string;
                encode(message: _94.QueryClassesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _94.QueryClassesRequest;
                fromJSON(object: any): _94.QueryClassesRequest;
                toJSON(message: _94.QueryClassesRequest): unknown;
                fromPartial(object: Partial<_94.QueryClassesRequest>): _94.QueryClassesRequest;
                fromSDK(object: _94.QueryClassesRequestSDKType): _94.QueryClassesRequest;
                toSDK(message: _94.QueryClassesRequest): _94.QueryClassesRequestSDKType;
                fromAmino(object: _94.QueryClassesRequestAmino): _94.QueryClassesRequest;
                toAmino(message: _94.QueryClassesRequest): _94.QueryClassesRequestAmino;
                fromAminoMsg(object: _94.QueryClassesRequestAminoMsg): _94.QueryClassesRequest;
                toAminoMsg(message: _94.QueryClassesRequest): _94.QueryClassesRequestAminoMsg;
                fromProtoMsg(message: _94.QueryClassesRequestProtoMsg): _94.QueryClassesRequest;
                toProto(message: _94.QueryClassesRequest): Uint8Array;
                toProtoMsg(message: _94.QueryClassesRequest): _94.QueryClassesRequestProtoMsg;
            };
            QueryClassesResponse: {
                typeUrl: string;
                encode(message: _94.QueryClassesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _94.QueryClassesResponse;
                fromJSON(object: any): _94.QueryClassesResponse;
                toJSON(message: _94.QueryClassesResponse): unknown;
                fromPartial(object: Partial<_94.QueryClassesResponse>): _94.QueryClassesResponse;
                fromSDK(object: _94.QueryClassesResponseSDKType): _94.QueryClassesResponse;
                toSDK(message: _94.QueryClassesResponse): _94.QueryClassesResponseSDKType;
                fromAmino(object: _94.QueryClassesResponseAmino): _94.QueryClassesResponse;
                toAmino(message: _94.QueryClassesResponse): _94.QueryClassesResponseAmino;
                fromAminoMsg(object: _94.QueryClassesResponseAminoMsg): _94.QueryClassesResponse;
                toAminoMsg(message: _94.QueryClassesResponse): _94.QueryClassesResponseAminoMsg;
                fromProtoMsg(message: _94.QueryClassesResponseProtoMsg): _94.QueryClassesResponse;
                toProto(message: _94.QueryClassesResponse): Uint8Array;
                toProtoMsg(message: _94.QueryClassesResponse): _94.QueryClassesResponseProtoMsg;
            };
            Class: {
                typeUrl: string;
                encode(message: _93.Class, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _93.Class;
                fromJSON(object: any): _93.Class;
                toJSON(message: _93.Class): unknown;
                fromPartial(object: Partial<_93.Class>): _93.Class;
                fromSDK(object: _93.ClassSDKType): _93.Class;
                toSDK(message: _93.Class): _93.ClassSDKType;
                fromAmino(object: _93.ClassAmino): _93.Class;
                toAmino(message: _93.Class): _93.ClassAmino;
                fromAminoMsg(object: _93.ClassAminoMsg): _93.Class;
                toAminoMsg(message: _93.Class): _93.ClassAminoMsg;
                fromProtoMsg(message: _93.ClassProtoMsg): _93.Class;
                toProto(message: _93.Class): Uint8Array;
                toProtoMsg(message: _93.Class): _93.ClassProtoMsg;
            };
            NFT: {
                typeUrl: string;
                encode(message: _93.NFT, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _93.NFT;
                fromJSON(object: any): _93.NFT;
                toJSON(message: _93.NFT): unknown;
                fromPartial(object: Partial<_93.NFT>): _93.NFT;
                fromSDK(object: _93.NFTSDKType): _93.NFT;
                toSDK(message: _93.NFT): _93.NFTSDKType;
                fromAmino(object: _93.NFTAmino): _93.NFT;
                toAmino(message: _93.NFT): _93.NFTAmino;
                fromAminoMsg(object: _93.NFTAminoMsg): _93.NFT;
                toAminoMsg(message: _93.NFT): _93.NFTAminoMsg;
                fromProtoMsg(message: _93.NFTProtoMsg): _93.NFT;
                toProto(message: _93.NFT): Uint8Array;
                toProtoMsg(message: _93.NFT): _93.NFTProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _92.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _92.GenesisState;
                fromJSON(object: any): _92.GenesisState;
                toJSON(message: _92.GenesisState): unknown;
                fromPartial(object: Partial<_92.GenesisState>): _92.GenesisState;
                fromSDK(object: _92.GenesisStateSDKType): _92.GenesisState;
                toSDK(message: _92.GenesisState): _92.GenesisStateSDKType;
                fromAmino(object: _92.GenesisStateAmino): _92.GenesisState;
                toAmino(message: _92.GenesisState): _92.GenesisStateAmino;
                fromAminoMsg(object: _92.GenesisStateAminoMsg): _92.GenesisState;
                toAminoMsg(message: _92.GenesisState): _92.GenesisStateAminoMsg;
                fromProtoMsg(message: _92.GenesisStateProtoMsg): _92.GenesisState;
                toProto(message: _92.GenesisState): Uint8Array;
                toProtoMsg(message: _92.GenesisState): _92.GenesisStateProtoMsg;
            };
            Entry: {
                typeUrl: string;
                encode(message: _92.Entry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _92.Entry;
                fromJSON(object: any): _92.Entry;
                toJSON(message: _92.Entry): unknown;
                fromPartial(object: Partial<_92.Entry>): _92.Entry;
                fromSDK(object: _92.EntrySDKType): _92.Entry;
                toSDK(message: _92.Entry): _92.EntrySDKType;
                fromAmino(object: _92.EntryAmino): _92.Entry;
                toAmino(message: _92.Entry): _92.EntryAmino;
                fromAminoMsg(object: _92.EntryAminoMsg): _92.Entry;
                toAminoMsg(message: _92.Entry): _92.EntryAminoMsg;
                fromProtoMsg(message: _92.EntryProtoMsg): _92.Entry;
                toProto(message: _92.Entry): Uint8Array;
                toProtoMsg(message: _92.Entry): _92.EntryProtoMsg;
            };
            EventSend: {
                typeUrl: string;
                encode(message: _91.EventSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _91.EventSend;
                fromJSON(object: any): _91.EventSend;
                toJSON(message: _91.EventSend): unknown;
                fromPartial(object: Partial<_91.EventSend>): _91.EventSend;
                fromSDK(object: _91.EventSendSDKType): _91.EventSend;
                toSDK(message: _91.EventSend): _91.EventSendSDKType;
                fromAmino(object: _91.EventSendAmino): _91.EventSend;
                toAmino(message: _91.EventSend): _91.EventSendAmino;
                fromAminoMsg(object: _91.EventSendAminoMsg): _91.EventSend;
                toAminoMsg(message: _91.EventSend): _91.EventSendAminoMsg;
                fromProtoMsg(message: _91.EventSendProtoMsg): _91.EventSend;
                toProto(message: _91.EventSend): Uint8Array;
                toProtoMsg(message: _91.EventSend): _91.EventSendProtoMsg;
            };
            EventMint: {
                typeUrl: string;
                encode(message: _91.EventMint, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _91.EventMint;
                fromJSON(object: any): _91.EventMint;
                toJSON(message: _91.EventMint): unknown;
                fromPartial(object: Partial<_91.EventMint>): _91.EventMint;
                fromSDK(object: _91.EventMintSDKType): _91.EventMint;
                toSDK(message: _91.EventMint): _91.EventMintSDKType;
                fromAmino(object: _91.EventMintAmino): _91.EventMint;
                toAmino(message: _91.EventMint): _91.EventMintAmino;
                fromAminoMsg(object: _91.EventMintAminoMsg): _91.EventMint;
                toAminoMsg(message: _91.EventMint): _91.EventMintAminoMsg;
                fromProtoMsg(message: _91.EventMintProtoMsg): _91.EventMint;
                toProto(message: _91.EventMint): Uint8Array;
                toProtoMsg(message: _91.EventMint): _91.EventMintProtoMsg;
            };
            EventBurn: {
                typeUrl: string;
                encode(message: _91.EventBurn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _91.EventBurn;
                fromJSON(object: any): _91.EventBurn;
                toJSON(message: _91.EventBurn): unknown;
                fromPartial(object: Partial<_91.EventBurn>): _91.EventBurn;
                fromSDK(object: _91.EventBurnSDKType): _91.EventBurn;
                toSDK(message: _91.EventBurn): _91.EventBurnSDKType;
                fromAmino(object: _91.EventBurnAmino): _91.EventBurn;
                toAmino(message: _91.EventBurn): _91.EventBurnAmino;
                fromAminoMsg(object: _91.EventBurnAminoMsg): _91.EventBurn;
                toAminoMsg(message: _91.EventBurn): _91.EventBurnAminoMsg;
                fromProtoMsg(message: _91.EventBurnProtoMsg): _91.EventBurn;
                toProto(message: _91.EventBurn): Uint8Array;
                toProtoMsg(message: _91.EventBurn): _91.EventBurnProtoMsg;
            };
        };
    }
    namespace orm {
        namespace module {
            const v1alpha1: {
                protobufPackage: "cosmos.orm.module.v1alpha1";
                Module: {
                    typeUrl: string;
                    encode(_: _96.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _96.Module;
                    fromJSON(_: any): _96.Module;
                    toJSON(_: _96.Module): unknown;
                    fromPartial(_: Partial<_96.Module>): _96.Module;
                    fromSDK(_: _96.ModuleSDKType): _96.Module;
                    toSDK(_: _96.Module): _96.ModuleSDKType;
                    fromAmino(_: _96.ModuleAmino): _96.Module;
                    toAmino(_: _96.Module): _96.ModuleAmino;
                    fromAminoMsg(object: _96.ModuleAminoMsg): _96.Module;
                    toAminoMsg(message: _96.Module): _96.ModuleAminoMsg;
                    fromProtoMsg(message: _96.ModuleProtoMsg): _96.Module;
                    toProto(message: _96.Module): Uint8Array;
                    toProtoMsg(message: _96.Module): _96.ModuleProtoMsg;
                };
            };
        }
        namespace query {
            const v1alpha1: {
                Query: typeof _220.Query;
                QueryClientImpl: typeof _220.QueryClientImpl;
                protobufPackage: "cosmos.orm.query.v1alpha1";
                GetRequest: {
                    typeUrl: string;
                    encode(message: _97.GetRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _97.GetRequest;
                    fromJSON(object: any): _97.GetRequest;
                    toJSON(message: _97.GetRequest): unknown;
                    fromPartial(object: Partial<_97.GetRequest>): _97.GetRequest;
                    fromSDK(object: _97.GetRequestSDKType): _97.GetRequest;
                    toSDK(message: _97.GetRequest): _97.GetRequestSDKType;
                    fromAmino(object: _97.GetRequestAmino): _97.GetRequest;
                    toAmino(message: _97.GetRequest): _97.GetRequestAmino;
                    fromAminoMsg(object: _97.GetRequestAminoMsg): _97.GetRequest;
                    toAminoMsg(message: _97.GetRequest): _97.GetRequestAminoMsg;
                    fromProtoMsg(message: _97.GetRequestProtoMsg): _97.GetRequest;
                    toProto(message: _97.GetRequest): Uint8Array;
                    toProtoMsg(message: _97.GetRequest): _97.GetRequestProtoMsg;
                };
                GetResponse: {
                    typeUrl: string;
                    encode(message: _97.GetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _97.GetResponse;
                    fromJSON(object: any): _97.GetResponse;
                    toJSON(message: _97.GetResponse): unknown;
                    fromPartial(object: Partial<_97.GetResponse>): _97.GetResponse;
                    fromSDK(object: _97.GetResponseSDKType): _97.GetResponse;
                    toSDK(message: _97.GetResponse): _97.GetResponseSDKType;
                    fromAmino(object: _97.GetResponseAmino): _97.GetResponse;
                    toAmino(message: _97.GetResponse): _97.GetResponseAmino;
                    fromAminoMsg(object: _97.GetResponseAminoMsg): _97.GetResponse;
                    toAminoMsg(message: _97.GetResponse): _97.GetResponseAminoMsg;
                    fromProtoMsg(message: _97.GetResponseProtoMsg): _97.GetResponse;
                    toProto(message: _97.GetResponse): Uint8Array;
                    toProtoMsg(message: _97.GetResponse): _97.GetResponseProtoMsg;
                };
                ListRequest: {
                    typeUrl: string;
                    encode(message: _97.ListRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _97.ListRequest;
                    fromJSON(object: any): _97.ListRequest;
                    toJSON(message: _97.ListRequest): unknown;
                    fromPartial(object: Partial<_97.ListRequest>): _97.ListRequest;
                    fromSDK(object: _97.ListRequestSDKType): _97.ListRequest;
                    toSDK(message: _97.ListRequest): _97.ListRequestSDKType;
                    fromAmino(object: _97.ListRequestAmino): _97.ListRequest;
                    toAmino(message: _97.ListRequest): _97.ListRequestAmino;
                    fromAminoMsg(object: _97.ListRequestAminoMsg): _97.ListRequest;
                    toAminoMsg(message: _97.ListRequest): _97.ListRequestAminoMsg;
                    fromProtoMsg(message: _97.ListRequestProtoMsg): _97.ListRequest;
                    toProto(message: _97.ListRequest): Uint8Array;
                    toProtoMsg(message: _97.ListRequest): _97.ListRequestProtoMsg;
                };
                ListRequest_Prefix: {
                    typeUrl: string;
                    encode(message: _97.ListRequest_Prefix, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _97.ListRequest_Prefix;
                    fromJSON(object: any): _97.ListRequest_Prefix;
                    toJSON(message: _97.ListRequest_Prefix): unknown;
                    fromPartial(object: Partial<_97.ListRequest_Prefix>): _97.ListRequest_Prefix;
                    fromSDK(object: _97.ListRequest_PrefixSDKType): _97.ListRequest_Prefix;
                    toSDK(message: _97.ListRequest_Prefix): _97.ListRequest_PrefixSDKType;
                    fromAmino(object: _97.ListRequest_PrefixAmino): _97.ListRequest_Prefix;
                    toAmino(message: _97.ListRequest_Prefix): _97.ListRequest_PrefixAmino;
                    fromAminoMsg(object: _97.ListRequest_PrefixAminoMsg): _97.ListRequest_Prefix;
                    toAminoMsg(message: _97.ListRequest_Prefix): _97.ListRequest_PrefixAminoMsg;
                    fromProtoMsg(message: _97.ListRequest_PrefixProtoMsg): _97.ListRequest_Prefix;
                    toProto(message: _97.ListRequest_Prefix): Uint8Array;
                    toProtoMsg(message: _97.ListRequest_Prefix): _97.ListRequest_PrefixProtoMsg;
                };
                ListRequest_Range: {
                    typeUrl: string;
                    encode(message: _97.ListRequest_Range, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _97.ListRequest_Range;
                    fromJSON(object: any): _97.ListRequest_Range;
                    toJSON(message: _97.ListRequest_Range): unknown;
                    fromPartial(object: Partial<_97.ListRequest_Range>): _97.ListRequest_Range;
                    fromSDK(object: _97.ListRequest_RangeSDKType): _97.ListRequest_Range;
                    toSDK(message: _97.ListRequest_Range): _97.ListRequest_RangeSDKType;
                    fromAmino(object: _97.ListRequest_RangeAmino): _97.ListRequest_Range;
                    toAmino(message: _97.ListRequest_Range): _97.ListRequest_RangeAmino;
                    fromAminoMsg(object: _97.ListRequest_RangeAminoMsg): _97.ListRequest_Range;
                    toAminoMsg(message: _97.ListRequest_Range): _97.ListRequest_RangeAminoMsg;
                    fromProtoMsg(message: _97.ListRequest_RangeProtoMsg): _97.ListRequest_Range;
                    toProto(message: _97.ListRequest_Range): Uint8Array;
                    toProtoMsg(message: _97.ListRequest_Range): _97.ListRequest_RangeProtoMsg;
                };
                ListResponse: {
                    typeUrl: string;
                    encode(message: _97.ListResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _97.ListResponse;
                    fromJSON(object: any): _97.ListResponse;
                    toJSON(message: _97.ListResponse): unknown;
                    fromPartial(object: Partial<_97.ListResponse>): _97.ListResponse;
                    fromSDK(object: _97.ListResponseSDKType): _97.ListResponse;
                    toSDK(message: _97.ListResponse): _97.ListResponseSDKType;
                    fromAmino(object: _97.ListResponseAmino): _97.ListResponse;
                    toAmino(message: _97.ListResponse): _97.ListResponseAmino;
                    fromAminoMsg(object: _97.ListResponseAminoMsg): _97.ListResponse;
                    toAminoMsg(message: _97.ListResponse): _97.ListResponseAminoMsg;
                    fromProtoMsg(message: _97.ListResponseProtoMsg): _97.ListResponse;
                    toProto(message: _97.ListResponse): Uint8Array;
                    toProtoMsg(message: _97.ListResponse): _97.ListResponseProtoMsg;
                };
                IndexValue: {
                    typeUrl: string;
                    encode(message: _97.IndexValue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _97.IndexValue;
                    fromJSON(object: any): _97.IndexValue;
                    toJSON(message: _97.IndexValue): unknown;
                    fromPartial(object: Partial<_97.IndexValue>): _97.IndexValue;
                    fromSDK(object: _97.IndexValueSDKType): _97.IndexValue;
                    toSDK(message: _97.IndexValue): _97.IndexValueSDKType;
                    fromAmino(object: _97.IndexValueAmino): _97.IndexValue;
                    toAmino(message: _97.IndexValue): _97.IndexValueAmino;
                    fromAminoMsg(object: _97.IndexValueAminoMsg): _97.IndexValue;
                    toAminoMsg(message: _97.IndexValue): _97.IndexValueAminoMsg;
                    fromProtoMsg(message: _97.IndexValueProtoMsg): _97.IndexValue;
                    toProto(message: _97.IndexValue): Uint8Array;
                    toProtoMsg(message: _97.IndexValue): _97.IndexValueProtoMsg;
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
                    encode(_: _98.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _98.Module;
                    fromJSON(_: any): _98.Module;
                    toJSON(_: _98.Module): unknown;
                    fromPartial(_: Partial<_98.Module>): _98.Module;
                    fromSDK(_: _98.ModuleSDKType): _98.Module;
                    toSDK(_: _98.Module): _98.ModuleSDKType;
                    fromAmino(_: _98.ModuleAmino): _98.Module;
                    toAmino(_: _98.Module): _98.ModuleAmino;
                    fromAminoMsg(object: _98.ModuleAminoMsg): _98.Module;
                    toAminoMsg(message: _98.Module): _98.ModuleAminoMsg;
                    fromProtoMsg(message: _98.ModuleProtoMsg): _98.Module;
                    toProto(message: _98.Module): Uint8Array;
                    toProtoMsg(message: _98.Module): _98.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            Query: typeof _221.Query;
            QueryClientImpl: typeof _221.QueryClientImpl;
            LCDQueryClient: typeof _202.LCDQueryClient;
            protobufPackage: "cosmos.params.v1beta1";
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _100.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _100.QueryParamsRequest;
                fromJSON(object: any): _100.QueryParamsRequest;
                toJSON(message: _100.QueryParamsRequest): unknown;
                fromPartial(object: Partial<_100.QueryParamsRequest>): _100.QueryParamsRequest;
                fromSDK(object: _100.QueryParamsRequestSDKType): _100.QueryParamsRequest;
                toSDK(message: _100.QueryParamsRequest): _100.QueryParamsRequestSDKType;
                fromAmino(object: _100.QueryParamsRequestAmino): _100.QueryParamsRequest;
                toAmino(message: _100.QueryParamsRequest): _100.QueryParamsRequestAmino;
                fromAminoMsg(object: _100.QueryParamsRequestAminoMsg): _100.QueryParamsRequest;
                toAminoMsg(message: _100.QueryParamsRequest): _100.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _100.QueryParamsRequestProtoMsg): _100.QueryParamsRequest;
                toProto(message: _100.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _100.QueryParamsRequest): _100.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _100.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _100.QueryParamsResponse;
                fromJSON(object: any): _100.QueryParamsResponse;
                toJSON(message: _100.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_100.QueryParamsResponse>): _100.QueryParamsResponse;
                fromSDK(object: _100.QueryParamsResponseSDKType): _100.QueryParamsResponse;
                toSDK(message: _100.QueryParamsResponse): _100.QueryParamsResponseSDKType;
                fromAmino(object: _100.QueryParamsResponseAmino): _100.QueryParamsResponse;
                toAmino(message: _100.QueryParamsResponse): _100.QueryParamsResponseAmino;
                fromAminoMsg(object: _100.QueryParamsResponseAminoMsg): _100.QueryParamsResponse;
                toAminoMsg(message: _100.QueryParamsResponse): _100.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _100.QueryParamsResponseProtoMsg): _100.QueryParamsResponse;
                toProto(message: _100.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _100.QueryParamsResponse): _100.QueryParamsResponseProtoMsg;
            };
            QuerySubspacesRequest: {
                typeUrl: string;
                encode(_: _100.QuerySubspacesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _100.QuerySubspacesRequest;
                fromJSON(_: any): _100.QuerySubspacesRequest;
                toJSON(_: _100.QuerySubspacesRequest): unknown;
                fromPartial(_: Partial<_100.QuerySubspacesRequest>): _100.QuerySubspacesRequest;
                fromSDK(_: _100.QuerySubspacesRequestSDKType): _100.QuerySubspacesRequest;
                toSDK(_: _100.QuerySubspacesRequest): _100.QuerySubspacesRequestSDKType;
                fromAmino(_: _100.QuerySubspacesRequestAmino): _100.QuerySubspacesRequest;
                toAmino(_: _100.QuerySubspacesRequest): _100.QuerySubspacesRequestAmino;
                fromAminoMsg(object: _100.QuerySubspacesRequestAminoMsg): _100.QuerySubspacesRequest;
                toAminoMsg(message: _100.QuerySubspacesRequest): _100.QuerySubspacesRequestAminoMsg;
                fromProtoMsg(message: _100.QuerySubspacesRequestProtoMsg): _100.QuerySubspacesRequest;
                toProto(message: _100.QuerySubspacesRequest): Uint8Array;
                toProtoMsg(message: _100.QuerySubspacesRequest): _100.QuerySubspacesRequestProtoMsg;
            };
            QuerySubspacesResponse: {
                typeUrl: string;
                encode(message: _100.QuerySubspacesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _100.QuerySubspacesResponse;
                fromJSON(object: any): _100.QuerySubspacesResponse;
                toJSON(message: _100.QuerySubspacesResponse): unknown;
                fromPartial(object: Partial<_100.QuerySubspacesResponse>): _100.QuerySubspacesResponse;
                fromSDK(object: _100.QuerySubspacesResponseSDKType): _100.QuerySubspacesResponse;
                toSDK(message: _100.QuerySubspacesResponse): _100.QuerySubspacesResponseSDKType;
                fromAmino(object: _100.QuerySubspacesResponseAmino): _100.QuerySubspacesResponse;
                toAmino(message: _100.QuerySubspacesResponse): _100.QuerySubspacesResponseAmino;
                fromAminoMsg(object: _100.QuerySubspacesResponseAminoMsg): _100.QuerySubspacesResponse;
                toAminoMsg(message: _100.QuerySubspacesResponse): _100.QuerySubspacesResponseAminoMsg;
                fromProtoMsg(message: _100.QuerySubspacesResponseProtoMsg): _100.QuerySubspacesResponse;
                toProto(message: _100.QuerySubspacesResponse): Uint8Array;
                toProtoMsg(message: _100.QuerySubspacesResponse): _100.QuerySubspacesResponseProtoMsg;
            };
            Subspace: {
                typeUrl: string;
                encode(message: _100.Subspace, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _100.Subspace;
                fromJSON(object: any): _100.Subspace;
                toJSON(message: _100.Subspace): unknown;
                fromPartial(object: Partial<_100.Subspace>): _100.Subspace;
                fromSDK(object: _100.SubspaceSDKType): _100.Subspace;
                toSDK(message: _100.Subspace): _100.SubspaceSDKType;
                fromAmino(object: _100.SubspaceAmino): _100.Subspace;
                toAmino(message: _100.Subspace): _100.SubspaceAmino;
                fromAminoMsg(object: _100.SubspaceAminoMsg): _100.Subspace;
                toAminoMsg(message: _100.Subspace): _100.SubspaceAminoMsg;
                fromProtoMsg(message: _100.SubspaceProtoMsg): _100.Subspace;
                toProto(message: _100.Subspace): Uint8Array;
                toProtoMsg(message: _100.Subspace): _100.SubspaceProtoMsg;
            };
            ParameterChangeProposal: {
                typeUrl: string;
                encode(message: _99.ParameterChangeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _99.ParameterChangeProposal;
                fromJSON(object: any): _99.ParameterChangeProposal;
                toJSON(message: _99.ParameterChangeProposal): unknown;
                fromPartial(object: Partial<_99.ParameterChangeProposal>): _99.ParameterChangeProposal;
                fromSDK(object: _99.ParameterChangeProposalSDKType): _99.ParameterChangeProposal;
                toSDK(message: _99.ParameterChangeProposal): _99.ParameterChangeProposalSDKType;
                fromAmino(object: _99.ParameterChangeProposalAmino): _99.ParameterChangeProposal;
                toAmino(message: _99.ParameterChangeProposal): _99.ParameterChangeProposalAmino;
                fromAminoMsg(object: _99.ParameterChangeProposalAminoMsg): _99.ParameterChangeProposal;
                toAminoMsg(message: _99.ParameterChangeProposal): _99.ParameterChangeProposalAminoMsg;
                fromProtoMsg(message: _99.ParameterChangeProposalProtoMsg): _99.ParameterChangeProposal;
                toProto(message: _99.ParameterChangeProposal): Uint8Array;
                toProtoMsg(message: _99.ParameterChangeProposal): _99.ParameterChangeProposalProtoMsg;
            };
            ParamChange: {
                typeUrl: string;
                encode(message: _99.ParamChange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _99.ParamChange;
                fromJSON(object: any): _99.ParamChange;
                toJSON(message: _99.ParamChange): unknown;
                fromPartial(object: Partial<_99.ParamChange>): _99.ParamChange;
                fromSDK(object: _99.ParamChangeSDKType): _99.ParamChange;
                toSDK(message: _99.ParamChange): _99.ParamChangeSDKType;
                fromAmino(object: _99.ParamChangeAmino): _99.ParamChange;
                toAmino(message: _99.ParamChange): _99.ParamChangeAmino;
                fromAminoMsg(object: _99.ParamChangeAminoMsg): _99.ParamChange;
                toAminoMsg(message: _99.ParamChange): _99.ParamChangeAminoMsg;
                fromProtoMsg(message: _99.ParamChangeProtoMsg): _99.ParamChange;
                toProto(message: _99.ParamChange): Uint8Array;
                toProtoMsg(message: _99.ParamChange): _99.ParamChangeProtoMsg;
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
                encode(_: _102.FileDescriptorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _102.FileDescriptorsRequest;
                fromJSON(_: any): _102.FileDescriptorsRequest;
                toJSON(_: _102.FileDescriptorsRequest): unknown;
                fromPartial(_: Partial<_102.FileDescriptorsRequest>): _102.FileDescriptorsRequest;
                fromSDK(_: _102.FileDescriptorsRequestSDKType): _102.FileDescriptorsRequest;
                toSDK(_: _102.FileDescriptorsRequest): _102.FileDescriptorsRequestSDKType;
                fromAmino(_: _102.FileDescriptorsRequestAmino): _102.FileDescriptorsRequest;
                toAmino(_: _102.FileDescriptorsRequest): _102.FileDescriptorsRequestAmino;
                fromAminoMsg(object: _102.FileDescriptorsRequestAminoMsg): _102.FileDescriptorsRequest;
                toAminoMsg(message: _102.FileDescriptorsRequest): _102.FileDescriptorsRequestAminoMsg;
                fromProtoMsg(message: _102.FileDescriptorsRequestProtoMsg): _102.FileDescriptorsRequest;
                toProto(message: _102.FileDescriptorsRequest): Uint8Array;
                toProtoMsg(message: _102.FileDescriptorsRequest): _102.FileDescriptorsRequestProtoMsg;
            };
            FileDescriptorsResponse: {
                typeUrl: string;
                encode(message: _102.FileDescriptorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _102.FileDescriptorsResponse;
                fromJSON(object: any): _102.FileDescriptorsResponse;
                toJSON(message: _102.FileDescriptorsResponse): unknown;
                fromPartial(object: Partial<_102.FileDescriptorsResponse>): _102.FileDescriptorsResponse;
                fromSDK(object: _102.FileDescriptorsResponseSDKType): _102.FileDescriptorsResponse;
                toSDK(message: _102.FileDescriptorsResponse): _102.FileDescriptorsResponseSDKType;
                fromAmino(object: _102.FileDescriptorsResponseAmino): _102.FileDescriptorsResponse;
                toAmino(message: _102.FileDescriptorsResponse): _102.FileDescriptorsResponseAmino;
                fromAminoMsg(object: _102.FileDescriptorsResponseAminoMsg): _102.FileDescriptorsResponse;
                toAminoMsg(message: _102.FileDescriptorsResponse): _102.FileDescriptorsResponseAminoMsg;
                fromProtoMsg(message: _102.FileDescriptorsResponseProtoMsg): _102.FileDescriptorsResponse;
                toProto(message: _102.FileDescriptorsResponse): Uint8Array;
                toProtoMsg(message: _102.FileDescriptorsResponse): _102.FileDescriptorsResponseProtoMsg;
            };
        };
    }
    namespace slashing {
        namespace module {
            const v1: {
                protobufPackage: "cosmos.slashing.module.v1";
                Module: {
                    typeUrl: string;
                    encode(message: _103.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _103.Module;
                    fromJSON(object: any): _103.Module;
                    toJSON(message: _103.Module): unknown;
                    fromPartial(object: Partial<_103.Module>): _103.Module;
                    fromSDK(object: _103.ModuleSDKType): _103.Module;
                    toSDK(message: _103.Module): _103.ModuleSDKType;
                    fromAmino(object: _103.ModuleAmino): _103.Module;
                    toAmino(message: _103.Module): _103.ModuleAmino;
                    fromAminoMsg(object: _103.ModuleAminoMsg): _103.Module;
                    toAminoMsg(message: _103.Module): _103.ModuleAminoMsg;
                    fromProtoMsg(message: _103.ModuleProtoMsg): _103.Module;
                    toProto(message: _103.Module): Uint8Array;
                    toProtoMsg(message: _103.Module): _103.ModuleProtoMsg;
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
                    encode(message: _104.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _104.Module;
                    fromJSON(object: any): _104.Module;
                    toJSON(message: _104.Module): unknown;
                    fromPartial(object: Partial<_104.Module>): _104.Module;
                    fromSDK(object: _104.ModuleSDKType): _104.Module;
                    toSDK(message: _104.Module): _104.ModuleSDKType;
                    fromAmino(object: _104.ModuleAmino): _104.Module;
                    toAmino(message: _104.Module): _104.ModuleAmino;
                    fromAminoMsg(object: _104.ModuleAminoMsg): _104.Module;
                    toAminoMsg(message: _104.Module): _104.ModuleAminoMsg;
                    fromProtoMsg(message: _104.ModuleProtoMsg): _104.Module;
                    toProto(message: _104.Module): Uint8Array;
                    toProtoMsg(message: _104.Module): _104.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            Msg: typeof _237.Msg;
            Query: typeof _222.Query;
            QueryClientImpl: typeof _222.QueryClientImpl;
            LCDQueryClient: typeof _203.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _109.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _109.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _109.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _109.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _109.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUnbondingDelegation(value: _109.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _109.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _109.MsgCreateValidator): {
                        typeUrl: string;
                        value: _109.MsgCreateValidator;
                    };
                    editValidator(value: _109.MsgEditValidator): {
                        typeUrl: string;
                        value: _109.MsgEditValidator;
                    };
                    delegate(value: _109.MsgDelegate): {
                        typeUrl: string;
                        value: _109.MsgDelegate;
                    };
                    beginRedelegate(value: _109.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _109.MsgBeginRedelegate;
                    };
                    undelegate(value: _109.MsgUndelegate): {
                        typeUrl: string;
                        value: _109.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _109.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _109.MsgCancelUnbondingDelegation;
                    };
                    updateParams(value: _109.MsgUpdateParams): {
                        typeUrl: string;
                        value: _109.MsgUpdateParams;
                    };
                };
                toJSON: {
                    createValidator(value: _109.MsgCreateValidator): {
                        typeUrl: string;
                        value: unknown;
                    };
                    editValidator(value: _109.MsgEditValidator): {
                        typeUrl: string;
                        value: unknown;
                    };
                    delegate(value: _109.MsgDelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                    beginRedelegate(value: _109.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                    undelegate(value: _109.MsgUndelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                    cancelUnbondingDelegation(value: _109.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateParams(value: _109.MsgUpdateParams): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _109.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _109.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _109.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _109.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _109.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: any): {
                        typeUrl: string;
                        value: _109.MsgCancelUnbondingDelegation;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _109.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    createValidator(value: _109.MsgCreateValidator): {
                        typeUrl: string;
                        value: _109.MsgCreateValidator;
                    };
                    editValidator(value: _109.MsgEditValidator): {
                        typeUrl: string;
                        value: _109.MsgEditValidator;
                    };
                    delegate(value: _109.MsgDelegate): {
                        typeUrl: string;
                        value: _109.MsgDelegate;
                    };
                    beginRedelegate(value: _109.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _109.MsgBeginRedelegate;
                    };
                    undelegate(value: _109.MsgUndelegate): {
                        typeUrl: string;
                        value: _109.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _109.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _109.MsgCancelUnbondingDelegation;
                    };
                    updateParams(value: _109.MsgUpdateParams): {
                        typeUrl: string;
                        value: _109.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: (message: _109.MsgCreateValidator) => _109.MsgCreateValidatorAmino;
                    fromAmino: (object: _109.MsgCreateValidatorAmino) => _109.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: (message: _109.MsgEditValidator) => _109.MsgEditValidatorAmino;
                    fromAmino: (object: _109.MsgEditValidatorAmino) => _109.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: (message: _109.MsgDelegate) => _109.MsgDelegateAmino;
                    fromAmino: (object: _109.MsgDelegateAmino) => _109.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: (message: _109.MsgBeginRedelegate) => _109.MsgBeginRedelegateAmino;
                    fromAmino: (object: _109.MsgBeginRedelegateAmino) => _109.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: (message: _109.MsgUndelegate) => _109.MsgUndelegateAmino;
                    fromAmino: (object: _109.MsgUndelegateAmino) => _109.MsgUndelegate;
                };
                "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation": {
                    aminoType: string;
                    toAmino: (message: _109.MsgCancelUnbondingDelegation) => _109.MsgCancelUnbondingDelegationAmino;
                    fromAmino: (object: _109.MsgCancelUnbondingDelegationAmino) => _109.MsgCancelUnbondingDelegation;
                };
                "/cosmos.staking.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _109.MsgUpdateParams) => _109.MsgUpdateParamsAmino;
                    fromAmino: (object: _109.MsgUpdateParamsAmino) => _109.MsgUpdateParams;
                };
            };
            protobufPackage: "cosmos.staking.v1beta1";
            MsgCreateValidator: {
                typeUrl: string;
                encode(message: _109.MsgCreateValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _109.MsgCreateValidator;
                fromJSON(object: any): _109.MsgCreateValidator;
                toJSON(message: _109.MsgCreateValidator): unknown;
                fromPartial(object: Partial<_109.MsgCreateValidator>): _109.MsgCreateValidator;
                fromSDK(object: _109.MsgCreateValidatorSDKType): _109.MsgCreateValidator;
                toSDK(message: _109.MsgCreateValidator): _109.MsgCreateValidatorSDKType;
                fromAmino(object: _109.MsgCreateValidatorAmino): _109.MsgCreateValidator;
                toAmino(message: _109.MsgCreateValidator): _109.MsgCreateValidatorAmino;
                fromAminoMsg(object: _109.MsgCreateValidatorAminoMsg): _109.MsgCreateValidator;
                toAminoMsg(message: _109.MsgCreateValidator): _109.MsgCreateValidatorAminoMsg;
                fromProtoMsg(message: _109.MsgCreateValidatorProtoMsg): _109.MsgCreateValidator;
                toProto(message: _109.MsgCreateValidator): Uint8Array;
                toProtoMsg(message: _109.MsgCreateValidator): _109.MsgCreateValidatorProtoMsg;
            };
            MsgCreateValidatorResponse: {
                typeUrl: string;
                encode(_: _109.MsgCreateValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _109.MsgCreateValidatorResponse;
                fromJSON(_: any): _109.MsgCreateValidatorResponse;
                toJSON(_: _109.MsgCreateValidatorResponse): unknown;
                fromPartial(_: Partial<_109.MsgCreateValidatorResponse>): _109.MsgCreateValidatorResponse;
                fromSDK(_: _109.MsgCreateValidatorResponseSDKType): _109.MsgCreateValidatorResponse;
                toSDK(_: _109.MsgCreateValidatorResponse): _109.MsgCreateValidatorResponseSDKType;
                fromAmino(_: _109.MsgCreateValidatorResponseAmino): _109.MsgCreateValidatorResponse;
                toAmino(_: _109.MsgCreateValidatorResponse): _109.MsgCreateValidatorResponseAmino;
                fromAminoMsg(object: _109.MsgCreateValidatorResponseAminoMsg): _109.MsgCreateValidatorResponse;
                toAminoMsg(message: _109.MsgCreateValidatorResponse): _109.MsgCreateValidatorResponseAminoMsg;
                fromProtoMsg(message: _109.MsgCreateValidatorResponseProtoMsg): _109.MsgCreateValidatorResponse;
                toProto(message: _109.MsgCreateValidatorResponse): Uint8Array;
                toProtoMsg(message: _109.MsgCreateValidatorResponse): _109.MsgCreateValidatorResponseProtoMsg;
            };
            MsgEditValidator: {
                typeUrl: string;
                encode(message: _109.MsgEditValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _109.MsgEditValidator;
                fromJSON(object: any): _109.MsgEditValidator;
                toJSON(message: _109.MsgEditValidator): unknown;
                fromPartial(object: Partial<_109.MsgEditValidator>): _109.MsgEditValidator;
                fromSDK(object: _109.MsgEditValidatorSDKType): _109.MsgEditValidator;
                toSDK(message: _109.MsgEditValidator): _109.MsgEditValidatorSDKType;
                fromAmino(object: _109.MsgEditValidatorAmino): _109.MsgEditValidator;
                toAmino(message: _109.MsgEditValidator): _109.MsgEditValidatorAmino;
                fromAminoMsg(object: _109.MsgEditValidatorAminoMsg): _109.MsgEditValidator;
                toAminoMsg(message: _109.MsgEditValidator): _109.MsgEditValidatorAminoMsg;
                fromProtoMsg(message: _109.MsgEditValidatorProtoMsg): _109.MsgEditValidator;
                toProto(message: _109.MsgEditValidator): Uint8Array;
                toProtoMsg(message: _109.MsgEditValidator): _109.MsgEditValidatorProtoMsg;
            };
            MsgEditValidatorResponse: {
                typeUrl: string;
                encode(_: _109.MsgEditValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _109.MsgEditValidatorResponse;
                fromJSON(_: any): _109.MsgEditValidatorResponse;
                toJSON(_: _109.MsgEditValidatorResponse): unknown;
                fromPartial(_: Partial<_109.MsgEditValidatorResponse>): _109.MsgEditValidatorResponse;
                fromSDK(_: _109.MsgEditValidatorResponseSDKType): _109.MsgEditValidatorResponse;
                toSDK(_: _109.MsgEditValidatorResponse): _109.MsgEditValidatorResponseSDKType;
                fromAmino(_: _109.MsgEditValidatorResponseAmino): _109.MsgEditValidatorResponse;
                toAmino(_: _109.MsgEditValidatorResponse): _109.MsgEditValidatorResponseAmino;
                fromAminoMsg(object: _109.MsgEditValidatorResponseAminoMsg): _109.MsgEditValidatorResponse;
                toAminoMsg(message: _109.MsgEditValidatorResponse): _109.MsgEditValidatorResponseAminoMsg;
                fromProtoMsg(message: _109.MsgEditValidatorResponseProtoMsg): _109.MsgEditValidatorResponse;
                toProto(message: _109.MsgEditValidatorResponse): Uint8Array;
                toProtoMsg(message: _109.MsgEditValidatorResponse): _109.MsgEditValidatorResponseProtoMsg;
            };
            MsgDelegate: {
                typeUrl: string;
                encode(message: _109.MsgDelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _109.MsgDelegate;
                fromJSON(object: any): _109.MsgDelegate;
                toJSON(message: _109.MsgDelegate): unknown;
                fromPartial(object: Partial<_109.MsgDelegate>): _109.MsgDelegate;
                fromSDK(object: _109.MsgDelegateSDKType): _109.MsgDelegate;
                toSDK(message: _109.MsgDelegate): _109.MsgDelegateSDKType;
                fromAmino(object: _109.MsgDelegateAmino): _109.MsgDelegate;
                toAmino(message: _109.MsgDelegate): _109.MsgDelegateAmino;
                fromAminoMsg(object: _109.MsgDelegateAminoMsg): _109.MsgDelegate;
                toAminoMsg(message: _109.MsgDelegate): _109.MsgDelegateAminoMsg;
                fromProtoMsg(message: _109.MsgDelegateProtoMsg): _109.MsgDelegate;
                toProto(message: _109.MsgDelegate): Uint8Array;
                toProtoMsg(message: _109.MsgDelegate): _109.MsgDelegateProtoMsg;
            };
            MsgDelegateResponse: {
                typeUrl: string;
                encode(_: _109.MsgDelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _109.MsgDelegateResponse;
                fromJSON(_: any): _109.MsgDelegateResponse;
                toJSON(_: _109.MsgDelegateResponse): unknown;
                fromPartial(_: Partial<_109.MsgDelegateResponse>): _109.MsgDelegateResponse;
                fromSDK(_: _109.MsgDelegateResponseSDKType): _109.MsgDelegateResponse;
                toSDK(_: _109.MsgDelegateResponse): _109.MsgDelegateResponseSDKType;
                fromAmino(_: _109.MsgDelegateResponseAmino): _109.MsgDelegateResponse;
                toAmino(_: _109.MsgDelegateResponse): _109.MsgDelegateResponseAmino;
                fromAminoMsg(object: _109.MsgDelegateResponseAminoMsg): _109.MsgDelegateResponse;
                toAminoMsg(message: _109.MsgDelegateResponse): _109.MsgDelegateResponseAminoMsg;
                fromProtoMsg(message: _109.MsgDelegateResponseProtoMsg): _109.MsgDelegateResponse;
                toProto(message: _109.MsgDelegateResponse): Uint8Array;
                toProtoMsg(message: _109.MsgDelegateResponse): _109.MsgDelegateResponseProtoMsg;
            };
            MsgBeginRedelegate: {
                typeUrl: string;
                encode(message: _109.MsgBeginRedelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _109.MsgBeginRedelegate;
                fromJSON(object: any): _109.MsgBeginRedelegate;
                toJSON(message: _109.MsgBeginRedelegate): unknown;
                fromPartial(object: Partial<_109.MsgBeginRedelegate>): _109.MsgBeginRedelegate;
                fromSDK(object: _109.MsgBeginRedelegateSDKType): _109.MsgBeginRedelegate;
                toSDK(message: _109.MsgBeginRedelegate): _109.MsgBeginRedelegateSDKType;
                fromAmino(object: _109.MsgBeginRedelegateAmino): _109.MsgBeginRedelegate;
                toAmino(message: _109.MsgBeginRedelegate): _109.MsgBeginRedelegateAmino;
                fromAminoMsg(object: _109.MsgBeginRedelegateAminoMsg): _109.MsgBeginRedelegate;
                toAminoMsg(message: _109.MsgBeginRedelegate): _109.MsgBeginRedelegateAminoMsg;
                fromProtoMsg(message: _109.MsgBeginRedelegateProtoMsg): _109.MsgBeginRedelegate;
                toProto(message: _109.MsgBeginRedelegate): Uint8Array;
                toProtoMsg(message: _109.MsgBeginRedelegate): _109.MsgBeginRedelegateProtoMsg;
            };
            MsgBeginRedelegateResponse: {
                typeUrl: string;
                encode(message: _109.MsgBeginRedelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _109.MsgBeginRedelegateResponse;
                fromJSON(object: any): _109.MsgBeginRedelegateResponse;
                toJSON(message: _109.MsgBeginRedelegateResponse): unknown;
                fromPartial(object: Partial<_109.MsgBeginRedelegateResponse>): _109.MsgBeginRedelegateResponse;
                fromSDK(object: _109.MsgBeginRedelegateResponseSDKType): _109.MsgBeginRedelegateResponse;
                toSDK(message: _109.MsgBeginRedelegateResponse): _109.MsgBeginRedelegateResponseSDKType;
                fromAmino(object: _109.MsgBeginRedelegateResponseAmino): _109.MsgBeginRedelegateResponse;
                toAmino(message: _109.MsgBeginRedelegateResponse): _109.MsgBeginRedelegateResponseAmino;
                fromAminoMsg(object: _109.MsgBeginRedelegateResponseAminoMsg): _109.MsgBeginRedelegateResponse;
                toAminoMsg(message: _109.MsgBeginRedelegateResponse): _109.MsgBeginRedelegateResponseAminoMsg;
                fromProtoMsg(message: _109.MsgBeginRedelegateResponseProtoMsg): _109.MsgBeginRedelegateResponse;
                toProto(message: _109.MsgBeginRedelegateResponse): Uint8Array;
                toProtoMsg(message: _109.MsgBeginRedelegateResponse): _109.MsgBeginRedelegateResponseProtoMsg;
            };
            MsgUndelegate: {
                typeUrl: string;
                encode(message: _109.MsgUndelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _109.MsgUndelegate;
                fromJSON(object: any): _109.MsgUndelegate;
                toJSON(message: _109.MsgUndelegate): unknown;
                fromPartial(object: Partial<_109.MsgUndelegate>): _109.MsgUndelegate;
                fromSDK(object: _109.MsgUndelegateSDKType): _109.MsgUndelegate;
                toSDK(message: _109.MsgUndelegate): _109.MsgUndelegateSDKType;
                fromAmino(object: _109.MsgUndelegateAmino): _109.MsgUndelegate;
                toAmino(message: _109.MsgUndelegate): _109.MsgUndelegateAmino;
                fromAminoMsg(object: _109.MsgUndelegateAminoMsg): _109.MsgUndelegate;
                toAminoMsg(message: _109.MsgUndelegate): _109.MsgUndelegateAminoMsg;
                fromProtoMsg(message: _109.MsgUndelegateProtoMsg): _109.MsgUndelegate;
                toProto(message: _109.MsgUndelegate): Uint8Array;
                toProtoMsg(message: _109.MsgUndelegate): _109.MsgUndelegateProtoMsg;
            };
            MsgUndelegateResponse: {
                typeUrl: string;
                encode(message: _109.MsgUndelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _109.MsgUndelegateResponse;
                fromJSON(object: any): _109.MsgUndelegateResponse;
                toJSON(message: _109.MsgUndelegateResponse): unknown;
                fromPartial(object: Partial<_109.MsgUndelegateResponse>): _109.MsgUndelegateResponse;
                fromSDK(object: _109.MsgUndelegateResponseSDKType): _109.MsgUndelegateResponse;
                toSDK(message: _109.MsgUndelegateResponse): _109.MsgUndelegateResponseSDKType;
                fromAmino(object: _109.MsgUndelegateResponseAmino): _109.MsgUndelegateResponse;
                toAmino(message: _109.MsgUndelegateResponse): _109.MsgUndelegateResponseAmino;
                fromAminoMsg(object: _109.MsgUndelegateResponseAminoMsg): _109.MsgUndelegateResponse;
                toAminoMsg(message: _109.MsgUndelegateResponse): _109.MsgUndelegateResponseAminoMsg;
                fromProtoMsg(message: _109.MsgUndelegateResponseProtoMsg): _109.MsgUndelegateResponse;
                toProto(message: _109.MsgUndelegateResponse): Uint8Array;
                toProtoMsg(message: _109.MsgUndelegateResponse): _109.MsgUndelegateResponseProtoMsg;
            };
            MsgCancelUnbondingDelegation: {
                typeUrl: string;
                encode(message: _109.MsgCancelUnbondingDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _109.MsgCancelUnbondingDelegation;
                fromJSON(object: any): _109.MsgCancelUnbondingDelegation;
                toJSON(message: _109.MsgCancelUnbondingDelegation): unknown;
                fromPartial(object: Partial<_109.MsgCancelUnbondingDelegation>): _109.MsgCancelUnbondingDelegation;
                fromSDK(object: _109.MsgCancelUnbondingDelegationSDKType): _109.MsgCancelUnbondingDelegation;
                toSDK(message: _109.MsgCancelUnbondingDelegation): _109.MsgCancelUnbondingDelegationSDKType;
                fromAmino(object: _109.MsgCancelUnbondingDelegationAmino): _109.MsgCancelUnbondingDelegation;
                toAmino(message: _109.MsgCancelUnbondingDelegation): _109.MsgCancelUnbondingDelegationAmino;
                fromAminoMsg(object: _109.MsgCancelUnbondingDelegationAminoMsg): _109.MsgCancelUnbondingDelegation;
                toAminoMsg(message: _109.MsgCancelUnbondingDelegation): _109.MsgCancelUnbondingDelegationAminoMsg;
                fromProtoMsg(message: _109.MsgCancelUnbondingDelegationProtoMsg): _109.MsgCancelUnbondingDelegation;
                toProto(message: _109.MsgCancelUnbondingDelegation): Uint8Array;
                toProtoMsg(message: _109.MsgCancelUnbondingDelegation): _109.MsgCancelUnbondingDelegationProtoMsg;
            };
            MsgCancelUnbondingDelegationResponse: {
                typeUrl: string;
                encode(_: _109.MsgCancelUnbondingDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _109.MsgCancelUnbondingDelegationResponse;
                fromJSON(_: any): _109.MsgCancelUnbondingDelegationResponse;
                toJSON(_: _109.MsgCancelUnbondingDelegationResponse): unknown;
                fromPartial(_: Partial<_109.MsgCancelUnbondingDelegationResponse>): _109.MsgCancelUnbondingDelegationResponse;
                fromSDK(_: _109.MsgCancelUnbondingDelegationResponseSDKType): _109.MsgCancelUnbondingDelegationResponse;
                toSDK(_: _109.MsgCancelUnbondingDelegationResponse): _109.MsgCancelUnbondingDelegationResponseSDKType;
                fromAmino(_: _109.MsgCancelUnbondingDelegationResponseAmino): _109.MsgCancelUnbondingDelegationResponse;
                toAmino(_: _109.MsgCancelUnbondingDelegationResponse): _109.MsgCancelUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _109.MsgCancelUnbondingDelegationResponseAminoMsg): _109.MsgCancelUnbondingDelegationResponse;
                toAminoMsg(message: _109.MsgCancelUnbondingDelegationResponse): _109.MsgCancelUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _109.MsgCancelUnbondingDelegationResponseProtoMsg): _109.MsgCancelUnbondingDelegationResponse;
                toProto(message: _109.MsgCancelUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _109.MsgCancelUnbondingDelegationResponse): _109.MsgCancelUnbondingDelegationResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _109.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _109.MsgUpdateParams;
                fromJSON(object: any): _109.MsgUpdateParams;
                toJSON(message: _109.MsgUpdateParams): unknown;
                fromPartial(object: Partial<_109.MsgUpdateParams>): _109.MsgUpdateParams;
                fromSDK(object: _109.MsgUpdateParamsSDKType): _109.MsgUpdateParams;
                toSDK(message: _109.MsgUpdateParams): _109.MsgUpdateParamsSDKType;
                fromAmino(object: _109.MsgUpdateParamsAmino): _109.MsgUpdateParams;
                toAmino(message: _109.MsgUpdateParams): _109.MsgUpdateParamsAmino;
                fromAminoMsg(object: _109.MsgUpdateParamsAminoMsg): _109.MsgUpdateParams;
                toAminoMsg(message: _109.MsgUpdateParams): _109.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _109.MsgUpdateParamsProtoMsg): _109.MsgUpdateParams;
                toProto(message: _109.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _109.MsgUpdateParams): _109.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _109.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _109.MsgUpdateParamsResponse;
                fromJSON(_: any): _109.MsgUpdateParamsResponse;
                toJSON(_: _109.MsgUpdateParamsResponse): unknown;
                fromPartial(_: Partial<_109.MsgUpdateParamsResponse>): _109.MsgUpdateParamsResponse;
                fromSDK(_: _109.MsgUpdateParamsResponseSDKType): _109.MsgUpdateParamsResponse;
                toSDK(_: _109.MsgUpdateParamsResponse): _109.MsgUpdateParamsResponseSDKType;
                fromAmino(_: _109.MsgUpdateParamsResponseAmino): _109.MsgUpdateParamsResponse;
                toAmino(_: _109.MsgUpdateParamsResponse): _109.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _109.MsgUpdateParamsResponseAminoMsg): _109.MsgUpdateParamsResponse;
                toAminoMsg(message: _109.MsgUpdateParamsResponse): _109.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _109.MsgUpdateParamsResponseProtoMsg): _109.MsgUpdateParamsResponse;
                toProto(message: _109.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _109.MsgUpdateParamsResponse): _109.MsgUpdateParamsResponseProtoMsg;
            };
            Cosmos_cryptoPubKey_InterfaceDecoder: (input: import("..").BinaryReader | Uint8Array) => import("../google/protobuf/any").Any;
            Cosmos_cryptoPubKey_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("cosmjs-types/google/protobuf/any").Any;
            Cosmos_cryptoPubKey_ToAmino: (content: import("../google/protobuf/any").Any) => import("@cosmjs/amino").Pubkey;
            bondStatusFromJSON(object: any): _108.BondStatus;
            bondStatusToJSON(object: _108.BondStatus): string;
            infractionFromJSON(object: any): _108.Infraction;
            infractionToJSON(object: _108.Infraction): string;
            BondStatus: typeof _108.BondStatus;
            BondStatusSDKType: typeof _108.BondStatus;
            BondStatusAmino: typeof _108.BondStatus;
            Infraction: typeof _108.Infraction;
            InfractionSDKType: typeof _108.Infraction;
            InfractionAmino: typeof _108.Infraction;
            HistoricalInfo: {
                typeUrl: string;
                encode(message: _108.HistoricalInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _108.HistoricalInfo;
                fromJSON(object: any): _108.HistoricalInfo;
                toJSON(message: _108.HistoricalInfo): unknown;
                fromPartial(object: Partial<_108.HistoricalInfo>): _108.HistoricalInfo;
                fromSDK(object: _108.HistoricalInfoSDKType): _108.HistoricalInfo;
                toSDK(message: _108.HistoricalInfo): _108.HistoricalInfoSDKType;
                fromAmino(object: _108.HistoricalInfoAmino): _108.HistoricalInfo;
                toAmino(message: _108.HistoricalInfo): _108.HistoricalInfoAmino;
                fromAminoMsg(object: _108.HistoricalInfoAminoMsg): _108.HistoricalInfo;
                toAminoMsg(message: _108.HistoricalInfo): _108.HistoricalInfoAminoMsg;
                fromProtoMsg(message: _108.HistoricalInfoProtoMsg): _108.HistoricalInfo;
                toProto(message: _108.HistoricalInfo): Uint8Array;
                toProtoMsg(message: _108.HistoricalInfo): _108.HistoricalInfoProtoMsg;
            };
            CommissionRates: {
                typeUrl: string;
                encode(message: _108.CommissionRates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _108.CommissionRates;
                fromJSON(object: any): _108.CommissionRates;
                toJSON(message: _108.CommissionRates): unknown;
                fromPartial(object: Partial<_108.CommissionRates>): _108.CommissionRates;
                fromSDK(object: _108.CommissionRatesSDKType): _108.CommissionRates;
                toSDK(message: _108.CommissionRates): _108.CommissionRatesSDKType;
                fromAmino(object: _108.CommissionRatesAmino): _108.CommissionRates;
                toAmino(message: _108.CommissionRates): _108.CommissionRatesAmino;
                fromAminoMsg(object: _108.CommissionRatesAminoMsg): _108.CommissionRates;
                toAminoMsg(message: _108.CommissionRates): _108.CommissionRatesAminoMsg;
                fromProtoMsg(message: _108.CommissionRatesProtoMsg): _108.CommissionRates;
                toProto(message: _108.CommissionRates): Uint8Array;
                toProtoMsg(message: _108.CommissionRates): _108.CommissionRatesProtoMsg;
            };
            Commission: {
                typeUrl: string;
                encode(message: _108.Commission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _108.Commission;
                fromJSON(object: any): _108.Commission;
                toJSON(message: _108.Commission): unknown;
                fromPartial(object: Partial<_108.Commission>): _108.Commission;
                fromSDK(object: _108.CommissionSDKType): _108.Commission;
                toSDK(message: _108.Commission): _108.CommissionSDKType;
                fromAmino(object: _108.CommissionAmino): _108.Commission;
                toAmino(message: _108.Commission): _108.CommissionAmino;
                fromAminoMsg(object: _108.CommissionAminoMsg): _108.Commission;
                toAminoMsg(message: _108.Commission): _108.CommissionAminoMsg;
                fromProtoMsg(message: _108.CommissionProtoMsg): _108.Commission;
                toProto(message: _108.Commission): Uint8Array;
                toProtoMsg(message: _108.Commission): _108.CommissionProtoMsg;
            };
            Description: {
                typeUrl: string;
                encode(message: _108.Description, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _108.Description;
                fromJSON(object: any): _108.Description;
                toJSON(message: _108.Description): unknown;
                fromPartial(object: Partial<_108.Description>): _108.Description;
                fromSDK(object: _108.DescriptionSDKType): _108.Description;
                toSDK(message: _108.Description): _108.DescriptionSDKType;
                fromAmino(object: _108.DescriptionAmino): _108.Description;
                toAmino(message: _108.Description): _108.DescriptionAmino;
                fromAminoMsg(object: _108.DescriptionAminoMsg): _108.Description;
                toAminoMsg(message: _108.Description): _108.DescriptionAminoMsg;
                fromProtoMsg(message: _108.DescriptionProtoMsg): _108.Description;
                toProto(message: _108.Description): Uint8Array;
                toProtoMsg(message: _108.Description): _108.DescriptionProtoMsg;
            };
            Validator: {
                typeUrl: string;
                encode(message: _108.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _108.Validator;
                fromJSON(object: any): _108.Validator;
                toJSON(message: _108.Validator): unknown;
                fromPartial(object: Partial<_108.Validator>): _108.Validator;
                fromSDK(object: _108.ValidatorSDKType): _108.Validator;
                toSDK(message: _108.Validator): _108.ValidatorSDKType;
                fromAmino(object: _108.ValidatorAmino): _108.Validator;
                toAmino(message: _108.Validator): _108.ValidatorAmino;
                fromAminoMsg(object: _108.ValidatorAminoMsg): _108.Validator;
                toAminoMsg(message: _108.Validator): _108.ValidatorAminoMsg;
                fromProtoMsg(message: _108.ValidatorProtoMsg): _108.Validator;
                toProto(message: _108.Validator): Uint8Array;
                toProtoMsg(message: _108.Validator): _108.ValidatorProtoMsg;
            };
            ValAddresses: {
                typeUrl: string;
                encode(message: _108.ValAddresses, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _108.ValAddresses;
                fromJSON(object: any): _108.ValAddresses;
                toJSON(message: _108.ValAddresses): unknown;
                fromPartial(object: Partial<_108.ValAddresses>): _108.ValAddresses;
                fromSDK(object: _108.ValAddressesSDKType): _108.ValAddresses;
                toSDK(message: _108.ValAddresses): _108.ValAddressesSDKType;
                fromAmino(object: _108.ValAddressesAmino): _108.ValAddresses;
                toAmino(message: _108.ValAddresses): _108.ValAddressesAmino;
                fromAminoMsg(object: _108.ValAddressesAminoMsg): _108.ValAddresses;
                toAminoMsg(message: _108.ValAddresses): _108.ValAddressesAminoMsg;
                fromProtoMsg(message: _108.ValAddressesProtoMsg): _108.ValAddresses;
                toProto(message: _108.ValAddresses): Uint8Array;
                toProtoMsg(message: _108.ValAddresses): _108.ValAddressesProtoMsg;
            };
            DVPair: {
                typeUrl: string;
                encode(message: _108.DVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _108.DVPair;
                fromJSON(object: any): _108.DVPair;
                toJSON(message: _108.DVPair): unknown;
                fromPartial(object: Partial<_108.DVPair>): _108.DVPair;
                fromSDK(object: _108.DVPairSDKType): _108.DVPair;
                toSDK(message: _108.DVPair): _108.DVPairSDKType;
                fromAmino(object: _108.DVPairAmino): _108.DVPair;
                toAmino(message: _108.DVPair): _108.DVPairAmino;
                fromAminoMsg(object: _108.DVPairAminoMsg): _108.DVPair;
                toAminoMsg(message: _108.DVPair): _108.DVPairAminoMsg;
                fromProtoMsg(message: _108.DVPairProtoMsg): _108.DVPair;
                toProto(message: _108.DVPair): Uint8Array;
                toProtoMsg(message: _108.DVPair): _108.DVPairProtoMsg;
            };
            DVPairs: {
                typeUrl: string;
                encode(message: _108.DVPairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _108.DVPairs;
                fromJSON(object: any): _108.DVPairs;
                toJSON(message: _108.DVPairs): unknown;
                fromPartial(object: Partial<_108.DVPairs>): _108.DVPairs;
                fromSDK(object: _108.DVPairsSDKType): _108.DVPairs;
                toSDK(message: _108.DVPairs): _108.DVPairsSDKType;
                fromAmino(object: _108.DVPairsAmino): _108.DVPairs;
                toAmino(message: _108.DVPairs): _108.DVPairsAmino;
                fromAminoMsg(object: _108.DVPairsAminoMsg): _108.DVPairs;
                toAminoMsg(message: _108.DVPairs): _108.DVPairsAminoMsg;
                fromProtoMsg(message: _108.DVPairsProtoMsg): _108.DVPairs;
                toProto(message: _108.DVPairs): Uint8Array;
                toProtoMsg(message: _108.DVPairs): _108.DVPairsProtoMsg;
            };
            DVVTriplet: {
                typeUrl: string;
                encode(message: _108.DVVTriplet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _108.DVVTriplet;
                fromJSON(object: any): _108.DVVTriplet;
                toJSON(message: _108.DVVTriplet): unknown;
                fromPartial(object: Partial<_108.DVVTriplet>): _108.DVVTriplet;
                fromSDK(object: _108.DVVTripletSDKType): _108.DVVTriplet;
                toSDK(message: _108.DVVTriplet): _108.DVVTripletSDKType;
                fromAmino(object: _108.DVVTripletAmino): _108.DVVTriplet;
                toAmino(message: _108.DVVTriplet): _108.DVVTripletAmino;
                fromAminoMsg(object: _108.DVVTripletAminoMsg): _108.DVVTriplet;
                toAminoMsg(message: _108.DVVTriplet): _108.DVVTripletAminoMsg;
                fromProtoMsg(message: _108.DVVTripletProtoMsg): _108.DVVTriplet;
                toProto(message: _108.DVVTriplet): Uint8Array;
                toProtoMsg(message: _108.DVVTriplet): _108.DVVTripletProtoMsg;
            };
            DVVTriplets: {
                typeUrl: string;
                encode(message: _108.DVVTriplets, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _108.DVVTriplets;
                fromJSON(object: any): _108.DVVTriplets;
                toJSON(message: _108.DVVTriplets): unknown;
                fromPartial(object: Partial<_108.DVVTriplets>): _108.DVVTriplets;
                fromSDK(object: _108.DVVTripletsSDKType): _108.DVVTriplets;
                toSDK(message: _108.DVVTriplets): _108.DVVTripletsSDKType;
                fromAmino(object: _108.DVVTripletsAmino): _108.DVVTriplets;
                toAmino(message: _108.DVVTriplets): _108.DVVTripletsAmino;
                fromAminoMsg(object: _108.DVVTripletsAminoMsg): _108.DVVTriplets;
                toAminoMsg(message: _108.DVVTriplets): _108.DVVTripletsAminoMsg;
                fromProtoMsg(message: _108.DVVTripletsProtoMsg): _108.DVVTriplets;
                toProto(message: _108.DVVTriplets): Uint8Array;
                toProtoMsg(message: _108.DVVTriplets): _108.DVVTripletsProtoMsg;
            };
            Delegation: {
                typeUrl: string;
                encode(message: _108.Delegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _108.Delegation;
                fromJSON(object: any): _108.Delegation;
                toJSON(message: _108.Delegation): unknown;
                fromPartial(object: Partial<_108.Delegation>): _108.Delegation;
                fromSDK(object: _108.DelegationSDKType): _108.Delegation;
                toSDK(message: _108.Delegation): _108.DelegationSDKType;
                fromAmino(object: _108.DelegationAmino): _108.Delegation;
                toAmino(message: _108.Delegation): _108.DelegationAmino;
                fromAminoMsg(object: _108.DelegationAminoMsg): _108.Delegation;
                toAminoMsg(message: _108.Delegation): _108.DelegationAminoMsg;
                fromProtoMsg(message: _108.DelegationProtoMsg): _108.Delegation;
                toProto(message: _108.Delegation): Uint8Array;
                toProtoMsg(message: _108.Delegation): _108.DelegationProtoMsg;
            };
            UnbondingDelegation: {
                typeUrl: string;
                encode(message: _108.UnbondingDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _108.UnbondingDelegation;
                fromJSON(object: any): _108.UnbondingDelegation;
                toJSON(message: _108.UnbondingDelegation): unknown;
                fromPartial(object: Partial<_108.UnbondingDelegation>): _108.UnbondingDelegation;
                fromSDK(object: _108.UnbondingDelegationSDKType): _108.UnbondingDelegation;
                toSDK(message: _108.UnbondingDelegation): _108.UnbondingDelegationSDKType;
                fromAmino(object: _108.UnbondingDelegationAmino): _108.UnbondingDelegation;
                toAmino(message: _108.UnbondingDelegation): _108.UnbondingDelegationAmino;
                fromAminoMsg(object: _108.UnbondingDelegationAminoMsg): _108.UnbondingDelegation;
                toAminoMsg(message: _108.UnbondingDelegation): _108.UnbondingDelegationAminoMsg;
                fromProtoMsg(message: _108.UnbondingDelegationProtoMsg): _108.UnbondingDelegation;
                toProto(message: _108.UnbondingDelegation): Uint8Array;
                toProtoMsg(message: _108.UnbondingDelegation): _108.UnbondingDelegationProtoMsg;
            };
            UnbondingDelegationEntry: {
                typeUrl: string;
                encode(message: _108.UnbondingDelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _108.UnbondingDelegationEntry;
                fromJSON(object: any): _108.UnbondingDelegationEntry;
                toJSON(message: _108.UnbondingDelegationEntry): unknown;
                fromPartial(object: Partial<_108.UnbondingDelegationEntry>): _108.UnbondingDelegationEntry;
                fromSDK(object: _108.UnbondingDelegationEntrySDKType): _108.UnbondingDelegationEntry;
                toSDK(message: _108.UnbondingDelegationEntry): _108.UnbondingDelegationEntrySDKType;
                fromAmino(object: _108.UnbondingDelegationEntryAmino): _108.UnbondingDelegationEntry;
                toAmino(message: _108.UnbondingDelegationEntry): _108.UnbondingDelegationEntryAmino;
                fromAminoMsg(object: _108.UnbondingDelegationEntryAminoMsg): _108.UnbondingDelegationEntry;
                toAminoMsg(message: _108.UnbondingDelegationEntry): _108.UnbondingDelegationEntryAminoMsg;
                fromProtoMsg(message: _108.UnbondingDelegationEntryProtoMsg): _108.UnbondingDelegationEntry;
                toProto(message: _108.UnbondingDelegationEntry): Uint8Array;
                toProtoMsg(message: _108.UnbondingDelegationEntry): _108.UnbondingDelegationEntryProtoMsg;
            };
            RedelegationEntry: {
                typeUrl: string;
                encode(message: _108.RedelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _108.RedelegationEntry;
                fromJSON(object: any): _108.RedelegationEntry;
                toJSON(message: _108.RedelegationEntry): unknown;
                fromPartial(object: Partial<_108.RedelegationEntry>): _108.RedelegationEntry;
                fromSDK(object: _108.RedelegationEntrySDKType): _108.RedelegationEntry;
                toSDK(message: _108.RedelegationEntry): _108.RedelegationEntrySDKType;
                fromAmino(object: _108.RedelegationEntryAmino): _108.RedelegationEntry;
                toAmino(message: _108.RedelegationEntry): _108.RedelegationEntryAmino;
                fromAminoMsg(object: _108.RedelegationEntryAminoMsg): _108.RedelegationEntry;
                toAminoMsg(message: _108.RedelegationEntry): _108.RedelegationEntryAminoMsg;
                fromProtoMsg(message: _108.RedelegationEntryProtoMsg): _108.RedelegationEntry;
                toProto(message: _108.RedelegationEntry): Uint8Array;
                toProtoMsg(message: _108.RedelegationEntry): _108.RedelegationEntryProtoMsg;
            };
            Redelegation: {
                typeUrl: string;
                encode(message: _108.Redelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _108.Redelegation;
                fromJSON(object: any): _108.Redelegation;
                toJSON(message: _108.Redelegation): unknown;
                fromPartial(object: Partial<_108.Redelegation>): _108.Redelegation;
                fromSDK(object: _108.RedelegationSDKType): _108.Redelegation;
                toSDK(message: _108.Redelegation): _108.RedelegationSDKType;
                fromAmino(object: _108.RedelegationAmino): _108.Redelegation;
                toAmino(message: _108.Redelegation): _108.RedelegationAmino;
                fromAminoMsg(object: _108.RedelegationAminoMsg): _108.Redelegation;
                toAminoMsg(message: _108.Redelegation): _108.RedelegationAminoMsg;
                fromProtoMsg(message: _108.RedelegationProtoMsg): _108.Redelegation;
                toProto(message: _108.Redelegation): Uint8Array;
                toProtoMsg(message: _108.Redelegation): _108.RedelegationProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _108.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _108.Params;
                fromJSON(object: any): _108.Params;
                toJSON(message: _108.Params): unknown;
                fromPartial(object: Partial<_108.Params>): _108.Params;
                fromSDK(object: _108.ParamsSDKType): _108.Params;
                toSDK(message: _108.Params): _108.ParamsSDKType;
                fromAmino(object: _108.ParamsAmino): _108.Params;
                toAmino(message: _108.Params): _108.ParamsAmino;
                fromAminoMsg(object: _108.ParamsAminoMsg): _108.Params;
                toAminoMsg(message: _108.Params): _108.ParamsAminoMsg;
                fromProtoMsg(message: _108.ParamsProtoMsg): _108.Params;
                toProto(message: _108.Params): Uint8Array;
                toProtoMsg(message: _108.Params): _108.ParamsProtoMsg;
            };
            DelegationResponse: {
                typeUrl: string;
                encode(message: _108.DelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _108.DelegationResponse;
                fromJSON(object: any): _108.DelegationResponse;
                toJSON(message: _108.DelegationResponse): unknown;
                fromPartial(object: Partial<_108.DelegationResponse>): _108.DelegationResponse;
                fromSDK(object: _108.DelegationResponseSDKType): _108.DelegationResponse;
                toSDK(message: _108.DelegationResponse): _108.DelegationResponseSDKType;
                fromAmino(object: _108.DelegationResponseAmino): _108.DelegationResponse;
                toAmino(message: _108.DelegationResponse): _108.DelegationResponseAmino;
                fromAminoMsg(object: _108.DelegationResponseAminoMsg): _108.DelegationResponse;
                toAminoMsg(message: _108.DelegationResponse): _108.DelegationResponseAminoMsg;
                fromProtoMsg(message: _108.DelegationResponseProtoMsg): _108.DelegationResponse;
                toProto(message: _108.DelegationResponse): Uint8Array;
                toProtoMsg(message: _108.DelegationResponse): _108.DelegationResponseProtoMsg;
            };
            RedelegationEntryResponse: {
                typeUrl: string;
                encode(message: _108.RedelegationEntryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _108.RedelegationEntryResponse;
                fromJSON(object: any): _108.RedelegationEntryResponse;
                toJSON(message: _108.RedelegationEntryResponse): unknown;
                fromPartial(object: Partial<_108.RedelegationEntryResponse>): _108.RedelegationEntryResponse;
                fromSDK(object: _108.RedelegationEntryResponseSDKType): _108.RedelegationEntryResponse;
                toSDK(message: _108.RedelegationEntryResponse): _108.RedelegationEntryResponseSDKType;
                fromAmino(object: _108.RedelegationEntryResponseAmino): _108.RedelegationEntryResponse;
                toAmino(message: _108.RedelegationEntryResponse): _108.RedelegationEntryResponseAmino;
                fromAminoMsg(object: _108.RedelegationEntryResponseAminoMsg): _108.RedelegationEntryResponse;
                toAminoMsg(message: _108.RedelegationEntryResponse): _108.RedelegationEntryResponseAminoMsg;
                fromProtoMsg(message: _108.RedelegationEntryResponseProtoMsg): _108.RedelegationEntryResponse;
                toProto(message: _108.RedelegationEntryResponse): Uint8Array;
                toProtoMsg(message: _108.RedelegationEntryResponse): _108.RedelegationEntryResponseProtoMsg;
            };
            RedelegationResponse: {
                typeUrl: string;
                encode(message: _108.RedelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _108.RedelegationResponse;
                fromJSON(object: any): _108.RedelegationResponse;
                toJSON(message: _108.RedelegationResponse): unknown;
                fromPartial(object: Partial<_108.RedelegationResponse>): _108.RedelegationResponse;
                fromSDK(object: _108.RedelegationResponseSDKType): _108.RedelegationResponse;
                toSDK(message: _108.RedelegationResponse): _108.RedelegationResponseSDKType;
                fromAmino(object: _108.RedelegationResponseAmino): _108.RedelegationResponse;
                toAmino(message: _108.RedelegationResponse): _108.RedelegationResponseAmino;
                fromAminoMsg(object: _108.RedelegationResponseAminoMsg): _108.RedelegationResponse;
                toAminoMsg(message: _108.RedelegationResponse): _108.RedelegationResponseAminoMsg;
                fromProtoMsg(message: _108.RedelegationResponseProtoMsg): _108.RedelegationResponse;
                toProto(message: _108.RedelegationResponse): Uint8Array;
                toProtoMsg(message: _108.RedelegationResponse): _108.RedelegationResponseProtoMsg;
            };
            Pool: {
                typeUrl: string;
                encode(message: _108.Pool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _108.Pool;
                fromJSON(object: any): _108.Pool;
                toJSON(message: _108.Pool): unknown;
                fromPartial(object: Partial<_108.Pool>): _108.Pool;
                fromSDK(object: _108.PoolSDKType): _108.Pool;
                toSDK(message: _108.Pool): _108.PoolSDKType;
                fromAmino(object: _108.PoolAmino): _108.Pool;
                toAmino(message: _108.Pool): _108.PoolAmino;
                fromAminoMsg(object: _108.PoolAminoMsg): _108.Pool;
                toAminoMsg(message: _108.Pool): _108.PoolAminoMsg;
                fromProtoMsg(message: _108.PoolProtoMsg): _108.Pool;
                toProto(message: _108.Pool): Uint8Array;
                toProtoMsg(message: _108.Pool): _108.PoolProtoMsg;
            };
            ValidatorUpdates: {
                typeUrl: string;
                encode(message: _108.ValidatorUpdates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _108.ValidatorUpdates;
                fromJSON(object: any): _108.ValidatorUpdates;
                toJSON(message: _108.ValidatorUpdates): unknown;
                fromPartial(object: Partial<_108.ValidatorUpdates>): _108.ValidatorUpdates;
                fromSDK(object: _108.ValidatorUpdatesSDKType): _108.ValidatorUpdates;
                toSDK(message: _108.ValidatorUpdates): _108.ValidatorUpdatesSDKType;
                fromAmino(object: _108.ValidatorUpdatesAmino): _108.ValidatorUpdates;
                toAmino(message: _108.ValidatorUpdates): _108.ValidatorUpdatesAmino;
                fromAminoMsg(object: _108.ValidatorUpdatesAminoMsg): _108.ValidatorUpdates;
                toAminoMsg(message: _108.ValidatorUpdates): _108.ValidatorUpdatesAminoMsg;
                fromProtoMsg(message: _108.ValidatorUpdatesProtoMsg): _108.ValidatorUpdates;
                toProto(message: _108.ValidatorUpdates): Uint8Array;
                toProtoMsg(message: _108.ValidatorUpdates): _108.ValidatorUpdatesProtoMsg;
            };
            QueryValidatorsRequest: {
                typeUrl: string;
                encode(message: _107.QueryValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _107.QueryValidatorsRequest;
                fromJSON(object: any): _107.QueryValidatorsRequest;
                toJSON(message: _107.QueryValidatorsRequest): unknown;
                fromPartial(object: Partial<_107.QueryValidatorsRequest>): _107.QueryValidatorsRequest;
                fromSDK(object: _107.QueryValidatorsRequestSDKType): _107.QueryValidatorsRequest;
                toSDK(message: _107.QueryValidatorsRequest): _107.QueryValidatorsRequestSDKType;
                fromAmino(object: _107.QueryValidatorsRequestAmino): _107.QueryValidatorsRequest;
                toAmino(message: _107.QueryValidatorsRequest): _107.QueryValidatorsRequestAmino;
                fromAminoMsg(object: _107.QueryValidatorsRequestAminoMsg): _107.QueryValidatorsRequest;
                toAminoMsg(message: _107.QueryValidatorsRequest): _107.QueryValidatorsRequestAminoMsg;
                fromProtoMsg(message: _107.QueryValidatorsRequestProtoMsg): _107.QueryValidatorsRequest;
                toProto(message: _107.QueryValidatorsRequest): Uint8Array;
                toProtoMsg(message: _107.QueryValidatorsRequest): _107.QueryValidatorsRequestProtoMsg;
            };
            QueryValidatorsResponse: {
                typeUrl: string;
                encode(message: _107.QueryValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _107.QueryValidatorsResponse;
                fromJSON(object: any): _107.QueryValidatorsResponse;
                toJSON(message: _107.QueryValidatorsResponse): unknown;
                fromPartial(object: Partial<_107.QueryValidatorsResponse>): _107.QueryValidatorsResponse;
                fromSDK(object: _107.QueryValidatorsResponseSDKType): _107.QueryValidatorsResponse;
                toSDK(message: _107.QueryValidatorsResponse): _107.QueryValidatorsResponseSDKType;
                fromAmino(object: _107.QueryValidatorsResponseAmino): _107.QueryValidatorsResponse;
                toAmino(message: _107.QueryValidatorsResponse): _107.QueryValidatorsResponseAmino;
                fromAminoMsg(object: _107.QueryValidatorsResponseAminoMsg): _107.QueryValidatorsResponse;
                toAminoMsg(message: _107.QueryValidatorsResponse): _107.QueryValidatorsResponseAminoMsg;
                fromProtoMsg(message: _107.QueryValidatorsResponseProtoMsg): _107.QueryValidatorsResponse;
                toProto(message: _107.QueryValidatorsResponse): Uint8Array;
                toProtoMsg(message: _107.QueryValidatorsResponse): _107.QueryValidatorsResponseProtoMsg;
            };
            QueryValidatorRequest: {
                typeUrl: string;
                encode(message: _107.QueryValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _107.QueryValidatorRequest;
                fromJSON(object: any): _107.QueryValidatorRequest;
                toJSON(message: _107.QueryValidatorRequest): unknown;
                fromPartial(object: Partial<_107.QueryValidatorRequest>): _107.QueryValidatorRequest;
                fromSDK(object: _107.QueryValidatorRequestSDKType): _107.QueryValidatorRequest;
                toSDK(message: _107.QueryValidatorRequest): _107.QueryValidatorRequestSDKType;
                fromAmino(object: _107.QueryValidatorRequestAmino): _107.QueryValidatorRequest;
                toAmino(message: _107.QueryValidatorRequest): _107.QueryValidatorRequestAmino;
                fromAminoMsg(object: _107.QueryValidatorRequestAminoMsg): _107.QueryValidatorRequest;
                toAminoMsg(message: _107.QueryValidatorRequest): _107.QueryValidatorRequestAminoMsg;
                fromProtoMsg(message: _107.QueryValidatorRequestProtoMsg): _107.QueryValidatorRequest;
                toProto(message: _107.QueryValidatorRequest): Uint8Array;
                toProtoMsg(message: _107.QueryValidatorRequest): _107.QueryValidatorRequestProtoMsg;
            };
            QueryValidatorResponse: {
                typeUrl: string;
                encode(message: _107.QueryValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _107.QueryValidatorResponse;
                fromJSON(object: any): _107.QueryValidatorResponse;
                toJSON(message: _107.QueryValidatorResponse): unknown;
                fromPartial(object: Partial<_107.QueryValidatorResponse>): _107.QueryValidatorResponse;
                fromSDK(object: _107.QueryValidatorResponseSDKType): _107.QueryValidatorResponse;
                toSDK(message: _107.QueryValidatorResponse): _107.QueryValidatorResponseSDKType;
                fromAmino(object: _107.QueryValidatorResponseAmino): _107.QueryValidatorResponse;
                toAmino(message: _107.QueryValidatorResponse): _107.QueryValidatorResponseAmino;
                fromAminoMsg(object: _107.QueryValidatorResponseAminoMsg): _107.QueryValidatorResponse;
                toAminoMsg(message: _107.QueryValidatorResponse): _107.QueryValidatorResponseAminoMsg;
                fromProtoMsg(message: _107.QueryValidatorResponseProtoMsg): _107.QueryValidatorResponse;
                toProto(message: _107.QueryValidatorResponse): Uint8Array;
                toProtoMsg(message: _107.QueryValidatorResponse): _107.QueryValidatorResponseProtoMsg;
            };
            QueryValidatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _107.QueryValidatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _107.QueryValidatorDelegationsRequest;
                fromJSON(object: any): _107.QueryValidatorDelegationsRequest;
                toJSON(message: _107.QueryValidatorDelegationsRequest): unknown;
                fromPartial(object: Partial<_107.QueryValidatorDelegationsRequest>): _107.QueryValidatorDelegationsRequest;
                fromSDK(object: _107.QueryValidatorDelegationsRequestSDKType): _107.QueryValidatorDelegationsRequest;
                toSDK(message: _107.QueryValidatorDelegationsRequest): _107.QueryValidatorDelegationsRequestSDKType;
                fromAmino(object: _107.QueryValidatorDelegationsRequestAmino): _107.QueryValidatorDelegationsRequest;
                toAmino(message: _107.QueryValidatorDelegationsRequest): _107.QueryValidatorDelegationsRequestAmino;
                fromAminoMsg(object: _107.QueryValidatorDelegationsRequestAminoMsg): _107.QueryValidatorDelegationsRequest;
                toAminoMsg(message: _107.QueryValidatorDelegationsRequest): _107.QueryValidatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _107.QueryValidatorDelegationsRequestProtoMsg): _107.QueryValidatorDelegationsRequest;
                toProto(message: _107.QueryValidatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _107.QueryValidatorDelegationsRequest): _107.QueryValidatorDelegationsRequestProtoMsg;
            };
            QueryValidatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _107.QueryValidatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _107.QueryValidatorDelegationsResponse;
                fromJSON(object: any): _107.QueryValidatorDelegationsResponse;
                toJSON(message: _107.QueryValidatorDelegationsResponse): unknown;
                fromPartial(object: Partial<_107.QueryValidatorDelegationsResponse>): _107.QueryValidatorDelegationsResponse;
                fromSDK(object: _107.QueryValidatorDelegationsResponseSDKType): _107.QueryValidatorDelegationsResponse;
                toSDK(message: _107.QueryValidatorDelegationsResponse): _107.QueryValidatorDelegationsResponseSDKType;
                fromAmino(object: _107.QueryValidatorDelegationsResponseAmino): _107.QueryValidatorDelegationsResponse;
                toAmino(message: _107.QueryValidatorDelegationsResponse): _107.QueryValidatorDelegationsResponseAmino;
                fromAminoMsg(object: _107.QueryValidatorDelegationsResponseAminoMsg): _107.QueryValidatorDelegationsResponse;
                toAminoMsg(message: _107.QueryValidatorDelegationsResponse): _107.QueryValidatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _107.QueryValidatorDelegationsResponseProtoMsg): _107.QueryValidatorDelegationsResponse;
                toProto(message: _107.QueryValidatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _107.QueryValidatorDelegationsResponse): _107.QueryValidatorDelegationsResponseProtoMsg;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _107.QueryValidatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _107.QueryValidatorUnbondingDelegationsRequest;
                fromJSON(object: any): _107.QueryValidatorUnbondingDelegationsRequest;
                toJSON(message: _107.QueryValidatorUnbondingDelegationsRequest): unknown;
                fromPartial(object: Partial<_107.QueryValidatorUnbondingDelegationsRequest>): _107.QueryValidatorUnbondingDelegationsRequest;
                fromSDK(object: _107.QueryValidatorUnbondingDelegationsRequestSDKType): _107.QueryValidatorUnbondingDelegationsRequest;
                toSDK(message: _107.QueryValidatorUnbondingDelegationsRequest): _107.QueryValidatorUnbondingDelegationsRequestSDKType;
                fromAmino(object: _107.QueryValidatorUnbondingDelegationsRequestAmino): _107.QueryValidatorUnbondingDelegationsRequest;
                toAmino(message: _107.QueryValidatorUnbondingDelegationsRequest): _107.QueryValidatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _107.QueryValidatorUnbondingDelegationsRequestAminoMsg): _107.QueryValidatorUnbondingDelegationsRequest;
                toAminoMsg(message: _107.QueryValidatorUnbondingDelegationsRequest): _107.QueryValidatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _107.QueryValidatorUnbondingDelegationsRequestProtoMsg): _107.QueryValidatorUnbondingDelegationsRequest;
                toProto(message: _107.QueryValidatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _107.QueryValidatorUnbondingDelegationsRequest): _107.QueryValidatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _107.QueryValidatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _107.QueryValidatorUnbondingDelegationsResponse;
                fromJSON(object: any): _107.QueryValidatorUnbondingDelegationsResponse;
                toJSON(message: _107.QueryValidatorUnbondingDelegationsResponse): unknown;
                fromPartial(object: Partial<_107.QueryValidatorUnbondingDelegationsResponse>): _107.QueryValidatorUnbondingDelegationsResponse;
                fromSDK(object: _107.QueryValidatorUnbondingDelegationsResponseSDKType): _107.QueryValidatorUnbondingDelegationsResponse;
                toSDK(message: _107.QueryValidatorUnbondingDelegationsResponse): _107.QueryValidatorUnbondingDelegationsResponseSDKType;
                fromAmino(object: _107.QueryValidatorUnbondingDelegationsResponseAmino): _107.QueryValidatorUnbondingDelegationsResponse;
                toAmino(message: _107.QueryValidatorUnbondingDelegationsResponse): _107.QueryValidatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _107.QueryValidatorUnbondingDelegationsResponseAminoMsg): _107.QueryValidatorUnbondingDelegationsResponse;
                toAminoMsg(message: _107.QueryValidatorUnbondingDelegationsResponse): _107.QueryValidatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _107.QueryValidatorUnbondingDelegationsResponseProtoMsg): _107.QueryValidatorUnbondingDelegationsResponse;
                toProto(message: _107.QueryValidatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _107.QueryValidatorUnbondingDelegationsResponse): _107.QueryValidatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryDelegationRequest: {
                typeUrl: string;
                encode(message: _107.QueryDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _107.QueryDelegationRequest;
                fromJSON(object: any): _107.QueryDelegationRequest;
                toJSON(message: _107.QueryDelegationRequest): unknown;
                fromPartial(object: Partial<_107.QueryDelegationRequest>): _107.QueryDelegationRequest;
                fromSDK(object: _107.QueryDelegationRequestSDKType): _107.QueryDelegationRequest;
                toSDK(message: _107.QueryDelegationRequest): _107.QueryDelegationRequestSDKType;
                fromAmino(object: _107.QueryDelegationRequestAmino): _107.QueryDelegationRequest;
                toAmino(message: _107.QueryDelegationRequest): _107.QueryDelegationRequestAmino;
                fromAminoMsg(object: _107.QueryDelegationRequestAminoMsg): _107.QueryDelegationRequest;
                toAminoMsg(message: _107.QueryDelegationRequest): _107.QueryDelegationRequestAminoMsg;
                fromProtoMsg(message: _107.QueryDelegationRequestProtoMsg): _107.QueryDelegationRequest;
                toProto(message: _107.QueryDelegationRequest): Uint8Array;
                toProtoMsg(message: _107.QueryDelegationRequest): _107.QueryDelegationRequestProtoMsg;
            };
            QueryDelegationResponse: {
                typeUrl: string;
                encode(message: _107.QueryDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _107.QueryDelegationResponse;
                fromJSON(object: any): _107.QueryDelegationResponse;
                toJSON(message: _107.QueryDelegationResponse): unknown;
                fromPartial(object: Partial<_107.QueryDelegationResponse>): _107.QueryDelegationResponse;
                fromSDK(object: _107.QueryDelegationResponseSDKType): _107.QueryDelegationResponse;
                toSDK(message: _107.QueryDelegationResponse): _107.QueryDelegationResponseSDKType;
                fromAmino(object: _107.QueryDelegationResponseAmino): _107.QueryDelegationResponse;
                toAmino(message: _107.QueryDelegationResponse): _107.QueryDelegationResponseAmino;
                fromAminoMsg(object: _107.QueryDelegationResponseAminoMsg): _107.QueryDelegationResponse;
                toAminoMsg(message: _107.QueryDelegationResponse): _107.QueryDelegationResponseAminoMsg;
                fromProtoMsg(message: _107.QueryDelegationResponseProtoMsg): _107.QueryDelegationResponse;
                toProto(message: _107.QueryDelegationResponse): Uint8Array;
                toProtoMsg(message: _107.QueryDelegationResponse): _107.QueryDelegationResponseProtoMsg;
            };
            QueryUnbondingDelegationRequest: {
                typeUrl: string;
                encode(message: _107.QueryUnbondingDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _107.QueryUnbondingDelegationRequest;
                fromJSON(object: any): _107.QueryUnbondingDelegationRequest;
                toJSON(message: _107.QueryUnbondingDelegationRequest): unknown;
                fromPartial(object: Partial<_107.QueryUnbondingDelegationRequest>): _107.QueryUnbondingDelegationRequest;
                fromSDK(object: _107.QueryUnbondingDelegationRequestSDKType): _107.QueryUnbondingDelegationRequest;
                toSDK(message: _107.QueryUnbondingDelegationRequest): _107.QueryUnbondingDelegationRequestSDKType;
                fromAmino(object: _107.QueryUnbondingDelegationRequestAmino): _107.QueryUnbondingDelegationRequest;
                toAmino(message: _107.QueryUnbondingDelegationRequest): _107.QueryUnbondingDelegationRequestAmino;
                fromAminoMsg(object: _107.QueryUnbondingDelegationRequestAminoMsg): _107.QueryUnbondingDelegationRequest;
                toAminoMsg(message: _107.QueryUnbondingDelegationRequest): _107.QueryUnbondingDelegationRequestAminoMsg;
                fromProtoMsg(message: _107.QueryUnbondingDelegationRequestProtoMsg): _107.QueryUnbondingDelegationRequest;
                toProto(message: _107.QueryUnbondingDelegationRequest): Uint8Array;
                toProtoMsg(message: _107.QueryUnbondingDelegationRequest): _107.QueryUnbondingDelegationRequestProtoMsg;
            };
            QueryUnbondingDelegationResponse: {
                typeUrl: string;
                encode(message: _107.QueryUnbondingDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _107.QueryUnbondingDelegationResponse;
                fromJSON(object: any): _107.QueryUnbondingDelegationResponse;
                toJSON(message: _107.QueryUnbondingDelegationResponse): unknown;
                fromPartial(object: Partial<_107.QueryUnbondingDelegationResponse>): _107.QueryUnbondingDelegationResponse;
                fromSDK(object: _107.QueryUnbondingDelegationResponseSDKType): _107.QueryUnbondingDelegationResponse;
                toSDK(message: _107.QueryUnbondingDelegationResponse): _107.QueryUnbondingDelegationResponseSDKType;
                fromAmino(object: _107.QueryUnbondingDelegationResponseAmino): _107.QueryUnbondingDelegationResponse;
                toAmino(message: _107.QueryUnbondingDelegationResponse): _107.QueryUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _107.QueryUnbondingDelegationResponseAminoMsg): _107.QueryUnbondingDelegationResponse;
                toAminoMsg(message: _107.QueryUnbondingDelegationResponse): _107.QueryUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _107.QueryUnbondingDelegationResponseProtoMsg): _107.QueryUnbondingDelegationResponse;
                toProto(message: _107.QueryUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _107.QueryUnbondingDelegationResponse): _107.QueryUnbondingDelegationResponseProtoMsg;
            };
            QueryDelegatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _107.QueryDelegatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _107.QueryDelegatorDelegationsRequest;
                fromJSON(object: any): _107.QueryDelegatorDelegationsRequest;
                toJSON(message: _107.QueryDelegatorDelegationsRequest): unknown;
                fromPartial(object: Partial<_107.QueryDelegatorDelegationsRequest>): _107.QueryDelegatorDelegationsRequest;
                fromSDK(object: _107.QueryDelegatorDelegationsRequestSDKType): _107.QueryDelegatorDelegationsRequest;
                toSDK(message: _107.QueryDelegatorDelegationsRequest): _107.QueryDelegatorDelegationsRequestSDKType;
                fromAmino(object: _107.QueryDelegatorDelegationsRequestAmino): _107.QueryDelegatorDelegationsRequest;
                toAmino(message: _107.QueryDelegatorDelegationsRequest): _107.QueryDelegatorDelegationsRequestAmino;
                fromAminoMsg(object: _107.QueryDelegatorDelegationsRequestAminoMsg): _107.QueryDelegatorDelegationsRequest;
                toAminoMsg(message: _107.QueryDelegatorDelegationsRequest): _107.QueryDelegatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _107.QueryDelegatorDelegationsRequestProtoMsg): _107.QueryDelegatorDelegationsRequest;
                toProto(message: _107.QueryDelegatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _107.QueryDelegatorDelegationsRequest): _107.QueryDelegatorDelegationsRequestProtoMsg;
            };
            QueryDelegatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _107.QueryDelegatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _107.QueryDelegatorDelegationsResponse;
                fromJSON(object: any): _107.QueryDelegatorDelegationsResponse;
                toJSON(message: _107.QueryDelegatorDelegationsResponse): unknown;
                fromPartial(object: Partial<_107.QueryDelegatorDelegationsResponse>): _107.QueryDelegatorDelegationsResponse;
                fromSDK(object: _107.QueryDelegatorDelegationsResponseSDKType): _107.QueryDelegatorDelegationsResponse;
                toSDK(message: _107.QueryDelegatorDelegationsResponse): _107.QueryDelegatorDelegationsResponseSDKType;
                fromAmino(object: _107.QueryDelegatorDelegationsResponseAmino): _107.QueryDelegatorDelegationsResponse;
                toAmino(message: _107.QueryDelegatorDelegationsResponse): _107.QueryDelegatorDelegationsResponseAmino;
                fromAminoMsg(object: _107.QueryDelegatorDelegationsResponseAminoMsg): _107.QueryDelegatorDelegationsResponse;
                toAminoMsg(message: _107.QueryDelegatorDelegationsResponse): _107.QueryDelegatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _107.QueryDelegatorDelegationsResponseProtoMsg): _107.QueryDelegatorDelegationsResponse;
                toProto(message: _107.QueryDelegatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _107.QueryDelegatorDelegationsResponse): _107.QueryDelegatorDelegationsResponseProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _107.QueryDelegatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _107.QueryDelegatorUnbondingDelegationsRequest;
                fromJSON(object: any): _107.QueryDelegatorUnbondingDelegationsRequest;
                toJSON(message: _107.QueryDelegatorUnbondingDelegationsRequest): unknown;
                fromPartial(object: Partial<_107.QueryDelegatorUnbondingDelegationsRequest>): _107.QueryDelegatorUnbondingDelegationsRequest;
                fromSDK(object: _107.QueryDelegatorUnbondingDelegationsRequestSDKType): _107.QueryDelegatorUnbondingDelegationsRequest;
                toSDK(message: _107.QueryDelegatorUnbondingDelegationsRequest): _107.QueryDelegatorUnbondingDelegationsRequestSDKType;
                fromAmino(object: _107.QueryDelegatorUnbondingDelegationsRequestAmino): _107.QueryDelegatorUnbondingDelegationsRequest;
                toAmino(message: _107.QueryDelegatorUnbondingDelegationsRequest): _107.QueryDelegatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _107.QueryDelegatorUnbondingDelegationsRequestAminoMsg): _107.QueryDelegatorUnbondingDelegationsRequest;
                toAminoMsg(message: _107.QueryDelegatorUnbondingDelegationsRequest): _107.QueryDelegatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _107.QueryDelegatorUnbondingDelegationsRequestProtoMsg): _107.QueryDelegatorUnbondingDelegationsRequest;
                toProto(message: _107.QueryDelegatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _107.QueryDelegatorUnbondingDelegationsRequest): _107.QueryDelegatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _107.QueryDelegatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _107.QueryDelegatorUnbondingDelegationsResponse;
                fromJSON(object: any): _107.QueryDelegatorUnbondingDelegationsResponse;
                toJSON(message: _107.QueryDelegatorUnbondingDelegationsResponse): unknown;
                fromPartial(object: Partial<_107.QueryDelegatorUnbondingDelegationsResponse>): _107.QueryDelegatorUnbondingDelegationsResponse;
                fromSDK(object: _107.QueryDelegatorUnbondingDelegationsResponseSDKType): _107.QueryDelegatorUnbondingDelegationsResponse;
                toSDK(message: _107.QueryDelegatorUnbondingDelegationsResponse): _107.QueryDelegatorUnbondingDelegationsResponseSDKType;
                fromAmino(object: _107.QueryDelegatorUnbondingDelegationsResponseAmino): _107.QueryDelegatorUnbondingDelegationsResponse;
                toAmino(message: _107.QueryDelegatorUnbondingDelegationsResponse): _107.QueryDelegatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _107.QueryDelegatorUnbondingDelegationsResponseAminoMsg): _107.QueryDelegatorUnbondingDelegationsResponse;
                toAminoMsg(message: _107.QueryDelegatorUnbondingDelegationsResponse): _107.QueryDelegatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _107.QueryDelegatorUnbondingDelegationsResponseProtoMsg): _107.QueryDelegatorUnbondingDelegationsResponse;
                toProto(message: _107.QueryDelegatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _107.QueryDelegatorUnbondingDelegationsResponse): _107.QueryDelegatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryRedelegationsRequest: {
                typeUrl: string;
                encode(message: _107.QueryRedelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _107.QueryRedelegationsRequest;
                fromJSON(object: any): _107.QueryRedelegationsRequest;
                toJSON(message: _107.QueryRedelegationsRequest): unknown;
                fromPartial(object: Partial<_107.QueryRedelegationsRequest>): _107.QueryRedelegationsRequest;
                fromSDK(object: _107.QueryRedelegationsRequestSDKType): _107.QueryRedelegationsRequest;
                toSDK(message: _107.QueryRedelegationsRequest): _107.QueryRedelegationsRequestSDKType;
                fromAmino(object: _107.QueryRedelegationsRequestAmino): _107.QueryRedelegationsRequest;
                toAmino(message: _107.QueryRedelegationsRequest): _107.QueryRedelegationsRequestAmino;
                fromAminoMsg(object: _107.QueryRedelegationsRequestAminoMsg): _107.QueryRedelegationsRequest;
                toAminoMsg(message: _107.QueryRedelegationsRequest): _107.QueryRedelegationsRequestAminoMsg;
                fromProtoMsg(message: _107.QueryRedelegationsRequestProtoMsg): _107.QueryRedelegationsRequest;
                toProto(message: _107.QueryRedelegationsRequest): Uint8Array;
                toProtoMsg(message: _107.QueryRedelegationsRequest): _107.QueryRedelegationsRequestProtoMsg;
            };
            QueryRedelegationsResponse: {
                typeUrl: string;
                encode(message: _107.QueryRedelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _107.QueryRedelegationsResponse;
                fromJSON(object: any): _107.QueryRedelegationsResponse;
                toJSON(message: _107.QueryRedelegationsResponse): unknown;
                fromPartial(object: Partial<_107.QueryRedelegationsResponse>): _107.QueryRedelegationsResponse;
                fromSDK(object: _107.QueryRedelegationsResponseSDKType): _107.QueryRedelegationsResponse;
                toSDK(message: _107.QueryRedelegationsResponse): _107.QueryRedelegationsResponseSDKType;
                fromAmino(object: _107.QueryRedelegationsResponseAmino): _107.QueryRedelegationsResponse;
                toAmino(message: _107.QueryRedelegationsResponse): _107.QueryRedelegationsResponseAmino;
                fromAminoMsg(object: _107.QueryRedelegationsResponseAminoMsg): _107.QueryRedelegationsResponse;
                toAminoMsg(message: _107.QueryRedelegationsResponse): _107.QueryRedelegationsResponseAminoMsg;
                fromProtoMsg(message: _107.QueryRedelegationsResponseProtoMsg): _107.QueryRedelegationsResponse;
                toProto(message: _107.QueryRedelegationsResponse): Uint8Array;
                toProtoMsg(message: _107.QueryRedelegationsResponse): _107.QueryRedelegationsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _107.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _107.QueryDelegatorValidatorsRequest;
                fromJSON(object: any): _107.QueryDelegatorValidatorsRequest;
                toJSON(message: _107.QueryDelegatorValidatorsRequest): unknown;
                fromPartial(object: Partial<_107.QueryDelegatorValidatorsRequest>): _107.QueryDelegatorValidatorsRequest;
                fromSDK(object: _107.QueryDelegatorValidatorsRequestSDKType): _107.QueryDelegatorValidatorsRequest;
                toSDK(message: _107.QueryDelegatorValidatorsRequest): _107.QueryDelegatorValidatorsRequestSDKType;
                fromAmino(object: _107.QueryDelegatorValidatorsRequestAmino): _107.QueryDelegatorValidatorsRequest;
                toAmino(message: _107.QueryDelegatorValidatorsRequest): _107.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _107.QueryDelegatorValidatorsRequestAminoMsg): _107.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _107.QueryDelegatorValidatorsRequest): _107.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _107.QueryDelegatorValidatorsRequestProtoMsg): _107.QueryDelegatorValidatorsRequest;
                toProto(message: _107.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _107.QueryDelegatorValidatorsRequest): _107.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _107.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _107.QueryDelegatorValidatorsResponse;
                fromJSON(object: any): _107.QueryDelegatorValidatorsResponse;
                toJSON(message: _107.QueryDelegatorValidatorsResponse): unknown;
                fromPartial(object: Partial<_107.QueryDelegatorValidatorsResponse>): _107.QueryDelegatorValidatorsResponse;
                fromSDK(object: _107.QueryDelegatorValidatorsResponseSDKType): _107.QueryDelegatorValidatorsResponse;
                toSDK(message: _107.QueryDelegatorValidatorsResponse): _107.QueryDelegatorValidatorsResponseSDKType;
                fromAmino(object: _107.QueryDelegatorValidatorsResponseAmino): _107.QueryDelegatorValidatorsResponse;
                toAmino(message: _107.QueryDelegatorValidatorsResponse): _107.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _107.QueryDelegatorValidatorsResponseAminoMsg): _107.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _107.QueryDelegatorValidatorsResponse): _107.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _107.QueryDelegatorValidatorsResponseProtoMsg): _107.QueryDelegatorValidatorsResponse;
                toProto(message: _107.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _107.QueryDelegatorValidatorsResponse): _107.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorValidatorRequest: {
                typeUrl: string;
                encode(message: _107.QueryDelegatorValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _107.QueryDelegatorValidatorRequest;
                fromJSON(object: any): _107.QueryDelegatorValidatorRequest;
                toJSON(message: _107.QueryDelegatorValidatorRequest): unknown;
                fromPartial(object: Partial<_107.QueryDelegatorValidatorRequest>): _107.QueryDelegatorValidatorRequest;
                fromSDK(object: _107.QueryDelegatorValidatorRequestSDKType): _107.QueryDelegatorValidatorRequest;
                toSDK(message: _107.QueryDelegatorValidatorRequest): _107.QueryDelegatorValidatorRequestSDKType;
                fromAmino(object: _107.QueryDelegatorValidatorRequestAmino): _107.QueryDelegatorValidatorRequest;
                toAmino(message: _107.QueryDelegatorValidatorRequest): _107.QueryDelegatorValidatorRequestAmino;
                fromAminoMsg(object: _107.QueryDelegatorValidatorRequestAminoMsg): _107.QueryDelegatorValidatorRequest;
                toAminoMsg(message: _107.QueryDelegatorValidatorRequest): _107.QueryDelegatorValidatorRequestAminoMsg;
                fromProtoMsg(message: _107.QueryDelegatorValidatorRequestProtoMsg): _107.QueryDelegatorValidatorRequest;
                toProto(message: _107.QueryDelegatorValidatorRequest): Uint8Array;
                toProtoMsg(message: _107.QueryDelegatorValidatorRequest): _107.QueryDelegatorValidatorRequestProtoMsg;
            };
            QueryDelegatorValidatorResponse: {
                typeUrl: string;
                encode(message: _107.QueryDelegatorValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _107.QueryDelegatorValidatorResponse;
                fromJSON(object: any): _107.QueryDelegatorValidatorResponse;
                toJSON(message: _107.QueryDelegatorValidatorResponse): unknown;
                fromPartial(object: Partial<_107.QueryDelegatorValidatorResponse>): _107.QueryDelegatorValidatorResponse;
                fromSDK(object: _107.QueryDelegatorValidatorResponseSDKType): _107.QueryDelegatorValidatorResponse;
                toSDK(message: _107.QueryDelegatorValidatorResponse): _107.QueryDelegatorValidatorResponseSDKType;
                fromAmino(object: _107.QueryDelegatorValidatorResponseAmino): _107.QueryDelegatorValidatorResponse;
                toAmino(message: _107.QueryDelegatorValidatorResponse): _107.QueryDelegatorValidatorResponseAmino;
                fromAminoMsg(object: _107.QueryDelegatorValidatorResponseAminoMsg): _107.QueryDelegatorValidatorResponse;
                toAminoMsg(message: _107.QueryDelegatorValidatorResponse): _107.QueryDelegatorValidatorResponseAminoMsg;
                fromProtoMsg(message: _107.QueryDelegatorValidatorResponseProtoMsg): _107.QueryDelegatorValidatorResponse;
                toProto(message: _107.QueryDelegatorValidatorResponse): Uint8Array;
                toProtoMsg(message: _107.QueryDelegatorValidatorResponse): _107.QueryDelegatorValidatorResponseProtoMsg;
            };
            QueryHistoricalInfoRequest: {
                typeUrl: string;
                encode(message: _107.QueryHistoricalInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _107.QueryHistoricalInfoRequest;
                fromJSON(object: any): _107.QueryHistoricalInfoRequest;
                toJSON(message: _107.QueryHistoricalInfoRequest): unknown;
                fromPartial(object: Partial<_107.QueryHistoricalInfoRequest>): _107.QueryHistoricalInfoRequest;
                fromSDK(object: _107.QueryHistoricalInfoRequestSDKType): _107.QueryHistoricalInfoRequest;
                toSDK(message: _107.QueryHistoricalInfoRequest): _107.QueryHistoricalInfoRequestSDKType;
                fromAmino(object: _107.QueryHistoricalInfoRequestAmino): _107.QueryHistoricalInfoRequest;
                toAmino(message: _107.QueryHistoricalInfoRequest): _107.QueryHistoricalInfoRequestAmino;
                fromAminoMsg(object: _107.QueryHistoricalInfoRequestAminoMsg): _107.QueryHistoricalInfoRequest;
                toAminoMsg(message: _107.QueryHistoricalInfoRequest): _107.QueryHistoricalInfoRequestAminoMsg;
                fromProtoMsg(message: _107.QueryHistoricalInfoRequestProtoMsg): _107.QueryHistoricalInfoRequest;
                toProto(message: _107.QueryHistoricalInfoRequest): Uint8Array;
                toProtoMsg(message: _107.QueryHistoricalInfoRequest): _107.QueryHistoricalInfoRequestProtoMsg;
            };
            QueryHistoricalInfoResponse: {
                typeUrl: string;
                encode(message: _107.QueryHistoricalInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _107.QueryHistoricalInfoResponse;
                fromJSON(object: any): _107.QueryHistoricalInfoResponse;
                toJSON(message: _107.QueryHistoricalInfoResponse): unknown;
                fromPartial(object: Partial<_107.QueryHistoricalInfoResponse>): _107.QueryHistoricalInfoResponse;
                fromSDK(object: _107.QueryHistoricalInfoResponseSDKType): _107.QueryHistoricalInfoResponse;
                toSDK(message: _107.QueryHistoricalInfoResponse): _107.QueryHistoricalInfoResponseSDKType;
                fromAmino(object: _107.QueryHistoricalInfoResponseAmino): _107.QueryHistoricalInfoResponse;
                toAmino(message: _107.QueryHistoricalInfoResponse): _107.QueryHistoricalInfoResponseAmino;
                fromAminoMsg(object: _107.QueryHistoricalInfoResponseAminoMsg): _107.QueryHistoricalInfoResponse;
                toAminoMsg(message: _107.QueryHistoricalInfoResponse): _107.QueryHistoricalInfoResponseAminoMsg;
                fromProtoMsg(message: _107.QueryHistoricalInfoResponseProtoMsg): _107.QueryHistoricalInfoResponse;
                toProto(message: _107.QueryHistoricalInfoResponse): Uint8Array;
                toProtoMsg(message: _107.QueryHistoricalInfoResponse): _107.QueryHistoricalInfoResponseProtoMsg;
            };
            QueryPoolRequest: {
                typeUrl: string;
                encode(_: _107.QueryPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _107.QueryPoolRequest;
                fromJSON(_: any): _107.QueryPoolRequest;
                toJSON(_: _107.QueryPoolRequest): unknown;
                fromPartial(_: Partial<_107.QueryPoolRequest>): _107.QueryPoolRequest;
                fromSDK(_: _107.QueryPoolRequestSDKType): _107.QueryPoolRequest;
                toSDK(_: _107.QueryPoolRequest): _107.QueryPoolRequestSDKType;
                fromAmino(_: _107.QueryPoolRequestAmino): _107.QueryPoolRequest;
                toAmino(_: _107.QueryPoolRequest): _107.QueryPoolRequestAmino;
                fromAminoMsg(object: _107.QueryPoolRequestAminoMsg): _107.QueryPoolRequest;
                toAminoMsg(message: _107.QueryPoolRequest): _107.QueryPoolRequestAminoMsg;
                fromProtoMsg(message: _107.QueryPoolRequestProtoMsg): _107.QueryPoolRequest;
                toProto(message: _107.QueryPoolRequest): Uint8Array;
                toProtoMsg(message: _107.QueryPoolRequest): _107.QueryPoolRequestProtoMsg;
            };
            QueryPoolResponse: {
                typeUrl: string;
                encode(message: _107.QueryPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _107.QueryPoolResponse;
                fromJSON(object: any): _107.QueryPoolResponse;
                toJSON(message: _107.QueryPoolResponse): unknown;
                fromPartial(object: Partial<_107.QueryPoolResponse>): _107.QueryPoolResponse;
                fromSDK(object: _107.QueryPoolResponseSDKType): _107.QueryPoolResponse;
                toSDK(message: _107.QueryPoolResponse): _107.QueryPoolResponseSDKType;
                fromAmino(object: _107.QueryPoolResponseAmino): _107.QueryPoolResponse;
                toAmino(message: _107.QueryPoolResponse): _107.QueryPoolResponseAmino;
                fromAminoMsg(object: _107.QueryPoolResponseAminoMsg): _107.QueryPoolResponse;
                toAminoMsg(message: _107.QueryPoolResponse): _107.QueryPoolResponseAminoMsg;
                fromProtoMsg(message: _107.QueryPoolResponseProtoMsg): _107.QueryPoolResponse;
                toProto(message: _107.QueryPoolResponse): Uint8Array;
                toProtoMsg(message: _107.QueryPoolResponse): _107.QueryPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _107.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _107.QueryParamsRequest;
                fromJSON(_: any): _107.QueryParamsRequest;
                toJSON(_: _107.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_107.QueryParamsRequest>): _107.QueryParamsRequest;
                fromSDK(_: _107.QueryParamsRequestSDKType): _107.QueryParamsRequest;
                toSDK(_: _107.QueryParamsRequest): _107.QueryParamsRequestSDKType;
                fromAmino(_: _107.QueryParamsRequestAmino): _107.QueryParamsRequest;
                toAmino(_: _107.QueryParamsRequest): _107.QueryParamsRequestAmino;
                fromAminoMsg(object: _107.QueryParamsRequestAminoMsg): _107.QueryParamsRequest;
                toAminoMsg(message: _107.QueryParamsRequest): _107.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _107.QueryParamsRequestProtoMsg): _107.QueryParamsRequest;
                toProto(message: _107.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _107.QueryParamsRequest): _107.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _107.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _107.QueryParamsResponse;
                fromJSON(object: any): _107.QueryParamsResponse;
                toJSON(message: _107.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_107.QueryParamsResponse>): _107.QueryParamsResponse;
                fromSDK(object: _107.QueryParamsResponseSDKType): _107.QueryParamsResponse;
                toSDK(message: _107.QueryParamsResponse): _107.QueryParamsResponseSDKType;
                fromAmino(object: _107.QueryParamsResponseAmino): _107.QueryParamsResponse;
                toAmino(message: _107.QueryParamsResponse): _107.QueryParamsResponseAmino;
                fromAminoMsg(object: _107.QueryParamsResponseAminoMsg): _107.QueryParamsResponse;
                toAminoMsg(message: _107.QueryParamsResponse): _107.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _107.QueryParamsResponseProtoMsg): _107.QueryParamsResponse;
                toProto(message: _107.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _107.QueryParamsResponse): _107.QueryParamsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _106.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _106.GenesisState;
                fromJSON(object: any): _106.GenesisState;
                toJSON(message: _106.GenesisState): unknown;
                fromPartial(object: Partial<_106.GenesisState>): _106.GenesisState;
                fromSDK(object: _106.GenesisStateSDKType): _106.GenesisState;
                toSDK(message: _106.GenesisState): _106.GenesisStateSDKType;
                fromAmino(object: _106.GenesisStateAmino): _106.GenesisState;
                toAmino(message: _106.GenesisState): _106.GenesisStateAmino;
                fromAminoMsg(object: _106.GenesisStateAminoMsg): _106.GenesisState;
                toAminoMsg(message: _106.GenesisState): _106.GenesisStateAminoMsg;
                fromProtoMsg(message: _106.GenesisStateProtoMsg): _106.GenesisState;
                toProto(message: _106.GenesisState): Uint8Array;
                toProtoMsg(message: _106.GenesisState): _106.GenesisStateProtoMsg;
            };
            LastValidatorPower: {
                typeUrl: string;
                encode(message: _106.LastValidatorPower, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _106.LastValidatorPower;
                fromJSON(object: any): _106.LastValidatorPower;
                toJSON(message: _106.LastValidatorPower): unknown;
                fromPartial(object: Partial<_106.LastValidatorPower>): _106.LastValidatorPower;
                fromSDK(object: _106.LastValidatorPowerSDKType): _106.LastValidatorPower;
                toSDK(message: _106.LastValidatorPower): _106.LastValidatorPowerSDKType;
                fromAmino(object: _106.LastValidatorPowerAmino): _106.LastValidatorPower;
                toAmino(message: _106.LastValidatorPower): _106.LastValidatorPowerAmino;
                fromAminoMsg(object: _106.LastValidatorPowerAminoMsg): _106.LastValidatorPower;
                toAminoMsg(message: _106.LastValidatorPower): _106.LastValidatorPowerAminoMsg;
                fromProtoMsg(message: _106.LastValidatorPowerProtoMsg): _106.LastValidatorPower;
                toProto(message: _106.LastValidatorPower): Uint8Array;
                toProtoMsg(message: _106.LastValidatorPower): _106.LastValidatorPowerProtoMsg;
            };
            authorizationTypeFromJSON(object: any): _105.AuthorizationType;
            authorizationTypeToJSON(object: _105.AuthorizationType): string;
            AuthorizationType: typeof _105.AuthorizationType;
            AuthorizationTypeSDKType: typeof _105.AuthorizationType;
            AuthorizationTypeAmino: typeof _105.AuthorizationType;
            StakeAuthorization: {
                typeUrl: string;
                encode(message: _105.StakeAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _105.StakeAuthorization;
                fromJSON(object: any): _105.StakeAuthorization;
                toJSON(message: _105.StakeAuthorization): unknown;
                fromPartial(object: Partial<_105.StakeAuthorization>): _105.StakeAuthorization;
                fromSDK(object: _105.StakeAuthorizationSDKType): _105.StakeAuthorization;
                toSDK(message: _105.StakeAuthorization): _105.StakeAuthorizationSDKType;
                fromAmino(object: _105.StakeAuthorizationAmino): _105.StakeAuthorization;
                toAmino(message: _105.StakeAuthorization): _105.StakeAuthorizationAmino;
                fromAminoMsg(object: _105.StakeAuthorizationAminoMsg): _105.StakeAuthorization;
                toAminoMsg(message: _105.StakeAuthorization): _105.StakeAuthorizationAminoMsg;
                fromProtoMsg(message: _105.StakeAuthorizationProtoMsg): _105.StakeAuthorization;
                toProto(message: _105.StakeAuthorization): Uint8Array;
                toProtoMsg(message: _105.StakeAuthorization): _105.StakeAuthorizationProtoMsg;
            };
            StakeAuthorization_Validators: {
                typeUrl: string;
                encode(message: _105.StakeAuthorization_Validators, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _105.StakeAuthorization_Validators;
                fromJSON(object: any): _105.StakeAuthorization_Validators;
                toJSON(message: _105.StakeAuthorization_Validators): unknown;
                fromPartial(object: Partial<_105.StakeAuthorization_Validators>): _105.StakeAuthorization_Validators;
                fromSDK(object: _105.StakeAuthorization_ValidatorsSDKType): _105.StakeAuthorization_Validators;
                toSDK(message: _105.StakeAuthorization_Validators): _105.StakeAuthorization_ValidatorsSDKType;
                fromAmino(object: _105.StakeAuthorization_ValidatorsAmino): _105.StakeAuthorization_Validators;
                toAmino(message: _105.StakeAuthorization_Validators): _105.StakeAuthorization_ValidatorsAmino;
                fromAminoMsg(object: _105.StakeAuthorization_ValidatorsAminoMsg): _105.StakeAuthorization_Validators;
                toAminoMsg(message: _105.StakeAuthorization_Validators): _105.StakeAuthorization_ValidatorsAminoMsg;
                fromProtoMsg(message: _105.StakeAuthorization_ValidatorsProtoMsg): _105.StakeAuthorization_Validators;
                toProto(message: _105.StakeAuthorization_Validators): Uint8Array;
                toProtoMsg(message: _105.StakeAuthorization_Validators): _105.StakeAuthorization_ValidatorsProtoMsg;
            };
        };
    }
    namespace store {
        namespace internal {
            namespace kv {
                const v1beta1: {
                    protobufPackage: "cosmos.store.internal.kv.v1beta1";
                    Pairs: {
                        typeUrl: string;
                        encode(message: _110.Pairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: import("..").BinaryReader | Uint8Array, length?: number): _110.Pairs;
                        fromJSON(object: any): _110.Pairs;
                        toJSON(message: _110.Pairs): unknown;
                        fromPartial(object: Partial<_110.Pairs>): _110.Pairs;
                        fromSDK(object: _110.PairsSDKType): _110.Pairs;
                        toSDK(message: _110.Pairs): _110.PairsSDKType;
                        fromAmino(object: _110.PairsAmino): _110.Pairs;
                        toAmino(message: _110.Pairs): _110.PairsAmino;
                        fromAminoMsg(object: _110.PairsAminoMsg): _110.Pairs;
                        toAminoMsg(message: _110.Pairs): _110.PairsAminoMsg;
                        fromProtoMsg(message: _110.PairsProtoMsg): _110.Pairs;
                        toProto(message: _110.Pairs): Uint8Array;
                        toProtoMsg(message: _110.Pairs): _110.PairsProtoMsg;
                    };
                    Pair: {
                        typeUrl: string;
                        encode(message: _110.Pair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: import("..").BinaryReader | Uint8Array, length?: number): _110.Pair;
                        fromJSON(object: any): _110.Pair;
                        toJSON(message: _110.Pair): unknown;
                        fromPartial(object: Partial<_110.Pair>): _110.Pair;
                        fromSDK(object: _110.PairSDKType): _110.Pair;
                        toSDK(message: _110.Pair): _110.PairSDKType;
                        fromAmino(object: _110.PairAmino): _110.Pair;
                        toAmino(message: _110.Pair): _110.PairAmino;
                        fromAminoMsg(object: _110.PairAminoMsg): _110.Pair;
                        toAminoMsg(message: _110.Pair): _110.PairAminoMsg;
                        fromProtoMsg(message: _110.PairProtoMsg): _110.Pair;
                        toProto(message: _110.Pair): Uint8Array;
                        toProtoMsg(message: _110.Pair): _110.PairProtoMsg;
                    };
                };
            }
        }
        namespace snapshots {
            const v1: {
                protobufPackage: "cosmos.store.snapshots.v1";
                Snapshot: {
                    typeUrl: string;
                    encode(message: _111.Snapshot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _111.Snapshot;
                    fromJSON(object: any): _111.Snapshot;
                    toJSON(message: _111.Snapshot): unknown;
                    fromPartial(object: Partial<_111.Snapshot>): _111.Snapshot;
                    fromSDK(object: _111.SnapshotSDKType): _111.Snapshot;
                    toSDK(message: _111.Snapshot): _111.SnapshotSDKType;
                    fromAmino(object: _111.SnapshotAmino): _111.Snapshot;
                    toAmino(message: _111.Snapshot): _111.SnapshotAmino;
                    fromAminoMsg(object: _111.SnapshotAminoMsg): _111.Snapshot;
                    toAminoMsg(message: _111.Snapshot): _111.SnapshotAminoMsg;
                    fromProtoMsg(message: _111.SnapshotProtoMsg): _111.Snapshot;
                    toProto(message: _111.Snapshot): Uint8Array;
                    toProtoMsg(message: _111.Snapshot): _111.SnapshotProtoMsg;
                };
                Metadata: {
                    typeUrl: string;
                    encode(message: _111.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _111.Metadata;
                    fromJSON(object: any): _111.Metadata;
                    toJSON(message: _111.Metadata): unknown;
                    fromPartial(object: Partial<_111.Metadata>): _111.Metadata;
                    fromSDK(object: _111.MetadataSDKType): _111.Metadata;
                    toSDK(message: _111.Metadata): _111.MetadataSDKType;
                    fromAmino(object: _111.MetadataAmino): _111.Metadata;
                    toAmino(message: _111.Metadata): _111.MetadataAmino;
                    fromAminoMsg(object: _111.MetadataAminoMsg): _111.Metadata;
                    toAminoMsg(message: _111.Metadata): _111.MetadataAminoMsg;
                    fromProtoMsg(message: _111.MetadataProtoMsg): _111.Metadata;
                    toProto(message: _111.Metadata): Uint8Array;
                    toProtoMsg(message: _111.Metadata): _111.MetadataProtoMsg;
                };
                SnapshotItem: {
                    typeUrl: string;
                    encode(message: _111.SnapshotItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _111.SnapshotItem;
                    fromJSON(object: any): _111.SnapshotItem;
                    toJSON(message: _111.SnapshotItem): unknown;
                    fromPartial(object: Partial<_111.SnapshotItem>): _111.SnapshotItem;
                    fromSDK(object: _111.SnapshotItemSDKType): _111.SnapshotItem;
                    toSDK(message: _111.SnapshotItem): _111.SnapshotItemSDKType;
                    fromAmino(object: _111.SnapshotItemAmino): _111.SnapshotItem;
                    toAmino(message: _111.SnapshotItem): _111.SnapshotItemAmino;
                    fromAminoMsg(object: _111.SnapshotItemAminoMsg): _111.SnapshotItem;
                    toAminoMsg(message: _111.SnapshotItem): _111.SnapshotItemAminoMsg;
                    fromProtoMsg(message: _111.SnapshotItemProtoMsg): _111.SnapshotItem;
                    toProto(message: _111.SnapshotItem): Uint8Array;
                    toProtoMsg(message: _111.SnapshotItem): _111.SnapshotItemProtoMsg;
                };
                SnapshotStoreItem: {
                    typeUrl: string;
                    encode(message: _111.SnapshotStoreItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _111.SnapshotStoreItem;
                    fromJSON(object: any): _111.SnapshotStoreItem;
                    toJSON(message: _111.SnapshotStoreItem): unknown;
                    fromPartial(object: Partial<_111.SnapshotStoreItem>): _111.SnapshotStoreItem;
                    fromSDK(object: _111.SnapshotStoreItemSDKType): _111.SnapshotStoreItem;
                    toSDK(message: _111.SnapshotStoreItem): _111.SnapshotStoreItemSDKType;
                    fromAmino(object: _111.SnapshotStoreItemAmino): _111.SnapshotStoreItem;
                    toAmino(message: _111.SnapshotStoreItem): _111.SnapshotStoreItemAmino;
                    fromAminoMsg(object: _111.SnapshotStoreItemAminoMsg): _111.SnapshotStoreItem;
                    toAminoMsg(message: _111.SnapshotStoreItem): _111.SnapshotStoreItemAminoMsg;
                    fromProtoMsg(message: _111.SnapshotStoreItemProtoMsg): _111.SnapshotStoreItem;
                    toProto(message: _111.SnapshotStoreItem): Uint8Array;
                    toProtoMsg(message: _111.SnapshotStoreItem): _111.SnapshotStoreItemProtoMsg;
                };
                SnapshotIAVLItem: {
                    typeUrl: string;
                    encode(message: _111.SnapshotIAVLItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _111.SnapshotIAVLItem;
                    fromJSON(object: any): _111.SnapshotIAVLItem;
                    toJSON(message: _111.SnapshotIAVLItem): unknown;
                    fromPartial(object: Partial<_111.SnapshotIAVLItem>): _111.SnapshotIAVLItem;
                    fromSDK(object: _111.SnapshotIAVLItemSDKType): _111.SnapshotIAVLItem;
                    toSDK(message: _111.SnapshotIAVLItem): _111.SnapshotIAVLItemSDKType;
                    fromAmino(object: _111.SnapshotIAVLItemAmino): _111.SnapshotIAVLItem;
                    toAmino(message: _111.SnapshotIAVLItem): _111.SnapshotIAVLItemAmino;
                    fromAminoMsg(object: _111.SnapshotIAVLItemAminoMsg): _111.SnapshotIAVLItem;
                    toAminoMsg(message: _111.SnapshotIAVLItem): _111.SnapshotIAVLItemAminoMsg;
                    fromProtoMsg(message: _111.SnapshotIAVLItemProtoMsg): _111.SnapshotIAVLItem;
                    toProto(message: _111.SnapshotIAVLItem): Uint8Array;
                    toProtoMsg(message: _111.SnapshotIAVLItem): _111.SnapshotIAVLItemProtoMsg;
                };
                SnapshotExtensionMeta: {
                    typeUrl: string;
                    encode(message: _111.SnapshotExtensionMeta, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _111.SnapshotExtensionMeta;
                    fromJSON(object: any): _111.SnapshotExtensionMeta;
                    toJSON(message: _111.SnapshotExtensionMeta): unknown;
                    fromPartial(object: Partial<_111.SnapshotExtensionMeta>): _111.SnapshotExtensionMeta;
                    fromSDK(object: _111.SnapshotExtensionMetaSDKType): _111.SnapshotExtensionMeta;
                    toSDK(message: _111.SnapshotExtensionMeta): _111.SnapshotExtensionMetaSDKType;
                    fromAmino(object: _111.SnapshotExtensionMetaAmino): _111.SnapshotExtensionMeta;
                    toAmino(message: _111.SnapshotExtensionMeta): _111.SnapshotExtensionMetaAmino;
                    fromAminoMsg(object: _111.SnapshotExtensionMetaAminoMsg): _111.SnapshotExtensionMeta;
                    toAminoMsg(message: _111.SnapshotExtensionMeta): _111.SnapshotExtensionMetaAminoMsg;
                    fromProtoMsg(message: _111.SnapshotExtensionMetaProtoMsg): _111.SnapshotExtensionMeta;
                    toProto(message: _111.SnapshotExtensionMeta): Uint8Array;
                    toProtoMsg(message: _111.SnapshotExtensionMeta): _111.SnapshotExtensionMetaProtoMsg;
                };
                SnapshotExtensionPayload: {
                    typeUrl: string;
                    encode(message: _111.SnapshotExtensionPayload, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _111.SnapshotExtensionPayload;
                    fromJSON(object: any): _111.SnapshotExtensionPayload;
                    toJSON(message: _111.SnapshotExtensionPayload): unknown;
                    fromPartial(object: Partial<_111.SnapshotExtensionPayload>): _111.SnapshotExtensionPayload;
                    fromSDK(object: _111.SnapshotExtensionPayloadSDKType): _111.SnapshotExtensionPayload;
                    toSDK(message: _111.SnapshotExtensionPayload): _111.SnapshotExtensionPayloadSDKType;
                    fromAmino(object: _111.SnapshotExtensionPayloadAmino): _111.SnapshotExtensionPayload;
                    toAmino(message: _111.SnapshotExtensionPayload): _111.SnapshotExtensionPayloadAmino;
                    fromAminoMsg(object: _111.SnapshotExtensionPayloadAminoMsg): _111.SnapshotExtensionPayload;
                    toAminoMsg(message: _111.SnapshotExtensionPayload): _111.SnapshotExtensionPayloadAminoMsg;
                    fromProtoMsg(message: _111.SnapshotExtensionPayloadProtoMsg): _111.SnapshotExtensionPayload;
                    toProto(message: _111.SnapshotExtensionPayload): Uint8Array;
                    toProtoMsg(message: _111.SnapshotExtensionPayload): _111.SnapshotExtensionPayloadProtoMsg;
                };
            };
        }
        namespace streaming {
            const abci: {
                protobufPackage: "cosmos.store.streaming.abci";
                ListenFinalizeBlockRequest: {
                    typeUrl: string;
                    encode(message: _112.ListenFinalizeBlockRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.ListenFinalizeBlockRequest;
                    fromJSON(object: any): _112.ListenFinalizeBlockRequest;
                    toJSON(message: _112.ListenFinalizeBlockRequest): unknown;
                    fromPartial(object: Partial<_112.ListenFinalizeBlockRequest>): _112.ListenFinalizeBlockRequest;
                    fromSDK(object: _112.ListenFinalizeBlockRequestSDKType): _112.ListenFinalizeBlockRequest;
                    toSDK(message: _112.ListenFinalizeBlockRequest): _112.ListenFinalizeBlockRequestSDKType;
                    fromAmino(object: _112.ListenFinalizeBlockRequestAmino): _112.ListenFinalizeBlockRequest;
                    toAmino(message: _112.ListenFinalizeBlockRequest): _112.ListenFinalizeBlockRequestAmino;
                    fromAminoMsg(object: _112.ListenFinalizeBlockRequestAminoMsg): _112.ListenFinalizeBlockRequest;
                    toAminoMsg(message: _112.ListenFinalizeBlockRequest): _112.ListenFinalizeBlockRequestAminoMsg;
                    fromProtoMsg(message: _112.ListenFinalizeBlockRequestProtoMsg): _112.ListenFinalizeBlockRequest;
                    toProto(message: _112.ListenFinalizeBlockRequest): Uint8Array;
                    toProtoMsg(message: _112.ListenFinalizeBlockRequest): _112.ListenFinalizeBlockRequestProtoMsg;
                };
                ListenFinalizeBlockResponse: {
                    typeUrl: string;
                    encode(_: _112.ListenFinalizeBlockResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.ListenFinalizeBlockResponse;
                    fromJSON(_: any): _112.ListenFinalizeBlockResponse;
                    toJSON(_: _112.ListenFinalizeBlockResponse): unknown;
                    fromPartial(_: Partial<_112.ListenFinalizeBlockResponse>): _112.ListenFinalizeBlockResponse;
                    fromSDK(_: _112.ListenFinalizeBlockResponseSDKType): _112.ListenFinalizeBlockResponse;
                    toSDK(_: _112.ListenFinalizeBlockResponse): _112.ListenFinalizeBlockResponseSDKType;
                    fromAmino(_: _112.ListenFinalizeBlockResponseAmino): _112.ListenFinalizeBlockResponse;
                    toAmino(_: _112.ListenFinalizeBlockResponse): _112.ListenFinalizeBlockResponseAmino;
                    fromAminoMsg(object: _112.ListenFinalizeBlockResponseAminoMsg): _112.ListenFinalizeBlockResponse;
                    toAminoMsg(message: _112.ListenFinalizeBlockResponse): _112.ListenFinalizeBlockResponseAminoMsg;
                    fromProtoMsg(message: _112.ListenFinalizeBlockResponseProtoMsg): _112.ListenFinalizeBlockResponse;
                    toProto(message: _112.ListenFinalizeBlockResponse): Uint8Array;
                    toProtoMsg(message: _112.ListenFinalizeBlockResponse): _112.ListenFinalizeBlockResponseProtoMsg;
                };
                ListenCommitRequest: {
                    typeUrl: string;
                    encode(message: _112.ListenCommitRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.ListenCommitRequest;
                    fromJSON(object: any): _112.ListenCommitRequest;
                    toJSON(message: _112.ListenCommitRequest): unknown;
                    fromPartial(object: Partial<_112.ListenCommitRequest>): _112.ListenCommitRequest;
                    fromSDK(object: _112.ListenCommitRequestSDKType): _112.ListenCommitRequest;
                    toSDK(message: _112.ListenCommitRequest): _112.ListenCommitRequestSDKType;
                    fromAmino(object: _112.ListenCommitRequestAmino): _112.ListenCommitRequest;
                    toAmino(message: _112.ListenCommitRequest): _112.ListenCommitRequestAmino;
                    fromAminoMsg(object: _112.ListenCommitRequestAminoMsg): _112.ListenCommitRequest;
                    toAminoMsg(message: _112.ListenCommitRequest): _112.ListenCommitRequestAminoMsg;
                    fromProtoMsg(message: _112.ListenCommitRequestProtoMsg): _112.ListenCommitRequest;
                    toProto(message: _112.ListenCommitRequest): Uint8Array;
                    toProtoMsg(message: _112.ListenCommitRequest): _112.ListenCommitRequestProtoMsg;
                };
                ListenCommitResponse: {
                    typeUrl: string;
                    encode(_: _112.ListenCommitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.ListenCommitResponse;
                    fromJSON(_: any): _112.ListenCommitResponse;
                    toJSON(_: _112.ListenCommitResponse): unknown;
                    fromPartial(_: Partial<_112.ListenCommitResponse>): _112.ListenCommitResponse;
                    fromSDK(_: _112.ListenCommitResponseSDKType): _112.ListenCommitResponse;
                    toSDK(_: _112.ListenCommitResponse): _112.ListenCommitResponseSDKType;
                    fromAmino(_: _112.ListenCommitResponseAmino): _112.ListenCommitResponse;
                    toAmino(_: _112.ListenCommitResponse): _112.ListenCommitResponseAmino;
                    fromAminoMsg(object: _112.ListenCommitResponseAminoMsg): _112.ListenCommitResponse;
                    toAminoMsg(message: _112.ListenCommitResponse): _112.ListenCommitResponseAminoMsg;
                    fromProtoMsg(message: _112.ListenCommitResponseProtoMsg): _112.ListenCommitResponse;
                    toProto(message: _112.ListenCommitResponse): Uint8Array;
                    toProtoMsg(message: _112.ListenCommitResponse): _112.ListenCommitResponseProtoMsg;
                };
            };
        }
        const v1beta1: {
            protobufPackage: "cosmos.store.v1beta1";
            StoreKVPair: {
                typeUrl: string;
                encode(message: _114.StoreKVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _114.StoreKVPair;
                fromJSON(object: any): _114.StoreKVPair;
                toJSON(message: _114.StoreKVPair): unknown;
                fromPartial(object: Partial<_114.StoreKVPair>): _114.StoreKVPair;
                fromSDK(object: _114.StoreKVPairSDKType): _114.StoreKVPair;
                toSDK(message: _114.StoreKVPair): _114.StoreKVPairSDKType;
                fromAmino(object: _114.StoreKVPairAmino): _114.StoreKVPair;
                toAmino(message: _114.StoreKVPair): _114.StoreKVPairAmino;
                fromAminoMsg(object: _114.StoreKVPairAminoMsg): _114.StoreKVPair;
                toAminoMsg(message: _114.StoreKVPair): _114.StoreKVPairAminoMsg;
                fromProtoMsg(message: _114.StoreKVPairProtoMsg): _114.StoreKVPair;
                toProto(message: _114.StoreKVPair): Uint8Array;
                toProtoMsg(message: _114.StoreKVPair): _114.StoreKVPairProtoMsg;
            };
            BlockMetadata: {
                typeUrl: string;
                encode(message: _114.BlockMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _114.BlockMetadata;
                fromJSON(object: any): _114.BlockMetadata;
                toJSON(message: _114.BlockMetadata): unknown;
                fromPartial(object: Partial<_114.BlockMetadata>): _114.BlockMetadata;
                fromSDK(object: _114.BlockMetadataSDKType): _114.BlockMetadata;
                toSDK(message: _114.BlockMetadata): _114.BlockMetadataSDKType;
                fromAmino(object: _114.BlockMetadataAmino): _114.BlockMetadata;
                toAmino(message: _114.BlockMetadata): _114.BlockMetadataAmino;
                fromAminoMsg(object: _114.BlockMetadataAminoMsg): _114.BlockMetadata;
                toAminoMsg(message: _114.BlockMetadata): _114.BlockMetadataAminoMsg;
                fromProtoMsg(message: _114.BlockMetadataProtoMsg): _114.BlockMetadata;
                toProto(message: _114.BlockMetadata): Uint8Array;
                toProtoMsg(message: _114.BlockMetadata): _114.BlockMetadataProtoMsg;
            };
            CommitInfo: {
                typeUrl: string;
                encode(message: _113.CommitInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _113.CommitInfo;
                fromJSON(object: any): _113.CommitInfo;
                toJSON(message: _113.CommitInfo): unknown;
                fromPartial(object: Partial<_113.CommitInfo>): _113.CommitInfo;
                fromSDK(object: _113.CommitInfoSDKType): _113.CommitInfo;
                toSDK(message: _113.CommitInfo): _113.CommitInfoSDKType;
                fromAmino(object: _113.CommitInfoAmino): _113.CommitInfo;
                toAmino(message: _113.CommitInfo): _113.CommitInfoAmino;
                fromAminoMsg(object: _113.CommitInfoAminoMsg): _113.CommitInfo;
                toAminoMsg(message: _113.CommitInfo): _113.CommitInfoAminoMsg;
                fromProtoMsg(message: _113.CommitInfoProtoMsg): _113.CommitInfo;
                toProto(message: _113.CommitInfo): Uint8Array;
                toProtoMsg(message: _113.CommitInfo): _113.CommitInfoProtoMsg;
            };
            StoreInfo: {
                typeUrl: string;
                encode(message: _113.StoreInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _113.StoreInfo;
                fromJSON(object: any): _113.StoreInfo;
                toJSON(message: _113.StoreInfo): unknown;
                fromPartial(object: Partial<_113.StoreInfo>): _113.StoreInfo;
                fromSDK(object: _113.StoreInfoSDKType): _113.StoreInfo;
                toSDK(message: _113.StoreInfo): _113.StoreInfoSDKType;
                fromAmino(object: _113.StoreInfoAmino): _113.StoreInfo;
                toAmino(message: _113.StoreInfo): _113.StoreInfoAmino;
                fromAminoMsg(object: _113.StoreInfoAminoMsg): _113.StoreInfo;
                toAminoMsg(message: _113.StoreInfo): _113.StoreInfoAminoMsg;
                fromProtoMsg(message: _113.StoreInfoProtoMsg): _113.StoreInfo;
                toProto(message: _113.StoreInfo): Uint8Array;
                toProtoMsg(message: _113.StoreInfo): _113.StoreInfoProtoMsg;
            };
            CommitID: {
                typeUrl: string;
                encode(message: _113.CommitID, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _113.CommitID;
                fromJSON(object: any): _113.CommitID;
                toJSON(message: _113.CommitID): unknown;
                fromPartial(object: Partial<_113.CommitID>): _113.CommitID;
                fromSDK(object: _113.CommitIDSDKType): _113.CommitID;
                toSDK(message: _113.CommitID): _113.CommitIDSDKType;
                fromAmino(object: _113.CommitIDAmino): _113.CommitID;
                toAmino(message: _113.CommitID): _113.CommitIDAmino;
                fromAminoMsg(object: _113.CommitIDAminoMsg): _113.CommitID;
                toAminoMsg(message: _113.CommitID): _113.CommitIDAminoMsg;
                fromProtoMsg(message: _113.CommitIDProtoMsg): _113.CommitID;
                toProto(message: _113.CommitID): Uint8Array;
                toProtoMsg(message: _113.CommitID): _113.CommitIDProtoMsg;
            };
        };
    }
    namespace tx {
        namespace config {
            const v1: {
                protobufPackage: "cosmos.tx.config.v1";
                Config: {
                    typeUrl: string;
                    encode(message: _115.Config, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _115.Config;
                    fromJSON(object: any): _115.Config;
                    toJSON(message: _115.Config): unknown;
                    fromPartial(object: Partial<_115.Config>): _115.Config;
                    fromSDK(object: _115.ConfigSDKType): _115.Config;
                    toSDK(message: _115.Config): _115.ConfigSDKType;
                    fromAmino(object: _115.ConfigAmino): _115.Config;
                    toAmino(message: _115.Config): _115.ConfigAmino;
                    fromAminoMsg(object: _115.ConfigAminoMsg): _115.Config;
                    toAminoMsg(message: _115.Config): _115.ConfigAminoMsg;
                    fromProtoMsg(message: _115.ConfigProtoMsg): _115.Config;
                    toProto(message: _115.Config): Uint8Array;
                    toProtoMsg(message: _115.Config): _115.ConfigProtoMsg;
                };
            };
        }
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _116.SignMode;
                signModeToJSON(object: _116.SignMode): string;
                protobufPackage: "cosmos.tx.signing.v1beta1";
                SignMode: typeof _116.SignMode;
                SignModeSDKType: typeof _116.SignMode;
                SignModeAmino: typeof _116.SignMode;
                SignatureDescriptors: {
                    typeUrl: string;
                    encode(message: _116.SignatureDescriptors, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _116.SignatureDescriptors;
                    fromJSON(object: any): _116.SignatureDescriptors;
                    toJSON(message: _116.SignatureDescriptors): unknown;
                    fromPartial(object: Partial<_116.SignatureDescriptors>): _116.SignatureDescriptors;
                    fromSDK(object: _116.SignatureDescriptorsSDKType): _116.SignatureDescriptors;
                    toSDK(message: _116.SignatureDescriptors): _116.SignatureDescriptorsSDKType;
                    fromAmino(object: _116.SignatureDescriptorsAmino): _116.SignatureDescriptors;
                    toAmino(message: _116.SignatureDescriptors): _116.SignatureDescriptorsAmino;
                    fromAminoMsg(object: _116.SignatureDescriptorsAminoMsg): _116.SignatureDescriptors;
                    toAminoMsg(message: _116.SignatureDescriptors): _116.SignatureDescriptorsAminoMsg;
                    fromProtoMsg(message: _116.SignatureDescriptorsProtoMsg): _116.SignatureDescriptors;
                    toProto(message: _116.SignatureDescriptors): Uint8Array;
                    toProtoMsg(message: _116.SignatureDescriptors): _116.SignatureDescriptorsProtoMsg;
                };
                SignatureDescriptor: {
                    typeUrl: string;
                    encode(message: _116.SignatureDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _116.SignatureDescriptor;
                    fromJSON(object: any): _116.SignatureDescriptor;
                    toJSON(message: _116.SignatureDescriptor): unknown;
                    fromPartial(object: Partial<_116.SignatureDescriptor>): _116.SignatureDescriptor;
                    fromSDK(object: _116.SignatureDescriptorSDKType): _116.SignatureDescriptor;
                    toSDK(message: _116.SignatureDescriptor): _116.SignatureDescriptorSDKType;
                    fromAmino(object: _116.SignatureDescriptorAmino): _116.SignatureDescriptor;
                    toAmino(message: _116.SignatureDescriptor): _116.SignatureDescriptorAmino;
                    fromAminoMsg(object: _116.SignatureDescriptorAminoMsg): _116.SignatureDescriptor;
                    toAminoMsg(message: _116.SignatureDescriptor): _116.SignatureDescriptorAminoMsg;
                    fromProtoMsg(message: _116.SignatureDescriptorProtoMsg): _116.SignatureDescriptor;
                    toProto(message: _116.SignatureDescriptor): Uint8Array;
                    toProtoMsg(message: _116.SignatureDescriptor): _116.SignatureDescriptorProtoMsg;
                };
                SignatureDescriptor_Data: {
                    typeUrl: string;
                    encode(message: _116.SignatureDescriptor_Data, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _116.SignatureDescriptor_Data;
                    fromJSON(object: any): _116.SignatureDescriptor_Data;
                    toJSON(message: _116.SignatureDescriptor_Data): unknown;
                    fromPartial(object: Partial<_116.SignatureDescriptor_Data>): _116.SignatureDescriptor_Data;
                    fromSDK(object: _116.SignatureDescriptor_DataSDKType): _116.SignatureDescriptor_Data;
                    toSDK(message: _116.SignatureDescriptor_Data): _116.SignatureDescriptor_DataSDKType;
                    fromAmino(object: _116.SignatureDescriptor_DataAmino): _116.SignatureDescriptor_Data;
                    toAmino(message: _116.SignatureDescriptor_Data): _116.SignatureDescriptor_DataAmino;
                    fromAminoMsg(object: _116.SignatureDescriptor_DataAminoMsg): _116.SignatureDescriptor_Data;
                    toAminoMsg(message: _116.SignatureDescriptor_Data): _116.SignatureDescriptor_DataAminoMsg;
                    fromProtoMsg(message: _116.SignatureDescriptor_DataProtoMsg): _116.SignatureDescriptor_Data;
                    toProto(message: _116.SignatureDescriptor_Data): Uint8Array;
                    toProtoMsg(message: _116.SignatureDescriptor_Data): _116.SignatureDescriptor_DataProtoMsg;
                };
                SignatureDescriptor_Data_Single: {
                    typeUrl: string;
                    encode(message: _116.SignatureDescriptor_Data_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _116.SignatureDescriptor_Data_Single;
                    fromJSON(object: any): _116.SignatureDescriptor_Data_Single;
                    toJSON(message: _116.SignatureDescriptor_Data_Single): unknown;
                    fromPartial(object: Partial<_116.SignatureDescriptor_Data_Single>): _116.SignatureDescriptor_Data_Single;
                    fromSDK(object: _116.SignatureDescriptor_Data_SingleSDKType): _116.SignatureDescriptor_Data_Single;
                    toSDK(message: _116.SignatureDescriptor_Data_Single): _116.SignatureDescriptor_Data_SingleSDKType;
                    fromAmino(object: _116.SignatureDescriptor_Data_SingleAmino): _116.SignatureDescriptor_Data_Single;
                    toAmino(message: _116.SignatureDescriptor_Data_Single): _116.SignatureDescriptor_Data_SingleAmino;
                    fromAminoMsg(object: _116.SignatureDescriptor_Data_SingleAminoMsg): _116.SignatureDescriptor_Data_Single;
                    toAminoMsg(message: _116.SignatureDescriptor_Data_Single): _116.SignatureDescriptor_Data_SingleAminoMsg;
                    fromProtoMsg(message: _116.SignatureDescriptor_Data_SingleProtoMsg): _116.SignatureDescriptor_Data_Single;
                    toProto(message: _116.SignatureDescriptor_Data_Single): Uint8Array;
                    toProtoMsg(message: _116.SignatureDescriptor_Data_Single): _116.SignatureDescriptor_Data_SingleProtoMsg;
                };
                SignatureDescriptor_Data_Multi: {
                    typeUrl: string;
                    encode(message: _116.SignatureDescriptor_Data_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _116.SignatureDescriptor_Data_Multi;
                    fromJSON(object: any): _116.SignatureDescriptor_Data_Multi;
                    toJSON(message: _116.SignatureDescriptor_Data_Multi): unknown;
                    fromPartial(object: Partial<_116.SignatureDescriptor_Data_Multi>): _116.SignatureDescriptor_Data_Multi;
                    fromSDK(object: _116.SignatureDescriptor_Data_MultiSDKType): _116.SignatureDescriptor_Data_Multi;
                    toSDK(message: _116.SignatureDescriptor_Data_Multi): _116.SignatureDescriptor_Data_MultiSDKType;
                    fromAmino(object: _116.SignatureDescriptor_Data_MultiAmino): _116.SignatureDescriptor_Data_Multi;
                    toAmino(message: _116.SignatureDescriptor_Data_Multi): _116.SignatureDescriptor_Data_MultiAmino;
                    fromAminoMsg(object: _116.SignatureDescriptor_Data_MultiAminoMsg): _116.SignatureDescriptor_Data_Multi;
                    toAminoMsg(message: _116.SignatureDescriptor_Data_Multi): _116.SignatureDescriptor_Data_MultiAminoMsg;
                    fromProtoMsg(message: _116.SignatureDescriptor_Data_MultiProtoMsg): _116.SignatureDescriptor_Data_Multi;
                    toProto(message: _116.SignatureDescriptor_Data_Multi): Uint8Array;
                    toProtoMsg(message: _116.SignatureDescriptor_Data_Multi): _116.SignatureDescriptor_Data_MultiProtoMsg;
                };
            };
        }
        const v1beta1: {
            Service: typeof _223.Service;
            ServiceClientImpl: typeof _223.ServiceClientImpl;
            LCDQueryClient: typeof _204.LCDQueryClient;
            protobufPackage: "cosmos.tx.v1beta1";
            Tx: {
                typeUrl: string;
                encode(message: _118.Tx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _118.Tx;
                fromJSON(object: any): _118.Tx;
                toJSON(message: _118.Tx): unknown;
                fromPartial(object: Partial<_118.Tx>): _118.Tx;
                fromSDK(object: _118.TxSDKType): _118.Tx;
                toSDK(message: _118.Tx): _118.TxSDKType;
                fromAmino(object: _118.TxAmino): _118.Tx;
                toAmino(message: _118.Tx): _118.TxAmino;
                fromAminoMsg(object: _118.TxAminoMsg): _118.Tx;
                toAminoMsg(message: _118.Tx): _118.TxAminoMsg;
                fromProtoMsg(message: _118.TxProtoMsg): _118.Tx;
                toProto(message: _118.Tx): Uint8Array;
                toProtoMsg(message: _118.Tx): _118.TxProtoMsg;
            };
            TxRaw: {
                typeUrl: string;
                encode(message: _118.TxRaw, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _118.TxRaw;
                fromJSON(object: any): _118.TxRaw;
                toJSON(message: _118.TxRaw): unknown;
                fromPartial(object: Partial<_118.TxRaw>): _118.TxRaw;
                fromSDK(object: _118.TxRawSDKType): _118.TxRaw;
                toSDK(message: _118.TxRaw): _118.TxRawSDKType;
                fromAmino(object: _118.TxRawAmino): _118.TxRaw;
                toAmino(message: _118.TxRaw): _118.TxRawAmino;
                fromAminoMsg(object: _118.TxRawAminoMsg): _118.TxRaw;
                toAminoMsg(message: _118.TxRaw): _118.TxRawAminoMsg;
                fromProtoMsg(message: _118.TxRawProtoMsg): _118.TxRaw;
                toProto(message: _118.TxRaw): Uint8Array;
                toProtoMsg(message: _118.TxRaw): _118.TxRawProtoMsg;
            };
            SignDoc: {
                typeUrl: string;
                encode(message: _118.SignDoc, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _118.SignDoc;
                fromJSON(object: any): _118.SignDoc;
                toJSON(message: _118.SignDoc): unknown;
                fromPartial(object: Partial<_118.SignDoc>): _118.SignDoc;
                fromSDK(object: _118.SignDocSDKType): _118.SignDoc;
                toSDK(message: _118.SignDoc): _118.SignDocSDKType;
                fromAmino(object: _118.SignDocAmino): _118.SignDoc;
                toAmino(message: _118.SignDoc): _118.SignDocAmino;
                fromAminoMsg(object: _118.SignDocAminoMsg): _118.SignDoc;
                toAminoMsg(message: _118.SignDoc): _118.SignDocAminoMsg;
                fromProtoMsg(message: _118.SignDocProtoMsg): _118.SignDoc;
                toProto(message: _118.SignDoc): Uint8Array;
                toProtoMsg(message: _118.SignDoc): _118.SignDocProtoMsg;
            };
            SignDocDirectAux: {
                typeUrl: string;
                encode(message: _118.SignDocDirectAux, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _118.SignDocDirectAux;
                fromJSON(object: any): _118.SignDocDirectAux;
                toJSON(message: _118.SignDocDirectAux): unknown;
                fromPartial(object: Partial<_118.SignDocDirectAux>): _118.SignDocDirectAux;
                fromSDK(object: _118.SignDocDirectAuxSDKType): _118.SignDocDirectAux;
                toSDK(message: _118.SignDocDirectAux): _118.SignDocDirectAuxSDKType;
                fromAmino(object: _118.SignDocDirectAuxAmino): _118.SignDocDirectAux;
                toAmino(message: _118.SignDocDirectAux): _118.SignDocDirectAuxAmino;
                fromAminoMsg(object: _118.SignDocDirectAuxAminoMsg): _118.SignDocDirectAux;
                toAminoMsg(message: _118.SignDocDirectAux): _118.SignDocDirectAuxAminoMsg;
                fromProtoMsg(message: _118.SignDocDirectAuxProtoMsg): _118.SignDocDirectAux;
                toProto(message: _118.SignDocDirectAux): Uint8Array;
                toProtoMsg(message: _118.SignDocDirectAux): _118.SignDocDirectAuxProtoMsg;
            };
            TxBody: {
                typeUrl: string;
                encode(message: _118.TxBody, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _118.TxBody;
                fromJSON(object: any): _118.TxBody;
                toJSON(message: _118.TxBody): unknown;
                fromPartial(object: Partial<_118.TxBody>): _118.TxBody;
                fromSDK(object: _118.TxBodySDKType): _118.TxBody;
                toSDK(message: _118.TxBody): _118.TxBodySDKType;
                fromAmino(object: _118.TxBodyAmino): _118.TxBody;
                toAmino(message: _118.TxBody): _118.TxBodyAmino;
                fromAminoMsg(object: _118.TxBodyAminoMsg): _118.TxBody;
                toAminoMsg(message: _118.TxBody): _118.TxBodyAminoMsg;
                fromProtoMsg(message: _118.TxBodyProtoMsg): _118.TxBody;
                toProto(message: _118.TxBody): Uint8Array;
                toProtoMsg(message: _118.TxBody): _118.TxBodyProtoMsg;
            };
            AuthInfo: {
                typeUrl: string;
                encode(message: _118.AuthInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _118.AuthInfo;
                fromJSON(object: any): _118.AuthInfo;
                toJSON(message: _118.AuthInfo): unknown;
                fromPartial(object: Partial<_118.AuthInfo>): _118.AuthInfo;
                fromSDK(object: _118.AuthInfoSDKType): _118.AuthInfo;
                toSDK(message: _118.AuthInfo): _118.AuthInfoSDKType;
                fromAmino(object: _118.AuthInfoAmino): _118.AuthInfo;
                toAmino(message: _118.AuthInfo): _118.AuthInfoAmino;
                fromAminoMsg(object: _118.AuthInfoAminoMsg): _118.AuthInfo;
                toAminoMsg(message: _118.AuthInfo): _118.AuthInfoAminoMsg;
                fromProtoMsg(message: _118.AuthInfoProtoMsg): _118.AuthInfo;
                toProto(message: _118.AuthInfo): Uint8Array;
                toProtoMsg(message: _118.AuthInfo): _118.AuthInfoProtoMsg;
            };
            SignerInfo: {
                typeUrl: string;
                encode(message: _118.SignerInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _118.SignerInfo;
                fromJSON(object: any): _118.SignerInfo;
                toJSON(message: _118.SignerInfo): unknown;
                fromPartial(object: Partial<_118.SignerInfo>): _118.SignerInfo;
                fromSDK(object: _118.SignerInfoSDKType): _118.SignerInfo;
                toSDK(message: _118.SignerInfo): _118.SignerInfoSDKType;
                fromAmino(object: _118.SignerInfoAmino): _118.SignerInfo;
                toAmino(message: _118.SignerInfo): _118.SignerInfoAmino;
                fromAminoMsg(object: _118.SignerInfoAminoMsg): _118.SignerInfo;
                toAminoMsg(message: _118.SignerInfo): _118.SignerInfoAminoMsg;
                fromProtoMsg(message: _118.SignerInfoProtoMsg): _118.SignerInfo;
                toProto(message: _118.SignerInfo): Uint8Array;
                toProtoMsg(message: _118.SignerInfo): _118.SignerInfoProtoMsg;
            };
            ModeInfo: {
                typeUrl: string;
                encode(message: _118.ModeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _118.ModeInfo;
                fromJSON(object: any): _118.ModeInfo;
                toJSON(message: _118.ModeInfo): unknown;
                fromPartial(object: Partial<_118.ModeInfo>): _118.ModeInfo;
                fromSDK(object: _118.ModeInfoSDKType): _118.ModeInfo;
                toSDK(message: _118.ModeInfo): _118.ModeInfoSDKType;
                fromAmino(object: _118.ModeInfoAmino): _118.ModeInfo;
                toAmino(message: _118.ModeInfo): _118.ModeInfoAmino;
                fromAminoMsg(object: _118.ModeInfoAminoMsg): _118.ModeInfo;
                toAminoMsg(message: _118.ModeInfo): _118.ModeInfoAminoMsg;
                fromProtoMsg(message: _118.ModeInfoProtoMsg): _118.ModeInfo;
                toProto(message: _118.ModeInfo): Uint8Array;
                toProtoMsg(message: _118.ModeInfo): _118.ModeInfoProtoMsg;
            };
            ModeInfo_Single: {
                typeUrl: string;
                encode(message: _118.ModeInfo_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _118.ModeInfo_Single;
                fromJSON(object: any): _118.ModeInfo_Single;
                toJSON(message: _118.ModeInfo_Single): unknown;
                fromPartial(object: Partial<_118.ModeInfo_Single>): _118.ModeInfo_Single;
                fromSDK(object: _118.ModeInfo_SingleSDKType): _118.ModeInfo_Single;
                toSDK(message: _118.ModeInfo_Single): _118.ModeInfo_SingleSDKType;
                fromAmino(object: _118.ModeInfo_SingleAmino): _118.ModeInfo_Single;
                toAmino(message: _118.ModeInfo_Single): _118.ModeInfo_SingleAmino;
                fromAminoMsg(object: _118.ModeInfo_SingleAminoMsg): _118.ModeInfo_Single;
                toAminoMsg(message: _118.ModeInfo_Single): _118.ModeInfo_SingleAminoMsg;
                fromProtoMsg(message: _118.ModeInfo_SingleProtoMsg): _118.ModeInfo_Single;
                toProto(message: _118.ModeInfo_Single): Uint8Array;
                toProtoMsg(message: _118.ModeInfo_Single): _118.ModeInfo_SingleProtoMsg;
            };
            ModeInfo_Multi: {
                typeUrl: string;
                encode(message: _118.ModeInfo_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _118.ModeInfo_Multi;
                fromJSON(object: any): _118.ModeInfo_Multi;
                toJSON(message: _118.ModeInfo_Multi): unknown;
                fromPartial(object: Partial<_118.ModeInfo_Multi>): _118.ModeInfo_Multi;
                fromSDK(object: _118.ModeInfo_MultiSDKType): _118.ModeInfo_Multi;
                toSDK(message: _118.ModeInfo_Multi): _118.ModeInfo_MultiSDKType;
                fromAmino(object: _118.ModeInfo_MultiAmino): _118.ModeInfo_Multi;
                toAmino(message: _118.ModeInfo_Multi): _118.ModeInfo_MultiAmino;
                fromAminoMsg(object: _118.ModeInfo_MultiAminoMsg): _118.ModeInfo_Multi;
                toAminoMsg(message: _118.ModeInfo_Multi): _118.ModeInfo_MultiAminoMsg;
                fromProtoMsg(message: _118.ModeInfo_MultiProtoMsg): _118.ModeInfo_Multi;
                toProto(message: _118.ModeInfo_Multi): Uint8Array;
                toProtoMsg(message: _118.ModeInfo_Multi): _118.ModeInfo_MultiProtoMsg;
            };
            Fee: {
                typeUrl: string;
                encode(message: _118.Fee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _118.Fee;
                fromJSON(object: any): _118.Fee;
                toJSON(message: _118.Fee): unknown;
                fromPartial(object: Partial<_118.Fee>): _118.Fee;
                fromSDK(object: _118.FeeSDKType): _118.Fee;
                toSDK(message: _118.Fee): _118.FeeSDKType;
                fromAmino(object: _118.FeeAmino): _118.Fee;
                toAmino(message: _118.Fee): _118.FeeAmino;
                fromAminoMsg(object: _118.FeeAminoMsg): _118.Fee;
                toAminoMsg(message: _118.Fee): _118.FeeAminoMsg;
                fromProtoMsg(message: _118.FeeProtoMsg): _118.Fee;
                toProto(message: _118.Fee): Uint8Array;
                toProtoMsg(message: _118.Fee): _118.FeeProtoMsg;
            };
            Tip: {
                typeUrl: string;
                encode(message: _118.Tip, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _118.Tip;
                fromJSON(object: any): _118.Tip;
                toJSON(message: _118.Tip): unknown;
                fromPartial(object: Partial<_118.Tip>): _118.Tip;
                fromSDK(object: _118.TipSDKType): _118.Tip;
                toSDK(message: _118.Tip): _118.TipSDKType;
                fromAmino(object: _118.TipAmino): _118.Tip;
                toAmino(message: _118.Tip): _118.TipAmino;
                fromAminoMsg(object: _118.TipAminoMsg): _118.Tip;
                toAminoMsg(message: _118.Tip): _118.TipAminoMsg;
                fromProtoMsg(message: _118.TipProtoMsg): _118.Tip;
                toProto(message: _118.Tip): Uint8Array;
                toProtoMsg(message: _118.Tip): _118.TipProtoMsg;
            };
            AuxSignerData: {
                typeUrl: string;
                encode(message: _118.AuxSignerData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _118.AuxSignerData;
                fromJSON(object: any): _118.AuxSignerData;
                toJSON(message: _118.AuxSignerData): unknown;
                fromPartial(object: Partial<_118.AuxSignerData>): _118.AuxSignerData;
                fromSDK(object: _118.AuxSignerDataSDKType): _118.AuxSignerData;
                toSDK(message: _118.AuxSignerData): _118.AuxSignerDataSDKType;
                fromAmino(object: _118.AuxSignerDataAmino): _118.AuxSignerData;
                toAmino(message: _118.AuxSignerData): _118.AuxSignerDataAmino;
                fromAminoMsg(object: _118.AuxSignerDataAminoMsg): _118.AuxSignerData;
                toAminoMsg(message: _118.AuxSignerData): _118.AuxSignerDataAminoMsg;
                fromProtoMsg(message: _118.AuxSignerDataProtoMsg): _118.AuxSignerData;
                toProto(message: _118.AuxSignerData): Uint8Array;
                toProtoMsg(message: _118.AuxSignerData): _118.AuxSignerDataProtoMsg;
            };
            orderByFromJSON(object: any): _117.OrderBy;
            orderByToJSON(object: _117.OrderBy): string;
            broadcastModeFromJSON(object: any): _117.BroadcastMode;
            broadcastModeToJSON(object: _117.BroadcastMode): string;
            OrderBy: typeof _117.OrderBy;
            OrderBySDKType: typeof _117.OrderBy;
            OrderByAmino: typeof _117.OrderBy;
            BroadcastMode: typeof _117.BroadcastMode;
            BroadcastModeSDKType: typeof _117.BroadcastMode;
            BroadcastModeAmino: typeof _117.BroadcastMode;
            GetTxsEventRequest: {
                typeUrl: string;
                encode(message: _117.GetTxsEventRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _117.GetTxsEventRequest;
                fromJSON(object: any): _117.GetTxsEventRequest;
                toJSON(message: _117.GetTxsEventRequest): unknown;
                fromPartial(object: Partial<_117.GetTxsEventRequest>): _117.GetTxsEventRequest;
                fromSDK(object: _117.GetTxsEventRequestSDKType): _117.GetTxsEventRequest;
                toSDK(message: _117.GetTxsEventRequest): _117.GetTxsEventRequestSDKType;
                fromAmino(object: _117.GetTxsEventRequestAmino): _117.GetTxsEventRequest;
                toAmino(message: _117.GetTxsEventRequest): _117.GetTxsEventRequestAmino;
                fromAminoMsg(object: _117.GetTxsEventRequestAminoMsg): _117.GetTxsEventRequest;
                toAminoMsg(message: _117.GetTxsEventRequest): _117.GetTxsEventRequestAminoMsg;
                fromProtoMsg(message: _117.GetTxsEventRequestProtoMsg): _117.GetTxsEventRequest;
                toProto(message: _117.GetTxsEventRequest): Uint8Array;
                toProtoMsg(message: _117.GetTxsEventRequest): _117.GetTxsEventRequestProtoMsg;
            };
            GetTxsEventResponse: {
                typeUrl: string;
                encode(message: _117.GetTxsEventResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _117.GetTxsEventResponse;
                fromJSON(object: any): _117.GetTxsEventResponse;
                toJSON(message: _117.GetTxsEventResponse): unknown;
                fromPartial(object: Partial<_117.GetTxsEventResponse>): _117.GetTxsEventResponse;
                fromSDK(object: _117.GetTxsEventResponseSDKType): _117.GetTxsEventResponse;
                toSDK(message: _117.GetTxsEventResponse): _117.GetTxsEventResponseSDKType;
                fromAmino(object: _117.GetTxsEventResponseAmino): _117.GetTxsEventResponse;
                toAmino(message: _117.GetTxsEventResponse): _117.GetTxsEventResponseAmino;
                fromAminoMsg(object: _117.GetTxsEventResponseAminoMsg): _117.GetTxsEventResponse;
                toAminoMsg(message: _117.GetTxsEventResponse): _117.GetTxsEventResponseAminoMsg;
                fromProtoMsg(message: _117.GetTxsEventResponseProtoMsg): _117.GetTxsEventResponse;
                toProto(message: _117.GetTxsEventResponse): Uint8Array;
                toProtoMsg(message: _117.GetTxsEventResponse): _117.GetTxsEventResponseProtoMsg;
            };
            BroadcastTxRequest: {
                typeUrl: string;
                encode(message: _117.BroadcastTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _117.BroadcastTxRequest;
                fromJSON(object: any): _117.BroadcastTxRequest;
                toJSON(message: _117.BroadcastTxRequest): unknown;
                fromPartial(object: Partial<_117.BroadcastTxRequest>): _117.BroadcastTxRequest;
                fromSDK(object: _117.BroadcastTxRequestSDKType): _117.BroadcastTxRequest;
                toSDK(message: _117.BroadcastTxRequest): _117.BroadcastTxRequestSDKType;
                fromAmino(object: _117.BroadcastTxRequestAmino): _117.BroadcastTxRequest;
                toAmino(message: _117.BroadcastTxRequest): _117.BroadcastTxRequestAmino;
                fromAminoMsg(object: _117.BroadcastTxRequestAminoMsg): _117.BroadcastTxRequest;
                toAminoMsg(message: _117.BroadcastTxRequest): _117.BroadcastTxRequestAminoMsg;
                fromProtoMsg(message: _117.BroadcastTxRequestProtoMsg): _117.BroadcastTxRequest;
                toProto(message: _117.BroadcastTxRequest): Uint8Array;
                toProtoMsg(message: _117.BroadcastTxRequest): _117.BroadcastTxRequestProtoMsg;
            };
            BroadcastTxResponse: {
                typeUrl: string;
                encode(message: _117.BroadcastTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _117.BroadcastTxResponse;
                fromJSON(object: any): _117.BroadcastTxResponse;
                toJSON(message: _117.BroadcastTxResponse): unknown;
                fromPartial(object: Partial<_117.BroadcastTxResponse>): _117.BroadcastTxResponse;
                fromSDK(object: _117.BroadcastTxResponseSDKType): _117.BroadcastTxResponse;
                toSDK(message: _117.BroadcastTxResponse): _117.BroadcastTxResponseSDKType;
                fromAmino(object: _117.BroadcastTxResponseAmino): _117.BroadcastTxResponse;
                toAmino(message: _117.BroadcastTxResponse): _117.BroadcastTxResponseAmino;
                fromAminoMsg(object: _117.BroadcastTxResponseAminoMsg): _117.BroadcastTxResponse;
                toAminoMsg(message: _117.BroadcastTxResponse): _117.BroadcastTxResponseAminoMsg;
                fromProtoMsg(message: _117.BroadcastTxResponseProtoMsg): _117.BroadcastTxResponse;
                toProto(message: _117.BroadcastTxResponse): Uint8Array;
                toProtoMsg(message: _117.BroadcastTxResponse): _117.BroadcastTxResponseProtoMsg;
            };
            SimulateRequest: {
                typeUrl: string;
                encode(message: _117.SimulateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _117.SimulateRequest;
                fromJSON(object: any): _117.SimulateRequest;
                toJSON(message: _117.SimulateRequest): unknown;
                fromPartial(object: Partial<_117.SimulateRequest>): _117.SimulateRequest;
                fromSDK(object: _117.SimulateRequestSDKType): _117.SimulateRequest;
                toSDK(message: _117.SimulateRequest): _117.SimulateRequestSDKType;
                fromAmino(object: _117.SimulateRequestAmino): _117.SimulateRequest;
                toAmino(message: _117.SimulateRequest): _117.SimulateRequestAmino;
                fromAminoMsg(object: _117.SimulateRequestAminoMsg): _117.SimulateRequest;
                toAminoMsg(message: _117.SimulateRequest): _117.SimulateRequestAminoMsg;
                fromProtoMsg(message: _117.SimulateRequestProtoMsg): _117.SimulateRequest;
                toProto(message: _117.SimulateRequest): Uint8Array;
                toProtoMsg(message: _117.SimulateRequest): _117.SimulateRequestProtoMsg;
            };
            SimulateResponse: {
                typeUrl: string;
                encode(message: _117.SimulateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _117.SimulateResponse;
                fromJSON(object: any): _117.SimulateResponse;
                toJSON(message: _117.SimulateResponse): unknown;
                fromPartial(object: Partial<_117.SimulateResponse>): _117.SimulateResponse;
                fromSDK(object: _117.SimulateResponseSDKType): _117.SimulateResponse;
                toSDK(message: _117.SimulateResponse): _117.SimulateResponseSDKType;
                fromAmino(object: _117.SimulateResponseAmino): _117.SimulateResponse;
                toAmino(message: _117.SimulateResponse): _117.SimulateResponseAmino;
                fromAminoMsg(object: _117.SimulateResponseAminoMsg): _117.SimulateResponse;
                toAminoMsg(message: _117.SimulateResponse): _117.SimulateResponseAminoMsg;
                fromProtoMsg(message: _117.SimulateResponseProtoMsg): _117.SimulateResponse;
                toProto(message: _117.SimulateResponse): Uint8Array;
                toProtoMsg(message: _117.SimulateResponse): _117.SimulateResponseProtoMsg;
            };
            GetTxRequest: {
                typeUrl: string;
                encode(message: _117.GetTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _117.GetTxRequest;
                fromJSON(object: any): _117.GetTxRequest;
                toJSON(message: _117.GetTxRequest): unknown;
                fromPartial(object: Partial<_117.GetTxRequest>): _117.GetTxRequest;
                fromSDK(object: _117.GetTxRequestSDKType): _117.GetTxRequest;
                toSDK(message: _117.GetTxRequest): _117.GetTxRequestSDKType;
                fromAmino(object: _117.GetTxRequestAmino): _117.GetTxRequest;
                toAmino(message: _117.GetTxRequest): _117.GetTxRequestAmino;
                fromAminoMsg(object: _117.GetTxRequestAminoMsg): _117.GetTxRequest;
                toAminoMsg(message: _117.GetTxRequest): _117.GetTxRequestAminoMsg;
                fromProtoMsg(message: _117.GetTxRequestProtoMsg): _117.GetTxRequest;
                toProto(message: _117.GetTxRequest): Uint8Array;
                toProtoMsg(message: _117.GetTxRequest): _117.GetTxRequestProtoMsg;
            };
            GetTxResponse: {
                typeUrl: string;
                encode(message: _117.GetTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _117.GetTxResponse;
                fromJSON(object: any): _117.GetTxResponse;
                toJSON(message: _117.GetTxResponse): unknown;
                fromPartial(object: Partial<_117.GetTxResponse>): _117.GetTxResponse;
                fromSDK(object: _117.GetTxResponseSDKType): _117.GetTxResponse;
                toSDK(message: _117.GetTxResponse): _117.GetTxResponseSDKType;
                fromAmino(object: _117.GetTxResponseAmino): _117.GetTxResponse;
                toAmino(message: _117.GetTxResponse): _117.GetTxResponseAmino;
                fromAminoMsg(object: _117.GetTxResponseAminoMsg): _117.GetTxResponse;
                toAminoMsg(message: _117.GetTxResponse): _117.GetTxResponseAminoMsg;
                fromProtoMsg(message: _117.GetTxResponseProtoMsg): _117.GetTxResponse;
                toProto(message: _117.GetTxResponse): Uint8Array;
                toProtoMsg(message: _117.GetTxResponse): _117.GetTxResponseProtoMsg;
            };
            GetBlockWithTxsRequest: {
                typeUrl: string;
                encode(message: _117.GetBlockWithTxsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _117.GetBlockWithTxsRequest;
                fromJSON(object: any): _117.GetBlockWithTxsRequest;
                toJSON(message: _117.GetBlockWithTxsRequest): unknown;
                fromPartial(object: Partial<_117.GetBlockWithTxsRequest>): _117.GetBlockWithTxsRequest;
                fromSDK(object: _117.GetBlockWithTxsRequestSDKType): _117.GetBlockWithTxsRequest;
                toSDK(message: _117.GetBlockWithTxsRequest): _117.GetBlockWithTxsRequestSDKType;
                fromAmino(object: _117.GetBlockWithTxsRequestAmino): _117.GetBlockWithTxsRequest;
                toAmino(message: _117.GetBlockWithTxsRequest): _117.GetBlockWithTxsRequestAmino;
                fromAminoMsg(object: _117.GetBlockWithTxsRequestAminoMsg): _117.GetBlockWithTxsRequest;
                toAminoMsg(message: _117.GetBlockWithTxsRequest): _117.GetBlockWithTxsRequestAminoMsg;
                fromProtoMsg(message: _117.GetBlockWithTxsRequestProtoMsg): _117.GetBlockWithTxsRequest;
                toProto(message: _117.GetBlockWithTxsRequest): Uint8Array;
                toProtoMsg(message: _117.GetBlockWithTxsRequest): _117.GetBlockWithTxsRequestProtoMsg;
            };
            GetBlockWithTxsResponse: {
                typeUrl: string;
                encode(message: _117.GetBlockWithTxsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _117.GetBlockWithTxsResponse;
                fromJSON(object: any): _117.GetBlockWithTxsResponse;
                toJSON(message: _117.GetBlockWithTxsResponse): unknown;
                fromPartial(object: Partial<_117.GetBlockWithTxsResponse>): _117.GetBlockWithTxsResponse;
                fromSDK(object: _117.GetBlockWithTxsResponseSDKType): _117.GetBlockWithTxsResponse;
                toSDK(message: _117.GetBlockWithTxsResponse): _117.GetBlockWithTxsResponseSDKType;
                fromAmino(object: _117.GetBlockWithTxsResponseAmino): _117.GetBlockWithTxsResponse;
                toAmino(message: _117.GetBlockWithTxsResponse): _117.GetBlockWithTxsResponseAmino;
                fromAminoMsg(object: _117.GetBlockWithTxsResponseAminoMsg): _117.GetBlockWithTxsResponse;
                toAminoMsg(message: _117.GetBlockWithTxsResponse): _117.GetBlockWithTxsResponseAminoMsg;
                fromProtoMsg(message: _117.GetBlockWithTxsResponseProtoMsg): _117.GetBlockWithTxsResponse;
                toProto(message: _117.GetBlockWithTxsResponse): Uint8Array;
                toProtoMsg(message: _117.GetBlockWithTxsResponse): _117.GetBlockWithTxsResponseProtoMsg;
            };
            TxDecodeRequest: {
                typeUrl: string;
                encode(message: _117.TxDecodeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _117.TxDecodeRequest;
                fromJSON(object: any): _117.TxDecodeRequest;
                toJSON(message: _117.TxDecodeRequest): unknown;
                fromPartial(object: Partial<_117.TxDecodeRequest>): _117.TxDecodeRequest;
                fromSDK(object: _117.TxDecodeRequestSDKType): _117.TxDecodeRequest;
                toSDK(message: _117.TxDecodeRequest): _117.TxDecodeRequestSDKType;
                fromAmino(object: _117.TxDecodeRequestAmino): _117.TxDecodeRequest;
                toAmino(message: _117.TxDecodeRequest): _117.TxDecodeRequestAmino;
                fromAminoMsg(object: _117.TxDecodeRequestAminoMsg): _117.TxDecodeRequest;
                toAminoMsg(message: _117.TxDecodeRequest): _117.TxDecodeRequestAminoMsg;
                fromProtoMsg(message: _117.TxDecodeRequestProtoMsg): _117.TxDecodeRequest;
                toProto(message: _117.TxDecodeRequest): Uint8Array;
                toProtoMsg(message: _117.TxDecodeRequest): _117.TxDecodeRequestProtoMsg;
            };
            TxDecodeResponse: {
                typeUrl: string;
                encode(message: _117.TxDecodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _117.TxDecodeResponse;
                fromJSON(object: any): _117.TxDecodeResponse;
                toJSON(message: _117.TxDecodeResponse): unknown;
                fromPartial(object: Partial<_117.TxDecodeResponse>): _117.TxDecodeResponse;
                fromSDK(object: _117.TxDecodeResponseSDKType): _117.TxDecodeResponse;
                toSDK(message: _117.TxDecodeResponse): _117.TxDecodeResponseSDKType;
                fromAmino(object: _117.TxDecodeResponseAmino): _117.TxDecodeResponse;
                toAmino(message: _117.TxDecodeResponse): _117.TxDecodeResponseAmino;
                fromAminoMsg(object: _117.TxDecodeResponseAminoMsg): _117.TxDecodeResponse;
                toAminoMsg(message: _117.TxDecodeResponse): _117.TxDecodeResponseAminoMsg;
                fromProtoMsg(message: _117.TxDecodeResponseProtoMsg): _117.TxDecodeResponse;
                toProto(message: _117.TxDecodeResponse): Uint8Array;
                toProtoMsg(message: _117.TxDecodeResponse): _117.TxDecodeResponseProtoMsg;
            };
            TxEncodeRequest: {
                typeUrl: string;
                encode(message: _117.TxEncodeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _117.TxEncodeRequest;
                fromJSON(object: any): _117.TxEncodeRequest;
                toJSON(message: _117.TxEncodeRequest): unknown;
                fromPartial(object: Partial<_117.TxEncodeRequest>): _117.TxEncodeRequest;
                fromSDK(object: _117.TxEncodeRequestSDKType): _117.TxEncodeRequest;
                toSDK(message: _117.TxEncodeRequest): _117.TxEncodeRequestSDKType;
                fromAmino(object: _117.TxEncodeRequestAmino): _117.TxEncodeRequest;
                toAmino(message: _117.TxEncodeRequest): _117.TxEncodeRequestAmino;
                fromAminoMsg(object: _117.TxEncodeRequestAminoMsg): _117.TxEncodeRequest;
                toAminoMsg(message: _117.TxEncodeRequest): _117.TxEncodeRequestAminoMsg;
                fromProtoMsg(message: _117.TxEncodeRequestProtoMsg): _117.TxEncodeRequest;
                toProto(message: _117.TxEncodeRequest): Uint8Array;
                toProtoMsg(message: _117.TxEncodeRequest): _117.TxEncodeRequestProtoMsg;
            };
            TxEncodeResponse: {
                typeUrl: string;
                encode(message: _117.TxEncodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _117.TxEncodeResponse;
                fromJSON(object: any): _117.TxEncodeResponse;
                toJSON(message: _117.TxEncodeResponse): unknown;
                fromPartial(object: Partial<_117.TxEncodeResponse>): _117.TxEncodeResponse;
                fromSDK(object: _117.TxEncodeResponseSDKType): _117.TxEncodeResponse;
                toSDK(message: _117.TxEncodeResponse): _117.TxEncodeResponseSDKType;
                fromAmino(object: _117.TxEncodeResponseAmino): _117.TxEncodeResponse;
                toAmino(message: _117.TxEncodeResponse): _117.TxEncodeResponseAmino;
                fromAminoMsg(object: _117.TxEncodeResponseAminoMsg): _117.TxEncodeResponse;
                toAminoMsg(message: _117.TxEncodeResponse): _117.TxEncodeResponseAminoMsg;
                fromProtoMsg(message: _117.TxEncodeResponseProtoMsg): _117.TxEncodeResponse;
                toProto(message: _117.TxEncodeResponse): Uint8Array;
                toProtoMsg(message: _117.TxEncodeResponse): _117.TxEncodeResponseProtoMsg;
            };
            TxEncodeAminoRequest: {
                typeUrl: string;
                encode(message: _117.TxEncodeAminoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _117.TxEncodeAminoRequest;
                fromJSON(object: any): _117.TxEncodeAminoRequest;
                toJSON(message: _117.TxEncodeAminoRequest): unknown;
                fromPartial(object: Partial<_117.TxEncodeAminoRequest>): _117.TxEncodeAminoRequest;
                fromSDK(object: _117.TxEncodeAminoRequestSDKType): _117.TxEncodeAminoRequest;
                toSDK(message: _117.TxEncodeAminoRequest): _117.TxEncodeAminoRequestSDKType;
                fromAmino(object: _117.TxEncodeAminoRequestAmino): _117.TxEncodeAminoRequest;
                toAmino(message: _117.TxEncodeAminoRequest): _117.TxEncodeAminoRequestAmino;
                fromAminoMsg(object: _117.TxEncodeAminoRequestAminoMsg): _117.TxEncodeAminoRequest;
                toAminoMsg(message: _117.TxEncodeAminoRequest): _117.TxEncodeAminoRequestAminoMsg;
                fromProtoMsg(message: _117.TxEncodeAminoRequestProtoMsg): _117.TxEncodeAminoRequest;
                toProto(message: _117.TxEncodeAminoRequest): Uint8Array;
                toProtoMsg(message: _117.TxEncodeAminoRequest): _117.TxEncodeAminoRequestProtoMsg;
            };
            TxEncodeAminoResponse: {
                typeUrl: string;
                encode(message: _117.TxEncodeAminoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _117.TxEncodeAminoResponse;
                fromJSON(object: any): _117.TxEncodeAminoResponse;
                toJSON(message: _117.TxEncodeAminoResponse): unknown;
                fromPartial(object: Partial<_117.TxEncodeAminoResponse>): _117.TxEncodeAminoResponse;
                fromSDK(object: _117.TxEncodeAminoResponseSDKType): _117.TxEncodeAminoResponse;
                toSDK(message: _117.TxEncodeAminoResponse): _117.TxEncodeAminoResponseSDKType;
                fromAmino(object: _117.TxEncodeAminoResponseAmino): _117.TxEncodeAminoResponse;
                toAmino(message: _117.TxEncodeAminoResponse): _117.TxEncodeAminoResponseAmino;
                fromAminoMsg(object: _117.TxEncodeAminoResponseAminoMsg): _117.TxEncodeAminoResponse;
                toAminoMsg(message: _117.TxEncodeAminoResponse): _117.TxEncodeAminoResponseAminoMsg;
                fromProtoMsg(message: _117.TxEncodeAminoResponseProtoMsg): _117.TxEncodeAminoResponse;
                toProto(message: _117.TxEncodeAminoResponse): Uint8Array;
                toProtoMsg(message: _117.TxEncodeAminoResponse): _117.TxEncodeAminoResponseProtoMsg;
            };
            TxDecodeAminoRequest: {
                typeUrl: string;
                encode(message: _117.TxDecodeAminoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _117.TxDecodeAminoRequest;
                fromJSON(object: any): _117.TxDecodeAminoRequest;
                toJSON(message: _117.TxDecodeAminoRequest): unknown;
                fromPartial(object: Partial<_117.TxDecodeAminoRequest>): _117.TxDecodeAminoRequest;
                fromSDK(object: _117.TxDecodeAminoRequestSDKType): _117.TxDecodeAminoRequest;
                toSDK(message: _117.TxDecodeAminoRequest): _117.TxDecodeAminoRequestSDKType;
                fromAmino(object: _117.TxDecodeAminoRequestAmino): _117.TxDecodeAminoRequest;
                toAmino(message: _117.TxDecodeAminoRequest): _117.TxDecodeAminoRequestAmino;
                fromAminoMsg(object: _117.TxDecodeAminoRequestAminoMsg): _117.TxDecodeAminoRequest;
                toAminoMsg(message: _117.TxDecodeAminoRequest): _117.TxDecodeAminoRequestAminoMsg;
                fromProtoMsg(message: _117.TxDecodeAminoRequestProtoMsg): _117.TxDecodeAminoRequest;
                toProto(message: _117.TxDecodeAminoRequest): Uint8Array;
                toProtoMsg(message: _117.TxDecodeAminoRequest): _117.TxDecodeAminoRequestProtoMsg;
            };
            TxDecodeAminoResponse: {
                typeUrl: string;
                encode(message: _117.TxDecodeAminoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _117.TxDecodeAminoResponse;
                fromJSON(object: any): _117.TxDecodeAminoResponse;
                toJSON(message: _117.TxDecodeAminoResponse): unknown;
                fromPartial(object: Partial<_117.TxDecodeAminoResponse>): _117.TxDecodeAminoResponse;
                fromSDK(object: _117.TxDecodeAminoResponseSDKType): _117.TxDecodeAminoResponse;
                toSDK(message: _117.TxDecodeAminoResponse): _117.TxDecodeAminoResponseSDKType;
                fromAmino(object: _117.TxDecodeAminoResponseAmino): _117.TxDecodeAminoResponse;
                toAmino(message: _117.TxDecodeAminoResponse): _117.TxDecodeAminoResponseAmino;
                fromAminoMsg(object: _117.TxDecodeAminoResponseAminoMsg): _117.TxDecodeAminoResponse;
                toAminoMsg(message: _117.TxDecodeAminoResponse): _117.TxDecodeAminoResponseAminoMsg;
                fromProtoMsg(message: _117.TxDecodeAminoResponseProtoMsg): _117.TxDecodeAminoResponse;
                toProto(message: _117.TxDecodeAminoResponse): Uint8Array;
                toProtoMsg(message: _117.TxDecodeAminoResponse): _117.TxDecodeAminoResponseProtoMsg;
            };
        };
    }
    namespace upgrade {
        namespace module {
            const v1: {
                protobufPackage: "cosmos.upgrade.module.v1";
                Module: {
                    typeUrl: string;
                    encode(message: _119.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _119.Module;
                    fromJSON(object: any): _119.Module;
                    toJSON(message: _119.Module): unknown;
                    fromPartial(object: Partial<_119.Module>): _119.Module;
                    fromSDK(object: _119.ModuleSDKType): _119.Module;
                    toSDK(message: _119.Module): _119.ModuleSDKType;
                    fromAmino(object: _119.ModuleAmino): _119.Module;
                    toAmino(message: _119.Module): _119.ModuleAmino;
                    fromAminoMsg(object: _119.ModuleAminoMsg): _119.Module;
                    toAminoMsg(message: _119.Module): _119.ModuleAminoMsg;
                    fromProtoMsg(message: _119.ModuleProtoMsg): _119.Module;
                    toProto(message: _119.Module): Uint8Array;
                    toProtoMsg(message: _119.Module): _119.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            Msg: typeof _238.Msg;
            Query: typeof _224.Query;
            QueryClientImpl: typeof _224.QueryClientImpl;
            LCDQueryClient: typeof _205.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    softwareUpgrade(value: _121.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUpgrade(value: _121.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    softwareUpgrade(value: _121.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _121.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _121.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _121.MsgCancelUpgrade;
                    };
                };
                toJSON: {
                    softwareUpgrade(value: _121.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: unknown;
                    };
                    cancelUpgrade(value: _121.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    softwareUpgrade(value: any): {
                        typeUrl: string;
                        value: _121.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: any): {
                        typeUrl: string;
                        value: _121.MsgCancelUpgrade;
                    };
                };
                fromPartial: {
                    softwareUpgrade(value: _121.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _121.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _121.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _121.MsgCancelUpgrade;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
                    aminoType: string;
                    toAmino: (message: _121.MsgSoftwareUpgrade) => _121.MsgSoftwareUpgradeAmino;
                    fromAmino: (object: _121.MsgSoftwareUpgradeAmino) => _121.MsgSoftwareUpgrade;
                };
                "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
                    aminoType: string;
                    toAmino: (message: _121.MsgCancelUpgrade) => _121.MsgCancelUpgradeAmino;
                    fromAmino: (object: _121.MsgCancelUpgradeAmino) => _121.MsgCancelUpgrade;
                };
            };
            protobufPackage: "cosmos.upgrade.v1beta1";
            Plan: {
                typeUrl: string;
                encode(message: _122.Plan, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _122.Plan;
                fromJSON(object: any): _122.Plan;
                toJSON(message: _122.Plan): unknown;
                fromPartial(object: Partial<_122.Plan>): _122.Plan;
                fromSDK(object: _122.PlanSDKType): _122.Plan;
                toSDK(message: _122.Plan): _122.PlanSDKType;
                fromAmino(object: _122.PlanAmino): _122.Plan;
                toAmino(message: _122.Plan): _122.PlanAmino;
                fromAminoMsg(object: _122.PlanAminoMsg): _122.Plan;
                toAminoMsg(message: _122.Plan): _122.PlanAminoMsg;
                fromProtoMsg(message: _122.PlanProtoMsg): _122.Plan;
                toProto(message: _122.Plan): Uint8Array;
                toProtoMsg(message: _122.Plan): _122.PlanProtoMsg;
            };
            SoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _122.SoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _122.SoftwareUpgradeProposal;
                fromJSON(object: any): _122.SoftwareUpgradeProposal;
                toJSON(message: _122.SoftwareUpgradeProposal): unknown;
                fromPartial(object: Partial<_122.SoftwareUpgradeProposal>): _122.SoftwareUpgradeProposal;
                fromSDK(object: _122.SoftwareUpgradeProposalSDKType): _122.SoftwareUpgradeProposal;
                toSDK(message: _122.SoftwareUpgradeProposal): _122.SoftwareUpgradeProposalSDKType;
                fromAmino(object: _122.SoftwareUpgradeProposalAmino): _122.SoftwareUpgradeProposal;
                toAmino(message: _122.SoftwareUpgradeProposal): _122.SoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _122.SoftwareUpgradeProposalAminoMsg): _122.SoftwareUpgradeProposal;
                toAminoMsg(message: _122.SoftwareUpgradeProposal): _122.SoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _122.SoftwareUpgradeProposalProtoMsg): _122.SoftwareUpgradeProposal;
                toProto(message: _122.SoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _122.SoftwareUpgradeProposal): _122.SoftwareUpgradeProposalProtoMsg;
            };
            CancelSoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _122.CancelSoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _122.CancelSoftwareUpgradeProposal;
                fromJSON(object: any): _122.CancelSoftwareUpgradeProposal;
                toJSON(message: _122.CancelSoftwareUpgradeProposal): unknown;
                fromPartial(object: Partial<_122.CancelSoftwareUpgradeProposal>): _122.CancelSoftwareUpgradeProposal;
                fromSDK(object: _122.CancelSoftwareUpgradeProposalSDKType): _122.CancelSoftwareUpgradeProposal;
                toSDK(message: _122.CancelSoftwareUpgradeProposal): _122.CancelSoftwareUpgradeProposalSDKType;
                fromAmino(object: _122.CancelSoftwareUpgradeProposalAmino): _122.CancelSoftwareUpgradeProposal;
                toAmino(message: _122.CancelSoftwareUpgradeProposal): _122.CancelSoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _122.CancelSoftwareUpgradeProposalAminoMsg): _122.CancelSoftwareUpgradeProposal;
                toAminoMsg(message: _122.CancelSoftwareUpgradeProposal): _122.CancelSoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _122.CancelSoftwareUpgradeProposalProtoMsg): _122.CancelSoftwareUpgradeProposal;
                toProto(message: _122.CancelSoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _122.CancelSoftwareUpgradeProposal): _122.CancelSoftwareUpgradeProposalProtoMsg;
            };
            ModuleVersion: {
                typeUrl: string;
                encode(message: _122.ModuleVersion, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _122.ModuleVersion;
                fromJSON(object: any): _122.ModuleVersion;
                toJSON(message: _122.ModuleVersion): unknown;
                fromPartial(object: Partial<_122.ModuleVersion>): _122.ModuleVersion;
                fromSDK(object: _122.ModuleVersionSDKType): _122.ModuleVersion;
                toSDK(message: _122.ModuleVersion): _122.ModuleVersionSDKType;
                fromAmino(object: _122.ModuleVersionAmino): _122.ModuleVersion;
                toAmino(message: _122.ModuleVersion): _122.ModuleVersionAmino;
                fromAminoMsg(object: _122.ModuleVersionAminoMsg): _122.ModuleVersion;
                toAminoMsg(message: _122.ModuleVersion): _122.ModuleVersionAminoMsg;
                fromProtoMsg(message: _122.ModuleVersionProtoMsg): _122.ModuleVersion;
                toProto(message: _122.ModuleVersion): Uint8Array;
                toProtoMsg(message: _122.ModuleVersion): _122.ModuleVersionProtoMsg;
            };
            MsgSoftwareUpgrade: {
                typeUrl: string;
                encode(message: _121.MsgSoftwareUpgrade, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _121.MsgSoftwareUpgrade;
                fromJSON(object: any): _121.MsgSoftwareUpgrade;
                toJSON(message: _121.MsgSoftwareUpgrade): unknown;
                fromPartial(object: Partial<_121.MsgSoftwareUpgrade>): _121.MsgSoftwareUpgrade;
                fromSDK(object: _121.MsgSoftwareUpgradeSDKType): _121.MsgSoftwareUpgrade;
                toSDK(message: _121.MsgSoftwareUpgrade): _121.MsgSoftwareUpgradeSDKType;
                fromAmino(object: _121.MsgSoftwareUpgradeAmino): _121.MsgSoftwareUpgrade;
                toAmino(message: _121.MsgSoftwareUpgrade): _121.MsgSoftwareUpgradeAmino;
                fromAminoMsg(object: _121.MsgSoftwareUpgradeAminoMsg): _121.MsgSoftwareUpgrade;
                toAminoMsg(message: _121.MsgSoftwareUpgrade): _121.MsgSoftwareUpgradeAminoMsg;
                fromProtoMsg(message: _121.MsgSoftwareUpgradeProtoMsg): _121.MsgSoftwareUpgrade;
                toProto(message: _121.MsgSoftwareUpgrade): Uint8Array;
                toProtoMsg(message: _121.MsgSoftwareUpgrade): _121.MsgSoftwareUpgradeProtoMsg;
            };
            MsgSoftwareUpgradeResponse: {
                typeUrl: string;
                encode(_: _121.MsgSoftwareUpgradeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _121.MsgSoftwareUpgradeResponse;
                fromJSON(_: any): _121.MsgSoftwareUpgradeResponse;
                toJSON(_: _121.MsgSoftwareUpgradeResponse): unknown;
                fromPartial(_: Partial<_121.MsgSoftwareUpgradeResponse>): _121.MsgSoftwareUpgradeResponse;
                fromSDK(_: _121.MsgSoftwareUpgradeResponseSDKType): _121.MsgSoftwareUpgradeResponse;
                toSDK(_: _121.MsgSoftwareUpgradeResponse): _121.MsgSoftwareUpgradeResponseSDKType;
                fromAmino(_: _121.MsgSoftwareUpgradeResponseAmino): _121.MsgSoftwareUpgradeResponse;
                toAmino(_: _121.MsgSoftwareUpgradeResponse): _121.MsgSoftwareUpgradeResponseAmino;
                fromAminoMsg(object: _121.MsgSoftwareUpgradeResponseAminoMsg): _121.MsgSoftwareUpgradeResponse;
                toAminoMsg(message: _121.MsgSoftwareUpgradeResponse): _121.MsgSoftwareUpgradeResponseAminoMsg;
                fromProtoMsg(message: _121.MsgSoftwareUpgradeResponseProtoMsg): _121.MsgSoftwareUpgradeResponse;
                toProto(message: _121.MsgSoftwareUpgradeResponse): Uint8Array;
                toProtoMsg(message: _121.MsgSoftwareUpgradeResponse): _121.MsgSoftwareUpgradeResponseProtoMsg;
            };
            MsgCancelUpgrade: {
                typeUrl: string;
                encode(message: _121.MsgCancelUpgrade, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _121.MsgCancelUpgrade;
                fromJSON(object: any): _121.MsgCancelUpgrade;
                toJSON(message: _121.MsgCancelUpgrade): unknown;
                fromPartial(object: Partial<_121.MsgCancelUpgrade>): _121.MsgCancelUpgrade;
                fromSDK(object: _121.MsgCancelUpgradeSDKType): _121.MsgCancelUpgrade;
                toSDK(message: _121.MsgCancelUpgrade): _121.MsgCancelUpgradeSDKType;
                fromAmino(object: _121.MsgCancelUpgradeAmino): _121.MsgCancelUpgrade;
                toAmino(message: _121.MsgCancelUpgrade): _121.MsgCancelUpgradeAmino;
                fromAminoMsg(object: _121.MsgCancelUpgradeAminoMsg): _121.MsgCancelUpgrade;
                toAminoMsg(message: _121.MsgCancelUpgrade): _121.MsgCancelUpgradeAminoMsg;
                fromProtoMsg(message: _121.MsgCancelUpgradeProtoMsg): _121.MsgCancelUpgrade;
                toProto(message: _121.MsgCancelUpgrade): Uint8Array;
                toProtoMsg(message: _121.MsgCancelUpgrade): _121.MsgCancelUpgradeProtoMsg;
            };
            MsgCancelUpgradeResponse: {
                typeUrl: string;
                encode(_: _121.MsgCancelUpgradeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _121.MsgCancelUpgradeResponse;
                fromJSON(_: any): _121.MsgCancelUpgradeResponse;
                toJSON(_: _121.MsgCancelUpgradeResponse): unknown;
                fromPartial(_: Partial<_121.MsgCancelUpgradeResponse>): _121.MsgCancelUpgradeResponse;
                fromSDK(_: _121.MsgCancelUpgradeResponseSDKType): _121.MsgCancelUpgradeResponse;
                toSDK(_: _121.MsgCancelUpgradeResponse): _121.MsgCancelUpgradeResponseSDKType;
                fromAmino(_: _121.MsgCancelUpgradeResponseAmino): _121.MsgCancelUpgradeResponse;
                toAmino(_: _121.MsgCancelUpgradeResponse): _121.MsgCancelUpgradeResponseAmino;
                fromAminoMsg(object: _121.MsgCancelUpgradeResponseAminoMsg): _121.MsgCancelUpgradeResponse;
                toAminoMsg(message: _121.MsgCancelUpgradeResponse): _121.MsgCancelUpgradeResponseAminoMsg;
                fromProtoMsg(message: _121.MsgCancelUpgradeResponseProtoMsg): _121.MsgCancelUpgradeResponse;
                toProto(message: _121.MsgCancelUpgradeResponse): Uint8Array;
                toProtoMsg(message: _121.MsgCancelUpgradeResponse): _121.MsgCancelUpgradeResponseProtoMsg;
            };
            QueryCurrentPlanRequest: {
                typeUrl: string;
                encode(_: _120.QueryCurrentPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _120.QueryCurrentPlanRequest;
                fromJSON(_: any): _120.QueryCurrentPlanRequest;
                toJSON(_: _120.QueryCurrentPlanRequest): unknown;
                fromPartial(_: Partial<_120.QueryCurrentPlanRequest>): _120.QueryCurrentPlanRequest;
                fromSDK(_: _120.QueryCurrentPlanRequestSDKType): _120.QueryCurrentPlanRequest;
                toSDK(_: _120.QueryCurrentPlanRequest): _120.QueryCurrentPlanRequestSDKType;
                fromAmino(_: _120.QueryCurrentPlanRequestAmino): _120.QueryCurrentPlanRequest;
                toAmino(_: _120.QueryCurrentPlanRequest): _120.QueryCurrentPlanRequestAmino;
                fromAminoMsg(object: _120.QueryCurrentPlanRequestAminoMsg): _120.QueryCurrentPlanRequest;
                toAminoMsg(message: _120.QueryCurrentPlanRequest): _120.QueryCurrentPlanRequestAminoMsg;
                fromProtoMsg(message: _120.QueryCurrentPlanRequestProtoMsg): _120.QueryCurrentPlanRequest;
                toProto(message: _120.QueryCurrentPlanRequest): Uint8Array;
                toProtoMsg(message: _120.QueryCurrentPlanRequest): _120.QueryCurrentPlanRequestProtoMsg;
            };
            QueryCurrentPlanResponse: {
                typeUrl: string;
                encode(message: _120.QueryCurrentPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _120.QueryCurrentPlanResponse;
                fromJSON(object: any): _120.QueryCurrentPlanResponse;
                toJSON(message: _120.QueryCurrentPlanResponse): unknown;
                fromPartial(object: Partial<_120.QueryCurrentPlanResponse>): _120.QueryCurrentPlanResponse;
                fromSDK(object: _120.QueryCurrentPlanResponseSDKType): _120.QueryCurrentPlanResponse;
                toSDK(message: _120.QueryCurrentPlanResponse): _120.QueryCurrentPlanResponseSDKType;
                fromAmino(object: _120.QueryCurrentPlanResponseAmino): _120.QueryCurrentPlanResponse;
                toAmino(message: _120.QueryCurrentPlanResponse): _120.QueryCurrentPlanResponseAmino;
                fromAminoMsg(object: _120.QueryCurrentPlanResponseAminoMsg): _120.QueryCurrentPlanResponse;
                toAminoMsg(message: _120.QueryCurrentPlanResponse): _120.QueryCurrentPlanResponseAminoMsg;
                fromProtoMsg(message: _120.QueryCurrentPlanResponseProtoMsg): _120.QueryCurrentPlanResponse;
                toProto(message: _120.QueryCurrentPlanResponse): Uint8Array;
                toProtoMsg(message: _120.QueryCurrentPlanResponse): _120.QueryCurrentPlanResponseProtoMsg;
            };
            QueryAppliedPlanRequest: {
                typeUrl: string;
                encode(message: _120.QueryAppliedPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _120.QueryAppliedPlanRequest;
                fromJSON(object: any): _120.QueryAppliedPlanRequest;
                toJSON(message: _120.QueryAppliedPlanRequest): unknown;
                fromPartial(object: Partial<_120.QueryAppliedPlanRequest>): _120.QueryAppliedPlanRequest;
                fromSDK(object: _120.QueryAppliedPlanRequestSDKType): _120.QueryAppliedPlanRequest;
                toSDK(message: _120.QueryAppliedPlanRequest): _120.QueryAppliedPlanRequestSDKType;
                fromAmino(object: _120.QueryAppliedPlanRequestAmino): _120.QueryAppliedPlanRequest;
                toAmino(message: _120.QueryAppliedPlanRequest): _120.QueryAppliedPlanRequestAmino;
                fromAminoMsg(object: _120.QueryAppliedPlanRequestAminoMsg): _120.QueryAppliedPlanRequest;
                toAminoMsg(message: _120.QueryAppliedPlanRequest): _120.QueryAppliedPlanRequestAminoMsg;
                fromProtoMsg(message: _120.QueryAppliedPlanRequestProtoMsg): _120.QueryAppliedPlanRequest;
                toProto(message: _120.QueryAppliedPlanRequest): Uint8Array;
                toProtoMsg(message: _120.QueryAppliedPlanRequest): _120.QueryAppliedPlanRequestProtoMsg;
            };
            QueryAppliedPlanResponse: {
                typeUrl: string;
                encode(message: _120.QueryAppliedPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _120.QueryAppliedPlanResponse;
                fromJSON(object: any): _120.QueryAppliedPlanResponse;
                toJSON(message: _120.QueryAppliedPlanResponse): unknown;
                fromPartial(object: Partial<_120.QueryAppliedPlanResponse>): _120.QueryAppliedPlanResponse;
                fromSDK(object: _120.QueryAppliedPlanResponseSDKType): _120.QueryAppliedPlanResponse;
                toSDK(message: _120.QueryAppliedPlanResponse): _120.QueryAppliedPlanResponseSDKType;
                fromAmino(object: _120.QueryAppliedPlanResponseAmino): _120.QueryAppliedPlanResponse;
                toAmino(message: _120.QueryAppliedPlanResponse): _120.QueryAppliedPlanResponseAmino;
                fromAminoMsg(object: _120.QueryAppliedPlanResponseAminoMsg): _120.QueryAppliedPlanResponse;
                toAminoMsg(message: _120.QueryAppliedPlanResponse): _120.QueryAppliedPlanResponseAminoMsg;
                fromProtoMsg(message: _120.QueryAppliedPlanResponseProtoMsg): _120.QueryAppliedPlanResponse;
                toProto(message: _120.QueryAppliedPlanResponse): Uint8Array;
                toProtoMsg(message: _120.QueryAppliedPlanResponse): _120.QueryAppliedPlanResponseProtoMsg;
            };
            QueryUpgradedConsensusStateRequest: {
                typeUrl: string;
                encode(message: _120.QueryUpgradedConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _120.QueryUpgradedConsensusStateRequest;
                fromJSON(object: any): _120.QueryUpgradedConsensusStateRequest;
                toJSON(message: _120.QueryUpgradedConsensusStateRequest): unknown;
                fromPartial(object: Partial<_120.QueryUpgradedConsensusStateRequest>): _120.QueryUpgradedConsensusStateRequest;
                fromSDK(object: _120.QueryUpgradedConsensusStateRequestSDKType): _120.QueryUpgradedConsensusStateRequest;
                toSDK(message: _120.QueryUpgradedConsensusStateRequest): _120.QueryUpgradedConsensusStateRequestSDKType;
                fromAmino(object: _120.QueryUpgradedConsensusStateRequestAmino): _120.QueryUpgradedConsensusStateRequest;
                toAmino(message: _120.QueryUpgradedConsensusStateRequest): _120.QueryUpgradedConsensusStateRequestAmino;
                fromAminoMsg(object: _120.QueryUpgradedConsensusStateRequestAminoMsg): _120.QueryUpgradedConsensusStateRequest;
                toAminoMsg(message: _120.QueryUpgradedConsensusStateRequest): _120.QueryUpgradedConsensusStateRequestAminoMsg;
                fromProtoMsg(message: _120.QueryUpgradedConsensusStateRequestProtoMsg): _120.QueryUpgradedConsensusStateRequest;
                toProto(message: _120.QueryUpgradedConsensusStateRequest): Uint8Array;
                toProtoMsg(message: _120.QueryUpgradedConsensusStateRequest): _120.QueryUpgradedConsensusStateRequestProtoMsg;
            };
            QueryUpgradedConsensusStateResponse: {
                typeUrl: string;
                encode(message: _120.QueryUpgradedConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _120.QueryUpgradedConsensusStateResponse;
                fromJSON(object: any): _120.QueryUpgradedConsensusStateResponse;
                toJSON(message: _120.QueryUpgradedConsensusStateResponse): unknown;
                fromPartial(object: Partial<_120.QueryUpgradedConsensusStateResponse>): _120.QueryUpgradedConsensusStateResponse;
                fromSDK(object: _120.QueryUpgradedConsensusStateResponseSDKType): _120.QueryUpgradedConsensusStateResponse;
                toSDK(message: _120.QueryUpgradedConsensusStateResponse): _120.QueryUpgradedConsensusStateResponseSDKType;
                fromAmino(object: _120.QueryUpgradedConsensusStateResponseAmino): _120.QueryUpgradedConsensusStateResponse;
                toAmino(message: _120.QueryUpgradedConsensusStateResponse): _120.QueryUpgradedConsensusStateResponseAmino;
                fromAminoMsg(object: _120.QueryUpgradedConsensusStateResponseAminoMsg): _120.QueryUpgradedConsensusStateResponse;
                toAminoMsg(message: _120.QueryUpgradedConsensusStateResponse): _120.QueryUpgradedConsensusStateResponseAminoMsg;
                fromProtoMsg(message: _120.QueryUpgradedConsensusStateResponseProtoMsg): _120.QueryUpgradedConsensusStateResponse;
                toProto(message: _120.QueryUpgradedConsensusStateResponse): Uint8Array;
                toProtoMsg(message: _120.QueryUpgradedConsensusStateResponse): _120.QueryUpgradedConsensusStateResponseProtoMsg;
            };
            QueryModuleVersionsRequest: {
                typeUrl: string;
                encode(message: _120.QueryModuleVersionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _120.QueryModuleVersionsRequest;
                fromJSON(object: any): _120.QueryModuleVersionsRequest;
                toJSON(message: _120.QueryModuleVersionsRequest): unknown;
                fromPartial(object: Partial<_120.QueryModuleVersionsRequest>): _120.QueryModuleVersionsRequest;
                fromSDK(object: _120.QueryModuleVersionsRequestSDKType): _120.QueryModuleVersionsRequest;
                toSDK(message: _120.QueryModuleVersionsRequest): _120.QueryModuleVersionsRequestSDKType;
                fromAmino(object: _120.QueryModuleVersionsRequestAmino): _120.QueryModuleVersionsRequest;
                toAmino(message: _120.QueryModuleVersionsRequest): _120.QueryModuleVersionsRequestAmino;
                fromAminoMsg(object: _120.QueryModuleVersionsRequestAminoMsg): _120.QueryModuleVersionsRequest;
                toAminoMsg(message: _120.QueryModuleVersionsRequest): _120.QueryModuleVersionsRequestAminoMsg;
                fromProtoMsg(message: _120.QueryModuleVersionsRequestProtoMsg): _120.QueryModuleVersionsRequest;
                toProto(message: _120.QueryModuleVersionsRequest): Uint8Array;
                toProtoMsg(message: _120.QueryModuleVersionsRequest): _120.QueryModuleVersionsRequestProtoMsg;
            };
            QueryModuleVersionsResponse: {
                typeUrl: string;
                encode(message: _120.QueryModuleVersionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _120.QueryModuleVersionsResponse;
                fromJSON(object: any): _120.QueryModuleVersionsResponse;
                toJSON(message: _120.QueryModuleVersionsResponse): unknown;
                fromPartial(object: Partial<_120.QueryModuleVersionsResponse>): _120.QueryModuleVersionsResponse;
                fromSDK(object: _120.QueryModuleVersionsResponseSDKType): _120.QueryModuleVersionsResponse;
                toSDK(message: _120.QueryModuleVersionsResponse): _120.QueryModuleVersionsResponseSDKType;
                fromAmino(object: _120.QueryModuleVersionsResponseAmino): _120.QueryModuleVersionsResponse;
                toAmino(message: _120.QueryModuleVersionsResponse): _120.QueryModuleVersionsResponseAmino;
                fromAminoMsg(object: _120.QueryModuleVersionsResponseAminoMsg): _120.QueryModuleVersionsResponse;
                toAminoMsg(message: _120.QueryModuleVersionsResponse): _120.QueryModuleVersionsResponseAminoMsg;
                fromProtoMsg(message: _120.QueryModuleVersionsResponseProtoMsg): _120.QueryModuleVersionsResponse;
                toProto(message: _120.QueryModuleVersionsResponse): Uint8Array;
                toProtoMsg(message: _120.QueryModuleVersionsResponse): _120.QueryModuleVersionsResponseProtoMsg;
            };
            QueryAuthorityRequest: {
                typeUrl: string;
                encode(_: _120.QueryAuthorityRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _120.QueryAuthorityRequest;
                fromJSON(_: any): _120.QueryAuthorityRequest;
                toJSON(_: _120.QueryAuthorityRequest): unknown;
                fromPartial(_: Partial<_120.QueryAuthorityRequest>): _120.QueryAuthorityRequest;
                fromSDK(_: _120.QueryAuthorityRequestSDKType): _120.QueryAuthorityRequest;
                toSDK(_: _120.QueryAuthorityRequest): _120.QueryAuthorityRequestSDKType;
                fromAmino(_: _120.QueryAuthorityRequestAmino): _120.QueryAuthorityRequest;
                toAmino(_: _120.QueryAuthorityRequest): _120.QueryAuthorityRequestAmino;
                fromAminoMsg(object: _120.QueryAuthorityRequestAminoMsg): _120.QueryAuthorityRequest;
                toAminoMsg(message: _120.QueryAuthorityRequest): _120.QueryAuthorityRequestAminoMsg;
                fromProtoMsg(message: _120.QueryAuthorityRequestProtoMsg): _120.QueryAuthorityRequest;
                toProto(message: _120.QueryAuthorityRequest): Uint8Array;
                toProtoMsg(message: _120.QueryAuthorityRequest): _120.QueryAuthorityRequestProtoMsg;
            };
            QueryAuthorityResponse: {
                typeUrl: string;
                encode(message: _120.QueryAuthorityResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _120.QueryAuthorityResponse;
                fromJSON(object: any): _120.QueryAuthorityResponse;
                toJSON(message: _120.QueryAuthorityResponse): unknown;
                fromPartial(object: Partial<_120.QueryAuthorityResponse>): _120.QueryAuthorityResponse;
                fromSDK(object: _120.QueryAuthorityResponseSDKType): _120.QueryAuthorityResponse;
                toSDK(message: _120.QueryAuthorityResponse): _120.QueryAuthorityResponseSDKType;
                fromAmino(object: _120.QueryAuthorityResponseAmino): _120.QueryAuthorityResponse;
                toAmino(message: _120.QueryAuthorityResponse): _120.QueryAuthorityResponseAmino;
                fromAminoMsg(object: _120.QueryAuthorityResponseAminoMsg): _120.QueryAuthorityResponse;
                toAminoMsg(message: _120.QueryAuthorityResponse): _120.QueryAuthorityResponseAminoMsg;
                fromProtoMsg(message: _120.QueryAuthorityResponseProtoMsg): _120.QueryAuthorityResponse;
                toProto(message: _120.QueryAuthorityResponse): Uint8Array;
                toProtoMsg(message: _120.QueryAuthorityResponse): _120.QueryAuthorityResponseProtoMsg;
            };
        };
    }
    namespace vesting {
        namespace module {
            const v1: {
                protobufPackage: "cosmos.vesting.module.v1";
                Module: {
                    typeUrl: string;
                    encode(_: _123.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _123.Module;
                    fromJSON(_: any): _123.Module;
                    toJSON(_: _123.Module): unknown;
                    fromPartial(_: Partial<_123.Module>): _123.Module;
                    fromSDK(_: _123.ModuleSDKType): _123.Module;
                    toSDK(_: _123.Module): _123.ModuleSDKType;
                    fromAmino(_: _123.ModuleAmino): _123.Module;
                    toAmino(_: _123.Module): _123.ModuleAmino;
                    fromAminoMsg(object: _123.ModuleAminoMsg): _123.Module;
                    toAminoMsg(message: _123.Module): _123.ModuleAminoMsg;
                    fromProtoMsg(message: _123.ModuleProtoMsg): _123.Module;
                    toProto(message: _123.Module): Uint8Array;
                    toProtoMsg(message: _123.Module): _123.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            Msg: typeof _239.Msg;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _124.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPermanentLockedAccount(value: _124.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPeriodicVestingAccount(value: _124.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _124.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _124.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _124.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _124.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _124.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _124.MsgCreatePeriodicVestingAccount;
                    };
                };
                toJSON: {
                    createVestingAccount(value: _124.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createPermanentLockedAccount(value: _124.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createPeriodicVestingAccount(value: _124.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createVestingAccount(value: any): {
                        typeUrl: string;
                        value: _124.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: any): {
                        typeUrl: string;
                        value: _124.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: any): {
                        typeUrl: string;
                        value: _124.MsgCreatePeriodicVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _124.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _124.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _124.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _124.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _124.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _124.MsgCreatePeriodicVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _124.MsgCreateVestingAccount) => _124.MsgCreateVestingAccountAmino;
                    fromAmino: (object: _124.MsgCreateVestingAccountAmino) => _124.MsgCreateVestingAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount": {
                    aminoType: string;
                    toAmino: (message: _124.MsgCreatePermanentLockedAccount) => _124.MsgCreatePermanentLockedAccountAmino;
                    fromAmino: (object: _124.MsgCreatePermanentLockedAccountAmino) => _124.MsgCreatePermanentLockedAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _124.MsgCreatePeriodicVestingAccount) => _124.MsgCreatePeriodicVestingAccountAmino;
                    fromAmino: (object: _124.MsgCreatePeriodicVestingAccountAmino) => _124.MsgCreatePeriodicVestingAccount;
                };
            };
            protobufPackage: "cosmos.vesting.v1beta1";
            BaseVestingAccount: {
                typeUrl: string;
                encode(message: _125.BaseVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _125.BaseVestingAccount;
                fromJSON(object: any): _125.BaseVestingAccount;
                toJSON(message: _125.BaseVestingAccount): unknown;
                fromPartial(object: Partial<_125.BaseVestingAccount>): _125.BaseVestingAccount;
                fromSDK(object: _125.BaseVestingAccountSDKType): _125.BaseVestingAccount;
                toSDK(message: _125.BaseVestingAccount): _125.BaseVestingAccountSDKType;
                fromAmino(object: _125.BaseVestingAccountAmino): _125.BaseVestingAccount;
                toAmino(message: _125.BaseVestingAccount): _125.BaseVestingAccountAmino;
                fromAminoMsg(object: _125.BaseVestingAccountAminoMsg): _125.BaseVestingAccount;
                toAminoMsg(message: _125.BaseVestingAccount): _125.BaseVestingAccountAminoMsg;
                fromProtoMsg(message: _125.BaseVestingAccountProtoMsg): _125.BaseVestingAccount;
                toProto(message: _125.BaseVestingAccount): Uint8Array;
                toProtoMsg(message: _125.BaseVestingAccount): _125.BaseVestingAccountProtoMsg;
            };
            ContinuousVestingAccount: {
                typeUrl: string;
                encode(message: _125.ContinuousVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _125.ContinuousVestingAccount;
                fromJSON(object: any): _125.ContinuousVestingAccount;
                toJSON(message: _125.ContinuousVestingAccount): unknown;
                fromPartial(object: Partial<_125.ContinuousVestingAccount>): _125.ContinuousVestingAccount;
                fromSDK(object: _125.ContinuousVestingAccountSDKType): _125.ContinuousVestingAccount;
                toSDK(message: _125.ContinuousVestingAccount): _125.ContinuousVestingAccountSDKType;
                fromAmino(object: _125.ContinuousVestingAccountAmino): _125.ContinuousVestingAccount;
                toAmino(message: _125.ContinuousVestingAccount): _125.ContinuousVestingAccountAmino;
                fromAminoMsg(object: _125.ContinuousVestingAccountAminoMsg): _125.ContinuousVestingAccount;
                toAminoMsg(message: _125.ContinuousVestingAccount): _125.ContinuousVestingAccountAminoMsg;
                fromProtoMsg(message: _125.ContinuousVestingAccountProtoMsg): _125.ContinuousVestingAccount;
                toProto(message: _125.ContinuousVestingAccount): Uint8Array;
                toProtoMsg(message: _125.ContinuousVestingAccount): _125.ContinuousVestingAccountProtoMsg;
            };
            DelayedVestingAccount: {
                typeUrl: string;
                encode(message: _125.DelayedVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _125.DelayedVestingAccount;
                fromJSON(object: any): _125.DelayedVestingAccount;
                toJSON(message: _125.DelayedVestingAccount): unknown;
                fromPartial(object: Partial<_125.DelayedVestingAccount>): _125.DelayedVestingAccount;
                fromSDK(object: _125.DelayedVestingAccountSDKType): _125.DelayedVestingAccount;
                toSDK(message: _125.DelayedVestingAccount): _125.DelayedVestingAccountSDKType;
                fromAmino(object: _125.DelayedVestingAccountAmino): _125.DelayedVestingAccount;
                toAmino(message: _125.DelayedVestingAccount): _125.DelayedVestingAccountAmino;
                fromAminoMsg(object: _125.DelayedVestingAccountAminoMsg): _125.DelayedVestingAccount;
                toAminoMsg(message: _125.DelayedVestingAccount): _125.DelayedVestingAccountAminoMsg;
                fromProtoMsg(message: _125.DelayedVestingAccountProtoMsg): _125.DelayedVestingAccount;
                toProto(message: _125.DelayedVestingAccount): Uint8Array;
                toProtoMsg(message: _125.DelayedVestingAccount): _125.DelayedVestingAccountProtoMsg;
            };
            Period: {
                typeUrl: string;
                encode(message: _125.Period, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _125.Period;
                fromJSON(object: any): _125.Period;
                toJSON(message: _125.Period): unknown;
                fromPartial(object: Partial<_125.Period>): _125.Period;
                fromSDK(object: _125.PeriodSDKType): _125.Period;
                toSDK(message: _125.Period): _125.PeriodSDKType;
                fromAmino(object: _125.PeriodAmino): _125.Period;
                toAmino(message: _125.Period): _125.PeriodAmino;
                fromAminoMsg(object: _125.PeriodAminoMsg): _125.Period;
                toAminoMsg(message: _125.Period): _125.PeriodAminoMsg;
                fromProtoMsg(message: _125.PeriodProtoMsg): _125.Period;
                toProto(message: _125.Period): Uint8Array;
                toProtoMsg(message: _125.Period): _125.PeriodProtoMsg;
            };
            PeriodicVestingAccount: {
                typeUrl: string;
                encode(message: _125.PeriodicVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _125.PeriodicVestingAccount;
                fromJSON(object: any): _125.PeriodicVestingAccount;
                toJSON(message: _125.PeriodicVestingAccount): unknown;
                fromPartial(object: Partial<_125.PeriodicVestingAccount>): _125.PeriodicVestingAccount;
                fromSDK(object: _125.PeriodicVestingAccountSDKType): _125.PeriodicVestingAccount;
                toSDK(message: _125.PeriodicVestingAccount): _125.PeriodicVestingAccountSDKType;
                fromAmino(object: _125.PeriodicVestingAccountAmino): _125.PeriodicVestingAccount;
                toAmino(message: _125.PeriodicVestingAccount): _125.PeriodicVestingAccountAmino;
                fromAminoMsg(object: _125.PeriodicVestingAccountAminoMsg): _125.PeriodicVestingAccount;
                toAminoMsg(message: _125.PeriodicVestingAccount): _125.PeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _125.PeriodicVestingAccountProtoMsg): _125.PeriodicVestingAccount;
                toProto(message: _125.PeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _125.PeriodicVestingAccount): _125.PeriodicVestingAccountProtoMsg;
            };
            PermanentLockedAccount: {
                typeUrl: string;
                encode(message: _125.PermanentLockedAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _125.PermanentLockedAccount;
                fromJSON(object: any): _125.PermanentLockedAccount;
                toJSON(message: _125.PermanentLockedAccount): unknown;
                fromPartial(object: Partial<_125.PermanentLockedAccount>): _125.PermanentLockedAccount;
                fromSDK(object: _125.PermanentLockedAccountSDKType): _125.PermanentLockedAccount;
                toSDK(message: _125.PermanentLockedAccount): _125.PermanentLockedAccountSDKType;
                fromAmino(object: _125.PermanentLockedAccountAmino): _125.PermanentLockedAccount;
                toAmino(message: _125.PermanentLockedAccount): _125.PermanentLockedAccountAmino;
                fromAminoMsg(object: _125.PermanentLockedAccountAminoMsg): _125.PermanentLockedAccount;
                toAminoMsg(message: _125.PermanentLockedAccount): _125.PermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _125.PermanentLockedAccountProtoMsg): _125.PermanentLockedAccount;
                toProto(message: _125.PermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _125.PermanentLockedAccount): _125.PermanentLockedAccountProtoMsg;
            };
            MsgCreateVestingAccount: {
                typeUrl: string;
                encode(message: _124.MsgCreateVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _124.MsgCreateVestingAccount;
                fromJSON(object: any): _124.MsgCreateVestingAccount;
                toJSON(message: _124.MsgCreateVestingAccount): unknown;
                fromPartial(object: Partial<_124.MsgCreateVestingAccount>): _124.MsgCreateVestingAccount;
                fromSDK(object: _124.MsgCreateVestingAccountSDKType): _124.MsgCreateVestingAccount;
                toSDK(message: _124.MsgCreateVestingAccount): _124.MsgCreateVestingAccountSDKType;
                fromAmino(object: _124.MsgCreateVestingAccountAmino): _124.MsgCreateVestingAccount;
                toAmino(message: _124.MsgCreateVestingAccount): _124.MsgCreateVestingAccountAmino;
                fromAminoMsg(object: _124.MsgCreateVestingAccountAminoMsg): _124.MsgCreateVestingAccount;
                toAminoMsg(message: _124.MsgCreateVestingAccount): _124.MsgCreateVestingAccountAminoMsg;
                fromProtoMsg(message: _124.MsgCreateVestingAccountProtoMsg): _124.MsgCreateVestingAccount;
                toProto(message: _124.MsgCreateVestingAccount): Uint8Array;
                toProtoMsg(message: _124.MsgCreateVestingAccount): _124.MsgCreateVestingAccountProtoMsg;
            };
            MsgCreateVestingAccountResponse: {
                typeUrl: string;
                encode(_: _124.MsgCreateVestingAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _124.MsgCreateVestingAccountResponse;
                fromJSON(_: any): _124.MsgCreateVestingAccountResponse;
                toJSON(_: _124.MsgCreateVestingAccountResponse): unknown;
                fromPartial(_: Partial<_124.MsgCreateVestingAccountResponse>): _124.MsgCreateVestingAccountResponse;
                fromSDK(_: _124.MsgCreateVestingAccountResponseSDKType): _124.MsgCreateVestingAccountResponse;
                toSDK(_: _124.MsgCreateVestingAccountResponse): _124.MsgCreateVestingAccountResponseSDKType;
                fromAmino(_: _124.MsgCreateVestingAccountResponseAmino): _124.MsgCreateVestingAccountResponse;
                toAmino(_: _124.MsgCreateVestingAccountResponse): _124.MsgCreateVestingAccountResponseAmino;
                fromAminoMsg(object: _124.MsgCreateVestingAccountResponseAminoMsg): _124.MsgCreateVestingAccountResponse;
                toAminoMsg(message: _124.MsgCreateVestingAccountResponse): _124.MsgCreateVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _124.MsgCreateVestingAccountResponseProtoMsg): _124.MsgCreateVestingAccountResponse;
                toProto(message: _124.MsgCreateVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _124.MsgCreateVestingAccountResponse): _124.MsgCreateVestingAccountResponseProtoMsg;
            };
            MsgCreatePermanentLockedAccount: {
                typeUrl: string;
                encode(message: _124.MsgCreatePermanentLockedAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _124.MsgCreatePermanentLockedAccount;
                fromJSON(object: any): _124.MsgCreatePermanentLockedAccount;
                toJSON(message: _124.MsgCreatePermanentLockedAccount): unknown;
                fromPartial(object: Partial<_124.MsgCreatePermanentLockedAccount>): _124.MsgCreatePermanentLockedAccount;
                fromSDK(object: _124.MsgCreatePermanentLockedAccountSDKType): _124.MsgCreatePermanentLockedAccount;
                toSDK(message: _124.MsgCreatePermanentLockedAccount): _124.MsgCreatePermanentLockedAccountSDKType;
                fromAmino(object: _124.MsgCreatePermanentLockedAccountAmino): _124.MsgCreatePermanentLockedAccount;
                toAmino(message: _124.MsgCreatePermanentLockedAccount): _124.MsgCreatePermanentLockedAccountAmino;
                fromAminoMsg(object: _124.MsgCreatePermanentLockedAccountAminoMsg): _124.MsgCreatePermanentLockedAccount;
                toAminoMsg(message: _124.MsgCreatePermanentLockedAccount): _124.MsgCreatePermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _124.MsgCreatePermanentLockedAccountProtoMsg): _124.MsgCreatePermanentLockedAccount;
                toProto(message: _124.MsgCreatePermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _124.MsgCreatePermanentLockedAccount): _124.MsgCreatePermanentLockedAccountProtoMsg;
            };
            MsgCreatePermanentLockedAccountResponse: {
                typeUrl: string;
                encode(_: _124.MsgCreatePermanentLockedAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _124.MsgCreatePermanentLockedAccountResponse;
                fromJSON(_: any): _124.MsgCreatePermanentLockedAccountResponse;
                toJSON(_: _124.MsgCreatePermanentLockedAccountResponse): unknown;
                fromPartial(_: Partial<_124.MsgCreatePermanentLockedAccountResponse>): _124.MsgCreatePermanentLockedAccountResponse;
                fromSDK(_: _124.MsgCreatePermanentLockedAccountResponseSDKType): _124.MsgCreatePermanentLockedAccountResponse;
                toSDK(_: _124.MsgCreatePermanentLockedAccountResponse): _124.MsgCreatePermanentLockedAccountResponseSDKType;
                fromAmino(_: _124.MsgCreatePermanentLockedAccountResponseAmino): _124.MsgCreatePermanentLockedAccountResponse;
                toAmino(_: _124.MsgCreatePermanentLockedAccountResponse): _124.MsgCreatePermanentLockedAccountResponseAmino;
                fromAminoMsg(object: _124.MsgCreatePermanentLockedAccountResponseAminoMsg): _124.MsgCreatePermanentLockedAccountResponse;
                toAminoMsg(message: _124.MsgCreatePermanentLockedAccountResponse): _124.MsgCreatePermanentLockedAccountResponseAminoMsg;
                fromProtoMsg(message: _124.MsgCreatePermanentLockedAccountResponseProtoMsg): _124.MsgCreatePermanentLockedAccountResponse;
                toProto(message: _124.MsgCreatePermanentLockedAccountResponse): Uint8Array;
                toProtoMsg(message: _124.MsgCreatePermanentLockedAccountResponse): _124.MsgCreatePermanentLockedAccountResponseProtoMsg;
            };
            MsgCreatePeriodicVestingAccount: {
                typeUrl: string;
                encode(message: _124.MsgCreatePeriodicVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _124.MsgCreatePeriodicVestingAccount;
                fromJSON(object: any): _124.MsgCreatePeriodicVestingAccount;
                toJSON(message: _124.MsgCreatePeriodicVestingAccount): unknown;
                fromPartial(object: Partial<_124.MsgCreatePeriodicVestingAccount>): _124.MsgCreatePeriodicVestingAccount;
                fromSDK(object: _124.MsgCreatePeriodicVestingAccountSDKType): _124.MsgCreatePeriodicVestingAccount;
                toSDK(message: _124.MsgCreatePeriodicVestingAccount): _124.MsgCreatePeriodicVestingAccountSDKType;
                fromAmino(object: _124.MsgCreatePeriodicVestingAccountAmino): _124.MsgCreatePeriodicVestingAccount;
                toAmino(message: _124.MsgCreatePeriodicVestingAccount): _124.MsgCreatePeriodicVestingAccountAmino;
                fromAminoMsg(object: _124.MsgCreatePeriodicVestingAccountAminoMsg): _124.MsgCreatePeriodicVestingAccount;
                toAminoMsg(message: _124.MsgCreatePeriodicVestingAccount): _124.MsgCreatePeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _124.MsgCreatePeriodicVestingAccountProtoMsg): _124.MsgCreatePeriodicVestingAccount;
                toProto(message: _124.MsgCreatePeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _124.MsgCreatePeriodicVestingAccount): _124.MsgCreatePeriodicVestingAccountProtoMsg;
            };
            MsgCreatePeriodicVestingAccountResponse: {
                typeUrl: string;
                encode(_: _124.MsgCreatePeriodicVestingAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _124.MsgCreatePeriodicVestingAccountResponse;
                fromJSON(_: any): _124.MsgCreatePeriodicVestingAccountResponse;
                toJSON(_: _124.MsgCreatePeriodicVestingAccountResponse): unknown;
                fromPartial(_: Partial<_124.MsgCreatePeriodicVestingAccountResponse>): _124.MsgCreatePeriodicVestingAccountResponse;
                fromSDK(_: _124.MsgCreatePeriodicVestingAccountResponseSDKType): _124.MsgCreatePeriodicVestingAccountResponse;
                toSDK(_: _124.MsgCreatePeriodicVestingAccountResponse): _124.MsgCreatePeriodicVestingAccountResponseSDKType;
                fromAmino(_: _124.MsgCreatePeriodicVestingAccountResponseAmino): _124.MsgCreatePeriodicVestingAccountResponse;
                toAmino(_: _124.MsgCreatePeriodicVestingAccountResponse): _124.MsgCreatePeriodicVestingAccountResponseAmino;
                fromAminoMsg(object: _124.MsgCreatePeriodicVestingAccountResponseAminoMsg): _124.MsgCreatePeriodicVestingAccountResponse;
                toAminoMsg(message: _124.MsgCreatePeriodicVestingAccountResponse): _124.MsgCreatePeriodicVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _124.MsgCreatePeriodicVestingAccountResponseProtoMsg): _124.MsgCreatePeriodicVestingAccountResponse;
                toProto(message: _124.MsgCreatePeriodicVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _124.MsgCreatePeriodicVestingAccountResponse): _124.MsgCreatePeriodicVestingAccountResponseProtoMsg;
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
                circuit: {
                    v1: any;
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
                    v1beta1: _206.QueryClientImpl;
                };
                authz: {
                    v1beta1: _207.QueryClientImpl;
                };
                bank: {
                    v1beta1: _208.QueryClientImpl;
                };
                base: {
                    node: {
                        v1beta1: _209.ServiceClientImpl;
                    };
                    tendermint: {
                        v1beta1: _210.ServiceClientImpl;
                    };
                };
                circuit: {
                    v1: _211.QueryClientImpl;
                };
                consensus: {
                    v1: _212.QueryClientImpl;
                };
                distribution: {
                    v1beta1: _213.QueryClientImpl;
                };
                feegrant: {
                    v1beta1: _214.QueryClientImpl;
                };
                gov: {
                    v1: _215.QueryClientImpl;
                    v1beta1: _216.QueryClientImpl;
                };
                group: {
                    v1: _217.QueryClientImpl;
                };
                mint: {
                    v1beta1: _218.QueryClientImpl;
                };
                nft: {
                    v1beta1: _219.QueryClientImpl;
                };
                orm: {
                    query: {
                        v1alpha1: _220.QueryClientImpl;
                    };
                };
                params: {
                    v1beta1: _221.QueryClientImpl;
                };
                staking: {
                    v1beta1: _222.QueryClientImpl;
                };
                tx: {
                    v1beta1: _223.ServiceClientImpl;
                };
                upgrade: {
                    v1beta1: _224.QueryClientImpl;
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _188.LCDQueryClient;
                };
                authz: {
                    v1beta1: _189.LCDQueryClient;
                };
                bank: {
                    v1beta1: _190.LCDQueryClient;
                };
                base: {
                    node: {
                        v1beta1: _191.LCDQueryClient;
                    };
                    tendermint: {
                        v1beta1: _192.LCDQueryClient;
                    };
                };
                circuit: {
                    v1: _193.LCDQueryClient;
                };
                consensus: {
                    v1: _194.LCDQueryClient;
                };
                distribution: {
                    v1beta1: _195.LCDQueryClient;
                };
                feegrant: {
                    v1beta1: _196.LCDQueryClient;
                };
                gov: {
                    v1: _197.LCDQueryClient;
                    v1beta1: _198.LCDQueryClient;
                };
                group: {
                    v1: _199.LCDQueryClient;
                };
                mint: {
                    v1beta1: _200.LCDQueryClient;
                };
                nft: {
                    v1beta1: _201.LCDQueryClient;
                };
                params: {
                    v1beta1: _202.LCDQueryClient;
                };
                staking: {
                    v1beta1: _203.LCDQueryClient;
                };
                tx: {
                    v1beta1: _204.LCDQueryClient;
                };
                upgrade: {
                    v1beta1: _205.LCDQueryClient;
                };
            };
        }>;
    };
}

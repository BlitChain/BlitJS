import * as _20 from "./app/runtime/v1alpha1/module";
import * as _21 from "./auth/module/v1/module";
import * as _22 from "./auth/v1beta1/auth";
import * as _23 from "./auth/v1beta1/genesis";
import * as _24 from "./auth/v1beta1/query";
import * as _25 from "./auth/v1beta1/tx";
import * as _26 from "./authz/module/v1/module";
import * as _27 from "./authz/v1beta1/authz";
import * as _28 from "./authz/v1beta1/event";
import * as _29 from "./authz/v1beta1/genesis";
import * as _30 from "./authz/v1beta1/query";
import * as _31 from "./authz/v1beta1/tx";
import * as _32 from "./bank/module/v1/module";
import * as _33 from "./bank/v1beta1/authz";
import * as _34 from "./bank/v1beta1/bank";
import * as _35 from "./bank/v1beta1/genesis";
import * as _36 from "./bank/v1beta1/query";
import * as _37 from "./bank/v1beta1/tx";
import * as _38 from "./base/abci/v1beta1/abci";
import * as _39 from "./base/node/v1beta1/query";
import * as _40 from "./base/query/v1beta1/pagination";
import * as _41 from "./base/reflection/v2alpha1/reflection";
import * as _42 from "./base/tendermint/v1beta1/query";
import * as _43 from "./base/tendermint/v1beta1/types";
import * as _44 from "./base/v1beta1/coin";
import * as _45 from "./circuit/module/v1/module";
import * as _46 from "./circuit/v1/query";
import * as _47 from "./circuit/v1/tx";
import * as _48 from "./circuit/v1/types";
import * as _49 from "./consensus/module/v1/module";
import * as _50 from "./consensus/v1/query";
import * as _51 from "./consensus/v1/tx";
import * as _52 from "./crisis/module/v1/module";
import * as _53 from "./crypto/ed25519/keys";
import * as _54 from "./crypto/hd/v1/hd";
import * as _55 from "./crypto/keyring/v1/record";
import * as _56 from "./crypto/multisig/keys";
import * as _57 from "./crypto/secp256k1/keys";
import * as _58 from "./crypto/secp256r1/keys";
import * as _59 from "./distribution/module/v1/module";
import * as _60 from "./distribution/v1beta1/distribution";
import * as _61 from "./distribution/v1beta1/genesis";
import * as _62 from "./distribution/v1beta1/query";
import * as _63 from "./distribution/v1beta1/tx";
import * as _64 from "./evidence/module/v1/module";
import * as _65 from "./feegrant/module/v1/module";
import * as _66 from "./feegrant/v1beta1/feegrant";
import * as _67 from "./feegrant/v1beta1/genesis";
import * as _68 from "./feegrant/v1beta1/query";
import * as _69 from "./feegrant/v1beta1/tx";
import * as _70 from "./genutil/module/v1/module";
import * as _71 from "./gov/module/v1/module";
import * as _72 from "./gov/v1/genesis";
import * as _73 from "./gov/v1/gov";
import * as _74 from "./gov/v1/query";
import * as _75 from "./gov/v1/tx";
import * as _76 from "./gov/v1beta1/genesis";
import * as _77 from "./gov/v1beta1/gov";
import * as _78 from "./gov/v1beta1/query";
import * as _79 from "./gov/v1beta1/tx";
import * as _80 from "./group/module/v1/module";
import * as _81 from "./group/v1/events";
import * as _82 from "./group/v1/genesis";
import * as _83 from "./group/v1/query";
import * as _84 from "./group/v1/tx";
import * as _85 from "./group/v1/types";
import * as _86 from "./ics23/v1/proofs";
import * as _87 from "./mint/module/v1/module";
import * as _88 from "./mint/v1beta1/genesis";
import * as _89 from "./mint/v1beta1/mint";
import * as _90 from "./mint/v1beta1/query";
import * as _91 from "./mint/v1beta1/tx";
import * as _93 from "./nft/module/v1/module";
import * as _94 from "./nft/v1beta1/event";
import * as _95 from "./nft/v1beta1/genesis";
import * as _96 from "./nft/v1beta1/nft";
import * as _97 from "./nft/v1beta1/query";
import * as _98 from "./nft/v1beta1/tx";
import * as _99 from "./orm/module/v1alpha1/module";
import * as _100 from "./orm/query/v1alpha1/query";
import * as _101 from "./params/module/v1/module";
import * as _102 from "./params/v1beta1/params";
import * as _103 from "./params/v1beta1/query";
import * as _105 from "./reflection/v1/reflection";
import * as _106 from "./slashing/module/v1/module";
import * as _107 from "./staking/module/v1/module";
import * as _108 from "./staking/v1beta1/authz";
import * as _109 from "./staking/v1beta1/genesis";
import * as _110 from "./staking/v1beta1/query";
import * as _111 from "./staking/v1beta1/staking";
import * as _112 from "./staking/v1beta1/tx";
import * as _113 from "./store/internal/kv/v1beta1/kv";
import * as _114 from "./store/snapshots/v1/snapshot";
import * as _115 from "./store/streaming/abci/grpc";
import * as _116 from "./store/v1beta1/commit_info";
import * as _117 from "./store/v1beta1/listening";
import * as _118 from "./tx/config/v1/config";
import * as _119 from "./tx/signing/v1beta1/signing";
import * as _120 from "./tx/v1beta1/service";
import * as _121 from "./tx/v1beta1/tx";
import * as _122 from "./upgrade/module/v1/module";
import * as _123 from "./upgrade/v1beta1/query";
import * as _124 from "./upgrade/v1beta1/tx";
import * as _125 from "./upgrade/v1beta1/upgrade";
import * as _126 from "./vesting/module/v1/module";
import * as _127 from "./vesting/v1beta1/tx";
import * as _128 from "./vesting/v1beta1/vesting";
import * as _224 from "./auth/v1beta1/query.lcd";
import * as _225 from "./authz/v1beta1/query.lcd";
import * as _226 from "./bank/v1beta1/query.lcd";
import * as _227 from "./base/node/v1beta1/query.lcd";
import * as _228 from "./base/tendermint/v1beta1/query.lcd";
import * as _229 from "./circuit/v1/query.lcd";
import * as _230 from "./consensus/v1/query.lcd";
import * as _231 from "./distribution/v1beta1/query.lcd";
import * as _232 from "./feegrant/v1beta1/query.lcd";
import * as _233 from "./gov/v1/query.lcd";
import * as _234 from "./gov/v1beta1/query.lcd";
import * as _235 from "./group/v1/query.lcd";
import * as _236 from "./mint/v1beta1/query.lcd";
import * as _237 from "./nft/v1beta1/query.lcd";
import * as _238 from "./params/v1beta1/query.lcd";
import * as _239 from "./staking/v1beta1/query.lcd";
import * as _240 from "./tx/v1beta1/service.lcd";
import * as _241 from "./upgrade/v1beta1/query.lcd";
import * as _242 from "./auth/v1beta1/query.rpc.Query";
import * as _243 from "./authz/v1beta1/query.rpc.Query";
import * as _244 from "./bank/v1beta1/query.rpc.Query";
import * as _245 from "./base/node/v1beta1/query.rpc.Service";
import * as _246 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _247 from "./circuit/v1/query.rpc.Query";
import * as _248 from "./consensus/v1/query.rpc.Query";
import * as _249 from "./distribution/v1beta1/query.rpc.Query";
import * as _250 from "./feegrant/v1beta1/query.rpc.Query";
import * as _251 from "./gov/v1/query.rpc.Query";
import * as _252 from "./gov/v1beta1/query.rpc.Query";
import * as _253 from "./group/v1/query.rpc.Query";
import * as _254 from "./mint/v1beta1/query.rpc.Query";
import * as _255 from "./nft/v1beta1/query.rpc.Query";
import * as _256 from "./orm/query/v1alpha1/query.rpc.Query";
import * as _257 from "./params/v1beta1/query.rpc.Query";
import * as _258 from "./staking/v1beta1/query.rpc.Query";
import * as _259 from "./tx/v1beta1/service.rpc.Service";
import * as _260 from "./upgrade/v1beta1/query.rpc.Query";
import * as _261 from "./auth/v1beta1/tx.rpc.msg";
import * as _262 from "./authz/v1beta1/tx.rpc.msg";
import * as _263 from "./bank/v1beta1/tx.rpc.msg";
import * as _264 from "./circuit/v1/tx.rpc.msg";
import * as _265 from "./consensus/v1/tx.rpc.msg";
import * as _266 from "./distribution/v1beta1/tx.rpc.msg";
import * as _267 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _268 from "./gov/v1/tx.rpc.msg";
import * as _269 from "./gov/v1beta1/tx.rpc.msg";
import * as _270 from "./group/v1/tx.rpc.msg";
import * as _271 from "./mint/v1beta1/tx.rpc.msg";
import * as _272 from "./nft/v1beta1/tx.rpc.msg";
import * as _273 from "./staking/v1beta1/tx.rpc.msg";
import * as _274 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _275 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace app {
        namespace runtime {
            const v1alpha1: {
                protobufPackage: "cosmos.app.runtime.v1alpha1";
                Module: {
                    typeUrl: string;
                    encode(message: _20.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _20.Module;
                    fromJSON(object: any): _20.Module;
                    toJSON(message: _20.Module): unknown;
                    fromPartial(object: Partial<_20.Module>): _20.Module;
                    fromAmino(object: _20.ModuleAmino): _20.Module;
                    toAmino(message: _20.Module): _20.ModuleAmino;
                    fromAminoMsg(object: _20.ModuleAminoMsg): _20.Module;
                    toAminoMsg(message: _20.Module): _20.ModuleAminoMsg;
                    fromProtoMsg(message: _20.ModuleProtoMsg): _20.Module;
                    toProto(message: _20.Module): Uint8Array;
                    toProtoMsg(message: _20.Module): _20.ModuleProtoMsg;
                };
                StoreKeyConfig: {
                    typeUrl: string;
                    encode(message: _20.StoreKeyConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _20.StoreKeyConfig;
                    fromJSON(object: any): _20.StoreKeyConfig;
                    toJSON(message: _20.StoreKeyConfig): unknown;
                    fromPartial(object: Partial<_20.StoreKeyConfig>): _20.StoreKeyConfig;
                    fromAmino(object: _20.StoreKeyConfigAmino): _20.StoreKeyConfig;
                    toAmino(message: _20.StoreKeyConfig): _20.StoreKeyConfigAmino;
                    fromAminoMsg(object: _20.StoreKeyConfigAminoMsg): _20.StoreKeyConfig;
                    toAminoMsg(message: _20.StoreKeyConfig): _20.StoreKeyConfigAminoMsg;
                    fromProtoMsg(message: _20.StoreKeyConfigProtoMsg): _20.StoreKeyConfig;
                    toProto(message: _20.StoreKeyConfig): Uint8Array;
                    toProtoMsg(message: _20.StoreKeyConfig): _20.StoreKeyConfigProtoMsg;
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
                    encode(message: _21.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _21.Module;
                    fromJSON(object: any): _21.Module;
                    toJSON(message: _21.Module): unknown;
                    fromPartial(object: Partial<_21.Module>): _21.Module;
                    fromAmino(object: _21.ModuleAmino): _21.Module;
                    toAmino(message: _21.Module): _21.ModuleAmino;
                    fromAminoMsg(object: _21.ModuleAminoMsg): _21.Module;
                    toAminoMsg(message: _21.Module): _21.ModuleAminoMsg;
                    fromProtoMsg(message: _21.ModuleProtoMsg): _21.Module;
                    toProto(message: _21.Module): Uint8Array;
                    toProtoMsg(message: _21.Module): _21.ModuleProtoMsg;
                };
                ModuleAccountPermission: {
                    typeUrl: string;
                    encode(message: _21.ModuleAccountPermission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _21.ModuleAccountPermission;
                    fromJSON(object: any): _21.ModuleAccountPermission;
                    toJSON(message: _21.ModuleAccountPermission): unknown;
                    fromPartial(object: Partial<_21.ModuleAccountPermission>): _21.ModuleAccountPermission;
                    fromAmino(object: _21.ModuleAccountPermissionAmino): _21.ModuleAccountPermission;
                    toAmino(message: _21.ModuleAccountPermission): _21.ModuleAccountPermissionAmino;
                    fromAminoMsg(object: _21.ModuleAccountPermissionAminoMsg): _21.ModuleAccountPermission;
                    toAminoMsg(message: _21.ModuleAccountPermission): _21.ModuleAccountPermissionAminoMsg;
                    fromProtoMsg(message: _21.ModuleAccountPermissionProtoMsg): _21.ModuleAccountPermission;
                    toProto(message: _21.ModuleAccountPermission): Uint8Array;
                    toProtoMsg(message: _21.ModuleAccountPermission): _21.ModuleAccountPermissionProtoMsg;
                };
            };
        }
        const v1beta1: {
            Msg: typeof _261.Msg;
            Query: typeof _242.Query;
            QueryClientImpl: typeof _242.QueryClientImpl;
            LCDQueryClient: typeof _224.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    updateParams(value: _25.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    updateParams(value: _25.MsgUpdateParams): {
                        typeUrl: string;
                        value: _25.MsgUpdateParams;
                    };
                };
                toJSON: {
                    updateParams(value: _25.MsgUpdateParams): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _25.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    updateParams(value: _25.MsgUpdateParams): {
                        typeUrl: string;
                        value: _25.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.auth.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _25.MsgUpdateParams) => _25.MsgUpdateParamsAmino;
                    fromAmino: (object: _25.MsgUpdateParamsAmino) => _25.MsgUpdateParams;
                };
            };
            protobufPackage: "cosmos.auth.v1beta1";
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _25.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _25.MsgUpdateParams;
                fromJSON(object: any): _25.MsgUpdateParams;
                toJSON(message: _25.MsgUpdateParams): unknown;
                fromPartial(object: Partial<_25.MsgUpdateParams>): _25.MsgUpdateParams;
                fromAmino(object: _25.MsgUpdateParamsAmino): _25.MsgUpdateParams;
                toAmino(message: _25.MsgUpdateParams): _25.MsgUpdateParamsAmino;
                fromAminoMsg(object: _25.MsgUpdateParamsAminoMsg): _25.MsgUpdateParams;
                toAminoMsg(message: _25.MsgUpdateParams): _25.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _25.MsgUpdateParamsProtoMsg): _25.MsgUpdateParams;
                toProto(message: _25.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _25.MsgUpdateParams): _25.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _25.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _25.MsgUpdateParamsResponse;
                fromJSON(_: any): _25.MsgUpdateParamsResponse;
                toJSON(_: _25.MsgUpdateParamsResponse): unknown;
                fromPartial(_: Partial<_25.MsgUpdateParamsResponse>): _25.MsgUpdateParamsResponse;
                fromAmino(_: _25.MsgUpdateParamsResponseAmino): _25.MsgUpdateParamsResponse;
                toAmino(_: _25.MsgUpdateParamsResponse): _25.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _25.MsgUpdateParamsResponseAminoMsg): _25.MsgUpdateParamsResponse;
                toAminoMsg(message: _25.MsgUpdateParamsResponse): _25.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _25.MsgUpdateParamsResponseProtoMsg): _25.MsgUpdateParamsResponse;
                toProto(message: _25.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _25.MsgUpdateParamsResponse): _25.MsgUpdateParamsResponseProtoMsg;
            };
            QueryAccountsRequest: {
                typeUrl: string;
                encode(message: _24.QueryAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _24.QueryAccountsRequest;
                fromJSON(object: any): _24.QueryAccountsRequest;
                toJSON(message: _24.QueryAccountsRequest): unknown;
                fromPartial(object: Partial<_24.QueryAccountsRequest>): _24.QueryAccountsRequest;
                fromAmino(object: _24.QueryAccountsRequestAmino): _24.QueryAccountsRequest;
                toAmino(message: _24.QueryAccountsRequest): _24.QueryAccountsRequestAmino;
                fromAminoMsg(object: _24.QueryAccountsRequestAminoMsg): _24.QueryAccountsRequest;
                toAminoMsg(message: _24.QueryAccountsRequest): _24.QueryAccountsRequestAminoMsg;
                fromProtoMsg(message: _24.QueryAccountsRequestProtoMsg): _24.QueryAccountsRequest;
                toProto(message: _24.QueryAccountsRequest): Uint8Array;
                toProtoMsg(message: _24.QueryAccountsRequest): _24.QueryAccountsRequestProtoMsg;
            };
            QueryAccountsResponse: {
                typeUrl: string;
                encode(message: _24.QueryAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _24.QueryAccountsResponse;
                fromJSON(object: any): _24.QueryAccountsResponse;
                toJSON(message: _24.QueryAccountsResponse): unknown;
                fromPartial(object: Partial<_24.QueryAccountsResponse>): _24.QueryAccountsResponse;
                fromAmino(object: _24.QueryAccountsResponseAmino): _24.QueryAccountsResponse;
                toAmino(message: _24.QueryAccountsResponse): _24.QueryAccountsResponseAmino;
                fromAminoMsg(object: _24.QueryAccountsResponseAminoMsg): _24.QueryAccountsResponse;
                toAminoMsg(message: _24.QueryAccountsResponse): _24.QueryAccountsResponseAminoMsg;
                fromProtoMsg(message: _24.QueryAccountsResponseProtoMsg): _24.QueryAccountsResponse;
                toProto(message: _24.QueryAccountsResponse): Uint8Array;
                toProtoMsg(message: _24.QueryAccountsResponse): _24.QueryAccountsResponseProtoMsg;
            };
            QueryAccountRequest: {
                typeUrl: string;
                encode(message: _24.QueryAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _24.QueryAccountRequest;
                fromJSON(object: any): _24.QueryAccountRequest;
                toJSON(message: _24.QueryAccountRequest): unknown;
                fromPartial(object: Partial<_24.QueryAccountRequest>): _24.QueryAccountRequest;
                fromAmino(object: _24.QueryAccountRequestAmino): _24.QueryAccountRequest;
                toAmino(message: _24.QueryAccountRequest): _24.QueryAccountRequestAmino;
                fromAminoMsg(object: _24.QueryAccountRequestAminoMsg): _24.QueryAccountRequest;
                toAminoMsg(message: _24.QueryAccountRequest): _24.QueryAccountRequestAminoMsg;
                fromProtoMsg(message: _24.QueryAccountRequestProtoMsg): _24.QueryAccountRequest;
                toProto(message: _24.QueryAccountRequest): Uint8Array;
                toProtoMsg(message: _24.QueryAccountRequest): _24.QueryAccountRequestProtoMsg;
            };
            QueryAccountResponse: {
                typeUrl: string;
                encode(message: _24.QueryAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _24.QueryAccountResponse;
                fromJSON(object: any): _24.QueryAccountResponse;
                toJSON(message: _24.QueryAccountResponse): unknown;
                fromPartial(object: Partial<_24.QueryAccountResponse>): _24.QueryAccountResponse;
                fromAmino(object: _24.QueryAccountResponseAmino): _24.QueryAccountResponse;
                toAmino(message: _24.QueryAccountResponse): _24.QueryAccountResponseAmino;
                fromAminoMsg(object: _24.QueryAccountResponseAminoMsg): _24.QueryAccountResponse;
                toAminoMsg(message: _24.QueryAccountResponse): _24.QueryAccountResponseAminoMsg;
                fromProtoMsg(message: _24.QueryAccountResponseProtoMsg): _24.QueryAccountResponse;
                toProto(message: _24.QueryAccountResponse): Uint8Array;
                toProtoMsg(message: _24.QueryAccountResponse): _24.QueryAccountResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _24.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _24.QueryParamsRequest;
                fromJSON(_: any): _24.QueryParamsRequest;
                toJSON(_: _24.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_24.QueryParamsRequest>): _24.QueryParamsRequest;
                fromAmino(_: _24.QueryParamsRequestAmino): _24.QueryParamsRequest;
                toAmino(_: _24.QueryParamsRequest): _24.QueryParamsRequestAmino;
                fromAminoMsg(object: _24.QueryParamsRequestAminoMsg): _24.QueryParamsRequest;
                toAminoMsg(message: _24.QueryParamsRequest): _24.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _24.QueryParamsRequestProtoMsg): _24.QueryParamsRequest;
                toProto(message: _24.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _24.QueryParamsRequest): _24.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _24.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _24.QueryParamsResponse;
                fromJSON(object: any): _24.QueryParamsResponse;
                toJSON(message: _24.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_24.QueryParamsResponse>): _24.QueryParamsResponse;
                fromAmino(object: _24.QueryParamsResponseAmino): _24.QueryParamsResponse;
                toAmino(message: _24.QueryParamsResponse): _24.QueryParamsResponseAmino;
                fromAminoMsg(object: _24.QueryParamsResponseAminoMsg): _24.QueryParamsResponse;
                toAminoMsg(message: _24.QueryParamsResponse): _24.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _24.QueryParamsResponseProtoMsg): _24.QueryParamsResponse;
                toProto(message: _24.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _24.QueryParamsResponse): _24.QueryParamsResponseProtoMsg;
            };
            QueryModuleAccountsRequest: {
                typeUrl: string;
                encode(_: _24.QueryModuleAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _24.QueryModuleAccountsRequest;
                fromJSON(_: any): _24.QueryModuleAccountsRequest;
                toJSON(_: _24.QueryModuleAccountsRequest): unknown;
                fromPartial(_: Partial<_24.QueryModuleAccountsRequest>): _24.QueryModuleAccountsRequest;
                fromAmino(_: _24.QueryModuleAccountsRequestAmino): _24.QueryModuleAccountsRequest;
                toAmino(_: _24.QueryModuleAccountsRequest): _24.QueryModuleAccountsRequestAmino;
                fromAminoMsg(object: _24.QueryModuleAccountsRequestAminoMsg): _24.QueryModuleAccountsRequest;
                toAminoMsg(message: _24.QueryModuleAccountsRequest): _24.QueryModuleAccountsRequestAminoMsg;
                fromProtoMsg(message: _24.QueryModuleAccountsRequestProtoMsg): _24.QueryModuleAccountsRequest;
                toProto(message: _24.QueryModuleAccountsRequest): Uint8Array;
                toProtoMsg(message: _24.QueryModuleAccountsRequest): _24.QueryModuleAccountsRequestProtoMsg;
            };
            QueryModuleAccountsResponse: {
                typeUrl: string;
                encode(message: _24.QueryModuleAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _24.QueryModuleAccountsResponse;
                fromJSON(object: any): _24.QueryModuleAccountsResponse;
                toJSON(message: _24.QueryModuleAccountsResponse): unknown;
                fromPartial(object: Partial<_24.QueryModuleAccountsResponse>): _24.QueryModuleAccountsResponse;
                fromAmino(object: _24.QueryModuleAccountsResponseAmino): _24.QueryModuleAccountsResponse;
                toAmino(message: _24.QueryModuleAccountsResponse): _24.QueryModuleAccountsResponseAmino;
                fromAminoMsg(object: _24.QueryModuleAccountsResponseAminoMsg): _24.QueryModuleAccountsResponse;
                toAminoMsg(message: _24.QueryModuleAccountsResponse): _24.QueryModuleAccountsResponseAminoMsg;
                fromProtoMsg(message: _24.QueryModuleAccountsResponseProtoMsg): _24.QueryModuleAccountsResponse;
                toProto(message: _24.QueryModuleAccountsResponse): Uint8Array;
                toProtoMsg(message: _24.QueryModuleAccountsResponse): _24.QueryModuleAccountsResponseProtoMsg;
            };
            QueryModuleAccountByNameRequest: {
                typeUrl: string;
                encode(message: _24.QueryModuleAccountByNameRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _24.QueryModuleAccountByNameRequest;
                fromJSON(object: any): _24.QueryModuleAccountByNameRequest;
                toJSON(message: _24.QueryModuleAccountByNameRequest): unknown;
                fromPartial(object: Partial<_24.QueryModuleAccountByNameRequest>): _24.QueryModuleAccountByNameRequest;
                fromAmino(object: _24.QueryModuleAccountByNameRequestAmino): _24.QueryModuleAccountByNameRequest;
                toAmino(message: _24.QueryModuleAccountByNameRequest): _24.QueryModuleAccountByNameRequestAmino;
                fromAminoMsg(object: _24.QueryModuleAccountByNameRequestAminoMsg): _24.QueryModuleAccountByNameRequest;
                toAminoMsg(message: _24.QueryModuleAccountByNameRequest): _24.QueryModuleAccountByNameRequestAminoMsg;
                fromProtoMsg(message: _24.QueryModuleAccountByNameRequestProtoMsg): _24.QueryModuleAccountByNameRequest;
                toProto(message: _24.QueryModuleAccountByNameRequest): Uint8Array;
                toProtoMsg(message: _24.QueryModuleAccountByNameRequest): _24.QueryModuleAccountByNameRequestProtoMsg;
            };
            QueryModuleAccountByNameResponse: {
                typeUrl: string;
                encode(message: _24.QueryModuleAccountByNameResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _24.QueryModuleAccountByNameResponse;
                fromJSON(object: any): _24.QueryModuleAccountByNameResponse;
                toJSON(message: _24.QueryModuleAccountByNameResponse): unknown;
                fromPartial(object: Partial<_24.QueryModuleAccountByNameResponse>): _24.QueryModuleAccountByNameResponse;
                fromAmino(object: _24.QueryModuleAccountByNameResponseAmino): _24.QueryModuleAccountByNameResponse;
                toAmino(message: _24.QueryModuleAccountByNameResponse): _24.QueryModuleAccountByNameResponseAmino;
                fromAminoMsg(object: _24.QueryModuleAccountByNameResponseAminoMsg): _24.QueryModuleAccountByNameResponse;
                toAminoMsg(message: _24.QueryModuleAccountByNameResponse): _24.QueryModuleAccountByNameResponseAminoMsg;
                fromProtoMsg(message: _24.QueryModuleAccountByNameResponseProtoMsg): _24.QueryModuleAccountByNameResponse;
                toProto(message: _24.QueryModuleAccountByNameResponse): Uint8Array;
                toProtoMsg(message: _24.QueryModuleAccountByNameResponse): _24.QueryModuleAccountByNameResponseProtoMsg;
            };
            Bech32PrefixRequest: {
                typeUrl: string;
                encode(_: _24.Bech32PrefixRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _24.Bech32PrefixRequest;
                fromJSON(_: any): _24.Bech32PrefixRequest;
                toJSON(_: _24.Bech32PrefixRequest): unknown;
                fromPartial(_: Partial<_24.Bech32PrefixRequest>): _24.Bech32PrefixRequest;
                fromAmino(_: _24.Bech32PrefixRequestAmino): _24.Bech32PrefixRequest;
                toAmino(_: _24.Bech32PrefixRequest): _24.Bech32PrefixRequestAmino;
                fromAminoMsg(object: _24.Bech32PrefixRequestAminoMsg): _24.Bech32PrefixRequest;
                toAminoMsg(message: _24.Bech32PrefixRequest): _24.Bech32PrefixRequestAminoMsg;
                fromProtoMsg(message: _24.Bech32PrefixRequestProtoMsg): _24.Bech32PrefixRequest;
                toProto(message: _24.Bech32PrefixRequest): Uint8Array;
                toProtoMsg(message: _24.Bech32PrefixRequest): _24.Bech32PrefixRequestProtoMsg;
            };
            Bech32PrefixResponse: {
                typeUrl: string;
                encode(message: _24.Bech32PrefixResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _24.Bech32PrefixResponse;
                fromJSON(object: any): _24.Bech32PrefixResponse;
                toJSON(message: _24.Bech32PrefixResponse): unknown;
                fromPartial(object: Partial<_24.Bech32PrefixResponse>): _24.Bech32PrefixResponse;
                fromAmino(object: _24.Bech32PrefixResponseAmino): _24.Bech32PrefixResponse;
                toAmino(message: _24.Bech32PrefixResponse): _24.Bech32PrefixResponseAmino;
                fromAminoMsg(object: _24.Bech32PrefixResponseAminoMsg): _24.Bech32PrefixResponse;
                toAminoMsg(message: _24.Bech32PrefixResponse): _24.Bech32PrefixResponseAminoMsg;
                fromProtoMsg(message: _24.Bech32PrefixResponseProtoMsg): _24.Bech32PrefixResponse;
                toProto(message: _24.Bech32PrefixResponse): Uint8Array;
                toProtoMsg(message: _24.Bech32PrefixResponse): _24.Bech32PrefixResponseProtoMsg;
            };
            AddressBytesToStringRequest: {
                typeUrl: string;
                encode(message: _24.AddressBytesToStringRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _24.AddressBytesToStringRequest;
                fromJSON(object: any): _24.AddressBytesToStringRequest;
                toJSON(message: _24.AddressBytesToStringRequest): unknown;
                fromPartial(object: Partial<_24.AddressBytesToStringRequest>): _24.AddressBytesToStringRequest;
                fromAmino(object: _24.AddressBytesToStringRequestAmino): _24.AddressBytesToStringRequest;
                toAmino(message: _24.AddressBytesToStringRequest): _24.AddressBytesToStringRequestAmino;
                fromAminoMsg(object: _24.AddressBytesToStringRequestAminoMsg): _24.AddressBytesToStringRequest;
                toAminoMsg(message: _24.AddressBytesToStringRequest): _24.AddressBytesToStringRequestAminoMsg;
                fromProtoMsg(message: _24.AddressBytesToStringRequestProtoMsg): _24.AddressBytesToStringRequest;
                toProto(message: _24.AddressBytesToStringRequest): Uint8Array;
                toProtoMsg(message: _24.AddressBytesToStringRequest): _24.AddressBytesToStringRequestProtoMsg;
            };
            AddressBytesToStringResponse: {
                typeUrl: string;
                encode(message: _24.AddressBytesToStringResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _24.AddressBytesToStringResponse;
                fromJSON(object: any): _24.AddressBytesToStringResponse;
                toJSON(message: _24.AddressBytesToStringResponse): unknown;
                fromPartial(object: Partial<_24.AddressBytesToStringResponse>): _24.AddressBytesToStringResponse;
                fromAmino(object: _24.AddressBytesToStringResponseAmino): _24.AddressBytesToStringResponse;
                toAmino(message: _24.AddressBytesToStringResponse): _24.AddressBytesToStringResponseAmino;
                fromAminoMsg(object: _24.AddressBytesToStringResponseAminoMsg): _24.AddressBytesToStringResponse;
                toAminoMsg(message: _24.AddressBytesToStringResponse): _24.AddressBytesToStringResponseAminoMsg;
                fromProtoMsg(message: _24.AddressBytesToStringResponseProtoMsg): _24.AddressBytesToStringResponse;
                toProto(message: _24.AddressBytesToStringResponse): Uint8Array;
                toProtoMsg(message: _24.AddressBytesToStringResponse): _24.AddressBytesToStringResponseProtoMsg;
            };
            AddressStringToBytesRequest: {
                typeUrl: string;
                encode(message: _24.AddressStringToBytesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _24.AddressStringToBytesRequest;
                fromJSON(object: any): _24.AddressStringToBytesRequest;
                toJSON(message: _24.AddressStringToBytesRequest): unknown;
                fromPartial(object: Partial<_24.AddressStringToBytesRequest>): _24.AddressStringToBytesRequest;
                fromAmino(object: _24.AddressStringToBytesRequestAmino): _24.AddressStringToBytesRequest;
                toAmino(message: _24.AddressStringToBytesRequest): _24.AddressStringToBytesRequestAmino;
                fromAminoMsg(object: _24.AddressStringToBytesRequestAminoMsg): _24.AddressStringToBytesRequest;
                toAminoMsg(message: _24.AddressStringToBytesRequest): _24.AddressStringToBytesRequestAminoMsg;
                fromProtoMsg(message: _24.AddressStringToBytesRequestProtoMsg): _24.AddressStringToBytesRequest;
                toProto(message: _24.AddressStringToBytesRequest): Uint8Array;
                toProtoMsg(message: _24.AddressStringToBytesRequest): _24.AddressStringToBytesRequestProtoMsg;
            };
            AddressStringToBytesResponse: {
                typeUrl: string;
                encode(message: _24.AddressStringToBytesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _24.AddressStringToBytesResponse;
                fromJSON(object: any): _24.AddressStringToBytesResponse;
                toJSON(message: _24.AddressStringToBytesResponse): unknown;
                fromPartial(object: Partial<_24.AddressStringToBytesResponse>): _24.AddressStringToBytesResponse;
                fromAmino(object: _24.AddressStringToBytesResponseAmino): _24.AddressStringToBytesResponse;
                toAmino(message: _24.AddressStringToBytesResponse): _24.AddressStringToBytesResponseAmino;
                fromAminoMsg(object: _24.AddressStringToBytesResponseAminoMsg): _24.AddressStringToBytesResponse;
                toAminoMsg(message: _24.AddressStringToBytesResponse): _24.AddressStringToBytesResponseAminoMsg;
                fromProtoMsg(message: _24.AddressStringToBytesResponseProtoMsg): _24.AddressStringToBytesResponse;
                toProto(message: _24.AddressStringToBytesResponse): Uint8Array;
                toProtoMsg(message: _24.AddressStringToBytesResponse): _24.AddressStringToBytesResponseProtoMsg;
            };
            QueryAccountAddressByIDRequest: {
                typeUrl: string;
                encode(message: _24.QueryAccountAddressByIDRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _24.QueryAccountAddressByIDRequest;
                fromJSON(object: any): _24.QueryAccountAddressByIDRequest;
                toJSON(message: _24.QueryAccountAddressByIDRequest): unknown;
                fromPartial(object: Partial<_24.QueryAccountAddressByIDRequest>): _24.QueryAccountAddressByIDRequest;
                fromAmino(object: _24.QueryAccountAddressByIDRequestAmino): _24.QueryAccountAddressByIDRequest;
                toAmino(message: _24.QueryAccountAddressByIDRequest): _24.QueryAccountAddressByIDRequestAmino;
                fromAminoMsg(object: _24.QueryAccountAddressByIDRequestAminoMsg): _24.QueryAccountAddressByIDRequest;
                toAminoMsg(message: _24.QueryAccountAddressByIDRequest): _24.QueryAccountAddressByIDRequestAminoMsg;
                fromProtoMsg(message: _24.QueryAccountAddressByIDRequestProtoMsg): _24.QueryAccountAddressByIDRequest;
                toProto(message: _24.QueryAccountAddressByIDRequest): Uint8Array;
                toProtoMsg(message: _24.QueryAccountAddressByIDRequest): _24.QueryAccountAddressByIDRequestProtoMsg;
            };
            QueryAccountAddressByIDResponse: {
                typeUrl: string;
                encode(message: _24.QueryAccountAddressByIDResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _24.QueryAccountAddressByIDResponse;
                fromJSON(object: any): _24.QueryAccountAddressByIDResponse;
                toJSON(message: _24.QueryAccountAddressByIDResponse): unknown;
                fromPartial(object: Partial<_24.QueryAccountAddressByIDResponse>): _24.QueryAccountAddressByIDResponse;
                fromAmino(object: _24.QueryAccountAddressByIDResponseAmino): _24.QueryAccountAddressByIDResponse;
                toAmino(message: _24.QueryAccountAddressByIDResponse): _24.QueryAccountAddressByIDResponseAmino;
                fromAminoMsg(object: _24.QueryAccountAddressByIDResponseAminoMsg): _24.QueryAccountAddressByIDResponse;
                toAminoMsg(message: _24.QueryAccountAddressByIDResponse): _24.QueryAccountAddressByIDResponseAminoMsg;
                fromProtoMsg(message: _24.QueryAccountAddressByIDResponseProtoMsg): _24.QueryAccountAddressByIDResponse;
                toProto(message: _24.QueryAccountAddressByIDResponse): Uint8Array;
                toProtoMsg(message: _24.QueryAccountAddressByIDResponse): _24.QueryAccountAddressByIDResponseProtoMsg;
            };
            QueryAccountInfoRequest: {
                typeUrl: string;
                encode(message: _24.QueryAccountInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _24.QueryAccountInfoRequest;
                fromJSON(object: any): _24.QueryAccountInfoRequest;
                toJSON(message: _24.QueryAccountInfoRequest): unknown;
                fromPartial(object: Partial<_24.QueryAccountInfoRequest>): _24.QueryAccountInfoRequest;
                fromAmino(object: _24.QueryAccountInfoRequestAmino): _24.QueryAccountInfoRequest;
                toAmino(message: _24.QueryAccountInfoRequest): _24.QueryAccountInfoRequestAmino;
                fromAminoMsg(object: _24.QueryAccountInfoRequestAminoMsg): _24.QueryAccountInfoRequest;
                toAminoMsg(message: _24.QueryAccountInfoRequest): _24.QueryAccountInfoRequestAminoMsg;
                fromProtoMsg(message: _24.QueryAccountInfoRequestProtoMsg): _24.QueryAccountInfoRequest;
                toProto(message: _24.QueryAccountInfoRequest): Uint8Array;
                toProtoMsg(message: _24.QueryAccountInfoRequest): _24.QueryAccountInfoRequestProtoMsg;
            };
            QueryAccountInfoResponse: {
                typeUrl: string;
                encode(message: _24.QueryAccountInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _24.QueryAccountInfoResponse;
                fromJSON(object: any): _24.QueryAccountInfoResponse;
                toJSON(message: _24.QueryAccountInfoResponse): unknown;
                fromPartial(object: Partial<_24.QueryAccountInfoResponse>): _24.QueryAccountInfoResponse;
                fromAmino(object: _24.QueryAccountInfoResponseAmino): _24.QueryAccountInfoResponse;
                toAmino(message: _24.QueryAccountInfoResponse): _24.QueryAccountInfoResponseAmino;
                fromAminoMsg(object: _24.QueryAccountInfoResponseAminoMsg): _24.QueryAccountInfoResponse;
                toAminoMsg(message: _24.QueryAccountInfoResponse): _24.QueryAccountInfoResponseAminoMsg;
                fromProtoMsg(message: _24.QueryAccountInfoResponseProtoMsg): _24.QueryAccountInfoResponse;
                toProto(message: _24.QueryAccountInfoResponse): Uint8Array;
                toProtoMsg(message: _24.QueryAccountInfoResponse): _24.QueryAccountInfoResponseProtoMsg;
            };
            Cosmos_authv1beta1AccountI_InterfaceDecoder: (input: import("..").BinaryReader | Uint8Array) => import("../google/protobuf/any").Any | _22.BaseAccount;
            Cosmos_authv1beta1AccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_authv1beta1AccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            Cosmos_authv1beta1ModuleAccountI_InterfaceDecoder: (input: import("..").BinaryReader | Uint8Array) => import("../google/protobuf/any").Any | _22.ModuleAccount;
            Cosmos_authv1beta1ModuleAccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_authv1beta1ModuleAccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            GenesisState: {
                typeUrl: string;
                encode(message: _23.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _23.GenesisState;
                fromJSON(object: any): _23.GenesisState;
                toJSON(message: _23.GenesisState): unknown;
                fromPartial(object: Partial<_23.GenesisState>): _23.GenesisState;
                fromAmino(object: _23.GenesisStateAmino): _23.GenesisState;
                toAmino(message: _23.GenesisState): _23.GenesisStateAmino;
                fromAminoMsg(object: _23.GenesisStateAminoMsg): _23.GenesisState;
                toAminoMsg(message: _23.GenesisState): _23.GenesisStateAminoMsg;
                fromProtoMsg(message: _23.GenesisStateProtoMsg): _23.GenesisState;
                toProto(message: _23.GenesisState): Uint8Array;
                toProtoMsg(message: _23.GenesisState): _23.GenesisStateProtoMsg;
            };
            BaseAccount: {
                typeUrl: string;
                encode(message: _22.BaseAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _22.BaseAccount;
                fromJSON(object: any): _22.BaseAccount;
                toJSON(message: _22.BaseAccount): unknown;
                fromPartial(object: Partial<_22.BaseAccount>): _22.BaseAccount;
                fromAmino(object: _22.BaseAccountAmino): _22.BaseAccount;
                toAmino(message: _22.BaseAccount): _22.BaseAccountAmino;
                fromAminoMsg(object: _22.BaseAccountAminoMsg): _22.BaseAccount;
                toAminoMsg(message: _22.BaseAccount): _22.BaseAccountAminoMsg;
                fromProtoMsg(message: _22.BaseAccountProtoMsg): _22.BaseAccount;
                toProto(message: _22.BaseAccount): Uint8Array;
                toProtoMsg(message: _22.BaseAccount): _22.BaseAccountProtoMsg;
            };
            ModuleAccount: {
                typeUrl: string;
                encode(message: _22.ModuleAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _22.ModuleAccount;
                fromJSON(object: any): _22.ModuleAccount;
                toJSON(message: _22.ModuleAccount): unknown;
                fromPartial(object: Partial<_22.ModuleAccount>): _22.ModuleAccount;
                fromAmino(object: _22.ModuleAccountAmino): _22.ModuleAccount;
                toAmino(message: _22.ModuleAccount): _22.ModuleAccountAmino;
                fromAminoMsg(object: _22.ModuleAccountAminoMsg): _22.ModuleAccount;
                toAminoMsg(message: _22.ModuleAccount): _22.ModuleAccountAminoMsg;
                fromProtoMsg(message: _22.ModuleAccountProtoMsg): _22.ModuleAccount;
                toProto(message: _22.ModuleAccount): Uint8Array;
                toProtoMsg(message: _22.ModuleAccount): _22.ModuleAccountProtoMsg;
            };
            ModuleCredential: {
                typeUrl: string;
                encode(message: _22.ModuleCredential, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _22.ModuleCredential;
                fromJSON(object: any): _22.ModuleCredential;
                toJSON(message: _22.ModuleCredential): unknown;
                fromPartial(object: Partial<_22.ModuleCredential>): _22.ModuleCredential;
                fromAmino(object: _22.ModuleCredentialAmino): _22.ModuleCredential;
                toAmino(message: _22.ModuleCredential): _22.ModuleCredentialAmino;
                fromAminoMsg(object: _22.ModuleCredentialAminoMsg): _22.ModuleCredential;
                toAminoMsg(message: _22.ModuleCredential): _22.ModuleCredentialAminoMsg;
                fromProtoMsg(message: _22.ModuleCredentialProtoMsg): _22.ModuleCredential;
                toProto(message: _22.ModuleCredential): Uint8Array;
                toProtoMsg(message: _22.ModuleCredential): _22.ModuleCredentialProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _22.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _22.Params;
                fromJSON(object: any): _22.Params;
                toJSON(message: _22.Params): unknown;
                fromPartial(object: Partial<_22.Params>): _22.Params;
                fromAmino(object: _22.ParamsAmino): _22.Params;
                toAmino(message: _22.Params): _22.ParamsAmino;
                fromAminoMsg(object: _22.ParamsAminoMsg): _22.Params;
                toAminoMsg(message: _22.Params): _22.ParamsAminoMsg;
                fromProtoMsg(message: _22.ParamsProtoMsg): _22.Params;
                toProto(message: _22.Params): Uint8Array;
                toProtoMsg(message: _22.Params): _22.ParamsProtoMsg;
            };
        };
    }
    namespace authz {
        namespace module {
            const v1: {
                protobufPackage: "cosmos.authz.module.v1";
                Module: {
                    typeUrl: string;
                    encode(_: _26.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _26.Module;
                    fromJSON(_: any): _26.Module;
                    toJSON(_: _26.Module): unknown;
                    fromPartial(_: Partial<_26.Module>): _26.Module;
                    fromAmino(_: _26.ModuleAmino): _26.Module;
                    toAmino(_: _26.Module): _26.ModuleAmino;
                    fromAminoMsg(object: _26.ModuleAminoMsg): _26.Module;
                    toAminoMsg(message: _26.Module): _26.ModuleAminoMsg;
                    fromProtoMsg(message: _26.ModuleProtoMsg): _26.Module;
                    toProto(message: _26.Module): Uint8Array;
                    toProtoMsg(message: _26.Module): _26.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            Msg: typeof _262.Msg;
            Query: typeof _243.Query;
            QueryClientImpl: typeof _243.QueryClientImpl;
            LCDQueryClient: typeof _225.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _31.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _31.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _31.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _31.MsgGrant): {
                        typeUrl: string;
                        value: _31.MsgGrant;
                    };
                    exec(value: _31.MsgExec): {
                        typeUrl: string;
                        value: _31.MsgExec;
                    };
                    revoke(value: _31.MsgRevoke): {
                        typeUrl: string;
                        value: _31.MsgRevoke;
                    };
                };
                toJSON: {
                    grant(value: _31.MsgGrant): {
                        typeUrl: string;
                        value: unknown;
                    };
                    exec(value: _31.MsgExec): {
                        typeUrl: string;
                        value: unknown;
                    };
                    revoke(value: _31.MsgRevoke): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    grant(value: any): {
                        typeUrl: string;
                        value: _31.MsgGrant;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _31.MsgExec;
                    };
                    revoke(value: any): {
                        typeUrl: string;
                        value: _31.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _31.MsgGrant): {
                        typeUrl: string;
                        value: _31.MsgGrant;
                    };
                    exec(value: _31.MsgExec): {
                        typeUrl: string;
                        value: _31.MsgExec;
                    };
                    revoke(value: _31.MsgRevoke): {
                        typeUrl: string;
                        value: _31.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: (message: _31.MsgGrant) => _31.MsgGrantAmino;
                    fromAmino: (object: _31.MsgGrantAmino) => _31.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _31.MsgExec) => _31.MsgExecAmino;
                    fromAmino: (object: _31.MsgExecAmino) => _31.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: (message: _31.MsgRevoke) => _31.MsgRevokeAmino;
                    fromAmino: (object: _31.MsgRevokeAmino) => _31.MsgRevoke;
                };
            };
            protobufPackage: "cosmos.authz.v1beta1";
            MsgGrant: {
                typeUrl: string;
                encode(message: _31.MsgGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _31.MsgGrant;
                fromJSON(object: any): _31.MsgGrant;
                toJSON(message: _31.MsgGrant): unknown;
                fromPartial(object: Partial<_31.MsgGrant>): _31.MsgGrant;
                fromAmino(object: _31.MsgGrantAmino): _31.MsgGrant;
                toAmino(message: _31.MsgGrant): _31.MsgGrantAmino;
                fromAminoMsg(object: _31.MsgGrantAminoMsg): _31.MsgGrant;
                toAminoMsg(message: _31.MsgGrant): _31.MsgGrantAminoMsg;
                fromProtoMsg(message: _31.MsgGrantProtoMsg): _31.MsgGrant;
                toProto(message: _31.MsgGrant): Uint8Array;
                toProtoMsg(message: _31.MsgGrant): _31.MsgGrantProtoMsg;
            };
            MsgGrantResponse: {
                typeUrl: string;
                encode(_: _31.MsgGrantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _31.MsgGrantResponse;
                fromJSON(_: any): _31.MsgGrantResponse;
                toJSON(_: _31.MsgGrantResponse): unknown;
                fromPartial(_: Partial<_31.MsgGrantResponse>): _31.MsgGrantResponse;
                fromAmino(_: _31.MsgGrantResponseAmino): _31.MsgGrantResponse;
                toAmino(_: _31.MsgGrantResponse): _31.MsgGrantResponseAmino;
                fromAminoMsg(object: _31.MsgGrantResponseAminoMsg): _31.MsgGrantResponse;
                toAminoMsg(message: _31.MsgGrantResponse): _31.MsgGrantResponseAminoMsg;
                fromProtoMsg(message: _31.MsgGrantResponseProtoMsg): _31.MsgGrantResponse;
                toProto(message: _31.MsgGrantResponse): Uint8Array;
                toProtoMsg(message: _31.MsgGrantResponse): _31.MsgGrantResponseProtoMsg;
            };
            MsgExec: {
                typeUrl: string;
                encode(message: _31.MsgExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _31.MsgExec;
                fromJSON(object: any): _31.MsgExec;
                toJSON(message: _31.MsgExec): unknown;
                fromPartial(object: Partial<_31.MsgExec>): _31.MsgExec;
                fromAmino(object: _31.MsgExecAmino): _31.MsgExec;
                toAmino(message: _31.MsgExec): _31.MsgExecAmino;
                fromAminoMsg(object: _31.MsgExecAminoMsg): _31.MsgExec;
                toAminoMsg(message: _31.MsgExec): _31.MsgExecAminoMsg;
                fromProtoMsg(message: _31.MsgExecProtoMsg): _31.MsgExec;
                toProto(message: _31.MsgExec): Uint8Array;
                toProtoMsg(message: _31.MsgExec): _31.MsgExecProtoMsg;
            };
            MsgExecResponse: {
                typeUrl: string;
                encode(message: _31.MsgExecResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _31.MsgExecResponse;
                fromJSON(object: any): _31.MsgExecResponse;
                toJSON(message: _31.MsgExecResponse): unknown;
                fromPartial(object: Partial<_31.MsgExecResponse>): _31.MsgExecResponse;
                fromAmino(object: _31.MsgExecResponseAmino): _31.MsgExecResponse;
                toAmino(message: _31.MsgExecResponse): _31.MsgExecResponseAmino;
                fromAminoMsg(object: _31.MsgExecResponseAminoMsg): _31.MsgExecResponse;
                toAminoMsg(message: _31.MsgExecResponse): _31.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _31.MsgExecResponseProtoMsg): _31.MsgExecResponse;
                toProto(message: _31.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _31.MsgExecResponse): _31.MsgExecResponseProtoMsg;
            };
            MsgRevoke: {
                typeUrl: string;
                encode(message: _31.MsgRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _31.MsgRevoke;
                fromJSON(object: any): _31.MsgRevoke;
                toJSON(message: _31.MsgRevoke): unknown;
                fromPartial(object: Partial<_31.MsgRevoke>): _31.MsgRevoke;
                fromAmino(object: _31.MsgRevokeAmino): _31.MsgRevoke;
                toAmino(message: _31.MsgRevoke): _31.MsgRevokeAmino;
                fromAminoMsg(object: _31.MsgRevokeAminoMsg): _31.MsgRevoke;
                toAminoMsg(message: _31.MsgRevoke): _31.MsgRevokeAminoMsg;
                fromProtoMsg(message: _31.MsgRevokeProtoMsg): _31.MsgRevoke;
                toProto(message: _31.MsgRevoke): Uint8Array;
                toProtoMsg(message: _31.MsgRevoke): _31.MsgRevokeProtoMsg;
            };
            MsgRevokeResponse: {
                typeUrl: string;
                encode(_: _31.MsgRevokeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _31.MsgRevokeResponse;
                fromJSON(_: any): _31.MsgRevokeResponse;
                toJSON(_: _31.MsgRevokeResponse): unknown;
                fromPartial(_: Partial<_31.MsgRevokeResponse>): _31.MsgRevokeResponse;
                fromAmino(_: _31.MsgRevokeResponseAmino): _31.MsgRevokeResponse;
                toAmino(_: _31.MsgRevokeResponse): _31.MsgRevokeResponseAmino;
                fromAminoMsg(object: _31.MsgRevokeResponseAminoMsg): _31.MsgRevokeResponse;
                toAminoMsg(message: _31.MsgRevokeResponse): _31.MsgRevokeResponseAminoMsg;
                fromProtoMsg(message: _31.MsgRevokeResponseProtoMsg): _31.MsgRevokeResponse;
                toProto(message: _31.MsgRevokeResponse): Uint8Array;
                toProtoMsg(message: _31.MsgRevokeResponse): _31.MsgRevokeResponseProtoMsg;
            };
            Cosmos_basev1beta1Msg_InterfaceDecoder: (input: import("..").BinaryReader | Uint8Array) => import("../google/protobuf/any").Any;
            Cosmos_basev1beta1Msg_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_basev1beta1Msg_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryGrantsRequest: {
                typeUrl: string;
                encode(message: _30.QueryGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _30.QueryGrantsRequest;
                fromJSON(object: any): _30.QueryGrantsRequest;
                toJSON(message: _30.QueryGrantsRequest): unknown;
                fromPartial(object: Partial<_30.QueryGrantsRequest>): _30.QueryGrantsRequest;
                fromAmino(object: _30.QueryGrantsRequestAmino): _30.QueryGrantsRequest;
                toAmino(message: _30.QueryGrantsRequest): _30.QueryGrantsRequestAmino;
                fromAminoMsg(object: _30.QueryGrantsRequestAminoMsg): _30.QueryGrantsRequest;
                toAminoMsg(message: _30.QueryGrantsRequest): _30.QueryGrantsRequestAminoMsg;
                fromProtoMsg(message: _30.QueryGrantsRequestProtoMsg): _30.QueryGrantsRequest;
                toProto(message: _30.QueryGrantsRequest): Uint8Array;
                toProtoMsg(message: _30.QueryGrantsRequest): _30.QueryGrantsRequestProtoMsg;
            };
            QueryGrantsResponse: {
                typeUrl: string;
                encode(message: _30.QueryGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _30.QueryGrantsResponse;
                fromJSON(object: any): _30.QueryGrantsResponse;
                toJSON(message: _30.QueryGrantsResponse): unknown;
                fromPartial(object: Partial<_30.QueryGrantsResponse>): _30.QueryGrantsResponse;
                fromAmino(object: _30.QueryGrantsResponseAmino): _30.QueryGrantsResponse;
                toAmino(message: _30.QueryGrantsResponse): _30.QueryGrantsResponseAmino;
                fromAminoMsg(object: _30.QueryGrantsResponseAminoMsg): _30.QueryGrantsResponse;
                toAminoMsg(message: _30.QueryGrantsResponse): _30.QueryGrantsResponseAminoMsg;
                fromProtoMsg(message: _30.QueryGrantsResponseProtoMsg): _30.QueryGrantsResponse;
                toProto(message: _30.QueryGrantsResponse): Uint8Array;
                toProtoMsg(message: _30.QueryGrantsResponse): _30.QueryGrantsResponseProtoMsg;
            };
            QueryGranterGrantsRequest: {
                typeUrl: string;
                encode(message: _30.QueryGranterGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _30.QueryGranterGrantsRequest;
                fromJSON(object: any): _30.QueryGranterGrantsRequest;
                toJSON(message: _30.QueryGranterGrantsRequest): unknown;
                fromPartial(object: Partial<_30.QueryGranterGrantsRequest>): _30.QueryGranterGrantsRequest;
                fromAmino(object: _30.QueryGranterGrantsRequestAmino): _30.QueryGranterGrantsRequest;
                toAmino(message: _30.QueryGranterGrantsRequest): _30.QueryGranterGrantsRequestAmino;
                fromAminoMsg(object: _30.QueryGranterGrantsRequestAminoMsg): _30.QueryGranterGrantsRequest;
                toAminoMsg(message: _30.QueryGranterGrantsRequest): _30.QueryGranterGrantsRequestAminoMsg;
                fromProtoMsg(message: _30.QueryGranterGrantsRequestProtoMsg): _30.QueryGranterGrantsRequest;
                toProto(message: _30.QueryGranterGrantsRequest): Uint8Array;
                toProtoMsg(message: _30.QueryGranterGrantsRequest): _30.QueryGranterGrantsRequestProtoMsg;
            };
            QueryGranterGrantsResponse: {
                typeUrl: string;
                encode(message: _30.QueryGranterGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _30.QueryGranterGrantsResponse;
                fromJSON(object: any): _30.QueryGranterGrantsResponse;
                toJSON(message: _30.QueryGranterGrantsResponse): unknown;
                fromPartial(object: Partial<_30.QueryGranterGrantsResponse>): _30.QueryGranterGrantsResponse;
                fromAmino(object: _30.QueryGranterGrantsResponseAmino): _30.QueryGranterGrantsResponse;
                toAmino(message: _30.QueryGranterGrantsResponse): _30.QueryGranterGrantsResponseAmino;
                fromAminoMsg(object: _30.QueryGranterGrantsResponseAminoMsg): _30.QueryGranterGrantsResponse;
                toAminoMsg(message: _30.QueryGranterGrantsResponse): _30.QueryGranterGrantsResponseAminoMsg;
                fromProtoMsg(message: _30.QueryGranterGrantsResponseProtoMsg): _30.QueryGranterGrantsResponse;
                toProto(message: _30.QueryGranterGrantsResponse): Uint8Array;
                toProtoMsg(message: _30.QueryGranterGrantsResponse): _30.QueryGranterGrantsResponseProtoMsg;
            };
            QueryGranteeGrantsRequest: {
                typeUrl: string;
                encode(message: _30.QueryGranteeGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _30.QueryGranteeGrantsRequest;
                fromJSON(object: any): _30.QueryGranteeGrantsRequest;
                toJSON(message: _30.QueryGranteeGrantsRequest): unknown;
                fromPartial(object: Partial<_30.QueryGranteeGrantsRequest>): _30.QueryGranteeGrantsRequest;
                fromAmino(object: _30.QueryGranteeGrantsRequestAmino): _30.QueryGranteeGrantsRequest;
                toAmino(message: _30.QueryGranteeGrantsRequest): _30.QueryGranteeGrantsRequestAmino;
                fromAminoMsg(object: _30.QueryGranteeGrantsRequestAminoMsg): _30.QueryGranteeGrantsRequest;
                toAminoMsg(message: _30.QueryGranteeGrantsRequest): _30.QueryGranteeGrantsRequestAminoMsg;
                fromProtoMsg(message: _30.QueryGranteeGrantsRequestProtoMsg): _30.QueryGranteeGrantsRequest;
                toProto(message: _30.QueryGranteeGrantsRequest): Uint8Array;
                toProtoMsg(message: _30.QueryGranteeGrantsRequest): _30.QueryGranteeGrantsRequestProtoMsg;
            };
            QueryGranteeGrantsResponse: {
                typeUrl: string;
                encode(message: _30.QueryGranteeGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _30.QueryGranteeGrantsResponse;
                fromJSON(object: any): _30.QueryGranteeGrantsResponse;
                toJSON(message: _30.QueryGranteeGrantsResponse): unknown;
                fromPartial(object: Partial<_30.QueryGranteeGrantsResponse>): _30.QueryGranteeGrantsResponse;
                fromAmino(object: _30.QueryGranteeGrantsResponseAmino): _30.QueryGranteeGrantsResponse;
                toAmino(message: _30.QueryGranteeGrantsResponse): _30.QueryGranteeGrantsResponseAmino;
                fromAminoMsg(object: _30.QueryGranteeGrantsResponseAminoMsg): _30.QueryGranteeGrantsResponse;
                toAminoMsg(message: _30.QueryGranteeGrantsResponse): _30.QueryGranteeGrantsResponseAminoMsg;
                fromProtoMsg(message: _30.QueryGranteeGrantsResponseProtoMsg): _30.QueryGranteeGrantsResponse;
                toProto(message: _30.QueryGranteeGrantsResponse): Uint8Array;
                toProtoMsg(message: _30.QueryGranteeGrantsResponse): _30.QueryGranteeGrantsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _29.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _29.GenesisState;
                fromJSON(object: any): _29.GenesisState;
                toJSON(message: _29.GenesisState): unknown;
                fromPartial(object: Partial<_29.GenesisState>): _29.GenesisState;
                fromAmino(object: _29.GenesisStateAmino): _29.GenesisState;
                toAmino(message: _29.GenesisState): _29.GenesisStateAmino;
                fromAminoMsg(object: _29.GenesisStateAminoMsg): _29.GenesisState;
                toAminoMsg(message: _29.GenesisState): _29.GenesisStateAminoMsg;
                fromProtoMsg(message: _29.GenesisStateProtoMsg): _29.GenesisState;
                toProto(message: _29.GenesisState): Uint8Array;
                toProtoMsg(message: _29.GenesisState): _29.GenesisStateProtoMsg;
            };
            EventGrant: {
                typeUrl: string;
                encode(message: _28.EventGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _28.EventGrant;
                fromJSON(object: any): _28.EventGrant;
                toJSON(message: _28.EventGrant): unknown;
                fromPartial(object: Partial<_28.EventGrant>): _28.EventGrant;
                fromAmino(object: _28.EventGrantAmino): _28.EventGrant;
                toAmino(message: _28.EventGrant): _28.EventGrantAmino;
                fromAminoMsg(object: _28.EventGrantAminoMsg): _28.EventGrant;
                toAminoMsg(message: _28.EventGrant): _28.EventGrantAminoMsg;
                fromProtoMsg(message: _28.EventGrantProtoMsg): _28.EventGrant;
                toProto(message: _28.EventGrant): Uint8Array;
                toProtoMsg(message: _28.EventGrant): _28.EventGrantProtoMsg;
            };
            EventRevoke: {
                typeUrl: string;
                encode(message: _28.EventRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _28.EventRevoke;
                fromJSON(object: any): _28.EventRevoke;
                toJSON(message: _28.EventRevoke): unknown;
                fromPartial(object: Partial<_28.EventRevoke>): _28.EventRevoke;
                fromAmino(object: _28.EventRevokeAmino): _28.EventRevoke;
                toAmino(message: _28.EventRevoke): _28.EventRevokeAmino;
                fromAminoMsg(object: _28.EventRevokeAminoMsg): _28.EventRevoke;
                toAminoMsg(message: _28.EventRevoke): _28.EventRevokeAminoMsg;
                fromProtoMsg(message: _28.EventRevokeProtoMsg): _28.EventRevoke;
                toProto(message: _28.EventRevoke): Uint8Array;
                toProtoMsg(message: _28.EventRevoke): _28.EventRevokeProtoMsg;
            };
            GenericAuthorization: {
                typeUrl: string;
                encode(message: _27.GenericAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _27.GenericAuthorization;
                fromJSON(object: any): _27.GenericAuthorization;
                toJSON(message: _27.GenericAuthorization): unknown;
                fromPartial(object: Partial<_27.GenericAuthorization>): _27.GenericAuthorization;
                fromAmino(object: _27.GenericAuthorizationAmino): _27.GenericAuthorization;
                toAmino(message: _27.GenericAuthorization): _27.GenericAuthorizationAmino;
                fromAminoMsg(object: _27.GenericAuthorizationAminoMsg): _27.GenericAuthorization;
                toAminoMsg(message: _27.GenericAuthorization): _27.GenericAuthorizationAminoMsg;
                fromProtoMsg(message: _27.GenericAuthorizationProtoMsg): _27.GenericAuthorization;
                toProto(message: _27.GenericAuthorization): Uint8Array;
                toProtoMsg(message: _27.GenericAuthorization): _27.GenericAuthorizationProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _27.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _27.Grant;
                fromJSON(object: any): _27.Grant;
                toJSON(message: _27.Grant): unknown;
                fromPartial(object: Partial<_27.Grant>): _27.Grant;
                fromAmino(object: _27.GrantAmino): _27.Grant;
                toAmino(message: _27.Grant): _27.GrantAmino;
                fromAminoMsg(object: _27.GrantAminoMsg): _27.Grant;
                toAminoMsg(message: _27.Grant): _27.GrantAminoMsg;
                fromProtoMsg(message: _27.GrantProtoMsg): _27.Grant;
                toProto(message: _27.Grant): Uint8Array;
                toProtoMsg(message: _27.Grant): _27.GrantProtoMsg;
            };
            GrantAuthorization: {
                typeUrl: string;
                encode(message: _27.GrantAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _27.GrantAuthorization;
                fromJSON(object: any): _27.GrantAuthorization;
                toJSON(message: _27.GrantAuthorization): unknown;
                fromPartial(object: Partial<_27.GrantAuthorization>): _27.GrantAuthorization;
                fromAmino(object: _27.GrantAuthorizationAmino): _27.GrantAuthorization;
                toAmino(message: _27.GrantAuthorization): _27.GrantAuthorizationAmino;
                fromAminoMsg(object: _27.GrantAuthorizationAminoMsg): _27.GrantAuthorization;
                toAminoMsg(message: _27.GrantAuthorization): _27.GrantAuthorizationAminoMsg;
                fromProtoMsg(message: _27.GrantAuthorizationProtoMsg): _27.GrantAuthorization;
                toProto(message: _27.GrantAuthorization): Uint8Array;
                toProtoMsg(message: _27.GrantAuthorization): _27.GrantAuthorizationProtoMsg;
            };
            GrantQueueItem: {
                typeUrl: string;
                encode(message: _27.GrantQueueItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _27.GrantQueueItem;
                fromJSON(object: any): _27.GrantQueueItem;
                toJSON(message: _27.GrantQueueItem): unknown;
                fromPartial(object: Partial<_27.GrantQueueItem>): _27.GrantQueueItem;
                fromAmino(object: _27.GrantQueueItemAmino): _27.GrantQueueItem;
                toAmino(message: _27.GrantQueueItem): _27.GrantQueueItemAmino;
                fromAminoMsg(object: _27.GrantQueueItemAminoMsg): _27.GrantQueueItem;
                toAminoMsg(message: _27.GrantQueueItem): _27.GrantQueueItemAminoMsg;
                fromProtoMsg(message: _27.GrantQueueItemProtoMsg): _27.GrantQueueItem;
                toProto(message: _27.GrantQueueItem): Uint8Array;
                toProtoMsg(message: _27.GrantQueueItem): _27.GrantQueueItemProtoMsg;
            };
            Cosmos_authzv1beta1Authorization_InterfaceDecoder: (input: import("..").BinaryReader | Uint8Array) => import("../google/protobuf/any").Any | _33.SendAuthorization | _108.StakeAuthorization | import("../ibc/applications/transfer/v1/authz").TransferAuthorization | _27.GenericAuthorization;
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
                    encode(message: _32.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _32.Module;
                    fromJSON(object: any): _32.Module;
                    toJSON(message: _32.Module): unknown;
                    fromPartial(object: Partial<_32.Module>): _32.Module;
                    fromAmino(object: _32.ModuleAmino): _32.Module;
                    toAmino(message: _32.Module): _32.ModuleAmino;
                    fromAminoMsg(object: _32.ModuleAminoMsg): _32.Module;
                    toAminoMsg(message: _32.Module): _32.ModuleAminoMsg;
                    fromProtoMsg(message: _32.ModuleProtoMsg): _32.Module;
                    toProto(message: _32.Module): Uint8Array;
                    toProtoMsg(message: _32.Module): _32.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            Msg: typeof _263.Msg;
            Query: typeof _244.Query;
            QueryClientImpl: typeof _244.QueryClientImpl;
            LCDQueryClient: typeof _226.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _37.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _37.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _37.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setSendEnabled(value: _37.MsgSetSendEnabled): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _37.MsgSend): {
                        typeUrl: string;
                        value: _37.MsgSend;
                    };
                    multiSend(value: _37.MsgMultiSend): {
                        typeUrl: string;
                        value: _37.MsgMultiSend;
                    };
                    updateParams(value: _37.MsgUpdateParams): {
                        typeUrl: string;
                        value: _37.MsgUpdateParams;
                    };
                    setSendEnabled(value: _37.MsgSetSendEnabled): {
                        typeUrl: string;
                        value: _37.MsgSetSendEnabled;
                    };
                };
                toJSON: {
                    send(value: _37.MsgSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                    multiSend(value: _37.MsgMultiSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateParams(value: _37.MsgUpdateParams): {
                        typeUrl: string;
                        value: unknown;
                    };
                    setSendEnabled(value: _37.MsgSetSendEnabled): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _37.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _37.MsgMultiSend;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _37.MsgUpdateParams;
                    };
                    setSendEnabled(value: any): {
                        typeUrl: string;
                        value: _37.MsgSetSendEnabled;
                    };
                };
                fromPartial: {
                    send(value: _37.MsgSend): {
                        typeUrl: string;
                        value: _37.MsgSend;
                    };
                    multiSend(value: _37.MsgMultiSend): {
                        typeUrl: string;
                        value: _37.MsgMultiSend;
                    };
                    updateParams(value: _37.MsgUpdateParams): {
                        typeUrl: string;
                        value: _37.MsgUpdateParams;
                    };
                    setSendEnabled(value: _37.MsgSetSendEnabled): {
                        typeUrl: string;
                        value: _37.MsgSetSendEnabled;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _37.MsgSend) => _37.MsgSendAmino;
                    fromAmino: (object: _37.MsgSendAmino) => _37.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: (message: _37.MsgMultiSend) => _37.MsgMultiSendAmino;
                    fromAmino: (object: _37.MsgMultiSendAmino) => _37.MsgMultiSend;
                };
                "/cosmos.bank.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _37.MsgUpdateParams) => _37.MsgUpdateParamsAmino;
                    fromAmino: (object: _37.MsgUpdateParamsAmino) => _37.MsgUpdateParams;
                };
                "/cosmos.bank.v1beta1.MsgSetSendEnabled": {
                    aminoType: string;
                    toAmino: (message: _37.MsgSetSendEnabled) => _37.MsgSetSendEnabledAmino;
                    fromAmino: (object: _37.MsgSetSendEnabledAmino) => _37.MsgSetSendEnabled;
                };
            };
            protobufPackage: "cosmos.bank.v1beta1";
            MsgSend: {
                typeUrl: string;
                encode(message: _37.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _37.MsgSend;
                fromJSON(object: any): _37.MsgSend;
                toJSON(message: _37.MsgSend): unknown;
                fromPartial(object: Partial<_37.MsgSend>): _37.MsgSend;
                fromAmino(object: _37.MsgSendAmino): _37.MsgSend;
                toAmino(message: _37.MsgSend): _37.MsgSendAmino;
                fromAminoMsg(object: _37.MsgSendAminoMsg): _37.MsgSend;
                toAminoMsg(message: _37.MsgSend): _37.MsgSendAminoMsg;
                fromProtoMsg(message: _37.MsgSendProtoMsg): _37.MsgSend;
                toProto(message: _37.MsgSend): Uint8Array;
                toProtoMsg(message: _37.MsgSend): _37.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _37.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _37.MsgSendResponse;
                fromJSON(_: any): _37.MsgSendResponse;
                toJSON(_: _37.MsgSendResponse): unknown;
                fromPartial(_: Partial<_37.MsgSendResponse>): _37.MsgSendResponse;
                fromAmino(_: _37.MsgSendResponseAmino): _37.MsgSendResponse;
                toAmino(_: _37.MsgSendResponse): _37.MsgSendResponseAmino;
                fromAminoMsg(object: _37.MsgSendResponseAminoMsg): _37.MsgSendResponse;
                toAminoMsg(message: _37.MsgSendResponse): _37.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _37.MsgSendResponseProtoMsg): _37.MsgSendResponse;
                toProto(message: _37.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _37.MsgSendResponse): _37.MsgSendResponseProtoMsg;
            };
            MsgMultiSend: {
                typeUrl: string;
                encode(message: _37.MsgMultiSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _37.MsgMultiSend;
                fromJSON(object: any): _37.MsgMultiSend;
                toJSON(message: _37.MsgMultiSend): unknown;
                fromPartial(object: Partial<_37.MsgMultiSend>): _37.MsgMultiSend;
                fromAmino(object: _37.MsgMultiSendAmino): _37.MsgMultiSend;
                toAmino(message: _37.MsgMultiSend): _37.MsgMultiSendAmino;
                fromAminoMsg(object: _37.MsgMultiSendAminoMsg): _37.MsgMultiSend;
                toAminoMsg(message: _37.MsgMultiSend): _37.MsgMultiSendAminoMsg;
                fromProtoMsg(message: _37.MsgMultiSendProtoMsg): _37.MsgMultiSend;
                toProto(message: _37.MsgMultiSend): Uint8Array;
                toProtoMsg(message: _37.MsgMultiSend): _37.MsgMultiSendProtoMsg;
            };
            MsgMultiSendResponse: {
                typeUrl: string;
                encode(_: _37.MsgMultiSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _37.MsgMultiSendResponse;
                fromJSON(_: any): _37.MsgMultiSendResponse;
                toJSON(_: _37.MsgMultiSendResponse): unknown;
                fromPartial(_: Partial<_37.MsgMultiSendResponse>): _37.MsgMultiSendResponse;
                fromAmino(_: _37.MsgMultiSendResponseAmino): _37.MsgMultiSendResponse;
                toAmino(_: _37.MsgMultiSendResponse): _37.MsgMultiSendResponseAmino;
                fromAminoMsg(object: _37.MsgMultiSendResponseAminoMsg): _37.MsgMultiSendResponse;
                toAminoMsg(message: _37.MsgMultiSendResponse): _37.MsgMultiSendResponseAminoMsg;
                fromProtoMsg(message: _37.MsgMultiSendResponseProtoMsg): _37.MsgMultiSendResponse;
                toProto(message: _37.MsgMultiSendResponse): Uint8Array;
                toProtoMsg(message: _37.MsgMultiSendResponse): _37.MsgMultiSendResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _37.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _37.MsgUpdateParams;
                fromJSON(object: any): _37.MsgUpdateParams;
                toJSON(message: _37.MsgUpdateParams): unknown;
                fromPartial(object: Partial<_37.MsgUpdateParams>): _37.MsgUpdateParams;
                fromAmino(object: _37.MsgUpdateParamsAmino): _37.MsgUpdateParams;
                toAmino(message: _37.MsgUpdateParams): _37.MsgUpdateParamsAmino;
                fromAminoMsg(object: _37.MsgUpdateParamsAminoMsg): _37.MsgUpdateParams;
                toAminoMsg(message: _37.MsgUpdateParams): _37.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _37.MsgUpdateParamsProtoMsg): _37.MsgUpdateParams;
                toProto(message: _37.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _37.MsgUpdateParams): _37.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _37.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _37.MsgUpdateParamsResponse;
                fromJSON(_: any): _37.MsgUpdateParamsResponse;
                toJSON(_: _37.MsgUpdateParamsResponse): unknown;
                fromPartial(_: Partial<_37.MsgUpdateParamsResponse>): _37.MsgUpdateParamsResponse;
                fromAmino(_: _37.MsgUpdateParamsResponseAmino): _37.MsgUpdateParamsResponse;
                toAmino(_: _37.MsgUpdateParamsResponse): _37.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _37.MsgUpdateParamsResponseAminoMsg): _37.MsgUpdateParamsResponse;
                toAminoMsg(message: _37.MsgUpdateParamsResponse): _37.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _37.MsgUpdateParamsResponseProtoMsg): _37.MsgUpdateParamsResponse;
                toProto(message: _37.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _37.MsgUpdateParamsResponse): _37.MsgUpdateParamsResponseProtoMsg;
            };
            MsgSetSendEnabled: {
                typeUrl: string;
                encode(message: _37.MsgSetSendEnabled, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _37.MsgSetSendEnabled;
                fromJSON(object: any): _37.MsgSetSendEnabled;
                toJSON(message: _37.MsgSetSendEnabled): unknown;
                fromPartial(object: Partial<_37.MsgSetSendEnabled>): _37.MsgSetSendEnabled;
                fromAmino(object: _37.MsgSetSendEnabledAmino): _37.MsgSetSendEnabled;
                toAmino(message: _37.MsgSetSendEnabled): _37.MsgSetSendEnabledAmino;
                fromAminoMsg(object: _37.MsgSetSendEnabledAminoMsg): _37.MsgSetSendEnabled;
                toAminoMsg(message: _37.MsgSetSendEnabled): _37.MsgSetSendEnabledAminoMsg;
                fromProtoMsg(message: _37.MsgSetSendEnabledProtoMsg): _37.MsgSetSendEnabled;
                toProto(message: _37.MsgSetSendEnabled): Uint8Array;
                toProtoMsg(message: _37.MsgSetSendEnabled): _37.MsgSetSendEnabledProtoMsg;
            };
            MsgSetSendEnabledResponse: {
                typeUrl: string;
                encode(_: _37.MsgSetSendEnabledResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _37.MsgSetSendEnabledResponse;
                fromJSON(_: any): _37.MsgSetSendEnabledResponse;
                toJSON(_: _37.MsgSetSendEnabledResponse): unknown;
                fromPartial(_: Partial<_37.MsgSetSendEnabledResponse>): _37.MsgSetSendEnabledResponse;
                fromAmino(_: _37.MsgSetSendEnabledResponseAmino): _37.MsgSetSendEnabledResponse;
                toAmino(_: _37.MsgSetSendEnabledResponse): _37.MsgSetSendEnabledResponseAmino;
                fromAminoMsg(object: _37.MsgSetSendEnabledResponseAminoMsg): _37.MsgSetSendEnabledResponse;
                toAminoMsg(message: _37.MsgSetSendEnabledResponse): _37.MsgSetSendEnabledResponseAminoMsg;
                fromProtoMsg(message: _37.MsgSetSendEnabledResponseProtoMsg): _37.MsgSetSendEnabledResponse;
                toProto(message: _37.MsgSetSendEnabledResponse): Uint8Array;
                toProtoMsg(message: _37.MsgSetSendEnabledResponse): _37.MsgSetSendEnabledResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _36.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _36.QueryBalanceRequest;
                fromJSON(object: any): _36.QueryBalanceRequest;
                toJSON(message: _36.QueryBalanceRequest): unknown;
                fromPartial(object: Partial<_36.QueryBalanceRequest>): _36.QueryBalanceRequest;
                fromAmino(object: _36.QueryBalanceRequestAmino): _36.QueryBalanceRequest;
                toAmino(message: _36.QueryBalanceRequest): _36.QueryBalanceRequestAmino;
                fromAminoMsg(object: _36.QueryBalanceRequestAminoMsg): _36.QueryBalanceRequest;
                toAminoMsg(message: _36.QueryBalanceRequest): _36.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _36.QueryBalanceRequestProtoMsg): _36.QueryBalanceRequest;
                toProto(message: _36.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _36.QueryBalanceRequest): _36.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _36.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _36.QueryBalanceResponse;
                fromJSON(object: any): _36.QueryBalanceResponse;
                toJSON(message: _36.QueryBalanceResponse): unknown;
                fromPartial(object: Partial<_36.QueryBalanceResponse>): _36.QueryBalanceResponse;
                fromAmino(object: _36.QueryBalanceResponseAmino): _36.QueryBalanceResponse;
                toAmino(message: _36.QueryBalanceResponse): _36.QueryBalanceResponseAmino;
                fromAminoMsg(object: _36.QueryBalanceResponseAminoMsg): _36.QueryBalanceResponse;
                toAminoMsg(message: _36.QueryBalanceResponse): _36.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _36.QueryBalanceResponseProtoMsg): _36.QueryBalanceResponse;
                toProto(message: _36.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _36.QueryBalanceResponse): _36.QueryBalanceResponseProtoMsg;
            };
            QueryAllBalancesRequest: {
                typeUrl: string;
                encode(message: _36.QueryAllBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _36.QueryAllBalancesRequest;
                fromJSON(object: any): _36.QueryAllBalancesRequest;
                toJSON(message: _36.QueryAllBalancesRequest): unknown;
                fromPartial(object: Partial<_36.QueryAllBalancesRequest>): _36.QueryAllBalancesRequest;
                fromAmino(object: _36.QueryAllBalancesRequestAmino): _36.QueryAllBalancesRequest;
                toAmino(message: _36.QueryAllBalancesRequest): _36.QueryAllBalancesRequestAmino;
                fromAminoMsg(object: _36.QueryAllBalancesRequestAminoMsg): _36.QueryAllBalancesRequest;
                toAminoMsg(message: _36.QueryAllBalancesRequest): _36.QueryAllBalancesRequestAminoMsg;
                fromProtoMsg(message: _36.QueryAllBalancesRequestProtoMsg): _36.QueryAllBalancesRequest;
                toProto(message: _36.QueryAllBalancesRequest): Uint8Array;
                toProtoMsg(message: _36.QueryAllBalancesRequest): _36.QueryAllBalancesRequestProtoMsg;
            };
            QueryAllBalancesResponse: {
                typeUrl: string;
                encode(message: _36.QueryAllBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _36.QueryAllBalancesResponse;
                fromJSON(object: any): _36.QueryAllBalancesResponse;
                toJSON(message: _36.QueryAllBalancesResponse): unknown;
                fromPartial(object: Partial<_36.QueryAllBalancesResponse>): _36.QueryAllBalancesResponse;
                fromAmino(object: _36.QueryAllBalancesResponseAmino): _36.QueryAllBalancesResponse;
                toAmino(message: _36.QueryAllBalancesResponse): _36.QueryAllBalancesResponseAmino;
                fromAminoMsg(object: _36.QueryAllBalancesResponseAminoMsg): _36.QueryAllBalancesResponse;
                toAminoMsg(message: _36.QueryAllBalancesResponse): _36.QueryAllBalancesResponseAminoMsg;
                fromProtoMsg(message: _36.QueryAllBalancesResponseProtoMsg): _36.QueryAllBalancesResponse;
                toProto(message: _36.QueryAllBalancesResponse): Uint8Array;
                toProtoMsg(message: _36.QueryAllBalancesResponse): _36.QueryAllBalancesResponseProtoMsg;
            };
            QuerySpendableBalancesRequest: {
                typeUrl: string;
                encode(message: _36.QuerySpendableBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _36.QuerySpendableBalancesRequest;
                fromJSON(object: any): _36.QuerySpendableBalancesRequest;
                toJSON(message: _36.QuerySpendableBalancesRequest): unknown;
                fromPartial(object: Partial<_36.QuerySpendableBalancesRequest>): _36.QuerySpendableBalancesRequest;
                fromAmino(object: _36.QuerySpendableBalancesRequestAmino): _36.QuerySpendableBalancesRequest;
                toAmino(message: _36.QuerySpendableBalancesRequest): _36.QuerySpendableBalancesRequestAmino;
                fromAminoMsg(object: _36.QuerySpendableBalancesRequestAminoMsg): _36.QuerySpendableBalancesRequest;
                toAminoMsg(message: _36.QuerySpendableBalancesRequest): _36.QuerySpendableBalancesRequestAminoMsg;
                fromProtoMsg(message: _36.QuerySpendableBalancesRequestProtoMsg): _36.QuerySpendableBalancesRequest;
                toProto(message: _36.QuerySpendableBalancesRequest): Uint8Array;
                toProtoMsg(message: _36.QuerySpendableBalancesRequest): _36.QuerySpendableBalancesRequestProtoMsg;
            };
            QuerySpendableBalancesResponse: {
                typeUrl: string;
                encode(message: _36.QuerySpendableBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _36.QuerySpendableBalancesResponse;
                fromJSON(object: any): _36.QuerySpendableBalancesResponse;
                toJSON(message: _36.QuerySpendableBalancesResponse): unknown;
                fromPartial(object: Partial<_36.QuerySpendableBalancesResponse>): _36.QuerySpendableBalancesResponse;
                fromAmino(object: _36.QuerySpendableBalancesResponseAmino): _36.QuerySpendableBalancesResponse;
                toAmino(message: _36.QuerySpendableBalancesResponse): _36.QuerySpendableBalancesResponseAmino;
                fromAminoMsg(object: _36.QuerySpendableBalancesResponseAminoMsg): _36.QuerySpendableBalancesResponse;
                toAminoMsg(message: _36.QuerySpendableBalancesResponse): _36.QuerySpendableBalancesResponseAminoMsg;
                fromProtoMsg(message: _36.QuerySpendableBalancesResponseProtoMsg): _36.QuerySpendableBalancesResponse;
                toProto(message: _36.QuerySpendableBalancesResponse): Uint8Array;
                toProtoMsg(message: _36.QuerySpendableBalancesResponse): _36.QuerySpendableBalancesResponseProtoMsg;
            };
            QuerySpendableBalanceByDenomRequest: {
                typeUrl: string;
                encode(message: _36.QuerySpendableBalanceByDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _36.QuerySpendableBalanceByDenomRequest;
                fromJSON(object: any): _36.QuerySpendableBalanceByDenomRequest;
                toJSON(message: _36.QuerySpendableBalanceByDenomRequest): unknown;
                fromPartial(object: Partial<_36.QuerySpendableBalanceByDenomRequest>): _36.QuerySpendableBalanceByDenomRequest;
                fromAmino(object: _36.QuerySpendableBalanceByDenomRequestAmino): _36.QuerySpendableBalanceByDenomRequest;
                toAmino(message: _36.QuerySpendableBalanceByDenomRequest): _36.QuerySpendableBalanceByDenomRequestAmino;
                fromAminoMsg(object: _36.QuerySpendableBalanceByDenomRequestAminoMsg): _36.QuerySpendableBalanceByDenomRequest;
                toAminoMsg(message: _36.QuerySpendableBalanceByDenomRequest): _36.QuerySpendableBalanceByDenomRequestAminoMsg;
                fromProtoMsg(message: _36.QuerySpendableBalanceByDenomRequestProtoMsg): _36.QuerySpendableBalanceByDenomRequest;
                toProto(message: _36.QuerySpendableBalanceByDenomRequest): Uint8Array;
                toProtoMsg(message: _36.QuerySpendableBalanceByDenomRequest): _36.QuerySpendableBalanceByDenomRequestProtoMsg;
            };
            QuerySpendableBalanceByDenomResponse: {
                typeUrl: string;
                encode(message: _36.QuerySpendableBalanceByDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _36.QuerySpendableBalanceByDenomResponse;
                fromJSON(object: any): _36.QuerySpendableBalanceByDenomResponse;
                toJSON(message: _36.QuerySpendableBalanceByDenomResponse): unknown;
                fromPartial(object: Partial<_36.QuerySpendableBalanceByDenomResponse>): _36.QuerySpendableBalanceByDenomResponse;
                fromAmino(object: _36.QuerySpendableBalanceByDenomResponseAmino): _36.QuerySpendableBalanceByDenomResponse;
                toAmino(message: _36.QuerySpendableBalanceByDenomResponse): _36.QuerySpendableBalanceByDenomResponseAmino;
                fromAminoMsg(object: _36.QuerySpendableBalanceByDenomResponseAminoMsg): _36.QuerySpendableBalanceByDenomResponse;
                toAminoMsg(message: _36.QuerySpendableBalanceByDenomResponse): _36.QuerySpendableBalanceByDenomResponseAminoMsg;
                fromProtoMsg(message: _36.QuerySpendableBalanceByDenomResponseProtoMsg): _36.QuerySpendableBalanceByDenomResponse;
                toProto(message: _36.QuerySpendableBalanceByDenomResponse): Uint8Array;
                toProtoMsg(message: _36.QuerySpendableBalanceByDenomResponse): _36.QuerySpendableBalanceByDenomResponseProtoMsg;
            };
            QueryTotalSupplyRequest: {
                typeUrl: string;
                encode(message: _36.QueryTotalSupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _36.QueryTotalSupplyRequest;
                fromJSON(object: any): _36.QueryTotalSupplyRequest;
                toJSON(message: _36.QueryTotalSupplyRequest): unknown;
                fromPartial(object: Partial<_36.QueryTotalSupplyRequest>): _36.QueryTotalSupplyRequest;
                fromAmino(object: _36.QueryTotalSupplyRequestAmino): _36.QueryTotalSupplyRequest;
                toAmino(message: _36.QueryTotalSupplyRequest): _36.QueryTotalSupplyRequestAmino;
                fromAminoMsg(object: _36.QueryTotalSupplyRequestAminoMsg): _36.QueryTotalSupplyRequest;
                toAminoMsg(message: _36.QueryTotalSupplyRequest): _36.QueryTotalSupplyRequestAminoMsg;
                fromProtoMsg(message: _36.QueryTotalSupplyRequestProtoMsg): _36.QueryTotalSupplyRequest;
                toProto(message: _36.QueryTotalSupplyRequest): Uint8Array;
                toProtoMsg(message: _36.QueryTotalSupplyRequest): _36.QueryTotalSupplyRequestProtoMsg;
            };
            QueryTotalSupplyResponse: {
                typeUrl: string;
                encode(message: _36.QueryTotalSupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _36.QueryTotalSupplyResponse;
                fromJSON(object: any): _36.QueryTotalSupplyResponse;
                toJSON(message: _36.QueryTotalSupplyResponse): unknown;
                fromPartial(object: Partial<_36.QueryTotalSupplyResponse>): _36.QueryTotalSupplyResponse;
                fromAmino(object: _36.QueryTotalSupplyResponseAmino): _36.QueryTotalSupplyResponse;
                toAmino(message: _36.QueryTotalSupplyResponse): _36.QueryTotalSupplyResponseAmino;
                fromAminoMsg(object: _36.QueryTotalSupplyResponseAminoMsg): _36.QueryTotalSupplyResponse;
                toAminoMsg(message: _36.QueryTotalSupplyResponse): _36.QueryTotalSupplyResponseAminoMsg;
                fromProtoMsg(message: _36.QueryTotalSupplyResponseProtoMsg): _36.QueryTotalSupplyResponse;
                toProto(message: _36.QueryTotalSupplyResponse): Uint8Array;
                toProtoMsg(message: _36.QueryTotalSupplyResponse): _36.QueryTotalSupplyResponseProtoMsg;
            };
            QuerySupplyOfRequest: {
                typeUrl: string;
                encode(message: _36.QuerySupplyOfRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _36.QuerySupplyOfRequest;
                fromJSON(object: any): _36.QuerySupplyOfRequest;
                toJSON(message: _36.QuerySupplyOfRequest): unknown;
                fromPartial(object: Partial<_36.QuerySupplyOfRequest>): _36.QuerySupplyOfRequest;
                fromAmino(object: _36.QuerySupplyOfRequestAmino): _36.QuerySupplyOfRequest;
                toAmino(message: _36.QuerySupplyOfRequest): _36.QuerySupplyOfRequestAmino;
                fromAminoMsg(object: _36.QuerySupplyOfRequestAminoMsg): _36.QuerySupplyOfRequest;
                toAminoMsg(message: _36.QuerySupplyOfRequest): _36.QuerySupplyOfRequestAminoMsg;
                fromProtoMsg(message: _36.QuerySupplyOfRequestProtoMsg): _36.QuerySupplyOfRequest;
                toProto(message: _36.QuerySupplyOfRequest): Uint8Array;
                toProtoMsg(message: _36.QuerySupplyOfRequest): _36.QuerySupplyOfRequestProtoMsg;
            };
            QuerySupplyOfResponse: {
                typeUrl: string;
                encode(message: _36.QuerySupplyOfResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _36.QuerySupplyOfResponse;
                fromJSON(object: any): _36.QuerySupplyOfResponse;
                toJSON(message: _36.QuerySupplyOfResponse): unknown;
                fromPartial(object: Partial<_36.QuerySupplyOfResponse>): _36.QuerySupplyOfResponse;
                fromAmino(object: _36.QuerySupplyOfResponseAmino): _36.QuerySupplyOfResponse;
                toAmino(message: _36.QuerySupplyOfResponse): _36.QuerySupplyOfResponseAmino;
                fromAminoMsg(object: _36.QuerySupplyOfResponseAminoMsg): _36.QuerySupplyOfResponse;
                toAminoMsg(message: _36.QuerySupplyOfResponse): _36.QuerySupplyOfResponseAminoMsg;
                fromProtoMsg(message: _36.QuerySupplyOfResponseProtoMsg): _36.QuerySupplyOfResponse;
                toProto(message: _36.QuerySupplyOfResponse): Uint8Array;
                toProtoMsg(message: _36.QuerySupplyOfResponse): _36.QuerySupplyOfResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _36.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _36.QueryParamsRequest;
                fromJSON(_: any): _36.QueryParamsRequest;
                toJSON(_: _36.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_36.QueryParamsRequest>): _36.QueryParamsRequest;
                fromAmino(_: _36.QueryParamsRequestAmino): _36.QueryParamsRequest;
                toAmino(_: _36.QueryParamsRequest): _36.QueryParamsRequestAmino;
                fromAminoMsg(object: _36.QueryParamsRequestAminoMsg): _36.QueryParamsRequest;
                toAminoMsg(message: _36.QueryParamsRequest): _36.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _36.QueryParamsRequestProtoMsg): _36.QueryParamsRequest;
                toProto(message: _36.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _36.QueryParamsRequest): _36.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _36.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _36.QueryParamsResponse;
                fromJSON(object: any): _36.QueryParamsResponse;
                toJSON(message: _36.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_36.QueryParamsResponse>): _36.QueryParamsResponse;
                fromAmino(object: _36.QueryParamsResponseAmino): _36.QueryParamsResponse;
                toAmino(message: _36.QueryParamsResponse): _36.QueryParamsResponseAmino;
                fromAminoMsg(object: _36.QueryParamsResponseAminoMsg): _36.QueryParamsResponse;
                toAminoMsg(message: _36.QueryParamsResponse): _36.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _36.QueryParamsResponseProtoMsg): _36.QueryParamsResponse;
                toProto(message: _36.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _36.QueryParamsResponse): _36.QueryParamsResponseProtoMsg;
            };
            QueryDenomsMetadataRequest: {
                typeUrl: string;
                encode(message: _36.QueryDenomsMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _36.QueryDenomsMetadataRequest;
                fromJSON(object: any): _36.QueryDenomsMetadataRequest;
                toJSON(message: _36.QueryDenomsMetadataRequest): unknown;
                fromPartial(object: Partial<_36.QueryDenomsMetadataRequest>): _36.QueryDenomsMetadataRequest;
                fromAmino(object: _36.QueryDenomsMetadataRequestAmino): _36.QueryDenomsMetadataRequest;
                toAmino(message: _36.QueryDenomsMetadataRequest): _36.QueryDenomsMetadataRequestAmino;
                fromAminoMsg(object: _36.QueryDenomsMetadataRequestAminoMsg): _36.QueryDenomsMetadataRequest;
                toAminoMsg(message: _36.QueryDenomsMetadataRequest): _36.QueryDenomsMetadataRequestAminoMsg;
                fromProtoMsg(message: _36.QueryDenomsMetadataRequestProtoMsg): _36.QueryDenomsMetadataRequest;
                toProto(message: _36.QueryDenomsMetadataRequest): Uint8Array;
                toProtoMsg(message: _36.QueryDenomsMetadataRequest): _36.QueryDenomsMetadataRequestProtoMsg;
            };
            QueryDenomsMetadataResponse: {
                typeUrl: string;
                encode(message: _36.QueryDenomsMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _36.QueryDenomsMetadataResponse;
                fromJSON(object: any): _36.QueryDenomsMetadataResponse;
                toJSON(message: _36.QueryDenomsMetadataResponse): unknown;
                fromPartial(object: Partial<_36.QueryDenomsMetadataResponse>): _36.QueryDenomsMetadataResponse;
                fromAmino(object: _36.QueryDenomsMetadataResponseAmino): _36.QueryDenomsMetadataResponse;
                toAmino(message: _36.QueryDenomsMetadataResponse): _36.QueryDenomsMetadataResponseAmino;
                fromAminoMsg(object: _36.QueryDenomsMetadataResponseAminoMsg): _36.QueryDenomsMetadataResponse;
                toAminoMsg(message: _36.QueryDenomsMetadataResponse): _36.QueryDenomsMetadataResponseAminoMsg;
                fromProtoMsg(message: _36.QueryDenomsMetadataResponseProtoMsg): _36.QueryDenomsMetadataResponse;
                toProto(message: _36.QueryDenomsMetadataResponse): Uint8Array;
                toProtoMsg(message: _36.QueryDenomsMetadataResponse): _36.QueryDenomsMetadataResponseProtoMsg;
            };
            QueryDenomMetadataRequest: {
                typeUrl: string;
                encode(message: _36.QueryDenomMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _36.QueryDenomMetadataRequest;
                fromJSON(object: any): _36.QueryDenomMetadataRequest;
                toJSON(message: _36.QueryDenomMetadataRequest): unknown;
                fromPartial(object: Partial<_36.QueryDenomMetadataRequest>): _36.QueryDenomMetadataRequest;
                fromAmino(object: _36.QueryDenomMetadataRequestAmino): _36.QueryDenomMetadataRequest;
                toAmino(message: _36.QueryDenomMetadataRequest): _36.QueryDenomMetadataRequestAmino;
                fromAminoMsg(object: _36.QueryDenomMetadataRequestAminoMsg): _36.QueryDenomMetadataRequest;
                toAminoMsg(message: _36.QueryDenomMetadataRequest): _36.QueryDenomMetadataRequestAminoMsg;
                fromProtoMsg(message: _36.QueryDenomMetadataRequestProtoMsg): _36.QueryDenomMetadataRequest;
                toProto(message: _36.QueryDenomMetadataRequest): Uint8Array;
                toProtoMsg(message: _36.QueryDenomMetadataRequest): _36.QueryDenomMetadataRequestProtoMsg;
            };
            QueryDenomMetadataResponse: {
                typeUrl: string;
                encode(message: _36.QueryDenomMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _36.QueryDenomMetadataResponse;
                fromJSON(object: any): _36.QueryDenomMetadataResponse;
                toJSON(message: _36.QueryDenomMetadataResponse): unknown;
                fromPartial(object: Partial<_36.QueryDenomMetadataResponse>): _36.QueryDenomMetadataResponse;
                fromAmino(object: _36.QueryDenomMetadataResponseAmino): _36.QueryDenomMetadataResponse;
                toAmino(message: _36.QueryDenomMetadataResponse): _36.QueryDenomMetadataResponseAmino;
                fromAminoMsg(object: _36.QueryDenomMetadataResponseAminoMsg): _36.QueryDenomMetadataResponse;
                toAminoMsg(message: _36.QueryDenomMetadataResponse): _36.QueryDenomMetadataResponseAminoMsg;
                fromProtoMsg(message: _36.QueryDenomMetadataResponseProtoMsg): _36.QueryDenomMetadataResponse;
                toProto(message: _36.QueryDenomMetadataResponse): Uint8Array;
                toProtoMsg(message: _36.QueryDenomMetadataResponse): _36.QueryDenomMetadataResponseProtoMsg;
            };
            QueryDenomMetadataByQueryStringRequest: {
                typeUrl: string;
                encode(message: _36.QueryDenomMetadataByQueryStringRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _36.QueryDenomMetadataByQueryStringRequest;
                fromJSON(object: any): _36.QueryDenomMetadataByQueryStringRequest;
                toJSON(message: _36.QueryDenomMetadataByQueryStringRequest): unknown;
                fromPartial(object: Partial<_36.QueryDenomMetadataByQueryStringRequest>): _36.QueryDenomMetadataByQueryStringRequest;
                fromAmino(object: _36.QueryDenomMetadataByQueryStringRequestAmino): _36.QueryDenomMetadataByQueryStringRequest;
                toAmino(message: _36.QueryDenomMetadataByQueryStringRequest): _36.QueryDenomMetadataByQueryStringRequestAmino;
                fromAminoMsg(object: _36.QueryDenomMetadataByQueryStringRequestAminoMsg): _36.QueryDenomMetadataByQueryStringRequest;
                toAminoMsg(message: _36.QueryDenomMetadataByQueryStringRequest): _36.QueryDenomMetadataByQueryStringRequestAminoMsg;
                fromProtoMsg(message: _36.QueryDenomMetadataByQueryStringRequestProtoMsg): _36.QueryDenomMetadataByQueryStringRequest;
                toProto(message: _36.QueryDenomMetadataByQueryStringRequest): Uint8Array;
                toProtoMsg(message: _36.QueryDenomMetadataByQueryStringRequest): _36.QueryDenomMetadataByQueryStringRequestProtoMsg;
            };
            QueryDenomMetadataByQueryStringResponse: {
                typeUrl: string;
                encode(message: _36.QueryDenomMetadataByQueryStringResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _36.QueryDenomMetadataByQueryStringResponse;
                fromJSON(object: any): _36.QueryDenomMetadataByQueryStringResponse;
                toJSON(message: _36.QueryDenomMetadataByQueryStringResponse): unknown;
                fromPartial(object: Partial<_36.QueryDenomMetadataByQueryStringResponse>): _36.QueryDenomMetadataByQueryStringResponse;
                fromAmino(object: _36.QueryDenomMetadataByQueryStringResponseAmino): _36.QueryDenomMetadataByQueryStringResponse;
                toAmino(message: _36.QueryDenomMetadataByQueryStringResponse): _36.QueryDenomMetadataByQueryStringResponseAmino;
                fromAminoMsg(object: _36.QueryDenomMetadataByQueryStringResponseAminoMsg): _36.QueryDenomMetadataByQueryStringResponse;
                toAminoMsg(message: _36.QueryDenomMetadataByQueryStringResponse): _36.QueryDenomMetadataByQueryStringResponseAminoMsg;
                fromProtoMsg(message: _36.QueryDenomMetadataByQueryStringResponseProtoMsg): _36.QueryDenomMetadataByQueryStringResponse;
                toProto(message: _36.QueryDenomMetadataByQueryStringResponse): Uint8Array;
                toProtoMsg(message: _36.QueryDenomMetadataByQueryStringResponse): _36.QueryDenomMetadataByQueryStringResponseProtoMsg;
            };
            QueryDenomOwnersRequest: {
                typeUrl: string;
                encode(message: _36.QueryDenomOwnersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _36.QueryDenomOwnersRequest;
                fromJSON(object: any): _36.QueryDenomOwnersRequest;
                toJSON(message: _36.QueryDenomOwnersRequest): unknown;
                fromPartial(object: Partial<_36.QueryDenomOwnersRequest>): _36.QueryDenomOwnersRequest;
                fromAmino(object: _36.QueryDenomOwnersRequestAmino): _36.QueryDenomOwnersRequest;
                toAmino(message: _36.QueryDenomOwnersRequest): _36.QueryDenomOwnersRequestAmino;
                fromAminoMsg(object: _36.QueryDenomOwnersRequestAminoMsg): _36.QueryDenomOwnersRequest;
                toAminoMsg(message: _36.QueryDenomOwnersRequest): _36.QueryDenomOwnersRequestAminoMsg;
                fromProtoMsg(message: _36.QueryDenomOwnersRequestProtoMsg): _36.QueryDenomOwnersRequest;
                toProto(message: _36.QueryDenomOwnersRequest): Uint8Array;
                toProtoMsg(message: _36.QueryDenomOwnersRequest): _36.QueryDenomOwnersRequestProtoMsg;
            };
            DenomOwner: {
                typeUrl: string;
                encode(message: _36.DenomOwner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _36.DenomOwner;
                fromJSON(object: any): _36.DenomOwner;
                toJSON(message: _36.DenomOwner): unknown;
                fromPartial(object: Partial<_36.DenomOwner>): _36.DenomOwner;
                fromAmino(object: _36.DenomOwnerAmino): _36.DenomOwner;
                toAmino(message: _36.DenomOwner): _36.DenomOwnerAmino;
                fromAminoMsg(object: _36.DenomOwnerAminoMsg): _36.DenomOwner;
                toAminoMsg(message: _36.DenomOwner): _36.DenomOwnerAminoMsg;
                fromProtoMsg(message: _36.DenomOwnerProtoMsg): _36.DenomOwner;
                toProto(message: _36.DenomOwner): Uint8Array;
                toProtoMsg(message: _36.DenomOwner): _36.DenomOwnerProtoMsg;
            };
            QueryDenomOwnersResponse: {
                typeUrl: string;
                encode(message: _36.QueryDenomOwnersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _36.QueryDenomOwnersResponse;
                fromJSON(object: any): _36.QueryDenomOwnersResponse;
                toJSON(message: _36.QueryDenomOwnersResponse): unknown;
                fromPartial(object: Partial<_36.QueryDenomOwnersResponse>): _36.QueryDenomOwnersResponse;
                fromAmino(object: _36.QueryDenomOwnersResponseAmino): _36.QueryDenomOwnersResponse;
                toAmino(message: _36.QueryDenomOwnersResponse): _36.QueryDenomOwnersResponseAmino;
                fromAminoMsg(object: _36.QueryDenomOwnersResponseAminoMsg): _36.QueryDenomOwnersResponse;
                toAminoMsg(message: _36.QueryDenomOwnersResponse): _36.QueryDenomOwnersResponseAminoMsg;
                fromProtoMsg(message: _36.QueryDenomOwnersResponseProtoMsg): _36.QueryDenomOwnersResponse;
                toProto(message: _36.QueryDenomOwnersResponse): Uint8Array;
                toProtoMsg(message: _36.QueryDenomOwnersResponse): _36.QueryDenomOwnersResponseProtoMsg;
            };
            QuerySendEnabledRequest: {
                typeUrl: string;
                encode(message: _36.QuerySendEnabledRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _36.QuerySendEnabledRequest;
                fromJSON(object: any): _36.QuerySendEnabledRequest;
                toJSON(message: _36.QuerySendEnabledRequest): unknown;
                fromPartial(object: Partial<_36.QuerySendEnabledRequest>): _36.QuerySendEnabledRequest;
                fromAmino(object: _36.QuerySendEnabledRequestAmino): _36.QuerySendEnabledRequest;
                toAmino(message: _36.QuerySendEnabledRequest): _36.QuerySendEnabledRequestAmino;
                fromAminoMsg(object: _36.QuerySendEnabledRequestAminoMsg): _36.QuerySendEnabledRequest;
                toAminoMsg(message: _36.QuerySendEnabledRequest): _36.QuerySendEnabledRequestAminoMsg;
                fromProtoMsg(message: _36.QuerySendEnabledRequestProtoMsg): _36.QuerySendEnabledRequest;
                toProto(message: _36.QuerySendEnabledRequest): Uint8Array;
                toProtoMsg(message: _36.QuerySendEnabledRequest): _36.QuerySendEnabledRequestProtoMsg;
            };
            QuerySendEnabledResponse: {
                typeUrl: string;
                encode(message: _36.QuerySendEnabledResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _36.QuerySendEnabledResponse;
                fromJSON(object: any): _36.QuerySendEnabledResponse;
                toJSON(message: _36.QuerySendEnabledResponse): unknown;
                fromPartial(object: Partial<_36.QuerySendEnabledResponse>): _36.QuerySendEnabledResponse;
                fromAmino(object: _36.QuerySendEnabledResponseAmino): _36.QuerySendEnabledResponse;
                toAmino(message: _36.QuerySendEnabledResponse): _36.QuerySendEnabledResponseAmino;
                fromAminoMsg(object: _36.QuerySendEnabledResponseAminoMsg): _36.QuerySendEnabledResponse;
                toAminoMsg(message: _36.QuerySendEnabledResponse): _36.QuerySendEnabledResponseAminoMsg;
                fromProtoMsg(message: _36.QuerySendEnabledResponseProtoMsg): _36.QuerySendEnabledResponse;
                toProto(message: _36.QuerySendEnabledResponse): Uint8Array;
                toProtoMsg(message: _36.QuerySendEnabledResponse): _36.QuerySendEnabledResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _35.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _35.GenesisState;
                fromJSON(object: any): _35.GenesisState;
                toJSON(message: _35.GenesisState): unknown;
                fromPartial(object: Partial<_35.GenesisState>): _35.GenesisState;
                fromAmino(object: _35.GenesisStateAmino): _35.GenesisState;
                toAmino(message: _35.GenesisState): _35.GenesisStateAmino;
                fromAminoMsg(object: _35.GenesisStateAminoMsg): _35.GenesisState;
                toAminoMsg(message: _35.GenesisState): _35.GenesisStateAminoMsg;
                fromProtoMsg(message: _35.GenesisStateProtoMsg): _35.GenesisState;
                toProto(message: _35.GenesisState): Uint8Array;
                toProtoMsg(message: _35.GenesisState): _35.GenesisStateProtoMsg;
            };
            Balance: {
                typeUrl: string;
                encode(message: _35.Balance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _35.Balance;
                fromJSON(object: any): _35.Balance;
                toJSON(message: _35.Balance): unknown;
                fromPartial(object: Partial<_35.Balance>): _35.Balance;
                fromAmino(object: _35.BalanceAmino): _35.Balance;
                toAmino(message: _35.Balance): _35.BalanceAmino;
                fromAminoMsg(object: _35.BalanceAminoMsg): _35.Balance;
                toAminoMsg(message: _35.Balance): _35.BalanceAminoMsg;
                fromProtoMsg(message: _35.BalanceProtoMsg): _35.Balance;
                toProto(message: _35.Balance): Uint8Array;
                toProtoMsg(message: _35.Balance): _35.BalanceProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _34.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _34.Params;
                fromJSON(object: any): _34.Params;
                toJSON(message: _34.Params): unknown;
                fromPartial(object: Partial<_34.Params>): _34.Params;
                fromAmino(object: _34.ParamsAmino): _34.Params;
                toAmino(message: _34.Params): _34.ParamsAmino;
                fromAminoMsg(object: _34.ParamsAminoMsg): _34.Params;
                toAminoMsg(message: _34.Params): _34.ParamsAminoMsg;
                fromProtoMsg(message: _34.ParamsProtoMsg): _34.Params;
                toProto(message: _34.Params): Uint8Array;
                toProtoMsg(message: _34.Params): _34.ParamsProtoMsg;
            };
            SendEnabled: {
                typeUrl: string;
                encode(message: _34.SendEnabled, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _34.SendEnabled;
                fromJSON(object: any): _34.SendEnabled;
                toJSON(message: _34.SendEnabled): unknown;
                fromPartial(object: Partial<_34.SendEnabled>): _34.SendEnabled;
                fromAmino(object: _34.SendEnabledAmino): _34.SendEnabled;
                toAmino(message: _34.SendEnabled): _34.SendEnabledAmino;
                fromAminoMsg(object: _34.SendEnabledAminoMsg): _34.SendEnabled;
                toAminoMsg(message: _34.SendEnabled): _34.SendEnabledAminoMsg;
                fromProtoMsg(message: _34.SendEnabledProtoMsg): _34.SendEnabled;
                toProto(message: _34.SendEnabled): Uint8Array;
                toProtoMsg(message: _34.SendEnabled): _34.SendEnabledProtoMsg;
            };
            Input: {
                typeUrl: string;
                encode(message: _34.Input, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _34.Input;
                fromJSON(object: any): _34.Input;
                toJSON(message: _34.Input): unknown;
                fromPartial(object: Partial<_34.Input>): _34.Input;
                fromAmino(object: _34.InputAmino): _34.Input;
                toAmino(message: _34.Input): _34.InputAmino;
                fromAminoMsg(object: _34.InputAminoMsg): _34.Input;
                toAminoMsg(message: _34.Input): _34.InputAminoMsg;
                fromProtoMsg(message: _34.InputProtoMsg): _34.Input;
                toProto(message: _34.Input): Uint8Array;
                toProtoMsg(message: _34.Input): _34.InputProtoMsg;
            };
            Output: {
                typeUrl: string;
                encode(message: _34.Output, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _34.Output;
                fromJSON(object: any): _34.Output;
                toJSON(message: _34.Output): unknown;
                fromPartial(object: Partial<_34.Output>): _34.Output;
                fromAmino(object: _34.OutputAmino): _34.Output;
                toAmino(message: _34.Output): _34.OutputAmino;
                fromAminoMsg(object: _34.OutputAminoMsg): _34.Output;
                toAminoMsg(message: _34.Output): _34.OutputAminoMsg;
                fromProtoMsg(message: _34.OutputProtoMsg): _34.Output;
                toProto(message: _34.Output): Uint8Array;
                toProtoMsg(message: _34.Output): _34.OutputProtoMsg;
            };
            Supply: {
                typeUrl: string;
                encode(message: _34.Supply, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _34.Supply;
                fromJSON(object: any): _34.Supply;
                toJSON(message: _34.Supply): unknown;
                fromPartial(object: Partial<_34.Supply>): _34.Supply;
                fromAmino(object: _34.SupplyAmino): _34.Supply;
                toAmino(message: _34.Supply): _34.SupplyAmino;
                fromAminoMsg(object: _34.SupplyAminoMsg): _34.Supply;
                toAminoMsg(message: _34.Supply): _34.SupplyAminoMsg;
                fromProtoMsg(message: _34.SupplyProtoMsg): _34.Supply;
                toProto(message: _34.Supply): Uint8Array;
                toProtoMsg(message: _34.Supply): _34.SupplyProtoMsg;
            };
            DenomUnit: {
                typeUrl: string;
                encode(message: _34.DenomUnit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _34.DenomUnit;
                fromJSON(object: any): _34.DenomUnit;
                toJSON(message: _34.DenomUnit): unknown;
                fromPartial(object: Partial<_34.DenomUnit>): _34.DenomUnit;
                fromAmino(object: _34.DenomUnitAmino): _34.DenomUnit;
                toAmino(message: _34.DenomUnit): _34.DenomUnitAmino;
                fromAminoMsg(object: _34.DenomUnitAminoMsg): _34.DenomUnit;
                toAminoMsg(message: _34.DenomUnit): _34.DenomUnitAminoMsg;
                fromProtoMsg(message: _34.DenomUnitProtoMsg): _34.DenomUnit;
                toProto(message: _34.DenomUnit): Uint8Array;
                toProtoMsg(message: _34.DenomUnit): _34.DenomUnitProtoMsg;
            };
            Metadata: {
                typeUrl: string;
                encode(message: _34.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _34.Metadata;
                fromJSON(object: any): _34.Metadata;
                toJSON(message: _34.Metadata): unknown;
                fromPartial(object: Partial<_34.Metadata>): _34.Metadata;
                fromAmino(object: _34.MetadataAmino): _34.Metadata;
                toAmino(message: _34.Metadata): _34.MetadataAmino;
                fromAminoMsg(object: _34.MetadataAminoMsg): _34.Metadata;
                toAminoMsg(message: _34.Metadata): _34.MetadataAminoMsg;
                fromProtoMsg(message: _34.MetadataProtoMsg): _34.Metadata;
                toProto(message: _34.Metadata): Uint8Array;
                toProtoMsg(message: _34.Metadata): _34.MetadataProtoMsg;
            };
            SendAuthorization: {
                typeUrl: string;
                encode(message: _33.SendAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _33.SendAuthorization;
                fromJSON(object: any): _33.SendAuthorization;
                toJSON(message: _33.SendAuthorization): unknown;
                fromPartial(object: Partial<_33.SendAuthorization>): _33.SendAuthorization;
                fromAmino(object: _33.SendAuthorizationAmino): _33.SendAuthorization;
                toAmino(message: _33.SendAuthorization): _33.SendAuthorizationAmino;
                fromAminoMsg(object: _33.SendAuthorizationAminoMsg): _33.SendAuthorization;
                toAminoMsg(message: _33.SendAuthorization): _33.SendAuthorizationAminoMsg;
                fromProtoMsg(message: _33.SendAuthorizationProtoMsg): _33.SendAuthorization;
                toProto(message: _33.SendAuthorization): Uint8Array;
                toProtoMsg(message: _33.SendAuthorization): _33.SendAuthorizationProtoMsg;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                protobufPackage: "cosmos.base.abci.v1beta1";
                TxResponse: {
                    typeUrl: string;
                    encode(message: _38.TxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _38.TxResponse;
                    fromJSON(object: any): _38.TxResponse;
                    toJSON(message: _38.TxResponse): unknown;
                    fromPartial(object: Partial<_38.TxResponse>): _38.TxResponse;
                    fromAmino(object: _38.TxResponseAmino): _38.TxResponse;
                    toAmino(message: _38.TxResponse): _38.TxResponseAmino;
                    fromAminoMsg(object: _38.TxResponseAminoMsg): _38.TxResponse;
                    toAminoMsg(message: _38.TxResponse): _38.TxResponseAminoMsg;
                    fromProtoMsg(message: _38.TxResponseProtoMsg): _38.TxResponse;
                    toProto(message: _38.TxResponse): Uint8Array;
                    toProtoMsg(message: _38.TxResponse): _38.TxResponseProtoMsg;
                };
                ABCIMessageLog: {
                    typeUrl: string;
                    encode(message: _38.ABCIMessageLog, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _38.ABCIMessageLog;
                    fromJSON(object: any): _38.ABCIMessageLog;
                    toJSON(message: _38.ABCIMessageLog): unknown;
                    fromPartial(object: Partial<_38.ABCIMessageLog>): _38.ABCIMessageLog;
                    fromAmino(object: _38.ABCIMessageLogAmino): _38.ABCIMessageLog;
                    toAmino(message: _38.ABCIMessageLog): _38.ABCIMessageLogAmino;
                    fromAminoMsg(object: _38.ABCIMessageLogAminoMsg): _38.ABCIMessageLog;
                    toAminoMsg(message: _38.ABCIMessageLog): _38.ABCIMessageLogAminoMsg;
                    fromProtoMsg(message: _38.ABCIMessageLogProtoMsg): _38.ABCIMessageLog;
                    toProto(message: _38.ABCIMessageLog): Uint8Array;
                    toProtoMsg(message: _38.ABCIMessageLog): _38.ABCIMessageLogProtoMsg;
                };
                StringEvent: {
                    typeUrl: string;
                    encode(message: _38.StringEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _38.StringEvent;
                    fromJSON(object: any): _38.StringEvent;
                    toJSON(message: _38.StringEvent): unknown;
                    fromPartial(object: Partial<_38.StringEvent>): _38.StringEvent;
                    fromAmino(object: _38.StringEventAmino): _38.StringEvent;
                    toAmino(message: _38.StringEvent): _38.StringEventAmino;
                    fromAminoMsg(object: _38.StringEventAminoMsg): _38.StringEvent;
                    toAminoMsg(message: _38.StringEvent): _38.StringEventAminoMsg;
                    fromProtoMsg(message: _38.StringEventProtoMsg): _38.StringEvent;
                    toProto(message: _38.StringEvent): Uint8Array;
                    toProtoMsg(message: _38.StringEvent): _38.StringEventProtoMsg;
                };
                Attribute: {
                    typeUrl: string;
                    encode(message: _38.Attribute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _38.Attribute;
                    fromJSON(object: any): _38.Attribute;
                    toJSON(message: _38.Attribute): unknown;
                    fromPartial(object: Partial<_38.Attribute>): _38.Attribute;
                    fromAmino(object: _38.AttributeAmino): _38.Attribute;
                    toAmino(message: _38.Attribute): _38.AttributeAmino;
                    fromAminoMsg(object: _38.AttributeAminoMsg): _38.Attribute;
                    toAminoMsg(message: _38.Attribute): _38.AttributeAminoMsg;
                    fromProtoMsg(message: _38.AttributeProtoMsg): _38.Attribute;
                    toProto(message: _38.Attribute): Uint8Array;
                    toProtoMsg(message: _38.Attribute): _38.AttributeProtoMsg;
                };
                GasInfo: {
                    typeUrl: string;
                    encode(message: _38.GasInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _38.GasInfo;
                    fromJSON(object: any): _38.GasInfo;
                    toJSON(message: _38.GasInfo): unknown;
                    fromPartial(object: Partial<_38.GasInfo>): _38.GasInfo;
                    fromAmino(object: _38.GasInfoAmino): _38.GasInfo;
                    toAmino(message: _38.GasInfo): _38.GasInfoAmino;
                    fromAminoMsg(object: _38.GasInfoAminoMsg): _38.GasInfo;
                    toAminoMsg(message: _38.GasInfo): _38.GasInfoAminoMsg;
                    fromProtoMsg(message: _38.GasInfoProtoMsg): _38.GasInfo;
                    toProto(message: _38.GasInfo): Uint8Array;
                    toProtoMsg(message: _38.GasInfo): _38.GasInfoProtoMsg;
                };
                Result: {
                    typeUrl: string;
                    encode(message: _38.Result, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _38.Result;
                    fromJSON(object: any): _38.Result;
                    toJSON(message: _38.Result): unknown;
                    fromPartial(object: Partial<_38.Result>): _38.Result;
                    fromAmino(object: _38.ResultAmino): _38.Result;
                    toAmino(message: _38.Result): _38.ResultAmino;
                    fromAminoMsg(object: _38.ResultAminoMsg): _38.Result;
                    toAminoMsg(message: _38.Result): _38.ResultAminoMsg;
                    fromProtoMsg(message: _38.ResultProtoMsg): _38.Result;
                    toProto(message: _38.Result): Uint8Array;
                    toProtoMsg(message: _38.Result): _38.ResultProtoMsg;
                };
                SimulationResponse: {
                    typeUrl: string;
                    encode(message: _38.SimulationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _38.SimulationResponse;
                    fromJSON(object: any): _38.SimulationResponse;
                    toJSON(message: _38.SimulationResponse): unknown;
                    fromPartial(object: Partial<_38.SimulationResponse>): _38.SimulationResponse;
                    fromAmino(object: _38.SimulationResponseAmino): _38.SimulationResponse;
                    toAmino(message: _38.SimulationResponse): _38.SimulationResponseAmino;
                    fromAminoMsg(object: _38.SimulationResponseAminoMsg): _38.SimulationResponse;
                    toAminoMsg(message: _38.SimulationResponse): _38.SimulationResponseAminoMsg;
                    fromProtoMsg(message: _38.SimulationResponseProtoMsg): _38.SimulationResponse;
                    toProto(message: _38.SimulationResponse): Uint8Array;
                    toProtoMsg(message: _38.SimulationResponse): _38.SimulationResponseProtoMsg;
                };
                MsgData: {
                    typeUrl: string;
                    encode(message: _38.MsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _38.MsgData;
                    fromJSON(object: any): _38.MsgData;
                    toJSON(message: _38.MsgData): unknown;
                    fromPartial(object: Partial<_38.MsgData>): _38.MsgData;
                    fromAmino(object: _38.MsgDataAmino): _38.MsgData;
                    toAmino(message: _38.MsgData): _38.MsgDataAmino;
                    fromAminoMsg(object: _38.MsgDataAminoMsg): _38.MsgData;
                    toAminoMsg(message: _38.MsgData): _38.MsgDataAminoMsg;
                    fromProtoMsg(message: _38.MsgDataProtoMsg): _38.MsgData;
                    toProto(message: _38.MsgData): Uint8Array;
                    toProtoMsg(message: _38.MsgData): _38.MsgDataProtoMsg;
                };
                TxMsgData: {
                    typeUrl: string;
                    encode(message: _38.TxMsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _38.TxMsgData;
                    fromJSON(object: any): _38.TxMsgData;
                    toJSON(message: _38.TxMsgData): unknown;
                    fromPartial(object: Partial<_38.TxMsgData>): _38.TxMsgData;
                    fromAmino(object: _38.TxMsgDataAmino): _38.TxMsgData;
                    toAmino(message: _38.TxMsgData): _38.TxMsgDataAmino;
                    fromAminoMsg(object: _38.TxMsgDataAminoMsg): _38.TxMsgData;
                    toAminoMsg(message: _38.TxMsgData): _38.TxMsgDataAminoMsg;
                    fromProtoMsg(message: _38.TxMsgDataProtoMsg): _38.TxMsgData;
                    toProto(message: _38.TxMsgData): Uint8Array;
                    toProtoMsg(message: _38.TxMsgData): _38.TxMsgDataProtoMsg;
                };
                SearchTxsResult: {
                    typeUrl: string;
                    encode(message: _38.SearchTxsResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _38.SearchTxsResult;
                    fromJSON(object: any): _38.SearchTxsResult;
                    toJSON(message: _38.SearchTxsResult): unknown;
                    fromPartial(object: Partial<_38.SearchTxsResult>): _38.SearchTxsResult;
                    fromAmino(object: _38.SearchTxsResultAmino): _38.SearchTxsResult;
                    toAmino(message: _38.SearchTxsResult): _38.SearchTxsResultAmino;
                    fromAminoMsg(object: _38.SearchTxsResultAminoMsg): _38.SearchTxsResult;
                    toAminoMsg(message: _38.SearchTxsResult): _38.SearchTxsResultAminoMsg;
                    fromProtoMsg(message: _38.SearchTxsResultProtoMsg): _38.SearchTxsResult;
                    toProto(message: _38.SearchTxsResult): Uint8Array;
                    toProtoMsg(message: _38.SearchTxsResult): _38.SearchTxsResultProtoMsg;
                };
                SearchBlocksResult: {
                    typeUrl: string;
                    encode(message: _38.SearchBlocksResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _38.SearchBlocksResult;
                    fromJSON(object: any): _38.SearchBlocksResult;
                    toJSON(message: _38.SearchBlocksResult): unknown;
                    fromPartial(object: Partial<_38.SearchBlocksResult>): _38.SearchBlocksResult;
                    fromAmino(object: _38.SearchBlocksResultAmino): _38.SearchBlocksResult;
                    toAmino(message: _38.SearchBlocksResult): _38.SearchBlocksResultAmino;
                    fromAminoMsg(object: _38.SearchBlocksResultAminoMsg): _38.SearchBlocksResult;
                    toAminoMsg(message: _38.SearchBlocksResult): _38.SearchBlocksResultAminoMsg;
                    fromProtoMsg(message: _38.SearchBlocksResultProtoMsg): _38.SearchBlocksResult;
                    toProto(message: _38.SearchBlocksResult): Uint8Array;
                    toProtoMsg(message: _38.SearchBlocksResult): _38.SearchBlocksResultProtoMsg;
                };
            };
        }
        namespace node {
            const v1beta1: {
                Service: typeof _245.Service;
                ServiceClientImpl: typeof _245.ServiceClientImpl;
                LCDQueryClient: typeof _227.LCDQueryClient;
                protobufPackage: "cosmos.base.node.v1beta1";
                ConfigRequest: {
                    typeUrl: string;
                    encode(_: _39.ConfigRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _39.ConfigRequest;
                    fromJSON(_: any): _39.ConfigRequest;
                    toJSON(_: _39.ConfigRequest): unknown;
                    fromPartial(_: Partial<_39.ConfigRequest>): _39.ConfigRequest;
                    fromAmino(_: _39.ConfigRequestAmino): _39.ConfigRequest;
                    toAmino(_: _39.ConfigRequest): _39.ConfigRequestAmino;
                    fromAminoMsg(object: _39.ConfigRequestAminoMsg): _39.ConfigRequest;
                    toAminoMsg(message: _39.ConfigRequest): _39.ConfigRequestAminoMsg;
                    fromProtoMsg(message: _39.ConfigRequestProtoMsg): _39.ConfigRequest;
                    toProto(message: _39.ConfigRequest): Uint8Array;
                    toProtoMsg(message: _39.ConfigRequest): _39.ConfigRequestProtoMsg;
                };
                ConfigResponse: {
                    typeUrl: string;
                    encode(message: _39.ConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _39.ConfigResponse;
                    fromJSON(object: any): _39.ConfigResponse;
                    toJSON(message: _39.ConfigResponse): unknown;
                    fromPartial(object: Partial<_39.ConfigResponse>): _39.ConfigResponse;
                    fromAmino(object: _39.ConfigResponseAmino): _39.ConfigResponse;
                    toAmino(message: _39.ConfigResponse): _39.ConfigResponseAmino;
                    fromAminoMsg(object: _39.ConfigResponseAminoMsg): _39.ConfigResponse;
                    toAminoMsg(message: _39.ConfigResponse): _39.ConfigResponseAminoMsg;
                    fromProtoMsg(message: _39.ConfigResponseProtoMsg): _39.ConfigResponse;
                    toProto(message: _39.ConfigResponse): Uint8Array;
                    toProtoMsg(message: _39.ConfigResponse): _39.ConfigResponseProtoMsg;
                };
                StatusRequest: {
                    typeUrl: string;
                    encode(_: _39.StatusRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _39.StatusRequest;
                    fromJSON(_: any): _39.StatusRequest;
                    toJSON(_: _39.StatusRequest): unknown;
                    fromPartial(_: Partial<_39.StatusRequest>): _39.StatusRequest;
                    fromAmino(_: _39.StatusRequestAmino): _39.StatusRequest;
                    toAmino(_: _39.StatusRequest): _39.StatusRequestAmino;
                    fromAminoMsg(object: _39.StatusRequestAminoMsg): _39.StatusRequest;
                    toAminoMsg(message: _39.StatusRequest): _39.StatusRequestAminoMsg;
                    fromProtoMsg(message: _39.StatusRequestProtoMsg): _39.StatusRequest;
                    toProto(message: _39.StatusRequest): Uint8Array;
                    toProtoMsg(message: _39.StatusRequest): _39.StatusRequestProtoMsg;
                };
                StatusResponse: {
                    typeUrl: string;
                    encode(message: _39.StatusResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _39.StatusResponse;
                    fromJSON(object: any): _39.StatusResponse;
                    toJSON(message: _39.StatusResponse): unknown;
                    fromPartial(object: Partial<_39.StatusResponse>): _39.StatusResponse;
                    fromAmino(object: _39.StatusResponseAmino): _39.StatusResponse;
                    toAmino(message: _39.StatusResponse): _39.StatusResponseAmino;
                    fromAminoMsg(object: _39.StatusResponseAminoMsg): _39.StatusResponse;
                    toAminoMsg(message: _39.StatusResponse): _39.StatusResponseAminoMsg;
                    fromProtoMsg(message: _39.StatusResponseProtoMsg): _39.StatusResponse;
                    toProto(message: _39.StatusResponse): Uint8Array;
                    toProtoMsg(message: _39.StatusResponse): _39.StatusResponseProtoMsg;
                };
            };
        }
        namespace query {
            const v1beta1: {
                protobufPackage: "cosmos.base.query.v1beta1";
                PageRequest: {
                    typeUrl: string;
                    encode(message: _40.PageRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _40.PageRequest;
                    fromJSON(object: any): _40.PageRequest;
                    toJSON(message: _40.PageRequest): unknown;
                    fromPartial(object: Partial<_40.PageRequest>): _40.PageRequest;
                    fromAmino(object: _40.PageRequestAmino): _40.PageRequest;
                    toAmino(message: _40.PageRequest): _40.PageRequestAmino;
                    fromAminoMsg(object: _40.PageRequestAminoMsg): _40.PageRequest;
                    toAminoMsg(message: _40.PageRequest): _40.PageRequestAminoMsg;
                    fromProtoMsg(message: _40.PageRequestProtoMsg): _40.PageRequest;
                    toProto(message: _40.PageRequest): Uint8Array;
                    toProtoMsg(message: _40.PageRequest): _40.PageRequestProtoMsg;
                };
                PageResponse: {
                    typeUrl: string;
                    encode(message: _40.PageResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _40.PageResponse;
                    fromJSON(object: any): _40.PageResponse;
                    toJSON(message: _40.PageResponse): unknown;
                    fromPartial(object: Partial<_40.PageResponse>): _40.PageResponse;
                    fromAmino(object: _40.PageResponseAmino): _40.PageResponse;
                    toAmino(message: _40.PageResponse): _40.PageResponseAmino;
                    fromAminoMsg(object: _40.PageResponseAminoMsg): _40.PageResponse;
                    toAminoMsg(message: _40.PageResponse): _40.PageResponseAminoMsg;
                    fromProtoMsg(message: _40.PageResponseProtoMsg): _40.PageResponse;
                    toProto(message: _40.PageResponse): Uint8Array;
                    toProtoMsg(message: _40.PageResponse): _40.PageResponseProtoMsg;
                };
            };
        }
        namespace reflection {
            const v2alpha1: {
                protobufPackage: "cosmos.base.reflection.v2alpha1";
                AppDescriptor: {
                    typeUrl: string;
                    encode(message: _41.AppDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _41.AppDescriptor;
                    fromJSON(object: any): _41.AppDescriptor;
                    toJSON(message: _41.AppDescriptor): unknown;
                    fromPartial(object: Partial<_41.AppDescriptor>): _41.AppDescriptor;
                    fromAmino(object: _41.AppDescriptorAmino): _41.AppDescriptor;
                    toAmino(message: _41.AppDescriptor): _41.AppDescriptorAmino;
                    fromAminoMsg(object: _41.AppDescriptorAminoMsg): _41.AppDescriptor;
                    toAminoMsg(message: _41.AppDescriptor): _41.AppDescriptorAminoMsg;
                    fromProtoMsg(message: _41.AppDescriptorProtoMsg): _41.AppDescriptor;
                    toProto(message: _41.AppDescriptor): Uint8Array;
                    toProtoMsg(message: _41.AppDescriptor): _41.AppDescriptorProtoMsg;
                };
                TxDescriptor: {
                    typeUrl: string;
                    encode(message: _41.TxDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _41.TxDescriptor;
                    fromJSON(object: any): _41.TxDescriptor;
                    toJSON(message: _41.TxDescriptor): unknown;
                    fromPartial(object: Partial<_41.TxDescriptor>): _41.TxDescriptor;
                    fromAmino(object: _41.TxDescriptorAmino): _41.TxDescriptor;
                    toAmino(message: _41.TxDescriptor): _41.TxDescriptorAmino;
                    fromAminoMsg(object: _41.TxDescriptorAminoMsg): _41.TxDescriptor;
                    toAminoMsg(message: _41.TxDescriptor): _41.TxDescriptorAminoMsg;
                    fromProtoMsg(message: _41.TxDescriptorProtoMsg): _41.TxDescriptor;
                    toProto(message: _41.TxDescriptor): Uint8Array;
                    toProtoMsg(message: _41.TxDescriptor): _41.TxDescriptorProtoMsg;
                };
                AuthnDescriptor: {
                    typeUrl: string;
                    encode(message: _41.AuthnDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _41.AuthnDescriptor;
                    fromJSON(object: any): _41.AuthnDescriptor;
                    toJSON(message: _41.AuthnDescriptor): unknown;
                    fromPartial(object: Partial<_41.AuthnDescriptor>): _41.AuthnDescriptor;
                    fromAmino(object: _41.AuthnDescriptorAmino): _41.AuthnDescriptor;
                    toAmino(message: _41.AuthnDescriptor): _41.AuthnDescriptorAmino;
                    fromAminoMsg(object: _41.AuthnDescriptorAminoMsg): _41.AuthnDescriptor;
                    toAminoMsg(message: _41.AuthnDescriptor): _41.AuthnDescriptorAminoMsg;
                    fromProtoMsg(message: _41.AuthnDescriptorProtoMsg): _41.AuthnDescriptor;
                    toProto(message: _41.AuthnDescriptor): Uint8Array;
                    toProtoMsg(message: _41.AuthnDescriptor): _41.AuthnDescriptorProtoMsg;
                };
                SigningModeDescriptor: {
                    typeUrl: string;
                    encode(message: _41.SigningModeDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _41.SigningModeDescriptor;
                    fromJSON(object: any): _41.SigningModeDescriptor;
                    toJSON(message: _41.SigningModeDescriptor): unknown;
                    fromPartial(object: Partial<_41.SigningModeDescriptor>): _41.SigningModeDescriptor;
                    fromAmino(object: _41.SigningModeDescriptorAmino): _41.SigningModeDescriptor;
                    toAmino(message: _41.SigningModeDescriptor): _41.SigningModeDescriptorAmino;
                    fromAminoMsg(object: _41.SigningModeDescriptorAminoMsg): _41.SigningModeDescriptor;
                    toAminoMsg(message: _41.SigningModeDescriptor): _41.SigningModeDescriptorAminoMsg;
                    fromProtoMsg(message: _41.SigningModeDescriptorProtoMsg): _41.SigningModeDescriptor;
                    toProto(message: _41.SigningModeDescriptor): Uint8Array;
                    toProtoMsg(message: _41.SigningModeDescriptor): _41.SigningModeDescriptorProtoMsg;
                };
                ChainDescriptor: {
                    typeUrl: string;
                    encode(message: _41.ChainDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _41.ChainDescriptor;
                    fromJSON(object: any): _41.ChainDescriptor;
                    toJSON(message: _41.ChainDescriptor): unknown;
                    fromPartial(object: Partial<_41.ChainDescriptor>): _41.ChainDescriptor;
                    fromAmino(object: _41.ChainDescriptorAmino): _41.ChainDescriptor;
                    toAmino(message: _41.ChainDescriptor): _41.ChainDescriptorAmino;
                    fromAminoMsg(object: _41.ChainDescriptorAminoMsg): _41.ChainDescriptor;
                    toAminoMsg(message: _41.ChainDescriptor): _41.ChainDescriptorAminoMsg;
                    fromProtoMsg(message: _41.ChainDescriptorProtoMsg): _41.ChainDescriptor;
                    toProto(message: _41.ChainDescriptor): Uint8Array;
                    toProtoMsg(message: _41.ChainDescriptor): _41.ChainDescriptorProtoMsg;
                };
                CodecDescriptor: {
                    typeUrl: string;
                    encode(message: _41.CodecDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _41.CodecDescriptor;
                    fromJSON(object: any): _41.CodecDescriptor;
                    toJSON(message: _41.CodecDescriptor): unknown;
                    fromPartial(object: Partial<_41.CodecDescriptor>): _41.CodecDescriptor;
                    fromAmino(object: _41.CodecDescriptorAmino): _41.CodecDescriptor;
                    toAmino(message: _41.CodecDescriptor): _41.CodecDescriptorAmino;
                    fromAminoMsg(object: _41.CodecDescriptorAminoMsg): _41.CodecDescriptor;
                    toAminoMsg(message: _41.CodecDescriptor): _41.CodecDescriptorAminoMsg;
                    fromProtoMsg(message: _41.CodecDescriptorProtoMsg): _41.CodecDescriptor;
                    toProto(message: _41.CodecDescriptor): Uint8Array;
                    toProtoMsg(message: _41.CodecDescriptor): _41.CodecDescriptorProtoMsg;
                };
                InterfaceDescriptor: {
                    typeUrl: string;
                    encode(message: _41.InterfaceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _41.InterfaceDescriptor;
                    fromJSON(object: any): _41.InterfaceDescriptor;
                    toJSON(message: _41.InterfaceDescriptor): unknown;
                    fromPartial(object: Partial<_41.InterfaceDescriptor>): _41.InterfaceDescriptor;
                    fromAmino(object: _41.InterfaceDescriptorAmino): _41.InterfaceDescriptor;
                    toAmino(message: _41.InterfaceDescriptor): _41.InterfaceDescriptorAmino;
                    fromAminoMsg(object: _41.InterfaceDescriptorAminoMsg): _41.InterfaceDescriptor;
                    toAminoMsg(message: _41.InterfaceDescriptor): _41.InterfaceDescriptorAminoMsg;
                    fromProtoMsg(message: _41.InterfaceDescriptorProtoMsg): _41.InterfaceDescriptor;
                    toProto(message: _41.InterfaceDescriptor): Uint8Array;
                    toProtoMsg(message: _41.InterfaceDescriptor): _41.InterfaceDescriptorProtoMsg;
                };
                InterfaceImplementerDescriptor: {
                    typeUrl: string;
                    encode(message: _41.InterfaceImplementerDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _41.InterfaceImplementerDescriptor;
                    fromJSON(object: any): _41.InterfaceImplementerDescriptor;
                    toJSON(message: _41.InterfaceImplementerDescriptor): unknown;
                    fromPartial(object: Partial<_41.InterfaceImplementerDescriptor>): _41.InterfaceImplementerDescriptor;
                    fromAmino(object: _41.InterfaceImplementerDescriptorAmino): _41.InterfaceImplementerDescriptor;
                    toAmino(message: _41.InterfaceImplementerDescriptor): _41.InterfaceImplementerDescriptorAmino;
                    fromAminoMsg(object: _41.InterfaceImplementerDescriptorAminoMsg): _41.InterfaceImplementerDescriptor;
                    toAminoMsg(message: _41.InterfaceImplementerDescriptor): _41.InterfaceImplementerDescriptorAminoMsg;
                    fromProtoMsg(message: _41.InterfaceImplementerDescriptorProtoMsg): _41.InterfaceImplementerDescriptor;
                    toProto(message: _41.InterfaceImplementerDescriptor): Uint8Array;
                    toProtoMsg(message: _41.InterfaceImplementerDescriptor): _41.InterfaceImplementerDescriptorProtoMsg;
                };
                InterfaceAcceptingMessageDescriptor: {
                    typeUrl: string;
                    encode(message: _41.InterfaceAcceptingMessageDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _41.InterfaceAcceptingMessageDescriptor;
                    fromJSON(object: any): _41.InterfaceAcceptingMessageDescriptor;
                    toJSON(message: _41.InterfaceAcceptingMessageDescriptor): unknown;
                    fromPartial(object: Partial<_41.InterfaceAcceptingMessageDescriptor>): _41.InterfaceAcceptingMessageDescriptor;
                    fromAmino(object: _41.InterfaceAcceptingMessageDescriptorAmino): _41.InterfaceAcceptingMessageDescriptor;
                    toAmino(message: _41.InterfaceAcceptingMessageDescriptor): _41.InterfaceAcceptingMessageDescriptorAmino;
                    fromAminoMsg(object: _41.InterfaceAcceptingMessageDescriptorAminoMsg): _41.InterfaceAcceptingMessageDescriptor;
                    toAminoMsg(message: _41.InterfaceAcceptingMessageDescriptor): _41.InterfaceAcceptingMessageDescriptorAminoMsg;
                    fromProtoMsg(message: _41.InterfaceAcceptingMessageDescriptorProtoMsg): _41.InterfaceAcceptingMessageDescriptor;
                    toProto(message: _41.InterfaceAcceptingMessageDescriptor): Uint8Array;
                    toProtoMsg(message: _41.InterfaceAcceptingMessageDescriptor): _41.InterfaceAcceptingMessageDescriptorProtoMsg;
                };
                ConfigurationDescriptor: {
                    typeUrl: string;
                    encode(message: _41.ConfigurationDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _41.ConfigurationDescriptor;
                    fromJSON(object: any): _41.ConfigurationDescriptor;
                    toJSON(message: _41.ConfigurationDescriptor): unknown;
                    fromPartial(object: Partial<_41.ConfigurationDescriptor>): _41.ConfigurationDescriptor;
                    fromAmino(object: _41.ConfigurationDescriptorAmino): _41.ConfigurationDescriptor;
                    toAmino(message: _41.ConfigurationDescriptor): _41.ConfigurationDescriptorAmino;
                    fromAminoMsg(object: _41.ConfigurationDescriptorAminoMsg): _41.ConfigurationDescriptor;
                    toAminoMsg(message: _41.ConfigurationDescriptor): _41.ConfigurationDescriptorAminoMsg;
                    fromProtoMsg(message: _41.ConfigurationDescriptorProtoMsg): _41.ConfigurationDescriptor;
                    toProto(message: _41.ConfigurationDescriptor): Uint8Array;
                    toProtoMsg(message: _41.ConfigurationDescriptor): _41.ConfigurationDescriptorProtoMsg;
                };
                MsgDescriptor: {
                    typeUrl: string;
                    encode(message: _41.MsgDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _41.MsgDescriptor;
                    fromJSON(object: any): _41.MsgDescriptor;
                    toJSON(message: _41.MsgDescriptor): unknown;
                    fromPartial(object: Partial<_41.MsgDescriptor>): _41.MsgDescriptor;
                    fromAmino(object: _41.MsgDescriptorAmino): _41.MsgDescriptor;
                    toAmino(message: _41.MsgDescriptor): _41.MsgDescriptorAmino;
                    fromAminoMsg(object: _41.MsgDescriptorAminoMsg): _41.MsgDescriptor;
                    toAminoMsg(message: _41.MsgDescriptor): _41.MsgDescriptorAminoMsg;
                    fromProtoMsg(message: _41.MsgDescriptorProtoMsg): _41.MsgDescriptor;
                    toProto(message: _41.MsgDescriptor): Uint8Array;
                    toProtoMsg(message: _41.MsgDescriptor): _41.MsgDescriptorProtoMsg;
                };
                GetAuthnDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _41.GetAuthnDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _41.GetAuthnDescriptorRequest;
                    fromJSON(_: any): _41.GetAuthnDescriptorRequest;
                    toJSON(_: _41.GetAuthnDescriptorRequest): unknown;
                    fromPartial(_: Partial<_41.GetAuthnDescriptorRequest>): _41.GetAuthnDescriptorRequest;
                    fromAmino(_: _41.GetAuthnDescriptorRequestAmino): _41.GetAuthnDescriptorRequest;
                    toAmino(_: _41.GetAuthnDescriptorRequest): _41.GetAuthnDescriptorRequestAmino;
                    fromAminoMsg(object: _41.GetAuthnDescriptorRequestAminoMsg): _41.GetAuthnDescriptorRequest;
                    toAminoMsg(message: _41.GetAuthnDescriptorRequest): _41.GetAuthnDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _41.GetAuthnDescriptorRequestProtoMsg): _41.GetAuthnDescriptorRequest;
                    toProto(message: _41.GetAuthnDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _41.GetAuthnDescriptorRequest): _41.GetAuthnDescriptorRequestProtoMsg;
                };
                GetAuthnDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _41.GetAuthnDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _41.GetAuthnDescriptorResponse;
                    fromJSON(object: any): _41.GetAuthnDescriptorResponse;
                    toJSON(message: _41.GetAuthnDescriptorResponse): unknown;
                    fromPartial(object: Partial<_41.GetAuthnDescriptorResponse>): _41.GetAuthnDescriptorResponse;
                    fromAmino(object: _41.GetAuthnDescriptorResponseAmino): _41.GetAuthnDescriptorResponse;
                    toAmino(message: _41.GetAuthnDescriptorResponse): _41.GetAuthnDescriptorResponseAmino;
                    fromAminoMsg(object: _41.GetAuthnDescriptorResponseAminoMsg): _41.GetAuthnDescriptorResponse;
                    toAminoMsg(message: _41.GetAuthnDescriptorResponse): _41.GetAuthnDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _41.GetAuthnDescriptorResponseProtoMsg): _41.GetAuthnDescriptorResponse;
                    toProto(message: _41.GetAuthnDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _41.GetAuthnDescriptorResponse): _41.GetAuthnDescriptorResponseProtoMsg;
                };
                GetChainDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _41.GetChainDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _41.GetChainDescriptorRequest;
                    fromJSON(_: any): _41.GetChainDescriptorRequest;
                    toJSON(_: _41.GetChainDescriptorRequest): unknown;
                    fromPartial(_: Partial<_41.GetChainDescriptorRequest>): _41.GetChainDescriptorRequest;
                    fromAmino(_: _41.GetChainDescriptorRequestAmino): _41.GetChainDescriptorRequest;
                    toAmino(_: _41.GetChainDescriptorRequest): _41.GetChainDescriptorRequestAmino;
                    fromAminoMsg(object: _41.GetChainDescriptorRequestAminoMsg): _41.GetChainDescriptorRequest;
                    toAminoMsg(message: _41.GetChainDescriptorRequest): _41.GetChainDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _41.GetChainDescriptorRequestProtoMsg): _41.GetChainDescriptorRequest;
                    toProto(message: _41.GetChainDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _41.GetChainDescriptorRequest): _41.GetChainDescriptorRequestProtoMsg;
                };
                GetChainDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _41.GetChainDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _41.GetChainDescriptorResponse;
                    fromJSON(object: any): _41.GetChainDescriptorResponse;
                    toJSON(message: _41.GetChainDescriptorResponse): unknown;
                    fromPartial(object: Partial<_41.GetChainDescriptorResponse>): _41.GetChainDescriptorResponse;
                    fromAmino(object: _41.GetChainDescriptorResponseAmino): _41.GetChainDescriptorResponse;
                    toAmino(message: _41.GetChainDescriptorResponse): _41.GetChainDescriptorResponseAmino;
                    fromAminoMsg(object: _41.GetChainDescriptorResponseAminoMsg): _41.GetChainDescriptorResponse;
                    toAminoMsg(message: _41.GetChainDescriptorResponse): _41.GetChainDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _41.GetChainDescriptorResponseProtoMsg): _41.GetChainDescriptorResponse;
                    toProto(message: _41.GetChainDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _41.GetChainDescriptorResponse): _41.GetChainDescriptorResponseProtoMsg;
                };
                GetCodecDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _41.GetCodecDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _41.GetCodecDescriptorRequest;
                    fromJSON(_: any): _41.GetCodecDescriptorRequest;
                    toJSON(_: _41.GetCodecDescriptorRequest): unknown;
                    fromPartial(_: Partial<_41.GetCodecDescriptorRequest>): _41.GetCodecDescriptorRequest;
                    fromAmino(_: _41.GetCodecDescriptorRequestAmino): _41.GetCodecDescriptorRequest;
                    toAmino(_: _41.GetCodecDescriptorRequest): _41.GetCodecDescriptorRequestAmino;
                    fromAminoMsg(object: _41.GetCodecDescriptorRequestAminoMsg): _41.GetCodecDescriptorRequest;
                    toAminoMsg(message: _41.GetCodecDescriptorRequest): _41.GetCodecDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _41.GetCodecDescriptorRequestProtoMsg): _41.GetCodecDescriptorRequest;
                    toProto(message: _41.GetCodecDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _41.GetCodecDescriptorRequest): _41.GetCodecDescriptorRequestProtoMsg;
                };
                GetCodecDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _41.GetCodecDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _41.GetCodecDescriptorResponse;
                    fromJSON(object: any): _41.GetCodecDescriptorResponse;
                    toJSON(message: _41.GetCodecDescriptorResponse): unknown;
                    fromPartial(object: Partial<_41.GetCodecDescriptorResponse>): _41.GetCodecDescriptorResponse;
                    fromAmino(object: _41.GetCodecDescriptorResponseAmino): _41.GetCodecDescriptorResponse;
                    toAmino(message: _41.GetCodecDescriptorResponse): _41.GetCodecDescriptorResponseAmino;
                    fromAminoMsg(object: _41.GetCodecDescriptorResponseAminoMsg): _41.GetCodecDescriptorResponse;
                    toAminoMsg(message: _41.GetCodecDescriptorResponse): _41.GetCodecDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _41.GetCodecDescriptorResponseProtoMsg): _41.GetCodecDescriptorResponse;
                    toProto(message: _41.GetCodecDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _41.GetCodecDescriptorResponse): _41.GetCodecDescriptorResponseProtoMsg;
                };
                GetConfigurationDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _41.GetConfigurationDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _41.GetConfigurationDescriptorRequest;
                    fromJSON(_: any): _41.GetConfigurationDescriptorRequest;
                    toJSON(_: _41.GetConfigurationDescriptorRequest): unknown;
                    fromPartial(_: Partial<_41.GetConfigurationDescriptorRequest>): _41.GetConfigurationDescriptorRequest;
                    fromAmino(_: _41.GetConfigurationDescriptorRequestAmino): _41.GetConfigurationDescriptorRequest;
                    toAmino(_: _41.GetConfigurationDescriptorRequest): _41.GetConfigurationDescriptorRequestAmino;
                    fromAminoMsg(object: _41.GetConfigurationDescriptorRequestAminoMsg): _41.GetConfigurationDescriptorRequest;
                    toAminoMsg(message: _41.GetConfigurationDescriptorRequest): _41.GetConfigurationDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _41.GetConfigurationDescriptorRequestProtoMsg): _41.GetConfigurationDescriptorRequest;
                    toProto(message: _41.GetConfigurationDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _41.GetConfigurationDescriptorRequest): _41.GetConfigurationDescriptorRequestProtoMsg;
                };
                GetConfigurationDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _41.GetConfigurationDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _41.GetConfigurationDescriptorResponse;
                    fromJSON(object: any): _41.GetConfigurationDescriptorResponse;
                    toJSON(message: _41.GetConfigurationDescriptorResponse): unknown;
                    fromPartial(object: Partial<_41.GetConfigurationDescriptorResponse>): _41.GetConfigurationDescriptorResponse;
                    fromAmino(object: _41.GetConfigurationDescriptorResponseAmino): _41.GetConfigurationDescriptorResponse;
                    toAmino(message: _41.GetConfigurationDescriptorResponse): _41.GetConfigurationDescriptorResponseAmino;
                    fromAminoMsg(object: _41.GetConfigurationDescriptorResponseAminoMsg): _41.GetConfigurationDescriptorResponse;
                    toAminoMsg(message: _41.GetConfigurationDescriptorResponse): _41.GetConfigurationDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _41.GetConfigurationDescriptorResponseProtoMsg): _41.GetConfigurationDescriptorResponse;
                    toProto(message: _41.GetConfigurationDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _41.GetConfigurationDescriptorResponse): _41.GetConfigurationDescriptorResponseProtoMsg;
                };
                GetQueryServicesDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _41.GetQueryServicesDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _41.GetQueryServicesDescriptorRequest;
                    fromJSON(_: any): _41.GetQueryServicesDescriptorRequest;
                    toJSON(_: _41.GetQueryServicesDescriptorRequest): unknown;
                    fromPartial(_: Partial<_41.GetQueryServicesDescriptorRequest>): _41.GetQueryServicesDescriptorRequest;
                    fromAmino(_: _41.GetQueryServicesDescriptorRequestAmino): _41.GetQueryServicesDescriptorRequest;
                    toAmino(_: _41.GetQueryServicesDescriptorRequest): _41.GetQueryServicesDescriptorRequestAmino;
                    fromAminoMsg(object: _41.GetQueryServicesDescriptorRequestAminoMsg): _41.GetQueryServicesDescriptorRequest;
                    toAminoMsg(message: _41.GetQueryServicesDescriptorRequest): _41.GetQueryServicesDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _41.GetQueryServicesDescriptorRequestProtoMsg): _41.GetQueryServicesDescriptorRequest;
                    toProto(message: _41.GetQueryServicesDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _41.GetQueryServicesDescriptorRequest): _41.GetQueryServicesDescriptorRequestProtoMsg;
                };
                GetQueryServicesDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _41.GetQueryServicesDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _41.GetQueryServicesDescriptorResponse;
                    fromJSON(object: any): _41.GetQueryServicesDescriptorResponse;
                    toJSON(message: _41.GetQueryServicesDescriptorResponse): unknown;
                    fromPartial(object: Partial<_41.GetQueryServicesDescriptorResponse>): _41.GetQueryServicesDescriptorResponse;
                    fromAmino(object: _41.GetQueryServicesDescriptorResponseAmino): _41.GetQueryServicesDescriptorResponse;
                    toAmino(message: _41.GetQueryServicesDescriptorResponse): _41.GetQueryServicesDescriptorResponseAmino;
                    fromAminoMsg(object: _41.GetQueryServicesDescriptorResponseAminoMsg): _41.GetQueryServicesDescriptorResponse;
                    toAminoMsg(message: _41.GetQueryServicesDescriptorResponse): _41.GetQueryServicesDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _41.GetQueryServicesDescriptorResponseProtoMsg): _41.GetQueryServicesDescriptorResponse;
                    toProto(message: _41.GetQueryServicesDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _41.GetQueryServicesDescriptorResponse): _41.GetQueryServicesDescriptorResponseProtoMsg;
                };
                GetTxDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _41.GetTxDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _41.GetTxDescriptorRequest;
                    fromJSON(_: any): _41.GetTxDescriptorRequest;
                    toJSON(_: _41.GetTxDescriptorRequest): unknown;
                    fromPartial(_: Partial<_41.GetTxDescriptorRequest>): _41.GetTxDescriptorRequest;
                    fromAmino(_: _41.GetTxDescriptorRequestAmino): _41.GetTxDescriptorRequest;
                    toAmino(_: _41.GetTxDescriptorRequest): _41.GetTxDescriptorRequestAmino;
                    fromAminoMsg(object: _41.GetTxDescriptorRequestAminoMsg): _41.GetTxDescriptorRequest;
                    toAminoMsg(message: _41.GetTxDescriptorRequest): _41.GetTxDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _41.GetTxDescriptorRequestProtoMsg): _41.GetTxDescriptorRequest;
                    toProto(message: _41.GetTxDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _41.GetTxDescriptorRequest): _41.GetTxDescriptorRequestProtoMsg;
                };
                GetTxDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _41.GetTxDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _41.GetTxDescriptorResponse;
                    fromJSON(object: any): _41.GetTxDescriptorResponse;
                    toJSON(message: _41.GetTxDescriptorResponse): unknown;
                    fromPartial(object: Partial<_41.GetTxDescriptorResponse>): _41.GetTxDescriptorResponse;
                    fromAmino(object: _41.GetTxDescriptorResponseAmino): _41.GetTxDescriptorResponse;
                    toAmino(message: _41.GetTxDescriptorResponse): _41.GetTxDescriptorResponseAmino;
                    fromAminoMsg(object: _41.GetTxDescriptorResponseAminoMsg): _41.GetTxDescriptorResponse;
                    toAminoMsg(message: _41.GetTxDescriptorResponse): _41.GetTxDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _41.GetTxDescriptorResponseProtoMsg): _41.GetTxDescriptorResponse;
                    toProto(message: _41.GetTxDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _41.GetTxDescriptorResponse): _41.GetTxDescriptorResponseProtoMsg;
                };
                QueryServicesDescriptor: {
                    typeUrl: string;
                    encode(message: _41.QueryServicesDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _41.QueryServicesDescriptor;
                    fromJSON(object: any): _41.QueryServicesDescriptor;
                    toJSON(message: _41.QueryServicesDescriptor): unknown;
                    fromPartial(object: Partial<_41.QueryServicesDescriptor>): _41.QueryServicesDescriptor;
                    fromAmino(object: _41.QueryServicesDescriptorAmino): _41.QueryServicesDescriptor;
                    toAmino(message: _41.QueryServicesDescriptor): _41.QueryServicesDescriptorAmino;
                    fromAminoMsg(object: _41.QueryServicesDescriptorAminoMsg): _41.QueryServicesDescriptor;
                    toAminoMsg(message: _41.QueryServicesDescriptor): _41.QueryServicesDescriptorAminoMsg;
                    fromProtoMsg(message: _41.QueryServicesDescriptorProtoMsg): _41.QueryServicesDescriptor;
                    toProto(message: _41.QueryServicesDescriptor): Uint8Array;
                    toProtoMsg(message: _41.QueryServicesDescriptor): _41.QueryServicesDescriptorProtoMsg;
                };
                QueryServiceDescriptor: {
                    typeUrl: string;
                    encode(message: _41.QueryServiceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _41.QueryServiceDescriptor;
                    fromJSON(object: any): _41.QueryServiceDescriptor;
                    toJSON(message: _41.QueryServiceDescriptor): unknown;
                    fromPartial(object: Partial<_41.QueryServiceDescriptor>): _41.QueryServiceDescriptor;
                    fromAmino(object: _41.QueryServiceDescriptorAmino): _41.QueryServiceDescriptor;
                    toAmino(message: _41.QueryServiceDescriptor): _41.QueryServiceDescriptorAmino;
                    fromAminoMsg(object: _41.QueryServiceDescriptorAminoMsg): _41.QueryServiceDescriptor;
                    toAminoMsg(message: _41.QueryServiceDescriptor): _41.QueryServiceDescriptorAminoMsg;
                    fromProtoMsg(message: _41.QueryServiceDescriptorProtoMsg): _41.QueryServiceDescriptor;
                    toProto(message: _41.QueryServiceDescriptor): Uint8Array;
                    toProtoMsg(message: _41.QueryServiceDescriptor): _41.QueryServiceDescriptorProtoMsg;
                };
                QueryMethodDescriptor: {
                    typeUrl: string;
                    encode(message: _41.QueryMethodDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _41.QueryMethodDescriptor;
                    fromJSON(object: any): _41.QueryMethodDescriptor;
                    toJSON(message: _41.QueryMethodDescriptor): unknown;
                    fromPartial(object: Partial<_41.QueryMethodDescriptor>): _41.QueryMethodDescriptor;
                    fromAmino(object: _41.QueryMethodDescriptorAmino): _41.QueryMethodDescriptor;
                    toAmino(message: _41.QueryMethodDescriptor): _41.QueryMethodDescriptorAmino;
                    fromAminoMsg(object: _41.QueryMethodDescriptorAminoMsg): _41.QueryMethodDescriptor;
                    toAminoMsg(message: _41.QueryMethodDescriptor): _41.QueryMethodDescriptorAminoMsg;
                    fromProtoMsg(message: _41.QueryMethodDescriptorProtoMsg): _41.QueryMethodDescriptor;
                    toProto(message: _41.QueryMethodDescriptor): Uint8Array;
                    toProtoMsg(message: _41.QueryMethodDescriptor): _41.QueryMethodDescriptorProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                Service: typeof _246.Service;
                ServiceClientImpl: typeof _246.ServiceClientImpl;
                LCDQueryClient: typeof _228.LCDQueryClient;
                protobufPackage: "cosmos.base.tendermint.v1beta1";
                Block: {
                    typeUrl: string;
                    encode(message: _43.Block, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _43.Block;
                    fromJSON(object: any): _43.Block;
                    toJSON(message: _43.Block): unknown;
                    fromPartial(object: Partial<_43.Block>): _43.Block;
                    fromAmino(object: _43.BlockAmino): _43.Block;
                    toAmino(message: _43.Block): _43.BlockAmino;
                    fromAminoMsg(object: _43.BlockAminoMsg): _43.Block;
                    toAminoMsg(message: _43.Block): _43.BlockAminoMsg;
                    fromProtoMsg(message: _43.BlockProtoMsg): _43.Block;
                    toProto(message: _43.Block): Uint8Array;
                    toProtoMsg(message: _43.Block): _43.BlockProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _43.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _43.Header;
                    fromJSON(object: any): _43.Header;
                    toJSON(message: _43.Header): unknown;
                    fromPartial(object: Partial<_43.Header>): _43.Header;
                    fromAmino(object: _43.HeaderAmino): _43.Header;
                    toAmino(message: _43.Header): _43.HeaderAmino;
                    fromAminoMsg(object: _43.HeaderAminoMsg): _43.Header;
                    toAminoMsg(message: _43.Header): _43.HeaderAminoMsg;
                    fromProtoMsg(message: _43.HeaderProtoMsg): _43.Header;
                    toProto(message: _43.Header): Uint8Array;
                    toProtoMsg(message: _43.Header): _43.HeaderProtoMsg;
                };
                GetValidatorSetByHeightRequest: {
                    typeUrl: string;
                    encode(message: _42.GetValidatorSetByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _42.GetValidatorSetByHeightRequest;
                    fromJSON(object: any): _42.GetValidatorSetByHeightRequest;
                    toJSON(message: _42.GetValidatorSetByHeightRequest): unknown;
                    fromPartial(object: Partial<_42.GetValidatorSetByHeightRequest>): _42.GetValidatorSetByHeightRequest;
                    fromAmino(object: _42.GetValidatorSetByHeightRequestAmino): _42.GetValidatorSetByHeightRequest;
                    toAmino(message: _42.GetValidatorSetByHeightRequest): _42.GetValidatorSetByHeightRequestAmino;
                    fromAminoMsg(object: _42.GetValidatorSetByHeightRequestAminoMsg): _42.GetValidatorSetByHeightRequest;
                    toAminoMsg(message: _42.GetValidatorSetByHeightRequest): _42.GetValidatorSetByHeightRequestAminoMsg;
                    fromProtoMsg(message: _42.GetValidatorSetByHeightRequestProtoMsg): _42.GetValidatorSetByHeightRequest;
                    toProto(message: _42.GetValidatorSetByHeightRequest): Uint8Array;
                    toProtoMsg(message: _42.GetValidatorSetByHeightRequest): _42.GetValidatorSetByHeightRequestProtoMsg;
                };
                GetValidatorSetByHeightResponse: {
                    typeUrl: string;
                    encode(message: _42.GetValidatorSetByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _42.GetValidatorSetByHeightResponse;
                    fromJSON(object: any): _42.GetValidatorSetByHeightResponse;
                    toJSON(message: _42.GetValidatorSetByHeightResponse): unknown;
                    fromPartial(object: Partial<_42.GetValidatorSetByHeightResponse>): _42.GetValidatorSetByHeightResponse;
                    fromAmino(object: _42.GetValidatorSetByHeightResponseAmino): _42.GetValidatorSetByHeightResponse;
                    toAmino(message: _42.GetValidatorSetByHeightResponse): _42.GetValidatorSetByHeightResponseAmino;
                    fromAminoMsg(object: _42.GetValidatorSetByHeightResponseAminoMsg): _42.GetValidatorSetByHeightResponse;
                    toAminoMsg(message: _42.GetValidatorSetByHeightResponse): _42.GetValidatorSetByHeightResponseAminoMsg;
                    fromProtoMsg(message: _42.GetValidatorSetByHeightResponseProtoMsg): _42.GetValidatorSetByHeightResponse;
                    toProto(message: _42.GetValidatorSetByHeightResponse): Uint8Array;
                    toProtoMsg(message: _42.GetValidatorSetByHeightResponse): _42.GetValidatorSetByHeightResponseProtoMsg;
                };
                GetLatestValidatorSetRequest: {
                    typeUrl: string;
                    encode(message: _42.GetLatestValidatorSetRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _42.GetLatestValidatorSetRequest;
                    fromJSON(object: any): _42.GetLatestValidatorSetRequest;
                    toJSON(message: _42.GetLatestValidatorSetRequest): unknown;
                    fromPartial(object: Partial<_42.GetLatestValidatorSetRequest>): _42.GetLatestValidatorSetRequest;
                    fromAmino(object: _42.GetLatestValidatorSetRequestAmino): _42.GetLatestValidatorSetRequest;
                    toAmino(message: _42.GetLatestValidatorSetRequest): _42.GetLatestValidatorSetRequestAmino;
                    fromAminoMsg(object: _42.GetLatestValidatorSetRequestAminoMsg): _42.GetLatestValidatorSetRequest;
                    toAminoMsg(message: _42.GetLatestValidatorSetRequest): _42.GetLatestValidatorSetRequestAminoMsg;
                    fromProtoMsg(message: _42.GetLatestValidatorSetRequestProtoMsg): _42.GetLatestValidatorSetRequest;
                    toProto(message: _42.GetLatestValidatorSetRequest): Uint8Array;
                    toProtoMsg(message: _42.GetLatestValidatorSetRequest): _42.GetLatestValidatorSetRequestProtoMsg;
                };
                GetLatestValidatorSetResponse: {
                    typeUrl: string;
                    encode(message: _42.GetLatestValidatorSetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _42.GetLatestValidatorSetResponse;
                    fromJSON(object: any): _42.GetLatestValidatorSetResponse;
                    toJSON(message: _42.GetLatestValidatorSetResponse): unknown;
                    fromPartial(object: Partial<_42.GetLatestValidatorSetResponse>): _42.GetLatestValidatorSetResponse;
                    fromAmino(object: _42.GetLatestValidatorSetResponseAmino): _42.GetLatestValidatorSetResponse;
                    toAmino(message: _42.GetLatestValidatorSetResponse): _42.GetLatestValidatorSetResponseAmino;
                    fromAminoMsg(object: _42.GetLatestValidatorSetResponseAminoMsg): _42.GetLatestValidatorSetResponse;
                    toAminoMsg(message: _42.GetLatestValidatorSetResponse): _42.GetLatestValidatorSetResponseAminoMsg;
                    fromProtoMsg(message: _42.GetLatestValidatorSetResponseProtoMsg): _42.GetLatestValidatorSetResponse;
                    toProto(message: _42.GetLatestValidatorSetResponse): Uint8Array;
                    toProtoMsg(message: _42.GetLatestValidatorSetResponse): _42.GetLatestValidatorSetResponseProtoMsg;
                };
                Validator: {
                    typeUrl: string;
                    encode(message: _42.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _42.Validator;
                    fromJSON(object: any): _42.Validator;
                    toJSON(message: _42.Validator): unknown;
                    fromPartial(object: Partial<_42.Validator>): _42.Validator;
                    fromAmino(object: _42.ValidatorAmino): _42.Validator;
                    toAmino(message: _42.Validator): _42.ValidatorAmino;
                    fromAminoMsg(object: _42.ValidatorAminoMsg): _42.Validator;
                    toAminoMsg(message: _42.Validator): _42.ValidatorAminoMsg;
                    fromProtoMsg(message: _42.ValidatorProtoMsg): _42.Validator;
                    toProto(message: _42.Validator): Uint8Array;
                    toProtoMsg(message: _42.Validator): _42.ValidatorProtoMsg;
                };
                GetBlockByHeightRequest: {
                    typeUrl: string;
                    encode(message: _42.GetBlockByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _42.GetBlockByHeightRequest;
                    fromJSON(object: any): _42.GetBlockByHeightRequest;
                    toJSON(message: _42.GetBlockByHeightRequest): unknown;
                    fromPartial(object: Partial<_42.GetBlockByHeightRequest>): _42.GetBlockByHeightRequest;
                    fromAmino(object: _42.GetBlockByHeightRequestAmino): _42.GetBlockByHeightRequest;
                    toAmino(message: _42.GetBlockByHeightRequest): _42.GetBlockByHeightRequestAmino;
                    fromAminoMsg(object: _42.GetBlockByHeightRequestAminoMsg): _42.GetBlockByHeightRequest;
                    toAminoMsg(message: _42.GetBlockByHeightRequest): _42.GetBlockByHeightRequestAminoMsg;
                    fromProtoMsg(message: _42.GetBlockByHeightRequestProtoMsg): _42.GetBlockByHeightRequest;
                    toProto(message: _42.GetBlockByHeightRequest): Uint8Array;
                    toProtoMsg(message: _42.GetBlockByHeightRequest): _42.GetBlockByHeightRequestProtoMsg;
                };
                GetBlockByHeightResponse: {
                    typeUrl: string;
                    encode(message: _42.GetBlockByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _42.GetBlockByHeightResponse;
                    fromJSON(object: any): _42.GetBlockByHeightResponse;
                    toJSON(message: _42.GetBlockByHeightResponse): unknown;
                    fromPartial(object: Partial<_42.GetBlockByHeightResponse>): _42.GetBlockByHeightResponse;
                    fromAmino(object: _42.GetBlockByHeightResponseAmino): _42.GetBlockByHeightResponse;
                    toAmino(message: _42.GetBlockByHeightResponse): _42.GetBlockByHeightResponseAmino;
                    fromAminoMsg(object: _42.GetBlockByHeightResponseAminoMsg): _42.GetBlockByHeightResponse;
                    toAminoMsg(message: _42.GetBlockByHeightResponse): _42.GetBlockByHeightResponseAminoMsg;
                    fromProtoMsg(message: _42.GetBlockByHeightResponseProtoMsg): _42.GetBlockByHeightResponse;
                    toProto(message: _42.GetBlockByHeightResponse): Uint8Array;
                    toProtoMsg(message: _42.GetBlockByHeightResponse): _42.GetBlockByHeightResponseProtoMsg;
                };
                GetLatestBlockRequest: {
                    typeUrl: string;
                    encode(_: _42.GetLatestBlockRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _42.GetLatestBlockRequest;
                    fromJSON(_: any): _42.GetLatestBlockRequest;
                    toJSON(_: _42.GetLatestBlockRequest): unknown;
                    fromPartial(_: Partial<_42.GetLatestBlockRequest>): _42.GetLatestBlockRequest;
                    fromAmino(_: _42.GetLatestBlockRequestAmino): _42.GetLatestBlockRequest;
                    toAmino(_: _42.GetLatestBlockRequest): _42.GetLatestBlockRequestAmino;
                    fromAminoMsg(object: _42.GetLatestBlockRequestAminoMsg): _42.GetLatestBlockRequest;
                    toAminoMsg(message: _42.GetLatestBlockRequest): _42.GetLatestBlockRequestAminoMsg;
                    fromProtoMsg(message: _42.GetLatestBlockRequestProtoMsg): _42.GetLatestBlockRequest;
                    toProto(message: _42.GetLatestBlockRequest): Uint8Array;
                    toProtoMsg(message: _42.GetLatestBlockRequest): _42.GetLatestBlockRequestProtoMsg;
                };
                GetLatestBlockResponse: {
                    typeUrl: string;
                    encode(message: _42.GetLatestBlockResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _42.GetLatestBlockResponse;
                    fromJSON(object: any): _42.GetLatestBlockResponse;
                    toJSON(message: _42.GetLatestBlockResponse): unknown;
                    fromPartial(object: Partial<_42.GetLatestBlockResponse>): _42.GetLatestBlockResponse;
                    fromAmino(object: _42.GetLatestBlockResponseAmino): _42.GetLatestBlockResponse;
                    toAmino(message: _42.GetLatestBlockResponse): _42.GetLatestBlockResponseAmino;
                    fromAminoMsg(object: _42.GetLatestBlockResponseAminoMsg): _42.GetLatestBlockResponse;
                    toAminoMsg(message: _42.GetLatestBlockResponse): _42.GetLatestBlockResponseAminoMsg;
                    fromProtoMsg(message: _42.GetLatestBlockResponseProtoMsg): _42.GetLatestBlockResponse;
                    toProto(message: _42.GetLatestBlockResponse): Uint8Array;
                    toProtoMsg(message: _42.GetLatestBlockResponse): _42.GetLatestBlockResponseProtoMsg;
                };
                GetSyncingRequest: {
                    typeUrl: string;
                    encode(_: _42.GetSyncingRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _42.GetSyncingRequest;
                    fromJSON(_: any): _42.GetSyncingRequest;
                    toJSON(_: _42.GetSyncingRequest): unknown;
                    fromPartial(_: Partial<_42.GetSyncingRequest>): _42.GetSyncingRequest;
                    fromAmino(_: _42.GetSyncingRequestAmino): _42.GetSyncingRequest;
                    toAmino(_: _42.GetSyncingRequest): _42.GetSyncingRequestAmino;
                    fromAminoMsg(object: _42.GetSyncingRequestAminoMsg): _42.GetSyncingRequest;
                    toAminoMsg(message: _42.GetSyncingRequest): _42.GetSyncingRequestAminoMsg;
                    fromProtoMsg(message: _42.GetSyncingRequestProtoMsg): _42.GetSyncingRequest;
                    toProto(message: _42.GetSyncingRequest): Uint8Array;
                    toProtoMsg(message: _42.GetSyncingRequest): _42.GetSyncingRequestProtoMsg;
                };
                GetSyncingResponse: {
                    typeUrl: string;
                    encode(message: _42.GetSyncingResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _42.GetSyncingResponse;
                    fromJSON(object: any): _42.GetSyncingResponse;
                    toJSON(message: _42.GetSyncingResponse): unknown;
                    fromPartial(object: Partial<_42.GetSyncingResponse>): _42.GetSyncingResponse;
                    fromAmino(object: _42.GetSyncingResponseAmino): _42.GetSyncingResponse;
                    toAmino(message: _42.GetSyncingResponse): _42.GetSyncingResponseAmino;
                    fromAminoMsg(object: _42.GetSyncingResponseAminoMsg): _42.GetSyncingResponse;
                    toAminoMsg(message: _42.GetSyncingResponse): _42.GetSyncingResponseAminoMsg;
                    fromProtoMsg(message: _42.GetSyncingResponseProtoMsg): _42.GetSyncingResponse;
                    toProto(message: _42.GetSyncingResponse): Uint8Array;
                    toProtoMsg(message: _42.GetSyncingResponse): _42.GetSyncingResponseProtoMsg;
                };
                GetNodeInfoRequest: {
                    typeUrl: string;
                    encode(_: _42.GetNodeInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _42.GetNodeInfoRequest;
                    fromJSON(_: any): _42.GetNodeInfoRequest;
                    toJSON(_: _42.GetNodeInfoRequest): unknown;
                    fromPartial(_: Partial<_42.GetNodeInfoRequest>): _42.GetNodeInfoRequest;
                    fromAmino(_: _42.GetNodeInfoRequestAmino): _42.GetNodeInfoRequest;
                    toAmino(_: _42.GetNodeInfoRequest): _42.GetNodeInfoRequestAmino;
                    fromAminoMsg(object: _42.GetNodeInfoRequestAminoMsg): _42.GetNodeInfoRequest;
                    toAminoMsg(message: _42.GetNodeInfoRequest): _42.GetNodeInfoRequestAminoMsg;
                    fromProtoMsg(message: _42.GetNodeInfoRequestProtoMsg): _42.GetNodeInfoRequest;
                    toProto(message: _42.GetNodeInfoRequest): Uint8Array;
                    toProtoMsg(message: _42.GetNodeInfoRequest): _42.GetNodeInfoRequestProtoMsg;
                };
                GetNodeInfoResponse: {
                    typeUrl: string;
                    encode(message: _42.GetNodeInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _42.GetNodeInfoResponse;
                    fromJSON(object: any): _42.GetNodeInfoResponse;
                    toJSON(message: _42.GetNodeInfoResponse): unknown;
                    fromPartial(object: Partial<_42.GetNodeInfoResponse>): _42.GetNodeInfoResponse;
                    fromAmino(object: _42.GetNodeInfoResponseAmino): _42.GetNodeInfoResponse;
                    toAmino(message: _42.GetNodeInfoResponse): _42.GetNodeInfoResponseAmino;
                    fromAminoMsg(object: _42.GetNodeInfoResponseAminoMsg): _42.GetNodeInfoResponse;
                    toAminoMsg(message: _42.GetNodeInfoResponse): _42.GetNodeInfoResponseAminoMsg;
                    fromProtoMsg(message: _42.GetNodeInfoResponseProtoMsg): _42.GetNodeInfoResponse;
                    toProto(message: _42.GetNodeInfoResponse): Uint8Array;
                    toProtoMsg(message: _42.GetNodeInfoResponse): _42.GetNodeInfoResponseProtoMsg;
                };
                VersionInfo: {
                    typeUrl: string;
                    encode(message: _42.VersionInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _42.VersionInfo;
                    fromJSON(object: any): _42.VersionInfo;
                    toJSON(message: _42.VersionInfo): unknown;
                    fromPartial(object: Partial<_42.VersionInfo>): _42.VersionInfo;
                    fromAmino(object: _42.VersionInfoAmino): _42.VersionInfo;
                    toAmino(message: _42.VersionInfo): _42.VersionInfoAmino;
                    fromAminoMsg(object: _42.VersionInfoAminoMsg): _42.VersionInfo;
                    toAminoMsg(message: _42.VersionInfo): _42.VersionInfoAminoMsg;
                    fromProtoMsg(message: _42.VersionInfoProtoMsg): _42.VersionInfo;
                    toProto(message: _42.VersionInfo): Uint8Array;
                    toProtoMsg(message: _42.VersionInfo): _42.VersionInfoProtoMsg;
                };
                Module: {
                    typeUrl: string;
                    encode(message: _42.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _42.Module;
                    fromJSON(object: any): _42.Module;
                    toJSON(message: _42.Module): unknown;
                    fromPartial(object: Partial<_42.Module>): _42.Module;
                    fromAmino(object: _42.ModuleAmino): _42.Module;
                    toAmino(message: _42.Module): _42.ModuleAmino;
                    fromAminoMsg(object: _42.ModuleAminoMsg): _42.Module;
                    toAminoMsg(message: _42.Module): _42.ModuleAminoMsg;
                    fromProtoMsg(message: _42.ModuleProtoMsg): _42.Module;
                    toProto(message: _42.Module): Uint8Array;
                    toProtoMsg(message: _42.Module): _42.ModuleProtoMsg;
                };
                ABCIQueryRequest: {
                    typeUrl: string;
                    encode(message: _42.ABCIQueryRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _42.ABCIQueryRequest;
                    fromJSON(object: any): _42.ABCIQueryRequest;
                    toJSON(message: _42.ABCIQueryRequest): unknown;
                    fromPartial(object: Partial<_42.ABCIQueryRequest>): _42.ABCIQueryRequest;
                    fromAmino(object: _42.ABCIQueryRequestAmino): _42.ABCIQueryRequest;
                    toAmino(message: _42.ABCIQueryRequest): _42.ABCIQueryRequestAmino;
                    fromAminoMsg(object: _42.ABCIQueryRequestAminoMsg): _42.ABCIQueryRequest;
                    toAminoMsg(message: _42.ABCIQueryRequest): _42.ABCIQueryRequestAminoMsg;
                    fromProtoMsg(message: _42.ABCIQueryRequestProtoMsg): _42.ABCIQueryRequest;
                    toProto(message: _42.ABCIQueryRequest): Uint8Array;
                    toProtoMsg(message: _42.ABCIQueryRequest): _42.ABCIQueryRequestProtoMsg;
                };
                ABCIQueryResponse: {
                    typeUrl: string;
                    encode(message: _42.ABCIQueryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _42.ABCIQueryResponse;
                    fromJSON(object: any): _42.ABCIQueryResponse;
                    toJSON(message: _42.ABCIQueryResponse): unknown;
                    fromPartial(object: Partial<_42.ABCIQueryResponse>): _42.ABCIQueryResponse;
                    fromAmino(object: _42.ABCIQueryResponseAmino): _42.ABCIQueryResponse;
                    toAmino(message: _42.ABCIQueryResponse): _42.ABCIQueryResponseAmino;
                    fromAminoMsg(object: _42.ABCIQueryResponseAminoMsg): _42.ABCIQueryResponse;
                    toAminoMsg(message: _42.ABCIQueryResponse): _42.ABCIQueryResponseAminoMsg;
                    fromProtoMsg(message: _42.ABCIQueryResponseProtoMsg): _42.ABCIQueryResponse;
                    toProto(message: _42.ABCIQueryResponse): Uint8Array;
                    toProtoMsg(message: _42.ABCIQueryResponse): _42.ABCIQueryResponseProtoMsg;
                };
                ProofOp: {
                    typeUrl: string;
                    encode(message: _42.ProofOp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _42.ProofOp;
                    fromJSON(object: any): _42.ProofOp;
                    toJSON(message: _42.ProofOp): unknown;
                    fromPartial(object: Partial<_42.ProofOp>): _42.ProofOp;
                    fromAmino(object: _42.ProofOpAmino): _42.ProofOp;
                    toAmino(message: _42.ProofOp): _42.ProofOpAmino;
                    fromAminoMsg(object: _42.ProofOpAminoMsg): _42.ProofOp;
                    toAminoMsg(message: _42.ProofOp): _42.ProofOpAminoMsg;
                    fromProtoMsg(message: _42.ProofOpProtoMsg): _42.ProofOp;
                    toProto(message: _42.ProofOp): Uint8Array;
                    toProtoMsg(message: _42.ProofOp): _42.ProofOpProtoMsg;
                };
                ProofOps: {
                    typeUrl: string;
                    encode(message: _42.ProofOps, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _42.ProofOps;
                    fromJSON(object: any): _42.ProofOps;
                    toJSON(message: _42.ProofOps): unknown;
                    fromPartial(object: Partial<_42.ProofOps>): _42.ProofOps;
                    fromAmino(object: _42.ProofOpsAmino): _42.ProofOps;
                    toAmino(message: _42.ProofOps): _42.ProofOpsAmino;
                    fromAminoMsg(object: _42.ProofOpsAminoMsg): _42.ProofOps;
                    toAminoMsg(message: _42.ProofOps): _42.ProofOpsAminoMsg;
                    fromProtoMsg(message: _42.ProofOpsProtoMsg): _42.ProofOps;
                    toProto(message: _42.ProofOps): Uint8Array;
                    toProtoMsg(message: _42.ProofOps): _42.ProofOpsProtoMsg;
                };
            };
        }
        const v1beta1: {
            protobufPackage: "cosmos.base.v1beta1";
            Coin: {
                typeUrl: string;
                encode(message: _44.Coin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _44.Coin;
                fromJSON(object: any): _44.Coin;
                toJSON(message: _44.Coin): unknown;
                fromPartial(object: Partial<_44.Coin>): _44.Coin;
                fromAmino(object: _44.CoinAmino): _44.Coin;
                toAmino(message: _44.Coin): _44.CoinAmino;
                fromAminoMsg(object: _44.CoinAminoMsg): _44.Coin;
                toAminoMsg(message: _44.Coin): _44.CoinAminoMsg;
                fromProtoMsg(message: _44.CoinProtoMsg): _44.Coin;
                toProto(message: _44.Coin): Uint8Array;
                toProtoMsg(message: _44.Coin): _44.CoinProtoMsg;
            };
            DecCoin: {
                typeUrl: string;
                encode(message: _44.DecCoin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _44.DecCoin;
                fromJSON(object: any): _44.DecCoin;
                toJSON(message: _44.DecCoin): unknown;
                fromPartial(object: Partial<_44.DecCoin>): _44.DecCoin;
                fromAmino(object: _44.DecCoinAmino): _44.DecCoin;
                toAmino(message: _44.DecCoin): _44.DecCoinAmino;
                fromAminoMsg(object: _44.DecCoinAminoMsg): _44.DecCoin;
                toAminoMsg(message: _44.DecCoin): _44.DecCoinAminoMsg;
                fromProtoMsg(message: _44.DecCoinProtoMsg): _44.DecCoin;
                toProto(message: _44.DecCoin): Uint8Array;
                toProtoMsg(message: _44.DecCoin): _44.DecCoinProtoMsg;
            };
            IntProto: {
                typeUrl: string;
                encode(message: _44.IntProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _44.IntProto;
                fromJSON(object: any): _44.IntProto;
                toJSON(message: _44.IntProto): unknown;
                fromPartial(object: Partial<_44.IntProto>): _44.IntProto;
                fromAmino(object: _44.IntProtoAmino): _44.IntProto;
                toAmino(message: _44.IntProto): _44.IntProtoAmino;
                fromAminoMsg(object: _44.IntProtoAminoMsg): _44.IntProto;
                toAminoMsg(message: _44.IntProto): _44.IntProtoAminoMsg;
                fromProtoMsg(message: _44.IntProtoProtoMsg): _44.IntProto;
                toProto(message: _44.IntProto): Uint8Array;
                toProtoMsg(message: _44.IntProto): _44.IntProtoProtoMsg;
            };
            DecProto: {
                typeUrl: string;
                encode(message: _44.DecProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _44.DecProto;
                fromJSON(object: any): _44.DecProto;
                toJSON(message: _44.DecProto): unknown;
                fromPartial(object: Partial<_44.DecProto>): _44.DecProto;
                fromAmino(object: _44.DecProtoAmino): _44.DecProto;
                toAmino(message: _44.DecProto): _44.DecProtoAmino;
                fromAminoMsg(object: _44.DecProtoAminoMsg): _44.DecProto;
                toAminoMsg(message: _44.DecProto): _44.DecProtoAminoMsg;
                fromProtoMsg(message: _44.DecProtoProtoMsg): _44.DecProto;
                toProto(message: _44.DecProto): Uint8Array;
                toProtoMsg(message: _44.DecProto): _44.DecProtoProtoMsg;
            };
        };
    }
    namespace circuit {
        namespace module {
            const v1: {
                protobufPackage: "cosmos.circuit.module.v1";
                Module: {
                    typeUrl: string;
                    encode(message: _45.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _45.Module;
                    fromJSON(object: any): _45.Module;
                    toJSON(message: _45.Module): unknown;
                    fromPartial(object: Partial<_45.Module>): _45.Module;
                    fromAmino(object: _45.ModuleAmino): _45.Module;
                    toAmino(message: _45.Module): _45.ModuleAmino;
                    fromAminoMsg(object: _45.ModuleAminoMsg): _45.Module;
                    toAminoMsg(message: _45.Module): _45.ModuleAminoMsg;
                    fromProtoMsg(message: _45.ModuleProtoMsg): _45.Module;
                    toProto(message: _45.Module): Uint8Array;
                    toProtoMsg(message: _45.Module): _45.ModuleProtoMsg;
                };
            };
        }
        const v1: {
            Msg: typeof _264.Msg;
            Query: typeof _247.Query;
            QueryClientImpl: typeof _247.QueryClientImpl;
            LCDQueryClient: typeof _229.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    authorizeCircuitBreaker(value: _47.MsgAuthorizeCircuitBreaker): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    tripCircuitBreaker(value: _47.MsgTripCircuitBreaker): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    resetCircuitBreaker(value: _47.MsgResetCircuitBreaker): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    authorizeCircuitBreaker(value: _47.MsgAuthorizeCircuitBreaker): {
                        typeUrl: string;
                        value: _47.MsgAuthorizeCircuitBreaker;
                    };
                    tripCircuitBreaker(value: _47.MsgTripCircuitBreaker): {
                        typeUrl: string;
                        value: _47.MsgTripCircuitBreaker;
                    };
                    resetCircuitBreaker(value: _47.MsgResetCircuitBreaker): {
                        typeUrl: string;
                        value: _47.MsgResetCircuitBreaker;
                    };
                };
                toJSON: {
                    authorizeCircuitBreaker(value: _47.MsgAuthorizeCircuitBreaker): {
                        typeUrl: string;
                        value: unknown;
                    };
                    tripCircuitBreaker(value: _47.MsgTripCircuitBreaker): {
                        typeUrl: string;
                        value: unknown;
                    };
                    resetCircuitBreaker(value: _47.MsgResetCircuitBreaker): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    authorizeCircuitBreaker(value: any): {
                        typeUrl: string;
                        value: _47.MsgAuthorizeCircuitBreaker;
                    };
                    tripCircuitBreaker(value: any): {
                        typeUrl: string;
                        value: _47.MsgTripCircuitBreaker;
                    };
                    resetCircuitBreaker(value: any): {
                        typeUrl: string;
                        value: _47.MsgResetCircuitBreaker;
                    };
                };
                fromPartial: {
                    authorizeCircuitBreaker(value: _47.MsgAuthorizeCircuitBreaker): {
                        typeUrl: string;
                        value: _47.MsgAuthorizeCircuitBreaker;
                    };
                    tripCircuitBreaker(value: _47.MsgTripCircuitBreaker): {
                        typeUrl: string;
                        value: _47.MsgTripCircuitBreaker;
                    };
                    resetCircuitBreaker(value: _47.MsgResetCircuitBreaker): {
                        typeUrl: string;
                        value: _47.MsgResetCircuitBreaker;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.circuit.v1.MsgAuthorizeCircuitBreaker": {
                    aminoType: string;
                    toAmino: (message: _47.MsgAuthorizeCircuitBreaker) => _47.MsgAuthorizeCircuitBreakerAmino;
                    fromAmino: (object: _47.MsgAuthorizeCircuitBreakerAmino) => _47.MsgAuthorizeCircuitBreaker;
                };
                "/cosmos.circuit.v1.MsgTripCircuitBreaker": {
                    aminoType: string;
                    toAmino: (message: _47.MsgTripCircuitBreaker) => _47.MsgTripCircuitBreakerAmino;
                    fromAmino: (object: _47.MsgTripCircuitBreakerAmino) => _47.MsgTripCircuitBreaker;
                };
                "/cosmos.circuit.v1.MsgResetCircuitBreaker": {
                    aminoType: string;
                    toAmino: (message: _47.MsgResetCircuitBreaker) => _47.MsgResetCircuitBreakerAmino;
                    fromAmino: (object: _47.MsgResetCircuitBreakerAmino) => _47.MsgResetCircuitBreaker;
                };
            };
            permissions_LevelFromJSON(object: any): _48.Permissions_Level;
            permissions_LevelToJSON(object: _48.Permissions_Level): string;
            protobufPackage: "cosmos.circuit.v1";
            Permissions_Level: typeof _48.Permissions_Level;
            Permissions_LevelSDKType: typeof _48.Permissions_Level;
            Permissions_LevelAmino: typeof _48.Permissions_Level;
            Permissions: {
                typeUrl: string;
                encode(message: _48.Permissions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _48.Permissions;
                fromJSON(object: any): _48.Permissions;
                toJSON(message: _48.Permissions): unknown;
                fromPartial(object: Partial<_48.Permissions>): _48.Permissions;
                fromAmino(object: _48.PermissionsAmino): _48.Permissions;
                toAmino(message: _48.Permissions): _48.PermissionsAmino;
                fromAminoMsg(object: _48.PermissionsAminoMsg): _48.Permissions;
                toAminoMsg(message: _48.Permissions): _48.PermissionsAminoMsg;
                fromProtoMsg(message: _48.PermissionsProtoMsg): _48.Permissions;
                toProto(message: _48.Permissions): Uint8Array;
                toProtoMsg(message: _48.Permissions): _48.PermissionsProtoMsg;
            };
            GenesisAccountPermissions: {
                typeUrl: string;
                encode(message: _48.GenesisAccountPermissions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _48.GenesisAccountPermissions;
                fromJSON(object: any): _48.GenesisAccountPermissions;
                toJSON(message: _48.GenesisAccountPermissions): unknown;
                fromPartial(object: Partial<_48.GenesisAccountPermissions>): _48.GenesisAccountPermissions;
                fromAmino(object: _48.GenesisAccountPermissionsAmino): _48.GenesisAccountPermissions;
                toAmino(message: _48.GenesisAccountPermissions): _48.GenesisAccountPermissionsAmino;
                fromAminoMsg(object: _48.GenesisAccountPermissionsAminoMsg): _48.GenesisAccountPermissions;
                toAminoMsg(message: _48.GenesisAccountPermissions): _48.GenesisAccountPermissionsAminoMsg;
                fromProtoMsg(message: _48.GenesisAccountPermissionsProtoMsg): _48.GenesisAccountPermissions;
                toProto(message: _48.GenesisAccountPermissions): Uint8Array;
                toProtoMsg(message: _48.GenesisAccountPermissions): _48.GenesisAccountPermissionsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _48.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _48.GenesisState;
                fromJSON(object: any): _48.GenesisState;
                toJSON(message: _48.GenesisState): unknown;
                fromPartial(object: Partial<_48.GenesisState>): _48.GenesisState;
                fromAmino(object: _48.GenesisStateAmino): _48.GenesisState;
                toAmino(message: _48.GenesisState): _48.GenesisStateAmino;
                fromAminoMsg(object: _48.GenesisStateAminoMsg): _48.GenesisState;
                toAminoMsg(message: _48.GenesisState): _48.GenesisStateAminoMsg;
                fromProtoMsg(message: _48.GenesisStateProtoMsg): _48.GenesisState;
                toProto(message: _48.GenesisState): Uint8Array;
                toProtoMsg(message: _48.GenesisState): _48.GenesisStateProtoMsg;
            };
            MsgAuthorizeCircuitBreaker: {
                typeUrl: string;
                encode(message: _47.MsgAuthorizeCircuitBreaker, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _47.MsgAuthorizeCircuitBreaker;
                fromJSON(object: any): _47.MsgAuthorizeCircuitBreaker;
                toJSON(message: _47.MsgAuthorizeCircuitBreaker): unknown;
                fromPartial(object: Partial<_47.MsgAuthorizeCircuitBreaker>): _47.MsgAuthorizeCircuitBreaker;
                fromAmino(object: _47.MsgAuthorizeCircuitBreakerAmino): _47.MsgAuthorizeCircuitBreaker;
                toAmino(message: _47.MsgAuthorizeCircuitBreaker): _47.MsgAuthorizeCircuitBreakerAmino;
                fromAminoMsg(object: _47.MsgAuthorizeCircuitBreakerAminoMsg): _47.MsgAuthorizeCircuitBreaker;
                toAminoMsg(message: _47.MsgAuthorizeCircuitBreaker): _47.MsgAuthorizeCircuitBreakerAminoMsg;
                fromProtoMsg(message: _47.MsgAuthorizeCircuitBreakerProtoMsg): _47.MsgAuthorizeCircuitBreaker;
                toProto(message: _47.MsgAuthorizeCircuitBreaker): Uint8Array;
                toProtoMsg(message: _47.MsgAuthorizeCircuitBreaker): _47.MsgAuthorizeCircuitBreakerProtoMsg;
            };
            MsgAuthorizeCircuitBreakerResponse: {
                typeUrl: string;
                encode(message: _47.MsgAuthorizeCircuitBreakerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _47.MsgAuthorizeCircuitBreakerResponse;
                fromJSON(object: any): _47.MsgAuthorizeCircuitBreakerResponse;
                toJSON(message: _47.MsgAuthorizeCircuitBreakerResponse): unknown;
                fromPartial(object: Partial<_47.MsgAuthorizeCircuitBreakerResponse>): _47.MsgAuthorizeCircuitBreakerResponse;
                fromAmino(object: _47.MsgAuthorizeCircuitBreakerResponseAmino): _47.MsgAuthorizeCircuitBreakerResponse;
                toAmino(message: _47.MsgAuthorizeCircuitBreakerResponse): _47.MsgAuthorizeCircuitBreakerResponseAmino;
                fromAminoMsg(object: _47.MsgAuthorizeCircuitBreakerResponseAminoMsg): _47.MsgAuthorizeCircuitBreakerResponse;
                toAminoMsg(message: _47.MsgAuthorizeCircuitBreakerResponse): _47.MsgAuthorizeCircuitBreakerResponseAminoMsg;
                fromProtoMsg(message: _47.MsgAuthorizeCircuitBreakerResponseProtoMsg): _47.MsgAuthorizeCircuitBreakerResponse;
                toProto(message: _47.MsgAuthorizeCircuitBreakerResponse): Uint8Array;
                toProtoMsg(message: _47.MsgAuthorizeCircuitBreakerResponse): _47.MsgAuthorizeCircuitBreakerResponseProtoMsg;
            };
            MsgTripCircuitBreaker: {
                typeUrl: string;
                encode(message: _47.MsgTripCircuitBreaker, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _47.MsgTripCircuitBreaker;
                fromJSON(object: any): _47.MsgTripCircuitBreaker;
                toJSON(message: _47.MsgTripCircuitBreaker): unknown;
                fromPartial(object: Partial<_47.MsgTripCircuitBreaker>): _47.MsgTripCircuitBreaker;
                fromAmino(object: _47.MsgTripCircuitBreakerAmino): _47.MsgTripCircuitBreaker;
                toAmino(message: _47.MsgTripCircuitBreaker): _47.MsgTripCircuitBreakerAmino;
                fromAminoMsg(object: _47.MsgTripCircuitBreakerAminoMsg): _47.MsgTripCircuitBreaker;
                toAminoMsg(message: _47.MsgTripCircuitBreaker): _47.MsgTripCircuitBreakerAminoMsg;
                fromProtoMsg(message: _47.MsgTripCircuitBreakerProtoMsg): _47.MsgTripCircuitBreaker;
                toProto(message: _47.MsgTripCircuitBreaker): Uint8Array;
                toProtoMsg(message: _47.MsgTripCircuitBreaker): _47.MsgTripCircuitBreakerProtoMsg;
            };
            MsgTripCircuitBreakerResponse: {
                typeUrl: string;
                encode(message: _47.MsgTripCircuitBreakerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _47.MsgTripCircuitBreakerResponse;
                fromJSON(object: any): _47.MsgTripCircuitBreakerResponse;
                toJSON(message: _47.MsgTripCircuitBreakerResponse): unknown;
                fromPartial(object: Partial<_47.MsgTripCircuitBreakerResponse>): _47.MsgTripCircuitBreakerResponse;
                fromAmino(object: _47.MsgTripCircuitBreakerResponseAmino): _47.MsgTripCircuitBreakerResponse;
                toAmino(message: _47.MsgTripCircuitBreakerResponse): _47.MsgTripCircuitBreakerResponseAmino;
                fromAminoMsg(object: _47.MsgTripCircuitBreakerResponseAminoMsg): _47.MsgTripCircuitBreakerResponse;
                toAminoMsg(message: _47.MsgTripCircuitBreakerResponse): _47.MsgTripCircuitBreakerResponseAminoMsg;
                fromProtoMsg(message: _47.MsgTripCircuitBreakerResponseProtoMsg): _47.MsgTripCircuitBreakerResponse;
                toProto(message: _47.MsgTripCircuitBreakerResponse): Uint8Array;
                toProtoMsg(message: _47.MsgTripCircuitBreakerResponse): _47.MsgTripCircuitBreakerResponseProtoMsg;
            };
            MsgResetCircuitBreaker: {
                typeUrl: string;
                encode(message: _47.MsgResetCircuitBreaker, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _47.MsgResetCircuitBreaker;
                fromJSON(object: any): _47.MsgResetCircuitBreaker;
                toJSON(message: _47.MsgResetCircuitBreaker): unknown;
                fromPartial(object: Partial<_47.MsgResetCircuitBreaker>): _47.MsgResetCircuitBreaker;
                fromAmino(object: _47.MsgResetCircuitBreakerAmino): _47.MsgResetCircuitBreaker;
                toAmino(message: _47.MsgResetCircuitBreaker): _47.MsgResetCircuitBreakerAmino;
                fromAminoMsg(object: _47.MsgResetCircuitBreakerAminoMsg): _47.MsgResetCircuitBreaker;
                toAminoMsg(message: _47.MsgResetCircuitBreaker): _47.MsgResetCircuitBreakerAminoMsg;
                fromProtoMsg(message: _47.MsgResetCircuitBreakerProtoMsg): _47.MsgResetCircuitBreaker;
                toProto(message: _47.MsgResetCircuitBreaker): Uint8Array;
                toProtoMsg(message: _47.MsgResetCircuitBreaker): _47.MsgResetCircuitBreakerProtoMsg;
            };
            MsgResetCircuitBreakerResponse: {
                typeUrl: string;
                encode(message: _47.MsgResetCircuitBreakerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _47.MsgResetCircuitBreakerResponse;
                fromJSON(object: any): _47.MsgResetCircuitBreakerResponse;
                toJSON(message: _47.MsgResetCircuitBreakerResponse): unknown;
                fromPartial(object: Partial<_47.MsgResetCircuitBreakerResponse>): _47.MsgResetCircuitBreakerResponse;
                fromAmino(object: _47.MsgResetCircuitBreakerResponseAmino): _47.MsgResetCircuitBreakerResponse;
                toAmino(message: _47.MsgResetCircuitBreakerResponse): _47.MsgResetCircuitBreakerResponseAmino;
                fromAminoMsg(object: _47.MsgResetCircuitBreakerResponseAminoMsg): _47.MsgResetCircuitBreakerResponse;
                toAminoMsg(message: _47.MsgResetCircuitBreakerResponse): _47.MsgResetCircuitBreakerResponseAminoMsg;
                fromProtoMsg(message: _47.MsgResetCircuitBreakerResponseProtoMsg): _47.MsgResetCircuitBreakerResponse;
                toProto(message: _47.MsgResetCircuitBreakerResponse): Uint8Array;
                toProtoMsg(message: _47.MsgResetCircuitBreakerResponse): _47.MsgResetCircuitBreakerResponseProtoMsg;
            };
            QueryAccountRequest: {
                typeUrl: string;
                encode(message: _46.QueryAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _46.QueryAccountRequest;
                fromJSON(object: any): _46.QueryAccountRequest;
                toJSON(message: _46.QueryAccountRequest): unknown;
                fromPartial(object: Partial<_46.QueryAccountRequest>): _46.QueryAccountRequest;
                fromAmino(object: _46.QueryAccountRequestAmino): _46.QueryAccountRequest;
                toAmino(message: _46.QueryAccountRequest): _46.QueryAccountRequestAmino;
                fromAminoMsg(object: _46.QueryAccountRequestAminoMsg): _46.QueryAccountRequest;
                toAminoMsg(message: _46.QueryAccountRequest): _46.QueryAccountRequestAminoMsg;
                fromProtoMsg(message: _46.QueryAccountRequestProtoMsg): _46.QueryAccountRequest;
                toProto(message: _46.QueryAccountRequest): Uint8Array;
                toProtoMsg(message: _46.QueryAccountRequest): _46.QueryAccountRequestProtoMsg;
            };
            AccountResponse: {
                typeUrl: string;
                encode(message: _46.AccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _46.AccountResponse;
                fromJSON(object: any): _46.AccountResponse;
                toJSON(message: _46.AccountResponse): unknown;
                fromPartial(object: Partial<_46.AccountResponse>): _46.AccountResponse;
                fromAmino(object: _46.AccountResponseAmino): _46.AccountResponse;
                toAmino(message: _46.AccountResponse): _46.AccountResponseAmino;
                fromAminoMsg(object: _46.AccountResponseAminoMsg): _46.AccountResponse;
                toAminoMsg(message: _46.AccountResponse): _46.AccountResponseAminoMsg;
                fromProtoMsg(message: _46.AccountResponseProtoMsg): _46.AccountResponse;
                toProto(message: _46.AccountResponse): Uint8Array;
                toProtoMsg(message: _46.AccountResponse): _46.AccountResponseProtoMsg;
            };
            QueryAccountsRequest: {
                typeUrl: string;
                encode(message: _46.QueryAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _46.QueryAccountsRequest;
                fromJSON(object: any): _46.QueryAccountsRequest;
                toJSON(message: _46.QueryAccountsRequest): unknown;
                fromPartial(object: Partial<_46.QueryAccountsRequest>): _46.QueryAccountsRequest;
                fromAmino(object: _46.QueryAccountsRequestAmino): _46.QueryAccountsRequest;
                toAmino(message: _46.QueryAccountsRequest): _46.QueryAccountsRequestAmino;
                fromAminoMsg(object: _46.QueryAccountsRequestAminoMsg): _46.QueryAccountsRequest;
                toAminoMsg(message: _46.QueryAccountsRequest): _46.QueryAccountsRequestAminoMsg;
                fromProtoMsg(message: _46.QueryAccountsRequestProtoMsg): _46.QueryAccountsRequest;
                toProto(message: _46.QueryAccountsRequest): Uint8Array;
                toProtoMsg(message: _46.QueryAccountsRequest): _46.QueryAccountsRequestProtoMsg;
            };
            AccountsResponse: {
                typeUrl: string;
                encode(message: _46.AccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _46.AccountsResponse;
                fromJSON(object: any): _46.AccountsResponse;
                toJSON(message: _46.AccountsResponse): unknown;
                fromPartial(object: Partial<_46.AccountsResponse>): _46.AccountsResponse;
                fromAmino(object: _46.AccountsResponseAmino): _46.AccountsResponse;
                toAmino(message: _46.AccountsResponse): _46.AccountsResponseAmino;
                fromAminoMsg(object: _46.AccountsResponseAminoMsg): _46.AccountsResponse;
                toAminoMsg(message: _46.AccountsResponse): _46.AccountsResponseAminoMsg;
                fromProtoMsg(message: _46.AccountsResponseProtoMsg): _46.AccountsResponse;
                toProto(message: _46.AccountsResponse): Uint8Array;
                toProtoMsg(message: _46.AccountsResponse): _46.AccountsResponseProtoMsg;
            };
            QueryDisabledListRequest: {
                typeUrl: string;
                encode(_: _46.QueryDisabledListRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _46.QueryDisabledListRequest;
                fromJSON(_: any): _46.QueryDisabledListRequest;
                toJSON(_: _46.QueryDisabledListRequest): unknown;
                fromPartial(_: Partial<_46.QueryDisabledListRequest>): _46.QueryDisabledListRequest;
                fromAmino(_: _46.QueryDisabledListRequestAmino): _46.QueryDisabledListRequest;
                toAmino(_: _46.QueryDisabledListRequest): _46.QueryDisabledListRequestAmino;
                fromAminoMsg(object: _46.QueryDisabledListRequestAminoMsg): _46.QueryDisabledListRequest;
                toAminoMsg(message: _46.QueryDisabledListRequest): _46.QueryDisabledListRequestAminoMsg;
                fromProtoMsg(message: _46.QueryDisabledListRequestProtoMsg): _46.QueryDisabledListRequest;
                toProto(message: _46.QueryDisabledListRequest): Uint8Array;
                toProtoMsg(message: _46.QueryDisabledListRequest): _46.QueryDisabledListRequestProtoMsg;
            };
            DisabledListResponse: {
                typeUrl: string;
                encode(message: _46.DisabledListResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _46.DisabledListResponse;
                fromJSON(object: any): _46.DisabledListResponse;
                toJSON(message: _46.DisabledListResponse): unknown;
                fromPartial(object: Partial<_46.DisabledListResponse>): _46.DisabledListResponse;
                fromAmino(object: _46.DisabledListResponseAmino): _46.DisabledListResponse;
                toAmino(message: _46.DisabledListResponse): _46.DisabledListResponseAmino;
                fromAminoMsg(object: _46.DisabledListResponseAminoMsg): _46.DisabledListResponse;
                toAminoMsg(message: _46.DisabledListResponse): _46.DisabledListResponseAminoMsg;
                fromProtoMsg(message: _46.DisabledListResponseProtoMsg): _46.DisabledListResponse;
                toProto(message: _46.DisabledListResponse): Uint8Array;
                toProtoMsg(message: _46.DisabledListResponse): _46.DisabledListResponseProtoMsg;
            };
        };
    }
    namespace consensus {
        namespace module {
            const v1: {
                protobufPackage: "cosmos.consensus.module.v1";
                Module: {
                    typeUrl: string;
                    encode(message: _49.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _49.Module;
                    fromJSON(object: any): _49.Module;
                    toJSON(message: _49.Module): unknown;
                    fromPartial(object: Partial<_49.Module>): _49.Module;
                    fromAmino(object: _49.ModuleAmino): _49.Module;
                    toAmino(message: _49.Module): _49.ModuleAmino;
                    fromAminoMsg(object: _49.ModuleAminoMsg): _49.Module;
                    toAminoMsg(message: _49.Module): _49.ModuleAminoMsg;
                    fromProtoMsg(message: _49.ModuleProtoMsg): _49.Module;
                    toProto(message: _49.Module): Uint8Array;
                    toProtoMsg(message: _49.Module): _49.ModuleProtoMsg;
                };
            };
        }
        const v1: {
            Msg: typeof _265.Msg;
            Query: typeof _248.Query;
            QueryClientImpl: typeof _248.QueryClientImpl;
            LCDQueryClient: typeof _230.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    updateParams(value: _51.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    updateParams(value: _51.MsgUpdateParams): {
                        typeUrl: string;
                        value: _51.MsgUpdateParams;
                    };
                };
                toJSON: {
                    updateParams(value: _51.MsgUpdateParams): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _51.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    updateParams(value: _51.MsgUpdateParams): {
                        typeUrl: string;
                        value: _51.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.consensus.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _51.MsgUpdateParams) => _51.MsgUpdateParamsAmino;
                    fromAmino: (object: _51.MsgUpdateParamsAmino) => _51.MsgUpdateParams;
                };
            };
            protobufPackage: "cosmos.consensus.v1";
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _51.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _51.MsgUpdateParams;
                fromJSON(object: any): _51.MsgUpdateParams;
                toJSON(message: _51.MsgUpdateParams): unknown;
                fromPartial(object: Partial<_51.MsgUpdateParams>): _51.MsgUpdateParams;
                fromAmino(object: _51.MsgUpdateParamsAmino): _51.MsgUpdateParams;
                toAmino(message: _51.MsgUpdateParams): _51.MsgUpdateParamsAmino;
                fromAminoMsg(object: _51.MsgUpdateParamsAminoMsg): _51.MsgUpdateParams;
                toAminoMsg(message: _51.MsgUpdateParams): _51.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _51.MsgUpdateParamsProtoMsg): _51.MsgUpdateParams;
                toProto(message: _51.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _51.MsgUpdateParams): _51.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _51.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _51.MsgUpdateParamsResponse;
                fromJSON(_: any): _51.MsgUpdateParamsResponse;
                toJSON(_: _51.MsgUpdateParamsResponse): unknown;
                fromPartial(_: Partial<_51.MsgUpdateParamsResponse>): _51.MsgUpdateParamsResponse;
                fromAmino(_: _51.MsgUpdateParamsResponseAmino): _51.MsgUpdateParamsResponse;
                toAmino(_: _51.MsgUpdateParamsResponse): _51.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _51.MsgUpdateParamsResponseAminoMsg): _51.MsgUpdateParamsResponse;
                toAminoMsg(message: _51.MsgUpdateParamsResponse): _51.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _51.MsgUpdateParamsResponseProtoMsg): _51.MsgUpdateParamsResponse;
                toProto(message: _51.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _51.MsgUpdateParamsResponse): _51.MsgUpdateParamsResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _50.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _50.QueryParamsRequest;
                fromJSON(_: any): _50.QueryParamsRequest;
                toJSON(_: _50.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_50.QueryParamsRequest>): _50.QueryParamsRequest;
                fromAmino(_: _50.QueryParamsRequestAmino): _50.QueryParamsRequest;
                toAmino(_: _50.QueryParamsRequest): _50.QueryParamsRequestAmino;
                fromAminoMsg(object: _50.QueryParamsRequestAminoMsg): _50.QueryParamsRequest;
                toAminoMsg(message: _50.QueryParamsRequest): _50.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _50.QueryParamsRequestProtoMsg): _50.QueryParamsRequest;
                toProto(message: _50.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _50.QueryParamsRequest): _50.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _50.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _50.QueryParamsResponse;
                fromJSON(object: any): _50.QueryParamsResponse;
                toJSON(message: _50.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_50.QueryParamsResponse>): _50.QueryParamsResponse;
                fromAmino(object: _50.QueryParamsResponseAmino): _50.QueryParamsResponse;
                toAmino(message: _50.QueryParamsResponse): _50.QueryParamsResponseAmino;
                fromAminoMsg(object: _50.QueryParamsResponseAminoMsg): _50.QueryParamsResponse;
                toAminoMsg(message: _50.QueryParamsResponse): _50.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _50.QueryParamsResponseProtoMsg): _50.QueryParamsResponse;
                toProto(message: _50.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _50.QueryParamsResponse): _50.QueryParamsResponseProtoMsg;
            };
        };
    }
    namespace crisis {
        namespace module {
            const v1: {
                protobufPackage: "cosmos.crisis.module.v1";
                Module: {
                    typeUrl: string;
                    encode(message: _52.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _52.Module;
                    fromJSON(object: any): _52.Module;
                    toJSON(message: _52.Module): unknown;
                    fromPartial(object: Partial<_52.Module>): _52.Module;
                    fromAmino(object: _52.ModuleAmino): _52.Module;
                    toAmino(message: _52.Module): _52.ModuleAmino;
                    fromAminoMsg(object: _52.ModuleAminoMsg): _52.Module;
                    toAminoMsg(message: _52.Module): _52.ModuleAminoMsg;
                    fromProtoMsg(message: _52.ModuleProtoMsg): _52.Module;
                    toProto(message: _52.Module): Uint8Array;
                    toProtoMsg(message: _52.Module): _52.ModuleProtoMsg;
                };
            };
        }
    }
    namespace crypto {
        const ed25519: {
            protobufPackage: "cosmos.crypto.ed25519";
            PubKey: {
                typeUrl: string;
                encode(message: _53.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _53.PubKey;
                fromJSON(object: any): _53.PubKey;
                toJSON(message: _53.PubKey): unknown;
                fromPartial(object: Partial<_53.PubKey>): _53.PubKey;
                fromAmino(object: _53.PubKeyAmino): _53.PubKey;
                toAmino(message: _53.PubKey): _53.PubKeyAmino;
                fromAminoMsg(object: _53.PubKeyAminoMsg): _53.PubKey;
                toAminoMsg(message: _53.PubKey): _53.PubKeyAminoMsg;
                fromProtoMsg(message: _53.PubKeyProtoMsg): _53.PubKey;
                toProto(message: _53.PubKey): Uint8Array;
                toProtoMsg(message: _53.PubKey): _53.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _53.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _53.PrivKey;
                fromJSON(object: any): _53.PrivKey;
                toJSON(message: _53.PrivKey): unknown;
                fromPartial(object: Partial<_53.PrivKey>): _53.PrivKey;
                fromAmino(object: _53.PrivKeyAmino): _53.PrivKey;
                toAmino(message: _53.PrivKey): _53.PrivKeyAmino;
                fromAminoMsg(object: _53.PrivKeyAminoMsg): _53.PrivKey;
                toAminoMsg(message: _53.PrivKey): _53.PrivKeyAminoMsg;
                fromProtoMsg(message: _53.PrivKeyProtoMsg): _53.PrivKey;
                toProto(message: _53.PrivKey): Uint8Array;
                toProtoMsg(message: _53.PrivKey): _53.PrivKeyProtoMsg;
            };
        };
        namespace hd {
            const v1: {
                protobufPackage: "cosmos.crypto.hd.v1";
                BIP44Params: {
                    typeUrl: string;
                    encode(message: _54.BIP44Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _54.BIP44Params;
                    fromJSON(object: any): _54.BIP44Params;
                    toJSON(message: _54.BIP44Params): unknown;
                    fromPartial(object: Partial<_54.BIP44Params>): _54.BIP44Params;
                    fromAmino(object: _54.BIP44ParamsAmino): _54.BIP44Params;
                    toAmino(message: _54.BIP44Params): _54.BIP44ParamsAmino;
                    fromAminoMsg(object: _54.BIP44ParamsAminoMsg): _54.BIP44Params;
                    toAminoMsg(message: _54.BIP44Params): _54.BIP44ParamsAminoMsg;
                    fromProtoMsg(message: _54.BIP44ParamsProtoMsg): _54.BIP44Params;
                    toProto(message: _54.BIP44Params): Uint8Array;
                    toProtoMsg(message: _54.BIP44Params): _54.BIP44ParamsProtoMsg;
                };
            };
        }
        namespace keyring {
            const v1: {
                protobufPackage: "cosmos.crypto.keyring.v1";
                Record: {
                    typeUrl: string;
                    encode(message: _55.Record, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _55.Record;
                    fromJSON(object: any): _55.Record;
                    toJSON(message: _55.Record): unknown;
                    fromPartial(object: Partial<_55.Record>): _55.Record;
                    fromAmino(object: _55.RecordAmino): _55.Record;
                    toAmino(message: _55.Record): _55.RecordAmino;
                    fromAminoMsg(object: _55.RecordAminoMsg): _55.Record;
                    toAminoMsg(message: _55.Record): _55.RecordAminoMsg;
                    fromProtoMsg(message: _55.RecordProtoMsg): _55.Record;
                    toProto(message: _55.Record): Uint8Array;
                    toProtoMsg(message: _55.Record): _55.RecordProtoMsg;
                };
                Record_Local: {
                    typeUrl: string;
                    encode(message: _55.Record_Local, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _55.Record_Local;
                    fromJSON(object: any): _55.Record_Local;
                    toJSON(message: _55.Record_Local): unknown;
                    fromPartial(object: Partial<_55.Record_Local>): _55.Record_Local;
                    fromAmino(object: _55.Record_LocalAmino): _55.Record_Local;
                    toAmino(message: _55.Record_Local): _55.Record_LocalAmino;
                    fromAminoMsg(object: _55.Record_LocalAminoMsg): _55.Record_Local;
                    toAminoMsg(message: _55.Record_Local): _55.Record_LocalAminoMsg;
                    fromProtoMsg(message: _55.Record_LocalProtoMsg): _55.Record_Local;
                    toProto(message: _55.Record_Local): Uint8Array;
                    toProtoMsg(message: _55.Record_Local): _55.Record_LocalProtoMsg;
                };
                Record_Ledger: {
                    typeUrl: string;
                    encode(message: _55.Record_Ledger, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _55.Record_Ledger;
                    fromJSON(object: any): _55.Record_Ledger;
                    toJSON(message: _55.Record_Ledger): unknown;
                    fromPartial(object: Partial<_55.Record_Ledger>): _55.Record_Ledger;
                    fromAmino(object: _55.Record_LedgerAmino): _55.Record_Ledger;
                    toAmino(message: _55.Record_Ledger): _55.Record_LedgerAmino;
                    fromAminoMsg(object: _55.Record_LedgerAminoMsg): _55.Record_Ledger;
                    toAminoMsg(message: _55.Record_Ledger): _55.Record_LedgerAminoMsg;
                    fromProtoMsg(message: _55.Record_LedgerProtoMsg): _55.Record_Ledger;
                    toProto(message: _55.Record_Ledger): Uint8Array;
                    toProtoMsg(message: _55.Record_Ledger): _55.Record_LedgerProtoMsg;
                };
                Record_Multi: {
                    typeUrl: string;
                    encode(_: _55.Record_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _55.Record_Multi;
                    fromJSON(_: any): _55.Record_Multi;
                    toJSON(_: _55.Record_Multi): unknown;
                    fromPartial(_: Partial<_55.Record_Multi>): _55.Record_Multi;
                    fromAmino(_: _55.Record_MultiAmino): _55.Record_Multi;
                    toAmino(_: _55.Record_Multi): _55.Record_MultiAmino;
                    fromAminoMsg(object: _55.Record_MultiAminoMsg): _55.Record_Multi;
                    toAminoMsg(message: _55.Record_Multi): _55.Record_MultiAminoMsg;
                    fromProtoMsg(message: _55.Record_MultiProtoMsg): _55.Record_Multi;
                    toProto(message: _55.Record_Multi): Uint8Array;
                    toProtoMsg(message: _55.Record_Multi): _55.Record_MultiProtoMsg;
                };
                Record_Offline: {
                    typeUrl: string;
                    encode(_: _55.Record_Offline, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _55.Record_Offline;
                    fromJSON(_: any): _55.Record_Offline;
                    toJSON(_: _55.Record_Offline): unknown;
                    fromPartial(_: Partial<_55.Record_Offline>): _55.Record_Offline;
                    fromAmino(_: _55.Record_OfflineAmino): _55.Record_Offline;
                    toAmino(_: _55.Record_Offline): _55.Record_OfflineAmino;
                    fromAminoMsg(object: _55.Record_OfflineAminoMsg): _55.Record_Offline;
                    toAminoMsg(message: _55.Record_Offline): _55.Record_OfflineAminoMsg;
                    fromProtoMsg(message: _55.Record_OfflineProtoMsg): _55.Record_Offline;
                    toProto(message: _55.Record_Offline): Uint8Array;
                    toProtoMsg(message: _55.Record_Offline): _55.Record_OfflineProtoMsg;
                };
            };
        }
        const multisig: {
            protobufPackage: "cosmos.crypto.multisig";
            LegacyAminoPubKey: {
                typeUrl: string;
                encode(message: _56.LegacyAminoPubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _56.LegacyAminoPubKey;
                fromJSON(object: any): _56.LegacyAminoPubKey;
                toJSON(message: _56.LegacyAminoPubKey): unknown;
                fromPartial(object: Partial<_56.LegacyAminoPubKey>): _56.LegacyAminoPubKey;
                fromAmino(object: _56.LegacyAminoPubKeyAmino): _56.LegacyAminoPubKey;
                toAmino(message: _56.LegacyAminoPubKey): _56.LegacyAminoPubKeyAmino;
                fromAminoMsg(object: _56.LegacyAminoPubKeyAminoMsg): _56.LegacyAminoPubKey;
                toAminoMsg(message: _56.LegacyAminoPubKey): _56.LegacyAminoPubKeyAminoMsg;
                fromProtoMsg(message: _56.LegacyAminoPubKeyProtoMsg): _56.LegacyAminoPubKey;
                toProto(message: _56.LegacyAminoPubKey): Uint8Array;
                toProtoMsg(message: _56.LegacyAminoPubKey): _56.LegacyAminoPubKeyProtoMsg;
            };
        };
        const secp256k1: {
            protobufPackage: "cosmos.crypto.secp256k1";
            PubKey: {
                typeUrl: string;
                encode(message: _57.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _57.PubKey;
                fromJSON(object: any): _57.PubKey;
                toJSON(message: _57.PubKey): unknown;
                fromPartial(object: Partial<_57.PubKey>): _57.PubKey;
                fromAmino(object: _57.PubKeyAmino): _57.PubKey;
                toAmino(message: _57.PubKey): _57.PubKeyAmino;
                fromAminoMsg(object: _57.PubKeyAminoMsg): _57.PubKey;
                toAminoMsg(message: _57.PubKey): _57.PubKeyAminoMsg;
                fromProtoMsg(message: _57.PubKeyProtoMsg): _57.PubKey;
                toProto(message: _57.PubKey): Uint8Array;
                toProtoMsg(message: _57.PubKey): _57.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _57.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _57.PrivKey;
                fromJSON(object: any): _57.PrivKey;
                toJSON(message: _57.PrivKey): unknown;
                fromPartial(object: Partial<_57.PrivKey>): _57.PrivKey;
                fromAmino(object: _57.PrivKeyAmino): _57.PrivKey;
                toAmino(message: _57.PrivKey): _57.PrivKeyAmino;
                fromAminoMsg(object: _57.PrivKeyAminoMsg): _57.PrivKey;
                toAminoMsg(message: _57.PrivKey): _57.PrivKeyAminoMsg;
                fromProtoMsg(message: _57.PrivKeyProtoMsg): _57.PrivKey;
                toProto(message: _57.PrivKey): Uint8Array;
                toProtoMsg(message: _57.PrivKey): _57.PrivKeyProtoMsg;
            };
        };
        const secp256r1: {
            protobufPackage: "cosmos.crypto.secp256r1";
            PubKey: {
                typeUrl: string;
                encode(message: _58.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _58.PubKey;
                fromJSON(object: any): _58.PubKey;
                toJSON(message: _58.PubKey): unknown;
                fromPartial(object: Partial<_58.PubKey>): _58.PubKey;
                fromAmino(object: _58.PubKeyAmino): _58.PubKey;
                toAmino(message: _58.PubKey): _58.PubKeyAmino;
                fromAminoMsg(object: _58.PubKeyAminoMsg): _58.PubKey;
                toAminoMsg(message: _58.PubKey): _58.PubKeyAminoMsg;
                fromProtoMsg(message: _58.PubKeyProtoMsg): _58.PubKey;
                toProto(message: _58.PubKey): Uint8Array;
                toProtoMsg(message: _58.PubKey): _58.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _58.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _58.PrivKey;
                fromJSON(object: any): _58.PrivKey;
                toJSON(message: _58.PrivKey): unknown;
                fromPartial(object: Partial<_58.PrivKey>): _58.PrivKey;
                fromAmino(object: _58.PrivKeyAmino): _58.PrivKey;
                toAmino(message: _58.PrivKey): _58.PrivKeyAmino;
                fromAminoMsg(object: _58.PrivKeyAminoMsg): _58.PrivKey;
                toAminoMsg(message: _58.PrivKey): _58.PrivKeyAminoMsg;
                fromProtoMsg(message: _58.PrivKeyProtoMsg): _58.PrivKey;
                toProto(message: _58.PrivKey): Uint8Array;
                toProtoMsg(message: _58.PrivKey): _58.PrivKeyProtoMsg;
            };
        };
    }
    namespace distribution {
        namespace module {
            const v1: {
                protobufPackage: "cosmos.distribution.module.v1";
                Module: {
                    typeUrl: string;
                    encode(message: _59.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _59.Module;
                    fromJSON(object: any): _59.Module;
                    toJSON(message: _59.Module): unknown;
                    fromPartial(object: Partial<_59.Module>): _59.Module;
                    fromAmino(object: _59.ModuleAmino): _59.Module;
                    toAmino(message: _59.Module): _59.ModuleAmino;
                    fromAminoMsg(object: _59.ModuleAminoMsg): _59.Module;
                    toAminoMsg(message: _59.Module): _59.ModuleAminoMsg;
                    fromProtoMsg(message: _59.ModuleProtoMsg): _59.Module;
                    toProto(message: _59.Module): Uint8Array;
                    toProtoMsg(message: _59.Module): _59.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            Msg: typeof _266.Msg;
            Query: typeof _249.Query;
            QueryClientImpl: typeof _249.QueryClientImpl;
            LCDQueryClient: typeof _231.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _63.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _63.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _63.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _63.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _63.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    communityPoolSpend(value: _63.MsgCommunityPoolSpend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    depositValidatorRewardsPool(value: _63.MsgDepositValidatorRewardsPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _63.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _63.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _63.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _63.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _63.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _63.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _63.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _63.MsgFundCommunityPool;
                    };
                    updateParams(value: _63.MsgUpdateParams): {
                        typeUrl: string;
                        value: _63.MsgUpdateParams;
                    };
                    communityPoolSpend(value: _63.MsgCommunityPoolSpend): {
                        typeUrl: string;
                        value: _63.MsgCommunityPoolSpend;
                    };
                    depositValidatorRewardsPool(value: _63.MsgDepositValidatorRewardsPool): {
                        typeUrl: string;
                        value: _63.MsgDepositValidatorRewardsPool;
                    };
                };
                toJSON: {
                    setWithdrawAddress(value: _63.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdrawDelegatorReward(value: _63.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdrawValidatorCommission(value: _63.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: unknown;
                    };
                    fundCommunityPool(value: _63.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateParams(value: _63.MsgUpdateParams): {
                        typeUrl: string;
                        value: unknown;
                    };
                    communityPoolSpend(value: _63.MsgCommunityPoolSpend): {
                        typeUrl: string;
                        value: unknown;
                    };
                    depositValidatorRewardsPool(value: _63.MsgDepositValidatorRewardsPool): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _63.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _63.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _63.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _63.MsgFundCommunityPool;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _63.MsgUpdateParams;
                    };
                    communityPoolSpend(value: any): {
                        typeUrl: string;
                        value: _63.MsgCommunityPoolSpend;
                    };
                    depositValidatorRewardsPool(value: any): {
                        typeUrl: string;
                        value: _63.MsgDepositValidatorRewardsPool;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _63.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _63.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _63.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _63.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _63.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _63.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _63.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _63.MsgFundCommunityPool;
                    };
                    updateParams(value: _63.MsgUpdateParams): {
                        typeUrl: string;
                        value: _63.MsgUpdateParams;
                    };
                    communityPoolSpend(value: _63.MsgCommunityPoolSpend): {
                        typeUrl: string;
                        value: _63.MsgCommunityPoolSpend;
                    };
                    depositValidatorRewardsPool(value: _63.MsgDepositValidatorRewardsPool): {
                        typeUrl: string;
                        value: _63.MsgDepositValidatorRewardsPool;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: (message: _63.MsgSetWithdrawAddress) => _63.MsgSetWithdrawAddressAmino;
                    fromAmino: (object: _63.MsgSetWithdrawAddressAmino) => _63.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: (message: _63.MsgWithdrawDelegatorReward) => _63.MsgWithdrawDelegatorRewardAmino;
                    fromAmino: (object: _63.MsgWithdrawDelegatorRewardAmino) => _63.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: (message: _63.MsgWithdrawValidatorCommission) => _63.MsgWithdrawValidatorCommissionAmino;
                    fromAmino: (object: _63.MsgWithdrawValidatorCommissionAmino) => _63.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: (message: _63.MsgFundCommunityPool) => _63.MsgFundCommunityPoolAmino;
                    fromAmino: (object: _63.MsgFundCommunityPoolAmino) => _63.MsgFundCommunityPool;
                };
                "/cosmos.distribution.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _63.MsgUpdateParams) => _63.MsgUpdateParamsAmino;
                    fromAmino: (object: _63.MsgUpdateParamsAmino) => _63.MsgUpdateParams;
                };
                "/cosmos.distribution.v1beta1.MsgCommunityPoolSpend": {
                    aminoType: string;
                    toAmino: (message: _63.MsgCommunityPoolSpend) => _63.MsgCommunityPoolSpendAmino;
                    fromAmino: (object: _63.MsgCommunityPoolSpendAmino) => _63.MsgCommunityPoolSpend;
                };
                "/cosmos.distribution.v1beta1.MsgDepositValidatorRewardsPool": {
                    aminoType: string;
                    toAmino: (message: _63.MsgDepositValidatorRewardsPool) => _63.MsgDepositValidatorRewardsPoolAmino;
                    fromAmino: (object: _63.MsgDepositValidatorRewardsPoolAmino) => _63.MsgDepositValidatorRewardsPool;
                };
            };
            protobufPackage: "cosmos.distribution.v1beta1";
            MsgSetWithdrawAddress: {
                typeUrl: string;
                encode(message: _63.MsgSetWithdrawAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _63.MsgSetWithdrawAddress;
                fromJSON(object: any): _63.MsgSetWithdrawAddress;
                toJSON(message: _63.MsgSetWithdrawAddress): unknown;
                fromPartial(object: Partial<_63.MsgSetWithdrawAddress>): _63.MsgSetWithdrawAddress;
                fromAmino(object: _63.MsgSetWithdrawAddressAmino): _63.MsgSetWithdrawAddress;
                toAmino(message: _63.MsgSetWithdrawAddress): _63.MsgSetWithdrawAddressAmino;
                fromAminoMsg(object: _63.MsgSetWithdrawAddressAminoMsg): _63.MsgSetWithdrawAddress;
                toAminoMsg(message: _63.MsgSetWithdrawAddress): _63.MsgSetWithdrawAddressAminoMsg;
                fromProtoMsg(message: _63.MsgSetWithdrawAddressProtoMsg): _63.MsgSetWithdrawAddress;
                toProto(message: _63.MsgSetWithdrawAddress): Uint8Array;
                toProtoMsg(message: _63.MsgSetWithdrawAddress): _63.MsgSetWithdrawAddressProtoMsg;
            };
            MsgSetWithdrawAddressResponse: {
                typeUrl: string;
                encode(_: _63.MsgSetWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _63.MsgSetWithdrawAddressResponse;
                fromJSON(_: any): _63.MsgSetWithdrawAddressResponse;
                toJSON(_: _63.MsgSetWithdrawAddressResponse): unknown;
                fromPartial(_: Partial<_63.MsgSetWithdrawAddressResponse>): _63.MsgSetWithdrawAddressResponse;
                fromAmino(_: _63.MsgSetWithdrawAddressResponseAmino): _63.MsgSetWithdrawAddressResponse;
                toAmino(_: _63.MsgSetWithdrawAddressResponse): _63.MsgSetWithdrawAddressResponseAmino;
                fromAminoMsg(object: _63.MsgSetWithdrawAddressResponseAminoMsg): _63.MsgSetWithdrawAddressResponse;
                toAminoMsg(message: _63.MsgSetWithdrawAddressResponse): _63.MsgSetWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _63.MsgSetWithdrawAddressResponseProtoMsg): _63.MsgSetWithdrawAddressResponse;
                toProto(message: _63.MsgSetWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _63.MsgSetWithdrawAddressResponse): _63.MsgSetWithdrawAddressResponseProtoMsg;
            };
            MsgWithdrawDelegatorReward: {
                typeUrl: string;
                encode(message: _63.MsgWithdrawDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _63.MsgWithdrawDelegatorReward;
                fromJSON(object: any): _63.MsgWithdrawDelegatorReward;
                toJSON(message: _63.MsgWithdrawDelegatorReward): unknown;
                fromPartial(object: Partial<_63.MsgWithdrawDelegatorReward>): _63.MsgWithdrawDelegatorReward;
                fromAmino(object: _63.MsgWithdrawDelegatorRewardAmino): _63.MsgWithdrawDelegatorReward;
                toAmino(message: _63.MsgWithdrawDelegatorReward): _63.MsgWithdrawDelegatorRewardAmino;
                fromAminoMsg(object: _63.MsgWithdrawDelegatorRewardAminoMsg): _63.MsgWithdrawDelegatorReward;
                toAminoMsg(message: _63.MsgWithdrawDelegatorReward): _63.MsgWithdrawDelegatorRewardAminoMsg;
                fromProtoMsg(message: _63.MsgWithdrawDelegatorRewardProtoMsg): _63.MsgWithdrawDelegatorReward;
                toProto(message: _63.MsgWithdrawDelegatorReward): Uint8Array;
                toProtoMsg(message: _63.MsgWithdrawDelegatorReward): _63.MsgWithdrawDelegatorRewardProtoMsg;
            };
            MsgWithdrawDelegatorRewardResponse: {
                typeUrl: string;
                encode(message: _63.MsgWithdrawDelegatorRewardResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _63.MsgWithdrawDelegatorRewardResponse;
                fromJSON(object: any): _63.MsgWithdrawDelegatorRewardResponse;
                toJSON(message: _63.MsgWithdrawDelegatorRewardResponse): unknown;
                fromPartial(object: Partial<_63.MsgWithdrawDelegatorRewardResponse>): _63.MsgWithdrawDelegatorRewardResponse;
                fromAmino(object: _63.MsgWithdrawDelegatorRewardResponseAmino): _63.MsgWithdrawDelegatorRewardResponse;
                toAmino(message: _63.MsgWithdrawDelegatorRewardResponse): _63.MsgWithdrawDelegatorRewardResponseAmino;
                fromAminoMsg(object: _63.MsgWithdrawDelegatorRewardResponseAminoMsg): _63.MsgWithdrawDelegatorRewardResponse;
                toAminoMsg(message: _63.MsgWithdrawDelegatorRewardResponse): _63.MsgWithdrawDelegatorRewardResponseAminoMsg;
                fromProtoMsg(message: _63.MsgWithdrawDelegatorRewardResponseProtoMsg): _63.MsgWithdrawDelegatorRewardResponse;
                toProto(message: _63.MsgWithdrawDelegatorRewardResponse): Uint8Array;
                toProtoMsg(message: _63.MsgWithdrawDelegatorRewardResponse): _63.MsgWithdrawDelegatorRewardResponseProtoMsg;
            };
            MsgWithdrawValidatorCommission: {
                typeUrl: string;
                encode(message: _63.MsgWithdrawValidatorCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _63.MsgWithdrawValidatorCommission;
                fromJSON(object: any): _63.MsgWithdrawValidatorCommission;
                toJSON(message: _63.MsgWithdrawValidatorCommission): unknown;
                fromPartial(object: Partial<_63.MsgWithdrawValidatorCommission>): _63.MsgWithdrawValidatorCommission;
                fromAmino(object: _63.MsgWithdrawValidatorCommissionAmino): _63.MsgWithdrawValidatorCommission;
                toAmino(message: _63.MsgWithdrawValidatorCommission): _63.MsgWithdrawValidatorCommissionAmino;
                fromAminoMsg(object: _63.MsgWithdrawValidatorCommissionAminoMsg): _63.MsgWithdrawValidatorCommission;
                toAminoMsg(message: _63.MsgWithdrawValidatorCommission): _63.MsgWithdrawValidatorCommissionAminoMsg;
                fromProtoMsg(message: _63.MsgWithdrawValidatorCommissionProtoMsg): _63.MsgWithdrawValidatorCommission;
                toProto(message: _63.MsgWithdrawValidatorCommission): Uint8Array;
                toProtoMsg(message: _63.MsgWithdrawValidatorCommission): _63.MsgWithdrawValidatorCommissionProtoMsg;
            };
            MsgWithdrawValidatorCommissionResponse: {
                typeUrl: string;
                encode(message: _63.MsgWithdrawValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _63.MsgWithdrawValidatorCommissionResponse;
                fromJSON(object: any): _63.MsgWithdrawValidatorCommissionResponse;
                toJSON(message: _63.MsgWithdrawValidatorCommissionResponse): unknown;
                fromPartial(object: Partial<_63.MsgWithdrawValidatorCommissionResponse>): _63.MsgWithdrawValidatorCommissionResponse;
                fromAmino(object: _63.MsgWithdrawValidatorCommissionResponseAmino): _63.MsgWithdrawValidatorCommissionResponse;
                toAmino(message: _63.MsgWithdrawValidatorCommissionResponse): _63.MsgWithdrawValidatorCommissionResponseAmino;
                fromAminoMsg(object: _63.MsgWithdrawValidatorCommissionResponseAminoMsg): _63.MsgWithdrawValidatorCommissionResponse;
                toAminoMsg(message: _63.MsgWithdrawValidatorCommissionResponse): _63.MsgWithdrawValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _63.MsgWithdrawValidatorCommissionResponseProtoMsg): _63.MsgWithdrawValidatorCommissionResponse;
                toProto(message: _63.MsgWithdrawValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _63.MsgWithdrawValidatorCommissionResponse): _63.MsgWithdrawValidatorCommissionResponseProtoMsg;
            };
            MsgFundCommunityPool: {
                typeUrl: string;
                encode(message: _63.MsgFundCommunityPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _63.MsgFundCommunityPool;
                fromJSON(object: any): _63.MsgFundCommunityPool;
                toJSON(message: _63.MsgFundCommunityPool): unknown;
                fromPartial(object: Partial<_63.MsgFundCommunityPool>): _63.MsgFundCommunityPool;
                fromAmino(object: _63.MsgFundCommunityPoolAmino): _63.MsgFundCommunityPool;
                toAmino(message: _63.MsgFundCommunityPool): _63.MsgFundCommunityPoolAmino;
                fromAminoMsg(object: _63.MsgFundCommunityPoolAminoMsg): _63.MsgFundCommunityPool;
                toAminoMsg(message: _63.MsgFundCommunityPool): _63.MsgFundCommunityPoolAminoMsg;
                fromProtoMsg(message: _63.MsgFundCommunityPoolProtoMsg): _63.MsgFundCommunityPool;
                toProto(message: _63.MsgFundCommunityPool): Uint8Array;
                toProtoMsg(message: _63.MsgFundCommunityPool): _63.MsgFundCommunityPoolProtoMsg;
            };
            MsgFundCommunityPoolResponse: {
                typeUrl: string;
                encode(_: _63.MsgFundCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _63.MsgFundCommunityPoolResponse;
                fromJSON(_: any): _63.MsgFundCommunityPoolResponse;
                toJSON(_: _63.MsgFundCommunityPoolResponse): unknown;
                fromPartial(_: Partial<_63.MsgFundCommunityPoolResponse>): _63.MsgFundCommunityPoolResponse;
                fromAmino(_: _63.MsgFundCommunityPoolResponseAmino): _63.MsgFundCommunityPoolResponse;
                toAmino(_: _63.MsgFundCommunityPoolResponse): _63.MsgFundCommunityPoolResponseAmino;
                fromAminoMsg(object: _63.MsgFundCommunityPoolResponseAminoMsg): _63.MsgFundCommunityPoolResponse;
                toAminoMsg(message: _63.MsgFundCommunityPoolResponse): _63.MsgFundCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _63.MsgFundCommunityPoolResponseProtoMsg): _63.MsgFundCommunityPoolResponse;
                toProto(message: _63.MsgFundCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _63.MsgFundCommunityPoolResponse): _63.MsgFundCommunityPoolResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _63.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _63.MsgUpdateParams;
                fromJSON(object: any): _63.MsgUpdateParams;
                toJSON(message: _63.MsgUpdateParams): unknown;
                fromPartial(object: Partial<_63.MsgUpdateParams>): _63.MsgUpdateParams;
                fromAmino(object: _63.MsgUpdateParamsAmino): _63.MsgUpdateParams;
                toAmino(message: _63.MsgUpdateParams): _63.MsgUpdateParamsAmino;
                fromAminoMsg(object: _63.MsgUpdateParamsAminoMsg): _63.MsgUpdateParams;
                toAminoMsg(message: _63.MsgUpdateParams): _63.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _63.MsgUpdateParamsProtoMsg): _63.MsgUpdateParams;
                toProto(message: _63.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _63.MsgUpdateParams): _63.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _63.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _63.MsgUpdateParamsResponse;
                fromJSON(_: any): _63.MsgUpdateParamsResponse;
                toJSON(_: _63.MsgUpdateParamsResponse): unknown;
                fromPartial(_: Partial<_63.MsgUpdateParamsResponse>): _63.MsgUpdateParamsResponse;
                fromAmino(_: _63.MsgUpdateParamsResponseAmino): _63.MsgUpdateParamsResponse;
                toAmino(_: _63.MsgUpdateParamsResponse): _63.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _63.MsgUpdateParamsResponseAminoMsg): _63.MsgUpdateParamsResponse;
                toAminoMsg(message: _63.MsgUpdateParamsResponse): _63.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _63.MsgUpdateParamsResponseProtoMsg): _63.MsgUpdateParamsResponse;
                toProto(message: _63.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _63.MsgUpdateParamsResponse): _63.MsgUpdateParamsResponseProtoMsg;
            };
            MsgCommunityPoolSpend: {
                typeUrl: string;
                encode(message: _63.MsgCommunityPoolSpend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _63.MsgCommunityPoolSpend;
                fromJSON(object: any): _63.MsgCommunityPoolSpend;
                toJSON(message: _63.MsgCommunityPoolSpend): unknown;
                fromPartial(object: Partial<_63.MsgCommunityPoolSpend>): _63.MsgCommunityPoolSpend;
                fromAmino(object: _63.MsgCommunityPoolSpendAmino): _63.MsgCommunityPoolSpend;
                toAmino(message: _63.MsgCommunityPoolSpend): _63.MsgCommunityPoolSpendAmino;
                fromAminoMsg(object: _63.MsgCommunityPoolSpendAminoMsg): _63.MsgCommunityPoolSpend;
                toAminoMsg(message: _63.MsgCommunityPoolSpend): _63.MsgCommunityPoolSpendAminoMsg;
                fromProtoMsg(message: _63.MsgCommunityPoolSpendProtoMsg): _63.MsgCommunityPoolSpend;
                toProto(message: _63.MsgCommunityPoolSpend): Uint8Array;
                toProtoMsg(message: _63.MsgCommunityPoolSpend): _63.MsgCommunityPoolSpendProtoMsg;
            };
            MsgCommunityPoolSpendResponse: {
                typeUrl: string;
                encode(_: _63.MsgCommunityPoolSpendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _63.MsgCommunityPoolSpendResponse;
                fromJSON(_: any): _63.MsgCommunityPoolSpendResponse;
                toJSON(_: _63.MsgCommunityPoolSpendResponse): unknown;
                fromPartial(_: Partial<_63.MsgCommunityPoolSpendResponse>): _63.MsgCommunityPoolSpendResponse;
                fromAmino(_: _63.MsgCommunityPoolSpendResponseAmino): _63.MsgCommunityPoolSpendResponse;
                toAmino(_: _63.MsgCommunityPoolSpendResponse): _63.MsgCommunityPoolSpendResponseAmino;
                fromAminoMsg(object: _63.MsgCommunityPoolSpendResponseAminoMsg): _63.MsgCommunityPoolSpendResponse;
                toAminoMsg(message: _63.MsgCommunityPoolSpendResponse): _63.MsgCommunityPoolSpendResponseAminoMsg;
                fromProtoMsg(message: _63.MsgCommunityPoolSpendResponseProtoMsg): _63.MsgCommunityPoolSpendResponse;
                toProto(message: _63.MsgCommunityPoolSpendResponse): Uint8Array;
                toProtoMsg(message: _63.MsgCommunityPoolSpendResponse): _63.MsgCommunityPoolSpendResponseProtoMsg;
            };
            MsgDepositValidatorRewardsPool: {
                typeUrl: string;
                encode(message: _63.MsgDepositValidatorRewardsPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _63.MsgDepositValidatorRewardsPool;
                fromJSON(object: any): _63.MsgDepositValidatorRewardsPool;
                toJSON(message: _63.MsgDepositValidatorRewardsPool): unknown;
                fromPartial(object: Partial<_63.MsgDepositValidatorRewardsPool>): _63.MsgDepositValidatorRewardsPool;
                fromAmino(object: _63.MsgDepositValidatorRewardsPoolAmino): _63.MsgDepositValidatorRewardsPool;
                toAmino(message: _63.MsgDepositValidatorRewardsPool): _63.MsgDepositValidatorRewardsPoolAmino;
                fromAminoMsg(object: _63.MsgDepositValidatorRewardsPoolAminoMsg): _63.MsgDepositValidatorRewardsPool;
                toAminoMsg(message: _63.MsgDepositValidatorRewardsPool): _63.MsgDepositValidatorRewardsPoolAminoMsg;
                fromProtoMsg(message: _63.MsgDepositValidatorRewardsPoolProtoMsg): _63.MsgDepositValidatorRewardsPool;
                toProto(message: _63.MsgDepositValidatorRewardsPool): Uint8Array;
                toProtoMsg(message: _63.MsgDepositValidatorRewardsPool): _63.MsgDepositValidatorRewardsPoolProtoMsg;
            };
            MsgDepositValidatorRewardsPoolResponse: {
                typeUrl: string;
                encode(_: _63.MsgDepositValidatorRewardsPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _63.MsgDepositValidatorRewardsPoolResponse;
                fromJSON(_: any): _63.MsgDepositValidatorRewardsPoolResponse;
                toJSON(_: _63.MsgDepositValidatorRewardsPoolResponse): unknown;
                fromPartial(_: Partial<_63.MsgDepositValidatorRewardsPoolResponse>): _63.MsgDepositValidatorRewardsPoolResponse;
                fromAmino(_: _63.MsgDepositValidatorRewardsPoolResponseAmino): _63.MsgDepositValidatorRewardsPoolResponse;
                toAmino(_: _63.MsgDepositValidatorRewardsPoolResponse): _63.MsgDepositValidatorRewardsPoolResponseAmino;
                fromAminoMsg(object: _63.MsgDepositValidatorRewardsPoolResponseAminoMsg): _63.MsgDepositValidatorRewardsPoolResponse;
                toAminoMsg(message: _63.MsgDepositValidatorRewardsPoolResponse): _63.MsgDepositValidatorRewardsPoolResponseAminoMsg;
                fromProtoMsg(message: _63.MsgDepositValidatorRewardsPoolResponseProtoMsg): _63.MsgDepositValidatorRewardsPoolResponse;
                toProto(message: _63.MsgDepositValidatorRewardsPoolResponse): Uint8Array;
                toProtoMsg(message: _63.MsgDepositValidatorRewardsPoolResponse): _63.MsgDepositValidatorRewardsPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _62.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _62.QueryParamsRequest;
                fromJSON(_: any): _62.QueryParamsRequest;
                toJSON(_: _62.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_62.QueryParamsRequest>): _62.QueryParamsRequest;
                fromAmino(_: _62.QueryParamsRequestAmino): _62.QueryParamsRequest;
                toAmino(_: _62.QueryParamsRequest): _62.QueryParamsRequestAmino;
                fromAminoMsg(object: _62.QueryParamsRequestAminoMsg): _62.QueryParamsRequest;
                toAminoMsg(message: _62.QueryParamsRequest): _62.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _62.QueryParamsRequestProtoMsg): _62.QueryParamsRequest;
                toProto(message: _62.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _62.QueryParamsRequest): _62.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _62.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _62.QueryParamsResponse;
                fromJSON(object: any): _62.QueryParamsResponse;
                toJSON(message: _62.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_62.QueryParamsResponse>): _62.QueryParamsResponse;
                fromAmino(object: _62.QueryParamsResponseAmino): _62.QueryParamsResponse;
                toAmino(message: _62.QueryParamsResponse): _62.QueryParamsResponseAmino;
                fromAminoMsg(object: _62.QueryParamsResponseAminoMsg): _62.QueryParamsResponse;
                toAminoMsg(message: _62.QueryParamsResponse): _62.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _62.QueryParamsResponseProtoMsg): _62.QueryParamsResponse;
                toProto(message: _62.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _62.QueryParamsResponse): _62.QueryParamsResponseProtoMsg;
            };
            QueryValidatorDistributionInfoRequest: {
                typeUrl: string;
                encode(message: _62.QueryValidatorDistributionInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _62.QueryValidatorDistributionInfoRequest;
                fromJSON(object: any): _62.QueryValidatorDistributionInfoRequest;
                toJSON(message: _62.QueryValidatorDistributionInfoRequest): unknown;
                fromPartial(object: Partial<_62.QueryValidatorDistributionInfoRequest>): _62.QueryValidatorDistributionInfoRequest;
                fromAmino(object: _62.QueryValidatorDistributionInfoRequestAmino): _62.QueryValidatorDistributionInfoRequest;
                toAmino(message: _62.QueryValidatorDistributionInfoRequest): _62.QueryValidatorDistributionInfoRequestAmino;
                fromAminoMsg(object: _62.QueryValidatorDistributionInfoRequestAminoMsg): _62.QueryValidatorDistributionInfoRequest;
                toAminoMsg(message: _62.QueryValidatorDistributionInfoRequest): _62.QueryValidatorDistributionInfoRequestAminoMsg;
                fromProtoMsg(message: _62.QueryValidatorDistributionInfoRequestProtoMsg): _62.QueryValidatorDistributionInfoRequest;
                toProto(message: _62.QueryValidatorDistributionInfoRequest): Uint8Array;
                toProtoMsg(message: _62.QueryValidatorDistributionInfoRequest): _62.QueryValidatorDistributionInfoRequestProtoMsg;
            };
            QueryValidatorDistributionInfoResponse: {
                typeUrl: string;
                encode(message: _62.QueryValidatorDistributionInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _62.QueryValidatorDistributionInfoResponse;
                fromJSON(object: any): _62.QueryValidatorDistributionInfoResponse;
                toJSON(message: _62.QueryValidatorDistributionInfoResponse): unknown;
                fromPartial(object: Partial<_62.QueryValidatorDistributionInfoResponse>): _62.QueryValidatorDistributionInfoResponse;
                fromAmino(object: _62.QueryValidatorDistributionInfoResponseAmino): _62.QueryValidatorDistributionInfoResponse;
                toAmino(message: _62.QueryValidatorDistributionInfoResponse): _62.QueryValidatorDistributionInfoResponseAmino;
                fromAminoMsg(object: _62.QueryValidatorDistributionInfoResponseAminoMsg): _62.QueryValidatorDistributionInfoResponse;
                toAminoMsg(message: _62.QueryValidatorDistributionInfoResponse): _62.QueryValidatorDistributionInfoResponseAminoMsg;
                fromProtoMsg(message: _62.QueryValidatorDistributionInfoResponseProtoMsg): _62.QueryValidatorDistributionInfoResponse;
                toProto(message: _62.QueryValidatorDistributionInfoResponse): Uint8Array;
                toProtoMsg(message: _62.QueryValidatorDistributionInfoResponse): _62.QueryValidatorDistributionInfoResponseProtoMsg;
            };
            QueryValidatorOutstandingRewardsRequest: {
                typeUrl: string;
                encode(message: _62.QueryValidatorOutstandingRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _62.QueryValidatorOutstandingRewardsRequest;
                fromJSON(object: any): _62.QueryValidatorOutstandingRewardsRequest;
                toJSON(message: _62.QueryValidatorOutstandingRewardsRequest): unknown;
                fromPartial(object: Partial<_62.QueryValidatorOutstandingRewardsRequest>): _62.QueryValidatorOutstandingRewardsRequest;
                fromAmino(object: _62.QueryValidatorOutstandingRewardsRequestAmino): _62.QueryValidatorOutstandingRewardsRequest;
                toAmino(message: _62.QueryValidatorOutstandingRewardsRequest): _62.QueryValidatorOutstandingRewardsRequestAmino;
                fromAminoMsg(object: _62.QueryValidatorOutstandingRewardsRequestAminoMsg): _62.QueryValidatorOutstandingRewardsRequest;
                toAminoMsg(message: _62.QueryValidatorOutstandingRewardsRequest): _62.QueryValidatorOutstandingRewardsRequestAminoMsg;
                fromProtoMsg(message: _62.QueryValidatorOutstandingRewardsRequestProtoMsg): _62.QueryValidatorOutstandingRewardsRequest;
                toProto(message: _62.QueryValidatorOutstandingRewardsRequest): Uint8Array;
                toProtoMsg(message: _62.QueryValidatorOutstandingRewardsRequest): _62.QueryValidatorOutstandingRewardsRequestProtoMsg;
            };
            QueryValidatorOutstandingRewardsResponse: {
                typeUrl: string;
                encode(message: _62.QueryValidatorOutstandingRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _62.QueryValidatorOutstandingRewardsResponse;
                fromJSON(object: any): _62.QueryValidatorOutstandingRewardsResponse;
                toJSON(message: _62.QueryValidatorOutstandingRewardsResponse): unknown;
                fromPartial(object: Partial<_62.QueryValidatorOutstandingRewardsResponse>): _62.QueryValidatorOutstandingRewardsResponse;
                fromAmino(object: _62.QueryValidatorOutstandingRewardsResponseAmino): _62.QueryValidatorOutstandingRewardsResponse;
                toAmino(message: _62.QueryValidatorOutstandingRewardsResponse): _62.QueryValidatorOutstandingRewardsResponseAmino;
                fromAminoMsg(object: _62.QueryValidatorOutstandingRewardsResponseAminoMsg): _62.QueryValidatorOutstandingRewardsResponse;
                toAminoMsg(message: _62.QueryValidatorOutstandingRewardsResponse): _62.QueryValidatorOutstandingRewardsResponseAminoMsg;
                fromProtoMsg(message: _62.QueryValidatorOutstandingRewardsResponseProtoMsg): _62.QueryValidatorOutstandingRewardsResponse;
                toProto(message: _62.QueryValidatorOutstandingRewardsResponse): Uint8Array;
                toProtoMsg(message: _62.QueryValidatorOutstandingRewardsResponse): _62.QueryValidatorOutstandingRewardsResponseProtoMsg;
            };
            QueryValidatorCommissionRequest: {
                typeUrl: string;
                encode(message: _62.QueryValidatorCommissionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _62.QueryValidatorCommissionRequest;
                fromJSON(object: any): _62.QueryValidatorCommissionRequest;
                toJSON(message: _62.QueryValidatorCommissionRequest): unknown;
                fromPartial(object: Partial<_62.QueryValidatorCommissionRequest>): _62.QueryValidatorCommissionRequest;
                fromAmino(object: _62.QueryValidatorCommissionRequestAmino): _62.QueryValidatorCommissionRequest;
                toAmino(message: _62.QueryValidatorCommissionRequest): _62.QueryValidatorCommissionRequestAmino;
                fromAminoMsg(object: _62.QueryValidatorCommissionRequestAminoMsg): _62.QueryValidatorCommissionRequest;
                toAminoMsg(message: _62.QueryValidatorCommissionRequest): _62.QueryValidatorCommissionRequestAminoMsg;
                fromProtoMsg(message: _62.QueryValidatorCommissionRequestProtoMsg): _62.QueryValidatorCommissionRequest;
                toProto(message: _62.QueryValidatorCommissionRequest): Uint8Array;
                toProtoMsg(message: _62.QueryValidatorCommissionRequest): _62.QueryValidatorCommissionRequestProtoMsg;
            };
            QueryValidatorCommissionResponse: {
                typeUrl: string;
                encode(message: _62.QueryValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _62.QueryValidatorCommissionResponse;
                fromJSON(object: any): _62.QueryValidatorCommissionResponse;
                toJSON(message: _62.QueryValidatorCommissionResponse): unknown;
                fromPartial(object: Partial<_62.QueryValidatorCommissionResponse>): _62.QueryValidatorCommissionResponse;
                fromAmino(object: _62.QueryValidatorCommissionResponseAmino): _62.QueryValidatorCommissionResponse;
                toAmino(message: _62.QueryValidatorCommissionResponse): _62.QueryValidatorCommissionResponseAmino;
                fromAminoMsg(object: _62.QueryValidatorCommissionResponseAminoMsg): _62.QueryValidatorCommissionResponse;
                toAminoMsg(message: _62.QueryValidatorCommissionResponse): _62.QueryValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _62.QueryValidatorCommissionResponseProtoMsg): _62.QueryValidatorCommissionResponse;
                toProto(message: _62.QueryValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _62.QueryValidatorCommissionResponse): _62.QueryValidatorCommissionResponseProtoMsg;
            };
            QueryValidatorSlashesRequest: {
                typeUrl: string;
                encode(message: _62.QueryValidatorSlashesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _62.QueryValidatorSlashesRequest;
                fromJSON(object: any): _62.QueryValidatorSlashesRequest;
                toJSON(message: _62.QueryValidatorSlashesRequest): unknown;
                fromPartial(object: Partial<_62.QueryValidatorSlashesRequest>): _62.QueryValidatorSlashesRequest;
                fromAmino(object: _62.QueryValidatorSlashesRequestAmino): _62.QueryValidatorSlashesRequest;
                toAmino(message: _62.QueryValidatorSlashesRequest): _62.QueryValidatorSlashesRequestAmino;
                fromAminoMsg(object: _62.QueryValidatorSlashesRequestAminoMsg): _62.QueryValidatorSlashesRequest;
                toAminoMsg(message: _62.QueryValidatorSlashesRequest): _62.QueryValidatorSlashesRequestAminoMsg;
                fromProtoMsg(message: _62.QueryValidatorSlashesRequestProtoMsg): _62.QueryValidatorSlashesRequest;
                toProto(message: _62.QueryValidatorSlashesRequest): Uint8Array;
                toProtoMsg(message: _62.QueryValidatorSlashesRequest): _62.QueryValidatorSlashesRequestProtoMsg;
            };
            QueryValidatorSlashesResponse: {
                typeUrl: string;
                encode(message: _62.QueryValidatorSlashesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _62.QueryValidatorSlashesResponse;
                fromJSON(object: any): _62.QueryValidatorSlashesResponse;
                toJSON(message: _62.QueryValidatorSlashesResponse): unknown;
                fromPartial(object: Partial<_62.QueryValidatorSlashesResponse>): _62.QueryValidatorSlashesResponse;
                fromAmino(object: _62.QueryValidatorSlashesResponseAmino): _62.QueryValidatorSlashesResponse;
                toAmino(message: _62.QueryValidatorSlashesResponse): _62.QueryValidatorSlashesResponseAmino;
                fromAminoMsg(object: _62.QueryValidatorSlashesResponseAminoMsg): _62.QueryValidatorSlashesResponse;
                toAminoMsg(message: _62.QueryValidatorSlashesResponse): _62.QueryValidatorSlashesResponseAminoMsg;
                fromProtoMsg(message: _62.QueryValidatorSlashesResponseProtoMsg): _62.QueryValidatorSlashesResponse;
                toProto(message: _62.QueryValidatorSlashesResponse): Uint8Array;
                toProtoMsg(message: _62.QueryValidatorSlashesResponse): _62.QueryValidatorSlashesResponseProtoMsg;
            };
            QueryDelegationRewardsRequest: {
                typeUrl: string;
                encode(message: _62.QueryDelegationRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _62.QueryDelegationRewardsRequest;
                fromJSON(object: any): _62.QueryDelegationRewardsRequest;
                toJSON(message: _62.QueryDelegationRewardsRequest): unknown;
                fromPartial(object: Partial<_62.QueryDelegationRewardsRequest>): _62.QueryDelegationRewardsRequest;
                fromAmino(object: _62.QueryDelegationRewardsRequestAmino): _62.QueryDelegationRewardsRequest;
                toAmino(message: _62.QueryDelegationRewardsRequest): _62.QueryDelegationRewardsRequestAmino;
                fromAminoMsg(object: _62.QueryDelegationRewardsRequestAminoMsg): _62.QueryDelegationRewardsRequest;
                toAminoMsg(message: _62.QueryDelegationRewardsRequest): _62.QueryDelegationRewardsRequestAminoMsg;
                fromProtoMsg(message: _62.QueryDelegationRewardsRequestProtoMsg): _62.QueryDelegationRewardsRequest;
                toProto(message: _62.QueryDelegationRewardsRequest): Uint8Array;
                toProtoMsg(message: _62.QueryDelegationRewardsRequest): _62.QueryDelegationRewardsRequestProtoMsg;
            };
            QueryDelegationRewardsResponse: {
                typeUrl: string;
                encode(message: _62.QueryDelegationRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _62.QueryDelegationRewardsResponse;
                fromJSON(object: any): _62.QueryDelegationRewardsResponse;
                toJSON(message: _62.QueryDelegationRewardsResponse): unknown;
                fromPartial(object: Partial<_62.QueryDelegationRewardsResponse>): _62.QueryDelegationRewardsResponse;
                fromAmino(object: _62.QueryDelegationRewardsResponseAmino): _62.QueryDelegationRewardsResponse;
                toAmino(message: _62.QueryDelegationRewardsResponse): _62.QueryDelegationRewardsResponseAmino;
                fromAminoMsg(object: _62.QueryDelegationRewardsResponseAminoMsg): _62.QueryDelegationRewardsResponse;
                toAminoMsg(message: _62.QueryDelegationRewardsResponse): _62.QueryDelegationRewardsResponseAminoMsg;
                fromProtoMsg(message: _62.QueryDelegationRewardsResponseProtoMsg): _62.QueryDelegationRewardsResponse;
                toProto(message: _62.QueryDelegationRewardsResponse): Uint8Array;
                toProtoMsg(message: _62.QueryDelegationRewardsResponse): _62.QueryDelegationRewardsResponseProtoMsg;
            };
            QueryDelegationTotalRewardsRequest: {
                typeUrl: string;
                encode(message: _62.QueryDelegationTotalRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _62.QueryDelegationTotalRewardsRequest;
                fromJSON(object: any): _62.QueryDelegationTotalRewardsRequest;
                toJSON(message: _62.QueryDelegationTotalRewardsRequest): unknown;
                fromPartial(object: Partial<_62.QueryDelegationTotalRewardsRequest>): _62.QueryDelegationTotalRewardsRequest;
                fromAmino(object: _62.QueryDelegationTotalRewardsRequestAmino): _62.QueryDelegationTotalRewardsRequest;
                toAmino(message: _62.QueryDelegationTotalRewardsRequest): _62.QueryDelegationTotalRewardsRequestAmino;
                fromAminoMsg(object: _62.QueryDelegationTotalRewardsRequestAminoMsg): _62.QueryDelegationTotalRewardsRequest;
                toAminoMsg(message: _62.QueryDelegationTotalRewardsRequest): _62.QueryDelegationTotalRewardsRequestAminoMsg;
                fromProtoMsg(message: _62.QueryDelegationTotalRewardsRequestProtoMsg): _62.QueryDelegationTotalRewardsRequest;
                toProto(message: _62.QueryDelegationTotalRewardsRequest): Uint8Array;
                toProtoMsg(message: _62.QueryDelegationTotalRewardsRequest): _62.QueryDelegationTotalRewardsRequestProtoMsg;
            };
            QueryDelegationTotalRewardsResponse: {
                typeUrl: string;
                encode(message: _62.QueryDelegationTotalRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _62.QueryDelegationTotalRewardsResponse;
                fromJSON(object: any): _62.QueryDelegationTotalRewardsResponse;
                toJSON(message: _62.QueryDelegationTotalRewardsResponse): unknown;
                fromPartial(object: Partial<_62.QueryDelegationTotalRewardsResponse>): _62.QueryDelegationTotalRewardsResponse;
                fromAmino(object: _62.QueryDelegationTotalRewardsResponseAmino): _62.QueryDelegationTotalRewardsResponse;
                toAmino(message: _62.QueryDelegationTotalRewardsResponse): _62.QueryDelegationTotalRewardsResponseAmino;
                fromAminoMsg(object: _62.QueryDelegationTotalRewardsResponseAminoMsg): _62.QueryDelegationTotalRewardsResponse;
                toAminoMsg(message: _62.QueryDelegationTotalRewardsResponse): _62.QueryDelegationTotalRewardsResponseAminoMsg;
                fromProtoMsg(message: _62.QueryDelegationTotalRewardsResponseProtoMsg): _62.QueryDelegationTotalRewardsResponse;
                toProto(message: _62.QueryDelegationTotalRewardsResponse): Uint8Array;
                toProtoMsg(message: _62.QueryDelegationTotalRewardsResponse): _62.QueryDelegationTotalRewardsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _62.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _62.QueryDelegatorValidatorsRequest;
                fromJSON(object: any): _62.QueryDelegatorValidatorsRequest;
                toJSON(message: _62.QueryDelegatorValidatorsRequest): unknown;
                fromPartial(object: Partial<_62.QueryDelegatorValidatorsRequest>): _62.QueryDelegatorValidatorsRequest;
                fromAmino(object: _62.QueryDelegatorValidatorsRequestAmino): _62.QueryDelegatorValidatorsRequest;
                toAmino(message: _62.QueryDelegatorValidatorsRequest): _62.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _62.QueryDelegatorValidatorsRequestAminoMsg): _62.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _62.QueryDelegatorValidatorsRequest): _62.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _62.QueryDelegatorValidatorsRequestProtoMsg): _62.QueryDelegatorValidatorsRequest;
                toProto(message: _62.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _62.QueryDelegatorValidatorsRequest): _62.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _62.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _62.QueryDelegatorValidatorsResponse;
                fromJSON(object: any): _62.QueryDelegatorValidatorsResponse;
                toJSON(message: _62.QueryDelegatorValidatorsResponse): unknown;
                fromPartial(object: Partial<_62.QueryDelegatorValidatorsResponse>): _62.QueryDelegatorValidatorsResponse;
                fromAmino(object: _62.QueryDelegatorValidatorsResponseAmino): _62.QueryDelegatorValidatorsResponse;
                toAmino(message: _62.QueryDelegatorValidatorsResponse): _62.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _62.QueryDelegatorValidatorsResponseAminoMsg): _62.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _62.QueryDelegatorValidatorsResponse): _62.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _62.QueryDelegatorValidatorsResponseProtoMsg): _62.QueryDelegatorValidatorsResponse;
                toProto(message: _62.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _62.QueryDelegatorValidatorsResponse): _62.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorWithdrawAddressRequest: {
                typeUrl: string;
                encode(message: _62.QueryDelegatorWithdrawAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _62.QueryDelegatorWithdrawAddressRequest;
                fromJSON(object: any): _62.QueryDelegatorWithdrawAddressRequest;
                toJSON(message: _62.QueryDelegatorWithdrawAddressRequest): unknown;
                fromPartial(object: Partial<_62.QueryDelegatorWithdrawAddressRequest>): _62.QueryDelegatorWithdrawAddressRequest;
                fromAmino(object: _62.QueryDelegatorWithdrawAddressRequestAmino): _62.QueryDelegatorWithdrawAddressRequest;
                toAmino(message: _62.QueryDelegatorWithdrawAddressRequest): _62.QueryDelegatorWithdrawAddressRequestAmino;
                fromAminoMsg(object: _62.QueryDelegatorWithdrawAddressRequestAminoMsg): _62.QueryDelegatorWithdrawAddressRequest;
                toAminoMsg(message: _62.QueryDelegatorWithdrawAddressRequest): _62.QueryDelegatorWithdrawAddressRequestAminoMsg;
                fromProtoMsg(message: _62.QueryDelegatorWithdrawAddressRequestProtoMsg): _62.QueryDelegatorWithdrawAddressRequest;
                toProto(message: _62.QueryDelegatorWithdrawAddressRequest): Uint8Array;
                toProtoMsg(message: _62.QueryDelegatorWithdrawAddressRequest): _62.QueryDelegatorWithdrawAddressRequestProtoMsg;
            };
            QueryDelegatorWithdrawAddressResponse: {
                typeUrl: string;
                encode(message: _62.QueryDelegatorWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _62.QueryDelegatorWithdrawAddressResponse;
                fromJSON(object: any): _62.QueryDelegatorWithdrawAddressResponse;
                toJSON(message: _62.QueryDelegatorWithdrawAddressResponse): unknown;
                fromPartial(object: Partial<_62.QueryDelegatorWithdrawAddressResponse>): _62.QueryDelegatorWithdrawAddressResponse;
                fromAmino(object: _62.QueryDelegatorWithdrawAddressResponseAmino): _62.QueryDelegatorWithdrawAddressResponse;
                toAmino(message: _62.QueryDelegatorWithdrawAddressResponse): _62.QueryDelegatorWithdrawAddressResponseAmino;
                fromAminoMsg(object: _62.QueryDelegatorWithdrawAddressResponseAminoMsg): _62.QueryDelegatorWithdrawAddressResponse;
                toAminoMsg(message: _62.QueryDelegatorWithdrawAddressResponse): _62.QueryDelegatorWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _62.QueryDelegatorWithdrawAddressResponseProtoMsg): _62.QueryDelegatorWithdrawAddressResponse;
                toProto(message: _62.QueryDelegatorWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _62.QueryDelegatorWithdrawAddressResponse): _62.QueryDelegatorWithdrawAddressResponseProtoMsg;
            };
            QueryCommunityPoolRequest: {
                typeUrl: string;
                encode(_: _62.QueryCommunityPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _62.QueryCommunityPoolRequest;
                fromJSON(_: any): _62.QueryCommunityPoolRequest;
                toJSON(_: _62.QueryCommunityPoolRequest): unknown;
                fromPartial(_: Partial<_62.QueryCommunityPoolRequest>): _62.QueryCommunityPoolRequest;
                fromAmino(_: _62.QueryCommunityPoolRequestAmino): _62.QueryCommunityPoolRequest;
                toAmino(_: _62.QueryCommunityPoolRequest): _62.QueryCommunityPoolRequestAmino;
                fromAminoMsg(object: _62.QueryCommunityPoolRequestAminoMsg): _62.QueryCommunityPoolRequest;
                toAminoMsg(message: _62.QueryCommunityPoolRequest): _62.QueryCommunityPoolRequestAminoMsg;
                fromProtoMsg(message: _62.QueryCommunityPoolRequestProtoMsg): _62.QueryCommunityPoolRequest;
                toProto(message: _62.QueryCommunityPoolRequest): Uint8Array;
                toProtoMsg(message: _62.QueryCommunityPoolRequest): _62.QueryCommunityPoolRequestProtoMsg;
            };
            QueryCommunityPoolResponse: {
                typeUrl: string;
                encode(message: _62.QueryCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _62.QueryCommunityPoolResponse;
                fromJSON(object: any): _62.QueryCommunityPoolResponse;
                toJSON(message: _62.QueryCommunityPoolResponse): unknown;
                fromPartial(object: Partial<_62.QueryCommunityPoolResponse>): _62.QueryCommunityPoolResponse;
                fromAmino(object: _62.QueryCommunityPoolResponseAmino): _62.QueryCommunityPoolResponse;
                toAmino(message: _62.QueryCommunityPoolResponse): _62.QueryCommunityPoolResponseAmino;
                fromAminoMsg(object: _62.QueryCommunityPoolResponseAminoMsg): _62.QueryCommunityPoolResponse;
                toAminoMsg(message: _62.QueryCommunityPoolResponse): _62.QueryCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _62.QueryCommunityPoolResponseProtoMsg): _62.QueryCommunityPoolResponse;
                toProto(message: _62.QueryCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _62.QueryCommunityPoolResponse): _62.QueryCommunityPoolResponseProtoMsg;
            };
            DelegatorWithdrawInfo: {
                typeUrl: string;
                encode(message: _61.DelegatorWithdrawInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _61.DelegatorWithdrawInfo;
                fromJSON(object: any): _61.DelegatorWithdrawInfo;
                toJSON(message: _61.DelegatorWithdrawInfo): unknown;
                fromPartial(object: Partial<_61.DelegatorWithdrawInfo>): _61.DelegatorWithdrawInfo;
                fromAmino(object: _61.DelegatorWithdrawInfoAmino): _61.DelegatorWithdrawInfo;
                toAmino(message: _61.DelegatorWithdrawInfo): _61.DelegatorWithdrawInfoAmino;
                fromAminoMsg(object: _61.DelegatorWithdrawInfoAminoMsg): _61.DelegatorWithdrawInfo;
                toAminoMsg(message: _61.DelegatorWithdrawInfo): _61.DelegatorWithdrawInfoAminoMsg;
                fromProtoMsg(message: _61.DelegatorWithdrawInfoProtoMsg): _61.DelegatorWithdrawInfo;
                toProto(message: _61.DelegatorWithdrawInfo): Uint8Array;
                toProtoMsg(message: _61.DelegatorWithdrawInfo): _61.DelegatorWithdrawInfoProtoMsg;
            };
            ValidatorOutstandingRewardsRecord: {
                typeUrl: string;
                encode(message: _61.ValidatorOutstandingRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _61.ValidatorOutstandingRewardsRecord;
                fromJSON(object: any): _61.ValidatorOutstandingRewardsRecord;
                toJSON(message: _61.ValidatorOutstandingRewardsRecord): unknown;
                fromPartial(object: Partial<_61.ValidatorOutstandingRewardsRecord>): _61.ValidatorOutstandingRewardsRecord;
                fromAmino(object: _61.ValidatorOutstandingRewardsRecordAmino): _61.ValidatorOutstandingRewardsRecord;
                toAmino(message: _61.ValidatorOutstandingRewardsRecord): _61.ValidatorOutstandingRewardsRecordAmino;
                fromAminoMsg(object: _61.ValidatorOutstandingRewardsRecordAminoMsg): _61.ValidatorOutstandingRewardsRecord;
                toAminoMsg(message: _61.ValidatorOutstandingRewardsRecord): _61.ValidatorOutstandingRewardsRecordAminoMsg;
                fromProtoMsg(message: _61.ValidatorOutstandingRewardsRecordProtoMsg): _61.ValidatorOutstandingRewardsRecord;
                toProto(message: _61.ValidatorOutstandingRewardsRecord): Uint8Array;
                toProtoMsg(message: _61.ValidatorOutstandingRewardsRecord): _61.ValidatorOutstandingRewardsRecordProtoMsg;
            };
            ValidatorAccumulatedCommissionRecord: {
                typeUrl: string;
                encode(message: _61.ValidatorAccumulatedCommissionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _61.ValidatorAccumulatedCommissionRecord;
                fromJSON(object: any): _61.ValidatorAccumulatedCommissionRecord;
                toJSON(message: _61.ValidatorAccumulatedCommissionRecord): unknown;
                fromPartial(object: Partial<_61.ValidatorAccumulatedCommissionRecord>): _61.ValidatorAccumulatedCommissionRecord;
                fromAmino(object: _61.ValidatorAccumulatedCommissionRecordAmino): _61.ValidatorAccumulatedCommissionRecord;
                toAmino(message: _61.ValidatorAccumulatedCommissionRecord): _61.ValidatorAccumulatedCommissionRecordAmino;
                fromAminoMsg(object: _61.ValidatorAccumulatedCommissionRecordAminoMsg): _61.ValidatorAccumulatedCommissionRecord;
                toAminoMsg(message: _61.ValidatorAccumulatedCommissionRecord): _61.ValidatorAccumulatedCommissionRecordAminoMsg;
                fromProtoMsg(message: _61.ValidatorAccumulatedCommissionRecordProtoMsg): _61.ValidatorAccumulatedCommissionRecord;
                toProto(message: _61.ValidatorAccumulatedCommissionRecord): Uint8Array;
                toProtoMsg(message: _61.ValidatorAccumulatedCommissionRecord): _61.ValidatorAccumulatedCommissionRecordProtoMsg;
            };
            ValidatorHistoricalRewardsRecord: {
                typeUrl: string;
                encode(message: _61.ValidatorHistoricalRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _61.ValidatorHistoricalRewardsRecord;
                fromJSON(object: any): _61.ValidatorHistoricalRewardsRecord;
                toJSON(message: _61.ValidatorHistoricalRewardsRecord): unknown;
                fromPartial(object: Partial<_61.ValidatorHistoricalRewardsRecord>): _61.ValidatorHistoricalRewardsRecord;
                fromAmino(object: _61.ValidatorHistoricalRewardsRecordAmino): _61.ValidatorHistoricalRewardsRecord;
                toAmino(message: _61.ValidatorHistoricalRewardsRecord): _61.ValidatorHistoricalRewardsRecordAmino;
                fromAminoMsg(object: _61.ValidatorHistoricalRewardsRecordAminoMsg): _61.ValidatorHistoricalRewardsRecord;
                toAminoMsg(message: _61.ValidatorHistoricalRewardsRecord): _61.ValidatorHistoricalRewardsRecordAminoMsg;
                fromProtoMsg(message: _61.ValidatorHistoricalRewardsRecordProtoMsg): _61.ValidatorHistoricalRewardsRecord;
                toProto(message: _61.ValidatorHistoricalRewardsRecord): Uint8Array;
                toProtoMsg(message: _61.ValidatorHistoricalRewardsRecord): _61.ValidatorHistoricalRewardsRecordProtoMsg;
            };
            ValidatorCurrentRewardsRecord: {
                typeUrl: string;
                encode(message: _61.ValidatorCurrentRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _61.ValidatorCurrentRewardsRecord;
                fromJSON(object: any): _61.ValidatorCurrentRewardsRecord;
                toJSON(message: _61.ValidatorCurrentRewardsRecord): unknown;
                fromPartial(object: Partial<_61.ValidatorCurrentRewardsRecord>): _61.ValidatorCurrentRewardsRecord;
                fromAmino(object: _61.ValidatorCurrentRewardsRecordAmino): _61.ValidatorCurrentRewardsRecord;
                toAmino(message: _61.ValidatorCurrentRewardsRecord): _61.ValidatorCurrentRewardsRecordAmino;
                fromAminoMsg(object: _61.ValidatorCurrentRewardsRecordAminoMsg): _61.ValidatorCurrentRewardsRecord;
                toAminoMsg(message: _61.ValidatorCurrentRewardsRecord): _61.ValidatorCurrentRewardsRecordAminoMsg;
                fromProtoMsg(message: _61.ValidatorCurrentRewardsRecordProtoMsg): _61.ValidatorCurrentRewardsRecord;
                toProto(message: _61.ValidatorCurrentRewardsRecord): Uint8Array;
                toProtoMsg(message: _61.ValidatorCurrentRewardsRecord): _61.ValidatorCurrentRewardsRecordProtoMsg;
            };
            DelegatorStartingInfoRecord: {
                typeUrl: string;
                encode(message: _61.DelegatorStartingInfoRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _61.DelegatorStartingInfoRecord;
                fromJSON(object: any): _61.DelegatorStartingInfoRecord;
                toJSON(message: _61.DelegatorStartingInfoRecord): unknown;
                fromPartial(object: Partial<_61.DelegatorStartingInfoRecord>): _61.DelegatorStartingInfoRecord;
                fromAmino(object: _61.DelegatorStartingInfoRecordAmino): _61.DelegatorStartingInfoRecord;
                toAmino(message: _61.DelegatorStartingInfoRecord): _61.DelegatorStartingInfoRecordAmino;
                fromAminoMsg(object: _61.DelegatorStartingInfoRecordAminoMsg): _61.DelegatorStartingInfoRecord;
                toAminoMsg(message: _61.DelegatorStartingInfoRecord): _61.DelegatorStartingInfoRecordAminoMsg;
                fromProtoMsg(message: _61.DelegatorStartingInfoRecordProtoMsg): _61.DelegatorStartingInfoRecord;
                toProto(message: _61.DelegatorStartingInfoRecord): Uint8Array;
                toProtoMsg(message: _61.DelegatorStartingInfoRecord): _61.DelegatorStartingInfoRecordProtoMsg;
            };
            ValidatorSlashEventRecord: {
                typeUrl: string;
                encode(message: _61.ValidatorSlashEventRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _61.ValidatorSlashEventRecord;
                fromJSON(object: any): _61.ValidatorSlashEventRecord;
                toJSON(message: _61.ValidatorSlashEventRecord): unknown;
                fromPartial(object: Partial<_61.ValidatorSlashEventRecord>): _61.ValidatorSlashEventRecord;
                fromAmino(object: _61.ValidatorSlashEventRecordAmino): _61.ValidatorSlashEventRecord;
                toAmino(message: _61.ValidatorSlashEventRecord): _61.ValidatorSlashEventRecordAmino;
                fromAminoMsg(object: _61.ValidatorSlashEventRecordAminoMsg): _61.ValidatorSlashEventRecord;
                toAminoMsg(message: _61.ValidatorSlashEventRecord): _61.ValidatorSlashEventRecordAminoMsg;
                fromProtoMsg(message: _61.ValidatorSlashEventRecordProtoMsg): _61.ValidatorSlashEventRecord;
                toProto(message: _61.ValidatorSlashEventRecord): Uint8Array;
                toProtoMsg(message: _61.ValidatorSlashEventRecord): _61.ValidatorSlashEventRecordProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _61.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _61.GenesisState;
                fromJSON(object: any): _61.GenesisState;
                toJSON(message: _61.GenesisState): unknown;
                fromPartial(object: Partial<_61.GenesisState>): _61.GenesisState;
                fromAmino(object: _61.GenesisStateAmino): _61.GenesisState;
                toAmino(message: _61.GenesisState): _61.GenesisStateAmino;
                fromAminoMsg(object: _61.GenesisStateAminoMsg): _61.GenesisState;
                toAminoMsg(message: _61.GenesisState): _61.GenesisStateAminoMsg;
                fromProtoMsg(message: _61.GenesisStateProtoMsg): _61.GenesisState;
                toProto(message: _61.GenesisState): Uint8Array;
                toProtoMsg(message: _61.GenesisState): _61.GenesisStateProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _60.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _60.Params;
                fromJSON(object: any): _60.Params;
                toJSON(message: _60.Params): unknown;
                fromPartial(object: Partial<_60.Params>): _60.Params;
                fromAmino(object: _60.ParamsAmino): _60.Params;
                toAmino(message: _60.Params): _60.ParamsAmino;
                fromAminoMsg(object: _60.ParamsAminoMsg): _60.Params;
                toAminoMsg(message: _60.Params): _60.ParamsAminoMsg;
                fromProtoMsg(message: _60.ParamsProtoMsg): _60.Params;
                toProto(message: _60.Params): Uint8Array;
                toProtoMsg(message: _60.Params): _60.ParamsProtoMsg;
            };
            ValidatorHistoricalRewards: {
                typeUrl: string;
                encode(message: _60.ValidatorHistoricalRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _60.ValidatorHistoricalRewards;
                fromJSON(object: any): _60.ValidatorHistoricalRewards;
                toJSON(message: _60.ValidatorHistoricalRewards): unknown;
                fromPartial(object: Partial<_60.ValidatorHistoricalRewards>): _60.ValidatorHistoricalRewards;
                fromAmino(object: _60.ValidatorHistoricalRewardsAmino): _60.ValidatorHistoricalRewards;
                toAmino(message: _60.ValidatorHistoricalRewards): _60.ValidatorHistoricalRewardsAmino;
                fromAminoMsg(object: _60.ValidatorHistoricalRewardsAminoMsg): _60.ValidatorHistoricalRewards;
                toAminoMsg(message: _60.ValidatorHistoricalRewards): _60.ValidatorHistoricalRewardsAminoMsg;
                fromProtoMsg(message: _60.ValidatorHistoricalRewardsProtoMsg): _60.ValidatorHistoricalRewards;
                toProto(message: _60.ValidatorHistoricalRewards): Uint8Array;
                toProtoMsg(message: _60.ValidatorHistoricalRewards): _60.ValidatorHistoricalRewardsProtoMsg;
            };
            ValidatorCurrentRewards: {
                typeUrl: string;
                encode(message: _60.ValidatorCurrentRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _60.ValidatorCurrentRewards;
                fromJSON(object: any): _60.ValidatorCurrentRewards;
                toJSON(message: _60.ValidatorCurrentRewards): unknown;
                fromPartial(object: Partial<_60.ValidatorCurrentRewards>): _60.ValidatorCurrentRewards;
                fromAmino(object: _60.ValidatorCurrentRewardsAmino): _60.ValidatorCurrentRewards;
                toAmino(message: _60.ValidatorCurrentRewards): _60.ValidatorCurrentRewardsAmino;
                fromAminoMsg(object: _60.ValidatorCurrentRewardsAminoMsg): _60.ValidatorCurrentRewards;
                toAminoMsg(message: _60.ValidatorCurrentRewards): _60.ValidatorCurrentRewardsAminoMsg;
                fromProtoMsg(message: _60.ValidatorCurrentRewardsProtoMsg): _60.ValidatorCurrentRewards;
                toProto(message: _60.ValidatorCurrentRewards): Uint8Array;
                toProtoMsg(message: _60.ValidatorCurrentRewards): _60.ValidatorCurrentRewardsProtoMsg;
            };
            ValidatorAccumulatedCommission: {
                typeUrl: string;
                encode(message: _60.ValidatorAccumulatedCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _60.ValidatorAccumulatedCommission;
                fromJSON(object: any): _60.ValidatorAccumulatedCommission;
                toJSON(message: _60.ValidatorAccumulatedCommission): unknown;
                fromPartial(object: Partial<_60.ValidatorAccumulatedCommission>): _60.ValidatorAccumulatedCommission;
                fromAmino(object: _60.ValidatorAccumulatedCommissionAmino): _60.ValidatorAccumulatedCommission;
                toAmino(message: _60.ValidatorAccumulatedCommission): _60.ValidatorAccumulatedCommissionAmino;
                fromAminoMsg(object: _60.ValidatorAccumulatedCommissionAminoMsg): _60.ValidatorAccumulatedCommission;
                toAminoMsg(message: _60.ValidatorAccumulatedCommission): _60.ValidatorAccumulatedCommissionAminoMsg;
                fromProtoMsg(message: _60.ValidatorAccumulatedCommissionProtoMsg): _60.ValidatorAccumulatedCommission;
                toProto(message: _60.ValidatorAccumulatedCommission): Uint8Array;
                toProtoMsg(message: _60.ValidatorAccumulatedCommission): _60.ValidatorAccumulatedCommissionProtoMsg;
            };
            ValidatorOutstandingRewards: {
                typeUrl: string;
                encode(message: _60.ValidatorOutstandingRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _60.ValidatorOutstandingRewards;
                fromJSON(object: any): _60.ValidatorOutstandingRewards;
                toJSON(message: _60.ValidatorOutstandingRewards): unknown;
                fromPartial(object: Partial<_60.ValidatorOutstandingRewards>): _60.ValidatorOutstandingRewards;
                fromAmino(object: _60.ValidatorOutstandingRewardsAmino): _60.ValidatorOutstandingRewards;
                toAmino(message: _60.ValidatorOutstandingRewards): _60.ValidatorOutstandingRewardsAmino;
                fromAminoMsg(object: _60.ValidatorOutstandingRewardsAminoMsg): _60.ValidatorOutstandingRewards;
                toAminoMsg(message: _60.ValidatorOutstandingRewards): _60.ValidatorOutstandingRewardsAminoMsg;
                fromProtoMsg(message: _60.ValidatorOutstandingRewardsProtoMsg): _60.ValidatorOutstandingRewards;
                toProto(message: _60.ValidatorOutstandingRewards): Uint8Array;
                toProtoMsg(message: _60.ValidatorOutstandingRewards): _60.ValidatorOutstandingRewardsProtoMsg;
            };
            ValidatorSlashEvent: {
                typeUrl: string;
                encode(message: _60.ValidatorSlashEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _60.ValidatorSlashEvent;
                fromJSON(object: any): _60.ValidatorSlashEvent;
                toJSON(message: _60.ValidatorSlashEvent): unknown;
                fromPartial(object: Partial<_60.ValidatorSlashEvent>): _60.ValidatorSlashEvent;
                fromAmino(object: _60.ValidatorSlashEventAmino): _60.ValidatorSlashEvent;
                toAmino(message: _60.ValidatorSlashEvent): _60.ValidatorSlashEventAmino;
                fromAminoMsg(object: _60.ValidatorSlashEventAminoMsg): _60.ValidatorSlashEvent;
                toAminoMsg(message: _60.ValidatorSlashEvent): _60.ValidatorSlashEventAminoMsg;
                fromProtoMsg(message: _60.ValidatorSlashEventProtoMsg): _60.ValidatorSlashEvent;
                toProto(message: _60.ValidatorSlashEvent): Uint8Array;
                toProtoMsg(message: _60.ValidatorSlashEvent): _60.ValidatorSlashEventProtoMsg;
            };
            ValidatorSlashEvents: {
                typeUrl: string;
                encode(message: _60.ValidatorSlashEvents, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _60.ValidatorSlashEvents;
                fromJSON(object: any): _60.ValidatorSlashEvents;
                toJSON(message: _60.ValidatorSlashEvents): unknown;
                fromPartial(object: Partial<_60.ValidatorSlashEvents>): _60.ValidatorSlashEvents;
                fromAmino(object: _60.ValidatorSlashEventsAmino): _60.ValidatorSlashEvents;
                toAmino(message: _60.ValidatorSlashEvents): _60.ValidatorSlashEventsAmino;
                fromAminoMsg(object: _60.ValidatorSlashEventsAminoMsg): _60.ValidatorSlashEvents;
                toAminoMsg(message: _60.ValidatorSlashEvents): _60.ValidatorSlashEventsAminoMsg;
                fromProtoMsg(message: _60.ValidatorSlashEventsProtoMsg): _60.ValidatorSlashEvents;
                toProto(message: _60.ValidatorSlashEvents): Uint8Array;
                toProtoMsg(message: _60.ValidatorSlashEvents): _60.ValidatorSlashEventsProtoMsg;
            };
            FeePool: {
                typeUrl: string;
                encode(message: _60.FeePool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _60.FeePool;
                fromJSON(object: any): _60.FeePool;
                toJSON(message: _60.FeePool): unknown;
                fromPartial(object: Partial<_60.FeePool>): _60.FeePool;
                fromAmino(object: _60.FeePoolAmino): _60.FeePool;
                toAmino(message: _60.FeePool): _60.FeePoolAmino;
                fromAminoMsg(object: _60.FeePoolAminoMsg): _60.FeePool;
                toAminoMsg(message: _60.FeePool): _60.FeePoolAminoMsg;
                fromProtoMsg(message: _60.FeePoolProtoMsg): _60.FeePool;
                toProto(message: _60.FeePool): Uint8Array;
                toProtoMsg(message: _60.FeePool): _60.FeePoolProtoMsg;
            };
            CommunityPoolSpendProposal: {
                typeUrl: string;
                encode(message: _60.CommunityPoolSpendProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _60.CommunityPoolSpendProposal;
                fromJSON(object: any): _60.CommunityPoolSpendProposal;
                toJSON(message: _60.CommunityPoolSpendProposal): unknown;
                fromPartial(object: Partial<_60.CommunityPoolSpendProposal>): _60.CommunityPoolSpendProposal;
                fromAmino(object: _60.CommunityPoolSpendProposalAmino): _60.CommunityPoolSpendProposal;
                toAmino(message: _60.CommunityPoolSpendProposal): _60.CommunityPoolSpendProposalAmino;
                fromAminoMsg(object: _60.CommunityPoolSpendProposalAminoMsg): _60.CommunityPoolSpendProposal;
                toAminoMsg(message: _60.CommunityPoolSpendProposal): _60.CommunityPoolSpendProposalAminoMsg;
                fromProtoMsg(message: _60.CommunityPoolSpendProposalProtoMsg): _60.CommunityPoolSpendProposal;
                toProto(message: _60.CommunityPoolSpendProposal): Uint8Array;
                toProtoMsg(message: _60.CommunityPoolSpendProposal): _60.CommunityPoolSpendProposalProtoMsg;
            };
            DelegatorStartingInfo: {
                typeUrl: string;
                encode(message: _60.DelegatorStartingInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _60.DelegatorStartingInfo;
                fromJSON(object: any): _60.DelegatorStartingInfo;
                toJSON(message: _60.DelegatorStartingInfo): unknown;
                fromPartial(object: Partial<_60.DelegatorStartingInfo>): _60.DelegatorStartingInfo;
                fromAmino(object: _60.DelegatorStartingInfoAmino): _60.DelegatorStartingInfo;
                toAmino(message: _60.DelegatorStartingInfo): _60.DelegatorStartingInfoAmino;
                fromAminoMsg(object: _60.DelegatorStartingInfoAminoMsg): _60.DelegatorStartingInfo;
                toAminoMsg(message: _60.DelegatorStartingInfo): _60.DelegatorStartingInfoAminoMsg;
                fromProtoMsg(message: _60.DelegatorStartingInfoProtoMsg): _60.DelegatorStartingInfo;
                toProto(message: _60.DelegatorStartingInfo): Uint8Array;
                toProtoMsg(message: _60.DelegatorStartingInfo): _60.DelegatorStartingInfoProtoMsg;
            };
            DelegationDelegatorReward: {
                typeUrl: string;
                encode(message: _60.DelegationDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _60.DelegationDelegatorReward;
                fromJSON(object: any): _60.DelegationDelegatorReward;
                toJSON(message: _60.DelegationDelegatorReward): unknown;
                fromPartial(object: Partial<_60.DelegationDelegatorReward>): _60.DelegationDelegatorReward;
                fromAmino(object: _60.DelegationDelegatorRewardAmino): _60.DelegationDelegatorReward;
                toAmino(message: _60.DelegationDelegatorReward): _60.DelegationDelegatorRewardAmino;
                fromAminoMsg(object: _60.DelegationDelegatorRewardAminoMsg): _60.DelegationDelegatorReward;
                toAminoMsg(message: _60.DelegationDelegatorReward): _60.DelegationDelegatorRewardAminoMsg;
                fromProtoMsg(message: _60.DelegationDelegatorRewardProtoMsg): _60.DelegationDelegatorReward;
                toProto(message: _60.DelegationDelegatorReward): Uint8Array;
                toProtoMsg(message: _60.DelegationDelegatorReward): _60.DelegationDelegatorRewardProtoMsg;
            };
            CommunityPoolSpendProposalWithDeposit: {
                typeUrl: string;
                encode(message: _60.CommunityPoolSpendProposalWithDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _60.CommunityPoolSpendProposalWithDeposit;
                fromJSON(object: any): _60.CommunityPoolSpendProposalWithDeposit;
                toJSON(message: _60.CommunityPoolSpendProposalWithDeposit): unknown;
                fromPartial(object: Partial<_60.CommunityPoolSpendProposalWithDeposit>): _60.CommunityPoolSpendProposalWithDeposit;
                fromAmino(object: _60.CommunityPoolSpendProposalWithDepositAmino): _60.CommunityPoolSpendProposalWithDeposit;
                toAmino(message: _60.CommunityPoolSpendProposalWithDeposit): _60.CommunityPoolSpendProposalWithDepositAmino;
                fromAminoMsg(object: _60.CommunityPoolSpendProposalWithDepositAminoMsg): _60.CommunityPoolSpendProposalWithDeposit;
                toAminoMsg(message: _60.CommunityPoolSpendProposalWithDeposit): _60.CommunityPoolSpendProposalWithDepositAminoMsg;
                fromProtoMsg(message: _60.CommunityPoolSpendProposalWithDepositProtoMsg): _60.CommunityPoolSpendProposalWithDeposit;
                toProto(message: _60.CommunityPoolSpendProposalWithDeposit): Uint8Array;
                toProtoMsg(message: _60.CommunityPoolSpendProposalWithDeposit): _60.CommunityPoolSpendProposalWithDepositProtoMsg;
            };
        };
    }
    namespace evidence {
        namespace module {
            const v1: {
                protobufPackage: "cosmos.evidence.module.v1";
                Module: {
                    typeUrl: string;
                    encode(_: _64.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _64.Module;
                    fromJSON(_: any): _64.Module;
                    toJSON(_: _64.Module): unknown;
                    fromPartial(_: Partial<_64.Module>): _64.Module;
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
    namespace feegrant {
        namespace module {
            const v1: {
                protobufPackage: "cosmos.feegrant.module.v1";
                Module: {
                    typeUrl: string;
                    encode(_: _65.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _65.Module;
                    fromJSON(_: any): _65.Module;
                    toJSON(_: _65.Module): unknown;
                    fromPartial(_: Partial<_65.Module>): _65.Module;
                    fromAmino(_: _65.ModuleAmino): _65.Module;
                    toAmino(_: _65.Module): _65.ModuleAmino;
                    fromAminoMsg(object: _65.ModuleAminoMsg): _65.Module;
                    toAminoMsg(message: _65.Module): _65.ModuleAminoMsg;
                    fromProtoMsg(message: _65.ModuleProtoMsg): _65.Module;
                    toProto(message: _65.Module): Uint8Array;
                    toProtoMsg(message: _65.Module): _65.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            Msg: typeof _267.Msg;
            Query: typeof _250.Query;
            QueryClientImpl: typeof _250.QueryClientImpl;
            LCDQueryClient: typeof _232.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _69.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _69.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    pruneAllowances(value: _69.MsgPruneAllowances): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _69.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _69.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _69.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _69.MsgRevokeAllowance;
                    };
                    pruneAllowances(value: _69.MsgPruneAllowances): {
                        typeUrl: string;
                        value: _69.MsgPruneAllowances;
                    };
                };
                toJSON: {
                    grantAllowance(value: _69.MsgGrantAllowance): {
                        typeUrl: string;
                        value: unknown;
                    };
                    revokeAllowance(value: _69.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: unknown;
                    };
                    pruneAllowances(value: _69.MsgPruneAllowances): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    grantAllowance(value: any): {
                        typeUrl: string;
                        value: _69.MsgGrantAllowance;
                    };
                    revokeAllowance(value: any): {
                        typeUrl: string;
                        value: _69.MsgRevokeAllowance;
                    };
                    pruneAllowances(value: any): {
                        typeUrl: string;
                        value: _69.MsgPruneAllowances;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _69.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _69.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _69.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _69.MsgRevokeAllowance;
                    };
                    pruneAllowances(value: _69.MsgPruneAllowances): {
                        typeUrl: string;
                        value: _69.MsgPruneAllowances;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: (message: _69.MsgGrantAllowance) => _69.MsgGrantAllowanceAmino;
                    fromAmino: (object: _69.MsgGrantAllowanceAmino) => _69.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: (message: _69.MsgRevokeAllowance) => _69.MsgRevokeAllowanceAmino;
                    fromAmino: (object: _69.MsgRevokeAllowanceAmino) => _69.MsgRevokeAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgPruneAllowances": {
                    aminoType: string;
                    toAmino: (message: _69.MsgPruneAllowances) => _69.MsgPruneAllowancesAmino;
                    fromAmino: (object: _69.MsgPruneAllowancesAmino) => _69.MsgPruneAllowances;
                };
            };
            protobufPackage: "cosmos.feegrant.v1beta1";
            MsgGrantAllowance: {
                typeUrl: string;
                encode(message: _69.MsgGrantAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _69.MsgGrantAllowance;
                fromJSON(object: any): _69.MsgGrantAllowance;
                toJSON(message: _69.MsgGrantAllowance): unknown;
                fromPartial(object: Partial<_69.MsgGrantAllowance>): _69.MsgGrantAllowance;
                fromAmino(object: _69.MsgGrantAllowanceAmino): _69.MsgGrantAllowance;
                toAmino(message: _69.MsgGrantAllowance): _69.MsgGrantAllowanceAmino;
                fromAminoMsg(object: _69.MsgGrantAllowanceAminoMsg): _69.MsgGrantAllowance;
                toAminoMsg(message: _69.MsgGrantAllowance): _69.MsgGrantAllowanceAminoMsg;
                fromProtoMsg(message: _69.MsgGrantAllowanceProtoMsg): _69.MsgGrantAllowance;
                toProto(message: _69.MsgGrantAllowance): Uint8Array;
                toProtoMsg(message: _69.MsgGrantAllowance): _69.MsgGrantAllowanceProtoMsg;
            };
            MsgGrantAllowanceResponse: {
                typeUrl: string;
                encode(_: _69.MsgGrantAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _69.MsgGrantAllowanceResponse;
                fromJSON(_: any): _69.MsgGrantAllowanceResponse;
                toJSON(_: _69.MsgGrantAllowanceResponse): unknown;
                fromPartial(_: Partial<_69.MsgGrantAllowanceResponse>): _69.MsgGrantAllowanceResponse;
                fromAmino(_: _69.MsgGrantAllowanceResponseAmino): _69.MsgGrantAllowanceResponse;
                toAmino(_: _69.MsgGrantAllowanceResponse): _69.MsgGrantAllowanceResponseAmino;
                fromAminoMsg(object: _69.MsgGrantAllowanceResponseAminoMsg): _69.MsgGrantAllowanceResponse;
                toAminoMsg(message: _69.MsgGrantAllowanceResponse): _69.MsgGrantAllowanceResponseAminoMsg;
                fromProtoMsg(message: _69.MsgGrantAllowanceResponseProtoMsg): _69.MsgGrantAllowanceResponse;
                toProto(message: _69.MsgGrantAllowanceResponse): Uint8Array;
                toProtoMsg(message: _69.MsgGrantAllowanceResponse): _69.MsgGrantAllowanceResponseProtoMsg;
            };
            MsgRevokeAllowance: {
                typeUrl: string;
                encode(message: _69.MsgRevokeAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _69.MsgRevokeAllowance;
                fromJSON(object: any): _69.MsgRevokeAllowance;
                toJSON(message: _69.MsgRevokeAllowance): unknown;
                fromPartial(object: Partial<_69.MsgRevokeAllowance>): _69.MsgRevokeAllowance;
                fromAmino(object: _69.MsgRevokeAllowanceAmino): _69.MsgRevokeAllowance;
                toAmino(message: _69.MsgRevokeAllowance): _69.MsgRevokeAllowanceAmino;
                fromAminoMsg(object: _69.MsgRevokeAllowanceAminoMsg): _69.MsgRevokeAllowance;
                toAminoMsg(message: _69.MsgRevokeAllowance): _69.MsgRevokeAllowanceAminoMsg;
                fromProtoMsg(message: _69.MsgRevokeAllowanceProtoMsg): _69.MsgRevokeAllowance;
                toProto(message: _69.MsgRevokeAllowance): Uint8Array;
                toProtoMsg(message: _69.MsgRevokeAllowance): _69.MsgRevokeAllowanceProtoMsg;
            };
            MsgRevokeAllowanceResponse: {
                typeUrl: string;
                encode(_: _69.MsgRevokeAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _69.MsgRevokeAllowanceResponse;
                fromJSON(_: any): _69.MsgRevokeAllowanceResponse;
                toJSON(_: _69.MsgRevokeAllowanceResponse): unknown;
                fromPartial(_: Partial<_69.MsgRevokeAllowanceResponse>): _69.MsgRevokeAllowanceResponse;
                fromAmino(_: _69.MsgRevokeAllowanceResponseAmino): _69.MsgRevokeAllowanceResponse;
                toAmino(_: _69.MsgRevokeAllowanceResponse): _69.MsgRevokeAllowanceResponseAmino;
                fromAminoMsg(object: _69.MsgRevokeAllowanceResponseAminoMsg): _69.MsgRevokeAllowanceResponse;
                toAminoMsg(message: _69.MsgRevokeAllowanceResponse): _69.MsgRevokeAllowanceResponseAminoMsg;
                fromProtoMsg(message: _69.MsgRevokeAllowanceResponseProtoMsg): _69.MsgRevokeAllowanceResponse;
                toProto(message: _69.MsgRevokeAllowanceResponse): Uint8Array;
                toProtoMsg(message: _69.MsgRevokeAllowanceResponse): _69.MsgRevokeAllowanceResponseProtoMsg;
            };
            MsgPruneAllowances: {
                typeUrl: string;
                encode(message: _69.MsgPruneAllowances, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _69.MsgPruneAllowances;
                fromJSON(object: any): _69.MsgPruneAllowances;
                toJSON(message: _69.MsgPruneAllowances): unknown;
                fromPartial(object: Partial<_69.MsgPruneAllowances>): _69.MsgPruneAllowances;
                fromAmino(object: _69.MsgPruneAllowancesAmino): _69.MsgPruneAllowances;
                toAmino(message: _69.MsgPruneAllowances): _69.MsgPruneAllowancesAmino;
                fromAminoMsg(object: _69.MsgPruneAllowancesAminoMsg): _69.MsgPruneAllowances;
                toAminoMsg(message: _69.MsgPruneAllowances): _69.MsgPruneAllowancesAminoMsg;
                fromProtoMsg(message: _69.MsgPruneAllowancesProtoMsg): _69.MsgPruneAllowances;
                toProto(message: _69.MsgPruneAllowances): Uint8Array;
                toProtoMsg(message: _69.MsgPruneAllowances): _69.MsgPruneAllowancesProtoMsg;
            };
            MsgPruneAllowancesResponse: {
                typeUrl: string;
                encode(_: _69.MsgPruneAllowancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _69.MsgPruneAllowancesResponse;
                fromJSON(_: any): _69.MsgPruneAllowancesResponse;
                toJSON(_: _69.MsgPruneAllowancesResponse): unknown;
                fromPartial(_: Partial<_69.MsgPruneAllowancesResponse>): _69.MsgPruneAllowancesResponse;
                fromAmino(_: _69.MsgPruneAllowancesResponseAmino): _69.MsgPruneAllowancesResponse;
                toAmino(_: _69.MsgPruneAllowancesResponse): _69.MsgPruneAllowancesResponseAmino;
                fromAminoMsg(object: _69.MsgPruneAllowancesResponseAminoMsg): _69.MsgPruneAllowancesResponse;
                toAminoMsg(message: _69.MsgPruneAllowancesResponse): _69.MsgPruneAllowancesResponseAminoMsg;
                fromProtoMsg(message: _69.MsgPruneAllowancesResponseProtoMsg): _69.MsgPruneAllowancesResponse;
                toProto(message: _69.MsgPruneAllowancesResponse): Uint8Array;
                toProtoMsg(message: _69.MsgPruneAllowancesResponse): _69.MsgPruneAllowancesResponseProtoMsg;
            };
            Cosmos_feegrantv1beta1FeeAllowanceI_InterfaceDecoder: (input: import("..").BinaryReader | Uint8Array) => import("../google/protobuf/any").Any | _66.BasicAllowance | _66.PeriodicAllowance | _66.AllowedMsgAllowance;
            Cosmos_feegrantv1beta1FeeAllowanceI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_feegrantv1beta1FeeAllowanceI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryAllowanceRequest: {
                typeUrl: string;
                encode(message: _68.QueryAllowanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _68.QueryAllowanceRequest;
                fromJSON(object: any): _68.QueryAllowanceRequest;
                toJSON(message: _68.QueryAllowanceRequest): unknown;
                fromPartial(object: Partial<_68.QueryAllowanceRequest>): _68.QueryAllowanceRequest;
                fromAmino(object: _68.QueryAllowanceRequestAmino): _68.QueryAllowanceRequest;
                toAmino(message: _68.QueryAllowanceRequest): _68.QueryAllowanceRequestAmino;
                fromAminoMsg(object: _68.QueryAllowanceRequestAminoMsg): _68.QueryAllowanceRequest;
                toAminoMsg(message: _68.QueryAllowanceRequest): _68.QueryAllowanceRequestAminoMsg;
                fromProtoMsg(message: _68.QueryAllowanceRequestProtoMsg): _68.QueryAllowanceRequest;
                toProto(message: _68.QueryAllowanceRequest): Uint8Array;
                toProtoMsg(message: _68.QueryAllowanceRequest): _68.QueryAllowanceRequestProtoMsg;
            };
            QueryAllowanceResponse: {
                typeUrl: string;
                encode(message: _68.QueryAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _68.QueryAllowanceResponse;
                fromJSON(object: any): _68.QueryAllowanceResponse;
                toJSON(message: _68.QueryAllowanceResponse): unknown;
                fromPartial(object: Partial<_68.QueryAllowanceResponse>): _68.QueryAllowanceResponse;
                fromAmino(object: _68.QueryAllowanceResponseAmino): _68.QueryAllowanceResponse;
                toAmino(message: _68.QueryAllowanceResponse): _68.QueryAllowanceResponseAmino;
                fromAminoMsg(object: _68.QueryAllowanceResponseAminoMsg): _68.QueryAllowanceResponse;
                toAminoMsg(message: _68.QueryAllowanceResponse): _68.QueryAllowanceResponseAminoMsg;
                fromProtoMsg(message: _68.QueryAllowanceResponseProtoMsg): _68.QueryAllowanceResponse;
                toProto(message: _68.QueryAllowanceResponse): Uint8Array;
                toProtoMsg(message: _68.QueryAllowanceResponse): _68.QueryAllowanceResponseProtoMsg;
            };
            QueryAllowancesRequest: {
                typeUrl: string;
                encode(message: _68.QueryAllowancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _68.QueryAllowancesRequest;
                fromJSON(object: any): _68.QueryAllowancesRequest;
                toJSON(message: _68.QueryAllowancesRequest): unknown;
                fromPartial(object: Partial<_68.QueryAllowancesRequest>): _68.QueryAllowancesRequest;
                fromAmino(object: _68.QueryAllowancesRequestAmino): _68.QueryAllowancesRequest;
                toAmino(message: _68.QueryAllowancesRequest): _68.QueryAllowancesRequestAmino;
                fromAminoMsg(object: _68.QueryAllowancesRequestAminoMsg): _68.QueryAllowancesRequest;
                toAminoMsg(message: _68.QueryAllowancesRequest): _68.QueryAllowancesRequestAminoMsg;
                fromProtoMsg(message: _68.QueryAllowancesRequestProtoMsg): _68.QueryAllowancesRequest;
                toProto(message: _68.QueryAllowancesRequest): Uint8Array;
                toProtoMsg(message: _68.QueryAllowancesRequest): _68.QueryAllowancesRequestProtoMsg;
            };
            QueryAllowancesResponse: {
                typeUrl: string;
                encode(message: _68.QueryAllowancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _68.QueryAllowancesResponse;
                fromJSON(object: any): _68.QueryAllowancesResponse;
                toJSON(message: _68.QueryAllowancesResponse): unknown;
                fromPartial(object: Partial<_68.QueryAllowancesResponse>): _68.QueryAllowancesResponse;
                fromAmino(object: _68.QueryAllowancesResponseAmino): _68.QueryAllowancesResponse;
                toAmino(message: _68.QueryAllowancesResponse): _68.QueryAllowancesResponseAmino;
                fromAminoMsg(object: _68.QueryAllowancesResponseAminoMsg): _68.QueryAllowancesResponse;
                toAminoMsg(message: _68.QueryAllowancesResponse): _68.QueryAllowancesResponseAminoMsg;
                fromProtoMsg(message: _68.QueryAllowancesResponseProtoMsg): _68.QueryAllowancesResponse;
                toProto(message: _68.QueryAllowancesResponse): Uint8Array;
                toProtoMsg(message: _68.QueryAllowancesResponse): _68.QueryAllowancesResponseProtoMsg;
            };
            QueryAllowancesByGranterRequest: {
                typeUrl: string;
                encode(message: _68.QueryAllowancesByGranterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _68.QueryAllowancesByGranterRequest;
                fromJSON(object: any): _68.QueryAllowancesByGranterRequest;
                toJSON(message: _68.QueryAllowancesByGranterRequest): unknown;
                fromPartial(object: Partial<_68.QueryAllowancesByGranterRequest>): _68.QueryAllowancesByGranterRequest;
                fromAmino(object: _68.QueryAllowancesByGranterRequestAmino): _68.QueryAllowancesByGranterRequest;
                toAmino(message: _68.QueryAllowancesByGranterRequest): _68.QueryAllowancesByGranterRequestAmino;
                fromAminoMsg(object: _68.QueryAllowancesByGranterRequestAminoMsg): _68.QueryAllowancesByGranterRequest;
                toAminoMsg(message: _68.QueryAllowancesByGranterRequest): _68.QueryAllowancesByGranterRequestAminoMsg;
                fromProtoMsg(message: _68.QueryAllowancesByGranterRequestProtoMsg): _68.QueryAllowancesByGranterRequest;
                toProto(message: _68.QueryAllowancesByGranterRequest): Uint8Array;
                toProtoMsg(message: _68.QueryAllowancesByGranterRequest): _68.QueryAllowancesByGranterRequestProtoMsg;
            };
            QueryAllowancesByGranterResponse: {
                typeUrl: string;
                encode(message: _68.QueryAllowancesByGranterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _68.QueryAllowancesByGranterResponse;
                fromJSON(object: any): _68.QueryAllowancesByGranterResponse;
                toJSON(message: _68.QueryAllowancesByGranterResponse): unknown;
                fromPartial(object: Partial<_68.QueryAllowancesByGranterResponse>): _68.QueryAllowancesByGranterResponse;
                fromAmino(object: _68.QueryAllowancesByGranterResponseAmino): _68.QueryAllowancesByGranterResponse;
                toAmino(message: _68.QueryAllowancesByGranterResponse): _68.QueryAllowancesByGranterResponseAmino;
                fromAminoMsg(object: _68.QueryAllowancesByGranterResponseAminoMsg): _68.QueryAllowancesByGranterResponse;
                toAminoMsg(message: _68.QueryAllowancesByGranterResponse): _68.QueryAllowancesByGranterResponseAminoMsg;
                fromProtoMsg(message: _68.QueryAllowancesByGranterResponseProtoMsg): _68.QueryAllowancesByGranterResponse;
                toProto(message: _68.QueryAllowancesByGranterResponse): Uint8Array;
                toProtoMsg(message: _68.QueryAllowancesByGranterResponse): _68.QueryAllowancesByGranterResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _67.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _67.GenesisState;
                fromJSON(object: any): _67.GenesisState;
                toJSON(message: _67.GenesisState): unknown;
                fromPartial(object: Partial<_67.GenesisState>): _67.GenesisState;
                fromAmino(object: _67.GenesisStateAmino): _67.GenesisState;
                toAmino(message: _67.GenesisState): _67.GenesisStateAmino;
                fromAminoMsg(object: _67.GenesisStateAminoMsg): _67.GenesisState;
                toAminoMsg(message: _67.GenesisState): _67.GenesisStateAminoMsg;
                fromProtoMsg(message: _67.GenesisStateProtoMsg): _67.GenesisState;
                toProto(message: _67.GenesisState): Uint8Array;
                toProtoMsg(message: _67.GenesisState): _67.GenesisStateProtoMsg;
            };
            BasicAllowance: {
                typeUrl: string;
                encode(message: _66.BasicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _66.BasicAllowance;
                fromJSON(object: any): _66.BasicAllowance;
                toJSON(message: _66.BasicAllowance): unknown;
                fromPartial(object: Partial<_66.BasicAllowance>): _66.BasicAllowance;
                fromAmino(object: _66.BasicAllowanceAmino): _66.BasicAllowance;
                toAmino(message: _66.BasicAllowance): _66.BasicAllowanceAmino;
                fromAminoMsg(object: _66.BasicAllowanceAminoMsg): _66.BasicAllowance;
                toAminoMsg(message: _66.BasicAllowance): _66.BasicAllowanceAminoMsg;
                fromProtoMsg(message: _66.BasicAllowanceProtoMsg): _66.BasicAllowance;
                toProto(message: _66.BasicAllowance): Uint8Array;
                toProtoMsg(message: _66.BasicAllowance): _66.BasicAllowanceProtoMsg;
            };
            PeriodicAllowance: {
                typeUrl: string;
                encode(message: _66.PeriodicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _66.PeriodicAllowance;
                fromJSON(object: any): _66.PeriodicAllowance;
                toJSON(message: _66.PeriodicAllowance): unknown;
                fromPartial(object: Partial<_66.PeriodicAllowance>): _66.PeriodicAllowance;
                fromAmino(object: _66.PeriodicAllowanceAmino): _66.PeriodicAllowance;
                toAmino(message: _66.PeriodicAllowance): _66.PeriodicAllowanceAmino;
                fromAminoMsg(object: _66.PeriodicAllowanceAminoMsg): _66.PeriodicAllowance;
                toAminoMsg(message: _66.PeriodicAllowance): _66.PeriodicAllowanceAminoMsg;
                fromProtoMsg(message: _66.PeriodicAllowanceProtoMsg): _66.PeriodicAllowance;
                toProto(message: _66.PeriodicAllowance): Uint8Array;
                toProtoMsg(message: _66.PeriodicAllowance): _66.PeriodicAllowanceProtoMsg;
            };
            AllowedMsgAllowance: {
                typeUrl: string;
                encode(message: _66.AllowedMsgAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _66.AllowedMsgAllowance;
                fromJSON(object: any): _66.AllowedMsgAllowance;
                toJSON(message: _66.AllowedMsgAllowance): unknown;
                fromPartial(object: Partial<_66.AllowedMsgAllowance>): _66.AllowedMsgAllowance;
                fromAmino(object: _66.AllowedMsgAllowanceAmino): _66.AllowedMsgAllowance;
                toAmino(message: _66.AllowedMsgAllowance): _66.AllowedMsgAllowanceAmino;
                fromAminoMsg(object: _66.AllowedMsgAllowanceAminoMsg): _66.AllowedMsgAllowance;
                toAminoMsg(message: _66.AllowedMsgAllowance): _66.AllowedMsgAllowanceAminoMsg;
                fromProtoMsg(message: _66.AllowedMsgAllowanceProtoMsg): _66.AllowedMsgAllowance;
                toProto(message: _66.AllowedMsgAllowance): Uint8Array;
                toProtoMsg(message: _66.AllowedMsgAllowance): _66.AllowedMsgAllowanceProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _66.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _66.Grant;
                fromJSON(object: any): _66.Grant;
                toJSON(message: _66.Grant): unknown;
                fromPartial(object: Partial<_66.Grant>): _66.Grant;
                fromAmino(object: _66.GrantAmino): _66.Grant;
                toAmino(message: _66.Grant): _66.GrantAmino;
                fromAminoMsg(object: _66.GrantAminoMsg): _66.Grant;
                toAminoMsg(message: _66.Grant): _66.GrantAminoMsg;
                fromProtoMsg(message: _66.GrantProtoMsg): _66.Grant;
                toProto(message: _66.Grant): Uint8Array;
                toProtoMsg(message: _66.Grant): _66.GrantProtoMsg;
            };
        };
    }
    namespace genutil {
        namespace module {
            const v1: {
                protobufPackage: "cosmos.genutil.module.v1";
                Module: {
                    typeUrl: string;
                    encode(_: _70.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _70.Module;
                    fromJSON(_: any): _70.Module;
                    toJSON(_: _70.Module): unknown;
                    fromPartial(_: Partial<_70.Module>): _70.Module;
                    fromAmino(_: _70.ModuleAmino): _70.Module;
                    toAmino(_: _70.Module): _70.ModuleAmino;
                    fromAminoMsg(object: _70.ModuleAminoMsg): _70.Module;
                    toAminoMsg(message: _70.Module): _70.ModuleAminoMsg;
                    fromProtoMsg(message: _70.ModuleProtoMsg): _70.Module;
                    toProto(message: _70.Module): Uint8Array;
                    toProtoMsg(message: _70.Module): _70.ModuleProtoMsg;
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
                    encode(message: _71.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _71.Module;
                    fromJSON(object: any): _71.Module;
                    toJSON(message: _71.Module): unknown;
                    fromPartial(object: Partial<_71.Module>): _71.Module;
                    fromAmino(object: _71.ModuleAmino): _71.Module;
                    toAmino(message: _71.Module): _71.ModuleAmino;
                    fromAminoMsg(object: _71.ModuleAminoMsg): _71.Module;
                    toAminoMsg(message: _71.Module): _71.ModuleAminoMsg;
                    fromProtoMsg(message: _71.ModuleProtoMsg): _71.Module;
                    toProto(message: _71.Module): Uint8Array;
                    toProtoMsg(message: _71.Module): _71.ModuleProtoMsg;
                };
            };
        }
        const v1: {
            Msg: typeof _268.Msg;
            Query: typeof _251.Query;
            QueryClientImpl: typeof _251.QueryClientImpl;
            LCDQueryClient: typeof _233.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _75.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    execLegacyContent(value: _75.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _75.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _75.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _75.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _75.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelProposal(value: _75.MsgCancelProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _75.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _75.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _75.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _75.MsgExecLegacyContent;
                    };
                    vote(value: _75.MsgVote): {
                        typeUrl: string;
                        value: _75.MsgVote;
                    };
                    voteWeighted(value: _75.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _75.MsgVoteWeighted;
                    };
                    deposit(value: _75.MsgDeposit): {
                        typeUrl: string;
                        value: _75.MsgDeposit;
                    };
                    updateParams(value: _75.MsgUpdateParams): {
                        typeUrl: string;
                        value: _75.MsgUpdateParams;
                    };
                    cancelProposal(value: _75.MsgCancelProposal): {
                        typeUrl: string;
                        value: _75.MsgCancelProposal;
                    };
                };
                toJSON: {
                    submitProposal(value: _75.MsgSubmitProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    execLegacyContent(value: _75.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: unknown;
                    };
                    vote(value: _75.MsgVote): {
                        typeUrl: string;
                        value: unknown;
                    };
                    voteWeighted(value: _75.MsgVoteWeighted): {
                        typeUrl: string;
                        value: unknown;
                    };
                    deposit(value: _75.MsgDeposit): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateParams(value: _75.MsgUpdateParams): {
                        typeUrl: string;
                        value: unknown;
                    };
                    cancelProposal(value: _75.MsgCancelProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _75.MsgSubmitProposal;
                    };
                    execLegacyContent(value: any): {
                        typeUrl: string;
                        value: _75.MsgExecLegacyContent;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _75.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _75.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _75.MsgDeposit;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _75.MsgUpdateParams;
                    };
                    cancelProposal(value: any): {
                        typeUrl: string;
                        value: _75.MsgCancelProposal;
                    };
                };
                fromPartial: {
                    submitProposal(value: _75.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _75.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _75.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _75.MsgExecLegacyContent;
                    };
                    vote(value: _75.MsgVote): {
                        typeUrl: string;
                        value: _75.MsgVote;
                    };
                    voteWeighted(value: _75.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _75.MsgVoteWeighted;
                    };
                    deposit(value: _75.MsgDeposit): {
                        typeUrl: string;
                        value: _75.MsgDeposit;
                    };
                    updateParams(value: _75.MsgUpdateParams): {
                        typeUrl: string;
                        value: _75.MsgUpdateParams;
                    };
                    cancelProposal(value: _75.MsgCancelProposal): {
                        typeUrl: string;
                        value: _75.MsgCancelProposal;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _75.MsgSubmitProposal) => _75.MsgSubmitProposalAmino;
                    fromAmino: (object: _75.MsgSubmitProposalAmino) => _75.MsgSubmitProposal;
                };
                "/cosmos.gov.v1.MsgExecLegacyContent": {
                    aminoType: string;
                    toAmino: (message: _75.MsgExecLegacyContent) => _75.MsgExecLegacyContentAmino;
                    fromAmino: (object: _75.MsgExecLegacyContentAmino) => _75.MsgExecLegacyContent;
                };
                "/cosmos.gov.v1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _75.MsgVote) => _75.MsgVoteAmino;
                    fromAmino: (object: _75.MsgVoteAmino) => _75.MsgVote;
                };
                "/cosmos.gov.v1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _75.MsgVoteWeighted) => _75.MsgVoteWeightedAmino;
                    fromAmino: (object: _75.MsgVoteWeightedAmino) => _75.MsgVoteWeighted;
                };
                "/cosmos.gov.v1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _75.MsgDeposit) => _75.MsgDepositAmino;
                    fromAmino: (object: _75.MsgDepositAmino) => _75.MsgDeposit;
                };
                "/cosmos.gov.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _75.MsgUpdateParams) => _75.MsgUpdateParamsAmino;
                    fromAmino: (object: _75.MsgUpdateParamsAmino) => _75.MsgUpdateParams;
                };
                "/cosmos.gov.v1.MsgCancelProposal": {
                    aminoType: string;
                    toAmino: (message: _75.MsgCancelProposal) => _75.MsgCancelProposalAmino;
                    fromAmino: (object: _75.MsgCancelProposalAmino) => _75.MsgCancelProposal;
                };
            };
            protobufPackage: "cosmos.gov.v1";
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _75.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _75.MsgSubmitProposal;
                fromJSON(object: any): _75.MsgSubmitProposal;
                toJSON(message: _75.MsgSubmitProposal): unknown;
                fromPartial(object: Partial<_75.MsgSubmitProposal>): _75.MsgSubmitProposal;
                fromAmino(object: _75.MsgSubmitProposalAmino): _75.MsgSubmitProposal;
                toAmino(message: _75.MsgSubmitProposal): _75.MsgSubmitProposalAmino;
                fromAminoMsg(object: _75.MsgSubmitProposalAminoMsg): _75.MsgSubmitProposal;
                toAminoMsg(message: _75.MsgSubmitProposal): _75.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _75.MsgSubmitProposalProtoMsg): _75.MsgSubmitProposal;
                toProto(message: _75.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _75.MsgSubmitProposal): _75.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _75.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _75.MsgSubmitProposalResponse;
                fromJSON(object: any): _75.MsgSubmitProposalResponse;
                toJSON(message: _75.MsgSubmitProposalResponse): unknown;
                fromPartial(object: Partial<_75.MsgSubmitProposalResponse>): _75.MsgSubmitProposalResponse;
                fromAmino(object: _75.MsgSubmitProposalResponseAmino): _75.MsgSubmitProposalResponse;
                toAmino(message: _75.MsgSubmitProposalResponse): _75.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _75.MsgSubmitProposalResponseAminoMsg): _75.MsgSubmitProposalResponse;
                toAminoMsg(message: _75.MsgSubmitProposalResponse): _75.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _75.MsgSubmitProposalResponseProtoMsg): _75.MsgSubmitProposalResponse;
                toProto(message: _75.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _75.MsgSubmitProposalResponse): _75.MsgSubmitProposalResponseProtoMsg;
            };
            MsgExecLegacyContent: {
                typeUrl: string;
                encode(message: _75.MsgExecLegacyContent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _75.MsgExecLegacyContent;
                fromJSON(object: any): _75.MsgExecLegacyContent;
                toJSON(message: _75.MsgExecLegacyContent): unknown;
                fromPartial(object: Partial<_75.MsgExecLegacyContent>): _75.MsgExecLegacyContent;
                fromAmino(object: _75.MsgExecLegacyContentAmino): _75.MsgExecLegacyContent;
                toAmino(message: _75.MsgExecLegacyContent): _75.MsgExecLegacyContentAmino;
                fromAminoMsg(object: _75.MsgExecLegacyContentAminoMsg): _75.MsgExecLegacyContent;
                toAminoMsg(message: _75.MsgExecLegacyContent): _75.MsgExecLegacyContentAminoMsg;
                fromProtoMsg(message: _75.MsgExecLegacyContentProtoMsg): _75.MsgExecLegacyContent;
                toProto(message: _75.MsgExecLegacyContent): Uint8Array;
                toProtoMsg(message: _75.MsgExecLegacyContent): _75.MsgExecLegacyContentProtoMsg;
            };
            MsgExecLegacyContentResponse: {
                typeUrl: string;
                encode(_: _75.MsgExecLegacyContentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _75.MsgExecLegacyContentResponse;
                fromJSON(_: any): _75.MsgExecLegacyContentResponse;
                toJSON(_: _75.MsgExecLegacyContentResponse): unknown;
                fromPartial(_: Partial<_75.MsgExecLegacyContentResponse>): _75.MsgExecLegacyContentResponse;
                fromAmino(_: _75.MsgExecLegacyContentResponseAmino): _75.MsgExecLegacyContentResponse;
                toAmino(_: _75.MsgExecLegacyContentResponse): _75.MsgExecLegacyContentResponseAmino;
                fromAminoMsg(object: _75.MsgExecLegacyContentResponseAminoMsg): _75.MsgExecLegacyContentResponse;
                toAminoMsg(message: _75.MsgExecLegacyContentResponse): _75.MsgExecLegacyContentResponseAminoMsg;
                fromProtoMsg(message: _75.MsgExecLegacyContentResponseProtoMsg): _75.MsgExecLegacyContentResponse;
                toProto(message: _75.MsgExecLegacyContentResponse): Uint8Array;
                toProtoMsg(message: _75.MsgExecLegacyContentResponse): _75.MsgExecLegacyContentResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _75.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _75.MsgVote;
                fromJSON(object: any): _75.MsgVote;
                toJSON(message: _75.MsgVote): unknown;
                fromPartial(object: Partial<_75.MsgVote>): _75.MsgVote;
                fromAmino(object: _75.MsgVoteAmino): _75.MsgVote;
                toAmino(message: _75.MsgVote): _75.MsgVoteAmino;
                fromAminoMsg(object: _75.MsgVoteAminoMsg): _75.MsgVote;
                toAminoMsg(message: _75.MsgVote): _75.MsgVoteAminoMsg;
                fromProtoMsg(message: _75.MsgVoteProtoMsg): _75.MsgVote;
                toProto(message: _75.MsgVote): Uint8Array;
                toProtoMsg(message: _75.MsgVote): _75.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _75.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _75.MsgVoteResponse;
                fromJSON(_: any): _75.MsgVoteResponse;
                toJSON(_: _75.MsgVoteResponse): unknown;
                fromPartial(_: Partial<_75.MsgVoteResponse>): _75.MsgVoteResponse;
                fromAmino(_: _75.MsgVoteResponseAmino): _75.MsgVoteResponse;
                toAmino(_: _75.MsgVoteResponse): _75.MsgVoteResponseAmino;
                fromAminoMsg(object: _75.MsgVoteResponseAminoMsg): _75.MsgVoteResponse;
                toAminoMsg(message: _75.MsgVoteResponse): _75.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _75.MsgVoteResponseProtoMsg): _75.MsgVoteResponse;
                toProto(message: _75.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _75.MsgVoteResponse): _75.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                typeUrl: string;
                encode(message: _75.MsgVoteWeighted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _75.MsgVoteWeighted;
                fromJSON(object: any): _75.MsgVoteWeighted;
                toJSON(message: _75.MsgVoteWeighted): unknown;
                fromPartial(object: Partial<_75.MsgVoteWeighted>): _75.MsgVoteWeighted;
                fromAmino(object: _75.MsgVoteWeightedAmino): _75.MsgVoteWeighted;
                toAmino(message: _75.MsgVoteWeighted): _75.MsgVoteWeightedAmino;
                fromAminoMsg(object: _75.MsgVoteWeightedAminoMsg): _75.MsgVoteWeighted;
                toAminoMsg(message: _75.MsgVoteWeighted): _75.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _75.MsgVoteWeightedProtoMsg): _75.MsgVoteWeighted;
                toProto(message: _75.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _75.MsgVoteWeighted): _75.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                typeUrl: string;
                encode(_: _75.MsgVoteWeightedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _75.MsgVoteWeightedResponse;
                fromJSON(_: any): _75.MsgVoteWeightedResponse;
                toJSON(_: _75.MsgVoteWeightedResponse): unknown;
                fromPartial(_: Partial<_75.MsgVoteWeightedResponse>): _75.MsgVoteWeightedResponse;
                fromAmino(_: _75.MsgVoteWeightedResponseAmino): _75.MsgVoteWeightedResponse;
                toAmino(_: _75.MsgVoteWeightedResponse): _75.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _75.MsgVoteWeightedResponseAminoMsg): _75.MsgVoteWeightedResponse;
                toAminoMsg(message: _75.MsgVoteWeightedResponse): _75.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _75.MsgVoteWeightedResponseProtoMsg): _75.MsgVoteWeightedResponse;
                toProto(message: _75.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _75.MsgVoteWeightedResponse): _75.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _75.MsgDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _75.MsgDeposit;
                fromJSON(object: any): _75.MsgDeposit;
                toJSON(message: _75.MsgDeposit): unknown;
                fromPartial(object: Partial<_75.MsgDeposit>): _75.MsgDeposit;
                fromAmino(object: _75.MsgDepositAmino): _75.MsgDeposit;
                toAmino(message: _75.MsgDeposit): _75.MsgDepositAmino;
                fromAminoMsg(object: _75.MsgDepositAminoMsg): _75.MsgDeposit;
                toAminoMsg(message: _75.MsgDeposit): _75.MsgDepositAminoMsg;
                fromProtoMsg(message: _75.MsgDepositProtoMsg): _75.MsgDeposit;
                toProto(message: _75.MsgDeposit): Uint8Array;
                toProtoMsg(message: _75.MsgDeposit): _75.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(_: _75.MsgDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _75.MsgDepositResponse;
                fromJSON(_: any): _75.MsgDepositResponse;
                toJSON(_: _75.MsgDepositResponse): unknown;
                fromPartial(_: Partial<_75.MsgDepositResponse>): _75.MsgDepositResponse;
                fromAmino(_: _75.MsgDepositResponseAmino): _75.MsgDepositResponse;
                toAmino(_: _75.MsgDepositResponse): _75.MsgDepositResponseAmino;
                fromAminoMsg(object: _75.MsgDepositResponseAminoMsg): _75.MsgDepositResponse;
                toAminoMsg(message: _75.MsgDepositResponse): _75.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _75.MsgDepositResponseProtoMsg): _75.MsgDepositResponse;
                toProto(message: _75.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _75.MsgDepositResponse): _75.MsgDepositResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _75.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _75.MsgUpdateParams;
                fromJSON(object: any): _75.MsgUpdateParams;
                toJSON(message: _75.MsgUpdateParams): unknown;
                fromPartial(object: Partial<_75.MsgUpdateParams>): _75.MsgUpdateParams;
                fromAmino(object: _75.MsgUpdateParamsAmino): _75.MsgUpdateParams;
                toAmino(message: _75.MsgUpdateParams): _75.MsgUpdateParamsAmino;
                fromAminoMsg(object: _75.MsgUpdateParamsAminoMsg): _75.MsgUpdateParams;
                toAminoMsg(message: _75.MsgUpdateParams): _75.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _75.MsgUpdateParamsProtoMsg): _75.MsgUpdateParams;
                toProto(message: _75.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _75.MsgUpdateParams): _75.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _75.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _75.MsgUpdateParamsResponse;
                fromJSON(_: any): _75.MsgUpdateParamsResponse;
                toJSON(_: _75.MsgUpdateParamsResponse): unknown;
                fromPartial(_: Partial<_75.MsgUpdateParamsResponse>): _75.MsgUpdateParamsResponse;
                fromAmino(_: _75.MsgUpdateParamsResponseAmino): _75.MsgUpdateParamsResponse;
                toAmino(_: _75.MsgUpdateParamsResponse): _75.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _75.MsgUpdateParamsResponseAminoMsg): _75.MsgUpdateParamsResponse;
                toAminoMsg(message: _75.MsgUpdateParamsResponse): _75.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _75.MsgUpdateParamsResponseProtoMsg): _75.MsgUpdateParamsResponse;
                toProto(message: _75.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _75.MsgUpdateParamsResponse): _75.MsgUpdateParamsResponseProtoMsg;
            };
            MsgCancelProposal: {
                typeUrl: string;
                encode(message: _75.MsgCancelProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _75.MsgCancelProposal;
                fromJSON(object: any): _75.MsgCancelProposal;
                toJSON(message: _75.MsgCancelProposal): unknown;
                fromPartial(object: Partial<_75.MsgCancelProposal>): _75.MsgCancelProposal;
                fromAmino(object: _75.MsgCancelProposalAmino): _75.MsgCancelProposal;
                toAmino(message: _75.MsgCancelProposal): _75.MsgCancelProposalAmino;
                fromAminoMsg(object: _75.MsgCancelProposalAminoMsg): _75.MsgCancelProposal;
                toAminoMsg(message: _75.MsgCancelProposal): _75.MsgCancelProposalAminoMsg;
                fromProtoMsg(message: _75.MsgCancelProposalProtoMsg): _75.MsgCancelProposal;
                toProto(message: _75.MsgCancelProposal): Uint8Array;
                toProtoMsg(message: _75.MsgCancelProposal): _75.MsgCancelProposalProtoMsg;
            };
            MsgCancelProposalResponse: {
                typeUrl: string;
                encode(message: _75.MsgCancelProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _75.MsgCancelProposalResponse;
                fromJSON(object: any): _75.MsgCancelProposalResponse;
                toJSON(message: _75.MsgCancelProposalResponse): unknown;
                fromPartial(object: Partial<_75.MsgCancelProposalResponse>): _75.MsgCancelProposalResponse;
                fromAmino(object: _75.MsgCancelProposalResponseAmino): _75.MsgCancelProposalResponse;
                toAmino(message: _75.MsgCancelProposalResponse): _75.MsgCancelProposalResponseAmino;
                fromAminoMsg(object: _75.MsgCancelProposalResponseAminoMsg): _75.MsgCancelProposalResponse;
                toAminoMsg(message: _75.MsgCancelProposalResponse): _75.MsgCancelProposalResponseAminoMsg;
                fromProtoMsg(message: _75.MsgCancelProposalResponseProtoMsg): _75.MsgCancelProposalResponse;
                toProto(message: _75.MsgCancelProposalResponse): Uint8Array;
                toProtoMsg(message: _75.MsgCancelProposalResponse): _75.MsgCancelProposalResponseProtoMsg;
            };
            Cosmos_govv1beta1Content_InterfaceDecoder: (input: import("..").BinaryReader | Uint8Array) => import("../google/protobuf/any").Any | _60.CommunityPoolSpendProposal | _60.CommunityPoolSpendProposalWithDeposit | _102.ParameterChangeProposal | _125.SoftwareUpgradeProposal | _125.CancelSoftwareUpgradeProposal | import("../ibc/core/client/v1/client").ClientUpdateProposal | import("../ibc/core/client/v1/client").UpgradeProposal | _77.TextProposal;
            Cosmos_govv1beta1Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_govv1beta1Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryConstitutionRequest: {
                typeUrl: string;
                encode(_: _74.QueryConstitutionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _74.QueryConstitutionRequest;
                fromJSON(_: any): _74.QueryConstitutionRequest;
                toJSON(_: _74.QueryConstitutionRequest): unknown;
                fromPartial(_: Partial<_74.QueryConstitutionRequest>): _74.QueryConstitutionRequest;
                fromAmino(_: _74.QueryConstitutionRequestAmino): _74.QueryConstitutionRequest;
                toAmino(_: _74.QueryConstitutionRequest): _74.QueryConstitutionRequestAmino;
                fromAminoMsg(object: _74.QueryConstitutionRequestAminoMsg): _74.QueryConstitutionRequest;
                toAminoMsg(message: _74.QueryConstitutionRequest): _74.QueryConstitutionRequestAminoMsg;
                fromProtoMsg(message: _74.QueryConstitutionRequestProtoMsg): _74.QueryConstitutionRequest;
                toProto(message: _74.QueryConstitutionRequest): Uint8Array;
                toProtoMsg(message: _74.QueryConstitutionRequest): _74.QueryConstitutionRequestProtoMsg;
            };
            QueryConstitutionResponse: {
                typeUrl: string;
                encode(message: _74.QueryConstitutionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _74.QueryConstitutionResponse;
                fromJSON(object: any): _74.QueryConstitutionResponse;
                toJSON(message: _74.QueryConstitutionResponse): unknown;
                fromPartial(object: Partial<_74.QueryConstitutionResponse>): _74.QueryConstitutionResponse;
                fromAmino(object: _74.QueryConstitutionResponseAmino): _74.QueryConstitutionResponse;
                toAmino(message: _74.QueryConstitutionResponse): _74.QueryConstitutionResponseAmino;
                fromAminoMsg(object: _74.QueryConstitutionResponseAminoMsg): _74.QueryConstitutionResponse;
                toAminoMsg(message: _74.QueryConstitutionResponse): _74.QueryConstitutionResponseAminoMsg;
                fromProtoMsg(message: _74.QueryConstitutionResponseProtoMsg): _74.QueryConstitutionResponse;
                toProto(message: _74.QueryConstitutionResponse): Uint8Array;
                toProtoMsg(message: _74.QueryConstitutionResponse): _74.QueryConstitutionResponseProtoMsg;
            };
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _74.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _74.QueryProposalRequest;
                fromJSON(object: any): _74.QueryProposalRequest;
                toJSON(message: _74.QueryProposalRequest): unknown;
                fromPartial(object: Partial<_74.QueryProposalRequest>): _74.QueryProposalRequest;
                fromAmino(object: _74.QueryProposalRequestAmino): _74.QueryProposalRequest;
                toAmino(message: _74.QueryProposalRequest): _74.QueryProposalRequestAmino;
                fromAminoMsg(object: _74.QueryProposalRequestAminoMsg): _74.QueryProposalRequest;
                toAminoMsg(message: _74.QueryProposalRequest): _74.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _74.QueryProposalRequestProtoMsg): _74.QueryProposalRequest;
                toProto(message: _74.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _74.QueryProposalRequest): _74.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _74.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _74.QueryProposalResponse;
                fromJSON(object: any): _74.QueryProposalResponse;
                toJSON(message: _74.QueryProposalResponse): unknown;
                fromPartial(object: Partial<_74.QueryProposalResponse>): _74.QueryProposalResponse;
                fromAmino(object: _74.QueryProposalResponseAmino): _74.QueryProposalResponse;
                toAmino(message: _74.QueryProposalResponse): _74.QueryProposalResponseAmino;
                fromAminoMsg(object: _74.QueryProposalResponseAminoMsg): _74.QueryProposalResponse;
                toAminoMsg(message: _74.QueryProposalResponse): _74.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _74.QueryProposalResponseProtoMsg): _74.QueryProposalResponse;
                toProto(message: _74.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _74.QueryProposalResponse): _74.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                typeUrl: string;
                encode(message: _74.QueryProposalsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _74.QueryProposalsRequest;
                fromJSON(object: any): _74.QueryProposalsRequest;
                toJSON(message: _74.QueryProposalsRequest): unknown;
                fromPartial(object: Partial<_74.QueryProposalsRequest>): _74.QueryProposalsRequest;
                fromAmino(object: _74.QueryProposalsRequestAmino): _74.QueryProposalsRequest;
                toAmino(message: _74.QueryProposalsRequest): _74.QueryProposalsRequestAmino;
                fromAminoMsg(object: _74.QueryProposalsRequestAminoMsg): _74.QueryProposalsRequest;
                toAminoMsg(message: _74.QueryProposalsRequest): _74.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _74.QueryProposalsRequestProtoMsg): _74.QueryProposalsRequest;
                toProto(message: _74.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _74.QueryProposalsRequest): _74.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                typeUrl: string;
                encode(message: _74.QueryProposalsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _74.QueryProposalsResponse;
                fromJSON(object: any): _74.QueryProposalsResponse;
                toJSON(message: _74.QueryProposalsResponse): unknown;
                fromPartial(object: Partial<_74.QueryProposalsResponse>): _74.QueryProposalsResponse;
                fromAmino(object: _74.QueryProposalsResponseAmino): _74.QueryProposalsResponse;
                toAmino(message: _74.QueryProposalsResponse): _74.QueryProposalsResponseAmino;
                fromAminoMsg(object: _74.QueryProposalsResponseAminoMsg): _74.QueryProposalsResponse;
                toAminoMsg(message: _74.QueryProposalsResponse): _74.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _74.QueryProposalsResponseProtoMsg): _74.QueryProposalsResponse;
                toProto(message: _74.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _74.QueryProposalsResponse): _74.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                typeUrl: string;
                encode(message: _74.QueryVoteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _74.QueryVoteRequest;
                fromJSON(object: any): _74.QueryVoteRequest;
                toJSON(message: _74.QueryVoteRequest): unknown;
                fromPartial(object: Partial<_74.QueryVoteRequest>): _74.QueryVoteRequest;
                fromAmino(object: _74.QueryVoteRequestAmino): _74.QueryVoteRequest;
                toAmino(message: _74.QueryVoteRequest): _74.QueryVoteRequestAmino;
                fromAminoMsg(object: _74.QueryVoteRequestAminoMsg): _74.QueryVoteRequest;
                toAminoMsg(message: _74.QueryVoteRequest): _74.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _74.QueryVoteRequestProtoMsg): _74.QueryVoteRequest;
                toProto(message: _74.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _74.QueryVoteRequest): _74.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                typeUrl: string;
                encode(message: _74.QueryVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _74.QueryVoteResponse;
                fromJSON(object: any): _74.QueryVoteResponse;
                toJSON(message: _74.QueryVoteResponse): unknown;
                fromPartial(object: Partial<_74.QueryVoteResponse>): _74.QueryVoteResponse;
                fromAmino(object: _74.QueryVoteResponseAmino): _74.QueryVoteResponse;
                toAmino(message: _74.QueryVoteResponse): _74.QueryVoteResponseAmino;
                fromAminoMsg(object: _74.QueryVoteResponseAminoMsg): _74.QueryVoteResponse;
                toAminoMsg(message: _74.QueryVoteResponse): _74.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _74.QueryVoteResponseProtoMsg): _74.QueryVoteResponse;
                toProto(message: _74.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _74.QueryVoteResponse): _74.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                typeUrl: string;
                encode(message: _74.QueryVotesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _74.QueryVotesRequest;
                fromJSON(object: any): _74.QueryVotesRequest;
                toJSON(message: _74.QueryVotesRequest): unknown;
                fromPartial(object: Partial<_74.QueryVotesRequest>): _74.QueryVotesRequest;
                fromAmino(object: _74.QueryVotesRequestAmino): _74.QueryVotesRequest;
                toAmino(message: _74.QueryVotesRequest): _74.QueryVotesRequestAmino;
                fromAminoMsg(object: _74.QueryVotesRequestAminoMsg): _74.QueryVotesRequest;
                toAminoMsg(message: _74.QueryVotesRequest): _74.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _74.QueryVotesRequestProtoMsg): _74.QueryVotesRequest;
                toProto(message: _74.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _74.QueryVotesRequest): _74.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                typeUrl: string;
                encode(message: _74.QueryVotesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _74.QueryVotesResponse;
                fromJSON(object: any): _74.QueryVotesResponse;
                toJSON(message: _74.QueryVotesResponse): unknown;
                fromPartial(object: Partial<_74.QueryVotesResponse>): _74.QueryVotesResponse;
                fromAmino(object: _74.QueryVotesResponseAmino): _74.QueryVotesResponse;
                toAmino(message: _74.QueryVotesResponse): _74.QueryVotesResponseAmino;
                fromAminoMsg(object: _74.QueryVotesResponseAminoMsg): _74.QueryVotesResponse;
                toAminoMsg(message: _74.QueryVotesResponse): _74.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _74.QueryVotesResponseProtoMsg): _74.QueryVotesResponse;
                toProto(message: _74.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _74.QueryVotesResponse): _74.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _74.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _74.QueryParamsRequest;
                fromJSON(object: any): _74.QueryParamsRequest;
                toJSON(message: _74.QueryParamsRequest): unknown;
                fromPartial(object: Partial<_74.QueryParamsRequest>): _74.QueryParamsRequest;
                fromAmino(object: _74.QueryParamsRequestAmino): _74.QueryParamsRequest;
                toAmino(message: _74.QueryParamsRequest): _74.QueryParamsRequestAmino;
                fromAminoMsg(object: _74.QueryParamsRequestAminoMsg): _74.QueryParamsRequest;
                toAminoMsg(message: _74.QueryParamsRequest): _74.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _74.QueryParamsRequestProtoMsg): _74.QueryParamsRequest;
                toProto(message: _74.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _74.QueryParamsRequest): _74.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _74.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _74.QueryParamsResponse;
                fromJSON(object: any): _74.QueryParamsResponse;
                toJSON(message: _74.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_74.QueryParamsResponse>): _74.QueryParamsResponse;
                fromAmino(object: _74.QueryParamsResponseAmino): _74.QueryParamsResponse;
                toAmino(message: _74.QueryParamsResponse): _74.QueryParamsResponseAmino;
                fromAminoMsg(object: _74.QueryParamsResponseAminoMsg): _74.QueryParamsResponse;
                toAminoMsg(message: _74.QueryParamsResponse): _74.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _74.QueryParamsResponseProtoMsg): _74.QueryParamsResponse;
                toProto(message: _74.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _74.QueryParamsResponse): _74.QueryParamsResponseProtoMsg;
            };
            QueryDepositRequest: {
                typeUrl: string;
                encode(message: _74.QueryDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _74.QueryDepositRequest;
                fromJSON(object: any): _74.QueryDepositRequest;
                toJSON(message: _74.QueryDepositRequest): unknown;
                fromPartial(object: Partial<_74.QueryDepositRequest>): _74.QueryDepositRequest;
                fromAmino(object: _74.QueryDepositRequestAmino): _74.QueryDepositRequest;
                toAmino(message: _74.QueryDepositRequest): _74.QueryDepositRequestAmino;
                fromAminoMsg(object: _74.QueryDepositRequestAminoMsg): _74.QueryDepositRequest;
                toAminoMsg(message: _74.QueryDepositRequest): _74.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _74.QueryDepositRequestProtoMsg): _74.QueryDepositRequest;
                toProto(message: _74.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _74.QueryDepositRequest): _74.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                typeUrl: string;
                encode(message: _74.QueryDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _74.QueryDepositResponse;
                fromJSON(object: any): _74.QueryDepositResponse;
                toJSON(message: _74.QueryDepositResponse): unknown;
                fromPartial(object: Partial<_74.QueryDepositResponse>): _74.QueryDepositResponse;
                fromAmino(object: _74.QueryDepositResponseAmino): _74.QueryDepositResponse;
                toAmino(message: _74.QueryDepositResponse): _74.QueryDepositResponseAmino;
                fromAminoMsg(object: _74.QueryDepositResponseAminoMsg): _74.QueryDepositResponse;
                toAminoMsg(message: _74.QueryDepositResponse): _74.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _74.QueryDepositResponseProtoMsg): _74.QueryDepositResponse;
                toProto(message: _74.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _74.QueryDepositResponse): _74.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                encode(message: _74.QueryDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _74.QueryDepositsRequest;
                fromJSON(object: any): _74.QueryDepositsRequest;
                toJSON(message: _74.QueryDepositsRequest): unknown;
                fromPartial(object: Partial<_74.QueryDepositsRequest>): _74.QueryDepositsRequest;
                fromAmino(object: _74.QueryDepositsRequestAmino): _74.QueryDepositsRequest;
                toAmino(message: _74.QueryDepositsRequest): _74.QueryDepositsRequestAmino;
                fromAminoMsg(object: _74.QueryDepositsRequestAminoMsg): _74.QueryDepositsRequest;
                toAminoMsg(message: _74.QueryDepositsRequest): _74.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _74.QueryDepositsRequestProtoMsg): _74.QueryDepositsRequest;
                toProto(message: _74.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _74.QueryDepositsRequest): _74.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                encode(message: _74.QueryDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _74.QueryDepositsResponse;
                fromJSON(object: any): _74.QueryDepositsResponse;
                toJSON(message: _74.QueryDepositsResponse): unknown;
                fromPartial(object: Partial<_74.QueryDepositsResponse>): _74.QueryDepositsResponse;
                fromAmino(object: _74.QueryDepositsResponseAmino): _74.QueryDepositsResponse;
                toAmino(message: _74.QueryDepositsResponse): _74.QueryDepositsResponseAmino;
                fromAminoMsg(object: _74.QueryDepositsResponseAminoMsg): _74.QueryDepositsResponse;
                toAminoMsg(message: _74.QueryDepositsResponse): _74.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _74.QueryDepositsResponseProtoMsg): _74.QueryDepositsResponse;
                toProto(message: _74.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _74.QueryDepositsResponse): _74.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _74.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _74.QueryTallyResultRequest;
                fromJSON(object: any): _74.QueryTallyResultRequest;
                toJSON(message: _74.QueryTallyResultRequest): unknown;
                fromPartial(object: Partial<_74.QueryTallyResultRequest>): _74.QueryTallyResultRequest;
                fromAmino(object: _74.QueryTallyResultRequestAmino): _74.QueryTallyResultRequest;
                toAmino(message: _74.QueryTallyResultRequest): _74.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _74.QueryTallyResultRequestAminoMsg): _74.QueryTallyResultRequest;
                toAminoMsg(message: _74.QueryTallyResultRequest): _74.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _74.QueryTallyResultRequestProtoMsg): _74.QueryTallyResultRequest;
                toProto(message: _74.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _74.QueryTallyResultRequest): _74.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _74.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _74.QueryTallyResultResponse;
                fromJSON(object: any): _74.QueryTallyResultResponse;
                toJSON(message: _74.QueryTallyResultResponse): unknown;
                fromPartial(object: Partial<_74.QueryTallyResultResponse>): _74.QueryTallyResultResponse;
                fromAmino(object: _74.QueryTallyResultResponseAmino): _74.QueryTallyResultResponse;
                toAmino(message: _74.QueryTallyResultResponse): _74.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _74.QueryTallyResultResponseAminoMsg): _74.QueryTallyResultResponse;
                toAminoMsg(message: _74.QueryTallyResultResponse): _74.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _74.QueryTallyResultResponseProtoMsg): _74.QueryTallyResultResponse;
                toProto(message: _74.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _74.QueryTallyResultResponse): _74.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _73.VoteOption;
            voteOptionToJSON(object: _73.VoteOption): string;
            proposalStatusFromJSON(object: any): _73.ProposalStatus;
            proposalStatusToJSON(object: _73.ProposalStatus): string;
            VoteOption: typeof _73.VoteOption;
            VoteOptionSDKType: typeof _73.VoteOption;
            VoteOptionAmino: typeof _73.VoteOption;
            ProposalStatus: typeof _73.ProposalStatus;
            ProposalStatusSDKType: typeof _73.ProposalStatus;
            ProposalStatusAmino: typeof _73.ProposalStatus;
            WeightedVoteOption: {
                typeUrl: string;
                encode(message: _73.WeightedVoteOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _73.WeightedVoteOption;
                fromJSON(object: any): _73.WeightedVoteOption;
                toJSON(message: _73.WeightedVoteOption): unknown;
                fromPartial(object: Partial<_73.WeightedVoteOption>): _73.WeightedVoteOption;
                fromAmino(object: _73.WeightedVoteOptionAmino): _73.WeightedVoteOption;
                toAmino(message: _73.WeightedVoteOption): _73.WeightedVoteOptionAmino;
                fromAminoMsg(object: _73.WeightedVoteOptionAminoMsg): _73.WeightedVoteOption;
                toAminoMsg(message: _73.WeightedVoteOption): _73.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _73.WeightedVoteOptionProtoMsg): _73.WeightedVoteOption;
                toProto(message: _73.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _73.WeightedVoteOption): _73.WeightedVoteOptionProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                encode(message: _73.Deposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _73.Deposit;
                fromJSON(object: any): _73.Deposit;
                toJSON(message: _73.Deposit): unknown;
                fromPartial(object: Partial<_73.Deposit>): _73.Deposit;
                fromAmino(object: _73.DepositAmino): _73.Deposit;
                toAmino(message: _73.Deposit): _73.DepositAmino;
                fromAminoMsg(object: _73.DepositAminoMsg): _73.Deposit;
                toAminoMsg(message: _73.Deposit): _73.DepositAminoMsg;
                fromProtoMsg(message: _73.DepositProtoMsg): _73.Deposit;
                toProto(message: _73.Deposit): Uint8Array;
                toProtoMsg(message: _73.Deposit): _73.DepositProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _73.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _73.Proposal;
                fromJSON(object: any): _73.Proposal;
                toJSON(message: _73.Proposal): unknown;
                fromPartial(object: Partial<_73.Proposal>): _73.Proposal;
                fromAmino(object: _73.ProposalAmino): _73.Proposal;
                toAmino(message: _73.Proposal): _73.ProposalAmino;
                fromAminoMsg(object: _73.ProposalAminoMsg): _73.Proposal;
                toAminoMsg(message: _73.Proposal): _73.ProposalAminoMsg;
                fromProtoMsg(message: _73.ProposalProtoMsg): _73.Proposal;
                toProto(message: _73.Proposal): Uint8Array;
                toProtoMsg(message: _73.Proposal): _73.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _73.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _73.TallyResult;
                fromJSON(object: any): _73.TallyResult;
                toJSON(message: _73.TallyResult): unknown;
                fromPartial(object: Partial<_73.TallyResult>): _73.TallyResult;
                fromAmino(object: _73.TallyResultAmino): _73.TallyResult;
                toAmino(message: _73.TallyResult): _73.TallyResultAmino;
                fromAminoMsg(object: _73.TallyResultAminoMsg): _73.TallyResult;
                toAminoMsg(message: _73.TallyResult): _73.TallyResultAminoMsg;
                fromProtoMsg(message: _73.TallyResultProtoMsg): _73.TallyResult;
                toProto(message: _73.TallyResult): Uint8Array;
                toProtoMsg(message: _73.TallyResult): _73.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _73.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _73.Vote;
                fromJSON(object: any): _73.Vote;
                toJSON(message: _73.Vote): unknown;
                fromPartial(object: Partial<_73.Vote>): _73.Vote;
                fromAmino(object: _73.VoteAmino): _73.Vote;
                toAmino(message: _73.Vote): _73.VoteAmino;
                fromAminoMsg(object: _73.VoteAminoMsg): _73.Vote;
                toAminoMsg(message: _73.Vote): _73.VoteAminoMsg;
                fromProtoMsg(message: _73.VoteProtoMsg): _73.Vote;
                toProto(message: _73.Vote): Uint8Array;
                toProtoMsg(message: _73.Vote): _73.VoteProtoMsg;
            };
            DepositParams: {
                typeUrl: string;
                encode(message: _73.DepositParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _73.DepositParams;
                fromJSON(object: any): _73.DepositParams;
                toJSON(message: _73.DepositParams): unknown;
                fromPartial(object: Partial<_73.DepositParams>): _73.DepositParams;
                fromAmino(object: _73.DepositParamsAmino): _73.DepositParams;
                toAmino(message: _73.DepositParams): _73.DepositParamsAmino;
                fromAminoMsg(object: _73.DepositParamsAminoMsg): _73.DepositParams;
                toAminoMsg(message: _73.DepositParams): _73.DepositParamsAminoMsg;
                fromProtoMsg(message: _73.DepositParamsProtoMsg): _73.DepositParams;
                toProto(message: _73.DepositParams): Uint8Array;
                toProtoMsg(message: _73.DepositParams): _73.DepositParamsProtoMsg;
            };
            VotingParams: {
                typeUrl: string;
                encode(message: _73.VotingParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _73.VotingParams;
                fromJSON(object: any): _73.VotingParams;
                toJSON(message: _73.VotingParams): unknown;
                fromPartial(object: Partial<_73.VotingParams>): _73.VotingParams;
                fromAmino(object: _73.VotingParamsAmino): _73.VotingParams;
                toAmino(message: _73.VotingParams): _73.VotingParamsAmino;
                fromAminoMsg(object: _73.VotingParamsAminoMsg): _73.VotingParams;
                toAminoMsg(message: _73.VotingParams): _73.VotingParamsAminoMsg;
                fromProtoMsg(message: _73.VotingParamsProtoMsg): _73.VotingParams;
                toProto(message: _73.VotingParams): Uint8Array;
                toProtoMsg(message: _73.VotingParams): _73.VotingParamsProtoMsg;
            };
            TallyParams: {
                typeUrl: string;
                encode(message: _73.TallyParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _73.TallyParams;
                fromJSON(object: any): _73.TallyParams;
                toJSON(message: _73.TallyParams): unknown;
                fromPartial(object: Partial<_73.TallyParams>): _73.TallyParams;
                fromAmino(object: _73.TallyParamsAmino): _73.TallyParams;
                toAmino(message: _73.TallyParams): _73.TallyParamsAmino;
                fromAminoMsg(object: _73.TallyParamsAminoMsg): _73.TallyParams;
                toAminoMsg(message: _73.TallyParams): _73.TallyParamsAminoMsg;
                fromProtoMsg(message: _73.TallyParamsProtoMsg): _73.TallyParams;
                toProto(message: _73.TallyParams): Uint8Array;
                toProtoMsg(message: _73.TallyParams): _73.TallyParamsProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _73.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _73.Params;
                fromJSON(object: any): _73.Params;
                toJSON(message: _73.Params): unknown;
                fromPartial(object: Partial<_73.Params>): _73.Params;
                fromAmino(object: _73.ParamsAmino): _73.Params;
                toAmino(message: _73.Params): _73.ParamsAmino;
                fromAminoMsg(object: _73.ParamsAminoMsg): _73.Params;
                toAminoMsg(message: _73.Params): _73.ParamsAminoMsg;
                fromProtoMsg(message: _73.ParamsProtoMsg): _73.Params;
                toProto(message: _73.Params): Uint8Array;
                toProtoMsg(message: _73.Params): _73.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _72.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _72.GenesisState;
                fromJSON(object: any): _72.GenesisState;
                toJSON(message: _72.GenesisState): unknown;
                fromPartial(object: Partial<_72.GenesisState>): _72.GenesisState;
                fromAmino(object: _72.GenesisStateAmino): _72.GenesisState;
                toAmino(message: _72.GenesisState): _72.GenesisStateAmino;
                fromAminoMsg(object: _72.GenesisStateAminoMsg): _72.GenesisState;
                toAminoMsg(message: _72.GenesisState): _72.GenesisStateAminoMsg;
                fromProtoMsg(message: _72.GenesisStateProtoMsg): _72.GenesisState;
                toProto(message: _72.GenesisState): Uint8Array;
                toProtoMsg(message: _72.GenesisState): _72.GenesisStateProtoMsg;
            };
        };
        const v1beta1: {
            Msg: typeof _269.Msg;
            Query: typeof _252.Query;
            QueryClientImpl: typeof _252.QueryClientImpl;
            LCDQueryClient: typeof _234.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _79.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _79.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _79.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _79.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _79.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _79.MsgSubmitProposal;
                    };
                    vote(value: _79.MsgVote): {
                        typeUrl: string;
                        value: _79.MsgVote;
                    };
                    voteWeighted(value: _79.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _79.MsgVoteWeighted;
                    };
                    deposit(value: _79.MsgDeposit): {
                        typeUrl: string;
                        value: _79.MsgDeposit;
                    };
                };
                toJSON: {
                    submitProposal(value: _79.MsgSubmitProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    vote(value: _79.MsgVote): {
                        typeUrl: string;
                        value: unknown;
                    };
                    voteWeighted(value: _79.MsgVoteWeighted): {
                        typeUrl: string;
                        value: unknown;
                    };
                    deposit(value: _79.MsgDeposit): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _79.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _79.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _79.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _79.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _79.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _79.MsgSubmitProposal;
                    };
                    vote(value: _79.MsgVote): {
                        typeUrl: string;
                        value: _79.MsgVote;
                    };
                    voteWeighted(value: _79.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _79.MsgVoteWeighted;
                    };
                    deposit(value: _79.MsgDeposit): {
                        typeUrl: string;
                        value: _79.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _79.MsgSubmitProposal) => _79.MsgSubmitProposalAmino;
                    fromAmino: (object: _79.MsgSubmitProposalAmino) => _79.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _79.MsgVote) => _79.MsgVoteAmino;
                    fromAmino: (object: _79.MsgVoteAmino) => _79.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _79.MsgVoteWeighted) => _79.MsgVoteWeightedAmino;
                    fromAmino: (object: _79.MsgVoteWeightedAmino) => _79.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _79.MsgDeposit) => _79.MsgDepositAmino;
                    fromAmino: (object: _79.MsgDepositAmino) => _79.MsgDeposit;
                };
            };
            protobufPackage: "cosmos.gov.v1beta1";
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _79.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _79.MsgSubmitProposal;
                fromJSON(object: any): _79.MsgSubmitProposal;
                toJSON(message: _79.MsgSubmitProposal): unknown;
                fromPartial(object: Partial<_79.MsgSubmitProposal>): _79.MsgSubmitProposal;
                fromAmino(object: _79.MsgSubmitProposalAmino): _79.MsgSubmitProposal;
                toAmino(message: _79.MsgSubmitProposal): _79.MsgSubmitProposalAmino;
                fromAminoMsg(object: _79.MsgSubmitProposalAminoMsg): _79.MsgSubmitProposal;
                toAminoMsg(message: _79.MsgSubmitProposal): _79.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _79.MsgSubmitProposalProtoMsg): _79.MsgSubmitProposal;
                toProto(message: _79.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _79.MsgSubmitProposal): _79.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _79.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _79.MsgSubmitProposalResponse;
                fromJSON(object: any): _79.MsgSubmitProposalResponse;
                toJSON(message: _79.MsgSubmitProposalResponse): unknown;
                fromPartial(object: Partial<_79.MsgSubmitProposalResponse>): _79.MsgSubmitProposalResponse;
                fromAmino(object: _79.MsgSubmitProposalResponseAmino): _79.MsgSubmitProposalResponse;
                toAmino(message: _79.MsgSubmitProposalResponse): _79.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _79.MsgSubmitProposalResponseAminoMsg): _79.MsgSubmitProposalResponse;
                toAminoMsg(message: _79.MsgSubmitProposalResponse): _79.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _79.MsgSubmitProposalResponseProtoMsg): _79.MsgSubmitProposalResponse;
                toProto(message: _79.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _79.MsgSubmitProposalResponse): _79.MsgSubmitProposalResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _79.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _79.MsgVote;
                fromJSON(object: any): _79.MsgVote;
                toJSON(message: _79.MsgVote): unknown;
                fromPartial(object: Partial<_79.MsgVote>): _79.MsgVote;
                fromAmino(object: _79.MsgVoteAmino): _79.MsgVote;
                toAmino(message: _79.MsgVote): _79.MsgVoteAmino;
                fromAminoMsg(object: _79.MsgVoteAminoMsg): _79.MsgVote;
                toAminoMsg(message: _79.MsgVote): _79.MsgVoteAminoMsg;
                fromProtoMsg(message: _79.MsgVoteProtoMsg): _79.MsgVote;
                toProto(message: _79.MsgVote): Uint8Array;
                toProtoMsg(message: _79.MsgVote): _79.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _79.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _79.MsgVoteResponse;
                fromJSON(_: any): _79.MsgVoteResponse;
                toJSON(_: _79.MsgVoteResponse): unknown;
                fromPartial(_: Partial<_79.MsgVoteResponse>): _79.MsgVoteResponse;
                fromAmino(_: _79.MsgVoteResponseAmino): _79.MsgVoteResponse;
                toAmino(_: _79.MsgVoteResponse): _79.MsgVoteResponseAmino;
                fromAminoMsg(object: _79.MsgVoteResponseAminoMsg): _79.MsgVoteResponse;
                toAminoMsg(message: _79.MsgVoteResponse): _79.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _79.MsgVoteResponseProtoMsg): _79.MsgVoteResponse;
                toProto(message: _79.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _79.MsgVoteResponse): _79.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                typeUrl: string;
                encode(message: _79.MsgVoteWeighted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _79.MsgVoteWeighted;
                fromJSON(object: any): _79.MsgVoteWeighted;
                toJSON(message: _79.MsgVoteWeighted): unknown;
                fromPartial(object: Partial<_79.MsgVoteWeighted>): _79.MsgVoteWeighted;
                fromAmino(object: _79.MsgVoteWeightedAmino): _79.MsgVoteWeighted;
                toAmino(message: _79.MsgVoteWeighted): _79.MsgVoteWeightedAmino;
                fromAminoMsg(object: _79.MsgVoteWeightedAminoMsg): _79.MsgVoteWeighted;
                toAminoMsg(message: _79.MsgVoteWeighted): _79.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _79.MsgVoteWeightedProtoMsg): _79.MsgVoteWeighted;
                toProto(message: _79.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _79.MsgVoteWeighted): _79.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                typeUrl: string;
                encode(_: _79.MsgVoteWeightedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _79.MsgVoteWeightedResponse;
                fromJSON(_: any): _79.MsgVoteWeightedResponse;
                toJSON(_: _79.MsgVoteWeightedResponse): unknown;
                fromPartial(_: Partial<_79.MsgVoteWeightedResponse>): _79.MsgVoteWeightedResponse;
                fromAmino(_: _79.MsgVoteWeightedResponseAmino): _79.MsgVoteWeightedResponse;
                toAmino(_: _79.MsgVoteWeightedResponse): _79.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _79.MsgVoteWeightedResponseAminoMsg): _79.MsgVoteWeightedResponse;
                toAminoMsg(message: _79.MsgVoteWeightedResponse): _79.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _79.MsgVoteWeightedResponseProtoMsg): _79.MsgVoteWeightedResponse;
                toProto(message: _79.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _79.MsgVoteWeightedResponse): _79.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _79.MsgDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _79.MsgDeposit;
                fromJSON(object: any): _79.MsgDeposit;
                toJSON(message: _79.MsgDeposit): unknown;
                fromPartial(object: Partial<_79.MsgDeposit>): _79.MsgDeposit;
                fromAmino(object: _79.MsgDepositAmino): _79.MsgDeposit;
                toAmino(message: _79.MsgDeposit): _79.MsgDepositAmino;
                fromAminoMsg(object: _79.MsgDepositAminoMsg): _79.MsgDeposit;
                toAminoMsg(message: _79.MsgDeposit): _79.MsgDepositAminoMsg;
                fromProtoMsg(message: _79.MsgDepositProtoMsg): _79.MsgDeposit;
                toProto(message: _79.MsgDeposit): Uint8Array;
                toProtoMsg(message: _79.MsgDeposit): _79.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(_: _79.MsgDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _79.MsgDepositResponse;
                fromJSON(_: any): _79.MsgDepositResponse;
                toJSON(_: _79.MsgDepositResponse): unknown;
                fromPartial(_: Partial<_79.MsgDepositResponse>): _79.MsgDepositResponse;
                fromAmino(_: _79.MsgDepositResponseAmino): _79.MsgDepositResponse;
                toAmino(_: _79.MsgDepositResponse): _79.MsgDepositResponseAmino;
                fromAminoMsg(object: _79.MsgDepositResponseAminoMsg): _79.MsgDepositResponse;
                toAminoMsg(message: _79.MsgDepositResponse): _79.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _79.MsgDepositResponseProtoMsg): _79.MsgDepositResponse;
                toProto(message: _79.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _79.MsgDepositResponse): _79.MsgDepositResponseProtoMsg;
            };
            Cosmos_govv1beta1Content_InterfaceDecoder: (input: import("..").BinaryReader | Uint8Array) => import("../google/protobuf/any").Any | _60.CommunityPoolSpendProposal | _60.CommunityPoolSpendProposalWithDeposit | _102.ParameterChangeProposal | _125.SoftwareUpgradeProposal | _125.CancelSoftwareUpgradeProposal | import("../ibc/core/client/v1/client").ClientUpdateProposal | import("../ibc/core/client/v1/client").UpgradeProposal | _77.TextProposal;
            Cosmos_govv1beta1Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_govv1beta1Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _78.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _78.QueryProposalRequest;
                fromJSON(object: any): _78.QueryProposalRequest;
                toJSON(message: _78.QueryProposalRequest): unknown;
                fromPartial(object: Partial<_78.QueryProposalRequest>): _78.QueryProposalRequest;
                fromAmino(object: _78.QueryProposalRequestAmino): _78.QueryProposalRequest;
                toAmino(message: _78.QueryProposalRequest): _78.QueryProposalRequestAmino;
                fromAminoMsg(object: _78.QueryProposalRequestAminoMsg): _78.QueryProposalRequest;
                toAminoMsg(message: _78.QueryProposalRequest): _78.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _78.QueryProposalRequestProtoMsg): _78.QueryProposalRequest;
                toProto(message: _78.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _78.QueryProposalRequest): _78.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _78.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _78.QueryProposalResponse;
                fromJSON(object: any): _78.QueryProposalResponse;
                toJSON(message: _78.QueryProposalResponse): unknown;
                fromPartial(object: Partial<_78.QueryProposalResponse>): _78.QueryProposalResponse;
                fromAmino(object: _78.QueryProposalResponseAmino): _78.QueryProposalResponse;
                toAmino(message: _78.QueryProposalResponse): _78.QueryProposalResponseAmino;
                fromAminoMsg(object: _78.QueryProposalResponseAminoMsg): _78.QueryProposalResponse;
                toAminoMsg(message: _78.QueryProposalResponse): _78.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _78.QueryProposalResponseProtoMsg): _78.QueryProposalResponse;
                toProto(message: _78.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _78.QueryProposalResponse): _78.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                typeUrl: string;
                encode(message: _78.QueryProposalsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _78.QueryProposalsRequest;
                fromJSON(object: any): _78.QueryProposalsRequest;
                toJSON(message: _78.QueryProposalsRequest): unknown;
                fromPartial(object: Partial<_78.QueryProposalsRequest>): _78.QueryProposalsRequest;
                fromAmino(object: _78.QueryProposalsRequestAmino): _78.QueryProposalsRequest;
                toAmino(message: _78.QueryProposalsRequest): _78.QueryProposalsRequestAmino;
                fromAminoMsg(object: _78.QueryProposalsRequestAminoMsg): _78.QueryProposalsRequest;
                toAminoMsg(message: _78.QueryProposalsRequest): _78.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _78.QueryProposalsRequestProtoMsg): _78.QueryProposalsRequest;
                toProto(message: _78.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _78.QueryProposalsRequest): _78.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                typeUrl: string;
                encode(message: _78.QueryProposalsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _78.QueryProposalsResponse;
                fromJSON(object: any): _78.QueryProposalsResponse;
                toJSON(message: _78.QueryProposalsResponse): unknown;
                fromPartial(object: Partial<_78.QueryProposalsResponse>): _78.QueryProposalsResponse;
                fromAmino(object: _78.QueryProposalsResponseAmino): _78.QueryProposalsResponse;
                toAmino(message: _78.QueryProposalsResponse): _78.QueryProposalsResponseAmino;
                fromAminoMsg(object: _78.QueryProposalsResponseAminoMsg): _78.QueryProposalsResponse;
                toAminoMsg(message: _78.QueryProposalsResponse): _78.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _78.QueryProposalsResponseProtoMsg): _78.QueryProposalsResponse;
                toProto(message: _78.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _78.QueryProposalsResponse): _78.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                typeUrl: string;
                encode(message: _78.QueryVoteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _78.QueryVoteRequest;
                fromJSON(object: any): _78.QueryVoteRequest;
                toJSON(message: _78.QueryVoteRequest): unknown;
                fromPartial(object: Partial<_78.QueryVoteRequest>): _78.QueryVoteRequest;
                fromAmino(object: _78.QueryVoteRequestAmino): _78.QueryVoteRequest;
                toAmino(message: _78.QueryVoteRequest): _78.QueryVoteRequestAmino;
                fromAminoMsg(object: _78.QueryVoteRequestAminoMsg): _78.QueryVoteRequest;
                toAminoMsg(message: _78.QueryVoteRequest): _78.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _78.QueryVoteRequestProtoMsg): _78.QueryVoteRequest;
                toProto(message: _78.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _78.QueryVoteRequest): _78.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                typeUrl: string;
                encode(message: _78.QueryVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _78.QueryVoteResponse;
                fromJSON(object: any): _78.QueryVoteResponse;
                toJSON(message: _78.QueryVoteResponse): unknown;
                fromPartial(object: Partial<_78.QueryVoteResponse>): _78.QueryVoteResponse;
                fromAmino(object: _78.QueryVoteResponseAmino): _78.QueryVoteResponse;
                toAmino(message: _78.QueryVoteResponse): _78.QueryVoteResponseAmino;
                fromAminoMsg(object: _78.QueryVoteResponseAminoMsg): _78.QueryVoteResponse;
                toAminoMsg(message: _78.QueryVoteResponse): _78.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _78.QueryVoteResponseProtoMsg): _78.QueryVoteResponse;
                toProto(message: _78.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _78.QueryVoteResponse): _78.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                typeUrl: string;
                encode(message: _78.QueryVotesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _78.QueryVotesRequest;
                fromJSON(object: any): _78.QueryVotesRequest;
                toJSON(message: _78.QueryVotesRequest): unknown;
                fromPartial(object: Partial<_78.QueryVotesRequest>): _78.QueryVotesRequest;
                fromAmino(object: _78.QueryVotesRequestAmino): _78.QueryVotesRequest;
                toAmino(message: _78.QueryVotesRequest): _78.QueryVotesRequestAmino;
                fromAminoMsg(object: _78.QueryVotesRequestAminoMsg): _78.QueryVotesRequest;
                toAminoMsg(message: _78.QueryVotesRequest): _78.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _78.QueryVotesRequestProtoMsg): _78.QueryVotesRequest;
                toProto(message: _78.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _78.QueryVotesRequest): _78.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                typeUrl: string;
                encode(message: _78.QueryVotesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _78.QueryVotesResponse;
                fromJSON(object: any): _78.QueryVotesResponse;
                toJSON(message: _78.QueryVotesResponse): unknown;
                fromPartial(object: Partial<_78.QueryVotesResponse>): _78.QueryVotesResponse;
                fromAmino(object: _78.QueryVotesResponseAmino): _78.QueryVotesResponse;
                toAmino(message: _78.QueryVotesResponse): _78.QueryVotesResponseAmino;
                fromAminoMsg(object: _78.QueryVotesResponseAminoMsg): _78.QueryVotesResponse;
                toAminoMsg(message: _78.QueryVotesResponse): _78.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _78.QueryVotesResponseProtoMsg): _78.QueryVotesResponse;
                toProto(message: _78.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _78.QueryVotesResponse): _78.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _78.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _78.QueryParamsRequest;
                fromJSON(object: any): _78.QueryParamsRequest;
                toJSON(message: _78.QueryParamsRequest): unknown;
                fromPartial(object: Partial<_78.QueryParamsRequest>): _78.QueryParamsRequest;
                fromAmino(object: _78.QueryParamsRequestAmino): _78.QueryParamsRequest;
                toAmino(message: _78.QueryParamsRequest): _78.QueryParamsRequestAmino;
                fromAminoMsg(object: _78.QueryParamsRequestAminoMsg): _78.QueryParamsRequest;
                toAminoMsg(message: _78.QueryParamsRequest): _78.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _78.QueryParamsRequestProtoMsg): _78.QueryParamsRequest;
                toProto(message: _78.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _78.QueryParamsRequest): _78.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _78.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _78.QueryParamsResponse;
                fromJSON(object: any): _78.QueryParamsResponse;
                toJSON(message: _78.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_78.QueryParamsResponse>): _78.QueryParamsResponse;
                fromAmino(object: _78.QueryParamsResponseAmino): _78.QueryParamsResponse;
                toAmino(message: _78.QueryParamsResponse): _78.QueryParamsResponseAmino;
                fromAminoMsg(object: _78.QueryParamsResponseAminoMsg): _78.QueryParamsResponse;
                toAminoMsg(message: _78.QueryParamsResponse): _78.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _78.QueryParamsResponseProtoMsg): _78.QueryParamsResponse;
                toProto(message: _78.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _78.QueryParamsResponse): _78.QueryParamsResponseProtoMsg;
            };
            QueryDepositRequest: {
                typeUrl: string;
                encode(message: _78.QueryDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _78.QueryDepositRequest;
                fromJSON(object: any): _78.QueryDepositRequest;
                toJSON(message: _78.QueryDepositRequest): unknown;
                fromPartial(object: Partial<_78.QueryDepositRequest>): _78.QueryDepositRequest;
                fromAmino(object: _78.QueryDepositRequestAmino): _78.QueryDepositRequest;
                toAmino(message: _78.QueryDepositRequest): _78.QueryDepositRequestAmino;
                fromAminoMsg(object: _78.QueryDepositRequestAminoMsg): _78.QueryDepositRequest;
                toAminoMsg(message: _78.QueryDepositRequest): _78.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _78.QueryDepositRequestProtoMsg): _78.QueryDepositRequest;
                toProto(message: _78.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _78.QueryDepositRequest): _78.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                typeUrl: string;
                encode(message: _78.QueryDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _78.QueryDepositResponse;
                fromJSON(object: any): _78.QueryDepositResponse;
                toJSON(message: _78.QueryDepositResponse): unknown;
                fromPartial(object: Partial<_78.QueryDepositResponse>): _78.QueryDepositResponse;
                fromAmino(object: _78.QueryDepositResponseAmino): _78.QueryDepositResponse;
                toAmino(message: _78.QueryDepositResponse): _78.QueryDepositResponseAmino;
                fromAminoMsg(object: _78.QueryDepositResponseAminoMsg): _78.QueryDepositResponse;
                toAminoMsg(message: _78.QueryDepositResponse): _78.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _78.QueryDepositResponseProtoMsg): _78.QueryDepositResponse;
                toProto(message: _78.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _78.QueryDepositResponse): _78.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                encode(message: _78.QueryDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _78.QueryDepositsRequest;
                fromJSON(object: any): _78.QueryDepositsRequest;
                toJSON(message: _78.QueryDepositsRequest): unknown;
                fromPartial(object: Partial<_78.QueryDepositsRequest>): _78.QueryDepositsRequest;
                fromAmino(object: _78.QueryDepositsRequestAmino): _78.QueryDepositsRequest;
                toAmino(message: _78.QueryDepositsRequest): _78.QueryDepositsRequestAmino;
                fromAminoMsg(object: _78.QueryDepositsRequestAminoMsg): _78.QueryDepositsRequest;
                toAminoMsg(message: _78.QueryDepositsRequest): _78.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _78.QueryDepositsRequestProtoMsg): _78.QueryDepositsRequest;
                toProto(message: _78.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _78.QueryDepositsRequest): _78.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                encode(message: _78.QueryDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _78.QueryDepositsResponse;
                fromJSON(object: any): _78.QueryDepositsResponse;
                toJSON(message: _78.QueryDepositsResponse): unknown;
                fromPartial(object: Partial<_78.QueryDepositsResponse>): _78.QueryDepositsResponse;
                fromAmino(object: _78.QueryDepositsResponseAmino): _78.QueryDepositsResponse;
                toAmino(message: _78.QueryDepositsResponse): _78.QueryDepositsResponseAmino;
                fromAminoMsg(object: _78.QueryDepositsResponseAminoMsg): _78.QueryDepositsResponse;
                toAminoMsg(message: _78.QueryDepositsResponse): _78.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _78.QueryDepositsResponseProtoMsg): _78.QueryDepositsResponse;
                toProto(message: _78.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _78.QueryDepositsResponse): _78.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _78.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _78.QueryTallyResultRequest;
                fromJSON(object: any): _78.QueryTallyResultRequest;
                toJSON(message: _78.QueryTallyResultRequest): unknown;
                fromPartial(object: Partial<_78.QueryTallyResultRequest>): _78.QueryTallyResultRequest;
                fromAmino(object: _78.QueryTallyResultRequestAmino): _78.QueryTallyResultRequest;
                toAmino(message: _78.QueryTallyResultRequest): _78.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _78.QueryTallyResultRequestAminoMsg): _78.QueryTallyResultRequest;
                toAminoMsg(message: _78.QueryTallyResultRequest): _78.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _78.QueryTallyResultRequestProtoMsg): _78.QueryTallyResultRequest;
                toProto(message: _78.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _78.QueryTallyResultRequest): _78.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _78.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _78.QueryTallyResultResponse;
                fromJSON(object: any): _78.QueryTallyResultResponse;
                toJSON(message: _78.QueryTallyResultResponse): unknown;
                fromPartial(object: Partial<_78.QueryTallyResultResponse>): _78.QueryTallyResultResponse;
                fromAmino(object: _78.QueryTallyResultResponseAmino): _78.QueryTallyResultResponse;
                toAmino(message: _78.QueryTallyResultResponse): _78.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _78.QueryTallyResultResponseAminoMsg): _78.QueryTallyResultResponse;
                toAminoMsg(message: _78.QueryTallyResultResponse): _78.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _78.QueryTallyResultResponseProtoMsg): _78.QueryTallyResultResponse;
                toProto(message: _78.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _78.QueryTallyResultResponse): _78.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _77.VoteOption;
            voteOptionToJSON(object: _77.VoteOption): string;
            proposalStatusFromJSON(object: any): _77.ProposalStatus;
            proposalStatusToJSON(object: _77.ProposalStatus): string;
            VoteOption: typeof _77.VoteOption;
            VoteOptionSDKType: typeof _77.VoteOption;
            VoteOptionAmino: typeof _77.VoteOption;
            ProposalStatus: typeof _77.ProposalStatus;
            ProposalStatusSDKType: typeof _77.ProposalStatus;
            ProposalStatusAmino: typeof _77.ProposalStatus;
            WeightedVoteOption: {
                typeUrl: string;
                encode(message: _77.WeightedVoteOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _77.WeightedVoteOption;
                fromJSON(object: any): _77.WeightedVoteOption;
                toJSON(message: _77.WeightedVoteOption): unknown;
                fromPartial(object: Partial<_77.WeightedVoteOption>): _77.WeightedVoteOption;
                fromAmino(object: _77.WeightedVoteOptionAmino): _77.WeightedVoteOption;
                toAmino(message: _77.WeightedVoteOption): _77.WeightedVoteOptionAmino;
                fromAminoMsg(object: _77.WeightedVoteOptionAminoMsg): _77.WeightedVoteOption;
                toAminoMsg(message: _77.WeightedVoteOption): _77.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _77.WeightedVoteOptionProtoMsg): _77.WeightedVoteOption;
                toProto(message: _77.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _77.WeightedVoteOption): _77.WeightedVoteOptionProtoMsg;
            };
            TextProposal: {
                typeUrl: string;
                encode(message: _77.TextProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _77.TextProposal;
                fromJSON(object: any): _77.TextProposal;
                toJSON(message: _77.TextProposal): unknown;
                fromPartial(object: Partial<_77.TextProposal>): _77.TextProposal;
                fromAmino(object: _77.TextProposalAmino): _77.TextProposal;
                toAmino(message: _77.TextProposal): _77.TextProposalAmino;
                fromAminoMsg(object: _77.TextProposalAminoMsg): _77.TextProposal;
                toAminoMsg(message: _77.TextProposal): _77.TextProposalAminoMsg;
                fromProtoMsg(message: _77.TextProposalProtoMsg): _77.TextProposal;
                toProto(message: _77.TextProposal): Uint8Array;
                toProtoMsg(message: _77.TextProposal): _77.TextProposalProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                encode(message: _77.Deposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _77.Deposit;
                fromJSON(object: any): _77.Deposit;
                toJSON(message: _77.Deposit): unknown;
                fromPartial(object: Partial<_77.Deposit>): _77.Deposit;
                fromAmino(object: _77.DepositAmino): _77.Deposit;
                toAmino(message: _77.Deposit): _77.DepositAmino;
                fromAminoMsg(object: _77.DepositAminoMsg): _77.Deposit;
                toAminoMsg(message: _77.Deposit): _77.DepositAminoMsg;
                fromProtoMsg(message: _77.DepositProtoMsg): _77.Deposit;
                toProto(message: _77.Deposit): Uint8Array;
                toProtoMsg(message: _77.Deposit): _77.DepositProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _77.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _77.Proposal;
                fromJSON(object: any): _77.Proposal;
                toJSON(message: _77.Proposal): unknown;
                fromPartial(object: Partial<_77.Proposal>): _77.Proposal;
                fromAmino(object: _77.ProposalAmino): _77.Proposal;
                toAmino(message: _77.Proposal): _77.ProposalAmino;
                fromAminoMsg(object: _77.ProposalAminoMsg): _77.Proposal;
                toAminoMsg(message: _77.Proposal): _77.ProposalAminoMsg;
                fromProtoMsg(message: _77.ProposalProtoMsg): _77.Proposal;
                toProto(message: _77.Proposal): Uint8Array;
                toProtoMsg(message: _77.Proposal): _77.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _77.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _77.TallyResult;
                fromJSON(object: any): _77.TallyResult;
                toJSON(message: _77.TallyResult): unknown;
                fromPartial(object: Partial<_77.TallyResult>): _77.TallyResult;
                fromAmino(object: _77.TallyResultAmino): _77.TallyResult;
                toAmino(message: _77.TallyResult): _77.TallyResultAmino;
                fromAminoMsg(object: _77.TallyResultAminoMsg): _77.TallyResult;
                toAminoMsg(message: _77.TallyResult): _77.TallyResultAminoMsg;
                fromProtoMsg(message: _77.TallyResultProtoMsg): _77.TallyResult;
                toProto(message: _77.TallyResult): Uint8Array;
                toProtoMsg(message: _77.TallyResult): _77.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _77.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _77.Vote;
                fromJSON(object: any): _77.Vote;
                toJSON(message: _77.Vote): unknown;
                fromPartial(object: Partial<_77.Vote>): _77.Vote;
                fromAmino(object: _77.VoteAmino): _77.Vote;
                toAmino(message: _77.Vote): _77.VoteAmino;
                fromAminoMsg(object: _77.VoteAminoMsg): _77.Vote;
                toAminoMsg(message: _77.Vote): _77.VoteAminoMsg;
                fromProtoMsg(message: _77.VoteProtoMsg): _77.Vote;
                toProto(message: _77.Vote): Uint8Array;
                toProtoMsg(message: _77.Vote): _77.VoteProtoMsg;
            };
            DepositParams: {
                typeUrl: string;
                encode(message: _77.DepositParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _77.DepositParams;
                fromJSON(object: any): _77.DepositParams;
                toJSON(message: _77.DepositParams): unknown;
                fromPartial(object: Partial<_77.DepositParams>): _77.DepositParams;
                fromAmino(object: _77.DepositParamsAmino): _77.DepositParams;
                toAmino(message: _77.DepositParams): _77.DepositParamsAmino;
                fromAminoMsg(object: _77.DepositParamsAminoMsg): _77.DepositParams;
                toAminoMsg(message: _77.DepositParams): _77.DepositParamsAminoMsg;
                fromProtoMsg(message: _77.DepositParamsProtoMsg): _77.DepositParams;
                toProto(message: _77.DepositParams): Uint8Array;
                toProtoMsg(message: _77.DepositParams): _77.DepositParamsProtoMsg;
            };
            VotingParams: {
                typeUrl: string;
                encode(message: _77.VotingParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _77.VotingParams;
                fromJSON(object: any): _77.VotingParams;
                toJSON(message: _77.VotingParams): unknown;
                fromPartial(object: Partial<_77.VotingParams>): _77.VotingParams;
                fromAmino(object: _77.VotingParamsAmino): _77.VotingParams;
                toAmino(message: _77.VotingParams): _77.VotingParamsAmino;
                fromAminoMsg(object: _77.VotingParamsAminoMsg): _77.VotingParams;
                toAminoMsg(message: _77.VotingParams): _77.VotingParamsAminoMsg;
                fromProtoMsg(message: _77.VotingParamsProtoMsg): _77.VotingParams;
                toProto(message: _77.VotingParams): Uint8Array;
                toProtoMsg(message: _77.VotingParams): _77.VotingParamsProtoMsg;
            };
            TallyParams: {
                typeUrl: string;
                encode(message: _77.TallyParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _77.TallyParams;
                fromJSON(object: any): _77.TallyParams;
                toJSON(message: _77.TallyParams): unknown;
                fromPartial(object: Partial<_77.TallyParams>): _77.TallyParams;
                fromAmino(object: _77.TallyParamsAmino): _77.TallyParams;
                toAmino(message: _77.TallyParams): _77.TallyParamsAmino;
                fromAminoMsg(object: _77.TallyParamsAminoMsg): _77.TallyParams;
                toAminoMsg(message: _77.TallyParams): _77.TallyParamsAminoMsg;
                fromProtoMsg(message: _77.TallyParamsProtoMsg): _77.TallyParams;
                toProto(message: _77.TallyParams): Uint8Array;
                toProtoMsg(message: _77.TallyParams): _77.TallyParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _76.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _76.GenesisState;
                fromJSON(object: any): _76.GenesisState;
                toJSON(message: _76.GenesisState): unknown;
                fromPartial(object: Partial<_76.GenesisState>): _76.GenesisState;
                fromAmino(object: _76.GenesisStateAmino): _76.GenesisState;
                toAmino(message: _76.GenesisState): _76.GenesisStateAmino;
                fromAminoMsg(object: _76.GenesisStateAminoMsg): _76.GenesisState;
                toAminoMsg(message: _76.GenesisState): _76.GenesisStateAminoMsg;
                fromProtoMsg(message: _76.GenesisStateProtoMsg): _76.GenesisState;
                toProto(message: _76.GenesisState): Uint8Array;
                toProtoMsg(message: _76.GenesisState): _76.GenesisStateProtoMsg;
            };
        };
    }
    namespace group {
        namespace module {
            const v1: {
                protobufPackage: "cosmos.group.module.v1";
                Module: {
                    typeUrl: string;
                    encode(message: _80.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _80.Module;
                    fromJSON(object: any): _80.Module;
                    toJSON(message: _80.Module): unknown;
                    fromPartial(object: Partial<_80.Module>): _80.Module;
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
        const v1: {
            Msg: typeof _270.Msg;
            Query: typeof _253.Query;
            QueryClientImpl: typeof _253.QueryClientImpl;
            LCDQueryClient: typeof _235.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createGroup(value: _84.MsgCreateGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMembers(value: _84.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupAdmin(value: _84.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMetadata(value: _84.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupPolicy(value: _84.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupWithPolicy(value: _84.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyAdmin(value: _84.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyDecisionPolicy(value: _84.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyMetadata(value: _84.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    submitProposal(value: _84.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawProposal(value: _84.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _84.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _84.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    leaveGroup(value: _84.MsgLeaveGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createGroup(value: _84.MsgCreateGroup): {
                        typeUrl: string;
                        value: _84.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _84.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _84.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _84.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _84.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _84.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _84.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _84.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _84.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _84.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _84.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _84.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _84.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _84.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _84.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _84.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _84.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _84.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _84.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _84.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _84.MsgWithdrawProposal;
                    };
                    vote(value: _84.MsgVote): {
                        typeUrl: string;
                        value: _84.MsgVote;
                    };
                    exec(value: _84.MsgExec): {
                        typeUrl: string;
                        value: _84.MsgExec;
                    };
                    leaveGroup(value: _84.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _84.MsgLeaveGroup;
                    };
                };
                toJSON: {
                    createGroup(value: _84.MsgCreateGroup): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupMembers(value: _84.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupAdmin(value: _84.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupMetadata(value: _84.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createGroupPolicy(value: _84.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createGroupWithPolicy(value: _84.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupPolicyAdmin(value: _84.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupPolicyDecisionPolicy(value: _84.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupPolicyMetadata(value: _84.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: unknown;
                    };
                    submitProposal(value: _84.MsgSubmitProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdrawProposal(value: _84.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    vote(value: _84.MsgVote): {
                        typeUrl: string;
                        value: unknown;
                    };
                    exec(value: _84.MsgExec): {
                        typeUrl: string;
                        value: unknown;
                    };
                    leaveGroup(value: _84.MsgLeaveGroup): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createGroup(value: any): {
                        typeUrl: string;
                        value: _84.MsgCreateGroup;
                    };
                    updateGroupMembers(value: any): {
                        typeUrl: string;
                        value: _84.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: any): {
                        typeUrl: string;
                        value: _84.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: any): {
                        typeUrl: string;
                        value: _84.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: any): {
                        typeUrl: string;
                        value: _84.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: any): {
                        typeUrl: string;
                        value: _84.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: any): {
                        typeUrl: string;
                        value: _84.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: any): {
                        typeUrl: string;
                        value: _84.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: any): {
                        typeUrl: string;
                        value: _84.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _84.MsgSubmitProposal;
                    };
                    withdrawProposal(value: any): {
                        typeUrl: string;
                        value: _84.MsgWithdrawProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _84.MsgVote;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _84.MsgExec;
                    };
                    leaveGroup(value: any): {
                        typeUrl: string;
                        value: _84.MsgLeaveGroup;
                    };
                };
                fromPartial: {
                    createGroup(value: _84.MsgCreateGroup): {
                        typeUrl: string;
                        value: _84.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _84.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _84.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _84.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _84.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _84.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _84.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _84.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _84.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _84.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _84.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _84.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _84.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _84.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _84.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _84.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _84.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _84.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _84.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _84.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _84.MsgWithdrawProposal;
                    };
                    vote(value: _84.MsgVote): {
                        typeUrl: string;
                        value: _84.MsgVote;
                    };
                    exec(value: _84.MsgExec): {
                        typeUrl: string;
                        value: _84.MsgExec;
                    };
                    leaveGroup(value: _84.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _84.MsgLeaveGroup;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.group.v1.MsgCreateGroup": {
                    aminoType: string;
                    toAmino: (message: _84.MsgCreateGroup) => _84.MsgCreateGroupAmino;
                    fromAmino: (object: _84.MsgCreateGroupAmino) => _84.MsgCreateGroup;
                };
                "/cosmos.group.v1.MsgUpdateGroupMembers": {
                    aminoType: string;
                    toAmino: (message: _84.MsgUpdateGroupMembers) => _84.MsgUpdateGroupMembersAmino;
                    fromAmino: (object: _84.MsgUpdateGroupMembersAmino) => _84.MsgUpdateGroupMembers;
                };
                "/cosmos.group.v1.MsgUpdateGroupAdmin": {
                    aminoType: string;
                    toAmino: (message: _84.MsgUpdateGroupAdmin) => _84.MsgUpdateGroupAdminAmino;
                    fromAmino: (object: _84.MsgUpdateGroupAdminAmino) => _84.MsgUpdateGroupAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupMetadata": {
                    aminoType: string;
                    toAmino: (message: _84.MsgUpdateGroupMetadata) => _84.MsgUpdateGroupMetadataAmino;
                    fromAmino: (object: _84.MsgUpdateGroupMetadataAmino) => _84.MsgUpdateGroupMetadata;
                };
                "/cosmos.group.v1.MsgCreateGroupPolicy": {
                    aminoType: string;
                    toAmino: (message: _84.MsgCreateGroupPolicy) => _84.MsgCreateGroupPolicyAmino;
                    fromAmino: (object: _84.MsgCreateGroupPolicyAmino) => _84.MsgCreateGroupPolicy;
                };
                "/cosmos.group.v1.MsgCreateGroupWithPolicy": {
                    aminoType: string;
                    toAmino: (message: _84.MsgCreateGroupWithPolicy) => _84.MsgCreateGroupWithPolicyAmino;
                    fromAmino: (object: _84.MsgCreateGroupWithPolicyAmino) => _84.MsgCreateGroupWithPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin": {
                    aminoType: string;
                    toAmino: (message: _84.MsgUpdateGroupPolicyAdmin) => _84.MsgUpdateGroupPolicyAdminAmino;
                    fromAmino: (object: _84.MsgUpdateGroupPolicyAdminAmino) => _84.MsgUpdateGroupPolicyAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy": {
                    aminoType: string;
                    toAmino: (message: _84.MsgUpdateGroupPolicyDecisionPolicy) => _84.MsgUpdateGroupPolicyDecisionPolicyAmino;
                    fromAmino: (object: _84.MsgUpdateGroupPolicyDecisionPolicyAmino) => _84.MsgUpdateGroupPolicyDecisionPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata": {
                    aminoType: string;
                    toAmino: (message: _84.MsgUpdateGroupPolicyMetadata) => _84.MsgUpdateGroupPolicyMetadataAmino;
                    fromAmino: (object: _84.MsgUpdateGroupPolicyMetadataAmino) => _84.MsgUpdateGroupPolicyMetadata;
                };
                "/cosmos.group.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _84.MsgSubmitProposal) => _84.MsgSubmitProposalAmino;
                    fromAmino: (object: _84.MsgSubmitProposalAmino) => _84.MsgSubmitProposal;
                };
                "/cosmos.group.v1.MsgWithdrawProposal": {
                    aminoType: string;
                    toAmino: (message: _84.MsgWithdrawProposal) => _84.MsgWithdrawProposalAmino;
                    fromAmino: (object: _84.MsgWithdrawProposalAmino) => _84.MsgWithdrawProposal;
                };
                "/cosmos.group.v1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _84.MsgVote) => _84.MsgVoteAmino;
                    fromAmino: (object: _84.MsgVoteAmino) => _84.MsgVote;
                };
                "/cosmos.group.v1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _84.MsgExec) => _84.MsgExecAmino;
                    fromAmino: (object: _84.MsgExecAmino) => _84.MsgExec;
                };
                "/cosmos.group.v1.MsgLeaveGroup": {
                    aminoType: string;
                    toAmino: (message: _84.MsgLeaveGroup) => _84.MsgLeaveGroupAmino;
                    fromAmino: (object: _84.MsgLeaveGroupAmino) => _84.MsgLeaveGroup;
                };
            };
            voteOptionFromJSON(object: any): _85.VoteOption;
            voteOptionToJSON(object: _85.VoteOption): string;
            proposalStatusFromJSON(object: any): _85.ProposalStatus;
            proposalStatusToJSON(object: _85.ProposalStatus): string;
            proposalExecutorResultFromJSON(object: any): _85.ProposalExecutorResult;
            proposalExecutorResultToJSON(object: _85.ProposalExecutorResult): string;
            protobufPackage: "cosmos.group.v1";
            VoteOption: typeof _85.VoteOption;
            VoteOptionSDKType: typeof _85.VoteOption;
            VoteOptionAmino: typeof _85.VoteOption;
            ProposalStatus: typeof _85.ProposalStatus;
            ProposalStatusSDKType: typeof _85.ProposalStatus;
            ProposalStatusAmino: typeof _85.ProposalStatus;
            ProposalExecutorResult: typeof _85.ProposalExecutorResult;
            ProposalExecutorResultSDKType: typeof _85.ProposalExecutorResult;
            ProposalExecutorResultAmino: typeof _85.ProposalExecutorResult;
            Member: {
                typeUrl: string;
                encode(message: _85.Member, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _85.Member;
                fromJSON(object: any): _85.Member;
                toJSON(message: _85.Member): unknown;
                fromPartial(object: Partial<_85.Member>): _85.Member;
                fromAmino(object: _85.MemberAmino): _85.Member;
                toAmino(message: _85.Member): _85.MemberAmino;
                fromAminoMsg(object: _85.MemberAminoMsg): _85.Member;
                toAminoMsg(message: _85.Member): _85.MemberAminoMsg;
                fromProtoMsg(message: _85.MemberProtoMsg): _85.Member;
                toProto(message: _85.Member): Uint8Array;
                toProtoMsg(message: _85.Member): _85.MemberProtoMsg;
            };
            MemberRequest: {
                typeUrl: string;
                encode(message: _85.MemberRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _85.MemberRequest;
                fromJSON(object: any): _85.MemberRequest;
                toJSON(message: _85.MemberRequest): unknown;
                fromPartial(object: Partial<_85.MemberRequest>): _85.MemberRequest;
                fromAmino(object: _85.MemberRequestAmino): _85.MemberRequest;
                toAmino(message: _85.MemberRequest): _85.MemberRequestAmino;
                fromAminoMsg(object: _85.MemberRequestAminoMsg): _85.MemberRequest;
                toAminoMsg(message: _85.MemberRequest): _85.MemberRequestAminoMsg;
                fromProtoMsg(message: _85.MemberRequestProtoMsg): _85.MemberRequest;
                toProto(message: _85.MemberRequest): Uint8Array;
                toProtoMsg(message: _85.MemberRequest): _85.MemberRequestProtoMsg;
            };
            ThresholdDecisionPolicy: {
                typeUrl: string;
                encode(message: _85.ThresholdDecisionPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _85.ThresholdDecisionPolicy;
                fromJSON(object: any): _85.ThresholdDecisionPolicy;
                toJSON(message: _85.ThresholdDecisionPolicy): unknown;
                fromPartial(object: Partial<_85.ThresholdDecisionPolicy>): _85.ThresholdDecisionPolicy;
                fromAmino(object: _85.ThresholdDecisionPolicyAmino): _85.ThresholdDecisionPolicy;
                toAmino(message: _85.ThresholdDecisionPolicy): _85.ThresholdDecisionPolicyAmino;
                fromAminoMsg(object: _85.ThresholdDecisionPolicyAminoMsg): _85.ThresholdDecisionPolicy;
                toAminoMsg(message: _85.ThresholdDecisionPolicy): _85.ThresholdDecisionPolicyAminoMsg;
                fromProtoMsg(message: _85.ThresholdDecisionPolicyProtoMsg): _85.ThresholdDecisionPolicy;
                toProto(message: _85.ThresholdDecisionPolicy): Uint8Array;
                toProtoMsg(message: _85.ThresholdDecisionPolicy): _85.ThresholdDecisionPolicyProtoMsg;
            };
            PercentageDecisionPolicy: {
                typeUrl: string;
                encode(message: _85.PercentageDecisionPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _85.PercentageDecisionPolicy;
                fromJSON(object: any): _85.PercentageDecisionPolicy;
                toJSON(message: _85.PercentageDecisionPolicy): unknown;
                fromPartial(object: Partial<_85.PercentageDecisionPolicy>): _85.PercentageDecisionPolicy;
                fromAmino(object: _85.PercentageDecisionPolicyAmino): _85.PercentageDecisionPolicy;
                toAmino(message: _85.PercentageDecisionPolicy): _85.PercentageDecisionPolicyAmino;
                fromAminoMsg(object: _85.PercentageDecisionPolicyAminoMsg): _85.PercentageDecisionPolicy;
                toAminoMsg(message: _85.PercentageDecisionPolicy): _85.PercentageDecisionPolicyAminoMsg;
                fromProtoMsg(message: _85.PercentageDecisionPolicyProtoMsg): _85.PercentageDecisionPolicy;
                toProto(message: _85.PercentageDecisionPolicy): Uint8Array;
                toProtoMsg(message: _85.PercentageDecisionPolicy): _85.PercentageDecisionPolicyProtoMsg;
            };
            DecisionPolicyWindows: {
                typeUrl: string;
                encode(message: _85.DecisionPolicyWindows, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _85.DecisionPolicyWindows;
                fromJSON(object: any): _85.DecisionPolicyWindows;
                toJSON(message: _85.DecisionPolicyWindows): unknown;
                fromPartial(object: Partial<_85.DecisionPolicyWindows>): _85.DecisionPolicyWindows;
                fromAmino(object: _85.DecisionPolicyWindowsAmino): _85.DecisionPolicyWindows;
                toAmino(message: _85.DecisionPolicyWindows): _85.DecisionPolicyWindowsAmino;
                fromAminoMsg(object: _85.DecisionPolicyWindowsAminoMsg): _85.DecisionPolicyWindows;
                toAminoMsg(message: _85.DecisionPolicyWindows): _85.DecisionPolicyWindowsAminoMsg;
                fromProtoMsg(message: _85.DecisionPolicyWindowsProtoMsg): _85.DecisionPolicyWindows;
                toProto(message: _85.DecisionPolicyWindows): Uint8Array;
                toProtoMsg(message: _85.DecisionPolicyWindows): _85.DecisionPolicyWindowsProtoMsg;
            };
            GroupInfo: {
                typeUrl: string;
                encode(message: _85.GroupInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _85.GroupInfo;
                fromJSON(object: any): _85.GroupInfo;
                toJSON(message: _85.GroupInfo): unknown;
                fromPartial(object: Partial<_85.GroupInfo>): _85.GroupInfo;
                fromAmino(object: _85.GroupInfoAmino): _85.GroupInfo;
                toAmino(message: _85.GroupInfo): _85.GroupInfoAmino;
                fromAminoMsg(object: _85.GroupInfoAminoMsg): _85.GroupInfo;
                toAminoMsg(message: _85.GroupInfo): _85.GroupInfoAminoMsg;
                fromProtoMsg(message: _85.GroupInfoProtoMsg): _85.GroupInfo;
                toProto(message: _85.GroupInfo): Uint8Array;
                toProtoMsg(message: _85.GroupInfo): _85.GroupInfoProtoMsg;
            };
            GroupMember: {
                typeUrl: string;
                encode(message: _85.GroupMember, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _85.GroupMember;
                fromJSON(object: any): _85.GroupMember;
                toJSON(message: _85.GroupMember): unknown;
                fromPartial(object: Partial<_85.GroupMember>): _85.GroupMember;
                fromAmino(object: _85.GroupMemberAmino): _85.GroupMember;
                toAmino(message: _85.GroupMember): _85.GroupMemberAmino;
                fromAminoMsg(object: _85.GroupMemberAminoMsg): _85.GroupMember;
                toAminoMsg(message: _85.GroupMember): _85.GroupMemberAminoMsg;
                fromProtoMsg(message: _85.GroupMemberProtoMsg): _85.GroupMember;
                toProto(message: _85.GroupMember): Uint8Array;
                toProtoMsg(message: _85.GroupMember): _85.GroupMemberProtoMsg;
            };
            GroupPolicyInfo: {
                typeUrl: string;
                encode(message: _85.GroupPolicyInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _85.GroupPolicyInfo;
                fromJSON(object: any): _85.GroupPolicyInfo;
                toJSON(message: _85.GroupPolicyInfo): unknown;
                fromPartial(object: Partial<_85.GroupPolicyInfo>): _85.GroupPolicyInfo;
                fromAmino(object: _85.GroupPolicyInfoAmino): _85.GroupPolicyInfo;
                toAmino(message: _85.GroupPolicyInfo): _85.GroupPolicyInfoAmino;
                fromAminoMsg(object: _85.GroupPolicyInfoAminoMsg): _85.GroupPolicyInfo;
                toAminoMsg(message: _85.GroupPolicyInfo): _85.GroupPolicyInfoAminoMsg;
                fromProtoMsg(message: _85.GroupPolicyInfoProtoMsg): _85.GroupPolicyInfo;
                toProto(message: _85.GroupPolicyInfo): Uint8Array;
                toProtoMsg(message: _85.GroupPolicyInfo): _85.GroupPolicyInfoProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _85.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _85.Proposal;
                fromJSON(object: any): _85.Proposal;
                toJSON(message: _85.Proposal): unknown;
                fromPartial(object: Partial<_85.Proposal>): _85.Proposal;
                fromAmino(object: _85.ProposalAmino): _85.Proposal;
                toAmino(message: _85.Proposal): _85.ProposalAmino;
                fromAminoMsg(object: _85.ProposalAminoMsg): _85.Proposal;
                toAminoMsg(message: _85.Proposal): _85.ProposalAminoMsg;
                fromProtoMsg(message: _85.ProposalProtoMsg): _85.Proposal;
                toProto(message: _85.Proposal): Uint8Array;
                toProtoMsg(message: _85.Proposal): _85.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _85.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _85.TallyResult;
                fromJSON(object: any): _85.TallyResult;
                toJSON(message: _85.TallyResult): unknown;
                fromPartial(object: Partial<_85.TallyResult>): _85.TallyResult;
                fromAmino(object: _85.TallyResultAmino): _85.TallyResult;
                toAmino(message: _85.TallyResult): _85.TallyResultAmino;
                fromAminoMsg(object: _85.TallyResultAminoMsg): _85.TallyResult;
                toAminoMsg(message: _85.TallyResult): _85.TallyResultAminoMsg;
                fromProtoMsg(message: _85.TallyResultProtoMsg): _85.TallyResult;
                toProto(message: _85.TallyResult): Uint8Array;
                toProtoMsg(message: _85.TallyResult): _85.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _85.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _85.Vote;
                fromJSON(object: any): _85.Vote;
                toJSON(message: _85.Vote): unknown;
                fromPartial(object: Partial<_85.Vote>): _85.Vote;
                fromAmino(object: _85.VoteAmino): _85.Vote;
                toAmino(message: _85.Vote): _85.VoteAmino;
                fromAminoMsg(object: _85.VoteAminoMsg): _85.Vote;
                toAminoMsg(message: _85.Vote): _85.VoteAminoMsg;
                fromProtoMsg(message: _85.VoteProtoMsg): _85.Vote;
                toProto(message: _85.Vote): Uint8Array;
                toProtoMsg(message: _85.Vote): _85.VoteProtoMsg;
            };
            Cosmos_groupv1DecisionPolicy_InterfaceDecoder: (input: import("..").BinaryReader | Uint8Array) => import("../google/protobuf/any").Any | _85.ThresholdDecisionPolicy | _85.PercentageDecisionPolicy;
            Cosmos_groupv1DecisionPolicy_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_groupv1DecisionPolicy_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            execFromJSON(object: any): _84.Exec;
            execToJSON(object: _84.Exec): string;
            Exec: typeof _84.Exec;
            ExecSDKType: typeof _84.Exec;
            ExecAmino: typeof _84.Exec;
            MsgCreateGroup: {
                typeUrl: string;
                encode(message: _84.MsgCreateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _84.MsgCreateGroup;
                fromJSON(object: any): _84.MsgCreateGroup;
                toJSON(message: _84.MsgCreateGroup): unknown;
                fromPartial(object: Partial<_84.MsgCreateGroup>): _84.MsgCreateGroup;
                fromAmino(object: _84.MsgCreateGroupAmino): _84.MsgCreateGroup;
                toAmino(message: _84.MsgCreateGroup): _84.MsgCreateGroupAmino;
                fromAminoMsg(object: _84.MsgCreateGroupAminoMsg): _84.MsgCreateGroup;
                toAminoMsg(message: _84.MsgCreateGroup): _84.MsgCreateGroupAminoMsg;
                fromProtoMsg(message: _84.MsgCreateGroupProtoMsg): _84.MsgCreateGroup;
                toProto(message: _84.MsgCreateGroup): Uint8Array;
                toProtoMsg(message: _84.MsgCreateGroup): _84.MsgCreateGroupProtoMsg;
            };
            MsgCreateGroupResponse: {
                typeUrl: string;
                encode(message: _84.MsgCreateGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _84.MsgCreateGroupResponse;
                fromJSON(object: any): _84.MsgCreateGroupResponse;
                toJSON(message: _84.MsgCreateGroupResponse): unknown;
                fromPartial(object: Partial<_84.MsgCreateGroupResponse>): _84.MsgCreateGroupResponse;
                fromAmino(object: _84.MsgCreateGroupResponseAmino): _84.MsgCreateGroupResponse;
                toAmino(message: _84.MsgCreateGroupResponse): _84.MsgCreateGroupResponseAmino;
                fromAminoMsg(object: _84.MsgCreateGroupResponseAminoMsg): _84.MsgCreateGroupResponse;
                toAminoMsg(message: _84.MsgCreateGroupResponse): _84.MsgCreateGroupResponseAminoMsg;
                fromProtoMsg(message: _84.MsgCreateGroupResponseProtoMsg): _84.MsgCreateGroupResponse;
                toProto(message: _84.MsgCreateGroupResponse): Uint8Array;
                toProtoMsg(message: _84.MsgCreateGroupResponse): _84.MsgCreateGroupResponseProtoMsg;
            };
            MsgUpdateGroupMembers: {
                typeUrl: string;
                encode(message: _84.MsgUpdateGroupMembers, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _84.MsgUpdateGroupMembers;
                fromJSON(object: any): _84.MsgUpdateGroupMembers;
                toJSON(message: _84.MsgUpdateGroupMembers): unknown;
                fromPartial(object: Partial<_84.MsgUpdateGroupMembers>): _84.MsgUpdateGroupMembers;
                fromAmino(object: _84.MsgUpdateGroupMembersAmino): _84.MsgUpdateGroupMembers;
                toAmino(message: _84.MsgUpdateGroupMembers): _84.MsgUpdateGroupMembersAmino;
                fromAminoMsg(object: _84.MsgUpdateGroupMembersAminoMsg): _84.MsgUpdateGroupMembers;
                toAminoMsg(message: _84.MsgUpdateGroupMembers): _84.MsgUpdateGroupMembersAminoMsg;
                fromProtoMsg(message: _84.MsgUpdateGroupMembersProtoMsg): _84.MsgUpdateGroupMembers;
                toProto(message: _84.MsgUpdateGroupMembers): Uint8Array;
                toProtoMsg(message: _84.MsgUpdateGroupMembers): _84.MsgUpdateGroupMembersProtoMsg;
            };
            MsgUpdateGroupMembersResponse: {
                typeUrl: string;
                encode(_: _84.MsgUpdateGroupMembersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _84.MsgUpdateGroupMembersResponse;
                fromJSON(_: any): _84.MsgUpdateGroupMembersResponse;
                toJSON(_: _84.MsgUpdateGroupMembersResponse): unknown;
                fromPartial(_: Partial<_84.MsgUpdateGroupMembersResponse>): _84.MsgUpdateGroupMembersResponse;
                fromAmino(_: _84.MsgUpdateGroupMembersResponseAmino): _84.MsgUpdateGroupMembersResponse;
                toAmino(_: _84.MsgUpdateGroupMembersResponse): _84.MsgUpdateGroupMembersResponseAmino;
                fromAminoMsg(object: _84.MsgUpdateGroupMembersResponseAminoMsg): _84.MsgUpdateGroupMembersResponse;
                toAminoMsg(message: _84.MsgUpdateGroupMembersResponse): _84.MsgUpdateGroupMembersResponseAminoMsg;
                fromProtoMsg(message: _84.MsgUpdateGroupMembersResponseProtoMsg): _84.MsgUpdateGroupMembersResponse;
                toProto(message: _84.MsgUpdateGroupMembersResponse): Uint8Array;
                toProtoMsg(message: _84.MsgUpdateGroupMembersResponse): _84.MsgUpdateGroupMembersResponseProtoMsg;
            };
            MsgUpdateGroupAdmin: {
                typeUrl: string;
                encode(message: _84.MsgUpdateGroupAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _84.MsgUpdateGroupAdmin;
                fromJSON(object: any): _84.MsgUpdateGroupAdmin;
                toJSON(message: _84.MsgUpdateGroupAdmin): unknown;
                fromPartial(object: Partial<_84.MsgUpdateGroupAdmin>): _84.MsgUpdateGroupAdmin;
                fromAmino(object: _84.MsgUpdateGroupAdminAmino): _84.MsgUpdateGroupAdmin;
                toAmino(message: _84.MsgUpdateGroupAdmin): _84.MsgUpdateGroupAdminAmino;
                fromAminoMsg(object: _84.MsgUpdateGroupAdminAminoMsg): _84.MsgUpdateGroupAdmin;
                toAminoMsg(message: _84.MsgUpdateGroupAdmin): _84.MsgUpdateGroupAdminAminoMsg;
                fromProtoMsg(message: _84.MsgUpdateGroupAdminProtoMsg): _84.MsgUpdateGroupAdmin;
                toProto(message: _84.MsgUpdateGroupAdmin): Uint8Array;
                toProtoMsg(message: _84.MsgUpdateGroupAdmin): _84.MsgUpdateGroupAdminProtoMsg;
            };
            MsgUpdateGroupAdminResponse: {
                typeUrl: string;
                encode(_: _84.MsgUpdateGroupAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _84.MsgUpdateGroupAdminResponse;
                fromJSON(_: any): _84.MsgUpdateGroupAdminResponse;
                toJSON(_: _84.MsgUpdateGroupAdminResponse): unknown;
                fromPartial(_: Partial<_84.MsgUpdateGroupAdminResponse>): _84.MsgUpdateGroupAdminResponse;
                fromAmino(_: _84.MsgUpdateGroupAdminResponseAmino): _84.MsgUpdateGroupAdminResponse;
                toAmino(_: _84.MsgUpdateGroupAdminResponse): _84.MsgUpdateGroupAdminResponseAmino;
                fromAminoMsg(object: _84.MsgUpdateGroupAdminResponseAminoMsg): _84.MsgUpdateGroupAdminResponse;
                toAminoMsg(message: _84.MsgUpdateGroupAdminResponse): _84.MsgUpdateGroupAdminResponseAminoMsg;
                fromProtoMsg(message: _84.MsgUpdateGroupAdminResponseProtoMsg): _84.MsgUpdateGroupAdminResponse;
                toProto(message: _84.MsgUpdateGroupAdminResponse): Uint8Array;
                toProtoMsg(message: _84.MsgUpdateGroupAdminResponse): _84.MsgUpdateGroupAdminResponseProtoMsg;
            };
            MsgUpdateGroupMetadata: {
                typeUrl: string;
                encode(message: _84.MsgUpdateGroupMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _84.MsgUpdateGroupMetadata;
                fromJSON(object: any): _84.MsgUpdateGroupMetadata;
                toJSON(message: _84.MsgUpdateGroupMetadata): unknown;
                fromPartial(object: Partial<_84.MsgUpdateGroupMetadata>): _84.MsgUpdateGroupMetadata;
                fromAmino(object: _84.MsgUpdateGroupMetadataAmino): _84.MsgUpdateGroupMetadata;
                toAmino(message: _84.MsgUpdateGroupMetadata): _84.MsgUpdateGroupMetadataAmino;
                fromAminoMsg(object: _84.MsgUpdateGroupMetadataAminoMsg): _84.MsgUpdateGroupMetadata;
                toAminoMsg(message: _84.MsgUpdateGroupMetadata): _84.MsgUpdateGroupMetadataAminoMsg;
                fromProtoMsg(message: _84.MsgUpdateGroupMetadataProtoMsg): _84.MsgUpdateGroupMetadata;
                toProto(message: _84.MsgUpdateGroupMetadata): Uint8Array;
                toProtoMsg(message: _84.MsgUpdateGroupMetadata): _84.MsgUpdateGroupMetadataProtoMsg;
            };
            MsgUpdateGroupMetadataResponse: {
                typeUrl: string;
                encode(_: _84.MsgUpdateGroupMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _84.MsgUpdateGroupMetadataResponse;
                fromJSON(_: any): _84.MsgUpdateGroupMetadataResponse;
                toJSON(_: _84.MsgUpdateGroupMetadataResponse): unknown;
                fromPartial(_: Partial<_84.MsgUpdateGroupMetadataResponse>): _84.MsgUpdateGroupMetadataResponse;
                fromAmino(_: _84.MsgUpdateGroupMetadataResponseAmino): _84.MsgUpdateGroupMetadataResponse;
                toAmino(_: _84.MsgUpdateGroupMetadataResponse): _84.MsgUpdateGroupMetadataResponseAmino;
                fromAminoMsg(object: _84.MsgUpdateGroupMetadataResponseAminoMsg): _84.MsgUpdateGroupMetadataResponse;
                toAminoMsg(message: _84.MsgUpdateGroupMetadataResponse): _84.MsgUpdateGroupMetadataResponseAminoMsg;
                fromProtoMsg(message: _84.MsgUpdateGroupMetadataResponseProtoMsg): _84.MsgUpdateGroupMetadataResponse;
                toProto(message: _84.MsgUpdateGroupMetadataResponse): Uint8Array;
                toProtoMsg(message: _84.MsgUpdateGroupMetadataResponse): _84.MsgUpdateGroupMetadataResponseProtoMsg;
            };
            MsgCreateGroupPolicy: {
                typeUrl: string;
                encode(message: _84.MsgCreateGroupPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _84.MsgCreateGroupPolicy;
                fromJSON(object: any): _84.MsgCreateGroupPolicy;
                toJSON(message: _84.MsgCreateGroupPolicy): unknown;
                fromPartial(object: Partial<_84.MsgCreateGroupPolicy>): _84.MsgCreateGroupPolicy;
                fromAmino(object: _84.MsgCreateGroupPolicyAmino): _84.MsgCreateGroupPolicy;
                toAmino(message: _84.MsgCreateGroupPolicy): _84.MsgCreateGroupPolicyAmino;
                fromAminoMsg(object: _84.MsgCreateGroupPolicyAminoMsg): _84.MsgCreateGroupPolicy;
                toAminoMsg(message: _84.MsgCreateGroupPolicy): _84.MsgCreateGroupPolicyAminoMsg;
                fromProtoMsg(message: _84.MsgCreateGroupPolicyProtoMsg): _84.MsgCreateGroupPolicy;
                toProto(message: _84.MsgCreateGroupPolicy): Uint8Array;
                toProtoMsg(message: _84.MsgCreateGroupPolicy): _84.MsgCreateGroupPolicyProtoMsg;
            };
            MsgCreateGroupPolicyResponse: {
                typeUrl: string;
                encode(message: _84.MsgCreateGroupPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _84.MsgCreateGroupPolicyResponse;
                fromJSON(object: any): _84.MsgCreateGroupPolicyResponse;
                toJSON(message: _84.MsgCreateGroupPolicyResponse): unknown;
                fromPartial(object: Partial<_84.MsgCreateGroupPolicyResponse>): _84.MsgCreateGroupPolicyResponse;
                fromAmino(object: _84.MsgCreateGroupPolicyResponseAmino): _84.MsgCreateGroupPolicyResponse;
                toAmino(message: _84.MsgCreateGroupPolicyResponse): _84.MsgCreateGroupPolicyResponseAmino;
                fromAminoMsg(object: _84.MsgCreateGroupPolicyResponseAminoMsg): _84.MsgCreateGroupPolicyResponse;
                toAminoMsg(message: _84.MsgCreateGroupPolicyResponse): _84.MsgCreateGroupPolicyResponseAminoMsg;
                fromProtoMsg(message: _84.MsgCreateGroupPolicyResponseProtoMsg): _84.MsgCreateGroupPolicyResponse;
                toProto(message: _84.MsgCreateGroupPolicyResponse): Uint8Array;
                toProtoMsg(message: _84.MsgCreateGroupPolicyResponse): _84.MsgCreateGroupPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyAdmin: {
                typeUrl: string;
                encode(message: _84.MsgUpdateGroupPolicyAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _84.MsgUpdateGroupPolicyAdmin;
                fromJSON(object: any): _84.MsgUpdateGroupPolicyAdmin;
                toJSON(message: _84.MsgUpdateGroupPolicyAdmin): unknown;
                fromPartial(object: Partial<_84.MsgUpdateGroupPolicyAdmin>): _84.MsgUpdateGroupPolicyAdmin;
                fromAmino(object: _84.MsgUpdateGroupPolicyAdminAmino): _84.MsgUpdateGroupPolicyAdmin;
                toAmino(message: _84.MsgUpdateGroupPolicyAdmin): _84.MsgUpdateGroupPolicyAdminAmino;
                fromAminoMsg(object: _84.MsgUpdateGroupPolicyAdminAminoMsg): _84.MsgUpdateGroupPolicyAdmin;
                toAminoMsg(message: _84.MsgUpdateGroupPolicyAdmin): _84.MsgUpdateGroupPolicyAdminAminoMsg;
                fromProtoMsg(message: _84.MsgUpdateGroupPolicyAdminProtoMsg): _84.MsgUpdateGroupPolicyAdmin;
                toProto(message: _84.MsgUpdateGroupPolicyAdmin): Uint8Array;
                toProtoMsg(message: _84.MsgUpdateGroupPolicyAdmin): _84.MsgUpdateGroupPolicyAdminProtoMsg;
            };
            MsgUpdateGroupPolicyAdminResponse: {
                typeUrl: string;
                encode(_: _84.MsgUpdateGroupPolicyAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _84.MsgUpdateGroupPolicyAdminResponse;
                fromJSON(_: any): _84.MsgUpdateGroupPolicyAdminResponse;
                toJSON(_: _84.MsgUpdateGroupPolicyAdminResponse): unknown;
                fromPartial(_: Partial<_84.MsgUpdateGroupPolicyAdminResponse>): _84.MsgUpdateGroupPolicyAdminResponse;
                fromAmino(_: _84.MsgUpdateGroupPolicyAdminResponseAmino): _84.MsgUpdateGroupPolicyAdminResponse;
                toAmino(_: _84.MsgUpdateGroupPolicyAdminResponse): _84.MsgUpdateGroupPolicyAdminResponseAmino;
                fromAminoMsg(object: _84.MsgUpdateGroupPolicyAdminResponseAminoMsg): _84.MsgUpdateGroupPolicyAdminResponse;
                toAminoMsg(message: _84.MsgUpdateGroupPolicyAdminResponse): _84.MsgUpdateGroupPolicyAdminResponseAminoMsg;
                fromProtoMsg(message: _84.MsgUpdateGroupPolicyAdminResponseProtoMsg): _84.MsgUpdateGroupPolicyAdminResponse;
                toProto(message: _84.MsgUpdateGroupPolicyAdminResponse): Uint8Array;
                toProtoMsg(message: _84.MsgUpdateGroupPolicyAdminResponse): _84.MsgUpdateGroupPolicyAdminResponseProtoMsg;
            };
            MsgCreateGroupWithPolicy: {
                typeUrl: string;
                encode(message: _84.MsgCreateGroupWithPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _84.MsgCreateGroupWithPolicy;
                fromJSON(object: any): _84.MsgCreateGroupWithPolicy;
                toJSON(message: _84.MsgCreateGroupWithPolicy): unknown;
                fromPartial(object: Partial<_84.MsgCreateGroupWithPolicy>): _84.MsgCreateGroupWithPolicy;
                fromAmino(object: _84.MsgCreateGroupWithPolicyAmino): _84.MsgCreateGroupWithPolicy;
                toAmino(message: _84.MsgCreateGroupWithPolicy): _84.MsgCreateGroupWithPolicyAmino;
                fromAminoMsg(object: _84.MsgCreateGroupWithPolicyAminoMsg): _84.MsgCreateGroupWithPolicy;
                toAminoMsg(message: _84.MsgCreateGroupWithPolicy): _84.MsgCreateGroupWithPolicyAminoMsg;
                fromProtoMsg(message: _84.MsgCreateGroupWithPolicyProtoMsg): _84.MsgCreateGroupWithPolicy;
                toProto(message: _84.MsgCreateGroupWithPolicy): Uint8Array;
                toProtoMsg(message: _84.MsgCreateGroupWithPolicy): _84.MsgCreateGroupWithPolicyProtoMsg;
            };
            MsgCreateGroupWithPolicyResponse: {
                typeUrl: string;
                encode(message: _84.MsgCreateGroupWithPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _84.MsgCreateGroupWithPolicyResponse;
                fromJSON(object: any): _84.MsgCreateGroupWithPolicyResponse;
                toJSON(message: _84.MsgCreateGroupWithPolicyResponse): unknown;
                fromPartial(object: Partial<_84.MsgCreateGroupWithPolicyResponse>): _84.MsgCreateGroupWithPolicyResponse;
                fromAmino(object: _84.MsgCreateGroupWithPolicyResponseAmino): _84.MsgCreateGroupWithPolicyResponse;
                toAmino(message: _84.MsgCreateGroupWithPolicyResponse): _84.MsgCreateGroupWithPolicyResponseAmino;
                fromAminoMsg(object: _84.MsgCreateGroupWithPolicyResponseAminoMsg): _84.MsgCreateGroupWithPolicyResponse;
                toAminoMsg(message: _84.MsgCreateGroupWithPolicyResponse): _84.MsgCreateGroupWithPolicyResponseAminoMsg;
                fromProtoMsg(message: _84.MsgCreateGroupWithPolicyResponseProtoMsg): _84.MsgCreateGroupWithPolicyResponse;
                toProto(message: _84.MsgCreateGroupWithPolicyResponse): Uint8Array;
                toProtoMsg(message: _84.MsgCreateGroupWithPolicyResponse): _84.MsgCreateGroupWithPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyDecisionPolicy: {
                typeUrl: string;
                encode(message: _84.MsgUpdateGroupPolicyDecisionPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _84.MsgUpdateGroupPolicyDecisionPolicy;
                fromJSON(object: any): _84.MsgUpdateGroupPolicyDecisionPolicy;
                toJSON(message: _84.MsgUpdateGroupPolicyDecisionPolicy): unknown;
                fromPartial(object: Partial<_84.MsgUpdateGroupPolicyDecisionPolicy>): _84.MsgUpdateGroupPolicyDecisionPolicy;
                fromAmino(object: _84.MsgUpdateGroupPolicyDecisionPolicyAmino): _84.MsgUpdateGroupPolicyDecisionPolicy;
                toAmino(message: _84.MsgUpdateGroupPolicyDecisionPolicy): _84.MsgUpdateGroupPolicyDecisionPolicyAmino;
                fromAminoMsg(object: _84.MsgUpdateGroupPolicyDecisionPolicyAminoMsg): _84.MsgUpdateGroupPolicyDecisionPolicy;
                toAminoMsg(message: _84.MsgUpdateGroupPolicyDecisionPolicy): _84.MsgUpdateGroupPolicyDecisionPolicyAminoMsg;
                fromProtoMsg(message: _84.MsgUpdateGroupPolicyDecisionPolicyProtoMsg): _84.MsgUpdateGroupPolicyDecisionPolicy;
                toProto(message: _84.MsgUpdateGroupPolicyDecisionPolicy): Uint8Array;
                toProtoMsg(message: _84.MsgUpdateGroupPolicyDecisionPolicy): _84.MsgUpdateGroupPolicyDecisionPolicyProtoMsg;
            };
            MsgUpdateGroupPolicyDecisionPolicyResponse: {
                typeUrl: string;
                encode(_: _84.MsgUpdateGroupPolicyDecisionPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _84.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromJSON(_: any): _84.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toJSON(_: _84.MsgUpdateGroupPolicyDecisionPolicyResponse): unknown;
                fromPartial(_: Partial<_84.MsgUpdateGroupPolicyDecisionPolicyResponse>): _84.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromAmino(_: _84.MsgUpdateGroupPolicyDecisionPolicyResponseAmino): _84.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toAmino(_: _84.MsgUpdateGroupPolicyDecisionPolicyResponse): _84.MsgUpdateGroupPolicyDecisionPolicyResponseAmino;
                fromAminoMsg(object: _84.MsgUpdateGroupPolicyDecisionPolicyResponseAminoMsg): _84.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toAminoMsg(message: _84.MsgUpdateGroupPolicyDecisionPolicyResponse): _84.MsgUpdateGroupPolicyDecisionPolicyResponseAminoMsg;
                fromProtoMsg(message: _84.MsgUpdateGroupPolicyDecisionPolicyResponseProtoMsg): _84.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toProto(message: _84.MsgUpdateGroupPolicyDecisionPolicyResponse): Uint8Array;
                toProtoMsg(message: _84.MsgUpdateGroupPolicyDecisionPolicyResponse): _84.MsgUpdateGroupPolicyDecisionPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyMetadata: {
                typeUrl: string;
                encode(message: _84.MsgUpdateGroupPolicyMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _84.MsgUpdateGroupPolicyMetadata;
                fromJSON(object: any): _84.MsgUpdateGroupPolicyMetadata;
                toJSON(message: _84.MsgUpdateGroupPolicyMetadata): unknown;
                fromPartial(object: Partial<_84.MsgUpdateGroupPolicyMetadata>): _84.MsgUpdateGroupPolicyMetadata;
                fromAmino(object: _84.MsgUpdateGroupPolicyMetadataAmino): _84.MsgUpdateGroupPolicyMetadata;
                toAmino(message: _84.MsgUpdateGroupPolicyMetadata): _84.MsgUpdateGroupPolicyMetadataAmino;
                fromAminoMsg(object: _84.MsgUpdateGroupPolicyMetadataAminoMsg): _84.MsgUpdateGroupPolicyMetadata;
                toAminoMsg(message: _84.MsgUpdateGroupPolicyMetadata): _84.MsgUpdateGroupPolicyMetadataAminoMsg;
                fromProtoMsg(message: _84.MsgUpdateGroupPolicyMetadataProtoMsg): _84.MsgUpdateGroupPolicyMetadata;
                toProto(message: _84.MsgUpdateGroupPolicyMetadata): Uint8Array;
                toProtoMsg(message: _84.MsgUpdateGroupPolicyMetadata): _84.MsgUpdateGroupPolicyMetadataProtoMsg;
            };
            MsgUpdateGroupPolicyMetadataResponse: {
                typeUrl: string;
                encode(_: _84.MsgUpdateGroupPolicyMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _84.MsgUpdateGroupPolicyMetadataResponse;
                fromJSON(_: any): _84.MsgUpdateGroupPolicyMetadataResponse;
                toJSON(_: _84.MsgUpdateGroupPolicyMetadataResponse): unknown;
                fromPartial(_: Partial<_84.MsgUpdateGroupPolicyMetadataResponse>): _84.MsgUpdateGroupPolicyMetadataResponse;
                fromAmino(_: _84.MsgUpdateGroupPolicyMetadataResponseAmino): _84.MsgUpdateGroupPolicyMetadataResponse;
                toAmino(_: _84.MsgUpdateGroupPolicyMetadataResponse): _84.MsgUpdateGroupPolicyMetadataResponseAmino;
                fromAminoMsg(object: _84.MsgUpdateGroupPolicyMetadataResponseAminoMsg): _84.MsgUpdateGroupPolicyMetadataResponse;
                toAminoMsg(message: _84.MsgUpdateGroupPolicyMetadataResponse): _84.MsgUpdateGroupPolicyMetadataResponseAminoMsg;
                fromProtoMsg(message: _84.MsgUpdateGroupPolicyMetadataResponseProtoMsg): _84.MsgUpdateGroupPolicyMetadataResponse;
                toProto(message: _84.MsgUpdateGroupPolicyMetadataResponse): Uint8Array;
                toProtoMsg(message: _84.MsgUpdateGroupPolicyMetadataResponse): _84.MsgUpdateGroupPolicyMetadataResponseProtoMsg;
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _84.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _84.MsgSubmitProposal;
                fromJSON(object: any): _84.MsgSubmitProposal;
                toJSON(message: _84.MsgSubmitProposal): unknown;
                fromPartial(object: Partial<_84.MsgSubmitProposal>): _84.MsgSubmitProposal;
                fromAmino(object: _84.MsgSubmitProposalAmino): _84.MsgSubmitProposal;
                toAmino(message: _84.MsgSubmitProposal): _84.MsgSubmitProposalAmino;
                fromAminoMsg(object: _84.MsgSubmitProposalAminoMsg): _84.MsgSubmitProposal;
                toAminoMsg(message: _84.MsgSubmitProposal): _84.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _84.MsgSubmitProposalProtoMsg): _84.MsgSubmitProposal;
                toProto(message: _84.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _84.MsgSubmitProposal): _84.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _84.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _84.MsgSubmitProposalResponse;
                fromJSON(object: any): _84.MsgSubmitProposalResponse;
                toJSON(message: _84.MsgSubmitProposalResponse): unknown;
                fromPartial(object: Partial<_84.MsgSubmitProposalResponse>): _84.MsgSubmitProposalResponse;
                fromAmino(object: _84.MsgSubmitProposalResponseAmino): _84.MsgSubmitProposalResponse;
                toAmino(message: _84.MsgSubmitProposalResponse): _84.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _84.MsgSubmitProposalResponseAminoMsg): _84.MsgSubmitProposalResponse;
                toAminoMsg(message: _84.MsgSubmitProposalResponse): _84.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _84.MsgSubmitProposalResponseProtoMsg): _84.MsgSubmitProposalResponse;
                toProto(message: _84.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _84.MsgSubmitProposalResponse): _84.MsgSubmitProposalResponseProtoMsg;
            };
            MsgWithdrawProposal: {
                typeUrl: string;
                encode(message: _84.MsgWithdrawProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _84.MsgWithdrawProposal;
                fromJSON(object: any): _84.MsgWithdrawProposal;
                toJSON(message: _84.MsgWithdrawProposal): unknown;
                fromPartial(object: Partial<_84.MsgWithdrawProposal>): _84.MsgWithdrawProposal;
                fromAmino(object: _84.MsgWithdrawProposalAmino): _84.MsgWithdrawProposal;
                toAmino(message: _84.MsgWithdrawProposal): _84.MsgWithdrawProposalAmino;
                fromAminoMsg(object: _84.MsgWithdrawProposalAminoMsg): _84.MsgWithdrawProposal;
                toAminoMsg(message: _84.MsgWithdrawProposal): _84.MsgWithdrawProposalAminoMsg;
                fromProtoMsg(message: _84.MsgWithdrawProposalProtoMsg): _84.MsgWithdrawProposal;
                toProto(message: _84.MsgWithdrawProposal): Uint8Array;
                toProtoMsg(message: _84.MsgWithdrawProposal): _84.MsgWithdrawProposalProtoMsg;
            };
            MsgWithdrawProposalResponse: {
                typeUrl: string;
                encode(_: _84.MsgWithdrawProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _84.MsgWithdrawProposalResponse;
                fromJSON(_: any): _84.MsgWithdrawProposalResponse;
                toJSON(_: _84.MsgWithdrawProposalResponse): unknown;
                fromPartial(_: Partial<_84.MsgWithdrawProposalResponse>): _84.MsgWithdrawProposalResponse;
                fromAmino(_: _84.MsgWithdrawProposalResponseAmino): _84.MsgWithdrawProposalResponse;
                toAmino(_: _84.MsgWithdrawProposalResponse): _84.MsgWithdrawProposalResponseAmino;
                fromAminoMsg(object: _84.MsgWithdrawProposalResponseAminoMsg): _84.MsgWithdrawProposalResponse;
                toAminoMsg(message: _84.MsgWithdrawProposalResponse): _84.MsgWithdrawProposalResponseAminoMsg;
                fromProtoMsg(message: _84.MsgWithdrawProposalResponseProtoMsg): _84.MsgWithdrawProposalResponse;
                toProto(message: _84.MsgWithdrawProposalResponse): Uint8Array;
                toProtoMsg(message: _84.MsgWithdrawProposalResponse): _84.MsgWithdrawProposalResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _84.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _84.MsgVote;
                fromJSON(object: any): _84.MsgVote;
                toJSON(message: _84.MsgVote): unknown;
                fromPartial(object: Partial<_84.MsgVote>): _84.MsgVote;
                fromAmino(object: _84.MsgVoteAmino): _84.MsgVote;
                toAmino(message: _84.MsgVote): _84.MsgVoteAmino;
                fromAminoMsg(object: _84.MsgVoteAminoMsg): _84.MsgVote;
                toAminoMsg(message: _84.MsgVote): _84.MsgVoteAminoMsg;
                fromProtoMsg(message: _84.MsgVoteProtoMsg): _84.MsgVote;
                toProto(message: _84.MsgVote): Uint8Array;
                toProtoMsg(message: _84.MsgVote): _84.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _84.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _84.MsgVoteResponse;
                fromJSON(_: any): _84.MsgVoteResponse;
                toJSON(_: _84.MsgVoteResponse): unknown;
                fromPartial(_: Partial<_84.MsgVoteResponse>): _84.MsgVoteResponse;
                fromAmino(_: _84.MsgVoteResponseAmino): _84.MsgVoteResponse;
                toAmino(_: _84.MsgVoteResponse): _84.MsgVoteResponseAmino;
                fromAminoMsg(object: _84.MsgVoteResponseAminoMsg): _84.MsgVoteResponse;
                toAminoMsg(message: _84.MsgVoteResponse): _84.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _84.MsgVoteResponseProtoMsg): _84.MsgVoteResponse;
                toProto(message: _84.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _84.MsgVoteResponse): _84.MsgVoteResponseProtoMsg;
            };
            MsgExec: {
                typeUrl: string;
                encode(message: _84.MsgExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _84.MsgExec;
                fromJSON(object: any): _84.MsgExec;
                toJSON(message: _84.MsgExec): unknown;
                fromPartial(object: Partial<_84.MsgExec>): _84.MsgExec;
                fromAmino(object: _84.MsgExecAmino): _84.MsgExec;
                toAmino(message: _84.MsgExec): _84.MsgExecAmino;
                fromAminoMsg(object: _84.MsgExecAminoMsg): _84.MsgExec;
                toAminoMsg(message: _84.MsgExec): _84.MsgExecAminoMsg;
                fromProtoMsg(message: _84.MsgExecProtoMsg): _84.MsgExec;
                toProto(message: _84.MsgExec): Uint8Array;
                toProtoMsg(message: _84.MsgExec): _84.MsgExecProtoMsg;
            };
            MsgExecResponse: {
                typeUrl: string;
                encode(message: _84.MsgExecResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _84.MsgExecResponse;
                fromJSON(object: any): _84.MsgExecResponse;
                toJSON(message: _84.MsgExecResponse): unknown;
                fromPartial(object: Partial<_84.MsgExecResponse>): _84.MsgExecResponse;
                fromAmino(object: _84.MsgExecResponseAmino): _84.MsgExecResponse;
                toAmino(message: _84.MsgExecResponse): _84.MsgExecResponseAmino;
                fromAminoMsg(object: _84.MsgExecResponseAminoMsg): _84.MsgExecResponse;
                toAminoMsg(message: _84.MsgExecResponse): _84.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _84.MsgExecResponseProtoMsg): _84.MsgExecResponse;
                toProto(message: _84.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _84.MsgExecResponse): _84.MsgExecResponseProtoMsg;
            };
            MsgLeaveGroup: {
                typeUrl: string;
                encode(message: _84.MsgLeaveGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _84.MsgLeaveGroup;
                fromJSON(object: any): _84.MsgLeaveGroup;
                toJSON(message: _84.MsgLeaveGroup): unknown;
                fromPartial(object: Partial<_84.MsgLeaveGroup>): _84.MsgLeaveGroup;
                fromAmino(object: _84.MsgLeaveGroupAmino): _84.MsgLeaveGroup;
                toAmino(message: _84.MsgLeaveGroup): _84.MsgLeaveGroupAmino;
                fromAminoMsg(object: _84.MsgLeaveGroupAminoMsg): _84.MsgLeaveGroup;
                toAminoMsg(message: _84.MsgLeaveGroup): _84.MsgLeaveGroupAminoMsg;
                fromProtoMsg(message: _84.MsgLeaveGroupProtoMsg): _84.MsgLeaveGroup;
                toProto(message: _84.MsgLeaveGroup): Uint8Array;
                toProtoMsg(message: _84.MsgLeaveGroup): _84.MsgLeaveGroupProtoMsg;
            };
            MsgLeaveGroupResponse: {
                typeUrl: string;
                encode(_: _84.MsgLeaveGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _84.MsgLeaveGroupResponse;
                fromJSON(_: any): _84.MsgLeaveGroupResponse;
                toJSON(_: _84.MsgLeaveGroupResponse): unknown;
                fromPartial(_: Partial<_84.MsgLeaveGroupResponse>): _84.MsgLeaveGroupResponse;
                fromAmino(_: _84.MsgLeaveGroupResponseAmino): _84.MsgLeaveGroupResponse;
                toAmino(_: _84.MsgLeaveGroupResponse): _84.MsgLeaveGroupResponseAmino;
                fromAminoMsg(object: _84.MsgLeaveGroupResponseAminoMsg): _84.MsgLeaveGroupResponse;
                toAminoMsg(message: _84.MsgLeaveGroupResponse): _84.MsgLeaveGroupResponseAminoMsg;
                fromProtoMsg(message: _84.MsgLeaveGroupResponseProtoMsg): _84.MsgLeaveGroupResponse;
                toProto(message: _84.MsgLeaveGroupResponse): Uint8Array;
                toProtoMsg(message: _84.MsgLeaveGroupResponse): _84.MsgLeaveGroupResponseProtoMsg;
            };
            QueryGroupInfoRequest: {
                typeUrl: string;
                encode(message: _83.QueryGroupInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _83.QueryGroupInfoRequest;
                fromJSON(object: any): _83.QueryGroupInfoRequest;
                toJSON(message: _83.QueryGroupInfoRequest): unknown;
                fromPartial(object: Partial<_83.QueryGroupInfoRequest>): _83.QueryGroupInfoRequest;
                fromAmino(object: _83.QueryGroupInfoRequestAmino): _83.QueryGroupInfoRequest;
                toAmino(message: _83.QueryGroupInfoRequest): _83.QueryGroupInfoRequestAmino;
                fromAminoMsg(object: _83.QueryGroupInfoRequestAminoMsg): _83.QueryGroupInfoRequest;
                toAminoMsg(message: _83.QueryGroupInfoRequest): _83.QueryGroupInfoRequestAminoMsg;
                fromProtoMsg(message: _83.QueryGroupInfoRequestProtoMsg): _83.QueryGroupInfoRequest;
                toProto(message: _83.QueryGroupInfoRequest): Uint8Array;
                toProtoMsg(message: _83.QueryGroupInfoRequest): _83.QueryGroupInfoRequestProtoMsg;
            };
            QueryGroupInfoResponse: {
                typeUrl: string;
                encode(message: _83.QueryGroupInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _83.QueryGroupInfoResponse;
                fromJSON(object: any): _83.QueryGroupInfoResponse;
                toJSON(message: _83.QueryGroupInfoResponse): unknown;
                fromPartial(object: Partial<_83.QueryGroupInfoResponse>): _83.QueryGroupInfoResponse;
                fromAmino(object: _83.QueryGroupInfoResponseAmino): _83.QueryGroupInfoResponse;
                toAmino(message: _83.QueryGroupInfoResponse): _83.QueryGroupInfoResponseAmino;
                fromAminoMsg(object: _83.QueryGroupInfoResponseAminoMsg): _83.QueryGroupInfoResponse;
                toAminoMsg(message: _83.QueryGroupInfoResponse): _83.QueryGroupInfoResponseAminoMsg;
                fromProtoMsg(message: _83.QueryGroupInfoResponseProtoMsg): _83.QueryGroupInfoResponse;
                toProto(message: _83.QueryGroupInfoResponse): Uint8Array;
                toProtoMsg(message: _83.QueryGroupInfoResponse): _83.QueryGroupInfoResponseProtoMsg;
            };
            QueryGroupPolicyInfoRequest: {
                typeUrl: string;
                encode(message: _83.QueryGroupPolicyInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _83.QueryGroupPolicyInfoRequest;
                fromJSON(object: any): _83.QueryGroupPolicyInfoRequest;
                toJSON(message: _83.QueryGroupPolicyInfoRequest): unknown;
                fromPartial(object: Partial<_83.QueryGroupPolicyInfoRequest>): _83.QueryGroupPolicyInfoRequest;
                fromAmino(object: _83.QueryGroupPolicyInfoRequestAmino): _83.QueryGroupPolicyInfoRequest;
                toAmino(message: _83.QueryGroupPolicyInfoRequest): _83.QueryGroupPolicyInfoRequestAmino;
                fromAminoMsg(object: _83.QueryGroupPolicyInfoRequestAminoMsg): _83.QueryGroupPolicyInfoRequest;
                toAminoMsg(message: _83.QueryGroupPolicyInfoRequest): _83.QueryGroupPolicyInfoRequestAminoMsg;
                fromProtoMsg(message: _83.QueryGroupPolicyInfoRequestProtoMsg): _83.QueryGroupPolicyInfoRequest;
                toProto(message: _83.QueryGroupPolicyInfoRequest): Uint8Array;
                toProtoMsg(message: _83.QueryGroupPolicyInfoRequest): _83.QueryGroupPolicyInfoRequestProtoMsg;
            };
            QueryGroupPolicyInfoResponse: {
                typeUrl: string;
                encode(message: _83.QueryGroupPolicyInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _83.QueryGroupPolicyInfoResponse;
                fromJSON(object: any): _83.QueryGroupPolicyInfoResponse;
                toJSON(message: _83.QueryGroupPolicyInfoResponse): unknown;
                fromPartial(object: Partial<_83.QueryGroupPolicyInfoResponse>): _83.QueryGroupPolicyInfoResponse;
                fromAmino(object: _83.QueryGroupPolicyInfoResponseAmino): _83.QueryGroupPolicyInfoResponse;
                toAmino(message: _83.QueryGroupPolicyInfoResponse): _83.QueryGroupPolicyInfoResponseAmino;
                fromAminoMsg(object: _83.QueryGroupPolicyInfoResponseAminoMsg): _83.QueryGroupPolicyInfoResponse;
                toAminoMsg(message: _83.QueryGroupPolicyInfoResponse): _83.QueryGroupPolicyInfoResponseAminoMsg;
                fromProtoMsg(message: _83.QueryGroupPolicyInfoResponseProtoMsg): _83.QueryGroupPolicyInfoResponse;
                toProto(message: _83.QueryGroupPolicyInfoResponse): Uint8Array;
                toProtoMsg(message: _83.QueryGroupPolicyInfoResponse): _83.QueryGroupPolicyInfoResponseProtoMsg;
            };
            QueryGroupMembersRequest: {
                typeUrl: string;
                encode(message: _83.QueryGroupMembersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _83.QueryGroupMembersRequest;
                fromJSON(object: any): _83.QueryGroupMembersRequest;
                toJSON(message: _83.QueryGroupMembersRequest): unknown;
                fromPartial(object: Partial<_83.QueryGroupMembersRequest>): _83.QueryGroupMembersRequest;
                fromAmino(object: _83.QueryGroupMembersRequestAmino): _83.QueryGroupMembersRequest;
                toAmino(message: _83.QueryGroupMembersRequest): _83.QueryGroupMembersRequestAmino;
                fromAminoMsg(object: _83.QueryGroupMembersRequestAminoMsg): _83.QueryGroupMembersRequest;
                toAminoMsg(message: _83.QueryGroupMembersRequest): _83.QueryGroupMembersRequestAminoMsg;
                fromProtoMsg(message: _83.QueryGroupMembersRequestProtoMsg): _83.QueryGroupMembersRequest;
                toProto(message: _83.QueryGroupMembersRequest): Uint8Array;
                toProtoMsg(message: _83.QueryGroupMembersRequest): _83.QueryGroupMembersRequestProtoMsg;
            };
            QueryGroupMembersResponse: {
                typeUrl: string;
                encode(message: _83.QueryGroupMembersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _83.QueryGroupMembersResponse;
                fromJSON(object: any): _83.QueryGroupMembersResponse;
                toJSON(message: _83.QueryGroupMembersResponse): unknown;
                fromPartial(object: Partial<_83.QueryGroupMembersResponse>): _83.QueryGroupMembersResponse;
                fromAmino(object: _83.QueryGroupMembersResponseAmino): _83.QueryGroupMembersResponse;
                toAmino(message: _83.QueryGroupMembersResponse): _83.QueryGroupMembersResponseAmino;
                fromAminoMsg(object: _83.QueryGroupMembersResponseAminoMsg): _83.QueryGroupMembersResponse;
                toAminoMsg(message: _83.QueryGroupMembersResponse): _83.QueryGroupMembersResponseAminoMsg;
                fromProtoMsg(message: _83.QueryGroupMembersResponseProtoMsg): _83.QueryGroupMembersResponse;
                toProto(message: _83.QueryGroupMembersResponse): Uint8Array;
                toProtoMsg(message: _83.QueryGroupMembersResponse): _83.QueryGroupMembersResponseProtoMsg;
            };
            QueryGroupsByAdminRequest: {
                typeUrl: string;
                encode(message: _83.QueryGroupsByAdminRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _83.QueryGroupsByAdminRequest;
                fromJSON(object: any): _83.QueryGroupsByAdminRequest;
                toJSON(message: _83.QueryGroupsByAdminRequest): unknown;
                fromPartial(object: Partial<_83.QueryGroupsByAdminRequest>): _83.QueryGroupsByAdminRequest;
                fromAmino(object: _83.QueryGroupsByAdminRequestAmino): _83.QueryGroupsByAdminRequest;
                toAmino(message: _83.QueryGroupsByAdminRequest): _83.QueryGroupsByAdminRequestAmino;
                fromAminoMsg(object: _83.QueryGroupsByAdminRequestAminoMsg): _83.QueryGroupsByAdminRequest;
                toAminoMsg(message: _83.QueryGroupsByAdminRequest): _83.QueryGroupsByAdminRequestAminoMsg;
                fromProtoMsg(message: _83.QueryGroupsByAdminRequestProtoMsg): _83.QueryGroupsByAdminRequest;
                toProto(message: _83.QueryGroupsByAdminRequest): Uint8Array;
                toProtoMsg(message: _83.QueryGroupsByAdminRequest): _83.QueryGroupsByAdminRequestProtoMsg;
            };
            QueryGroupsByAdminResponse: {
                typeUrl: string;
                encode(message: _83.QueryGroupsByAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _83.QueryGroupsByAdminResponse;
                fromJSON(object: any): _83.QueryGroupsByAdminResponse;
                toJSON(message: _83.QueryGroupsByAdminResponse): unknown;
                fromPartial(object: Partial<_83.QueryGroupsByAdminResponse>): _83.QueryGroupsByAdminResponse;
                fromAmino(object: _83.QueryGroupsByAdminResponseAmino): _83.QueryGroupsByAdminResponse;
                toAmino(message: _83.QueryGroupsByAdminResponse): _83.QueryGroupsByAdminResponseAmino;
                fromAminoMsg(object: _83.QueryGroupsByAdminResponseAminoMsg): _83.QueryGroupsByAdminResponse;
                toAminoMsg(message: _83.QueryGroupsByAdminResponse): _83.QueryGroupsByAdminResponseAminoMsg;
                fromProtoMsg(message: _83.QueryGroupsByAdminResponseProtoMsg): _83.QueryGroupsByAdminResponse;
                toProto(message: _83.QueryGroupsByAdminResponse): Uint8Array;
                toProtoMsg(message: _83.QueryGroupsByAdminResponse): _83.QueryGroupsByAdminResponseProtoMsg;
            };
            QueryGroupPoliciesByGroupRequest: {
                typeUrl: string;
                encode(message: _83.QueryGroupPoliciesByGroupRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _83.QueryGroupPoliciesByGroupRequest;
                fromJSON(object: any): _83.QueryGroupPoliciesByGroupRequest;
                toJSON(message: _83.QueryGroupPoliciesByGroupRequest): unknown;
                fromPartial(object: Partial<_83.QueryGroupPoliciesByGroupRequest>): _83.QueryGroupPoliciesByGroupRequest;
                fromAmino(object: _83.QueryGroupPoliciesByGroupRequestAmino): _83.QueryGroupPoliciesByGroupRequest;
                toAmino(message: _83.QueryGroupPoliciesByGroupRequest): _83.QueryGroupPoliciesByGroupRequestAmino;
                fromAminoMsg(object: _83.QueryGroupPoliciesByGroupRequestAminoMsg): _83.QueryGroupPoliciesByGroupRequest;
                toAminoMsg(message: _83.QueryGroupPoliciesByGroupRequest): _83.QueryGroupPoliciesByGroupRequestAminoMsg;
                fromProtoMsg(message: _83.QueryGroupPoliciesByGroupRequestProtoMsg): _83.QueryGroupPoliciesByGroupRequest;
                toProto(message: _83.QueryGroupPoliciesByGroupRequest): Uint8Array;
                toProtoMsg(message: _83.QueryGroupPoliciesByGroupRequest): _83.QueryGroupPoliciesByGroupRequestProtoMsg;
            };
            QueryGroupPoliciesByGroupResponse: {
                typeUrl: string;
                encode(message: _83.QueryGroupPoliciesByGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _83.QueryGroupPoliciesByGroupResponse;
                fromJSON(object: any): _83.QueryGroupPoliciesByGroupResponse;
                toJSON(message: _83.QueryGroupPoliciesByGroupResponse): unknown;
                fromPartial(object: Partial<_83.QueryGroupPoliciesByGroupResponse>): _83.QueryGroupPoliciesByGroupResponse;
                fromAmino(object: _83.QueryGroupPoliciesByGroupResponseAmino): _83.QueryGroupPoliciesByGroupResponse;
                toAmino(message: _83.QueryGroupPoliciesByGroupResponse): _83.QueryGroupPoliciesByGroupResponseAmino;
                fromAminoMsg(object: _83.QueryGroupPoliciesByGroupResponseAminoMsg): _83.QueryGroupPoliciesByGroupResponse;
                toAminoMsg(message: _83.QueryGroupPoliciesByGroupResponse): _83.QueryGroupPoliciesByGroupResponseAminoMsg;
                fromProtoMsg(message: _83.QueryGroupPoliciesByGroupResponseProtoMsg): _83.QueryGroupPoliciesByGroupResponse;
                toProto(message: _83.QueryGroupPoliciesByGroupResponse): Uint8Array;
                toProtoMsg(message: _83.QueryGroupPoliciesByGroupResponse): _83.QueryGroupPoliciesByGroupResponseProtoMsg;
            };
            QueryGroupPoliciesByAdminRequest: {
                typeUrl: string;
                encode(message: _83.QueryGroupPoliciesByAdminRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _83.QueryGroupPoliciesByAdminRequest;
                fromJSON(object: any): _83.QueryGroupPoliciesByAdminRequest;
                toJSON(message: _83.QueryGroupPoliciesByAdminRequest): unknown;
                fromPartial(object: Partial<_83.QueryGroupPoliciesByAdminRequest>): _83.QueryGroupPoliciesByAdminRequest;
                fromAmino(object: _83.QueryGroupPoliciesByAdminRequestAmino): _83.QueryGroupPoliciesByAdminRequest;
                toAmino(message: _83.QueryGroupPoliciesByAdminRequest): _83.QueryGroupPoliciesByAdminRequestAmino;
                fromAminoMsg(object: _83.QueryGroupPoliciesByAdminRequestAminoMsg): _83.QueryGroupPoliciesByAdminRequest;
                toAminoMsg(message: _83.QueryGroupPoliciesByAdminRequest): _83.QueryGroupPoliciesByAdminRequestAminoMsg;
                fromProtoMsg(message: _83.QueryGroupPoliciesByAdminRequestProtoMsg): _83.QueryGroupPoliciesByAdminRequest;
                toProto(message: _83.QueryGroupPoliciesByAdminRequest): Uint8Array;
                toProtoMsg(message: _83.QueryGroupPoliciesByAdminRequest): _83.QueryGroupPoliciesByAdminRequestProtoMsg;
            };
            QueryGroupPoliciesByAdminResponse: {
                typeUrl: string;
                encode(message: _83.QueryGroupPoliciesByAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _83.QueryGroupPoliciesByAdminResponse;
                fromJSON(object: any): _83.QueryGroupPoliciesByAdminResponse;
                toJSON(message: _83.QueryGroupPoliciesByAdminResponse): unknown;
                fromPartial(object: Partial<_83.QueryGroupPoliciesByAdminResponse>): _83.QueryGroupPoliciesByAdminResponse;
                fromAmino(object: _83.QueryGroupPoliciesByAdminResponseAmino): _83.QueryGroupPoliciesByAdminResponse;
                toAmino(message: _83.QueryGroupPoliciesByAdminResponse): _83.QueryGroupPoliciesByAdminResponseAmino;
                fromAminoMsg(object: _83.QueryGroupPoliciesByAdminResponseAminoMsg): _83.QueryGroupPoliciesByAdminResponse;
                toAminoMsg(message: _83.QueryGroupPoliciesByAdminResponse): _83.QueryGroupPoliciesByAdminResponseAminoMsg;
                fromProtoMsg(message: _83.QueryGroupPoliciesByAdminResponseProtoMsg): _83.QueryGroupPoliciesByAdminResponse;
                toProto(message: _83.QueryGroupPoliciesByAdminResponse): Uint8Array;
                toProtoMsg(message: _83.QueryGroupPoliciesByAdminResponse): _83.QueryGroupPoliciesByAdminResponseProtoMsg;
            };
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _83.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _83.QueryProposalRequest;
                fromJSON(object: any): _83.QueryProposalRequest;
                toJSON(message: _83.QueryProposalRequest): unknown;
                fromPartial(object: Partial<_83.QueryProposalRequest>): _83.QueryProposalRequest;
                fromAmino(object: _83.QueryProposalRequestAmino): _83.QueryProposalRequest;
                toAmino(message: _83.QueryProposalRequest): _83.QueryProposalRequestAmino;
                fromAminoMsg(object: _83.QueryProposalRequestAminoMsg): _83.QueryProposalRequest;
                toAminoMsg(message: _83.QueryProposalRequest): _83.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _83.QueryProposalRequestProtoMsg): _83.QueryProposalRequest;
                toProto(message: _83.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _83.QueryProposalRequest): _83.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _83.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _83.QueryProposalResponse;
                fromJSON(object: any): _83.QueryProposalResponse;
                toJSON(message: _83.QueryProposalResponse): unknown;
                fromPartial(object: Partial<_83.QueryProposalResponse>): _83.QueryProposalResponse;
                fromAmino(object: _83.QueryProposalResponseAmino): _83.QueryProposalResponse;
                toAmino(message: _83.QueryProposalResponse): _83.QueryProposalResponseAmino;
                fromAminoMsg(object: _83.QueryProposalResponseAminoMsg): _83.QueryProposalResponse;
                toAminoMsg(message: _83.QueryProposalResponse): _83.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _83.QueryProposalResponseProtoMsg): _83.QueryProposalResponse;
                toProto(message: _83.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _83.QueryProposalResponse): _83.QueryProposalResponseProtoMsg;
            };
            QueryProposalsByGroupPolicyRequest: {
                typeUrl: string;
                encode(message: _83.QueryProposalsByGroupPolicyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _83.QueryProposalsByGroupPolicyRequest;
                fromJSON(object: any): _83.QueryProposalsByGroupPolicyRequest;
                toJSON(message: _83.QueryProposalsByGroupPolicyRequest): unknown;
                fromPartial(object: Partial<_83.QueryProposalsByGroupPolicyRequest>): _83.QueryProposalsByGroupPolicyRequest;
                fromAmino(object: _83.QueryProposalsByGroupPolicyRequestAmino): _83.QueryProposalsByGroupPolicyRequest;
                toAmino(message: _83.QueryProposalsByGroupPolicyRequest): _83.QueryProposalsByGroupPolicyRequestAmino;
                fromAminoMsg(object: _83.QueryProposalsByGroupPolicyRequestAminoMsg): _83.QueryProposalsByGroupPolicyRequest;
                toAminoMsg(message: _83.QueryProposalsByGroupPolicyRequest): _83.QueryProposalsByGroupPolicyRequestAminoMsg;
                fromProtoMsg(message: _83.QueryProposalsByGroupPolicyRequestProtoMsg): _83.QueryProposalsByGroupPolicyRequest;
                toProto(message: _83.QueryProposalsByGroupPolicyRequest): Uint8Array;
                toProtoMsg(message: _83.QueryProposalsByGroupPolicyRequest): _83.QueryProposalsByGroupPolicyRequestProtoMsg;
            };
            QueryProposalsByGroupPolicyResponse: {
                typeUrl: string;
                encode(message: _83.QueryProposalsByGroupPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _83.QueryProposalsByGroupPolicyResponse;
                fromJSON(object: any): _83.QueryProposalsByGroupPolicyResponse;
                toJSON(message: _83.QueryProposalsByGroupPolicyResponse): unknown;
                fromPartial(object: Partial<_83.QueryProposalsByGroupPolicyResponse>): _83.QueryProposalsByGroupPolicyResponse;
                fromAmino(object: _83.QueryProposalsByGroupPolicyResponseAmino): _83.QueryProposalsByGroupPolicyResponse;
                toAmino(message: _83.QueryProposalsByGroupPolicyResponse): _83.QueryProposalsByGroupPolicyResponseAmino;
                fromAminoMsg(object: _83.QueryProposalsByGroupPolicyResponseAminoMsg): _83.QueryProposalsByGroupPolicyResponse;
                toAminoMsg(message: _83.QueryProposalsByGroupPolicyResponse): _83.QueryProposalsByGroupPolicyResponseAminoMsg;
                fromProtoMsg(message: _83.QueryProposalsByGroupPolicyResponseProtoMsg): _83.QueryProposalsByGroupPolicyResponse;
                toProto(message: _83.QueryProposalsByGroupPolicyResponse): Uint8Array;
                toProtoMsg(message: _83.QueryProposalsByGroupPolicyResponse): _83.QueryProposalsByGroupPolicyResponseProtoMsg;
            };
            QueryVoteByProposalVoterRequest: {
                typeUrl: string;
                encode(message: _83.QueryVoteByProposalVoterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _83.QueryVoteByProposalVoterRequest;
                fromJSON(object: any): _83.QueryVoteByProposalVoterRequest;
                toJSON(message: _83.QueryVoteByProposalVoterRequest): unknown;
                fromPartial(object: Partial<_83.QueryVoteByProposalVoterRequest>): _83.QueryVoteByProposalVoterRequest;
                fromAmino(object: _83.QueryVoteByProposalVoterRequestAmino): _83.QueryVoteByProposalVoterRequest;
                toAmino(message: _83.QueryVoteByProposalVoterRequest): _83.QueryVoteByProposalVoterRequestAmino;
                fromAminoMsg(object: _83.QueryVoteByProposalVoterRequestAminoMsg): _83.QueryVoteByProposalVoterRequest;
                toAminoMsg(message: _83.QueryVoteByProposalVoterRequest): _83.QueryVoteByProposalVoterRequestAminoMsg;
                fromProtoMsg(message: _83.QueryVoteByProposalVoterRequestProtoMsg): _83.QueryVoteByProposalVoterRequest;
                toProto(message: _83.QueryVoteByProposalVoterRequest): Uint8Array;
                toProtoMsg(message: _83.QueryVoteByProposalVoterRequest): _83.QueryVoteByProposalVoterRequestProtoMsg;
            };
            QueryVoteByProposalVoterResponse: {
                typeUrl: string;
                encode(message: _83.QueryVoteByProposalVoterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _83.QueryVoteByProposalVoterResponse;
                fromJSON(object: any): _83.QueryVoteByProposalVoterResponse;
                toJSON(message: _83.QueryVoteByProposalVoterResponse): unknown;
                fromPartial(object: Partial<_83.QueryVoteByProposalVoterResponse>): _83.QueryVoteByProposalVoterResponse;
                fromAmino(object: _83.QueryVoteByProposalVoterResponseAmino): _83.QueryVoteByProposalVoterResponse;
                toAmino(message: _83.QueryVoteByProposalVoterResponse): _83.QueryVoteByProposalVoterResponseAmino;
                fromAminoMsg(object: _83.QueryVoteByProposalVoterResponseAminoMsg): _83.QueryVoteByProposalVoterResponse;
                toAminoMsg(message: _83.QueryVoteByProposalVoterResponse): _83.QueryVoteByProposalVoterResponseAminoMsg;
                fromProtoMsg(message: _83.QueryVoteByProposalVoterResponseProtoMsg): _83.QueryVoteByProposalVoterResponse;
                toProto(message: _83.QueryVoteByProposalVoterResponse): Uint8Array;
                toProtoMsg(message: _83.QueryVoteByProposalVoterResponse): _83.QueryVoteByProposalVoterResponseProtoMsg;
            };
            QueryVotesByProposalRequest: {
                typeUrl: string;
                encode(message: _83.QueryVotesByProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _83.QueryVotesByProposalRequest;
                fromJSON(object: any): _83.QueryVotesByProposalRequest;
                toJSON(message: _83.QueryVotesByProposalRequest): unknown;
                fromPartial(object: Partial<_83.QueryVotesByProposalRequest>): _83.QueryVotesByProposalRequest;
                fromAmino(object: _83.QueryVotesByProposalRequestAmino): _83.QueryVotesByProposalRequest;
                toAmino(message: _83.QueryVotesByProposalRequest): _83.QueryVotesByProposalRequestAmino;
                fromAminoMsg(object: _83.QueryVotesByProposalRequestAminoMsg): _83.QueryVotesByProposalRequest;
                toAminoMsg(message: _83.QueryVotesByProposalRequest): _83.QueryVotesByProposalRequestAminoMsg;
                fromProtoMsg(message: _83.QueryVotesByProposalRequestProtoMsg): _83.QueryVotesByProposalRequest;
                toProto(message: _83.QueryVotesByProposalRequest): Uint8Array;
                toProtoMsg(message: _83.QueryVotesByProposalRequest): _83.QueryVotesByProposalRequestProtoMsg;
            };
            QueryVotesByProposalResponse: {
                typeUrl: string;
                encode(message: _83.QueryVotesByProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _83.QueryVotesByProposalResponse;
                fromJSON(object: any): _83.QueryVotesByProposalResponse;
                toJSON(message: _83.QueryVotesByProposalResponse): unknown;
                fromPartial(object: Partial<_83.QueryVotesByProposalResponse>): _83.QueryVotesByProposalResponse;
                fromAmino(object: _83.QueryVotesByProposalResponseAmino): _83.QueryVotesByProposalResponse;
                toAmino(message: _83.QueryVotesByProposalResponse): _83.QueryVotesByProposalResponseAmino;
                fromAminoMsg(object: _83.QueryVotesByProposalResponseAminoMsg): _83.QueryVotesByProposalResponse;
                toAminoMsg(message: _83.QueryVotesByProposalResponse): _83.QueryVotesByProposalResponseAminoMsg;
                fromProtoMsg(message: _83.QueryVotesByProposalResponseProtoMsg): _83.QueryVotesByProposalResponse;
                toProto(message: _83.QueryVotesByProposalResponse): Uint8Array;
                toProtoMsg(message: _83.QueryVotesByProposalResponse): _83.QueryVotesByProposalResponseProtoMsg;
            };
            QueryVotesByVoterRequest: {
                typeUrl: string;
                encode(message: _83.QueryVotesByVoterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _83.QueryVotesByVoterRequest;
                fromJSON(object: any): _83.QueryVotesByVoterRequest;
                toJSON(message: _83.QueryVotesByVoterRequest): unknown;
                fromPartial(object: Partial<_83.QueryVotesByVoterRequest>): _83.QueryVotesByVoterRequest;
                fromAmino(object: _83.QueryVotesByVoterRequestAmino): _83.QueryVotesByVoterRequest;
                toAmino(message: _83.QueryVotesByVoterRequest): _83.QueryVotesByVoterRequestAmino;
                fromAminoMsg(object: _83.QueryVotesByVoterRequestAminoMsg): _83.QueryVotesByVoterRequest;
                toAminoMsg(message: _83.QueryVotesByVoterRequest): _83.QueryVotesByVoterRequestAminoMsg;
                fromProtoMsg(message: _83.QueryVotesByVoterRequestProtoMsg): _83.QueryVotesByVoterRequest;
                toProto(message: _83.QueryVotesByVoterRequest): Uint8Array;
                toProtoMsg(message: _83.QueryVotesByVoterRequest): _83.QueryVotesByVoterRequestProtoMsg;
            };
            QueryVotesByVoterResponse: {
                typeUrl: string;
                encode(message: _83.QueryVotesByVoterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _83.QueryVotesByVoterResponse;
                fromJSON(object: any): _83.QueryVotesByVoterResponse;
                toJSON(message: _83.QueryVotesByVoterResponse): unknown;
                fromPartial(object: Partial<_83.QueryVotesByVoterResponse>): _83.QueryVotesByVoterResponse;
                fromAmino(object: _83.QueryVotesByVoterResponseAmino): _83.QueryVotesByVoterResponse;
                toAmino(message: _83.QueryVotesByVoterResponse): _83.QueryVotesByVoterResponseAmino;
                fromAminoMsg(object: _83.QueryVotesByVoterResponseAminoMsg): _83.QueryVotesByVoterResponse;
                toAminoMsg(message: _83.QueryVotesByVoterResponse): _83.QueryVotesByVoterResponseAminoMsg;
                fromProtoMsg(message: _83.QueryVotesByVoterResponseProtoMsg): _83.QueryVotesByVoterResponse;
                toProto(message: _83.QueryVotesByVoterResponse): Uint8Array;
                toProtoMsg(message: _83.QueryVotesByVoterResponse): _83.QueryVotesByVoterResponseProtoMsg;
            };
            QueryGroupsByMemberRequest: {
                typeUrl: string;
                encode(message: _83.QueryGroupsByMemberRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _83.QueryGroupsByMemberRequest;
                fromJSON(object: any): _83.QueryGroupsByMemberRequest;
                toJSON(message: _83.QueryGroupsByMemberRequest): unknown;
                fromPartial(object: Partial<_83.QueryGroupsByMemberRequest>): _83.QueryGroupsByMemberRequest;
                fromAmino(object: _83.QueryGroupsByMemberRequestAmino): _83.QueryGroupsByMemberRequest;
                toAmino(message: _83.QueryGroupsByMemberRequest): _83.QueryGroupsByMemberRequestAmino;
                fromAminoMsg(object: _83.QueryGroupsByMemberRequestAminoMsg): _83.QueryGroupsByMemberRequest;
                toAminoMsg(message: _83.QueryGroupsByMemberRequest): _83.QueryGroupsByMemberRequestAminoMsg;
                fromProtoMsg(message: _83.QueryGroupsByMemberRequestProtoMsg): _83.QueryGroupsByMemberRequest;
                toProto(message: _83.QueryGroupsByMemberRequest): Uint8Array;
                toProtoMsg(message: _83.QueryGroupsByMemberRequest): _83.QueryGroupsByMemberRequestProtoMsg;
            };
            QueryGroupsByMemberResponse: {
                typeUrl: string;
                encode(message: _83.QueryGroupsByMemberResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _83.QueryGroupsByMemberResponse;
                fromJSON(object: any): _83.QueryGroupsByMemberResponse;
                toJSON(message: _83.QueryGroupsByMemberResponse): unknown;
                fromPartial(object: Partial<_83.QueryGroupsByMemberResponse>): _83.QueryGroupsByMemberResponse;
                fromAmino(object: _83.QueryGroupsByMemberResponseAmino): _83.QueryGroupsByMemberResponse;
                toAmino(message: _83.QueryGroupsByMemberResponse): _83.QueryGroupsByMemberResponseAmino;
                fromAminoMsg(object: _83.QueryGroupsByMemberResponseAminoMsg): _83.QueryGroupsByMemberResponse;
                toAminoMsg(message: _83.QueryGroupsByMemberResponse): _83.QueryGroupsByMemberResponseAminoMsg;
                fromProtoMsg(message: _83.QueryGroupsByMemberResponseProtoMsg): _83.QueryGroupsByMemberResponse;
                toProto(message: _83.QueryGroupsByMemberResponse): Uint8Array;
                toProtoMsg(message: _83.QueryGroupsByMemberResponse): _83.QueryGroupsByMemberResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _83.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _83.QueryTallyResultRequest;
                fromJSON(object: any): _83.QueryTallyResultRequest;
                toJSON(message: _83.QueryTallyResultRequest): unknown;
                fromPartial(object: Partial<_83.QueryTallyResultRequest>): _83.QueryTallyResultRequest;
                fromAmino(object: _83.QueryTallyResultRequestAmino): _83.QueryTallyResultRequest;
                toAmino(message: _83.QueryTallyResultRequest): _83.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _83.QueryTallyResultRequestAminoMsg): _83.QueryTallyResultRequest;
                toAminoMsg(message: _83.QueryTallyResultRequest): _83.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _83.QueryTallyResultRequestProtoMsg): _83.QueryTallyResultRequest;
                toProto(message: _83.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _83.QueryTallyResultRequest): _83.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _83.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _83.QueryTallyResultResponse;
                fromJSON(object: any): _83.QueryTallyResultResponse;
                toJSON(message: _83.QueryTallyResultResponse): unknown;
                fromPartial(object: Partial<_83.QueryTallyResultResponse>): _83.QueryTallyResultResponse;
                fromAmino(object: _83.QueryTallyResultResponseAmino): _83.QueryTallyResultResponse;
                toAmino(message: _83.QueryTallyResultResponse): _83.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _83.QueryTallyResultResponseAminoMsg): _83.QueryTallyResultResponse;
                toAminoMsg(message: _83.QueryTallyResultResponse): _83.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _83.QueryTallyResultResponseProtoMsg): _83.QueryTallyResultResponse;
                toProto(message: _83.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _83.QueryTallyResultResponse): _83.QueryTallyResultResponseProtoMsg;
            };
            QueryGroupsRequest: {
                typeUrl: string;
                encode(message: _83.QueryGroupsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _83.QueryGroupsRequest;
                fromJSON(object: any): _83.QueryGroupsRequest;
                toJSON(message: _83.QueryGroupsRequest): unknown;
                fromPartial(object: Partial<_83.QueryGroupsRequest>): _83.QueryGroupsRequest;
                fromAmino(object: _83.QueryGroupsRequestAmino): _83.QueryGroupsRequest;
                toAmino(message: _83.QueryGroupsRequest): _83.QueryGroupsRequestAmino;
                fromAminoMsg(object: _83.QueryGroupsRequestAminoMsg): _83.QueryGroupsRequest;
                toAminoMsg(message: _83.QueryGroupsRequest): _83.QueryGroupsRequestAminoMsg;
                fromProtoMsg(message: _83.QueryGroupsRequestProtoMsg): _83.QueryGroupsRequest;
                toProto(message: _83.QueryGroupsRequest): Uint8Array;
                toProtoMsg(message: _83.QueryGroupsRequest): _83.QueryGroupsRequestProtoMsg;
            };
            QueryGroupsResponse: {
                typeUrl: string;
                encode(message: _83.QueryGroupsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _83.QueryGroupsResponse;
                fromJSON(object: any): _83.QueryGroupsResponse;
                toJSON(message: _83.QueryGroupsResponse): unknown;
                fromPartial(object: Partial<_83.QueryGroupsResponse>): _83.QueryGroupsResponse;
                fromAmino(object: _83.QueryGroupsResponseAmino): _83.QueryGroupsResponse;
                toAmino(message: _83.QueryGroupsResponse): _83.QueryGroupsResponseAmino;
                fromAminoMsg(object: _83.QueryGroupsResponseAminoMsg): _83.QueryGroupsResponse;
                toAminoMsg(message: _83.QueryGroupsResponse): _83.QueryGroupsResponseAminoMsg;
                fromProtoMsg(message: _83.QueryGroupsResponseProtoMsg): _83.QueryGroupsResponse;
                toProto(message: _83.QueryGroupsResponse): Uint8Array;
                toProtoMsg(message: _83.QueryGroupsResponse): _83.QueryGroupsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _82.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _82.GenesisState;
                fromJSON(object: any): _82.GenesisState;
                toJSON(message: _82.GenesisState): unknown;
                fromPartial(object: Partial<_82.GenesisState>): _82.GenesisState;
                fromAmino(object: _82.GenesisStateAmino): _82.GenesisState;
                toAmino(message: _82.GenesisState): _82.GenesisStateAmino;
                fromAminoMsg(object: _82.GenesisStateAminoMsg): _82.GenesisState;
                toAminoMsg(message: _82.GenesisState): _82.GenesisStateAminoMsg;
                fromProtoMsg(message: _82.GenesisStateProtoMsg): _82.GenesisState;
                toProto(message: _82.GenesisState): Uint8Array;
                toProtoMsg(message: _82.GenesisState): _82.GenesisStateProtoMsg;
            };
            EventCreateGroup: {
                typeUrl: string;
                encode(message: _81.EventCreateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _81.EventCreateGroup;
                fromJSON(object: any): _81.EventCreateGroup;
                toJSON(message: _81.EventCreateGroup): unknown;
                fromPartial(object: Partial<_81.EventCreateGroup>): _81.EventCreateGroup;
                fromAmino(object: _81.EventCreateGroupAmino): _81.EventCreateGroup;
                toAmino(message: _81.EventCreateGroup): _81.EventCreateGroupAmino;
                fromAminoMsg(object: _81.EventCreateGroupAminoMsg): _81.EventCreateGroup;
                toAminoMsg(message: _81.EventCreateGroup): _81.EventCreateGroupAminoMsg;
                fromProtoMsg(message: _81.EventCreateGroupProtoMsg): _81.EventCreateGroup;
                toProto(message: _81.EventCreateGroup): Uint8Array;
                toProtoMsg(message: _81.EventCreateGroup): _81.EventCreateGroupProtoMsg;
            };
            EventUpdateGroup: {
                typeUrl: string;
                encode(message: _81.EventUpdateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _81.EventUpdateGroup;
                fromJSON(object: any): _81.EventUpdateGroup;
                toJSON(message: _81.EventUpdateGroup): unknown;
                fromPartial(object: Partial<_81.EventUpdateGroup>): _81.EventUpdateGroup;
                fromAmino(object: _81.EventUpdateGroupAmino): _81.EventUpdateGroup;
                toAmino(message: _81.EventUpdateGroup): _81.EventUpdateGroupAmino;
                fromAminoMsg(object: _81.EventUpdateGroupAminoMsg): _81.EventUpdateGroup;
                toAminoMsg(message: _81.EventUpdateGroup): _81.EventUpdateGroupAminoMsg;
                fromProtoMsg(message: _81.EventUpdateGroupProtoMsg): _81.EventUpdateGroup;
                toProto(message: _81.EventUpdateGroup): Uint8Array;
                toProtoMsg(message: _81.EventUpdateGroup): _81.EventUpdateGroupProtoMsg;
            };
            EventCreateGroupPolicy: {
                typeUrl: string;
                encode(message: _81.EventCreateGroupPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _81.EventCreateGroupPolicy;
                fromJSON(object: any): _81.EventCreateGroupPolicy;
                toJSON(message: _81.EventCreateGroupPolicy): unknown;
                fromPartial(object: Partial<_81.EventCreateGroupPolicy>): _81.EventCreateGroupPolicy;
                fromAmino(object: _81.EventCreateGroupPolicyAmino): _81.EventCreateGroupPolicy;
                toAmino(message: _81.EventCreateGroupPolicy): _81.EventCreateGroupPolicyAmino;
                fromAminoMsg(object: _81.EventCreateGroupPolicyAminoMsg): _81.EventCreateGroupPolicy;
                toAminoMsg(message: _81.EventCreateGroupPolicy): _81.EventCreateGroupPolicyAminoMsg;
                fromProtoMsg(message: _81.EventCreateGroupPolicyProtoMsg): _81.EventCreateGroupPolicy;
                toProto(message: _81.EventCreateGroupPolicy): Uint8Array;
                toProtoMsg(message: _81.EventCreateGroupPolicy): _81.EventCreateGroupPolicyProtoMsg;
            };
            EventUpdateGroupPolicy: {
                typeUrl: string;
                encode(message: _81.EventUpdateGroupPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _81.EventUpdateGroupPolicy;
                fromJSON(object: any): _81.EventUpdateGroupPolicy;
                toJSON(message: _81.EventUpdateGroupPolicy): unknown;
                fromPartial(object: Partial<_81.EventUpdateGroupPolicy>): _81.EventUpdateGroupPolicy;
                fromAmino(object: _81.EventUpdateGroupPolicyAmino): _81.EventUpdateGroupPolicy;
                toAmino(message: _81.EventUpdateGroupPolicy): _81.EventUpdateGroupPolicyAmino;
                fromAminoMsg(object: _81.EventUpdateGroupPolicyAminoMsg): _81.EventUpdateGroupPolicy;
                toAminoMsg(message: _81.EventUpdateGroupPolicy): _81.EventUpdateGroupPolicyAminoMsg;
                fromProtoMsg(message: _81.EventUpdateGroupPolicyProtoMsg): _81.EventUpdateGroupPolicy;
                toProto(message: _81.EventUpdateGroupPolicy): Uint8Array;
                toProtoMsg(message: _81.EventUpdateGroupPolicy): _81.EventUpdateGroupPolicyProtoMsg;
            };
            EventSubmitProposal: {
                typeUrl: string;
                encode(message: _81.EventSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _81.EventSubmitProposal;
                fromJSON(object: any): _81.EventSubmitProposal;
                toJSON(message: _81.EventSubmitProposal): unknown;
                fromPartial(object: Partial<_81.EventSubmitProposal>): _81.EventSubmitProposal;
                fromAmino(object: _81.EventSubmitProposalAmino): _81.EventSubmitProposal;
                toAmino(message: _81.EventSubmitProposal): _81.EventSubmitProposalAmino;
                fromAminoMsg(object: _81.EventSubmitProposalAminoMsg): _81.EventSubmitProposal;
                toAminoMsg(message: _81.EventSubmitProposal): _81.EventSubmitProposalAminoMsg;
                fromProtoMsg(message: _81.EventSubmitProposalProtoMsg): _81.EventSubmitProposal;
                toProto(message: _81.EventSubmitProposal): Uint8Array;
                toProtoMsg(message: _81.EventSubmitProposal): _81.EventSubmitProposalProtoMsg;
            };
            EventWithdrawProposal: {
                typeUrl: string;
                encode(message: _81.EventWithdrawProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _81.EventWithdrawProposal;
                fromJSON(object: any): _81.EventWithdrawProposal;
                toJSON(message: _81.EventWithdrawProposal): unknown;
                fromPartial(object: Partial<_81.EventWithdrawProposal>): _81.EventWithdrawProposal;
                fromAmino(object: _81.EventWithdrawProposalAmino): _81.EventWithdrawProposal;
                toAmino(message: _81.EventWithdrawProposal): _81.EventWithdrawProposalAmino;
                fromAminoMsg(object: _81.EventWithdrawProposalAminoMsg): _81.EventWithdrawProposal;
                toAminoMsg(message: _81.EventWithdrawProposal): _81.EventWithdrawProposalAminoMsg;
                fromProtoMsg(message: _81.EventWithdrawProposalProtoMsg): _81.EventWithdrawProposal;
                toProto(message: _81.EventWithdrawProposal): Uint8Array;
                toProtoMsg(message: _81.EventWithdrawProposal): _81.EventWithdrawProposalProtoMsg;
            };
            EventVote: {
                typeUrl: string;
                encode(message: _81.EventVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _81.EventVote;
                fromJSON(object: any): _81.EventVote;
                toJSON(message: _81.EventVote): unknown;
                fromPartial(object: Partial<_81.EventVote>): _81.EventVote;
                fromAmino(object: _81.EventVoteAmino): _81.EventVote;
                toAmino(message: _81.EventVote): _81.EventVoteAmino;
                fromAminoMsg(object: _81.EventVoteAminoMsg): _81.EventVote;
                toAminoMsg(message: _81.EventVote): _81.EventVoteAminoMsg;
                fromProtoMsg(message: _81.EventVoteProtoMsg): _81.EventVote;
                toProto(message: _81.EventVote): Uint8Array;
                toProtoMsg(message: _81.EventVote): _81.EventVoteProtoMsg;
            };
            EventExec: {
                typeUrl: string;
                encode(message: _81.EventExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _81.EventExec;
                fromJSON(object: any): _81.EventExec;
                toJSON(message: _81.EventExec): unknown;
                fromPartial(object: Partial<_81.EventExec>): _81.EventExec;
                fromAmino(object: _81.EventExecAmino): _81.EventExec;
                toAmino(message: _81.EventExec): _81.EventExecAmino;
                fromAminoMsg(object: _81.EventExecAminoMsg): _81.EventExec;
                toAminoMsg(message: _81.EventExec): _81.EventExecAminoMsg;
                fromProtoMsg(message: _81.EventExecProtoMsg): _81.EventExec;
                toProto(message: _81.EventExec): Uint8Array;
                toProtoMsg(message: _81.EventExec): _81.EventExecProtoMsg;
            };
            EventLeaveGroup: {
                typeUrl: string;
                encode(message: _81.EventLeaveGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _81.EventLeaveGroup;
                fromJSON(object: any): _81.EventLeaveGroup;
                toJSON(message: _81.EventLeaveGroup): unknown;
                fromPartial(object: Partial<_81.EventLeaveGroup>): _81.EventLeaveGroup;
                fromAmino(object: _81.EventLeaveGroupAmino): _81.EventLeaveGroup;
                toAmino(message: _81.EventLeaveGroup): _81.EventLeaveGroupAmino;
                fromAminoMsg(object: _81.EventLeaveGroupAminoMsg): _81.EventLeaveGroup;
                toAminoMsg(message: _81.EventLeaveGroup): _81.EventLeaveGroupAminoMsg;
                fromProtoMsg(message: _81.EventLeaveGroupProtoMsg): _81.EventLeaveGroup;
                toProto(message: _81.EventLeaveGroup): Uint8Array;
                toProtoMsg(message: _81.EventLeaveGroup): _81.EventLeaveGroupProtoMsg;
            };
            EventProposalPruned: {
                typeUrl: string;
                encode(message: _81.EventProposalPruned, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _81.EventProposalPruned;
                fromJSON(object: any): _81.EventProposalPruned;
                toJSON(message: _81.EventProposalPruned): unknown;
                fromPartial(object: Partial<_81.EventProposalPruned>): _81.EventProposalPruned;
                fromAmino(object: _81.EventProposalPrunedAmino): _81.EventProposalPruned;
                toAmino(message: _81.EventProposalPruned): _81.EventProposalPrunedAmino;
                fromAminoMsg(object: _81.EventProposalPrunedAminoMsg): _81.EventProposalPruned;
                toAminoMsg(message: _81.EventProposalPruned): _81.EventProposalPrunedAminoMsg;
                fromProtoMsg(message: _81.EventProposalPrunedProtoMsg): _81.EventProposalPruned;
                toProto(message: _81.EventProposalPruned): Uint8Array;
                toProtoMsg(message: _81.EventProposalPruned): _81.EventProposalPrunedProtoMsg;
            };
        };
    }
    namespace ics23 {
        const v1: {
            hashOpFromJSON(object: any): _86.HashOp;
            hashOpToJSON(object: _86.HashOp): string;
            lengthOpFromJSON(object: any): _86.LengthOp;
            lengthOpToJSON(object: _86.LengthOp): string;
            protobufPackage: "cosmos.ics23.v1";
            HashOp: typeof _86.HashOp;
            HashOpSDKType: typeof _86.HashOp;
            HashOpAmino: typeof _86.HashOp;
            LengthOp: typeof _86.LengthOp;
            LengthOpSDKType: typeof _86.LengthOp;
            LengthOpAmino: typeof _86.LengthOp;
            ExistenceProof: {
                typeUrl: string;
                encode(message: _86.ExistenceProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _86.ExistenceProof;
                fromJSON(object: any): _86.ExistenceProof;
                toJSON(message: _86.ExistenceProof): unknown;
                fromPartial(object: Partial<_86.ExistenceProof>): _86.ExistenceProof;
                fromAmino(object: _86.ExistenceProofAmino): _86.ExistenceProof;
                toAmino(message: _86.ExistenceProof): _86.ExistenceProofAmino;
                fromAminoMsg(object: _86.ExistenceProofAminoMsg): _86.ExistenceProof;
                toAminoMsg(message: _86.ExistenceProof): _86.ExistenceProofAminoMsg;
                fromProtoMsg(message: _86.ExistenceProofProtoMsg): _86.ExistenceProof;
                toProto(message: _86.ExistenceProof): Uint8Array;
                toProtoMsg(message: _86.ExistenceProof): _86.ExistenceProofProtoMsg;
            };
            NonExistenceProof: {
                typeUrl: string;
                encode(message: _86.NonExistenceProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _86.NonExistenceProof;
                fromJSON(object: any): _86.NonExistenceProof;
                toJSON(message: _86.NonExistenceProof): unknown;
                fromPartial(object: Partial<_86.NonExistenceProof>): _86.NonExistenceProof;
                fromAmino(object: _86.NonExistenceProofAmino): _86.NonExistenceProof;
                toAmino(message: _86.NonExistenceProof): _86.NonExistenceProofAmino;
                fromAminoMsg(object: _86.NonExistenceProofAminoMsg): _86.NonExistenceProof;
                toAminoMsg(message: _86.NonExistenceProof): _86.NonExistenceProofAminoMsg;
                fromProtoMsg(message: _86.NonExistenceProofProtoMsg): _86.NonExistenceProof;
                toProto(message: _86.NonExistenceProof): Uint8Array;
                toProtoMsg(message: _86.NonExistenceProof): _86.NonExistenceProofProtoMsg;
            };
            CommitmentProof: {
                typeUrl: string;
                encode(message: _86.CommitmentProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _86.CommitmentProof;
                fromJSON(object: any): _86.CommitmentProof;
                toJSON(message: _86.CommitmentProof): unknown;
                fromPartial(object: Partial<_86.CommitmentProof>): _86.CommitmentProof;
                fromAmino(object: _86.CommitmentProofAmino): _86.CommitmentProof;
                toAmino(message: _86.CommitmentProof): _86.CommitmentProofAmino;
                fromAminoMsg(object: _86.CommitmentProofAminoMsg): _86.CommitmentProof;
                toAminoMsg(message: _86.CommitmentProof): _86.CommitmentProofAminoMsg;
                fromProtoMsg(message: _86.CommitmentProofProtoMsg): _86.CommitmentProof;
                toProto(message: _86.CommitmentProof): Uint8Array;
                toProtoMsg(message: _86.CommitmentProof): _86.CommitmentProofProtoMsg;
            };
            LeafOp: {
                typeUrl: string;
                encode(message: _86.LeafOp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _86.LeafOp;
                fromJSON(object: any): _86.LeafOp;
                toJSON(message: _86.LeafOp): unknown;
                fromPartial(object: Partial<_86.LeafOp>): _86.LeafOp;
                fromAmino(object: _86.LeafOpAmino): _86.LeafOp;
                toAmino(message: _86.LeafOp): _86.LeafOpAmino;
                fromAminoMsg(object: _86.LeafOpAminoMsg): _86.LeafOp;
                toAminoMsg(message: _86.LeafOp): _86.LeafOpAminoMsg;
                fromProtoMsg(message: _86.LeafOpProtoMsg): _86.LeafOp;
                toProto(message: _86.LeafOp): Uint8Array;
                toProtoMsg(message: _86.LeafOp): _86.LeafOpProtoMsg;
            };
            InnerOp: {
                typeUrl: string;
                encode(message: _86.InnerOp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _86.InnerOp;
                fromJSON(object: any): _86.InnerOp;
                toJSON(message: _86.InnerOp): unknown;
                fromPartial(object: Partial<_86.InnerOp>): _86.InnerOp;
                fromAmino(object: _86.InnerOpAmino): _86.InnerOp;
                toAmino(message: _86.InnerOp): _86.InnerOpAmino;
                fromAminoMsg(object: _86.InnerOpAminoMsg): _86.InnerOp;
                toAminoMsg(message: _86.InnerOp): _86.InnerOpAminoMsg;
                fromProtoMsg(message: _86.InnerOpProtoMsg): _86.InnerOp;
                toProto(message: _86.InnerOp): Uint8Array;
                toProtoMsg(message: _86.InnerOp): _86.InnerOpProtoMsg;
            };
            ProofSpec: {
                typeUrl: string;
                encode(message: _86.ProofSpec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _86.ProofSpec;
                fromJSON(object: any): _86.ProofSpec;
                toJSON(message: _86.ProofSpec): unknown;
                fromPartial(object: Partial<_86.ProofSpec>): _86.ProofSpec;
                fromAmino(object: _86.ProofSpecAmino): _86.ProofSpec;
                toAmino(message: _86.ProofSpec): _86.ProofSpecAmino;
                fromAminoMsg(object: _86.ProofSpecAminoMsg): _86.ProofSpec;
                toAminoMsg(message: _86.ProofSpec): _86.ProofSpecAminoMsg;
                fromProtoMsg(message: _86.ProofSpecProtoMsg): _86.ProofSpec;
                toProto(message: _86.ProofSpec): Uint8Array;
                toProtoMsg(message: _86.ProofSpec): _86.ProofSpecProtoMsg;
            };
            InnerSpec: {
                typeUrl: string;
                encode(message: _86.InnerSpec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _86.InnerSpec;
                fromJSON(object: any): _86.InnerSpec;
                toJSON(message: _86.InnerSpec): unknown;
                fromPartial(object: Partial<_86.InnerSpec>): _86.InnerSpec;
                fromAmino(object: _86.InnerSpecAmino): _86.InnerSpec;
                toAmino(message: _86.InnerSpec): _86.InnerSpecAmino;
                fromAminoMsg(object: _86.InnerSpecAminoMsg): _86.InnerSpec;
                toAminoMsg(message: _86.InnerSpec): _86.InnerSpecAminoMsg;
                fromProtoMsg(message: _86.InnerSpecProtoMsg): _86.InnerSpec;
                toProto(message: _86.InnerSpec): Uint8Array;
                toProtoMsg(message: _86.InnerSpec): _86.InnerSpecProtoMsg;
            };
            BatchProof: {
                typeUrl: string;
                encode(message: _86.BatchProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _86.BatchProof;
                fromJSON(object: any): _86.BatchProof;
                toJSON(message: _86.BatchProof): unknown;
                fromPartial(object: Partial<_86.BatchProof>): _86.BatchProof;
                fromAmino(object: _86.BatchProofAmino): _86.BatchProof;
                toAmino(message: _86.BatchProof): _86.BatchProofAmino;
                fromAminoMsg(object: _86.BatchProofAminoMsg): _86.BatchProof;
                toAminoMsg(message: _86.BatchProof): _86.BatchProofAminoMsg;
                fromProtoMsg(message: _86.BatchProofProtoMsg): _86.BatchProof;
                toProto(message: _86.BatchProof): Uint8Array;
                toProtoMsg(message: _86.BatchProof): _86.BatchProofProtoMsg;
            };
            BatchEntry: {
                typeUrl: string;
                encode(message: _86.BatchEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _86.BatchEntry;
                fromJSON(object: any): _86.BatchEntry;
                toJSON(message: _86.BatchEntry): unknown;
                fromPartial(object: Partial<_86.BatchEntry>): _86.BatchEntry;
                fromAmino(object: _86.BatchEntryAmino): _86.BatchEntry;
                toAmino(message: _86.BatchEntry): _86.BatchEntryAmino;
                fromAminoMsg(object: _86.BatchEntryAminoMsg): _86.BatchEntry;
                toAminoMsg(message: _86.BatchEntry): _86.BatchEntryAminoMsg;
                fromProtoMsg(message: _86.BatchEntryProtoMsg): _86.BatchEntry;
                toProto(message: _86.BatchEntry): Uint8Array;
                toProtoMsg(message: _86.BatchEntry): _86.BatchEntryProtoMsg;
            };
            CompressedBatchProof: {
                typeUrl: string;
                encode(message: _86.CompressedBatchProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _86.CompressedBatchProof;
                fromJSON(object: any): _86.CompressedBatchProof;
                toJSON(message: _86.CompressedBatchProof): unknown;
                fromPartial(object: Partial<_86.CompressedBatchProof>): _86.CompressedBatchProof;
                fromAmino(object: _86.CompressedBatchProofAmino): _86.CompressedBatchProof;
                toAmino(message: _86.CompressedBatchProof): _86.CompressedBatchProofAmino;
                fromAminoMsg(object: _86.CompressedBatchProofAminoMsg): _86.CompressedBatchProof;
                toAminoMsg(message: _86.CompressedBatchProof): _86.CompressedBatchProofAminoMsg;
                fromProtoMsg(message: _86.CompressedBatchProofProtoMsg): _86.CompressedBatchProof;
                toProto(message: _86.CompressedBatchProof): Uint8Array;
                toProtoMsg(message: _86.CompressedBatchProof): _86.CompressedBatchProofProtoMsg;
            };
            CompressedBatchEntry: {
                typeUrl: string;
                encode(message: _86.CompressedBatchEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _86.CompressedBatchEntry;
                fromJSON(object: any): _86.CompressedBatchEntry;
                toJSON(message: _86.CompressedBatchEntry): unknown;
                fromPartial(object: Partial<_86.CompressedBatchEntry>): _86.CompressedBatchEntry;
                fromAmino(object: _86.CompressedBatchEntryAmino): _86.CompressedBatchEntry;
                toAmino(message: _86.CompressedBatchEntry): _86.CompressedBatchEntryAmino;
                fromAminoMsg(object: _86.CompressedBatchEntryAminoMsg): _86.CompressedBatchEntry;
                toAminoMsg(message: _86.CompressedBatchEntry): _86.CompressedBatchEntryAminoMsg;
                fromProtoMsg(message: _86.CompressedBatchEntryProtoMsg): _86.CompressedBatchEntry;
                toProto(message: _86.CompressedBatchEntry): Uint8Array;
                toProtoMsg(message: _86.CompressedBatchEntry): _86.CompressedBatchEntryProtoMsg;
            };
            CompressedExistenceProof: {
                typeUrl: string;
                encode(message: _86.CompressedExistenceProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _86.CompressedExistenceProof;
                fromJSON(object: any): _86.CompressedExistenceProof;
                toJSON(message: _86.CompressedExistenceProof): unknown;
                fromPartial(object: Partial<_86.CompressedExistenceProof>): _86.CompressedExistenceProof;
                fromAmino(object: _86.CompressedExistenceProofAmino): _86.CompressedExistenceProof;
                toAmino(message: _86.CompressedExistenceProof): _86.CompressedExistenceProofAmino;
                fromAminoMsg(object: _86.CompressedExistenceProofAminoMsg): _86.CompressedExistenceProof;
                toAminoMsg(message: _86.CompressedExistenceProof): _86.CompressedExistenceProofAminoMsg;
                fromProtoMsg(message: _86.CompressedExistenceProofProtoMsg): _86.CompressedExistenceProof;
                toProto(message: _86.CompressedExistenceProof): Uint8Array;
                toProtoMsg(message: _86.CompressedExistenceProof): _86.CompressedExistenceProofProtoMsg;
            };
            CompressedNonExistenceProof: {
                typeUrl: string;
                encode(message: _86.CompressedNonExistenceProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _86.CompressedNonExistenceProof;
                fromJSON(object: any): _86.CompressedNonExistenceProof;
                toJSON(message: _86.CompressedNonExistenceProof): unknown;
                fromPartial(object: Partial<_86.CompressedNonExistenceProof>): _86.CompressedNonExistenceProof;
                fromAmino(object: _86.CompressedNonExistenceProofAmino): _86.CompressedNonExistenceProof;
                toAmino(message: _86.CompressedNonExistenceProof): _86.CompressedNonExistenceProofAmino;
                fromAminoMsg(object: _86.CompressedNonExistenceProofAminoMsg): _86.CompressedNonExistenceProof;
                toAminoMsg(message: _86.CompressedNonExistenceProof): _86.CompressedNonExistenceProofAminoMsg;
                fromProtoMsg(message: _86.CompressedNonExistenceProofProtoMsg): _86.CompressedNonExistenceProof;
                toProto(message: _86.CompressedNonExistenceProof): Uint8Array;
                toProtoMsg(message: _86.CompressedNonExistenceProof): _86.CompressedNonExistenceProofProtoMsg;
            };
        };
    }
    namespace mint {
        namespace module {
            const v1: {
                protobufPackage: "cosmos.mint.module.v1";
                Module: {
                    typeUrl: string;
                    encode(message: _87.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _87.Module;
                    fromJSON(object: any): _87.Module;
                    toJSON(message: _87.Module): unknown;
                    fromPartial(object: Partial<_87.Module>): _87.Module;
                    fromAmino(object: _87.ModuleAmino): _87.Module;
                    toAmino(message: _87.Module): _87.ModuleAmino;
                    fromAminoMsg(object: _87.ModuleAminoMsg): _87.Module;
                    toAminoMsg(message: _87.Module): _87.ModuleAminoMsg;
                    fromProtoMsg(message: _87.ModuleProtoMsg): _87.Module;
                    toProto(message: _87.Module): Uint8Array;
                    toProtoMsg(message: _87.Module): _87.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            Msg: typeof _271.Msg;
            Query: typeof _254.Query;
            QueryClientImpl: typeof _254.QueryClientImpl;
            LCDQueryClient: typeof _236.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    updateParams(value: _91.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    updateParams(value: _91.MsgUpdateParams): {
                        typeUrl: string;
                        value: _91.MsgUpdateParams;
                    };
                };
                toJSON: {
                    updateParams(value: _91.MsgUpdateParams): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _91.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    updateParams(value: _91.MsgUpdateParams): {
                        typeUrl: string;
                        value: _91.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.mint.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _91.MsgUpdateParams) => _91.MsgUpdateParamsAmino;
                    fromAmino: (object: _91.MsgUpdateParamsAmino) => _91.MsgUpdateParams;
                };
            };
            protobufPackage: "cosmos.mint.v1beta1";
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _91.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _91.MsgUpdateParams;
                fromJSON(object: any): _91.MsgUpdateParams;
                toJSON(message: _91.MsgUpdateParams): unknown;
                fromPartial(object: Partial<_91.MsgUpdateParams>): _91.MsgUpdateParams;
                fromAmino(object: _91.MsgUpdateParamsAmino): _91.MsgUpdateParams;
                toAmino(message: _91.MsgUpdateParams): _91.MsgUpdateParamsAmino;
                fromAminoMsg(object: _91.MsgUpdateParamsAminoMsg): _91.MsgUpdateParams;
                toAminoMsg(message: _91.MsgUpdateParams): _91.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _91.MsgUpdateParamsProtoMsg): _91.MsgUpdateParams;
                toProto(message: _91.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _91.MsgUpdateParams): _91.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _91.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _91.MsgUpdateParamsResponse;
                fromJSON(_: any): _91.MsgUpdateParamsResponse;
                toJSON(_: _91.MsgUpdateParamsResponse): unknown;
                fromPartial(_: Partial<_91.MsgUpdateParamsResponse>): _91.MsgUpdateParamsResponse;
                fromAmino(_: _91.MsgUpdateParamsResponseAmino): _91.MsgUpdateParamsResponse;
                toAmino(_: _91.MsgUpdateParamsResponse): _91.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _91.MsgUpdateParamsResponseAminoMsg): _91.MsgUpdateParamsResponse;
                toAminoMsg(message: _91.MsgUpdateParamsResponse): _91.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _91.MsgUpdateParamsResponseProtoMsg): _91.MsgUpdateParamsResponse;
                toProto(message: _91.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _91.MsgUpdateParamsResponse): _91.MsgUpdateParamsResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _90.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _90.QueryParamsRequest;
                fromJSON(_: any): _90.QueryParamsRequest;
                toJSON(_: _90.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_90.QueryParamsRequest>): _90.QueryParamsRequest;
                fromAmino(_: _90.QueryParamsRequestAmino): _90.QueryParamsRequest;
                toAmino(_: _90.QueryParamsRequest): _90.QueryParamsRequestAmino;
                fromAminoMsg(object: _90.QueryParamsRequestAminoMsg): _90.QueryParamsRequest;
                toAminoMsg(message: _90.QueryParamsRequest): _90.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _90.QueryParamsRequestProtoMsg): _90.QueryParamsRequest;
                toProto(message: _90.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _90.QueryParamsRequest): _90.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _90.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _90.QueryParamsResponse;
                fromJSON(object: any): _90.QueryParamsResponse;
                toJSON(message: _90.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_90.QueryParamsResponse>): _90.QueryParamsResponse;
                fromAmino(object: _90.QueryParamsResponseAmino): _90.QueryParamsResponse;
                toAmino(message: _90.QueryParamsResponse): _90.QueryParamsResponseAmino;
                fromAminoMsg(object: _90.QueryParamsResponseAminoMsg): _90.QueryParamsResponse;
                toAminoMsg(message: _90.QueryParamsResponse): _90.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _90.QueryParamsResponseProtoMsg): _90.QueryParamsResponse;
                toProto(message: _90.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _90.QueryParamsResponse): _90.QueryParamsResponseProtoMsg;
            };
            QueryInflationRequest: {
                typeUrl: string;
                encode(_: _90.QueryInflationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _90.QueryInflationRequest;
                fromJSON(_: any): _90.QueryInflationRequest;
                toJSON(_: _90.QueryInflationRequest): unknown;
                fromPartial(_: Partial<_90.QueryInflationRequest>): _90.QueryInflationRequest;
                fromAmino(_: _90.QueryInflationRequestAmino): _90.QueryInflationRequest;
                toAmino(_: _90.QueryInflationRequest): _90.QueryInflationRequestAmino;
                fromAminoMsg(object: _90.QueryInflationRequestAminoMsg): _90.QueryInflationRequest;
                toAminoMsg(message: _90.QueryInflationRequest): _90.QueryInflationRequestAminoMsg;
                fromProtoMsg(message: _90.QueryInflationRequestProtoMsg): _90.QueryInflationRequest;
                toProto(message: _90.QueryInflationRequest): Uint8Array;
                toProtoMsg(message: _90.QueryInflationRequest): _90.QueryInflationRequestProtoMsg;
            };
            QueryInflationResponse: {
                typeUrl: string;
                encode(message: _90.QueryInflationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _90.QueryInflationResponse;
                fromJSON(object: any): _90.QueryInflationResponse;
                toJSON(message: _90.QueryInflationResponse): unknown;
                fromPartial(object: Partial<_90.QueryInflationResponse>): _90.QueryInflationResponse;
                fromAmino(object: _90.QueryInflationResponseAmino): _90.QueryInflationResponse;
                toAmino(message: _90.QueryInflationResponse): _90.QueryInflationResponseAmino;
                fromAminoMsg(object: _90.QueryInflationResponseAminoMsg): _90.QueryInflationResponse;
                toAminoMsg(message: _90.QueryInflationResponse): _90.QueryInflationResponseAminoMsg;
                fromProtoMsg(message: _90.QueryInflationResponseProtoMsg): _90.QueryInflationResponse;
                toProto(message: _90.QueryInflationResponse): Uint8Array;
                toProtoMsg(message: _90.QueryInflationResponse): _90.QueryInflationResponseProtoMsg;
            };
            QueryAnnualProvisionsRequest: {
                typeUrl: string;
                encode(_: _90.QueryAnnualProvisionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _90.QueryAnnualProvisionsRequest;
                fromJSON(_: any): _90.QueryAnnualProvisionsRequest;
                toJSON(_: _90.QueryAnnualProvisionsRequest): unknown;
                fromPartial(_: Partial<_90.QueryAnnualProvisionsRequest>): _90.QueryAnnualProvisionsRequest;
                fromAmino(_: _90.QueryAnnualProvisionsRequestAmino): _90.QueryAnnualProvisionsRequest;
                toAmino(_: _90.QueryAnnualProvisionsRequest): _90.QueryAnnualProvisionsRequestAmino;
                fromAminoMsg(object: _90.QueryAnnualProvisionsRequestAminoMsg): _90.QueryAnnualProvisionsRequest;
                toAminoMsg(message: _90.QueryAnnualProvisionsRequest): _90.QueryAnnualProvisionsRequestAminoMsg;
                fromProtoMsg(message: _90.QueryAnnualProvisionsRequestProtoMsg): _90.QueryAnnualProvisionsRequest;
                toProto(message: _90.QueryAnnualProvisionsRequest): Uint8Array;
                toProtoMsg(message: _90.QueryAnnualProvisionsRequest): _90.QueryAnnualProvisionsRequestProtoMsg;
            };
            QueryAnnualProvisionsResponse: {
                typeUrl: string;
                encode(message: _90.QueryAnnualProvisionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _90.QueryAnnualProvisionsResponse;
                fromJSON(object: any): _90.QueryAnnualProvisionsResponse;
                toJSON(message: _90.QueryAnnualProvisionsResponse): unknown;
                fromPartial(object: Partial<_90.QueryAnnualProvisionsResponse>): _90.QueryAnnualProvisionsResponse;
                fromAmino(object: _90.QueryAnnualProvisionsResponseAmino): _90.QueryAnnualProvisionsResponse;
                toAmino(message: _90.QueryAnnualProvisionsResponse): _90.QueryAnnualProvisionsResponseAmino;
                fromAminoMsg(object: _90.QueryAnnualProvisionsResponseAminoMsg): _90.QueryAnnualProvisionsResponse;
                toAminoMsg(message: _90.QueryAnnualProvisionsResponse): _90.QueryAnnualProvisionsResponseAminoMsg;
                fromProtoMsg(message: _90.QueryAnnualProvisionsResponseProtoMsg): _90.QueryAnnualProvisionsResponse;
                toProto(message: _90.QueryAnnualProvisionsResponse): Uint8Array;
                toProtoMsg(message: _90.QueryAnnualProvisionsResponse): _90.QueryAnnualProvisionsResponseProtoMsg;
            };
            Minter: {
                typeUrl: string;
                encode(message: _89.Minter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _89.Minter;
                fromJSON(object: any): _89.Minter;
                toJSON(message: _89.Minter): unknown;
                fromPartial(object: Partial<_89.Minter>): _89.Minter;
                fromAmino(object: _89.MinterAmino): _89.Minter;
                toAmino(message: _89.Minter): _89.MinterAmino;
                fromAminoMsg(object: _89.MinterAminoMsg): _89.Minter;
                toAminoMsg(message: _89.Minter): _89.MinterAminoMsg;
                fromProtoMsg(message: _89.MinterProtoMsg): _89.Minter;
                toProto(message: _89.Minter): Uint8Array;
                toProtoMsg(message: _89.Minter): _89.MinterProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _89.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _89.Params;
                fromJSON(object: any): _89.Params;
                toJSON(message: _89.Params): unknown;
                fromPartial(object: Partial<_89.Params>): _89.Params;
                fromAmino(object: _89.ParamsAmino): _89.Params;
                toAmino(message: _89.Params): _89.ParamsAmino;
                fromAminoMsg(object: _89.ParamsAminoMsg): _89.Params;
                toAminoMsg(message: _89.Params): _89.ParamsAminoMsg;
                fromProtoMsg(message: _89.ParamsProtoMsg): _89.Params;
                toProto(message: _89.Params): Uint8Array;
                toProtoMsg(message: _89.Params): _89.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _88.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _88.GenesisState;
                fromJSON(object: any): _88.GenesisState;
                toJSON(message: _88.GenesisState): unknown;
                fromPartial(object: Partial<_88.GenesisState>): _88.GenesisState;
                fromAmino(object: _88.GenesisStateAmino): _88.GenesisState;
                toAmino(message: _88.GenesisState): _88.GenesisStateAmino;
                fromAminoMsg(object: _88.GenesisStateAminoMsg): _88.GenesisState;
                toAminoMsg(message: _88.GenesisState): _88.GenesisStateAminoMsg;
                fromProtoMsg(message: _88.GenesisStateProtoMsg): _88.GenesisState;
                toProto(message: _88.GenesisState): Uint8Array;
                toProtoMsg(message: _88.GenesisState): _88.GenesisStateProtoMsg;
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
                    encode(_: _93.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _93.Module;
                    fromJSON(_: any): _93.Module;
                    toJSON(_: _93.Module): unknown;
                    fromPartial(_: Partial<_93.Module>): _93.Module;
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
            Msg: typeof _272.Msg;
            Query: typeof _255.Query;
            QueryClientImpl: typeof _255.QueryClientImpl;
            LCDQueryClient: typeof _237.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _98.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _98.MsgSend): {
                        typeUrl: string;
                        value: _98.MsgSend;
                    };
                };
                toJSON: {
                    send(value: _98.MsgSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _98.MsgSend;
                    };
                };
                fromPartial: {
                    send(value: _98.MsgSend): {
                        typeUrl: string;
                        value: _98.MsgSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.nft.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _98.MsgSend) => _98.MsgSendAmino;
                    fromAmino: (object: _98.MsgSendAmino) => _98.MsgSend;
                };
            };
            protobufPackage: "cosmos.nft.v1beta1";
            MsgSend: {
                typeUrl: string;
                encode(message: _98.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _98.MsgSend;
                fromJSON(object: any): _98.MsgSend;
                toJSON(message: _98.MsgSend): unknown;
                fromPartial(object: Partial<_98.MsgSend>): _98.MsgSend;
                fromAmino(object: _98.MsgSendAmino): _98.MsgSend;
                toAmino(message: _98.MsgSend): _98.MsgSendAmino;
                fromAminoMsg(object: _98.MsgSendAminoMsg): _98.MsgSend;
                toAminoMsg(message: _98.MsgSend): _98.MsgSendAminoMsg;
                fromProtoMsg(message: _98.MsgSendProtoMsg): _98.MsgSend;
                toProto(message: _98.MsgSend): Uint8Array;
                toProtoMsg(message: _98.MsgSend): _98.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _98.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _98.MsgSendResponse;
                fromJSON(_: any): _98.MsgSendResponse;
                toJSON(_: _98.MsgSendResponse): unknown;
                fromPartial(_: Partial<_98.MsgSendResponse>): _98.MsgSendResponse;
                fromAmino(_: _98.MsgSendResponseAmino): _98.MsgSendResponse;
                toAmino(_: _98.MsgSendResponse): _98.MsgSendResponseAmino;
                fromAminoMsg(object: _98.MsgSendResponseAminoMsg): _98.MsgSendResponse;
                toAminoMsg(message: _98.MsgSendResponse): _98.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _98.MsgSendResponseProtoMsg): _98.MsgSendResponse;
                toProto(message: _98.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _98.MsgSendResponse): _98.MsgSendResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _97.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _97.QueryBalanceRequest;
                fromJSON(object: any): _97.QueryBalanceRequest;
                toJSON(message: _97.QueryBalanceRequest): unknown;
                fromPartial(object: Partial<_97.QueryBalanceRequest>): _97.QueryBalanceRequest;
                fromAmino(object: _97.QueryBalanceRequestAmino): _97.QueryBalanceRequest;
                toAmino(message: _97.QueryBalanceRequest): _97.QueryBalanceRequestAmino;
                fromAminoMsg(object: _97.QueryBalanceRequestAminoMsg): _97.QueryBalanceRequest;
                toAminoMsg(message: _97.QueryBalanceRequest): _97.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _97.QueryBalanceRequestProtoMsg): _97.QueryBalanceRequest;
                toProto(message: _97.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _97.QueryBalanceRequest): _97.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _97.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _97.QueryBalanceResponse;
                fromJSON(object: any): _97.QueryBalanceResponse;
                toJSON(message: _97.QueryBalanceResponse): unknown;
                fromPartial(object: Partial<_97.QueryBalanceResponse>): _97.QueryBalanceResponse;
                fromAmino(object: _97.QueryBalanceResponseAmino): _97.QueryBalanceResponse;
                toAmino(message: _97.QueryBalanceResponse): _97.QueryBalanceResponseAmino;
                fromAminoMsg(object: _97.QueryBalanceResponseAminoMsg): _97.QueryBalanceResponse;
                toAminoMsg(message: _97.QueryBalanceResponse): _97.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _97.QueryBalanceResponseProtoMsg): _97.QueryBalanceResponse;
                toProto(message: _97.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _97.QueryBalanceResponse): _97.QueryBalanceResponseProtoMsg;
            };
            QueryOwnerRequest: {
                typeUrl: string;
                encode(message: _97.QueryOwnerRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _97.QueryOwnerRequest;
                fromJSON(object: any): _97.QueryOwnerRequest;
                toJSON(message: _97.QueryOwnerRequest): unknown;
                fromPartial(object: Partial<_97.QueryOwnerRequest>): _97.QueryOwnerRequest;
                fromAmino(object: _97.QueryOwnerRequestAmino): _97.QueryOwnerRequest;
                toAmino(message: _97.QueryOwnerRequest): _97.QueryOwnerRequestAmino;
                fromAminoMsg(object: _97.QueryOwnerRequestAminoMsg): _97.QueryOwnerRequest;
                toAminoMsg(message: _97.QueryOwnerRequest): _97.QueryOwnerRequestAminoMsg;
                fromProtoMsg(message: _97.QueryOwnerRequestProtoMsg): _97.QueryOwnerRequest;
                toProto(message: _97.QueryOwnerRequest): Uint8Array;
                toProtoMsg(message: _97.QueryOwnerRequest): _97.QueryOwnerRequestProtoMsg;
            };
            QueryOwnerResponse: {
                typeUrl: string;
                encode(message: _97.QueryOwnerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _97.QueryOwnerResponse;
                fromJSON(object: any): _97.QueryOwnerResponse;
                toJSON(message: _97.QueryOwnerResponse): unknown;
                fromPartial(object: Partial<_97.QueryOwnerResponse>): _97.QueryOwnerResponse;
                fromAmino(object: _97.QueryOwnerResponseAmino): _97.QueryOwnerResponse;
                toAmino(message: _97.QueryOwnerResponse): _97.QueryOwnerResponseAmino;
                fromAminoMsg(object: _97.QueryOwnerResponseAminoMsg): _97.QueryOwnerResponse;
                toAminoMsg(message: _97.QueryOwnerResponse): _97.QueryOwnerResponseAminoMsg;
                fromProtoMsg(message: _97.QueryOwnerResponseProtoMsg): _97.QueryOwnerResponse;
                toProto(message: _97.QueryOwnerResponse): Uint8Array;
                toProtoMsg(message: _97.QueryOwnerResponse): _97.QueryOwnerResponseProtoMsg;
            };
            QuerySupplyRequest: {
                typeUrl: string;
                encode(message: _97.QuerySupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _97.QuerySupplyRequest;
                fromJSON(object: any): _97.QuerySupplyRequest;
                toJSON(message: _97.QuerySupplyRequest): unknown;
                fromPartial(object: Partial<_97.QuerySupplyRequest>): _97.QuerySupplyRequest;
                fromAmino(object: _97.QuerySupplyRequestAmino): _97.QuerySupplyRequest;
                toAmino(message: _97.QuerySupplyRequest): _97.QuerySupplyRequestAmino;
                fromAminoMsg(object: _97.QuerySupplyRequestAminoMsg): _97.QuerySupplyRequest;
                toAminoMsg(message: _97.QuerySupplyRequest): _97.QuerySupplyRequestAminoMsg;
                fromProtoMsg(message: _97.QuerySupplyRequestProtoMsg): _97.QuerySupplyRequest;
                toProto(message: _97.QuerySupplyRequest): Uint8Array;
                toProtoMsg(message: _97.QuerySupplyRequest): _97.QuerySupplyRequestProtoMsg;
            };
            QuerySupplyResponse: {
                typeUrl: string;
                encode(message: _97.QuerySupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _97.QuerySupplyResponse;
                fromJSON(object: any): _97.QuerySupplyResponse;
                toJSON(message: _97.QuerySupplyResponse): unknown;
                fromPartial(object: Partial<_97.QuerySupplyResponse>): _97.QuerySupplyResponse;
                fromAmino(object: _97.QuerySupplyResponseAmino): _97.QuerySupplyResponse;
                toAmino(message: _97.QuerySupplyResponse): _97.QuerySupplyResponseAmino;
                fromAminoMsg(object: _97.QuerySupplyResponseAminoMsg): _97.QuerySupplyResponse;
                toAminoMsg(message: _97.QuerySupplyResponse): _97.QuerySupplyResponseAminoMsg;
                fromProtoMsg(message: _97.QuerySupplyResponseProtoMsg): _97.QuerySupplyResponse;
                toProto(message: _97.QuerySupplyResponse): Uint8Array;
                toProtoMsg(message: _97.QuerySupplyResponse): _97.QuerySupplyResponseProtoMsg;
            };
            QueryNFTsRequest: {
                typeUrl: string;
                encode(message: _97.QueryNFTsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _97.QueryNFTsRequest;
                fromJSON(object: any): _97.QueryNFTsRequest;
                toJSON(message: _97.QueryNFTsRequest): unknown;
                fromPartial(object: Partial<_97.QueryNFTsRequest>): _97.QueryNFTsRequest;
                fromAmino(object: _97.QueryNFTsRequestAmino): _97.QueryNFTsRequest;
                toAmino(message: _97.QueryNFTsRequest): _97.QueryNFTsRequestAmino;
                fromAminoMsg(object: _97.QueryNFTsRequestAminoMsg): _97.QueryNFTsRequest;
                toAminoMsg(message: _97.QueryNFTsRequest): _97.QueryNFTsRequestAminoMsg;
                fromProtoMsg(message: _97.QueryNFTsRequestProtoMsg): _97.QueryNFTsRequest;
                toProto(message: _97.QueryNFTsRequest): Uint8Array;
                toProtoMsg(message: _97.QueryNFTsRequest): _97.QueryNFTsRequestProtoMsg;
            };
            QueryNFTsResponse: {
                typeUrl: string;
                encode(message: _97.QueryNFTsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _97.QueryNFTsResponse;
                fromJSON(object: any): _97.QueryNFTsResponse;
                toJSON(message: _97.QueryNFTsResponse): unknown;
                fromPartial(object: Partial<_97.QueryNFTsResponse>): _97.QueryNFTsResponse;
                fromAmino(object: _97.QueryNFTsResponseAmino): _97.QueryNFTsResponse;
                toAmino(message: _97.QueryNFTsResponse): _97.QueryNFTsResponseAmino;
                fromAminoMsg(object: _97.QueryNFTsResponseAminoMsg): _97.QueryNFTsResponse;
                toAminoMsg(message: _97.QueryNFTsResponse): _97.QueryNFTsResponseAminoMsg;
                fromProtoMsg(message: _97.QueryNFTsResponseProtoMsg): _97.QueryNFTsResponse;
                toProto(message: _97.QueryNFTsResponse): Uint8Array;
                toProtoMsg(message: _97.QueryNFTsResponse): _97.QueryNFTsResponseProtoMsg;
            };
            QueryNFTRequest: {
                typeUrl: string;
                encode(message: _97.QueryNFTRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _97.QueryNFTRequest;
                fromJSON(object: any): _97.QueryNFTRequest;
                toJSON(message: _97.QueryNFTRequest): unknown;
                fromPartial(object: Partial<_97.QueryNFTRequest>): _97.QueryNFTRequest;
                fromAmino(object: _97.QueryNFTRequestAmino): _97.QueryNFTRequest;
                toAmino(message: _97.QueryNFTRequest): _97.QueryNFTRequestAmino;
                fromAminoMsg(object: _97.QueryNFTRequestAminoMsg): _97.QueryNFTRequest;
                toAminoMsg(message: _97.QueryNFTRequest): _97.QueryNFTRequestAminoMsg;
                fromProtoMsg(message: _97.QueryNFTRequestProtoMsg): _97.QueryNFTRequest;
                toProto(message: _97.QueryNFTRequest): Uint8Array;
                toProtoMsg(message: _97.QueryNFTRequest): _97.QueryNFTRequestProtoMsg;
            };
            QueryNFTResponse: {
                typeUrl: string;
                encode(message: _97.QueryNFTResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _97.QueryNFTResponse;
                fromJSON(object: any): _97.QueryNFTResponse;
                toJSON(message: _97.QueryNFTResponse): unknown;
                fromPartial(object: Partial<_97.QueryNFTResponse>): _97.QueryNFTResponse;
                fromAmino(object: _97.QueryNFTResponseAmino): _97.QueryNFTResponse;
                toAmino(message: _97.QueryNFTResponse): _97.QueryNFTResponseAmino;
                fromAminoMsg(object: _97.QueryNFTResponseAminoMsg): _97.QueryNFTResponse;
                toAminoMsg(message: _97.QueryNFTResponse): _97.QueryNFTResponseAminoMsg;
                fromProtoMsg(message: _97.QueryNFTResponseProtoMsg): _97.QueryNFTResponse;
                toProto(message: _97.QueryNFTResponse): Uint8Array;
                toProtoMsg(message: _97.QueryNFTResponse): _97.QueryNFTResponseProtoMsg;
            };
            QueryClassRequest: {
                typeUrl: string;
                encode(message: _97.QueryClassRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _97.QueryClassRequest;
                fromJSON(object: any): _97.QueryClassRequest;
                toJSON(message: _97.QueryClassRequest): unknown;
                fromPartial(object: Partial<_97.QueryClassRequest>): _97.QueryClassRequest;
                fromAmino(object: _97.QueryClassRequestAmino): _97.QueryClassRequest;
                toAmino(message: _97.QueryClassRequest): _97.QueryClassRequestAmino;
                fromAminoMsg(object: _97.QueryClassRequestAminoMsg): _97.QueryClassRequest;
                toAminoMsg(message: _97.QueryClassRequest): _97.QueryClassRequestAminoMsg;
                fromProtoMsg(message: _97.QueryClassRequestProtoMsg): _97.QueryClassRequest;
                toProto(message: _97.QueryClassRequest): Uint8Array;
                toProtoMsg(message: _97.QueryClassRequest): _97.QueryClassRequestProtoMsg;
            };
            QueryClassResponse: {
                typeUrl: string;
                encode(message: _97.QueryClassResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _97.QueryClassResponse;
                fromJSON(object: any): _97.QueryClassResponse;
                toJSON(message: _97.QueryClassResponse): unknown;
                fromPartial(object: Partial<_97.QueryClassResponse>): _97.QueryClassResponse;
                fromAmino(object: _97.QueryClassResponseAmino): _97.QueryClassResponse;
                toAmino(message: _97.QueryClassResponse): _97.QueryClassResponseAmino;
                fromAminoMsg(object: _97.QueryClassResponseAminoMsg): _97.QueryClassResponse;
                toAminoMsg(message: _97.QueryClassResponse): _97.QueryClassResponseAminoMsg;
                fromProtoMsg(message: _97.QueryClassResponseProtoMsg): _97.QueryClassResponse;
                toProto(message: _97.QueryClassResponse): Uint8Array;
                toProtoMsg(message: _97.QueryClassResponse): _97.QueryClassResponseProtoMsg;
            };
            QueryClassesRequest: {
                typeUrl: string;
                encode(message: _97.QueryClassesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _97.QueryClassesRequest;
                fromJSON(object: any): _97.QueryClassesRequest;
                toJSON(message: _97.QueryClassesRequest): unknown;
                fromPartial(object: Partial<_97.QueryClassesRequest>): _97.QueryClassesRequest;
                fromAmino(object: _97.QueryClassesRequestAmino): _97.QueryClassesRequest;
                toAmino(message: _97.QueryClassesRequest): _97.QueryClassesRequestAmino;
                fromAminoMsg(object: _97.QueryClassesRequestAminoMsg): _97.QueryClassesRequest;
                toAminoMsg(message: _97.QueryClassesRequest): _97.QueryClassesRequestAminoMsg;
                fromProtoMsg(message: _97.QueryClassesRequestProtoMsg): _97.QueryClassesRequest;
                toProto(message: _97.QueryClassesRequest): Uint8Array;
                toProtoMsg(message: _97.QueryClassesRequest): _97.QueryClassesRequestProtoMsg;
            };
            QueryClassesResponse: {
                typeUrl: string;
                encode(message: _97.QueryClassesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _97.QueryClassesResponse;
                fromJSON(object: any): _97.QueryClassesResponse;
                toJSON(message: _97.QueryClassesResponse): unknown;
                fromPartial(object: Partial<_97.QueryClassesResponse>): _97.QueryClassesResponse;
                fromAmino(object: _97.QueryClassesResponseAmino): _97.QueryClassesResponse;
                toAmino(message: _97.QueryClassesResponse): _97.QueryClassesResponseAmino;
                fromAminoMsg(object: _97.QueryClassesResponseAminoMsg): _97.QueryClassesResponse;
                toAminoMsg(message: _97.QueryClassesResponse): _97.QueryClassesResponseAminoMsg;
                fromProtoMsg(message: _97.QueryClassesResponseProtoMsg): _97.QueryClassesResponse;
                toProto(message: _97.QueryClassesResponse): Uint8Array;
                toProtoMsg(message: _97.QueryClassesResponse): _97.QueryClassesResponseProtoMsg;
            };
            Class: {
                typeUrl: string;
                encode(message: _96.Class, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _96.Class;
                fromJSON(object: any): _96.Class;
                toJSON(message: _96.Class): unknown;
                fromPartial(object: Partial<_96.Class>): _96.Class;
                fromAmino(object: _96.ClassAmino): _96.Class;
                toAmino(message: _96.Class): _96.ClassAmino;
                fromAminoMsg(object: _96.ClassAminoMsg): _96.Class;
                toAminoMsg(message: _96.Class): _96.ClassAminoMsg;
                fromProtoMsg(message: _96.ClassProtoMsg): _96.Class;
                toProto(message: _96.Class): Uint8Array;
                toProtoMsg(message: _96.Class): _96.ClassProtoMsg;
            };
            NFT: {
                typeUrl: string;
                encode(message: _96.NFT, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _96.NFT;
                fromJSON(object: any): _96.NFT;
                toJSON(message: _96.NFT): unknown;
                fromPartial(object: Partial<_96.NFT>): _96.NFT;
                fromAmino(object: _96.NFTAmino): _96.NFT;
                toAmino(message: _96.NFT): _96.NFTAmino;
                fromAminoMsg(object: _96.NFTAminoMsg): _96.NFT;
                toAminoMsg(message: _96.NFT): _96.NFTAminoMsg;
                fromProtoMsg(message: _96.NFTProtoMsg): _96.NFT;
                toProto(message: _96.NFT): Uint8Array;
                toProtoMsg(message: _96.NFT): _96.NFTProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _95.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _95.GenesisState;
                fromJSON(object: any): _95.GenesisState;
                toJSON(message: _95.GenesisState): unknown;
                fromPartial(object: Partial<_95.GenesisState>): _95.GenesisState;
                fromAmino(object: _95.GenesisStateAmino): _95.GenesisState;
                toAmino(message: _95.GenesisState): _95.GenesisStateAmino;
                fromAminoMsg(object: _95.GenesisStateAminoMsg): _95.GenesisState;
                toAminoMsg(message: _95.GenesisState): _95.GenesisStateAminoMsg;
                fromProtoMsg(message: _95.GenesisStateProtoMsg): _95.GenesisState;
                toProto(message: _95.GenesisState): Uint8Array;
                toProtoMsg(message: _95.GenesisState): _95.GenesisStateProtoMsg;
            };
            Entry: {
                typeUrl: string;
                encode(message: _95.Entry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _95.Entry;
                fromJSON(object: any): _95.Entry;
                toJSON(message: _95.Entry): unknown;
                fromPartial(object: Partial<_95.Entry>): _95.Entry;
                fromAmino(object: _95.EntryAmino): _95.Entry;
                toAmino(message: _95.Entry): _95.EntryAmino;
                fromAminoMsg(object: _95.EntryAminoMsg): _95.Entry;
                toAminoMsg(message: _95.Entry): _95.EntryAminoMsg;
                fromProtoMsg(message: _95.EntryProtoMsg): _95.Entry;
                toProto(message: _95.Entry): Uint8Array;
                toProtoMsg(message: _95.Entry): _95.EntryProtoMsg;
            };
            EventSend: {
                typeUrl: string;
                encode(message: _94.EventSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _94.EventSend;
                fromJSON(object: any): _94.EventSend;
                toJSON(message: _94.EventSend): unknown;
                fromPartial(object: Partial<_94.EventSend>): _94.EventSend;
                fromAmino(object: _94.EventSendAmino): _94.EventSend;
                toAmino(message: _94.EventSend): _94.EventSendAmino;
                fromAminoMsg(object: _94.EventSendAminoMsg): _94.EventSend;
                toAminoMsg(message: _94.EventSend): _94.EventSendAminoMsg;
                fromProtoMsg(message: _94.EventSendProtoMsg): _94.EventSend;
                toProto(message: _94.EventSend): Uint8Array;
                toProtoMsg(message: _94.EventSend): _94.EventSendProtoMsg;
            };
            EventMint: {
                typeUrl: string;
                encode(message: _94.EventMint, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _94.EventMint;
                fromJSON(object: any): _94.EventMint;
                toJSON(message: _94.EventMint): unknown;
                fromPartial(object: Partial<_94.EventMint>): _94.EventMint;
                fromAmino(object: _94.EventMintAmino): _94.EventMint;
                toAmino(message: _94.EventMint): _94.EventMintAmino;
                fromAminoMsg(object: _94.EventMintAminoMsg): _94.EventMint;
                toAminoMsg(message: _94.EventMint): _94.EventMintAminoMsg;
                fromProtoMsg(message: _94.EventMintProtoMsg): _94.EventMint;
                toProto(message: _94.EventMint): Uint8Array;
                toProtoMsg(message: _94.EventMint): _94.EventMintProtoMsg;
            };
            EventBurn: {
                typeUrl: string;
                encode(message: _94.EventBurn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _94.EventBurn;
                fromJSON(object: any): _94.EventBurn;
                toJSON(message: _94.EventBurn): unknown;
                fromPartial(object: Partial<_94.EventBurn>): _94.EventBurn;
                fromAmino(object: _94.EventBurnAmino): _94.EventBurn;
                toAmino(message: _94.EventBurn): _94.EventBurnAmino;
                fromAminoMsg(object: _94.EventBurnAminoMsg): _94.EventBurn;
                toAminoMsg(message: _94.EventBurn): _94.EventBurnAminoMsg;
                fromProtoMsg(message: _94.EventBurnProtoMsg): _94.EventBurn;
                toProto(message: _94.EventBurn): Uint8Array;
                toProtoMsg(message: _94.EventBurn): _94.EventBurnProtoMsg;
            };
        };
    }
    namespace orm {
        namespace module {
            const v1alpha1: {
                protobufPackage: "cosmos.orm.module.v1alpha1";
                Module: {
                    typeUrl: string;
                    encode(_: _99.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _99.Module;
                    fromJSON(_: any): _99.Module;
                    toJSON(_: _99.Module): unknown;
                    fromPartial(_: Partial<_99.Module>): _99.Module;
                    fromAmino(_: _99.ModuleAmino): _99.Module;
                    toAmino(_: _99.Module): _99.ModuleAmino;
                    fromAminoMsg(object: _99.ModuleAminoMsg): _99.Module;
                    toAminoMsg(message: _99.Module): _99.ModuleAminoMsg;
                    fromProtoMsg(message: _99.ModuleProtoMsg): _99.Module;
                    toProto(message: _99.Module): Uint8Array;
                    toProtoMsg(message: _99.Module): _99.ModuleProtoMsg;
                };
            };
        }
        namespace query {
            const v1alpha1: {
                Query: typeof _256.Query;
                QueryClientImpl: typeof _256.QueryClientImpl;
                protobufPackage: "cosmos.orm.query.v1alpha1";
                GetRequest: {
                    typeUrl: string;
                    encode(message: _100.GetRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _100.GetRequest;
                    fromJSON(object: any): _100.GetRequest;
                    toJSON(message: _100.GetRequest): unknown;
                    fromPartial(object: Partial<_100.GetRequest>): _100.GetRequest;
                    fromAmino(object: _100.GetRequestAmino): _100.GetRequest;
                    toAmino(message: _100.GetRequest): _100.GetRequestAmino;
                    fromAminoMsg(object: _100.GetRequestAminoMsg): _100.GetRequest;
                    toAminoMsg(message: _100.GetRequest): _100.GetRequestAminoMsg;
                    fromProtoMsg(message: _100.GetRequestProtoMsg): _100.GetRequest;
                    toProto(message: _100.GetRequest): Uint8Array;
                    toProtoMsg(message: _100.GetRequest): _100.GetRequestProtoMsg;
                };
                GetResponse: {
                    typeUrl: string;
                    encode(message: _100.GetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _100.GetResponse;
                    fromJSON(object: any): _100.GetResponse;
                    toJSON(message: _100.GetResponse): unknown;
                    fromPartial(object: Partial<_100.GetResponse>): _100.GetResponse;
                    fromAmino(object: _100.GetResponseAmino): _100.GetResponse;
                    toAmino(message: _100.GetResponse): _100.GetResponseAmino;
                    fromAminoMsg(object: _100.GetResponseAminoMsg): _100.GetResponse;
                    toAminoMsg(message: _100.GetResponse): _100.GetResponseAminoMsg;
                    fromProtoMsg(message: _100.GetResponseProtoMsg): _100.GetResponse;
                    toProto(message: _100.GetResponse): Uint8Array;
                    toProtoMsg(message: _100.GetResponse): _100.GetResponseProtoMsg;
                };
                ListRequest: {
                    typeUrl: string;
                    encode(message: _100.ListRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _100.ListRequest;
                    fromJSON(object: any): _100.ListRequest;
                    toJSON(message: _100.ListRequest): unknown;
                    fromPartial(object: Partial<_100.ListRequest>): _100.ListRequest;
                    fromAmino(object: _100.ListRequestAmino): _100.ListRequest;
                    toAmino(message: _100.ListRequest): _100.ListRequestAmino;
                    fromAminoMsg(object: _100.ListRequestAminoMsg): _100.ListRequest;
                    toAminoMsg(message: _100.ListRequest): _100.ListRequestAminoMsg;
                    fromProtoMsg(message: _100.ListRequestProtoMsg): _100.ListRequest;
                    toProto(message: _100.ListRequest): Uint8Array;
                    toProtoMsg(message: _100.ListRequest): _100.ListRequestProtoMsg;
                };
                ListRequest_Prefix: {
                    typeUrl: string;
                    encode(message: _100.ListRequest_Prefix, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _100.ListRequest_Prefix;
                    fromJSON(object: any): _100.ListRequest_Prefix;
                    toJSON(message: _100.ListRequest_Prefix): unknown;
                    fromPartial(object: Partial<_100.ListRequest_Prefix>): _100.ListRequest_Prefix;
                    fromAmino(object: _100.ListRequest_PrefixAmino): _100.ListRequest_Prefix;
                    toAmino(message: _100.ListRequest_Prefix): _100.ListRequest_PrefixAmino;
                    fromAminoMsg(object: _100.ListRequest_PrefixAminoMsg): _100.ListRequest_Prefix;
                    toAminoMsg(message: _100.ListRequest_Prefix): _100.ListRequest_PrefixAminoMsg;
                    fromProtoMsg(message: _100.ListRequest_PrefixProtoMsg): _100.ListRequest_Prefix;
                    toProto(message: _100.ListRequest_Prefix): Uint8Array;
                    toProtoMsg(message: _100.ListRequest_Prefix): _100.ListRequest_PrefixProtoMsg;
                };
                ListRequest_Range: {
                    typeUrl: string;
                    encode(message: _100.ListRequest_Range, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _100.ListRequest_Range;
                    fromJSON(object: any): _100.ListRequest_Range;
                    toJSON(message: _100.ListRequest_Range): unknown;
                    fromPartial(object: Partial<_100.ListRequest_Range>): _100.ListRequest_Range;
                    fromAmino(object: _100.ListRequest_RangeAmino): _100.ListRequest_Range;
                    toAmino(message: _100.ListRequest_Range): _100.ListRequest_RangeAmino;
                    fromAminoMsg(object: _100.ListRequest_RangeAminoMsg): _100.ListRequest_Range;
                    toAminoMsg(message: _100.ListRequest_Range): _100.ListRequest_RangeAminoMsg;
                    fromProtoMsg(message: _100.ListRequest_RangeProtoMsg): _100.ListRequest_Range;
                    toProto(message: _100.ListRequest_Range): Uint8Array;
                    toProtoMsg(message: _100.ListRequest_Range): _100.ListRequest_RangeProtoMsg;
                };
                ListResponse: {
                    typeUrl: string;
                    encode(message: _100.ListResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _100.ListResponse;
                    fromJSON(object: any): _100.ListResponse;
                    toJSON(message: _100.ListResponse): unknown;
                    fromPartial(object: Partial<_100.ListResponse>): _100.ListResponse;
                    fromAmino(object: _100.ListResponseAmino): _100.ListResponse;
                    toAmino(message: _100.ListResponse): _100.ListResponseAmino;
                    fromAminoMsg(object: _100.ListResponseAminoMsg): _100.ListResponse;
                    toAminoMsg(message: _100.ListResponse): _100.ListResponseAminoMsg;
                    fromProtoMsg(message: _100.ListResponseProtoMsg): _100.ListResponse;
                    toProto(message: _100.ListResponse): Uint8Array;
                    toProtoMsg(message: _100.ListResponse): _100.ListResponseProtoMsg;
                };
                IndexValue: {
                    typeUrl: string;
                    encode(message: _100.IndexValue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _100.IndexValue;
                    fromJSON(object: any): _100.IndexValue;
                    toJSON(message: _100.IndexValue): unknown;
                    fromPartial(object: Partial<_100.IndexValue>): _100.IndexValue;
                    fromAmino(object: _100.IndexValueAmino): _100.IndexValue;
                    toAmino(message: _100.IndexValue): _100.IndexValueAmino;
                    fromAminoMsg(object: _100.IndexValueAminoMsg): _100.IndexValue;
                    toAminoMsg(message: _100.IndexValue): _100.IndexValueAminoMsg;
                    fromProtoMsg(message: _100.IndexValueProtoMsg): _100.IndexValue;
                    toProto(message: _100.IndexValue): Uint8Array;
                    toProtoMsg(message: _100.IndexValue): _100.IndexValueProtoMsg;
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
                    encode(_: _101.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _101.Module;
                    fromJSON(_: any): _101.Module;
                    toJSON(_: _101.Module): unknown;
                    fromPartial(_: Partial<_101.Module>): _101.Module;
                    fromAmino(_: _101.ModuleAmino): _101.Module;
                    toAmino(_: _101.Module): _101.ModuleAmino;
                    fromAminoMsg(object: _101.ModuleAminoMsg): _101.Module;
                    toAminoMsg(message: _101.Module): _101.ModuleAminoMsg;
                    fromProtoMsg(message: _101.ModuleProtoMsg): _101.Module;
                    toProto(message: _101.Module): Uint8Array;
                    toProtoMsg(message: _101.Module): _101.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            Query: typeof _257.Query;
            QueryClientImpl: typeof _257.QueryClientImpl;
            LCDQueryClient: typeof _238.LCDQueryClient;
            protobufPackage: "cosmos.params.v1beta1";
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _103.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _103.QueryParamsRequest;
                fromJSON(object: any): _103.QueryParamsRequest;
                toJSON(message: _103.QueryParamsRequest): unknown;
                fromPartial(object: Partial<_103.QueryParamsRequest>): _103.QueryParamsRequest;
                fromAmino(object: _103.QueryParamsRequestAmino): _103.QueryParamsRequest;
                toAmino(message: _103.QueryParamsRequest): _103.QueryParamsRequestAmino;
                fromAminoMsg(object: _103.QueryParamsRequestAminoMsg): _103.QueryParamsRequest;
                toAminoMsg(message: _103.QueryParamsRequest): _103.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _103.QueryParamsRequestProtoMsg): _103.QueryParamsRequest;
                toProto(message: _103.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _103.QueryParamsRequest): _103.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _103.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _103.QueryParamsResponse;
                fromJSON(object: any): _103.QueryParamsResponse;
                toJSON(message: _103.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_103.QueryParamsResponse>): _103.QueryParamsResponse;
                fromAmino(object: _103.QueryParamsResponseAmino): _103.QueryParamsResponse;
                toAmino(message: _103.QueryParamsResponse): _103.QueryParamsResponseAmino;
                fromAminoMsg(object: _103.QueryParamsResponseAminoMsg): _103.QueryParamsResponse;
                toAminoMsg(message: _103.QueryParamsResponse): _103.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _103.QueryParamsResponseProtoMsg): _103.QueryParamsResponse;
                toProto(message: _103.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _103.QueryParamsResponse): _103.QueryParamsResponseProtoMsg;
            };
            QuerySubspacesRequest: {
                typeUrl: string;
                encode(_: _103.QuerySubspacesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _103.QuerySubspacesRequest;
                fromJSON(_: any): _103.QuerySubspacesRequest;
                toJSON(_: _103.QuerySubspacesRequest): unknown;
                fromPartial(_: Partial<_103.QuerySubspacesRequest>): _103.QuerySubspacesRequest;
                fromAmino(_: _103.QuerySubspacesRequestAmino): _103.QuerySubspacesRequest;
                toAmino(_: _103.QuerySubspacesRequest): _103.QuerySubspacesRequestAmino;
                fromAminoMsg(object: _103.QuerySubspacesRequestAminoMsg): _103.QuerySubspacesRequest;
                toAminoMsg(message: _103.QuerySubspacesRequest): _103.QuerySubspacesRequestAminoMsg;
                fromProtoMsg(message: _103.QuerySubspacesRequestProtoMsg): _103.QuerySubspacesRequest;
                toProto(message: _103.QuerySubspacesRequest): Uint8Array;
                toProtoMsg(message: _103.QuerySubspacesRequest): _103.QuerySubspacesRequestProtoMsg;
            };
            QuerySubspacesResponse: {
                typeUrl: string;
                encode(message: _103.QuerySubspacesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _103.QuerySubspacesResponse;
                fromJSON(object: any): _103.QuerySubspacesResponse;
                toJSON(message: _103.QuerySubspacesResponse): unknown;
                fromPartial(object: Partial<_103.QuerySubspacesResponse>): _103.QuerySubspacesResponse;
                fromAmino(object: _103.QuerySubspacesResponseAmino): _103.QuerySubspacesResponse;
                toAmino(message: _103.QuerySubspacesResponse): _103.QuerySubspacesResponseAmino;
                fromAminoMsg(object: _103.QuerySubspacesResponseAminoMsg): _103.QuerySubspacesResponse;
                toAminoMsg(message: _103.QuerySubspacesResponse): _103.QuerySubspacesResponseAminoMsg;
                fromProtoMsg(message: _103.QuerySubspacesResponseProtoMsg): _103.QuerySubspacesResponse;
                toProto(message: _103.QuerySubspacesResponse): Uint8Array;
                toProtoMsg(message: _103.QuerySubspacesResponse): _103.QuerySubspacesResponseProtoMsg;
            };
            Subspace: {
                typeUrl: string;
                encode(message: _103.Subspace, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _103.Subspace;
                fromJSON(object: any): _103.Subspace;
                toJSON(message: _103.Subspace): unknown;
                fromPartial(object: Partial<_103.Subspace>): _103.Subspace;
                fromAmino(object: _103.SubspaceAmino): _103.Subspace;
                toAmino(message: _103.Subspace): _103.SubspaceAmino;
                fromAminoMsg(object: _103.SubspaceAminoMsg): _103.Subspace;
                toAminoMsg(message: _103.Subspace): _103.SubspaceAminoMsg;
                fromProtoMsg(message: _103.SubspaceProtoMsg): _103.Subspace;
                toProto(message: _103.Subspace): Uint8Array;
                toProtoMsg(message: _103.Subspace): _103.SubspaceProtoMsg;
            };
            ParameterChangeProposal: {
                typeUrl: string;
                encode(message: _102.ParameterChangeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _102.ParameterChangeProposal;
                fromJSON(object: any): _102.ParameterChangeProposal;
                toJSON(message: _102.ParameterChangeProposal): unknown;
                fromPartial(object: Partial<_102.ParameterChangeProposal>): _102.ParameterChangeProposal;
                fromAmino(object: _102.ParameterChangeProposalAmino): _102.ParameterChangeProposal;
                toAmino(message: _102.ParameterChangeProposal): _102.ParameterChangeProposalAmino;
                fromAminoMsg(object: _102.ParameterChangeProposalAminoMsg): _102.ParameterChangeProposal;
                toAminoMsg(message: _102.ParameterChangeProposal): _102.ParameterChangeProposalAminoMsg;
                fromProtoMsg(message: _102.ParameterChangeProposalProtoMsg): _102.ParameterChangeProposal;
                toProto(message: _102.ParameterChangeProposal): Uint8Array;
                toProtoMsg(message: _102.ParameterChangeProposal): _102.ParameterChangeProposalProtoMsg;
            };
            ParamChange: {
                typeUrl: string;
                encode(message: _102.ParamChange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _102.ParamChange;
                fromJSON(object: any): _102.ParamChange;
                toJSON(message: _102.ParamChange): unknown;
                fromPartial(object: Partial<_102.ParamChange>): _102.ParamChange;
                fromAmino(object: _102.ParamChangeAmino): _102.ParamChange;
                toAmino(message: _102.ParamChange): _102.ParamChangeAmino;
                fromAminoMsg(object: _102.ParamChangeAminoMsg): _102.ParamChange;
                toAminoMsg(message: _102.ParamChange): _102.ParamChangeAminoMsg;
                fromProtoMsg(message: _102.ParamChangeProtoMsg): _102.ParamChange;
                toProto(message: _102.ParamChange): Uint8Array;
                toProtoMsg(message: _102.ParamChange): _102.ParamChangeProtoMsg;
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
                encode(_: _105.FileDescriptorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _105.FileDescriptorsRequest;
                fromJSON(_: any): _105.FileDescriptorsRequest;
                toJSON(_: _105.FileDescriptorsRequest): unknown;
                fromPartial(_: Partial<_105.FileDescriptorsRequest>): _105.FileDescriptorsRequest;
                fromAmino(_: _105.FileDescriptorsRequestAmino): _105.FileDescriptorsRequest;
                toAmino(_: _105.FileDescriptorsRequest): _105.FileDescriptorsRequestAmino;
                fromAminoMsg(object: _105.FileDescriptorsRequestAminoMsg): _105.FileDescriptorsRequest;
                toAminoMsg(message: _105.FileDescriptorsRequest): _105.FileDescriptorsRequestAminoMsg;
                fromProtoMsg(message: _105.FileDescriptorsRequestProtoMsg): _105.FileDescriptorsRequest;
                toProto(message: _105.FileDescriptorsRequest): Uint8Array;
                toProtoMsg(message: _105.FileDescriptorsRequest): _105.FileDescriptorsRequestProtoMsg;
            };
            FileDescriptorsResponse: {
                typeUrl: string;
                encode(message: _105.FileDescriptorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _105.FileDescriptorsResponse;
                fromJSON(object: any): _105.FileDescriptorsResponse;
                toJSON(message: _105.FileDescriptorsResponse): unknown;
                fromPartial(object: Partial<_105.FileDescriptorsResponse>): _105.FileDescriptorsResponse;
                fromAmino(object: _105.FileDescriptorsResponseAmino): _105.FileDescriptorsResponse;
                toAmino(message: _105.FileDescriptorsResponse): _105.FileDescriptorsResponseAmino;
                fromAminoMsg(object: _105.FileDescriptorsResponseAminoMsg): _105.FileDescriptorsResponse;
                toAminoMsg(message: _105.FileDescriptorsResponse): _105.FileDescriptorsResponseAminoMsg;
                fromProtoMsg(message: _105.FileDescriptorsResponseProtoMsg): _105.FileDescriptorsResponse;
                toProto(message: _105.FileDescriptorsResponse): Uint8Array;
                toProtoMsg(message: _105.FileDescriptorsResponse): _105.FileDescriptorsResponseProtoMsg;
            };
        };
    }
    namespace slashing {
        namespace module {
            const v1: {
                protobufPackage: "cosmos.slashing.module.v1";
                Module: {
                    typeUrl: string;
                    encode(message: _106.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _106.Module;
                    fromJSON(object: any): _106.Module;
                    toJSON(message: _106.Module): unknown;
                    fromPartial(object: Partial<_106.Module>): _106.Module;
                    fromAmino(object: _106.ModuleAmino): _106.Module;
                    toAmino(message: _106.Module): _106.ModuleAmino;
                    fromAminoMsg(object: _106.ModuleAminoMsg): _106.Module;
                    toAminoMsg(message: _106.Module): _106.ModuleAminoMsg;
                    fromProtoMsg(message: _106.ModuleProtoMsg): _106.Module;
                    toProto(message: _106.Module): Uint8Array;
                    toProtoMsg(message: _106.Module): _106.ModuleProtoMsg;
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
                    encode(message: _107.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _107.Module;
                    fromJSON(object: any): _107.Module;
                    toJSON(message: _107.Module): unknown;
                    fromPartial(object: Partial<_107.Module>): _107.Module;
                    fromAmino(object: _107.ModuleAmino): _107.Module;
                    toAmino(message: _107.Module): _107.ModuleAmino;
                    fromAminoMsg(object: _107.ModuleAminoMsg): _107.Module;
                    toAminoMsg(message: _107.Module): _107.ModuleAminoMsg;
                    fromProtoMsg(message: _107.ModuleProtoMsg): _107.Module;
                    toProto(message: _107.Module): Uint8Array;
                    toProtoMsg(message: _107.Module): _107.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            Msg: typeof _273.Msg;
            Query: typeof _258.Query;
            QueryClientImpl: typeof _258.QueryClientImpl;
            LCDQueryClient: typeof _239.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _112.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _112.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _112.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _112.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _112.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUnbondingDelegation(value: _112.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _112.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _112.MsgCreateValidator): {
                        typeUrl: string;
                        value: _112.MsgCreateValidator;
                    };
                    editValidator(value: _112.MsgEditValidator): {
                        typeUrl: string;
                        value: _112.MsgEditValidator;
                    };
                    delegate(value: _112.MsgDelegate): {
                        typeUrl: string;
                        value: _112.MsgDelegate;
                    };
                    beginRedelegate(value: _112.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _112.MsgBeginRedelegate;
                    };
                    undelegate(value: _112.MsgUndelegate): {
                        typeUrl: string;
                        value: _112.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _112.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _112.MsgCancelUnbondingDelegation;
                    };
                    updateParams(value: _112.MsgUpdateParams): {
                        typeUrl: string;
                        value: _112.MsgUpdateParams;
                    };
                };
                toJSON: {
                    createValidator(value: _112.MsgCreateValidator): {
                        typeUrl: string;
                        value: unknown;
                    };
                    editValidator(value: _112.MsgEditValidator): {
                        typeUrl: string;
                        value: unknown;
                    };
                    delegate(value: _112.MsgDelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                    beginRedelegate(value: _112.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                    undelegate(value: _112.MsgUndelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                    cancelUnbondingDelegation(value: _112.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateParams(value: _112.MsgUpdateParams): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _112.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _112.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _112.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _112.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _112.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: any): {
                        typeUrl: string;
                        value: _112.MsgCancelUnbondingDelegation;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _112.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    createValidator(value: _112.MsgCreateValidator): {
                        typeUrl: string;
                        value: _112.MsgCreateValidator;
                    };
                    editValidator(value: _112.MsgEditValidator): {
                        typeUrl: string;
                        value: _112.MsgEditValidator;
                    };
                    delegate(value: _112.MsgDelegate): {
                        typeUrl: string;
                        value: _112.MsgDelegate;
                    };
                    beginRedelegate(value: _112.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _112.MsgBeginRedelegate;
                    };
                    undelegate(value: _112.MsgUndelegate): {
                        typeUrl: string;
                        value: _112.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _112.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _112.MsgCancelUnbondingDelegation;
                    };
                    updateParams(value: _112.MsgUpdateParams): {
                        typeUrl: string;
                        value: _112.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: (message: _112.MsgCreateValidator) => _112.MsgCreateValidatorAmino;
                    fromAmino: (object: _112.MsgCreateValidatorAmino) => _112.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: (message: _112.MsgEditValidator) => _112.MsgEditValidatorAmino;
                    fromAmino: (object: _112.MsgEditValidatorAmino) => _112.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: (message: _112.MsgDelegate) => _112.MsgDelegateAmino;
                    fromAmino: (object: _112.MsgDelegateAmino) => _112.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: (message: _112.MsgBeginRedelegate) => _112.MsgBeginRedelegateAmino;
                    fromAmino: (object: _112.MsgBeginRedelegateAmino) => _112.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: (message: _112.MsgUndelegate) => _112.MsgUndelegateAmino;
                    fromAmino: (object: _112.MsgUndelegateAmino) => _112.MsgUndelegate;
                };
                "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation": {
                    aminoType: string;
                    toAmino: (message: _112.MsgCancelUnbondingDelegation) => _112.MsgCancelUnbondingDelegationAmino;
                    fromAmino: (object: _112.MsgCancelUnbondingDelegationAmino) => _112.MsgCancelUnbondingDelegation;
                };
                "/cosmos.staking.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _112.MsgUpdateParams) => _112.MsgUpdateParamsAmino;
                    fromAmino: (object: _112.MsgUpdateParamsAmino) => _112.MsgUpdateParams;
                };
            };
            protobufPackage: "cosmos.staking.v1beta1";
            MsgCreateValidator: {
                typeUrl: string;
                encode(message: _112.MsgCreateValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.MsgCreateValidator;
                fromJSON(object: any): _112.MsgCreateValidator;
                toJSON(message: _112.MsgCreateValidator): unknown;
                fromPartial(object: Partial<_112.MsgCreateValidator>): _112.MsgCreateValidator;
                fromAmino(object: _112.MsgCreateValidatorAmino): _112.MsgCreateValidator;
                toAmino(message: _112.MsgCreateValidator): _112.MsgCreateValidatorAmino;
                fromAminoMsg(object: _112.MsgCreateValidatorAminoMsg): _112.MsgCreateValidator;
                toAminoMsg(message: _112.MsgCreateValidator): _112.MsgCreateValidatorAminoMsg;
                fromProtoMsg(message: _112.MsgCreateValidatorProtoMsg): _112.MsgCreateValidator;
                toProto(message: _112.MsgCreateValidator): Uint8Array;
                toProtoMsg(message: _112.MsgCreateValidator): _112.MsgCreateValidatorProtoMsg;
            };
            MsgCreateValidatorResponse: {
                typeUrl: string;
                encode(_: _112.MsgCreateValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.MsgCreateValidatorResponse;
                fromJSON(_: any): _112.MsgCreateValidatorResponse;
                toJSON(_: _112.MsgCreateValidatorResponse): unknown;
                fromPartial(_: Partial<_112.MsgCreateValidatorResponse>): _112.MsgCreateValidatorResponse;
                fromAmino(_: _112.MsgCreateValidatorResponseAmino): _112.MsgCreateValidatorResponse;
                toAmino(_: _112.MsgCreateValidatorResponse): _112.MsgCreateValidatorResponseAmino;
                fromAminoMsg(object: _112.MsgCreateValidatorResponseAminoMsg): _112.MsgCreateValidatorResponse;
                toAminoMsg(message: _112.MsgCreateValidatorResponse): _112.MsgCreateValidatorResponseAminoMsg;
                fromProtoMsg(message: _112.MsgCreateValidatorResponseProtoMsg): _112.MsgCreateValidatorResponse;
                toProto(message: _112.MsgCreateValidatorResponse): Uint8Array;
                toProtoMsg(message: _112.MsgCreateValidatorResponse): _112.MsgCreateValidatorResponseProtoMsg;
            };
            MsgEditValidator: {
                typeUrl: string;
                encode(message: _112.MsgEditValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.MsgEditValidator;
                fromJSON(object: any): _112.MsgEditValidator;
                toJSON(message: _112.MsgEditValidator): unknown;
                fromPartial(object: Partial<_112.MsgEditValidator>): _112.MsgEditValidator;
                fromAmino(object: _112.MsgEditValidatorAmino): _112.MsgEditValidator;
                toAmino(message: _112.MsgEditValidator): _112.MsgEditValidatorAmino;
                fromAminoMsg(object: _112.MsgEditValidatorAminoMsg): _112.MsgEditValidator;
                toAminoMsg(message: _112.MsgEditValidator): _112.MsgEditValidatorAminoMsg;
                fromProtoMsg(message: _112.MsgEditValidatorProtoMsg): _112.MsgEditValidator;
                toProto(message: _112.MsgEditValidator): Uint8Array;
                toProtoMsg(message: _112.MsgEditValidator): _112.MsgEditValidatorProtoMsg;
            };
            MsgEditValidatorResponse: {
                typeUrl: string;
                encode(_: _112.MsgEditValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.MsgEditValidatorResponse;
                fromJSON(_: any): _112.MsgEditValidatorResponse;
                toJSON(_: _112.MsgEditValidatorResponse): unknown;
                fromPartial(_: Partial<_112.MsgEditValidatorResponse>): _112.MsgEditValidatorResponse;
                fromAmino(_: _112.MsgEditValidatorResponseAmino): _112.MsgEditValidatorResponse;
                toAmino(_: _112.MsgEditValidatorResponse): _112.MsgEditValidatorResponseAmino;
                fromAminoMsg(object: _112.MsgEditValidatorResponseAminoMsg): _112.MsgEditValidatorResponse;
                toAminoMsg(message: _112.MsgEditValidatorResponse): _112.MsgEditValidatorResponseAminoMsg;
                fromProtoMsg(message: _112.MsgEditValidatorResponseProtoMsg): _112.MsgEditValidatorResponse;
                toProto(message: _112.MsgEditValidatorResponse): Uint8Array;
                toProtoMsg(message: _112.MsgEditValidatorResponse): _112.MsgEditValidatorResponseProtoMsg;
            };
            MsgDelegate: {
                typeUrl: string;
                encode(message: _112.MsgDelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.MsgDelegate;
                fromJSON(object: any): _112.MsgDelegate;
                toJSON(message: _112.MsgDelegate): unknown;
                fromPartial(object: Partial<_112.MsgDelegate>): _112.MsgDelegate;
                fromAmino(object: _112.MsgDelegateAmino): _112.MsgDelegate;
                toAmino(message: _112.MsgDelegate): _112.MsgDelegateAmino;
                fromAminoMsg(object: _112.MsgDelegateAminoMsg): _112.MsgDelegate;
                toAminoMsg(message: _112.MsgDelegate): _112.MsgDelegateAminoMsg;
                fromProtoMsg(message: _112.MsgDelegateProtoMsg): _112.MsgDelegate;
                toProto(message: _112.MsgDelegate): Uint8Array;
                toProtoMsg(message: _112.MsgDelegate): _112.MsgDelegateProtoMsg;
            };
            MsgDelegateResponse: {
                typeUrl: string;
                encode(_: _112.MsgDelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.MsgDelegateResponse;
                fromJSON(_: any): _112.MsgDelegateResponse;
                toJSON(_: _112.MsgDelegateResponse): unknown;
                fromPartial(_: Partial<_112.MsgDelegateResponse>): _112.MsgDelegateResponse;
                fromAmino(_: _112.MsgDelegateResponseAmino): _112.MsgDelegateResponse;
                toAmino(_: _112.MsgDelegateResponse): _112.MsgDelegateResponseAmino;
                fromAminoMsg(object: _112.MsgDelegateResponseAminoMsg): _112.MsgDelegateResponse;
                toAminoMsg(message: _112.MsgDelegateResponse): _112.MsgDelegateResponseAminoMsg;
                fromProtoMsg(message: _112.MsgDelegateResponseProtoMsg): _112.MsgDelegateResponse;
                toProto(message: _112.MsgDelegateResponse): Uint8Array;
                toProtoMsg(message: _112.MsgDelegateResponse): _112.MsgDelegateResponseProtoMsg;
            };
            MsgBeginRedelegate: {
                typeUrl: string;
                encode(message: _112.MsgBeginRedelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.MsgBeginRedelegate;
                fromJSON(object: any): _112.MsgBeginRedelegate;
                toJSON(message: _112.MsgBeginRedelegate): unknown;
                fromPartial(object: Partial<_112.MsgBeginRedelegate>): _112.MsgBeginRedelegate;
                fromAmino(object: _112.MsgBeginRedelegateAmino): _112.MsgBeginRedelegate;
                toAmino(message: _112.MsgBeginRedelegate): _112.MsgBeginRedelegateAmino;
                fromAminoMsg(object: _112.MsgBeginRedelegateAminoMsg): _112.MsgBeginRedelegate;
                toAminoMsg(message: _112.MsgBeginRedelegate): _112.MsgBeginRedelegateAminoMsg;
                fromProtoMsg(message: _112.MsgBeginRedelegateProtoMsg): _112.MsgBeginRedelegate;
                toProto(message: _112.MsgBeginRedelegate): Uint8Array;
                toProtoMsg(message: _112.MsgBeginRedelegate): _112.MsgBeginRedelegateProtoMsg;
            };
            MsgBeginRedelegateResponse: {
                typeUrl: string;
                encode(message: _112.MsgBeginRedelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.MsgBeginRedelegateResponse;
                fromJSON(object: any): _112.MsgBeginRedelegateResponse;
                toJSON(message: _112.MsgBeginRedelegateResponse): unknown;
                fromPartial(object: Partial<_112.MsgBeginRedelegateResponse>): _112.MsgBeginRedelegateResponse;
                fromAmino(object: _112.MsgBeginRedelegateResponseAmino): _112.MsgBeginRedelegateResponse;
                toAmino(message: _112.MsgBeginRedelegateResponse): _112.MsgBeginRedelegateResponseAmino;
                fromAminoMsg(object: _112.MsgBeginRedelegateResponseAminoMsg): _112.MsgBeginRedelegateResponse;
                toAminoMsg(message: _112.MsgBeginRedelegateResponse): _112.MsgBeginRedelegateResponseAminoMsg;
                fromProtoMsg(message: _112.MsgBeginRedelegateResponseProtoMsg): _112.MsgBeginRedelegateResponse;
                toProto(message: _112.MsgBeginRedelegateResponse): Uint8Array;
                toProtoMsg(message: _112.MsgBeginRedelegateResponse): _112.MsgBeginRedelegateResponseProtoMsg;
            };
            MsgUndelegate: {
                typeUrl: string;
                encode(message: _112.MsgUndelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.MsgUndelegate;
                fromJSON(object: any): _112.MsgUndelegate;
                toJSON(message: _112.MsgUndelegate): unknown;
                fromPartial(object: Partial<_112.MsgUndelegate>): _112.MsgUndelegate;
                fromAmino(object: _112.MsgUndelegateAmino): _112.MsgUndelegate;
                toAmino(message: _112.MsgUndelegate): _112.MsgUndelegateAmino;
                fromAminoMsg(object: _112.MsgUndelegateAminoMsg): _112.MsgUndelegate;
                toAminoMsg(message: _112.MsgUndelegate): _112.MsgUndelegateAminoMsg;
                fromProtoMsg(message: _112.MsgUndelegateProtoMsg): _112.MsgUndelegate;
                toProto(message: _112.MsgUndelegate): Uint8Array;
                toProtoMsg(message: _112.MsgUndelegate): _112.MsgUndelegateProtoMsg;
            };
            MsgUndelegateResponse: {
                typeUrl: string;
                encode(message: _112.MsgUndelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.MsgUndelegateResponse;
                fromJSON(object: any): _112.MsgUndelegateResponse;
                toJSON(message: _112.MsgUndelegateResponse): unknown;
                fromPartial(object: Partial<_112.MsgUndelegateResponse>): _112.MsgUndelegateResponse;
                fromAmino(object: _112.MsgUndelegateResponseAmino): _112.MsgUndelegateResponse;
                toAmino(message: _112.MsgUndelegateResponse): _112.MsgUndelegateResponseAmino;
                fromAminoMsg(object: _112.MsgUndelegateResponseAminoMsg): _112.MsgUndelegateResponse;
                toAminoMsg(message: _112.MsgUndelegateResponse): _112.MsgUndelegateResponseAminoMsg;
                fromProtoMsg(message: _112.MsgUndelegateResponseProtoMsg): _112.MsgUndelegateResponse;
                toProto(message: _112.MsgUndelegateResponse): Uint8Array;
                toProtoMsg(message: _112.MsgUndelegateResponse): _112.MsgUndelegateResponseProtoMsg;
            };
            MsgCancelUnbondingDelegation: {
                typeUrl: string;
                encode(message: _112.MsgCancelUnbondingDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.MsgCancelUnbondingDelegation;
                fromJSON(object: any): _112.MsgCancelUnbondingDelegation;
                toJSON(message: _112.MsgCancelUnbondingDelegation): unknown;
                fromPartial(object: Partial<_112.MsgCancelUnbondingDelegation>): _112.MsgCancelUnbondingDelegation;
                fromAmino(object: _112.MsgCancelUnbondingDelegationAmino): _112.MsgCancelUnbondingDelegation;
                toAmino(message: _112.MsgCancelUnbondingDelegation): _112.MsgCancelUnbondingDelegationAmino;
                fromAminoMsg(object: _112.MsgCancelUnbondingDelegationAminoMsg): _112.MsgCancelUnbondingDelegation;
                toAminoMsg(message: _112.MsgCancelUnbondingDelegation): _112.MsgCancelUnbondingDelegationAminoMsg;
                fromProtoMsg(message: _112.MsgCancelUnbondingDelegationProtoMsg): _112.MsgCancelUnbondingDelegation;
                toProto(message: _112.MsgCancelUnbondingDelegation): Uint8Array;
                toProtoMsg(message: _112.MsgCancelUnbondingDelegation): _112.MsgCancelUnbondingDelegationProtoMsg;
            };
            MsgCancelUnbondingDelegationResponse: {
                typeUrl: string;
                encode(_: _112.MsgCancelUnbondingDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.MsgCancelUnbondingDelegationResponse;
                fromJSON(_: any): _112.MsgCancelUnbondingDelegationResponse;
                toJSON(_: _112.MsgCancelUnbondingDelegationResponse): unknown;
                fromPartial(_: Partial<_112.MsgCancelUnbondingDelegationResponse>): _112.MsgCancelUnbondingDelegationResponse;
                fromAmino(_: _112.MsgCancelUnbondingDelegationResponseAmino): _112.MsgCancelUnbondingDelegationResponse;
                toAmino(_: _112.MsgCancelUnbondingDelegationResponse): _112.MsgCancelUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _112.MsgCancelUnbondingDelegationResponseAminoMsg): _112.MsgCancelUnbondingDelegationResponse;
                toAminoMsg(message: _112.MsgCancelUnbondingDelegationResponse): _112.MsgCancelUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _112.MsgCancelUnbondingDelegationResponseProtoMsg): _112.MsgCancelUnbondingDelegationResponse;
                toProto(message: _112.MsgCancelUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _112.MsgCancelUnbondingDelegationResponse): _112.MsgCancelUnbondingDelegationResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _112.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.MsgUpdateParams;
                fromJSON(object: any): _112.MsgUpdateParams;
                toJSON(message: _112.MsgUpdateParams): unknown;
                fromPartial(object: Partial<_112.MsgUpdateParams>): _112.MsgUpdateParams;
                fromAmino(object: _112.MsgUpdateParamsAmino): _112.MsgUpdateParams;
                toAmino(message: _112.MsgUpdateParams): _112.MsgUpdateParamsAmino;
                fromAminoMsg(object: _112.MsgUpdateParamsAminoMsg): _112.MsgUpdateParams;
                toAminoMsg(message: _112.MsgUpdateParams): _112.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _112.MsgUpdateParamsProtoMsg): _112.MsgUpdateParams;
                toProto(message: _112.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _112.MsgUpdateParams): _112.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _112.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.MsgUpdateParamsResponse;
                fromJSON(_: any): _112.MsgUpdateParamsResponse;
                toJSON(_: _112.MsgUpdateParamsResponse): unknown;
                fromPartial(_: Partial<_112.MsgUpdateParamsResponse>): _112.MsgUpdateParamsResponse;
                fromAmino(_: _112.MsgUpdateParamsResponseAmino): _112.MsgUpdateParamsResponse;
                toAmino(_: _112.MsgUpdateParamsResponse): _112.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _112.MsgUpdateParamsResponseAminoMsg): _112.MsgUpdateParamsResponse;
                toAminoMsg(message: _112.MsgUpdateParamsResponse): _112.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _112.MsgUpdateParamsResponseProtoMsg): _112.MsgUpdateParamsResponse;
                toProto(message: _112.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _112.MsgUpdateParamsResponse): _112.MsgUpdateParamsResponseProtoMsg;
            };
            Cosmos_cryptoPubKey_InterfaceDecoder: (input: import("..").BinaryReader | Uint8Array) => import("../google/protobuf/any").Any;
            Cosmos_cryptoPubKey_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("cosmjs-types/google/protobuf/any").Any;
            Cosmos_cryptoPubKey_ToAmino: (content: import("../google/protobuf/any").Any) => import("@cosmjs/amino").Pubkey;
            bondStatusFromJSON(object: any): _111.BondStatus;
            bondStatusToJSON(object: _111.BondStatus): string;
            infractionFromJSON(object: any): _111.Infraction;
            infractionToJSON(object: _111.Infraction): string;
            BondStatus: typeof _111.BondStatus;
            BondStatusSDKType: typeof _111.BondStatus;
            BondStatusAmino: typeof _111.BondStatus;
            Infraction: typeof _111.Infraction;
            InfractionSDKType: typeof _111.Infraction;
            InfractionAmino: typeof _111.Infraction;
            HistoricalInfo: {
                typeUrl: string;
                encode(message: _111.HistoricalInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _111.HistoricalInfo;
                fromJSON(object: any): _111.HistoricalInfo;
                toJSON(message: _111.HistoricalInfo): unknown;
                fromPartial(object: Partial<_111.HistoricalInfo>): _111.HistoricalInfo;
                fromAmino(object: _111.HistoricalInfoAmino): _111.HistoricalInfo;
                toAmino(message: _111.HistoricalInfo): _111.HistoricalInfoAmino;
                fromAminoMsg(object: _111.HistoricalInfoAminoMsg): _111.HistoricalInfo;
                toAminoMsg(message: _111.HistoricalInfo): _111.HistoricalInfoAminoMsg;
                fromProtoMsg(message: _111.HistoricalInfoProtoMsg): _111.HistoricalInfo;
                toProto(message: _111.HistoricalInfo): Uint8Array;
                toProtoMsg(message: _111.HistoricalInfo): _111.HistoricalInfoProtoMsg;
            };
            CommissionRates: {
                typeUrl: string;
                encode(message: _111.CommissionRates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _111.CommissionRates;
                fromJSON(object: any): _111.CommissionRates;
                toJSON(message: _111.CommissionRates): unknown;
                fromPartial(object: Partial<_111.CommissionRates>): _111.CommissionRates;
                fromAmino(object: _111.CommissionRatesAmino): _111.CommissionRates;
                toAmino(message: _111.CommissionRates): _111.CommissionRatesAmino;
                fromAminoMsg(object: _111.CommissionRatesAminoMsg): _111.CommissionRates;
                toAminoMsg(message: _111.CommissionRates): _111.CommissionRatesAminoMsg;
                fromProtoMsg(message: _111.CommissionRatesProtoMsg): _111.CommissionRates;
                toProto(message: _111.CommissionRates): Uint8Array;
                toProtoMsg(message: _111.CommissionRates): _111.CommissionRatesProtoMsg;
            };
            Commission: {
                typeUrl: string;
                encode(message: _111.Commission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _111.Commission;
                fromJSON(object: any): _111.Commission;
                toJSON(message: _111.Commission): unknown;
                fromPartial(object: Partial<_111.Commission>): _111.Commission;
                fromAmino(object: _111.CommissionAmino): _111.Commission;
                toAmino(message: _111.Commission): _111.CommissionAmino;
                fromAminoMsg(object: _111.CommissionAminoMsg): _111.Commission;
                toAminoMsg(message: _111.Commission): _111.CommissionAminoMsg;
                fromProtoMsg(message: _111.CommissionProtoMsg): _111.Commission;
                toProto(message: _111.Commission): Uint8Array;
                toProtoMsg(message: _111.Commission): _111.CommissionProtoMsg;
            };
            Description: {
                typeUrl: string;
                encode(message: _111.Description, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _111.Description;
                fromJSON(object: any): _111.Description;
                toJSON(message: _111.Description): unknown;
                fromPartial(object: Partial<_111.Description>): _111.Description;
                fromAmino(object: _111.DescriptionAmino): _111.Description;
                toAmino(message: _111.Description): _111.DescriptionAmino;
                fromAminoMsg(object: _111.DescriptionAminoMsg): _111.Description;
                toAminoMsg(message: _111.Description): _111.DescriptionAminoMsg;
                fromProtoMsg(message: _111.DescriptionProtoMsg): _111.Description;
                toProto(message: _111.Description): Uint8Array;
                toProtoMsg(message: _111.Description): _111.DescriptionProtoMsg;
            };
            Validator: {
                typeUrl: string;
                encode(message: _111.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _111.Validator;
                fromJSON(object: any): _111.Validator;
                toJSON(message: _111.Validator): unknown;
                fromPartial(object: Partial<_111.Validator>): _111.Validator;
                fromAmino(object: _111.ValidatorAmino): _111.Validator;
                toAmino(message: _111.Validator): _111.ValidatorAmino;
                fromAminoMsg(object: _111.ValidatorAminoMsg): _111.Validator;
                toAminoMsg(message: _111.Validator): _111.ValidatorAminoMsg;
                fromProtoMsg(message: _111.ValidatorProtoMsg): _111.Validator;
                toProto(message: _111.Validator): Uint8Array;
                toProtoMsg(message: _111.Validator): _111.ValidatorProtoMsg;
            };
            ValAddresses: {
                typeUrl: string;
                encode(message: _111.ValAddresses, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _111.ValAddresses;
                fromJSON(object: any): _111.ValAddresses;
                toJSON(message: _111.ValAddresses): unknown;
                fromPartial(object: Partial<_111.ValAddresses>): _111.ValAddresses;
                fromAmino(object: _111.ValAddressesAmino): _111.ValAddresses;
                toAmino(message: _111.ValAddresses): _111.ValAddressesAmino;
                fromAminoMsg(object: _111.ValAddressesAminoMsg): _111.ValAddresses;
                toAminoMsg(message: _111.ValAddresses): _111.ValAddressesAminoMsg;
                fromProtoMsg(message: _111.ValAddressesProtoMsg): _111.ValAddresses;
                toProto(message: _111.ValAddresses): Uint8Array;
                toProtoMsg(message: _111.ValAddresses): _111.ValAddressesProtoMsg;
            };
            DVPair: {
                typeUrl: string;
                encode(message: _111.DVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _111.DVPair;
                fromJSON(object: any): _111.DVPair;
                toJSON(message: _111.DVPair): unknown;
                fromPartial(object: Partial<_111.DVPair>): _111.DVPair;
                fromAmino(object: _111.DVPairAmino): _111.DVPair;
                toAmino(message: _111.DVPair): _111.DVPairAmino;
                fromAminoMsg(object: _111.DVPairAminoMsg): _111.DVPair;
                toAminoMsg(message: _111.DVPair): _111.DVPairAminoMsg;
                fromProtoMsg(message: _111.DVPairProtoMsg): _111.DVPair;
                toProto(message: _111.DVPair): Uint8Array;
                toProtoMsg(message: _111.DVPair): _111.DVPairProtoMsg;
            };
            DVPairs: {
                typeUrl: string;
                encode(message: _111.DVPairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _111.DVPairs;
                fromJSON(object: any): _111.DVPairs;
                toJSON(message: _111.DVPairs): unknown;
                fromPartial(object: Partial<_111.DVPairs>): _111.DVPairs;
                fromAmino(object: _111.DVPairsAmino): _111.DVPairs;
                toAmino(message: _111.DVPairs): _111.DVPairsAmino;
                fromAminoMsg(object: _111.DVPairsAminoMsg): _111.DVPairs;
                toAminoMsg(message: _111.DVPairs): _111.DVPairsAminoMsg;
                fromProtoMsg(message: _111.DVPairsProtoMsg): _111.DVPairs;
                toProto(message: _111.DVPairs): Uint8Array;
                toProtoMsg(message: _111.DVPairs): _111.DVPairsProtoMsg;
            };
            DVVTriplet: {
                typeUrl: string;
                encode(message: _111.DVVTriplet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _111.DVVTriplet;
                fromJSON(object: any): _111.DVVTriplet;
                toJSON(message: _111.DVVTriplet): unknown;
                fromPartial(object: Partial<_111.DVVTriplet>): _111.DVVTriplet;
                fromAmino(object: _111.DVVTripletAmino): _111.DVVTriplet;
                toAmino(message: _111.DVVTriplet): _111.DVVTripletAmino;
                fromAminoMsg(object: _111.DVVTripletAminoMsg): _111.DVVTriplet;
                toAminoMsg(message: _111.DVVTriplet): _111.DVVTripletAminoMsg;
                fromProtoMsg(message: _111.DVVTripletProtoMsg): _111.DVVTriplet;
                toProto(message: _111.DVVTriplet): Uint8Array;
                toProtoMsg(message: _111.DVVTriplet): _111.DVVTripletProtoMsg;
            };
            DVVTriplets: {
                typeUrl: string;
                encode(message: _111.DVVTriplets, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _111.DVVTriplets;
                fromJSON(object: any): _111.DVVTriplets;
                toJSON(message: _111.DVVTriplets): unknown;
                fromPartial(object: Partial<_111.DVVTriplets>): _111.DVVTriplets;
                fromAmino(object: _111.DVVTripletsAmino): _111.DVVTriplets;
                toAmino(message: _111.DVVTriplets): _111.DVVTripletsAmino;
                fromAminoMsg(object: _111.DVVTripletsAminoMsg): _111.DVVTriplets;
                toAminoMsg(message: _111.DVVTriplets): _111.DVVTripletsAminoMsg;
                fromProtoMsg(message: _111.DVVTripletsProtoMsg): _111.DVVTriplets;
                toProto(message: _111.DVVTriplets): Uint8Array;
                toProtoMsg(message: _111.DVVTriplets): _111.DVVTripletsProtoMsg;
            };
            Delegation: {
                typeUrl: string;
                encode(message: _111.Delegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _111.Delegation;
                fromJSON(object: any): _111.Delegation;
                toJSON(message: _111.Delegation): unknown;
                fromPartial(object: Partial<_111.Delegation>): _111.Delegation;
                fromAmino(object: _111.DelegationAmino): _111.Delegation;
                toAmino(message: _111.Delegation): _111.DelegationAmino;
                fromAminoMsg(object: _111.DelegationAminoMsg): _111.Delegation;
                toAminoMsg(message: _111.Delegation): _111.DelegationAminoMsg;
                fromProtoMsg(message: _111.DelegationProtoMsg): _111.Delegation;
                toProto(message: _111.Delegation): Uint8Array;
                toProtoMsg(message: _111.Delegation): _111.DelegationProtoMsg;
            };
            UnbondingDelegation: {
                typeUrl: string;
                encode(message: _111.UnbondingDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _111.UnbondingDelegation;
                fromJSON(object: any): _111.UnbondingDelegation;
                toJSON(message: _111.UnbondingDelegation): unknown;
                fromPartial(object: Partial<_111.UnbondingDelegation>): _111.UnbondingDelegation;
                fromAmino(object: _111.UnbondingDelegationAmino): _111.UnbondingDelegation;
                toAmino(message: _111.UnbondingDelegation): _111.UnbondingDelegationAmino;
                fromAminoMsg(object: _111.UnbondingDelegationAminoMsg): _111.UnbondingDelegation;
                toAminoMsg(message: _111.UnbondingDelegation): _111.UnbondingDelegationAminoMsg;
                fromProtoMsg(message: _111.UnbondingDelegationProtoMsg): _111.UnbondingDelegation;
                toProto(message: _111.UnbondingDelegation): Uint8Array;
                toProtoMsg(message: _111.UnbondingDelegation): _111.UnbondingDelegationProtoMsg;
            };
            UnbondingDelegationEntry: {
                typeUrl: string;
                encode(message: _111.UnbondingDelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _111.UnbondingDelegationEntry;
                fromJSON(object: any): _111.UnbondingDelegationEntry;
                toJSON(message: _111.UnbondingDelegationEntry): unknown;
                fromPartial(object: Partial<_111.UnbondingDelegationEntry>): _111.UnbondingDelegationEntry;
                fromAmino(object: _111.UnbondingDelegationEntryAmino): _111.UnbondingDelegationEntry;
                toAmino(message: _111.UnbondingDelegationEntry): _111.UnbondingDelegationEntryAmino;
                fromAminoMsg(object: _111.UnbondingDelegationEntryAminoMsg): _111.UnbondingDelegationEntry;
                toAminoMsg(message: _111.UnbondingDelegationEntry): _111.UnbondingDelegationEntryAminoMsg;
                fromProtoMsg(message: _111.UnbondingDelegationEntryProtoMsg): _111.UnbondingDelegationEntry;
                toProto(message: _111.UnbondingDelegationEntry): Uint8Array;
                toProtoMsg(message: _111.UnbondingDelegationEntry): _111.UnbondingDelegationEntryProtoMsg;
            };
            RedelegationEntry: {
                typeUrl: string;
                encode(message: _111.RedelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _111.RedelegationEntry;
                fromJSON(object: any): _111.RedelegationEntry;
                toJSON(message: _111.RedelegationEntry): unknown;
                fromPartial(object: Partial<_111.RedelegationEntry>): _111.RedelegationEntry;
                fromAmino(object: _111.RedelegationEntryAmino): _111.RedelegationEntry;
                toAmino(message: _111.RedelegationEntry): _111.RedelegationEntryAmino;
                fromAminoMsg(object: _111.RedelegationEntryAminoMsg): _111.RedelegationEntry;
                toAminoMsg(message: _111.RedelegationEntry): _111.RedelegationEntryAminoMsg;
                fromProtoMsg(message: _111.RedelegationEntryProtoMsg): _111.RedelegationEntry;
                toProto(message: _111.RedelegationEntry): Uint8Array;
                toProtoMsg(message: _111.RedelegationEntry): _111.RedelegationEntryProtoMsg;
            };
            Redelegation: {
                typeUrl: string;
                encode(message: _111.Redelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _111.Redelegation;
                fromJSON(object: any): _111.Redelegation;
                toJSON(message: _111.Redelegation): unknown;
                fromPartial(object: Partial<_111.Redelegation>): _111.Redelegation;
                fromAmino(object: _111.RedelegationAmino): _111.Redelegation;
                toAmino(message: _111.Redelegation): _111.RedelegationAmino;
                fromAminoMsg(object: _111.RedelegationAminoMsg): _111.Redelegation;
                toAminoMsg(message: _111.Redelegation): _111.RedelegationAminoMsg;
                fromProtoMsg(message: _111.RedelegationProtoMsg): _111.Redelegation;
                toProto(message: _111.Redelegation): Uint8Array;
                toProtoMsg(message: _111.Redelegation): _111.RedelegationProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _111.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _111.Params;
                fromJSON(object: any): _111.Params;
                toJSON(message: _111.Params): unknown;
                fromPartial(object: Partial<_111.Params>): _111.Params;
                fromAmino(object: _111.ParamsAmino): _111.Params;
                toAmino(message: _111.Params): _111.ParamsAmino;
                fromAminoMsg(object: _111.ParamsAminoMsg): _111.Params;
                toAminoMsg(message: _111.Params): _111.ParamsAminoMsg;
                fromProtoMsg(message: _111.ParamsProtoMsg): _111.Params;
                toProto(message: _111.Params): Uint8Array;
                toProtoMsg(message: _111.Params): _111.ParamsProtoMsg;
            };
            DelegationResponse: {
                typeUrl: string;
                encode(message: _111.DelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _111.DelegationResponse;
                fromJSON(object: any): _111.DelegationResponse;
                toJSON(message: _111.DelegationResponse): unknown;
                fromPartial(object: Partial<_111.DelegationResponse>): _111.DelegationResponse;
                fromAmino(object: _111.DelegationResponseAmino): _111.DelegationResponse;
                toAmino(message: _111.DelegationResponse): _111.DelegationResponseAmino;
                fromAminoMsg(object: _111.DelegationResponseAminoMsg): _111.DelegationResponse;
                toAminoMsg(message: _111.DelegationResponse): _111.DelegationResponseAminoMsg;
                fromProtoMsg(message: _111.DelegationResponseProtoMsg): _111.DelegationResponse;
                toProto(message: _111.DelegationResponse): Uint8Array;
                toProtoMsg(message: _111.DelegationResponse): _111.DelegationResponseProtoMsg;
            };
            RedelegationEntryResponse: {
                typeUrl: string;
                encode(message: _111.RedelegationEntryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _111.RedelegationEntryResponse;
                fromJSON(object: any): _111.RedelegationEntryResponse;
                toJSON(message: _111.RedelegationEntryResponse): unknown;
                fromPartial(object: Partial<_111.RedelegationEntryResponse>): _111.RedelegationEntryResponse;
                fromAmino(object: _111.RedelegationEntryResponseAmino): _111.RedelegationEntryResponse;
                toAmino(message: _111.RedelegationEntryResponse): _111.RedelegationEntryResponseAmino;
                fromAminoMsg(object: _111.RedelegationEntryResponseAminoMsg): _111.RedelegationEntryResponse;
                toAminoMsg(message: _111.RedelegationEntryResponse): _111.RedelegationEntryResponseAminoMsg;
                fromProtoMsg(message: _111.RedelegationEntryResponseProtoMsg): _111.RedelegationEntryResponse;
                toProto(message: _111.RedelegationEntryResponse): Uint8Array;
                toProtoMsg(message: _111.RedelegationEntryResponse): _111.RedelegationEntryResponseProtoMsg;
            };
            RedelegationResponse: {
                typeUrl: string;
                encode(message: _111.RedelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _111.RedelegationResponse;
                fromJSON(object: any): _111.RedelegationResponse;
                toJSON(message: _111.RedelegationResponse): unknown;
                fromPartial(object: Partial<_111.RedelegationResponse>): _111.RedelegationResponse;
                fromAmino(object: _111.RedelegationResponseAmino): _111.RedelegationResponse;
                toAmino(message: _111.RedelegationResponse): _111.RedelegationResponseAmino;
                fromAminoMsg(object: _111.RedelegationResponseAminoMsg): _111.RedelegationResponse;
                toAminoMsg(message: _111.RedelegationResponse): _111.RedelegationResponseAminoMsg;
                fromProtoMsg(message: _111.RedelegationResponseProtoMsg): _111.RedelegationResponse;
                toProto(message: _111.RedelegationResponse): Uint8Array;
                toProtoMsg(message: _111.RedelegationResponse): _111.RedelegationResponseProtoMsg;
            };
            Pool: {
                typeUrl: string;
                encode(message: _111.Pool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _111.Pool;
                fromJSON(object: any): _111.Pool;
                toJSON(message: _111.Pool): unknown;
                fromPartial(object: Partial<_111.Pool>): _111.Pool;
                fromAmino(object: _111.PoolAmino): _111.Pool;
                toAmino(message: _111.Pool): _111.PoolAmino;
                fromAminoMsg(object: _111.PoolAminoMsg): _111.Pool;
                toAminoMsg(message: _111.Pool): _111.PoolAminoMsg;
                fromProtoMsg(message: _111.PoolProtoMsg): _111.Pool;
                toProto(message: _111.Pool): Uint8Array;
                toProtoMsg(message: _111.Pool): _111.PoolProtoMsg;
            };
            ValidatorUpdates: {
                typeUrl: string;
                encode(message: _111.ValidatorUpdates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _111.ValidatorUpdates;
                fromJSON(object: any): _111.ValidatorUpdates;
                toJSON(message: _111.ValidatorUpdates): unknown;
                fromPartial(object: Partial<_111.ValidatorUpdates>): _111.ValidatorUpdates;
                fromAmino(object: _111.ValidatorUpdatesAmino): _111.ValidatorUpdates;
                toAmino(message: _111.ValidatorUpdates): _111.ValidatorUpdatesAmino;
                fromAminoMsg(object: _111.ValidatorUpdatesAminoMsg): _111.ValidatorUpdates;
                toAminoMsg(message: _111.ValidatorUpdates): _111.ValidatorUpdatesAminoMsg;
                fromProtoMsg(message: _111.ValidatorUpdatesProtoMsg): _111.ValidatorUpdates;
                toProto(message: _111.ValidatorUpdates): Uint8Array;
                toProtoMsg(message: _111.ValidatorUpdates): _111.ValidatorUpdatesProtoMsg;
            };
            QueryValidatorsRequest: {
                typeUrl: string;
                encode(message: _110.QueryValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _110.QueryValidatorsRequest;
                fromJSON(object: any): _110.QueryValidatorsRequest;
                toJSON(message: _110.QueryValidatorsRequest): unknown;
                fromPartial(object: Partial<_110.QueryValidatorsRequest>): _110.QueryValidatorsRequest;
                fromAmino(object: _110.QueryValidatorsRequestAmino): _110.QueryValidatorsRequest;
                toAmino(message: _110.QueryValidatorsRequest): _110.QueryValidatorsRequestAmino;
                fromAminoMsg(object: _110.QueryValidatorsRequestAminoMsg): _110.QueryValidatorsRequest;
                toAminoMsg(message: _110.QueryValidatorsRequest): _110.QueryValidatorsRequestAminoMsg;
                fromProtoMsg(message: _110.QueryValidatorsRequestProtoMsg): _110.QueryValidatorsRequest;
                toProto(message: _110.QueryValidatorsRequest): Uint8Array;
                toProtoMsg(message: _110.QueryValidatorsRequest): _110.QueryValidatorsRequestProtoMsg;
            };
            QueryValidatorsResponse: {
                typeUrl: string;
                encode(message: _110.QueryValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _110.QueryValidatorsResponse;
                fromJSON(object: any): _110.QueryValidatorsResponse;
                toJSON(message: _110.QueryValidatorsResponse): unknown;
                fromPartial(object: Partial<_110.QueryValidatorsResponse>): _110.QueryValidatorsResponse;
                fromAmino(object: _110.QueryValidatorsResponseAmino): _110.QueryValidatorsResponse;
                toAmino(message: _110.QueryValidatorsResponse): _110.QueryValidatorsResponseAmino;
                fromAminoMsg(object: _110.QueryValidatorsResponseAminoMsg): _110.QueryValidatorsResponse;
                toAminoMsg(message: _110.QueryValidatorsResponse): _110.QueryValidatorsResponseAminoMsg;
                fromProtoMsg(message: _110.QueryValidatorsResponseProtoMsg): _110.QueryValidatorsResponse;
                toProto(message: _110.QueryValidatorsResponse): Uint8Array;
                toProtoMsg(message: _110.QueryValidatorsResponse): _110.QueryValidatorsResponseProtoMsg;
            };
            QueryValidatorRequest: {
                typeUrl: string;
                encode(message: _110.QueryValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _110.QueryValidatorRequest;
                fromJSON(object: any): _110.QueryValidatorRequest;
                toJSON(message: _110.QueryValidatorRequest): unknown;
                fromPartial(object: Partial<_110.QueryValidatorRequest>): _110.QueryValidatorRequest;
                fromAmino(object: _110.QueryValidatorRequestAmino): _110.QueryValidatorRequest;
                toAmino(message: _110.QueryValidatorRequest): _110.QueryValidatorRequestAmino;
                fromAminoMsg(object: _110.QueryValidatorRequestAminoMsg): _110.QueryValidatorRequest;
                toAminoMsg(message: _110.QueryValidatorRequest): _110.QueryValidatorRequestAminoMsg;
                fromProtoMsg(message: _110.QueryValidatorRequestProtoMsg): _110.QueryValidatorRequest;
                toProto(message: _110.QueryValidatorRequest): Uint8Array;
                toProtoMsg(message: _110.QueryValidatorRequest): _110.QueryValidatorRequestProtoMsg;
            };
            QueryValidatorResponse: {
                typeUrl: string;
                encode(message: _110.QueryValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _110.QueryValidatorResponse;
                fromJSON(object: any): _110.QueryValidatorResponse;
                toJSON(message: _110.QueryValidatorResponse): unknown;
                fromPartial(object: Partial<_110.QueryValidatorResponse>): _110.QueryValidatorResponse;
                fromAmino(object: _110.QueryValidatorResponseAmino): _110.QueryValidatorResponse;
                toAmino(message: _110.QueryValidatorResponse): _110.QueryValidatorResponseAmino;
                fromAminoMsg(object: _110.QueryValidatorResponseAminoMsg): _110.QueryValidatorResponse;
                toAminoMsg(message: _110.QueryValidatorResponse): _110.QueryValidatorResponseAminoMsg;
                fromProtoMsg(message: _110.QueryValidatorResponseProtoMsg): _110.QueryValidatorResponse;
                toProto(message: _110.QueryValidatorResponse): Uint8Array;
                toProtoMsg(message: _110.QueryValidatorResponse): _110.QueryValidatorResponseProtoMsg;
            };
            QueryValidatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _110.QueryValidatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _110.QueryValidatorDelegationsRequest;
                fromJSON(object: any): _110.QueryValidatorDelegationsRequest;
                toJSON(message: _110.QueryValidatorDelegationsRequest): unknown;
                fromPartial(object: Partial<_110.QueryValidatorDelegationsRequest>): _110.QueryValidatorDelegationsRequest;
                fromAmino(object: _110.QueryValidatorDelegationsRequestAmino): _110.QueryValidatorDelegationsRequest;
                toAmino(message: _110.QueryValidatorDelegationsRequest): _110.QueryValidatorDelegationsRequestAmino;
                fromAminoMsg(object: _110.QueryValidatorDelegationsRequestAminoMsg): _110.QueryValidatorDelegationsRequest;
                toAminoMsg(message: _110.QueryValidatorDelegationsRequest): _110.QueryValidatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _110.QueryValidatorDelegationsRequestProtoMsg): _110.QueryValidatorDelegationsRequest;
                toProto(message: _110.QueryValidatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _110.QueryValidatorDelegationsRequest): _110.QueryValidatorDelegationsRequestProtoMsg;
            };
            QueryValidatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _110.QueryValidatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _110.QueryValidatorDelegationsResponse;
                fromJSON(object: any): _110.QueryValidatorDelegationsResponse;
                toJSON(message: _110.QueryValidatorDelegationsResponse): unknown;
                fromPartial(object: Partial<_110.QueryValidatorDelegationsResponse>): _110.QueryValidatorDelegationsResponse;
                fromAmino(object: _110.QueryValidatorDelegationsResponseAmino): _110.QueryValidatorDelegationsResponse;
                toAmino(message: _110.QueryValidatorDelegationsResponse): _110.QueryValidatorDelegationsResponseAmino;
                fromAminoMsg(object: _110.QueryValidatorDelegationsResponseAminoMsg): _110.QueryValidatorDelegationsResponse;
                toAminoMsg(message: _110.QueryValidatorDelegationsResponse): _110.QueryValidatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _110.QueryValidatorDelegationsResponseProtoMsg): _110.QueryValidatorDelegationsResponse;
                toProto(message: _110.QueryValidatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _110.QueryValidatorDelegationsResponse): _110.QueryValidatorDelegationsResponseProtoMsg;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _110.QueryValidatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _110.QueryValidatorUnbondingDelegationsRequest;
                fromJSON(object: any): _110.QueryValidatorUnbondingDelegationsRequest;
                toJSON(message: _110.QueryValidatorUnbondingDelegationsRequest): unknown;
                fromPartial(object: Partial<_110.QueryValidatorUnbondingDelegationsRequest>): _110.QueryValidatorUnbondingDelegationsRequest;
                fromAmino(object: _110.QueryValidatorUnbondingDelegationsRequestAmino): _110.QueryValidatorUnbondingDelegationsRequest;
                toAmino(message: _110.QueryValidatorUnbondingDelegationsRequest): _110.QueryValidatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _110.QueryValidatorUnbondingDelegationsRequestAminoMsg): _110.QueryValidatorUnbondingDelegationsRequest;
                toAminoMsg(message: _110.QueryValidatorUnbondingDelegationsRequest): _110.QueryValidatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _110.QueryValidatorUnbondingDelegationsRequestProtoMsg): _110.QueryValidatorUnbondingDelegationsRequest;
                toProto(message: _110.QueryValidatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _110.QueryValidatorUnbondingDelegationsRequest): _110.QueryValidatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _110.QueryValidatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _110.QueryValidatorUnbondingDelegationsResponse;
                fromJSON(object: any): _110.QueryValidatorUnbondingDelegationsResponse;
                toJSON(message: _110.QueryValidatorUnbondingDelegationsResponse): unknown;
                fromPartial(object: Partial<_110.QueryValidatorUnbondingDelegationsResponse>): _110.QueryValidatorUnbondingDelegationsResponse;
                fromAmino(object: _110.QueryValidatorUnbondingDelegationsResponseAmino): _110.QueryValidatorUnbondingDelegationsResponse;
                toAmino(message: _110.QueryValidatorUnbondingDelegationsResponse): _110.QueryValidatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _110.QueryValidatorUnbondingDelegationsResponseAminoMsg): _110.QueryValidatorUnbondingDelegationsResponse;
                toAminoMsg(message: _110.QueryValidatorUnbondingDelegationsResponse): _110.QueryValidatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _110.QueryValidatorUnbondingDelegationsResponseProtoMsg): _110.QueryValidatorUnbondingDelegationsResponse;
                toProto(message: _110.QueryValidatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _110.QueryValidatorUnbondingDelegationsResponse): _110.QueryValidatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryDelegationRequest: {
                typeUrl: string;
                encode(message: _110.QueryDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _110.QueryDelegationRequest;
                fromJSON(object: any): _110.QueryDelegationRequest;
                toJSON(message: _110.QueryDelegationRequest): unknown;
                fromPartial(object: Partial<_110.QueryDelegationRequest>): _110.QueryDelegationRequest;
                fromAmino(object: _110.QueryDelegationRequestAmino): _110.QueryDelegationRequest;
                toAmino(message: _110.QueryDelegationRequest): _110.QueryDelegationRequestAmino;
                fromAminoMsg(object: _110.QueryDelegationRequestAminoMsg): _110.QueryDelegationRequest;
                toAminoMsg(message: _110.QueryDelegationRequest): _110.QueryDelegationRequestAminoMsg;
                fromProtoMsg(message: _110.QueryDelegationRequestProtoMsg): _110.QueryDelegationRequest;
                toProto(message: _110.QueryDelegationRequest): Uint8Array;
                toProtoMsg(message: _110.QueryDelegationRequest): _110.QueryDelegationRequestProtoMsg;
            };
            QueryDelegationResponse: {
                typeUrl: string;
                encode(message: _110.QueryDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _110.QueryDelegationResponse;
                fromJSON(object: any): _110.QueryDelegationResponse;
                toJSON(message: _110.QueryDelegationResponse): unknown;
                fromPartial(object: Partial<_110.QueryDelegationResponse>): _110.QueryDelegationResponse;
                fromAmino(object: _110.QueryDelegationResponseAmino): _110.QueryDelegationResponse;
                toAmino(message: _110.QueryDelegationResponse): _110.QueryDelegationResponseAmino;
                fromAminoMsg(object: _110.QueryDelegationResponseAminoMsg): _110.QueryDelegationResponse;
                toAminoMsg(message: _110.QueryDelegationResponse): _110.QueryDelegationResponseAminoMsg;
                fromProtoMsg(message: _110.QueryDelegationResponseProtoMsg): _110.QueryDelegationResponse;
                toProto(message: _110.QueryDelegationResponse): Uint8Array;
                toProtoMsg(message: _110.QueryDelegationResponse): _110.QueryDelegationResponseProtoMsg;
            };
            QueryUnbondingDelegationRequest: {
                typeUrl: string;
                encode(message: _110.QueryUnbondingDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _110.QueryUnbondingDelegationRequest;
                fromJSON(object: any): _110.QueryUnbondingDelegationRequest;
                toJSON(message: _110.QueryUnbondingDelegationRequest): unknown;
                fromPartial(object: Partial<_110.QueryUnbondingDelegationRequest>): _110.QueryUnbondingDelegationRequest;
                fromAmino(object: _110.QueryUnbondingDelegationRequestAmino): _110.QueryUnbondingDelegationRequest;
                toAmino(message: _110.QueryUnbondingDelegationRequest): _110.QueryUnbondingDelegationRequestAmino;
                fromAminoMsg(object: _110.QueryUnbondingDelegationRequestAminoMsg): _110.QueryUnbondingDelegationRequest;
                toAminoMsg(message: _110.QueryUnbondingDelegationRequest): _110.QueryUnbondingDelegationRequestAminoMsg;
                fromProtoMsg(message: _110.QueryUnbondingDelegationRequestProtoMsg): _110.QueryUnbondingDelegationRequest;
                toProto(message: _110.QueryUnbondingDelegationRequest): Uint8Array;
                toProtoMsg(message: _110.QueryUnbondingDelegationRequest): _110.QueryUnbondingDelegationRequestProtoMsg;
            };
            QueryUnbondingDelegationResponse: {
                typeUrl: string;
                encode(message: _110.QueryUnbondingDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _110.QueryUnbondingDelegationResponse;
                fromJSON(object: any): _110.QueryUnbondingDelegationResponse;
                toJSON(message: _110.QueryUnbondingDelegationResponse): unknown;
                fromPartial(object: Partial<_110.QueryUnbondingDelegationResponse>): _110.QueryUnbondingDelegationResponse;
                fromAmino(object: _110.QueryUnbondingDelegationResponseAmino): _110.QueryUnbondingDelegationResponse;
                toAmino(message: _110.QueryUnbondingDelegationResponse): _110.QueryUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _110.QueryUnbondingDelegationResponseAminoMsg): _110.QueryUnbondingDelegationResponse;
                toAminoMsg(message: _110.QueryUnbondingDelegationResponse): _110.QueryUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _110.QueryUnbondingDelegationResponseProtoMsg): _110.QueryUnbondingDelegationResponse;
                toProto(message: _110.QueryUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _110.QueryUnbondingDelegationResponse): _110.QueryUnbondingDelegationResponseProtoMsg;
            };
            QueryDelegatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _110.QueryDelegatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _110.QueryDelegatorDelegationsRequest;
                fromJSON(object: any): _110.QueryDelegatorDelegationsRequest;
                toJSON(message: _110.QueryDelegatorDelegationsRequest): unknown;
                fromPartial(object: Partial<_110.QueryDelegatorDelegationsRequest>): _110.QueryDelegatorDelegationsRequest;
                fromAmino(object: _110.QueryDelegatorDelegationsRequestAmino): _110.QueryDelegatorDelegationsRequest;
                toAmino(message: _110.QueryDelegatorDelegationsRequest): _110.QueryDelegatorDelegationsRequestAmino;
                fromAminoMsg(object: _110.QueryDelegatorDelegationsRequestAminoMsg): _110.QueryDelegatorDelegationsRequest;
                toAminoMsg(message: _110.QueryDelegatorDelegationsRequest): _110.QueryDelegatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _110.QueryDelegatorDelegationsRequestProtoMsg): _110.QueryDelegatorDelegationsRequest;
                toProto(message: _110.QueryDelegatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _110.QueryDelegatorDelegationsRequest): _110.QueryDelegatorDelegationsRequestProtoMsg;
            };
            QueryDelegatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _110.QueryDelegatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _110.QueryDelegatorDelegationsResponse;
                fromJSON(object: any): _110.QueryDelegatorDelegationsResponse;
                toJSON(message: _110.QueryDelegatorDelegationsResponse): unknown;
                fromPartial(object: Partial<_110.QueryDelegatorDelegationsResponse>): _110.QueryDelegatorDelegationsResponse;
                fromAmino(object: _110.QueryDelegatorDelegationsResponseAmino): _110.QueryDelegatorDelegationsResponse;
                toAmino(message: _110.QueryDelegatorDelegationsResponse): _110.QueryDelegatorDelegationsResponseAmino;
                fromAminoMsg(object: _110.QueryDelegatorDelegationsResponseAminoMsg): _110.QueryDelegatorDelegationsResponse;
                toAminoMsg(message: _110.QueryDelegatorDelegationsResponse): _110.QueryDelegatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _110.QueryDelegatorDelegationsResponseProtoMsg): _110.QueryDelegatorDelegationsResponse;
                toProto(message: _110.QueryDelegatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _110.QueryDelegatorDelegationsResponse): _110.QueryDelegatorDelegationsResponseProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _110.QueryDelegatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _110.QueryDelegatorUnbondingDelegationsRequest;
                fromJSON(object: any): _110.QueryDelegatorUnbondingDelegationsRequest;
                toJSON(message: _110.QueryDelegatorUnbondingDelegationsRequest): unknown;
                fromPartial(object: Partial<_110.QueryDelegatorUnbondingDelegationsRequest>): _110.QueryDelegatorUnbondingDelegationsRequest;
                fromAmino(object: _110.QueryDelegatorUnbondingDelegationsRequestAmino): _110.QueryDelegatorUnbondingDelegationsRequest;
                toAmino(message: _110.QueryDelegatorUnbondingDelegationsRequest): _110.QueryDelegatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _110.QueryDelegatorUnbondingDelegationsRequestAminoMsg): _110.QueryDelegatorUnbondingDelegationsRequest;
                toAminoMsg(message: _110.QueryDelegatorUnbondingDelegationsRequest): _110.QueryDelegatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _110.QueryDelegatorUnbondingDelegationsRequestProtoMsg): _110.QueryDelegatorUnbondingDelegationsRequest;
                toProto(message: _110.QueryDelegatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _110.QueryDelegatorUnbondingDelegationsRequest): _110.QueryDelegatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _110.QueryDelegatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _110.QueryDelegatorUnbondingDelegationsResponse;
                fromJSON(object: any): _110.QueryDelegatorUnbondingDelegationsResponse;
                toJSON(message: _110.QueryDelegatorUnbondingDelegationsResponse): unknown;
                fromPartial(object: Partial<_110.QueryDelegatorUnbondingDelegationsResponse>): _110.QueryDelegatorUnbondingDelegationsResponse;
                fromAmino(object: _110.QueryDelegatorUnbondingDelegationsResponseAmino): _110.QueryDelegatorUnbondingDelegationsResponse;
                toAmino(message: _110.QueryDelegatorUnbondingDelegationsResponse): _110.QueryDelegatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _110.QueryDelegatorUnbondingDelegationsResponseAminoMsg): _110.QueryDelegatorUnbondingDelegationsResponse;
                toAminoMsg(message: _110.QueryDelegatorUnbondingDelegationsResponse): _110.QueryDelegatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _110.QueryDelegatorUnbondingDelegationsResponseProtoMsg): _110.QueryDelegatorUnbondingDelegationsResponse;
                toProto(message: _110.QueryDelegatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _110.QueryDelegatorUnbondingDelegationsResponse): _110.QueryDelegatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryRedelegationsRequest: {
                typeUrl: string;
                encode(message: _110.QueryRedelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _110.QueryRedelegationsRequest;
                fromJSON(object: any): _110.QueryRedelegationsRequest;
                toJSON(message: _110.QueryRedelegationsRequest): unknown;
                fromPartial(object: Partial<_110.QueryRedelegationsRequest>): _110.QueryRedelegationsRequest;
                fromAmino(object: _110.QueryRedelegationsRequestAmino): _110.QueryRedelegationsRequest;
                toAmino(message: _110.QueryRedelegationsRequest): _110.QueryRedelegationsRequestAmino;
                fromAminoMsg(object: _110.QueryRedelegationsRequestAminoMsg): _110.QueryRedelegationsRequest;
                toAminoMsg(message: _110.QueryRedelegationsRequest): _110.QueryRedelegationsRequestAminoMsg;
                fromProtoMsg(message: _110.QueryRedelegationsRequestProtoMsg): _110.QueryRedelegationsRequest;
                toProto(message: _110.QueryRedelegationsRequest): Uint8Array;
                toProtoMsg(message: _110.QueryRedelegationsRequest): _110.QueryRedelegationsRequestProtoMsg;
            };
            QueryRedelegationsResponse: {
                typeUrl: string;
                encode(message: _110.QueryRedelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _110.QueryRedelegationsResponse;
                fromJSON(object: any): _110.QueryRedelegationsResponse;
                toJSON(message: _110.QueryRedelegationsResponse): unknown;
                fromPartial(object: Partial<_110.QueryRedelegationsResponse>): _110.QueryRedelegationsResponse;
                fromAmino(object: _110.QueryRedelegationsResponseAmino): _110.QueryRedelegationsResponse;
                toAmino(message: _110.QueryRedelegationsResponse): _110.QueryRedelegationsResponseAmino;
                fromAminoMsg(object: _110.QueryRedelegationsResponseAminoMsg): _110.QueryRedelegationsResponse;
                toAminoMsg(message: _110.QueryRedelegationsResponse): _110.QueryRedelegationsResponseAminoMsg;
                fromProtoMsg(message: _110.QueryRedelegationsResponseProtoMsg): _110.QueryRedelegationsResponse;
                toProto(message: _110.QueryRedelegationsResponse): Uint8Array;
                toProtoMsg(message: _110.QueryRedelegationsResponse): _110.QueryRedelegationsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _110.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _110.QueryDelegatorValidatorsRequest;
                fromJSON(object: any): _110.QueryDelegatorValidatorsRequest;
                toJSON(message: _110.QueryDelegatorValidatorsRequest): unknown;
                fromPartial(object: Partial<_110.QueryDelegatorValidatorsRequest>): _110.QueryDelegatorValidatorsRequest;
                fromAmino(object: _110.QueryDelegatorValidatorsRequestAmino): _110.QueryDelegatorValidatorsRequest;
                toAmino(message: _110.QueryDelegatorValidatorsRequest): _110.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _110.QueryDelegatorValidatorsRequestAminoMsg): _110.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _110.QueryDelegatorValidatorsRequest): _110.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _110.QueryDelegatorValidatorsRequestProtoMsg): _110.QueryDelegatorValidatorsRequest;
                toProto(message: _110.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _110.QueryDelegatorValidatorsRequest): _110.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _110.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _110.QueryDelegatorValidatorsResponse;
                fromJSON(object: any): _110.QueryDelegatorValidatorsResponse;
                toJSON(message: _110.QueryDelegatorValidatorsResponse): unknown;
                fromPartial(object: Partial<_110.QueryDelegatorValidatorsResponse>): _110.QueryDelegatorValidatorsResponse;
                fromAmino(object: _110.QueryDelegatorValidatorsResponseAmino): _110.QueryDelegatorValidatorsResponse;
                toAmino(message: _110.QueryDelegatorValidatorsResponse): _110.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _110.QueryDelegatorValidatorsResponseAminoMsg): _110.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _110.QueryDelegatorValidatorsResponse): _110.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _110.QueryDelegatorValidatorsResponseProtoMsg): _110.QueryDelegatorValidatorsResponse;
                toProto(message: _110.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _110.QueryDelegatorValidatorsResponse): _110.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorValidatorRequest: {
                typeUrl: string;
                encode(message: _110.QueryDelegatorValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _110.QueryDelegatorValidatorRequest;
                fromJSON(object: any): _110.QueryDelegatorValidatorRequest;
                toJSON(message: _110.QueryDelegatorValidatorRequest): unknown;
                fromPartial(object: Partial<_110.QueryDelegatorValidatorRequest>): _110.QueryDelegatorValidatorRequest;
                fromAmino(object: _110.QueryDelegatorValidatorRequestAmino): _110.QueryDelegatorValidatorRequest;
                toAmino(message: _110.QueryDelegatorValidatorRequest): _110.QueryDelegatorValidatorRequestAmino;
                fromAminoMsg(object: _110.QueryDelegatorValidatorRequestAminoMsg): _110.QueryDelegatorValidatorRequest;
                toAminoMsg(message: _110.QueryDelegatorValidatorRequest): _110.QueryDelegatorValidatorRequestAminoMsg;
                fromProtoMsg(message: _110.QueryDelegatorValidatorRequestProtoMsg): _110.QueryDelegatorValidatorRequest;
                toProto(message: _110.QueryDelegatorValidatorRequest): Uint8Array;
                toProtoMsg(message: _110.QueryDelegatorValidatorRequest): _110.QueryDelegatorValidatorRequestProtoMsg;
            };
            QueryDelegatorValidatorResponse: {
                typeUrl: string;
                encode(message: _110.QueryDelegatorValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _110.QueryDelegatorValidatorResponse;
                fromJSON(object: any): _110.QueryDelegatorValidatorResponse;
                toJSON(message: _110.QueryDelegatorValidatorResponse): unknown;
                fromPartial(object: Partial<_110.QueryDelegatorValidatorResponse>): _110.QueryDelegatorValidatorResponse;
                fromAmino(object: _110.QueryDelegatorValidatorResponseAmino): _110.QueryDelegatorValidatorResponse;
                toAmino(message: _110.QueryDelegatorValidatorResponse): _110.QueryDelegatorValidatorResponseAmino;
                fromAminoMsg(object: _110.QueryDelegatorValidatorResponseAminoMsg): _110.QueryDelegatorValidatorResponse;
                toAminoMsg(message: _110.QueryDelegatorValidatorResponse): _110.QueryDelegatorValidatorResponseAminoMsg;
                fromProtoMsg(message: _110.QueryDelegatorValidatorResponseProtoMsg): _110.QueryDelegatorValidatorResponse;
                toProto(message: _110.QueryDelegatorValidatorResponse): Uint8Array;
                toProtoMsg(message: _110.QueryDelegatorValidatorResponse): _110.QueryDelegatorValidatorResponseProtoMsg;
            };
            QueryHistoricalInfoRequest: {
                typeUrl: string;
                encode(message: _110.QueryHistoricalInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _110.QueryHistoricalInfoRequest;
                fromJSON(object: any): _110.QueryHistoricalInfoRequest;
                toJSON(message: _110.QueryHistoricalInfoRequest): unknown;
                fromPartial(object: Partial<_110.QueryHistoricalInfoRequest>): _110.QueryHistoricalInfoRequest;
                fromAmino(object: _110.QueryHistoricalInfoRequestAmino): _110.QueryHistoricalInfoRequest;
                toAmino(message: _110.QueryHistoricalInfoRequest): _110.QueryHistoricalInfoRequestAmino;
                fromAminoMsg(object: _110.QueryHistoricalInfoRequestAminoMsg): _110.QueryHistoricalInfoRequest;
                toAminoMsg(message: _110.QueryHistoricalInfoRequest): _110.QueryHistoricalInfoRequestAminoMsg;
                fromProtoMsg(message: _110.QueryHistoricalInfoRequestProtoMsg): _110.QueryHistoricalInfoRequest;
                toProto(message: _110.QueryHistoricalInfoRequest): Uint8Array;
                toProtoMsg(message: _110.QueryHistoricalInfoRequest): _110.QueryHistoricalInfoRequestProtoMsg;
            };
            QueryHistoricalInfoResponse: {
                typeUrl: string;
                encode(message: _110.QueryHistoricalInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _110.QueryHistoricalInfoResponse;
                fromJSON(object: any): _110.QueryHistoricalInfoResponse;
                toJSON(message: _110.QueryHistoricalInfoResponse): unknown;
                fromPartial(object: Partial<_110.QueryHistoricalInfoResponse>): _110.QueryHistoricalInfoResponse;
                fromAmino(object: _110.QueryHistoricalInfoResponseAmino): _110.QueryHistoricalInfoResponse;
                toAmino(message: _110.QueryHistoricalInfoResponse): _110.QueryHistoricalInfoResponseAmino;
                fromAminoMsg(object: _110.QueryHistoricalInfoResponseAminoMsg): _110.QueryHistoricalInfoResponse;
                toAminoMsg(message: _110.QueryHistoricalInfoResponse): _110.QueryHistoricalInfoResponseAminoMsg;
                fromProtoMsg(message: _110.QueryHistoricalInfoResponseProtoMsg): _110.QueryHistoricalInfoResponse;
                toProto(message: _110.QueryHistoricalInfoResponse): Uint8Array;
                toProtoMsg(message: _110.QueryHistoricalInfoResponse): _110.QueryHistoricalInfoResponseProtoMsg;
            };
            QueryPoolRequest: {
                typeUrl: string;
                encode(_: _110.QueryPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _110.QueryPoolRequest;
                fromJSON(_: any): _110.QueryPoolRequest;
                toJSON(_: _110.QueryPoolRequest): unknown;
                fromPartial(_: Partial<_110.QueryPoolRequest>): _110.QueryPoolRequest;
                fromAmino(_: _110.QueryPoolRequestAmino): _110.QueryPoolRequest;
                toAmino(_: _110.QueryPoolRequest): _110.QueryPoolRequestAmino;
                fromAminoMsg(object: _110.QueryPoolRequestAminoMsg): _110.QueryPoolRequest;
                toAminoMsg(message: _110.QueryPoolRequest): _110.QueryPoolRequestAminoMsg;
                fromProtoMsg(message: _110.QueryPoolRequestProtoMsg): _110.QueryPoolRequest;
                toProto(message: _110.QueryPoolRequest): Uint8Array;
                toProtoMsg(message: _110.QueryPoolRequest): _110.QueryPoolRequestProtoMsg;
            };
            QueryPoolResponse: {
                typeUrl: string;
                encode(message: _110.QueryPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _110.QueryPoolResponse;
                fromJSON(object: any): _110.QueryPoolResponse;
                toJSON(message: _110.QueryPoolResponse): unknown;
                fromPartial(object: Partial<_110.QueryPoolResponse>): _110.QueryPoolResponse;
                fromAmino(object: _110.QueryPoolResponseAmino): _110.QueryPoolResponse;
                toAmino(message: _110.QueryPoolResponse): _110.QueryPoolResponseAmino;
                fromAminoMsg(object: _110.QueryPoolResponseAminoMsg): _110.QueryPoolResponse;
                toAminoMsg(message: _110.QueryPoolResponse): _110.QueryPoolResponseAminoMsg;
                fromProtoMsg(message: _110.QueryPoolResponseProtoMsg): _110.QueryPoolResponse;
                toProto(message: _110.QueryPoolResponse): Uint8Array;
                toProtoMsg(message: _110.QueryPoolResponse): _110.QueryPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _110.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _110.QueryParamsRequest;
                fromJSON(_: any): _110.QueryParamsRequest;
                toJSON(_: _110.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_110.QueryParamsRequest>): _110.QueryParamsRequest;
                fromAmino(_: _110.QueryParamsRequestAmino): _110.QueryParamsRequest;
                toAmino(_: _110.QueryParamsRequest): _110.QueryParamsRequestAmino;
                fromAminoMsg(object: _110.QueryParamsRequestAminoMsg): _110.QueryParamsRequest;
                toAminoMsg(message: _110.QueryParamsRequest): _110.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _110.QueryParamsRequestProtoMsg): _110.QueryParamsRequest;
                toProto(message: _110.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _110.QueryParamsRequest): _110.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _110.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _110.QueryParamsResponse;
                fromJSON(object: any): _110.QueryParamsResponse;
                toJSON(message: _110.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_110.QueryParamsResponse>): _110.QueryParamsResponse;
                fromAmino(object: _110.QueryParamsResponseAmino): _110.QueryParamsResponse;
                toAmino(message: _110.QueryParamsResponse): _110.QueryParamsResponseAmino;
                fromAminoMsg(object: _110.QueryParamsResponseAminoMsg): _110.QueryParamsResponse;
                toAminoMsg(message: _110.QueryParamsResponse): _110.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _110.QueryParamsResponseProtoMsg): _110.QueryParamsResponse;
                toProto(message: _110.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _110.QueryParamsResponse): _110.QueryParamsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _109.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _109.GenesisState;
                fromJSON(object: any): _109.GenesisState;
                toJSON(message: _109.GenesisState): unknown;
                fromPartial(object: Partial<_109.GenesisState>): _109.GenesisState;
                fromAmino(object: _109.GenesisStateAmino): _109.GenesisState;
                toAmino(message: _109.GenesisState): _109.GenesisStateAmino;
                fromAminoMsg(object: _109.GenesisStateAminoMsg): _109.GenesisState;
                toAminoMsg(message: _109.GenesisState): _109.GenesisStateAminoMsg;
                fromProtoMsg(message: _109.GenesisStateProtoMsg): _109.GenesisState;
                toProto(message: _109.GenesisState): Uint8Array;
                toProtoMsg(message: _109.GenesisState): _109.GenesisStateProtoMsg;
            };
            LastValidatorPower: {
                typeUrl: string;
                encode(message: _109.LastValidatorPower, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _109.LastValidatorPower;
                fromJSON(object: any): _109.LastValidatorPower;
                toJSON(message: _109.LastValidatorPower): unknown;
                fromPartial(object: Partial<_109.LastValidatorPower>): _109.LastValidatorPower;
                fromAmino(object: _109.LastValidatorPowerAmino): _109.LastValidatorPower;
                toAmino(message: _109.LastValidatorPower): _109.LastValidatorPowerAmino;
                fromAminoMsg(object: _109.LastValidatorPowerAminoMsg): _109.LastValidatorPower;
                toAminoMsg(message: _109.LastValidatorPower): _109.LastValidatorPowerAminoMsg;
                fromProtoMsg(message: _109.LastValidatorPowerProtoMsg): _109.LastValidatorPower;
                toProto(message: _109.LastValidatorPower): Uint8Array;
                toProtoMsg(message: _109.LastValidatorPower): _109.LastValidatorPowerProtoMsg;
            };
            authorizationTypeFromJSON(object: any): _108.AuthorizationType;
            authorizationTypeToJSON(object: _108.AuthorizationType): string;
            AuthorizationType: typeof _108.AuthorizationType;
            AuthorizationTypeSDKType: typeof _108.AuthorizationType;
            AuthorizationTypeAmino: typeof _108.AuthorizationType;
            StakeAuthorization: {
                typeUrl: string;
                encode(message: _108.StakeAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _108.StakeAuthorization;
                fromJSON(object: any): _108.StakeAuthorization;
                toJSON(message: _108.StakeAuthorization): unknown;
                fromPartial(object: Partial<_108.StakeAuthorization>): _108.StakeAuthorization;
                fromAmino(object: _108.StakeAuthorizationAmino): _108.StakeAuthorization;
                toAmino(message: _108.StakeAuthorization): _108.StakeAuthorizationAmino;
                fromAminoMsg(object: _108.StakeAuthorizationAminoMsg): _108.StakeAuthorization;
                toAminoMsg(message: _108.StakeAuthorization): _108.StakeAuthorizationAminoMsg;
                fromProtoMsg(message: _108.StakeAuthorizationProtoMsg): _108.StakeAuthorization;
                toProto(message: _108.StakeAuthorization): Uint8Array;
                toProtoMsg(message: _108.StakeAuthorization): _108.StakeAuthorizationProtoMsg;
            };
            StakeAuthorization_Validators: {
                typeUrl: string;
                encode(message: _108.StakeAuthorization_Validators, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _108.StakeAuthorization_Validators;
                fromJSON(object: any): _108.StakeAuthorization_Validators;
                toJSON(message: _108.StakeAuthorization_Validators): unknown;
                fromPartial(object: Partial<_108.StakeAuthorization_Validators>): _108.StakeAuthorization_Validators;
                fromAmino(object: _108.StakeAuthorization_ValidatorsAmino): _108.StakeAuthorization_Validators;
                toAmino(message: _108.StakeAuthorization_Validators): _108.StakeAuthorization_ValidatorsAmino;
                fromAminoMsg(object: _108.StakeAuthorization_ValidatorsAminoMsg): _108.StakeAuthorization_Validators;
                toAminoMsg(message: _108.StakeAuthorization_Validators): _108.StakeAuthorization_ValidatorsAminoMsg;
                fromProtoMsg(message: _108.StakeAuthorization_ValidatorsProtoMsg): _108.StakeAuthorization_Validators;
                toProto(message: _108.StakeAuthorization_Validators): Uint8Array;
                toProtoMsg(message: _108.StakeAuthorization_Validators): _108.StakeAuthorization_ValidatorsProtoMsg;
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
                        encode(message: _113.Pairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: import("..").BinaryReader | Uint8Array, length?: number): _113.Pairs;
                        fromJSON(object: any): _113.Pairs;
                        toJSON(message: _113.Pairs): unknown;
                        fromPartial(object: Partial<_113.Pairs>): _113.Pairs;
                        fromAmino(object: _113.PairsAmino): _113.Pairs;
                        toAmino(message: _113.Pairs): _113.PairsAmino;
                        fromAminoMsg(object: _113.PairsAminoMsg): _113.Pairs;
                        toAminoMsg(message: _113.Pairs): _113.PairsAminoMsg;
                        fromProtoMsg(message: _113.PairsProtoMsg): _113.Pairs;
                        toProto(message: _113.Pairs): Uint8Array;
                        toProtoMsg(message: _113.Pairs): _113.PairsProtoMsg;
                    };
                    Pair: {
                        typeUrl: string;
                        encode(message: _113.Pair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: import("..").BinaryReader | Uint8Array, length?: number): _113.Pair;
                        fromJSON(object: any): _113.Pair;
                        toJSON(message: _113.Pair): unknown;
                        fromPartial(object: Partial<_113.Pair>): _113.Pair;
                        fromAmino(object: _113.PairAmino): _113.Pair;
                        toAmino(message: _113.Pair): _113.PairAmino;
                        fromAminoMsg(object: _113.PairAminoMsg): _113.Pair;
                        toAminoMsg(message: _113.Pair): _113.PairAminoMsg;
                        fromProtoMsg(message: _113.PairProtoMsg): _113.Pair;
                        toProto(message: _113.Pair): Uint8Array;
                        toProtoMsg(message: _113.Pair): _113.PairProtoMsg;
                    };
                };
            }
        }
        namespace snapshots {
            const v1: {
                protobufPackage: "cosmos.store.snapshots.v1";
                Snapshot: {
                    typeUrl: string;
                    encode(message: _114.Snapshot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _114.Snapshot;
                    fromJSON(object: any): _114.Snapshot;
                    toJSON(message: _114.Snapshot): unknown;
                    fromPartial(object: Partial<_114.Snapshot>): _114.Snapshot;
                    fromAmino(object: _114.SnapshotAmino): _114.Snapshot;
                    toAmino(message: _114.Snapshot): _114.SnapshotAmino;
                    fromAminoMsg(object: _114.SnapshotAminoMsg): _114.Snapshot;
                    toAminoMsg(message: _114.Snapshot): _114.SnapshotAminoMsg;
                    fromProtoMsg(message: _114.SnapshotProtoMsg): _114.Snapshot;
                    toProto(message: _114.Snapshot): Uint8Array;
                    toProtoMsg(message: _114.Snapshot): _114.SnapshotProtoMsg;
                };
                Metadata: {
                    typeUrl: string;
                    encode(message: _114.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _114.Metadata;
                    fromJSON(object: any): _114.Metadata;
                    toJSON(message: _114.Metadata): unknown;
                    fromPartial(object: Partial<_114.Metadata>): _114.Metadata;
                    fromAmino(object: _114.MetadataAmino): _114.Metadata;
                    toAmino(message: _114.Metadata): _114.MetadataAmino;
                    fromAminoMsg(object: _114.MetadataAminoMsg): _114.Metadata;
                    toAminoMsg(message: _114.Metadata): _114.MetadataAminoMsg;
                    fromProtoMsg(message: _114.MetadataProtoMsg): _114.Metadata;
                    toProto(message: _114.Metadata): Uint8Array;
                    toProtoMsg(message: _114.Metadata): _114.MetadataProtoMsg;
                };
                SnapshotItem: {
                    typeUrl: string;
                    encode(message: _114.SnapshotItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _114.SnapshotItem;
                    fromJSON(object: any): _114.SnapshotItem;
                    toJSON(message: _114.SnapshotItem): unknown;
                    fromPartial(object: Partial<_114.SnapshotItem>): _114.SnapshotItem;
                    fromAmino(object: _114.SnapshotItemAmino): _114.SnapshotItem;
                    toAmino(message: _114.SnapshotItem): _114.SnapshotItemAmino;
                    fromAminoMsg(object: _114.SnapshotItemAminoMsg): _114.SnapshotItem;
                    toAminoMsg(message: _114.SnapshotItem): _114.SnapshotItemAminoMsg;
                    fromProtoMsg(message: _114.SnapshotItemProtoMsg): _114.SnapshotItem;
                    toProto(message: _114.SnapshotItem): Uint8Array;
                    toProtoMsg(message: _114.SnapshotItem): _114.SnapshotItemProtoMsg;
                };
                SnapshotStoreItem: {
                    typeUrl: string;
                    encode(message: _114.SnapshotStoreItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _114.SnapshotStoreItem;
                    fromJSON(object: any): _114.SnapshotStoreItem;
                    toJSON(message: _114.SnapshotStoreItem): unknown;
                    fromPartial(object: Partial<_114.SnapshotStoreItem>): _114.SnapshotStoreItem;
                    fromAmino(object: _114.SnapshotStoreItemAmino): _114.SnapshotStoreItem;
                    toAmino(message: _114.SnapshotStoreItem): _114.SnapshotStoreItemAmino;
                    fromAminoMsg(object: _114.SnapshotStoreItemAminoMsg): _114.SnapshotStoreItem;
                    toAminoMsg(message: _114.SnapshotStoreItem): _114.SnapshotStoreItemAminoMsg;
                    fromProtoMsg(message: _114.SnapshotStoreItemProtoMsg): _114.SnapshotStoreItem;
                    toProto(message: _114.SnapshotStoreItem): Uint8Array;
                    toProtoMsg(message: _114.SnapshotStoreItem): _114.SnapshotStoreItemProtoMsg;
                };
                SnapshotIAVLItem: {
                    typeUrl: string;
                    encode(message: _114.SnapshotIAVLItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _114.SnapshotIAVLItem;
                    fromJSON(object: any): _114.SnapshotIAVLItem;
                    toJSON(message: _114.SnapshotIAVLItem): unknown;
                    fromPartial(object: Partial<_114.SnapshotIAVLItem>): _114.SnapshotIAVLItem;
                    fromAmino(object: _114.SnapshotIAVLItemAmino): _114.SnapshotIAVLItem;
                    toAmino(message: _114.SnapshotIAVLItem): _114.SnapshotIAVLItemAmino;
                    fromAminoMsg(object: _114.SnapshotIAVLItemAminoMsg): _114.SnapshotIAVLItem;
                    toAminoMsg(message: _114.SnapshotIAVLItem): _114.SnapshotIAVLItemAminoMsg;
                    fromProtoMsg(message: _114.SnapshotIAVLItemProtoMsg): _114.SnapshotIAVLItem;
                    toProto(message: _114.SnapshotIAVLItem): Uint8Array;
                    toProtoMsg(message: _114.SnapshotIAVLItem): _114.SnapshotIAVLItemProtoMsg;
                };
                SnapshotExtensionMeta: {
                    typeUrl: string;
                    encode(message: _114.SnapshotExtensionMeta, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _114.SnapshotExtensionMeta;
                    fromJSON(object: any): _114.SnapshotExtensionMeta;
                    toJSON(message: _114.SnapshotExtensionMeta): unknown;
                    fromPartial(object: Partial<_114.SnapshotExtensionMeta>): _114.SnapshotExtensionMeta;
                    fromAmino(object: _114.SnapshotExtensionMetaAmino): _114.SnapshotExtensionMeta;
                    toAmino(message: _114.SnapshotExtensionMeta): _114.SnapshotExtensionMetaAmino;
                    fromAminoMsg(object: _114.SnapshotExtensionMetaAminoMsg): _114.SnapshotExtensionMeta;
                    toAminoMsg(message: _114.SnapshotExtensionMeta): _114.SnapshotExtensionMetaAminoMsg;
                    fromProtoMsg(message: _114.SnapshotExtensionMetaProtoMsg): _114.SnapshotExtensionMeta;
                    toProto(message: _114.SnapshotExtensionMeta): Uint8Array;
                    toProtoMsg(message: _114.SnapshotExtensionMeta): _114.SnapshotExtensionMetaProtoMsg;
                };
                SnapshotExtensionPayload: {
                    typeUrl: string;
                    encode(message: _114.SnapshotExtensionPayload, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _114.SnapshotExtensionPayload;
                    fromJSON(object: any): _114.SnapshotExtensionPayload;
                    toJSON(message: _114.SnapshotExtensionPayload): unknown;
                    fromPartial(object: Partial<_114.SnapshotExtensionPayload>): _114.SnapshotExtensionPayload;
                    fromAmino(object: _114.SnapshotExtensionPayloadAmino): _114.SnapshotExtensionPayload;
                    toAmino(message: _114.SnapshotExtensionPayload): _114.SnapshotExtensionPayloadAmino;
                    fromAminoMsg(object: _114.SnapshotExtensionPayloadAminoMsg): _114.SnapshotExtensionPayload;
                    toAminoMsg(message: _114.SnapshotExtensionPayload): _114.SnapshotExtensionPayloadAminoMsg;
                    fromProtoMsg(message: _114.SnapshotExtensionPayloadProtoMsg): _114.SnapshotExtensionPayload;
                    toProto(message: _114.SnapshotExtensionPayload): Uint8Array;
                    toProtoMsg(message: _114.SnapshotExtensionPayload): _114.SnapshotExtensionPayloadProtoMsg;
                };
            };
        }
        namespace streaming {
            const abci: {
                protobufPackage: "cosmos.store.streaming.abci";
                ListenFinalizeBlockRequest: {
                    typeUrl: string;
                    encode(message: _115.ListenFinalizeBlockRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _115.ListenFinalizeBlockRequest;
                    fromJSON(object: any): _115.ListenFinalizeBlockRequest;
                    toJSON(message: _115.ListenFinalizeBlockRequest): unknown;
                    fromPartial(object: Partial<_115.ListenFinalizeBlockRequest>): _115.ListenFinalizeBlockRequest;
                    fromAmino(object: _115.ListenFinalizeBlockRequestAmino): _115.ListenFinalizeBlockRequest;
                    toAmino(message: _115.ListenFinalizeBlockRequest): _115.ListenFinalizeBlockRequestAmino;
                    fromAminoMsg(object: _115.ListenFinalizeBlockRequestAminoMsg): _115.ListenFinalizeBlockRequest;
                    toAminoMsg(message: _115.ListenFinalizeBlockRequest): _115.ListenFinalizeBlockRequestAminoMsg;
                    fromProtoMsg(message: _115.ListenFinalizeBlockRequestProtoMsg): _115.ListenFinalizeBlockRequest;
                    toProto(message: _115.ListenFinalizeBlockRequest): Uint8Array;
                    toProtoMsg(message: _115.ListenFinalizeBlockRequest): _115.ListenFinalizeBlockRequestProtoMsg;
                };
                ListenFinalizeBlockResponse: {
                    typeUrl: string;
                    encode(_: _115.ListenFinalizeBlockResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _115.ListenFinalizeBlockResponse;
                    fromJSON(_: any): _115.ListenFinalizeBlockResponse;
                    toJSON(_: _115.ListenFinalizeBlockResponse): unknown;
                    fromPartial(_: Partial<_115.ListenFinalizeBlockResponse>): _115.ListenFinalizeBlockResponse;
                    fromAmino(_: _115.ListenFinalizeBlockResponseAmino): _115.ListenFinalizeBlockResponse;
                    toAmino(_: _115.ListenFinalizeBlockResponse): _115.ListenFinalizeBlockResponseAmino;
                    fromAminoMsg(object: _115.ListenFinalizeBlockResponseAminoMsg): _115.ListenFinalizeBlockResponse;
                    toAminoMsg(message: _115.ListenFinalizeBlockResponse): _115.ListenFinalizeBlockResponseAminoMsg;
                    fromProtoMsg(message: _115.ListenFinalizeBlockResponseProtoMsg): _115.ListenFinalizeBlockResponse;
                    toProto(message: _115.ListenFinalizeBlockResponse): Uint8Array;
                    toProtoMsg(message: _115.ListenFinalizeBlockResponse): _115.ListenFinalizeBlockResponseProtoMsg;
                };
                ListenCommitRequest: {
                    typeUrl: string;
                    encode(message: _115.ListenCommitRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _115.ListenCommitRequest;
                    fromJSON(object: any): _115.ListenCommitRequest;
                    toJSON(message: _115.ListenCommitRequest): unknown;
                    fromPartial(object: Partial<_115.ListenCommitRequest>): _115.ListenCommitRequest;
                    fromAmino(object: _115.ListenCommitRequestAmino): _115.ListenCommitRequest;
                    toAmino(message: _115.ListenCommitRequest): _115.ListenCommitRequestAmino;
                    fromAminoMsg(object: _115.ListenCommitRequestAminoMsg): _115.ListenCommitRequest;
                    toAminoMsg(message: _115.ListenCommitRequest): _115.ListenCommitRequestAminoMsg;
                    fromProtoMsg(message: _115.ListenCommitRequestProtoMsg): _115.ListenCommitRequest;
                    toProto(message: _115.ListenCommitRequest): Uint8Array;
                    toProtoMsg(message: _115.ListenCommitRequest): _115.ListenCommitRequestProtoMsg;
                };
                ListenCommitResponse: {
                    typeUrl: string;
                    encode(_: _115.ListenCommitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _115.ListenCommitResponse;
                    fromJSON(_: any): _115.ListenCommitResponse;
                    toJSON(_: _115.ListenCommitResponse): unknown;
                    fromPartial(_: Partial<_115.ListenCommitResponse>): _115.ListenCommitResponse;
                    fromAmino(_: _115.ListenCommitResponseAmino): _115.ListenCommitResponse;
                    toAmino(_: _115.ListenCommitResponse): _115.ListenCommitResponseAmino;
                    fromAminoMsg(object: _115.ListenCommitResponseAminoMsg): _115.ListenCommitResponse;
                    toAminoMsg(message: _115.ListenCommitResponse): _115.ListenCommitResponseAminoMsg;
                    fromProtoMsg(message: _115.ListenCommitResponseProtoMsg): _115.ListenCommitResponse;
                    toProto(message: _115.ListenCommitResponse): Uint8Array;
                    toProtoMsg(message: _115.ListenCommitResponse): _115.ListenCommitResponseProtoMsg;
                };
            };
        }
        const v1beta1: {
            protobufPackage: "cosmos.store.v1beta1";
            StoreKVPair: {
                typeUrl: string;
                encode(message: _117.StoreKVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _117.StoreKVPair;
                fromJSON(object: any): _117.StoreKVPair;
                toJSON(message: _117.StoreKVPair): unknown;
                fromPartial(object: Partial<_117.StoreKVPair>): _117.StoreKVPair;
                fromAmino(object: _117.StoreKVPairAmino): _117.StoreKVPair;
                toAmino(message: _117.StoreKVPair): _117.StoreKVPairAmino;
                fromAminoMsg(object: _117.StoreKVPairAminoMsg): _117.StoreKVPair;
                toAminoMsg(message: _117.StoreKVPair): _117.StoreKVPairAminoMsg;
                fromProtoMsg(message: _117.StoreKVPairProtoMsg): _117.StoreKVPair;
                toProto(message: _117.StoreKVPair): Uint8Array;
                toProtoMsg(message: _117.StoreKVPair): _117.StoreKVPairProtoMsg;
            };
            BlockMetadata: {
                typeUrl: string;
                encode(message: _117.BlockMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _117.BlockMetadata;
                fromJSON(object: any): _117.BlockMetadata;
                toJSON(message: _117.BlockMetadata): unknown;
                fromPartial(object: Partial<_117.BlockMetadata>): _117.BlockMetadata;
                fromAmino(object: _117.BlockMetadataAmino): _117.BlockMetadata;
                toAmino(message: _117.BlockMetadata): _117.BlockMetadataAmino;
                fromAminoMsg(object: _117.BlockMetadataAminoMsg): _117.BlockMetadata;
                toAminoMsg(message: _117.BlockMetadata): _117.BlockMetadataAminoMsg;
                fromProtoMsg(message: _117.BlockMetadataProtoMsg): _117.BlockMetadata;
                toProto(message: _117.BlockMetadata): Uint8Array;
                toProtoMsg(message: _117.BlockMetadata): _117.BlockMetadataProtoMsg;
            };
            CommitInfo: {
                typeUrl: string;
                encode(message: _116.CommitInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _116.CommitInfo;
                fromJSON(object: any): _116.CommitInfo;
                toJSON(message: _116.CommitInfo): unknown;
                fromPartial(object: Partial<_116.CommitInfo>): _116.CommitInfo;
                fromAmino(object: _116.CommitInfoAmino): _116.CommitInfo;
                toAmino(message: _116.CommitInfo): _116.CommitInfoAmino;
                fromAminoMsg(object: _116.CommitInfoAminoMsg): _116.CommitInfo;
                toAminoMsg(message: _116.CommitInfo): _116.CommitInfoAminoMsg;
                fromProtoMsg(message: _116.CommitInfoProtoMsg): _116.CommitInfo;
                toProto(message: _116.CommitInfo): Uint8Array;
                toProtoMsg(message: _116.CommitInfo): _116.CommitInfoProtoMsg;
            };
            StoreInfo: {
                typeUrl: string;
                encode(message: _116.StoreInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _116.StoreInfo;
                fromJSON(object: any): _116.StoreInfo;
                toJSON(message: _116.StoreInfo): unknown;
                fromPartial(object: Partial<_116.StoreInfo>): _116.StoreInfo;
                fromAmino(object: _116.StoreInfoAmino): _116.StoreInfo;
                toAmino(message: _116.StoreInfo): _116.StoreInfoAmino;
                fromAminoMsg(object: _116.StoreInfoAminoMsg): _116.StoreInfo;
                toAminoMsg(message: _116.StoreInfo): _116.StoreInfoAminoMsg;
                fromProtoMsg(message: _116.StoreInfoProtoMsg): _116.StoreInfo;
                toProto(message: _116.StoreInfo): Uint8Array;
                toProtoMsg(message: _116.StoreInfo): _116.StoreInfoProtoMsg;
            };
            CommitID: {
                typeUrl: string;
                encode(message: _116.CommitID, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _116.CommitID;
                fromJSON(object: any): _116.CommitID;
                toJSON(message: _116.CommitID): unknown;
                fromPartial(object: Partial<_116.CommitID>): _116.CommitID;
                fromAmino(object: _116.CommitIDAmino): _116.CommitID;
                toAmino(message: _116.CommitID): _116.CommitIDAmino;
                fromAminoMsg(object: _116.CommitIDAminoMsg): _116.CommitID;
                toAminoMsg(message: _116.CommitID): _116.CommitIDAminoMsg;
                fromProtoMsg(message: _116.CommitIDProtoMsg): _116.CommitID;
                toProto(message: _116.CommitID): Uint8Array;
                toProtoMsg(message: _116.CommitID): _116.CommitIDProtoMsg;
            };
        };
    }
    namespace tx {
        namespace config {
            const v1: {
                protobufPackage: "cosmos.tx.config.v1";
                Config: {
                    typeUrl: string;
                    encode(message: _118.Config, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _118.Config;
                    fromJSON(object: any): _118.Config;
                    toJSON(message: _118.Config): unknown;
                    fromPartial(object: Partial<_118.Config>): _118.Config;
                    fromAmino(object: _118.ConfigAmino): _118.Config;
                    toAmino(message: _118.Config): _118.ConfigAmino;
                    fromAminoMsg(object: _118.ConfigAminoMsg): _118.Config;
                    toAminoMsg(message: _118.Config): _118.ConfigAminoMsg;
                    fromProtoMsg(message: _118.ConfigProtoMsg): _118.Config;
                    toProto(message: _118.Config): Uint8Array;
                    toProtoMsg(message: _118.Config): _118.ConfigProtoMsg;
                };
            };
        }
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _119.SignMode;
                signModeToJSON(object: _119.SignMode): string;
                protobufPackage: "cosmos.tx.signing.v1beta1";
                SignMode: typeof _119.SignMode;
                SignModeSDKType: typeof _119.SignMode;
                SignModeAmino: typeof _119.SignMode;
                SignatureDescriptors: {
                    typeUrl: string;
                    encode(message: _119.SignatureDescriptors, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _119.SignatureDescriptors;
                    fromJSON(object: any): _119.SignatureDescriptors;
                    toJSON(message: _119.SignatureDescriptors): unknown;
                    fromPartial(object: Partial<_119.SignatureDescriptors>): _119.SignatureDescriptors;
                    fromAmino(object: _119.SignatureDescriptorsAmino): _119.SignatureDescriptors;
                    toAmino(message: _119.SignatureDescriptors): _119.SignatureDescriptorsAmino;
                    fromAminoMsg(object: _119.SignatureDescriptorsAminoMsg): _119.SignatureDescriptors;
                    toAminoMsg(message: _119.SignatureDescriptors): _119.SignatureDescriptorsAminoMsg;
                    fromProtoMsg(message: _119.SignatureDescriptorsProtoMsg): _119.SignatureDescriptors;
                    toProto(message: _119.SignatureDescriptors): Uint8Array;
                    toProtoMsg(message: _119.SignatureDescriptors): _119.SignatureDescriptorsProtoMsg;
                };
                SignatureDescriptor: {
                    typeUrl: string;
                    encode(message: _119.SignatureDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _119.SignatureDescriptor;
                    fromJSON(object: any): _119.SignatureDescriptor;
                    toJSON(message: _119.SignatureDescriptor): unknown;
                    fromPartial(object: Partial<_119.SignatureDescriptor>): _119.SignatureDescriptor;
                    fromAmino(object: _119.SignatureDescriptorAmino): _119.SignatureDescriptor;
                    toAmino(message: _119.SignatureDescriptor): _119.SignatureDescriptorAmino;
                    fromAminoMsg(object: _119.SignatureDescriptorAminoMsg): _119.SignatureDescriptor;
                    toAminoMsg(message: _119.SignatureDescriptor): _119.SignatureDescriptorAminoMsg;
                    fromProtoMsg(message: _119.SignatureDescriptorProtoMsg): _119.SignatureDescriptor;
                    toProto(message: _119.SignatureDescriptor): Uint8Array;
                    toProtoMsg(message: _119.SignatureDescriptor): _119.SignatureDescriptorProtoMsg;
                };
                SignatureDescriptor_Data: {
                    typeUrl: string;
                    encode(message: _119.SignatureDescriptor_Data, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _119.SignatureDescriptor_Data;
                    fromJSON(object: any): _119.SignatureDescriptor_Data;
                    toJSON(message: _119.SignatureDescriptor_Data): unknown;
                    fromPartial(object: Partial<_119.SignatureDescriptor_Data>): _119.SignatureDescriptor_Data;
                    fromAmino(object: _119.SignatureDescriptor_DataAmino): _119.SignatureDescriptor_Data;
                    toAmino(message: _119.SignatureDescriptor_Data): _119.SignatureDescriptor_DataAmino;
                    fromAminoMsg(object: _119.SignatureDescriptor_DataAminoMsg): _119.SignatureDescriptor_Data;
                    toAminoMsg(message: _119.SignatureDescriptor_Data): _119.SignatureDescriptor_DataAminoMsg;
                    fromProtoMsg(message: _119.SignatureDescriptor_DataProtoMsg): _119.SignatureDescriptor_Data;
                    toProto(message: _119.SignatureDescriptor_Data): Uint8Array;
                    toProtoMsg(message: _119.SignatureDescriptor_Data): _119.SignatureDescriptor_DataProtoMsg;
                };
                SignatureDescriptor_Data_Single: {
                    typeUrl: string;
                    encode(message: _119.SignatureDescriptor_Data_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _119.SignatureDescriptor_Data_Single;
                    fromJSON(object: any): _119.SignatureDescriptor_Data_Single;
                    toJSON(message: _119.SignatureDescriptor_Data_Single): unknown;
                    fromPartial(object: Partial<_119.SignatureDescriptor_Data_Single>): _119.SignatureDescriptor_Data_Single;
                    fromAmino(object: _119.SignatureDescriptor_Data_SingleAmino): _119.SignatureDescriptor_Data_Single;
                    toAmino(message: _119.SignatureDescriptor_Data_Single): _119.SignatureDescriptor_Data_SingleAmino;
                    fromAminoMsg(object: _119.SignatureDescriptor_Data_SingleAminoMsg): _119.SignatureDescriptor_Data_Single;
                    toAminoMsg(message: _119.SignatureDescriptor_Data_Single): _119.SignatureDescriptor_Data_SingleAminoMsg;
                    fromProtoMsg(message: _119.SignatureDescriptor_Data_SingleProtoMsg): _119.SignatureDescriptor_Data_Single;
                    toProto(message: _119.SignatureDescriptor_Data_Single): Uint8Array;
                    toProtoMsg(message: _119.SignatureDescriptor_Data_Single): _119.SignatureDescriptor_Data_SingleProtoMsg;
                };
                SignatureDescriptor_Data_Multi: {
                    typeUrl: string;
                    encode(message: _119.SignatureDescriptor_Data_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _119.SignatureDescriptor_Data_Multi;
                    fromJSON(object: any): _119.SignatureDescriptor_Data_Multi;
                    toJSON(message: _119.SignatureDescriptor_Data_Multi): unknown;
                    fromPartial(object: Partial<_119.SignatureDescriptor_Data_Multi>): _119.SignatureDescriptor_Data_Multi;
                    fromAmino(object: _119.SignatureDescriptor_Data_MultiAmino): _119.SignatureDescriptor_Data_Multi;
                    toAmino(message: _119.SignatureDescriptor_Data_Multi): _119.SignatureDescriptor_Data_MultiAmino;
                    fromAminoMsg(object: _119.SignatureDescriptor_Data_MultiAminoMsg): _119.SignatureDescriptor_Data_Multi;
                    toAminoMsg(message: _119.SignatureDescriptor_Data_Multi): _119.SignatureDescriptor_Data_MultiAminoMsg;
                    fromProtoMsg(message: _119.SignatureDescriptor_Data_MultiProtoMsg): _119.SignatureDescriptor_Data_Multi;
                    toProto(message: _119.SignatureDescriptor_Data_Multi): Uint8Array;
                    toProtoMsg(message: _119.SignatureDescriptor_Data_Multi): _119.SignatureDescriptor_Data_MultiProtoMsg;
                };
            };
        }
        const v1beta1: {
            Service: typeof _259.Service;
            ServiceClientImpl: typeof _259.ServiceClientImpl;
            LCDQueryClient: typeof _240.LCDQueryClient;
            protobufPackage: "cosmos.tx.v1beta1";
            Tx: {
                typeUrl: string;
                encode(message: _121.Tx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _121.Tx;
                fromJSON(object: any): _121.Tx;
                toJSON(message: _121.Tx): unknown;
                fromPartial(object: Partial<_121.Tx>): _121.Tx;
                fromAmino(object: _121.TxAmino): _121.Tx;
                toAmino(message: _121.Tx): _121.TxAmino;
                fromAminoMsg(object: _121.TxAminoMsg): _121.Tx;
                toAminoMsg(message: _121.Tx): _121.TxAminoMsg;
                fromProtoMsg(message: _121.TxProtoMsg): _121.Tx;
                toProto(message: _121.Tx): Uint8Array;
                toProtoMsg(message: _121.Tx): _121.TxProtoMsg;
            };
            TxRaw: {
                typeUrl: string;
                encode(message: _121.TxRaw, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _121.TxRaw;
                fromJSON(object: any): _121.TxRaw;
                toJSON(message: _121.TxRaw): unknown;
                fromPartial(object: Partial<_121.TxRaw>): _121.TxRaw;
                fromAmino(object: _121.TxRawAmino): _121.TxRaw;
                toAmino(message: _121.TxRaw): _121.TxRawAmino;
                fromAminoMsg(object: _121.TxRawAminoMsg): _121.TxRaw;
                toAminoMsg(message: _121.TxRaw): _121.TxRawAminoMsg;
                fromProtoMsg(message: _121.TxRawProtoMsg): _121.TxRaw;
                toProto(message: _121.TxRaw): Uint8Array;
                toProtoMsg(message: _121.TxRaw): _121.TxRawProtoMsg;
            };
            SignDoc: {
                typeUrl: string;
                encode(message: _121.SignDoc, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _121.SignDoc;
                fromJSON(object: any): _121.SignDoc;
                toJSON(message: _121.SignDoc): unknown;
                fromPartial(object: Partial<_121.SignDoc>): _121.SignDoc;
                fromAmino(object: _121.SignDocAmino): _121.SignDoc;
                toAmino(message: _121.SignDoc): _121.SignDocAmino;
                fromAminoMsg(object: _121.SignDocAminoMsg): _121.SignDoc;
                toAminoMsg(message: _121.SignDoc): _121.SignDocAminoMsg;
                fromProtoMsg(message: _121.SignDocProtoMsg): _121.SignDoc;
                toProto(message: _121.SignDoc): Uint8Array;
                toProtoMsg(message: _121.SignDoc): _121.SignDocProtoMsg;
            };
            SignDocDirectAux: {
                typeUrl: string;
                encode(message: _121.SignDocDirectAux, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _121.SignDocDirectAux;
                fromJSON(object: any): _121.SignDocDirectAux;
                toJSON(message: _121.SignDocDirectAux): unknown;
                fromPartial(object: Partial<_121.SignDocDirectAux>): _121.SignDocDirectAux;
                fromAmino(object: _121.SignDocDirectAuxAmino): _121.SignDocDirectAux;
                toAmino(message: _121.SignDocDirectAux): _121.SignDocDirectAuxAmino;
                fromAminoMsg(object: _121.SignDocDirectAuxAminoMsg): _121.SignDocDirectAux;
                toAminoMsg(message: _121.SignDocDirectAux): _121.SignDocDirectAuxAminoMsg;
                fromProtoMsg(message: _121.SignDocDirectAuxProtoMsg): _121.SignDocDirectAux;
                toProto(message: _121.SignDocDirectAux): Uint8Array;
                toProtoMsg(message: _121.SignDocDirectAux): _121.SignDocDirectAuxProtoMsg;
            };
            TxBody: {
                typeUrl: string;
                encode(message: _121.TxBody, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _121.TxBody;
                fromJSON(object: any): _121.TxBody;
                toJSON(message: _121.TxBody): unknown;
                fromPartial(object: Partial<_121.TxBody>): _121.TxBody;
                fromAmino(object: _121.TxBodyAmino): _121.TxBody;
                toAmino(message: _121.TxBody): _121.TxBodyAmino;
                fromAminoMsg(object: _121.TxBodyAminoMsg): _121.TxBody;
                toAminoMsg(message: _121.TxBody): _121.TxBodyAminoMsg;
                fromProtoMsg(message: _121.TxBodyProtoMsg): _121.TxBody;
                toProto(message: _121.TxBody): Uint8Array;
                toProtoMsg(message: _121.TxBody): _121.TxBodyProtoMsg;
            };
            AuthInfo: {
                typeUrl: string;
                encode(message: _121.AuthInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _121.AuthInfo;
                fromJSON(object: any): _121.AuthInfo;
                toJSON(message: _121.AuthInfo): unknown;
                fromPartial(object: Partial<_121.AuthInfo>): _121.AuthInfo;
                fromAmino(object: _121.AuthInfoAmino): _121.AuthInfo;
                toAmino(message: _121.AuthInfo): _121.AuthInfoAmino;
                fromAminoMsg(object: _121.AuthInfoAminoMsg): _121.AuthInfo;
                toAminoMsg(message: _121.AuthInfo): _121.AuthInfoAminoMsg;
                fromProtoMsg(message: _121.AuthInfoProtoMsg): _121.AuthInfo;
                toProto(message: _121.AuthInfo): Uint8Array;
                toProtoMsg(message: _121.AuthInfo): _121.AuthInfoProtoMsg;
            };
            SignerInfo: {
                typeUrl: string;
                encode(message: _121.SignerInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _121.SignerInfo;
                fromJSON(object: any): _121.SignerInfo;
                toJSON(message: _121.SignerInfo): unknown;
                fromPartial(object: Partial<_121.SignerInfo>): _121.SignerInfo;
                fromAmino(object: _121.SignerInfoAmino): _121.SignerInfo;
                toAmino(message: _121.SignerInfo): _121.SignerInfoAmino;
                fromAminoMsg(object: _121.SignerInfoAminoMsg): _121.SignerInfo;
                toAminoMsg(message: _121.SignerInfo): _121.SignerInfoAminoMsg;
                fromProtoMsg(message: _121.SignerInfoProtoMsg): _121.SignerInfo;
                toProto(message: _121.SignerInfo): Uint8Array;
                toProtoMsg(message: _121.SignerInfo): _121.SignerInfoProtoMsg;
            };
            ModeInfo: {
                typeUrl: string;
                encode(message: _121.ModeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _121.ModeInfo;
                fromJSON(object: any): _121.ModeInfo;
                toJSON(message: _121.ModeInfo): unknown;
                fromPartial(object: Partial<_121.ModeInfo>): _121.ModeInfo;
                fromAmino(object: _121.ModeInfoAmino): _121.ModeInfo;
                toAmino(message: _121.ModeInfo): _121.ModeInfoAmino;
                fromAminoMsg(object: _121.ModeInfoAminoMsg): _121.ModeInfo;
                toAminoMsg(message: _121.ModeInfo): _121.ModeInfoAminoMsg;
                fromProtoMsg(message: _121.ModeInfoProtoMsg): _121.ModeInfo;
                toProto(message: _121.ModeInfo): Uint8Array;
                toProtoMsg(message: _121.ModeInfo): _121.ModeInfoProtoMsg;
            };
            ModeInfo_Single: {
                typeUrl: string;
                encode(message: _121.ModeInfo_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _121.ModeInfo_Single;
                fromJSON(object: any): _121.ModeInfo_Single;
                toJSON(message: _121.ModeInfo_Single): unknown;
                fromPartial(object: Partial<_121.ModeInfo_Single>): _121.ModeInfo_Single;
                fromAmino(object: _121.ModeInfo_SingleAmino): _121.ModeInfo_Single;
                toAmino(message: _121.ModeInfo_Single): _121.ModeInfo_SingleAmino;
                fromAminoMsg(object: _121.ModeInfo_SingleAminoMsg): _121.ModeInfo_Single;
                toAminoMsg(message: _121.ModeInfo_Single): _121.ModeInfo_SingleAminoMsg;
                fromProtoMsg(message: _121.ModeInfo_SingleProtoMsg): _121.ModeInfo_Single;
                toProto(message: _121.ModeInfo_Single): Uint8Array;
                toProtoMsg(message: _121.ModeInfo_Single): _121.ModeInfo_SingleProtoMsg;
            };
            ModeInfo_Multi: {
                typeUrl: string;
                encode(message: _121.ModeInfo_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _121.ModeInfo_Multi;
                fromJSON(object: any): _121.ModeInfo_Multi;
                toJSON(message: _121.ModeInfo_Multi): unknown;
                fromPartial(object: Partial<_121.ModeInfo_Multi>): _121.ModeInfo_Multi;
                fromAmino(object: _121.ModeInfo_MultiAmino): _121.ModeInfo_Multi;
                toAmino(message: _121.ModeInfo_Multi): _121.ModeInfo_MultiAmino;
                fromAminoMsg(object: _121.ModeInfo_MultiAminoMsg): _121.ModeInfo_Multi;
                toAminoMsg(message: _121.ModeInfo_Multi): _121.ModeInfo_MultiAminoMsg;
                fromProtoMsg(message: _121.ModeInfo_MultiProtoMsg): _121.ModeInfo_Multi;
                toProto(message: _121.ModeInfo_Multi): Uint8Array;
                toProtoMsg(message: _121.ModeInfo_Multi): _121.ModeInfo_MultiProtoMsg;
            };
            Fee: {
                typeUrl: string;
                encode(message: _121.Fee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _121.Fee;
                fromJSON(object: any): _121.Fee;
                toJSON(message: _121.Fee): unknown;
                fromPartial(object: Partial<_121.Fee>): _121.Fee;
                fromAmino(object: _121.FeeAmino): _121.Fee;
                toAmino(message: _121.Fee): _121.FeeAmino;
                fromAminoMsg(object: _121.FeeAminoMsg): _121.Fee;
                toAminoMsg(message: _121.Fee): _121.FeeAminoMsg;
                fromProtoMsg(message: _121.FeeProtoMsg): _121.Fee;
                toProto(message: _121.Fee): Uint8Array;
                toProtoMsg(message: _121.Fee): _121.FeeProtoMsg;
            };
            Tip: {
                typeUrl: string;
                encode(message: _121.Tip, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _121.Tip;
                fromJSON(object: any): _121.Tip;
                toJSON(message: _121.Tip): unknown;
                fromPartial(object: Partial<_121.Tip>): _121.Tip;
                fromAmino(object: _121.TipAmino): _121.Tip;
                toAmino(message: _121.Tip): _121.TipAmino;
                fromAminoMsg(object: _121.TipAminoMsg): _121.Tip;
                toAminoMsg(message: _121.Tip): _121.TipAminoMsg;
                fromProtoMsg(message: _121.TipProtoMsg): _121.Tip;
                toProto(message: _121.Tip): Uint8Array;
                toProtoMsg(message: _121.Tip): _121.TipProtoMsg;
            };
            AuxSignerData: {
                typeUrl: string;
                encode(message: _121.AuxSignerData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _121.AuxSignerData;
                fromJSON(object: any): _121.AuxSignerData;
                toJSON(message: _121.AuxSignerData): unknown;
                fromPartial(object: Partial<_121.AuxSignerData>): _121.AuxSignerData;
                fromAmino(object: _121.AuxSignerDataAmino): _121.AuxSignerData;
                toAmino(message: _121.AuxSignerData): _121.AuxSignerDataAmino;
                fromAminoMsg(object: _121.AuxSignerDataAminoMsg): _121.AuxSignerData;
                toAminoMsg(message: _121.AuxSignerData): _121.AuxSignerDataAminoMsg;
                fromProtoMsg(message: _121.AuxSignerDataProtoMsg): _121.AuxSignerData;
                toProto(message: _121.AuxSignerData): Uint8Array;
                toProtoMsg(message: _121.AuxSignerData): _121.AuxSignerDataProtoMsg;
            };
            orderByFromJSON(object: any): _120.OrderBy;
            orderByToJSON(object: _120.OrderBy): string;
            broadcastModeFromJSON(object: any): _120.BroadcastMode;
            broadcastModeToJSON(object: _120.BroadcastMode): string;
            OrderBy: typeof _120.OrderBy;
            OrderBySDKType: typeof _120.OrderBy;
            OrderByAmino: typeof _120.OrderBy;
            BroadcastMode: typeof _120.BroadcastMode;
            BroadcastModeSDKType: typeof _120.BroadcastMode;
            BroadcastModeAmino: typeof _120.BroadcastMode;
            GetTxsEventRequest: {
                typeUrl: string;
                encode(message: _120.GetTxsEventRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _120.GetTxsEventRequest;
                fromJSON(object: any): _120.GetTxsEventRequest;
                toJSON(message: _120.GetTxsEventRequest): unknown;
                fromPartial(object: Partial<_120.GetTxsEventRequest>): _120.GetTxsEventRequest;
                fromAmino(object: _120.GetTxsEventRequestAmino): _120.GetTxsEventRequest;
                toAmino(message: _120.GetTxsEventRequest): _120.GetTxsEventRequestAmino;
                fromAminoMsg(object: _120.GetTxsEventRequestAminoMsg): _120.GetTxsEventRequest;
                toAminoMsg(message: _120.GetTxsEventRequest): _120.GetTxsEventRequestAminoMsg;
                fromProtoMsg(message: _120.GetTxsEventRequestProtoMsg): _120.GetTxsEventRequest;
                toProto(message: _120.GetTxsEventRequest): Uint8Array;
                toProtoMsg(message: _120.GetTxsEventRequest): _120.GetTxsEventRequestProtoMsg;
            };
            GetTxsEventResponse: {
                typeUrl: string;
                encode(message: _120.GetTxsEventResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _120.GetTxsEventResponse;
                fromJSON(object: any): _120.GetTxsEventResponse;
                toJSON(message: _120.GetTxsEventResponse): unknown;
                fromPartial(object: Partial<_120.GetTxsEventResponse>): _120.GetTxsEventResponse;
                fromAmino(object: _120.GetTxsEventResponseAmino): _120.GetTxsEventResponse;
                toAmino(message: _120.GetTxsEventResponse): _120.GetTxsEventResponseAmino;
                fromAminoMsg(object: _120.GetTxsEventResponseAminoMsg): _120.GetTxsEventResponse;
                toAminoMsg(message: _120.GetTxsEventResponse): _120.GetTxsEventResponseAminoMsg;
                fromProtoMsg(message: _120.GetTxsEventResponseProtoMsg): _120.GetTxsEventResponse;
                toProto(message: _120.GetTxsEventResponse): Uint8Array;
                toProtoMsg(message: _120.GetTxsEventResponse): _120.GetTxsEventResponseProtoMsg;
            };
            BroadcastTxRequest: {
                typeUrl: string;
                encode(message: _120.BroadcastTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _120.BroadcastTxRequest;
                fromJSON(object: any): _120.BroadcastTxRequest;
                toJSON(message: _120.BroadcastTxRequest): unknown;
                fromPartial(object: Partial<_120.BroadcastTxRequest>): _120.BroadcastTxRequest;
                fromAmino(object: _120.BroadcastTxRequestAmino): _120.BroadcastTxRequest;
                toAmino(message: _120.BroadcastTxRequest): _120.BroadcastTxRequestAmino;
                fromAminoMsg(object: _120.BroadcastTxRequestAminoMsg): _120.BroadcastTxRequest;
                toAminoMsg(message: _120.BroadcastTxRequest): _120.BroadcastTxRequestAminoMsg;
                fromProtoMsg(message: _120.BroadcastTxRequestProtoMsg): _120.BroadcastTxRequest;
                toProto(message: _120.BroadcastTxRequest): Uint8Array;
                toProtoMsg(message: _120.BroadcastTxRequest): _120.BroadcastTxRequestProtoMsg;
            };
            BroadcastTxResponse: {
                typeUrl: string;
                encode(message: _120.BroadcastTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _120.BroadcastTxResponse;
                fromJSON(object: any): _120.BroadcastTxResponse;
                toJSON(message: _120.BroadcastTxResponse): unknown;
                fromPartial(object: Partial<_120.BroadcastTxResponse>): _120.BroadcastTxResponse;
                fromAmino(object: _120.BroadcastTxResponseAmino): _120.BroadcastTxResponse;
                toAmino(message: _120.BroadcastTxResponse): _120.BroadcastTxResponseAmino;
                fromAminoMsg(object: _120.BroadcastTxResponseAminoMsg): _120.BroadcastTxResponse;
                toAminoMsg(message: _120.BroadcastTxResponse): _120.BroadcastTxResponseAminoMsg;
                fromProtoMsg(message: _120.BroadcastTxResponseProtoMsg): _120.BroadcastTxResponse;
                toProto(message: _120.BroadcastTxResponse): Uint8Array;
                toProtoMsg(message: _120.BroadcastTxResponse): _120.BroadcastTxResponseProtoMsg;
            };
            SimulateRequest: {
                typeUrl: string;
                encode(message: _120.SimulateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _120.SimulateRequest;
                fromJSON(object: any): _120.SimulateRequest;
                toJSON(message: _120.SimulateRequest): unknown;
                fromPartial(object: Partial<_120.SimulateRequest>): _120.SimulateRequest;
                fromAmino(object: _120.SimulateRequestAmino): _120.SimulateRequest;
                toAmino(message: _120.SimulateRequest): _120.SimulateRequestAmino;
                fromAminoMsg(object: _120.SimulateRequestAminoMsg): _120.SimulateRequest;
                toAminoMsg(message: _120.SimulateRequest): _120.SimulateRequestAminoMsg;
                fromProtoMsg(message: _120.SimulateRequestProtoMsg): _120.SimulateRequest;
                toProto(message: _120.SimulateRequest): Uint8Array;
                toProtoMsg(message: _120.SimulateRequest): _120.SimulateRequestProtoMsg;
            };
            SimulateResponse: {
                typeUrl: string;
                encode(message: _120.SimulateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _120.SimulateResponse;
                fromJSON(object: any): _120.SimulateResponse;
                toJSON(message: _120.SimulateResponse): unknown;
                fromPartial(object: Partial<_120.SimulateResponse>): _120.SimulateResponse;
                fromAmino(object: _120.SimulateResponseAmino): _120.SimulateResponse;
                toAmino(message: _120.SimulateResponse): _120.SimulateResponseAmino;
                fromAminoMsg(object: _120.SimulateResponseAminoMsg): _120.SimulateResponse;
                toAminoMsg(message: _120.SimulateResponse): _120.SimulateResponseAminoMsg;
                fromProtoMsg(message: _120.SimulateResponseProtoMsg): _120.SimulateResponse;
                toProto(message: _120.SimulateResponse): Uint8Array;
                toProtoMsg(message: _120.SimulateResponse): _120.SimulateResponseProtoMsg;
            };
            GetTxRequest: {
                typeUrl: string;
                encode(message: _120.GetTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _120.GetTxRequest;
                fromJSON(object: any): _120.GetTxRequest;
                toJSON(message: _120.GetTxRequest): unknown;
                fromPartial(object: Partial<_120.GetTxRequest>): _120.GetTxRequest;
                fromAmino(object: _120.GetTxRequestAmino): _120.GetTxRequest;
                toAmino(message: _120.GetTxRequest): _120.GetTxRequestAmino;
                fromAminoMsg(object: _120.GetTxRequestAminoMsg): _120.GetTxRequest;
                toAminoMsg(message: _120.GetTxRequest): _120.GetTxRequestAminoMsg;
                fromProtoMsg(message: _120.GetTxRequestProtoMsg): _120.GetTxRequest;
                toProto(message: _120.GetTxRequest): Uint8Array;
                toProtoMsg(message: _120.GetTxRequest): _120.GetTxRequestProtoMsg;
            };
            GetTxResponse: {
                typeUrl: string;
                encode(message: _120.GetTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _120.GetTxResponse;
                fromJSON(object: any): _120.GetTxResponse;
                toJSON(message: _120.GetTxResponse): unknown;
                fromPartial(object: Partial<_120.GetTxResponse>): _120.GetTxResponse;
                fromAmino(object: _120.GetTxResponseAmino): _120.GetTxResponse;
                toAmino(message: _120.GetTxResponse): _120.GetTxResponseAmino;
                fromAminoMsg(object: _120.GetTxResponseAminoMsg): _120.GetTxResponse;
                toAminoMsg(message: _120.GetTxResponse): _120.GetTxResponseAminoMsg;
                fromProtoMsg(message: _120.GetTxResponseProtoMsg): _120.GetTxResponse;
                toProto(message: _120.GetTxResponse): Uint8Array;
                toProtoMsg(message: _120.GetTxResponse): _120.GetTxResponseProtoMsg;
            };
            GetBlockWithTxsRequest: {
                typeUrl: string;
                encode(message: _120.GetBlockWithTxsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _120.GetBlockWithTxsRequest;
                fromJSON(object: any): _120.GetBlockWithTxsRequest;
                toJSON(message: _120.GetBlockWithTxsRequest): unknown;
                fromPartial(object: Partial<_120.GetBlockWithTxsRequest>): _120.GetBlockWithTxsRequest;
                fromAmino(object: _120.GetBlockWithTxsRequestAmino): _120.GetBlockWithTxsRequest;
                toAmino(message: _120.GetBlockWithTxsRequest): _120.GetBlockWithTxsRequestAmino;
                fromAminoMsg(object: _120.GetBlockWithTxsRequestAminoMsg): _120.GetBlockWithTxsRequest;
                toAminoMsg(message: _120.GetBlockWithTxsRequest): _120.GetBlockWithTxsRequestAminoMsg;
                fromProtoMsg(message: _120.GetBlockWithTxsRequestProtoMsg): _120.GetBlockWithTxsRequest;
                toProto(message: _120.GetBlockWithTxsRequest): Uint8Array;
                toProtoMsg(message: _120.GetBlockWithTxsRequest): _120.GetBlockWithTxsRequestProtoMsg;
            };
            GetBlockWithTxsResponse: {
                typeUrl: string;
                encode(message: _120.GetBlockWithTxsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _120.GetBlockWithTxsResponse;
                fromJSON(object: any): _120.GetBlockWithTxsResponse;
                toJSON(message: _120.GetBlockWithTxsResponse): unknown;
                fromPartial(object: Partial<_120.GetBlockWithTxsResponse>): _120.GetBlockWithTxsResponse;
                fromAmino(object: _120.GetBlockWithTxsResponseAmino): _120.GetBlockWithTxsResponse;
                toAmino(message: _120.GetBlockWithTxsResponse): _120.GetBlockWithTxsResponseAmino;
                fromAminoMsg(object: _120.GetBlockWithTxsResponseAminoMsg): _120.GetBlockWithTxsResponse;
                toAminoMsg(message: _120.GetBlockWithTxsResponse): _120.GetBlockWithTxsResponseAminoMsg;
                fromProtoMsg(message: _120.GetBlockWithTxsResponseProtoMsg): _120.GetBlockWithTxsResponse;
                toProto(message: _120.GetBlockWithTxsResponse): Uint8Array;
                toProtoMsg(message: _120.GetBlockWithTxsResponse): _120.GetBlockWithTxsResponseProtoMsg;
            };
            TxDecodeRequest: {
                typeUrl: string;
                encode(message: _120.TxDecodeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _120.TxDecodeRequest;
                fromJSON(object: any): _120.TxDecodeRequest;
                toJSON(message: _120.TxDecodeRequest): unknown;
                fromPartial(object: Partial<_120.TxDecodeRequest>): _120.TxDecodeRequest;
                fromAmino(object: _120.TxDecodeRequestAmino): _120.TxDecodeRequest;
                toAmino(message: _120.TxDecodeRequest): _120.TxDecodeRequestAmino;
                fromAminoMsg(object: _120.TxDecodeRequestAminoMsg): _120.TxDecodeRequest;
                toAminoMsg(message: _120.TxDecodeRequest): _120.TxDecodeRequestAminoMsg;
                fromProtoMsg(message: _120.TxDecodeRequestProtoMsg): _120.TxDecodeRequest;
                toProto(message: _120.TxDecodeRequest): Uint8Array;
                toProtoMsg(message: _120.TxDecodeRequest): _120.TxDecodeRequestProtoMsg;
            };
            TxDecodeResponse: {
                typeUrl: string;
                encode(message: _120.TxDecodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _120.TxDecodeResponse;
                fromJSON(object: any): _120.TxDecodeResponse;
                toJSON(message: _120.TxDecodeResponse): unknown;
                fromPartial(object: Partial<_120.TxDecodeResponse>): _120.TxDecodeResponse;
                fromAmino(object: _120.TxDecodeResponseAmino): _120.TxDecodeResponse;
                toAmino(message: _120.TxDecodeResponse): _120.TxDecodeResponseAmino;
                fromAminoMsg(object: _120.TxDecodeResponseAminoMsg): _120.TxDecodeResponse;
                toAminoMsg(message: _120.TxDecodeResponse): _120.TxDecodeResponseAminoMsg;
                fromProtoMsg(message: _120.TxDecodeResponseProtoMsg): _120.TxDecodeResponse;
                toProto(message: _120.TxDecodeResponse): Uint8Array;
                toProtoMsg(message: _120.TxDecodeResponse): _120.TxDecodeResponseProtoMsg;
            };
            TxEncodeRequest: {
                typeUrl: string;
                encode(message: _120.TxEncodeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _120.TxEncodeRequest;
                fromJSON(object: any): _120.TxEncodeRequest;
                toJSON(message: _120.TxEncodeRequest): unknown;
                fromPartial(object: Partial<_120.TxEncodeRequest>): _120.TxEncodeRequest;
                fromAmino(object: _120.TxEncodeRequestAmino): _120.TxEncodeRequest;
                toAmino(message: _120.TxEncodeRequest): _120.TxEncodeRequestAmino;
                fromAminoMsg(object: _120.TxEncodeRequestAminoMsg): _120.TxEncodeRequest;
                toAminoMsg(message: _120.TxEncodeRequest): _120.TxEncodeRequestAminoMsg;
                fromProtoMsg(message: _120.TxEncodeRequestProtoMsg): _120.TxEncodeRequest;
                toProto(message: _120.TxEncodeRequest): Uint8Array;
                toProtoMsg(message: _120.TxEncodeRequest): _120.TxEncodeRequestProtoMsg;
            };
            TxEncodeResponse: {
                typeUrl: string;
                encode(message: _120.TxEncodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _120.TxEncodeResponse;
                fromJSON(object: any): _120.TxEncodeResponse;
                toJSON(message: _120.TxEncodeResponse): unknown;
                fromPartial(object: Partial<_120.TxEncodeResponse>): _120.TxEncodeResponse;
                fromAmino(object: _120.TxEncodeResponseAmino): _120.TxEncodeResponse;
                toAmino(message: _120.TxEncodeResponse): _120.TxEncodeResponseAmino;
                fromAminoMsg(object: _120.TxEncodeResponseAminoMsg): _120.TxEncodeResponse;
                toAminoMsg(message: _120.TxEncodeResponse): _120.TxEncodeResponseAminoMsg;
                fromProtoMsg(message: _120.TxEncodeResponseProtoMsg): _120.TxEncodeResponse;
                toProto(message: _120.TxEncodeResponse): Uint8Array;
                toProtoMsg(message: _120.TxEncodeResponse): _120.TxEncodeResponseProtoMsg;
            };
            TxEncodeAminoRequest: {
                typeUrl: string;
                encode(message: _120.TxEncodeAminoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _120.TxEncodeAminoRequest;
                fromJSON(object: any): _120.TxEncodeAminoRequest;
                toJSON(message: _120.TxEncodeAminoRequest): unknown;
                fromPartial(object: Partial<_120.TxEncodeAminoRequest>): _120.TxEncodeAminoRequest;
                fromAmino(object: _120.TxEncodeAminoRequestAmino): _120.TxEncodeAminoRequest;
                toAmino(message: _120.TxEncodeAminoRequest): _120.TxEncodeAminoRequestAmino;
                fromAminoMsg(object: _120.TxEncodeAminoRequestAminoMsg): _120.TxEncodeAminoRequest;
                toAminoMsg(message: _120.TxEncodeAminoRequest): _120.TxEncodeAminoRequestAminoMsg;
                fromProtoMsg(message: _120.TxEncodeAminoRequestProtoMsg): _120.TxEncodeAminoRequest;
                toProto(message: _120.TxEncodeAminoRequest): Uint8Array;
                toProtoMsg(message: _120.TxEncodeAminoRequest): _120.TxEncodeAminoRequestProtoMsg;
            };
            TxEncodeAminoResponse: {
                typeUrl: string;
                encode(message: _120.TxEncodeAminoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _120.TxEncodeAminoResponse;
                fromJSON(object: any): _120.TxEncodeAminoResponse;
                toJSON(message: _120.TxEncodeAminoResponse): unknown;
                fromPartial(object: Partial<_120.TxEncodeAminoResponse>): _120.TxEncodeAminoResponse;
                fromAmino(object: _120.TxEncodeAminoResponseAmino): _120.TxEncodeAminoResponse;
                toAmino(message: _120.TxEncodeAminoResponse): _120.TxEncodeAminoResponseAmino;
                fromAminoMsg(object: _120.TxEncodeAminoResponseAminoMsg): _120.TxEncodeAminoResponse;
                toAminoMsg(message: _120.TxEncodeAminoResponse): _120.TxEncodeAminoResponseAminoMsg;
                fromProtoMsg(message: _120.TxEncodeAminoResponseProtoMsg): _120.TxEncodeAminoResponse;
                toProto(message: _120.TxEncodeAminoResponse): Uint8Array;
                toProtoMsg(message: _120.TxEncodeAminoResponse): _120.TxEncodeAminoResponseProtoMsg;
            };
            TxDecodeAminoRequest: {
                typeUrl: string;
                encode(message: _120.TxDecodeAminoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _120.TxDecodeAminoRequest;
                fromJSON(object: any): _120.TxDecodeAminoRequest;
                toJSON(message: _120.TxDecodeAminoRequest): unknown;
                fromPartial(object: Partial<_120.TxDecodeAminoRequest>): _120.TxDecodeAminoRequest;
                fromAmino(object: _120.TxDecodeAminoRequestAmino): _120.TxDecodeAminoRequest;
                toAmino(message: _120.TxDecodeAminoRequest): _120.TxDecodeAminoRequestAmino;
                fromAminoMsg(object: _120.TxDecodeAminoRequestAminoMsg): _120.TxDecodeAminoRequest;
                toAminoMsg(message: _120.TxDecodeAminoRequest): _120.TxDecodeAminoRequestAminoMsg;
                fromProtoMsg(message: _120.TxDecodeAminoRequestProtoMsg): _120.TxDecodeAminoRequest;
                toProto(message: _120.TxDecodeAminoRequest): Uint8Array;
                toProtoMsg(message: _120.TxDecodeAminoRequest): _120.TxDecodeAminoRequestProtoMsg;
            };
            TxDecodeAminoResponse: {
                typeUrl: string;
                encode(message: _120.TxDecodeAminoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _120.TxDecodeAminoResponse;
                fromJSON(object: any): _120.TxDecodeAminoResponse;
                toJSON(message: _120.TxDecodeAminoResponse): unknown;
                fromPartial(object: Partial<_120.TxDecodeAminoResponse>): _120.TxDecodeAminoResponse;
                fromAmino(object: _120.TxDecodeAminoResponseAmino): _120.TxDecodeAminoResponse;
                toAmino(message: _120.TxDecodeAminoResponse): _120.TxDecodeAminoResponseAmino;
                fromAminoMsg(object: _120.TxDecodeAminoResponseAminoMsg): _120.TxDecodeAminoResponse;
                toAminoMsg(message: _120.TxDecodeAminoResponse): _120.TxDecodeAminoResponseAminoMsg;
                fromProtoMsg(message: _120.TxDecodeAminoResponseProtoMsg): _120.TxDecodeAminoResponse;
                toProto(message: _120.TxDecodeAminoResponse): Uint8Array;
                toProtoMsg(message: _120.TxDecodeAminoResponse): _120.TxDecodeAminoResponseProtoMsg;
            };
        };
    }
    namespace upgrade {
        namespace module {
            const v1: {
                protobufPackage: "cosmos.upgrade.module.v1";
                Module: {
                    typeUrl: string;
                    encode(message: _122.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _122.Module;
                    fromJSON(object: any): _122.Module;
                    toJSON(message: _122.Module): unknown;
                    fromPartial(object: Partial<_122.Module>): _122.Module;
                    fromAmino(object: _122.ModuleAmino): _122.Module;
                    toAmino(message: _122.Module): _122.ModuleAmino;
                    fromAminoMsg(object: _122.ModuleAminoMsg): _122.Module;
                    toAminoMsg(message: _122.Module): _122.ModuleAminoMsg;
                    fromProtoMsg(message: _122.ModuleProtoMsg): _122.Module;
                    toProto(message: _122.Module): Uint8Array;
                    toProtoMsg(message: _122.Module): _122.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            Msg: typeof _274.Msg;
            Query: typeof _260.Query;
            QueryClientImpl: typeof _260.QueryClientImpl;
            LCDQueryClient: typeof _241.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    softwareUpgrade(value: _124.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUpgrade(value: _124.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    softwareUpgrade(value: _124.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _124.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _124.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _124.MsgCancelUpgrade;
                    };
                };
                toJSON: {
                    softwareUpgrade(value: _124.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: unknown;
                    };
                    cancelUpgrade(value: _124.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    softwareUpgrade(value: any): {
                        typeUrl: string;
                        value: _124.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: any): {
                        typeUrl: string;
                        value: _124.MsgCancelUpgrade;
                    };
                };
                fromPartial: {
                    softwareUpgrade(value: _124.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _124.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _124.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _124.MsgCancelUpgrade;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
                    aminoType: string;
                    toAmino: (message: _124.MsgSoftwareUpgrade) => _124.MsgSoftwareUpgradeAmino;
                    fromAmino: (object: _124.MsgSoftwareUpgradeAmino) => _124.MsgSoftwareUpgrade;
                };
                "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
                    aminoType: string;
                    toAmino: (message: _124.MsgCancelUpgrade) => _124.MsgCancelUpgradeAmino;
                    fromAmino: (object: _124.MsgCancelUpgradeAmino) => _124.MsgCancelUpgrade;
                };
            };
            protobufPackage: "cosmos.upgrade.v1beta1";
            Plan: {
                typeUrl: string;
                encode(message: _125.Plan, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _125.Plan;
                fromJSON(object: any): _125.Plan;
                toJSON(message: _125.Plan): unknown;
                fromPartial(object: Partial<_125.Plan>): _125.Plan;
                fromAmino(object: _125.PlanAmino): _125.Plan;
                toAmino(message: _125.Plan): _125.PlanAmino;
                fromAminoMsg(object: _125.PlanAminoMsg): _125.Plan;
                toAminoMsg(message: _125.Plan): _125.PlanAminoMsg;
                fromProtoMsg(message: _125.PlanProtoMsg): _125.Plan;
                toProto(message: _125.Plan): Uint8Array;
                toProtoMsg(message: _125.Plan): _125.PlanProtoMsg;
            };
            SoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _125.SoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _125.SoftwareUpgradeProposal;
                fromJSON(object: any): _125.SoftwareUpgradeProposal;
                toJSON(message: _125.SoftwareUpgradeProposal): unknown;
                fromPartial(object: Partial<_125.SoftwareUpgradeProposal>): _125.SoftwareUpgradeProposal;
                fromAmino(object: _125.SoftwareUpgradeProposalAmino): _125.SoftwareUpgradeProposal;
                toAmino(message: _125.SoftwareUpgradeProposal): _125.SoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _125.SoftwareUpgradeProposalAminoMsg): _125.SoftwareUpgradeProposal;
                toAminoMsg(message: _125.SoftwareUpgradeProposal): _125.SoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _125.SoftwareUpgradeProposalProtoMsg): _125.SoftwareUpgradeProposal;
                toProto(message: _125.SoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _125.SoftwareUpgradeProposal): _125.SoftwareUpgradeProposalProtoMsg;
            };
            CancelSoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _125.CancelSoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _125.CancelSoftwareUpgradeProposal;
                fromJSON(object: any): _125.CancelSoftwareUpgradeProposal;
                toJSON(message: _125.CancelSoftwareUpgradeProposal): unknown;
                fromPartial(object: Partial<_125.CancelSoftwareUpgradeProposal>): _125.CancelSoftwareUpgradeProposal;
                fromAmino(object: _125.CancelSoftwareUpgradeProposalAmino): _125.CancelSoftwareUpgradeProposal;
                toAmino(message: _125.CancelSoftwareUpgradeProposal): _125.CancelSoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _125.CancelSoftwareUpgradeProposalAminoMsg): _125.CancelSoftwareUpgradeProposal;
                toAminoMsg(message: _125.CancelSoftwareUpgradeProposal): _125.CancelSoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _125.CancelSoftwareUpgradeProposalProtoMsg): _125.CancelSoftwareUpgradeProposal;
                toProto(message: _125.CancelSoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _125.CancelSoftwareUpgradeProposal): _125.CancelSoftwareUpgradeProposalProtoMsg;
            };
            ModuleVersion: {
                typeUrl: string;
                encode(message: _125.ModuleVersion, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _125.ModuleVersion;
                fromJSON(object: any): _125.ModuleVersion;
                toJSON(message: _125.ModuleVersion): unknown;
                fromPartial(object: Partial<_125.ModuleVersion>): _125.ModuleVersion;
                fromAmino(object: _125.ModuleVersionAmino): _125.ModuleVersion;
                toAmino(message: _125.ModuleVersion): _125.ModuleVersionAmino;
                fromAminoMsg(object: _125.ModuleVersionAminoMsg): _125.ModuleVersion;
                toAminoMsg(message: _125.ModuleVersion): _125.ModuleVersionAminoMsg;
                fromProtoMsg(message: _125.ModuleVersionProtoMsg): _125.ModuleVersion;
                toProto(message: _125.ModuleVersion): Uint8Array;
                toProtoMsg(message: _125.ModuleVersion): _125.ModuleVersionProtoMsg;
            };
            MsgSoftwareUpgrade: {
                typeUrl: string;
                encode(message: _124.MsgSoftwareUpgrade, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _124.MsgSoftwareUpgrade;
                fromJSON(object: any): _124.MsgSoftwareUpgrade;
                toJSON(message: _124.MsgSoftwareUpgrade): unknown;
                fromPartial(object: Partial<_124.MsgSoftwareUpgrade>): _124.MsgSoftwareUpgrade;
                fromAmino(object: _124.MsgSoftwareUpgradeAmino): _124.MsgSoftwareUpgrade;
                toAmino(message: _124.MsgSoftwareUpgrade): _124.MsgSoftwareUpgradeAmino;
                fromAminoMsg(object: _124.MsgSoftwareUpgradeAminoMsg): _124.MsgSoftwareUpgrade;
                toAminoMsg(message: _124.MsgSoftwareUpgrade): _124.MsgSoftwareUpgradeAminoMsg;
                fromProtoMsg(message: _124.MsgSoftwareUpgradeProtoMsg): _124.MsgSoftwareUpgrade;
                toProto(message: _124.MsgSoftwareUpgrade): Uint8Array;
                toProtoMsg(message: _124.MsgSoftwareUpgrade): _124.MsgSoftwareUpgradeProtoMsg;
            };
            MsgSoftwareUpgradeResponse: {
                typeUrl: string;
                encode(_: _124.MsgSoftwareUpgradeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _124.MsgSoftwareUpgradeResponse;
                fromJSON(_: any): _124.MsgSoftwareUpgradeResponse;
                toJSON(_: _124.MsgSoftwareUpgradeResponse): unknown;
                fromPartial(_: Partial<_124.MsgSoftwareUpgradeResponse>): _124.MsgSoftwareUpgradeResponse;
                fromAmino(_: _124.MsgSoftwareUpgradeResponseAmino): _124.MsgSoftwareUpgradeResponse;
                toAmino(_: _124.MsgSoftwareUpgradeResponse): _124.MsgSoftwareUpgradeResponseAmino;
                fromAminoMsg(object: _124.MsgSoftwareUpgradeResponseAminoMsg): _124.MsgSoftwareUpgradeResponse;
                toAminoMsg(message: _124.MsgSoftwareUpgradeResponse): _124.MsgSoftwareUpgradeResponseAminoMsg;
                fromProtoMsg(message: _124.MsgSoftwareUpgradeResponseProtoMsg): _124.MsgSoftwareUpgradeResponse;
                toProto(message: _124.MsgSoftwareUpgradeResponse): Uint8Array;
                toProtoMsg(message: _124.MsgSoftwareUpgradeResponse): _124.MsgSoftwareUpgradeResponseProtoMsg;
            };
            MsgCancelUpgrade: {
                typeUrl: string;
                encode(message: _124.MsgCancelUpgrade, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _124.MsgCancelUpgrade;
                fromJSON(object: any): _124.MsgCancelUpgrade;
                toJSON(message: _124.MsgCancelUpgrade): unknown;
                fromPartial(object: Partial<_124.MsgCancelUpgrade>): _124.MsgCancelUpgrade;
                fromAmino(object: _124.MsgCancelUpgradeAmino): _124.MsgCancelUpgrade;
                toAmino(message: _124.MsgCancelUpgrade): _124.MsgCancelUpgradeAmino;
                fromAminoMsg(object: _124.MsgCancelUpgradeAminoMsg): _124.MsgCancelUpgrade;
                toAminoMsg(message: _124.MsgCancelUpgrade): _124.MsgCancelUpgradeAminoMsg;
                fromProtoMsg(message: _124.MsgCancelUpgradeProtoMsg): _124.MsgCancelUpgrade;
                toProto(message: _124.MsgCancelUpgrade): Uint8Array;
                toProtoMsg(message: _124.MsgCancelUpgrade): _124.MsgCancelUpgradeProtoMsg;
            };
            MsgCancelUpgradeResponse: {
                typeUrl: string;
                encode(_: _124.MsgCancelUpgradeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _124.MsgCancelUpgradeResponse;
                fromJSON(_: any): _124.MsgCancelUpgradeResponse;
                toJSON(_: _124.MsgCancelUpgradeResponse): unknown;
                fromPartial(_: Partial<_124.MsgCancelUpgradeResponse>): _124.MsgCancelUpgradeResponse;
                fromAmino(_: _124.MsgCancelUpgradeResponseAmino): _124.MsgCancelUpgradeResponse;
                toAmino(_: _124.MsgCancelUpgradeResponse): _124.MsgCancelUpgradeResponseAmino;
                fromAminoMsg(object: _124.MsgCancelUpgradeResponseAminoMsg): _124.MsgCancelUpgradeResponse;
                toAminoMsg(message: _124.MsgCancelUpgradeResponse): _124.MsgCancelUpgradeResponseAminoMsg;
                fromProtoMsg(message: _124.MsgCancelUpgradeResponseProtoMsg): _124.MsgCancelUpgradeResponse;
                toProto(message: _124.MsgCancelUpgradeResponse): Uint8Array;
                toProtoMsg(message: _124.MsgCancelUpgradeResponse): _124.MsgCancelUpgradeResponseProtoMsg;
            };
            QueryCurrentPlanRequest: {
                typeUrl: string;
                encode(_: _123.QueryCurrentPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _123.QueryCurrentPlanRequest;
                fromJSON(_: any): _123.QueryCurrentPlanRequest;
                toJSON(_: _123.QueryCurrentPlanRequest): unknown;
                fromPartial(_: Partial<_123.QueryCurrentPlanRequest>): _123.QueryCurrentPlanRequest;
                fromAmino(_: _123.QueryCurrentPlanRequestAmino): _123.QueryCurrentPlanRequest;
                toAmino(_: _123.QueryCurrentPlanRequest): _123.QueryCurrentPlanRequestAmino;
                fromAminoMsg(object: _123.QueryCurrentPlanRequestAminoMsg): _123.QueryCurrentPlanRequest;
                toAminoMsg(message: _123.QueryCurrentPlanRequest): _123.QueryCurrentPlanRequestAminoMsg;
                fromProtoMsg(message: _123.QueryCurrentPlanRequestProtoMsg): _123.QueryCurrentPlanRequest;
                toProto(message: _123.QueryCurrentPlanRequest): Uint8Array;
                toProtoMsg(message: _123.QueryCurrentPlanRequest): _123.QueryCurrentPlanRequestProtoMsg;
            };
            QueryCurrentPlanResponse: {
                typeUrl: string;
                encode(message: _123.QueryCurrentPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _123.QueryCurrentPlanResponse;
                fromJSON(object: any): _123.QueryCurrentPlanResponse;
                toJSON(message: _123.QueryCurrentPlanResponse): unknown;
                fromPartial(object: Partial<_123.QueryCurrentPlanResponse>): _123.QueryCurrentPlanResponse;
                fromAmino(object: _123.QueryCurrentPlanResponseAmino): _123.QueryCurrentPlanResponse;
                toAmino(message: _123.QueryCurrentPlanResponse): _123.QueryCurrentPlanResponseAmino;
                fromAminoMsg(object: _123.QueryCurrentPlanResponseAminoMsg): _123.QueryCurrentPlanResponse;
                toAminoMsg(message: _123.QueryCurrentPlanResponse): _123.QueryCurrentPlanResponseAminoMsg;
                fromProtoMsg(message: _123.QueryCurrentPlanResponseProtoMsg): _123.QueryCurrentPlanResponse;
                toProto(message: _123.QueryCurrentPlanResponse): Uint8Array;
                toProtoMsg(message: _123.QueryCurrentPlanResponse): _123.QueryCurrentPlanResponseProtoMsg;
            };
            QueryAppliedPlanRequest: {
                typeUrl: string;
                encode(message: _123.QueryAppliedPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _123.QueryAppliedPlanRequest;
                fromJSON(object: any): _123.QueryAppliedPlanRequest;
                toJSON(message: _123.QueryAppliedPlanRequest): unknown;
                fromPartial(object: Partial<_123.QueryAppliedPlanRequest>): _123.QueryAppliedPlanRequest;
                fromAmino(object: _123.QueryAppliedPlanRequestAmino): _123.QueryAppliedPlanRequest;
                toAmino(message: _123.QueryAppliedPlanRequest): _123.QueryAppliedPlanRequestAmino;
                fromAminoMsg(object: _123.QueryAppliedPlanRequestAminoMsg): _123.QueryAppliedPlanRequest;
                toAminoMsg(message: _123.QueryAppliedPlanRequest): _123.QueryAppliedPlanRequestAminoMsg;
                fromProtoMsg(message: _123.QueryAppliedPlanRequestProtoMsg): _123.QueryAppliedPlanRequest;
                toProto(message: _123.QueryAppliedPlanRequest): Uint8Array;
                toProtoMsg(message: _123.QueryAppliedPlanRequest): _123.QueryAppliedPlanRequestProtoMsg;
            };
            QueryAppliedPlanResponse: {
                typeUrl: string;
                encode(message: _123.QueryAppliedPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _123.QueryAppliedPlanResponse;
                fromJSON(object: any): _123.QueryAppliedPlanResponse;
                toJSON(message: _123.QueryAppliedPlanResponse): unknown;
                fromPartial(object: Partial<_123.QueryAppliedPlanResponse>): _123.QueryAppliedPlanResponse;
                fromAmino(object: _123.QueryAppliedPlanResponseAmino): _123.QueryAppliedPlanResponse;
                toAmino(message: _123.QueryAppliedPlanResponse): _123.QueryAppliedPlanResponseAmino;
                fromAminoMsg(object: _123.QueryAppliedPlanResponseAminoMsg): _123.QueryAppliedPlanResponse;
                toAminoMsg(message: _123.QueryAppliedPlanResponse): _123.QueryAppliedPlanResponseAminoMsg;
                fromProtoMsg(message: _123.QueryAppliedPlanResponseProtoMsg): _123.QueryAppliedPlanResponse;
                toProto(message: _123.QueryAppliedPlanResponse): Uint8Array;
                toProtoMsg(message: _123.QueryAppliedPlanResponse): _123.QueryAppliedPlanResponseProtoMsg;
            };
            QueryUpgradedConsensusStateRequest: {
                typeUrl: string;
                encode(message: _123.QueryUpgradedConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _123.QueryUpgradedConsensusStateRequest;
                fromJSON(object: any): _123.QueryUpgradedConsensusStateRequest;
                toJSON(message: _123.QueryUpgradedConsensusStateRequest): unknown;
                fromPartial(object: Partial<_123.QueryUpgradedConsensusStateRequest>): _123.QueryUpgradedConsensusStateRequest;
                fromAmino(object: _123.QueryUpgradedConsensusStateRequestAmino): _123.QueryUpgradedConsensusStateRequest;
                toAmino(message: _123.QueryUpgradedConsensusStateRequest): _123.QueryUpgradedConsensusStateRequestAmino;
                fromAminoMsg(object: _123.QueryUpgradedConsensusStateRequestAminoMsg): _123.QueryUpgradedConsensusStateRequest;
                toAminoMsg(message: _123.QueryUpgradedConsensusStateRequest): _123.QueryUpgradedConsensusStateRequestAminoMsg;
                fromProtoMsg(message: _123.QueryUpgradedConsensusStateRequestProtoMsg): _123.QueryUpgradedConsensusStateRequest;
                toProto(message: _123.QueryUpgradedConsensusStateRequest): Uint8Array;
                toProtoMsg(message: _123.QueryUpgradedConsensusStateRequest): _123.QueryUpgradedConsensusStateRequestProtoMsg;
            };
            QueryUpgradedConsensusStateResponse: {
                typeUrl: string;
                encode(message: _123.QueryUpgradedConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _123.QueryUpgradedConsensusStateResponse;
                fromJSON(object: any): _123.QueryUpgradedConsensusStateResponse;
                toJSON(message: _123.QueryUpgradedConsensusStateResponse): unknown;
                fromPartial(object: Partial<_123.QueryUpgradedConsensusStateResponse>): _123.QueryUpgradedConsensusStateResponse;
                fromAmino(object: _123.QueryUpgradedConsensusStateResponseAmino): _123.QueryUpgradedConsensusStateResponse;
                toAmino(message: _123.QueryUpgradedConsensusStateResponse): _123.QueryUpgradedConsensusStateResponseAmino;
                fromAminoMsg(object: _123.QueryUpgradedConsensusStateResponseAminoMsg): _123.QueryUpgradedConsensusStateResponse;
                toAminoMsg(message: _123.QueryUpgradedConsensusStateResponse): _123.QueryUpgradedConsensusStateResponseAminoMsg;
                fromProtoMsg(message: _123.QueryUpgradedConsensusStateResponseProtoMsg): _123.QueryUpgradedConsensusStateResponse;
                toProto(message: _123.QueryUpgradedConsensusStateResponse): Uint8Array;
                toProtoMsg(message: _123.QueryUpgradedConsensusStateResponse): _123.QueryUpgradedConsensusStateResponseProtoMsg;
            };
            QueryModuleVersionsRequest: {
                typeUrl: string;
                encode(message: _123.QueryModuleVersionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _123.QueryModuleVersionsRequest;
                fromJSON(object: any): _123.QueryModuleVersionsRequest;
                toJSON(message: _123.QueryModuleVersionsRequest): unknown;
                fromPartial(object: Partial<_123.QueryModuleVersionsRequest>): _123.QueryModuleVersionsRequest;
                fromAmino(object: _123.QueryModuleVersionsRequestAmino): _123.QueryModuleVersionsRequest;
                toAmino(message: _123.QueryModuleVersionsRequest): _123.QueryModuleVersionsRequestAmino;
                fromAminoMsg(object: _123.QueryModuleVersionsRequestAminoMsg): _123.QueryModuleVersionsRequest;
                toAminoMsg(message: _123.QueryModuleVersionsRequest): _123.QueryModuleVersionsRequestAminoMsg;
                fromProtoMsg(message: _123.QueryModuleVersionsRequestProtoMsg): _123.QueryModuleVersionsRequest;
                toProto(message: _123.QueryModuleVersionsRequest): Uint8Array;
                toProtoMsg(message: _123.QueryModuleVersionsRequest): _123.QueryModuleVersionsRequestProtoMsg;
            };
            QueryModuleVersionsResponse: {
                typeUrl: string;
                encode(message: _123.QueryModuleVersionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _123.QueryModuleVersionsResponse;
                fromJSON(object: any): _123.QueryModuleVersionsResponse;
                toJSON(message: _123.QueryModuleVersionsResponse): unknown;
                fromPartial(object: Partial<_123.QueryModuleVersionsResponse>): _123.QueryModuleVersionsResponse;
                fromAmino(object: _123.QueryModuleVersionsResponseAmino): _123.QueryModuleVersionsResponse;
                toAmino(message: _123.QueryModuleVersionsResponse): _123.QueryModuleVersionsResponseAmino;
                fromAminoMsg(object: _123.QueryModuleVersionsResponseAminoMsg): _123.QueryModuleVersionsResponse;
                toAminoMsg(message: _123.QueryModuleVersionsResponse): _123.QueryModuleVersionsResponseAminoMsg;
                fromProtoMsg(message: _123.QueryModuleVersionsResponseProtoMsg): _123.QueryModuleVersionsResponse;
                toProto(message: _123.QueryModuleVersionsResponse): Uint8Array;
                toProtoMsg(message: _123.QueryModuleVersionsResponse): _123.QueryModuleVersionsResponseProtoMsg;
            };
            QueryAuthorityRequest: {
                typeUrl: string;
                encode(_: _123.QueryAuthorityRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _123.QueryAuthorityRequest;
                fromJSON(_: any): _123.QueryAuthorityRequest;
                toJSON(_: _123.QueryAuthorityRequest): unknown;
                fromPartial(_: Partial<_123.QueryAuthorityRequest>): _123.QueryAuthorityRequest;
                fromAmino(_: _123.QueryAuthorityRequestAmino): _123.QueryAuthorityRequest;
                toAmino(_: _123.QueryAuthorityRequest): _123.QueryAuthorityRequestAmino;
                fromAminoMsg(object: _123.QueryAuthorityRequestAminoMsg): _123.QueryAuthorityRequest;
                toAminoMsg(message: _123.QueryAuthorityRequest): _123.QueryAuthorityRequestAminoMsg;
                fromProtoMsg(message: _123.QueryAuthorityRequestProtoMsg): _123.QueryAuthorityRequest;
                toProto(message: _123.QueryAuthorityRequest): Uint8Array;
                toProtoMsg(message: _123.QueryAuthorityRequest): _123.QueryAuthorityRequestProtoMsg;
            };
            QueryAuthorityResponse: {
                typeUrl: string;
                encode(message: _123.QueryAuthorityResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _123.QueryAuthorityResponse;
                fromJSON(object: any): _123.QueryAuthorityResponse;
                toJSON(message: _123.QueryAuthorityResponse): unknown;
                fromPartial(object: Partial<_123.QueryAuthorityResponse>): _123.QueryAuthorityResponse;
                fromAmino(object: _123.QueryAuthorityResponseAmino): _123.QueryAuthorityResponse;
                toAmino(message: _123.QueryAuthorityResponse): _123.QueryAuthorityResponseAmino;
                fromAminoMsg(object: _123.QueryAuthorityResponseAminoMsg): _123.QueryAuthorityResponse;
                toAminoMsg(message: _123.QueryAuthorityResponse): _123.QueryAuthorityResponseAminoMsg;
                fromProtoMsg(message: _123.QueryAuthorityResponseProtoMsg): _123.QueryAuthorityResponse;
                toProto(message: _123.QueryAuthorityResponse): Uint8Array;
                toProtoMsg(message: _123.QueryAuthorityResponse): _123.QueryAuthorityResponseProtoMsg;
            };
        };
    }
    namespace vesting {
        namespace module {
            const v1: {
                protobufPackage: "cosmos.vesting.module.v1";
                Module: {
                    typeUrl: string;
                    encode(_: _126.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _126.Module;
                    fromJSON(_: any): _126.Module;
                    toJSON(_: _126.Module): unknown;
                    fromPartial(_: Partial<_126.Module>): _126.Module;
                    fromAmino(_: _126.ModuleAmino): _126.Module;
                    toAmino(_: _126.Module): _126.ModuleAmino;
                    fromAminoMsg(object: _126.ModuleAminoMsg): _126.Module;
                    toAminoMsg(message: _126.Module): _126.ModuleAminoMsg;
                    fromProtoMsg(message: _126.ModuleProtoMsg): _126.Module;
                    toProto(message: _126.Module): Uint8Array;
                    toProtoMsg(message: _126.Module): _126.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            Msg: typeof _275.Msg;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _127.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPermanentLockedAccount(value: _127.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPeriodicVestingAccount(value: _127.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _127.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _127.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _127.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _127.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _127.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _127.MsgCreatePeriodicVestingAccount;
                    };
                };
                toJSON: {
                    createVestingAccount(value: _127.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createPermanentLockedAccount(value: _127.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createPeriodicVestingAccount(value: _127.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createVestingAccount(value: any): {
                        typeUrl: string;
                        value: _127.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: any): {
                        typeUrl: string;
                        value: _127.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: any): {
                        typeUrl: string;
                        value: _127.MsgCreatePeriodicVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _127.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _127.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _127.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _127.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _127.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _127.MsgCreatePeriodicVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _127.MsgCreateVestingAccount) => _127.MsgCreateVestingAccountAmino;
                    fromAmino: (object: _127.MsgCreateVestingAccountAmino) => _127.MsgCreateVestingAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount": {
                    aminoType: string;
                    toAmino: (message: _127.MsgCreatePermanentLockedAccount) => _127.MsgCreatePermanentLockedAccountAmino;
                    fromAmino: (object: _127.MsgCreatePermanentLockedAccountAmino) => _127.MsgCreatePermanentLockedAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _127.MsgCreatePeriodicVestingAccount) => _127.MsgCreatePeriodicVestingAccountAmino;
                    fromAmino: (object: _127.MsgCreatePeriodicVestingAccountAmino) => _127.MsgCreatePeriodicVestingAccount;
                };
            };
            protobufPackage: "cosmos.vesting.v1beta1";
            BaseVestingAccount: {
                typeUrl: string;
                encode(message: _128.BaseVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _128.BaseVestingAccount;
                fromJSON(object: any): _128.BaseVestingAccount;
                toJSON(message: _128.BaseVestingAccount): unknown;
                fromPartial(object: Partial<_128.BaseVestingAccount>): _128.BaseVestingAccount;
                fromAmino(object: _128.BaseVestingAccountAmino): _128.BaseVestingAccount;
                toAmino(message: _128.BaseVestingAccount): _128.BaseVestingAccountAmino;
                fromAminoMsg(object: _128.BaseVestingAccountAminoMsg): _128.BaseVestingAccount;
                toAminoMsg(message: _128.BaseVestingAccount): _128.BaseVestingAccountAminoMsg;
                fromProtoMsg(message: _128.BaseVestingAccountProtoMsg): _128.BaseVestingAccount;
                toProto(message: _128.BaseVestingAccount): Uint8Array;
                toProtoMsg(message: _128.BaseVestingAccount): _128.BaseVestingAccountProtoMsg;
            };
            ContinuousVestingAccount: {
                typeUrl: string;
                encode(message: _128.ContinuousVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _128.ContinuousVestingAccount;
                fromJSON(object: any): _128.ContinuousVestingAccount;
                toJSON(message: _128.ContinuousVestingAccount): unknown;
                fromPartial(object: Partial<_128.ContinuousVestingAccount>): _128.ContinuousVestingAccount;
                fromAmino(object: _128.ContinuousVestingAccountAmino): _128.ContinuousVestingAccount;
                toAmino(message: _128.ContinuousVestingAccount): _128.ContinuousVestingAccountAmino;
                fromAminoMsg(object: _128.ContinuousVestingAccountAminoMsg): _128.ContinuousVestingAccount;
                toAminoMsg(message: _128.ContinuousVestingAccount): _128.ContinuousVestingAccountAminoMsg;
                fromProtoMsg(message: _128.ContinuousVestingAccountProtoMsg): _128.ContinuousVestingAccount;
                toProto(message: _128.ContinuousVestingAccount): Uint8Array;
                toProtoMsg(message: _128.ContinuousVestingAccount): _128.ContinuousVestingAccountProtoMsg;
            };
            DelayedVestingAccount: {
                typeUrl: string;
                encode(message: _128.DelayedVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _128.DelayedVestingAccount;
                fromJSON(object: any): _128.DelayedVestingAccount;
                toJSON(message: _128.DelayedVestingAccount): unknown;
                fromPartial(object: Partial<_128.DelayedVestingAccount>): _128.DelayedVestingAccount;
                fromAmino(object: _128.DelayedVestingAccountAmino): _128.DelayedVestingAccount;
                toAmino(message: _128.DelayedVestingAccount): _128.DelayedVestingAccountAmino;
                fromAminoMsg(object: _128.DelayedVestingAccountAminoMsg): _128.DelayedVestingAccount;
                toAminoMsg(message: _128.DelayedVestingAccount): _128.DelayedVestingAccountAminoMsg;
                fromProtoMsg(message: _128.DelayedVestingAccountProtoMsg): _128.DelayedVestingAccount;
                toProto(message: _128.DelayedVestingAccount): Uint8Array;
                toProtoMsg(message: _128.DelayedVestingAccount): _128.DelayedVestingAccountProtoMsg;
            };
            Period: {
                typeUrl: string;
                encode(message: _128.Period, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _128.Period;
                fromJSON(object: any): _128.Period;
                toJSON(message: _128.Period): unknown;
                fromPartial(object: Partial<_128.Period>): _128.Period;
                fromAmino(object: _128.PeriodAmino): _128.Period;
                toAmino(message: _128.Period): _128.PeriodAmino;
                fromAminoMsg(object: _128.PeriodAminoMsg): _128.Period;
                toAminoMsg(message: _128.Period): _128.PeriodAminoMsg;
                fromProtoMsg(message: _128.PeriodProtoMsg): _128.Period;
                toProto(message: _128.Period): Uint8Array;
                toProtoMsg(message: _128.Period): _128.PeriodProtoMsg;
            };
            PeriodicVestingAccount: {
                typeUrl: string;
                encode(message: _128.PeriodicVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _128.PeriodicVestingAccount;
                fromJSON(object: any): _128.PeriodicVestingAccount;
                toJSON(message: _128.PeriodicVestingAccount): unknown;
                fromPartial(object: Partial<_128.PeriodicVestingAccount>): _128.PeriodicVestingAccount;
                fromAmino(object: _128.PeriodicVestingAccountAmino): _128.PeriodicVestingAccount;
                toAmino(message: _128.PeriodicVestingAccount): _128.PeriodicVestingAccountAmino;
                fromAminoMsg(object: _128.PeriodicVestingAccountAminoMsg): _128.PeriodicVestingAccount;
                toAminoMsg(message: _128.PeriodicVestingAccount): _128.PeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _128.PeriodicVestingAccountProtoMsg): _128.PeriodicVestingAccount;
                toProto(message: _128.PeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _128.PeriodicVestingAccount): _128.PeriodicVestingAccountProtoMsg;
            };
            PermanentLockedAccount: {
                typeUrl: string;
                encode(message: _128.PermanentLockedAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _128.PermanentLockedAccount;
                fromJSON(object: any): _128.PermanentLockedAccount;
                toJSON(message: _128.PermanentLockedAccount): unknown;
                fromPartial(object: Partial<_128.PermanentLockedAccount>): _128.PermanentLockedAccount;
                fromAmino(object: _128.PermanentLockedAccountAmino): _128.PermanentLockedAccount;
                toAmino(message: _128.PermanentLockedAccount): _128.PermanentLockedAccountAmino;
                fromAminoMsg(object: _128.PermanentLockedAccountAminoMsg): _128.PermanentLockedAccount;
                toAminoMsg(message: _128.PermanentLockedAccount): _128.PermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _128.PermanentLockedAccountProtoMsg): _128.PermanentLockedAccount;
                toProto(message: _128.PermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _128.PermanentLockedAccount): _128.PermanentLockedAccountProtoMsg;
            };
            MsgCreateVestingAccount: {
                typeUrl: string;
                encode(message: _127.MsgCreateVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _127.MsgCreateVestingAccount;
                fromJSON(object: any): _127.MsgCreateVestingAccount;
                toJSON(message: _127.MsgCreateVestingAccount): unknown;
                fromPartial(object: Partial<_127.MsgCreateVestingAccount>): _127.MsgCreateVestingAccount;
                fromAmino(object: _127.MsgCreateVestingAccountAmino): _127.MsgCreateVestingAccount;
                toAmino(message: _127.MsgCreateVestingAccount): _127.MsgCreateVestingAccountAmino;
                fromAminoMsg(object: _127.MsgCreateVestingAccountAminoMsg): _127.MsgCreateVestingAccount;
                toAminoMsg(message: _127.MsgCreateVestingAccount): _127.MsgCreateVestingAccountAminoMsg;
                fromProtoMsg(message: _127.MsgCreateVestingAccountProtoMsg): _127.MsgCreateVestingAccount;
                toProto(message: _127.MsgCreateVestingAccount): Uint8Array;
                toProtoMsg(message: _127.MsgCreateVestingAccount): _127.MsgCreateVestingAccountProtoMsg;
            };
            MsgCreateVestingAccountResponse: {
                typeUrl: string;
                encode(_: _127.MsgCreateVestingAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _127.MsgCreateVestingAccountResponse;
                fromJSON(_: any): _127.MsgCreateVestingAccountResponse;
                toJSON(_: _127.MsgCreateVestingAccountResponse): unknown;
                fromPartial(_: Partial<_127.MsgCreateVestingAccountResponse>): _127.MsgCreateVestingAccountResponse;
                fromAmino(_: _127.MsgCreateVestingAccountResponseAmino): _127.MsgCreateVestingAccountResponse;
                toAmino(_: _127.MsgCreateVestingAccountResponse): _127.MsgCreateVestingAccountResponseAmino;
                fromAminoMsg(object: _127.MsgCreateVestingAccountResponseAminoMsg): _127.MsgCreateVestingAccountResponse;
                toAminoMsg(message: _127.MsgCreateVestingAccountResponse): _127.MsgCreateVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _127.MsgCreateVestingAccountResponseProtoMsg): _127.MsgCreateVestingAccountResponse;
                toProto(message: _127.MsgCreateVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _127.MsgCreateVestingAccountResponse): _127.MsgCreateVestingAccountResponseProtoMsg;
            };
            MsgCreatePermanentLockedAccount: {
                typeUrl: string;
                encode(message: _127.MsgCreatePermanentLockedAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _127.MsgCreatePermanentLockedAccount;
                fromJSON(object: any): _127.MsgCreatePermanentLockedAccount;
                toJSON(message: _127.MsgCreatePermanentLockedAccount): unknown;
                fromPartial(object: Partial<_127.MsgCreatePermanentLockedAccount>): _127.MsgCreatePermanentLockedAccount;
                fromAmino(object: _127.MsgCreatePermanentLockedAccountAmino): _127.MsgCreatePermanentLockedAccount;
                toAmino(message: _127.MsgCreatePermanentLockedAccount): _127.MsgCreatePermanentLockedAccountAmino;
                fromAminoMsg(object: _127.MsgCreatePermanentLockedAccountAminoMsg): _127.MsgCreatePermanentLockedAccount;
                toAminoMsg(message: _127.MsgCreatePermanentLockedAccount): _127.MsgCreatePermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _127.MsgCreatePermanentLockedAccountProtoMsg): _127.MsgCreatePermanentLockedAccount;
                toProto(message: _127.MsgCreatePermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _127.MsgCreatePermanentLockedAccount): _127.MsgCreatePermanentLockedAccountProtoMsg;
            };
            MsgCreatePermanentLockedAccountResponse: {
                typeUrl: string;
                encode(_: _127.MsgCreatePermanentLockedAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _127.MsgCreatePermanentLockedAccountResponse;
                fromJSON(_: any): _127.MsgCreatePermanentLockedAccountResponse;
                toJSON(_: _127.MsgCreatePermanentLockedAccountResponse): unknown;
                fromPartial(_: Partial<_127.MsgCreatePermanentLockedAccountResponse>): _127.MsgCreatePermanentLockedAccountResponse;
                fromAmino(_: _127.MsgCreatePermanentLockedAccountResponseAmino): _127.MsgCreatePermanentLockedAccountResponse;
                toAmino(_: _127.MsgCreatePermanentLockedAccountResponse): _127.MsgCreatePermanentLockedAccountResponseAmino;
                fromAminoMsg(object: _127.MsgCreatePermanentLockedAccountResponseAminoMsg): _127.MsgCreatePermanentLockedAccountResponse;
                toAminoMsg(message: _127.MsgCreatePermanentLockedAccountResponse): _127.MsgCreatePermanentLockedAccountResponseAminoMsg;
                fromProtoMsg(message: _127.MsgCreatePermanentLockedAccountResponseProtoMsg): _127.MsgCreatePermanentLockedAccountResponse;
                toProto(message: _127.MsgCreatePermanentLockedAccountResponse): Uint8Array;
                toProtoMsg(message: _127.MsgCreatePermanentLockedAccountResponse): _127.MsgCreatePermanentLockedAccountResponseProtoMsg;
            };
            MsgCreatePeriodicVestingAccount: {
                typeUrl: string;
                encode(message: _127.MsgCreatePeriodicVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _127.MsgCreatePeriodicVestingAccount;
                fromJSON(object: any): _127.MsgCreatePeriodicVestingAccount;
                toJSON(message: _127.MsgCreatePeriodicVestingAccount): unknown;
                fromPartial(object: Partial<_127.MsgCreatePeriodicVestingAccount>): _127.MsgCreatePeriodicVestingAccount;
                fromAmino(object: _127.MsgCreatePeriodicVestingAccountAmino): _127.MsgCreatePeriodicVestingAccount;
                toAmino(message: _127.MsgCreatePeriodicVestingAccount): _127.MsgCreatePeriodicVestingAccountAmino;
                fromAminoMsg(object: _127.MsgCreatePeriodicVestingAccountAminoMsg): _127.MsgCreatePeriodicVestingAccount;
                toAminoMsg(message: _127.MsgCreatePeriodicVestingAccount): _127.MsgCreatePeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _127.MsgCreatePeriodicVestingAccountProtoMsg): _127.MsgCreatePeriodicVestingAccount;
                toProto(message: _127.MsgCreatePeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _127.MsgCreatePeriodicVestingAccount): _127.MsgCreatePeriodicVestingAccountProtoMsg;
            };
            MsgCreatePeriodicVestingAccountResponse: {
                typeUrl: string;
                encode(_: _127.MsgCreatePeriodicVestingAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _127.MsgCreatePeriodicVestingAccountResponse;
                fromJSON(_: any): _127.MsgCreatePeriodicVestingAccountResponse;
                toJSON(_: _127.MsgCreatePeriodicVestingAccountResponse): unknown;
                fromPartial(_: Partial<_127.MsgCreatePeriodicVestingAccountResponse>): _127.MsgCreatePeriodicVestingAccountResponse;
                fromAmino(_: _127.MsgCreatePeriodicVestingAccountResponseAmino): _127.MsgCreatePeriodicVestingAccountResponse;
                toAmino(_: _127.MsgCreatePeriodicVestingAccountResponse): _127.MsgCreatePeriodicVestingAccountResponseAmino;
                fromAminoMsg(object: _127.MsgCreatePeriodicVestingAccountResponseAminoMsg): _127.MsgCreatePeriodicVestingAccountResponse;
                toAminoMsg(message: _127.MsgCreatePeriodicVestingAccountResponse): _127.MsgCreatePeriodicVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _127.MsgCreatePeriodicVestingAccountResponseProtoMsg): _127.MsgCreatePeriodicVestingAccountResponse;
                toProto(message: _127.MsgCreatePeriodicVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _127.MsgCreatePeriodicVestingAccountResponse): _127.MsgCreatePeriodicVestingAccountResponseProtoMsg;
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
                    v1beta1: _242.QueryClientImpl;
                };
                authz: {
                    v1beta1: _243.QueryClientImpl;
                };
                bank: {
                    v1beta1: _244.QueryClientImpl;
                };
                base: {
                    node: {
                        v1beta1: _245.ServiceClientImpl;
                    };
                    tendermint: {
                        v1beta1: _246.ServiceClientImpl;
                    };
                };
                circuit: {
                    v1: _247.QueryClientImpl;
                };
                consensus: {
                    v1: _248.QueryClientImpl;
                };
                distribution: {
                    v1beta1: _249.QueryClientImpl;
                };
                feegrant: {
                    v1beta1: _250.QueryClientImpl;
                };
                gov: {
                    v1: _251.QueryClientImpl;
                    v1beta1: _252.QueryClientImpl;
                };
                group: {
                    v1: _253.QueryClientImpl;
                };
                mint: {
                    v1beta1: _254.QueryClientImpl;
                };
                nft: {
                    v1beta1: _255.QueryClientImpl;
                };
                orm: {
                    query: {
                        v1alpha1: _256.QueryClientImpl;
                    };
                };
                params: {
                    v1beta1: _257.QueryClientImpl;
                };
                staking: {
                    v1beta1: _258.QueryClientImpl;
                };
                tx: {
                    v1beta1: _259.ServiceClientImpl;
                };
                upgrade: {
                    v1beta1: _260.QueryClientImpl;
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _224.LCDQueryClient;
                };
                authz: {
                    v1beta1: _225.LCDQueryClient;
                };
                bank: {
                    v1beta1: _226.LCDQueryClient;
                };
                base: {
                    node: {
                        v1beta1: _227.LCDQueryClient;
                    };
                    tendermint: {
                        v1beta1: _228.LCDQueryClient;
                    };
                };
                circuit: {
                    v1: _229.LCDQueryClient;
                };
                consensus: {
                    v1: _230.LCDQueryClient;
                };
                distribution: {
                    v1beta1: _231.LCDQueryClient;
                };
                feegrant: {
                    v1beta1: _232.LCDQueryClient;
                };
                gov: {
                    v1: _233.LCDQueryClient;
                    v1beta1: _234.LCDQueryClient;
                };
                group: {
                    v1: _235.LCDQueryClient;
                };
                mint: {
                    v1beta1: _236.LCDQueryClient;
                };
                nft: {
                    v1beta1: _237.LCDQueryClient;
                };
                params: {
                    v1beta1: _238.LCDQueryClient;
                };
                staking: {
                    v1beta1: _239.LCDQueryClient;
                };
                tx: {
                    v1beta1: _240.LCDQueryClient;
                };
                upgrade: {
                    v1beta1: _241.LCDQueryClient;
                };
            };
        }>;
    };
}

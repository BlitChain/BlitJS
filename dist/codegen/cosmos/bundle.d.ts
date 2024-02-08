import * as _22 from "./app/runtime/v1alpha1/module";
import * as _23 from "./auth/module/v1/module";
import * as _24 from "./auth/v1beta1/auth";
import * as _25 from "./auth/v1beta1/genesis";
import * as _26 from "./auth/v1beta1/query";
import * as _27 from "./auth/v1beta1/tx";
import * as _28 from "./authz/module/v1/module";
import * as _29 from "./authz/v1beta1/authz";
import * as _30 from "./authz/v1beta1/event";
import * as _31 from "./authz/v1beta1/genesis";
import * as _32 from "./authz/v1beta1/query";
import * as _33 from "./authz/v1beta1/tx";
import * as _34 from "./bank/module/v1/module";
import * as _35 from "./bank/v1beta1/authz";
import * as _36 from "./bank/v1beta1/bank";
import * as _37 from "./bank/v1beta1/genesis";
import * as _38 from "./bank/v1beta1/query";
import * as _39 from "./bank/v1beta1/tx";
import * as _40 from "./base/abci/v1beta1/abci";
import * as _41 from "./base/node/v1beta1/query";
import * as _42 from "./base/query/v1beta1/pagination";
import * as _43 from "./base/reflection/v2alpha1/reflection";
import * as _44 from "./base/tendermint/v1beta1/query";
import * as _45 from "./base/tendermint/v1beta1/types";
import * as _46 from "./base/v1beta1/coin";
import * as _47 from "./circuit/module/v1/module";
import * as _48 from "./circuit/v1/query";
import * as _49 from "./circuit/v1/tx";
import * as _50 from "./circuit/v1/types";
import * as _51 from "./consensus/module/v1/module";
import * as _52 from "./consensus/v1/query";
import * as _53 from "./consensus/v1/tx";
import * as _54 from "./crisis/module/v1/module";
import * as _55 from "./crypto/ed25519/keys";
import * as _56 from "./crypto/hd/v1/hd";
import * as _57 from "./crypto/keyring/v1/record";
import * as _58 from "./crypto/multisig/keys";
import * as _59 from "./crypto/secp256k1/keys";
import * as _60 from "./crypto/secp256r1/keys";
import * as _61 from "./distribution/module/v1/module";
import * as _62 from "./distribution/v1beta1/distribution";
import * as _63 from "./distribution/v1beta1/genesis";
import * as _64 from "./distribution/v1beta1/query";
import * as _65 from "./distribution/v1beta1/tx";
import * as _66 from "./evidence/module/v1/module";
import * as _67 from "./feegrant/module/v1/module";
import * as _68 from "./feegrant/v1beta1/feegrant";
import * as _69 from "./feegrant/v1beta1/genesis";
import * as _70 from "./feegrant/v1beta1/query";
import * as _71 from "./feegrant/v1beta1/tx";
import * as _72 from "./genutil/module/v1/module";
import * as _73 from "./gov/module/v1/module";
import * as _74 from "./gov/v1/genesis";
import * as _75 from "./gov/v1/gov";
import * as _76 from "./gov/v1/query";
import * as _77 from "./gov/v1/tx";
import * as _78 from "./gov/v1beta1/genesis";
import * as _79 from "./gov/v1beta1/gov";
import * as _80 from "./gov/v1beta1/query";
import * as _81 from "./gov/v1beta1/tx";
import * as _82 from "./group/module/v1/module";
import * as _83 from "./group/v1/events";
import * as _84 from "./group/v1/genesis";
import * as _85 from "./group/v1/query";
import * as _86 from "./group/v1/tx";
import * as _87 from "./group/v1/types";
import * as _88 from "./ics23/v1/proofs";
import * as _89 from "./mint/module/v1/module";
import * as _90 from "./mint/v1beta1/genesis";
import * as _91 from "./mint/v1beta1/mint";
import * as _92 from "./mint/v1beta1/query";
import * as _93 from "./mint/v1beta1/tx";
import * as _95 from "./nft/module/v1/module";
import * as _96 from "./nft/v1beta1/event";
import * as _97 from "./nft/v1beta1/genesis";
import * as _98 from "./nft/v1beta1/nft";
import * as _99 from "./nft/v1beta1/query";
import * as _100 from "./nft/v1beta1/tx";
import * as _101 from "./orm/module/v1alpha1/module";
import * as _102 from "./orm/query/v1alpha1/query";
import * as _103 from "./params/module/v1/module";
import * as _104 from "./params/v1beta1/params";
import * as _105 from "./params/v1beta1/query";
import * as _107 from "./reflection/v1/reflection";
import * as _108 from "./slashing/module/v1/module";
import * as _109 from "./staking/module/v1/module";
import * as _110 from "./staking/v1beta1/authz";
import * as _111 from "./staking/v1beta1/genesis";
import * as _112 from "./staking/v1beta1/query";
import * as _113 from "./staking/v1beta1/staking";
import * as _114 from "./staking/v1beta1/tx";
import * as _115 from "./store/internal/kv/v1beta1/kv";
import * as _116 from "./store/snapshots/v1/snapshot";
import * as _117 from "./store/streaming/abci/grpc";
import * as _118 from "./store/v1beta1/commit_info";
import * as _119 from "./store/v1beta1/listening";
import * as _120 from "./tx/config/v1/config";
import * as _121 from "./tx/signing/v1beta1/signing";
import * as _122 from "./tx/v1beta1/service";
import * as _123 from "./tx/v1beta1/tx";
import * as _124 from "./upgrade/module/v1/module";
import * as _125 from "./upgrade/v1beta1/query";
import * as _126 from "./upgrade/v1beta1/tx";
import * as _127 from "./upgrade/v1beta1/upgrade";
import * as _128 from "./vesting/module/v1/module";
import * as _129 from "./vesting/v1beta1/tx";
import * as _130 from "./vesting/v1beta1/vesting";
import * as _226 from "./auth/v1beta1/query.lcd";
import * as _227 from "./authz/v1beta1/query.lcd";
import * as _228 from "./bank/v1beta1/query.lcd";
import * as _229 from "./base/node/v1beta1/query.lcd";
import * as _230 from "./base/tendermint/v1beta1/query.lcd";
import * as _231 from "./circuit/v1/query.lcd";
import * as _232 from "./consensus/v1/query.lcd";
import * as _233 from "./distribution/v1beta1/query.lcd";
import * as _234 from "./feegrant/v1beta1/query.lcd";
import * as _235 from "./gov/v1/query.lcd";
import * as _236 from "./gov/v1beta1/query.lcd";
import * as _237 from "./group/v1/query.lcd";
import * as _238 from "./mint/v1beta1/query.lcd";
import * as _239 from "./nft/v1beta1/query.lcd";
import * as _240 from "./params/v1beta1/query.lcd";
import * as _241 from "./staking/v1beta1/query.lcd";
import * as _242 from "./tx/v1beta1/service.lcd";
import * as _243 from "./upgrade/v1beta1/query.lcd";
import * as _244 from "./auth/v1beta1/query.rpc.Query";
import * as _245 from "./authz/v1beta1/query.rpc.Query";
import * as _246 from "./bank/v1beta1/query.rpc.Query";
import * as _247 from "./base/node/v1beta1/query.rpc.Service";
import * as _248 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _249 from "./circuit/v1/query.rpc.Query";
import * as _250 from "./consensus/v1/query.rpc.Query";
import * as _251 from "./distribution/v1beta1/query.rpc.Query";
import * as _252 from "./feegrant/v1beta1/query.rpc.Query";
import * as _253 from "./gov/v1/query.rpc.Query";
import * as _254 from "./gov/v1beta1/query.rpc.Query";
import * as _255 from "./group/v1/query.rpc.Query";
import * as _256 from "./mint/v1beta1/query.rpc.Query";
import * as _257 from "./nft/v1beta1/query.rpc.Query";
import * as _258 from "./orm/query/v1alpha1/query.rpc.Query";
import * as _259 from "./params/v1beta1/query.rpc.Query";
import * as _260 from "./staking/v1beta1/query.rpc.Query";
import * as _261 from "./tx/v1beta1/service.rpc.Service";
import * as _262 from "./upgrade/v1beta1/query.rpc.Query";
import * as _263 from "./auth/v1beta1/tx.rpc.msg";
import * as _264 from "./authz/v1beta1/tx.rpc.msg";
import * as _265 from "./bank/v1beta1/tx.rpc.msg";
import * as _266 from "./circuit/v1/tx.rpc.msg";
import * as _267 from "./consensus/v1/tx.rpc.msg";
import * as _268 from "./distribution/v1beta1/tx.rpc.msg";
import * as _269 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _270 from "./gov/v1/tx.rpc.msg";
import * as _271 from "./gov/v1beta1/tx.rpc.msg";
import * as _272 from "./group/v1/tx.rpc.msg";
import * as _273 from "./mint/v1beta1/tx.rpc.msg";
import * as _274 from "./nft/v1beta1/tx.rpc.msg";
import * as _275 from "./staking/v1beta1/tx.rpc.msg";
import * as _276 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _277 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace app {
        namespace runtime {
            const v1alpha1: {
                protobufPackage: "cosmos.app.runtime.v1alpha1";
                Module: {
                    typeUrl: string;
                    encode(message: _22.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _22.Module;
                    fromJSON(object: any): _22.Module;
                    toJSON(message: _22.Module): unknown;
                    fromPartial(object: Partial<_22.Module>): _22.Module;
                    fromAmino(object: _22.ModuleAmino): _22.Module;
                    toAmino(message: _22.Module): _22.ModuleAmino;
                    fromAminoMsg(object: _22.ModuleAminoMsg): _22.Module;
                    toAminoMsg(message: _22.Module): _22.ModuleAminoMsg;
                    fromProtoMsg(message: _22.ModuleProtoMsg): _22.Module;
                    toProto(message: _22.Module): Uint8Array;
                    toProtoMsg(message: _22.Module): _22.ModuleProtoMsg;
                };
                StoreKeyConfig: {
                    typeUrl: string;
                    encode(message: _22.StoreKeyConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _22.StoreKeyConfig;
                    fromJSON(object: any): _22.StoreKeyConfig;
                    toJSON(message: _22.StoreKeyConfig): unknown;
                    fromPartial(object: Partial<_22.StoreKeyConfig>): _22.StoreKeyConfig;
                    fromAmino(object: _22.StoreKeyConfigAmino): _22.StoreKeyConfig;
                    toAmino(message: _22.StoreKeyConfig): _22.StoreKeyConfigAmino;
                    fromAminoMsg(object: _22.StoreKeyConfigAminoMsg): _22.StoreKeyConfig;
                    toAminoMsg(message: _22.StoreKeyConfig): _22.StoreKeyConfigAminoMsg;
                    fromProtoMsg(message: _22.StoreKeyConfigProtoMsg): _22.StoreKeyConfig;
                    toProto(message: _22.StoreKeyConfig): Uint8Array;
                    toProtoMsg(message: _22.StoreKeyConfig): _22.StoreKeyConfigProtoMsg;
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
                    encode(message: _23.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _23.Module;
                    fromJSON(object: any): _23.Module;
                    toJSON(message: _23.Module): unknown;
                    fromPartial(object: Partial<_23.Module>): _23.Module;
                    fromAmino(object: _23.ModuleAmino): _23.Module;
                    toAmino(message: _23.Module): _23.ModuleAmino;
                    fromAminoMsg(object: _23.ModuleAminoMsg): _23.Module;
                    toAminoMsg(message: _23.Module): _23.ModuleAminoMsg;
                    fromProtoMsg(message: _23.ModuleProtoMsg): _23.Module;
                    toProto(message: _23.Module): Uint8Array;
                    toProtoMsg(message: _23.Module): _23.ModuleProtoMsg;
                };
                ModuleAccountPermission: {
                    typeUrl: string;
                    encode(message: _23.ModuleAccountPermission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _23.ModuleAccountPermission;
                    fromJSON(object: any): _23.ModuleAccountPermission;
                    toJSON(message: _23.ModuleAccountPermission): unknown;
                    fromPartial(object: Partial<_23.ModuleAccountPermission>): _23.ModuleAccountPermission;
                    fromAmino(object: _23.ModuleAccountPermissionAmino): _23.ModuleAccountPermission;
                    toAmino(message: _23.ModuleAccountPermission): _23.ModuleAccountPermissionAmino;
                    fromAminoMsg(object: _23.ModuleAccountPermissionAminoMsg): _23.ModuleAccountPermission;
                    toAminoMsg(message: _23.ModuleAccountPermission): _23.ModuleAccountPermissionAminoMsg;
                    fromProtoMsg(message: _23.ModuleAccountPermissionProtoMsg): _23.ModuleAccountPermission;
                    toProto(message: _23.ModuleAccountPermission): Uint8Array;
                    toProtoMsg(message: _23.ModuleAccountPermission): _23.ModuleAccountPermissionProtoMsg;
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
                    updateParams(value: _27.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    updateParams(value: _27.MsgUpdateParams): {
                        typeUrl: string;
                        value: _27.MsgUpdateParams;
                    };
                };
                toJSON: {
                    updateParams(value: _27.MsgUpdateParams): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _27.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    updateParams(value: _27.MsgUpdateParams): {
                        typeUrl: string;
                        value: _27.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.auth.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _27.MsgUpdateParams) => _27.MsgUpdateParamsAmino;
                    fromAmino: (object: _27.MsgUpdateParamsAmino) => _27.MsgUpdateParams;
                };
            };
            protobufPackage: "cosmos.auth.v1beta1";
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _27.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _27.MsgUpdateParams;
                fromJSON(object: any): _27.MsgUpdateParams;
                toJSON(message: _27.MsgUpdateParams): unknown;
                fromPartial(object: Partial<_27.MsgUpdateParams>): _27.MsgUpdateParams;
                fromAmino(object: _27.MsgUpdateParamsAmino): _27.MsgUpdateParams;
                toAmino(message: _27.MsgUpdateParams): _27.MsgUpdateParamsAmino;
                fromAminoMsg(object: _27.MsgUpdateParamsAminoMsg): _27.MsgUpdateParams;
                toAminoMsg(message: _27.MsgUpdateParams): _27.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _27.MsgUpdateParamsProtoMsg): _27.MsgUpdateParams;
                toProto(message: _27.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _27.MsgUpdateParams): _27.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _27.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _27.MsgUpdateParamsResponse;
                fromJSON(_: any): _27.MsgUpdateParamsResponse;
                toJSON(_: _27.MsgUpdateParamsResponse): unknown;
                fromPartial(_: Partial<_27.MsgUpdateParamsResponse>): _27.MsgUpdateParamsResponse;
                fromAmino(_: _27.MsgUpdateParamsResponseAmino): _27.MsgUpdateParamsResponse;
                toAmino(_: _27.MsgUpdateParamsResponse): _27.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _27.MsgUpdateParamsResponseAminoMsg): _27.MsgUpdateParamsResponse;
                toAminoMsg(message: _27.MsgUpdateParamsResponse): _27.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _27.MsgUpdateParamsResponseProtoMsg): _27.MsgUpdateParamsResponse;
                toProto(message: _27.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _27.MsgUpdateParamsResponse): _27.MsgUpdateParamsResponseProtoMsg;
            };
            QueryAccountsRequest: {
                typeUrl: string;
                encode(message: _26.QueryAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _26.QueryAccountsRequest;
                fromJSON(object: any): _26.QueryAccountsRequest;
                toJSON(message: _26.QueryAccountsRequest): unknown;
                fromPartial(object: Partial<_26.QueryAccountsRequest>): _26.QueryAccountsRequest;
                fromAmino(object: _26.QueryAccountsRequestAmino): _26.QueryAccountsRequest;
                toAmino(message: _26.QueryAccountsRequest): _26.QueryAccountsRequestAmino;
                fromAminoMsg(object: _26.QueryAccountsRequestAminoMsg): _26.QueryAccountsRequest;
                toAminoMsg(message: _26.QueryAccountsRequest): _26.QueryAccountsRequestAminoMsg;
                fromProtoMsg(message: _26.QueryAccountsRequestProtoMsg): _26.QueryAccountsRequest;
                toProto(message: _26.QueryAccountsRequest): Uint8Array;
                toProtoMsg(message: _26.QueryAccountsRequest): _26.QueryAccountsRequestProtoMsg;
            };
            QueryAccountsResponse: {
                typeUrl: string;
                encode(message: _26.QueryAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _26.QueryAccountsResponse;
                fromJSON(object: any): _26.QueryAccountsResponse;
                toJSON(message: _26.QueryAccountsResponse): unknown;
                fromPartial(object: Partial<_26.QueryAccountsResponse>): _26.QueryAccountsResponse;
                fromAmino(object: _26.QueryAccountsResponseAmino): _26.QueryAccountsResponse;
                toAmino(message: _26.QueryAccountsResponse): _26.QueryAccountsResponseAmino;
                fromAminoMsg(object: _26.QueryAccountsResponseAminoMsg): _26.QueryAccountsResponse;
                toAminoMsg(message: _26.QueryAccountsResponse): _26.QueryAccountsResponseAminoMsg;
                fromProtoMsg(message: _26.QueryAccountsResponseProtoMsg): _26.QueryAccountsResponse;
                toProto(message: _26.QueryAccountsResponse): Uint8Array;
                toProtoMsg(message: _26.QueryAccountsResponse): _26.QueryAccountsResponseProtoMsg;
            };
            QueryAccountRequest: {
                typeUrl: string;
                encode(message: _26.QueryAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _26.QueryAccountRequest;
                fromJSON(object: any): _26.QueryAccountRequest;
                toJSON(message: _26.QueryAccountRequest): unknown;
                fromPartial(object: Partial<_26.QueryAccountRequest>): _26.QueryAccountRequest;
                fromAmino(object: _26.QueryAccountRequestAmino): _26.QueryAccountRequest;
                toAmino(message: _26.QueryAccountRequest): _26.QueryAccountRequestAmino;
                fromAminoMsg(object: _26.QueryAccountRequestAminoMsg): _26.QueryAccountRequest;
                toAminoMsg(message: _26.QueryAccountRequest): _26.QueryAccountRequestAminoMsg;
                fromProtoMsg(message: _26.QueryAccountRequestProtoMsg): _26.QueryAccountRequest;
                toProto(message: _26.QueryAccountRequest): Uint8Array;
                toProtoMsg(message: _26.QueryAccountRequest): _26.QueryAccountRequestProtoMsg;
            };
            QueryAccountResponse: {
                typeUrl: string;
                encode(message: _26.QueryAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _26.QueryAccountResponse;
                fromJSON(object: any): _26.QueryAccountResponse;
                toJSON(message: _26.QueryAccountResponse): unknown;
                fromPartial(object: Partial<_26.QueryAccountResponse>): _26.QueryAccountResponse;
                fromAmino(object: _26.QueryAccountResponseAmino): _26.QueryAccountResponse;
                toAmino(message: _26.QueryAccountResponse): _26.QueryAccountResponseAmino;
                fromAminoMsg(object: _26.QueryAccountResponseAminoMsg): _26.QueryAccountResponse;
                toAminoMsg(message: _26.QueryAccountResponse): _26.QueryAccountResponseAminoMsg;
                fromProtoMsg(message: _26.QueryAccountResponseProtoMsg): _26.QueryAccountResponse;
                toProto(message: _26.QueryAccountResponse): Uint8Array;
                toProtoMsg(message: _26.QueryAccountResponse): _26.QueryAccountResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _26.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _26.QueryParamsRequest;
                fromJSON(_: any): _26.QueryParamsRequest;
                toJSON(_: _26.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_26.QueryParamsRequest>): _26.QueryParamsRequest;
                fromAmino(_: _26.QueryParamsRequestAmino): _26.QueryParamsRequest;
                toAmino(_: _26.QueryParamsRequest): _26.QueryParamsRequestAmino;
                fromAminoMsg(object: _26.QueryParamsRequestAminoMsg): _26.QueryParamsRequest;
                toAminoMsg(message: _26.QueryParamsRequest): _26.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _26.QueryParamsRequestProtoMsg): _26.QueryParamsRequest;
                toProto(message: _26.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _26.QueryParamsRequest): _26.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _26.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _26.QueryParamsResponse;
                fromJSON(object: any): _26.QueryParamsResponse;
                toJSON(message: _26.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_26.QueryParamsResponse>): _26.QueryParamsResponse;
                fromAmino(object: _26.QueryParamsResponseAmino): _26.QueryParamsResponse;
                toAmino(message: _26.QueryParamsResponse): _26.QueryParamsResponseAmino;
                fromAminoMsg(object: _26.QueryParamsResponseAminoMsg): _26.QueryParamsResponse;
                toAminoMsg(message: _26.QueryParamsResponse): _26.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _26.QueryParamsResponseProtoMsg): _26.QueryParamsResponse;
                toProto(message: _26.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _26.QueryParamsResponse): _26.QueryParamsResponseProtoMsg;
            };
            QueryModuleAccountsRequest: {
                typeUrl: string;
                encode(_: _26.QueryModuleAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _26.QueryModuleAccountsRequest;
                fromJSON(_: any): _26.QueryModuleAccountsRequest;
                toJSON(_: _26.QueryModuleAccountsRequest): unknown;
                fromPartial(_: Partial<_26.QueryModuleAccountsRequest>): _26.QueryModuleAccountsRequest;
                fromAmino(_: _26.QueryModuleAccountsRequestAmino): _26.QueryModuleAccountsRequest;
                toAmino(_: _26.QueryModuleAccountsRequest): _26.QueryModuleAccountsRequestAmino;
                fromAminoMsg(object: _26.QueryModuleAccountsRequestAminoMsg): _26.QueryModuleAccountsRequest;
                toAminoMsg(message: _26.QueryModuleAccountsRequest): _26.QueryModuleAccountsRequestAminoMsg;
                fromProtoMsg(message: _26.QueryModuleAccountsRequestProtoMsg): _26.QueryModuleAccountsRequest;
                toProto(message: _26.QueryModuleAccountsRequest): Uint8Array;
                toProtoMsg(message: _26.QueryModuleAccountsRequest): _26.QueryModuleAccountsRequestProtoMsg;
            };
            QueryModuleAccountsResponse: {
                typeUrl: string;
                encode(message: _26.QueryModuleAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _26.QueryModuleAccountsResponse;
                fromJSON(object: any): _26.QueryModuleAccountsResponse;
                toJSON(message: _26.QueryModuleAccountsResponse): unknown;
                fromPartial(object: Partial<_26.QueryModuleAccountsResponse>): _26.QueryModuleAccountsResponse;
                fromAmino(object: _26.QueryModuleAccountsResponseAmino): _26.QueryModuleAccountsResponse;
                toAmino(message: _26.QueryModuleAccountsResponse): _26.QueryModuleAccountsResponseAmino;
                fromAminoMsg(object: _26.QueryModuleAccountsResponseAminoMsg): _26.QueryModuleAccountsResponse;
                toAminoMsg(message: _26.QueryModuleAccountsResponse): _26.QueryModuleAccountsResponseAminoMsg;
                fromProtoMsg(message: _26.QueryModuleAccountsResponseProtoMsg): _26.QueryModuleAccountsResponse;
                toProto(message: _26.QueryModuleAccountsResponse): Uint8Array;
                toProtoMsg(message: _26.QueryModuleAccountsResponse): _26.QueryModuleAccountsResponseProtoMsg;
            };
            QueryModuleAccountByNameRequest: {
                typeUrl: string;
                encode(message: _26.QueryModuleAccountByNameRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _26.QueryModuleAccountByNameRequest;
                fromJSON(object: any): _26.QueryModuleAccountByNameRequest;
                toJSON(message: _26.QueryModuleAccountByNameRequest): unknown;
                fromPartial(object: Partial<_26.QueryModuleAccountByNameRequest>): _26.QueryModuleAccountByNameRequest;
                fromAmino(object: _26.QueryModuleAccountByNameRequestAmino): _26.QueryModuleAccountByNameRequest;
                toAmino(message: _26.QueryModuleAccountByNameRequest): _26.QueryModuleAccountByNameRequestAmino;
                fromAminoMsg(object: _26.QueryModuleAccountByNameRequestAminoMsg): _26.QueryModuleAccountByNameRequest;
                toAminoMsg(message: _26.QueryModuleAccountByNameRequest): _26.QueryModuleAccountByNameRequestAminoMsg;
                fromProtoMsg(message: _26.QueryModuleAccountByNameRequestProtoMsg): _26.QueryModuleAccountByNameRequest;
                toProto(message: _26.QueryModuleAccountByNameRequest): Uint8Array;
                toProtoMsg(message: _26.QueryModuleAccountByNameRequest): _26.QueryModuleAccountByNameRequestProtoMsg;
            };
            QueryModuleAccountByNameResponse: {
                typeUrl: string;
                encode(message: _26.QueryModuleAccountByNameResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _26.QueryModuleAccountByNameResponse;
                fromJSON(object: any): _26.QueryModuleAccountByNameResponse;
                toJSON(message: _26.QueryModuleAccountByNameResponse): unknown;
                fromPartial(object: Partial<_26.QueryModuleAccountByNameResponse>): _26.QueryModuleAccountByNameResponse;
                fromAmino(object: _26.QueryModuleAccountByNameResponseAmino): _26.QueryModuleAccountByNameResponse;
                toAmino(message: _26.QueryModuleAccountByNameResponse): _26.QueryModuleAccountByNameResponseAmino;
                fromAminoMsg(object: _26.QueryModuleAccountByNameResponseAminoMsg): _26.QueryModuleAccountByNameResponse;
                toAminoMsg(message: _26.QueryModuleAccountByNameResponse): _26.QueryModuleAccountByNameResponseAminoMsg;
                fromProtoMsg(message: _26.QueryModuleAccountByNameResponseProtoMsg): _26.QueryModuleAccountByNameResponse;
                toProto(message: _26.QueryModuleAccountByNameResponse): Uint8Array;
                toProtoMsg(message: _26.QueryModuleAccountByNameResponse): _26.QueryModuleAccountByNameResponseProtoMsg;
            };
            Bech32PrefixRequest: {
                typeUrl: string;
                encode(_: _26.Bech32PrefixRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _26.Bech32PrefixRequest;
                fromJSON(_: any): _26.Bech32PrefixRequest;
                toJSON(_: _26.Bech32PrefixRequest): unknown;
                fromPartial(_: Partial<_26.Bech32PrefixRequest>): _26.Bech32PrefixRequest;
                fromAmino(_: _26.Bech32PrefixRequestAmino): _26.Bech32PrefixRequest;
                toAmino(_: _26.Bech32PrefixRequest): _26.Bech32PrefixRequestAmino;
                fromAminoMsg(object: _26.Bech32PrefixRequestAminoMsg): _26.Bech32PrefixRequest;
                toAminoMsg(message: _26.Bech32PrefixRequest): _26.Bech32PrefixRequestAminoMsg;
                fromProtoMsg(message: _26.Bech32PrefixRequestProtoMsg): _26.Bech32PrefixRequest;
                toProto(message: _26.Bech32PrefixRequest): Uint8Array;
                toProtoMsg(message: _26.Bech32PrefixRequest): _26.Bech32PrefixRequestProtoMsg;
            };
            Bech32PrefixResponse: {
                typeUrl: string;
                encode(message: _26.Bech32PrefixResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _26.Bech32PrefixResponse;
                fromJSON(object: any): _26.Bech32PrefixResponse;
                toJSON(message: _26.Bech32PrefixResponse): unknown;
                fromPartial(object: Partial<_26.Bech32PrefixResponse>): _26.Bech32PrefixResponse;
                fromAmino(object: _26.Bech32PrefixResponseAmino): _26.Bech32PrefixResponse;
                toAmino(message: _26.Bech32PrefixResponse): _26.Bech32PrefixResponseAmino;
                fromAminoMsg(object: _26.Bech32PrefixResponseAminoMsg): _26.Bech32PrefixResponse;
                toAminoMsg(message: _26.Bech32PrefixResponse): _26.Bech32PrefixResponseAminoMsg;
                fromProtoMsg(message: _26.Bech32PrefixResponseProtoMsg): _26.Bech32PrefixResponse;
                toProto(message: _26.Bech32PrefixResponse): Uint8Array;
                toProtoMsg(message: _26.Bech32PrefixResponse): _26.Bech32PrefixResponseProtoMsg;
            };
            AddressBytesToStringRequest: {
                typeUrl: string;
                encode(message: _26.AddressBytesToStringRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _26.AddressBytesToStringRequest;
                fromJSON(object: any): _26.AddressBytesToStringRequest;
                toJSON(message: _26.AddressBytesToStringRequest): unknown;
                fromPartial(object: Partial<_26.AddressBytesToStringRequest>): _26.AddressBytesToStringRequest;
                fromAmino(object: _26.AddressBytesToStringRequestAmino): _26.AddressBytesToStringRequest;
                toAmino(message: _26.AddressBytesToStringRequest): _26.AddressBytesToStringRequestAmino;
                fromAminoMsg(object: _26.AddressBytesToStringRequestAminoMsg): _26.AddressBytesToStringRequest;
                toAminoMsg(message: _26.AddressBytesToStringRequest): _26.AddressBytesToStringRequestAminoMsg;
                fromProtoMsg(message: _26.AddressBytesToStringRequestProtoMsg): _26.AddressBytesToStringRequest;
                toProto(message: _26.AddressBytesToStringRequest): Uint8Array;
                toProtoMsg(message: _26.AddressBytesToStringRequest): _26.AddressBytesToStringRequestProtoMsg;
            };
            AddressBytesToStringResponse: {
                typeUrl: string;
                encode(message: _26.AddressBytesToStringResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _26.AddressBytesToStringResponse;
                fromJSON(object: any): _26.AddressBytesToStringResponse;
                toJSON(message: _26.AddressBytesToStringResponse): unknown;
                fromPartial(object: Partial<_26.AddressBytesToStringResponse>): _26.AddressBytesToStringResponse;
                fromAmino(object: _26.AddressBytesToStringResponseAmino): _26.AddressBytesToStringResponse;
                toAmino(message: _26.AddressBytesToStringResponse): _26.AddressBytesToStringResponseAmino;
                fromAminoMsg(object: _26.AddressBytesToStringResponseAminoMsg): _26.AddressBytesToStringResponse;
                toAminoMsg(message: _26.AddressBytesToStringResponse): _26.AddressBytesToStringResponseAminoMsg;
                fromProtoMsg(message: _26.AddressBytesToStringResponseProtoMsg): _26.AddressBytesToStringResponse;
                toProto(message: _26.AddressBytesToStringResponse): Uint8Array;
                toProtoMsg(message: _26.AddressBytesToStringResponse): _26.AddressBytesToStringResponseProtoMsg;
            };
            AddressStringToBytesRequest: {
                typeUrl: string;
                encode(message: _26.AddressStringToBytesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _26.AddressStringToBytesRequest;
                fromJSON(object: any): _26.AddressStringToBytesRequest;
                toJSON(message: _26.AddressStringToBytesRequest): unknown;
                fromPartial(object: Partial<_26.AddressStringToBytesRequest>): _26.AddressStringToBytesRequest;
                fromAmino(object: _26.AddressStringToBytesRequestAmino): _26.AddressStringToBytesRequest;
                toAmino(message: _26.AddressStringToBytesRequest): _26.AddressStringToBytesRequestAmino;
                fromAminoMsg(object: _26.AddressStringToBytesRequestAminoMsg): _26.AddressStringToBytesRequest;
                toAminoMsg(message: _26.AddressStringToBytesRequest): _26.AddressStringToBytesRequestAminoMsg;
                fromProtoMsg(message: _26.AddressStringToBytesRequestProtoMsg): _26.AddressStringToBytesRequest;
                toProto(message: _26.AddressStringToBytesRequest): Uint8Array;
                toProtoMsg(message: _26.AddressStringToBytesRequest): _26.AddressStringToBytesRequestProtoMsg;
            };
            AddressStringToBytesResponse: {
                typeUrl: string;
                encode(message: _26.AddressStringToBytesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _26.AddressStringToBytesResponse;
                fromJSON(object: any): _26.AddressStringToBytesResponse;
                toJSON(message: _26.AddressStringToBytesResponse): unknown;
                fromPartial(object: Partial<_26.AddressStringToBytesResponse>): _26.AddressStringToBytesResponse;
                fromAmino(object: _26.AddressStringToBytesResponseAmino): _26.AddressStringToBytesResponse;
                toAmino(message: _26.AddressStringToBytesResponse): _26.AddressStringToBytesResponseAmino;
                fromAminoMsg(object: _26.AddressStringToBytesResponseAminoMsg): _26.AddressStringToBytesResponse;
                toAminoMsg(message: _26.AddressStringToBytesResponse): _26.AddressStringToBytesResponseAminoMsg;
                fromProtoMsg(message: _26.AddressStringToBytesResponseProtoMsg): _26.AddressStringToBytesResponse;
                toProto(message: _26.AddressStringToBytesResponse): Uint8Array;
                toProtoMsg(message: _26.AddressStringToBytesResponse): _26.AddressStringToBytesResponseProtoMsg;
            };
            QueryAccountAddressByIDRequest: {
                typeUrl: string;
                encode(message: _26.QueryAccountAddressByIDRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _26.QueryAccountAddressByIDRequest;
                fromJSON(object: any): _26.QueryAccountAddressByIDRequest;
                toJSON(message: _26.QueryAccountAddressByIDRequest): unknown;
                fromPartial(object: Partial<_26.QueryAccountAddressByIDRequest>): _26.QueryAccountAddressByIDRequest;
                fromAmino(object: _26.QueryAccountAddressByIDRequestAmino): _26.QueryAccountAddressByIDRequest;
                toAmino(message: _26.QueryAccountAddressByIDRequest): _26.QueryAccountAddressByIDRequestAmino;
                fromAminoMsg(object: _26.QueryAccountAddressByIDRequestAminoMsg): _26.QueryAccountAddressByIDRequest;
                toAminoMsg(message: _26.QueryAccountAddressByIDRequest): _26.QueryAccountAddressByIDRequestAminoMsg;
                fromProtoMsg(message: _26.QueryAccountAddressByIDRequestProtoMsg): _26.QueryAccountAddressByIDRequest;
                toProto(message: _26.QueryAccountAddressByIDRequest): Uint8Array;
                toProtoMsg(message: _26.QueryAccountAddressByIDRequest): _26.QueryAccountAddressByIDRequestProtoMsg;
            };
            QueryAccountAddressByIDResponse: {
                typeUrl: string;
                encode(message: _26.QueryAccountAddressByIDResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _26.QueryAccountAddressByIDResponse;
                fromJSON(object: any): _26.QueryAccountAddressByIDResponse;
                toJSON(message: _26.QueryAccountAddressByIDResponse): unknown;
                fromPartial(object: Partial<_26.QueryAccountAddressByIDResponse>): _26.QueryAccountAddressByIDResponse;
                fromAmino(object: _26.QueryAccountAddressByIDResponseAmino): _26.QueryAccountAddressByIDResponse;
                toAmino(message: _26.QueryAccountAddressByIDResponse): _26.QueryAccountAddressByIDResponseAmino;
                fromAminoMsg(object: _26.QueryAccountAddressByIDResponseAminoMsg): _26.QueryAccountAddressByIDResponse;
                toAminoMsg(message: _26.QueryAccountAddressByIDResponse): _26.QueryAccountAddressByIDResponseAminoMsg;
                fromProtoMsg(message: _26.QueryAccountAddressByIDResponseProtoMsg): _26.QueryAccountAddressByIDResponse;
                toProto(message: _26.QueryAccountAddressByIDResponse): Uint8Array;
                toProtoMsg(message: _26.QueryAccountAddressByIDResponse): _26.QueryAccountAddressByIDResponseProtoMsg;
            };
            QueryAccountInfoRequest: {
                typeUrl: string;
                encode(message: _26.QueryAccountInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _26.QueryAccountInfoRequest;
                fromJSON(object: any): _26.QueryAccountInfoRequest;
                toJSON(message: _26.QueryAccountInfoRequest): unknown;
                fromPartial(object: Partial<_26.QueryAccountInfoRequest>): _26.QueryAccountInfoRequest;
                fromAmino(object: _26.QueryAccountInfoRequestAmino): _26.QueryAccountInfoRequest;
                toAmino(message: _26.QueryAccountInfoRequest): _26.QueryAccountInfoRequestAmino;
                fromAminoMsg(object: _26.QueryAccountInfoRequestAminoMsg): _26.QueryAccountInfoRequest;
                toAminoMsg(message: _26.QueryAccountInfoRequest): _26.QueryAccountInfoRequestAminoMsg;
                fromProtoMsg(message: _26.QueryAccountInfoRequestProtoMsg): _26.QueryAccountInfoRequest;
                toProto(message: _26.QueryAccountInfoRequest): Uint8Array;
                toProtoMsg(message: _26.QueryAccountInfoRequest): _26.QueryAccountInfoRequestProtoMsg;
            };
            QueryAccountInfoResponse: {
                typeUrl: string;
                encode(message: _26.QueryAccountInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _26.QueryAccountInfoResponse;
                fromJSON(object: any): _26.QueryAccountInfoResponse;
                toJSON(message: _26.QueryAccountInfoResponse): unknown;
                fromPartial(object: Partial<_26.QueryAccountInfoResponse>): _26.QueryAccountInfoResponse;
                fromAmino(object: _26.QueryAccountInfoResponseAmino): _26.QueryAccountInfoResponse;
                toAmino(message: _26.QueryAccountInfoResponse): _26.QueryAccountInfoResponseAmino;
                fromAminoMsg(object: _26.QueryAccountInfoResponseAminoMsg): _26.QueryAccountInfoResponse;
                toAminoMsg(message: _26.QueryAccountInfoResponse): _26.QueryAccountInfoResponseAminoMsg;
                fromProtoMsg(message: _26.QueryAccountInfoResponseProtoMsg): _26.QueryAccountInfoResponse;
                toProto(message: _26.QueryAccountInfoResponse): Uint8Array;
                toProtoMsg(message: _26.QueryAccountInfoResponse): _26.QueryAccountInfoResponseProtoMsg;
            };
            Cosmos_authv1beta1AccountI_InterfaceDecoder: (input: import("..").BinaryReader | Uint8Array) => import("../google/protobuf/any").Any | _24.BaseAccount;
            Cosmos_authv1beta1AccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_authv1beta1AccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            Cosmos_authv1beta1ModuleAccountI_InterfaceDecoder: (input: import("..").BinaryReader | Uint8Array) => import("../google/protobuf/any").Any | _24.ModuleAccount;
            Cosmos_authv1beta1ModuleAccountI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_authv1beta1ModuleAccountI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            GenesisState: {
                typeUrl: string;
                encode(message: _25.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _25.GenesisState;
                fromJSON(object: any): _25.GenesisState;
                toJSON(message: _25.GenesisState): unknown;
                fromPartial(object: Partial<_25.GenesisState>): _25.GenesisState;
                fromAmino(object: _25.GenesisStateAmino): _25.GenesisState;
                toAmino(message: _25.GenesisState): _25.GenesisStateAmino;
                fromAminoMsg(object: _25.GenesisStateAminoMsg): _25.GenesisState;
                toAminoMsg(message: _25.GenesisState): _25.GenesisStateAminoMsg;
                fromProtoMsg(message: _25.GenesisStateProtoMsg): _25.GenesisState;
                toProto(message: _25.GenesisState): Uint8Array;
                toProtoMsg(message: _25.GenesisState): _25.GenesisStateProtoMsg;
            };
            BaseAccount: {
                typeUrl: string;
                encode(message: _24.BaseAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _24.BaseAccount;
                fromJSON(object: any): _24.BaseAccount;
                toJSON(message: _24.BaseAccount): unknown;
                fromPartial(object: Partial<_24.BaseAccount>): _24.BaseAccount;
                fromAmino(object: _24.BaseAccountAmino): _24.BaseAccount;
                toAmino(message: _24.BaseAccount): _24.BaseAccountAmino;
                fromAminoMsg(object: _24.BaseAccountAminoMsg): _24.BaseAccount;
                toAminoMsg(message: _24.BaseAccount): _24.BaseAccountAminoMsg;
                fromProtoMsg(message: _24.BaseAccountProtoMsg): _24.BaseAccount;
                toProto(message: _24.BaseAccount): Uint8Array;
                toProtoMsg(message: _24.BaseAccount): _24.BaseAccountProtoMsg;
            };
            ModuleAccount: {
                typeUrl: string;
                encode(message: _24.ModuleAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _24.ModuleAccount;
                fromJSON(object: any): _24.ModuleAccount;
                toJSON(message: _24.ModuleAccount): unknown;
                fromPartial(object: Partial<_24.ModuleAccount>): _24.ModuleAccount;
                fromAmino(object: _24.ModuleAccountAmino): _24.ModuleAccount;
                toAmino(message: _24.ModuleAccount): _24.ModuleAccountAmino;
                fromAminoMsg(object: _24.ModuleAccountAminoMsg): _24.ModuleAccount;
                toAminoMsg(message: _24.ModuleAccount): _24.ModuleAccountAminoMsg;
                fromProtoMsg(message: _24.ModuleAccountProtoMsg): _24.ModuleAccount;
                toProto(message: _24.ModuleAccount): Uint8Array;
                toProtoMsg(message: _24.ModuleAccount): _24.ModuleAccountProtoMsg;
            };
            ModuleCredential: {
                typeUrl: string;
                encode(message: _24.ModuleCredential, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _24.ModuleCredential;
                fromJSON(object: any): _24.ModuleCredential;
                toJSON(message: _24.ModuleCredential): unknown;
                fromPartial(object: Partial<_24.ModuleCredential>): _24.ModuleCredential;
                fromAmino(object: _24.ModuleCredentialAmino): _24.ModuleCredential;
                toAmino(message: _24.ModuleCredential): _24.ModuleCredentialAmino;
                fromAminoMsg(object: _24.ModuleCredentialAminoMsg): _24.ModuleCredential;
                toAminoMsg(message: _24.ModuleCredential): _24.ModuleCredentialAminoMsg;
                fromProtoMsg(message: _24.ModuleCredentialProtoMsg): _24.ModuleCredential;
                toProto(message: _24.ModuleCredential): Uint8Array;
                toProtoMsg(message: _24.ModuleCredential): _24.ModuleCredentialProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _24.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _24.Params;
                fromJSON(object: any): _24.Params;
                toJSON(message: _24.Params): unknown;
                fromPartial(object: Partial<_24.Params>): _24.Params;
                fromAmino(object: _24.ParamsAmino): _24.Params;
                toAmino(message: _24.Params): _24.ParamsAmino;
                fromAminoMsg(object: _24.ParamsAminoMsg): _24.Params;
                toAminoMsg(message: _24.Params): _24.ParamsAminoMsg;
                fromProtoMsg(message: _24.ParamsProtoMsg): _24.Params;
                toProto(message: _24.Params): Uint8Array;
                toProtoMsg(message: _24.Params): _24.ParamsProtoMsg;
            };
        };
    }
    namespace authz {
        namespace module {
            const v1: {
                protobufPackage: "cosmos.authz.module.v1";
                Module: {
                    typeUrl: string;
                    encode(_: _28.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _28.Module;
                    fromJSON(_: any): _28.Module;
                    toJSON(_: _28.Module): unknown;
                    fromPartial(_: Partial<_28.Module>): _28.Module;
                    fromAmino(_: _28.ModuleAmino): _28.Module;
                    toAmino(_: _28.Module): _28.ModuleAmino;
                    fromAminoMsg(object: _28.ModuleAminoMsg): _28.Module;
                    toAminoMsg(message: _28.Module): _28.ModuleAminoMsg;
                    fromProtoMsg(message: _28.ModuleProtoMsg): _28.Module;
                    toProto(message: _28.Module): Uint8Array;
                    toProtoMsg(message: _28.Module): _28.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            Msg: typeof _264.Msg;
            Query: typeof _245.Query;
            QueryClientImpl: typeof _245.QueryClientImpl;
            LCDQueryClient: typeof _227.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _33.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _33.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _33.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _33.MsgGrant): {
                        typeUrl: string;
                        value: _33.MsgGrant;
                    };
                    exec(value: _33.MsgExec): {
                        typeUrl: string;
                        value: _33.MsgExec;
                    };
                    revoke(value: _33.MsgRevoke): {
                        typeUrl: string;
                        value: _33.MsgRevoke;
                    };
                };
                toJSON: {
                    grant(value: _33.MsgGrant): {
                        typeUrl: string;
                        value: unknown;
                    };
                    exec(value: _33.MsgExec): {
                        typeUrl: string;
                        value: unknown;
                    };
                    revoke(value: _33.MsgRevoke): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    grant(value: any): {
                        typeUrl: string;
                        value: _33.MsgGrant;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _33.MsgExec;
                    };
                    revoke(value: any): {
                        typeUrl: string;
                        value: _33.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _33.MsgGrant): {
                        typeUrl: string;
                        value: _33.MsgGrant;
                    };
                    exec(value: _33.MsgExec): {
                        typeUrl: string;
                        value: _33.MsgExec;
                    };
                    revoke(value: _33.MsgRevoke): {
                        typeUrl: string;
                        value: _33.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: (message: _33.MsgGrant) => _33.MsgGrantAmino;
                    fromAmino: (object: _33.MsgGrantAmino) => _33.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _33.MsgExec) => _33.MsgExecAmino;
                    fromAmino: (object: _33.MsgExecAmino) => _33.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: (message: _33.MsgRevoke) => _33.MsgRevokeAmino;
                    fromAmino: (object: _33.MsgRevokeAmino) => _33.MsgRevoke;
                };
            };
            protobufPackage: "cosmos.authz.v1beta1";
            MsgGrant: {
                typeUrl: string;
                encode(message: _33.MsgGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _33.MsgGrant;
                fromJSON(object: any): _33.MsgGrant;
                toJSON(message: _33.MsgGrant): unknown;
                fromPartial(object: Partial<_33.MsgGrant>): _33.MsgGrant;
                fromAmino(object: _33.MsgGrantAmino): _33.MsgGrant;
                toAmino(message: _33.MsgGrant): _33.MsgGrantAmino;
                fromAminoMsg(object: _33.MsgGrantAminoMsg): _33.MsgGrant;
                toAminoMsg(message: _33.MsgGrant): _33.MsgGrantAminoMsg;
                fromProtoMsg(message: _33.MsgGrantProtoMsg): _33.MsgGrant;
                toProto(message: _33.MsgGrant): Uint8Array;
                toProtoMsg(message: _33.MsgGrant): _33.MsgGrantProtoMsg;
            };
            MsgGrantResponse: {
                typeUrl: string;
                encode(_: _33.MsgGrantResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _33.MsgGrantResponse;
                fromJSON(_: any): _33.MsgGrantResponse;
                toJSON(_: _33.MsgGrantResponse): unknown;
                fromPartial(_: Partial<_33.MsgGrantResponse>): _33.MsgGrantResponse;
                fromAmino(_: _33.MsgGrantResponseAmino): _33.MsgGrantResponse;
                toAmino(_: _33.MsgGrantResponse): _33.MsgGrantResponseAmino;
                fromAminoMsg(object: _33.MsgGrantResponseAminoMsg): _33.MsgGrantResponse;
                toAminoMsg(message: _33.MsgGrantResponse): _33.MsgGrantResponseAminoMsg;
                fromProtoMsg(message: _33.MsgGrantResponseProtoMsg): _33.MsgGrantResponse;
                toProto(message: _33.MsgGrantResponse): Uint8Array;
                toProtoMsg(message: _33.MsgGrantResponse): _33.MsgGrantResponseProtoMsg;
            };
            MsgExec: {
                typeUrl: string;
                encode(message: _33.MsgExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _33.MsgExec;
                fromJSON(object: any): _33.MsgExec;
                toJSON(message: _33.MsgExec): unknown;
                fromPartial(object: Partial<_33.MsgExec>): _33.MsgExec;
                fromAmino(object: _33.MsgExecAmino): _33.MsgExec;
                toAmino(message: _33.MsgExec): _33.MsgExecAmino;
                fromAminoMsg(object: _33.MsgExecAminoMsg): _33.MsgExec;
                toAminoMsg(message: _33.MsgExec): _33.MsgExecAminoMsg;
                fromProtoMsg(message: _33.MsgExecProtoMsg): _33.MsgExec;
                toProto(message: _33.MsgExec): Uint8Array;
                toProtoMsg(message: _33.MsgExec): _33.MsgExecProtoMsg;
            };
            MsgExecResponse: {
                typeUrl: string;
                encode(message: _33.MsgExecResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _33.MsgExecResponse;
                fromJSON(object: any): _33.MsgExecResponse;
                toJSON(message: _33.MsgExecResponse): unknown;
                fromPartial(object: Partial<_33.MsgExecResponse>): _33.MsgExecResponse;
                fromAmino(object: _33.MsgExecResponseAmino): _33.MsgExecResponse;
                toAmino(message: _33.MsgExecResponse): _33.MsgExecResponseAmino;
                fromAminoMsg(object: _33.MsgExecResponseAminoMsg): _33.MsgExecResponse;
                toAminoMsg(message: _33.MsgExecResponse): _33.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _33.MsgExecResponseProtoMsg): _33.MsgExecResponse;
                toProto(message: _33.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _33.MsgExecResponse): _33.MsgExecResponseProtoMsg;
            };
            MsgRevoke: {
                typeUrl: string;
                encode(message: _33.MsgRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _33.MsgRevoke;
                fromJSON(object: any): _33.MsgRevoke;
                toJSON(message: _33.MsgRevoke): unknown;
                fromPartial(object: Partial<_33.MsgRevoke>): _33.MsgRevoke;
                fromAmino(object: _33.MsgRevokeAmino): _33.MsgRevoke;
                toAmino(message: _33.MsgRevoke): _33.MsgRevokeAmino;
                fromAminoMsg(object: _33.MsgRevokeAminoMsg): _33.MsgRevoke;
                toAminoMsg(message: _33.MsgRevoke): _33.MsgRevokeAminoMsg;
                fromProtoMsg(message: _33.MsgRevokeProtoMsg): _33.MsgRevoke;
                toProto(message: _33.MsgRevoke): Uint8Array;
                toProtoMsg(message: _33.MsgRevoke): _33.MsgRevokeProtoMsg;
            };
            MsgRevokeResponse: {
                typeUrl: string;
                encode(_: _33.MsgRevokeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _33.MsgRevokeResponse;
                fromJSON(_: any): _33.MsgRevokeResponse;
                toJSON(_: _33.MsgRevokeResponse): unknown;
                fromPartial(_: Partial<_33.MsgRevokeResponse>): _33.MsgRevokeResponse;
                fromAmino(_: _33.MsgRevokeResponseAmino): _33.MsgRevokeResponse;
                toAmino(_: _33.MsgRevokeResponse): _33.MsgRevokeResponseAmino;
                fromAminoMsg(object: _33.MsgRevokeResponseAminoMsg): _33.MsgRevokeResponse;
                toAminoMsg(message: _33.MsgRevokeResponse): _33.MsgRevokeResponseAminoMsg;
                fromProtoMsg(message: _33.MsgRevokeResponseProtoMsg): _33.MsgRevokeResponse;
                toProto(message: _33.MsgRevokeResponse): Uint8Array;
                toProtoMsg(message: _33.MsgRevokeResponse): _33.MsgRevokeResponseProtoMsg;
            };
            Cosmos_basev1beta1Msg_InterfaceDecoder: (input: import("..").BinaryReader | Uint8Array) => import("../google/protobuf/any").Any;
            Cosmos_basev1beta1Msg_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_basev1beta1Msg_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryGrantsRequest: {
                typeUrl: string;
                encode(message: _32.QueryGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _32.QueryGrantsRequest;
                fromJSON(object: any): _32.QueryGrantsRequest;
                toJSON(message: _32.QueryGrantsRequest): unknown;
                fromPartial(object: Partial<_32.QueryGrantsRequest>): _32.QueryGrantsRequest;
                fromAmino(object: _32.QueryGrantsRequestAmino): _32.QueryGrantsRequest;
                toAmino(message: _32.QueryGrantsRequest): _32.QueryGrantsRequestAmino;
                fromAminoMsg(object: _32.QueryGrantsRequestAminoMsg): _32.QueryGrantsRequest;
                toAminoMsg(message: _32.QueryGrantsRequest): _32.QueryGrantsRequestAminoMsg;
                fromProtoMsg(message: _32.QueryGrantsRequestProtoMsg): _32.QueryGrantsRequest;
                toProto(message: _32.QueryGrantsRequest): Uint8Array;
                toProtoMsg(message: _32.QueryGrantsRequest): _32.QueryGrantsRequestProtoMsg;
            };
            QueryGrantsResponse: {
                typeUrl: string;
                encode(message: _32.QueryGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _32.QueryGrantsResponse;
                fromJSON(object: any): _32.QueryGrantsResponse;
                toJSON(message: _32.QueryGrantsResponse): unknown;
                fromPartial(object: Partial<_32.QueryGrantsResponse>): _32.QueryGrantsResponse;
                fromAmino(object: _32.QueryGrantsResponseAmino): _32.QueryGrantsResponse;
                toAmino(message: _32.QueryGrantsResponse): _32.QueryGrantsResponseAmino;
                fromAminoMsg(object: _32.QueryGrantsResponseAminoMsg): _32.QueryGrantsResponse;
                toAminoMsg(message: _32.QueryGrantsResponse): _32.QueryGrantsResponseAminoMsg;
                fromProtoMsg(message: _32.QueryGrantsResponseProtoMsg): _32.QueryGrantsResponse;
                toProto(message: _32.QueryGrantsResponse): Uint8Array;
                toProtoMsg(message: _32.QueryGrantsResponse): _32.QueryGrantsResponseProtoMsg;
            };
            QueryGranterGrantsRequest: {
                typeUrl: string;
                encode(message: _32.QueryGranterGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _32.QueryGranterGrantsRequest;
                fromJSON(object: any): _32.QueryGranterGrantsRequest;
                toJSON(message: _32.QueryGranterGrantsRequest): unknown;
                fromPartial(object: Partial<_32.QueryGranterGrantsRequest>): _32.QueryGranterGrantsRequest;
                fromAmino(object: _32.QueryGranterGrantsRequestAmino): _32.QueryGranterGrantsRequest;
                toAmino(message: _32.QueryGranterGrantsRequest): _32.QueryGranterGrantsRequestAmino;
                fromAminoMsg(object: _32.QueryGranterGrantsRequestAminoMsg): _32.QueryGranterGrantsRequest;
                toAminoMsg(message: _32.QueryGranterGrantsRequest): _32.QueryGranterGrantsRequestAminoMsg;
                fromProtoMsg(message: _32.QueryGranterGrantsRequestProtoMsg): _32.QueryGranterGrantsRequest;
                toProto(message: _32.QueryGranterGrantsRequest): Uint8Array;
                toProtoMsg(message: _32.QueryGranterGrantsRequest): _32.QueryGranterGrantsRequestProtoMsg;
            };
            QueryGranterGrantsResponse: {
                typeUrl: string;
                encode(message: _32.QueryGranterGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _32.QueryGranterGrantsResponse;
                fromJSON(object: any): _32.QueryGranterGrantsResponse;
                toJSON(message: _32.QueryGranterGrantsResponse): unknown;
                fromPartial(object: Partial<_32.QueryGranterGrantsResponse>): _32.QueryGranterGrantsResponse;
                fromAmino(object: _32.QueryGranterGrantsResponseAmino): _32.QueryGranterGrantsResponse;
                toAmino(message: _32.QueryGranterGrantsResponse): _32.QueryGranterGrantsResponseAmino;
                fromAminoMsg(object: _32.QueryGranterGrantsResponseAminoMsg): _32.QueryGranterGrantsResponse;
                toAminoMsg(message: _32.QueryGranterGrantsResponse): _32.QueryGranterGrantsResponseAminoMsg;
                fromProtoMsg(message: _32.QueryGranterGrantsResponseProtoMsg): _32.QueryGranterGrantsResponse;
                toProto(message: _32.QueryGranterGrantsResponse): Uint8Array;
                toProtoMsg(message: _32.QueryGranterGrantsResponse): _32.QueryGranterGrantsResponseProtoMsg;
            };
            QueryGranteeGrantsRequest: {
                typeUrl: string;
                encode(message: _32.QueryGranteeGrantsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _32.QueryGranteeGrantsRequest;
                fromJSON(object: any): _32.QueryGranteeGrantsRequest;
                toJSON(message: _32.QueryGranteeGrantsRequest): unknown;
                fromPartial(object: Partial<_32.QueryGranteeGrantsRequest>): _32.QueryGranteeGrantsRequest;
                fromAmino(object: _32.QueryGranteeGrantsRequestAmino): _32.QueryGranteeGrantsRequest;
                toAmino(message: _32.QueryGranteeGrantsRequest): _32.QueryGranteeGrantsRequestAmino;
                fromAminoMsg(object: _32.QueryGranteeGrantsRequestAminoMsg): _32.QueryGranteeGrantsRequest;
                toAminoMsg(message: _32.QueryGranteeGrantsRequest): _32.QueryGranteeGrantsRequestAminoMsg;
                fromProtoMsg(message: _32.QueryGranteeGrantsRequestProtoMsg): _32.QueryGranteeGrantsRequest;
                toProto(message: _32.QueryGranteeGrantsRequest): Uint8Array;
                toProtoMsg(message: _32.QueryGranteeGrantsRequest): _32.QueryGranteeGrantsRequestProtoMsg;
            };
            QueryGranteeGrantsResponse: {
                typeUrl: string;
                encode(message: _32.QueryGranteeGrantsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _32.QueryGranteeGrantsResponse;
                fromJSON(object: any): _32.QueryGranteeGrantsResponse;
                toJSON(message: _32.QueryGranteeGrantsResponse): unknown;
                fromPartial(object: Partial<_32.QueryGranteeGrantsResponse>): _32.QueryGranteeGrantsResponse;
                fromAmino(object: _32.QueryGranteeGrantsResponseAmino): _32.QueryGranteeGrantsResponse;
                toAmino(message: _32.QueryGranteeGrantsResponse): _32.QueryGranteeGrantsResponseAmino;
                fromAminoMsg(object: _32.QueryGranteeGrantsResponseAminoMsg): _32.QueryGranteeGrantsResponse;
                toAminoMsg(message: _32.QueryGranteeGrantsResponse): _32.QueryGranteeGrantsResponseAminoMsg;
                fromProtoMsg(message: _32.QueryGranteeGrantsResponseProtoMsg): _32.QueryGranteeGrantsResponse;
                toProto(message: _32.QueryGranteeGrantsResponse): Uint8Array;
                toProtoMsg(message: _32.QueryGranteeGrantsResponse): _32.QueryGranteeGrantsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _31.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _31.GenesisState;
                fromJSON(object: any): _31.GenesisState;
                toJSON(message: _31.GenesisState): unknown;
                fromPartial(object: Partial<_31.GenesisState>): _31.GenesisState;
                fromAmino(object: _31.GenesisStateAmino): _31.GenesisState;
                toAmino(message: _31.GenesisState): _31.GenesisStateAmino;
                fromAminoMsg(object: _31.GenesisStateAminoMsg): _31.GenesisState;
                toAminoMsg(message: _31.GenesisState): _31.GenesisStateAminoMsg;
                fromProtoMsg(message: _31.GenesisStateProtoMsg): _31.GenesisState;
                toProto(message: _31.GenesisState): Uint8Array;
                toProtoMsg(message: _31.GenesisState): _31.GenesisStateProtoMsg;
            };
            EventGrant: {
                typeUrl: string;
                encode(message: _30.EventGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _30.EventGrant;
                fromJSON(object: any): _30.EventGrant;
                toJSON(message: _30.EventGrant): unknown;
                fromPartial(object: Partial<_30.EventGrant>): _30.EventGrant;
                fromAmino(object: _30.EventGrantAmino): _30.EventGrant;
                toAmino(message: _30.EventGrant): _30.EventGrantAmino;
                fromAminoMsg(object: _30.EventGrantAminoMsg): _30.EventGrant;
                toAminoMsg(message: _30.EventGrant): _30.EventGrantAminoMsg;
                fromProtoMsg(message: _30.EventGrantProtoMsg): _30.EventGrant;
                toProto(message: _30.EventGrant): Uint8Array;
                toProtoMsg(message: _30.EventGrant): _30.EventGrantProtoMsg;
            };
            EventRevoke: {
                typeUrl: string;
                encode(message: _30.EventRevoke, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _30.EventRevoke;
                fromJSON(object: any): _30.EventRevoke;
                toJSON(message: _30.EventRevoke): unknown;
                fromPartial(object: Partial<_30.EventRevoke>): _30.EventRevoke;
                fromAmino(object: _30.EventRevokeAmino): _30.EventRevoke;
                toAmino(message: _30.EventRevoke): _30.EventRevokeAmino;
                fromAminoMsg(object: _30.EventRevokeAminoMsg): _30.EventRevoke;
                toAminoMsg(message: _30.EventRevoke): _30.EventRevokeAminoMsg;
                fromProtoMsg(message: _30.EventRevokeProtoMsg): _30.EventRevoke;
                toProto(message: _30.EventRevoke): Uint8Array;
                toProtoMsg(message: _30.EventRevoke): _30.EventRevokeProtoMsg;
            };
            GenericAuthorization: {
                typeUrl: string;
                encode(message: _29.GenericAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _29.GenericAuthorization;
                fromJSON(object: any): _29.GenericAuthorization;
                toJSON(message: _29.GenericAuthorization): unknown;
                fromPartial(object: Partial<_29.GenericAuthorization>): _29.GenericAuthorization;
                fromAmino(object: _29.GenericAuthorizationAmino): _29.GenericAuthorization;
                toAmino(message: _29.GenericAuthorization): _29.GenericAuthorizationAmino;
                fromAminoMsg(object: _29.GenericAuthorizationAminoMsg): _29.GenericAuthorization;
                toAminoMsg(message: _29.GenericAuthorization): _29.GenericAuthorizationAminoMsg;
                fromProtoMsg(message: _29.GenericAuthorizationProtoMsg): _29.GenericAuthorization;
                toProto(message: _29.GenericAuthorization): Uint8Array;
                toProtoMsg(message: _29.GenericAuthorization): _29.GenericAuthorizationProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _29.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _29.Grant;
                fromJSON(object: any): _29.Grant;
                toJSON(message: _29.Grant): unknown;
                fromPartial(object: Partial<_29.Grant>): _29.Grant;
                fromAmino(object: _29.GrantAmino): _29.Grant;
                toAmino(message: _29.Grant): _29.GrantAmino;
                fromAminoMsg(object: _29.GrantAminoMsg): _29.Grant;
                toAminoMsg(message: _29.Grant): _29.GrantAminoMsg;
                fromProtoMsg(message: _29.GrantProtoMsg): _29.Grant;
                toProto(message: _29.Grant): Uint8Array;
                toProtoMsg(message: _29.Grant): _29.GrantProtoMsg;
            };
            GrantAuthorization: {
                typeUrl: string;
                encode(message: _29.GrantAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _29.GrantAuthorization;
                fromJSON(object: any): _29.GrantAuthorization;
                toJSON(message: _29.GrantAuthorization): unknown;
                fromPartial(object: Partial<_29.GrantAuthorization>): _29.GrantAuthorization;
                fromAmino(object: _29.GrantAuthorizationAmino): _29.GrantAuthorization;
                toAmino(message: _29.GrantAuthorization): _29.GrantAuthorizationAmino;
                fromAminoMsg(object: _29.GrantAuthorizationAminoMsg): _29.GrantAuthorization;
                toAminoMsg(message: _29.GrantAuthorization): _29.GrantAuthorizationAminoMsg;
                fromProtoMsg(message: _29.GrantAuthorizationProtoMsg): _29.GrantAuthorization;
                toProto(message: _29.GrantAuthorization): Uint8Array;
                toProtoMsg(message: _29.GrantAuthorization): _29.GrantAuthorizationProtoMsg;
            };
            GrantQueueItem: {
                typeUrl: string;
                encode(message: _29.GrantQueueItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _29.GrantQueueItem;
                fromJSON(object: any): _29.GrantQueueItem;
                toJSON(message: _29.GrantQueueItem): unknown;
                fromPartial(object: Partial<_29.GrantQueueItem>): _29.GrantQueueItem;
                fromAmino(object: _29.GrantQueueItemAmino): _29.GrantQueueItem;
                toAmino(message: _29.GrantQueueItem): _29.GrantQueueItemAmino;
                fromAminoMsg(object: _29.GrantQueueItemAminoMsg): _29.GrantQueueItem;
                toAminoMsg(message: _29.GrantQueueItem): _29.GrantQueueItemAminoMsg;
                fromProtoMsg(message: _29.GrantQueueItemProtoMsg): _29.GrantQueueItem;
                toProto(message: _29.GrantQueueItem): Uint8Array;
                toProtoMsg(message: _29.GrantQueueItem): _29.GrantQueueItemProtoMsg;
            };
            Cosmos_authzv1beta1Authorization_InterfaceDecoder: (input: import("..").BinaryReader | Uint8Array) => import("../google/protobuf/any").Any | _35.SendAuthorization | _110.StakeAuthorization | import("../ibc/applications/transfer/v1/authz").TransferAuthorization | _29.GenericAuthorization;
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
                    encode(message: _34.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _34.Module;
                    fromJSON(object: any): _34.Module;
                    toJSON(message: _34.Module): unknown;
                    fromPartial(object: Partial<_34.Module>): _34.Module;
                    fromAmino(object: _34.ModuleAmino): _34.Module;
                    toAmino(message: _34.Module): _34.ModuleAmino;
                    fromAminoMsg(object: _34.ModuleAminoMsg): _34.Module;
                    toAminoMsg(message: _34.Module): _34.ModuleAminoMsg;
                    fromProtoMsg(message: _34.ModuleProtoMsg): _34.Module;
                    toProto(message: _34.Module): Uint8Array;
                    toProtoMsg(message: _34.Module): _34.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            Msg: typeof _265.Msg;
            Query: typeof _246.Query;
            QueryClientImpl: typeof _246.QueryClientImpl;
            LCDQueryClient: typeof _228.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _39.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _39.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _39.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setSendEnabled(value: _39.MsgSetSendEnabled): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _39.MsgSend): {
                        typeUrl: string;
                        value: _39.MsgSend;
                    };
                    multiSend(value: _39.MsgMultiSend): {
                        typeUrl: string;
                        value: _39.MsgMultiSend;
                    };
                    updateParams(value: _39.MsgUpdateParams): {
                        typeUrl: string;
                        value: _39.MsgUpdateParams;
                    };
                    setSendEnabled(value: _39.MsgSetSendEnabled): {
                        typeUrl: string;
                        value: _39.MsgSetSendEnabled;
                    };
                };
                toJSON: {
                    send(value: _39.MsgSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                    multiSend(value: _39.MsgMultiSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateParams(value: _39.MsgUpdateParams): {
                        typeUrl: string;
                        value: unknown;
                    };
                    setSendEnabled(value: _39.MsgSetSendEnabled): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _39.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _39.MsgMultiSend;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _39.MsgUpdateParams;
                    };
                    setSendEnabled(value: any): {
                        typeUrl: string;
                        value: _39.MsgSetSendEnabled;
                    };
                };
                fromPartial: {
                    send(value: _39.MsgSend): {
                        typeUrl: string;
                        value: _39.MsgSend;
                    };
                    multiSend(value: _39.MsgMultiSend): {
                        typeUrl: string;
                        value: _39.MsgMultiSend;
                    };
                    updateParams(value: _39.MsgUpdateParams): {
                        typeUrl: string;
                        value: _39.MsgUpdateParams;
                    };
                    setSendEnabled(value: _39.MsgSetSendEnabled): {
                        typeUrl: string;
                        value: _39.MsgSetSendEnabled;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _39.MsgSend) => _39.MsgSendAmino;
                    fromAmino: (object: _39.MsgSendAmino) => _39.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: (message: _39.MsgMultiSend) => _39.MsgMultiSendAmino;
                    fromAmino: (object: _39.MsgMultiSendAmino) => _39.MsgMultiSend;
                };
                "/cosmos.bank.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _39.MsgUpdateParams) => _39.MsgUpdateParamsAmino;
                    fromAmino: (object: _39.MsgUpdateParamsAmino) => _39.MsgUpdateParams;
                };
                "/cosmos.bank.v1beta1.MsgSetSendEnabled": {
                    aminoType: string;
                    toAmino: (message: _39.MsgSetSendEnabled) => _39.MsgSetSendEnabledAmino;
                    fromAmino: (object: _39.MsgSetSendEnabledAmino) => _39.MsgSetSendEnabled;
                };
            };
            protobufPackage: "cosmos.bank.v1beta1";
            MsgSend: {
                typeUrl: string;
                encode(message: _39.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _39.MsgSend;
                fromJSON(object: any): _39.MsgSend;
                toJSON(message: _39.MsgSend): unknown;
                fromPartial(object: Partial<_39.MsgSend>): _39.MsgSend;
                fromAmino(object: _39.MsgSendAmino): _39.MsgSend;
                toAmino(message: _39.MsgSend): _39.MsgSendAmino;
                fromAminoMsg(object: _39.MsgSendAminoMsg): _39.MsgSend;
                toAminoMsg(message: _39.MsgSend): _39.MsgSendAminoMsg;
                fromProtoMsg(message: _39.MsgSendProtoMsg): _39.MsgSend;
                toProto(message: _39.MsgSend): Uint8Array;
                toProtoMsg(message: _39.MsgSend): _39.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _39.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _39.MsgSendResponse;
                fromJSON(_: any): _39.MsgSendResponse;
                toJSON(_: _39.MsgSendResponse): unknown;
                fromPartial(_: Partial<_39.MsgSendResponse>): _39.MsgSendResponse;
                fromAmino(_: _39.MsgSendResponseAmino): _39.MsgSendResponse;
                toAmino(_: _39.MsgSendResponse): _39.MsgSendResponseAmino;
                fromAminoMsg(object: _39.MsgSendResponseAminoMsg): _39.MsgSendResponse;
                toAminoMsg(message: _39.MsgSendResponse): _39.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _39.MsgSendResponseProtoMsg): _39.MsgSendResponse;
                toProto(message: _39.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _39.MsgSendResponse): _39.MsgSendResponseProtoMsg;
            };
            MsgMultiSend: {
                typeUrl: string;
                encode(message: _39.MsgMultiSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _39.MsgMultiSend;
                fromJSON(object: any): _39.MsgMultiSend;
                toJSON(message: _39.MsgMultiSend): unknown;
                fromPartial(object: Partial<_39.MsgMultiSend>): _39.MsgMultiSend;
                fromAmino(object: _39.MsgMultiSendAmino): _39.MsgMultiSend;
                toAmino(message: _39.MsgMultiSend): _39.MsgMultiSendAmino;
                fromAminoMsg(object: _39.MsgMultiSendAminoMsg): _39.MsgMultiSend;
                toAminoMsg(message: _39.MsgMultiSend): _39.MsgMultiSendAminoMsg;
                fromProtoMsg(message: _39.MsgMultiSendProtoMsg): _39.MsgMultiSend;
                toProto(message: _39.MsgMultiSend): Uint8Array;
                toProtoMsg(message: _39.MsgMultiSend): _39.MsgMultiSendProtoMsg;
            };
            MsgMultiSendResponse: {
                typeUrl: string;
                encode(_: _39.MsgMultiSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _39.MsgMultiSendResponse;
                fromJSON(_: any): _39.MsgMultiSendResponse;
                toJSON(_: _39.MsgMultiSendResponse): unknown;
                fromPartial(_: Partial<_39.MsgMultiSendResponse>): _39.MsgMultiSendResponse;
                fromAmino(_: _39.MsgMultiSendResponseAmino): _39.MsgMultiSendResponse;
                toAmino(_: _39.MsgMultiSendResponse): _39.MsgMultiSendResponseAmino;
                fromAminoMsg(object: _39.MsgMultiSendResponseAminoMsg): _39.MsgMultiSendResponse;
                toAminoMsg(message: _39.MsgMultiSendResponse): _39.MsgMultiSendResponseAminoMsg;
                fromProtoMsg(message: _39.MsgMultiSendResponseProtoMsg): _39.MsgMultiSendResponse;
                toProto(message: _39.MsgMultiSendResponse): Uint8Array;
                toProtoMsg(message: _39.MsgMultiSendResponse): _39.MsgMultiSendResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _39.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _39.MsgUpdateParams;
                fromJSON(object: any): _39.MsgUpdateParams;
                toJSON(message: _39.MsgUpdateParams): unknown;
                fromPartial(object: Partial<_39.MsgUpdateParams>): _39.MsgUpdateParams;
                fromAmino(object: _39.MsgUpdateParamsAmino): _39.MsgUpdateParams;
                toAmino(message: _39.MsgUpdateParams): _39.MsgUpdateParamsAmino;
                fromAminoMsg(object: _39.MsgUpdateParamsAminoMsg): _39.MsgUpdateParams;
                toAminoMsg(message: _39.MsgUpdateParams): _39.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _39.MsgUpdateParamsProtoMsg): _39.MsgUpdateParams;
                toProto(message: _39.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _39.MsgUpdateParams): _39.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _39.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _39.MsgUpdateParamsResponse;
                fromJSON(_: any): _39.MsgUpdateParamsResponse;
                toJSON(_: _39.MsgUpdateParamsResponse): unknown;
                fromPartial(_: Partial<_39.MsgUpdateParamsResponse>): _39.MsgUpdateParamsResponse;
                fromAmino(_: _39.MsgUpdateParamsResponseAmino): _39.MsgUpdateParamsResponse;
                toAmino(_: _39.MsgUpdateParamsResponse): _39.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _39.MsgUpdateParamsResponseAminoMsg): _39.MsgUpdateParamsResponse;
                toAminoMsg(message: _39.MsgUpdateParamsResponse): _39.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _39.MsgUpdateParamsResponseProtoMsg): _39.MsgUpdateParamsResponse;
                toProto(message: _39.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _39.MsgUpdateParamsResponse): _39.MsgUpdateParamsResponseProtoMsg;
            };
            MsgSetSendEnabled: {
                typeUrl: string;
                encode(message: _39.MsgSetSendEnabled, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _39.MsgSetSendEnabled;
                fromJSON(object: any): _39.MsgSetSendEnabled;
                toJSON(message: _39.MsgSetSendEnabled): unknown;
                fromPartial(object: Partial<_39.MsgSetSendEnabled>): _39.MsgSetSendEnabled;
                fromAmino(object: _39.MsgSetSendEnabledAmino): _39.MsgSetSendEnabled;
                toAmino(message: _39.MsgSetSendEnabled): _39.MsgSetSendEnabledAmino;
                fromAminoMsg(object: _39.MsgSetSendEnabledAminoMsg): _39.MsgSetSendEnabled;
                toAminoMsg(message: _39.MsgSetSendEnabled): _39.MsgSetSendEnabledAminoMsg;
                fromProtoMsg(message: _39.MsgSetSendEnabledProtoMsg): _39.MsgSetSendEnabled;
                toProto(message: _39.MsgSetSendEnabled): Uint8Array;
                toProtoMsg(message: _39.MsgSetSendEnabled): _39.MsgSetSendEnabledProtoMsg;
            };
            MsgSetSendEnabledResponse: {
                typeUrl: string;
                encode(_: _39.MsgSetSendEnabledResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _39.MsgSetSendEnabledResponse;
                fromJSON(_: any): _39.MsgSetSendEnabledResponse;
                toJSON(_: _39.MsgSetSendEnabledResponse): unknown;
                fromPartial(_: Partial<_39.MsgSetSendEnabledResponse>): _39.MsgSetSendEnabledResponse;
                fromAmino(_: _39.MsgSetSendEnabledResponseAmino): _39.MsgSetSendEnabledResponse;
                toAmino(_: _39.MsgSetSendEnabledResponse): _39.MsgSetSendEnabledResponseAmino;
                fromAminoMsg(object: _39.MsgSetSendEnabledResponseAminoMsg): _39.MsgSetSendEnabledResponse;
                toAminoMsg(message: _39.MsgSetSendEnabledResponse): _39.MsgSetSendEnabledResponseAminoMsg;
                fromProtoMsg(message: _39.MsgSetSendEnabledResponseProtoMsg): _39.MsgSetSendEnabledResponse;
                toProto(message: _39.MsgSetSendEnabledResponse): Uint8Array;
                toProtoMsg(message: _39.MsgSetSendEnabledResponse): _39.MsgSetSendEnabledResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _38.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _38.QueryBalanceRequest;
                fromJSON(object: any): _38.QueryBalanceRequest;
                toJSON(message: _38.QueryBalanceRequest): unknown;
                fromPartial(object: Partial<_38.QueryBalanceRequest>): _38.QueryBalanceRequest;
                fromAmino(object: _38.QueryBalanceRequestAmino): _38.QueryBalanceRequest;
                toAmino(message: _38.QueryBalanceRequest): _38.QueryBalanceRequestAmino;
                fromAminoMsg(object: _38.QueryBalanceRequestAminoMsg): _38.QueryBalanceRequest;
                toAminoMsg(message: _38.QueryBalanceRequest): _38.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _38.QueryBalanceRequestProtoMsg): _38.QueryBalanceRequest;
                toProto(message: _38.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _38.QueryBalanceRequest): _38.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _38.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _38.QueryBalanceResponse;
                fromJSON(object: any): _38.QueryBalanceResponse;
                toJSON(message: _38.QueryBalanceResponse): unknown;
                fromPartial(object: Partial<_38.QueryBalanceResponse>): _38.QueryBalanceResponse;
                fromAmino(object: _38.QueryBalanceResponseAmino): _38.QueryBalanceResponse;
                toAmino(message: _38.QueryBalanceResponse): _38.QueryBalanceResponseAmino;
                fromAminoMsg(object: _38.QueryBalanceResponseAminoMsg): _38.QueryBalanceResponse;
                toAminoMsg(message: _38.QueryBalanceResponse): _38.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _38.QueryBalanceResponseProtoMsg): _38.QueryBalanceResponse;
                toProto(message: _38.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _38.QueryBalanceResponse): _38.QueryBalanceResponseProtoMsg;
            };
            QueryAllBalancesRequest: {
                typeUrl: string;
                encode(message: _38.QueryAllBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _38.QueryAllBalancesRequest;
                fromJSON(object: any): _38.QueryAllBalancesRequest;
                toJSON(message: _38.QueryAllBalancesRequest): unknown;
                fromPartial(object: Partial<_38.QueryAllBalancesRequest>): _38.QueryAllBalancesRequest;
                fromAmino(object: _38.QueryAllBalancesRequestAmino): _38.QueryAllBalancesRequest;
                toAmino(message: _38.QueryAllBalancesRequest): _38.QueryAllBalancesRequestAmino;
                fromAminoMsg(object: _38.QueryAllBalancesRequestAminoMsg): _38.QueryAllBalancesRequest;
                toAminoMsg(message: _38.QueryAllBalancesRequest): _38.QueryAllBalancesRequestAminoMsg;
                fromProtoMsg(message: _38.QueryAllBalancesRequestProtoMsg): _38.QueryAllBalancesRequest;
                toProto(message: _38.QueryAllBalancesRequest): Uint8Array;
                toProtoMsg(message: _38.QueryAllBalancesRequest): _38.QueryAllBalancesRequestProtoMsg;
            };
            QueryAllBalancesResponse: {
                typeUrl: string;
                encode(message: _38.QueryAllBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _38.QueryAllBalancesResponse;
                fromJSON(object: any): _38.QueryAllBalancesResponse;
                toJSON(message: _38.QueryAllBalancesResponse): unknown;
                fromPartial(object: Partial<_38.QueryAllBalancesResponse>): _38.QueryAllBalancesResponse;
                fromAmino(object: _38.QueryAllBalancesResponseAmino): _38.QueryAllBalancesResponse;
                toAmino(message: _38.QueryAllBalancesResponse): _38.QueryAllBalancesResponseAmino;
                fromAminoMsg(object: _38.QueryAllBalancesResponseAminoMsg): _38.QueryAllBalancesResponse;
                toAminoMsg(message: _38.QueryAllBalancesResponse): _38.QueryAllBalancesResponseAminoMsg;
                fromProtoMsg(message: _38.QueryAllBalancesResponseProtoMsg): _38.QueryAllBalancesResponse;
                toProto(message: _38.QueryAllBalancesResponse): Uint8Array;
                toProtoMsg(message: _38.QueryAllBalancesResponse): _38.QueryAllBalancesResponseProtoMsg;
            };
            QuerySpendableBalancesRequest: {
                typeUrl: string;
                encode(message: _38.QuerySpendableBalancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _38.QuerySpendableBalancesRequest;
                fromJSON(object: any): _38.QuerySpendableBalancesRequest;
                toJSON(message: _38.QuerySpendableBalancesRequest): unknown;
                fromPartial(object: Partial<_38.QuerySpendableBalancesRequest>): _38.QuerySpendableBalancesRequest;
                fromAmino(object: _38.QuerySpendableBalancesRequestAmino): _38.QuerySpendableBalancesRequest;
                toAmino(message: _38.QuerySpendableBalancesRequest): _38.QuerySpendableBalancesRequestAmino;
                fromAminoMsg(object: _38.QuerySpendableBalancesRequestAminoMsg): _38.QuerySpendableBalancesRequest;
                toAminoMsg(message: _38.QuerySpendableBalancesRequest): _38.QuerySpendableBalancesRequestAminoMsg;
                fromProtoMsg(message: _38.QuerySpendableBalancesRequestProtoMsg): _38.QuerySpendableBalancesRequest;
                toProto(message: _38.QuerySpendableBalancesRequest): Uint8Array;
                toProtoMsg(message: _38.QuerySpendableBalancesRequest): _38.QuerySpendableBalancesRequestProtoMsg;
            };
            QuerySpendableBalancesResponse: {
                typeUrl: string;
                encode(message: _38.QuerySpendableBalancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _38.QuerySpendableBalancesResponse;
                fromJSON(object: any): _38.QuerySpendableBalancesResponse;
                toJSON(message: _38.QuerySpendableBalancesResponse): unknown;
                fromPartial(object: Partial<_38.QuerySpendableBalancesResponse>): _38.QuerySpendableBalancesResponse;
                fromAmino(object: _38.QuerySpendableBalancesResponseAmino): _38.QuerySpendableBalancesResponse;
                toAmino(message: _38.QuerySpendableBalancesResponse): _38.QuerySpendableBalancesResponseAmino;
                fromAminoMsg(object: _38.QuerySpendableBalancesResponseAminoMsg): _38.QuerySpendableBalancesResponse;
                toAminoMsg(message: _38.QuerySpendableBalancesResponse): _38.QuerySpendableBalancesResponseAminoMsg;
                fromProtoMsg(message: _38.QuerySpendableBalancesResponseProtoMsg): _38.QuerySpendableBalancesResponse;
                toProto(message: _38.QuerySpendableBalancesResponse): Uint8Array;
                toProtoMsg(message: _38.QuerySpendableBalancesResponse): _38.QuerySpendableBalancesResponseProtoMsg;
            };
            QuerySpendableBalanceByDenomRequest: {
                typeUrl: string;
                encode(message: _38.QuerySpendableBalanceByDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _38.QuerySpendableBalanceByDenomRequest;
                fromJSON(object: any): _38.QuerySpendableBalanceByDenomRequest;
                toJSON(message: _38.QuerySpendableBalanceByDenomRequest): unknown;
                fromPartial(object: Partial<_38.QuerySpendableBalanceByDenomRequest>): _38.QuerySpendableBalanceByDenomRequest;
                fromAmino(object: _38.QuerySpendableBalanceByDenomRequestAmino): _38.QuerySpendableBalanceByDenomRequest;
                toAmino(message: _38.QuerySpendableBalanceByDenomRequest): _38.QuerySpendableBalanceByDenomRequestAmino;
                fromAminoMsg(object: _38.QuerySpendableBalanceByDenomRequestAminoMsg): _38.QuerySpendableBalanceByDenomRequest;
                toAminoMsg(message: _38.QuerySpendableBalanceByDenomRequest): _38.QuerySpendableBalanceByDenomRequestAminoMsg;
                fromProtoMsg(message: _38.QuerySpendableBalanceByDenomRequestProtoMsg): _38.QuerySpendableBalanceByDenomRequest;
                toProto(message: _38.QuerySpendableBalanceByDenomRequest): Uint8Array;
                toProtoMsg(message: _38.QuerySpendableBalanceByDenomRequest): _38.QuerySpendableBalanceByDenomRequestProtoMsg;
            };
            QuerySpendableBalanceByDenomResponse: {
                typeUrl: string;
                encode(message: _38.QuerySpendableBalanceByDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _38.QuerySpendableBalanceByDenomResponse;
                fromJSON(object: any): _38.QuerySpendableBalanceByDenomResponse;
                toJSON(message: _38.QuerySpendableBalanceByDenomResponse): unknown;
                fromPartial(object: Partial<_38.QuerySpendableBalanceByDenomResponse>): _38.QuerySpendableBalanceByDenomResponse;
                fromAmino(object: _38.QuerySpendableBalanceByDenomResponseAmino): _38.QuerySpendableBalanceByDenomResponse;
                toAmino(message: _38.QuerySpendableBalanceByDenomResponse): _38.QuerySpendableBalanceByDenomResponseAmino;
                fromAminoMsg(object: _38.QuerySpendableBalanceByDenomResponseAminoMsg): _38.QuerySpendableBalanceByDenomResponse;
                toAminoMsg(message: _38.QuerySpendableBalanceByDenomResponse): _38.QuerySpendableBalanceByDenomResponseAminoMsg;
                fromProtoMsg(message: _38.QuerySpendableBalanceByDenomResponseProtoMsg): _38.QuerySpendableBalanceByDenomResponse;
                toProto(message: _38.QuerySpendableBalanceByDenomResponse): Uint8Array;
                toProtoMsg(message: _38.QuerySpendableBalanceByDenomResponse): _38.QuerySpendableBalanceByDenomResponseProtoMsg;
            };
            QueryTotalSupplyRequest: {
                typeUrl: string;
                encode(message: _38.QueryTotalSupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _38.QueryTotalSupplyRequest;
                fromJSON(object: any): _38.QueryTotalSupplyRequest;
                toJSON(message: _38.QueryTotalSupplyRequest): unknown;
                fromPartial(object: Partial<_38.QueryTotalSupplyRequest>): _38.QueryTotalSupplyRequest;
                fromAmino(object: _38.QueryTotalSupplyRequestAmino): _38.QueryTotalSupplyRequest;
                toAmino(message: _38.QueryTotalSupplyRequest): _38.QueryTotalSupplyRequestAmino;
                fromAminoMsg(object: _38.QueryTotalSupplyRequestAminoMsg): _38.QueryTotalSupplyRequest;
                toAminoMsg(message: _38.QueryTotalSupplyRequest): _38.QueryTotalSupplyRequestAminoMsg;
                fromProtoMsg(message: _38.QueryTotalSupplyRequestProtoMsg): _38.QueryTotalSupplyRequest;
                toProto(message: _38.QueryTotalSupplyRequest): Uint8Array;
                toProtoMsg(message: _38.QueryTotalSupplyRequest): _38.QueryTotalSupplyRequestProtoMsg;
            };
            QueryTotalSupplyResponse: {
                typeUrl: string;
                encode(message: _38.QueryTotalSupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _38.QueryTotalSupplyResponse;
                fromJSON(object: any): _38.QueryTotalSupplyResponse;
                toJSON(message: _38.QueryTotalSupplyResponse): unknown;
                fromPartial(object: Partial<_38.QueryTotalSupplyResponse>): _38.QueryTotalSupplyResponse;
                fromAmino(object: _38.QueryTotalSupplyResponseAmino): _38.QueryTotalSupplyResponse;
                toAmino(message: _38.QueryTotalSupplyResponse): _38.QueryTotalSupplyResponseAmino;
                fromAminoMsg(object: _38.QueryTotalSupplyResponseAminoMsg): _38.QueryTotalSupplyResponse;
                toAminoMsg(message: _38.QueryTotalSupplyResponse): _38.QueryTotalSupplyResponseAminoMsg;
                fromProtoMsg(message: _38.QueryTotalSupplyResponseProtoMsg): _38.QueryTotalSupplyResponse;
                toProto(message: _38.QueryTotalSupplyResponse): Uint8Array;
                toProtoMsg(message: _38.QueryTotalSupplyResponse): _38.QueryTotalSupplyResponseProtoMsg;
            };
            QuerySupplyOfRequest: {
                typeUrl: string;
                encode(message: _38.QuerySupplyOfRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _38.QuerySupplyOfRequest;
                fromJSON(object: any): _38.QuerySupplyOfRequest;
                toJSON(message: _38.QuerySupplyOfRequest): unknown;
                fromPartial(object: Partial<_38.QuerySupplyOfRequest>): _38.QuerySupplyOfRequest;
                fromAmino(object: _38.QuerySupplyOfRequestAmino): _38.QuerySupplyOfRequest;
                toAmino(message: _38.QuerySupplyOfRequest): _38.QuerySupplyOfRequestAmino;
                fromAminoMsg(object: _38.QuerySupplyOfRequestAminoMsg): _38.QuerySupplyOfRequest;
                toAminoMsg(message: _38.QuerySupplyOfRequest): _38.QuerySupplyOfRequestAminoMsg;
                fromProtoMsg(message: _38.QuerySupplyOfRequestProtoMsg): _38.QuerySupplyOfRequest;
                toProto(message: _38.QuerySupplyOfRequest): Uint8Array;
                toProtoMsg(message: _38.QuerySupplyOfRequest): _38.QuerySupplyOfRequestProtoMsg;
            };
            QuerySupplyOfResponse: {
                typeUrl: string;
                encode(message: _38.QuerySupplyOfResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _38.QuerySupplyOfResponse;
                fromJSON(object: any): _38.QuerySupplyOfResponse;
                toJSON(message: _38.QuerySupplyOfResponse): unknown;
                fromPartial(object: Partial<_38.QuerySupplyOfResponse>): _38.QuerySupplyOfResponse;
                fromAmino(object: _38.QuerySupplyOfResponseAmino): _38.QuerySupplyOfResponse;
                toAmino(message: _38.QuerySupplyOfResponse): _38.QuerySupplyOfResponseAmino;
                fromAminoMsg(object: _38.QuerySupplyOfResponseAminoMsg): _38.QuerySupplyOfResponse;
                toAminoMsg(message: _38.QuerySupplyOfResponse): _38.QuerySupplyOfResponseAminoMsg;
                fromProtoMsg(message: _38.QuerySupplyOfResponseProtoMsg): _38.QuerySupplyOfResponse;
                toProto(message: _38.QuerySupplyOfResponse): Uint8Array;
                toProtoMsg(message: _38.QuerySupplyOfResponse): _38.QuerySupplyOfResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _38.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _38.QueryParamsRequest;
                fromJSON(_: any): _38.QueryParamsRequest;
                toJSON(_: _38.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_38.QueryParamsRequest>): _38.QueryParamsRequest;
                fromAmino(_: _38.QueryParamsRequestAmino): _38.QueryParamsRequest;
                toAmino(_: _38.QueryParamsRequest): _38.QueryParamsRequestAmino;
                fromAminoMsg(object: _38.QueryParamsRequestAminoMsg): _38.QueryParamsRequest;
                toAminoMsg(message: _38.QueryParamsRequest): _38.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _38.QueryParamsRequestProtoMsg): _38.QueryParamsRequest;
                toProto(message: _38.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _38.QueryParamsRequest): _38.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _38.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _38.QueryParamsResponse;
                fromJSON(object: any): _38.QueryParamsResponse;
                toJSON(message: _38.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_38.QueryParamsResponse>): _38.QueryParamsResponse;
                fromAmino(object: _38.QueryParamsResponseAmino): _38.QueryParamsResponse;
                toAmino(message: _38.QueryParamsResponse): _38.QueryParamsResponseAmino;
                fromAminoMsg(object: _38.QueryParamsResponseAminoMsg): _38.QueryParamsResponse;
                toAminoMsg(message: _38.QueryParamsResponse): _38.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _38.QueryParamsResponseProtoMsg): _38.QueryParamsResponse;
                toProto(message: _38.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _38.QueryParamsResponse): _38.QueryParamsResponseProtoMsg;
            };
            QueryDenomsMetadataRequest: {
                typeUrl: string;
                encode(message: _38.QueryDenomsMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _38.QueryDenomsMetadataRequest;
                fromJSON(object: any): _38.QueryDenomsMetadataRequest;
                toJSON(message: _38.QueryDenomsMetadataRequest): unknown;
                fromPartial(object: Partial<_38.QueryDenomsMetadataRequest>): _38.QueryDenomsMetadataRequest;
                fromAmino(object: _38.QueryDenomsMetadataRequestAmino): _38.QueryDenomsMetadataRequest;
                toAmino(message: _38.QueryDenomsMetadataRequest): _38.QueryDenomsMetadataRequestAmino;
                fromAminoMsg(object: _38.QueryDenomsMetadataRequestAminoMsg): _38.QueryDenomsMetadataRequest;
                toAminoMsg(message: _38.QueryDenomsMetadataRequest): _38.QueryDenomsMetadataRequestAminoMsg;
                fromProtoMsg(message: _38.QueryDenomsMetadataRequestProtoMsg): _38.QueryDenomsMetadataRequest;
                toProto(message: _38.QueryDenomsMetadataRequest): Uint8Array;
                toProtoMsg(message: _38.QueryDenomsMetadataRequest): _38.QueryDenomsMetadataRequestProtoMsg;
            };
            QueryDenomsMetadataResponse: {
                typeUrl: string;
                encode(message: _38.QueryDenomsMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _38.QueryDenomsMetadataResponse;
                fromJSON(object: any): _38.QueryDenomsMetadataResponse;
                toJSON(message: _38.QueryDenomsMetadataResponse): unknown;
                fromPartial(object: Partial<_38.QueryDenomsMetadataResponse>): _38.QueryDenomsMetadataResponse;
                fromAmino(object: _38.QueryDenomsMetadataResponseAmino): _38.QueryDenomsMetadataResponse;
                toAmino(message: _38.QueryDenomsMetadataResponse): _38.QueryDenomsMetadataResponseAmino;
                fromAminoMsg(object: _38.QueryDenomsMetadataResponseAminoMsg): _38.QueryDenomsMetadataResponse;
                toAminoMsg(message: _38.QueryDenomsMetadataResponse): _38.QueryDenomsMetadataResponseAminoMsg;
                fromProtoMsg(message: _38.QueryDenomsMetadataResponseProtoMsg): _38.QueryDenomsMetadataResponse;
                toProto(message: _38.QueryDenomsMetadataResponse): Uint8Array;
                toProtoMsg(message: _38.QueryDenomsMetadataResponse): _38.QueryDenomsMetadataResponseProtoMsg;
            };
            QueryDenomMetadataRequest: {
                typeUrl: string;
                encode(message: _38.QueryDenomMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _38.QueryDenomMetadataRequest;
                fromJSON(object: any): _38.QueryDenomMetadataRequest;
                toJSON(message: _38.QueryDenomMetadataRequest): unknown;
                fromPartial(object: Partial<_38.QueryDenomMetadataRequest>): _38.QueryDenomMetadataRequest;
                fromAmino(object: _38.QueryDenomMetadataRequestAmino): _38.QueryDenomMetadataRequest;
                toAmino(message: _38.QueryDenomMetadataRequest): _38.QueryDenomMetadataRequestAmino;
                fromAminoMsg(object: _38.QueryDenomMetadataRequestAminoMsg): _38.QueryDenomMetadataRequest;
                toAminoMsg(message: _38.QueryDenomMetadataRequest): _38.QueryDenomMetadataRequestAminoMsg;
                fromProtoMsg(message: _38.QueryDenomMetadataRequestProtoMsg): _38.QueryDenomMetadataRequest;
                toProto(message: _38.QueryDenomMetadataRequest): Uint8Array;
                toProtoMsg(message: _38.QueryDenomMetadataRequest): _38.QueryDenomMetadataRequestProtoMsg;
            };
            QueryDenomMetadataResponse: {
                typeUrl: string;
                encode(message: _38.QueryDenomMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _38.QueryDenomMetadataResponse;
                fromJSON(object: any): _38.QueryDenomMetadataResponse;
                toJSON(message: _38.QueryDenomMetadataResponse): unknown;
                fromPartial(object: Partial<_38.QueryDenomMetadataResponse>): _38.QueryDenomMetadataResponse;
                fromAmino(object: _38.QueryDenomMetadataResponseAmino): _38.QueryDenomMetadataResponse;
                toAmino(message: _38.QueryDenomMetadataResponse): _38.QueryDenomMetadataResponseAmino;
                fromAminoMsg(object: _38.QueryDenomMetadataResponseAminoMsg): _38.QueryDenomMetadataResponse;
                toAminoMsg(message: _38.QueryDenomMetadataResponse): _38.QueryDenomMetadataResponseAminoMsg;
                fromProtoMsg(message: _38.QueryDenomMetadataResponseProtoMsg): _38.QueryDenomMetadataResponse;
                toProto(message: _38.QueryDenomMetadataResponse): Uint8Array;
                toProtoMsg(message: _38.QueryDenomMetadataResponse): _38.QueryDenomMetadataResponseProtoMsg;
            };
            QueryDenomMetadataByQueryStringRequest: {
                typeUrl: string;
                encode(message: _38.QueryDenomMetadataByQueryStringRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _38.QueryDenomMetadataByQueryStringRequest;
                fromJSON(object: any): _38.QueryDenomMetadataByQueryStringRequest;
                toJSON(message: _38.QueryDenomMetadataByQueryStringRequest): unknown;
                fromPartial(object: Partial<_38.QueryDenomMetadataByQueryStringRequest>): _38.QueryDenomMetadataByQueryStringRequest;
                fromAmino(object: _38.QueryDenomMetadataByQueryStringRequestAmino): _38.QueryDenomMetadataByQueryStringRequest;
                toAmino(message: _38.QueryDenomMetadataByQueryStringRequest): _38.QueryDenomMetadataByQueryStringRequestAmino;
                fromAminoMsg(object: _38.QueryDenomMetadataByQueryStringRequestAminoMsg): _38.QueryDenomMetadataByQueryStringRequest;
                toAminoMsg(message: _38.QueryDenomMetadataByQueryStringRequest): _38.QueryDenomMetadataByQueryStringRequestAminoMsg;
                fromProtoMsg(message: _38.QueryDenomMetadataByQueryStringRequestProtoMsg): _38.QueryDenomMetadataByQueryStringRequest;
                toProto(message: _38.QueryDenomMetadataByQueryStringRequest): Uint8Array;
                toProtoMsg(message: _38.QueryDenomMetadataByQueryStringRequest): _38.QueryDenomMetadataByQueryStringRequestProtoMsg;
            };
            QueryDenomMetadataByQueryStringResponse: {
                typeUrl: string;
                encode(message: _38.QueryDenomMetadataByQueryStringResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _38.QueryDenomMetadataByQueryStringResponse;
                fromJSON(object: any): _38.QueryDenomMetadataByQueryStringResponse;
                toJSON(message: _38.QueryDenomMetadataByQueryStringResponse): unknown;
                fromPartial(object: Partial<_38.QueryDenomMetadataByQueryStringResponse>): _38.QueryDenomMetadataByQueryStringResponse;
                fromAmino(object: _38.QueryDenomMetadataByQueryStringResponseAmino): _38.QueryDenomMetadataByQueryStringResponse;
                toAmino(message: _38.QueryDenomMetadataByQueryStringResponse): _38.QueryDenomMetadataByQueryStringResponseAmino;
                fromAminoMsg(object: _38.QueryDenomMetadataByQueryStringResponseAminoMsg): _38.QueryDenomMetadataByQueryStringResponse;
                toAminoMsg(message: _38.QueryDenomMetadataByQueryStringResponse): _38.QueryDenomMetadataByQueryStringResponseAminoMsg;
                fromProtoMsg(message: _38.QueryDenomMetadataByQueryStringResponseProtoMsg): _38.QueryDenomMetadataByQueryStringResponse;
                toProto(message: _38.QueryDenomMetadataByQueryStringResponse): Uint8Array;
                toProtoMsg(message: _38.QueryDenomMetadataByQueryStringResponse): _38.QueryDenomMetadataByQueryStringResponseProtoMsg;
            };
            QueryDenomOwnersRequest: {
                typeUrl: string;
                encode(message: _38.QueryDenomOwnersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _38.QueryDenomOwnersRequest;
                fromJSON(object: any): _38.QueryDenomOwnersRequest;
                toJSON(message: _38.QueryDenomOwnersRequest): unknown;
                fromPartial(object: Partial<_38.QueryDenomOwnersRequest>): _38.QueryDenomOwnersRequest;
                fromAmino(object: _38.QueryDenomOwnersRequestAmino): _38.QueryDenomOwnersRequest;
                toAmino(message: _38.QueryDenomOwnersRequest): _38.QueryDenomOwnersRequestAmino;
                fromAminoMsg(object: _38.QueryDenomOwnersRequestAminoMsg): _38.QueryDenomOwnersRequest;
                toAminoMsg(message: _38.QueryDenomOwnersRequest): _38.QueryDenomOwnersRequestAminoMsg;
                fromProtoMsg(message: _38.QueryDenomOwnersRequestProtoMsg): _38.QueryDenomOwnersRequest;
                toProto(message: _38.QueryDenomOwnersRequest): Uint8Array;
                toProtoMsg(message: _38.QueryDenomOwnersRequest): _38.QueryDenomOwnersRequestProtoMsg;
            };
            DenomOwner: {
                typeUrl: string;
                encode(message: _38.DenomOwner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _38.DenomOwner;
                fromJSON(object: any): _38.DenomOwner;
                toJSON(message: _38.DenomOwner): unknown;
                fromPartial(object: Partial<_38.DenomOwner>): _38.DenomOwner;
                fromAmino(object: _38.DenomOwnerAmino): _38.DenomOwner;
                toAmino(message: _38.DenomOwner): _38.DenomOwnerAmino;
                fromAminoMsg(object: _38.DenomOwnerAminoMsg): _38.DenomOwner;
                toAminoMsg(message: _38.DenomOwner): _38.DenomOwnerAminoMsg;
                fromProtoMsg(message: _38.DenomOwnerProtoMsg): _38.DenomOwner;
                toProto(message: _38.DenomOwner): Uint8Array;
                toProtoMsg(message: _38.DenomOwner): _38.DenomOwnerProtoMsg;
            };
            QueryDenomOwnersResponse: {
                typeUrl: string;
                encode(message: _38.QueryDenomOwnersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _38.QueryDenomOwnersResponse;
                fromJSON(object: any): _38.QueryDenomOwnersResponse;
                toJSON(message: _38.QueryDenomOwnersResponse): unknown;
                fromPartial(object: Partial<_38.QueryDenomOwnersResponse>): _38.QueryDenomOwnersResponse;
                fromAmino(object: _38.QueryDenomOwnersResponseAmino): _38.QueryDenomOwnersResponse;
                toAmino(message: _38.QueryDenomOwnersResponse): _38.QueryDenomOwnersResponseAmino;
                fromAminoMsg(object: _38.QueryDenomOwnersResponseAminoMsg): _38.QueryDenomOwnersResponse;
                toAminoMsg(message: _38.QueryDenomOwnersResponse): _38.QueryDenomOwnersResponseAminoMsg;
                fromProtoMsg(message: _38.QueryDenomOwnersResponseProtoMsg): _38.QueryDenomOwnersResponse;
                toProto(message: _38.QueryDenomOwnersResponse): Uint8Array;
                toProtoMsg(message: _38.QueryDenomOwnersResponse): _38.QueryDenomOwnersResponseProtoMsg;
            };
            QuerySendEnabledRequest: {
                typeUrl: string;
                encode(message: _38.QuerySendEnabledRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _38.QuerySendEnabledRequest;
                fromJSON(object: any): _38.QuerySendEnabledRequest;
                toJSON(message: _38.QuerySendEnabledRequest): unknown;
                fromPartial(object: Partial<_38.QuerySendEnabledRequest>): _38.QuerySendEnabledRequest;
                fromAmino(object: _38.QuerySendEnabledRequestAmino): _38.QuerySendEnabledRequest;
                toAmino(message: _38.QuerySendEnabledRequest): _38.QuerySendEnabledRequestAmino;
                fromAminoMsg(object: _38.QuerySendEnabledRequestAminoMsg): _38.QuerySendEnabledRequest;
                toAminoMsg(message: _38.QuerySendEnabledRequest): _38.QuerySendEnabledRequestAminoMsg;
                fromProtoMsg(message: _38.QuerySendEnabledRequestProtoMsg): _38.QuerySendEnabledRequest;
                toProto(message: _38.QuerySendEnabledRequest): Uint8Array;
                toProtoMsg(message: _38.QuerySendEnabledRequest): _38.QuerySendEnabledRequestProtoMsg;
            };
            QuerySendEnabledResponse: {
                typeUrl: string;
                encode(message: _38.QuerySendEnabledResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _38.QuerySendEnabledResponse;
                fromJSON(object: any): _38.QuerySendEnabledResponse;
                toJSON(message: _38.QuerySendEnabledResponse): unknown;
                fromPartial(object: Partial<_38.QuerySendEnabledResponse>): _38.QuerySendEnabledResponse;
                fromAmino(object: _38.QuerySendEnabledResponseAmino): _38.QuerySendEnabledResponse;
                toAmino(message: _38.QuerySendEnabledResponse): _38.QuerySendEnabledResponseAmino;
                fromAminoMsg(object: _38.QuerySendEnabledResponseAminoMsg): _38.QuerySendEnabledResponse;
                toAminoMsg(message: _38.QuerySendEnabledResponse): _38.QuerySendEnabledResponseAminoMsg;
                fromProtoMsg(message: _38.QuerySendEnabledResponseProtoMsg): _38.QuerySendEnabledResponse;
                toProto(message: _38.QuerySendEnabledResponse): Uint8Array;
                toProtoMsg(message: _38.QuerySendEnabledResponse): _38.QuerySendEnabledResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _37.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _37.GenesisState;
                fromJSON(object: any): _37.GenesisState;
                toJSON(message: _37.GenesisState): unknown;
                fromPartial(object: Partial<_37.GenesisState>): _37.GenesisState;
                fromAmino(object: _37.GenesisStateAmino): _37.GenesisState;
                toAmino(message: _37.GenesisState): _37.GenesisStateAmino;
                fromAminoMsg(object: _37.GenesisStateAminoMsg): _37.GenesisState;
                toAminoMsg(message: _37.GenesisState): _37.GenesisStateAminoMsg;
                fromProtoMsg(message: _37.GenesisStateProtoMsg): _37.GenesisState;
                toProto(message: _37.GenesisState): Uint8Array;
                toProtoMsg(message: _37.GenesisState): _37.GenesisStateProtoMsg;
            };
            Balance: {
                typeUrl: string;
                encode(message: _37.Balance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _37.Balance;
                fromJSON(object: any): _37.Balance;
                toJSON(message: _37.Balance): unknown;
                fromPartial(object: Partial<_37.Balance>): _37.Balance;
                fromAmino(object: _37.BalanceAmino): _37.Balance;
                toAmino(message: _37.Balance): _37.BalanceAmino;
                fromAminoMsg(object: _37.BalanceAminoMsg): _37.Balance;
                toAminoMsg(message: _37.Balance): _37.BalanceAminoMsg;
                fromProtoMsg(message: _37.BalanceProtoMsg): _37.Balance;
                toProto(message: _37.Balance): Uint8Array;
                toProtoMsg(message: _37.Balance): _37.BalanceProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _36.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _36.Params;
                fromJSON(object: any): _36.Params;
                toJSON(message: _36.Params): unknown;
                fromPartial(object: Partial<_36.Params>): _36.Params;
                fromAmino(object: _36.ParamsAmino): _36.Params;
                toAmino(message: _36.Params): _36.ParamsAmino;
                fromAminoMsg(object: _36.ParamsAminoMsg): _36.Params;
                toAminoMsg(message: _36.Params): _36.ParamsAminoMsg;
                fromProtoMsg(message: _36.ParamsProtoMsg): _36.Params;
                toProto(message: _36.Params): Uint8Array;
                toProtoMsg(message: _36.Params): _36.ParamsProtoMsg;
            };
            SendEnabled: {
                typeUrl: string;
                encode(message: _36.SendEnabled, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _36.SendEnabled;
                fromJSON(object: any): _36.SendEnabled;
                toJSON(message: _36.SendEnabled): unknown;
                fromPartial(object: Partial<_36.SendEnabled>): _36.SendEnabled;
                fromAmino(object: _36.SendEnabledAmino): _36.SendEnabled;
                toAmino(message: _36.SendEnabled): _36.SendEnabledAmino;
                fromAminoMsg(object: _36.SendEnabledAminoMsg): _36.SendEnabled;
                toAminoMsg(message: _36.SendEnabled): _36.SendEnabledAminoMsg;
                fromProtoMsg(message: _36.SendEnabledProtoMsg): _36.SendEnabled;
                toProto(message: _36.SendEnabled): Uint8Array;
                toProtoMsg(message: _36.SendEnabled): _36.SendEnabledProtoMsg;
            };
            Input: {
                typeUrl: string;
                encode(message: _36.Input, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _36.Input;
                fromJSON(object: any): _36.Input;
                toJSON(message: _36.Input): unknown;
                fromPartial(object: Partial<_36.Input>): _36.Input;
                fromAmino(object: _36.InputAmino): _36.Input;
                toAmino(message: _36.Input): _36.InputAmino;
                fromAminoMsg(object: _36.InputAminoMsg): _36.Input;
                toAminoMsg(message: _36.Input): _36.InputAminoMsg;
                fromProtoMsg(message: _36.InputProtoMsg): _36.Input;
                toProto(message: _36.Input): Uint8Array;
                toProtoMsg(message: _36.Input): _36.InputProtoMsg;
            };
            Output: {
                typeUrl: string;
                encode(message: _36.Output, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _36.Output;
                fromJSON(object: any): _36.Output;
                toJSON(message: _36.Output): unknown;
                fromPartial(object: Partial<_36.Output>): _36.Output;
                fromAmino(object: _36.OutputAmino): _36.Output;
                toAmino(message: _36.Output): _36.OutputAmino;
                fromAminoMsg(object: _36.OutputAminoMsg): _36.Output;
                toAminoMsg(message: _36.Output): _36.OutputAminoMsg;
                fromProtoMsg(message: _36.OutputProtoMsg): _36.Output;
                toProto(message: _36.Output): Uint8Array;
                toProtoMsg(message: _36.Output): _36.OutputProtoMsg;
            };
            Supply: {
                typeUrl: string;
                encode(message: _36.Supply, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _36.Supply;
                fromJSON(object: any): _36.Supply;
                toJSON(message: _36.Supply): unknown;
                fromPartial(object: Partial<_36.Supply>): _36.Supply;
                fromAmino(object: _36.SupplyAmino): _36.Supply;
                toAmino(message: _36.Supply): _36.SupplyAmino;
                fromAminoMsg(object: _36.SupplyAminoMsg): _36.Supply;
                toAminoMsg(message: _36.Supply): _36.SupplyAminoMsg;
                fromProtoMsg(message: _36.SupplyProtoMsg): _36.Supply;
                toProto(message: _36.Supply): Uint8Array;
                toProtoMsg(message: _36.Supply): _36.SupplyProtoMsg;
            };
            DenomUnit: {
                typeUrl: string;
                encode(message: _36.DenomUnit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _36.DenomUnit;
                fromJSON(object: any): _36.DenomUnit;
                toJSON(message: _36.DenomUnit): unknown;
                fromPartial(object: Partial<_36.DenomUnit>): _36.DenomUnit;
                fromAmino(object: _36.DenomUnitAmino): _36.DenomUnit;
                toAmino(message: _36.DenomUnit): _36.DenomUnitAmino;
                fromAminoMsg(object: _36.DenomUnitAminoMsg): _36.DenomUnit;
                toAminoMsg(message: _36.DenomUnit): _36.DenomUnitAminoMsg;
                fromProtoMsg(message: _36.DenomUnitProtoMsg): _36.DenomUnit;
                toProto(message: _36.DenomUnit): Uint8Array;
                toProtoMsg(message: _36.DenomUnit): _36.DenomUnitProtoMsg;
            };
            Metadata: {
                typeUrl: string;
                encode(message: _36.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _36.Metadata;
                fromJSON(object: any): _36.Metadata;
                toJSON(message: _36.Metadata): unknown;
                fromPartial(object: Partial<_36.Metadata>): _36.Metadata;
                fromAmino(object: _36.MetadataAmino): _36.Metadata;
                toAmino(message: _36.Metadata): _36.MetadataAmino;
                fromAminoMsg(object: _36.MetadataAminoMsg): _36.Metadata;
                toAminoMsg(message: _36.Metadata): _36.MetadataAminoMsg;
                fromProtoMsg(message: _36.MetadataProtoMsg): _36.Metadata;
                toProto(message: _36.Metadata): Uint8Array;
                toProtoMsg(message: _36.Metadata): _36.MetadataProtoMsg;
            };
            SendAuthorization: {
                typeUrl: string;
                encode(message: _35.SendAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _35.SendAuthorization;
                fromJSON(object: any): _35.SendAuthorization;
                toJSON(message: _35.SendAuthorization): unknown;
                fromPartial(object: Partial<_35.SendAuthorization>): _35.SendAuthorization;
                fromAmino(object: _35.SendAuthorizationAmino): _35.SendAuthorization;
                toAmino(message: _35.SendAuthorization): _35.SendAuthorizationAmino;
                fromAminoMsg(object: _35.SendAuthorizationAminoMsg): _35.SendAuthorization;
                toAminoMsg(message: _35.SendAuthorization): _35.SendAuthorizationAminoMsg;
                fromProtoMsg(message: _35.SendAuthorizationProtoMsg): _35.SendAuthorization;
                toProto(message: _35.SendAuthorization): Uint8Array;
                toProtoMsg(message: _35.SendAuthorization): _35.SendAuthorizationProtoMsg;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                protobufPackage: "cosmos.base.abci.v1beta1";
                TxResponse: {
                    typeUrl: string;
                    encode(message: _40.TxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _40.TxResponse;
                    fromJSON(object: any): _40.TxResponse;
                    toJSON(message: _40.TxResponse): unknown;
                    fromPartial(object: Partial<_40.TxResponse>): _40.TxResponse;
                    fromAmino(object: _40.TxResponseAmino): _40.TxResponse;
                    toAmino(message: _40.TxResponse): _40.TxResponseAmino;
                    fromAminoMsg(object: _40.TxResponseAminoMsg): _40.TxResponse;
                    toAminoMsg(message: _40.TxResponse): _40.TxResponseAminoMsg;
                    fromProtoMsg(message: _40.TxResponseProtoMsg): _40.TxResponse;
                    toProto(message: _40.TxResponse): Uint8Array;
                    toProtoMsg(message: _40.TxResponse): _40.TxResponseProtoMsg;
                };
                ABCIMessageLog: {
                    typeUrl: string;
                    encode(message: _40.ABCIMessageLog, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _40.ABCIMessageLog;
                    fromJSON(object: any): _40.ABCIMessageLog;
                    toJSON(message: _40.ABCIMessageLog): unknown;
                    fromPartial(object: Partial<_40.ABCIMessageLog>): _40.ABCIMessageLog;
                    fromAmino(object: _40.ABCIMessageLogAmino): _40.ABCIMessageLog;
                    toAmino(message: _40.ABCIMessageLog): _40.ABCIMessageLogAmino;
                    fromAminoMsg(object: _40.ABCIMessageLogAminoMsg): _40.ABCIMessageLog;
                    toAminoMsg(message: _40.ABCIMessageLog): _40.ABCIMessageLogAminoMsg;
                    fromProtoMsg(message: _40.ABCIMessageLogProtoMsg): _40.ABCIMessageLog;
                    toProto(message: _40.ABCIMessageLog): Uint8Array;
                    toProtoMsg(message: _40.ABCIMessageLog): _40.ABCIMessageLogProtoMsg;
                };
                StringEvent: {
                    typeUrl: string;
                    encode(message: _40.StringEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _40.StringEvent;
                    fromJSON(object: any): _40.StringEvent;
                    toJSON(message: _40.StringEvent): unknown;
                    fromPartial(object: Partial<_40.StringEvent>): _40.StringEvent;
                    fromAmino(object: _40.StringEventAmino): _40.StringEvent;
                    toAmino(message: _40.StringEvent): _40.StringEventAmino;
                    fromAminoMsg(object: _40.StringEventAminoMsg): _40.StringEvent;
                    toAminoMsg(message: _40.StringEvent): _40.StringEventAminoMsg;
                    fromProtoMsg(message: _40.StringEventProtoMsg): _40.StringEvent;
                    toProto(message: _40.StringEvent): Uint8Array;
                    toProtoMsg(message: _40.StringEvent): _40.StringEventProtoMsg;
                };
                Attribute: {
                    typeUrl: string;
                    encode(message: _40.Attribute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _40.Attribute;
                    fromJSON(object: any): _40.Attribute;
                    toJSON(message: _40.Attribute): unknown;
                    fromPartial(object: Partial<_40.Attribute>): _40.Attribute;
                    fromAmino(object: _40.AttributeAmino): _40.Attribute;
                    toAmino(message: _40.Attribute): _40.AttributeAmino;
                    fromAminoMsg(object: _40.AttributeAminoMsg): _40.Attribute;
                    toAminoMsg(message: _40.Attribute): _40.AttributeAminoMsg;
                    fromProtoMsg(message: _40.AttributeProtoMsg): _40.Attribute;
                    toProto(message: _40.Attribute): Uint8Array;
                    toProtoMsg(message: _40.Attribute): _40.AttributeProtoMsg;
                };
                GasInfo: {
                    typeUrl: string;
                    encode(message: _40.GasInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _40.GasInfo;
                    fromJSON(object: any): _40.GasInfo;
                    toJSON(message: _40.GasInfo): unknown;
                    fromPartial(object: Partial<_40.GasInfo>): _40.GasInfo;
                    fromAmino(object: _40.GasInfoAmino): _40.GasInfo;
                    toAmino(message: _40.GasInfo): _40.GasInfoAmino;
                    fromAminoMsg(object: _40.GasInfoAminoMsg): _40.GasInfo;
                    toAminoMsg(message: _40.GasInfo): _40.GasInfoAminoMsg;
                    fromProtoMsg(message: _40.GasInfoProtoMsg): _40.GasInfo;
                    toProto(message: _40.GasInfo): Uint8Array;
                    toProtoMsg(message: _40.GasInfo): _40.GasInfoProtoMsg;
                };
                Result: {
                    typeUrl: string;
                    encode(message: _40.Result, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _40.Result;
                    fromJSON(object: any): _40.Result;
                    toJSON(message: _40.Result): unknown;
                    fromPartial(object: Partial<_40.Result>): _40.Result;
                    fromAmino(object: _40.ResultAmino): _40.Result;
                    toAmino(message: _40.Result): _40.ResultAmino;
                    fromAminoMsg(object: _40.ResultAminoMsg): _40.Result;
                    toAminoMsg(message: _40.Result): _40.ResultAminoMsg;
                    fromProtoMsg(message: _40.ResultProtoMsg): _40.Result;
                    toProto(message: _40.Result): Uint8Array;
                    toProtoMsg(message: _40.Result): _40.ResultProtoMsg;
                };
                SimulationResponse: {
                    typeUrl: string;
                    encode(message: _40.SimulationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _40.SimulationResponse;
                    fromJSON(object: any): _40.SimulationResponse;
                    toJSON(message: _40.SimulationResponse): unknown;
                    fromPartial(object: Partial<_40.SimulationResponse>): _40.SimulationResponse;
                    fromAmino(object: _40.SimulationResponseAmino): _40.SimulationResponse;
                    toAmino(message: _40.SimulationResponse): _40.SimulationResponseAmino;
                    fromAminoMsg(object: _40.SimulationResponseAminoMsg): _40.SimulationResponse;
                    toAminoMsg(message: _40.SimulationResponse): _40.SimulationResponseAminoMsg;
                    fromProtoMsg(message: _40.SimulationResponseProtoMsg): _40.SimulationResponse;
                    toProto(message: _40.SimulationResponse): Uint8Array;
                    toProtoMsg(message: _40.SimulationResponse): _40.SimulationResponseProtoMsg;
                };
                MsgData: {
                    typeUrl: string;
                    encode(message: _40.MsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _40.MsgData;
                    fromJSON(object: any): _40.MsgData;
                    toJSON(message: _40.MsgData): unknown;
                    fromPartial(object: Partial<_40.MsgData>): _40.MsgData;
                    fromAmino(object: _40.MsgDataAmino): _40.MsgData;
                    toAmino(message: _40.MsgData): _40.MsgDataAmino;
                    fromAminoMsg(object: _40.MsgDataAminoMsg): _40.MsgData;
                    toAminoMsg(message: _40.MsgData): _40.MsgDataAminoMsg;
                    fromProtoMsg(message: _40.MsgDataProtoMsg): _40.MsgData;
                    toProto(message: _40.MsgData): Uint8Array;
                    toProtoMsg(message: _40.MsgData): _40.MsgDataProtoMsg;
                };
                TxMsgData: {
                    typeUrl: string;
                    encode(message: _40.TxMsgData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _40.TxMsgData;
                    fromJSON(object: any): _40.TxMsgData;
                    toJSON(message: _40.TxMsgData): unknown;
                    fromPartial(object: Partial<_40.TxMsgData>): _40.TxMsgData;
                    fromAmino(object: _40.TxMsgDataAmino): _40.TxMsgData;
                    toAmino(message: _40.TxMsgData): _40.TxMsgDataAmino;
                    fromAminoMsg(object: _40.TxMsgDataAminoMsg): _40.TxMsgData;
                    toAminoMsg(message: _40.TxMsgData): _40.TxMsgDataAminoMsg;
                    fromProtoMsg(message: _40.TxMsgDataProtoMsg): _40.TxMsgData;
                    toProto(message: _40.TxMsgData): Uint8Array;
                    toProtoMsg(message: _40.TxMsgData): _40.TxMsgDataProtoMsg;
                };
                SearchTxsResult: {
                    typeUrl: string;
                    encode(message: _40.SearchTxsResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _40.SearchTxsResult;
                    fromJSON(object: any): _40.SearchTxsResult;
                    toJSON(message: _40.SearchTxsResult): unknown;
                    fromPartial(object: Partial<_40.SearchTxsResult>): _40.SearchTxsResult;
                    fromAmino(object: _40.SearchTxsResultAmino): _40.SearchTxsResult;
                    toAmino(message: _40.SearchTxsResult): _40.SearchTxsResultAmino;
                    fromAminoMsg(object: _40.SearchTxsResultAminoMsg): _40.SearchTxsResult;
                    toAminoMsg(message: _40.SearchTxsResult): _40.SearchTxsResultAminoMsg;
                    fromProtoMsg(message: _40.SearchTxsResultProtoMsg): _40.SearchTxsResult;
                    toProto(message: _40.SearchTxsResult): Uint8Array;
                    toProtoMsg(message: _40.SearchTxsResult): _40.SearchTxsResultProtoMsg;
                };
                SearchBlocksResult: {
                    typeUrl: string;
                    encode(message: _40.SearchBlocksResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _40.SearchBlocksResult;
                    fromJSON(object: any): _40.SearchBlocksResult;
                    toJSON(message: _40.SearchBlocksResult): unknown;
                    fromPartial(object: Partial<_40.SearchBlocksResult>): _40.SearchBlocksResult;
                    fromAmino(object: _40.SearchBlocksResultAmino): _40.SearchBlocksResult;
                    toAmino(message: _40.SearchBlocksResult): _40.SearchBlocksResultAmino;
                    fromAminoMsg(object: _40.SearchBlocksResultAminoMsg): _40.SearchBlocksResult;
                    toAminoMsg(message: _40.SearchBlocksResult): _40.SearchBlocksResultAminoMsg;
                    fromProtoMsg(message: _40.SearchBlocksResultProtoMsg): _40.SearchBlocksResult;
                    toProto(message: _40.SearchBlocksResult): Uint8Array;
                    toProtoMsg(message: _40.SearchBlocksResult): _40.SearchBlocksResultProtoMsg;
                };
            };
        }
        namespace node {
            const v1beta1: {
                Service: typeof _247.Service;
                ServiceClientImpl: typeof _247.ServiceClientImpl;
                LCDQueryClient: typeof _229.LCDQueryClient;
                protobufPackage: "cosmos.base.node.v1beta1";
                ConfigRequest: {
                    typeUrl: string;
                    encode(_: _41.ConfigRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _41.ConfigRequest;
                    fromJSON(_: any): _41.ConfigRequest;
                    toJSON(_: _41.ConfigRequest): unknown;
                    fromPartial(_: Partial<_41.ConfigRequest>): _41.ConfigRequest;
                    fromAmino(_: _41.ConfigRequestAmino): _41.ConfigRequest;
                    toAmino(_: _41.ConfigRequest): _41.ConfigRequestAmino;
                    fromAminoMsg(object: _41.ConfigRequestAminoMsg): _41.ConfigRequest;
                    toAminoMsg(message: _41.ConfigRequest): _41.ConfigRequestAminoMsg;
                    fromProtoMsg(message: _41.ConfigRequestProtoMsg): _41.ConfigRequest;
                    toProto(message: _41.ConfigRequest): Uint8Array;
                    toProtoMsg(message: _41.ConfigRequest): _41.ConfigRequestProtoMsg;
                };
                ConfigResponse: {
                    typeUrl: string;
                    encode(message: _41.ConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _41.ConfigResponse;
                    fromJSON(object: any): _41.ConfigResponse;
                    toJSON(message: _41.ConfigResponse): unknown;
                    fromPartial(object: Partial<_41.ConfigResponse>): _41.ConfigResponse;
                    fromAmino(object: _41.ConfigResponseAmino): _41.ConfigResponse;
                    toAmino(message: _41.ConfigResponse): _41.ConfigResponseAmino;
                    fromAminoMsg(object: _41.ConfigResponseAminoMsg): _41.ConfigResponse;
                    toAminoMsg(message: _41.ConfigResponse): _41.ConfigResponseAminoMsg;
                    fromProtoMsg(message: _41.ConfigResponseProtoMsg): _41.ConfigResponse;
                    toProto(message: _41.ConfigResponse): Uint8Array;
                    toProtoMsg(message: _41.ConfigResponse): _41.ConfigResponseProtoMsg;
                };
                StatusRequest: {
                    typeUrl: string;
                    encode(_: _41.StatusRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _41.StatusRequest;
                    fromJSON(_: any): _41.StatusRequest;
                    toJSON(_: _41.StatusRequest): unknown;
                    fromPartial(_: Partial<_41.StatusRequest>): _41.StatusRequest;
                    fromAmino(_: _41.StatusRequestAmino): _41.StatusRequest;
                    toAmino(_: _41.StatusRequest): _41.StatusRequestAmino;
                    fromAminoMsg(object: _41.StatusRequestAminoMsg): _41.StatusRequest;
                    toAminoMsg(message: _41.StatusRequest): _41.StatusRequestAminoMsg;
                    fromProtoMsg(message: _41.StatusRequestProtoMsg): _41.StatusRequest;
                    toProto(message: _41.StatusRequest): Uint8Array;
                    toProtoMsg(message: _41.StatusRequest): _41.StatusRequestProtoMsg;
                };
                StatusResponse: {
                    typeUrl: string;
                    encode(message: _41.StatusResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _41.StatusResponse;
                    fromJSON(object: any): _41.StatusResponse;
                    toJSON(message: _41.StatusResponse): unknown;
                    fromPartial(object: Partial<_41.StatusResponse>): _41.StatusResponse;
                    fromAmino(object: _41.StatusResponseAmino): _41.StatusResponse;
                    toAmino(message: _41.StatusResponse): _41.StatusResponseAmino;
                    fromAminoMsg(object: _41.StatusResponseAminoMsg): _41.StatusResponse;
                    toAminoMsg(message: _41.StatusResponse): _41.StatusResponseAminoMsg;
                    fromProtoMsg(message: _41.StatusResponseProtoMsg): _41.StatusResponse;
                    toProto(message: _41.StatusResponse): Uint8Array;
                    toProtoMsg(message: _41.StatusResponse): _41.StatusResponseProtoMsg;
                };
            };
        }
        namespace query {
            const v1beta1: {
                protobufPackage: "cosmos.base.query.v1beta1";
                PageRequest: {
                    typeUrl: string;
                    encode(message: _42.PageRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _42.PageRequest;
                    fromJSON(object: any): _42.PageRequest;
                    toJSON(message: _42.PageRequest): unknown;
                    fromPartial(object: Partial<_42.PageRequest>): _42.PageRequest;
                    fromAmino(object: _42.PageRequestAmino): _42.PageRequest;
                    toAmino(message: _42.PageRequest): _42.PageRequestAmino;
                    fromAminoMsg(object: _42.PageRequestAminoMsg): _42.PageRequest;
                    toAminoMsg(message: _42.PageRequest): _42.PageRequestAminoMsg;
                    fromProtoMsg(message: _42.PageRequestProtoMsg): _42.PageRequest;
                    toProto(message: _42.PageRequest): Uint8Array;
                    toProtoMsg(message: _42.PageRequest): _42.PageRequestProtoMsg;
                };
                PageResponse: {
                    typeUrl: string;
                    encode(message: _42.PageResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _42.PageResponse;
                    fromJSON(object: any): _42.PageResponse;
                    toJSON(message: _42.PageResponse): unknown;
                    fromPartial(object: Partial<_42.PageResponse>): _42.PageResponse;
                    fromAmino(object: _42.PageResponseAmino): _42.PageResponse;
                    toAmino(message: _42.PageResponse): _42.PageResponseAmino;
                    fromAminoMsg(object: _42.PageResponseAminoMsg): _42.PageResponse;
                    toAminoMsg(message: _42.PageResponse): _42.PageResponseAminoMsg;
                    fromProtoMsg(message: _42.PageResponseProtoMsg): _42.PageResponse;
                    toProto(message: _42.PageResponse): Uint8Array;
                    toProtoMsg(message: _42.PageResponse): _42.PageResponseProtoMsg;
                };
            };
        }
        namespace reflection {
            const v2alpha1: {
                protobufPackage: "cosmos.base.reflection.v2alpha1";
                AppDescriptor: {
                    typeUrl: string;
                    encode(message: _43.AppDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _43.AppDescriptor;
                    fromJSON(object: any): _43.AppDescriptor;
                    toJSON(message: _43.AppDescriptor): unknown;
                    fromPartial(object: Partial<_43.AppDescriptor>): _43.AppDescriptor;
                    fromAmino(object: _43.AppDescriptorAmino): _43.AppDescriptor;
                    toAmino(message: _43.AppDescriptor): _43.AppDescriptorAmino;
                    fromAminoMsg(object: _43.AppDescriptorAminoMsg): _43.AppDescriptor;
                    toAminoMsg(message: _43.AppDescriptor): _43.AppDescriptorAminoMsg;
                    fromProtoMsg(message: _43.AppDescriptorProtoMsg): _43.AppDescriptor;
                    toProto(message: _43.AppDescriptor): Uint8Array;
                    toProtoMsg(message: _43.AppDescriptor): _43.AppDescriptorProtoMsg;
                };
                TxDescriptor: {
                    typeUrl: string;
                    encode(message: _43.TxDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _43.TxDescriptor;
                    fromJSON(object: any): _43.TxDescriptor;
                    toJSON(message: _43.TxDescriptor): unknown;
                    fromPartial(object: Partial<_43.TxDescriptor>): _43.TxDescriptor;
                    fromAmino(object: _43.TxDescriptorAmino): _43.TxDescriptor;
                    toAmino(message: _43.TxDescriptor): _43.TxDescriptorAmino;
                    fromAminoMsg(object: _43.TxDescriptorAminoMsg): _43.TxDescriptor;
                    toAminoMsg(message: _43.TxDescriptor): _43.TxDescriptorAminoMsg;
                    fromProtoMsg(message: _43.TxDescriptorProtoMsg): _43.TxDescriptor;
                    toProto(message: _43.TxDescriptor): Uint8Array;
                    toProtoMsg(message: _43.TxDescriptor): _43.TxDescriptorProtoMsg;
                };
                AuthnDescriptor: {
                    typeUrl: string;
                    encode(message: _43.AuthnDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _43.AuthnDescriptor;
                    fromJSON(object: any): _43.AuthnDescriptor;
                    toJSON(message: _43.AuthnDescriptor): unknown;
                    fromPartial(object: Partial<_43.AuthnDescriptor>): _43.AuthnDescriptor;
                    fromAmino(object: _43.AuthnDescriptorAmino): _43.AuthnDescriptor;
                    toAmino(message: _43.AuthnDescriptor): _43.AuthnDescriptorAmino;
                    fromAminoMsg(object: _43.AuthnDescriptorAminoMsg): _43.AuthnDescriptor;
                    toAminoMsg(message: _43.AuthnDescriptor): _43.AuthnDescriptorAminoMsg;
                    fromProtoMsg(message: _43.AuthnDescriptorProtoMsg): _43.AuthnDescriptor;
                    toProto(message: _43.AuthnDescriptor): Uint8Array;
                    toProtoMsg(message: _43.AuthnDescriptor): _43.AuthnDescriptorProtoMsg;
                };
                SigningModeDescriptor: {
                    typeUrl: string;
                    encode(message: _43.SigningModeDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _43.SigningModeDescriptor;
                    fromJSON(object: any): _43.SigningModeDescriptor;
                    toJSON(message: _43.SigningModeDescriptor): unknown;
                    fromPartial(object: Partial<_43.SigningModeDescriptor>): _43.SigningModeDescriptor;
                    fromAmino(object: _43.SigningModeDescriptorAmino): _43.SigningModeDescriptor;
                    toAmino(message: _43.SigningModeDescriptor): _43.SigningModeDescriptorAmino;
                    fromAminoMsg(object: _43.SigningModeDescriptorAminoMsg): _43.SigningModeDescriptor;
                    toAminoMsg(message: _43.SigningModeDescriptor): _43.SigningModeDescriptorAminoMsg;
                    fromProtoMsg(message: _43.SigningModeDescriptorProtoMsg): _43.SigningModeDescriptor;
                    toProto(message: _43.SigningModeDescriptor): Uint8Array;
                    toProtoMsg(message: _43.SigningModeDescriptor): _43.SigningModeDescriptorProtoMsg;
                };
                ChainDescriptor: {
                    typeUrl: string;
                    encode(message: _43.ChainDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _43.ChainDescriptor;
                    fromJSON(object: any): _43.ChainDescriptor;
                    toJSON(message: _43.ChainDescriptor): unknown;
                    fromPartial(object: Partial<_43.ChainDescriptor>): _43.ChainDescriptor;
                    fromAmino(object: _43.ChainDescriptorAmino): _43.ChainDescriptor;
                    toAmino(message: _43.ChainDescriptor): _43.ChainDescriptorAmino;
                    fromAminoMsg(object: _43.ChainDescriptorAminoMsg): _43.ChainDescriptor;
                    toAminoMsg(message: _43.ChainDescriptor): _43.ChainDescriptorAminoMsg;
                    fromProtoMsg(message: _43.ChainDescriptorProtoMsg): _43.ChainDescriptor;
                    toProto(message: _43.ChainDescriptor): Uint8Array;
                    toProtoMsg(message: _43.ChainDescriptor): _43.ChainDescriptorProtoMsg;
                };
                CodecDescriptor: {
                    typeUrl: string;
                    encode(message: _43.CodecDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _43.CodecDescriptor;
                    fromJSON(object: any): _43.CodecDescriptor;
                    toJSON(message: _43.CodecDescriptor): unknown;
                    fromPartial(object: Partial<_43.CodecDescriptor>): _43.CodecDescriptor;
                    fromAmino(object: _43.CodecDescriptorAmino): _43.CodecDescriptor;
                    toAmino(message: _43.CodecDescriptor): _43.CodecDescriptorAmino;
                    fromAminoMsg(object: _43.CodecDescriptorAminoMsg): _43.CodecDescriptor;
                    toAminoMsg(message: _43.CodecDescriptor): _43.CodecDescriptorAminoMsg;
                    fromProtoMsg(message: _43.CodecDescriptorProtoMsg): _43.CodecDescriptor;
                    toProto(message: _43.CodecDescriptor): Uint8Array;
                    toProtoMsg(message: _43.CodecDescriptor): _43.CodecDescriptorProtoMsg;
                };
                InterfaceDescriptor: {
                    typeUrl: string;
                    encode(message: _43.InterfaceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _43.InterfaceDescriptor;
                    fromJSON(object: any): _43.InterfaceDescriptor;
                    toJSON(message: _43.InterfaceDescriptor): unknown;
                    fromPartial(object: Partial<_43.InterfaceDescriptor>): _43.InterfaceDescriptor;
                    fromAmino(object: _43.InterfaceDescriptorAmino): _43.InterfaceDescriptor;
                    toAmino(message: _43.InterfaceDescriptor): _43.InterfaceDescriptorAmino;
                    fromAminoMsg(object: _43.InterfaceDescriptorAminoMsg): _43.InterfaceDescriptor;
                    toAminoMsg(message: _43.InterfaceDescriptor): _43.InterfaceDescriptorAminoMsg;
                    fromProtoMsg(message: _43.InterfaceDescriptorProtoMsg): _43.InterfaceDescriptor;
                    toProto(message: _43.InterfaceDescriptor): Uint8Array;
                    toProtoMsg(message: _43.InterfaceDescriptor): _43.InterfaceDescriptorProtoMsg;
                };
                InterfaceImplementerDescriptor: {
                    typeUrl: string;
                    encode(message: _43.InterfaceImplementerDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _43.InterfaceImplementerDescriptor;
                    fromJSON(object: any): _43.InterfaceImplementerDescriptor;
                    toJSON(message: _43.InterfaceImplementerDescriptor): unknown;
                    fromPartial(object: Partial<_43.InterfaceImplementerDescriptor>): _43.InterfaceImplementerDescriptor;
                    fromAmino(object: _43.InterfaceImplementerDescriptorAmino): _43.InterfaceImplementerDescriptor;
                    toAmino(message: _43.InterfaceImplementerDescriptor): _43.InterfaceImplementerDescriptorAmino;
                    fromAminoMsg(object: _43.InterfaceImplementerDescriptorAminoMsg): _43.InterfaceImplementerDescriptor;
                    toAminoMsg(message: _43.InterfaceImplementerDescriptor): _43.InterfaceImplementerDescriptorAminoMsg;
                    fromProtoMsg(message: _43.InterfaceImplementerDescriptorProtoMsg): _43.InterfaceImplementerDescriptor;
                    toProto(message: _43.InterfaceImplementerDescriptor): Uint8Array;
                    toProtoMsg(message: _43.InterfaceImplementerDescriptor): _43.InterfaceImplementerDescriptorProtoMsg;
                };
                InterfaceAcceptingMessageDescriptor: {
                    typeUrl: string;
                    encode(message: _43.InterfaceAcceptingMessageDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _43.InterfaceAcceptingMessageDescriptor;
                    fromJSON(object: any): _43.InterfaceAcceptingMessageDescriptor;
                    toJSON(message: _43.InterfaceAcceptingMessageDescriptor): unknown;
                    fromPartial(object: Partial<_43.InterfaceAcceptingMessageDescriptor>): _43.InterfaceAcceptingMessageDescriptor;
                    fromAmino(object: _43.InterfaceAcceptingMessageDescriptorAmino): _43.InterfaceAcceptingMessageDescriptor;
                    toAmino(message: _43.InterfaceAcceptingMessageDescriptor): _43.InterfaceAcceptingMessageDescriptorAmino;
                    fromAminoMsg(object: _43.InterfaceAcceptingMessageDescriptorAminoMsg): _43.InterfaceAcceptingMessageDescriptor;
                    toAminoMsg(message: _43.InterfaceAcceptingMessageDescriptor): _43.InterfaceAcceptingMessageDescriptorAminoMsg;
                    fromProtoMsg(message: _43.InterfaceAcceptingMessageDescriptorProtoMsg): _43.InterfaceAcceptingMessageDescriptor;
                    toProto(message: _43.InterfaceAcceptingMessageDescriptor): Uint8Array;
                    toProtoMsg(message: _43.InterfaceAcceptingMessageDescriptor): _43.InterfaceAcceptingMessageDescriptorProtoMsg;
                };
                ConfigurationDescriptor: {
                    typeUrl: string;
                    encode(message: _43.ConfigurationDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _43.ConfigurationDescriptor;
                    fromJSON(object: any): _43.ConfigurationDescriptor;
                    toJSON(message: _43.ConfigurationDescriptor): unknown;
                    fromPartial(object: Partial<_43.ConfigurationDescriptor>): _43.ConfigurationDescriptor;
                    fromAmino(object: _43.ConfigurationDescriptorAmino): _43.ConfigurationDescriptor;
                    toAmino(message: _43.ConfigurationDescriptor): _43.ConfigurationDescriptorAmino;
                    fromAminoMsg(object: _43.ConfigurationDescriptorAminoMsg): _43.ConfigurationDescriptor;
                    toAminoMsg(message: _43.ConfigurationDescriptor): _43.ConfigurationDescriptorAminoMsg;
                    fromProtoMsg(message: _43.ConfigurationDescriptorProtoMsg): _43.ConfigurationDescriptor;
                    toProto(message: _43.ConfigurationDescriptor): Uint8Array;
                    toProtoMsg(message: _43.ConfigurationDescriptor): _43.ConfigurationDescriptorProtoMsg;
                };
                MsgDescriptor: {
                    typeUrl: string;
                    encode(message: _43.MsgDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _43.MsgDescriptor;
                    fromJSON(object: any): _43.MsgDescriptor;
                    toJSON(message: _43.MsgDescriptor): unknown;
                    fromPartial(object: Partial<_43.MsgDescriptor>): _43.MsgDescriptor;
                    fromAmino(object: _43.MsgDescriptorAmino): _43.MsgDescriptor;
                    toAmino(message: _43.MsgDescriptor): _43.MsgDescriptorAmino;
                    fromAminoMsg(object: _43.MsgDescriptorAminoMsg): _43.MsgDescriptor;
                    toAminoMsg(message: _43.MsgDescriptor): _43.MsgDescriptorAminoMsg;
                    fromProtoMsg(message: _43.MsgDescriptorProtoMsg): _43.MsgDescriptor;
                    toProto(message: _43.MsgDescriptor): Uint8Array;
                    toProtoMsg(message: _43.MsgDescriptor): _43.MsgDescriptorProtoMsg;
                };
                GetAuthnDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _43.GetAuthnDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _43.GetAuthnDescriptorRequest;
                    fromJSON(_: any): _43.GetAuthnDescriptorRequest;
                    toJSON(_: _43.GetAuthnDescriptorRequest): unknown;
                    fromPartial(_: Partial<_43.GetAuthnDescriptorRequest>): _43.GetAuthnDescriptorRequest;
                    fromAmino(_: _43.GetAuthnDescriptorRequestAmino): _43.GetAuthnDescriptorRequest;
                    toAmino(_: _43.GetAuthnDescriptorRequest): _43.GetAuthnDescriptorRequestAmino;
                    fromAminoMsg(object: _43.GetAuthnDescriptorRequestAminoMsg): _43.GetAuthnDescriptorRequest;
                    toAminoMsg(message: _43.GetAuthnDescriptorRequest): _43.GetAuthnDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _43.GetAuthnDescriptorRequestProtoMsg): _43.GetAuthnDescriptorRequest;
                    toProto(message: _43.GetAuthnDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _43.GetAuthnDescriptorRequest): _43.GetAuthnDescriptorRequestProtoMsg;
                };
                GetAuthnDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _43.GetAuthnDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _43.GetAuthnDescriptorResponse;
                    fromJSON(object: any): _43.GetAuthnDescriptorResponse;
                    toJSON(message: _43.GetAuthnDescriptorResponse): unknown;
                    fromPartial(object: Partial<_43.GetAuthnDescriptorResponse>): _43.GetAuthnDescriptorResponse;
                    fromAmino(object: _43.GetAuthnDescriptorResponseAmino): _43.GetAuthnDescriptorResponse;
                    toAmino(message: _43.GetAuthnDescriptorResponse): _43.GetAuthnDescriptorResponseAmino;
                    fromAminoMsg(object: _43.GetAuthnDescriptorResponseAminoMsg): _43.GetAuthnDescriptorResponse;
                    toAminoMsg(message: _43.GetAuthnDescriptorResponse): _43.GetAuthnDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _43.GetAuthnDescriptorResponseProtoMsg): _43.GetAuthnDescriptorResponse;
                    toProto(message: _43.GetAuthnDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _43.GetAuthnDescriptorResponse): _43.GetAuthnDescriptorResponseProtoMsg;
                };
                GetChainDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _43.GetChainDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _43.GetChainDescriptorRequest;
                    fromJSON(_: any): _43.GetChainDescriptorRequest;
                    toJSON(_: _43.GetChainDescriptorRequest): unknown;
                    fromPartial(_: Partial<_43.GetChainDescriptorRequest>): _43.GetChainDescriptorRequest;
                    fromAmino(_: _43.GetChainDescriptorRequestAmino): _43.GetChainDescriptorRequest;
                    toAmino(_: _43.GetChainDescriptorRequest): _43.GetChainDescriptorRequestAmino;
                    fromAminoMsg(object: _43.GetChainDescriptorRequestAminoMsg): _43.GetChainDescriptorRequest;
                    toAminoMsg(message: _43.GetChainDescriptorRequest): _43.GetChainDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _43.GetChainDescriptorRequestProtoMsg): _43.GetChainDescriptorRequest;
                    toProto(message: _43.GetChainDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _43.GetChainDescriptorRequest): _43.GetChainDescriptorRequestProtoMsg;
                };
                GetChainDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _43.GetChainDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _43.GetChainDescriptorResponse;
                    fromJSON(object: any): _43.GetChainDescriptorResponse;
                    toJSON(message: _43.GetChainDescriptorResponse): unknown;
                    fromPartial(object: Partial<_43.GetChainDescriptorResponse>): _43.GetChainDescriptorResponse;
                    fromAmino(object: _43.GetChainDescriptorResponseAmino): _43.GetChainDescriptorResponse;
                    toAmino(message: _43.GetChainDescriptorResponse): _43.GetChainDescriptorResponseAmino;
                    fromAminoMsg(object: _43.GetChainDescriptorResponseAminoMsg): _43.GetChainDescriptorResponse;
                    toAminoMsg(message: _43.GetChainDescriptorResponse): _43.GetChainDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _43.GetChainDescriptorResponseProtoMsg): _43.GetChainDescriptorResponse;
                    toProto(message: _43.GetChainDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _43.GetChainDescriptorResponse): _43.GetChainDescriptorResponseProtoMsg;
                };
                GetCodecDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _43.GetCodecDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _43.GetCodecDescriptorRequest;
                    fromJSON(_: any): _43.GetCodecDescriptorRequest;
                    toJSON(_: _43.GetCodecDescriptorRequest): unknown;
                    fromPartial(_: Partial<_43.GetCodecDescriptorRequest>): _43.GetCodecDescriptorRequest;
                    fromAmino(_: _43.GetCodecDescriptorRequestAmino): _43.GetCodecDescriptorRequest;
                    toAmino(_: _43.GetCodecDescriptorRequest): _43.GetCodecDescriptorRequestAmino;
                    fromAminoMsg(object: _43.GetCodecDescriptorRequestAminoMsg): _43.GetCodecDescriptorRequest;
                    toAminoMsg(message: _43.GetCodecDescriptorRequest): _43.GetCodecDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _43.GetCodecDescriptorRequestProtoMsg): _43.GetCodecDescriptorRequest;
                    toProto(message: _43.GetCodecDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _43.GetCodecDescriptorRequest): _43.GetCodecDescriptorRequestProtoMsg;
                };
                GetCodecDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _43.GetCodecDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _43.GetCodecDescriptorResponse;
                    fromJSON(object: any): _43.GetCodecDescriptorResponse;
                    toJSON(message: _43.GetCodecDescriptorResponse): unknown;
                    fromPartial(object: Partial<_43.GetCodecDescriptorResponse>): _43.GetCodecDescriptorResponse;
                    fromAmino(object: _43.GetCodecDescriptorResponseAmino): _43.GetCodecDescriptorResponse;
                    toAmino(message: _43.GetCodecDescriptorResponse): _43.GetCodecDescriptorResponseAmino;
                    fromAminoMsg(object: _43.GetCodecDescriptorResponseAminoMsg): _43.GetCodecDescriptorResponse;
                    toAminoMsg(message: _43.GetCodecDescriptorResponse): _43.GetCodecDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _43.GetCodecDescriptorResponseProtoMsg): _43.GetCodecDescriptorResponse;
                    toProto(message: _43.GetCodecDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _43.GetCodecDescriptorResponse): _43.GetCodecDescriptorResponseProtoMsg;
                };
                GetConfigurationDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _43.GetConfigurationDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _43.GetConfigurationDescriptorRequest;
                    fromJSON(_: any): _43.GetConfigurationDescriptorRequest;
                    toJSON(_: _43.GetConfigurationDescriptorRequest): unknown;
                    fromPartial(_: Partial<_43.GetConfigurationDescriptorRequest>): _43.GetConfigurationDescriptorRequest;
                    fromAmino(_: _43.GetConfigurationDescriptorRequestAmino): _43.GetConfigurationDescriptorRequest;
                    toAmino(_: _43.GetConfigurationDescriptorRequest): _43.GetConfigurationDescriptorRequestAmino;
                    fromAminoMsg(object: _43.GetConfigurationDescriptorRequestAminoMsg): _43.GetConfigurationDescriptorRequest;
                    toAminoMsg(message: _43.GetConfigurationDescriptorRequest): _43.GetConfigurationDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _43.GetConfigurationDescriptorRequestProtoMsg): _43.GetConfigurationDescriptorRequest;
                    toProto(message: _43.GetConfigurationDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _43.GetConfigurationDescriptorRequest): _43.GetConfigurationDescriptorRequestProtoMsg;
                };
                GetConfigurationDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _43.GetConfigurationDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _43.GetConfigurationDescriptorResponse;
                    fromJSON(object: any): _43.GetConfigurationDescriptorResponse;
                    toJSON(message: _43.GetConfigurationDescriptorResponse): unknown;
                    fromPartial(object: Partial<_43.GetConfigurationDescriptorResponse>): _43.GetConfigurationDescriptorResponse;
                    fromAmino(object: _43.GetConfigurationDescriptorResponseAmino): _43.GetConfigurationDescriptorResponse;
                    toAmino(message: _43.GetConfigurationDescriptorResponse): _43.GetConfigurationDescriptorResponseAmino;
                    fromAminoMsg(object: _43.GetConfigurationDescriptorResponseAminoMsg): _43.GetConfigurationDescriptorResponse;
                    toAminoMsg(message: _43.GetConfigurationDescriptorResponse): _43.GetConfigurationDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _43.GetConfigurationDescriptorResponseProtoMsg): _43.GetConfigurationDescriptorResponse;
                    toProto(message: _43.GetConfigurationDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _43.GetConfigurationDescriptorResponse): _43.GetConfigurationDescriptorResponseProtoMsg;
                };
                GetQueryServicesDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _43.GetQueryServicesDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _43.GetQueryServicesDescriptorRequest;
                    fromJSON(_: any): _43.GetQueryServicesDescriptorRequest;
                    toJSON(_: _43.GetQueryServicesDescriptorRequest): unknown;
                    fromPartial(_: Partial<_43.GetQueryServicesDescriptorRequest>): _43.GetQueryServicesDescriptorRequest;
                    fromAmino(_: _43.GetQueryServicesDescriptorRequestAmino): _43.GetQueryServicesDescriptorRequest;
                    toAmino(_: _43.GetQueryServicesDescriptorRequest): _43.GetQueryServicesDescriptorRequestAmino;
                    fromAminoMsg(object: _43.GetQueryServicesDescriptorRequestAminoMsg): _43.GetQueryServicesDescriptorRequest;
                    toAminoMsg(message: _43.GetQueryServicesDescriptorRequest): _43.GetQueryServicesDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _43.GetQueryServicesDescriptorRequestProtoMsg): _43.GetQueryServicesDescriptorRequest;
                    toProto(message: _43.GetQueryServicesDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _43.GetQueryServicesDescriptorRequest): _43.GetQueryServicesDescriptorRequestProtoMsg;
                };
                GetQueryServicesDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _43.GetQueryServicesDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _43.GetQueryServicesDescriptorResponse;
                    fromJSON(object: any): _43.GetQueryServicesDescriptorResponse;
                    toJSON(message: _43.GetQueryServicesDescriptorResponse): unknown;
                    fromPartial(object: Partial<_43.GetQueryServicesDescriptorResponse>): _43.GetQueryServicesDescriptorResponse;
                    fromAmino(object: _43.GetQueryServicesDescriptorResponseAmino): _43.GetQueryServicesDescriptorResponse;
                    toAmino(message: _43.GetQueryServicesDescriptorResponse): _43.GetQueryServicesDescriptorResponseAmino;
                    fromAminoMsg(object: _43.GetQueryServicesDescriptorResponseAminoMsg): _43.GetQueryServicesDescriptorResponse;
                    toAminoMsg(message: _43.GetQueryServicesDescriptorResponse): _43.GetQueryServicesDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _43.GetQueryServicesDescriptorResponseProtoMsg): _43.GetQueryServicesDescriptorResponse;
                    toProto(message: _43.GetQueryServicesDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _43.GetQueryServicesDescriptorResponse): _43.GetQueryServicesDescriptorResponseProtoMsg;
                };
                GetTxDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _43.GetTxDescriptorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _43.GetTxDescriptorRequest;
                    fromJSON(_: any): _43.GetTxDescriptorRequest;
                    toJSON(_: _43.GetTxDescriptorRequest): unknown;
                    fromPartial(_: Partial<_43.GetTxDescriptorRequest>): _43.GetTxDescriptorRequest;
                    fromAmino(_: _43.GetTxDescriptorRequestAmino): _43.GetTxDescriptorRequest;
                    toAmino(_: _43.GetTxDescriptorRequest): _43.GetTxDescriptorRequestAmino;
                    fromAminoMsg(object: _43.GetTxDescriptorRequestAminoMsg): _43.GetTxDescriptorRequest;
                    toAminoMsg(message: _43.GetTxDescriptorRequest): _43.GetTxDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _43.GetTxDescriptorRequestProtoMsg): _43.GetTxDescriptorRequest;
                    toProto(message: _43.GetTxDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _43.GetTxDescriptorRequest): _43.GetTxDescriptorRequestProtoMsg;
                };
                GetTxDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _43.GetTxDescriptorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _43.GetTxDescriptorResponse;
                    fromJSON(object: any): _43.GetTxDescriptorResponse;
                    toJSON(message: _43.GetTxDescriptorResponse): unknown;
                    fromPartial(object: Partial<_43.GetTxDescriptorResponse>): _43.GetTxDescriptorResponse;
                    fromAmino(object: _43.GetTxDescriptorResponseAmino): _43.GetTxDescriptorResponse;
                    toAmino(message: _43.GetTxDescriptorResponse): _43.GetTxDescriptorResponseAmino;
                    fromAminoMsg(object: _43.GetTxDescriptorResponseAminoMsg): _43.GetTxDescriptorResponse;
                    toAminoMsg(message: _43.GetTxDescriptorResponse): _43.GetTxDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _43.GetTxDescriptorResponseProtoMsg): _43.GetTxDescriptorResponse;
                    toProto(message: _43.GetTxDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _43.GetTxDescriptorResponse): _43.GetTxDescriptorResponseProtoMsg;
                };
                QueryServicesDescriptor: {
                    typeUrl: string;
                    encode(message: _43.QueryServicesDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _43.QueryServicesDescriptor;
                    fromJSON(object: any): _43.QueryServicesDescriptor;
                    toJSON(message: _43.QueryServicesDescriptor): unknown;
                    fromPartial(object: Partial<_43.QueryServicesDescriptor>): _43.QueryServicesDescriptor;
                    fromAmino(object: _43.QueryServicesDescriptorAmino): _43.QueryServicesDescriptor;
                    toAmino(message: _43.QueryServicesDescriptor): _43.QueryServicesDescriptorAmino;
                    fromAminoMsg(object: _43.QueryServicesDescriptorAminoMsg): _43.QueryServicesDescriptor;
                    toAminoMsg(message: _43.QueryServicesDescriptor): _43.QueryServicesDescriptorAminoMsg;
                    fromProtoMsg(message: _43.QueryServicesDescriptorProtoMsg): _43.QueryServicesDescriptor;
                    toProto(message: _43.QueryServicesDescriptor): Uint8Array;
                    toProtoMsg(message: _43.QueryServicesDescriptor): _43.QueryServicesDescriptorProtoMsg;
                };
                QueryServiceDescriptor: {
                    typeUrl: string;
                    encode(message: _43.QueryServiceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _43.QueryServiceDescriptor;
                    fromJSON(object: any): _43.QueryServiceDescriptor;
                    toJSON(message: _43.QueryServiceDescriptor): unknown;
                    fromPartial(object: Partial<_43.QueryServiceDescriptor>): _43.QueryServiceDescriptor;
                    fromAmino(object: _43.QueryServiceDescriptorAmino): _43.QueryServiceDescriptor;
                    toAmino(message: _43.QueryServiceDescriptor): _43.QueryServiceDescriptorAmino;
                    fromAminoMsg(object: _43.QueryServiceDescriptorAminoMsg): _43.QueryServiceDescriptor;
                    toAminoMsg(message: _43.QueryServiceDescriptor): _43.QueryServiceDescriptorAminoMsg;
                    fromProtoMsg(message: _43.QueryServiceDescriptorProtoMsg): _43.QueryServiceDescriptor;
                    toProto(message: _43.QueryServiceDescriptor): Uint8Array;
                    toProtoMsg(message: _43.QueryServiceDescriptor): _43.QueryServiceDescriptorProtoMsg;
                };
                QueryMethodDescriptor: {
                    typeUrl: string;
                    encode(message: _43.QueryMethodDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _43.QueryMethodDescriptor;
                    fromJSON(object: any): _43.QueryMethodDescriptor;
                    toJSON(message: _43.QueryMethodDescriptor): unknown;
                    fromPartial(object: Partial<_43.QueryMethodDescriptor>): _43.QueryMethodDescriptor;
                    fromAmino(object: _43.QueryMethodDescriptorAmino): _43.QueryMethodDescriptor;
                    toAmino(message: _43.QueryMethodDescriptor): _43.QueryMethodDescriptorAmino;
                    fromAminoMsg(object: _43.QueryMethodDescriptorAminoMsg): _43.QueryMethodDescriptor;
                    toAminoMsg(message: _43.QueryMethodDescriptor): _43.QueryMethodDescriptorAminoMsg;
                    fromProtoMsg(message: _43.QueryMethodDescriptorProtoMsg): _43.QueryMethodDescriptor;
                    toProto(message: _43.QueryMethodDescriptor): Uint8Array;
                    toProtoMsg(message: _43.QueryMethodDescriptor): _43.QueryMethodDescriptorProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                Service: typeof _248.Service;
                ServiceClientImpl: typeof _248.ServiceClientImpl;
                LCDQueryClient: typeof _230.LCDQueryClient;
                protobufPackage: "cosmos.base.tendermint.v1beta1";
                Block: {
                    typeUrl: string;
                    encode(message: _45.Block, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _45.Block;
                    fromJSON(object: any): _45.Block;
                    toJSON(message: _45.Block): unknown;
                    fromPartial(object: Partial<_45.Block>): _45.Block;
                    fromAmino(object: _45.BlockAmino): _45.Block;
                    toAmino(message: _45.Block): _45.BlockAmino;
                    fromAminoMsg(object: _45.BlockAminoMsg): _45.Block;
                    toAminoMsg(message: _45.Block): _45.BlockAminoMsg;
                    fromProtoMsg(message: _45.BlockProtoMsg): _45.Block;
                    toProto(message: _45.Block): Uint8Array;
                    toProtoMsg(message: _45.Block): _45.BlockProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _45.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _45.Header;
                    fromJSON(object: any): _45.Header;
                    toJSON(message: _45.Header): unknown;
                    fromPartial(object: Partial<_45.Header>): _45.Header;
                    fromAmino(object: _45.HeaderAmino): _45.Header;
                    toAmino(message: _45.Header): _45.HeaderAmino;
                    fromAminoMsg(object: _45.HeaderAminoMsg): _45.Header;
                    toAminoMsg(message: _45.Header): _45.HeaderAminoMsg;
                    fromProtoMsg(message: _45.HeaderProtoMsg): _45.Header;
                    toProto(message: _45.Header): Uint8Array;
                    toProtoMsg(message: _45.Header): _45.HeaderProtoMsg;
                };
                GetValidatorSetByHeightRequest: {
                    typeUrl: string;
                    encode(message: _44.GetValidatorSetByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _44.GetValidatorSetByHeightRequest;
                    fromJSON(object: any): _44.GetValidatorSetByHeightRequest;
                    toJSON(message: _44.GetValidatorSetByHeightRequest): unknown;
                    fromPartial(object: Partial<_44.GetValidatorSetByHeightRequest>): _44.GetValidatorSetByHeightRequest;
                    fromAmino(object: _44.GetValidatorSetByHeightRequestAmino): _44.GetValidatorSetByHeightRequest;
                    toAmino(message: _44.GetValidatorSetByHeightRequest): _44.GetValidatorSetByHeightRequestAmino;
                    fromAminoMsg(object: _44.GetValidatorSetByHeightRequestAminoMsg): _44.GetValidatorSetByHeightRequest;
                    toAminoMsg(message: _44.GetValidatorSetByHeightRequest): _44.GetValidatorSetByHeightRequestAminoMsg;
                    fromProtoMsg(message: _44.GetValidatorSetByHeightRequestProtoMsg): _44.GetValidatorSetByHeightRequest;
                    toProto(message: _44.GetValidatorSetByHeightRequest): Uint8Array;
                    toProtoMsg(message: _44.GetValidatorSetByHeightRequest): _44.GetValidatorSetByHeightRequestProtoMsg;
                };
                GetValidatorSetByHeightResponse: {
                    typeUrl: string;
                    encode(message: _44.GetValidatorSetByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _44.GetValidatorSetByHeightResponse;
                    fromJSON(object: any): _44.GetValidatorSetByHeightResponse;
                    toJSON(message: _44.GetValidatorSetByHeightResponse): unknown;
                    fromPartial(object: Partial<_44.GetValidatorSetByHeightResponse>): _44.GetValidatorSetByHeightResponse;
                    fromAmino(object: _44.GetValidatorSetByHeightResponseAmino): _44.GetValidatorSetByHeightResponse;
                    toAmino(message: _44.GetValidatorSetByHeightResponse): _44.GetValidatorSetByHeightResponseAmino;
                    fromAminoMsg(object: _44.GetValidatorSetByHeightResponseAminoMsg): _44.GetValidatorSetByHeightResponse;
                    toAminoMsg(message: _44.GetValidatorSetByHeightResponse): _44.GetValidatorSetByHeightResponseAminoMsg;
                    fromProtoMsg(message: _44.GetValidatorSetByHeightResponseProtoMsg): _44.GetValidatorSetByHeightResponse;
                    toProto(message: _44.GetValidatorSetByHeightResponse): Uint8Array;
                    toProtoMsg(message: _44.GetValidatorSetByHeightResponse): _44.GetValidatorSetByHeightResponseProtoMsg;
                };
                GetLatestValidatorSetRequest: {
                    typeUrl: string;
                    encode(message: _44.GetLatestValidatorSetRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _44.GetLatestValidatorSetRequest;
                    fromJSON(object: any): _44.GetLatestValidatorSetRequest;
                    toJSON(message: _44.GetLatestValidatorSetRequest): unknown;
                    fromPartial(object: Partial<_44.GetLatestValidatorSetRequest>): _44.GetLatestValidatorSetRequest;
                    fromAmino(object: _44.GetLatestValidatorSetRequestAmino): _44.GetLatestValidatorSetRequest;
                    toAmino(message: _44.GetLatestValidatorSetRequest): _44.GetLatestValidatorSetRequestAmino;
                    fromAminoMsg(object: _44.GetLatestValidatorSetRequestAminoMsg): _44.GetLatestValidatorSetRequest;
                    toAminoMsg(message: _44.GetLatestValidatorSetRequest): _44.GetLatestValidatorSetRequestAminoMsg;
                    fromProtoMsg(message: _44.GetLatestValidatorSetRequestProtoMsg): _44.GetLatestValidatorSetRequest;
                    toProto(message: _44.GetLatestValidatorSetRequest): Uint8Array;
                    toProtoMsg(message: _44.GetLatestValidatorSetRequest): _44.GetLatestValidatorSetRequestProtoMsg;
                };
                GetLatestValidatorSetResponse: {
                    typeUrl: string;
                    encode(message: _44.GetLatestValidatorSetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _44.GetLatestValidatorSetResponse;
                    fromJSON(object: any): _44.GetLatestValidatorSetResponse;
                    toJSON(message: _44.GetLatestValidatorSetResponse): unknown;
                    fromPartial(object: Partial<_44.GetLatestValidatorSetResponse>): _44.GetLatestValidatorSetResponse;
                    fromAmino(object: _44.GetLatestValidatorSetResponseAmino): _44.GetLatestValidatorSetResponse;
                    toAmino(message: _44.GetLatestValidatorSetResponse): _44.GetLatestValidatorSetResponseAmino;
                    fromAminoMsg(object: _44.GetLatestValidatorSetResponseAminoMsg): _44.GetLatestValidatorSetResponse;
                    toAminoMsg(message: _44.GetLatestValidatorSetResponse): _44.GetLatestValidatorSetResponseAminoMsg;
                    fromProtoMsg(message: _44.GetLatestValidatorSetResponseProtoMsg): _44.GetLatestValidatorSetResponse;
                    toProto(message: _44.GetLatestValidatorSetResponse): Uint8Array;
                    toProtoMsg(message: _44.GetLatestValidatorSetResponse): _44.GetLatestValidatorSetResponseProtoMsg;
                };
                Validator: {
                    typeUrl: string;
                    encode(message: _44.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _44.Validator;
                    fromJSON(object: any): _44.Validator;
                    toJSON(message: _44.Validator): unknown;
                    fromPartial(object: Partial<_44.Validator>): _44.Validator;
                    fromAmino(object: _44.ValidatorAmino): _44.Validator;
                    toAmino(message: _44.Validator): _44.ValidatorAmino;
                    fromAminoMsg(object: _44.ValidatorAminoMsg): _44.Validator;
                    toAminoMsg(message: _44.Validator): _44.ValidatorAminoMsg;
                    fromProtoMsg(message: _44.ValidatorProtoMsg): _44.Validator;
                    toProto(message: _44.Validator): Uint8Array;
                    toProtoMsg(message: _44.Validator): _44.ValidatorProtoMsg;
                };
                GetBlockByHeightRequest: {
                    typeUrl: string;
                    encode(message: _44.GetBlockByHeightRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _44.GetBlockByHeightRequest;
                    fromJSON(object: any): _44.GetBlockByHeightRequest;
                    toJSON(message: _44.GetBlockByHeightRequest): unknown;
                    fromPartial(object: Partial<_44.GetBlockByHeightRequest>): _44.GetBlockByHeightRequest;
                    fromAmino(object: _44.GetBlockByHeightRequestAmino): _44.GetBlockByHeightRequest;
                    toAmino(message: _44.GetBlockByHeightRequest): _44.GetBlockByHeightRequestAmino;
                    fromAminoMsg(object: _44.GetBlockByHeightRequestAminoMsg): _44.GetBlockByHeightRequest;
                    toAminoMsg(message: _44.GetBlockByHeightRequest): _44.GetBlockByHeightRequestAminoMsg;
                    fromProtoMsg(message: _44.GetBlockByHeightRequestProtoMsg): _44.GetBlockByHeightRequest;
                    toProto(message: _44.GetBlockByHeightRequest): Uint8Array;
                    toProtoMsg(message: _44.GetBlockByHeightRequest): _44.GetBlockByHeightRequestProtoMsg;
                };
                GetBlockByHeightResponse: {
                    typeUrl: string;
                    encode(message: _44.GetBlockByHeightResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _44.GetBlockByHeightResponse;
                    fromJSON(object: any): _44.GetBlockByHeightResponse;
                    toJSON(message: _44.GetBlockByHeightResponse): unknown;
                    fromPartial(object: Partial<_44.GetBlockByHeightResponse>): _44.GetBlockByHeightResponse;
                    fromAmino(object: _44.GetBlockByHeightResponseAmino): _44.GetBlockByHeightResponse;
                    toAmino(message: _44.GetBlockByHeightResponse): _44.GetBlockByHeightResponseAmino;
                    fromAminoMsg(object: _44.GetBlockByHeightResponseAminoMsg): _44.GetBlockByHeightResponse;
                    toAminoMsg(message: _44.GetBlockByHeightResponse): _44.GetBlockByHeightResponseAminoMsg;
                    fromProtoMsg(message: _44.GetBlockByHeightResponseProtoMsg): _44.GetBlockByHeightResponse;
                    toProto(message: _44.GetBlockByHeightResponse): Uint8Array;
                    toProtoMsg(message: _44.GetBlockByHeightResponse): _44.GetBlockByHeightResponseProtoMsg;
                };
                GetLatestBlockRequest: {
                    typeUrl: string;
                    encode(_: _44.GetLatestBlockRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _44.GetLatestBlockRequest;
                    fromJSON(_: any): _44.GetLatestBlockRequest;
                    toJSON(_: _44.GetLatestBlockRequest): unknown;
                    fromPartial(_: Partial<_44.GetLatestBlockRequest>): _44.GetLatestBlockRequest;
                    fromAmino(_: _44.GetLatestBlockRequestAmino): _44.GetLatestBlockRequest;
                    toAmino(_: _44.GetLatestBlockRequest): _44.GetLatestBlockRequestAmino;
                    fromAminoMsg(object: _44.GetLatestBlockRequestAminoMsg): _44.GetLatestBlockRequest;
                    toAminoMsg(message: _44.GetLatestBlockRequest): _44.GetLatestBlockRequestAminoMsg;
                    fromProtoMsg(message: _44.GetLatestBlockRequestProtoMsg): _44.GetLatestBlockRequest;
                    toProto(message: _44.GetLatestBlockRequest): Uint8Array;
                    toProtoMsg(message: _44.GetLatestBlockRequest): _44.GetLatestBlockRequestProtoMsg;
                };
                GetLatestBlockResponse: {
                    typeUrl: string;
                    encode(message: _44.GetLatestBlockResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _44.GetLatestBlockResponse;
                    fromJSON(object: any): _44.GetLatestBlockResponse;
                    toJSON(message: _44.GetLatestBlockResponse): unknown;
                    fromPartial(object: Partial<_44.GetLatestBlockResponse>): _44.GetLatestBlockResponse;
                    fromAmino(object: _44.GetLatestBlockResponseAmino): _44.GetLatestBlockResponse;
                    toAmino(message: _44.GetLatestBlockResponse): _44.GetLatestBlockResponseAmino;
                    fromAminoMsg(object: _44.GetLatestBlockResponseAminoMsg): _44.GetLatestBlockResponse;
                    toAminoMsg(message: _44.GetLatestBlockResponse): _44.GetLatestBlockResponseAminoMsg;
                    fromProtoMsg(message: _44.GetLatestBlockResponseProtoMsg): _44.GetLatestBlockResponse;
                    toProto(message: _44.GetLatestBlockResponse): Uint8Array;
                    toProtoMsg(message: _44.GetLatestBlockResponse): _44.GetLatestBlockResponseProtoMsg;
                };
                GetSyncingRequest: {
                    typeUrl: string;
                    encode(_: _44.GetSyncingRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _44.GetSyncingRequest;
                    fromJSON(_: any): _44.GetSyncingRequest;
                    toJSON(_: _44.GetSyncingRequest): unknown;
                    fromPartial(_: Partial<_44.GetSyncingRequest>): _44.GetSyncingRequest;
                    fromAmino(_: _44.GetSyncingRequestAmino): _44.GetSyncingRequest;
                    toAmino(_: _44.GetSyncingRequest): _44.GetSyncingRequestAmino;
                    fromAminoMsg(object: _44.GetSyncingRequestAminoMsg): _44.GetSyncingRequest;
                    toAminoMsg(message: _44.GetSyncingRequest): _44.GetSyncingRequestAminoMsg;
                    fromProtoMsg(message: _44.GetSyncingRequestProtoMsg): _44.GetSyncingRequest;
                    toProto(message: _44.GetSyncingRequest): Uint8Array;
                    toProtoMsg(message: _44.GetSyncingRequest): _44.GetSyncingRequestProtoMsg;
                };
                GetSyncingResponse: {
                    typeUrl: string;
                    encode(message: _44.GetSyncingResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _44.GetSyncingResponse;
                    fromJSON(object: any): _44.GetSyncingResponse;
                    toJSON(message: _44.GetSyncingResponse): unknown;
                    fromPartial(object: Partial<_44.GetSyncingResponse>): _44.GetSyncingResponse;
                    fromAmino(object: _44.GetSyncingResponseAmino): _44.GetSyncingResponse;
                    toAmino(message: _44.GetSyncingResponse): _44.GetSyncingResponseAmino;
                    fromAminoMsg(object: _44.GetSyncingResponseAminoMsg): _44.GetSyncingResponse;
                    toAminoMsg(message: _44.GetSyncingResponse): _44.GetSyncingResponseAminoMsg;
                    fromProtoMsg(message: _44.GetSyncingResponseProtoMsg): _44.GetSyncingResponse;
                    toProto(message: _44.GetSyncingResponse): Uint8Array;
                    toProtoMsg(message: _44.GetSyncingResponse): _44.GetSyncingResponseProtoMsg;
                };
                GetNodeInfoRequest: {
                    typeUrl: string;
                    encode(_: _44.GetNodeInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _44.GetNodeInfoRequest;
                    fromJSON(_: any): _44.GetNodeInfoRequest;
                    toJSON(_: _44.GetNodeInfoRequest): unknown;
                    fromPartial(_: Partial<_44.GetNodeInfoRequest>): _44.GetNodeInfoRequest;
                    fromAmino(_: _44.GetNodeInfoRequestAmino): _44.GetNodeInfoRequest;
                    toAmino(_: _44.GetNodeInfoRequest): _44.GetNodeInfoRequestAmino;
                    fromAminoMsg(object: _44.GetNodeInfoRequestAminoMsg): _44.GetNodeInfoRequest;
                    toAminoMsg(message: _44.GetNodeInfoRequest): _44.GetNodeInfoRequestAminoMsg;
                    fromProtoMsg(message: _44.GetNodeInfoRequestProtoMsg): _44.GetNodeInfoRequest;
                    toProto(message: _44.GetNodeInfoRequest): Uint8Array;
                    toProtoMsg(message: _44.GetNodeInfoRequest): _44.GetNodeInfoRequestProtoMsg;
                };
                GetNodeInfoResponse: {
                    typeUrl: string;
                    encode(message: _44.GetNodeInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _44.GetNodeInfoResponse;
                    fromJSON(object: any): _44.GetNodeInfoResponse;
                    toJSON(message: _44.GetNodeInfoResponse): unknown;
                    fromPartial(object: Partial<_44.GetNodeInfoResponse>): _44.GetNodeInfoResponse;
                    fromAmino(object: _44.GetNodeInfoResponseAmino): _44.GetNodeInfoResponse;
                    toAmino(message: _44.GetNodeInfoResponse): _44.GetNodeInfoResponseAmino;
                    fromAminoMsg(object: _44.GetNodeInfoResponseAminoMsg): _44.GetNodeInfoResponse;
                    toAminoMsg(message: _44.GetNodeInfoResponse): _44.GetNodeInfoResponseAminoMsg;
                    fromProtoMsg(message: _44.GetNodeInfoResponseProtoMsg): _44.GetNodeInfoResponse;
                    toProto(message: _44.GetNodeInfoResponse): Uint8Array;
                    toProtoMsg(message: _44.GetNodeInfoResponse): _44.GetNodeInfoResponseProtoMsg;
                };
                VersionInfo: {
                    typeUrl: string;
                    encode(message: _44.VersionInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _44.VersionInfo;
                    fromJSON(object: any): _44.VersionInfo;
                    toJSON(message: _44.VersionInfo): unknown;
                    fromPartial(object: Partial<_44.VersionInfo>): _44.VersionInfo;
                    fromAmino(object: _44.VersionInfoAmino): _44.VersionInfo;
                    toAmino(message: _44.VersionInfo): _44.VersionInfoAmino;
                    fromAminoMsg(object: _44.VersionInfoAminoMsg): _44.VersionInfo;
                    toAminoMsg(message: _44.VersionInfo): _44.VersionInfoAminoMsg;
                    fromProtoMsg(message: _44.VersionInfoProtoMsg): _44.VersionInfo;
                    toProto(message: _44.VersionInfo): Uint8Array;
                    toProtoMsg(message: _44.VersionInfo): _44.VersionInfoProtoMsg;
                };
                Module: {
                    typeUrl: string;
                    encode(message: _44.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _44.Module;
                    fromJSON(object: any): _44.Module;
                    toJSON(message: _44.Module): unknown;
                    fromPartial(object: Partial<_44.Module>): _44.Module;
                    fromAmino(object: _44.ModuleAmino): _44.Module;
                    toAmino(message: _44.Module): _44.ModuleAmino;
                    fromAminoMsg(object: _44.ModuleAminoMsg): _44.Module;
                    toAminoMsg(message: _44.Module): _44.ModuleAminoMsg;
                    fromProtoMsg(message: _44.ModuleProtoMsg): _44.Module;
                    toProto(message: _44.Module): Uint8Array;
                    toProtoMsg(message: _44.Module): _44.ModuleProtoMsg;
                };
                ABCIQueryRequest: {
                    typeUrl: string;
                    encode(message: _44.ABCIQueryRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _44.ABCIQueryRequest;
                    fromJSON(object: any): _44.ABCIQueryRequest;
                    toJSON(message: _44.ABCIQueryRequest): unknown;
                    fromPartial(object: Partial<_44.ABCIQueryRequest>): _44.ABCIQueryRequest;
                    fromAmino(object: _44.ABCIQueryRequestAmino): _44.ABCIQueryRequest;
                    toAmino(message: _44.ABCIQueryRequest): _44.ABCIQueryRequestAmino;
                    fromAminoMsg(object: _44.ABCIQueryRequestAminoMsg): _44.ABCIQueryRequest;
                    toAminoMsg(message: _44.ABCIQueryRequest): _44.ABCIQueryRequestAminoMsg;
                    fromProtoMsg(message: _44.ABCIQueryRequestProtoMsg): _44.ABCIQueryRequest;
                    toProto(message: _44.ABCIQueryRequest): Uint8Array;
                    toProtoMsg(message: _44.ABCIQueryRequest): _44.ABCIQueryRequestProtoMsg;
                };
                ABCIQueryResponse: {
                    typeUrl: string;
                    encode(message: _44.ABCIQueryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _44.ABCIQueryResponse;
                    fromJSON(object: any): _44.ABCIQueryResponse;
                    toJSON(message: _44.ABCIQueryResponse): unknown;
                    fromPartial(object: Partial<_44.ABCIQueryResponse>): _44.ABCIQueryResponse;
                    fromAmino(object: _44.ABCIQueryResponseAmino): _44.ABCIQueryResponse;
                    toAmino(message: _44.ABCIQueryResponse): _44.ABCIQueryResponseAmino;
                    fromAminoMsg(object: _44.ABCIQueryResponseAminoMsg): _44.ABCIQueryResponse;
                    toAminoMsg(message: _44.ABCIQueryResponse): _44.ABCIQueryResponseAminoMsg;
                    fromProtoMsg(message: _44.ABCIQueryResponseProtoMsg): _44.ABCIQueryResponse;
                    toProto(message: _44.ABCIQueryResponse): Uint8Array;
                    toProtoMsg(message: _44.ABCIQueryResponse): _44.ABCIQueryResponseProtoMsg;
                };
                ProofOp: {
                    typeUrl: string;
                    encode(message: _44.ProofOp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _44.ProofOp;
                    fromJSON(object: any): _44.ProofOp;
                    toJSON(message: _44.ProofOp): unknown;
                    fromPartial(object: Partial<_44.ProofOp>): _44.ProofOp;
                    fromAmino(object: _44.ProofOpAmino): _44.ProofOp;
                    toAmino(message: _44.ProofOp): _44.ProofOpAmino;
                    fromAminoMsg(object: _44.ProofOpAminoMsg): _44.ProofOp;
                    toAminoMsg(message: _44.ProofOp): _44.ProofOpAminoMsg;
                    fromProtoMsg(message: _44.ProofOpProtoMsg): _44.ProofOp;
                    toProto(message: _44.ProofOp): Uint8Array;
                    toProtoMsg(message: _44.ProofOp): _44.ProofOpProtoMsg;
                };
                ProofOps: {
                    typeUrl: string;
                    encode(message: _44.ProofOps, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _44.ProofOps;
                    fromJSON(object: any): _44.ProofOps;
                    toJSON(message: _44.ProofOps): unknown;
                    fromPartial(object: Partial<_44.ProofOps>): _44.ProofOps;
                    fromAmino(object: _44.ProofOpsAmino): _44.ProofOps;
                    toAmino(message: _44.ProofOps): _44.ProofOpsAmino;
                    fromAminoMsg(object: _44.ProofOpsAminoMsg): _44.ProofOps;
                    toAminoMsg(message: _44.ProofOps): _44.ProofOpsAminoMsg;
                    fromProtoMsg(message: _44.ProofOpsProtoMsg): _44.ProofOps;
                    toProto(message: _44.ProofOps): Uint8Array;
                    toProtoMsg(message: _44.ProofOps): _44.ProofOpsProtoMsg;
                };
            };
        }
        const v1beta1: {
            protobufPackage: "cosmos.base.v1beta1";
            Coin: {
                typeUrl: string;
                encode(message: _46.Coin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _46.Coin;
                fromJSON(object: any): _46.Coin;
                toJSON(message: _46.Coin): unknown;
                fromPartial(object: Partial<_46.Coin>): _46.Coin;
                fromAmino(object: _46.CoinAmino): _46.Coin;
                toAmino(message: _46.Coin): _46.CoinAmino;
                fromAminoMsg(object: _46.CoinAminoMsg): _46.Coin;
                toAminoMsg(message: _46.Coin): _46.CoinAminoMsg;
                fromProtoMsg(message: _46.CoinProtoMsg): _46.Coin;
                toProto(message: _46.Coin): Uint8Array;
                toProtoMsg(message: _46.Coin): _46.CoinProtoMsg;
            };
            DecCoin: {
                typeUrl: string;
                encode(message: _46.DecCoin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _46.DecCoin;
                fromJSON(object: any): _46.DecCoin;
                toJSON(message: _46.DecCoin): unknown;
                fromPartial(object: Partial<_46.DecCoin>): _46.DecCoin;
                fromAmino(object: _46.DecCoinAmino): _46.DecCoin;
                toAmino(message: _46.DecCoin): _46.DecCoinAmino;
                fromAminoMsg(object: _46.DecCoinAminoMsg): _46.DecCoin;
                toAminoMsg(message: _46.DecCoin): _46.DecCoinAminoMsg;
                fromProtoMsg(message: _46.DecCoinProtoMsg): _46.DecCoin;
                toProto(message: _46.DecCoin): Uint8Array;
                toProtoMsg(message: _46.DecCoin): _46.DecCoinProtoMsg;
            };
            IntProto: {
                typeUrl: string;
                encode(message: _46.IntProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _46.IntProto;
                fromJSON(object: any): _46.IntProto;
                toJSON(message: _46.IntProto): unknown;
                fromPartial(object: Partial<_46.IntProto>): _46.IntProto;
                fromAmino(object: _46.IntProtoAmino): _46.IntProto;
                toAmino(message: _46.IntProto): _46.IntProtoAmino;
                fromAminoMsg(object: _46.IntProtoAminoMsg): _46.IntProto;
                toAminoMsg(message: _46.IntProto): _46.IntProtoAminoMsg;
                fromProtoMsg(message: _46.IntProtoProtoMsg): _46.IntProto;
                toProto(message: _46.IntProto): Uint8Array;
                toProtoMsg(message: _46.IntProto): _46.IntProtoProtoMsg;
            };
            DecProto: {
                typeUrl: string;
                encode(message: _46.DecProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _46.DecProto;
                fromJSON(object: any): _46.DecProto;
                toJSON(message: _46.DecProto): unknown;
                fromPartial(object: Partial<_46.DecProto>): _46.DecProto;
                fromAmino(object: _46.DecProtoAmino): _46.DecProto;
                toAmino(message: _46.DecProto): _46.DecProtoAmino;
                fromAminoMsg(object: _46.DecProtoAminoMsg): _46.DecProto;
                toAminoMsg(message: _46.DecProto): _46.DecProtoAminoMsg;
                fromProtoMsg(message: _46.DecProtoProtoMsg): _46.DecProto;
                toProto(message: _46.DecProto): Uint8Array;
                toProtoMsg(message: _46.DecProto): _46.DecProtoProtoMsg;
            };
        };
    }
    namespace circuit {
        namespace module {
            const v1: {
                protobufPackage: "cosmos.circuit.module.v1";
                Module: {
                    typeUrl: string;
                    encode(message: _47.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _47.Module;
                    fromJSON(object: any): _47.Module;
                    toJSON(message: _47.Module): unknown;
                    fromPartial(object: Partial<_47.Module>): _47.Module;
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
            Msg: typeof _266.Msg;
            Query: typeof _249.Query;
            QueryClientImpl: typeof _249.QueryClientImpl;
            LCDQueryClient: typeof _231.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    authorizeCircuitBreaker(value: _49.MsgAuthorizeCircuitBreaker): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    tripCircuitBreaker(value: _49.MsgTripCircuitBreaker): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    resetCircuitBreaker(value: _49.MsgResetCircuitBreaker): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    authorizeCircuitBreaker(value: _49.MsgAuthorizeCircuitBreaker): {
                        typeUrl: string;
                        value: _49.MsgAuthorizeCircuitBreaker;
                    };
                    tripCircuitBreaker(value: _49.MsgTripCircuitBreaker): {
                        typeUrl: string;
                        value: _49.MsgTripCircuitBreaker;
                    };
                    resetCircuitBreaker(value: _49.MsgResetCircuitBreaker): {
                        typeUrl: string;
                        value: _49.MsgResetCircuitBreaker;
                    };
                };
                toJSON: {
                    authorizeCircuitBreaker(value: _49.MsgAuthorizeCircuitBreaker): {
                        typeUrl: string;
                        value: unknown;
                    };
                    tripCircuitBreaker(value: _49.MsgTripCircuitBreaker): {
                        typeUrl: string;
                        value: unknown;
                    };
                    resetCircuitBreaker(value: _49.MsgResetCircuitBreaker): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    authorizeCircuitBreaker(value: any): {
                        typeUrl: string;
                        value: _49.MsgAuthorizeCircuitBreaker;
                    };
                    tripCircuitBreaker(value: any): {
                        typeUrl: string;
                        value: _49.MsgTripCircuitBreaker;
                    };
                    resetCircuitBreaker(value: any): {
                        typeUrl: string;
                        value: _49.MsgResetCircuitBreaker;
                    };
                };
                fromPartial: {
                    authorizeCircuitBreaker(value: _49.MsgAuthorizeCircuitBreaker): {
                        typeUrl: string;
                        value: _49.MsgAuthorizeCircuitBreaker;
                    };
                    tripCircuitBreaker(value: _49.MsgTripCircuitBreaker): {
                        typeUrl: string;
                        value: _49.MsgTripCircuitBreaker;
                    };
                    resetCircuitBreaker(value: _49.MsgResetCircuitBreaker): {
                        typeUrl: string;
                        value: _49.MsgResetCircuitBreaker;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.circuit.v1.MsgAuthorizeCircuitBreaker": {
                    aminoType: string;
                    toAmino: (message: _49.MsgAuthorizeCircuitBreaker) => _49.MsgAuthorizeCircuitBreakerAmino;
                    fromAmino: (object: _49.MsgAuthorizeCircuitBreakerAmino) => _49.MsgAuthorizeCircuitBreaker;
                };
                "/cosmos.circuit.v1.MsgTripCircuitBreaker": {
                    aminoType: string;
                    toAmino: (message: _49.MsgTripCircuitBreaker) => _49.MsgTripCircuitBreakerAmino;
                    fromAmino: (object: _49.MsgTripCircuitBreakerAmino) => _49.MsgTripCircuitBreaker;
                };
                "/cosmos.circuit.v1.MsgResetCircuitBreaker": {
                    aminoType: string;
                    toAmino: (message: _49.MsgResetCircuitBreaker) => _49.MsgResetCircuitBreakerAmino;
                    fromAmino: (object: _49.MsgResetCircuitBreakerAmino) => _49.MsgResetCircuitBreaker;
                };
            };
            permissions_LevelFromJSON(object: any): _50.Permissions_Level;
            permissions_LevelToJSON(object: _50.Permissions_Level): string;
            protobufPackage: "cosmos.circuit.v1";
            Permissions_Level: typeof _50.Permissions_Level;
            Permissions_LevelSDKType: typeof _50.Permissions_Level;
            Permissions_LevelAmino: typeof _50.Permissions_Level;
            Permissions: {
                typeUrl: string;
                encode(message: _50.Permissions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _50.Permissions;
                fromJSON(object: any): _50.Permissions;
                toJSON(message: _50.Permissions): unknown;
                fromPartial(object: Partial<_50.Permissions>): _50.Permissions;
                fromAmino(object: _50.PermissionsAmino): _50.Permissions;
                toAmino(message: _50.Permissions): _50.PermissionsAmino;
                fromAminoMsg(object: _50.PermissionsAminoMsg): _50.Permissions;
                toAminoMsg(message: _50.Permissions): _50.PermissionsAminoMsg;
                fromProtoMsg(message: _50.PermissionsProtoMsg): _50.Permissions;
                toProto(message: _50.Permissions): Uint8Array;
                toProtoMsg(message: _50.Permissions): _50.PermissionsProtoMsg;
            };
            GenesisAccountPermissions: {
                typeUrl: string;
                encode(message: _50.GenesisAccountPermissions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _50.GenesisAccountPermissions;
                fromJSON(object: any): _50.GenesisAccountPermissions;
                toJSON(message: _50.GenesisAccountPermissions): unknown;
                fromPartial(object: Partial<_50.GenesisAccountPermissions>): _50.GenesisAccountPermissions;
                fromAmino(object: _50.GenesisAccountPermissionsAmino): _50.GenesisAccountPermissions;
                toAmino(message: _50.GenesisAccountPermissions): _50.GenesisAccountPermissionsAmino;
                fromAminoMsg(object: _50.GenesisAccountPermissionsAminoMsg): _50.GenesisAccountPermissions;
                toAminoMsg(message: _50.GenesisAccountPermissions): _50.GenesisAccountPermissionsAminoMsg;
                fromProtoMsg(message: _50.GenesisAccountPermissionsProtoMsg): _50.GenesisAccountPermissions;
                toProto(message: _50.GenesisAccountPermissions): Uint8Array;
                toProtoMsg(message: _50.GenesisAccountPermissions): _50.GenesisAccountPermissionsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _50.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _50.GenesisState;
                fromJSON(object: any): _50.GenesisState;
                toJSON(message: _50.GenesisState): unknown;
                fromPartial(object: Partial<_50.GenesisState>): _50.GenesisState;
                fromAmino(object: _50.GenesisStateAmino): _50.GenesisState;
                toAmino(message: _50.GenesisState): _50.GenesisStateAmino;
                fromAminoMsg(object: _50.GenesisStateAminoMsg): _50.GenesisState;
                toAminoMsg(message: _50.GenesisState): _50.GenesisStateAminoMsg;
                fromProtoMsg(message: _50.GenesisStateProtoMsg): _50.GenesisState;
                toProto(message: _50.GenesisState): Uint8Array;
                toProtoMsg(message: _50.GenesisState): _50.GenesisStateProtoMsg;
            };
            MsgAuthorizeCircuitBreaker: {
                typeUrl: string;
                encode(message: _49.MsgAuthorizeCircuitBreaker, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _49.MsgAuthorizeCircuitBreaker;
                fromJSON(object: any): _49.MsgAuthorizeCircuitBreaker;
                toJSON(message: _49.MsgAuthorizeCircuitBreaker): unknown;
                fromPartial(object: Partial<_49.MsgAuthorizeCircuitBreaker>): _49.MsgAuthorizeCircuitBreaker;
                fromAmino(object: _49.MsgAuthorizeCircuitBreakerAmino): _49.MsgAuthorizeCircuitBreaker;
                toAmino(message: _49.MsgAuthorizeCircuitBreaker): _49.MsgAuthorizeCircuitBreakerAmino;
                fromAminoMsg(object: _49.MsgAuthorizeCircuitBreakerAminoMsg): _49.MsgAuthorizeCircuitBreaker;
                toAminoMsg(message: _49.MsgAuthorizeCircuitBreaker): _49.MsgAuthorizeCircuitBreakerAminoMsg;
                fromProtoMsg(message: _49.MsgAuthorizeCircuitBreakerProtoMsg): _49.MsgAuthorizeCircuitBreaker;
                toProto(message: _49.MsgAuthorizeCircuitBreaker): Uint8Array;
                toProtoMsg(message: _49.MsgAuthorizeCircuitBreaker): _49.MsgAuthorizeCircuitBreakerProtoMsg;
            };
            MsgAuthorizeCircuitBreakerResponse: {
                typeUrl: string;
                encode(message: _49.MsgAuthorizeCircuitBreakerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _49.MsgAuthorizeCircuitBreakerResponse;
                fromJSON(object: any): _49.MsgAuthorizeCircuitBreakerResponse;
                toJSON(message: _49.MsgAuthorizeCircuitBreakerResponse): unknown;
                fromPartial(object: Partial<_49.MsgAuthorizeCircuitBreakerResponse>): _49.MsgAuthorizeCircuitBreakerResponse;
                fromAmino(object: _49.MsgAuthorizeCircuitBreakerResponseAmino): _49.MsgAuthorizeCircuitBreakerResponse;
                toAmino(message: _49.MsgAuthorizeCircuitBreakerResponse): _49.MsgAuthorizeCircuitBreakerResponseAmino;
                fromAminoMsg(object: _49.MsgAuthorizeCircuitBreakerResponseAminoMsg): _49.MsgAuthorizeCircuitBreakerResponse;
                toAminoMsg(message: _49.MsgAuthorizeCircuitBreakerResponse): _49.MsgAuthorizeCircuitBreakerResponseAminoMsg;
                fromProtoMsg(message: _49.MsgAuthorizeCircuitBreakerResponseProtoMsg): _49.MsgAuthorizeCircuitBreakerResponse;
                toProto(message: _49.MsgAuthorizeCircuitBreakerResponse): Uint8Array;
                toProtoMsg(message: _49.MsgAuthorizeCircuitBreakerResponse): _49.MsgAuthorizeCircuitBreakerResponseProtoMsg;
            };
            MsgTripCircuitBreaker: {
                typeUrl: string;
                encode(message: _49.MsgTripCircuitBreaker, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _49.MsgTripCircuitBreaker;
                fromJSON(object: any): _49.MsgTripCircuitBreaker;
                toJSON(message: _49.MsgTripCircuitBreaker): unknown;
                fromPartial(object: Partial<_49.MsgTripCircuitBreaker>): _49.MsgTripCircuitBreaker;
                fromAmino(object: _49.MsgTripCircuitBreakerAmino): _49.MsgTripCircuitBreaker;
                toAmino(message: _49.MsgTripCircuitBreaker): _49.MsgTripCircuitBreakerAmino;
                fromAminoMsg(object: _49.MsgTripCircuitBreakerAminoMsg): _49.MsgTripCircuitBreaker;
                toAminoMsg(message: _49.MsgTripCircuitBreaker): _49.MsgTripCircuitBreakerAminoMsg;
                fromProtoMsg(message: _49.MsgTripCircuitBreakerProtoMsg): _49.MsgTripCircuitBreaker;
                toProto(message: _49.MsgTripCircuitBreaker): Uint8Array;
                toProtoMsg(message: _49.MsgTripCircuitBreaker): _49.MsgTripCircuitBreakerProtoMsg;
            };
            MsgTripCircuitBreakerResponse: {
                typeUrl: string;
                encode(message: _49.MsgTripCircuitBreakerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _49.MsgTripCircuitBreakerResponse;
                fromJSON(object: any): _49.MsgTripCircuitBreakerResponse;
                toJSON(message: _49.MsgTripCircuitBreakerResponse): unknown;
                fromPartial(object: Partial<_49.MsgTripCircuitBreakerResponse>): _49.MsgTripCircuitBreakerResponse;
                fromAmino(object: _49.MsgTripCircuitBreakerResponseAmino): _49.MsgTripCircuitBreakerResponse;
                toAmino(message: _49.MsgTripCircuitBreakerResponse): _49.MsgTripCircuitBreakerResponseAmino;
                fromAminoMsg(object: _49.MsgTripCircuitBreakerResponseAminoMsg): _49.MsgTripCircuitBreakerResponse;
                toAminoMsg(message: _49.MsgTripCircuitBreakerResponse): _49.MsgTripCircuitBreakerResponseAminoMsg;
                fromProtoMsg(message: _49.MsgTripCircuitBreakerResponseProtoMsg): _49.MsgTripCircuitBreakerResponse;
                toProto(message: _49.MsgTripCircuitBreakerResponse): Uint8Array;
                toProtoMsg(message: _49.MsgTripCircuitBreakerResponse): _49.MsgTripCircuitBreakerResponseProtoMsg;
            };
            MsgResetCircuitBreaker: {
                typeUrl: string;
                encode(message: _49.MsgResetCircuitBreaker, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _49.MsgResetCircuitBreaker;
                fromJSON(object: any): _49.MsgResetCircuitBreaker;
                toJSON(message: _49.MsgResetCircuitBreaker): unknown;
                fromPartial(object: Partial<_49.MsgResetCircuitBreaker>): _49.MsgResetCircuitBreaker;
                fromAmino(object: _49.MsgResetCircuitBreakerAmino): _49.MsgResetCircuitBreaker;
                toAmino(message: _49.MsgResetCircuitBreaker): _49.MsgResetCircuitBreakerAmino;
                fromAminoMsg(object: _49.MsgResetCircuitBreakerAminoMsg): _49.MsgResetCircuitBreaker;
                toAminoMsg(message: _49.MsgResetCircuitBreaker): _49.MsgResetCircuitBreakerAminoMsg;
                fromProtoMsg(message: _49.MsgResetCircuitBreakerProtoMsg): _49.MsgResetCircuitBreaker;
                toProto(message: _49.MsgResetCircuitBreaker): Uint8Array;
                toProtoMsg(message: _49.MsgResetCircuitBreaker): _49.MsgResetCircuitBreakerProtoMsg;
            };
            MsgResetCircuitBreakerResponse: {
                typeUrl: string;
                encode(message: _49.MsgResetCircuitBreakerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _49.MsgResetCircuitBreakerResponse;
                fromJSON(object: any): _49.MsgResetCircuitBreakerResponse;
                toJSON(message: _49.MsgResetCircuitBreakerResponse): unknown;
                fromPartial(object: Partial<_49.MsgResetCircuitBreakerResponse>): _49.MsgResetCircuitBreakerResponse;
                fromAmino(object: _49.MsgResetCircuitBreakerResponseAmino): _49.MsgResetCircuitBreakerResponse;
                toAmino(message: _49.MsgResetCircuitBreakerResponse): _49.MsgResetCircuitBreakerResponseAmino;
                fromAminoMsg(object: _49.MsgResetCircuitBreakerResponseAminoMsg): _49.MsgResetCircuitBreakerResponse;
                toAminoMsg(message: _49.MsgResetCircuitBreakerResponse): _49.MsgResetCircuitBreakerResponseAminoMsg;
                fromProtoMsg(message: _49.MsgResetCircuitBreakerResponseProtoMsg): _49.MsgResetCircuitBreakerResponse;
                toProto(message: _49.MsgResetCircuitBreakerResponse): Uint8Array;
                toProtoMsg(message: _49.MsgResetCircuitBreakerResponse): _49.MsgResetCircuitBreakerResponseProtoMsg;
            };
            QueryAccountRequest: {
                typeUrl: string;
                encode(message: _48.QueryAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _48.QueryAccountRequest;
                fromJSON(object: any): _48.QueryAccountRequest;
                toJSON(message: _48.QueryAccountRequest): unknown;
                fromPartial(object: Partial<_48.QueryAccountRequest>): _48.QueryAccountRequest;
                fromAmino(object: _48.QueryAccountRequestAmino): _48.QueryAccountRequest;
                toAmino(message: _48.QueryAccountRequest): _48.QueryAccountRequestAmino;
                fromAminoMsg(object: _48.QueryAccountRequestAminoMsg): _48.QueryAccountRequest;
                toAminoMsg(message: _48.QueryAccountRequest): _48.QueryAccountRequestAminoMsg;
                fromProtoMsg(message: _48.QueryAccountRequestProtoMsg): _48.QueryAccountRequest;
                toProto(message: _48.QueryAccountRequest): Uint8Array;
                toProtoMsg(message: _48.QueryAccountRequest): _48.QueryAccountRequestProtoMsg;
            };
            AccountResponse: {
                typeUrl: string;
                encode(message: _48.AccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _48.AccountResponse;
                fromJSON(object: any): _48.AccountResponse;
                toJSON(message: _48.AccountResponse): unknown;
                fromPartial(object: Partial<_48.AccountResponse>): _48.AccountResponse;
                fromAmino(object: _48.AccountResponseAmino): _48.AccountResponse;
                toAmino(message: _48.AccountResponse): _48.AccountResponseAmino;
                fromAminoMsg(object: _48.AccountResponseAminoMsg): _48.AccountResponse;
                toAminoMsg(message: _48.AccountResponse): _48.AccountResponseAminoMsg;
                fromProtoMsg(message: _48.AccountResponseProtoMsg): _48.AccountResponse;
                toProto(message: _48.AccountResponse): Uint8Array;
                toProtoMsg(message: _48.AccountResponse): _48.AccountResponseProtoMsg;
            };
            QueryAccountsRequest: {
                typeUrl: string;
                encode(message: _48.QueryAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _48.QueryAccountsRequest;
                fromJSON(object: any): _48.QueryAccountsRequest;
                toJSON(message: _48.QueryAccountsRequest): unknown;
                fromPartial(object: Partial<_48.QueryAccountsRequest>): _48.QueryAccountsRequest;
                fromAmino(object: _48.QueryAccountsRequestAmino): _48.QueryAccountsRequest;
                toAmino(message: _48.QueryAccountsRequest): _48.QueryAccountsRequestAmino;
                fromAminoMsg(object: _48.QueryAccountsRequestAminoMsg): _48.QueryAccountsRequest;
                toAminoMsg(message: _48.QueryAccountsRequest): _48.QueryAccountsRequestAminoMsg;
                fromProtoMsg(message: _48.QueryAccountsRequestProtoMsg): _48.QueryAccountsRequest;
                toProto(message: _48.QueryAccountsRequest): Uint8Array;
                toProtoMsg(message: _48.QueryAccountsRequest): _48.QueryAccountsRequestProtoMsg;
            };
            AccountsResponse: {
                typeUrl: string;
                encode(message: _48.AccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _48.AccountsResponse;
                fromJSON(object: any): _48.AccountsResponse;
                toJSON(message: _48.AccountsResponse): unknown;
                fromPartial(object: Partial<_48.AccountsResponse>): _48.AccountsResponse;
                fromAmino(object: _48.AccountsResponseAmino): _48.AccountsResponse;
                toAmino(message: _48.AccountsResponse): _48.AccountsResponseAmino;
                fromAminoMsg(object: _48.AccountsResponseAminoMsg): _48.AccountsResponse;
                toAminoMsg(message: _48.AccountsResponse): _48.AccountsResponseAminoMsg;
                fromProtoMsg(message: _48.AccountsResponseProtoMsg): _48.AccountsResponse;
                toProto(message: _48.AccountsResponse): Uint8Array;
                toProtoMsg(message: _48.AccountsResponse): _48.AccountsResponseProtoMsg;
            };
            QueryDisabledListRequest: {
                typeUrl: string;
                encode(_: _48.QueryDisabledListRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _48.QueryDisabledListRequest;
                fromJSON(_: any): _48.QueryDisabledListRequest;
                toJSON(_: _48.QueryDisabledListRequest): unknown;
                fromPartial(_: Partial<_48.QueryDisabledListRequest>): _48.QueryDisabledListRequest;
                fromAmino(_: _48.QueryDisabledListRequestAmino): _48.QueryDisabledListRequest;
                toAmino(_: _48.QueryDisabledListRequest): _48.QueryDisabledListRequestAmino;
                fromAminoMsg(object: _48.QueryDisabledListRequestAminoMsg): _48.QueryDisabledListRequest;
                toAminoMsg(message: _48.QueryDisabledListRequest): _48.QueryDisabledListRequestAminoMsg;
                fromProtoMsg(message: _48.QueryDisabledListRequestProtoMsg): _48.QueryDisabledListRequest;
                toProto(message: _48.QueryDisabledListRequest): Uint8Array;
                toProtoMsg(message: _48.QueryDisabledListRequest): _48.QueryDisabledListRequestProtoMsg;
            };
            DisabledListResponse: {
                typeUrl: string;
                encode(message: _48.DisabledListResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _48.DisabledListResponse;
                fromJSON(object: any): _48.DisabledListResponse;
                toJSON(message: _48.DisabledListResponse): unknown;
                fromPartial(object: Partial<_48.DisabledListResponse>): _48.DisabledListResponse;
                fromAmino(object: _48.DisabledListResponseAmino): _48.DisabledListResponse;
                toAmino(message: _48.DisabledListResponse): _48.DisabledListResponseAmino;
                fromAminoMsg(object: _48.DisabledListResponseAminoMsg): _48.DisabledListResponse;
                toAminoMsg(message: _48.DisabledListResponse): _48.DisabledListResponseAminoMsg;
                fromProtoMsg(message: _48.DisabledListResponseProtoMsg): _48.DisabledListResponse;
                toProto(message: _48.DisabledListResponse): Uint8Array;
                toProtoMsg(message: _48.DisabledListResponse): _48.DisabledListResponseProtoMsg;
            };
        };
    }
    namespace consensus {
        namespace module {
            const v1: {
                protobufPackage: "cosmos.consensus.module.v1";
                Module: {
                    typeUrl: string;
                    encode(message: _51.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _51.Module;
                    fromJSON(object: any): _51.Module;
                    toJSON(message: _51.Module): unknown;
                    fromPartial(object: Partial<_51.Module>): _51.Module;
                    fromAmino(object: _51.ModuleAmino): _51.Module;
                    toAmino(message: _51.Module): _51.ModuleAmino;
                    fromAminoMsg(object: _51.ModuleAminoMsg): _51.Module;
                    toAminoMsg(message: _51.Module): _51.ModuleAminoMsg;
                    fromProtoMsg(message: _51.ModuleProtoMsg): _51.Module;
                    toProto(message: _51.Module): Uint8Array;
                    toProtoMsg(message: _51.Module): _51.ModuleProtoMsg;
                };
            };
        }
        const v1: {
            Msg: typeof _267.Msg;
            Query: typeof _250.Query;
            QueryClientImpl: typeof _250.QueryClientImpl;
            LCDQueryClient: typeof _232.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    updateParams(value: _53.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    updateParams(value: _53.MsgUpdateParams): {
                        typeUrl: string;
                        value: _53.MsgUpdateParams;
                    };
                };
                toJSON: {
                    updateParams(value: _53.MsgUpdateParams): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _53.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    updateParams(value: _53.MsgUpdateParams): {
                        typeUrl: string;
                        value: _53.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.consensus.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _53.MsgUpdateParams) => _53.MsgUpdateParamsAmino;
                    fromAmino: (object: _53.MsgUpdateParamsAmino) => _53.MsgUpdateParams;
                };
            };
            protobufPackage: "cosmos.consensus.v1";
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _53.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _53.MsgUpdateParams;
                fromJSON(object: any): _53.MsgUpdateParams;
                toJSON(message: _53.MsgUpdateParams): unknown;
                fromPartial(object: Partial<_53.MsgUpdateParams>): _53.MsgUpdateParams;
                fromAmino(object: _53.MsgUpdateParamsAmino): _53.MsgUpdateParams;
                toAmino(message: _53.MsgUpdateParams): _53.MsgUpdateParamsAmino;
                fromAminoMsg(object: _53.MsgUpdateParamsAminoMsg): _53.MsgUpdateParams;
                toAminoMsg(message: _53.MsgUpdateParams): _53.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _53.MsgUpdateParamsProtoMsg): _53.MsgUpdateParams;
                toProto(message: _53.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _53.MsgUpdateParams): _53.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _53.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _53.MsgUpdateParamsResponse;
                fromJSON(_: any): _53.MsgUpdateParamsResponse;
                toJSON(_: _53.MsgUpdateParamsResponse): unknown;
                fromPartial(_: Partial<_53.MsgUpdateParamsResponse>): _53.MsgUpdateParamsResponse;
                fromAmino(_: _53.MsgUpdateParamsResponseAmino): _53.MsgUpdateParamsResponse;
                toAmino(_: _53.MsgUpdateParamsResponse): _53.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _53.MsgUpdateParamsResponseAminoMsg): _53.MsgUpdateParamsResponse;
                toAminoMsg(message: _53.MsgUpdateParamsResponse): _53.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _53.MsgUpdateParamsResponseProtoMsg): _53.MsgUpdateParamsResponse;
                toProto(message: _53.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _53.MsgUpdateParamsResponse): _53.MsgUpdateParamsResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _52.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _52.QueryParamsRequest;
                fromJSON(_: any): _52.QueryParamsRequest;
                toJSON(_: _52.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_52.QueryParamsRequest>): _52.QueryParamsRequest;
                fromAmino(_: _52.QueryParamsRequestAmino): _52.QueryParamsRequest;
                toAmino(_: _52.QueryParamsRequest): _52.QueryParamsRequestAmino;
                fromAminoMsg(object: _52.QueryParamsRequestAminoMsg): _52.QueryParamsRequest;
                toAminoMsg(message: _52.QueryParamsRequest): _52.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _52.QueryParamsRequestProtoMsg): _52.QueryParamsRequest;
                toProto(message: _52.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _52.QueryParamsRequest): _52.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _52.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _52.QueryParamsResponse;
                fromJSON(object: any): _52.QueryParamsResponse;
                toJSON(message: _52.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_52.QueryParamsResponse>): _52.QueryParamsResponse;
                fromAmino(object: _52.QueryParamsResponseAmino): _52.QueryParamsResponse;
                toAmino(message: _52.QueryParamsResponse): _52.QueryParamsResponseAmino;
                fromAminoMsg(object: _52.QueryParamsResponseAminoMsg): _52.QueryParamsResponse;
                toAminoMsg(message: _52.QueryParamsResponse): _52.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _52.QueryParamsResponseProtoMsg): _52.QueryParamsResponse;
                toProto(message: _52.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _52.QueryParamsResponse): _52.QueryParamsResponseProtoMsg;
            };
        };
    }
    namespace crisis {
        namespace module {
            const v1: {
                protobufPackage: "cosmos.crisis.module.v1";
                Module: {
                    typeUrl: string;
                    encode(message: _54.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _54.Module;
                    fromJSON(object: any): _54.Module;
                    toJSON(message: _54.Module): unknown;
                    fromPartial(object: Partial<_54.Module>): _54.Module;
                    fromAmino(object: _54.ModuleAmino): _54.Module;
                    toAmino(message: _54.Module): _54.ModuleAmino;
                    fromAminoMsg(object: _54.ModuleAminoMsg): _54.Module;
                    toAminoMsg(message: _54.Module): _54.ModuleAminoMsg;
                    fromProtoMsg(message: _54.ModuleProtoMsg): _54.Module;
                    toProto(message: _54.Module): Uint8Array;
                    toProtoMsg(message: _54.Module): _54.ModuleProtoMsg;
                };
            };
        }
    }
    namespace crypto {
        const ed25519: {
            protobufPackage: "cosmos.crypto.ed25519";
            PubKey: {
                typeUrl: string;
                encode(message: _55.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _55.PubKey;
                fromJSON(object: any): _55.PubKey;
                toJSON(message: _55.PubKey): unknown;
                fromPartial(object: Partial<_55.PubKey>): _55.PubKey;
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
                fromAmino(object: _55.PrivKeyAmino): _55.PrivKey;
                toAmino(message: _55.PrivKey): _55.PrivKeyAmino;
                fromAminoMsg(object: _55.PrivKeyAminoMsg): _55.PrivKey;
                toAminoMsg(message: _55.PrivKey): _55.PrivKeyAminoMsg;
                fromProtoMsg(message: _55.PrivKeyProtoMsg): _55.PrivKey;
                toProto(message: _55.PrivKey): Uint8Array;
                toProtoMsg(message: _55.PrivKey): _55.PrivKeyProtoMsg;
            };
        };
        namespace hd {
            const v1: {
                protobufPackage: "cosmos.crypto.hd.v1";
                BIP44Params: {
                    typeUrl: string;
                    encode(message: _56.BIP44Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _56.BIP44Params;
                    fromJSON(object: any): _56.BIP44Params;
                    toJSON(message: _56.BIP44Params): unknown;
                    fromPartial(object: Partial<_56.BIP44Params>): _56.BIP44Params;
                    fromAmino(object: _56.BIP44ParamsAmino): _56.BIP44Params;
                    toAmino(message: _56.BIP44Params): _56.BIP44ParamsAmino;
                    fromAminoMsg(object: _56.BIP44ParamsAminoMsg): _56.BIP44Params;
                    toAminoMsg(message: _56.BIP44Params): _56.BIP44ParamsAminoMsg;
                    fromProtoMsg(message: _56.BIP44ParamsProtoMsg): _56.BIP44Params;
                    toProto(message: _56.BIP44Params): Uint8Array;
                    toProtoMsg(message: _56.BIP44Params): _56.BIP44ParamsProtoMsg;
                };
            };
        }
        namespace keyring {
            const v1: {
                protobufPackage: "cosmos.crypto.keyring.v1";
                Record: {
                    typeUrl: string;
                    encode(message: _57.Record, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _57.Record;
                    fromJSON(object: any): _57.Record;
                    toJSON(message: _57.Record): unknown;
                    fromPartial(object: Partial<_57.Record>): _57.Record;
                    fromAmino(object: _57.RecordAmino): _57.Record;
                    toAmino(message: _57.Record): _57.RecordAmino;
                    fromAminoMsg(object: _57.RecordAminoMsg): _57.Record;
                    toAminoMsg(message: _57.Record): _57.RecordAminoMsg;
                    fromProtoMsg(message: _57.RecordProtoMsg): _57.Record;
                    toProto(message: _57.Record): Uint8Array;
                    toProtoMsg(message: _57.Record): _57.RecordProtoMsg;
                };
                Record_Local: {
                    typeUrl: string;
                    encode(message: _57.Record_Local, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _57.Record_Local;
                    fromJSON(object: any): _57.Record_Local;
                    toJSON(message: _57.Record_Local): unknown;
                    fromPartial(object: Partial<_57.Record_Local>): _57.Record_Local;
                    fromAmino(object: _57.Record_LocalAmino): _57.Record_Local;
                    toAmino(message: _57.Record_Local): _57.Record_LocalAmino;
                    fromAminoMsg(object: _57.Record_LocalAminoMsg): _57.Record_Local;
                    toAminoMsg(message: _57.Record_Local): _57.Record_LocalAminoMsg;
                    fromProtoMsg(message: _57.Record_LocalProtoMsg): _57.Record_Local;
                    toProto(message: _57.Record_Local): Uint8Array;
                    toProtoMsg(message: _57.Record_Local): _57.Record_LocalProtoMsg;
                };
                Record_Ledger: {
                    typeUrl: string;
                    encode(message: _57.Record_Ledger, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _57.Record_Ledger;
                    fromJSON(object: any): _57.Record_Ledger;
                    toJSON(message: _57.Record_Ledger): unknown;
                    fromPartial(object: Partial<_57.Record_Ledger>): _57.Record_Ledger;
                    fromAmino(object: _57.Record_LedgerAmino): _57.Record_Ledger;
                    toAmino(message: _57.Record_Ledger): _57.Record_LedgerAmino;
                    fromAminoMsg(object: _57.Record_LedgerAminoMsg): _57.Record_Ledger;
                    toAminoMsg(message: _57.Record_Ledger): _57.Record_LedgerAminoMsg;
                    fromProtoMsg(message: _57.Record_LedgerProtoMsg): _57.Record_Ledger;
                    toProto(message: _57.Record_Ledger): Uint8Array;
                    toProtoMsg(message: _57.Record_Ledger): _57.Record_LedgerProtoMsg;
                };
                Record_Multi: {
                    typeUrl: string;
                    encode(_: _57.Record_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _57.Record_Multi;
                    fromJSON(_: any): _57.Record_Multi;
                    toJSON(_: _57.Record_Multi): unknown;
                    fromPartial(_: Partial<_57.Record_Multi>): _57.Record_Multi;
                    fromAmino(_: _57.Record_MultiAmino): _57.Record_Multi;
                    toAmino(_: _57.Record_Multi): _57.Record_MultiAmino;
                    fromAminoMsg(object: _57.Record_MultiAminoMsg): _57.Record_Multi;
                    toAminoMsg(message: _57.Record_Multi): _57.Record_MultiAminoMsg;
                    fromProtoMsg(message: _57.Record_MultiProtoMsg): _57.Record_Multi;
                    toProto(message: _57.Record_Multi): Uint8Array;
                    toProtoMsg(message: _57.Record_Multi): _57.Record_MultiProtoMsg;
                };
                Record_Offline: {
                    typeUrl: string;
                    encode(_: _57.Record_Offline, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _57.Record_Offline;
                    fromJSON(_: any): _57.Record_Offline;
                    toJSON(_: _57.Record_Offline): unknown;
                    fromPartial(_: Partial<_57.Record_Offline>): _57.Record_Offline;
                    fromAmino(_: _57.Record_OfflineAmino): _57.Record_Offline;
                    toAmino(_: _57.Record_Offline): _57.Record_OfflineAmino;
                    fromAminoMsg(object: _57.Record_OfflineAminoMsg): _57.Record_Offline;
                    toAminoMsg(message: _57.Record_Offline): _57.Record_OfflineAminoMsg;
                    fromProtoMsg(message: _57.Record_OfflineProtoMsg): _57.Record_Offline;
                    toProto(message: _57.Record_Offline): Uint8Array;
                    toProtoMsg(message: _57.Record_Offline): _57.Record_OfflineProtoMsg;
                };
            };
        }
        const multisig: {
            protobufPackage: "cosmos.crypto.multisig";
            LegacyAminoPubKey: {
                typeUrl: string;
                encode(message: _58.LegacyAminoPubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _58.LegacyAminoPubKey;
                fromJSON(object: any): _58.LegacyAminoPubKey;
                toJSON(message: _58.LegacyAminoPubKey): unknown;
                fromPartial(object: Partial<_58.LegacyAminoPubKey>): _58.LegacyAminoPubKey;
                fromAmino(object: _58.LegacyAminoPubKeyAmino): _58.LegacyAminoPubKey;
                toAmino(message: _58.LegacyAminoPubKey): _58.LegacyAminoPubKeyAmino;
                fromAminoMsg(object: _58.LegacyAminoPubKeyAminoMsg): _58.LegacyAminoPubKey;
                toAminoMsg(message: _58.LegacyAminoPubKey): _58.LegacyAminoPubKeyAminoMsg;
                fromProtoMsg(message: _58.LegacyAminoPubKeyProtoMsg): _58.LegacyAminoPubKey;
                toProto(message: _58.LegacyAminoPubKey): Uint8Array;
                toProtoMsg(message: _58.LegacyAminoPubKey): _58.LegacyAminoPubKeyProtoMsg;
            };
        };
        const secp256k1: {
            protobufPackage: "cosmos.crypto.secp256k1";
            PubKey: {
                typeUrl: string;
                encode(message: _59.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _59.PubKey;
                fromJSON(object: any): _59.PubKey;
                toJSON(message: _59.PubKey): unknown;
                fromPartial(object: Partial<_59.PubKey>): _59.PubKey;
                fromAmino(object: _59.PubKeyAmino): _59.PubKey;
                toAmino(message: _59.PubKey): _59.PubKeyAmino;
                fromAminoMsg(object: _59.PubKeyAminoMsg): _59.PubKey;
                toAminoMsg(message: _59.PubKey): _59.PubKeyAminoMsg;
                fromProtoMsg(message: _59.PubKeyProtoMsg): _59.PubKey;
                toProto(message: _59.PubKey): Uint8Array;
                toProtoMsg(message: _59.PubKey): _59.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _59.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _59.PrivKey;
                fromJSON(object: any): _59.PrivKey;
                toJSON(message: _59.PrivKey): unknown;
                fromPartial(object: Partial<_59.PrivKey>): _59.PrivKey;
                fromAmino(object: _59.PrivKeyAmino): _59.PrivKey;
                toAmino(message: _59.PrivKey): _59.PrivKeyAmino;
                fromAminoMsg(object: _59.PrivKeyAminoMsg): _59.PrivKey;
                toAminoMsg(message: _59.PrivKey): _59.PrivKeyAminoMsg;
                fromProtoMsg(message: _59.PrivKeyProtoMsg): _59.PrivKey;
                toProto(message: _59.PrivKey): Uint8Array;
                toProtoMsg(message: _59.PrivKey): _59.PrivKeyProtoMsg;
            };
        };
        const secp256r1: {
            protobufPackage: "cosmos.crypto.secp256r1";
            PubKey: {
                typeUrl: string;
                encode(message: _60.PubKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _60.PubKey;
                fromJSON(object: any): _60.PubKey;
                toJSON(message: _60.PubKey): unknown;
                fromPartial(object: Partial<_60.PubKey>): _60.PubKey;
                fromAmino(object: _60.PubKeyAmino): _60.PubKey;
                toAmino(message: _60.PubKey): _60.PubKeyAmino;
                fromAminoMsg(object: _60.PubKeyAminoMsg): _60.PubKey;
                toAminoMsg(message: _60.PubKey): _60.PubKeyAminoMsg;
                fromProtoMsg(message: _60.PubKeyProtoMsg): _60.PubKey;
                toProto(message: _60.PubKey): Uint8Array;
                toProtoMsg(message: _60.PubKey): _60.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _60.PrivKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _60.PrivKey;
                fromJSON(object: any): _60.PrivKey;
                toJSON(message: _60.PrivKey): unknown;
                fromPartial(object: Partial<_60.PrivKey>): _60.PrivKey;
                fromAmino(object: _60.PrivKeyAmino): _60.PrivKey;
                toAmino(message: _60.PrivKey): _60.PrivKeyAmino;
                fromAminoMsg(object: _60.PrivKeyAminoMsg): _60.PrivKey;
                toAminoMsg(message: _60.PrivKey): _60.PrivKeyAminoMsg;
                fromProtoMsg(message: _60.PrivKeyProtoMsg): _60.PrivKey;
                toProto(message: _60.PrivKey): Uint8Array;
                toProtoMsg(message: _60.PrivKey): _60.PrivKeyProtoMsg;
            };
        };
    }
    namespace distribution {
        namespace module {
            const v1: {
                protobufPackage: "cosmos.distribution.module.v1";
                Module: {
                    typeUrl: string;
                    encode(message: _61.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _61.Module;
                    fromJSON(object: any): _61.Module;
                    toJSON(message: _61.Module): unknown;
                    fromPartial(object: Partial<_61.Module>): _61.Module;
                    fromAmino(object: _61.ModuleAmino): _61.Module;
                    toAmino(message: _61.Module): _61.ModuleAmino;
                    fromAminoMsg(object: _61.ModuleAminoMsg): _61.Module;
                    toAminoMsg(message: _61.Module): _61.ModuleAminoMsg;
                    fromProtoMsg(message: _61.ModuleProtoMsg): _61.Module;
                    toProto(message: _61.Module): Uint8Array;
                    toProtoMsg(message: _61.Module): _61.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            Msg: typeof _268.Msg;
            Query: typeof _251.Query;
            QueryClientImpl: typeof _251.QueryClientImpl;
            LCDQueryClient: typeof _233.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _65.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _65.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _65.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _65.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _65.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    communityPoolSpend(value: _65.MsgCommunityPoolSpend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    depositValidatorRewardsPool(value: _65.MsgDepositValidatorRewardsPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _65.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _65.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _65.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _65.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _65.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _65.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _65.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _65.MsgFundCommunityPool;
                    };
                    updateParams(value: _65.MsgUpdateParams): {
                        typeUrl: string;
                        value: _65.MsgUpdateParams;
                    };
                    communityPoolSpend(value: _65.MsgCommunityPoolSpend): {
                        typeUrl: string;
                        value: _65.MsgCommunityPoolSpend;
                    };
                    depositValidatorRewardsPool(value: _65.MsgDepositValidatorRewardsPool): {
                        typeUrl: string;
                        value: _65.MsgDepositValidatorRewardsPool;
                    };
                };
                toJSON: {
                    setWithdrawAddress(value: _65.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdrawDelegatorReward(value: _65.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdrawValidatorCommission(value: _65.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: unknown;
                    };
                    fundCommunityPool(value: _65.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateParams(value: _65.MsgUpdateParams): {
                        typeUrl: string;
                        value: unknown;
                    };
                    communityPoolSpend(value: _65.MsgCommunityPoolSpend): {
                        typeUrl: string;
                        value: unknown;
                    };
                    depositValidatorRewardsPool(value: _65.MsgDepositValidatorRewardsPool): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _65.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _65.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _65.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _65.MsgFundCommunityPool;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _65.MsgUpdateParams;
                    };
                    communityPoolSpend(value: any): {
                        typeUrl: string;
                        value: _65.MsgCommunityPoolSpend;
                    };
                    depositValidatorRewardsPool(value: any): {
                        typeUrl: string;
                        value: _65.MsgDepositValidatorRewardsPool;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _65.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _65.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _65.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _65.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _65.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _65.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _65.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _65.MsgFundCommunityPool;
                    };
                    updateParams(value: _65.MsgUpdateParams): {
                        typeUrl: string;
                        value: _65.MsgUpdateParams;
                    };
                    communityPoolSpend(value: _65.MsgCommunityPoolSpend): {
                        typeUrl: string;
                        value: _65.MsgCommunityPoolSpend;
                    };
                    depositValidatorRewardsPool(value: _65.MsgDepositValidatorRewardsPool): {
                        typeUrl: string;
                        value: _65.MsgDepositValidatorRewardsPool;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: (message: _65.MsgSetWithdrawAddress) => _65.MsgSetWithdrawAddressAmino;
                    fromAmino: (object: _65.MsgSetWithdrawAddressAmino) => _65.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: (message: _65.MsgWithdrawDelegatorReward) => _65.MsgWithdrawDelegatorRewardAmino;
                    fromAmino: (object: _65.MsgWithdrawDelegatorRewardAmino) => _65.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: (message: _65.MsgWithdrawValidatorCommission) => _65.MsgWithdrawValidatorCommissionAmino;
                    fromAmino: (object: _65.MsgWithdrawValidatorCommissionAmino) => _65.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: (message: _65.MsgFundCommunityPool) => _65.MsgFundCommunityPoolAmino;
                    fromAmino: (object: _65.MsgFundCommunityPoolAmino) => _65.MsgFundCommunityPool;
                };
                "/cosmos.distribution.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _65.MsgUpdateParams) => _65.MsgUpdateParamsAmino;
                    fromAmino: (object: _65.MsgUpdateParamsAmino) => _65.MsgUpdateParams;
                };
                "/cosmos.distribution.v1beta1.MsgCommunityPoolSpend": {
                    aminoType: string;
                    toAmino: (message: _65.MsgCommunityPoolSpend) => _65.MsgCommunityPoolSpendAmino;
                    fromAmino: (object: _65.MsgCommunityPoolSpendAmino) => _65.MsgCommunityPoolSpend;
                };
                "/cosmos.distribution.v1beta1.MsgDepositValidatorRewardsPool": {
                    aminoType: string;
                    toAmino: (message: _65.MsgDepositValidatorRewardsPool) => _65.MsgDepositValidatorRewardsPoolAmino;
                    fromAmino: (object: _65.MsgDepositValidatorRewardsPoolAmino) => _65.MsgDepositValidatorRewardsPool;
                };
            };
            protobufPackage: "cosmos.distribution.v1beta1";
            MsgSetWithdrawAddress: {
                typeUrl: string;
                encode(message: _65.MsgSetWithdrawAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _65.MsgSetWithdrawAddress;
                fromJSON(object: any): _65.MsgSetWithdrawAddress;
                toJSON(message: _65.MsgSetWithdrawAddress): unknown;
                fromPartial(object: Partial<_65.MsgSetWithdrawAddress>): _65.MsgSetWithdrawAddress;
                fromAmino(object: _65.MsgSetWithdrawAddressAmino): _65.MsgSetWithdrawAddress;
                toAmino(message: _65.MsgSetWithdrawAddress): _65.MsgSetWithdrawAddressAmino;
                fromAminoMsg(object: _65.MsgSetWithdrawAddressAminoMsg): _65.MsgSetWithdrawAddress;
                toAminoMsg(message: _65.MsgSetWithdrawAddress): _65.MsgSetWithdrawAddressAminoMsg;
                fromProtoMsg(message: _65.MsgSetWithdrawAddressProtoMsg): _65.MsgSetWithdrawAddress;
                toProto(message: _65.MsgSetWithdrawAddress): Uint8Array;
                toProtoMsg(message: _65.MsgSetWithdrawAddress): _65.MsgSetWithdrawAddressProtoMsg;
            };
            MsgSetWithdrawAddressResponse: {
                typeUrl: string;
                encode(_: _65.MsgSetWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _65.MsgSetWithdrawAddressResponse;
                fromJSON(_: any): _65.MsgSetWithdrawAddressResponse;
                toJSON(_: _65.MsgSetWithdrawAddressResponse): unknown;
                fromPartial(_: Partial<_65.MsgSetWithdrawAddressResponse>): _65.MsgSetWithdrawAddressResponse;
                fromAmino(_: _65.MsgSetWithdrawAddressResponseAmino): _65.MsgSetWithdrawAddressResponse;
                toAmino(_: _65.MsgSetWithdrawAddressResponse): _65.MsgSetWithdrawAddressResponseAmino;
                fromAminoMsg(object: _65.MsgSetWithdrawAddressResponseAminoMsg): _65.MsgSetWithdrawAddressResponse;
                toAminoMsg(message: _65.MsgSetWithdrawAddressResponse): _65.MsgSetWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _65.MsgSetWithdrawAddressResponseProtoMsg): _65.MsgSetWithdrawAddressResponse;
                toProto(message: _65.MsgSetWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _65.MsgSetWithdrawAddressResponse): _65.MsgSetWithdrawAddressResponseProtoMsg;
            };
            MsgWithdrawDelegatorReward: {
                typeUrl: string;
                encode(message: _65.MsgWithdrawDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _65.MsgWithdrawDelegatorReward;
                fromJSON(object: any): _65.MsgWithdrawDelegatorReward;
                toJSON(message: _65.MsgWithdrawDelegatorReward): unknown;
                fromPartial(object: Partial<_65.MsgWithdrawDelegatorReward>): _65.MsgWithdrawDelegatorReward;
                fromAmino(object: _65.MsgWithdrawDelegatorRewardAmino): _65.MsgWithdrawDelegatorReward;
                toAmino(message: _65.MsgWithdrawDelegatorReward): _65.MsgWithdrawDelegatorRewardAmino;
                fromAminoMsg(object: _65.MsgWithdrawDelegatorRewardAminoMsg): _65.MsgWithdrawDelegatorReward;
                toAminoMsg(message: _65.MsgWithdrawDelegatorReward): _65.MsgWithdrawDelegatorRewardAminoMsg;
                fromProtoMsg(message: _65.MsgWithdrawDelegatorRewardProtoMsg): _65.MsgWithdrawDelegatorReward;
                toProto(message: _65.MsgWithdrawDelegatorReward): Uint8Array;
                toProtoMsg(message: _65.MsgWithdrawDelegatorReward): _65.MsgWithdrawDelegatorRewardProtoMsg;
            };
            MsgWithdrawDelegatorRewardResponse: {
                typeUrl: string;
                encode(message: _65.MsgWithdrawDelegatorRewardResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _65.MsgWithdrawDelegatorRewardResponse;
                fromJSON(object: any): _65.MsgWithdrawDelegatorRewardResponse;
                toJSON(message: _65.MsgWithdrawDelegatorRewardResponse): unknown;
                fromPartial(object: Partial<_65.MsgWithdrawDelegatorRewardResponse>): _65.MsgWithdrawDelegatorRewardResponse;
                fromAmino(object: _65.MsgWithdrawDelegatorRewardResponseAmino): _65.MsgWithdrawDelegatorRewardResponse;
                toAmino(message: _65.MsgWithdrawDelegatorRewardResponse): _65.MsgWithdrawDelegatorRewardResponseAmino;
                fromAminoMsg(object: _65.MsgWithdrawDelegatorRewardResponseAminoMsg): _65.MsgWithdrawDelegatorRewardResponse;
                toAminoMsg(message: _65.MsgWithdrawDelegatorRewardResponse): _65.MsgWithdrawDelegatorRewardResponseAminoMsg;
                fromProtoMsg(message: _65.MsgWithdrawDelegatorRewardResponseProtoMsg): _65.MsgWithdrawDelegatorRewardResponse;
                toProto(message: _65.MsgWithdrawDelegatorRewardResponse): Uint8Array;
                toProtoMsg(message: _65.MsgWithdrawDelegatorRewardResponse): _65.MsgWithdrawDelegatorRewardResponseProtoMsg;
            };
            MsgWithdrawValidatorCommission: {
                typeUrl: string;
                encode(message: _65.MsgWithdrawValidatorCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _65.MsgWithdrawValidatorCommission;
                fromJSON(object: any): _65.MsgWithdrawValidatorCommission;
                toJSON(message: _65.MsgWithdrawValidatorCommission): unknown;
                fromPartial(object: Partial<_65.MsgWithdrawValidatorCommission>): _65.MsgWithdrawValidatorCommission;
                fromAmino(object: _65.MsgWithdrawValidatorCommissionAmino): _65.MsgWithdrawValidatorCommission;
                toAmino(message: _65.MsgWithdrawValidatorCommission): _65.MsgWithdrawValidatorCommissionAmino;
                fromAminoMsg(object: _65.MsgWithdrawValidatorCommissionAminoMsg): _65.MsgWithdrawValidatorCommission;
                toAminoMsg(message: _65.MsgWithdrawValidatorCommission): _65.MsgWithdrawValidatorCommissionAminoMsg;
                fromProtoMsg(message: _65.MsgWithdrawValidatorCommissionProtoMsg): _65.MsgWithdrawValidatorCommission;
                toProto(message: _65.MsgWithdrawValidatorCommission): Uint8Array;
                toProtoMsg(message: _65.MsgWithdrawValidatorCommission): _65.MsgWithdrawValidatorCommissionProtoMsg;
            };
            MsgWithdrawValidatorCommissionResponse: {
                typeUrl: string;
                encode(message: _65.MsgWithdrawValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _65.MsgWithdrawValidatorCommissionResponse;
                fromJSON(object: any): _65.MsgWithdrawValidatorCommissionResponse;
                toJSON(message: _65.MsgWithdrawValidatorCommissionResponse): unknown;
                fromPartial(object: Partial<_65.MsgWithdrawValidatorCommissionResponse>): _65.MsgWithdrawValidatorCommissionResponse;
                fromAmino(object: _65.MsgWithdrawValidatorCommissionResponseAmino): _65.MsgWithdrawValidatorCommissionResponse;
                toAmino(message: _65.MsgWithdrawValidatorCommissionResponse): _65.MsgWithdrawValidatorCommissionResponseAmino;
                fromAminoMsg(object: _65.MsgWithdrawValidatorCommissionResponseAminoMsg): _65.MsgWithdrawValidatorCommissionResponse;
                toAminoMsg(message: _65.MsgWithdrawValidatorCommissionResponse): _65.MsgWithdrawValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _65.MsgWithdrawValidatorCommissionResponseProtoMsg): _65.MsgWithdrawValidatorCommissionResponse;
                toProto(message: _65.MsgWithdrawValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _65.MsgWithdrawValidatorCommissionResponse): _65.MsgWithdrawValidatorCommissionResponseProtoMsg;
            };
            MsgFundCommunityPool: {
                typeUrl: string;
                encode(message: _65.MsgFundCommunityPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _65.MsgFundCommunityPool;
                fromJSON(object: any): _65.MsgFundCommunityPool;
                toJSON(message: _65.MsgFundCommunityPool): unknown;
                fromPartial(object: Partial<_65.MsgFundCommunityPool>): _65.MsgFundCommunityPool;
                fromAmino(object: _65.MsgFundCommunityPoolAmino): _65.MsgFundCommunityPool;
                toAmino(message: _65.MsgFundCommunityPool): _65.MsgFundCommunityPoolAmino;
                fromAminoMsg(object: _65.MsgFundCommunityPoolAminoMsg): _65.MsgFundCommunityPool;
                toAminoMsg(message: _65.MsgFundCommunityPool): _65.MsgFundCommunityPoolAminoMsg;
                fromProtoMsg(message: _65.MsgFundCommunityPoolProtoMsg): _65.MsgFundCommunityPool;
                toProto(message: _65.MsgFundCommunityPool): Uint8Array;
                toProtoMsg(message: _65.MsgFundCommunityPool): _65.MsgFundCommunityPoolProtoMsg;
            };
            MsgFundCommunityPoolResponse: {
                typeUrl: string;
                encode(_: _65.MsgFundCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _65.MsgFundCommunityPoolResponse;
                fromJSON(_: any): _65.MsgFundCommunityPoolResponse;
                toJSON(_: _65.MsgFundCommunityPoolResponse): unknown;
                fromPartial(_: Partial<_65.MsgFundCommunityPoolResponse>): _65.MsgFundCommunityPoolResponse;
                fromAmino(_: _65.MsgFundCommunityPoolResponseAmino): _65.MsgFundCommunityPoolResponse;
                toAmino(_: _65.MsgFundCommunityPoolResponse): _65.MsgFundCommunityPoolResponseAmino;
                fromAminoMsg(object: _65.MsgFundCommunityPoolResponseAminoMsg): _65.MsgFundCommunityPoolResponse;
                toAminoMsg(message: _65.MsgFundCommunityPoolResponse): _65.MsgFundCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _65.MsgFundCommunityPoolResponseProtoMsg): _65.MsgFundCommunityPoolResponse;
                toProto(message: _65.MsgFundCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _65.MsgFundCommunityPoolResponse): _65.MsgFundCommunityPoolResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _65.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _65.MsgUpdateParams;
                fromJSON(object: any): _65.MsgUpdateParams;
                toJSON(message: _65.MsgUpdateParams): unknown;
                fromPartial(object: Partial<_65.MsgUpdateParams>): _65.MsgUpdateParams;
                fromAmino(object: _65.MsgUpdateParamsAmino): _65.MsgUpdateParams;
                toAmino(message: _65.MsgUpdateParams): _65.MsgUpdateParamsAmino;
                fromAminoMsg(object: _65.MsgUpdateParamsAminoMsg): _65.MsgUpdateParams;
                toAminoMsg(message: _65.MsgUpdateParams): _65.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _65.MsgUpdateParamsProtoMsg): _65.MsgUpdateParams;
                toProto(message: _65.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _65.MsgUpdateParams): _65.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _65.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _65.MsgUpdateParamsResponse;
                fromJSON(_: any): _65.MsgUpdateParamsResponse;
                toJSON(_: _65.MsgUpdateParamsResponse): unknown;
                fromPartial(_: Partial<_65.MsgUpdateParamsResponse>): _65.MsgUpdateParamsResponse;
                fromAmino(_: _65.MsgUpdateParamsResponseAmino): _65.MsgUpdateParamsResponse;
                toAmino(_: _65.MsgUpdateParamsResponse): _65.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _65.MsgUpdateParamsResponseAminoMsg): _65.MsgUpdateParamsResponse;
                toAminoMsg(message: _65.MsgUpdateParamsResponse): _65.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _65.MsgUpdateParamsResponseProtoMsg): _65.MsgUpdateParamsResponse;
                toProto(message: _65.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _65.MsgUpdateParamsResponse): _65.MsgUpdateParamsResponseProtoMsg;
            };
            MsgCommunityPoolSpend: {
                typeUrl: string;
                encode(message: _65.MsgCommunityPoolSpend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _65.MsgCommunityPoolSpend;
                fromJSON(object: any): _65.MsgCommunityPoolSpend;
                toJSON(message: _65.MsgCommunityPoolSpend): unknown;
                fromPartial(object: Partial<_65.MsgCommunityPoolSpend>): _65.MsgCommunityPoolSpend;
                fromAmino(object: _65.MsgCommunityPoolSpendAmino): _65.MsgCommunityPoolSpend;
                toAmino(message: _65.MsgCommunityPoolSpend): _65.MsgCommunityPoolSpendAmino;
                fromAminoMsg(object: _65.MsgCommunityPoolSpendAminoMsg): _65.MsgCommunityPoolSpend;
                toAminoMsg(message: _65.MsgCommunityPoolSpend): _65.MsgCommunityPoolSpendAminoMsg;
                fromProtoMsg(message: _65.MsgCommunityPoolSpendProtoMsg): _65.MsgCommunityPoolSpend;
                toProto(message: _65.MsgCommunityPoolSpend): Uint8Array;
                toProtoMsg(message: _65.MsgCommunityPoolSpend): _65.MsgCommunityPoolSpendProtoMsg;
            };
            MsgCommunityPoolSpendResponse: {
                typeUrl: string;
                encode(_: _65.MsgCommunityPoolSpendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _65.MsgCommunityPoolSpendResponse;
                fromJSON(_: any): _65.MsgCommunityPoolSpendResponse;
                toJSON(_: _65.MsgCommunityPoolSpendResponse): unknown;
                fromPartial(_: Partial<_65.MsgCommunityPoolSpendResponse>): _65.MsgCommunityPoolSpendResponse;
                fromAmino(_: _65.MsgCommunityPoolSpendResponseAmino): _65.MsgCommunityPoolSpendResponse;
                toAmino(_: _65.MsgCommunityPoolSpendResponse): _65.MsgCommunityPoolSpendResponseAmino;
                fromAminoMsg(object: _65.MsgCommunityPoolSpendResponseAminoMsg): _65.MsgCommunityPoolSpendResponse;
                toAminoMsg(message: _65.MsgCommunityPoolSpendResponse): _65.MsgCommunityPoolSpendResponseAminoMsg;
                fromProtoMsg(message: _65.MsgCommunityPoolSpendResponseProtoMsg): _65.MsgCommunityPoolSpendResponse;
                toProto(message: _65.MsgCommunityPoolSpendResponse): Uint8Array;
                toProtoMsg(message: _65.MsgCommunityPoolSpendResponse): _65.MsgCommunityPoolSpendResponseProtoMsg;
            };
            MsgDepositValidatorRewardsPool: {
                typeUrl: string;
                encode(message: _65.MsgDepositValidatorRewardsPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _65.MsgDepositValidatorRewardsPool;
                fromJSON(object: any): _65.MsgDepositValidatorRewardsPool;
                toJSON(message: _65.MsgDepositValidatorRewardsPool): unknown;
                fromPartial(object: Partial<_65.MsgDepositValidatorRewardsPool>): _65.MsgDepositValidatorRewardsPool;
                fromAmino(object: _65.MsgDepositValidatorRewardsPoolAmino): _65.MsgDepositValidatorRewardsPool;
                toAmino(message: _65.MsgDepositValidatorRewardsPool): _65.MsgDepositValidatorRewardsPoolAmino;
                fromAminoMsg(object: _65.MsgDepositValidatorRewardsPoolAminoMsg): _65.MsgDepositValidatorRewardsPool;
                toAminoMsg(message: _65.MsgDepositValidatorRewardsPool): _65.MsgDepositValidatorRewardsPoolAminoMsg;
                fromProtoMsg(message: _65.MsgDepositValidatorRewardsPoolProtoMsg): _65.MsgDepositValidatorRewardsPool;
                toProto(message: _65.MsgDepositValidatorRewardsPool): Uint8Array;
                toProtoMsg(message: _65.MsgDepositValidatorRewardsPool): _65.MsgDepositValidatorRewardsPoolProtoMsg;
            };
            MsgDepositValidatorRewardsPoolResponse: {
                typeUrl: string;
                encode(_: _65.MsgDepositValidatorRewardsPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _65.MsgDepositValidatorRewardsPoolResponse;
                fromJSON(_: any): _65.MsgDepositValidatorRewardsPoolResponse;
                toJSON(_: _65.MsgDepositValidatorRewardsPoolResponse): unknown;
                fromPartial(_: Partial<_65.MsgDepositValidatorRewardsPoolResponse>): _65.MsgDepositValidatorRewardsPoolResponse;
                fromAmino(_: _65.MsgDepositValidatorRewardsPoolResponseAmino): _65.MsgDepositValidatorRewardsPoolResponse;
                toAmino(_: _65.MsgDepositValidatorRewardsPoolResponse): _65.MsgDepositValidatorRewardsPoolResponseAmino;
                fromAminoMsg(object: _65.MsgDepositValidatorRewardsPoolResponseAminoMsg): _65.MsgDepositValidatorRewardsPoolResponse;
                toAminoMsg(message: _65.MsgDepositValidatorRewardsPoolResponse): _65.MsgDepositValidatorRewardsPoolResponseAminoMsg;
                fromProtoMsg(message: _65.MsgDepositValidatorRewardsPoolResponseProtoMsg): _65.MsgDepositValidatorRewardsPoolResponse;
                toProto(message: _65.MsgDepositValidatorRewardsPoolResponse): Uint8Array;
                toProtoMsg(message: _65.MsgDepositValidatorRewardsPoolResponse): _65.MsgDepositValidatorRewardsPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _64.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _64.QueryParamsRequest;
                fromJSON(_: any): _64.QueryParamsRequest;
                toJSON(_: _64.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_64.QueryParamsRequest>): _64.QueryParamsRequest;
                fromAmino(_: _64.QueryParamsRequestAmino): _64.QueryParamsRequest;
                toAmino(_: _64.QueryParamsRequest): _64.QueryParamsRequestAmino;
                fromAminoMsg(object: _64.QueryParamsRequestAminoMsg): _64.QueryParamsRequest;
                toAminoMsg(message: _64.QueryParamsRequest): _64.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _64.QueryParamsRequestProtoMsg): _64.QueryParamsRequest;
                toProto(message: _64.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _64.QueryParamsRequest): _64.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _64.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _64.QueryParamsResponse;
                fromJSON(object: any): _64.QueryParamsResponse;
                toJSON(message: _64.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_64.QueryParamsResponse>): _64.QueryParamsResponse;
                fromAmino(object: _64.QueryParamsResponseAmino): _64.QueryParamsResponse;
                toAmino(message: _64.QueryParamsResponse): _64.QueryParamsResponseAmino;
                fromAminoMsg(object: _64.QueryParamsResponseAminoMsg): _64.QueryParamsResponse;
                toAminoMsg(message: _64.QueryParamsResponse): _64.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _64.QueryParamsResponseProtoMsg): _64.QueryParamsResponse;
                toProto(message: _64.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _64.QueryParamsResponse): _64.QueryParamsResponseProtoMsg;
            };
            QueryValidatorDistributionInfoRequest: {
                typeUrl: string;
                encode(message: _64.QueryValidatorDistributionInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _64.QueryValidatorDistributionInfoRequest;
                fromJSON(object: any): _64.QueryValidatorDistributionInfoRequest;
                toJSON(message: _64.QueryValidatorDistributionInfoRequest): unknown;
                fromPartial(object: Partial<_64.QueryValidatorDistributionInfoRequest>): _64.QueryValidatorDistributionInfoRequest;
                fromAmino(object: _64.QueryValidatorDistributionInfoRequestAmino): _64.QueryValidatorDistributionInfoRequest;
                toAmino(message: _64.QueryValidatorDistributionInfoRequest): _64.QueryValidatorDistributionInfoRequestAmino;
                fromAminoMsg(object: _64.QueryValidatorDistributionInfoRequestAminoMsg): _64.QueryValidatorDistributionInfoRequest;
                toAminoMsg(message: _64.QueryValidatorDistributionInfoRequest): _64.QueryValidatorDistributionInfoRequestAminoMsg;
                fromProtoMsg(message: _64.QueryValidatorDistributionInfoRequestProtoMsg): _64.QueryValidatorDistributionInfoRequest;
                toProto(message: _64.QueryValidatorDistributionInfoRequest): Uint8Array;
                toProtoMsg(message: _64.QueryValidatorDistributionInfoRequest): _64.QueryValidatorDistributionInfoRequestProtoMsg;
            };
            QueryValidatorDistributionInfoResponse: {
                typeUrl: string;
                encode(message: _64.QueryValidatorDistributionInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _64.QueryValidatorDistributionInfoResponse;
                fromJSON(object: any): _64.QueryValidatorDistributionInfoResponse;
                toJSON(message: _64.QueryValidatorDistributionInfoResponse): unknown;
                fromPartial(object: Partial<_64.QueryValidatorDistributionInfoResponse>): _64.QueryValidatorDistributionInfoResponse;
                fromAmino(object: _64.QueryValidatorDistributionInfoResponseAmino): _64.QueryValidatorDistributionInfoResponse;
                toAmino(message: _64.QueryValidatorDistributionInfoResponse): _64.QueryValidatorDistributionInfoResponseAmino;
                fromAminoMsg(object: _64.QueryValidatorDistributionInfoResponseAminoMsg): _64.QueryValidatorDistributionInfoResponse;
                toAminoMsg(message: _64.QueryValidatorDistributionInfoResponse): _64.QueryValidatorDistributionInfoResponseAminoMsg;
                fromProtoMsg(message: _64.QueryValidatorDistributionInfoResponseProtoMsg): _64.QueryValidatorDistributionInfoResponse;
                toProto(message: _64.QueryValidatorDistributionInfoResponse): Uint8Array;
                toProtoMsg(message: _64.QueryValidatorDistributionInfoResponse): _64.QueryValidatorDistributionInfoResponseProtoMsg;
            };
            QueryValidatorOutstandingRewardsRequest: {
                typeUrl: string;
                encode(message: _64.QueryValidatorOutstandingRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _64.QueryValidatorOutstandingRewardsRequest;
                fromJSON(object: any): _64.QueryValidatorOutstandingRewardsRequest;
                toJSON(message: _64.QueryValidatorOutstandingRewardsRequest): unknown;
                fromPartial(object: Partial<_64.QueryValidatorOutstandingRewardsRequest>): _64.QueryValidatorOutstandingRewardsRequest;
                fromAmino(object: _64.QueryValidatorOutstandingRewardsRequestAmino): _64.QueryValidatorOutstandingRewardsRequest;
                toAmino(message: _64.QueryValidatorOutstandingRewardsRequest): _64.QueryValidatorOutstandingRewardsRequestAmino;
                fromAminoMsg(object: _64.QueryValidatorOutstandingRewardsRequestAminoMsg): _64.QueryValidatorOutstandingRewardsRequest;
                toAminoMsg(message: _64.QueryValidatorOutstandingRewardsRequest): _64.QueryValidatorOutstandingRewardsRequestAminoMsg;
                fromProtoMsg(message: _64.QueryValidatorOutstandingRewardsRequestProtoMsg): _64.QueryValidatorOutstandingRewardsRequest;
                toProto(message: _64.QueryValidatorOutstandingRewardsRequest): Uint8Array;
                toProtoMsg(message: _64.QueryValidatorOutstandingRewardsRequest): _64.QueryValidatorOutstandingRewardsRequestProtoMsg;
            };
            QueryValidatorOutstandingRewardsResponse: {
                typeUrl: string;
                encode(message: _64.QueryValidatorOutstandingRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _64.QueryValidatorOutstandingRewardsResponse;
                fromJSON(object: any): _64.QueryValidatorOutstandingRewardsResponse;
                toJSON(message: _64.QueryValidatorOutstandingRewardsResponse): unknown;
                fromPartial(object: Partial<_64.QueryValidatorOutstandingRewardsResponse>): _64.QueryValidatorOutstandingRewardsResponse;
                fromAmino(object: _64.QueryValidatorOutstandingRewardsResponseAmino): _64.QueryValidatorOutstandingRewardsResponse;
                toAmino(message: _64.QueryValidatorOutstandingRewardsResponse): _64.QueryValidatorOutstandingRewardsResponseAmino;
                fromAminoMsg(object: _64.QueryValidatorOutstandingRewardsResponseAminoMsg): _64.QueryValidatorOutstandingRewardsResponse;
                toAminoMsg(message: _64.QueryValidatorOutstandingRewardsResponse): _64.QueryValidatorOutstandingRewardsResponseAminoMsg;
                fromProtoMsg(message: _64.QueryValidatorOutstandingRewardsResponseProtoMsg): _64.QueryValidatorOutstandingRewardsResponse;
                toProto(message: _64.QueryValidatorOutstandingRewardsResponse): Uint8Array;
                toProtoMsg(message: _64.QueryValidatorOutstandingRewardsResponse): _64.QueryValidatorOutstandingRewardsResponseProtoMsg;
            };
            QueryValidatorCommissionRequest: {
                typeUrl: string;
                encode(message: _64.QueryValidatorCommissionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _64.QueryValidatorCommissionRequest;
                fromJSON(object: any): _64.QueryValidatorCommissionRequest;
                toJSON(message: _64.QueryValidatorCommissionRequest): unknown;
                fromPartial(object: Partial<_64.QueryValidatorCommissionRequest>): _64.QueryValidatorCommissionRequest;
                fromAmino(object: _64.QueryValidatorCommissionRequestAmino): _64.QueryValidatorCommissionRequest;
                toAmino(message: _64.QueryValidatorCommissionRequest): _64.QueryValidatorCommissionRequestAmino;
                fromAminoMsg(object: _64.QueryValidatorCommissionRequestAminoMsg): _64.QueryValidatorCommissionRequest;
                toAminoMsg(message: _64.QueryValidatorCommissionRequest): _64.QueryValidatorCommissionRequestAminoMsg;
                fromProtoMsg(message: _64.QueryValidatorCommissionRequestProtoMsg): _64.QueryValidatorCommissionRequest;
                toProto(message: _64.QueryValidatorCommissionRequest): Uint8Array;
                toProtoMsg(message: _64.QueryValidatorCommissionRequest): _64.QueryValidatorCommissionRequestProtoMsg;
            };
            QueryValidatorCommissionResponse: {
                typeUrl: string;
                encode(message: _64.QueryValidatorCommissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _64.QueryValidatorCommissionResponse;
                fromJSON(object: any): _64.QueryValidatorCommissionResponse;
                toJSON(message: _64.QueryValidatorCommissionResponse): unknown;
                fromPartial(object: Partial<_64.QueryValidatorCommissionResponse>): _64.QueryValidatorCommissionResponse;
                fromAmino(object: _64.QueryValidatorCommissionResponseAmino): _64.QueryValidatorCommissionResponse;
                toAmino(message: _64.QueryValidatorCommissionResponse): _64.QueryValidatorCommissionResponseAmino;
                fromAminoMsg(object: _64.QueryValidatorCommissionResponseAminoMsg): _64.QueryValidatorCommissionResponse;
                toAminoMsg(message: _64.QueryValidatorCommissionResponse): _64.QueryValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _64.QueryValidatorCommissionResponseProtoMsg): _64.QueryValidatorCommissionResponse;
                toProto(message: _64.QueryValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _64.QueryValidatorCommissionResponse): _64.QueryValidatorCommissionResponseProtoMsg;
            };
            QueryValidatorSlashesRequest: {
                typeUrl: string;
                encode(message: _64.QueryValidatorSlashesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _64.QueryValidatorSlashesRequest;
                fromJSON(object: any): _64.QueryValidatorSlashesRequest;
                toJSON(message: _64.QueryValidatorSlashesRequest): unknown;
                fromPartial(object: Partial<_64.QueryValidatorSlashesRequest>): _64.QueryValidatorSlashesRequest;
                fromAmino(object: _64.QueryValidatorSlashesRequestAmino): _64.QueryValidatorSlashesRequest;
                toAmino(message: _64.QueryValidatorSlashesRequest): _64.QueryValidatorSlashesRequestAmino;
                fromAminoMsg(object: _64.QueryValidatorSlashesRequestAminoMsg): _64.QueryValidatorSlashesRequest;
                toAminoMsg(message: _64.QueryValidatorSlashesRequest): _64.QueryValidatorSlashesRequestAminoMsg;
                fromProtoMsg(message: _64.QueryValidatorSlashesRequestProtoMsg): _64.QueryValidatorSlashesRequest;
                toProto(message: _64.QueryValidatorSlashesRequest): Uint8Array;
                toProtoMsg(message: _64.QueryValidatorSlashesRequest): _64.QueryValidatorSlashesRequestProtoMsg;
            };
            QueryValidatorSlashesResponse: {
                typeUrl: string;
                encode(message: _64.QueryValidatorSlashesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _64.QueryValidatorSlashesResponse;
                fromJSON(object: any): _64.QueryValidatorSlashesResponse;
                toJSON(message: _64.QueryValidatorSlashesResponse): unknown;
                fromPartial(object: Partial<_64.QueryValidatorSlashesResponse>): _64.QueryValidatorSlashesResponse;
                fromAmino(object: _64.QueryValidatorSlashesResponseAmino): _64.QueryValidatorSlashesResponse;
                toAmino(message: _64.QueryValidatorSlashesResponse): _64.QueryValidatorSlashesResponseAmino;
                fromAminoMsg(object: _64.QueryValidatorSlashesResponseAminoMsg): _64.QueryValidatorSlashesResponse;
                toAminoMsg(message: _64.QueryValidatorSlashesResponse): _64.QueryValidatorSlashesResponseAminoMsg;
                fromProtoMsg(message: _64.QueryValidatorSlashesResponseProtoMsg): _64.QueryValidatorSlashesResponse;
                toProto(message: _64.QueryValidatorSlashesResponse): Uint8Array;
                toProtoMsg(message: _64.QueryValidatorSlashesResponse): _64.QueryValidatorSlashesResponseProtoMsg;
            };
            QueryDelegationRewardsRequest: {
                typeUrl: string;
                encode(message: _64.QueryDelegationRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _64.QueryDelegationRewardsRequest;
                fromJSON(object: any): _64.QueryDelegationRewardsRequest;
                toJSON(message: _64.QueryDelegationRewardsRequest): unknown;
                fromPartial(object: Partial<_64.QueryDelegationRewardsRequest>): _64.QueryDelegationRewardsRequest;
                fromAmino(object: _64.QueryDelegationRewardsRequestAmino): _64.QueryDelegationRewardsRequest;
                toAmino(message: _64.QueryDelegationRewardsRequest): _64.QueryDelegationRewardsRequestAmino;
                fromAminoMsg(object: _64.QueryDelegationRewardsRequestAminoMsg): _64.QueryDelegationRewardsRequest;
                toAminoMsg(message: _64.QueryDelegationRewardsRequest): _64.QueryDelegationRewardsRequestAminoMsg;
                fromProtoMsg(message: _64.QueryDelegationRewardsRequestProtoMsg): _64.QueryDelegationRewardsRequest;
                toProto(message: _64.QueryDelegationRewardsRequest): Uint8Array;
                toProtoMsg(message: _64.QueryDelegationRewardsRequest): _64.QueryDelegationRewardsRequestProtoMsg;
            };
            QueryDelegationRewardsResponse: {
                typeUrl: string;
                encode(message: _64.QueryDelegationRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _64.QueryDelegationRewardsResponse;
                fromJSON(object: any): _64.QueryDelegationRewardsResponse;
                toJSON(message: _64.QueryDelegationRewardsResponse): unknown;
                fromPartial(object: Partial<_64.QueryDelegationRewardsResponse>): _64.QueryDelegationRewardsResponse;
                fromAmino(object: _64.QueryDelegationRewardsResponseAmino): _64.QueryDelegationRewardsResponse;
                toAmino(message: _64.QueryDelegationRewardsResponse): _64.QueryDelegationRewardsResponseAmino;
                fromAminoMsg(object: _64.QueryDelegationRewardsResponseAminoMsg): _64.QueryDelegationRewardsResponse;
                toAminoMsg(message: _64.QueryDelegationRewardsResponse): _64.QueryDelegationRewardsResponseAminoMsg;
                fromProtoMsg(message: _64.QueryDelegationRewardsResponseProtoMsg): _64.QueryDelegationRewardsResponse;
                toProto(message: _64.QueryDelegationRewardsResponse): Uint8Array;
                toProtoMsg(message: _64.QueryDelegationRewardsResponse): _64.QueryDelegationRewardsResponseProtoMsg;
            };
            QueryDelegationTotalRewardsRequest: {
                typeUrl: string;
                encode(message: _64.QueryDelegationTotalRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _64.QueryDelegationTotalRewardsRequest;
                fromJSON(object: any): _64.QueryDelegationTotalRewardsRequest;
                toJSON(message: _64.QueryDelegationTotalRewardsRequest): unknown;
                fromPartial(object: Partial<_64.QueryDelegationTotalRewardsRequest>): _64.QueryDelegationTotalRewardsRequest;
                fromAmino(object: _64.QueryDelegationTotalRewardsRequestAmino): _64.QueryDelegationTotalRewardsRequest;
                toAmino(message: _64.QueryDelegationTotalRewardsRequest): _64.QueryDelegationTotalRewardsRequestAmino;
                fromAminoMsg(object: _64.QueryDelegationTotalRewardsRequestAminoMsg): _64.QueryDelegationTotalRewardsRequest;
                toAminoMsg(message: _64.QueryDelegationTotalRewardsRequest): _64.QueryDelegationTotalRewardsRequestAminoMsg;
                fromProtoMsg(message: _64.QueryDelegationTotalRewardsRequestProtoMsg): _64.QueryDelegationTotalRewardsRequest;
                toProto(message: _64.QueryDelegationTotalRewardsRequest): Uint8Array;
                toProtoMsg(message: _64.QueryDelegationTotalRewardsRequest): _64.QueryDelegationTotalRewardsRequestProtoMsg;
            };
            QueryDelegationTotalRewardsResponse: {
                typeUrl: string;
                encode(message: _64.QueryDelegationTotalRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _64.QueryDelegationTotalRewardsResponse;
                fromJSON(object: any): _64.QueryDelegationTotalRewardsResponse;
                toJSON(message: _64.QueryDelegationTotalRewardsResponse): unknown;
                fromPartial(object: Partial<_64.QueryDelegationTotalRewardsResponse>): _64.QueryDelegationTotalRewardsResponse;
                fromAmino(object: _64.QueryDelegationTotalRewardsResponseAmino): _64.QueryDelegationTotalRewardsResponse;
                toAmino(message: _64.QueryDelegationTotalRewardsResponse): _64.QueryDelegationTotalRewardsResponseAmino;
                fromAminoMsg(object: _64.QueryDelegationTotalRewardsResponseAminoMsg): _64.QueryDelegationTotalRewardsResponse;
                toAminoMsg(message: _64.QueryDelegationTotalRewardsResponse): _64.QueryDelegationTotalRewardsResponseAminoMsg;
                fromProtoMsg(message: _64.QueryDelegationTotalRewardsResponseProtoMsg): _64.QueryDelegationTotalRewardsResponse;
                toProto(message: _64.QueryDelegationTotalRewardsResponse): Uint8Array;
                toProtoMsg(message: _64.QueryDelegationTotalRewardsResponse): _64.QueryDelegationTotalRewardsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _64.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _64.QueryDelegatorValidatorsRequest;
                fromJSON(object: any): _64.QueryDelegatorValidatorsRequest;
                toJSON(message: _64.QueryDelegatorValidatorsRequest): unknown;
                fromPartial(object: Partial<_64.QueryDelegatorValidatorsRequest>): _64.QueryDelegatorValidatorsRequest;
                fromAmino(object: _64.QueryDelegatorValidatorsRequestAmino): _64.QueryDelegatorValidatorsRequest;
                toAmino(message: _64.QueryDelegatorValidatorsRequest): _64.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _64.QueryDelegatorValidatorsRequestAminoMsg): _64.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _64.QueryDelegatorValidatorsRequest): _64.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _64.QueryDelegatorValidatorsRequestProtoMsg): _64.QueryDelegatorValidatorsRequest;
                toProto(message: _64.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _64.QueryDelegatorValidatorsRequest): _64.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _64.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _64.QueryDelegatorValidatorsResponse;
                fromJSON(object: any): _64.QueryDelegatorValidatorsResponse;
                toJSON(message: _64.QueryDelegatorValidatorsResponse): unknown;
                fromPartial(object: Partial<_64.QueryDelegatorValidatorsResponse>): _64.QueryDelegatorValidatorsResponse;
                fromAmino(object: _64.QueryDelegatorValidatorsResponseAmino): _64.QueryDelegatorValidatorsResponse;
                toAmino(message: _64.QueryDelegatorValidatorsResponse): _64.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _64.QueryDelegatorValidatorsResponseAminoMsg): _64.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _64.QueryDelegatorValidatorsResponse): _64.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _64.QueryDelegatorValidatorsResponseProtoMsg): _64.QueryDelegatorValidatorsResponse;
                toProto(message: _64.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _64.QueryDelegatorValidatorsResponse): _64.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorWithdrawAddressRequest: {
                typeUrl: string;
                encode(message: _64.QueryDelegatorWithdrawAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _64.QueryDelegatorWithdrawAddressRequest;
                fromJSON(object: any): _64.QueryDelegatorWithdrawAddressRequest;
                toJSON(message: _64.QueryDelegatorWithdrawAddressRequest): unknown;
                fromPartial(object: Partial<_64.QueryDelegatorWithdrawAddressRequest>): _64.QueryDelegatorWithdrawAddressRequest;
                fromAmino(object: _64.QueryDelegatorWithdrawAddressRequestAmino): _64.QueryDelegatorWithdrawAddressRequest;
                toAmino(message: _64.QueryDelegatorWithdrawAddressRequest): _64.QueryDelegatorWithdrawAddressRequestAmino;
                fromAminoMsg(object: _64.QueryDelegatorWithdrawAddressRequestAminoMsg): _64.QueryDelegatorWithdrawAddressRequest;
                toAminoMsg(message: _64.QueryDelegatorWithdrawAddressRequest): _64.QueryDelegatorWithdrawAddressRequestAminoMsg;
                fromProtoMsg(message: _64.QueryDelegatorWithdrawAddressRequestProtoMsg): _64.QueryDelegatorWithdrawAddressRequest;
                toProto(message: _64.QueryDelegatorWithdrawAddressRequest): Uint8Array;
                toProtoMsg(message: _64.QueryDelegatorWithdrawAddressRequest): _64.QueryDelegatorWithdrawAddressRequestProtoMsg;
            };
            QueryDelegatorWithdrawAddressResponse: {
                typeUrl: string;
                encode(message: _64.QueryDelegatorWithdrawAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _64.QueryDelegatorWithdrawAddressResponse;
                fromJSON(object: any): _64.QueryDelegatorWithdrawAddressResponse;
                toJSON(message: _64.QueryDelegatorWithdrawAddressResponse): unknown;
                fromPartial(object: Partial<_64.QueryDelegatorWithdrawAddressResponse>): _64.QueryDelegatorWithdrawAddressResponse;
                fromAmino(object: _64.QueryDelegatorWithdrawAddressResponseAmino): _64.QueryDelegatorWithdrawAddressResponse;
                toAmino(message: _64.QueryDelegatorWithdrawAddressResponse): _64.QueryDelegatorWithdrawAddressResponseAmino;
                fromAminoMsg(object: _64.QueryDelegatorWithdrawAddressResponseAminoMsg): _64.QueryDelegatorWithdrawAddressResponse;
                toAminoMsg(message: _64.QueryDelegatorWithdrawAddressResponse): _64.QueryDelegatorWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _64.QueryDelegatorWithdrawAddressResponseProtoMsg): _64.QueryDelegatorWithdrawAddressResponse;
                toProto(message: _64.QueryDelegatorWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _64.QueryDelegatorWithdrawAddressResponse): _64.QueryDelegatorWithdrawAddressResponseProtoMsg;
            };
            QueryCommunityPoolRequest: {
                typeUrl: string;
                encode(_: _64.QueryCommunityPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _64.QueryCommunityPoolRequest;
                fromJSON(_: any): _64.QueryCommunityPoolRequest;
                toJSON(_: _64.QueryCommunityPoolRequest): unknown;
                fromPartial(_: Partial<_64.QueryCommunityPoolRequest>): _64.QueryCommunityPoolRequest;
                fromAmino(_: _64.QueryCommunityPoolRequestAmino): _64.QueryCommunityPoolRequest;
                toAmino(_: _64.QueryCommunityPoolRequest): _64.QueryCommunityPoolRequestAmino;
                fromAminoMsg(object: _64.QueryCommunityPoolRequestAminoMsg): _64.QueryCommunityPoolRequest;
                toAminoMsg(message: _64.QueryCommunityPoolRequest): _64.QueryCommunityPoolRequestAminoMsg;
                fromProtoMsg(message: _64.QueryCommunityPoolRequestProtoMsg): _64.QueryCommunityPoolRequest;
                toProto(message: _64.QueryCommunityPoolRequest): Uint8Array;
                toProtoMsg(message: _64.QueryCommunityPoolRequest): _64.QueryCommunityPoolRequestProtoMsg;
            };
            QueryCommunityPoolResponse: {
                typeUrl: string;
                encode(message: _64.QueryCommunityPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _64.QueryCommunityPoolResponse;
                fromJSON(object: any): _64.QueryCommunityPoolResponse;
                toJSON(message: _64.QueryCommunityPoolResponse): unknown;
                fromPartial(object: Partial<_64.QueryCommunityPoolResponse>): _64.QueryCommunityPoolResponse;
                fromAmino(object: _64.QueryCommunityPoolResponseAmino): _64.QueryCommunityPoolResponse;
                toAmino(message: _64.QueryCommunityPoolResponse): _64.QueryCommunityPoolResponseAmino;
                fromAminoMsg(object: _64.QueryCommunityPoolResponseAminoMsg): _64.QueryCommunityPoolResponse;
                toAminoMsg(message: _64.QueryCommunityPoolResponse): _64.QueryCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _64.QueryCommunityPoolResponseProtoMsg): _64.QueryCommunityPoolResponse;
                toProto(message: _64.QueryCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _64.QueryCommunityPoolResponse): _64.QueryCommunityPoolResponseProtoMsg;
            };
            DelegatorWithdrawInfo: {
                typeUrl: string;
                encode(message: _63.DelegatorWithdrawInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _63.DelegatorWithdrawInfo;
                fromJSON(object: any): _63.DelegatorWithdrawInfo;
                toJSON(message: _63.DelegatorWithdrawInfo): unknown;
                fromPartial(object: Partial<_63.DelegatorWithdrawInfo>): _63.DelegatorWithdrawInfo;
                fromAmino(object: _63.DelegatorWithdrawInfoAmino): _63.DelegatorWithdrawInfo;
                toAmino(message: _63.DelegatorWithdrawInfo): _63.DelegatorWithdrawInfoAmino;
                fromAminoMsg(object: _63.DelegatorWithdrawInfoAminoMsg): _63.DelegatorWithdrawInfo;
                toAminoMsg(message: _63.DelegatorWithdrawInfo): _63.DelegatorWithdrawInfoAminoMsg;
                fromProtoMsg(message: _63.DelegatorWithdrawInfoProtoMsg): _63.DelegatorWithdrawInfo;
                toProto(message: _63.DelegatorWithdrawInfo): Uint8Array;
                toProtoMsg(message: _63.DelegatorWithdrawInfo): _63.DelegatorWithdrawInfoProtoMsg;
            };
            ValidatorOutstandingRewardsRecord: {
                typeUrl: string;
                encode(message: _63.ValidatorOutstandingRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _63.ValidatorOutstandingRewardsRecord;
                fromJSON(object: any): _63.ValidatorOutstandingRewardsRecord;
                toJSON(message: _63.ValidatorOutstandingRewardsRecord): unknown;
                fromPartial(object: Partial<_63.ValidatorOutstandingRewardsRecord>): _63.ValidatorOutstandingRewardsRecord;
                fromAmino(object: _63.ValidatorOutstandingRewardsRecordAmino): _63.ValidatorOutstandingRewardsRecord;
                toAmino(message: _63.ValidatorOutstandingRewardsRecord): _63.ValidatorOutstandingRewardsRecordAmino;
                fromAminoMsg(object: _63.ValidatorOutstandingRewardsRecordAminoMsg): _63.ValidatorOutstandingRewardsRecord;
                toAminoMsg(message: _63.ValidatorOutstandingRewardsRecord): _63.ValidatorOutstandingRewardsRecordAminoMsg;
                fromProtoMsg(message: _63.ValidatorOutstandingRewardsRecordProtoMsg): _63.ValidatorOutstandingRewardsRecord;
                toProto(message: _63.ValidatorOutstandingRewardsRecord): Uint8Array;
                toProtoMsg(message: _63.ValidatorOutstandingRewardsRecord): _63.ValidatorOutstandingRewardsRecordProtoMsg;
            };
            ValidatorAccumulatedCommissionRecord: {
                typeUrl: string;
                encode(message: _63.ValidatorAccumulatedCommissionRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _63.ValidatorAccumulatedCommissionRecord;
                fromJSON(object: any): _63.ValidatorAccumulatedCommissionRecord;
                toJSON(message: _63.ValidatorAccumulatedCommissionRecord): unknown;
                fromPartial(object: Partial<_63.ValidatorAccumulatedCommissionRecord>): _63.ValidatorAccumulatedCommissionRecord;
                fromAmino(object: _63.ValidatorAccumulatedCommissionRecordAmino): _63.ValidatorAccumulatedCommissionRecord;
                toAmino(message: _63.ValidatorAccumulatedCommissionRecord): _63.ValidatorAccumulatedCommissionRecordAmino;
                fromAminoMsg(object: _63.ValidatorAccumulatedCommissionRecordAminoMsg): _63.ValidatorAccumulatedCommissionRecord;
                toAminoMsg(message: _63.ValidatorAccumulatedCommissionRecord): _63.ValidatorAccumulatedCommissionRecordAminoMsg;
                fromProtoMsg(message: _63.ValidatorAccumulatedCommissionRecordProtoMsg): _63.ValidatorAccumulatedCommissionRecord;
                toProto(message: _63.ValidatorAccumulatedCommissionRecord): Uint8Array;
                toProtoMsg(message: _63.ValidatorAccumulatedCommissionRecord): _63.ValidatorAccumulatedCommissionRecordProtoMsg;
            };
            ValidatorHistoricalRewardsRecord: {
                typeUrl: string;
                encode(message: _63.ValidatorHistoricalRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _63.ValidatorHistoricalRewardsRecord;
                fromJSON(object: any): _63.ValidatorHistoricalRewardsRecord;
                toJSON(message: _63.ValidatorHistoricalRewardsRecord): unknown;
                fromPartial(object: Partial<_63.ValidatorHistoricalRewardsRecord>): _63.ValidatorHistoricalRewardsRecord;
                fromAmino(object: _63.ValidatorHistoricalRewardsRecordAmino): _63.ValidatorHistoricalRewardsRecord;
                toAmino(message: _63.ValidatorHistoricalRewardsRecord): _63.ValidatorHistoricalRewardsRecordAmino;
                fromAminoMsg(object: _63.ValidatorHistoricalRewardsRecordAminoMsg): _63.ValidatorHistoricalRewardsRecord;
                toAminoMsg(message: _63.ValidatorHistoricalRewardsRecord): _63.ValidatorHistoricalRewardsRecordAminoMsg;
                fromProtoMsg(message: _63.ValidatorHistoricalRewardsRecordProtoMsg): _63.ValidatorHistoricalRewardsRecord;
                toProto(message: _63.ValidatorHistoricalRewardsRecord): Uint8Array;
                toProtoMsg(message: _63.ValidatorHistoricalRewardsRecord): _63.ValidatorHistoricalRewardsRecordProtoMsg;
            };
            ValidatorCurrentRewardsRecord: {
                typeUrl: string;
                encode(message: _63.ValidatorCurrentRewardsRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _63.ValidatorCurrentRewardsRecord;
                fromJSON(object: any): _63.ValidatorCurrentRewardsRecord;
                toJSON(message: _63.ValidatorCurrentRewardsRecord): unknown;
                fromPartial(object: Partial<_63.ValidatorCurrentRewardsRecord>): _63.ValidatorCurrentRewardsRecord;
                fromAmino(object: _63.ValidatorCurrentRewardsRecordAmino): _63.ValidatorCurrentRewardsRecord;
                toAmino(message: _63.ValidatorCurrentRewardsRecord): _63.ValidatorCurrentRewardsRecordAmino;
                fromAminoMsg(object: _63.ValidatorCurrentRewardsRecordAminoMsg): _63.ValidatorCurrentRewardsRecord;
                toAminoMsg(message: _63.ValidatorCurrentRewardsRecord): _63.ValidatorCurrentRewardsRecordAminoMsg;
                fromProtoMsg(message: _63.ValidatorCurrentRewardsRecordProtoMsg): _63.ValidatorCurrentRewardsRecord;
                toProto(message: _63.ValidatorCurrentRewardsRecord): Uint8Array;
                toProtoMsg(message: _63.ValidatorCurrentRewardsRecord): _63.ValidatorCurrentRewardsRecordProtoMsg;
            };
            DelegatorStartingInfoRecord: {
                typeUrl: string;
                encode(message: _63.DelegatorStartingInfoRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _63.DelegatorStartingInfoRecord;
                fromJSON(object: any): _63.DelegatorStartingInfoRecord;
                toJSON(message: _63.DelegatorStartingInfoRecord): unknown;
                fromPartial(object: Partial<_63.DelegatorStartingInfoRecord>): _63.DelegatorStartingInfoRecord;
                fromAmino(object: _63.DelegatorStartingInfoRecordAmino): _63.DelegatorStartingInfoRecord;
                toAmino(message: _63.DelegatorStartingInfoRecord): _63.DelegatorStartingInfoRecordAmino;
                fromAminoMsg(object: _63.DelegatorStartingInfoRecordAminoMsg): _63.DelegatorStartingInfoRecord;
                toAminoMsg(message: _63.DelegatorStartingInfoRecord): _63.DelegatorStartingInfoRecordAminoMsg;
                fromProtoMsg(message: _63.DelegatorStartingInfoRecordProtoMsg): _63.DelegatorStartingInfoRecord;
                toProto(message: _63.DelegatorStartingInfoRecord): Uint8Array;
                toProtoMsg(message: _63.DelegatorStartingInfoRecord): _63.DelegatorStartingInfoRecordProtoMsg;
            };
            ValidatorSlashEventRecord: {
                typeUrl: string;
                encode(message: _63.ValidatorSlashEventRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _63.ValidatorSlashEventRecord;
                fromJSON(object: any): _63.ValidatorSlashEventRecord;
                toJSON(message: _63.ValidatorSlashEventRecord): unknown;
                fromPartial(object: Partial<_63.ValidatorSlashEventRecord>): _63.ValidatorSlashEventRecord;
                fromAmino(object: _63.ValidatorSlashEventRecordAmino): _63.ValidatorSlashEventRecord;
                toAmino(message: _63.ValidatorSlashEventRecord): _63.ValidatorSlashEventRecordAmino;
                fromAminoMsg(object: _63.ValidatorSlashEventRecordAminoMsg): _63.ValidatorSlashEventRecord;
                toAminoMsg(message: _63.ValidatorSlashEventRecord): _63.ValidatorSlashEventRecordAminoMsg;
                fromProtoMsg(message: _63.ValidatorSlashEventRecordProtoMsg): _63.ValidatorSlashEventRecord;
                toProto(message: _63.ValidatorSlashEventRecord): Uint8Array;
                toProtoMsg(message: _63.ValidatorSlashEventRecord): _63.ValidatorSlashEventRecordProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _63.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _63.GenesisState;
                fromJSON(object: any): _63.GenesisState;
                toJSON(message: _63.GenesisState): unknown;
                fromPartial(object: Partial<_63.GenesisState>): _63.GenesisState;
                fromAmino(object: _63.GenesisStateAmino): _63.GenesisState;
                toAmino(message: _63.GenesisState): _63.GenesisStateAmino;
                fromAminoMsg(object: _63.GenesisStateAminoMsg): _63.GenesisState;
                toAminoMsg(message: _63.GenesisState): _63.GenesisStateAminoMsg;
                fromProtoMsg(message: _63.GenesisStateProtoMsg): _63.GenesisState;
                toProto(message: _63.GenesisState): Uint8Array;
                toProtoMsg(message: _63.GenesisState): _63.GenesisStateProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _62.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _62.Params;
                fromJSON(object: any): _62.Params;
                toJSON(message: _62.Params): unknown;
                fromPartial(object: Partial<_62.Params>): _62.Params;
                fromAmino(object: _62.ParamsAmino): _62.Params;
                toAmino(message: _62.Params): _62.ParamsAmino;
                fromAminoMsg(object: _62.ParamsAminoMsg): _62.Params;
                toAminoMsg(message: _62.Params): _62.ParamsAminoMsg;
                fromProtoMsg(message: _62.ParamsProtoMsg): _62.Params;
                toProto(message: _62.Params): Uint8Array;
                toProtoMsg(message: _62.Params): _62.ParamsProtoMsg;
            };
            ValidatorHistoricalRewards: {
                typeUrl: string;
                encode(message: _62.ValidatorHistoricalRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _62.ValidatorHistoricalRewards;
                fromJSON(object: any): _62.ValidatorHistoricalRewards;
                toJSON(message: _62.ValidatorHistoricalRewards): unknown;
                fromPartial(object: Partial<_62.ValidatorHistoricalRewards>): _62.ValidatorHistoricalRewards;
                fromAmino(object: _62.ValidatorHistoricalRewardsAmino): _62.ValidatorHistoricalRewards;
                toAmino(message: _62.ValidatorHistoricalRewards): _62.ValidatorHistoricalRewardsAmino;
                fromAminoMsg(object: _62.ValidatorHistoricalRewardsAminoMsg): _62.ValidatorHistoricalRewards;
                toAminoMsg(message: _62.ValidatorHistoricalRewards): _62.ValidatorHistoricalRewardsAminoMsg;
                fromProtoMsg(message: _62.ValidatorHistoricalRewardsProtoMsg): _62.ValidatorHistoricalRewards;
                toProto(message: _62.ValidatorHistoricalRewards): Uint8Array;
                toProtoMsg(message: _62.ValidatorHistoricalRewards): _62.ValidatorHistoricalRewardsProtoMsg;
            };
            ValidatorCurrentRewards: {
                typeUrl: string;
                encode(message: _62.ValidatorCurrentRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _62.ValidatorCurrentRewards;
                fromJSON(object: any): _62.ValidatorCurrentRewards;
                toJSON(message: _62.ValidatorCurrentRewards): unknown;
                fromPartial(object: Partial<_62.ValidatorCurrentRewards>): _62.ValidatorCurrentRewards;
                fromAmino(object: _62.ValidatorCurrentRewardsAmino): _62.ValidatorCurrentRewards;
                toAmino(message: _62.ValidatorCurrentRewards): _62.ValidatorCurrentRewardsAmino;
                fromAminoMsg(object: _62.ValidatorCurrentRewardsAminoMsg): _62.ValidatorCurrentRewards;
                toAminoMsg(message: _62.ValidatorCurrentRewards): _62.ValidatorCurrentRewardsAminoMsg;
                fromProtoMsg(message: _62.ValidatorCurrentRewardsProtoMsg): _62.ValidatorCurrentRewards;
                toProto(message: _62.ValidatorCurrentRewards): Uint8Array;
                toProtoMsg(message: _62.ValidatorCurrentRewards): _62.ValidatorCurrentRewardsProtoMsg;
            };
            ValidatorAccumulatedCommission: {
                typeUrl: string;
                encode(message: _62.ValidatorAccumulatedCommission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _62.ValidatorAccumulatedCommission;
                fromJSON(object: any): _62.ValidatorAccumulatedCommission;
                toJSON(message: _62.ValidatorAccumulatedCommission): unknown;
                fromPartial(object: Partial<_62.ValidatorAccumulatedCommission>): _62.ValidatorAccumulatedCommission;
                fromAmino(object: _62.ValidatorAccumulatedCommissionAmino): _62.ValidatorAccumulatedCommission;
                toAmino(message: _62.ValidatorAccumulatedCommission): _62.ValidatorAccumulatedCommissionAmino;
                fromAminoMsg(object: _62.ValidatorAccumulatedCommissionAminoMsg): _62.ValidatorAccumulatedCommission;
                toAminoMsg(message: _62.ValidatorAccumulatedCommission): _62.ValidatorAccumulatedCommissionAminoMsg;
                fromProtoMsg(message: _62.ValidatorAccumulatedCommissionProtoMsg): _62.ValidatorAccumulatedCommission;
                toProto(message: _62.ValidatorAccumulatedCommission): Uint8Array;
                toProtoMsg(message: _62.ValidatorAccumulatedCommission): _62.ValidatorAccumulatedCommissionProtoMsg;
            };
            ValidatorOutstandingRewards: {
                typeUrl: string;
                encode(message: _62.ValidatorOutstandingRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _62.ValidatorOutstandingRewards;
                fromJSON(object: any): _62.ValidatorOutstandingRewards;
                toJSON(message: _62.ValidatorOutstandingRewards): unknown;
                fromPartial(object: Partial<_62.ValidatorOutstandingRewards>): _62.ValidatorOutstandingRewards;
                fromAmino(object: _62.ValidatorOutstandingRewardsAmino): _62.ValidatorOutstandingRewards;
                toAmino(message: _62.ValidatorOutstandingRewards): _62.ValidatorOutstandingRewardsAmino;
                fromAminoMsg(object: _62.ValidatorOutstandingRewardsAminoMsg): _62.ValidatorOutstandingRewards;
                toAminoMsg(message: _62.ValidatorOutstandingRewards): _62.ValidatorOutstandingRewardsAminoMsg;
                fromProtoMsg(message: _62.ValidatorOutstandingRewardsProtoMsg): _62.ValidatorOutstandingRewards;
                toProto(message: _62.ValidatorOutstandingRewards): Uint8Array;
                toProtoMsg(message: _62.ValidatorOutstandingRewards): _62.ValidatorOutstandingRewardsProtoMsg;
            };
            ValidatorSlashEvent: {
                typeUrl: string;
                encode(message: _62.ValidatorSlashEvent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _62.ValidatorSlashEvent;
                fromJSON(object: any): _62.ValidatorSlashEvent;
                toJSON(message: _62.ValidatorSlashEvent): unknown;
                fromPartial(object: Partial<_62.ValidatorSlashEvent>): _62.ValidatorSlashEvent;
                fromAmino(object: _62.ValidatorSlashEventAmino): _62.ValidatorSlashEvent;
                toAmino(message: _62.ValidatorSlashEvent): _62.ValidatorSlashEventAmino;
                fromAminoMsg(object: _62.ValidatorSlashEventAminoMsg): _62.ValidatorSlashEvent;
                toAminoMsg(message: _62.ValidatorSlashEvent): _62.ValidatorSlashEventAminoMsg;
                fromProtoMsg(message: _62.ValidatorSlashEventProtoMsg): _62.ValidatorSlashEvent;
                toProto(message: _62.ValidatorSlashEvent): Uint8Array;
                toProtoMsg(message: _62.ValidatorSlashEvent): _62.ValidatorSlashEventProtoMsg;
            };
            ValidatorSlashEvents: {
                typeUrl: string;
                encode(message: _62.ValidatorSlashEvents, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _62.ValidatorSlashEvents;
                fromJSON(object: any): _62.ValidatorSlashEvents;
                toJSON(message: _62.ValidatorSlashEvents): unknown;
                fromPartial(object: Partial<_62.ValidatorSlashEvents>): _62.ValidatorSlashEvents;
                fromAmino(object: _62.ValidatorSlashEventsAmino): _62.ValidatorSlashEvents;
                toAmino(message: _62.ValidatorSlashEvents): _62.ValidatorSlashEventsAmino;
                fromAminoMsg(object: _62.ValidatorSlashEventsAminoMsg): _62.ValidatorSlashEvents;
                toAminoMsg(message: _62.ValidatorSlashEvents): _62.ValidatorSlashEventsAminoMsg;
                fromProtoMsg(message: _62.ValidatorSlashEventsProtoMsg): _62.ValidatorSlashEvents;
                toProto(message: _62.ValidatorSlashEvents): Uint8Array;
                toProtoMsg(message: _62.ValidatorSlashEvents): _62.ValidatorSlashEventsProtoMsg;
            };
            FeePool: {
                typeUrl: string;
                encode(message: _62.FeePool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _62.FeePool;
                fromJSON(object: any): _62.FeePool;
                toJSON(message: _62.FeePool): unknown;
                fromPartial(object: Partial<_62.FeePool>): _62.FeePool;
                fromAmino(object: _62.FeePoolAmino): _62.FeePool;
                toAmino(message: _62.FeePool): _62.FeePoolAmino;
                fromAminoMsg(object: _62.FeePoolAminoMsg): _62.FeePool;
                toAminoMsg(message: _62.FeePool): _62.FeePoolAminoMsg;
                fromProtoMsg(message: _62.FeePoolProtoMsg): _62.FeePool;
                toProto(message: _62.FeePool): Uint8Array;
                toProtoMsg(message: _62.FeePool): _62.FeePoolProtoMsg;
            };
            CommunityPoolSpendProposal: {
                typeUrl: string;
                encode(message: _62.CommunityPoolSpendProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _62.CommunityPoolSpendProposal;
                fromJSON(object: any): _62.CommunityPoolSpendProposal;
                toJSON(message: _62.CommunityPoolSpendProposal): unknown;
                fromPartial(object: Partial<_62.CommunityPoolSpendProposal>): _62.CommunityPoolSpendProposal;
                fromAmino(object: _62.CommunityPoolSpendProposalAmino): _62.CommunityPoolSpendProposal;
                toAmino(message: _62.CommunityPoolSpendProposal): _62.CommunityPoolSpendProposalAmino;
                fromAminoMsg(object: _62.CommunityPoolSpendProposalAminoMsg): _62.CommunityPoolSpendProposal;
                toAminoMsg(message: _62.CommunityPoolSpendProposal): _62.CommunityPoolSpendProposalAminoMsg;
                fromProtoMsg(message: _62.CommunityPoolSpendProposalProtoMsg): _62.CommunityPoolSpendProposal;
                toProto(message: _62.CommunityPoolSpendProposal): Uint8Array;
                toProtoMsg(message: _62.CommunityPoolSpendProposal): _62.CommunityPoolSpendProposalProtoMsg;
            };
            DelegatorStartingInfo: {
                typeUrl: string;
                encode(message: _62.DelegatorStartingInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _62.DelegatorStartingInfo;
                fromJSON(object: any): _62.DelegatorStartingInfo;
                toJSON(message: _62.DelegatorStartingInfo): unknown;
                fromPartial(object: Partial<_62.DelegatorStartingInfo>): _62.DelegatorStartingInfo;
                fromAmino(object: _62.DelegatorStartingInfoAmino): _62.DelegatorStartingInfo;
                toAmino(message: _62.DelegatorStartingInfo): _62.DelegatorStartingInfoAmino;
                fromAminoMsg(object: _62.DelegatorStartingInfoAminoMsg): _62.DelegatorStartingInfo;
                toAminoMsg(message: _62.DelegatorStartingInfo): _62.DelegatorStartingInfoAminoMsg;
                fromProtoMsg(message: _62.DelegatorStartingInfoProtoMsg): _62.DelegatorStartingInfo;
                toProto(message: _62.DelegatorStartingInfo): Uint8Array;
                toProtoMsg(message: _62.DelegatorStartingInfo): _62.DelegatorStartingInfoProtoMsg;
            };
            DelegationDelegatorReward: {
                typeUrl: string;
                encode(message: _62.DelegationDelegatorReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _62.DelegationDelegatorReward;
                fromJSON(object: any): _62.DelegationDelegatorReward;
                toJSON(message: _62.DelegationDelegatorReward): unknown;
                fromPartial(object: Partial<_62.DelegationDelegatorReward>): _62.DelegationDelegatorReward;
                fromAmino(object: _62.DelegationDelegatorRewardAmino): _62.DelegationDelegatorReward;
                toAmino(message: _62.DelegationDelegatorReward): _62.DelegationDelegatorRewardAmino;
                fromAminoMsg(object: _62.DelegationDelegatorRewardAminoMsg): _62.DelegationDelegatorReward;
                toAminoMsg(message: _62.DelegationDelegatorReward): _62.DelegationDelegatorRewardAminoMsg;
                fromProtoMsg(message: _62.DelegationDelegatorRewardProtoMsg): _62.DelegationDelegatorReward;
                toProto(message: _62.DelegationDelegatorReward): Uint8Array;
                toProtoMsg(message: _62.DelegationDelegatorReward): _62.DelegationDelegatorRewardProtoMsg;
            };
            CommunityPoolSpendProposalWithDeposit: {
                typeUrl: string;
                encode(message: _62.CommunityPoolSpendProposalWithDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _62.CommunityPoolSpendProposalWithDeposit;
                fromJSON(object: any): _62.CommunityPoolSpendProposalWithDeposit;
                toJSON(message: _62.CommunityPoolSpendProposalWithDeposit): unknown;
                fromPartial(object: Partial<_62.CommunityPoolSpendProposalWithDeposit>): _62.CommunityPoolSpendProposalWithDeposit;
                fromAmino(object: _62.CommunityPoolSpendProposalWithDepositAmino): _62.CommunityPoolSpendProposalWithDeposit;
                toAmino(message: _62.CommunityPoolSpendProposalWithDeposit): _62.CommunityPoolSpendProposalWithDepositAmino;
                fromAminoMsg(object: _62.CommunityPoolSpendProposalWithDepositAminoMsg): _62.CommunityPoolSpendProposalWithDeposit;
                toAminoMsg(message: _62.CommunityPoolSpendProposalWithDeposit): _62.CommunityPoolSpendProposalWithDepositAminoMsg;
                fromProtoMsg(message: _62.CommunityPoolSpendProposalWithDepositProtoMsg): _62.CommunityPoolSpendProposalWithDeposit;
                toProto(message: _62.CommunityPoolSpendProposalWithDeposit): Uint8Array;
                toProtoMsg(message: _62.CommunityPoolSpendProposalWithDeposit): _62.CommunityPoolSpendProposalWithDepositProtoMsg;
            };
        };
    }
    namespace evidence {
        namespace module {
            const v1: {
                protobufPackage: "cosmos.evidence.module.v1";
                Module: {
                    typeUrl: string;
                    encode(_: _66.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _66.Module;
                    fromJSON(_: any): _66.Module;
                    toJSON(_: _66.Module): unknown;
                    fromPartial(_: Partial<_66.Module>): _66.Module;
                    fromAmino(_: _66.ModuleAmino): _66.Module;
                    toAmino(_: _66.Module): _66.ModuleAmino;
                    fromAminoMsg(object: _66.ModuleAminoMsg): _66.Module;
                    toAminoMsg(message: _66.Module): _66.ModuleAminoMsg;
                    fromProtoMsg(message: _66.ModuleProtoMsg): _66.Module;
                    toProto(message: _66.Module): Uint8Array;
                    toProtoMsg(message: _66.Module): _66.ModuleProtoMsg;
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
                    encode(_: _67.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _67.Module;
                    fromJSON(_: any): _67.Module;
                    toJSON(_: _67.Module): unknown;
                    fromPartial(_: Partial<_67.Module>): _67.Module;
                    fromAmino(_: _67.ModuleAmino): _67.Module;
                    toAmino(_: _67.Module): _67.ModuleAmino;
                    fromAminoMsg(object: _67.ModuleAminoMsg): _67.Module;
                    toAminoMsg(message: _67.Module): _67.ModuleAminoMsg;
                    fromProtoMsg(message: _67.ModuleProtoMsg): _67.Module;
                    toProto(message: _67.Module): Uint8Array;
                    toProtoMsg(message: _67.Module): _67.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            Msg: typeof _269.Msg;
            Query: typeof _252.Query;
            QueryClientImpl: typeof _252.QueryClientImpl;
            LCDQueryClient: typeof _234.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _71.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _71.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    pruneAllowances(value: _71.MsgPruneAllowances): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _71.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _71.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _71.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _71.MsgRevokeAllowance;
                    };
                    pruneAllowances(value: _71.MsgPruneAllowances): {
                        typeUrl: string;
                        value: _71.MsgPruneAllowances;
                    };
                };
                toJSON: {
                    grantAllowance(value: _71.MsgGrantAllowance): {
                        typeUrl: string;
                        value: unknown;
                    };
                    revokeAllowance(value: _71.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: unknown;
                    };
                    pruneAllowances(value: _71.MsgPruneAllowances): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    grantAllowance(value: any): {
                        typeUrl: string;
                        value: _71.MsgGrantAllowance;
                    };
                    revokeAllowance(value: any): {
                        typeUrl: string;
                        value: _71.MsgRevokeAllowance;
                    };
                    pruneAllowances(value: any): {
                        typeUrl: string;
                        value: _71.MsgPruneAllowances;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _71.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _71.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _71.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _71.MsgRevokeAllowance;
                    };
                    pruneAllowances(value: _71.MsgPruneAllowances): {
                        typeUrl: string;
                        value: _71.MsgPruneAllowances;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: (message: _71.MsgGrantAllowance) => _71.MsgGrantAllowanceAmino;
                    fromAmino: (object: _71.MsgGrantAllowanceAmino) => _71.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: (message: _71.MsgRevokeAllowance) => _71.MsgRevokeAllowanceAmino;
                    fromAmino: (object: _71.MsgRevokeAllowanceAmino) => _71.MsgRevokeAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgPruneAllowances": {
                    aminoType: string;
                    toAmino: (message: _71.MsgPruneAllowances) => _71.MsgPruneAllowancesAmino;
                    fromAmino: (object: _71.MsgPruneAllowancesAmino) => _71.MsgPruneAllowances;
                };
            };
            protobufPackage: "cosmos.feegrant.v1beta1";
            MsgGrantAllowance: {
                typeUrl: string;
                encode(message: _71.MsgGrantAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _71.MsgGrantAllowance;
                fromJSON(object: any): _71.MsgGrantAllowance;
                toJSON(message: _71.MsgGrantAllowance): unknown;
                fromPartial(object: Partial<_71.MsgGrantAllowance>): _71.MsgGrantAllowance;
                fromAmino(object: _71.MsgGrantAllowanceAmino): _71.MsgGrantAllowance;
                toAmino(message: _71.MsgGrantAllowance): _71.MsgGrantAllowanceAmino;
                fromAminoMsg(object: _71.MsgGrantAllowanceAminoMsg): _71.MsgGrantAllowance;
                toAminoMsg(message: _71.MsgGrantAllowance): _71.MsgGrantAllowanceAminoMsg;
                fromProtoMsg(message: _71.MsgGrantAllowanceProtoMsg): _71.MsgGrantAllowance;
                toProto(message: _71.MsgGrantAllowance): Uint8Array;
                toProtoMsg(message: _71.MsgGrantAllowance): _71.MsgGrantAllowanceProtoMsg;
            };
            MsgGrantAllowanceResponse: {
                typeUrl: string;
                encode(_: _71.MsgGrantAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _71.MsgGrantAllowanceResponse;
                fromJSON(_: any): _71.MsgGrantAllowanceResponse;
                toJSON(_: _71.MsgGrantAllowanceResponse): unknown;
                fromPartial(_: Partial<_71.MsgGrantAllowanceResponse>): _71.MsgGrantAllowanceResponse;
                fromAmino(_: _71.MsgGrantAllowanceResponseAmino): _71.MsgGrantAllowanceResponse;
                toAmino(_: _71.MsgGrantAllowanceResponse): _71.MsgGrantAllowanceResponseAmino;
                fromAminoMsg(object: _71.MsgGrantAllowanceResponseAminoMsg): _71.MsgGrantAllowanceResponse;
                toAminoMsg(message: _71.MsgGrantAllowanceResponse): _71.MsgGrantAllowanceResponseAminoMsg;
                fromProtoMsg(message: _71.MsgGrantAllowanceResponseProtoMsg): _71.MsgGrantAllowanceResponse;
                toProto(message: _71.MsgGrantAllowanceResponse): Uint8Array;
                toProtoMsg(message: _71.MsgGrantAllowanceResponse): _71.MsgGrantAllowanceResponseProtoMsg;
            };
            MsgRevokeAllowance: {
                typeUrl: string;
                encode(message: _71.MsgRevokeAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _71.MsgRevokeAllowance;
                fromJSON(object: any): _71.MsgRevokeAllowance;
                toJSON(message: _71.MsgRevokeAllowance): unknown;
                fromPartial(object: Partial<_71.MsgRevokeAllowance>): _71.MsgRevokeAllowance;
                fromAmino(object: _71.MsgRevokeAllowanceAmino): _71.MsgRevokeAllowance;
                toAmino(message: _71.MsgRevokeAllowance): _71.MsgRevokeAllowanceAmino;
                fromAminoMsg(object: _71.MsgRevokeAllowanceAminoMsg): _71.MsgRevokeAllowance;
                toAminoMsg(message: _71.MsgRevokeAllowance): _71.MsgRevokeAllowanceAminoMsg;
                fromProtoMsg(message: _71.MsgRevokeAllowanceProtoMsg): _71.MsgRevokeAllowance;
                toProto(message: _71.MsgRevokeAllowance): Uint8Array;
                toProtoMsg(message: _71.MsgRevokeAllowance): _71.MsgRevokeAllowanceProtoMsg;
            };
            MsgRevokeAllowanceResponse: {
                typeUrl: string;
                encode(_: _71.MsgRevokeAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _71.MsgRevokeAllowanceResponse;
                fromJSON(_: any): _71.MsgRevokeAllowanceResponse;
                toJSON(_: _71.MsgRevokeAllowanceResponse): unknown;
                fromPartial(_: Partial<_71.MsgRevokeAllowanceResponse>): _71.MsgRevokeAllowanceResponse;
                fromAmino(_: _71.MsgRevokeAllowanceResponseAmino): _71.MsgRevokeAllowanceResponse;
                toAmino(_: _71.MsgRevokeAllowanceResponse): _71.MsgRevokeAllowanceResponseAmino;
                fromAminoMsg(object: _71.MsgRevokeAllowanceResponseAminoMsg): _71.MsgRevokeAllowanceResponse;
                toAminoMsg(message: _71.MsgRevokeAllowanceResponse): _71.MsgRevokeAllowanceResponseAminoMsg;
                fromProtoMsg(message: _71.MsgRevokeAllowanceResponseProtoMsg): _71.MsgRevokeAllowanceResponse;
                toProto(message: _71.MsgRevokeAllowanceResponse): Uint8Array;
                toProtoMsg(message: _71.MsgRevokeAllowanceResponse): _71.MsgRevokeAllowanceResponseProtoMsg;
            };
            MsgPruneAllowances: {
                typeUrl: string;
                encode(message: _71.MsgPruneAllowances, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _71.MsgPruneAllowances;
                fromJSON(object: any): _71.MsgPruneAllowances;
                toJSON(message: _71.MsgPruneAllowances): unknown;
                fromPartial(object: Partial<_71.MsgPruneAllowances>): _71.MsgPruneAllowances;
                fromAmino(object: _71.MsgPruneAllowancesAmino): _71.MsgPruneAllowances;
                toAmino(message: _71.MsgPruneAllowances): _71.MsgPruneAllowancesAmino;
                fromAminoMsg(object: _71.MsgPruneAllowancesAminoMsg): _71.MsgPruneAllowances;
                toAminoMsg(message: _71.MsgPruneAllowances): _71.MsgPruneAllowancesAminoMsg;
                fromProtoMsg(message: _71.MsgPruneAllowancesProtoMsg): _71.MsgPruneAllowances;
                toProto(message: _71.MsgPruneAllowances): Uint8Array;
                toProtoMsg(message: _71.MsgPruneAllowances): _71.MsgPruneAllowancesProtoMsg;
            };
            MsgPruneAllowancesResponse: {
                typeUrl: string;
                encode(_: _71.MsgPruneAllowancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _71.MsgPruneAllowancesResponse;
                fromJSON(_: any): _71.MsgPruneAllowancesResponse;
                toJSON(_: _71.MsgPruneAllowancesResponse): unknown;
                fromPartial(_: Partial<_71.MsgPruneAllowancesResponse>): _71.MsgPruneAllowancesResponse;
                fromAmino(_: _71.MsgPruneAllowancesResponseAmino): _71.MsgPruneAllowancesResponse;
                toAmino(_: _71.MsgPruneAllowancesResponse): _71.MsgPruneAllowancesResponseAmino;
                fromAminoMsg(object: _71.MsgPruneAllowancesResponseAminoMsg): _71.MsgPruneAllowancesResponse;
                toAminoMsg(message: _71.MsgPruneAllowancesResponse): _71.MsgPruneAllowancesResponseAminoMsg;
                fromProtoMsg(message: _71.MsgPruneAllowancesResponseProtoMsg): _71.MsgPruneAllowancesResponse;
                toProto(message: _71.MsgPruneAllowancesResponse): Uint8Array;
                toProtoMsg(message: _71.MsgPruneAllowancesResponse): _71.MsgPruneAllowancesResponseProtoMsg;
            };
            Cosmos_feegrantv1beta1FeeAllowanceI_InterfaceDecoder: (input: import("..").BinaryReader | Uint8Array) => import("../google/protobuf/any").Any | _68.BasicAllowance | _68.PeriodicAllowance | _68.AllowedMsgAllowance;
            Cosmos_feegrantv1beta1FeeAllowanceI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_feegrantv1beta1FeeAllowanceI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryAllowanceRequest: {
                typeUrl: string;
                encode(message: _70.QueryAllowanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _70.QueryAllowanceRequest;
                fromJSON(object: any): _70.QueryAllowanceRequest;
                toJSON(message: _70.QueryAllowanceRequest): unknown;
                fromPartial(object: Partial<_70.QueryAllowanceRequest>): _70.QueryAllowanceRequest;
                fromAmino(object: _70.QueryAllowanceRequestAmino): _70.QueryAllowanceRequest;
                toAmino(message: _70.QueryAllowanceRequest): _70.QueryAllowanceRequestAmino;
                fromAminoMsg(object: _70.QueryAllowanceRequestAminoMsg): _70.QueryAllowanceRequest;
                toAminoMsg(message: _70.QueryAllowanceRequest): _70.QueryAllowanceRequestAminoMsg;
                fromProtoMsg(message: _70.QueryAllowanceRequestProtoMsg): _70.QueryAllowanceRequest;
                toProto(message: _70.QueryAllowanceRequest): Uint8Array;
                toProtoMsg(message: _70.QueryAllowanceRequest): _70.QueryAllowanceRequestProtoMsg;
            };
            QueryAllowanceResponse: {
                typeUrl: string;
                encode(message: _70.QueryAllowanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _70.QueryAllowanceResponse;
                fromJSON(object: any): _70.QueryAllowanceResponse;
                toJSON(message: _70.QueryAllowanceResponse): unknown;
                fromPartial(object: Partial<_70.QueryAllowanceResponse>): _70.QueryAllowanceResponse;
                fromAmino(object: _70.QueryAllowanceResponseAmino): _70.QueryAllowanceResponse;
                toAmino(message: _70.QueryAllowanceResponse): _70.QueryAllowanceResponseAmino;
                fromAminoMsg(object: _70.QueryAllowanceResponseAminoMsg): _70.QueryAllowanceResponse;
                toAminoMsg(message: _70.QueryAllowanceResponse): _70.QueryAllowanceResponseAminoMsg;
                fromProtoMsg(message: _70.QueryAllowanceResponseProtoMsg): _70.QueryAllowanceResponse;
                toProto(message: _70.QueryAllowanceResponse): Uint8Array;
                toProtoMsg(message: _70.QueryAllowanceResponse): _70.QueryAllowanceResponseProtoMsg;
            };
            QueryAllowancesRequest: {
                typeUrl: string;
                encode(message: _70.QueryAllowancesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _70.QueryAllowancesRequest;
                fromJSON(object: any): _70.QueryAllowancesRequest;
                toJSON(message: _70.QueryAllowancesRequest): unknown;
                fromPartial(object: Partial<_70.QueryAllowancesRequest>): _70.QueryAllowancesRequest;
                fromAmino(object: _70.QueryAllowancesRequestAmino): _70.QueryAllowancesRequest;
                toAmino(message: _70.QueryAllowancesRequest): _70.QueryAllowancesRequestAmino;
                fromAminoMsg(object: _70.QueryAllowancesRequestAminoMsg): _70.QueryAllowancesRequest;
                toAminoMsg(message: _70.QueryAllowancesRequest): _70.QueryAllowancesRequestAminoMsg;
                fromProtoMsg(message: _70.QueryAllowancesRequestProtoMsg): _70.QueryAllowancesRequest;
                toProto(message: _70.QueryAllowancesRequest): Uint8Array;
                toProtoMsg(message: _70.QueryAllowancesRequest): _70.QueryAllowancesRequestProtoMsg;
            };
            QueryAllowancesResponse: {
                typeUrl: string;
                encode(message: _70.QueryAllowancesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _70.QueryAllowancesResponse;
                fromJSON(object: any): _70.QueryAllowancesResponse;
                toJSON(message: _70.QueryAllowancesResponse): unknown;
                fromPartial(object: Partial<_70.QueryAllowancesResponse>): _70.QueryAllowancesResponse;
                fromAmino(object: _70.QueryAllowancesResponseAmino): _70.QueryAllowancesResponse;
                toAmino(message: _70.QueryAllowancesResponse): _70.QueryAllowancesResponseAmino;
                fromAminoMsg(object: _70.QueryAllowancesResponseAminoMsg): _70.QueryAllowancesResponse;
                toAminoMsg(message: _70.QueryAllowancesResponse): _70.QueryAllowancesResponseAminoMsg;
                fromProtoMsg(message: _70.QueryAllowancesResponseProtoMsg): _70.QueryAllowancesResponse;
                toProto(message: _70.QueryAllowancesResponse): Uint8Array;
                toProtoMsg(message: _70.QueryAllowancesResponse): _70.QueryAllowancesResponseProtoMsg;
            };
            QueryAllowancesByGranterRequest: {
                typeUrl: string;
                encode(message: _70.QueryAllowancesByGranterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _70.QueryAllowancesByGranterRequest;
                fromJSON(object: any): _70.QueryAllowancesByGranterRequest;
                toJSON(message: _70.QueryAllowancesByGranterRequest): unknown;
                fromPartial(object: Partial<_70.QueryAllowancesByGranterRequest>): _70.QueryAllowancesByGranterRequest;
                fromAmino(object: _70.QueryAllowancesByGranterRequestAmino): _70.QueryAllowancesByGranterRequest;
                toAmino(message: _70.QueryAllowancesByGranterRequest): _70.QueryAllowancesByGranterRequestAmino;
                fromAminoMsg(object: _70.QueryAllowancesByGranterRequestAminoMsg): _70.QueryAllowancesByGranterRequest;
                toAminoMsg(message: _70.QueryAllowancesByGranterRequest): _70.QueryAllowancesByGranterRequestAminoMsg;
                fromProtoMsg(message: _70.QueryAllowancesByGranterRequestProtoMsg): _70.QueryAllowancesByGranterRequest;
                toProto(message: _70.QueryAllowancesByGranterRequest): Uint8Array;
                toProtoMsg(message: _70.QueryAllowancesByGranterRequest): _70.QueryAllowancesByGranterRequestProtoMsg;
            };
            QueryAllowancesByGranterResponse: {
                typeUrl: string;
                encode(message: _70.QueryAllowancesByGranterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _70.QueryAllowancesByGranterResponse;
                fromJSON(object: any): _70.QueryAllowancesByGranterResponse;
                toJSON(message: _70.QueryAllowancesByGranterResponse): unknown;
                fromPartial(object: Partial<_70.QueryAllowancesByGranterResponse>): _70.QueryAllowancesByGranterResponse;
                fromAmino(object: _70.QueryAllowancesByGranterResponseAmino): _70.QueryAllowancesByGranterResponse;
                toAmino(message: _70.QueryAllowancesByGranterResponse): _70.QueryAllowancesByGranterResponseAmino;
                fromAminoMsg(object: _70.QueryAllowancesByGranterResponseAminoMsg): _70.QueryAllowancesByGranterResponse;
                toAminoMsg(message: _70.QueryAllowancesByGranterResponse): _70.QueryAllowancesByGranterResponseAminoMsg;
                fromProtoMsg(message: _70.QueryAllowancesByGranterResponseProtoMsg): _70.QueryAllowancesByGranterResponse;
                toProto(message: _70.QueryAllowancesByGranterResponse): Uint8Array;
                toProtoMsg(message: _70.QueryAllowancesByGranterResponse): _70.QueryAllowancesByGranterResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _69.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _69.GenesisState;
                fromJSON(object: any): _69.GenesisState;
                toJSON(message: _69.GenesisState): unknown;
                fromPartial(object: Partial<_69.GenesisState>): _69.GenesisState;
                fromAmino(object: _69.GenesisStateAmino): _69.GenesisState;
                toAmino(message: _69.GenesisState): _69.GenesisStateAmino;
                fromAminoMsg(object: _69.GenesisStateAminoMsg): _69.GenesisState;
                toAminoMsg(message: _69.GenesisState): _69.GenesisStateAminoMsg;
                fromProtoMsg(message: _69.GenesisStateProtoMsg): _69.GenesisState;
                toProto(message: _69.GenesisState): Uint8Array;
                toProtoMsg(message: _69.GenesisState): _69.GenesisStateProtoMsg;
            };
            BasicAllowance: {
                typeUrl: string;
                encode(message: _68.BasicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _68.BasicAllowance;
                fromJSON(object: any): _68.BasicAllowance;
                toJSON(message: _68.BasicAllowance): unknown;
                fromPartial(object: Partial<_68.BasicAllowance>): _68.BasicAllowance;
                fromAmino(object: _68.BasicAllowanceAmino): _68.BasicAllowance;
                toAmino(message: _68.BasicAllowance): _68.BasicAllowanceAmino;
                fromAminoMsg(object: _68.BasicAllowanceAminoMsg): _68.BasicAllowance;
                toAminoMsg(message: _68.BasicAllowance): _68.BasicAllowanceAminoMsg;
                fromProtoMsg(message: _68.BasicAllowanceProtoMsg): _68.BasicAllowance;
                toProto(message: _68.BasicAllowance): Uint8Array;
                toProtoMsg(message: _68.BasicAllowance): _68.BasicAllowanceProtoMsg;
            };
            PeriodicAllowance: {
                typeUrl: string;
                encode(message: _68.PeriodicAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _68.PeriodicAllowance;
                fromJSON(object: any): _68.PeriodicAllowance;
                toJSON(message: _68.PeriodicAllowance): unknown;
                fromPartial(object: Partial<_68.PeriodicAllowance>): _68.PeriodicAllowance;
                fromAmino(object: _68.PeriodicAllowanceAmino): _68.PeriodicAllowance;
                toAmino(message: _68.PeriodicAllowance): _68.PeriodicAllowanceAmino;
                fromAminoMsg(object: _68.PeriodicAllowanceAminoMsg): _68.PeriodicAllowance;
                toAminoMsg(message: _68.PeriodicAllowance): _68.PeriodicAllowanceAminoMsg;
                fromProtoMsg(message: _68.PeriodicAllowanceProtoMsg): _68.PeriodicAllowance;
                toProto(message: _68.PeriodicAllowance): Uint8Array;
                toProtoMsg(message: _68.PeriodicAllowance): _68.PeriodicAllowanceProtoMsg;
            };
            AllowedMsgAllowance: {
                typeUrl: string;
                encode(message: _68.AllowedMsgAllowance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _68.AllowedMsgAllowance;
                fromJSON(object: any): _68.AllowedMsgAllowance;
                toJSON(message: _68.AllowedMsgAllowance): unknown;
                fromPartial(object: Partial<_68.AllowedMsgAllowance>): _68.AllowedMsgAllowance;
                fromAmino(object: _68.AllowedMsgAllowanceAmino): _68.AllowedMsgAllowance;
                toAmino(message: _68.AllowedMsgAllowance): _68.AllowedMsgAllowanceAmino;
                fromAminoMsg(object: _68.AllowedMsgAllowanceAminoMsg): _68.AllowedMsgAllowance;
                toAminoMsg(message: _68.AllowedMsgAllowance): _68.AllowedMsgAllowanceAminoMsg;
                fromProtoMsg(message: _68.AllowedMsgAllowanceProtoMsg): _68.AllowedMsgAllowance;
                toProto(message: _68.AllowedMsgAllowance): Uint8Array;
                toProtoMsg(message: _68.AllowedMsgAllowance): _68.AllowedMsgAllowanceProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _68.Grant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _68.Grant;
                fromJSON(object: any): _68.Grant;
                toJSON(message: _68.Grant): unknown;
                fromPartial(object: Partial<_68.Grant>): _68.Grant;
                fromAmino(object: _68.GrantAmino): _68.Grant;
                toAmino(message: _68.Grant): _68.GrantAmino;
                fromAminoMsg(object: _68.GrantAminoMsg): _68.Grant;
                toAminoMsg(message: _68.Grant): _68.GrantAminoMsg;
                fromProtoMsg(message: _68.GrantProtoMsg): _68.Grant;
                toProto(message: _68.Grant): Uint8Array;
                toProtoMsg(message: _68.Grant): _68.GrantProtoMsg;
            };
        };
    }
    namespace genutil {
        namespace module {
            const v1: {
                protobufPackage: "cosmos.genutil.module.v1";
                Module: {
                    typeUrl: string;
                    encode(_: _72.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _72.Module;
                    fromJSON(_: any): _72.Module;
                    toJSON(_: _72.Module): unknown;
                    fromPartial(_: Partial<_72.Module>): _72.Module;
                    fromAmino(_: _72.ModuleAmino): _72.Module;
                    toAmino(_: _72.Module): _72.ModuleAmino;
                    fromAminoMsg(object: _72.ModuleAminoMsg): _72.Module;
                    toAminoMsg(message: _72.Module): _72.ModuleAminoMsg;
                    fromProtoMsg(message: _72.ModuleProtoMsg): _72.Module;
                    toProto(message: _72.Module): Uint8Array;
                    toProtoMsg(message: _72.Module): _72.ModuleProtoMsg;
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
                    encode(message: _73.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _73.Module;
                    fromJSON(object: any): _73.Module;
                    toJSON(message: _73.Module): unknown;
                    fromPartial(object: Partial<_73.Module>): _73.Module;
                    fromAmino(object: _73.ModuleAmino): _73.Module;
                    toAmino(message: _73.Module): _73.ModuleAmino;
                    fromAminoMsg(object: _73.ModuleAminoMsg): _73.Module;
                    toAminoMsg(message: _73.Module): _73.ModuleAminoMsg;
                    fromProtoMsg(message: _73.ModuleProtoMsg): _73.Module;
                    toProto(message: _73.Module): Uint8Array;
                    toProtoMsg(message: _73.Module): _73.ModuleProtoMsg;
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
                    submitProposal(value: _77.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    execLegacyContent(value: _77.MsgExecLegacyContent): {
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
                    updateParams(value: _77.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelProposal(value: _77.MsgCancelProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _77.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _77.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _77.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _77.MsgExecLegacyContent;
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
                    updateParams(value: _77.MsgUpdateParams): {
                        typeUrl: string;
                        value: _77.MsgUpdateParams;
                    };
                    cancelProposal(value: _77.MsgCancelProposal): {
                        typeUrl: string;
                        value: _77.MsgCancelProposal;
                    };
                };
                toJSON: {
                    submitProposal(value: _77.MsgSubmitProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    execLegacyContent(value: _77.MsgExecLegacyContent): {
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
                    updateParams(value: _77.MsgUpdateParams): {
                        typeUrl: string;
                        value: unknown;
                    };
                    cancelProposal(value: _77.MsgCancelProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _77.MsgSubmitProposal;
                    };
                    execLegacyContent(value: any): {
                        typeUrl: string;
                        value: _77.MsgExecLegacyContent;
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
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _77.MsgUpdateParams;
                    };
                    cancelProposal(value: any): {
                        typeUrl: string;
                        value: _77.MsgCancelProposal;
                    };
                };
                fromPartial: {
                    submitProposal(value: _77.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _77.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _77.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _77.MsgExecLegacyContent;
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
                    updateParams(value: _77.MsgUpdateParams): {
                        typeUrl: string;
                        value: _77.MsgUpdateParams;
                    };
                    cancelProposal(value: _77.MsgCancelProposal): {
                        typeUrl: string;
                        value: _77.MsgCancelProposal;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _77.MsgSubmitProposal) => _77.MsgSubmitProposalAmino;
                    fromAmino: (object: _77.MsgSubmitProposalAmino) => _77.MsgSubmitProposal;
                };
                "/cosmos.gov.v1.MsgExecLegacyContent": {
                    aminoType: string;
                    toAmino: (message: _77.MsgExecLegacyContent) => _77.MsgExecLegacyContentAmino;
                    fromAmino: (object: _77.MsgExecLegacyContentAmino) => _77.MsgExecLegacyContent;
                };
                "/cosmos.gov.v1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _77.MsgVote) => _77.MsgVoteAmino;
                    fromAmino: (object: _77.MsgVoteAmino) => _77.MsgVote;
                };
                "/cosmos.gov.v1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _77.MsgVoteWeighted) => _77.MsgVoteWeightedAmino;
                    fromAmino: (object: _77.MsgVoteWeightedAmino) => _77.MsgVoteWeighted;
                };
                "/cosmos.gov.v1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _77.MsgDeposit) => _77.MsgDepositAmino;
                    fromAmino: (object: _77.MsgDepositAmino) => _77.MsgDeposit;
                };
                "/cosmos.gov.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _77.MsgUpdateParams) => _77.MsgUpdateParamsAmino;
                    fromAmino: (object: _77.MsgUpdateParamsAmino) => _77.MsgUpdateParams;
                };
                "/cosmos.gov.v1.MsgCancelProposal": {
                    aminoType: string;
                    toAmino: (message: _77.MsgCancelProposal) => _77.MsgCancelProposalAmino;
                    fromAmino: (object: _77.MsgCancelProposalAmino) => _77.MsgCancelProposal;
                };
            };
            protobufPackage: "cosmos.gov.v1";
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _77.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _77.MsgSubmitProposal;
                fromJSON(object: any): _77.MsgSubmitProposal;
                toJSON(message: _77.MsgSubmitProposal): unknown;
                fromPartial(object: Partial<_77.MsgSubmitProposal>): _77.MsgSubmitProposal;
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
                fromAmino(object: _77.MsgSubmitProposalResponseAmino): _77.MsgSubmitProposalResponse;
                toAmino(message: _77.MsgSubmitProposalResponse): _77.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _77.MsgSubmitProposalResponseAminoMsg): _77.MsgSubmitProposalResponse;
                toAminoMsg(message: _77.MsgSubmitProposalResponse): _77.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _77.MsgSubmitProposalResponseProtoMsg): _77.MsgSubmitProposalResponse;
                toProto(message: _77.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _77.MsgSubmitProposalResponse): _77.MsgSubmitProposalResponseProtoMsg;
            };
            MsgExecLegacyContent: {
                typeUrl: string;
                encode(message: _77.MsgExecLegacyContent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _77.MsgExecLegacyContent;
                fromJSON(object: any): _77.MsgExecLegacyContent;
                toJSON(message: _77.MsgExecLegacyContent): unknown;
                fromPartial(object: Partial<_77.MsgExecLegacyContent>): _77.MsgExecLegacyContent;
                fromAmino(object: _77.MsgExecLegacyContentAmino): _77.MsgExecLegacyContent;
                toAmino(message: _77.MsgExecLegacyContent): _77.MsgExecLegacyContentAmino;
                fromAminoMsg(object: _77.MsgExecLegacyContentAminoMsg): _77.MsgExecLegacyContent;
                toAminoMsg(message: _77.MsgExecLegacyContent): _77.MsgExecLegacyContentAminoMsg;
                fromProtoMsg(message: _77.MsgExecLegacyContentProtoMsg): _77.MsgExecLegacyContent;
                toProto(message: _77.MsgExecLegacyContent): Uint8Array;
                toProtoMsg(message: _77.MsgExecLegacyContent): _77.MsgExecLegacyContentProtoMsg;
            };
            MsgExecLegacyContentResponse: {
                typeUrl: string;
                encode(_: _77.MsgExecLegacyContentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _77.MsgExecLegacyContentResponse;
                fromJSON(_: any): _77.MsgExecLegacyContentResponse;
                toJSON(_: _77.MsgExecLegacyContentResponse): unknown;
                fromPartial(_: Partial<_77.MsgExecLegacyContentResponse>): _77.MsgExecLegacyContentResponse;
                fromAmino(_: _77.MsgExecLegacyContentResponseAmino): _77.MsgExecLegacyContentResponse;
                toAmino(_: _77.MsgExecLegacyContentResponse): _77.MsgExecLegacyContentResponseAmino;
                fromAminoMsg(object: _77.MsgExecLegacyContentResponseAminoMsg): _77.MsgExecLegacyContentResponse;
                toAminoMsg(message: _77.MsgExecLegacyContentResponse): _77.MsgExecLegacyContentResponseAminoMsg;
                fromProtoMsg(message: _77.MsgExecLegacyContentResponseProtoMsg): _77.MsgExecLegacyContentResponse;
                toProto(message: _77.MsgExecLegacyContentResponse): Uint8Array;
                toProtoMsg(message: _77.MsgExecLegacyContentResponse): _77.MsgExecLegacyContentResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _77.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _77.MsgVote;
                fromJSON(object: any): _77.MsgVote;
                toJSON(message: _77.MsgVote): unknown;
                fromPartial(object: Partial<_77.MsgVote>): _77.MsgVote;
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
                fromAmino(_: _77.MsgDepositResponseAmino): _77.MsgDepositResponse;
                toAmino(_: _77.MsgDepositResponse): _77.MsgDepositResponseAmino;
                fromAminoMsg(object: _77.MsgDepositResponseAminoMsg): _77.MsgDepositResponse;
                toAminoMsg(message: _77.MsgDepositResponse): _77.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _77.MsgDepositResponseProtoMsg): _77.MsgDepositResponse;
                toProto(message: _77.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _77.MsgDepositResponse): _77.MsgDepositResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _77.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _77.MsgUpdateParams;
                fromJSON(object: any): _77.MsgUpdateParams;
                toJSON(message: _77.MsgUpdateParams): unknown;
                fromPartial(object: Partial<_77.MsgUpdateParams>): _77.MsgUpdateParams;
                fromAmino(object: _77.MsgUpdateParamsAmino): _77.MsgUpdateParams;
                toAmino(message: _77.MsgUpdateParams): _77.MsgUpdateParamsAmino;
                fromAminoMsg(object: _77.MsgUpdateParamsAminoMsg): _77.MsgUpdateParams;
                toAminoMsg(message: _77.MsgUpdateParams): _77.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _77.MsgUpdateParamsProtoMsg): _77.MsgUpdateParams;
                toProto(message: _77.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _77.MsgUpdateParams): _77.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _77.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _77.MsgUpdateParamsResponse;
                fromJSON(_: any): _77.MsgUpdateParamsResponse;
                toJSON(_: _77.MsgUpdateParamsResponse): unknown;
                fromPartial(_: Partial<_77.MsgUpdateParamsResponse>): _77.MsgUpdateParamsResponse;
                fromAmino(_: _77.MsgUpdateParamsResponseAmino): _77.MsgUpdateParamsResponse;
                toAmino(_: _77.MsgUpdateParamsResponse): _77.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _77.MsgUpdateParamsResponseAminoMsg): _77.MsgUpdateParamsResponse;
                toAminoMsg(message: _77.MsgUpdateParamsResponse): _77.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _77.MsgUpdateParamsResponseProtoMsg): _77.MsgUpdateParamsResponse;
                toProto(message: _77.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _77.MsgUpdateParamsResponse): _77.MsgUpdateParamsResponseProtoMsg;
            };
            MsgCancelProposal: {
                typeUrl: string;
                encode(message: _77.MsgCancelProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _77.MsgCancelProposal;
                fromJSON(object: any): _77.MsgCancelProposal;
                toJSON(message: _77.MsgCancelProposal): unknown;
                fromPartial(object: Partial<_77.MsgCancelProposal>): _77.MsgCancelProposal;
                fromAmino(object: _77.MsgCancelProposalAmino): _77.MsgCancelProposal;
                toAmino(message: _77.MsgCancelProposal): _77.MsgCancelProposalAmino;
                fromAminoMsg(object: _77.MsgCancelProposalAminoMsg): _77.MsgCancelProposal;
                toAminoMsg(message: _77.MsgCancelProposal): _77.MsgCancelProposalAminoMsg;
                fromProtoMsg(message: _77.MsgCancelProposalProtoMsg): _77.MsgCancelProposal;
                toProto(message: _77.MsgCancelProposal): Uint8Array;
                toProtoMsg(message: _77.MsgCancelProposal): _77.MsgCancelProposalProtoMsg;
            };
            MsgCancelProposalResponse: {
                typeUrl: string;
                encode(message: _77.MsgCancelProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _77.MsgCancelProposalResponse;
                fromJSON(object: any): _77.MsgCancelProposalResponse;
                toJSON(message: _77.MsgCancelProposalResponse): unknown;
                fromPartial(object: Partial<_77.MsgCancelProposalResponse>): _77.MsgCancelProposalResponse;
                fromAmino(object: _77.MsgCancelProposalResponseAmino): _77.MsgCancelProposalResponse;
                toAmino(message: _77.MsgCancelProposalResponse): _77.MsgCancelProposalResponseAmino;
                fromAminoMsg(object: _77.MsgCancelProposalResponseAminoMsg): _77.MsgCancelProposalResponse;
                toAminoMsg(message: _77.MsgCancelProposalResponse): _77.MsgCancelProposalResponseAminoMsg;
                fromProtoMsg(message: _77.MsgCancelProposalResponseProtoMsg): _77.MsgCancelProposalResponse;
                toProto(message: _77.MsgCancelProposalResponse): Uint8Array;
                toProtoMsg(message: _77.MsgCancelProposalResponse): _77.MsgCancelProposalResponseProtoMsg;
            };
            Cosmos_govv1beta1Content_InterfaceDecoder: (input: import("..").BinaryReader | Uint8Array) => import("../google/protobuf/any").Any | _62.CommunityPoolSpendProposal | _62.CommunityPoolSpendProposalWithDeposit | _104.ParameterChangeProposal | _127.SoftwareUpgradeProposal | _127.CancelSoftwareUpgradeProposal | import("../ibc/core/client/v1/client").ClientUpdateProposal | import("../ibc/core/client/v1/client").UpgradeProposal | _79.TextProposal;
            Cosmos_govv1beta1Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_govv1beta1Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryConstitutionRequest: {
                typeUrl: string;
                encode(_: _76.QueryConstitutionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _76.QueryConstitutionRequest;
                fromJSON(_: any): _76.QueryConstitutionRequest;
                toJSON(_: _76.QueryConstitutionRequest): unknown;
                fromPartial(_: Partial<_76.QueryConstitutionRequest>): _76.QueryConstitutionRequest;
                fromAmino(_: _76.QueryConstitutionRequestAmino): _76.QueryConstitutionRequest;
                toAmino(_: _76.QueryConstitutionRequest): _76.QueryConstitutionRequestAmino;
                fromAminoMsg(object: _76.QueryConstitutionRequestAminoMsg): _76.QueryConstitutionRequest;
                toAminoMsg(message: _76.QueryConstitutionRequest): _76.QueryConstitutionRequestAminoMsg;
                fromProtoMsg(message: _76.QueryConstitutionRequestProtoMsg): _76.QueryConstitutionRequest;
                toProto(message: _76.QueryConstitutionRequest): Uint8Array;
                toProtoMsg(message: _76.QueryConstitutionRequest): _76.QueryConstitutionRequestProtoMsg;
            };
            QueryConstitutionResponse: {
                typeUrl: string;
                encode(message: _76.QueryConstitutionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _76.QueryConstitutionResponse;
                fromJSON(object: any): _76.QueryConstitutionResponse;
                toJSON(message: _76.QueryConstitutionResponse): unknown;
                fromPartial(object: Partial<_76.QueryConstitutionResponse>): _76.QueryConstitutionResponse;
                fromAmino(object: _76.QueryConstitutionResponseAmino): _76.QueryConstitutionResponse;
                toAmino(message: _76.QueryConstitutionResponse): _76.QueryConstitutionResponseAmino;
                fromAminoMsg(object: _76.QueryConstitutionResponseAminoMsg): _76.QueryConstitutionResponse;
                toAminoMsg(message: _76.QueryConstitutionResponse): _76.QueryConstitutionResponseAminoMsg;
                fromProtoMsg(message: _76.QueryConstitutionResponseProtoMsg): _76.QueryConstitutionResponse;
                toProto(message: _76.QueryConstitutionResponse): Uint8Array;
                toProtoMsg(message: _76.QueryConstitutionResponse): _76.QueryConstitutionResponseProtoMsg;
            };
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _76.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _76.QueryProposalRequest;
                fromJSON(object: any): _76.QueryProposalRequest;
                toJSON(message: _76.QueryProposalRequest): unknown;
                fromPartial(object: Partial<_76.QueryProposalRequest>): _76.QueryProposalRequest;
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
                fromAmino(object: _75.WeightedVoteOptionAmino): _75.WeightedVoteOption;
                toAmino(message: _75.WeightedVoteOption): _75.WeightedVoteOptionAmino;
                fromAminoMsg(object: _75.WeightedVoteOptionAminoMsg): _75.WeightedVoteOption;
                toAminoMsg(message: _75.WeightedVoteOption): _75.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _75.WeightedVoteOptionProtoMsg): _75.WeightedVoteOption;
                toProto(message: _75.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _75.WeightedVoteOption): _75.WeightedVoteOptionProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                encode(message: _75.Deposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _75.Deposit;
                fromJSON(object: any): _75.Deposit;
                toJSON(message: _75.Deposit): unknown;
                fromPartial(object: Partial<_75.Deposit>): _75.Deposit;
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
                fromAmino(object: _75.TallyParamsAmino): _75.TallyParams;
                toAmino(message: _75.TallyParams): _75.TallyParamsAmino;
                fromAminoMsg(object: _75.TallyParamsAminoMsg): _75.TallyParams;
                toAminoMsg(message: _75.TallyParams): _75.TallyParamsAminoMsg;
                fromProtoMsg(message: _75.TallyParamsProtoMsg): _75.TallyParams;
                toProto(message: _75.TallyParams): Uint8Array;
                toProtoMsg(message: _75.TallyParams): _75.TallyParamsProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _75.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _75.Params;
                fromJSON(object: any): _75.Params;
                toJSON(message: _75.Params): unknown;
                fromPartial(object: Partial<_75.Params>): _75.Params;
                fromAmino(object: _75.ParamsAmino): _75.Params;
                toAmino(message: _75.Params): _75.ParamsAmino;
                fromAminoMsg(object: _75.ParamsAminoMsg): _75.Params;
                toAminoMsg(message: _75.Params): _75.ParamsAminoMsg;
                fromProtoMsg(message: _75.ParamsProtoMsg): _75.Params;
                toProto(message: _75.Params): Uint8Array;
                toProtoMsg(message: _75.Params): _75.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _74.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _74.GenesisState;
                fromJSON(object: any): _74.GenesisState;
                toJSON(message: _74.GenesisState): unknown;
                fromPartial(object: Partial<_74.GenesisState>): _74.GenesisState;
                fromAmino(object: _74.GenesisStateAmino): _74.GenesisState;
                toAmino(message: _74.GenesisState): _74.GenesisStateAmino;
                fromAminoMsg(object: _74.GenesisStateAminoMsg): _74.GenesisState;
                toAminoMsg(message: _74.GenesisState): _74.GenesisStateAminoMsg;
                fromProtoMsg(message: _74.GenesisStateProtoMsg): _74.GenesisState;
                toProto(message: _74.GenesisState): Uint8Array;
                toProtoMsg(message: _74.GenesisState): _74.GenesisStateProtoMsg;
            };
        };
        const v1beta1: {
            Msg: typeof _271.Msg;
            Query: typeof _254.Query;
            QueryClientImpl: typeof _254.QueryClientImpl;
            LCDQueryClient: typeof _236.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _81.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _81.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _81.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _81.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _81.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _81.MsgSubmitProposal;
                    };
                    vote(value: _81.MsgVote): {
                        typeUrl: string;
                        value: _81.MsgVote;
                    };
                    voteWeighted(value: _81.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _81.MsgVoteWeighted;
                    };
                    deposit(value: _81.MsgDeposit): {
                        typeUrl: string;
                        value: _81.MsgDeposit;
                    };
                };
                toJSON: {
                    submitProposal(value: _81.MsgSubmitProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    vote(value: _81.MsgVote): {
                        typeUrl: string;
                        value: unknown;
                    };
                    voteWeighted(value: _81.MsgVoteWeighted): {
                        typeUrl: string;
                        value: unknown;
                    };
                    deposit(value: _81.MsgDeposit): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _81.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _81.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _81.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _81.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _81.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _81.MsgSubmitProposal;
                    };
                    vote(value: _81.MsgVote): {
                        typeUrl: string;
                        value: _81.MsgVote;
                    };
                    voteWeighted(value: _81.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _81.MsgVoteWeighted;
                    };
                    deposit(value: _81.MsgDeposit): {
                        typeUrl: string;
                        value: _81.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _81.MsgSubmitProposal) => _81.MsgSubmitProposalAmino;
                    fromAmino: (object: _81.MsgSubmitProposalAmino) => _81.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _81.MsgVote) => _81.MsgVoteAmino;
                    fromAmino: (object: _81.MsgVoteAmino) => _81.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _81.MsgVoteWeighted) => _81.MsgVoteWeightedAmino;
                    fromAmino: (object: _81.MsgVoteWeightedAmino) => _81.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _81.MsgDeposit) => _81.MsgDepositAmino;
                    fromAmino: (object: _81.MsgDepositAmino) => _81.MsgDeposit;
                };
            };
            protobufPackage: "cosmos.gov.v1beta1";
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _81.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _81.MsgSubmitProposal;
                fromJSON(object: any): _81.MsgSubmitProposal;
                toJSON(message: _81.MsgSubmitProposal): unknown;
                fromPartial(object: Partial<_81.MsgSubmitProposal>): _81.MsgSubmitProposal;
                fromAmino(object: _81.MsgSubmitProposalAmino): _81.MsgSubmitProposal;
                toAmino(message: _81.MsgSubmitProposal): _81.MsgSubmitProposalAmino;
                fromAminoMsg(object: _81.MsgSubmitProposalAminoMsg): _81.MsgSubmitProposal;
                toAminoMsg(message: _81.MsgSubmitProposal): _81.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _81.MsgSubmitProposalProtoMsg): _81.MsgSubmitProposal;
                toProto(message: _81.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _81.MsgSubmitProposal): _81.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _81.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _81.MsgSubmitProposalResponse;
                fromJSON(object: any): _81.MsgSubmitProposalResponse;
                toJSON(message: _81.MsgSubmitProposalResponse): unknown;
                fromPartial(object: Partial<_81.MsgSubmitProposalResponse>): _81.MsgSubmitProposalResponse;
                fromAmino(object: _81.MsgSubmitProposalResponseAmino): _81.MsgSubmitProposalResponse;
                toAmino(message: _81.MsgSubmitProposalResponse): _81.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _81.MsgSubmitProposalResponseAminoMsg): _81.MsgSubmitProposalResponse;
                toAminoMsg(message: _81.MsgSubmitProposalResponse): _81.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _81.MsgSubmitProposalResponseProtoMsg): _81.MsgSubmitProposalResponse;
                toProto(message: _81.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _81.MsgSubmitProposalResponse): _81.MsgSubmitProposalResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _81.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _81.MsgVote;
                fromJSON(object: any): _81.MsgVote;
                toJSON(message: _81.MsgVote): unknown;
                fromPartial(object: Partial<_81.MsgVote>): _81.MsgVote;
                fromAmino(object: _81.MsgVoteAmino): _81.MsgVote;
                toAmino(message: _81.MsgVote): _81.MsgVoteAmino;
                fromAminoMsg(object: _81.MsgVoteAminoMsg): _81.MsgVote;
                toAminoMsg(message: _81.MsgVote): _81.MsgVoteAminoMsg;
                fromProtoMsg(message: _81.MsgVoteProtoMsg): _81.MsgVote;
                toProto(message: _81.MsgVote): Uint8Array;
                toProtoMsg(message: _81.MsgVote): _81.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _81.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _81.MsgVoteResponse;
                fromJSON(_: any): _81.MsgVoteResponse;
                toJSON(_: _81.MsgVoteResponse): unknown;
                fromPartial(_: Partial<_81.MsgVoteResponse>): _81.MsgVoteResponse;
                fromAmino(_: _81.MsgVoteResponseAmino): _81.MsgVoteResponse;
                toAmino(_: _81.MsgVoteResponse): _81.MsgVoteResponseAmino;
                fromAminoMsg(object: _81.MsgVoteResponseAminoMsg): _81.MsgVoteResponse;
                toAminoMsg(message: _81.MsgVoteResponse): _81.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _81.MsgVoteResponseProtoMsg): _81.MsgVoteResponse;
                toProto(message: _81.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _81.MsgVoteResponse): _81.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                typeUrl: string;
                encode(message: _81.MsgVoteWeighted, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _81.MsgVoteWeighted;
                fromJSON(object: any): _81.MsgVoteWeighted;
                toJSON(message: _81.MsgVoteWeighted): unknown;
                fromPartial(object: Partial<_81.MsgVoteWeighted>): _81.MsgVoteWeighted;
                fromAmino(object: _81.MsgVoteWeightedAmino): _81.MsgVoteWeighted;
                toAmino(message: _81.MsgVoteWeighted): _81.MsgVoteWeightedAmino;
                fromAminoMsg(object: _81.MsgVoteWeightedAminoMsg): _81.MsgVoteWeighted;
                toAminoMsg(message: _81.MsgVoteWeighted): _81.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _81.MsgVoteWeightedProtoMsg): _81.MsgVoteWeighted;
                toProto(message: _81.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _81.MsgVoteWeighted): _81.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                typeUrl: string;
                encode(_: _81.MsgVoteWeightedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _81.MsgVoteWeightedResponse;
                fromJSON(_: any): _81.MsgVoteWeightedResponse;
                toJSON(_: _81.MsgVoteWeightedResponse): unknown;
                fromPartial(_: Partial<_81.MsgVoteWeightedResponse>): _81.MsgVoteWeightedResponse;
                fromAmino(_: _81.MsgVoteWeightedResponseAmino): _81.MsgVoteWeightedResponse;
                toAmino(_: _81.MsgVoteWeightedResponse): _81.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _81.MsgVoteWeightedResponseAminoMsg): _81.MsgVoteWeightedResponse;
                toAminoMsg(message: _81.MsgVoteWeightedResponse): _81.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _81.MsgVoteWeightedResponseProtoMsg): _81.MsgVoteWeightedResponse;
                toProto(message: _81.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _81.MsgVoteWeightedResponse): _81.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _81.MsgDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _81.MsgDeposit;
                fromJSON(object: any): _81.MsgDeposit;
                toJSON(message: _81.MsgDeposit): unknown;
                fromPartial(object: Partial<_81.MsgDeposit>): _81.MsgDeposit;
                fromAmino(object: _81.MsgDepositAmino): _81.MsgDeposit;
                toAmino(message: _81.MsgDeposit): _81.MsgDepositAmino;
                fromAminoMsg(object: _81.MsgDepositAminoMsg): _81.MsgDeposit;
                toAminoMsg(message: _81.MsgDeposit): _81.MsgDepositAminoMsg;
                fromProtoMsg(message: _81.MsgDepositProtoMsg): _81.MsgDeposit;
                toProto(message: _81.MsgDeposit): Uint8Array;
                toProtoMsg(message: _81.MsgDeposit): _81.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(_: _81.MsgDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _81.MsgDepositResponse;
                fromJSON(_: any): _81.MsgDepositResponse;
                toJSON(_: _81.MsgDepositResponse): unknown;
                fromPartial(_: Partial<_81.MsgDepositResponse>): _81.MsgDepositResponse;
                fromAmino(_: _81.MsgDepositResponseAmino): _81.MsgDepositResponse;
                toAmino(_: _81.MsgDepositResponse): _81.MsgDepositResponseAmino;
                fromAminoMsg(object: _81.MsgDepositResponseAminoMsg): _81.MsgDepositResponse;
                toAminoMsg(message: _81.MsgDepositResponse): _81.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _81.MsgDepositResponseProtoMsg): _81.MsgDepositResponse;
                toProto(message: _81.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _81.MsgDepositResponse): _81.MsgDepositResponseProtoMsg;
            };
            Cosmos_govv1beta1Content_InterfaceDecoder: (input: import("..").BinaryReader | Uint8Array) => import("../google/protobuf/any").Any | _62.CommunityPoolSpendProposal | _62.CommunityPoolSpendProposalWithDeposit | _104.ParameterChangeProposal | _127.SoftwareUpgradeProposal | _127.CancelSoftwareUpgradeProposal | import("../ibc/core/client/v1/client").ClientUpdateProposal | import("../ibc/core/client/v1/client").UpgradeProposal | _79.TextProposal;
            Cosmos_govv1beta1Content_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_govv1beta1Content_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _80.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _80.QueryProposalRequest;
                fromJSON(object: any): _80.QueryProposalRequest;
                toJSON(message: _80.QueryProposalRequest): unknown;
                fromPartial(object: Partial<_80.QueryProposalRequest>): _80.QueryProposalRequest;
                fromAmino(object: _80.QueryProposalRequestAmino): _80.QueryProposalRequest;
                toAmino(message: _80.QueryProposalRequest): _80.QueryProposalRequestAmino;
                fromAminoMsg(object: _80.QueryProposalRequestAminoMsg): _80.QueryProposalRequest;
                toAminoMsg(message: _80.QueryProposalRequest): _80.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _80.QueryProposalRequestProtoMsg): _80.QueryProposalRequest;
                toProto(message: _80.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _80.QueryProposalRequest): _80.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _80.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _80.QueryProposalResponse;
                fromJSON(object: any): _80.QueryProposalResponse;
                toJSON(message: _80.QueryProposalResponse): unknown;
                fromPartial(object: Partial<_80.QueryProposalResponse>): _80.QueryProposalResponse;
                fromAmino(object: _80.QueryProposalResponseAmino): _80.QueryProposalResponse;
                toAmino(message: _80.QueryProposalResponse): _80.QueryProposalResponseAmino;
                fromAminoMsg(object: _80.QueryProposalResponseAminoMsg): _80.QueryProposalResponse;
                toAminoMsg(message: _80.QueryProposalResponse): _80.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _80.QueryProposalResponseProtoMsg): _80.QueryProposalResponse;
                toProto(message: _80.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _80.QueryProposalResponse): _80.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                typeUrl: string;
                encode(message: _80.QueryProposalsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _80.QueryProposalsRequest;
                fromJSON(object: any): _80.QueryProposalsRequest;
                toJSON(message: _80.QueryProposalsRequest): unknown;
                fromPartial(object: Partial<_80.QueryProposalsRequest>): _80.QueryProposalsRequest;
                fromAmino(object: _80.QueryProposalsRequestAmino): _80.QueryProposalsRequest;
                toAmino(message: _80.QueryProposalsRequest): _80.QueryProposalsRequestAmino;
                fromAminoMsg(object: _80.QueryProposalsRequestAminoMsg): _80.QueryProposalsRequest;
                toAminoMsg(message: _80.QueryProposalsRequest): _80.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _80.QueryProposalsRequestProtoMsg): _80.QueryProposalsRequest;
                toProto(message: _80.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _80.QueryProposalsRequest): _80.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                typeUrl: string;
                encode(message: _80.QueryProposalsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _80.QueryProposalsResponse;
                fromJSON(object: any): _80.QueryProposalsResponse;
                toJSON(message: _80.QueryProposalsResponse): unknown;
                fromPartial(object: Partial<_80.QueryProposalsResponse>): _80.QueryProposalsResponse;
                fromAmino(object: _80.QueryProposalsResponseAmino): _80.QueryProposalsResponse;
                toAmino(message: _80.QueryProposalsResponse): _80.QueryProposalsResponseAmino;
                fromAminoMsg(object: _80.QueryProposalsResponseAminoMsg): _80.QueryProposalsResponse;
                toAminoMsg(message: _80.QueryProposalsResponse): _80.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _80.QueryProposalsResponseProtoMsg): _80.QueryProposalsResponse;
                toProto(message: _80.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _80.QueryProposalsResponse): _80.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                typeUrl: string;
                encode(message: _80.QueryVoteRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _80.QueryVoteRequest;
                fromJSON(object: any): _80.QueryVoteRequest;
                toJSON(message: _80.QueryVoteRequest): unknown;
                fromPartial(object: Partial<_80.QueryVoteRequest>): _80.QueryVoteRequest;
                fromAmino(object: _80.QueryVoteRequestAmino): _80.QueryVoteRequest;
                toAmino(message: _80.QueryVoteRequest): _80.QueryVoteRequestAmino;
                fromAminoMsg(object: _80.QueryVoteRequestAminoMsg): _80.QueryVoteRequest;
                toAminoMsg(message: _80.QueryVoteRequest): _80.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _80.QueryVoteRequestProtoMsg): _80.QueryVoteRequest;
                toProto(message: _80.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _80.QueryVoteRequest): _80.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                typeUrl: string;
                encode(message: _80.QueryVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _80.QueryVoteResponse;
                fromJSON(object: any): _80.QueryVoteResponse;
                toJSON(message: _80.QueryVoteResponse): unknown;
                fromPartial(object: Partial<_80.QueryVoteResponse>): _80.QueryVoteResponse;
                fromAmino(object: _80.QueryVoteResponseAmino): _80.QueryVoteResponse;
                toAmino(message: _80.QueryVoteResponse): _80.QueryVoteResponseAmino;
                fromAminoMsg(object: _80.QueryVoteResponseAminoMsg): _80.QueryVoteResponse;
                toAminoMsg(message: _80.QueryVoteResponse): _80.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _80.QueryVoteResponseProtoMsg): _80.QueryVoteResponse;
                toProto(message: _80.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _80.QueryVoteResponse): _80.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                typeUrl: string;
                encode(message: _80.QueryVotesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _80.QueryVotesRequest;
                fromJSON(object: any): _80.QueryVotesRequest;
                toJSON(message: _80.QueryVotesRequest): unknown;
                fromPartial(object: Partial<_80.QueryVotesRequest>): _80.QueryVotesRequest;
                fromAmino(object: _80.QueryVotesRequestAmino): _80.QueryVotesRequest;
                toAmino(message: _80.QueryVotesRequest): _80.QueryVotesRequestAmino;
                fromAminoMsg(object: _80.QueryVotesRequestAminoMsg): _80.QueryVotesRequest;
                toAminoMsg(message: _80.QueryVotesRequest): _80.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _80.QueryVotesRequestProtoMsg): _80.QueryVotesRequest;
                toProto(message: _80.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _80.QueryVotesRequest): _80.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                typeUrl: string;
                encode(message: _80.QueryVotesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _80.QueryVotesResponse;
                fromJSON(object: any): _80.QueryVotesResponse;
                toJSON(message: _80.QueryVotesResponse): unknown;
                fromPartial(object: Partial<_80.QueryVotesResponse>): _80.QueryVotesResponse;
                fromAmino(object: _80.QueryVotesResponseAmino): _80.QueryVotesResponse;
                toAmino(message: _80.QueryVotesResponse): _80.QueryVotesResponseAmino;
                fromAminoMsg(object: _80.QueryVotesResponseAminoMsg): _80.QueryVotesResponse;
                toAminoMsg(message: _80.QueryVotesResponse): _80.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _80.QueryVotesResponseProtoMsg): _80.QueryVotesResponse;
                toProto(message: _80.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _80.QueryVotesResponse): _80.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _80.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _80.QueryParamsRequest;
                fromJSON(object: any): _80.QueryParamsRequest;
                toJSON(message: _80.QueryParamsRequest): unknown;
                fromPartial(object: Partial<_80.QueryParamsRequest>): _80.QueryParamsRequest;
                fromAmino(object: _80.QueryParamsRequestAmino): _80.QueryParamsRequest;
                toAmino(message: _80.QueryParamsRequest): _80.QueryParamsRequestAmino;
                fromAminoMsg(object: _80.QueryParamsRequestAminoMsg): _80.QueryParamsRequest;
                toAminoMsg(message: _80.QueryParamsRequest): _80.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _80.QueryParamsRequestProtoMsg): _80.QueryParamsRequest;
                toProto(message: _80.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _80.QueryParamsRequest): _80.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _80.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _80.QueryParamsResponse;
                fromJSON(object: any): _80.QueryParamsResponse;
                toJSON(message: _80.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_80.QueryParamsResponse>): _80.QueryParamsResponse;
                fromAmino(object: _80.QueryParamsResponseAmino): _80.QueryParamsResponse;
                toAmino(message: _80.QueryParamsResponse): _80.QueryParamsResponseAmino;
                fromAminoMsg(object: _80.QueryParamsResponseAminoMsg): _80.QueryParamsResponse;
                toAminoMsg(message: _80.QueryParamsResponse): _80.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _80.QueryParamsResponseProtoMsg): _80.QueryParamsResponse;
                toProto(message: _80.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _80.QueryParamsResponse): _80.QueryParamsResponseProtoMsg;
            };
            QueryDepositRequest: {
                typeUrl: string;
                encode(message: _80.QueryDepositRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _80.QueryDepositRequest;
                fromJSON(object: any): _80.QueryDepositRequest;
                toJSON(message: _80.QueryDepositRequest): unknown;
                fromPartial(object: Partial<_80.QueryDepositRequest>): _80.QueryDepositRequest;
                fromAmino(object: _80.QueryDepositRequestAmino): _80.QueryDepositRequest;
                toAmino(message: _80.QueryDepositRequest): _80.QueryDepositRequestAmino;
                fromAminoMsg(object: _80.QueryDepositRequestAminoMsg): _80.QueryDepositRequest;
                toAminoMsg(message: _80.QueryDepositRequest): _80.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _80.QueryDepositRequestProtoMsg): _80.QueryDepositRequest;
                toProto(message: _80.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _80.QueryDepositRequest): _80.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                typeUrl: string;
                encode(message: _80.QueryDepositResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _80.QueryDepositResponse;
                fromJSON(object: any): _80.QueryDepositResponse;
                toJSON(message: _80.QueryDepositResponse): unknown;
                fromPartial(object: Partial<_80.QueryDepositResponse>): _80.QueryDepositResponse;
                fromAmino(object: _80.QueryDepositResponseAmino): _80.QueryDepositResponse;
                toAmino(message: _80.QueryDepositResponse): _80.QueryDepositResponseAmino;
                fromAminoMsg(object: _80.QueryDepositResponseAminoMsg): _80.QueryDepositResponse;
                toAminoMsg(message: _80.QueryDepositResponse): _80.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _80.QueryDepositResponseProtoMsg): _80.QueryDepositResponse;
                toProto(message: _80.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _80.QueryDepositResponse): _80.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                encode(message: _80.QueryDepositsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _80.QueryDepositsRequest;
                fromJSON(object: any): _80.QueryDepositsRequest;
                toJSON(message: _80.QueryDepositsRequest): unknown;
                fromPartial(object: Partial<_80.QueryDepositsRequest>): _80.QueryDepositsRequest;
                fromAmino(object: _80.QueryDepositsRequestAmino): _80.QueryDepositsRequest;
                toAmino(message: _80.QueryDepositsRequest): _80.QueryDepositsRequestAmino;
                fromAminoMsg(object: _80.QueryDepositsRequestAminoMsg): _80.QueryDepositsRequest;
                toAminoMsg(message: _80.QueryDepositsRequest): _80.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _80.QueryDepositsRequestProtoMsg): _80.QueryDepositsRequest;
                toProto(message: _80.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _80.QueryDepositsRequest): _80.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                encode(message: _80.QueryDepositsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _80.QueryDepositsResponse;
                fromJSON(object: any): _80.QueryDepositsResponse;
                toJSON(message: _80.QueryDepositsResponse): unknown;
                fromPartial(object: Partial<_80.QueryDepositsResponse>): _80.QueryDepositsResponse;
                fromAmino(object: _80.QueryDepositsResponseAmino): _80.QueryDepositsResponse;
                toAmino(message: _80.QueryDepositsResponse): _80.QueryDepositsResponseAmino;
                fromAminoMsg(object: _80.QueryDepositsResponseAminoMsg): _80.QueryDepositsResponse;
                toAminoMsg(message: _80.QueryDepositsResponse): _80.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _80.QueryDepositsResponseProtoMsg): _80.QueryDepositsResponse;
                toProto(message: _80.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _80.QueryDepositsResponse): _80.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _80.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _80.QueryTallyResultRequest;
                fromJSON(object: any): _80.QueryTallyResultRequest;
                toJSON(message: _80.QueryTallyResultRequest): unknown;
                fromPartial(object: Partial<_80.QueryTallyResultRequest>): _80.QueryTallyResultRequest;
                fromAmino(object: _80.QueryTallyResultRequestAmino): _80.QueryTallyResultRequest;
                toAmino(message: _80.QueryTallyResultRequest): _80.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _80.QueryTallyResultRequestAminoMsg): _80.QueryTallyResultRequest;
                toAminoMsg(message: _80.QueryTallyResultRequest): _80.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _80.QueryTallyResultRequestProtoMsg): _80.QueryTallyResultRequest;
                toProto(message: _80.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _80.QueryTallyResultRequest): _80.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _80.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _80.QueryTallyResultResponse;
                fromJSON(object: any): _80.QueryTallyResultResponse;
                toJSON(message: _80.QueryTallyResultResponse): unknown;
                fromPartial(object: Partial<_80.QueryTallyResultResponse>): _80.QueryTallyResultResponse;
                fromAmino(object: _80.QueryTallyResultResponseAmino): _80.QueryTallyResultResponse;
                toAmino(message: _80.QueryTallyResultResponse): _80.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _80.QueryTallyResultResponseAminoMsg): _80.QueryTallyResultResponse;
                toAminoMsg(message: _80.QueryTallyResultResponse): _80.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _80.QueryTallyResultResponseProtoMsg): _80.QueryTallyResultResponse;
                toProto(message: _80.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _80.QueryTallyResultResponse): _80.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _79.VoteOption;
            voteOptionToJSON(object: _79.VoteOption): string;
            proposalStatusFromJSON(object: any): _79.ProposalStatus;
            proposalStatusToJSON(object: _79.ProposalStatus): string;
            VoteOption: typeof _79.VoteOption;
            VoteOptionSDKType: typeof _79.VoteOption;
            VoteOptionAmino: typeof _79.VoteOption;
            ProposalStatus: typeof _79.ProposalStatus;
            ProposalStatusSDKType: typeof _79.ProposalStatus;
            ProposalStatusAmino: typeof _79.ProposalStatus;
            WeightedVoteOption: {
                typeUrl: string;
                encode(message: _79.WeightedVoteOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _79.WeightedVoteOption;
                fromJSON(object: any): _79.WeightedVoteOption;
                toJSON(message: _79.WeightedVoteOption): unknown;
                fromPartial(object: Partial<_79.WeightedVoteOption>): _79.WeightedVoteOption;
                fromAmino(object: _79.WeightedVoteOptionAmino): _79.WeightedVoteOption;
                toAmino(message: _79.WeightedVoteOption): _79.WeightedVoteOptionAmino;
                fromAminoMsg(object: _79.WeightedVoteOptionAminoMsg): _79.WeightedVoteOption;
                toAminoMsg(message: _79.WeightedVoteOption): _79.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _79.WeightedVoteOptionProtoMsg): _79.WeightedVoteOption;
                toProto(message: _79.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _79.WeightedVoteOption): _79.WeightedVoteOptionProtoMsg;
            };
            TextProposal: {
                typeUrl: string;
                encode(message: _79.TextProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _79.TextProposal;
                fromJSON(object: any): _79.TextProposal;
                toJSON(message: _79.TextProposal): unknown;
                fromPartial(object: Partial<_79.TextProposal>): _79.TextProposal;
                fromAmino(object: _79.TextProposalAmino): _79.TextProposal;
                toAmino(message: _79.TextProposal): _79.TextProposalAmino;
                fromAminoMsg(object: _79.TextProposalAminoMsg): _79.TextProposal;
                toAminoMsg(message: _79.TextProposal): _79.TextProposalAminoMsg;
                fromProtoMsg(message: _79.TextProposalProtoMsg): _79.TextProposal;
                toProto(message: _79.TextProposal): Uint8Array;
                toProtoMsg(message: _79.TextProposal): _79.TextProposalProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                encode(message: _79.Deposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _79.Deposit;
                fromJSON(object: any): _79.Deposit;
                toJSON(message: _79.Deposit): unknown;
                fromPartial(object: Partial<_79.Deposit>): _79.Deposit;
                fromAmino(object: _79.DepositAmino): _79.Deposit;
                toAmino(message: _79.Deposit): _79.DepositAmino;
                fromAminoMsg(object: _79.DepositAminoMsg): _79.Deposit;
                toAminoMsg(message: _79.Deposit): _79.DepositAminoMsg;
                fromProtoMsg(message: _79.DepositProtoMsg): _79.Deposit;
                toProto(message: _79.Deposit): Uint8Array;
                toProtoMsg(message: _79.Deposit): _79.DepositProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _79.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _79.Proposal;
                fromJSON(object: any): _79.Proposal;
                toJSON(message: _79.Proposal): unknown;
                fromPartial(object: Partial<_79.Proposal>): _79.Proposal;
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
                fromAmino(object: _79.VoteAmino): _79.Vote;
                toAmino(message: _79.Vote): _79.VoteAmino;
                fromAminoMsg(object: _79.VoteAminoMsg): _79.Vote;
                toAminoMsg(message: _79.Vote): _79.VoteAminoMsg;
                fromProtoMsg(message: _79.VoteProtoMsg): _79.Vote;
                toProto(message: _79.Vote): Uint8Array;
                toProtoMsg(message: _79.Vote): _79.VoteProtoMsg;
            };
            DepositParams: {
                typeUrl: string;
                encode(message: _79.DepositParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _79.DepositParams;
                fromJSON(object: any): _79.DepositParams;
                toJSON(message: _79.DepositParams): unknown;
                fromPartial(object: Partial<_79.DepositParams>): _79.DepositParams;
                fromAmino(object: _79.DepositParamsAmino): _79.DepositParams;
                toAmino(message: _79.DepositParams): _79.DepositParamsAmino;
                fromAminoMsg(object: _79.DepositParamsAminoMsg): _79.DepositParams;
                toAminoMsg(message: _79.DepositParams): _79.DepositParamsAminoMsg;
                fromProtoMsg(message: _79.DepositParamsProtoMsg): _79.DepositParams;
                toProto(message: _79.DepositParams): Uint8Array;
                toProtoMsg(message: _79.DepositParams): _79.DepositParamsProtoMsg;
            };
            VotingParams: {
                typeUrl: string;
                encode(message: _79.VotingParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _79.VotingParams;
                fromJSON(object: any): _79.VotingParams;
                toJSON(message: _79.VotingParams): unknown;
                fromPartial(object: Partial<_79.VotingParams>): _79.VotingParams;
                fromAmino(object: _79.VotingParamsAmino): _79.VotingParams;
                toAmino(message: _79.VotingParams): _79.VotingParamsAmino;
                fromAminoMsg(object: _79.VotingParamsAminoMsg): _79.VotingParams;
                toAminoMsg(message: _79.VotingParams): _79.VotingParamsAminoMsg;
                fromProtoMsg(message: _79.VotingParamsProtoMsg): _79.VotingParams;
                toProto(message: _79.VotingParams): Uint8Array;
                toProtoMsg(message: _79.VotingParams): _79.VotingParamsProtoMsg;
            };
            TallyParams: {
                typeUrl: string;
                encode(message: _79.TallyParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _79.TallyParams;
                fromJSON(object: any): _79.TallyParams;
                toJSON(message: _79.TallyParams): unknown;
                fromPartial(object: Partial<_79.TallyParams>): _79.TallyParams;
                fromAmino(object: _79.TallyParamsAmino): _79.TallyParams;
                toAmino(message: _79.TallyParams): _79.TallyParamsAmino;
                fromAminoMsg(object: _79.TallyParamsAminoMsg): _79.TallyParams;
                toAminoMsg(message: _79.TallyParams): _79.TallyParamsAminoMsg;
                fromProtoMsg(message: _79.TallyParamsProtoMsg): _79.TallyParams;
                toProto(message: _79.TallyParams): Uint8Array;
                toProtoMsg(message: _79.TallyParams): _79.TallyParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _78.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _78.GenesisState;
                fromJSON(object: any): _78.GenesisState;
                toJSON(message: _78.GenesisState): unknown;
                fromPartial(object: Partial<_78.GenesisState>): _78.GenesisState;
                fromAmino(object: _78.GenesisStateAmino): _78.GenesisState;
                toAmino(message: _78.GenesisState): _78.GenesisStateAmino;
                fromAminoMsg(object: _78.GenesisStateAminoMsg): _78.GenesisState;
                toAminoMsg(message: _78.GenesisState): _78.GenesisStateAminoMsg;
                fromProtoMsg(message: _78.GenesisStateProtoMsg): _78.GenesisState;
                toProto(message: _78.GenesisState): Uint8Array;
                toProtoMsg(message: _78.GenesisState): _78.GenesisStateProtoMsg;
            };
        };
    }
    namespace group {
        namespace module {
            const v1: {
                protobufPackage: "cosmos.group.module.v1";
                Module: {
                    typeUrl: string;
                    encode(message: _82.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _82.Module;
                    fromJSON(object: any): _82.Module;
                    toJSON(message: _82.Module): unknown;
                    fromPartial(object: Partial<_82.Module>): _82.Module;
                    fromAmino(object: _82.ModuleAmino): _82.Module;
                    toAmino(message: _82.Module): _82.ModuleAmino;
                    fromAminoMsg(object: _82.ModuleAminoMsg): _82.Module;
                    toAminoMsg(message: _82.Module): _82.ModuleAminoMsg;
                    fromProtoMsg(message: _82.ModuleProtoMsg): _82.Module;
                    toProto(message: _82.Module): Uint8Array;
                    toProtoMsg(message: _82.Module): _82.ModuleProtoMsg;
                };
            };
        }
        const v1: {
            Msg: typeof _272.Msg;
            Query: typeof _255.Query;
            QueryClientImpl: typeof _255.QueryClientImpl;
            LCDQueryClient: typeof _237.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createGroup(value: _86.MsgCreateGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMembers(value: _86.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupAdmin(value: _86.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMetadata(value: _86.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupPolicy(value: _86.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupWithPolicy(value: _86.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyAdmin(value: _86.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyDecisionPolicy(value: _86.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyMetadata(value: _86.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    submitProposal(value: _86.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawProposal(value: _86.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _86.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _86.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    leaveGroup(value: _86.MsgLeaveGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createGroup(value: _86.MsgCreateGroup): {
                        typeUrl: string;
                        value: _86.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _86.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _86.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _86.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _86.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _86.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _86.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _86.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _86.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _86.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _86.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _86.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _86.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _86.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _86.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _86.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _86.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _86.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _86.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _86.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _86.MsgWithdrawProposal;
                    };
                    vote(value: _86.MsgVote): {
                        typeUrl: string;
                        value: _86.MsgVote;
                    };
                    exec(value: _86.MsgExec): {
                        typeUrl: string;
                        value: _86.MsgExec;
                    };
                    leaveGroup(value: _86.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _86.MsgLeaveGroup;
                    };
                };
                toJSON: {
                    createGroup(value: _86.MsgCreateGroup): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupMembers(value: _86.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupAdmin(value: _86.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupMetadata(value: _86.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createGroupPolicy(value: _86.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createGroupWithPolicy(value: _86.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupPolicyAdmin(value: _86.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupPolicyDecisionPolicy(value: _86.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupPolicyMetadata(value: _86.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: unknown;
                    };
                    submitProposal(value: _86.MsgSubmitProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdrawProposal(value: _86.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    vote(value: _86.MsgVote): {
                        typeUrl: string;
                        value: unknown;
                    };
                    exec(value: _86.MsgExec): {
                        typeUrl: string;
                        value: unknown;
                    };
                    leaveGroup(value: _86.MsgLeaveGroup): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createGroup(value: any): {
                        typeUrl: string;
                        value: _86.MsgCreateGroup;
                    };
                    updateGroupMembers(value: any): {
                        typeUrl: string;
                        value: _86.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: any): {
                        typeUrl: string;
                        value: _86.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: any): {
                        typeUrl: string;
                        value: _86.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: any): {
                        typeUrl: string;
                        value: _86.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: any): {
                        typeUrl: string;
                        value: _86.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: any): {
                        typeUrl: string;
                        value: _86.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: any): {
                        typeUrl: string;
                        value: _86.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: any): {
                        typeUrl: string;
                        value: _86.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _86.MsgSubmitProposal;
                    };
                    withdrawProposal(value: any): {
                        typeUrl: string;
                        value: _86.MsgWithdrawProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _86.MsgVote;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _86.MsgExec;
                    };
                    leaveGroup(value: any): {
                        typeUrl: string;
                        value: _86.MsgLeaveGroup;
                    };
                };
                fromPartial: {
                    createGroup(value: _86.MsgCreateGroup): {
                        typeUrl: string;
                        value: _86.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _86.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _86.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _86.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _86.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _86.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _86.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _86.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _86.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _86.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _86.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _86.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _86.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _86.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _86.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _86.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _86.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _86.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _86.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _86.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _86.MsgWithdrawProposal;
                    };
                    vote(value: _86.MsgVote): {
                        typeUrl: string;
                        value: _86.MsgVote;
                    };
                    exec(value: _86.MsgExec): {
                        typeUrl: string;
                        value: _86.MsgExec;
                    };
                    leaveGroup(value: _86.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _86.MsgLeaveGroup;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.group.v1.MsgCreateGroup": {
                    aminoType: string;
                    toAmino: (message: _86.MsgCreateGroup) => _86.MsgCreateGroupAmino;
                    fromAmino: (object: _86.MsgCreateGroupAmino) => _86.MsgCreateGroup;
                };
                "/cosmos.group.v1.MsgUpdateGroupMembers": {
                    aminoType: string;
                    toAmino: (message: _86.MsgUpdateGroupMembers) => _86.MsgUpdateGroupMembersAmino;
                    fromAmino: (object: _86.MsgUpdateGroupMembersAmino) => _86.MsgUpdateGroupMembers;
                };
                "/cosmos.group.v1.MsgUpdateGroupAdmin": {
                    aminoType: string;
                    toAmino: (message: _86.MsgUpdateGroupAdmin) => _86.MsgUpdateGroupAdminAmino;
                    fromAmino: (object: _86.MsgUpdateGroupAdminAmino) => _86.MsgUpdateGroupAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupMetadata": {
                    aminoType: string;
                    toAmino: (message: _86.MsgUpdateGroupMetadata) => _86.MsgUpdateGroupMetadataAmino;
                    fromAmino: (object: _86.MsgUpdateGroupMetadataAmino) => _86.MsgUpdateGroupMetadata;
                };
                "/cosmos.group.v1.MsgCreateGroupPolicy": {
                    aminoType: string;
                    toAmino: (message: _86.MsgCreateGroupPolicy) => _86.MsgCreateGroupPolicyAmino;
                    fromAmino: (object: _86.MsgCreateGroupPolicyAmino) => _86.MsgCreateGroupPolicy;
                };
                "/cosmos.group.v1.MsgCreateGroupWithPolicy": {
                    aminoType: string;
                    toAmino: (message: _86.MsgCreateGroupWithPolicy) => _86.MsgCreateGroupWithPolicyAmino;
                    fromAmino: (object: _86.MsgCreateGroupWithPolicyAmino) => _86.MsgCreateGroupWithPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin": {
                    aminoType: string;
                    toAmino: (message: _86.MsgUpdateGroupPolicyAdmin) => _86.MsgUpdateGroupPolicyAdminAmino;
                    fromAmino: (object: _86.MsgUpdateGroupPolicyAdminAmino) => _86.MsgUpdateGroupPolicyAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy": {
                    aminoType: string;
                    toAmino: (message: _86.MsgUpdateGroupPolicyDecisionPolicy) => _86.MsgUpdateGroupPolicyDecisionPolicyAmino;
                    fromAmino: (object: _86.MsgUpdateGroupPolicyDecisionPolicyAmino) => _86.MsgUpdateGroupPolicyDecisionPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata": {
                    aminoType: string;
                    toAmino: (message: _86.MsgUpdateGroupPolicyMetadata) => _86.MsgUpdateGroupPolicyMetadataAmino;
                    fromAmino: (object: _86.MsgUpdateGroupPolicyMetadataAmino) => _86.MsgUpdateGroupPolicyMetadata;
                };
                "/cosmos.group.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _86.MsgSubmitProposal) => _86.MsgSubmitProposalAmino;
                    fromAmino: (object: _86.MsgSubmitProposalAmino) => _86.MsgSubmitProposal;
                };
                "/cosmos.group.v1.MsgWithdrawProposal": {
                    aminoType: string;
                    toAmino: (message: _86.MsgWithdrawProposal) => _86.MsgWithdrawProposalAmino;
                    fromAmino: (object: _86.MsgWithdrawProposalAmino) => _86.MsgWithdrawProposal;
                };
                "/cosmos.group.v1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _86.MsgVote) => _86.MsgVoteAmino;
                    fromAmino: (object: _86.MsgVoteAmino) => _86.MsgVote;
                };
                "/cosmos.group.v1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _86.MsgExec) => _86.MsgExecAmino;
                    fromAmino: (object: _86.MsgExecAmino) => _86.MsgExec;
                };
                "/cosmos.group.v1.MsgLeaveGroup": {
                    aminoType: string;
                    toAmino: (message: _86.MsgLeaveGroup) => _86.MsgLeaveGroupAmino;
                    fromAmino: (object: _86.MsgLeaveGroupAmino) => _86.MsgLeaveGroup;
                };
            };
            voteOptionFromJSON(object: any): _87.VoteOption;
            voteOptionToJSON(object: _87.VoteOption): string;
            proposalStatusFromJSON(object: any): _87.ProposalStatus;
            proposalStatusToJSON(object: _87.ProposalStatus): string;
            proposalExecutorResultFromJSON(object: any): _87.ProposalExecutorResult;
            proposalExecutorResultToJSON(object: _87.ProposalExecutorResult): string;
            protobufPackage: "cosmos.group.v1";
            VoteOption: typeof _87.VoteOption;
            VoteOptionSDKType: typeof _87.VoteOption;
            VoteOptionAmino: typeof _87.VoteOption;
            ProposalStatus: typeof _87.ProposalStatus;
            ProposalStatusSDKType: typeof _87.ProposalStatus;
            ProposalStatusAmino: typeof _87.ProposalStatus;
            ProposalExecutorResult: typeof _87.ProposalExecutorResult;
            ProposalExecutorResultSDKType: typeof _87.ProposalExecutorResult;
            ProposalExecutorResultAmino: typeof _87.ProposalExecutorResult;
            Member: {
                typeUrl: string;
                encode(message: _87.Member, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _87.Member;
                fromJSON(object: any): _87.Member;
                toJSON(message: _87.Member): unknown;
                fromPartial(object: Partial<_87.Member>): _87.Member;
                fromAmino(object: _87.MemberAmino): _87.Member;
                toAmino(message: _87.Member): _87.MemberAmino;
                fromAminoMsg(object: _87.MemberAminoMsg): _87.Member;
                toAminoMsg(message: _87.Member): _87.MemberAminoMsg;
                fromProtoMsg(message: _87.MemberProtoMsg): _87.Member;
                toProto(message: _87.Member): Uint8Array;
                toProtoMsg(message: _87.Member): _87.MemberProtoMsg;
            };
            MemberRequest: {
                typeUrl: string;
                encode(message: _87.MemberRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _87.MemberRequest;
                fromJSON(object: any): _87.MemberRequest;
                toJSON(message: _87.MemberRequest): unknown;
                fromPartial(object: Partial<_87.MemberRequest>): _87.MemberRequest;
                fromAmino(object: _87.MemberRequestAmino): _87.MemberRequest;
                toAmino(message: _87.MemberRequest): _87.MemberRequestAmino;
                fromAminoMsg(object: _87.MemberRequestAminoMsg): _87.MemberRequest;
                toAminoMsg(message: _87.MemberRequest): _87.MemberRequestAminoMsg;
                fromProtoMsg(message: _87.MemberRequestProtoMsg): _87.MemberRequest;
                toProto(message: _87.MemberRequest): Uint8Array;
                toProtoMsg(message: _87.MemberRequest): _87.MemberRequestProtoMsg;
            };
            ThresholdDecisionPolicy: {
                typeUrl: string;
                encode(message: _87.ThresholdDecisionPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _87.ThresholdDecisionPolicy;
                fromJSON(object: any): _87.ThresholdDecisionPolicy;
                toJSON(message: _87.ThresholdDecisionPolicy): unknown;
                fromPartial(object: Partial<_87.ThresholdDecisionPolicy>): _87.ThresholdDecisionPolicy;
                fromAmino(object: _87.ThresholdDecisionPolicyAmino): _87.ThresholdDecisionPolicy;
                toAmino(message: _87.ThresholdDecisionPolicy): _87.ThresholdDecisionPolicyAmino;
                fromAminoMsg(object: _87.ThresholdDecisionPolicyAminoMsg): _87.ThresholdDecisionPolicy;
                toAminoMsg(message: _87.ThresholdDecisionPolicy): _87.ThresholdDecisionPolicyAminoMsg;
                fromProtoMsg(message: _87.ThresholdDecisionPolicyProtoMsg): _87.ThresholdDecisionPolicy;
                toProto(message: _87.ThresholdDecisionPolicy): Uint8Array;
                toProtoMsg(message: _87.ThresholdDecisionPolicy): _87.ThresholdDecisionPolicyProtoMsg;
            };
            PercentageDecisionPolicy: {
                typeUrl: string;
                encode(message: _87.PercentageDecisionPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _87.PercentageDecisionPolicy;
                fromJSON(object: any): _87.PercentageDecisionPolicy;
                toJSON(message: _87.PercentageDecisionPolicy): unknown;
                fromPartial(object: Partial<_87.PercentageDecisionPolicy>): _87.PercentageDecisionPolicy;
                fromAmino(object: _87.PercentageDecisionPolicyAmino): _87.PercentageDecisionPolicy;
                toAmino(message: _87.PercentageDecisionPolicy): _87.PercentageDecisionPolicyAmino;
                fromAminoMsg(object: _87.PercentageDecisionPolicyAminoMsg): _87.PercentageDecisionPolicy;
                toAminoMsg(message: _87.PercentageDecisionPolicy): _87.PercentageDecisionPolicyAminoMsg;
                fromProtoMsg(message: _87.PercentageDecisionPolicyProtoMsg): _87.PercentageDecisionPolicy;
                toProto(message: _87.PercentageDecisionPolicy): Uint8Array;
                toProtoMsg(message: _87.PercentageDecisionPolicy): _87.PercentageDecisionPolicyProtoMsg;
            };
            DecisionPolicyWindows: {
                typeUrl: string;
                encode(message: _87.DecisionPolicyWindows, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _87.DecisionPolicyWindows;
                fromJSON(object: any): _87.DecisionPolicyWindows;
                toJSON(message: _87.DecisionPolicyWindows): unknown;
                fromPartial(object: Partial<_87.DecisionPolicyWindows>): _87.DecisionPolicyWindows;
                fromAmino(object: _87.DecisionPolicyWindowsAmino): _87.DecisionPolicyWindows;
                toAmino(message: _87.DecisionPolicyWindows): _87.DecisionPolicyWindowsAmino;
                fromAminoMsg(object: _87.DecisionPolicyWindowsAminoMsg): _87.DecisionPolicyWindows;
                toAminoMsg(message: _87.DecisionPolicyWindows): _87.DecisionPolicyWindowsAminoMsg;
                fromProtoMsg(message: _87.DecisionPolicyWindowsProtoMsg): _87.DecisionPolicyWindows;
                toProto(message: _87.DecisionPolicyWindows): Uint8Array;
                toProtoMsg(message: _87.DecisionPolicyWindows): _87.DecisionPolicyWindowsProtoMsg;
            };
            GroupInfo: {
                typeUrl: string;
                encode(message: _87.GroupInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _87.GroupInfo;
                fromJSON(object: any): _87.GroupInfo;
                toJSON(message: _87.GroupInfo): unknown;
                fromPartial(object: Partial<_87.GroupInfo>): _87.GroupInfo;
                fromAmino(object: _87.GroupInfoAmino): _87.GroupInfo;
                toAmino(message: _87.GroupInfo): _87.GroupInfoAmino;
                fromAminoMsg(object: _87.GroupInfoAminoMsg): _87.GroupInfo;
                toAminoMsg(message: _87.GroupInfo): _87.GroupInfoAminoMsg;
                fromProtoMsg(message: _87.GroupInfoProtoMsg): _87.GroupInfo;
                toProto(message: _87.GroupInfo): Uint8Array;
                toProtoMsg(message: _87.GroupInfo): _87.GroupInfoProtoMsg;
            };
            GroupMember: {
                typeUrl: string;
                encode(message: _87.GroupMember, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _87.GroupMember;
                fromJSON(object: any): _87.GroupMember;
                toJSON(message: _87.GroupMember): unknown;
                fromPartial(object: Partial<_87.GroupMember>): _87.GroupMember;
                fromAmino(object: _87.GroupMemberAmino): _87.GroupMember;
                toAmino(message: _87.GroupMember): _87.GroupMemberAmino;
                fromAminoMsg(object: _87.GroupMemberAminoMsg): _87.GroupMember;
                toAminoMsg(message: _87.GroupMember): _87.GroupMemberAminoMsg;
                fromProtoMsg(message: _87.GroupMemberProtoMsg): _87.GroupMember;
                toProto(message: _87.GroupMember): Uint8Array;
                toProtoMsg(message: _87.GroupMember): _87.GroupMemberProtoMsg;
            };
            GroupPolicyInfo: {
                typeUrl: string;
                encode(message: _87.GroupPolicyInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _87.GroupPolicyInfo;
                fromJSON(object: any): _87.GroupPolicyInfo;
                toJSON(message: _87.GroupPolicyInfo): unknown;
                fromPartial(object: Partial<_87.GroupPolicyInfo>): _87.GroupPolicyInfo;
                fromAmino(object: _87.GroupPolicyInfoAmino): _87.GroupPolicyInfo;
                toAmino(message: _87.GroupPolicyInfo): _87.GroupPolicyInfoAmino;
                fromAminoMsg(object: _87.GroupPolicyInfoAminoMsg): _87.GroupPolicyInfo;
                toAminoMsg(message: _87.GroupPolicyInfo): _87.GroupPolicyInfoAminoMsg;
                fromProtoMsg(message: _87.GroupPolicyInfoProtoMsg): _87.GroupPolicyInfo;
                toProto(message: _87.GroupPolicyInfo): Uint8Array;
                toProtoMsg(message: _87.GroupPolicyInfo): _87.GroupPolicyInfoProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _87.Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _87.Proposal;
                fromJSON(object: any): _87.Proposal;
                toJSON(message: _87.Proposal): unknown;
                fromPartial(object: Partial<_87.Proposal>): _87.Proposal;
                fromAmino(object: _87.ProposalAmino): _87.Proposal;
                toAmino(message: _87.Proposal): _87.ProposalAmino;
                fromAminoMsg(object: _87.ProposalAminoMsg): _87.Proposal;
                toAminoMsg(message: _87.Proposal): _87.ProposalAminoMsg;
                fromProtoMsg(message: _87.ProposalProtoMsg): _87.Proposal;
                toProto(message: _87.Proposal): Uint8Array;
                toProtoMsg(message: _87.Proposal): _87.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _87.TallyResult, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _87.TallyResult;
                fromJSON(object: any): _87.TallyResult;
                toJSON(message: _87.TallyResult): unknown;
                fromPartial(object: Partial<_87.TallyResult>): _87.TallyResult;
                fromAmino(object: _87.TallyResultAmino): _87.TallyResult;
                toAmino(message: _87.TallyResult): _87.TallyResultAmino;
                fromAminoMsg(object: _87.TallyResultAminoMsg): _87.TallyResult;
                toAminoMsg(message: _87.TallyResult): _87.TallyResultAminoMsg;
                fromProtoMsg(message: _87.TallyResultProtoMsg): _87.TallyResult;
                toProto(message: _87.TallyResult): Uint8Array;
                toProtoMsg(message: _87.TallyResult): _87.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _87.Vote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _87.Vote;
                fromJSON(object: any): _87.Vote;
                toJSON(message: _87.Vote): unknown;
                fromPartial(object: Partial<_87.Vote>): _87.Vote;
                fromAmino(object: _87.VoteAmino): _87.Vote;
                toAmino(message: _87.Vote): _87.VoteAmino;
                fromAminoMsg(object: _87.VoteAminoMsg): _87.Vote;
                toAminoMsg(message: _87.Vote): _87.VoteAminoMsg;
                fromProtoMsg(message: _87.VoteProtoMsg): _87.Vote;
                toProto(message: _87.Vote): Uint8Array;
                toProtoMsg(message: _87.Vote): _87.VoteProtoMsg;
            };
            Cosmos_groupv1DecisionPolicy_InterfaceDecoder: (input: import("..").BinaryReader | Uint8Array) => import("../google/protobuf/any").Any | _87.ThresholdDecisionPolicy | _87.PercentageDecisionPolicy;
            Cosmos_groupv1DecisionPolicy_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            Cosmos_groupv1DecisionPolicy_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            execFromJSON(object: any): _86.Exec;
            execToJSON(object: _86.Exec): string;
            Exec: typeof _86.Exec;
            ExecSDKType: typeof _86.Exec;
            ExecAmino: typeof _86.Exec;
            MsgCreateGroup: {
                typeUrl: string;
                encode(message: _86.MsgCreateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _86.MsgCreateGroup;
                fromJSON(object: any): _86.MsgCreateGroup;
                toJSON(message: _86.MsgCreateGroup): unknown;
                fromPartial(object: Partial<_86.MsgCreateGroup>): _86.MsgCreateGroup;
                fromAmino(object: _86.MsgCreateGroupAmino): _86.MsgCreateGroup;
                toAmino(message: _86.MsgCreateGroup): _86.MsgCreateGroupAmino;
                fromAminoMsg(object: _86.MsgCreateGroupAminoMsg): _86.MsgCreateGroup;
                toAminoMsg(message: _86.MsgCreateGroup): _86.MsgCreateGroupAminoMsg;
                fromProtoMsg(message: _86.MsgCreateGroupProtoMsg): _86.MsgCreateGroup;
                toProto(message: _86.MsgCreateGroup): Uint8Array;
                toProtoMsg(message: _86.MsgCreateGroup): _86.MsgCreateGroupProtoMsg;
            };
            MsgCreateGroupResponse: {
                typeUrl: string;
                encode(message: _86.MsgCreateGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _86.MsgCreateGroupResponse;
                fromJSON(object: any): _86.MsgCreateGroupResponse;
                toJSON(message: _86.MsgCreateGroupResponse): unknown;
                fromPartial(object: Partial<_86.MsgCreateGroupResponse>): _86.MsgCreateGroupResponse;
                fromAmino(object: _86.MsgCreateGroupResponseAmino): _86.MsgCreateGroupResponse;
                toAmino(message: _86.MsgCreateGroupResponse): _86.MsgCreateGroupResponseAmino;
                fromAminoMsg(object: _86.MsgCreateGroupResponseAminoMsg): _86.MsgCreateGroupResponse;
                toAminoMsg(message: _86.MsgCreateGroupResponse): _86.MsgCreateGroupResponseAminoMsg;
                fromProtoMsg(message: _86.MsgCreateGroupResponseProtoMsg): _86.MsgCreateGroupResponse;
                toProto(message: _86.MsgCreateGroupResponse): Uint8Array;
                toProtoMsg(message: _86.MsgCreateGroupResponse): _86.MsgCreateGroupResponseProtoMsg;
            };
            MsgUpdateGroupMembers: {
                typeUrl: string;
                encode(message: _86.MsgUpdateGroupMembers, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _86.MsgUpdateGroupMembers;
                fromJSON(object: any): _86.MsgUpdateGroupMembers;
                toJSON(message: _86.MsgUpdateGroupMembers): unknown;
                fromPartial(object: Partial<_86.MsgUpdateGroupMembers>): _86.MsgUpdateGroupMembers;
                fromAmino(object: _86.MsgUpdateGroupMembersAmino): _86.MsgUpdateGroupMembers;
                toAmino(message: _86.MsgUpdateGroupMembers): _86.MsgUpdateGroupMembersAmino;
                fromAminoMsg(object: _86.MsgUpdateGroupMembersAminoMsg): _86.MsgUpdateGroupMembers;
                toAminoMsg(message: _86.MsgUpdateGroupMembers): _86.MsgUpdateGroupMembersAminoMsg;
                fromProtoMsg(message: _86.MsgUpdateGroupMembersProtoMsg): _86.MsgUpdateGroupMembers;
                toProto(message: _86.MsgUpdateGroupMembers): Uint8Array;
                toProtoMsg(message: _86.MsgUpdateGroupMembers): _86.MsgUpdateGroupMembersProtoMsg;
            };
            MsgUpdateGroupMembersResponse: {
                typeUrl: string;
                encode(_: _86.MsgUpdateGroupMembersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _86.MsgUpdateGroupMembersResponse;
                fromJSON(_: any): _86.MsgUpdateGroupMembersResponse;
                toJSON(_: _86.MsgUpdateGroupMembersResponse): unknown;
                fromPartial(_: Partial<_86.MsgUpdateGroupMembersResponse>): _86.MsgUpdateGroupMembersResponse;
                fromAmino(_: _86.MsgUpdateGroupMembersResponseAmino): _86.MsgUpdateGroupMembersResponse;
                toAmino(_: _86.MsgUpdateGroupMembersResponse): _86.MsgUpdateGroupMembersResponseAmino;
                fromAminoMsg(object: _86.MsgUpdateGroupMembersResponseAminoMsg): _86.MsgUpdateGroupMembersResponse;
                toAminoMsg(message: _86.MsgUpdateGroupMembersResponse): _86.MsgUpdateGroupMembersResponseAminoMsg;
                fromProtoMsg(message: _86.MsgUpdateGroupMembersResponseProtoMsg): _86.MsgUpdateGroupMembersResponse;
                toProto(message: _86.MsgUpdateGroupMembersResponse): Uint8Array;
                toProtoMsg(message: _86.MsgUpdateGroupMembersResponse): _86.MsgUpdateGroupMembersResponseProtoMsg;
            };
            MsgUpdateGroupAdmin: {
                typeUrl: string;
                encode(message: _86.MsgUpdateGroupAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _86.MsgUpdateGroupAdmin;
                fromJSON(object: any): _86.MsgUpdateGroupAdmin;
                toJSON(message: _86.MsgUpdateGroupAdmin): unknown;
                fromPartial(object: Partial<_86.MsgUpdateGroupAdmin>): _86.MsgUpdateGroupAdmin;
                fromAmino(object: _86.MsgUpdateGroupAdminAmino): _86.MsgUpdateGroupAdmin;
                toAmino(message: _86.MsgUpdateGroupAdmin): _86.MsgUpdateGroupAdminAmino;
                fromAminoMsg(object: _86.MsgUpdateGroupAdminAminoMsg): _86.MsgUpdateGroupAdmin;
                toAminoMsg(message: _86.MsgUpdateGroupAdmin): _86.MsgUpdateGroupAdminAminoMsg;
                fromProtoMsg(message: _86.MsgUpdateGroupAdminProtoMsg): _86.MsgUpdateGroupAdmin;
                toProto(message: _86.MsgUpdateGroupAdmin): Uint8Array;
                toProtoMsg(message: _86.MsgUpdateGroupAdmin): _86.MsgUpdateGroupAdminProtoMsg;
            };
            MsgUpdateGroupAdminResponse: {
                typeUrl: string;
                encode(_: _86.MsgUpdateGroupAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _86.MsgUpdateGroupAdminResponse;
                fromJSON(_: any): _86.MsgUpdateGroupAdminResponse;
                toJSON(_: _86.MsgUpdateGroupAdminResponse): unknown;
                fromPartial(_: Partial<_86.MsgUpdateGroupAdminResponse>): _86.MsgUpdateGroupAdminResponse;
                fromAmino(_: _86.MsgUpdateGroupAdminResponseAmino): _86.MsgUpdateGroupAdminResponse;
                toAmino(_: _86.MsgUpdateGroupAdminResponse): _86.MsgUpdateGroupAdminResponseAmino;
                fromAminoMsg(object: _86.MsgUpdateGroupAdminResponseAminoMsg): _86.MsgUpdateGroupAdminResponse;
                toAminoMsg(message: _86.MsgUpdateGroupAdminResponse): _86.MsgUpdateGroupAdminResponseAminoMsg;
                fromProtoMsg(message: _86.MsgUpdateGroupAdminResponseProtoMsg): _86.MsgUpdateGroupAdminResponse;
                toProto(message: _86.MsgUpdateGroupAdminResponse): Uint8Array;
                toProtoMsg(message: _86.MsgUpdateGroupAdminResponse): _86.MsgUpdateGroupAdminResponseProtoMsg;
            };
            MsgUpdateGroupMetadata: {
                typeUrl: string;
                encode(message: _86.MsgUpdateGroupMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _86.MsgUpdateGroupMetadata;
                fromJSON(object: any): _86.MsgUpdateGroupMetadata;
                toJSON(message: _86.MsgUpdateGroupMetadata): unknown;
                fromPartial(object: Partial<_86.MsgUpdateGroupMetadata>): _86.MsgUpdateGroupMetadata;
                fromAmino(object: _86.MsgUpdateGroupMetadataAmino): _86.MsgUpdateGroupMetadata;
                toAmino(message: _86.MsgUpdateGroupMetadata): _86.MsgUpdateGroupMetadataAmino;
                fromAminoMsg(object: _86.MsgUpdateGroupMetadataAminoMsg): _86.MsgUpdateGroupMetadata;
                toAminoMsg(message: _86.MsgUpdateGroupMetadata): _86.MsgUpdateGroupMetadataAminoMsg;
                fromProtoMsg(message: _86.MsgUpdateGroupMetadataProtoMsg): _86.MsgUpdateGroupMetadata;
                toProto(message: _86.MsgUpdateGroupMetadata): Uint8Array;
                toProtoMsg(message: _86.MsgUpdateGroupMetadata): _86.MsgUpdateGroupMetadataProtoMsg;
            };
            MsgUpdateGroupMetadataResponse: {
                typeUrl: string;
                encode(_: _86.MsgUpdateGroupMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _86.MsgUpdateGroupMetadataResponse;
                fromJSON(_: any): _86.MsgUpdateGroupMetadataResponse;
                toJSON(_: _86.MsgUpdateGroupMetadataResponse): unknown;
                fromPartial(_: Partial<_86.MsgUpdateGroupMetadataResponse>): _86.MsgUpdateGroupMetadataResponse;
                fromAmino(_: _86.MsgUpdateGroupMetadataResponseAmino): _86.MsgUpdateGroupMetadataResponse;
                toAmino(_: _86.MsgUpdateGroupMetadataResponse): _86.MsgUpdateGroupMetadataResponseAmino;
                fromAminoMsg(object: _86.MsgUpdateGroupMetadataResponseAminoMsg): _86.MsgUpdateGroupMetadataResponse;
                toAminoMsg(message: _86.MsgUpdateGroupMetadataResponse): _86.MsgUpdateGroupMetadataResponseAminoMsg;
                fromProtoMsg(message: _86.MsgUpdateGroupMetadataResponseProtoMsg): _86.MsgUpdateGroupMetadataResponse;
                toProto(message: _86.MsgUpdateGroupMetadataResponse): Uint8Array;
                toProtoMsg(message: _86.MsgUpdateGroupMetadataResponse): _86.MsgUpdateGroupMetadataResponseProtoMsg;
            };
            MsgCreateGroupPolicy: {
                typeUrl: string;
                encode(message: _86.MsgCreateGroupPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _86.MsgCreateGroupPolicy;
                fromJSON(object: any): _86.MsgCreateGroupPolicy;
                toJSON(message: _86.MsgCreateGroupPolicy): unknown;
                fromPartial(object: Partial<_86.MsgCreateGroupPolicy>): _86.MsgCreateGroupPolicy;
                fromAmino(object: _86.MsgCreateGroupPolicyAmino): _86.MsgCreateGroupPolicy;
                toAmino(message: _86.MsgCreateGroupPolicy): _86.MsgCreateGroupPolicyAmino;
                fromAminoMsg(object: _86.MsgCreateGroupPolicyAminoMsg): _86.MsgCreateGroupPolicy;
                toAminoMsg(message: _86.MsgCreateGroupPolicy): _86.MsgCreateGroupPolicyAminoMsg;
                fromProtoMsg(message: _86.MsgCreateGroupPolicyProtoMsg): _86.MsgCreateGroupPolicy;
                toProto(message: _86.MsgCreateGroupPolicy): Uint8Array;
                toProtoMsg(message: _86.MsgCreateGroupPolicy): _86.MsgCreateGroupPolicyProtoMsg;
            };
            MsgCreateGroupPolicyResponse: {
                typeUrl: string;
                encode(message: _86.MsgCreateGroupPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _86.MsgCreateGroupPolicyResponse;
                fromJSON(object: any): _86.MsgCreateGroupPolicyResponse;
                toJSON(message: _86.MsgCreateGroupPolicyResponse): unknown;
                fromPartial(object: Partial<_86.MsgCreateGroupPolicyResponse>): _86.MsgCreateGroupPolicyResponse;
                fromAmino(object: _86.MsgCreateGroupPolicyResponseAmino): _86.MsgCreateGroupPolicyResponse;
                toAmino(message: _86.MsgCreateGroupPolicyResponse): _86.MsgCreateGroupPolicyResponseAmino;
                fromAminoMsg(object: _86.MsgCreateGroupPolicyResponseAminoMsg): _86.MsgCreateGroupPolicyResponse;
                toAminoMsg(message: _86.MsgCreateGroupPolicyResponse): _86.MsgCreateGroupPolicyResponseAminoMsg;
                fromProtoMsg(message: _86.MsgCreateGroupPolicyResponseProtoMsg): _86.MsgCreateGroupPolicyResponse;
                toProto(message: _86.MsgCreateGroupPolicyResponse): Uint8Array;
                toProtoMsg(message: _86.MsgCreateGroupPolicyResponse): _86.MsgCreateGroupPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyAdmin: {
                typeUrl: string;
                encode(message: _86.MsgUpdateGroupPolicyAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _86.MsgUpdateGroupPolicyAdmin;
                fromJSON(object: any): _86.MsgUpdateGroupPolicyAdmin;
                toJSON(message: _86.MsgUpdateGroupPolicyAdmin): unknown;
                fromPartial(object: Partial<_86.MsgUpdateGroupPolicyAdmin>): _86.MsgUpdateGroupPolicyAdmin;
                fromAmino(object: _86.MsgUpdateGroupPolicyAdminAmino): _86.MsgUpdateGroupPolicyAdmin;
                toAmino(message: _86.MsgUpdateGroupPolicyAdmin): _86.MsgUpdateGroupPolicyAdminAmino;
                fromAminoMsg(object: _86.MsgUpdateGroupPolicyAdminAminoMsg): _86.MsgUpdateGroupPolicyAdmin;
                toAminoMsg(message: _86.MsgUpdateGroupPolicyAdmin): _86.MsgUpdateGroupPolicyAdminAminoMsg;
                fromProtoMsg(message: _86.MsgUpdateGroupPolicyAdminProtoMsg): _86.MsgUpdateGroupPolicyAdmin;
                toProto(message: _86.MsgUpdateGroupPolicyAdmin): Uint8Array;
                toProtoMsg(message: _86.MsgUpdateGroupPolicyAdmin): _86.MsgUpdateGroupPolicyAdminProtoMsg;
            };
            MsgUpdateGroupPolicyAdminResponse: {
                typeUrl: string;
                encode(_: _86.MsgUpdateGroupPolicyAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _86.MsgUpdateGroupPolicyAdminResponse;
                fromJSON(_: any): _86.MsgUpdateGroupPolicyAdminResponse;
                toJSON(_: _86.MsgUpdateGroupPolicyAdminResponse): unknown;
                fromPartial(_: Partial<_86.MsgUpdateGroupPolicyAdminResponse>): _86.MsgUpdateGroupPolicyAdminResponse;
                fromAmino(_: _86.MsgUpdateGroupPolicyAdminResponseAmino): _86.MsgUpdateGroupPolicyAdminResponse;
                toAmino(_: _86.MsgUpdateGroupPolicyAdminResponse): _86.MsgUpdateGroupPolicyAdminResponseAmino;
                fromAminoMsg(object: _86.MsgUpdateGroupPolicyAdminResponseAminoMsg): _86.MsgUpdateGroupPolicyAdminResponse;
                toAminoMsg(message: _86.MsgUpdateGroupPolicyAdminResponse): _86.MsgUpdateGroupPolicyAdminResponseAminoMsg;
                fromProtoMsg(message: _86.MsgUpdateGroupPolicyAdminResponseProtoMsg): _86.MsgUpdateGroupPolicyAdminResponse;
                toProto(message: _86.MsgUpdateGroupPolicyAdminResponse): Uint8Array;
                toProtoMsg(message: _86.MsgUpdateGroupPolicyAdminResponse): _86.MsgUpdateGroupPolicyAdminResponseProtoMsg;
            };
            MsgCreateGroupWithPolicy: {
                typeUrl: string;
                encode(message: _86.MsgCreateGroupWithPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _86.MsgCreateGroupWithPolicy;
                fromJSON(object: any): _86.MsgCreateGroupWithPolicy;
                toJSON(message: _86.MsgCreateGroupWithPolicy): unknown;
                fromPartial(object: Partial<_86.MsgCreateGroupWithPolicy>): _86.MsgCreateGroupWithPolicy;
                fromAmino(object: _86.MsgCreateGroupWithPolicyAmino): _86.MsgCreateGroupWithPolicy;
                toAmino(message: _86.MsgCreateGroupWithPolicy): _86.MsgCreateGroupWithPolicyAmino;
                fromAminoMsg(object: _86.MsgCreateGroupWithPolicyAminoMsg): _86.MsgCreateGroupWithPolicy;
                toAminoMsg(message: _86.MsgCreateGroupWithPolicy): _86.MsgCreateGroupWithPolicyAminoMsg;
                fromProtoMsg(message: _86.MsgCreateGroupWithPolicyProtoMsg): _86.MsgCreateGroupWithPolicy;
                toProto(message: _86.MsgCreateGroupWithPolicy): Uint8Array;
                toProtoMsg(message: _86.MsgCreateGroupWithPolicy): _86.MsgCreateGroupWithPolicyProtoMsg;
            };
            MsgCreateGroupWithPolicyResponse: {
                typeUrl: string;
                encode(message: _86.MsgCreateGroupWithPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _86.MsgCreateGroupWithPolicyResponse;
                fromJSON(object: any): _86.MsgCreateGroupWithPolicyResponse;
                toJSON(message: _86.MsgCreateGroupWithPolicyResponse): unknown;
                fromPartial(object: Partial<_86.MsgCreateGroupWithPolicyResponse>): _86.MsgCreateGroupWithPolicyResponse;
                fromAmino(object: _86.MsgCreateGroupWithPolicyResponseAmino): _86.MsgCreateGroupWithPolicyResponse;
                toAmino(message: _86.MsgCreateGroupWithPolicyResponse): _86.MsgCreateGroupWithPolicyResponseAmino;
                fromAminoMsg(object: _86.MsgCreateGroupWithPolicyResponseAminoMsg): _86.MsgCreateGroupWithPolicyResponse;
                toAminoMsg(message: _86.MsgCreateGroupWithPolicyResponse): _86.MsgCreateGroupWithPolicyResponseAminoMsg;
                fromProtoMsg(message: _86.MsgCreateGroupWithPolicyResponseProtoMsg): _86.MsgCreateGroupWithPolicyResponse;
                toProto(message: _86.MsgCreateGroupWithPolicyResponse): Uint8Array;
                toProtoMsg(message: _86.MsgCreateGroupWithPolicyResponse): _86.MsgCreateGroupWithPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyDecisionPolicy: {
                typeUrl: string;
                encode(message: _86.MsgUpdateGroupPolicyDecisionPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _86.MsgUpdateGroupPolicyDecisionPolicy;
                fromJSON(object: any): _86.MsgUpdateGroupPolicyDecisionPolicy;
                toJSON(message: _86.MsgUpdateGroupPolicyDecisionPolicy): unknown;
                fromPartial(object: Partial<_86.MsgUpdateGroupPolicyDecisionPolicy>): _86.MsgUpdateGroupPolicyDecisionPolicy;
                fromAmino(object: _86.MsgUpdateGroupPolicyDecisionPolicyAmino): _86.MsgUpdateGroupPolicyDecisionPolicy;
                toAmino(message: _86.MsgUpdateGroupPolicyDecisionPolicy): _86.MsgUpdateGroupPolicyDecisionPolicyAmino;
                fromAminoMsg(object: _86.MsgUpdateGroupPolicyDecisionPolicyAminoMsg): _86.MsgUpdateGroupPolicyDecisionPolicy;
                toAminoMsg(message: _86.MsgUpdateGroupPolicyDecisionPolicy): _86.MsgUpdateGroupPolicyDecisionPolicyAminoMsg;
                fromProtoMsg(message: _86.MsgUpdateGroupPolicyDecisionPolicyProtoMsg): _86.MsgUpdateGroupPolicyDecisionPolicy;
                toProto(message: _86.MsgUpdateGroupPolicyDecisionPolicy): Uint8Array;
                toProtoMsg(message: _86.MsgUpdateGroupPolicyDecisionPolicy): _86.MsgUpdateGroupPolicyDecisionPolicyProtoMsg;
            };
            MsgUpdateGroupPolicyDecisionPolicyResponse: {
                typeUrl: string;
                encode(_: _86.MsgUpdateGroupPolicyDecisionPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _86.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromJSON(_: any): _86.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toJSON(_: _86.MsgUpdateGroupPolicyDecisionPolicyResponse): unknown;
                fromPartial(_: Partial<_86.MsgUpdateGroupPolicyDecisionPolicyResponse>): _86.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromAmino(_: _86.MsgUpdateGroupPolicyDecisionPolicyResponseAmino): _86.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toAmino(_: _86.MsgUpdateGroupPolicyDecisionPolicyResponse): _86.MsgUpdateGroupPolicyDecisionPolicyResponseAmino;
                fromAminoMsg(object: _86.MsgUpdateGroupPolicyDecisionPolicyResponseAminoMsg): _86.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toAminoMsg(message: _86.MsgUpdateGroupPolicyDecisionPolicyResponse): _86.MsgUpdateGroupPolicyDecisionPolicyResponseAminoMsg;
                fromProtoMsg(message: _86.MsgUpdateGroupPolicyDecisionPolicyResponseProtoMsg): _86.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toProto(message: _86.MsgUpdateGroupPolicyDecisionPolicyResponse): Uint8Array;
                toProtoMsg(message: _86.MsgUpdateGroupPolicyDecisionPolicyResponse): _86.MsgUpdateGroupPolicyDecisionPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyMetadata: {
                typeUrl: string;
                encode(message: _86.MsgUpdateGroupPolicyMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _86.MsgUpdateGroupPolicyMetadata;
                fromJSON(object: any): _86.MsgUpdateGroupPolicyMetadata;
                toJSON(message: _86.MsgUpdateGroupPolicyMetadata): unknown;
                fromPartial(object: Partial<_86.MsgUpdateGroupPolicyMetadata>): _86.MsgUpdateGroupPolicyMetadata;
                fromAmino(object: _86.MsgUpdateGroupPolicyMetadataAmino): _86.MsgUpdateGroupPolicyMetadata;
                toAmino(message: _86.MsgUpdateGroupPolicyMetadata): _86.MsgUpdateGroupPolicyMetadataAmino;
                fromAminoMsg(object: _86.MsgUpdateGroupPolicyMetadataAminoMsg): _86.MsgUpdateGroupPolicyMetadata;
                toAminoMsg(message: _86.MsgUpdateGroupPolicyMetadata): _86.MsgUpdateGroupPolicyMetadataAminoMsg;
                fromProtoMsg(message: _86.MsgUpdateGroupPolicyMetadataProtoMsg): _86.MsgUpdateGroupPolicyMetadata;
                toProto(message: _86.MsgUpdateGroupPolicyMetadata): Uint8Array;
                toProtoMsg(message: _86.MsgUpdateGroupPolicyMetadata): _86.MsgUpdateGroupPolicyMetadataProtoMsg;
            };
            MsgUpdateGroupPolicyMetadataResponse: {
                typeUrl: string;
                encode(_: _86.MsgUpdateGroupPolicyMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _86.MsgUpdateGroupPolicyMetadataResponse;
                fromJSON(_: any): _86.MsgUpdateGroupPolicyMetadataResponse;
                toJSON(_: _86.MsgUpdateGroupPolicyMetadataResponse): unknown;
                fromPartial(_: Partial<_86.MsgUpdateGroupPolicyMetadataResponse>): _86.MsgUpdateGroupPolicyMetadataResponse;
                fromAmino(_: _86.MsgUpdateGroupPolicyMetadataResponseAmino): _86.MsgUpdateGroupPolicyMetadataResponse;
                toAmino(_: _86.MsgUpdateGroupPolicyMetadataResponse): _86.MsgUpdateGroupPolicyMetadataResponseAmino;
                fromAminoMsg(object: _86.MsgUpdateGroupPolicyMetadataResponseAminoMsg): _86.MsgUpdateGroupPolicyMetadataResponse;
                toAminoMsg(message: _86.MsgUpdateGroupPolicyMetadataResponse): _86.MsgUpdateGroupPolicyMetadataResponseAminoMsg;
                fromProtoMsg(message: _86.MsgUpdateGroupPolicyMetadataResponseProtoMsg): _86.MsgUpdateGroupPolicyMetadataResponse;
                toProto(message: _86.MsgUpdateGroupPolicyMetadataResponse): Uint8Array;
                toProtoMsg(message: _86.MsgUpdateGroupPolicyMetadataResponse): _86.MsgUpdateGroupPolicyMetadataResponseProtoMsg;
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _86.MsgSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _86.MsgSubmitProposal;
                fromJSON(object: any): _86.MsgSubmitProposal;
                toJSON(message: _86.MsgSubmitProposal): unknown;
                fromPartial(object: Partial<_86.MsgSubmitProposal>): _86.MsgSubmitProposal;
                fromAmino(object: _86.MsgSubmitProposalAmino): _86.MsgSubmitProposal;
                toAmino(message: _86.MsgSubmitProposal): _86.MsgSubmitProposalAmino;
                fromAminoMsg(object: _86.MsgSubmitProposalAminoMsg): _86.MsgSubmitProposal;
                toAminoMsg(message: _86.MsgSubmitProposal): _86.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _86.MsgSubmitProposalProtoMsg): _86.MsgSubmitProposal;
                toProto(message: _86.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _86.MsgSubmitProposal): _86.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _86.MsgSubmitProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _86.MsgSubmitProposalResponse;
                fromJSON(object: any): _86.MsgSubmitProposalResponse;
                toJSON(message: _86.MsgSubmitProposalResponse): unknown;
                fromPartial(object: Partial<_86.MsgSubmitProposalResponse>): _86.MsgSubmitProposalResponse;
                fromAmino(object: _86.MsgSubmitProposalResponseAmino): _86.MsgSubmitProposalResponse;
                toAmino(message: _86.MsgSubmitProposalResponse): _86.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _86.MsgSubmitProposalResponseAminoMsg): _86.MsgSubmitProposalResponse;
                toAminoMsg(message: _86.MsgSubmitProposalResponse): _86.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _86.MsgSubmitProposalResponseProtoMsg): _86.MsgSubmitProposalResponse;
                toProto(message: _86.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _86.MsgSubmitProposalResponse): _86.MsgSubmitProposalResponseProtoMsg;
            };
            MsgWithdrawProposal: {
                typeUrl: string;
                encode(message: _86.MsgWithdrawProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _86.MsgWithdrawProposal;
                fromJSON(object: any): _86.MsgWithdrawProposal;
                toJSON(message: _86.MsgWithdrawProposal): unknown;
                fromPartial(object: Partial<_86.MsgWithdrawProposal>): _86.MsgWithdrawProposal;
                fromAmino(object: _86.MsgWithdrawProposalAmino): _86.MsgWithdrawProposal;
                toAmino(message: _86.MsgWithdrawProposal): _86.MsgWithdrawProposalAmino;
                fromAminoMsg(object: _86.MsgWithdrawProposalAminoMsg): _86.MsgWithdrawProposal;
                toAminoMsg(message: _86.MsgWithdrawProposal): _86.MsgWithdrawProposalAminoMsg;
                fromProtoMsg(message: _86.MsgWithdrawProposalProtoMsg): _86.MsgWithdrawProposal;
                toProto(message: _86.MsgWithdrawProposal): Uint8Array;
                toProtoMsg(message: _86.MsgWithdrawProposal): _86.MsgWithdrawProposalProtoMsg;
            };
            MsgWithdrawProposalResponse: {
                typeUrl: string;
                encode(_: _86.MsgWithdrawProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _86.MsgWithdrawProposalResponse;
                fromJSON(_: any): _86.MsgWithdrawProposalResponse;
                toJSON(_: _86.MsgWithdrawProposalResponse): unknown;
                fromPartial(_: Partial<_86.MsgWithdrawProposalResponse>): _86.MsgWithdrawProposalResponse;
                fromAmino(_: _86.MsgWithdrawProposalResponseAmino): _86.MsgWithdrawProposalResponse;
                toAmino(_: _86.MsgWithdrawProposalResponse): _86.MsgWithdrawProposalResponseAmino;
                fromAminoMsg(object: _86.MsgWithdrawProposalResponseAminoMsg): _86.MsgWithdrawProposalResponse;
                toAminoMsg(message: _86.MsgWithdrawProposalResponse): _86.MsgWithdrawProposalResponseAminoMsg;
                fromProtoMsg(message: _86.MsgWithdrawProposalResponseProtoMsg): _86.MsgWithdrawProposalResponse;
                toProto(message: _86.MsgWithdrawProposalResponse): Uint8Array;
                toProtoMsg(message: _86.MsgWithdrawProposalResponse): _86.MsgWithdrawProposalResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _86.MsgVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _86.MsgVote;
                fromJSON(object: any): _86.MsgVote;
                toJSON(message: _86.MsgVote): unknown;
                fromPartial(object: Partial<_86.MsgVote>): _86.MsgVote;
                fromAmino(object: _86.MsgVoteAmino): _86.MsgVote;
                toAmino(message: _86.MsgVote): _86.MsgVoteAmino;
                fromAminoMsg(object: _86.MsgVoteAminoMsg): _86.MsgVote;
                toAminoMsg(message: _86.MsgVote): _86.MsgVoteAminoMsg;
                fromProtoMsg(message: _86.MsgVoteProtoMsg): _86.MsgVote;
                toProto(message: _86.MsgVote): Uint8Array;
                toProtoMsg(message: _86.MsgVote): _86.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _86.MsgVoteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _86.MsgVoteResponse;
                fromJSON(_: any): _86.MsgVoteResponse;
                toJSON(_: _86.MsgVoteResponse): unknown;
                fromPartial(_: Partial<_86.MsgVoteResponse>): _86.MsgVoteResponse;
                fromAmino(_: _86.MsgVoteResponseAmino): _86.MsgVoteResponse;
                toAmino(_: _86.MsgVoteResponse): _86.MsgVoteResponseAmino;
                fromAminoMsg(object: _86.MsgVoteResponseAminoMsg): _86.MsgVoteResponse;
                toAminoMsg(message: _86.MsgVoteResponse): _86.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _86.MsgVoteResponseProtoMsg): _86.MsgVoteResponse;
                toProto(message: _86.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _86.MsgVoteResponse): _86.MsgVoteResponseProtoMsg;
            };
            MsgExec: {
                typeUrl: string;
                encode(message: _86.MsgExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _86.MsgExec;
                fromJSON(object: any): _86.MsgExec;
                toJSON(message: _86.MsgExec): unknown;
                fromPartial(object: Partial<_86.MsgExec>): _86.MsgExec;
                fromAmino(object: _86.MsgExecAmino): _86.MsgExec;
                toAmino(message: _86.MsgExec): _86.MsgExecAmino;
                fromAminoMsg(object: _86.MsgExecAminoMsg): _86.MsgExec;
                toAminoMsg(message: _86.MsgExec): _86.MsgExecAminoMsg;
                fromProtoMsg(message: _86.MsgExecProtoMsg): _86.MsgExec;
                toProto(message: _86.MsgExec): Uint8Array;
                toProtoMsg(message: _86.MsgExec): _86.MsgExecProtoMsg;
            };
            MsgExecResponse: {
                typeUrl: string;
                encode(message: _86.MsgExecResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _86.MsgExecResponse;
                fromJSON(object: any): _86.MsgExecResponse;
                toJSON(message: _86.MsgExecResponse): unknown;
                fromPartial(object: Partial<_86.MsgExecResponse>): _86.MsgExecResponse;
                fromAmino(object: _86.MsgExecResponseAmino): _86.MsgExecResponse;
                toAmino(message: _86.MsgExecResponse): _86.MsgExecResponseAmino;
                fromAminoMsg(object: _86.MsgExecResponseAminoMsg): _86.MsgExecResponse;
                toAminoMsg(message: _86.MsgExecResponse): _86.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _86.MsgExecResponseProtoMsg): _86.MsgExecResponse;
                toProto(message: _86.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _86.MsgExecResponse): _86.MsgExecResponseProtoMsg;
            };
            MsgLeaveGroup: {
                typeUrl: string;
                encode(message: _86.MsgLeaveGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _86.MsgLeaveGroup;
                fromJSON(object: any): _86.MsgLeaveGroup;
                toJSON(message: _86.MsgLeaveGroup): unknown;
                fromPartial(object: Partial<_86.MsgLeaveGroup>): _86.MsgLeaveGroup;
                fromAmino(object: _86.MsgLeaveGroupAmino): _86.MsgLeaveGroup;
                toAmino(message: _86.MsgLeaveGroup): _86.MsgLeaveGroupAmino;
                fromAminoMsg(object: _86.MsgLeaveGroupAminoMsg): _86.MsgLeaveGroup;
                toAminoMsg(message: _86.MsgLeaveGroup): _86.MsgLeaveGroupAminoMsg;
                fromProtoMsg(message: _86.MsgLeaveGroupProtoMsg): _86.MsgLeaveGroup;
                toProto(message: _86.MsgLeaveGroup): Uint8Array;
                toProtoMsg(message: _86.MsgLeaveGroup): _86.MsgLeaveGroupProtoMsg;
            };
            MsgLeaveGroupResponse: {
                typeUrl: string;
                encode(_: _86.MsgLeaveGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _86.MsgLeaveGroupResponse;
                fromJSON(_: any): _86.MsgLeaveGroupResponse;
                toJSON(_: _86.MsgLeaveGroupResponse): unknown;
                fromPartial(_: Partial<_86.MsgLeaveGroupResponse>): _86.MsgLeaveGroupResponse;
                fromAmino(_: _86.MsgLeaveGroupResponseAmino): _86.MsgLeaveGroupResponse;
                toAmino(_: _86.MsgLeaveGroupResponse): _86.MsgLeaveGroupResponseAmino;
                fromAminoMsg(object: _86.MsgLeaveGroupResponseAminoMsg): _86.MsgLeaveGroupResponse;
                toAminoMsg(message: _86.MsgLeaveGroupResponse): _86.MsgLeaveGroupResponseAminoMsg;
                fromProtoMsg(message: _86.MsgLeaveGroupResponseProtoMsg): _86.MsgLeaveGroupResponse;
                toProto(message: _86.MsgLeaveGroupResponse): Uint8Array;
                toProtoMsg(message: _86.MsgLeaveGroupResponse): _86.MsgLeaveGroupResponseProtoMsg;
            };
            QueryGroupInfoRequest: {
                typeUrl: string;
                encode(message: _85.QueryGroupInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _85.QueryGroupInfoRequest;
                fromJSON(object: any): _85.QueryGroupInfoRequest;
                toJSON(message: _85.QueryGroupInfoRequest): unknown;
                fromPartial(object: Partial<_85.QueryGroupInfoRequest>): _85.QueryGroupInfoRequest;
                fromAmino(object: _85.QueryGroupInfoRequestAmino): _85.QueryGroupInfoRequest;
                toAmino(message: _85.QueryGroupInfoRequest): _85.QueryGroupInfoRequestAmino;
                fromAminoMsg(object: _85.QueryGroupInfoRequestAminoMsg): _85.QueryGroupInfoRequest;
                toAminoMsg(message: _85.QueryGroupInfoRequest): _85.QueryGroupInfoRequestAminoMsg;
                fromProtoMsg(message: _85.QueryGroupInfoRequestProtoMsg): _85.QueryGroupInfoRequest;
                toProto(message: _85.QueryGroupInfoRequest): Uint8Array;
                toProtoMsg(message: _85.QueryGroupInfoRequest): _85.QueryGroupInfoRequestProtoMsg;
            };
            QueryGroupInfoResponse: {
                typeUrl: string;
                encode(message: _85.QueryGroupInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _85.QueryGroupInfoResponse;
                fromJSON(object: any): _85.QueryGroupInfoResponse;
                toJSON(message: _85.QueryGroupInfoResponse): unknown;
                fromPartial(object: Partial<_85.QueryGroupInfoResponse>): _85.QueryGroupInfoResponse;
                fromAmino(object: _85.QueryGroupInfoResponseAmino): _85.QueryGroupInfoResponse;
                toAmino(message: _85.QueryGroupInfoResponse): _85.QueryGroupInfoResponseAmino;
                fromAminoMsg(object: _85.QueryGroupInfoResponseAminoMsg): _85.QueryGroupInfoResponse;
                toAminoMsg(message: _85.QueryGroupInfoResponse): _85.QueryGroupInfoResponseAminoMsg;
                fromProtoMsg(message: _85.QueryGroupInfoResponseProtoMsg): _85.QueryGroupInfoResponse;
                toProto(message: _85.QueryGroupInfoResponse): Uint8Array;
                toProtoMsg(message: _85.QueryGroupInfoResponse): _85.QueryGroupInfoResponseProtoMsg;
            };
            QueryGroupPolicyInfoRequest: {
                typeUrl: string;
                encode(message: _85.QueryGroupPolicyInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _85.QueryGroupPolicyInfoRequest;
                fromJSON(object: any): _85.QueryGroupPolicyInfoRequest;
                toJSON(message: _85.QueryGroupPolicyInfoRequest): unknown;
                fromPartial(object: Partial<_85.QueryGroupPolicyInfoRequest>): _85.QueryGroupPolicyInfoRequest;
                fromAmino(object: _85.QueryGroupPolicyInfoRequestAmino): _85.QueryGroupPolicyInfoRequest;
                toAmino(message: _85.QueryGroupPolicyInfoRequest): _85.QueryGroupPolicyInfoRequestAmino;
                fromAminoMsg(object: _85.QueryGroupPolicyInfoRequestAminoMsg): _85.QueryGroupPolicyInfoRequest;
                toAminoMsg(message: _85.QueryGroupPolicyInfoRequest): _85.QueryGroupPolicyInfoRequestAminoMsg;
                fromProtoMsg(message: _85.QueryGroupPolicyInfoRequestProtoMsg): _85.QueryGroupPolicyInfoRequest;
                toProto(message: _85.QueryGroupPolicyInfoRequest): Uint8Array;
                toProtoMsg(message: _85.QueryGroupPolicyInfoRequest): _85.QueryGroupPolicyInfoRequestProtoMsg;
            };
            QueryGroupPolicyInfoResponse: {
                typeUrl: string;
                encode(message: _85.QueryGroupPolicyInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _85.QueryGroupPolicyInfoResponse;
                fromJSON(object: any): _85.QueryGroupPolicyInfoResponse;
                toJSON(message: _85.QueryGroupPolicyInfoResponse): unknown;
                fromPartial(object: Partial<_85.QueryGroupPolicyInfoResponse>): _85.QueryGroupPolicyInfoResponse;
                fromAmino(object: _85.QueryGroupPolicyInfoResponseAmino): _85.QueryGroupPolicyInfoResponse;
                toAmino(message: _85.QueryGroupPolicyInfoResponse): _85.QueryGroupPolicyInfoResponseAmino;
                fromAminoMsg(object: _85.QueryGroupPolicyInfoResponseAminoMsg): _85.QueryGroupPolicyInfoResponse;
                toAminoMsg(message: _85.QueryGroupPolicyInfoResponse): _85.QueryGroupPolicyInfoResponseAminoMsg;
                fromProtoMsg(message: _85.QueryGroupPolicyInfoResponseProtoMsg): _85.QueryGroupPolicyInfoResponse;
                toProto(message: _85.QueryGroupPolicyInfoResponse): Uint8Array;
                toProtoMsg(message: _85.QueryGroupPolicyInfoResponse): _85.QueryGroupPolicyInfoResponseProtoMsg;
            };
            QueryGroupMembersRequest: {
                typeUrl: string;
                encode(message: _85.QueryGroupMembersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _85.QueryGroupMembersRequest;
                fromJSON(object: any): _85.QueryGroupMembersRequest;
                toJSON(message: _85.QueryGroupMembersRequest): unknown;
                fromPartial(object: Partial<_85.QueryGroupMembersRequest>): _85.QueryGroupMembersRequest;
                fromAmino(object: _85.QueryGroupMembersRequestAmino): _85.QueryGroupMembersRequest;
                toAmino(message: _85.QueryGroupMembersRequest): _85.QueryGroupMembersRequestAmino;
                fromAminoMsg(object: _85.QueryGroupMembersRequestAminoMsg): _85.QueryGroupMembersRequest;
                toAminoMsg(message: _85.QueryGroupMembersRequest): _85.QueryGroupMembersRequestAminoMsg;
                fromProtoMsg(message: _85.QueryGroupMembersRequestProtoMsg): _85.QueryGroupMembersRequest;
                toProto(message: _85.QueryGroupMembersRequest): Uint8Array;
                toProtoMsg(message: _85.QueryGroupMembersRequest): _85.QueryGroupMembersRequestProtoMsg;
            };
            QueryGroupMembersResponse: {
                typeUrl: string;
                encode(message: _85.QueryGroupMembersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _85.QueryGroupMembersResponse;
                fromJSON(object: any): _85.QueryGroupMembersResponse;
                toJSON(message: _85.QueryGroupMembersResponse): unknown;
                fromPartial(object: Partial<_85.QueryGroupMembersResponse>): _85.QueryGroupMembersResponse;
                fromAmino(object: _85.QueryGroupMembersResponseAmino): _85.QueryGroupMembersResponse;
                toAmino(message: _85.QueryGroupMembersResponse): _85.QueryGroupMembersResponseAmino;
                fromAminoMsg(object: _85.QueryGroupMembersResponseAminoMsg): _85.QueryGroupMembersResponse;
                toAminoMsg(message: _85.QueryGroupMembersResponse): _85.QueryGroupMembersResponseAminoMsg;
                fromProtoMsg(message: _85.QueryGroupMembersResponseProtoMsg): _85.QueryGroupMembersResponse;
                toProto(message: _85.QueryGroupMembersResponse): Uint8Array;
                toProtoMsg(message: _85.QueryGroupMembersResponse): _85.QueryGroupMembersResponseProtoMsg;
            };
            QueryGroupsByAdminRequest: {
                typeUrl: string;
                encode(message: _85.QueryGroupsByAdminRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _85.QueryGroupsByAdminRequest;
                fromJSON(object: any): _85.QueryGroupsByAdminRequest;
                toJSON(message: _85.QueryGroupsByAdminRequest): unknown;
                fromPartial(object: Partial<_85.QueryGroupsByAdminRequest>): _85.QueryGroupsByAdminRequest;
                fromAmino(object: _85.QueryGroupsByAdminRequestAmino): _85.QueryGroupsByAdminRequest;
                toAmino(message: _85.QueryGroupsByAdminRequest): _85.QueryGroupsByAdminRequestAmino;
                fromAminoMsg(object: _85.QueryGroupsByAdminRequestAminoMsg): _85.QueryGroupsByAdminRequest;
                toAminoMsg(message: _85.QueryGroupsByAdminRequest): _85.QueryGroupsByAdminRequestAminoMsg;
                fromProtoMsg(message: _85.QueryGroupsByAdminRequestProtoMsg): _85.QueryGroupsByAdminRequest;
                toProto(message: _85.QueryGroupsByAdminRequest): Uint8Array;
                toProtoMsg(message: _85.QueryGroupsByAdminRequest): _85.QueryGroupsByAdminRequestProtoMsg;
            };
            QueryGroupsByAdminResponse: {
                typeUrl: string;
                encode(message: _85.QueryGroupsByAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _85.QueryGroupsByAdminResponse;
                fromJSON(object: any): _85.QueryGroupsByAdminResponse;
                toJSON(message: _85.QueryGroupsByAdminResponse): unknown;
                fromPartial(object: Partial<_85.QueryGroupsByAdminResponse>): _85.QueryGroupsByAdminResponse;
                fromAmino(object: _85.QueryGroupsByAdminResponseAmino): _85.QueryGroupsByAdminResponse;
                toAmino(message: _85.QueryGroupsByAdminResponse): _85.QueryGroupsByAdminResponseAmino;
                fromAminoMsg(object: _85.QueryGroupsByAdminResponseAminoMsg): _85.QueryGroupsByAdminResponse;
                toAminoMsg(message: _85.QueryGroupsByAdminResponse): _85.QueryGroupsByAdminResponseAminoMsg;
                fromProtoMsg(message: _85.QueryGroupsByAdminResponseProtoMsg): _85.QueryGroupsByAdminResponse;
                toProto(message: _85.QueryGroupsByAdminResponse): Uint8Array;
                toProtoMsg(message: _85.QueryGroupsByAdminResponse): _85.QueryGroupsByAdminResponseProtoMsg;
            };
            QueryGroupPoliciesByGroupRequest: {
                typeUrl: string;
                encode(message: _85.QueryGroupPoliciesByGroupRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _85.QueryGroupPoliciesByGroupRequest;
                fromJSON(object: any): _85.QueryGroupPoliciesByGroupRequest;
                toJSON(message: _85.QueryGroupPoliciesByGroupRequest): unknown;
                fromPartial(object: Partial<_85.QueryGroupPoliciesByGroupRequest>): _85.QueryGroupPoliciesByGroupRequest;
                fromAmino(object: _85.QueryGroupPoliciesByGroupRequestAmino): _85.QueryGroupPoliciesByGroupRequest;
                toAmino(message: _85.QueryGroupPoliciesByGroupRequest): _85.QueryGroupPoliciesByGroupRequestAmino;
                fromAminoMsg(object: _85.QueryGroupPoliciesByGroupRequestAminoMsg): _85.QueryGroupPoliciesByGroupRequest;
                toAminoMsg(message: _85.QueryGroupPoliciesByGroupRequest): _85.QueryGroupPoliciesByGroupRequestAminoMsg;
                fromProtoMsg(message: _85.QueryGroupPoliciesByGroupRequestProtoMsg): _85.QueryGroupPoliciesByGroupRequest;
                toProto(message: _85.QueryGroupPoliciesByGroupRequest): Uint8Array;
                toProtoMsg(message: _85.QueryGroupPoliciesByGroupRequest): _85.QueryGroupPoliciesByGroupRequestProtoMsg;
            };
            QueryGroupPoliciesByGroupResponse: {
                typeUrl: string;
                encode(message: _85.QueryGroupPoliciesByGroupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _85.QueryGroupPoliciesByGroupResponse;
                fromJSON(object: any): _85.QueryGroupPoliciesByGroupResponse;
                toJSON(message: _85.QueryGroupPoliciesByGroupResponse): unknown;
                fromPartial(object: Partial<_85.QueryGroupPoliciesByGroupResponse>): _85.QueryGroupPoliciesByGroupResponse;
                fromAmino(object: _85.QueryGroupPoliciesByGroupResponseAmino): _85.QueryGroupPoliciesByGroupResponse;
                toAmino(message: _85.QueryGroupPoliciesByGroupResponse): _85.QueryGroupPoliciesByGroupResponseAmino;
                fromAminoMsg(object: _85.QueryGroupPoliciesByGroupResponseAminoMsg): _85.QueryGroupPoliciesByGroupResponse;
                toAminoMsg(message: _85.QueryGroupPoliciesByGroupResponse): _85.QueryGroupPoliciesByGroupResponseAminoMsg;
                fromProtoMsg(message: _85.QueryGroupPoliciesByGroupResponseProtoMsg): _85.QueryGroupPoliciesByGroupResponse;
                toProto(message: _85.QueryGroupPoliciesByGroupResponse): Uint8Array;
                toProtoMsg(message: _85.QueryGroupPoliciesByGroupResponse): _85.QueryGroupPoliciesByGroupResponseProtoMsg;
            };
            QueryGroupPoliciesByAdminRequest: {
                typeUrl: string;
                encode(message: _85.QueryGroupPoliciesByAdminRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _85.QueryGroupPoliciesByAdminRequest;
                fromJSON(object: any): _85.QueryGroupPoliciesByAdminRequest;
                toJSON(message: _85.QueryGroupPoliciesByAdminRequest): unknown;
                fromPartial(object: Partial<_85.QueryGroupPoliciesByAdminRequest>): _85.QueryGroupPoliciesByAdminRequest;
                fromAmino(object: _85.QueryGroupPoliciesByAdminRequestAmino): _85.QueryGroupPoliciesByAdminRequest;
                toAmino(message: _85.QueryGroupPoliciesByAdminRequest): _85.QueryGroupPoliciesByAdminRequestAmino;
                fromAminoMsg(object: _85.QueryGroupPoliciesByAdminRequestAminoMsg): _85.QueryGroupPoliciesByAdminRequest;
                toAminoMsg(message: _85.QueryGroupPoliciesByAdminRequest): _85.QueryGroupPoliciesByAdminRequestAminoMsg;
                fromProtoMsg(message: _85.QueryGroupPoliciesByAdminRequestProtoMsg): _85.QueryGroupPoliciesByAdminRequest;
                toProto(message: _85.QueryGroupPoliciesByAdminRequest): Uint8Array;
                toProtoMsg(message: _85.QueryGroupPoliciesByAdminRequest): _85.QueryGroupPoliciesByAdminRequestProtoMsg;
            };
            QueryGroupPoliciesByAdminResponse: {
                typeUrl: string;
                encode(message: _85.QueryGroupPoliciesByAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _85.QueryGroupPoliciesByAdminResponse;
                fromJSON(object: any): _85.QueryGroupPoliciesByAdminResponse;
                toJSON(message: _85.QueryGroupPoliciesByAdminResponse): unknown;
                fromPartial(object: Partial<_85.QueryGroupPoliciesByAdminResponse>): _85.QueryGroupPoliciesByAdminResponse;
                fromAmino(object: _85.QueryGroupPoliciesByAdminResponseAmino): _85.QueryGroupPoliciesByAdminResponse;
                toAmino(message: _85.QueryGroupPoliciesByAdminResponse): _85.QueryGroupPoliciesByAdminResponseAmino;
                fromAminoMsg(object: _85.QueryGroupPoliciesByAdminResponseAminoMsg): _85.QueryGroupPoliciesByAdminResponse;
                toAminoMsg(message: _85.QueryGroupPoliciesByAdminResponse): _85.QueryGroupPoliciesByAdminResponseAminoMsg;
                fromProtoMsg(message: _85.QueryGroupPoliciesByAdminResponseProtoMsg): _85.QueryGroupPoliciesByAdminResponse;
                toProto(message: _85.QueryGroupPoliciesByAdminResponse): Uint8Array;
                toProtoMsg(message: _85.QueryGroupPoliciesByAdminResponse): _85.QueryGroupPoliciesByAdminResponseProtoMsg;
            };
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _85.QueryProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _85.QueryProposalRequest;
                fromJSON(object: any): _85.QueryProposalRequest;
                toJSON(message: _85.QueryProposalRequest): unknown;
                fromPartial(object: Partial<_85.QueryProposalRequest>): _85.QueryProposalRequest;
                fromAmino(object: _85.QueryProposalRequestAmino): _85.QueryProposalRequest;
                toAmino(message: _85.QueryProposalRequest): _85.QueryProposalRequestAmino;
                fromAminoMsg(object: _85.QueryProposalRequestAminoMsg): _85.QueryProposalRequest;
                toAminoMsg(message: _85.QueryProposalRequest): _85.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _85.QueryProposalRequestProtoMsg): _85.QueryProposalRequest;
                toProto(message: _85.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _85.QueryProposalRequest): _85.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _85.QueryProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _85.QueryProposalResponse;
                fromJSON(object: any): _85.QueryProposalResponse;
                toJSON(message: _85.QueryProposalResponse): unknown;
                fromPartial(object: Partial<_85.QueryProposalResponse>): _85.QueryProposalResponse;
                fromAmino(object: _85.QueryProposalResponseAmino): _85.QueryProposalResponse;
                toAmino(message: _85.QueryProposalResponse): _85.QueryProposalResponseAmino;
                fromAminoMsg(object: _85.QueryProposalResponseAminoMsg): _85.QueryProposalResponse;
                toAminoMsg(message: _85.QueryProposalResponse): _85.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _85.QueryProposalResponseProtoMsg): _85.QueryProposalResponse;
                toProto(message: _85.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _85.QueryProposalResponse): _85.QueryProposalResponseProtoMsg;
            };
            QueryProposalsByGroupPolicyRequest: {
                typeUrl: string;
                encode(message: _85.QueryProposalsByGroupPolicyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _85.QueryProposalsByGroupPolicyRequest;
                fromJSON(object: any): _85.QueryProposalsByGroupPolicyRequest;
                toJSON(message: _85.QueryProposalsByGroupPolicyRequest): unknown;
                fromPartial(object: Partial<_85.QueryProposalsByGroupPolicyRequest>): _85.QueryProposalsByGroupPolicyRequest;
                fromAmino(object: _85.QueryProposalsByGroupPolicyRequestAmino): _85.QueryProposalsByGroupPolicyRequest;
                toAmino(message: _85.QueryProposalsByGroupPolicyRequest): _85.QueryProposalsByGroupPolicyRequestAmino;
                fromAminoMsg(object: _85.QueryProposalsByGroupPolicyRequestAminoMsg): _85.QueryProposalsByGroupPolicyRequest;
                toAminoMsg(message: _85.QueryProposalsByGroupPolicyRequest): _85.QueryProposalsByGroupPolicyRequestAminoMsg;
                fromProtoMsg(message: _85.QueryProposalsByGroupPolicyRequestProtoMsg): _85.QueryProposalsByGroupPolicyRequest;
                toProto(message: _85.QueryProposalsByGroupPolicyRequest): Uint8Array;
                toProtoMsg(message: _85.QueryProposalsByGroupPolicyRequest): _85.QueryProposalsByGroupPolicyRequestProtoMsg;
            };
            QueryProposalsByGroupPolicyResponse: {
                typeUrl: string;
                encode(message: _85.QueryProposalsByGroupPolicyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _85.QueryProposalsByGroupPolicyResponse;
                fromJSON(object: any): _85.QueryProposalsByGroupPolicyResponse;
                toJSON(message: _85.QueryProposalsByGroupPolicyResponse): unknown;
                fromPartial(object: Partial<_85.QueryProposalsByGroupPolicyResponse>): _85.QueryProposalsByGroupPolicyResponse;
                fromAmino(object: _85.QueryProposalsByGroupPolicyResponseAmino): _85.QueryProposalsByGroupPolicyResponse;
                toAmino(message: _85.QueryProposalsByGroupPolicyResponse): _85.QueryProposalsByGroupPolicyResponseAmino;
                fromAminoMsg(object: _85.QueryProposalsByGroupPolicyResponseAminoMsg): _85.QueryProposalsByGroupPolicyResponse;
                toAminoMsg(message: _85.QueryProposalsByGroupPolicyResponse): _85.QueryProposalsByGroupPolicyResponseAminoMsg;
                fromProtoMsg(message: _85.QueryProposalsByGroupPolicyResponseProtoMsg): _85.QueryProposalsByGroupPolicyResponse;
                toProto(message: _85.QueryProposalsByGroupPolicyResponse): Uint8Array;
                toProtoMsg(message: _85.QueryProposalsByGroupPolicyResponse): _85.QueryProposalsByGroupPolicyResponseProtoMsg;
            };
            QueryVoteByProposalVoterRequest: {
                typeUrl: string;
                encode(message: _85.QueryVoteByProposalVoterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _85.QueryVoteByProposalVoterRequest;
                fromJSON(object: any): _85.QueryVoteByProposalVoterRequest;
                toJSON(message: _85.QueryVoteByProposalVoterRequest): unknown;
                fromPartial(object: Partial<_85.QueryVoteByProposalVoterRequest>): _85.QueryVoteByProposalVoterRequest;
                fromAmino(object: _85.QueryVoteByProposalVoterRequestAmino): _85.QueryVoteByProposalVoterRequest;
                toAmino(message: _85.QueryVoteByProposalVoterRequest): _85.QueryVoteByProposalVoterRequestAmino;
                fromAminoMsg(object: _85.QueryVoteByProposalVoterRequestAminoMsg): _85.QueryVoteByProposalVoterRequest;
                toAminoMsg(message: _85.QueryVoteByProposalVoterRequest): _85.QueryVoteByProposalVoterRequestAminoMsg;
                fromProtoMsg(message: _85.QueryVoteByProposalVoterRequestProtoMsg): _85.QueryVoteByProposalVoterRequest;
                toProto(message: _85.QueryVoteByProposalVoterRequest): Uint8Array;
                toProtoMsg(message: _85.QueryVoteByProposalVoterRequest): _85.QueryVoteByProposalVoterRequestProtoMsg;
            };
            QueryVoteByProposalVoterResponse: {
                typeUrl: string;
                encode(message: _85.QueryVoteByProposalVoterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _85.QueryVoteByProposalVoterResponse;
                fromJSON(object: any): _85.QueryVoteByProposalVoterResponse;
                toJSON(message: _85.QueryVoteByProposalVoterResponse): unknown;
                fromPartial(object: Partial<_85.QueryVoteByProposalVoterResponse>): _85.QueryVoteByProposalVoterResponse;
                fromAmino(object: _85.QueryVoteByProposalVoterResponseAmino): _85.QueryVoteByProposalVoterResponse;
                toAmino(message: _85.QueryVoteByProposalVoterResponse): _85.QueryVoteByProposalVoterResponseAmino;
                fromAminoMsg(object: _85.QueryVoteByProposalVoterResponseAminoMsg): _85.QueryVoteByProposalVoterResponse;
                toAminoMsg(message: _85.QueryVoteByProposalVoterResponse): _85.QueryVoteByProposalVoterResponseAminoMsg;
                fromProtoMsg(message: _85.QueryVoteByProposalVoterResponseProtoMsg): _85.QueryVoteByProposalVoterResponse;
                toProto(message: _85.QueryVoteByProposalVoterResponse): Uint8Array;
                toProtoMsg(message: _85.QueryVoteByProposalVoterResponse): _85.QueryVoteByProposalVoterResponseProtoMsg;
            };
            QueryVotesByProposalRequest: {
                typeUrl: string;
                encode(message: _85.QueryVotesByProposalRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _85.QueryVotesByProposalRequest;
                fromJSON(object: any): _85.QueryVotesByProposalRequest;
                toJSON(message: _85.QueryVotesByProposalRequest): unknown;
                fromPartial(object: Partial<_85.QueryVotesByProposalRequest>): _85.QueryVotesByProposalRequest;
                fromAmino(object: _85.QueryVotesByProposalRequestAmino): _85.QueryVotesByProposalRequest;
                toAmino(message: _85.QueryVotesByProposalRequest): _85.QueryVotesByProposalRequestAmino;
                fromAminoMsg(object: _85.QueryVotesByProposalRequestAminoMsg): _85.QueryVotesByProposalRequest;
                toAminoMsg(message: _85.QueryVotesByProposalRequest): _85.QueryVotesByProposalRequestAminoMsg;
                fromProtoMsg(message: _85.QueryVotesByProposalRequestProtoMsg): _85.QueryVotesByProposalRequest;
                toProto(message: _85.QueryVotesByProposalRequest): Uint8Array;
                toProtoMsg(message: _85.QueryVotesByProposalRequest): _85.QueryVotesByProposalRequestProtoMsg;
            };
            QueryVotesByProposalResponse: {
                typeUrl: string;
                encode(message: _85.QueryVotesByProposalResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _85.QueryVotesByProposalResponse;
                fromJSON(object: any): _85.QueryVotesByProposalResponse;
                toJSON(message: _85.QueryVotesByProposalResponse): unknown;
                fromPartial(object: Partial<_85.QueryVotesByProposalResponse>): _85.QueryVotesByProposalResponse;
                fromAmino(object: _85.QueryVotesByProposalResponseAmino): _85.QueryVotesByProposalResponse;
                toAmino(message: _85.QueryVotesByProposalResponse): _85.QueryVotesByProposalResponseAmino;
                fromAminoMsg(object: _85.QueryVotesByProposalResponseAminoMsg): _85.QueryVotesByProposalResponse;
                toAminoMsg(message: _85.QueryVotesByProposalResponse): _85.QueryVotesByProposalResponseAminoMsg;
                fromProtoMsg(message: _85.QueryVotesByProposalResponseProtoMsg): _85.QueryVotesByProposalResponse;
                toProto(message: _85.QueryVotesByProposalResponse): Uint8Array;
                toProtoMsg(message: _85.QueryVotesByProposalResponse): _85.QueryVotesByProposalResponseProtoMsg;
            };
            QueryVotesByVoterRequest: {
                typeUrl: string;
                encode(message: _85.QueryVotesByVoterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _85.QueryVotesByVoterRequest;
                fromJSON(object: any): _85.QueryVotesByVoterRequest;
                toJSON(message: _85.QueryVotesByVoterRequest): unknown;
                fromPartial(object: Partial<_85.QueryVotesByVoterRequest>): _85.QueryVotesByVoterRequest;
                fromAmino(object: _85.QueryVotesByVoterRequestAmino): _85.QueryVotesByVoterRequest;
                toAmino(message: _85.QueryVotesByVoterRequest): _85.QueryVotesByVoterRequestAmino;
                fromAminoMsg(object: _85.QueryVotesByVoterRequestAminoMsg): _85.QueryVotesByVoterRequest;
                toAminoMsg(message: _85.QueryVotesByVoterRequest): _85.QueryVotesByVoterRequestAminoMsg;
                fromProtoMsg(message: _85.QueryVotesByVoterRequestProtoMsg): _85.QueryVotesByVoterRequest;
                toProto(message: _85.QueryVotesByVoterRequest): Uint8Array;
                toProtoMsg(message: _85.QueryVotesByVoterRequest): _85.QueryVotesByVoterRequestProtoMsg;
            };
            QueryVotesByVoterResponse: {
                typeUrl: string;
                encode(message: _85.QueryVotesByVoterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _85.QueryVotesByVoterResponse;
                fromJSON(object: any): _85.QueryVotesByVoterResponse;
                toJSON(message: _85.QueryVotesByVoterResponse): unknown;
                fromPartial(object: Partial<_85.QueryVotesByVoterResponse>): _85.QueryVotesByVoterResponse;
                fromAmino(object: _85.QueryVotesByVoterResponseAmino): _85.QueryVotesByVoterResponse;
                toAmino(message: _85.QueryVotesByVoterResponse): _85.QueryVotesByVoterResponseAmino;
                fromAminoMsg(object: _85.QueryVotesByVoterResponseAminoMsg): _85.QueryVotesByVoterResponse;
                toAminoMsg(message: _85.QueryVotesByVoterResponse): _85.QueryVotesByVoterResponseAminoMsg;
                fromProtoMsg(message: _85.QueryVotesByVoterResponseProtoMsg): _85.QueryVotesByVoterResponse;
                toProto(message: _85.QueryVotesByVoterResponse): Uint8Array;
                toProtoMsg(message: _85.QueryVotesByVoterResponse): _85.QueryVotesByVoterResponseProtoMsg;
            };
            QueryGroupsByMemberRequest: {
                typeUrl: string;
                encode(message: _85.QueryGroupsByMemberRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _85.QueryGroupsByMemberRequest;
                fromJSON(object: any): _85.QueryGroupsByMemberRequest;
                toJSON(message: _85.QueryGroupsByMemberRequest): unknown;
                fromPartial(object: Partial<_85.QueryGroupsByMemberRequest>): _85.QueryGroupsByMemberRequest;
                fromAmino(object: _85.QueryGroupsByMemberRequestAmino): _85.QueryGroupsByMemberRequest;
                toAmino(message: _85.QueryGroupsByMemberRequest): _85.QueryGroupsByMemberRequestAmino;
                fromAminoMsg(object: _85.QueryGroupsByMemberRequestAminoMsg): _85.QueryGroupsByMemberRequest;
                toAminoMsg(message: _85.QueryGroupsByMemberRequest): _85.QueryGroupsByMemberRequestAminoMsg;
                fromProtoMsg(message: _85.QueryGroupsByMemberRequestProtoMsg): _85.QueryGroupsByMemberRequest;
                toProto(message: _85.QueryGroupsByMemberRequest): Uint8Array;
                toProtoMsg(message: _85.QueryGroupsByMemberRequest): _85.QueryGroupsByMemberRequestProtoMsg;
            };
            QueryGroupsByMemberResponse: {
                typeUrl: string;
                encode(message: _85.QueryGroupsByMemberResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _85.QueryGroupsByMemberResponse;
                fromJSON(object: any): _85.QueryGroupsByMemberResponse;
                toJSON(message: _85.QueryGroupsByMemberResponse): unknown;
                fromPartial(object: Partial<_85.QueryGroupsByMemberResponse>): _85.QueryGroupsByMemberResponse;
                fromAmino(object: _85.QueryGroupsByMemberResponseAmino): _85.QueryGroupsByMemberResponse;
                toAmino(message: _85.QueryGroupsByMemberResponse): _85.QueryGroupsByMemberResponseAmino;
                fromAminoMsg(object: _85.QueryGroupsByMemberResponseAminoMsg): _85.QueryGroupsByMemberResponse;
                toAminoMsg(message: _85.QueryGroupsByMemberResponse): _85.QueryGroupsByMemberResponseAminoMsg;
                fromProtoMsg(message: _85.QueryGroupsByMemberResponseProtoMsg): _85.QueryGroupsByMemberResponse;
                toProto(message: _85.QueryGroupsByMemberResponse): Uint8Array;
                toProtoMsg(message: _85.QueryGroupsByMemberResponse): _85.QueryGroupsByMemberResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _85.QueryTallyResultRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _85.QueryTallyResultRequest;
                fromJSON(object: any): _85.QueryTallyResultRequest;
                toJSON(message: _85.QueryTallyResultRequest): unknown;
                fromPartial(object: Partial<_85.QueryTallyResultRequest>): _85.QueryTallyResultRequest;
                fromAmino(object: _85.QueryTallyResultRequestAmino): _85.QueryTallyResultRequest;
                toAmino(message: _85.QueryTallyResultRequest): _85.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _85.QueryTallyResultRequestAminoMsg): _85.QueryTallyResultRequest;
                toAminoMsg(message: _85.QueryTallyResultRequest): _85.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _85.QueryTallyResultRequestProtoMsg): _85.QueryTallyResultRequest;
                toProto(message: _85.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _85.QueryTallyResultRequest): _85.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _85.QueryTallyResultResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _85.QueryTallyResultResponse;
                fromJSON(object: any): _85.QueryTallyResultResponse;
                toJSON(message: _85.QueryTallyResultResponse): unknown;
                fromPartial(object: Partial<_85.QueryTallyResultResponse>): _85.QueryTallyResultResponse;
                fromAmino(object: _85.QueryTallyResultResponseAmino): _85.QueryTallyResultResponse;
                toAmino(message: _85.QueryTallyResultResponse): _85.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _85.QueryTallyResultResponseAminoMsg): _85.QueryTallyResultResponse;
                toAminoMsg(message: _85.QueryTallyResultResponse): _85.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _85.QueryTallyResultResponseProtoMsg): _85.QueryTallyResultResponse;
                toProto(message: _85.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _85.QueryTallyResultResponse): _85.QueryTallyResultResponseProtoMsg;
            };
            QueryGroupsRequest: {
                typeUrl: string;
                encode(message: _85.QueryGroupsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _85.QueryGroupsRequest;
                fromJSON(object: any): _85.QueryGroupsRequest;
                toJSON(message: _85.QueryGroupsRequest): unknown;
                fromPartial(object: Partial<_85.QueryGroupsRequest>): _85.QueryGroupsRequest;
                fromAmino(object: _85.QueryGroupsRequestAmino): _85.QueryGroupsRequest;
                toAmino(message: _85.QueryGroupsRequest): _85.QueryGroupsRequestAmino;
                fromAminoMsg(object: _85.QueryGroupsRequestAminoMsg): _85.QueryGroupsRequest;
                toAminoMsg(message: _85.QueryGroupsRequest): _85.QueryGroupsRequestAminoMsg;
                fromProtoMsg(message: _85.QueryGroupsRequestProtoMsg): _85.QueryGroupsRequest;
                toProto(message: _85.QueryGroupsRequest): Uint8Array;
                toProtoMsg(message: _85.QueryGroupsRequest): _85.QueryGroupsRequestProtoMsg;
            };
            QueryGroupsResponse: {
                typeUrl: string;
                encode(message: _85.QueryGroupsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _85.QueryGroupsResponse;
                fromJSON(object: any): _85.QueryGroupsResponse;
                toJSON(message: _85.QueryGroupsResponse): unknown;
                fromPartial(object: Partial<_85.QueryGroupsResponse>): _85.QueryGroupsResponse;
                fromAmino(object: _85.QueryGroupsResponseAmino): _85.QueryGroupsResponse;
                toAmino(message: _85.QueryGroupsResponse): _85.QueryGroupsResponseAmino;
                fromAminoMsg(object: _85.QueryGroupsResponseAminoMsg): _85.QueryGroupsResponse;
                toAminoMsg(message: _85.QueryGroupsResponse): _85.QueryGroupsResponseAminoMsg;
                fromProtoMsg(message: _85.QueryGroupsResponseProtoMsg): _85.QueryGroupsResponse;
                toProto(message: _85.QueryGroupsResponse): Uint8Array;
                toProtoMsg(message: _85.QueryGroupsResponse): _85.QueryGroupsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _84.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _84.GenesisState;
                fromJSON(object: any): _84.GenesisState;
                toJSON(message: _84.GenesisState): unknown;
                fromPartial(object: Partial<_84.GenesisState>): _84.GenesisState;
                fromAmino(object: _84.GenesisStateAmino): _84.GenesisState;
                toAmino(message: _84.GenesisState): _84.GenesisStateAmino;
                fromAminoMsg(object: _84.GenesisStateAminoMsg): _84.GenesisState;
                toAminoMsg(message: _84.GenesisState): _84.GenesisStateAminoMsg;
                fromProtoMsg(message: _84.GenesisStateProtoMsg): _84.GenesisState;
                toProto(message: _84.GenesisState): Uint8Array;
                toProtoMsg(message: _84.GenesisState): _84.GenesisStateProtoMsg;
            };
            EventCreateGroup: {
                typeUrl: string;
                encode(message: _83.EventCreateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _83.EventCreateGroup;
                fromJSON(object: any): _83.EventCreateGroup;
                toJSON(message: _83.EventCreateGroup): unknown;
                fromPartial(object: Partial<_83.EventCreateGroup>): _83.EventCreateGroup;
                fromAmino(object: _83.EventCreateGroupAmino): _83.EventCreateGroup;
                toAmino(message: _83.EventCreateGroup): _83.EventCreateGroupAmino;
                fromAminoMsg(object: _83.EventCreateGroupAminoMsg): _83.EventCreateGroup;
                toAminoMsg(message: _83.EventCreateGroup): _83.EventCreateGroupAminoMsg;
                fromProtoMsg(message: _83.EventCreateGroupProtoMsg): _83.EventCreateGroup;
                toProto(message: _83.EventCreateGroup): Uint8Array;
                toProtoMsg(message: _83.EventCreateGroup): _83.EventCreateGroupProtoMsg;
            };
            EventUpdateGroup: {
                typeUrl: string;
                encode(message: _83.EventUpdateGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _83.EventUpdateGroup;
                fromJSON(object: any): _83.EventUpdateGroup;
                toJSON(message: _83.EventUpdateGroup): unknown;
                fromPartial(object: Partial<_83.EventUpdateGroup>): _83.EventUpdateGroup;
                fromAmino(object: _83.EventUpdateGroupAmino): _83.EventUpdateGroup;
                toAmino(message: _83.EventUpdateGroup): _83.EventUpdateGroupAmino;
                fromAminoMsg(object: _83.EventUpdateGroupAminoMsg): _83.EventUpdateGroup;
                toAminoMsg(message: _83.EventUpdateGroup): _83.EventUpdateGroupAminoMsg;
                fromProtoMsg(message: _83.EventUpdateGroupProtoMsg): _83.EventUpdateGroup;
                toProto(message: _83.EventUpdateGroup): Uint8Array;
                toProtoMsg(message: _83.EventUpdateGroup): _83.EventUpdateGroupProtoMsg;
            };
            EventCreateGroupPolicy: {
                typeUrl: string;
                encode(message: _83.EventCreateGroupPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _83.EventCreateGroupPolicy;
                fromJSON(object: any): _83.EventCreateGroupPolicy;
                toJSON(message: _83.EventCreateGroupPolicy): unknown;
                fromPartial(object: Partial<_83.EventCreateGroupPolicy>): _83.EventCreateGroupPolicy;
                fromAmino(object: _83.EventCreateGroupPolicyAmino): _83.EventCreateGroupPolicy;
                toAmino(message: _83.EventCreateGroupPolicy): _83.EventCreateGroupPolicyAmino;
                fromAminoMsg(object: _83.EventCreateGroupPolicyAminoMsg): _83.EventCreateGroupPolicy;
                toAminoMsg(message: _83.EventCreateGroupPolicy): _83.EventCreateGroupPolicyAminoMsg;
                fromProtoMsg(message: _83.EventCreateGroupPolicyProtoMsg): _83.EventCreateGroupPolicy;
                toProto(message: _83.EventCreateGroupPolicy): Uint8Array;
                toProtoMsg(message: _83.EventCreateGroupPolicy): _83.EventCreateGroupPolicyProtoMsg;
            };
            EventUpdateGroupPolicy: {
                typeUrl: string;
                encode(message: _83.EventUpdateGroupPolicy, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _83.EventUpdateGroupPolicy;
                fromJSON(object: any): _83.EventUpdateGroupPolicy;
                toJSON(message: _83.EventUpdateGroupPolicy): unknown;
                fromPartial(object: Partial<_83.EventUpdateGroupPolicy>): _83.EventUpdateGroupPolicy;
                fromAmino(object: _83.EventUpdateGroupPolicyAmino): _83.EventUpdateGroupPolicy;
                toAmino(message: _83.EventUpdateGroupPolicy): _83.EventUpdateGroupPolicyAmino;
                fromAminoMsg(object: _83.EventUpdateGroupPolicyAminoMsg): _83.EventUpdateGroupPolicy;
                toAminoMsg(message: _83.EventUpdateGroupPolicy): _83.EventUpdateGroupPolicyAminoMsg;
                fromProtoMsg(message: _83.EventUpdateGroupPolicyProtoMsg): _83.EventUpdateGroupPolicy;
                toProto(message: _83.EventUpdateGroupPolicy): Uint8Array;
                toProtoMsg(message: _83.EventUpdateGroupPolicy): _83.EventUpdateGroupPolicyProtoMsg;
            };
            EventSubmitProposal: {
                typeUrl: string;
                encode(message: _83.EventSubmitProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _83.EventSubmitProposal;
                fromJSON(object: any): _83.EventSubmitProposal;
                toJSON(message: _83.EventSubmitProposal): unknown;
                fromPartial(object: Partial<_83.EventSubmitProposal>): _83.EventSubmitProposal;
                fromAmino(object: _83.EventSubmitProposalAmino): _83.EventSubmitProposal;
                toAmino(message: _83.EventSubmitProposal): _83.EventSubmitProposalAmino;
                fromAminoMsg(object: _83.EventSubmitProposalAminoMsg): _83.EventSubmitProposal;
                toAminoMsg(message: _83.EventSubmitProposal): _83.EventSubmitProposalAminoMsg;
                fromProtoMsg(message: _83.EventSubmitProposalProtoMsg): _83.EventSubmitProposal;
                toProto(message: _83.EventSubmitProposal): Uint8Array;
                toProtoMsg(message: _83.EventSubmitProposal): _83.EventSubmitProposalProtoMsg;
            };
            EventWithdrawProposal: {
                typeUrl: string;
                encode(message: _83.EventWithdrawProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _83.EventWithdrawProposal;
                fromJSON(object: any): _83.EventWithdrawProposal;
                toJSON(message: _83.EventWithdrawProposal): unknown;
                fromPartial(object: Partial<_83.EventWithdrawProposal>): _83.EventWithdrawProposal;
                fromAmino(object: _83.EventWithdrawProposalAmino): _83.EventWithdrawProposal;
                toAmino(message: _83.EventWithdrawProposal): _83.EventWithdrawProposalAmino;
                fromAminoMsg(object: _83.EventWithdrawProposalAminoMsg): _83.EventWithdrawProposal;
                toAminoMsg(message: _83.EventWithdrawProposal): _83.EventWithdrawProposalAminoMsg;
                fromProtoMsg(message: _83.EventWithdrawProposalProtoMsg): _83.EventWithdrawProposal;
                toProto(message: _83.EventWithdrawProposal): Uint8Array;
                toProtoMsg(message: _83.EventWithdrawProposal): _83.EventWithdrawProposalProtoMsg;
            };
            EventVote: {
                typeUrl: string;
                encode(message: _83.EventVote, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _83.EventVote;
                fromJSON(object: any): _83.EventVote;
                toJSON(message: _83.EventVote): unknown;
                fromPartial(object: Partial<_83.EventVote>): _83.EventVote;
                fromAmino(object: _83.EventVoteAmino): _83.EventVote;
                toAmino(message: _83.EventVote): _83.EventVoteAmino;
                fromAminoMsg(object: _83.EventVoteAminoMsg): _83.EventVote;
                toAminoMsg(message: _83.EventVote): _83.EventVoteAminoMsg;
                fromProtoMsg(message: _83.EventVoteProtoMsg): _83.EventVote;
                toProto(message: _83.EventVote): Uint8Array;
                toProtoMsg(message: _83.EventVote): _83.EventVoteProtoMsg;
            };
            EventExec: {
                typeUrl: string;
                encode(message: _83.EventExec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _83.EventExec;
                fromJSON(object: any): _83.EventExec;
                toJSON(message: _83.EventExec): unknown;
                fromPartial(object: Partial<_83.EventExec>): _83.EventExec;
                fromAmino(object: _83.EventExecAmino): _83.EventExec;
                toAmino(message: _83.EventExec): _83.EventExecAmino;
                fromAminoMsg(object: _83.EventExecAminoMsg): _83.EventExec;
                toAminoMsg(message: _83.EventExec): _83.EventExecAminoMsg;
                fromProtoMsg(message: _83.EventExecProtoMsg): _83.EventExec;
                toProto(message: _83.EventExec): Uint8Array;
                toProtoMsg(message: _83.EventExec): _83.EventExecProtoMsg;
            };
            EventLeaveGroup: {
                typeUrl: string;
                encode(message: _83.EventLeaveGroup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _83.EventLeaveGroup;
                fromJSON(object: any): _83.EventLeaveGroup;
                toJSON(message: _83.EventLeaveGroup): unknown;
                fromPartial(object: Partial<_83.EventLeaveGroup>): _83.EventLeaveGroup;
                fromAmino(object: _83.EventLeaveGroupAmino): _83.EventLeaveGroup;
                toAmino(message: _83.EventLeaveGroup): _83.EventLeaveGroupAmino;
                fromAminoMsg(object: _83.EventLeaveGroupAminoMsg): _83.EventLeaveGroup;
                toAminoMsg(message: _83.EventLeaveGroup): _83.EventLeaveGroupAminoMsg;
                fromProtoMsg(message: _83.EventLeaveGroupProtoMsg): _83.EventLeaveGroup;
                toProto(message: _83.EventLeaveGroup): Uint8Array;
                toProtoMsg(message: _83.EventLeaveGroup): _83.EventLeaveGroupProtoMsg;
            };
            EventProposalPruned: {
                typeUrl: string;
                encode(message: _83.EventProposalPruned, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _83.EventProposalPruned;
                fromJSON(object: any): _83.EventProposalPruned;
                toJSON(message: _83.EventProposalPruned): unknown;
                fromPartial(object: Partial<_83.EventProposalPruned>): _83.EventProposalPruned;
                fromAmino(object: _83.EventProposalPrunedAmino): _83.EventProposalPruned;
                toAmino(message: _83.EventProposalPruned): _83.EventProposalPrunedAmino;
                fromAminoMsg(object: _83.EventProposalPrunedAminoMsg): _83.EventProposalPruned;
                toAminoMsg(message: _83.EventProposalPruned): _83.EventProposalPrunedAminoMsg;
                fromProtoMsg(message: _83.EventProposalPrunedProtoMsg): _83.EventProposalPruned;
                toProto(message: _83.EventProposalPruned): Uint8Array;
                toProtoMsg(message: _83.EventProposalPruned): _83.EventProposalPrunedProtoMsg;
            };
        };
    }
    namespace ics23 {
        const v1: {
            hashOpFromJSON(object: any): _88.HashOp;
            hashOpToJSON(object: _88.HashOp): string;
            lengthOpFromJSON(object: any): _88.LengthOp;
            lengthOpToJSON(object: _88.LengthOp): string;
            protobufPackage: "cosmos.ics23.v1";
            HashOp: typeof _88.HashOp;
            HashOpSDKType: typeof _88.HashOp;
            HashOpAmino: typeof _88.HashOp;
            LengthOp: typeof _88.LengthOp;
            LengthOpSDKType: typeof _88.LengthOp;
            LengthOpAmino: typeof _88.LengthOp;
            ExistenceProof: {
                typeUrl: string;
                encode(message: _88.ExistenceProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _88.ExistenceProof;
                fromJSON(object: any): _88.ExistenceProof;
                toJSON(message: _88.ExistenceProof): unknown;
                fromPartial(object: Partial<_88.ExistenceProof>): _88.ExistenceProof;
                fromAmino(object: _88.ExistenceProofAmino): _88.ExistenceProof;
                toAmino(message: _88.ExistenceProof): _88.ExistenceProofAmino;
                fromAminoMsg(object: _88.ExistenceProofAminoMsg): _88.ExistenceProof;
                toAminoMsg(message: _88.ExistenceProof): _88.ExistenceProofAminoMsg;
                fromProtoMsg(message: _88.ExistenceProofProtoMsg): _88.ExistenceProof;
                toProto(message: _88.ExistenceProof): Uint8Array;
                toProtoMsg(message: _88.ExistenceProof): _88.ExistenceProofProtoMsg;
            };
            NonExistenceProof: {
                typeUrl: string;
                encode(message: _88.NonExistenceProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _88.NonExistenceProof;
                fromJSON(object: any): _88.NonExistenceProof;
                toJSON(message: _88.NonExistenceProof): unknown;
                fromPartial(object: Partial<_88.NonExistenceProof>): _88.NonExistenceProof;
                fromAmino(object: _88.NonExistenceProofAmino): _88.NonExistenceProof;
                toAmino(message: _88.NonExistenceProof): _88.NonExistenceProofAmino;
                fromAminoMsg(object: _88.NonExistenceProofAminoMsg): _88.NonExistenceProof;
                toAminoMsg(message: _88.NonExistenceProof): _88.NonExistenceProofAminoMsg;
                fromProtoMsg(message: _88.NonExistenceProofProtoMsg): _88.NonExistenceProof;
                toProto(message: _88.NonExistenceProof): Uint8Array;
                toProtoMsg(message: _88.NonExistenceProof): _88.NonExistenceProofProtoMsg;
            };
            CommitmentProof: {
                typeUrl: string;
                encode(message: _88.CommitmentProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _88.CommitmentProof;
                fromJSON(object: any): _88.CommitmentProof;
                toJSON(message: _88.CommitmentProof): unknown;
                fromPartial(object: Partial<_88.CommitmentProof>): _88.CommitmentProof;
                fromAmino(object: _88.CommitmentProofAmino): _88.CommitmentProof;
                toAmino(message: _88.CommitmentProof): _88.CommitmentProofAmino;
                fromAminoMsg(object: _88.CommitmentProofAminoMsg): _88.CommitmentProof;
                toAminoMsg(message: _88.CommitmentProof): _88.CommitmentProofAminoMsg;
                fromProtoMsg(message: _88.CommitmentProofProtoMsg): _88.CommitmentProof;
                toProto(message: _88.CommitmentProof): Uint8Array;
                toProtoMsg(message: _88.CommitmentProof): _88.CommitmentProofProtoMsg;
            };
            LeafOp: {
                typeUrl: string;
                encode(message: _88.LeafOp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _88.LeafOp;
                fromJSON(object: any): _88.LeafOp;
                toJSON(message: _88.LeafOp): unknown;
                fromPartial(object: Partial<_88.LeafOp>): _88.LeafOp;
                fromAmino(object: _88.LeafOpAmino): _88.LeafOp;
                toAmino(message: _88.LeafOp): _88.LeafOpAmino;
                fromAminoMsg(object: _88.LeafOpAminoMsg): _88.LeafOp;
                toAminoMsg(message: _88.LeafOp): _88.LeafOpAminoMsg;
                fromProtoMsg(message: _88.LeafOpProtoMsg): _88.LeafOp;
                toProto(message: _88.LeafOp): Uint8Array;
                toProtoMsg(message: _88.LeafOp): _88.LeafOpProtoMsg;
            };
            InnerOp: {
                typeUrl: string;
                encode(message: _88.InnerOp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _88.InnerOp;
                fromJSON(object: any): _88.InnerOp;
                toJSON(message: _88.InnerOp): unknown;
                fromPartial(object: Partial<_88.InnerOp>): _88.InnerOp;
                fromAmino(object: _88.InnerOpAmino): _88.InnerOp;
                toAmino(message: _88.InnerOp): _88.InnerOpAmino;
                fromAminoMsg(object: _88.InnerOpAminoMsg): _88.InnerOp;
                toAminoMsg(message: _88.InnerOp): _88.InnerOpAminoMsg;
                fromProtoMsg(message: _88.InnerOpProtoMsg): _88.InnerOp;
                toProto(message: _88.InnerOp): Uint8Array;
                toProtoMsg(message: _88.InnerOp): _88.InnerOpProtoMsg;
            };
            ProofSpec: {
                typeUrl: string;
                encode(message: _88.ProofSpec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _88.ProofSpec;
                fromJSON(object: any): _88.ProofSpec;
                toJSON(message: _88.ProofSpec): unknown;
                fromPartial(object: Partial<_88.ProofSpec>): _88.ProofSpec;
                fromAmino(object: _88.ProofSpecAmino): _88.ProofSpec;
                toAmino(message: _88.ProofSpec): _88.ProofSpecAmino;
                fromAminoMsg(object: _88.ProofSpecAminoMsg): _88.ProofSpec;
                toAminoMsg(message: _88.ProofSpec): _88.ProofSpecAminoMsg;
                fromProtoMsg(message: _88.ProofSpecProtoMsg): _88.ProofSpec;
                toProto(message: _88.ProofSpec): Uint8Array;
                toProtoMsg(message: _88.ProofSpec): _88.ProofSpecProtoMsg;
            };
            InnerSpec: {
                typeUrl: string;
                encode(message: _88.InnerSpec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _88.InnerSpec;
                fromJSON(object: any): _88.InnerSpec;
                toJSON(message: _88.InnerSpec): unknown;
                fromPartial(object: Partial<_88.InnerSpec>): _88.InnerSpec;
                fromAmino(object: _88.InnerSpecAmino): _88.InnerSpec;
                toAmino(message: _88.InnerSpec): _88.InnerSpecAmino;
                fromAminoMsg(object: _88.InnerSpecAminoMsg): _88.InnerSpec;
                toAminoMsg(message: _88.InnerSpec): _88.InnerSpecAminoMsg;
                fromProtoMsg(message: _88.InnerSpecProtoMsg): _88.InnerSpec;
                toProto(message: _88.InnerSpec): Uint8Array;
                toProtoMsg(message: _88.InnerSpec): _88.InnerSpecProtoMsg;
            };
            BatchProof: {
                typeUrl: string;
                encode(message: _88.BatchProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _88.BatchProof;
                fromJSON(object: any): _88.BatchProof;
                toJSON(message: _88.BatchProof): unknown;
                fromPartial(object: Partial<_88.BatchProof>): _88.BatchProof;
                fromAmino(object: _88.BatchProofAmino): _88.BatchProof;
                toAmino(message: _88.BatchProof): _88.BatchProofAmino;
                fromAminoMsg(object: _88.BatchProofAminoMsg): _88.BatchProof;
                toAminoMsg(message: _88.BatchProof): _88.BatchProofAminoMsg;
                fromProtoMsg(message: _88.BatchProofProtoMsg): _88.BatchProof;
                toProto(message: _88.BatchProof): Uint8Array;
                toProtoMsg(message: _88.BatchProof): _88.BatchProofProtoMsg;
            };
            BatchEntry: {
                typeUrl: string;
                encode(message: _88.BatchEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _88.BatchEntry;
                fromJSON(object: any): _88.BatchEntry;
                toJSON(message: _88.BatchEntry): unknown;
                fromPartial(object: Partial<_88.BatchEntry>): _88.BatchEntry;
                fromAmino(object: _88.BatchEntryAmino): _88.BatchEntry;
                toAmino(message: _88.BatchEntry): _88.BatchEntryAmino;
                fromAminoMsg(object: _88.BatchEntryAminoMsg): _88.BatchEntry;
                toAminoMsg(message: _88.BatchEntry): _88.BatchEntryAminoMsg;
                fromProtoMsg(message: _88.BatchEntryProtoMsg): _88.BatchEntry;
                toProto(message: _88.BatchEntry): Uint8Array;
                toProtoMsg(message: _88.BatchEntry): _88.BatchEntryProtoMsg;
            };
            CompressedBatchProof: {
                typeUrl: string;
                encode(message: _88.CompressedBatchProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _88.CompressedBatchProof;
                fromJSON(object: any): _88.CompressedBatchProof;
                toJSON(message: _88.CompressedBatchProof): unknown;
                fromPartial(object: Partial<_88.CompressedBatchProof>): _88.CompressedBatchProof;
                fromAmino(object: _88.CompressedBatchProofAmino): _88.CompressedBatchProof;
                toAmino(message: _88.CompressedBatchProof): _88.CompressedBatchProofAmino;
                fromAminoMsg(object: _88.CompressedBatchProofAminoMsg): _88.CompressedBatchProof;
                toAminoMsg(message: _88.CompressedBatchProof): _88.CompressedBatchProofAminoMsg;
                fromProtoMsg(message: _88.CompressedBatchProofProtoMsg): _88.CompressedBatchProof;
                toProto(message: _88.CompressedBatchProof): Uint8Array;
                toProtoMsg(message: _88.CompressedBatchProof): _88.CompressedBatchProofProtoMsg;
            };
            CompressedBatchEntry: {
                typeUrl: string;
                encode(message: _88.CompressedBatchEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _88.CompressedBatchEntry;
                fromJSON(object: any): _88.CompressedBatchEntry;
                toJSON(message: _88.CompressedBatchEntry): unknown;
                fromPartial(object: Partial<_88.CompressedBatchEntry>): _88.CompressedBatchEntry;
                fromAmino(object: _88.CompressedBatchEntryAmino): _88.CompressedBatchEntry;
                toAmino(message: _88.CompressedBatchEntry): _88.CompressedBatchEntryAmino;
                fromAminoMsg(object: _88.CompressedBatchEntryAminoMsg): _88.CompressedBatchEntry;
                toAminoMsg(message: _88.CompressedBatchEntry): _88.CompressedBatchEntryAminoMsg;
                fromProtoMsg(message: _88.CompressedBatchEntryProtoMsg): _88.CompressedBatchEntry;
                toProto(message: _88.CompressedBatchEntry): Uint8Array;
                toProtoMsg(message: _88.CompressedBatchEntry): _88.CompressedBatchEntryProtoMsg;
            };
            CompressedExistenceProof: {
                typeUrl: string;
                encode(message: _88.CompressedExistenceProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _88.CompressedExistenceProof;
                fromJSON(object: any): _88.CompressedExistenceProof;
                toJSON(message: _88.CompressedExistenceProof): unknown;
                fromPartial(object: Partial<_88.CompressedExistenceProof>): _88.CompressedExistenceProof;
                fromAmino(object: _88.CompressedExistenceProofAmino): _88.CompressedExistenceProof;
                toAmino(message: _88.CompressedExistenceProof): _88.CompressedExistenceProofAmino;
                fromAminoMsg(object: _88.CompressedExistenceProofAminoMsg): _88.CompressedExistenceProof;
                toAminoMsg(message: _88.CompressedExistenceProof): _88.CompressedExistenceProofAminoMsg;
                fromProtoMsg(message: _88.CompressedExistenceProofProtoMsg): _88.CompressedExistenceProof;
                toProto(message: _88.CompressedExistenceProof): Uint8Array;
                toProtoMsg(message: _88.CompressedExistenceProof): _88.CompressedExistenceProofProtoMsg;
            };
            CompressedNonExistenceProof: {
                typeUrl: string;
                encode(message: _88.CompressedNonExistenceProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _88.CompressedNonExistenceProof;
                fromJSON(object: any): _88.CompressedNonExistenceProof;
                toJSON(message: _88.CompressedNonExistenceProof): unknown;
                fromPartial(object: Partial<_88.CompressedNonExistenceProof>): _88.CompressedNonExistenceProof;
                fromAmino(object: _88.CompressedNonExistenceProofAmino): _88.CompressedNonExistenceProof;
                toAmino(message: _88.CompressedNonExistenceProof): _88.CompressedNonExistenceProofAmino;
                fromAminoMsg(object: _88.CompressedNonExistenceProofAminoMsg): _88.CompressedNonExistenceProof;
                toAminoMsg(message: _88.CompressedNonExistenceProof): _88.CompressedNonExistenceProofAminoMsg;
                fromProtoMsg(message: _88.CompressedNonExistenceProofProtoMsg): _88.CompressedNonExistenceProof;
                toProto(message: _88.CompressedNonExistenceProof): Uint8Array;
                toProtoMsg(message: _88.CompressedNonExistenceProof): _88.CompressedNonExistenceProofProtoMsg;
            };
        };
    }
    namespace mint {
        namespace module {
            const v1: {
                protobufPackage: "cosmos.mint.module.v1";
                Module: {
                    typeUrl: string;
                    encode(message: _89.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _89.Module;
                    fromJSON(object: any): _89.Module;
                    toJSON(message: _89.Module): unknown;
                    fromPartial(object: Partial<_89.Module>): _89.Module;
                    fromAmino(object: _89.ModuleAmino): _89.Module;
                    toAmino(message: _89.Module): _89.ModuleAmino;
                    fromAminoMsg(object: _89.ModuleAminoMsg): _89.Module;
                    toAminoMsg(message: _89.Module): _89.ModuleAminoMsg;
                    fromProtoMsg(message: _89.ModuleProtoMsg): _89.Module;
                    toProto(message: _89.Module): Uint8Array;
                    toProtoMsg(message: _89.Module): _89.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            Msg: typeof _273.Msg;
            Query: typeof _256.Query;
            QueryClientImpl: typeof _256.QueryClientImpl;
            LCDQueryClient: typeof _238.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    updateParams(value: _93.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    updateParams(value: _93.MsgUpdateParams): {
                        typeUrl: string;
                        value: _93.MsgUpdateParams;
                    };
                };
                toJSON: {
                    updateParams(value: _93.MsgUpdateParams): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _93.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    updateParams(value: _93.MsgUpdateParams): {
                        typeUrl: string;
                        value: _93.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.mint.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _93.MsgUpdateParams) => _93.MsgUpdateParamsAmino;
                    fromAmino: (object: _93.MsgUpdateParamsAmino) => _93.MsgUpdateParams;
                };
            };
            protobufPackage: "cosmos.mint.v1beta1";
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _93.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _93.MsgUpdateParams;
                fromJSON(object: any): _93.MsgUpdateParams;
                toJSON(message: _93.MsgUpdateParams): unknown;
                fromPartial(object: Partial<_93.MsgUpdateParams>): _93.MsgUpdateParams;
                fromAmino(object: _93.MsgUpdateParamsAmino): _93.MsgUpdateParams;
                toAmino(message: _93.MsgUpdateParams): _93.MsgUpdateParamsAmino;
                fromAminoMsg(object: _93.MsgUpdateParamsAminoMsg): _93.MsgUpdateParams;
                toAminoMsg(message: _93.MsgUpdateParams): _93.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _93.MsgUpdateParamsProtoMsg): _93.MsgUpdateParams;
                toProto(message: _93.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _93.MsgUpdateParams): _93.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _93.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _93.MsgUpdateParamsResponse;
                fromJSON(_: any): _93.MsgUpdateParamsResponse;
                toJSON(_: _93.MsgUpdateParamsResponse): unknown;
                fromPartial(_: Partial<_93.MsgUpdateParamsResponse>): _93.MsgUpdateParamsResponse;
                fromAmino(_: _93.MsgUpdateParamsResponseAmino): _93.MsgUpdateParamsResponse;
                toAmino(_: _93.MsgUpdateParamsResponse): _93.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _93.MsgUpdateParamsResponseAminoMsg): _93.MsgUpdateParamsResponse;
                toAminoMsg(message: _93.MsgUpdateParamsResponse): _93.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _93.MsgUpdateParamsResponseProtoMsg): _93.MsgUpdateParamsResponse;
                toProto(message: _93.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _93.MsgUpdateParamsResponse): _93.MsgUpdateParamsResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _92.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _92.QueryParamsRequest;
                fromJSON(_: any): _92.QueryParamsRequest;
                toJSON(_: _92.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_92.QueryParamsRequest>): _92.QueryParamsRequest;
                fromAmino(_: _92.QueryParamsRequestAmino): _92.QueryParamsRequest;
                toAmino(_: _92.QueryParamsRequest): _92.QueryParamsRequestAmino;
                fromAminoMsg(object: _92.QueryParamsRequestAminoMsg): _92.QueryParamsRequest;
                toAminoMsg(message: _92.QueryParamsRequest): _92.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _92.QueryParamsRequestProtoMsg): _92.QueryParamsRequest;
                toProto(message: _92.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _92.QueryParamsRequest): _92.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _92.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _92.QueryParamsResponse;
                fromJSON(object: any): _92.QueryParamsResponse;
                toJSON(message: _92.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_92.QueryParamsResponse>): _92.QueryParamsResponse;
                fromAmino(object: _92.QueryParamsResponseAmino): _92.QueryParamsResponse;
                toAmino(message: _92.QueryParamsResponse): _92.QueryParamsResponseAmino;
                fromAminoMsg(object: _92.QueryParamsResponseAminoMsg): _92.QueryParamsResponse;
                toAminoMsg(message: _92.QueryParamsResponse): _92.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _92.QueryParamsResponseProtoMsg): _92.QueryParamsResponse;
                toProto(message: _92.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _92.QueryParamsResponse): _92.QueryParamsResponseProtoMsg;
            };
            QueryInflationRequest: {
                typeUrl: string;
                encode(_: _92.QueryInflationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _92.QueryInflationRequest;
                fromJSON(_: any): _92.QueryInflationRequest;
                toJSON(_: _92.QueryInflationRequest): unknown;
                fromPartial(_: Partial<_92.QueryInflationRequest>): _92.QueryInflationRequest;
                fromAmino(_: _92.QueryInflationRequestAmino): _92.QueryInflationRequest;
                toAmino(_: _92.QueryInflationRequest): _92.QueryInflationRequestAmino;
                fromAminoMsg(object: _92.QueryInflationRequestAminoMsg): _92.QueryInflationRequest;
                toAminoMsg(message: _92.QueryInflationRequest): _92.QueryInflationRequestAminoMsg;
                fromProtoMsg(message: _92.QueryInflationRequestProtoMsg): _92.QueryInflationRequest;
                toProto(message: _92.QueryInflationRequest): Uint8Array;
                toProtoMsg(message: _92.QueryInflationRequest): _92.QueryInflationRequestProtoMsg;
            };
            QueryInflationResponse: {
                typeUrl: string;
                encode(message: _92.QueryInflationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _92.QueryInflationResponse;
                fromJSON(object: any): _92.QueryInflationResponse;
                toJSON(message: _92.QueryInflationResponse): unknown;
                fromPartial(object: Partial<_92.QueryInflationResponse>): _92.QueryInflationResponse;
                fromAmino(object: _92.QueryInflationResponseAmino): _92.QueryInflationResponse;
                toAmino(message: _92.QueryInflationResponse): _92.QueryInflationResponseAmino;
                fromAminoMsg(object: _92.QueryInflationResponseAminoMsg): _92.QueryInflationResponse;
                toAminoMsg(message: _92.QueryInflationResponse): _92.QueryInflationResponseAminoMsg;
                fromProtoMsg(message: _92.QueryInflationResponseProtoMsg): _92.QueryInflationResponse;
                toProto(message: _92.QueryInflationResponse): Uint8Array;
                toProtoMsg(message: _92.QueryInflationResponse): _92.QueryInflationResponseProtoMsg;
            };
            QueryAnnualProvisionsRequest: {
                typeUrl: string;
                encode(_: _92.QueryAnnualProvisionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _92.QueryAnnualProvisionsRequest;
                fromJSON(_: any): _92.QueryAnnualProvisionsRequest;
                toJSON(_: _92.QueryAnnualProvisionsRequest): unknown;
                fromPartial(_: Partial<_92.QueryAnnualProvisionsRequest>): _92.QueryAnnualProvisionsRequest;
                fromAmino(_: _92.QueryAnnualProvisionsRequestAmino): _92.QueryAnnualProvisionsRequest;
                toAmino(_: _92.QueryAnnualProvisionsRequest): _92.QueryAnnualProvisionsRequestAmino;
                fromAminoMsg(object: _92.QueryAnnualProvisionsRequestAminoMsg): _92.QueryAnnualProvisionsRequest;
                toAminoMsg(message: _92.QueryAnnualProvisionsRequest): _92.QueryAnnualProvisionsRequestAminoMsg;
                fromProtoMsg(message: _92.QueryAnnualProvisionsRequestProtoMsg): _92.QueryAnnualProvisionsRequest;
                toProto(message: _92.QueryAnnualProvisionsRequest): Uint8Array;
                toProtoMsg(message: _92.QueryAnnualProvisionsRequest): _92.QueryAnnualProvisionsRequestProtoMsg;
            };
            QueryAnnualProvisionsResponse: {
                typeUrl: string;
                encode(message: _92.QueryAnnualProvisionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _92.QueryAnnualProvisionsResponse;
                fromJSON(object: any): _92.QueryAnnualProvisionsResponse;
                toJSON(message: _92.QueryAnnualProvisionsResponse): unknown;
                fromPartial(object: Partial<_92.QueryAnnualProvisionsResponse>): _92.QueryAnnualProvisionsResponse;
                fromAmino(object: _92.QueryAnnualProvisionsResponseAmino): _92.QueryAnnualProvisionsResponse;
                toAmino(message: _92.QueryAnnualProvisionsResponse): _92.QueryAnnualProvisionsResponseAmino;
                fromAminoMsg(object: _92.QueryAnnualProvisionsResponseAminoMsg): _92.QueryAnnualProvisionsResponse;
                toAminoMsg(message: _92.QueryAnnualProvisionsResponse): _92.QueryAnnualProvisionsResponseAminoMsg;
                fromProtoMsg(message: _92.QueryAnnualProvisionsResponseProtoMsg): _92.QueryAnnualProvisionsResponse;
                toProto(message: _92.QueryAnnualProvisionsResponse): Uint8Array;
                toProtoMsg(message: _92.QueryAnnualProvisionsResponse): _92.QueryAnnualProvisionsResponseProtoMsg;
            };
            Minter: {
                typeUrl: string;
                encode(message: _91.Minter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _91.Minter;
                fromJSON(object: any): _91.Minter;
                toJSON(message: _91.Minter): unknown;
                fromPartial(object: Partial<_91.Minter>): _91.Minter;
                fromAmino(object: _91.MinterAmino): _91.Minter;
                toAmino(message: _91.Minter): _91.MinterAmino;
                fromAminoMsg(object: _91.MinterAminoMsg): _91.Minter;
                toAminoMsg(message: _91.Minter): _91.MinterAminoMsg;
                fromProtoMsg(message: _91.MinterProtoMsg): _91.Minter;
                toProto(message: _91.Minter): Uint8Array;
                toProtoMsg(message: _91.Minter): _91.MinterProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _91.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _91.Params;
                fromJSON(object: any): _91.Params;
                toJSON(message: _91.Params): unknown;
                fromPartial(object: Partial<_91.Params>): _91.Params;
                fromAmino(object: _91.ParamsAmino): _91.Params;
                toAmino(message: _91.Params): _91.ParamsAmino;
                fromAminoMsg(object: _91.ParamsAminoMsg): _91.Params;
                toAminoMsg(message: _91.Params): _91.ParamsAminoMsg;
                fromProtoMsg(message: _91.ParamsProtoMsg): _91.Params;
                toProto(message: _91.Params): Uint8Array;
                toProtoMsg(message: _91.Params): _91.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _90.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _90.GenesisState;
                fromJSON(object: any): _90.GenesisState;
                toJSON(message: _90.GenesisState): unknown;
                fromPartial(object: Partial<_90.GenesisState>): _90.GenesisState;
                fromAmino(object: _90.GenesisStateAmino): _90.GenesisState;
                toAmino(message: _90.GenesisState): _90.GenesisStateAmino;
                fromAminoMsg(object: _90.GenesisStateAminoMsg): _90.GenesisState;
                toAminoMsg(message: _90.GenesisState): _90.GenesisStateAminoMsg;
                fromProtoMsg(message: _90.GenesisStateProtoMsg): _90.GenesisState;
                toProto(message: _90.GenesisState): Uint8Array;
                toProtoMsg(message: _90.GenesisState): _90.GenesisStateProtoMsg;
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
                    encode(_: _95.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _95.Module;
                    fromJSON(_: any): _95.Module;
                    toJSON(_: _95.Module): unknown;
                    fromPartial(_: Partial<_95.Module>): _95.Module;
                    fromAmino(_: _95.ModuleAmino): _95.Module;
                    toAmino(_: _95.Module): _95.ModuleAmino;
                    fromAminoMsg(object: _95.ModuleAminoMsg): _95.Module;
                    toAminoMsg(message: _95.Module): _95.ModuleAminoMsg;
                    fromProtoMsg(message: _95.ModuleProtoMsg): _95.Module;
                    toProto(message: _95.Module): Uint8Array;
                    toProtoMsg(message: _95.Module): _95.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            Msg: typeof _274.Msg;
            Query: typeof _257.Query;
            QueryClientImpl: typeof _257.QueryClientImpl;
            LCDQueryClient: typeof _239.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _100.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _100.MsgSend): {
                        typeUrl: string;
                        value: _100.MsgSend;
                    };
                };
                toJSON: {
                    send(value: _100.MsgSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _100.MsgSend;
                    };
                };
                fromPartial: {
                    send(value: _100.MsgSend): {
                        typeUrl: string;
                        value: _100.MsgSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.nft.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _100.MsgSend) => _100.MsgSendAmino;
                    fromAmino: (object: _100.MsgSendAmino) => _100.MsgSend;
                };
            };
            protobufPackage: "cosmos.nft.v1beta1";
            MsgSend: {
                typeUrl: string;
                encode(message: _100.MsgSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _100.MsgSend;
                fromJSON(object: any): _100.MsgSend;
                toJSON(message: _100.MsgSend): unknown;
                fromPartial(object: Partial<_100.MsgSend>): _100.MsgSend;
                fromAmino(object: _100.MsgSendAmino): _100.MsgSend;
                toAmino(message: _100.MsgSend): _100.MsgSendAmino;
                fromAminoMsg(object: _100.MsgSendAminoMsg): _100.MsgSend;
                toAminoMsg(message: _100.MsgSend): _100.MsgSendAminoMsg;
                fromProtoMsg(message: _100.MsgSendProtoMsg): _100.MsgSend;
                toProto(message: _100.MsgSend): Uint8Array;
                toProtoMsg(message: _100.MsgSend): _100.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _100.MsgSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _100.MsgSendResponse;
                fromJSON(_: any): _100.MsgSendResponse;
                toJSON(_: _100.MsgSendResponse): unknown;
                fromPartial(_: Partial<_100.MsgSendResponse>): _100.MsgSendResponse;
                fromAmino(_: _100.MsgSendResponseAmino): _100.MsgSendResponse;
                toAmino(_: _100.MsgSendResponse): _100.MsgSendResponseAmino;
                fromAminoMsg(object: _100.MsgSendResponseAminoMsg): _100.MsgSendResponse;
                toAminoMsg(message: _100.MsgSendResponse): _100.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _100.MsgSendResponseProtoMsg): _100.MsgSendResponse;
                toProto(message: _100.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _100.MsgSendResponse): _100.MsgSendResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _99.QueryBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _99.QueryBalanceRequest;
                fromJSON(object: any): _99.QueryBalanceRequest;
                toJSON(message: _99.QueryBalanceRequest): unknown;
                fromPartial(object: Partial<_99.QueryBalanceRequest>): _99.QueryBalanceRequest;
                fromAmino(object: _99.QueryBalanceRequestAmino): _99.QueryBalanceRequest;
                toAmino(message: _99.QueryBalanceRequest): _99.QueryBalanceRequestAmino;
                fromAminoMsg(object: _99.QueryBalanceRequestAminoMsg): _99.QueryBalanceRequest;
                toAminoMsg(message: _99.QueryBalanceRequest): _99.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _99.QueryBalanceRequestProtoMsg): _99.QueryBalanceRequest;
                toProto(message: _99.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _99.QueryBalanceRequest): _99.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _99.QueryBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _99.QueryBalanceResponse;
                fromJSON(object: any): _99.QueryBalanceResponse;
                toJSON(message: _99.QueryBalanceResponse): unknown;
                fromPartial(object: Partial<_99.QueryBalanceResponse>): _99.QueryBalanceResponse;
                fromAmino(object: _99.QueryBalanceResponseAmino): _99.QueryBalanceResponse;
                toAmino(message: _99.QueryBalanceResponse): _99.QueryBalanceResponseAmino;
                fromAminoMsg(object: _99.QueryBalanceResponseAminoMsg): _99.QueryBalanceResponse;
                toAminoMsg(message: _99.QueryBalanceResponse): _99.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _99.QueryBalanceResponseProtoMsg): _99.QueryBalanceResponse;
                toProto(message: _99.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _99.QueryBalanceResponse): _99.QueryBalanceResponseProtoMsg;
            };
            QueryOwnerRequest: {
                typeUrl: string;
                encode(message: _99.QueryOwnerRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _99.QueryOwnerRequest;
                fromJSON(object: any): _99.QueryOwnerRequest;
                toJSON(message: _99.QueryOwnerRequest): unknown;
                fromPartial(object: Partial<_99.QueryOwnerRequest>): _99.QueryOwnerRequest;
                fromAmino(object: _99.QueryOwnerRequestAmino): _99.QueryOwnerRequest;
                toAmino(message: _99.QueryOwnerRequest): _99.QueryOwnerRequestAmino;
                fromAminoMsg(object: _99.QueryOwnerRequestAminoMsg): _99.QueryOwnerRequest;
                toAminoMsg(message: _99.QueryOwnerRequest): _99.QueryOwnerRequestAminoMsg;
                fromProtoMsg(message: _99.QueryOwnerRequestProtoMsg): _99.QueryOwnerRequest;
                toProto(message: _99.QueryOwnerRequest): Uint8Array;
                toProtoMsg(message: _99.QueryOwnerRequest): _99.QueryOwnerRequestProtoMsg;
            };
            QueryOwnerResponse: {
                typeUrl: string;
                encode(message: _99.QueryOwnerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _99.QueryOwnerResponse;
                fromJSON(object: any): _99.QueryOwnerResponse;
                toJSON(message: _99.QueryOwnerResponse): unknown;
                fromPartial(object: Partial<_99.QueryOwnerResponse>): _99.QueryOwnerResponse;
                fromAmino(object: _99.QueryOwnerResponseAmino): _99.QueryOwnerResponse;
                toAmino(message: _99.QueryOwnerResponse): _99.QueryOwnerResponseAmino;
                fromAminoMsg(object: _99.QueryOwnerResponseAminoMsg): _99.QueryOwnerResponse;
                toAminoMsg(message: _99.QueryOwnerResponse): _99.QueryOwnerResponseAminoMsg;
                fromProtoMsg(message: _99.QueryOwnerResponseProtoMsg): _99.QueryOwnerResponse;
                toProto(message: _99.QueryOwnerResponse): Uint8Array;
                toProtoMsg(message: _99.QueryOwnerResponse): _99.QueryOwnerResponseProtoMsg;
            };
            QuerySupplyRequest: {
                typeUrl: string;
                encode(message: _99.QuerySupplyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _99.QuerySupplyRequest;
                fromJSON(object: any): _99.QuerySupplyRequest;
                toJSON(message: _99.QuerySupplyRequest): unknown;
                fromPartial(object: Partial<_99.QuerySupplyRequest>): _99.QuerySupplyRequest;
                fromAmino(object: _99.QuerySupplyRequestAmino): _99.QuerySupplyRequest;
                toAmino(message: _99.QuerySupplyRequest): _99.QuerySupplyRequestAmino;
                fromAminoMsg(object: _99.QuerySupplyRequestAminoMsg): _99.QuerySupplyRequest;
                toAminoMsg(message: _99.QuerySupplyRequest): _99.QuerySupplyRequestAminoMsg;
                fromProtoMsg(message: _99.QuerySupplyRequestProtoMsg): _99.QuerySupplyRequest;
                toProto(message: _99.QuerySupplyRequest): Uint8Array;
                toProtoMsg(message: _99.QuerySupplyRequest): _99.QuerySupplyRequestProtoMsg;
            };
            QuerySupplyResponse: {
                typeUrl: string;
                encode(message: _99.QuerySupplyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _99.QuerySupplyResponse;
                fromJSON(object: any): _99.QuerySupplyResponse;
                toJSON(message: _99.QuerySupplyResponse): unknown;
                fromPartial(object: Partial<_99.QuerySupplyResponse>): _99.QuerySupplyResponse;
                fromAmino(object: _99.QuerySupplyResponseAmino): _99.QuerySupplyResponse;
                toAmino(message: _99.QuerySupplyResponse): _99.QuerySupplyResponseAmino;
                fromAminoMsg(object: _99.QuerySupplyResponseAminoMsg): _99.QuerySupplyResponse;
                toAminoMsg(message: _99.QuerySupplyResponse): _99.QuerySupplyResponseAminoMsg;
                fromProtoMsg(message: _99.QuerySupplyResponseProtoMsg): _99.QuerySupplyResponse;
                toProto(message: _99.QuerySupplyResponse): Uint8Array;
                toProtoMsg(message: _99.QuerySupplyResponse): _99.QuerySupplyResponseProtoMsg;
            };
            QueryNFTsRequest: {
                typeUrl: string;
                encode(message: _99.QueryNFTsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _99.QueryNFTsRequest;
                fromJSON(object: any): _99.QueryNFTsRequest;
                toJSON(message: _99.QueryNFTsRequest): unknown;
                fromPartial(object: Partial<_99.QueryNFTsRequest>): _99.QueryNFTsRequest;
                fromAmino(object: _99.QueryNFTsRequestAmino): _99.QueryNFTsRequest;
                toAmino(message: _99.QueryNFTsRequest): _99.QueryNFTsRequestAmino;
                fromAminoMsg(object: _99.QueryNFTsRequestAminoMsg): _99.QueryNFTsRequest;
                toAminoMsg(message: _99.QueryNFTsRequest): _99.QueryNFTsRequestAminoMsg;
                fromProtoMsg(message: _99.QueryNFTsRequestProtoMsg): _99.QueryNFTsRequest;
                toProto(message: _99.QueryNFTsRequest): Uint8Array;
                toProtoMsg(message: _99.QueryNFTsRequest): _99.QueryNFTsRequestProtoMsg;
            };
            QueryNFTsResponse: {
                typeUrl: string;
                encode(message: _99.QueryNFTsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _99.QueryNFTsResponse;
                fromJSON(object: any): _99.QueryNFTsResponse;
                toJSON(message: _99.QueryNFTsResponse): unknown;
                fromPartial(object: Partial<_99.QueryNFTsResponse>): _99.QueryNFTsResponse;
                fromAmino(object: _99.QueryNFTsResponseAmino): _99.QueryNFTsResponse;
                toAmino(message: _99.QueryNFTsResponse): _99.QueryNFTsResponseAmino;
                fromAminoMsg(object: _99.QueryNFTsResponseAminoMsg): _99.QueryNFTsResponse;
                toAminoMsg(message: _99.QueryNFTsResponse): _99.QueryNFTsResponseAminoMsg;
                fromProtoMsg(message: _99.QueryNFTsResponseProtoMsg): _99.QueryNFTsResponse;
                toProto(message: _99.QueryNFTsResponse): Uint8Array;
                toProtoMsg(message: _99.QueryNFTsResponse): _99.QueryNFTsResponseProtoMsg;
            };
            QueryNFTRequest: {
                typeUrl: string;
                encode(message: _99.QueryNFTRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _99.QueryNFTRequest;
                fromJSON(object: any): _99.QueryNFTRequest;
                toJSON(message: _99.QueryNFTRequest): unknown;
                fromPartial(object: Partial<_99.QueryNFTRequest>): _99.QueryNFTRequest;
                fromAmino(object: _99.QueryNFTRequestAmino): _99.QueryNFTRequest;
                toAmino(message: _99.QueryNFTRequest): _99.QueryNFTRequestAmino;
                fromAminoMsg(object: _99.QueryNFTRequestAminoMsg): _99.QueryNFTRequest;
                toAminoMsg(message: _99.QueryNFTRequest): _99.QueryNFTRequestAminoMsg;
                fromProtoMsg(message: _99.QueryNFTRequestProtoMsg): _99.QueryNFTRequest;
                toProto(message: _99.QueryNFTRequest): Uint8Array;
                toProtoMsg(message: _99.QueryNFTRequest): _99.QueryNFTRequestProtoMsg;
            };
            QueryNFTResponse: {
                typeUrl: string;
                encode(message: _99.QueryNFTResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _99.QueryNFTResponse;
                fromJSON(object: any): _99.QueryNFTResponse;
                toJSON(message: _99.QueryNFTResponse): unknown;
                fromPartial(object: Partial<_99.QueryNFTResponse>): _99.QueryNFTResponse;
                fromAmino(object: _99.QueryNFTResponseAmino): _99.QueryNFTResponse;
                toAmino(message: _99.QueryNFTResponse): _99.QueryNFTResponseAmino;
                fromAminoMsg(object: _99.QueryNFTResponseAminoMsg): _99.QueryNFTResponse;
                toAminoMsg(message: _99.QueryNFTResponse): _99.QueryNFTResponseAminoMsg;
                fromProtoMsg(message: _99.QueryNFTResponseProtoMsg): _99.QueryNFTResponse;
                toProto(message: _99.QueryNFTResponse): Uint8Array;
                toProtoMsg(message: _99.QueryNFTResponse): _99.QueryNFTResponseProtoMsg;
            };
            QueryClassRequest: {
                typeUrl: string;
                encode(message: _99.QueryClassRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _99.QueryClassRequest;
                fromJSON(object: any): _99.QueryClassRequest;
                toJSON(message: _99.QueryClassRequest): unknown;
                fromPartial(object: Partial<_99.QueryClassRequest>): _99.QueryClassRequest;
                fromAmino(object: _99.QueryClassRequestAmino): _99.QueryClassRequest;
                toAmino(message: _99.QueryClassRequest): _99.QueryClassRequestAmino;
                fromAminoMsg(object: _99.QueryClassRequestAminoMsg): _99.QueryClassRequest;
                toAminoMsg(message: _99.QueryClassRequest): _99.QueryClassRequestAminoMsg;
                fromProtoMsg(message: _99.QueryClassRequestProtoMsg): _99.QueryClassRequest;
                toProto(message: _99.QueryClassRequest): Uint8Array;
                toProtoMsg(message: _99.QueryClassRequest): _99.QueryClassRequestProtoMsg;
            };
            QueryClassResponse: {
                typeUrl: string;
                encode(message: _99.QueryClassResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _99.QueryClassResponse;
                fromJSON(object: any): _99.QueryClassResponse;
                toJSON(message: _99.QueryClassResponse): unknown;
                fromPartial(object: Partial<_99.QueryClassResponse>): _99.QueryClassResponse;
                fromAmino(object: _99.QueryClassResponseAmino): _99.QueryClassResponse;
                toAmino(message: _99.QueryClassResponse): _99.QueryClassResponseAmino;
                fromAminoMsg(object: _99.QueryClassResponseAminoMsg): _99.QueryClassResponse;
                toAminoMsg(message: _99.QueryClassResponse): _99.QueryClassResponseAminoMsg;
                fromProtoMsg(message: _99.QueryClassResponseProtoMsg): _99.QueryClassResponse;
                toProto(message: _99.QueryClassResponse): Uint8Array;
                toProtoMsg(message: _99.QueryClassResponse): _99.QueryClassResponseProtoMsg;
            };
            QueryClassesRequest: {
                typeUrl: string;
                encode(message: _99.QueryClassesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _99.QueryClassesRequest;
                fromJSON(object: any): _99.QueryClassesRequest;
                toJSON(message: _99.QueryClassesRequest): unknown;
                fromPartial(object: Partial<_99.QueryClassesRequest>): _99.QueryClassesRequest;
                fromAmino(object: _99.QueryClassesRequestAmino): _99.QueryClassesRequest;
                toAmino(message: _99.QueryClassesRequest): _99.QueryClassesRequestAmino;
                fromAminoMsg(object: _99.QueryClassesRequestAminoMsg): _99.QueryClassesRequest;
                toAminoMsg(message: _99.QueryClassesRequest): _99.QueryClassesRequestAminoMsg;
                fromProtoMsg(message: _99.QueryClassesRequestProtoMsg): _99.QueryClassesRequest;
                toProto(message: _99.QueryClassesRequest): Uint8Array;
                toProtoMsg(message: _99.QueryClassesRequest): _99.QueryClassesRequestProtoMsg;
            };
            QueryClassesResponse: {
                typeUrl: string;
                encode(message: _99.QueryClassesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _99.QueryClassesResponse;
                fromJSON(object: any): _99.QueryClassesResponse;
                toJSON(message: _99.QueryClassesResponse): unknown;
                fromPartial(object: Partial<_99.QueryClassesResponse>): _99.QueryClassesResponse;
                fromAmino(object: _99.QueryClassesResponseAmino): _99.QueryClassesResponse;
                toAmino(message: _99.QueryClassesResponse): _99.QueryClassesResponseAmino;
                fromAminoMsg(object: _99.QueryClassesResponseAminoMsg): _99.QueryClassesResponse;
                toAminoMsg(message: _99.QueryClassesResponse): _99.QueryClassesResponseAminoMsg;
                fromProtoMsg(message: _99.QueryClassesResponseProtoMsg): _99.QueryClassesResponse;
                toProto(message: _99.QueryClassesResponse): Uint8Array;
                toProtoMsg(message: _99.QueryClassesResponse): _99.QueryClassesResponseProtoMsg;
            };
            Class: {
                typeUrl: string;
                encode(message: _98.Class, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _98.Class;
                fromJSON(object: any): _98.Class;
                toJSON(message: _98.Class): unknown;
                fromPartial(object: Partial<_98.Class>): _98.Class;
                fromAmino(object: _98.ClassAmino): _98.Class;
                toAmino(message: _98.Class): _98.ClassAmino;
                fromAminoMsg(object: _98.ClassAminoMsg): _98.Class;
                toAminoMsg(message: _98.Class): _98.ClassAminoMsg;
                fromProtoMsg(message: _98.ClassProtoMsg): _98.Class;
                toProto(message: _98.Class): Uint8Array;
                toProtoMsg(message: _98.Class): _98.ClassProtoMsg;
            };
            NFT: {
                typeUrl: string;
                encode(message: _98.NFT, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _98.NFT;
                fromJSON(object: any): _98.NFT;
                toJSON(message: _98.NFT): unknown;
                fromPartial(object: Partial<_98.NFT>): _98.NFT;
                fromAmino(object: _98.NFTAmino): _98.NFT;
                toAmino(message: _98.NFT): _98.NFTAmino;
                fromAminoMsg(object: _98.NFTAminoMsg): _98.NFT;
                toAminoMsg(message: _98.NFT): _98.NFTAminoMsg;
                fromProtoMsg(message: _98.NFTProtoMsg): _98.NFT;
                toProto(message: _98.NFT): Uint8Array;
                toProtoMsg(message: _98.NFT): _98.NFTProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _97.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _97.GenesisState;
                fromJSON(object: any): _97.GenesisState;
                toJSON(message: _97.GenesisState): unknown;
                fromPartial(object: Partial<_97.GenesisState>): _97.GenesisState;
                fromAmino(object: _97.GenesisStateAmino): _97.GenesisState;
                toAmino(message: _97.GenesisState): _97.GenesisStateAmino;
                fromAminoMsg(object: _97.GenesisStateAminoMsg): _97.GenesisState;
                toAminoMsg(message: _97.GenesisState): _97.GenesisStateAminoMsg;
                fromProtoMsg(message: _97.GenesisStateProtoMsg): _97.GenesisState;
                toProto(message: _97.GenesisState): Uint8Array;
                toProtoMsg(message: _97.GenesisState): _97.GenesisStateProtoMsg;
            };
            Entry: {
                typeUrl: string;
                encode(message: _97.Entry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _97.Entry;
                fromJSON(object: any): _97.Entry;
                toJSON(message: _97.Entry): unknown;
                fromPartial(object: Partial<_97.Entry>): _97.Entry;
                fromAmino(object: _97.EntryAmino): _97.Entry;
                toAmino(message: _97.Entry): _97.EntryAmino;
                fromAminoMsg(object: _97.EntryAminoMsg): _97.Entry;
                toAminoMsg(message: _97.Entry): _97.EntryAminoMsg;
                fromProtoMsg(message: _97.EntryProtoMsg): _97.Entry;
                toProto(message: _97.Entry): Uint8Array;
                toProtoMsg(message: _97.Entry): _97.EntryProtoMsg;
            };
            EventSend: {
                typeUrl: string;
                encode(message: _96.EventSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _96.EventSend;
                fromJSON(object: any): _96.EventSend;
                toJSON(message: _96.EventSend): unknown;
                fromPartial(object: Partial<_96.EventSend>): _96.EventSend;
                fromAmino(object: _96.EventSendAmino): _96.EventSend;
                toAmino(message: _96.EventSend): _96.EventSendAmino;
                fromAminoMsg(object: _96.EventSendAminoMsg): _96.EventSend;
                toAminoMsg(message: _96.EventSend): _96.EventSendAminoMsg;
                fromProtoMsg(message: _96.EventSendProtoMsg): _96.EventSend;
                toProto(message: _96.EventSend): Uint8Array;
                toProtoMsg(message: _96.EventSend): _96.EventSendProtoMsg;
            };
            EventMint: {
                typeUrl: string;
                encode(message: _96.EventMint, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _96.EventMint;
                fromJSON(object: any): _96.EventMint;
                toJSON(message: _96.EventMint): unknown;
                fromPartial(object: Partial<_96.EventMint>): _96.EventMint;
                fromAmino(object: _96.EventMintAmino): _96.EventMint;
                toAmino(message: _96.EventMint): _96.EventMintAmino;
                fromAminoMsg(object: _96.EventMintAminoMsg): _96.EventMint;
                toAminoMsg(message: _96.EventMint): _96.EventMintAminoMsg;
                fromProtoMsg(message: _96.EventMintProtoMsg): _96.EventMint;
                toProto(message: _96.EventMint): Uint8Array;
                toProtoMsg(message: _96.EventMint): _96.EventMintProtoMsg;
            };
            EventBurn: {
                typeUrl: string;
                encode(message: _96.EventBurn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _96.EventBurn;
                fromJSON(object: any): _96.EventBurn;
                toJSON(message: _96.EventBurn): unknown;
                fromPartial(object: Partial<_96.EventBurn>): _96.EventBurn;
                fromAmino(object: _96.EventBurnAmino): _96.EventBurn;
                toAmino(message: _96.EventBurn): _96.EventBurnAmino;
                fromAminoMsg(object: _96.EventBurnAminoMsg): _96.EventBurn;
                toAminoMsg(message: _96.EventBurn): _96.EventBurnAminoMsg;
                fromProtoMsg(message: _96.EventBurnProtoMsg): _96.EventBurn;
                toProto(message: _96.EventBurn): Uint8Array;
                toProtoMsg(message: _96.EventBurn): _96.EventBurnProtoMsg;
            };
        };
    }
    namespace orm {
        namespace module {
            const v1alpha1: {
                protobufPackage: "cosmos.orm.module.v1alpha1";
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
        namespace query {
            const v1alpha1: {
                Query: typeof _258.Query;
                QueryClientImpl: typeof _258.QueryClientImpl;
                protobufPackage: "cosmos.orm.query.v1alpha1";
                GetRequest: {
                    typeUrl: string;
                    encode(message: _102.GetRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _102.GetRequest;
                    fromJSON(object: any): _102.GetRequest;
                    toJSON(message: _102.GetRequest): unknown;
                    fromPartial(object: Partial<_102.GetRequest>): _102.GetRequest;
                    fromAmino(object: _102.GetRequestAmino): _102.GetRequest;
                    toAmino(message: _102.GetRequest): _102.GetRequestAmino;
                    fromAminoMsg(object: _102.GetRequestAminoMsg): _102.GetRequest;
                    toAminoMsg(message: _102.GetRequest): _102.GetRequestAminoMsg;
                    fromProtoMsg(message: _102.GetRequestProtoMsg): _102.GetRequest;
                    toProto(message: _102.GetRequest): Uint8Array;
                    toProtoMsg(message: _102.GetRequest): _102.GetRequestProtoMsg;
                };
                GetResponse: {
                    typeUrl: string;
                    encode(message: _102.GetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _102.GetResponse;
                    fromJSON(object: any): _102.GetResponse;
                    toJSON(message: _102.GetResponse): unknown;
                    fromPartial(object: Partial<_102.GetResponse>): _102.GetResponse;
                    fromAmino(object: _102.GetResponseAmino): _102.GetResponse;
                    toAmino(message: _102.GetResponse): _102.GetResponseAmino;
                    fromAminoMsg(object: _102.GetResponseAminoMsg): _102.GetResponse;
                    toAminoMsg(message: _102.GetResponse): _102.GetResponseAminoMsg;
                    fromProtoMsg(message: _102.GetResponseProtoMsg): _102.GetResponse;
                    toProto(message: _102.GetResponse): Uint8Array;
                    toProtoMsg(message: _102.GetResponse): _102.GetResponseProtoMsg;
                };
                ListRequest: {
                    typeUrl: string;
                    encode(message: _102.ListRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _102.ListRequest;
                    fromJSON(object: any): _102.ListRequest;
                    toJSON(message: _102.ListRequest): unknown;
                    fromPartial(object: Partial<_102.ListRequest>): _102.ListRequest;
                    fromAmino(object: _102.ListRequestAmino): _102.ListRequest;
                    toAmino(message: _102.ListRequest): _102.ListRequestAmino;
                    fromAminoMsg(object: _102.ListRequestAminoMsg): _102.ListRequest;
                    toAminoMsg(message: _102.ListRequest): _102.ListRequestAminoMsg;
                    fromProtoMsg(message: _102.ListRequestProtoMsg): _102.ListRequest;
                    toProto(message: _102.ListRequest): Uint8Array;
                    toProtoMsg(message: _102.ListRequest): _102.ListRequestProtoMsg;
                };
                ListRequest_Prefix: {
                    typeUrl: string;
                    encode(message: _102.ListRequest_Prefix, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _102.ListRequest_Prefix;
                    fromJSON(object: any): _102.ListRequest_Prefix;
                    toJSON(message: _102.ListRequest_Prefix): unknown;
                    fromPartial(object: Partial<_102.ListRequest_Prefix>): _102.ListRequest_Prefix;
                    fromAmino(object: _102.ListRequest_PrefixAmino): _102.ListRequest_Prefix;
                    toAmino(message: _102.ListRequest_Prefix): _102.ListRequest_PrefixAmino;
                    fromAminoMsg(object: _102.ListRequest_PrefixAminoMsg): _102.ListRequest_Prefix;
                    toAminoMsg(message: _102.ListRequest_Prefix): _102.ListRequest_PrefixAminoMsg;
                    fromProtoMsg(message: _102.ListRequest_PrefixProtoMsg): _102.ListRequest_Prefix;
                    toProto(message: _102.ListRequest_Prefix): Uint8Array;
                    toProtoMsg(message: _102.ListRequest_Prefix): _102.ListRequest_PrefixProtoMsg;
                };
                ListRequest_Range: {
                    typeUrl: string;
                    encode(message: _102.ListRequest_Range, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _102.ListRequest_Range;
                    fromJSON(object: any): _102.ListRequest_Range;
                    toJSON(message: _102.ListRequest_Range): unknown;
                    fromPartial(object: Partial<_102.ListRequest_Range>): _102.ListRequest_Range;
                    fromAmino(object: _102.ListRequest_RangeAmino): _102.ListRequest_Range;
                    toAmino(message: _102.ListRequest_Range): _102.ListRequest_RangeAmino;
                    fromAminoMsg(object: _102.ListRequest_RangeAminoMsg): _102.ListRequest_Range;
                    toAminoMsg(message: _102.ListRequest_Range): _102.ListRequest_RangeAminoMsg;
                    fromProtoMsg(message: _102.ListRequest_RangeProtoMsg): _102.ListRequest_Range;
                    toProto(message: _102.ListRequest_Range): Uint8Array;
                    toProtoMsg(message: _102.ListRequest_Range): _102.ListRequest_RangeProtoMsg;
                };
                ListResponse: {
                    typeUrl: string;
                    encode(message: _102.ListResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _102.ListResponse;
                    fromJSON(object: any): _102.ListResponse;
                    toJSON(message: _102.ListResponse): unknown;
                    fromPartial(object: Partial<_102.ListResponse>): _102.ListResponse;
                    fromAmino(object: _102.ListResponseAmino): _102.ListResponse;
                    toAmino(message: _102.ListResponse): _102.ListResponseAmino;
                    fromAminoMsg(object: _102.ListResponseAminoMsg): _102.ListResponse;
                    toAminoMsg(message: _102.ListResponse): _102.ListResponseAminoMsg;
                    fromProtoMsg(message: _102.ListResponseProtoMsg): _102.ListResponse;
                    toProto(message: _102.ListResponse): Uint8Array;
                    toProtoMsg(message: _102.ListResponse): _102.ListResponseProtoMsg;
                };
                IndexValue: {
                    typeUrl: string;
                    encode(message: _102.IndexValue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _102.IndexValue;
                    fromJSON(object: any): _102.IndexValue;
                    toJSON(message: _102.IndexValue): unknown;
                    fromPartial(object: Partial<_102.IndexValue>): _102.IndexValue;
                    fromAmino(object: _102.IndexValueAmino): _102.IndexValue;
                    toAmino(message: _102.IndexValue): _102.IndexValueAmino;
                    fromAminoMsg(object: _102.IndexValueAminoMsg): _102.IndexValue;
                    toAminoMsg(message: _102.IndexValue): _102.IndexValueAminoMsg;
                    fromProtoMsg(message: _102.IndexValueProtoMsg): _102.IndexValue;
                    toProto(message: _102.IndexValue): Uint8Array;
                    toProtoMsg(message: _102.IndexValue): _102.IndexValueProtoMsg;
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
                    encode(_: _103.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _103.Module;
                    fromJSON(_: any): _103.Module;
                    toJSON(_: _103.Module): unknown;
                    fromPartial(_: Partial<_103.Module>): _103.Module;
                    fromAmino(_: _103.ModuleAmino): _103.Module;
                    toAmino(_: _103.Module): _103.ModuleAmino;
                    fromAminoMsg(object: _103.ModuleAminoMsg): _103.Module;
                    toAminoMsg(message: _103.Module): _103.ModuleAminoMsg;
                    fromProtoMsg(message: _103.ModuleProtoMsg): _103.Module;
                    toProto(message: _103.Module): Uint8Array;
                    toProtoMsg(message: _103.Module): _103.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            Query: typeof _259.Query;
            QueryClientImpl: typeof _259.QueryClientImpl;
            LCDQueryClient: typeof _240.LCDQueryClient;
            protobufPackage: "cosmos.params.v1beta1";
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _105.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _105.QueryParamsRequest;
                fromJSON(object: any): _105.QueryParamsRequest;
                toJSON(message: _105.QueryParamsRequest): unknown;
                fromPartial(object: Partial<_105.QueryParamsRequest>): _105.QueryParamsRequest;
                fromAmino(object: _105.QueryParamsRequestAmino): _105.QueryParamsRequest;
                toAmino(message: _105.QueryParamsRequest): _105.QueryParamsRequestAmino;
                fromAminoMsg(object: _105.QueryParamsRequestAminoMsg): _105.QueryParamsRequest;
                toAminoMsg(message: _105.QueryParamsRequest): _105.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _105.QueryParamsRequestProtoMsg): _105.QueryParamsRequest;
                toProto(message: _105.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _105.QueryParamsRequest): _105.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _105.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _105.QueryParamsResponse;
                fromJSON(object: any): _105.QueryParamsResponse;
                toJSON(message: _105.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_105.QueryParamsResponse>): _105.QueryParamsResponse;
                fromAmino(object: _105.QueryParamsResponseAmino): _105.QueryParamsResponse;
                toAmino(message: _105.QueryParamsResponse): _105.QueryParamsResponseAmino;
                fromAminoMsg(object: _105.QueryParamsResponseAminoMsg): _105.QueryParamsResponse;
                toAminoMsg(message: _105.QueryParamsResponse): _105.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _105.QueryParamsResponseProtoMsg): _105.QueryParamsResponse;
                toProto(message: _105.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _105.QueryParamsResponse): _105.QueryParamsResponseProtoMsg;
            };
            QuerySubspacesRequest: {
                typeUrl: string;
                encode(_: _105.QuerySubspacesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _105.QuerySubspacesRequest;
                fromJSON(_: any): _105.QuerySubspacesRequest;
                toJSON(_: _105.QuerySubspacesRequest): unknown;
                fromPartial(_: Partial<_105.QuerySubspacesRequest>): _105.QuerySubspacesRequest;
                fromAmino(_: _105.QuerySubspacesRequestAmino): _105.QuerySubspacesRequest;
                toAmino(_: _105.QuerySubspacesRequest): _105.QuerySubspacesRequestAmino;
                fromAminoMsg(object: _105.QuerySubspacesRequestAminoMsg): _105.QuerySubspacesRequest;
                toAminoMsg(message: _105.QuerySubspacesRequest): _105.QuerySubspacesRequestAminoMsg;
                fromProtoMsg(message: _105.QuerySubspacesRequestProtoMsg): _105.QuerySubspacesRequest;
                toProto(message: _105.QuerySubspacesRequest): Uint8Array;
                toProtoMsg(message: _105.QuerySubspacesRequest): _105.QuerySubspacesRequestProtoMsg;
            };
            QuerySubspacesResponse: {
                typeUrl: string;
                encode(message: _105.QuerySubspacesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _105.QuerySubspacesResponse;
                fromJSON(object: any): _105.QuerySubspacesResponse;
                toJSON(message: _105.QuerySubspacesResponse): unknown;
                fromPartial(object: Partial<_105.QuerySubspacesResponse>): _105.QuerySubspacesResponse;
                fromAmino(object: _105.QuerySubspacesResponseAmino): _105.QuerySubspacesResponse;
                toAmino(message: _105.QuerySubspacesResponse): _105.QuerySubspacesResponseAmino;
                fromAminoMsg(object: _105.QuerySubspacesResponseAminoMsg): _105.QuerySubspacesResponse;
                toAminoMsg(message: _105.QuerySubspacesResponse): _105.QuerySubspacesResponseAminoMsg;
                fromProtoMsg(message: _105.QuerySubspacesResponseProtoMsg): _105.QuerySubspacesResponse;
                toProto(message: _105.QuerySubspacesResponse): Uint8Array;
                toProtoMsg(message: _105.QuerySubspacesResponse): _105.QuerySubspacesResponseProtoMsg;
            };
            Subspace: {
                typeUrl: string;
                encode(message: _105.Subspace, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _105.Subspace;
                fromJSON(object: any): _105.Subspace;
                toJSON(message: _105.Subspace): unknown;
                fromPartial(object: Partial<_105.Subspace>): _105.Subspace;
                fromAmino(object: _105.SubspaceAmino): _105.Subspace;
                toAmino(message: _105.Subspace): _105.SubspaceAmino;
                fromAminoMsg(object: _105.SubspaceAminoMsg): _105.Subspace;
                toAminoMsg(message: _105.Subspace): _105.SubspaceAminoMsg;
                fromProtoMsg(message: _105.SubspaceProtoMsg): _105.Subspace;
                toProto(message: _105.Subspace): Uint8Array;
                toProtoMsg(message: _105.Subspace): _105.SubspaceProtoMsg;
            };
            ParameterChangeProposal: {
                typeUrl: string;
                encode(message: _104.ParameterChangeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _104.ParameterChangeProposal;
                fromJSON(object: any): _104.ParameterChangeProposal;
                toJSON(message: _104.ParameterChangeProposal): unknown;
                fromPartial(object: Partial<_104.ParameterChangeProposal>): _104.ParameterChangeProposal;
                fromAmino(object: _104.ParameterChangeProposalAmino): _104.ParameterChangeProposal;
                toAmino(message: _104.ParameterChangeProposal): _104.ParameterChangeProposalAmino;
                fromAminoMsg(object: _104.ParameterChangeProposalAminoMsg): _104.ParameterChangeProposal;
                toAminoMsg(message: _104.ParameterChangeProposal): _104.ParameterChangeProposalAminoMsg;
                fromProtoMsg(message: _104.ParameterChangeProposalProtoMsg): _104.ParameterChangeProposal;
                toProto(message: _104.ParameterChangeProposal): Uint8Array;
                toProtoMsg(message: _104.ParameterChangeProposal): _104.ParameterChangeProposalProtoMsg;
            };
            ParamChange: {
                typeUrl: string;
                encode(message: _104.ParamChange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _104.ParamChange;
                fromJSON(object: any): _104.ParamChange;
                toJSON(message: _104.ParamChange): unknown;
                fromPartial(object: Partial<_104.ParamChange>): _104.ParamChange;
                fromAmino(object: _104.ParamChangeAmino): _104.ParamChange;
                toAmino(message: _104.ParamChange): _104.ParamChangeAmino;
                fromAminoMsg(object: _104.ParamChangeAminoMsg): _104.ParamChange;
                toAminoMsg(message: _104.ParamChange): _104.ParamChangeAminoMsg;
                fromProtoMsg(message: _104.ParamChangeProtoMsg): _104.ParamChange;
                toProto(message: _104.ParamChange): Uint8Array;
                toProtoMsg(message: _104.ParamChange): _104.ParamChangeProtoMsg;
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
                encode(_: _107.FileDescriptorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _107.FileDescriptorsRequest;
                fromJSON(_: any): _107.FileDescriptorsRequest;
                toJSON(_: _107.FileDescriptorsRequest): unknown;
                fromPartial(_: Partial<_107.FileDescriptorsRequest>): _107.FileDescriptorsRequest;
                fromAmino(_: _107.FileDescriptorsRequestAmino): _107.FileDescriptorsRequest;
                toAmino(_: _107.FileDescriptorsRequest): _107.FileDescriptorsRequestAmino;
                fromAminoMsg(object: _107.FileDescriptorsRequestAminoMsg): _107.FileDescriptorsRequest;
                toAminoMsg(message: _107.FileDescriptorsRequest): _107.FileDescriptorsRequestAminoMsg;
                fromProtoMsg(message: _107.FileDescriptorsRequestProtoMsg): _107.FileDescriptorsRequest;
                toProto(message: _107.FileDescriptorsRequest): Uint8Array;
                toProtoMsg(message: _107.FileDescriptorsRequest): _107.FileDescriptorsRequestProtoMsg;
            };
            FileDescriptorsResponse: {
                typeUrl: string;
                encode(message: _107.FileDescriptorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _107.FileDescriptorsResponse;
                fromJSON(object: any): _107.FileDescriptorsResponse;
                toJSON(message: _107.FileDescriptorsResponse): unknown;
                fromPartial(object: Partial<_107.FileDescriptorsResponse>): _107.FileDescriptorsResponse;
                fromAmino(object: _107.FileDescriptorsResponseAmino): _107.FileDescriptorsResponse;
                toAmino(message: _107.FileDescriptorsResponse): _107.FileDescriptorsResponseAmino;
                fromAminoMsg(object: _107.FileDescriptorsResponseAminoMsg): _107.FileDescriptorsResponse;
                toAminoMsg(message: _107.FileDescriptorsResponse): _107.FileDescriptorsResponseAminoMsg;
                fromProtoMsg(message: _107.FileDescriptorsResponseProtoMsg): _107.FileDescriptorsResponse;
                toProto(message: _107.FileDescriptorsResponse): Uint8Array;
                toProtoMsg(message: _107.FileDescriptorsResponse): _107.FileDescriptorsResponseProtoMsg;
            };
        };
    }
    namespace slashing {
        namespace module {
            const v1: {
                protobufPackage: "cosmos.slashing.module.v1";
                Module: {
                    typeUrl: string;
                    encode(message: _108.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _108.Module;
                    fromJSON(object: any): _108.Module;
                    toJSON(message: _108.Module): unknown;
                    fromPartial(object: Partial<_108.Module>): _108.Module;
                    fromAmino(object: _108.ModuleAmino): _108.Module;
                    toAmino(message: _108.Module): _108.ModuleAmino;
                    fromAminoMsg(object: _108.ModuleAminoMsg): _108.Module;
                    toAminoMsg(message: _108.Module): _108.ModuleAminoMsg;
                    fromProtoMsg(message: _108.ModuleProtoMsg): _108.Module;
                    toProto(message: _108.Module): Uint8Array;
                    toProtoMsg(message: _108.Module): _108.ModuleProtoMsg;
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
                    encode(message: _109.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _109.Module;
                    fromJSON(object: any): _109.Module;
                    toJSON(message: _109.Module): unknown;
                    fromPartial(object: Partial<_109.Module>): _109.Module;
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
            Msg: typeof _275.Msg;
            Query: typeof _260.Query;
            QueryClientImpl: typeof _260.QueryClientImpl;
            LCDQueryClient: typeof _241.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _114.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _114.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _114.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _114.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _114.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUnbondingDelegation(value: _114.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _114.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _114.MsgCreateValidator): {
                        typeUrl: string;
                        value: _114.MsgCreateValidator;
                    };
                    editValidator(value: _114.MsgEditValidator): {
                        typeUrl: string;
                        value: _114.MsgEditValidator;
                    };
                    delegate(value: _114.MsgDelegate): {
                        typeUrl: string;
                        value: _114.MsgDelegate;
                    };
                    beginRedelegate(value: _114.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _114.MsgBeginRedelegate;
                    };
                    undelegate(value: _114.MsgUndelegate): {
                        typeUrl: string;
                        value: _114.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _114.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _114.MsgCancelUnbondingDelegation;
                    };
                    updateParams(value: _114.MsgUpdateParams): {
                        typeUrl: string;
                        value: _114.MsgUpdateParams;
                    };
                };
                toJSON: {
                    createValidator(value: _114.MsgCreateValidator): {
                        typeUrl: string;
                        value: unknown;
                    };
                    editValidator(value: _114.MsgEditValidator): {
                        typeUrl: string;
                        value: unknown;
                    };
                    delegate(value: _114.MsgDelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                    beginRedelegate(value: _114.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                    undelegate(value: _114.MsgUndelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                    cancelUnbondingDelegation(value: _114.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateParams(value: _114.MsgUpdateParams): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _114.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _114.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _114.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _114.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _114.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: any): {
                        typeUrl: string;
                        value: _114.MsgCancelUnbondingDelegation;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _114.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    createValidator(value: _114.MsgCreateValidator): {
                        typeUrl: string;
                        value: _114.MsgCreateValidator;
                    };
                    editValidator(value: _114.MsgEditValidator): {
                        typeUrl: string;
                        value: _114.MsgEditValidator;
                    };
                    delegate(value: _114.MsgDelegate): {
                        typeUrl: string;
                        value: _114.MsgDelegate;
                    };
                    beginRedelegate(value: _114.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _114.MsgBeginRedelegate;
                    };
                    undelegate(value: _114.MsgUndelegate): {
                        typeUrl: string;
                        value: _114.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _114.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _114.MsgCancelUnbondingDelegation;
                    };
                    updateParams(value: _114.MsgUpdateParams): {
                        typeUrl: string;
                        value: _114.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: (message: _114.MsgCreateValidator) => _114.MsgCreateValidatorAmino;
                    fromAmino: (object: _114.MsgCreateValidatorAmino) => _114.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: (message: _114.MsgEditValidator) => _114.MsgEditValidatorAmino;
                    fromAmino: (object: _114.MsgEditValidatorAmino) => _114.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: (message: _114.MsgDelegate) => _114.MsgDelegateAmino;
                    fromAmino: (object: _114.MsgDelegateAmino) => _114.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: (message: _114.MsgBeginRedelegate) => _114.MsgBeginRedelegateAmino;
                    fromAmino: (object: _114.MsgBeginRedelegateAmino) => _114.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: (message: _114.MsgUndelegate) => _114.MsgUndelegateAmino;
                    fromAmino: (object: _114.MsgUndelegateAmino) => _114.MsgUndelegate;
                };
                "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation": {
                    aminoType: string;
                    toAmino: (message: _114.MsgCancelUnbondingDelegation) => _114.MsgCancelUnbondingDelegationAmino;
                    fromAmino: (object: _114.MsgCancelUnbondingDelegationAmino) => _114.MsgCancelUnbondingDelegation;
                };
                "/cosmos.staking.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _114.MsgUpdateParams) => _114.MsgUpdateParamsAmino;
                    fromAmino: (object: _114.MsgUpdateParamsAmino) => _114.MsgUpdateParams;
                };
            };
            protobufPackage: "cosmos.staking.v1beta1";
            MsgCreateValidator: {
                typeUrl: string;
                encode(message: _114.MsgCreateValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _114.MsgCreateValidator;
                fromJSON(object: any): _114.MsgCreateValidator;
                toJSON(message: _114.MsgCreateValidator): unknown;
                fromPartial(object: Partial<_114.MsgCreateValidator>): _114.MsgCreateValidator;
                fromAmino(object: _114.MsgCreateValidatorAmino): _114.MsgCreateValidator;
                toAmino(message: _114.MsgCreateValidator): _114.MsgCreateValidatorAmino;
                fromAminoMsg(object: _114.MsgCreateValidatorAminoMsg): _114.MsgCreateValidator;
                toAminoMsg(message: _114.MsgCreateValidator): _114.MsgCreateValidatorAminoMsg;
                fromProtoMsg(message: _114.MsgCreateValidatorProtoMsg): _114.MsgCreateValidator;
                toProto(message: _114.MsgCreateValidator): Uint8Array;
                toProtoMsg(message: _114.MsgCreateValidator): _114.MsgCreateValidatorProtoMsg;
            };
            MsgCreateValidatorResponse: {
                typeUrl: string;
                encode(_: _114.MsgCreateValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _114.MsgCreateValidatorResponse;
                fromJSON(_: any): _114.MsgCreateValidatorResponse;
                toJSON(_: _114.MsgCreateValidatorResponse): unknown;
                fromPartial(_: Partial<_114.MsgCreateValidatorResponse>): _114.MsgCreateValidatorResponse;
                fromAmino(_: _114.MsgCreateValidatorResponseAmino): _114.MsgCreateValidatorResponse;
                toAmino(_: _114.MsgCreateValidatorResponse): _114.MsgCreateValidatorResponseAmino;
                fromAminoMsg(object: _114.MsgCreateValidatorResponseAminoMsg): _114.MsgCreateValidatorResponse;
                toAminoMsg(message: _114.MsgCreateValidatorResponse): _114.MsgCreateValidatorResponseAminoMsg;
                fromProtoMsg(message: _114.MsgCreateValidatorResponseProtoMsg): _114.MsgCreateValidatorResponse;
                toProto(message: _114.MsgCreateValidatorResponse): Uint8Array;
                toProtoMsg(message: _114.MsgCreateValidatorResponse): _114.MsgCreateValidatorResponseProtoMsg;
            };
            MsgEditValidator: {
                typeUrl: string;
                encode(message: _114.MsgEditValidator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _114.MsgEditValidator;
                fromJSON(object: any): _114.MsgEditValidator;
                toJSON(message: _114.MsgEditValidator): unknown;
                fromPartial(object: Partial<_114.MsgEditValidator>): _114.MsgEditValidator;
                fromAmino(object: _114.MsgEditValidatorAmino): _114.MsgEditValidator;
                toAmino(message: _114.MsgEditValidator): _114.MsgEditValidatorAmino;
                fromAminoMsg(object: _114.MsgEditValidatorAminoMsg): _114.MsgEditValidator;
                toAminoMsg(message: _114.MsgEditValidator): _114.MsgEditValidatorAminoMsg;
                fromProtoMsg(message: _114.MsgEditValidatorProtoMsg): _114.MsgEditValidator;
                toProto(message: _114.MsgEditValidator): Uint8Array;
                toProtoMsg(message: _114.MsgEditValidator): _114.MsgEditValidatorProtoMsg;
            };
            MsgEditValidatorResponse: {
                typeUrl: string;
                encode(_: _114.MsgEditValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _114.MsgEditValidatorResponse;
                fromJSON(_: any): _114.MsgEditValidatorResponse;
                toJSON(_: _114.MsgEditValidatorResponse): unknown;
                fromPartial(_: Partial<_114.MsgEditValidatorResponse>): _114.MsgEditValidatorResponse;
                fromAmino(_: _114.MsgEditValidatorResponseAmino): _114.MsgEditValidatorResponse;
                toAmino(_: _114.MsgEditValidatorResponse): _114.MsgEditValidatorResponseAmino;
                fromAminoMsg(object: _114.MsgEditValidatorResponseAminoMsg): _114.MsgEditValidatorResponse;
                toAminoMsg(message: _114.MsgEditValidatorResponse): _114.MsgEditValidatorResponseAminoMsg;
                fromProtoMsg(message: _114.MsgEditValidatorResponseProtoMsg): _114.MsgEditValidatorResponse;
                toProto(message: _114.MsgEditValidatorResponse): Uint8Array;
                toProtoMsg(message: _114.MsgEditValidatorResponse): _114.MsgEditValidatorResponseProtoMsg;
            };
            MsgDelegate: {
                typeUrl: string;
                encode(message: _114.MsgDelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _114.MsgDelegate;
                fromJSON(object: any): _114.MsgDelegate;
                toJSON(message: _114.MsgDelegate): unknown;
                fromPartial(object: Partial<_114.MsgDelegate>): _114.MsgDelegate;
                fromAmino(object: _114.MsgDelegateAmino): _114.MsgDelegate;
                toAmino(message: _114.MsgDelegate): _114.MsgDelegateAmino;
                fromAminoMsg(object: _114.MsgDelegateAminoMsg): _114.MsgDelegate;
                toAminoMsg(message: _114.MsgDelegate): _114.MsgDelegateAminoMsg;
                fromProtoMsg(message: _114.MsgDelegateProtoMsg): _114.MsgDelegate;
                toProto(message: _114.MsgDelegate): Uint8Array;
                toProtoMsg(message: _114.MsgDelegate): _114.MsgDelegateProtoMsg;
            };
            MsgDelegateResponse: {
                typeUrl: string;
                encode(_: _114.MsgDelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _114.MsgDelegateResponse;
                fromJSON(_: any): _114.MsgDelegateResponse;
                toJSON(_: _114.MsgDelegateResponse): unknown;
                fromPartial(_: Partial<_114.MsgDelegateResponse>): _114.MsgDelegateResponse;
                fromAmino(_: _114.MsgDelegateResponseAmino): _114.MsgDelegateResponse;
                toAmino(_: _114.MsgDelegateResponse): _114.MsgDelegateResponseAmino;
                fromAminoMsg(object: _114.MsgDelegateResponseAminoMsg): _114.MsgDelegateResponse;
                toAminoMsg(message: _114.MsgDelegateResponse): _114.MsgDelegateResponseAminoMsg;
                fromProtoMsg(message: _114.MsgDelegateResponseProtoMsg): _114.MsgDelegateResponse;
                toProto(message: _114.MsgDelegateResponse): Uint8Array;
                toProtoMsg(message: _114.MsgDelegateResponse): _114.MsgDelegateResponseProtoMsg;
            };
            MsgBeginRedelegate: {
                typeUrl: string;
                encode(message: _114.MsgBeginRedelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _114.MsgBeginRedelegate;
                fromJSON(object: any): _114.MsgBeginRedelegate;
                toJSON(message: _114.MsgBeginRedelegate): unknown;
                fromPartial(object: Partial<_114.MsgBeginRedelegate>): _114.MsgBeginRedelegate;
                fromAmino(object: _114.MsgBeginRedelegateAmino): _114.MsgBeginRedelegate;
                toAmino(message: _114.MsgBeginRedelegate): _114.MsgBeginRedelegateAmino;
                fromAminoMsg(object: _114.MsgBeginRedelegateAminoMsg): _114.MsgBeginRedelegate;
                toAminoMsg(message: _114.MsgBeginRedelegate): _114.MsgBeginRedelegateAminoMsg;
                fromProtoMsg(message: _114.MsgBeginRedelegateProtoMsg): _114.MsgBeginRedelegate;
                toProto(message: _114.MsgBeginRedelegate): Uint8Array;
                toProtoMsg(message: _114.MsgBeginRedelegate): _114.MsgBeginRedelegateProtoMsg;
            };
            MsgBeginRedelegateResponse: {
                typeUrl: string;
                encode(message: _114.MsgBeginRedelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _114.MsgBeginRedelegateResponse;
                fromJSON(object: any): _114.MsgBeginRedelegateResponse;
                toJSON(message: _114.MsgBeginRedelegateResponse): unknown;
                fromPartial(object: Partial<_114.MsgBeginRedelegateResponse>): _114.MsgBeginRedelegateResponse;
                fromAmino(object: _114.MsgBeginRedelegateResponseAmino): _114.MsgBeginRedelegateResponse;
                toAmino(message: _114.MsgBeginRedelegateResponse): _114.MsgBeginRedelegateResponseAmino;
                fromAminoMsg(object: _114.MsgBeginRedelegateResponseAminoMsg): _114.MsgBeginRedelegateResponse;
                toAminoMsg(message: _114.MsgBeginRedelegateResponse): _114.MsgBeginRedelegateResponseAminoMsg;
                fromProtoMsg(message: _114.MsgBeginRedelegateResponseProtoMsg): _114.MsgBeginRedelegateResponse;
                toProto(message: _114.MsgBeginRedelegateResponse): Uint8Array;
                toProtoMsg(message: _114.MsgBeginRedelegateResponse): _114.MsgBeginRedelegateResponseProtoMsg;
            };
            MsgUndelegate: {
                typeUrl: string;
                encode(message: _114.MsgUndelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _114.MsgUndelegate;
                fromJSON(object: any): _114.MsgUndelegate;
                toJSON(message: _114.MsgUndelegate): unknown;
                fromPartial(object: Partial<_114.MsgUndelegate>): _114.MsgUndelegate;
                fromAmino(object: _114.MsgUndelegateAmino): _114.MsgUndelegate;
                toAmino(message: _114.MsgUndelegate): _114.MsgUndelegateAmino;
                fromAminoMsg(object: _114.MsgUndelegateAminoMsg): _114.MsgUndelegate;
                toAminoMsg(message: _114.MsgUndelegate): _114.MsgUndelegateAminoMsg;
                fromProtoMsg(message: _114.MsgUndelegateProtoMsg): _114.MsgUndelegate;
                toProto(message: _114.MsgUndelegate): Uint8Array;
                toProtoMsg(message: _114.MsgUndelegate): _114.MsgUndelegateProtoMsg;
            };
            MsgUndelegateResponse: {
                typeUrl: string;
                encode(message: _114.MsgUndelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _114.MsgUndelegateResponse;
                fromJSON(object: any): _114.MsgUndelegateResponse;
                toJSON(message: _114.MsgUndelegateResponse): unknown;
                fromPartial(object: Partial<_114.MsgUndelegateResponse>): _114.MsgUndelegateResponse;
                fromAmino(object: _114.MsgUndelegateResponseAmino): _114.MsgUndelegateResponse;
                toAmino(message: _114.MsgUndelegateResponse): _114.MsgUndelegateResponseAmino;
                fromAminoMsg(object: _114.MsgUndelegateResponseAminoMsg): _114.MsgUndelegateResponse;
                toAminoMsg(message: _114.MsgUndelegateResponse): _114.MsgUndelegateResponseAminoMsg;
                fromProtoMsg(message: _114.MsgUndelegateResponseProtoMsg): _114.MsgUndelegateResponse;
                toProto(message: _114.MsgUndelegateResponse): Uint8Array;
                toProtoMsg(message: _114.MsgUndelegateResponse): _114.MsgUndelegateResponseProtoMsg;
            };
            MsgCancelUnbondingDelegation: {
                typeUrl: string;
                encode(message: _114.MsgCancelUnbondingDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _114.MsgCancelUnbondingDelegation;
                fromJSON(object: any): _114.MsgCancelUnbondingDelegation;
                toJSON(message: _114.MsgCancelUnbondingDelegation): unknown;
                fromPartial(object: Partial<_114.MsgCancelUnbondingDelegation>): _114.MsgCancelUnbondingDelegation;
                fromAmino(object: _114.MsgCancelUnbondingDelegationAmino): _114.MsgCancelUnbondingDelegation;
                toAmino(message: _114.MsgCancelUnbondingDelegation): _114.MsgCancelUnbondingDelegationAmino;
                fromAminoMsg(object: _114.MsgCancelUnbondingDelegationAminoMsg): _114.MsgCancelUnbondingDelegation;
                toAminoMsg(message: _114.MsgCancelUnbondingDelegation): _114.MsgCancelUnbondingDelegationAminoMsg;
                fromProtoMsg(message: _114.MsgCancelUnbondingDelegationProtoMsg): _114.MsgCancelUnbondingDelegation;
                toProto(message: _114.MsgCancelUnbondingDelegation): Uint8Array;
                toProtoMsg(message: _114.MsgCancelUnbondingDelegation): _114.MsgCancelUnbondingDelegationProtoMsg;
            };
            MsgCancelUnbondingDelegationResponse: {
                typeUrl: string;
                encode(_: _114.MsgCancelUnbondingDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _114.MsgCancelUnbondingDelegationResponse;
                fromJSON(_: any): _114.MsgCancelUnbondingDelegationResponse;
                toJSON(_: _114.MsgCancelUnbondingDelegationResponse): unknown;
                fromPartial(_: Partial<_114.MsgCancelUnbondingDelegationResponse>): _114.MsgCancelUnbondingDelegationResponse;
                fromAmino(_: _114.MsgCancelUnbondingDelegationResponseAmino): _114.MsgCancelUnbondingDelegationResponse;
                toAmino(_: _114.MsgCancelUnbondingDelegationResponse): _114.MsgCancelUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _114.MsgCancelUnbondingDelegationResponseAminoMsg): _114.MsgCancelUnbondingDelegationResponse;
                toAminoMsg(message: _114.MsgCancelUnbondingDelegationResponse): _114.MsgCancelUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _114.MsgCancelUnbondingDelegationResponseProtoMsg): _114.MsgCancelUnbondingDelegationResponse;
                toProto(message: _114.MsgCancelUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _114.MsgCancelUnbondingDelegationResponse): _114.MsgCancelUnbondingDelegationResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _114.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _114.MsgUpdateParams;
                fromJSON(object: any): _114.MsgUpdateParams;
                toJSON(message: _114.MsgUpdateParams): unknown;
                fromPartial(object: Partial<_114.MsgUpdateParams>): _114.MsgUpdateParams;
                fromAmino(object: _114.MsgUpdateParamsAmino): _114.MsgUpdateParams;
                toAmino(message: _114.MsgUpdateParams): _114.MsgUpdateParamsAmino;
                fromAminoMsg(object: _114.MsgUpdateParamsAminoMsg): _114.MsgUpdateParams;
                toAminoMsg(message: _114.MsgUpdateParams): _114.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _114.MsgUpdateParamsProtoMsg): _114.MsgUpdateParams;
                toProto(message: _114.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _114.MsgUpdateParams): _114.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _114.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _114.MsgUpdateParamsResponse;
                fromJSON(_: any): _114.MsgUpdateParamsResponse;
                toJSON(_: _114.MsgUpdateParamsResponse): unknown;
                fromPartial(_: Partial<_114.MsgUpdateParamsResponse>): _114.MsgUpdateParamsResponse;
                fromAmino(_: _114.MsgUpdateParamsResponseAmino): _114.MsgUpdateParamsResponse;
                toAmino(_: _114.MsgUpdateParamsResponse): _114.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _114.MsgUpdateParamsResponseAminoMsg): _114.MsgUpdateParamsResponse;
                toAminoMsg(message: _114.MsgUpdateParamsResponse): _114.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _114.MsgUpdateParamsResponseProtoMsg): _114.MsgUpdateParamsResponse;
                toProto(message: _114.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _114.MsgUpdateParamsResponse): _114.MsgUpdateParamsResponseProtoMsg;
            };
            Cosmos_cryptoPubKey_InterfaceDecoder: (input: import("..").BinaryReader | Uint8Array) => import("../google/protobuf/any").Any;
            Cosmos_cryptoPubKey_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("cosmjs-types/google/protobuf/any").Any;
            Cosmos_cryptoPubKey_ToAmino: (content: import("../google/protobuf/any").Any) => import("@cosmjs/amino").Pubkey;
            bondStatusFromJSON(object: any): _113.BondStatus;
            bondStatusToJSON(object: _113.BondStatus): string;
            infractionFromJSON(object: any): _113.Infraction;
            infractionToJSON(object: _113.Infraction): string;
            BondStatus: typeof _113.BondStatus;
            BondStatusSDKType: typeof _113.BondStatus;
            BondStatusAmino: typeof _113.BondStatus;
            Infraction: typeof _113.Infraction;
            InfractionSDKType: typeof _113.Infraction;
            InfractionAmino: typeof _113.Infraction;
            HistoricalInfo: {
                typeUrl: string;
                encode(message: _113.HistoricalInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _113.HistoricalInfo;
                fromJSON(object: any): _113.HistoricalInfo;
                toJSON(message: _113.HistoricalInfo): unknown;
                fromPartial(object: Partial<_113.HistoricalInfo>): _113.HistoricalInfo;
                fromAmino(object: _113.HistoricalInfoAmino): _113.HistoricalInfo;
                toAmino(message: _113.HistoricalInfo): _113.HistoricalInfoAmino;
                fromAminoMsg(object: _113.HistoricalInfoAminoMsg): _113.HistoricalInfo;
                toAminoMsg(message: _113.HistoricalInfo): _113.HistoricalInfoAminoMsg;
                fromProtoMsg(message: _113.HistoricalInfoProtoMsg): _113.HistoricalInfo;
                toProto(message: _113.HistoricalInfo): Uint8Array;
                toProtoMsg(message: _113.HistoricalInfo): _113.HistoricalInfoProtoMsg;
            };
            CommissionRates: {
                typeUrl: string;
                encode(message: _113.CommissionRates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _113.CommissionRates;
                fromJSON(object: any): _113.CommissionRates;
                toJSON(message: _113.CommissionRates): unknown;
                fromPartial(object: Partial<_113.CommissionRates>): _113.CommissionRates;
                fromAmino(object: _113.CommissionRatesAmino): _113.CommissionRates;
                toAmino(message: _113.CommissionRates): _113.CommissionRatesAmino;
                fromAminoMsg(object: _113.CommissionRatesAminoMsg): _113.CommissionRates;
                toAminoMsg(message: _113.CommissionRates): _113.CommissionRatesAminoMsg;
                fromProtoMsg(message: _113.CommissionRatesProtoMsg): _113.CommissionRates;
                toProto(message: _113.CommissionRates): Uint8Array;
                toProtoMsg(message: _113.CommissionRates): _113.CommissionRatesProtoMsg;
            };
            Commission: {
                typeUrl: string;
                encode(message: _113.Commission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _113.Commission;
                fromJSON(object: any): _113.Commission;
                toJSON(message: _113.Commission): unknown;
                fromPartial(object: Partial<_113.Commission>): _113.Commission;
                fromAmino(object: _113.CommissionAmino): _113.Commission;
                toAmino(message: _113.Commission): _113.CommissionAmino;
                fromAminoMsg(object: _113.CommissionAminoMsg): _113.Commission;
                toAminoMsg(message: _113.Commission): _113.CommissionAminoMsg;
                fromProtoMsg(message: _113.CommissionProtoMsg): _113.Commission;
                toProto(message: _113.Commission): Uint8Array;
                toProtoMsg(message: _113.Commission): _113.CommissionProtoMsg;
            };
            Description: {
                typeUrl: string;
                encode(message: _113.Description, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _113.Description;
                fromJSON(object: any): _113.Description;
                toJSON(message: _113.Description): unknown;
                fromPartial(object: Partial<_113.Description>): _113.Description;
                fromAmino(object: _113.DescriptionAmino): _113.Description;
                toAmino(message: _113.Description): _113.DescriptionAmino;
                fromAminoMsg(object: _113.DescriptionAminoMsg): _113.Description;
                toAminoMsg(message: _113.Description): _113.DescriptionAminoMsg;
                fromProtoMsg(message: _113.DescriptionProtoMsg): _113.Description;
                toProto(message: _113.Description): Uint8Array;
                toProtoMsg(message: _113.Description): _113.DescriptionProtoMsg;
            };
            Validator: {
                typeUrl: string;
                encode(message: _113.Validator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _113.Validator;
                fromJSON(object: any): _113.Validator;
                toJSON(message: _113.Validator): unknown;
                fromPartial(object: Partial<_113.Validator>): _113.Validator;
                fromAmino(object: _113.ValidatorAmino): _113.Validator;
                toAmino(message: _113.Validator): _113.ValidatorAmino;
                fromAminoMsg(object: _113.ValidatorAminoMsg): _113.Validator;
                toAminoMsg(message: _113.Validator): _113.ValidatorAminoMsg;
                fromProtoMsg(message: _113.ValidatorProtoMsg): _113.Validator;
                toProto(message: _113.Validator): Uint8Array;
                toProtoMsg(message: _113.Validator): _113.ValidatorProtoMsg;
            };
            ValAddresses: {
                typeUrl: string;
                encode(message: _113.ValAddresses, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _113.ValAddresses;
                fromJSON(object: any): _113.ValAddresses;
                toJSON(message: _113.ValAddresses): unknown;
                fromPartial(object: Partial<_113.ValAddresses>): _113.ValAddresses;
                fromAmino(object: _113.ValAddressesAmino): _113.ValAddresses;
                toAmino(message: _113.ValAddresses): _113.ValAddressesAmino;
                fromAminoMsg(object: _113.ValAddressesAminoMsg): _113.ValAddresses;
                toAminoMsg(message: _113.ValAddresses): _113.ValAddressesAminoMsg;
                fromProtoMsg(message: _113.ValAddressesProtoMsg): _113.ValAddresses;
                toProto(message: _113.ValAddresses): Uint8Array;
                toProtoMsg(message: _113.ValAddresses): _113.ValAddressesProtoMsg;
            };
            DVPair: {
                typeUrl: string;
                encode(message: _113.DVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _113.DVPair;
                fromJSON(object: any): _113.DVPair;
                toJSON(message: _113.DVPair): unknown;
                fromPartial(object: Partial<_113.DVPair>): _113.DVPair;
                fromAmino(object: _113.DVPairAmino): _113.DVPair;
                toAmino(message: _113.DVPair): _113.DVPairAmino;
                fromAminoMsg(object: _113.DVPairAminoMsg): _113.DVPair;
                toAminoMsg(message: _113.DVPair): _113.DVPairAminoMsg;
                fromProtoMsg(message: _113.DVPairProtoMsg): _113.DVPair;
                toProto(message: _113.DVPair): Uint8Array;
                toProtoMsg(message: _113.DVPair): _113.DVPairProtoMsg;
            };
            DVPairs: {
                typeUrl: string;
                encode(message: _113.DVPairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _113.DVPairs;
                fromJSON(object: any): _113.DVPairs;
                toJSON(message: _113.DVPairs): unknown;
                fromPartial(object: Partial<_113.DVPairs>): _113.DVPairs;
                fromAmino(object: _113.DVPairsAmino): _113.DVPairs;
                toAmino(message: _113.DVPairs): _113.DVPairsAmino;
                fromAminoMsg(object: _113.DVPairsAminoMsg): _113.DVPairs;
                toAminoMsg(message: _113.DVPairs): _113.DVPairsAminoMsg;
                fromProtoMsg(message: _113.DVPairsProtoMsg): _113.DVPairs;
                toProto(message: _113.DVPairs): Uint8Array;
                toProtoMsg(message: _113.DVPairs): _113.DVPairsProtoMsg;
            };
            DVVTriplet: {
                typeUrl: string;
                encode(message: _113.DVVTriplet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _113.DVVTriplet;
                fromJSON(object: any): _113.DVVTriplet;
                toJSON(message: _113.DVVTriplet): unknown;
                fromPartial(object: Partial<_113.DVVTriplet>): _113.DVVTriplet;
                fromAmino(object: _113.DVVTripletAmino): _113.DVVTriplet;
                toAmino(message: _113.DVVTriplet): _113.DVVTripletAmino;
                fromAminoMsg(object: _113.DVVTripletAminoMsg): _113.DVVTriplet;
                toAminoMsg(message: _113.DVVTriplet): _113.DVVTripletAminoMsg;
                fromProtoMsg(message: _113.DVVTripletProtoMsg): _113.DVVTriplet;
                toProto(message: _113.DVVTriplet): Uint8Array;
                toProtoMsg(message: _113.DVVTriplet): _113.DVVTripletProtoMsg;
            };
            DVVTriplets: {
                typeUrl: string;
                encode(message: _113.DVVTriplets, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _113.DVVTriplets;
                fromJSON(object: any): _113.DVVTriplets;
                toJSON(message: _113.DVVTriplets): unknown;
                fromPartial(object: Partial<_113.DVVTriplets>): _113.DVVTriplets;
                fromAmino(object: _113.DVVTripletsAmino): _113.DVVTriplets;
                toAmino(message: _113.DVVTriplets): _113.DVVTripletsAmino;
                fromAminoMsg(object: _113.DVVTripletsAminoMsg): _113.DVVTriplets;
                toAminoMsg(message: _113.DVVTriplets): _113.DVVTripletsAminoMsg;
                fromProtoMsg(message: _113.DVVTripletsProtoMsg): _113.DVVTriplets;
                toProto(message: _113.DVVTriplets): Uint8Array;
                toProtoMsg(message: _113.DVVTriplets): _113.DVVTripletsProtoMsg;
            };
            Delegation: {
                typeUrl: string;
                encode(message: _113.Delegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _113.Delegation;
                fromJSON(object: any): _113.Delegation;
                toJSON(message: _113.Delegation): unknown;
                fromPartial(object: Partial<_113.Delegation>): _113.Delegation;
                fromAmino(object: _113.DelegationAmino): _113.Delegation;
                toAmino(message: _113.Delegation): _113.DelegationAmino;
                fromAminoMsg(object: _113.DelegationAminoMsg): _113.Delegation;
                toAminoMsg(message: _113.Delegation): _113.DelegationAminoMsg;
                fromProtoMsg(message: _113.DelegationProtoMsg): _113.Delegation;
                toProto(message: _113.Delegation): Uint8Array;
                toProtoMsg(message: _113.Delegation): _113.DelegationProtoMsg;
            };
            UnbondingDelegation: {
                typeUrl: string;
                encode(message: _113.UnbondingDelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _113.UnbondingDelegation;
                fromJSON(object: any): _113.UnbondingDelegation;
                toJSON(message: _113.UnbondingDelegation): unknown;
                fromPartial(object: Partial<_113.UnbondingDelegation>): _113.UnbondingDelegation;
                fromAmino(object: _113.UnbondingDelegationAmino): _113.UnbondingDelegation;
                toAmino(message: _113.UnbondingDelegation): _113.UnbondingDelegationAmino;
                fromAminoMsg(object: _113.UnbondingDelegationAminoMsg): _113.UnbondingDelegation;
                toAminoMsg(message: _113.UnbondingDelegation): _113.UnbondingDelegationAminoMsg;
                fromProtoMsg(message: _113.UnbondingDelegationProtoMsg): _113.UnbondingDelegation;
                toProto(message: _113.UnbondingDelegation): Uint8Array;
                toProtoMsg(message: _113.UnbondingDelegation): _113.UnbondingDelegationProtoMsg;
            };
            UnbondingDelegationEntry: {
                typeUrl: string;
                encode(message: _113.UnbondingDelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _113.UnbondingDelegationEntry;
                fromJSON(object: any): _113.UnbondingDelegationEntry;
                toJSON(message: _113.UnbondingDelegationEntry): unknown;
                fromPartial(object: Partial<_113.UnbondingDelegationEntry>): _113.UnbondingDelegationEntry;
                fromAmino(object: _113.UnbondingDelegationEntryAmino): _113.UnbondingDelegationEntry;
                toAmino(message: _113.UnbondingDelegationEntry): _113.UnbondingDelegationEntryAmino;
                fromAminoMsg(object: _113.UnbondingDelegationEntryAminoMsg): _113.UnbondingDelegationEntry;
                toAminoMsg(message: _113.UnbondingDelegationEntry): _113.UnbondingDelegationEntryAminoMsg;
                fromProtoMsg(message: _113.UnbondingDelegationEntryProtoMsg): _113.UnbondingDelegationEntry;
                toProto(message: _113.UnbondingDelegationEntry): Uint8Array;
                toProtoMsg(message: _113.UnbondingDelegationEntry): _113.UnbondingDelegationEntryProtoMsg;
            };
            RedelegationEntry: {
                typeUrl: string;
                encode(message: _113.RedelegationEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _113.RedelegationEntry;
                fromJSON(object: any): _113.RedelegationEntry;
                toJSON(message: _113.RedelegationEntry): unknown;
                fromPartial(object: Partial<_113.RedelegationEntry>): _113.RedelegationEntry;
                fromAmino(object: _113.RedelegationEntryAmino): _113.RedelegationEntry;
                toAmino(message: _113.RedelegationEntry): _113.RedelegationEntryAmino;
                fromAminoMsg(object: _113.RedelegationEntryAminoMsg): _113.RedelegationEntry;
                toAminoMsg(message: _113.RedelegationEntry): _113.RedelegationEntryAminoMsg;
                fromProtoMsg(message: _113.RedelegationEntryProtoMsg): _113.RedelegationEntry;
                toProto(message: _113.RedelegationEntry): Uint8Array;
                toProtoMsg(message: _113.RedelegationEntry): _113.RedelegationEntryProtoMsg;
            };
            Redelegation: {
                typeUrl: string;
                encode(message: _113.Redelegation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _113.Redelegation;
                fromJSON(object: any): _113.Redelegation;
                toJSON(message: _113.Redelegation): unknown;
                fromPartial(object: Partial<_113.Redelegation>): _113.Redelegation;
                fromAmino(object: _113.RedelegationAmino): _113.Redelegation;
                toAmino(message: _113.Redelegation): _113.RedelegationAmino;
                fromAminoMsg(object: _113.RedelegationAminoMsg): _113.Redelegation;
                toAminoMsg(message: _113.Redelegation): _113.RedelegationAminoMsg;
                fromProtoMsg(message: _113.RedelegationProtoMsg): _113.Redelegation;
                toProto(message: _113.Redelegation): Uint8Array;
                toProtoMsg(message: _113.Redelegation): _113.RedelegationProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _113.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _113.Params;
                fromJSON(object: any): _113.Params;
                toJSON(message: _113.Params): unknown;
                fromPartial(object: Partial<_113.Params>): _113.Params;
                fromAmino(object: _113.ParamsAmino): _113.Params;
                toAmino(message: _113.Params): _113.ParamsAmino;
                fromAminoMsg(object: _113.ParamsAminoMsg): _113.Params;
                toAminoMsg(message: _113.Params): _113.ParamsAminoMsg;
                fromProtoMsg(message: _113.ParamsProtoMsg): _113.Params;
                toProto(message: _113.Params): Uint8Array;
                toProtoMsg(message: _113.Params): _113.ParamsProtoMsg;
            };
            DelegationResponse: {
                typeUrl: string;
                encode(message: _113.DelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _113.DelegationResponse;
                fromJSON(object: any): _113.DelegationResponse;
                toJSON(message: _113.DelegationResponse): unknown;
                fromPartial(object: Partial<_113.DelegationResponse>): _113.DelegationResponse;
                fromAmino(object: _113.DelegationResponseAmino): _113.DelegationResponse;
                toAmino(message: _113.DelegationResponse): _113.DelegationResponseAmino;
                fromAminoMsg(object: _113.DelegationResponseAminoMsg): _113.DelegationResponse;
                toAminoMsg(message: _113.DelegationResponse): _113.DelegationResponseAminoMsg;
                fromProtoMsg(message: _113.DelegationResponseProtoMsg): _113.DelegationResponse;
                toProto(message: _113.DelegationResponse): Uint8Array;
                toProtoMsg(message: _113.DelegationResponse): _113.DelegationResponseProtoMsg;
            };
            RedelegationEntryResponse: {
                typeUrl: string;
                encode(message: _113.RedelegationEntryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _113.RedelegationEntryResponse;
                fromJSON(object: any): _113.RedelegationEntryResponse;
                toJSON(message: _113.RedelegationEntryResponse): unknown;
                fromPartial(object: Partial<_113.RedelegationEntryResponse>): _113.RedelegationEntryResponse;
                fromAmino(object: _113.RedelegationEntryResponseAmino): _113.RedelegationEntryResponse;
                toAmino(message: _113.RedelegationEntryResponse): _113.RedelegationEntryResponseAmino;
                fromAminoMsg(object: _113.RedelegationEntryResponseAminoMsg): _113.RedelegationEntryResponse;
                toAminoMsg(message: _113.RedelegationEntryResponse): _113.RedelegationEntryResponseAminoMsg;
                fromProtoMsg(message: _113.RedelegationEntryResponseProtoMsg): _113.RedelegationEntryResponse;
                toProto(message: _113.RedelegationEntryResponse): Uint8Array;
                toProtoMsg(message: _113.RedelegationEntryResponse): _113.RedelegationEntryResponseProtoMsg;
            };
            RedelegationResponse: {
                typeUrl: string;
                encode(message: _113.RedelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _113.RedelegationResponse;
                fromJSON(object: any): _113.RedelegationResponse;
                toJSON(message: _113.RedelegationResponse): unknown;
                fromPartial(object: Partial<_113.RedelegationResponse>): _113.RedelegationResponse;
                fromAmino(object: _113.RedelegationResponseAmino): _113.RedelegationResponse;
                toAmino(message: _113.RedelegationResponse): _113.RedelegationResponseAmino;
                fromAminoMsg(object: _113.RedelegationResponseAminoMsg): _113.RedelegationResponse;
                toAminoMsg(message: _113.RedelegationResponse): _113.RedelegationResponseAminoMsg;
                fromProtoMsg(message: _113.RedelegationResponseProtoMsg): _113.RedelegationResponse;
                toProto(message: _113.RedelegationResponse): Uint8Array;
                toProtoMsg(message: _113.RedelegationResponse): _113.RedelegationResponseProtoMsg;
            };
            Pool: {
                typeUrl: string;
                encode(message: _113.Pool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _113.Pool;
                fromJSON(object: any): _113.Pool;
                toJSON(message: _113.Pool): unknown;
                fromPartial(object: Partial<_113.Pool>): _113.Pool;
                fromAmino(object: _113.PoolAmino): _113.Pool;
                toAmino(message: _113.Pool): _113.PoolAmino;
                fromAminoMsg(object: _113.PoolAminoMsg): _113.Pool;
                toAminoMsg(message: _113.Pool): _113.PoolAminoMsg;
                fromProtoMsg(message: _113.PoolProtoMsg): _113.Pool;
                toProto(message: _113.Pool): Uint8Array;
                toProtoMsg(message: _113.Pool): _113.PoolProtoMsg;
            };
            ValidatorUpdates: {
                typeUrl: string;
                encode(message: _113.ValidatorUpdates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _113.ValidatorUpdates;
                fromJSON(object: any): _113.ValidatorUpdates;
                toJSON(message: _113.ValidatorUpdates): unknown;
                fromPartial(object: Partial<_113.ValidatorUpdates>): _113.ValidatorUpdates;
                fromAmino(object: _113.ValidatorUpdatesAmino): _113.ValidatorUpdates;
                toAmino(message: _113.ValidatorUpdates): _113.ValidatorUpdatesAmino;
                fromAminoMsg(object: _113.ValidatorUpdatesAminoMsg): _113.ValidatorUpdates;
                toAminoMsg(message: _113.ValidatorUpdates): _113.ValidatorUpdatesAminoMsg;
                fromProtoMsg(message: _113.ValidatorUpdatesProtoMsg): _113.ValidatorUpdates;
                toProto(message: _113.ValidatorUpdates): Uint8Array;
                toProtoMsg(message: _113.ValidatorUpdates): _113.ValidatorUpdatesProtoMsg;
            };
            QueryValidatorsRequest: {
                typeUrl: string;
                encode(message: _112.QueryValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.QueryValidatorsRequest;
                fromJSON(object: any): _112.QueryValidatorsRequest;
                toJSON(message: _112.QueryValidatorsRequest): unknown;
                fromPartial(object: Partial<_112.QueryValidatorsRequest>): _112.QueryValidatorsRequest;
                fromAmino(object: _112.QueryValidatorsRequestAmino): _112.QueryValidatorsRequest;
                toAmino(message: _112.QueryValidatorsRequest): _112.QueryValidatorsRequestAmino;
                fromAminoMsg(object: _112.QueryValidatorsRequestAminoMsg): _112.QueryValidatorsRequest;
                toAminoMsg(message: _112.QueryValidatorsRequest): _112.QueryValidatorsRequestAminoMsg;
                fromProtoMsg(message: _112.QueryValidatorsRequestProtoMsg): _112.QueryValidatorsRequest;
                toProto(message: _112.QueryValidatorsRequest): Uint8Array;
                toProtoMsg(message: _112.QueryValidatorsRequest): _112.QueryValidatorsRequestProtoMsg;
            };
            QueryValidatorsResponse: {
                typeUrl: string;
                encode(message: _112.QueryValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.QueryValidatorsResponse;
                fromJSON(object: any): _112.QueryValidatorsResponse;
                toJSON(message: _112.QueryValidatorsResponse): unknown;
                fromPartial(object: Partial<_112.QueryValidatorsResponse>): _112.QueryValidatorsResponse;
                fromAmino(object: _112.QueryValidatorsResponseAmino): _112.QueryValidatorsResponse;
                toAmino(message: _112.QueryValidatorsResponse): _112.QueryValidatorsResponseAmino;
                fromAminoMsg(object: _112.QueryValidatorsResponseAminoMsg): _112.QueryValidatorsResponse;
                toAminoMsg(message: _112.QueryValidatorsResponse): _112.QueryValidatorsResponseAminoMsg;
                fromProtoMsg(message: _112.QueryValidatorsResponseProtoMsg): _112.QueryValidatorsResponse;
                toProto(message: _112.QueryValidatorsResponse): Uint8Array;
                toProtoMsg(message: _112.QueryValidatorsResponse): _112.QueryValidatorsResponseProtoMsg;
            };
            QueryValidatorRequest: {
                typeUrl: string;
                encode(message: _112.QueryValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.QueryValidatorRequest;
                fromJSON(object: any): _112.QueryValidatorRequest;
                toJSON(message: _112.QueryValidatorRequest): unknown;
                fromPartial(object: Partial<_112.QueryValidatorRequest>): _112.QueryValidatorRequest;
                fromAmino(object: _112.QueryValidatorRequestAmino): _112.QueryValidatorRequest;
                toAmino(message: _112.QueryValidatorRequest): _112.QueryValidatorRequestAmino;
                fromAminoMsg(object: _112.QueryValidatorRequestAminoMsg): _112.QueryValidatorRequest;
                toAminoMsg(message: _112.QueryValidatorRequest): _112.QueryValidatorRequestAminoMsg;
                fromProtoMsg(message: _112.QueryValidatorRequestProtoMsg): _112.QueryValidatorRequest;
                toProto(message: _112.QueryValidatorRequest): Uint8Array;
                toProtoMsg(message: _112.QueryValidatorRequest): _112.QueryValidatorRequestProtoMsg;
            };
            QueryValidatorResponse: {
                typeUrl: string;
                encode(message: _112.QueryValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.QueryValidatorResponse;
                fromJSON(object: any): _112.QueryValidatorResponse;
                toJSON(message: _112.QueryValidatorResponse): unknown;
                fromPartial(object: Partial<_112.QueryValidatorResponse>): _112.QueryValidatorResponse;
                fromAmino(object: _112.QueryValidatorResponseAmino): _112.QueryValidatorResponse;
                toAmino(message: _112.QueryValidatorResponse): _112.QueryValidatorResponseAmino;
                fromAminoMsg(object: _112.QueryValidatorResponseAminoMsg): _112.QueryValidatorResponse;
                toAminoMsg(message: _112.QueryValidatorResponse): _112.QueryValidatorResponseAminoMsg;
                fromProtoMsg(message: _112.QueryValidatorResponseProtoMsg): _112.QueryValidatorResponse;
                toProto(message: _112.QueryValidatorResponse): Uint8Array;
                toProtoMsg(message: _112.QueryValidatorResponse): _112.QueryValidatorResponseProtoMsg;
            };
            QueryValidatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _112.QueryValidatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.QueryValidatorDelegationsRequest;
                fromJSON(object: any): _112.QueryValidatorDelegationsRequest;
                toJSON(message: _112.QueryValidatorDelegationsRequest): unknown;
                fromPartial(object: Partial<_112.QueryValidatorDelegationsRequest>): _112.QueryValidatorDelegationsRequest;
                fromAmino(object: _112.QueryValidatorDelegationsRequestAmino): _112.QueryValidatorDelegationsRequest;
                toAmino(message: _112.QueryValidatorDelegationsRequest): _112.QueryValidatorDelegationsRequestAmino;
                fromAminoMsg(object: _112.QueryValidatorDelegationsRequestAminoMsg): _112.QueryValidatorDelegationsRequest;
                toAminoMsg(message: _112.QueryValidatorDelegationsRequest): _112.QueryValidatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _112.QueryValidatorDelegationsRequestProtoMsg): _112.QueryValidatorDelegationsRequest;
                toProto(message: _112.QueryValidatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _112.QueryValidatorDelegationsRequest): _112.QueryValidatorDelegationsRequestProtoMsg;
            };
            QueryValidatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _112.QueryValidatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.QueryValidatorDelegationsResponse;
                fromJSON(object: any): _112.QueryValidatorDelegationsResponse;
                toJSON(message: _112.QueryValidatorDelegationsResponse): unknown;
                fromPartial(object: Partial<_112.QueryValidatorDelegationsResponse>): _112.QueryValidatorDelegationsResponse;
                fromAmino(object: _112.QueryValidatorDelegationsResponseAmino): _112.QueryValidatorDelegationsResponse;
                toAmino(message: _112.QueryValidatorDelegationsResponse): _112.QueryValidatorDelegationsResponseAmino;
                fromAminoMsg(object: _112.QueryValidatorDelegationsResponseAminoMsg): _112.QueryValidatorDelegationsResponse;
                toAminoMsg(message: _112.QueryValidatorDelegationsResponse): _112.QueryValidatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _112.QueryValidatorDelegationsResponseProtoMsg): _112.QueryValidatorDelegationsResponse;
                toProto(message: _112.QueryValidatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _112.QueryValidatorDelegationsResponse): _112.QueryValidatorDelegationsResponseProtoMsg;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _112.QueryValidatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.QueryValidatorUnbondingDelegationsRequest;
                fromJSON(object: any): _112.QueryValidatorUnbondingDelegationsRequest;
                toJSON(message: _112.QueryValidatorUnbondingDelegationsRequest): unknown;
                fromPartial(object: Partial<_112.QueryValidatorUnbondingDelegationsRequest>): _112.QueryValidatorUnbondingDelegationsRequest;
                fromAmino(object: _112.QueryValidatorUnbondingDelegationsRequestAmino): _112.QueryValidatorUnbondingDelegationsRequest;
                toAmino(message: _112.QueryValidatorUnbondingDelegationsRequest): _112.QueryValidatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _112.QueryValidatorUnbondingDelegationsRequestAminoMsg): _112.QueryValidatorUnbondingDelegationsRequest;
                toAminoMsg(message: _112.QueryValidatorUnbondingDelegationsRequest): _112.QueryValidatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _112.QueryValidatorUnbondingDelegationsRequestProtoMsg): _112.QueryValidatorUnbondingDelegationsRequest;
                toProto(message: _112.QueryValidatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _112.QueryValidatorUnbondingDelegationsRequest): _112.QueryValidatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _112.QueryValidatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.QueryValidatorUnbondingDelegationsResponse;
                fromJSON(object: any): _112.QueryValidatorUnbondingDelegationsResponse;
                toJSON(message: _112.QueryValidatorUnbondingDelegationsResponse): unknown;
                fromPartial(object: Partial<_112.QueryValidatorUnbondingDelegationsResponse>): _112.QueryValidatorUnbondingDelegationsResponse;
                fromAmino(object: _112.QueryValidatorUnbondingDelegationsResponseAmino): _112.QueryValidatorUnbondingDelegationsResponse;
                toAmino(message: _112.QueryValidatorUnbondingDelegationsResponse): _112.QueryValidatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _112.QueryValidatorUnbondingDelegationsResponseAminoMsg): _112.QueryValidatorUnbondingDelegationsResponse;
                toAminoMsg(message: _112.QueryValidatorUnbondingDelegationsResponse): _112.QueryValidatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _112.QueryValidatorUnbondingDelegationsResponseProtoMsg): _112.QueryValidatorUnbondingDelegationsResponse;
                toProto(message: _112.QueryValidatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _112.QueryValidatorUnbondingDelegationsResponse): _112.QueryValidatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryDelegationRequest: {
                typeUrl: string;
                encode(message: _112.QueryDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.QueryDelegationRequest;
                fromJSON(object: any): _112.QueryDelegationRequest;
                toJSON(message: _112.QueryDelegationRequest): unknown;
                fromPartial(object: Partial<_112.QueryDelegationRequest>): _112.QueryDelegationRequest;
                fromAmino(object: _112.QueryDelegationRequestAmino): _112.QueryDelegationRequest;
                toAmino(message: _112.QueryDelegationRequest): _112.QueryDelegationRequestAmino;
                fromAminoMsg(object: _112.QueryDelegationRequestAminoMsg): _112.QueryDelegationRequest;
                toAminoMsg(message: _112.QueryDelegationRequest): _112.QueryDelegationRequestAminoMsg;
                fromProtoMsg(message: _112.QueryDelegationRequestProtoMsg): _112.QueryDelegationRequest;
                toProto(message: _112.QueryDelegationRequest): Uint8Array;
                toProtoMsg(message: _112.QueryDelegationRequest): _112.QueryDelegationRequestProtoMsg;
            };
            QueryDelegationResponse: {
                typeUrl: string;
                encode(message: _112.QueryDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.QueryDelegationResponse;
                fromJSON(object: any): _112.QueryDelegationResponse;
                toJSON(message: _112.QueryDelegationResponse): unknown;
                fromPartial(object: Partial<_112.QueryDelegationResponse>): _112.QueryDelegationResponse;
                fromAmino(object: _112.QueryDelegationResponseAmino): _112.QueryDelegationResponse;
                toAmino(message: _112.QueryDelegationResponse): _112.QueryDelegationResponseAmino;
                fromAminoMsg(object: _112.QueryDelegationResponseAminoMsg): _112.QueryDelegationResponse;
                toAminoMsg(message: _112.QueryDelegationResponse): _112.QueryDelegationResponseAminoMsg;
                fromProtoMsg(message: _112.QueryDelegationResponseProtoMsg): _112.QueryDelegationResponse;
                toProto(message: _112.QueryDelegationResponse): Uint8Array;
                toProtoMsg(message: _112.QueryDelegationResponse): _112.QueryDelegationResponseProtoMsg;
            };
            QueryUnbondingDelegationRequest: {
                typeUrl: string;
                encode(message: _112.QueryUnbondingDelegationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.QueryUnbondingDelegationRequest;
                fromJSON(object: any): _112.QueryUnbondingDelegationRequest;
                toJSON(message: _112.QueryUnbondingDelegationRequest): unknown;
                fromPartial(object: Partial<_112.QueryUnbondingDelegationRequest>): _112.QueryUnbondingDelegationRequest;
                fromAmino(object: _112.QueryUnbondingDelegationRequestAmino): _112.QueryUnbondingDelegationRequest;
                toAmino(message: _112.QueryUnbondingDelegationRequest): _112.QueryUnbondingDelegationRequestAmino;
                fromAminoMsg(object: _112.QueryUnbondingDelegationRequestAminoMsg): _112.QueryUnbondingDelegationRequest;
                toAminoMsg(message: _112.QueryUnbondingDelegationRequest): _112.QueryUnbondingDelegationRequestAminoMsg;
                fromProtoMsg(message: _112.QueryUnbondingDelegationRequestProtoMsg): _112.QueryUnbondingDelegationRequest;
                toProto(message: _112.QueryUnbondingDelegationRequest): Uint8Array;
                toProtoMsg(message: _112.QueryUnbondingDelegationRequest): _112.QueryUnbondingDelegationRequestProtoMsg;
            };
            QueryUnbondingDelegationResponse: {
                typeUrl: string;
                encode(message: _112.QueryUnbondingDelegationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.QueryUnbondingDelegationResponse;
                fromJSON(object: any): _112.QueryUnbondingDelegationResponse;
                toJSON(message: _112.QueryUnbondingDelegationResponse): unknown;
                fromPartial(object: Partial<_112.QueryUnbondingDelegationResponse>): _112.QueryUnbondingDelegationResponse;
                fromAmino(object: _112.QueryUnbondingDelegationResponseAmino): _112.QueryUnbondingDelegationResponse;
                toAmino(message: _112.QueryUnbondingDelegationResponse): _112.QueryUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _112.QueryUnbondingDelegationResponseAminoMsg): _112.QueryUnbondingDelegationResponse;
                toAminoMsg(message: _112.QueryUnbondingDelegationResponse): _112.QueryUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _112.QueryUnbondingDelegationResponseProtoMsg): _112.QueryUnbondingDelegationResponse;
                toProto(message: _112.QueryUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _112.QueryUnbondingDelegationResponse): _112.QueryUnbondingDelegationResponseProtoMsg;
            };
            QueryDelegatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _112.QueryDelegatorDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.QueryDelegatorDelegationsRequest;
                fromJSON(object: any): _112.QueryDelegatorDelegationsRequest;
                toJSON(message: _112.QueryDelegatorDelegationsRequest): unknown;
                fromPartial(object: Partial<_112.QueryDelegatorDelegationsRequest>): _112.QueryDelegatorDelegationsRequest;
                fromAmino(object: _112.QueryDelegatorDelegationsRequestAmino): _112.QueryDelegatorDelegationsRequest;
                toAmino(message: _112.QueryDelegatorDelegationsRequest): _112.QueryDelegatorDelegationsRequestAmino;
                fromAminoMsg(object: _112.QueryDelegatorDelegationsRequestAminoMsg): _112.QueryDelegatorDelegationsRequest;
                toAminoMsg(message: _112.QueryDelegatorDelegationsRequest): _112.QueryDelegatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _112.QueryDelegatorDelegationsRequestProtoMsg): _112.QueryDelegatorDelegationsRequest;
                toProto(message: _112.QueryDelegatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _112.QueryDelegatorDelegationsRequest): _112.QueryDelegatorDelegationsRequestProtoMsg;
            };
            QueryDelegatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _112.QueryDelegatorDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.QueryDelegatorDelegationsResponse;
                fromJSON(object: any): _112.QueryDelegatorDelegationsResponse;
                toJSON(message: _112.QueryDelegatorDelegationsResponse): unknown;
                fromPartial(object: Partial<_112.QueryDelegatorDelegationsResponse>): _112.QueryDelegatorDelegationsResponse;
                fromAmino(object: _112.QueryDelegatorDelegationsResponseAmino): _112.QueryDelegatorDelegationsResponse;
                toAmino(message: _112.QueryDelegatorDelegationsResponse): _112.QueryDelegatorDelegationsResponseAmino;
                fromAminoMsg(object: _112.QueryDelegatorDelegationsResponseAminoMsg): _112.QueryDelegatorDelegationsResponse;
                toAminoMsg(message: _112.QueryDelegatorDelegationsResponse): _112.QueryDelegatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _112.QueryDelegatorDelegationsResponseProtoMsg): _112.QueryDelegatorDelegationsResponse;
                toProto(message: _112.QueryDelegatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _112.QueryDelegatorDelegationsResponse): _112.QueryDelegatorDelegationsResponseProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _112.QueryDelegatorUnbondingDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.QueryDelegatorUnbondingDelegationsRequest;
                fromJSON(object: any): _112.QueryDelegatorUnbondingDelegationsRequest;
                toJSON(message: _112.QueryDelegatorUnbondingDelegationsRequest): unknown;
                fromPartial(object: Partial<_112.QueryDelegatorUnbondingDelegationsRequest>): _112.QueryDelegatorUnbondingDelegationsRequest;
                fromAmino(object: _112.QueryDelegatorUnbondingDelegationsRequestAmino): _112.QueryDelegatorUnbondingDelegationsRequest;
                toAmino(message: _112.QueryDelegatorUnbondingDelegationsRequest): _112.QueryDelegatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _112.QueryDelegatorUnbondingDelegationsRequestAminoMsg): _112.QueryDelegatorUnbondingDelegationsRequest;
                toAminoMsg(message: _112.QueryDelegatorUnbondingDelegationsRequest): _112.QueryDelegatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _112.QueryDelegatorUnbondingDelegationsRequestProtoMsg): _112.QueryDelegatorUnbondingDelegationsRequest;
                toProto(message: _112.QueryDelegatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _112.QueryDelegatorUnbondingDelegationsRequest): _112.QueryDelegatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _112.QueryDelegatorUnbondingDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.QueryDelegatorUnbondingDelegationsResponse;
                fromJSON(object: any): _112.QueryDelegatorUnbondingDelegationsResponse;
                toJSON(message: _112.QueryDelegatorUnbondingDelegationsResponse): unknown;
                fromPartial(object: Partial<_112.QueryDelegatorUnbondingDelegationsResponse>): _112.QueryDelegatorUnbondingDelegationsResponse;
                fromAmino(object: _112.QueryDelegatorUnbondingDelegationsResponseAmino): _112.QueryDelegatorUnbondingDelegationsResponse;
                toAmino(message: _112.QueryDelegatorUnbondingDelegationsResponse): _112.QueryDelegatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _112.QueryDelegatorUnbondingDelegationsResponseAminoMsg): _112.QueryDelegatorUnbondingDelegationsResponse;
                toAminoMsg(message: _112.QueryDelegatorUnbondingDelegationsResponse): _112.QueryDelegatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _112.QueryDelegatorUnbondingDelegationsResponseProtoMsg): _112.QueryDelegatorUnbondingDelegationsResponse;
                toProto(message: _112.QueryDelegatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _112.QueryDelegatorUnbondingDelegationsResponse): _112.QueryDelegatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryRedelegationsRequest: {
                typeUrl: string;
                encode(message: _112.QueryRedelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.QueryRedelegationsRequest;
                fromJSON(object: any): _112.QueryRedelegationsRequest;
                toJSON(message: _112.QueryRedelegationsRequest): unknown;
                fromPartial(object: Partial<_112.QueryRedelegationsRequest>): _112.QueryRedelegationsRequest;
                fromAmino(object: _112.QueryRedelegationsRequestAmino): _112.QueryRedelegationsRequest;
                toAmino(message: _112.QueryRedelegationsRequest): _112.QueryRedelegationsRequestAmino;
                fromAminoMsg(object: _112.QueryRedelegationsRequestAminoMsg): _112.QueryRedelegationsRequest;
                toAminoMsg(message: _112.QueryRedelegationsRequest): _112.QueryRedelegationsRequestAminoMsg;
                fromProtoMsg(message: _112.QueryRedelegationsRequestProtoMsg): _112.QueryRedelegationsRequest;
                toProto(message: _112.QueryRedelegationsRequest): Uint8Array;
                toProtoMsg(message: _112.QueryRedelegationsRequest): _112.QueryRedelegationsRequestProtoMsg;
            };
            QueryRedelegationsResponse: {
                typeUrl: string;
                encode(message: _112.QueryRedelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.QueryRedelegationsResponse;
                fromJSON(object: any): _112.QueryRedelegationsResponse;
                toJSON(message: _112.QueryRedelegationsResponse): unknown;
                fromPartial(object: Partial<_112.QueryRedelegationsResponse>): _112.QueryRedelegationsResponse;
                fromAmino(object: _112.QueryRedelegationsResponseAmino): _112.QueryRedelegationsResponse;
                toAmino(message: _112.QueryRedelegationsResponse): _112.QueryRedelegationsResponseAmino;
                fromAminoMsg(object: _112.QueryRedelegationsResponseAminoMsg): _112.QueryRedelegationsResponse;
                toAminoMsg(message: _112.QueryRedelegationsResponse): _112.QueryRedelegationsResponseAminoMsg;
                fromProtoMsg(message: _112.QueryRedelegationsResponseProtoMsg): _112.QueryRedelegationsResponse;
                toProto(message: _112.QueryRedelegationsResponse): Uint8Array;
                toProtoMsg(message: _112.QueryRedelegationsResponse): _112.QueryRedelegationsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _112.QueryDelegatorValidatorsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.QueryDelegatorValidatorsRequest;
                fromJSON(object: any): _112.QueryDelegatorValidatorsRequest;
                toJSON(message: _112.QueryDelegatorValidatorsRequest): unknown;
                fromPartial(object: Partial<_112.QueryDelegatorValidatorsRequest>): _112.QueryDelegatorValidatorsRequest;
                fromAmino(object: _112.QueryDelegatorValidatorsRequestAmino): _112.QueryDelegatorValidatorsRequest;
                toAmino(message: _112.QueryDelegatorValidatorsRequest): _112.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _112.QueryDelegatorValidatorsRequestAminoMsg): _112.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _112.QueryDelegatorValidatorsRequest): _112.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _112.QueryDelegatorValidatorsRequestProtoMsg): _112.QueryDelegatorValidatorsRequest;
                toProto(message: _112.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _112.QueryDelegatorValidatorsRequest): _112.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _112.QueryDelegatorValidatorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.QueryDelegatorValidatorsResponse;
                fromJSON(object: any): _112.QueryDelegatorValidatorsResponse;
                toJSON(message: _112.QueryDelegatorValidatorsResponse): unknown;
                fromPartial(object: Partial<_112.QueryDelegatorValidatorsResponse>): _112.QueryDelegatorValidatorsResponse;
                fromAmino(object: _112.QueryDelegatorValidatorsResponseAmino): _112.QueryDelegatorValidatorsResponse;
                toAmino(message: _112.QueryDelegatorValidatorsResponse): _112.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _112.QueryDelegatorValidatorsResponseAminoMsg): _112.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _112.QueryDelegatorValidatorsResponse): _112.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _112.QueryDelegatorValidatorsResponseProtoMsg): _112.QueryDelegatorValidatorsResponse;
                toProto(message: _112.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _112.QueryDelegatorValidatorsResponse): _112.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorValidatorRequest: {
                typeUrl: string;
                encode(message: _112.QueryDelegatorValidatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.QueryDelegatorValidatorRequest;
                fromJSON(object: any): _112.QueryDelegatorValidatorRequest;
                toJSON(message: _112.QueryDelegatorValidatorRequest): unknown;
                fromPartial(object: Partial<_112.QueryDelegatorValidatorRequest>): _112.QueryDelegatorValidatorRequest;
                fromAmino(object: _112.QueryDelegatorValidatorRequestAmino): _112.QueryDelegatorValidatorRequest;
                toAmino(message: _112.QueryDelegatorValidatorRequest): _112.QueryDelegatorValidatorRequestAmino;
                fromAminoMsg(object: _112.QueryDelegatorValidatorRequestAminoMsg): _112.QueryDelegatorValidatorRequest;
                toAminoMsg(message: _112.QueryDelegatorValidatorRequest): _112.QueryDelegatorValidatorRequestAminoMsg;
                fromProtoMsg(message: _112.QueryDelegatorValidatorRequestProtoMsg): _112.QueryDelegatorValidatorRequest;
                toProto(message: _112.QueryDelegatorValidatorRequest): Uint8Array;
                toProtoMsg(message: _112.QueryDelegatorValidatorRequest): _112.QueryDelegatorValidatorRequestProtoMsg;
            };
            QueryDelegatorValidatorResponse: {
                typeUrl: string;
                encode(message: _112.QueryDelegatorValidatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.QueryDelegatorValidatorResponse;
                fromJSON(object: any): _112.QueryDelegatorValidatorResponse;
                toJSON(message: _112.QueryDelegatorValidatorResponse): unknown;
                fromPartial(object: Partial<_112.QueryDelegatorValidatorResponse>): _112.QueryDelegatorValidatorResponse;
                fromAmino(object: _112.QueryDelegatorValidatorResponseAmino): _112.QueryDelegatorValidatorResponse;
                toAmino(message: _112.QueryDelegatorValidatorResponse): _112.QueryDelegatorValidatorResponseAmino;
                fromAminoMsg(object: _112.QueryDelegatorValidatorResponseAminoMsg): _112.QueryDelegatorValidatorResponse;
                toAminoMsg(message: _112.QueryDelegatorValidatorResponse): _112.QueryDelegatorValidatorResponseAminoMsg;
                fromProtoMsg(message: _112.QueryDelegatorValidatorResponseProtoMsg): _112.QueryDelegatorValidatorResponse;
                toProto(message: _112.QueryDelegatorValidatorResponse): Uint8Array;
                toProtoMsg(message: _112.QueryDelegatorValidatorResponse): _112.QueryDelegatorValidatorResponseProtoMsg;
            };
            QueryHistoricalInfoRequest: {
                typeUrl: string;
                encode(message: _112.QueryHistoricalInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.QueryHistoricalInfoRequest;
                fromJSON(object: any): _112.QueryHistoricalInfoRequest;
                toJSON(message: _112.QueryHistoricalInfoRequest): unknown;
                fromPartial(object: Partial<_112.QueryHistoricalInfoRequest>): _112.QueryHistoricalInfoRequest;
                fromAmino(object: _112.QueryHistoricalInfoRequestAmino): _112.QueryHistoricalInfoRequest;
                toAmino(message: _112.QueryHistoricalInfoRequest): _112.QueryHistoricalInfoRequestAmino;
                fromAminoMsg(object: _112.QueryHistoricalInfoRequestAminoMsg): _112.QueryHistoricalInfoRequest;
                toAminoMsg(message: _112.QueryHistoricalInfoRequest): _112.QueryHistoricalInfoRequestAminoMsg;
                fromProtoMsg(message: _112.QueryHistoricalInfoRequestProtoMsg): _112.QueryHistoricalInfoRequest;
                toProto(message: _112.QueryHistoricalInfoRequest): Uint8Array;
                toProtoMsg(message: _112.QueryHistoricalInfoRequest): _112.QueryHistoricalInfoRequestProtoMsg;
            };
            QueryHistoricalInfoResponse: {
                typeUrl: string;
                encode(message: _112.QueryHistoricalInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.QueryHistoricalInfoResponse;
                fromJSON(object: any): _112.QueryHistoricalInfoResponse;
                toJSON(message: _112.QueryHistoricalInfoResponse): unknown;
                fromPartial(object: Partial<_112.QueryHistoricalInfoResponse>): _112.QueryHistoricalInfoResponse;
                fromAmino(object: _112.QueryHistoricalInfoResponseAmino): _112.QueryHistoricalInfoResponse;
                toAmino(message: _112.QueryHistoricalInfoResponse): _112.QueryHistoricalInfoResponseAmino;
                fromAminoMsg(object: _112.QueryHistoricalInfoResponseAminoMsg): _112.QueryHistoricalInfoResponse;
                toAminoMsg(message: _112.QueryHistoricalInfoResponse): _112.QueryHistoricalInfoResponseAminoMsg;
                fromProtoMsg(message: _112.QueryHistoricalInfoResponseProtoMsg): _112.QueryHistoricalInfoResponse;
                toProto(message: _112.QueryHistoricalInfoResponse): Uint8Array;
                toProtoMsg(message: _112.QueryHistoricalInfoResponse): _112.QueryHistoricalInfoResponseProtoMsg;
            };
            QueryPoolRequest: {
                typeUrl: string;
                encode(_: _112.QueryPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.QueryPoolRequest;
                fromJSON(_: any): _112.QueryPoolRequest;
                toJSON(_: _112.QueryPoolRequest): unknown;
                fromPartial(_: Partial<_112.QueryPoolRequest>): _112.QueryPoolRequest;
                fromAmino(_: _112.QueryPoolRequestAmino): _112.QueryPoolRequest;
                toAmino(_: _112.QueryPoolRequest): _112.QueryPoolRequestAmino;
                fromAminoMsg(object: _112.QueryPoolRequestAminoMsg): _112.QueryPoolRequest;
                toAminoMsg(message: _112.QueryPoolRequest): _112.QueryPoolRequestAminoMsg;
                fromProtoMsg(message: _112.QueryPoolRequestProtoMsg): _112.QueryPoolRequest;
                toProto(message: _112.QueryPoolRequest): Uint8Array;
                toProtoMsg(message: _112.QueryPoolRequest): _112.QueryPoolRequestProtoMsg;
            };
            QueryPoolResponse: {
                typeUrl: string;
                encode(message: _112.QueryPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.QueryPoolResponse;
                fromJSON(object: any): _112.QueryPoolResponse;
                toJSON(message: _112.QueryPoolResponse): unknown;
                fromPartial(object: Partial<_112.QueryPoolResponse>): _112.QueryPoolResponse;
                fromAmino(object: _112.QueryPoolResponseAmino): _112.QueryPoolResponse;
                toAmino(message: _112.QueryPoolResponse): _112.QueryPoolResponseAmino;
                fromAminoMsg(object: _112.QueryPoolResponseAminoMsg): _112.QueryPoolResponse;
                toAminoMsg(message: _112.QueryPoolResponse): _112.QueryPoolResponseAminoMsg;
                fromProtoMsg(message: _112.QueryPoolResponseProtoMsg): _112.QueryPoolResponse;
                toProto(message: _112.QueryPoolResponse): Uint8Array;
                toProtoMsg(message: _112.QueryPoolResponse): _112.QueryPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _112.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.QueryParamsRequest;
                fromJSON(_: any): _112.QueryParamsRequest;
                toJSON(_: _112.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_112.QueryParamsRequest>): _112.QueryParamsRequest;
                fromAmino(_: _112.QueryParamsRequestAmino): _112.QueryParamsRequest;
                toAmino(_: _112.QueryParamsRequest): _112.QueryParamsRequestAmino;
                fromAminoMsg(object: _112.QueryParamsRequestAminoMsg): _112.QueryParamsRequest;
                toAminoMsg(message: _112.QueryParamsRequest): _112.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _112.QueryParamsRequestProtoMsg): _112.QueryParamsRequest;
                toProto(message: _112.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _112.QueryParamsRequest): _112.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _112.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.QueryParamsResponse;
                fromJSON(object: any): _112.QueryParamsResponse;
                toJSON(message: _112.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_112.QueryParamsResponse>): _112.QueryParamsResponse;
                fromAmino(object: _112.QueryParamsResponseAmino): _112.QueryParamsResponse;
                toAmino(message: _112.QueryParamsResponse): _112.QueryParamsResponseAmino;
                fromAminoMsg(object: _112.QueryParamsResponseAminoMsg): _112.QueryParamsResponse;
                toAminoMsg(message: _112.QueryParamsResponse): _112.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _112.QueryParamsResponseProtoMsg): _112.QueryParamsResponse;
                toProto(message: _112.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _112.QueryParamsResponse): _112.QueryParamsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _111.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _111.GenesisState;
                fromJSON(object: any): _111.GenesisState;
                toJSON(message: _111.GenesisState): unknown;
                fromPartial(object: Partial<_111.GenesisState>): _111.GenesisState;
                fromAmino(object: _111.GenesisStateAmino): _111.GenesisState;
                toAmino(message: _111.GenesisState): _111.GenesisStateAmino;
                fromAminoMsg(object: _111.GenesisStateAminoMsg): _111.GenesisState;
                toAminoMsg(message: _111.GenesisState): _111.GenesisStateAminoMsg;
                fromProtoMsg(message: _111.GenesisStateProtoMsg): _111.GenesisState;
                toProto(message: _111.GenesisState): Uint8Array;
                toProtoMsg(message: _111.GenesisState): _111.GenesisStateProtoMsg;
            };
            LastValidatorPower: {
                typeUrl: string;
                encode(message: _111.LastValidatorPower, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _111.LastValidatorPower;
                fromJSON(object: any): _111.LastValidatorPower;
                toJSON(message: _111.LastValidatorPower): unknown;
                fromPartial(object: Partial<_111.LastValidatorPower>): _111.LastValidatorPower;
                fromAmino(object: _111.LastValidatorPowerAmino): _111.LastValidatorPower;
                toAmino(message: _111.LastValidatorPower): _111.LastValidatorPowerAmino;
                fromAminoMsg(object: _111.LastValidatorPowerAminoMsg): _111.LastValidatorPower;
                toAminoMsg(message: _111.LastValidatorPower): _111.LastValidatorPowerAminoMsg;
                fromProtoMsg(message: _111.LastValidatorPowerProtoMsg): _111.LastValidatorPower;
                toProto(message: _111.LastValidatorPower): Uint8Array;
                toProtoMsg(message: _111.LastValidatorPower): _111.LastValidatorPowerProtoMsg;
            };
            authorizationTypeFromJSON(object: any): _110.AuthorizationType;
            authorizationTypeToJSON(object: _110.AuthorizationType): string;
            AuthorizationType: typeof _110.AuthorizationType;
            AuthorizationTypeSDKType: typeof _110.AuthorizationType;
            AuthorizationTypeAmino: typeof _110.AuthorizationType;
            StakeAuthorization: {
                typeUrl: string;
                encode(message: _110.StakeAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _110.StakeAuthorization;
                fromJSON(object: any): _110.StakeAuthorization;
                toJSON(message: _110.StakeAuthorization): unknown;
                fromPartial(object: Partial<_110.StakeAuthorization>): _110.StakeAuthorization;
                fromAmino(object: _110.StakeAuthorizationAmino): _110.StakeAuthorization;
                toAmino(message: _110.StakeAuthorization): _110.StakeAuthorizationAmino;
                fromAminoMsg(object: _110.StakeAuthorizationAminoMsg): _110.StakeAuthorization;
                toAminoMsg(message: _110.StakeAuthorization): _110.StakeAuthorizationAminoMsg;
                fromProtoMsg(message: _110.StakeAuthorizationProtoMsg): _110.StakeAuthorization;
                toProto(message: _110.StakeAuthorization): Uint8Array;
                toProtoMsg(message: _110.StakeAuthorization): _110.StakeAuthorizationProtoMsg;
            };
            StakeAuthorization_Validators: {
                typeUrl: string;
                encode(message: _110.StakeAuthorization_Validators, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _110.StakeAuthorization_Validators;
                fromJSON(object: any): _110.StakeAuthorization_Validators;
                toJSON(message: _110.StakeAuthorization_Validators): unknown;
                fromPartial(object: Partial<_110.StakeAuthorization_Validators>): _110.StakeAuthorization_Validators;
                fromAmino(object: _110.StakeAuthorization_ValidatorsAmino): _110.StakeAuthorization_Validators;
                toAmino(message: _110.StakeAuthorization_Validators): _110.StakeAuthorization_ValidatorsAmino;
                fromAminoMsg(object: _110.StakeAuthorization_ValidatorsAminoMsg): _110.StakeAuthorization_Validators;
                toAminoMsg(message: _110.StakeAuthorization_Validators): _110.StakeAuthorization_ValidatorsAminoMsg;
                fromProtoMsg(message: _110.StakeAuthorization_ValidatorsProtoMsg): _110.StakeAuthorization_Validators;
                toProto(message: _110.StakeAuthorization_Validators): Uint8Array;
                toProtoMsg(message: _110.StakeAuthorization_Validators): _110.StakeAuthorization_ValidatorsProtoMsg;
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
                        encode(message: _115.Pairs, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: import("..").BinaryReader | Uint8Array, length?: number): _115.Pairs;
                        fromJSON(object: any): _115.Pairs;
                        toJSON(message: _115.Pairs): unknown;
                        fromPartial(object: Partial<_115.Pairs>): _115.Pairs;
                        fromAmino(object: _115.PairsAmino): _115.Pairs;
                        toAmino(message: _115.Pairs): _115.PairsAmino;
                        fromAminoMsg(object: _115.PairsAminoMsg): _115.Pairs;
                        toAminoMsg(message: _115.Pairs): _115.PairsAminoMsg;
                        fromProtoMsg(message: _115.PairsProtoMsg): _115.Pairs;
                        toProto(message: _115.Pairs): Uint8Array;
                        toProtoMsg(message: _115.Pairs): _115.PairsProtoMsg;
                    };
                    Pair: {
                        typeUrl: string;
                        encode(message: _115.Pair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: import("..").BinaryReader | Uint8Array, length?: number): _115.Pair;
                        fromJSON(object: any): _115.Pair;
                        toJSON(message: _115.Pair): unknown;
                        fromPartial(object: Partial<_115.Pair>): _115.Pair;
                        fromAmino(object: _115.PairAmino): _115.Pair;
                        toAmino(message: _115.Pair): _115.PairAmino;
                        fromAminoMsg(object: _115.PairAminoMsg): _115.Pair;
                        toAminoMsg(message: _115.Pair): _115.PairAminoMsg;
                        fromProtoMsg(message: _115.PairProtoMsg): _115.Pair;
                        toProto(message: _115.Pair): Uint8Array;
                        toProtoMsg(message: _115.Pair): _115.PairProtoMsg;
                    };
                };
            }
        }
        namespace snapshots {
            const v1: {
                protobufPackage: "cosmos.store.snapshots.v1";
                Snapshot: {
                    typeUrl: string;
                    encode(message: _116.Snapshot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _116.Snapshot;
                    fromJSON(object: any): _116.Snapshot;
                    toJSON(message: _116.Snapshot): unknown;
                    fromPartial(object: Partial<_116.Snapshot>): _116.Snapshot;
                    fromAmino(object: _116.SnapshotAmino): _116.Snapshot;
                    toAmino(message: _116.Snapshot): _116.SnapshotAmino;
                    fromAminoMsg(object: _116.SnapshotAminoMsg): _116.Snapshot;
                    toAminoMsg(message: _116.Snapshot): _116.SnapshotAminoMsg;
                    fromProtoMsg(message: _116.SnapshotProtoMsg): _116.Snapshot;
                    toProto(message: _116.Snapshot): Uint8Array;
                    toProtoMsg(message: _116.Snapshot): _116.SnapshotProtoMsg;
                };
                Metadata: {
                    typeUrl: string;
                    encode(message: _116.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _116.Metadata;
                    fromJSON(object: any): _116.Metadata;
                    toJSON(message: _116.Metadata): unknown;
                    fromPartial(object: Partial<_116.Metadata>): _116.Metadata;
                    fromAmino(object: _116.MetadataAmino): _116.Metadata;
                    toAmino(message: _116.Metadata): _116.MetadataAmino;
                    fromAminoMsg(object: _116.MetadataAminoMsg): _116.Metadata;
                    toAminoMsg(message: _116.Metadata): _116.MetadataAminoMsg;
                    fromProtoMsg(message: _116.MetadataProtoMsg): _116.Metadata;
                    toProto(message: _116.Metadata): Uint8Array;
                    toProtoMsg(message: _116.Metadata): _116.MetadataProtoMsg;
                };
                SnapshotItem: {
                    typeUrl: string;
                    encode(message: _116.SnapshotItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _116.SnapshotItem;
                    fromJSON(object: any): _116.SnapshotItem;
                    toJSON(message: _116.SnapshotItem): unknown;
                    fromPartial(object: Partial<_116.SnapshotItem>): _116.SnapshotItem;
                    fromAmino(object: _116.SnapshotItemAmino): _116.SnapshotItem;
                    toAmino(message: _116.SnapshotItem): _116.SnapshotItemAmino;
                    fromAminoMsg(object: _116.SnapshotItemAminoMsg): _116.SnapshotItem;
                    toAminoMsg(message: _116.SnapshotItem): _116.SnapshotItemAminoMsg;
                    fromProtoMsg(message: _116.SnapshotItemProtoMsg): _116.SnapshotItem;
                    toProto(message: _116.SnapshotItem): Uint8Array;
                    toProtoMsg(message: _116.SnapshotItem): _116.SnapshotItemProtoMsg;
                };
                SnapshotStoreItem: {
                    typeUrl: string;
                    encode(message: _116.SnapshotStoreItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _116.SnapshotStoreItem;
                    fromJSON(object: any): _116.SnapshotStoreItem;
                    toJSON(message: _116.SnapshotStoreItem): unknown;
                    fromPartial(object: Partial<_116.SnapshotStoreItem>): _116.SnapshotStoreItem;
                    fromAmino(object: _116.SnapshotStoreItemAmino): _116.SnapshotStoreItem;
                    toAmino(message: _116.SnapshotStoreItem): _116.SnapshotStoreItemAmino;
                    fromAminoMsg(object: _116.SnapshotStoreItemAminoMsg): _116.SnapshotStoreItem;
                    toAminoMsg(message: _116.SnapshotStoreItem): _116.SnapshotStoreItemAminoMsg;
                    fromProtoMsg(message: _116.SnapshotStoreItemProtoMsg): _116.SnapshotStoreItem;
                    toProto(message: _116.SnapshotStoreItem): Uint8Array;
                    toProtoMsg(message: _116.SnapshotStoreItem): _116.SnapshotStoreItemProtoMsg;
                };
                SnapshotIAVLItem: {
                    typeUrl: string;
                    encode(message: _116.SnapshotIAVLItem, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _116.SnapshotIAVLItem;
                    fromJSON(object: any): _116.SnapshotIAVLItem;
                    toJSON(message: _116.SnapshotIAVLItem): unknown;
                    fromPartial(object: Partial<_116.SnapshotIAVLItem>): _116.SnapshotIAVLItem;
                    fromAmino(object: _116.SnapshotIAVLItemAmino): _116.SnapshotIAVLItem;
                    toAmino(message: _116.SnapshotIAVLItem): _116.SnapshotIAVLItemAmino;
                    fromAminoMsg(object: _116.SnapshotIAVLItemAminoMsg): _116.SnapshotIAVLItem;
                    toAminoMsg(message: _116.SnapshotIAVLItem): _116.SnapshotIAVLItemAminoMsg;
                    fromProtoMsg(message: _116.SnapshotIAVLItemProtoMsg): _116.SnapshotIAVLItem;
                    toProto(message: _116.SnapshotIAVLItem): Uint8Array;
                    toProtoMsg(message: _116.SnapshotIAVLItem): _116.SnapshotIAVLItemProtoMsg;
                };
                SnapshotExtensionMeta: {
                    typeUrl: string;
                    encode(message: _116.SnapshotExtensionMeta, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _116.SnapshotExtensionMeta;
                    fromJSON(object: any): _116.SnapshotExtensionMeta;
                    toJSON(message: _116.SnapshotExtensionMeta): unknown;
                    fromPartial(object: Partial<_116.SnapshotExtensionMeta>): _116.SnapshotExtensionMeta;
                    fromAmino(object: _116.SnapshotExtensionMetaAmino): _116.SnapshotExtensionMeta;
                    toAmino(message: _116.SnapshotExtensionMeta): _116.SnapshotExtensionMetaAmino;
                    fromAminoMsg(object: _116.SnapshotExtensionMetaAminoMsg): _116.SnapshotExtensionMeta;
                    toAminoMsg(message: _116.SnapshotExtensionMeta): _116.SnapshotExtensionMetaAminoMsg;
                    fromProtoMsg(message: _116.SnapshotExtensionMetaProtoMsg): _116.SnapshotExtensionMeta;
                    toProto(message: _116.SnapshotExtensionMeta): Uint8Array;
                    toProtoMsg(message: _116.SnapshotExtensionMeta): _116.SnapshotExtensionMetaProtoMsg;
                };
                SnapshotExtensionPayload: {
                    typeUrl: string;
                    encode(message: _116.SnapshotExtensionPayload, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _116.SnapshotExtensionPayload;
                    fromJSON(object: any): _116.SnapshotExtensionPayload;
                    toJSON(message: _116.SnapshotExtensionPayload): unknown;
                    fromPartial(object: Partial<_116.SnapshotExtensionPayload>): _116.SnapshotExtensionPayload;
                    fromAmino(object: _116.SnapshotExtensionPayloadAmino): _116.SnapshotExtensionPayload;
                    toAmino(message: _116.SnapshotExtensionPayload): _116.SnapshotExtensionPayloadAmino;
                    fromAminoMsg(object: _116.SnapshotExtensionPayloadAminoMsg): _116.SnapshotExtensionPayload;
                    toAminoMsg(message: _116.SnapshotExtensionPayload): _116.SnapshotExtensionPayloadAminoMsg;
                    fromProtoMsg(message: _116.SnapshotExtensionPayloadProtoMsg): _116.SnapshotExtensionPayload;
                    toProto(message: _116.SnapshotExtensionPayload): Uint8Array;
                    toProtoMsg(message: _116.SnapshotExtensionPayload): _116.SnapshotExtensionPayloadProtoMsg;
                };
            };
        }
        namespace streaming {
            const abci: {
                protobufPackage: "cosmos.store.streaming.abci";
                ListenFinalizeBlockRequest: {
                    typeUrl: string;
                    encode(message: _117.ListenFinalizeBlockRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _117.ListenFinalizeBlockRequest;
                    fromJSON(object: any): _117.ListenFinalizeBlockRequest;
                    toJSON(message: _117.ListenFinalizeBlockRequest): unknown;
                    fromPartial(object: Partial<_117.ListenFinalizeBlockRequest>): _117.ListenFinalizeBlockRequest;
                    fromAmino(object: _117.ListenFinalizeBlockRequestAmino): _117.ListenFinalizeBlockRequest;
                    toAmino(message: _117.ListenFinalizeBlockRequest): _117.ListenFinalizeBlockRequestAmino;
                    fromAminoMsg(object: _117.ListenFinalizeBlockRequestAminoMsg): _117.ListenFinalizeBlockRequest;
                    toAminoMsg(message: _117.ListenFinalizeBlockRequest): _117.ListenFinalizeBlockRequestAminoMsg;
                    fromProtoMsg(message: _117.ListenFinalizeBlockRequestProtoMsg): _117.ListenFinalizeBlockRequest;
                    toProto(message: _117.ListenFinalizeBlockRequest): Uint8Array;
                    toProtoMsg(message: _117.ListenFinalizeBlockRequest): _117.ListenFinalizeBlockRequestProtoMsg;
                };
                ListenFinalizeBlockResponse: {
                    typeUrl: string;
                    encode(_: _117.ListenFinalizeBlockResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _117.ListenFinalizeBlockResponse;
                    fromJSON(_: any): _117.ListenFinalizeBlockResponse;
                    toJSON(_: _117.ListenFinalizeBlockResponse): unknown;
                    fromPartial(_: Partial<_117.ListenFinalizeBlockResponse>): _117.ListenFinalizeBlockResponse;
                    fromAmino(_: _117.ListenFinalizeBlockResponseAmino): _117.ListenFinalizeBlockResponse;
                    toAmino(_: _117.ListenFinalizeBlockResponse): _117.ListenFinalizeBlockResponseAmino;
                    fromAminoMsg(object: _117.ListenFinalizeBlockResponseAminoMsg): _117.ListenFinalizeBlockResponse;
                    toAminoMsg(message: _117.ListenFinalizeBlockResponse): _117.ListenFinalizeBlockResponseAminoMsg;
                    fromProtoMsg(message: _117.ListenFinalizeBlockResponseProtoMsg): _117.ListenFinalizeBlockResponse;
                    toProto(message: _117.ListenFinalizeBlockResponse): Uint8Array;
                    toProtoMsg(message: _117.ListenFinalizeBlockResponse): _117.ListenFinalizeBlockResponseProtoMsg;
                };
                ListenCommitRequest: {
                    typeUrl: string;
                    encode(message: _117.ListenCommitRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _117.ListenCommitRequest;
                    fromJSON(object: any): _117.ListenCommitRequest;
                    toJSON(message: _117.ListenCommitRequest): unknown;
                    fromPartial(object: Partial<_117.ListenCommitRequest>): _117.ListenCommitRequest;
                    fromAmino(object: _117.ListenCommitRequestAmino): _117.ListenCommitRequest;
                    toAmino(message: _117.ListenCommitRequest): _117.ListenCommitRequestAmino;
                    fromAminoMsg(object: _117.ListenCommitRequestAminoMsg): _117.ListenCommitRequest;
                    toAminoMsg(message: _117.ListenCommitRequest): _117.ListenCommitRequestAminoMsg;
                    fromProtoMsg(message: _117.ListenCommitRequestProtoMsg): _117.ListenCommitRequest;
                    toProto(message: _117.ListenCommitRequest): Uint8Array;
                    toProtoMsg(message: _117.ListenCommitRequest): _117.ListenCommitRequestProtoMsg;
                };
                ListenCommitResponse: {
                    typeUrl: string;
                    encode(_: _117.ListenCommitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _117.ListenCommitResponse;
                    fromJSON(_: any): _117.ListenCommitResponse;
                    toJSON(_: _117.ListenCommitResponse): unknown;
                    fromPartial(_: Partial<_117.ListenCommitResponse>): _117.ListenCommitResponse;
                    fromAmino(_: _117.ListenCommitResponseAmino): _117.ListenCommitResponse;
                    toAmino(_: _117.ListenCommitResponse): _117.ListenCommitResponseAmino;
                    fromAminoMsg(object: _117.ListenCommitResponseAminoMsg): _117.ListenCommitResponse;
                    toAminoMsg(message: _117.ListenCommitResponse): _117.ListenCommitResponseAminoMsg;
                    fromProtoMsg(message: _117.ListenCommitResponseProtoMsg): _117.ListenCommitResponse;
                    toProto(message: _117.ListenCommitResponse): Uint8Array;
                    toProtoMsg(message: _117.ListenCommitResponse): _117.ListenCommitResponseProtoMsg;
                };
            };
        }
        const v1beta1: {
            protobufPackage: "cosmos.store.v1beta1";
            StoreKVPair: {
                typeUrl: string;
                encode(message: _119.StoreKVPair, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _119.StoreKVPair;
                fromJSON(object: any): _119.StoreKVPair;
                toJSON(message: _119.StoreKVPair): unknown;
                fromPartial(object: Partial<_119.StoreKVPair>): _119.StoreKVPair;
                fromAmino(object: _119.StoreKVPairAmino): _119.StoreKVPair;
                toAmino(message: _119.StoreKVPair): _119.StoreKVPairAmino;
                fromAminoMsg(object: _119.StoreKVPairAminoMsg): _119.StoreKVPair;
                toAminoMsg(message: _119.StoreKVPair): _119.StoreKVPairAminoMsg;
                fromProtoMsg(message: _119.StoreKVPairProtoMsg): _119.StoreKVPair;
                toProto(message: _119.StoreKVPair): Uint8Array;
                toProtoMsg(message: _119.StoreKVPair): _119.StoreKVPairProtoMsg;
            };
            BlockMetadata: {
                typeUrl: string;
                encode(message: _119.BlockMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _119.BlockMetadata;
                fromJSON(object: any): _119.BlockMetadata;
                toJSON(message: _119.BlockMetadata): unknown;
                fromPartial(object: Partial<_119.BlockMetadata>): _119.BlockMetadata;
                fromAmino(object: _119.BlockMetadataAmino): _119.BlockMetadata;
                toAmino(message: _119.BlockMetadata): _119.BlockMetadataAmino;
                fromAminoMsg(object: _119.BlockMetadataAminoMsg): _119.BlockMetadata;
                toAminoMsg(message: _119.BlockMetadata): _119.BlockMetadataAminoMsg;
                fromProtoMsg(message: _119.BlockMetadataProtoMsg): _119.BlockMetadata;
                toProto(message: _119.BlockMetadata): Uint8Array;
                toProtoMsg(message: _119.BlockMetadata): _119.BlockMetadataProtoMsg;
            };
            CommitInfo: {
                typeUrl: string;
                encode(message: _118.CommitInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _118.CommitInfo;
                fromJSON(object: any): _118.CommitInfo;
                toJSON(message: _118.CommitInfo): unknown;
                fromPartial(object: Partial<_118.CommitInfo>): _118.CommitInfo;
                fromAmino(object: _118.CommitInfoAmino): _118.CommitInfo;
                toAmino(message: _118.CommitInfo): _118.CommitInfoAmino;
                fromAminoMsg(object: _118.CommitInfoAminoMsg): _118.CommitInfo;
                toAminoMsg(message: _118.CommitInfo): _118.CommitInfoAminoMsg;
                fromProtoMsg(message: _118.CommitInfoProtoMsg): _118.CommitInfo;
                toProto(message: _118.CommitInfo): Uint8Array;
                toProtoMsg(message: _118.CommitInfo): _118.CommitInfoProtoMsg;
            };
            StoreInfo: {
                typeUrl: string;
                encode(message: _118.StoreInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _118.StoreInfo;
                fromJSON(object: any): _118.StoreInfo;
                toJSON(message: _118.StoreInfo): unknown;
                fromPartial(object: Partial<_118.StoreInfo>): _118.StoreInfo;
                fromAmino(object: _118.StoreInfoAmino): _118.StoreInfo;
                toAmino(message: _118.StoreInfo): _118.StoreInfoAmino;
                fromAminoMsg(object: _118.StoreInfoAminoMsg): _118.StoreInfo;
                toAminoMsg(message: _118.StoreInfo): _118.StoreInfoAminoMsg;
                fromProtoMsg(message: _118.StoreInfoProtoMsg): _118.StoreInfo;
                toProto(message: _118.StoreInfo): Uint8Array;
                toProtoMsg(message: _118.StoreInfo): _118.StoreInfoProtoMsg;
            };
            CommitID: {
                typeUrl: string;
                encode(message: _118.CommitID, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _118.CommitID;
                fromJSON(object: any): _118.CommitID;
                toJSON(message: _118.CommitID): unknown;
                fromPartial(object: Partial<_118.CommitID>): _118.CommitID;
                fromAmino(object: _118.CommitIDAmino): _118.CommitID;
                toAmino(message: _118.CommitID): _118.CommitIDAmino;
                fromAminoMsg(object: _118.CommitIDAminoMsg): _118.CommitID;
                toAminoMsg(message: _118.CommitID): _118.CommitIDAminoMsg;
                fromProtoMsg(message: _118.CommitIDProtoMsg): _118.CommitID;
                toProto(message: _118.CommitID): Uint8Array;
                toProtoMsg(message: _118.CommitID): _118.CommitIDProtoMsg;
            };
        };
    }
    namespace tx {
        namespace config {
            const v1: {
                protobufPackage: "cosmos.tx.config.v1";
                Config: {
                    typeUrl: string;
                    encode(message: _120.Config, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _120.Config;
                    fromJSON(object: any): _120.Config;
                    toJSON(message: _120.Config): unknown;
                    fromPartial(object: Partial<_120.Config>): _120.Config;
                    fromAmino(object: _120.ConfigAmino): _120.Config;
                    toAmino(message: _120.Config): _120.ConfigAmino;
                    fromAminoMsg(object: _120.ConfigAminoMsg): _120.Config;
                    toAminoMsg(message: _120.Config): _120.ConfigAminoMsg;
                    fromProtoMsg(message: _120.ConfigProtoMsg): _120.Config;
                    toProto(message: _120.Config): Uint8Array;
                    toProtoMsg(message: _120.Config): _120.ConfigProtoMsg;
                };
            };
        }
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _121.SignMode;
                signModeToJSON(object: _121.SignMode): string;
                protobufPackage: "cosmos.tx.signing.v1beta1";
                SignMode: typeof _121.SignMode;
                SignModeSDKType: typeof _121.SignMode;
                SignModeAmino: typeof _121.SignMode;
                SignatureDescriptors: {
                    typeUrl: string;
                    encode(message: _121.SignatureDescriptors, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _121.SignatureDescriptors;
                    fromJSON(object: any): _121.SignatureDescriptors;
                    toJSON(message: _121.SignatureDescriptors): unknown;
                    fromPartial(object: Partial<_121.SignatureDescriptors>): _121.SignatureDescriptors;
                    fromAmino(object: _121.SignatureDescriptorsAmino): _121.SignatureDescriptors;
                    toAmino(message: _121.SignatureDescriptors): _121.SignatureDescriptorsAmino;
                    fromAminoMsg(object: _121.SignatureDescriptorsAminoMsg): _121.SignatureDescriptors;
                    toAminoMsg(message: _121.SignatureDescriptors): _121.SignatureDescriptorsAminoMsg;
                    fromProtoMsg(message: _121.SignatureDescriptorsProtoMsg): _121.SignatureDescriptors;
                    toProto(message: _121.SignatureDescriptors): Uint8Array;
                    toProtoMsg(message: _121.SignatureDescriptors): _121.SignatureDescriptorsProtoMsg;
                };
                SignatureDescriptor: {
                    typeUrl: string;
                    encode(message: _121.SignatureDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _121.SignatureDescriptor;
                    fromJSON(object: any): _121.SignatureDescriptor;
                    toJSON(message: _121.SignatureDescriptor): unknown;
                    fromPartial(object: Partial<_121.SignatureDescriptor>): _121.SignatureDescriptor;
                    fromAmino(object: _121.SignatureDescriptorAmino): _121.SignatureDescriptor;
                    toAmino(message: _121.SignatureDescriptor): _121.SignatureDescriptorAmino;
                    fromAminoMsg(object: _121.SignatureDescriptorAminoMsg): _121.SignatureDescriptor;
                    toAminoMsg(message: _121.SignatureDescriptor): _121.SignatureDescriptorAminoMsg;
                    fromProtoMsg(message: _121.SignatureDescriptorProtoMsg): _121.SignatureDescriptor;
                    toProto(message: _121.SignatureDescriptor): Uint8Array;
                    toProtoMsg(message: _121.SignatureDescriptor): _121.SignatureDescriptorProtoMsg;
                };
                SignatureDescriptor_Data: {
                    typeUrl: string;
                    encode(message: _121.SignatureDescriptor_Data, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _121.SignatureDescriptor_Data;
                    fromJSON(object: any): _121.SignatureDescriptor_Data;
                    toJSON(message: _121.SignatureDescriptor_Data): unknown;
                    fromPartial(object: Partial<_121.SignatureDescriptor_Data>): _121.SignatureDescriptor_Data;
                    fromAmino(object: _121.SignatureDescriptor_DataAmino): _121.SignatureDescriptor_Data;
                    toAmino(message: _121.SignatureDescriptor_Data): _121.SignatureDescriptor_DataAmino;
                    fromAminoMsg(object: _121.SignatureDescriptor_DataAminoMsg): _121.SignatureDescriptor_Data;
                    toAminoMsg(message: _121.SignatureDescriptor_Data): _121.SignatureDescriptor_DataAminoMsg;
                    fromProtoMsg(message: _121.SignatureDescriptor_DataProtoMsg): _121.SignatureDescriptor_Data;
                    toProto(message: _121.SignatureDescriptor_Data): Uint8Array;
                    toProtoMsg(message: _121.SignatureDescriptor_Data): _121.SignatureDescriptor_DataProtoMsg;
                };
                SignatureDescriptor_Data_Single: {
                    typeUrl: string;
                    encode(message: _121.SignatureDescriptor_Data_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _121.SignatureDescriptor_Data_Single;
                    fromJSON(object: any): _121.SignatureDescriptor_Data_Single;
                    toJSON(message: _121.SignatureDescriptor_Data_Single): unknown;
                    fromPartial(object: Partial<_121.SignatureDescriptor_Data_Single>): _121.SignatureDescriptor_Data_Single;
                    fromAmino(object: _121.SignatureDescriptor_Data_SingleAmino): _121.SignatureDescriptor_Data_Single;
                    toAmino(message: _121.SignatureDescriptor_Data_Single): _121.SignatureDescriptor_Data_SingleAmino;
                    fromAminoMsg(object: _121.SignatureDescriptor_Data_SingleAminoMsg): _121.SignatureDescriptor_Data_Single;
                    toAminoMsg(message: _121.SignatureDescriptor_Data_Single): _121.SignatureDescriptor_Data_SingleAminoMsg;
                    fromProtoMsg(message: _121.SignatureDescriptor_Data_SingleProtoMsg): _121.SignatureDescriptor_Data_Single;
                    toProto(message: _121.SignatureDescriptor_Data_Single): Uint8Array;
                    toProtoMsg(message: _121.SignatureDescriptor_Data_Single): _121.SignatureDescriptor_Data_SingleProtoMsg;
                };
                SignatureDescriptor_Data_Multi: {
                    typeUrl: string;
                    encode(message: _121.SignatureDescriptor_Data_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _121.SignatureDescriptor_Data_Multi;
                    fromJSON(object: any): _121.SignatureDescriptor_Data_Multi;
                    toJSON(message: _121.SignatureDescriptor_Data_Multi): unknown;
                    fromPartial(object: Partial<_121.SignatureDescriptor_Data_Multi>): _121.SignatureDescriptor_Data_Multi;
                    fromAmino(object: _121.SignatureDescriptor_Data_MultiAmino): _121.SignatureDescriptor_Data_Multi;
                    toAmino(message: _121.SignatureDescriptor_Data_Multi): _121.SignatureDescriptor_Data_MultiAmino;
                    fromAminoMsg(object: _121.SignatureDescriptor_Data_MultiAminoMsg): _121.SignatureDescriptor_Data_Multi;
                    toAminoMsg(message: _121.SignatureDescriptor_Data_Multi): _121.SignatureDescriptor_Data_MultiAminoMsg;
                    fromProtoMsg(message: _121.SignatureDescriptor_Data_MultiProtoMsg): _121.SignatureDescriptor_Data_Multi;
                    toProto(message: _121.SignatureDescriptor_Data_Multi): Uint8Array;
                    toProtoMsg(message: _121.SignatureDescriptor_Data_Multi): _121.SignatureDescriptor_Data_MultiProtoMsg;
                };
            };
        }
        const v1beta1: {
            Service: typeof _261.Service;
            ServiceClientImpl: typeof _261.ServiceClientImpl;
            LCDQueryClient: typeof _242.LCDQueryClient;
            protobufPackage: "cosmos.tx.v1beta1";
            Tx: {
                typeUrl: string;
                encode(message: _123.Tx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _123.Tx;
                fromJSON(object: any): _123.Tx;
                toJSON(message: _123.Tx): unknown;
                fromPartial(object: Partial<_123.Tx>): _123.Tx;
                fromAmino(object: _123.TxAmino): _123.Tx;
                toAmino(message: _123.Tx): _123.TxAmino;
                fromAminoMsg(object: _123.TxAminoMsg): _123.Tx;
                toAminoMsg(message: _123.Tx): _123.TxAminoMsg;
                fromProtoMsg(message: _123.TxProtoMsg): _123.Tx;
                toProto(message: _123.Tx): Uint8Array;
                toProtoMsg(message: _123.Tx): _123.TxProtoMsg;
            };
            TxRaw: {
                typeUrl: string;
                encode(message: _123.TxRaw, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _123.TxRaw;
                fromJSON(object: any): _123.TxRaw;
                toJSON(message: _123.TxRaw): unknown;
                fromPartial(object: Partial<_123.TxRaw>): _123.TxRaw;
                fromAmino(object: _123.TxRawAmino): _123.TxRaw;
                toAmino(message: _123.TxRaw): _123.TxRawAmino;
                fromAminoMsg(object: _123.TxRawAminoMsg): _123.TxRaw;
                toAminoMsg(message: _123.TxRaw): _123.TxRawAminoMsg;
                fromProtoMsg(message: _123.TxRawProtoMsg): _123.TxRaw;
                toProto(message: _123.TxRaw): Uint8Array;
                toProtoMsg(message: _123.TxRaw): _123.TxRawProtoMsg;
            };
            SignDoc: {
                typeUrl: string;
                encode(message: _123.SignDoc, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _123.SignDoc;
                fromJSON(object: any): _123.SignDoc;
                toJSON(message: _123.SignDoc): unknown;
                fromPartial(object: Partial<_123.SignDoc>): _123.SignDoc;
                fromAmino(object: _123.SignDocAmino): _123.SignDoc;
                toAmino(message: _123.SignDoc): _123.SignDocAmino;
                fromAminoMsg(object: _123.SignDocAminoMsg): _123.SignDoc;
                toAminoMsg(message: _123.SignDoc): _123.SignDocAminoMsg;
                fromProtoMsg(message: _123.SignDocProtoMsg): _123.SignDoc;
                toProto(message: _123.SignDoc): Uint8Array;
                toProtoMsg(message: _123.SignDoc): _123.SignDocProtoMsg;
            };
            SignDocDirectAux: {
                typeUrl: string;
                encode(message: _123.SignDocDirectAux, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _123.SignDocDirectAux;
                fromJSON(object: any): _123.SignDocDirectAux;
                toJSON(message: _123.SignDocDirectAux): unknown;
                fromPartial(object: Partial<_123.SignDocDirectAux>): _123.SignDocDirectAux;
                fromAmino(object: _123.SignDocDirectAuxAmino): _123.SignDocDirectAux;
                toAmino(message: _123.SignDocDirectAux): _123.SignDocDirectAuxAmino;
                fromAminoMsg(object: _123.SignDocDirectAuxAminoMsg): _123.SignDocDirectAux;
                toAminoMsg(message: _123.SignDocDirectAux): _123.SignDocDirectAuxAminoMsg;
                fromProtoMsg(message: _123.SignDocDirectAuxProtoMsg): _123.SignDocDirectAux;
                toProto(message: _123.SignDocDirectAux): Uint8Array;
                toProtoMsg(message: _123.SignDocDirectAux): _123.SignDocDirectAuxProtoMsg;
            };
            TxBody: {
                typeUrl: string;
                encode(message: _123.TxBody, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _123.TxBody;
                fromJSON(object: any): _123.TxBody;
                toJSON(message: _123.TxBody): unknown;
                fromPartial(object: Partial<_123.TxBody>): _123.TxBody;
                fromAmino(object: _123.TxBodyAmino): _123.TxBody;
                toAmino(message: _123.TxBody): _123.TxBodyAmino;
                fromAminoMsg(object: _123.TxBodyAminoMsg): _123.TxBody;
                toAminoMsg(message: _123.TxBody): _123.TxBodyAminoMsg;
                fromProtoMsg(message: _123.TxBodyProtoMsg): _123.TxBody;
                toProto(message: _123.TxBody): Uint8Array;
                toProtoMsg(message: _123.TxBody): _123.TxBodyProtoMsg;
            };
            AuthInfo: {
                typeUrl: string;
                encode(message: _123.AuthInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _123.AuthInfo;
                fromJSON(object: any): _123.AuthInfo;
                toJSON(message: _123.AuthInfo): unknown;
                fromPartial(object: Partial<_123.AuthInfo>): _123.AuthInfo;
                fromAmino(object: _123.AuthInfoAmino): _123.AuthInfo;
                toAmino(message: _123.AuthInfo): _123.AuthInfoAmino;
                fromAminoMsg(object: _123.AuthInfoAminoMsg): _123.AuthInfo;
                toAminoMsg(message: _123.AuthInfo): _123.AuthInfoAminoMsg;
                fromProtoMsg(message: _123.AuthInfoProtoMsg): _123.AuthInfo;
                toProto(message: _123.AuthInfo): Uint8Array;
                toProtoMsg(message: _123.AuthInfo): _123.AuthInfoProtoMsg;
            };
            SignerInfo: {
                typeUrl: string;
                encode(message: _123.SignerInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _123.SignerInfo;
                fromJSON(object: any): _123.SignerInfo;
                toJSON(message: _123.SignerInfo): unknown;
                fromPartial(object: Partial<_123.SignerInfo>): _123.SignerInfo;
                fromAmino(object: _123.SignerInfoAmino): _123.SignerInfo;
                toAmino(message: _123.SignerInfo): _123.SignerInfoAmino;
                fromAminoMsg(object: _123.SignerInfoAminoMsg): _123.SignerInfo;
                toAminoMsg(message: _123.SignerInfo): _123.SignerInfoAminoMsg;
                fromProtoMsg(message: _123.SignerInfoProtoMsg): _123.SignerInfo;
                toProto(message: _123.SignerInfo): Uint8Array;
                toProtoMsg(message: _123.SignerInfo): _123.SignerInfoProtoMsg;
            };
            ModeInfo: {
                typeUrl: string;
                encode(message: _123.ModeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _123.ModeInfo;
                fromJSON(object: any): _123.ModeInfo;
                toJSON(message: _123.ModeInfo): unknown;
                fromPartial(object: Partial<_123.ModeInfo>): _123.ModeInfo;
                fromAmino(object: _123.ModeInfoAmino): _123.ModeInfo;
                toAmino(message: _123.ModeInfo): _123.ModeInfoAmino;
                fromAminoMsg(object: _123.ModeInfoAminoMsg): _123.ModeInfo;
                toAminoMsg(message: _123.ModeInfo): _123.ModeInfoAminoMsg;
                fromProtoMsg(message: _123.ModeInfoProtoMsg): _123.ModeInfo;
                toProto(message: _123.ModeInfo): Uint8Array;
                toProtoMsg(message: _123.ModeInfo): _123.ModeInfoProtoMsg;
            };
            ModeInfo_Single: {
                typeUrl: string;
                encode(message: _123.ModeInfo_Single, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _123.ModeInfo_Single;
                fromJSON(object: any): _123.ModeInfo_Single;
                toJSON(message: _123.ModeInfo_Single): unknown;
                fromPartial(object: Partial<_123.ModeInfo_Single>): _123.ModeInfo_Single;
                fromAmino(object: _123.ModeInfo_SingleAmino): _123.ModeInfo_Single;
                toAmino(message: _123.ModeInfo_Single): _123.ModeInfo_SingleAmino;
                fromAminoMsg(object: _123.ModeInfo_SingleAminoMsg): _123.ModeInfo_Single;
                toAminoMsg(message: _123.ModeInfo_Single): _123.ModeInfo_SingleAminoMsg;
                fromProtoMsg(message: _123.ModeInfo_SingleProtoMsg): _123.ModeInfo_Single;
                toProto(message: _123.ModeInfo_Single): Uint8Array;
                toProtoMsg(message: _123.ModeInfo_Single): _123.ModeInfo_SingleProtoMsg;
            };
            ModeInfo_Multi: {
                typeUrl: string;
                encode(message: _123.ModeInfo_Multi, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _123.ModeInfo_Multi;
                fromJSON(object: any): _123.ModeInfo_Multi;
                toJSON(message: _123.ModeInfo_Multi): unknown;
                fromPartial(object: Partial<_123.ModeInfo_Multi>): _123.ModeInfo_Multi;
                fromAmino(object: _123.ModeInfo_MultiAmino): _123.ModeInfo_Multi;
                toAmino(message: _123.ModeInfo_Multi): _123.ModeInfo_MultiAmino;
                fromAminoMsg(object: _123.ModeInfo_MultiAminoMsg): _123.ModeInfo_Multi;
                toAminoMsg(message: _123.ModeInfo_Multi): _123.ModeInfo_MultiAminoMsg;
                fromProtoMsg(message: _123.ModeInfo_MultiProtoMsg): _123.ModeInfo_Multi;
                toProto(message: _123.ModeInfo_Multi): Uint8Array;
                toProtoMsg(message: _123.ModeInfo_Multi): _123.ModeInfo_MultiProtoMsg;
            };
            Fee: {
                typeUrl: string;
                encode(message: _123.Fee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _123.Fee;
                fromJSON(object: any): _123.Fee;
                toJSON(message: _123.Fee): unknown;
                fromPartial(object: Partial<_123.Fee>): _123.Fee;
                fromAmino(object: _123.FeeAmino): _123.Fee;
                toAmino(message: _123.Fee): _123.FeeAmino;
                fromAminoMsg(object: _123.FeeAminoMsg): _123.Fee;
                toAminoMsg(message: _123.Fee): _123.FeeAminoMsg;
                fromProtoMsg(message: _123.FeeProtoMsg): _123.Fee;
                toProto(message: _123.Fee): Uint8Array;
                toProtoMsg(message: _123.Fee): _123.FeeProtoMsg;
            };
            Tip: {
                typeUrl: string;
                encode(message: _123.Tip, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _123.Tip;
                fromJSON(object: any): _123.Tip;
                toJSON(message: _123.Tip): unknown;
                fromPartial(object: Partial<_123.Tip>): _123.Tip;
                fromAmino(object: _123.TipAmino): _123.Tip;
                toAmino(message: _123.Tip): _123.TipAmino;
                fromAminoMsg(object: _123.TipAminoMsg): _123.Tip;
                toAminoMsg(message: _123.Tip): _123.TipAminoMsg;
                fromProtoMsg(message: _123.TipProtoMsg): _123.Tip;
                toProto(message: _123.Tip): Uint8Array;
                toProtoMsg(message: _123.Tip): _123.TipProtoMsg;
            };
            AuxSignerData: {
                typeUrl: string;
                encode(message: _123.AuxSignerData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _123.AuxSignerData;
                fromJSON(object: any): _123.AuxSignerData;
                toJSON(message: _123.AuxSignerData): unknown;
                fromPartial(object: Partial<_123.AuxSignerData>): _123.AuxSignerData;
                fromAmino(object: _123.AuxSignerDataAmino): _123.AuxSignerData;
                toAmino(message: _123.AuxSignerData): _123.AuxSignerDataAmino;
                fromAminoMsg(object: _123.AuxSignerDataAminoMsg): _123.AuxSignerData;
                toAminoMsg(message: _123.AuxSignerData): _123.AuxSignerDataAminoMsg;
                fromProtoMsg(message: _123.AuxSignerDataProtoMsg): _123.AuxSignerData;
                toProto(message: _123.AuxSignerData): Uint8Array;
                toProtoMsg(message: _123.AuxSignerData): _123.AuxSignerDataProtoMsg;
            };
            orderByFromJSON(object: any): _122.OrderBy;
            orderByToJSON(object: _122.OrderBy): string;
            broadcastModeFromJSON(object: any): _122.BroadcastMode;
            broadcastModeToJSON(object: _122.BroadcastMode): string;
            OrderBy: typeof _122.OrderBy;
            OrderBySDKType: typeof _122.OrderBy;
            OrderByAmino: typeof _122.OrderBy;
            BroadcastMode: typeof _122.BroadcastMode;
            BroadcastModeSDKType: typeof _122.BroadcastMode;
            BroadcastModeAmino: typeof _122.BroadcastMode;
            GetTxsEventRequest: {
                typeUrl: string;
                encode(message: _122.GetTxsEventRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _122.GetTxsEventRequest;
                fromJSON(object: any): _122.GetTxsEventRequest;
                toJSON(message: _122.GetTxsEventRequest): unknown;
                fromPartial(object: Partial<_122.GetTxsEventRequest>): _122.GetTxsEventRequest;
                fromAmino(object: _122.GetTxsEventRequestAmino): _122.GetTxsEventRequest;
                toAmino(message: _122.GetTxsEventRequest): _122.GetTxsEventRequestAmino;
                fromAminoMsg(object: _122.GetTxsEventRequestAminoMsg): _122.GetTxsEventRequest;
                toAminoMsg(message: _122.GetTxsEventRequest): _122.GetTxsEventRequestAminoMsg;
                fromProtoMsg(message: _122.GetTxsEventRequestProtoMsg): _122.GetTxsEventRequest;
                toProto(message: _122.GetTxsEventRequest): Uint8Array;
                toProtoMsg(message: _122.GetTxsEventRequest): _122.GetTxsEventRequestProtoMsg;
            };
            GetTxsEventResponse: {
                typeUrl: string;
                encode(message: _122.GetTxsEventResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _122.GetTxsEventResponse;
                fromJSON(object: any): _122.GetTxsEventResponse;
                toJSON(message: _122.GetTxsEventResponse): unknown;
                fromPartial(object: Partial<_122.GetTxsEventResponse>): _122.GetTxsEventResponse;
                fromAmino(object: _122.GetTxsEventResponseAmino): _122.GetTxsEventResponse;
                toAmino(message: _122.GetTxsEventResponse): _122.GetTxsEventResponseAmino;
                fromAminoMsg(object: _122.GetTxsEventResponseAminoMsg): _122.GetTxsEventResponse;
                toAminoMsg(message: _122.GetTxsEventResponse): _122.GetTxsEventResponseAminoMsg;
                fromProtoMsg(message: _122.GetTxsEventResponseProtoMsg): _122.GetTxsEventResponse;
                toProto(message: _122.GetTxsEventResponse): Uint8Array;
                toProtoMsg(message: _122.GetTxsEventResponse): _122.GetTxsEventResponseProtoMsg;
            };
            BroadcastTxRequest: {
                typeUrl: string;
                encode(message: _122.BroadcastTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _122.BroadcastTxRequest;
                fromJSON(object: any): _122.BroadcastTxRequest;
                toJSON(message: _122.BroadcastTxRequest): unknown;
                fromPartial(object: Partial<_122.BroadcastTxRequest>): _122.BroadcastTxRequest;
                fromAmino(object: _122.BroadcastTxRequestAmino): _122.BroadcastTxRequest;
                toAmino(message: _122.BroadcastTxRequest): _122.BroadcastTxRequestAmino;
                fromAminoMsg(object: _122.BroadcastTxRequestAminoMsg): _122.BroadcastTxRequest;
                toAminoMsg(message: _122.BroadcastTxRequest): _122.BroadcastTxRequestAminoMsg;
                fromProtoMsg(message: _122.BroadcastTxRequestProtoMsg): _122.BroadcastTxRequest;
                toProto(message: _122.BroadcastTxRequest): Uint8Array;
                toProtoMsg(message: _122.BroadcastTxRequest): _122.BroadcastTxRequestProtoMsg;
            };
            BroadcastTxResponse: {
                typeUrl: string;
                encode(message: _122.BroadcastTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _122.BroadcastTxResponse;
                fromJSON(object: any): _122.BroadcastTxResponse;
                toJSON(message: _122.BroadcastTxResponse): unknown;
                fromPartial(object: Partial<_122.BroadcastTxResponse>): _122.BroadcastTxResponse;
                fromAmino(object: _122.BroadcastTxResponseAmino): _122.BroadcastTxResponse;
                toAmino(message: _122.BroadcastTxResponse): _122.BroadcastTxResponseAmino;
                fromAminoMsg(object: _122.BroadcastTxResponseAminoMsg): _122.BroadcastTxResponse;
                toAminoMsg(message: _122.BroadcastTxResponse): _122.BroadcastTxResponseAminoMsg;
                fromProtoMsg(message: _122.BroadcastTxResponseProtoMsg): _122.BroadcastTxResponse;
                toProto(message: _122.BroadcastTxResponse): Uint8Array;
                toProtoMsg(message: _122.BroadcastTxResponse): _122.BroadcastTxResponseProtoMsg;
            };
            SimulateRequest: {
                typeUrl: string;
                encode(message: _122.SimulateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _122.SimulateRequest;
                fromJSON(object: any): _122.SimulateRequest;
                toJSON(message: _122.SimulateRequest): unknown;
                fromPartial(object: Partial<_122.SimulateRequest>): _122.SimulateRequest;
                fromAmino(object: _122.SimulateRequestAmino): _122.SimulateRequest;
                toAmino(message: _122.SimulateRequest): _122.SimulateRequestAmino;
                fromAminoMsg(object: _122.SimulateRequestAminoMsg): _122.SimulateRequest;
                toAminoMsg(message: _122.SimulateRequest): _122.SimulateRequestAminoMsg;
                fromProtoMsg(message: _122.SimulateRequestProtoMsg): _122.SimulateRequest;
                toProto(message: _122.SimulateRequest): Uint8Array;
                toProtoMsg(message: _122.SimulateRequest): _122.SimulateRequestProtoMsg;
            };
            SimulateResponse: {
                typeUrl: string;
                encode(message: _122.SimulateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _122.SimulateResponse;
                fromJSON(object: any): _122.SimulateResponse;
                toJSON(message: _122.SimulateResponse): unknown;
                fromPartial(object: Partial<_122.SimulateResponse>): _122.SimulateResponse;
                fromAmino(object: _122.SimulateResponseAmino): _122.SimulateResponse;
                toAmino(message: _122.SimulateResponse): _122.SimulateResponseAmino;
                fromAminoMsg(object: _122.SimulateResponseAminoMsg): _122.SimulateResponse;
                toAminoMsg(message: _122.SimulateResponse): _122.SimulateResponseAminoMsg;
                fromProtoMsg(message: _122.SimulateResponseProtoMsg): _122.SimulateResponse;
                toProto(message: _122.SimulateResponse): Uint8Array;
                toProtoMsg(message: _122.SimulateResponse): _122.SimulateResponseProtoMsg;
            };
            GetTxRequest: {
                typeUrl: string;
                encode(message: _122.GetTxRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _122.GetTxRequest;
                fromJSON(object: any): _122.GetTxRequest;
                toJSON(message: _122.GetTxRequest): unknown;
                fromPartial(object: Partial<_122.GetTxRequest>): _122.GetTxRequest;
                fromAmino(object: _122.GetTxRequestAmino): _122.GetTxRequest;
                toAmino(message: _122.GetTxRequest): _122.GetTxRequestAmino;
                fromAminoMsg(object: _122.GetTxRequestAminoMsg): _122.GetTxRequest;
                toAminoMsg(message: _122.GetTxRequest): _122.GetTxRequestAminoMsg;
                fromProtoMsg(message: _122.GetTxRequestProtoMsg): _122.GetTxRequest;
                toProto(message: _122.GetTxRequest): Uint8Array;
                toProtoMsg(message: _122.GetTxRequest): _122.GetTxRequestProtoMsg;
            };
            GetTxResponse: {
                typeUrl: string;
                encode(message: _122.GetTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _122.GetTxResponse;
                fromJSON(object: any): _122.GetTxResponse;
                toJSON(message: _122.GetTxResponse): unknown;
                fromPartial(object: Partial<_122.GetTxResponse>): _122.GetTxResponse;
                fromAmino(object: _122.GetTxResponseAmino): _122.GetTxResponse;
                toAmino(message: _122.GetTxResponse): _122.GetTxResponseAmino;
                fromAminoMsg(object: _122.GetTxResponseAminoMsg): _122.GetTxResponse;
                toAminoMsg(message: _122.GetTxResponse): _122.GetTxResponseAminoMsg;
                fromProtoMsg(message: _122.GetTxResponseProtoMsg): _122.GetTxResponse;
                toProto(message: _122.GetTxResponse): Uint8Array;
                toProtoMsg(message: _122.GetTxResponse): _122.GetTxResponseProtoMsg;
            };
            GetBlockWithTxsRequest: {
                typeUrl: string;
                encode(message: _122.GetBlockWithTxsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _122.GetBlockWithTxsRequest;
                fromJSON(object: any): _122.GetBlockWithTxsRequest;
                toJSON(message: _122.GetBlockWithTxsRequest): unknown;
                fromPartial(object: Partial<_122.GetBlockWithTxsRequest>): _122.GetBlockWithTxsRequest;
                fromAmino(object: _122.GetBlockWithTxsRequestAmino): _122.GetBlockWithTxsRequest;
                toAmino(message: _122.GetBlockWithTxsRequest): _122.GetBlockWithTxsRequestAmino;
                fromAminoMsg(object: _122.GetBlockWithTxsRequestAminoMsg): _122.GetBlockWithTxsRequest;
                toAminoMsg(message: _122.GetBlockWithTxsRequest): _122.GetBlockWithTxsRequestAminoMsg;
                fromProtoMsg(message: _122.GetBlockWithTxsRequestProtoMsg): _122.GetBlockWithTxsRequest;
                toProto(message: _122.GetBlockWithTxsRequest): Uint8Array;
                toProtoMsg(message: _122.GetBlockWithTxsRequest): _122.GetBlockWithTxsRequestProtoMsg;
            };
            GetBlockWithTxsResponse: {
                typeUrl: string;
                encode(message: _122.GetBlockWithTxsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _122.GetBlockWithTxsResponse;
                fromJSON(object: any): _122.GetBlockWithTxsResponse;
                toJSON(message: _122.GetBlockWithTxsResponse): unknown;
                fromPartial(object: Partial<_122.GetBlockWithTxsResponse>): _122.GetBlockWithTxsResponse;
                fromAmino(object: _122.GetBlockWithTxsResponseAmino): _122.GetBlockWithTxsResponse;
                toAmino(message: _122.GetBlockWithTxsResponse): _122.GetBlockWithTxsResponseAmino;
                fromAminoMsg(object: _122.GetBlockWithTxsResponseAminoMsg): _122.GetBlockWithTxsResponse;
                toAminoMsg(message: _122.GetBlockWithTxsResponse): _122.GetBlockWithTxsResponseAminoMsg;
                fromProtoMsg(message: _122.GetBlockWithTxsResponseProtoMsg): _122.GetBlockWithTxsResponse;
                toProto(message: _122.GetBlockWithTxsResponse): Uint8Array;
                toProtoMsg(message: _122.GetBlockWithTxsResponse): _122.GetBlockWithTxsResponseProtoMsg;
            };
            TxDecodeRequest: {
                typeUrl: string;
                encode(message: _122.TxDecodeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _122.TxDecodeRequest;
                fromJSON(object: any): _122.TxDecodeRequest;
                toJSON(message: _122.TxDecodeRequest): unknown;
                fromPartial(object: Partial<_122.TxDecodeRequest>): _122.TxDecodeRequest;
                fromAmino(object: _122.TxDecodeRequestAmino): _122.TxDecodeRequest;
                toAmino(message: _122.TxDecodeRequest): _122.TxDecodeRequestAmino;
                fromAminoMsg(object: _122.TxDecodeRequestAminoMsg): _122.TxDecodeRequest;
                toAminoMsg(message: _122.TxDecodeRequest): _122.TxDecodeRequestAminoMsg;
                fromProtoMsg(message: _122.TxDecodeRequestProtoMsg): _122.TxDecodeRequest;
                toProto(message: _122.TxDecodeRequest): Uint8Array;
                toProtoMsg(message: _122.TxDecodeRequest): _122.TxDecodeRequestProtoMsg;
            };
            TxDecodeResponse: {
                typeUrl: string;
                encode(message: _122.TxDecodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _122.TxDecodeResponse;
                fromJSON(object: any): _122.TxDecodeResponse;
                toJSON(message: _122.TxDecodeResponse): unknown;
                fromPartial(object: Partial<_122.TxDecodeResponse>): _122.TxDecodeResponse;
                fromAmino(object: _122.TxDecodeResponseAmino): _122.TxDecodeResponse;
                toAmino(message: _122.TxDecodeResponse): _122.TxDecodeResponseAmino;
                fromAminoMsg(object: _122.TxDecodeResponseAminoMsg): _122.TxDecodeResponse;
                toAminoMsg(message: _122.TxDecodeResponse): _122.TxDecodeResponseAminoMsg;
                fromProtoMsg(message: _122.TxDecodeResponseProtoMsg): _122.TxDecodeResponse;
                toProto(message: _122.TxDecodeResponse): Uint8Array;
                toProtoMsg(message: _122.TxDecodeResponse): _122.TxDecodeResponseProtoMsg;
            };
            TxEncodeRequest: {
                typeUrl: string;
                encode(message: _122.TxEncodeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _122.TxEncodeRequest;
                fromJSON(object: any): _122.TxEncodeRequest;
                toJSON(message: _122.TxEncodeRequest): unknown;
                fromPartial(object: Partial<_122.TxEncodeRequest>): _122.TxEncodeRequest;
                fromAmino(object: _122.TxEncodeRequestAmino): _122.TxEncodeRequest;
                toAmino(message: _122.TxEncodeRequest): _122.TxEncodeRequestAmino;
                fromAminoMsg(object: _122.TxEncodeRequestAminoMsg): _122.TxEncodeRequest;
                toAminoMsg(message: _122.TxEncodeRequest): _122.TxEncodeRequestAminoMsg;
                fromProtoMsg(message: _122.TxEncodeRequestProtoMsg): _122.TxEncodeRequest;
                toProto(message: _122.TxEncodeRequest): Uint8Array;
                toProtoMsg(message: _122.TxEncodeRequest): _122.TxEncodeRequestProtoMsg;
            };
            TxEncodeResponse: {
                typeUrl: string;
                encode(message: _122.TxEncodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _122.TxEncodeResponse;
                fromJSON(object: any): _122.TxEncodeResponse;
                toJSON(message: _122.TxEncodeResponse): unknown;
                fromPartial(object: Partial<_122.TxEncodeResponse>): _122.TxEncodeResponse;
                fromAmino(object: _122.TxEncodeResponseAmino): _122.TxEncodeResponse;
                toAmino(message: _122.TxEncodeResponse): _122.TxEncodeResponseAmino;
                fromAminoMsg(object: _122.TxEncodeResponseAminoMsg): _122.TxEncodeResponse;
                toAminoMsg(message: _122.TxEncodeResponse): _122.TxEncodeResponseAminoMsg;
                fromProtoMsg(message: _122.TxEncodeResponseProtoMsg): _122.TxEncodeResponse;
                toProto(message: _122.TxEncodeResponse): Uint8Array;
                toProtoMsg(message: _122.TxEncodeResponse): _122.TxEncodeResponseProtoMsg;
            };
            TxEncodeAminoRequest: {
                typeUrl: string;
                encode(message: _122.TxEncodeAminoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _122.TxEncodeAminoRequest;
                fromJSON(object: any): _122.TxEncodeAminoRequest;
                toJSON(message: _122.TxEncodeAminoRequest): unknown;
                fromPartial(object: Partial<_122.TxEncodeAminoRequest>): _122.TxEncodeAminoRequest;
                fromAmino(object: _122.TxEncodeAminoRequestAmino): _122.TxEncodeAminoRequest;
                toAmino(message: _122.TxEncodeAminoRequest): _122.TxEncodeAminoRequestAmino;
                fromAminoMsg(object: _122.TxEncodeAminoRequestAminoMsg): _122.TxEncodeAminoRequest;
                toAminoMsg(message: _122.TxEncodeAminoRequest): _122.TxEncodeAminoRequestAminoMsg;
                fromProtoMsg(message: _122.TxEncodeAminoRequestProtoMsg): _122.TxEncodeAminoRequest;
                toProto(message: _122.TxEncodeAminoRequest): Uint8Array;
                toProtoMsg(message: _122.TxEncodeAminoRequest): _122.TxEncodeAminoRequestProtoMsg;
            };
            TxEncodeAminoResponse: {
                typeUrl: string;
                encode(message: _122.TxEncodeAminoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _122.TxEncodeAminoResponse;
                fromJSON(object: any): _122.TxEncodeAminoResponse;
                toJSON(message: _122.TxEncodeAminoResponse): unknown;
                fromPartial(object: Partial<_122.TxEncodeAminoResponse>): _122.TxEncodeAminoResponse;
                fromAmino(object: _122.TxEncodeAminoResponseAmino): _122.TxEncodeAminoResponse;
                toAmino(message: _122.TxEncodeAminoResponse): _122.TxEncodeAminoResponseAmino;
                fromAminoMsg(object: _122.TxEncodeAminoResponseAminoMsg): _122.TxEncodeAminoResponse;
                toAminoMsg(message: _122.TxEncodeAminoResponse): _122.TxEncodeAminoResponseAminoMsg;
                fromProtoMsg(message: _122.TxEncodeAminoResponseProtoMsg): _122.TxEncodeAminoResponse;
                toProto(message: _122.TxEncodeAminoResponse): Uint8Array;
                toProtoMsg(message: _122.TxEncodeAminoResponse): _122.TxEncodeAminoResponseProtoMsg;
            };
            TxDecodeAminoRequest: {
                typeUrl: string;
                encode(message: _122.TxDecodeAminoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _122.TxDecodeAminoRequest;
                fromJSON(object: any): _122.TxDecodeAminoRequest;
                toJSON(message: _122.TxDecodeAminoRequest): unknown;
                fromPartial(object: Partial<_122.TxDecodeAminoRequest>): _122.TxDecodeAminoRequest;
                fromAmino(object: _122.TxDecodeAminoRequestAmino): _122.TxDecodeAminoRequest;
                toAmino(message: _122.TxDecodeAminoRequest): _122.TxDecodeAminoRequestAmino;
                fromAminoMsg(object: _122.TxDecodeAminoRequestAminoMsg): _122.TxDecodeAminoRequest;
                toAminoMsg(message: _122.TxDecodeAminoRequest): _122.TxDecodeAminoRequestAminoMsg;
                fromProtoMsg(message: _122.TxDecodeAminoRequestProtoMsg): _122.TxDecodeAminoRequest;
                toProto(message: _122.TxDecodeAminoRequest): Uint8Array;
                toProtoMsg(message: _122.TxDecodeAminoRequest): _122.TxDecodeAminoRequestProtoMsg;
            };
            TxDecodeAminoResponse: {
                typeUrl: string;
                encode(message: _122.TxDecodeAminoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _122.TxDecodeAminoResponse;
                fromJSON(object: any): _122.TxDecodeAminoResponse;
                toJSON(message: _122.TxDecodeAminoResponse): unknown;
                fromPartial(object: Partial<_122.TxDecodeAminoResponse>): _122.TxDecodeAminoResponse;
                fromAmino(object: _122.TxDecodeAminoResponseAmino): _122.TxDecodeAminoResponse;
                toAmino(message: _122.TxDecodeAminoResponse): _122.TxDecodeAminoResponseAmino;
                fromAminoMsg(object: _122.TxDecodeAminoResponseAminoMsg): _122.TxDecodeAminoResponse;
                toAminoMsg(message: _122.TxDecodeAminoResponse): _122.TxDecodeAminoResponseAminoMsg;
                fromProtoMsg(message: _122.TxDecodeAminoResponseProtoMsg): _122.TxDecodeAminoResponse;
                toProto(message: _122.TxDecodeAminoResponse): Uint8Array;
                toProtoMsg(message: _122.TxDecodeAminoResponse): _122.TxDecodeAminoResponseProtoMsg;
            };
        };
    }
    namespace upgrade {
        namespace module {
            const v1: {
                protobufPackage: "cosmos.upgrade.module.v1";
                Module: {
                    typeUrl: string;
                    encode(message: _124.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _124.Module;
                    fromJSON(object: any): _124.Module;
                    toJSON(message: _124.Module): unknown;
                    fromPartial(object: Partial<_124.Module>): _124.Module;
                    fromAmino(object: _124.ModuleAmino): _124.Module;
                    toAmino(message: _124.Module): _124.ModuleAmino;
                    fromAminoMsg(object: _124.ModuleAminoMsg): _124.Module;
                    toAminoMsg(message: _124.Module): _124.ModuleAminoMsg;
                    fromProtoMsg(message: _124.ModuleProtoMsg): _124.Module;
                    toProto(message: _124.Module): Uint8Array;
                    toProtoMsg(message: _124.Module): _124.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            Msg: typeof _276.Msg;
            Query: typeof _262.Query;
            QueryClientImpl: typeof _262.QueryClientImpl;
            LCDQueryClient: typeof _243.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    softwareUpgrade(value: _126.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUpgrade(value: _126.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    softwareUpgrade(value: _126.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _126.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _126.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _126.MsgCancelUpgrade;
                    };
                };
                toJSON: {
                    softwareUpgrade(value: _126.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: unknown;
                    };
                    cancelUpgrade(value: _126.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    softwareUpgrade(value: any): {
                        typeUrl: string;
                        value: _126.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: any): {
                        typeUrl: string;
                        value: _126.MsgCancelUpgrade;
                    };
                };
                fromPartial: {
                    softwareUpgrade(value: _126.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _126.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _126.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _126.MsgCancelUpgrade;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
                    aminoType: string;
                    toAmino: (message: _126.MsgSoftwareUpgrade) => _126.MsgSoftwareUpgradeAmino;
                    fromAmino: (object: _126.MsgSoftwareUpgradeAmino) => _126.MsgSoftwareUpgrade;
                };
                "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
                    aminoType: string;
                    toAmino: (message: _126.MsgCancelUpgrade) => _126.MsgCancelUpgradeAmino;
                    fromAmino: (object: _126.MsgCancelUpgradeAmino) => _126.MsgCancelUpgrade;
                };
            };
            protobufPackage: "cosmos.upgrade.v1beta1";
            Plan: {
                typeUrl: string;
                encode(message: _127.Plan, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _127.Plan;
                fromJSON(object: any): _127.Plan;
                toJSON(message: _127.Plan): unknown;
                fromPartial(object: Partial<_127.Plan>): _127.Plan;
                fromAmino(object: _127.PlanAmino): _127.Plan;
                toAmino(message: _127.Plan): _127.PlanAmino;
                fromAminoMsg(object: _127.PlanAminoMsg): _127.Plan;
                toAminoMsg(message: _127.Plan): _127.PlanAminoMsg;
                fromProtoMsg(message: _127.PlanProtoMsg): _127.Plan;
                toProto(message: _127.Plan): Uint8Array;
                toProtoMsg(message: _127.Plan): _127.PlanProtoMsg;
            };
            SoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _127.SoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _127.SoftwareUpgradeProposal;
                fromJSON(object: any): _127.SoftwareUpgradeProposal;
                toJSON(message: _127.SoftwareUpgradeProposal): unknown;
                fromPartial(object: Partial<_127.SoftwareUpgradeProposal>): _127.SoftwareUpgradeProposal;
                fromAmino(object: _127.SoftwareUpgradeProposalAmino): _127.SoftwareUpgradeProposal;
                toAmino(message: _127.SoftwareUpgradeProposal): _127.SoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _127.SoftwareUpgradeProposalAminoMsg): _127.SoftwareUpgradeProposal;
                toAminoMsg(message: _127.SoftwareUpgradeProposal): _127.SoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _127.SoftwareUpgradeProposalProtoMsg): _127.SoftwareUpgradeProposal;
                toProto(message: _127.SoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _127.SoftwareUpgradeProposal): _127.SoftwareUpgradeProposalProtoMsg;
            };
            CancelSoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _127.CancelSoftwareUpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _127.CancelSoftwareUpgradeProposal;
                fromJSON(object: any): _127.CancelSoftwareUpgradeProposal;
                toJSON(message: _127.CancelSoftwareUpgradeProposal): unknown;
                fromPartial(object: Partial<_127.CancelSoftwareUpgradeProposal>): _127.CancelSoftwareUpgradeProposal;
                fromAmino(object: _127.CancelSoftwareUpgradeProposalAmino): _127.CancelSoftwareUpgradeProposal;
                toAmino(message: _127.CancelSoftwareUpgradeProposal): _127.CancelSoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _127.CancelSoftwareUpgradeProposalAminoMsg): _127.CancelSoftwareUpgradeProposal;
                toAminoMsg(message: _127.CancelSoftwareUpgradeProposal): _127.CancelSoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _127.CancelSoftwareUpgradeProposalProtoMsg): _127.CancelSoftwareUpgradeProposal;
                toProto(message: _127.CancelSoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _127.CancelSoftwareUpgradeProposal): _127.CancelSoftwareUpgradeProposalProtoMsg;
            };
            ModuleVersion: {
                typeUrl: string;
                encode(message: _127.ModuleVersion, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _127.ModuleVersion;
                fromJSON(object: any): _127.ModuleVersion;
                toJSON(message: _127.ModuleVersion): unknown;
                fromPartial(object: Partial<_127.ModuleVersion>): _127.ModuleVersion;
                fromAmino(object: _127.ModuleVersionAmino): _127.ModuleVersion;
                toAmino(message: _127.ModuleVersion): _127.ModuleVersionAmino;
                fromAminoMsg(object: _127.ModuleVersionAminoMsg): _127.ModuleVersion;
                toAminoMsg(message: _127.ModuleVersion): _127.ModuleVersionAminoMsg;
                fromProtoMsg(message: _127.ModuleVersionProtoMsg): _127.ModuleVersion;
                toProto(message: _127.ModuleVersion): Uint8Array;
                toProtoMsg(message: _127.ModuleVersion): _127.ModuleVersionProtoMsg;
            };
            MsgSoftwareUpgrade: {
                typeUrl: string;
                encode(message: _126.MsgSoftwareUpgrade, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _126.MsgSoftwareUpgrade;
                fromJSON(object: any): _126.MsgSoftwareUpgrade;
                toJSON(message: _126.MsgSoftwareUpgrade): unknown;
                fromPartial(object: Partial<_126.MsgSoftwareUpgrade>): _126.MsgSoftwareUpgrade;
                fromAmino(object: _126.MsgSoftwareUpgradeAmino): _126.MsgSoftwareUpgrade;
                toAmino(message: _126.MsgSoftwareUpgrade): _126.MsgSoftwareUpgradeAmino;
                fromAminoMsg(object: _126.MsgSoftwareUpgradeAminoMsg): _126.MsgSoftwareUpgrade;
                toAminoMsg(message: _126.MsgSoftwareUpgrade): _126.MsgSoftwareUpgradeAminoMsg;
                fromProtoMsg(message: _126.MsgSoftwareUpgradeProtoMsg): _126.MsgSoftwareUpgrade;
                toProto(message: _126.MsgSoftwareUpgrade): Uint8Array;
                toProtoMsg(message: _126.MsgSoftwareUpgrade): _126.MsgSoftwareUpgradeProtoMsg;
            };
            MsgSoftwareUpgradeResponse: {
                typeUrl: string;
                encode(_: _126.MsgSoftwareUpgradeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _126.MsgSoftwareUpgradeResponse;
                fromJSON(_: any): _126.MsgSoftwareUpgradeResponse;
                toJSON(_: _126.MsgSoftwareUpgradeResponse): unknown;
                fromPartial(_: Partial<_126.MsgSoftwareUpgradeResponse>): _126.MsgSoftwareUpgradeResponse;
                fromAmino(_: _126.MsgSoftwareUpgradeResponseAmino): _126.MsgSoftwareUpgradeResponse;
                toAmino(_: _126.MsgSoftwareUpgradeResponse): _126.MsgSoftwareUpgradeResponseAmino;
                fromAminoMsg(object: _126.MsgSoftwareUpgradeResponseAminoMsg): _126.MsgSoftwareUpgradeResponse;
                toAminoMsg(message: _126.MsgSoftwareUpgradeResponse): _126.MsgSoftwareUpgradeResponseAminoMsg;
                fromProtoMsg(message: _126.MsgSoftwareUpgradeResponseProtoMsg): _126.MsgSoftwareUpgradeResponse;
                toProto(message: _126.MsgSoftwareUpgradeResponse): Uint8Array;
                toProtoMsg(message: _126.MsgSoftwareUpgradeResponse): _126.MsgSoftwareUpgradeResponseProtoMsg;
            };
            MsgCancelUpgrade: {
                typeUrl: string;
                encode(message: _126.MsgCancelUpgrade, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _126.MsgCancelUpgrade;
                fromJSON(object: any): _126.MsgCancelUpgrade;
                toJSON(message: _126.MsgCancelUpgrade): unknown;
                fromPartial(object: Partial<_126.MsgCancelUpgrade>): _126.MsgCancelUpgrade;
                fromAmino(object: _126.MsgCancelUpgradeAmino): _126.MsgCancelUpgrade;
                toAmino(message: _126.MsgCancelUpgrade): _126.MsgCancelUpgradeAmino;
                fromAminoMsg(object: _126.MsgCancelUpgradeAminoMsg): _126.MsgCancelUpgrade;
                toAminoMsg(message: _126.MsgCancelUpgrade): _126.MsgCancelUpgradeAminoMsg;
                fromProtoMsg(message: _126.MsgCancelUpgradeProtoMsg): _126.MsgCancelUpgrade;
                toProto(message: _126.MsgCancelUpgrade): Uint8Array;
                toProtoMsg(message: _126.MsgCancelUpgrade): _126.MsgCancelUpgradeProtoMsg;
            };
            MsgCancelUpgradeResponse: {
                typeUrl: string;
                encode(_: _126.MsgCancelUpgradeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _126.MsgCancelUpgradeResponse;
                fromJSON(_: any): _126.MsgCancelUpgradeResponse;
                toJSON(_: _126.MsgCancelUpgradeResponse): unknown;
                fromPartial(_: Partial<_126.MsgCancelUpgradeResponse>): _126.MsgCancelUpgradeResponse;
                fromAmino(_: _126.MsgCancelUpgradeResponseAmino): _126.MsgCancelUpgradeResponse;
                toAmino(_: _126.MsgCancelUpgradeResponse): _126.MsgCancelUpgradeResponseAmino;
                fromAminoMsg(object: _126.MsgCancelUpgradeResponseAminoMsg): _126.MsgCancelUpgradeResponse;
                toAminoMsg(message: _126.MsgCancelUpgradeResponse): _126.MsgCancelUpgradeResponseAminoMsg;
                fromProtoMsg(message: _126.MsgCancelUpgradeResponseProtoMsg): _126.MsgCancelUpgradeResponse;
                toProto(message: _126.MsgCancelUpgradeResponse): Uint8Array;
                toProtoMsg(message: _126.MsgCancelUpgradeResponse): _126.MsgCancelUpgradeResponseProtoMsg;
            };
            QueryCurrentPlanRequest: {
                typeUrl: string;
                encode(_: _125.QueryCurrentPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _125.QueryCurrentPlanRequest;
                fromJSON(_: any): _125.QueryCurrentPlanRequest;
                toJSON(_: _125.QueryCurrentPlanRequest): unknown;
                fromPartial(_: Partial<_125.QueryCurrentPlanRequest>): _125.QueryCurrentPlanRequest;
                fromAmino(_: _125.QueryCurrentPlanRequestAmino): _125.QueryCurrentPlanRequest;
                toAmino(_: _125.QueryCurrentPlanRequest): _125.QueryCurrentPlanRequestAmino;
                fromAminoMsg(object: _125.QueryCurrentPlanRequestAminoMsg): _125.QueryCurrentPlanRequest;
                toAminoMsg(message: _125.QueryCurrentPlanRequest): _125.QueryCurrentPlanRequestAminoMsg;
                fromProtoMsg(message: _125.QueryCurrentPlanRequestProtoMsg): _125.QueryCurrentPlanRequest;
                toProto(message: _125.QueryCurrentPlanRequest): Uint8Array;
                toProtoMsg(message: _125.QueryCurrentPlanRequest): _125.QueryCurrentPlanRequestProtoMsg;
            };
            QueryCurrentPlanResponse: {
                typeUrl: string;
                encode(message: _125.QueryCurrentPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _125.QueryCurrentPlanResponse;
                fromJSON(object: any): _125.QueryCurrentPlanResponse;
                toJSON(message: _125.QueryCurrentPlanResponse): unknown;
                fromPartial(object: Partial<_125.QueryCurrentPlanResponse>): _125.QueryCurrentPlanResponse;
                fromAmino(object: _125.QueryCurrentPlanResponseAmino): _125.QueryCurrentPlanResponse;
                toAmino(message: _125.QueryCurrentPlanResponse): _125.QueryCurrentPlanResponseAmino;
                fromAminoMsg(object: _125.QueryCurrentPlanResponseAminoMsg): _125.QueryCurrentPlanResponse;
                toAminoMsg(message: _125.QueryCurrentPlanResponse): _125.QueryCurrentPlanResponseAminoMsg;
                fromProtoMsg(message: _125.QueryCurrentPlanResponseProtoMsg): _125.QueryCurrentPlanResponse;
                toProto(message: _125.QueryCurrentPlanResponse): Uint8Array;
                toProtoMsg(message: _125.QueryCurrentPlanResponse): _125.QueryCurrentPlanResponseProtoMsg;
            };
            QueryAppliedPlanRequest: {
                typeUrl: string;
                encode(message: _125.QueryAppliedPlanRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _125.QueryAppliedPlanRequest;
                fromJSON(object: any): _125.QueryAppliedPlanRequest;
                toJSON(message: _125.QueryAppliedPlanRequest): unknown;
                fromPartial(object: Partial<_125.QueryAppliedPlanRequest>): _125.QueryAppliedPlanRequest;
                fromAmino(object: _125.QueryAppliedPlanRequestAmino): _125.QueryAppliedPlanRequest;
                toAmino(message: _125.QueryAppliedPlanRequest): _125.QueryAppliedPlanRequestAmino;
                fromAminoMsg(object: _125.QueryAppliedPlanRequestAminoMsg): _125.QueryAppliedPlanRequest;
                toAminoMsg(message: _125.QueryAppliedPlanRequest): _125.QueryAppliedPlanRequestAminoMsg;
                fromProtoMsg(message: _125.QueryAppliedPlanRequestProtoMsg): _125.QueryAppliedPlanRequest;
                toProto(message: _125.QueryAppliedPlanRequest): Uint8Array;
                toProtoMsg(message: _125.QueryAppliedPlanRequest): _125.QueryAppliedPlanRequestProtoMsg;
            };
            QueryAppliedPlanResponse: {
                typeUrl: string;
                encode(message: _125.QueryAppliedPlanResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _125.QueryAppliedPlanResponse;
                fromJSON(object: any): _125.QueryAppliedPlanResponse;
                toJSON(message: _125.QueryAppliedPlanResponse): unknown;
                fromPartial(object: Partial<_125.QueryAppliedPlanResponse>): _125.QueryAppliedPlanResponse;
                fromAmino(object: _125.QueryAppliedPlanResponseAmino): _125.QueryAppliedPlanResponse;
                toAmino(message: _125.QueryAppliedPlanResponse): _125.QueryAppliedPlanResponseAmino;
                fromAminoMsg(object: _125.QueryAppliedPlanResponseAminoMsg): _125.QueryAppliedPlanResponse;
                toAminoMsg(message: _125.QueryAppliedPlanResponse): _125.QueryAppliedPlanResponseAminoMsg;
                fromProtoMsg(message: _125.QueryAppliedPlanResponseProtoMsg): _125.QueryAppliedPlanResponse;
                toProto(message: _125.QueryAppliedPlanResponse): Uint8Array;
                toProtoMsg(message: _125.QueryAppliedPlanResponse): _125.QueryAppliedPlanResponseProtoMsg;
            };
            QueryUpgradedConsensusStateRequest: {
                typeUrl: string;
                encode(message: _125.QueryUpgradedConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _125.QueryUpgradedConsensusStateRequest;
                fromJSON(object: any): _125.QueryUpgradedConsensusStateRequest;
                toJSON(message: _125.QueryUpgradedConsensusStateRequest): unknown;
                fromPartial(object: Partial<_125.QueryUpgradedConsensusStateRequest>): _125.QueryUpgradedConsensusStateRequest;
                fromAmino(object: _125.QueryUpgradedConsensusStateRequestAmino): _125.QueryUpgradedConsensusStateRequest;
                toAmino(message: _125.QueryUpgradedConsensusStateRequest): _125.QueryUpgradedConsensusStateRequestAmino;
                fromAminoMsg(object: _125.QueryUpgradedConsensusStateRequestAminoMsg): _125.QueryUpgradedConsensusStateRequest;
                toAminoMsg(message: _125.QueryUpgradedConsensusStateRequest): _125.QueryUpgradedConsensusStateRequestAminoMsg;
                fromProtoMsg(message: _125.QueryUpgradedConsensusStateRequestProtoMsg): _125.QueryUpgradedConsensusStateRequest;
                toProto(message: _125.QueryUpgradedConsensusStateRequest): Uint8Array;
                toProtoMsg(message: _125.QueryUpgradedConsensusStateRequest): _125.QueryUpgradedConsensusStateRequestProtoMsg;
            };
            QueryUpgradedConsensusStateResponse: {
                typeUrl: string;
                encode(message: _125.QueryUpgradedConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _125.QueryUpgradedConsensusStateResponse;
                fromJSON(object: any): _125.QueryUpgradedConsensusStateResponse;
                toJSON(message: _125.QueryUpgradedConsensusStateResponse): unknown;
                fromPartial(object: Partial<_125.QueryUpgradedConsensusStateResponse>): _125.QueryUpgradedConsensusStateResponse;
                fromAmino(object: _125.QueryUpgradedConsensusStateResponseAmino): _125.QueryUpgradedConsensusStateResponse;
                toAmino(message: _125.QueryUpgradedConsensusStateResponse): _125.QueryUpgradedConsensusStateResponseAmino;
                fromAminoMsg(object: _125.QueryUpgradedConsensusStateResponseAminoMsg): _125.QueryUpgradedConsensusStateResponse;
                toAminoMsg(message: _125.QueryUpgradedConsensusStateResponse): _125.QueryUpgradedConsensusStateResponseAminoMsg;
                fromProtoMsg(message: _125.QueryUpgradedConsensusStateResponseProtoMsg): _125.QueryUpgradedConsensusStateResponse;
                toProto(message: _125.QueryUpgradedConsensusStateResponse): Uint8Array;
                toProtoMsg(message: _125.QueryUpgradedConsensusStateResponse): _125.QueryUpgradedConsensusStateResponseProtoMsg;
            };
            QueryModuleVersionsRequest: {
                typeUrl: string;
                encode(message: _125.QueryModuleVersionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _125.QueryModuleVersionsRequest;
                fromJSON(object: any): _125.QueryModuleVersionsRequest;
                toJSON(message: _125.QueryModuleVersionsRequest): unknown;
                fromPartial(object: Partial<_125.QueryModuleVersionsRequest>): _125.QueryModuleVersionsRequest;
                fromAmino(object: _125.QueryModuleVersionsRequestAmino): _125.QueryModuleVersionsRequest;
                toAmino(message: _125.QueryModuleVersionsRequest): _125.QueryModuleVersionsRequestAmino;
                fromAminoMsg(object: _125.QueryModuleVersionsRequestAminoMsg): _125.QueryModuleVersionsRequest;
                toAminoMsg(message: _125.QueryModuleVersionsRequest): _125.QueryModuleVersionsRequestAminoMsg;
                fromProtoMsg(message: _125.QueryModuleVersionsRequestProtoMsg): _125.QueryModuleVersionsRequest;
                toProto(message: _125.QueryModuleVersionsRequest): Uint8Array;
                toProtoMsg(message: _125.QueryModuleVersionsRequest): _125.QueryModuleVersionsRequestProtoMsg;
            };
            QueryModuleVersionsResponse: {
                typeUrl: string;
                encode(message: _125.QueryModuleVersionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _125.QueryModuleVersionsResponse;
                fromJSON(object: any): _125.QueryModuleVersionsResponse;
                toJSON(message: _125.QueryModuleVersionsResponse): unknown;
                fromPartial(object: Partial<_125.QueryModuleVersionsResponse>): _125.QueryModuleVersionsResponse;
                fromAmino(object: _125.QueryModuleVersionsResponseAmino): _125.QueryModuleVersionsResponse;
                toAmino(message: _125.QueryModuleVersionsResponse): _125.QueryModuleVersionsResponseAmino;
                fromAminoMsg(object: _125.QueryModuleVersionsResponseAminoMsg): _125.QueryModuleVersionsResponse;
                toAminoMsg(message: _125.QueryModuleVersionsResponse): _125.QueryModuleVersionsResponseAminoMsg;
                fromProtoMsg(message: _125.QueryModuleVersionsResponseProtoMsg): _125.QueryModuleVersionsResponse;
                toProto(message: _125.QueryModuleVersionsResponse): Uint8Array;
                toProtoMsg(message: _125.QueryModuleVersionsResponse): _125.QueryModuleVersionsResponseProtoMsg;
            };
            QueryAuthorityRequest: {
                typeUrl: string;
                encode(_: _125.QueryAuthorityRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _125.QueryAuthorityRequest;
                fromJSON(_: any): _125.QueryAuthorityRequest;
                toJSON(_: _125.QueryAuthorityRequest): unknown;
                fromPartial(_: Partial<_125.QueryAuthorityRequest>): _125.QueryAuthorityRequest;
                fromAmino(_: _125.QueryAuthorityRequestAmino): _125.QueryAuthorityRequest;
                toAmino(_: _125.QueryAuthorityRequest): _125.QueryAuthorityRequestAmino;
                fromAminoMsg(object: _125.QueryAuthorityRequestAminoMsg): _125.QueryAuthorityRequest;
                toAminoMsg(message: _125.QueryAuthorityRequest): _125.QueryAuthorityRequestAminoMsg;
                fromProtoMsg(message: _125.QueryAuthorityRequestProtoMsg): _125.QueryAuthorityRequest;
                toProto(message: _125.QueryAuthorityRequest): Uint8Array;
                toProtoMsg(message: _125.QueryAuthorityRequest): _125.QueryAuthorityRequestProtoMsg;
            };
            QueryAuthorityResponse: {
                typeUrl: string;
                encode(message: _125.QueryAuthorityResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _125.QueryAuthorityResponse;
                fromJSON(object: any): _125.QueryAuthorityResponse;
                toJSON(message: _125.QueryAuthorityResponse): unknown;
                fromPartial(object: Partial<_125.QueryAuthorityResponse>): _125.QueryAuthorityResponse;
                fromAmino(object: _125.QueryAuthorityResponseAmino): _125.QueryAuthorityResponse;
                toAmino(message: _125.QueryAuthorityResponse): _125.QueryAuthorityResponseAmino;
                fromAminoMsg(object: _125.QueryAuthorityResponseAminoMsg): _125.QueryAuthorityResponse;
                toAminoMsg(message: _125.QueryAuthorityResponse): _125.QueryAuthorityResponseAminoMsg;
                fromProtoMsg(message: _125.QueryAuthorityResponseProtoMsg): _125.QueryAuthorityResponse;
                toProto(message: _125.QueryAuthorityResponse): Uint8Array;
                toProtoMsg(message: _125.QueryAuthorityResponse): _125.QueryAuthorityResponseProtoMsg;
            };
        };
    }
    namespace vesting {
        namespace module {
            const v1: {
                protobufPackage: "cosmos.vesting.module.v1";
                Module: {
                    typeUrl: string;
                    encode(_: _128.Module, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _128.Module;
                    fromJSON(_: any): _128.Module;
                    toJSON(_: _128.Module): unknown;
                    fromPartial(_: Partial<_128.Module>): _128.Module;
                    fromAmino(_: _128.ModuleAmino): _128.Module;
                    toAmino(_: _128.Module): _128.ModuleAmino;
                    fromAminoMsg(object: _128.ModuleAminoMsg): _128.Module;
                    toAminoMsg(message: _128.Module): _128.ModuleAminoMsg;
                    fromProtoMsg(message: _128.ModuleProtoMsg): _128.Module;
                    toProto(message: _128.Module): Uint8Array;
                    toProtoMsg(message: _128.Module): _128.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            Msg: typeof _277.Msg;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _129.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPermanentLockedAccount(value: _129.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPeriodicVestingAccount(value: _129.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _129.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _129.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _129.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _129.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _129.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _129.MsgCreatePeriodicVestingAccount;
                    };
                };
                toJSON: {
                    createVestingAccount(value: _129.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createPermanentLockedAccount(value: _129.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createPeriodicVestingAccount(value: _129.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createVestingAccount(value: any): {
                        typeUrl: string;
                        value: _129.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: any): {
                        typeUrl: string;
                        value: _129.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: any): {
                        typeUrl: string;
                        value: _129.MsgCreatePeriodicVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _129.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _129.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _129.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _129.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _129.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _129.MsgCreatePeriodicVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _129.MsgCreateVestingAccount) => _129.MsgCreateVestingAccountAmino;
                    fromAmino: (object: _129.MsgCreateVestingAccountAmino) => _129.MsgCreateVestingAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount": {
                    aminoType: string;
                    toAmino: (message: _129.MsgCreatePermanentLockedAccount) => _129.MsgCreatePermanentLockedAccountAmino;
                    fromAmino: (object: _129.MsgCreatePermanentLockedAccountAmino) => _129.MsgCreatePermanentLockedAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _129.MsgCreatePeriodicVestingAccount) => _129.MsgCreatePeriodicVestingAccountAmino;
                    fromAmino: (object: _129.MsgCreatePeriodicVestingAccountAmino) => _129.MsgCreatePeriodicVestingAccount;
                };
            };
            protobufPackage: "cosmos.vesting.v1beta1";
            BaseVestingAccount: {
                typeUrl: string;
                encode(message: _130.BaseVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _130.BaseVestingAccount;
                fromJSON(object: any): _130.BaseVestingAccount;
                toJSON(message: _130.BaseVestingAccount): unknown;
                fromPartial(object: Partial<_130.BaseVestingAccount>): _130.BaseVestingAccount;
                fromAmino(object: _130.BaseVestingAccountAmino): _130.BaseVestingAccount;
                toAmino(message: _130.BaseVestingAccount): _130.BaseVestingAccountAmino;
                fromAminoMsg(object: _130.BaseVestingAccountAminoMsg): _130.BaseVestingAccount;
                toAminoMsg(message: _130.BaseVestingAccount): _130.BaseVestingAccountAminoMsg;
                fromProtoMsg(message: _130.BaseVestingAccountProtoMsg): _130.BaseVestingAccount;
                toProto(message: _130.BaseVestingAccount): Uint8Array;
                toProtoMsg(message: _130.BaseVestingAccount): _130.BaseVestingAccountProtoMsg;
            };
            ContinuousVestingAccount: {
                typeUrl: string;
                encode(message: _130.ContinuousVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _130.ContinuousVestingAccount;
                fromJSON(object: any): _130.ContinuousVestingAccount;
                toJSON(message: _130.ContinuousVestingAccount): unknown;
                fromPartial(object: Partial<_130.ContinuousVestingAccount>): _130.ContinuousVestingAccount;
                fromAmino(object: _130.ContinuousVestingAccountAmino): _130.ContinuousVestingAccount;
                toAmino(message: _130.ContinuousVestingAccount): _130.ContinuousVestingAccountAmino;
                fromAminoMsg(object: _130.ContinuousVestingAccountAminoMsg): _130.ContinuousVestingAccount;
                toAminoMsg(message: _130.ContinuousVestingAccount): _130.ContinuousVestingAccountAminoMsg;
                fromProtoMsg(message: _130.ContinuousVestingAccountProtoMsg): _130.ContinuousVestingAccount;
                toProto(message: _130.ContinuousVestingAccount): Uint8Array;
                toProtoMsg(message: _130.ContinuousVestingAccount): _130.ContinuousVestingAccountProtoMsg;
            };
            DelayedVestingAccount: {
                typeUrl: string;
                encode(message: _130.DelayedVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _130.DelayedVestingAccount;
                fromJSON(object: any): _130.DelayedVestingAccount;
                toJSON(message: _130.DelayedVestingAccount): unknown;
                fromPartial(object: Partial<_130.DelayedVestingAccount>): _130.DelayedVestingAccount;
                fromAmino(object: _130.DelayedVestingAccountAmino): _130.DelayedVestingAccount;
                toAmino(message: _130.DelayedVestingAccount): _130.DelayedVestingAccountAmino;
                fromAminoMsg(object: _130.DelayedVestingAccountAminoMsg): _130.DelayedVestingAccount;
                toAminoMsg(message: _130.DelayedVestingAccount): _130.DelayedVestingAccountAminoMsg;
                fromProtoMsg(message: _130.DelayedVestingAccountProtoMsg): _130.DelayedVestingAccount;
                toProto(message: _130.DelayedVestingAccount): Uint8Array;
                toProtoMsg(message: _130.DelayedVestingAccount): _130.DelayedVestingAccountProtoMsg;
            };
            Period: {
                typeUrl: string;
                encode(message: _130.Period, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _130.Period;
                fromJSON(object: any): _130.Period;
                toJSON(message: _130.Period): unknown;
                fromPartial(object: Partial<_130.Period>): _130.Period;
                fromAmino(object: _130.PeriodAmino): _130.Period;
                toAmino(message: _130.Period): _130.PeriodAmino;
                fromAminoMsg(object: _130.PeriodAminoMsg): _130.Period;
                toAminoMsg(message: _130.Period): _130.PeriodAminoMsg;
                fromProtoMsg(message: _130.PeriodProtoMsg): _130.Period;
                toProto(message: _130.Period): Uint8Array;
                toProtoMsg(message: _130.Period): _130.PeriodProtoMsg;
            };
            PeriodicVestingAccount: {
                typeUrl: string;
                encode(message: _130.PeriodicVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _130.PeriodicVestingAccount;
                fromJSON(object: any): _130.PeriodicVestingAccount;
                toJSON(message: _130.PeriodicVestingAccount): unknown;
                fromPartial(object: Partial<_130.PeriodicVestingAccount>): _130.PeriodicVestingAccount;
                fromAmino(object: _130.PeriodicVestingAccountAmino): _130.PeriodicVestingAccount;
                toAmino(message: _130.PeriodicVestingAccount): _130.PeriodicVestingAccountAmino;
                fromAminoMsg(object: _130.PeriodicVestingAccountAminoMsg): _130.PeriodicVestingAccount;
                toAminoMsg(message: _130.PeriodicVestingAccount): _130.PeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _130.PeriodicVestingAccountProtoMsg): _130.PeriodicVestingAccount;
                toProto(message: _130.PeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _130.PeriodicVestingAccount): _130.PeriodicVestingAccountProtoMsg;
            };
            PermanentLockedAccount: {
                typeUrl: string;
                encode(message: _130.PermanentLockedAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _130.PermanentLockedAccount;
                fromJSON(object: any): _130.PermanentLockedAccount;
                toJSON(message: _130.PermanentLockedAccount): unknown;
                fromPartial(object: Partial<_130.PermanentLockedAccount>): _130.PermanentLockedAccount;
                fromAmino(object: _130.PermanentLockedAccountAmino): _130.PermanentLockedAccount;
                toAmino(message: _130.PermanentLockedAccount): _130.PermanentLockedAccountAmino;
                fromAminoMsg(object: _130.PermanentLockedAccountAminoMsg): _130.PermanentLockedAccount;
                toAminoMsg(message: _130.PermanentLockedAccount): _130.PermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _130.PermanentLockedAccountProtoMsg): _130.PermanentLockedAccount;
                toProto(message: _130.PermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _130.PermanentLockedAccount): _130.PermanentLockedAccountProtoMsg;
            };
            MsgCreateVestingAccount: {
                typeUrl: string;
                encode(message: _129.MsgCreateVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _129.MsgCreateVestingAccount;
                fromJSON(object: any): _129.MsgCreateVestingAccount;
                toJSON(message: _129.MsgCreateVestingAccount): unknown;
                fromPartial(object: Partial<_129.MsgCreateVestingAccount>): _129.MsgCreateVestingAccount;
                fromAmino(object: _129.MsgCreateVestingAccountAmino): _129.MsgCreateVestingAccount;
                toAmino(message: _129.MsgCreateVestingAccount): _129.MsgCreateVestingAccountAmino;
                fromAminoMsg(object: _129.MsgCreateVestingAccountAminoMsg): _129.MsgCreateVestingAccount;
                toAminoMsg(message: _129.MsgCreateVestingAccount): _129.MsgCreateVestingAccountAminoMsg;
                fromProtoMsg(message: _129.MsgCreateVestingAccountProtoMsg): _129.MsgCreateVestingAccount;
                toProto(message: _129.MsgCreateVestingAccount): Uint8Array;
                toProtoMsg(message: _129.MsgCreateVestingAccount): _129.MsgCreateVestingAccountProtoMsg;
            };
            MsgCreateVestingAccountResponse: {
                typeUrl: string;
                encode(_: _129.MsgCreateVestingAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _129.MsgCreateVestingAccountResponse;
                fromJSON(_: any): _129.MsgCreateVestingAccountResponse;
                toJSON(_: _129.MsgCreateVestingAccountResponse): unknown;
                fromPartial(_: Partial<_129.MsgCreateVestingAccountResponse>): _129.MsgCreateVestingAccountResponse;
                fromAmino(_: _129.MsgCreateVestingAccountResponseAmino): _129.MsgCreateVestingAccountResponse;
                toAmino(_: _129.MsgCreateVestingAccountResponse): _129.MsgCreateVestingAccountResponseAmino;
                fromAminoMsg(object: _129.MsgCreateVestingAccountResponseAminoMsg): _129.MsgCreateVestingAccountResponse;
                toAminoMsg(message: _129.MsgCreateVestingAccountResponse): _129.MsgCreateVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _129.MsgCreateVestingAccountResponseProtoMsg): _129.MsgCreateVestingAccountResponse;
                toProto(message: _129.MsgCreateVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _129.MsgCreateVestingAccountResponse): _129.MsgCreateVestingAccountResponseProtoMsg;
            };
            MsgCreatePermanentLockedAccount: {
                typeUrl: string;
                encode(message: _129.MsgCreatePermanentLockedAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _129.MsgCreatePermanentLockedAccount;
                fromJSON(object: any): _129.MsgCreatePermanentLockedAccount;
                toJSON(message: _129.MsgCreatePermanentLockedAccount): unknown;
                fromPartial(object: Partial<_129.MsgCreatePermanentLockedAccount>): _129.MsgCreatePermanentLockedAccount;
                fromAmino(object: _129.MsgCreatePermanentLockedAccountAmino): _129.MsgCreatePermanentLockedAccount;
                toAmino(message: _129.MsgCreatePermanentLockedAccount): _129.MsgCreatePermanentLockedAccountAmino;
                fromAminoMsg(object: _129.MsgCreatePermanentLockedAccountAminoMsg): _129.MsgCreatePermanentLockedAccount;
                toAminoMsg(message: _129.MsgCreatePermanentLockedAccount): _129.MsgCreatePermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _129.MsgCreatePermanentLockedAccountProtoMsg): _129.MsgCreatePermanentLockedAccount;
                toProto(message: _129.MsgCreatePermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _129.MsgCreatePermanentLockedAccount): _129.MsgCreatePermanentLockedAccountProtoMsg;
            };
            MsgCreatePermanentLockedAccountResponse: {
                typeUrl: string;
                encode(_: _129.MsgCreatePermanentLockedAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _129.MsgCreatePermanentLockedAccountResponse;
                fromJSON(_: any): _129.MsgCreatePermanentLockedAccountResponse;
                toJSON(_: _129.MsgCreatePermanentLockedAccountResponse): unknown;
                fromPartial(_: Partial<_129.MsgCreatePermanentLockedAccountResponse>): _129.MsgCreatePermanentLockedAccountResponse;
                fromAmino(_: _129.MsgCreatePermanentLockedAccountResponseAmino): _129.MsgCreatePermanentLockedAccountResponse;
                toAmino(_: _129.MsgCreatePermanentLockedAccountResponse): _129.MsgCreatePermanentLockedAccountResponseAmino;
                fromAminoMsg(object: _129.MsgCreatePermanentLockedAccountResponseAminoMsg): _129.MsgCreatePermanentLockedAccountResponse;
                toAminoMsg(message: _129.MsgCreatePermanentLockedAccountResponse): _129.MsgCreatePermanentLockedAccountResponseAminoMsg;
                fromProtoMsg(message: _129.MsgCreatePermanentLockedAccountResponseProtoMsg): _129.MsgCreatePermanentLockedAccountResponse;
                toProto(message: _129.MsgCreatePermanentLockedAccountResponse): Uint8Array;
                toProtoMsg(message: _129.MsgCreatePermanentLockedAccountResponse): _129.MsgCreatePermanentLockedAccountResponseProtoMsg;
            };
            MsgCreatePeriodicVestingAccount: {
                typeUrl: string;
                encode(message: _129.MsgCreatePeriodicVestingAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _129.MsgCreatePeriodicVestingAccount;
                fromJSON(object: any): _129.MsgCreatePeriodicVestingAccount;
                toJSON(message: _129.MsgCreatePeriodicVestingAccount): unknown;
                fromPartial(object: Partial<_129.MsgCreatePeriodicVestingAccount>): _129.MsgCreatePeriodicVestingAccount;
                fromAmino(object: _129.MsgCreatePeriodicVestingAccountAmino): _129.MsgCreatePeriodicVestingAccount;
                toAmino(message: _129.MsgCreatePeriodicVestingAccount): _129.MsgCreatePeriodicVestingAccountAmino;
                fromAminoMsg(object: _129.MsgCreatePeriodicVestingAccountAminoMsg): _129.MsgCreatePeriodicVestingAccount;
                toAminoMsg(message: _129.MsgCreatePeriodicVestingAccount): _129.MsgCreatePeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _129.MsgCreatePeriodicVestingAccountProtoMsg): _129.MsgCreatePeriodicVestingAccount;
                toProto(message: _129.MsgCreatePeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _129.MsgCreatePeriodicVestingAccount): _129.MsgCreatePeriodicVestingAccountProtoMsg;
            };
            MsgCreatePeriodicVestingAccountResponse: {
                typeUrl: string;
                encode(_: _129.MsgCreatePeriodicVestingAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: import("..").BinaryReader | Uint8Array, length?: number): _129.MsgCreatePeriodicVestingAccountResponse;
                fromJSON(_: any): _129.MsgCreatePeriodicVestingAccountResponse;
                toJSON(_: _129.MsgCreatePeriodicVestingAccountResponse): unknown;
                fromPartial(_: Partial<_129.MsgCreatePeriodicVestingAccountResponse>): _129.MsgCreatePeriodicVestingAccountResponse;
                fromAmino(_: _129.MsgCreatePeriodicVestingAccountResponseAmino): _129.MsgCreatePeriodicVestingAccountResponse;
                toAmino(_: _129.MsgCreatePeriodicVestingAccountResponse): _129.MsgCreatePeriodicVestingAccountResponseAmino;
                fromAminoMsg(object: _129.MsgCreatePeriodicVestingAccountResponseAminoMsg): _129.MsgCreatePeriodicVestingAccountResponse;
                toAminoMsg(message: _129.MsgCreatePeriodicVestingAccountResponse): _129.MsgCreatePeriodicVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _129.MsgCreatePeriodicVestingAccountResponseProtoMsg): _129.MsgCreatePeriodicVestingAccountResponse;
                toProto(message: _129.MsgCreatePeriodicVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _129.MsgCreatePeriodicVestingAccountResponse): _129.MsgCreatePeriodicVestingAccountResponseProtoMsg;
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
                    v1beta1: _244.QueryClientImpl;
                };
                authz: {
                    v1beta1: _245.QueryClientImpl;
                };
                bank: {
                    v1beta1: _246.QueryClientImpl;
                };
                base: {
                    node: {
                        v1beta1: _247.ServiceClientImpl;
                    };
                    tendermint: {
                        v1beta1: _248.ServiceClientImpl;
                    };
                };
                circuit: {
                    v1: _249.QueryClientImpl;
                };
                consensus: {
                    v1: _250.QueryClientImpl;
                };
                distribution: {
                    v1beta1: _251.QueryClientImpl;
                };
                feegrant: {
                    v1beta1: _252.QueryClientImpl;
                };
                gov: {
                    v1: _253.QueryClientImpl;
                    v1beta1: _254.QueryClientImpl;
                };
                group: {
                    v1: _255.QueryClientImpl;
                };
                mint: {
                    v1beta1: _256.QueryClientImpl;
                };
                nft: {
                    v1beta1: _257.QueryClientImpl;
                };
                orm: {
                    query: {
                        v1alpha1: _258.QueryClientImpl;
                    };
                };
                params: {
                    v1beta1: _259.QueryClientImpl;
                };
                staking: {
                    v1beta1: _260.QueryClientImpl;
                };
                tx: {
                    v1beta1: _261.ServiceClientImpl;
                };
                upgrade: {
                    v1beta1: _262.QueryClientImpl;
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _226.LCDQueryClient;
                };
                authz: {
                    v1beta1: _227.LCDQueryClient;
                };
                bank: {
                    v1beta1: _228.LCDQueryClient;
                };
                base: {
                    node: {
                        v1beta1: _229.LCDQueryClient;
                    };
                    tendermint: {
                        v1beta1: _230.LCDQueryClient;
                    };
                };
                circuit: {
                    v1: _231.LCDQueryClient;
                };
                consensus: {
                    v1: _232.LCDQueryClient;
                };
                distribution: {
                    v1beta1: _233.LCDQueryClient;
                };
                feegrant: {
                    v1beta1: _234.LCDQueryClient;
                };
                gov: {
                    v1: _235.LCDQueryClient;
                    v1beta1: _236.LCDQueryClient;
                };
                group: {
                    v1: _237.LCDQueryClient;
                };
                mint: {
                    v1beta1: _238.LCDQueryClient;
                };
                nft: {
                    v1beta1: _239.LCDQueryClient;
                };
                params: {
                    v1beta1: _240.LCDQueryClient;
                };
                staking: {
                    v1beta1: _241.LCDQueryClient;
                };
                tx: {
                    v1beta1: _242.LCDQueryClient;
                };
                upgrade: {
                    v1beta1: _243.LCDQueryClient;
                };
            };
        }>;
    };
}

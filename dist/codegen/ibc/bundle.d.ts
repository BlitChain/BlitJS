import * as _93 from "./applications/interchain_accounts/controller/v1/controller";
import * as _94 from "./applications/interchain_accounts/controller/v1/query";
import * as _95 from "./applications/interchain_accounts/controller/v1/tx";
import * as _96 from "./applications/interchain_accounts/genesis/v1/genesis";
import * as _97 from "./applications/interchain_accounts/host/v1/host";
import * as _98 from "./applications/interchain_accounts/host/v1/query";
import * as _99 from "./applications/interchain_accounts/host/v1/tx";
import * as _100 from "./applications/interchain_accounts/v1/account";
import * as _101 from "./applications/interchain_accounts/v1/metadata";
import * as _102 from "./applications/interchain_accounts/v1/packet";
import * as _103 from "./applications/transfer/v1/authz";
import * as _104 from "./applications/transfer/v1/genesis";
import * as _105 from "./applications/transfer/v1/query";
import * as _106 from "./applications/transfer/v1/transfer";
import * as _107 from "./applications/transfer/v1/tx";
import * as _108 from "./applications/transfer/v2/packet";
import * as _109 from "./core/channel/v1/channel";
import * as _110 from "./core/channel/v1/genesis";
import * as _111 from "./core/channel/v1/query";
import * as _112 from "./core/channel/v1/tx";
import * as _113 from "./core/client/v1/client";
import * as _114 from "./core/client/v1/genesis";
import * as _115 from "./core/client/v1/query";
import * as _116 from "./core/client/v1/tx";
import * as _117 from "./core/commitment/v1/commitment";
import * as _118 from "./core/connection/v1/connection";
import * as _119 from "./core/connection/v1/genesis";
import * as _120 from "./core/connection/v1/query";
import * as _121 from "./core/connection/v1/tx";
import * as _122 from "./lightclients/localhost/v2/localhost";
import * as _123 from "./lightclients/solomachine/v2/solomachine";
import * as _124 from "./lightclients/solomachine/v3/solomachine";
import * as _125 from "./lightclients/tendermint/v1/tendermint";
import * as _227 from "./applications/interchain_accounts/controller/v1/query.lcd";
import * as _228 from "./applications/interchain_accounts/host/v1/query.lcd";
import * as _229 from "./applications/transfer/v1/query.lcd";
import * as _230 from "./core/channel/v1/query.lcd";
import * as _231 from "./core/client/v1/query.lcd";
import * as _232 from "./core/connection/v1/query.lcd";
import * as _233 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _234 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _235 from "./applications/transfer/v1/query.rpc.Query";
import * as _236 from "./core/channel/v1/query.rpc.Query";
import * as _237 from "./core/client/v1/query.rpc.Query";
import * as _238 from "./core/connection/v1/query.rpc.Query";
import * as _239 from "./applications/interchain_accounts/controller/v1/tx.rpc.msg";
import * as _240 from "./applications/interchain_accounts/host/v1/tx.rpc.msg";
import * as _241 from "./applications/transfer/v1/tx.rpc.msg";
import * as _242 from "./core/channel/v1/tx.rpc.msg";
import * as _243 from "./core/client/v1/tx.rpc.msg";
import * as _244 from "./core/connection/v1/tx.rpc.msg";
export declare namespace ibc {
    namespace applications {
        namespace interchain_accounts {
            namespace controller {
                const v1: {
                    Msg: typeof _239.Msg;
                    Query: typeof _233.Query;
                    QueryClientImpl: typeof _233.QueryClientImpl;
                    LCDQueryClient: typeof _227.LCDQueryClient;
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            registerInterchainAccount(value: _95.MsgRegisterInterchainAccount): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                            sendTx(value: _95.MsgSendTx): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                            updateParams(value: _95.MsgUpdateParams): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            registerInterchainAccount(value: _95.MsgRegisterInterchainAccount): {
                                typeUrl: string;
                                value: _95.MsgRegisterInterchainAccount;
                            };
                            sendTx(value: _95.MsgSendTx): {
                                typeUrl: string;
                                value: _95.MsgSendTx;
                            };
                            updateParams(value: _95.MsgUpdateParams): {
                                typeUrl: string;
                                value: _95.MsgUpdateParams;
                            };
                        };
                        toJSON: {
                            registerInterchainAccount(value: _95.MsgRegisterInterchainAccount): {
                                typeUrl: string;
                                value: unknown;
                            };
                            sendTx(value: _95.MsgSendTx): {
                                typeUrl: string;
                                value: unknown;
                            };
                            updateParams(value: _95.MsgUpdateParams): {
                                typeUrl: string;
                                value: unknown;
                            };
                        };
                        fromJSON: {
                            registerInterchainAccount(value: any): {
                                typeUrl: string;
                                value: _95.MsgRegisterInterchainAccount;
                            };
                            sendTx(value: any): {
                                typeUrl: string;
                                value: _95.MsgSendTx;
                            };
                            updateParams(value: any): {
                                typeUrl: string;
                                value: _95.MsgUpdateParams;
                            };
                        };
                        fromPartial: {
                            registerInterchainAccount(value: _95.MsgRegisterInterchainAccount): {
                                typeUrl: string;
                                value: _95.MsgRegisterInterchainAccount;
                            };
                            sendTx(value: _95.MsgSendTx): {
                                typeUrl: string;
                                value: _95.MsgSendTx;
                            };
                            updateParams(value: _95.MsgUpdateParams): {
                                typeUrl: string;
                                value: _95.MsgUpdateParams;
                            };
                        };
                    };
                    AminoConverter: {
                        "/ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccount": {
                            aminoType: string;
                            toAmino: (message: _95.MsgRegisterInterchainAccount) => _95.MsgRegisterInterchainAccountAmino;
                            fromAmino: (object: _95.MsgRegisterInterchainAccountAmino) => _95.MsgRegisterInterchainAccount;
                        };
                        "/ibc.applications.interchain_accounts.controller.v1.MsgSendTx": {
                            aminoType: string;
                            toAmino: (message: _95.MsgSendTx) => _95.MsgSendTxAmino;
                            fromAmino: (object: _95.MsgSendTxAmino) => _95.MsgSendTx;
                        };
                        "/ibc.applications.interchain_accounts.controller.v1.MsgUpdateParams": {
                            aminoType: string;
                            toAmino: (message: _95.MsgUpdateParams) => _95.MsgUpdateParamsAmino;
                            fromAmino: (object: _95.MsgUpdateParamsAmino) => _95.MsgUpdateParams;
                        };
                    };
                    protobufPackage: "ibc.applications.interchain_accounts.controller.v1";
                    MsgRegisterInterchainAccount: {
                        typeUrl: string;
                        encode(message: _95.MsgRegisterInterchainAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: import("..").BinaryReader | Uint8Array, length?: number): _95.MsgRegisterInterchainAccount;
                        fromJSON(object: any): _95.MsgRegisterInterchainAccount;
                        toJSON(message: _95.MsgRegisterInterchainAccount): unknown;
                        fromPartial(object: Partial<_95.MsgRegisterInterchainAccount>): _95.MsgRegisterInterchainAccount;
                        fromSDK(object: _95.MsgRegisterInterchainAccountSDKType): _95.MsgRegisterInterchainAccount;
                        toSDK(message: _95.MsgRegisterInterchainAccount): _95.MsgRegisterInterchainAccountSDKType;
                        fromAmino(object: _95.MsgRegisterInterchainAccountAmino): _95.MsgRegisterInterchainAccount;
                        toAmino(message: _95.MsgRegisterInterchainAccount): _95.MsgRegisterInterchainAccountAmino;
                        fromAminoMsg(object: _95.MsgRegisterInterchainAccountAminoMsg): _95.MsgRegisterInterchainAccount;
                        toAminoMsg(message: _95.MsgRegisterInterchainAccount): _95.MsgRegisterInterchainAccountAminoMsg;
                        fromProtoMsg(message: _95.MsgRegisterInterchainAccountProtoMsg): _95.MsgRegisterInterchainAccount;
                        toProto(message: _95.MsgRegisterInterchainAccount): Uint8Array;
                        toProtoMsg(message: _95.MsgRegisterInterchainAccount): _95.MsgRegisterInterchainAccountProtoMsg;
                    };
                    MsgRegisterInterchainAccountResponse: {
                        typeUrl: string;
                        encode(message: _95.MsgRegisterInterchainAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: import("..").BinaryReader | Uint8Array, length?: number): _95.MsgRegisterInterchainAccountResponse;
                        fromJSON(object: any): _95.MsgRegisterInterchainAccountResponse;
                        toJSON(message: _95.MsgRegisterInterchainAccountResponse): unknown;
                        fromPartial(object: Partial<_95.MsgRegisterInterchainAccountResponse>): _95.MsgRegisterInterchainAccountResponse;
                        fromSDK(object: _95.MsgRegisterInterchainAccountResponseSDKType): _95.MsgRegisterInterchainAccountResponse;
                        toSDK(message: _95.MsgRegisterInterchainAccountResponse): _95.MsgRegisterInterchainAccountResponseSDKType;
                        fromAmino(object: _95.MsgRegisterInterchainAccountResponseAmino): _95.MsgRegisterInterchainAccountResponse;
                        toAmino(message: _95.MsgRegisterInterchainAccountResponse): _95.MsgRegisterInterchainAccountResponseAmino;
                        fromAminoMsg(object: _95.MsgRegisterInterchainAccountResponseAminoMsg): _95.MsgRegisterInterchainAccountResponse;
                        toAminoMsg(message: _95.MsgRegisterInterchainAccountResponse): _95.MsgRegisterInterchainAccountResponseAminoMsg;
                        fromProtoMsg(message: _95.MsgRegisterInterchainAccountResponseProtoMsg): _95.MsgRegisterInterchainAccountResponse;
                        toProto(message: _95.MsgRegisterInterchainAccountResponse): Uint8Array;
                        toProtoMsg(message: _95.MsgRegisterInterchainAccountResponse): _95.MsgRegisterInterchainAccountResponseProtoMsg;
                    };
                    MsgSendTx: {
                        typeUrl: string;
                        encode(message: _95.MsgSendTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: import("..").BinaryReader | Uint8Array, length?: number): _95.MsgSendTx;
                        fromJSON(object: any): _95.MsgSendTx;
                        toJSON(message: _95.MsgSendTx): unknown;
                        fromPartial(object: Partial<_95.MsgSendTx>): _95.MsgSendTx;
                        fromSDK(object: _95.MsgSendTxSDKType): _95.MsgSendTx;
                        toSDK(message: _95.MsgSendTx): _95.MsgSendTxSDKType;
                        fromAmino(object: _95.MsgSendTxAmino): _95.MsgSendTx;
                        toAmino(message: _95.MsgSendTx): _95.MsgSendTxAmino;
                        fromAminoMsg(object: _95.MsgSendTxAminoMsg): _95.MsgSendTx;
                        toAminoMsg(message: _95.MsgSendTx): _95.MsgSendTxAminoMsg;
                        fromProtoMsg(message: _95.MsgSendTxProtoMsg): _95.MsgSendTx;
                        toProto(message: _95.MsgSendTx): Uint8Array;
                        toProtoMsg(message: _95.MsgSendTx): _95.MsgSendTxProtoMsg;
                    };
                    MsgSendTxResponse: {
                        typeUrl: string;
                        encode(message: _95.MsgSendTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: import("..").BinaryReader | Uint8Array, length?: number): _95.MsgSendTxResponse;
                        fromJSON(object: any): _95.MsgSendTxResponse;
                        toJSON(message: _95.MsgSendTxResponse): unknown;
                        fromPartial(object: Partial<_95.MsgSendTxResponse>): _95.MsgSendTxResponse;
                        fromSDK(object: _95.MsgSendTxResponseSDKType): _95.MsgSendTxResponse;
                        toSDK(message: _95.MsgSendTxResponse): _95.MsgSendTxResponseSDKType;
                        fromAmino(object: _95.MsgSendTxResponseAmino): _95.MsgSendTxResponse;
                        toAmino(message: _95.MsgSendTxResponse): _95.MsgSendTxResponseAmino;
                        fromAminoMsg(object: _95.MsgSendTxResponseAminoMsg): _95.MsgSendTxResponse;
                        toAminoMsg(message: _95.MsgSendTxResponse): _95.MsgSendTxResponseAminoMsg;
                        fromProtoMsg(message: _95.MsgSendTxResponseProtoMsg): _95.MsgSendTxResponse;
                        toProto(message: _95.MsgSendTxResponse): Uint8Array;
                        toProtoMsg(message: _95.MsgSendTxResponse): _95.MsgSendTxResponseProtoMsg;
                    };
                    MsgUpdateParams: {
                        typeUrl: string;
                        encode(message: _95.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: import("..").BinaryReader | Uint8Array, length?: number): _95.MsgUpdateParams;
                        fromJSON(object: any): _95.MsgUpdateParams;
                        toJSON(message: _95.MsgUpdateParams): unknown;
                        fromPartial(object: Partial<_95.MsgUpdateParams>): _95.MsgUpdateParams;
                        fromSDK(object: _95.MsgUpdateParamsSDKType): _95.MsgUpdateParams;
                        toSDK(message: _95.MsgUpdateParams): _95.MsgUpdateParamsSDKType;
                        fromAmino(object: _95.MsgUpdateParamsAmino): _95.MsgUpdateParams;
                        toAmino(message: _95.MsgUpdateParams): _95.MsgUpdateParamsAmino;
                        fromAminoMsg(object: _95.MsgUpdateParamsAminoMsg): _95.MsgUpdateParams;
                        toAminoMsg(message: _95.MsgUpdateParams): _95.MsgUpdateParamsAminoMsg;
                        fromProtoMsg(message: _95.MsgUpdateParamsProtoMsg): _95.MsgUpdateParams;
                        toProto(message: _95.MsgUpdateParams): Uint8Array;
                        toProtoMsg(message: _95.MsgUpdateParams): _95.MsgUpdateParamsProtoMsg;
                    };
                    MsgUpdateParamsResponse: {
                        typeUrl: string;
                        encode(_: _95.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: import("..").BinaryReader | Uint8Array, length?: number): _95.MsgUpdateParamsResponse;
                        fromJSON(_: any): _95.MsgUpdateParamsResponse;
                        toJSON(_: _95.MsgUpdateParamsResponse): unknown;
                        fromPartial(_: Partial<_95.MsgUpdateParamsResponse>): _95.MsgUpdateParamsResponse;
                        fromSDK(_: _95.MsgUpdateParamsResponseSDKType): _95.MsgUpdateParamsResponse;
                        toSDK(_: _95.MsgUpdateParamsResponse): _95.MsgUpdateParamsResponseSDKType;
                        fromAmino(_: _95.MsgUpdateParamsResponseAmino): _95.MsgUpdateParamsResponse;
                        toAmino(_: _95.MsgUpdateParamsResponse): _95.MsgUpdateParamsResponseAmino;
                        fromAminoMsg(object: _95.MsgUpdateParamsResponseAminoMsg): _95.MsgUpdateParamsResponse;
                        toAminoMsg(message: _95.MsgUpdateParamsResponse): _95.MsgUpdateParamsResponseAminoMsg;
                        fromProtoMsg(message: _95.MsgUpdateParamsResponseProtoMsg): _95.MsgUpdateParamsResponse;
                        toProto(message: _95.MsgUpdateParamsResponse): Uint8Array;
                        toProtoMsg(message: _95.MsgUpdateParamsResponse): _95.MsgUpdateParamsResponseProtoMsg;
                    };
                    QueryInterchainAccountRequest: {
                        typeUrl: string;
                        encode(message: _94.QueryInterchainAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: import("..").BinaryReader | Uint8Array, length?: number): _94.QueryInterchainAccountRequest;
                        fromJSON(object: any): _94.QueryInterchainAccountRequest;
                        toJSON(message: _94.QueryInterchainAccountRequest): unknown;
                        fromPartial(object: Partial<_94.QueryInterchainAccountRequest>): _94.QueryInterchainAccountRequest;
                        fromSDK(object: _94.QueryInterchainAccountRequestSDKType): _94.QueryInterchainAccountRequest;
                        toSDK(message: _94.QueryInterchainAccountRequest): _94.QueryInterchainAccountRequestSDKType;
                        fromAmino(object: _94.QueryInterchainAccountRequestAmino): _94.QueryInterchainAccountRequest;
                        toAmino(message: _94.QueryInterchainAccountRequest): _94.QueryInterchainAccountRequestAmino;
                        fromAminoMsg(object: _94.QueryInterchainAccountRequestAminoMsg): _94.QueryInterchainAccountRequest;
                        toAminoMsg(message: _94.QueryInterchainAccountRequest): _94.QueryInterchainAccountRequestAminoMsg;
                        fromProtoMsg(message: _94.QueryInterchainAccountRequestProtoMsg): _94.QueryInterchainAccountRequest;
                        toProto(message: _94.QueryInterchainAccountRequest): Uint8Array;
                        toProtoMsg(message: _94.QueryInterchainAccountRequest): _94.QueryInterchainAccountRequestProtoMsg;
                    };
                    QueryInterchainAccountResponse: {
                        typeUrl: string;
                        encode(message: _94.QueryInterchainAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: import("..").BinaryReader | Uint8Array, length?: number): _94.QueryInterchainAccountResponse;
                        fromJSON(object: any): _94.QueryInterchainAccountResponse;
                        toJSON(message: _94.QueryInterchainAccountResponse): unknown;
                        fromPartial(object: Partial<_94.QueryInterchainAccountResponse>): _94.QueryInterchainAccountResponse;
                        fromSDK(object: _94.QueryInterchainAccountResponseSDKType): _94.QueryInterchainAccountResponse;
                        toSDK(message: _94.QueryInterchainAccountResponse): _94.QueryInterchainAccountResponseSDKType;
                        fromAmino(object: _94.QueryInterchainAccountResponseAmino): _94.QueryInterchainAccountResponse;
                        toAmino(message: _94.QueryInterchainAccountResponse): _94.QueryInterchainAccountResponseAmino;
                        fromAminoMsg(object: _94.QueryInterchainAccountResponseAminoMsg): _94.QueryInterchainAccountResponse;
                        toAminoMsg(message: _94.QueryInterchainAccountResponse): _94.QueryInterchainAccountResponseAminoMsg;
                        fromProtoMsg(message: _94.QueryInterchainAccountResponseProtoMsg): _94.QueryInterchainAccountResponse;
                        toProto(message: _94.QueryInterchainAccountResponse): Uint8Array;
                        toProtoMsg(message: _94.QueryInterchainAccountResponse): _94.QueryInterchainAccountResponseProtoMsg;
                    };
                    QueryParamsRequest: {
                        typeUrl: string;
                        encode(_: _94.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: import("..").BinaryReader | Uint8Array, length?: number): _94.QueryParamsRequest;
                        fromJSON(_: any): _94.QueryParamsRequest;
                        toJSON(_: _94.QueryParamsRequest): unknown;
                        fromPartial(_: Partial<_94.QueryParamsRequest>): _94.QueryParamsRequest;
                        fromSDK(_: _94.QueryParamsRequestSDKType): _94.QueryParamsRequest;
                        toSDK(_: _94.QueryParamsRequest): _94.QueryParamsRequestSDKType;
                        fromAmino(_: _94.QueryParamsRequestAmino): _94.QueryParamsRequest;
                        toAmino(_: _94.QueryParamsRequest): _94.QueryParamsRequestAmino;
                        fromAminoMsg(object: _94.QueryParamsRequestAminoMsg): _94.QueryParamsRequest;
                        toAminoMsg(message: _94.QueryParamsRequest): _94.QueryParamsRequestAminoMsg;
                        fromProtoMsg(message: _94.QueryParamsRequestProtoMsg): _94.QueryParamsRequest;
                        toProto(message: _94.QueryParamsRequest): Uint8Array;
                        toProtoMsg(message: _94.QueryParamsRequest): _94.QueryParamsRequestProtoMsg;
                    };
                    QueryParamsResponse: {
                        typeUrl: string;
                        encode(message: _94.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: import("..").BinaryReader | Uint8Array, length?: number): _94.QueryParamsResponse;
                        fromJSON(object: any): _94.QueryParamsResponse;
                        toJSON(message: _94.QueryParamsResponse): unknown;
                        fromPartial(object: Partial<_94.QueryParamsResponse>): _94.QueryParamsResponse;
                        fromSDK(object: _94.QueryParamsResponseSDKType): _94.QueryParamsResponse;
                        toSDK(message: _94.QueryParamsResponse): _94.QueryParamsResponseSDKType;
                        fromAmino(object: _94.QueryParamsResponseAmino): _94.QueryParamsResponse;
                        toAmino(message: _94.QueryParamsResponse): _94.QueryParamsResponseAmino;
                        fromAminoMsg(object: _94.QueryParamsResponseAminoMsg): _94.QueryParamsResponse;
                        toAminoMsg(message: _94.QueryParamsResponse): _94.QueryParamsResponseAminoMsg;
                        fromProtoMsg(message: _94.QueryParamsResponseProtoMsg): _94.QueryParamsResponse;
                        toProto(message: _94.QueryParamsResponse): Uint8Array;
                        toProtoMsg(message: _94.QueryParamsResponse): _94.QueryParamsResponseProtoMsg;
                    };
                    Params: {
                        typeUrl: string;
                        encode(message: _93.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: import("..").BinaryReader | Uint8Array, length?: number): _93.Params;
                        fromJSON(object: any): _93.Params;
                        toJSON(message: _93.Params): unknown;
                        fromPartial(object: Partial<_93.Params>): _93.Params;
                        fromSDK(object: _93.ParamsSDKType): _93.Params;
                        toSDK(message: _93.Params): _93.ParamsSDKType;
                        fromAmino(object: _93.ParamsAmino): _93.Params;
                        toAmino(message: _93.Params): _93.ParamsAmino;
                        fromAminoMsg(object: _93.ParamsAminoMsg): _93.Params;
                        toAminoMsg(message: _93.Params): _93.ParamsAminoMsg;
                        fromProtoMsg(message: _93.ParamsProtoMsg): _93.Params;
                        toProto(message: _93.Params): Uint8Array;
                        toProtoMsg(message: _93.Params): _93.ParamsProtoMsg;
                    };
                };
            }
            namespace genesis {
                const v1: {
                    protobufPackage: "ibc.applications.interchain_accounts.genesis.v1";
                    GenesisState: {
                        typeUrl: string;
                        encode(message: _96.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: import("..").BinaryReader | Uint8Array, length?: number): _96.GenesisState;
                        fromJSON(object: any): _96.GenesisState;
                        toJSON(message: _96.GenesisState): unknown;
                        fromPartial(object: Partial<_96.GenesisState>): _96.GenesisState;
                        fromSDK(object: _96.GenesisStateSDKType): _96.GenesisState;
                        toSDK(message: _96.GenesisState): _96.GenesisStateSDKType;
                        fromAmino(object: _96.GenesisStateAmino): _96.GenesisState;
                        toAmino(message: _96.GenesisState): _96.GenesisStateAmino;
                        fromAminoMsg(object: _96.GenesisStateAminoMsg): _96.GenesisState;
                        toAminoMsg(message: _96.GenesisState): _96.GenesisStateAminoMsg;
                        fromProtoMsg(message: _96.GenesisStateProtoMsg): _96.GenesisState;
                        toProto(message: _96.GenesisState): Uint8Array;
                        toProtoMsg(message: _96.GenesisState): _96.GenesisStateProtoMsg;
                    };
                    ControllerGenesisState: {
                        typeUrl: string;
                        encode(message: _96.ControllerGenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: import("..").BinaryReader | Uint8Array, length?: number): _96.ControllerGenesisState;
                        fromJSON(object: any): _96.ControllerGenesisState;
                        toJSON(message: _96.ControllerGenesisState): unknown;
                        fromPartial(object: Partial<_96.ControllerGenesisState>): _96.ControllerGenesisState;
                        fromSDK(object: _96.ControllerGenesisStateSDKType): _96.ControllerGenesisState;
                        toSDK(message: _96.ControllerGenesisState): _96.ControllerGenesisStateSDKType;
                        fromAmino(object: _96.ControllerGenesisStateAmino): _96.ControllerGenesisState;
                        toAmino(message: _96.ControllerGenesisState): _96.ControllerGenesisStateAmino;
                        fromAminoMsg(object: _96.ControllerGenesisStateAminoMsg): _96.ControllerGenesisState;
                        toAminoMsg(message: _96.ControllerGenesisState): _96.ControllerGenesisStateAminoMsg;
                        fromProtoMsg(message: _96.ControllerGenesisStateProtoMsg): _96.ControllerGenesisState;
                        toProto(message: _96.ControllerGenesisState): Uint8Array;
                        toProtoMsg(message: _96.ControllerGenesisState): _96.ControllerGenesisStateProtoMsg;
                    };
                    HostGenesisState: {
                        typeUrl: string;
                        encode(message: _96.HostGenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: import("..").BinaryReader | Uint8Array, length?: number): _96.HostGenesisState;
                        fromJSON(object: any): _96.HostGenesisState;
                        toJSON(message: _96.HostGenesisState): unknown;
                        fromPartial(object: Partial<_96.HostGenesisState>): _96.HostGenesisState;
                        fromSDK(object: _96.HostGenesisStateSDKType): _96.HostGenesisState;
                        toSDK(message: _96.HostGenesisState): _96.HostGenesisStateSDKType;
                        fromAmino(object: _96.HostGenesisStateAmino): _96.HostGenesisState;
                        toAmino(message: _96.HostGenesisState): _96.HostGenesisStateAmino;
                        fromAminoMsg(object: _96.HostGenesisStateAminoMsg): _96.HostGenesisState;
                        toAminoMsg(message: _96.HostGenesisState): _96.HostGenesisStateAminoMsg;
                        fromProtoMsg(message: _96.HostGenesisStateProtoMsg): _96.HostGenesisState;
                        toProto(message: _96.HostGenesisState): Uint8Array;
                        toProtoMsg(message: _96.HostGenesisState): _96.HostGenesisStateProtoMsg;
                    };
                    ActiveChannel: {
                        typeUrl: string;
                        encode(message: _96.ActiveChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: import("..").BinaryReader | Uint8Array, length?: number): _96.ActiveChannel;
                        fromJSON(object: any): _96.ActiveChannel;
                        toJSON(message: _96.ActiveChannel): unknown;
                        fromPartial(object: Partial<_96.ActiveChannel>): _96.ActiveChannel;
                        fromSDK(object: _96.ActiveChannelSDKType): _96.ActiveChannel;
                        toSDK(message: _96.ActiveChannel): _96.ActiveChannelSDKType;
                        fromAmino(object: _96.ActiveChannelAmino): _96.ActiveChannel;
                        toAmino(message: _96.ActiveChannel): _96.ActiveChannelAmino;
                        fromAminoMsg(object: _96.ActiveChannelAminoMsg): _96.ActiveChannel;
                        toAminoMsg(message: _96.ActiveChannel): _96.ActiveChannelAminoMsg;
                        fromProtoMsg(message: _96.ActiveChannelProtoMsg): _96.ActiveChannel;
                        toProto(message: _96.ActiveChannel): Uint8Array;
                        toProtoMsg(message: _96.ActiveChannel): _96.ActiveChannelProtoMsg;
                    };
                    RegisteredInterchainAccount: {
                        typeUrl: string;
                        encode(message: _96.RegisteredInterchainAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: import("..").BinaryReader | Uint8Array, length?: number): _96.RegisteredInterchainAccount;
                        fromJSON(object: any): _96.RegisteredInterchainAccount;
                        toJSON(message: _96.RegisteredInterchainAccount): unknown;
                        fromPartial(object: Partial<_96.RegisteredInterchainAccount>): _96.RegisteredInterchainAccount;
                        fromSDK(object: _96.RegisteredInterchainAccountSDKType): _96.RegisteredInterchainAccount;
                        toSDK(message: _96.RegisteredInterchainAccount): _96.RegisteredInterchainAccountSDKType;
                        fromAmino(object: _96.RegisteredInterchainAccountAmino): _96.RegisteredInterchainAccount;
                        toAmino(message: _96.RegisteredInterchainAccount): _96.RegisteredInterchainAccountAmino;
                        fromAminoMsg(object: _96.RegisteredInterchainAccountAminoMsg): _96.RegisteredInterchainAccount;
                        toAminoMsg(message: _96.RegisteredInterchainAccount): _96.RegisteredInterchainAccountAminoMsg;
                        fromProtoMsg(message: _96.RegisteredInterchainAccountProtoMsg): _96.RegisteredInterchainAccount;
                        toProto(message: _96.RegisteredInterchainAccount): Uint8Array;
                        toProtoMsg(message: _96.RegisteredInterchainAccount): _96.RegisteredInterchainAccountProtoMsg;
                    };
                };
            }
            namespace host {
                const v1: {
                    Msg: typeof _240.Msg;
                    Query: typeof _234.Query;
                    QueryClientImpl: typeof _234.QueryClientImpl;
                    LCDQueryClient: typeof _228.LCDQueryClient;
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            updateParams(value: _99.MsgUpdateParams): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            updateParams(value: _99.MsgUpdateParams): {
                                typeUrl: string;
                                value: _99.MsgUpdateParams;
                            };
                        };
                        toJSON: {
                            updateParams(value: _99.MsgUpdateParams): {
                                typeUrl: string;
                                value: unknown;
                            };
                        };
                        fromJSON: {
                            updateParams(value: any): {
                                typeUrl: string;
                                value: _99.MsgUpdateParams;
                            };
                        };
                        fromPartial: {
                            updateParams(value: _99.MsgUpdateParams): {
                                typeUrl: string;
                                value: _99.MsgUpdateParams;
                            };
                        };
                    };
                    AminoConverter: {
                        "/ibc.applications.interchain_accounts.host.v1.MsgUpdateParams": {
                            aminoType: string;
                            toAmino: (message: _99.MsgUpdateParams) => _99.MsgUpdateParamsAmino;
                            fromAmino: (object: _99.MsgUpdateParamsAmino) => _99.MsgUpdateParams;
                        };
                    };
                    protobufPackage: "ibc.applications.interchain_accounts.host.v1";
                    MsgUpdateParams: {
                        typeUrl: string;
                        encode(message: _99.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: import("..").BinaryReader | Uint8Array, length?: number): _99.MsgUpdateParams;
                        fromJSON(object: any): _99.MsgUpdateParams;
                        toJSON(message: _99.MsgUpdateParams): unknown;
                        fromPartial(object: Partial<_99.MsgUpdateParams>): _99.MsgUpdateParams;
                        fromSDK(object: _99.MsgUpdateParamsSDKType): _99.MsgUpdateParams;
                        toSDK(message: _99.MsgUpdateParams): _99.MsgUpdateParamsSDKType;
                        fromAmino(object: _99.MsgUpdateParamsAmino): _99.MsgUpdateParams;
                        toAmino(message: _99.MsgUpdateParams): _99.MsgUpdateParamsAmino;
                        fromAminoMsg(object: _99.MsgUpdateParamsAminoMsg): _99.MsgUpdateParams;
                        toAminoMsg(message: _99.MsgUpdateParams): _99.MsgUpdateParamsAminoMsg;
                        fromProtoMsg(message: _99.MsgUpdateParamsProtoMsg): _99.MsgUpdateParams;
                        toProto(message: _99.MsgUpdateParams): Uint8Array;
                        toProtoMsg(message: _99.MsgUpdateParams): _99.MsgUpdateParamsProtoMsg;
                    };
                    MsgUpdateParamsResponse: {
                        typeUrl: string;
                        encode(_: _99.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: import("..").BinaryReader | Uint8Array, length?: number): _99.MsgUpdateParamsResponse;
                        fromJSON(_: any): _99.MsgUpdateParamsResponse;
                        toJSON(_: _99.MsgUpdateParamsResponse): unknown;
                        fromPartial(_: Partial<_99.MsgUpdateParamsResponse>): _99.MsgUpdateParamsResponse;
                        fromSDK(_: _99.MsgUpdateParamsResponseSDKType): _99.MsgUpdateParamsResponse;
                        toSDK(_: _99.MsgUpdateParamsResponse): _99.MsgUpdateParamsResponseSDKType;
                        fromAmino(_: _99.MsgUpdateParamsResponseAmino): _99.MsgUpdateParamsResponse;
                        toAmino(_: _99.MsgUpdateParamsResponse): _99.MsgUpdateParamsResponseAmino;
                        fromAminoMsg(object: _99.MsgUpdateParamsResponseAminoMsg): _99.MsgUpdateParamsResponse;
                        toAminoMsg(message: _99.MsgUpdateParamsResponse): _99.MsgUpdateParamsResponseAminoMsg;
                        fromProtoMsg(message: _99.MsgUpdateParamsResponseProtoMsg): _99.MsgUpdateParamsResponse;
                        toProto(message: _99.MsgUpdateParamsResponse): Uint8Array;
                        toProtoMsg(message: _99.MsgUpdateParamsResponse): _99.MsgUpdateParamsResponseProtoMsg;
                    };
                    QueryParamsRequest: {
                        typeUrl: string;
                        encode(_: _98.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: import("..").BinaryReader | Uint8Array, length?: number): _98.QueryParamsRequest;
                        fromJSON(_: any): _98.QueryParamsRequest;
                        toJSON(_: _98.QueryParamsRequest): unknown;
                        fromPartial(_: Partial<_98.QueryParamsRequest>): _98.QueryParamsRequest;
                        fromSDK(_: _98.QueryParamsRequestSDKType): _98.QueryParamsRequest;
                        toSDK(_: _98.QueryParamsRequest): _98.QueryParamsRequestSDKType;
                        fromAmino(_: _98.QueryParamsRequestAmino): _98.QueryParamsRequest;
                        toAmino(_: _98.QueryParamsRequest): _98.QueryParamsRequestAmino;
                        fromAminoMsg(object: _98.QueryParamsRequestAminoMsg): _98.QueryParamsRequest;
                        toAminoMsg(message: _98.QueryParamsRequest): _98.QueryParamsRequestAminoMsg;
                        fromProtoMsg(message: _98.QueryParamsRequestProtoMsg): _98.QueryParamsRequest;
                        toProto(message: _98.QueryParamsRequest): Uint8Array;
                        toProtoMsg(message: _98.QueryParamsRequest): _98.QueryParamsRequestProtoMsg;
                    };
                    QueryParamsResponse: {
                        typeUrl: string;
                        encode(message: _98.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: import("..").BinaryReader | Uint8Array, length?: number): _98.QueryParamsResponse;
                        fromJSON(object: any): _98.QueryParamsResponse;
                        toJSON(message: _98.QueryParamsResponse): unknown;
                        fromPartial(object: Partial<_98.QueryParamsResponse>): _98.QueryParamsResponse;
                        fromSDK(object: _98.QueryParamsResponseSDKType): _98.QueryParamsResponse;
                        toSDK(message: _98.QueryParamsResponse): _98.QueryParamsResponseSDKType;
                        fromAmino(object: _98.QueryParamsResponseAmino): _98.QueryParamsResponse;
                        toAmino(message: _98.QueryParamsResponse): _98.QueryParamsResponseAmino;
                        fromAminoMsg(object: _98.QueryParamsResponseAminoMsg): _98.QueryParamsResponse;
                        toAminoMsg(message: _98.QueryParamsResponse): _98.QueryParamsResponseAminoMsg;
                        fromProtoMsg(message: _98.QueryParamsResponseProtoMsg): _98.QueryParamsResponse;
                        toProto(message: _98.QueryParamsResponse): Uint8Array;
                        toProtoMsg(message: _98.QueryParamsResponse): _98.QueryParamsResponseProtoMsg;
                    };
                    Params: {
                        typeUrl: string;
                        encode(message: _97.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: import("..").BinaryReader | Uint8Array, length?: number): _97.Params;
                        fromJSON(object: any): _97.Params;
                        toJSON(message: _97.Params): unknown;
                        fromPartial(object: Partial<_97.Params>): _97.Params;
                        fromSDK(object: _97.ParamsSDKType): _97.Params;
                        toSDK(message: _97.Params): _97.ParamsSDKType;
                        fromAmino(object: _97.ParamsAmino): _97.Params;
                        toAmino(message: _97.Params): _97.ParamsAmino;
                        fromAminoMsg(object: _97.ParamsAminoMsg): _97.Params;
                        toAminoMsg(message: _97.Params): _97.ParamsAminoMsg;
                        fromProtoMsg(message: _97.ParamsProtoMsg): _97.Params;
                        toProto(message: _97.Params): Uint8Array;
                        toProtoMsg(message: _97.Params): _97.ParamsProtoMsg;
                    };
                };
            }
            const v1: {
                typeFromJSON(object: any): _102.Type;
                typeToJSON(object: _102.Type): string;
                protobufPackage: "ibc.applications.interchain_accounts.v1";
                Type: typeof _102.Type;
                TypeSDKType: typeof _102.Type;
                TypeAmino: typeof _102.Type;
                InterchainAccountPacketData: {
                    typeUrl: string;
                    encode(message: _102.InterchainAccountPacketData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _102.InterchainAccountPacketData;
                    fromJSON(object: any): _102.InterchainAccountPacketData;
                    toJSON(message: _102.InterchainAccountPacketData): unknown;
                    fromPartial(object: Partial<_102.InterchainAccountPacketData>): _102.InterchainAccountPacketData;
                    fromSDK(object: _102.InterchainAccountPacketDataSDKType): _102.InterchainAccountPacketData;
                    toSDK(message: _102.InterchainAccountPacketData): _102.InterchainAccountPacketDataSDKType;
                    fromAmino(object: _102.InterchainAccountPacketDataAmino): _102.InterchainAccountPacketData;
                    toAmino(message: _102.InterchainAccountPacketData): _102.InterchainAccountPacketDataAmino;
                    fromAminoMsg(object: _102.InterchainAccountPacketDataAminoMsg): _102.InterchainAccountPacketData;
                    toAminoMsg(message: _102.InterchainAccountPacketData): _102.InterchainAccountPacketDataAminoMsg;
                    fromProtoMsg(message: _102.InterchainAccountPacketDataProtoMsg): _102.InterchainAccountPacketData;
                    toProto(message: _102.InterchainAccountPacketData): Uint8Array;
                    toProtoMsg(message: _102.InterchainAccountPacketData): _102.InterchainAccountPacketDataProtoMsg;
                };
                CosmosTx: {
                    typeUrl: string;
                    encode(message: _102.CosmosTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _102.CosmosTx;
                    fromJSON(object: any): _102.CosmosTx;
                    toJSON(message: _102.CosmosTx): unknown;
                    fromPartial(object: Partial<_102.CosmosTx>): _102.CosmosTx;
                    fromSDK(object: _102.CosmosTxSDKType): _102.CosmosTx;
                    toSDK(message: _102.CosmosTx): _102.CosmosTxSDKType;
                    fromAmino(object: _102.CosmosTxAmino): _102.CosmosTx;
                    toAmino(message: _102.CosmosTx): _102.CosmosTxAmino;
                    fromAminoMsg(object: _102.CosmosTxAminoMsg): _102.CosmosTx;
                    toAminoMsg(message: _102.CosmosTx): _102.CosmosTxAminoMsg;
                    fromProtoMsg(message: _102.CosmosTxProtoMsg): _102.CosmosTx;
                    toProto(message: _102.CosmosTx): Uint8Array;
                    toProtoMsg(message: _102.CosmosTx): _102.CosmosTxProtoMsg;
                };
                Metadata: {
                    typeUrl: string;
                    encode(message: _101.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _101.Metadata;
                    fromJSON(object: any): _101.Metadata;
                    toJSON(message: _101.Metadata): unknown;
                    fromPartial(object: Partial<_101.Metadata>): _101.Metadata;
                    fromSDK(object: _101.MetadataSDKType): _101.Metadata;
                    toSDK(message: _101.Metadata): _101.MetadataSDKType;
                    fromAmino(object: _101.MetadataAmino): _101.Metadata;
                    toAmino(message: _101.Metadata): _101.MetadataAmino;
                    fromAminoMsg(object: _101.MetadataAminoMsg): _101.Metadata;
                    toAminoMsg(message: _101.Metadata): _101.MetadataAminoMsg;
                    fromProtoMsg(message: _101.MetadataProtoMsg): _101.Metadata;
                    toProto(message: _101.Metadata): Uint8Array;
                    toProtoMsg(message: _101.Metadata): _101.MetadataProtoMsg;
                };
                InterchainAccount: {
                    typeUrl: string;
                    encode(message: _100.InterchainAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _100.InterchainAccount;
                    fromJSON(object: any): _100.InterchainAccount;
                    toJSON(message: _100.InterchainAccount): unknown;
                    fromPartial(object: Partial<_100.InterchainAccount>): _100.InterchainAccount;
                    fromSDK(object: _100.InterchainAccountSDKType): _100.InterchainAccount;
                    toSDK(message: _100.InterchainAccount): _100.InterchainAccountSDKType;
                    fromAmino(object: _100.InterchainAccountAmino): _100.InterchainAccount;
                    toAmino(message: _100.InterchainAccount): _100.InterchainAccountAmino;
                    fromAminoMsg(object: _100.InterchainAccountAminoMsg): _100.InterchainAccount;
                    toAminoMsg(message: _100.InterchainAccount): _100.InterchainAccountAminoMsg;
                    fromProtoMsg(message: _100.InterchainAccountProtoMsg): _100.InterchainAccount;
                    toProto(message: _100.InterchainAccount): Uint8Array;
                    toProtoMsg(message: _100.InterchainAccount): _100.InterchainAccountProtoMsg;
                };
            };
        }
        namespace transfer {
            const v1: {
                Msg: typeof _241.Msg;
                Query: typeof _235.Query;
                QueryClientImpl: typeof _235.QueryClientImpl;
                LCDQueryClient: typeof _229.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        transfer(value: _107.MsgTransfer): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateParams(value: _107.MsgUpdateParams): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        transfer(value: _107.MsgTransfer): {
                            typeUrl: string;
                            value: _107.MsgTransfer;
                        };
                        updateParams(value: _107.MsgUpdateParams): {
                            typeUrl: string;
                            value: _107.MsgUpdateParams;
                        };
                    };
                    toJSON: {
                        transfer(value: _107.MsgTransfer): {
                            typeUrl: string;
                            value: unknown;
                        };
                        updateParams(value: _107.MsgUpdateParams): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        transfer(value: any): {
                            typeUrl: string;
                            value: _107.MsgTransfer;
                        };
                        updateParams(value: any): {
                            typeUrl: string;
                            value: _107.MsgUpdateParams;
                        };
                    };
                    fromPartial: {
                        transfer(value: _107.MsgTransfer): {
                            typeUrl: string;
                            value: _107.MsgTransfer;
                        };
                        updateParams(value: _107.MsgUpdateParams): {
                            typeUrl: string;
                            value: _107.MsgUpdateParams;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.applications.transfer.v1.MsgTransfer": {
                        aminoType: string;
                        toAmino: (message: _107.MsgTransfer) => _107.MsgTransferAmino;
                        fromAmino: (object: _107.MsgTransferAmino) => _107.MsgTransfer;
                    };
                    "/ibc.applications.transfer.v1.MsgUpdateParams": {
                        aminoType: string;
                        toAmino: (message: _107.MsgUpdateParams) => _107.MsgUpdateParamsAmino;
                        fromAmino: (object: _107.MsgUpdateParamsAmino) => _107.MsgUpdateParams;
                    };
                };
                protobufPackage: "ibc.applications.transfer.v1";
                MsgTransfer: {
                    typeUrl: string;
                    encode(message: _107.MsgTransfer, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _107.MsgTransfer;
                    fromJSON(object: any): _107.MsgTransfer;
                    toJSON(message: _107.MsgTransfer): unknown;
                    fromPartial(object: Partial<_107.MsgTransfer>): _107.MsgTransfer;
                    fromSDK(object: _107.MsgTransferSDKType): _107.MsgTransfer;
                    toSDK(message: _107.MsgTransfer): _107.MsgTransferSDKType;
                    fromAmino(object: _107.MsgTransferAmino): _107.MsgTransfer;
                    toAmino(message: _107.MsgTransfer): _107.MsgTransferAmino;
                    fromAminoMsg(object: _107.MsgTransferAminoMsg): _107.MsgTransfer;
                    toAminoMsg(message: _107.MsgTransfer): _107.MsgTransferAminoMsg;
                    fromProtoMsg(message: _107.MsgTransferProtoMsg): _107.MsgTransfer;
                    toProto(message: _107.MsgTransfer): Uint8Array;
                    toProtoMsg(message: _107.MsgTransfer): _107.MsgTransferProtoMsg;
                };
                MsgTransferResponse: {
                    typeUrl: string;
                    encode(message: _107.MsgTransferResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _107.MsgTransferResponse;
                    fromJSON(object: any): _107.MsgTransferResponse;
                    toJSON(message: _107.MsgTransferResponse): unknown;
                    fromPartial(object: Partial<_107.MsgTransferResponse>): _107.MsgTransferResponse;
                    fromSDK(object: _107.MsgTransferResponseSDKType): _107.MsgTransferResponse;
                    toSDK(message: _107.MsgTransferResponse): _107.MsgTransferResponseSDKType;
                    fromAmino(object: _107.MsgTransferResponseAmino): _107.MsgTransferResponse;
                    toAmino(message: _107.MsgTransferResponse): _107.MsgTransferResponseAmino;
                    fromAminoMsg(object: _107.MsgTransferResponseAminoMsg): _107.MsgTransferResponse;
                    toAminoMsg(message: _107.MsgTransferResponse): _107.MsgTransferResponseAminoMsg;
                    fromProtoMsg(message: _107.MsgTransferResponseProtoMsg): _107.MsgTransferResponse;
                    toProto(message: _107.MsgTransferResponse): Uint8Array;
                    toProtoMsg(message: _107.MsgTransferResponse): _107.MsgTransferResponseProtoMsg;
                };
                MsgUpdateParams: {
                    typeUrl: string;
                    encode(message: _107.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _107.MsgUpdateParams;
                    fromJSON(object: any): _107.MsgUpdateParams;
                    toJSON(message: _107.MsgUpdateParams): unknown;
                    fromPartial(object: Partial<_107.MsgUpdateParams>): _107.MsgUpdateParams;
                    fromSDK(object: _107.MsgUpdateParamsSDKType): _107.MsgUpdateParams;
                    toSDK(message: _107.MsgUpdateParams): _107.MsgUpdateParamsSDKType;
                    fromAmino(object: _107.MsgUpdateParamsAmino): _107.MsgUpdateParams;
                    toAmino(message: _107.MsgUpdateParams): _107.MsgUpdateParamsAmino;
                    fromAminoMsg(object: _107.MsgUpdateParamsAminoMsg): _107.MsgUpdateParams;
                    toAminoMsg(message: _107.MsgUpdateParams): _107.MsgUpdateParamsAminoMsg;
                    fromProtoMsg(message: _107.MsgUpdateParamsProtoMsg): _107.MsgUpdateParams;
                    toProto(message: _107.MsgUpdateParams): Uint8Array;
                    toProtoMsg(message: _107.MsgUpdateParams): _107.MsgUpdateParamsProtoMsg;
                };
                MsgUpdateParamsResponse: {
                    typeUrl: string;
                    encode(_: _107.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _107.MsgUpdateParamsResponse;
                    fromJSON(_: any): _107.MsgUpdateParamsResponse;
                    toJSON(_: _107.MsgUpdateParamsResponse): unknown;
                    fromPartial(_: Partial<_107.MsgUpdateParamsResponse>): _107.MsgUpdateParamsResponse;
                    fromSDK(_: _107.MsgUpdateParamsResponseSDKType): _107.MsgUpdateParamsResponse;
                    toSDK(_: _107.MsgUpdateParamsResponse): _107.MsgUpdateParamsResponseSDKType;
                    fromAmino(_: _107.MsgUpdateParamsResponseAmino): _107.MsgUpdateParamsResponse;
                    toAmino(_: _107.MsgUpdateParamsResponse): _107.MsgUpdateParamsResponseAmino;
                    fromAminoMsg(object: _107.MsgUpdateParamsResponseAminoMsg): _107.MsgUpdateParamsResponse;
                    toAminoMsg(message: _107.MsgUpdateParamsResponse): _107.MsgUpdateParamsResponseAminoMsg;
                    fromProtoMsg(message: _107.MsgUpdateParamsResponseProtoMsg): _107.MsgUpdateParamsResponse;
                    toProto(message: _107.MsgUpdateParamsResponse): Uint8Array;
                    toProtoMsg(message: _107.MsgUpdateParamsResponse): _107.MsgUpdateParamsResponseProtoMsg;
                };
                DenomTrace: {
                    typeUrl: string;
                    encode(message: _106.DenomTrace, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _106.DenomTrace;
                    fromJSON(object: any): _106.DenomTrace;
                    toJSON(message: _106.DenomTrace): unknown;
                    fromPartial(object: Partial<_106.DenomTrace>): _106.DenomTrace;
                    fromSDK(object: _106.DenomTraceSDKType): _106.DenomTrace;
                    toSDK(message: _106.DenomTrace): _106.DenomTraceSDKType;
                    fromAmino(object: _106.DenomTraceAmino): _106.DenomTrace;
                    toAmino(message: _106.DenomTrace): _106.DenomTraceAmino;
                    fromAminoMsg(object: _106.DenomTraceAminoMsg): _106.DenomTrace;
                    toAminoMsg(message: _106.DenomTrace): _106.DenomTraceAminoMsg;
                    fromProtoMsg(message: _106.DenomTraceProtoMsg): _106.DenomTrace;
                    toProto(message: _106.DenomTrace): Uint8Array;
                    toProtoMsg(message: _106.DenomTrace): _106.DenomTraceProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    encode(message: _106.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _106.Params;
                    fromJSON(object: any): _106.Params;
                    toJSON(message: _106.Params): unknown;
                    fromPartial(object: Partial<_106.Params>): _106.Params;
                    fromSDK(object: _106.ParamsSDKType): _106.Params;
                    toSDK(message: _106.Params): _106.ParamsSDKType;
                    fromAmino(object: _106.ParamsAmino): _106.Params;
                    toAmino(message: _106.Params): _106.ParamsAmino;
                    fromAminoMsg(object: _106.ParamsAminoMsg): _106.Params;
                    toAminoMsg(message: _106.Params): _106.ParamsAminoMsg;
                    fromProtoMsg(message: _106.ParamsProtoMsg): _106.Params;
                    toProto(message: _106.Params): Uint8Array;
                    toProtoMsg(message: _106.Params): _106.ParamsProtoMsg;
                };
                QueryDenomTraceRequest: {
                    typeUrl: string;
                    encode(message: _105.QueryDenomTraceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _105.QueryDenomTraceRequest;
                    fromJSON(object: any): _105.QueryDenomTraceRequest;
                    toJSON(message: _105.QueryDenomTraceRequest): unknown;
                    fromPartial(object: Partial<_105.QueryDenomTraceRequest>): _105.QueryDenomTraceRequest;
                    fromSDK(object: _105.QueryDenomTraceRequestSDKType): _105.QueryDenomTraceRequest;
                    toSDK(message: _105.QueryDenomTraceRequest): _105.QueryDenomTraceRequestSDKType;
                    fromAmino(object: _105.QueryDenomTraceRequestAmino): _105.QueryDenomTraceRequest;
                    toAmino(message: _105.QueryDenomTraceRequest): _105.QueryDenomTraceRequestAmino;
                    fromAminoMsg(object: _105.QueryDenomTraceRequestAminoMsg): _105.QueryDenomTraceRequest;
                    toAminoMsg(message: _105.QueryDenomTraceRequest): _105.QueryDenomTraceRequestAminoMsg;
                    fromProtoMsg(message: _105.QueryDenomTraceRequestProtoMsg): _105.QueryDenomTraceRequest;
                    toProto(message: _105.QueryDenomTraceRequest): Uint8Array;
                    toProtoMsg(message: _105.QueryDenomTraceRequest): _105.QueryDenomTraceRequestProtoMsg;
                };
                QueryDenomTraceResponse: {
                    typeUrl: string;
                    encode(message: _105.QueryDenomTraceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _105.QueryDenomTraceResponse;
                    fromJSON(object: any): _105.QueryDenomTraceResponse;
                    toJSON(message: _105.QueryDenomTraceResponse): unknown;
                    fromPartial(object: Partial<_105.QueryDenomTraceResponse>): _105.QueryDenomTraceResponse;
                    fromSDK(object: _105.QueryDenomTraceResponseSDKType): _105.QueryDenomTraceResponse;
                    toSDK(message: _105.QueryDenomTraceResponse): _105.QueryDenomTraceResponseSDKType;
                    fromAmino(object: _105.QueryDenomTraceResponseAmino): _105.QueryDenomTraceResponse;
                    toAmino(message: _105.QueryDenomTraceResponse): _105.QueryDenomTraceResponseAmino;
                    fromAminoMsg(object: _105.QueryDenomTraceResponseAminoMsg): _105.QueryDenomTraceResponse;
                    toAminoMsg(message: _105.QueryDenomTraceResponse): _105.QueryDenomTraceResponseAminoMsg;
                    fromProtoMsg(message: _105.QueryDenomTraceResponseProtoMsg): _105.QueryDenomTraceResponse;
                    toProto(message: _105.QueryDenomTraceResponse): Uint8Array;
                    toProtoMsg(message: _105.QueryDenomTraceResponse): _105.QueryDenomTraceResponseProtoMsg;
                };
                QueryDenomTracesRequest: {
                    typeUrl: string;
                    encode(message: _105.QueryDenomTracesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _105.QueryDenomTracesRequest;
                    fromJSON(object: any): _105.QueryDenomTracesRequest;
                    toJSON(message: _105.QueryDenomTracesRequest): unknown;
                    fromPartial(object: Partial<_105.QueryDenomTracesRequest>): _105.QueryDenomTracesRequest;
                    fromSDK(object: _105.QueryDenomTracesRequestSDKType): _105.QueryDenomTracesRequest;
                    toSDK(message: _105.QueryDenomTracesRequest): _105.QueryDenomTracesRequestSDKType;
                    fromAmino(object: _105.QueryDenomTracesRequestAmino): _105.QueryDenomTracesRequest;
                    toAmino(message: _105.QueryDenomTracesRequest): _105.QueryDenomTracesRequestAmino;
                    fromAminoMsg(object: _105.QueryDenomTracesRequestAminoMsg): _105.QueryDenomTracesRequest;
                    toAminoMsg(message: _105.QueryDenomTracesRequest): _105.QueryDenomTracesRequestAminoMsg;
                    fromProtoMsg(message: _105.QueryDenomTracesRequestProtoMsg): _105.QueryDenomTracesRequest;
                    toProto(message: _105.QueryDenomTracesRequest): Uint8Array;
                    toProtoMsg(message: _105.QueryDenomTracesRequest): _105.QueryDenomTracesRequestProtoMsg;
                };
                QueryDenomTracesResponse: {
                    typeUrl: string;
                    encode(message: _105.QueryDenomTracesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _105.QueryDenomTracesResponse;
                    fromJSON(object: any): _105.QueryDenomTracesResponse;
                    toJSON(message: _105.QueryDenomTracesResponse): unknown;
                    fromPartial(object: Partial<_105.QueryDenomTracesResponse>): _105.QueryDenomTracesResponse;
                    fromSDK(object: _105.QueryDenomTracesResponseSDKType): _105.QueryDenomTracesResponse;
                    toSDK(message: _105.QueryDenomTracesResponse): _105.QueryDenomTracesResponseSDKType;
                    fromAmino(object: _105.QueryDenomTracesResponseAmino): _105.QueryDenomTracesResponse;
                    toAmino(message: _105.QueryDenomTracesResponse): _105.QueryDenomTracesResponseAmino;
                    fromAminoMsg(object: _105.QueryDenomTracesResponseAminoMsg): _105.QueryDenomTracesResponse;
                    toAminoMsg(message: _105.QueryDenomTracesResponse): _105.QueryDenomTracesResponseAminoMsg;
                    fromProtoMsg(message: _105.QueryDenomTracesResponseProtoMsg): _105.QueryDenomTracesResponse;
                    toProto(message: _105.QueryDenomTracesResponse): Uint8Array;
                    toProtoMsg(message: _105.QueryDenomTracesResponse): _105.QueryDenomTracesResponseProtoMsg;
                };
                QueryParamsRequest: {
                    typeUrl: string;
                    encode(_: _105.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _105.QueryParamsRequest;
                    fromJSON(_: any): _105.QueryParamsRequest;
                    toJSON(_: _105.QueryParamsRequest): unknown;
                    fromPartial(_: Partial<_105.QueryParamsRequest>): _105.QueryParamsRequest;
                    fromSDK(_: _105.QueryParamsRequestSDKType): _105.QueryParamsRequest;
                    toSDK(_: _105.QueryParamsRequest): _105.QueryParamsRequestSDKType;
                    fromAmino(_: _105.QueryParamsRequestAmino): _105.QueryParamsRequest;
                    toAmino(_: _105.QueryParamsRequest): _105.QueryParamsRequestAmino;
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
                    fromSDK(object: _105.QueryParamsResponseSDKType): _105.QueryParamsResponse;
                    toSDK(message: _105.QueryParamsResponse): _105.QueryParamsResponseSDKType;
                    fromAmino(object: _105.QueryParamsResponseAmino): _105.QueryParamsResponse;
                    toAmino(message: _105.QueryParamsResponse): _105.QueryParamsResponseAmino;
                    fromAminoMsg(object: _105.QueryParamsResponseAminoMsg): _105.QueryParamsResponse;
                    toAminoMsg(message: _105.QueryParamsResponse): _105.QueryParamsResponseAminoMsg;
                    fromProtoMsg(message: _105.QueryParamsResponseProtoMsg): _105.QueryParamsResponse;
                    toProto(message: _105.QueryParamsResponse): Uint8Array;
                    toProtoMsg(message: _105.QueryParamsResponse): _105.QueryParamsResponseProtoMsg;
                };
                QueryDenomHashRequest: {
                    typeUrl: string;
                    encode(message: _105.QueryDenomHashRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _105.QueryDenomHashRequest;
                    fromJSON(object: any): _105.QueryDenomHashRequest;
                    toJSON(message: _105.QueryDenomHashRequest): unknown;
                    fromPartial(object: Partial<_105.QueryDenomHashRequest>): _105.QueryDenomHashRequest;
                    fromSDK(object: _105.QueryDenomHashRequestSDKType): _105.QueryDenomHashRequest;
                    toSDK(message: _105.QueryDenomHashRequest): _105.QueryDenomHashRequestSDKType;
                    fromAmino(object: _105.QueryDenomHashRequestAmino): _105.QueryDenomHashRequest;
                    toAmino(message: _105.QueryDenomHashRequest): _105.QueryDenomHashRequestAmino;
                    fromAminoMsg(object: _105.QueryDenomHashRequestAminoMsg): _105.QueryDenomHashRequest;
                    toAminoMsg(message: _105.QueryDenomHashRequest): _105.QueryDenomHashRequestAminoMsg;
                    fromProtoMsg(message: _105.QueryDenomHashRequestProtoMsg): _105.QueryDenomHashRequest;
                    toProto(message: _105.QueryDenomHashRequest): Uint8Array;
                    toProtoMsg(message: _105.QueryDenomHashRequest): _105.QueryDenomHashRequestProtoMsg;
                };
                QueryDenomHashResponse: {
                    typeUrl: string;
                    encode(message: _105.QueryDenomHashResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _105.QueryDenomHashResponse;
                    fromJSON(object: any): _105.QueryDenomHashResponse;
                    toJSON(message: _105.QueryDenomHashResponse): unknown;
                    fromPartial(object: Partial<_105.QueryDenomHashResponse>): _105.QueryDenomHashResponse;
                    fromSDK(object: _105.QueryDenomHashResponseSDKType): _105.QueryDenomHashResponse;
                    toSDK(message: _105.QueryDenomHashResponse): _105.QueryDenomHashResponseSDKType;
                    fromAmino(object: _105.QueryDenomHashResponseAmino): _105.QueryDenomHashResponse;
                    toAmino(message: _105.QueryDenomHashResponse): _105.QueryDenomHashResponseAmino;
                    fromAminoMsg(object: _105.QueryDenomHashResponseAminoMsg): _105.QueryDenomHashResponse;
                    toAminoMsg(message: _105.QueryDenomHashResponse): _105.QueryDenomHashResponseAminoMsg;
                    fromProtoMsg(message: _105.QueryDenomHashResponseProtoMsg): _105.QueryDenomHashResponse;
                    toProto(message: _105.QueryDenomHashResponse): Uint8Array;
                    toProtoMsg(message: _105.QueryDenomHashResponse): _105.QueryDenomHashResponseProtoMsg;
                };
                QueryEscrowAddressRequest: {
                    typeUrl: string;
                    encode(message: _105.QueryEscrowAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _105.QueryEscrowAddressRequest;
                    fromJSON(object: any): _105.QueryEscrowAddressRequest;
                    toJSON(message: _105.QueryEscrowAddressRequest): unknown;
                    fromPartial(object: Partial<_105.QueryEscrowAddressRequest>): _105.QueryEscrowAddressRequest;
                    fromSDK(object: _105.QueryEscrowAddressRequestSDKType): _105.QueryEscrowAddressRequest;
                    toSDK(message: _105.QueryEscrowAddressRequest): _105.QueryEscrowAddressRequestSDKType;
                    fromAmino(object: _105.QueryEscrowAddressRequestAmino): _105.QueryEscrowAddressRequest;
                    toAmino(message: _105.QueryEscrowAddressRequest): _105.QueryEscrowAddressRequestAmino;
                    fromAminoMsg(object: _105.QueryEscrowAddressRequestAminoMsg): _105.QueryEscrowAddressRequest;
                    toAminoMsg(message: _105.QueryEscrowAddressRequest): _105.QueryEscrowAddressRequestAminoMsg;
                    fromProtoMsg(message: _105.QueryEscrowAddressRequestProtoMsg): _105.QueryEscrowAddressRequest;
                    toProto(message: _105.QueryEscrowAddressRequest): Uint8Array;
                    toProtoMsg(message: _105.QueryEscrowAddressRequest): _105.QueryEscrowAddressRequestProtoMsg;
                };
                QueryEscrowAddressResponse: {
                    typeUrl: string;
                    encode(message: _105.QueryEscrowAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _105.QueryEscrowAddressResponse;
                    fromJSON(object: any): _105.QueryEscrowAddressResponse;
                    toJSON(message: _105.QueryEscrowAddressResponse): unknown;
                    fromPartial(object: Partial<_105.QueryEscrowAddressResponse>): _105.QueryEscrowAddressResponse;
                    fromSDK(object: _105.QueryEscrowAddressResponseSDKType): _105.QueryEscrowAddressResponse;
                    toSDK(message: _105.QueryEscrowAddressResponse): _105.QueryEscrowAddressResponseSDKType;
                    fromAmino(object: _105.QueryEscrowAddressResponseAmino): _105.QueryEscrowAddressResponse;
                    toAmino(message: _105.QueryEscrowAddressResponse): _105.QueryEscrowAddressResponseAmino;
                    fromAminoMsg(object: _105.QueryEscrowAddressResponseAminoMsg): _105.QueryEscrowAddressResponse;
                    toAminoMsg(message: _105.QueryEscrowAddressResponse): _105.QueryEscrowAddressResponseAminoMsg;
                    fromProtoMsg(message: _105.QueryEscrowAddressResponseProtoMsg): _105.QueryEscrowAddressResponse;
                    toProto(message: _105.QueryEscrowAddressResponse): Uint8Array;
                    toProtoMsg(message: _105.QueryEscrowAddressResponse): _105.QueryEscrowAddressResponseProtoMsg;
                };
                QueryTotalEscrowForDenomRequest: {
                    typeUrl: string;
                    encode(message: _105.QueryTotalEscrowForDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _105.QueryTotalEscrowForDenomRequest;
                    fromJSON(object: any): _105.QueryTotalEscrowForDenomRequest;
                    toJSON(message: _105.QueryTotalEscrowForDenomRequest): unknown;
                    fromPartial(object: Partial<_105.QueryTotalEscrowForDenomRequest>): _105.QueryTotalEscrowForDenomRequest;
                    fromSDK(object: _105.QueryTotalEscrowForDenomRequestSDKType): _105.QueryTotalEscrowForDenomRequest;
                    toSDK(message: _105.QueryTotalEscrowForDenomRequest): _105.QueryTotalEscrowForDenomRequestSDKType;
                    fromAmino(object: _105.QueryTotalEscrowForDenomRequestAmino): _105.QueryTotalEscrowForDenomRequest;
                    toAmino(message: _105.QueryTotalEscrowForDenomRequest): _105.QueryTotalEscrowForDenomRequestAmino;
                    fromAminoMsg(object: _105.QueryTotalEscrowForDenomRequestAminoMsg): _105.QueryTotalEscrowForDenomRequest;
                    toAminoMsg(message: _105.QueryTotalEscrowForDenomRequest): _105.QueryTotalEscrowForDenomRequestAminoMsg;
                    fromProtoMsg(message: _105.QueryTotalEscrowForDenomRequestProtoMsg): _105.QueryTotalEscrowForDenomRequest;
                    toProto(message: _105.QueryTotalEscrowForDenomRequest): Uint8Array;
                    toProtoMsg(message: _105.QueryTotalEscrowForDenomRequest): _105.QueryTotalEscrowForDenomRequestProtoMsg;
                };
                QueryTotalEscrowForDenomResponse: {
                    typeUrl: string;
                    encode(message: _105.QueryTotalEscrowForDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _105.QueryTotalEscrowForDenomResponse;
                    fromJSON(object: any): _105.QueryTotalEscrowForDenomResponse;
                    toJSON(message: _105.QueryTotalEscrowForDenomResponse): unknown;
                    fromPartial(object: Partial<_105.QueryTotalEscrowForDenomResponse>): _105.QueryTotalEscrowForDenomResponse;
                    fromSDK(object: _105.QueryTotalEscrowForDenomResponseSDKType): _105.QueryTotalEscrowForDenomResponse;
                    toSDK(message: _105.QueryTotalEscrowForDenomResponse): _105.QueryTotalEscrowForDenomResponseSDKType;
                    fromAmino(object: _105.QueryTotalEscrowForDenomResponseAmino): _105.QueryTotalEscrowForDenomResponse;
                    toAmino(message: _105.QueryTotalEscrowForDenomResponse): _105.QueryTotalEscrowForDenomResponseAmino;
                    fromAminoMsg(object: _105.QueryTotalEscrowForDenomResponseAminoMsg): _105.QueryTotalEscrowForDenomResponse;
                    toAminoMsg(message: _105.QueryTotalEscrowForDenomResponse): _105.QueryTotalEscrowForDenomResponseAminoMsg;
                    fromProtoMsg(message: _105.QueryTotalEscrowForDenomResponseProtoMsg): _105.QueryTotalEscrowForDenomResponse;
                    toProto(message: _105.QueryTotalEscrowForDenomResponse): Uint8Array;
                    toProtoMsg(message: _105.QueryTotalEscrowForDenomResponse): _105.QueryTotalEscrowForDenomResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _104.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _104.GenesisState;
                    fromJSON(object: any): _104.GenesisState;
                    toJSON(message: _104.GenesisState): unknown;
                    fromPartial(object: Partial<_104.GenesisState>): _104.GenesisState;
                    fromSDK(object: _104.GenesisStateSDKType): _104.GenesisState;
                    toSDK(message: _104.GenesisState): _104.GenesisStateSDKType;
                    fromAmino(object: _104.GenesisStateAmino): _104.GenesisState;
                    toAmino(message: _104.GenesisState): _104.GenesisStateAmino;
                    fromAminoMsg(object: _104.GenesisStateAminoMsg): _104.GenesisState;
                    toAminoMsg(message: _104.GenesisState): _104.GenesisStateAminoMsg;
                    fromProtoMsg(message: _104.GenesisStateProtoMsg): _104.GenesisState;
                    toProto(message: _104.GenesisState): Uint8Array;
                    toProtoMsg(message: _104.GenesisState): _104.GenesisStateProtoMsg;
                };
                Allocation: {
                    typeUrl: string;
                    encode(message: _103.Allocation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _103.Allocation;
                    fromJSON(object: any): _103.Allocation;
                    toJSON(message: _103.Allocation): unknown;
                    fromPartial(object: Partial<_103.Allocation>): _103.Allocation;
                    fromSDK(object: _103.AllocationSDKType): _103.Allocation;
                    toSDK(message: _103.Allocation): _103.AllocationSDKType;
                    fromAmino(object: _103.AllocationAmino): _103.Allocation;
                    toAmino(message: _103.Allocation): _103.AllocationAmino;
                    fromAminoMsg(object: _103.AllocationAminoMsg): _103.Allocation;
                    toAminoMsg(message: _103.Allocation): _103.AllocationAminoMsg;
                    fromProtoMsg(message: _103.AllocationProtoMsg): _103.Allocation;
                    toProto(message: _103.Allocation): Uint8Array;
                    toProtoMsg(message: _103.Allocation): _103.AllocationProtoMsg;
                };
                TransferAuthorization: {
                    typeUrl: string;
                    encode(message: _103.TransferAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _103.TransferAuthorization;
                    fromJSON(object: any): _103.TransferAuthorization;
                    toJSON(message: _103.TransferAuthorization): unknown;
                    fromPartial(object: Partial<_103.TransferAuthorization>): _103.TransferAuthorization;
                    fromSDK(object: _103.TransferAuthorizationSDKType): _103.TransferAuthorization;
                    toSDK(message: _103.TransferAuthorization): _103.TransferAuthorizationSDKType;
                    fromAmino(object: _103.TransferAuthorizationAmino): _103.TransferAuthorization;
                    toAmino(message: _103.TransferAuthorization): _103.TransferAuthorizationAmino;
                    fromAminoMsg(object: _103.TransferAuthorizationAminoMsg): _103.TransferAuthorization;
                    toAminoMsg(message: _103.TransferAuthorization): _103.TransferAuthorizationAminoMsg;
                    fromProtoMsg(message: _103.TransferAuthorizationProtoMsg): _103.TransferAuthorization;
                    toProto(message: _103.TransferAuthorization): Uint8Array;
                    toProtoMsg(message: _103.TransferAuthorization): _103.TransferAuthorizationProtoMsg;
                };
            };
            const v2: {
                protobufPackage: "ibc.applications.transfer.v2";
                FungibleTokenPacketData: {
                    typeUrl: string;
                    encode(message: _108.FungibleTokenPacketData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _108.FungibleTokenPacketData;
                    fromJSON(object: any): _108.FungibleTokenPacketData;
                    toJSON(message: _108.FungibleTokenPacketData): unknown;
                    fromPartial(object: Partial<_108.FungibleTokenPacketData>): _108.FungibleTokenPacketData;
                    fromSDK(object: _108.FungibleTokenPacketDataSDKType): _108.FungibleTokenPacketData;
                    toSDK(message: _108.FungibleTokenPacketData): _108.FungibleTokenPacketDataSDKType;
                    fromAmino(object: _108.FungibleTokenPacketDataAmino): _108.FungibleTokenPacketData;
                    toAmino(message: _108.FungibleTokenPacketData): _108.FungibleTokenPacketDataAmino;
                    fromAminoMsg(object: _108.FungibleTokenPacketDataAminoMsg): _108.FungibleTokenPacketData;
                    toAminoMsg(message: _108.FungibleTokenPacketData): _108.FungibleTokenPacketDataAminoMsg;
                    fromProtoMsg(message: _108.FungibleTokenPacketDataProtoMsg): _108.FungibleTokenPacketData;
                    toProto(message: _108.FungibleTokenPacketData): Uint8Array;
                    toProtoMsg(message: _108.FungibleTokenPacketData): _108.FungibleTokenPacketDataProtoMsg;
                };
            };
        }
    }
    namespace core {
        namespace channel {
            const v1: {
                Msg: typeof _242.Msg;
                Query: typeof _236.Query;
                QueryClientImpl: typeof _236.QueryClientImpl;
                LCDQueryClient: typeof _230.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        channelOpenInit(value: _112.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenTry(value: _112.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenAck(value: _112.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenConfirm(value: _112.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseInit(value: _112.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseConfirm(value: _112.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        recvPacket(value: _112.MsgRecvPacket): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeout(value: _112.MsgTimeout): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeoutOnClose(value: _112.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        acknowledgement(value: _112.MsgAcknowledgement): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        channelOpenInit(value: _112.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _112.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _112.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _112.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _112.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _112.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _112.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _112.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _112.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _112.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _112.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _112.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _112.MsgRecvPacket): {
                            typeUrl: string;
                            value: _112.MsgRecvPacket;
                        };
                        timeout(value: _112.MsgTimeout): {
                            typeUrl: string;
                            value: _112.MsgTimeout;
                        };
                        timeoutOnClose(value: _112.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _112.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _112.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _112.MsgAcknowledgement;
                        };
                    };
                    toJSON: {
                        channelOpenInit(value: _112.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelOpenTry(value: _112.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelOpenAck(value: _112.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelOpenConfirm(value: _112.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelCloseInit(value: _112.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelCloseConfirm(value: _112.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: unknown;
                        };
                        recvPacket(value: _112.MsgRecvPacket): {
                            typeUrl: string;
                            value: unknown;
                        };
                        timeout(value: _112.MsgTimeout): {
                            typeUrl: string;
                            value: unknown;
                        };
                        timeoutOnClose(value: _112.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: unknown;
                        };
                        acknowledgement(value: _112.MsgAcknowledgement): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        channelOpenInit(value: any): {
                            typeUrl: string;
                            value: _112.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: any): {
                            typeUrl: string;
                            value: _112.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: any): {
                            typeUrl: string;
                            value: _112.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: any): {
                            typeUrl: string;
                            value: _112.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: any): {
                            typeUrl: string;
                            value: _112.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: any): {
                            typeUrl: string;
                            value: _112.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: any): {
                            typeUrl: string;
                            value: _112.MsgRecvPacket;
                        };
                        timeout(value: any): {
                            typeUrl: string;
                            value: _112.MsgTimeout;
                        };
                        timeoutOnClose(value: any): {
                            typeUrl: string;
                            value: _112.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: any): {
                            typeUrl: string;
                            value: _112.MsgAcknowledgement;
                        };
                    };
                    fromPartial: {
                        channelOpenInit(value: _112.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _112.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _112.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _112.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _112.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _112.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _112.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _112.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _112.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _112.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _112.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _112.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _112.MsgRecvPacket): {
                            typeUrl: string;
                            value: _112.MsgRecvPacket;
                        };
                        timeout(value: _112.MsgTimeout): {
                            typeUrl: string;
                            value: _112.MsgTimeout;
                        };
                        timeoutOnClose(value: _112.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _112.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _112.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _112.MsgAcknowledgement;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.channel.v1.MsgChannelOpenInit": {
                        aminoType: string;
                        toAmino: (message: _112.MsgChannelOpenInit) => _112.MsgChannelOpenInitAmino;
                        fromAmino: (object: _112.MsgChannelOpenInitAmino) => _112.MsgChannelOpenInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenTry": {
                        aminoType: string;
                        toAmino: (message: _112.MsgChannelOpenTry) => _112.MsgChannelOpenTryAmino;
                        fromAmino: (object: _112.MsgChannelOpenTryAmino) => _112.MsgChannelOpenTry;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenAck": {
                        aminoType: string;
                        toAmino: (message: _112.MsgChannelOpenAck) => _112.MsgChannelOpenAckAmino;
                        fromAmino: (object: _112.MsgChannelOpenAckAmino) => _112.MsgChannelOpenAck;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
                        aminoType: string;
                        toAmino: (message: _112.MsgChannelOpenConfirm) => _112.MsgChannelOpenConfirmAmino;
                        fromAmino: (object: _112.MsgChannelOpenConfirmAmino) => _112.MsgChannelOpenConfirm;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseInit": {
                        aminoType: string;
                        toAmino: (message: _112.MsgChannelCloseInit) => _112.MsgChannelCloseInitAmino;
                        fromAmino: (object: _112.MsgChannelCloseInitAmino) => _112.MsgChannelCloseInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
                        aminoType: string;
                        toAmino: (message: _112.MsgChannelCloseConfirm) => _112.MsgChannelCloseConfirmAmino;
                        fromAmino: (object: _112.MsgChannelCloseConfirmAmino) => _112.MsgChannelCloseConfirm;
                    };
                    "/ibc.core.channel.v1.MsgRecvPacket": {
                        aminoType: string;
                        toAmino: (message: _112.MsgRecvPacket) => _112.MsgRecvPacketAmino;
                        fromAmino: (object: _112.MsgRecvPacketAmino) => _112.MsgRecvPacket;
                    };
                    "/ibc.core.channel.v1.MsgTimeout": {
                        aminoType: string;
                        toAmino: (message: _112.MsgTimeout) => _112.MsgTimeoutAmino;
                        fromAmino: (object: _112.MsgTimeoutAmino) => _112.MsgTimeout;
                    };
                    "/ibc.core.channel.v1.MsgTimeoutOnClose": {
                        aminoType: string;
                        toAmino: (message: _112.MsgTimeoutOnClose) => _112.MsgTimeoutOnCloseAmino;
                        fromAmino: (object: _112.MsgTimeoutOnCloseAmino) => _112.MsgTimeoutOnClose;
                    };
                    "/ibc.core.channel.v1.MsgAcknowledgement": {
                        aminoType: string;
                        toAmino: (message: _112.MsgAcknowledgement) => _112.MsgAcknowledgementAmino;
                        fromAmino: (object: _112.MsgAcknowledgementAmino) => _112.MsgAcknowledgement;
                    };
                };
                responseResultTypeFromJSON(object: any): _112.ResponseResultType;
                responseResultTypeToJSON(object: _112.ResponseResultType): string;
                protobufPackage: "ibc.core.channel.v1";
                ResponseResultType: typeof _112.ResponseResultType;
                ResponseResultTypeSDKType: typeof _112.ResponseResultType;
                ResponseResultTypeAmino: typeof _112.ResponseResultType;
                MsgChannelOpenInit: {
                    typeUrl: string;
                    encode(message: _112.MsgChannelOpenInit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.MsgChannelOpenInit;
                    fromJSON(object: any): _112.MsgChannelOpenInit;
                    toJSON(message: _112.MsgChannelOpenInit): unknown;
                    fromPartial(object: Partial<_112.MsgChannelOpenInit>): _112.MsgChannelOpenInit;
                    fromSDK(object: _112.MsgChannelOpenInitSDKType): _112.MsgChannelOpenInit;
                    toSDK(message: _112.MsgChannelOpenInit): _112.MsgChannelOpenInitSDKType;
                    fromAmino(object: _112.MsgChannelOpenInitAmino): _112.MsgChannelOpenInit;
                    toAmino(message: _112.MsgChannelOpenInit): _112.MsgChannelOpenInitAmino;
                    fromAminoMsg(object: _112.MsgChannelOpenInitAminoMsg): _112.MsgChannelOpenInit;
                    toAminoMsg(message: _112.MsgChannelOpenInit): _112.MsgChannelOpenInitAminoMsg;
                    fromProtoMsg(message: _112.MsgChannelOpenInitProtoMsg): _112.MsgChannelOpenInit;
                    toProto(message: _112.MsgChannelOpenInit): Uint8Array;
                    toProtoMsg(message: _112.MsgChannelOpenInit): _112.MsgChannelOpenInitProtoMsg;
                };
                MsgChannelOpenInitResponse: {
                    typeUrl: string;
                    encode(message: _112.MsgChannelOpenInitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.MsgChannelOpenInitResponse;
                    fromJSON(object: any): _112.MsgChannelOpenInitResponse;
                    toJSON(message: _112.MsgChannelOpenInitResponse): unknown;
                    fromPartial(object: Partial<_112.MsgChannelOpenInitResponse>): _112.MsgChannelOpenInitResponse;
                    fromSDK(object: _112.MsgChannelOpenInitResponseSDKType): _112.MsgChannelOpenInitResponse;
                    toSDK(message: _112.MsgChannelOpenInitResponse): _112.MsgChannelOpenInitResponseSDKType;
                    fromAmino(object: _112.MsgChannelOpenInitResponseAmino): _112.MsgChannelOpenInitResponse;
                    toAmino(message: _112.MsgChannelOpenInitResponse): _112.MsgChannelOpenInitResponseAmino;
                    fromAminoMsg(object: _112.MsgChannelOpenInitResponseAminoMsg): _112.MsgChannelOpenInitResponse;
                    toAminoMsg(message: _112.MsgChannelOpenInitResponse): _112.MsgChannelOpenInitResponseAminoMsg;
                    fromProtoMsg(message: _112.MsgChannelOpenInitResponseProtoMsg): _112.MsgChannelOpenInitResponse;
                    toProto(message: _112.MsgChannelOpenInitResponse): Uint8Array;
                    toProtoMsg(message: _112.MsgChannelOpenInitResponse): _112.MsgChannelOpenInitResponseProtoMsg;
                };
                MsgChannelOpenTry: {
                    typeUrl: string;
                    encode(message: _112.MsgChannelOpenTry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.MsgChannelOpenTry;
                    fromJSON(object: any): _112.MsgChannelOpenTry;
                    toJSON(message: _112.MsgChannelOpenTry): unknown;
                    fromPartial(object: Partial<_112.MsgChannelOpenTry>): _112.MsgChannelOpenTry;
                    fromSDK(object: _112.MsgChannelOpenTrySDKType): _112.MsgChannelOpenTry;
                    toSDK(message: _112.MsgChannelOpenTry): _112.MsgChannelOpenTrySDKType;
                    fromAmino(object: _112.MsgChannelOpenTryAmino): _112.MsgChannelOpenTry;
                    toAmino(message: _112.MsgChannelOpenTry): _112.MsgChannelOpenTryAmino;
                    fromAminoMsg(object: _112.MsgChannelOpenTryAminoMsg): _112.MsgChannelOpenTry;
                    toAminoMsg(message: _112.MsgChannelOpenTry): _112.MsgChannelOpenTryAminoMsg;
                    fromProtoMsg(message: _112.MsgChannelOpenTryProtoMsg): _112.MsgChannelOpenTry;
                    toProto(message: _112.MsgChannelOpenTry): Uint8Array;
                    toProtoMsg(message: _112.MsgChannelOpenTry): _112.MsgChannelOpenTryProtoMsg;
                };
                MsgChannelOpenTryResponse: {
                    typeUrl: string;
                    encode(message: _112.MsgChannelOpenTryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.MsgChannelOpenTryResponse;
                    fromJSON(object: any): _112.MsgChannelOpenTryResponse;
                    toJSON(message: _112.MsgChannelOpenTryResponse): unknown;
                    fromPartial(object: Partial<_112.MsgChannelOpenTryResponse>): _112.MsgChannelOpenTryResponse;
                    fromSDK(object: _112.MsgChannelOpenTryResponseSDKType): _112.MsgChannelOpenTryResponse;
                    toSDK(message: _112.MsgChannelOpenTryResponse): _112.MsgChannelOpenTryResponseSDKType;
                    fromAmino(object: _112.MsgChannelOpenTryResponseAmino): _112.MsgChannelOpenTryResponse;
                    toAmino(message: _112.MsgChannelOpenTryResponse): _112.MsgChannelOpenTryResponseAmino;
                    fromAminoMsg(object: _112.MsgChannelOpenTryResponseAminoMsg): _112.MsgChannelOpenTryResponse;
                    toAminoMsg(message: _112.MsgChannelOpenTryResponse): _112.MsgChannelOpenTryResponseAminoMsg;
                    fromProtoMsg(message: _112.MsgChannelOpenTryResponseProtoMsg): _112.MsgChannelOpenTryResponse;
                    toProto(message: _112.MsgChannelOpenTryResponse): Uint8Array;
                    toProtoMsg(message: _112.MsgChannelOpenTryResponse): _112.MsgChannelOpenTryResponseProtoMsg;
                };
                MsgChannelOpenAck: {
                    typeUrl: string;
                    encode(message: _112.MsgChannelOpenAck, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.MsgChannelOpenAck;
                    fromJSON(object: any): _112.MsgChannelOpenAck;
                    toJSON(message: _112.MsgChannelOpenAck): unknown;
                    fromPartial(object: Partial<_112.MsgChannelOpenAck>): _112.MsgChannelOpenAck;
                    fromSDK(object: _112.MsgChannelOpenAckSDKType): _112.MsgChannelOpenAck;
                    toSDK(message: _112.MsgChannelOpenAck): _112.MsgChannelOpenAckSDKType;
                    fromAmino(object: _112.MsgChannelOpenAckAmino): _112.MsgChannelOpenAck;
                    toAmino(message: _112.MsgChannelOpenAck): _112.MsgChannelOpenAckAmino;
                    fromAminoMsg(object: _112.MsgChannelOpenAckAminoMsg): _112.MsgChannelOpenAck;
                    toAminoMsg(message: _112.MsgChannelOpenAck): _112.MsgChannelOpenAckAminoMsg;
                    fromProtoMsg(message: _112.MsgChannelOpenAckProtoMsg): _112.MsgChannelOpenAck;
                    toProto(message: _112.MsgChannelOpenAck): Uint8Array;
                    toProtoMsg(message: _112.MsgChannelOpenAck): _112.MsgChannelOpenAckProtoMsg;
                };
                MsgChannelOpenAckResponse: {
                    typeUrl: string;
                    encode(_: _112.MsgChannelOpenAckResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.MsgChannelOpenAckResponse;
                    fromJSON(_: any): _112.MsgChannelOpenAckResponse;
                    toJSON(_: _112.MsgChannelOpenAckResponse): unknown;
                    fromPartial(_: Partial<_112.MsgChannelOpenAckResponse>): _112.MsgChannelOpenAckResponse;
                    fromSDK(_: _112.MsgChannelOpenAckResponseSDKType): _112.MsgChannelOpenAckResponse;
                    toSDK(_: _112.MsgChannelOpenAckResponse): _112.MsgChannelOpenAckResponseSDKType;
                    fromAmino(_: _112.MsgChannelOpenAckResponseAmino): _112.MsgChannelOpenAckResponse;
                    toAmino(_: _112.MsgChannelOpenAckResponse): _112.MsgChannelOpenAckResponseAmino;
                    fromAminoMsg(object: _112.MsgChannelOpenAckResponseAminoMsg): _112.MsgChannelOpenAckResponse;
                    toAminoMsg(message: _112.MsgChannelOpenAckResponse): _112.MsgChannelOpenAckResponseAminoMsg;
                    fromProtoMsg(message: _112.MsgChannelOpenAckResponseProtoMsg): _112.MsgChannelOpenAckResponse;
                    toProto(message: _112.MsgChannelOpenAckResponse): Uint8Array;
                    toProtoMsg(message: _112.MsgChannelOpenAckResponse): _112.MsgChannelOpenAckResponseProtoMsg;
                };
                MsgChannelOpenConfirm: {
                    typeUrl: string;
                    encode(message: _112.MsgChannelOpenConfirm, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.MsgChannelOpenConfirm;
                    fromJSON(object: any): _112.MsgChannelOpenConfirm;
                    toJSON(message: _112.MsgChannelOpenConfirm): unknown;
                    fromPartial(object: Partial<_112.MsgChannelOpenConfirm>): _112.MsgChannelOpenConfirm;
                    fromSDK(object: _112.MsgChannelOpenConfirmSDKType): _112.MsgChannelOpenConfirm;
                    toSDK(message: _112.MsgChannelOpenConfirm): _112.MsgChannelOpenConfirmSDKType;
                    fromAmino(object: _112.MsgChannelOpenConfirmAmino): _112.MsgChannelOpenConfirm;
                    toAmino(message: _112.MsgChannelOpenConfirm): _112.MsgChannelOpenConfirmAmino;
                    fromAminoMsg(object: _112.MsgChannelOpenConfirmAminoMsg): _112.MsgChannelOpenConfirm;
                    toAminoMsg(message: _112.MsgChannelOpenConfirm): _112.MsgChannelOpenConfirmAminoMsg;
                    fromProtoMsg(message: _112.MsgChannelOpenConfirmProtoMsg): _112.MsgChannelOpenConfirm;
                    toProto(message: _112.MsgChannelOpenConfirm): Uint8Array;
                    toProtoMsg(message: _112.MsgChannelOpenConfirm): _112.MsgChannelOpenConfirmProtoMsg;
                };
                MsgChannelOpenConfirmResponse: {
                    typeUrl: string;
                    encode(_: _112.MsgChannelOpenConfirmResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.MsgChannelOpenConfirmResponse;
                    fromJSON(_: any): _112.MsgChannelOpenConfirmResponse;
                    toJSON(_: _112.MsgChannelOpenConfirmResponse): unknown;
                    fromPartial(_: Partial<_112.MsgChannelOpenConfirmResponse>): _112.MsgChannelOpenConfirmResponse;
                    fromSDK(_: _112.MsgChannelOpenConfirmResponseSDKType): _112.MsgChannelOpenConfirmResponse;
                    toSDK(_: _112.MsgChannelOpenConfirmResponse): _112.MsgChannelOpenConfirmResponseSDKType;
                    fromAmino(_: _112.MsgChannelOpenConfirmResponseAmino): _112.MsgChannelOpenConfirmResponse;
                    toAmino(_: _112.MsgChannelOpenConfirmResponse): _112.MsgChannelOpenConfirmResponseAmino;
                    fromAminoMsg(object: _112.MsgChannelOpenConfirmResponseAminoMsg): _112.MsgChannelOpenConfirmResponse;
                    toAminoMsg(message: _112.MsgChannelOpenConfirmResponse): _112.MsgChannelOpenConfirmResponseAminoMsg;
                    fromProtoMsg(message: _112.MsgChannelOpenConfirmResponseProtoMsg): _112.MsgChannelOpenConfirmResponse;
                    toProto(message: _112.MsgChannelOpenConfirmResponse): Uint8Array;
                    toProtoMsg(message: _112.MsgChannelOpenConfirmResponse): _112.MsgChannelOpenConfirmResponseProtoMsg;
                };
                MsgChannelCloseInit: {
                    typeUrl: string;
                    encode(message: _112.MsgChannelCloseInit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.MsgChannelCloseInit;
                    fromJSON(object: any): _112.MsgChannelCloseInit;
                    toJSON(message: _112.MsgChannelCloseInit): unknown;
                    fromPartial(object: Partial<_112.MsgChannelCloseInit>): _112.MsgChannelCloseInit;
                    fromSDK(object: _112.MsgChannelCloseInitSDKType): _112.MsgChannelCloseInit;
                    toSDK(message: _112.MsgChannelCloseInit): _112.MsgChannelCloseInitSDKType;
                    fromAmino(object: _112.MsgChannelCloseInitAmino): _112.MsgChannelCloseInit;
                    toAmino(message: _112.MsgChannelCloseInit): _112.MsgChannelCloseInitAmino;
                    fromAminoMsg(object: _112.MsgChannelCloseInitAminoMsg): _112.MsgChannelCloseInit;
                    toAminoMsg(message: _112.MsgChannelCloseInit): _112.MsgChannelCloseInitAminoMsg;
                    fromProtoMsg(message: _112.MsgChannelCloseInitProtoMsg): _112.MsgChannelCloseInit;
                    toProto(message: _112.MsgChannelCloseInit): Uint8Array;
                    toProtoMsg(message: _112.MsgChannelCloseInit): _112.MsgChannelCloseInitProtoMsg;
                };
                MsgChannelCloseInitResponse: {
                    typeUrl: string;
                    encode(_: _112.MsgChannelCloseInitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.MsgChannelCloseInitResponse;
                    fromJSON(_: any): _112.MsgChannelCloseInitResponse;
                    toJSON(_: _112.MsgChannelCloseInitResponse): unknown;
                    fromPartial(_: Partial<_112.MsgChannelCloseInitResponse>): _112.MsgChannelCloseInitResponse;
                    fromSDK(_: _112.MsgChannelCloseInitResponseSDKType): _112.MsgChannelCloseInitResponse;
                    toSDK(_: _112.MsgChannelCloseInitResponse): _112.MsgChannelCloseInitResponseSDKType;
                    fromAmino(_: _112.MsgChannelCloseInitResponseAmino): _112.MsgChannelCloseInitResponse;
                    toAmino(_: _112.MsgChannelCloseInitResponse): _112.MsgChannelCloseInitResponseAmino;
                    fromAminoMsg(object: _112.MsgChannelCloseInitResponseAminoMsg): _112.MsgChannelCloseInitResponse;
                    toAminoMsg(message: _112.MsgChannelCloseInitResponse): _112.MsgChannelCloseInitResponseAminoMsg;
                    fromProtoMsg(message: _112.MsgChannelCloseInitResponseProtoMsg): _112.MsgChannelCloseInitResponse;
                    toProto(message: _112.MsgChannelCloseInitResponse): Uint8Array;
                    toProtoMsg(message: _112.MsgChannelCloseInitResponse): _112.MsgChannelCloseInitResponseProtoMsg;
                };
                MsgChannelCloseConfirm: {
                    typeUrl: string;
                    encode(message: _112.MsgChannelCloseConfirm, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.MsgChannelCloseConfirm;
                    fromJSON(object: any): _112.MsgChannelCloseConfirm;
                    toJSON(message: _112.MsgChannelCloseConfirm): unknown;
                    fromPartial(object: Partial<_112.MsgChannelCloseConfirm>): _112.MsgChannelCloseConfirm;
                    fromSDK(object: _112.MsgChannelCloseConfirmSDKType): _112.MsgChannelCloseConfirm;
                    toSDK(message: _112.MsgChannelCloseConfirm): _112.MsgChannelCloseConfirmSDKType;
                    fromAmino(object: _112.MsgChannelCloseConfirmAmino): _112.MsgChannelCloseConfirm;
                    toAmino(message: _112.MsgChannelCloseConfirm): _112.MsgChannelCloseConfirmAmino;
                    fromAminoMsg(object: _112.MsgChannelCloseConfirmAminoMsg): _112.MsgChannelCloseConfirm;
                    toAminoMsg(message: _112.MsgChannelCloseConfirm): _112.MsgChannelCloseConfirmAminoMsg;
                    fromProtoMsg(message: _112.MsgChannelCloseConfirmProtoMsg): _112.MsgChannelCloseConfirm;
                    toProto(message: _112.MsgChannelCloseConfirm): Uint8Array;
                    toProtoMsg(message: _112.MsgChannelCloseConfirm): _112.MsgChannelCloseConfirmProtoMsg;
                };
                MsgChannelCloseConfirmResponse: {
                    typeUrl: string;
                    encode(_: _112.MsgChannelCloseConfirmResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.MsgChannelCloseConfirmResponse;
                    fromJSON(_: any): _112.MsgChannelCloseConfirmResponse;
                    toJSON(_: _112.MsgChannelCloseConfirmResponse): unknown;
                    fromPartial(_: Partial<_112.MsgChannelCloseConfirmResponse>): _112.MsgChannelCloseConfirmResponse;
                    fromSDK(_: _112.MsgChannelCloseConfirmResponseSDKType): _112.MsgChannelCloseConfirmResponse;
                    toSDK(_: _112.MsgChannelCloseConfirmResponse): _112.MsgChannelCloseConfirmResponseSDKType;
                    fromAmino(_: _112.MsgChannelCloseConfirmResponseAmino): _112.MsgChannelCloseConfirmResponse;
                    toAmino(_: _112.MsgChannelCloseConfirmResponse): _112.MsgChannelCloseConfirmResponseAmino;
                    fromAminoMsg(object: _112.MsgChannelCloseConfirmResponseAminoMsg): _112.MsgChannelCloseConfirmResponse;
                    toAminoMsg(message: _112.MsgChannelCloseConfirmResponse): _112.MsgChannelCloseConfirmResponseAminoMsg;
                    fromProtoMsg(message: _112.MsgChannelCloseConfirmResponseProtoMsg): _112.MsgChannelCloseConfirmResponse;
                    toProto(message: _112.MsgChannelCloseConfirmResponse): Uint8Array;
                    toProtoMsg(message: _112.MsgChannelCloseConfirmResponse): _112.MsgChannelCloseConfirmResponseProtoMsg;
                };
                MsgRecvPacket: {
                    typeUrl: string;
                    encode(message: _112.MsgRecvPacket, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.MsgRecvPacket;
                    fromJSON(object: any): _112.MsgRecvPacket;
                    toJSON(message: _112.MsgRecvPacket): unknown;
                    fromPartial(object: Partial<_112.MsgRecvPacket>): _112.MsgRecvPacket;
                    fromSDK(object: _112.MsgRecvPacketSDKType): _112.MsgRecvPacket;
                    toSDK(message: _112.MsgRecvPacket): _112.MsgRecvPacketSDKType;
                    fromAmino(object: _112.MsgRecvPacketAmino): _112.MsgRecvPacket;
                    toAmino(message: _112.MsgRecvPacket): _112.MsgRecvPacketAmino;
                    fromAminoMsg(object: _112.MsgRecvPacketAminoMsg): _112.MsgRecvPacket;
                    toAminoMsg(message: _112.MsgRecvPacket): _112.MsgRecvPacketAminoMsg;
                    fromProtoMsg(message: _112.MsgRecvPacketProtoMsg): _112.MsgRecvPacket;
                    toProto(message: _112.MsgRecvPacket): Uint8Array;
                    toProtoMsg(message: _112.MsgRecvPacket): _112.MsgRecvPacketProtoMsg;
                };
                MsgRecvPacketResponse: {
                    typeUrl: string;
                    encode(message: _112.MsgRecvPacketResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.MsgRecvPacketResponse;
                    fromJSON(object: any): _112.MsgRecvPacketResponse;
                    toJSON(message: _112.MsgRecvPacketResponse): unknown;
                    fromPartial(object: Partial<_112.MsgRecvPacketResponse>): _112.MsgRecvPacketResponse;
                    fromSDK(object: _112.MsgRecvPacketResponseSDKType): _112.MsgRecvPacketResponse;
                    toSDK(message: _112.MsgRecvPacketResponse): _112.MsgRecvPacketResponseSDKType;
                    fromAmino(object: _112.MsgRecvPacketResponseAmino): _112.MsgRecvPacketResponse;
                    toAmino(message: _112.MsgRecvPacketResponse): _112.MsgRecvPacketResponseAmino;
                    fromAminoMsg(object: _112.MsgRecvPacketResponseAminoMsg): _112.MsgRecvPacketResponse;
                    toAminoMsg(message: _112.MsgRecvPacketResponse): _112.MsgRecvPacketResponseAminoMsg;
                    fromProtoMsg(message: _112.MsgRecvPacketResponseProtoMsg): _112.MsgRecvPacketResponse;
                    toProto(message: _112.MsgRecvPacketResponse): Uint8Array;
                    toProtoMsg(message: _112.MsgRecvPacketResponse): _112.MsgRecvPacketResponseProtoMsg;
                };
                MsgTimeout: {
                    typeUrl: string;
                    encode(message: _112.MsgTimeout, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.MsgTimeout;
                    fromJSON(object: any): _112.MsgTimeout;
                    toJSON(message: _112.MsgTimeout): unknown;
                    fromPartial(object: Partial<_112.MsgTimeout>): _112.MsgTimeout;
                    fromSDK(object: _112.MsgTimeoutSDKType): _112.MsgTimeout;
                    toSDK(message: _112.MsgTimeout): _112.MsgTimeoutSDKType;
                    fromAmino(object: _112.MsgTimeoutAmino): _112.MsgTimeout;
                    toAmino(message: _112.MsgTimeout): _112.MsgTimeoutAmino;
                    fromAminoMsg(object: _112.MsgTimeoutAminoMsg): _112.MsgTimeout;
                    toAminoMsg(message: _112.MsgTimeout): _112.MsgTimeoutAminoMsg;
                    fromProtoMsg(message: _112.MsgTimeoutProtoMsg): _112.MsgTimeout;
                    toProto(message: _112.MsgTimeout): Uint8Array;
                    toProtoMsg(message: _112.MsgTimeout): _112.MsgTimeoutProtoMsg;
                };
                MsgTimeoutResponse: {
                    typeUrl: string;
                    encode(message: _112.MsgTimeoutResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.MsgTimeoutResponse;
                    fromJSON(object: any): _112.MsgTimeoutResponse;
                    toJSON(message: _112.MsgTimeoutResponse): unknown;
                    fromPartial(object: Partial<_112.MsgTimeoutResponse>): _112.MsgTimeoutResponse;
                    fromSDK(object: _112.MsgTimeoutResponseSDKType): _112.MsgTimeoutResponse;
                    toSDK(message: _112.MsgTimeoutResponse): _112.MsgTimeoutResponseSDKType;
                    fromAmino(object: _112.MsgTimeoutResponseAmino): _112.MsgTimeoutResponse;
                    toAmino(message: _112.MsgTimeoutResponse): _112.MsgTimeoutResponseAmino;
                    fromAminoMsg(object: _112.MsgTimeoutResponseAminoMsg): _112.MsgTimeoutResponse;
                    toAminoMsg(message: _112.MsgTimeoutResponse): _112.MsgTimeoutResponseAminoMsg;
                    fromProtoMsg(message: _112.MsgTimeoutResponseProtoMsg): _112.MsgTimeoutResponse;
                    toProto(message: _112.MsgTimeoutResponse): Uint8Array;
                    toProtoMsg(message: _112.MsgTimeoutResponse): _112.MsgTimeoutResponseProtoMsg;
                };
                MsgTimeoutOnClose: {
                    typeUrl: string;
                    encode(message: _112.MsgTimeoutOnClose, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.MsgTimeoutOnClose;
                    fromJSON(object: any): _112.MsgTimeoutOnClose;
                    toJSON(message: _112.MsgTimeoutOnClose): unknown;
                    fromPartial(object: Partial<_112.MsgTimeoutOnClose>): _112.MsgTimeoutOnClose;
                    fromSDK(object: _112.MsgTimeoutOnCloseSDKType): _112.MsgTimeoutOnClose;
                    toSDK(message: _112.MsgTimeoutOnClose): _112.MsgTimeoutOnCloseSDKType;
                    fromAmino(object: _112.MsgTimeoutOnCloseAmino): _112.MsgTimeoutOnClose;
                    toAmino(message: _112.MsgTimeoutOnClose): _112.MsgTimeoutOnCloseAmino;
                    fromAminoMsg(object: _112.MsgTimeoutOnCloseAminoMsg): _112.MsgTimeoutOnClose;
                    toAminoMsg(message: _112.MsgTimeoutOnClose): _112.MsgTimeoutOnCloseAminoMsg;
                    fromProtoMsg(message: _112.MsgTimeoutOnCloseProtoMsg): _112.MsgTimeoutOnClose;
                    toProto(message: _112.MsgTimeoutOnClose): Uint8Array;
                    toProtoMsg(message: _112.MsgTimeoutOnClose): _112.MsgTimeoutOnCloseProtoMsg;
                };
                MsgTimeoutOnCloseResponse: {
                    typeUrl: string;
                    encode(message: _112.MsgTimeoutOnCloseResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.MsgTimeoutOnCloseResponse;
                    fromJSON(object: any): _112.MsgTimeoutOnCloseResponse;
                    toJSON(message: _112.MsgTimeoutOnCloseResponse): unknown;
                    fromPartial(object: Partial<_112.MsgTimeoutOnCloseResponse>): _112.MsgTimeoutOnCloseResponse;
                    fromSDK(object: _112.MsgTimeoutOnCloseResponseSDKType): _112.MsgTimeoutOnCloseResponse;
                    toSDK(message: _112.MsgTimeoutOnCloseResponse): _112.MsgTimeoutOnCloseResponseSDKType;
                    fromAmino(object: _112.MsgTimeoutOnCloseResponseAmino): _112.MsgTimeoutOnCloseResponse;
                    toAmino(message: _112.MsgTimeoutOnCloseResponse): _112.MsgTimeoutOnCloseResponseAmino;
                    fromAminoMsg(object: _112.MsgTimeoutOnCloseResponseAminoMsg): _112.MsgTimeoutOnCloseResponse;
                    toAminoMsg(message: _112.MsgTimeoutOnCloseResponse): _112.MsgTimeoutOnCloseResponseAminoMsg;
                    fromProtoMsg(message: _112.MsgTimeoutOnCloseResponseProtoMsg): _112.MsgTimeoutOnCloseResponse;
                    toProto(message: _112.MsgTimeoutOnCloseResponse): Uint8Array;
                    toProtoMsg(message: _112.MsgTimeoutOnCloseResponse): _112.MsgTimeoutOnCloseResponseProtoMsg;
                };
                MsgAcknowledgement: {
                    typeUrl: string;
                    encode(message: _112.MsgAcknowledgement, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.MsgAcknowledgement;
                    fromJSON(object: any): _112.MsgAcknowledgement;
                    toJSON(message: _112.MsgAcknowledgement): unknown;
                    fromPartial(object: Partial<_112.MsgAcknowledgement>): _112.MsgAcknowledgement;
                    fromSDK(object: _112.MsgAcknowledgementSDKType): _112.MsgAcknowledgement;
                    toSDK(message: _112.MsgAcknowledgement): _112.MsgAcknowledgementSDKType;
                    fromAmino(object: _112.MsgAcknowledgementAmino): _112.MsgAcknowledgement;
                    toAmino(message: _112.MsgAcknowledgement): _112.MsgAcknowledgementAmino;
                    fromAminoMsg(object: _112.MsgAcknowledgementAminoMsg): _112.MsgAcknowledgement;
                    toAminoMsg(message: _112.MsgAcknowledgement): _112.MsgAcknowledgementAminoMsg;
                    fromProtoMsg(message: _112.MsgAcknowledgementProtoMsg): _112.MsgAcknowledgement;
                    toProto(message: _112.MsgAcknowledgement): Uint8Array;
                    toProtoMsg(message: _112.MsgAcknowledgement): _112.MsgAcknowledgementProtoMsg;
                };
                MsgAcknowledgementResponse: {
                    typeUrl: string;
                    encode(message: _112.MsgAcknowledgementResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _112.MsgAcknowledgementResponse;
                    fromJSON(object: any): _112.MsgAcknowledgementResponse;
                    toJSON(message: _112.MsgAcknowledgementResponse): unknown;
                    fromPartial(object: Partial<_112.MsgAcknowledgementResponse>): _112.MsgAcknowledgementResponse;
                    fromSDK(object: _112.MsgAcknowledgementResponseSDKType): _112.MsgAcknowledgementResponse;
                    toSDK(message: _112.MsgAcknowledgementResponse): _112.MsgAcknowledgementResponseSDKType;
                    fromAmino(object: _112.MsgAcknowledgementResponseAmino): _112.MsgAcknowledgementResponse;
                    toAmino(message: _112.MsgAcknowledgementResponse): _112.MsgAcknowledgementResponseAmino;
                    fromAminoMsg(object: _112.MsgAcknowledgementResponseAminoMsg): _112.MsgAcknowledgementResponse;
                    toAminoMsg(message: _112.MsgAcknowledgementResponse): _112.MsgAcknowledgementResponseAminoMsg;
                    fromProtoMsg(message: _112.MsgAcknowledgementResponseProtoMsg): _112.MsgAcknowledgementResponse;
                    toProto(message: _112.MsgAcknowledgementResponse): Uint8Array;
                    toProtoMsg(message: _112.MsgAcknowledgementResponse): _112.MsgAcknowledgementResponseProtoMsg;
                };
                QueryChannelRequest: {
                    typeUrl: string;
                    encode(message: _111.QueryChannelRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _111.QueryChannelRequest;
                    fromJSON(object: any): _111.QueryChannelRequest;
                    toJSON(message: _111.QueryChannelRequest): unknown;
                    fromPartial(object: Partial<_111.QueryChannelRequest>): _111.QueryChannelRequest;
                    fromSDK(object: _111.QueryChannelRequestSDKType): _111.QueryChannelRequest;
                    toSDK(message: _111.QueryChannelRequest): _111.QueryChannelRequestSDKType;
                    fromAmino(object: _111.QueryChannelRequestAmino): _111.QueryChannelRequest;
                    toAmino(message: _111.QueryChannelRequest): _111.QueryChannelRequestAmino;
                    fromAminoMsg(object: _111.QueryChannelRequestAminoMsg): _111.QueryChannelRequest;
                    toAminoMsg(message: _111.QueryChannelRequest): _111.QueryChannelRequestAminoMsg;
                    fromProtoMsg(message: _111.QueryChannelRequestProtoMsg): _111.QueryChannelRequest;
                    toProto(message: _111.QueryChannelRequest): Uint8Array;
                    toProtoMsg(message: _111.QueryChannelRequest): _111.QueryChannelRequestProtoMsg;
                };
                QueryChannelResponse: {
                    typeUrl: string;
                    encode(message: _111.QueryChannelResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _111.QueryChannelResponse;
                    fromJSON(object: any): _111.QueryChannelResponse;
                    toJSON(message: _111.QueryChannelResponse): unknown;
                    fromPartial(object: Partial<_111.QueryChannelResponse>): _111.QueryChannelResponse;
                    fromSDK(object: _111.QueryChannelResponseSDKType): _111.QueryChannelResponse;
                    toSDK(message: _111.QueryChannelResponse): _111.QueryChannelResponseSDKType;
                    fromAmino(object: _111.QueryChannelResponseAmino): _111.QueryChannelResponse;
                    toAmino(message: _111.QueryChannelResponse): _111.QueryChannelResponseAmino;
                    fromAminoMsg(object: _111.QueryChannelResponseAminoMsg): _111.QueryChannelResponse;
                    toAminoMsg(message: _111.QueryChannelResponse): _111.QueryChannelResponseAminoMsg;
                    fromProtoMsg(message: _111.QueryChannelResponseProtoMsg): _111.QueryChannelResponse;
                    toProto(message: _111.QueryChannelResponse): Uint8Array;
                    toProtoMsg(message: _111.QueryChannelResponse): _111.QueryChannelResponseProtoMsg;
                };
                QueryChannelsRequest: {
                    typeUrl: string;
                    encode(message: _111.QueryChannelsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _111.QueryChannelsRequest;
                    fromJSON(object: any): _111.QueryChannelsRequest;
                    toJSON(message: _111.QueryChannelsRequest): unknown;
                    fromPartial(object: Partial<_111.QueryChannelsRequest>): _111.QueryChannelsRequest;
                    fromSDK(object: _111.QueryChannelsRequestSDKType): _111.QueryChannelsRequest;
                    toSDK(message: _111.QueryChannelsRequest): _111.QueryChannelsRequestSDKType;
                    fromAmino(object: _111.QueryChannelsRequestAmino): _111.QueryChannelsRequest;
                    toAmino(message: _111.QueryChannelsRequest): _111.QueryChannelsRequestAmino;
                    fromAminoMsg(object: _111.QueryChannelsRequestAminoMsg): _111.QueryChannelsRequest;
                    toAminoMsg(message: _111.QueryChannelsRequest): _111.QueryChannelsRequestAminoMsg;
                    fromProtoMsg(message: _111.QueryChannelsRequestProtoMsg): _111.QueryChannelsRequest;
                    toProto(message: _111.QueryChannelsRequest): Uint8Array;
                    toProtoMsg(message: _111.QueryChannelsRequest): _111.QueryChannelsRequestProtoMsg;
                };
                QueryChannelsResponse: {
                    typeUrl: string;
                    encode(message: _111.QueryChannelsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _111.QueryChannelsResponse;
                    fromJSON(object: any): _111.QueryChannelsResponse;
                    toJSON(message: _111.QueryChannelsResponse): unknown;
                    fromPartial(object: Partial<_111.QueryChannelsResponse>): _111.QueryChannelsResponse;
                    fromSDK(object: _111.QueryChannelsResponseSDKType): _111.QueryChannelsResponse;
                    toSDK(message: _111.QueryChannelsResponse): _111.QueryChannelsResponseSDKType;
                    fromAmino(object: _111.QueryChannelsResponseAmino): _111.QueryChannelsResponse;
                    toAmino(message: _111.QueryChannelsResponse): _111.QueryChannelsResponseAmino;
                    fromAminoMsg(object: _111.QueryChannelsResponseAminoMsg): _111.QueryChannelsResponse;
                    toAminoMsg(message: _111.QueryChannelsResponse): _111.QueryChannelsResponseAminoMsg;
                    fromProtoMsg(message: _111.QueryChannelsResponseProtoMsg): _111.QueryChannelsResponse;
                    toProto(message: _111.QueryChannelsResponse): Uint8Array;
                    toProtoMsg(message: _111.QueryChannelsResponse): _111.QueryChannelsResponseProtoMsg;
                };
                QueryConnectionChannelsRequest: {
                    typeUrl: string;
                    encode(message: _111.QueryConnectionChannelsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _111.QueryConnectionChannelsRequest;
                    fromJSON(object: any): _111.QueryConnectionChannelsRequest;
                    toJSON(message: _111.QueryConnectionChannelsRequest): unknown;
                    fromPartial(object: Partial<_111.QueryConnectionChannelsRequest>): _111.QueryConnectionChannelsRequest;
                    fromSDK(object: _111.QueryConnectionChannelsRequestSDKType): _111.QueryConnectionChannelsRequest;
                    toSDK(message: _111.QueryConnectionChannelsRequest): _111.QueryConnectionChannelsRequestSDKType;
                    fromAmino(object: _111.QueryConnectionChannelsRequestAmino): _111.QueryConnectionChannelsRequest;
                    toAmino(message: _111.QueryConnectionChannelsRequest): _111.QueryConnectionChannelsRequestAmino;
                    fromAminoMsg(object: _111.QueryConnectionChannelsRequestAminoMsg): _111.QueryConnectionChannelsRequest;
                    toAminoMsg(message: _111.QueryConnectionChannelsRequest): _111.QueryConnectionChannelsRequestAminoMsg;
                    fromProtoMsg(message: _111.QueryConnectionChannelsRequestProtoMsg): _111.QueryConnectionChannelsRequest;
                    toProto(message: _111.QueryConnectionChannelsRequest): Uint8Array;
                    toProtoMsg(message: _111.QueryConnectionChannelsRequest): _111.QueryConnectionChannelsRequestProtoMsg;
                };
                QueryConnectionChannelsResponse: {
                    typeUrl: string;
                    encode(message: _111.QueryConnectionChannelsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _111.QueryConnectionChannelsResponse;
                    fromJSON(object: any): _111.QueryConnectionChannelsResponse;
                    toJSON(message: _111.QueryConnectionChannelsResponse): unknown;
                    fromPartial(object: Partial<_111.QueryConnectionChannelsResponse>): _111.QueryConnectionChannelsResponse;
                    fromSDK(object: _111.QueryConnectionChannelsResponseSDKType): _111.QueryConnectionChannelsResponse;
                    toSDK(message: _111.QueryConnectionChannelsResponse): _111.QueryConnectionChannelsResponseSDKType;
                    fromAmino(object: _111.QueryConnectionChannelsResponseAmino): _111.QueryConnectionChannelsResponse;
                    toAmino(message: _111.QueryConnectionChannelsResponse): _111.QueryConnectionChannelsResponseAmino;
                    fromAminoMsg(object: _111.QueryConnectionChannelsResponseAminoMsg): _111.QueryConnectionChannelsResponse;
                    toAminoMsg(message: _111.QueryConnectionChannelsResponse): _111.QueryConnectionChannelsResponseAminoMsg;
                    fromProtoMsg(message: _111.QueryConnectionChannelsResponseProtoMsg): _111.QueryConnectionChannelsResponse;
                    toProto(message: _111.QueryConnectionChannelsResponse): Uint8Array;
                    toProtoMsg(message: _111.QueryConnectionChannelsResponse): _111.QueryConnectionChannelsResponseProtoMsg;
                };
                QueryChannelClientStateRequest: {
                    typeUrl: string;
                    encode(message: _111.QueryChannelClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _111.QueryChannelClientStateRequest;
                    fromJSON(object: any): _111.QueryChannelClientStateRequest;
                    toJSON(message: _111.QueryChannelClientStateRequest): unknown;
                    fromPartial(object: Partial<_111.QueryChannelClientStateRequest>): _111.QueryChannelClientStateRequest;
                    fromSDK(object: _111.QueryChannelClientStateRequestSDKType): _111.QueryChannelClientStateRequest;
                    toSDK(message: _111.QueryChannelClientStateRequest): _111.QueryChannelClientStateRequestSDKType;
                    fromAmino(object: _111.QueryChannelClientStateRequestAmino): _111.QueryChannelClientStateRequest;
                    toAmino(message: _111.QueryChannelClientStateRequest): _111.QueryChannelClientStateRequestAmino;
                    fromAminoMsg(object: _111.QueryChannelClientStateRequestAminoMsg): _111.QueryChannelClientStateRequest;
                    toAminoMsg(message: _111.QueryChannelClientStateRequest): _111.QueryChannelClientStateRequestAminoMsg;
                    fromProtoMsg(message: _111.QueryChannelClientStateRequestProtoMsg): _111.QueryChannelClientStateRequest;
                    toProto(message: _111.QueryChannelClientStateRequest): Uint8Array;
                    toProtoMsg(message: _111.QueryChannelClientStateRequest): _111.QueryChannelClientStateRequestProtoMsg;
                };
                QueryChannelClientStateResponse: {
                    typeUrl: string;
                    encode(message: _111.QueryChannelClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _111.QueryChannelClientStateResponse;
                    fromJSON(object: any): _111.QueryChannelClientStateResponse;
                    toJSON(message: _111.QueryChannelClientStateResponse): unknown;
                    fromPartial(object: Partial<_111.QueryChannelClientStateResponse>): _111.QueryChannelClientStateResponse;
                    fromSDK(object: _111.QueryChannelClientStateResponseSDKType): _111.QueryChannelClientStateResponse;
                    toSDK(message: _111.QueryChannelClientStateResponse): _111.QueryChannelClientStateResponseSDKType;
                    fromAmino(object: _111.QueryChannelClientStateResponseAmino): _111.QueryChannelClientStateResponse;
                    toAmino(message: _111.QueryChannelClientStateResponse): _111.QueryChannelClientStateResponseAmino;
                    fromAminoMsg(object: _111.QueryChannelClientStateResponseAminoMsg): _111.QueryChannelClientStateResponse;
                    toAminoMsg(message: _111.QueryChannelClientStateResponse): _111.QueryChannelClientStateResponseAminoMsg;
                    fromProtoMsg(message: _111.QueryChannelClientStateResponseProtoMsg): _111.QueryChannelClientStateResponse;
                    toProto(message: _111.QueryChannelClientStateResponse): Uint8Array;
                    toProtoMsg(message: _111.QueryChannelClientStateResponse): _111.QueryChannelClientStateResponseProtoMsg;
                };
                QueryChannelConsensusStateRequest: {
                    typeUrl: string;
                    encode(message: _111.QueryChannelConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _111.QueryChannelConsensusStateRequest;
                    fromJSON(object: any): _111.QueryChannelConsensusStateRequest;
                    toJSON(message: _111.QueryChannelConsensusStateRequest): unknown;
                    fromPartial(object: Partial<_111.QueryChannelConsensusStateRequest>): _111.QueryChannelConsensusStateRequest;
                    fromSDK(object: _111.QueryChannelConsensusStateRequestSDKType): _111.QueryChannelConsensusStateRequest;
                    toSDK(message: _111.QueryChannelConsensusStateRequest): _111.QueryChannelConsensusStateRequestSDKType;
                    fromAmino(object: _111.QueryChannelConsensusStateRequestAmino): _111.QueryChannelConsensusStateRequest;
                    toAmino(message: _111.QueryChannelConsensusStateRequest): _111.QueryChannelConsensusStateRequestAmino;
                    fromAminoMsg(object: _111.QueryChannelConsensusStateRequestAminoMsg): _111.QueryChannelConsensusStateRequest;
                    toAminoMsg(message: _111.QueryChannelConsensusStateRequest): _111.QueryChannelConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _111.QueryChannelConsensusStateRequestProtoMsg): _111.QueryChannelConsensusStateRequest;
                    toProto(message: _111.QueryChannelConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _111.QueryChannelConsensusStateRequest): _111.QueryChannelConsensusStateRequestProtoMsg;
                };
                QueryChannelConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _111.QueryChannelConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _111.QueryChannelConsensusStateResponse;
                    fromJSON(object: any): _111.QueryChannelConsensusStateResponse;
                    toJSON(message: _111.QueryChannelConsensusStateResponse): unknown;
                    fromPartial(object: Partial<_111.QueryChannelConsensusStateResponse>): _111.QueryChannelConsensusStateResponse;
                    fromSDK(object: _111.QueryChannelConsensusStateResponseSDKType): _111.QueryChannelConsensusStateResponse;
                    toSDK(message: _111.QueryChannelConsensusStateResponse): _111.QueryChannelConsensusStateResponseSDKType;
                    fromAmino(object: _111.QueryChannelConsensusStateResponseAmino): _111.QueryChannelConsensusStateResponse;
                    toAmino(message: _111.QueryChannelConsensusStateResponse): _111.QueryChannelConsensusStateResponseAmino;
                    fromAminoMsg(object: _111.QueryChannelConsensusStateResponseAminoMsg): _111.QueryChannelConsensusStateResponse;
                    toAminoMsg(message: _111.QueryChannelConsensusStateResponse): _111.QueryChannelConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _111.QueryChannelConsensusStateResponseProtoMsg): _111.QueryChannelConsensusStateResponse;
                    toProto(message: _111.QueryChannelConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _111.QueryChannelConsensusStateResponse): _111.QueryChannelConsensusStateResponseProtoMsg;
                };
                QueryPacketCommitmentRequest: {
                    typeUrl: string;
                    encode(message: _111.QueryPacketCommitmentRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _111.QueryPacketCommitmentRequest;
                    fromJSON(object: any): _111.QueryPacketCommitmentRequest;
                    toJSON(message: _111.QueryPacketCommitmentRequest): unknown;
                    fromPartial(object: Partial<_111.QueryPacketCommitmentRequest>): _111.QueryPacketCommitmentRequest;
                    fromSDK(object: _111.QueryPacketCommitmentRequestSDKType): _111.QueryPacketCommitmentRequest;
                    toSDK(message: _111.QueryPacketCommitmentRequest): _111.QueryPacketCommitmentRequestSDKType;
                    fromAmino(object: _111.QueryPacketCommitmentRequestAmino): _111.QueryPacketCommitmentRequest;
                    toAmino(message: _111.QueryPacketCommitmentRequest): _111.QueryPacketCommitmentRequestAmino;
                    fromAminoMsg(object: _111.QueryPacketCommitmentRequestAminoMsg): _111.QueryPacketCommitmentRequest;
                    toAminoMsg(message: _111.QueryPacketCommitmentRequest): _111.QueryPacketCommitmentRequestAminoMsg;
                    fromProtoMsg(message: _111.QueryPacketCommitmentRequestProtoMsg): _111.QueryPacketCommitmentRequest;
                    toProto(message: _111.QueryPacketCommitmentRequest): Uint8Array;
                    toProtoMsg(message: _111.QueryPacketCommitmentRequest): _111.QueryPacketCommitmentRequestProtoMsg;
                };
                QueryPacketCommitmentResponse: {
                    typeUrl: string;
                    encode(message: _111.QueryPacketCommitmentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _111.QueryPacketCommitmentResponse;
                    fromJSON(object: any): _111.QueryPacketCommitmentResponse;
                    toJSON(message: _111.QueryPacketCommitmentResponse): unknown;
                    fromPartial(object: Partial<_111.QueryPacketCommitmentResponse>): _111.QueryPacketCommitmentResponse;
                    fromSDK(object: _111.QueryPacketCommitmentResponseSDKType): _111.QueryPacketCommitmentResponse;
                    toSDK(message: _111.QueryPacketCommitmentResponse): _111.QueryPacketCommitmentResponseSDKType;
                    fromAmino(object: _111.QueryPacketCommitmentResponseAmino): _111.QueryPacketCommitmentResponse;
                    toAmino(message: _111.QueryPacketCommitmentResponse): _111.QueryPacketCommitmentResponseAmino;
                    fromAminoMsg(object: _111.QueryPacketCommitmentResponseAminoMsg): _111.QueryPacketCommitmentResponse;
                    toAminoMsg(message: _111.QueryPacketCommitmentResponse): _111.QueryPacketCommitmentResponseAminoMsg;
                    fromProtoMsg(message: _111.QueryPacketCommitmentResponseProtoMsg): _111.QueryPacketCommitmentResponse;
                    toProto(message: _111.QueryPacketCommitmentResponse): Uint8Array;
                    toProtoMsg(message: _111.QueryPacketCommitmentResponse): _111.QueryPacketCommitmentResponseProtoMsg;
                };
                QueryPacketCommitmentsRequest: {
                    typeUrl: string;
                    encode(message: _111.QueryPacketCommitmentsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _111.QueryPacketCommitmentsRequest;
                    fromJSON(object: any): _111.QueryPacketCommitmentsRequest;
                    toJSON(message: _111.QueryPacketCommitmentsRequest): unknown;
                    fromPartial(object: Partial<_111.QueryPacketCommitmentsRequest>): _111.QueryPacketCommitmentsRequest;
                    fromSDK(object: _111.QueryPacketCommitmentsRequestSDKType): _111.QueryPacketCommitmentsRequest;
                    toSDK(message: _111.QueryPacketCommitmentsRequest): _111.QueryPacketCommitmentsRequestSDKType;
                    fromAmino(object: _111.QueryPacketCommitmentsRequestAmino): _111.QueryPacketCommitmentsRequest;
                    toAmino(message: _111.QueryPacketCommitmentsRequest): _111.QueryPacketCommitmentsRequestAmino;
                    fromAminoMsg(object: _111.QueryPacketCommitmentsRequestAminoMsg): _111.QueryPacketCommitmentsRequest;
                    toAminoMsg(message: _111.QueryPacketCommitmentsRequest): _111.QueryPacketCommitmentsRequestAminoMsg;
                    fromProtoMsg(message: _111.QueryPacketCommitmentsRequestProtoMsg): _111.QueryPacketCommitmentsRequest;
                    toProto(message: _111.QueryPacketCommitmentsRequest): Uint8Array;
                    toProtoMsg(message: _111.QueryPacketCommitmentsRequest): _111.QueryPacketCommitmentsRequestProtoMsg;
                };
                QueryPacketCommitmentsResponse: {
                    typeUrl: string;
                    encode(message: _111.QueryPacketCommitmentsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _111.QueryPacketCommitmentsResponse;
                    fromJSON(object: any): _111.QueryPacketCommitmentsResponse;
                    toJSON(message: _111.QueryPacketCommitmentsResponse): unknown;
                    fromPartial(object: Partial<_111.QueryPacketCommitmentsResponse>): _111.QueryPacketCommitmentsResponse;
                    fromSDK(object: _111.QueryPacketCommitmentsResponseSDKType): _111.QueryPacketCommitmentsResponse;
                    toSDK(message: _111.QueryPacketCommitmentsResponse): _111.QueryPacketCommitmentsResponseSDKType;
                    fromAmino(object: _111.QueryPacketCommitmentsResponseAmino): _111.QueryPacketCommitmentsResponse;
                    toAmino(message: _111.QueryPacketCommitmentsResponse): _111.QueryPacketCommitmentsResponseAmino;
                    fromAminoMsg(object: _111.QueryPacketCommitmentsResponseAminoMsg): _111.QueryPacketCommitmentsResponse;
                    toAminoMsg(message: _111.QueryPacketCommitmentsResponse): _111.QueryPacketCommitmentsResponseAminoMsg;
                    fromProtoMsg(message: _111.QueryPacketCommitmentsResponseProtoMsg): _111.QueryPacketCommitmentsResponse;
                    toProto(message: _111.QueryPacketCommitmentsResponse): Uint8Array;
                    toProtoMsg(message: _111.QueryPacketCommitmentsResponse): _111.QueryPacketCommitmentsResponseProtoMsg;
                };
                QueryPacketReceiptRequest: {
                    typeUrl: string;
                    encode(message: _111.QueryPacketReceiptRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _111.QueryPacketReceiptRequest;
                    fromJSON(object: any): _111.QueryPacketReceiptRequest;
                    toJSON(message: _111.QueryPacketReceiptRequest): unknown;
                    fromPartial(object: Partial<_111.QueryPacketReceiptRequest>): _111.QueryPacketReceiptRequest;
                    fromSDK(object: _111.QueryPacketReceiptRequestSDKType): _111.QueryPacketReceiptRequest;
                    toSDK(message: _111.QueryPacketReceiptRequest): _111.QueryPacketReceiptRequestSDKType;
                    fromAmino(object: _111.QueryPacketReceiptRequestAmino): _111.QueryPacketReceiptRequest;
                    toAmino(message: _111.QueryPacketReceiptRequest): _111.QueryPacketReceiptRequestAmino;
                    fromAminoMsg(object: _111.QueryPacketReceiptRequestAminoMsg): _111.QueryPacketReceiptRequest;
                    toAminoMsg(message: _111.QueryPacketReceiptRequest): _111.QueryPacketReceiptRequestAminoMsg;
                    fromProtoMsg(message: _111.QueryPacketReceiptRequestProtoMsg): _111.QueryPacketReceiptRequest;
                    toProto(message: _111.QueryPacketReceiptRequest): Uint8Array;
                    toProtoMsg(message: _111.QueryPacketReceiptRequest): _111.QueryPacketReceiptRequestProtoMsg;
                };
                QueryPacketReceiptResponse: {
                    typeUrl: string;
                    encode(message: _111.QueryPacketReceiptResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _111.QueryPacketReceiptResponse;
                    fromJSON(object: any): _111.QueryPacketReceiptResponse;
                    toJSON(message: _111.QueryPacketReceiptResponse): unknown;
                    fromPartial(object: Partial<_111.QueryPacketReceiptResponse>): _111.QueryPacketReceiptResponse;
                    fromSDK(object: _111.QueryPacketReceiptResponseSDKType): _111.QueryPacketReceiptResponse;
                    toSDK(message: _111.QueryPacketReceiptResponse): _111.QueryPacketReceiptResponseSDKType;
                    fromAmino(object: _111.QueryPacketReceiptResponseAmino): _111.QueryPacketReceiptResponse;
                    toAmino(message: _111.QueryPacketReceiptResponse): _111.QueryPacketReceiptResponseAmino;
                    fromAminoMsg(object: _111.QueryPacketReceiptResponseAminoMsg): _111.QueryPacketReceiptResponse;
                    toAminoMsg(message: _111.QueryPacketReceiptResponse): _111.QueryPacketReceiptResponseAminoMsg;
                    fromProtoMsg(message: _111.QueryPacketReceiptResponseProtoMsg): _111.QueryPacketReceiptResponse;
                    toProto(message: _111.QueryPacketReceiptResponse): Uint8Array;
                    toProtoMsg(message: _111.QueryPacketReceiptResponse): _111.QueryPacketReceiptResponseProtoMsg;
                };
                QueryPacketAcknowledgementRequest: {
                    typeUrl: string;
                    encode(message: _111.QueryPacketAcknowledgementRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _111.QueryPacketAcknowledgementRequest;
                    fromJSON(object: any): _111.QueryPacketAcknowledgementRequest;
                    toJSON(message: _111.QueryPacketAcknowledgementRequest): unknown;
                    fromPartial(object: Partial<_111.QueryPacketAcknowledgementRequest>): _111.QueryPacketAcknowledgementRequest;
                    fromSDK(object: _111.QueryPacketAcknowledgementRequestSDKType): _111.QueryPacketAcknowledgementRequest;
                    toSDK(message: _111.QueryPacketAcknowledgementRequest): _111.QueryPacketAcknowledgementRequestSDKType;
                    fromAmino(object: _111.QueryPacketAcknowledgementRequestAmino): _111.QueryPacketAcknowledgementRequest;
                    toAmino(message: _111.QueryPacketAcknowledgementRequest): _111.QueryPacketAcknowledgementRequestAmino;
                    fromAminoMsg(object: _111.QueryPacketAcknowledgementRequestAminoMsg): _111.QueryPacketAcknowledgementRequest;
                    toAminoMsg(message: _111.QueryPacketAcknowledgementRequest): _111.QueryPacketAcknowledgementRequestAminoMsg;
                    fromProtoMsg(message: _111.QueryPacketAcknowledgementRequestProtoMsg): _111.QueryPacketAcknowledgementRequest;
                    toProto(message: _111.QueryPacketAcknowledgementRequest): Uint8Array;
                    toProtoMsg(message: _111.QueryPacketAcknowledgementRequest): _111.QueryPacketAcknowledgementRequestProtoMsg;
                };
                QueryPacketAcknowledgementResponse: {
                    typeUrl: string;
                    encode(message: _111.QueryPacketAcknowledgementResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _111.QueryPacketAcknowledgementResponse;
                    fromJSON(object: any): _111.QueryPacketAcknowledgementResponse;
                    toJSON(message: _111.QueryPacketAcknowledgementResponse): unknown;
                    fromPartial(object: Partial<_111.QueryPacketAcknowledgementResponse>): _111.QueryPacketAcknowledgementResponse;
                    fromSDK(object: _111.QueryPacketAcknowledgementResponseSDKType): _111.QueryPacketAcknowledgementResponse;
                    toSDK(message: _111.QueryPacketAcknowledgementResponse): _111.QueryPacketAcknowledgementResponseSDKType;
                    fromAmino(object: _111.QueryPacketAcknowledgementResponseAmino): _111.QueryPacketAcknowledgementResponse;
                    toAmino(message: _111.QueryPacketAcknowledgementResponse): _111.QueryPacketAcknowledgementResponseAmino;
                    fromAminoMsg(object: _111.QueryPacketAcknowledgementResponseAminoMsg): _111.QueryPacketAcknowledgementResponse;
                    toAminoMsg(message: _111.QueryPacketAcknowledgementResponse): _111.QueryPacketAcknowledgementResponseAminoMsg;
                    fromProtoMsg(message: _111.QueryPacketAcknowledgementResponseProtoMsg): _111.QueryPacketAcknowledgementResponse;
                    toProto(message: _111.QueryPacketAcknowledgementResponse): Uint8Array;
                    toProtoMsg(message: _111.QueryPacketAcknowledgementResponse): _111.QueryPacketAcknowledgementResponseProtoMsg;
                };
                QueryPacketAcknowledgementsRequest: {
                    typeUrl: string;
                    encode(message: _111.QueryPacketAcknowledgementsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _111.QueryPacketAcknowledgementsRequest;
                    fromJSON(object: any): _111.QueryPacketAcknowledgementsRequest;
                    toJSON(message: _111.QueryPacketAcknowledgementsRequest): unknown;
                    fromPartial(object: Partial<_111.QueryPacketAcknowledgementsRequest>): _111.QueryPacketAcknowledgementsRequest;
                    fromSDK(object: _111.QueryPacketAcknowledgementsRequestSDKType): _111.QueryPacketAcknowledgementsRequest;
                    toSDK(message: _111.QueryPacketAcknowledgementsRequest): _111.QueryPacketAcknowledgementsRequestSDKType;
                    fromAmino(object: _111.QueryPacketAcknowledgementsRequestAmino): _111.QueryPacketAcknowledgementsRequest;
                    toAmino(message: _111.QueryPacketAcknowledgementsRequest): _111.QueryPacketAcknowledgementsRequestAmino;
                    fromAminoMsg(object: _111.QueryPacketAcknowledgementsRequestAminoMsg): _111.QueryPacketAcknowledgementsRequest;
                    toAminoMsg(message: _111.QueryPacketAcknowledgementsRequest): _111.QueryPacketAcknowledgementsRequestAminoMsg;
                    fromProtoMsg(message: _111.QueryPacketAcknowledgementsRequestProtoMsg): _111.QueryPacketAcknowledgementsRequest;
                    toProto(message: _111.QueryPacketAcknowledgementsRequest): Uint8Array;
                    toProtoMsg(message: _111.QueryPacketAcknowledgementsRequest): _111.QueryPacketAcknowledgementsRequestProtoMsg;
                };
                QueryPacketAcknowledgementsResponse: {
                    typeUrl: string;
                    encode(message: _111.QueryPacketAcknowledgementsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _111.QueryPacketAcknowledgementsResponse;
                    fromJSON(object: any): _111.QueryPacketAcknowledgementsResponse;
                    toJSON(message: _111.QueryPacketAcknowledgementsResponse): unknown;
                    fromPartial(object: Partial<_111.QueryPacketAcknowledgementsResponse>): _111.QueryPacketAcknowledgementsResponse;
                    fromSDK(object: _111.QueryPacketAcknowledgementsResponseSDKType): _111.QueryPacketAcknowledgementsResponse;
                    toSDK(message: _111.QueryPacketAcknowledgementsResponse): _111.QueryPacketAcknowledgementsResponseSDKType;
                    fromAmino(object: _111.QueryPacketAcknowledgementsResponseAmino): _111.QueryPacketAcknowledgementsResponse;
                    toAmino(message: _111.QueryPacketAcknowledgementsResponse): _111.QueryPacketAcknowledgementsResponseAmino;
                    fromAminoMsg(object: _111.QueryPacketAcknowledgementsResponseAminoMsg): _111.QueryPacketAcknowledgementsResponse;
                    toAminoMsg(message: _111.QueryPacketAcknowledgementsResponse): _111.QueryPacketAcknowledgementsResponseAminoMsg;
                    fromProtoMsg(message: _111.QueryPacketAcknowledgementsResponseProtoMsg): _111.QueryPacketAcknowledgementsResponse;
                    toProto(message: _111.QueryPacketAcknowledgementsResponse): Uint8Array;
                    toProtoMsg(message: _111.QueryPacketAcknowledgementsResponse): _111.QueryPacketAcknowledgementsResponseProtoMsg;
                };
                QueryUnreceivedPacketsRequest: {
                    typeUrl: string;
                    encode(message: _111.QueryUnreceivedPacketsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _111.QueryUnreceivedPacketsRequest;
                    fromJSON(object: any): _111.QueryUnreceivedPacketsRequest;
                    toJSON(message: _111.QueryUnreceivedPacketsRequest): unknown;
                    fromPartial(object: Partial<_111.QueryUnreceivedPacketsRequest>): _111.QueryUnreceivedPacketsRequest;
                    fromSDK(object: _111.QueryUnreceivedPacketsRequestSDKType): _111.QueryUnreceivedPacketsRequest;
                    toSDK(message: _111.QueryUnreceivedPacketsRequest): _111.QueryUnreceivedPacketsRequestSDKType;
                    fromAmino(object: _111.QueryUnreceivedPacketsRequestAmino): _111.QueryUnreceivedPacketsRequest;
                    toAmino(message: _111.QueryUnreceivedPacketsRequest): _111.QueryUnreceivedPacketsRequestAmino;
                    fromAminoMsg(object: _111.QueryUnreceivedPacketsRequestAminoMsg): _111.QueryUnreceivedPacketsRequest;
                    toAminoMsg(message: _111.QueryUnreceivedPacketsRequest): _111.QueryUnreceivedPacketsRequestAminoMsg;
                    fromProtoMsg(message: _111.QueryUnreceivedPacketsRequestProtoMsg): _111.QueryUnreceivedPacketsRequest;
                    toProto(message: _111.QueryUnreceivedPacketsRequest): Uint8Array;
                    toProtoMsg(message: _111.QueryUnreceivedPacketsRequest): _111.QueryUnreceivedPacketsRequestProtoMsg;
                };
                QueryUnreceivedPacketsResponse: {
                    typeUrl: string;
                    encode(message: _111.QueryUnreceivedPacketsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _111.QueryUnreceivedPacketsResponse;
                    fromJSON(object: any): _111.QueryUnreceivedPacketsResponse;
                    toJSON(message: _111.QueryUnreceivedPacketsResponse): unknown;
                    fromPartial(object: Partial<_111.QueryUnreceivedPacketsResponse>): _111.QueryUnreceivedPacketsResponse;
                    fromSDK(object: _111.QueryUnreceivedPacketsResponseSDKType): _111.QueryUnreceivedPacketsResponse;
                    toSDK(message: _111.QueryUnreceivedPacketsResponse): _111.QueryUnreceivedPacketsResponseSDKType;
                    fromAmino(object: _111.QueryUnreceivedPacketsResponseAmino): _111.QueryUnreceivedPacketsResponse;
                    toAmino(message: _111.QueryUnreceivedPacketsResponse): _111.QueryUnreceivedPacketsResponseAmino;
                    fromAminoMsg(object: _111.QueryUnreceivedPacketsResponseAminoMsg): _111.QueryUnreceivedPacketsResponse;
                    toAminoMsg(message: _111.QueryUnreceivedPacketsResponse): _111.QueryUnreceivedPacketsResponseAminoMsg;
                    fromProtoMsg(message: _111.QueryUnreceivedPacketsResponseProtoMsg): _111.QueryUnreceivedPacketsResponse;
                    toProto(message: _111.QueryUnreceivedPacketsResponse): Uint8Array;
                    toProtoMsg(message: _111.QueryUnreceivedPacketsResponse): _111.QueryUnreceivedPacketsResponseProtoMsg;
                };
                QueryUnreceivedAcksRequest: {
                    typeUrl: string;
                    encode(message: _111.QueryUnreceivedAcksRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _111.QueryUnreceivedAcksRequest;
                    fromJSON(object: any): _111.QueryUnreceivedAcksRequest;
                    toJSON(message: _111.QueryUnreceivedAcksRequest): unknown;
                    fromPartial(object: Partial<_111.QueryUnreceivedAcksRequest>): _111.QueryUnreceivedAcksRequest;
                    fromSDK(object: _111.QueryUnreceivedAcksRequestSDKType): _111.QueryUnreceivedAcksRequest;
                    toSDK(message: _111.QueryUnreceivedAcksRequest): _111.QueryUnreceivedAcksRequestSDKType;
                    fromAmino(object: _111.QueryUnreceivedAcksRequestAmino): _111.QueryUnreceivedAcksRequest;
                    toAmino(message: _111.QueryUnreceivedAcksRequest): _111.QueryUnreceivedAcksRequestAmino;
                    fromAminoMsg(object: _111.QueryUnreceivedAcksRequestAminoMsg): _111.QueryUnreceivedAcksRequest;
                    toAminoMsg(message: _111.QueryUnreceivedAcksRequest): _111.QueryUnreceivedAcksRequestAminoMsg;
                    fromProtoMsg(message: _111.QueryUnreceivedAcksRequestProtoMsg): _111.QueryUnreceivedAcksRequest;
                    toProto(message: _111.QueryUnreceivedAcksRequest): Uint8Array;
                    toProtoMsg(message: _111.QueryUnreceivedAcksRequest): _111.QueryUnreceivedAcksRequestProtoMsg;
                };
                QueryUnreceivedAcksResponse: {
                    typeUrl: string;
                    encode(message: _111.QueryUnreceivedAcksResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _111.QueryUnreceivedAcksResponse;
                    fromJSON(object: any): _111.QueryUnreceivedAcksResponse;
                    toJSON(message: _111.QueryUnreceivedAcksResponse): unknown;
                    fromPartial(object: Partial<_111.QueryUnreceivedAcksResponse>): _111.QueryUnreceivedAcksResponse;
                    fromSDK(object: _111.QueryUnreceivedAcksResponseSDKType): _111.QueryUnreceivedAcksResponse;
                    toSDK(message: _111.QueryUnreceivedAcksResponse): _111.QueryUnreceivedAcksResponseSDKType;
                    fromAmino(object: _111.QueryUnreceivedAcksResponseAmino): _111.QueryUnreceivedAcksResponse;
                    toAmino(message: _111.QueryUnreceivedAcksResponse): _111.QueryUnreceivedAcksResponseAmino;
                    fromAminoMsg(object: _111.QueryUnreceivedAcksResponseAminoMsg): _111.QueryUnreceivedAcksResponse;
                    toAminoMsg(message: _111.QueryUnreceivedAcksResponse): _111.QueryUnreceivedAcksResponseAminoMsg;
                    fromProtoMsg(message: _111.QueryUnreceivedAcksResponseProtoMsg): _111.QueryUnreceivedAcksResponse;
                    toProto(message: _111.QueryUnreceivedAcksResponse): Uint8Array;
                    toProtoMsg(message: _111.QueryUnreceivedAcksResponse): _111.QueryUnreceivedAcksResponseProtoMsg;
                };
                QueryNextSequenceReceiveRequest: {
                    typeUrl: string;
                    encode(message: _111.QueryNextSequenceReceiveRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _111.QueryNextSequenceReceiveRequest;
                    fromJSON(object: any): _111.QueryNextSequenceReceiveRequest;
                    toJSON(message: _111.QueryNextSequenceReceiveRequest): unknown;
                    fromPartial(object: Partial<_111.QueryNextSequenceReceiveRequest>): _111.QueryNextSequenceReceiveRequest;
                    fromSDK(object: _111.QueryNextSequenceReceiveRequestSDKType): _111.QueryNextSequenceReceiveRequest;
                    toSDK(message: _111.QueryNextSequenceReceiveRequest): _111.QueryNextSequenceReceiveRequestSDKType;
                    fromAmino(object: _111.QueryNextSequenceReceiveRequestAmino): _111.QueryNextSequenceReceiveRequest;
                    toAmino(message: _111.QueryNextSequenceReceiveRequest): _111.QueryNextSequenceReceiveRequestAmino;
                    fromAminoMsg(object: _111.QueryNextSequenceReceiveRequestAminoMsg): _111.QueryNextSequenceReceiveRequest;
                    toAminoMsg(message: _111.QueryNextSequenceReceiveRequest): _111.QueryNextSequenceReceiveRequestAminoMsg;
                    fromProtoMsg(message: _111.QueryNextSequenceReceiveRequestProtoMsg): _111.QueryNextSequenceReceiveRequest;
                    toProto(message: _111.QueryNextSequenceReceiveRequest): Uint8Array;
                    toProtoMsg(message: _111.QueryNextSequenceReceiveRequest): _111.QueryNextSequenceReceiveRequestProtoMsg;
                };
                QueryNextSequenceReceiveResponse: {
                    typeUrl: string;
                    encode(message: _111.QueryNextSequenceReceiveResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _111.QueryNextSequenceReceiveResponse;
                    fromJSON(object: any): _111.QueryNextSequenceReceiveResponse;
                    toJSON(message: _111.QueryNextSequenceReceiveResponse): unknown;
                    fromPartial(object: Partial<_111.QueryNextSequenceReceiveResponse>): _111.QueryNextSequenceReceiveResponse;
                    fromSDK(object: _111.QueryNextSequenceReceiveResponseSDKType): _111.QueryNextSequenceReceiveResponse;
                    toSDK(message: _111.QueryNextSequenceReceiveResponse): _111.QueryNextSequenceReceiveResponseSDKType;
                    fromAmino(object: _111.QueryNextSequenceReceiveResponseAmino): _111.QueryNextSequenceReceiveResponse;
                    toAmino(message: _111.QueryNextSequenceReceiveResponse): _111.QueryNextSequenceReceiveResponseAmino;
                    fromAminoMsg(object: _111.QueryNextSequenceReceiveResponseAminoMsg): _111.QueryNextSequenceReceiveResponse;
                    toAminoMsg(message: _111.QueryNextSequenceReceiveResponse): _111.QueryNextSequenceReceiveResponseAminoMsg;
                    fromProtoMsg(message: _111.QueryNextSequenceReceiveResponseProtoMsg): _111.QueryNextSequenceReceiveResponse;
                    toProto(message: _111.QueryNextSequenceReceiveResponse): Uint8Array;
                    toProtoMsg(message: _111.QueryNextSequenceReceiveResponse): _111.QueryNextSequenceReceiveResponseProtoMsg;
                };
                QueryNextSequenceSendRequest: {
                    typeUrl: string;
                    encode(message: _111.QueryNextSequenceSendRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _111.QueryNextSequenceSendRequest;
                    fromJSON(object: any): _111.QueryNextSequenceSendRequest;
                    toJSON(message: _111.QueryNextSequenceSendRequest): unknown;
                    fromPartial(object: Partial<_111.QueryNextSequenceSendRequest>): _111.QueryNextSequenceSendRequest;
                    fromSDK(object: _111.QueryNextSequenceSendRequestSDKType): _111.QueryNextSequenceSendRequest;
                    toSDK(message: _111.QueryNextSequenceSendRequest): _111.QueryNextSequenceSendRequestSDKType;
                    fromAmino(object: _111.QueryNextSequenceSendRequestAmino): _111.QueryNextSequenceSendRequest;
                    toAmino(message: _111.QueryNextSequenceSendRequest): _111.QueryNextSequenceSendRequestAmino;
                    fromAminoMsg(object: _111.QueryNextSequenceSendRequestAminoMsg): _111.QueryNextSequenceSendRequest;
                    toAminoMsg(message: _111.QueryNextSequenceSendRequest): _111.QueryNextSequenceSendRequestAminoMsg;
                    fromProtoMsg(message: _111.QueryNextSequenceSendRequestProtoMsg): _111.QueryNextSequenceSendRequest;
                    toProto(message: _111.QueryNextSequenceSendRequest): Uint8Array;
                    toProtoMsg(message: _111.QueryNextSequenceSendRequest): _111.QueryNextSequenceSendRequestProtoMsg;
                };
                QueryNextSequenceSendResponse: {
                    typeUrl: string;
                    encode(message: _111.QueryNextSequenceSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _111.QueryNextSequenceSendResponse;
                    fromJSON(object: any): _111.QueryNextSequenceSendResponse;
                    toJSON(message: _111.QueryNextSequenceSendResponse): unknown;
                    fromPartial(object: Partial<_111.QueryNextSequenceSendResponse>): _111.QueryNextSequenceSendResponse;
                    fromSDK(object: _111.QueryNextSequenceSendResponseSDKType): _111.QueryNextSequenceSendResponse;
                    toSDK(message: _111.QueryNextSequenceSendResponse): _111.QueryNextSequenceSendResponseSDKType;
                    fromAmino(object: _111.QueryNextSequenceSendResponseAmino): _111.QueryNextSequenceSendResponse;
                    toAmino(message: _111.QueryNextSequenceSendResponse): _111.QueryNextSequenceSendResponseAmino;
                    fromAminoMsg(object: _111.QueryNextSequenceSendResponseAminoMsg): _111.QueryNextSequenceSendResponse;
                    toAminoMsg(message: _111.QueryNextSequenceSendResponse): _111.QueryNextSequenceSendResponseAminoMsg;
                    fromProtoMsg(message: _111.QueryNextSequenceSendResponseProtoMsg): _111.QueryNextSequenceSendResponse;
                    toProto(message: _111.QueryNextSequenceSendResponse): Uint8Array;
                    toProtoMsg(message: _111.QueryNextSequenceSendResponse): _111.QueryNextSequenceSendResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _110.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _110.GenesisState;
                    fromJSON(object: any): _110.GenesisState;
                    toJSON(message: _110.GenesisState): unknown;
                    fromPartial(object: Partial<_110.GenesisState>): _110.GenesisState;
                    fromSDK(object: _110.GenesisStateSDKType): _110.GenesisState;
                    toSDK(message: _110.GenesisState): _110.GenesisStateSDKType;
                    fromAmino(object: _110.GenesisStateAmino): _110.GenesisState;
                    toAmino(message: _110.GenesisState): _110.GenesisStateAmino;
                    fromAminoMsg(object: _110.GenesisStateAminoMsg): _110.GenesisState;
                    toAminoMsg(message: _110.GenesisState): _110.GenesisStateAminoMsg;
                    fromProtoMsg(message: _110.GenesisStateProtoMsg): _110.GenesisState;
                    toProto(message: _110.GenesisState): Uint8Array;
                    toProtoMsg(message: _110.GenesisState): _110.GenesisStateProtoMsg;
                };
                PacketSequence: {
                    typeUrl: string;
                    encode(message: _110.PacketSequence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _110.PacketSequence;
                    fromJSON(object: any): _110.PacketSequence;
                    toJSON(message: _110.PacketSequence): unknown;
                    fromPartial(object: Partial<_110.PacketSequence>): _110.PacketSequence;
                    fromSDK(object: _110.PacketSequenceSDKType): _110.PacketSequence;
                    toSDK(message: _110.PacketSequence): _110.PacketSequenceSDKType;
                    fromAmino(object: _110.PacketSequenceAmino): _110.PacketSequence;
                    toAmino(message: _110.PacketSequence): _110.PacketSequenceAmino;
                    fromAminoMsg(object: _110.PacketSequenceAminoMsg): _110.PacketSequence;
                    toAminoMsg(message: _110.PacketSequence): _110.PacketSequenceAminoMsg;
                    fromProtoMsg(message: _110.PacketSequenceProtoMsg): _110.PacketSequence;
                    toProto(message: _110.PacketSequence): Uint8Array;
                    toProtoMsg(message: _110.PacketSequence): _110.PacketSequenceProtoMsg;
                };
                stateFromJSON(object: any): _109.State;
                stateToJSON(object: _109.State): string;
                orderFromJSON(object: any): _109.Order;
                orderToJSON(object: _109.Order): string;
                State: typeof _109.State;
                StateSDKType: typeof _109.State;
                StateAmino: typeof _109.State;
                Order: typeof _109.Order;
                OrderSDKType: typeof _109.Order;
                OrderAmino: typeof _109.Order;
                Channel: {
                    typeUrl: string;
                    encode(message: _109.Channel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _109.Channel;
                    fromJSON(object: any): _109.Channel;
                    toJSON(message: _109.Channel): unknown;
                    fromPartial(object: Partial<_109.Channel>): _109.Channel;
                    fromSDK(object: _109.ChannelSDKType): _109.Channel;
                    toSDK(message: _109.Channel): _109.ChannelSDKType;
                    fromAmino(object: _109.ChannelAmino): _109.Channel;
                    toAmino(message: _109.Channel): _109.ChannelAmino;
                    fromAminoMsg(object: _109.ChannelAminoMsg): _109.Channel;
                    toAminoMsg(message: _109.Channel): _109.ChannelAminoMsg;
                    fromProtoMsg(message: _109.ChannelProtoMsg): _109.Channel;
                    toProto(message: _109.Channel): Uint8Array;
                    toProtoMsg(message: _109.Channel): _109.ChannelProtoMsg;
                };
                IdentifiedChannel: {
                    typeUrl: string;
                    encode(message: _109.IdentifiedChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _109.IdentifiedChannel;
                    fromJSON(object: any): _109.IdentifiedChannel;
                    toJSON(message: _109.IdentifiedChannel): unknown;
                    fromPartial(object: Partial<_109.IdentifiedChannel>): _109.IdentifiedChannel;
                    fromSDK(object: _109.IdentifiedChannelSDKType): _109.IdentifiedChannel;
                    toSDK(message: _109.IdentifiedChannel): _109.IdentifiedChannelSDKType;
                    fromAmino(object: _109.IdentifiedChannelAmino): _109.IdentifiedChannel;
                    toAmino(message: _109.IdentifiedChannel): _109.IdentifiedChannelAmino;
                    fromAminoMsg(object: _109.IdentifiedChannelAminoMsg): _109.IdentifiedChannel;
                    toAminoMsg(message: _109.IdentifiedChannel): _109.IdentifiedChannelAminoMsg;
                    fromProtoMsg(message: _109.IdentifiedChannelProtoMsg): _109.IdentifiedChannel;
                    toProto(message: _109.IdentifiedChannel): Uint8Array;
                    toProtoMsg(message: _109.IdentifiedChannel): _109.IdentifiedChannelProtoMsg;
                };
                Counterparty: {
                    typeUrl: string;
                    encode(message: _109.Counterparty, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _109.Counterparty;
                    fromJSON(object: any): _109.Counterparty;
                    toJSON(message: _109.Counterparty): unknown;
                    fromPartial(object: Partial<_109.Counterparty>): _109.Counterparty;
                    fromSDK(object: _109.CounterpartySDKType): _109.Counterparty;
                    toSDK(message: _109.Counterparty): _109.CounterpartySDKType;
                    fromAmino(object: _109.CounterpartyAmino): _109.Counterparty;
                    toAmino(message: _109.Counterparty): _109.CounterpartyAmino;
                    fromAminoMsg(object: _109.CounterpartyAminoMsg): _109.Counterparty;
                    toAminoMsg(message: _109.Counterparty): _109.CounterpartyAminoMsg;
                    fromProtoMsg(message: _109.CounterpartyProtoMsg): _109.Counterparty;
                    toProto(message: _109.Counterparty): Uint8Array;
                    toProtoMsg(message: _109.Counterparty): _109.CounterpartyProtoMsg;
                };
                Packet: {
                    typeUrl: string;
                    encode(message: _109.Packet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _109.Packet;
                    fromJSON(object: any): _109.Packet;
                    toJSON(message: _109.Packet): unknown;
                    fromPartial(object: Partial<_109.Packet>): _109.Packet;
                    fromSDK(object: _109.PacketSDKType): _109.Packet;
                    toSDK(message: _109.Packet): _109.PacketSDKType;
                    fromAmino(object: _109.PacketAmino): _109.Packet;
                    toAmino(message: _109.Packet): _109.PacketAmino;
                    fromAminoMsg(object: _109.PacketAminoMsg): _109.Packet;
                    toAminoMsg(message: _109.Packet): _109.PacketAminoMsg;
                    fromProtoMsg(message: _109.PacketProtoMsg): _109.Packet;
                    toProto(message: _109.Packet): Uint8Array;
                    toProtoMsg(message: _109.Packet): _109.PacketProtoMsg;
                };
                PacketState: {
                    typeUrl: string;
                    encode(message: _109.PacketState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _109.PacketState;
                    fromJSON(object: any): _109.PacketState;
                    toJSON(message: _109.PacketState): unknown;
                    fromPartial(object: Partial<_109.PacketState>): _109.PacketState;
                    fromSDK(object: _109.PacketStateSDKType): _109.PacketState;
                    toSDK(message: _109.PacketState): _109.PacketStateSDKType;
                    fromAmino(object: _109.PacketStateAmino): _109.PacketState;
                    toAmino(message: _109.PacketState): _109.PacketStateAmino;
                    fromAminoMsg(object: _109.PacketStateAminoMsg): _109.PacketState;
                    toAminoMsg(message: _109.PacketState): _109.PacketStateAminoMsg;
                    fromProtoMsg(message: _109.PacketStateProtoMsg): _109.PacketState;
                    toProto(message: _109.PacketState): Uint8Array;
                    toProtoMsg(message: _109.PacketState): _109.PacketStateProtoMsg;
                };
                PacketId: {
                    typeUrl: string;
                    encode(message: _109.PacketId, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _109.PacketId;
                    fromJSON(object: any): _109.PacketId;
                    toJSON(message: _109.PacketId): unknown;
                    fromPartial(object: Partial<_109.PacketId>): _109.PacketId;
                    fromSDK(object: _109.PacketIdSDKType): _109.PacketId;
                    toSDK(message: _109.PacketId): _109.PacketIdSDKType;
                    fromAmino(object: _109.PacketIdAmino): _109.PacketId;
                    toAmino(message: _109.PacketId): _109.PacketIdAmino;
                    fromAminoMsg(object: _109.PacketIdAminoMsg): _109.PacketId;
                    toAminoMsg(message: _109.PacketId): _109.PacketIdAminoMsg;
                    fromProtoMsg(message: _109.PacketIdProtoMsg): _109.PacketId;
                    toProto(message: _109.PacketId): Uint8Array;
                    toProtoMsg(message: _109.PacketId): _109.PacketIdProtoMsg;
                };
                Acknowledgement: {
                    typeUrl: string;
                    encode(message: _109.Acknowledgement, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _109.Acknowledgement;
                    fromJSON(object: any): _109.Acknowledgement;
                    toJSON(message: _109.Acknowledgement): unknown;
                    fromPartial(object: Partial<_109.Acknowledgement>): _109.Acknowledgement;
                    fromSDK(object: _109.AcknowledgementSDKType): _109.Acknowledgement;
                    toSDK(message: _109.Acknowledgement): _109.AcknowledgementSDKType;
                    fromAmino(object: _109.AcknowledgementAmino): _109.Acknowledgement;
                    toAmino(message: _109.Acknowledgement): _109.AcknowledgementAmino;
                    fromAminoMsg(object: _109.AcknowledgementAminoMsg): _109.Acknowledgement;
                    toAminoMsg(message: _109.Acknowledgement): _109.AcknowledgementAminoMsg;
                    fromProtoMsg(message: _109.AcknowledgementProtoMsg): _109.Acknowledgement;
                    toProto(message: _109.Acknowledgement): Uint8Array;
                    toProtoMsg(message: _109.Acknowledgement): _109.AcknowledgementProtoMsg;
                };
                Timeout: {
                    typeUrl: string;
                    encode(message: _109.Timeout, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _109.Timeout;
                    fromJSON(object: any): _109.Timeout;
                    toJSON(message: _109.Timeout): unknown;
                    fromPartial(object: Partial<_109.Timeout>): _109.Timeout;
                    fromSDK(object: _109.TimeoutSDKType): _109.Timeout;
                    toSDK(message: _109.Timeout): _109.TimeoutSDKType;
                    fromAmino(object: _109.TimeoutAmino): _109.Timeout;
                    toAmino(message: _109.Timeout): _109.TimeoutAmino;
                    fromAminoMsg(object: _109.TimeoutAminoMsg): _109.Timeout;
                    toAminoMsg(message: _109.Timeout): _109.TimeoutAminoMsg;
                    fromProtoMsg(message: _109.TimeoutProtoMsg): _109.Timeout;
                    toProto(message: _109.Timeout): Uint8Array;
                    toProtoMsg(message: _109.Timeout): _109.TimeoutProtoMsg;
                };
            };
        }
        namespace client {
            const v1: {
                Msg: typeof _243.Msg;
                Query: typeof _237.Query;
                QueryClientImpl: typeof _237.QueryClientImpl;
                LCDQueryClient: typeof _231.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        createClient(value: _116.MsgCreateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateClient(value: _116.MsgUpdateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        upgradeClient(value: _116.MsgUpgradeClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        submitMisbehaviour(value: _116.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        recoverClient(value: _116.MsgRecoverClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        iBCSoftwareUpgrade(value: _116.MsgIBCSoftwareUpgrade): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateClientParams(value: _116.MsgUpdateParams): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        createClient(value: _116.MsgCreateClient): {
                            typeUrl: string;
                            value: _116.MsgCreateClient;
                        };
                        updateClient(value: _116.MsgUpdateClient): {
                            typeUrl: string;
                            value: _116.MsgUpdateClient;
                        };
                        upgradeClient(value: _116.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _116.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _116.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _116.MsgSubmitMisbehaviour;
                        };
                        recoverClient(value: _116.MsgRecoverClient): {
                            typeUrl: string;
                            value: _116.MsgRecoverClient;
                        };
                        iBCSoftwareUpgrade(value: _116.MsgIBCSoftwareUpgrade): {
                            typeUrl: string;
                            value: _116.MsgIBCSoftwareUpgrade;
                        };
                        updateClientParams(value: _116.MsgUpdateParams): {
                            typeUrl: string;
                            value: _116.MsgUpdateParams;
                        };
                    };
                    toJSON: {
                        createClient(value: _116.MsgCreateClient): {
                            typeUrl: string;
                            value: unknown;
                        };
                        updateClient(value: _116.MsgUpdateClient): {
                            typeUrl: string;
                            value: unknown;
                        };
                        upgradeClient(value: _116.MsgUpgradeClient): {
                            typeUrl: string;
                            value: unknown;
                        };
                        submitMisbehaviour(value: _116.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: unknown;
                        };
                        recoverClient(value: _116.MsgRecoverClient): {
                            typeUrl: string;
                            value: unknown;
                        };
                        iBCSoftwareUpgrade(value: _116.MsgIBCSoftwareUpgrade): {
                            typeUrl: string;
                            value: unknown;
                        };
                        updateClientParams(value: _116.MsgUpdateParams): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        createClient(value: any): {
                            typeUrl: string;
                            value: _116.MsgCreateClient;
                        };
                        updateClient(value: any): {
                            typeUrl: string;
                            value: _116.MsgUpdateClient;
                        };
                        upgradeClient(value: any): {
                            typeUrl: string;
                            value: _116.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: any): {
                            typeUrl: string;
                            value: _116.MsgSubmitMisbehaviour;
                        };
                        recoverClient(value: any): {
                            typeUrl: string;
                            value: _116.MsgRecoverClient;
                        };
                        iBCSoftwareUpgrade(value: any): {
                            typeUrl: string;
                            value: _116.MsgIBCSoftwareUpgrade;
                        };
                        updateClientParams(value: any): {
                            typeUrl: string;
                            value: _116.MsgUpdateParams;
                        };
                    };
                    fromPartial: {
                        createClient(value: _116.MsgCreateClient): {
                            typeUrl: string;
                            value: _116.MsgCreateClient;
                        };
                        updateClient(value: _116.MsgUpdateClient): {
                            typeUrl: string;
                            value: _116.MsgUpdateClient;
                        };
                        upgradeClient(value: _116.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _116.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _116.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _116.MsgSubmitMisbehaviour;
                        };
                        recoverClient(value: _116.MsgRecoverClient): {
                            typeUrl: string;
                            value: _116.MsgRecoverClient;
                        };
                        iBCSoftwareUpgrade(value: _116.MsgIBCSoftwareUpgrade): {
                            typeUrl: string;
                            value: _116.MsgIBCSoftwareUpgrade;
                        };
                        updateClientParams(value: _116.MsgUpdateParams): {
                            typeUrl: string;
                            value: _116.MsgUpdateParams;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.client.v1.MsgCreateClient": {
                        aminoType: string;
                        toAmino: (message: _116.MsgCreateClient) => _116.MsgCreateClientAmino;
                        fromAmino: (object: _116.MsgCreateClientAmino) => _116.MsgCreateClient;
                    };
                    "/ibc.core.client.v1.MsgUpdateClient": {
                        aminoType: string;
                        toAmino: (message: _116.MsgUpdateClient) => _116.MsgUpdateClientAmino;
                        fromAmino: (object: _116.MsgUpdateClientAmino) => _116.MsgUpdateClient;
                    };
                    "/ibc.core.client.v1.MsgUpgradeClient": {
                        aminoType: string;
                        toAmino: (message: _116.MsgUpgradeClient) => _116.MsgUpgradeClientAmino;
                        fromAmino: (object: _116.MsgUpgradeClientAmino) => _116.MsgUpgradeClient;
                    };
                    "/ibc.core.client.v1.MsgSubmitMisbehaviour": {
                        aminoType: string;
                        toAmino: (message: _116.MsgSubmitMisbehaviour) => _116.MsgSubmitMisbehaviourAmino;
                        fromAmino: (object: _116.MsgSubmitMisbehaviourAmino) => _116.MsgSubmitMisbehaviour;
                    };
                    "/ibc.core.client.v1.MsgRecoverClient": {
                        aminoType: string;
                        toAmino: (message: _116.MsgRecoverClient) => _116.MsgRecoverClientAmino;
                        fromAmino: (object: _116.MsgRecoverClientAmino) => _116.MsgRecoverClient;
                    };
                    "/ibc.core.client.v1.MsgIBCSoftwareUpgrade": {
                        aminoType: string;
                        toAmino: (message: _116.MsgIBCSoftwareUpgrade) => _116.MsgIBCSoftwareUpgradeAmino;
                        fromAmino: (object: _116.MsgIBCSoftwareUpgradeAmino) => _116.MsgIBCSoftwareUpgrade;
                    };
                    "/ibc.core.client.v1.MsgUpdateParams": {
                        aminoType: string;
                        toAmino: (message: _116.MsgUpdateParams) => _116.MsgUpdateParamsAmino;
                        fromAmino: (object: _116.MsgUpdateParamsAmino) => _116.MsgUpdateParams;
                    };
                };
                protobufPackage: "ibc.core.client.v1";
                MsgCreateClient: {
                    typeUrl: string;
                    encode(message: _116.MsgCreateClient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _116.MsgCreateClient;
                    fromJSON(object: any): _116.MsgCreateClient;
                    toJSON(message: _116.MsgCreateClient): unknown;
                    fromPartial(object: Partial<_116.MsgCreateClient>): _116.MsgCreateClient;
                    fromSDK(object: _116.MsgCreateClientSDKType): _116.MsgCreateClient;
                    toSDK(message: _116.MsgCreateClient): _116.MsgCreateClientSDKType;
                    fromAmino(object: _116.MsgCreateClientAmino): _116.MsgCreateClient;
                    toAmino(message: _116.MsgCreateClient): _116.MsgCreateClientAmino;
                    fromAminoMsg(object: _116.MsgCreateClientAminoMsg): _116.MsgCreateClient;
                    toAminoMsg(message: _116.MsgCreateClient): _116.MsgCreateClientAminoMsg;
                    fromProtoMsg(message: _116.MsgCreateClientProtoMsg): _116.MsgCreateClient;
                    toProto(message: _116.MsgCreateClient): Uint8Array;
                    toProtoMsg(message: _116.MsgCreateClient): _116.MsgCreateClientProtoMsg;
                };
                MsgCreateClientResponse: {
                    typeUrl: string;
                    encode(_: _116.MsgCreateClientResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _116.MsgCreateClientResponse;
                    fromJSON(_: any): _116.MsgCreateClientResponse;
                    toJSON(_: _116.MsgCreateClientResponse): unknown;
                    fromPartial(_: Partial<_116.MsgCreateClientResponse>): _116.MsgCreateClientResponse;
                    fromSDK(_: _116.MsgCreateClientResponseSDKType): _116.MsgCreateClientResponse;
                    toSDK(_: _116.MsgCreateClientResponse): _116.MsgCreateClientResponseSDKType;
                    fromAmino(_: _116.MsgCreateClientResponseAmino): _116.MsgCreateClientResponse;
                    toAmino(_: _116.MsgCreateClientResponse): _116.MsgCreateClientResponseAmino;
                    fromAminoMsg(object: _116.MsgCreateClientResponseAminoMsg): _116.MsgCreateClientResponse;
                    toAminoMsg(message: _116.MsgCreateClientResponse): _116.MsgCreateClientResponseAminoMsg;
                    fromProtoMsg(message: _116.MsgCreateClientResponseProtoMsg): _116.MsgCreateClientResponse;
                    toProto(message: _116.MsgCreateClientResponse): Uint8Array;
                    toProtoMsg(message: _116.MsgCreateClientResponse): _116.MsgCreateClientResponseProtoMsg;
                };
                MsgUpdateClient: {
                    typeUrl: string;
                    encode(message: _116.MsgUpdateClient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _116.MsgUpdateClient;
                    fromJSON(object: any): _116.MsgUpdateClient;
                    toJSON(message: _116.MsgUpdateClient): unknown;
                    fromPartial(object: Partial<_116.MsgUpdateClient>): _116.MsgUpdateClient;
                    fromSDK(object: _116.MsgUpdateClientSDKType): _116.MsgUpdateClient;
                    toSDK(message: _116.MsgUpdateClient): _116.MsgUpdateClientSDKType;
                    fromAmino(object: _116.MsgUpdateClientAmino): _116.MsgUpdateClient;
                    toAmino(message: _116.MsgUpdateClient): _116.MsgUpdateClientAmino;
                    fromAminoMsg(object: _116.MsgUpdateClientAminoMsg): _116.MsgUpdateClient;
                    toAminoMsg(message: _116.MsgUpdateClient): _116.MsgUpdateClientAminoMsg;
                    fromProtoMsg(message: _116.MsgUpdateClientProtoMsg): _116.MsgUpdateClient;
                    toProto(message: _116.MsgUpdateClient): Uint8Array;
                    toProtoMsg(message: _116.MsgUpdateClient): _116.MsgUpdateClientProtoMsg;
                };
                MsgUpdateClientResponse: {
                    typeUrl: string;
                    encode(_: _116.MsgUpdateClientResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _116.MsgUpdateClientResponse;
                    fromJSON(_: any): _116.MsgUpdateClientResponse;
                    toJSON(_: _116.MsgUpdateClientResponse): unknown;
                    fromPartial(_: Partial<_116.MsgUpdateClientResponse>): _116.MsgUpdateClientResponse;
                    fromSDK(_: _116.MsgUpdateClientResponseSDKType): _116.MsgUpdateClientResponse;
                    toSDK(_: _116.MsgUpdateClientResponse): _116.MsgUpdateClientResponseSDKType;
                    fromAmino(_: _116.MsgUpdateClientResponseAmino): _116.MsgUpdateClientResponse;
                    toAmino(_: _116.MsgUpdateClientResponse): _116.MsgUpdateClientResponseAmino;
                    fromAminoMsg(object: _116.MsgUpdateClientResponseAminoMsg): _116.MsgUpdateClientResponse;
                    toAminoMsg(message: _116.MsgUpdateClientResponse): _116.MsgUpdateClientResponseAminoMsg;
                    fromProtoMsg(message: _116.MsgUpdateClientResponseProtoMsg): _116.MsgUpdateClientResponse;
                    toProto(message: _116.MsgUpdateClientResponse): Uint8Array;
                    toProtoMsg(message: _116.MsgUpdateClientResponse): _116.MsgUpdateClientResponseProtoMsg;
                };
                MsgUpgradeClient: {
                    typeUrl: string;
                    encode(message: _116.MsgUpgradeClient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _116.MsgUpgradeClient;
                    fromJSON(object: any): _116.MsgUpgradeClient;
                    toJSON(message: _116.MsgUpgradeClient): unknown;
                    fromPartial(object: Partial<_116.MsgUpgradeClient>): _116.MsgUpgradeClient;
                    fromSDK(object: _116.MsgUpgradeClientSDKType): _116.MsgUpgradeClient;
                    toSDK(message: _116.MsgUpgradeClient): _116.MsgUpgradeClientSDKType;
                    fromAmino(object: _116.MsgUpgradeClientAmino): _116.MsgUpgradeClient;
                    toAmino(message: _116.MsgUpgradeClient): _116.MsgUpgradeClientAmino;
                    fromAminoMsg(object: _116.MsgUpgradeClientAminoMsg): _116.MsgUpgradeClient;
                    toAminoMsg(message: _116.MsgUpgradeClient): _116.MsgUpgradeClientAminoMsg;
                    fromProtoMsg(message: _116.MsgUpgradeClientProtoMsg): _116.MsgUpgradeClient;
                    toProto(message: _116.MsgUpgradeClient): Uint8Array;
                    toProtoMsg(message: _116.MsgUpgradeClient): _116.MsgUpgradeClientProtoMsg;
                };
                MsgUpgradeClientResponse: {
                    typeUrl: string;
                    encode(_: _116.MsgUpgradeClientResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _116.MsgUpgradeClientResponse;
                    fromJSON(_: any): _116.MsgUpgradeClientResponse;
                    toJSON(_: _116.MsgUpgradeClientResponse): unknown;
                    fromPartial(_: Partial<_116.MsgUpgradeClientResponse>): _116.MsgUpgradeClientResponse;
                    fromSDK(_: _116.MsgUpgradeClientResponseSDKType): _116.MsgUpgradeClientResponse;
                    toSDK(_: _116.MsgUpgradeClientResponse): _116.MsgUpgradeClientResponseSDKType;
                    fromAmino(_: _116.MsgUpgradeClientResponseAmino): _116.MsgUpgradeClientResponse;
                    toAmino(_: _116.MsgUpgradeClientResponse): _116.MsgUpgradeClientResponseAmino;
                    fromAminoMsg(object: _116.MsgUpgradeClientResponseAminoMsg): _116.MsgUpgradeClientResponse;
                    toAminoMsg(message: _116.MsgUpgradeClientResponse): _116.MsgUpgradeClientResponseAminoMsg;
                    fromProtoMsg(message: _116.MsgUpgradeClientResponseProtoMsg): _116.MsgUpgradeClientResponse;
                    toProto(message: _116.MsgUpgradeClientResponse): Uint8Array;
                    toProtoMsg(message: _116.MsgUpgradeClientResponse): _116.MsgUpgradeClientResponseProtoMsg;
                };
                MsgSubmitMisbehaviour: {
                    typeUrl: string;
                    encode(message: _116.MsgSubmitMisbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _116.MsgSubmitMisbehaviour;
                    fromJSON(object: any): _116.MsgSubmitMisbehaviour;
                    toJSON(message: _116.MsgSubmitMisbehaviour): unknown;
                    fromPartial(object: Partial<_116.MsgSubmitMisbehaviour>): _116.MsgSubmitMisbehaviour;
                    fromSDK(object: _116.MsgSubmitMisbehaviourSDKType): _116.MsgSubmitMisbehaviour;
                    toSDK(message: _116.MsgSubmitMisbehaviour): _116.MsgSubmitMisbehaviourSDKType;
                    fromAmino(object: _116.MsgSubmitMisbehaviourAmino): _116.MsgSubmitMisbehaviour;
                    toAmino(message: _116.MsgSubmitMisbehaviour): _116.MsgSubmitMisbehaviourAmino;
                    fromAminoMsg(object: _116.MsgSubmitMisbehaviourAminoMsg): _116.MsgSubmitMisbehaviour;
                    toAminoMsg(message: _116.MsgSubmitMisbehaviour): _116.MsgSubmitMisbehaviourAminoMsg;
                    fromProtoMsg(message: _116.MsgSubmitMisbehaviourProtoMsg): _116.MsgSubmitMisbehaviour;
                    toProto(message: _116.MsgSubmitMisbehaviour): Uint8Array;
                    toProtoMsg(message: _116.MsgSubmitMisbehaviour): _116.MsgSubmitMisbehaviourProtoMsg;
                };
                MsgSubmitMisbehaviourResponse: {
                    typeUrl: string;
                    encode(_: _116.MsgSubmitMisbehaviourResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _116.MsgSubmitMisbehaviourResponse;
                    fromJSON(_: any): _116.MsgSubmitMisbehaviourResponse;
                    toJSON(_: _116.MsgSubmitMisbehaviourResponse): unknown;
                    fromPartial(_: Partial<_116.MsgSubmitMisbehaviourResponse>): _116.MsgSubmitMisbehaviourResponse;
                    fromSDK(_: _116.MsgSubmitMisbehaviourResponseSDKType): _116.MsgSubmitMisbehaviourResponse;
                    toSDK(_: _116.MsgSubmitMisbehaviourResponse): _116.MsgSubmitMisbehaviourResponseSDKType;
                    fromAmino(_: _116.MsgSubmitMisbehaviourResponseAmino): _116.MsgSubmitMisbehaviourResponse;
                    toAmino(_: _116.MsgSubmitMisbehaviourResponse): _116.MsgSubmitMisbehaviourResponseAmino;
                    fromAminoMsg(object: _116.MsgSubmitMisbehaviourResponseAminoMsg): _116.MsgSubmitMisbehaviourResponse;
                    toAminoMsg(message: _116.MsgSubmitMisbehaviourResponse): _116.MsgSubmitMisbehaviourResponseAminoMsg;
                    fromProtoMsg(message: _116.MsgSubmitMisbehaviourResponseProtoMsg): _116.MsgSubmitMisbehaviourResponse;
                    toProto(message: _116.MsgSubmitMisbehaviourResponse): Uint8Array;
                    toProtoMsg(message: _116.MsgSubmitMisbehaviourResponse): _116.MsgSubmitMisbehaviourResponseProtoMsg;
                };
                MsgRecoverClient: {
                    typeUrl: string;
                    encode(message: _116.MsgRecoverClient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _116.MsgRecoverClient;
                    fromJSON(object: any): _116.MsgRecoverClient;
                    toJSON(message: _116.MsgRecoverClient): unknown;
                    fromPartial(object: Partial<_116.MsgRecoverClient>): _116.MsgRecoverClient;
                    fromSDK(object: _116.MsgRecoverClientSDKType): _116.MsgRecoverClient;
                    toSDK(message: _116.MsgRecoverClient): _116.MsgRecoverClientSDKType;
                    fromAmino(object: _116.MsgRecoverClientAmino): _116.MsgRecoverClient;
                    toAmino(message: _116.MsgRecoverClient): _116.MsgRecoverClientAmino;
                    fromAminoMsg(object: _116.MsgRecoverClientAminoMsg): _116.MsgRecoverClient;
                    toAminoMsg(message: _116.MsgRecoverClient): _116.MsgRecoverClientAminoMsg;
                    fromProtoMsg(message: _116.MsgRecoverClientProtoMsg): _116.MsgRecoverClient;
                    toProto(message: _116.MsgRecoverClient): Uint8Array;
                    toProtoMsg(message: _116.MsgRecoverClient): _116.MsgRecoverClientProtoMsg;
                };
                MsgRecoverClientResponse: {
                    typeUrl: string;
                    encode(_: _116.MsgRecoverClientResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _116.MsgRecoverClientResponse;
                    fromJSON(_: any): _116.MsgRecoverClientResponse;
                    toJSON(_: _116.MsgRecoverClientResponse): unknown;
                    fromPartial(_: Partial<_116.MsgRecoverClientResponse>): _116.MsgRecoverClientResponse;
                    fromSDK(_: _116.MsgRecoverClientResponseSDKType): _116.MsgRecoverClientResponse;
                    toSDK(_: _116.MsgRecoverClientResponse): _116.MsgRecoverClientResponseSDKType;
                    fromAmino(_: _116.MsgRecoverClientResponseAmino): _116.MsgRecoverClientResponse;
                    toAmino(_: _116.MsgRecoverClientResponse): _116.MsgRecoverClientResponseAmino;
                    fromAminoMsg(object: _116.MsgRecoverClientResponseAminoMsg): _116.MsgRecoverClientResponse;
                    toAminoMsg(message: _116.MsgRecoverClientResponse): _116.MsgRecoverClientResponseAminoMsg;
                    fromProtoMsg(message: _116.MsgRecoverClientResponseProtoMsg): _116.MsgRecoverClientResponse;
                    toProto(message: _116.MsgRecoverClientResponse): Uint8Array;
                    toProtoMsg(message: _116.MsgRecoverClientResponse): _116.MsgRecoverClientResponseProtoMsg;
                };
                MsgIBCSoftwareUpgrade: {
                    typeUrl: string;
                    encode(message: _116.MsgIBCSoftwareUpgrade, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _116.MsgIBCSoftwareUpgrade;
                    fromJSON(object: any): _116.MsgIBCSoftwareUpgrade;
                    toJSON(message: _116.MsgIBCSoftwareUpgrade): unknown;
                    fromPartial(object: Partial<_116.MsgIBCSoftwareUpgrade>): _116.MsgIBCSoftwareUpgrade;
                    fromSDK(object: _116.MsgIBCSoftwareUpgradeSDKType): _116.MsgIBCSoftwareUpgrade;
                    toSDK(message: _116.MsgIBCSoftwareUpgrade): _116.MsgIBCSoftwareUpgradeSDKType;
                    fromAmino(object: _116.MsgIBCSoftwareUpgradeAmino): _116.MsgIBCSoftwareUpgrade;
                    toAmino(message: _116.MsgIBCSoftwareUpgrade): _116.MsgIBCSoftwareUpgradeAmino;
                    fromAminoMsg(object: _116.MsgIBCSoftwareUpgradeAminoMsg): _116.MsgIBCSoftwareUpgrade;
                    toAminoMsg(message: _116.MsgIBCSoftwareUpgrade): _116.MsgIBCSoftwareUpgradeAminoMsg;
                    fromProtoMsg(message: _116.MsgIBCSoftwareUpgradeProtoMsg): _116.MsgIBCSoftwareUpgrade;
                    toProto(message: _116.MsgIBCSoftwareUpgrade): Uint8Array;
                    toProtoMsg(message: _116.MsgIBCSoftwareUpgrade): _116.MsgIBCSoftwareUpgradeProtoMsg;
                };
                MsgIBCSoftwareUpgradeResponse: {
                    typeUrl: string;
                    encode(_: _116.MsgIBCSoftwareUpgradeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _116.MsgIBCSoftwareUpgradeResponse;
                    fromJSON(_: any): _116.MsgIBCSoftwareUpgradeResponse;
                    toJSON(_: _116.MsgIBCSoftwareUpgradeResponse): unknown;
                    fromPartial(_: Partial<_116.MsgIBCSoftwareUpgradeResponse>): _116.MsgIBCSoftwareUpgradeResponse;
                    fromSDK(_: _116.MsgIBCSoftwareUpgradeResponseSDKType): _116.MsgIBCSoftwareUpgradeResponse;
                    toSDK(_: _116.MsgIBCSoftwareUpgradeResponse): _116.MsgIBCSoftwareUpgradeResponseSDKType;
                    fromAmino(_: _116.MsgIBCSoftwareUpgradeResponseAmino): _116.MsgIBCSoftwareUpgradeResponse;
                    toAmino(_: _116.MsgIBCSoftwareUpgradeResponse): _116.MsgIBCSoftwareUpgradeResponseAmino;
                    fromAminoMsg(object: _116.MsgIBCSoftwareUpgradeResponseAminoMsg): _116.MsgIBCSoftwareUpgradeResponse;
                    toAminoMsg(message: _116.MsgIBCSoftwareUpgradeResponse): _116.MsgIBCSoftwareUpgradeResponseAminoMsg;
                    fromProtoMsg(message: _116.MsgIBCSoftwareUpgradeResponseProtoMsg): _116.MsgIBCSoftwareUpgradeResponse;
                    toProto(message: _116.MsgIBCSoftwareUpgradeResponse): Uint8Array;
                    toProtoMsg(message: _116.MsgIBCSoftwareUpgradeResponse): _116.MsgIBCSoftwareUpgradeResponseProtoMsg;
                };
                MsgUpdateParams: {
                    typeUrl: string;
                    encode(message: _116.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _116.MsgUpdateParams;
                    fromJSON(object: any): _116.MsgUpdateParams;
                    toJSON(message: _116.MsgUpdateParams): unknown;
                    fromPartial(object: Partial<_116.MsgUpdateParams>): _116.MsgUpdateParams;
                    fromSDK(object: _116.MsgUpdateParamsSDKType): _116.MsgUpdateParams;
                    toSDK(message: _116.MsgUpdateParams): _116.MsgUpdateParamsSDKType;
                    fromAmino(object: _116.MsgUpdateParamsAmino): _116.MsgUpdateParams;
                    toAmino(message: _116.MsgUpdateParams): _116.MsgUpdateParamsAmino;
                    fromAminoMsg(object: _116.MsgUpdateParamsAminoMsg): _116.MsgUpdateParams;
                    toAminoMsg(message: _116.MsgUpdateParams): _116.MsgUpdateParamsAminoMsg;
                    fromProtoMsg(message: _116.MsgUpdateParamsProtoMsg): _116.MsgUpdateParams;
                    toProto(message: _116.MsgUpdateParams): Uint8Array;
                    toProtoMsg(message: _116.MsgUpdateParams): _116.MsgUpdateParamsProtoMsg;
                };
                MsgUpdateParamsResponse: {
                    typeUrl: string;
                    encode(_: _116.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _116.MsgUpdateParamsResponse;
                    fromJSON(_: any): _116.MsgUpdateParamsResponse;
                    toJSON(_: _116.MsgUpdateParamsResponse): unknown;
                    fromPartial(_: Partial<_116.MsgUpdateParamsResponse>): _116.MsgUpdateParamsResponse;
                    fromSDK(_: _116.MsgUpdateParamsResponseSDKType): _116.MsgUpdateParamsResponse;
                    toSDK(_: _116.MsgUpdateParamsResponse): _116.MsgUpdateParamsResponseSDKType;
                    fromAmino(_: _116.MsgUpdateParamsResponseAmino): _116.MsgUpdateParamsResponse;
                    toAmino(_: _116.MsgUpdateParamsResponse): _116.MsgUpdateParamsResponseAmino;
                    fromAminoMsg(object: _116.MsgUpdateParamsResponseAminoMsg): _116.MsgUpdateParamsResponse;
                    toAminoMsg(message: _116.MsgUpdateParamsResponse): _116.MsgUpdateParamsResponseAminoMsg;
                    fromProtoMsg(message: _116.MsgUpdateParamsResponseProtoMsg): _116.MsgUpdateParamsResponse;
                    toProto(message: _116.MsgUpdateParamsResponse): Uint8Array;
                    toProtoMsg(message: _116.MsgUpdateParamsResponse): _116.MsgUpdateParamsResponseProtoMsg;
                };
                QueryClientStateRequest: {
                    typeUrl: string;
                    encode(message: _115.QueryClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _115.QueryClientStateRequest;
                    fromJSON(object: any): _115.QueryClientStateRequest;
                    toJSON(message: _115.QueryClientStateRequest): unknown;
                    fromPartial(object: Partial<_115.QueryClientStateRequest>): _115.QueryClientStateRequest;
                    fromSDK(object: _115.QueryClientStateRequestSDKType): _115.QueryClientStateRequest;
                    toSDK(message: _115.QueryClientStateRequest): _115.QueryClientStateRequestSDKType;
                    fromAmino(object: _115.QueryClientStateRequestAmino): _115.QueryClientStateRequest;
                    toAmino(message: _115.QueryClientStateRequest): _115.QueryClientStateRequestAmino;
                    fromAminoMsg(object: _115.QueryClientStateRequestAminoMsg): _115.QueryClientStateRequest;
                    toAminoMsg(message: _115.QueryClientStateRequest): _115.QueryClientStateRequestAminoMsg;
                    fromProtoMsg(message: _115.QueryClientStateRequestProtoMsg): _115.QueryClientStateRequest;
                    toProto(message: _115.QueryClientStateRequest): Uint8Array;
                    toProtoMsg(message: _115.QueryClientStateRequest): _115.QueryClientStateRequestProtoMsg;
                };
                QueryClientStateResponse: {
                    typeUrl: string;
                    encode(message: _115.QueryClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _115.QueryClientStateResponse;
                    fromJSON(object: any): _115.QueryClientStateResponse;
                    toJSON(message: _115.QueryClientStateResponse): unknown;
                    fromPartial(object: Partial<_115.QueryClientStateResponse>): _115.QueryClientStateResponse;
                    fromSDK(object: _115.QueryClientStateResponseSDKType): _115.QueryClientStateResponse;
                    toSDK(message: _115.QueryClientStateResponse): _115.QueryClientStateResponseSDKType;
                    fromAmino(object: _115.QueryClientStateResponseAmino): _115.QueryClientStateResponse;
                    toAmino(message: _115.QueryClientStateResponse): _115.QueryClientStateResponseAmino;
                    fromAminoMsg(object: _115.QueryClientStateResponseAminoMsg): _115.QueryClientStateResponse;
                    toAminoMsg(message: _115.QueryClientStateResponse): _115.QueryClientStateResponseAminoMsg;
                    fromProtoMsg(message: _115.QueryClientStateResponseProtoMsg): _115.QueryClientStateResponse;
                    toProto(message: _115.QueryClientStateResponse): Uint8Array;
                    toProtoMsg(message: _115.QueryClientStateResponse): _115.QueryClientStateResponseProtoMsg;
                };
                QueryClientStatesRequest: {
                    typeUrl: string;
                    encode(message: _115.QueryClientStatesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _115.QueryClientStatesRequest;
                    fromJSON(object: any): _115.QueryClientStatesRequest;
                    toJSON(message: _115.QueryClientStatesRequest): unknown;
                    fromPartial(object: Partial<_115.QueryClientStatesRequest>): _115.QueryClientStatesRequest;
                    fromSDK(object: _115.QueryClientStatesRequestSDKType): _115.QueryClientStatesRequest;
                    toSDK(message: _115.QueryClientStatesRequest): _115.QueryClientStatesRequestSDKType;
                    fromAmino(object: _115.QueryClientStatesRequestAmino): _115.QueryClientStatesRequest;
                    toAmino(message: _115.QueryClientStatesRequest): _115.QueryClientStatesRequestAmino;
                    fromAminoMsg(object: _115.QueryClientStatesRequestAminoMsg): _115.QueryClientStatesRequest;
                    toAminoMsg(message: _115.QueryClientStatesRequest): _115.QueryClientStatesRequestAminoMsg;
                    fromProtoMsg(message: _115.QueryClientStatesRequestProtoMsg): _115.QueryClientStatesRequest;
                    toProto(message: _115.QueryClientStatesRequest): Uint8Array;
                    toProtoMsg(message: _115.QueryClientStatesRequest): _115.QueryClientStatesRequestProtoMsg;
                };
                QueryClientStatesResponse: {
                    typeUrl: string;
                    encode(message: _115.QueryClientStatesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _115.QueryClientStatesResponse;
                    fromJSON(object: any): _115.QueryClientStatesResponse;
                    toJSON(message: _115.QueryClientStatesResponse): unknown;
                    fromPartial(object: Partial<_115.QueryClientStatesResponse>): _115.QueryClientStatesResponse;
                    fromSDK(object: _115.QueryClientStatesResponseSDKType): _115.QueryClientStatesResponse;
                    toSDK(message: _115.QueryClientStatesResponse): _115.QueryClientStatesResponseSDKType;
                    fromAmino(object: _115.QueryClientStatesResponseAmino): _115.QueryClientStatesResponse;
                    toAmino(message: _115.QueryClientStatesResponse): _115.QueryClientStatesResponseAmino;
                    fromAminoMsg(object: _115.QueryClientStatesResponseAminoMsg): _115.QueryClientStatesResponse;
                    toAminoMsg(message: _115.QueryClientStatesResponse): _115.QueryClientStatesResponseAminoMsg;
                    fromProtoMsg(message: _115.QueryClientStatesResponseProtoMsg): _115.QueryClientStatesResponse;
                    toProto(message: _115.QueryClientStatesResponse): Uint8Array;
                    toProtoMsg(message: _115.QueryClientStatesResponse): _115.QueryClientStatesResponseProtoMsg;
                };
                QueryConsensusStateRequest: {
                    typeUrl: string;
                    encode(message: _115.QueryConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _115.QueryConsensusStateRequest;
                    fromJSON(object: any): _115.QueryConsensusStateRequest;
                    toJSON(message: _115.QueryConsensusStateRequest): unknown;
                    fromPartial(object: Partial<_115.QueryConsensusStateRequest>): _115.QueryConsensusStateRequest;
                    fromSDK(object: _115.QueryConsensusStateRequestSDKType): _115.QueryConsensusStateRequest;
                    toSDK(message: _115.QueryConsensusStateRequest): _115.QueryConsensusStateRequestSDKType;
                    fromAmino(object: _115.QueryConsensusStateRequestAmino): _115.QueryConsensusStateRequest;
                    toAmino(message: _115.QueryConsensusStateRequest): _115.QueryConsensusStateRequestAmino;
                    fromAminoMsg(object: _115.QueryConsensusStateRequestAminoMsg): _115.QueryConsensusStateRequest;
                    toAminoMsg(message: _115.QueryConsensusStateRequest): _115.QueryConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _115.QueryConsensusStateRequestProtoMsg): _115.QueryConsensusStateRequest;
                    toProto(message: _115.QueryConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _115.QueryConsensusStateRequest): _115.QueryConsensusStateRequestProtoMsg;
                };
                QueryConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _115.QueryConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _115.QueryConsensusStateResponse;
                    fromJSON(object: any): _115.QueryConsensusStateResponse;
                    toJSON(message: _115.QueryConsensusStateResponse): unknown;
                    fromPartial(object: Partial<_115.QueryConsensusStateResponse>): _115.QueryConsensusStateResponse;
                    fromSDK(object: _115.QueryConsensusStateResponseSDKType): _115.QueryConsensusStateResponse;
                    toSDK(message: _115.QueryConsensusStateResponse): _115.QueryConsensusStateResponseSDKType;
                    fromAmino(object: _115.QueryConsensusStateResponseAmino): _115.QueryConsensusStateResponse;
                    toAmino(message: _115.QueryConsensusStateResponse): _115.QueryConsensusStateResponseAmino;
                    fromAminoMsg(object: _115.QueryConsensusStateResponseAminoMsg): _115.QueryConsensusStateResponse;
                    toAminoMsg(message: _115.QueryConsensusStateResponse): _115.QueryConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _115.QueryConsensusStateResponseProtoMsg): _115.QueryConsensusStateResponse;
                    toProto(message: _115.QueryConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _115.QueryConsensusStateResponse): _115.QueryConsensusStateResponseProtoMsg;
                };
                QueryConsensusStatesRequest: {
                    typeUrl: string;
                    encode(message: _115.QueryConsensusStatesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _115.QueryConsensusStatesRequest;
                    fromJSON(object: any): _115.QueryConsensusStatesRequest;
                    toJSON(message: _115.QueryConsensusStatesRequest): unknown;
                    fromPartial(object: Partial<_115.QueryConsensusStatesRequest>): _115.QueryConsensusStatesRequest;
                    fromSDK(object: _115.QueryConsensusStatesRequestSDKType): _115.QueryConsensusStatesRequest;
                    toSDK(message: _115.QueryConsensusStatesRequest): _115.QueryConsensusStatesRequestSDKType;
                    fromAmino(object: _115.QueryConsensusStatesRequestAmino): _115.QueryConsensusStatesRequest;
                    toAmino(message: _115.QueryConsensusStatesRequest): _115.QueryConsensusStatesRequestAmino;
                    fromAminoMsg(object: _115.QueryConsensusStatesRequestAminoMsg): _115.QueryConsensusStatesRequest;
                    toAminoMsg(message: _115.QueryConsensusStatesRequest): _115.QueryConsensusStatesRequestAminoMsg;
                    fromProtoMsg(message: _115.QueryConsensusStatesRequestProtoMsg): _115.QueryConsensusStatesRequest;
                    toProto(message: _115.QueryConsensusStatesRequest): Uint8Array;
                    toProtoMsg(message: _115.QueryConsensusStatesRequest): _115.QueryConsensusStatesRequestProtoMsg;
                };
                QueryConsensusStatesResponse: {
                    typeUrl: string;
                    encode(message: _115.QueryConsensusStatesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _115.QueryConsensusStatesResponse;
                    fromJSON(object: any): _115.QueryConsensusStatesResponse;
                    toJSON(message: _115.QueryConsensusStatesResponse): unknown;
                    fromPartial(object: Partial<_115.QueryConsensusStatesResponse>): _115.QueryConsensusStatesResponse;
                    fromSDK(object: _115.QueryConsensusStatesResponseSDKType): _115.QueryConsensusStatesResponse;
                    toSDK(message: _115.QueryConsensusStatesResponse): _115.QueryConsensusStatesResponseSDKType;
                    fromAmino(object: _115.QueryConsensusStatesResponseAmino): _115.QueryConsensusStatesResponse;
                    toAmino(message: _115.QueryConsensusStatesResponse): _115.QueryConsensusStatesResponseAmino;
                    fromAminoMsg(object: _115.QueryConsensusStatesResponseAminoMsg): _115.QueryConsensusStatesResponse;
                    toAminoMsg(message: _115.QueryConsensusStatesResponse): _115.QueryConsensusStatesResponseAminoMsg;
                    fromProtoMsg(message: _115.QueryConsensusStatesResponseProtoMsg): _115.QueryConsensusStatesResponse;
                    toProto(message: _115.QueryConsensusStatesResponse): Uint8Array;
                    toProtoMsg(message: _115.QueryConsensusStatesResponse): _115.QueryConsensusStatesResponseProtoMsg;
                };
                QueryConsensusStateHeightsRequest: {
                    typeUrl: string;
                    encode(message: _115.QueryConsensusStateHeightsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _115.QueryConsensusStateHeightsRequest;
                    fromJSON(object: any): _115.QueryConsensusStateHeightsRequest;
                    toJSON(message: _115.QueryConsensusStateHeightsRequest): unknown;
                    fromPartial(object: Partial<_115.QueryConsensusStateHeightsRequest>): _115.QueryConsensusStateHeightsRequest;
                    fromSDK(object: _115.QueryConsensusStateHeightsRequestSDKType): _115.QueryConsensusStateHeightsRequest;
                    toSDK(message: _115.QueryConsensusStateHeightsRequest): _115.QueryConsensusStateHeightsRequestSDKType;
                    fromAmino(object: _115.QueryConsensusStateHeightsRequestAmino): _115.QueryConsensusStateHeightsRequest;
                    toAmino(message: _115.QueryConsensusStateHeightsRequest): _115.QueryConsensusStateHeightsRequestAmino;
                    fromAminoMsg(object: _115.QueryConsensusStateHeightsRequestAminoMsg): _115.QueryConsensusStateHeightsRequest;
                    toAminoMsg(message: _115.QueryConsensusStateHeightsRequest): _115.QueryConsensusStateHeightsRequestAminoMsg;
                    fromProtoMsg(message: _115.QueryConsensusStateHeightsRequestProtoMsg): _115.QueryConsensusStateHeightsRequest;
                    toProto(message: _115.QueryConsensusStateHeightsRequest): Uint8Array;
                    toProtoMsg(message: _115.QueryConsensusStateHeightsRequest): _115.QueryConsensusStateHeightsRequestProtoMsg;
                };
                QueryConsensusStateHeightsResponse: {
                    typeUrl: string;
                    encode(message: _115.QueryConsensusStateHeightsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _115.QueryConsensusStateHeightsResponse;
                    fromJSON(object: any): _115.QueryConsensusStateHeightsResponse;
                    toJSON(message: _115.QueryConsensusStateHeightsResponse): unknown;
                    fromPartial(object: Partial<_115.QueryConsensusStateHeightsResponse>): _115.QueryConsensusStateHeightsResponse;
                    fromSDK(object: _115.QueryConsensusStateHeightsResponseSDKType): _115.QueryConsensusStateHeightsResponse;
                    toSDK(message: _115.QueryConsensusStateHeightsResponse): _115.QueryConsensusStateHeightsResponseSDKType;
                    fromAmino(object: _115.QueryConsensusStateHeightsResponseAmino): _115.QueryConsensusStateHeightsResponse;
                    toAmino(message: _115.QueryConsensusStateHeightsResponse): _115.QueryConsensusStateHeightsResponseAmino;
                    fromAminoMsg(object: _115.QueryConsensusStateHeightsResponseAminoMsg): _115.QueryConsensusStateHeightsResponse;
                    toAminoMsg(message: _115.QueryConsensusStateHeightsResponse): _115.QueryConsensusStateHeightsResponseAminoMsg;
                    fromProtoMsg(message: _115.QueryConsensusStateHeightsResponseProtoMsg): _115.QueryConsensusStateHeightsResponse;
                    toProto(message: _115.QueryConsensusStateHeightsResponse): Uint8Array;
                    toProtoMsg(message: _115.QueryConsensusStateHeightsResponse): _115.QueryConsensusStateHeightsResponseProtoMsg;
                };
                QueryClientStatusRequest: {
                    typeUrl: string;
                    encode(message: _115.QueryClientStatusRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _115.QueryClientStatusRequest;
                    fromJSON(object: any): _115.QueryClientStatusRequest;
                    toJSON(message: _115.QueryClientStatusRequest): unknown;
                    fromPartial(object: Partial<_115.QueryClientStatusRequest>): _115.QueryClientStatusRequest;
                    fromSDK(object: _115.QueryClientStatusRequestSDKType): _115.QueryClientStatusRequest;
                    toSDK(message: _115.QueryClientStatusRequest): _115.QueryClientStatusRequestSDKType;
                    fromAmino(object: _115.QueryClientStatusRequestAmino): _115.QueryClientStatusRequest;
                    toAmino(message: _115.QueryClientStatusRequest): _115.QueryClientStatusRequestAmino;
                    fromAminoMsg(object: _115.QueryClientStatusRequestAminoMsg): _115.QueryClientStatusRequest;
                    toAminoMsg(message: _115.QueryClientStatusRequest): _115.QueryClientStatusRequestAminoMsg;
                    fromProtoMsg(message: _115.QueryClientStatusRequestProtoMsg): _115.QueryClientStatusRequest;
                    toProto(message: _115.QueryClientStatusRequest): Uint8Array;
                    toProtoMsg(message: _115.QueryClientStatusRequest): _115.QueryClientStatusRequestProtoMsg;
                };
                QueryClientStatusResponse: {
                    typeUrl: string;
                    encode(message: _115.QueryClientStatusResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _115.QueryClientStatusResponse;
                    fromJSON(object: any): _115.QueryClientStatusResponse;
                    toJSON(message: _115.QueryClientStatusResponse): unknown;
                    fromPartial(object: Partial<_115.QueryClientStatusResponse>): _115.QueryClientStatusResponse;
                    fromSDK(object: _115.QueryClientStatusResponseSDKType): _115.QueryClientStatusResponse;
                    toSDK(message: _115.QueryClientStatusResponse): _115.QueryClientStatusResponseSDKType;
                    fromAmino(object: _115.QueryClientStatusResponseAmino): _115.QueryClientStatusResponse;
                    toAmino(message: _115.QueryClientStatusResponse): _115.QueryClientStatusResponseAmino;
                    fromAminoMsg(object: _115.QueryClientStatusResponseAminoMsg): _115.QueryClientStatusResponse;
                    toAminoMsg(message: _115.QueryClientStatusResponse): _115.QueryClientStatusResponseAminoMsg;
                    fromProtoMsg(message: _115.QueryClientStatusResponseProtoMsg): _115.QueryClientStatusResponse;
                    toProto(message: _115.QueryClientStatusResponse): Uint8Array;
                    toProtoMsg(message: _115.QueryClientStatusResponse): _115.QueryClientStatusResponseProtoMsg;
                };
                QueryClientParamsRequest: {
                    typeUrl: string;
                    encode(_: _115.QueryClientParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _115.QueryClientParamsRequest;
                    fromJSON(_: any): _115.QueryClientParamsRequest;
                    toJSON(_: _115.QueryClientParamsRequest): unknown;
                    fromPartial(_: Partial<_115.QueryClientParamsRequest>): _115.QueryClientParamsRequest;
                    fromSDK(_: _115.QueryClientParamsRequestSDKType): _115.QueryClientParamsRequest;
                    toSDK(_: _115.QueryClientParamsRequest): _115.QueryClientParamsRequestSDKType;
                    fromAmino(_: _115.QueryClientParamsRequestAmino): _115.QueryClientParamsRequest;
                    toAmino(_: _115.QueryClientParamsRequest): _115.QueryClientParamsRequestAmino;
                    fromAminoMsg(object: _115.QueryClientParamsRequestAminoMsg): _115.QueryClientParamsRequest;
                    toAminoMsg(message: _115.QueryClientParamsRequest): _115.QueryClientParamsRequestAminoMsg;
                    fromProtoMsg(message: _115.QueryClientParamsRequestProtoMsg): _115.QueryClientParamsRequest;
                    toProto(message: _115.QueryClientParamsRequest): Uint8Array;
                    toProtoMsg(message: _115.QueryClientParamsRequest): _115.QueryClientParamsRequestProtoMsg;
                };
                QueryClientParamsResponse: {
                    typeUrl: string;
                    encode(message: _115.QueryClientParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _115.QueryClientParamsResponse;
                    fromJSON(object: any): _115.QueryClientParamsResponse;
                    toJSON(message: _115.QueryClientParamsResponse): unknown;
                    fromPartial(object: Partial<_115.QueryClientParamsResponse>): _115.QueryClientParamsResponse;
                    fromSDK(object: _115.QueryClientParamsResponseSDKType): _115.QueryClientParamsResponse;
                    toSDK(message: _115.QueryClientParamsResponse): _115.QueryClientParamsResponseSDKType;
                    fromAmino(object: _115.QueryClientParamsResponseAmino): _115.QueryClientParamsResponse;
                    toAmino(message: _115.QueryClientParamsResponse): _115.QueryClientParamsResponseAmino;
                    fromAminoMsg(object: _115.QueryClientParamsResponseAminoMsg): _115.QueryClientParamsResponse;
                    toAminoMsg(message: _115.QueryClientParamsResponse): _115.QueryClientParamsResponseAminoMsg;
                    fromProtoMsg(message: _115.QueryClientParamsResponseProtoMsg): _115.QueryClientParamsResponse;
                    toProto(message: _115.QueryClientParamsResponse): Uint8Array;
                    toProtoMsg(message: _115.QueryClientParamsResponse): _115.QueryClientParamsResponseProtoMsg;
                };
                QueryUpgradedClientStateRequest: {
                    typeUrl: string;
                    encode(_: _115.QueryUpgradedClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _115.QueryUpgradedClientStateRequest;
                    fromJSON(_: any): _115.QueryUpgradedClientStateRequest;
                    toJSON(_: _115.QueryUpgradedClientStateRequest): unknown;
                    fromPartial(_: Partial<_115.QueryUpgradedClientStateRequest>): _115.QueryUpgradedClientStateRequest;
                    fromSDK(_: _115.QueryUpgradedClientStateRequestSDKType): _115.QueryUpgradedClientStateRequest;
                    toSDK(_: _115.QueryUpgradedClientStateRequest): _115.QueryUpgradedClientStateRequestSDKType;
                    fromAmino(_: _115.QueryUpgradedClientStateRequestAmino): _115.QueryUpgradedClientStateRequest;
                    toAmino(_: _115.QueryUpgradedClientStateRequest): _115.QueryUpgradedClientStateRequestAmino;
                    fromAminoMsg(object: _115.QueryUpgradedClientStateRequestAminoMsg): _115.QueryUpgradedClientStateRequest;
                    toAminoMsg(message: _115.QueryUpgradedClientStateRequest): _115.QueryUpgradedClientStateRequestAminoMsg;
                    fromProtoMsg(message: _115.QueryUpgradedClientStateRequestProtoMsg): _115.QueryUpgradedClientStateRequest;
                    toProto(message: _115.QueryUpgradedClientStateRequest): Uint8Array;
                    toProtoMsg(message: _115.QueryUpgradedClientStateRequest): _115.QueryUpgradedClientStateRequestProtoMsg;
                };
                QueryUpgradedClientStateResponse: {
                    typeUrl: string;
                    encode(message: _115.QueryUpgradedClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _115.QueryUpgradedClientStateResponse;
                    fromJSON(object: any): _115.QueryUpgradedClientStateResponse;
                    toJSON(message: _115.QueryUpgradedClientStateResponse): unknown;
                    fromPartial(object: Partial<_115.QueryUpgradedClientStateResponse>): _115.QueryUpgradedClientStateResponse;
                    fromSDK(object: _115.QueryUpgradedClientStateResponseSDKType): _115.QueryUpgradedClientStateResponse;
                    toSDK(message: _115.QueryUpgradedClientStateResponse): _115.QueryUpgradedClientStateResponseSDKType;
                    fromAmino(object: _115.QueryUpgradedClientStateResponseAmino): _115.QueryUpgradedClientStateResponse;
                    toAmino(message: _115.QueryUpgradedClientStateResponse): _115.QueryUpgradedClientStateResponseAmino;
                    fromAminoMsg(object: _115.QueryUpgradedClientStateResponseAminoMsg): _115.QueryUpgradedClientStateResponse;
                    toAminoMsg(message: _115.QueryUpgradedClientStateResponse): _115.QueryUpgradedClientStateResponseAminoMsg;
                    fromProtoMsg(message: _115.QueryUpgradedClientStateResponseProtoMsg): _115.QueryUpgradedClientStateResponse;
                    toProto(message: _115.QueryUpgradedClientStateResponse): Uint8Array;
                    toProtoMsg(message: _115.QueryUpgradedClientStateResponse): _115.QueryUpgradedClientStateResponseProtoMsg;
                };
                QueryUpgradedConsensusStateRequest: {
                    typeUrl: string;
                    encode(_: _115.QueryUpgradedConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _115.QueryUpgradedConsensusStateRequest;
                    fromJSON(_: any): _115.QueryUpgradedConsensusStateRequest;
                    toJSON(_: _115.QueryUpgradedConsensusStateRequest): unknown;
                    fromPartial(_: Partial<_115.QueryUpgradedConsensusStateRequest>): _115.QueryUpgradedConsensusStateRequest;
                    fromSDK(_: _115.QueryUpgradedConsensusStateRequestSDKType): _115.QueryUpgradedConsensusStateRequest;
                    toSDK(_: _115.QueryUpgradedConsensusStateRequest): _115.QueryUpgradedConsensusStateRequestSDKType;
                    fromAmino(_: _115.QueryUpgradedConsensusStateRequestAmino): _115.QueryUpgradedConsensusStateRequest;
                    toAmino(_: _115.QueryUpgradedConsensusStateRequest): _115.QueryUpgradedConsensusStateRequestAmino;
                    fromAminoMsg(object: _115.QueryUpgradedConsensusStateRequestAminoMsg): _115.QueryUpgradedConsensusStateRequest;
                    toAminoMsg(message: _115.QueryUpgradedConsensusStateRequest): _115.QueryUpgradedConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _115.QueryUpgradedConsensusStateRequestProtoMsg): _115.QueryUpgradedConsensusStateRequest;
                    toProto(message: _115.QueryUpgradedConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _115.QueryUpgradedConsensusStateRequest): _115.QueryUpgradedConsensusStateRequestProtoMsg;
                };
                QueryUpgradedConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _115.QueryUpgradedConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _115.QueryUpgradedConsensusStateResponse;
                    fromJSON(object: any): _115.QueryUpgradedConsensusStateResponse;
                    toJSON(message: _115.QueryUpgradedConsensusStateResponse): unknown;
                    fromPartial(object: Partial<_115.QueryUpgradedConsensusStateResponse>): _115.QueryUpgradedConsensusStateResponse;
                    fromSDK(object: _115.QueryUpgradedConsensusStateResponseSDKType): _115.QueryUpgradedConsensusStateResponse;
                    toSDK(message: _115.QueryUpgradedConsensusStateResponse): _115.QueryUpgradedConsensusStateResponseSDKType;
                    fromAmino(object: _115.QueryUpgradedConsensusStateResponseAmino): _115.QueryUpgradedConsensusStateResponse;
                    toAmino(message: _115.QueryUpgradedConsensusStateResponse): _115.QueryUpgradedConsensusStateResponseAmino;
                    fromAminoMsg(object: _115.QueryUpgradedConsensusStateResponseAminoMsg): _115.QueryUpgradedConsensusStateResponse;
                    toAminoMsg(message: _115.QueryUpgradedConsensusStateResponse): _115.QueryUpgradedConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _115.QueryUpgradedConsensusStateResponseProtoMsg): _115.QueryUpgradedConsensusStateResponse;
                    toProto(message: _115.QueryUpgradedConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _115.QueryUpgradedConsensusStateResponse): _115.QueryUpgradedConsensusStateResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _114.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _114.GenesisState;
                    fromJSON(object: any): _114.GenesisState;
                    toJSON(message: _114.GenesisState): unknown;
                    fromPartial(object: Partial<_114.GenesisState>): _114.GenesisState;
                    fromSDK(object: _114.GenesisStateSDKType): _114.GenesisState;
                    toSDK(message: _114.GenesisState): _114.GenesisStateSDKType;
                    fromAmino(object: _114.GenesisStateAmino): _114.GenesisState;
                    toAmino(message: _114.GenesisState): _114.GenesisStateAmino;
                    fromAminoMsg(object: _114.GenesisStateAminoMsg): _114.GenesisState;
                    toAminoMsg(message: _114.GenesisState): _114.GenesisStateAminoMsg;
                    fromProtoMsg(message: _114.GenesisStateProtoMsg): _114.GenesisState;
                    toProto(message: _114.GenesisState): Uint8Array;
                    toProtoMsg(message: _114.GenesisState): _114.GenesisStateProtoMsg;
                };
                GenesisMetadata: {
                    typeUrl: string;
                    encode(message: _114.GenesisMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _114.GenesisMetadata;
                    fromJSON(object: any): _114.GenesisMetadata;
                    toJSON(message: _114.GenesisMetadata): unknown;
                    fromPartial(object: Partial<_114.GenesisMetadata>): _114.GenesisMetadata;
                    fromSDK(object: _114.GenesisMetadataSDKType): _114.GenesisMetadata;
                    toSDK(message: _114.GenesisMetadata): _114.GenesisMetadataSDKType;
                    fromAmino(object: _114.GenesisMetadataAmino): _114.GenesisMetadata;
                    toAmino(message: _114.GenesisMetadata): _114.GenesisMetadataAmino;
                    fromAminoMsg(object: _114.GenesisMetadataAminoMsg): _114.GenesisMetadata;
                    toAminoMsg(message: _114.GenesisMetadata): _114.GenesisMetadataAminoMsg;
                    fromProtoMsg(message: _114.GenesisMetadataProtoMsg): _114.GenesisMetadata;
                    toProto(message: _114.GenesisMetadata): Uint8Array;
                    toProtoMsg(message: _114.GenesisMetadata): _114.GenesisMetadataProtoMsg;
                };
                IdentifiedGenesisMetadata: {
                    typeUrl: string;
                    encode(message: _114.IdentifiedGenesisMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _114.IdentifiedGenesisMetadata;
                    fromJSON(object: any): _114.IdentifiedGenesisMetadata;
                    toJSON(message: _114.IdentifiedGenesisMetadata): unknown;
                    fromPartial(object: Partial<_114.IdentifiedGenesisMetadata>): _114.IdentifiedGenesisMetadata;
                    fromSDK(object: _114.IdentifiedGenesisMetadataSDKType): _114.IdentifiedGenesisMetadata;
                    toSDK(message: _114.IdentifiedGenesisMetadata): _114.IdentifiedGenesisMetadataSDKType;
                    fromAmino(object: _114.IdentifiedGenesisMetadataAmino): _114.IdentifiedGenesisMetadata;
                    toAmino(message: _114.IdentifiedGenesisMetadata): _114.IdentifiedGenesisMetadataAmino;
                    fromAminoMsg(object: _114.IdentifiedGenesisMetadataAminoMsg): _114.IdentifiedGenesisMetadata;
                    toAminoMsg(message: _114.IdentifiedGenesisMetadata): _114.IdentifiedGenesisMetadataAminoMsg;
                    fromProtoMsg(message: _114.IdentifiedGenesisMetadataProtoMsg): _114.IdentifiedGenesisMetadata;
                    toProto(message: _114.IdentifiedGenesisMetadata): Uint8Array;
                    toProtoMsg(message: _114.IdentifiedGenesisMetadata): _114.IdentifiedGenesisMetadataProtoMsg;
                };
                IdentifiedClientState: {
                    typeUrl: string;
                    encode(message: _113.IdentifiedClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _113.IdentifiedClientState;
                    fromJSON(object: any): _113.IdentifiedClientState;
                    toJSON(message: _113.IdentifiedClientState): unknown;
                    fromPartial(object: Partial<_113.IdentifiedClientState>): _113.IdentifiedClientState;
                    fromSDK(object: _113.IdentifiedClientStateSDKType): _113.IdentifiedClientState;
                    toSDK(message: _113.IdentifiedClientState): _113.IdentifiedClientStateSDKType;
                    fromAmino(object: _113.IdentifiedClientStateAmino): _113.IdentifiedClientState;
                    toAmino(message: _113.IdentifiedClientState): _113.IdentifiedClientStateAmino;
                    fromAminoMsg(object: _113.IdentifiedClientStateAminoMsg): _113.IdentifiedClientState;
                    toAminoMsg(message: _113.IdentifiedClientState): _113.IdentifiedClientStateAminoMsg;
                    fromProtoMsg(message: _113.IdentifiedClientStateProtoMsg): _113.IdentifiedClientState;
                    toProto(message: _113.IdentifiedClientState): Uint8Array;
                    toProtoMsg(message: _113.IdentifiedClientState): _113.IdentifiedClientStateProtoMsg;
                };
                ConsensusStateWithHeight: {
                    typeUrl: string;
                    encode(message: _113.ConsensusStateWithHeight, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _113.ConsensusStateWithHeight;
                    fromJSON(object: any): _113.ConsensusStateWithHeight;
                    toJSON(message: _113.ConsensusStateWithHeight): unknown;
                    fromPartial(object: Partial<_113.ConsensusStateWithHeight>): _113.ConsensusStateWithHeight;
                    fromSDK(object: _113.ConsensusStateWithHeightSDKType): _113.ConsensusStateWithHeight;
                    toSDK(message: _113.ConsensusStateWithHeight): _113.ConsensusStateWithHeightSDKType;
                    fromAmino(object: _113.ConsensusStateWithHeightAmino): _113.ConsensusStateWithHeight;
                    toAmino(message: _113.ConsensusStateWithHeight): _113.ConsensusStateWithHeightAmino;
                    fromAminoMsg(object: _113.ConsensusStateWithHeightAminoMsg): _113.ConsensusStateWithHeight;
                    toAminoMsg(message: _113.ConsensusStateWithHeight): _113.ConsensusStateWithHeightAminoMsg;
                    fromProtoMsg(message: _113.ConsensusStateWithHeightProtoMsg): _113.ConsensusStateWithHeight;
                    toProto(message: _113.ConsensusStateWithHeight): Uint8Array;
                    toProtoMsg(message: _113.ConsensusStateWithHeight): _113.ConsensusStateWithHeightProtoMsg;
                };
                ClientConsensusStates: {
                    typeUrl: string;
                    encode(message: _113.ClientConsensusStates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _113.ClientConsensusStates;
                    fromJSON(object: any): _113.ClientConsensusStates;
                    toJSON(message: _113.ClientConsensusStates): unknown;
                    fromPartial(object: Partial<_113.ClientConsensusStates>): _113.ClientConsensusStates;
                    fromSDK(object: _113.ClientConsensusStatesSDKType): _113.ClientConsensusStates;
                    toSDK(message: _113.ClientConsensusStates): _113.ClientConsensusStatesSDKType;
                    fromAmino(object: _113.ClientConsensusStatesAmino): _113.ClientConsensusStates;
                    toAmino(message: _113.ClientConsensusStates): _113.ClientConsensusStatesAmino;
                    fromAminoMsg(object: _113.ClientConsensusStatesAminoMsg): _113.ClientConsensusStates;
                    toAminoMsg(message: _113.ClientConsensusStates): _113.ClientConsensusStatesAminoMsg;
                    fromProtoMsg(message: _113.ClientConsensusStatesProtoMsg): _113.ClientConsensusStates;
                    toProto(message: _113.ClientConsensusStates): Uint8Array;
                    toProtoMsg(message: _113.ClientConsensusStates): _113.ClientConsensusStatesProtoMsg;
                };
                Height: {
                    typeUrl: string;
                    encode(message: _113.Height, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _113.Height;
                    fromJSON(object: any): _113.Height;
                    toJSON(message: _113.Height): unknown;
                    fromPartial(object: Partial<_113.Height>): _113.Height;
                    fromSDK(object: _113.HeightSDKType): _113.Height;
                    toSDK(message: _113.Height): _113.HeightSDKType;
                    fromAmino(object: _113.HeightAmino): _113.Height;
                    toAmino(message: _113.Height): _113.HeightAmino;
                    fromAminoMsg(object: _113.HeightAminoMsg): _113.Height;
                    toAminoMsg(message: _113.Height): _113.HeightAminoMsg;
                    fromProtoMsg(message: _113.HeightProtoMsg): _113.Height;
                    toProto(message: _113.Height): Uint8Array;
                    toProtoMsg(message: _113.Height): _113.HeightProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    encode(message: _113.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _113.Params;
                    fromJSON(object: any): _113.Params;
                    toJSON(message: _113.Params): unknown;
                    fromPartial(object: Partial<_113.Params>): _113.Params;
                    fromSDK(object: _113.ParamsSDKType): _113.Params;
                    toSDK(message: _113.Params): _113.ParamsSDKType;
                    fromAmino(object: _113.ParamsAmino): _113.Params;
                    toAmino(message: _113.Params): _113.ParamsAmino;
                    fromAminoMsg(object: _113.ParamsAminoMsg): _113.Params;
                    toAminoMsg(message: _113.Params): _113.ParamsAminoMsg;
                    fromProtoMsg(message: _113.ParamsProtoMsg): _113.Params;
                    toProto(message: _113.Params): Uint8Array;
                    toProtoMsg(message: _113.Params): _113.ParamsProtoMsg;
                };
                ClientUpdateProposal: {
                    typeUrl: string;
                    encode(message: _113.ClientUpdateProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _113.ClientUpdateProposal;
                    fromJSON(object: any): _113.ClientUpdateProposal;
                    toJSON(message: _113.ClientUpdateProposal): unknown;
                    fromPartial(object: Partial<_113.ClientUpdateProposal>): _113.ClientUpdateProposal;
                    fromSDK(object: _113.ClientUpdateProposalSDKType): _113.ClientUpdateProposal;
                    toSDK(message: _113.ClientUpdateProposal): _113.ClientUpdateProposalSDKType;
                    fromAmino(object: _113.ClientUpdateProposalAmino): _113.ClientUpdateProposal;
                    toAmino(message: _113.ClientUpdateProposal): _113.ClientUpdateProposalAmino;
                    fromAminoMsg(object: _113.ClientUpdateProposalAminoMsg): _113.ClientUpdateProposal;
                    toAminoMsg(message: _113.ClientUpdateProposal): _113.ClientUpdateProposalAminoMsg;
                    fromProtoMsg(message: _113.ClientUpdateProposalProtoMsg): _113.ClientUpdateProposal;
                    toProto(message: _113.ClientUpdateProposal): Uint8Array;
                    toProtoMsg(message: _113.ClientUpdateProposal): _113.ClientUpdateProposalProtoMsg;
                };
                UpgradeProposal: {
                    typeUrl: string;
                    encode(message: _113.UpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _113.UpgradeProposal;
                    fromJSON(object: any): _113.UpgradeProposal;
                    toJSON(message: _113.UpgradeProposal): unknown;
                    fromPartial(object: Partial<_113.UpgradeProposal>): _113.UpgradeProposal;
                    fromSDK(object: _113.UpgradeProposalSDKType): _113.UpgradeProposal;
                    toSDK(message: _113.UpgradeProposal): _113.UpgradeProposalSDKType;
                    fromAmino(object: _113.UpgradeProposalAmino): _113.UpgradeProposal;
                    toAmino(message: _113.UpgradeProposal): _113.UpgradeProposalAmino;
                    fromAminoMsg(object: _113.UpgradeProposalAminoMsg): _113.UpgradeProposal;
                    toAminoMsg(message: _113.UpgradeProposal): _113.UpgradeProposalAminoMsg;
                    fromProtoMsg(message: _113.UpgradeProposalProtoMsg): _113.UpgradeProposal;
                    toProto(message: _113.UpgradeProposal): Uint8Array;
                    toProtoMsg(message: _113.UpgradeProposal): _113.UpgradeProposalProtoMsg;
                };
            };
        }
        namespace commitment {
            const v1: {
                protobufPackage: "ibc.core.commitment.v1";
                MerkleRoot: {
                    typeUrl: string;
                    encode(message: _117.MerkleRoot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _117.MerkleRoot;
                    fromJSON(object: any): _117.MerkleRoot;
                    toJSON(message: _117.MerkleRoot): unknown;
                    fromPartial(object: Partial<_117.MerkleRoot>): _117.MerkleRoot;
                    fromSDK(object: _117.MerkleRootSDKType): _117.MerkleRoot;
                    toSDK(message: _117.MerkleRoot): _117.MerkleRootSDKType;
                    fromAmino(object: _117.MerkleRootAmino): _117.MerkleRoot;
                    toAmino(message: _117.MerkleRoot): _117.MerkleRootAmino;
                    fromAminoMsg(object: _117.MerkleRootAminoMsg): _117.MerkleRoot;
                    toAminoMsg(message: _117.MerkleRoot): _117.MerkleRootAminoMsg;
                    fromProtoMsg(message: _117.MerkleRootProtoMsg): _117.MerkleRoot;
                    toProto(message: _117.MerkleRoot): Uint8Array;
                    toProtoMsg(message: _117.MerkleRoot): _117.MerkleRootProtoMsg;
                };
                MerklePrefix: {
                    typeUrl: string;
                    encode(message: _117.MerklePrefix, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _117.MerklePrefix;
                    fromJSON(object: any): _117.MerklePrefix;
                    toJSON(message: _117.MerklePrefix): unknown;
                    fromPartial(object: Partial<_117.MerklePrefix>): _117.MerklePrefix;
                    fromSDK(object: _117.MerklePrefixSDKType): _117.MerklePrefix;
                    toSDK(message: _117.MerklePrefix): _117.MerklePrefixSDKType;
                    fromAmino(object: _117.MerklePrefixAmino): _117.MerklePrefix;
                    toAmino(message: _117.MerklePrefix): _117.MerklePrefixAmino;
                    fromAminoMsg(object: _117.MerklePrefixAminoMsg): _117.MerklePrefix;
                    toAminoMsg(message: _117.MerklePrefix): _117.MerklePrefixAminoMsg;
                    fromProtoMsg(message: _117.MerklePrefixProtoMsg): _117.MerklePrefix;
                    toProto(message: _117.MerklePrefix): Uint8Array;
                    toProtoMsg(message: _117.MerklePrefix): _117.MerklePrefixProtoMsg;
                };
                MerklePath: {
                    typeUrl: string;
                    encode(message: _117.MerklePath, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _117.MerklePath;
                    fromJSON(object: any): _117.MerklePath;
                    toJSON(message: _117.MerklePath): unknown;
                    fromPartial(object: Partial<_117.MerklePath>): _117.MerklePath;
                    fromSDK(object: _117.MerklePathSDKType): _117.MerklePath;
                    toSDK(message: _117.MerklePath): _117.MerklePathSDKType;
                    fromAmino(object: _117.MerklePathAmino): _117.MerklePath;
                    toAmino(message: _117.MerklePath): _117.MerklePathAmino;
                    fromAminoMsg(object: _117.MerklePathAminoMsg): _117.MerklePath;
                    toAminoMsg(message: _117.MerklePath): _117.MerklePathAminoMsg;
                    fromProtoMsg(message: _117.MerklePathProtoMsg): _117.MerklePath;
                    toProto(message: _117.MerklePath): Uint8Array;
                    toProtoMsg(message: _117.MerklePath): _117.MerklePathProtoMsg;
                };
                MerkleProof: {
                    typeUrl: string;
                    encode(message: _117.MerkleProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _117.MerkleProof;
                    fromJSON(object: any): _117.MerkleProof;
                    toJSON(message: _117.MerkleProof): unknown;
                    fromPartial(object: Partial<_117.MerkleProof>): _117.MerkleProof;
                    fromSDK(object: _117.MerkleProofSDKType): _117.MerkleProof;
                    toSDK(message: _117.MerkleProof): _117.MerkleProofSDKType;
                    fromAmino(object: _117.MerkleProofAmino): _117.MerkleProof;
                    toAmino(message: _117.MerkleProof): _117.MerkleProofAmino;
                    fromAminoMsg(object: _117.MerkleProofAminoMsg): _117.MerkleProof;
                    toAminoMsg(message: _117.MerkleProof): _117.MerkleProofAminoMsg;
                    fromProtoMsg(message: _117.MerkleProofProtoMsg): _117.MerkleProof;
                    toProto(message: _117.MerkleProof): Uint8Array;
                    toProtoMsg(message: _117.MerkleProof): _117.MerkleProofProtoMsg;
                };
            };
        }
        namespace connection {
            const v1: {
                Msg: typeof _244.Msg;
                Query: typeof _238.Query;
                QueryClientImpl: typeof _238.QueryClientImpl;
                LCDQueryClient: typeof _232.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        connectionOpenInit(value: _121.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenTry(value: _121.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenAck(value: _121.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenConfirm(value: _121.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateConnectionParams(value: _121.MsgUpdateParams): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        connectionOpenInit(value: _121.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _121.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _121.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _121.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _121.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _121.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _121.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _121.MsgConnectionOpenConfirm;
                        };
                        updateConnectionParams(value: _121.MsgUpdateParams): {
                            typeUrl: string;
                            value: _121.MsgUpdateParams;
                        };
                    };
                    toJSON: {
                        connectionOpenInit(value: _121.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: unknown;
                        };
                        connectionOpenTry(value: _121.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: unknown;
                        };
                        connectionOpenAck(value: _121.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: unknown;
                        };
                        connectionOpenConfirm(value: _121.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: unknown;
                        };
                        updateConnectionParams(value: _121.MsgUpdateParams): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        connectionOpenInit(value: any): {
                            typeUrl: string;
                            value: _121.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: any): {
                            typeUrl: string;
                            value: _121.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: any): {
                            typeUrl: string;
                            value: _121.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: any): {
                            typeUrl: string;
                            value: _121.MsgConnectionOpenConfirm;
                        };
                        updateConnectionParams(value: any): {
                            typeUrl: string;
                            value: _121.MsgUpdateParams;
                        };
                    };
                    fromPartial: {
                        connectionOpenInit(value: _121.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _121.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _121.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _121.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _121.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _121.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _121.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _121.MsgConnectionOpenConfirm;
                        };
                        updateConnectionParams(value: _121.MsgUpdateParams): {
                            typeUrl: string;
                            value: _121.MsgUpdateParams;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.connection.v1.MsgConnectionOpenInit": {
                        aminoType: string;
                        toAmino: (message: _121.MsgConnectionOpenInit) => _121.MsgConnectionOpenInitAmino;
                        fromAmino: (object: _121.MsgConnectionOpenInitAmino) => _121.MsgConnectionOpenInit;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenTry": {
                        aminoType: string;
                        toAmino: (message: _121.MsgConnectionOpenTry) => _121.MsgConnectionOpenTryAmino;
                        fromAmino: (object: _121.MsgConnectionOpenTryAmino) => _121.MsgConnectionOpenTry;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenAck": {
                        aminoType: string;
                        toAmino: (message: _121.MsgConnectionOpenAck) => _121.MsgConnectionOpenAckAmino;
                        fromAmino: (object: _121.MsgConnectionOpenAckAmino) => _121.MsgConnectionOpenAck;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenConfirm": {
                        aminoType: string;
                        toAmino: (message: _121.MsgConnectionOpenConfirm) => _121.MsgConnectionOpenConfirmAmino;
                        fromAmino: (object: _121.MsgConnectionOpenConfirmAmino) => _121.MsgConnectionOpenConfirm;
                    };
                    "/ibc.core.connection.v1.MsgUpdateParams": {
                        aminoType: string;
                        toAmino: (message: _121.MsgUpdateParams) => _121.MsgUpdateParamsAmino;
                        fromAmino: (object: _121.MsgUpdateParamsAmino) => _121.MsgUpdateParams;
                    };
                };
                protobufPackage: "ibc.core.connection.v1";
                MsgConnectionOpenInit: {
                    typeUrl: string;
                    encode(message: _121.MsgConnectionOpenInit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _121.MsgConnectionOpenInit;
                    fromJSON(object: any): _121.MsgConnectionOpenInit;
                    toJSON(message: _121.MsgConnectionOpenInit): unknown;
                    fromPartial(object: Partial<_121.MsgConnectionOpenInit>): _121.MsgConnectionOpenInit;
                    fromSDK(object: _121.MsgConnectionOpenInitSDKType): _121.MsgConnectionOpenInit;
                    toSDK(message: _121.MsgConnectionOpenInit): _121.MsgConnectionOpenInitSDKType;
                    fromAmino(object: _121.MsgConnectionOpenInitAmino): _121.MsgConnectionOpenInit;
                    toAmino(message: _121.MsgConnectionOpenInit): _121.MsgConnectionOpenInitAmino;
                    fromAminoMsg(object: _121.MsgConnectionOpenInitAminoMsg): _121.MsgConnectionOpenInit;
                    toAminoMsg(message: _121.MsgConnectionOpenInit): _121.MsgConnectionOpenInitAminoMsg;
                    fromProtoMsg(message: _121.MsgConnectionOpenInitProtoMsg): _121.MsgConnectionOpenInit;
                    toProto(message: _121.MsgConnectionOpenInit): Uint8Array;
                    toProtoMsg(message: _121.MsgConnectionOpenInit): _121.MsgConnectionOpenInitProtoMsg;
                };
                MsgConnectionOpenInitResponse: {
                    typeUrl: string;
                    encode(_: _121.MsgConnectionOpenInitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _121.MsgConnectionOpenInitResponse;
                    fromJSON(_: any): _121.MsgConnectionOpenInitResponse;
                    toJSON(_: _121.MsgConnectionOpenInitResponse): unknown;
                    fromPartial(_: Partial<_121.MsgConnectionOpenInitResponse>): _121.MsgConnectionOpenInitResponse;
                    fromSDK(_: _121.MsgConnectionOpenInitResponseSDKType): _121.MsgConnectionOpenInitResponse;
                    toSDK(_: _121.MsgConnectionOpenInitResponse): _121.MsgConnectionOpenInitResponseSDKType;
                    fromAmino(_: _121.MsgConnectionOpenInitResponseAmino): _121.MsgConnectionOpenInitResponse;
                    toAmino(_: _121.MsgConnectionOpenInitResponse): _121.MsgConnectionOpenInitResponseAmino;
                    fromAminoMsg(object: _121.MsgConnectionOpenInitResponseAminoMsg): _121.MsgConnectionOpenInitResponse;
                    toAminoMsg(message: _121.MsgConnectionOpenInitResponse): _121.MsgConnectionOpenInitResponseAminoMsg;
                    fromProtoMsg(message: _121.MsgConnectionOpenInitResponseProtoMsg): _121.MsgConnectionOpenInitResponse;
                    toProto(message: _121.MsgConnectionOpenInitResponse): Uint8Array;
                    toProtoMsg(message: _121.MsgConnectionOpenInitResponse): _121.MsgConnectionOpenInitResponseProtoMsg;
                };
                MsgConnectionOpenTry: {
                    typeUrl: string;
                    encode(message: _121.MsgConnectionOpenTry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _121.MsgConnectionOpenTry;
                    fromJSON(object: any): _121.MsgConnectionOpenTry;
                    toJSON(message: _121.MsgConnectionOpenTry): unknown;
                    fromPartial(object: Partial<_121.MsgConnectionOpenTry>): _121.MsgConnectionOpenTry;
                    fromSDK(object: _121.MsgConnectionOpenTrySDKType): _121.MsgConnectionOpenTry;
                    toSDK(message: _121.MsgConnectionOpenTry): _121.MsgConnectionOpenTrySDKType;
                    fromAmino(object: _121.MsgConnectionOpenTryAmino): _121.MsgConnectionOpenTry;
                    toAmino(message: _121.MsgConnectionOpenTry): _121.MsgConnectionOpenTryAmino;
                    fromAminoMsg(object: _121.MsgConnectionOpenTryAminoMsg): _121.MsgConnectionOpenTry;
                    toAminoMsg(message: _121.MsgConnectionOpenTry): _121.MsgConnectionOpenTryAminoMsg;
                    fromProtoMsg(message: _121.MsgConnectionOpenTryProtoMsg): _121.MsgConnectionOpenTry;
                    toProto(message: _121.MsgConnectionOpenTry): Uint8Array;
                    toProtoMsg(message: _121.MsgConnectionOpenTry): _121.MsgConnectionOpenTryProtoMsg;
                };
                MsgConnectionOpenTryResponse: {
                    typeUrl: string;
                    encode(_: _121.MsgConnectionOpenTryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _121.MsgConnectionOpenTryResponse;
                    fromJSON(_: any): _121.MsgConnectionOpenTryResponse;
                    toJSON(_: _121.MsgConnectionOpenTryResponse): unknown;
                    fromPartial(_: Partial<_121.MsgConnectionOpenTryResponse>): _121.MsgConnectionOpenTryResponse;
                    fromSDK(_: _121.MsgConnectionOpenTryResponseSDKType): _121.MsgConnectionOpenTryResponse;
                    toSDK(_: _121.MsgConnectionOpenTryResponse): _121.MsgConnectionOpenTryResponseSDKType;
                    fromAmino(_: _121.MsgConnectionOpenTryResponseAmino): _121.MsgConnectionOpenTryResponse;
                    toAmino(_: _121.MsgConnectionOpenTryResponse): _121.MsgConnectionOpenTryResponseAmino;
                    fromAminoMsg(object: _121.MsgConnectionOpenTryResponseAminoMsg): _121.MsgConnectionOpenTryResponse;
                    toAminoMsg(message: _121.MsgConnectionOpenTryResponse): _121.MsgConnectionOpenTryResponseAminoMsg;
                    fromProtoMsg(message: _121.MsgConnectionOpenTryResponseProtoMsg): _121.MsgConnectionOpenTryResponse;
                    toProto(message: _121.MsgConnectionOpenTryResponse): Uint8Array;
                    toProtoMsg(message: _121.MsgConnectionOpenTryResponse): _121.MsgConnectionOpenTryResponseProtoMsg;
                };
                MsgConnectionOpenAck: {
                    typeUrl: string;
                    encode(message: _121.MsgConnectionOpenAck, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _121.MsgConnectionOpenAck;
                    fromJSON(object: any): _121.MsgConnectionOpenAck;
                    toJSON(message: _121.MsgConnectionOpenAck): unknown;
                    fromPartial(object: Partial<_121.MsgConnectionOpenAck>): _121.MsgConnectionOpenAck;
                    fromSDK(object: _121.MsgConnectionOpenAckSDKType): _121.MsgConnectionOpenAck;
                    toSDK(message: _121.MsgConnectionOpenAck): _121.MsgConnectionOpenAckSDKType;
                    fromAmino(object: _121.MsgConnectionOpenAckAmino): _121.MsgConnectionOpenAck;
                    toAmino(message: _121.MsgConnectionOpenAck): _121.MsgConnectionOpenAckAmino;
                    fromAminoMsg(object: _121.MsgConnectionOpenAckAminoMsg): _121.MsgConnectionOpenAck;
                    toAminoMsg(message: _121.MsgConnectionOpenAck): _121.MsgConnectionOpenAckAminoMsg;
                    fromProtoMsg(message: _121.MsgConnectionOpenAckProtoMsg): _121.MsgConnectionOpenAck;
                    toProto(message: _121.MsgConnectionOpenAck): Uint8Array;
                    toProtoMsg(message: _121.MsgConnectionOpenAck): _121.MsgConnectionOpenAckProtoMsg;
                };
                MsgConnectionOpenAckResponse: {
                    typeUrl: string;
                    encode(_: _121.MsgConnectionOpenAckResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _121.MsgConnectionOpenAckResponse;
                    fromJSON(_: any): _121.MsgConnectionOpenAckResponse;
                    toJSON(_: _121.MsgConnectionOpenAckResponse): unknown;
                    fromPartial(_: Partial<_121.MsgConnectionOpenAckResponse>): _121.MsgConnectionOpenAckResponse;
                    fromSDK(_: _121.MsgConnectionOpenAckResponseSDKType): _121.MsgConnectionOpenAckResponse;
                    toSDK(_: _121.MsgConnectionOpenAckResponse): _121.MsgConnectionOpenAckResponseSDKType;
                    fromAmino(_: _121.MsgConnectionOpenAckResponseAmino): _121.MsgConnectionOpenAckResponse;
                    toAmino(_: _121.MsgConnectionOpenAckResponse): _121.MsgConnectionOpenAckResponseAmino;
                    fromAminoMsg(object: _121.MsgConnectionOpenAckResponseAminoMsg): _121.MsgConnectionOpenAckResponse;
                    toAminoMsg(message: _121.MsgConnectionOpenAckResponse): _121.MsgConnectionOpenAckResponseAminoMsg;
                    fromProtoMsg(message: _121.MsgConnectionOpenAckResponseProtoMsg): _121.MsgConnectionOpenAckResponse;
                    toProto(message: _121.MsgConnectionOpenAckResponse): Uint8Array;
                    toProtoMsg(message: _121.MsgConnectionOpenAckResponse): _121.MsgConnectionOpenAckResponseProtoMsg;
                };
                MsgConnectionOpenConfirm: {
                    typeUrl: string;
                    encode(message: _121.MsgConnectionOpenConfirm, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _121.MsgConnectionOpenConfirm;
                    fromJSON(object: any): _121.MsgConnectionOpenConfirm;
                    toJSON(message: _121.MsgConnectionOpenConfirm): unknown;
                    fromPartial(object: Partial<_121.MsgConnectionOpenConfirm>): _121.MsgConnectionOpenConfirm;
                    fromSDK(object: _121.MsgConnectionOpenConfirmSDKType): _121.MsgConnectionOpenConfirm;
                    toSDK(message: _121.MsgConnectionOpenConfirm): _121.MsgConnectionOpenConfirmSDKType;
                    fromAmino(object: _121.MsgConnectionOpenConfirmAmino): _121.MsgConnectionOpenConfirm;
                    toAmino(message: _121.MsgConnectionOpenConfirm): _121.MsgConnectionOpenConfirmAmino;
                    fromAminoMsg(object: _121.MsgConnectionOpenConfirmAminoMsg): _121.MsgConnectionOpenConfirm;
                    toAminoMsg(message: _121.MsgConnectionOpenConfirm): _121.MsgConnectionOpenConfirmAminoMsg;
                    fromProtoMsg(message: _121.MsgConnectionOpenConfirmProtoMsg): _121.MsgConnectionOpenConfirm;
                    toProto(message: _121.MsgConnectionOpenConfirm): Uint8Array;
                    toProtoMsg(message: _121.MsgConnectionOpenConfirm): _121.MsgConnectionOpenConfirmProtoMsg;
                };
                MsgConnectionOpenConfirmResponse: {
                    typeUrl: string;
                    encode(_: _121.MsgConnectionOpenConfirmResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _121.MsgConnectionOpenConfirmResponse;
                    fromJSON(_: any): _121.MsgConnectionOpenConfirmResponse;
                    toJSON(_: _121.MsgConnectionOpenConfirmResponse): unknown;
                    fromPartial(_: Partial<_121.MsgConnectionOpenConfirmResponse>): _121.MsgConnectionOpenConfirmResponse;
                    fromSDK(_: _121.MsgConnectionOpenConfirmResponseSDKType): _121.MsgConnectionOpenConfirmResponse;
                    toSDK(_: _121.MsgConnectionOpenConfirmResponse): _121.MsgConnectionOpenConfirmResponseSDKType;
                    fromAmino(_: _121.MsgConnectionOpenConfirmResponseAmino): _121.MsgConnectionOpenConfirmResponse;
                    toAmino(_: _121.MsgConnectionOpenConfirmResponse): _121.MsgConnectionOpenConfirmResponseAmino;
                    fromAminoMsg(object: _121.MsgConnectionOpenConfirmResponseAminoMsg): _121.MsgConnectionOpenConfirmResponse;
                    toAminoMsg(message: _121.MsgConnectionOpenConfirmResponse): _121.MsgConnectionOpenConfirmResponseAminoMsg;
                    fromProtoMsg(message: _121.MsgConnectionOpenConfirmResponseProtoMsg): _121.MsgConnectionOpenConfirmResponse;
                    toProto(message: _121.MsgConnectionOpenConfirmResponse): Uint8Array;
                    toProtoMsg(message: _121.MsgConnectionOpenConfirmResponse): _121.MsgConnectionOpenConfirmResponseProtoMsg;
                };
                MsgUpdateParams: {
                    typeUrl: string;
                    encode(message: _121.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _121.MsgUpdateParams;
                    fromJSON(object: any): _121.MsgUpdateParams;
                    toJSON(message: _121.MsgUpdateParams): unknown;
                    fromPartial(object: Partial<_121.MsgUpdateParams>): _121.MsgUpdateParams;
                    fromSDK(object: _121.MsgUpdateParamsSDKType): _121.MsgUpdateParams;
                    toSDK(message: _121.MsgUpdateParams): _121.MsgUpdateParamsSDKType;
                    fromAmino(object: _121.MsgUpdateParamsAmino): _121.MsgUpdateParams;
                    toAmino(message: _121.MsgUpdateParams): _121.MsgUpdateParamsAmino;
                    fromAminoMsg(object: _121.MsgUpdateParamsAminoMsg): _121.MsgUpdateParams;
                    toAminoMsg(message: _121.MsgUpdateParams): _121.MsgUpdateParamsAminoMsg;
                    fromProtoMsg(message: _121.MsgUpdateParamsProtoMsg): _121.MsgUpdateParams;
                    toProto(message: _121.MsgUpdateParams): Uint8Array;
                    toProtoMsg(message: _121.MsgUpdateParams): _121.MsgUpdateParamsProtoMsg;
                };
                MsgUpdateParamsResponse: {
                    typeUrl: string;
                    encode(_: _121.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _121.MsgUpdateParamsResponse;
                    fromJSON(_: any): _121.MsgUpdateParamsResponse;
                    toJSON(_: _121.MsgUpdateParamsResponse): unknown;
                    fromPartial(_: Partial<_121.MsgUpdateParamsResponse>): _121.MsgUpdateParamsResponse;
                    fromSDK(_: _121.MsgUpdateParamsResponseSDKType): _121.MsgUpdateParamsResponse;
                    toSDK(_: _121.MsgUpdateParamsResponse): _121.MsgUpdateParamsResponseSDKType;
                    fromAmino(_: _121.MsgUpdateParamsResponseAmino): _121.MsgUpdateParamsResponse;
                    toAmino(_: _121.MsgUpdateParamsResponse): _121.MsgUpdateParamsResponseAmino;
                    fromAminoMsg(object: _121.MsgUpdateParamsResponseAminoMsg): _121.MsgUpdateParamsResponse;
                    toAminoMsg(message: _121.MsgUpdateParamsResponse): _121.MsgUpdateParamsResponseAminoMsg;
                    fromProtoMsg(message: _121.MsgUpdateParamsResponseProtoMsg): _121.MsgUpdateParamsResponse;
                    toProto(message: _121.MsgUpdateParamsResponse): Uint8Array;
                    toProtoMsg(message: _121.MsgUpdateParamsResponse): _121.MsgUpdateParamsResponseProtoMsg;
                };
                QueryConnectionRequest: {
                    typeUrl: string;
                    encode(message: _120.QueryConnectionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _120.QueryConnectionRequest;
                    fromJSON(object: any): _120.QueryConnectionRequest;
                    toJSON(message: _120.QueryConnectionRequest): unknown;
                    fromPartial(object: Partial<_120.QueryConnectionRequest>): _120.QueryConnectionRequest;
                    fromSDK(object: _120.QueryConnectionRequestSDKType): _120.QueryConnectionRequest;
                    toSDK(message: _120.QueryConnectionRequest): _120.QueryConnectionRequestSDKType;
                    fromAmino(object: _120.QueryConnectionRequestAmino): _120.QueryConnectionRequest;
                    toAmino(message: _120.QueryConnectionRequest): _120.QueryConnectionRequestAmino;
                    fromAminoMsg(object: _120.QueryConnectionRequestAminoMsg): _120.QueryConnectionRequest;
                    toAminoMsg(message: _120.QueryConnectionRequest): _120.QueryConnectionRequestAminoMsg;
                    fromProtoMsg(message: _120.QueryConnectionRequestProtoMsg): _120.QueryConnectionRequest;
                    toProto(message: _120.QueryConnectionRequest): Uint8Array;
                    toProtoMsg(message: _120.QueryConnectionRequest): _120.QueryConnectionRequestProtoMsg;
                };
                QueryConnectionResponse: {
                    typeUrl: string;
                    encode(message: _120.QueryConnectionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _120.QueryConnectionResponse;
                    fromJSON(object: any): _120.QueryConnectionResponse;
                    toJSON(message: _120.QueryConnectionResponse): unknown;
                    fromPartial(object: Partial<_120.QueryConnectionResponse>): _120.QueryConnectionResponse;
                    fromSDK(object: _120.QueryConnectionResponseSDKType): _120.QueryConnectionResponse;
                    toSDK(message: _120.QueryConnectionResponse): _120.QueryConnectionResponseSDKType;
                    fromAmino(object: _120.QueryConnectionResponseAmino): _120.QueryConnectionResponse;
                    toAmino(message: _120.QueryConnectionResponse): _120.QueryConnectionResponseAmino;
                    fromAminoMsg(object: _120.QueryConnectionResponseAminoMsg): _120.QueryConnectionResponse;
                    toAminoMsg(message: _120.QueryConnectionResponse): _120.QueryConnectionResponseAminoMsg;
                    fromProtoMsg(message: _120.QueryConnectionResponseProtoMsg): _120.QueryConnectionResponse;
                    toProto(message: _120.QueryConnectionResponse): Uint8Array;
                    toProtoMsg(message: _120.QueryConnectionResponse): _120.QueryConnectionResponseProtoMsg;
                };
                QueryConnectionsRequest: {
                    typeUrl: string;
                    encode(message: _120.QueryConnectionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _120.QueryConnectionsRequest;
                    fromJSON(object: any): _120.QueryConnectionsRequest;
                    toJSON(message: _120.QueryConnectionsRequest): unknown;
                    fromPartial(object: Partial<_120.QueryConnectionsRequest>): _120.QueryConnectionsRequest;
                    fromSDK(object: _120.QueryConnectionsRequestSDKType): _120.QueryConnectionsRequest;
                    toSDK(message: _120.QueryConnectionsRequest): _120.QueryConnectionsRequestSDKType;
                    fromAmino(object: _120.QueryConnectionsRequestAmino): _120.QueryConnectionsRequest;
                    toAmino(message: _120.QueryConnectionsRequest): _120.QueryConnectionsRequestAmino;
                    fromAminoMsg(object: _120.QueryConnectionsRequestAminoMsg): _120.QueryConnectionsRequest;
                    toAminoMsg(message: _120.QueryConnectionsRequest): _120.QueryConnectionsRequestAminoMsg;
                    fromProtoMsg(message: _120.QueryConnectionsRequestProtoMsg): _120.QueryConnectionsRequest;
                    toProto(message: _120.QueryConnectionsRequest): Uint8Array;
                    toProtoMsg(message: _120.QueryConnectionsRequest): _120.QueryConnectionsRequestProtoMsg;
                };
                QueryConnectionsResponse: {
                    typeUrl: string;
                    encode(message: _120.QueryConnectionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _120.QueryConnectionsResponse;
                    fromJSON(object: any): _120.QueryConnectionsResponse;
                    toJSON(message: _120.QueryConnectionsResponse): unknown;
                    fromPartial(object: Partial<_120.QueryConnectionsResponse>): _120.QueryConnectionsResponse;
                    fromSDK(object: _120.QueryConnectionsResponseSDKType): _120.QueryConnectionsResponse;
                    toSDK(message: _120.QueryConnectionsResponse): _120.QueryConnectionsResponseSDKType;
                    fromAmino(object: _120.QueryConnectionsResponseAmino): _120.QueryConnectionsResponse;
                    toAmino(message: _120.QueryConnectionsResponse): _120.QueryConnectionsResponseAmino;
                    fromAminoMsg(object: _120.QueryConnectionsResponseAminoMsg): _120.QueryConnectionsResponse;
                    toAminoMsg(message: _120.QueryConnectionsResponse): _120.QueryConnectionsResponseAminoMsg;
                    fromProtoMsg(message: _120.QueryConnectionsResponseProtoMsg): _120.QueryConnectionsResponse;
                    toProto(message: _120.QueryConnectionsResponse): Uint8Array;
                    toProtoMsg(message: _120.QueryConnectionsResponse): _120.QueryConnectionsResponseProtoMsg;
                };
                QueryClientConnectionsRequest: {
                    typeUrl: string;
                    encode(message: _120.QueryClientConnectionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _120.QueryClientConnectionsRequest;
                    fromJSON(object: any): _120.QueryClientConnectionsRequest;
                    toJSON(message: _120.QueryClientConnectionsRequest): unknown;
                    fromPartial(object: Partial<_120.QueryClientConnectionsRequest>): _120.QueryClientConnectionsRequest;
                    fromSDK(object: _120.QueryClientConnectionsRequestSDKType): _120.QueryClientConnectionsRequest;
                    toSDK(message: _120.QueryClientConnectionsRequest): _120.QueryClientConnectionsRequestSDKType;
                    fromAmino(object: _120.QueryClientConnectionsRequestAmino): _120.QueryClientConnectionsRequest;
                    toAmino(message: _120.QueryClientConnectionsRequest): _120.QueryClientConnectionsRequestAmino;
                    fromAminoMsg(object: _120.QueryClientConnectionsRequestAminoMsg): _120.QueryClientConnectionsRequest;
                    toAminoMsg(message: _120.QueryClientConnectionsRequest): _120.QueryClientConnectionsRequestAminoMsg;
                    fromProtoMsg(message: _120.QueryClientConnectionsRequestProtoMsg): _120.QueryClientConnectionsRequest;
                    toProto(message: _120.QueryClientConnectionsRequest): Uint8Array;
                    toProtoMsg(message: _120.QueryClientConnectionsRequest): _120.QueryClientConnectionsRequestProtoMsg;
                };
                QueryClientConnectionsResponse: {
                    typeUrl: string;
                    encode(message: _120.QueryClientConnectionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _120.QueryClientConnectionsResponse;
                    fromJSON(object: any): _120.QueryClientConnectionsResponse;
                    toJSON(message: _120.QueryClientConnectionsResponse): unknown;
                    fromPartial(object: Partial<_120.QueryClientConnectionsResponse>): _120.QueryClientConnectionsResponse;
                    fromSDK(object: _120.QueryClientConnectionsResponseSDKType): _120.QueryClientConnectionsResponse;
                    toSDK(message: _120.QueryClientConnectionsResponse): _120.QueryClientConnectionsResponseSDKType;
                    fromAmino(object: _120.QueryClientConnectionsResponseAmino): _120.QueryClientConnectionsResponse;
                    toAmino(message: _120.QueryClientConnectionsResponse): _120.QueryClientConnectionsResponseAmino;
                    fromAminoMsg(object: _120.QueryClientConnectionsResponseAminoMsg): _120.QueryClientConnectionsResponse;
                    toAminoMsg(message: _120.QueryClientConnectionsResponse): _120.QueryClientConnectionsResponseAminoMsg;
                    fromProtoMsg(message: _120.QueryClientConnectionsResponseProtoMsg): _120.QueryClientConnectionsResponse;
                    toProto(message: _120.QueryClientConnectionsResponse): Uint8Array;
                    toProtoMsg(message: _120.QueryClientConnectionsResponse): _120.QueryClientConnectionsResponseProtoMsg;
                };
                QueryConnectionClientStateRequest: {
                    typeUrl: string;
                    encode(message: _120.QueryConnectionClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _120.QueryConnectionClientStateRequest;
                    fromJSON(object: any): _120.QueryConnectionClientStateRequest;
                    toJSON(message: _120.QueryConnectionClientStateRequest): unknown;
                    fromPartial(object: Partial<_120.QueryConnectionClientStateRequest>): _120.QueryConnectionClientStateRequest;
                    fromSDK(object: _120.QueryConnectionClientStateRequestSDKType): _120.QueryConnectionClientStateRequest;
                    toSDK(message: _120.QueryConnectionClientStateRequest): _120.QueryConnectionClientStateRequestSDKType;
                    fromAmino(object: _120.QueryConnectionClientStateRequestAmino): _120.QueryConnectionClientStateRequest;
                    toAmino(message: _120.QueryConnectionClientStateRequest): _120.QueryConnectionClientStateRequestAmino;
                    fromAminoMsg(object: _120.QueryConnectionClientStateRequestAminoMsg): _120.QueryConnectionClientStateRequest;
                    toAminoMsg(message: _120.QueryConnectionClientStateRequest): _120.QueryConnectionClientStateRequestAminoMsg;
                    fromProtoMsg(message: _120.QueryConnectionClientStateRequestProtoMsg): _120.QueryConnectionClientStateRequest;
                    toProto(message: _120.QueryConnectionClientStateRequest): Uint8Array;
                    toProtoMsg(message: _120.QueryConnectionClientStateRequest): _120.QueryConnectionClientStateRequestProtoMsg;
                };
                QueryConnectionClientStateResponse: {
                    typeUrl: string;
                    encode(message: _120.QueryConnectionClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _120.QueryConnectionClientStateResponse;
                    fromJSON(object: any): _120.QueryConnectionClientStateResponse;
                    toJSON(message: _120.QueryConnectionClientStateResponse): unknown;
                    fromPartial(object: Partial<_120.QueryConnectionClientStateResponse>): _120.QueryConnectionClientStateResponse;
                    fromSDK(object: _120.QueryConnectionClientStateResponseSDKType): _120.QueryConnectionClientStateResponse;
                    toSDK(message: _120.QueryConnectionClientStateResponse): _120.QueryConnectionClientStateResponseSDKType;
                    fromAmino(object: _120.QueryConnectionClientStateResponseAmino): _120.QueryConnectionClientStateResponse;
                    toAmino(message: _120.QueryConnectionClientStateResponse): _120.QueryConnectionClientStateResponseAmino;
                    fromAminoMsg(object: _120.QueryConnectionClientStateResponseAminoMsg): _120.QueryConnectionClientStateResponse;
                    toAminoMsg(message: _120.QueryConnectionClientStateResponse): _120.QueryConnectionClientStateResponseAminoMsg;
                    fromProtoMsg(message: _120.QueryConnectionClientStateResponseProtoMsg): _120.QueryConnectionClientStateResponse;
                    toProto(message: _120.QueryConnectionClientStateResponse): Uint8Array;
                    toProtoMsg(message: _120.QueryConnectionClientStateResponse): _120.QueryConnectionClientStateResponseProtoMsg;
                };
                QueryConnectionConsensusStateRequest: {
                    typeUrl: string;
                    encode(message: _120.QueryConnectionConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _120.QueryConnectionConsensusStateRequest;
                    fromJSON(object: any): _120.QueryConnectionConsensusStateRequest;
                    toJSON(message: _120.QueryConnectionConsensusStateRequest): unknown;
                    fromPartial(object: Partial<_120.QueryConnectionConsensusStateRequest>): _120.QueryConnectionConsensusStateRequest;
                    fromSDK(object: _120.QueryConnectionConsensusStateRequestSDKType): _120.QueryConnectionConsensusStateRequest;
                    toSDK(message: _120.QueryConnectionConsensusStateRequest): _120.QueryConnectionConsensusStateRequestSDKType;
                    fromAmino(object: _120.QueryConnectionConsensusStateRequestAmino): _120.QueryConnectionConsensusStateRequest;
                    toAmino(message: _120.QueryConnectionConsensusStateRequest): _120.QueryConnectionConsensusStateRequestAmino;
                    fromAminoMsg(object: _120.QueryConnectionConsensusStateRequestAminoMsg): _120.QueryConnectionConsensusStateRequest;
                    toAminoMsg(message: _120.QueryConnectionConsensusStateRequest): _120.QueryConnectionConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _120.QueryConnectionConsensusStateRequestProtoMsg): _120.QueryConnectionConsensusStateRequest;
                    toProto(message: _120.QueryConnectionConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _120.QueryConnectionConsensusStateRequest): _120.QueryConnectionConsensusStateRequestProtoMsg;
                };
                QueryConnectionConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _120.QueryConnectionConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _120.QueryConnectionConsensusStateResponse;
                    fromJSON(object: any): _120.QueryConnectionConsensusStateResponse;
                    toJSON(message: _120.QueryConnectionConsensusStateResponse): unknown;
                    fromPartial(object: Partial<_120.QueryConnectionConsensusStateResponse>): _120.QueryConnectionConsensusStateResponse;
                    fromSDK(object: _120.QueryConnectionConsensusStateResponseSDKType): _120.QueryConnectionConsensusStateResponse;
                    toSDK(message: _120.QueryConnectionConsensusStateResponse): _120.QueryConnectionConsensusStateResponseSDKType;
                    fromAmino(object: _120.QueryConnectionConsensusStateResponseAmino): _120.QueryConnectionConsensusStateResponse;
                    toAmino(message: _120.QueryConnectionConsensusStateResponse): _120.QueryConnectionConsensusStateResponseAmino;
                    fromAminoMsg(object: _120.QueryConnectionConsensusStateResponseAminoMsg): _120.QueryConnectionConsensusStateResponse;
                    toAminoMsg(message: _120.QueryConnectionConsensusStateResponse): _120.QueryConnectionConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _120.QueryConnectionConsensusStateResponseProtoMsg): _120.QueryConnectionConsensusStateResponse;
                    toProto(message: _120.QueryConnectionConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _120.QueryConnectionConsensusStateResponse): _120.QueryConnectionConsensusStateResponseProtoMsg;
                };
                QueryConnectionParamsRequest: {
                    typeUrl: string;
                    encode(_: _120.QueryConnectionParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _120.QueryConnectionParamsRequest;
                    fromJSON(_: any): _120.QueryConnectionParamsRequest;
                    toJSON(_: _120.QueryConnectionParamsRequest): unknown;
                    fromPartial(_: Partial<_120.QueryConnectionParamsRequest>): _120.QueryConnectionParamsRequest;
                    fromSDK(_: _120.QueryConnectionParamsRequestSDKType): _120.QueryConnectionParamsRequest;
                    toSDK(_: _120.QueryConnectionParamsRequest): _120.QueryConnectionParamsRequestSDKType;
                    fromAmino(_: _120.QueryConnectionParamsRequestAmino): _120.QueryConnectionParamsRequest;
                    toAmino(_: _120.QueryConnectionParamsRequest): _120.QueryConnectionParamsRequestAmino;
                    fromAminoMsg(object: _120.QueryConnectionParamsRequestAminoMsg): _120.QueryConnectionParamsRequest;
                    toAminoMsg(message: _120.QueryConnectionParamsRequest): _120.QueryConnectionParamsRequestAminoMsg;
                    fromProtoMsg(message: _120.QueryConnectionParamsRequestProtoMsg): _120.QueryConnectionParamsRequest;
                    toProto(message: _120.QueryConnectionParamsRequest): Uint8Array;
                    toProtoMsg(message: _120.QueryConnectionParamsRequest): _120.QueryConnectionParamsRequestProtoMsg;
                };
                QueryConnectionParamsResponse: {
                    typeUrl: string;
                    encode(message: _120.QueryConnectionParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _120.QueryConnectionParamsResponse;
                    fromJSON(object: any): _120.QueryConnectionParamsResponse;
                    toJSON(message: _120.QueryConnectionParamsResponse): unknown;
                    fromPartial(object: Partial<_120.QueryConnectionParamsResponse>): _120.QueryConnectionParamsResponse;
                    fromSDK(object: _120.QueryConnectionParamsResponseSDKType): _120.QueryConnectionParamsResponse;
                    toSDK(message: _120.QueryConnectionParamsResponse): _120.QueryConnectionParamsResponseSDKType;
                    fromAmino(object: _120.QueryConnectionParamsResponseAmino): _120.QueryConnectionParamsResponse;
                    toAmino(message: _120.QueryConnectionParamsResponse): _120.QueryConnectionParamsResponseAmino;
                    fromAminoMsg(object: _120.QueryConnectionParamsResponseAminoMsg): _120.QueryConnectionParamsResponse;
                    toAminoMsg(message: _120.QueryConnectionParamsResponse): _120.QueryConnectionParamsResponseAminoMsg;
                    fromProtoMsg(message: _120.QueryConnectionParamsResponseProtoMsg): _120.QueryConnectionParamsResponse;
                    toProto(message: _120.QueryConnectionParamsResponse): Uint8Array;
                    toProtoMsg(message: _120.QueryConnectionParamsResponse): _120.QueryConnectionParamsResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _119.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _119.GenesisState;
                    fromJSON(object: any): _119.GenesisState;
                    toJSON(message: _119.GenesisState): unknown;
                    fromPartial(object: Partial<_119.GenesisState>): _119.GenesisState;
                    fromSDK(object: _119.GenesisStateSDKType): _119.GenesisState;
                    toSDK(message: _119.GenesisState): _119.GenesisStateSDKType;
                    fromAmino(object: _119.GenesisStateAmino): _119.GenesisState;
                    toAmino(message: _119.GenesisState): _119.GenesisStateAmino;
                    fromAminoMsg(object: _119.GenesisStateAminoMsg): _119.GenesisState;
                    toAminoMsg(message: _119.GenesisState): _119.GenesisStateAminoMsg;
                    fromProtoMsg(message: _119.GenesisStateProtoMsg): _119.GenesisState;
                    toProto(message: _119.GenesisState): Uint8Array;
                    toProtoMsg(message: _119.GenesisState): _119.GenesisStateProtoMsg;
                };
                stateFromJSON(object: any): _118.State;
                stateToJSON(object: _118.State): string;
                State: typeof _118.State;
                StateSDKType: typeof _118.State;
                StateAmino: typeof _118.State;
                ConnectionEnd: {
                    typeUrl: string;
                    encode(message: _118.ConnectionEnd, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _118.ConnectionEnd;
                    fromJSON(object: any): _118.ConnectionEnd;
                    toJSON(message: _118.ConnectionEnd): unknown;
                    fromPartial(object: Partial<_118.ConnectionEnd>): _118.ConnectionEnd;
                    fromSDK(object: _118.ConnectionEndSDKType): _118.ConnectionEnd;
                    toSDK(message: _118.ConnectionEnd): _118.ConnectionEndSDKType;
                    fromAmino(object: _118.ConnectionEndAmino): _118.ConnectionEnd;
                    toAmino(message: _118.ConnectionEnd): _118.ConnectionEndAmino;
                    fromAminoMsg(object: _118.ConnectionEndAminoMsg): _118.ConnectionEnd;
                    toAminoMsg(message: _118.ConnectionEnd): _118.ConnectionEndAminoMsg;
                    fromProtoMsg(message: _118.ConnectionEndProtoMsg): _118.ConnectionEnd;
                    toProto(message: _118.ConnectionEnd): Uint8Array;
                    toProtoMsg(message: _118.ConnectionEnd): _118.ConnectionEndProtoMsg;
                };
                IdentifiedConnection: {
                    typeUrl: string;
                    encode(message: _118.IdentifiedConnection, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _118.IdentifiedConnection;
                    fromJSON(object: any): _118.IdentifiedConnection;
                    toJSON(message: _118.IdentifiedConnection): unknown;
                    fromPartial(object: Partial<_118.IdentifiedConnection>): _118.IdentifiedConnection;
                    fromSDK(object: _118.IdentifiedConnectionSDKType): _118.IdentifiedConnection;
                    toSDK(message: _118.IdentifiedConnection): _118.IdentifiedConnectionSDKType;
                    fromAmino(object: _118.IdentifiedConnectionAmino): _118.IdentifiedConnection;
                    toAmino(message: _118.IdentifiedConnection): _118.IdentifiedConnectionAmino;
                    fromAminoMsg(object: _118.IdentifiedConnectionAminoMsg): _118.IdentifiedConnection;
                    toAminoMsg(message: _118.IdentifiedConnection): _118.IdentifiedConnectionAminoMsg;
                    fromProtoMsg(message: _118.IdentifiedConnectionProtoMsg): _118.IdentifiedConnection;
                    toProto(message: _118.IdentifiedConnection): Uint8Array;
                    toProtoMsg(message: _118.IdentifiedConnection): _118.IdentifiedConnectionProtoMsg;
                };
                Counterparty: {
                    typeUrl: string;
                    encode(message: _118.Counterparty, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _118.Counterparty;
                    fromJSON(object: any): _118.Counterparty;
                    toJSON(message: _118.Counterparty): unknown;
                    fromPartial(object: Partial<_118.Counterparty>): _118.Counterparty;
                    fromSDK(object: _118.CounterpartySDKType): _118.Counterparty;
                    toSDK(message: _118.Counterparty): _118.CounterpartySDKType;
                    fromAmino(object: _118.CounterpartyAmino): _118.Counterparty;
                    toAmino(message: _118.Counterparty): _118.CounterpartyAmino;
                    fromAminoMsg(object: _118.CounterpartyAminoMsg): _118.Counterparty;
                    toAminoMsg(message: _118.Counterparty): _118.CounterpartyAminoMsg;
                    fromProtoMsg(message: _118.CounterpartyProtoMsg): _118.Counterparty;
                    toProto(message: _118.Counterparty): Uint8Array;
                    toProtoMsg(message: _118.Counterparty): _118.CounterpartyProtoMsg;
                };
                ClientPaths: {
                    typeUrl: string;
                    encode(message: _118.ClientPaths, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _118.ClientPaths;
                    fromJSON(object: any): _118.ClientPaths;
                    toJSON(message: _118.ClientPaths): unknown;
                    fromPartial(object: Partial<_118.ClientPaths>): _118.ClientPaths;
                    fromSDK(object: _118.ClientPathsSDKType): _118.ClientPaths;
                    toSDK(message: _118.ClientPaths): _118.ClientPathsSDKType;
                    fromAmino(object: _118.ClientPathsAmino): _118.ClientPaths;
                    toAmino(message: _118.ClientPaths): _118.ClientPathsAmino;
                    fromAminoMsg(object: _118.ClientPathsAminoMsg): _118.ClientPaths;
                    toAminoMsg(message: _118.ClientPaths): _118.ClientPathsAminoMsg;
                    fromProtoMsg(message: _118.ClientPathsProtoMsg): _118.ClientPaths;
                    toProto(message: _118.ClientPaths): Uint8Array;
                    toProtoMsg(message: _118.ClientPaths): _118.ClientPathsProtoMsg;
                };
                ConnectionPaths: {
                    typeUrl: string;
                    encode(message: _118.ConnectionPaths, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _118.ConnectionPaths;
                    fromJSON(object: any): _118.ConnectionPaths;
                    toJSON(message: _118.ConnectionPaths): unknown;
                    fromPartial(object: Partial<_118.ConnectionPaths>): _118.ConnectionPaths;
                    fromSDK(object: _118.ConnectionPathsSDKType): _118.ConnectionPaths;
                    toSDK(message: _118.ConnectionPaths): _118.ConnectionPathsSDKType;
                    fromAmino(object: _118.ConnectionPathsAmino): _118.ConnectionPaths;
                    toAmino(message: _118.ConnectionPaths): _118.ConnectionPathsAmino;
                    fromAminoMsg(object: _118.ConnectionPathsAminoMsg): _118.ConnectionPaths;
                    toAminoMsg(message: _118.ConnectionPaths): _118.ConnectionPathsAminoMsg;
                    fromProtoMsg(message: _118.ConnectionPathsProtoMsg): _118.ConnectionPaths;
                    toProto(message: _118.ConnectionPaths): Uint8Array;
                    toProtoMsg(message: _118.ConnectionPaths): _118.ConnectionPathsProtoMsg;
                };
                Version: {
                    typeUrl: string;
                    encode(message: _118.Version, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _118.Version;
                    fromJSON(object: any): _118.Version;
                    toJSON(message: _118.Version): unknown;
                    fromPartial(object: Partial<_118.Version>): _118.Version;
                    fromSDK(object: _118.VersionSDKType): _118.Version;
                    toSDK(message: _118.Version): _118.VersionSDKType;
                    fromAmino(object: _118.VersionAmino): _118.Version;
                    toAmino(message: _118.Version): _118.VersionAmino;
                    fromAminoMsg(object: _118.VersionAminoMsg): _118.Version;
                    toAminoMsg(message: _118.Version): _118.VersionAminoMsg;
                    fromProtoMsg(message: _118.VersionProtoMsg): _118.Version;
                    toProto(message: _118.Version): Uint8Array;
                    toProtoMsg(message: _118.Version): _118.VersionProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    encode(message: _118.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _118.Params;
                    fromJSON(object: any): _118.Params;
                    toJSON(message: _118.Params): unknown;
                    fromPartial(object: Partial<_118.Params>): _118.Params;
                    fromSDK(object: _118.ParamsSDKType): _118.Params;
                    toSDK(message: _118.Params): _118.ParamsSDKType;
                    fromAmino(object: _118.ParamsAmino): _118.Params;
                    toAmino(message: _118.Params): _118.ParamsAmino;
                    fromAminoMsg(object: _118.ParamsAminoMsg): _118.Params;
                    toAminoMsg(message: _118.Params): _118.ParamsAminoMsg;
                    fromProtoMsg(message: _118.ParamsProtoMsg): _118.Params;
                    toProto(message: _118.Params): Uint8Array;
                    toProtoMsg(message: _118.Params): _118.ParamsProtoMsg;
                };
            };
        }
    }
    namespace lightclients {
        namespace localhost {
            const v2: {
                protobufPackage: "ibc.lightclients.localhost.v2";
                ClientState: {
                    typeUrl: string;
                    encode(message: _122.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _122.ClientState;
                    fromJSON(object: any): _122.ClientState;
                    toJSON(message: _122.ClientState): unknown;
                    fromPartial(object: Partial<_122.ClientState>): _122.ClientState;
                    fromSDK(object: _122.ClientStateSDKType): _122.ClientState;
                    toSDK(message: _122.ClientState): _122.ClientStateSDKType;
                    fromAmino(object: _122.ClientStateAmino): _122.ClientState;
                    toAmino(message: _122.ClientState): _122.ClientStateAmino;
                    fromAminoMsg(object: _122.ClientStateAminoMsg): _122.ClientState;
                    toAminoMsg(message: _122.ClientState): _122.ClientStateAminoMsg;
                    fromProtoMsg(message: _122.ClientStateProtoMsg): _122.ClientState;
                    toProto(message: _122.ClientState): Uint8Array;
                    toProtoMsg(message: _122.ClientState): _122.ClientStateProtoMsg;
                };
            };
        }
        namespace solomachine {
            const v2: {
                dataTypeFromJSON(object: any): _123.DataType;
                dataTypeToJSON(object: _123.DataType): string;
                protobufPackage: "ibc.lightclients.solomachine.v2";
                DataType: typeof _123.DataType;
                DataTypeSDKType: typeof _123.DataType;
                DataTypeAmino: typeof _123.DataType;
                ClientState: {
                    typeUrl: string;
                    encode(message: _123.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _123.ClientState;
                    fromJSON(object: any): _123.ClientState;
                    toJSON(message: _123.ClientState): unknown;
                    fromPartial(object: Partial<_123.ClientState>): _123.ClientState;
                    fromSDK(object: _123.ClientStateSDKType): _123.ClientState;
                    toSDK(message: _123.ClientState): _123.ClientStateSDKType;
                    fromAmino(object: _123.ClientStateAmino): _123.ClientState;
                    toAmino(message: _123.ClientState): _123.ClientStateAmino;
                    fromAminoMsg(object: _123.ClientStateAminoMsg): _123.ClientState;
                    toAminoMsg(message: _123.ClientState): _123.ClientStateAminoMsg;
                    fromProtoMsg(message: _123.ClientStateProtoMsg): _123.ClientState;
                    toProto(message: _123.ClientState): Uint8Array;
                    toProtoMsg(message: _123.ClientState): _123.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    encode(message: _123.ConsensusState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _123.ConsensusState;
                    fromJSON(object: any): _123.ConsensusState;
                    toJSON(message: _123.ConsensusState): unknown;
                    fromPartial(object: Partial<_123.ConsensusState>): _123.ConsensusState;
                    fromSDK(object: _123.ConsensusStateSDKType): _123.ConsensusState;
                    toSDK(message: _123.ConsensusState): _123.ConsensusStateSDKType;
                    fromAmino(object: _123.ConsensusStateAmino): _123.ConsensusState;
                    toAmino(message: _123.ConsensusState): _123.ConsensusStateAmino;
                    fromAminoMsg(object: _123.ConsensusStateAminoMsg): _123.ConsensusState;
                    toAminoMsg(message: _123.ConsensusState): _123.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _123.ConsensusStateProtoMsg): _123.ConsensusState;
                    toProto(message: _123.ConsensusState): Uint8Array;
                    toProtoMsg(message: _123.ConsensusState): _123.ConsensusStateProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _123.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _123.Header;
                    fromJSON(object: any): _123.Header;
                    toJSON(message: _123.Header): unknown;
                    fromPartial(object: Partial<_123.Header>): _123.Header;
                    fromSDK(object: _123.HeaderSDKType): _123.Header;
                    toSDK(message: _123.Header): _123.HeaderSDKType;
                    fromAmino(object: _123.HeaderAmino): _123.Header;
                    toAmino(message: _123.Header): _123.HeaderAmino;
                    fromAminoMsg(object: _123.HeaderAminoMsg): _123.Header;
                    toAminoMsg(message: _123.Header): _123.HeaderAminoMsg;
                    fromProtoMsg(message: _123.HeaderProtoMsg): _123.Header;
                    toProto(message: _123.Header): Uint8Array;
                    toProtoMsg(message: _123.Header): _123.HeaderProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    encode(message: _123.Misbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _123.Misbehaviour;
                    fromJSON(object: any): _123.Misbehaviour;
                    toJSON(message: _123.Misbehaviour): unknown;
                    fromPartial(object: Partial<_123.Misbehaviour>): _123.Misbehaviour;
                    fromSDK(object: _123.MisbehaviourSDKType): _123.Misbehaviour;
                    toSDK(message: _123.Misbehaviour): _123.MisbehaviourSDKType;
                    fromAmino(object: _123.MisbehaviourAmino): _123.Misbehaviour;
                    toAmino(message: _123.Misbehaviour): _123.MisbehaviourAmino;
                    fromAminoMsg(object: _123.MisbehaviourAminoMsg): _123.Misbehaviour;
                    toAminoMsg(message: _123.Misbehaviour): _123.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _123.MisbehaviourProtoMsg): _123.Misbehaviour;
                    toProto(message: _123.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _123.Misbehaviour): _123.MisbehaviourProtoMsg;
                };
                SignatureAndData: {
                    typeUrl: string;
                    encode(message: _123.SignatureAndData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _123.SignatureAndData;
                    fromJSON(object: any): _123.SignatureAndData;
                    toJSON(message: _123.SignatureAndData): unknown;
                    fromPartial(object: Partial<_123.SignatureAndData>): _123.SignatureAndData;
                    fromSDK(object: _123.SignatureAndDataSDKType): _123.SignatureAndData;
                    toSDK(message: _123.SignatureAndData): _123.SignatureAndDataSDKType;
                    fromAmino(object: _123.SignatureAndDataAmino): _123.SignatureAndData;
                    toAmino(message: _123.SignatureAndData): _123.SignatureAndDataAmino;
                    fromAminoMsg(object: _123.SignatureAndDataAminoMsg): _123.SignatureAndData;
                    toAminoMsg(message: _123.SignatureAndData): _123.SignatureAndDataAminoMsg;
                    fromProtoMsg(message: _123.SignatureAndDataProtoMsg): _123.SignatureAndData;
                    toProto(message: _123.SignatureAndData): Uint8Array;
                    toProtoMsg(message: _123.SignatureAndData): _123.SignatureAndDataProtoMsg;
                };
                TimestampedSignatureData: {
                    typeUrl: string;
                    encode(message: _123.TimestampedSignatureData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _123.TimestampedSignatureData;
                    fromJSON(object: any): _123.TimestampedSignatureData;
                    toJSON(message: _123.TimestampedSignatureData): unknown;
                    fromPartial(object: Partial<_123.TimestampedSignatureData>): _123.TimestampedSignatureData;
                    fromSDK(object: _123.TimestampedSignatureDataSDKType): _123.TimestampedSignatureData;
                    toSDK(message: _123.TimestampedSignatureData): _123.TimestampedSignatureDataSDKType;
                    fromAmino(object: _123.TimestampedSignatureDataAmino): _123.TimestampedSignatureData;
                    toAmino(message: _123.TimestampedSignatureData): _123.TimestampedSignatureDataAmino;
                    fromAminoMsg(object: _123.TimestampedSignatureDataAminoMsg): _123.TimestampedSignatureData;
                    toAminoMsg(message: _123.TimestampedSignatureData): _123.TimestampedSignatureDataAminoMsg;
                    fromProtoMsg(message: _123.TimestampedSignatureDataProtoMsg): _123.TimestampedSignatureData;
                    toProto(message: _123.TimestampedSignatureData): Uint8Array;
                    toProtoMsg(message: _123.TimestampedSignatureData): _123.TimestampedSignatureDataProtoMsg;
                };
                SignBytes: {
                    typeUrl: string;
                    encode(message: _123.SignBytes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _123.SignBytes;
                    fromJSON(object: any): _123.SignBytes;
                    toJSON(message: _123.SignBytes): unknown;
                    fromPartial(object: Partial<_123.SignBytes>): _123.SignBytes;
                    fromSDK(object: _123.SignBytesSDKType): _123.SignBytes;
                    toSDK(message: _123.SignBytes): _123.SignBytesSDKType;
                    fromAmino(object: _123.SignBytesAmino): _123.SignBytes;
                    toAmino(message: _123.SignBytes): _123.SignBytesAmino;
                    fromAminoMsg(object: _123.SignBytesAminoMsg): _123.SignBytes;
                    toAminoMsg(message: _123.SignBytes): _123.SignBytesAminoMsg;
                    fromProtoMsg(message: _123.SignBytesProtoMsg): _123.SignBytes;
                    toProto(message: _123.SignBytes): Uint8Array;
                    toProtoMsg(message: _123.SignBytes): _123.SignBytesProtoMsg;
                };
                HeaderData: {
                    typeUrl: string;
                    encode(message: _123.HeaderData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _123.HeaderData;
                    fromJSON(object: any): _123.HeaderData;
                    toJSON(message: _123.HeaderData): unknown;
                    fromPartial(object: Partial<_123.HeaderData>): _123.HeaderData;
                    fromSDK(object: _123.HeaderDataSDKType): _123.HeaderData;
                    toSDK(message: _123.HeaderData): _123.HeaderDataSDKType;
                    fromAmino(object: _123.HeaderDataAmino): _123.HeaderData;
                    toAmino(message: _123.HeaderData): _123.HeaderDataAmino;
                    fromAminoMsg(object: _123.HeaderDataAminoMsg): _123.HeaderData;
                    toAminoMsg(message: _123.HeaderData): _123.HeaderDataAminoMsg;
                    fromProtoMsg(message: _123.HeaderDataProtoMsg): _123.HeaderData;
                    toProto(message: _123.HeaderData): Uint8Array;
                    toProtoMsg(message: _123.HeaderData): _123.HeaderDataProtoMsg;
                };
                ClientStateData: {
                    typeUrl: string;
                    encode(message: _123.ClientStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _123.ClientStateData;
                    fromJSON(object: any): _123.ClientStateData;
                    toJSON(message: _123.ClientStateData): unknown;
                    fromPartial(object: Partial<_123.ClientStateData>): _123.ClientStateData;
                    fromSDK(object: _123.ClientStateDataSDKType): _123.ClientStateData;
                    toSDK(message: _123.ClientStateData): _123.ClientStateDataSDKType;
                    fromAmino(object: _123.ClientStateDataAmino): _123.ClientStateData;
                    toAmino(message: _123.ClientStateData): _123.ClientStateDataAmino;
                    fromAminoMsg(object: _123.ClientStateDataAminoMsg): _123.ClientStateData;
                    toAminoMsg(message: _123.ClientStateData): _123.ClientStateDataAminoMsg;
                    fromProtoMsg(message: _123.ClientStateDataProtoMsg): _123.ClientStateData;
                    toProto(message: _123.ClientStateData): Uint8Array;
                    toProtoMsg(message: _123.ClientStateData): _123.ClientStateDataProtoMsg;
                };
                ConsensusStateData: {
                    typeUrl: string;
                    encode(message: _123.ConsensusStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _123.ConsensusStateData;
                    fromJSON(object: any): _123.ConsensusStateData;
                    toJSON(message: _123.ConsensusStateData): unknown;
                    fromPartial(object: Partial<_123.ConsensusStateData>): _123.ConsensusStateData;
                    fromSDK(object: _123.ConsensusStateDataSDKType): _123.ConsensusStateData;
                    toSDK(message: _123.ConsensusStateData): _123.ConsensusStateDataSDKType;
                    fromAmino(object: _123.ConsensusStateDataAmino): _123.ConsensusStateData;
                    toAmino(message: _123.ConsensusStateData): _123.ConsensusStateDataAmino;
                    fromAminoMsg(object: _123.ConsensusStateDataAminoMsg): _123.ConsensusStateData;
                    toAminoMsg(message: _123.ConsensusStateData): _123.ConsensusStateDataAminoMsg;
                    fromProtoMsg(message: _123.ConsensusStateDataProtoMsg): _123.ConsensusStateData;
                    toProto(message: _123.ConsensusStateData): Uint8Array;
                    toProtoMsg(message: _123.ConsensusStateData): _123.ConsensusStateDataProtoMsg;
                };
                ConnectionStateData: {
                    typeUrl: string;
                    encode(message: _123.ConnectionStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _123.ConnectionStateData;
                    fromJSON(object: any): _123.ConnectionStateData;
                    toJSON(message: _123.ConnectionStateData): unknown;
                    fromPartial(object: Partial<_123.ConnectionStateData>): _123.ConnectionStateData;
                    fromSDK(object: _123.ConnectionStateDataSDKType): _123.ConnectionStateData;
                    toSDK(message: _123.ConnectionStateData): _123.ConnectionStateDataSDKType;
                    fromAmino(object: _123.ConnectionStateDataAmino): _123.ConnectionStateData;
                    toAmino(message: _123.ConnectionStateData): _123.ConnectionStateDataAmino;
                    fromAminoMsg(object: _123.ConnectionStateDataAminoMsg): _123.ConnectionStateData;
                    toAminoMsg(message: _123.ConnectionStateData): _123.ConnectionStateDataAminoMsg;
                    fromProtoMsg(message: _123.ConnectionStateDataProtoMsg): _123.ConnectionStateData;
                    toProto(message: _123.ConnectionStateData): Uint8Array;
                    toProtoMsg(message: _123.ConnectionStateData): _123.ConnectionStateDataProtoMsg;
                };
                ChannelStateData: {
                    typeUrl: string;
                    encode(message: _123.ChannelStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _123.ChannelStateData;
                    fromJSON(object: any): _123.ChannelStateData;
                    toJSON(message: _123.ChannelStateData): unknown;
                    fromPartial(object: Partial<_123.ChannelStateData>): _123.ChannelStateData;
                    fromSDK(object: _123.ChannelStateDataSDKType): _123.ChannelStateData;
                    toSDK(message: _123.ChannelStateData): _123.ChannelStateDataSDKType;
                    fromAmino(object: _123.ChannelStateDataAmino): _123.ChannelStateData;
                    toAmino(message: _123.ChannelStateData): _123.ChannelStateDataAmino;
                    fromAminoMsg(object: _123.ChannelStateDataAminoMsg): _123.ChannelStateData;
                    toAminoMsg(message: _123.ChannelStateData): _123.ChannelStateDataAminoMsg;
                    fromProtoMsg(message: _123.ChannelStateDataProtoMsg): _123.ChannelStateData;
                    toProto(message: _123.ChannelStateData): Uint8Array;
                    toProtoMsg(message: _123.ChannelStateData): _123.ChannelStateDataProtoMsg;
                };
                PacketCommitmentData: {
                    typeUrl: string;
                    encode(message: _123.PacketCommitmentData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _123.PacketCommitmentData;
                    fromJSON(object: any): _123.PacketCommitmentData;
                    toJSON(message: _123.PacketCommitmentData): unknown;
                    fromPartial(object: Partial<_123.PacketCommitmentData>): _123.PacketCommitmentData;
                    fromSDK(object: _123.PacketCommitmentDataSDKType): _123.PacketCommitmentData;
                    toSDK(message: _123.PacketCommitmentData): _123.PacketCommitmentDataSDKType;
                    fromAmino(object: _123.PacketCommitmentDataAmino): _123.PacketCommitmentData;
                    toAmino(message: _123.PacketCommitmentData): _123.PacketCommitmentDataAmino;
                    fromAminoMsg(object: _123.PacketCommitmentDataAminoMsg): _123.PacketCommitmentData;
                    toAminoMsg(message: _123.PacketCommitmentData): _123.PacketCommitmentDataAminoMsg;
                    fromProtoMsg(message: _123.PacketCommitmentDataProtoMsg): _123.PacketCommitmentData;
                    toProto(message: _123.PacketCommitmentData): Uint8Array;
                    toProtoMsg(message: _123.PacketCommitmentData): _123.PacketCommitmentDataProtoMsg;
                };
                PacketAcknowledgementData: {
                    typeUrl: string;
                    encode(message: _123.PacketAcknowledgementData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _123.PacketAcknowledgementData;
                    fromJSON(object: any): _123.PacketAcknowledgementData;
                    toJSON(message: _123.PacketAcknowledgementData): unknown;
                    fromPartial(object: Partial<_123.PacketAcknowledgementData>): _123.PacketAcknowledgementData;
                    fromSDK(object: _123.PacketAcknowledgementDataSDKType): _123.PacketAcknowledgementData;
                    toSDK(message: _123.PacketAcknowledgementData): _123.PacketAcknowledgementDataSDKType;
                    fromAmino(object: _123.PacketAcknowledgementDataAmino): _123.PacketAcknowledgementData;
                    toAmino(message: _123.PacketAcknowledgementData): _123.PacketAcknowledgementDataAmino;
                    fromAminoMsg(object: _123.PacketAcknowledgementDataAminoMsg): _123.PacketAcknowledgementData;
                    toAminoMsg(message: _123.PacketAcknowledgementData): _123.PacketAcknowledgementDataAminoMsg;
                    fromProtoMsg(message: _123.PacketAcknowledgementDataProtoMsg): _123.PacketAcknowledgementData;
                    toProto(message: _123.PacketAcknowledgementData): Uint8Array;
                    toProtoMsg(message: _123.PacketAcknowledgementData): _123.PacketAcknowledgementDataProtoMsg;
                };
                PacketReceiptAbsenceData: {
                    typeUrl: string;
                    encode(message: _123.PacketReceiptAbsenceData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _123.PacketReceiptAbsenceData;
                    fromJSON(object: any): _123.PacketReceiptAbsenceData;
                    toJSON(message: _123.PacketReceiptAbsenceData): unknown;
                    fromPartial(object: Partial<_123.PacketReceiptAbsenceData>): _123.PacketReceiptAbsenceData;
                    fromSDK(object: _123.PacketReceiptAbsenceDataSDKType): _123.PacketReceiptAbsenceData;
                    toSDK(message: _123.PacketReceiptAbsenceData): _123.PacketReceiptAbsenceDataSDKType;
                    fromAmino(object: _123.PacketReceiptAbsenceDataAmino): _123.PacketReceiptAbsenceData;
                    toAmino(message: _123.PacketReceiptAbsenceData): _123.PacketReceiptAbsenceDataAmino;
                    fromAminoMsg(object: _123.PacketReceiptAbsenceDataAminoMsg): _123.PacketReceiptAbsenceData;
                    toAminoMsg(message: _123.PacketReceiptAbsenceData): _123.PacketReceiptAbsenceDataAminoMsg;
                    fromProtoMsg(message: _123.PacketReceiptAbsenceDataProtoMsg): _123.PacketReceiptAbsenceData;
                    toProto(message: _123.PacketReceiptAbsenceData): Uint8Array;
                    toProtoMsg(message: _123.PacketReceiptAbsenceData): _123.PacketReceiptAbsenceDataProtoMsg;
                };
                NextSequenceRecvData: {
                    typeUrl: string;
                    encode(message: _123.NextSequenceRecvData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _123.NextSequenceRecvData;
                    fromJSON(object: any): _123.NextSequenceRecvData;
                    toJSON(message: _123.NextSequenceRecvData): unknown;
                    fromPartial(object: Partial<_123.NextSequenceRecvData>): _123.NextSequenceRecvData;
                    fromSDK(object: _123.NextSequenceRecvDataSDKType): _123.NextSequenceRecvData;
                    toSDK(message: _123.NextSequenceRecvData): _123.NextSequenceRecvDataSDKType;
                    fromAmino(object: _123.NextSequenceRecvDataAmino): _123.NextSequenceRecvData;
                    toAmino(message: _123.NextSequenceRecvData): _123.NextSequenceRecvDataAmino;
                    fromAminoMsg(object: _123.NextSequenceRecvDataAminoMsg): _123.NextSequenceRecvData;
                    toAminoMsg(message: _123.NextSequenceRecvData): _123.NextSequenceRecvDataAminoMsg;
                    fromProtoMsg(message: _123.NextSequenceRecvDataProtoMsg): _123.NextSequenceRecvData;
                    toProto(message: _123.NextSequenceRecvData): Uint8Array;
                    toProtoMsg(message: _123.NextSequenceRecvData): _123.NextSequenceRecvDataProtoMsg;
                };
            };
            const v3: {
                protobufPackage: "ibc.lightclients.solomachine.v3";
                ClientState: {
                    typeUrl: string;
                    encode(message: _124.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _124.ClientState;
                    fromJSON(object: any): _124.ClientState;
                    toJSON(message: _124.ClientState): unknown;
                    fromPartial(object: Partial<_124.ClientState>): _124.ClientState;
                    fromSDK(object: _124.ClientStateSDKType): _124.ClientState;
                    toSDK(message: _124.ClientState): _124.ClientStateSDKType;
                    fromAmino(object: _124.ClientStateAmino): _124.ClientState;
                    toAmino(message: _124.ClientState): _124.ClientStateAmino;
                    fromAminoMsg(object: _124.ClientStateAminoMsg): _124.ClientState;
                    toAminoMsg(message: _124.ClientState): _124.ClientStateAminoMsg;
                    fromProtoMsg(message: _124.ClientStateProtoMsg): _124.ClientState;
                    toProto(message: _124.ClientState): Uint8Array;
                    toProtoMsg(message: _124.ClientState): _124.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    encode(message: _124.ConsensusState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _124.ConsensusState;
                    fromJSON(object: any): _124.ConsensusState;
                    toJSON(message: _124.ConsensusState): unknown;
                    fromPartial(object: Partial<_124.ConsensusState>): _124.ConsensusState;
                    fromSDK(object: _124.ConsensusStateSDKType): _124.ConsensusState;
                    toSDK(message: _124.ConsensusState): _124.ConsensusStateSDKType;
                    fromAmino(object: _124.ConsensusStateAmino): _124.ConsensusState;
                    toAmino(message: _124.ConsensusState): _124.ConsensusStateAmino;
                    fromAminoMsg(object: _124.ConsensusStateAminoMsg): _124.ConsensusState;
                    toAminoMsg(message: _124.ConsensusState): _124.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _124.ConsensusStateProtoMsg): _124.ConsensusState;
                    toProto(message: _124.ConsensusState): Uint8Array;
                    toProtoMsg(message: _124.ConsensusState): _124.ConsensusStateProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _124.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _124.Header;
                    fromJSON(object: any): _124.Header;
                    toJSON(message: _124.Header): unknown;
                    fromPartial(object: Partial<_124.Header>): _124.Header;
                    fromSDK(object: _124.HeaderSDKType): _124.Header;
                    toSDK(message: _124.Header): _124.HeaderSDKType;
                    fromAmino(object: _124.HeaderAmino): _124.Header;
                    toAmino(message: _124.Header): _124.HeaderAmino;
                    fromAminoMsg(object: _124.HeaderAminoMsg): _124.Header;
                    toAminoMsg(message: _124.Header): _124.HeaderAminoMsg;
                    fromProtoMsg(message: _124.HeaderProtoMsg): _124.Header;
                    toProto(message: _124.Header): Uint8Array;
                    toProtoMsg(message: _124.Header): _124.HeaderProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    encode(message: _124.Misbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _124.Misbehaviour;
                    fromJSON(object: any): _124.Misbehaviour;
                    toJSON(message: _124.Misbehaviour): unknown;
                    fromPartial(object: Partial<_124.Misbehaviour>): _124.Misbehaviour;
                    fromSDK(object: _124.MisbehaviourSDKType): _124.Misbehaviour;
                    toSDK(message: _124.Misbehaviour): _124.MisbehaviourSDKType;
                    fromAmino(object: _124.MisbehaviourAmino): _124.Misbehaviour;
                    toAmino(message: _124.Misbehaviour): _124.MisbehaviourAmino;
                    fromAminoMsg(object: _124.MisbehaviourAminoMsg): _124.Misbehaviour;
                    toAminoMsg(message: _124.Misbehaviour): _124.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _124.MisbehaviourProtoMsg): _124.Misbehaviour;
                    toProto(message: _124.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _124.Misbehaviour): _124.MisbehaviourProtoMsg;
                };
                SignatureAndData: {
                    typeUrl: string;
                    encode(message: _124.SignatureAndData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _124.SignatureAndData;
                    fromJSON(object: any): _124.SignatureAndData;
                    toJSON(message: _124.SignatureAndData): unknown;
                    fromPartial(object: Partial<_124.SignatureAndData>): _124.SignatureAndData;
                    fromSDK(object: _124.SignatureAndDataSDKType): _124.SignatureAndData;
                    toSDK(message: _124.SignatureAndData): _124.SignatureAndDataSDKType;
                    fromAmino(object: _124.SignatureAndDataAmino): _124.SignatureAndData;
                    toAmino(message: _124.SignatureAndData): _124.SignatureAndDataAmino;
                    fromAminoMsg(object: _124.SignatureAndDataAminoMsg): _124.SignatureAndData;
                    toAminoMsg(message: _124.SignatureAndData): _124.SignatureAndDataAminoMsg;
                    fromProtoMsg(message: _124.SignatureAndDataProtoMsg): _124.SignatureAndData;
                    toProto(message: _124.SignatureAndData): Uint8Array;
                    toProtoMsg(message: _124.SignatureAndData): _124.SignatureAndDataProtoMsg;
                };
                TimestampedSignatureData: {
                    typeUrl: string;
                    encode(message: _124.TimestampedSignatureData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _124.TimestampedSignatureData;
                    fromJSON(object: any): _124.TimestampedSignatureData;
                    toJSON(message: _124.TimestampedSignatureData): unknown;
                    fromPartial(object: Partial<_124.TimestampedSignatureData>): _124.TimestampedSignatureData;
                    fromSDK(object: _124.TimestampedSignatureDataSDKType): _124.TimestampedSignatureData;
                    toSDK(message: _124.TimestampedSignatureData): _124.TimestampedSignatureDataSDKType;
                    fromAmino(object: _124.TimestampedSignatureDataAmino): _124.TimestampedSignatureData;
                    toAmino(message: _124.TimestampedSignatureData): _124.TimestampedSignatureDataAmino;
                    fromAminoMsg(object: _124.TimestampedSignatureDataAminoMsg): _124.TimestampedSignatureData;
                    toAminoMsg(message: _124.TimestampedSignatureData): _124.TimestampedSignatureDataAminoMsg;
                    fromProtoMsg(message: _124.TimestampedSignatureDataProtoMsg): _124.TimestampedSignatureData;
                    toProto(message: _124.TimestampedSignatureData): Uint8Array;
                    toProtoMsg(message: _124.TimestampedSignatureData): _124.TimestampedSignatureDataProtoMsg;
                };
                SignBytes: {
                    typeUrl: string;
                    encode(message: _124.SignBytes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _124.SignBytes;
                    fromJSON(object: any): _124.SignBytes;
                    toJSON(message: _124.SignBytes): unknown;
                    fromPartial(object: Partial<_124.SignBytes>): _124.SignBytes;
                    fromSDK(object: _124.SignBytesSDKType): _124.SignBytes;
                    toSDK(message: _124.SignBytes): _124.SignBytesSDKType;
                    fromAmino(object: _124.SignBytesAmino): _124.SignBytes;
                    toAmino(message: _124.SignBytes): _124.SignBytesAmino;
                    fromAminoMsg(object: _124.SignBytesAminoMsg): _124.SignBytes;
                    toAminoMsg(message: _124.SignBytes): _124.SignBytesAminoMsg;
                    fromProtoMsg(message: _124.SignBytesProtoMsg): _124.SignBytes;
                    toProto(message: _124.SignBytes): Uint8Array;
                    toProtoMsg(message: _124.SignBytes): _124.SignBytesProtoMsg;
                };
                HeaderData: {
                    typeUrl: string;
                    encode(message: _124.HeaderData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _124.HeaderData;
                    fromJSON(object: any): _124.HeaderData;
                    toJSON(message: _124.HeaderData): unknown;
                    fromPartial(object: Partial<_124.HeaderData>): _124.HeaderData;
                    fromSDK(object: _124.HeaderDataSDKType): _124.HeaderData;
                    toSDK(message: _124.HeaderData): _124.HeaderDataSDKType;
                    fromAmino(object: _124.HeaderDataAmino): _124.HeaderData;
                    toAmino(message: _124.HeaderData): _124.HeaderDataAmino;
                    fromAminoMsg(object: _124.HeaderDataAminoMsg): _124.HeaderData;
                    toAminoMsg(message: _124.HeaderData): _124.HeaderDataAminoMsg;
                    fromProtoMsg(message: _124.HeaderDataProtoMsg): _124.HeaderData;
                    toProto(message: _124.HeaderData): Uint8Array;
                    toProtoMsg(message: _124.HeaderData): _124.HeaderDataProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1: {
                protobufPackage: "ibc.lightclients.tendermint.v1";
                ClientState: {
                    typeUrl: string;
                    encode(message: _125.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _125.ClientState;
                    fromJSON(object: any): _125.ClientState;
                    toJSON(message: _125.ClientState): unknown;
                    fromPartial(object: Partial<_125.ClientState>): _125.ClientState;
                    fromSDK(object: _125.ClientStateSDKType): _125.ClientState;
                    toSDK(message: _125.ClientState): _125.ClientStateSDKType;
                    fromAmino(object: _125.ClientStateAmino): _125.ClientState;
                    toAmino(message: _125.ClientState): _125.ClientStateAmino;
                    fromAminoMsg(object: _125.ClientStateAminoMsg): _125.ClientState;
                    toAminoMsg(message: _125.ClientState): _125.ClientStateAminoMsg;
                    fromProtoMsg(message: _125.ClientStateProtoMsg): _125.ClientState;
                    toProto(message: _125.ClientState): Uint8Array;
                    toProtoMsg(message: _125.ClientState): _125.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    encode(message: _125.ConsensusState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _125.ConsensusState;
                    fromJSON(object: any): _125.ConsensusState;
                    toJSON(message: _125.ConsensusState): unknown;
                    fromPartial(object: Partial<_125.ConsensusState>): _125.ConsensusState;
                    fromSDK(object: _125.ConsensusStateSDKType): _125.ConsensusState;
                    toSDK(message: _125.ConsensusState): _125.ConsensusStateSDKType;
                    fromAmino(object: _125.ConsensusStateAmino): _125.ConsensusState;
                    toAmino(message: _125.ConsensusState): _125.ConsensusStateAmino;
                    fromAminoMsg(object: _125.ConsensusStateAminoMsg): _125.ConsensusState;
                    toAminoMsg(message: _125.ConsensusState): _125.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _125.ConsensusStateProtoMsg): _125.ConsensusState;
                    toProto(message: _125.ConsensusState): Uint8Array;
                    toProtoMsg(message: _125.ConsensusState): _125.ConsensusStateProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    encode(message: _125.Misbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _125.Misbehaviour;
                    fromJSON(object: any): _125.Misbehaviour;
                    toJSON(message: _125.Misbehaviour): unknown;
                    fromPartial(object: Partial<_125.Misbehaviour>): _125.Misbehaviour;
                    fromSDK(object: _125.MisbehaviourSDKType): _125.Misbehaviour;
                    toSDK(message: _125.Misbehaviour): _125.MisbehaviourSDKType;
                    fromAmino(object: _125.MisbehaviourAmino): _125.Misbehaviour;
                    toAmino(message: _125.Misbehaviour): _125.MisbehaviourAmino;
                    fromAminoMsg(object: _125.MisbehaviourAminoMsg): _125.Misbehaviour;
                    toAminoMsg(message: _125.Misbehaviour): _125.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _125.MisbehaviourProtoMsg): _125.Misbehaviour;
                    toProto(message: _125.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _125.Misbehaviour): _125.MisbehaviourProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _125.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _125.Header;
                    fromJSON(object: any): _125.Header;
                    toJSON(message: _125.Header): unknown;
                    fromPartial(object: Partial<_125.Header>): _125.Header;
                    fromSDK(object: _125.HeaderSDKType): _125.Header;
                    toSDK(message: _125.Header): _125.HeaderSDKType;
                    fromAmino(object: _125.HeaderAmino): _125.Header;
                    toAmino(message: _125.Header): _125.HeaderAmino;
                    fromAminoMsg(object: _125.HeaderAminoMsg): _125.Header;
                    toAminoMsg(message: _125.Header): _125.HeaderAminoMsg;
                    fromProtoMsg(message: _125.HeaderProtoMsg): _125.Header;
                    toProto(message: _125.Header): Uint8Array;
                    toProtoMsg(message: _125.Header): _125.HeaderProtoMsg;
                };
                Fraction: {
                    typeUrl: string;
                    encode(message: _125.Fraction, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: import("..").BinaryReader | Uint8Array, length?: number): _125.Fraction;
                    fromJSON(object: any): _125.Fraction;
                    toJSON(message: _125.Fraction): unknown;
                    fromPartial(object: Partial<_125.Fraction>): _125.Fraction;
                    fromSDK(object: _125.FractionSDKType): _125.Fraction;
                    toSDK(message: _125.Fraction): _125.FractionSDKType;
                    fromAmino(object: _125.FractionAmino): _125.Fraction;
                    toAmino(message: _125.Fraction): _125.FractionAmino;
                    fromAminoMsg(object: _125.FractionAminoMsg): _125.Fraction;
                    toAminoMsg(message: _125.Fraction): _125.FractionAminoMsg;
                    fromProtoMsg(message: _125.FractionProtoMsg): _125.Fraction;
                    toProto(message: _125.Fraction): Uint8Array;
                    toProtoMsg(message: _125.Fraction): _125.FractionProtoMsg;
                };
            };
        }
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: any;
                };
                bank: {
                    v1beta1: any;
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
            ibc: {
                applications: {
                    interchain_accounts: {
                        controller: {
                            v1: any;
                        };
                        host: {
                            v1: any;
                        };
                    };
                    transfer: {
                        v1: any;
                    };
                };
                core: {
                    channel: {
                        v1: any;
                    };
                    client: {
                        v1: any;
                    };
                    connection: {
                        v1: any;
                    };
                };
            };
        }>;
        createGrpcGateWayClient: ({ endpoint }: {
            endpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: import("../cosmos/auth/v1beta1/query.rpc.Query").QueryClientImpl;
                };
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/query.rpc.Query").QueryClientImpl;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/query.rpc.Query").QueryClientImpl;
                };
                base: {
                    tendermint: {
                        v1beta1: import("../cosmos/base/tendermint/v1beta1/query.rpc.Service").ServiceClientImpl;
                    };
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/query.rpc.Query").QueryClientImpl;
                };
                feegrant: {
                    v1beta1: import("../cosmos/feegrant/v1beta1/query.rpc.Query").QueryClientImpl;
                };
                gov: {
                    v1: import("../cosmos/gov/v1/query.rpc.Query").QueryClientImpl;
                    v1beta1: import("../cosmos/gov/v1beta1/query.rpc.Query").QueryClientImpl;
                };
                group: {
                    v1: import("../cosmos/group/v1/query.rpc.Query").QueryClientImpl;
                };
                mint: {
                    v1beta1: import("../cosmos/mint/v1beta1/query.rpc.Query").QueryClientImpl;
                };
                nft: {
                    v1beta1: import("../cosmos/nft/v1beta1/query.rpc.Query").QueryClientImpl;
                };
                params: {
                    v1beta1: import("../cosmos/params/v1beta1/query.rpc.Query").QueryClientImpl;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/query.rpc.Query").QueryClientImpl;
                };
                tx: {
                    v1beta1: import("../cosmos/tx/v1beta1/service.rpc.Service").ServiceClientImpl;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/query.rpc.Query").QueryClientImpl;
                };
            };
            ibc: {
                applications: {
                    interchain_accounts: {
                        controller: {
                            v1: _233.QueryClientImpl;
                        };
                        host: {
                            v1: _234.QueryClientImpl;
                        };
                    };
                    transfer: {
                        v1: _235.QueryClientImpl;
                    };
                };
                core: {
                    channel: {
                        v1: _236.QueryClientImpl;
                    };
                    client: {
                        v1: _237.QueryClientImpl;
                    };
                    connection: {
                        v1: _238.QueryClientImpl;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: import("../cosmos/auth/v1beta1/query.lcd").LCDQueryClient;
                };
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/query.lcd").LCDQueryClient;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/query.lcd").LCDQueryClient;
                };
                base: {
                    tendermint: {
                        v1beta1: import("../cosmos/base/tendermint/v1beta1/query.lcd").LCDQueryClient;
                    };
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/query.lcd").LCDQueryClient;
                };
                feegrant: {
                    v1beta1: import("../cosmos/feegrant/v1beta1/query.lcd").LCDQueryClient;
                };
                gov: {
                    v1: import("../cosmos/gov/v1/query.lcd").LCDQueryClient;
                    v1beta1: import("../cosmos/gov/v1beta1/query.lcd").LCDQueryClient;
                };
                group: {
                    v1: import("../cosmos/group/v1/query.lcd").LCDQueryClient;
                };
                mint: {
                    v1beta1: import("../cosmos/mint/v1beta1/query.lcd").LCDQueryClient;
                };
                nft: {
                    v1beta1: import("../cosmos/nft/v1beta1/query.lcd").LCDQueryClient;
                };
                params: {
                    v1beta1: import("../cosmos/params/v1beta1/query.lcd").LCDQueryClient;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/query.lcd").LCDQueryClient;
                };
                tx: {
                    v1beta1: import("../cosmos/tx/v1beta1/service.lcd").LCDQueryClient;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/query.lcd").LCDQueryClient;
                };
            };
            ibc: {
                applications: {
                    interchain_accounts: {
                        controller: {
                            v1: _227.LCDQueryClient;
                        };
                        host: {
                            v1: _228.LCDQueryClient;
                        };
                    };
                    transfer: {
                        v1: _229.LCDQueryClient;
                    };
                };
                core: {
                    channel: {
                        v1: _230.LCDQueryClient;
                    };
                    client: {
                        v1: _231.LCDQueryClient;
                    };
                    connection: {
                        v1: _232.LCDQueryClient;
                    };
                };
            };
        }>;
    };
}
